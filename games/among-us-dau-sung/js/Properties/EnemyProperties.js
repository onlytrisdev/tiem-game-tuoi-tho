/**
 * EnemyProperties
 * @author XuJian
 */
var EnemyProperties = /** @class */ (function () {
    function EnemyProperties(db) {
        /**伤害*/
        this.damage = 0;
        /**攻击速度*/
        this.shootSpeed = 0;
        this.bulletMaxCount = -1;
        this.bulletCurCount = -1;
        this.gunId = db.gunId;
        this.helmetId = db.helmetId;
        this.clothId = db.clothId;
        this.skin = db.skin;
        this.view = db.view;
        this.behaviors = db.behaviors;
        this.status = EnemyPropertiesStatus.None;
        this.isAlive = true;
        //血量计算
        this.baseHP = db.baseBlood;
        var armorDao = dao.find(ArmorDao);
        this.currentHelmetHP = this.maxHelmetHP = armorDao.getEnergy(db.helmetId);
        this.currentClothHP = this.maxClothHP = armorDao.getEnergy(db.clothId);
        this.maxHP = this.currentHP = (this.baseHP + this.currentHelmetHP + this.currentClothHP);
        var gunDao = dao.find(GunDao);
        if (this.gunId && db.gunLevel.length) {
            this.weaponSkin = GunDao.skins[this.gunId];
            this.damage = gunDao.getDamage(db.gunId, db.gunLevel[0]);
            this.shootSpeed = gunDao.getShootSpeed(db.gunId, db.gunLevel[1]);
        }
    }
    EnemyProperties.prototype.calcDamage = function (damage) {
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
    return EnemyProperties;
}());
