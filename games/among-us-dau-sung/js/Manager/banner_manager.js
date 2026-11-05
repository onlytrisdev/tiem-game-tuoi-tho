/**
 * 用户管理器
 * @author XuJian
 */
var banner_manager = /** @class */ (function () {
    function banner_manager() {
    }
    banner_manager.show = function () {
        // if(!this._bannerAd){
        //     this._bannerAd = patform.createBannerAd();
        //     this._bannerAd.onError(function (err) {
        //         Laya.timer.once(2e3, banner_manager, banner_manager.show);
        //     });
        //     this._bannerAd.onResize(res=>{
        //         var phone = patform.getSystemInfoSync();
        //         var w = phone.screenWidth / 2;
        //         var h = phone.screenHeight;
        //         this._bannerAd.style.left = w - res.width / 2 + 0.1;
        //         this._bannerAd.style.top = h - res.height + 0.1;
        //     });
        //     this._bannerAd.onLoad();
        // }
        //  this._bannerAd.show();
    };
    banner_manager.hide = function () {
        this._bannerAd.hide();
    };
    banner_manager._bannerAd = null;
    return banner_manager;
}());
