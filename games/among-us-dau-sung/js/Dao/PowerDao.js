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
 * 体力管理器
 * @author XuJian
 */
var PowerDao = /** @class */ (function (_super) {
    __extends(PowerDao, _super);
    function PowerDao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 体力数量
         */
        _this.m_power = 20;
        _this.power_timer = 0;
        _this.m_power_data = 0;
        return _this;
    }
    PowerDao.prototype.start = function () {
        this.stop();
        Laya.timer.loop(1, this, this.recovery);
    };
    PowerDao.prototype.stop = function () {
        Laya.timer.clear(this, this.recovery);
    };
    Object.defineProperty(PowerDao.prototype, "power", {
        /**
         * 用户金币
         */
        get: function () {
            if (this.m_power_data === 0) {
                this.m_power_data = new Date().getTime();
                this.save();
            }
            else {
                if (this.canSign()) {
                    this.m_power = 20;
                    this.m_power_data = new Date().getTime();
                    this.save();
                }
            }
            return this.m_power;
        },
        set: function (value) {
            this.m_power = value;
            if (this.m_power > 20) {
                this.m_power = 20;
            }
            if (this.m_power == 20 && value < 0) {
                this.power_timer = utils.time() / 1e3;
            }
            Dispatcher.event(Events.POWER_CHANGE, [this.m_power]);
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    PowerDao.prototype.canSign = function () {
        return !(this.onTheSameDay(this.m_power_data, new Date().getTime()));
    };
    PowerDao.prototype.onTheSameDay = function (e, t) {
        var o = new Date(e), n = new Date(t);
        return o.getFullYear() == n.getFullYear() && o.getMonth() == n.getMonth() && o.getDate() == n.getDate();
    };
    PowerDao.prototype.recovery = function () {
        if (this.power === 20)
            return;
        var now_timer = utils.time() / 1e3;
        var seconds = now_timer - this.power_timer;
        var recoveryPower = Math.floor(seconds / PowerDao.RECOVERY_TIME);
        if (recoveryPower > 0) {
            this.power += recoveryPower;
            this.power_timer += PowerDao.RECOVERY_TIME * recoveryPower;
            return;
        }
        seconds = 300 - seconds % 300;
        var minute = Math.floor(seconds / 60);
        var s = Math.floor(seconds % 60).toString();
        if (s.length < 2) {
            s = "0" + s;
        }
        Dispatcher.event(Events.POWER_RECOVERY, ["0" + minute + ":" + s]);
        return "0" + minute + ":" + s;
    };
    /**体力恢复时间 */
    PowerDao.RECOVERY_TIME = 300;
    PowerDao.className = "PowerDao";
    return PowerDao;
}(BaseDao));
