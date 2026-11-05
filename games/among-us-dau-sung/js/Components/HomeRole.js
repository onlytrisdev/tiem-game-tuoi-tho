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
var HomeRole = /** @class */ (function (_super) {
    __extends(HomeRole, _super);
    function HomeRole() {
        var _this = _super.call(this) || this;
        _this.idle.play(0, true);
        return _this;
    }
    HomeRole.prototype.setProperties = function (properties) {
        // let properties= new RoleProperties()
        this.properties = properties;
        if (properties.helmetId) {
            this.helmet.skin = properties.helmeSkin;
            if (properties.helmetId === 35) //玉兔
             {
                this.helmet.pos(51, 12);
            }
            else {
                this.helmet.pos(56, 27);
            }
        }
        if (properties.clothId) {
            this.cloth.skin = properties.clothSkin;
        }
    };
    HomeRole.prototype.setWeapon = function (skin) {
        this.weapon.skin = skin;
    };
    return HomeRole;
}(ui.Components.HomeRoleUI));
