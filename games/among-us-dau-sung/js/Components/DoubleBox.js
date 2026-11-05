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
var DoubleBox = /** @class */ (function (_super) {
    __extends(DoubleBox, _super);
    function DoubleBox() {
        var _this = _super.call(this) || this;
        _this.selected = false;
        _this.btn.on(Laya.Event.CLICK, _this, _this.onClicked);
        _this.selected = _this.selecedImage.visible;
        return _this;
    }
    // destroy(){
    //     super.destroy();
    //     Dispatcher.off(Events.DIAMOND_CHANGE,this,this.onDiamondChanged);
    // }
    DoubleBox.prototype.onClicked = function () {
        this.selected = this.selecedImage.visible = !this.selecedImage.visible;
        this.changeHandler && this.changeHandler.runWith([this.selecedImage.visible]);
    };
    return DoubleBox;
}(ui.Components.DoubleBoxUI));
