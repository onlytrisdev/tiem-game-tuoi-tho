/**
 * BattleRole
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
var RoleBullet = /** @class */ (function (_super) {
    __extends(RoleBullet, _super);
    function RoleBullet(data) {
        var _this = _super.call(this) || this;
        _this.m_speed = 1;
        _this.anchorX = 1;
        _this.anchorY = 0.5;
        _this.m_data = data;
        _this.x = _this.m_data.startPos.x;
        _this.y = _this.m_data.startPos.y;
        _this.rotation = _this.m_data.rotation;
        var weapon = WeaponConfig.getWeaponById(_this.m_data.gunId);
        _this.m_speed = weapon.bulletSpeed * 0.0166;
        var gunId = _this.m_data.gunId;
        _this.skin = "bullets/bNormal.png";
        if (gunId === 13) {
            _this.skin = "bullets/bS686.png";
        }
        else if (gunId === 14) {
            _this.skin = "bullets/bAKM.png";
        }
        else if (gunId === 15) {
            _this.skin = "bullets/bM416.png";
        }
        else if (gunId === 16) {
            _this.skin = "bullets/bKar98K.png";
        }
        else if (gunId === 17) {
            _this.skin = "bullets/bM249.png";
        }
        else if (gunId === 18 || gunId === 21) {
            _this.skin = "bullets/bAWM.png";
        }
        else if (gunId === 19) {
            _this.skin = "bullets/bAKM.png";
        }
        else if (gunId === 20) //玉兔
         {
            _this.skin = "bullets/bYT.png";
        }
        else {
            _this.skin = "bullets/bNormal.png";
        }
        return _this;
    }
    Object.defineProperty(RoleBullet.prototype, "power", {
        get: function () {
            return this.m_data.power;
        },
        enumerable: false,
        configurable: true
    });
    RoleBullet.prototype.updateBullet = function () {
        this.x += this.m_data.dir.x * this.m_speed;
        this.y += this.m_data.dir.y * this.m_speed;
    };
    return RoleBullet;
}(Laya.Image));
