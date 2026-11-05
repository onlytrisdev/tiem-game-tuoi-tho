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
var AirYTDropLayer = /** @class */ (function (_super) {
    __extends(AirYTDropLayer, _super);
    function AirYTDropLayer() {
        var _this = _super.call(this) || this;
        _this.group = "AirDropLayer";
        _this.btn.on(Laya.Event.CLICK, _this, _this.onAirDropClick);
        Dispatcher.event(Events.AIRDROP_SHOW);
        return _this;
    }
    AirYTDropLayer.prototype.onAirDropClick = function () {
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.onVideoDone));
    };
    AirYTDropLayer.prototype.onVideoDone = function () {
        this.close("yt_success");
    };
    AirYTDropLayer.prototype.close = function (type) {
        _super.prototype.close.call(this, type);
        Dispatcher.event(Events.AIRDROP_HIDE, type);
    };
    return AirYTDropLayer;
}(ui.Layers.Game.AirYTDropLayerUI));
