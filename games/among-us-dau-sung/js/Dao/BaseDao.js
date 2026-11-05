/**
 * BaseDao
 * @author XuJian
 */
var BaseDao = /** @class */ (function () {
    function BaseDao() {
        this.__className = "BaseDao";
    }
    BaseDao.prototype.setClassName = function (value) {
        this.__className = value;
    };
    BaseDao.prototype.getClassName = function () { return this.__className; };
    BaseDao.prototype.read = function () {
        var cls = platform.getInstance().getStorageSync("DAO_" + this.getClassName()) || {};
        for (var key in cls) {
            if (this.hasOwnProperty(key)) {
                this[key] = cls[key];
            }
        }
        return this;
    };
    BaseDao.prototype.save = function () {
        var cls = {};
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                cls[key] = this[key];
            }
        }
        platform.getInstance().setStorageSync("DAO_" + this.getClassName(), cls);
    };
    BaseDao.className = "BaseDao";
    return BaseDao;
}());
