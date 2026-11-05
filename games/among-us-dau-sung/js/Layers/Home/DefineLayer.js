var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * LobbyView
 * @author XuJian
 */
var DefineLayer = /** @class */ (function (_super) {
    __extends(DefineLayer, _super);
    function DefineLayer() {
        var _this = _super.call(this) || this;
        _this.closeOnSide = false;
        _this.setBackgroudnColor(Laya.stage.bgColor);
        _this.m_stage = dao.find(StageDao).stage;
        _this.page0.vScrollBarSkin = "";
        _this.page1.vScrollBarSkin = "";
        _this.page0.renderHandler = new Laya.Handler(_this, _this.onHelmetRender);
        _this.page1.renderHandler = new Laya.Handler(_this, _this.onClothRender);
        _this.page0.array = HelmetConfig.configs;
        _this.page1.array = ClothConfig.configs;
        _this.tab.selectHandler = new Laya.Handler(_this, _this.onTabSelect);
        _this.tab.selectedIndex = 0;
        _this.onTabSelect(0);
        return _this;
    }
    DefineLayer.prototype.onTabSelect = function (index) {
        this.tab.items[0].gray = !(index === 0);
        this.tab.items[1].gray = !(index === 1);
        this.page0.visible = index === 0;
        this.page1.visible = index === 1;
    };
    DefineLayer.prototype.onResize = function () {
    };
    DefineLayer.prototype.onExit = function () {
    };
    DefineLayer.prototype.onOpened = function () {
        var guideDao = dao.find(GuideDao);
        if (guideDao.index === 4) {
            var guide = new Guide();
            guide.step(this);
            guide.popup();
        }
    };
    DefineLayer.prototype.onHelmetRender = function (cell, index) {
        var data = cell.dataSource;
        cell.getChildByName("skin").skin = data.skinRes;
        cell.getChildByName("tName").text = data.name;
        var btn = cell.getChildByName("btn");
        var container = cell.getChildByName("container");
        var priceLabel = container.getChildByName("priceLabel");
        var armorDao = dao.find(ArmorDao);
        var has = armorDao.hasHelmetByID(data.id);
        var desLabel = cell.getChildByName("desLabel");
        if (has) {
            btn.skin = "commons/button_equip.png";
            btn.on(Laya.Event.CLICK, this, this.onHelmetChange, [data]);
            container.visible = false;
            btn.visible = true;
        }
        else {
            if (data.type === 1) {
                container.visible = true;
                priceLabel.text = data.price + "";
                btn.skin = "commons/button_buy.png";
                btn.on(Laya.Event.CLICK, this, this.buyHelmet, [data]);
                btn.visible = true;
            }
            else if (data.type === 3) {
                desLabel.text = "Hoàn thành level " + (data.stage - 1) + " để mở";
                btn.visible = false;
                container.visible = false;
                console.log("this.stage =", this.m_stage);
                if (this.m_stage >= data.stage) {
                    container.visible = true;
                    priceLabel.text = data.price + "";
                    desLabel.text = "";
                    btn.skin = "commons/button_buy.png";
                    btn.on(Laya.Event.CLICK, this, this.buyHelmet, [data]);
                    btn.visible = true;
                }
            }
            else {
                desLabel.text = "Nhận từ hoạt động";
                btn.visible = false;
                container.visible = false;
            }
        }
        if (armorDao.helmetID === data.id) {
            btn.visible = false;
            desLabel.text = "Đã trang bị";
        }
    };
    DefineLayer.prototype.onHelmetChange = function (data) {
        var armorDao = dao.find(ArmorDao);
        armorDao.helmetID = data.id;
        this.page0.refresh();
    };
    DefineLayer.prototype.buyHelmet = function (data) {
        var diamondDao = dao.find(DiamondDao);
        var diamond = diamondDao.diamonds;
        if (diamond >= data.price) {
            diamondDao.addDiamonds(-data.price);
            dao.find(ArmorDao).pushHelmets(data.id);
            this.page0.refresh();
        }
        else {
            new MessagePop("No More Diamonds!").popup();
        }
    };
    DefineLayer.prototype.onClothRender = function (cell, index) {
        var data = cell.dataSource;
        cell.getChildByName("skin").skin = data.skin;
        cell.getChildByName("tName").text = data.name;
        var btn = cell.getChildByName("btn");
        var container = cell.getChildByName("container");
        var priceLabel = container.getChildByName("priceLabel");
        var armorDao = dao.find(ArmorDao);
        var has = armorDao.hasClothByID(data.id);
        var desLabel = cell.getChildByName("desLabel");
        if (has) {
            btn.skin = "commons/button_equip.png";
            btn.on(Laya.Event.CLICK, this, this.onClothChange, [data]);
            container.visible = false;
            btn.visible = true;
        }
        else {
            if (data.type === 1) {
                container.visible = true;
                priceLabel.text = data.price + "";
                btn.skin = "commons/button_buy.png";
                btn.on(Laya.Event.CLICK, this, this.buyCloth, [data]);
                btn.visible = true;
            }
            else if (data.type === 3) {
                desLabel.text = "Hoàn thành level " + (data.stage - 1) + " để mở";
                btn.visible = false;
                container.visible = false;
                if (this.m_stage >= data.stage) {
                    desLabel.text = "";
                    container.visible = true;
                    priceLabel.text = data.price + "";
                    btn.skin = "commons/button_buy.png";
                    btn.on(Laya.Event.CLICK, this, this.buyCloth, [data]);
                    btn.visible = true;
                }
            }
            else {
                desLabel.text = "Nhận từ hoạt động";
                btn.visible = false;
                container.visible = false;
            }
        }
        if (armorDao.clothID === data.id) {
            console.log("coiinini");
            btn.visible = false;
            desLabel.text = "Đã trang bị";
        }
    };
    DefineLayer.prototype.onClothChange = function (data) {
        var armorDao = dao.find(ArmorDao);
        armorDao.clothID = data.id;
        this.page1.refresh();
    };
    DefineLayer.prototype.buyCloth = function (data) {
        var diamondDao = dao.find(DiamondDao);
        var diamond = diamondDao.diamonds;
        if (diamond >= data.price) {
            diamondDao.addDiamonds(-data.price);
            dao.find(ArmorDao).pushCloths(data.id);
            this.page1.refresh();
        }
        else {
            new MessagePop("No More Diamonds!").popup();
        }
    };
    return DefineLayer;
}(ui.Layers.Home.DefineLayerUI));
