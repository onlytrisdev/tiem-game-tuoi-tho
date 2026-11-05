/**
 * dao
 * @author XuJian
 */
var dao = /** @class */ (function () {
    function dao() {
    }
    dao.find = function (db) {
        if (!this.__DAO__[db.className]) {
            this.__DAO__[db.className] = new db();
            this.__DAO__[db.className].setClassName(db.className);
            this.__DAO__[db.className].read();
        }
        return this.__DAO__[db.className];
    };
    /** 2019/9/23*/
    dao.YYYYMMDD = function () {
        var o = new Date();
        return o.toLocaleDateString();
    };
    dao.__DAO__ = [];
    return dao;
}());
/**
 * 12日
 *
 *
 *
 *
 * */
