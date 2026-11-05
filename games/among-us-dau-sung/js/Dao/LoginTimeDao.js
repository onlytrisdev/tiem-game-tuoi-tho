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
 * 用户登录时间管理器
 * @author XuJian
 */
var LoginTimeDao = /** @class */ (function (_super) {
    __extends(LoginTimeDao, _super);
    function LoginTimeDao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
        * 用户登录时间
        */
        _this.loginTime = 0;
        /**
         * 最后登录时间
         */
        _this.lastLoginTime = 0;
        return _this;
    }
    /**
      * 刷新登录时间
      */
    LoginTimeDao.prototype.refresh = function () {
        this.lastLoginTime = this.loginTime;
        this.loginTime = new Date().getTime();
        if (this.lastLoginTime === 0) {
            this.lastLoginTime = this.loginTime;
        }
        this.save();
    };
    LoginTimeDao.prototype.timeDifference = function () {
        var time = this.loginTime / 1e3;
        var last = this.lastLoginTime / 1e3;
        return Math.ceil(time - last);
    };
    LoginTimeDao.className = "LoginTimeDao";
    return LoginTimeDao;
}(BaseDao));
