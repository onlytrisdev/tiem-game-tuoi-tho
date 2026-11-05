/**
 * 平台管理
 * @author XuJian
 */
var platform = /** @class */ (function () {
    function platform() {
    }
    platform._init_ = function () {
        if (typeof window["wx"] !== 'undefined') {
            this._patform = new WXPlatform();
        }
        else if (typeof window["swan"] !== 'undefined') {
            this._patform = new SwanPlatform();
        }
        else {
            this._patform = new WebPlatform();
        }
    };
    platform.getInstance = function () {
        if (!this._patform) {
            this._init_();
        }
        return this._patform;
    };
    platform._patform = null;
    return platform;
}());
