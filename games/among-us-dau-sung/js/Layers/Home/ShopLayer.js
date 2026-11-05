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
var ShopLayer = /** @class */ (function (_super) {
    __extends(ShopLayer, _super);
    function ShopLayer() {
        var _this = _super.call(this) || this;
        _this.setBackgroudnColor(Laya.stage.bgColor);
        _this.tab.selectedIndex = 0;
        _this.tab.selectHandler = new Laya.Handler(_this, _this.onTabSelect);
        _this.page1.renderHandler = new Laya.Handler(_this, _this.onRenderPage1);
        _this.buttonDiamond.on(Laya.Event.CLICK, _this, _this.onVedioDiamond);
        _this.buttonPower.on(Laya.Event.CLICK, _this, _this.onVedioPower);
        _this.btnHuafei.on(Laya.Event.CLICK, _this, _this.onHuafeiClick);
        //背景
        _this.page1.array = BackgroundDao.COLORSARRAY;
        _this.onTabSelect(0);
        return _this;
    }
    ShopLayer.prototype.onTabSelect = function (index) {
        this.tab.items[0].gray = !(index === 0);
        this.tab.items[1].gray = !(index === 1);
        this.page0.visible = index === 0;
        this.page1.visible = index === 1;
    };
    ShopLayer.prototype.onVedioDiamond = function () {
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.onVedioDiamondDone));
    };
    ShopLayer.prototype.onVedioDiamondDone = function () {
        var diamondDao = dao.find(DiamondDao);
        diamondDao.addDiamonds(20);
    };
    ShopLayer.prototype.onVedioPower = function () {
        var k = platform.getInstance().getStorageSync(dao.YYYYMMDD()) || 0;
        var c = Number(k);
        if (c >= 2) {
            new MessagePop("Not More Strength").popup();
            return;
        }
        var d = dao.find(PowerDao);
        if (d.power >= 20) {
            new PowerEnoughPop().popup();
            return;
        }
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.onVedioPowerDone));
    };
    ShopLayer.prototype.onVedioPowerDone = function () {
        var powerDao = dao.find(PowerDao);
        powerDao.power += 3;
        new MessagePop("Strength x 3").popup();
        var k = platform.getInstance().getStorageSync(dao.YYYYMMDD()) || 0;
        var d = Number(k);
        d++;
        platform.getInstance().setStorageSync(dao.YYYYMMDD(), d);
    };
    ShopLayer.prototype.onRenderPage1 = function (cell, index) {
        var status = cell.getChildByName("status");
        var icon_diamond = cell.getChildByName("icon_diamond");
        var diamond = cell.getChildByName("diamond");
        var colorItem = cell.getChildByName("colorItem");
        var video = cell.getChildByName("video");
        var data = cell.dataSource;
        colorItem.skin = "layers/shop/color" + (index + 1) + ".png";
        var backgroundDao = dao.find(BackgroundDao);
        var has = backgroundDao.hasColor(data.color);
        video.visible = false;
        if (has) {
            status.text = "";
            diamond.text = "";
            icon_diamond.visible = false;
        }
        else {
            if (index >= 6) {
                video.visible = true;
                status.text = "";
                diamond.text = "";
                icon_diamond.visible = false;
            }
            else {
                icon_diamond.visible = true;
                diamond.text = "80";
                status.text = "";
            }
        }
        if (backgroundDao.color === data.color) {
            status.text = "Used";
        }
        cell.on(Laya.Event.CLICK, this, this.onPage1ItemClick, [data]);
    };
    ShopLayer.prototype.onPage1ItemClick = function (data) {
        var backgroundDao = dao.find(BackgroundDao);
        var has = backgroundDao.hasColor(data.color);
        if (has) {
            if (data.color !== backgroundDao.color) {
                backgroundDao.color = data.color;
                this.page1.refresh();
                this.setBackgroudnColor(Laya.stage.bgColor);
            }
        }
        else {
            if (data.id === 117 || data.id === 118 || data.id === 119) {
                // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.onVideoDone, [data]));
                return;
            }
            var diamondDao = dao.find(DiamondDao);
            var diamond = diamondDao.diamonds;
            if (diamond >= 80) {
                diamondDao.addDiamonds(-80);
                var backgroundDao_1 = dao.find(BackgroundDao);
                backgroundDao_1.addColor(data.color);
                this.page1.refresh();
            }
            else {
                this.tab.selectedIndex = 0;
                new MessagePop("No More Diamonds!").popup();
            }
        }
    };
    ShopLayer.prototype.onVideoDone = function (data) {
        dao.find(BackgroundDao).addColor(data.color);
        this.page1.refresh();
    };
    ShopLayer.prototype.onHuafeiClick = function () {
        var s = dao.find(HuaFeiDao);
        var n = s.diamonds;
        if (n >= 30) {
            s.addDiamonds(-30);
        }
        else {
            new ui.Layers.Common.HuafeiNotEnoughLayerUI().popup();
        }
    };
    return ShopLayer;
}(ui.Layers.Home.ShopLayerUI));
