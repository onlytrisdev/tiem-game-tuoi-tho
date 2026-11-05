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
* 微信平台
* @author XuJian
*/
var WXPlatform = /** @class */ (function (_super) {
    __extends(WXPlatform, _super);
    function WXPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WXPlatform.prototype.getStorageSync = function (key) {
        return window["wx"].getStorageInfoSync(key);
    };
    WXPlatform.prototype.setStorageSync = function (key, value) {
        window["wx"].setStorageSync(key, value);
    };
    /**
     * 获取文件管理器
     */
    WXPlatform.prototype.getFileSystemManager = function () {
        return window["wx"].getFileSystemManager();
    };
    WXPlatform.prototype.downloadFile = function (object) {
        return window["wx"].downloadFile(object);
    };
    return WXPlatform;
}(IPlatform));
