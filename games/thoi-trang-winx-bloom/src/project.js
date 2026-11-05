window.__require = function e(n, t, i) {
    function o(a, r) {
        if (!t[a]) {
            if (!n[a]) {
                var s = a.split("/");
                if (s = s[s.length - 1], !n[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(s, !0);
                    if (c) return c(s, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
            }
            var d = t[a] = {
                exports: {}
            };
            n[a][0].call(d.exports, function(e) {
                return o(n[a][1][e] || e)
            }, d, d.exports, e, n, t, i)
        }
        return t[a].exports
    }
    for (var c = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
    return o
}({
    Advertisement_API: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "f78b68+/H9Ky4A9YuPETEZm", "Advertisement_API");
        var i = {
            initVal: function() {
                i.recorder = null, i.currtimer = 0, i.cstop = !1, i.videoPath = "", i.erroRecNode = null, i.bannerAd = null, i.insertAd = null, i.videoAd = null, i.reward = !0, i.rewarda = "", i.insert = !0, i.banner = !0, i.boolBannerVivo = !0, i.video = !0, i.bgmusic = 0, i.bannersize = !1, i.mobileVersions = null, i.boolIp = !1, i.numCount = 0, i.nativeAd = null, i.adId = null, i.adList = null, i.native = !0, i.boolType = "4399", "oppo" == i.boolType ? (i.erroNode = cc.find("erroNode"), i.nrewardNode = cc.find("nrewardNode"), i.resNode = i.nrewardNode.getComponent(cc.Label), i.resNode2 = i.erroNode.getComponent(cc.Label), cc.game.addPersistRootNode(i.erroNode), cc.game.addPersistRootNode(i.nrewardNode), i.erroNode.zIndex = 99999, i.nrewardNode.zIndex = 99999, i.nativeAdn = cc.find("chaping"), cc.game.addPersistRootNode(i.nativeAdn), i.nativeAdn.zIndex = 99999, i.htIcon2 = cc.find("Canvas/htIcon2"), i.nativeId = "e4b1ac1a33e14cfcaf85a0fa03f0908f", i.chaPingId = "ee52c10f5bf7447ea081804c558ab2b0", i.bannerId = "e0d64d81931d6977214144462a90c10d", i.rewardaId = "9cca3daeebaa40c38941eba21667d69e") : "tt" == i.boolType ? (i.erroNode = cc.find("erroNode"), i.nrewardNode = cc.find("nrewardNode"), i.resNode = i.nrewardNode.getComponent(cc.Label), i.resNode2 = i.erroNode.getComponent(cc.Label), cc.game.addPersistRootNode(i.erroNode), cc.game.addPersistRootNode(i.nrewardNode), i.erroNode.zIndex = 99999, i.nrewardNode.zIndex = 99999, i.shareId = "1845415jc88blb610h", i.chaPingId = "1845415jc88blb610h", i.bannerId = "9mbjm4oeemi990fk17", i.rewardaId = "3oblble0m7dhjk339l", i.errolz = cc.find("errolz"), cc.game.addPersistRootNode(i.errolz), i.errolz.zIndex = 99999, i.moreGame = cc.find("moreGame"), cc.game.addPersistRootNode(i.moreGame), i.moreGame.zIndex = 99999, i.moreGame.on(cc.Node.EventType.TOUCH_START, i.btnMoreGame, i.moreGame), i.initBannerAdverT(), i.checkMobileVersion()) : "vivo" == i.boolType ? (i.erroNode = cc.find("erroNode"), i.nrewardNode = cc.find("nrewardNode"), i.resNode = i.nrewardNode.getComponent(cc.Label), i.resNode2 = i.erroNode.getComponent(cc.Label), cc.game.addPersistRootNode(i.erroNode), cc.game.addPersistRootNode(i.nrewardNode), i.erroNode.zIndex = 99999, i.nrewardNode.zIndex = 99999, i.nativeAdn = cc.find("chaping"), cc.game.addPersistRootNode(i.nativeAdn), i.nativeAdn.zIndex = 99999, i.nativeId = "e4b1ac1a33e14cfcaf85a0fa03f0908f", i.chaPingId = "ee52c10f5bf7447ea081804c558ab2b0", i.bannerId = "e0d64d81931d6977214144462a90c10d", i.rewardaId = "9cca3daeebaa40c38941eba21667d69e") : "qq" == i.boolType ? (i.erroNode = cc.find("erroNode"), i.nrewardNode = cc.find("nrewardNode"), i.resNode = i.nrewardNode.getComponent(cc.Label), i.resNode2 = i.erroNode.getComponent(cc.Label), cc.game.addPersistRootNode(i.erroNode), cc.game.addPersistRootNode(i.nrewardNode), i.erroNode.zIndex = 99999, i.nrewardNode.zIndex = 99999, i.boxId = "54be069154ae62587bfc4cfb152c8b5f", i.initBannerAdverQ(), i.moreGame = cc.find("btn_moreGame"), cc.game.addPersistRootNode(i.moreGame), i.moreGame.zIndex = 99999) : "4399" == i.boolType ? (i.canPlayRewardNum = 10, i.boolCanPlayReward = !0, i.playerName = "", i.boolIsLogin = !1, i.erroNode = cc.find("erroNode"), i.nrewardNode = cc.find("nrewardNode"), i.resNode = i.nrewardNode.getComponent(cc.Label), i.resNode2 = i.erroNode.getComponent(cc.Label), cc.game.addPersistRootNode(i.erroNode), cc.game.addPersistRootNode(i.nrewardNode), i.erroNode.zIndex = 99999, i.nrewardNode.zIndex = 99999, i.canPlayReward(), i.readData4399()) : "baidu" == i.boolType && (i.erroNode = cc.find("erroNode"), i.nrewardNode = cc.find("nrewardNode"), i.resNode = i.nrewardNode.getComponent(cc.Label), i.resNode2 = i.erroNode.getComponent(cc.Label), cc.game.addPersistRootNode(i.erroNode), cc.game.addPersistRootNode(i.nrewardNode), i.erroNode.zIndex = 99999, i.nrewardNode.zIndex = 99999, i.bannerId = "6989051", i.rewardaId = "6989050", i.appSidId = "d9ec9dfc")
            },
            subPackage: function() {
                swan.loadSubpackage({
                    name: "stage1",
                    success: function(e) {},
                    fail: function(e) {}
                }).onProgressUpdate(function(e) {
                    console.log("Phần trăm tiến trình tải xuống gói con", e.progress), console.log("Độ dài của dữ liệu đã tải xuống", e.totalBytesWritten), console.log("Tổng độ dài dữ liệu", e.totalBytesExpectedToWrite)
                })
            },
            initBannerAdverBD: function() {
                var e = cc.view.getFrameSize(),
                    n = swan.getSystemInfoSync();
                i.bannerAd = swan.createBannerAd({
                    adUnitId: i.bannerId,
                    appSid: i.appSidId,
                    style: {
                        left: (e.width - 300) / 2,
                        top: e.height - 72.8,
                        width: 300
                    }
                }), i.bannerAd.onLoad(function() {
                    console.log("banner Quảng cáo được tải thành công "), i.bannerAd.show().then(function() {
                        return console.log("banner Hiển thị quảng cáo")
                    }).catch(function(e) {
                        return console.log(e)
                    })
                }), i.bannerAd.onError(function(e) {
                    console.log(e)
                }), i.bannerAd.onResize(function(t) {
                    i.bannersize || (console.log("\u5f00\u59cb\u9002\u914d"), n.platform, i.bannersize = !0, i.bannerAd.style.top = e.height - t.height, i.bannerAd.style.left = (e.width - t.width) / 2, console.log("\u9002\u914d\u5b8c\u6bd5"))
                })
            },
            bannerShowBD: function() {
                i.bannerAd && i.bannerAd.show()
            },
            bannerHideBD: function() {
                i.bannerAd && i.bannerAd.hide()
            },
            bannerDestroyBD: function() {
                i.bannerAd && i.bannerAd.destroy()
            },
            rewardAdverBD: function() {
                i.reward = !0, i.videoAd = swan.createRewardedVideoAd({
                    adUnitId: i.rewardaId,
                    appSid: i.appSidId
                }), i.videoAd.show().then(function() {
                    return console.log("\u64ad\u653e\u6210\u529f")
                }).catch(function(e) {
                    return i.videoAd.load().then(function() {
                        return i.videoAd.show()
                    })
                }), i.videoAd.onClose(function(e) {
                    e.isEnded && (console.log("\u6fc0\u52b1\u89c6\u9891\u5b8c\u6574\u64ad\u653e\u540e\u5173\u95ed"), i.reward && (i.reward = !1, console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5b8c\u6210\uff0c\u53d1\u653e\u5956\u52b1"), cc.audioEngine.resumeAll(), "Viết phần thưởng loại 1" == i.rewarda || i.rewarda, i.nrewardNode.stopAllActions(), i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.getComponent(cc.Label).string = "Phần thưởng đã được phát hành", i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))))
                }), i.videoAd.onError(function(e) {
                    console.log("\u64ad\u653e\u5931\u8d25:", e), i.nrewardNode.stopAllActions(), i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.getComponent(cc.Label).string = "Chưa có video khuyến khích", i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))
                })
            },
            canPlayReward: function() {
                window.h5api.canPlayAd(function(e) {
                    console.log("Có thể phát quảng cáo không", e.canPlayAd, "Số lần còn lại", e.remain), i.boolCanPlayReward = e.canPlayAd, i.canPlayRewardNum = e.remain
                })
				console.log("0001", e);
            },
            showADReward: function() {
                i.canPlayReward(), 1 == i.boolCanPlayReward || 0 != i.canPlayRewardNum ? window.h5api.playAd(function(e) {
                    if (console.log("Mã:" + e.code + ",Tin tức:" + e.message), 1e4 === e.code) console.log("Bắt đầu cuộc chơi");
                    else if (10001 === e.code) {
                        if (console.log("Chơi qua"), "doubleBox" == i.rewarda) var n = n.OpenBoxPopup.data.getComponent("OpenBoxPopup");
                        else i.rewarda;
                        i.nrewardNode.stopAllActions(), i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.getComponent(cc.Label).string = "Phần thưởng đã được phát hành", i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))
                    } else console.log("Ngoại lệ quảng cáo")
                }) : (i.nrewardNode.stopAllActions(), i.nrewardNode.getComponent(cc.Label).string = "Không có Quảng cáo Video", i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0))))
            },
            readData4399: function() {
                window.h5api.save({
                    type: "read",
                    more: !1,
                    callback: function(e) {
                        1e3 === e.code ? console.log("Thông tin lưu trữ:", e.data) : console.log(e.msg)
                    }
                })
            },
            writeData4399: function() {
                window.h5api.save({
                    type: "write",
                    more: !1,
                    title: "Gian hàng 1",
                    data: "Dữ liệu của bánh răng 1",
                    callback: function(e) {
                        1e3 === e.code ? console.log("Đã lưu thành công") : console.log(e.msg)
                    }
                })
            },
            getPlayerName: function() {
                i.boolIsLogin = window.h5api.isLogin(), 1 == i.boolIsLogin && window.h5api.login(function(e) {
                    i.playerName = e.userName
                })
            },
            conductRecording: function() {
                i.recorder = tt.getGameRecorderManager(), i.recorder.onStart(function(e) {
                    i.cstop = !1
                }), i.recorder.start({
                    duration: 300
                }), i.resNode.scheduleOnce(function() {
                    i.cstop = !0
                }, 4.5), i.currtimer = 0
            },
            onSRecorde: function() {
                null != i.recorder && (i.recorder.stop(), i.recorder.onStop(function(e) {
                    i.cstop ? (i.cstop = !1, i.videoPath = e.videoPath, i.errolz.getComponent(cc.Label).string = "Thời gian ghi quá ngắn") : (i.errolz.getComponent(cc.Label).string = "Thời gian ghi quá ngắn", i.errolz.opacity = 255, i.errolz.active = !0, i.errolz.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                        i.errolz.opacity = 0
                    }))))
                }))
            },
            shareSRecorde: function() {
                if (i.videoPath) {
                    if ("Chưa có video nào được quay" == i.errolz.getComponent(cc.Label).string) return i.errolz.stopAllActions(), i.errolz.opacity = 255, void i.errolz.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                        i.errolz.opacity = 0
                    })));
                    i.recorder.clipVideo({
                        path: i.videoPath,
                        timeRange: [60, 0],
                        success: function(e) {
                            console.log(e.videoPath), tt.shareAppMessage({
                                channel: "video",
                                templateId: "c154a0p346l77if06h",
                                extra: {
                                    videoPath: e.videoPath
                                },
                                success: function() {
                                    i.errolz.getComponent(cc.Label).string = "Chưa có video nào được quay"
                                },
                                fail: function(e) {
                                    i.errolz.getComponent(cc.Label).string = "Chưa có video nào được quay"
                                }
                            })
                        },
                        fail: function(e) {
                            i.errolz.getComponent(cc.Label).string = "Chưa có video nào được quay"
                        }
                    })
                }
            },
            initBannerAdverT: function() {
                var e = cc.view.getFrameSize();
                null != i.bannerAd && (i.bannerAd.destroy(), i.bannerAd = null), i.bannerAd = tt.createBannerAd({
                    adUnitId: i.bannerId,
                    style: {
                        width: 175
                    }
                }), i.bannerAd.onResize(function(n) {
                    console.log(n.width, n.height), i.bannerAd.style.top = e.height - n.width / 16 * 9, i.bannerAd.style.left = (e.width - n.width) / 2
                })
            },
            bannerAdverT: function() {
                var e = cc.view.getFrameSize();
                null != i.bannerAd && (i.bannerAd.destroy(), i.bannerAd = null, i.bannersize = !1), i.bannerAd = tt.createBannerAd({
                    adUnitId: i.bannerId,
                    style: {
                        width: 175
                    }
                }), i.bannerAd.onResize(function(n) {
                    console.log(n.width, n.height), i.bannersize || (i.bannersize = !0, i.bannerAd.style.top = e.height - n.height, i.bannerAd.style.left = (e.width - n.width) / 2)
                }), i.bannerAd.onLoad(function() {
                    i.resNode2.scheduleOnce(function() {
                        i.bannerAd.show().then(function() {
                            console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
                        }).catch(function(e) {
                            console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", e)
                        })
                    })
                }, .2), i.bannerAd.onError(function(e) {
                    console.log("\u9519\u8bef\uff01", e)
                })
            },
            bannerDestroy: function() {
                null != i.bannerAd && (i.bannerAd.destroy(), i.bannerAd = null, i.bannersize = !1)
            },
            videoAdverT: function() {
                i.reward = !0, null == i.videoAd && (i.videoAd = tt.createRewardedVideoAd({
                    adUnitId: i.rewardaId
                })), i.videoAd.show().then(function() {
                    cc.audioEngine.pauseAll(), i.videoAd.onClose(function(e) {
                        e.isEnded ? i.reward && (i.reward = !1, cc.audioEngine.resumeAll(), "Viết phần thưởng loại 1" == i.rewarda || i.rewarda, i.nrewardNode.stopAllActions(), i.nrewardNode.getComponent(cc.Label).string = "Phần thưởng đã được phát hành", i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))) : (cc.audioEngine.resumeAll(), i.nrewardNode.stopAllActions(), i.nrewardNode.getComponent(cc.Label).string = "Thoát khi đang chơi, sẽ không có phần thưởng trò chơi nào được phát", i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0))))
                    })
                }).catch(function(e) {
                    i.nrewardNode.stopAllActions(), i.nrewardNode.getComponent(cc.Label).string = "Chưa có video khuyến khích", i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))
                }), i.videoAd.onError(function(e) {
                    i.nrewardNode.stopAllActions(), i.nrewardNode.getComponent(cc.Label).string = "Chưa có video khuyến khích", i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))
                })
            },
            btnShare: function() {
                tt.shareAppMessage({
                    templateId: i.shareId,
                    success: function() {
                        console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f")
                    },
                    fail: function(e) {
                        console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25")
                    }
                })
            },
            checkMobileVersion: function() {
                "ios" == tt.getSystemInfoSync().platform && (i.boolIp = !0), tt.getSystemInfo({
                    success: function(e) {
                        i.mobileVersions = parseInt(e.SDKVersion.replace(/[^0-9]/gi, "")), i.resNode.scheduleOnce(function() {
                            i.mobileVersions <= 1330 || 1 == i.boolIp ? i.moreGame.active = !1 : i.moreGame.active = !0
                        }, .5)
                    },
                    fail: function(e) {
                        console.log("\u4fe1\u606f\u83b7\u53d6\u5931\u8d25")
                    }
                })
            },
            btnMoreGame: function() {
                tt.onMoreGamesModalClose(function(e) {
                    console.log("modal closed", e)
                }), tt.onNavigateToMiniProgram(function(e) {
                    console.log(e.errCode), console.log(e.errMsg)
                }), "ios" !== tt.getSystemInfoSync().platform && tt.showMoreGamesModal({
                    appLaunchOptions: [{
                        appId: "ttf527839a6a0d256d"
                    }],
                    success: function(e) {
                        console.log("success", e.errMsg)
                    },
                    fail: function(e) {
                        console.log("fail", e.errMsg)
                    }
                })
            },
            insbannerAdverO: function() {
                i.insert && GameConfig.PlayerData.chaPingAdCount < 8 && (i.insert = !1, null != i.insertAd && (i.insertAd.destroy(), i.insertAd = null), null != i.bannerAd && (i.bannerAd.destroy(), i.bannerAd = null), i.insertAd = qg.createInsertAd({
                    posId: i.chaPingId
                }), i.insertAd.load(), i.insertAd.onLoad(function() {
                    console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d"), i.resNode.scheduleOnce(function() {
                        i.insert = !0
                    }, 60), GameConfig.PlayerData.chaPingAdCount++, GameConfig.SavePlayerData(), i.insertAd.show()
                }), i.insertAd.onShow(function() {
                    console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a")
                }), i.insertAd.onError(function(e) {
                    console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"), console.log(e), i.insert = !0
                })), i.showHtIcon2()
            },
            bannerAdverO: function() {
                i.banner && GameConfig.PlayerData.bannerAdCount < 5 && (i.banner = !1, i.resNode.scheduleOnce(function() {
                    i.banner = !0
                }, .1), null != i.bannerAd && (i.bannerAd.destroy(), i.bannerAd = null), null != i.insertAd && (i.insertAd.destroy(), i.insertAd = null), i.bannerAd = qg.createBannerAd({
                    posId: i.bannerId
                }), i.bannerAd.show(), i.bannerAd.onShow(function() {
                    console.log(i.bannerAd), console.log("banner Hiển thị quảng cáo")
                }), i.bannerAd.onHide(function() {
                    GameConfig.PlayerData.bannerAdCount++, GameConfig.SavePlayerData(), i.bannerAd.hide()
                })), i.showHtIcon2()
            },
            destroyAdverO: function() {
                null != i.insertAd && (i.insertAd.destroy(), i.insertAd = null), null != i.bannerAd && (i.bannerAd.destroy(), i.bannerAd = null)
            },
            videoAdverO: function() {
                i.reward = !0, i.videoAd = qg.createRewardedVideoAd({
                    posId: i.rewardaId
                }), i.videoAd.load(), i.videoAd.onLoad(function() {
                    console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f"), cc.audioEngine.pauseAll(), i.videoAd.show()
                }), i.videoAd.onVideoStart(function() {
                    console.log("\u6fc0\u52b1\u89c6\u9891 \u5f00\u59cb\u64ad\u653e")
                }), i.videoAd.onError(function(e) {
                    console.log(e), i.videoAd.destroy()
                }), i.videoAd.onClose(function(e) {
                    e.isEnded ? i.reward && (i.reward = !1, console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5b8c\u6210\uff0c\u53d1\u653e\u5956\u52b1"), cc.audioEngine.resumeAll(), "Viết phần thưởng loại 1" == i.rewarda || i.rewarda, i.nrewardNode.stopAllActions(), i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.getComponent(cc.Label).string = "Phần thưởng đã được phát hành", i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))) : (i.nrewardNode.stopAllActions(), i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.getComponent(cc.Label).string = "Thoát khi đang chơi, sẽ không có phần thưởng trò chơi nào được phát", i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0))), cc.audioEngine.resumeAll(), i.videoAd.destroy())
                })
            },
            nativeIconO: function() {
                null != i.nativeAd && (i.nativeAd.destroy(), i.nativeAd = null), i.nativeAd = qg.createNativeAd({
                    adUnitId: i.nativeId
                }), i.nativeAd.load(), i.nativeAd.onLoad(function(e) {
                    function n() {
                        i.nativeAd.reportAdClick({
                            adId: i.adid
                        }), i.nativeAdn.active = !1
                    }
                    console.log(e.adList), i.adid = e.adList[0].adId, i.nativeAd.reportAdShow({
                        adId: i.adid
                    }), cc.loader.load(e.adList[0].icon, function(e, t) {
                        var o = new cc.SpriteFrame(t);
                        i.nativeAdn.getComponent(cc.Sprite).spriteFrame = o, i.nativeAdn.active = !0, i.nativeAdn.height = 110, i.nativeAdn.width = 110, i.nativeAdn.on(cc.Node.EventType.TOUCH_START, n, i.nativeAdn)
                    })
                }), i.nativeAd.onError(function(e) {
                    console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"), console.log(e)
                })
            },
            showHtIcon2: function() {
                i.htIcon2.active = !0, i.htIcon2.children[0].active = !0, i.htIcon2.children[1].active = !1
            },
            hideHtIcon2: function() {
                i.htIcon2.active = !1
            },
            bannerAdverV: function() {
                if (i.boolBannerVivo) {
                    var e = function() {
                        var e = qg.createBannerAd({
                            posId: i.bannerId,
                            style: {}
                        }).show();
                        e && e.catch(function(e) {
                            console.log("banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25-\u91cd\u8bd5"), console.log(JSON.stringify(e))
                        })
                    };
                    null != i.bannerAd && (i.bannerAd.destroy(), i.bannerAd = null), i.boolBannerVivo = !1, i.bannerAd = qg.createBannerAd({
                        posId: i.bannerId,
                        style: {}
                    });
                    var n = i.bannerAd.show();
                    n && n.then(function() {
                        console.log("banner\u5e7f\u544a\u5c55\u793a\u6210\u529f"), i.resNode.scheduleOnce(function() {
                            i.boolBannerVivo = !0
                        }, 10)
                    }).catch(function(n) {
                        switch (n.code) {
                            case 30003:
                                console.log("\u65b0\u7528\u62377\u5929\u5185\u4e0d\u80fd\u66dd\u5149Banner\uff0c\u8bf7\u5c06\u624b\u673a\u65f6\u95f4\u8c03\u6574\u4e3a7\u5929\u540e\uff0c\u9000\u51fa\u6e38\u620f\u91cd\u65b0\u8fdb\u5165");
                                break;
                            case 30009:
                                console.log("10\u79d2\u5185\u8c03\u7528\u5e7f\u544a\u6b21\u6570\u8d85\u8fc71\u6b21\uff0c10\u79d2\u540e\u518d\u8c03\u7528"), setTimeout(function() {
                                    i.boolBannerVivo = !0
                                }, 1e4);
                                break;
                            case 30002:
                                console.log("\u52a0\u8f7d\u5e7f\u544a\u5931\u8d25\uff0c\u91cd\u65b0\u52a0\u8f7d\u5e7f\u544a"), setTimeout(function() {
                                    e()
                                }, 1e4);
                                break;
                            default:
                                console.log("banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25"), console.log(JSON.stringify(n))
                        }
                    })
                }
            },
            bannerDestroyV: function() {
                null != i.bannerAd && (i.bannerAd.destroy(), i.bannerAd = null)
            },
            insertAdverV: function() {
                i.insert && (i.insert = !1, i.resNode.scheduleOnce(function() {
                    var e = qg.createInterstitialAd({
                        posId: i.chaPingId,
                        style: {}
                    }).show();
                    e && e.then(function() {
                        console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u6210\u529f")
                    }).catch(function(e) {
                        switch (e.code) {
                            case 30003:
                                console.log("\u65b0\u7528\u62377\u5929\u5185\u4e0d\u80fd\u66dd\u5149Banner\uff0c\u8bf7\u5c06\u624b\u673a\u65f6\u95f4\u8c03\u6574\u4e3a7\u5929\u540e\uff0c\u9000\u51fa\u6e38\u620f\u91cd\u65b0\u8fdb\u5165");
                                break;
                            case 30009:
                                console.log("10\u79d2\u5185\u8c03\u7528\u5e7f\u544a\u6b21\u6570\u8d85\u8fc71\u6b21\uff0c10\u79d2\u540e\u518d\u8c03\u7528"), setTimeout(function() {
                                    show()
                                }, 1e4);
                                break;
                            case 30002:
                                console.log("load\u5e7f\u544a\u5931\u8d25\uff0c\u91cd\u65b0\u52a0\u8f7d\u5e7f\u544a"), setTimeout(function() {
                                    i.boolBannerVivo = !0
                                }, 1e4);
                                break;
                            default:
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25"), console.log(JSON.stringify(e))
                        }
                    })
                }, .3), i.resNode2.scheduleOnce(function() {
                    i.insert = !0
                }, 10))
            },
            nativeAdV: function() {
                if (i.native) {
                    var e = function() {
                            1 != n && (n++, t.reportAdClick({
                                adId: i.adId
                            }), i.nativeAdn.active = !1)
                        },
                        n = 0;
                    i.native = !1, i.resNode.scheduleOnce(function() {
                        i.native = !0
                    }, 10);
                    var t = qg.createNativeAd({
                            posId: i.nativeId
                        }),
                        o = t.load();
                    o && o.then(function() {
                        console.log("\u539f\u751f\u5e7f\u544a\u8bfb\u53d6\u5b8c\u6210", JSON.stringify(res))
                    }).catch(function(e) {
                        console.log("\u52a0\u8f7d\u5931\u8d25", JSON.stringify(e))
                    }), t.onLoad(function(n) {
                        console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210", JSON.stringify(n)), n && n.adList && (i.adId = n.adList[0].adId, i.adList = n.adList[0], cc.loader.load(n.adList[0].imgUrlList[0], function(n, o) {
                            var c = new cc.SpriteFrame(o);
                            i.nativeAdn.getComponent(cc.Sprite).spriteFrame = c, i.nativeAdn.getChildByName("title").children[0].getComponent(cc.Label).string = i.adList.title, i.nativeAdn.getChildByName("desc").children[0].getComponent(cc.Label).string = i.adList.desc, i.nativeAdn.on(cc.Node.EventType.TOUCH_START, e, i.nativeAdn), i.nativeAdn.active = !0, t.reportAdShow({
                                adId: i.adId
                            })
                        }))
                    })
                } else i.insertAdverV()
            },
            videoAdverV: function() {
                if (i.video) {
                    i.video = !1, i.resNode.getComponent(cc.Label).scheduleOnce(function() {
                        i.video = !0
                    }, 10), i.erroNode.active = !0, null == i.videoAd && (i.videoAd = qg.createRewardedVideoAd({
                        posId: "1ff0008e118a42e7892a6e6c1ebc43da"
                    }));
                    var e = i.videoAd.load();
                    e && e.then(function() {
                        console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
                    }).catch(function(e) {
                        console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", e)
                    }), i.videoAd.onLoad(function() {
                        console.log("\u6fc0\u52b1\u89c6\u9891\u5df2\u52a0\u8f7d"), cc.audioEngine.pauseAll();
                        for (var e = qg.createInnerAudioContext(), n = 0; n < i.soundManager.length; ++n) e.src = i.soundManager[n], e.volume = 0;
                        var t = i.videoAd.show();
                        i.reward = !0, t && t.then(function() {
                            console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f")
                        }).catch(function(e) {
                            console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25", e)
                        })
                    }), i.videoAd.onError(function(e) {
                        console.log("Video khuyến khích bất thường", e), i.erroNode.opacity = 255, i.erroNode.getComponent(cc.Label).string = "Video khuyến khích bất thường", i.erroNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))
                    }), i.videoAd.onClose(function(e) {
                        if (e && e.isEnded) {
                            if (i.reward) {
                                i.reward = !1, cc.audioEngine.resumeAll();
                                for (var n = qg.createInnerAudioContext(), t = 0; t < i.soundManager.length; ++t) n.src = i.soundManager[t], n.volume = 1;
                                "reward1" == i.rewarda || i.rewarda, i.nrewardNode.stopAllActions(), i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.getComponent(cc.Label).string = "Phần thưởng đã được phát hành", i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))
                            }
                        } else {
                            console.log("Thoát khi đang chơi, sẽ không có phần thưởng trò chơi nào được phát"), cc.audioEngine.resumeAll();
                            for (n = qg.createInnerAudioContext(), t = 0; t < i.soundManager.length; ++t) n.src = i.soundManager[t], n.volume = 1;
                            i.nrewardNode.stopAllActions(), i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.getComponent(cc.Label).string = "Thoát khi đang chơi, sẽ không có phần thưởng trò chơi nào được phát", i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))
                        }
                    })
                } else i.nrewardNode.stopAllActions(), i.nrewardNode.active = !0, i.nrewardNode.opacity = 255, i.nrewardNode.getComponent(cc.Label).string = "Thoát khi đang chơi, sẽ không có phần thưởng trò chơi nào được phát", i.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))
            },
            nativeIconV: function() {
                if (i.native) {
                    var e = function() {
                        n.reportAdClick({
                            adId: i.adId
                        })
                    };
                    i.native = !1, i.resNode.scheduleOnce(function() {
                        i.native = !0
                    }, 2);
                    var n = qg.createNativeAd({
                            posId: "96caf448612f4ba9aebea117b660ae5b"
                        }),
                        t = n.load();
                    t && t.then(function() {
                        console.log("\u539f\u751f\u5e7f\u544a\u8bfb\u53d6\u5b8c\u6210", JSON.stringify(res))
                    }).catch(function(e) {
                        console.log("\u52a0\u8f7d\u5931\u8d25", JSON.stringify(e))
                    }), n.onLoad(function(t) {
                        console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210", JSON.stringify(t)), t && t.adList && (i.adId = t.adList[0].adId, cc.loader.load(t.adList[0].icon, function(t, o) {
                            var c = new cc.SpriteFrame(o);
                            n.reportAdShow({
                                adId: i.adId
                            }), i.nativeAdn.getComponent(cc.Sprite).spriteFrame = c, i.nativeAdn.on(cc.Node.EventType.TOUCH_START, e, i.nativeAdn)
                        }))
                    })
                }
            },
            closeNativeAdV: function() {
                i.nativeAdn.active = !1
            },
            initBannerAdverQ: function() {
                var e = cc.view.getFrameSize(),
                    n = qq.getSystemInfoSync();
                null != i.bannerAd && (i.bannerAd.destroy(), i.bannerAd = null, i.bannersize = !1), "ios" == n.platform ? i.bannerAd = qq.createBannerAd({
                    adUnitId: "e0d64d81931d6977214144462a90c10d",
                    style: {
                        top: e.height - 72.8,
                        width: 300
                    }
                }) : i.bannerAd = qq.createBannerAd({
                    adUnitId: "e0d64d81931d6977214144462a90c10d",
                    style: {
                        left: 0,
                        top: 0,
                        width: 300,
                        height: 168.75
                    }
                }), i.bannerAd.onResize(function(t) {
                    i.bannersize || (console.log("\u5f00\u59cb\u9002\u914d"), n.platform, i.bannersize = !0, i.bannerAd.style.top = e.height - t.height, i.bannerAd.style.left = (e.width - t.width) / 2, console.log("\u9002\u914d\u5b8c\u6bd5"))
                }), i.bannerAd.onLoad(function() {
                    console.log("QQbanner\u52a0\u8f7d\u5b8c")
                }), i.bannerAd.onError(function(e) {
                    console.log(e.errMsg), console.log(e.errCode)
                })
            },
            bannerShowQ: function() {
                i.bannerAd && i.bannerAd.show()
            },
            bannerHideQ: function() {
                i.bannerAd && i.bannerAd.hide()
            },
            videoAdverQ: function() {},
            appBoxQ: function() {
                null != i.appbox && (i.appbox.destroy(), i.appbox = null), i.appbox = qq.createAppBox({
                    adUnitId: i.boxId
                }), i.appbox.load().then(function() {
                    console.log("\u8fdb\u5165\u5c55\u793a\u76d2\u5b50"), i.appbox.show().then(function() {
                        console.log("\u76d2\u5b50\u5c55\u793a\u6210\u529f")
                    })
                })
            },
            insertAdverQ: function() {
                null != i.insertAd && (i.insertAd.destroy(), i.insertAd = null), i.insertAd = qq.createInterstitialAd({
                    adUnitId: "8a91240c7d7a5fd5243ca53b55e1924e"
                }), i.insertAd.load(), i.insertAd.onLoad(function() {
                    console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d"), i.insertAd.show()
                }), i.insertAd.onError(function(e) {
                    console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"), console.log(e)
                })
            }
        };
        n.exports = i, cc._RF.pop()
    }, {}],
    Canvas: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "62629DzqyVK/4HQDZddwKCz", "Canvas");
        var i = e("GameConfig"),
            o = (e("SoundManager"), e("Advertisement_API"));
        cc.Class({
            extends: cc.Component,
            properties: {
                bgMusic: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            onLoad: function() {
                if (i.Init(), i.GetPlayerData(), cc.director.getCollisionManager().enabled = !0, this.myMain = cc.find("Canvas/Main"), this.myInitPanel = cc.find("Canvas/InitPanel"), this.mySettingPanel = cc.find("Canvas/SettingPanel"), this.mySavePanel = cc.find("Canvas/SavePanel"), this.myConfirmDeleteDataPanel = cc.find("Canvas/ConfirmDeleteDataPanel"), this.myConfirmCoverDataPanel = cc.find("Canvas/ConfirmCoverDataPanel"), this.mycantDeletePanel = cc.find("Canvas/cantDeletePanel"), this.myClockPanel = cc.find("Canvas/ClockPanel"), this.adapterScreen(), this._initPanel(), this._monitorScreen(), i.PlayerData.curDay = (new Date).getDate(), 0 == i.PlayerData.recordDay) {
                    i.PlayerData.recordDay = i.PlayerData.curDay, i.PlayerData.boolFirstShare = 1;
                    for (var e = 0; e < 18; ++e) i.PlayerData.boolFirstClickType[e] = 0
                } else if (i.PlayerData.recordDay != i.PlayerData.curDay) {
                    i.PlayerData.boolFirstShare = 1, i.PlayerData.recordDay = i.PlayerData.curDay;
                    for (e = 0; e < 18; ++e) i.PlayerData.boolFirstClickType[e] = 0
                }
                i.SavePlayerData(), o.initVal()
            },
            onEnable: function() {},
            adapterScreen: function() {
                var e = cc.find("Canvas").getComponent(cc.Canvas);
                cc.sys.isMobile ? (e.fitWidth = !1, e.fitHeight = !0) : (e.fitWidth = !0, e.fitHeight = !0)
            },
            _monitorScreen: function() {
                var e = this;
                window.onresize = function() {
                    e._initPanel()
                }
            },
            _initPanel: function() {
                var e = this;
                i.sizeWidth = cc.winSize.width, i.sizeHeight = cc.winSize.height, i.ratio = i.sizeHeight / 960, i.ratioWidth = i.sizeWidth / 640, i.ratioWidth > 1 && (i.ratioWidth = 1), this.myMain.width = i.sizeWidth, this.myMain.height = i.sizeHeight, this.myMain.children[0].setScale(i.ratioWidth, i.ratioWidth), this.myMain.children[2].scaleX = i.ratioWidth, this.node.getComponent(cc.Canvas).scheduleOnce(function() {
                    i.cPH = e.myMain.children[2].position.y
                }, .5), this.myMain.children[3].setScale(i.ratioWidth, i.ratioWidth), this.myMain.children[4].setScale(i.ratioWidth, i.ratioWidth), this.myMain.children[5].setScale(i.ratioWidth, i.ratioWidth), this.myMain.children[6].setScale(i.ratioWidth, i.ratioWidth), this.myMain.children[8].setScale(i.ratioWidth, i.ratioWidth), this.myInitPanel.width = i.sizeWidth, this.myInitPanel.height = i.sizeHeight, this.myInitPanel.children[0].setScale(i.ratioWidth, i.ratioWidth), this.mySettingPanel.width = i.sizeWidth, this.mySettingPanel.height = i.sizeHeight, this.mySettingPanel.children[0].setScale(i.ratioWidth, i.ratioWidth), this.mycantDeletePanel.width = i.sizeWidth, this.mycantDeletePanel.height = i.sizeHeight, this.mycantDeletePanel.children[0].setScale(i.ratioWidth, i.ratioWidth), this.mySavePanel.width = i.sizeWidth, this.mySavePanel.height = i.sizeHeight;
                for (var n = 0; n < this.mySavePanel.childrenCount; ++n) this.mySavePanel.children[n].setScale(i.ratioWidth, i.ratioWidth);
                this.myConfirmDeleteDataPanel.width = i.sizeWidth, this.myConfirmDeleteDataPanel.height = i.sizeHeight, this.myConfirmDeleteDataPanel.children[0].setScale(i.ratioWidth, i.ratioWidth), this.myConfirmCoverDataPanel.width = i.sizeWidth, this.myConfirmCoverDataPanel.height = i.sizeHeight, this.myConfirmCoverDataPanel.children[0].setScale(i.ratioWidth, i.ratioWidth), this.myClockPanel.width = i.sizeWidth, this.myClockPanel.height = i.sizeHeight, this.myClockPanel.children[0].setScale(i.ratioWidth, i.ratioWidth)
            }
        }), cc._RF.pop()
    }, {
        Advertisement_API: "Advertisement_API",
        GameConfig: "GameConfig",
        SoundManager: "SoundManager"
    }],
    Clip: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "55522yi/pNEaaQUf0Dgd1pC", "Clip"), cc.Class({
            extends: cc.Component,
            properties: {
                frames: {
                    default: [],
                    type: cc.SpriteFrame
                },
                _totalFrames: 0,
                _currentFrame: 0
            },
            onEnable: function() {
                this._totalFrames = this.frames.length
            },
            gotoAndStop: function(e) {
                var n = parseInt(e);
                this.node.getComponent(cc.Sprite).spriteFrame = this.frames[n], this._currentFrame = n
            }
        }), cc._RF.pop()
    }, {}],
    ClockPanel: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "4f590gLFLRH+K5UvprGuI0N", "ClockPanel");
        var i = e("GameConfig"),
            o = e("Advertisement_API");
        cc.Class({
            extends: cc.Component,
            properties: {
                keyNum: cc.Label
            },
            onLoad: function() {
                this.btn_no = this.node.children[1], this.btn_yes = this.node.children[0].children[1], this.btn_yesTxt = this.btn_yes.children[1].getComponent(cc.Label), this.myChangePanel = cc.find("Canvas/Main/ChangePanel").children[0].children[0], this.myMain = cc.find("Canvas/Main"), this.clockSkinCount = 0, this.btn_noPos = this.btn_no.position, this.btn_yes.x = 0, this.btn_yesTxt.string = "Xác nhận"
            },
            onEnable: function() {
                this.btn_no.active = !0, this.btn_no.position = this.btn_noPos, this.btn_yes.x = 0, this.btn_yesTxt.string = "Xác nhận"
            },
            onDisable: function() {},
            clickYes: function() {
                cc.log("Nhấp để mở khóa"), o.rewarda = "jspf", this.myMain.getComponent("Main")._showRewardAD()
            },
            clickKey: function() {
                this.myMain.getComponent("Main")._clockSkin(7), this.node.active = !1, i.SavePlayerData()
            },
            clickNo: function() {
                this.node.active = !1
            }
        }), cc._RF.pop()
    }, {
        Advertisement_API: "Advertisement_API",
        GameConfig: "GameConfig"
    }],
    GameConfig: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "06cbcXOwWBMpZZU6pE1fbam", "GameConfig");
        var i = {
            PlayerData: {},
            Init: function() {
                i.isMusic = !0, i.curClickType = 0, i.preClickType = 0, i.curClickNum = 0, i.preClickNum = 0, i.curPageNum = 1, i.curShowNode = 0, i.preShowNode = 0, i.zsPool = new cc.NodePool, i.petPool = new cc.NodePool, i.boolDeleteZsOrPet = 0, i.boolSavePanelCantDeleteZsOrPet = 0, i.recordUnclockCount = 0, i.cPH = 0
            },
            SavePlayerData: function() {
                console.log(i.PlayerData), cc.sys.localStorage.setItem("huanZhuang4399_gameData", JSON.stringify(i.PlayerData))
            },
            GetPlayerData: function() {
                console.log(i);
                var e = cc.sys.localStorage.getItem("huanZhuang4399_gameData");
                if ("" != e && null != e || cc.sys.localStorage.setItem("huanZhuang4399_gameData", JSON.stringify(i.PlayerData)), i.PlayerData = JSON.parse(cc.sys.localStorage.getItem("huanZhuang4399_gameData")), !i.PlayerData.skinArr) {
                    i.PlayerData = {}, i.PlayerData.keyNum = 0, i.PlayerData.curDay = 0, i.PlayerData.boolFirstShare = 0, i.PlayerData.recordDay = 0, i.PlayerData.skinArr = new Array, i.PlayerData.boolFirstClickType = new Array;
                    for (var n = 0; n < 150; ++n) {
                        i.PlayerData.skinArr[n] = new Array;
                        for (var t = 0; t < 19; ++t) i.PlayerData.skinArr[n][t] = 17 == t || 18 == t ? [] : 0
                    }
                    i.PlayerData.clockSkinArr = new Array;
                    for (n = 0; n < 18; ++n) {
                        i.PlayerData.clockSkinArr[n] = new Array, i.PlayerData.boolFirstClickType[n] = 0;
                        for (t = 0; t < 28; ++t) i.PlayerData.clockSkinArr[n][t] = 1;
						//for (t = 0; t < 28; ++t) i.PlayerData.clockSkinArr[n][t] = t < 7 ? 1 : 0
                    }
                }
            }
        };
        n.exports = i, cc._RF.pop()
    }, {}],
    Index: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "7c4ebm9j/NC5ZeNIupNx3ev", "Index");
        var i = e("GameConfig"),
            o = e("SoundManager");
        e("Advertisement_API");
        cc.Class({
            extends: cc.Component,
            properties: {
                bgMusic: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            onLoad: function() {
                i.Init(), this.myLoading = cc.find("Canvas/Loading"), this.LoadingAni = this.myLoading.children[0].getComponent(cc.Animation), this.LoadingAniState = this.LoadingAni.play("LoadingAni"), this.LoadingProgress = this.myLoading.children[1].children[0], this.LoadingProgressS = this.LoadingProgress.getComponent(cc.Sprite), this.adapterScreen(), this._initPanel()
            },
            start: function() {
                i.isMusic && (o.resumeSound(), o.playMusic(this.bgMusic, !0, !0))
            },
            _subPackage: function() {
                var e = this;
                cc.loader.downloader.loadSubpackage("PNG", function(n) {
                    n && e._subPackage(), console.log("load subpackage successfully.")
                })
            },
            _subPackage1: function() {
                var e = this;
                cc.loader.downloader.loadSubpackage("SmallNode", function(n) {
                    n && e._subPackage1(), console.log("load subpackage successfully.")
                })
            },
            _subPackage2: function() {
                var e = this;
                cc.loader.downloader.loadSubpackage("sound", function(n) {
                    n && e._subPackage2(), console.log("load subpackage successfully.")
                })
            },
            adapterScreen: function() {
                var e = cc.find("Canvas").getComponent(cc.Canvas);
                cc.sys.isMobile ? (e.fitWidth = !1, e.fitHeight = !0) : (e.fitWidth = !0, e.fitHeight = !0)
            },
            clickStarGame: function() {
                cc.director.preloadScene("Main");
                var e = this;
                this.myLoading.active = !0, this.LoadingAni.play("LoadingAni"), this.LoadingAniState.repeatCount = 1 / 0, this.LoadingProgressS.schedule(function() {
                    e.LoadingProgressS.fillRange += .05, e.LoadingProgressS.fillRange >= 1 && cc.director.loadScene("Main")
                }, .15, 19, .2)
            },
            btn_gameEnd: function() {},
            _initPanel: function() {
                this.node.width = cc.winSize.width, this.node.height = cc.winSize.height;
                var e = cc.winSize.width / 640;
                this.node.children[0].setScale(e, e), this.node.children[1].setScale(e, e), this.node.children[2].setScale(e, e), this.node.children[3].setScale(e, e), this.node.children[4].setScale(e, e)
            }
        }), cc._RF.pop()
    }, {
        Advertisement_API: "Advertisement_API",
        GameConfig: "GameConfig",
        SoundManager: "SoundManager"
    }],
    KeyPanel: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "67fdaUxW+BD/7C1dwqmBK/7", "KeyPanel");
        e("GameConfig"), e("Advertisement_API");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.btn_no = this.node.children[1], this.btn_noPos = this.btn_no.position, this.btn_yes = this.node.children[0].children[1]
            },
            onEnable: function() {
                var e = this;
                this.btn_no.active = !0, this.btn_no.position = this.btn_noPos, this.scheduleOnce(function() {
                    e.btn_no.runAction(cc.moveTo(.5, e.btn_noPos.x, e.btn_noPos.y + 150))
                }, 2)
            },
            onDisable: function() {}
        }), cc._RF.pop()
    }, {
        Advertisement_API: "Advertisement_API",
        GameConfig: "GameConfig"
    }],
    Main: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "280c3rsZJJKnZ9RqbALVwtK", "Main");
        var i = e("GameConfig"),
            o = e("SoundManager"),
            c = e("Advertisement_API");
        cc.Class({
            extends: cc.Component,
            properties: {
                btn_down: cc.Node,
                btn_delete: cc.Node,
                btn_music: cc.Node,
                pet: cc.Prefab,
                zs: cc.Prefab,
                keyNum: cc.Label,
                bgMusic: {
                    default: null,
                    type: cc.AudioClip
                },
                clickMusic: {
                    default: null,
                    type: cc.AudioClip
                },
                failMusic: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            onLoad: function() {
                this.mySmallNode = cc.find("Canvas/Main/ChangePanel/btnMask/smallNode"), this.myBigNode = cc.find("Canvas/Main/BigNode/Btn/btnMask/bigNode"), this.myHero = cc.find("Canvas/Main/Hero"), this.myBtn = cc.find("Canvas/Main/BigNode/Btn"), this.myChangePanel = cc.find("Canvas/Main/ChangePanel"), this.myMenu = cc.find("Canvas/Main/btn_menu"), this.myInitPanel = cc.find("Canvas/InitPanel"), this.mySetting = cc.find("Canvas/SettingPanel"), this.mySavePanel = cc.find("Canvas/SavePanel"), this.mycantDeletePanel = cc.find("Canvas/cantDeletePanel"), this.myClockPanel = cc.find("Canvas/ClockPanel"), this.myDeleteZsOrPet = cc.find("Canvas/Main/deleteZsOrPet"), this.myKey = cc.find("Canvas/Main/key"), this.myKeyPanel = cc.find("Canvas/KeyPanel"), this.myBtn_share = cc.find("Canvas/Main/btn_share"), this.myBigNode.children[i.curClickType].getComponent("Clip").gotoAndStop(1), this.myHeroEyebrowClip = this.myHero.getChildByName("eyebrow").getComponent("Clip"), this.myHeroEyeClip = this.myHero.getChildByName("eye").getComponent("Clip"), this.myHeroMouthClip = this.myHero.getChildByName("mouth").getComponent("Clip"), this.myHeroBangClip = this.myHero.getChildByName("bang").getComponent("Clip"), this.myHeroHairClip = this.myHero.getChildByName("hair").getComponent("Clip"), this.myHeroTxClip = this.myHero.getChildByName("tx").getComponent("Clip"), this.myHeroSkirtClip = this.myHero.getChildByName("skirt").getComponent("Clip"), this.myHeroShortsClip = this.myHero.getChildByName("shorts").getComponent("Clip"), this.myHeroCoatClip = this.myHero.getChildByName("coat").getComponent("Clip"), this.myHeroStockingClip = this.myHero.getChildByName("stocking").getComponent("Clip"), this.myHeroShoesClip = this.myHero.getChildByName("shoes").getComponent("Clip"), this.myHeroNecklaceClip = this.myHero.getChildByName("necklace").getComponent("Clip"), this.myHeroEarringClip = this.myHero.getChildByName("earring").getComponent("Clip"), this.myHeroPackageClip = this.myHero.getChildByName("package").getComponent("Clip"), this.myHeroBgClip = this.node.children[0].getComponent("Clip"), this.myHeroZs = this.myHero.getChildByName("zs"), this.myHeroPet = this.myHero.getChildByName("pet"), this.boolDown = 0, this.boolMenu = 0, this.boolFullScreen = 0, this.boolFullScreenFz = 0, this.initHeroPos = this.myHero.position, this.initBtnPos = this.myBtn.position, this.initBtn_downPosY = -i.sizeHeight / 2 + this.myBtn.parent.height + 40;
                for (var e = 0; e < 20; ++e) {
                    var n = cc.instantiate(this.zs);
                    i.zsPool.put(n)
                }
                for (var t = 0; t < 20; ++t) {
                    var o = cc.instantiate(this.pet);
                    i.petPool.put(o)
                }
                this.clockSkinCount = 0
            },
            onEnable: function() {
                this.boolDown = 0, this.boolMenu = 0;
                for (var e = 0; e < this.myMenu.childrenCount; ++e) this.myMenu.children[e].active = !1;
                this.btn_down.rotation = 0, this.myHero.position = this.initHeroPos, this.myChangePanel.position = cc.v2(0, -i.sizeHeight / 2 + this.myChangePanel.height / 2), this.btn_delete.y = -i.sizeHeight / 2 + this.myBtn.parent.height + 40, this.btn_down.y = -i.sizeHeight / 2 + this.myBtn.parent.height + 40;
                var n = this.myChangePanel.children[0].children[0];
                for (e = 7; e < 28; ++e) 1 == i.PlayerData.clockSkinArr[i.curClickType][e] && (n.children[e].children[0].active = !1)
            },
            update: function(e) {
                this.initChangePanelPos = i.cPH, 1 == i.boolDeleteZsOrPet && 0 == i.boolSavePanelCantDeleteZsOrPet ? this.myDeleteZsOrPet.active = !0 : this.myDeleteZsOrPet.active = !1
            },
            clickBigNode: function(e) {
                this.clickCloseMenu(), i.isMusic && o.playEffect(this.clickMusic, !1), this.myBigNode.children[i.preClickType].getComponent("Clip").gotoAndStop(0);
                var n = e.target;
                i.curClickType = parseInt(n.name.replace(/[^0-9]/gi, "")), n.getComponent("Clip").gotoAndStop(1), i.preClickType = i.curClickType, i.preClickNum = 0, i.recordUnclockCount = 0;
                for (var t = null, a = 0; a < 28; ++a)(t = this.mySmallNode.children[a]).getComponent("Clip").gotoAndStop(i.curClickType), t.children[0] && 1 == i.PlayerData.clockSkinArr[i.curClickType][a] ? t.children[0].active = !1 : t.children[0] && 0 == i.PlayerData.clockSkinArr[i.curClickType][a] && (t.children[0].active = !0, i.recordUnclockCount++);
                c.canPlayReward(), (7 == i.recordUnclockCount || 14 == i.recordUnclockCount || 21 == i.recordUnclockCount) && 0 == i.PlayerData.boolFirstClickType[i.curClickType] && 0 != c.canPlayRewardNum ? (this.myClockPanel.active = !0, this.myClockPanel.children[0].children[0].getComponent(cc.Label).string = "Mở khóa 7 skin miễn phí", i.recordUnclockCount = 7, i.PlayerData.boolFirstClickType[i.curClickType] = 1, i.SavePlayerData()) : this.myClockPanel.active = !1
            },
            clickSmallNode: function(e) {
                this.clickCloseMenu(), i.isMusic && o.playEffect(this.clickMusic, !1);
                var n = e.target;
                if (i.curClickNum = parseInt(n.name.replace(/[^0-9]/gi, "")), c.canPlayReward(), 0 != i.PlayerData.clockSkinArr[i.curClickType][i.curClickNum]) {
                    if (0 == i.curClickType) this.myHeroEyebrowClip.gotoAndStop(i.curClickNum);
                    else if (1 == i.curClickType) this.myHeroEyeClip.gotoAndStop(i.curClickNum);
                    else if (2 == i.curClickType) this.myHeroMouthClip.gotoAndStop(i.curClickNum);
                    else if (3 == i.curClickType) this.myHeroBangClip.gotoAndStop(i.curClickNum);
                    else if (4 == i.curClickType) this.myHeroHairClip.gotoAndStop(i.curClickNum + 1);
                    else if (5 == i.curClickType) this.myHeroTxClip.gotoAndStop(i.curClickNum + 1);
                    else if (6 == i.curClickType) this.myHeroSkirtClip.gotoAndStop(i.curClickNum + 1);
                    else if (7 == i.curClickType) this.myHeroShortsClip.gotoAndStop(i.curClickNum + 1);
                    else if (8 == i.curClickType) this.myHeroCoatClip.gotoAndStop(i.curClickNum + 1);
                    else if (9 == i.curClickType) this.myHeroStockingClip.gotoAndStop(i.curClickNum + 1);
                    else if (10 == i.curClickType) this.myHeroShoesClip.gotoAndStop(i.curClickNum + 1);
                    else if (11 == i.curClickType) this.myHeroNecklaceClip.gotoAndStop(i.curClickNum + 1);
                    else if (12 == i.curClickType) this.myHeroEarringClip.gotoAndStop(i.curClickNum + 1);
                    else if (13 == i.curClickType) this.myHeroPackageClip.gotoAndStop(i.curClickNum + 1);
                    else if (14 == i.curClickType) this.myHeroBgClip.gotoAndStop(i.curClickNum);
                    else if (15 == i.curClickType) {
                        var t = null;
                        (t = i.zsPool.size() > 0 ? i.zsPool.get() : cc.instantiate(this.zs)).parent = this.myHeroZs, t.position = cc.v2(-150, 150), t.getComponent("Clip").gotoAndStop(i.curClickNum + 1)
                    } else if (16 == i.curClickType) {
                        var a = null;
                        (a = i.petPool.size() > 0 ? i.petPool.get() : cc.instantiate(this.pet)).parent = this.myHeroPet, a.position = cc.v2(-150, 150), a.getComponent("Clip").gotoAndStop(i.curClickNum + 1)
                    }
                } else 0 != c.canPlayRewardNum && (this.myClockPanel.active = !0)
            },
            clickDelete: function() {
                if (this.clickCloseMenu(), i.isMusic && o.playEffect(this.clickMusic, !1), 0 == i.curClickType) {
                    if (0 == this.myHeroEyebrowClip._currentFrame) return void this._cantDeletePanel();
                    this.myHeroEyebrowClip.gotoAndStop(0)
                } else if (1 == i.curClickType) {
                    if (0 == this.myHeroEyeClip._currentFrame) return void this._cantDeletePanel();
                    this.myHeroEyeClip.gotoAndStop(0)
                } else if (2 == i.curClickType) {
                    if (0 == this.myHeroMouthClip._currentFrame) return void this._cantDeletePanel();
                    this.myHeroMouthClip.gotoAndStop(0)
                } else if (3 == i.curClickType) {
                    if (0 == this.myHeroBangClip._currentFrame) return void this._cantDeletePanel();
                    this.myHeroBangClip.gotoAndStop(0)
                } else if (14 == i.curClickType) {
                    if (0 == this.myHeroBgClip._currentFrame) return void this._cantDeletePanel();
                    this.myHeroBgClip.gotoAndStop(0)
                } else if (4 == i.curClickType) this.myHeroHairClip.gotoAndStop(0);
                else if (5 == i.curClickType) this.myHeroTxClip.gotoAndStop(0);
                else if (6 == i.curClickType) this.myHeroSkirtClip.gotoAndStop(0);
                else if (7 == i.curClickType) this.myHeroShortsClip.gotoAndStop(0);
                else if (8 == i.curClickType) this.myHeroCoatClip.gotoAndStop(0);
                else if (9 == i.curClickType) this.myHeroStockingClip.gotoAndStop(0);
                else if (10 == i.curClickType) this.myHeroShoesClip.gotoAndStop(0);
                else if (11 == i.curClickType) this.myHeroNecklaceClip.gotoAndStop(0);
                else if (12 == i.curClickType) this.myHeroEarringClip.gotoAndStop(0);
                else if (13 == i.curClickType) this.myHeroPackageClip.gotoAndStop(0);
                else if (15 == i.curClickType)
                    for (var e = 0; e <= this.myHeroZs.childrenCount; ++e) e = 0, i.zsPool.put(this.myHeroZs.children[e]);
                else if (16 == i.curClickType)
                    for (e = 0; e <= this.myHeroPet.childrenCount; ++e) e = 0, i.petPool.put(this.myHeroPet.children[e])
            },
            clickDowm: function() {
                this.clickCloseMenu(), i.isMusic && o.playEffect(this.clickMusic, !1), 0 == this.boolDown ? (this.boolDown = 1, this.btn_down.angle = 180, this.myHero.stopAllActions(), this.myHero.runAction(cc.moveBy(.5, 0, -50)), this.myChangePanel.stopAllActions(), this.myChangePanel.runAction(cc.moveTo(.5, 0, this.initChangePanelPos - this.myChangePanel.height)), this.myBtn.stopAllActions(), this.myBtn.runAction(cc.moveTo(.5, 0, this.initBtnPos.y - this.myChangePanel.height)), this.btn_delete.stopAllActions(), this.btn_delete.runAction(cc.moveTo(.5, this.btn_delete.x, this.initBtn_downPosY - this.myChangePanel.height)), this.btn_down.stopAllActions(), this.btn_down.runAction(cc.moveTo(.5, this.btn_down.x, this.initBtn_downPosY - this.myChangePanel.height))) : (this.boolDown = 0, this.btn_down.angle = 0, this.myHero.stopAllActions(), this.myHero.runAction(cc.moveTo(.5, 0, this.initHeroPos.y)), this.myChangePanel.stopAllActions(), this.myChangePanel.runAction(cc.moveTo(.5, 0, this.initChangePanelPos)), this.myBtn.stopAllActions(), this.myBtn.runAction(cc.moveTo(.5, 0, this.initBtnPos.y)), this.btn_delete.stopAllActions(), this.btn_delete.runAction(cc.moveTo(.5, this.btn_delete.x, this.initBtn_downPosY)), this.btn_down.stopAllActions(), this.btn_down.runAction(cc.moveTo(.5, this.btn_down.x, this.initBtn_downPosY)))
            },
            _cantDeletePanel: function() {
                i.isMusic && o.playEffect(this.failMusic, !1), this.mycantDeletePanel.active = !0, this.mycantDeletePanel.children[0].setScale(.01, .01), this.mycantDeletePanel.children[0].runAction(cc.scaleTo(.3, i.ratioWidth, i.ratioWidth))
            },
            clickCantDeletePanelYes: function() {
                i.isMusic && o.playEffect(this.clickMusic, !1);
                var e = this;
                this.mycantDeletePanel.children[0].runAction(cc.sequence(cc.scaleTo(.2, i.ratioWidth + .1, i.ratioWidth + .1), cc.scaleTo(.3, .01, .01), cc.callFunc(function() {
                    e.mycantDeletePanel.active = !1
                })))
            },
            clickMenu: function() {
                if (i.isMusic && o.playEffect(this.clickMusic, !1), 0 == this.boolMenu) {
                    this.boolMenu = 1;
                    for (var e = 0; e < this.myMenu.childrenCount; ++e) this.myMenu.children[e].active = !0
                } else {
                    this.boolMenu = 0;
                    for (e = 0; e < this.myMenu.childrenCount; ++e) this.myMenu.children[e].active = !1
                }
            },
            clickCloseMenu: function() {
                if (i.isMusic && o.playEffect(this.clickMusic, !1), 1 == this.boolMenu) {
                    this.boolMenu = 0;
                    for (var e = 0; e < this.myMenu.childrenCount; ++e) this.myMenu.children[e].active = !1
                }
            },
            clickFullScreen: function() {
                if (1 != this.boolFullScreenFz) {
                    i.isMusic && o.playEffect(this.clickMusic, !1), this.boolFullScreenFz = 1;
                    var e = this;
                    this.myHero.stopAllActions(), this.myHero.runAction(cc.sequence(cc.moveTo(.5, 0, this.initHeroPos.y - 50), cc.callFunc(function() {
                        e.boolFullScreen = 1, e.boolFullScreenFz = 0
                    }))), this.myChangePanel.active = !1, this.myBtn.active = !1, this.btn_delete.active = !1, this.btn_down.active = !1, this.myMenu.active = !1, this.clickCloseMenu()
                }
            },
            clickCloseFullScreen: function() {
                if (this.clickCloseMenu(), i.isMusic && o.playEffect(this.clickMusic, !1), 1 != this.boolFullScreenFz && 0 != this.boolFullScreen) {
                    this.boolFullScreenFz = 1;
                    var e = this;
                    this.myHero.stopAllActions(), this.myHero.runAction(cc.sequence(cc.moveTo(.5, 0, this.initHeroPos.y), cc.callFunc(function() {
                        e.boolFullScreen = 0, e.boolFullScreenFz = 0
                    }))), this.myChangePanel.active = !0, this.myBtn.active = !0, this.btn_delete.active = !0, this.btn_down.active = !0, this.myMenu.active = !0
                }
            },
            clickInit: function() {
                this.clickCloseMenu(), i.isMusic && o.playEffect(this.failMusic, !1), this.myInitPanel.active = !0, this.myInitPanel.children[0].setScale(.01, .01), this.myInitPanel.children[0].runAction(cc.scaleTo(.3, i.ratioWidth, i.ratioWidth))
            },
            clickInitBtn_yes: function() {
                i.isMusic && o.playEffect(this.clickMusic, !1);
                var e = this;
                this.myInitPanel.children[0].runAction(cc.sequence(cc.scaleTo(.2, i.ratioWidth + .1, i.ratioWidth + .1), cc.scaleTo(.3, .01, .01), cc.callFunc(function() {
                    e.myInitPanel.active = !1, e.myHeroEyebrowClip.gotoAndStop(0), e.myHeroEyeClip.gotoAndStop(0), e.myHeroMouthClip.gotoAndStop(0), e.myHeroBangClip.gotoAndStop(0), e.myHeroHairClip.gotoAndStop(0), e.myHeroTxClip.gotoAndStop(0), e.myHeroSkirtClip.gotoAndStop(0), e.myHeroShortsClip.gotoAndStop(0), e.myHeroCoatClip.gotoAndStop(0), e.myHeroStockingClip.gotoAndStop(0), e.myHeroShoesClip.gotoAndStop(0), e.myHeroNecklaceClip.gotoAndStop(0), e.myHeroEarringClip.gotoAndStop(0), e.myHeroPackageClip.gotoAndStop(0), e.myHeroBgClip.gotoAndStop(0);
                    for (var n = 0; n <= e.myHeroZs.childrenCount; ++n) n = 0, i.zsPool.put(e.myHeroZs.children[n]);
                    for (n = 0; n <= e.myHeroPet.childrenCount; ++n) n = 0, i.petPool.put(e.myHeroPet.children[n])
                })))
            },
            clickInitBtn_no: function() {
                i.isMusic && o.playEffect(this.clickMusic, !1);
                var e = this;
                this.myInitPanel.children[0].runAction(cc.sequence(cc.scaleTo(.2, i.ratioWidth + .1, i.ratioWidth + .1), cc.scaleTo(.3, .01, .01), cc.callFunc(function() {
                    e.myInitPanel.active = !1
                })))
            },
            clickSave: function() {
                this.clickCloseMenu(), i.isMusic && o.playEffect(this.clickMusic, !1), this.mySavePanel.active = !0, i.boolSavePanelCantDeleteZsOrPet = 1
            },
            clickSetting: function() {
                this.clickCloseMenu(), i.isMusic && o.playEffect(this.clickMusic, !1), this.mySetting.active = !0, this.mySetting.children[0].setScale(.01, .01), this.mySetting.children[0].runAction(cc.scaleTo(.3, i.ratioWidth, i.ratioWidth))
            },
            clickMusicOn: function() {
                var e = this.btn_music.getComponent("Clip");
                i.isMusic ? (i.isMusic = !1, o.stopSound(), o.pauseAllEffects(), e.gotoAndStop(1)) : (i.isMusic = !0, o.resumeSound(), o.playMusic(this.bgMusic, !0, !0), e.gotoAndStop(0))
            },
            clickSettingYes: function() {
                i.isMusic && o.playEffect(this.clickMusic, !1);
                var e = this;
                this.mySetting.children[0].runAction(cc.sequence(cc.scaleTo(.2, i.ratioWidth + .1, i.ratioWidth + .1), cc.scaleTo(.3, .01, .01), cc.callFunc(function() {
                    e.mySetting.active = !1
                })))
            },
            clickShare: function() {
                var e = this;
                cc.log("\u70b9\u51fb\u5206\u4eab\u6309\u94ae"), cc.loader.loadRes("share", function(n, t) {
                    qq.shareAppMessage({
                        title: "\u4e00\u8d77\u73a9\uff01",
                        imageUrl: t.url,
                        success: function(n) {
                            1 == i.PlayerData.boolFirstShare && (i.PlayerData.boolFirstShare = 0, console.log("\u8f6c\u53d1\u6210\u529f!!!"), i.PlayerData.keyNum += 1, e.keyNum.string = i.PlayerData.keyNum, e.myBtn_share.children[0].active = !1, e.myKeyPanel.active = !1, i.SavePlayerData())
                        },
                        fail: function(e) {
                            console.log("\u8f6c\u53d1\u5931\u8d25!!!")
                        }
                    })
                })
            },
            _clockSkin: function(e) {
                var n = this.myChangePanel.children[0].children[0];
                this.clockSkinCount = 0;
                for (var t = 7; t < 28; ++t) this.clockSkinCount >= e || 0 == i.PlayerData.clockSkinArr[i.curClickType][t] && (i.PlayerData.clockSkinArr[i.curClickType][t] = 1, n.children[t].children[0].active = !1, this.clockSkinCount++);
                i.SavePlayerData()
            },
            _showRewardAD: function() {
                var e = this;
                c.canPlayReward(), 1 != c.boolCanPlayReward && 0 == c.canPlayRewardNum || window.h5api.playAd(function(n) {
                    console.log("Mã:" + n.code + ",Tin tức:" + n.message), 1e4 === n.code ? console.log("Bắt đầu cuộc chơi") : 10001 === n.code ? (console.log("Chơi qua"), "jspf" == c.rewarda ? (console.log("Mở khóa 7 skin"), e._clockSkin(7), e.myClockPanel.active = !1, i.SavePlayerData()) : "key" == c.rewarda && (console.log("Lấy hai chìa khóa"), i.PlayerData.keyNum += 2, e.keyNum.string = i.PlayerData.keyNum, e.myKeyPanel.active = !1, i.SavePlayerData()), c.nrewardNode.stopAllActions(), c.nrewardNode.active = !0, c.nrewardNode.opacity = 255, c.nrewardNode.getComponent(cc.Label).string = "Phần thưởng đã được phát hành", c.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(.5, 0)))) : console.log("Ngoại lệ quảng cáo")
                })
            },
            clickKeyPanelYes: function() {},
            clickKeyPanelNo: function() {}
        }), cc._RF.pop()
    }, {
        Advertisement_API: "Advertisement_API",
        GameConfig: "GameConfig",
        SoundManager: "SoundManager"
    }],
    NodeMove: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "a1f08+RoB9HyJtRwkZ+jwlO", "NodeMove");
        var i = e("GameConfig");
        cc.Class({
            extends: cc.Component,
            properties: {
                boolTouch: 0
            },
            onLoad: function() {},
            onEnable: function() {
                this.node.on("touchstart", this.clickDown, this), this.node.on("touchmove", this.clickMove, this), this.node.on("touchend", this.clickUp, this), this.boolTouch = 0, this.boolClick = 0
            },
            onDisable: function() {
                this.node.off("touchstart", this.clickDown, this), this.node.off("touchmove", this.clickMove, this), this.node.off("touchend", this.clickUp, this)
            },
            start: function() {},
            clickDown: function() {
                this.boolClick = 1, i.boolDeleteZsOrPet = 1
            },
            clickMove: function(e) {
                if (1 == this.boolClick) {
                    var n = new cc.Vec2(e.getLocationX(), e.getLocationY());
                    n = this.node.parent.convertToNodeSpaceAR(n), this.node.position = n
                }
            },
            clickUp: function() {
                this.boolClick = 0, i.boolDeleteZsOrPet = 0
            },
            onCollisionEnter: function(e, n) {
                console.log("on collision enter"), 2 == e.tag && 0 == i.boolSavePanelCantDeleteZsOrPet && 0 == this.boolTouch && (i.boolDeleteZsOrPet = 0, this.boolTouch = 1, 15 == n.tag && i.zsPool.put(n.node), 16 == n.tag && i.petPool.put(n.node))
            }
        }), cc._RF.pop()
    }, {
        GameConfig: "GameConfig"
    }],
    SavePanel: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "04371HtRoJDzohg+d8blXnh", "SavePanel");
        var i = e("GameConfig"),
            o = e("SoundManager"),
            c = e("Advertisement_API");
        cc.Class({
            extends: cc.Component,
            properties: {
                showPanel: cc.Node,
                txt_curPageNum: cc.Label,
                pet: cc.Prefab,
                zs: cc.Prefab,
                clickMusic: {
                    default: null,
                    type: cc.AudioClip
                },
                failMusic: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            onLoad: function() {
                this.myConfirmDeleteData = cc.find("Canvas/ConfirmDeleteDataPanel"), this.myConfirmCoverData = cc.find("Canvas/ConfirmCoverDataPanel"), this.myMainHero = cc.find("Canvas/Main/Hero"), this.myMain = cc.find("Canvas/Main"), this.myMainbg = cc.find("Canvas/Main").children[0].getComponent("Clip"), this.myBtn_left = cc.find("Canvas/SavePanel/btn_left"), this.myBtn_right = cc.find("Canvas/SavePanel/btn_right"), this.myBtn = cc.find("Canvas/Main/BigNode/Btn"), this.myMenu = cc.find("Canvas/Main/btn_menu"), this.myBtn_down = cc.find("Canvas/Main/btn_down"), this.myBtn_delete = cc.find("Canvas/Main/btn_delete"), this.btnPanel = this.myMain.children[1], this.changePanel = this.myMain.children[2], this.clickNum = 0
            },
            onEnable: function() {
                this._checkPageNum(), this.myBtn_left.y = -i.sizeHeight / 2 + this.myBtn.parent.height + 40, this.myBtn_right.y = -i.sizeHeight / 2 + this.myBtn.parent.height + 40, this.myMenu.active = !1, this.myBtn_down.active = !1, this.myBtn_delete.active = !1, this.btnPanel.active = !1, this.changePanel.active = !1
            },
            onDisable: function() {
                this.myMenu.active = !0, this.myBtn_down.active = !0, this.myBtn_delete.active = !0, this.btnPanel.active = !0, this.changePanel.active = !0
            },
            clickBtn_left: function() {
                if (i.curPageNum--, i.curPageNum < 1) return i.curPageNum = 1, void this._checkPageNum();
                i.isMusic && o.playEffect(this.clickMusic, !1), this.showPanel.children[i.preShowNode + 1].getComponent("Clip").gotoAndStop(0), this._checkPageNum(), this.myHero = null
            },
            clickBtn_right: function() {
                if (i.curPageNum++, i.curPageNum > 50) return i.curPageNum = 50, void this._checkPageNum();
                i.isMusic && o.playEffect(this.clickMusic, !1), this.showPanel.children[i.preShowNode + 1].getComponent("Clip").gotoAndStop(0), this._checkPageNum(), this.myHero = null
            },
            _checkPageNum: function() {
                this.txt_curPageNum.string = i.curPageNum + "/50";
                for (var e = 0, n = null, t = 1; t < 4; ++t) e = 3 * (i.curPageNum - 1) + t, (n = this.showPanel.children[t]).children[0].getComponent(cc.Label).string = e, 1 == i.PlayerData.skinArr[e - 1][0] ? this._pushHeroEverything(n.children[1], e - 1, 2) : this._emptyHeroEverything(n.children[1], 2)
            },
            clickSave: function() {
                i.isMusic && o.playEffect(this.clickMusic, !1), this.myHero && (1 == i.PlayerData.skinArr[this.clickNum][0] ? this.clickCoverSaveData() : (this._saveHeroEverything(), this._pushHeroEverything(this.myHero, this.clickNum, 2)))
            },
            clickPush: function() {
                if (i.isMusic && o.playEffect(this.clickMusic, !1), this.myHero) {
                    this._emptyHeroEverything(this.myMainHero, 1), this.myMainbg.gotoAndStop(i.PlayerData.skinArr[this.clickNum][1]);
                    for (var e = 0; e < this.myMainHero.childrenCount; ++e)
                        if (1 != e)
                            if (e == this.myMainHero.childrenCount - 2)
                                for (var n = 0, t = 0, c = 0, a = 0; a < i.PlayerData.skinArr[this.clickNum][e + 2].length; ++a) n = i.PlayerData.skinArr[this.clickNum][e + 2][a][0], t = i.PlayerData.skinArr[this.clickNum][e + 2][a][1], c = i.PlayerData.skinArr[this.clickNum][e + 2][a][2], this.createZs(this.myMainHero.children[e], n, t, c);
                            else if (e == this.myMainHero.childrenCount - 1) {
                        var r = 0,
                            s = 0,
                            l = 0;
                        for (a = 0; a < i.PlayerData.skinArr[this.clickNum][e + 2].length; ++a) r = i.PlayerData.skinArr[this.clickNum][e + 2][a][0], s = i.PlayerData.skinArr[this.clickNum][e + 2][a][1], l = i.PlayerData.skinArr[this.clickNum][e + 2][a][2], this.createPet(this.myMainHero.children[e], r, s, l)
                    } else this.myMainHero.children[e].getComponent("Clip").gotoAndStop(i.PlayerData.skinArr[this.clickNum][e + 2])
                }
            },
            clickReturnBack: function() {
                i.isMusic && o.playEffect(this.clickMusic, !1), this.node.active = !1, i.boolSavePanelCantDeleteZsOrPet = 0
            },
            clickShowNode: function(e) {
                i.isMusic && o.playEffect(this.clickMusic, !1), this.showPanel.children[i.preShowNode + 1].getComponent("Clip").gotoAndStop(0);
                var n = e.target;
                n.getComponent("Clip").gotoAndStop(1), i.preShowNode = parseInt(n.name.replace(/[^0-9]/gi, "")), this.myHero = this.showPanel.children[i.preShowNode + 1].children[1], this.clickNum = 3 * (i.curPageNum - 1) + i.preShowNode
            },
            clickDeleteSaveData: function() {
                this.myHero && (i.isMusic && o.playEffect(this.failMusic, !1), this.myConfirmDeleteData.children[0].setScale(.01, .01), this.myConfirmDeleteData.active = !0, this.myConfirmDeleteData.children[0].runAction(cc.scaleTo(.3, i.ratioWidth, i.ratioWidth)))
            },
            clickDeleteSaveDataYes: function() {
                i.PlayerData.skinArr[this.clickNum][0] = 0, this._emptyHeroEverything(this.myHero, 2), i.PlayerData.skinArr[this.clickNum] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [],
                    []
                ], this.clickDeleteSaveDataNo(), i.SavePlayerData()
            },
            clickDeleteSaveDataNo: function() {
                var e = this;
                this.myConfirmDeleteData.children[0].runAction(cc.sequence(cc.scaleTo(.2, i.ratioWidth + .1, i.ratioWidth + .1), cc.scaleTo(.3, .01, .01), cc.callFunc(function() {
                    e.myConfirmDeleteData.active = !1
                })))
            },
            clickCoverSaveData: function() {
                i.isMusic && o.playEffect(this.failMusic, !1), this.myConfirmCoverData.children[0].setScale(.01, .01), this.myConfirmCoverData.active = !0, this.myConfirmCoverData.children[0].runAction(cc.scaleTo(.3, i.ratioWidth, i.ratioWidth))
            },
            clickCoverSaveDataYes: function() {
                i.isMusic && o.playEffect(this.clickMusic, !1), this._emptyHeroEverything(this.myHero, 2), this._saveHeroEverything(), this._pushHeroEverything(this.myHero, this.clickNum, 2), this.clickCoverSaveDataNo(), c.writeData4399()
            },
            clickCoverSaveDataNo: function() {
                i.isMusic && o.playEffect(this.clickMusic, !1);
                var e = this;
                this.myConfirmCoverData.children[0].runAction(cc.sequence(cc.scaleTo(.2, i.ratioWidth + .1, i.ratioWidth + .1), cc.scaleTo(.3, .01, .01), cc.callFunc(function() {
                    e.myConfirmCoverData.active = !1
                })))
            },
            _getHeroComponentClip: function() {
                this.myHeroEyebrowClip = this.myHero.getChildByName("eyebrow").getComponent("Clip"), this.myHeroEyeClip = this.myHero.getChildByName("eye").getComponent("Clip"), this.myHeroMouthClip = this.myHero.getChildByName("mouth").getComponent("Clip"), this.myHeroBangClip = this.myHero.getChildByName("bang").getComponent("Clip"), this.myHeroHairClip = this.myHero.getChildByName("hair").getComponent("Clip"), this.myHeroTxClip = this.myHero.getChildByName("tx").getComponent("Clip"), this.myHeroSkirtClip = this.myHero.getChildByName("skirt").getComponent("Clip"), this.myHeroShortsClip = this.myHero.getChildByName("shorts").getComponent("Clip"), this.myHeroCoatClip = this.myHero.getChildByName("coat").getComponent("Clip"), this.myHeroStockingClip = this.myHero.getChildByName("stocking").getComponent("Clip"), this.myHeroShoesClip = this.myHero.getChildByName("shoes").getComponent("Clip"), this.myHeroNecklaceClip = this.myHero.getChildByName("necklace").getComponent("Clip"), this.myHeroEarringClip = this.myHero.getChildByName("earring").getComponent("Clip"), this.myHeroPackageClip = this.myHero.getChildByName("package").getComponent("Clip"), this.myHeroBgClip = this.myHero.children[0].getComponent("Clip")
            },
            _emptyHeroEverything: function(e, n) {
                for (var t = 0; t < e.childrenCount; ++t)
                    if (t != n)
                        if (t == e.childrenCount - 2)
                            for (var o = 0; o <= e.children[t].childrenCount; ++o) o = 0, i.zsPool.put(e.children[t].children[0]);
                        else if (t == e.childrenCount - 1)
                    for (o = 0; o <= e.children[t].childrenCount; ++o) o = 0, i.petPool.put(e.children[t].children[0]);
                else e.children[t].getComponent("Clip").gotoAndStop(0)
            },
            _saveHeroEverything: function() {
                i.PlayerData.skinArr[this.clickNum][0] = 1, i.PlayerData.skinArr[this.clickNum][1] = this.myMainbg._currentFrame;
                for (var e = 0; e < this.myMainHero.childrenCount; ++e)
                    if (1 != e)
                        if (15 == e) {
                            var n = null,
                                t = [],
                                o = 0;
                            i.PlayerData.skinArr[this.clickNum][e + 2] = [];
                            for (var c = 0; c < this.myMainHero.children[e].childrenCount; ++c) t = [], o = (n = this.myMainHero.children[e].children[c]).getComponent("Clip")._currentFrame, t[0] = o, t[1] = n.x, t[2] = n.y, i.PlayerData.skinArr[this.clickNum][e + 2].push(t)
                        } else if (16 == e) {
                    var a = null,
                        r = [],
                        s = 0;
                    i.PlayerData.skinArr[this.clickNum][e + 2] = [];
                    for (c = 0; c < this.myMainHero.children[e].childrenCount; ++c) r = [], s = (a = this.myMainHero.children[e].children[c]).getComponent("Clip")._currentFrame, r[0] = s, r[1] = a.x, r[2] = a.y, i.PlayerData.skinArr[this.clickNum][e + 2].push(r)
                } else i.PlayerData.skinArr[this.clickNum][e + 2] = this.myMainHero.children[e].getComponent("Clip")._currentFrame;
                i.SavePlayerData()
            },
            _pushHeroEverything: function(e, n, t) {
                for (var o = 0; o < e.childrenCount; ++o)
                    if (o != t)
                        if (o == e.childrenCount - 2)
                            for (var c = 0, a = 0, r = 0, s = 0; s < i.PlayerData.skinArr[n][o + 1].length; ++s) c = i.PlayerData.skinArr[n][o + 1][s][0], a = i.PlayerData.skinArr[n][o + 1][s][1], r = i.PlayerData.skinArr[n][o + 1][s][2], this.createZs(e.children[o], c, a, r);
                        else if (o == e.childrenCount - 1) {
                    var l = 0,
                        d = 0,
                        h = 0;
                    for (s = 0; s < i.PlayerData.skinArr[n][o + 1].length; ++s) l = i.PlayerData.skinArr[n][o + 1][s][0], d = i.PlayerData.skinArr[n][o + 1][s][1], h = i.PlayerData.skinArr[n][o + 1][s][2], this.createPet(e.children[o], l, d, h)
                } else e.children[o].getComponent("Clip").gotoAndStop(i.PlayerData.skinArr[n][o + 1])
            },
            createZs: function(e, n, t, o) {
                var c = null;
                (c = i.zsPool.size() > 0 ? i.zsPool.get() : cc.instantiate(this.zs)).parent = e, c.x = t, c.y = o, c.getComponent("Clip").gotoAndStop(n)
            },
            createPet: function(e, n, t, o) {
                var c = null;
                (c = i.petPool.size() > 0 ? i.petPool.get() : cc.instantiate(this.pet)).parent = e, c.x = t, c.y = o, c.getComponent("Clip").gotoAndStop(n)
            }
        }), cc._RF.pop()
    }, {
        Advertisement_API: "Advertisement_API",
        GameConfig: "GameConfig",
        SoundManager: "SoundManager"
    }],
    SoundManager: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "97784mcJodP4o0Jo435midx", "SoundManager");
        var i = {
            audioEngine: cc.audioEngine,
            soundEnabled: !0,
            _music: {
                id: -1,
                loop: !1,
                volume: 1
            },
            _effect: {
                volume: 1,
                pauseCache: cc.js.createMap(!0)
            },
            setSoundEnabled: function(e) {
                this.soundEnabled = e
            },
            getSoundEnabled: function() {
                return this.soundEnabled
            },
            pauseSound: function() {
                this.soundEnabled && (this.soundEnabled = !1, this.audioEngine.pause(this._music.id), this.stopAllEffects())
            },
            resumeSound: function() {
                this.soundEnabled || (this.soundEnabled = !0, this.audioEngine.resume(this._music.id))
            },
            stopSound: function() {
                this.soundEnabled = !1, this.audioEngine.stopAll()
            },
            playMusic: function(e, n, t) {
                if (!this.soundEnabled) return -1;
                var i = this._music;
                return t || -1 === i.id ? (this.audioEngine.stop(i.id), i.id = this.audioEngine.play(e, n, i.volume)) : this.isMusicPlaying() || this.resumeMusic(), i.loop = n, i.id
            },
            stopMusic: function() {
                this.audioEngine.stop(this._music.id)
            },
            pauseMusic: function() {
                return this.audioEngine.pause(this._music.id), this._music.id
            },
            resumeMusic: function() {
                return this.soundEnabled && this.audioEngine.resume(this._music.id), this._music.id
            },
            getMusicVolume: function() {
                return this._music.volume
            },
            setMusicVolume: function(e) {
                var n = this._music;
                return n.volume = e, this.audioEngine.setVolume(n.id, n.volume), n.volume
            },
            isMusicPlaying: function() {
                return this.audioEngine.getState(this._music.id) === this.audioEngine.AudioState.PLAYING
            },
            playEffect: function(e, n) {
                if (!this.soundEnabled) return -1;
                var t = this.audioEngine.play(e, n || !1, this._effect.volume);
                return n && isNaN(this._effect.pauseCache[t]) && (this._effect.pauseCache[t] = t), t
            },
            setEffectsVolume: function(e) {
                for (var n in this._effect.volume = e, this._effect.pauseCache) this.audioEngine.setVolume(parseInt(n), e)
            },
            getEffectsVolume: function() {
                return this._effect.volume
            },
            pauseEffect: function(e) {
                return this.audioEngine.pause(e)
            },
            pauseAllEffects: function() {
                var e = this._effect;
                for (var n in e.pauseCache) this.audioEngine.getState(parseInt(n)) === this.audioEngine.AudioState.PLAYING && this.audioEngine.pause(parseInt(n))
            },
            resumeEffect: function(e) {
                this.audioEngine.resume(e)
            },
            resumeAllEffects: function() {
                var e = this._effect;
                for (var n in e.pauseCache) this.audioEngine.getState(parseInt(n)) === this.audioEngine.AudioState.PAUSED && this.audioEngine.resume(parseInt(n))
            },
            stopEffect: function(e) {
                return this.audioEngine.stop(e)
            },
            stopAllEffects: function() {
                var e = this._effect;
                for (var n in e.pauseCache) this.audioEngine.stop(parseInt(n)), delete e.pauseCache[n]
            }
        };
        n.exports = i, cc._RF.pop()
    }, {}],
    "use_v2.1.x_cc.Action": [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "9b8ebI5dCJJHZUcS6pKdHsr", "use_v2.1.x_cc.Action"), cc.macro.ROTATE_ACTION_CCW = !0, cc._RF.pop()
    }, {}]
}, {}, ["Advertisement_API", "Canvas", "Clip", "ClockPanel", "GameConfig", "Index", "KeyPanel", "Main", "NodeMove", "SavePanel", "SoundManager", "use_v2.1.x_cc.Action"]);