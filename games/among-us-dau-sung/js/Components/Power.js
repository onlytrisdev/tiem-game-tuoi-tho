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
 * 钻石管理器
 * @author XuJian
 */
var Power = /** @class */ (function (_super) {
    __extends(Power, _super);
    function Power() {
        var _this = _super.call(this) || this;
        var powerDao = dao.find(PowerDao);
        _this.amont.text = powerDao.power + "/20";
        console.log("powerDao.power =", powerDao.power);
        _this.recovery.text = "";
        Dispatcher.on(Events.POWER_CHANGE, _this, _this.onChanged);
        Dispatcher.on(Events.POWER_RECOVERY, _this, _this.onRecovery);
        _this.on(Laya.Event.ADDED, _this, _this.onAddedAction);
        return _this;
    }
    Power.prototype.onAddedAction = function () {
        if (this.parent) {
            this.parent.on(Laya.Event.REMOVED, this, this.onRemovedAction);
        }
        dao.find(PowerDao).start();
    };
    Power.prototype.onRemovedAction = function () {
        dao.find(PowerDao).stop();
    };
    Power.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        Dispatcher.off(Events.POWER_CHANGE, this, this.onChanged);
        Dispatcher.off(Events.POWER_RECOVERY, this, this.onRecovery);
    };
    Power.prototype.onRecovery = function (time) {
        this.recovery.text = time;
    };
    /**
     * 钻石发生改变
     */
    Power.prototype.onChanged = function (value) {
        this.amont.text = value + "/20";
    };
    return Power;
}(ui.Components.PowerUI));
