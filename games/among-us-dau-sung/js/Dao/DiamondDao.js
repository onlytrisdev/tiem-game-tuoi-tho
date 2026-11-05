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
 * 金币管理器
 * @author XuJian
 */
var DiamondDao = /** @class */ (function (_super) {
    __extends(DiamondDao, _super);
    function DiamondDao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 用户钻石数
         */
        _this.m_diamonds = 0;
        return _this;
    }
    Object.defineProperty(DiamondDao.prototype, "diamonds", {
        /**
         * 用户金币
         */
        get: function () {
            return this.m_diamonds;
        },
        enumerable: false,
        configurable: true
    });
    DiamondDao.prototype.addDiamonds = function (value) {
        this.m_diamonds += Number(value);
        if (value > 0) {
            new DiamondPop(value).popup();
        }
        this.save();
        Dispatcher.event(Events.DIAMOND_CHANGE, [this.m_diamonds]);
    };
    DiamondDao.className = "DiamondDao";
    return DiamondDao;
}(BaseDao));
