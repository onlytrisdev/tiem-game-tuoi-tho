/**
 * EnemyProperties
 * @author XuJian
 */
var EnemyDB = /** @class */ (function () {
    function EnemyDB(config) {
        this.id = Number(config[0]);
        this.view = config[1],
            this.skin = config[2],
            this.behaviors = JSON.parse(config[3]);
        this.baseBlood = Number(config[4]);
        this.helmetId = Number(config[5]);
        this.clothId = Number(config[6]);
        this.gunId = Number(config[7]);
        this.gunLevel = [];
        if (this.gunId > 0) {
            this.gunLevel = JSON.parse(config[8]);
        }
    }
    return EnemyDB;
}());
