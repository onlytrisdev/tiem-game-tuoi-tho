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
var MessageLayer = /** @class */ (function (_super) {
    __extends(MessageLayer, _super);
    function MessageLayer(weaponId) {
        var _this = _super.call(this) || this;
        var weapon = WeaponConfig.getWeaponById(weaponId);
        if (weapon) {
            _this.wIcon.skin = weapon.skin;
            _this.wName.text = weapon.name;
        }
        _this.btn.on(Laya.Event.CLICK, _this, _this.onClick);
        return _this;
    }
    MessageLayer.prototype.onClick = function () {
        new WeaponLayer().popup();
        this.close();
    };
    return MessageLayer;
}(ui.Components.MessageUI));
