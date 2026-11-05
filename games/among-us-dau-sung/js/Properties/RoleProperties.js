/**
 * EnemyProperties
 * @author XuJian
 */
var RoleProperties = /** @class */ (function () {
    function RoleProperties() {
        this.baseHP = 0;
        this.maxHelmetHP = 0;
        this.maxClothHP = 0;
        this.maxHP = 0;
        this.currentHelmetHP = 0;
        this.currentClothHP = 0;
        this.currentHP = 0;
        /**伤害*/
        this.damage = 0;
        /**攻击速度*/
        this.shootSpeed = 0;
        this.bulletMaxCount = -1;
        this.bulletCurCount = -1;
        this.helmeSkin = "";
        this.clothSkin = "";
        var armorDao = dao.find(ArmorDao);
        // this.gunId     = db.gunId;
        this.helmetId = armorDao.helmetID;
        this.clothId = armorDao.clothID;
        this.baseHP = 100;
        var helmet = HelmetConfig.getCongigById(this.helmetId);
        if (helmet) {
            this.helmeSkin = helmet.skinRes;
            this.currentHelmetHP = this.maxHelmetHP = helmet.energy;
        }
        var cloth = ClothConfig.getCongigById(this.clothId);
        if (cloth) {
            this.currentClothHP = this.maxClothHP = cloth.energy;
            this.clothSkin = cloth.skin;
        }
        this.maxHP = this.currentHP = (this.baseHP + this.currentHelmetHP + this.currentClothHP);
        var gunDao = dao.find(GunDao);
        var gunProperties = gunDao.getRoleUsedGun();
        this.gunId = gunProperties && gunProperties.id;
        var weapon = WeaponConfig.getWeaponById(this.gunId);
        if (this.gunId) {
            this.weaponSkin = weapon.skin;
            this.damage = weapon.powers[gunProperties.powerLevel][0];
            this.shootSpeed = weapon.shoots[gunProperties.shootLevel][0];
            console.log("this.shootSpeed ==", this.shootSpeed);
            this.bulletMaxCount = this.bulletCurCount = weapon.bullets[gunProperties.bulletLevel][0];
        }
    }
    RoleProperties.prototype.changeWeapon = function (weaponId) {
        var weapon = WeaponConfig.getWeaponById(weaponId);
        if (weapon) {
            this.gunId = weaponId;
            this.weaponSkin = weapon.skin;
            this.weaponName = weapon.name;
            this.damage = weapon.powers[weapon.powers.length - 1][0];
            this.shootSpeed = weapon.shoots[weapon.shoots.length - 1][0];
            this.bulletMaxCount = this.bulletCurCount = weapon.bullets[weapon.bullets.length - 1][0];
        }
    };
    RoleProperties.prototype.changeHelmet = function (helmetId) {
        this.helmetId = helmetId;
        var helmet = HelmetConfig.getCongigById(this.helmetId);
        if (helmet) {
            this.helmeSkin = helmet.skinRes;
            this.currentHelmetHP = this.maxHelmetHP = helmet.energy;
        }
    };
    RoleProperties.prototype.changeCloth = function (clothId) {
        this.clothId = clothId;
        var cloth = ClothConfig.getCongigById(this.clothId);
        if (cloth) {
            this.currentClothHP = this.maxClothHP = cloth.energy;
            this.clothSkin = cloth.skin;
        }
    };
    RoleProperties.prototype.calcDamage = function (damage) {
        var headHit = 0;
        var hit = Math.ceil(damage * utils.random(40, 60) / 100);
        if (this.currentHelmetHP > 0) {
            if (hit > this.currentHelmetHP) {
                headHit = this.currentHelmetHP;
                this.currentHelmetHP = 0;
            }
            else {
                headHit = hit;
                this.currentHelmetHP -= hit;
            }
        }
        hit = damage - headHit;
        var clothHit = 0;
        if (this.currentClothHP > 0) {
            if (hit > this.currentClothHP) {
                clothHit = this.currentClothHP;
                this.currentClothHP = 0;
            }
            else {
                clothHit = hit;
                this.currentClothHP -= hit;
            }
        }
        hit = hit - clothHit;
        if (this.baseHP > 0) {
            if (hit > this.baseHP) {
                this.baseHP = 0;
            }
            else {
                this.baseHP -= hit;
            }
        }
        this.currentHP = this.currentHelmetHP + this.currentClothHP + this.baseHP;
        return { headHit: headHit, clothHit: clothHit, bodyHit: hit };
    };
    RoleProperties.prototype.hpPercentage = function () {
        return this.currentHP / this.maxHP;
    };
    RoleProperties.prototype.bulletPercentage = function () {
        return this.bulletCurCount / this.bulletMaxCount;
    };
    RoleProperties.prototype.helmetPercentage = function () {
        return this.currentHelmetHP / this.maxHelmetHP;
    };
    RoleProperties.prototype.clothPercentage = function () { return this.currentClothHP / this.maxClothHP; };
    RoleProperties.hasTestWeapon = false;
    RoleProperties.testWeaponId = 0;
    return RoleProperties;
}());
