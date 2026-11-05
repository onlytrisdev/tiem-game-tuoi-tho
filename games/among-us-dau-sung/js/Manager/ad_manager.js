/**
 * 用户管理器
 * @author XuJian
 */
var ad_manager = /** @class */ (function () {
    function ad_manager() {
    }
    // ad_manager.video = function (adType, success, fail) {
        // if (!fail) {
            // fail = YYG.EventHandler.create(this, function (event) {
                // console.log("event=======>", event);
                // if (event === YYG.Event.AD_SKIPPED) {
                    // new MessagePop("AD_SKIPPED").popup();
                // }
            // });
        // }
        // YYGSDK.adsManager.request(adType, success, fail);
        // ADManager.vod(success,fail);
        // patform.showLoading();
        // if(patform.is4399){
        //     patform.play4399Ad(success,fail);
        //     return;
        // }
        // let video = patform.createRewardedVideoAd();
        // if(video){
        //     if(patform.isWX){
        //         // video.offClose && video.offClose(ad_manager.listener);
        //     }
        //     else if(patform.isTouTiao ){
        //     }
        //     ad_manager._successHandler = success;
        //     video.onError(
        //         res => 
        //         {
        //             console.log("res ==",res);
        //             patform.hideLoading();
        //         })
        //     video.onClose(ad_manager.listener)
        //     video.load().then(
        //         ()=> {
        //             video.show()
        //             patform.hideLoading();
        //         }
        //     ).catch(
        //         err =>{
        //             new ui.Components.ErrorPopUI().popup();
        //             patform.hideLoading();
        //         }
        //     )
        // }
        // else{
        //     patform.showModal("提示","暂不支持广告");
        //     patform.hideLoading();
        // }
    // };
    ad_manager.reg = function () {
        // YYGSDK.adsManager.on(YYG.Event.AD_INGAME_DISABLED, this, function () {
            new MessagePop("AD_INGAME_DISABLED").popup();
        // });
    };
    ad_manager.listener = function (res) {
        if (res && res.isEnded) {
            if (ad_manager._successHandler) {
                // tt.reportAnalytics('video', {
                // complete: '1',
                // });
                ad_manager._successHandler.run();
            }
        }
        if (ad_manager._successHandler) {
            ad_manager._successHandler.recover();
            ad_manager._successHandler = null;
        }
    };
    ad_manager.createInterstitialAd = function () {
        this.interstitialAd = wx.createInterstitialAd && wx.createInterstitialAd({ adUnitId: 'adunit-0dfdfbbd4a3c02a4' });
        if (this.interstitialAd) {
            this.interstitialAd.show().catch(function (err) {
                console.error(err);
            });
        }
    };
    ad_manager.InterstitialAdDestroy = function () {
        this.interstitialAd && this.interstitialAd.destroy();
    };
    return ad_manager;
}());
