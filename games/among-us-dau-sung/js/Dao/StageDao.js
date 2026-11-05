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
var StageDao = /** @class */ (function (_super) {
    __extends(StageDao, _super);
    function StageDao() {
        var _this = _super.call(this) || this;
        /**
         * 最大关卡
         */
        _this.m_stage = 0;
        var owner_stage = platform.getInstance().getStorageSync("owner_stage");
        _this.m_stage_db = Laya.loader.getRes("db/stages.json").json;
        if (!owner_stage) {
            owner_stage = 1;
        }
        _this.m_stage = owner_stage;
        return _this;
    }
    Object.defineProperty(StageDao.prototype, "stage", {
        /**
         * 已经通过的关卡
         */
        get: function () {
            return this.m_stage;
        },
        enumerable: false,
        configurable: true
    });
    StageDao.prototype.testPass = function (v) {
        this.m_stage = v;
        this.pass();
    };
    StageDao.prototype.pass = function () {
        this.m_stage++;
        platform.getInstance().setStorageSync("owner_stage", this.m_stage);
        return this.m_stage;
    };
    StageDao.prototype.get_from_stage_db = function (id) {
        var values = this.m_stage_db.values;
        for (var i = 0; i < values.length; i++) {
            var s = values[i];
            var sid = Number(s[0]);
            if (sid === id) {
                return {
                    id: sid,
                    name: s[1],
                    firstReward: s[2],
                    passReward: s[3],
                    unlockAids: s[4],
                    costs: s[5],
                    stageProgress: s[6],
                    maxEnemyCount: Number(s[7]),
                    generateSpaces: JSON.parse(s[8]),
                    enmeyDatas: JSON.parse(s[9]),
                    time: s[10],
                };
            }
        }
        return null;
    };
    StageDao.className = "StageDao";
    return StageDao;
}(BaseDao));
