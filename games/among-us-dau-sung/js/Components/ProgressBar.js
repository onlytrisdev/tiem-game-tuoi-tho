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
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ProgressBar.prototype, "skin", {
        set: function (value) {
            if (this._skin != value) {
                this._skin = value;
                this._bg.skin = this._skin;
                this._bar.skin = this._skin.replace(".png", "_bar.png");
                this.callLater(this.changeValue);
            }
        },
        enumerable: false,
        configurable: true
    });
    return ProgressBar;
}(Laya.ProgressBar));
