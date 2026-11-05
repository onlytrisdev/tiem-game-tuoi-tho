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
 * 签到管理器
 * @author XuJian
 */
var ShareDao = /** @class */ (function (_super) {
    __extends(ShareDao, _super);
    function ShareDao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFirstShare = true;
        _this.shareTime = 0;
        return _this;
    }
    ShareDao.className = "ShareDao";
    return ShareDao;
}(BaseDao));
