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
 * 新手引导管理器
 * @author XuJian
 */
var GuideDao = /** @class */ (function (_super) {
    __extends(GuideDao, _super);
    function GuideDao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 当前引导
         */
        _this.index = 0;
        return _this;
    }
    GuideDao.className = "GuideDao";
    return GuideDao;
}(BaseDao));
