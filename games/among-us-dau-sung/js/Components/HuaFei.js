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
 * 钻石管理器
 * @author XuJian
 */
var HuaFei = /** @class */ (function (_super) {
    __extends(HuaFei, _super);
    function HuaFei() {
        var _this = _super.call(this) || this;
        var huaFeiDao = dao.find(HuaFeiDao);
        _this.diamond.text = huaFeiDao.diamonds + "元";
        return _this;
        // Dispatcher.on(Events.DIAMOND_CHANGE,this,this.onDiamondChanged);
    }
    HuaFei.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        // Dispatcher.off(Events.DIAMOND_CHANGE,this,this.onDiamondChanged);
    };
    /**
     * 钻石发生改变
     */
    HuaFei.prototype.onDiamondChanged = function (diamond) {
        this.diamond.text = diamond + "元";
    };
    return HuaFei;
}(ui.Components.HuaFeiUI));
