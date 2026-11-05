window.zsSdk = function () {
  function zsSdk() { }
  return zsSdk.init = function () {
    console.log("4399 init")
  },
    zsSdk.isVideoEnable = function (o, n) {
      window.h5api.canPlayAd(e => {
        console.log("4399是否可播放广告:" + e.canPlayAd + "  剩余次数:" + e.remain),
          e.canPlayAd && e.remain > 0 ? o && (console.log("isVideoEnable调用successHandler"), o.run()) : n && (console.log("isVideoEnable调用failHandler"), n.run())
      })
    },
    zsSdk.playVideo = function (o, n, e) {
      console.log("playVideo");
      if (window.ysdk) {
        let isReward = false;
        window.ysdk.adv.showRewardedVideo({
          callbacks: {
            onOpen: () => {
              Laya.SoundManager.muted = true;
              console.log('Video ad open.');
            },
            onRewarded: () => {
              isReward = true;
              console.log('Rewarded!');
            },
            onClose: () => {
              isReward ? (o && o()) : null;
              console.log('Video ad closed.');
              Laya.SoundManager.muted = false;
            },
            onError: (e) => {
              e && e()
              console.log('Error while open video ad:', e);
            }
          }
        })
      } else {
        o && o();
      }
    },
    zsSdk.showGamePortalAd = function (o) {
      console.log("4399展示推荐弹窗"),
        window.h5api.showRecommend()
    },
    zsSdk
}();