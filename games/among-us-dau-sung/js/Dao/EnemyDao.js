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
var EnemyDao = /** @class */ (function (_super) {
    __extends(EnemyDao, _super);
    function EnemyDao() {
        var _this = _super.call(this) || this;
        /**
         * 最大关卡
         */
        _this.m_stage = 0;
        _this.enemy_db = Laya.loader.getRes("db/enemys.json").json;
        return _this;
    }
    EnemyDao.prototype.findEnemyById = function (enemyid) {
        var values = this.enemy_db.values;
        for (var i = 0; i < values.length; i++) {
            var s = values[i];
            var sid = Number(s[0]);
            if (sid === enemyid) {
                return new EnemyDB(s);
            }
        }
        return null;
    };
    EnemyDao.className = "EnemyDao";
    return EnemyDao;
}(BaseDao));
