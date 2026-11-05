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
var SignDao = /** @class */ (function (_super) {
    __extends(SignDao, _super);
    function SignDao() {
        var _this = _super.call(this) || this;
        _this.m_sign = 1;
        _this.signTime = 0;
        _this.m_sign_db = Laya.loader.getRes("db/sign.json").json;
        _this.values = _this.m_sign_db.values;
        return _this;
    }
    Object.defineProperty(SignDao.prototype, "sign", {
        get: function () {
            if (this.m_sign > 7) {
                this.m_sign = 1;
                this.save();
            }
            return this.m_sign;
        },
        set: function (value) {
            this.m_sign = value;
            this.signTime = new Date().getTime();
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    SignDao.prototype.canSign = function () {
        return !(this.onTheSameDay(this.signTime, new Date().getTime()));
    };
    SignDao.prototype.onTheSameDay = function (e, t) {
        var o = new Date(e), n = new Date(t);
        return o.getFullYear() == n.getFullYear() && o.getMonth() == n.getMonth() && o.getDate() == n.getDate();
    };
    SignDao.className = "SignDao";
    return SignDao;
}(BaseDao));
