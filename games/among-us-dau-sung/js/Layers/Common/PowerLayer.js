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
var PowerNotEnoughLayer = /** @class */ (function (_super) {
    __extends(PowerNotEnoughLayer, _super);
    function PowerNotEnoughLayer() {
        var _this = _super.call(this) || this;
        _this.closeOnSide = false;
        _this.btn.on(Laya.Event.CLICK, _this, _this.onBtnClick);
        return _this;
    }
    PowerNotEnoughLayer.prototype.onBtnClick = function () {
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, function () {
            var d = dao.find(PowerDao);
            d.power += 3;
            new ItemPop("Icons/icon_power.png", "Sức mạnh x 3").popup();
            this.close();
        // }));
    };
    return PowerNotEnoughLayer;
}(ui.Layers.Common.PowerNotEnoughLayerUI));
