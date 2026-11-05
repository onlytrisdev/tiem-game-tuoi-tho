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
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        /**
         * Layer
         * @author XuJian
         */
        var Button = /** @class */ (function (_super) {
            __extends(Button, _super);
            function Button() {
                var _this = _super.call(this) || this;
                var effect = new ui.Effects.MouseDownUI();
                effect.playEvent = Laya.Event.MOUSE_DOWN;
                effect.target = _this;
                _this.addChild(effect);
                effect = new ui.Effects.MoseUpUI();
                effect.playEvent = Laya.Event.MOUSE_OUT;
                effect.target = _this;
                _this.addChild(effect);
                _this.on(Laya.Event.CLICK, _this, _this.playSound);
                return _this;
            }
            Button.prototype.playSound = function () {
                Audios.CLICK();
                if (this.disabled == false) {
                    this.disabled = true;
                    this.timerOnce(0.5e3, this, this.onceDisabled);
                }
            };
            Button.prototype.onceDisabled = function () {
                this.disabled = false;
            };
            return Button;
        }(Laya.Button));
        UI.Button = Button;
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
