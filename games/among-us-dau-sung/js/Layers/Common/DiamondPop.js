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
 * 获得钻石 弹出
 * @author XuJian
 */
var DiamondPop = /** @class */ (function (_super) {
    __extends(DiamondPop, _super);
    function DiamondPop(n) {
        var _this = _super.call(this) || this;
        _this.count.text = "Kim cương x" + n;
        Audios.DIAMOND();
        return _this;
    }
    DiamondPop.prototype.onClosed = function () {
        this.closeByGroup("CLOSE_WITH_DIAMOND_POP");
    };
    return DiamondPop;
}(ui.Components.DiamondPopLayerUI));
