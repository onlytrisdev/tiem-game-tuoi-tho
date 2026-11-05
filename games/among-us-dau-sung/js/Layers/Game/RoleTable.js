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
 * LobbyView
 * @author XuJian
 */
var RoleTable = /** @class */ (function (_super) {
    __extends(RoleTable, _super);
    function RoleTable() {
        var _this = _super.call(this) || this;
        _this.m_isOpened = false;
        _this.on(Laya.Event.CLICK, _this, _this.onClicked);
        Dispatcher.on(Events.ROLETABLE_OPENING, _this, _this.onDeskChange);
        return _this;
    }
    RoleTable.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        Dispatcher.off(Events.ROLETABLE_OPENING, this, this.onDeskChange);
    };
    RoleTable.prototype.onClicked = function () {
        Audios.CLICK();
        if (this.m_isOpened)
            return;
        this.action_open.play(0, false);
        this.m_isOpened = true;
        Dispatcher.event(Events.ROLETABLE_OPENING, [this]);
    };
    RoleTable.prototype.onDeskChange = function (target) {
        if (target.name === this.name)
            return;
        if (this.m_isOpened === false)
            return;
        this.m_isOpened = false;
        this.aciton_close.play(0, false);
    };
    return RoleTable;
}(ui.Components.RoleTableUI));
