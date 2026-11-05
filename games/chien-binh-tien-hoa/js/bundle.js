(function () {
    'use strict';

    var View = Laya.View;
    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var item;
        (function (item) {
            class ChestItemUI extends Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(ChestItemUI.uiView);
                }
            }
            ChestItemUI.uiView = { "type": "Scene", "props": { "width": 175, "height": 176 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 175, "var": "bg1", "skin": "images/chestBox/chouj_di1.png", "height": 176 }, "compId": 3 }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 175, "var": "bg2", "skin": "images/chestBox/chouj_di2.png", "height": 176 }, "compId": 4 }, { "type": "Image", "props": { "y": 95, "x": 87.5, "width": 161, "var": "bxtp", "skin": "images/chestBox/box1.png", "pivotY": 60, "pivotX": 81, "height": 119 }, "compId": 5, "child": [{ "type": "Image", "props": { "y": 44, "x": 80.5, "width": 97, "var": "videotp", "skin": "images/chestBox/sp_icon.png", "scaleY": 0.5, "scaleX": 0.5, "pivotY": 25, "pivotX": 34, "height": 67 }, "compId": 8 }] }, { "type": "Image", "props": { "y": 73, "x": 87.5, "width": 103, "var": "zstp", "skin": "images/icon_zanshi.png", "scaleY": 0.7, "scaleX": 0.7, "pivotY": 46, "pivotX": 52, "height": 103 }, "compId": 6 }, { "type": "Label", "props": { "y": 123, "x": 87.5, "width": 150, "var": "numlabel", "valign": "middle", "strokeColor": "#000000", "stroke": 3, "pivotY": 15, "pivotX": 75, "height": 30, "fontSize": 30, "color": "#ffffff", "align": "center" }, "compId": 7 }], "loadList": ["images/chestBox/chouj_di1.png", "images/chestBox/chouj_di2.png", "images/chestBox/box1.png", "images/chestBox/sp_icon.png", "images/icon_zanshi.png"], "loadList3D": [] };
            item.ChestItemUI = ChestItemUI;
            REG("ui.item.ChestItemUI", ChestItemUI);
            class FoodItemUI extends Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(FoodItemUI.uiView);
                }
            }
            FoodItemUI.uiView = { "type": "Scene", "props": { "width": 120, "height": 140 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 65, "x": 60, "width": 120, "var": "icon2", "name": "icon2", "height": 120, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 5 }, { "type": "Image", "props": { "y": 24, "x": 15, "width": 89, "visible": false, "var": "jinzhi", "skin": "images/icon_jz.png", "name": "jinzhi", "height": 92 }, "compId": 6 }, { "type": "Sprite", "props": { "y": 106, "x": 37, "texture": "images/choujiang/cj_jd2.png" }, "compId": 3, "child": [{ "type": "Label", "props": { "y": 4, "x": 5, "width": 34, "var": "shuliang_txt", "text": "X3", "name": "shuliang_txt", "height": 16, "fontSize": 18, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" }, "compId": 4 }] }], "loadList": ["images/icon_jz.png", "images/choujiang/cj_jd2.png"], "loadList3D": [] };
            item.FoodItemUI = FoodItemUI;
            REG("ui.item.FoodItemUI", FoodItemUI);
            class GoodsItemUI extends Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(GoodsItemUI.uiView);
                }
            }
            GoodsItemUI.uiView = { "type": "Scene", "props": { "width": 190, "scaleY": 1, "scaleX": 1, "height": 215 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 3, "x": 3, "width": 184, "var": "bg", "skin": "images/shop/pf_di1.png", "name": "bg", "height": 209 }, "compId": 4 }, { "type": "Image", "props": { "y": 5, "x": 6, "width": 197, "var": "icon2", "scaleY": 0.9, "scaleX": 0.9, "name": "icon2", "height": 226 }, "compId": 5 }, { "type": "Sprite", "props": { "y": 163, "x": 0, "width": 190, "var": "dowm", "name": "dowm", "height": 50 }, "compId": 12, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "images/shop/lab_lanse.png", "scaleY": 1, "scaleX": 1, "name": "lanse" }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 21, "x": 88, "var": "zhuangtai", "skin": "images/shop/whq.png", "scaleY": 1, "scaleX": 1, "name": "zhuangtai", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 33 }] }] }, { "type": "Image", "props": { "y": 3, "x": 3, "width": 184, "visible": false, "var": "qmask", "sizeGrid": "26,24,28,16", "name": "qmask", "height": 209, "alpha": 1 }, "compId": 35, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 184, "skin": "images/qiand_dik22.png", "sizeGrid": "26,24,28,16", "name": "zz", "height": 209, "alpha": 0.7 }, "compId": 37 }, { "type": "Label", "props": { "y": 89, "x": 2, "width": 179, "var": "dengji_txt", "text": "Đã mở khóa cấp độ 10", "name": "dengji_txt", "height": 30, "fontSize": 30, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" }, "compId": 36 }] }, { "type": "Image", "props": { "y": 0, "x": 106, "var": "biaoqian", "skin": "images/shop/lab_cg.png", "name": "biaoqian" }, "compId": 34 }, { "type": "Sprite", "props": { "y": 9, "x": 12, "width": 25, "visible": false, "var": "buff", "texture": "images/icon_zanshi.png", "name": "buff", "height": 25 }, "compId": 40, "child": [{ "type": "Text", "props": { "y": 6, "x": 28, "width": 62, "var": "subjoinCoin_txt", "text": "+1.1%", "stroke": 2, "name": "subjoinCoin_txt", "height": 15, "fontSize": 18, "font": "Arial", "color": "#fffd3c", "bold": true, "align": "left", "runtime": "Laya.Text" }, "compId": 39 }] }], "loadList": ["images/shop/pf_di1.png", "images/shop/lab_lanse.png", "images/shop/whq.png", "images/qiand_dik22.png", "images/shop/lab_cg.png", "images/icon_zanshi.png"], "loadList3D": [] };
            item.GoodsItemUI = GoodsItemUI;
            REG("ui.item.GoodsItemUI", GoodsItemUI);
            class NumAUI extends Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(NumAUI.uiView);
                }
            }
            NumAUI.uiView = { "type": "Scene", "props": { "width": 200, "height": 50 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 25, "x": 100, "width": 200, "var": "pp", "name": "pp", "height": 50, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4, "child": [{ "type": "Label", "props": { "y": 9, "x": 52, "width": 95, "var": "num_ys", "text": "+35", "strokeColor": "#ffffff", "stroke": 5, "name": "num_ys", "height": 31, "fontSize": 40, "font": "Arial", "color": "#ff0033", "bold": true, "align": "center" }, "compId": 3 }] }], "loadList": [], "loadList3D": [] };
            item.NumAUI = NumAUI;
            REG("ui.item.NumAUI", NumAUI);
            class SignItemUI extends Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(SignItemUI.uiView);
                }
            }
            SignItemUI.uiView = { "type": "Scene", "props": { "width": 445, "runtime": "script/item/SignItem.ts", "height": 146 }, "compId": 2, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 445, "height": 145, "centerY": 0, "centerX": 0 }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 1, "x": 1, "width": 442, "var": "bg1", "skin": "images/qiandao/qiandao_di2.png", "sizeGrid": "60,25,60,25", "name": "bg1", "height": 143 }, "compId": 8, "child": [{ "type": "Image", "props": { "y": 71, "x": 221, "width": 123, "var": "icon", "skin": "images/icon_zanshi.png", "scaleY": 1, "scaleX": 1, "name": "icon", "height": 123, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 9 }, { "type": "Image", "props": { "y": -1, "x": 157, "width": 127, "var": "icon2", "name": "icon2", "height": 145 }, "compId": 11 }] }, { "type": "Label", "props": { "y": 113, "x": 178, "width": 88, "var": "gold_txt", "text": "100", "name": "gold_txt", "height": 32, "fontSize": 25, "font": "Arial", "color": "#ffffff", "bold": false, "align": "center" }, "compId": 6 }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 444, "var": "gou", "skin": "images/qiandao/yqd_zhez.png", "sizeGrid": "29,35,22,32", "name": "gou", "height": 145 }, "compId": 12, "child": [{ "type": "Sprite", "props": { "y": 15, "x": 179, "texture": "images/qiandao/lab_yqd.png" }, "compId": 13 }, { "type": "Image", "props": { "y": -1, "x": -1, "width": 446, "skin": "images/qiandao/fenx_mb.png", "sizeGrid": "22,23,19,29", "height": 146 }, "compId": 14 }] }] }, { "type": "Sprite", "props": { "y": 2.5, "x": -2, "texture": "images/day/7day.png" }, "compId": 10 }], "loadList": ["images/qiandao/qiandao_di2.png", "images/icon_zanshi.png", "images/qiandao/yqd_zhez.png", "images/qiandao/lab_yqd.png", "images/qiandao/fenx_mb.png", "images/day/7day.png"], "loadList3D": [] };
            item.SignItemUI = SignItemUI;
            REG("ui.item.SignItemUI", SignItemUI);
            class SignItem1UI extends Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(SignItem1UI.uiView);
                }
            }
            SignItem1UI.uiView = { "type": "Scene", "props": { "width": 200, "runtime": "script/item/SignItem1.ts", "height": 200 }, "compId": 2, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 200, "height": 200 }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 27, "x": 27, "var": "bg1", "skin": "images/qiandao/qiandao_di.png", "name": "bg1" }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 75, "width": 109, "var": "icon", "skin": "images/icon_zanshi.png", "scaleY": 0.9, "scaleX": 0.9, "name": "icon", "height": 109, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 5 }, { "type": "Image", "props": { "y": -1, "x": 8, "width": 129, "visible": false, "var": "icon2", "name": "icon2", "height": 146 }, "compId": 10 }] }, { "type": "Image", "props": { "y": 25, "x": 25, "width": 150, "var": "gou", "skin": "images/qiandao/yqd_zhez.png", "sizeGrid": "29,35,22,32", "name": "gou", "height": 150 }, "compId": 4, "child": [{ "type": "Sprite", "props": { "y": 22, "x": 32, "texture": "images/qiandao/lab_yqd.png" }, "compId": 11 }, { "type": "Image", "props": { "y": -1, "x": -1, "width": 152, "skin": "images/qiandao/fenx_mb.png", "sizeGrid": "22,23,19,29", "height": 152 }, "compId": 13 }] }, { "type": "Label", "props": { "y": 145, "x": 56, "width": 88, "var": "gold_txt", "text": "100", "name": "gold_txt", "height": 32, "fontSize": 25, "font": "Arial", "color": "#ffffff", "align": "center" }, "compId": 6 }] }], "loadList": ["images/qiandao/qiandao_di.png", "images/icon_zanshi.png", "images/qiandao/yqd_zhez.png", "images/qiandao/lab_yqd.png", "images/qiandao/fenx_mb.png"], "loadList3D": [] };
            item.SignItem1UI = SignItem1UI;
            REG("ui.item.SignItem1UI", SignItem1UI);
        })(item = ui.item || (ui.item = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var views;
        (function (views) {
            class ChestViewUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/ChestView");
                }
            }
            views.ChestViewUI = ChestViewUI;
            REG("ui.views.ChestViewUI", ChestViewUI);
            class GameUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/Game");
                }
            }
            views.GameUI = GameUI;
            REG("ui.views.GameUI", GameUI);
            class GetSkinPanelUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/GetSkinPanel");
                }
            }
            views.GetSkinPanelUI = GetSkinPanelUI;
            REG("ui.views.GetSkinPanelUI", GetSkinPanelUI);
            class HomeUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/Home");
                }
            }
            views.HomeUI = HomeUI;
            REG("ui.views.HomeUI", HomeUI);
            class InitViewUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/InitView");
                }
            }
            views.InitViewUI = InitViewUI;
            REG("ui.views.InitViewUI", InitViewUI);
            class LoadViewUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/LoadView");
                }
            }
            views.LoadViewUI = LoadViewUI;
            REG("ui.views.LoadViewUI", LoadViewUI);
            class LotteryViewUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/LotteryView");
                }
            }
            views.LotteryViewUI = LotteryViewUI;
            REG("ui.views.LotteryViewUI", LotteryViewUI);
            class RockerUI extends View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(RockerUI.uiView);
                }
            }
            RockerUI.uiView = { "type": "View", "props": { "width": 100, "runtime": "script/views/RockerView.ts", "height": 100 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 100, "texture": "images/btn/dian_blue.png", "name": "bg", "height": 100 }, "compId": 3, "child": [{ "type": "Sprite", "props": { "y": 51, "x": 51, "var": "knob", "texture": "images/btn/dian_blue.png", "pivotY": 25, "pivotX": 25 }, "compId": 4 }] }], "loadList": ["images/btn/dian_blue.png"], "loadList3D": [] };
            views.RockerUI = RockerUI;
            REG("ui.views.RockerUI", RockerUI);
            class SettlementViewUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/SettlementView");
                }
            }
            views.SettlementViewUI = SettlementViewUI;
            REG("ui.views.SettlementViewUI", SettlementViewUI);
            class ShopViewUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/ShopView");
                }
            }
            views.ShopViewUI = ShopViewUI;
            REG("ui.views.ShopViewUI", ShopViewUI);
            class SignViewUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/SignView");
                }
            }
            views.SignViewUI = SignViewUI;
            REG("ui.views.SignViewUI", SignViewUI);
            class StockoutViewUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/StockoutView");
                }
            }
            views.StockoutViewUI = StockoutViewUI;
            REG("ui.views.StockoutViewUI", StockoutViewUI);
            class TrialViewUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("views/TrialView");
                }
            }
            views.TrialViewUI = TrialViewUI;
            REG("ui.views.TrialViewUI", TrialViewUI);
        })(views = ui.views || (ui.views = {}));
    })(ui || (ui = {}));

    var AcquireType;
    (function (AcquireType) {
        AcquireType[AcquireType["none"] = 0] = "none";
        AcquireType[AcquireType["video"] = 1] = "video";
        AcquireType[AcquireType["gold"] = 2] = "gold";
        AcquireType[AcquireType["level"] = 3] = "level";
        AcquireType[AcquireType["sign"] = 4] = "sign";
        AcquireType[AcquireType["lottery"] = 5] = "lottery";
    })(AcquireType || (AcquireType = {}));
    var ItemType;
    (function (ItemType) {
        ItemType[ItemType["gold"] = 1] = "gold";
        ItemType[ItemType["player"] = 2] = "player";
        ItemType[ItemType["ring"] = 3] = "ring";
        ItemType[ItemType["energy"] = 4] = "energy";
    })(ItemType || (ItemType = {}));
    class signData {
        constructor() {
            this.id = 0;
            this.isDouble = false;
            this.isSign = 0;
            this.day = 0;
            this.type = ItemType.gold;
            this.numberof = 0;
            this.icon = "";
            this.name = "";
        }
    }
    class ItemData {
        constructor() {
            this.id = 0;
            this.classify = 0;
            this.name = "";
            this.type = ItemType.player;
            this.acquireType = AcquireType.gold;
            this.progress = 0;
            this.icon = "";
            this.price = 0;
            this.introduce = "";
            this.clothes = "";
            this.unlockImg = [];
            this.era = 1;
        }
    }
    var A = "A";
    var goodsConfig = [
        {
            id: 100,
            classify: 0,
            name: "",
            type: ItemType.player,
            acquireType: AcquireType.level,
            progress: 10,
            icon: "sub2/icon/1.png",
            price: 500,
            model: "lv1",
            era: 1,
            clothes: "sub2/skin/tex2.png",
            unlockImg: ["sub2/big/1.png", "sub2/big/1_1.png"]
        },
        {
            id: 102,
            classify: 0,
            name: "",
            type: ItemType.player,
            acquireType: AcquireType.level,
            progress: 20,
            icon: "sub2/icon/3.png",
            price: 500,
            model: "lv3",
            era: 3,
            clothes: "sub2/skin/tex1.png",
            unlockImg: ["sub2/big/3.png", "sub2/big/3_1.png"]
        },
        {
            id: 103,
            classify: 0,
            name: "",
            type: ItemType.player,
            acquireType: AcquireType.level,
            progress: 30,
            icon: "sub2/icon/4.png",
            price: 500,
            model: "lv4",
            era: 4,
            clothes: "sub2/skin/tex1.png",
            unlockImg: ["sub2/big/4.png", "sub2/big/4_1.png"]
        },
        {
            id: 104,
            classify: 0,
            name: "",
            type: ItemType.player,
            acquireType: AcquireType.level,
            progress: 40,
            icon: "sub2/icon/5.png",
            price: 500,
            model: "lv5",
            era: 5,
            clothes: "sub2/skin/tex1.png",
            unlockImg: ["sub2/big/5.png", "sub2/big/5_1.png"]
        },
        {
            id: 105,
            classify: 0,
            name: "",
            type: ItemType.player,
            acquireType: AcquireType.level,
            progress: 50,
            icon: "sub2/icon/6.png",
            price: 500,
            model: "lv6",
            era: 6,
            clothes: "sub2/skin/tex2.png",
            unlockImg: ["sub2/big/6.png", "sub2/big/6_1.png"]
        },
        {
            id: 106,
            classify: 0,
            name: "",
            type: ItemType.player,
            acquireType: AcquireType.level,
            progress: 60,
            icon: "sub2/icon/7.png",
            price: 500,
            model: "lv7",
            era: 7,
            clothes: "sub2/skin/tex3.png",
            unlockImg: ["sub2/big/7.png", "sub2/big/7_1.png"]
        },
        {
            id: 107,
            classify: 0,
            name: "",
            type: ItemType.player,
            acquireType: AcquireType.level,
            progress: 70,
            icon: "sub2/icon/8.png",
            price: 500,
            model: "lv8",
            era: 8,
            clothes: "sub2/skin/tex2.png",
            unlockImg: ["sub2/big/8.png", "sub2/big/8_1.png"]
        },
        {
            id: 108,
            classify: 0,
            name: "",
            type: ItemType.player,
            acquireType: AcquireType.level,
            progress: 80,
            icon: "sub2/icon/9.png",
            price: 500,
            model: "lv9",
            era: 9,
            clothes: "sub2/skin/tex3.png",
            unlockImg: ["sub2/big/9.png", "sub2/big/9_1.png"]
        },
        {
            id: 109,
            classify: 0,
            name: "",
            type: ItemType.player,
            acquireType: AcquireType.level,
            progress: 90,
            icon: "sub2/icon/10.png",
            price: 500,
            model: "lv10",
            era: 10,
            clothes: "sub2/skin/tex1.png",
            unlockImg: ["sub2/big/10.png", "sub2/big/10_1.png"]
        },
    ];
    var goodsConfig2 = {};
    for (let index = 0; index < goodsConfig.length; index++) {
        var data = goodsConfig[index];
        goodsConfig2[data.id] = data;
    }
    var Z = "Z";
    class ConfigData {
    }
    ConfigData.gold = 0;
    ConfigData.IsIphoneX = false;
    ConfigData.IsIphone = false;
    ConfigData.PhoneMsg = {};
    ConfigData.ServerUrl = "";
    ConfigData.apiKey = "GucaK5vyW94Zu6YH";
    ConfigData.LoginCode = "";
    ConfigData.SceneId = "";
    ConfigData.Query = {};
    ConfigData.ReferrerInfo = {};
    ConfigData.EncryptedData = "";
    ConfigData.Iv = "";
    ConfigData.maxLevel = 9999;
    ConfigData.channel = 15;
    ConfigData.videoGold = 800;
    ConfigData.videoRnergy = 15;
    ConfigData.gameName = "weilaizhanshi";
    ConfigData.levelData = {
        21: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        1: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d50", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d150", 0, 0],
            [0, 0, 0, 0, 0, ["a+50", "a+350"], 0, 0, "d120", 0, 0, ["a+250", "a+150"], 0, 0, 0, 0, 0, ["a*2", "a+200"], 0, 0, 0, 0, 0, ["a*1", "a+350"], 0, 0, 0, 0, 0, Z],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d100", 0, 0, 0, 0, "a+50", 0, 0, 0, 0, 0, "d200", 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        2: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, "d100", 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, "d150", 0, 0, 0, 0, 0, 0, "a+200", 0, 0, 0],
            [0, 0, 0, 0, 0, ["a*2", "a*5"], 0, 0, 0, 0, 0, ["a+200", "b-100"], 0, 0, 0, 0, 0, ["a+150", "a+300"], 0, 0, 0, 0, 0, ["b-400", "a*2"], 0, 0, "d200", 0, 0, ["a+500", "a+350"], 0, 0, 0, 0, 0, Z],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, "d100", 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        3: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, "d350", 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, "d100", 0, 0, 0, 0, 0, "d150", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, "aa+200", 0, 0, 0, 0, 0, "aa+400", 0, 0, 0, 0, 0, ["b-100", "b-300"], 0, 0, 0, 0, 0, ["b-200", "b÷2"], 0, 0, "d150", 0, 0, ["a+350", "a*2"], 0, 0, 0, 0, 0, ["a*3", "a+500"], 0, 0, 0, 0, 0, Z],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, "d150", 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, "d350", 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d400", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        4: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, "d500", 0, 0, 0, 0, 0, 0, "d500", 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, ["a+600", "a*5"], 0, 0, 0, "d200", 0, "c*3", 0, "d100", 0, 0, 0, ["b-200", "b-300"], 0, 0, 0, 0, 0, ["a+300", "a+500"], 0, 0, "d400", 0, 0, ["a+500", "a*3"], 0, 0, 0, "d300", 0, ["b÷5", "a+750"], 0, 0, 0, 0, 0, Z],
            [0, 0, 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        5: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d300", 0, "d150", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, "d100", 0, "d100", 0, 0, 0, "d300", 0, "d100", 0, 0, 0, 0, "d150", "d150", 0, 0, 0, 0, 0, 0, 0, 0, 0, "d300", "d400", "d200", 0, 0, 0, "d600", 0, "d200", 0, 0, 0, 0, "d600", 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, ["a+600", "a*6"], 0, 0, "d100", 0, 0, ["a+1200", "a+1600"], 0, "d300", 0, "d200", 0, "c*3", 0, 0, 0, 0, 0, ["b÷2", "b÷1"], 0, 0, "d200", 0, 0, ["a+2000", "a*2"], 0, 0, 0, 0, 0, ["b-400", "a+1000"], 0, 0, 0, 0, 0, ["a+2200", "a*2"], 0, 0, 0, 0, 0, ["b÷3", "b-50"], 0, 0, 0, 0, 0, "Z3"],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, "d100", 0, "d150", 0, 0, 0, 0, "d200", "d100", 0, 0, 0, 0, 0, 0, 0, 0, 0, "d300", "d100", "d200", 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, "d500", 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d200", 0, "d300", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        6: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, "d150", 0, "a+400", 0, 0, 0, "d200", 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, "d250", 0, 0, 0, "d200", 0, "d150", 0, 0, 0, 0, 0, "d150", 0, 0, 0, "d250", 0, 0, 0, 0, 0, 0, "d150", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d450", 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, ["a+400", "a+800"], 0, "d200", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "c*3", 0, "d200", 0, 0, 0, ["a*1", "b÷2"], 0, 0, "d100", 0, 0, "aa+600", 0, "d250", 0, 0, "d350", "bb÷2", 0, 0, 0, 0, 0, ["a*3", "a*2"], 0, "d350", 0, 0, 0, ["b-1000", "b-2000"], 0, "d150", 0, 0, 0, ["b÷1", "b-1000"], 0, "d150", 0, 0, 0, ["b÷2", "a+500"], 0, 0, 0, 0, 0, Z],
            [0, 0, 0, 0, 0, 0, 0, 0, "d100", 0, 0, 0, 0, 0, "d150", 0, 0, "a*2", 0, 0, "d250", 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, "d350", 0, 0, 0, 0, 0, "d350", 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        7: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, "d200", 0, "d200", 0, 0, 0, 0, 0, "d500", 0, 0, 0, 0, "d500", 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, "d200", "d600", 0, 0, 0, "d600", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, "aa*10", 0, 0, "d300", 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, "d200", 0, "d600", 0, ["b÷2", "b-800"], 0, 0, 0, "d600", 0, ["a+6400", "a+4600"], 0, 0, 0, "d600", 0, ["b÷4", "b-400"], 0, 0, "d500", 0, 0, "aa*2", 0, "d600", 0, 0, 0, ["b÷2", "b-200"], 0, 0, 0, 0, 0, Z],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "b-4640", 0, 0, 0, "d150", 0, "a*3", 0, 0, "d150", 0, 0, 0, 0, 0, "d150", 0, 0, 0, 0, 0, "d150", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d400", 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        8: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d500", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, "a+600", 0, "d600", 0, 0, 0, 0, 0, 0, "d500", 0, 0, "b-2000", 0, 0, 0, "d300", 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, "d600", 0, 0, 0, 0, 0, "d600", 0, 0, 0, 0, 0, "d600", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, ["a*18", "a+1800"], 0, 0, 0, "d200", 0, 0, 0, 0, 0, 0, 0, "aa*2", 0, 0, 0, "d600", 0, 0, 0, "d300", 0, 0, 0, "c*3", 0, "d300", 0, "d300", 0, "aa+500", 0, "d300", 0, 0, 0, ["b÷2", "b-2000"], 0, 0, 0, 0, 0, ["b÷2", "b÷1"], 0, 0, "d500", 0, 0, ["a+2400", "a+600"], 0, 0, "d500", 0, 0, ["a+5000", "a*3"], 0, 0, "d500", 0, 0, ["b÷2", "a+300"], 0, 0, 0, 0, 0, Z],
            [0, 0, 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, "d150", 0, 0, 0, 0, 0, "d150", 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, "d250", 0, "d250", 0, 0, 0, "d250", 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, "d200", 0, "d200", 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        9: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d500", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d600", 0, 0, 0, 0, 0, "d600", 0, 0, 0, 0, 0, "d600", 0, 0, 0, 0, 0, 0, "d300", 0, 0, "a+750", 0, 0, "d300", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, "aa+700", 0, "d200", 0, "d200", 0, "aa+500", 0, 0, 0, "d200", 0, "a*3", 0, 0, 0, "d200", 0, 0, 0, 0, "d250", "d200", 0, ["a*1", "a*2"], 0, "d300", 0, 0, 0, 0, 0, "d300", 0, 0, 0, "bb÷2", 0, "d300", 0, 0, 0, ["b÷2", "b÷1"], 0, "d300", 0, 0, 0, ["a+400", "a*2"], 0, "d300", 0, 0, 0, ["b÷2", "a+300"], 0, 0, "d300", 0, 0, ["a+300", "b÷3"], 0, 0, 0, 0, 0, Z],
            [0, 0, 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, "d150", 0, 0, 0, 0, 0, "d150", 0, 0, "a+500", 0, 0, 0, 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, "d250", "d450", 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d450", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        10: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d500", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, "d200", 0, 0, 0, 0, 0, "d600", 0, "d200", 0, 0, 0, "d600", 0, 0, 0, 0, 0, "d600", 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, ["a*11", "a*1"], 0, 0, "d200", 0, 0, "aa+690", 0, 0, 0, 0, 0, ["a*3", "a+2030"], 0, 0, "d200", 0, 0, "bb÷2", 0, 0, 0, "d200", 0, "aa+2000", 0, "d300", 0, 0, 0, "a*3", 0, "d300", 0, 0, 0, "bb+4500", 0, 0, "d250", 0, 0, ["b÷10", "b-3300"], 0, "d300", 0, 0, 0, ["a+4000", "a*2"], 0, 0, "d300", 0, 0, ["b-5200", "b-2500"], 0, "d300", 0, 0, 0, ["a+3920", "a+930"], 0, 0, 0, 0, 0, "Z8"],
            [0, 0, 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, "d150", 0, 0, 0, 0, 0, "d150", 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, "d250", "d450", 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, "d250", "d450", 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d300", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d250", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    };
    var levelColor = [
        new Laya.Vector4(170 / 255, 210 / 255, 140 / 255, 1),
        new Laya.Vector4(35 / 255, 170 / 255, 175 / 255, 1),
        new Laya.Vector4(0 / 255, 175 / 255, 80 / 255, 1),
        new Laya.Vector4(140 / 255, 170 / 255, 220 / 255, 1),
        new Laya.Vector4(255 / 255, 230 / 255, 150 / 255, 1),
        new Laya.Vector4(250 / 255, 200 / 255, 170 / 255, 1),
        new Laya.Vector4(245 / 255, 175 / 255, 130 / 255, 1),
        new Laya.Vector4(255 / 255, 190 / 255, 0 / 255, 1),
        new Laya.Vector4(200 / 255, 90 / 255, 20 / 255, 1),
        new Laya.Vector4(50 / 255, 120 / 255, 180 / 255, 1),
        new Laya.Vector4(210 / 255, 40 / 255, 200 / 255, 1),
        new Laya.Vector4(255 / 255, 0 / 255, 0 / 255, 1),
    ];
    var GameObjectNames = {
        "aa": "d3",
        "bb": "d3",
        "a": "d3",
        "b": "d3",
        "d1": "d1",
        "d2": "d2",
        "bot": "Bot",
        "H": "shuichi2",
        "I": "Hottub_Man_P",
        "J": "woman",
        "K": "N_Gate_Bate_g",
        "L": "N_Gate_Base_b",
        "N": "Hamburger",
        "M": "Gem_V1_00",
    };
    var roleUpgradeData = {
        era: [
            150,
            300,
            500,
            700,
            1000,
            1500,
            2000,
            2500,
            3500,
            5000,
        ],
        end: [
            100,
            200,
            400,
            800,
            1600,
            3200,
            4800,
            6400,
            8000,
            9600,
            11200,
            12800,
            14400,
            16000,
            17600,
            19200,
            20800,
            22400,
            24000,
            25600,
        ]
    };

    class SignItem extends ui.item.SignItemUI {
        constructor() { super(); }
        init(prizeData) {
            this.gold_txt.text = "";
            if (prizeData.type == ItemType.gold) {
                this.gold_txt.text = String(prizeData.numberof);
            }
            else if (prizeData.type == ItemType.player) {
                this.icon.visible = false;
                this.icon2.skin = prizeData.icon;
                this.icon2.visible = true;
            }
            if (prizeData.isSign == 1) {
                this.bg1.disabled = true;
                this.gold_txt.text = "";
            }
            else if (prizeData.isSign == 0) {
                this.gou.visible = false;
            }
            if (prizeData.isSign == 2) {
                this.bg1.skin = "images/qiandao/qiandao_di.png";
                this.gou.visible = false;
            }
        }
        setSgin() {
            this.gold_txt.text = "";
            this.bg1.disabled = true;
            this.gou.visible = true;
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class SignItem1 extends ui.item.SignItem1UI {
        constructor() { super(); }
        init(prizeData) {
            this.gold_txt.text = "";
            if (prizeData.type == ItemType.gold) {
                this.gold_txt.text = String(prizeData.numberof);
            }
            else if (prizeData.type == ItemType.player) {
                this.icon.visible = false;
                this.icon2.skin = prizeData.icon;
                this.icon2.visible = true;
            }
            if (prizeData.isSign == 1) {
                this.bg1.disabled = true;
                this.gold_txt.text = "";
            }
            else if (prizeData.isSign == 0) {
                this.gou.visible = false;
            }
            if (prizeData.isSign == 2) {
                this.bg1.skin = "images/qiandao/qiandao_di.png";
                this.gou.visible = false;
            }
        }
        setSgin() {
            this.gold_txt.text = "";
            this.bg1.disabled = true;
            this.gou.visible = true;
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class DataStorage {
        static getItem(key, defaultValue = null) {
            var value = this.getStorage(key);
            if (!value)
                return defaultValue;
            return value;
        }
        static getObjItem(key, defaultValue = null) {
            var value = this.getStorage(key);
            if (!value || value == "")
                return defaultValue;
            return JSON.parse(value);
            ;
        }
        static getIntItem(key, defaultValue) {
            var value = parseInt(this.getStorage(key));
            if (!value)
                return defaultValue;
            return value;
        }
        static getFloatItem(key, defaultValue) {
            var value = parseFloat(this.getStorage(key));
            if (!value)
                return defaultValue;
            return value;
        }
        static setItem(key, value) {
            this.setStorage(key, value);
        }
        static getStorage(key) {
            if (this.wx) {
            }
            return Laya.LocalStorage.getItem(ConfigData.gameName + key);
        }
        static setStorage(key, value) {
            if (this.wx) {
                Laya.LocalStorage.setItem(ConfigData.gameName + key, value);
            }
            else {
                Laya.LocalStorage.setItem(ConfigData.gameName + key, value);
            }
        }
        static removeItem(key) {
            return Laya.LocalStorage.removeItem(key);
        }
        static clearStorage() {
            if (this.wx) {
                this.wx.clearStorage();
            }
        }
    }
    DataStorage.wx = Laya.Browser.window["tt"];

    class PlayerData {
        constructor() {
            this.uuid = 0;
            this.openLateChestView = false;
            this.skinids = [];
            this.era = 1;
            this.playTimes = 0;
            this.level_max = 1;
            this.level_min = 1;
            this.speedLevel = 1;
            this.hpLevel = 1;
            this.goldLevel = 1;
            this.levelStateArr = [];
            this.gold = 0;
            this.energy = 15;
            this.score = 0;
            this.logindays = 0;
            this.roleId = 0;
            this.roleId2 = 2000;
            this.weaponId = 2000;
            this.gameTimes = 0;
            this.compGameTimes = 0;
            this.shareTimes = 0;
            this.videoTimes = 0;
            this.inviteFriendTimes = 0;
            this.returnGameTimes = 0;
            this.end = 1;
            this.playerItem = {};
            this._isMusic = true;
            this._isSound = true;
            this.isVibrate = true;
            this._currentLevel = 1;
        }
        getPlayerItem(id) {
            if (!this.playerItem[id]) {
                this.playerItem[id] = { progress: 0 };
            }
            return this.playerItem[id];
        }
        get isMusic() {
            return this._isMusic;
        }
        set isMusic(value) {
            this._isMusic = value;
        }
        get isSound() {
            return this._isSound;
        }
        set isSound(value) {
            this._isSound = value;
        }
        init() {
        }
        reset() {
            this.shareTimes = 0;
            this.videoTimes = 0;
        }
        get currentLevel() {
            return this._currentLevel;
        }
        set currentLevel(value) {
            this._currentLevel = value;
            if (this._currentLevel > ConfigData.maxLevel) {
                this._currentLevel = ConfigData.maxLevel;
            }
        }
        addEnergy(value) {
            var diffvalue = 15 - this.energy;
            if (diffvalue >= 0) {
                this.energy += value > diffvalue ? diffvalue : value;
            }
            else {
                if (value < 0) {
                    this.energy += value;
                }
            }
            if (this.energy < 0) {
                this.energy = 0;
            }
        }
        addScore(value) {
            this.score += value;
        }
        addCompGameTimes() {
            this.compGameTimes++;
        }
        addShareTimes() {
            this.shareTimes++;
        }
        addVideoTimes() {
            this.videoTimes++;
        }
        addInviteFriendTimes() {
            this.inviteFriendTimes++;
        }
    }

    class EventMgr extends Laya.EventDispatcher {
        static get instance() {
            if (EventMgr._instance == null)
                EventMgr._instance = new EventMgr();
            return EventMgr._instance;
        }
    }

    class EventType {
    }
    EventType.ShapeThreeDEnterWorld = 'ShapeThreeDEnterWorld';
    EventType.AD_VIDEO_CLOSE_EVENT = 'AD_VIDEO_CLOSE_EVENT';
    EventType.WxOnShow = 'WxOnShow';
    EventType.DataUpdate = 'DataUpdate';

    class PlayerPrefs {
        static GetInt(key, defaultnum) {
            return PlayerPrefs.GetValueNum(key, defaultnum);
        }
        static SetInt(key, defaultnum) {
            PlayerPrefs.SetValueNum(key, defaultnum);
        }
        static DeleteAll() {
            Laya.LocalStorage.clear();
        }
        static GetValueNum(value_name, defaul) {
            var jsonData = Laya.LocalStorage.getItem(value_name);
            if (jsonData == null || jsonData == '')
                return defaul;
            var d = Number(jsonData);
            return d;
        }
        static SetValueNum(value, num) {
            Laya.LocalStorage.setItem(value, num.toString());
        }
    }

    class Time extends Laya.Script {
    }
    Time.fixedDeltaTime = 0;
    Time.deltaTime = 0;
    Time.time = 0;
    Time.deltaTimeMin = 9999999999999999;
    Time.deltaTimeMax = 0;
    Time.deltaTimeEvr = 0;

    class AudioClip {
        constructor(p_url, pminRate, loops = 1) {
            this.preTime = 0;
            this.minRate = 0;
            this.loops = 1;
            this.url = p_url;
            this.minRate = pminRate;
            this.loops = loops;
        }
        Play() {
            if (Time.time - this.preTime < this.minRate)
                return;
            SoundMgr.instance.PlayOneShot(this.url, this.loops);
            this.preTime = Time.time;
        }
        stop() {
            SoundMgr.instance.StopOneShow(this.url);
        }
    }
    class SoundMgr {
        constructor() {
            this.bgmurl = 'sub3/bgm.mp3';
            this.bgmurl2 = 'sub3/bgm2.mp3';
            this.bgmurl3 = 'sub3/bgm2.mp3';
            this.bgmurl4 = 'sub3/bgm3.mp3';
            this.rBgms = [];
            this.clcik = new AudioClip('sub3/click.mp3', 0);
            this.luck = new AudioClip('sub3/PrizeWheelSpin.mp3', 0);
            this.lose = new AudioClip('sub3/lose.mp3', 0);
            this.win = new AudioClip('sub3/Win.mp3', 0);
            this.Popup = new AudioClip('sub3/Popup.mp3', 0);
            this.lv1_4 = new AudioClip('sub3/lv1_4.mp3', 0);
            this.lv5_6 = new AudioClip('sub3/lv5_6.mp3', 0);
            this.lv7 = new AudioClip('sub3/lv7.mp3', 0);
            this.lv8 = new AudioClip('sub3/lv8.mp3', 0);
            this.lv9 = new AudioClip('sub3/lv9.mp3', 0);
            this.lv10_11 = new AudioClip('sub3/lv10_11.mp3', 0);
            this.Upgrade = new AudioClip('sub3/Upgrade.mp3', 0);
            this.Coinendgame = new AudioClip('sub3/Coinendgame.mp3', 0);
            this.CrowdCheering = new AudioClip('sub3/CrowdCheering.mp3', 0);
            this._bgmCount = 0;
            this.prebgmurl = "";
            this.rBgms = [this.bgmurl2, this.bgmurl3, this.bgmurl4];
            EventMgr.instance.on(EventType.AD_VIDEO_CLOSE_EVENT, this, this.onAD_VIDEO_CLOSE_EVENT);
            EventMgr.instance.on(EventType.WxOnShow, this, this.ReSumeBgm);
        }
        static get instance() {
            if (SoundMgr.minstance == null)
                SoundMgr.minstance = new SoundMgr();
            return SoundMgr.minstance;
        }
        static isPlaySound() {
            return PlayerPrefs.GetInt('PlaySound', 1) == 1;
        }
        static setPlaySound(isPlaySound) {
            PlayerPrefs.SetInt('PlaySound', isPlaySound ? 1 : 0);
            if (isPlaySound) {
            }
            else {
                SoundMgr.instance.pauseBgm();
            }
        }
        static setPlaySound2(isPlaySound) {
            if (isPlaySound) {
                Laya.SoundManager.playbackRate = 1;
            }
            else {
                Laya.SoundManager.playbackRate = 0;
            }
        }
        onAD_VIDEO_CLOSE_EVENT() {
            if (Laya.Browser.onVVMiniGame)
                this.ReSumeBgm();
        }
        play(url) {
            Laya.SoundManager.playSound(url, 1);
        }
        PlayOneShot(url, loops = 1) {
            if (SoundMgr.isPlaySound()) {
                Laya.SoundManager.playSound(url, loops);
            }
        }
        StopOneShow(url) {
            Laya.SoundManager.stopSound(url);
        }
        BgmPlay() {
            this.PlayBgm(this.bgmurl, true);
        }
        PlayGameBgm() {
            this.PlayBgm(this.rBgms[this._bgmCount], true);
            this._bgmCount += 1;
            if (this._bgmCount >= this.rBgms.length) {
                this._bgmCount = 0;
            }
        }
        BgmPlaySetting() {
            this.PlayBgm(this.bgmurl, true);
        }
        ReSumeBgm() {
            console.log('ReSumeBgm');
            let isPlaySound = SoundMgr.isPlaySound();
            if (!isPlaySound || !this.curbgm_SoundChannel)
                return;
            {
                this.curbgm_SoundChannel.resume();
            }
        }
        pauseBgm() {
            if (this.curbgm_SoundChannel != null)
                this.curbgm_SoundChannel.pause();
        }
        PlayBgm(url, loop) {
            if (this.prebgmurl != url)
                this.curbgm_SoundChannel = null;
            let isPlaySound = SoundMgr.isPlaySound();
            if (isPlaySound) {
                let num = 1;
                if (loop)
                    num = 0;
                if (this.curbgm_SoundChannel == null) {
                    let channel = Laya.SoundManager.playMusic(url, num);
                    this.curbgm_SoundChannel = channel;
                }
                else
                    this.curbgm_SoundChannel.play();
            }
        }
    }

    class SceneManager {
        static LoadScene(url, callder, callbackFunc) {
            Laya.Scene3D.load(url, Laya.Handler.create(SceneManager, SceneManager.OnLoadLevelok, [url, callder, callbackFunc]));
        }
        static LoadSceneByName(name, callder, callbackFunc) {
            let url = 'res3d/LayaScene_' + name + '/Conventional/' + name + '.ls';
            Laya.Scene3D.load(url, Laya.Handler.create(SceneManager, SceneManager.OnLoadLevelok, [url, callder, callbackFunc]));
        }
        static OnLoadLevelok(url, callder, callback, scene) {
            callback.call(callder, scene);
        }
    }
    SceneManager.example_animatorUrl = 'res3d/LayaScene_Example_Animator/Conventional/Example_Animator.ls';

    class NumA extends ui.item.NumAUI {
        constructor() {
            super();
        }
        setShow(Level, isAdd = true, y = 0, color = null) {
            this.y = y;
            if (isAdd) {
                this.num_ys.text = "+" + Level;
                this.num_ys.color = "#00ff28";
            }
            else {
                this.num_ys.text = "-" + Level;
                this.num_ys.color = color ? color : "#ff0033";
            }
            Laya.Tween.to(this, {
                y: this.y - 150,
            }, 1000, null, Laya.Handler.create(this, this.end));
            Laya.Tween.to(this.pp, {
                scaleX: 1.4,
                scaleY: 1.4,
            }, 200, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.pp, {
                    scaleX: 1,
                    scaleY: 1,
                }, 150, null, Laya.Handler.create(this, () => {
                }));
            }));
        }
        end() {
            this.destroy(true);
        }
    }

    class UserData {
        static get currentLevel() {
            return UserData._currentLevel;
        }
        static set currentLevel(value) {
            UserData._currentLevel = value;
            if (UserData._currentLevel > UserData.maxLevel) {
                UserData._currentLevel = UserData.maxLevel;
            }
        }
    }
    UserData.OpenId = "";
    UserData.UId = 0;
    UserData.IsAuthor = false;
    UserData.Name = "我";
    UserData.Head = "res/Head/yktp.jpg";
    UserData.shareData = [{
            shareId: 1,
            title: "你知道未来战士的武器是什么吗",
            imageUrl: "share.jpg"
        }];
    UserData.IsMusic = 2;
    UserData.IsSound = true;
    UserData.IsVibrate = true;
    UserData.Boxbottom = 280;
    UserData.LoadingExportData = [];
    UserData.HotExportData = [];
    UserData.SideExportData = [];
    UserData.FullExportData = [];
    UserData.OverExportData = [];
    UserData.VictoryExportData = [];
    UserData.SettleExportData = [];
    UserData.SettleFullExportData = [];
    UserData.DownExportData = [];
    UserData.maxLevel = 5;
    UserData._currentLevel = 1;
    UserData.Gold = 0;
    UserData.GetGold = 0;
    UserData.Diamond = 0;
    UserData.GetDiamond = 0;
    UserData.MaxPower = 15;
    UserData.Power = 15;
    UserData.PowerTimeStamp = 0;
    UserData.LoadingNum = 0;
    UserData.KnifeTryId = 0;
    UserData.KnifeId = 1;
    UserData.KnifeData = [1];
    UserData.lotteryValue = 0;
    UserData.lotteryTimeStamp = 0;
    UserData.DowerData = [{
            dowertype: 1,
            dowerlv: 0,
            dowerclicklv: 0
        }, {
            dowertype: 2,
            dowerlv: 0,
            dowerclicklv: 0
        }];
    UserData.LotteryNum = 0;
    UserData.LotteryTimeStamp = 0;
    UserData.IsOneGift = 0;
    UserData.GiftTimeStamp = 0;
    UserData.IsSign = 0;
    UserData.SignTimeStamp = 0;
    UserData.CurrSignDay = 1;
    UserData.NextSignDay = 1;
    UserData.IsSevenDay = 0;
    UserData.bannerAdcreatetime = 5;
    UserData.nativeAdcreatetime = 5;
    UserData.IsCreateBanner = true;
    UserData.Version = 100;
    UserData.TotalSwitch = 0;
    UserData.auditSwitch = 0;
    UserData.tryLateodds = 0;
    UserData.chestLateodds = 0;
    UserData.lotteryLateodds = 0;
    UserData.settleLateodds = 0;
    UserData.homevideoshowodds = 0;
    UserData.homechestshowodds = 0;
    UserData.settlevideoshowodds = 0;
    UserData.interstitialshowodds = 0;

    class TMath {
        static getAngle(x1, x2, y1, y2) {
            return Math.atan2(x1 - x2, y1 - y2);
        }
        static getDistance(x1, x2, y1, y2) {
            var xd = x2 - x1;
            var yd = y2 - y1;
            return Math.pow(xd * xd + yd * yd, 0.5);
        }
        static getDistanceSquare(x1, x2, y1, y2) {
            var xd = x2 - x1;
            var yd = y2 - y1;
            return xd * xd + yd * yd;
        }
        static GetRandFloat(min, max) {
            return Math.random() * (max - min) + min;
        }
        static GetRandInt(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }
        static GetCheckBingo(ratio) {
            return this.GetRandInt(1, 100) <= ratio;
        }
        static RangeArray(min, max, length, canRepeat) {
            if (min >= max)
                return null;
            if (length > max - min + 1)
                return null;
            var rangeArray = new Array();
            if (canRepeat) {
                while (rangeArray.length < length) {
                    rangeArray.push(this.GetRandInt(min, max));
                }
            }
            else {
                while (rangeArray.length < length) {
                    var rangeNum = this.GetRandInt(min, max);
                    if (rangeArray.indexOf(rangeNum) == -1) {
                        rangeArray.push(rangeNum);
                    }
                }
            }
            return rangeArray;
        }
        static GetDataRandom(opt) {
            var old_arry = opt.arry, range = opt.range;
            range = range > old_arry.length ? old_arry.length : range;
            var newArray = [].concat(old_arry), valArray = [];
            for (var n = 0; n < range; n++) {
                var r = Math.floor(Math.random() * (newArray.length));
                valArray.push(newArray[r]);
                newArray.splice(r, 1);
            }
            return valArray;
        }
        static GetArrDifference(arr1, arr2) {
            return arr1.concat(arr2).filter(function (v, i, arr) {
                return arr.indexOf(v) === arr.lastIndexOf(v);
            });
        }
        static DataOutRep(array) {
            var arr = [];
            for (var i = 0; i < array.length; i++) {
                if (arr.indexOf(array[i]) == -1) {
                    arr.push(array[i]);
                }
            }
            return arr;
        }
        static mixArray(arr) {
            for (var i = 0, len = Math.round(arr.length / 2); i < len; i++) {
                var a = this.GetRandInt(0, arr.length);
                var b = this.GetRandInt(0, arr.length);
                var temp = arr[a];
                arr[a] = arr[b];
                arr[b] = temp;
            }
            return arr;
        }
        static Addo(n) {
            if (n < 10) {
                return "0" + n;
            }
            else {
                return n;
            }
        }
        static isToday(time, now = 0) {
            now = now ? now : Laya.Browser.now();
            var t = new Date(time);
            var n = new Date(now);
            if (t.getFullYear() == n.getFullYear() && t.getMonth() == n.getMonth() && t.getDate() == n.getDate())
                return true;
            else
                return false;
        }
        static getEndPos(angle, startpos, distance = 1) {
            let pos = startpos.clone();
            var radian = (angle * Math.PI) / 180;
            return new Laya.Vector2(pos.x + distance * Math.sin(radian), pos.y + distance * Math.cos(radian));
        }
        static getDataRandom(opt) {
            var old_arry = opt.arry, range = opt.range;
            range = range > old_arry.length ? old_arry.length : range;
            var newArray = [].concat(old_arry), valArray = [];
            for (var n = 0; n < range; n++) {
                var r = Math.floor(Math.random() * (newArray.length));
                valArray.push(newArray[r]);
                newArray.splice(r, 1);
            }
            return valArray;
        }
        static twoPointRotation3D(p1, p2) {
            let a = p1.clone();
            let b = p2.clone();
            b.x -= a.x;
            b.z -= a.z;
            var deltaAngle = 0;
            if (b.x == 0 && b.z == 0) {
                return 0;
            }
            else if (b.x > 0 && b.z > 0) {
                deltaAngle = 0;
            }
            else if (b.x > 0 && b.z == 0) {
                return 90;
            }
            else if (b.x > 0 && b.z < 0) {
                deltaAngle = 180;
            }
            else if (b.x == 0 && b.z < 0) {
                return 180;
            }
            else if (b.x < 0 && b.z < 0) {
                deltaAngle = -180;
            }
            else if (b.x < 0 && b.z == 0) {
                return -90;
            }
            else if (b.x < 0 && b.z > 0) {
                deltaAngle = 0;
            }
            var angle = Math.atan(b.x / b.z) * (360 / (Math.PI * 2)) + deltaAngle;
            return angle;
        }
    }

    var hexcase = 0;
    var b64pad = "";
    var chrsz = 8;
    function hex_md5(s) { return binl2hex(core_md5(str2binl(s), s.length * chrsz)); }
    function b64_md5(s) { return binl2b64(core_md5(str2binl(s), s.length * chrsz)); }
    function str_md5(s) { return binl2str(core_md5(str2binl(s), s.length * chrsz)); }
    function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
    function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
    function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }
    function md5_vm_test() {
        return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
    }
    function core_md5(x, len) {
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);
    }
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }
    function core_hmac_md5(key, data) {
        var bkey = str2binl(key);
        if (bkey.length > 16)
            bkey = core_md5(bkey, key.length * chrsz);
        var ipad = Array(16), opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
        return core_md5(opad.concat(hash), 512 + 128);
    }
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }
    function str2binl(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz)
            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
        return bin;
    }
    function binl2str(bin) {
        var str = "";
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < bin.length * 32; i += chrsz)
            str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
        return str;
    }
    function binl2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
                hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
        }
        return str;
    }
    function binl2b64(binarray) {
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i += 3) {
            var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
                | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
                | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > binarray.length * 32)
                    str += b64pad;
                else
                    str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
            }
        }
        return str;
    }

    class NetManager {
        static SendMsgToServer(TypeUrl, MsgData, callback) {
            let param = {};
            let msg = [];
            let str;
            let check_point;
            let check_sub;
            switch (TypeUrl) {
                case "get_user_base_info":
                    msg = [];
                    break;
            }
            param = this.GetParam(msg);
            str = this.ParamJoint(param, TypeUrl);
            let xhr = new Laya.HttpRequest();
            xhr.http.timeout = 10000;
            xhr.once(Laya.Event.COMPLETE, this, (data) => {
                if (data) {
                    switch (TypeUrl) {
                        case "get_user_base_info":
                            console.log("玩家基础数据:", data);
                            let area_switch = data.data.area_switch;
                            let switchdata = data.data.modular_switch;
                            let scenedata = data.data.secne_id_game.split(",");
                            console.log("scenedata:", scenedata);
                            console.log("sceneId:", ConfigData.SceneId);
                            let sceneSwitch = (scenedata.length <= 0 || scenedata.indexOf(ConfigData.SceneId) != -1) ? true : false;
                            console.log("sceneSwitch:", sceneSwitch);
                            for (let i = 0; i < switchdata.length; i++) {
                                let modular_code = switchdata[i].modular_code;
                                let modular_switch = switchdata[i].switch;
                                switch (modular_code) {
                                    case "tt_approve_switch":
                                        let bbh = modular_switch;
                                        UserData.TotalSwitch = UserData.Version < bbh && area_switch != 1 && sceneSwitch ? 1 : 0;
                                        UserData.auditSwitch = UserData.Version < bbh ? 1 : 0;
                                        break;
                                }
                            }
                            for (let i = 0; i < switchdata.length; i++) {
                                let modular_code = switchdata[i].modular_code;
                                let modular_switch = switchdata[i].switch;
                                switch (modular_code) {
                                    case "tt_try_late_odds":
                                        UserData.tryLateodds = UserData.TotalSwitch == 1 ? modular_switch : 0;
                                        break;
                                    case "tt_chest_late_odds":
                                        UserData.chestLateodds = UserData.TotalSwitch == 1 ? modular_switch : 0;
                                        break;
                                    case "tt_lottery_late_odds":
                                        UserData.lotteryLateodds = UserData.TotalSwitch == 1 ? modular_switch : 0;
                                        break;
                                    case "tt_settle_late_odds":
                                        UserData.settleLateodds = UserData.TotalSwitch == 1 ? modular_switch : 0;
                                        break;
                                    case "tt_homevideo_late_odds":
                                        UserData.homevideoshowodds = UserData.TotalSwitch == 1 ? modular_switch : 0;
                                        break;
                                    case "tt_homechest_late_odds":
                                        UserData.homechestshowodds = UserData.TotalSwitch == 1 ? modular_switch : 0;
                                        break;
                                    case "tt_settlevideo_late_odds":
                                        UserData.settlevideoshowodds = UserData.TotalSwitch == 1 ? modular_switch : 0;
                                        break;
                                    case "tt_Interstitial_show_odds":
                                        UserData.interstitialshowodds = UserData.auditSwitch == 1 ? modular_switch : 0;
                                        break;
                                }
                            }
                            console.log("UserData.TotalSwitch:", UserData.TotalSwitch);
                            console.log("UserData.tryLateodds:", UserData.tryLateodds);
                            console.log("UserData.chestLateodds:", UserData.chestLateodds);
                            console.log("UserData.lotteryLateodds:", UserData.lotteryLateodds);
                            console.log("UserData.settleLateodds:", UserData.settleLateodds);
                            console.log("UserData.homevideoshowodds:", UserData.homevideoshowodds);
                            console.log("UserData.homechestshowodds:", UserData.homechestshowodds);
                            console.log("UserData.settlevideoshowodds:", UserData.settlevideoshowodds);
                            console.log("UserData.interstitialshowodds:", UserData.interstitialshowodds);
                            GlobalManager.loadNum++;
                            break;
                    }
                }
            });
            xhr.once(Laya.Event.ERROR, this, (err) => {
                console.log("请求失败：", err);
                GlobalManager.loadNum++;
                NetManager.ErrorTimes++;
                if (NetManager.ErrorTimes < 3) {
                    NetManager.SendMsgToServer(TypeUrl);
                }
                else {
                    NetManager.ErrorTimes = 0;
                }
            });
            console.log("请求的服务器链接是：", ConfigData.ServerUrl + str);
            xhr.send(ConfigData.ServerUrl + str, null, "post", "json");
        }
        static GetTimestamp() {
            let data = new Date();
            let nian = data.getFullYear();
            let yue = data.getMonth() + 1;
            let ri = data.getDate();
            let shi = data.getHours();
            return new Date(nian + "/" + yue + "/" + ri + " " + shi + ":00:00").getTime() / 1000;
        }
        static GetParam(msg) {
            var data = {};
            console.log("参数   ", ConfigData.apiKey + GlobalManager.instance.getPlayerData().uuid + this.GetTimestamp());
            console.log("UserData.UId", GlobalManager.instance.getPlayerData().uuid);
            data["uid"] = GlobalManager.instance.getPlayerData().uuid;
            data["sign"] = hex_md5(ConfigData.apiKey + GlobalManager.instance.getPlayerData().uuid + this.GetTimestamp());
            for (let i = 0; i < msg.length; i++) {
                data[msg[i].key] = msg[i].value;
            }
            return data;
        }
        static ParamJoint(param, url) {
            let str = "?action=" + url + "&";
            for (var i in param) {
                str += i += "=" + param[i] + "&";
            }
            str = str.substring(0, str.length - 1);
            return str;
        }
        static buildQueryString(params) {
            let queryString = Object.keys(params).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            }).join('&');
            return queryString;
        }
    }
    NetManager.ErrorTimes = 0;

    class WxManager {
        static GetPhoneMsg() {
            if (this.platform) {
                ConfigData.PhoneMsg = this.platform.getSystemInfoSync();
                console.log(ConfigData.PhoneMsg);
            }
            if (ConfigData.PhoneMsg && ConfigData.PhoneMsg.model && ConfigData.PhoneMsg.model.startsWith("iPhone X")) {
                ConfigData.IsIphoneX = true;
            }
            if (Laya.Browser.onIOS && Laya.Browser.onIPad && Laya.Browser.onIPhone) {
                ConfigData.IsIphone = true;
            }
        }
        static GetInitMsg() {
            if (this.platform) {
                var res = this.platform.getLaunchOptionsSync();
                console.log("getLaunchOptionsSync:", res);
                ConfigData.SceneId = res.scene;
                ConfigData.Query = res.query;
                ConfigData.ReferrerInfo = res.referrerInfo;
                if (res && res.query && res.query.channel) {
                    ConfigData.channel = res.query.channel;
                }
                WxManager.platformLogin();
            }
        }
        static platformLogin() {
            if (!window["tt"]) {
                return;
            }
            window["tt"].login({
                force: false,
                success: (res) => {
                    console.log("登录成功！", res);
                    ConfigData.LoginCode = res.code;
                    WxManager.LoginInit();
                },
                fail: function (err) {
                    console.log("登录失败！", err);
                    WxManager.LoginInit();
                }
            });
        }
        static showShareMenu() {
            if (!window["tt"]) {
                return;
            }
            window["tt"].showShareMenu({ withShareTicket: true, menus: ['shareAppMessage', 'shareTimeline'] });
            let shareData = TMath.GetDataRandom({ 'arry': UserData.shareData, 'range': 1 })[0];
            window["tt"].onShareAppMessage(() => {
                return {
                    title: shareData.title,
                    imageUrl: shareData.imageUrl
                };
            });
        }
        static IsBannerSwitch() {
        }
        static LoginInit() {
            if (this.platform) {
                this.platform.login({
                    success: function (res) {
                        ConfigData.LoginCode = res.code;
                        console.log("获取code成功！", res);
                        let serverUrl = "";
                        let xhr = new Laya.HttpRequest();
                        xhr.http.timeout = 10000;
                        xhr.once(Laya.Event.COMPLETE, this, (data) => {
                            if (data) {
                                console.log("获取服务器数据是：", data);
                                GlobalManager.instance.getPlayerData().uuid = parseInt(data.data.uid);
                                UserData.OpenId = data.data.open_id;
                                console.log("UserData.UId,UserData.OpenId", GlobalManager.instance.getPlayerData().uuid, UserData.OpenId);
                                NetManager.SendMsgToServer("get_user_base_info");
                                UserData.LoadingNum++;
                                console.log("服务器数据加载成功！当前进度：" + UserData.LoadingNum);
                            }
                        });
                        xhr.once(Laya.Event.ERROR, this, (err) => {
                            console.log("请求失败：", err);
                            xhr.send(serverUrl, null, "post", "json");
                        });
                        xhr.send(serverUrl, null, "post", "json");
                        console.log("我请求服务器的链接是：", serverUrl);
                    },
                    fail: function (res) {
                        console.log("微信code码获取失败！");
                        WxManager.LoginInit();
                    }
                });
            }
        }
        static CreateAuthorBtn() {
            if (this.platform) {
                const button = this.platform.createUserInfoButton({
                    type: 'text',
                    text: '',
                    style: {
                        left: 0,
                        top: 0,
                        width: Laya.stage.width,
                        height: Laya.stage.height,
                        lineHeight: 40,
                    }
                });
                button.onTap((res) => {
                    if (res.errMsg === "getUserInfo:ok") {
                        this.GetIvMsg();
                        button.hide();
                    }
                    else {
                        button.hide();
                    }
                });
            }
        }
        static GetIvMsg() {
        }
        static ShareApp(callback, failcallback, istips = true) {
            if (this.platform) {
                this.ShareAppMsg();
                this.onShow(callback, failcallback, istips);
            }
            else {
                callback && callback.run();
            }
        }
        static ShareAppMsg() {
        }
        static onShow(callback, failcallback, istips = true) {
            if (this.platform) {
                this.platform.onShow(function (res) {
                    WxManager.ShowTime = new Date().getTime();
                    if (WxManager.ShowTime - WxManager.HideTime < 3000) {
                        WxManager.ShareNum++;
                        if (WxManager.ShareNum >= 2) {
                            WxManager.ShareNum = 0;
                            if (callback) {
                                callback.run();
                            }
                        }
                        else {
                            if (failcallback) {
                                failcallback.run();
                            }
                            if (istips) {
                            }
                        }
                    }
                    else {
                        WxManager.ShareNum = 0;
                        if (callback) {
                            callback.run();
                        }
                    }
                    this.wx.offShow();
                });
            }
        }
        static SkipMiniGame(AppId, AppPath, ListType, Location_index) {
            if (this.platform) {
                this.platform.navigateToMiniProgram({
                    appId: AppId,
                    path: AppPath,
                    success: function (res) {
                        console.log("跳转成功!");
                    },
                    fail: function (res) {
                        console.log("取消跳转!");
                    },
                });
            }
        }
        static GetFriendRank(type) {
            if (this.platform) {
                var open = this.platform.getOpenDataContext();
            }
        }
        static SendFriendMsg() {
            console.log("上传关卡和分数数据至微信");
        }
        static OpenShareMenu() {
        }
        static CreateGameClubBtn() {
            if (this.platform) {
                let top = 60;
                if (Laya.stage.height / Laya.stage.width > 2.1) {
                    top += 35;
                }
                let button = this.platform.createGameClubButton({
                    icon: 'dark',
                    style: {
                        left: ConfigData.PhoneMsg.screenWidth - 60,
                        top: top,
                        width: 45,
                        height: 45
                    }
                });
                return button;
            }
        }
        static OpenTips(str, time = 1000, height = 0.5) {
            if (!WxManager.tipstp) {
                return;
            }
            Laya.Tween.clearAll(WxManager.tipstp);
            Laya.timer.clear(WxManager, WxManager.closeTips);
            Laya.stage.setChildIndex(WxManager.tipstp, Laya.stage.numChildren - 1);
            WxManager.tipstp.width = 500;
            let strlength = this.getStrlength(str);
            let line = Math.ceil(strlength / 18);
            WxManager.tipstp.height = line * 25 + 34 + line;
            WxManager.tipstp.pivot(WxManager.tipstp.width / 2, WxManager.tipstp.height / 2);
            WxManager.tipstp.pos(Laya.stage.width / 2, Laya.stage.height * height);
            WxManager.tipstp.scale(0, 0);
            WxManager.tipstp.sizeGrid = "25,25,25,25";
            let label = WxManager.tipstp.getChildAt(0);
            label.width = 470;
            label.height = 25;
            label.anchorX = 0.5;
            label.anchorY = 0.5;
            label.pos(250, 32);
            label.align = "center";
            label.valign = "top";
            label.text = str;
            Laya.Tween.to(WxManager.tipstp, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut, Laya.Handler.create(WxManager, () => {
                Laya.timer.once(time, WxManager, WxManager.closeTips);
            }));
        }
        static closeTips() {
            Laya.Tween.to(WxManager.tipstp, { scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backIn);
        }
        static getStrlength(str) {
            let length = 0;
            for (var i = 0; i < str.length; i++) {
                length += str.charAt(i).match(/[^\x00-\xff]/ig) != null ? 1 : 0.5;
            }
            return length;
        }
    }
    WxManager.platform = Laya.Browser.window["tt"];
    WxManager.ShareMsgData = ["您的分享出错啦，请重新选择群分享！", "开发不易，请多支持！", "分享出错，感觉还可以试试。", "分享失败啦，请把我推荐给更多好友，感谢那您！", "检测到分享失败，请把我推荐给更多好友。", "分享失败，请分享到其他群。", "分享失败，请分享至大于30人的群。"];
    WxManager.ShareNum = 0;
    WxManager.ShowTime = 0;
    WxManager.HideTime = 0;

    class recorderManager {
        static startScreenCap() {
            if (!window["tt"]) {
                return;
            }
            console.log("开始录屏！！");
            recorderManager.VideoPath = "";
            recorderManager.recorder.start({
                duration: 300
            });
            recorderManager.recorder.onStart(res => {
                console.log("开始录屏:", res);
                recorderManager.capState = 1;
            });
            recorderManager.recorder.onStop(res => {
                console.log("停止录屏:", res);
                console.log("停止录屏，视频路径为：", res.videoPath);
                if (res.videoPath && res.videoPath != "") {
                    recorderManager.VideoPath = res.videoPath;
                }
                recorderManager.capState = 0;
            });
        }
        static stopScreenCap() {
            if (!window["tt"] || recorderManager.VideoPath != "") {
                return;
            }
            console.log("停止录屏！！");
            recorderManager.recorder.stop();
        }
        static shareScreenCap(callback, failcallback) {
            if (!window["tt"] || recorderManager.VideoPath == "") {
                WxManager.OpenTips("Không chia sẻ được bản ghi màn hình: thời gian ghi màn hình dưới 3 giây!");
                failcallback && failcallback.run();
                return;
            }
            window["tt"].shareAppMessage({
                channel: "video",
                title: "未来战士",
                desc: "你知道未来战士的武器是什么吗",
                extra: {
                    videoPath: recorderManager.VideoPath,
                    videoTopics: ["未来战士 ", "人类进化"],
                    hashtag_list: ["未来战士 ", "人类进化"],
                    video_title: "你知道未来战士的武器是什么吗",
                },
                success() {
                    console.log("分享录屏成功！");
                    callback && callback.run();
                },
                fail(e) {
                    console.log("Ghi và chia sẻ màn hình không thành công!", e);
                    let tips = e && e.errNo ? "Không chia sẻ được bản ghi màn hình: thời gian ghi màn hình dưới 3 giây!" : "Ghi và chia sẻ màn hình không thành công!";
                    WxManager.OpenTips(tips);
                    failcallback && failcallback.run();
                }
            });
        }
    }
    recorderManager.recorder = window["tt"] && window["tt"].getGameRecorderManager();
    recorderManager.VideoPath = "";
    recorderManager.capState = 0;

    class BaseView extends Laya.Scene {
        constructor() {
            super();
        }
        onAwake() {
            this.height = Laya.stage.height;
            this.width = Laya.stage.width;
            if (this.box) {
                this.box.height = Laya.stage.height;
                this.box.width = Laya.stage.width;
            }
        }
    }

    var touchPosX = 0;
    var touchPosY = 0;
    class RockerView extends ui.views.RockerUI {
        constructor(touchSp) {
            super();
            this.curTouchId = 0;
            this.isDown = false;
            this.angle = -1;
            this.radians = -1;
            this.isleftControl = true;
            this.moveD = 0;
            this.isMove = false;
            this.moveX = 0;
            this.moveY = 0;
            this.autoDestroyAtClosed = true;
            console.log("摇杆");
            this.touchRect = touchSp;
            this.touchRect.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.touchRect.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            this.touchRect.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
            this.originPiont = new Laya.Point(this.width / 2, this.height / 2);
            this.visible = false;
            GlobalManager.rocker = this;
            Laya.MouseManager.multiTouchEnabled = false;
        }
        onDestroy() {
            this.touchRect.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.touchRect.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            this.touchRect.off(Laya.Event.MOUSE_MOVE, this, this.onMove);
        }
        onMouseDown(e) {
            if (Game.instance.gameStatus == GameStatus.none) {
                Game.instance.startGame();
            }
            if (this.isleftControl) {
                if (this.isDown)
                    return;
            }
            else {
                if (e.stageX < Laya.stage.width / 2 || this.isDown)
                    return;
            }
            this.curTouchId = e.touchId;
            this.isDown = true;
            this.pos(Laya.stage.mouseX - (this.width / 2), Laya.stage.mouseY - (this.height / 2));
            this.knob.pos(this.width / 2, this.height / 2);
            this.touchRect.on(Laya.Event.MOUSE_MOVE, this, this.onMove);
            touchPosX = e.stageX;
            this.radians = -1;
            this.moveD = 0;
            this.isMove = true;
        }
        onMouseUp(e) {
            if (e.touchId != this.curTouchId)
                return;
            this.isDown = false;
            this.visible = false;
            this.touchRect.off(Laya.Event.MOUSE_MOVE, this, this.onMove);
            this.radians = this.angle = -1;
            this.isMove = false;
            this.moveX = 0;
            this.moveY = 0;
        }
        onMove(e) {
            this.moveX = e.stageX - touchPosX;
            this.moveY = e.stageY - touchPosY;
            if (this.moveX > 1) {
                this.moveD = 1;
            }
            else if (this.moveX < -1) {
                this.moveD = -1;
            }
            touchPosX = e.stageX;
            if (e.touchId != this.curTouchId)
                return;
            var locationPos = this.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY), false);
            this.knob.pos(locationPos.x, locationPos.y);
            this.deltaX = locationPos.x - this.originPiont.x;
            this.deltaY = locationPos.y - this.originPiont.y;
            var dx = this.deltaX * this.deltaX;
            var dy = this.deltaY * this.deltaY;
            this.angle = Math.atan2(this.deltaX, this.deltaY) * 180 / Math.PI;
            if (this.angle < 0)
                this.angle += 360;
            this.angle = Math.round(this.angle);
            this.radians = Math.PI / 180 * this.angle;
            if (dx + dy >= 80 * 80) {
                var x = Math.floor(Math.sin(this.radians) * 80 + this.originPiont.x);
                var y = Math.floor(Math.cos(this.radians) * 80 + this.originPiont.y);
                this.knob.pos(x, y);
            }
            else {
                this.knob.pos(locationPos.x, locationPos.y);
            }
            this.isMove = true;
        }
    }

    class BezierPath {
        static CreateBezierPoints(anchorpoints, pointsAmount) {
            var points = [];
            for (var i = 0; i < pointsAmount; i++) {
                var point = this.MultiPointBezier(anchorpoints, i / pointsAmount);
                points.push(point);
            }
            return points;
        }
        static MultiPointBezier(points, t) {
            let len = points.length;
            let x = 0, y = 0, z = 0;
            for (let i = 0; i < len; i++) {
                let point = points[i];
                x += point.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
                y += point.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
                z += point.z * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
            }
            return { x: x, y: y, z: z };
        }
        static erxiangshi(start, end) {
            let cs = 1, bcs = 1;
            while (end > 0) {
                cs *= start;
                bcs *= end;
                start--;
                end--;
            }
            return (cs / bcs);
        }
    }

    class GameObject {
        constructor(node) {
            this.node = node;
            this.sprite3d = node;
        }
        static getFullPath(obj) {
            if (obj == null) {
                console.error("You must select Obj first!");
                return;
            }
            let path = [];
            path.push(obj.name);
            let selectChild = obj;
            if (selectChild != null) {
                while (selectChild.parent != null) {
                    selectChild = selectChild.parent;
                    path.push(selectChild.name);
                }
            }
            let rs = '';
            for (let index = path.length - 1; index >= 0; index--) {
                rs += path[index] + '/';
            }
            console.log(rs);
        }
        static GetChilds(node, childName) {
            let list = [];
            for (let index = 0; index < node.numChildren; index++) {
                let child = node.getChildAt(index);
                if (child.name == childName)
                    list.push(child);
            }
            return list;
        }
        static GetChildsByDeth(node, childName) {
            let list = GameObject.getAllChilds(node);
            let filerList = [];
            for (let index = 0; index < list.length; index++) {
                let child = list[index];
                if (child.name == childName)
                    filerList.push(child);
            }
            return filerList;
        }
        static Find(node, name) {
            var depth = name.split('/');
            var gob = node.getChildByName(depth[0]);
            for (let index = 1; index < depth.length; index++) {
                gob = gob.getChildByName(depth[index]);
            }
            return gob;
        }
        static FindChilds(name, node) {
            let list = [];
            for (let index = 0; index < node.numChildren; index++) {
                let c = node.getChildAt(index);
                if (name == c.name)
                    list.push(c);
            }
            return list;
        }
        static Instantiate(go) {
            var newGo = Laya.Sprite3D.instantiate(go.sprite3d);
            return newGo;
        }
        Clone_sprite3d() {
            return Laya.Sprite3D.instantiate(this.sprite3d);
        }
        static Instantiate2Scene(go, node) {
            var newGo = Laya.Sprite3D.instantiate(go);
            node.addChild(newGo);
            return newGo;
        }
        static Instantiate2Scene_Particle3d(go, node) {
            var newGo = go.clone();
            node.addChild(newGo);
            return newGo;
        }
        static Instantiate2SceneUseScene(go, Scene) {
            var newGo = Laya.Sprite3D.instantiate(go);
            Scene.addChild(newGo);
            return newGo;
        }
        static InstantiateGob(go) {
            if (go == null)
                return null;
            var newGo = Laya.Sprite3D.instantiate(go);
            return newGo;
        }
        static Add2Scene(go, node) {
            node.addChild(go);
        }
        static InstantiateNoScene(go) {
            var newGo = Laya.Sprite3D.instantiate(go);
            return newGo;
        }
        static GetTypeInChildren(t, _class) {
            for (const iterator of t._children) {
                if ((iterator) instanceof _class)
                    return iterator;
            }
            return null;
        }
        static GetTypesInChildren(t, _class) {
            var list = [];
            for (const iterator of t._children) {
                if ((iterator) instanceof _class)
                    list.push(iterator);
            }
            return list;
        }
        static FindUseNode(name, node) {
            let depth = name.split('/');
            if (depth == null || depth.length == 0) {
                return node.getChildByName(name);
            }
            let gob = node.getChildByName(depth[0]);
            for (let index = 1; index < depth.length; index++) {
                gob = gob.getChildByName(depth[index]);
            }
            return gob;
        }
        static FindUseNodeNoDeth(name, node) {
            var gob = node.getChildByName(name);
            return gob;
        }
        static FindChildAtUseNode(idx, node) {
            let gob = node.getChildAt(idx);
            return gob;
        }
        static getChildAttUseNode(idx, node) {
            let gob = node.getChildAt(idx);
            return gob;
        }
        static GetComponentsInChildren(t, _class) {
            if (t == null)
                return null;
            var allchilds = GameObject.getChildsDeth(t);
            var list = [];
            for (const iterator of allchilds) {
                if ((iterator) instanceof _class)
                    list.push(iterator);
            }
            return list;
        }
        static GetComponentsInChildrenU3d(t, _class) {
            if (t == null)
                return null;
            var allchilds = GameObject.getChildsDeth(t);
            var list = [];
            for (const iterator of allchilds) {
                let com = iterator.getComponent(_class);
                if (com != null)
                    list.push(com);
            }
            return list;
        }
        static FindChilds_deth(node, name) {
            if (node == null)
                return null;
            var allchilds = GameObject.getChildsDeth(node);
            var list = [];
            for (const iterator of allchilds) {
                let isok = iterator.name == name;
                if (isok)
                    list.push(iterator);
            }
            return list;
        }
        static getAllChilds(owner) {
            console.log("laya.display.Node", owner);
            var list = [];
            var _children = [];
            for (let index = 0; index < owner.numChildren; index++) {
                _children.push(owner.getChildAt(index));
            }
            for (const iterator of _children) {
                list.push(iterator);
            }
            for (let index = 0; index < _children.length; index++) {
                var t = this.getAllChilds(_children[index]);
                for (const iterator of t) {
                    list.push(iterator);
                }
            }
            return list;
        }
        static getChildsByNameDeth(owner, name) {
            console.log("laya.display.Node", owner);
            var list = [];
            var arr = GameObject.getAllChilds(owner);
            for (const iterator of arr) {
                if (iterator.name == name)
                    list.push(iterator);
            }
            return list;
        }
        static getChildsDeth(owner) {
            console.log("laya.display.Node", owner);
            var list = [];
            var arr = GameObject.getAllChilds(owner);
            for (const iterator of arr) {
                list.push(iterator);
            }
            return list;
        }
    }

    class MonoBehaviour3D extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.count = 0;
            this.isAttack = true;
            this.isRun = false;
            this._castShadow = false;
            this._receiveShadow = false;
        }
        onAwake() {
            this.gameObject = this.owner;
            this.transform = this.gameObject.transform;
        }
        Find(path) {
            return GameObject.Find(this.gameObject, path);
        }
        GetComponentsInChildren(componentType) {
            return GameObject.GetComponentsInChildrenU3d(this.gameObject, componentType);
        }
        setReceiveShadow(value1 = false, value2 = false, gameObject = null) {
            this._receiveShadow = value1;
            this._castShadow = value2;
            this.setRemoveReceiveShadow(gameObject);
        }
        setRemoveReceiveShadow(gameObject) {
            if (!gameObject)
                gameObject = this.gameObject;
            var skinnedMeshRenderer = gameObject.skinnedMeshRenderer;
            var skinnedMeshRenderer2 = gameObject.meshRenderer;
            if (skinnedMeshRenderer) {
                skinnedMeshRenderer.castShadow = this._castShadow;
                skinnedMeshRenderer.receiveShadow = this._receiveShadow;
            }
            if (skinnedMeshRenderer2) {
                skinnedMeshRenderer2.castShadow = this._castShadow;
                skinnedMeshRenderer2.receiveShadow = this._receiveShadow;
            }
            else {
                this.removeReceiveShadow(gameObject);
            }
        }
        removeReceiveShadow(gameObject) {
            for (var i = 0; i < gameObject.numChildren; i++) {
                var skinnedMeshRenderer = gameObject.getChildAt(i).skinnedMeshRenderer;
                var skinnedMeshRenderer2 = gameObject.getChildAt(i).meshRenderer;
                if (skinnedMeshRenderer) {
                    skinnedMeshRenderer.castShadow = this._castShadow;
                    skinnedMeshRenderer.receiveShadow = this._receiveShadow;
                }
                else if (skinnedMeshRenderer2) {
                    skinnedMeshRenderer2.castShadow = this._castShadow;
                    skinnedMeshRenderer2.receiveShadow = this._receiveShadow;
                }
                else {
                    this.removeReceiveShadow(gameObject.getChildAt(i));
                }
            }
        }
        lose() { }
        gameStart() { }
        gameEnd() { }
        revive() { }
        onDestroy() {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.transform);
        }
    }

    class JTools {
        static normalizeNum(num) {
            if (num >= 0.0000000000001)
                return 1;
            else if (num <= -0.00000000001)
                return -1;
            return 0;
        }
        static getRandomIntArry(num) {
            let idx = JTools.getRandomInt(0, num.length - 1);
            return num[idx];
        }
        ;
        static removeArrySetSize(arr, j) {
            for (let i = j; i < arr.length - 1; i++)
                arr[i] = arr[i + 1];
            arr.pop();
        }
        static isNull(obj) {
            if (obj == 0 || obj == null || obj == "" || obj == undefined) {
                return true;
            }
            return false;
        }
        static getRandomInt(min, max) {
            var Range = max - min;
            var Rand = Math.random();
            return (min + Math.round(Rand * Range));
        }
        static getRandomFloat(min, max) {
            var Range = max - min;
            var Rand = Math.random();
            return Math.round((min + Rand * Range) * 100) / 100;
        }
        static getRandomInt2(min, max) {
            var Range = max - min;
            var Rand = Math.random();
            var r = Math.random() > 0.5 ? -1 : 1;
            return ((min + Math.round(Rand * Range)) * r);
        }
        static getRandomIntNotInClueMax(min, max) {
            var s = this.getRandomInt(min, max);
            if (s >= max)
                s -= 1;
            return s;
        }
        static GetRanDom(min, max) {
            return JTools.getRandomInt(min, max);
        }
        static getRandomFloat0_1(min, max) {
            return Math.random();
        }
        static GetChilds(scene, childName) {
            var list = [];
            for (let index = 0; index < scene.numChildren; index++) {
                var child = scene.getChildAt(index);
                if (child.name == childName)
                    list.push(child);
            }
            return list;
        }
        static GetChildsByLayerReTrunTransform(scene, layer) {
            var list = [];
            for (let index = 0; index < scene.numChildren; index++) {
                var child = scene.getChildAt(index);
                if (child.layer == layer)
                    list.push(child.transform);
            }
            return list;
        }
        static getComponentsInChilds(owner, type) {
            console.log("laya.display.Node", owner);
            var list = [];
            list = owner.getComponents(type);
            for (let index = 0; index < owner.numChildren; index++) {
                var t = this.getComponentsInChilds(owner.getChildAt(index), type);
                t.forEach(element => {
                    list.push(element);
                });
            }
            return list;
        }
        static setBitComputing(value, mask, t) {
            if (t) {
                value |= (1 << mask);
            }
            else {
                value &= ~(1 << mask);
            }
            return value;
        }
        static getBitComputing(value, mask) {
            return 0 != (value & (1 << mask));
        }
        static isWithin(value, min, max) {
            if (value > min && value < max) {
                return true;
            }
            return false;
        }
    }

    class Mathf {
        static Sin(t) {
            return Math.sin(t);
        }
        static Abs(v) {
            return Math.abs(v);
        }
        static Cos(x) {
            return Math.cos(x);
        }
        static LerpAngle(a, b, t) {
            var num = Mathf.Repeat(b - a, 360.0);
            if (num > 180.0)
                num -= 360.0;
            return a + num * Mathf.Clamp01(t);
        }
        static Repeat(t, length) {
            return t - Mathf.Floor(t / length) * length;
        }
        static Floor(f) {
            return Math.floor(f);
        }
        static Clamp01(value) {
            if (value < 0.0)
                return 0.0;
            if (value > 1.0)
                return 1.0;
            return value;
        }
        static Acos(value) {
            return Math.acos(value);
        }
        static Atan2(x, y) {
            return Math.atan2(x, y);
        }
        static Lerp(a, b, t) {
            return a + (b - a) * Mathf.Clamp01(t);
        }
        static InverseLerp(a, b, value) {
            if (a != b)
                return Mathf.Clamp01((value - a) / (b - a));
            else
                return 0.0;
        }
        static Max(a, b) {
            return a > b ? a : b;
        }
        static Min(a, b) {
            return a < b ? a : b;
        }
        static Clamp(value, min, max) {
            if (value < min)
                value = min;
            else if (value > max)
                value = max;
            return value;
        }
    }
    Mathf.Deg2Rad = 0.0174532924;
    Mathf.Rad2Deg = 57.29578;
    Mathf.PI = 3.14159274;

    class Door1 extends MonoBehaviour3D {
        constructor() {
            super();
            this.eraValues = [];
            this.getType = 0;
            this.getTypes = [];
        }
        onAwake() {
            super.onAwake();
            this.setReceiveShadow(false, false);
            this.PhysicsCollider = this.gameObject.getComponent(Laya.PhysicsCollider);
            this.PhysicsCollider.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
            this.PhysicsCollider.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
        }
        setData(datas) {
            var v;
            this.eraValues.length = 0;
            this.getTypes.length = 0;
            for (let index = 0; index < datas.length; index++) {
                const name = datas[index];
                if (name.indexOf("+") != -1) {
                    this.getType = 1;
                    v = name.split("+")[1];
                }
                else if (name.indexOf("-") != -1) {
                    this.getType = 2;
                    v = name.split("-")[1];
                }
                else if (name.indexOf("*") != -1) {
                    this.getType = 3;
                    v = name.split("*")[1];
                }
                else if (name.indexOf("÷") != -1) {
                    this.getType = 4;
                    v = name.split("÷")[1];
                }
                this.eraValues.push(Number(v));
                this.getTypes.push(this.getType);
                this.setLevel(Number(v), index, name);
            }
            this.transform.localPositionX = 0;
        }
        setLevel(level = 1, index, name) {
            var url = index == 0 ? "door1/" : "door2/";
            var ge = this.Find(url + "shuzig");
            var shi = this.Find(url + "shuzis");
            var bai = this.Find(url + "shuzib");
            var wan = this.Find(url + "shuziw");
            var qian = this.Find(url + "shuziq");
            var pian = this.Find(url + "pian");
            var ny = this.Find(url + "ny");
            if (name[0] == "e" || name[0] == "f") {
                ny.meshRenderer.material.tilingOffsetZ = 0.5;
            }
            else {
                ny.meshRenderer.material.tilingOffsetZ = 0.4;
            }
            ny.meshRenderer.material.tilingOffsetW = 0.5;
            var jjcc;
            bai.meshRenderer.material.tilingOffsetW = 0;
            qian.meshRenderer.material.tilingOffsetW = 0;
            wan.meshRenderer.material.tilingOffsetW = 0;
            if (level < 10) {
                ge.active = false;
                shi.active = true;
                bai.active = true;
                qian.active = false;
                wan.active = false;
                shi.meshRenderer.material.tilingOffsetZ = level / 10;
                bai.transform.localPositionX = 0.4;
                shi.transform.localPositionX = -0.4;
                jjcc = bai;
            }
            else if (level < 100) {
                ge.active = true;
                shi.active = true;
                bai.active = true;
                qian.active = false;
                wan.active = false;
                var strlevel = String(level);
                shi.meshRenderer.material.tilingOffsetZ = Number(strlevel[0]) / 10;
                ge.meshRenderer.material.tilingOffsetZ = Number(strlevel[1]) / 10;
                bai.transform.localPositionX = 0.7;
                shi.transform.localPositionX = 0;
                ge.transform.localPositionX = -0.7;
                jjcc = bai;
            }
            else if (level < 1000) {
                ge.active = true;
                shi.active = true;
                bai.active = true;
                qian.active = true;
                wan.active = false;
                var strlevel = String(level);
                bai.meshRenderer.material.tilingOffsetZ = Number(strlevel[0]) / 10;
                shi.meshRenderer.material.tilingOffsetZ = Number(strlevel[1]) / 10;
                ge.meshRenderer.material.tilingOffsetZ = Number(strlevel[2]) / 10;
                qian.transform.localPositionX = 1.05;
                bai.transform.localPositionX = 0.35;
                shi.transform.localPositionX = -0.35;
                ge.transform.localPositionX = -1.05;
                jjcc = qian;
            }
            else if (level < 10000) {
                ge.active = true;
                shi.active = true;
                bai.active = true;
                qian.active = true;
                wan.active = true;
                var strlevel = String(level);
                qian.meshRenderer.material.tilingOffsetZ = Number(strlevel[0]) / 10;
                bai.meshRenderer.material.tilingOffsetZ = Number(strlevel[1]) / 10;
                shi.meshRenderer.material.tilingOffsetZ = Number(strlevel[2]) / 10;
                ge.meshRenderer.material.tilingOffsetZ = Number(strlevel[3]) / 10;
                qian.transform.localPositionX = 1.4;
                qian.transform.localPositionX = 0.7;
                bai.transform.localPositionX = 0;
                shi.transform.localPositionX = -0.7;
                ge.transform.localPositionX = -1.4;
                jjcc = wan;
            }
            jjcc.meshRenderer.material.tilingOffsetW = 0.5;
            if (this.getType == 1) {
                pian.meshRenderer.material.albedoColor = new Laya.Vector4(127 / 255, 1, 107 / 255, 150 / 255);
                jjcc.meshRenderer.material.tilingOffsetZ = 0;
            }
            else if (this.getType == 2) {
                pian.meshRenderer.material.albedoColor = new Laya.Vector4(243 / 255, 100 / 255, 100 / 255, 150 / 255);
                jjcc.meshRenderer.material.tilingOffsetZ = 0.1;
            }
            else if (this.getType == 3) {
                pian.meshRenderer.material.albedoColor = new Laya.Vector4(127 / 255, 1, 107 / 255, 150 / 255);
                jjcc.meshRenderer.material.tilingOffsetZ = 0.2;
            }
            else if (this.getType == 4) {
                jjcc.meshRenderer.material.tilingOffsetZ = 0.3;
                pian.meshRenderer.material.albedoColor = new Laya.Vector4(243 / 255, 100 / 255, 100 / 255, 150 / 255);
            }
        }
    }

    class Door3 extends MonoBehaviour3D {
        constructor() {
            super();
            this.eraValue = 0;
            this.getType = 0;
        }
        onAwake() {
            super.onAwake();
            this.setReceiveShadow(false, false);
            this.PhysicsCollider = this.gameObject.getComponent(Laya.PhysicsCollider);
            this.PhysicsCollider.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
            this.PhysicsCollider.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
            this.ge = this.Find("shuzig");
            this.shi = this.Find("shuzis");
            this.bai = this.Find("shuzib");
            this.qian = this.Find("shuziq");
            this.wan = this.Find("shuziw");
            this.pian = this.Find("pian");
            this.ny = this.Find("ny");
        }
        move() {
            Laya.timer.once(1500, this, () => {
                Laya.Tween.to(this.transform, {
                    localPositionX: this.transform.localPositionX * -1,
                }, 1000, null, Laya.Handler.create(this, () => {
                    this.move();
                }), 0, true);
            });
        }
        setData(name, name2) {
            var v;
            if (name.indexOf("+") != -1) {
                this.getType = 1;
                v = name.split("+")[1];
            }
            else if (name.indexOf("-") != -1) {
                this.getType = 2;
                v = name.split("-")[1];
            }
            else if (name.indexOf("*") != -1) {
                this.getType = 3;
                v = name.split("*")[1];
            }
            else if (name.indexOf("÷") != -1) {
                this.getType = 4;
                v = name.split("÷")[1];
            }
            this.eraValue = Number(v);
            this.setLevel(Number(v));
            if (name2 == "aa" || name2 == "bb") {
                this.transform.localPositionX = Math.random() > 0.5 ? 1.6 : -1.6;
                this.move();
            }
            else {
                if (this.transform.localPositionX > 0)
                    this.transform.localPositionX = 1.6;
                else
                    this.transform.localPositionX = -1.6;
            }
            if (name[0] == "e" || name[0] == "f") {
                this.ny.meshRenderer.material.tilingOffsetZ = 0.5;
            }
            else {
                this.ny.meshRenderer.material.tilingOffsetZ = 0.4;
            }
            this.ny.meshRenderer.material.tilingOffsetW = 0.5;
        }
        setLevel(level = 1) {
            var jjcc;
            this.bai.meshRenderer.material.tilingOffsetW = 0;
            this.qian.meshRenderer.material.tilingOffsetW = 0;
            this.wan.meshRenderer.material.tilingOffsetW = 0;
            if (level < 10) {
                this.ge.active = false;
                this.shi.active = true;
                this.bai.active = true;
                this.qian.active = false;
                this.wan.active = false;
                this.shi.meshRenderer.material.tilingOffsetZ = level / 10;
                this.bai.transform.localPositionX = 0.4;
                this.shi.transform.localPositionX = -0.4;
                jjcc = this.bai;
            }
            else if (level < 100) {
                this.ge.active = true;
                this.shi.active = true;
                this.bai.active = true;
                this.qian.active = false;
                this.wan.active = false;
                var strlevel = String(level);
                this.shi.meshRenderer.material.tilingOffsetZ = Number(strlevel[0]) / 10;
                this.ge.meshRenderer.material.tilingOffsetZ = Number(strlevel[1]) / 10;
                this.bai.transform.localPositionX = 0.7;
                this.shi.transform.localPositionX = 0;
                this.ge.transform.localPositionX = -0.7;
                jjcc = this.bai;
            }
            else if (level < 1000) {
                this.ge.active = true;
                this.shi.active = true;
                this.bai.active = true;
                this.qian.active = true;
                this.wan.active = false;
                var strlevel = String(level);
                this.bai.meshRenderer.material.tilingOffsetZ = Number(strlevel[0]) / 10;
                this.shi.meshRenderer.material.tilingOffsetZ = Number(strlevel[1]) / 10;
                this.ge.meshRenderer.material.tilingOffsetZ = Number(strlevel[2]) / 10;
                this.qian.transform.localPositionX = 1.05;
                this.bai.transform.localPositionX = 0.35;
                this.shi.transform.localPositionX = -0.35;
                this.ge.transform.localPositionX = -1.05;
                jjcc = this.qian;
            }
            else if (level < 10000) {
                this.ge.active = true;
                this.shi.active = true;
                this.bai.active = true;
                this.qian.active = true;
                this.wan.active = true;
                var strlevel = String(level);
                this.qian.meshRenderer.material.tilingOffsetZ = Number(strlevel[0]) / 10;
                this.bai.meshRenderer.material.tilingOffsetZ = Number(strlevel[1]) / 10;
                this.shi.meshRenderer.material.tilingOffsetZ = Number(strlevel[2]) / 10;
                this.ge.meshRenderer.material.tilingOffsetZ = Number(strlevel[3]) / 10;
                this.qian.transform.localPositionX = 1.4;
                this.qian.transform.localPositionX = 0.7;
                this.bai.transform.localPositionX = 0;
                this.shi.transform.localPositionX = -0.7;
                this.ge.transform.localPositionX = -1.4;
                jjcc = this.wan;
            }
            jjcc.meshRenderer.material.tilingOffsetW = 0.5;
            if (this.getType == 1) {
                this.pian.meshRenderer.material.albedoColor = new Laya.Vector4(127 / 255, 1, 107 / 255, 150 / 255);
                jjcc.meshRenderer.material.tilingOffsetZ = 0;
            }
            else if (this.getType == 2) {
                jjcc.meshRenderer.material.tilingOffsetZ = 0.1;
                this.pian.meshRenderer.material.albedoColor = new Laya.Vector4(243 / 255, 100 / 255, 100 / 255, 150 / 255);
            }
            else if (this.getType == 3) {
                this.pian.meshRenderer.material.albedoColor = new Laya.Vector4(127 / 255, 1, 107 / 255, 150 / 255);
                jjcc.meshRenderer.material.tilingOffsetZ = 0.2;
            }
            else if (this.getType == 4) {
                this.pian.meshRenderer.material.albedoColor = new Laya.Vector4(243 / 255, 100 / 255, 100 / 255, 150 / 255);
                jjcc.meshRenderer.material.tilingOffsetZ = 0.3;
            }
        }
    }

    var MAX_LEVEL = 200;
    class Enemy extends MonoBehaviour3D {
        constructor() {
            super();
            this.isDie = false;
            this.isRun = true;
            this.level = 1;
        }
        onAwake() {
            super.onAwake();
            this.setReceiveShadow(false, true);
            this.PhysicsCollider = this.gameObject.getComponent(Laya.PhysicsCollider);
            this.PhysicsCollider.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
            this.PhysicsCollider.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
            this.animator = this.gameObject.getComponent(Laya.Animator);
            this.skinNode = this.gameObject.getChildAt(1);
            this.isRun = true;
            this.transform.localPositionY = -0.2;
            this.Head = this.Find("Enemies/Bot/mixamorig:Hips/mixamorig:Spine/mixamorig:Spine1/mixamorig:Spine2/mixamorig:Neck/mixamorig:Head");
        }
        setData(name) {
            var r = JTools.getRandomInt(0, 2);
            for (let index = 0; index < this.Head.numChildren; index++) {
                const element = this.Head.getChildAt(index);
                if (r == index) {
                    element.active = true;
                }
                else {
                    element.active = false;
                }
            }
        }
        beijidao() {
            if (this.isRun == false)
                return;
            this.animator.crossFade("dead", 0.1);
            var r = JTools.getRandomInt(-90, -50);
            var transform = this.transform;
            var x = transform.localPositionX;
            if (Game.instance.playerCtr.nowEra <= 2) {
                Laya.Tween.to(transform, {
                    localPositionY: 0.2,
                }, 1000, null, Laya.Handler.create(this, () => {
                }), 200);
            }
            if (Game.instance.playerCtr.nowEra <= 4) {
                Laya.Tween.to(transform, {
                    localPositionZ: transform.localPositionZ + 3,
                    localPositionY: 0.2,
                }, 500, null, Laya.Handler.create(this, () => {
                }), 200);
            }
            this.isDie = true;
            this.endHide();
        }
        endHide() {
            this.transform.localPositionY = 0.1;
            if (GameView.instance)
                GameView.instance.gainWealth2(5);
            var pos = this.transform.position.clone();
            pos.y += 1;
            Game.instance.loadLizi("coins", pos);
            Laya.timer.once(2000, this, () => {
                this.gameObject.active = false;
            });
        }
        alterSkin() {
        }
        onUpdate() {
            if (!this.isRun)
                return;
            if (Game.instance.playerCtr.nowEra >= 5) {
                if (this.transform.position.z - Game.instance.playerCtr.bodys.transform.position.z < 10) {
                    if (Math.abs(this.transform.position.x - Game.instance.playerCtr.bodys.transform.position.x) < Game.instance.playerCtr.collisionSizeX) {
                        this.animator.crossFade("dead", 0.1);
                        this.isRun = false;
                        this.endHide();
                    }
                }
            }
        }
        getDistance(p1, p2) {
            var dx = Math.abs(p2.x - p1.x);
            var dy = Math.abs(p2.y - p1.y);
            var dis = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            return dis;
        }
    }

    class PlayerBody extends MonoBehaviour3D {
        constructor() {
            super();
            this.isMain = false;
            this.skins = [];
            this.weaponRights = [];
            this.weaponLefts = [];
            this._nowEra = 0;
        }
        ;
        onAwake() {
            super.onAwake();
            this.animator = this.gameObject.getComponent(Laya.Animator);
            this.PhysicsCollider = this.gameObject.getComponent(Laya.Rigidbody3D);
            this.PhysicsCollider.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
            this.PhysicsCollider.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2 | Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3;
            this.setReceiveShadow(false, true);
            var human_char_v10 = this.Find("human_char_v10");
            this.animator = this.gameObject.getComponent(Laya.Animator);
            var weaponLeft = this.Find("human_char_v10/mixamorig:Hips/mixamorig:Spine/mixamorig:Spine1/mixamorig:Spine2/mixamorig:LeftShoulder/mixamorig:LeftArm/mixamorig:LeftForeArm/mixamorig:LeftHand/Weapon Left");
            var weaponRight = this.Find("human_char_v10/mixamorig:Hips/mixamorig:Spine/mixamorig:Spine1/mixamorig:Spine2/mixamorig:RightShoulder/mixamorig:RightArm/mixamorig:RightForeArm/mixamorig:RightHand/Weapon Right");
            this.weaponRights[0] = null;
            this.weaponLefts[0] = null;
            this.skins[0] = null;
            for (let index = 1; index < 11; index++) {
                var node = human_char_v10.getChildByName("lv_" + index);
                var leftNode = weaponLeft.getChildByName("lv" + index);
                var rightNode = weaponRight.getChildByName("lv" + index);
                this.skins[index] = node;
                this.weaponRights[index] = rightNode;
                this.weaponLefts[index] = leftNode;
            }
        }
        yuanconggongji(time = 20) {
            Laya.timer.clearAll(this);
            Laya.timer.frameLoop(time, this, this.startAttack2);
        }
        gameEnd() {
            Laya.timer.clearAll(this);
            for (let index = 0; index < this.gameObject.numChildren; index++) {
                const node = this.gameObject.getChildAt(index);
                if (node.name == "attack") {
                    node.active = false;
                    node.removeSelf();
                    node.destroy();
                }
            }
        }
        startAttack2() {
            if (Game.instance.gameStatus == GameStatus.none) {
                return;
            }
            var xx = 0;
            var zz = 2;
            if (Game.instance.playerCtr.nowEra >= 5) {
                var bulletName = "arrow";
                if (Game.instance.playerCtr.nowEra == 5) {
                    SoundMgr.instance.lv5_6.Play();
                }
                else if (Game.instance.playerCtr.nowEra == 6) {
                    bulletName = "arrow";
                    xx = -0.3;
                    SoundMgr.instance.lv5_6.Play();
                }
                else if (Game.instance.playerCtr.nowEra == 7) {
                    bulletName = "bullet1";
                    xx = -0.3;
                    SoundMgr.instance.lv7.Play();
                }
                else if (Game.instance.playerCtr.nowEra == 8) {
                    bulletName = "bullet2";
                    SoundMgr.instance.lv8.Play();
                }
                else if (Game.instance.playerCtr.nowEra == 9) {
                    bulletName = "bullet1";
                    xx = -0.4;
                    zz = 3;
                    SoundMgr.instance.lv9.Play();
                }
                else if (Game.instance.playerCtr.nowEra == 10) {
                    bulletName = "bullet3";
                    xx = -0.3;
                    zz = 3;
                    SoundMgr.instance.lv10_11.Play();
                }
                Game.instance.loadbullet(bulletName, (bulletNode) => {
                    var pos = this.transform.position.clone();
                    pos.x += xx;
                    pos.y += 1.7;
                    pos.z += zz;
                    bulletNode.transform.position = pos;
                });
            }
        }
        play(name) {
            this.animator.speed = PlayerBody.animatorSpeed;
            this.animator.crossFade(name, 0.1);
        }
        zhuanshenghuishen(r) {
            var transform = this.transform;
            Laya.Tween.to(transform, {
                localRotationEulerY: r,
                localPositionZ: 0,
            }, 100, null, Laya.Handler.create(this, () => {
            }), 0, true);
        }
        endAttack() {
            if (Game.instance.gameStatus == GameStatus.end)
                return;
            this.play(Game.instance.playerCtr.walkName);
            Game.instance.playerCtr.isAttack = false;
        }
        startAttack() {
        }
        shouji() {
            if (this.isMain) {
                Game.instance.playerCtr.playWalk(true);
                Game.instance.playerCtr.isRun = true;
                Game.instance.playerCtr.shoujiEnd();
            }
        }
        setEatSkin(era) {
            for (let index = 1; index < this.skins.length; index++) {
                const element = this.skins[index];
                var rightNode = this.weaponRights[index];
                var leftNode = this.weaponLefts[index];
                if (era == index) {
                    element.active = true;
                    rightNode.active = true;
                    leftNode.active = true;
                    this.nowSkinNode = element;
                    if (era > this._nowEra) {
                        this._nowEra = era;
                        Game.instance.loadLizi("shengji", new Laya.Vector3(0, 0, 0), this.gameObject);
                        if (this.isMain) {
                            SoundMgr.instance.Upgrade.Play();
                        }
                    }
                    this.alterSkin(era);
                }
                else {
                    element.active = false;
                    rightNode.active = false;
                    leftNode.active = false;
                }
            }
        }
        onTriggerEnter(other) {
            var name = other.owner.name;
            var mode = other.owner;
            other.enabled = false;
            if (PlayerBody.otherId == mode.id) {
                return;
            }
            PlayerBody.otherId = mode.id;
            if (name == "Bot") {
                var r = GlobalManager.twoPointRotation3D(this.transform.position, mode.transform.position);
                this.zhuanshenghuishen(r);
                var ctr = mode.getComponent(Enemy);
                this.play(Game.instance.playerCtr.attackName);
                ctr.beijidao();
                if (this._nowEra <= 4) {
                    SoundMgr.instance.lv1_4.Play();
                }
            }
            else if (name == "d3") {
                SoundMgr.instance.Popup.Play();
                var door3 = mode.getComponent(Door3);
                Game.instance.playerCtr.changeAge2(door3.getType, door3.eraValue);
            }
            else if (name == "d2") {
                SoundMgr.instance.Popup.Play();
                Game.instance.playerCtr.setPZ(1);
            }
            else if (name == "d1") {
                SoundMgr.instance.Popup.Play();
                var door1 = mode.getComponent(Door1);
                this.eraCalculate(door1.getTypes, door1.eraValues);
            }
            if (name == "d1" || name == "d2" || name == "d3") {
                Laya.timer.once(800, this, () => {
                    mode.active = false;
                    mode.removeSelf();
                    mode.destroy(true);
                });
            }
        }
        eraCalculate(jjccs, values) {
            var count = 0;
            if (Game.instance.playerCtr.bodys.transform.localPositionX > 0) {
                count = 0;
            }
            else if (Game.instance.playerCtr.bodys.transform.localPositionX < 0) {
                count = 1;
            }
            else {
                count = JTools.getRandomInt(0, 1);
            }
            Game.instance.playerCtr.changeAge2(jjccs[count], values[count]);
        }
        onUpdate() {
            this.transform.localRotationEulerY = Mathf.Lerp(this.transform.localRotationEulerY, 0, 0.1);
        }
        alterSkin(era) {
            var skinId = Game.instance.playerData.skinids[era];
            if (skinId) {
                var itemData = goodsConfig2[skinId];
                this.loadSkin(itemData.clothes);
            }
            else {
                this.loadSkin("sub2/skin/char_main_tex.png");
            }
        }
        loadSkin(clothes) {
            Laya.Texture2D.load(clothes, Laya.Handler.create(this, (texture) => {
                var skinNode = this.nowSkinNode;
                skinNode.skinnedMeshRenderer.material.albedoTexture = texture;
            }));
        }
    }
    PlayerBody.otherId = null;
    PlayerBody.animatorSpeed = 1;

    class PlayerBodyParent extends MonoBehaviour3D {
        constructor() {
            super();
            this.playerBodys = [];
        }
        ;
        onAwake() {
            super.onAwake();
            this.body = this.Find("body");
            var ctr = this.body.addComponent(PlayerBody);
            this.playerBodys.push(ctr);
            ctr.isMain = true;
        }
        yuanconggongji(time) {
            for (let index = 0; index < this.playerBodys.length; index++) {
                const element = this.playerBodys[index];
                element.yuanconggongji(time);
            }
        }
        startAttack2() {
            for (let index = 0; index < this.playerBodys.length; index++) {
                const element = this.playerBodys[index];
                element.startAttack2();
            }
        }
        gameEnd() {
            for (let index = 0; index < this.playerBodys.length; index++) {
                const element = this.playerBodys[index];
                element.gameEnd();
            }
        }
        triple() {
            var player1 = this.body.clone();
            this.gameObject.addChild(player1);
            var a1 = player1.getComponent(PlayerBody);
            player1.transform.localPosition = new Laya.Vector3(1.1, 0, 0);
            var player2 = this.body.clone();
            this.gameObject.addChild(player2);
            var a2 = player2.getComponent(PlayerBody);
            player2.transform.localPosition = new Laya.Vector3(-1.1, 0, 0);
            this.playerBodys.push(a1);
            this.playerBodys.push(a2);
            this.play(this._nowAnimatorName);
        }
        one() {
            var removes = this.playerBodys.splice(1, 2);
            for (let index = 0; index < removes.length; index++) {
                const element = removes[index];
                element.gameObject.destroy(true);
                element.destroy();
            }
        }
        play(name) {
            this._nowAnimatorName = name;
            this.playerBodys[0].play(name);
            if (this.playerBodys.length > 1) {
                this.playerBodys[1].play(name);
                this.playerBodys[2].play(name);
            }
        }
        setPZ(type = 0) {
            if (type) {
                this.triple();
            }
            else {
                this.one();
            }
        }
        setEatSkin(era) {
            for (let index = 0; index < this.playerBodys.length; index++) {
                const element = this.playerBodys[index];
                element.setEatSkin(era);
            }
        }
        zhuanshenghuishen(r) {
            if (this.playerBodys.length > 1)
                return;
            this.playerBodys[0].zhuanshenghuishen(r);
        }
        zhuanxiang(r) {
            for (let index = 0; index < this.playerBodys.length; index++) {
                const body = this.playerBodys[index];
                body.transform.localRotationEulerY -= r;
            }
        }
    }

    var AnimatorName;
    (function (AnimatorName) {
        AnimatorName["Flying_Back_Death"] = "Flying_Back_Death";
        AnimatorName["Flying_Back_Death2"] = "Flying_Back_Death2";
        AnimatorName["Flying_Back_Death3"] = "Flying_Back_Death3";
        AnimatorName["boss_bow"] = "boss_bow";
        AnimatorName["boss_melee"] = "boss_melee";
        AnimatorName["boss_piston"] = "boss_piston";
        AnimatorName["boss_rifle"] = "boss_rifle";
        AnimatorName["boss_spear"] = "boss_spear";
        AnimatorName["hit_run"] = "hit_run";
        AnimatorName["idle"] = "idle";
        AnimatorName["run"] = "run";
        AnimatorName["run_bow"] = "run_bow";
        AnimatorName["run_crossbow"] = "run_crossbow";
        AnimatorName["run_dual_piston"] = "run_dual_piston";
        AnimatorName["run_gun"] = "run_gun";
        AnimatorName["run_riffle_fix"] = "run_riffle_fix";
        AnimatorName["run_spear"] = "run_spear";
        AnimatorName["run_spear_no_attack"] = "run_spear_no_attack";
        AnimatorName["victory"] = "victory";
    })(AnimatorName || (AnimatorName = {}));
    var PlayerStatus;
    (function (PlayerStatus) {
        PlayerStatus[PlayerStatus["none"] = 0] = "none";
        PlayerStatus[PlayerStatus["idle"] = 1] = "idle";
        PlayerStatus[PlayerStatus["walk"] = 2] = "walk";
        PlayerStatus[PlayerStatus["att"] = 3] = "att";
        PlayerStatus[PlayerStatus["die"] = 4] = "die";
        PlayerStatus[PlayerStatus["Bounce"] = 5] = "Bounce";
        PlayerStatus[PlayerStatus["Speedup"] = 6] = "Speedup";
        PlayerStatus[PlayerStatus["Jumping"] = 7] = "Jumping";
        PlayerStatus[PlayerStatus["Flying"] = 8] = "Flying";
        PlayerStatus[PlayerStatus["Carry"] = 9] = "Carry";
        PlayerStatus[PlayerStatus["skateboard"] = 10] = "skateboard";
        PlayerStatus[PlayerStatus["Ice"] = 11] = "Ice";
        PlayerStatus[PlayerStatus["Pool"] = 12] = "Pool";
    })(PlayerStatus || (PlayerStatus = {}));
    var skinDatas = [
        "dress_1",
        "dress_2",
        "dress_3",
        "taozhuang_1",
        "taozhuang_2",
        "taozhuang_3",
        "taozhuang_4",
        "taozhuang_5",
        "taozhuang_6",
        "Wedding_Dress",
    ];
    class Player extends MonoBehaviour3D {
        constructor() {
            super();
            this.isRun = false;
            this.isMove = false;
            this.basicsSpeedX = 0.1;
            this.basicsSpeedZ = -0.14;
            this.playerStatus = PlayerStatus.idle;
            this.readyStatus = PlayerStatus.idle;
            this.skinID = 1000;
            this.skinSpeed = 1;
            this.buffSpeed = 1;
            this.shieldNode = null;
            this.addGold = 1;
            this.bodys = null;
            this.isCurve = false;
            this.skinNode = [];
            this.isAttack = false;
            this._level = 10;
            this.nowEra = null;
            this._nowAge = 0;
            this.bulletTime = 20;
            this.speedZ = 0.12;
            this.multiplayer = 0;
            this.restrictZ = 3.6;
            this.collisionSizeX = 1;
            this.nowSkin = null;
            this._nowWalkName = null;
            this.skinGold = 0;
            this.outpos = new Laya.Vector4();
        }
        get level() {
            return this._level;
        }
        set level(value) {
            this._level = value;
        }
        get nowAge() {
            return this._nowAge;
        }
        set nowAge(value) {
            this._nowAge = value;
            if (this._nowAge < 0) {
                this._nowAge = 0;
            }
        }
        gameStart() {
            GameView.instance.nowAge = this.nowAge;
            GlobalManager.nowGlod = 0;
            this.isRun = true;
            this.playWalk();
            this.multiplayer = 0;
            this.speedZ = 0.12;
            this.playerBodyParent.yuanconggongji(this.bulletTime);
            Laya.timer.once(100, this, () => {
                GameView.instance.era.visible = true;
            });
        }
        gameEnd() {
            this.playerBodyParent.gameEnd();
            GameView.instance.offAll();
            GameView.instance.shenfen.visible = false;
            Game.instance.gameStatus = GameStatus.end;
            if (Game.instance.endCtr.type == 2) {
                this.endGame();
                GameView.instance.era.visible = false;
            }
            Laya.timer.clearAll(this);
            this.isRun = false;
            if (Game.instance.endCtr.type == 1) {
                this.playerBodyParent.yuanconggongji(this.bulletTime * 0.8);
            }
            Game.instance.endCtr.gameEnd();
        }
        changeAge(age = 0) {
            this.nowAge += age;
            var era = Game.instance.getEra(this.nowAge);
            this.setEatSkin(era);
            if (GameView.instance) {
                GameView.instance.showAge(this.nowAge);
                GameView.instance.shidai();
            }
        }
        changeAge2(jjcc, value) {
            if (jjcc == 1)
                this.nowAge += value;
            else if (jjcc == 2)
                this.nowAge -= value;
            else if (jjcc == 3)
                this.nowAge *= value;
            else if (jjcc == 4)
                this.nowAge /= value;
            this.nowAge = Math.floor(this.nowAge);
            var era = Game.instance.getEra(this.nowAge);
            this.setEatSkin(era);
            if (GameView.instance) {
                GameView.instance.showAge(this.nowAge);
                GameView.instance.shidai();
            }
        }
        changeAge3(age = 0) {
            this.nowAge -= age;
            if (GameView.instance) {
                GameView.instance.showAge(this.nowAge);
            }
        }
        setPZ(type) {
            this.multiplayer = type;
            this.playerBodyParent.setPZ(type);
            if (this.multiplayer) {
                this.restrictZ = 2.2;
                this.collisionSizeX = 3;
                if (this.bodys.transform.localPositionX > this.restrictZ) {
                    this.bodys.transform.localPositionX = this.restrictZ;
                }
                else if (this.bodys.transform.localPositionX < this.restrictZ * -1) {
                    this.bodys.transform.localPositionX = this.restrictZ * -1;
                }
            }
            else {
                this.collisionSizeX = 1;
                this.restrictZ = 3.6;
            }
            this.playerBodyParent.yuanconggongji(this.bulletTime);
        }
        setEatSkin(era, isReset = false) {
            if (this.nowEra != era || isReset) {
                this.nowEra = era;
                this.playerBodyParent.setEatSkin(era);
                if (era <= 2) {
                    this.walkName = AnimatorName.run;
                    this.attackName = AnimatorName.hit_run;
                    this.attackName2 = AnimatorName.boss_melee;
                }
                else if (era <= 4) {
                    this.walkName = AnimatorName.run_spear_no_attack;
                    this.attackName = AnimatorName.run_spear;
                    this.attackName2 = AnimatorName.boss_spear;
                }
                else if (era == 5) {
                    this.walkName = AnimatorName.run_bow;
                    this.attackName = AnimatorName.run_bow;
                    this.attackName2 = AnimatorName.boss_bow;
                }
                else if (era == 6) {
                    this.walkName = AnimatorName.run_crossbow;
                    this.attackName = AnimatorName.run_crossbow;
                    this.attackName2 = AnimatorName.boss_rifle;
                }
                else if (era == 7) {
                    this.walkName = AnimatorName.run_gun;
                    this.attackName = AnimatorName.run_gun;
                    this.attackName2 = AnimatorName.boss_rifle;
                }
                else if (era == 8) {
                    this.walkName = AnimatorName.run_dual_piston;
                    this.attackName = AnimatorName.run_dual_piston;
                    this.attackName2 = AnimatorName.boss_piston;
                }
                else if (era <= 11) {
                    this.walkName = AnimatorName.run_riffle_fix;
                    this.attackName = AnimatorName.run_riffle_fix;
                    this.attackName2 = AnimatorName.boss_rifle;
                }
                if (Game.instance.gameStatus == GameStatus.start) {
                    this.playWalk();
                }
            }
        }
        onAwake() {
            super.onAwake();
            this.setReceiveShadow(false, true);
            this.playerData = GlobalManager.instance.getPlayerData();
            this.bodys = this.Find("bodys");
            this.playerBodyParent = this.bodys.getComponent(PlayerBodyParent);
            if (!this.playerBodyParent) {
                this.playerBodyParent = this.bodys.addComponent(PlayerBodyParent);
            }
            this.camera = Game.instance.camera;
            this.skinNode.length = 0;
            for (let index = 0; index < skinDatas.length; index++) {
                const element = this.bodys.getChildByName(skinDatas[index]);
                this.skinNode.push(element);
            }
            Player.isInit = true;
            Laya.timer.once(50, this, () => {
                this.homeInit();
            });
        }
        alterSkin() {
        }
        init() {
            this.isAttack = false;
            this._nowWalkName = null;
            this.shieldNode = null;
            this.playerStatus = PlayerStatus.idle;
            this.rocker = GlobalManager.rocker;
            this.readyStatus = PlayerStatus.walk;
        }
        lihua() {
            var pos = this.transform.position.clone();
            pos.y += 10;
            Game.instance.loadLizi("lihua", pos, null, 5000);
        }
        shiyong(era) {
            this.nowEra = null;
            this.nowAge = nianfens[era];
            this.changeAge();
        }
        gxxx() {
            this.nowAge = nianfens[Game.instance.playerData.era];
        }
        homeInit() {
            this.nowAge = nianfens[Game.instance.playerData.era];
            this._nowWalkName = null;
            Laya.timer.clearAll(this);
            this.playerStatus = PlayerStatus.idle;
            this.bodys.transform.localPosition = new Laya.Vector3(0, 0, 0);
            this.bodys.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            this.bodys.active = true;
            this.setPZ(this.multiplayer);
            this.playIdle();
            PlayerBody.animatorSpeed = 1;
            this.changeAge();
        }
        play(name) {
            this.playerBodyParent.play(name);
        }
        playWalk(isReset = false) {
            if (this.walkName == this._nowWalkName && isReset == false)
                return;
            this._nowWalkName = this.walkName;
            this.playerBodyParent.play(this.walkName);
        }
        playAttack() {
            this.playerBodyParent.play(this.attackName);
        }
        playWain1() {
            this.playerBodyParent.play(AnimatorName.victory);
            this.playerBodyParent.gameEnd();
        }
        revive() {
            this.bodys.transform.localPositionY = 0;
            this.bodys.transform.localPositionZ = 0;
            this.isRun = true;
        }
        onTriggerEnter(other) {
            var name = other.owner.name;
            var mode = other.owner;
            if (name == "woman") {
                var r = GlobalManager.twoPointRotation3D(this.bodys.transform.position, mode.transform.position);
                this.zhuanshenghuishen(r);
                var ctr = mode.getComponent(Enemy);
                this.playAttack();
                this.gengGaiDengJI(ctr.level, true);
            }
        }
        gengGaiDengJI(level, isAdd, isTX = true) {
            if (isAdd) {
                if (isTX)
                    Game.instance.loadLizi("eat_green", new Laya.Vector3(0, 1, 0), this.bodys);
            }
            else {
                if (isTX)
                    Game.instance.loadLizi("eat_red", new Laya.Vector3(0, 1, 0), this.bodys);
            }
            this.dengJiGengXing(level, isAdd);
        }
        shoujiEnd() {
            this.isAttack = false;
        }
        zhuanshenghuishen(r) {
            this.playerBodyParent.zhuanshenghuishen(r);
        }
        endGame() {
            GameView.instance.offAll();
            var transform = this.bodys.transform;
            Laya.Tween.to(transform, {
                localPositionX: 0,
            }, 500, null, Laya.Handler.create(this, () => {
            }), 0, true);
            var transform2 = this.camera.transform;
            Laya.Tween.to(transform2, {
                localPositionX: 0,
            }, 500);
        }
        playIdle() {
            this.playerBodyParent.play(AnimatorName.idle);
        }
        onUpdate() {
            if (Game.instance.gameStatus != GameStatus.start) {
                return;
            }
            if (!this.isRun)
                return;
            this.isMove = this.rocker.isMove;
            this.transform.translate(new Laya.Vector3(0, 0, this.speedZ), true);
            if (this.isMove) {
                speedX = this.rocker.moveX * -0.022;
                if (Math.abs(this.bodys.transform.localPositionX + speedX) > this.restrictZ) {
                    speedX = 0;
                }
                this.bodys.transform.localPositionX += speedX;
                this.playerBodyParent.zhuanxiang(this.rocker.moveX * 0.3);
                this.rocker.moveX = 0;
            }
            Game.instance.camera.transform.localPositionX = (this.bodys.transform.localPositionX * 0.8);
            if (Game.instance.endCtr.type == 1) {
                if (this.speedZ != 0.3 && this.transform.localPositionZ >= Game.instance.levelLength - 10) {
                    this.speedZ = 0.3;
                    if (this.nowEra <= 2)
                        PlayerBody.animatorSpeed = 3;
                    else {
                        PlayerBody.animatorSpeed = 2;
                    }
                    this.playWalk(true);
                    this.endGame();
                }
            }
            if (this.transform.localPositionZ >= Game.instance.levelLength) {
                this.gameEnd();
            }
            Game.instance.camera.viewport.project(this.bodys.transform.position, Game.instance.camera.projectionViewMatrix, this.outpos);
            GameView.instance.paiziPos(this.outpos.x / Laya.stage.clientScaleX, this.outpos.y / Laya.stage.clientScaleY);
        }
        dengJiGengXing(level, isAdd) {
            if (GameView.instance)
                GameView.instance.showAddLevel(level, isAdd, 0);
        }
    }
    Player.isInit = false;
    var speedX = 0;
    var nianfens = [
        100,
        100,
        301,
        701,
        1001,
        1501,
        2301,
        4501,
        6001,
        10001,
        18001,
    ];

    class Boss extends MonoBehaviour3D {
        constructor() {
            super();
            this.moneyValue = 1;
            this.skins = [];
            this.weaponRights = [];
            this.weaponLefts = [];
            this.posArray = [];
            this._posIndex = 0;
            this._callback = null;
        }
        onAwake() {
            super.onAwake();
            this.setReceiveShadow(false, true);
            var human_char_v10 = this.Find("human_char_v10");
            this.animator = this.gameObject.getComponent(Laya.Animator);
            var weaponLeft = this.Find("human_char_v10/mixamorig:Hips/mixamorig:Spine/mixamorig:Spine1/mixamorig:Spine2/mixamorig:LeftShoulder/mixamorig:LeftArm/mixamorig:LeftForeArm/mixamorig:LeftHand/Weapon Left");
            var weaponRight = this.Find("human_char_v10/mixamorig:Hips/mixamorig:Spine/mixamorig:Spine1/mixamorig:Spine2/mixamorig:RightShoulder/mixamorig:RightArm/mixamorig:RightForeArm/mixamorig:RightHand/Weapon Right");
            this.weaponRights[0] = null;
            this.weaponLefts[0] = null;
            this.skins[0] = null;
            for (let index = 1; index < 11; index++) {
                var node = human_char_v10.getChildByName("lv_" + index);
                var leftNode = weaponLeft.getChildByName("lv" + index);
                var rightNode = weaponRight.getChildByName("lv" + index);
                this.skins[index] = node;
                this.weaponRights[index] = rightNode;
                this.weaponLefts[index] = leftNode;
            }
        }
        init(era) {
            this.animator.speed = 1;
            this.setEatSkin(era);
            this.play(AnimatorName.idle);
            if (era <= 2) {
                this.attackName = AnimatorName.boss_melee;
            }
            else if (era <= 4) {
                this.attackName = AnimatorName.boss_spear;
            }
            else if (era == 5) {
                this.attackName = AnimatorName.boss_bow;
            }
            else if (era == 6) {
                this.attackName = AnimatorName.boss_rifle;
            }
            else if (era == 7) {
                this.attackName = AnimatorName.boss_rifle;
            }
            else if (era == 8) {
                this.attackName = AnimatorName.boss_piston;
            }
            else if (era <= 10) {
                this.attackName = AnimatorName.boss_rifle;
            }
        }
        playAttack() {
            this.animator.crossFade(this.attackName, 0.1);
        }
        play(name) {
            this.animator.crossFade(name, 0.1);
        }
        move() {
            var pos = new Laya.Vector3(this.transform.localPositionX * 1.5, 3.5, 25);
            this.BethelCurve(this.transform.localPosition.clone(), new Laya.Vector3(this.transform.localPositionX, 8.5, 22), pos, null);
            this.animator.speed = 1;
            this.play(AnimatorName.Flying_Back_Death2);
            Laya.timer.once(2000, this, () => {
                this.play(AnimatorName.Flying_Back_Death3);
            });
        }
        BethelCurve(startpos, centerpos, endpos, callback) {
            let points = [];
            let point1 = startpos;
            let point2 = centerpos;
            let point3 = endpos;
            points.push(point1);
            points.push(point2);
            points.push(point3);
            this.posArray = BezierPath.CreateBezierPoints(points, 120);
            this.posArray.push({ x: endpos.x, y: endpos.y, z: endpos.z });
            this._posIndex = 0;
            this._callback = callback;
            Laya.timer.clearAll(this);
            Laya.timer.frameLoop(1, this, this.onUpdate2);
            this.isRun = true;
        }
        onUpdate2() {
            if (!this.isRun)
                return;
            var pos = this.transform.localPosition;
            pos.x = this.posArray[this._posIndex].x;
            pos.y = this.posArray[this._posIndex].y;
            pos.z = this.posArray[this._posIndex].z;
            this.transform.localPosition = pos;
            this._posIndex++;
            if (this._posIndex >= this.posArray.length) {
                this.isRun = false;
            }
        }
        setEatSkin(era) {
            for (let index = 1; index < this.skins.length; index++) {
                const element = this.skins[index];
                var rightNode = this.weaponRights[index];
                var leftNode = this.weaponLefts[index];
                if (era == index) {
                    this.nowSkinNode = element;
                    element.active = true;
                    rightNode.active = true;
                    leftNode.active = true;
                }
                else {
                    element.active = false;
                    rightNode.active = false;
                    leftNode.active = false;
                }
            }
        }
    }

    class GoodsItem extends ui.item.GoodsItemUI {
        constructor() {
            super();
            this._playerData = null;
            this._itemData = null;
        }
        init(data = null, shopView = null) {
            if (!data) {
                data = this._itemData;
            }
            if (shopView) {
                this._shopView = shopView;
            }
            this._itemData = data;
            this._playerData = GlobalManager.instance.getPlayerData();
            this.icon2.skin = data.icon;
            this.bg.skin = "images/shop/pf_di3.png";
            if (this._playerData.getPlayerItem(data.id).progress >= data.progress) {
                this.bg.skin = "images/shop/pf_di2.png";
            }
            if (this._playerData.getPlayerItem(data.id).progress >= data.progress) {
                this.zhuangtai.skin = "images/shop/shiyong.png";
            }
            else {
                this.zhuangtai.skin = "images/shop/whq.png";
            }
            if (data.id == this._shopView.selfSkinData.id) {
                this.bg.skin = "images/shop/pf_di1.png";
            }
            var id = this._playerData.skinids[data.era];
            if (this._playerData.getPlayerItem(data.id).progress >= data.progress) {
                if (data.id == id) {
                    this.zhuangtai.skin = "images/shop/shiyongzhong.png";
                }
                else {
                    this.zhuangtai.skin = "images/shop/shiyong.png";
                }
            }
            this.biaoqian.visible = false;
            this.qmask.visible = false;
            if (data.acquireType == AcquireType.gold) {
                this.biaoqian.visible = false;
            }
            else if (data.acquireType == AcquireType.video) {
                this.biaoqian.visible = false;
            }
            else if (data.acquireType == AcquireType.level) {
                this.biaoqian.visible = true;
                this.biaoqian.skin = "images/shop/lab_cg.png";
                if (this._playerData.currentLevel < data.progress) {
                    this.qmask.visible = true;
                    this.dengji_txt.text = "Cấp độ " + String(data.progress) + "\nmở khóa";
                }
            }
            else if (data.acquireType == AcquireType.sign) {
                this.biaoqian.visible = true;
                this.biaoqian.skin = "images/shop/lab_qd.png";
            }
            else if (data.acquireType == AcquireType.lottery) {
                this.biaoqian.visible = true;
                this.biaoqian.skin = "images/shop/lab_cj.png";
            }
        }
        onAwake() {
            this.on(Laya.Event.CLICK, this, this.onShowPlayer);
        }
        onShowPlayer() {
            this._shopView.selfSkinData = this._itemData;
            this._shopView.alterSkin(this._itemData.id);
            this._shopView.updateArray();
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class ttAdManager {
        static createBannerAd(callback) {
            if (!window["tt"] || !window["tt"].createBannerAd) {
                return;
            }
            let banner = window["tt"].createBannerAd({
                adUnitId: "2u4u38c9ijp4gdk39m",
                adIntervals: 30,
                style: { left: 0, top: ConfigData.PhoneMsg.screenHeight, width: ConfigData.PhoneMsg.screenWidth }
            });
            banner.onLoad(function () {
                banner.hide();
                ttAdManager.bannerAd = banner;
                callback && callback.run();
            });
            banner.onError(function (res) {
                console.log("banner广告拉取失败！", res);
            });
            banner.onResize(function (res) {
                if (ConfigData.IsIphoneX) {
                    banner.style.top = (ConfigData.PhoneMsg.screenHeight - 20) - res.height;
                }
                else {
                    banner.style.top = (ConfigData.PhoneMsg.screenHeight) - res.height;
                }
                banner.style.left = (ConfigData.PhoneMsg.screenWidth - res.width) / 2;
            });
        }
        static showbannerAd() {
            ttAdManager.bannerAd && ttAdManager.bannerAd.show();
        }
        static hidebannerAd() {
            ttAdManager.bannerAd && ttAdManager.bannerAd.hide();
        }
        static createVideoAd(callback, fallcallback, errcallback, istips = true) {
            if (!window["h5api"]) {
                callback && callback.run();
                return;
            }
            if (!ttAdManager.isPlay) {
                return;
            }
            ttAdManager.isPlay = false;
            window["h5api"].canPlayAd((data) => {
                Laya.SoundManager.stopAll();
                window["h5api"].playAd((data) => {
                    let isPlaySound = SoundMgr.isPlaySound();
                    switch (data.code) {
                        case 10000: break;
                        case 10001:
                            callback && callback.run();
                            ttAdManager.isPlay = true;
                            isPlaySound && SoundMgr.instance.BgmPlay();
                            break;
                        default:
                            fallcallback && fallcallback.run();
                            ttAdManager.isPlay = true;
                            isPlaySound && SoundMgr.instance.BgmPlay();
                            break;
                    }
                });
            });
        }
        static playVideoAd(callback, fallcallback, errcallback, istips = true) {
            if (ttAdManager.videoAd) {
                ttAdManager.videoAd.show().then(() => {
                    Laya.SoundManager.stopAll();
                    console.log("视频广告展示成功");
                }).catch(err => {
                    console.log("视频广告展示失败", err);
                    errcallback && errcallback.run();
                    istips && WxManager.OpenTips("Không tải được video! Vui lòng thử lại sau!");
                    ttAdManager.isPlay = true;
                });
                let functioncallback = (res) => {
                    ttAdManager.videoAd.offClose(functioncallback);
                    if (res.isEnded) {
                        if (callback) {
                            callback.run();
                        }
                    }
                    else {
                        istips && WxManager.OpenTips("Nhận thất bại! Mời các bạn xem video!");
                        if (fallcallback) {
                            fallcallback.run();
                        }
                    }
                    ttAdManager.isPlay = true;
                    let isPlaySound = SoundMgr.isPlaySound();
                    isPlaySound && SoundMgr.instance.BgmPlay();
                };
                ttAdManager.videoAd.onClose(functioncallback);
            }
            else {
                errcallback && errcallback.run();
                istips && WxManager.OpenTips("Không tải được video! Vui lòng thử lại sau!");
                ttAdManager.isPlay = true;
            }
        }
        static createInterstitialAd() {
            if (!window["tt"] || !window["tt"].createInterstitialAd) {
                return;
            }
            let interstitialAd = window["tt"].createInterstitialAd({
                adUnitId: "3q05ovn9le12agy4sf",
            });
            interstitialAd.load().then(() => {
                console.log("插屏广告创建成功");
                interstitialAd.show();
            }).catch(err => {
                console.log("插屏广告创建失败", err);
            });
            interstitialAd.onLoad(() => { });
            interstitialAd.onError((err) => { console.log("插屏广告创建失败", err); });
        }
    }
    ttAdManager.isPlay = true;

    class ShopView extends ui.views.ShopViewUI {
        constructor() {
            super();
            this._showData = [];
            this.playerData = null;
            this.selfSkinData = null;
            this._goodsItem = [];
            this._index = 0;
            this._closeCallback = null;
        }
        onAwake() {
            this.playerData = GlobalManager.instance.getPlayerData();
            window["sd"] = this;
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.box.width = Laya.stage.width;
            this.box.height = Laya.stage.height;
            this.autoDestroyAtClosed = true;
            this.tab.selectHandler = Laya.Handler.create(this, this.onSelect, null, false);
            this.return_btn.on(Laya.Event.CLICK, this, this.closeSelf);
            this.tab.selectedIndex = 0;
            Laya.timer.once(100, this, () => {
                this.CreateScene3D();
            });
            this.DataUpdate();
            this.quqiandao_btn.on(Laya.Event.CLICK, this, this.onSign);
            this.goldGm_btn.on(Laya.Event.CLICK, this, this.onGold);
            this.shiyong_btn.on(Laya.Event.CLICK, this, this.onShiYong);
            this.shiyongzong_btn.on(Laya.Event.CLICK, this, this.onBuShiYong);
            this.dedao_btn.on(Laya.Event.CLICK, this, this.onVideo);
            this.shiyongs_btn.visible = false;
            this.dedao_btn.visible = false;
            this.gold_btn.visible = false;
            this.qiandao_btn.visible = false;
            this.hdGold_btn.on(Laya.Event.CLICK, this, this.onhdGold);
            EventMgr.instance.on(EventType.DataUpdate, this, this.DataUpdate);
        }
        onhdGold() {
            ttAdManager.createVideoAd(Laya.Handler.create(this, () => {
                GlobalManager.instance.playerData.gold += ConfigData.videoGold;
                WxManager.OpenTips("Chúc mừng nhận " + ConfigData.videoGold + " vàng");
                EventMgr.instance.event(EventType.DataUpdate, this);
            }), Laya.Handler.create(this, () => {
            }));
        }
        DataUpdate() {
            this.zuanshi_txt.text = String(GlobalManager.instance.getPlayerData().gold);
            GlobalManager.instance.savePlayerData();
        }
        onVideo() {
            ttAdManager.createVideoAd(Laya.Handler.create(this, () => {
                this.playerData.getPlayerItem(this.selfSkinData.id).progress = 100;
                this.onShiYong();
                this.updateArray();
            }), Laya.Handler.create(this, () => {
            }));
        }
        onShiYong() {
            this.playerData.skinids[this.selfSkinData.era] = this.selfSkinData.id;
            GlobalManager.instance.savePlayerData();
            this.updateArray();
        }
        onBuShiYong() {
            this.playerData.skinids[this.selfSkinData.era] = null;
            GlobalManager.instance.savePlayerData();
            this.updateArray();
        }
        onGold() {
            var isV = GlobalManager.expendGold(this.selfSkinData.price, () => {
            });
            if (isV) {
                this.playerData.getPlayerItem(this.selfSkinData.id).progress = 1000;
                this.onShiYong();
            }
        }
        onSign() {
            ViewMgr.instance.OpenSign(this, () => {
            });
            this.close();
        }
        onSelect(index) {
            this._index = index;
            this._goodsItem = [];
            this._showData = [];
            for (var i = 0; i < goodsConfig.length; i++) {
                var data = goodsConfig[i];
                if (data.classify == index) {
                    this._showData.push(data);
                    if (i == 0) {
                        this.selfSkinData = data;
                    }
                }
            }
            this.SignSet();
        }
        closeSelf() {
            Game.instance.alterSkin();
            this.close();
        }
        SignSet() {
            this.list.itemRender = GoodsItem;
            this.list.vScrollBarSkin = null;
            this.list.array = this._showData;
            this.list.renderHandler = Laya.Handler.create(this, this.freshList, null, false);
            this.updateArray();
        }
        updateArray() {
            this.shiyongs_btn.visible = false;
            this.dedao_btn.visible = false;
            this.gold_btn.visible = false;
            this.qiandao_btn.visible = false;
            if (!this.selfSkinData) {
                return;
            }
            this.price_txt.text = String(this.selfSkinData.price);
            if (this.playerData.skinids.indexOf(this.selfSkinData.id) != -1) {
                this.shiyongs_btn.visible = true;
                var shiyongz = this.shiyongs_btn.getChildAt(0);
                var shiyong = this.shiyongs_btn.getChildAt(1);
                shiyongz.visible = true;
                shiyong.visible = false;
            }
            else {
                var shiyongz = this.shiyongs_btn.getChildAt(0);
                var shiyong = this.shiyongs_btn.getChildAt(1);
                shiyongz.visible = false;
                shiyong.visible = false;
                if (this.playerData.getPlayerItem(this.selfSkinData.id).progress >= this.selfSkinData.progress) {
                    shiyong.visible = true;
                    this.shiyongs_btn.visible = true;
                }
                else {
                    if (this.selfSkinData.acquireType == AcquireType.gold) {
                        this.gold_btn.visible = true;
                    }
                    else if (this.selfSkinData.acquireType == AcquireType.sign) {
                        this.qiandao_btn.visible = true;
                    }
                    else if (this.selfSkinData.acquireType == AcquireType.level) {
                        if (this.playerData.getPlayerItem(this.selfSkinData.id).progress < this.selfSkinData.progress && this.playerData.currentLevel >= this.selfSkinData.progress) {
                            this.dedao_btn.visible = true;
                        }
                    }
                }
            }
            for (var i = 0; i < this._goodsItem.length; i++) {
                this._goodsItem[i].init();
            }
        }
        freshList(item, idx) {
            item.init(this._showData[idx], this);
            this._goodsItem[idx] = item;
        }
        onDestroy() {
            Game.instance.playerCtr.setEatSkin(this.playerData.era, true);
            if (this.Scene3D) {
                this.Scene3D.destroy();
            }
            Laya.timer.clearAll(this);
            EventMgr.instance.off(EventType.DataUpdate, this, this.DataUpdate);
        }
        onDisable() {
            Laya.timer.clearAll(this);
            if (this._closeCallback)
                this._closeCallback();
            EventMgr.instance.off(EventType.DataUpdate, this, this.DataUpdate);
        }
        onOpened(arg) {
            this._closeCallback = null;
            if (arg) {
                this._closeCallback = arg[0];
            }
        }
        CreateScene3D() {
            this.Scene3D = this.addChildAt(new Laya.Scene3D(), 1);
            this.Camera = this.Scene3D.addChild(new Laya.Camera());
            this.Camera.clearFlag = Laya.CameraClearFlags.DepthOnly;
            this.Camera.transform.position = new Laya.Vector3(0, 1.5, -6);
            this.Camera.transform.rotationEuler = new Laya.Vector3(-15, 180, 0);
            this.DirectionalLight = this.Scene3D.addChild(new Laya.DirectionLight());
            this.DirectionalLight.transform.position = new Laya.Vector3(0, 0, 0);
            this.DirectionalLight.transform.rotationEuler = new Laya.Vector3(-50, 180, 0);
            this.DirectionalLight.color = new Laya.Vector3(1, 1, 1);
            this.role = Game.instance.playerBodyNode.clone();
            this.Scene3D.addChild(this.role);
            this.role.transform.localRotationEuler = new Laya.Vector3(0, 180, 0);
            this.role.transform.localPosition = new Laya.Vector3(0, 0, 0);
            var animator = this.role.getComponent(Laya.Animator);
            animator.crossFade(AnimatorName.idle, 0.1);
            this.roleCtr = this.role.addComponent(Boss);
            this.roleCtr.init(1);
            this.loadSkin(this.selfSkinData);
        }
        roleZ() {
            this.role.transform.localRotationEulerY += 1;
        }
        alterSkin(skinId = null) {
            var itemData = goodsConfig2[skinId];
            this.roleCtr.init(itemData.era);
            this.loadSkin(itemData);
        }
        loadSkin(itemData) {
            this.era_txt.text = eraNames[itemData.era];
            this.atk_txt.text = "Tấn công:" + String(artsSkin[itemData.era]);
            Laya.Texture2D.load(itemData.clothes, Laya.Handler.create(this, (texture) => {
                var skinNode = this.roleCtr.nowSkinNode;
                skinNode.skinnedMeshRenderer.material.albedoTexture = texture;
            }));
        }
    }
    var artsSkin = [
        4,
        4,
        8,
        13,
        18,
        23,
        28,
        33,
        38,
        43,
        48,
        53,
    ];
    var eraNames = [
        "Thời nguyên thủy",
         "Thời nguyên thủy",
         "Thời kì đồ đá",
         "Thời đại đồ đồng",
         "Cuối thời đại đồ đồng",
         "Thời kỳ đồ sắt",
         "Cuối thời kỳ đồ sắt",
         "Thời đại súng ống",
         "Cuối thời đại súng ống",
         "Thời đại thông tin",
         "Tuổi Giáp Tý",
         "Thời đại người máy",
    ];
    var eraNameC = [
        "#7a9aff",
        "#77f4ff",
        "#7fff62",
        "#fff468",
        "#ffc277",
        "#ff8f7c",
        "#ff8ae1",
        "#d18bff",
        "#ab81a4",
        "#c11ab7",
        "#f2265b",
    ];

    class GameView extends BaseView {
        constructor() {
            super();
            this._playerData = null;
            this.nowPm = 300;
            this.rankingPages = [];
            this.selfCount = 0;
            this._nowAge = 0;
            this._gold = 0;
        }
        onAwake() {
            super.onAwake();
            this._playerData = GlobalManager.instance.getPlayerData();
            this.autoDestroyAtClosed = true;
            GameView.instance = this;
            GlobalManager.rocker = new RockerView(this);
            Laya.stage.addChild(GlobalManager.rocker);
            Game.instance.init();
            ConfigData.gold = 0;
            window["gamev"] = this;
            this.cp_txt.value = "0";
            this.nowAge = Game.instance.playerCtr.nowAge;
            this.shidai();
            recorderManager.startScreenCap();
        }
        shidai() {
            this.shenfen.color = eraNameC[Game.instance.playerCtr.nowEra];
            this.shenfen.text = eraNames[Game.instance.playerCtr.nowEra];
        }
        dianjigongji() {
            this.shouzhi2.visible = true;
            this.on(Laya.Event.CLICK, this, this.gongji);
        }
        gongji() {
            this.shouzhi2.visible = false;
            Game.instance.endCtr.gongji1();
        }
        showBossHp(b) {
            Laya.Tween.to(this.bossHP1, {
                width: 194 * b
            }, 800, null, Laya.Handler.create(this, () => {
                if (b == 0) {
                    this.bossHP1.width = 1;
                }
            }));
        }
        get nowAge() {
            return this._nowAge;
        }
        set nowAge(value) {
            this._nowAge = Math.floor(value);
            this.era_txt.text = String(this._nowAge);
        }
        showAge(age) {
            Laya.Tween.to(this, {
                nowAge: age
            }, 300);
        }
        showSelfHp(b) {
            Laya.Tween.to(this.selfHp1, {
                width: 188 * b
            }, 800, null, Laya.Handler.create(this, () => {
                if (b == 0) {
                    this.selfHp1.width = 1;
                }
            }));
        }
        onDestroy() {
            GameView.instance = null;
            Laya.timer.clearAll(this);
            Laya.stage.removeChild(GlobalManager.rocker);
            GlobalManager.rocker.destroy(true);
        }
        paiziPos(x, y) {
            this.shuzi.pos(x, y);
        }
        showAddLevel(level, isAdd, y) {
            var num = new NumA();
            num.setShow(level, isAdd, y);
            this.shuzi.addChild(num);
        }
        gainWealth(posX = 375, posY = 500, count = 2) {
            var goldCount = ConfigData.gold + count;
            var pos = this.glod_ani.localToGlobal(new Laya.Point(0, 0), true, Laya.stage);
            let img = new Laya.Image("images/icon_zanshi.png");
            img.x = posX;
            img.y = posY;
            Laya.stage.addChild(img);
            Laya.Tween.to(img, {
                x: pos.x,
                y: pos.y,
                scaleX: 1.2,
                scaleY: 1.2
            }, 500, null, Laya.Handler.create(this, () => {
                img.removeSelf();
                this.cp_txt.value = goldCount.toString();
                this.glod_ani.play(0, false);
            }));
            ConfigData.gold += count;
        }
        get gold() {
            return this._gold;
        }
        set gold(value) {
            this._gold = Math.floor(value);
            this.cp_txt.value = String(this._gold);
        }
        gainWealth2(count) {
            ConfigData.gold += count;
            Laya.Tween.to(this, {
                gold: ConfigData.gold,
            }, 500, null, Laya.Handler.create(this, () => {
            }));
            this.glod_ani.play(0, false);
            SoundMgr.instance.Coinendgame.Play();
        }
        onClosed() {
            GameView.instance = null;
            Laya.timer.clearAll(this);
            this.offAll();
        }
        update() {
        }
    }

    class TMusic {
        static PlaySound(name, isloop = 1) {
            if (GlobalManager.instance.getPlayerData().isSound) {
                Laya.SoundManager.autoReleaseSound = false;
                Laya.SoundManager.playSound("sound/" + name + ".mp3", isloop);
            }
        }
        static PlayBGM(name = null) {
            if (!name) {
                name = TMusic.currentBgm;
            }
            else {
                TMusic.currentBgm = name;
            }
            if (GlobalManager.instance.getPlayerData().isSound) {
                Laya.SoundManager.playMusic("sound/" + name + ".mp3", 0);
            }
        }
        static StopBGM() {
            Laya.SoundManager.stopMusic();
        }
        static PlayVibrateShort() {
            if (UserData.IsVibrate) {
                if (Laya.Browser.window["tt"]) {
                    Laya.Browser.window["tt"].vibrateShort();
                }
            }
        }
        static PlayVibrateLong() {
            if (UserData.IsVibrate) {
                if (Laya.Browser.window["tt"]) {
                    Laya.Browser.window["tt"].vibrateLong();
                }
            }
        }
    }
    TMusic.currentBgm = "";

    class shake3D {
        constructor() {
            this._isShaking = false;
            this._startTime = 0;
            this._offsetPos = [0, 0];
            this.shank_I = 0;
            this._orgX = 0;
            this._orgY = 0;
        }
        static getInstace() {
            if (!this.instace) {
                this.instace = new shake3D();
            }
            return this.instace;
        }
        exe(target, intensity, duration, radius) {
            if (this._isShaking) {
                return;
            }
            this._isShaking = true;
            this._startTime = Laya.timer.currTimer;
            this._offsetPos = [0, 0];
            this.shank_I = 0;
            this._target = target;
            this._orgX = target.transform.position.x;
            this._orgY = target.transform.position.y;
            Laya.timer.loop(intensity, this, this._pos, [duration, radius]);
        }
        clear() {
            Laya.timer.clearAll(this);
        }
        _pos(duration, radius) {
            this._offsetPos[this.shank_I % 2] = (this._offsetPos[this.shank_I % 2] > 0) ? -radius : radius;
            this.shank_I++;
            this._target.transform.localPositionX += this._offsetPos[0];
            this._target.transform.localPositionY += this._offsetPos[1];
            if (Laya.timer.currTimer - this._startTime >= duration) {
                Laya.timer.clear(this, this._pos);
                this.shank_I = 0;
                this._isShaking = false;
                this._target.transform.position.x = this._orgX;
                this._target.transform.position.y = this._orgY;
                this._target = null;
            }
        }
    }

    var up = new Laya.Vector3(0, 1, 0);
    class Camera extends MonoBehaviour3D {
        constructor() {
            super();
            this.radians = -1;
            this.angle = 180;
            this.isRun = false;
            this.targetAngle = 360;
            this.is123 = 0;
            this.jianshu = 1;
            this.fw = 10;
            this.endType = 0;
        }
        onAwake() {
            super.onAwake();
            window["Camera"] = this;
        }
        shake() {
            shake3D.getInstace().exe(this.gameObject, 50, 1000, 0.1);
            TMusic.PlayVibrateShort();
        }
        shangchuang() {
            Game.instance.settlementTiem = 100;
            this.angle = 25;
            this.jianshu = 0.1;
            this.targetAngle = 60;
            this.isRun = true;
        }
        endWin() {
            Game.instance.settlementTiem = 1000;
            this.angle = 30;
            this.jianshu = 0.05;
            this.targetAngle = 40;
            this.isRun = true;
        }
        ok() {
        }
        jifei() {
            var transform = this.transform;
            Laya.Tween.to(transform, {
                localRotationEulerX: -15,
                localRotationEulerY: -155,
            }, 2000, null, Laya.Handler.create(this, () => {
            }), 0, true);
        }
        init() {
            this.isRun = false;
        }
        onUpdate() {
            if (!this.isRun)
                return;
            this.angle += this.jianshu;
            if (this.angle > this.targetAngle) {
                this.angle = this.targetAngle;
            }
            this.radians = Math.PI / 180 * this.angle;
            var x = Math.sin(this.radians) * this.fw;
            var z = Math.cos(this.radians) * this.fw;
            this.transform.localPositionX = x;
            this.transform.localPositionZ = z;
            if (this.endType == 1)
                return;
            this.transform.lookAt(this.central, up, true);
            if (this.angle == this.targetAngle) {
                this.isRun = false;
                this.ok();
                return;
            }
        }
        engGame(angle = 265, fw = 7) {
            if (Game.instance.playerCtr.nowEra < 5) {
                this.central = new Laya.Vector3(0, 3, 1.5);
            }
            else {
                this.central = new Laya.Vector3(0, 3, 1.8);
            }
            this.endType = 0;
            this.angle = 180;
            this.jianshu = 0.5;
            this.fw = fw;
            this.isRun = true;
            this.targetAngle = angle;
            var transform = this.transform;
            Laya.Tween.to(transform, {
                localPositionY: 7,
            }, 500, null, Laya.Handler.create(this, () => {
            }), 0, true);
        }
        engGame2() {
            this.endType = 1;
            this.jianshu = 2;
            this.isRun = true;
            this.targetAngle = 360;
            var transform = this.transform;
            Laya.Tween.to(transform, {
                localPositionY: 3,
                localRotationEulerY: 0,
            }, 500, null, Laya.Handler.create(this, () => {
                Game.instance.playerCtr.playWain1();
                Game.instance.playerCtr.lihua();
            }), 0, true);
        }
        engGame3() {
            var transform = this.transform;
            Laya.Tween.to(transform, {
                localRotationEulerY: -80,
            }, 1000, null, Laya.Handler.create(this, () => {
            }), 0, true);
        }
        engGame4() {
            var transform = this.transform;
            Laya.Tween.to(transform, {
                localPositionZ: -12,
            }, 1000, null, Laya.Handler.create(this, () => {
            }), 0, true);
        }
    }
    var pp = new Laya.Vector3(0, 3, 1.5);

    class EndBase extends MonoBehaviour3D {
        constructor() {
            super();
            this.jiesuanLevel = 1;
            this.zuijiajiangli = 0;
        }
        removeReceiveShadow(role) {
            for (var i = 0; i < role.numChildren; i++) {
                var skinnedMeshRenderer = role.getChildAt(i).skinnedMeshRenderer;
                if (skinnedMeshRenderer) {
                    skinnedMeshRenderer.receiveShadow = false;
                }
            }
        }
        removeReceiveShadow2(role) {
            for (var j = 0; j < role.numChildren; j++) {
                var skinnedMeshRenderer = role.getChildAt(j).skinnedMeshRenderer;
                var skinnedMeshRenderer2 = role.getChildAt(j).meshRenderer;
                if (skinnedMeshRenderer) {
                    skinnedMeshRenderer.castShadow = false;
                    skinnedMeshRenderer.receiveShadow = false;
                }
                else if (skinnedMeshRenderer2) {
                    skinnedMeshRenderer2.castShadow = false;
                    skinnedMeshRenderer2.receiveShadow = false;
                }
                else {
                    var node = role.getChildAt(j);
                    if (node.name != "Bip001")
                        this.removeReceiveShadow2(node);
                }
            }
        }
        init() {
            this.jiesuanLevel = 1;
            this.zuijiajiangli = 0;
        }
        shengji() {
        }
        gameEnd() {
        }
        baiPoss(mode) {
        }
    }
    EndBase.type = 2;

    class Monster extends MonoBehaviour3D {
        constructor() {
            super();
            this.isRun = false;
            this.aName = 1;
            this.names1 = ["face", "simple_character_01", "teeth_01", "tongue"];
            this.names2 = ["horn", "Monster_ice", "teeth_01"];
            this.names3 = ["mixamorig:Hips", "Monster_green", "tail", "teeth_01"];
        }
        onAwake() {
            super.onAwake();
            this.animator = this.gameObject.getComponent(Laya.Animator);
            this.monster_01 = this.Find("Monster_02/Model/monster_01");
        }
        init() {
            this.animator.speed = 1;
            this.gameObject.active = true;
            var names;
            var level = JTools.getRandomInt(1, 3);
            if (level == 1) {
                names = this.names1;
            }
            else if (level == 2) {
                names = this.names2;
            }
            else {
                names = this.names3;
            }
            for (let index = 0; index < this.monster_01.numChildren; index++) {
                const node = this.monster_01.getChildAt(index);
                this.setReceiveShadow(false, true, node);
                if (names.indexOf(node.name) != -1) {
                    node.active = true;
                }
                else {
                    node.active = false;
                }
            }
            this.animator.crossFade("MonsterIdle", 0.1);
        }
        daiji() {
            this.animator.crossFade("MonsterIdle", 0.1);
        }
        gongji() {
            this.animator.speed = 1;
            this.animator.crossFade("MonsterAttack", 0.1);
        }
        paobu() {
            this.animator.crossFade("MonsterWalk", 0.1);
        }
        siwang() {
            this.animator.speed = 1;
            this.animator.crossFade("MonsterDeath", 0.1);
            Laya.timer.once(3000, this, () => {
                this.gameObject.active = false;
            });
        }
    }
    ;

    var BossAnimatorName;
    (function (BossAnimatorName) {
        BossAnimatorName["hot_start"] = "hot_start";
        BossAnimatorName["hot_loop"] = "hot_loop";
        BossAnimatorName["idle"] = "idle";
        BossAnimatorName["jujue"] = "jujue";
        BossAnimatorName["smile_loop"] = "smile_loop";
        BossAnimatorName["smile_start"] = "smile_start";
        BossAnimatorName["yue_loop"] = "yue_loop";
        BossAnimatorName["yue_start"] = "yue_start";
    })(BossAnimatorName || (BossAnimatorName = {}));
    class End extends EndBase {
        constructor() {
            super();
            this.type = 1;
            this.bosss = [];
            this.beishu = 1;
            this.nanIndex = 0;
            this.bossEra = 1;
            this.selfHp = 0;
            this.nowSelfHp = 0;
            this.selfAtk = 0;
            this.bossHp = 0;
            this.nowBossHp = 0;
            this.bossAtk = 0;
            this._isBossgj1 = false;
        }
        onAwake() {
            super.onAwake();
            this.bots1 = this.Find("end1/mans");
            this.bots2 = this.Find("end2/mans");
            this.kuais = this.Find("end1/kuai");
            this.kuai = this.Find("end1/zhongdian");
            this.bot = this.Find("end1/Bot");
            var monsterNode = this.Find("end1/monster");
            this.monster = monsterNode.addComponent(Monster);
            this.removeReceiveShadow(this.bot);
            this.bot.active = false;
            this.end1 = this.Find("end1");
            this.end2 = this.Find("end2");
            this.init();
            this.setReceiveShadow(true, false, this.end1);
            this.setReceiveShadow(true, false, this.end2);
        }
        removeReceiveShadow(role) {
            for (var i = 0; i < role.numChildren; i++) {
                var skinnedMeshRenderer = role.getChildAt(i).skinnedMeshRenderer;
                if (skinnedMeshRenderer) {
                    skinnedMeshRenderer.castShadow = false;
                    skinnedMeshRenderer.receiveShadow = false;
                }
            }
        }
        removeReceiveShadow2(role) {
            for (var i = 0; i < role.numChildren; i++) {
                var role2 = role.getChildAt(i);
                for (var j = 0; j < role2.numChildren; j++) {
                    var skinnedMeshRenderer = role2.getChildAt(j).skinnedMeshRenderer;
                    if (skinnedMeshRenderer) {
                        skinnedMeshRenderer.castShadow = false;
                        skinnedMeshRenderer.receiveShadow = false;
                    }
                    var skinnedMeshRenderer2 = role2.getChildAt(j).meshRenderer;
                    if (skinnedMeshRenderer2) {
                        skinnedMeshRenderer2.castShadow = false;
                        skinnedMeshRenderer2.receiveShadow = false;
                    }
                }
            }
        }
        init() {
            this.beishu = 1;
            super.init();
            this._isBossgj1 = false;
            this.player = Game.instance.playerCtr;
            if (this.type == 1) {
                this.end2.active = false;
                this.end1.active = true;
                if (this.bots1.numChildren == 0) {
                    for (let index = 0; index < 20; index++) {
                        var man = this.bot.clone();
                        this.bots1.addChild(man);
                        var newKuai = this.kuai.clone();
                        newKuai.meshRenderer.material.albedoColor = endColors[index].clone();
                        this.kuais.addChild(newKuai);
                        newKuai.transform.localPositionZ = index * 5;
                        man.active = true;
                        newKuai.active = true;
                        man.transform.localPosition = newKuai.transform.localPosition.clone();
                        man.transform.localPositionZ += 3;
                        man.transform.localPositionY = -0.2;
                        this.setN(newKuai, index);
                    }
                }
                else {
                    for (let index = 0; index < this.bots1.numChildren; index++) {
                        var newKuai = this.kuais.getChildAt(index);
                        const man = this.bots1.getChildAt(index);
                        ;
                        var nanA = man.getComponent(Laya.Animator);
                        nanA.crossFade("DwarfIdle", 0.1);
                        man.transform.localPosition = newKuai.transform.localPosition.clone();
                        man.transform.localPositionZ += 3;
                        man.transform.localPositionY = -0.2;
                        man.active = true;
                    }
                }
                this.monster.init();
            }
            else {
                this.end2.active = true;
                this.end1.active = false;
                var xx = 1.1;
                if (this.bots2.numChildren == 0) {
                    for (let index = 0; index < 3; index++) {
                        var man = Game.instance.playerBodyNode.clone();
                        var player = man.getComponent(PlayerBody);
                        if (player)
                            player.destroy();
                        this.bots2.addChild(man);
                        var boss = man.addComponent(Boss);
                        boss.init(this.bossEra);
                        man.active = true;
                        man.transform.localPosition = new Laya.Vector3(xx, 0, 16);
                        man.transform.localRotationEulerY = 180;
                        xx -= 1.1;
                        this.bosss.push(boss);
                    }
                }
                else {
                    for (let index = 0; index < this.bots2.numChildren; index++) {
                        var man = this.bots2.getChildAt(index);
                        var nanA = man.getComponent(Laya.Animator);
                        var boss = man.getComponent(Boss);
                        boss.init(this.bossEra);
                        man.transform.localPosition = new Laya.Vector3(xx, 0, 16);
                        man.transform.localRotationEulerY = 180;
                        xx -= 1.1;
                    }
                }
            }
        }
        setN(newKuai, n) {
            var w = 0;
            if (n >= 10) {
                w = 0.5;
            }
            if (n > 10) {
                n -= 10;
            }
            for (let index = 0; index < newKuai.numChildren; index++) {
                const element = newKuai.getChildAt(index);
                element.meshRenderer.material.tilingOffsetZ = n / 10;
                element.meshRenderer.material.tilingOffsetW = w;
            }
        }
        gameEnd() {
            this.player = Game.instance.playerCtr;
            var pos = this.player.transform.position.clone();
            var euler = this.player.transform.rotationEuler.clone();
            this.gameObject.addChild(this.player.gameObject);
            this.player.gameObject.transform.position = pos;
            this.player.gameObject.transform.rotationEuler = euler;
            if (this.type == 1) {
                this.player.playWalk(true);
                this.zouNanQian(0);
                this.player.playAttack();
            }
            else {
                Game.instance.playerCtr.walkName = AnimatorName.run;
                this.player.playWalk(true);
                this.zoudaowutai();
            }
        }
        jifei() {
            SoundMgr.instance.CrowdCheering.Play();
            for (let index = 0; index < this.bosss.length; index++) {
                const boss = this.bosss[index];
                boss.move();
            }
            Game.instance.cameraCtr.jifei();
            Laya.timer.once(3500, this, () => {
                Game.instance.cameraCtr.engGame2();
                Game.instance.light.transform.rotationEuler = new Laya.Vector3(-50, -150 + 180, 0);
            });
            Game.instance.overGamge(true, 6000);
        }
        shibai() {
            this.player.play(AnimatorName.Flying_Back_Death);
            Game.instance.cameraCtr.engGame3();
            Game.instance.overGamge(false, 3000);
        }
        zouNanQian(index) {
            this.nanIndex = index;
            var louti = this.kuais.getChildAt(index);
            if (!louti) {
                this.jiesuan();
                return;
            }
            var age = xiaohaoEra[index];
            if (this.player.nowAge >= age || Game.instance.playerData.end >= index + 1) {
                if (Game.instance.playerData.end < index + 1)
                    this.player.changeAge3(age);
            }
            else {
                this.jiesuan();
                return;
            }
            var nan = this.bots1.getChildAt(index);
            var nanA = nan.getComponent(Laya.Animator);
            this.beishu += 0.1;
            nanA.crossFade("dead", 0);
            nanA.speed = 2;
            Laya.Tween.to(nan.transform, {
                localPositionY: 0.2,
            }, 100, null, Laya.Handler.create(this, () => {
            }), 0);
            var z = louti.transform.localPositionZ;
            var transform = this.player.transform;
            Laya.Tween.to(transform, {
                localPositionZ: z + 2.5,
            }, 250, null, Laya.Handler.create(this, () => {
                this.yueGuoNan(index);
                nan.active = false;
            }), 0, true);
        }
        yueGuoNan(index) {
            this.zouNanQian(index + 1);
        }
        zoudaowutai() {
            GameView.instance.hps.visible = true;
            Game.instance.playerCtr.playerBodyParent.gameEnd();
            var transform = this.player.transform;
            var z = 13;
            if (this.player.nowEra < 5) {
                z = 14;
            }
            Laya.Tween.to(transform, {
                localPositionZ: z,
            }, 1500, null, Laya.Handler.create(this, () => {
                Game.instance.cameraCtr.engGame();
                this.player.playIdle();
            }), 0, true);
            this.selfHp = hps[this.player.nowEra];
            this.selfAtk = arts[this.player.nowEra];
            var skinId = this.player.playerData.skinids[this.player.nowEra];
            if (skinId) {
                this.selfAtk = artsSkin$1[this.player.nowEra];
            }
            this.bossHp = hps[this.bossEra];
            this.bossAtk = arts[this.bossEra];
            this.nowBossHp = this.bossHp;
            this.nowSelfHp = this.selfHp;
            Laya.timer.once(3000, this, () => {
                Game.instance.camera.viewport.project(this.player.bodys.transform.position, Game.instance.camera.projectionViewMatrix, this.player.outpos);
                GameView.instance.paiziPos(this.player.outpos.x / Laya.stage.clientScaleX, this.player.outpos.y / Laya.stage.clientScaleY);
                var outpos = new Laya.Vector4();
                var bpos = this.bosss[1].transform.position.clone();
                bpos.y += 3;
                Game.instance.camera.viewport.project(bpos, Game.instance.camera.projectionViewMatrix, outpos);
                this.bossPos = new Laya.Vector2(outpos.x / Laya.stage.clientScaleX, outpos.y / Laya.stage.clientScaleY);
                this.selfGongji();
            });
        }
        selfGongji() {
            PlayerBody.animatorSpeed = 1;
            this.player.play(this.player.attackName2);
            this.nowBossHp -= this.selfAtk;
            if (this.nowBossHp <= 0) {
                this.nowBossHp = 0;
                Laya.timer.clearAll(this);
                Laya.timer.once(this.player.nowEra < 5 ? 600 : 100, this, () => {
                    this.jifei();
                });
            }
            else {
                Laya.timer.once(1000, this, this.selfGongji);
            }
            this.player.playerBodyParent.startAttack2();
            Laya.timer.once(500, this, () => {
                var num = new NumA();
                num.x = this.bossPos.x - 100;
                num.y = this.bossPos.y;
                num.setShow(this.selfAtk, false, this.bossPos.y, "#FF04CB");
                GameView.instance.addChild(num);
            });
            GameView.instance.showBossHp(this.nowBossHp / this.bossHp);
            if (this.nowBossHp <= 0)
                return;
            this.bossGongJi();
        }
        bossGongJi() {
            for (let index = 0; index < this.bosss.length; index++) {
                const boss = this.bosss[index];
                boss.playAttack();
            }
            this.nowSelfHp -= this.bossAtk;
            if (this.nowSelfHp <= 0) {
                this.nowSelfHp = 0;
                Laya.timer.clearAll(this);
                Laya.timer.once(300, this, () => {
                    this.shibai();
                });
            }
            GameView.instance.showSelfHp(this.nowSelfHp / this.selfHp);
            Laya.timer.once(500, this, () => {
                GameView.instance.showAddLevel(this.bossAtk, false, -300);
            });
        }
        jiesuan() {
            PlayerBody.animatorSpeed = 1;
            if (this.nanIndex == 20) {
                this.selfHp = hps[this.player.nowEra];
                this.selfAtk = arts[this.player.nowEra];
                this.bossHp = hps[this.player.nowEra];
                this.bossAtk = arts[this.player.nowEra];
                this.bossHp *= 3;
                this.nowBossHp = this.bossHp;
                this.nowSelfHp = this.selfHp;
                GameView.instance.era.visible = false;
                Game.instance.playerCtr.walkName = AnimatorName.run;
                this.player.playWalk(true);
                GameView.instance.hps.visible = true;
                Game.instance.playerCtr.playerBodyParent.gameEnd();
                var transform = this.player.transform;
                var z = 106;
                if (this.player.nowEra < 5) {
                    z = 106;
                }
                Laya.Tween.to(transform, {
                    localPositionZ: z,
                }, 1500, null, Laya.Handler.create(this, () => {
                    this.player.playIdle();
                    PlayerBody.animatorSpeed = 1;
                    var outpos = new Laya.Vector4();
                    var bpos = this.monster.transform.position.clone();
                    bpos.y += 5;
                    Game.instance.camera.viewport.project(bpos, Game.instance.camera.projectionViewMatrix, outpos);
                    this.bossPos = new Laya.Vector2(outpos.x / Laya.stage.clientScaleX, outpos.y / Laya.stage.clientScaleY);
                    GameView.instance.dianjigongji();
                }), 0, true);
            }
            else {
                Game.instance.playerCtr.playWain1();
                Laya.timer.once(500, this, () => {
                    Game.instance.overGamge(true, 2000);
                });
                Game.instance.playerCtr.lihua();
            }
        }
        gongji1() {
            PlayerBody.animatorSpeed = 1;
            this.player.playerBodyParent.startAttack2();
            this.player.play(this.player.attackName2);
            this.nowBossHp -= this.selfAtk;
            if (this.nowBossHp <= 0) {
                PlayerBody.animatorSpeed = 1;
                this.nowBossHp = 0;
                GameView.instance.offAll();
                Laya.timer.clearAll(this);
                Game.instance.playerCtr.playWain1();
                Game.instance.overGamge(true, 4000);
                this.monster.siwang();
                Game.instance.playerCtr.lihua();
            }
            var num = new NumA();
            num.x = this.bossPos.x - 100;
            num.y = this.bossPos.y;
            num.setShow(this.selfAtk, false, this.bossPos.y, "#FF04CB");
            GameView.instance.addChild(num);
            GameView.instance.showBossHp(this.nowBossHp / this.bossHp);
            if (!this._isBossgj1) {
                this._isBossgj1 = true;
                this.bossGongji1();
            }
        }
        bossGongji1() {
            this.monster.gongji();
            this.nowSelfHp -= this.bossAtk;
            if (this.nowSelfHp <= 0) {
                this.monster.daiji();
                GameView.instance.offAll();
                this.nowSelfHp = 0;
                Laya.timer.clearAll(this);
                Laya.timer.once(300, this, () => {
                    this.player.play(AnimatorName.Flying_Back_Death);
                    Game.instance.cameraCtr.engGame4();
                    Game.instance.overGamge(false, 3000);
                });
                return;
            }
            GameView.instance.showSelfHp(this.nowSelfHp / this.selfHp);
            Laya.timer.once(500, this, () => {
                GameView.instance.showAddLevel(this.bossAtk, false, 0);
            });
            Laya.timer.once(1500, this, () => {
                this.bossGongji1();
            });
        }
    }
    var endColors = [
        new Laya.Vector4(100 / 255, 215 / 255, 191 / 255, 1),
        new Laya.Vector4(100 / 255, 215 / 255, 104 / 255, 1),
        new Laya.Vector4(68 / 255, 174 / 255, 117 / 255, 1),
        new Laya.Vector4(196 / 255, 177 / 255, 222 / 255, 1),
        new Laya.Vector4(234 / 255, 162 / 255, 226 / 255, 1),
        new Laya.Vector4(222 / 255, 177 / 255, 133 / 255, 1),
        new Laya.Vector4(215 / 255, 190 / 255, 113 / 255, 1),
        new Laya.Vector4(215 / 255, 202 / 255, 86 / 255, 1),
        new Laya.Vector4(255 / 255, 246 / 255, 86 / 255, 1),
        new Laya.Vector4(255 / 255, 239 / 255, 134 / 255, 1),
        new Laya.Vector4(229 / 255, 226 / 255, 131 / 255, 1),
        new Laya.Vector4(246 / 255, 243 / 255, 164 / 255, 1),
        new Laya.Vector4(118 / 255, 243 / 255, 164 / 255, 1),
        new Laya.Vector4(111 / 255, 231 / 255, 185 / 255, 1),
        new Laya.Vector4(94 / 255, 229 / 255, 210 / 255, 1),
        new Laya.Vector4(93 / 255, 176 / 255, 183 / 255, 1),
        new Laya.Vector4(75 / 255, 138 / 255, 166 / 255, 1),
        new Laya.Vector4(160 / 255, 106 / 255, 198 / 255, 1),
        new Laya.Vector4(203 / 255, 121 / 255, 215 / 255, 1),
        new Laya.Vector4(234 / 255, 101 / 255, 223 / 255, 1),
    ];
    var hps = [
        10,
        10,
        50,
        100,
        150,
        200,
        250,
        300,
        350,
        400,
        450,
        500,
    ];
    var arts = [
        1,
        1,
        5,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50,
    ];
    var artsSkin$1 = [
        4,
        4,
        8,
        13,
        18,
        23,
        28,
        33,
        38,
        43,
        48,
        53,
    ];
    var xiaohaoEra = [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        1000,
        1100,
        1200,
        1300,
        1400,
        1500,
        1600,
        1700,
        1800,
        1900,
        2000,
        2100,
    ];

    class MonoBehaviour extends Laya.Script {
        onAwake() {
            this.gameObject = this.owner;
            this.transform = this.gameObject.transform;
        }
        Find(path) {
            return GameObject.Find(this.gameObject, path);
        }
        GetComponentsInChildren(componentType) {
            return GameObject.GetComponentsInChildrenU3d(this.gameObject, componentType);
        }
    }

    class Lizi extends MonoBehaviour {
        constructor() { super(); }
        onAwake() {
            super.onAwake();
        }
        init(time = 1500) {
            this.gameObject.active = true;
            Laya.timer.once(time, this, this.remove1);
        }
        remove1() {
            this.gameObject.active = false;
            this.gameObject.removeSelf();
            Laya.Pool.recover(this.gameObject.name, this.gameObject);
        }
    }

    class xuanzhuan extends MonoBehaviour3D {
        constructor() {
            super();
            this.isRun = false;
        }
        onAwake() {
            super.onAwake();
            this.isRun = true;
            this.PhysicsCollider = this.gameObject.getComponent(Laya.PhysicsCollider);
            if (this.PhysicsCollider) {
                this.PhysicsCollider.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
                this.PhysicsCollider.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
            }
        }
        onUpdate() {
            if (!this.isRun)
                return;
            this.transform.localRotationEulerY += 1;
        }
    }
    xuanzhuan.eulerY = 0;

    class Bullet extends MonoBehaviour3D {
        constructor() {
            super();
            this.speed = new Laya.Vector3(0, 0, 0.5);
        }
        onAwake() {
            super.onAwake();
            this.setReceiveShadow(false, false, this.gameObject.getChildAt(0));
        }
        init() {
            Laya.timer.frameLoop(1, this, this.onUpdate2);
        }
        onUpdate2() {
            this.transform.localPositionZ += 0.4;
            if (this.transform.position.z - Game.instance.playerCtr.transform.position.z > 30) {
                this.gameObject.removeSelf();
                Laya.Pool.recover(this.gameObject.name, this.gameObject);
                Laya.timer.clearAll(this);
            }
        }
    }

    class Door2 extends MonoBehaviour3D {
        constructor() {
            super();
            this.eraValue = 0;
            this.getType = 0;
        }
        onAwake() {
            super.onAwake();
            this.setReceiveShadow(false, false);
            this.PhysicsCollider = this.gameObject.getComponent(Laya.PhysicsCollider);
            this.PhysicsCollider.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
            this.PhysicsCollider.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
            this.ge = this.Find("shuzig");
            this.shi = this.Find("shuzis");
            this.bai = this.Find("shuzib");
            this.qian = this.Find("shuziq");
            this.pian = this.Find("pian");
            this.renshu = this.Find("renshu");
        }
        setData(name, name2) {
            var v;
            if (name.indexOf("+") != -1) {
                this.getType = 1;
                v = name.split("+")[1];
            }
            else if (name.indexOf("-") != -1) {
                this.getType = 2;
                v = name.split("-")[1];
            }
            else if (name.indexOf("*") != -1) {
                this.getType = 3;
                v = name.split("*")[1];
            }
            else if (name.indexOf("÷") != -1) {
                this.getType = 4;
                v = name.split("÷")[1];
            }
            this.eraValue = Number(v);
            this.setLevel(Number(v));
            this.transform.localPositionX = 0;
            this.renshu.meshRenderer.material.tilingOffsetW = 0.5;
            this.renshu.meshRenderer.material.tilingOffsetZ = 0.6;
        }
        setLevel(level = 1) {
            var jjcc;
            this.bai.meshRenderer.material.tilingOffsetW = 0;
            this.qian.meshRenderer.material.tilingOffsetW = 0;
            if (level < 10) {
                this.ge.active = false;
                this.shi.active = true;
                this.bai.active = true;
                this.qian.active = false;
                this.shi.meshRenderer.material.tilingOffsetZ = level / 10;
                this.bai.transform.localPositionX = 0.42;
                this.shi.transform.localPositionX = -0.29;
                jjcc = this.bai;
            }
            else if (level < 100) {
                this.ge.active = true;
                this.shi.active = true;
                this.bai.active = true;
                this.qian.active = false;
                var strlevel = String(level);
                this.shi.meshRenderer.material.tilingOffsetZ = Number(strlevel[0]) / 10;
                this.ge.meshRenderer.material.tilingOffsetZ = Number(strlevel[1]) / 10;
                this.bai.transform.localPositionX = 0.7;
                this.shi.transform.localPositionX = 0;
                this.ge.transform.localPositionX = -0.7;
                jjcc = this.bai;
            }
            else if (level < 1000) {
                this.ge.active = true;
                this.shi.active = true;
                this.bai.active = true;
                this.qian.active = true;
                var strlevel = String(level);
                this.bai.meshRenderer.material.tilingOffsetZ = Number(strlevel[0]) / 10;
                this.shi.meshRenderer.material.tilingOffsetZ = Number(strlevel[1]) / 10;
                this.ge.meshRenderer.material.tilingOffsetZ = Number(strlevel[2]) / 10;
                this.qian.transform.localPositionX = 1.2;
                this.bai.transform.localPositionX = 0.42;
                this.shi.transform.localPositionX = -0.29;
                this.ge.transform.localPositionX = -0.98;
                jjcc = this.qian;
            }
            jjcc.meshRenderer.material.tilingOffsetW = 0.5;
            if (this.getType == 1) {
                jjcc.meshRenderer.material.tilingOffsetZ = 0;
            }
            else if (this.getType == 2) {
                jjcc.meshRenderer.material.tilingOffsetZ = 0.1;
            }
            else if (this.getType == 3) {
                jjcc.meshRenderer.material.tilingOffsetZ = 0.2;
            }
            else if (this.getType == 4) {
                jjcc.meshRenderer.material.tilingOffsetZ = 0.3;
            }
        }
    }

    class GameMap extends MonoBehaviour3D {
        constructor() {
            super();
            this.poss = [];
        }
        onAwake() {
            super.onAwake();
            this.setReceiveShadow(false, false);
            for (let index = 0; index < this.gameObject.numChildren; index++) {
                const element = this.gameObject.getChildAt(index);
                this.poss.push(element.transform.localPosition.clone());
            }
            Laya.timer.loop(1000, this, this.xx);
        }
        init() {
            for (let index = 0; index < this.poss.length; index++) {
                const pos = this.poss[index];
                var node = this.gameObject.getChildAt(index);
                node.transform.localPosition = pos;
            }
        }
        xx() {
            for (let index = 0; index < this.gameObject.numChildren; index++) {
                const element = this.gameObject.getChildAt(index);
                if (Game.instance.playerCtr.transform.localPositionZ - element.transform.localPositionZ > 30) {
                    element.transform.localPositionZ = Game.instance.playerCtr.transform.localPositionZ + JTools.getRandomInt(55, 66);
                    if (element.name == "Temple1") {
                        element.transform.localRotationEulerY = JTools.getRandomInt(0, 360);
                    }
                    else if (element.name == "coconut") {
                        element.transform.localRotationEulerY = JTools.getRandomInt(0, 360);
                    }
                }
            }
        }
    }

    var RoadDirection;
    (function (RoadDirection) {
        RoadDirection[RoadDirection["up"] = 1] = "up";
        RoadDirection[RoadDirection["down"] = 2] = "down";
        RoadDirection[RoadDirection["left"] = 3] = "left";
        RoadDirection[RoadDirection["right"] = 4] = "right";
    })(RoadDirection || (RoadDirection = {}));
    var ERA;
    (function (ERA) {
        ERA[ERA["ys"] = 1] = "ys";
        ERA[ERA["sq"] = 2] = "sq";
        ERA[ERA["qt"] = 3] = "qt";
        ERA[ERA["qtm"] = 4] = "qtm";
        ERA[ERA["tq"] = 5] = "tq";
        ERA[ERA["tqm"] = 6] = "tqm";
        ERA[ERA["hq"] = 7] = "hq";
        ERA[ERA["hqm"] = 8] = "hqm";
        ERA[ERA["xx"] = 9] = "xx";
        ERA[ERA["zj"] = 10] = "zj";
        ERA[ERA["jj"] = 11] = "jj";
    })(ERA || (ERA = {}));
    var GameStatus;
    (function (GameStatus) {
        GameStatus[GameStatus["none"] = 0] = "none";
        GameStatus[GameStatus["start"] = 1] = "start";
        GameStatus[GameStatus["over"] = 2] = "over";
        GameStatus[GameStatus["destination"] = 3] = "destination";
        GameStatus[GameStatus["stop"] = 4] = "stop";
        GameStatus[GameStatus["end"] = 5] = "end";
    })(GameStatus || (GameStatus = {}));
    class Game extends Laya.Script {
        constructor() {
            super(...arguments);
            this._gameObjs = [];
            this.camera = null;
            this.gameStatus = GameStatus.none;
            this.playerData = null;
            this.light = null;
            this.skinId = 1;
            this.era = 1;
            this.gridZ = 3.5;
            this.gridX = 7.5 / 5;
            this.roadX = 5;
            this.levelLength = 0;
            this.InitCount = 0;
            this.nowLevel = 0;
            this.gameObjects = [];
            this.settlementTiem = 1000;
        }
        onAwake() {
            window["game"] = this;
            this.scene = SceneManager.game;
            this.playerData = GlobalManager.instance.getPlayerData();
            Game.instance = this;
            this.light = this.scene.getChildByName("Directional Light");
            this.playerNode = this.scene.getChildByName("player");
            this.camera = this.playerNode.getChildByName("Main Camera");
            this.playerBodyNode = this.playerNode.getChildAt(0).getChildAt(0).clone();
            this.cameraCtr = this.camera.addComponent(Camera);
            this.road = this.scene.getChildByName("road");
            this.side = this.scene.getChildByName("side");
            this.bullets = this.scene.getChildByName("bullets");
            this.items = this.scene.getChildByName("items");
            var endNode = this.scene.getChildByName("end");
            this.endCtr = endNode.addComponent(End);
            var gameMapnode = this.scene.getChildByName("map");
            this.gameMap = gameMapnode.addComponent(GameMap);
            this.camera.enableHDR = false;
            this.light.shadowMode = Laya.ShadowMode.SoftLow;
            this.light.shadowDistance = 15;
            this.light.shadowResolution = 1024;
            this.light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            this.light.shadowNormalBias = 4;
            let skyId = 1;
            Laya.Material.load("sub2/sky/sky" + skyId + ".lmat", Laya.Handler.create(this, (skymat) => {
                this.camera.clearFlag = Laya.CameraClearFlags.Sky;
                let skyRenderer = this.camera.skyRenderer;
                skyRenderer.mesh = Laya.SkyBox.instance;
                skyRenderer.material = skymat;
            }));
            this.homeInit();
        }
        loadMapSkin2(mesh, name) {
            Laya.Texture2D.load('sub2/map/' + name + '.png', Laya.Handler.create(this, (texture) => {
                mesh.meshRenderer.material.albedoTexture = texture;
            }));
        }
        homeInit() {
            Laya.Resource.destroyUnusedResources();
            var ctr = this.playerNode.getComponent(Player);
            if (ctr) {
                ctr.destroy();
                this.scene.addChild(this.playerNode);
            }
            this.playerCtr = this.playerNode.addComponent(Player);
            this.cameraCtr.init();
            for (let index = 0; index < this.gameObjects.length; index++) {
                const element2 = this.gameObjects[index];
                element2.destroy(true);
            }
            for (let index = 0; index < this.bullets.numChildren; index++) {
                const element = this.bullets.getChildAt(index);
                element.destroy(true);
            }
            this.bullets.destroyChildren();
            for (let index = 0; index < this.items.numChildren; index++) {
                const element = this.items.getChildAt(index);
                element.destroy(true);
            }
            this.items.destroyChildren();
            Laya.Resource.destroyUnusedResources();
            this.loadLevelMap();
            if (this.gameMap)
                this.gameMap.init();
            this.light.transform.rotationEuler = new Laya.Vector3(-50, -150, 0);
            this.InitCount++;
        }
        randomD(d) {
            var type = RoadDirection.up;
            if (d == RoadDirection.up) {
                type = Math.random() > 0.5 ? RoadDirection.left : RoadDirection.right;
            }
            else if (d == RoadDirection.left || d == RoadDirection.right) {
                type = RoadDirection.up;
            }
            return type;
        }
        loadLevelMap() {
            var level = this.playerData.currentLevel % 10;
            if (!level) {
                level = 10;
            }
            this.levelData = ConfigData.levelData[level];
            this.nowLevel = level;
            for (let index = 0; index < this.levelData.length; index++) {
                const elements = this.levelData[index];
                for (let index2 = 0; index2 < elements.length; index2++) {
                    const element = elements[index2];
                    this.loadGameObject(element, new Laya.Vector2(index, index2));
                }
            }
            this.levelLength = this.levelData[0].length * this.gridZ;
            this.endCtr.transform.localPositionX = 0;
            this.endCtr.transform.localPositionZ = this.levelLength;
            this.road.transform.localScaleZ = this.levelLength;
            this.side.transform.localScaleZ = this.levelLength;
            this.road.meshRenderer.material.tilingOffsetY = this.levelLength / 2;
            this.endCtr.gameObject.active = true;
            this.playerNode.transform.position = new Laya.Vector3(0, 0, 4);
            this.playerNode.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
            this.camera.transform.localPosition = new Laya.Vector3(0, 6, -9);
            this.camera.transform.localRotationEuler = new Laya.Vector3(-15, 180, 0);
            GlobalManager.isRevive = false;
            this.gameStatus = GameStatus.none;
        }
        loadGameObject(name, v2) {
            if (!name)
                return;
            if (name[0] == "Z") {
                if (name.length == 1) {
                    this.endCtr.type = 1;
                }
                else {
                    this.endCtr.type = 2;
                    this.endCtr.bossEra = Number(name[1]);
                }
                this.endCtr.init();
            }
            var name2 = name;
            if (name.indexOf("aa") != -1) {
                name2 = "aa";
            }
            else if (name.indexOf("bb") != -1) {
                name2 = "bb";
            }
            else if (name.indexOf("a") != -1) {
                name2 = "a";
            }
            else if (name.indexOf("b") != -1) {
                name2 = "b";
            }
            else if (name.indexOf("c") != -1) {
                name2 = "d2";
            }
            else if (name.indexOf("d") != -1) {
                name2 = "bot";
            }
            if (Object.prototype.toString.call(name) == '[object Array]') {
                name2 = "d1";
            }
            var objName = GameObjectNames[name2];
            if (objName) {
                this.loadItem(objName, (node) => {
                    this.items.addChild(node);
                    this.gameObjects.push(node);
                    var pos = node.transform.localPosition;
                    pos.y = 0;
                    if (name2 == "d1" || name2 == "d2") {
                        pos.x = 0;
                    }
                    else {
                        pos.x = ((v2.x * this.gridX + this.gridX / 2) - 3.75) * -1;
                    }
                    pos.z = v2.y * this.gridZ;
                    pos.x = Math.floor((pos.x * 100)) / 100;
                    pos.z = Math.floor((pos.z * 100)) / 100;
                    node.transform.localPosition = pos;
                    if (name2 == "aa" || name2 == "bb" || name2 == "a" || name2 == "b") {
                        var door3 = node.addComponent(Door3);
                        door3.setData(name, name2);
                    }
                    else if (name2 == "d2") {
                        var door2 = node.addComponent(Door2);
                        Laya;
                        door2.setData(name, name2);
                    }
                    else if (name2 == "d1") {
                        var door1 = node.addComponent(Door1);
                        door1.setData(name);
                    }
                    else if (name2 == "bot") {
                        var enemy = node.addComponent(Enemy);
                        enemy.setData(name);
                    }
                });
            }
        }
        init() {
            this.playerCtr.init();
        }
        alterSkin(id = null) {
        }
        startGame() {
            console.log("游戏开始");
            this.gameStatus = GameStatus.start;
            GameView.instance.shouzhi.visible = false;
            this.playerCtr.gameStart();
        }
        overGamge(isWin, settlementTiem = 1000) {
            if (this.gameStatus == GameStatus.over)
                return;
            Laya.timer.clearAll(this);
            this.gameStatus = GameStatus.over;
            GlobalManager.isVictor = isWin;
            if (isWin) {
                GlobalManager.instance.savePlayerData();
                SoundMgr.instance.win.Play();
                var currentLevel = this.playerData.currentLevel;
                Laya.timer.once(settlementTiem, this, () => {
                    if (currentLevel <= 90) {
                        ViewMgr.instance.OpenGetSkin(this, () => {
                        });
                    }
                    else {
                        this.openSettlement(0);
                    }
                });
                this.playerData.currentLevel += 1;
            }
            else {
                SoundMgr.instance.lose.Play();
                this.openSettlement(settlementTiem);
            }
        }
        revive() {
            GameView.instance.active = true;
            this.gameStatus = GameStatus.start;
            this.playerCtr.revive();
        }
        loadLizi(name, pos, parent = null, time = 1500) {
            this.loadItem2(name, (lizi, ispool) => {
                if (parent) {
                    parent.addChild(lizi);
                    lizi.transform.localPosition = pos;
                }
                else {
                    this.scene.addChild(lizi);
                    lizi.transform.position = pos;
                }
                var ctr;
                if (!ispool) {
                    ctr = lizi.addComponent(Lizi);
                }
                else {
                    ctr = lizi.getComponent(Lizi);
                }
                ctr.init(time);
            });
        }
        loadLizi2(name, pos, parent = null) {
            this.loadItem2(name, (lizi, ispool) => {
                if (parent) {
                    parent.addChild(lizi);
                    lizi.transform.localPosition = pos;
                    parent.addComponent(xuanzhuan);
                }
                else {
                    this.scene.addChild(lizi);
                    lizi.transform.position = pos;
                }
            });
        }
        jintou(count) {
        }
        openSettlement(time = 5000) {
            Laya.timer.once(time, this, () => {
                if ((this.playerData.currentLevel - 1) % 3 == 0) {
                    ViewMgr.instance.OpenChest(this, () => {
                    });
                }
                else {
                    ViewMgr.instance.OpenSettlement(this, () => {
                    });
                }
            });
        }
        getEra(age = 1) {
            if (age <= 300) {
                return ERA.ys;
            }
            else if (age <= 700) {
                return ERA.sq;
            }
            else if (age <= 1000) {
                return ERA.qt;
            }
            else if (age <= 1500) {
                return ERA.qtm;
            }
            else if (age <= 2300) {
                return ERA.tq;
            }
            else if (age <= 4500) {
                return ERA.tqm;
            }
            else if (age <= 6000) {
                return ERA.hq;
            }
            else if (age <= 10000) {
                return ERA.hqm;
            }
            else if (age <= 18000) {
                return ERA.xx;
            }
            else {
                return ERA.zj;
            }
        }
        onDestroy() {
        }
        loadMap(name, callback) {
            Laya.loader.create("LayaScene_sub1/Conventional/" + name + ".lh", Laya.Handler.create(this, (item) => {
                var obj = item.clone();
                callback(obj);
            }));
        }
        loadItem2(name, callback) {
            var item1 = Laya.Pool.getItem(name);
            if (!item1) {
                Laya.loader.create("LayaScene_sub1/Conventional/" + name + ".lh", Laya.Handler.create(this, (item) => {
                    var obj = item.clone();
                    callback(obj, false);
                }));
            }
            else {
                callback(item1, true);
            }
        }
        loadItem(name, callback) {
            Laya.loader.create("LayaScene_sub1/Conventional/" + name + ".lh", Laya.Handler.create(this, (item) => {
                var obj = item.clone();
                callback(obj, false);
            }));
        }
        loadbullet(name, callback) {
            var item1 = Laya.Pool.getItem(name);
            if (!item1) {
                Laya.loader.create("LayaScene_sub1/Conventional/" + name + ".lh", Laya.Handler.create(this, (item) => {
                    var obj = item.clone();
                    var bullet = obj.addComponent(Bullet);
                    this.bullets.addChild(obj);
                    bullet.init();
                    callback(obj, false);
                }));
            }
            else {
                var bullet = item1.getComponent(Bullet);
                bullet.init();
                this.bullets.addChild(item1);
                callback(item1, true);
            }
        }
        xx() {
            this.loadbullet("arrow", (obj) => {
                var bullet = obj.addComponent(Bullet);
                this.bullets.addChild(obj);
                bullet.transform.position = new Laya.Vector3(0, 2, 3);
            });
        }
        loseGame() {
        }
        winGame() {
        }
    }
    var up$1 = new Laya.Vector3(0, 1, 0);

    class Clock {
        constructor() {
            this.hms = 3;
            this.timeText = null;
            this.increse = 0;
            this.timeLength = 0;
            this.timeStep = 1.0;
            this._stime = 0;
            this._etime = 0;
            this._currentCount = 0;
            this._hour = 0;
            this._minute = 0;
            this._second = 0;
            this._isStop = true;
            this._callback = null;
            this._completeCallback = null;
        }
        Play(callback = null, completeCallback = null) {
            this._callback = callback;
            this._completeCallback = completeCallback;
            this._isStop = false;
            Laya.timer.clear(this, this.ClockTime);
            this.ClockTime(this.timeStep);
            Laya.timer.loop(1000, this, this.ClockTime);
        }
        Stop() {
            Laya.timer.clear(this, this.ClockTime);
            this._isStop = true;
        }
        Reset() {
            this._currentCount = 0;
            this._isStop = true;
        }
        ClockTime(dt) {
            if (this._isStop) {
                Laya.timer.clear(this, this.ClockTime);
                return;
            }
            if (this._currentCount < this.timeLength) {
                this._currentCount++;
                var num = 0;
                if (this.increse == 1) {
                    num = this._stime + this._currentCount;
                }
                else if (this.increse == 0) {
                    num = this.timeLength - this._currentCount + this._stime;
                }
                else {
                    Laya.timer.clear(this, this.ClockTime);
                    return;
                }
                this._hour = Math.floor(num / 3600);
                this._minute = Math.floor((num - this.hour * 3600) / 60);
                this._second = num - (this.hour * 3600 + this.minute * 60);
                var str = "";
                if (this.hms == 1) {
                    str = "" + num;
                }
                else if (this.hms == 2) {
                    str = this.minute + ":" + (this.second >= 10 ? "" + this.second : "0" + this.second);
                }
                else if (this.hms == 3) {
                    str = (this.hour >= 10 ? this.hour + ":" : "0" + this.hour + ":") +
                        (this.minute >= 10 ? this.minute + ":" : "0" + this.minute + ":") + (this.second >= 10 ? "" + this.second : "0" + this.second);
                }
                if (this._callback != null) {
                    this._callback(this.second, this.minute, this.hour, str, num);
                }
                if (this.timeText != null) {
                    this.timeText.text = str;
                }
            }
            else {
                this._isStop = true;
                Laya.timer.clear(this, this.ClockTime);
                if (this._completeCallback != null) {
                    this._completeCallback();
                }
                return;
            }
        }
        get currentCount() {
            return this._currentCount;
        }
        get hour() {
            return this._hour;
        }
        get minute() {
            return this._minute;
        }
        get second() {
            return this._second;
        }
        get running() {
            return !this._isStop;
        }
        start() {
        }
    }

    class HomeView extends BaseView {
        constructor() {
            super(...arguments);
            this._playerData = null;
        }
        onAwake() {
            super.onAwake();
            HomeView.instance = this;
            this._playerData = GlobalManager.instance.getPlayerData();
            this.autoDestroyAtClosed = true;
            this.startGame_btn.on(Laya.Event.CLICK, this, this.OnStartImageClick);
            this.qiandao_btn.on(Laya.Event.CLICK, this, this.onQiandao);
            this.shangdian_btn.on(Laya.Event.CLICK, this, this.onShangDian);
            this.choujiang_btn.on(Laya.Event.CLICK, this, this.onChouJiang);
            this.btn_collect.on(Laya.Event.CLICK, this, this.collect);
            this.game_btn.on(Laya.Event.CLICK, this, this.onGame);
            this.yinxiao.selected = SoundMgr.isPlaySound() ? true : false;
            this.yinxiao.on("change", this, this.updateLabel, [this.yinxiao]);
            this.DataUpdate();
            SoundMgr.instance.BgmPlay();
            EventMgr.instance.on(EventType.DataUpdate, this, this.DataUpdate);
            window["home"] = this;
            this.btn_collect.visible = false;
            if (WxManager.platform && WxManager.platform.hasShortcutInstalled) {
                WxManager.platform.hasShortcutInstalled({
                    success: (res) => {
                        if (!res) {
                            this.btn_collect.visible = true;
                        }
                    }
                });
            }
            this._playerData.playTimes += 1;
            GlobalManager.instance.savePlayerData();
            this.manUP_btn.on(Laya.Event.CLICK, this, this.manUp);
            this.girlUP_btn.on(Laya.Event.CLICK, this, this.girlUp);
            this.uLevel();
            this.showGKLevel();
        }
        showGKLevel() {
            var levelN = this._playerData.currentLevel % 5;
            if (!levelN)
                levelN = 5;
            if (HomeView.nowLevel == 0 || HomeView.nowLevel == this._playerData.currentLevel) {
                this.jindutiao.width = (443 / 5) * levelN;
            }
            else {
                this.jindutiao.width = (443 / 5) * (levelN - 1);
                Laya.Tween.to(this.jindutiao, {
                    width: (443 / 5) * (levelN - 1)
                }, 1000, null, Laya.Handler.create(this, () => {
                    if (levelN == 5) {
                        this.jingdudian.getChildAt(4).getChildAt(1).visible = false;
                    }
                }));
            }
            var beishu = Math.ceil(this._playerData.currentLevel / 5) - 1;
            for (let index = 0; index < this.jingdudian.numChildren; index++) {
                const element = this.jingdudian.getChildAt(index);
                var label = element.getChildAt(0);
                label.text = String(beishu * 5 + (index + 1));
            }
        }
        manUp() {
            if (this._playerData.era >= 10) {
                WxManager.OpenTips("Đã đầy");
                return;
            }
            var jg = roleUpgradeData["era"][this._playerData.era];
            var isV = GlobalManager.expendGold(jg);
            if (isV) {
                SoundMgr.instance.Upgrade.Play();
                this._playerData.era += 1;
                GlobalManager.instance.savePlayerData();
                Game.instance.playerCtr.setEatSkin(this._playerData.era, true);
                Game.instance.playerCtr.gxxx();
            }
            this.uLevel();
        }
        girlUp() {
            if (this._playerData.end >= 20) {
                WxManager.OpenTips("Đã đầy");
                return;
            }
            var jg = roleUpgradeData["end"][this._playerData.end];
            var isV = GlobalManager.expendGold(jg);
            if (isV) {
                SoundMgr.instance.Upgrade.Play();
                this._playerData.end += 1;
                GlobalManager.instance.savePlayerData();
                Game.instance.playerCtr.level = this._playerData.end;
            }
            this.uLevel();
        }
        uLevel() {
            this.manLevel_txt.text = "level." + String(this._playerData.era);
            this.girlLevel_txt.text = "level." + String(this._playerData.end);
            var p1 = roleUpgradeData["era"][this._playerData.era];
            var p2 = roleUpgradeData["end"][this._playerData.end];
            var jg1 = p1 ? p1 : "max";
            var jg2 = p2 ? p2 : "max";
            this.manprice_txt.text = String(jg1);
            this.girlprice_txt.text = String(jg2);
            if (Game.instance && Game.instance.endCtr) {
                Game.instance.endCtr.shengji();
            }
        }
        clickbtnTween(clickbtn) {
            Laya.Tween.to(clickbtn, { scaleX: 1.1, scaleY: 1.1 }, 800, null, Laya.Handler.create(this, this.clickbtnTween1, [clickbtn]));
        }
        clickbtnTween1(clickbtn) {
            Laya.Tween.to(clickbtn, { scaleX: 1, scaleY: 1 }, 800, null, Laya.Handler.create(this, this.clickbtnTween, [clickbtn]));
        }
        collect() {
            WxManager.platform && WxManager.platform.installShortcut({
                success: () => {
                    WxManager.OpenTips("Biểu tượng trên màn hình đã được tạo thành công!");
                    this.btn_collect.visible = false;
                },
                fail: (err) => { },
                complete: () => { }
            });
        }
        onChouJiang() {
            console.log("抽奖");
            ViewMgr.instance.OpenLottery(this, () => {
            }, "HomeView");
        }
        DataUpdate() {
            this.zuanshi_txt.value = String(this._playerData.gold);
            this.tili_txt.text = String(this._playerData.energy + "/" + ConfigData.videoRnergy);
            if (this.level_txt) {
                this.level_txt.text = "Cấp độ " + String(this._playerData.currentLevel) /* + "关" */;
            }
        }
        onShangDian() {
            ViewMgr.instance.OpenShop(this, () => {
            });
        }
        onQiandao() {
            ViewMgr.instance.OpenSign(this, () => {
            });
        }
        onGame() {
        }
        updateLabel(checkBox) {
            if (SoundMgr.isPlaySound()) {
                SoundMgr.setPlaySound(false);
            }
            else {
                SoundMgr.setPlaySound(true);
                SoundMgr.instance.BgmPlay();
            }
            GlobalManager.instance.savePlayerData();
        }
        videocallback() {
            let isshowchest = Math.random() * 100 < UserData.homechestshowodds ? true : false;
            isshowchest && Laya.View.open("views/lateChestView.scene", false);
        }
        onOpened(arg) {
            GlobalManager.startScore = 0;
            SoundMgr.instance.BgmPlay();
            if (SceneManager.game) {
                if (GameView.instance) {
                    GameView.instance.close();
                }
                let isshowvideo = Math.random() * 100 < UserData.homevideoshowodds ? true : false;
                if (isshowvideo) {
                    ttAdManager.createVideoAd(Laya.Handler.create(this, this.videocallback), Laya.Handler.create(this, this.videocallback), Laya.Handler.create(this, this.videocallback), false);
                }
                else {
                    this.videocallback();
                }
                if (arg == 1)
                    return;
                Game.instance.homeInit();
            }
        }
        onsubpackgeLoadOk(isok) {
            if (isok) {
                SoundMgr.instance.BgmPlay();
            }
        }
        OnStartImageClick() {
            if (!GlobalManager.expendEnergy(1)) {
                return;
            }
            Game.instance.skinId = this._playerData.roleId;
            SoundMgr.instance.PlayGameBgm();
            ViewMgr.instance.OpenTrial(this, () => {
            });
            EventMgr.instance.off(EventType.DataUpdate, this, this.DataUpdate);
            this.close();
        }
        onClosed() {
            Laya.timer.clearAll(this);
        }
        onDestroy() {
            HomeView.instance = null;
            EventMgr.instance.off(EventType.DataUpdate, this, this.DataUpdate);
            Laya.timer.clearAll(this);
        }
    }
    HomeView.nowLevel = 0;

    class UnityEnagine extends Laya.Script {
        constructor() {
            super(...arguments);
            this.logFps = false;
            this.openAppTimeSc = 0;
            this.fpsTime = 0;
            this.framCount = 0;
            this.fps = 0;
            this.fpsmin = 9999;
            this.fpsMax = 0;
        }
        onAwake() {
            this.openAppTimeSc = Laya.timer.currTimer * 0.001;
            this.updatePlayerEnergy();
        }
        onUpdate() {
            Time.fixedDeltaTime = Laya.timer.delta;
            Time.deltaTime = Laya.timer.delta * 0.001;
            if (this.logFps)
                this.calFps();
            Time.time = Laya.timer.currTimer * 0.001 - this.openAppTimeSc;
        }
        updatePlayerEnergy() {
            var lastPlayTime = DataStorage.getIntItem("lastClockTime", Date.now());
            var nowPlayTime = Date.now();
            var difTime = Math.floor((nowPlayTime - lastPlayTime) / 1000);
            var clock = new Clock();
            clock.hms = 2;
            var recoverTimer = 10 * 60;
            if (difTime > 0) {
                var recoverEnergy = Math.floor(difTime / recoverTimer);
                GlobalManager.instance.getPlayerData().addEnergy(recoverEnergy);
                GlobalManager.instance.savePlayerData();
                if (HomeView.instance) {
                    HomeView.instance.tili_txt.text = HomeView.instance._playerData.energy.toString() + "/" + ConfigData.videoRnergy;
                }
                clock.timeLength = (recoverTimer + 1) - difTime % (recoverTimer + 1);
            }
            else {
                clock.timeLength = -difTime;
            }
            clock.timeLength = GlobalManager.clamp(clock.timeLength, 0, recoverTimer + 1);
            DataStorage.setItem("lastClockTime", Date.now() + clock.timeLength * 1000);
            var runClock = () => {
                clock.Stop();
                clock.Reset();
                clock.Play((s, m, h, str, t) => {
                    if (HomeView.instance) {
                        HomeView.instance.time_txt.text = str;
                    }
                }, () => {
                    GlobalManager.instance.getPlayerData().addEnergy(1);
                    GlobalManager.instance.savePlayerData();
                    clock.timeLength = recoverTimer + 1;
                    if (HomeView.instance) {
                        HomeView.instance.tili_txt.text = HomeView.instance._playerData.energy.toString() + "/" + ConfigData.videoRnergy;
                    }
                    DataStorage.setItem("lastClockTime", Date.now() + clock.timeLength * 1000);
                    runClock();
                });
            };
            runClock();
        }
        calFps() {
            this.framCount += 1;
            this.fpsTime += Time.deltaTime;
            if (this.fpsTime > 1) {
                this.fps = this.framCount;
                this.fpsTime = 0;
                this.framCount = 0;
                this.fpsMax += this.fps;
                if (this.fps < this.fpsmin)
                    this.fpsmin = this.fps;
                console.log('fps 当前=', this.fps, '最小=', this.fpsmin, '总帧数', this.fpsMax);
            }
        }
    }

    class LoadingViewArg {
        constructor() {
            this.subpackgeName = '';
        }
    }
    class LoadView extends ui.views.LoadViewUI {
        constructor() {
            super();
            this.currentLoad = 0;
            this.alreadyLoad = 0;
            this.loadScale = 1;
            this.totalLoad = 100;
            this.isLoadEnd = false;
            this._progress = 0;
            this.isRun = false;
        }
        get progress() {
            return this._progress;
        }
        set progress(value) {
            if (this._progress == value)
                return;
            this._progress = value;
            this.jindutiao.width = 600 * this._progress;
            this.jiejie.x = this.jindutiao.width;
        }
        onAwake() {
            LoadView.instance = this;
            WxManager.tipstp = Laya.stage.addChild(this.tipstp);
            WxManager.tipstp.scale(0, 0);
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.box.width = Laya.stage.width;
            this.box.height = Laya.stage.height;
            let heightscale = Laya.stage.height / 1334;
            let widthscale = Laya.stage.width / 750;
            if (heightscale >= widthscale) {
                this.bg.scale(heightscale, heightscale);
            }
            else {
                this.bg.scale(widthscale, widthscale);
            }
            this.isRun = true;
        }
        onEnable() {
        }
        onDisable() {
        }
        startLoad() {
            this.currentLoad = 0;
            this.alreadyLoad = 5;
            Laya.timer.frameLoop(1, this, this.Update);
            Laya.timer.loop(18000, this, () => {
                this.currentLoad = 0;
                this.alreadyLoad = 5;
            });
        }
        onOpened() {
            this.startLoad();
        }
        endLoad() {
            console.log("加载完成");
            let sceneName = 'LayaScene_Scene3d';
            let url = sceneName + '/Conventional/' + "Scene3d" + '.ls';
            Laya.Scene3D.load(url, Laya.Handler.create(this, this.OnSceneLoadOk));
        }
        OnSceneLoadOk(scene3D) {
            SceneManager.game = scene3D;
            scene3D.addComponent(Game);
            scene3D.addComponent(UnityEnagine);
            Laya.stage.addChildAt(scene3D, 0);
            this.alreadyLoad = this.totalLoad;
            this.loadScale = 2.5;
        }
        Update() {
            if (!this.isRun)
                return;
            var dt = 0.05;
            if (this.currentLoad < this.alreadyLoad) {
                this.currentLoad += dt * (50 * (this.alreadyLoad - this.currentLoad) / this.totalLoad + 50) * this.loadScale;
                if (this.currentLoad >= this.alreadyLoad) {
                    this.currentLoad = this.alreadyLoad;
                    var limitLoad = this.totalLoad * 0.8;
                    if (this.alreadyLoad < limitLoad) {
                        this.alreadyLoad = this.alreadyLoad + (limitLoad - this.alreadyLoad) * (Math.random() * 0.005);
                        if (this.alreadyLoad > limitLoad) {
                            this.alreadyLoad = limitLoad;
                        }
                    }
                }
                this.progress = this.currentLoad / this.totalLoad;
                if (this.currentLoad >= this.totalLoad) {
                    this.loadSceneComp();
                }
            }
            if (GlobalManager.loadNum >= GlobalManager.loadMax && !this.isLoadEnd) {
                this.isLoadEnd = true;
                this.endLoad();
            }
        }
        loadSceneComp() {
            this.arg.loadokfunc.call(this.arg.callder);
        }
        onClosed() {
            super.onClosed();
            LoadView.instance = null;
            Laya.timer.clearAll(this);
            this.destroy(true);
            Laya.Resource.destroyUnusedResources();
        }
    }

    class ViewMgr {
        static get instance() {
            if (ViewMgr.minstance == null)
                ViewMgr.minstance = new ViewMgr();
            return ViewMgr.minstance;
        }
        OpenTrial(callder, callbackFunc) {
            Laya.Scene.open("views/TrialView.scene", false, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenLottery(callder, callbackFunc, param = null) {
            Laya.Scene.open("views/LotteryView.scene", false, param, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenMatching(callder, callbackFunc, param) {
            Laya.Scene.open("views/Matching.scene", true, param, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenLateChestView(callder, callbackFunc) {
            Laya.Scene.open("views/lateChestView.scene", false, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenSign(callder, callbackFunc) {
            Laya.Scene.open("views/SignView.scene", false, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenShop(callder, callbackFunc) {
            Laya.Scene.open("views/ShopView.scene", false, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenStockout(callder, callbackFunc, param) {
            Laya.Scene.open("views/StockoutView.scene", false, param, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenSettlement(callder, callbackFunc) {
            Laya.Scene.open("views/SettlementView.scene", true, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenChest(callder, callbackFunc) {
            Laya.Scene.open("views/ChestView.scene", true, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenRoom(callder, callbackFunc) {
            Laya.Scene.open("views/RoomView.scene", false, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenGetSkin(callder, callbackFunc) {
            Laya.Scene.open("views/GetSkinPanel.scene", true, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenVictory(callder, callbackFunc) {
            Laya.Scene.open("views/VictoryView.scene", true, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenDefeated(callder, callbackFunc) {
            Laya.Scene.open("views/DefeatedView.scene", true, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenShareScreen(callder, callbackFunc) {
            Laya.Scene.open("views/shareScreenView.scene", true, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenResurgence(callder, callbackFunc) {
            Laya.Scene.open("views/ResurgenceView.scene", false, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenGame(callder, callbackFunc) {
            Laya.Scene.open("views/Game.scene", true, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenPhotograph(callder, callbackFunc) {
            Laya.Scene.open("views/Photograph.scene", false, Laya.Handler.create(callder, view => {
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenHome(callder, callbackFunc, param = null, closeOther = true) {
            Laya.Scene.open("views/Home.scene", closeOther, param, Laya.Handler.create(callder, view => {
                let s = view;
                if (callbackFunc != null)
                    callbackFunc.apply(callder);
            }));
        }
        OpenOver() {
            Laya.Scene.open("views/over.scene", false, Laya.Handler.create(this, view => {
                let s = view;
            }));
        }
        OpenHome_loadingeffect(callder, callbackFunc) {
            Laya.Scene.open("views/LoadView.scene", false, Laya.Handler.create(callder, view => {
                let loadingView = view;
                let viewArg = new LoadingViewArg;
                viewArg.callder = this;
                viewArg.loadokfunc = () => {
                    this.OpenHome(callder, callbackFunc, 1, true);
                };
                loadingView.arg = viewArg;
            }));
        }
        OpenGame_loadingeffect(callder, callbackFunc) {
        }
    }

    class GlobalManager {
        constructor() {
            this.trySkinData = null;
            this.bagTexture = [];
            this.gameViwe = null;
            this.homeView = null;
            this.playerData = null;
        }
        static get instance() {
            if (!GlobalManager._instance) {
                GlobalManager._instance = new GlobalManager();
                window["quanju"] = GlobalManager._instance;
            }
            return GlobalManager._instance;
        }
        getPlayerData() {
            if (this.playerData == null) {
                this.playerData = new PlayerData();
                this.playerData.init();
                var localData = JSON.parse(DataStorage.getItem("playerData"));
                if (localData) {
                    for (var key in localData) {
                        if (typeof this.playerData[key] != "undefined") {
                            this.playerData[key] = localData[key];
                        }
                    }
                }
            }
            return this.playerData;
        }
        savePlayerData() {
            DataStorage.setItem("playerData", JSON.stringify(this.playerData));
        }
        getSkinData(classify = 0) {
            var datas = [];
            for (var i = 0; i < goodsConfig.length; i++) {
                var data = goodsConfig[i];
                if (classify != data.classify)
                    continue;
                if (this.getPlayerData().getPlayerItem(data.id).progress < data.progress) {
                    datas.push(data);
                }
            }
            return datas;
        }
        static topUIMatch(node, value) {
            let _y = 0;
            let info = ConfigData.PhoneMsg;
            _y += (info && info.statusBarHeight > 20) || (ConfigData.IsIphoneX && Laya.stage.height / Laya.stage.width > 2.1) ? 60 : 0;
            node.left = _y + value;
        }
        static viewOpenAnimation(view, complete) {
            view.scale(0, 0);
            Laya.Tween.to(view, { scaleX: 1, scaleY: 1 }, 200, Laya.Ease.backOut, complete);
        }
        static flyDiamondAni(tex, srcX, srcY, toX, toY, panel, call) {
            var parentPage = panel.parent || Laya.stage;
            for (var i = 0; i < 10; i++) {
                let img1 = new Laya.Image(tex);
                img1.width = 50;
                img1.height = 50;
                parentPage.addChild(img1);
                img1.x = srcX;
                img1.y = srcY;
                img1.name = "" + i;
                var cir = 300 + [-1, 1][Math.round(Math.random())] * 10;
                var ix = srcX + Math.cos(Math.PI / 5 * i) * cir;
                var iy = srcY + Math.sin(Math.PI / 5 * i) * cir;
                var speed1 = 4;
                var distance1 = Math.sqrt((srcX - ix) * (srcX - ix) + (srcY - iy) * (srcY - iy));
                var time1 = Math.floor(distance1 / speed1) / 0.5;
                Laya.Tween.to(img1, {
                    x: ix,
                    y: iy
                }, time1, Laya.Ease.sineIn);
                var distance2 = Math.sqrt((toX - ix) * (toX - ix) + (toY - iy) * (toY - iy));
                var time2 = Math.floor(distance2 / speed1) * 5;
                Laya.Tween.to(img1, {
                    x: toX,
                    y: toY
                }, time2, Laya.Ease.sineIn, Laya.Handler.create(this, function () {
                    if (img1.name == "9") {
                        if (call) {
                            call.run();
                            call = null;
                        }
                    }
                    img1.destroy();
                }), time1 + 100);
            }
        }
        static clamp(value, minLimit, maxLimit) {
            if (value < minLimit) {
                return minLimit;
            }
            if (value > maxLimit) {
                return maxLimit;
            }
            return value;
        }
        static generateRandom(count, max, min = 0) {
            var arr = [];
            for (var i = 0; i < count; i++) {
                do {
                    var flag = true;
                    let item = Math.round(Math.random() * (max - min) + min);
                    if (arr.indexOf(item) == -1) {
                        arr.push(item);
                        flag = false;
                    }
                } while (flag);
            }
            return arr;
        }
        randomArray($arr) {
            for (var i = 0; i < $arr.length; i++) {
                var index = (Math.random() * $arr.length) >>> 0;
                var temp = $arr[index];
                $arr[index] = $arr[i];
                $arr[i] = temp;
            }
            return $arr;
        }
        static expendGold(count = 0, callback = null) {
            if (GlobalManager.instance.getPlayerData().gold - count < 0) {
                ViewMgr.instance.OpenStockout(this, () => {
                }, [callback, ItemType.gold, ConfigData.videoGold]);
                return false;
            }
            GlobalManager.instance.getPlayerData().gold -= count;
            EventMgr.instance.event(EventType.DataUpdate);
            return true;
        }
        static expendEnergy(count = 1, callback = null) {
            if (GlobalManager.instance.getPlayerData().energy - count < 0) {
                ViewMgr.instance.OpenStockout(this, () => {
                }, [callback, ItemType.energy, ConfigData.videoRnergy]);
                return false;
            }
            GlobalManager.instance.getPlayerData().energy -= count;
            EventMgr.instance.event(EventType.DataUpdate);
            GlobalManager.instance.savePlayerData();
            return true;
        }
        static twoPointRotation3D(p1, p2) {
            let a = p1.clone();
            let b = p2.clone();
            b.x -= a.x;
            b.z -= a.z;
            var deltaAngle = 0;
            if (b.x == 0 && b.z == 0) {
                return 0;
            }
            else if (b.x > 0 && b.z > 0) {
                deltaAngle = 0;
            }
            else if (b.x > 0 && b.z == 0) {
                return 90;
            }
            else if (b.x > 0 && b.z < 0) {
                deltaAngle = 180;
            }
            else if (b.x == 0 && b.z < 0) {
                return 180;
            }
            else if (b.x < 0 && b.z < 0) {
                deltaAngle = -180;
            }
            else if (b.x < 0 && b.z == 0) {
                return -90;
            }
            else if (b.x < 0 && b.z > 0) {
                deltaAngle = 0;
            }
            var angle = Math.atan(b.x / b.z) * (360 / (Math.PI * 2)) + deltaAngle;
            return angle;
        }
        static getCircRandomlePoint(_radius = 3) {
            let dis_x = Math.random() * (_radius * 2) - _radius;
            let dis_y = Math.random() * (Math.sqrt(Math.pow(_radius, 2) - Math.pow(dis_x, 2)) / 2);
            let times = Math.random() < 0.5 ? -1 : 1;
            if (Math.random() < 0.5)
                return new Laya.Vector2(dis_x, dis_y * times);
            else
                return new Laya.Vector2(dis_y * times, dis_x);
        }
        static i2s(ss) {
            var mm = 0;
            var hh = 0;
            var ss = ~~ss;
            if (ss > 3599) {
                hh = Math.floor(ss / 3600);
                mm = Math.floor(ss % 3600 / 60);
                ss = ss % 60;
                return (hh > 9 ? hh : '0' + hh) + ":" + (mm > 9 ? mm : '0' + mm) + ":" + (ss > 9 ? ss : '0' + ss);
            }
            else if (ss > 59) {
                mm = Math.floor(ss / 60);
                ss = ss % 60;
                return (mm > 9 ? mm : '0' + mm) + ":" + (ss > 9 ? ss : '0' + ss);
            }
            else {
                return "00:" + (ss > 9 ? ss : '0' + ss);
            }
        }
    }
    GlobalManager.gameCount = 0;
    GlobalManager.isOpenGoldBox = false;
    GlobalManager.isRevive = false;
    GlobalManager.isVictor = false;
    GlobalManager.surpassTarget = false;
    GlobalManager.beishu = 6;
    GlobalManager.nowGlod = 0;
    GlobalManager.isControl = false;
    GlobalManager.isStart = false;
    GlobalManager.startScore = 0;
    GlobalManager.loadNum = 0;
    GlobalManager.loadMax = 1;

    class ChestItem extends ui.item.ChestItemUI {
        constructor() {
            super();
        }
        setShow(data) {
            if (data) {
                let keyvalue = Chestview._Instance.keyValue;
                this.bg1.visible = data.isget != 0 ? false : true;
                this.bg2.visible = data.isget != 0 ? true : false;
                this.bxtp.visible = data.isget != 0 ? false : true;
                this.videotp.visible = keyvalue > 0 ? false : true;
                Laya.Tween.clearAll(this.bxtp);
                keyvalue > 0 && this.bxTween();
                this.zstp.visible = data.isget != 0 ? true : false;
                this.numlabel.text = data.diamond + "";
                this.numlabel.visible = data.isget != 0 ? true : false;
                this.on(Laya.Event.MOUSE_DOWN, this, this.Click, [data]);
            }
        }
        Click(data) {
            if (data.isget != 1) {
                let keyvalue = Chestview._Instance.keyValue;
                if (keyvalue > 0) {
                    Chestview._Instance.keyValue--;
                    let isvideo = Math.random() * 100 < UserData.chestLateodds ? true : false;
                    let islate = Chestview._Instance.isLate;
                    if (isvideo && !islate && Chestview._Instance.keyValue <= 0) {
                        Chestview._Instance.isLate = true;
                        ttAdManager.createVideoAd(Laya.Handler.create(this, this.chestCallBack, [data, true]), Laya.Handler.create(this, this.chestCallBack, [data, true]), Laya.Handler.create(this, this.chestCallBack, [data, true]));
                    }
                    else {
                        Chestview._Instance.isLate = Chestview._Instance.keyValue <= 0 ? true : Chestview._Instance.isLate;
                        this.chestCallBack(data, false);
                    }
                }
                else {
                    ttAdManager.createVideoAd(Laya.Handler.create(this, this.chestCallBack, [data, true]), Laya.Handler.create(this, this.chestFailCallBack));
                }
            }
        }
        chestCallBack(data, isplaysound) {
            console.log("Chestview._Instance.keyValue", Chestview._Instance.keyValue);
            WxManager.OpenTips("Chúc mừng nhận " + data.diamond + " kim cương");
            Chestview._Instance.setChestData(data.id);
            Chestview._Instance.refreshChest();
            GlobalManager.instance.playerData.gold += data.diamond;
            GlobalManager.instance.savePlayerData();
        }
        chestFailCallBack() {
        }
        bxTween() {
            let time = (1.1 - this.bxtp.scaleX) * 8000;
            Laya.Tween.to(this.bxtp, { scaleX: 1.1, scaleY: 1.1 }, time, null, Laya.Handler.create(this, this.bxTween1));
        }
        bxTween1() {
            let time = (this.bxtp.scaleX - 1) * 8000;
            Laya.Tween.to(this.bxtp, { scaleX: 1, scaleY: 1 }, time, null, Laya.Handler.create(this, this.bxTween));
        }
    }

    class Chestview extends ui.views.ChestViewUI {
        constructor() {
            super();
            this.keyValue = 3;
            this.isLate = false;
            this.chestData = [
                { id: 1, isget: 0, diamond: TMath.GetRandInt(30, 200) },
                { id: 2, isget: 0, diamond: TMath.GetRandInt(30, 200) },
                { id: 3, isget: 0, diamond: TMath.GetRandInt(30, 200) },
                { id: 4, isget: 0, diamond: TMath.GetRandInt(30, 200) },
                { id: 5, isget: 0, diamond: TMath.GetRandInt(30, 200) },
                { id: 6, isget: 0, diamond: TMath.GetRandInt(30, 200) },
                { id: 7, isget: 0, diamond: TMath.GetRandInt(30, 200) },
                { id: 8, isget: 0, diamond: TMath.GetRandInt(30, 200) },
                { id: 9, isget: 0, diamond: TMath.GetRandInt(30, 200) }
            ];
            this._closeCallback = null;
        }
        onAwake() {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.box.width = Laya.stage.width;
            this.box.height = Laya.stage.height;
            this.autoDestroyAtClosed = true;
            Chestview._Instance = this;
            this.GetBtn.on(Laya.Event.CLICK, this, this.Get);
            this.SkipBtn.on(Laya.Event.CLICK, this, this.Skip);
            this.refreshChest();
        }
        onOpened() {
            GlobalManager.isOpenGoldBox = true;
        }
        onEnable() {
        }
        setChestData(id) {
            for (let i = 0; i < this.chestData.length; i++) {
                if (this.chestData[i].id == id) {
                    this.chestData[i].isget = 1;
                    break;
                }
            }
        }
        refreshChest() {
            let isallopen = this.getIsAllopen();
            isallopen && Laya.timer.once(2000, this, () => {
                this.Skip();
            });
            this.GetBtn.visible = this.keyValue > 0 || isallopen ? false : true;
            this.SkipBtn.visible = this.keyValue > 0 || isallopen ? false : true;
            this.chestSet();
        }
        chestSet() {
            this.ChestList.itemRender = ChestItem;
            this.ChestList.array = this.chestData;
            this.ChestList.renderHandler = Laya.Handler.create(this, this.freshList1, null, false);
        }
        freshList1(item, idx) {
            item.setShow(this.chestData[idx]);
        }
        Get() {
            ttAdManager.createVideoAd(Laya.Handler.create(this, () => {
                this.getKeyCallBack();
            }), Laya.Handler.create(this, () => {
            }));
        }
        getKeyCallBack() {
            this.keyValue += 3;
            this.refreshChest();
        }
        getKeyFailCallBack() {
        }
        Skip() {
            ViewMgr.instance.OpenSettlement(this, () => {
                console.log("打开结算");
            });
            this.close();
        }
        getIsAllopen() {
            for (let i = 0; i < this.chestData.length; i++) {
                if (this.chestData[i].isget != 1) {
                    return false;
                }
            }
            return true;
        }
        onDisable() {
            Laya.timer.clearAll(this);
            if (this._closeCallback)
                return this._closeCallback();
        }
    }

    class Donghua extends Laya.Image {
        constructor() {
            super();
            this.scaleTime = 100;
            this.initScale = 0;
            this.clickScale = 0;
            this.anchorX = this.anchorY = 0.5;
            this.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmal);
            this.on(Laya.Event.MOUSE_UP, this, this.scaleBig);
            this.on(Laya.Event.MOUSE_OUT, this, this.scaleBig);
        }
        onAwake() {
            this.initScale = this.scaleX;
            this.clickScale = this.scaleX * 1.08;
        }
        scaleBig() {
            Laya.Tween.to(this, { scaleX: this.initScale, scaleY: this.initScale }, this.scaleTime);
        }
        scaleSmal() {
            Laya.Tween.to(this, { scaleX: this.clickScale, scaleY: this.clickScale }, this.scaleTime);
            SoundMgr.instance.clcik.Play();
        }
    }

    class ttAdControl extends Laya.Script {
        constructor() {
            super();
            this.isshowbannerAd = true;
        }
        onAwake() {
            ttAdManager.hidebannerAd();
            switch (this.owner.name) {
                case "ChestView":
                case "LotteryView":
                case "SettlementView":
                case "SignView":
                case "TrialView":
                case "shareScreenView":
                case "GetSkinPanel":
                    if (!ttAdManager.bannerAd) {
                        ttAdManager.createBannerAd(Laya.Handler.create(this, this.showbannerAd));
                    }
                    else {
                        this.showbannerAd();
                    }
                    break;
                default:
                    break;
            }
        }
        showbannerAd() {
            if (!this.isshowbannerAd) {
                return;
            }
            ttAdManager.showbannerAd();
        }
        onDestroy() {
            this.isshowbannerAd = false;
            ttAdManager.hidebannerAd();
            Laya.timer.clearAll(this);
        }
    }

    class GetSkinPanel extends ui.views.GetSkinPanelUI {
        constructor() {
            super();
            this._playerData = null;
            this.skinData = [];
            this.currentData = null;
            this._jd = 0;
            this.isClck = false;
        }
        get jd() {
            return this._jd;
        }
        set jd(value) {
            this._jd = value;
            this.jindu_txt.text = String(Math.floor(value * 100)) + "%";
        }
        onAwake() {
            this.autoDestroyAtClosed = true;
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.box.width = Laya.stage.width;
            this.box.height = Laya.stage.height;
            this.huoqu_btn.on(Laya.Event.CLICK, this, this.onLQvideo);
            this.jixu_btn.on(Laya.Event.CLICK, this, this.guanbi);
            this.jixu_btn.visible = false;
            Laya.timer.once(UserData.TotalSwitch == 1 ? 2000 : 0, this, () => {
                this.jixu_btn.visible = true;
            });
            this.huoqu_btn.visible = false;
            this._playerData = GlobalManager.instance.getPlayerData();
            for (var i = 0; i < goodsConfig.length; i++) {
                var data = goodsConfig[i];
                if (data.acquireType == AcquireType.level && data.classify == 0) {
                    this.skinData.push(data);
                }
            }
            for (var i = 0; i < this.skinData.length - 1; i++) {
                for (var j = 0; j < this.skinData.length - 1; j++) {
                    if (this.skinData[j].progress > this.skinData[j + 1].progress) {
                        var temp = this.skinData[j];
                        this.skinData[j] = this.skinData[j + 1];
                        this.skinData[j + 1] = temp;
                    }
                }
            }
            for (var i = 0; i < this.skinData.length; i++) {
                var data = this.skinData[i];
                if (data.progress == this._playerData.currentLevel - 1) {
                    this.currentData = data;
                    this.keJieSuo();
                    return;
                }
            }
            for (var i = 0; i < this.skinData.length; i++) {
                var data = this.skinData[i];
                if (data.progress > this._playerData.currentLevel - 1) {
                    this.currentData = data;
                    this.jinDu();
                    return;
                }
            }
            Math.random() * 100 < UserData.interstitialshowodds && ttAdManager.createInterstitialAd();
        }
        guanbi() {
            Game.instance.openSettlement(50);
            this.close();
        }
        shouImg() {
            this.player1.skin = this.currentData.unlockImg[0];
            this.player2.skin = this.currentData.unlockImg[1];
        }
        onLQvideo() {
            ttAdManager.createVideoAd(Laya.Handler.create(this, () => {
                this.onLQ();
            }), Laya.Handler.create(this, () => {
            }));
        }
        onLQ() {
            this._playerData.getPlayerItem(this.currentData.id).progress = 1000;
            this._playerData.roleId = this.currentData.id;
            GlobalManager.instance.savePlayerData();
            this.guanbi();
        }
        keJieSuo() {
            this.shouImg();
            var id = this.currentData.id;
            console.log(this._playerData.getPlayerItem(id).progress, this.currentData.progress);
            if (this._playerData.getPlayerItem(id).progress < this.currentData.progress) {
                this.huoqu_btn.visible = true;
            }
            this.jd = 0.9;
            this.zztp.height = 637 - 637 * 0.9;
            Laya.Tween.to(this, {
                jd: 1,
            }, 2000, null, null, 0, false);
            Laya.Tween.to(this.zztp, {
                height: 0,
            }, 2000, null, Laya.Handler.create(this, () => {
                this.isClck = true;
            }), 0, false);
        }
        jinDu() {
            this.shouImg();
            var bfb0 = (100 - (this.currentData.progress - (this._playerData.currentLevel - 2)) * 10) / 100;
            var bfb = (100 - (this.currentData.progress - (this._playerData.currentLevel - 1)) * 10) / 100;
            var h = 637 - 637 * bfb;
            var h0 = 637 - 637 * bfb0;
            this.zztp.height = h0;
            this.jd = bfb0;
            Laya.Tween.to(this, {
                jd: bfb,
            }, 2000, null, null, 0, false);
            Laya.Tween.to(this.zztp, {
                height: h,
            }, 2000, null, Laya.Handler.create(this, () => {
                this.isClck = true;
            }), 0, false);
        }
        onEnable() {
        }
        onDestroy() {
        }
    }

    class Donghua2 extends Laya.Script {
        constructor() {
            super();
            this.isSound = true;
            this.isScaleParent = true;
            this.scaleTime = 100;
            this.owner = null;
            this.initScale = 0;
            this.clickScale = 0;
        }
        onAwake() {
            this.owner = this.owner;
            this.scaleNode = this.owner;
            if (!this.isScaleParent) {
                this.scaleNode = this.owner.getChildAt(0);
            }
            this.initScale = this.scaleNode.scaleX;
            this.clickScale = this.scaleNode.scaleX * 1.08;
            this.owner.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmal);
            this.owner.on(Laya.Event.MOUSE_UP, this, this.scaleBig);
            this.owner.on(Laya.Event.MOUSE_OUT, this, this.scaleBig);
        }
        scaleBig() {
            Laya.Tween.to(this.scaleNode, { scaleX: this.initScale, scaleY: this.initScale }, this.scaleTime);
            if (this.isSound) {
                SoundMgr.instance.clcik.Play();
            }
        }
        scaleSmal() {
            Laya.Tween.to(this.scaleNode, { scaleX: this.clickScale, scaleY: this.clickScale }, this.scaleTime);
        }
    }

    class CommonData {
        constructor() {
            this.devtools = false;
            this.onplatformTT = false;
            this.onplatformWX = false;
            this.OnIOS = false;
            this.OnPc = false;
            this.OnAndroid = false;
            this.launchOptions = {};
        }
    }

    class GameSample {
        static OnGameSceneLoadOk(p_Scene3D) {
            Laya.stage.addChildAt(p_Scene3D, 0);
            SceneManager.game = p_Scene3D;
            p_Scene3D.addComponent(Game);
        }
        static StartGame() {
            ViewMgr.instance.OpenGame(this, () => {
            });
        }
        static GotoHome() {
            ViewMgr.instance.OpenHome(null, null);
        }
        static GotoHomeLoadEffect() {
            ViewMgr.instance.OpenHome_loadingeffect(null, null);
        }
        static StartGame_LoadEffect() {
            ViewMgr.instance.OpenGame_loadingeffect(this, (view) => {
                SceneManager.LoadSceneByName('Game', this, this.OnGameSceneLoadOk);
            });
        }
    }
    GameSample.commonData = new CommonData();

    class Wxmgr {
        constructor() {
            console.log('wxmgr init');
            this._regisiterWXCallback();
        }
        _regisiterWXCallback() {
            let p_window = window["wx"];
            p_window.onShow(this.onWxShowEvent);
            p_window.onAudioInterruptionEnd(this.onAudioInterruptionEnd);
        }
        onWxShowEvent(res) {
            console.log('wxmgr onWxShowEvent');
            EventMgr.instance.event(EventType.WxOnShow);
        }
        onAudioInterruptionEnd(res) {
            console.log('wxmgr onAudioInterruptionEnd');
            EventMgr.instance.event(EventType.WxOnShow);
        }
    }

    class Platform {
        static setplatformInfo() {
            GameSample.commonData.windowTT = window["tt"];
            GameSample.commonData.onplatformTT = GameSample.commonData.windowTT != null;
            if (GameSample.commonData.onplatformTT) { }
            else if (Laya.Browser.onVVMiniGame) {
                GameSample.commonData.OnAndroid = true;
            }
            else if (Laya.Browser.onQGMiniGame) {
                GameSample.commonData.OnAndroid = true;
            }
            else if (Laya.Browser.onMiniGame && GameSample.commonData.onplatformTT == false) {
                GameSample.commonData.onplatformWX = window["wx"] != null;
                GameSample.commonData.windowWX = window["wx"];
            }
            else if (Laya.Browser.onPC) {
                GameSample.commonData.OnPc = true;
            }
            if (Laya.Browser.onQQMiniGame) {
                let sysInfo = Laya.Browser.window.qq.getSystemInfoSync();
                if (sysInfo && sysInfo.platform.startsWith("ios"))
                    GameSample.commonData.OnIOS = true;
                if (sysInfo && sysInfo.system.startsWith("iOS"))
                    GameSample.commonData.OnIOS = true;
                console.log('LayaSample.commonData.OnIOS=' + GameSample.commonData.OnIOS);
                if (sysInfo && sysInfo.platform.startsWith("android"))
                    GameSample.commonData.OnAndroid = true;
                if (sysInfo && sysInfo.brand.startsWith("devtools"))
                    GameSample.commonData.devtools = true;
                GameSample.commonData.onplatformWX = false;
            }
            if (GameSample.commonData.onplatformWX) {
                let sysInfo;
                if (GameSample.commonData.onplatformWX)
                    sysInfo = window["wx"].getSystemInfoSync();
                else if (GameSample.commonData.onplatformTT) {
                    sysInfo = GameSample.commonData.windowTT.getSystemInfoSync();
                }
                {
                    if (sysInfo && sysInfo.platform.startsWith("ios"))
                        GameSample.commonData.OnIOS = true;
                    if (sysInfo && sysInfo.system.startsWith("iOS"))
                        GameSample.commonData.OnIOS = true;
                    console.log('LayaSample.commonData.OnIOS=' + GameSample.commonData.OnIOS);
                    console.log(sysInfo);
                    if (sysInfo && sysInfo.platform.startsWith("android"))
                        GameSample.commonData.OnAndroid = true;
                    if (sysInfo && sysInfo.brand.startsWith("devtools"))
                        GameSample.commonData.devtools = true;
                }
            }
            if (GameSample.commonData.onplatformWX) {
                new Wxmgr();
            }
        }
        static loadSubpackage_Single(wxSubloadNameJson, callder, callbackFunc) {
            if (GameSample.commonData.onplatformTT) {
                console.error('不支持分包');
            }
            else if (Laya.Browser.onMiniGame) {
                let LoadSubpackageTask = wx['loadSubpackage']({
                    name: wxSubloadNameJson,
                    success: function (res) {
                        console.log(wxSubloadNameJson + " 分包加载成功");
                        callbackFunc.apply(callder, [true]);
                    },
                    fail: function (res) {
                        console.error(wxSubloadNameJson + "分包加载失败");
                        callbackFunc.apply(callder, [false]);
                    }
                });
                return LoadSubpackageTask;
            }
            else if (Laya.Browser.onQQMiniGame) {
                let LoadSubpackageTask = window['qq'].loadSubpackage({
                    name: wxSubloadNameJson,
                    success: function (res) {
                        console.log(wxSubloadNameJson + " qq 分包加载成功");
                        callbackFunc.apply(callder, [true]);
                    },
                    fail: function (res) {
                        console.error(wxSubloadNameJson + " qq 分包加载失败");
                        callbackFunc.apply(callder, [false]);
                    }
                });
                return LoadSubpackageTask;
            }
            else if (Laya.Browser.onQGMiniGame) {
                console.log("oppo 分包", wxSubloadNameJson);
                let LoadSubpackageTask = qg.loadSubpackage({
                    name: wxSubloadNameJson,
                    success: function (res) {
                        console.log(wxSubloadNameJson + "分包加载成功");
                        callbackFunc.apply(callder, [true]);
                    },
                    fail: function (res) {
                        console.error(wxSubloadNameJson + "分包加载失败");
                        console.error(JSON.stringify(res));
                        callbackFunc.apply(callder, [false]);
                    }
                });
                return LoadSubpackageTask;
            }
            else {
                let p_qg = qg;
                let loadTask = p_qg.loadSubpackage({
                    name: wxSubloadNameJson,
                    success: function (res) {
                        console.log(wxSubloadNameJson + "分包加载成功");
                        callbackFunc.apply(callder, [true]);
                    },
                    fail: function (res) {
                        console.error(wxSubloadNameJson + "分包加载失败", res);
                        callbackFunc.apply(callder, [false]);
                    }
                });
                return loadTask;
            }
        }
        static supportSubPackage() {
            if (GameSample.commonData.onplatformTT) {
                return true;
            }
            else if (GameSample.commonData.onplatformWX) {
                console.log('onplatformWX');
                return true;
            }
            else if (Laya.Browser.onVVMiniGame) {
                return true;
            }
            else if (Laya.Browser.onQGMiniGame) {
                return true;
            }
            else if (Laya.Browser.onQQMiniGame) {
                return true;
            }
            else if (Laya.Browser.onQGMiniGame) {
                return true;
            }
            else {
                return false;
            }
        }
        static isPlayVibrate() {
            return PlayerPrefs.GetInt('Vibrate', 1) == 1;
        }
        static setPlayVibrate(isPlayVibrate) {
            PlayerPrefs.SetInt('Vibrate', isPlayVibrate ? 1 : 0);
        }
        static vibrateLong() {
            if (Platform.isPlayVibrate()) {
                if (GameSample.commonData.onplatformWX) {
                    let obj = {
                        success: function () { },
                        fail: function () { },
                        complete: function () { }
                    };
                    window['wx'].vibrateLong(obj);
                }
                else if (GameSample.commonData.onplatformTT) {
                    GameSample.commonData.windowTT.vibrateLong({
                        success(res) {
                            console.log(`${res}`);
                        },
                        fail(res) {
                            console.log(`vibrateLong调用失败`);
                        },
                    });
                }
                else if (Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame) {
                    let obj = {
                        success: function () { },
                        fail: function () { },
                        complete: function () { }
                    };
                    qg.vibrateLong(obj);
                    console.log('qg.vibrateLong');
                }
                else if (Laya.Browser.onQQMiniGame) {
                    let obj = {
                        success: function () { },
                        fail: function () { },
                        complete: function () { }
                    };
                    window['qq'].vibrateLong(obj);
                }
                else {
                    if (Laya.Browser.window['qg'] == null)
                        return;
                    if (Laya.Browser.window['qg'].vibrateLong == null)
                        return;
                    let obj = {
                        success: function () { },
                        fail: function () { },
                        complete: function () { }
                    };
                    qg.vibrateLong(obj);
                }
            }
        }
        static showToast(msg) {
            if (GameSample.commonData.OnPc) {
                return;
            }
            if (GameSample.commonData.onplatformTT) {
                GameSample.commonData.windowTT.showToast({
                    title: msg,
                    duration: 2000,
                    success(res) {
                    },
                    fail(res) {
                    }
                });
            }
            else if (GameSample.commonData.onplatformWX) {
                let object = {
                    title: msg, icon: '', image: '', duration: 1500,
                    success: () => { }, fail: () => { }, complete: () => { }, mask: false
                };
                qg.showToast(object);
            }
            else if (Laya.Browser.onVVMiniGame) {
                let object = {
                    title: msg, icon: '', image: '', duration: 1500,
                    success: () => { }, fail: () => { }, complete: () => { }, mask: false
                };
                window["qg"].showToast(object);
            }
            else if (Laya.Browser.onQGMiniGame) {
                console.log('oppo showToast', msg);
                let object = {
                    title: msg, icon: '', image: '', duration: 1500,
                    success: () => { }, fail: () => { }, complete: () => { }, mask: false
                };
                window["qg"].showToast(object);
            }
        }
    }

    class InitView extends BaseView {
        onAwake() {
            WxManager.GetPhoneMsg();
            super.onAwake();
            Platform.setplatformInfo();
            console.log("初始页");
            GameSample.GotoHomeLoadEffect();
            if (Platform.supportSubPackage()) {
                console.log("加载分包");
            }
            else {
                GlobalManager.loadNum = GlobalManager.loadMax;
            }
        }
        onsubpackgeLoadOk() {
            GlobalManager.loadNum++;
        }
    }

    class LotteryView extends BaseView {
        constructor() {
            super();
            this.lottryData = [
                { id: 1, type: 1, value: 600, odds: 25 },
                { id: 1, type: 1, value: 600, odds: 25 },
                { id: 3, type: 1, value: 2000, odds: 10 },
                { id: 4, type: 1, value: 800, odds: 20 },
                { id: 5, type: 1, value: 1200, odds: 10 },
                { id: 6, type: 1, value: 1600, odds: 5 },
                { id: 7, type: 1, value: 3000, odds: 5 },
                { id: 8, type: 1, value: 8888, odds: 0 },
            ];
            this.lotteryOddsData = [];
            this.isFreeLottery = false;
            this.isLottery = false;
            this.openViewName = null;
        }
        onAwake() {
            super.onAwake();
            this.height = Laya.stage.height;
            this.width = Laya.stage.width;
            this.autoDestroyAtClosed = true;
            let lotteryValue = DataStorage.getIntItem("lotteryValue", 0);
            UserData.lotteryValue = lotteryValue ? lotteryValue : UserData.lotteryValue;
            let lotteryTimeStamp = DataStorage.getIntItem("lotteryTimeStamp", 0);
            UserData.lotteryTimeStamp = lotteryTimeStamp ? lotteryTimeStamp : UserData.lotteryTimeStamp;
            this.btn_lottery.on(Laya.Event.CLICK, this, this.lottery);
            this.btn_chest.on(Laya.Event.CLICK, this, this.chest);
            this.btn_skip.on(Laya.Event.CLICK, this, this.skip);
            let isLate = Math.random() * 100 < UserData.lotteryLateodds && Math.random() > 0.5 ? true : false;
            this.btn_lottery.centerX = isLate ? 180 : -180;
            this.btn_skip.centerX = isLate ? -180 : 180;
            this.refreshLottery();
        }
        onOpened(res) {
        }
        refreshLottery() {
            this.lotteryOddsData = [];
            for (let i = 0; i < this.lottryData.length; i++) {
                let node = this.box_award.getChildAt(i);
                let zstp = node.getChildAt(0);
                let jstp = node.getChildAt(1);
                let numlabel = node.getChildAt(2);
                zstp.visible = false;
                jstp.visible = false;
                numlabel.visible = false;
                switch (this.lottryData[i].type) {
                    case 1:
                        zstp.visible = true;
                        numlabel.text = "x" + this.lottryData[i].value;
                        numlabel.visible = true;
                        break;
                    case 2:
                        jstp.skin = this.lottryData[i].url;
                        jstp.visible = true;
                        break;
                }
                let odds = this.lottryData[i].odds / 5;
                for (let j = 0; j < odds; j++) {
                    this.lotteryOddsData.push(this.lottryData[i].id);
                }
            }
            this.refreshUI();
        }
        refreshUI() {
            if (this.openViewName == "GameView")
                return;
            let timestamp = new Date().getTime() / 1000;
            this.isFreeLottery = timestamp >= UserData.lotteryTimeStamp ? true : false;
            UserData.lotteryValue = timestamp >= UserData.lotteryTimeStamp ? 0 : UserData.lotteryValue;
            this.img_video.visible = !this.isFreeLottery;
            this.isFreeLottery ? this.img_mfcj.pos(160, 53) : this.img_mfcj.pos(188, 53);
            this.label_chest.text = UserData.lotteryValue >= 2 ? "Phần thưởng đặc biệt có sẵn" : (2 - UserData.lotteryValue) + " phần thưởng đặc biệt";
            let bar = (UserData.lotteryValue / 2) * 500;
            this.img_chestbar.width = bar >= 500 ? 500 : bar;
            Laya.Tween.clearTween(this.btn_chest);
            UserData.lotteryValue >= 2 && this.chestBtnTween();
        }
        chest() {
            if (this.isLottery) {
                WxManager.OpenTips("Đang quay...");
                return;
            }
            if (UserData.lotteryValue < 2) {
                WxManager.OpenTips("Còn " + (2 - UserData.lotteryValue) + " lần để nhận thưởng!");
            }
            else {
                WxManager.OpenTips("Chúc mừng bạn nhận được thưởng đặc biệt - 500 đồng tiền vàng!");
                GlobalManager.instance.getPlayerData().gold += 500;
                UserData.lotteryValue = 0;
                DataStorage.setItem("lotteryValue", UserData.lotteryValue);
                Laya.Tween.clearTween(this.btn_chest);
                this.btn_chest.scale(1, 1);
                this.refreshUI();
                EventMgr.instance.event(EventType.DataUpdate);
            }
        }
        lottery() {
            if (this.isLottery) {
                WxManager.OpenTips("Đang quay...");
                return;
            }
            if (this.isFreeLottery) {
                this.LotteryCallBack(false);
            }
            else {
                ttAdManager.createVideoAd(Laya.Handler.create(this, this.LotteryCallBack), Laya.Handler.create(this, this.LotteryFailCallBack));
            }
        }
        LotteryCallBack(isplaysound = true) {
            this.isLottery = true;
            SoundMgr.instance.luck.Play();
            if (this.openViewName != "GameView") {
                if (!isplaysound) {
                    UserData.lotteryTimeStamp = (new Date(new Date().toLocaleDateString()).getTime() / 1000) + 86400;
                    DataStorage.setItem("lotteryTimeStamp", UserData.lotteryTimeStamp);
                }
                UserData.lotteryValue++;
                DataStorage.setItem("lotteryValue", UserData.lotteryValue);
            }
            this.box_dial.rotation = 0;
            let rot = 3600;
            let lotteryId = TMath.getDataRandom({ 'arry': this.lotteryOddsData, 'range': 1 })[0];
            rot += Math.random() * 35 + (320 - (lotteryId - 1) * 45);
            Laya.Tween.to(this.box_dial, { rotation: rot }, 4500, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                this.isLottery = false;
                this.refreshUI();
                for (let i = 0; i < this.lottryData.length; i++) {
                    if (this.lottryData[i].id == lotteryId) {
                        switch (this.lottryData[i].type) {
                            case 1:
                                WxManager.OpenTips("Chúc mừng nhận " + this.lottryData[i].value + " xu vàng!");
                                GlobalManager.instance.getPlayerData().gold += this.lottryData[i].value;
                                EventMgr.instance.event(EventType.DataUpdate);
                                break;
                            case 2:
                                GlobalManager.instance.getPlayerData().getPlayerItem(this.lottryData[i].skinid).progress = 1000;
                                GlobalManager.instance.getPlayerData().roleId = this.lottryData[i].skinid;
                                GlobalManager.instance.savePlayerData();
                                Game.instance.alterSkin();
                                WxManager.OpenTips("Chúc mừng bạn nhận được Skin mới! Kiểm tra trong cửa hàng!");
                                break;
                        }
                        break;
                    }
                }
            }));
        }
        LotteryFailCallBack() {
        }
        skip() {
            GlobalManager.instance.savePlayerData();
            if (this.isLottery) {
                WxManager.OpenTips("Đang quay...");
                return;
            }
            this.close();
        }
        chestBtnTween() {
            Laya.Tween.to(this.btn_chest, { scaleX: 1.1, scaleY: 1.1 }, 800, null, Laya.Handler.create(this, this.chestBtnTween1));
        }
        chestBtnTween1() {
            Laya.Tween.to(this.btn_chest, { scaleX: 1, scaleY: 1 }, 800, null, Laya.Handler.create(this, this.chestBtnTween));
        }
        getlockskin() {
            return false;
        }
        onDisable() {
        }
        onDestroy() {
        }
    }

    class SettlementView extends ui.views.SettlementViewUI {
        constructor() {
            super();
            this._gold = 0;
            this._ok = false;
            this.beishu = 5;
            this._jsGold = 0;
            this._playerData = null;
        }
        get gold() {
            return this._gold;
        }
        set gold(value) {
            this._gold = Math.floor(value);
            this.zuanshi1_txt.value = String(this._gold);
        }
        onDestroy() {
        }
        onAwake() {
            window["js"] = this;
            this.autoDestroyAtClosed = true;
            this.zuanshi1_txt.value = "0";
            this._playerData = GlobalManager.instance.getPlayerData();
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.box.width = Laya.stage.width;
            this.box.height = Laya.stage.height;
            this.shuangbeijianli_btn.on(Laya.Event.CLICK, this, this.onShuangbeijiangli);
            this.zhijie_btn.on(Laya.Event.CLICK, this, this.onZhiJie);
            var g = GlobalManager.isVictor ? 100 : 50;
            this._jsGold = ((g + ConfigData.gold) * Game.instance.endCtr.beishu);
            this._jsGold = Math.floor(this._jsGold);
            this.beishu_txt.value = String(this._jsGold * 5);
            Laya.timer.once(50, this, () => {
                this.showGold(this._jsGold);
            });
            this.zhijie_btn.visible = false;
            Laya.timer.once(UserData.TotalSwitch == 1 ? 2000 : 0, this, () => {
                this.zhijie_btn.visible = true;
            });
            this.shengli.getChildAt(0).visible = GlobalManager.isVictor;
            this.shengli.getChildAt(1).visible = !GlobalManager.isVictor;
            this.clickbtnTween(this.wubei);
        }
        clickbtnTween(clickbtn) {
            Laya.Tween.to(clickbtn, { scaleX: 1.1, scaleY: 1.1 }, 800, null, Laya.Handler.create(this, this.clickbtnTween1, [clickbtn]));
        }
        clickbtnTween1(clickbtn) {
            Laya.Tween.to(clickbtn, { scaleX: 1, scaleY: 1 }, 800, null, Laya.Handler.create(this, this.clickbtnTween, [clickbtn]));
        }
        showGold(goldCount, starn = 0, callback = null) {
            this._ok = false;
            this.gold = starn;
            var pos = this.jingbi_icon.localToGlobal(new Laya.Point(0, 0), true, Laya.stage);
            pos.x /= Laya.stage.clientScaleX;
            pos.y /= Laya.stage.clientScaleY;
            GlobalManager.flyDiamondAni("images/icon_zanshi.png", 375, 500, pos.x, pos.y, this, Laya.Handler.create(this, () => {
                Laya.Tween.to(this, {
                    gold: goldCount
                }, 500, null, Laya.Handler.create(this, () => {
                    this._ok = true;
                    if (callback) {
                        callback();
                    }
                }));
            }));
        }
        showGold2(goldCount, starn = 0, callback = null) {
            this._ok = false;
            this.gold = starn;
            Laya.Tween.to(this, {
                gold: goldCount
            }, 500, null, Laya.Handler.create(this, () => {
                this._ok = true;
                if (callback) {
                    callback();
                }
            }));
            GlobalManager.instance.playerData.gold += goldCount;
            GlobalManager.instance.savePlayerData();
        }
        onOpened() {
        }
        onZhiJie() {
            let isLate = Math.random() * 100 < UserData.settleLateodds ? true : false;
            if (isLate) {
                ttAdManager.createVideoAd(Laya.Handler.create(this, () => {
                    this.showGold(this._jsGold * this.beishu, this._jsGold, () => {
                        Laya.timer.once(1000, this, () => {
                            this.skipView();
                        });
                    });
                    GlobalManager.instance.playerData.gold += this._jsGold * this.beishu;
                    GlobalManager.instance.savePlayerData();
                }), Laya.Handler.create(this, () => {
                    GlobalManager.instance.playerData.gold += this._jsGold;
                    this.skipView();
                }), Laya.Handler.create(this, () => {
                    GlobalManager.instance.playerData.gold += this._jsGold;
                    this.skipView();
                }), false);
            }
            else {
                GlobalManager.instance.playerData.gold += this._jsGold;
                this.skipView();
            }
        }
        onShuangbeijiangli() {
            this.shuangbeijianli_btn.disabled = true;
            this.zhijie_btn.visible = false;
            ttAdManager.createVideoAd(Laya.Handler.create(this, () => {
                this.showGold(Math.floor(this._jsGold * this.beishu), this._jsGold, () => {
                    Laya.timer.once(1000, this, () => {
                        this.skipView();
                    });
                });
                GlobalManager.instance.playerData.gold += Math.floor(this._jsGold * this.beishu);
                GlobalManager.instance.savePlayerData();
            }), Laya.Handler.create(this, () => {
                this.shuangbeijianli_btn.disabled = false;
                this.zhijie_btn.visible = true;
            }), Laya.Handler.create(this, () => {
                this.shuangbeijianli_btn.disabled = false;
                this.zhijie_btn.visible = true;
            }));
        }
        skipView() {
            ViewMgr.instance.OpenHome(this, () => {
            });
            Laya.timer.clearAll(this);
            this.close();
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class SignView extends ui.views.SignViewUI {
        constructor() {
            super();
            this.signData = null;
            this._closeCallback = null;
            this._signData = null;
            this._signCount = 0;
            this._currentDay = null;
            this._isDouble = true;
            this._signItem = [];
            this.signData = [
                {
                    id: 0,
                    isDouble: true,
                    name: "",
                    day: 1,
                    isSign: 0,
                    type: ItemType.gold,
                    numberof: 1000,
                    icon: "",
                },
                {
                    id: 1003,
                    isDouble: false,
                    name: "",
                    day: 2,
                    isSign: 0,
                    type: ItemType.gold,
                    numberof: 1500,
                    icon: "sub2/small/s4.png",
                },
                {
                    id: 0,
                    isDouble: true,
                    name: "",
                    day: 1,
                    isSign: 0,
                    type: ItemType.gold,
                    numberof: 1200,
                    icon: "",
                },
                {
                    id: 0,
                    isDouble: true,
                    name: "",
                    day: 1,
                    isSign: 0,
                    type: ItemType.gold,
                    numberof: 1500,
                    icon: "",
                },
                {
                    id: 0,
                    isDouble: true,
                    name: "",
                    day: 1,
                    isSign: 0,
                    type: ItemType.gold,
                    numberof: 2000,
                    icon: "",
                },
                {
                    id: 0,
                    isDouble: true,
                    name: "",
                    day: 1,
                    isSign: 0,
                    type: ItemType.gold,
                    numberof: 2200,
                    icon: "",
                },
                {
                    id: 1005,
                    isDouble: true,
                    name: "",
                    day: 7,
                    isSign: 0,
                    type: ItemType.gold,
                    numberof: 2500,
                    icon: "sub2/small/s6.png",
                }
            ];
        }
        onEnable() {
        }
        onDisable() {
            console.log("关闭签到2");
        }
        onDestroy() {
            console.log("关闭签到");
            if (this._closeCallback)
                this._closeCallback();
        }
        onOpened(arg) {
            this._closeCallback = null;
            if (arg) {
                this._closeCallback = arg[0];
            }
        }
        static isSign() {
            var date = new Date();
            var currentDay = String(date.getFullYear()) + String(date.getMonth()) + String(date.getDate());
            var data = DataStorage.getItem("sign_", null);
            var signData;
            if (data) {
                signData = JSON.parse(data);
            }
            if (signData == null || signData == "" || signData['sign'][6]) {
                signData = { "day": 0, "sign": [0, 0, 0, 0, 0, 0, 0], "count": 0 };
            }
            if (currentDay == signData["day"]) {
                return true;
            }
            return false;
        }
        onAwake() {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.box.width = Laya.stage.width;
            this.box.height = Laya.stage.height;
            this.autoDestroyAtClosed = true;
            var date = new Date();
            this._currentDay = String(date.getFullYear()) + String(date.getMonth()) + String(date.getDate());
            var data = DataStorage.getItem("sign_", null);
            if (data) {
                this._signData = JSON.parse(data);
            }
            if (this._signData == null || this._signData == "" || this._signData['sign'][6]) {
                if (this._signData == null || this._signData == "") {
                    this._signData = { "day": 0, "sign": [0, 0, 0, 0, 0, 0, 0], "count": 0 };
                }
                else {
                    if (this._currentDay != this._signData["day"])
                        this._signData["sign"] = [0, 0, 0, 0, 0, 0, 0];
                }
            }
            if (this._signData["count"] >= 7 && this._currentDay != this._signData["day"]) {
                this.signData[1] = {
                    id: 0,
                    isDouble: true,
                    name: "",
                    day: 1,
                    isSign: 0,
                    type: ItemType.gold,
                    numberof: 1000,
                    icon: "",
                };
                this.signData[6] = {
                    id: 0,
                    isDouble: true,
                    name: "",
                    day: 1,
                    isSign: 0,
                    type: ItemType.gold,
                    numberof: 3000,
                    icon: "",
                };
            }
            ;
            this._signCount = -1;
            for (var i = 0; i < this._signData['sign'].length; i++) {
                if (this._signData['sign'][i]) {
                    this.signData[i].isSign = 1;
                }
                else {
                    this.signData[i].isSign = 0;
                    if (this._signCount == -1) {
                        this._signCount = i;
                        if (this._currentDay != this._signData["day"])
                            this.signData[i].isSign = 2;
                    }
                }
            }
            if (this._signCount == -1) {
                this._signCount = 7;
            }
            if (!this._signData["count"])
                this._signData["count"] = this._signCount;
            if (this._currentDay == this._signData["day"]) {
                this.onSignOK();
                if (this.signData[this._signCount - 1].isDouble) {
                    this.sgin_btn.visible = true;
                    this.sgin1_btn.visible = true;
                    this.sgin2_btn.visible = false;
                }
                else {
                    this.sgin2_btn.visible = true;
                    this.sgin_btn.visible = false;
                    this.sgin1_btn.visible = false;
                }
            }
            else {
                if (this.signData[this._signCount].isDouble) {
                    this.sgin_btn.visible = true;
                    this.sgin1_btn.visible = true;
                    this.sgin2_btn.visible = false;
                }
                else {
                    this.sgin2_btn.visible = true;
                    this.sgin_btn.visible = false;
                    this.sgin1_btn.visible = false;
                }
            }
            this.sgin_btn.on(Laya.Event.MOUSE_UP, this, this.onSign, [1]);
            this.sgin1_btn.on(Laya.Event.MOUSE_UP, this, this.shuangbei, [2]);
            this.sgin2_btn.on(Laya.Event.MOUSE_UP, this, this.shuangbei, [2]);
            this.guanbi_btn.on(Laya.Event.MOUSE_UP, this, this.onCloseSelf);
            this.signSet();
        }
        onCloseSelf() {
            this.close();
        }
        onDouble() {
            console.log("dd", this._isDouble);
            this._isDouble = !this._isDouble;
            this.gou.visible = this._isDouble;
            this.sgin_btn.visible = !this._isDouble;
        }
        shuangbei(b = 1, e) {
            ttAdManager.createVideoAd(Laya.Handler.create(this, () => {
                this.onSign(b, e);
            }), Laya.Handler.create(this, () => {
            }));
        }
        onSign(b = 1, e) {
            this.onSignOK();
            this._signItem[this._signCount].setSgin();
            this._signData["day"] = this._currentDay;
            this._signData["sign"][this._signCount] = 1;
            this._signData["count"] += 1;
            DataStorage.setItem("sign_", JSON.stringify(this._signData));
            if (this.signData[this._signCount].type == ItemType.gold) {
                var goldCount = this.signData[this._signCount].numberof * b;
                GlobalManager.instance.playerData.gold += goldCount;
                GlobalManager.instance.savePlayerData();
                WxManager.OpenTips("Chúc mừng nhận " + goldCount + " vàng");
            }
            else {
                WxManager.OpenTips("Chúc mừng bạn có được Skin mới");
                GlobalManager.instance.getPlayerData().getPlayerItem(this.signData[this._signCount].id).progress = 1000;
                GlobalManager.instance.getPlayerData().roleId = this.signData[this._signCount].id;
                GlobalManager.instance.savePlayerData();
                Game.instance.skinId = this.signData[this._signCount].id;
                Game.instance.alterSkin();
            }
            EventMgr.instance.event(EventType.DataUpdate, this);
        }
        onSignOK() {
            this.sgin_btn.disabled = true;
            this.sgin1_btn.disabled = true;
            this.sgin2_btn.disabled = true;
        }
        signSet() {
            for (var i = 0; i < this.signBox.numChildren; i++) {
                var signItem = this.signBox.getChildAt(i);
                signItem.init(this.signData[i]);
                this._signItem.push(signItem);
            }
        }
        freshList1(item, idx) {
            item.init(this.signData[idx]);
        }
    }

    class StockoutView extends ui.views.StockoutViewUI {
        constructor() {
            super();
            this._closeCallback = null;
            this._type = ItemType.energy;
            this._count = 0;
        }
        onEnable() {
        }
        onAwake() {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.box.width = Laya.stage.width;
            this.box.height = Laya.stage.height;
            this.autoDestroyAtClosed = true;
            this.huoqu_btn.on(Laya.Event.MOUSE_UP, this, this.onVideoHQ);
            this.guanbi_btn.on(Laya.Event.MOUSE_UP, this, this.onCloseSelf);
            Math.random() * 100 < UserData.interstitialshowodds && ttAdManager.createInterstitialAd();
        }
        onCloseSelf() {
            this.close();
        }
        onVideoHQ() {
            ttAdManager.createVideoAd(Laya.Handler.create(this, () => {
                this.onVideo();
            }), Laya.Handler.create(this, () => {
            }));
        }
        onVideo() {
            if (this._type == ItemType.energy) {
                this.addEnergy();
                WxManager.OpenTips("Chúc mừng bạn nhận thêm 15 thể lực");
            }
            else {
                GlobalManager.instance.playerData.gold += this._count;
                WxManager.OpenTips("Chúc mừng nhận " + this._count + " vàng");
            }
            GlobalManager.instance.savePlayerData();
            EventMgr.instance.event(EventType.DataUpdate);
            this.close();
        }
        addEnergy() {
            GlobalManager.instance.playerData.addEnergy(10);
            this.onCloseSelf();
        }
        onDisable() {
            if (this._closeCallback)
                this._closeCallback();
        }
        onOpened(arg) {
            this._closeCallback = null;
            this._closeCallback = arg[0];
            this._type = arg[1];
            this._count = arg[2];
            if (this._type == ItemType.energy) {
                this.huobi.visible = false;
                this.tili.visible = true;
                this.tili_txt.text = "15";
                this.title.skin = "images/title_tlbz.png";
            }
            else {
                this.huobi.visible = true;
                this.tili.visible = false;
                this.shuliang_txt.text = arg[2];
                this.title.skin = "images/title_jbbz.png";
            }
        }
    }

    var gg = [
        { price: 300, type: "Clothes", name: "Clothes_F_Ballerina" },
        { price: 300, type: "Clothes", name: "Clothes_F_Bikini" },
        { price: 300, type: "Clothes", name: "Clothes_F_Catwoman" },
        { price: 300, type: "Clothes", name: "Clothes_F_Cheerleader" },
        { price: 300, type: "Clothes", name: "Clothes_F_Dress" },
    ];
    var mm = [
        { price: 300, type: "Clothes", name: "Clothes_M_Batman" },
        { price: 300, type: "Clothes", name: "Clothes_M_Football" },
        { price: 300, type: "Clothes", name: "Clothes_M_Shorts" },
        { price: 300, type: "Clothes", name: "Clothes_M_Suit" },
        { price: 300, type: "Clothes", name: "Clothes_M_Tuxedo" },
    ];
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    class TrialView extends ui.views.TrialViewUI {
        constructor() {
            super();
            this.isLate = false;
            this.skinNode = [];
            this.era = 0;
            this.level = 1;
            this.role = null;
            this.selfData = null;
        }
        onAwake() {
            window["sy"] = this;
            var pfdata = GlobalManager.instance.getSkinData();
            var r = Math.floor(Math.random() * pfdata.length);
            this.selfSkinData = pfdata[r];
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.box.width = Laya.stage.width;
            this.box.height = Laya.stage.height;
            this.autoDestroyAtClosed = true;
            this.shiyong_btn.on(Laya.Event.CLICK, this, this.onShiYong);
            this.zbsytp.on(Laya.Event.CLICK, this, this.onFangQi);
            this.guanbi_btn.on(Laya.Event.CLICK, this, this.onFangQi);
            Laya.timer.frameLoop(1, this, () => {
                this.guang.rotation += 1;
            });
            Math.random() * 100 < UserData.interstitialshowodds && ttAdManager.createInterstitialAd();
        }
        onFangQi() {
            this.isLate = Math.random() * 100 < UserData.tryLateodds ? true : false;
            if (this.isLate) {
                ttAdManager.createVideoAd(Laya.Handler.create(this, () => {
                    Game.instance.playerCtr.shiyong(this.era);
                    GameSample.StartGame();
                    this.close();
                }), Laya.Handler.create(this, () => {
                    GameSample.StartGame();
                    this.close();
                }), Laya.Handler.create(this, () => {
                    GameSample.StartGame();
                    this.close();
                }));
            }
            else {
                GameSample.StartGame();
                this.close();
            }
        }
        CreateScene3D() {
            this.Scene3D = this.addChildAt(new Laya.Scene3D(), 1);
            this.Camera = this.Scene3D.addChild(new Laya.Camera());
            this.Camera.clearFlag = Laya.CameraClearFlags.DepthOnly;
            this.Camera.transform.position = new Laya.Vector3(0, 3.5, -9);
            this.Camera.transform.rotationEuler = new Laya.Vector3(-20, 180, 0);
            this.DirectionalLight = this.Scene3D.addChild(new Laya.DirectionLight());
            this.DirectionalLight.transform.position = new Laya.Vector3(0, 0, 0);
            this.DirectionalLight.transform.rotationEuler = new Laya.Vector3(0, 180, 0);
            this.DirectionalLight.color = new Laya.Vector3(1, 1, 1);
            this.role = Game.instance.playerBodyNode.clone();
            this.Scene3D.addChild(this.role);
            this.role.transform.localRotationEuler = new Laya.Vector3(0, 180, 0);
            this.role.transform.localPosition = new Laya.Vector3(0, 0, 0);
            var animator = this.role.getComponent(Laya.Animator);
            animator.crossFade(AnimatorName.idle, 0.1);
            this.roleCtr = this.role.addComponent(Boss);
            if (Game.instance.playerData.era >= 10) {
                this.era = JTools.getRandomInt(1, 10);
            }
            else {
                this.era = JTools.getRandomInt(Game.instance.playerData.era + 1, 10);
            }
            this.shenfen.text = eraNames[this.era];
            this.shenfen.color = eraNameC[this.era];
            this.roleCtr.init(this.era);
        }
        roleZ() {
            this.role.transform.localRotationEulerY += 1;
        }
        loadSkin() {
        }
        alterSkin(level) {
        }
        loadItem(name, callback) {
            Laya.loader.create("LayaScene_sub1/Conventional/" + name + ".lh", Laya.Handler.create(this, (item) => {
                var obj = item.clone();
                callback(obj);
            }));
        }
        onOpened() {
            this.CreateScene3D();
        }
        onShiYong() {
            ttAdManager.createVideoAd(Laya.Handler.create(this, () => {
                Game.instance.playerCtr.shiyong(this.era);
                GameSample.StartGame();
                this.close();
            }), Laya.Handler.create(this, () => {
                GameSample.StartGame();
                this.close();
            }));
        }
        onEnable() {
        }
        onDisable() {
            this.Scene3D && this.Scene3D.destroy(true);
            Laya.timer.clearAll(this);
        }
        playAni(names, speed = 1, durtime = 0) {
            this.animator.speed = speed;
            var r = Math.floor(Math.random() * names.length);
            var name = names[r];
            this.animator.crossFade(name, 0.2);
        }
        onDestroy() {
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/item/SignItem.ts", SignItem);
            reg("script/item/SignItem1.ts", SignItem1);
            reg("script/views/Chestview.ts", Chestview);
            reg("script/Donghua.ts", Donghua);
            reg("script/sdk/tt/ttAdControl.ts", ttAdControl);
            reg("script/views/GameView.ts", GameView);
            reg("script/views/GetSkinPanel.ts", GetSkinPanel);
            reg("script/views/HomeView.ts", HomeView);
            reg("script/Donghua2.ts", Donghua2);
            reg("script/views/InitView.ts", InitView);
            reg("script/views/LoadView.ts", LoadView);
            reg("script/views/LotteryView.ts", LotteryView);
            reg("script/views/RockerView.ts", RockerView);
            reg("script/views/SettlementView.ts", SettlementView);
            reg("script/views/ShopView.ts", ShopView);
            reg("script/views/SignView.ts", SignView);
            reg("script/views/StockoutView.ts", StockoutView);
            reg("script/views/TrialView.ts", TrialView);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "views/InitView.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
