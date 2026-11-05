!
function() {
	"use strict";
	var t, e, i = Laya.View,
	s = Laya.Scene,
	a = Laya.ClassUtils.regClass; !
	function(t) { !
		function(t) {
			class e extends s {
				constructor() {
					super()
				}
				createChildren() {
					super.createChildren(),
					this.loadScene("Scenes/SceneMain")
				}
			}
			t.SceneMainUI = e,
			a("ui.Scenes.SceneMainUI", e)
		} (t.Scenes || (t.Scenes = {}))
	} (t || (t = {})),
	function(t) { !
		function(t) { !
			function(t) {
				class e extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(e.uiView)
					}
				}
				e.uiView = {
					type: "View",
					props: {
						y: 360,
						x: 800,
						width: 1600,
						scaleY: 1,
						scaleX: 1,
						pivotY: 360,
						pivotX: 800,
						height: 720
					},
					compId: 2,
					child: [{
						type: "Panel",
						props: {
							width: 2e3,
							name: "",
							height: 2e3,
							centerY: 0,
							centerX: 0,
							bgColor: "#000000",
							anchorY: .5,
							anchorX: .5,
							alpha: .5
						},
						compId: 158
					},
					{
						type: "Box",
						props: {
							top: 0,
							scaleY: 1,
							scaleX: 1,
							right: 0,
							name: "main",
							left: 0,
							bottom: 0,
							anchorY: .5,
							anchorX: .5
						},
						compId: 131,
						child: [{
							type: "Panel",
							props: {
								top: 86,
								right: 0,
								left: 0,
								height: 400,
								anchorY: .5,
								anchorX: 0
							},
							compId: 173,
							child: [{
								type: "Box",
								props: {
									y: 0,
									x: 0,
									var: "achiList",
									top: 0,
									right: 0,
									left: 0,
									bottom: 0
								},
								compId: 176
							}]
						},
						{
							type: "Box",
							props: {
								width: 100,
								top: 20,
								name: "box_back",
								left: 100,
								height: 100,
								anchorY: .5,
								anchorX: .5
							},
							compId: 156,
							child: [{
								type: "Button",
								props: {
									y: 50,
									x: 50,
									width: 100,
									var: "btn_back",
									stateNum: 1,
									skin: "ui/ui_back.png",
									scaleY: 1,
									scaleX: 1,
									height: 100,
									anchorY: .5,
									anchorX: .5
								},
								compId: 157
							}]
						}]
					}],
					animations: [{
						nodes: [{
							target: 158,
							keyframes: {
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 158,
									key: "alpha",
									index: 0
								},
								{
									value: .5,
									tweenMethod: "linearNone",
									tween: !0,
									target: 158,
									key: "alpha",
									index: 30
								}]
							}
						},
						{
							target: 157,
							keyframes: {
								scaleY: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "scaleY",
									index: 0
								},
								{
									value: .6,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "scaleY",
									index: 15
								},
								{
									value: 1.1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "scaleY",
									index: 22
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "scaleY",
									index: 27
								}],
								scaleX: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "scaleX",
									index: 0
								},
								{
									value: .6,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "scaleX",
									index: 15
								},
								{
									value: 1.1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "scaleX",
									index: 22
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "scaleX",
									index: 27
								}],
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "alpha",
									index: 0
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "alpha",
									index: 15
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 157,
									key: "alpha",
									index: 22
								}]
							}
						},
						{
							target: 173,
							keyframes: {
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 173,
									key: "alpha",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 173,
									key: "alpha",
									index: 15
								}]
							}
						},
						{
							target: 131,
							keyframes: {
								scaleY: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 131,
									key: "scaleY",
									index: 0
								}],
								scaleX: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 131,
									key: "scaleX",
									index: 0
								}]
							}
						}],
						name: "ani1",
						id: 1,
						frameRate: 60,
						action: 1
					}],
					loadList: ["ui/ui_back.png"],
					loadList3D: []
				},
				t.ViewAchiUI = e,
				a("ui.Scenes.views.ViewAchiUI", e);
				class s extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewAchiNode")
					}
				}
				t.ViewAchiNodeUI = s,
				a("ui.Scenes.views.ViewAchiNodeUI", s);
				class n extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewBuff")
					}
				}
				t.ViewBuffUI = n,
				a("ui.Scenes.views.ViewBuffUI", n);
				class o extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewChangeName")
					}
				}
				t.ViewChangeNameUI = o,
				a("ui.Scenes.views.ViewChangeNameUI", o);
				class h extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewGame")
					}
				}
				t.ViewGameUI = h,
				a("ui.Scenes.views.ViewGameUI", h);
				class l extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewGetShow")
					}
				}
				t.ViewGetShowUI = l,
				a("ui.Scenes.views.ViewGetShowUI", l);
				class r extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewGift")
					}
				}
				t.ViewGiftUI = r,
				a("ui.Scenes.views.ViewGiftUI", r);
				class d extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewLoading")
					}
				}
				t.ViewLoadingUI = d,
				a("ui.Scenes.views.ViewLoadingUI", d);
				class _ extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewMenu")
					}
				}
				t.ViewMenuUI = _,
				a("ui.Scenes.views.ViewMenuUI", _);
				class c extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewNativeAd")
					}
				}
				t.ViewNativeAdUI = c,
				a("ui.Scenes.views.ViewNativeAdUI", c);
				class g extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewNavigate")
					}
				}
				t.ViewNavigateUI = g,
				a("ui.Scenes.views.ViewNavigateUI", g);
				class u extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(u.uiView)
					}
				}
				u.uiView = {
					type: "View",
					props: {
						width: 1600,
						mouseThrough: !0,
						height: 720
					},
					compId: 2,
					child: [{
						type: "Box",
						props: {
							y: 360,
							x: 800,
							var: "boxGames",
							top: 0,
							right: 0,
							mouseThrough: !0,
							left: 0,
							bottom: 0,
							anchorY: .5,
							anchorX: .5
						},
						compId: 3,
						child: [{
							type: "Box",
							props: {
								width: 100,
								name: "game1",
								height: 100,
								centerY: 35,
								centerX: -450,
								anchorY: .5,
								anchorX: .5
							},
							compId: 4
						},
						{
							type: "Box",
							props: {
								width: 100,
								name: "game2",
								height: 100,
								centerY: -205,
								centerX: -450,
								anchorY: .5,
								anchorX: .5
							},
							compId: 8
						},
						{
							type: "Box",
							props: {
								width: 100,
								name: "game3",
								height: 100,
								centerY: -205,
								centerX: 450,
								anchorY: .5,
								anchorX: .5
							},
							compId: 11
						},
						{
							type: "Box",
							props: {
								width: 100,
								name: "game4",
								height: 100,
								centerY: 35,
								centerX: 450,
								anchorY: .5,
								anchorX: .5
							},
							compId: 12
						}]
					}],
					loadList: [],
					loadList3D: []
				},
				t.ViewNavigate2UI = u,
				a("ui.Scenes.views.ViewNavigate2UI", u);
				class p extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(p.uiView)
					}
				}
				p.uiView = {
					type: "View",
					props: {
						width: 140,
						height: 160
					},
					compId: 2,
					child: [{
						type: "Button",
						props: {
							y: 80,
							x: 70,
							width: 138,
							var: "btnClick",
							stateNum: 1,
							skin: "ui/sign_03.png",
							scaleY: 1,
							scaleX: 1,
							height: 156,
							anchorY: .5,
							anchorX: .5,
							alpha: 1
						},
						compId: 3,
						child: [{
							type: "Label",
							props: {
								y: 18,
								x: 70,
								wordWrap: !0,
								var: "gameName",
								text: "蚂蚁行军团",
								fontSize: 15,
								font: "Arial",
								color: "#ce6009",
								bold: !0,
								anchorY: .5,
								anchorX: .5
							},
							compId: 4
						},
						{
							type: "Box",
							props: {
								y: 87,
								x: 69,
								anchorY: .5,
								anchorX: .5
							},
							compId: 5,
							child: [{
								type: "Sprite",
								props: {
									y: 0,
									x: 0,
									width: 110,
									texture: "ui/zp_03.png",
									scaleY: 1,
									scaleX: 1,
									renderType: "mask",
									height: 110
								},
								compId: 6
							},
							{
								type: "Sprite",
								props: {
									y: 0,
									x: 0,
									width: 110,
									var: "gameIcon",
									height: 110
								},
								compId: 7
							}]
						}]
					}],
					loadList: ["ui/sign_03.png", "ui/zp_03.png"],
					loadList3D: []
				},
				t.ViewNavigateNodeUI = p,
				a("ui.Scenes.views.ViewNavigateNodeUI", p);
				class m extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(m.uiView)
					}
				}
				m.uiView = {
					type: "View",
					props: {
						width: 1600,
						height: 720
					},
					compId: 2,
					child: [{
						type: "Panel",
						props: {
							y: 360,
							x: 800,
							width: 2e3,
							name: "",
							height: 2e3,
							centerY: 0,
							centerX: 0,
							bgColor: "#000000",
							anchorY: .5,
							anchorX: .5,
							alpha: .5
						},
						compId: 30
					},
					{
						type: "Box",
						props: {
							width: 100,
							scaleY: .9,
							scaleX: .9,
							name: "main",
							height: 100,
							centerY: -80,
							centerX: 0,
							anchorY: .5,
							anchorX: .5
						},
						compId: 29,
						child: [{
							type: "Image",
							props: {
								y: 50,
								x: 50,
								skin: "ui/total_bg.png",
								name: "bg",
								anchorY: .5,
								anchorX: .5
							},
							compId: 7,
							child: [{
								type: "Image",
								props: {
									y: 73,
									x: 792,
									width: 400,
									skin: "ui/main_06.png",
									name: "title",
									anchorY: .5,
									anchorX: .5
								},
								compId: 8,
								child: [{
									type: "Label",
									props: {
										y: 26.5,
										x: 200,
										var:"zanting",
										text: Language.getName("游戏暂停"),
										fontSize: 24,
										font: "Arial",
										color: "#3f543e",
										bold: !0,
										anchorY: .5,
										anchorX: .5
									},
									compId: 10
								}]
							},
							{
								type: "Button",
								props: {
									y: 190,
									x: 792,
									width: 242,
									var: "btn_close",
									stateNum: 1,
									skin: "ui/skin_02.png",
									scaleY: 1,
									scaleX: 1,
									pivotY: 51,
									pivotX: 121,
									height: 101
								},
								compId: 16,
								child: [{
									type: "Label",
									props: {
										y: 42,
										x: 121,
										text:Language.getName("继续游戏"),
										fontSize: 18,
										font: "Arial",
										color: "#ce6009",
										bold: !0,
										anchorY: .5,
										anchorX: .5
									},
									compId: 17
								}]
							},
							{
								type: "Button",
								props: {
									y: 310,
									x: 792,
									width: 242,
									var: "btn_menu",
									stateNum: 1,
									skin: "ui/skin_03.png",
									scaleY: 1,
									scaleX: 1,
									pivotY: 51,
									pivotX: 121,
									height: 101
								},
								compId: 25,
								child: [{
									type: "Label",
									props: {
										y: 43,
										x: 121,
										text: Language.getName("回主菜单"),
										fontSize: 18,
										font: "Arial",
										color: "#0057b0",
										bold: !0,
										anchorY: .5,
										anchorX: .5
									},
									compId: 26
								}]
							}]
						}]
					},
					{
						type: "Box",
						props: {
							y: 540,
							width: 100,
							var: "box_nativeAd",
							scaleY: .9,
							scaleX: .9,
							pivotY: 50,
							pivotX: 50,
							height: 100,
							centerX: 0
						},
						compId: 45,
						child: [{
							type: "Image",
							props: {
								y: 132,
								x: 50,
								width: 1100,
								var: "img_adBg",
								skin: "ui/zp_02.png",
								sizeGrid: "90,90,90,90",
								scaleY: .65,
								scaleX: .65,
								height: 390,
								anchorY: .5,
								anchorX: .5
							},
							compId: 46
						},
						{
							type: "Box",
							props: {
								y: 30,
								x: -282,
								width: 400,
								height: 200
							},
							compId: 47,
							child: [{
								type: "Image",
								props: {
									y: 0,
									x: 0,
									width: 400,
									skin: "ui/zp_03.png",
									sizeGrid: "15,15,18,15",
									renderType: "mask",
									height: 200
								},
								compId: 48
							},
							{
								type: "Sprite",
								props: {
									y: 0,
									x: 0,
									width: 400,
									var: "img_adShow",
									height: 200
								},
								compId: 49
							}]
						},
						{
							type: "Label",
							props: {
								y: 100,
								x: 250,
								wordWrap: !0,
								width: 240,
								var: "lab_adTitle",
								valign: "middle",
								text: "我是标题",
								height: 60,
								fontSize: 24,
								font: "Arial",
								color: "#212a21",
								bold: !0,
								anchorY: .5,
								anchorX: .5,
								align: "center"
							},
							compId: 50
						},
						{
							type: "Label",
							props: {
								y: 170,
								x: 250,
								wordWrap: !0,
								width: 180,
								var: "lab_adDesc",
								valign: "middle",
								text: "我是描述我是描述我是描述",
								height: 100,
								fontSize: 22,
								font: "Arial",
								color: "#212a21",
								bold: !0,
								anchorY: .5,
								anchorX: .5,
								align: "center"
							},
							compId: 58
						},
						{
							type: "Box",
							props: {
								y: 210,
								x: 358,
								width: 100,
								scaleY: 1,
								scaleX: 1,
								name: "box_adClose",
								height: 100,
								anchorY: .5,
								anchorX: .5,
								alpha: 1
							},
							compId: 51,
							child: [{
								type: "Button",
								props: {
									y: 50,
									x: 50,
									var: "btn_adClose",
									stateNum: 1,
									skin: "ui/try_05.png",
									scaleY: 1,
									scaleX: 1,
									anchorY: .5,
									anchorX: .5
								},
								compId: 52
							}]
						},
						{
							type: "Label",
							props: {
								y: 40,
								x: 360,
								text: "广告",
								fontSize: 20,
								font: "Arial",
								color: "#3f543e",
								bold: !0,
								anchorY: .5,
								anchorX: .5
							},
							compId: 54
						},
						{
							type: "Box",
							props: {
								y: -40,
								x: 50,
								width: 100,
								name: "box_adClick",
								height: 100,
								anchorY: .5,
								anchorX: .5
							},
							compId: 55,
							child: [{
								type: "Button",
								props: {
									y: 50,
									x: 50,
									width: 242,
									var: "btn_adClick",
									stateNum: 1,
									skin: "ui/skin_04.png",
									scaleY: 1,
									scaleX: 1,
									pivotY: 51,
									pivotX: 121,
									height: 101
								},
								compId: 56,
								child: [{
									type: "Label",
									props: {
										y: 38.5,
										x: 123,
										text: "查看广告",
										fontSize: 36,
										font: "Arial",
										color: "#0d8b31",
										bold: !0,
										anchorY: .5,
										anchorX: .5
									},
									compId: 57
								}]
							}]
						}]
					}],
					animations: [{
						nodes: [{
							target: 7,
							keyframes: {
								scaleY: [{
									value: .6,
									tweenMethod: "linearNone",
									tween: !0,
									target: 7,
									key: "scaleY",
									index: 0
								},
								{
									value: 1.1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 7,
									key: "scaleY",
									index: 8
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 7,
									key: "scaleY",
									index: 12
								}],
								scaleX: [{
									value: .6,
									tweenMethod: "linearNone",
									tween: !0,
									target: 7,
									key: "scaleX",
									index: 0
								},
								{
									value: 1.1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 7,
									key: "scaleX",
									index: 8
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 7,
									key: "scaleX",
									index: 12
								}],
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 7,
									key: "alpha",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 7,
									key: "alpha",
									index: 8
								}]
							}
						},
						{
							target: 30,
							keyframes: {
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 30,
									key: "alpha",
									index: 0
								},
								{
									value: .5,
									tweenMethod: "linearNone",
									tween: !0,
									target: 30,
									key: "alpha",
									index: 24
								}]
							}
						},
						{
							target: 16,
							keyframes: {
								scaleY: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "scaleY",
									index: 0
								},
								{
									value: .6,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "scaleY",
									index: 12
								},
								{
									value: 1.1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "scaleY",
									index: 16
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "scaleY",
									index: 20
								}],
								scaleX: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "scaleX",
									index: 0
								},
								{
									value: .6,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "scaleX",
									index: 12
								},
								{
									value: 1.1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "scaleX",
									index: 16
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "scaleX",
									index: 20
								}],
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "alpha",
									index: 0
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "alpha",
									index: 12
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 16,
									key: "alpha",
									index: 16
								}]
							}
						},
						{
							target: 25,
							keyframes: {
								scaleY: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "scaleY",
									index: 0
								},
								{
									value: .6,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "scaleY",
									index: 16
								},
								{
									value: 1.1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "scaleY",
									index: 20
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "scaleY",
									index: 24
								}],
								scaleX: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "scaleX",
									index: 0
								},
								{
									value: .6,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "scaleX",
									index: 16
								},
								{
									value: 1.1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "scaleX",
									index: 20
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "scaleX",
									index: 24
								}],
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "alpha",
									index: 0
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "alpha",
									index: 16
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									label: null,
									key: "alpha",
									index: 20
								}]
							}
						}],
						name: "ani1",
						id: 1,
						frameRate: 40,
						action: 1
					}],
					loadList: ["ui/total_bg.png", "ui/main_06.png", "ui/skin_02.png", "ui/skin_03.png", "ui/zp_02.png", "ui/zp_03.png", "ui/try_05.png", "ui/skin_04.png"],
					loadList3D: []
				},
				t.ViewPauseUI = m,
				a("ui.Scenes.views.ViewPauseUI", m);
				class y extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(y.uiView)
					}
				}
				y.uiView = {
					type: "View",
					props: {
						width: 210,
						height: 30
					},
					compId: 2,
					child: [{
						type: "Label",
						props: {
							y: 14,
							x: 35,
							width: 90,
							var: "playerName",
							valign: "middle",
							text: "aabbccddee",
							height: 18,
							fontSize: 16,
							font: "Arial",
							color: "#3f543e",
							bold: !0,
							anchorY: .5,
							anchorX: 0
						},
						compId: 8,
						child: [{
							type: "Label",
							props: {
								y: 11,
								x: 167,
								var: "score",
								valign: "middle",
								text: "5.55kg",
								fontSize: 16,
								font: "Arial",
								color: "#3f543e",
								bold: !0,
								anchorY: .5,
								anchorX: 1
							},
							compId: 9
						},
						{
							type: "Label",
							props: {
								y: 9,
								x: 132,
								width: 29,
								var: "egg_num",
								valign: "middle",
								text: "x10",
								pivotY: 8,
								height: 16,
								fontSize: 16,
								font: "Arial",
								color: "#3f543e",
								bold: !0
							},
							compId: 10,
							child: [{
								type: "Sprite",
								props: {
									y: -6,
									x: -25,
									texture: "ui/game_01.png",
									scaleY: .5,
									scaleX: .5
								},
								compId: 11
							}]
						}]
					}],
					loadList: ["ui/game_01.png"],
					loadList3D: []
				},
				t.ViewPhbUI = y,
				a("ui.Scenes.views.ViewPhbUI", y);
				class w extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewPrivacy")
					}
				}
				t.ViewPrivacyUI = w,
				a("ui.Scenes.views.ViewPrivacyUI", w);
				class f extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewRelive")
					}
				}
				t.ViewReliveUI = f,
				a("ui.Scenes.views.ViewReliveUI", f);
				class v extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewSign")
					}
				}
				t.ViewSignUI = v,
				a("ui.Scenes.views.ViewSignUI", v);
				class S extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(S.uiView)
					}
				}
				S.uiView = {
					type: "View",
					props: {
						width: 1600,
						height: 720
					},
					compId: 2,
					child: [{
						type: "Box",
						props: {
							var: "box_touchMove",
							top: 0,
							right: 0,
							left: 0,
							bottom: 0
						},
						compId: 70
					},
					{
						type: "Box",
						props: {
							width: 100,
							name: "box_back",
							left: 60,
							height: 100,
							bottom: 30,
							anchorY: .5,
							anchorX: .5
						},
						compId: 56,
						child: [{
							type: "Button",
							props: {
								y: 50,
								x: 50,
								width: 100,
								var: "btn_back",
								stateNum: 1,
								skin: "ui/ui_back.png",
								scaleY: 1,
								scaleX: 1,
								height: 100,
								anchorY: .5,
								anchorX: .5
							},
							compId: 57
						}]
					},
					{
						type: "Box",
						props: {
							width: 278,
							top: -8,
							pivotY: 50,
							pivotX: 139,
							name: "box_gold",
							left: 20,
							height: 100
						},
						compId: 58,
						child: [{
							type: "Sprite",
							props: {
								y: 23.5,
								x: 26.5,
								texture: "ui/main_03.png"
							},
							compId: 60
						},
						{
							type: "Sprite",
							props: {
								y: 37.5,
								x: 83,
								texture: "ui/main_04.png"
							},
							compId: 61
						},
						{
							type: "Sprite",
							props: {
								y: 28.5,
								x: 29,
								texture: "ui/main_01.png",
								name: "icon"
							},
							compId: 62
						},
						{
							type: "Label",
							props: {
								y: 51,
								x: 151,
								var: "lab_gold",
								text: "555555",
								fontSize: 36,
								font: "Arial",
								color: "#3f543e",
								bold: !0,
								anchorY: .5,
								anchorX: .5
							},
							compId: 63
						},
						{
							type: "Button",
							props: {
								y: 50,
								x: 246,
								width: 47,
								var: "btn_gold",
								stateNum: 1,
								skin: "ui/main_03a.png",
								scaleY: 1,
								scaleX: 1,
								pivotY: 27,
								pivotX: 24,
								height: 53
							},
							compId: 64
						}]
					},
					{
						type: "Box",
						props: {
							width: 278,
							top: -8,
							pivotY: 50,
							pivotX: 139,
							name: "box_diamond",
							left: 300,
							height: 100
						},
						compId: 59,
						child: [{
							type: "Sprite",
							props: {
								y: 23.5,
								x: 26.5,
								texture: "ui/main_03.png"
							},
							compId: 65
						},
						{
							type: "Sprite",
							props: {
								y: 37.5,
								x: 83,
								texture: "ui/main_04.png"
							},
							compId: 66
						},
						{
							type: "Sprite",
							props: {
								y: 28.5,
								x: 29,
								texture: "ui/main_02.png"
							},
							compId: 67
						},
						{
							type: "Label",
							props: {
								y: 51,
								x: 151,
								var: "lab_diamond",
								text: "555555",
								fontSize: 36,
								font: "Arial",
								color: "#3f543e",
								bold: !0,
								anchorY: .5,
								anchorX: .5
							},
							compId: 68
						},
						{
							type: "Button",
							props: {
								y: 50,
								x: 246,
								width: 47,
								var: "btn_diamond",
								stateNum: 1,
								skin: "ui/main_03a.png",
								scaleY: 1,
								scaleX: 1,
								pivotY: 27,
								pivotX: 24,
								height: 53
							},
							compId: 69
						}]
					}],
					loadList: ["ui/ui_back.png", "ui/main_03.png", "ui/main_04.png", "ui/main_01.png", "ui/main_03a.png", "ui/main_02.png"],
					loadList3D: []
				},
				t.ViewSkinShopUI = S,
				a("ui.Scenes.views.ViewSkinShopUI", S);
				class B extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewSkinShop2")
					}
				}
				t.ViewSkinShop2UI = B,
				a("ui.Scenes.views.ViewSkinShop2UI", B);
				class C extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewSkinTrial")
					}
				}
				t.ViewSkinTrialUI = C,
				a("ui.Scenes.views.ViewSkinTrialUI", C);
				class x extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewTask")
					}
				}
				t.ViewTaskUI = x,
				a("ui.Scenes.views.ViewTaskUI", x);
				class k extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewTaskNode")
					}
				}
				t.ViewTaskNodeUI = k,
				a("ui.Scenes.views.ViewTaskNodeUI", k);
				class A extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(A.uiView)
					}
				}
				A.uiView = {
					type: "View",
					props: {
						width: 724,
						height: 90
					},
					compId: 2,
					child: [{
						type: "Image",
						props: {
							y: 45,
							x: 362,
							skin: "ui/game_16.png",
							anchorY: .5,
							anchorX: .5
						},
						compId: 8,
						child: [{
							type: "Box",
							props: {
								y: 45,
								x: 362,
								width: 100,
								var: "box_show1",
								height: 100,
								anchorY: .5,
								anchorX: .5
							},
							compId: 15,
							child: [{
								type: "Image",
								props: {
									y: 50,
									x: 50,
									skin: "ui/game_17a.png",
									name: "mode1",
									anchorY: .5,
									anchorX: .5
								},
								compId: 10
							},
							{
								type: "Image",
								props: {
									y: 40.5,
									x: 50,
									skin: "ui/game_18.png",
									name: "mode2",
									anchorY: .5,
									anchorX: .5
								},
								compId: 17
							},
							{
								type: "Image",
								props: {
									y: 50,
									x: 50,
									skin: "ui/game_17b.png",
									name: "mode3",
									anchorY: .5,
									anchorX: .5
								},
								compId: 18
							},
							{
								type: "Image",
								props: {
									y: 50,
									x: 50,
									skin: "ui/game_17c.png",
									name: "mode4",
									anchorY: .5,
									anchorX: .5
								},
								compId: 19
							}]
						},
						{
							type: "Box",
							props: {
								y: 45,
								x: 362,
								width: 100,
								var: "box_show2",
								height: 100,
								anchorY: .5,
								anchorX: .5
							},
							compId: 14,
							child: [{
								type: "Image",
								props: {
									y: 50,
									x: 50,
									skin: "ui/game_17a.png",
									name: "mode1",
									blendMode: "lighter",
									anchorY: .5,
									anchorX: .5
								},
								compId: 11
							},
							{
								type: "Image",
								props: {
									y: 40.5,
									x: 50,
									skin: "ui/game_18.png",
									name: "mode2",
									blendMode: "lighter",
									anchorY: .5,
									anchorX: .5
								},
								compId: 20
							},
							{
								type: "Image",
								props: {
									y: 50,
									x: 50,
									skin: "ui/game_17b.png",
									name: "mode3",
									blendMode: "lighter",
									anchorY: .5,
									anchorX: .5
								},
								compId: 21
							},
							{
								type: "Image",
								props: {
									y: 50,
									x: 50,
									skin: "ui/game_17c.png",
									name: "mode4",
									blendMode: "lighter",
									anchorY: .5,
									anchorX: .5
								},
								compId: 22
							}]
						}]
					}],
					animations: [{
						nodes: [{
							target: 8,
							keyframes: {
								scaleY: [{
									value: 2,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 0
								},
								{
									value: .9,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 15
								}],
								scaleX: [{
									value: 2,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 0
								},
								{
									value: .9,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 15
								}],
								alpha: [{
									value: 0,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !1,
									target: 8,
									key: "alpha",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 15
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 30
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 45
								}]
							}
						},
						{
							target: 14,
							keyframes: {
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 14,
									key: "alpha",
									index: 0
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 14,
									key: "alpha",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 14,
									key: "alpha",
									index: 30
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 14,
									key: "alpha",
									index: 45
								}]
							}
						}],
						name: "ani1",
						id: 1,
						frameRate: 24,
						action: 1
					}],
					loadList: ["ui/game_16.png", "ui/game_17a.png", "ui/game_18.png", "ui/game_17b.png", "ui/game_17c.png"],
					loadList3D: []
				},
				t.ViewTip1UI = A,
				a("ui.Scenes.views.ViewTip1UI", A);
				class M extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(M.uiView)
					}
				}
				M.uiView = {
					type: "View",
					props: {
						width: 724,
						height: 90
					},
					compId: 2,
					child: [{
						type: "Image",
						props: {
							y: 45,
							x: 362,
							skin: "ui/game_16.png",
							anchorY: .5,
							anchorX: .5
						},
						compId: 8,
						child: [{
							type: "Image",
							props: {
								y: 45,
								x: 362,
								skin: "ui/game_19.png",
								anchorY: .5,
								anchorX: .5
							},
							compId: 10
						},
						{
							type: "Image",
							props: {
								y: 45,
								x: 362,
								skin: "ui/game_19.png",
								blendMode: "lighter",
								anchorY: .5,
								anchorX: .5
							},
							compId: 11
						}]
					}],
					animations: [{
						nodes: [{
							target: 8,
							keyframes: {
								scaleY: [{
									value: 2,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 0
								},
								{
									value: .9,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 15
								}],
								scaleX: [{
									value: 2,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 0
								},
								{
									value: .9,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 15
								}],
								alpha: [{
									value: 0,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !1,
									target: 8,
									key: "alpha",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 15
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 30
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 45
								}]
							}
						},
						{
							target: 11,
							keyframes: {
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 11,
									key: "alpha",
									index: 0
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 11,
									key: "alpha",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "quadOut",
									tween: !0,
									target: 11,
									key: "alpha",
									index: 30
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 11,
									key: "alpha",
									index: 45
								}]
							}
						},
						{
							target: 10,
							keyframes: {}
						}],
						name: "ani1",
						id: 1,
						frameRate: 24,
						action: 1
					}],
					loadList: ["ui/game_16.png", "ui/game_19.png"],
					loadList3D: []
				},
				t.ViewTip2UI = M,
				a("ui.Scenes.views.ViewTip2UI", M);
				class b extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(b.uiView)
					}
				}
				b.uiView = {
					type: "View",
					props: {
						width: 724,
						height: 90
					},
					compId: 2,
					child: [{
						type: "Image",
						props: {
							y: 45,
							x: 362,
							skin: "ui/game_16.png",
							anchorY: .5,
							anchorX: .5
						},
						compId: 8,
						child: [{
							type: "Image",
							props: {
								y: 45,
								x: 362,
								skin: "ui/game_20.png",
								anchorY: .5,
								anchorX: .5
							},
							compId: 10
						},
						{
							type: "Image",
							props: {
								y: 45,
								x: 362,
								skin: "ui/game_20.png",
								blendMode: "lighter",
								anchorY: .5,
								anchorX: .5
							},
							compId: 11
						}]
					}],
					animations: [{
						nodes: [{
							target: 8,
							keyframes: {
								scaleY: [{
									value: 2,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 0
								},
								{
									value: .9,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 15
								}],
								scaleX: [{
									value: 2,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 0
								},
								{
									value: .9,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 15
								}],
								alpha: [{
									value: 0,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !1,
									target: 8,
									key: "alpha",
									index: 10
								}]
							}
						},
						{
							target: 11,
							keyframes: {
								scaleY: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 11,
									key: "scaleY",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 11,
									key: "scaleY",
									index: 40
								}],
								scaleX: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 11,
									key: "scaleX",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 11,
									key: "scaleX",
									index: 40
								}],
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 11,
									key: "alpha",
									index: 0
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 11,
									key: "alpha",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "quadOut",
									tween: !0,
									target: 11,
									key: "alpha",
									index: 30
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 11,
									key: "alpha",
									index: 40
								}]
							}
						}],
						name: "ani1",
						id: 1,
						frameRate: 20,
						action: 1
					}],
					loadList: ["ui/game_16.png", "ui/game_20.png"],
					loadList3D: []
				},
				t.ViewTip3UI = b,
				a("ui.Scenes.views.ViewTip3UI", b);
				class I extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(I.uiView)
					}
				}
				I.uiView = {
					type: "View",
					props: {
						width: 724,
						height: 90
					},
					compId: 2,
					child: [{
						type: "Image",
						props: {
							y: 45,
							x: 362,
							skin: "ui/game_16.png",
							anchorY: .5,
							anchorX: .5
						},
						compId: 8,
						child: [{
							type: "Box",
							props: {
								y: 45,
								x: 362,
								width: 100,
								var: "numA",
								height: 100,
								anchorY: .5,
								anchorX: .5
							},
							compId: 25,
							child: [{
								type: "Sprite",
								props: {
									y: 21.5,
									x: 14.5,
									texture: "ui/game_21.png",
									name: "num10"
								},
								compId: 27
							},
							{
								type: "Sprite",
								props: {
									y: 22,
									x: 15,
									texture: "ui/game_22.png",
									name: "num9"
								},
								compId: 40
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_23.png",
									name: "num8"
								},
								compId: 30
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_24.png",
									name: "num7"
								},
								compId: 31
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_25.png",
									name: "num6"
								},
								compId: 32
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_26.png",
									name: "num5"
								},
								compId: 33
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_27.png",
									name: "num4"
								},
								compId: 34
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_28.png",
									name: "num3"
								},
								compId: 35
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_29.png",
									name: "num2"
								},
								compId: 36
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_30.png",
									name: "num1"
								},
								compId: 37
							}]
						},
						{
							type: "Box",
							props: {
								y: 45,
								x: 362,
								width: 100,
								var: "numB",
								height: 100,
								blendMode: "lighter",
								anchorY: .5,
								anchorX: .5
							},
							compId: 26,
							child: [{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_21.png",
									name: "num10"
								},
								compId: 41
							},
							{
								type: "Sprite",
								props: {
									y: 22,
									x: 15,
									texture: "ui/game_22.png",
									name: "num9"
								},
								compId: 42
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_23.png",
									name: "num8"
								},
								compId: 43
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_24.png",
									name: "num7"
								},
								compId: 44
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_25.png",
									name: "num6"
								},
								compId: 45
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_26.png",
									name: "num5"
								},
								compId: 46
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_27.png",
									name: "num4"
								},
								compId: 47
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_28.png",
									name: "num3"
								},
								compId: 48
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_29.png",
									name: "num2"
								},
								compId: 49
							},
							{
								type: "Sprite",
								props: {
									y: 21,
									x: 14,
									texture: "ui/game_30.png",
									name: "num1"
								},
								compId: 50
							}]
						}]
					}],
					animations: [{
						nodes: [{
							target: 25,
							keyframes: {
								alpha: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									key: "alpha",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									key: "alpha",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									key: "alpha",
									index: 19
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 25,
									key: "alpha",
									index: 20
								}]
							}
						},
						{
							target: 26,
							keyframes: {
								scaleY: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 26,
									key: "scaleY",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 26,
									key: "scaleY",
									index: 10
								},
								{
									value: 2,
									tweenMethod: "linearNone",
									tween: !0,
									target: 26,
									key: "scaleY",
									index: 20
								}],
								scaleX: [{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 26,
									key: "scaleX",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 26,
									key: "scaleX",
									index: 10
								},
								{
									value: 2,
									tweenMethod: "linearNone",
									tween: !0,
									target: 26,
									key: "scaleX",
									index: 20
								}],
								alpha: [{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 26,
									key: "alpha",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 26,
									key: "alpha",
									index: 10
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 26,
									key: "alpha",
									index: 20
								}]
							}
						}],
						name: "ani1",
						id: 1,
						frameRate: 20,
						action: 1
					}],
					loadList: ["ui/game_16.png", "ui/game_21.png", "ui/game_22.png", "ui/game_23.png", "ui/game_24.png", "ui/game_25.png", "ui/game_26.png", "ui/game_27.png", "ui/game_28.png", "ui/game_29.png", "ui/game_30.png"],
					loadList3D: []
				},
				t.ViewTip4UI = I,
				a("ui.Scenes.views.ViewTip4UI", I);
				class L extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewTip5")
					}
				}
				t.ViewTip5UI = L,
				a("ui.Scenes.views.ViewTip5UI", L);
				class E extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewTip6")
					}
				}
				t.ViewTip6UI = E,
				a("ui.Scenes.views.ViewTip6UI", E);
				class O extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.createView(O.uiView)
					}
				}
				O.uiView = {
					type: "View",
					props: {
						width: 724,
						height: 90
					},
					compId: 2,
					child: [{
						type: "Image",
						props: {
							y: 45,
							x: 362,
							var: "tipsNode",
							skin: "ui/game_16.png",
							anchorY: .5,
							anchorX: .5
						},
						compId: 8,
						child: [{
							type: "Label",
							props: {
								y: 45,
								x: 375,
								text: "广告播放失败",
								strokeColor: "#3c7014",
								stroke: 0,
								name: "tip0",
								fontSize: 36,
								font: "Arial",
								color: "#ffffff",
								bold: !0,
								anchorY: .5,
								anchorX: .5
							},
							compId: 14
						},
						{
							type: "Label",
							props: {
								y: 45,
								x: 375,
								text: "录屏时间过短，分享录屏失败。",
								strokeColor: "#3c7014",
								stroke: 0,
								name: "tip1",
								fontSize: 36,
								font: "Arial",
								color: "#ffffff",
								bold: !0,
								anchorY: .5,
								anchorX: .5
							},
							compId: 15
						}]
					}],
					animations: [{
						nodes: [{
							target: 8,
							keyframes: {
								scaleY: [{
									value: 2,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 0
								},
								{
									value: .9,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleY",
									index: 15
								}],
								scaleX: [{
									value: 2,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 0
								},
								{
									value: .9,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "scaleX",
									index: 15
								}],
								alpha: [{
									value: 0,
									tweenMethod: "quadInOut",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 0
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !1,
									target: 8,
									key: "alpha",
									index: 10
								},
								{
									value: 1,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 30
								},
								{
									value: 0,
									tweenMethod: "linearNone",
									tween: !0,
									target: 8,
									key: "alpha",
									index: 45
								}]
							}
						}],
						name: "ani1",
						id: 1,
						frameRate: 20,
						action: 1
					}],
					loadList: ["ui/game_16.png"],
					loadList3D: []
				},
				t.ViewTipFailUI = O,
				a("ui.Scenes.views.ViewTipFailUI", O);
				class P extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewTotal1")
					}
				}
				t.ViewTotal1UI = P,
				a("ui.Scenes.views.ViewTotal1UI", P);
				class N extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewTotal2")
					}
				}
				t.ViewTotal2UI = N,
				a("ui.Scenes.views.ViewTotal2UI", N);
				class U extends i {
					constructor() {
						super()
					}
					createChildren() {
						super.createChildren(),
						this.loadScene("Scenes/views/ViewZp")
					}
				}
				t.ViewZpUI = U,
				a("ui.Scenes.views.ViewZpUI", U)
			} (t.views || (t.views = {}))
		} (t.Scenes || (t.Scenes = {}))
	} (t || (t = {})),
	function(t) {
		let e,
		i,
		s,
		a,
		n,
		o,
		h,
		l; !
		function(t) {
			t[t.Gold = 0] = "Gold",
			t[t.Diamond = 1] = "Diamond",
			t[t.COUNT = 2] = "COUNT"
		} (e = t.Money || (t.Money = {})),
		function(t) {
			t[t.Invi = 0] = "Invi",
			t[t.Speed = 1] = "Speed",
			t[t.Grow = 2] = "Grow",
			t[t.COUNT = 3] = "COUNT"
		} (i = t.Item || (t.Item = {})),
		function(t) {
			t[t.None = -1] = "None",
			t[t.Classic = 0] = "Classic",
			t[t.Egg = 1] = "Egg",
			t[t.Survival = 2] = "Survival",
			t[t.Diamond = 3] = "Diamond",
			t[t.COUNT = 4] = "COUNT"
		} (s = t.GameMode || (t.GameMode = {})),
		function(t) {
			t[t.None = -1] = "None",
			t[t.Loading = 0] = "Loading",
			t[t.Menu = 1] = "Menu",
			t[t.SkinShop = 2] = "SkinShop",
			t[t.Game = 3] = "Game"
		} (a = t.GameStateIndex || (t.GameStateIndex = {})),
		function(t) {
			t[t.None = 0] = "None",
			t[t.Wait = 1] = "Wait",
			t[t.Start0 = 2] = "Start0",
			t[t.Start1 = 3] = "Start1",
			t[t.Start2 = 4] = "Start2",
			t[t.Start3 = 5] = "Start3",
			t[t.Start4 = 6] = "Start4",
			t[t.Revive = 7] = "Revive",
			t[t.Pass1 = 8] = "Pass1",
			t[t.Pass2 = 9] = "Pass2",
			t[t.Over = 10] = "Over",
			t[t.Replay = 11] = "Replay",
			t[t.Menu = 12] = "Menu",
			t[t.Back = 13] = "Back",
			t[t.Pause = 14] = "Pause"
		} (n = t.RunState || (t.RunState = {})),
		function(t) {
			t[t.None = 0] = "None",
			t[t.SpeedUp = 1] = "SpeedUp",
			t[t.ScoreUp = 2] = "ScoreUp",
			t[t.ScoreAdd = 3] = "ScoreAdd"
		} (o = t.HeroBuff || (t.HeroBuff = {})),
		function(t) {
			t[t.Devour = 0] = "Devour",
			t[t.Devour_1kg = 1] = "Devour_1kg",
			t[t.Revive_Times = 2] = "Revive_Times",
			t[t.Eat_Cake = 3] = "Eat_Cake",
			t[t.Eat_Fruit = 4] = "Eat_Fruit",
			t[t.No1_Times = 5] = "No1_Times",
			t[t.Ad_Times = 6] = "Ad_Times",
			t[t.Get_Gold = 7] = "Get_Gold",
			t[t.COUNT = 8] = "COUNT"
		} (h = t.AchiIndex || (t.AchiIndex = {})),
		function(t) {
			t[t.Login = 0] = "Login",
			t[t.Use_Invi = 1] = "Use_Invi",
			t[t.Play_Egg = 2] = "Play_Egg",
			t[t.Use_Gold = 3] = "Use_Gold",
			t[t.Play_Survival = 4] = "Play_Survival",
			t[t.Use_Diamond = 5] = "Use_Diamond",
			t[t.Play_Diamond = 6] = "Play_Diamond",
			t[t.Use_zp = 7] = "Use_zp",
			t[t.COUNT = 8] = "COUNT"
		} (l = t.TaskIndex || (t.TaskIndex = {}))
	} (e || (e = {}));
	var n, o = e.GameStateIndex;
	class h {
		constructor() {}
		static setStateNext(t) {
			this._stateIdx_nxt = t
		}
		init() {}
		release() {}
		update(t) {}
		onTouchBegan(t) {}
		onTouchMoved(t) {}
		onTouchEnded(t) {}
	}
	h._stateIdx_cur = o.None,
	h._stateIdx_nxt = o.None,
	h._state = null,
	function(t) {
		t.log = console.log,
		t.alertMsg = (t =>{
			window.alert ? window.alert(t) : window.wx && window.wx.showModal({
				title: "msg",
				content: t,
				showCancel: !0,
				cancelText: "cancel",
				cancelColor: "#000000",
				confirmText: "ok",
				confirmColor: "#000000",
				success: () =>{},
				fail: () =>{},
				complete: () =>{}
			})
		});
		class e {
			static set(t, i, s = !0) {
				let a = t.getComponents(Laya.PhysicsCollider);
				if (a) for (let t = 0; t < a.length; t++) a[t].collisionGroup = i;
				if (a = t.getComponents(Laya.Rigidbody3D)) for (let t = 0; t < a.length; t++) a[t].collisionGroup = i;
				if (t.getComponent(Laya.Component), a = t.getComponents(Laya.CharacterController)) for (let t = 0; t < a.length; t++) a[t].collisionGroup = i;
				if (s) for (let a = 0; a < t.numChildren; a++) e.set(t.getChildAt(a), i, s)
			}
			static destroyCollider(t, i = !0) {
				let s = t.getComponents(Laya.PhysicsCollider);
				if (s) for (let t = 0; t < s.length; t++) s[t].destroy();
				if (s = t.getComponents(Laya.Rigidbody3D)) for (let t = 0; t < s.length; t++) s[t].destroy();
				if (t.getComponent(Laya.Component), s = t.getComponents(Laya.CharacterController)) for (let t = 0; t < s.length; t++) s[t].destroy();
				if (i) for (let s = 0; s < t.numChildren; s++) e.destroyCollider(t.getChildAt(s), i)
			}
		}
		e.Default = Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER,
		e.Building = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1,
		e.Food_Rigid = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2,
		e.Food_Trigger = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3,
		t.PCG = e;
		class i {
			constructor(t = 0, e = 0, i = 0, s = 0) {
				this._l = 0,
				this._b = 0,
				this._w = 0,
				this._h = 0,
				this.l = t,
				this.b = e,
				this.w = i,
				this.h = s
			}
			set l(t) {
				this._l = t
			}
			get l() {
				return this._l
			}
			set r(t) {
				this.w = t - this.l
			}
			get r() {
				return this.l + this.w
			}
			set b(t) {
				this._b = t
			}
			get b() {
				return this._b
			}
			set t(t) {
				this.h = t - this.b
			}
			get t() {
				return this.b + this.h
			}
			set w(t) {
				this._w = t,
				this._w < 0 && (this._w = 0, console.log("rect set w error!"))
			}
			get w() {
				return this._w
			}
			set h(t) {
				this._h = t,
				this._h < 0 && (this._h = 0, console.log("rect set h error!"))
			}
			get h() {
				return this._h
			}
			get empty() {
				return this.w <= 0 || this.h <= 0
			}
			get ch() {
				return this.l + this.w / 2
			}
			get cv() {
				return this.b + this.h / 2
			}
			setCenter(t, e) {
				this.l = t - this.w / 2,
				this.b = e - this.h / 2
			}
			clone() {
				return new i(this.l, this.b, this.w, this.h)
			}
			union(t) {
				return this.clone().unionSelf(t)
			}
			unionSelf(t) {
				if (t.empty) return this;
				if (this.empty) this.l = t.l,
				this.r = t.r,
				this.b = t.b,
				this.t = t.t;
				else {
					let e = this.r,
					i = this.t;
					this.l = this.l < t.l ? this.l: t.l,
					this.r = e > t.r ? e: t.r,
					this.b = this.b < t.b ? this.b: t.b,
					this.t = i > t.t ? i: t.t
				}
				return this
			}
			addSelf(t, e, i, s) {
				return this.l = this.l + t,
				this.b = this.b + e,
				this.w = this.w + i,
				this.h = this.h + s,
				this
			}
		}
		t.Rect = i;
		t.Segment = class {
			constructor(t = 0, e = 0, i = 0, s = 0) {
				this.sx = 0,
				this.sy = 0,
				this.ex = 0,
				this.ey = 0,
				this.sx = t,
				this.sy = e,
				this.ex = i,
				this.ey = s
			}
			setStart(t, e) {
				this.sx = t,
				this.sy = e
			}
			setEnd(t, e) {
				this.ex = t,
				this.ey = e
			}
			get length() {
				let t = this.ex - this.sx,
				e = this.ey - this.sy;
				return Math.sqrt(t * t + e * e)
			}
			get radian() {
				let e = this.ex - this.sx,
				i = this.ey - this.sy;
				return t.Utils.radian(e, i)
			}
			get angle() {
				let e = this.ex - this.sx,
				i = this.ey - this.sy;
				return t.Utils.angle(e, i)
			}
			getDropPoint(t, e) {
				let i = this.ex - this.sx,
				s = this.ey - this.sy,
				a = 0,
				n = 0;
				if (0 === i) a = this.sx,
				n = e;
				else if (0 === s) a = t,
				n = this.sy;
				else {
					let o = s / i;
					a = -(o * (this.sy - o * this.sx) - t - o * e) / (o * o + 1),
					n = o * (n - this.sx) + this.sy
				}
				return {
					x: a,
					y: n
				}
			}
		};
		t.Circle = class {
			constructor(t, e, i) {
				this.x = 0,
				this.y = 0,
				this.r = 0,
				this.x = t,
				this.y = e,
				this.r = i
			}
			isContain(t, e) {
				let i = t - this.x,
				s = e - this.y;
				return i * i + s * s < this.r * this.r
			}
			getFirstIntersection_segment(t) {
				return null
			}
		};
		class s {
			constructor() {
				this.isEnd = !1,
				this.parent = null,
				this.children = null,
				this.value = "",
				this.children = new Map
			}
			getChild(t) {
				return this.children.get(t)
			}
			addChild(t) {
				let e = new s;
				return e.value = t,
				e.parent = this,
				this.children.set(t, e),
				e
			}
		}
		t.WordNode = s;
		class a {
			constructor() {
				this._initFlag = 0,
				this.sourceWord = "",
				this.repChar = "*",
				this.treeRoot = null,
				this._initFlag = 0
			}
			static get ins() {
				return this._ins || (this._ins = new a),
				this._ins
			}
			init(t) {
				this._initFlag = 1;
				let e = t.split(",");
				this.initTree(e)
			}
			initTree(t) {
				if (!t || t.length <= 0) return;
				this.treeRoot = new s,
				this.treeRoot.value = "";
				let e = t.length;
				for (let i = 0; i < e; i++) {
					let e = t[i],
					s = e.length;
					if (s > 0) {
						let t = this.treeRoot;
						for (let i = 0; i < s; i++) {
							let s = e.slice(i, i + 1),
							a = t.getChild(s);
							t = a || t.addChild(s)
						}
						t.isEnd = !0
					}
				}
				this._initFlag = 2,
				console.log("SensitiveWordFilter init succ")
			}
			isReady() {
				return 2 == this._initFlag
			}
			contain(t) {
				this.sourceWord = t;
				let e = t.length;
				if (e <= 0 || !this.treeRoot) return ! 1;
				if (e > 0 && this.treeRoot) {
					let t,
					i = null,
					s = null;
					for (let a = 0; a < e; a++) {
						i = this.treeRoot,
						s = null;
						for (let n = a; n < e && (t = this.sourceWord.slice(n, n + 1), s = i.getChild(t)); n++) {
							if (s.isEnd) return ! 0;
							i = s
						}
					}
				}
				return ! 1
			}
			filterWord(t, e) {
				let i = !1;
				this.sourceWord = t;
				let s = t,
				a = s.length;
				if (a > 0 && this.treeRoot) {
					let t,
					n,
					o,
					h = e || this.repChar,
					l = this.treeRoot;
					for (let e = 0; e < a; e++) t = this.sourceWord.slice(e, e + 1),
					(n = l.getChild(t)) || (o = "", l = this.treeRoot),
					(n = l.getChild(t)) && (o += n.value, n.isEnd && (i = !0, o.length > 0 && (s = s.replace(o, this.getReplaceStr(h, o.length)))), l = n)
				}
				return {
					hasDirty: i,
					filteredWord: s
				}
			}
			getReplaceStr(t, e) {
				let i = "";
				for (let s = 0; s < e; s++) i += t;
				return i
			}
		}
		a._ins = null,
		t.SensitiveWordFilter = a;
		t.Utils = class {
			static random(t, e) {
				return e > t ? Math.random() * (e - t) + t: t
			}
			static randomInt(t, e) {
				let i = this.random(Math.ceil(t), e);
				return Math.floor(i)
			}
			static radian(t, e) {
				let i = Math.atan2(e, t);
				return i < 0 && (i += 2 * Math.PI),
				i
			}
			static angle(t, e) {
				return 180 * this.radian(t, e) / Math.PI
			}
			static getDate() {
				let t = new Date,
				e = 1e4 * t.getFullYear();
				return e += 100 * (t.getMonth() + 1),
				e += t.getDate()
			}
			static getTime() {
				let t = new Date,
				e = 1e4 * t.getHours();
				return e += 100 * t.getMinutes(),
				e += t.getSeconds()
			}
			static ajax(t) {
				let e = new XMLHttpRequest;
				if (e.timeout = t.timeout || 5e3, "get" == t.type) {
					var i = "";
					for (var s in t.data) i += "&" + s + "=" + t.data[s];
					i = i.slice(1);
					var a = t.url + "?" + i;
					e.open("get", a),
					e.send()
				} else "post" == t.type && (e.open("post", t.url), e.setRequestHeader("content-type", "application/x-www-form-urlencoded"), e.send(JSON.stringify(t.data)));
				e.onreadystatechange = function() {
					4 == e.readyState && 200 == e.status ? (console.log("ajax：请求成功"), t.success && t.success(e.responseText)) : 200 != e.status && (console.log("ajax：请求失败"), t.error && t.error(e.status))
				}
			}
			static compareVersion(t, e) {
				let i = t.split("."),
				s = e.split(".");
				for (let t = 0; t < i.length; t++) {
					if (t >= s.length) return 1;
					let e = parseInt(i[t]),
					a = parseInt(s[t]);
					if (e > a) return 1;
					if (a < e) return - 1
				}
				return i.length == s.length ? 0 : -1
			}
		}
	} (n || (n = {}));
	class l {
		static onIosWx() {
			return Laya.Browser.onMiniGame && Laya.Browser.onIOS
		}
		static onAndroidApk() {
			return Laya.Browser.onAndroid && !Laya.Browser._isMiniGame
		}
		static loadBundle() {
			if (!window.wx && !window.qg) return ! 1;
			if (Laya.Browser.onTTMiniGame || Laya.Browser.onHWMiniGame) return ! 1;
			let t = ["res", "sub1"];
			if (t.length <= 0) return ! 1;
			let e = t =>{
				l._progs[t] = 1
			},
			i = function(t, i) {
				if (console.log("load subpackage [" + i + "] start"), window.wx) {
					window.wx.loadSubpackage({
						name: i,
						success: function() {
							console.log("load subpackage [" + i + "] succ"),
							e(t)
						},
						fail: function() {
							console.log("load subpackage [" + i + "] fail")
						}
					})
				} else window.qg && window.qg.loadSubpackage({
					name: i,
					success: function() {
						console.log("load subpackage [" + i + "] succ"),
						e(t)
					},
					fail: function(t) {
						console.log("load subpackage [" + i + "] fail", t)
					}
				}).onProgressUpdate(e =>{
					console.log("onProgressUpdate [" + i + "] res = ", JSON.stringify(e)),
					((t, e) =>{
						e < 1 && (l._progs[t] = e)
					})(t, e.progress)
				})
			};
			this._progs = [],
			this._flag = 0;
			for (let e = 0; e < t.length; e++) this._progs.push(0),
			i(e, t[e]);
			return this._progs.push(1),
			this._flag = 1,
			!0
		}
		static loadRes() {
			this._progs = [],
			this._flag = 0,
			this.loadGameScene(),
			this.loadSkinShopScene(),
			this.loadJsons(),
			this.loadPlayerNameMats(),
			this.loadEggNumMats(),
			this.loadGamePlaneMatTexs(),
			this._flag = 1
		}
		static release() {}
		static getProg() {
			let t = 0,
			e = this._progs.length;
			for (let e = 0; e < this._progs.length; e++) t += this._progs[e];
			return e > 0 ? t / e: 1 === this._flag ? 1 : 0
		}
		static loadResByUrls(t, e, i) {
			let s = this._progs.length;
			this._progs.push(0);
			let a = Laya.Handler.create(this, t =>{
				i && i(),
				l._progs[t] = 1
			},
			[s]),
			n = Laya.Handler.create(this, (t, e) =>{
				l._progs[e] < 1 && t < 1 && (l._progs[e] = t)
			},
			[s]);
			e ? Laya.loader.create(t, a, n) : Laya.loader.load(t, a, n)
		}
		static loadGameScene() {
			console.log("game scene load start");
			let t = ["sub1/Farmland/Conventional/Demo_Farmland.ls"],
			e = t.concat([]);
			this.loadResByUrls(e, !0, () =>{
				this.initGameScene(t),
				console.log("game scene load succ")
			})
		}
		static initGameScene(t) {
			let e = Laya.Loader.getRes(t[0]);
			this._gameScene = e;
			let i = e.getChildByName("Directional Light");
			this._gameDLight = i,
			i.color = new Laya.Vector3(1, .85, .73),
			i.transform.localRotationEuler = new Laya.Vector3( - 125, 210, 0),
			l.onIosWx() || (i.intensity = 1, i.shadowMode = Laya.ShadowMode.SoftLow, i.shadowDistance = 30, i.shadowResolution = 1024, i.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades);
			let s = e.getChildByName("Main Camera");
			this._gameCamera = s,
			s.transform.localRotationEuler = new Laya.Vector3( - 60, 0, 0);
			let a = e.getChildByName("Background");
			this._gamePlane = a.getChildByName("Plane"),
			l.onIosWx() && n.PCG.destroyCollider(this._gamePlane, !0);
			let o = a.getChildByName("buildings");
			o && (l.onIosWx() ? n.PCG.destroyCollider(o, !0) : n.PCG.set(o, n.PCG.Building, !0)),
			this._gameRoles = e.getChildByName("roles"),
			this._gameProps = e.getChildByName("props"),
			this._gameFoods = e.getChildByName("foods"),
			this._gameEggs = e.getChildByName("eggs"),
			this._gameArea = new n.Rect( - 50, -50, 100, 100),
			this._roleSkins = e.getChildByName("roleSkins"),
			this._roleSkins.active = !1,
			this._roleProps = e.getChildByName("roleProps"),
			this._roleProps.active = !1,
			this._foodSkins = e.getChildByName("foodSkins"),
			this._foodSkins.active = !1,
			this._eggSkins = e.getChildByName("eggSkins"),
			this._eggSkins.active = !1
		}
		static getRoleSkin(t) {
			let e = "role" + (t + 1);
			return this._roleSkins.getChildByName(e)
		}
		static loadSkinShopScene() {
			console.log("skin shop scene load start");
			let t = ["sub1/Farmland/Conventional/ui_skin.ls"],
			e = t.concat([]);
			this.loadResByUrls(e, !0, () =>{
				this.initSkinShopScene(t),
				console.log("skin shop scene load succ")
			})
		}
		static initSkinShopScene(t) {
			let e = Laya.Loader.getRes(t[0]);
			this._skinShopScene = e;
			let i = e.getChildByName("Directional Light");
			i.shadowMode = Laya.ShadowMode.SoftLow,
			i.shadowDistance = 10,
			i.shadowResolution = 1024,
			i.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades,
			this._skinShopCamera = e.getChildByName("Main Camera"),
			this._skinShopRoles = e.getChildByName("roleSkins")
		}
		static loadJsons() {
			console.log("jsons load start");
			let t = ["res/jsons/player_names.json", "res/jsons/skinInfos.json", "res/jsons/achiInfos.json", "res/jsons/taskInfos.json", "res/jsons/sensitiveWords.json"];
			this.loadResByUrls(t, !1, () =>{
				l._playerNames = Laya.Loader.getRes(t[0]),
				l._skinInfos = Laya.Loader.getRes(t[1]),
				l._achiInfos = Laya.Loader.getRes(t[2]),
				l._taskInfos = Laya.Loader.getRes(t[3]),
				l._sensitiveWords = Laya.Loader.getRes(t[4]),
				console.log("jsons load  succ")
			})
		}
		static getPlayerNameCnt() {
			return this._playerNames.length
		}
		static getPlayerName(t) {
			return Language.setNameLength(Language.getName(this._playerNames[t].name),10)  
		}
		static isExistPlayerName(t) {
			for (let e = 0; e < this._playerNames.length; e++) if (0 !== e && this._playerNames[e].name === t) return ! 0;
			return ! 1
		}
		static getSkinInfo(t) {
			return this._skinInfos[t]
		}
		static getSkinInfoCnt() {
			return this._skinInfos.length
		}
		static getSkinInfo_name(t) {
			return Language.getName(this._skinInfos[t].name) 
		}
		static getSkinInfo_lv(t) {
			return this._skinInfos[t].lv
		}
		static getSkinInfo_priceType(t) {
			return this._skinInfos[t].pricetype
		}
		static getSkinInfo_price(t) {
			return this._skinInfos[t].price
		}
		static getAchiInfo(t) {
			return this._achiInfos[t]
		}
		static getAchiInfoCnt() {
			return this._achiInfos.length
		}
		static getTaskInfo(t) {
			return this._taskInfos[t]
		}
		static getTaskInfoCnt() {
			return this._taskInfos.length
		}
		static getSensitiveWords() {
			return this._sensitiveWords[0].words
		}
		static loadPlayerNameMats() {
			console.log("player name mats load start");
			let t = [];
			for (let e = 0; e < 61; e++) {
				let i = "res/names/name" + e + ".png";
				t.push(i)
			}
			let e = t.concat([]);
			this.loadResByUrls(e, !0, () =>{
				this.initPlayerNameMats(t),
				console.log("player name mats load succ")
			})
		}
		static initPlayerNameMats(t) {
			for (let e = 0; e < t.length; e++) {
				let i = new Laya.UnlitMaterial;
				i.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT,
				i.albedoTexture = Laya.Loader.getRes(t[e]),
				this._playerNameMats.push(i)
			}
		}
		static getPlayerNameMat(t) {
			return this._playerNameMats[t]
		}
		static loadEggNumMats() {
			console.log("egg number mats load start");
			let t = [];
			for (let e = 0; e < 10; e++) t.push("" + e);
			t.push("point"),
			t.push("mg"),
			t.push("g"),
			t.push("kg"),
			t.push("t"),
			t.push("kt");
			let e = [];
			for (let i = 0; i < t.length; i++) {
				let s = "res/egg_num/" + t[i] + ".png";
				e.push(s)
			}
			this.loadResByUrls(e, !0, () =>{
				this.initEggNumMats(t),
				console.log("egg number mats load succ")
			})
		}
		static initEggNumMats(t) {
			for (let e = 0; e < t.length; e++) {
				let i = "res/egg_num/" + t[e] + ".png",
				s = new Laya.UnlitMaterial;
				s.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT,
				s.albedoTexture = Laya.Loader.getRes(i),
				this._eggNumMats[t[e]] = s
			}
		}
		static getEggNumMat(t) {
			return this._eggNumMats[t]
		}
		static loadGamePlaneMatTexs() {
			let t = [];
			for (let e = 0; e < 3; e++) {
				let i = "res/plane/world" + e + ".jpg";
				t.push(i)
			}
			this.loadResByUrls(t, !0, () =>{
				console.log("egg number mats load succ")
			})
		}
		static getGamePlaneMatTex(t) {
			let e = "res/plane/world" + t + ".jpg";
			return Laya.Loader.getRes(e)
		}
	}
	l._progs = [],
	l._flag = 0,
	l._gameScene = null,
	l._gameDLight = null,
	l._gameCamera = null,
	l._gamePlane = null,
	l._gameRoles = null,
	l._gameProps = null,
	l._gameFoods = null,
	l._gameEggs = null,
	l._gameArea = null,
	l._roleSkins = null,
	l._roleProps = null,
	l._foodSkins = null,
	l._eggSkins = null,
	l._skinShopScene = null,
	l._skinShopCamera = null,
	l._skinShopRoles = null,
	l._playerNames = [],
	l._skinInfos = [],
	l._achiInfos = [],
	l._taskInfos = [],
	l._sensitiveWords = [],
	l._playerNameMats = [],
	l._eggNumMats = {};
	var r = e.Money,
	d = e.Item;
	class _ {
		static initAll() {
			c.init(),
			g.init(),
			u.init()
		}
		static loadAll() {
			c.load(),
			g.load(),
			u.load(),
			this._state = 1
		}
		static saveAll() {
			c.save(),
			g.save(),
			u.save()
		}
		static updateAll(t) {
			1 == this._state && c.update(t)
		}
	}
	_._state = 0;
	class c {
		static init() {
			this.autoSaveTimer = 0;
			let t = this.data;
			t.moneys = [];
			for (let e = 0; e < r.COUNT; e++) t.moneys.push(0);
			t.moneys[r.Gold] = 500,
			t.moneys[r.Diamond] = 0,
			t.items = [];
			for (let e = 0; e < d.COUNT; e++) t.items.push(2);
			t.signTimes = 0,
			t.signDate = 0,
			t.skins = [],
			t.skins.push(1),
			t.skinIdx = 0,
			t.zpFreeTime = 0,
			this.resetZpFreeTime(!1),
			t.pName = "",
			t.pNameChangeTimes = 0,
			t.skinTrialTimes = 0
		}
		static save() {
			let t = JSON.stringify(this.data);
			Laya.LocalStorage.setItem(this.fn, t),
			this.autoSaveTimer = 0
		}
		static load() {
			this.init();
			let t = Laya.LocalStorage.getItem(this.fn);
			if (!t || "" == t) return;
			let e = JSON.parse(t),
			i = this.data;
			for (let t = 0; t < i.moneys.length; t++) t < e.moneys.length && (i.moneys[t] = e.moneys[t]);
			for (let t = 0; t < i.items.length; t++) t < e.items.length && (i.items[t] = e.items[t]);
			i.signTimes = e.signTimes,
			i.signDate = e.signDate,
			i.skins = e.skins,
			i.skinIdx = e.skinIdx,
			e.vers >= 1 && (i.zpFreeTime = e.zpFreeTime),
			e.vers >= 2 && (i.pName = e.pName, i.pNameChangeTimes = e.pNameChangeTimes),
			e.vers >= 3 && (i.skinTrialTimes = e.skinTrialTimes)
		}
		static update(t) {
			let e = this.data;
			if (e.zpFreeTime > 0) {
				let i = 5e3,
				s = Math.ceil(e.zpFreeTime / i);
				e.zpFreeTime -= t,
				s != Math.ceil(e.zpFreeTime / i) && this.save()
			}
		}
		static addMoney(t, i, s = !0) {
			let a = this.data,
			n = a.moneys[t] + i;
			return ! (n < 0) && (a.moneys[t] = n, s && this.save(), i > 0 && t == r.Gold && g.addProg(e.AchiIndex.Get_Gold, i), i < 0 && (t == r.Gold ? u.addProg(e.TaskIndex.Use_Gold, -i) : t == r.Diamond && u.addProg(e.TaskIndex.Use_Diamond, -i)), !0)
		}
		static getMoney(t) {
			return this.data.moneys[t]
		}
		static isMoneyless(t, e) {
			return this.data.moneys[t] + e < 0
		}
		static addItem(t, i, s = !0) {
			let a = this.data,
			n = a.items[t] + i;
			return ! (n < 0) && (a.items[t] = n, s && this.save(), i < 0 && t == d.Invi && u.addProg(e.TaskIndex.Use_Invi, -i), !0)
		}
		static getItem(t) {
			return this.data.items[t]
		}
		static isItemless(t, e) {
			return this.data.items[t] + e < 0
		}
		static getItemTimeMax(t) {
			let e = [10, 20, 20];
			return t >= 0 && t < e.length ? 1e3 * e[t] : 0
		}
		static doSign(t = !0) {
			this.data.signTimes += 1,
			this.data.signDate = n.Utils.getDate(),
			t && this.save()
		}
		static getSignTimes() {
			return this.data.signTimes
		}
		static getLastSignDate() {
			return this.data.signDate
		}
		static setSkinGet(t, e = !0) {
			let i = this.data;
			for (; i.skins.length <= t;) i.skins.push(0);
			i.skins[t] = 1,
			e && this.save()
		}
		static isSkinGot(t) {
			return this.data.skins.length > t && 1 === this.data.skins[t]
		}
		static getSkinGotCnt() {
			let t = 0;
			for (let e = 0; e < this.data.skins.length; e++) this.isSkinGot(e) && (t += 1);
			return t
		}
		static setSkinIdx(t, e = !0) {
			this.data.skinIdx = t,
			e && this.save()
		}
		static getSkinIdx() {
			return this.data.skinIdx
		}
		static resetZpFreeTime(t = !0) {
			this.data.zpFreeTime = 3e5,
			t && this.save()
		}
		static getZpFreeTime() {
			return this.data.zpFreeTime
		}
		static setPName(t, e = !0) {
			this.data.pName !== t && (this.data.pName = t, this.data.pNameChangeTimes += 1, e && this.save())
		}
		static getPName() {
			return Language.getName("你");
		}
		static addPNameChangeTimes(t = !0) {
			this.data.pNameChangeTimes += 1,
			t && this.save()
		}
		static getPNameChangeTimes() {
			return this.data.pNameChangeTimes
		}
		static addSkinTrialTimes(t = !0) {
			this.data.skinTrialTimes += 1,
			t && this.save()
		}
		static getSkinTrialTimes() {
			return this.data.skinTrialTimes
		}
	}
	c.fn = "ant_oppo_base",
	c.autoSaveTimer = 0,
	c.data = {
		vers: 3,
		firstTime: 0,
		lastTime: 0,
		moneys: [],
		items: [],
		signTimes: 0,
		signDate: 0,
		skins: [],
		skinIdx: 0,
		zpFreeTime: 0,
		pName: "",
		pNameChangeTimes: 0,
		skinTrialTimes: 0
	};
	class g {
		static init() {
			let t = this.data;
			t.lv = [],
			t.prog = []
		}
		static save() {
			let t = JSON.stringify(this.data);
			Laya.LocalStorage.setItem(this.fn, t)
		}
		static load() {
			this.init();
			let t = Laya.LocalStorage.getItem(this.fn);
			if (!t || "" == t) return;
			let e = JSON.parse(t),
			i = this.data;
			i.lv = e.lv,
			i.prog = e.prog
		}
		static addLv(t, e = !0) {
			let i = this.data;
			for (; i.lv.length <= t;) i.lv.push(0);
			i.lv[t] += 1,
			e && this.save()
		}
		static getLv(t) {
			return t < this.data.lv.length ? this.data.lv[t] : 0
		}
		static addProg(t, e, i = !0) {
			let s = this.data;
			for (; s.prog.length <= t;) s.prog.push(0);
			s.prog[t] += e,
			i && this.save()
		}
		static getProg(t) {
			return t < this.data.prog.length ? this.data.prog[t] : 0
		}
		static getProgStart(t) {
			let e = this.getLv(t),
			i = l.getAchiInfo(t);
			return e > 0 ? i.num + i.addnum * (e - 1) : 0
		}
		static getProgMax(t) {
			let e = this.getLv(t),
			i = l.getAchiInfo(t);
			return i.num + i.addnum * e
		}
		static getProgRate(t) {
			let e = this.getProg(t),
			i = this.getProgStart(t),
			s = this.getProgMax(t);
			return e <= i ? 0 : e >= s ? 1 : (e - i) / (s - i)
		}
		static isComplete(t) {
			return this.getProgRate(t) >= 1
		}
		static hasComplete() {
			for (let t = 0; t < this.data.prog.length; t++) if (this.isComplete(t)) return ! 0;
			return ! 1
		}
	}
	g.fn = "ant_oppo_achi",
	g.data = {
		vers: 0,
		lv: [],
		prog: []
	};
	class u {
		static init() {
			let t = this.data;
			t.active = [],
			t.prog = [],
			t.lastDate = n.Utils.getDate(),
			this.resetActive()
		}
		static save() {
			let t = JSON.stringify(this.data);
			Laya.LocalStorage.setItem(this.fn, t)
		}
		static load() {
			this.init();
			let t = Laya.LocalStorage.getItem(this.fn);
			if (!t || "" == t) return;
			let e = JSON.parse(t),
			i = this.data;
			e.lastDate == i.lastDate && (i.active = e.active, i.prog = e.prog)
		}
		static resetActive() {
			let t = [];
			for (let i = 0; i < e.TaskIndex.COUNT; i++) t.push(i);
			this.data.active = [];
			for (let e = 0; e < 4; e++) {
				let e = n.Utils.randomInt(0, t.length);
				this.data.active.push(t[e]),
				t.splice(e, 1)
			}
		}
		static isActive(t) {
			return this.data.active.indexOf(t) >= 0
		}
		static getAcitive() {
			return this.data.active
		}
		static setProg(t, e, i = !0) {
			let s = this.data;
			for (; s.prog.length <= t;) s.prog.push(0);
			s.prog[t] = e,
			i && this.save()
		}
		static addProg(t, e, i = !0) {
			if (!this.isActive(t)) return;
			if (this.isFinished(t) || this.isCompleted(t)) return;
			let s = this.getProg(t);
			this.setProg(t, s + e, i)
		}
		static getProg(t) {
			return t < this.data.prog.length ? this.data.prog[t] : 0
		}
		static getProgRate(t) {
			if (this.isFinished(t)) return 1;
			let e = l.getTaskInfo(t),
			i = this.getProg(t);
			return i >= e.num ? 1 : i / e.num
		}
		static isCompleted(t) {
			let e = l.getTaskInfo(t);
			return this.getProg(t) >= e.num
		}
		static setFinished(t, e = !0) {
			this.setProg(t, -1, e)
		}
		static isFinished(t) {
			return this.getProg(t) < 0
		}
	}
	u.fn = "ant_oppo_task",
	u.data = {
		vers: 0,
		active: [],
		prog: [],
		lastDate: 0
	};
	class p {
		static playBGM(t, e = !0) {
			if (this._curBGM != t) {
				this._curBGM = t;
				let i = this.MusicPath + t + this.MusicExt;
				this._BGM = Laya.SoundManager.playMusic(i, e ? 0 : 1)
			}
		}
		static stopBGM() {
			this._curBGM = "",
			this._BGM = null,
			Laya.SoundManager.stopMusic()
		}
		static pauseBGM() {
			this._BGM && this._BGM.pause()
		}
		static resumeBGM() {
			this._BGM && this._BGM.resume()
		}
		static playEFM(t, e = !1) {
			let i = this.MusicPath + t + this.MusicExt;
			return Laya.SoundManager.playSound(i, e ? 0 : 1)
		}
		static stopEFM_all() {
			Laya.SoundManager.stopAllSound()
		}
	}
	p._curBGM = "",
	p._BGM = null,
	p.MusicPath = "res/music/",
	p.MusicExt = ".mp3";
	class m {
		static init() {
			if (this._deviceW = Laya.stage.width, this._deviceH = Laya.stage.height, this._sdk = window.qg, !this._sdk) return;
			let t = this._sdk.getSystemInfoSync();
			this._platformVC = t.platformVersionCode,
			this._deviceW = t.screenWidth,
			this._deviceH = t.screenHeight,
			t.platformVersionCode < 1060 && console.warn("[SdkCtrl.init] warning!! platform stage lower!!"),
			this.login()
		}
		static isOk_init() {
			return ! 0
		}
		static initAds() {
			this._sdk && (this.initAds_reward(), this.initAds_screen(), this.initAds_banner(), this.initAds_native(), this.initAds_GPortal(), this.initAds_GBanner())
		}
		static isSuport_gridAd() {
			return this._sdk && this._platformVC >= 1076
		}
		static login() {}
		static exitGame() {}
		static moreGame(t) {}
		static share() {}
		static getShareData() {}
		static navigateToMini(t, e, i) {}
		static hasShortcutInstalled(t) {
			this._sdk && this._sdk.hasShortcutInstalled({
				success: function(e) {
					console.log("[SdkCtrl.hasShortcutInstalled] succ: ", e),
					t && t(1 == e ? 0 : 1)
				},
				fail: function(e) {
					console.log("[SdkCtrl.hasShortcutInstalled] fail: ", e),
					t && t(2)
				}
			})
		}
		static addShortcut(t) {
			if (!this._sdk) return;
			console.log("[SdkCtrl.addShortcut] start");
			let e = this._sdk;
			e.hasShortcutInstalled({
				success: function(i) {
					console.log("[SdkCtrl.addShortcut] Installed: ", i),
					0 == i ? (console.log("[SdkCtrl.addShortcut] Installed: No"), e.installShortcut({
						success: function() {
							console.log("[SdkCtrl.addShortcut] success"),
							t && t(0)
						},
						fail: function(e) {
							console.log("[SdkCtrl.addShortcut] fail"),
							t && t(1)
						}
					})) : (console.log("[SdkCtrl.addShortcut] Installed: Yes"), t && t(2))
				},
				fail: function(e) {
					console.log("[SdkCtrl.addShortcut] error: ", e),
					t && t(1)
				}
			})
		}
		static initAds_reward() {
			this._adReward = null,
			this._adReward_loadFlag = 0,
			this._sdk && "" != this.AdUnit_Reward && (this._adReward = this._sdk.createRewardedVideoAd({
				adUnitId: this.AdUnit_Reward
			}), this._adReward.onLoad(() =>{
				console.log("[SdkCtrl.initAds_reward] load successed"),
				this._adReward_loadFlag = 1,
				this._adReward_ready = !0
			}), this._adReward.onError(t =>{
				console.log("[SdkCtrl.initAds_reward] error: " + JSON.stringify(t)),
				this._adReward_loadFlag = 2
			}), this._adReward.onClose(t =>{
				console.log("[SdkCtrl.initAds_reward] close: " + JSON.stringify(t)),
				this.overAds_reward(t && t.isEnded ? 0 : 2)
			}), this.loadAds_reward())
		}
		static loadAds_reward() {
			this._adReward_loadFlag = 0,
			this._adReward ? this._adReward.load() : this.initAds_reward()
		}
		static playAds_reward(t, e) {
			playVideo(()=>{
				this._adReward_overCB = e;
            	this.overAds_reward(0)
			})
			// if (console.log("[SdkCtrl.playAds_reward] start"), this._adReward_idx = t, this._adReward_overCB = e, this._adReward) 
			// 	if (1 == this._adReward_loadFlag) console.log("[SdkCtrl.playAds_reward] show succ"),
            //     this._adReward.show();
            //     else if (this._adReward_ready) {
            //         let t = 0 == this._adReward_loadFlag ? "loading": "load fail";
            //         console.log("[SdkCtrl.playAds_reward] show fail: " + t),
            //         this.overAds_reward(1)
            //     } else console.log("[SdkCtrl.playAds_reward] not ready"),
            //     this.overAds_reward(0);
            //     else console.log("[SdkCtrl.playAds_reward] show fail: create fail"),
			
		}
		static overAds_reward(t) {
			if (this._adReward_overCB) {
				let i = this._adReward_overCB;
				this._adReward_overCB = null,
				setTimeout(() =>{
					i(t)
				},
				.1),
				0 == t && g.addProg(e.AchiIndex.Ad_Times, 1)
			}
			this.loadAds_reward()
		}
		static initAds_screen() {}
		static loadAds_screen() {}
		static playAds_screen() {}
		static initAds_banner(t = null) {
			if (!this._sdk || "" == this.AdUnit_Banner) return void(t && t(1));
			let e = t;
			this._adBanner = this._sdk.createBannerAd({
				adUnitId: this.AdUnit_Banner,
				style: {
					left: 0,
					top: 0,
					width: 1e3,
					height: 400
				}
			}),
			this._adBanner.onLoad(() =>{
				console.log("[SdkCtrl.initAds_banner] load success"),
				e && (e(0), e = null)
			}),
			this._adBanner.onError(t =>{
				console.log("[SdkCtrl.initAds_banner] error:", t),
				this._adBanner.destroy(),
				this._adBanner = null,
				e && (e(1), e = null)
			}),
			this._adBanner.onHide(() =>{
				this._adBannerShowing = !1,
				console.log("[SdkCtrl.initAds_banner] hide success")
			}),
			this._adBanner.onResize(t =>{
				console.log("[SdkCtrl.initAds_banner] resize res:", t.width, t.height),
				console.log("[SdkCtrl.initAds_banner] style:", JSON.stringify(this._adBanner.style)),
				this._adBanner.style.left = (this._deviceW - t.width) / 2,
				this._adBanner.style.top = this._deviceH - t.height
			})
		}
		static loadAds_banner() {}
		static playAds_banner(t, e = !1, i = null, s = null) {
			if (t) {
				e && this._adBanner && (this._adBanner.destroy(), this._adBanner = null),
				this._adBannerShowing = !1;
				let t = t =>{
					0 == t ? (i ? (this._adBanner.style.left = i.x - this._adBanner.style.realWidth / 2, this._adBanner.style.top = i.y - this._adBanner.style.realHeight / 2) : (this._adBanner.style.left = (this._deviceW - this._adBanner.style.realWidth) / 2, this._adBanner.style.top = this._deviceH - this._adBanner.style.realHeight), this._adBanner.show().then(() =>{
						console.log("[SdkCtrl.playAds_banner] show succ:"),
						s && s(0)
					}).
					catch(t =>{
						console.log("[SdkCtrl.playAds_banner] show fail:"),
						s && s(1)
					}), this._adBannerShowing = !0) : s && s(1)
				};
				this._adBanner ? t(0) : this.initAds_banner(t)
			} else this._adBanner ? (this._adBanner.hide(), this._adBannerShowing = !1, e && (this._adBanner.destroy(), this._adBanner = null, this.initAds_banner())) : (this.initAds_banner(), this._adBannerShowing = !1)
		}
		static initAds_native() {
			this._sdk && "" != this.AdUnit_Native && (this._adNative && (this._adNative.destroy(), this._adNative = null), this._adNative_loadFlag = 0, this._adNative = this._sdk.createNativeAd({
				adUnitId: this.AdUnit_Native
			}), this._adNative.onLoad(t =>{
				if (console.info("[SdkCtrl.initAds_native] loaded: data =" + JSON.stringify(t)), this._adNative_itemShow = t.adList.pop(), this._adNative_loadFlag = 2, this._adNative_playCB) {
					this._adNative_loadFlag = 0,
					console.log("[SdkCtrl.playAds_native] start ----- 2"),
					this.onShow_native();
					let t = this._adNative_itemShow.title,
					e = this._adNative_itemShow.imgUrlList[0];
					this._adNative_playCB(t, e),
					this._adNative_playCB = null
				}
			}), this._adNative.onError(t =>{
				console.error("[SdkCtrl.initAds_native] load error:" + JSON.stringify(t)),
				this._adNative_loadFlag = 0,
				this._adNative_playCB && (this._adNative_playCB("", ""), this._adNative_playCB = null)
			}), this.loadAds_native(null))
		}
		static loadAds_native(t) {
			this._adNative_loadFlag = 1,
			this._adNative.load()
		}
		static playAds_native(t) {
			console.log("[SdkCtrl.playAds_native] start ----- 1");
			let e = null;
			this._adNative_itemShow && 2 == this._adNative_loadFlag ? (this._adNative_loadFlag = 0, console.log("[SdkCtrl.playAds_native] start ----- 2"), this.onShow_native(), e = {
				title: this._adNative_itemShow.title,
				url: this._adNative_itemShow.imgUrlList[0],
				desc: this._adNative_itemShow.desc
			}) : 1 == this._adNative_loadFlag ? this._adNative_playCB = null: (this._adNative_playCB = null, this.initAds_native()),
			t && t(e)
		}
		static isLoaded_native() {
			return ! this._sdk || (2 == this._adNative_loadFlag || (0 == this._adNative_loadFlag && this.initAds_native(), !1))
		}
		static onShow_native() {
			this._adNative_itemShow && (console.log("[SdkCtrl.onShow_native] success"), this._adNative.reportAdShow({
				adId: this._adNative_itemShow.adId
			}))
		}
		static onClick_native() {
			console.log("[SdkCtrl.onClick_native] click ---- 1"),
			this._adNative_itemShow && (console.log("[SdkCtrl.onClick_native] click ---- 2"), this._adNative.reportAdClick({
				adId: this._adNative_itemShow.adId
			}), this._adNative_itemShow = null)
		}
		static onClose_native() {
			console.log("[SdkCtrl.onClose_native] success"),
			this._adNative_itemShow = null,
			this.initAds_native()
		}
		static initAds_GPortal() {
			this._adGPortal = null,
			this._adGPortal_loaded = !1,
			this._sdk && "" != this.AdUnit_GPortal && this.isSuport_gridAd() && (this._adGPortal = this._sdk.createGamePortalAd({
				adUnitId: this.AdUnit_GPortal
			}), this._adGPortal.onLoad(() =>{
				this._adGPortal_loaded = !0,
				console.log("[SdkCtrl.initAds_GPortal] load succ")
			}), this._adGPortal.onError(t =>{
				console.log("[SdkCtrl.initAds_GPortal] error:", t)
			}), this._adGPortal.onClose(() =>{
				console.log("[SdkCtrl.initAds_GPortal] close succ"),
				this._adGPortal.destroy(),
				this.initAds_GPortal()
			}), this.loadAds_GPortal())
		}
		static loadAds_GPortal() {
			this._adGPortal && this._adGPortal.load()
		}
		static playAds_GPortal(t) {
			if ((t || this._adGPortal) && (this._adGPortal && (this._adGPortal.destroy(), this._adGPortal = null, this._adGPortal_loaded = !1), this.initAds_GPortal()), this._adGPortal) {
				let t = () =>{
					this._adGPortal.show().then(function() {
						console.log("[SdkCtrl.playAds_GPortal] show succ")
					}).
					catch(function(t) {
						console.log("[SdkCtrl.playAds_GPortal] show fail", JSON.stringify(t))
					})
				};
				this._adGPortal_loaded ? t() : this._adGPortal.load().then(() =>{
					t()
				})
			}
		}
		static initAds_GBanner() {
			this._adGBanner = null,
			this._adGBanner_loaded = !1,
			this._sdk && "" != this.AdUnit_GBanner && this.isSuport_gridAd() && (this._adGBanner = this._sdk.createGameBannerAd({
				adUnitId: this.AdUnit_GBanner
			}), this._adGBanner.onLoad(() =>{
				this._adGBanner_loaded = !0,
				console.log("[SdkCtrl.initAds_GPortal] load succ")
			}), this._adGBanner.onError(t =>{
				console.log("[SdkCtrl.initAds_GPortal] error:", t)
			}), this.loadAds_GBanner())
		}
		static loadAds_GBanner() {}
		static playAds_GBanner(t, e) {
			t ? (!e && this._adGBanner || (this._adGBanner && (this._adGBanner.destroy(), this._adGBanner = null, this._adGBanner_loaded = !1), this.initAds_GBanner()), this._adGBanner.show().then(() =>{
				console.log("[SdkCtrl.playAds_GBanner] show succ")
			}).
			catch(t =>{
				console.log("[SdkCtrl.playAds_GBanner] show fail", JSON.stringify(t))
			})) : this._adGBanner && (this._adGBanner.hide().then(() =>{
				console.log("[SdkCtrl.playAds_GBanner] hide succ")
			}).
			catch(t =>{
				console.log("[SdkCtrl.playAds_GBanner] hide fail", JSON.stringify(t))
			}), e && (this._adGBanner.destroy(), this._adGBanner = null, this._adGBanner_loaded = !1, this.initAds_GBanner()))
		}
		static initRecord() {}
		static startRecord() {}
		static stopRecord() {}
		static shareRecord(t) {}
	}
	m.AppId = "30538813",
	m.AppKey = "",
	m.AdUnit_Reward = "331736",
	m.AdUnit_Screen = "",
	m.AdUnit_Banner = "331738",
	m.AdUnit_Native = "331737",
	m.AdUnit_GPortal = "331739",
	m.AdUnit_GBanner = "331740",
	m._sdk = null,
	m._deviceW = 0,
	m._deviceH = 0,
	m._platformVC = 0,
	m._adReward = null,
	m._adReward_loadFlag = 0,
	m._adReward_ready = !1,
	m._adReward_idx = 0,
	m._adReward_overCB = null,
	m._adScreen = null,
	m._adScreen_loaded = !1,
	m._adBanner = null,
	m._adBannerShowing = !1,
	m._adNative = null,
	m._adNative_itemShow = null,
	m._adNative_loadFlag = 0,
	m._adNative_playCB = null,
	m._adGPortal = null,
	m._adGPortal_loaded = !1,
	m._adGBanner = null,
	m._adGBanner_loaded = !1,
	m._appSign = "",
	m._appOpenId = "",
	m._appScene = 0,
	m._appFrom_appId = null,
	m._appFrom_adId = 0,
	m._appEnterFlag = 0,
	m._appShareInfo = null,
	m._shareTimes = 0,
	m._shareTime = 0,
	m._shareOverCB = null,
	m._record = null,
	m._recordPath = null,
	m._recordFlag = 0;
	var y, w, f, v, S, B, C, x, k, A, M = e.GameMode,
	b = e.RunState,
	I = e.HeroBuff;
	class L {
		static setMode(t) {
			this._mode = t
		}
		static getMode() {
			return this._mode
		}
		static isMode(t) {
			return this._mode === t
		}
		static getModeTimeMax() {
			switch (this._mode) {
			case M.Classic:
				return Math.floor(180);
			case M.Egg:
			case M.Diamond:
			case M.Survival:
				return Math.floor(120)
			}
			return 0
		}
		static isModeTimeLimit() {
			return this.getModeTimeMax() > 0
		}
		static setRunState(t) {
			this._runState = t
		}
		static getRunState() {
			return this._runState
		}
		static resetGame() {
			this._runState = b.None,
			this._playTime = 0,
			this._heroAvatar = !1,
			this._heroSkinTrial = -1,
			this._heroBuff = -1,
			this._no1_pid = -1,
			this._overRank = -1,
			this._overScore = "",
			this._overEggs = 0,
			this._overDiamonds = 0,
			this._overGolds = 0
		}
		static updateGame(t) {
			this._playTime += t
		}
		static getShowTime() {
			let t = Math.floor(this._playTime / 1e3),
			e = this.getModeTimeMax();
			return e > 0 && (t = e - t),
			t
		}
		static setOverInfo(t, e, i, s, a) {
			this._overRank = t,
			this._overScore = e,
			this._overEggs = i,
			this._overDiamonds = s,
			this._overGolds = 0,
			this._mode === M.Survival || this._mode === M.Egg ? this._overRank < 1 ? this._overGolds = 500 : this._overRank < 2 ? this._overGolds = 350 : this._overRank < 3 ? this._overGolds = 200 : this._overRank < 8 ? this._overGolds = 100 : this._overRank < 12 ? this._overGolds = 80 : this._overGolds = 50 : this._mode === M.Classic && (this._overGolds = Math.floor(a * a * 100))
		}
		static getWeight(t) {
			let e = ["mg", "g", "kg", "t", "kt"],
			i = 0;
			if ((t = Math.floor(t)) >= 1e3) {
				let s = Math.floor(Math.log10(t)); (i = Math.floor(s / 3)) >= e.length && (i = e.length - 1)
			}
			let s = "";
			if (i > 0) {
				let e = t / Math.pow(1e3, i);
				s = (e = Math.round(1e3 * e) / 1e3).toPrecision(3)
			} else s = "" + t;
			return s + e[i]
		}
		static swapPos_UIButton(t, e) {
			if (!t || !e) return;
			let i = null,
			s = null;
			if (t.parent === e.parent ? (i = t, s = e) : t.parent && e.parent && t.parent.parent === e.parent.parent && (i = t.parent, s = e.parent), i && s) {
				let t = i.x,
				e = i.y;
				i.x = s.x,
				i.y = s.y,
				s.x = t,
				s.y = e
			}
		}
		static setCameraPos(t) {
			this._camera.transform.localPosition = t
		}
		static getCameraPos() {
			return this._camera.transform.localPosition
		}
		static getCameraWideAngle() {
			return 60
		}
		static getCameraHighAngle() {
			return this._camera.transform.localRotationEulerX
		}
		static getFoodSkin(t) {
			return this._foodSkinsParent.getChildByName(t)
		}
		static getRdmPos_food(t = 10) {
			let e = this._foodArea.r * (1 - Math.random() * Math.random()),
			i = Math.random() * Math.PI * 2,
			s = this._foodArea.x + e * Math.cos(i),
			a = this._foodArea.y + e * Math.sin(i);
			return new Laya.Vector3(s, t, a)
		}
		static addFoodNode(t) {
			this._foodsParent.addChild(t)
		}
		static clearAllFoods() {
			this._foodsParent.destroyChildren()
		}
		static getRoleSkin(t) {
			return this._roleSkinsParent.getChildByName(t)
		}
		static getRdmPos_role(t = -1) {
			let e = this._roleArea.r * (1 - Math.random() * Math.random()),
			i = Math.random() * Math.PI * 2,
			s = this._roleArea.x + e * Math.cos(i),
			a = this._roleArea.y + e * Math.sin(i);
			return new Laya.Vector3(s, t, a)
		}
		static addRoleNode(t) {
			this._rolesParent.addChild(t)
		}
		static clearAllRoles() {
			this._rolesParent.destroyChildren()
		}
		static getEggSkin(t) {
			return this._eggSkinsParent.getChildByName(t)
		}
		static getRdmPos_egg(t = 10) {
			let e = this._eggArea.r * (1 - Math.random() * Math.random()),
			i = Math.random() * Math.PI * 2,
			s = this._eggArea.x + e * Math.cos(i),
			a = this._eggArea.y + e * Math.sin(i);
			return new Laya.Vector3(s, t, a)
		}
		static addEggNode(t) {
			this._eggsParent.addChild(t)
		}
		static clearAllEggs() {
			this._eggsParent.destroyChildren()
		}
		static getConfigFromServer() {
			if (Laya.Browser.onMiniGame) {
				let t = "";
				Laya.loader.load(t, Laya.Handler.create(this, () =>{
					let e = Laya.loader.getRes(t);
					console.log("data = ", e),
					e && this.analysisConfigs(e)
				}), null, Laya.Loader.JSON)
			} else this.analysisConfigs(null)
		}
		static analysisConfigs(t) {
			if (t && Laya.Browser.onMiniGame) {
				L._mistakeFlag = t.mistakeFlag,
				L._mistakeScenes = t.mistakeScenes,
				L._gameListFlag = t.gameListFlag,
				L._gameListScenes = t.gameListScenes,
				L._gameList = t.gameList;
				for (let t = 0; t < this._gameList.length;) this._gameList[t].appid == m.AppId ? this._gameList.splice(t, 1) : t++
			} else L._mistakeFlag = 1,
			L._mistakeScenes = [],
			L._gameListFlag = 1,
			L._gameListScenes = [],
			L._gameList = [];
			let e = L.getGameListCnt();
			for (let t = 0; t < e; t++) {
				let e = L.getGameListData(t);
				e.local && 1 == e.local || Laya.loader.load(e.game_icon, Laya.Handler.create(this, () =>{
					console.log("load image succ", e.game_icon)
				}), null, Laya.Loader.IMAGE)
			}
		}
		static getGameListCnt() {
			return L._gameList.length
		}
		static getGameListData(t) {
			return L._gameList[t]
		}
		static isShowGameList() {
			if (this.getGameListCnt() <= 0) return ! 1;
			if (Laya.Browser.onMiniGame) {
				if (3 == this._gameListFlag) {
					let t = this._gameListScenes;
					for (let e = 0; e < t.length; e++) if (t[e] == m._appScene) {
						this._gameListFlag = 2;
						break
					}
				}
				return 2 == this._gameListFlag
			}
			return ! 0
		}
		static isMistakeTouch() {
			if (3 == this._mistakeFlag) {
				let t = this._mistakeScenes;
				if (console.log("mistakeScenes = ", t.toString()), Laya.Browser.onMiniGame) for (let e = 0; e < t.length; e++) if (t[e] == m._appScene) {
					this._mistakeFlag = 2;
					break
				}
			}
			return 2 == this._mistakeFlag
		}
		static isOpenSwitch() {
			let t = n.Utils.getDate();
			if (console.log("------ isOpenSwitch date", t), t < 20210625) return ! 1;
			let e = n.Utils.getTime();
			return console.log("------ isOpenSwitch time", e),
			!(e < 11e4 || e > 14e4 && e < 17e4)
		}
	}
	L._mode = M.Survival,
	L._playTime = 0,
	L._runState = b.None,
	L._heroAvatar = !1,
	L._heroMoveSpeed = 0,
	L._heroMoveAngle = 0,
	L._heroSkinTrial = -1,
	L._heroBuff = I.None,
	L._no1_pid = -1,
	L._killShow = null,
	L._overRank = -1,
	L._overScore = "",
	L._overEggs = 0,
	L._overDiamonds = 0,
	L._overGolds = 0,
	L._scene = null,
	L._area = null,
	L._dLight = null,
	L._camera = null,
	L._foodsParent = null,
	L._foodSkinsParent = null,
	L._foodArea = null,
	L._rolesParent = null,
	L._roleSkinsParent = null,
	L._roleArea = null,
	L._eggsParent = null,
	L._eggSkinsParent = null,
	L._eggArea = null,
	L.V3_UP = new Laya.Vector3(0, 1, 0),
	L.V3_RIGHT = new Laya.Vector3(1, 0, 0),
	L.V3_FORWARD = new Laya.Vector3(0, 0, 1),
	L._mistakeFlag = 1,
	L._mistakeScenes = [],
	L._gameListFlag = 1,
	L._gameListScenes = [],
	L._gameList = [],
	function(t) {
		t[t.Idle = 0] = "Idle",
		t[t.Run = 1] = "Run",
		t[t.Attack = 2] = "Attack",
		t[t.Die = 3] = "Die"
	} (y || (y = {}));
	class E extends Laya.Script3D {
		constructor() {
			super(),
			this._self = null,
			this._effect = null,
			this._eff_invi = null,
			this._eff_speed = null,
			this._eff_grow = null,
			this._anim = null,
			this._animAction = y.Idle,
			this._playerIdx = -1,
			this._score = 0,
			this._avatarTime = 300,
			this._avatarTimer = 0,
			this._avatarAngle = 0,
			this._avatarSpeed = 0,
			this._joinFlag = 0
		}
		init(t) {
			this._playerIdx = t,
			this._self = this.owner,
			this._effect = this.owner.getChildByName("effect"),
			this._eff_invi = this._effect.getChildByName("invi"),
			this._eff_speed = this._effect.getChildByName("speed"),
			this._eff_grow = this._effect.getChildByName("grow"),
			this._anim = this.owner.getComponent(Laya.Animator),
			this.setAnimAction(y.Idle, !1),
			this.reset()
		}
		reset() {
			this.score = 0,
			this._joinFlag = 0,
			this.setAvatar(0, 0, 0),
			this.setAnimAction(y.Idle, !1),
			this.setEffect_invi(!1),
			this.setEffect_speed(!1),
			this.setEffect_grow(!1)
		}
		get playerIdx() {
			return this._playerIdx
		}
		set score(t) {
			this._score = t,
			this._score < 0 && (this._score = 0);
			let e = E.calculateShowScale(this._score);
			this.showScale = e
		}
		get score() {
			return this._score
		}
		static calculateShowScale(t) {
			let e = [{
				sc: .3,
				sm: 50
			},
			{
				sc: .6,
				sm: 5e4
			},
			{
				sc: 1.2,
				sm: 2e5
			},
			{
				sc: 2.4,
				sm: 1e6
			},
			{
				sc: 3.8,
				sm: 5e7
			},
			{
				sc: 4.5,
				sm: 1e8
			}];
			if (t <= e[0].sm) return e[0].sc;
			let i = e.length;
			for (let s = 0; s < i; s++) {
				if (t > e[s].sm) continue;
				if (0 == s) return e[0].sc;
				let i = e[s].sc - e[s - 1].sc,
				a = e[s].sm - e[s - 1].sm,
				n = t - e[s - 1].sm;
				return e[s - 1].sc + i * n / a
			}
			return e[i - 1].sc + 1.2 * (t - e[i - 1].sm) / (1e9 - e[i - 1].sm)
		}
		set showScale(t) {
			let e = this._self.transform,
			i = e.localScale;
			i.setValue(t, t, t),
			e.localScale = i
		}
		get showScale() {
			return this._self.transform.localScaleX
		}
		set forward(t) {
			this._self.transform.localRotationEulerY = 90 - t
		}
		get forward() {
			return 90 - this._self.transform.localRotationEulerY
		}
		get radius() {
			return 1 * this.showScale
		}
		set joinFlag(t) {
			this._joinFlag = t
		}
		get joinFlag() {
			return this._joinFlag
		}
		setPosition(t, e = !0) {
			e ? this._self.transform.localPosition = t: this._self.transform.position = t
		}
		getPosition(t = !0) {
			return t ? this._self.transform.localPosition: this._self.transform.position
		}
		doMoveTo(t) {
			let e = new Laya.Vector3;
			Laya.Vector3.subtract(t, this.getPosition(), e);
			let i = Math.sqrt(e.x * e.x + e.z * e.z);
			i > .001 ? (this.forward = 180 * Math.atan2(e.z, e.x) / Math.PI, t.y = this.getPosition().y, this.setPosition(t), this.setAnimAction(y.Run), this._anim.speed = .5 * i / .1) : (this.setAnimAction(y.Idle), this._anim.speed = .5)
		}
		setAvatar(t, e, i) {
			this._avatarTime = t,
			this._avatarTimer = 0,
			this._avatarAngle = e,
			this._avatarSpeed = i
		}
		isAvatar() {
			return this._avatarTime > 0
		}
		isAvatarable() {
			return ! this.isAvatar() && this.score >= 1e3
		}
		isDevourable(t) {
			return.5 * this.score > t.score + 1e3
		}
		updateAvatar(t) {
			if (this._avatarTime > 0) {
				let e = this._avatarSpeed * (1 - .5 * this._avatarTimer / this._avatarTime);
				this._avatarTimer += t,
				this._avatarTimer >= this._avatarTime && this.setAvatar(0, 0, 0);
				let i = Math.PI * this._avatarAngle / 180,
				s = new Laya.Vector3(0, 0, 0);
				return s.x = e * Math.cos(i),
				s.z = e * Math.sin(i),
				s
			}
			return null
		}
		setAnimAction(t, e = !0) {
			if ((!e || t !== this._animAction) && (this._animAction = t, this._anim)) {
				let e = ["idle_01", "run_01", "attack_01", "die_01"];
				this._anim.crossFade(e[t], .1, 0, 0)
			}
		}
		getArea() {
			let t = this.getPosition(),
			e = this.radius;
			return new n.Rect(t.x - e, t.z - e, 2 * e, 2 * e)
		}
		setEffect_invi(t) {
			this._eff_invi.active != t && (this._eff_invi.active = t)
		}
		isEffect_invi() {
			return this._eff_invi.active
		}
		setEffect_speed(t) {
			this._eff_speed.active != t && (this._eff_speed.active = t)
		}
		isEffect_speed() {
			return this._eff_speed.active
		}
		setEffect_grow(t) {
			this._eff_grow.active != t && (this._eff_grow.active = t)
		}
		isEffect_grow() {
			return this._eff_grow.active
		}
	} !
	function(t) {
		t[t.Close = 0] = "Close",
		t[t.Click = 1] = "Click"
	} (w || (w = {}));
	class O extends t.Scenes.views.ViewNativeAdUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0,
			this._adTitle = "",
			this._adUrl = ""
		}
		static show(t, e) {
			if (!Laya.Browser.onQGMiniGame && !Laya.Browser.onVVMiniGame) return console.log("ViewNativeAd show: platform error"),
			void(t && t(0));
			if (!L.isOpenSwitch()) return console.log("ViewNativeAd show: time error"),
			void(t && t(0));
			let i = (new Date).getTime();
			if (this._preShowTime > 0 && i - this._preShowTime < this.SpaceTimeMin) return console.log("ViewNativeAd show: space time less than 60s"),
			void(t && t(0));
			this._preShowTime = i,
			m.playAds_native(i =>{
				if (i) {
					let s = new O;
					s._closeCB = t,
					s.zOrder = e,
					s._adTitle = i.title,
					s._adUrl = i.url,
					Laya.stage.addChild(s)
				} else t && t(0)
			})
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this.lab_adTitle.text = this._adTitle,
			this.img_adShow.loadImage(this._adUrl),
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy()
		}
		allButtonOn() {
			this.addButtonAction(this.btn_adClose),
			this.addButtonClick(this.btn_adClose, w.Close),
			this.addButtonAction(this.btn_adClick),
			this.addButtonClick(this.btn_adClick, w.Click),
			this.img_adShow.on(Laya.Event.CLICK, this, this.onButtonClick, [w.Click])
		}
		allButtonOff() {
			this.btn_adClose.offAll(),
			this.btn_adClick.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + w[t]),
			t === w.Close ? (m.onClose_native(), this._closeCB_index = 0, this.setAniClose()) : t == w.Click && (m.onClick_native(), m.onClose_native(), this._closeCB_index = 0, this.setAniClose())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_relive"),
			m.playAds_banner(!0)
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			m.playAds_banner(!1)
		}
	}
	O.SpaceTimeMin = 6e4,
	O._preShowTime = 0,
	function(t) {
		t[t.Ad = 0] = "Ad",
		t[t.Record_TimeShort = 1] = "Record_TimeShort"
	} (f || (f = {}));
	class P extends t.Scenes.views.ViewTipFailUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._aniFlag = 0,
			this._index = f.Ad
		}
		static show(t, e = 0, i = f.Ad) {
			let s = new P;
			s._closeCB = t,
			s._index = i,
			s.zOrder = e,
			Laya.stage.addChild(s)
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this.y = (Laya.stage.height - this.height) / 2;
			let t = null,
			e = "tip" + this._index;
			for (let i = 0; i < this.tipsNode.numChildren; i++)(t = this.tipsNode.getChildAt(i)).visible = e === t.name;
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {}
		update() {
			if (0 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 1,
			this._closeCB && this._closeCB(1, 0),
			void this.destroy()
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tip")
		}
	} !
	function(t) {
		t[t.Buff1 = 0] = "Buff1",
		t[t.Buff2 = 1] = "Buff2",
		t[t.Buff3 = 2] = "Buff3",
		t[t.Close = 3] = "Close"
	} (v || (v = {}));
	class N extends t.Scenes.views.ViewBuffUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_code = 0,
			this._aniFlag = 0
		}
		static show(t, e = 0) {
			let i = new N;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}

		onAwake(){
			this.btn_buff1_txt.text = Language.getName("加速飞鞋");
			this.btn_buff1_txt2.text = Language.getName("移动速度增加20%");
			this.btn_buff1_txt3.text = Language.getName("领取");
			this.btn_buff2_txt.text = Language.getName("成长药水");
			this.btn_buff2_txt2.text = Language.getName("成长速度增加100%");
			this.btn_buff2_txt3.text = Language.getName("领取");
			this.btn_buff3_txt.text = Language.getName("巨无霸");
			this.btn_buff3_txt2.text = Language.getName("初始体重增加500g");
			this.btn_buff3_txt3.text = Language.getName("领取");
		}

		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_code),
			void this.destroy()
		}
		allButtonOn() {
			this.addButtonAction(this.btn_buff1),
			this.addButtonClick(this.btn_buff1, v.Buff1),
			this.addButtonAction(this.btn_buff2),
			this.addButtonClick(this.btn_buff2, v.Buff2),
			this.addButtonAction(this.btn_buff3),
			this.addButtonClick(this.btn_buff3, v.Buff3),
			this.addButtonAction(this.btn_close),
			this.addButtonClick(this.btn_close, v.Close)
		}
		allButtonOff() {
			this.btn_buff1.offAll(),
			this.btn_buff2.offAll(),
			this.btn_buff3.offAll(),
			this.btn_close.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + v[t]),
			t === v.Close ? this.setAniClose() : t === v.Buff1 ? m.playAds_reward(0, t =>{
				0 == t ? (L._heroBuff = e.HeroBuff.SpeedUp, this._closeCB_code = 1, this.setAniClose(), console.log("buff1")) : P.show(null, this.zOrder + 1, f.Ad)
			}) : t === v.Buff2 ? m.playAds_reward(0, t =>{
				0 == t ? (L._heroBuff = e.HeroBuff.ScoreUp, this._closeCB_code = 2, this.setAniClose(), console.log("buff2")) : P.show(null, this.zOrder + 1, f.Ad)
			}) : t === v.Buff3 && m.playAds_reward(0, t =>{
				0 == t ? (L._heroBuff = e.HeroBuff.ScoreAdd, this._closeCB_code = 3, this.setAniClose(), console.log("buff3")) : P.show(null, this.zOrder + 1, f.Ad)
			})
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu"),
			m.playAds_banner(!0)
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_code),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			m.playAds_banner(!1)
		}
	} !
	function(t) {
		t[t.Egg = 0] = "Egg",
		t[t.Diamond_Box = 1] = "Diamond_Box"
	} (S || (S = {})),
	function(t) {
		t[t.Born = 0] = "Born",
		t[t.Idle = 1] = "Idle",
		t[t.Die = 2] = "Die",
		t[t.Over = 3] = "Over"
	} (B || (B = {}));
	class U extends Laya.Script {
		constructor() {
			super(),
			this._self = null,
			this._anim = null,
			this._skinIdx = S.Egg,
			this._state = B.Idle,
			this._stateTimer = 0
		}
		set skinIdx(t) {
			this._skinIdx = t
		}
		get skinIdx() {
			return this._skinIdx
		}
		init() {
			this._self = this.owner,
			this._anim = this.owner.getComponent(Laya.Animator),
			this.reset()
		}
		reset() {
			this._state = B.Idle,
			this._stateTimer = 0,
			this._anim && this._anim.play()
		}
		set showScale(t) {
			let e = this._self.transform;
			e.localScaleX = t,
			e.localScaleY = t,
			e.localScaleZ = t
		}
		get showScale() {
			return this._self.transform.localScaleX
		}
		get raduis() {
			return.8 * this.showScale
		}
		setPosition(t, e = !0) {
			e ? this._self.transform.localPosition = t: this._self.transform.position = t
		}
		getPosition(t = !0) {
			return t ? this._self.transform.localPosition: this._self.transform.position
		}
		setState(t, e = 0) {
			this._state = t,
			this._stateTimer = e
		}
		isState(t) {
			return this._state === t
		}
		isOver() {
			return this._state === B.Over
		}
		isCanCollect() {
			return this._state === B.Idle || this._state == B.Born
		}
		doDie() {
			this.setState(B.Over, 0)
		}
		onUpdate() {
			let t = this._self.timer.delta;
			this._state === B.Born ? (this._stateTimer -= t, this._stateTimer <= 0 && this.setState(B.Idle, 0)) : this._state === B.Die && (this._stateTimer -= t, this._stateTimer <= 0 && this.setState(B.Over, 0))
		}
	}
	class T {
		constructor() {
			this._eggs = [],
			this._addTimer = 0,
			this._addTimes = 0,
			this._addTotal = 0
		}
		static instance() {
			return T._instance || (T._instance = new T),
			T._instance
		}
		createEgg(t = 0) {
			let e = L.getEggSkin("egg" + (t + 1)),
			i = Laya.Sprite3D.instantiate(e),
			s = i.addComponent(U);
			return s.init(),
			this._eggs.push(s),
			L.addEggNode(i),
			s
		}
		initEggs(t) {
			this.freeEggs();
			let i = S.Egg;
			if (L.isMode(e.GameMode.Egg)) i = S.Egg;
			else {
				if (!L.isMode(e.GameMode.Diamond)) return;
				i = S.Diamond_Box
			}
			for (let t = 0; t < 20; t++) {
				let e = this.createEgg(i);
				e.skinIdx = i,
				e.owner.name = "egg" + t,
				e.owner.active = !1
			}
			this.doActiveEggs(t)
		}
		freeEggs() {
			this._eggs = []
		}
		addEgg(t) {
			t.owner.active = !0,
			t.reset()
		}
		delEgg(t) {
			t.owner.active = !1
		}
		delEggAt(t) {
			t >= 0 && t < this._eggs.length && (this._eggs[t].owner.active = !1)
		}
		delEggAll() {
			for (let t = 0; t < this._eggs.length; t++) this._eggs[t].owner.active = !1
		}
		getEggs() {
			let t = [];
			for (let e = 0; e < this._eggs.length; e++) this._eggs[e].owner.active && t.push(this._eggs[e]);
			return t
		}
		update(t) {
			if (! (this._eggs.length <= 0)) {
				for (let t = 0; t < this._eggs.length; t++) this._eggs[t].isOver() && this.delEgg(this._eggs[t]);
				this._addTimer += t,
				this._addTimer > 1e4 && (this._addTimer = 0, this._addTimes += 1, this.doActiveEggs(5))
			}
		}
		doActiveEggs(t) {
			for (let e = 0; e < this._eggs.length; e++) {
				let i = this._eggs[e];
				if (!i.owner.active && (this.addEgg(i), i.setPosition(L.getRdmPos_egg(0)), this._addTotal += 1, (t -= 1) <= 0)) break
			}
		}
	}
	T._instance = null,
	function(t) {
		t[t.Food1 = 0] = "Food1",
		t[t.Food2 = 1] = "Food2",
		t[t.Food3 = 2] = "Food3",
		t[t.Food4 = 3] = "Food4",
		t[t.Food5 = 4] = "Food5",
		t[t.Diamond = 5] = "Diamond",
		t[t.Gold = 6] = "Gold",
		t[t._COUNT_ = 7] = "_COUNT_"
	} (C || (C = {})),
	function(t) {
		t[t.Nor = 0] = "Nor",
		t[t.Loot = 1] = "Loot"
	} (x || (x = {})),
	function(t) {
		t[t.None = 0] = "None",
		t[t.Born = 1] = "Born",
		t[t.Idle = 2] = "Idle",
		t[t.Move = 3] = "Move",
		t[t.Die = 4] = "Die",
		t[t.Over = 5] = "Over"
	} (k || (k = {}));
	class R extends Laya.Script3D {
		constructor() {
			super(),
			this._self = null,
			this._root = null,
			this._rigid = null,
			this._skin = 0,
			this._type = x.Nor,
			this._state = k.None,
			this._stateTimer = 0,
			this._score = 0
		}
		init() {
			this._self = this.owner,
			this._root = this.owner.getChildAt(0),
			this._rigid = this.owner.getComponent(Laya.Rigidbody3D),
			this._rigid.mass = 10,
			this._rigid.restitution = .5,
			this._rigid.linearDamping = .1,
			this._rigid.angularDamping = .8,
			this._rigid.collisionGroup = n.PCG.Food_Rigid,
			this._rigid.canCollideWith = n.PCG.Default | n.PCG.Building,
			this._type = x.Nor,
			this._skin = 0,
			this._state = k.None,
			this._stateTimer = 0
		}
		set skin(t) {
			this._skin = t
		}
		get skin() {
			return this._skin
		}
		get isFruit() {
			return this._skin == C.Food1 || this._skin == C.Food2 || this._skin == C.Food4
		}
		get isCake() {
			return this._skin == C.Food3 || this._skin == C.Food5
		}
		set type(t) {
			this._type = t
		}
		get type() {
			return this._type
		}
		set score(t) {
			this._score = Math.round(t),
			this._score < 0 && (this._score = 0);
			let e = .5;
			this._score > 100 && (e += .05 * Math.sqrt(this._score - 100)),
			this.showScale = e
		}
		get score() {
			return this._score
		}
		set showScale(t) {
			let e = this._self.transform;
			e.localScaleX = t,
			e.localScaleY = t,
			e.localScaleZ = t
		}
		get showScale() {
			return this._self.transform.localScaleX
		}
		get raduis() {
			return.5 * this.showScale
		}
		setPosition(t, e = !0) {
			e ? this._self.transform.localPosition = t: this._self.transform.position = t
		}
		getPosition(t = !0) {
			return t ? this._self.transform.localPosition: this._self.transform.position
		}
		setPosition_v2(t, e = !0) {
			let i = this.getPosition();
			this.setPosition(new Laya.Vector3(t.x, i.y, t.y))
		}
		getPosition_v2() {
			let t = this.getPosition();
			return new Laya.Vector2(t.x, t.z)
		}
		onUpdate() {
			let t = this._self.timer.delta;
			if (this._state == k.Over) this._stateTimer -= t;
			else if (this._state == k.Born) this._stateTimer -= t,
			this._stateTimer <= 0 && (this._rigid.enabled = !1, this.setState(k.Idle));
			else if (this._stateTimer += t, this._state == k.Die) {
				let t = this.showScale - .05;
				if (t > 0) this.showScale = t;
				else {
					let t = 1 + 2 * Math.random();
					this.doOver(1e3 * t)
				}
			}
		}
		setState(t, e = 0) {
			this._state = t,
			this._stateTimer = e
		}
		isCanRemove() {
			return this._state == k.Over && this._type != x.Nor
		}
		isCanRevive() {
			return this._state == k.Over && this._type == x.Nor && this._stateTimer <= 0
		}
		isCanEaten() {
			return this._state == k.Idle || this._state == k.Born
		}
		doBorn(t) {
			this._self.transform.localRotationEulerX = n.Utils.random(0, 360),
			this._self.transform.localRotationEulerY = n.Utils.random(0, 360),
			this._self.transform.localRotationEulerZ = n.Utils.random(0, 360),
			this.setPosition(t, !0),
			this.setState(k.Born, 1e3),
			this.score = 100 + n.Utils.randomInt(0, 100),
			this._rigid.enabled = !1,
			this._root.active = !0
		}
		doMove(t) {
			this._self.transform.translate(t, !0)
		}
		doDie() {
			this.setState(k.Die)
		}
		doOver(t) {
			this._rigid.enabled = !1,
			this._root.active = !1,
			this.setState(k.Over, t)
		}
		doRevive(t) {
			this.setPosition(t, !0),
			this.setState(k.Born, 1e4),
			this.score = 100 + n.Utils.randomInt(0, 100),
			this._rigid.enabled = !0,
			this._root.active = !0;
			let e = 5 - 10 * Math.random(),
			i = 5 - 10 * Math.random();
			this._rigid.linearVelocity = new Laya.Vector3(e, 0, i)
		}
	} !
	function(t) {
		t[t.Speed = 0] = "Speed",
		t[t.Grow = 1] = "Grow",
		t[t.COUNT = 2] = "COUNT"
	} (A || (A = {}));
	class F extends Laya.Script3D {
		constructor() {
			super(),
			this._self = null,
			this._prop = null,
			this._namePlane = null,
			this._eggNode = null,
			this._eggNum = null,
			this._weightNode = null,
			this._weightNum = null,
			this._buffNode = null,
			this._buffs = null,
			this._prop1 = null,
			this._no1_eff = null,
			this._eggCnt = 0,
			this._weightVal = ""
		}
		init() {
			this._self = this.owner,
			this._prop = this.owner.getChildByName("prop"),
			this._namePlane = this._prop.getChildByName("name"),
			this._eggNode = this._prop.getChildByName("egg"),
			this._eggNum = [];
			for (let t = 0; t < 2; t++) {
				let e = "num" + (t + 1),
				i = this._eggNode.getChildByName(e);
				this._eggNum.push(i)
			}
			this._weightNode = this._prop.getChildByName("weight"),
			this._weightNum = [];
			for (let t = 0; t < 4; t++) {
				let e = "num" + (4 - t),
				i = this._weightNode.getChildByName(e);
				this._weightNum.push(i)
			}
			this._buffNode = this._prop.getChildByName("buff"),
			this._buffs = [];
			for (let t = 0; t < A.COUNT; t++) {
				let e = "buff" + (t + 1),
				i = this._buffNode.getChildByName(e);
				this._buffs.push(i)
			}
			this._prop1 = this.owner.getChildByName("prop1"),
			this._no1_eff = this._prop1.getChildByName("no1")
		}
		onEnable() {
			this._eggNode.active = !1,
			this._eggCnt = 0;
			for (let t = 0; t < this._buffs.length; t++) this._buffs[t].active = !1;
			this._weightVal = ""
		}
		setPosition(t, e = !0) {
			e ? this._self.transform.localPosition = t: this._self.transform.position = t
		}
		getPosition(t = !0) {
			return t ? this._self.transform.localPosition: this._self.transform.position
		}
		set showScale(t) {
			let e = t,
			i = 1.2;
			e > 1 && (e = Math.pow(e, .3), i = .6 + .3 * (t - 1));
			let s = this._self.transform,
			a = s.localScale;
			a.setValue(e, e, e),
			s.localScale = a,
			this._no1_eff.transform.localPositionY = i
		}
		setShowName(t) {
			this._namePlane.meshRenderer.material = l.getPlayerNameMat(t)
			this._namePlane.active = false;
		}
		setShow_egg(t = 0) {
			if (t > 0) {
				if (this._eggNode.active || (this._eggNode.active = !0), t != this._eggCnt) {
					this._eggCnt = t;
					let e = "" + t;
					for (let t = 0; t < this._eggNum.length; t++) this._eggNum[t].active = e.length > t,
					e.length > t && (this._eggNum[t].meshRenderer.material = l.getEggNumMat(e.charAt(t)))
				}
			} else this._eggNode.active && (this._eggNode.active = !1)
		}
		isShow_egg() {
			return this._eggNode.active
		}
		setShow_weight(t) {
			if (this._weightVal == t) return;
			this._weightVal = t;
			let e = 0;
			for (let i = 0; i < t.length; i++) {
				let s = t.charAt(i);
				if ("." === s) e += 1;
				else {
					if (Number.isNaN(parseInt(s))) break;
					e += 1
				}
			}
			let i = t.substr(0, e),
			s = t.substr(e);
			for (let t = 0; t < this._weightNum.length; t++) if (this._weightNum[t].active = i.length > t, i.length > t) {
				let e = i.charAt(i.length - t - 1);
				"." === e && (e = "point"),
				this._weightNum[t].meshRenderer.material = l.getEggNumMat(e)
			}
			let a = l.getEggNumMat(s);
			a ? this._weightNode.meshRenderer.material = a: console.error("unit is error =", s)
		}
		setShow_no1(t) {
			this._no1_eff.active != t && (this._no1_eff.active = t)
		}
		setShow_buffs(t) {
			let e = 0;
			for (let i = 0; i < this._buffs.length; i++) {
				let s = t && t.length > i && t[i];
				this._buffs[i].active = s,
				s && (this._buffs[i].transform.localPositionX = -.4 - .9 * e, e += 1)
			}
		}
		isShow_no1() {
			return this._no1_eff.active
		}
		updatePropLookAt() {
			if (this._prop.active) {
				let t = L.getCameraPos().clone();
				t.x = this.getPosition(!1).x,
				this._prop.transform.lookAt(t, L.V3_UP, !1)
			}
		}
	}
	class G {
		constructor(t) {
			this._index = 0,
			this._nameIdx = 0,
			this._skinIdx = 0,
			this._roles = [],
			this._rolePool = [],
			this._roleProps = null,
			this._moveSpeed = 0,
			this._moveAngle = 0,
			this._joinTimer = 0,
			this._ai_avatarTimer = 0,
			this._ai_changeAngleTimer = 0,
			this._ai_scoreTimer = 0,
			this._collect_diamonds = 0,
			this._collect_eggs = 0,
			this._score = 0,
			this._scoreMax = 0,
			this._inviTime = 0,
			this._speedTime = 0,
			this._growTime = 0,
			this._index = t,
			this.reset()
		}
		reset() {
			this._joinTimer = 0,
			this._ai_avatarTimer = 3e3,
			this._ai_changeAngleTimer = 0,
			this._ai_scoreTimer = 0,
			this._collect_diamonds = 0,
			this._collect_eggs = 0,
			this._score = 0,
			this._scoreMax = 0,
			this._inviTime = 0
		}
		isHero() {
			return 0 == this._index
		}
		set nameIdx(t) {
			this._nameIdx = t
		}
		get nameIdx() {
			return this._nameIdx
		}
		get nameStr() {
			return this.isHero() ? c.getPName() : l.getPlayerName(this._nameIdx)
		}
		set skinIdx(t) {
			this._skinIdx = t
		}
		get skinIdx() {
			return this._skinIdx
		}
		getScore() {
			return this._score
		}
		getScoreMax() {
			return this._scoreMax
		}
		addScore(t) {
			this._roles.length > 0 && (this._roles[0].score = this._roles[0].score + t)
		}
		setMove(t, e) {
			this._moveSpeed = t > 0 ? t: 0,
			this._moveAngle = e
		}
		getMove_v3() {
			let t = this._moveAngle * Math.PI / 180,
			e = new Laya.Vector3(Math.cos(t), 0, Math.sin(t));
			return Laya.Vector3.scale(e, this._moveSpeed, e),
			e
		}
		get moveSpeed() {
			return this._moveSpeed
		}
		get moveAngle() {
			return this._moveAngle
		}
		set growTime(t) {
			this._growTime = t
		}
		get growTime() {
			return this._growTime
		}
		get isGrow() {
			return this._growTime > 0
		}
		get growRate() {
			let t = 1;
			return this.isGrow && (t += 4),
			this.isHero() && L._heroBuff === e.HeroBuff.ScoreUp && (t += 1),
			5 * t
		}
		set speedTime(t) {
			this._speedTime = t
		}
		get speedTime() {
			return this._speedTime
		}
		get isSpeed() {
			return this._speedTime > 0
		}
		get speedRate() {
			let t = 1;
			return this.isSpeed && (t += .6),
			this.isHero() && L._heroBuff === e.HeroBuff.SpeedUp && (t += .2),
			t
		}
		set inviTime(t) {
			this._inviTime = t
		}
		get inviTime() {
			return this._inviTime
		}
		get isInvi() {
			return this._inviTime > 0
		}
		createRole() {
			let t = L.getRoleSkin("role" + (this.skinIdx + 1)),
			e = Laya.Sprite3D.instantiate(t),
			i = e.addComponent(E);
			return i.init(this._index),
			L.addRoleNode(e),
			i
		}
		initRoles() {
			let t = this.isHero() ? 16 : 8;
			l.onIosWx() && (t = this.isHero() ? 8 : 2),
			this.freeRoles();
			for (let e = 0; e < t; e++) {
				let t = this.createRole();
				t.owner.active = !1,
				this._rolePool.push(t)
			}
			let e = l._roleProps.clone();
			this._roleProps = e.addComponent(F),
			this._roleProps.init(),
			this._roleProps.setShowName(this.nameIdx),
			L.addRoleNode(e),
			e.active = !1
		}
		freeRoles() {
			this._roles = [],
			this._rolePool = [],
			this._roleProps = null
		}
		addRole() {
			if (this._rolePool.length > 0) {
				let t = this._rolePool[0];
				return this._rolePool.splice(0, 1),
				this._roles.push(t),
				t.reset(),
				t.owner.active = !0,
				t
			}
			return null
		}
		delRole(t) {
			let e = this._roles.indexOf(t);
			e >= 0 && (this._roles.splice(e, 1), this._rolePool.push(t), t.owner.active = !1)
		}
		delRoleAt(t) {
			if (t >= 0 && t < this._roles.length) {
				let e = this._roles[t];
				this._roles.splice(t, 1),
				this._rolePool.push(e),
				e.owner.active = !1
			}
		}
		delAllRoles() {
			for (let t = 0; t < this._roles.length; t++) {
				let e = this._roles[t];
				this._rolePool.push(e),
				e.owner.active = !1
			}
			this._roles = []
		}
		getRoles() {
			return this._roles
		}
		getRoleCnt() {
			return this._roles.length
		}
		getRoleMain() {
			let t = null;
			for (let e = 0; e < this._roles.length; e++)(!t || this._roles[e].score > t.score) && (t = this._roles[e]);
			return t
		}
		isDie() {
			return this._roles.length <= 0
		}
		adjustPos_sceneArea(t, e, i = !1) {
			let s = L._area.l + e,
			a = L._area.r - e,
			n = L._area.b + e,
			o = L._area.t - e;
			i ? (t.x < s ? t.x = 2 * s - t.x: t.x > a && (t.x = 2 * a - t.x), t.z < n ? t.z = 2 * n - t.z: t.z > o && (t.z = 2 * o - t.z)) : (t.x < s ? t.x = s: t.x > a && (t.x = a), t.z < n ? t.z = n: t.z > o && (t.z = o))
		}
		update(t) {
			if (this._roles.length <= 0) return;
			let e = this.getRoleArea(),
			i = new Laya.Vector3(e.ch, 0, e.cv),
			s = new Laya.Vector3,
			a = this.getMove_v3(),
			o = this._moveAngle * Math.PI / 180,
			h = [],
			l = [],
			r = this._roles.length;
			for (let e = 0; e < r; e++) {
				let a = this._roles[e];
				if (a.isAvatar()) {
					let e = a.updateAvatar(t);
					e && (Laya.Vector3.add(e, a.getPosition(), e), this.adjustPos_sceneArea(e, a.radius, !0), a.doMoveTo(e))
				} else {
					let t = {
						i: e,
						dl: 0,
						da: 0,
						d: 0
					};
					Laya.Vector3.subtract(a.getPosition(), i, s),
					t.dl = Math.sqrt(s.x * s.x + s.z * s.z),
					t.da = n.Utils.radian(s.x, s.z),
					t.dl > .01 && this._moveSpeed > 0 ? t.d = t.dl * Math.cos(t.da - o) : t.d = -t.dl,
					h.push(t)
				}
			}
			h.length > 1 ? (h.sort((t, e) =>t.d - e.d), this._joinTimer += t) : this._joinTimer = 0;
			for (let t = 0; t < h.length; t++) {
				let e = this._roles[h[t].i];
				if (2 === e.joinFlag) continue;
				let o = this.speedRate;
				e.showScale > 1 && (o /= Math.pow(e.showScale, .3)),
				s.setValue(0, 0, 0),
				h[t].dl > .1 && h.length > 1 && (s.x = -.01 * Math.cos(h[t].da) * o, s.z = -.01 * Math.sin(h[t].da) * o),
				this._moveSpeed > 0 && (Laya.Vector3.scale(a, o, i), h[t].d, Laya.Vector3.add(s, i, s));
				let r = e.radius,
				d = e.getPosition();
				Laya.Vector3.add(s, d, s);
				for (let a = 0; a < h.length; a++) {
					let o = this._roles[h[a].i];
					if (t === a || 2 === o.joinFlag) continue;
					let d = o.radius,
					_ = o.getPosition();
					Laya.Vector3.subtract(s, _, i);
					let c = Math.sqrt(i.x * i.x + i.z * i.z);
					if (c < r + d) if (this._joinTimer > 1e3 && (this._joinTimer = 0, e.joinFlag = 1), 1 === e.joinFlag || 1 === o.joinFlag) {
						if (c < r || c < d) {
							if (! (r > d)) {
								o.score = e.score + o.score,
								e.joinFlag = 2,
								o.joinFlag = 0,
								l.push(e);
								break
							}
							e.score = e.score + o.score,
							e.joinFlag = 0,
							o.joinFlag = 2,
							l.push(o)
						}
					} else if (0 !== c) s.x = _.x + i.x * (r + d) / c,
					s.z = _.z + i.z * (r + d) / c;
					else {
						let t = n.Utils.random(0, 360) * Math.PI / 180;
						s.x = _.x + (r + d) * Math.cos(t),
						s.z = _.z + (r + d) * Math.sin(t)
					}
				}
				this.adjustPos_sceneArea(s, r, !1),
				e.doMoveTo(s)
			}
			for (let t = 0; t < l.length; t++) this.delRole(l[t]);
			this._inviTime > 0 && (this._inviTime -= t),
			this._speedTime > 0 && (this._speedTime -= t),
			this._growTime > 0 && (this._growTime -= t);
			for (let t = 0; t < this._roles.length; t++) this._roles[t].setEffect_invi(this.isInvi),
			this._roles[t].setEffect_speed(this.isSpeed),
			this._roles[t].setEffect_grow(this.isGrow);
			this._score = 0;
			for (let t = 0; t < this._roles.length; t++) this._score += this._roles[t].score;
			this._scoreMax < this._score && (this._scoreMax = this._score)
		}
		updateEatFoods(t) {
			if (t.length <= 0 || this._roles.length <= 0) return;
			let i = !1,
			s = !1,
			a = new Laya.Vector3;
			for (let n = 0; n < this._roles.length; n++) {
				let o = this._roles[n],
				h = o.radius,
				l = 1 * o.showScale;
				l = l > 1 ? l: 1;
				let r = o.getPosition();
				for (let n = 0; n < t.length; n++) {
					let d = t[n];
					if (!d.isCanEaten()) continue;
					let _ = h + d.raduis;
					if (Laya.Vector3.subtract(d.getPosition(), r, a), a.x * a.x + a.z * a.z < _ * _ && Math.abs(a.y) < l) {
						let t = d.score * (o.showScale + 1) * this.growRate;
						o.score = o.score + t,
						d.skin == C.Diamond && (this._collect_diamonds += 1, s = !0),
						this.isHero() && (d.isFruit ? g.addProg(e.AchiIndex.Eat_Fruit, 1) : d.isCake && g.addProg(e.AchiIndex.Eat_Cake, 1)),
						d.doDie(),
						i = !0
					}
				}
			}
			this.isHero() && !l.onIosWx() && (i && p.playEFM("ef_eatfood"), s && p.playEFM("ef_eatdiamond"))
		}
		updateCollectEggs(t) {
			if (t.length <= 0 || this._roles.length <= 0) return;
			let e = !1,
			i = new Laya.Vector3;
			for (let s = 0; s < this._roles.length; s++) {
				let a = this._roles[s],
				n = a.radius,
				o = 1 * a.showScale;
				o = o > 1 ? o: 1;
				let h = a.getPosition();
				for (let s = 0; s < t.length; s++) {
					let a = t[s];
					if (!a.isCanCollect()) continue;
					let o = n + a.raduis;
					Laya.Vector3.subtract(a.getPosition(), h, i),
					i.x * i.x + i.z * i.z < o * o && (a.skinIdx === S.Egg ? this._collect_eggs += 1 : a.skinIdx === S.Diamond_Box && (this._collect_diamonds += 15), a.doDie(), e = !0)
				}
			}
			e && this.isHero() && !l.onIosWx() && p.playEFM("ef_eategg")
		}
		updateDevourPlayer(t) {
			if (this.isDie() || t.isDie()) return;
			if (this.isInvi && t.isInvi) return;
			let i = this.getRoles(),
			s = t.getRoles(),
			a = [],
			n = [],
			o = new Laya.Vector3;
			for (let h = 0; h < i.length; h++) {
				let l = i[h];
				if (2 == l.joinFlag) continue;
				let r = l.radius;
				for (let i = 0; i < s.length; i++) {
					let h = s[i];
					if (2 == h.joinFlag) continue;
					let d = h.radius;
					Laya.Vector3.subtract(l.getPosition(), h.getPosition(), o);
					let _ = o.x * o.x + o.z * o.z;
					if (_ < r * r || _ < d * d) if (l.isDevourable(h) && !t.isInvi) l.score = l.score + 1.2 * h.score,
					h.joinFlag = 2,
					n.push(h),
					this.isHero() && (g.addProg(e.AchiIndex.Devour, 1), h.score >= 2e5 && g.addProg(e.AchiIndex.Devour_1kg, 1));
					else if (h.isDevourable(l) && !this.isInvi) {
						h.score = h.score + 1.2 * l.score,
						l.joinFlag = 2,
						a.push(l),
						t.isHero() && (g.addProg(e.AchiIndex.Devour, 1), l.score >= 2e5 && g.addProg(e.AchiIndex.Devour_1kg, 1));
						break
					}
				}
			}
			this.isHero() && n.length > 0 && p.playEFM("ef_ant");
			for (let t = 0; t < a.length; t++) this.delRole(a[t]);
			for (let e = 0; e < n.length; e++) t.delRole(n[e]);
			this.isDie() && !t.isDie() ? (t._collect_eggs += this._collect_eggs, this._collect_eggs = 0, L._killShow || (L._killShow = {
				pn1: t.nameStr,
				pn2: this.nameStr
			})) : !this.isDie() && t.isDie() && (this._collect_eggs += t._collect_eggs, t._collect_eggs = 0, L._killShow || (L._killShow = {
				pn1: this.nameStr,
				pn2: t.nameStr
			}))
		}
		updatePropShow() {
			let t = this.getRoleMain();
			if (t) {
				if (this._roleProps.owner.active || (this._roleProps.owner.active = !0), this._roleProps.setPosition(t.getPosition()), this._roleProps.showScale = t.showScale, this._roleProps.setShow_egg(this._collect_eggs), this._roleProps.setShow_weight(L.getWeight(this.getScore())), this.isHero()) {
					let t = L._heroBuff === e.HeroBuff.SpeedUp,
					i = L._heroBuff === e.HeroBuff.ScoreUp;
					this._roleProps.setShow_buffs([t, i])
				}
				this._roleProps.setShow_no1(L._no1_pid == this._index),
				this._roleProps.updatePropLookAt()
			} else this._roleProps.owner.active && (this._roleProps.owner.active = !1)
		}
		updateFindEgg_AI(t) {
			if (t.length <= 0 || this.isHero()) return;
			let e = this.getRoleMain();
			if (!e) return;
			let i = e.getPosition().x,
			s = e.getPosition().z,
			a = null,
			o = 0;
			for (let e = 0; e < t.length; e++) {
				let n = t[e].getPosition(),
				h = (n.x - i) * (n.x - i) + (n.z - s) * (n.z - s); (!a && h < 50 || a && h < o) && (a = t[e], o = h)
			}
			if (a) {
				let t = a.getPosition(),
				e = n.Utils.angle(t.x - i, t.z - s);
				this.setMove(.1, e),
				this._ai_changeAngleTimer = 300
			}
		}
		doBorn(t, e = 50) {
			this.reset(),
			this.doRevive(t, e),
			this._score = e,
			this._scoreMax = e,
			this.inviTime = 3e3
		}
		doRevive(t, e = 50) {
			this.delAllRoles();
			let i = this.addRole();
			i && (i.score = e, i.setPosition(t), i.setEffect_invi(!0)),
			this._score = e,
			this._scoreMax < this._score && (this._scoreMax = this._score),
			this.inviTime = 3e3
		}
		doAvatar() {
			let t = !1,
			e = this._roles.length;
			for (let i = 0; i < e; i++) {
				let e = this._roles[i];
				if (!e.isAvatarable()) continue;
				let s = this.addRole();
				if (!s) break;
				s.score = Math.floor(e.score / 2);
				let a = 1;
				e.showScale > 1 && (a = Math.pow(e.showScale, .5)),
				s.setPosition(e.getPosition()),
				s.setAvatar(300, e.forward, .5 * a),
				e.score = e.score - s.score,
				t = !0
			}
			t && this.isHero() && !l.onIosWx() && p.playEFM("ef_split")
		}
		getCameraPos(t, e) {
			let i = .5 * t * Math.PI / 180,
			s = Math.atan(Laya.stage.width * Math.tan(i) / Laya.stage.height),
			a = Math.PI * (90 + e) / 180,
			n = null;
			for (let t = 0; t < this._roles.length; t++) {
				let e = this._roles[t].getArea(),
				i = 3 * Math.sqrt(this._roles[t].showScale);
				e.addSelf( - i, -i, 2 * i, 2 * i),
				n ? n.unionSelf(e) : n = e
			}
			let o = 0,
			h = 0,
			l = .5 * n.h / (Math.tan(a) - Math.tan(a - i)),
			r = .5 * n.w / Math.tan(s) * Math.cos(a - i);
			return o = l > r ? l: r,
			h = n.cv + o * (Math.tan(a) - Math.tan(a - i)),
			new Laya.Vector3(n.ch, o, h)
		}
		getRoleArea() {
			let t = null;
			for (let e = 0; e < this._roles.length; e++) {
				let i = this._roles[e].getArea();
				t ? t.unionSelf(i) : t = i
			}
			return t
		}
		getRoleScaleMax() {
			let t = 0;
			for (let e = 0; e < this._roles.length; e++) this._roles[e].showScale > t && (t = this._roles[e].showScale);
			return t
		}
	}
	let V = C.Food1,
	D = C.Diamond,
	X = D - V;
	C._COUNT_;
	class z {
		constructor() {
			this._foods = []
		}
		static instance() {
			return z._instance || (z._instance = new z),
			z._instance
		}
		createFood(t, e) {
			let i = L.getFoodSkin("food" + (t + 1)),
			s = Laya.Sprite3D.instantiate(i),
			a = s.addComponent(R);
			return a.init(),
			a.skin = t,
			a.type = e,
			L.addFoodNode(s),
			this.addFood(a),
			a
		}
		initFoods(t) {
			this.freeFoods();
			for (let i = 0; i < t; i++) {
				let t = n.Utils.randomInt(0, X);
				i < 60 && L.isMode(e.GameMode.Diamond) && (t = C.Diamond);
				let s = this.createFood(t, x.Nor);
				s.owner.name = "food" + i,
				s.doBorn(L.getRdmPos_food( - .5))
			}
		}
		freeFoods() {
			this._foods = []
		}
		addFood(t) {
			t && (t.owner.active = !0, this._foods.push(t))
		}
		delFood(t, e = !0) {
			let i = this._foods.indexOf(t);
			i >= 0 && this._foods.splice(i, 1),
			e && t && t.owner.destroy()
		}
		delFoodAt(t, e = !0) {
			let i = null;
			return t >= 0 && t < this._foods.length && (i = this._foods[t], this._foods.splice(t, 1), i && e) ? (i.owner.destroy(), null) : null
		}
		getFoods() {
			return this._foods
		}
		update(t) {
			let e = [];
			for (let t = 0; t < this._foods.length; t++) {
				let i = this._foods[t];
				i.isCanRemove() ? e.push(i) : i.isCanRevive() && (l.onIosWx() ? i.doBorn(L.getRdmPos_food( - .5)) : i.doRevive(L.getRdmPos_food(10)))
			}
			if (e.length > 0) for (let t = 0; t < e.length; t++) this.delFood(e[t], !0)
		}
	}
	z._instance = null;
	class Y {
		constructor() {
			this._players = [],
			this._rank = [],
			this._eatSpace = 0,
			this._devourSpace = 0,
			this._rankSpace = 0
		}
		static instance() {
			return this._instance || (this._instance = new Y),
			this._instance
		}
		initPlayers(t) {
			let i = c.getSkinIdx();
			L._heroSkinTrial >= 0 && (i = L._heroSkinTrial);
			let s = [],
			a = [],
			o = l.getPlayerNameCnt();
			for (let t = 0; t < o; t++) 0 != t && s.push(t);
			let h = l.getSkinInfoCnt();
			for (let t = 0; t < h; t++) t != i && a.push(t);
			this.freePlayers();
			for (let e = 0; e < t; e++) {
				let t = new G(e);
				this._players.push(t)
			}
			for (let t = 0; t < this._players.length; t++) {
				let o = this._players[t];
				if (o.isHero()) o.skinIdx = i,
				o.nameIdx = 0;
				else {
					let t = n.Utils.randomInt(0, s.length);
					o.nameIdx = s[t],
					s.splice(t, 1),
					t = n.Utils.randomInt(0, a.length),
					o.skinIdx = a[t]
				}
				o.initRoles();
				let h = L.getRdmPos_role(),
				l = 50;
				L.isMode(e.GameMode.Survival) && (t >= 1 && t <= 4 ? l = 3e6 + n.Utils.random(0, 2e6) : o.isHero() || (l = 1e5 + n.Utils.random(0, 5e5))),
				o.doBorn(h, l)
			}
			this._eatSpace = 0,
			this._devourSpace = 0,
			this._rankSpace = 0
		}
		freePlayers() {
			let t = this._players;
			this._players = [];
			for (let e = 0; e < t.length; e++) t[e].freeRoles()
		}
		doPlayerBorn(t, e = 50) {
			let i = L.getRdmPos_role();
			t.doBorn(i, e)
		}
		doPlayerRevive(t) {
			let e = L.getRdmPos_role(),
			i = t._scoreMax;
			if (!t.isHero()) {
				let e = n.Utils.random(.5, .8);
				i = t._scoreMax * e,
				t._scoreMax = 1 * t._scoreMax
			}
			t.doRevive(e, i)
		}
		getPlayers() {
			return this._players
		}
		getPlayer(t) {
			return this._players[t]
		}
		getPlayerCnt() {
			return this._players.length
		}
		getPlayerCnt_live() {
			let t = 0;
			for (let e = 0; e < this._players.length; e++) this._players[e].isDie() || (t += 1);
			return t
		}
		get hero() {
			return this._players[0]
		}
		get heroRank_score() {
			let t = [];
			for (let e = 0; e < this._players.length; e++) {
				let i = this._players[e].getScore();
				t.push({
					i: e,
					v: i
				})
			}
			t.sort((t, e) =>e.v - t.v);
			for (let e = 0; e < t.length; e++) if (0 === t[e].i) return e;
			return t.length
		}
		get heroRank_eggs() {
			let t = [];
			for (let e = 0; e < this._players.length; e++) {
				let i = this._players[e]._collect_eggs;
				t.push({
					i: e,
					v: i
				})
			}
			t.sort((t, e) =>e.v - t.v);
			for (let e = 0; e < t.length; e++) if (0 === t[e].i) return e;
			return t.length
		}
		update(t) {
			this._eatSpace -= 1,
			this._devourSpace -= 1,
			this._rankSpace -= 1;
			let i = this._players.length,
			s = z.instance().getFoods(),
			a = T.instance().getEggs();
			for (let e = 0; e < i; e++) this._players[e].update(t);
			if (this._eatSpace <= 0) {
				this._eatSpace = 2;
				for (let t = 0; t < i; t++) this._players[t].updateEatFoods(s),
				this._players[t].updateCollectEggs(a)
			}
			if (this._devourSpace <= 0) {
				this._devourSpace = 2;
				for (let t = 0; t < i; t++) for (let e = t; e < i; e++) this._players[t].updateDevourPlayer(this._players[e])
			}
			for (let s = 0; s < i; s++) {
				let i = this._players[s];
				if (i.isDie()) {
					if (i.isHero()) {
						L.setRunState(e.RunState.Revive);
						continue
					}
					if (L.isMode(e.GameMode.Survival)) continue;
					this.doPlayerRevive(i)
				}
				if (!i.isHero()) {
					if (i._ai_avatarTimer -= t, i._ai_changeAngleTimer -= t, i._ai_scoreTimer -= t, i._ai_avatarTimer < 0) {
						i.doAvatar();
						let t = i.getRoles().length;
						i._ai_avatarTimer = 1e3 * n.Utils.random(2 + .5 * t, 5 + 1 * t)
					}
					if (i._ai_changeAngleTimer < 0) {
						i._ai_changeAngleTimer = 1e3 * n.Utils.random(1.5, 3);
						let t = i.getRoleArea(),
						e = t.ch * t.ch + t.cv * t.cv,
						s = 0,
						a = .4 * L._area.w;
						e < a * a ? s = n.Utils.random(0, 360) : (s = n.Utils.angle(t.ch, t.cv) + 180, s += n.Utils.random( - 45, 45), s = (s %= 360) > 0 ? s: s + 360),
						i.setMove(.1, s)
					}
					if (i._ai_scoreTimer < 0 && i.getRoleCnt() > 0) {
						let t = n.Utils.randomInt(200, 450);
						i.addScore(t),
						i._ai_scoreTimer = 100 * n.Utils.random(5, 10)
					} (L.isMode(e.GameMode.Egg) || L.isMode(e.GameMode.Diamond)) && i.updateFindEgg_AI(a)
				}
			}
			for (let t = 0; t < i; t++) this._players[t].updatePropShow();
			this._rankSpace <= 0 && (this._rankSpace = 3, this.updateRank(), this._rank.length > 0 ? L._no1_pid = this._rank[0].id: L._no1_pid = -1)
		}
		updateRank() {
			let t = L.isMode(e.GameMode.Egg),
			i = this._players,
			s = [];
			for (let e = 0; e < i.length; e++) {
				if (i[e].isDie()) continue;
				let a = 0;
				a = t ? i[e]._collect_eggs: i[e].getScore(),
				s.push({
					id: e,
					v: a
				})
			}
			s.sort((t, e) =>e.v - t.v),
			this._rank = s
		}
		getRankList() {
			return this._rank
		}
	}
	Y._instance = null;
	class W extends t.Scenes.views.ViewNavigateNodeUI {
		constructor(t) {
			super(),
			this._index = 0,
			this._index = t
		}
		onEnable() {
			this.setIndex(this._index),
			this.btnClick.on(Laya.Event.CLICK, this, () =>{
				let t = L.getGameListData(this._index);
				console.log("navigate to game = ", t.game_name),
				m.navigateToMini(t.appid, "", e =>{
					0 == e ? console.log("navigateToMini succ", t.game_name) : console.log("navigateToMini fail", t.game_name)
				})
			})
		}
		onDisable() {
			this.btnClick.offAll()
		}
		setIndex(t) {
			this._index = t;
			let e = L.getGameListData(this._index);
			this.gameIcon.loadImage(e.game_icon),
			this.gameName.text = e.game_name
		}
	}
	class H extends t.Scenes.views.ViewNavigate2UI {
		constructor() {
			super(),
			this._gameBoxes = null,
			this._navigates = null,
			this._gameIndex = 0,
			this._showState = 0,
			this._showTimer = 0
		}
		static show(t = 0) {
			let e = new H;
			return e.zOrder = t,
			Laya.stage.addChild(e),
			e
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this._gameBoxes = [],
			this._navigates = [],
			this.boxGames.visible = !1,
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {}
		update() {
			if (this.boxGames.visible) {
				this._showTimer += this.timer.delta;
				let t = this._showTimer,
				e = 0,
				i = 1;
				if (0 == this._showState) t < 1e3 && (e = 5 * Math.sin(6 * Math.PI * t / 1e3)),
				t >= 3e3 && (this._showState = 1, this._showTimer = 0);
				else if (1 == this._showState) i = 0,
				t < 200 ? i = (200 - t) / 200 : (this._showState = 2, this._showTimer = 0);
				else if (2 == this._showState) {
					i = 0;
					let t = L.getGameListCnt(),
					e = this._gameIndex + this._navigates.length;
					e %= t;
					for (let i = 0; i < this._navigates.length; i++) {
						let s = (e + i) % t;
						this._navigates[i].setIndex(s)
					}
					this._gameIndex = e,
					this._showState = 3,
					this._showTimer = 0
				} else 3 == this._showState && (t < 200 ? i = t / 200 : (this._showState = 0, this._showTimer = 0));
				for (let t = 0; t < this._gameBoxes.length; t++) this._gameBoxes[t].rotation = e,
				this._gameBoxes[t].scale(i, i)
			} else L.isShowGameList() && (this.refreshShow(), this._showState = 0, this._showTimer = 0, this.boxGames.visible = !0)
		}
		refreshShow() {
			let t = L.getGameListCnt(),
			e = null;
			for (let i = 0; i < this.boxGames.numChildren; i++) {
				let s = "game" + (i + 1);
				e = this.boxGames.getChildByName(s),
				this._gameBoxes.push(e);
				let a = new W((0 + i) % t);
				this._navigates.push(a),
				e.addChild(a),
				a.x = -20,
				a.y = -30
			}
			this._gameIndex = 0
		}
	}
	var j, K, q, J; !
	function(t) {
		t[t.Close = 0] = "Close",
		t[t.AdClose = 1] = "AdClose",
		t[t.AdClick = 2] = "AdClick"
	} (j || (j = {})),
	function(t) {
		t[t.Gold = 0] = "Gold",
		t[t.Diamond = 1] = "Diamond",
		t[t.Invi = 2] = "Invi",
		t[t.Speed = 3] = "Speed",
		t[t.Grow = 4] = "Grow",
		t[t.COUNT = 5] = "COUNT"
	} (K || (K = {}));
	class Z extends t.Scenes.views.ViewGetShowUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._index = K.Gold,
			this._value = 0,
			this._aniFlag = 0,
			this._navigate2 = null
		}
		static show(t, e, i, s) {
			let a = new Z;
			a._closeCB = t,
			a._index = i,
			a._value = s,
			a.zOrder = e,
			Laya.stage.addChild(a)
		}

		onAwake(){
			this.btn_close_txt.text = Language.getName("继续"); 
			this.title_txt.text = Language.getName("获得奖励"); 
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this._navigate2 = null;
			let t = null;
			for (let e = 0; e < K.COUNT; e++)(t = this.box_icon1.getChildByName("icon" + e)).visible = e == this._index,
			(t = this.box_icon2.getChildByName("icon" + e)).visible = e == this._index;
			this.lab_val.text = "" + this._value,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		doShowNativeAd(t) {
			m.playAds_native(e =>{
				e ? (this.lab_adTitle.text = e.title, this.img_adShow.loadImage(e.url), this.lab_adDesc.text = e.desc, t && t(0)) : t && t(1)
			})
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy()
		}
		allButtonOn() {
			this.addButtonAction(this.btn_close),
			this.addButtonClick(this.btn_close, j.Close),
			this.addButtonAction(this.btn_adClose),
			this.addButtonClick(this.btn_adClose, j.AdClose),
			this.addButtonAction(this.btn_adClick),
			this.addButtonClick(this.btn_adClick, j.AdClick),
			this.img_adBg.on(Laya.Event.CLICK, this, this.onButtonClick, [j.AdClick]),
			this._navigate2 = H.show(this.zOrder + 1)
		}
		allButtonOff() {
			this.btn_close.offAll(),
			this.btn_adClose.offAll(),
			this.btn_adClick.offAll(),
			this._navigate2 && this._navigate2.destroy()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + j[t]),
			t === j.Close ? (this._closeCB_index = 0, this.setAniClose()) : t === j.AdClose ? (this.box_nativeAd.visible = !1, m.onClose_native()) : t === j.AdClick && (this.box_nativeAd.visible = !1, m.onClick_native(), m.onClose_native())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_get"),
			this.box_nativeAd.visible = !1,
			this.doShowNativeAd(t =>{
				0 == t && (this.box_nativeAd.visible = !0)
			})
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			this.box_nativeAd.visible && (this.box_nativeAd.visible = !1, m.onClose_native())
		}
	} !
	function(t) {
		t[t.Ad = 0] = "Ad",
		t[t.Gold = 1] = "Gold",
		t[t.Diamond = 2] = "Diamond",
		t[t.Close = 3] = "Close"
	} (q || (q = {})),
	function(t) {
		t[t.Gold = 0] = "Gold",
		t[t.Diamond = 1] = "Diamond",
		t[t.Invi = 2] = "Invi",
		t[t.Speed = 3] = "Speed",
		t[t.Grow = 4] = "Grow",
		t[t.COUNT = 5] = "COUNT"
	} (J || (J = {}));
	class $ extends t.Scenes.views.ViewGiftUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._giftIndex = J.Gold,
			this._giftValue = 0,
			this._aniFlag = 0
		}
		static show(t, e = J.Gold, i = 0) {
			let s = new $;
			s._closeCB = t,
			s._giftIndex = e,
			s.zOrder = i,
			Laya.stage.addChild(s)
		}

		onAwake(){
			this.gold_txt.text = Language.getName("金币礼包");
			this.diamond_txt.text = Language.getName("钻石礼包");
			this.btn_ad_txt.text = Language.getName("领取");
			this.chengzhang.text = Language.getName("成长药水");
			this.feixie.text = Language.getName("加速飞鞋");
			this.hudun.text = Language.getName("护盾补给");
		}

		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this.btn_gold.visible = !1,
			this.btn_diamond.visible = !1;
			let t = 0;
			if (this._giftIndex === J.Gold) t = 2e3;
			else if (this._giftIndex === J.Diamond) t = 800;
			else if (this._giftIndex === J.Invi || this._giftIndex === J.Speed || this._giftIndex === J.Grow) {
				t = 3;
				let i = c.getMoney(e.Money.Gold),
				s = c.getMoney(e.Money.Diamond);
				this.btn_gold.visible = i >= $.Btn_Price_Gold,
				this.btn_diamond.visible = s >= $.Btn_Price_Diamond
			}
			this._giftValue = t,
			this.lab_value.text = "" + t;
			let i = null;
			for (let t = 0; t < J.COUNT; t++) {
				let e = "icon" + t; (i = this.box_icon1.getChildByName(e)).visible = this._giftIndex === t,
				(i = this.lab_value.getChildByName(e)).visible = this._giftIndex === t
			}
			Laya.Browser.onTTMiniGame && n.Utils.random(0, 1) < .5 && L.swapPos_UIButton(this.btn_ad, this.btn_close),
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy()
		}
		doGetRwd() {
			this._giftIndex === J.Gold ? (c.addMoney(e.Money.Gold, this._giftValue), Z.show(this._closeCB, this.zOrder + 1, K.Gold, this._giftValue), this._closeCB = null) : this._giftIndex === J.Diamond ? (c.addMoney(e.Money.Diamond, this._giftValue), Z.show(this._closeCB, this.zOrder + 1, K.Diamond, this._giftValue), this._closeCB = null) : this._giftIndex === J.Invi ? (c.addItem(e.Item.Invi, this._giftValue), Z.show(this._closeCB, this.zOrder + 1, K.Invi, this._giftValue), this._closeCB = null) : this._giftIndex === J.Speed ? (c.addItem(e.Item.Speed, this._giftValue), Z.show(this._closeCB, this.zOrder + 1, K.Speed, this._giftValue), this._closeCB = null) : this._giftIndex === J.Grow && (c.addItem(e.Item.Grow, this._giftValue), Z.show(this._closeCB, this.zOrder + 1, K.Grow, this._giftValue), this._closeCB = null)
		}
		allButtonOn() {
			this.addButtonAction(this.btn_ad),
			this.addButtonClick(this.btn_ad, q.Ad),
			this.addButtonAction(this.btn_gold),
			this.addButtonClick(this.btn_gold, q.Gold),
			this.addButtonAction(this.btn_diamond),
			this.addButtonClick(this.btn_diamond, q.Diamond),
			this.addButtonAction(this.btn_close),
			this.addButtonClick(this.btn_close, q.Close)
		}
		allButtonOff() {
			this.btn_ad.offAll(),
			this.btn_close.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + q[t]),
			t === q.Ad ? m.playAds_reward(0, t =>{
				0 == t ? (this.doGetRwd(), this._closeCB_index = 0, this.setAniClose()) : P.show(null, this.zOrder + 1, f.Ad)
			}) : t === q.Gold ? c.addMoney(e.Money.Gold, -$.Btn_Price_Gold) && (this.doGetRwd(), this._closeCB_index = 0, this.setAniClose()) : t === q.Diamond ? c.addMoney(e.Money.Diamond, -$.Btn_Price_Diamond) && (this.doGetRwd(), this._closeCB_index = 0, this.setAniClose()) : t === q.Close && (this._closeCB_index = 0, this.setAniClose())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu"),
			m.playAds_banner(!0)
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			m.playAds_banner(!1)
		}
	}
	$.Btn_Price_Gold = 2e3,
	$.Btn_Price_Diamond = 800;
	class Q extends t.Scenes.views.ViewPhbUI {
		constructor() {
			super()
		}
		onEnable() {
			let t = L.isMode(e.GameMode.Egg);
			this.egg_num.visible = t,
			this.score.visible = !t,
			this.egg_num.text = "x0",
			this.score.text = "0"
		}
		onDisable() {}
		setInfo(t) {
			t ? (this.playerName.visible = !0, t.isHero() ? this.playerName.text = c.getPName() : this.playerName.text = l.getPlayerName(t.nameIdx), this.egg_num.visible ? this.egg_num.text = "x" + t._collect_eggs: this.score.visible && (this.score.text = "" + L.getWeight(t.getScore()))) : this.playerName.visible = !1
		}
	}
	var tt, et, it, st, at, nt, ot, ht = e.GameMode; !
	function(t) {
		t[t.Avatar = 0] = "Avatar",
		t[t.Pause = 1] = "Pause",
		t[t.Invi = 2] = "Invi",
		t[t.Speed = 3] = "Speed",
		t[t.Grow = 4] = "Grow"
	} (tt || (tt = {}));
	class lt extends t.Scenes.views.ViewGameUI {
		constructor() {
			super(),
			this._move_bp = null,
			this._move_tid = -1,
			this._move_start = null,
			this._move_sp = null,
			this._move_dp = null,
			this._rankShowList = [],
			this._mapFlag = 0,
			this._mh_hero = null,
			this._mh_no1 = null,
			this._mh_npcs = [],
			this._mh_eggs = [],
			
			this.iskeyDown = false;
			this.keyUpTimes = 3;
			this.keyCodeD = false;
			this.keyCodeA = false;
			this.keyCodeW = false;
			this.keyCodeS = false; 

			this.ACnt = 0;
			this.WCnt = 0;
			this.SCnt = 0;
			this.DCnt = 0;

		}
		onAwake() {
			this.timeDownVal_txt.text = Language.getName("剩余时间");
			this.playerVal_txt.text = Language.getName("剩余玩家");

			this.width = Laya.stage.width * this.height / Laya.stage.height,
			this._move_bp = new Laya.Vector2(this.moveNode.x, this.moveNode.y);
			let t = [this.rank1, this.rank2, this.rank3, this.rank4, this.rank5, this.rank6];
			for (let e = 0; e < t.length; e++) {
				let i = t[e].addChild(new Q);
				this._rankShowList.push(i),
				i.zOrder = 1,
				i.setInfo(null)
			}
			this.timer.frameLoop(1, this, this.update);
			
			Laya.stage.on(Laya.Event.KEY_DOWN,this,(e)=>{
				// console.log(e)
				this.iskeyDown = true;
				this.keyUpTimes = 3;
				switch (e.keyCode) {
					case 68://d
							this.keyCodeD = true;
							L._heroMoveSpeed = .1;
							L._heroMoveAngle = 0;				
							Laya.timer.clear(this,this.onCountdown);
						break;
					case 65://a
					        this.keyCodeA = true;
							L._heroMoveSpeed = .1;
							L._heroMoveAngle = 180;
							Laya.timer.clear(this,this.onCountdown);
						break;
					case 87://w
					        this.keyCodeW = true;
							L._heroMoveSpeed = .1;
							L._heroMoveAngle = 270;
							Laya.timer.clear(this,this.onCountdown);
						break;
					case 83://s
							this.keyCodeS = true;
							L._heroMoveSpeed = .1;
							L._heroMoveAngle = 90;
							Laya.timer.clear(this,this.onCountdown);
						break;		
					case 74://J
							this.onButtonClick(tt.Avatar)
						break;
					case 85://U
							this.onButtonClick(tt.Grow)
						break;
					case 73://I
							this.onButtonClick(tt.Speed)
						break;
					case 79://O
							this.onButtonClick(tt.Invi)
						break;
					default:
						break;
				}
				
			})

			Laya.stage.on(Laya.Event.KEY_PRESS,this,(e)=>{
				if(this.keyCodeW && this.keyCodeA){
					L._heroMoveAngle = 225;
				}
				if(this.keyCodeW && this.keyCodeD){
					L._heroMoveAngle = 315;
				}
				if(this.keyCodeS && this.keyCodeA){
					L._heroMoveAngle = 135;
				}
				if(this.keyCodeS && this.keyCodeD){
					L._heroMoveAngle = 45;
				}
			})

			Laya.stage.on(Laya.Event.KEY_UP,this,(e)=>{
				// console.log(e.keyCode)
				switch (e.keyCode) {
					case 68://d
							this.keyCodeD = false;
					case 65://a
					        this.keyCodeA = false;
						break;
					case 87://w
					        this.keyCodeW = false;
						break;
					case 83://s
							this.keyCodeS = false;
						break;		
					default:
						break;
				}
			
				Laya.timer.loop(1000,this,this.onCountdown);

				if(this.keyCodeW && !this.keyCodeA){
					L._heroMoveAngle = 270;
				}

				if(!this.keyCodeW && this.keyCodeA){
					L._heroMoveAngle = 270;
				}

				if(this.keyCodeW && !this.keyCodeD){
					L._heroMoveAngle = 270;
				}

				if(!this.keyCodeW && this.keyCodeD){
					L._heroMoveAngle = 270;
				}

				if(this.keyCodeS && !this.keyCodeA){
					L._heroMoveAngle = 90;
				}

				if(!this.keyCodeS && this.keyCodeA){
					L._heroMoveAngle = 180;
				}

				if(this.keyCodeS && !this.keyCodeD){
					L._heroMoveAngle = 90;
				}

				if(!this.keyCodeS && this.keyCodeD){
					L._heroMoveAngle = 0;
				}
			})
		}

		onCountdown(){
			// console.log(this.keyUpTimes)
			this.keyUpTimes --;
			if(this.keyUpTimes == 0){
				this.iskeyDown = false;
				Laya.timer.clear(this,this.onCountdown);
			}
		}

		onEnable() {
			this.setTid_move( - 1);
			let t = L.getMode();
			this.timeDownNode.visible = L.isModeTimeLimit(),
			this.icon1.visible = t === ht.Diamond,
			this.icon2.visible = t === ht.Egg,
			this.icon3.visible = t === ht.Survival || t === ht.Classic,
			this.playerNode.visible = t === ht.Survival,
			this.playerVal.text = ""
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (this.timeDownNode.visible) {
				let t = L.getShowTime();
				if (t > 0) {
					let e = Math.floor(t / 60),
					i = Math.floor(t % 60);
					this.timeDownVal.text = (e > 9 ? "": "0") + e + ":" + (i > 9 ? "": "0") + i
				} else this.timeDownVal.text = "00:00"
			}
			let t = "",
			e = Y.instance().hero;
			if (this.icon1.visible ? e && (t = "" + e._collect_diamonds) : this.icon2.visible ? e && (t = "" + e._collect_eggs) : this.icon3.visible && e && (t = L.getWeight(e.getScore())), this.showValue.text = t, this.updateItems(), this.playerNode.visible && (this.playerVal.text = "" + Y.instance().getPlayerCnt_live()), this.updateRank(), this._move_tid >= 0) {
				Laya.Vector2.scalarLength(this._move_dp) > 10 ? (L._heroMoveSpeed = .1, L._heroMoveAngle = n.Utils.angle(this._move_dp.x, this._move_dp.y)) : L._heroMoveSpeed = .04
			} else { if(!this.iskeyDown)L._heroMoveSpeed = .04;}
			0 == this._mapFlag && (this._mapFlag = 1, this.initMap()),
			1 == this._mapFlag && this.updateMap();
		}
		updateItems() {
			let t = Y.instance().hero;
			if (t) {
				this.lab_invi.text = "" + c.getItem(e.Item.Invi);
				let i = c.getItemTimeMax(e.Item.Invi),
				s = t.inviTime;
				if (this.progBg_invi.visible = s > 0, s > 0) {
					let t = s / i;
					t = t < 1 ? t: 1,
					this.progBar_invi.height = 110 * t
				}
				if (this.lab_speed.text = "" + c.getItem(e.Item.Speed), i = c.getItemTimeMax(e.Item.Speed), s = t.speedTime, this.progBg_speed.visible = s > 0, s > 0) {
					let t = s / i;
					t = t < 1 ? t: 1,
					this.progBar_speed.height = 110 * t
				}
				if (this.lab_grow.text = "" + c.getItem(e.Item.Grow), i = c.getItemTimeMax(e.Item.Grow), s = t.growTime, this.progBg_grow.visible = s > 0, s > 0) {
					let t = s / i;
					t = t < 1 ? t: 1,
					this.progBar_grow.height = 110 * t
				}
			}
		}
		updateRank() {
			let t = Y.instance().getRankList(),
			e = Y.instance().getPlayers(),
			i = L.isMode(ht.Egg);
			for (let i = 0; i < this._rankShowList.length; i++) {
				let s = null;
				i < t.length && (s = e[t[i].id]),
				this._rankShowList[i].setInfo(s)
			}
			let s = -1;
			for (let e = 0; e < t.length; e++) 0 == t[e].id && (s = e);
			if (s >= 0) {
				let t = Y.instance().hero;
				this.heroRank.text = "" + (s + 1),
				this.heroName.text = c.getPName(),
				this.heroEgg.visible = i,
				this.heroScore.visible = !i,
				i ? this.heroEgg.text = "x" + t._collect_eggs: this.heroScore.text = "" + L.getWeight(t.getScore())
			}
		}
		setStart() {
			this.allButtonOn()
		}
		setTid_move(t = -1, e = null) {
			this._move_tid = t,
			this._move_start = e;
			let i = t >= 0 ? 1 : .5;
			this.movePanel.alpha = i,
			this.movePos.alpha = i
		}
		setPos_move(t, e = null) {
			if (this._move_tid < 0) this.moveNode.x = this._move_bp.x,
			this.moveNode.y = this._move_bp.y,
			this.movePanel.rotation = 0,
			this.movePos.x = this.moveNode.width / 2,
			this.movePos.y = this.moveNode.height / 2;
			else {
				e && (this._move_sp = e.clone(), this.moveNode.x = e.x, this.moveNode.y = e.y),
				this._move_dp = new Laya.Vector2(t.x - this._move_sp.x, t.y - this._move_sp.y);
				let i = Laya.Vector2.scalarLength(this._move_dp),
				s = (this.movePanel.width + this.movePos.width) / 2;
				i > 0 && i > s && Laya.Vector2.scale(this._move_dp, s / i, this._move_dp),
				this.movePanel.rotation = n.Utils.angle(this._move_dp.x, this._move_dp.y) + 90,
				this.movePos.x = this._move_dp.x + this.moveNode.width / 2,
				this.movePos.y = this._move_dp.y + this.moveNode.height / 2
			}
		}
		createMapHead(t, e) {
			let i = new Laya.Image;
			return i.skin = t,
			i.anchorX = i.anchorY = .5,
			i.scale(e, e),
			i
		}
		initMap() {
			let t = {
				skin: "ui/map04.png",
				scale: .6
			},
			e = {
				skin: "ui/map03.png",
				scale: .6
			},
			i = {
				skin: "ui/game_01.png",
				scale: .4
			},
			s = {
				skin: "ui/map02.png",
				scale: .2
			},
			a = {
				skin: "ui/map05.png",
				scale: .4
			};
			if (L.isMode(ht.Egg)) for (let t = 0; t < 5; t++) {
				let t = this.createMapHead(i.skin, i.scale);
				t.visible = !1,
				this.mapBg.addChild(t),
				this._mh_eggs.push(t)
			}
			if (L.isMode(ht.Diamond)) for (let t = 0; t < 5; t++) {
				let t = this.createMapHead(a.skin, a.scale);
				t.visible = !1,
				this.mapBg.addChild(t),
				this._mh_eggs.push(t)
			}
			let n = Y.instance().getPlayerCnt() - 1;
			for (let t = 0; t < n; t++) {
				let t = this.createMapHead(e.skin, e.scale);
				t.visible = !1,
				this.mapBg.addChild(t),
				this._mh_npcs.push(t)
			}
			this._mh_hero = this.createMapHead(t.skin, t.scale),
			this._mh_hero.visible = !1,
			this.mapBg.addChild(this._mh_hero),
			this._mh_no1 = this.createMapHead(s.skin, s.scale),
			this._mh_no1.visible = !1,
			this.mapBg.addChild(this._mh_no1)
		}
		clearMap() {
			this.mapBg.destroyChildren(),
			this._mapFlag = 0,
			this._mh_hero = null,
			this._mh_no1 = null,
			this._mh_npcs = [],
			this._mh_eggs = []
		}
		updateMap() {
			let t = (this.mapBg.width - 6) / L._area.w,
			e = (this.mapBg.height - 6) / L._area.h,
			i = this.mapBg.width / 2,
			s = this.mapBg.height / 2;
			if (this._mh_eggs.length > 0) {
				let a = T.instance().getEggs();
				for (let n = 0; n < this._mh_eggs.length; n++) {
					if (this._mh_eggs[n].visible = n < a.length, !this._mh_eggs[n].visible) continue;
					let o = a[n].getPosition();
					this._mh_eggs[n].x = o.x * t + i,
					this._mh_eggs[n].y = o.z * e + s
				}
			}
			let a = Y.instance().getRankList(),
			n = Y.instance().getPlayers(),
			o = 0,
			h = !1,
			l = !1;
			for (let r = 0; r < a.length; r++) {
				let d = n[a[r].id];
				if (!d || d.isDie()) continue;
				let _ = d.getRoleMain().getPosition();
				0 == r ? (l = !0, this._mh_no1.x = _.x * t + i, this._mh_no1.y = _.z * e + s) : d.isHero() ? (h = !0, this._mh_hero.x = _.x * t + i, this._mh_hero.y = _.z * e + s, this._mh_hero.rotation = d._moveAngle) : (this._mh_npcs[o].x = _.x * t + i, this._mh_npcs[o].y = _.z * e + s, o += 1)
			}
			this._mh_no1.visible = l,
			this._mh_hero.visible = h;
			for (let t = 0; t < this._mh_npcs.length; t++) this._mh_npcs[t].visible = o > t
		}
		allButtonOn() {
			this.addButtonAction(this.btnAvatar),
			this.addButtonClick(this.btnAvatar, tt.Avatar),
			this.addButtonAction(this.btnPause),
			this.addButtonClick(this.btnPause, tt.Pause),
			this.addButtonAction(this.btnInvi),
			this.addButtonClick(this.btnInvi, tt.Invi),
			this.addButtonAction(this.btnSpeed),
			this.addButtonClick(this.btnSpeed, tt.Speed),
			this.addButtonAction(this.btnGrow),
			this.addButtonClick(this.btnGrow, tt.Grow),
			this.progBg_invi.on(Laya.Event.CLICK, this, null),
			this.progBg_speed.on(Laya.Event.CLICK, this, null),
			this.progBg_grow.on(Laya.Event.CLICK, this, null)
		}
		allButtonOff() {
			this.btnAvatar.offAll(),
			this.btnPause.offAll(),
			this.btnInvi.offAll(),
			this.progBg_invi.offAll(),
			this.progBg_speed.offAll(),
			this.progBg_grow.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			l.onIosWx() || p.playEFM("ef_button"),
			console.log("btn clicked " + tt[t]);
			let i = Y.instance().hero;
			if (t === tt.Avatar) L._heroAvatar = !0;
			else if (t == tt.Pause) L.setRunState(e.RunState.Pause);
			else if (t == tt.Invi) do {
				if (!i || i.isDie() || i.isInvi) break;
				if (c.addItem(e.Item.Invi, -1)) {
					i.inviTime = c.getItemTimeMax(e.Item.Invi);
					break
				}
				L.setRunState(e.RunState.Wait), $.show((t, i) =>{
					1 == t && L.setRunState(e.RunState.None)
				},
				J.Invi, this.zOrder + 1)
			} while ( 0 );
			else if (t == tt.Speed) do {
				if (!i || i.isDie() || i.isSpeed) break;
				if (c.addItem(e.Item.Speed, -1)) {
					i.speedTime = c.getItemTimeMax(e.Item.Speed);
					break
				}
				L.setRunState(e.RunState.Wait), $.show((t, i) =>{
					1 == t && L.setRunState(e.RunState.None)
				},
				J.Speed, this.zOrder + 1)
			} while ( 0 );
			else if (t == tt.Grow) do {
				if (!i || i.isDie() || i.isGrow) break;
				if (c.addItem(e.Item.Grow, -1)) {
					i.growTime = c.getItemTimeMax(e.Item.Grow);
					break
				}
				L.setRunState(e.RunState.Wait), $.show((t, i) =>{
					1 == t && L.setRunState(e.RunState.None)
				},
				J.Grow, this.zOrder + 1)
			} while ( 0 )
		}
	} !
	function(t) {
		t[t.Close = 0] = "Close"
	} (et || (et = {}));
	class rt extends t.Scenes.views.ViewNavigateUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0,
			this.RowCnt = 3,
			this.ItemScale = 1,
			this._icons = [],
			this._scrllingFlag = 0,
			this._scrollingX = 0,
			this._touch_id = -1,
			this._touch_sx = 0,
			this._touchX = 0
		}
		static show(t, e = 0) {
			let i = new rt;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this._icons = [],
			this.gameList.visible = !1,
			this._touch_id = -1,
			this._touch_sx = 0,
			this._touchX = 0,
			this.gameList.on(Laya.Event.MOUSE_DOWN, this, this.onTouchBegan),
			this.gameList.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMoved),
			this.gameList.on(Laya.Event.MOUSE_UP, this, this.onTouchEnded),
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy();
			this.gameList.visible ? this._touch_id < 0 && ( - 1 == this._scrllingFlag ? this.setScrollingX(this._scrollingX - 1) : 1 == this._scrllingFlag && this.setScrollingX(this._scrollingX + 1)) : L.isShowGameList() && (this.gameList.visible = !0, this.refreshShow())
		}
		refreshShow() {
			let t = L.getGameListCnt(),
			e = this.RowCnt,
			i = Math.ceil(t / this.RowCnt);
			this._icons = [],
			this.gameList.removeChildren();
			for (let s = 0; s < e; s++) {
				let e = [],
				a = s * i;
				for (let s = 0; s < i; s++) {
					let i = Math.floor((a + s) % t),
					n = new W(i);
					this.gameList.addChild(n),
					e.push(n)
				}
				this._icons.push(e)
			}
			this._scrllingFlag = 0,
			this._scrollingX = 0,
			this.setScrollingX(0)
		}
		setScrollingX(t) {
			let e = this._icons[0][0],
			i = e.width * this.ItemScale + 20,
			s = e.height * this.ItemScale + 10,
			a = this._icons[0].length * i,
			n = this.gameList.width;
			if (a < n) this._scrollingX = 0,
			this._scrllingFlag = -1;
			else {
				this._scrollingX = t;
				let e = 50 + (a - n) / 2;
				this._scrollingX > e && (this._scrollingX = e, this._scrllingFlag = -1),
				this._scrollingX < -e && (this._scrollingX = -e, this._scrllingFlag = 1),
				0 == this._scrllingFlag && (this._scrllingFlag = -1)
			}
			let o = this.gameList.width / 2,
			h = this.gameList.height / 2;
			for (let t = 0; t < this._icons.length; t++) {
				let a = o - (this._icons[t].length - 1) * i / 2,
				n = h - s * (this._icons.length - 1) / 2;
				a += this._scrollingX;
				for (let o = 0; o < this._icons[t].length; o++) this._icons[t][o].x = a + o * i - e.width / 2,
				this._icons[t][o].y = n + t * s - e.height / 2
			}
		}
		onTouchBegan(t) {
			0 != this._scrllingFlag && (this._touch_id = t.touchId, this._touch_sx = t.stageX, this._touchX = this._scrollingX)
		}
		onTouchMoved(t) {
			if (this._touch_id == t.touchId) {
				let e = t.stageX - this._touch_sx;
				this.setScrollingX(this._touchX + e)
			}
		}
		onTouchEnded(t) {
			this._touch_id == t.touchId && (this._touch_id = -1)
		}
		allButtonOn() {
			this.addButtonAction(this.btn_close),
			this.addButtonClick(this.btn_close, et.Close)
		}
		allButtonOff() {
			this.btn_close.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + et[t]),
			t === et.Close && (this._closeCB_index = 0, this.setAniClose())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu")
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff()
		}
	} !
	function(t) {
		t[t.Menu = 0] = "Menu",
		t[t.Close = 1] = "Close",
		t[t.AdClose = 2] = "AdClose",
		t[t.AdClick = 3] = "AdClick"
	} (it || (it = {}));
	class dt extends t.Scenes.views.ViewPauseUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0,
			this._navigate2 = null
		}
		static show(t, e = 0) {
			let i = new dt;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this._navigate2 = null,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		doShowNativeAd(t) {
			m.playAds_native(e =>{
				e ? (this.lab_adTitle.text = e.title, this.img_adShow.loadImage(e.url), this.lab_adDesc.text = e.desc, t && t(0)) : t && t(1)
			})
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy()
		}
		allButtonOn() {
			this.addButtonAction(this.btn_menu),
			this.addButtonClick(this.btn_menu, it.Menu),
			this.addButtonAction(this.btn_close),
			this.addButtonClick(this.btn_close, it.Close),
			this.addButtonAction(this.btn_adClose),
			this.addButtonClick(this.btn_adClose, it.AdClose),
			this.addButtonAction(this.btn_adClick),
			this.addButtonClick(this.btn_adClick, it.AdClick),
			this.img_adBg.on(Laya.Event.CLICK, this, this.onButtonClick, [it.AdClick]),
			this._navigate2 = H.show(this.zOrder + 1)
		}
		allButtonOff() {
			this.btn_menu.offAll(),
			this.btn_close.offAll(),
			this.btn_adClose.offAll(),
			this.btn_adClick.offAll(),
			this._navigate2 && this._navigate2.destroy()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + it[t]),
			t === it.Menu ? (this._closeCB_index = 1, this.setAniClose()) : t == it.Close ? (this._closeCB_index = 0, this.setAniClose()) : t === it.AdClose ? (this.box_nativeAd.visible = !1, m.onClose_native()) : t === it.AdClick && (this.box_nativeAd.visible = !1, m.onClick_native(), m.onClose_native())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu"),
			this.box_nativeAd.visible = !1,
			this.doShowNativeAd(t =>{
				0 == t && (this.box_nativeAd.visible = !0)
			}),
			m.playAds_screen()
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			this.box_nativeAd.visible && (this.box_nativeAd.visible = !1, m.onClose_native())
		}
	} !
	function(t) {
		t[t.Ad = 0] = "Ad",
		t[t.Close = 1] = "Close"
	} (st || (st = {}));
	class _t extends t.Scenes.views.ViewReliveUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0,
			this._showAd = !1,
			this._navigate2 = null
		}
		static show(t, e = 0) {
			let i = new _t;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}

		onAwake(){
			this.fall_txt.text = Language.getName("复活");
			this.btn_ad_txt.text = Language.getName("继续");
			this.btn_close_txt.text = Language.getName("继续");
			this.checkBox_txt.text = Language.getName("看视频复活");
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this._navigate2 = null,
			this.checkBox.visible ? (this.checkBox.selected = L.isOpenSwitch(), this.setShowAd(this.checkBox.selected)) : Laya.Browser.onTTMiniGame && n.Utils.random(0, 1) < .5 && L.swapPos_UIButton(this.btn_ad, this.btn_close),
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy();
			this.checkBox.visible && this.checkBox.selected != this._showAd && this.setShowAd(this.checkBox.selected)
		}
		setShowAd(t) {
			this._showAd = t,
			this.btn_ad.visible = this._showAd,
			this.btn_ad.parent.x = this._showAd === true?50:1000,
			this.btn_close.visible = !this._showAd,
			this.btn_close.parent.x = this._showAd === false?50:1000
		}
		allButtonOn() {
			this.addButtonAction(this.btn_ad),
			this.addButtonClick(this.btn_ad, st.Ad),
			this.addButtonAction(this.btn_close),
			this.addButtonClick(this.btn_close, st.Close),
			this._navigate2 = H.show(this.zOrder + 1)
		}
		allButtonOff() {
			this.btn_ad.offAll(),
			this.btn_close.offAll(),
			this._navigate2 && this._navigate2.destroy()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + st[t]),
			t === st.Ad ? m.playAds_reward(0, t =>{
				0 == t ? (this._closeCB_index = 1, this.setAniClose()) : P.show(null, this.zOrder + 1, f.Ad)
			}) : t == st.Close && (this._closeCB_index = 0, this.setAniClose())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_relive"),
			m.playAds_banner(!0)
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			m.playAds_banner(!1)
		}
	}
	class ct extends t.Scenes.views.ViewTip1UI {
		constructor() {
			super(),
			this._closeCB = null,
			this._aniFlag = 0
		}
		static show(t, e = 0) {
			let i = new ct;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this.y = 150;
			for (let t = 0; t < e.GameMode.COUNT; t++) {
				let e = "mode" + (t + 1),
				i = this.box_show1.getChildByName(e);
				i.visible = L.isMode(t),
				(i = this.box_show2.getChildByName(e)).visible = L.isMode(t)
			}
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {}
		update() {
			if (0 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 1,
			this._closeCB && this._closeCB(1, 0),
			void this.destroy()
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tip")
		}
	}
	class gt extends t.Scenes.views.ViewTip2UI {
		constructor() {
			super(),
			this._closeCB = null,
			this._aniFlag = 0
		}
		static show(t, e = 0) {
			let i = new gt;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this.y = 150,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {}
		update() {
			if (0 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 1,
			this._closeCB && this._closeCB(1, 0),
			void this.destroy()
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tip")
		}
	}
	class ut extends t.Scenes.views.ViewTip3UI {
		constructor() {
			super(),
			this._closeCB = null,
			this._aniFlag = 0
		}
		static show(t, e = 0) {
			let i = new ut;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this.y = 150,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {}
		update() {
			if (0 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 1,
			this._closeCB && this._closeCB(1, 0),
			void this.destroy()
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_time")
		}
	}
	class pt extends t.Scenes.views.ViewTip4UI {
		constructor() {
			super(),
			this._closeCB = null,
			this._showNum = 0,
			this._aniFlag = 0
		}
		static show(t, e = 0, i) {
			let s = new pt;
			return s._closeCB = t,
			s._showNum = i,
			s.zOrder = e,
			Laya.stage.addChild(s),
			s
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this.y = 150;
			for (let t = 1; t <= 10; t++) {
				let e = this.numA.getChildByName("num" + t),
				i = this.numB.getChildByName("num" + t);
				e.visible = i.visible = t == this._showNum
			}
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {}
		update() {
			if (0 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 1,
			this._closeCB && this._closeCB(1, 0),
			void this.destroy()
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_time1")
		}
	} !
	function(t) {
		t[t.Egg = 0] = "Egg",
		t[t.Diamond = 1] = "Diamond"
	} (at || (at = {}));
	class mt extends t.Scenes.views.ViewTip5UI {
		constructor() {
			super(),
			this._closeCB = null,
			this._aniFlag = 0,
			this._index = at.Egg,
			this._value = 0
		}
		static show(t, e = 0, i, s = 1) {
			let a = new mt;
			a._closeCB = t,
			a._index = i,
			a._value = s,
			a.zOrder = e,
			Laya.stage.addChild(a)
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2 - 200,
			this.y = 280;
			let t = "icon" + (this._index + 1),
			e = null;
			for (let i = 0; i < this.boxIcons1.numChildren; i++)(e = this.boxIcons1.getChildAt(i)).visible = e.name === t;
			for (let i = 0; i < this.boxIcons2.numChildren; i++)(e = this.boxIcons2.getChildAt(i)).visible = e.name === t;
			this.showVal.text = "" + this._value,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {}
		update() {
			if (0 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 1,
			this._closeCB && this._closeCB(1, 0),
			void this.destroy()
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tip")
		}
	}
	class yt extends t.Scenes.views.ViewTip6UI {
		constructor() {
			super(),
			this._closeCB = null,
			this._aniFlag = 0,
			this._pName1 = "",
			this._pName2 = ""
		}
		static show(t, e, i, s) {
			let a = new yt;
			a._closeCB = t,
			a._pName1 = i,
			a._pName2 = s,
			a.zOrder = e,
			Laya.stage.addChild(a)
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this.y = 150,
			this.playerN1.text = this._pName1,
			this.playerN2.text = this._pName2,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {}
		update() {
			if (0 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 1,
			this._closeCB && this._closeCB(1, 0),
			void this.destroy()
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_kill")
		}
	} !
	function(t) {
		t[t.Close = 0] = "Close"
	} (nt || (nt = {}));
	class wt extends t.Scenes.views.ViewTotal1UI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0,
			this._navigate2 = null,
			this._showAdFlag = 0
		}
		static show(t, e = 0) {
			let i = new wt;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onAwake(){
			this.paiming.text = Language.getName("您的排名");
			this.tizhong.text = Language.getName("您的体重");
			this.btn_next_txt.text = Language.getName("继续");
		}

		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this._navigate2 = null,
			this.clip_rank.value = "" + (L._overRank + 1),
			this.lab_score.text = "" + L._overScore,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
			showBannerAd();
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy()
		}
		allButtonOn() {
			this.addButtonAction(this.btn_next),
			this.addButtonClick(this.btn_next, nt.Close),
			this._navigate2 = H.show(this.zOrder + 1)
		}
		allButtonOff() {
			this.btn_next.offAll(),
			this._navigate2 && this._navigate2.destroy()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + nt[t]),
			t === nt.Close && (this._closeCB_index = 0, this.setAniClose())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_total"),
			this._showAdFlag = 0,
			m.isSuport_gridAd() && n.Utils.random(0, 1) < .5 ? (this._showAdFlag = 2, m.playAds_GBanner(!0, !1)) : (this._showAdFlag = 1, m.playAds_banner(!0)),
			m.playAds_screen()
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			2 == this._showAdFlag ? m.playAds_GBanner(!1, !0) : 1 == this._showAdFlag && m.playAds_banner(!1)
		}
	} !
	function(t) {
		t[t.Ad = 0] = "Ad",
		t[t.Free = 1] = "Free",
		t[t.Record = 2] = "Record",
		t[t.AdClose = 3] = "AdClose",
		t[t.AdClick = 4] = "AdClick"
	} (ot || (ot = {}));
	class ft extends t.Scenes.views.ViewTotal2UI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0,
			this._showAd = !1,
			this._rwd_val = 0,
			this._navigate2 = null
		}
		static show(t, e = 0) {
			let i = new ft;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}

		onAwake(){
			this.get_txt.text = Language.getName("获得奖励");
			this.checkBox_txt.text = Language.getName("看视频获得5倍奖励");
			this.btn_free_txt.text = Language.getName("领取");
			this.btn_ad_txt.text = Language.getName("领取");
		}

		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this._navigate2 = null;
			let t = L.isMode(e.GameMode.Diamond);
			this.icon_diamond1.visible = t,
			this.icon_diamond2.visible = t,
			this.icon_gold1.visible = !t,
			this.icon_gold2.visible = !t,
			this._rwd_val = t ? Math.floor(L._overDiamonds) : Math.floor(L._overGolds),
			this.lab_gold.text = "" + this._rwd_val,
			this.checkBox.visible ? (this.checkBox.selected = L.isOpenSwitch(), this.setShowAd(this.checkBox.selected)) : Laya.Browser.onTTMiniGame && n.Utils.random(0, 1) < .5 && L.swapPos_UIButton(this.btn_ad, this.btn_free),
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		doShowNativeAd(t) {
			m.playAds_native(e =>{
				e ? (this.lab_adTitle.text = e.title, this.img_adShow.loadImage(e.url), this.lab_adDesc.text = e.desc, t && t(0)) : t && t(1)
			})
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy();
			this.checkBox.visible && this.checkBox.selected != this._showAd && this.setShowAd(this.checkBox.selected)
		}
		setShowAd(t) {
			this._showAd = t,
			this.btn_ad.visible = t,
			this.btn_free.visible = !t,
			this.lab_gold.text = t ? "" + 5 * this._rwd_val: "" + this._rwd_val
			this.btn_ad.parent.x = t ? 50:1000;
			this.btn_free.parent.x = !t ? 50:1000;
		}
		doGetRwd(t) {
			let i = t ? 5 * this._rwd_val: this._rwd_val;
			i = Math.floor(i);
			let s = K.Gold;
			L.isMode(e.GameMode.Diamond) ? (c.addMoney(e.Money.Diamond, i), s = K.Diamond) : (c.addMoney(e.Money.Gold, i), s = K.Gold),
			Z.show((e, i) =>{
				1 == e && (this._closeCB_index = t ? 1 : 0, this.setAniClose())
			},
			this.zOrder + 1, s, i)
		}
		doGetRwd_shareRecord() {
			c.addMoney(e.Money.Diamond, 300),
			Z.show(null, this.zOrder + 1, K.Diamond, 300)
		}
		allButtonOn() {
			this.addButtonAction(this.btn_ad),
			this.addButtonClick(this.btn_ad, ot.Ad),
			this.addButtonAction(this.btn_free),
			this.addButtonClick(this.btn_free, ot.Free),
			this.addButtonAction(this.btn_adClose),
			this.addButtonClick(this.btn_adClose, ot.AdClose),
			this.addButtonAction(this.btn_adClick),
			this.addButtonClick(this.btn_adClick, ot.AdClick),
			this.img_adBg.on(Laya.Event.CLICK, this, this.onButtonClick, [ot.AdClick]),
			this._navigate2 = H.show(this.zOrder + 1)
		}
		allButtonOff() {
			this.btn_ad.offAll(),
			this.btn_free.offAll(),
			this.btn_adClose.offAll(),
			this.btn_adClick.offAll(),
			this._navigate2 && this._navigate2.destroy()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + ot[t]),
			t === ot.Ad ? m.playAds_reward(0, t =>{
				0 == t ? this.doGetRwd(!0) : P.show(null, this.zOrder + 1, f.Ad)
			}) : t == ot.Free ? this.doGetRwd(!1) : t == ot.Record || (t === ot.AdClose ? (this.box_nativeAd.visible = !1, m.onClose_native()) : t === ot.AdClick && (this.box_nativeAd.visible = !1, m.onClick_native(), m.onClose_native()))
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu"),
			this.box_nativeAd.visible = !1,
			this.doShowNativeAd(t =>{
				0 == t && (this.box_nativeAd.visible = !0)
			}),
			m.playAds_screen()
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			this.box_nativeAd.visible && (this.box_nativeAd.visible = !1, m.onClose_native())
		}
	}
	var vt, St, Bt, Ct, xt, kt = e.RunState,
	At = e.GameMode;
	class Mt extends h {
		constructor() {
			super(),
			this._uiGame = null,
			this._showTip2 = !1,
			this._showTip3 = !1,
			this._showTip4 = 10,
			this._heroCollects = 0,
			this._cameraInspection = null
		}
		static instance() {
			return this._instance || (this._instance = new Mt),
			this._instance
		}
		init() {
			super.init(),
			L._scene = l._gameScene,
			L._area = l._gameArea,
			L._dLight = l._gameDLight,
			L._camera = l._gameCamera;
			let t = 0;
			L.isMode(At.Survival) ? t = 1 : L.isMode(At.Egg) && (t = 2);
			let e = l._gamePlane.meshRenderer.material;
			e || (e = new Laya.PBRStandardMaterial),
			e.albedoTexture = l.getGamePlaneMatTex(t),
			l._gamePlane.meshRenderer.material = e,
			L._foodSkinsParent = l._foodSkins,
			L._foodsParent = l._gameFoods,
			L._foodArea = new n.Circle(0, 0, L._area.w / 2 - 5),
			z.instance().initFoods(500),
			L._roleSkinsParent = l._roleSkins,
			L._rolesParent = l._gameRoles,
			L._roleArea = new n.Circle(0, 0, L._area.w / 4);
			let i = 16;
			l.onIosWx() ? i = 8 : l.onAndroidApk && (i = 20),
			Y.instance().initPlayers(i),
			L._eggSkinsParent = l._eggSkins,
			L._eggsParent = l._gameEggs,
			L._eggArea = new n.Circle(0, 0, L._area.w / 4),
			T.instance().initEggs(10),
			Laya.stage.addChild(L._scene),
			L.setCameraPos(new Laya.Vector3(0, 10, 0)),
			this._uiGame = new lt,
			Laya.stage.addChild(this._uiGame),
			this._uiGame.zOrder = 1,
			this._showTip2 = !1,
			this._showTip3 = !1,
			this._showTip4 = 10,
			this._heroCollects = 0,
			this.initCameraInspection(),
			L.setRunState(kt.Start0),
			L.isMode(At.Survival) ? p.playBGM("bg_game1") : p.playBGM("bg_game")
		}
		release() {
			super.release(),
			z.instance().freeFoods(),
			Y.instance().freePlayers(),
			T.instance().freeEggs(),
			L.clearAllFoods(),
			L.clearAllRoles(),
			L.clearAllEggs(),
			this._uiGame.destroy(),
			L._scene.removeSelf()
		}
		update(t) {
			if (this.updateCameraInspection(t), this.updateRunState()) return;
			let i = Y.instance().hero;
			L._heroAvatar && (L._heroAvatar = !1, console.log("do hero avatar"), i && i.doAvatar()),
			i && (i.setMove(L._heroMoveSpeed, L._heroMoveAngle), this.updateCamera());
			let s = z.instance(),
			a = Y.instance(),
			n = T.instance();
			if (s.update(t), a.update(t), n.update(t), L.updateGame(t), L.isMode(At.Survival)) {
				if (1 == a.getPlayerCnt_live()) return void this.doGameOver(!0)
			}
			if (L.isModeTimeLimit()) {
				let t = L.getShowTime();
				if (t <= 0) return void this.doGameOver(!0);
				30 != t || this._showTip2 || (this._showTip2 = !0, gt.show(null, 3)),
				12 != t || this._showTip3 || (this._showTip3 = !0, ut.show(null, 4)),
				t == this._showTip4 && t > 0 && (pt.show(null, 4, this._showTip4), this._showTip4 -= 1)
			}
			if (i) if (L.isMode(e.GameMode.Egg)) {
				let t = i._collect_eggs - this._heroCollects;
				t > 0 && (this._heroCollects = i._collect_eggs, mt.show(null, 4, at.Egg, t))
			} else if (L.isMode(e.GameMode.Diamond)) {
				let t = i._collect_diamonds - this._heroCollects;
				t > 0 && (this._heroCollects = i._collect_diamonds, mt.show(null, 4, at.Diamond, t))
			}
			L._killShow && (yt.show(null, 4, L._killShow.pn1, L._killShow.pn2), L._killShow = null)
		}
		updateCamera(t = !0) {
			let e = Y.instance().hero;
			if (e && e.getRoleCnt() > 0) {
				let i = e.getCameraPos(L.getCameraWideAngle(), L.getCameraHighAngle());
				if (t) {
					let t = L.getCameraPos(),
					e = .1;
					i.y > t.y + e ? i.y = t.y + e: i.y < t.y - e && (i.y = t.y - e)
				}
				L.setCameraPos(i)
			}
		}
		updateRunState() {
			let t = Y.instance().hero,
			i = L.getRunState();
			if (i === kt.None) return ! 1;
			if (i === kt.Wait) return ! 0;
			if (i === kt.Start0) return L.isMode(At.Survival) ? L.setRunState(kt.Start3) : L.setRunState(kt.Start1),
			!1;
			if (i === kt.Start1) return L.setRunState(kt.Wait),
			N.show((t, e) =>{
				1 == t && L.setRunState(kt.Start2)
			},
			10),
			!0;
			if (i === kt.Start2) return L.setRunState(kt.None),
			L._heroBuff === e.HeroBuff.ScoreAdd && t.addScore(5e5),
			L._heroSkinTrial >= 0 && t.addScore(5e5),
			this._uiGame.setStart(),
			ct.show(null, 5),
			!0;
			if (i === kt.Start3) {
				L.setRunState(kt.Wait); {
					let t = L.getCameraWideAngle(),
					e = L.getCameraHighAngle(),
					i = Y.instance(),
					s = L.getCameraPos(),
					a = i.getPlayer(1).getCameraPos(t, e),
					n = i.getPlayer(2).getCameraPos(t, e),
					o = i.getPlayer(3).getCameraPos(t, e),
					h = i.getPlayer(4).getCameraPos(t, e),
					l = i.hero.getCameraPos(t, e);
					this.startCameraInspection([s, a, n, o, h, l], () =>{
						L.setRunState(kt.Start1)
					})
				}
				return ! 0
			}
			return i === kt.Start4 || (i === kt.Revive ? (L.setRunState(kt.Wait), _t.show((i, s) =>{
				1 == i && (1 == s ? (L.setRunState(kt.None), g.addProg(e.AchiIndex.Revive_Times, 1), Y.instance().doPlayerRevive(t)) : this.doGameOver(!1))
			},
			10), !0) : (i === kt.Pass1 ? (L.setRunState(kt.Wait), this.doShowTotal1(() =>{
				L.setRunState(kt.Pass2)
			})) : i === kt.Pass2 ? (L.setRunState(kt.Wait), m.stopRecord(), this.doShowTotal2(() =>{
				this.doShowGuessYouLike(() =>{
					L.setRunState(kt.Menu)
				})
			})) : i === kt.Over || i === kt.Replay || (i === kt.Menu ? (L.setRunState(kt.Wait), h.setStateNext(e.GameStateIndex.Menu)) : i === kt.Back ? (L.setRunState(kt.Wait), h.setStateNext(e.GameStateIndex.Menu)) : i === kt.Pause && (L.setRunState(kt.Wait), dt.show((t, e) =>{
				1 == t && (0 == e ? L.setRunState(kt.None) : 1 == e && L.setRunState(kt.Menu))
			},
			10))), !0))
		}
		initCameraInspection() {
			this._cameraInspection = null
		}
		startCameraInspection(t, e = null) {
			this._cameraInspection = {
				step: 0,
				idx: 0,
				tmr: 0,
				posArr: t,
				sp: new Laya.Vector3,
				dp: new Laya.Vector3,
				cp: new Laya.Vector3,
				overCB: e
			}
		}
		updateCameraInspection(t) {
			if (!this._cameraInspection) return 1;
			let e = this._cameraInspection;
			if (e.tmr += 20, 0 == e.step) {
				if (e.idx + 1 >= e.posArr.length) return e.overCB && e.overCB(),
				this.initCameraInspection(),
				2;
				let t = e.posArr[e.idx],
				i = e.posArr[e.idx + 1];
				e.sp.setValue(t.x, t.y, t.z),
				e.cp.setValue(t.x, t.y, t.z),
				Laya.Vector3.subtract(i, t, e.dp),
				e.step = 1,
				e.idx += 1,
				e.tmr = 0
			} else if (1 == e.step) {
				let t = e.tmr / 1e3;
				t >= 1 && (t = 1, e.tmr = 0, e.step = 2),
				e.cp.x = e.sp.x + e.dp.x * t,
				e.cp.y = e.sp.y + e.dp.y * t,
				e.cp.z = e.sp.z + e.dp.z * t,
				L.setCameraPos(e.cp)
			} else 2 == e.step && e.tmr > 500 && (e.tmr = 0, e.step = 0);
			return 0
		}
		doGameOver(t) {
			let i = Y.instance(),
			s = 0;
			if (L.isMode(At.Egg)) s = i.heroRank_eggs;
			else if (L.isMode(At.Survival)) if (t) s = 0;
			else {
				let t = i.getPlayerCnt_live();
				s = i.hero.isDie() ? t: 1 == t ? 0 : i.heroRank_score
			} else s = i.heroRank_score;
			let a = L.getWeight(i.hero.getScoreMax()),
			n = i.hero._collect_eggs,
			o = i.hero._collect_diamonds,
			h = 1;
			L.isMode(At.Classic) && (h = E.calculateShowScale(i.hero.getScoreMax())),
			L.setOverInfo(s, a, n, o, h),
			L.isMode(At.Survival) && t ? L.setRunState(kt.Pass2) : L.setRunState(kt.Pass1),
			0 == s && g.addProg(e.AchiIndex.No1_Times, 1)
		}
		doShowTotal1(t) {
			wt.show((e, i) =>{
				1 == e && t && t()
			},
			10)
		}
		doShowTotal2(t) {
			ft.show((e, i) =>{
				1 == e && t && t()
			},
			10)
		}
		doShowGuessYouLike(t) {
			L.isShowGameList() ? rt.show((e, i) =>{
				1 == e && t && t()
			},
			10) : t && t()
		}
		isStopTouch() {
			return L.getRunState() != kt.None
		}
		onTouchBegan(t) {
			if (!this.isStopTouch() && t.touchId >= 0) {
				let e = new Laya.Vector2(t.stageX, t.stageY),
				i = Laya.stage.width / 2,
				s = Y.instance().hero;
				e.x < i && this._uiGame._move_tid < 0 && s && (this._uiGame.setTid_move(t.touchId), this._uiGame.setPos_move(e, e))
			}
		}
		onTouchMoved(t) {
			let e = new Laya.Vector2(t.stageX, t.stageY);
			t.touchId == this._uiGame._move_tid && this._uiGame.setPos_move(e)
		}
		onTouchEnded(t) {
			t.touchId == this._uiGame._move_tid && (this._uiGame.setTid_move( - 1), this._uiGame.setPos_move(null, null))
		}
	}
	Mt._instance = null,
	function(t) {
		t[t.Back = 0] = "Back"
	} (vt || (vt = {}));
	class bt extends t.Scenes.views.ViewPrivacyUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_code = 0,
			this._aniFlag = 0
		}
		static show(t, e = 0) {
			let i = new bt;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_code),
			void this.destroy()
		}
		allButtonOn() {
			this.addButtonAction(this.btn_back),
			this.addButtonClick(this.btn_back, vt.Back)
		}
		allButtonOff() {
			this.btn_back.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + vt[t]),
			t === vt.Back && this.setAniClose()
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu")
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_code),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff()
		}
	} !
	function(t) {
		t[t.Privacy = 0] = "Privacy",
		t[t.Start = 1] = "Start"
	} (St || (St = {}));
	class It extends t.Scenes.views.ViewLoadingUI {
		constructor() {
			super(),
			this._showStep = 0,
			this._showTimer = 0,
			this._progShow = 0
		}
		onAwake() {
			this.width = Laya.stage.width * this.height / Laya.stage.height,
			this._progShow = 0
		}
		onEnable() {
			this.box_prog.visible = !0,
			this.box_prog.alpha = 1,
			this.box_btn.visible = !1,
			this.box_btn.alpha = 0,
			this.checkBox.selected = !1;
			let t = Laya.Browser.onAndroid && !Laya.Browser._isMiniGame;
			this.checkBox.visible = false,
			this.btn_privacy.visible = t,
			this.setProgShow(0),
			this.timer.frameLoop(1, this, this.update),
			this.companyLogoNode.visible ? (this.companyLogoNode.alpha = 1, this._showStep = 0, this._showTimer = 0) : (this._showStep = 10, this._showTimer = 0)
		}
		onDisable() {}
		update() {
			if (0 == this._showStep) this._showTimer += this.timer.delta,
			this._showTimer > 3200 ? (this._showStep = 10, this._showTimer = 0, this.companyLogoNode.visible = !1) : this._showTimer > 3e3 && (this.companyLogoNode.alpha = 1 - (this._showTimer - 3e3) / 200);
			else if (10 == this._showStep) {
				let t = l.getProg(),
				e = this._progShow + .01;
				e > t && (e = t),
				this.setProgShow(e)
			}
		}
		setProgShow(t) {
			t = t < 1 ? t: 1,
			this._progShow = t;
			let e = Math.floor(100 * this._progShow);
			this.progVal.text =Language.getName("加载中")+ "..." + e + "%",
			this.loadProgBar.width = this.loadProgBg.width * t
		}
		isLoadOver() {
			return this._progShow >= 1
		}
		setHideProgress() {
			this.checkBox.visible ? Laya.Tween.to(this.box_prog, {
				alpha: 0
			},
			200, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
				this.box_prog.visible = !1,
				this.setShowButton()
			})) : (m.initAds(), u.addProg(e.TaskIndex.Login, 1), h.setStateNext(e.GameStateIndex.Menu),showBannerAd())
		}
		setShowButton() {
			this.box_btn.alpha = 0,
			this.box_btn.visible = !0,
			Laya.Tween.to(this.box_btn, {
				alpha: 1
			},
			200, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
				m.initAds(),
				this.allButtonOn()
			}))
		}
		allButtonOn() {
			this.addButtonAction(this.btn_privacy),
			this.addButtonClick(this.btn_privacy, St.Privacy),
			this.addButtonAction(this.btn_start),
			this.addButtonClick(this.btn_start, St.Start)
		}
		allButtonOff() {
			this.btn_privacy.offAll(),
			this.btn_start.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + St[t]),
			t === St.Privacy ? bt.show(null, 2) : t == St.Start && (!this.checkBox.visible || this.checkBox.selected ? (this.allButtonOff(),
			u.addProg(e.TaskIndex.Login, 1), h.setStateNext(e.GameStateIndex.Menu)) : bt.show(null, 2))
		}
	}
	class Lt extends h {
		constructor() {
			super(),
			this._uiLoading = null,
			this._loadingFlag = 0
		}
		static instance() {
			return this._instance || (this._instance = new Lt),
			this._instance
		}
		init() {
			this._uiLoading = new It,
			Laya.stage.addChild(this._uiLoading),
			this._loadingFlag = 0,
			m.init(),
			L.getConfigFromServer()
		}
		release() {
			this._uiLoading.destroy()
		}
		update(t) {
			0 === this._loadingFlag ? this._loadingFlag = 1 : 1 === this._loadingFlag ? (this._loadingFlag = 2, l.loadBundle() || (this._loadingFlag = 3)) : 2 === this._loadingFlag ? this._uiLoading.isLoadOver() && (this._loadingFlag = 3) : 3 === this._loadingFlag ? (this._loadingFlag = 4, p.playBGM("bg_ui"), l.loadRes()) : 4 === this._loadingFlag ? this._uiLoading.isLoadOver() && (this._loadingFlag = 5, _.loadAll(), n.SensitiveWordFilter.ins.init(l.getSensitiveWords())) : 5 === this._loadingFlag && n.SensitiveWordFilter.ins.isReady() && (this._loadingFlag = 6, this._uiLoading.setHideProgress())
		}
	}
	Lt._instance = null,
	function(t) {
		t[t.Get = 0] = "Get"
	} (Bt || (Bt = {}));
	class Et extends t.Scenes.views.ViewAchiNodeUI {
		constructor(t = 0) {
			super(),
			this._index = 0,
			this._index = t
		}

		onAwake(){
			this.btn_lock_txt.text = Language.getName("未完成");
			this.btn_claim_txt.text = Language.getName("领取");
		}
		onEnable() {
			this.refreshShow(),
			this.allButtonOn()
		}
		onDisable() {
			this.allButtonOff()
		}
		refreshShow() {
			let t = l.getAchiInfo(this._index),
			e = Language.getName(t.des),
			i = g.getLv(this._index),
			s = g.getProg(this._index),
			a = g.getProgMax(this._index),
			n = g.getProgRate(this._index),
			o = n >= 1;
			this.achiIcon.skin = "ui/" + t.icon + ".png",
			this.achiName.text = Language.getName(t.name),
			this.achiDesc.text = e.replace("xx", "" + a),
			this.achiProgBar.width = this.achiProgBg.width * n,
			this.achiProgVal.text = s + "/" + a,
			this.achiLv.text = "lv." + (i + 1),
			this.icon_gold.visible = 0 == t.rwdtype,
			this.icon_diamond.visible = 1 == t.rwdtype,
			this.lab_rwdVal.text = "" + t.rwd,
			this.btn_claim.visible = o,
			this.btn_lock.visible = !o
		}
		getRwd() {
			let t = l.getAchiInfo(this._index),
			i = K.Gold,
			s = t.rwd;
			0 == t.rwdtype ? (c.addMoney(e.Money.Gold, s), i = K.Gold) : 1 == t.rwdtype && (c.addMoney(e.Money.Diamond, s), i = K.Diamond),
			Z.show(null, 10, i, s),
			g.addLv(this._index),
			this.refreshShow()
		}
		allButtonOn() {
			this.addButtonAction(this.btn_claim),
			this.addButtonClick(this.btn_claim, Bt.Get)
		}
		allButtonOff() {
			this.btn_claim.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + Bt[t]),
			t === Bt.Get && this.getRwd()
		}
	} !
	function(t) {
		t[t.Back = 0] = "Back"
	} (Ct || (Ct = {}));
	class Ot extends t.Scenes.views.ViewAchiUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0,
			this._achis = null,
			this._achiSort = null,
			this._achi_mx = 0,
			this._achi_vx = 0,
			this._achi_mf = 0,
			this._achi_tid = -1,
			this._achi_tsx = 0
		}
		static show(t, e = 0) {
			let i = new Ot;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onAwake() {
			this.width = Laya.stage.width * this.height / Laya.stage.height,
			this.achiList.destroyChildren(),
			this._achis = [];
			let t = l.getAchiInfoCnt();
			for (let e = 0; e < t; e++) {
				let t = new Et(e);
				this._achis.push(t),
				this.achiList.addChild(t)
			}
		}
		onEnable() {
			let t = [],
			e = [];
			for (let i = 0; i < this._achis.length; i++) g.isComplete(i) ? t.push(i) : e.push(i);
			this._achiSort = t.concat(e),
			this._achi_mx = 0,
			this._achi_vx = 0,
			this._achi_mf = 2,
			this._achi_tid = -1,
			this._achi_tsx = 0,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update),
			this.achiList.on(Laya.Event.MOUSE_DOWN, this, this.onTouchBegan),
			this.achiList.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMoved),
			this.achiList.on(Laya.Event.MOUSE_UP, this, this.onTouchEnded)
		}
		onDisable() {
			this.allButtonOff(),
			this.achiList.offAll()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy();
			if (2 == this._achi_mf) {
				0 != this.updateAchiPos(this._achi_mx - this._achi_vx) || Math.abs(this._achi_vx) < 2 ? (this._achi_mf = 0, this._achi_vx = 0) : this._achi_vx -= this._achi_vx / 20
			}
		}
		onTouchBegan(t) {
			this._achi_tid < 0 && (this._achi_tid = t.touchId, this._achi_tsx = t.stageX, this._achi_mf = 1, this._achi_vx = 0)
		}
		onTouchMoved(t) {
			if (this._achi_tid == t.touchId) {
				let e = t.stageX - this._achi_tsx;
				this.updateAchiPos(this._achi_mx - e),
				this._achi_tsx = t.stageX,
				this._achi_vx = e;
				let i = 30;
				e > i ? this._achi_vx = i: e < -i && (this._achi_vx = -i)
			}
		}
		onTouchEnded(t) {
			this._achi_tid == t.touchId && (this._achi_tid = -1, this._achi_tsx = 0, this._achi_mf = 2)
		}
		updateAchiPos(t) {
			let e = this._achiSort.length,
			i = Ot.Achi_Dw,
			s = 2 * Ot.Achi_Edge_Dx + i * e;
			s < this.achiList.width && (s = this.achiList.width);
			let a = 0;
			t < 0 ? (t = 0, a = 1) : t > s - this.achiList.width && (t = s - this.achiList.width, a = 2),
			this._achi_mx = t;
			let n = Ot.Achi_Edge_Dx - t,
			o = (this.achiList.height - Ot.Achi_Dh) / 2;
			for (let t = 0; t < e; t++) {
				let e = this._achiSort[t];
				this._achis[e].x = n,
				this._achis[e].y = o,
				n += i
			}
			return a
		}
		allButtonOn() {
			this.addButtonAction(this.btn_back),
			this.addButtonClick(this.btn_back, Ct.Back)
		}
		allButtonOff() {
			this.btn_back.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + Ct[t]),
			t === Ct.Back && (this._closeCB_index = 0, this.setAniClose())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu"),
			m.playAds_banner(!0)
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			m.playAds_banner(!1)
		}
	}
	Ot.Achi_Edge_Dx = 100,
	Ot.Achi_Dw = 360,
	Ot.Achi_Dh = 400,
	function(t) {
		t[t.Back = 0] = "Back",
		t[t.Change = 1] = "Change"
	} (xt || (xt = {}));
	class Pt extends t.Scenes.views.ViewChangeNameUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_code = 0,
			this._aniFlag = 0,
			this._changeFlag = 0,
			this._preName = "",
			this._checkFlag = 0
		}
		static show(t, e = 0) {
			return;

			let i = new Pt;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2;
			let t = c.getPName();
			t && t.length > 1 ? (this.inputName.text = t, this.btn_back.visible = !0) : (this.inputName.text = "player", this.btn_back.visible = !1),
			this.lab_tip.text = "",
			this._changeFlag = 0,
			this._preName = this.inputName.text,
			this._checkFlag = 0,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (1 === this._changeFlag && this._preName !== this.inputName.text && (this._changeFlag = 2, this._checkFlag = 1, this.lab_tip.text = ""), 0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_code),
			void this.destroy()
		}
		checkInputName() {
			if (0 == this._changeFlag) return console.log("已经检测过，有效"),
			!0;
			if (2 == this._checkFlag) return console.log("已经检测过，无效"),
			!1;
			this._preName = this.inputName.text,
			this._checkFlag = 2;
			var t = [{
				reg: /^[\u4e00-\u9fa5]+$/i,
				name: "中文",
				len: 2
			},
			{
				reg: /^[0-9]*$/,
				name: "数字",
				len: 1
			},
			{
				reg: /^[A-Za-z]*$/,
				name: "英文",
				len: 1
			}];
			let e = 0;
			for (let i = 0; i < this._preName.length; i++) {
				let s = !1,
				a = this._preName.slice(i, i + 1);
				for (let i = 0; i < t.length; i++) if (t[i].reg.test(a)) {
					console.log("-----------", a, t[i].name),
					e += t[i].len,
					s = !0;
					break
				}
				if (!s) return this.lab_tip.text = "存在非法字符",
				!1
			}
			return 0 == e && (this.lab_tip.text = "昵称不能空"),
			e > 10 ? (this.lab_tip.text = "昵称太长", !1) : e < 2 ? (this.lab_tip.text = "昵称太短", !1) : l.isExistPlayerName(this._preName) ? (this.lab_tip.text = "昵称已存在", !1) : n.SensitiveWordFilter.ins.contain(this._preName) ? (this.lab_tip.text = "存在敏感字词", !1) : (this._checkFlag = 0, !0)
		}
		allButtonOn() {
			this.addButtonAction(this.btn_back),
			this.addButtonClick(this.btn_back, xt.Back),
			this.addButtonAction(this.btn_change),
			this.addButtonClick(this.btn_change, xt.Change),
			this.inputName.on(Laya.Event.FOCUS, this, () =>{
				console.log("change name input FOCUS"),
				this._changeFlag = 1
			}),
			this.inputName.on(Laya.Event.BLUR, this, () =>{
				console.log("change name input BLUR"),
				1 == this._changeFlag && (this._changeFlag = 0)
			})
		}
		allButtonOff() {
			this.btn_back.offAll(),
			this.btn_change.offAll(),
			this.inputName.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + xt[t]),
			t === xt.Back ? this.setAniClose() : t === xt.Change && this.checkInputName() && (c.setPName(this._preName), this.setAniClose())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu")
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_code),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff()
		}
	}
	var Nt, Ut, Tt, Rt, Ft, Gt = e.Money; !
	function(t) {
		t[t.Ad = 0] = "Ad",
		t[t.Free = 1] = "Free",
		t[t.Back = 2] = "Back"
	} (Nt || (Nt = {}));
	class Vt extends t.Scenes.views.ViewSignUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0,
			this._showAd = !1,
			this._signed = !1,
			this._signDay = 0
		}
		static show(t, e = 0) {
			let i = new Vt;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onAwake(){
			for(let i = 1; i < 8; i++){
				this["Day_"+ i].text = Language.getName("第"+i+"天")
			}
			this.btn_ad_txt.text = Language.getName("双倍领取")
			this.btn_free_txt.text = Language.getName("领取")
			this.checkBox_txt.text = Language.getName("看视频双倍领取")
		}

		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2;
			let t = c.getSignTimes(),
			e = c.getLastSignDate() >= n.Utils.getDate(),
			i = t % 7;
			e && 0 == i && (i = 7);
			for (let t = 0; t < 7; t++) {
				let s = this.signBg.getChildByName("day" + (t + 1)),
				a = s.getChildByName("select"),
				n = s.getChildByName("finish");
				a.visible = !e && i == t,
				n.visible = i > t
			}
			if (e) this.btn_ad.visible = !1,
			this.btn_free.visible = !1,
			this.checkBox.visible = !1;
			else if (this.checkBox.visible) this.checkBox.visible = !e && 1 != i && 6 != i,
			this.checkBox.visible ? (this.checkBox.selected = L.isOpenSwitch(), this.setShowAd(this.checkBox.selected)) : this.setShowAd(!1);
			else if (this.btn_ad.visible = !e && 1 != i && 6 != i, this.btn_ad.visible) Laya.Browser.onTTMiniGame && n.Utils.random(0, 1) < .5 && L.swapPos_UIButton(this.btn_ad, this.btn_free);
			else {
				let t = this.btn_free.parent;
				t && (t.x = 0)
			}
			this._signed = e,
			this._signDay = i,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy();
			this.checkBox.visible && this.checkBox.selected != this._showAd && this.setShowAd(this.checkBox.selected)
		}
		setShowAd(t) {
			this._showAd = t,
			this.btn_ad.visible = t,
			this.btn_free.visible = !t
		}
		doGetRwd(t) {
			let i = [{
				t: Gt.Gold,
				v: 500
			},
			{
				t: -1,
				v: 1
			},
			{
				t: Gt.Diamond,
				v: 200
			},
			{
				t: Gt.Gold,
				v: 1e3
			},
			{
				t: Gt.Diamond,
				v: 500
			},
			{
				t: Gt.Diamond,
				v: 1500
			},
			{
				t: -1,
				v: 14
			}],
			s = i[this._signDay].v;
			s = t ? 2 * s: s;
			let a = K.Gold;
			i[this._signDay].t == Gt.Gold ? (c.addMoney(e.Money.Gold, s, !1), a = K.Gold) : i[this._signDay].t == Gt.Diamond ? (c.addMoney(e.Money.Diamond, s, !1), a = K.Diamond) : -1 == i[this._signDay].t && (c.setSkinGet(i[this._signDay].v, !1), s = -1),
			c.doSign();
			let n = this.signBg.getChildByName("day" + (this._signDay + 1)),
			o = n.getChildByName("select"),
			h = n.getChildByName("finish");
			o.visible = !1,
			h.visible = !0,
			s > 0 ? Z.show((e, i) =>{
				1 == e && (this._closeCB_index = t ? 1 : 0, this.setAniClose())
			},
			this.zOrder + 1, a, s) : (this._closeCB_index = t ? 1 : 0, this.setAniClose())
		}
		allButtonOn() {
			this.addButtonAction(this.btn_ad),
			this.addButtonClick(this.btn_ad, Nt.Ad),
			this.addButtonAction(this.btn_free),
			this.addButtonClick(this.btn_free, Nt.Free),
			this.addButtonAction(this.btn_back),
			this.addButtonClick(this.btn_back, Nt.Back)
		}
		allButtonOff() {
			this.btn_ad.offAll(),
			this.btn_free.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + Nt[t]),
			t === Nt.Ad ? m.playAds_reward(0, t =>{
				0 == t ? this.doGetRwd(!0) : P.show(null, this.zOrder + 1, f.Ad)
			}) : t == Nt.Free ? this.doGetRwd(!1) : t == Nt.Back && (this._closeCB_index = 0, this.setAniClose())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu")
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff()
		}
	} !
	function(t) {
		t[t.Back = 0] = "Back",
		t[t.Trial = 1] = "Trial"
	} (Ut || (Ut = {}));
	class Dt extends t.Scenes.views.ViewSkinTrialUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0,
			this._skinIdx = -1
		}
		static show(t, e = 0) {
			let i = new Dt;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}

		onAwake(){
			this.btn_trial_txt.text = Language.getName("免费试用");
			this.skill_txt.text = Language.getName("初始体重+500g");
			this.btn_back_txt.text = Language.getName("直接进入游戏");
		}

		onEnable() {
			this.x = (Laya.stage.width - this.width) / 2;
			let t = [],
			e = l.getSkinInfoCnt();
			for (let i = 0; i < e; i++) c.isSkinGot(i) || t.push(i);
			if (t.length > 0) {
				let e = t[n.Utils.randomInt(0, t.length)],
				i = (e > 9 ? "": "0") + (e + 1),
				s = "lv" + (l.getSkinInfo_lv(e) + 1);
				this.skin_name.text = l.getSkinInfo_name(e),
				this.skin_show.skin = "skintry/skintry" + i + ".png";
				for (let t = 0; t < this.skin_lv.numChildren; t++) {
					let e = this.skin_lv.getChildAt(t);
					e.visible = e.name === s
				}
				this._skinIdx = e
			} else console.error("ViewSkinTrial error: no skin can trial");
			let i = c.getSkinTrialTimes();
			this.btn_back.visible = i > 0,
			this.adIcon_trial.visible = i > 0,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy()
		}
		allButtonOn() {
			this.addButtonAction(this.btn_trial),
			this.addButtonClick(this.btn_trial, Ut.Trial),
			this.addButtonAction(this.btn_back),
			this.addButtonClick(this.btn_back, Ut.Back)
		}
		allButtonOff() {
			this.btn_trial.offAll(),
			this.btn_back.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + Ut[t]),
			t === Ut.Back ? (this._closeCB_index = 0, this.setAniClose()) : t == Ut.Trial && (this.adIcon_trial.visible ? m.playAds_reward(0, t =>{
				0 == t ? (c.addSkinTrialTimes(!0), L._heroSkinTrial = this._skinIdx, this._closeCB_index = 1, this.setAniClose()) : P.show(null, this.zOrder + 1, f.Ad)
			}) : (c.addSkinTrialTimes(!0), L._heroSkinTrial = this._skinIdx, this._closeCB_index = 1, this.setAniClose()))
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu"),
			m.playAds_banner(!0)
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			m.playAds_banner(!1)
		}
	} !
	function(t) {
		t[t.Get = 0] = "Get"
	} (Tt || (Tt = {}));
	class Xt extends t.Scenes.views.ViewTaskNodeUI {
		constructor(t) {
			super(),
			this._index = 0,
			this._index = t
		}
		onAwake(){
			this.btn_lock_txt.text = Language.getName("未完成");
			this.btn_get_txt.text = Language.getName("领取");
			this.btn_finished_txt.text = Language.getName("已领取");
		}
		onEnable() {
			this.refreshShow(!0),
			this.allButtonOn()
		}
		onDisable() {
			this.allButtonOff()
		}
		refreshShow(t) {
			let e = l.getTaskInfo(this._index),
			i = u.isFinished(this._index),
			s = u.isCompleted(this._index),
			a = u.getProg(this._index); (i || s) && (a = e.num),
			this.taskCmpt.visible = !i && s,
			t && (this.taskRwd_gold.visible = 0 == e.rwdtype, this.taskRwd_diamond.visible = 1 == e.rwdtype, this.taskRwd.text = "" + e.rwd, this.taskDesc.text =Language.getName(e.des)),
			this.taskProgBar.width = this.taskProgBg.width * a / e.num,
			this.taskProgVal.text = a + "/" + e.num,
			this.btn_lock.visible = !i && !s,
			this.btn_get.visible = !i && s,
			this.btn_finished.visible = i
		}
		getRwd() {
			let t = l.getTaskInfo(this._index),
			i = K.Gold,
			s = t.rwd;
			0 == t.rwdtype ? (c.addMoney(e.Money.Gold, s), i = K.Gold) : 1 == t.rwdtype && (c.addMoney(e.Money.Diamond, s), i = K.Diamond),
			Z.show(null, 10, i, s),
			u.setFinished(this._index),
			this.refreshShow(!1)
		}
		allButtonOn() {
			this.addButtonAction(this.btn_get),
			this.addButtonClick(this.btn_get, Tt.Get)
		}
		allButtonOff() {
			this.btn_get.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + Tt[t]),
			t === Tt.Get && this.getRwd()
		}
	} !
	function(t) {
		t[t.Back = 0] = "Back"
	} (Rt || (Rt = {}));
	class zt extends t.Scenes.views.ViewTaskUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0
		}
		static show(t, e = 0) {
			let i = new zt;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onAwake() {
			this.width = Laya.stage.width * this.height / Laya.stage.height;
			let t = u.getAcitive();
			for (let e = 0; e < t.length; e++) {
				let i = new Xt(t[e]);
				this.taskList.addChild(i),
				i.x = 0,
				i.y = 100 * e
			}
			this.task_txt.text = Language.getName("任务每天0点刷新，完成后可获得相应奖励")
		}
		onEnable() {
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy()
		}
		allButtonOn() {
			this.addButtonAction(this.btn_back),
			this.addButtonClick(this.btn_back, Rt.Back)
		}
		allButtonOff() {
			this.btn_back.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + Rt[t]),
			t === Rt.Back && (this._closeCB_index = 0, this.setAniClose())
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu"),
			m.playAds_banner(!0)
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff(),
			m.playAds_banner(!1)
		}
	} !
	function(t) {
		t[t.Back = 0] = "Back",
		t[t.Ad = 1] = "Ad",
		t[t.Free = 2] = "Free"
	} (Ft || (Ft = {}));
	let Yt = [{
		rate: 15.6,
		rwdType: 0,
		rwd: 400
	},
	{
		rate: 9.4,
		rwdType: 1,
		rwd: 400
	},
	{
		rate: 6.3,
		rwdType: 0,
		rwd: 1200
	},
	{
		rate: 15.6,
		rwdType: 2,
		rwd: 1
	},
	{
		rate: 3.1,
		rwdType: 1,
		rwd: 800
	},
	{
		rate: 15.6,
		rwdType: 0,
		rwd: 400
	},
	{
		rate: 9.4,
		rwdType: 2,
		rwd: 3
	},
	{
		rate: 6.3,
		rwdType: 0,
		rwd: 2400
	},
	{
		rate: 15.6,
		rwdType: 1,
		rwd: 100
	},
	{
		rate: 3.1,
		rwdType: 0,
		rwd: 5e3
	}];
	class Wt extends t.Scenes.views.ViewZpUI {
		constructor() {
			super(),
			this._closeCB = null,
			this._closeCB_index = 0,
			this._aniFlag = 0,
			this._selects = [],
			this._state = 0,
			this._itemIdx_cur = 0,
			this._itemIdx_dst = 0,
			this._itemIdx_timeSpace = 0,
			this._itemIdx_timer = 0
		}
		static show(t, e = 0) {
			let i = new Wt;
			i._closeCB = t,
			i.zOrder = e,
			Laya.stage.addChild(i)
		}
		onAwake() {
			this.width = Laya.stage.width * this.height / Laya.stage.height;
			this.btn_ad_txt.text = Language.getName("抽奖");
			this.btn_free_txt.text = Language.getName("抽奖");
			this.btn_ad_txt2.text = Language.getName("免费");
		}
		onEnable() {
			this._selects = [];
			for (let t = 0; t < Yt.length; t++) {
				let e = this.bgNode.getChildByName("data" + (t + 1)).getChildByName("select");
				this._selects.push(e),
				e.visible = !1
			}
			this._state = 0,
			this._itemIdx_cur = this._itemIdx_dst = 0,
			this._itemIdx_timeSpace = 0,
			this._itemIdx_timer = 0,
			this.setAniOpen(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			if (0 == this._aniFlag) this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn());
			else if (2 == this._aniFlag && !this.ani1.isPlaying) return this._aniFlag = 3,
			this._closeCB && this._closeCB(1, this._closeCB_index),
			void this.destroy();
			let t = c.getZpFreeTime();
			if (t > 0) {
				this.btn_ad.visible || (this.btn_ad.visible = !0),
				this.btn_free.visible && (this.btn_free.visible = !1);
				let e = Math.floor(t / 1e3),
				i = Math.floor(e / 60),
				s = Math.floor(e % 60),
				a = (i > 9 ? "": "0") + i + ":" + (s > 9 ? "": "0") + s;
				this.freeTime.text = a
			} else this.btn_ad.visible && (this.btn_ad.visible = !1),
			this.btn_free.visible || (this.btn_free.visible = !0);
			let i = this.timer.delta;
			if (1 == this._state) {
				let t = this._itemIdx_dst - this._itemIdx_cur;
				if (t > 0) this._itemIdx_timer += i,
				this._itemIdx_timer >= this._itemIdx_timeSpace && (this.setItemIdxCur(this._itemIdx_cur + 1), this._itemIdx_timer = 0, this._itemIdx_timeSpace -= 50, t < 10 && (this._itemIdx_timeSpace = 10 + 50 * (10 - t)), this._itemIdx_timeSpace < 100 && (this._itemIdx_timeSpace = 100));
				else {
					this._state = 0;
					let t = this._selects.length,
					i = this._itemIdx_cur % t,
					s = Yt[i],
					a = s.rwd,
					n = K.Gold;
					0 == s.rwdType ? (n = K.Gold, c.addMoney(e.Money.Gold, a)) : 1 == s.rwdType ? (n = K.Diamond, c.addMoney(e.Money.Diamond, a)) : 2 == s.rwdType && (n = K.Invi, c.addItem(e.Item.Invi, a)),
					Z.show(null, 10, n, a)
				}
			}
		}
		setItemIdxCur(t) {
			this._itemIdx_cur = t;
			let e = this._selects.length,
			i = this._itemIdx_cur % e;
			for (let t = 0; t < e; t++) this._selects[t].visible = t == i
		}
		doStart(t) {
			let i = this._selects.length,
			s = 0,
			a = n.Utils.random(0, 100);
			for (let t = 0; t < i; t++) {
				let e = Yt[t].rate;
				if (a < e) break;
				a -= e,
				s += 1
			}
			this.setItemIdxCur(this._itemIdx_cur % i),
			this._itemIdx_dst = 3 * i + s,
			this._itemIdx_timeSpace = 300,
			this._itemIdx_timer = 0,
			this._state = 1,
			t && c.resetZpFreeTime(!0),
			u.addProg(e.TaskIndex.Use_zp, 1)
		}
		allButtonOn() {
			this.addButtonAction(this.btn_back),
			this.addButtonClick(this.btn_back, Ft.Back),
			this.addButtonAction(this.btn_ad),
			this.addButtonClick(this.btn_ad, Ft.Ad),
			this.addButtonAction(this.btn_free),
			this.addButtonClick(this.btn_free, Ft.Free)
		}
		allButtonOff() {
			this.btn_back.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			0 == this._state && (p.playEFM("ef_button"), console.log("btn clicked " + Ft[t]), t === Ft.Back ? (this._closeCB_index = 0, this.setAniClose()) : t === Ft.Ad ? m.playAds_reward(0, t =>{
				0 == t ? this.doStart(!1) : P.show(null, this.zOrder + 1, f.Ad)
			}) : t === Ft.Free && this.doStart(!0))
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu")
		}
		setAniClose() {
			this._closeCB && this._closeCB(0, this._closeCB_index),
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff()
		}
	}
	var Ht, jt, Kt; !
	function(t) {
		t[t.Gold = 0] = "Gold",
		t[t.Diamond = 1] = "Diamond",
		t[t.Mode1 = 2] = "Mode1",
		t[t.Mode2 = 3] = "Mode2",
		t[t.Mode3 = 4] = "Mode3",
		t[t.Mode4 = 5] = "Mode4",
		t[t.Shop = 6] = "Shop",
		t[t.Achi = 7] = "Achi",
		t[t.Task = 8] = "Task",
		t[t.Zp = 9] = "Zp",
		t[t.Sign = 10] = "Sign",
		t[t.More = 11] = "More",
		t[t.ChangeName = 12] = "ChangeName"
	} (Ht || (Ht = {}));
	class qt extends t.Scenes.views.ViewMenuUI {
		constructor() {
			super(),
			this._skinScene = null,
			this._skinIdx = 0,
			this._skin = null,
			this._showGold = 0,
			this._showDiamond = 0
		}
		onAwake() {
			this.width = Laya.stage.width * this.height / Laya.stage.height,
			console.log("version", Laya.version)

			this.getChildByName("box_head").visible =false;
			this.classic.text = Language.getName("经典模式");
			this.war.text = Language.getName("龙蛋战争");
			this.BattleRoyale.text = Language.getName("大逃杀");
			this.Dig.text = Language.getName("钻石挖掘");
		}
		onEnable() {
			this._skinIdx = -1,
			this._showGold = c.getMoney(e.Money.Gold),
			this.val_gold.text = "" + this._showGold,
			this._showDiamond = c.getMoney(e.Money.Diamond),
			this.val_diamond.text = "" + this._showDiamond,
			c.getPNameChangeTimes() <= 0 && Pt.show(null, 2),
			this.btn_more.visible = m.isSuport_gridAd(),
			this.allButtonOn(),
			this.timer.frameLoop(1, this, this.update)
		}
		onDisable() {
			this.allButtonOff()
		}
		update() {
			this.timer.delta;
			let t = c.getSkinIdx();
			this._skinIdx != t && this.setSkinShow(t),
			this._skin && this._skin.transform.rotate(new Laya.Vector3(0, -.5, 0), !0, !1);
			let i = c.getMoney(e.Money.Gold);
			i != this._showGold && (this._showGold = i, this.val_gold.text = "" + i),
			(i = c.getMoney(e.Money.Diamond)) != this._showDiamond && (this._showDiamond = i, this.val_diamond.text = "" + i),
			this.lab_playerName.text = c.getPName()
		}
		allButtonOn() {
			this.addButtonAction(this.btn_gold),
			this.addButtonClick(this.btn_gold, Ht.Gold),
			this.addButtonAction(this.btn_diamond),
			this.addButtonClick(this.btn_diamond, Ht.Diamond),
			this.addButtonAction(this.btn_mode1),
			this.addButtonClick(this.btn_mode1, Ht.Mode1),
			this.addButtonAction(this.btn_mode2),
			this.addButtonClick(this.btn_mode2, Ht.Mode2),
			this.addButtonAction(this.btn_mode3),
			this.addButtonClick(this.btn_mode3, Ht.Mode3),
			this.addButtonAction(this.btn_mode4),
			this.addButtonClick(this.btn_mode4, Ht.Mode4),
			this.addButtonAction(this.btn_shop),
			this.addButtonClick(this.btn_shop, Ht.Shop),
			this.addButtonAction(this.btn_achi),
			this.addButtonClick(this.btn_achi, Ht.Achi),
			this.addButtonAction(this.btn_task),
			this.addButtonClick(this.btn_task, Ht.Task),
			this.addButtonAction(this.btn_zp),
			this.addButtonClick(this.btn_zp, Ht.Zp),
			this.addButtonAction(this.btn_sign),
			this.addButtonClick(this.btn_sign, Ht.Sign),
			this.addButtonAction(this.btn_more),
			this.addButtonClick(this.btn_more, Ht.More),
			this.addButtonClick(this.btn_changeName, Ht.ChangeName)
		}
		allButtonOff() {
			this.btn_gold.offAll(),
			this.btn_diamond.offAll(),
			this.btn_mode1.offAll(),
			this.btn_mode2.offAll(),
			this.btn_mode3.offAll(),
			this.btn_mode4.offAll(),
			this.btn_shop.offAll(),
			this.btn_achi.offAll(),
			this.btn_task.offAll(),
			this.btn_zp.offAll(),
			this.btn_sign.offAll(),
			this.btn_more.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + Ht[t]),
			t === Ht.Gold ? $.show(null, J.Gold, 2) : t == Ht.Diamond ? $.show(null, J.Diamond, 2) : t == Ht.Mode1 ? this.doEnterGame(e.GameMode.Classic) : t == Ht.Mode2 ? this.doEnterGame(e.GameMode.Egg) : t == Ht.Mode3 ? this.doEnterGame(e.GameMode.Survival) : t == Ht.Mode4 ? this.doEnterGame(e.GameMode.Diamond) : t == Ht.Shop ? (this.allButtonOff(), h.setStateNext(e.GameStateIndex.SkinShop)) : t == Ht.Achi ? Ot.show(null, 2) : t == Ht.Task ? zt.show(null, 2) : t == Ht.Zp ? Wt.show(null, 2) : t == Ht.Sign ? Vt.show(null, 2) : t == Ht.ChangeName ? Pt.show(null, 2) : t == Ht.More && m.playAds_GPortal(!1)
		}
		setSkinShow(t) {
			if (this._skinIdx = t, this._skin && (this._skin.destroy(), this._skin = null), !this._skinScene) {
				let t = new Laya.Point(50, 50),
				a = (t = this.skin.localToGlobal(t)).x / this.width,
				n = t.y / this.height;
				var e = Laya.stage.addChild(new Laya.Scene3D),
				i = e.addChild(new Laya.DirectionLight);
				i.color = new Laya.Vector3(1, .85, .73),
				i.transform.localRotationEuler = new Laya.Vector3( - 125, 210, 0),
				i.intensity = 1;
				var s = e.addChild(new Laya.Camera(0, .1, 1e3));
				s.transform.rotate(new Laya.Vector3( - 15, 0, 0), !1, !1),
				s.transform.translate(new Laya.Vector3(0, .6, 6)),
				s.clearColor = new Laya.Vector4(1, 1, 1, 1),
				s.clearFlag = Laya.CameraClearFlags.DepthOnly,
				s.normalizedViewport = new Laya.Viewport(a - .5, n - .5, 1, 1),
				e.addChild(new Laya.DirectionLight),
				this._skinScene = e
			}
			let a = l.getRoleSkin(t).clone(),
			n = a.getComponent(Laya.Animator);
			n && (n.speed = .25),
			a.transform.localPosition = new Laya.Vector3(0, 0, 0),
			a.transform.localScale = new Laya.Vector3(1.2, 1.2, 1.2),
			this._skinScene.addChild(a),
			this._skin = a,
			a.getChildByName("effect").active = !1,
			this.skin_name.text = l.getSkinInfo_name(t);
			let o = l.getSkinInfo_lv(t);
			this.lv1.visible = 0 == o,
			this.lv2.visible = 1 == o,
			this.lv3.visible = 2 == o,
			this.lv4.visible = 3 == o
		}
		doEnterGame(t) {
			showBannerAd();
			this.allButtonOff(),
			m.startRecord(),
			L.setMode(t),
			L.resetGame(),
			Dt.show((t, i) =>{
				1 == t && h.setStateNext(e.GameStateIndex.Game)
			},
			2),
			t === e.GameMode.Egg ? u.addProg(e.TaskIndex.Play_Egg, 1) : t === e.GameMode.Diamond ? u.addProg(e.TaskIndex.Play_Diamond, 1) : t === e.GameMode.Survival && u.addProg(e.TaskIndex.Play_Survival, 1)
		}
	}
	class Jt extends h {
		constructor() {
			super(),
			this._uiMenu = null
		}
		static instance() {
			return this._instance || (this._instance = new Jt),
			this._instance
		}
		init() {
			this._uiMenu = new qt,
			Laya.stage.addChild(this._uiMenu),
			p.playBGM("bg_ui")
		}
		release() {
			this._uiMenu.destroy(),
			this._uiMenu._skinScene.destroy()
		}
	}
	Jt._instance = null,
	function(t) {
		t[t.Gold = 0] = "Gold",
		t[t.Diamond = 1] = "Diamond",
		t[t.Sign = 2] = "Sign",
		t[t.Ad = 3] = "Ad",
		t[t.Use = 4] = "Use"
	} (jt || (jt = {}));
	class Zt extends t.Scenes.views.ViewSkinShop2UI {
		constructor() {
			super(),
			this._stateCB = null,
			this._skinIdx = -1,
			this._aniFlag = 0
		}
		onAwake() {
			this.width = Laya.stage.width * this.height / Laya.stage.height;
			this.lv1.text ="(" +Language.getName("普通") + ")";
			this.lv2.text ="(" +Language.getName("稀有") + ")";
			this.lv3.text ="(" +Language.getName("史诗") + ")";
			this.lv4.text ="(" +Language.getName("传说") + ")";
			this.btn_used_txt.text =Language.getName("正在使用");
			this.btn_use_txt.text =Language.getName("使用角色");
			this.unlock.text =Language.getName("已解锁此角色");
			this.day7.text =Language.getName("七日签到");
			this.day2.text =Language.getName("次日签到");
			this.btn_get_txt.text =Language.getName("领取");
		}
		onEnable() {}
		onDisable() {
			this.allButtonOff()
		}
		update(t) {
			0 == this._aniFlag ? this.ani1.isPlaying || (this._aniFlag = 1, this.allButtonOn(), this._stateCB && this._stateCB(1)) : 2 == this._aniFlag && (this.ani1.isPlaying || (this._aniFlag = 3, this._stateCB && this._stateCB(3), this.visible = !1))
		}
		allButtonOn() {
			this.addButtonAction(this.btn_gold),
			this.addButtonClick(this.btn_gold, jt.Gold),
			this.addButtonAction(this.btn_diamond),
			this.addButtonClick(this.btn_diamond, jt.Diamond),
			this.addButtonAction(this.btn_sign),
			this.addButtonClick(this.btn_sign, jt.Sign),
			this.addButtonAction(this.btn_ad),
			this.addButtonClick(this.btn_ad, jt.Ad),
			this.addButtonAction(this.btn_use),
			this.addButtonClick(this.btn_use, jt.Use)
		}
		allButtonOff() {
			this.btn_gold.offAll(),
			this.btn_diamond.offAll(),
			this.btn_sign.offAll(),
			this.btn_ad.offAll(),
			this.btn_use.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, "on MOUSE_DOWN"]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, "on MOUSE_UP"]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, "on MOUSE_OUT"]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, "on MOUSE_OVER"])
		}
		onButtonAciton(t, e, i = "") {
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + jt[t]);
			let i = l.getSkinInfo_price(this._skinIdx);
			t === jt.Gold ? c.addMoney(e.Money.Gold, -i, !1) ? (c.setSkinGet(this._skinIdx, !0), this.refreshShow()) : $.show(null, J.Gold, this.zOrder + 5) : t == jt.Diamond ? c.addMoney(e.Money.Diamond, -i, !1) ? (c.setSkinGet(this._skinIdx, !0), this.refreshShow()) : $.show(null, J.Diamond, this.zOrder + 5) : t == jt.Sign || (t == jt.Ad ? m.playAds_reward(0, t =>{
				0 == t ? (c.setSkinGet(this._skinIdx, !0), this.refreshShow()) : P.show(null, this.zOrder + 1, f.Ad)
			}) : t == jt.Use && (c.setSkinIdx(this._skinIdx), this.refreshShow()))
		}
		setAniOpen() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_POSITIVE,
			this.ani1.play(0, !1),
			this._aniFlag = 0,
			p.playEFM("ef_tanchu")
		}
		setAniClose() {
			this.ani1.wrapMode = Laya.AnimationBase.WRAP_REVERSE,
			this.ani1.play(0, !1),
			this._aniFlag = 2,
			this.allButtonOff()
		}
		setOpen(t, e) {
			this._skinIdx = t,
			this._stateCB = e,
			this.refreshShow(),
			this.visible = !0,
			this.setAniOpen(),
			this._stateCB && this._stateCB(0)
		}
		setClose() {
			this.setAniClose(),
			this._stateCB && this._stateCB(2)
		}
		isReady() {
			return ! this.visible || 1 == this._aniFlag
		}
		refreshShow() {
			let t = this._skinIdx,
			e = c.getSkinIdx() == t,
			i = c.isSkinGot(t),
			s = !e && !i,
			a = l.getSkinInfo_lv(t),
			n = l.getSkinInfo_priceType(t),
			o = l.getSkinInfo_price(t);
			this.skin_name.text = l.getSkinInfo_name(t),
			this.lv1.visible = 0 == a,
			this.lv2.visible = 1 == a,
			this.lv3.visible = 2 == a,
			this.lv4.visible = 3 == a,
			this.unlock.visible = i,
			this.btn_gold.visible = s && 0 == n,
			this.btn_diamond.visible = s && 1 == n,
			this.btn_ad.visible = s && 2 == n,
			this.btn_sign.visible = s && 3 == n,
			this.btn_use.visible = !e && i,
			this.btn_used.visible = e,
			this.btn_gold.visible && (this.price_gold.text = "" + o),
			this.btn_diamond.visible && (this.price_diamond.text = "" + o),
			this.btn_sign.visible && (this.day2.visible = 2 == o, this.day7.visible = 7 == o)
		}
	} !
	function(t) {
		t[t.Back = 0] = "Back",
		t[t.Gold = 1] = "Gold",
		t[t.Diamond = 2] = "Diamond"
	} (Kt || (Kt = {}));
	class $t extends t.Scenes.views.ViewSkinShopUI {
		constructor() {
			super(),
			this._showGold = 0,
			this._showDiamond = 0,
			this._onBackCB = null,
			this._skinShop2 = null,
			this._skinShop2_stateCB = null,
			this._stopTouch = !1,
			this._hitButton = !1
		}
		onAwake() {
			this.width = Laya.stage.width * this.height / Laya.stage.height
		}
		onEnable() {
			this.allButtonOn(),
			this.timer.frameLoop(1, this, this.update),
			this._skinShop2 = new Zt,
			Laya.stage.addChild(this._skinShop2),
			this._skinShop2.zOrder = this.zOrder + 1,
			this._skinShop2.visible = !1,
			this._showGold = c.getMoney(e.Money.Gold),
			this.lab_gold.text = "" + this._showGold,
			this._showDiamond = c.getMoney(e.Money.Diamond),
			this.lab_diamond.text = "" + this._showDiamond,
			this._stopTouch = !1,
			this._hitButton = !1
		}
		onDisable() {
			this.allButtonOff()
		}
		onDestroy() {
			this._skinShop2.destroy()
		}
		update() {
			let t = c.getMoney(e.Money.Gold);
			t != this._showGold && (this._showGold = t, this.lab_gold.text = "" + t),
			(t = c.getMoney(e.Money.Diamond)) != this._showDiamond && (this._showDiamond = t, this.lab_diamond.text = "" + t),
			this._skinShop2.visible && this._skinShop2.update(this.timer.delta)
		}
		allButtonOn() {
			this.addButtonAction(this.btn_back),
			this.addButtonClick(this.btn_back, Kt.Back),
			this.addButtonAction(this.btn_gold),
			this.addButtonClick(this.btn_gold, Kt.Gold),
			this.addButtonAction(this.btn_diamond),
			this.addButtonClick(this.btn_diamond, Kt.Diamond)
		}
		allButtonOff() {
			this.btn_back.offAll(),
			this.btn_gold.offAll(),
			this.btn_diamond.offAll()
		}
		addButtonAction(t, e = .9, i = 1) {
			t.on(Laya.Event.MOUSE_DOWN, this, this.onButtonAciton, [t, e, Laya.Event.MOUSE_DOWN]),
			t.on(Laya.Event.MOUSE_UP, this, this.onButtonAciton, [t, i, Laya.Event.MOUSE_UP]),
			t.on(Laya.Event.MOUSE_OUT, this, this.onButtonAciton, [t, i, Laya.Event.MOUSE_OUT]),
			t.on(Laya.Event.MOUSE_OVER, this, this.onButtonAciton, [t, e, Laya.Event.MOUSE_OVER])
		}
		onButtonAciton(t, e, i = "") {
			i === Laya.Event.MOUSE_DOWN && (this._hitButton = !0),
			t.scale(e, e)
		}
		addButtonClick(t, e) {
			t.on(Laya.Event.CLICK, this, this.onButtonClick, [e])
		}
		onButtonClick(t) {
			p.playEFM("ef_button"),
			console.log("btn clicked " + Kt[t]),
			t === Kt.Back ? this._skinShop2.visible ? this._skinShop2.isReady() && this._skinShop2.setClose() : this._onBackCB && this._onBackCB() : t === Kt.Gold ? (this._stopTouch = !0, $.show((t, e) =>{
				1 === t && (this._stopTouch = !1)
			},
			J.Gold, this.zOrder + 5)) : t == Kt.Diamond && (this._stopTouch = !0, $.show((t, e) =>{
				1 === t && (this._stopTouch = !1)
			},
			J.Diamond, this.zOrder + 5))
		}
		setOnBackCB(t) {
			this._onBackCB = t
		}
		setSelectSkin(t, e) {
			this._skinShop2_stateCB = e,
			t >= 0 && !this._skinShop2.visible && this._skinShop2.setOpen(t, t =>{
				this._skinShop2_stateCB && this._skinShop2_stateCB(t)
			})
		}
		isStopTouch() {
			return this._stopTouch
		}
	}
	class Qt extends h {
		constructor() {
			super(),
			this._scene = null,
			this._camera = null,
			this._roles = [],
			this._usedSkinIdx = -1,
			this._ray = null,
			this._hitResult = null,
			this._hitPos = null,
			this._hitIdx = -1,
			this._uiSkinShop = null,
			this._tid = -1,
			this._tsx = 0,
			this._tmx = 0,
			this._sSkinIdx = -1,
			this._sState = 0,
			this._sTimer = 0,
			this._sSp = null,
			this._sDp = null
		}
		static instance() {
			return this._instance || (this._instance = new Qt),
			this._instance
		}

		init() {
			this._scene = l._skinShopScene,
			this._camera = l._skinShopCamera,
			this._roles = [],
			Laya.stage.addChild(this._scene);
			let t = l.getSkinInfoCnt();
			for (let e = 0; e < t; e++) {
				let t = l._skinShopRoles.getChildByName("role" + (e + 1));
				this._roles.push(t),
				this.refreshSkinShow(e)
			}
			this._roles[0].getChildByName("prop").getChildByName("ui_lv").active = !1;
			this._roles[4].getChildByName("prop").getChildByName("ui_lv").active = !1;
			this._roles[8].getChildByName("prop").getChildByName("ui_lv").active = !1;
			this._roles[12].getChildByName("prop").getChildByName("ui_lv").active = !1;
			Laya.Texture2D.load("png/ui_lv1-"+ Language.language +".png",Laya.Handler.create(this,function(t){
				this._roles[0].getChildByName("prop").getChildByName("ui_lv").meshRenderer.sharedMaterials[0].albedoTexture= t;
				this._roles[0].getChildByName("prop").getChildByName("ui_lv").active = !0;
			}));
			Laya.Texture2D.load("png/ui_lv2-"+ Language.language +".png",Laya.Handler.create(this,function(t){
				this._roles[4].getChildByName("prop").getChildByName("ui_lv").meshRenderer.sharedMaterials[0].albedoTexture= t;
				this._roles[4].getChildByName("prop").getChildByName("ui_lv").active = !0;
			}));
			Laya.Texture2D.load("png/ui_lv3-"+ Language.language +".png",Laya.Handler.create(this,function(t){
				this._roles[8].getChildByName("prop").getChildByName("ui_lv").meshRenderer.sharedMaterials[0].albedoTexture= t;
				this._roles[8].getChildByName("prop").getChildByName("ui_lv").active = !0;
			}));
			Laya.Texture2D.load("png/ui_lv4-"+ Language.language +".png",Laya.Handler.create(this,function(t){
				this._roles[12].getChildByName("prop").getChildByName("ui_lv").meshRenderer.sharedMaterials[0].albedoTexture= t;
				this._roles[12].getChildByName("prop").getChildByName("ui_lv").active = !0;
			}));
			this._usedSkinIdx = c.getSkinIdx(),
			this._uiSkinShop = new $t,
			Laya.stage.addChild(this._uiSkinShop),
			this._uiSkinShop.zOrder = 1,
			this._uiSkinShop.setOnBackCB(() =>{
				0 == this._sState && (h.setStateNext(e.GameStateIndex.Menu), this._uiSkinShop.allButtonOff())
			}),
			this._uiSkinShop.box_touchMove.on(Laya.Event.MOUSE_DOWN, this, this.onTouchBegan2),
			this._uiSkinShop.box_touchMove.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMoved2),
			this._uiSkinShop.box_touchMove.on(Laya.Event.MOUSE_UP, this, this.onTouchEnded2),
			this._uiSkinShop.box_touchMove.on(Laya.Event.MOUSE_OUT, this, this.onTouchEnded2),
			this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)),
			this._hitResult = new Laya.HitResult,
			this._hitPos = new Laya.Vector2(0, 0),
			this._hitIdx = -1,
			this._tid = -1,
			this._tsx = 0,
			this.initSelect(),
			p.playBGM("bg_ui")

		}
		release() {
			this._uiSkinShop.box_touchMove.offAll(),
			this._scene.removeSelf(),
			this._uiSkinShop.destroy()
		}
		update(t) {
			this.updateSelect(t)
		}
		onTouchBegan2(t) {
			if (0 != this._sState || this._uiSkinShop.isStopTouch()) return;
			let e = Laya.MouseManager.instance.mouseX,
			i = Laya.MouseManager.instance.mouseY;
			if (this._hitIdx = -1, this._hitPos.x = e, this._hitPos.y = i, this._camera.viewportPointToRay(this._hitPos, this._ray), this._scene.physicsSimulation.rayCast(this._ray, this._hitResult), this._hitResult.succeeded) {
				let t = this._hitResult.collider,
				e = t.owner.name;
				if ("ui_btn" === e && (e = t.owner.parent.parent.name), console.log("began hit ", t.owner.name, e), "role" === e.substr(0, 4)) {
					let t = parseInt(e.substr(4));
					console.log("began select idx = ", t),
					this._hitIdx = t
				}
			}
			t.touchId >= 0 && this._tid < 0 && (this._tid = t.touchId, this._tsx = e, this._tmx = 0)
		}
		onTouchMoved2(t) {
			if (0 != this._sState || this._uiSkinShop.isStopTouch()) return;
			let e = Laya.MouseManager.instance.mouseX;
			Laya.MouseManager.instance.mouseY;
			if (t.touchId == this._tid) {
				let t = this._camera.transform,
				i = .01 * (this._tsx - e),
				s = t.localPositionX - i;
				t.localPositionX = s > 0 ? 0 : s < -21 ? -21 : s,
				this._tmx += Math.abs(this._tsx - e),
				this._tsx = e
			}
		}
		onTouchEnded2(t) {
			if (0 != this._sState) return;
			let e = Laya.MouseManager.instance.mouseX,
			i = Laya.MouseManager.instance.mouseY,
			s = this._hitIdx;
			if (this._hitIdx = -1, this._tmx < 10 && s >= 0 && !this._uiSkinShop.isStopTouch() && (this._hitPos.x = e, this._hitPos.y = i, this._camera.viewportPointToRay(this._hitPos, this._ray), this._scene.physicsSimulation.rayCast(this._ray, this._hitResult), this._hitResult.succeeded)) {
				let t = this._hitResult.collider,
				e = t.owner.name;
				if ("ui_btn" === e && (e = t.owner.parent.parent.name), console.log("ended hit ", t.owner.name, e), "role" === e.substr(0, 4)) {
					let t = parseInt(e.substr(4));
					console.log("ended select idx = ", t),
					t === s && this.setSelect(s - 1)
				}
			}
			t.touchId == this._tid && (this._tid = -1, this._tsx = 0)
		}

		refreshSkinShow(t) {
			let e = c.getSkinIdx() == t,
			i = c.isSkinGot(t),
			s = this._roles[t]
			a = s.getChildByName("prop").getChildByName("ui_btn");
			a.getChildByName("ui_have").active = !1;
			a.getChildByName("ui_lock").active = !1;
			a.getChildByName("ui_use").active = !1;
			
			Laya.Texture2D.load("png/ui_have-"+ Language.language +".png",Laya.Handler.create(this,function(t){
				a.getChildByName("ui_have").meshRenderer.sharedMaterials[0].albedoTexture= t;
			}));
			Laya.Texture2D.load("png/ui_lock-"+ Language.language +".png",Laya.Handler.create(this,function(t){
				a.getChildByName("ui_lock").meshRenderer.sharedMaterials[0].albedoTexture= t;
				
			}));
			Laya.Texture2D.load("png/ui_use-"+ Language.language +".png",Laya.Handler.create(this,function(t){
				a.getChildByName("ui_use").meshRenderer.sharedMaterials[0].albedoTexture= t;
			}));
			
	
			s.getChildByName("prop1").getChildByName("light").active = e;
			let n = s.getChildByName("root").getComponent(Laya.Animator);
			n && (n.speed = .5)
			a.getChildByName("ui_have").active = !e && i;
			a.getChildByName("ui_lock").active = !e && !i;
			a.getChildByName("ui_use").active = e;
		}
		initSelect() {
			this._sSkinIdx = -1,
			this._sState = 0,
			this._sTimer = 0,
			this._sSp = new Laya.Vector3(0, 0, 0),
			this._sDp = new Laya.Vector3(0, 0, 0);
			let t = this._camera.transform;
			t.localPosition = new Laya.Vector3(0, 6, -8.5),
			t.localRotationEuler = new Laya.Vector3( - 60, 180, 0)
		}
		setSelect(t) {
			t >= 0 && 0 === this._sState ? (this._sSkinIdx = t, this._sState = 1, this._sTimer = 0) : t < 0 && 10 === this._sState && (this._sState = 11, this._sTimer = 0)
		}
		updateSelect(t) {
			if (0 !== this._sState && 10 !== this._sState) if (this._sTimer += t, 1 === this._sState) {
				this._sState = 2,
				this._sTimer = 0;
				let t = this._camera.transform.localPosition,
				e = this._roles[this._sSkinIdx].transform.localPosition;
				this._sSp.setValue(t.x, t.y, t.z),
				this._sDp.setValue(e.x - 2.5, e.y + 5, e.z - 2);
				for (let t = 0; t < this._roles.length; t++) if (this._roles[t].active = t === this._sSkinIdx, t === this._sSkinIdx) {
					this._roles[t].getChildByName("prop").active = !1
				}
			} else if (2 === this._sState) {
				let t = this._sTimer / 300;
				t >= 1 && (t = 1, this._sState = 3, this._sTimer = 0);
				let e = this._sSp.x + (this._sDp.x - this._sSp.x) * t,
				i = this._sSp.y + (this._sDp.y - this._sSp.y) * t,
				s = this._sSp.z + (this._sDp.z - this._sSp.z) * t;
				this._camera.transform.localPosition;
				let a = this._camera.transform,
				n = a.localPosition;
				n.setValue(e, i, s),
				a.localPosition = n;
				let o = -10 * t - 60;
				a.localRotationEulerX = o
			} else if (3 === this._sState) this._sState = 10,
			this._sTimer = 0,
			this._uiSkinShop.setSelectSkin(this._sSkinIdx, t =>{
				3 == t && this.setSelect( - 1)
			});
			else if (11 === this._sState) {
				let t = this._sTimer / 300;
				t >= 1 && (t = 1, this._sState = 12, this._sTimer = 0),
				t = 1 - t;
				let e = this._sSp.x + (this._sDp.x - this._sSp.x) * t,
				i = this._sSp.y + (this._sDp.y - this._sSp.y) * t,
				s = this._sSp.z + (this._sDp.z - this._sSp.z) * t;
				this._camera.transform.localPosition;
				let a = this._camera.transform,
				n = a.localPosition;
				n.setValue(e, i, s),
				a.localPosition = n;
				let o = -10 * t - 60;
				a.localRotationEulerX = o
			} else if (12 === this._sState) {
				for (let t = 0; t < this._roles.length; t++) if (this._roles[t].active = !0, t === this._sSkinIdx) {
					this._roles[t].getChildByName("prop").active = !0
				}
				this.refreshSkinShow(this._sSkinIdx),
				this.refreshSkinShow(this._usedSkinIdx),
				this._usedSkinIdx = c.getSkinIdx(),
				this._sState = 0,
				this._sTimer = 0,
				this._sSkinIdx = -1
			} else this._sState
		}
	}
	Qt._instance = null;
	var te = e.GameStateIndex;
	class ee extends t.Scenes.SceneMainUI {
		constructor() {
			super(),
			this._inputRegister = !1
		}
		onAwake(){
			if(typeof hg != "undefined"){
				hg.gameLoadResult && hg.gameLoadResult({ code : 0})
			}
		}
		onEnable() {
			this._inputRegister || (this._inputRegister = !0, 
				Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTouchBegan), 
				Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMoved), 
				Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onTouchEnded), 
				Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onTouchEnded), 
				Laya.stage.on(Laya.Event.FOCUS, this, () =>{
				console.log("FOCUS")
			})),
			
			
			
			this.timer.frameLoop(1, this, this.update),
			h.setStateNext(te.Loading)
		}
		
		onDisable() {
			this._inputRegister && (this._inputRegister = !1, Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onTouchBegan), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onTouchMoved), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onTouchEnded), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onTouchEnded))
		}
		update() {
			if (h._stateIdx_cur != h._stateIdx_nxt) {
				let t = h._stateIdx_nxt;
				h._stateIdx_cur = t;
				let e = h._state;
				h._state = null,
				e && (e.release(), e = null),
				t === te.Loading ? e = Lt.instance() : t === te.Menu ? e = Jt.instance() : t === te.SkinShop ? e = Qt.instance() : t === te.Game && (e = Mt.instance()),
				e && (e.init(), h._state = e)
			}
			h._state && h._state.update(this.timer.delta),
			_.updateAll(this.timer.delta)
		}
		onTouchBegan(t) {
			h._state && h._state.onTouchBegan(t)
		}
		onTouchMoved(t) {
			h._state && h._state.onTouchMoved(t)
		}
		onTouchEnded(t) {
			h._state && h._state.onTouchEnded(t)
		}
		
	}
	class ie {
		constructor() {}
		static init() { (0, Laya.ClassUtils.regClass)("Scripts/SceneMain.ts", ee)
		}
	}
	ie.width = 1600,
	ie.height = 720,
	ie.scaleMode = "fixedheight",
	ie.screenMode = "horizontal",
	ie.alignV = "middle",
	ie.alignH = "center",
	ie.startScene = "Scenes/SceneMain.scene",
	ie.sceneRoot = "",
	ie.debug = !1,
	ie.stat = !1,
	ie.physicsDebug = !1,
	ie.exportSceneToJson = !0,
	ie.init();
	new class {
		constructor() {
			window.Laya3D ? Laya3D.init(ie.width, ie.height) : Laya.init(ie.width, ie.height, Laya.WebGL),
			Laya.Physics && Laya.Physics.enable(),
			Laya.DebugPanel && Laya.DebugPanel.enable(),
			Laya.stage.scaleMode = ie.scaleMode,
			Laya.stage.screenMode = ie.screenMode,
			Laya.stage.alignV = ie.alignV,
			Laya.stage.alignH = ie.alignH,
			Laya.URL.exportSceneToJson = ie.exportSceneToJson,
			(ie.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
			ie.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
			ie.stat && Laya.Stat.show(),
			Laya.alertGlobalError(!0),
			Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
			
		}
		onVersionLoaded() {
			console.log("==========>fileconfig-"+Language.language+".json")
			Laya.AtlasInfoManager.enable("fileconfig-"+Language.language+".json", Laya.Handler.create(this, this.onConfigLoaded))
		}
		onConfigLoaded() {
			ie.startScene && Laya.Scene.open(ie.startScene)
		}
	}
} ();