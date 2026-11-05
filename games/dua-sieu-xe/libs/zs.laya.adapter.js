window.zsSdk = function() {
    function zsSdk() {}
    return zsSdk.rewardedVideoAd = null, zsSdk.videoCompletedHandler = null, zsSdk.videoInterruptHandler = null, zsSdk.videoErrorHandler = null, zsSdk.bannerAd = null, zsSdk.appBoxAd = null, zsSdk.bannerAdUnitId = null, zsSdk.fullScreenAD = null, zsSdk.fullScreenADUnitId = null, zsSdk.userInfoButton = null, zsSdk.bannerAdScale = .9, zsSdk.bannerLiveTime = 0, zsSdk.bannerLastShowTime = 0, zsSdk.videoLoad = !1, zsSdk.init = function() {
        console.log("zsSdk.init==========")
    }, zsSdk.loadingSuccess = function() {
        console.log("登陆成功")
    }, zsSdk.eNum = 0, zsSdk.isLogin = function() {
        return !!h5api && !!h5api.isLogin()
    }, zsSdk.login = function(n, e) {
        if (console.log("4399.login.........."), h5api && this.isLogin()) h5api.login(function(i) {
            i && i.uId ? (console.log("====================CODE:" + i.uId), n && n.runWith(JSON.stringify({
                identityId: i.uId
            }))) : (console.log("回应数据异常"), e && e.runWith("uId不存在"))
        }), this.eNum = 0;
        else {
            let i = this;
            if (i.eNum++, i.eNum > 10) return;
            console.log("加载api超时+" + i.eNum), setTimeout(function() {
                zsSdk.login(n, e)
            }, 300)
        }
    }, zsSdk.createUserInfoButton = function(n, e) {}, zsSdk.showUserInfoButton = function() {
        this.userInfoButton && this.userInfoButton.show()
    }, zsSdk.hideUserInfoButton = function() {
        this.userInfoButton && this.userInfoButton.hide()
    }, zsSdk.destroyUserInfoButton = function() {
        this.userInfoButton && (this.userInfoButton.destroy(), this.userInfoButton = null)
    }, zsSdk.openShare = function(n, e) {
        h5api.share()
    }, zsSdk.initVideoAD = function(n, e) {}, zsSdk.isVideoEnable = function() {}, zsSdk.videoTime = 0, zsSdk.intervalId = null, zsSdk.canShowVideo = function() {
        /* if (!h5api) return !1;
        return h5api.canPlayAd(function(n) {
            return !!n && (!!n.canPlayAd && !(n.remain <= 0))
        }) */
    }, zsSdk.playVideo = function(n, e, i) {
        let o = this;
        o.videoErrorHandler = i, o.videoCompletedHandler = n, o.videoInterruptHandler = e, h5api.playAd(function(n) {
            console.log("代码:" + n.code + ",消息:" + n.message), 1e4 === n.code ? (console.log("开始播放"), null != o.intervalId && clearInterval(o.intervalId), o.intervalId = setInterval(function() {
                o.videoTime += 1, console.log("播放时长" + o.videoTime)
            }, 1e3)) : 10001 === n.code ? (console.log("播放结束"), o.videoCompletedHandler && (console.log("进入成功回调"), o.videoCompletedHandler.run()), o.videoTime = 0, clearInterval(o.intervalId), o.intervalId = null) : (console.log("广告异常"), o.videoErrorHandler && o.videoErrorHandler.runWith(n.message))
        })
    }, zsSdk.initBannerAD = function(n, e, i, o) {
        this.bannerAdUnitId = n, this.bannerAdScale = e, this.bannerLiveTime = i, this.bannerLastShowTime = 0;
        var t = .5 * (1 - this.bannerAdScale),
            s = qq.getSystemInfoSync();
        if (this.bannerAd = qq.createBannerAd({
                adUnitId: n,
                style: {
                    top: s.windowHeight - 100,
                    width: s.windowWidth * zsSdk.bannerAdScale,
                    left: s.windowWidth * t
                }
            }), null != this.bannerAd) {
            this.bannerAd.onResize(function(n) {
                console.log(s), zsSdk.bannerAd && (zsSdk.bannerAd.style.top = s.windowHeight - n.height - 30, zsSdk.bannerAd.style.left = .5 * (s.windowWidth - n.width))
            });
            var d = this;
            this.bannerAd.onError(function(n) {
                console.debug("banner报错" + n), d.bannerAd.destroy(), d.bannerAd = null, o && o.run()
            })
        }
    }, zsSdk.showBanner = function(n) {
        null != this.bannerAdUnitId && (null == this.bannerAd && (console.log("initBannerAD"), this.initBannerAD(this.bannerAdUnitId, this.bannerAdScale, this.bannerLiveTime, n)), this.bannerAd && (console.log("showBannerAD"), this.bannerAd.show()), this.bannerLastShowTime = Date.now())
    }, zsSdk.hideBanner = function() {
        this.bannerAd ? (this.bannerAd.hide(), console.debug("调用了隐藏banner"), this.bannerLastShowTime > 0 && Date.now() - this.bannerLastShowTime > this.bannerLiveTime && (this.bannerAd.destroy(), this.bannerAd = null, this.initBannerAD(this.bannerAdUnitId, this.bannerAdScale))) : console.debug("没有banner？？")
    }, zsSdk.initAppBox = function(n, e, i) {
        console.log("box广告初始化...."), this.appBoxAd || (console.log("appBoxId：" + n), this.appBoxAd = qq.createAppBox({
            adUnitId: n
        }), this.appBoxAd.load(), qq.onShareAppMessage(function() {
            return console.log("初始化分享....."), {
                title: e,
                imageUrl: i
            }
        }))
    }, zsSdk.showShareMenu = function() {}, zsSdk.showAppBox = function() {
        this.appBoxAd ? this.appBoxAd.show() : (console.log("Adbox show..."), this.appBoxAd = qq.createAppBox({
            adUnitId: zs.laya.game.ADConfig.zs_box_adunit
        }))
    }, zsSdk.initFullScreenAD = function(n, e) {
        var i = qq.getSystemInfoSync();
        i.SDKVersion <= "2.6.0" ? e && e.runWith(i.SDKVersion + " <= 2.6.0") : this.fullScreenADUnitId = n
    }, zsSdk.loadFullScreenAD = function(n, e) {
        if (null != this.fullScreenADUnitId && (this.fullScreenAD = qq.createInterstitialAd({
                adUnitId: this.fullScreenADUnitId
            }), null != this.fullScreenAD)) {
            var i = this;
            this.fullScreenAD.onLoad(function() {
                n && n.run()
            }), this.fullScreenAD.onError(function(n) {
                console.log(n), i.fullScreenAD = null, e && e.runWith(n)
            })
        }
    }, zsSdk.showFullScreenAD = function(n) {
        if (null != this.fullScreenAD) {
            var e = this;
            this.fullScreenAD.onClose(function() {
                e.fullScreenAD = null, n && n.runWith(err)
            }), this.fullScreenAD.show()
        }
    }, zsSdk.setUserCloudStorage = function(n, e, i, o) {
        qq.setUserCloudStorage({
            KVDataList: n,
            success: function(n) {
                console.log("-----success:" + JSON.stringify(n)), e && e.runWith(n)
            },
            fail: function(n) {
                console.log("-----fail:" + JSON.stringify(n)), i && i.runWith(n)
            },
            complete: function(n) {
                console.log("-----complete:" + JSON.stringify(n)), o && o.runWith(n)
            }
        })
    }, zsSdk
}(), window.zsDevice = function() {
    function zsDevice() {}
    return zsDevice.deviceInfo = null, zsDevice.init = function() {
        this.deviceInfo = qq.getSystemInfoSync(), console.log(this.deviceInfo), console.log("zsDevice.init")
    }, zsDevice.onShow = function(n) {
        qq.onShow(function(e) {
            console.debug("zsDevice.show:" + Date.now()), n && n.runWith(e)
        })
    }, zsDevice.onHide = function(n) {
        qq.onHide(function() {
            console.debug("zsDevice.hide:" + Date.now()), n && n.run()
        })
    }, zsDevice.vibrateShort = function() {
        qq.vibrateShort({
            fail: function() {
                console.log("vibrateShort failed")
            }
        })
    }, zsDevice.vibrateLong = function() {
        qq.vibrateLong({
            fail: function() {
                console.log("vibrateShort failed")
            }
        })
    }, zsDevice.isNetValid = function() {
        return !0
    }, zsDevice.statusBarHeight = function() {
        return this.deviceInfo ? this.deviceInfo.statusBarHeight : 0
    }, zsDevice.screenWidth = function() {
        return this.deviceInfo ? this.deviceInfo.screenWidth : 1
    }, zsDevice.screenHeight = function() {
        return this.deviceInfo ? this.deviceInfo.screenHeight : 1
    }, zsDevice
}();