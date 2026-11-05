/**
 * IPatform
 * @author XuJian
 */
var ADTYPE;
(function (ADTYPE) {
    ADTYPE[ADTYPE["INTERSTITIAL"] = 0] = "INTERSTITIAL";
    ADTYPE[ADTYPE["REWARD"] = 1] = "REWARD";
})(ADTYPE || (ADTYPE = {}));
var IPlatform = /** @class */ (function () {
    function IPlatform() {
    }
    IPlatform.prototype.getStorageSync = function (key) { };
    ;
    IPlatform.prototype.setStorageSync = function (key, value) { };
    ;
    /**
     * 获取文件管理器
     */
    IPlatform.prototype.getFileSystemManager = function () {
        return {};
    };
    ;
    IPlatform.prototype.downloadFile = function (object) {
        return {};
    };
    ;
    IPlatform.prototype.request = function (type, success, fail) { };
    IPlatform.prototype.navigate = function (screenName, buttonName, gameId) { };
    ;
    return IPlatform;
}());
