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
var EnemyBullet = /** @class */ (function (_super) {
    __extends(EnemyBullet, _super);
    function EnemyBullet() {
        var _this = _super.call(this) || this;
        _this.anchorY = 0.5;
        return _this;
    }
    EnemyBullet.prototype.initWithData = function (data) {
        this.m_data = data;
        this.rotation = this.m_data.rotation;
        this.x = this.m_data.startPos.x;
        this.y = this.m_data.startPos.y;
        var gunDao = dao.find(GunDao);
        var gun = gunDao.getGunById(this.m_data.gunId);
        this.m_speed = gun.bulletSpeed * 0.0166;
        var ower = this.m_data.owner;
        var properties = ower.properties;
        if (properties.view === "vGameBoss") {
            this.skin = "bullets/bNormal4.png";
        }
        else {
            this.skin = "bullets/bNormal5.png";
        }
    };
    Object.defineProperty(EnemyBullet.prototype, "power", {
        get: function () {
            return this.m_data.power;
        },
        enumerable: false,
        configurable: true
    });
    EnemyBullet.prototype.updateBullet = function () {
        this.x -= this.m_data.dir.x * this.m_speed;
        this.y -= this.m_data.dir.y * this.m_speed;
    };
    return EnemyBullet;
}(Laya.Image));
