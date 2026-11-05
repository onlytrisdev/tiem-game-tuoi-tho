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
 * 关卡管理器
 * @author XuJian
 */
var GunDao = /** @class */ (function (_super) {
    __extends(GunDao, _super);
    function GunDao() {
        var _this = _super.call(this) || this;
        /**
         * 最大关卡
         */
        _this.m_stage = 0;
        _this.m_gun_db = Laya.loader.getRes("db/gun_db.json").json;
        _this.m_gun_detail_db = Laya.loader.getRes("db/gun_detail_db.json").json;
        return _this;
    }
    GunDao.prototype.get_from_gun_detail_db = function (id, index) {
        var values = this.m_gun_detail_db.values;
        for (var i = 0; i < values.length; i++) {
            var s = values[i];
            var sid = Number(s[0]);
            var sindex = Number(s[1]);
            if (sid === id && sindex === index) {
                return {
                    id: sid,
                    index: sindex,
                    powerValue: Number(s[2]),
                    powerCost: Number(s[3]),
                    shootValue: Number(s[4]),
                    shootCost: Number(s[5]),
                    bulletValue: Number(s[6]),
                    bulletCost: Number(s[7]),
                };
            }
        }
        return null;
    };
    GunDao.prototype.getDamage = function (id, index) {
        var values = this.m_gun_detail_db.values;
        for (var i = 0; i < values.length; i++) {
            var s = values[i];
            var sid = Number(s[0]);
            var sindex = Number(s[1]);
            if (sid === id && sindex === index) {
                return Number(s[2]);
            }
        }
        return 0;
    };
    GunDao.prototype.getShootSpeed = function (id, index) {
        var values = this.m_gun_detail_db.values;
        for (var i = 0; i < values.length; i++) {
            var s = values[i];
            var sid = Number(s[0]);
            var sindex = Number(s[1]);
            if (sid === id && sindex === index) {
                return Number(s[4]);
            }
        }
        return 0;
    };
    GunDao.prototype.getBulletCount = function (id, index) {
        var values = this.m_gun_detail_db.values;
        for (var i = 0; i < values.length; i++) {
            var s = values[i];
            var sid = Number(s[0]);
            var sindex = Number(s[1]);
            if (sid === id && sindex === index) {
                return Number(s[6]);
            }
        }
        return 0;
    };
    /**
    * 获取用户的枪
    */
    GunDao.prototype.getRoleUsedGun = function () {
        var owner_used_gun = platform.getInstance().getStorageSync("owner_used_gun");
        var guns = this.getRoleGuns();
        for (var i = 0; i < guns.length; i++) {
            var gun = guns[i];
            if (owner_used_gun && gun.id === owner_used_gun.id) {
                return gun;
            }
        }
        return owner_used_gun;
    };
    /**
     * 获取用户的枪
     */
    GunDao.prototype.setRoleUsedGun = function (gun) {
        platform.getInstance().setStorageSync("owner_used_gun", gun);
        return gun;
    };
    /**
     * 获取用户的枪
     */
    GunDao.prototype.getRoleGuns = function () {
        var owner_guns = platform.getInstance().getStorageSync("owner_guns");
        if (owner_guns === undefined || owner_guns === null) {
            owner_guns = [];
            owner_guns.push({
                id: 11,
                powerLevel: 0,
                shootLevel: 0,
                bulletLevel: 0
            });
            platform.getInstance().setStorageSync("owner_guns", owner_guns);
        }
        return owner_guns;
    };
    GunDao.prototype.hasWeaponById = function (id) {
        var owner_guns = platform.getInstance().getStorageSync("owner_guns") || [];
        for (var i = 0; i < owner_guns.length; i++) {
            var element = owner_guns[i];
            if (element.id === id) {
                return true;
            }
        }
        return false;
    };
    /**
     * 获取用户的枪
     */
    GunDao.prototype.addRoleGuns = function (gun) {
        var owner_guns = this.getRoleGuns();
        owner_guns.push(gun);
        platform.getInstance().setStorageSync("owner_guns", owner_guns);
        return owner_guns;
    };
    /**
     * 获取用户的枪
     */
    GunDao.prototype.changeGuns = function (gun) {
        var owner_guns = this.getRoleGuns();
        for (var i = 0; i < owner_guns.length; i++) {
            var item = owner_guns[i];
            if (gun.id == item.id) {
                owner_guns[i] = gun;
                break;
            }
        }
        platform.getInstance().setStorageSync("owner_guns", owner_guns);
        return owner_guns;
    };
    /**
     * 获取用户的枪
     */
    GunDao.prototype.getRoleGunById = function (id) {
        var owner_guns = this.getRoleGuns();
        for (var i = 0; i < owner_guns.length; i++) {
            var gun = owner_guns[i];
            if (id == gun.id) {
                return gun;
            }
        }
        return null;
    };
    GunDao.prototype.getGunById = function (gunid) {
        var values = this.m_gun_db.values;
        for (var i = 0; i < values.length; i++) {
            var s = values[i];
            var sid = Number(s[0]);
            var powerValues = s[12] === "" && [];
            var shootValues = s[13] === "" && [];
            var bulletValues = s[14] === "" && [];
            if (sid === gunid) {
                return {
                    id: sid,
                    name: s[1],
                    icon: s[2],
                    unlockAid: Number(s[3]),
                    unlockStr: s[4],
                    cost: s[5],
                    offset: s[6],
                    bulletType: s[7],
                    bulletSpeed: s[8],
                    bulletIconHero: s[9],
                    bulletIconEnemy: s[10],
                    gunVoice: s[11],
                    powerValues: powerValues,
                    shootValues: shootValues,
                    bulletValues: bulletValues,
                    powerCosts: s[15],
                    bulletCosts: s[16],
                };
            }
        }
        return null;
    };
    GunDao.className = "GunDao";
    GunDao.skins = {
        11: "weapons/UMP9.png",
        12: "weapons/M16A4.png",
        13: "weapons/S686.png",
        14: "weapons/AKM.png",
        15: "weapons/M416.png",
        16: "weapons/Kar98K.png",
        17: "weapons/M249.png",
        18: "weapons/AWM.png",
    };
    return GunDao;
}(BaseDao));
