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
var MessagePop = /** @class */ (function (_super) {
    __extends(MessagePop, _super);
    function MessagePop(message) {
        var _this = _super.call(this) || this;
        _this.btn.on(Laya.Event.CLICK, _this, _this.close);
        _this.message.text = message;
        return _this;
    }
    return MessagePop;
}(ui.Components.MessagePopUI));
