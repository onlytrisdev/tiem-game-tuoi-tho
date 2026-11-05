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
 * EnemyTable
 * @author XuJian
 */
var EnemyTable = /** @class */ (function (_super) {
    __extends(EnemyTable, _super);
    function EnemyTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //** 是否有敌人 */
        _this.hasEnemy = false;
        _this.m_isOpened = false;
        return _this;
    }
    EnemyTable.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    EnemyTable.prototype.onClicked = function () {
        Audios.CLICK();
        if (this.m_isOpened)
            return;
        this.action_open.play(0, false);
        this.m_isOpened = true;
    };
    EnemyTable.prototype.closeDoor = function () {
        if (this.m_isOpened === false)
            return;
        this.m_isOpened = false;
        this.aciton_close.play(0, false);
    };
    return EnemyTable;
}(ui.Components.EnemyTableUI));
