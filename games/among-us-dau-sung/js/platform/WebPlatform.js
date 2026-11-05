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
 * 平台管理
 * @author XuJian
 */
var WebPlatform = /** @class */ (function (_super) {
    __extends(WebPlatform, _super);
    function WebPlatform() {
        var _this = _super.call(this) || this;
        _this.navigateActive = false;
        var canvas = document.getElementById("layaCanvas");
        canvas && canvas.addEventListener("mouseup", function () {
            if (_this.navigateActive) {
                _this.navigateActive = false;
               // YYGSDK.navigate(_this._screenName, _this._buttonName, _this._gameId);
            }
        });
        canvas && canvas.addEventListener("touchend", function () {
            if (_this.navigateActive) {
                _this.navigateActive = false;
                YYGSDK.navigate(_this._screenName, _this._buttonName, _this._gameId);
            }
        });
        return _this;
    }
    WebPlatform.prototype.navigate = function (screenName, buttonName, gameId) {
        if (this.navigateActive === false) {
            this.navigateActive = true;
            this._screenName = screenName;
            this._buttonName = buttonName;
            this._gameId = gameId;
        }
    };
    WebPlatform.prototype.getStorageSync = function (key) {
        var v = Laya.LocalStorage.getItem(key);
        return JSON.parse(v);
    };
    WebPlatform.prototype.setStorageSync = function (key, value) {
        return Laya.LocalStorage.setItem(key, JSON.stringify(value));
    };
    WebPlatform.prototype.showLoading = function (title) { };
    WebPlatform.prototype.hideLoading = function () { };
    /**请求广告 */
    WebPlatform.prototype.request = function (type, success, fail) {
        var adtype = YYG.TYPE.INTERSTITIAL;
        switch (type) {
            case ADTYPE.INTERSTITIAL:
                break;
            case ADTYPE.REWARD:
                adtype = YYG.TYPE.REWARD;
                break;
            default:
                break;
        }
        YYGSDK.adsManager.request(adtype, YYG.EventHandler.create(this, function () { success && success.run(); }), YYG.EventHandler.create(this, function (event) { fail && fail.runWith(event); }));
    };
    return WebPlatform;
}(IPlatform));
