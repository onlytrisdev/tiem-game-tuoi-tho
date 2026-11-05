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
var FailLayer = /** @class */ (function (_super) {
    __extends(FailLayer, _super);
    function FailLayer(n) {
        var _this = _super.call(this) || this;
        _this.group = "CLOSE_WITH_DIAMOND_POP";
        _this.closeOnSide = false;
        if (n) {
            _this.btnContinue.visible = false;
        }
        else {
            _this.btnContinue.on(Laya.Event.CLICK, _this, _this.onContinueClick);
        }
        _this.buttonWeapon.on(Laya.Event.CLICK, _this, _this.onWeaponClick);
        _this.buttonArmor.on(Laya.Event.CLICK, _this, _this.onArmorClick);
        _this.list.renderHandler = new Laya.Handler(_this, _this.onRender);
        // var forgames = YYGSDK.forgames;
        // forgames.sort(function (a, b) {
        //     return Math.random() - 0.5;
        // });
        // _this.list.array = forgames;
        return _this;
    }
    FailLayer.prototype.onRender = function (cell) {
        var data = cell.dataSource;
        var image = cell.getChildByName("image");
        image.skin = data.thumb;
        image.on(Laya.Event.MOUSE_DOWN, this, this.onNavigate, [data]);
    };
    FailLayer.prototype.onNavigate = function (data) {
        // platform.getInstance().navigate("FailLayer", "more", data.id);
    };
    FailLayer.prototype.onWeaponClick = function () {
        new WeaponLayer().popup();
    };
    FailLayer.prototype.onArmorClick = function () {
        new DefineLayer().popup();
    };
    FailLayer.prototype.onContinueClick = function () {
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.onVideoContinue));
    };
    FailLayer.prototype.onVideoContinue = function () {
        var heroDao = dao.find(HeroDao);
        heroDao.protective = true;
        Dispatcher.event(Events.FAILE_VIDEO);
        this.close("video");
    };
    FailLayer.prototype.onClosed = function (type) {
        if (type == "close") {
            new HomeScene().show();
            new SelectedLayer().popup();
            Scene.manager.closeByName("GameScene");
        }
    };
    return FailLayer;
}(ui.Layers.Game.FailLayerUI));
