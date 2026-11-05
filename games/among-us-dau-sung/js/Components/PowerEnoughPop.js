/**
 * HomeRole
 * @author XuJian
 */
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
var PowerEnoughPop = /** @class */ (function (_super) {
    __extends(PowerEnoughPop, _super);
    function PowerEnoughPop() {
        var _this = _super.call(this) || this;
        _this.btn.on(Laya.Event.CLICK, _this, _this.onClicked);
        return _this;
    }
    PowerEnoughPop.prototype.onClicked = function () {
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.onVedioPowerDone));
    };
    PowerEnoughPop.prototype.onVedioPowerDone = function () {
    };
    return PowerEnoughPop;
}(ui.Components.PowerEnoughPopUI));
