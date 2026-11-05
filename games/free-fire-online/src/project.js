window.__require = (function e(a, t, n) {
    function i(r, s) {
        if (!t[r]) {
            if (!a[r]) {
                var c = r.split("/");
                if (((c = c[c.length - 1]), !a[c])) {
                    var d = "function" == typeof __require && __require;
                    if (!s && d) return d(c, !0);
                    if (o) return o(c, !0);
                    throw new Error("Cannot find module '" + r + "'");
                }
                r = c;
            }
            var l = (t[r] = { exports: {} });
            a[r][0].call(
                l.exports,
                function (e) {
                    return i(a[r][1][e] || e);
                },
                l,
                l.exports,
                e,
                a,
                t,
                n
            );
        }
        return t[r].exports;
    }
    for (var o = "function" == typeof __require && __require, r = 0; r < n.length; r++) i(n[r]);
    return i;
})(
    {
        ActivityPopup: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "333caQGbP1Ar6WkFo6uBN3w", "ActivityPopup");
                e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        page1: cc.Node,
                        page2: cc.Node,
                        btn1: cc.Node,
                        btn2: cc.Node,
                        activeProgress: cc.ProgressBar,
                        progressBtnGroup: cc.Node,
                        activeUI: cc.Label,
                        curPageIndex: 0,
                        onLineTaskNum: [],
                        activityTaskNum: [],
                        activityCoinNum: [],
                    },
                    onLoad: function () {
                        var e = GameApp.dataManager.globalData.onLineGiftCurNum;
                        (this.onLineTaskNum = [e - 10, e - 5, e]),
                            (this.activityTaskNum = GameApp.dataManager.globalData.activityCurNum.concat()),
                            (this.activityCoinNum = GameApp.dataManager.globalData.activityCurCoin.concat()),
                            this.btn1Click();
                    },
                    onEnable: function () {},
                    btn1Click: function (e) {
                        (1 == this.curPageIndex && e) ||
                            ((this.curPageIndex = 1),
                            e && GameApp.audioManager.playEffect("click"),
                            (this.btn1.children[0].active = !1),
                            (this.btn1.children[1].active = !0),
                            (this.btn2.children[0].active = !0),
                            (this.btn2.children[1].active = !1),
                            (this.page2.active = !1),
                            this.showPage1());
                    },
                    btn2Click: function (e) {
                        (2 == this.curPageIndex && e) ||
                            ((this.curPageIndex = 2),
                            e && GameApp.audioManager.playEffect("click"),
                            (this.btn1.children[0].active = !0),
                            (this.btn1.children[1].active = !1),
                            (this.btn2.children[0].active = !1),
                            (this.btn2.children[1].active = !0),
                            (this.page1.active = !1),
                            this.showPage2());
                    },
                    updateOnlineTask: function () {
                        var e = !0;
                        for (var a in this.page1.children)
                            if (2 != GameApp.dataManager.getOnLineGiftsState(a)) {
                                e = !1;
                                break;
                            }
                        if (e) {
                            (GameApp.dataManager.globalData.onLineGiftCurNum += 15), cc.sys.localStorage.setItem("EatChicken_onLineGiftCurNum", GameApp.dataManager.globalData.onLineGiftCurNum);
                            var t = GameApp.dataManager.globalData.onLineGiftCurNum;
                            (this.onLineTaskNum = [t - 10, t - 5, t]),
                                GameApp.dataManager.setOnLineGiftsState(0, TaskState.Unfinish),
                                GameApp.dataManager.setOnLineGiftsState(1, TaskState.Unfinish),
                                GameApp.dataManager.setOnLineGiftsState(2, TaskState.Unfinish);
                        }
                        this.updateOnLineTaskShow();
                    },
                    updateOnLineTaskShow: function () {
                        for (var e in this.page1.children)
                            (this.page1.children[e].children[0].children[0].getComponent(cc.Label).string = "Thời gian Online" + this.onLineTaskNum[e] + " phút"),
                                (this.page1.children[e].children[0].children[1].children[0].getComponent(cc.Label).string = this.onLineTaskNum[e]);
                        this.updateOnlineTaskBtnShow();
                    },
                    updateOnlineTaskBtnShow: function () {
                        var e = GameApp.dataManager.getOnlineTimeMinute();
                        for (var a in this.page1.children)
                            switch (GameApp.dataManager.getOnLineGiftsState(a)) {
                                case 0:
                                    e >= this.onLineTaskNum[a]
                                        ? (GameApp.dataManager.setOnLineGiftsState(a, TaskState.Canget),
                                          (this.page1.children[a].children[1].children[0].active = !1),
                                          (this.page1.children[a].children[1].children[1].active = !0),
                                          (this.page1.children[a].children[1].children[2].active = !1))
                                        : ((this.page1.children[a].children[1].children[0].active = !0), (this.page1.children[a].children[1].children[1].active = !1), (this.page1.children[a].children[1].children[2].active = !1));
                                    break;
                                case 1:
                                    (this.page1.children[a].children[1].children[0].active = !1), (this.page1.children[a].children[1].children[1].active = !0), (this.page1.children[a].children[1].children[2].active = !1);
                                    break;
                                case 2:
                                    (this.page1.children[a].children[1].children[0].active = !1), (this.page1.children[a].children[1].children[1].active = !1), (this.page1.children[a].children[1].children[2].active = !0);
                            }
                    },
                    updateActivityTask: function () {
                        for (var e in this.activityTaskNum)
                            2 == GameApp.dataManager.getActivityGiftsState(e) &&
                                ((GameApp.dataManager.globalData.activityCurNum[e] += GameApp.dataManager.globalData.activityAddNum[e]),
                                cc.sys.localStorage.setItem("EatChicken_activityCurNum", JSON.stringify(GameApp.dataManager.globalData.activityCurNum)),
                                (GameApp.dataManager.globalData.activityCurCoin[e] += GameApp.dataManager.globalData.activityAddCoin[e]),
                                cc.sys.localStorage.setItem("EatChicken_activityCurCoin", JSON.stringify(GameApp.dataManager.globalData.activityCurCoin)),
                                GameApp.dataManager.setActivityGiftsState(e, TaskState.Unfinish));
                        (this.activityTaskNum = GameApp.dataManager.globalData.activityCurNum.concat()), (this.activityCoinNum = GameApp.dataManager.globalData.activityCurCoin.concat()), this.updateActivityTaskShow();
                    },
                    updateActivityTaskShow: function () {
                        var e = ["Dùng súng ngắn để hạ " + this.activityTaskNum[0] + " mạng", "Hạ " + this.activityTaskNum[1] + " mạng", "Đạt MVP - ăn đùi gà " + this.activityTaskNum[2] + " lần"];
                        for (var a in this.activityTaskNum)
                            (this.page2.children[a].children[0].children[0].getComponent(cc.Label).string = e[a]), (this.page2.children[a].children[0].children[1].children[0].getComponent(cc.Label).string = this.activityCoinNum[a]);
                        this.updateActivityTaskBtnShow();
                    },
                    updateActivityTaskBtnShow: function () {
                        for (var e in this.activityTaskNum)
                            switch (GameApp.dataManager.getActivityGiftsState(e)) {
                                case 0:
                                    GameApp.dataManager.globalData.activityNum[e] >= this.activityTaskNum[e]
                                        ? (GameApp.dataManager.setActivityGiftsState(e, TaskState.Canget),
                                          (this.page2.children[e].children[1].children[0].active = !1),
                                          (this.page2.children[e].children[1].children[1].active = !0),
                                          (this.page2.children[e].children[1].children[2].active = !1))
                                        : ((this.page2.children[e].children[1].children[0].active = !0), (this.page2.children[e].children[1].children[1].active = !1), (this.page2.children[e].children[1].children[2].active = !1));
                                    break;
                                case 1:
                                    (this.page2.children[e].children[1].children[0].active = !1), (this.page2.children[e].children[1].children[1].active = !0), (this.page2.children[e].children[1].children[2].active = !1);
                                    break;
                                case 2:
                                    (this.page2.children[e].children[1].children[0].active = !1), (this.page2.children[e].children[1].children[1].active = !1), (this.page2.children[e].children[1].children[2].active = !0);
                            }
                    },
                    showPage1: function () {
                        this.updateOnlineTask(), (this.page1.active = !0);
                    },
                    showPage2: function () {
                        this.updateActivityTask(), this.updateProgressShow(), this.updateProgressBtnShow(), (this.page2.active = !0);
                    },
                    onLineTaskBtnClick: function (e, a) {
                        var t = parseInt(a);
                        1 == GameApp.dataManager.getOnLineGiftsState(t - 1) &&
                            (GameApp.dataManager.setOnLineGiftsState(t - 1, TaskState.Got),
                            GameApp.dataManager.addCoin(this.onLineTaskNum[t - 1]),
                            GameApp.uiManager.showToast("Nhận *" + this.onLineTaskNum[t - 1]),
                            this.updateOnlineTaskBtnShow());
                    },
                    activityTaskBtnClick: function (e, a) {
                        var t = parseInt(a);
                        1 == GameApp.dataManager.getActivityGiftsState(t - 1) &&
                            (GameApp.dataManager.setActivityGiftsState(t - 1, TaskState.Got),
                            GameApp.dataManager.addCoin(this.activityCoinNum[t - 1]),
                            GameApp.dataManager.addActiveValue(20),
                            this.updateProgressShow(),
                            GameApp.uiManager.showToast("Nhận *" + this.activityCoinNum[t - 1]),
                            this.updateActivityTaskBtnShow());
                    },
                    updateProgressShow: function () {
                        (this.activeProgress.progress = GameApp.dataManager.globalData.activeValue / 120), (this.activeUI.string = GameApp.dataManager.globalData.activeValue);
                    },
                    progressBtnClick: function (e, a) {
                        var t = parseInt(a);
                        if (1 == GameApp.dataManager.globalData.progressGifts[t - 1]) {
                            GameApp.audioManager.playEffect("click");
                            var n = [100, 200, 300, 400];
                            GameApp.dataManager.addCoin(n[t - 1]), GameApp.uiManager.showToast("Nhận *" + n[t - 1]), GameApp.dataManager.setProgressGifts(t - 1, 2), this.updateProgressBtnShow();
                        }
                    },
                    updateProgressBtnShow: function () {
                        var e = [30, 60, 90, 120];
                        for (var a in e) 0 == GameApp.dataManager.globalData.progressGifts[a] && GameApp.dataManager.globalData.activeValue >= e[a] && GameApp.dataManager.setProgressGifts(a, 1);
                        for (var a in this.progressBtnGroup.children)
                            2 == GameApp.dataManager.globalData.progressGifts[a]
                                ? ((this.progressBtnGroup.children[a].children[0].active = !1), (this.progressBtnGroup.children[a].children[1].active = !0))
                                : ((this.progressBtnGroup.children[a].children[0].active = !0), (this.progressBtnGroup.children[a].children[1].active = !1));
                    },
                    closeBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.eventManager.emit(EventNames.EVENT_SHOW_ACTIVITYBTN), this.node.destroy();
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API" },
        ],
        Advertisement_API: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "d1ac1BNU8hD36aoTQOP9Sdi", "Advertisement_API");
                var n = {
                    initVal: function () {
                        (n.recorder = null),
                            (n.currtimer = 0),
                            (n.cstop = !1),
                            (n.videoPath = ""),
                            (n.erroRecNode = null),
                            (n.bannerAd = null),
                            (n.insertAd = null),
                            (n.videoAd = null),
                            (n.reward = !0),
                            (n.rewarda = ""),
                            (n.insert = !0),
                            (n.banner = !0),
                            (n.boolBannerVivo = !0),
                            (n.video = !0),
                            (n.bgmusic = 0),
                            (n.bannersize = !1),
                            (n.mobileVersions = null),
                            (n.boolIp = !1),
                            (n.numCount = 0),
                            (n.nativeAd = null),
                            (n.adId = null),
                            (n.adList = null),
                            (n.native = !0),
                            (n.boolType = "4399"),
                            "oppo" == n.boolType
                                ? ((n.erroNode = cc.find("erroNode")),
                                  (n.nrewardNode = cc.find("nrewardNode")),
                                  (n.resNode = n.nrewardNode.getComponent(cc.Label)),
                                  (n.resNode2 = n.erroNode.getComponent(cc.Label)),
                                  cc.game.addPersistRootNode(n.erroNode),
                                  cc.game.addPersistRootNode(n.nrewardNode),
                                  (n.erroNode.zIndex = 99999),
                                  (n.nrewardNode.zIndex = 99999),
                                  (n.nativeAdn = cc.find("chaping")),
                                  cc.game.addPersistRootNode(n.nativeAdn),
                                  (n.nativeAdn.zIndex = 99999),
                                  (n.htIcon2 = cc.find("Canvas/htIcon2")),
                                  (n.nativeId = "e4b1ac1a33e14cfcaf85a0fa03f0908f"),
                                  (n.chaPingId = "ee52c10f5bf7447ea081804c558ab2b0"),
                                  (n.bannerId = "e0d64d81931d6977214144462a90c10d"),
                                  (n.rewardaId = "9cca3daeebaa40c38941eba21667d69e"))
                                : "tt" == n.boolType
                                ? ((n.erroNode = cc.find("erroNode")),
                                  (n.nrewardNode = cc.find("nrewardNode")),
                                  (n.resNode = n.nrewardNode.getComponent(cc.Label)),
                                  (n.resNode2 = n.erroNode.getComponent(cc.Label)),
                                  cc.game.addPersistRootNode(n.erroNode),
                                  cc.game.addPersistRootNode(n.nrewardNode),
                                  (n.erroNode.zIndex = 99999),
                                  (n.nrewardNode.zIndex = 99999),
                                  (n.shareId = "1845415jc88blb610h"),
                                  (n.chaPingId = "1845415jc88blb610h"),
                                  (n.bannerId = "9mbjm4oeemi990fk17"),
                                  (n.rewardaId = "3oblble0m7dhjk339l"),
                                  (n.errolz = cc.find("errolz")),
                                  cc.game.addPersistRootNode(n.errolz),
                                  (n.errolz.zIndex = 99999),
                                  (n.moreGame = cc.find("moreGame")),
                                  cc.game.addPersistRootNode(n.moreGame),
                                  (n.moreGame.zIndex = 99999),
                                  n.moreGame.on(cc.Node.EventType.TOUCH_START, n.btnMoreGame, n.moreGame),
                                  n.initBannerAdverT(),
                                  n.checkMobileVersion())
                                : "vivo" == n.boolType
                                ? ((n.erroNode = cc.find("erroNode")),
                                  (n.nrewardNode = cc.find("nrewardNode")),
                                  (n.resNode = n.nrewardNode.getComponent(cc.Label)),
                                  (n.resNode2 = n.erroNode.getComponent(cc.Label)),
                                  cc.game.addPersistRootNode(n.erroNode),
                                  cc.game.addPersistRootNode(n.nrewardNode),
                                  (n.erroNode.zIndex = 99999),
                                  (n.nrewardNode.zIndex = 99999),
                                  (n.nativeAdn = cc.find("chaping")),
                                  cc.game.addPersistRootNode(n.nativeAdn),
                                  (n.nativeAdn.zIndex = 99999),
                                  (n.nativeId = "e4b1ac1a33e14cfcaf85a0fa03f0908f"),
                                  (n.chaPingId = "ee52c10f5bf7447ea081804c558ab2b0"),
                                  (n.bannerId = "e0d64d81931d6977214144462a90c10d"),
                                  (n.rewardaId = "9cca3daeebaa40c38941eba21667d69e"))
                                : "qq" == n.boolType
                                ? ((n.erroNode = cc.find("erroNode")),
                                  (n.nrewardNode = cc.find("nrewardNode")),
                                  (n.resNode = n.nrewardNode.getComponent(cc.Label)),
                                  (n.resNode2 = n.erroNode.getComponent(cc.Label)),
                                  cc.game.addPersistRootNode(n.erroNode),
                                  cc.game.addPersistRootNode(n.nrewardNode),
                                  (n.erroNode.zIndex = 99999),
                                  (n.nrewardNode.zIndex = 99999),
                                  (n.boxId = "54be069154ae62587bfc4cfb152c8b5f"),
                                  n.initBannerAdverQ(),
                                  (n.moreGame = cc.find("btn_moreGame")),
                                  cc.game.addPersistRootNode(n.moreGame),
                                  (n.moreGame.zIndex = 99999))
                                : "4399" == n.boolType &&
                                  ((n.erroNode = cc.find("erroNode")),
                                  (n.nrewardNode = cc.find("nrewardNode")),
                                  (n.resNode = n.nrewardNode.getComponent(cc.Label)),
                                  (n.resNode2 = n.erroNode.getComponent(cc.Label)),
                                  cc.game.addPersistRootNode(n.erroNode),
                                  cc.game.addPersistRootNode(n.nrewardNode),
                                  (n.erroNode.zIndex = 99999),
                                  (n.nrewardNode.zIndex = 99999),
                                  (n.canPlayRewardNum = 10),
                                  (n.boolCanPlayReward = !0),
                                  (n.playerName = ""),
                                  (n.boolIsLogin = !1),
                                  n.canPlayReward(),
                                  n.readData4399());
                    },
                    canPlayReward: function () {
                        window.h5api.canPlayAd(function (e) {
                            console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), (n.boolCanPlayReward = e.canPlayAd), (n.canPlayRewardNum = e.remain);
                        });
                    },
                    showADReward: function () {
                        var e = this;
                        n.canPlayReward(),
                            1 == n.boolCanPlayReward || 0 != n.canPlayRewardNum
                                ? window.h5api.playAd(function (a) {
                                      if ((console.log("\u4ee3\u7801:" + a.code + ",\u6d88\u606f:" + a.message), 1e4 === a.code)) {
                                          if ((console.log("\u5f00\u59cb\u64ad\u653e"), "doubleBox" == n.rewarda)) {
                                              switch ((((t = e.OpenBoxPopup.data.getComponent("OpenBoxPopup")).onceClick = !0), GameApp.dataManager.addPlayedVideoNum(), t._itemType)) {
                                                  case 1:
                                                      GameApp.dataManager.addCoin(t._itemNum), GameApp.uiManager.showToast("Nhận *" + 2 * t._itemNum);
                                                      break;
                                                  case 2:
                                                      GameApp.dataManager.addPieceNum(t._pieceIndex, t._itemNum),
                                                          GameApp.uiManager.showToast("Nhận <color=#faf80d>" + GameApp.dataManager.getSkinDataById(t._pieceIndex).name + "</color> mảnh*" + 2 * t._itemNum);
                                              }
                                              GameApp.uiManager.closePopup("OpenBoxPopup");
                                          } else if ("quickly" == n.rewarda) {
                                              ((t = e.GiftPopup.data.getComponent("GiftPopup")).onceClick = !0), GameApp.uiManager.showToast("Tăng tốc"), t.closeBtnClick2(!0);
                                          } else if ("boxCoin" == n.rewarda) {
                                              (t = e.BoxUI.data.getComponent("BoxUI")).showADCoin();
                                          } else if ("boxSkin" == n.rewarda) {
                                              (t = e.BoxUI.data.getComponent("BoxUI")).showADSkin();
                                          } else if ("clock" == n.rewarda) {
                                              (t = e.SkinInfoPopup.data.getComponent("SkinInfoPopup")).showAd();
                                          } else if ("getCoin" == n.rewarda) {
                                              (t = e.GetCoin.getComponent("GetCoin")).showAdReward();
                                          } else if ("getCoinLb" == n.rewarda) {
                                              var t;
                                              (t = e.GiftPopup.data.getComponent("GiftPopup")).showAdReward();
                                          }
                                      } else 10001 === a.code ? console.log("\u64ad\u653e\u7ed3\u675f") : console.log("\u5e7f\u544a\u5f02\u5e38");
                                  })
                                : (n.nrewardNode.stopAllActions(),
                                  (n.nrewardNode.getComponent(cc.Label).string = "Không có Video"),
                                  (n.nrewardNode.active = !0),
                                  (n.nrewardNode.opacity = 255),
                                  n.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.5, 0))));
                    },
                    readData4399: function () {
                        window.h5api.save({
                            type: "read",
                            more: !1,
                            callback: function (e) {
                                1e3 === e.code ? console.log("\u5b58\u6863\u4fe1\u606f\uff1a", e.data) : console.log(e.msg);
                            },
                        });
                    },
                    writeData4399: function () {
                        window.h5api.save({
                            type: "write",
                            more: !1,
                            title: "\u6863\u4f4d1",
                            data: "\u6863\u4f4d1\u7684\u6570\u636e",
                            callback: function (e) {
                                1e3 === e.code ? console.log("\u4fdd\u5b58\u6210\u529f") : console.log(e.msg);
                            },
                        });
                    },
                    getPlayerName: function () {
                        (n.boolIsLogin = null),
                            (n.playerName = ""),
                            (n.boolIsLogin = window.h5api.isLogin()),
                            1 == n.boolIsLogin &&
                                window.h5api.login(function (e) {
                                    n.playerName = e.userName;
                                });
                    },
                    conductRecording: function () {
                        (n.recorder = tt.getGameRecorderManager()),
                            n.recorder.onStart(function (e) {
                                n.cstop = !1;
                            }),
                            n.recorder.start({ duration: 300 }),
                            n.resNode.scheduleOnce(function () {
                                n.cstop = !0;
                            }, 4.5),
                            (n.currtimer = 0);
                    },
                    onSRecorde: function () {
                        null != n.recorder &&
                            (n.recorder.stop(),
                            n.recorder.onStop(function (e) {
                                n.cstop
                                    ? ((n.cstop = !1), (n.videoPath = e.videoPath), (n.errolz.getComponent(cc.Label).string = "Thời gian ghi âm quá ngắn"))
                                    : ((n.errolz.getComponent(cc.Label).string = "Thời gian ghi âm quá ngắn"),
                                      (n.errolz.opacity = 255),
                                      (n.errolz.active = !0),
                                      n.errolz.runAction(
                                          cc.sequence(
                                              cc.delayTime(1),
                                              cc.callFunc(function () {
                                                  n.errolz.opacity = 0;
                                              })
                                          )
                                      ));
                            }));
                    },
                    shareSRecorde: function () {
                        if (n.videoPath) {
                            if ("Không có video phát lại" == n.errolz.getComponent(cc.Label).string)
                                return (
                                    n.errolz.stopAllActions(),
                                    (n.errolz.opacity = 255),
                                    void n.errolz.runAction(
                                        cc.sequence(
                                            cc.delayTime(1),
                                            cc.callFunc(function () {
                                                n.errolz.opacity = 0;
                                            })
                                        )
                                    )
                                );
                            n.recorder.clipVideo({
                                path: n.videoPath,
                                timeRange: [60, 0],
                                success: function (e) {
                                    console.log(e.videoPath),
                                        tt.shareAppMessage({
                                            channel: "video",
                                            templateId: "c154a0p346l77if06h",
                                            extra: { videoPath: e.videoPath },
                                            success: function () {
                                                n.errolz.getComponent(cc.Label).string = "Không có video phát lại";
                                            },
                                            fail: function (e) {
                                                n.errolz.getComponent(cc.Label).string = "Không có video phát lại";
                                            },
                                        });
                                },
                                fail: function (e) {
                                    n.errolz.getComponent(cc.Label).string = "Không có video phát lại";
                                },
                            });
                        }
                    },
                    initBannerAdverT: function () {
                        var e = cc.view.getFrameSize();
                        null != n.bannerAd && (n.bannerAd.destroy(), (n.bannerAd = null)),
                            (n.bannerAd = tt.createBannerAd({ adUnitId: n.bannerId, style: { width: 175 } })),
                            n.bannerAd.onResize(function (a) {
                                console.log(a.width, a.height), (n.bannerAd.style.top = e.height - (a.width / 16) * 9), (n.bannerAd.style.left = (e.width - a.width) / 2);
                            });
                    },
                    bannerAdverT: function () {
                        var e = cc.view.getFrameSize();
                        null != n.bannerAd && (n.bannerAd.destroy(), (n.bannerAd = null), (n.bannersize = !1)),
                            (n.bannerAd = tt.createBannerAd({ adUnitId: n.bannerId, style: { width: 175 } })),
                            n.bannerAd.onResize(function (a) {
                                console.log(a.width, a.height), n.bannersize || ((n.bannersize = !0), (n.bannerAd.style.top = e.height - a.height), (n.bannerAd.style.left = (e.width - a.width) / 2));
                            }),
                            n.bannerAd.onLoad(function () {
                                n.resNode2.scheduleOnce(function () {
                                    n.bannerAd
                                        .show()
                                        .then(function () {
                                            console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f");
                                        })
                                        .catch(function (e) {
                                            console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", e);
                                        });
                                });
                            }, 0.2),
                            n.bannerAd.onError(function (e) {
                                console.log("\u9519\u8bef\uff01", e);
                            });
                    },
                    bannerDestroy: function () {
                        null != n.bannerAd && (n.bannerAd.destroy(), (n.bannerAd = null), (n.bannersize = !1));
                    },
                    videoAdverT: function () {
                        (n.reward = !0),
                            null == n.videoAd && (n.videoAd = tt.createRewardedVideoAd({ adUnitId: n.rewardaId })),
                            n.videoAd
                                .show()
                                .then(function () {
                                    cc.audioEngine.pauseAll(),
                                        n.videoAd.onClose(function (e) {
                                            e.isEnded
                                                ? n.reward &&
                                                  ((n.reward = !1),
                                                  cc.audioEngine.resumeAll(),
                                                  "\u5199\u5165\u5956\u52b1\u7c7b\u578b1" == n.rewarda || n.rewarda,
                                                  n.nrewardNode.stopAllActions(),
                                                  (n.nrewardNode.getComponent(cc.Label).string = "Phần thưởng đã được phát hành"),
                                                  (n.nrewardNode.active = !0),
                                                  (n.nrewardNode.opacity = 255),
                                                  n.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.5, 0))))
                                                : (cc.audioEngine.resumeAll(),
                                                  n.nrewardNode.stopAllActions(),
                                                  (n.nrewardNode.getComponent(cc.Label).string = "Thoát giữa chừng, không nhận được phần thưởng"),
                                                  (n.nrewardNode.active = !0),
                                                  (n.nrewardNode.opacity = 255),
                                                  n.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.5, 0))));
                                        });
                                })
                                .catch(function (e) {
                                    n.nrewardNode.stopAllActions(),
                                        (n.nrewardNode.getComponent(cc.Label).string = "Không có Video"),
                                        (n.nrewardNode.active = !0),
                                        (n.nrewardNode.opacity = 255),
                                        n.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.5, 0)));
                                }),
                            n.videoAd.onError(function (e) {
                                n.nrewardNode.stopAllActions(),
                                    (n.nrewardNode.getComponent(cc.Label).string = "Không có Video"),
                                    (n.nrewardNode.active = !0),
                                    (n.nrewardNode.opacity = 255),
                                    n.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.5, 0)));
                            });
                    },
                    btnShare: function () {
                        tt.shareAppMessage({
                            templateId: n.shareId,
                            success: function () {
                                console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f");
                            },
                            fail: function (e) {
                                console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25");
                            },
                        });
                    },
                    checkMobileVersion: function () {
                        "ios" == tt.getSystemInfoSync().platform && (n.boolIp = !0),
                            tt.getSystemInfo({
                                success: function (e) {
                                    (n.mobileVersions = parseInt(e.SDKVersion.replace(/[^0-9]/gi, ""))),
                                        n.resNode.scheduleOnce(function () {
                                            n.mobileVersions <= 1330 || 1 == n.boolIp ? (n.moreGame.active = !1) : (n.moreGame.active = !0);
                                        }, 0.5);
                                },
                                fail: function (e) {
                                    console.log("\u4fe1\u606f\u83b7\u53d6\u5931\u8d25");
                                },
                            });
                    },
                    btnMoreGame: function () {
                        tt.onMoreGamesModalClose(function (e) {
                            console.log("modal closed", e);
                        }),
                            tt.onNavigateToMiniProgram(function (e) {
                                console.log(e.errCode), console.log(e.errMsg);
                            }),
                            "ios" !== tt.getSystemInfoSync().platform &&
                                tt.showMoreGamesModal({
                                    appLaunchOptions: [{ appId: "ttf527839a6a0d256d" }],
                                    success: function (e) {
                                        console.log("success", e.errMsg);
                                    },
                                    fail: function (e) {
                                        console.log("fail", e.errMsg);
                                    },
                                });
                    },
                    insbannerAdverO: function () {
                        n.insert &&
                            GameConfig.PlayerData.chaPingAdCount < 8 &&
                            ((n.insert = !1),
                            null != n.insertAd && (n.insertAd.destroy(), (n.insertAd = null)),
                            null != n.bannerAd && (n.bannerAd.destroy(), (n.bannerAd = null)),
                            (n.insertAd = qg.createInsertAd({ posId: n.chaPingId })),
                            n.insertAd.load(),
                            n.insertAd.onLoad(function () {
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d"),
                                    n.resNode.scheduleOnce(function () {
                                        n.insert = !0;
                                    }, 60),
                                    GameConfig.PlayerData.chaPingAdCount++,
                                    GameConfig.SavePlayerData(),
                                    n.insertAd.show();
                            }),
                            n.insertAd.onShow(function () {
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a");
                            }),
                            n.insertAd.onError(function (e) {
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"), console.log(e), (n.insert = !0);
                            })),
                            n.showHtIcon2();
                    },
                    bannerAdverO: function () {
                        n.banner &&
                            GameConfig.PlayerData.bannerAdCount < 5 &&
                            ((n.banner = !1),
                            n.resNode.scheduleOnce(function () {
                                n.banner = !0;
                            }, 0.1),
                            null != n.bannerAd && (n.bannerAd.destroy(), (n.bannerAd = null)),
                            null != n.insertAd && (n.insertAd.destroy(), (n.insertAd = null)),
                            (n.bannerAd = qg.createBannerAd({ posId: n.bannerId })),
                            n.bannerAd.show(),
                            n.bannerAd.onShow(function () {
                                console.log(n.bannerAd), console.log("banner \u5e7f\u544a\u663e\u793a");
                            }),
                            n.bannerAd.onHide(function () {
                                GameConfig.PlayerData.bannerAdCount++, GameConfig.SavePlayerData(), n.bannerAd.hide();
                            })),
                            n.showHtIcon2();
                    },
                    destroyAdverO: function () {
                        null != n.insertAd && (n.insertAd.destroy(), (n.insertAd = null)), null != n.bannerAd && (n.bannerAd.destroy(), (n.bannerAd = null));
                    },
                    videoAdverO: function () {
                        (n.reward = !0),
                            (n.videoAd = qg.createRewardedVideoAd({ posId: n.rewardaId })),
                            n.videoAd.load(),
                            n.videoAd.onLoad(function () {
                                console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f"), cc.audioEngine.pauseAll(), n.videoAd.show();
                            }),
                            n.videoAd.onVideoStart(function () {
                                console.log("\u6fc0\u52b1\u89c6\u9891 \u5f00\u59cb\u64ad\u653e");
                            }),
                            n.videoAd.onError(function (e) {
                                console.log(e), n.videoAd.destroy();
                            }),
                            n.videoAd.onClose(function (e) {
                                e.isEnded
                                    ? n.reward &&
                                      ((n.reward = !1),
                                      console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5b8c\u6210\uff0c\u53d1\u653e\u5956\u52b1"),
                                      cc.audioEngine.resumeAll(),
                                      "\u5199\u5165\u5956\u52b1\u7c7b\u578b1" == n.rewarda || n.rewarda)
                                    : (cc.audioEngine.resumeAll(), n.videoAd.destroy());
                            });
                    },
                    nativeIconO: function () {
                        null != n.nativeAd && (n.nativeAd.destroy(), (n.nativeAd = null)),
                            (n.nativeAd = qg.createNativeAd({ adUnitId: n.nativeId })),
                            n.nativeAd.load(),
                            n.nativeAd.onLoad(function (e) {
                                function a() {
                                    n.nativeAd.reportAdClick({ adId: n.adid }), (n.nativeAdn.active = !1);
                                }
                                console.log(e.adList),
                                    (n.adid = e.adList[0].adId),
                                    n.nativeAd.reportAdShow({ adId: n.adid }),
                                    cc.loader.load(e.adList[0].icon, function (e, t) {
                                        var i = new cc.SpriteFrame(t);
                                        (n.nativeAdn.getComponent(cc.Sprite).spriteFrame = i), (n.nativeAdn.active = !0), (n.nativeAdn.height = 110), (n.nativeAdn.width = 110), n.nativeAdn.on(cc.Node.EventType.TOUCH_START, a, n.nativeAdn);
                                    });
                            }),
                            n.nativeAd.onError(function (e) {
                                console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"), console.log(e);
                            });
                    },
                    showHtIcon2: function () {
                        (n.htIcon2.active = !0), (n.htIcon2.children[0].active = !0), (n.htIcon2.children[1].active = !1);
                    },
                    hideHtIcon2: function () {
                        n.htIcon2.active = !1;
                    },
                    bannerAdverV: function () {
                        if (n.boolBannerVivo) {
                            var e = function () {
                                var e = qg.createBannerAd({ posId: n.bannerId, style: {} }).show();
                                e &&
                                    e.catch(function (e) {
                                        console.log("banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25-\u91cd\u8bd5"), console.log(JSON.stringify(e));
                                    });
                            };
                            null != n.bannerAd && (n.bannerAd.destroy(), (n.bannerAd = null)), (n.boolBannerVivo = !1), (n.bannerAd = qg.createBannerAd({ posId: n.bannerId, style: {} }));
                            var a = n.bannerAd.show();
                            a &&
                                a
                                    .then(function () {
                                        console.log("banner\u5e7f\u544a\u5c55\u793a\u6210\u529f"),
                                            n.resNode.scheduleOnce(function () {
                                                n.boolBannerVivo = !0;
                                            }, 10);
                                    })
                                    .catch(function (a) {
                                        switch (a.code) {
                                            case 30003:
                                                console.log(
                                                    "\u65b0\u7528\u62377\u5929\u5185\u4e0d\u80fd\u66dd\u5149Banner\uff0c\u8bf7\u5c06\u624b\u673a\u65f6\u95f4\u8c03\u6574\u4e3a7\u5929\u540e\uff0c\u9000\u51fa\u6e38\u620f\u91cd\u65b0\u8fdb\u5165"
                                                );
                                                break;
                                            case 30009:
                                                console.log("10\u79d2\u5185\u8c03\u7528\u5e7f\u544a\u6b21\u6570\u8d85\u8fc71\u6b21\uff0c10\u79d2\u540e\u518d\u8c03\u7528"),
                                                    setTimeout(function () {
                                                        n.boolBannerVivo = !0;
                                                    }, 1e4);
                                                break;
                                            case 30002:
                                                console.log("\u52a0\u8f7d\u5e7f\u544a\u5931\u8d25\uff0c\u91cd\u65b0\u52a0\u8f7d\u5e7f\u544a"),
                                                    setTimeout(function () {
                                                        e();
                                                    }, 1e4);
                                                break;
                                            default:
                                                console.log("banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25"), console.log(JSON.stringify(a));
                                        }
                                    });
                        }
                    },
                    bannerDestroyV: function () {
                        null != n.bannerAd && (n.bannerAd.destroy(), (n.bannerAd = null));
                    },
                    insertAdverV: function () {
                        n.insert &&
                            ((n.insert = !1),
                            n.resNode.scheduleOnce(function () {
                                var e = qg.createInterstitialAd({ posId: n.chaPingId, style: {} }).show();
                                e &&
                                    e
                                        .then(function () {
                                            console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u6210\u529f");
                                        })
                                        .catch(function (e) {
                                            switch (e.code) {
                                                case 30003:
                                                    console.log(
                                                        "\u65b0\u7528\u62377\u5929\u5185\u4e0d\u80fd\u66dd\u5149Banner\uff0c\u8bf7\u5c06\u624b\u673a\u65f6\u95f4\u8c03\u6574\u4e3a7\u5929\u540e\uff0c\u9000\u51fa\u6e38\u620f\u91cd\u65b0\u8fdb\u5165"
                                                    );
                                                    break;
                                                case 30009:
                                                    console.log("10\u79d2\u5185\u8c03\u7528\u5e7f\u544a\u6b21\u6570\u8d85\u8fc71\u6b21\uff0c10\u79d2\u540e\u518d\u8c03\u7528"),
                                                        setTimeout(function () {
                                                            show();
                                                        }, 1e4);
                                                    break;
                                                case 30002:
                                                    console.log("load\u5e7f\u544a\u5931\u8d25\uff0c\u91cd\u65b0\u52a0\u8f7d\u5e7f\u544a"),
                                                        setTimeout(function () {
                                                            n.boolBannerVivo = !0;
                                                        }, 1e4);
                                                    break;
                                                default:
                                                    console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25"), console.log(JSON.stringify(e));
                                            }
                                        });
                            }, 0.3),
                            n.resNode2.scheduleOnce(function () {
                                n.insert = !0;
                            }, 10));
                    },
                    nativeAdV: function () {
                        if (n.native) {
                            var e = function () {
                                    1 != a && (a++, t.reportAdClick({ adId: n.adId }), (n.nativeAdn.active = !1));
                                },
                                a = 0;
                            (n.native = !1),
                                n.resNode.scheduleOnce(function () {
                                    n.native = !0;
                                }, 10);
                            var t = qg.createNativeAd({ posId: n.nativeId }),
                                i = t.load();
                            i &&
                                i
                                    .then(function () {
                                        console.log("\u539f\u751f\u5e7f\u544a\u8bfb\u53d6\u5b8c\u6210", JSON.stringify(res));
                                    })
                                    .catch(function (e) {
                                        console.log("\u52a0\u8f7d\u5931\u8d25", JSON.stringify(e));
                                    }),
                                t.onLoad(function (a) {
                                    console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210", JSON.stringify(a)),
                                        a &&
                                            a.adList &&
                                            ((n.adId = a.adList[0].adId),
                                            (n.adList = a.adList[0]),
                                            cc.loader.load(a.adList[0].imgUrlList[0], function (a, i) {
                                                var o = new cc.SpriteFrame(i);
                                                (n.nativeAdn.getComponent(cc.Sprite).spriteFrame = o),
                                                    (n.nativeAdn.getChildByName("title").children[0].getComponent(cc.Label).string = n.adList.title),
                                                    (n.nativeAdn.getChildByName("desc").children[0].getComponent(cc.Label).string = n.adList.desc),
                                                    n.nativeAdn.on(cc.Node.EventType.TOUCH_START, e, n.nativeAdn),
                                                    (n.nativeAdn.active = !0),
                                                    t.reportAdShow({ adId: n.adId });
                                            }));
                                });
                        } else n.insertAdverV();
                    },
                    videoAdverV: function () {
                        if (n.video) {
                            (n.video = !1),
                                n.resNode.getComponent(cc.Label).scheduleOnce(function () {
                                    n.video = !0;
                                }, 10),
                                (n.erroNode.active = !0),
                                null == n.videoAd && (n.videoAd = qg.createRewardedVideoAd({ posId: "1ff0008e118a42e7892a6e6c1ebc43da" }));
                            var e = n.videoAd.load();
                            e &&
                                e
                                    .then(function () {
                                        console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
                                    })
                                    .catch(function (e) {
                                        console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", e);
                                    }),
                                n.videoAd.onLoad(function () {
                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5df2\u52a0\u8f7d"), cc.audioEngine.pauseAll();
                                    for (var e = qg.createInnerAudioContext(), a = 0; a < n.soundManager.length; ++a) (e.src = n.soundManager[a]), (e.volume = 0);
                                    var t = n.videoAd.show();
                                    (n.reward = !0),
                                        t &&
                                            t
                                                .then(function () {
                                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f");
                                                })
                                                .catch(function (e) {
                                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25", e);
                                                });
                                }),
                                n.videoAd.onError(function (e) {
                                    console.log("Video lỗi", e), (n.erroNode.opacity = 255), (n.erroNode.getComponent(cc.Label).string = "Video lỗi"), n.erroNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.5, 0)));
                                }),
                                n.videoAd.onClose(function (e) {
                                    if (e && e.isEnded) {
                                        if (n.reward) {
                                            (n.reward = !1), cc.audioEngine.resumeAll();
                                            for (var a = qg.createInnerAudioContext(), t = 0; t < n.soundManager.length; ++t) (a.src = n.soundManager[t]), (a.volume = 1);
                                            "reward1" == n.rewarda || n.rewarda,
                                                (n.erroNode.opacity = 255),
                                                (n.erroNode.getComponent(cc.Label).string = "Phần thưởng đã được phát hành"),
                                                n.erroNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.5, 0)));
                                        }
                                    } else {
                                        console.log("Thoát giữa chừng, không nhận được phần thưởng"), cc.audioEngine.resumeAll();
                                        for (a = qg.createInnerAudioContext(), t = 0; t < n.soundManager.length; ++t) (a.src = n.soundManager[t]), (a.volume = 1);
                                        (n.nrewardNode.active = !0),
                                            (n.nrewardNode.opacity = 255),
                                            (n.nrewardNode.getComponent(cc.Label).string = "Thoát giữa chừng, không nhận được phần thưởng"),
                                            n.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.5, 0)));
                                    }
                                });
                        } else
                            (n.nrewardNode.active = !0),
                                (n.nrewardNode.opacity = 255),
                                (n.nrewardNode.getComponent(cc.Label).string = "Thoát giữa chừng, không nhận được phần thưởng"),
                                n.nrewardNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeTo(0.5, 0)));
                    },
                    nativeIconV: function () {
                        if (n.native) {
                            var e = function () {
                                a.reportAdClick({ adId: n.adId });
                            };
                            (n.native = !1),
                                n.resNode.scheduleOnce(function () {
                                    n.native = !0;
                                }, 2);
                            var a = qg.createNativeAd({ posId: "96caf448612f4ba9aebea117b660ae5b" }),
                                t = a.load();
                            t &&
                                t
                                    .then(function () {
                                        console.log("\u539f\u751f\u5e7f\u544a\u8bfb\u53d6\u5b8c\u6210", JSON.stringify(res));
                                    })
                                    .catch(function (e) {
                                        console.log("\u52a0\u8f7d\u5931\u8d25", JSON.stringify(e));
                                    }),
                                a.onLoad(function (t) {
                                    console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210", JSON.stringify(t)),
                                        t &&
                                            t.adList &&
                                            ((n.adId = t.adList[0].adId),
                                            cc.loader.load(t.adList[0].icon, function (t, i) {
                                                var o = new cc.SpriteFrame(i);
                                                a.reportAdShow({ adId: n.adId }), (n.nativeAdn.getComponent(cc.Sprite).spriteFrame = o), n.nativeAdn.on(cc.Node.EventType.TOUCH_START, e, n.nativeAdn);
                                            }));
                                });
                        }
                    },
                    closeNativeAdV: function () {
                        n.nativeAdn.active = !1;
                    },
                    initBannerAdverQ: function () {
                        var e = cc.view.getFrameSize(),
                            a = qq.getSystemInfoSync();
                        null != n.bannerAd && (n.bannerAd.destroy(), (n.bannerAd = null), (n.bannersize = !1)),
                            "ios" == a.platform
                                ? (n.bannerAd = qq.createBannerAd({ adUnitId: "e0d64d81931d6977214144462a90c10d", style: { top: e.height - 72.8, width: 300 } }))
                                : (n.bannerAd = qq.createBannerAd({ adUnitId: "e0d64d81931d6977214144462a90c10d", style: { left: 0, top: 0, width: 300, height: 168.75 } })),
                            n.bannerAd.onResize(function (t) {
                                n.bannersize ||
                                    (console.log("\u5f00\u59cb\u9002\u914d"),
                                    a.platform,
                                    (n.bannersize = !0),
                                    (n.bannerAd.style.top = e.height - t.height),
                                    (n.bannerAd.style.left = (e.width - t.width) / 2),
                                    console.log("\u9002\u914d\u5b8c\u6bd5"));
                            }),
                            n.bannerAd.onLoad(function () {
                                console.log("QQbanner\u52a0\u8f7d\u5b8c");
                            }),
                            n.bannerAd.onError(function (e) {
                                console.log(e.errMsg), console.log(e.errCode);
                            });
                    },
                    bannerShowQ: function () {
                        n.bannerAd && n.bannerAd.show();
                    },
                    bannerHideQ: function () {
                        n.bannerAd && n.bannerAd.hide();
                    },
                    videoAdverQ: function () {},
                    appBoxQ: function () {
                        null != n.appbox && (n.appbox.destroy(), (n.appbox = null)),
                            (n.appbox = qq.createAppBox({ adUnitId: n.boxId })),
                            n.appbox.load().then(function () {
                                console.log("\u8fdb\u5165\u5c55\u793a\u76d2\u5b50"),
                                    n.appbox.show().then(function () {
                                        console.log("\u76d2\u5b50\u5c55\u793a\u6210\u529f");
                                    });
                            });
                    },
                    insertAdverQ: function () {
                        null != n.insertAd && (n.insertAd.destroy(), (n.insertAd = null)),
                            (n.insertAd = qq.createInterstitialAd({ adUnitId: "8a91240c7d7a5fd5243ca53b55e1924e" })),
                            n.insertAd.load(),
                            n.insertAd.onLoad(function () {
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d"), n.insertAd.show();
                            }),
                            n.insertAd.onError(function (e) {
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"), console.log(e);
                            });
                    },
                };
                (a.exports = n), cc._RF.pop();
            },
            {},
        ],
        AudioManager: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "317f3yV6L9IGI9wd41WD/xL", "AudioManager"),
                    cc.Class({
                        name: "AudioManager",
                        properties: { _musicOn: !0, _musicAudioID: null, _musicName: "", _effectOn: !0, _effectAudioID: null, _Audios: { default: {} } },
                        ctor: function () {
                            cc.game.on(cc.game.EVENT_HIDE, function () {
                                console.log("cc.audioEngine.pauseAll"), cc.audioEngine.pauseAll();
                            }),
                                cc.game.on(cc.game.EVENT_SHOW, function () {
                                    console.log("cc.audioEngine.resumeAll"), cc.audioEngine.resumeAll();
                                });
                            var e = cc.sys.localStorage.getItem("EatChicken_Sound");
                            null != e && "" != e && void 0 != e && ((e = "true" == e), (this._effectOn = e));
                        },
                        getMusicName: function (e) {
                            return cc.AudioClip.raw("resources/audio/music/" + e + ".mp3");
                        },
                        getEffectName: function (e) {
                            return cc.AudioClip.raw("resources/audio/effect/" + e + ".mp3");
                        },
                        playMusic: function (e, a) {
                            var t = this;
                            "" === e ||
                                (this._musicName === e && !a) ||
                                ((this._musicName = e),
                                this._musicOn &&
                                    (cc.audioEngine.stopMusic(this._musicAudioID),
                                    cc.loader.loadRes("audio/music/" + e + ".mp3", cc.AudioClip, function (e, a) {
                                        t._musicAudioID = cc.audioEngine.playMusic(a, !0, !0);
                                    })));
                        },
                        setMusic: function (e) {
                            (this._musicOn = e), cc.sys.localStorage.setItem("MUSIC_ON", "" + e), e ? this.playMusic(this._musicName, !0) : cc.audioEngine.stop(this._musicAudioID);
                        },
                        playEffect: function (e, a, t) {
                            var n = this;
                            this._effectOn &&
                                (1 == t && cc.audioEngine.stop(this._effectAudioID),
                                cc.loader.loadRes("audio/effect/" + e, cc.AudioClip, function (e, i) {
                                    var o = cc.audioEngine.play(i, 2 == t, a || 1);
                                    2 == t && (n._effectAudioID = o);
                                }));
                        },
                        setEffect: function (e) {
                            (this._effectOn = e), cc.sys.localStorage.setItem("EatChicken_Sound", "" + e), e || cc.audioEngine.stop(this._effectAudioID);
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        BoxUI: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "c5af8P64uBNMYGlZief5kOA", "BoxUI");
                var n = e("Utils"),
                    i = e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: { coinUI: cc.Label, needCoinUI: cc.Label, box1CoinRewardUI: cc.Label, box2CoinRewardUI: cc.Label, btn1: cc.Node, btn2: cc.Node, btnCoin1: cc.Node, onceClick: { default: !0, visible: !1 } },
                    onLoad: function () {
                        (this.canvas = cc.find("Canvas").getComponent("Canvas")), (this.getCoin = cc.find("Canvas/getCoin")), GameApp.eventManager.on(EventNames.EVENT_UPDATE_COIN_SHOW, this.updateUIShow.bind(this)), this.updateUIShow();
                    },
                    onEnable: function () {
                        0 == i.canPlayRewardNum ? ((this.btnCoin1.active = !1), (this.btn1.active = !1), (this.btn2.active = !1)) : ((this.btnCoin1.active = !0), (this.btn1.active = !0), (this.btn2.active = !0));
                    },
                    onDestroy: function () {
                        GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_COIN_SHOW);
                    },
                    updateUIShow: function () {
                        (this.coinUI.string = GameApp.dataManager.userData.coinNum),
                            (this.needCoinUI.string = GameApp.dataManager.userData.box1NeedCoinNum),
                            (this.box1CoinRewardUI.string = GameApp.dataManager.userData.box1RewardCoinNum[0] + "~" + GameApp.dataManager.userData.box1RewardCoinNum[1]),
                            (this.box2CoinRewardUI.string = GameApp.dataManager.userData.box2RewardCoinNum[0] + "~" + GameApp.dataManager.userData.box2RewardCoinNum[1]);
                    },
                    update: function () {
                        (this.coinUI.string = GameApp.dataManager.userData.coinNum),
                            (this.needCoinUI.string = GameApp.dataManager.userData.box1NeedCoinNum),
                            (this.box1CoinRewardUI.string = GameApp.dataManager.userData.box1RewardCoinNum[0] + "~" + GameApp.dataManager.userData.box1RewardCoinNum[1]),
                            (this.box2CoinRewardUI.string = GameApp.dataManager.userData.box2RewardCoinNum[0] + "~" + GameApp.dataManager.userData.box2RewardCoinNum[1]);
                    },
                    oneBtnClick: function () {
                        var e = this;
                        this.onceClick &&
                            ((this.onceClick = !1),
                            GameApp.audioManager.playEffect("click"),
                            GameApp.dataManager.reduceCoin(GameApp.dataManager.userData.box1NeedCoinNum)
                                ? GameApp.uiManager.showPopup("OpenBoxPopup", function (a) {
                                      var t = Tools.randomNum(GameApp.dataManager.userData.box1RewardCoinNum[0], GameApp.dataManager.userData.box1RewardCoinNum[1]);
                                      GameApp.dataManager.addCoin(t),
                                          a.getComponent("OpenBoxPopup").init(GameApp.uiManager.boxSkinDataGroup[0], 1, t),
                                          GameApp.dataManager.userData.box1NeedCoinNum < 6400 &&
                                              ((GameApp.dataManager.userData.box1NeedCoinNum *= 2),
                                              (GameApp.dataManager.userData.box1RewardCoinNum[0] = GameApp.dataManager.userData.box1NeedCoinNum / 2),
                                              (GameApp.dataManager.userData.box1RewardCoinNum[1] = 1.5 * GameApp.dataManager.userData.box1NeedCoinNum)),
                                          (e.onceClick = !0);
                                  })
                                : ((this.onceClick = !0), GameApp.uiManager.showToast("Không đủ xu!"), 0 != i.canPlayRewardNum && (this.getCoin.active = !0)));
                    },
                    twoBtnClick: function () {
                        if (window.wx) GameApp.uiManager.showToast("Chưa mở!");
                        else if (this.onceClick) {
                            (this.onceClick = !1), GameApp.audioManager.playEffect("click");
                            var e = this;
                            window.tt
                                ? n.addVideo(
                                      "addVideo",
                                      function () {
                                          (e.onceClick = !0),
                                              GameApp.dataManager.addPlayedVideoNum(),
                                              GameApp.uiManager.showPopup("OpenBoxPopup", function (a) {
                                                  var t = Tools.randomNum(GameApp.dataManager.userData.box2RewardCoinNum[0], GameApp.dataManager.userData.box2RewardCoinNum[1]);
                                                  GameApp.dataManager.addCoin(t),
                                                      a.getComponent("OpenBoxPopup").init(GameApp.uiManager.boxSkinDataGroup[1], 1, t),
                                                      GameApp.dataManager.userData.box2RewardCoinNum[0] < 1400 &&
                                                          ((GameApp.dataManager.userData.box2RewardCoinNum[0] = Math.floor(1.5 * GameApp.dataManager.userData.box2RewardCoinNum[0])),
                                                          (GameApp.dataManager.userData.box2RewardCoinNum[1] = Math.floor(1.5 * GameApp.dataManager.userData.box2RewardCoinNum[1]))),
                                                      (e.onceClick = !0);
                                              });
                                      },
                                      function (a) {
                                          (e.onceClick = !0), a ? GameApp.uiManager.showToast(a) : GameApp.uiManager.showToast("Không xem Video!");
                                      }
                                  )
                                : ((e.onceClick = !0), (i.rewarda = "boxCoin"), e.canvas.showADReward());
                        }
                    },
                    threeBtnClick: function () {
                        if (window.wx) GameApp.uiManager.showToast("Chưa mở!");
                        else if (this.onceClick) {
                            (this.onceClick = !1), GameApp.audioManager.playEffect("click");
                            var e = this;
                            window.tt
                                ? n.addVideo(
                                      "addVideo",
                                      function () {
                                          (e.onceClick = !0), GameApp.dataManager.addPlayedVideoNum();
                                          var a = Tools.randomNum(26, 30);
                                          GameApp.dataManager.addPieceNum(a, 5),
                                              GameApp.uiManager.showPopup("OpenBoxPopup", function (t) {
                                                  t.getComponent("OpenBoxPopup").init(GameApp.uiManager.boxSkinDataGroup[2], 2, 5, a), (e.onceClick = !0);
                                              });
                                      },
                                      function (a) {
                                          (e.onceClick = !0), a ? GameApp.uiManager.showToast(a) : GameApp.uiManager.showToast("Không xem Video!");
                                      }
                                  )
                                : ((e.onceClick = !0), (i.rewarda = "boxSkin"), e.canvas.showADReward());
                        }
                    },
                    coinBtnClick: function () {
                        if (this.onceClick) {
                            (this.onceClick = !1), GameApp.audioManager.playEffect("click");
                            var e = this;
                            window.tt
                                ? n.addVideo(
                                      "addVideo",
                                      function () {
                                          (e.onceClick = !0), GameApp.uiManager.showToast("Nhận 500 xu"), GameApp.dataManager.addCoin(500);
                                      },
                                      function (a) {
                                          (e.onceClick = !0), a ? GameApp.uiManager.showToast(a) : GameApp.uiManager.showToast("Video không có sẵn!");
                                      }
                                  )
                                : ((e.onceClick = !0), 0 != i.canPlayRewardNum ? ((this.btnCoin1.active = !0), (this.getCoin.active = !0)) : ((this.btnCoin1.active = !1), GameApp.uiManager.showToast("Hết lượt hôm nay!")));
                        }
                    },
                    backBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("LoginUI");
                    },
                    showADCoin: function () {
                        var e = this;
                        GameApp.dataManager.addPlayedVideoNum(),
                            GameApp.uiManager.showPopup("OpenBoxPopup", function (a) {
                                var t = Tools.randomNum(GameApp.dataManager.userData.box2RewardCoinNum[0], GameApp.dataManager.userData.box2RewardCoinNum[1]);
                                GameApp.dataManager.addCoin(t),
                                    a.getComponent("OpenBoxPopup").init(GameApp.uiManager.boxSkinDataGroup[1], 1, t),
                                    GameApp.dataManager.userData.box2RewardCoinNum[0] < 1400 &&
                                        ((GameApp.dataManager.userData.box2RewardCoinNum[0] = Math.floor(1.5 * GameApp.dataManager.userData.box2RewardCoinNum[0])),
                                        (GameApp.dataManager.userData.box2RewardCoinNum[1] = Math.floor(1.5 * GameApp.dataManager.userData.box2RewardCoinNum[1]))),
                                    (e.onceClick = !0);
                            }),
                            0 == i.canPlayRewardNum ? ((this.btn1.active = !1), (this.btn2.active = !1)) : ((this.btn1.active = !0), (this.btn2.active = !0));
                    },
                    showADSkin: function () {
                        var e = this;
                        GameApp.dataManager.addPlayedVideoNum();
                        var a = Tools.randomNum(26, 30);
                        GameApp.dataManager.addPieceNum(a, 5),
                            GameApp.uiManager.showPopup("OpenBoxPopup", function (t) {
                                t.getComponent("OpenBoxPopup").init(GameApp.uiManager.boxSkinDataGroup[2], 2, 5, a), (e.onceClick = !0);
                            }),
                            0 == i.canPlayRewardNum ? ((this.btn1.active = !1), (this.btn2.active = !1)) : ((this.btn1.active = !0), (this.btn2.active = !0));
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", Utils: "Utils" },
        ],
        Bullet: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "72ba1bMe1VOy63ITcS26/28", "Bullet"),
                    cc.Class({
                        extends: cc.Component,
                        properties: {
                            _belongTag: -1,
                            _belongName: "",
                            gunData: { default: {} },
                            _pbc: cc.PhysicsBoxCollider,
                            _doFly: !1,
                            _flyDir: { default: cc.v2(0, 0) },
                            _flySpeed: 0,
                            _maxRange: 500,
                            _curRange: 0,
                            _power: 0,
                            _isCrit: !1,
                            _onceExec: !0,
                            bulletAtlas: cc.SpriteAtlas,
                        },
                        onLoad: function () {
                            this._pbc = this.node.getComponent(cc.PhysicsBoxCollider);
                        },
                        init: function (e, a, t, n) {
                            (this.gunData = e), (this._power = a), (this._isCrit = t);
                            var i = this.gunData.weaponid;
                            i > 1100 && (i -= 100),
                                (this.getComponent(cc.Sprite).spriteFrame = this.bulletAtlas.getSpriteFrame(i + 1e3)),
                                (this._flySpeed = this.gunData.speed),
                                (this._maxRange = this.gunData.range),
                                (this._pbc.size = new cc.size(60, 30)),
                                (this._pbc.enabled = !0),
                                (this._doFly = !0);
                        },
                        update: function (e) {
                            this._doFly
                                ? ((this.node.x += this._flyDir.x * this._flySpeed * e),
                                  (this.node.y += this._flyDir.y * this._flySpeed * e),
                                  (this._curRange += this._flyDir.mag() * e * 1e3),
                                  this._curRange > this._maxRange && ((1005 != this.gunData.weaponid && 1105 != this.gunData.weaponid) || ((this._pbc.size = new cc.size(120, 120)), this._pbc.apply()), (this._doFly = !1)))
                                : this.doAnim();
                        },
                        doAnim: function () {
                            var e = this;
                            if (this._onceExec) {
                                (this._onceExec = !1),
                                    this.node.runAction(
                                        cc.sequence(
                                            cc.delayTime(0.1),
                                            cc.callFunc(function () {
                                                e._pbc.enabled = !1;
                                            })
                                        )
                                    );
                                var a = this.getComponent(cc.Sprite),
                                    t = 1;
                                this.node.runAction(
                                    cc
                                        .sequence(
                                            cc.callFunc(function () {
                                                var n = e.gunData.weaponid;
                                                n > 1100 && (n -= 100);
                                                var i = e.bulletAtlas.getSpriteFrame(n + 1e3 + "_" + t);
                                                null != i ? ((a.spriteFrame = i), ++t) : e.node.destroy();
                                            }),
                                            cc.delayTime(0.1)
                                        )
                                        .repeatForever()
                                );
                            }
                        },
                        onBeginContact: function (e, a, t) {
                            t.tag != this._belongTag &&
                                (t.tag == Tags.collider || t.tag == Tags.player || t.tag >= Tags.enemy) &&
                                ((1005 != this.gunData.weaponid && 1105 !== this.gunData.weaponid) || ((this._pbc.size = new cc.size(120, 120)), this._pbc.apply()), (this._doFly = !1));
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        Canvas: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "06e2fAIar1N1acx3vc1iK9k", "Canvas");
                e("Utils");
                var n = e("Advertisement_API"),
                    i = e("GameConfig");
                cc.Class({
                    extends: cc.Component,
                    properties: { OpenBoxPopup: cc.Prefab, GiftPopup: cc.Prefab, BoxUI: cc.Prefab, GetCoin: cc.Node, SkinInfoPopup: cc.Prefab },
                    onLoad: function () {
                        i.Init(), i.GetPlayerData();
                        var e = new Date().getDate(),
                            a = new Date().getMonth();
                        0 == i.PlayerData.recordDay
                            ? ((i.PlayerData.recordDay = e), (i.PlayerData.recordMonth = a), (i.PlayerData.bannerAdCount = 0), (i.PlayerData.chaPingAdCount = 0))
                            : (e == i.PlayerData.recordDay && a == i.PlayerData.recordMonth) || ((i.PlayerData.bannerAdCount = 0), (i.PlayerData.chaPingAdCount = 0), (i.PlayerData.recordDay = e), (i.PlayerData.recordMonth = a)),
                            i.SavePlayerData(),
                            this.adapterScreen(),
                            this._initPanel(),
                            this._monitorScreen();
                    },
                    start: function () {
                        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT), cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                    },
                    onEnable: function () {
                        console.log("-----------");
                    },
                    showADReward: function () {
                        var e = this;
                        n.canPlayReward(),
                            (1 != n.boolCanPlayReward && 0 == n.canPlayRewardNum) ||
                                window.h5api.playAd(function (a) {
                                    if ((console.log("\u4ee3\u7801:" + a.code + ",\u6d88\u606f:" + a.message), 1e4 === a.code)) {
                                        if ((console.log("\u5f00\u59cb\u64ad\u653e"), "doubleBox" == n.rewarda)) {
                                            switch ((((t = e.OpenBoxPopup.data.getComponent("OpenBoxPopup")).onceClick = !0), GameApp.dataManager.addPlayedVideoNum(), t._itemType)) {
                                                case 1:
                                                    GameApp.dataManager.addCoin(t._itemNum), GameApp.uiManager.showToast("Nhận *" + 2 * t._itemNum);
                                                    break;
                                                case 2:
                                                    GameApp.dataManager.addPieceNum(t._pieceIndex, t._itemNum),
                                                        GameApp.uiManager.showToast("Nhận <color=#faf80d>" + GameApp.dataManager.getSkinDataById(t._pieceIndex).name + "</color> mảnh *" + 2 * t._itemNum);
                                            }
                                            GameApp.uiManager.closePopup("OpenBoxPopup");
                                        } else if ("quickly" == n.rewarda) {
                                            ((t = e.GiftPopup.data.getComponent("GiftPopup")).onceClick = !0), GameApp.uiManager.showToast("Được tăng tốc"), t.closeBtnClick2(!0);
                                        } else if ("boxCoin" == n.rewarda) {
                                            (t = e.BoxUI.data.getComponent("BoxUI")).showADCoin();
                                        } else if ("boxSkin" == n.rewarda) {
                                            (t = e.BoxUI.data.getComponent("BoxUI")).showADSkin();
                                        } else if ("clock" == n.rewarda) {
                                            (t = e.SkinInfoPopup.data.getComponent("SkinInfoPopup")).showAd();
                                        } else if ("getCoin" == n.rewarda) {
                                            (t = e.GetCoin.getComponent("GetCoin")).showAdReward();
                                        } else if ("getCoinLb" == n.rewarda) {
                                            var t;
                                            (t = e.GiftPopup.data.getComponent("GiftPopup")).showAdReward();
                                        }
                                    } else 10001 === a.code ? console.log("\u64ad\u653e\u7ed3\u675f") : console.log("\u5e7f\u544a\u5f02\u5e38");
                                });
                    },
                    adapterScreen: function () {
                        var e = cc.find("Canvas").getComponent(cc.Canvas);
                        cc.sys.isMobile ? ((e.fitWidth = !1), (e.fitHeight = !0)) : ((e.fitWidth = !0), (e.fitHeight = !1));
                    },
                    _monitorScreen: function () {
                        var e = this;
                        window.onresize = function () {
                            e._initPanel();
                        };
                    },
                    _initPanel: function () {
                        (i.sizeWidth = cc.winSize.width),
                            (i.sizeHeight = cc.winSize.height),
                            (i.ratioWidth = i.sizeWidth / 1280),
                            (i.ratio = i.sizeHeight / 720),
                            i.ratioWidth > 1 && (i.ratioWidth = 1),
                            (this.node.width = i.sizeWidth),
                            (this.node.height = i.sizeHeight);
                        for (var e = 7; e < this.node.childrenCount; ++e) this.node.children[e].setScale(i.ratioWidth, i.ratioWidth);
                        this.node.children[2].setScale(1.3, 1.3);
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", GameConfig: "GameConfig", Utils: "Utils" },
        ],
        ConfigManager: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "1bd72n2n1JOz4R303K0b7TD", "ConfigManager");
                var n = { Skin: "data/skins.json" },
                    i = {
                        allConfigs: {},
                        loadConfig: function (e, a) {
                            var t = n[e];
                            cc.loader.loadRes(
                                t,
                                function (t, n) {
                                    if (t) return console.log("\u52a0\u8f7d\u51fa\u9519\u4e86"), void console.error(t.message || t);
                                    var i = n;
                                    (this.allConfigs[e] = i), a && a();
                                }.bind(this)
                            );
                        },
                        loadAllConfig: function (e) {
                            for (var a in n) n.hasOwnProperty(a) && this.loadConfig(a, e);
                        },
                        getAllConfig: function () {
                            return this.allConfigs;
                        },
                    };
                (a.exports = i), cc._RF.pop();
            },
            {},
        ],
        Consts: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "fcba3fxLE5O3oI0GoUWFYYj", "Consts"), (window.WS_SERVERS = { TEST: "ws://192.168.25.242:19999/server", INSPECT: "", RELEASE: "" });
                (window.SERVER = "TEST"),
                    (window.VERSION = "1.0.0"),
                    (window.NameColor = ["#0cf60b", "#09b2eb", "#fc01fc", "#fb7f03", "#ec0807", "#faf80d"]),
                    (window.Tags = { collider: 0, player: 1, item: 2, bullet: 3, empty: 4, box: 5, boom: 6, enemy: 10 }),
                    (window.ItemType = { weapon: 0, item: 1 }),
                    (window.EquipType = { damage: 0, def: 1, speed: 2, crit: 3 }),
                    (window.ItemAttr = [
                        [
                            { attr: 0.1, des: "Sát thương +10%" },
                            { attr: 0.2, des: "Sát thương +20%" },
                            { attr: 0.3, des: "Sát thương +30%" },
                        ],
                        [
                            { attr: 0.1, des: "Miễn thương +10%" },
                            { attr: 0.2, des: "Miễn thương +20%" },
                            { attr: 0.3, des: "Miễn thương +30%" },
                        ],
                        [
                            { attr: 0.1, des: "Tốc độ +10%" },
                            { attr: 0.2, des: "Tốc độ +20%" },
                            { attr: 0.3, des: "Tốc độ +30%" },
                        ],
                        [
                            { attr: 1, des: "Chí mạng +10%" },
                            { attr: 2, des: "Chí mạng +20%" },
                            { attr: 3, des: "Chí mạng +30%" },
                        ],
                    ]),
                    (window.TaskState = { Unfinish: 0, Canget: 1, Got: 2 }),
                    (window.EventNames = {
                        EVENT_UPDATE_SHOP_CHOOSED_SHOW: "EVENT_UPDATE_SHOP_CHOOSED_SHOW",
                        EVENT_UPDATE_COIN_SHOW: "EVENT_UPDATE_COIN_SHOW",
                        EVENT_UPDATE_AMO_SHOW: "EVENT_UPDATE_AMO_SHOW",
                        EVENT_PLAYER_SHOOT: "EVENT_PLAYER_SHOOT",
                        EVENT_PLAYER_RELOAD: "EVENT_PLAYER_RELOAD",
                        EVENT_UPDATE_TOPBAR_SHOW: "EVENT_UPDATE_TOPBAR_SHOW",
                        EVENT_SHOW_GUN_UI: "EVENT_SHOW_GUN_UI",
                        EVENT_SHOW_ALLROLENUM_UI: "EVENT_SHOW_ALLROLENUM_UI",
                        EVENT_SHOW_RELOAD_UI: "EVENT_SHOW_RELOAD_UI",
                        EVENT_PICKUP_WEAPON: "EVENT_PICKUP_WEAPON",
                        EVENT_AIM: "EVENT_AIM",
                        EVENT_GAME_BEGIN: "EVENT_GAME_BEGIN",
                        EVENT_UPDATE_MIPMAP_PLAYER: "EVENT_UPDATE_MIPMAP_PLAYER",
                        EVENT_THEGAMESTART: "EVENT_THEGAMESTART",
                        EVENT_UPDATE_RANK_SHOW: "EVENT_UPDATE_RANK_SHOW",
                        EVENT_UPDATE_GAS_SHOW: "EVENT_UPDATE_GAS_SHOW",
                        EVENT_FLASH: "EVENT_FLASH",
                        EVENT_RESUME_HEALTH: "EVENT_RESUME_HEALTH",
                        EVENT_DROP_BOX: "EVENT_DROP_BOX",
                        EVENT_NOTYFY_BOX_DISMISS: "EVENT_NOTYFY_BOX_DISMISS",
                        EVENT_NOTYFY_BOOM_DISMISS: "EVENT_NOTYFY_BOOM_DISMISS",
                        EVENT_SHOW_BOXITEM: "EVENT_SHOW_BOXITEM",
                        EVENT_UPDATE_STAR_SHOW: "EVENT_UPDATE_STAR_SHOW",
                        EVENT_NOTIFY_ENEMY_MAPBOX: "EVENT_NOTIFY_ENEMY_MAPBOX",
                        EVENT_SHOW_ACTIVITYBTN: "EVENT_SHOW_ACTIVITYBTN",
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        1: [
            function (e, a, t) {
                function n() {
                    (this._events = this._events || {}), (this._maxListeners = this._maxListeners || void 0);
                }
                function i(e) {
                    return "function" == typeof e;
                }
                function o(e) {
                    return "number" == typeof e;
                }
                function r(e) {
                    return "object" == typeof e && null !== e;
                }
                function s(e) {
                    return void 0 === e;
                }
                (a.exports = n),
                    (n.EventEmitter = n),
                    (n.prototype._events = void 0),
                    (n.prototype._maxListeners = void 0),
                    (n.defaultMaxListeners = 10),
                    (n.prototype.setMaxListeners = function (e) {
                        if (!o(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                        return (this._maxListeners = e), this;
                    }),
                    (n.prototype.emit = function (e) {
                        var a, t, n, o, c, d;
                        if ((this._events || (this._events = {}), "error" === e && (!this._events.error || (r(this._events.error) && !this._events.error.length)))) {
                            if ((a = arguments[1]) instanceof Error) throw a;
                            var l = new Error('Uncaught, unspecified "error" event. (' + a + ")");
                            throw ((l.context = a), l);
                        }
                        if (s((t = this._events[e]))) return !1;
                        if (i(t))
                            switch (arguments.length) {
                                case 1:
                                    t.call(this);
                                    break;
                                case 2:
                                    t.call(this, arguments[1]);
                                    break;
                                case 3:
                                    t.call(this, arguments[1], arguments[2]);
                                    break;
                                default:
                                    (o = Array.prototype.slice.call(arguments, 1)), t.apply(this, o);
                            }
                        else if (r(t)) for (o = Array.prototype.slice.call(arguments, 1), n = (d = t.slice()).length, c = 0; c < n; c++) d[c].apply(this, o);
                        return !0;
                    }),
                    (n.prototype.addListener = function (e, a) {
                        var t;
                        if (!i(a)) throw TypeError("listener must be a function");
                        return (
                            this._events || (this._events = {}),
                            this._events.newListener && this.emit("newListener", e, i(a.listener) ? a.listener : a),
                            this._events[e] ? (r(this._events[e]) ? this._events[e].push(a) : (this._events[e] = [this._events[e], a])) : (this._events[e] = a),
                            r(this._events[e]) &&
                                !this._events[e].warned &&
                                (t = s(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) &&
                                t > 0 &&
                                this._events[e].length > t &&
                                ((this._events[e].warned = !0),
                                console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
                                "function" == typeof console.trace && console.trace()),
                            this
                        );
                    }),
                    (n.prototype.on = n.prototype.addListener),
                    (n.prototype.once = function (e, a) {
                        if (!i(a)) throw TypeError("listener must be a function");
                        var t = !1;
                        function n() {
                            this.removeListener(e, n), t || ((t = !0), a.apply(this, arguments));
                        }
                        return (n.listener = a), this.on(e, n), this;
                    }),
                    (n.prototype.removeListener = function (e, a) {
                        var t, n, o, s;
                        if (!i(a)) throw TypeError("listener must be a function");
                        if (!this._events || !this._events[e]) return this;
                        if (((o = (t = this._events[e]).length), (n = -1), t === a || (i(t.listener) && t.listener === a))) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, a);
                        else if (r(t)) {
                            for (s = o; s-- > 0; )
                                if (t[s] === a || (t[s].listener && t[s].listener === a)) {
                                    n = s;
                                    break;
                                }
                            if (n < 0) return this;
                            1 === t.length ? ((t.length = 0), delete this._events[e]) : t.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, a);
                        }
                        return this;
                    }),
                    (n.prototype.removeAllListeners = function (e) {
                        var a, t;
                        if (!this._events) return this;
                        if (!this._events.removeListener) return 0 === arguments.length ? (this._events = {}) : this._events[e] && delete this._events[e], this;
                        if (0 === arguments.length) {
                            for (a in this._events) "removeListener" !== a && this.removeAllListeners(a);
                            return this.removeAllListeners("removeListener"), (this._events = {}), this;
                        }
                        if (i((t = this._events[e]))) this.removeListener(e, t);
                        else if (t) for (; t.length; ) this.removeListener(e, t[t.length - 1]);
                        return delete this._events[e], this;
                    }),
                    (n.prototype.listeners = function (e) {
                        return this._events && this._events[e] ? (i(this._events[e]) ? [this._events[e]] : this._events[e].slice()) : [];
                    }),
                    (n.prototype.listenerCount = function (e) {
                        if (this._events) {
                            var a = this._events[e];
                            if (i(a)) return 1;
                            if (a) return a.length;
                        }
                        return 0;
                    }),
                    (n.listenerCount = function (e, a) {
                        return e.listenerCount(a);
                    });
            },
            {},
        ],
        DailyPopup: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "3aba0X4OkJLfae48HsS/dWc", "DailyPopup");
                e("Utils"), e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: { dailyGroup: cc.Node, dailyGotNum: { default: 0, type: cc.number, visible: !1 }, closeBtn: cc.Node, onceClick: !0 },
                    onLoad: function () {
                        (this.dailyGotNum = cc.sys.localStorage.getItem("EatChicken_dailyGotNum")),
                            null == this.dailyGotNum || void 0 == this.dailyGotNum || "" == this.dailyGotNum
                                ? ((this.dailyGotNum = 0), cc.sys.localStorage.setItem("EatChicken_dailyGotNum", 0))
                                : (this.dailyGotNum = parseInt(this.dailyGotNum)),
                            this.initShow();
                        var e = cc.sequence(cc.delayTime(3), cc.scaleTo(0.3, 1));
                        this.closeBtn.runAction(e),
                            GameApp.dataManager.globalData.curDailyGot
                                ? ((this.dailyGroup.children[this.dailyGotNum - 1].getComponent(cc.Button).interactable = !1), (this.dailyGroup.children[this.dailyGotNum - 1].children[0].active = !0))
                                : (this.dailyGroup.children[this.dailyGotNum].children[0].active = !0);
                    },
                    onEnable: function () {},
                    initShow: function () {
                        if (this.dailyGotNum > 0) for (var e = 0; e < this.dailyGotNum; e++) this.dailyGroup.children[e].children[1].runAction(cc.scaleTo(0.5, 1).easing(cc.easeBackOut()));
                    },
                    getBtnClick: function (e, a) {
                        var t = parseInt(a);
                        if (!GameApp.dataManager.globalData.curDailyGot && this.dailyGotNum == t - 1) {
                            GameApp.audioManager.playEffect("click");
                            (this.onceClick = !0),
                                (this.dailyGroup.children[this.dailyGotNum].getComponent(cc.Button).interactable = !1),
                                (GameApp.dataManager.globalData.curDailyGot = !0),
                                cc.sys.localStorage.setItem("EatChicken_dailyGotState", !0),
                                this.dailyGroup.children[this.dailyGotNum].children[1].runAction(
                                    cc.sequence(
                                        cc.scaleTo(0.5, 1).easing(cc.easeBackOut()),
                                        cc.callFunc(
                                            function () {
                                                var e = [1, 2, 1, 2, 1, 2, 1],
                                                    a = [50, 5, 50, 5, 100, 5, 500];
                                                1 == e[this.dailyGotNum]
                                                    ? (GameApp.uiManager.showToast("Nhận *" + a[this.dailyGotNum]), GameApp.dataManager.addCoin(a[this.dailyGotNum]))
                                                    : 2 == e[this.dailyGotNum] &&
                                                      (GameApp.uiManager.showToast("Nhận <color=#faf80d>" + GameApp.dataManager.getSkinDataById(27).name + "</color> mảnh Skin *" + a[this.dailyGotNum]),
                                                      GameApp.dataManager.addPieceNum(27, a[this.dailyGotNum])),
                                                    this.dailyGotNum++,
                                                    7 == this.dailyGotNum && (this.dailyGotNum = 0),
                                                    cc.sys.localStorage.setItem("EatChicken_dailyGotNum", this.dailyGotNum);
                                            }.bind(this),
                                            this
                                        )
                                    )
                                );
                        }
                    },
                    closeBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), this.node.destroy();
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", Utils: "Utils" },
        ],
        DataManager: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "8ad44fXOFxB4J34LEZZE1b8", "DataManager"),
                    (window.RecordState = cc.Enum({ READY: 0, RECORD: 1, PAUSE: 2 })),
                    cc.Class({
                        name: "DataManager",
                        properties: { MD5Code: null, userData: { default: {} } },
                        ctor: function () {
                            (this.userData = {
                                isFirstPlay: !0,
                                playerName: "Chiến Binh",
                                coinNum: 0,
                                choosedSkinId: 1,
                                unLockedSkinIdArr: [1],
                                playedVideoNum: 0,
                                havePieceNum: { 26: 0, 27: 0, 28: 0, 29: 0, 30: 0 },
                                box1NeedCoinNum: 100,
                                box1RewardCoinNum: [50, 150],
                                box2RewardCoinNum: [250, 500],
                                baseHp: 100,
                                baseDamage: 1,
                                baseCrit: 0,
                                baseSpeed: 200,
                                baseCd: 0,
                                baseDef: 0,
                                baseRecovery: 1,
                                alDieNum: 0,
                                allKillNum: 0,
                                allPlayNum: 0,
                                winNum: 0,
                                top5Num: 0,
                                winRate: 0,
                                kd: 0,
                                avgRank: 0,
                                mostKill: 0,
                                avgLifeTime: 0,
                            }),
                                (this.globalData = {
                                    days: 1,
                                    curDailyGot: !1,
                                    shootInterval: 0,
                                    reloadInterval: 0,
                                    maxAmoNum: 20,
                                    curAmoNum: 20,
                                    maxHp: 100,
                                    curHp: 100,
                                    curDamage: 0,
                                    curCrit: 0,
                                    curSpeed: 200,
                                    curCd: 0,
                                    curDef: 0,
                                    curRecovery: 0,
                                    allRoleArr: [],
                                    allGunArr: [],
                                    allBoxArr: [],
                                    isInGame: !1,
                                    inGameKillNum: [],
                                    gasConfig: null,
                                    getItemAttrArr: [
                                        { rank: 0, item: null },
                                        { rank: 0, item: null },
                                        { rank: 0, item: null },
                                        { rank: 0, item: null },
                                    ],
                                    equipItemAttr: [0, 0, 0, 0],
                                    lifeTime: 0,
                                    onLineTime: 0,
                                    onLineGifts: [2, 2, 2],
                                    onLineGiftCurNum: 0,
                                    activeValue: 0,
                                    activityGifts: [2, 2, 2],
                                    activityNum: [0, 0, 0],
                                    activityCurNum: [0, 0, 0],
                                    activityCurCoin: [0, 0, 0],
                                    progressGifts: [0, 0, 0, 0],
                                    activityAddNum: [1, 3, 1],
                                    activityAddCoin: [50, 100, 100],
                                    playerNameArr: [
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                        "Chiến Binh",
                                    ],
                                    recordPath: null,
                                    recordTimer: 0,
                                    recordState: RecordState.READY,
                                }),
                                (this.jsonData = { SkinsData: [], WeaponData: [], RobotName: [] });
                        },
                        initSomeAttr: function () {
                            var e = this;
                            cc.game.on(cc.game.EVENT_HIDE, function () {
                                console.log("\u8fdb\u5165\u540e\u53f0\u524d\u5b58\u50a8\u4e86\u6570\u636e"), cc.sys.localStorage.setItem("EatChicken_onLineTime", parseInt(e.globalData.onLineTime));
                            });
                            var a = cc.sys.localStorage.getItem("EatChicken_dailyGotState");
                            this.globalData.curDailyGot = "true" == a || 1 == a;
                            var t = cc.sys.localStorage.getItem("EatChicken_onLineTime");
                            null == t || void 0 == t || "" == t ? ((t = 0), cc.sys.localStorage.setItem("EatChicken_onLineTime", 0)) : (t = parseInt(t)), (this.globalData.onLineTime = t);
                            var n = cc.sys.localStorage.getItem("EatChicken_onLineGifts");
                            null == n || void 0 == n || "" == n ? ((n = [2, 2, 2]), cc.sys.localStorage.setItem("EatChicken_onLineGifts", JSON.stringify(n))) : (n = JSON.parse(n)), (this.globalData.onLineGifts = n);
                            var i = cc.sys.localStorage.getItem("EatChicken_onLineGiftCurNum");
                            null == i || void 0 == i || "" == i ? ((i = 0), cc.sys.localStorage.setItem("EatChicken_onLineGiftCurNum", 0)) : (i = parseInt(i)), (this.globalData.onLineGiftCurNum = i);
                            var o = cc.sys.localStorage.getItem("EatChicken_activeValue");
                            null == o || void 0 == o || "" == o ? ((o = 0), cc.sys.localStorage.setItem("EatChicken_activeValue", 0)) : (o = parseInt(o)), (this.globalData.activeValue = o);
                            var r = cc.sys.localStorage.getItem("EatChicken_activityGifts");
                            null == r || void 0 == r || "" == r ? ((r = [2, 2, 2]), cc.sys.localStorage.setItem("EatChicken_activityGifts", JSON.stringify(r))) : (r = JSON.parse(r)), (this.globalData.activityGifts = r);
                            var s = cc.sys.localStorage.getItem("EatChicken_activityNum");
                            null == s || void 0 == s || "" == s ? ((s = [0, 0, 0]), cc.sys.localStorage.setItem("EatChicken_activityNum", JSON.stringify(s))) : (s = JSON.parse(s)), (this.globalData.activityNum = s);
                            var c = cc.sys.localStorage.getItem("EatChicken_activityCurNum");
                            null == c || void 0 == c || "" == c ? ((c = [0, 0, 0]), cc.sys.localStorage.setItem("EatChicken_activityCurNum", JSON.stringify(c))) : (c = JSON.parse(c)), (this.globalData.activityCurNum = c);
                            var d = cc.sys.localStorage.getItem("EatChicken_activityCurCoin");
                            null == d || void 0 == d || "" == d ? ((d = [0, 0, 0]), cc.sys.localStorage.setItem("EatChicken_activityCurCoin", JSON.stringify(d))) : (d = JSON.parse(d)), (this.globalData.activityCurCoin = d);
                            var l = cc.sys.localStorage.getItem("EatChicken_progressGifts");
                            null == l || void 0 == l || "" == l ? ((l = [0, 0, 0, 0]), cc.sys.localStorage.setItem("EatChicken_progressGifts", JSON.stringify(l))) : (l = JSON.parse(l)),
                                (this.globalData.progressGifts = l),
                                (this.globalData.allRoleArr = []),
                                (this.globalData.allGunArr = []),
                                (this.globalData.allBoxArr = []),
                                (this.globalData.inGameKillNum = []),
                                (this.globalData.gasConfig = null),
                                (this.globalData.getItemAttrArr = [
                                    { rank: 0, item: null },
                                    { rank: 0, item: null },
                                    { rank: 0, item: null },
                                    { rank: 0, item: null },
                                ]),
                                (this.globalData.equipItemAttr = [0, 0, 0, 0]),
                                (this.globalData.maxHp = this.globalData.curHp = this.userData.baseHp),
                                (this.globalData.curDamage = this.userData.baseDamage),
                                (this.globalData.curCrit = this.userData.baseCrit),
                                (this.globalData.curSpeed = this.userData.baseSpeed),
                                (this.globalData.curCd = this.userData.baseCd),
                                (this.globalData.curDef = this.userData.baseDef),
                                (this.globalData.curRecovery = this.userData.baseRecovery);
                        },
                        setPlayerName: function (e) {
                            (this.userData.playerName = e), this.save();
                        },
                        addCoin: function (e) {
                            (this.userData.coinNum += e), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_COIN_SHOW), this.save();
                        },
                        reduceCoin: function (e) {
                            var a = this.userData.coinNum - e;
                            return !(a < 0) && ((this.userData.coinNum = a), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_COIN_SHOW), this.save(), !0);
                        },
                        unLockSkin: function (e) {
                            -1 == this.userData.unLockedSkinIdArr.indexOf(e) && this.userData.unLockedSkinIdArr.push(e);
                        },
                        addPieceNum: function (e, a) {
                            var t = this;
                            this.userData.havePieceNum[e] += a;
                            [26, 27, 28, 29, 30].forEach(function (e) {
                                t.userData.havePieceNum[e] >= t.getSkinDataById(e).needpiece && t.unLockSkin(e);
                            }),
                                this.save();
                        },
                        addPlayedVideoNum: function () {
                            var e = this;
                            this.userData.playedVideoNum++;
                            [21, 22, 23, 24, 25].forEach(function (a) {
                                e.userData.playedVideoNum >= e.getSkinDataById(a).needgem && e.unLockSkin(a);
                            }),
                                this.save();
                        },
                        getSkinDataById: function (e) {
                            return this.jsonData.SkinsData[e - 1];
                        },
                        setChoosedSkinId: function (e) {
                            e > 30 && (e = 1), e < 1 && (e = 30), (this.userData.choosedSkinId = e), this.addSkinAttr(), this.save();
                        },
                        addSkinAttr: function () {
                            var e = this.getSkinDataById(this.userData.choosedSkinId);
                            (this.globalData.maxHp = this.globalData.curHp = this.userData.baseHp + Math.floor(this.userData.baseHp * (e.att_hpmax / 100))),
                                (this.globalData.curDamage = this.userData.baseDamage + e.att_damage / 100),
                                (this.globalData.curCrit = this.userData.baseCrit + e.att_crit / 10),
                                (this.globalData.curSpeed = this.userData.baseSpeed + Math.floor(this.userData.baseSpeed * (e.att_speed / 100))),
                                (this.globalData.curCd = this.userData.baseCd + e.att_cd / 100),
                                (this.globalData.curDef = this.userData.baseDef + e.att_defense / 100),
                                (this.globalData.curRecovery = this.userData.baseRecovery + e.att_recovery / 100);
                        },
                        getChoosedSkinId: function () {
                            return this.userData.choosedSkinId;
                        },
                        reduceHp: function (e) {
                            var a = this.globalData.curHp - e;
                            return a <= 0
                                ? ((this.globalData.curHp = 0), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_TOPBAR_SHOW), !1)
                                : ((this.globalData.curHp = a), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_TOPBAR_SHOW), !0);
                        },
                        getResumeHealthNum: function () {
                            return 10 * this.globalData.curRecovery;
                        },
                        getSkillCD: function () {
                            return 10 * (1 - this.globalData.curCd);
                        },
                        addHp: function (e) {
                            var a = this.globalData.curHp + e;
                            a > this.globalData.maxHp ? (this.globalData.curHp = this.globalData.maxHp) : (this.globalData.curHp = a), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_TOPBAR_SHOW);
                        },
                        reduceAmo: function () {
                            var e = this.globalData.curAmoNum - 1;
                            return e < 0
                                ? ((this.globalData.curAmoNum = 0), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_AMO_SHOW), !1)
                                : ((this.globalData.curAmoNum = e), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_AMO_SHOW), !0);
                        },
                        reloadAmo: function () {
                            (this.globalData.curAmoNum = this.globalData.maxAmoNum), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_AMO_SHOW);
                        },
                        addKillNum: function (e, a) {
                            return (
                                1 == e ? (e = 0) : (e -= 9),
                                this.globalData.inGameKillNum[e]._killNum++,
                                (this.globalData.inGameKillNum[e]._belongName = a),
                                GameApp.eventManager.emit(EventNames.EVENT_UPDATE_RANK_SHOW),
                                this.globalData.inGameKillNum[e]._killNum
                            );
                        },
                        equipBoxItem: function (e) {
                            var a = this.globalData.getItemAttrArr[e].rank + 1;
                            (this.globalData.getItemAttrArr[e] = { rank: a, item: ItemAttr[e][a - 1] }),
                                (this.globalData.equipItemAttr[e] = this.globalData.getItemAttrArr[e].item.attr),
                                GameApp.eventManager.emit(EventNames.EVENT_UPDATE_STAR_SHOW);
                        },
                        getEquipItemAttr: function (e) {
                            return this.globalData.equipItemAttr[e];
                        },
                        getEquipShowAttr: function () {
                            var e = [];
                            for (var a in this.globalData.getItemAttrArr) {
                                0 == this.globalData.getItemAttrArr[a].rank ? e.push(null) : e.push(this.globalData.getItemAttrArr[a]);
                            }
                            return e;
                        },
                        getOnLineGiftsState: function (e) {
                            return this.globalData.onLineGifts[e];
                        },
                        getActivityGiftsState: function (e) {
                            return this.globalData.activityGifts[e];
                        },
                        setOnLineGiftsState: function (e, a) {
                            (this.globalData.onLineGifts[e] = a), cc.sys.localStorage.setItem("EatChicken_onLineGifts", JSON.stringify(this.globalData.onLineGifts));
                        },
                        setActivityGiftsState: function (e, a) {
                            (this.globalData.activityGifts[e] = a), cc.sys.localStorage.setItem("EatChicken_activityGifts", JSON.stringify(this.globalData.activityGifts));
                        },
                        getOnlineTimeMinute: function () {
                            var e = Tools.toTimeString2(this.globalData.onLineTime);
                            return Math.floor(60 * e.hour + e.minute);
                        },
                        addActiveValue: function (e) {
                            var a = this.globalData.activeValue + e;
                            a > 120 && (a = 120), (this.globalData.activeValue = a);
                            var t = [30, 60, 90, 120];
                            for (var n in t) 0 == this.globalData.progressGifts[n] && this.globalData.activeValue >= t[n] && this.setProgressGifts(n, 1);
                            cc.sys.localStorage.setItem("EatChicken_activeValue", this.globalData.activeValue);
                        },
                        addActivityNum: function (e, a) {
                            (this.globalData.activityNum[e] += a), cc.sys.localStorage.setItem("EatChicken_activityNum", JSON.stringify(this.globalData.activityNum));
                        },
                        setProgressGifts: function (e, a) {
                            (this.globalData.progressGifts[e] = a), cc.sys.localStorage.setItem("EatChicken_progressGifts", JSON.stringify(this.globalData.progressGifts));
                        },
                        save: function () {
                            cc.sys.localStorage.setItem("EatChicken_UserData", JSON.stringify(this.userData));
                        },
                        changeRecordState: function (e) {
                            this.globalData.recordState = e;
                        },
                        setMD5Code: function (e) {
                            this.MD5Code = e;
                        },
                        getMD5Code: function () {
                            return this.MD5Code;
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        DropBox: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "53d079b9kpBmqvST+YSa7z0", "DropBox"),
                    cc.Class({
                        extends: cc.Component,
                        properties: { boxIndex: 1231231, _showToPlayer: !1, progressBar: cc.ProgressBar, _beginOpen: !1, _hadOpen: !1, _openTimer: 0, _belongTagsArr: [], other: null },
                        onLoad: function () {
                            this._belongTagsArr = [];
                        },
                        init: function (e) {
                            this.boxIndex = e;
                        },
                        update: function (e) {
                            if (!this._hadOpen) {
                                if (this._beginOpen) {
                                    if (((this._openTimer += e), this._openTimer >= 5)) {
                                        if (this._hadOpen) return;
                                        if (((this._hadOpen = !0), GameApp.eventManager.emit(EventNames.EVENT_NOTYFY_BOX_DISMISS, this.boxIndex.toString()), 0 == this._belongTagsArr.length)) return;
                                        -1 != this._belongTagsArr.indexOf(Tags.player) ? GameApp.eventManager.emit(EventNames.EVENT_SHOW_BOXITEM) : this.other && this.other.node.getComponent("Enemy").enemyEquipBoxItem();
                                    }
                                } else (this._openTimer -= e), this._openTimer < 0 && (this._openTimer = 0);
                                this.progressBar.progress = this._openTimer / 5;
                            }
                        },
                        onBeginContact: function (e, a, t) {
                            (t.tag == Tags.player || t.tag >= Tags.enemy) && ((this._beginOpen = !0), -1 == this._belongTagsArr.indexOf(t.tag) && this._belongTagsArr.push(t.tag));
                        },
                        onEndContact: function (e, a, t) {
                            if (t.tag == Tags.player || t.tag >= Tags.enemy) {
                                if (this._openTimer >= 5) {
                                    if (((this.other = t), this._hadOpen)) return;
                                    if (((this._hadOpen = !0), GameApp.eventManager.emit(EventNames.EVENT_NOTYFY_BOX_DISMISS, this.boxIndex.toString()), 0 == this._belongTagsArr.length)) return;
                                    return void (-1 != this._belongTagsArr.indexOf(Tags.player) ? GameApp.eventManager.emit(EventNames.EVENT_SHOW_BOXITEM) : t.node.getComponent("Enemy").enemyEquipBoxItem());
                                }
                                -1 != this._belongTagsArr.indexOf(t.tag) && Tools.removeArray(this._belongTagsArr, t.tag), 0 == this._belongTagsArr.length && (this._beginOpen = !1);
                            }
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        Enemy: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "db4d1xBOmVGm7LWfdofEM+7", "Enemy");
                var n = e("JoystickCommon");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        moveDir: { default: cc.v2(0, 0), displayName: "Move Dir", tooltip: "\u79fb\u52a8\u65b9\u5411" },
                        _speedType: { default: n.SpeedType.STOP, displayName: "Speed Type", type: n.SpeedType, tooltip: "\u901f\u5ea6\u7ea7\u522b" },
                        _moveSpeed: { default: 0, displayName: "Move Speed", tooltip: "\u79fb\u52a8\u901f\u5ea6" },
                        stopSpeed: { default: 0, type: cc.Integer, tooltip: "\u505c\u6b62\u65f6\u901f\u5ea6" },
                        normalSpeed: { default: 200, type: cc.Integer, tooltip: "\u6b63\u5e38\u901f\u5ea6" },
                        fastSpeed: { default: 200, type: cc.Integer, tooltip: "\u6700\u5feb\u901f\u5ea6" },
                        roleAnim: { default: null, type: sp.Skeleton, tooltip: "\u89d2\u8272\u7684Spine\u52a8\u753b\u7ec4\u4ef6" },
                        _gunDir: { default: cc.v2(1, 0) },
                        gunAnim: { default: null, type: sp.Skeleton, tooltip: "\u67aa\u7684Spine\u52a8\u753b\u7ec4\u4ef6" },
                        gunNode: { default: null, type: cc.Node, tooltip: "\u67aa\u8282\u70b9" },
                        _haveGun: !1,
                        _mapNoGun: !1,
                        _mapNoBox: !0,
                        thisName: "",
                        gunData: { default: {} },
                        skinData: { default: {} },
                        _pbc: cc.PhysicsBoxCollider,
                        nameUI: cc.Label,
                        bulletPrefab: cc.Prefab,
                        _choosedSkinId: 0,
                        hpBar: cc.ProgressBar,
                        amoBar: cc.ProgressBar,
                        starNode: cc.Node,
                        _maxHp: 100,
                        _curHp: 100,
                        _shootInterval: 0,
                        _reloadInterval: 0,
                        _maxAmoNum: 20,
                        _curAmoNum: 20,
                        _curDamage: 0,
                        _curCrit: 0,
                        _curSpeed: 200,
                        _curCd: 0,
                        _curDef: 0,
                        _curRecovery: 0,
                        getItemAttrArr: [],
                        equipItemAttr: [],
                        _shootFlag: !1,
                        _shootTimer: 0.3,
                        _reloadFlag: !1,
                        _reloadTimer: 0,
                        lastHitBullet: null,
                        _desTime: 0,
                        _desTime2: 0,
                        _isAim: !1,
                        _aimDir: null,
                        _aimTimer: 0,
                        _aimInterval: 0.1,
                        _isDie: !1,
                        _move: !1,
                        _isProtect: !1,
                        _isBlock: !1,
                        _isGas: !1,
                        _inGasTimer: 0,
                        _inGasInterval: 0.5,
                    },
                    onLoad: function () {
                        (this.getItemAttrArr = [
                            { rank: 0, item: null },
                            { rank: 0, item: null },
                            { rank: 0, item: null },
                            { rank: 0, item: null },
                        ]),
                            (this.equipItemAttr = [0, 0, 0, 0]),
                            GameApp.eventManager.on(EventNames.EVENT_THEGAMESTART, this.theGameStart.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_NOTIFY_ENEMY_MAPBOX, this.notifyMapBox.bind(this)),
                            (this._pbc = this.getComponent(cc.PhysicsBoxCollider));
                    },
                    onEnable: function () {},
                    onDisable: function () {},
                    onDestroy: function () {
                        GameApp.eventManager.removeListener(EventNames.EVENT_THEGAMESTART), GameApp.eventManager.removeListener(EventNames.EVENT_NOTIFY_ENEMY_MAPBOX);
                    },
                    init: function (e, a) {
                        GameApp.dataManager.globalData.isInGame && this.roleProtect(),
                            (this._choosedSkinId = e),
                            (this.skinData = GameApp.dataManager.jsonData.SkinsData[e - 1]),
                            this.addSkinAttr(),
                            this.initNameShow(a),
                            this.initSkinShow(),
                            this.setSpeedType(n.SpeedType.FAST);
                    },
                    addSkinAttr: function () {
                        var e = this.skinData;
                        (this._maxHp = this._curHp = GameApp.dataManager.userData.baseHp + Math.floor(GameApp.dataManager.userData.baseHp * (e.att_hpmax / 100))),
                            (this._curDamage = GameApp.dataManager.userData.baseDamage + e.att_damage / 100),
                            (this._curCrit = GameApp.dataManager.userData.baseCrit + e.att_crit / 10),
                            (this._curSpeed = GameApp.dataManager.userData.baseSpeed + Math.floor(GameApp.dataManager.userData.baseSpeed * (e.att_speed / 100))),
                            (this._curCd = GameApp.dataManager.userData.baseCd + e.att_cd / 100),
                            (this._curDef = GameApp.dataManager.userData.baseDef + e.att_defense / 100),
                            (this._curRecovery = GameApp.dataManager.userData.baseRecovery + e.att_recovery / 100);
                    },
                    roleProtect: function () {
                        (this._isProtect = !0), (this.node.opacity = 0);
                    },
                    theGameStart: function () {
                        (this.node.opacity = 255), (this._isProtect = !1);
                    },
                    notifyMapBox: function () {
                        this._mapNoBox = !1;
                    },
                    enemyEquipBoxItem: function () {
                        for (var e = [0, 1, 2, 3], a = 0; 3 == this.getItemAttrArr[a].rank; ) {
                            if ((Tools.removeArray(e, a), 0 == e.length)) return;
                            a = Tools.getRandomElement(e);
                        }
                        var t = this.getItemAttrArr[a].rank + 1;
                        (this.getItemAttrArr[a] = { rank: t, item: ItemAttr[a][t - 1] }), (this.equipItemAttr[a] = this.getItemAttrArr[a].item.attr), this.updateStarShow();
                    },
                    updateStarShow: function () {
                        for (var e = 0, a = 0; a < 4; a++) e += this.getItemAttrArr[a].rank;
                        if (0 == e) this.starNode.active = !1;
                        else {
                            var t = parseInt((e - 1) / 3),
                                n = e - 3 * t;
                            (this.starNode.children[0].getComponent(cc.Sprite).spriteFrame = GameApp.uiManager.commonAtlas.getSpriteFrame("level_bg_" + (t + 1))),
                                (this.starNode.children[1].getComponent(cc.Sprite).spriteFrame = GameApp.uiManager.commonAtlas.getSpriteFrame("level_star_" + (t + 1) + "_" + n)),
                                (this.starNode.active = !0);
                        }
                    },
                    initNameShow: function (e) {
                        (this.thisName = e), (this.nameUI.string = e), GameApp.dataManager.globalData.isInGame || (this.hpBar.node.active = !1);
                    },
                    initSkinShow: function () {
                        this._choosedSkinId < 21
                            ? ((this.roleAnim.skeletonData = GameApp.uiManager.normalSkinData), this.roleAnim.setSkin(this.skinData.skinname))
                            : (this.roleAnim.skeletonData = GameApp.uiManager.advanceSkinDataGroup[this._choosedSkinId - 21]);
                        var e = this._choosedSkinId < 21 ? ["await"] : ["await_fight_1"];
                        this.roleAnim.setAnimation(0, e[0], !0);
                    },
                    move: function (e) {
                        if (this.moveDir) {
                            var a = 90 - cc.misc.radiansToDegrees(Math.atan2(this.moveDir.y, this.moveDir.x));
                            this.roleAnim.node.scaleX = a > 180 || a < 0 ? -1 : 1;
                            var t = this.node.position.add(this.moveDir.mul(this._moveSpeed * e));
                            this.node.setPosition(t);
                        }
                    },
                    doParser: function (e) {
                        if (((this._desTime -= e), (this._desTime2 -= e), this._isAim))
                            this._desTime2 < 0 && ((this._desTime2 = 1), this._haveGun ? !this._isBlock && this.setDir(this._aimDir) : !this._isBlock && this.setDir(this._aimDir.rotate(180)));
                        else {
                            if (null != GameApp.dataManager.globalData.gasConfig) {
                                var a = cc.v2(GameApp.dataManager.globalData.gasConfig.safePosition).sub(cc.v2(this.node.position)),
                                    t = a.mag();
                                if (GameApp.dataManager.globalData.gasConfig.gasCircle > 0 && t > GameApp.dataManager.globalData.gasConfig.gasCircle / 2)
                                    return (this._inGasTimer -= e), this._inGasTimer < 0 && ((this._inGasTimer = this._inGasInterval), this.beDamage(5, -1)), (this._isGas = !0), void (!this._isBlock && this.setDir(a.normalize()));
                                this._isGas = !1;
                            } else this._isGas = !1;
                            if (this._desTime < 0)
                                if (this._isGas || this._mapNoGun || this._haveGun)
                                    if (!this._isGas && GameApp.dataManager.globalData.isInGame && !this._mapNoBox && this._haveGun) (this._desTime = 0.3), this.searchBox();
                                    else {
                                        this._desTime = Tools.randomNum(1, 3);
                                        var n = cc.v2(0, 1).rotate(cc.misc.radiansToDegrees(Tools.randomNum(0, 360)));
                                        !this._isBlock && this.setDir(n);
                                    }
                                else (this._desTime = 0.3), !this._isBlock && this.searchGun();
                        }
                    },
                    searchGun: function () {
                        for (var e = GameApp.dataManager.globalData.allGunArr.concat(), a = 1e6, t = -1, n = 0; n < e.length; n++) {
                            var i = cc.v2(e[n].position).sub(cc.v2(this.node.position)).mag();
                            if (i < a) {
                                if (null != GameApp.dataManager.globalData.gasConfig)
                                    if (cc.v2(GameApp.dataManager.globalData.gasConfig.safePosition).sub(cc.v2(e[n].position)).mag() > GameApp.dataManager.globalData.gasConfig.gasCircle / 2) continue;
                                (a = i), (t = n);
                            }
                        }
                        var o = null;
                        if (-1 == t) this._mapNoGun = !0;
                        else {
                            var r = e[t];
                            o = cc.v2(r.position).sub(cc.v2(this.node.position)).normalize();
                        }
                        this.setDir(o);
                    },
                    searchBox: function () {
                        for (var e = GameApp.dataManager.globalData.allBoxArr.concat(), a = 1e6, t = -1, n = 0; n < e.length; n++) {
                            var i = cc.v2(e[n].position).sub(cc.v2(this.node.position)).mag();
                            if (i < 10) return void this.setDir(cc.v2(0, 0));
                            if (i < a) {
                                if (null != GameApp.dataManager.globalData.gasConfig)
                                    if (cc.v2(GameApp.dataManager.globalData.gasConfig.safePosition).sub(cc.v2(e[n].position)).mag() > GameApp.dataManager.globalData.gasConfig.gasCircle / 2) continue;
                                (a = i), (t = n);
                            }
                        }
                        var o = cc.v2(0, 0);
                        if (-1 == t) this._mapNoBox = !0;
                        else {
                            var r = e[t];
                            o = cc.v2(r.position).sub(cc.v2(this.node.position)).normalize();
                        }
                        this.setDir(o);
                    },
                    setSpeedType: function (e) {
                        if (!this._isDie && this._speedType != e) {
                            this._speedType = e;
                            var a = this._choosedSkinId < 21 ? ["await", "run2", "run2"] : ["await_fight_1", "run", "run"];
                            this.roleAnim.setAnimation(0, a[e], !0);
                        }
                    },
                    setDir: function (e) {
                        this._isDie || (e && 0 == e.mag() ? this.setSpeedType(n.SpeedType.STOP) : this.setSpeedType(n.SpeedType.FAST), (this.moveDir = e), this._isAim || this.setGunDir(e));
                    },
                    setGunDir: function (e) {
                        if ((null == e && (e = this.moveDir), (this._gunDir = e), (this._aimDir = e), this._haveGun)) {
                            this.gunNode.rotation = -cc.misc.radiansToDegrees(Math.atan2(e.y, e.x));
                            var a = 90 - this.gunNode.rotation;
                            this.gunNode.scaleY = a > 180 || a < 0 ? -1 : 1;
                        }
                    },
                    update: function (e) {
                        if (!this._isDie) {
                            switch ((this.doParser(e), this._speedType)) {
                                case n.SpeedType.STOP:
                                    this._moveSpeed = this.stopSpeed;
                                    break;
                                case n.SpeedType.NORMAL:
                                    this._moveSpeed = this.normalSpeed;
                                    break;
                                case n.SpeedType.FAST:
                                    this._moveSpeed = this._curSpeed + Math.floor(this._curSpeed * this.equipItemAttr[EquipType.speed]);
                            }
                            this.move(e),
                                this._isProtect ||
                                    ((this._aimTimer -= e),
                                    this._aimTimer < 0 && ((this._aimTimer = this._aimInterval), this.aimToNearest()),
                                    this._isAim && ((this._shootTimer -= e), this._shootTimer < 0 && !this._reloadFlag && ((this._shootTimer = this._shootInterval), this.shoot())),
                                    this._reloadFlag && ((this._reloadTimer -= e), this._reloadFlag && this._reloadTimer < 0 && ((this._reloadFlag = !1), this.reloadAmo())));
                        }
                    },
                    lateUpdate: function (e) {},
                    aimToNearest: function () {
                        this._haveGun || (this.gunData.range = 400);
                        var e = GameApp.dataManager.globalData.allRoleArr.concat();
                        Tools.removeArray(e, this.getComponent("Enemy"));
                        for (var a = 1e6, t = -1, n = 0; n < e.length; n++) {
                            var i = cc.v2(e[n].node.position).sub(cc.v2(this.node.position)).mag();
                            i < a && i < 1.4 * this.gunData.range && ((a = i), (t = n));
                        }
                        var o = null;
                        if (-1 == t) this._isAim = !1;
                        else {
                            var r = e[t].node;
                            (o = cc.v2(r.position).sub(cc.v2(this.node.position)).normalize()), (this._isAim = !0);
                        }
                        this.setGunDir(o);
                    },
                    shoot: function () {
                        if (this._haveGun) {
                            if (this.reduceAmo()) {
                                this.gunAnim.setAnimation(0, "attack_" + this.gunData.skinname, !1);
                                var e = Math.ceil(this.gunData.power * (this._curDamage + this.equipItemAttr[EquipType.damage])),
                                    a = !1;
                                if ((Tools.isCrit(this._curCrit + this.equipItemAttr[EquipType.crit]) && ((e *= 2), (a = !0)), 1002 == this.gunData.weaponid)) {
                                    GameApp.uiManager.isInMapSight(this.node) && GameApp.audioManager.playEffect("shot_shoot", 0.3, !1);
                                    var t = cc.instantiate(this.bulletPrefab),
                                        n = cc.instantiate(this.bulletPrefab),
                                        i = cc.instantiate(this.bulletPrefab),
                                        o = this.node.parent.parent.convertToNodeSpaceAR(this.gunNode.children[0].convertToWorldSpaceAR(cc.v2(0, 0)));
                                    (t.parent = n.parent = i.parent = this.node.parent.parent),
                                        t.setPosition(o),
                                        n.setPosition(o),
                                        i.setPosition(o),
                                        (t.rotation = this.gunNode.rotation),
                                        (n.rotation = this.gunNode.rotation + 30),
                                        (i.rotation = this.gunNode.rotation - 30);
                                    var r = cc.v2(this._gunDir),
                                        s = t.getComponent("Bullet");
                                    (s._belongTag = this._pbc.tag), (s._belongName = this.thisName), (s._flyDir = r), s.init(this.gunData, e, a);
                                    var c = n.getComponent("Bullet");
                                    (c._belongTag = this._pbc.tag), (c._belongName = this.thisName), (c._flyDir = r.rotate(-cc.misc.degreesToRadians(30))), c.init(this.gunData, e, a);
                                    var d = i.getComponent("Bullet");
                                    (d._belongTag = this._pbc.tag), (d._belongName = this.thisName), (d._flyDir = r.rotate(-cc.misc.degreesToRadians(-30))), d.init(this.gunData, e, a);
                                } else {
                                    1003 == this.gunData.weaponid
                                        ? GameApp.uiManager.isInMapSight(this.node) && GameApp.audioManager.playEffect("charge_shoot", 0.3, !1)
                                        : 1005 == this.gunData.weaponid && GameApp.uiManager.isInMapSight(this.node) && GameApp.audioManager.playEffect("missile_shoot", 0.3, !1);
                                    var l = cc.instantiate(this.bulletPrefab),
                                        p = this.node.parent.parent.convertToNodeSpaceAR(this.gunNode.children[0].convertToWorldSpaceAR(cc.v2(0, 0)));
                                    (l.parent = this.node.parent.parent), l.setPosition(p), (l.rotation = this.gunNode.rotation);
                                    var h = l.getComponent("Bullet");
                                    (h._belongTag = this._pbc.tag), (h._belongName = this.thisName), (h._flyDir = this._gunDir), h.init(this.gunData, e, a);
                                }
                                this.updateAmoShow();
                            } else this.reload();
                            0 == this._curAmoNum && this.reload();
                        }
                    },
                    reduceAmo: function () {
                        var e = this._curAmoNum - 1;
                        return e < 0 ? ((this._curAmoNum = 0), this.updateAmoShow(), !1) : ((this._curAmoNum = e), this.updateAmoShow(), !0);
                    },
                    reload: function () {
                        this._haveGun &&
                            (this._reloadFlag ||
                                (GameApp.uiManager.isInMapSight(this.node) && GameApp.audioManager.playEffect("reload", 0.6),
                                this.gunAnim.setAnimation(0, "reload_" + this.gunData.skinname, !1),
                                (this._reloadTimer = this._reloadInterval),
                                (this._reloadFlag = !0)));
                    },
                    reloadAmo: function () {
                        (this._curAmoNum = this._maxAmoNum), this.updateAmoShow();
                    },
                    updateAmoShow: function () {
                        this.amoBar.progress = this._curAmoNum / this._maxAmoNum;
                    },
                    updateHpShow: function () {
                        this.hpBar.progress = this._curHp / this._maxHp;
                    },
                    equipWeapon: function (e) {
                        GameApp.uiManager.isInMapSight(this.node) && GameApp.audioManager.playEffect("pick_item", 0.6),
                            (this.gunData = GameApp.dataManager.jsonData.WeaponData[e]),
                            (this._shootInterval = this.gunData.shootdelay),
                            (this._reloadInterval = this.gunData.reloaddelay),
                            (this._maxAmoNum = this.gunData.clipnum),
                            this.reloadAmo(),
                            (this.gunNode.active = !0),
                            (this.gunAnim.skeletonData = e < 3 ? GameApp.uiManager.gunSkinDataGroup[0] : GameApp.uiManager.gunSkinDataGroup[1]),
                            this.gunAnim.setSkin(this.gunData.skinname),
                            (this._haveGun = !0),
                            this.setGunDir(this.moveDir);
                    },
                    getItem: function () {},
                    onBeginContact: function (e, a, t) {
                        var n = this;
                        if (!this._isDie && a.tag != Tags.empty)
                            if (t.tag == Tags.item) {
                                var i = t.node.getComponent("GroundItem");
                                if (i.itemType._type == ItemType.weapon) {
                                    var o = i.itemType._kind;
                                    this._haveGun || (Tools.removeArray(GameApp.dataManager.globalData.allGunArr, t.node), this.equipWeapon(o), t.node.destroy());
                                } else i.itemType._type == ItemType.item && this.getItem();
                            } else if (t.tag == Tags.bullet) {
                                if (!GameApp.dataManager.globalData.isInGame) return;
                                var r = t.node.getComponent("Bullet");
                                if (r._belongTag == a.tag) return;
                                if (t.node == this.lastHitBullet) return;
                                (this.lastHitBullet = t.node), this.beDamage(r._power, r._belongTag, r._belongName, r._isCrit, r.gunData.weaponid);
                            } else
                                t.tag == Tags.collider
                                    ? ((this._isBlock = !0),
                                      this.moveDir && this.moveDir.rotateSelf(cc.misc.degreesToRadians(Tools.randomNum(90, 180))),
                                      this.scheduleOnce(function () {
                                          n._isBlock = !1;
                                      }, 0.5))
                                    : t.tag == Tags.boom && this.beDamage(999, -2);
                    },
                    reduceHp: function (e) {
                        var a = this._curHp - e;
                        return a <= 0 ? ((this._curHp = 0), this.updateHpShow(), !1) : ((this._curHp = a), this.updateHpShow(), !0);
                    },
                    beDamage: function (e, a, t, n, i) {
                        var o = this;
                        if (
                            (GameApp.uiManager.isInMapSight(this.node) &&
                                GameApp.uiManager.showGameObject(
                                    "InfoLabel",
                                    function (a) {
                                        var t = a.parent.convertToNodeSpaceAR(o.node.convertToWorldSpaceAR(cc.v2(0.5, 0.5)));
                                        a.setPosition(t);
                                        var i = Math.ceil(e * o._curDef) + Math.ceil(e * o.equipItemAttr[EquipType.def]),
                                            r = "<color=red>-" + (e -= i) + "</color>";
                                        n && (r = "<color=red>\u66b4\u51fb-" + e + "</color>"), i && (r += "<color=#0fffff>\u51cf\u4f24" + i + "</color>"), (a.getComponent(cc.RichText).string = "<b>" + r + "</b>");
                                        var s = cc.v2(Tools.randomNum(60, 100), Tools.randomNum(60, 100)),
                                            c = [t, cc.v2(t.x + s.x - 20, t.y + s.y + 20), t.add(s)],
                                            d = cc.sequence(
                                                cc.spawn(cc.fadeIn(0.2), cc.scaleTo(0.3, 1.5), cc.bezierTo(0.3, c)),
                                                cc.delayTime(0.5),
                                                cc.fadeOut(0.3),
                                                cc.callFunc(function () {
                                                    a.destroy();
                                                })
                                            );
                                        a.runAction(d);
                                    },
                                    this.node.parent.parent
                                ),
                            this.reduceHp(e))
                        );
                        else {
                            if (
                                (GameApp.uiManager.isInMapSight(this.node) && GameApp.audioManager.playEffect("maleDeath", 0.5),
                                (this.node.parent = GameApp.uiManager.getGame("GameMap").getChildByName("DeadObjectNode")),
                                (this._pbc.enabled = !1),
                                (this._isDie = !0),
                                -1 == a)
                            )
                                GameApp.uiManager.showToast(this.thisName + " \u88ab\u6bd2\u51fa\u5c40");
                            else if (-2 == a) GameApp.uiManager.showToast(this.thisName + " \u88ab\u8f70\u70b8\u51fa\u5c40");
                            else {
                                var r = GameApp.dataManager.addKillNum(a, t);
                                if ((t == GameApp.dataManager.userData.playerName && (t = "<color=#0fffff>" + t + "</color>"), r > 1)) {
                                    var s = r > 5 ? 5 : r;
                                    GameApp.audioManager.playEffect("kill" + s, 0.5), GameApp.uiManager.showToast(t, null, r);
                                } else GameApp.uiManager.showToast(t + " \u51fb\u6740\u4e86 " + this.thisName);
                                1 == a && (cc.log("\u73a9\u5bb6\u6740\u4eba\u4e86"), GameApp.dataManager.addActivityNum(1, 1), 1102 == i && GameApp.dataManager.addActivityNum(0, 1));
                            }
                            if (this._haveGun) {
                                var c = GameApp.uiManager.gameRoot.children[0].getComponent("GameMap");
                                GameApp.uiManager.showGameObject("GroundItem", function (e) {
                                    var a = c.allGunNode.convertToNodeSpaceAR(o.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                    (e.parent = c.allGunNode), e.setPosition(a);
                                    var t = { _type: ItemType.weapon, _kind: Tools.getIndex(GameApp.dataManager.jsonData.WeaponData, o.gunData) };
                                    e.getComponent("GroundItem").init(t), GameApp.dataManager.globalData.allGunArr.push(e);
                                });
                            }
                            this.node.stopActionByTag(1);
                            var d = this._choosedSkinId < 21 ? ["dead"] : ["dead2"];
                            this.roleAnim.setAnimation(0, d[0], !1),
                                (this.gunNode.active = !1),
                                Tools.removeArray(GameApp.dataManager.globalData.allRoleArr, this.node.getComponent("Enemy")),
                                GameApp.eventManager.emit(EventNames.EVENT_SHOW_ALLROLENUM_UI);
                        }
                    },
                }),
                    cc._RF.pop();
            },
            { JoystickCommon: "JoystickCommon" },
        ],
        EventManager: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "00aeeK/GotGDrrLxg+sYtgT", "EventManager");
                var n = e("events").EventEmitter;
                cc.Class({
                    name: "EventManager",
                    properties: { _eventEmitter: n },
                    ctor: function () {
                        (this._eventEmitter = new n()), this._eventEmitter.setMaxListeners(0);
                    },
                    on: function (e, a) {
                        this._eventEmitter.on(e, a);
                    },
                    once: function (e, a) {
                        this._eventEmitter.once(e, a);
                    },
                    emit: function (e, a, t) {
                        a && t ? this._eventEmitter.emit(e, a, t) : a ? this._eventEmitter.emit(e, a) : this._eventEmitter.emit(e);
                    },
                    removeListener: function (e, a) {
                        if (a) return this._eventEmitter.removeListener(e, a);
                        this._eventEmitter.removeAllListeners(e);
                    },
                }),
                    cc._RF.pop();
            },
            { events: 1 },
        ],
        GameApp: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "d852dPR0w5Ho5tjM6fqnxy9", "GameApp");
                var n = e("AudioManager"),
                    i = e("UIManager"),
                    o = e("DataManager"),
                    r = e("EventManager"),
                    s = cc.Class({
                        properties: { eventManager: r, dataManager: o, audioManager: n, uiManager: i },
                        ctor: function () {
                            (this.eventManager = new r()), (this.dataManager = new o()), (this.audioManager = new n()), (this.uiManager = null);
                        },
                        Start: function () {},
                    });
                (window.GameApp = new s()), window.GameApp.Start(), cc._RF.pop();
            },
            { AudioManager: "AudioManager", DataManager: "DataManager", EventManager: "EventManager", UIManager: "UIManager" },
        ],
        GameConfig: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "9f2246Kfm5LuKY35AYZQEQ1", "GameConfig");
                var n = {
                    PlayerData: {},
                    Init: function () {
                        (n.boolJp = 0), (n.sizeWidth = cc.winSize.width), (n.sizeHeight = cc.winSize.height), (n.ratioWidth = n.sizeWidth / 1280), (n.ratio = n.sizeHeight / 720);
                    },
                    SavePlayerData: function () {
                        console.log(n.PlayerData), cc.sys.localStorage.setItem("cjOPPO_gameData", JSON.stringify(n.PlayerData));
                    },
                    GetPlayerData: function () {
                        console.log(n);
                        var e = cc.sys.localStorage.getItem("cjOPPO_gameData");
                        ("" != e && null != e) || cc.sys.localStorage.setItem("cjOPPO_gameData", JSON.stringify(n.PlayerData)),
                            (n.PlayerData = JSON.parse(cc.sys.localStorage.getItem("cjOPPO_gameData"))),
                            null == !n.PlayerData.curCoin &&
                                ((n.PlayerData = {}),
                                (n.PlayerData.boolStarGame = 0),
                                (n.PlayerData.rewardCoin = 5e3),
                                (n.PlayerData.recordDay = 0),
                                (n.PlayerData.recordMonth = 0),
                                (n.PlayerData.nextUIName = ""),
                                (n.PlayerData.chaPingAdCount = 0),
                                (n.PlayerData.bannerAdCount = 0));
                    },
                };
                (a.exports = n), cc._RF.pop();
            },
            {},
        ],
        GameMap: [
            function (e, a, t) {
                "use strict";
                var n;
                function i(e, a, t) {
                    return a in e ? Object.defineProperty(e, a, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[a] = t), e;
                }
                cc._RF.push(a, "fc94bOW2txGwZfe6BFh7ITa", "GameMap");
                e("Advertisement_API");
                var o = e("GameConfig");
                cc.Class({
                    extends: cc.Component,
                    properties:
                        ((n = {
                            tiledMap: cc.TiledMap,
                            objectPrefab: cc.Prefab,
                            colliderPrefab: cc.Prefab,
                            groundItemPrefab: cc.Prefab,
                            allObjectNode: cc.Node,
                            allColliderNode: cc.Node,
                            allGunNode: cc.Node,
                            otherGunPos: cc.Node,
                            enemySpawnPosGroupNode: cc.Node,
                            paratrooperNode: cc.Node,
                            cloudNode: cc.Node,
                            mapAtlas: cc.SpriteAtlas,
                            _timer0: 0.1,
                            _timer: 0.1,
                            readyToSort: !1,
                            gasPanel: cc.Node,
                            dropPanel: cc.Node,
                            boomPanel: cc.Node,
                            safeCircle: 10240,
                            safePosition: cc.v2(0, 0),
                            _gasState: 0,
                        }),
                        i(n, "safeCircle", 0),
                        i(n, "_dropTime", 0),
                        i(n, "_mipBoxGroup", []),
                        n),
                    onLoad: function () {
                        GameApp.eventManager.on(EventNames.EVENT_UPDATE_GAS_SHOW, this.updateGasShow.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_DROP_BOX, this.dropBox.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_NOTYFY_BOX_DISMISS, this.notifyBoxDismiss.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_DROP_BOOM, this.dropBoom.bind(this)),
                            this.initMapShow(),
                            (o.boolJp = 0);
                    },
                    onEnable: function () {},
                    onDestroy: function () {
                        GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_GAS_SHOW),
                            GameApp.eventManager.removeListener(EventNames.EVENT_DROP_BOX),
                            GameApp.eventManager.removeListener(EventNames.EVENT_NOTYFY_BOX_DISMISS),
                            GameApp.eventManager.removeListener(EventNames.EVENT_DROP_BOOM);
                    },
                    init: function (e, a, t) {
                        var n = this;
                        this.showCloud(t),
                            this.showParatrooperPlayer(e, a),
                            this.schedule(
                                function () {
                                    n.showParatrooperEnemy(e, Tools.randomNum(0, 100) / 100);
                                },
                                0.1,
                                29,
                                0.5
                            ),
                            this.initGas();
                    },
                    update: function (e) {
                        this.gasCountDown(e), this.readyToSort && ((this._timer -= e), this._timer < 0 && ((this._timer = this._timer0), this.sortAll()));
                    },
                    initGas: function () {
                        (this.gasPanel.children[1].width = this.gasPanel.children[1].height = (300 / 204) * 10240), this.gasPanel.children[1].runAction(cc.sequence(cc.fadeTo(1, 200), cc.fadeTo(0.8, 255)).repeatForever());
                    },
                    updateGasShow: function (e, a) {
                        (this._gasState = e),
                            (this.safeCircle = (a.safeCircle / 204) * 10240),
                            (this.safePosition.x = (a.safePosition.x / 204) * 10240),
                            (this.safePosition.y = (a.safePosition.y / 204) * 10240),
                            (GameApp.dataManager.globalData.gasConfig = { safePosition: this.gasPanel.children[1].position, gasCircle: this.gasPanel.children[1].width });
                    },
                    gasCountDown: function (e) {
                        if (!(this.safeCircle < 0) && 2 == this._gasState) {
                            if (this.gasPanel.children[1].width <= this.safeCircle) return (this.gasPanel.children[1].width = this.gasPanel.children[1].height = this.safeCircle), this.safeCircle <= 0 ? void (this.safeCircle -= 50) : void 0;
                            var a = e * ((10 / 204) * 10240);
                            if (
                                ((this.gasPanel.children[1].width -= a),
                                (this.gasPanel.children[1].height -= a),
                                (GameApp.dataManager.globalData.gasConfig = { safePosition: this.gasPanel.children[1].position, gasCircle: this.gasPanel.children[1].width }),
                                50 == this.safeCircle)
                            )
                                return;
                            if (Tools.isIntersect(this.gasPanel.children[1].position, this.gasPanel.children[1].width / 2, this.safePosition, this.safeCircle / 2)) {
                                if (Math.abs(this.gasPanel.children[1].width - this.safeCircle) > 0.01) {
                                    var t = (this.gasPanel.children[1].y - this.safePosition.y) / (this.gasPanel.children[1].x - this.safePosition.x),
                                        n = a * parseFloat(Math.sqrt(1 / (t * t + 1)));
                                    (this.gasPanel.children[1].x += 1 * (this.gasPanel.children[1].x < this.safePosition.x ? 1 : -1) * n),
                                        (this.gasPanel.children[1].y = t * (this.gasPanel.children[1].x - this.safePosition.x) + this.safePosition.y),
                                        (GameApp.dataManager.globalData.gasConfig = { safePosition: this.gasPanel.children[1].position, gasCircle: this.gasPanel.children[1].width });
                                }
                            } else;
                        }
                    },
                    dropBox: function (e, a) {
                        var t = this;
                        (e = e.div(204).mul(10240)),
                            GameApp.uiManager.showGameObject(
                                "DropBox",
                                function (a) {
                                    t._mipBoxGroup.push(a),
                                        GameApp.dataManager.globalData.allBoxArr.push(a),
                                        a.setPosition(e),
                                        a.getComponent("DropBox").init(Tools.getIndex(t._mipBoxGroup, a)),
                                        GameApp.eventManager.emit(EventNames.EVENT_NOTIFY_ENEMY_MAPBOX);
                                },
                                this.dropPanel
                            );
                    },
                    notifyBoxDismiss: function (e) {
                        Tools.removeArray(GameApp.dataManager.globalData.allBoxArr, this._mipBoxGroup[parseInt(e)]), this._mipBoxGroup[parseInt(e)].destroy();
                    },
                    dropBoom: function (e, a) {
                        (e = e.div(204).mul(10240)), (a = (10240 * a) / 204);
                        for (var t = [], n = 0; n < 10; n++) t.push(Tools.pointOfRandom(e, a / 2, 0));
                        this.dropItBoom(t, 0);
                    },
                    dropItBoom: function (e, a) {
                        var t = this;
                        if (a >= e.length) GameApp.eventManager.emit(EventNames.EVENT_NOTYFY_BOOM_DISMISS);
                        else {
                            var n = Tools.randomNum(0, 2, !0);
                            this.node.runAction(
                                cc.sequence(
                                    cc.delayTime(n),
                                    cc.callFunc(function () {
                                        GameApp.uiManager.showGameObject(
                                            "Boom",
                                            function (t) {
                                                t.setPosition(e[a]),
                                                    t.children[0].getComponent(sp.Skeleton).setAnimation(0, "animation", !0),
                                                    t.children[0].runAction(cc.sequence(cc.moveBy(1, cc.v2(0, -220)), cc.fadeOut(0))),
                                                    t.children[1].runAction(
                                                        cc.sequence(
                                                            cc.delayTime(1),
                                                            cc.callFunc(function () {
                                                                GameApp.audioManager.playEffect("boom");
                                                                var e = t.getComponent(cc.PhysicsBoxCollider);
                                                                e.enabled = !0;
                                                                var a = t.children[1].getComponent(sp.Skeleton);
                                                                a.setAnimation(0, "boom1", !1),
                                                                    a.setCompleteListener(function () {
                                                                        (e.enabled = !1), t.destroy();
                                                                    });
                                                            })
                                                        )
                                                    );
                                            },
                                            t.boomPanel
                                        ),
                                            t.dropItBoom(e, ++a);
                                    })
                                )
                            );
                        }
                    },
                    initMapShow: function () {
                        var e = this;
                        (GameApp.dataManager.globalData.allRoleArr = []), (GameApp.dataManager.globalData.allGunArr = []);
                        var a = this.tiledMap.getLayer("wall");
                        this.tiledMap.getObjectGroup("dynamic")._objects.forEach(function (t) {
                            var n = cc.instantiate(e.objectPrefab);
                            (n.getComponent(cc.Sprite).spriteFrame = e.mapAtlas.getSpriteFrame(t.name.split(".")[0])), (n.parent = e.allColliderNode);
                            var i = a.getPositionAt(e.getTilePos(cc.v2(t.x, t.y)));
                            n.setPosition(i);
                            var o = e.allObjectNode.convertToNodeSpaceAR(n.convertToWorldSpaceAR(cc.v2(0, 0)));
                            (n.parent = e.allObjectNode), n.setPosition(o);
                        }),
                            this.tiledMap.getObjectGroup("collision")._objects.forEach(function (a) {
                                var t = cc.instantiate(e.colliderPrefab),
                                    n = t.getComponent(cc.PhysicsBoxCollider);
                                (n.size = cc.size(a.width, a.height)), (n.offset = cc.v2(a.width / 2, -a.height / 2)), n.apply(), e.allColliderNode.addChild(t), t.setPosition(cc.v2(a.x, a.y)), (n.tag = Tags.collider);
                            });
                    },
                    showParatrooperPlayer: function (e, a) {
                        var t = this;
                        GameApp.uiManager.showGameObject(
                            "ParatrooperPlayer",
                            function (n) {
                                var i = n.getComponent("ParatrooperPlayer");
                                i.init(t.enemySpawnPosGroupNode.children), (GameApp.uiManager.getUI("GameUI").getComponent("GameUI").joystick.getComponent("Joystick").player = i);
                                var o = 0,
                                    r = 0;
                                0 == e
                                    ? ((o = (t.enemySpawnPosGroupNode.children[3].x - t.enemySpawnPosGroupNode.children[0].x) * a - t.enemySpawnPosGroupNode.children[3].x),
                                      (r = (t.enemySpawnPosGroupNode.children[3].y - t.enemySpawnPosGroupNode.children[0].y) * a - t.enemySpawnPosGroupNode.children[3].y))
                                    : ((o = (t.enemySpawnPosGroupNode.children[1].x - t.enemySpawnPosGroupNode.children[2].x) * a - t.enemySpawnPosGroupNode.children[1].x),
                                      (r = (t.enemySpawnPosGroupNode.children[1].y - t.enemySpawnPosGroupNode.children[2].y) * a - t.enemySpawnPosGroupNode.children[1].y)),
                                    n.setPosition(o, r);
                            },
                            this.paratrooperNode
                        );
                    },
                    showParatrooperEnemy: function (e, a) {
                        var t = this;
                        GameApp.uiManager.showGameObject(
                            "ParatrooperEnemy",
                            function (n) {
                                n.getComponent("ParatrooperEnemy").init(t.enemySpawnPosGroupNode.children);
                                var i = 0,
                                    o = 0;
                                0 == e
                                    ? ((i = (t.enemySpawnPosGroupNode.children[3].x - t.enemySpawnPosGroupNode.children[0].x) * a - t.enemySpawnPosGroupNode.children[3].x),
                                      (o = (t.enemySpawnPosGroupNode.children[0].y - t.enemySpawnPosGroupNode.children[3].y) * a - t.enemySpawnPosGroupNode.children[0].y))
                                    : ((i = (t.enemySpawnPosGroupNode.children[1].x - t.enemySpawnPosGroupNode.children[2].x) * a - t.enemySpawnPosGroupNode.children[1].x),
                                      (o = (t.enemySpawnPosGroupNode.children[1].y - t.enemySpawnPosGroupNode.children[2].y) * a - t.enemySpawnPosGroupNode.children[1].y)),
                                    n.setPosition(i, o);
                                var r = cc.v2(0, 10).rotate(cc.misc.radiansToDegrees(Tools.randomNum(0, 360)));
                                n.runAction(cc.repeatForever(cc.moveBy(0.1, r)));
                            },
                            this.paratrooperNode
                        );
                    },
                    showCloud: function (e) {
                        var a = this,
                            t = 2;
                        e && (t = 1), (GameApp.uiManager.mapCamera.zoomRatio = 0.3);
                        var n = (0.3 / (3.6 + 3 * t) / 100) * 5,
                            i = cc
                                .sequence(
                                    cc.callFunc(function () {
                                        GameApp.uiManager.mapCamera.zoomRatio >= 0.8 ? (GameApp.uiManager.mapCamera.zoomRatio = 0.8) : (GameApp.uiManager.mapCamera.zoomRatio += n);
                                    }),
                                    cc.delayTime(0.05)
                                )
                                .repeatForever();
                        this.cloudNode.runAction(i),
                            (t = t || 2),
                            this.cloudNode.runAction(
                                cc.sequence(
                                    cc.callFunc(function () {
                                        a.cloudNode.children[0].active = !0;
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        GameApp.audioManager.playEffect("skydivingBegin", null, 1), (a.cloudNode.children[1].active = !0);
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[2].active = !0;
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[3].active = !0;
                                    }),
                                    cc.delayTime(t),
                                    cc.callFunc(function () {
                                        GameApp.audioManager.playEffect("skydivingWind", null, 2), (a.cloudNode.children[0].active = !1);
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[1].active = !0;
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[2].active = !0;
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[3].active = !0;
                                    }),
                                    cc.delayTime(t),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[0].active = !1;
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[1].active = !1;
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[2].active = !0;
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[3].active = !0;
                                    }),
                                    cc.delayTime(t),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[0].active = !1;
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[1].active = !1;
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[2].active = !1;
                                    }),
                                    cc.delayTime(0.3),
                                    cc.callFunc(function () {
                                        a.cloudNode.children[3].active = !0;
                                    }),
                                    cc.delayTime(t),
                                    cc.callFunc(function () {
                                        a.gameBegin(e);
                                    })
                                )
                            );
                    },
                    gameBegin: function (e) {
                        var a = this;
                        (GameApp.dataManager.globalData.isInGame = !0),
                            this.cloudNode.destroy(),
                            (GameApp.uiManager.mapCamera.zoomRatio = 0.8),
                            GameApp.audioManager.playEffect("skydivingToGround", null, 1),
                            GameApp.eventManager.emit(EventNames.EVENT_GAME_BEGIN);
                        var t = this.paratrooperNode.children[0].position;
                        this.paratrooperNode.destroyAllChildren(),
                            this.showGun(),
                            this.showPlayer(t),
                            e
                                ? this.node.runAction(
                                      cc.sequence(
                                          cc.delayTime(5),
                                          cc.callFunc(function () {
                                              a.showEnemy();
                                          })
                                      )
                                  )
                                : this.showEnemy();
                    },
                    showGun: function () {
                        var e = this,
                            a = this.tiledMap.getLayer("wall");
                        this.tiledMap.getObjectGroup("grass")._objects.forEach(function (t) {
                            var n = cc.instantiate(e.groundItemPrefab);
                            n.parent = e.allColliderNode;
                            var i = a.getPositionAt(e.getTilePos(cc.v2(t.x, t.y)));
                            n.setPosition(i);
                            var o = e.allGunNode.convertToNodeSpaceAR(n.convertToWorldSpaceAR(cc.v2(0, 0)));
                            (n.parent = e.allGunNode), n.setPosition(o);
                            var r = { _type: ItemType.weapon, _kind: Tools.randomNum(0, 5) };
                            n.getComponent("GroundItem").init(r), GameApp.dataManager.globalData.allGunArr.push(n);
                        }),
                            this.otherGunPos.children.forEach(function (a) {
                                var t = cc.instantiate(e.groundItemPrefab),
                                    n = e.allGunNode.convertToNodeSpaceAR(a.convertToWorldSpaceAR(cc.v2(0, 0)));
                                (t.parent = e.allGunNode), t.setPosition(n);
                                var i = { _type: ItemType.weapon, _kind: Tools.randomNum(0, 5) };
                                t.getComponent("GroundItem").init(i), GameApp.dataManager.globalData.allGunArr.push(t);
                            });
                    },
                    getTilePos: function (e) {
                        var a = this.tiledMap.node.getContentSize(),
                            t = this.tiledMap.getTileSize(),
                            n = Math.floor(e.x / t.width),
                            i = Math.floor((a.height - e.y) / t.height);
                        return cc.v2(n, i);
                    },
                    showPlayer: function (e) {
                        GameApp.uiManager.showGameObject(
                            "Player",
                            function (a) {
                                a.setPosition(e);
                                var t = a.getComponent("Player");
                                (GameApp.uiManager.getUI("GameUI").getComponent("GameUI").joystick.getComponent("Joystick").player = t), t.init(), GameApp.dataManager.globalData.allRoleArr.push(t);
                            },
                            this.allObjectNode
                        );
                    },
                    showEnemy: function () {
                        for (var e = this, a = [], t = this.enemySpawnPosGroupNode.children, n = 0; n < 30; n++) a.push(cc.v2(Tools.randomNum(t[0].x, t[1].x), Tools.randomNum(t[2].y, t[0].y)));
                        for (var i = Tags.enemy, o = 0; o < a.length; o++)
                            o + 1 != GameApp.dataManager.userData.choosedSkinId &&
                                GameApp.uiManager.showGameObject(
                                    "Enemy",
                                    function (t) {
                                        (t.getComponent(cc.PhysicsBoxCollider).tag = i++), t.setPosition(a[o]);
                                        var n = t.getComponent("Enemy");
                                        n.init(o + 1, GameApp.dataManager.jsonData.RobotName[o]),
                                            GameApp.dataManager.globalData.inGameKillNum.push({ _killNum: 0, _belongName: GameApp.dataManager.jsonData.RobotName[o] }),
                                            GameApp.dataManager.globalData.allRoleArr.push(n),
                                            (e.readyToSort = !0);
                                    },
                                    this.allObjectNode
                                );
                        GameApp.eventManager.emit(EventNames.EVENT_SHOW_ALLROLENUM_UI), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_RANK_SHOW);
                    },
                    sortAll: function () {
                        var e = this.allObjectNode.children.concat(),
                            a = [],
                            t = [];
                        for (var n in e) GameApp.uiManager.isInMapSight(e[n]) && (a.push({ y: e[n].y, index: n }), t.push(n));
                        for (var i in (a.sort(function (e, a) {
                            return a.y - e.y;
                        }),
                        a))
                            e[a[i].index].setSiblingIndex(a[i]);
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", GameConfig: "GameConfig" },
        ],
        GameUI: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "22560Ckc7ZILqFwWW4hovUj", "GameUI");
                var n = e("Utils");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        joystick: { default: null, type: cc.Node, tooltip: "\u6447\u6746\u7684\u811a\u672c" },
                        btnArr: { default: [], type: [cc.Node] },
                        soundNode: cc.Node,
                        gameUIPanel: cc.Node,
                        shootBtn: cc.Node,
                        reloadBtnNode: cc.Node,
                        amoUI: cc.Label,
                        allRoleNumUI: cc.Label,
                        weaponBtnNode: cc.Node,
                        mipmapNode: cc.Node,
                        prepareTopNode: cc.Node,
                        countDownSpGroup: [cc.SpriteFrame],
                        rankGroup: [cc.Node],
                        _shootFlag: !1,
                        _shootTimer: 0,
                        _reloadFlag: !1,
                        _reloadTimer: 0,
                        _theGameBegin: !1,
                        _protectTimeCountDown: 8,
                        _onceCountDownAnim: !1,
                        _onceGasCountDownAnim: !1,
                        gasNodeUI: cc.Node,
                        safeNode: cc.Node,
                        gasNode: cc.Node,
                        boomNode: cc.Node,
                        _gasState: 0,
                        _gasCountDownTimer: 40,
                        _gasCountDownInterval: 20,
                        safeCircle: 150,
                        _boxCountDownTimer: 20,
                        _boxCountDownInterval: 50,
                        _dropTime: 0,
                        _boomCountDownTimer: 30,
                        _boomCountDownInterval: 50,
                        tipNode: cc.Node,
                        flashBtn: cc.Node,
                        flashCDUI: cc.Label,
                        healthBtn: cc.Node,
                        healthCDUI: cc.Label,
                        _flashTimer: 0,
                        _flashInCD: !1,
                        _healthTimer: 0,
                        _healthInCD: !1,
                        mipNode: cc.Node,
                        _mipBoxGroup: [],
                        boxAttrNodeGroup: [cc.Node],
                        equipAttrNodeGroup: [cc.Node],
                    },
                    onLoad: function () {
                        (this._gasState = 0),
                            (this._gasCountDownTimer = 40),
                            (this._gasCountDownInterval = 20),
                            (this.safeCircle = 150),
                            (this._boxCountDownTimer = 20),
                            (this._boxCountDownInterval = 50),
                            (this._boomCountDownTimer = 30),
                            (this._boomCountDownInterval = 50),
                            GameApp.eventManager.on(EventNames.EVENT_UPDATE_AMO_SHOW, this.updateAmoShow.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_SHOW_GUN_UI, this.updateGunUIShow.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_SHOW_RELOAD_UI, this.updateReloadUIShow.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_SHOW_ALLROLENUM_UI, this.updateAllRoleNumUIShow.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_GAME_BEGIN, this.gameBegin.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_UPDATE_MIPMAP_PLAYER, this.updateMipmapPlayer.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_UPDATE_RANK_SHOW, this.updateRankShow.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_NOTYFY_BOX_DISMISS, this.notifyBoxDismiss.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_NOTYFY_BOOM_DISMISS, this.notifyBoomDismiss.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_SHOW_BOXITEM, this.showBoxItemUI.bind(this)),
                            this.shootBtn.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this),
                            this.shootBtn.on(cc.Node.EventType.TOUCH_END, this.onTouchLeave, this),
                            this.shootBtn.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchLeave, this),
                            this.weaponBtnNode.children[0].runAction(cc.rotateBy(0.2, 90).repeatForever()),
                            GameApp.dataManager.userData.isFirstPlay && ((this.tipNode.active = !0), this.tipNode.children[0].runAction(cc.sequence(cc.moveTo(0.5, cc.v2(0, 10)), cc.moveTo(0.5, cc.v2(0, -10))).repeatForever())),
                            this.updateSoundBtnShow(),
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
                    },
                    onDestroy: function () {
                        GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_AMO_SHOW),
                            GameApp.eventManager.removeListener(EventNames.EVENT_SHOW_GUN_UI),
                            GameApp.eventManager.removeListener(EventNames.EVENT_SHOW_RELOAD_UI),
                            GameApp.eventManager.removeListener(EventNames.EVENT_SHOW_ALLROLENUM_UI),
                            GameApp.eventManager.removeListener(EventNames.EVENT_GAME_BEGIN),
                            GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_MIPMAP_PLAYER),
                            GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_RANK_SHOW),
                            GameApp.eventManager.removeListener(EventNames.EVENT_NOTYFY_BOX_DISMISS),
                            GameApp.eventManager.removeListener(EventNames.EVENT_NOTYFY_BOOM_DISMISS),
                            GameApp.eventManager.removeListener(EventNames.EVENT_SHOW_BOXITEM),
                            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
                    },
                    onKeyDown: function (e) {
                        switch (e.keyCode) {
                            case cc.macro.KEY.j:
                                console.log("Press a key"), this.onTouchBegin();
                                break;
                            case cc.macro.KEY.u:
                                console.log("Press a key"), this.reloadBtnClick();
                                break;
                            case cc.macro.KEY.k:
                                console.log("release a key"), this.healthBtnClick();
                                break;
                            case cc.macro.KEY.l:
                                console.log("release a key"), this.flashBtnClick();
                                break;
                            case cc.macro.KEY.i:
                                console.log("release a key"), this.weaponBtnClick();
                        }
                    },
                    onKeyUp: function (e) {
                        switch (e.keyCode) {
                            case cc.macro.KEY.j:
                                console.log("release a key"), this.onTouchLeave();
                                break;
                            case cc.macro.KEY.u:
                                console.log("Press a key"), this.reloadBtnClick();
                                break;
                            case cc.macro.KEY.k:
                                console.log("release a key"), this.healthBtnClick();
                                break;
                            case cc.macro.KEY.l:
                                console.log("release a key"), this.flashBtnClick();
                                break;
                            case cc.macro.KEY.i:
                                console.log("release a key"), this.weaponBtnClick();
                        }
                    },
                    init: function (e, a, t) {
                        GameApp.uiManager.showGame("GameMap", function (n) {
                            n.getComponent("GameMap").init(e, a, t);
                        }),
                            GameApp.uiManager.showToast("Nhanh chóng tìm vũ khí sau khi hạ cánh");
                    },
                    gameBegin: function () {
                        (this._theGameBegin = !0), (this.gameUIPanel.active = !0);
                    },
                    update: function (e) {
                        (this._shootTimer -= e),
                            this._shootFlag && this._shootTimer < 0 && !this._reloadFlag && ((this._shootTimer = GameApp.dataManager.globalData.shootInterval), this.shoot()),
                            this._reloadFlag && ((this._reloadTimer -= e), this._reloadFlag && this._reloadTimer < 0 && ((this._reloadFlag = !1), GameApp.dataManager.reloadAmo())),
                            this.gasCountDown(e),
                            this.boxCountDown(e),
                            this.boomCountDown(e),
                            this.duleFlash(e),
                            this.duleHealth(e),
                            this._theGameBegin && this.protectCcountDown(e);
                    },
                    duleFlash: function (e) {
                        (this._flashTimer -= e),
                            this._flashTimer < 0 && ((this._flashInCD = !1), (this.flashBtn.children[0].active = !0), (this.flashBtn.children[1].active = !1)),
                            this._flashInCD ? (this.flashCDUI.string = Math.floor(this._flashTimer)) : (this.flashCDUI.string = "");
                    },
                    duleHealth: function (e) {
                        (this._healthTimer -= e),
                            this._healthTimer < 0 && ((this._healthInCD = !1), (this.healthBtn.children[0].active = !0), (this.healthBtn.children[1].active = !1)),
                            this._healthInCD ? (this.healthCDUI.string = Math.floor(this._healthTimer)) : (this.healthCDUI.string = "");
                    },
                    protectCcountDown: function (e) {
                        (this._protectTimeCountDown -= e),
                            this._protectTimeCountDown < 6 &&
                                ((this.prepareTopNode.children[1].active = !0),
                                this.protectCcountDownAnim(),
                                (this.prepareTopNode.children[1].getComponent(cc.Sprite).spriteFrame = this.countDownSpGroup[Math.floor(this._protectTimeCountDown - 1)])),
                            Math.floor(this._protectTimeCountDown) <= 0 && (GameApp.eventManager.emit(EventNames.EVENT_THEGAMESTART), (this.prepareTopNode.active = !1), (this._theGameBegin = !1));
                    },
                    protectCcountDownAnim: function () {
                        var e = this;
                        if (!this._onceCountDownAnim) {
                            (this._onceCountDownAnim = !0), GameApp.audioManager.playEffect("waitSceneCutDown");
                            var a = cc.sequence(
                                cc.scaleTo(0.2, 1.5),
                                cc.scaleTo(0.3, 1),
                                cc.delayTime(0.5),
                                cc.callFunc(function () {
                                    e._onceCountDownAnim = !1;
                                })
                            );
                            this.prepareTopNode.children[1].runAction(a);
                        }
                    },
                    gasCountDown: function (e) {
                        switch (((this._gasCountDownTimer -= e), this._gasState)) {
                            case 0:
                                this.quietGasState();
                                break;
                            case 1:
                                this.refreshCircleAndCD(e);
                                break;
                            case 2:
                                this.reduceCircleAndTip(e);
                        }
                    },
                    quietGasState: function () {
                        if (this._gasCountDownTimer < 16) {
                            (this.gasNodeUI.children[0].active = !0),
                                (this.gasNodeUI.children[1].active = !0),
                                (this.gasNodeUI.children[2].active = !1),
                                (this.gasNodeUI.children[3].getComponent(cc.RichText).string = "Đếm ngược"),
                                (this.gasNodeUI.active = !0),
                                (this.safeNode.children[0].active = !0),
                                (this.safeNode.children[0].width = this.safeNode.children[0].height = this.safeCircle + 5);
                            var e = this.gasNode.width;
                            300 == e && (e = 204),
                                0 == this.safeCircle ? this.safeNode.setPosition(this.gasNode.position) : this.safeNode.setPosition(Tools.pointOfRandom(this.safeNode.position, e / 2, this.safeCircle / 2)),
                                (this.safeNode.width = this.safeNode.height = this.safeCircle),
                                GameApp.audioManager.playEffect("gasAlert"),
                                GameApp.audioManager.playEffect("noticeGasComing"),
                                this.safeNode.children[0].runAction(cc.sequence(cc.spawn(cc.scaleTo(0, 1), cc.fadeIn(0)), cc.spawn(cc.scaleTo(1, 1.3), cc.fadeOut(1))).repeat(2)),
                                (this._gasState = 1);
                        }
                    },
                    refreshCircleAndCD: function (e) {
                        (this.gasNodeUI.children[0].getComponent(cc.RichText).string = Math.floor(this._gasCountDownTimer) + " giây"),
                            this._gasCountDownTimer < 0 &&
                                ((this.gasNodeUI.children[0].active = !1),
                                (this.gasNodeUI.children[1].active = !1),
                                (this.gasNodeUI.children[2].active = !0),
                                (this.gasNodeUI.children[3].getComponent(cc.RichText).string = "<color=#0fffff>Khí độc đang lan rộng</color>"),
                                GameApp.audioManager.playEffect("noticeGasDiffusion"),
                                this.gasNodeUI.children[2].runAction(cc.sequence(cc.fadeOut(0.3), cc.fadeIn(0.5)).repeatForever()),
                                (this._gasState = 2),
                                GameApp.eventManager.emit(EventNames.EVENT_UPDATE_GAS_SHOW, 2, { safeCircle: this.safeCircle, safePosition: this.safeNode.position }));
                    },
                    reduceCircleAndTip: function (e) {
                        if (!(this.safeCircle < 0)) {
                            if (this.gasNode.width <= this.safeCircle)
                                return (
                                    (this._gasCountDownTimer = this._gasCountDownInterval),
                                    (this.gasNode.width = this.gasNode.height = this.safeCircle),
                                    (this.safeCircle -= 50),
                                    (this.gasNodeUI.active = !1),
                                    this.safeCircle < 0 ? void GameApp.audioManager.playEffect("noticeGasNoWay") : void (this._gasState = 0)
                                );
                            if (((this.gasNode.width -= 10 * e), (this.gasNode.height -= 10 * e), 0 != this.safeCircle))
                                if (Tools.isIntersect(this.gasNode.position, this.gasNode.width / 2, this.safeNode.position, this.safeCircle / 2)) {
                                    if (Math.abs(this.gasNode.width - this.safeCircle) > 0.05) {
                                        var a = (this.gasNode.y - this.safeNode.y) / (this.gasNode.x - this.safeNode.x),
                                            t = 10 * e * parseFloat(Math.sqrt(1 / (a * a + 1)));
                                        (this.gasNode.x += 1 * (this.gasNode.x < this.safeNode.x ? 1 : -1) * t), (this.gasNode.y = a * (this.gasNode.x - this.safeNode.x) + this.safeNode.y);
                                    }
                                } else;
                        }
                    },
                    boxCountDown: function (e) {
                        this._dropTime >= 2 || ((this._boxCountDownTimer -= e), this._boxCountDownTimer < 0 && ((this._boxCountDownTimer = this._boxCountDownInterval), this.dropBox()));
                    },
                    boomCountDown: function (e) {
                        this._dropTime >= 2 || ((this._boomCountDownTimer -= e), this._boomCountDownTimer < 0 && ((this._boomCountDownTimer = this._boomCountDownInterval), this.dropBoom()));
                    },
                    dropBox: function () {
                        var e = this;
                        GameApp.audioManager.playEffect("noticeExpShow");
                        for (
                            var a = [10, 6, 3, 2],
                                t = function (a) {
                                    GameApp.uiManager.showGameObject(
                                        "MipBox",
                                        function (t) {
                                            e._mipBoxGroup.push(t);
                                            var n = Tools.pointOfRandom(e.safeNode.position, e.safeCircle / 2, 0);
                                            t.setPosition(n);
                                            var i = e.mipNode.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(0.5, 0.5)));
                                            GameApp.eventManager.emit(EventNames.EVENT_DROP_BOX, i, e._dropTime + "" + a), t.children[0].runAction(cc.sequence(cc.scaleTo(1, 4), cc.scaleTo(0, 1), cc.fadeOut(0)).repeat(2));
                                        },
                                        e.mipNode
                                    );
                                },
                                n = 0;
                            n < a[this._dropTime];
                            n++
                        )
                            t(n);
                        this._dropTime++;
                    },
                    dropBoom: function () {
                        this.safeCircle <= 0 ||
                            (GameApp.audioManager.playEffect("noticeBoomComing"),
                            (this.boomNode.active = !0),
                            this.boomNode.setPosition(Tools.pointOfRandom(this.safeNode.position, this.safeCircle / 2, this.boomNode.width / 2)),
                            GameApp.eventManager.emit(EventNames.EVENT_DROP_BOOM, this.mipNode.convertToNodeSpaceAR(this.boomNode.convertToWorldSpaceAR(cc.v2(0.5, 0.5))), this.boomNode.width));
                    },
                    notifyBoxDismiss: function (e) {
                        this._mipBoxGroup[parseInt(e)].destroy();
                    },
                    notifyBoomDismiss: function (e) {
                        this.boomNode.active = !1;
                    },
                    showBoxItemUI: function () {
                        var e = this;
                        this.boxAttrNodeGroup.forEach(function (e) {
                            e.active = !1;
                        });
                        var a = Tools.randomNum(3, 4);
                        Tools.getRandomAmountElementUnRepeat([0, 1, 2, 3], a).nodeArr.forEach(function (a) {
                            var t = GameApp.dataManager.globalData.getItemAttrArr[a].rank;
                            if (3 == t) e.boxAttrNodeGroup[a].active = !1;
                            else {
                                var n = { rank: t + 1, item: ItemAttr[a][t] };
                                (e.boxAttrNodeGroup[a].children[0].getComponent(cc.Label).string = n.rank + "Lv"),
                                    (e.boxAttrNodeGroup[a].children[1].getComponent(cc.Label).string = n.item.des),
                                    e.boxAttrNodeGroup[a].children[2].runAction(cc.rotateBy(0.2, 90).repeatForever()),
                                    (e.boxAttrNodeGroup[a].active = !0);
                            }
                        });
                    },
                    boxItemUIBtnClick: function (e, a) {
                        var t = parseInt(a) - 1;
                        GameApp.dataManager.equipBoxItem(t),
                            this.boxAttrNodeGroup.forEach(function (e) {
                                e.active = !1;
                            }),
                            this.updateEquipShowUI();
                    },
                    updateEquipShowUI: function () {
                        var e = GameApp.dataManager.getEquipShowAttr();
                        for (var a in this.equipAttrNodeGroup)
                            null == e[a]
                                ? (this.equipAttrNodeGroup[a].active = !1)
                                : ((this.equipAttrNodeGroup[a].children[0].getComponent(cc.Label).string = e[a].rank + " Lv"),
                                  (this.equipAttrNodeGroup[a].children[1].getComponent(cc.Label).string = e[a].item.des),
                                  (this.equipAttrNodeGroup[a].active = !0));
                    },
                    onTouchBegin: function (e) {
                        this._shootFlag = !0;
                    },
                    onTouchLeave: function (e) {
                        (this._shootFlag = !1), GameApp.eventManager.emit(EventNames.EVENT_AIM, !1);
                    },
                    shoot: function () {
                        GameApp.eventManager.emit(EventNames.EVENT_AIM, !0), GameApp.eventManager.emit(EventNames.EVENT_PLAYER_SHOOT);
                    },
                    updateAmoShow: function () {
                        (this.amoUI.string = GameApp.dataManager.globalData.curAmoNum), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_TOPBAR_SHOW);
                    },
                    updateGunUIShow: function (e, a) {
                        a &&
                            ((this.weaponBtnNode.getComponent(cc.Sprite).spriteFrame = GameApp.uiManager.commonAtlas.getSpriteFrame("ui_weapon_" + a.weaponid)),
                            (this.weaponBtnNode.children[1].children[0].getComponent(cc.Label).string = a.name)),
                            (this.weaponBtnNode.active = e);
                    },
                    updateReloadUIShow: function (e) {
                        this.reloadBtnNode.active = e;
                    },
                    updateAllRoleNumUIShow: function () {
                        var e = GameApp.dataManager.globalData.allRoleArr.length;
                        1 == e &&
                            GameApp.dataManager.globalData.allRoleArr[0]._pbc.tag == Tags.player &&
                            null == GameApp.uiManager.getPopup("OverPopup") &&
                            GameApp.uiManager.showPopup("OverPopup", function (a) {
                                a.getComponent("OverPopup").init(!0, e);
                            });
                        this.allRoleNumUI.string = e + " còn lại";
                    },
                    updateMipmapPlayer: function (e) {
                        this.mipmapNode.children[2].setPosition(e);
                    },
                    updateMipmapBox: function (e) {},
                    updateRankShow: function () {
                        var e = GameApp.dataManager.globalData.inGameKillNum.concat();
                        e.sort(function (e, a) {
                            return a._killNum - e._killNum;
                        });
                        for (var a = 0; a < 5; a++) {
                            var t = e[a]._belongName;
                            t == GameApp.dataManager.userData.playerName && (t = "<color=#0fffff>" + e[a]._belongName + "</color>"),
                                (this.rankGroup[a].children[0].getComponent(cc.RichText).string = t),
                                (this.rankGroup[a].children[1].getComponent(cc.Label).string = e[a]._killNum);
                        }
                    },
                    reloadBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), this._reloadFlag || ((this._reloadTimer = GameApp.dataManager.globalData.reloadInterval), (this._reloadFlag = !0), GameApp.eventManager.emit(EventNames.EVENT_PLAYER_RELOAD));
                    },
                    weaponBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.eventManager.emit(EventNames.EVENT_PICKUP_WEAPON);
                    },
                    flashBtnClick: function () {
                        this._flashInCD
                            ? GameApp.uiManager.showToast("Đang hồi chiêu")
                            : ((this.tipNode.active = !1),
                              GameApp.eventManager.emit(EventNames.EVENT_FLASH),
                              (this.flashBtn.children[0].active = !1),
                              (this.flashBtn.children[1].active = !0),
                              (this._flashTimer = GameApp.dataManager.getSkillCD()),
                              (this._flashInCD = !0));
                    },
                    healthBtnClick: function () {
                        GameApp.audioManager.playEffect("click"),
                            this._healthInCD
                                ? GameApp.uiManager.showToast("Đang hồi chiêu")
                                : (GameApp.eventManager.emit(EventNames.EVENT_RESUME_HEALTH),
                                  (this.healthBtn.children[0].active = !1),
                                  (this.healthBtn.children[1].active = !0),
                                  (this._healthTimer = GameApp.dataManager.getSkillCD()),
                                  (this._healthInCD = !0));
                    },
                    backBtnClick: function () {
                        GameApp.uiManager.showUI("LoginUI");
                    },
                    soundBtnClick: function () {
                        GameApp.audioManager.playEffect("click");
                        var e = !GameApp.audioManager._effectOn;
                        GameApp.audioManager.setEffect(e), this.updateSoundBtnShow();
                    },
                    updateSoundBtnShow: function () {
                        (this.soundNode.children[0].active = GameApp.audioManager._effectOn), (this.soundNode.children[1].active = !GameApp.audioManager._effectOn);
                    },
                    updateRecordBtnShow: function () {
                        (this.btnArr[0].active = GameApp.dataManager.globalData.recordState == RecordState.RECORD),
                            (this.btnArr[1].active = GameApp.dataManager.globalData.recordState == RecordState.PAUSE || GameApp.dataManager.globalData.recordState == RecordState.READY);
                    },
                    recordBtnClick: function () {
                        GameApp.audioManager.playEffect("click");
                        var e = this;
                        switch (GameApp.dataManager.globalData.recordState) {
                            case RecordState.RECORD:
                                n.pauseRecord(function () {
                                    GameApp.dataManager.changeRecordState(RecordState.PAUSE), e.updateRecordBtnShow();
                                });
                                break;
                            case RecordState.PAUSE:
                                n.resumeRecord(function () {
                                    GameApp.dataManager.changeRecordState(RecordState.RECORD), e.updateRecordBtnShow();
                                });
                                break;
                            case RecordState.READY:
                                console.log("\u5f55\u5c4fbug\u4e86");
                        }
                    },
                }),
                    cc._RF.pop();
            },
            { Utils: "Utils" },
        ],
        GetCoin: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "ef06eRohYhLwL5OOUF6a5PT", "GetCoin");
                e("Utils");
                var n = e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onLoad: function () {
                        this.canvas = cc.find("Canvas").getComponent("Canvas");
                    },
                    onEnable: function () {},
                    clickClose: function () {
                        this.node.active = !1;
                    },
                    clickGetCoin: function () {
                        (n.rewarda = "getCoin"), this.canvas.showADReward();
                    },
                    showAdReward: function () {
                        GameApp.uiManager.showToast("Nhận 5000 xu"), GameApp.dataManager.addCoin(5e3), (this.node.active = !1);
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", Utils: "Utils" },
        ],
        GiftPopup: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "97122PwMglKv7Cq3WJKcLoh", "GiftPopup");
                e("Utils");
                var n = e("Advertisement_API"),
                    i = e("GameConfig");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        closeBtnNode: cc.Node,
                        sureBtnNode: cc.Node,
                        nextUIName: "",
                        _popupType: 1,
                        titleUI: cc.Label,
                        coinSp: cc.Node,
                        coinInfo: cc.Node,
                        speedSp: cc.Node,
                        speedInfo: cc.Node,
                        onceClick: { default: !0, visible: !1 },
                        showAd: cc.Node,
                    },
                    onLoad: function () {
                        var e = this;
                        this.node.runAction(
                            cc.sequence(
                                cc.delayTime(3),
                                cc.callFunc(function () {
                                    e.closeBtnNode.active = !0;
                                })
                            )
                        ),
                            Tools.scaleUpAndDowm(this.sureBtnNode),
                            (this.canvas = cc.find("Canvas").getComponent("Canvas"));
                    },
                    onEnable: function () {},
                    init: function (e, a) {
                        (this.nextUIName = e),
                            (i.PlayerData.nextUIName = this.nextUIName),
                            i.SavePlayerData(),
                            (this._popupType = a),
                            1 == a
                                ? ((this.titleUI.string = "Gói quà tặng Vàng"), (this.coinSp.active = !0), (this.coinInfo.active = !0), (this.showAd.active = !0))
                                : 2 == a && ((this.titleUI.string = "Nhanh chóng nhận quà"), (this.speedSp.active = !0), (this.speedInfo.active = !0), (this.showAd.active = !0));
                    },
                    sureBtnClick: function () {
                        if (this.onceClick) {
                            (this.onceClick = !1), GameApp.audioManager.playEffect("click");
                            1 == this._popupType ? ((n.rewarda = "getCoinLb"), this.canvas.showADReward()) : 2 == this._popupType && ((this.onceClick = !0), (n.rewarda = "quickly"), this.canvas.showADReward());
                        }
                    },
                    closeBtnClick: function () {
                        1 == this._popupType ? (GameApp.audioManager.playEffect("click"), GameApp.uiManager.closePopup("GiftPopup"), GameApp.uiManager.showUI(this.nextUIName)) : 2 == this._popupType && this.closeBtnClick2(!1);
                    },
                    closeBtnClick2: function (e) {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.closePopup("GiftPopup"), GameApp.uiManager.getUI("PrepareUI").getComponent("PrepareUI").showPlaneUI(e);
                    },
                    showAdReward: function () {
                        i.GetPlayerData(),
                            GameApp.uiManager.showToast("Nhận 5000 xu"),
                            GameApp.dataManager.addCoin(5e3),
                            GameApp.audioManager.playEffect("click"),
                            GameApp.uiManager.closePopup("GiftPopup"),
                            GameApp.uiManager.showUI(i.PlayerData.nextUIName);
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", GameConfig: "GameConfig", Utils: "Utils" },
        ],
        GroundItem: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "3ac97Fj4dlJab4T+HVu8epF", "GroundItem"),
                    cc.Class({
                        extends: cc.Component,
                        properties: { itemType: { default: {} } },
                        onLoad: function () {
                            (this.getComponent(cc.PhysicsBoxCollider).tag = Tags.item), this.doAnim();
                        },
                        doAnim: function () {
                            this.node.children[0].runAction(cc.sequence(cc.fadeOut(0.6), cc.fadeIn(0.3)).repeatForever()),
                                this.node.children[1].runAction(cc.sequence(cc.moveBy(0.5, cc.v2(0, 10)), cc.moveBy(0.5, cc.v2(0, -10))).repeatForever());
                        },
                        init: function (e, a) {
                            e && (this.itemType = e),
                                this.itemType._type == ItemType.weapon
                                    ? ((this.node.children[2].active = !1),
                                      (this.node.children[1].getComponent(cc.Sprite).spriteFrame = GameApp.uiManager.commonAtlas.getSpriteFrame("item_weapon_" + GameApp.dataManager.jsonData.WeaponData[e._kind].skinname)))
                                    : ((this.node.children[2].getComponent(cc.Label).string = GameApp.dataManager.jsonData.WeaponData[this.itemType._kind].name),
                                      (this.node.children[2].active = !0),
                                      (this.node.children[1].getComponent(cc.Sprite).spriteFrame = GameApp.uiManager.commonAtlas.getSpriteFrame("item_equip_1_valid")));
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        GunUI: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "5b571QytXtMKbQD0qJWJTvK", "GunUI");
                e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: {},
                    onEnable: function () {},
                    backBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("LoginUI");
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API" },
        ],
        HttpManager: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "09622zhCf1IxL1xmt4ZAiRH", "HttpManager"),
                    cc.Class({
                        name: "HttpManager",
                        properties: {},
                        send: function (e, a, t, n) {
                            var i = new XMLHttpRequest();
                            (i.timeout = 15e3),
                                i.open("post", HTTP_SERVERS[SERVER] + e),
                                i.setRequestHeader("Content-Type", "application/json"),
                                (i.onload = function () {
                                    var e = JSON.parse(i.responseText);
                                    console.log(e), e.success ? t && t(e.data) : n && n(e.code, e.data);
                                }),
                                (i.ontimeout = function () {
                                    console.log("\u7f51\u7edc\u8fde\u63a5\u8d85\u65f6");
                                }),
                                (i.onerror = function () {
                                    console.log("\u7f51\u7edc\u8fde\u63a5\u51fa\u9519");
                                }),
                                (i.onabort = function () {
                                    console.log("\u7f51\u7edc\u8fde\u63a5\u4e2d\u65ad");
                                }),
                                i.send(JSON.stringify(a));
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        JoystickCommon: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "51150qsnGhKl4PsmdrbeVCq", "JoystickCommon"), Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var n = { JoystickType: cc.Enum({ FIXED: 0, FOLLOW: 1 }), DirectionType: cc.Enum({ FOUR: 4, EIGHT: 8, ALL: 0 }), SpeedType: cc.Enum({ STOP: 0, NORMAL: 1, FAST: 2 }) };
                (t.default = n), (a.exports = t.default), cc._RF.pop();
            },
            {},
        ],
        Joystick: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "a085ato4b5AsrP+bIxB9yZe", "Joystick");
                var n = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(e("JoystickCommon"));
                var i = e("GameConfig");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        dot: { default: null, type: cc.Node, displayName: "\u6746\u5b50", tooltip: "\u6447\u6746\u64cd\u7eb5\u70b9" },
                        ring: { default: null, type: cc.Node, displayName: "\u5e95\u90e8\u5708\u5b50", tooltip: "\u6447\u6746\u80cc\u666f\u8282\u70b9" },
                        player: { default: null, type: cc.Node, displayName: "\u64cd\u63a7\u89d2\u8272", tooltip: "\u64cd\u63a7\u89d2\u8272" },
                        joystickType: {
                            default: n.default.JoystickType.FIXED,
                            type: n.default.JoystickType,
                            displayName: "\u89e6\u6478\u7c7b\u578b",
                            tooltip: "\u5b9a\u6b7b\u7684\u8fd8\u662f\u968f\u89e6\u6478\u4f4d\u7f6e\u53d8\u5316\u7684",
                        },
                        directionType: { default: n.default.DirectionType.ALL, type: n.default.DirectionType, displayName: "\u65b9\u5411\u9650\u5236", tooltip: "\u56db\u5411\uff0c\u516b\u5411\uff0c\u4e07\u5411" },
                        _stickPos: { default: null, type: cc.Node, tooltip: "\u6447\u6746\u6240\u5728\u4f4d\u7f6e" },
                        _touchLocation: { default: null, type: cc.Node, tooltip: "\u89e6\u6478\u4f4d\u7f6e" },
                    },
                    onLoad: function () {
                        (this._radius = this.ring.width / 2),
                            this._initTouchEvent(),
                            this.joystickType == n.default.JoystickType.FOLLOW && (this.node.opacity = 0),
                            (this.movekeyw = !1),
                            (this.movekeys = !1),
                            (this.movekeya = !1),
                            (this.movekeyd = !1);
                    },
                    _initTouchEvent: function () {
                        this.node.on(cc.Node.EventType.TOUCH_START, this._touchStartEvent, this),
                            this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this),
                            this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndEvent, this),
                            this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this),
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
                    },
                    onKeyDown: function (e) {
                        if ("Player<Player>" == this.player.name) {
                            if (e.keyCode == cc.macro.KEY.w) {
                                if (1 == this.movekeys) return;
                                (i.boolJp = 1), (this.movekeyw = !0), this.player.setSpeedType(2), this.player.move2("w");
                            }
                            if (e.keyCode == cc.macro.KEY.s) {
                                if (1 == this.movekeyw) return;
                                (i.boolJp = 1), (this.movekeys = !0), this.player.setSpeedType(2), this.player.move2("s");
                            }
                            if (e.keyCode == cc.macro.KEY.a) {
                                if (1 == this.movekeyd) return;
                                (i.boolJp = 1), (this.movekeya = !0), this.player.setSpeedType(2), this.player.move2("a");
                            }
                            if (e.keyCode == cc.macro.KEY.d) {
                                if (1 == this.movekeya) return;
                                (i.boolJp = 1), (this.movekeyd = !0), this.player.setSpeedType(2), this.player.move2("d");
                            }
                        } else {
                            var a = this.player.node.getComponent("ParatrooperPlayer");
                            if (e.keyCode == cc.macro.KEY.w) {
                                if (1 == this.movekeys) return;
                                (i.boolJp = 1), (this.movekeyw = !0), a.move2("w");
                            }
                            if (e.keyCode == cc.macro.KEY.s) {
                                if (1 == this.movekeyw) return;
                                (i.boolJp = 1), (this.movekeys = !0), a.move2("s");
                            }
                            if (e.keyCode == cc.macro.KEY.a) {
                                if (1 == this.movekeyd) return;
                                (i.boolJp = 1), (this.movekeya = !0), a.move2("a");
                            }
                            if (e.keyCode == cc.macro.KEY.d) {
                                if (1 == this.movekeya) return;
                                (i.boolJp = 1), (this.movekeyd = !0), a.move2("d");
                            }
                        }
                    },
                    onKeyUp: function (e) {
                        if ("Player<Player>" == this.player.name)
                            e.keyCode == cc.macro.KEY.w && ((this.movekeyw = !1), this.player.move2d("w")),
                                e.keyCode == cc.macro.KEY.s && ((this.movekeys = !1), this.player.move2d("s")),
                                e.keyCode == cc.macro.KEY.a && ((this.movekeya = !1), this.player.move2d("a")),
                                e.keyCode == cc.macro.KEY.d && ((this.movekeyd = !1), this.player.move2d("d"));
                        else {
                            var a = this.player.node.getComponent("ParatrooperPlayer");
                            e.keyCode == cc.macro.KEY.w && ((this.movekeyw = !1), a.move2d("w")),
                                e.keyCode == cc.macro.KEY.s && ((this.movekeys = !1), a.move2d("s")),
                                e.keyCode == cc.macro.KEY.a && ((this.movekeya = !1), a.move2d("a")),
                                e.keyCode == cc.macro.KEY.d && ((this.movekeyd = !1), a.move2d("d"));
                        }
                        this.movekeyw || this.movekeys || this.movekeya || this.movekeyd || ((i.boolJp = 0), this.player.setSpeedType(0));
                    },
                    _touchStartEvent: function (e) {
                        if (null != this.player && void 0 != this.player) {
                            var a = this.node.convertToNodeSpaceAR(e.getLocation());
                            if (this.joystickType === n.default.JoystickType.FIXED) {
                                this._stickPos = this.ring.getPosition();
                                var t = a.sub(this.ring.getPosition()).mag();
                                this._radius > t && this.dot.setPosition(a);
                            } else this.joystickType === n.default.JoystickType.FOLLOW && ((this._stickPos = a), (this.node.opacity = 255), (this._touchLocation = e.getLocation()), this.ring.setPosition(a), this.dot.setPosition(a));
                        }
                    },
                    _touchMoveEvent: function (e) {
                        if (this.joystickType === n.default.JoystickType.FOLLOW && this._touchLocation === e.getLocation()) return !1;
                        var a = this.ring.convertToNodeSpaceAR(e.getLocation()),
                            t = a.mag(),
                            i = this._stickPos.x + a.x,
                            o = this._stickPos.y + a.y,
                            r = cc.v2(i, o).sub(this.ring.getPosition()).normalize();
                        if (this._radius > t) this.dot.setPosition(cc.v2(i, o));
                        else {
                            var s = this._stickPos.x + r.x * this._radius,
                                c = this._stickPos.y + r.y * this._radius;
                            this.dot.setPosition(cc.v2(s, c));
                        }
                        null != this.player && void 0 != this.player && (this.player.setSpeedType(n.default.SpeedType.FAST), this.player.setDir(r));
                    },
                    _touchEndEvent: function () {
                        this.dot.setPosition(this.ring.getPosition()),
                            this.joystickType == n.default.JoystickType.FOLLOW && (this.node.opacity = 0),
                            null != this.player && void 0 != this.player && this.player.setSpeedType(n.default.SpeedType.STOP);
                    },
                }),
                    cc._RF.pop();
            },
            { GameConfig: "GameConfig", JoystickCommon: "JoystickCommon" },
        ],
        JsonPath: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "fdeeeZx8DNNF7H5MiqQJ5Cm", "JsonPath");
                (a.exports = { SkinsData: "data/skins", WeaponData: "data/weapon", RobotName: "data/robotName" }), cc._RF.pop();
            },
            {},
        ],
        Loading: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "3ed6bF+vYlBc42L7etJhZwX", "Loading");
                var n = e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    start: function () {},
                    clickStartGame: function () {
                        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT), cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE), cc.director.loadScene("MainScene"), n.getPlayerName();
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API" },
        ],
        LoginUI: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "8f722V7x2lPAZMMnHF0xOA7", "LoginUI");
                var n = e("Utils"),
                    i = e("GameConfig"),
                    o = e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        coinUI: cc.Label,
                        nameUI: cc.EditBox,
                        curPlayerAnim: sp.Skeleton,
                        onceClick: { default: !0, visible: !1 },
                        moreBtn: cc.Node,
                        moreSprites: [cc.SpriteFrame],
                        spriteIndex: 0,
                        activityBtnNode: cc.Node,
                        originActivityBtnPos: null,
                        btn_clickCoin: cc.Node,
                        btn_nameFresh: cc.Node,
                        btnCoin1: cc.Node,
                    },
                    onLoad: function () {
                        GameApp.eventManager.on(EventNames.EVENT_SHOW_ACTIVITYBTN, this.showActivityBtn.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_UPDATE_COIN_SHOW, this.updateCoinShow.bind(this)),
                            (this.getCoin = cc.find("Canvas/getCoin")),
                            GameApp.dataManager.initSomeAttr(),
                            GameApp.dataManager.setChoosedSkinId(GameApp.dataManager.userData.choosedSkinId),
                            this.updateCoinShow(),
                            this.updateNameShow(),
                            this.initSkinShow(),
                            (this.originActivityBtnPos = this.activityBtnNode.position),
                            this.showActivityBtn();
                        var e = cc.sys.localStorage.getItem("EatChicken_passDays");
                        null == e || void 0 == e || "" == e ? ((e = 0), cc.sys.localStorage.setItem("EatChicken_passDays", 0)) : (e = parseInt(e));
                        var a = 0,
                            t = new Date();
                        t = parseInt(t.getTime() / 1e3);
                        var i = cc.sys.localStorage.getItem("EatChicken_dailyDate");
                        if (null == i || void 0 == i || "" == i) cc.sys.localStorage.setItem("EatChicken_dailyDate", t), (a = 1);
                        else if (((i = parseInt(i)), console.log(t), console.log(i), t >= i)) {
                            var o = t - i,
                                r = Tools.toTimeString2(o);
                            a = Math.floor(r.hour / 24) + 1;
                        } else
                            console.log("\u73b0\u5728\u65f6\u95f4\u6bd4\u4e4b\u524d\u65f6\u95f4\u65e9\uff0c\u8c03\u65f6\u95f4\u4e86\uff1f"),
                                cc.sys.localStorage.setItem("EatChicken_dailyDate", t),
                                (a = 1),
                                cc.sys.localStorage.setItem("EatChicken_passDays", 0),
                                (e = 0);
                        a - e > 0 &&
                            (console.log("\u6267\u884c\u4e86\u5929\u6570\u52a0\u4e00"),
                            (e += a - e),
                            (GameApp.dataManager.globalData.curDailyGot = !1),
                            cc.sys.localStorage.setItem("EatChicken_dailyGotState", !1),
                            (GameApp.dataManager.globalData.activeValue = 0),
                            cc.sys.localStorage.setItem("EatChicken_activeValue", GameApp.dataManager.globalData.activeValue),
                            (GameApp.dataManager.globalData.progressGifts = [0, 0, 0, 0]),
                            cc.sys.localStorage.setItem("EatChicken_progressGifts", JSON.stringify(GameApp.dataManager.globalData.progressGifts))),
                            cc.sys.localStorage.setItem("EatChicken_passDays", e);
                        var s = e;
                        0 == (s %= 7) && (s = 7),
                            (GameApp.dataManager.globalData.days = s),
                            console.log(GameApp.dataManager.globalData.curDailyGot),
                            GameApp.dataManager.globalData.curDailyGot || GameApp.uiManager.showPopup("DailyPopup"),
                            GameApp.dataManager.globalData.recordState == RecordState.READY &&
                                n.startRecord(
                                    function () {
                                        GameApp.dataManager.changeRecordState(RecordState.RECORD);
                                    },
                                    function (e) {
                                        GameApp.uiManager.showToast("Đã đạt thời gian tối đa!"), null != e.videoPath && "" != e.videoPath && ((GameApp.dataManager.globalData.recordPath = e.videoPath), n.recorder.stop());
                                    }
                                );
                    },
                    onDestroy: function () {
                        GameApp.eventManager.removeListener(EventNames.EVENT_SHOW_ACTIVITYBTN), GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_COIN_SHOW);
                    },
                    onEnable: function () {
                        o.canPlayReward(), 0 != o.canPlayRewardNum ? (this.btnCoin1.active = !0) : (this.btnCoin1.active = !1);
                    },
                    soloBtnClick: function () {
                        i.GetPlayerData(), (i.PlayerData.boolStarGame = 1), i.SavePlayerData(), GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("SkinUI"), o.writeData4399();
                    },
                    onNameChanged: function (e) {
                        GameApp.dataManager.setPlayerName(Tools.getRandomElement(GameApp.dataManager.globalData.playerNameArr)), this.updateNameShow();
                    },
                    updateCoinShow: function () {
                        this.coinUI.string = GameApp.dataManager.userData.coinNum;
                    },
                    update: function () {
                        this.coinUI.string = GameApp.dataManager.userData.coinNum;
                    },
                    updateNameShow: function () {
                        0 == o.boolIsLogin
                            ? ((this.btn_nameFresh.active = !1), (GameApp.dataManager.userData.playerName = "Chiến Binh"), (this.nameUI.node.children[0].getComponent(cc.Label).string = GameApp.dataManager.userData.playerName))
                            : ((this.btn_nameFresh.active = !1), (GameApp.dataManager.userData.playerName = o.playerName), (this.nameUI.node.children[0].getComponent(cc.Label).string = GameApp.dataManager.userData.playerName));
                    },
                    initSkinShow: function () {
                        var e = this;
                        GameApp.dataManager.userData.choosedSkinId < 21
                            ? ((this.curPlayerAnim.skeletonData = GameApp.uiManager.normalSkinData), this.curPlayerAnim.setSkin(GameApp.dataManager.getSkinDataById(GameApp.dataManager.getChoosedSkinId()).skinname))
                            : (this.curPlayerAnim.skeletonData = GameApp.uiManager.advanceSkinDataGroup[GameApp.dataManager.userData.choosedSkinId - 21]),
                            GameApp.dataManager.userData.choosedSkinId < 21
                                ? this.curPlayerAnim.setAnimation(0, "await", !0)
                                : (this.curPlayerAnim.setAnimation(0, "await_main_1", !1),
                                  this.curPlayerAnim.setCompleteListener(function () {
                                      e.curPlayerAnim.setAnimation(0, "await_main_" + Tools.randomNum(1, 3), !1);
                                  }));
                    },
                    coinBtnClick: function () {
                        if (window.wx) GameApp.uiManager.showToast("Chưa mở");
                        else if (this.onceClick) {
                            (this.onceClick = !1), GameApp.audioManager.playEffect("click");
                            var e = this;
                            window.tt
                                ? n.addVideo(
                                      "addVideo",
                                      function () {
                                          (e.onceClick = !0), GameApp.uiManager.showToast("Nhận 500 xu"), GameApp.dataManager.addCoin(500), e.updateCoinShow();
                                      },
                                      function (a) {
                                          (e.onceClick = !0), a ? GameApp.uiManager.showToast(a) : GameApp.uiManager.showToast("Video không có sẵn!");
                                      }
                                  )
                                : ((e.onceClick = !0),
                                  0 != o.canPlayRewardNum ? ((this.btnCoin1.active = !0), (this.getCoin.active = !0)) : ((this.btnCoin1.active = !1), GameApp.uiManager.showToast("Hết lượt hôm nay!")),
                                  e.updateCoinShow());
                        }
                    },
                    skinBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("SkinUI");
                    },
                    boxBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("BoxUI");
                    },
                    rankBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("RankUI");
                    },
                    weaponBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("GunUI");
                    },
                    shopBtnClick: function () {
                        GameApp.audioManager.playEffect("click");
                    },
                    shareBtnClick: function () {
                        GameApp.audioManager.playEffect("click"),
                            n.shareFromHomePage(
                                function () {
                                    GameApp.uiManager.showToast("Tặng 50 xu!"), GameApp.dataManager.addCoin(50);
                                },
                                function () {
                                    GameApp.uiManager.showToast("Chia sẻ không thành công!");
                                }
                            );
                    },
                    moreGameBtnClick: function () {
                        (this.showActivityBtn(), window.tt) &&
                            "ios" !== tt.getSystemInfoSync().platform &&
                            tt.showMoreGamesModal({
                                appLaunchOptions: [{ appId: "ttXXXXXX", query: "foo=bar&baz=qux", extraData: {} }],
                                success: function (e) {
                                    console.log("success", e.errMsg);
                                },
                                fail: function (e) {
                                    console.log("fail", e.errMsg);
                                },
                            });
                    },
                    showActivityBtn: function () {
                        var e = this;
                        (this.activityBtnNode.getComponent(cc.Button).interactable = !0),
                            this.activityBtnNode.stopAllActions(),
                            this.activityBtnNode.runAction(
                                cc.sequence(
                                    cc.moveTo(0.2, cc.v2(this.originActivityBtnPos).add(cc.v2(90, 0))).easing(cc.easeBackOut()),
                                    cc.callFunc(function () {
                                        e.activityBtnNode.runAction(
                                            cc
                                                .sequence(
                                                    cc.moveBy(0.8, cc.v2(20, 0)).easing(cc.easeBounceOut(4)),
                                                    cc.moveBy(0.2, cc.v2(-20, 0)),
                                                    cc.moveBy(0.5, cc.v2(20, 0)).easing(cc.easeBounceOut(4)),
                                                    cc.moveBy(0.2, cc.v2(-20, 0)),
                                                    cc.delayTime(1)
                                                )
                                                .repeatForever()
                                        );
                                    })
                                )
                            );
                    },
                    activityBtnClick: function () {
                        GameApp.audioManager.playEffect("click"),
                            (this.activityBtnNode.getComponent(cc.Button).interactable = !1),
                            this.activityBtnNode.stopAllActions(),
                            this.activityBtnNode.runAction(cc.moveTo(0.2, this.originActivityBtnPos)),
                            GameApp.uiManager.showPopup("ActivityPopup");
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", GameConfig: "GameConfig", Utils: "Utils" },
        ],
        OpenBoxPopup: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "60b57i40c9EZ7Iq5VNeSDg5", "OpenBoxPopup");
                var n = e("Utils");
                e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: { boxAnim: sp.Skeleton, delayShowPanel: cc.Node, _itemType: 1, _itemNum: 0, _pieceIndex: 0, onceClick: { default: !0, visible: !1 } },
                    onLoad: function () {
                        this.canvas = cc.find("Canvas").getComponent("Canvas");
                    },
                    onEnable: function () {},
                    init: function (e, a, t, n) {
                        switch (((this._itemType = a), (this._itemNum = t), (this._pieceIndex = n), a)) {
                            case 1:
                                this.addCoin(t);
                                break;
                            case 2:
                                this.addPiece(t, n);
                        }
                        this.initSkinShow(e);
                    },
                    initSkinShow: function (e) {
                        var a = this;
                        this.boxAnim.skeletonData = e;
                        var t = ["appear", "big--small", "open", "open_await"],
                            n = 0;
                        this.boxAnim.setAnimation(0, t[n++], !1),
                            this.boxAnim.setCompleteListener(function () {
                                if (!(n > t.length - 1)) {
                                    var e = n == t.length - 1;
                                    n == t.length - 2 &&
                                        a.node.runAction(
                                            cc.sequence(
                                                cc.delayTime(0.8),
                                                cc.callFunc(function () {
                                                    (a.delayShowPanel.active = !0), Tools.scaleUpAndDowm(a.delayShowPanel.children[2]);
                                                })
                                            )
                                        ),
                                        a.boxAnim.setAnimation(0, t[n++], e);
                                }
                            });
                    },
                    sureBtnClick: function () {
                        if (window.wx) GameApp.uiManager.showToast("Chưa mở");
                        else if (this.onceClick) {
                            (this.onceClick = !1), GameApp.audioManager.playEffect("click");
                            var e = this;
                            if (window.tt)
                                n.addVideo(
                                    "addVideo",
                                    function () {
                                        switch (((e.onceClick = !0), GameApp.dataManager.addPlayedVideoNum(), e._itemType)) {
                                            case 1:
                                                GameApp.dataManager.addCoin(e._itemNum), GameApp.uiManager.showToast("Nhận *" + 2 * e._itemNum);
                                                break;
                                            case 2:
                                                GameApp.dataManager.addPieceNum(e._pieceIndex, e._itemNum),
                                                    GameApp.uiManager.showToast("Nhận <color=#faf80d>" + GameApp.dataManager.getSkinDataById(e._pieceIndex).name + "</color> mảnh Skin *" + 2 * e._itemNum);
                                        }
                                        GameApp.uiManager.closePopup("OpenBoxPopup");
                                    },
                                    function (a) {
                                        (e.onceClick = !0), a ? GameApp.uiManager.showToast(a) : GameApp.uiManager.showToast("Video không có sẵn!");
                                    }
                                );
                            else {
                                switch (((e.onceClick = !0), GameApp.dataManager.addPlayedVideoNum(), e._itemType)) {
                                    case 1:
                                        GameApp.dataManager.addCoin(e._itemNum), GameApp.uiManager.showToast("Nhận *" + 2 * e._itemNum);
                                        break;
                                    case 2:
                                        GameApp.dataManager.addPieceNum(e._pieceIndex, e._itemNum),
                                            GameApp.uiManager.showToast("Nhận <color=#faf80d>" + GameApp.dataManager.getSkinDataById(e._pieceIndex).name + "</color> mảnh skin *" + 2 * e._itemNum);
                                }
                                GameApp.uiManager.closePopup("OpenBoxPopup");
                            }
                        }
                    },
                    skipBtnClick: function () {
                        GameApp.audioManager.playEffect("click");
                        switch (this._itemType) {
                            case 1:
                                GameApp.uiManager.showToast("Nhận *" + this._itemNum);
                                break;
                            case 2:
                                GameApp.uiManager.showToast("Nhận <color=#faf80d>" + GameApp.dataManager.getSkinDataById(this._pieceIndex).name + "</color> mảnh skin *" + this._itemNum);
                        }
                        GameApp.uiManager.closePopup("OpenBoxPopup");
                    },
                    addCoin: function (e) {
                        this.delayShowPanel.children[1].getComponent(cc.RichText).string = "xu *" + e;
                    },
                    addPiece: function (e, a) {
                        this.setpieceIcon(a), (this.delayShowPanel.children[1].getComponent(cc.RichText).string = "<color=#faf80d>" + GameApp.dataManager.getSkinDataById(a).name + "</color> mảnh *" + e);
                    },
                    setpieceIcon: function (e) {
                        var a = this;
                        cc.loader.loadRes("texture/skin_piece/card_p_" + e, cc.SpriteFrame, function (e, t) {
                            a.delayShowPanel.children[0].getComponent(cc.Sprite).spriteFrame = t;
                        });
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", Utils: "Utils" },
        ],
        OverPopup: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "9381aqM1mNENZMWDyiPSiym", "OverPopup");
                var n = e("Utils");
                e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        winTitle: cc.Node,
                        winSprite: cc.Node,
                        loseTitle: cc.Node,
                        nameUI: cc.Label,
                        rankUI: cc.Label,
                        killUI: cc.Label,
                        allRewardUI: cc.Label,
                        rankRewardUI: cc.Label,
                        killRewardUI: cc.Label,
                        rewardBtnNode: cc.Button,
                        homeBtnNode: cc.Node,
                        onceClick: { default: !0, visible: !1 },
                        clickedShare: { default: !1, visible: !1 },
                    },
                    onLoad: function () {
                        var e = this;
                        this.node.runAction(
                            cc.sequence(
                                cc.delayTime(3),
                                cc.callFunc(function () {
                                    e.homeBtnNode.active = !0;
                                })
                            )
                        ),
                            Tools.scaleUpAndDowm(this.rewardBtnNode.node);
                    },
                    onEnable: function () {},
                    init: function (e, a) {
                        e
                            ? ((a = 1), (this.winTitle.active = !0), (this.winSprite.active = !0), GameApp.dataManager.userData.winNum++, GameApp.dataManager.addActivityNum(2, 1))
                            : ((this.loseTitle.active = !0), GameApp.dataManager.userData.alDieNum++),
                            a <= 5 && GameApp.dataManager.userData.top5Num++,
                            (this.nameUI.string = GameApp.dataManager.userData.playerName),
                            (this.rankUI.string = a);
                        var t = GameApp.dataManager.globalData.inGameKillNum[0]._killNum;
                        (GameApp.dataManager.userData.allKillNum += t), (this.killUI.string = t);
                        var n = 50 * (30 - a),
                            i = 100 * t,
                            o = n + i;
                        (this.allRewardUI.string = o),
                            (this.rankRewardUI.string = n),
                            (this.killRewardUI.string = i),
                            GameApp.dataManager.userData.allPlayNum++,
                            (GameApp.dataManager.userData.winRate = (GameApp.dataManager.userData.winNum / GameApp.dataManager.userData.allPlayNum).toFixed(2)),
                            (GameApp.dataManager.userData.kd = (GameApp.dataManager.userData.allKillNum / (0 == GameApp.dataManager.userData.alDieNum ? 1 : GameApp.dataManager.userData.alDieNum)).toFixed(2)),
                            (GameApp.dataManager.userData.avgRank = parseInt((GameApp.dataManager.userData.avgRank + a) / GameApp.dataManager.userData.allPlayNum)),
                            (GameApp.dataManager.userData.mostKill = t > GameApp.dataManager.userData.mostKill ? t : GameApp.dataManager.userData.mostKill),
                            (GameApp.dataManager.userData.avgLifeTime = parseInt((GameApp.dataManager.userData.avgLifeTime + GameApp.dataManager.globalData.lifeTime) / GameApp.dataManager.userData.allPlayNum)),
                            GameApp.dataManager.addCoin(o);
                    },
                    homeBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("LoginUI");
                    },
                    rewardBtnClick: function () {
                        if (window.wx) GameApp.uiManager.showToast("Chưa mở");
                        else if (this.onceClick) {
                            (this.onceClick = !1), GameApp.audioManager.playEffect("click");
                            var e = this;
                            window.tt
                                ? n.addVideo(
                                      "addVideo",
                                      function () {
                                          (e.onceClick = !0),
                                              GameApp.dataManager.addPlayedVideoNum(),
                                              GameApp.uiManager.showPopup(
                                                  "OpenBoxPopup",
                                                  function (a) {
                                                      var t = Tools.randomNum(100, 1e3);
                                                      GameApp.dataManager.addCoin(t), a.getComponent("OpenBoxPopup").init(GameApp.uiManager.boxSkinDataGroup[1], 1, t), (e.onceClick = !0), (e.rewardBtnNode.interactable = !1);
                                                  },
                                                  !1
                                              );
                                      },
                                      function (a) {
                                          (e.onceClick = !0), a ? GameApp.uiManager.showToast(a) : GameApp.uiManager.showToast("Video không có sẵn!");
                                      }
                                  )
                                : ((e.onceClick = !0),
                                  GameApp.dataManager.addPlayedVideoNum(),
                                  GameApp.uiManager.showPopup(
                                      "OpenBoxPopup",
                                      function (a) {
                                          var t = Tools.randomNum(100, 1e3);
                                          GameApp.dataManager.addCoin(t), a.getComponent("OpenBoxPopup").init(GameApp.uiManager.boxSkinDataGroup[1], 1, t), (e.onceClick = !0), (e.rewardBtnNode.interactable = !1);
                                      },
                                      !1
                                  ));
                        }
                    },
                    recordBtnClick: function () {
                        if (this.onceClick) {
                            this.onceClick = !1;
                            var e = this;
                            if ((GameApp.audioManager.playEffect("click"), this.clickedShare))
                                return (
                                    n.shareRecord(
                                        GameApp.dataManager.globalData.recordPath,
                                        function () {
                                            (e.onceClick = !0), console.log("\u5206\u4eab\u5b8c\u6210\u4e86");
                                        },
                                        function () {
                                            (e.onceClick = !0), console.log("\u5206\u4eab\u5931\u8d25\u4e86");
                                        }
                                    ),
                                    void GameApp.dataManager.changeRecordState(RecordState.READY)
                                );
                            if (GameApp.dataManager.globalData.recordTimer < 3) return (e.onceClick = !0), void GameApp.uiManager.showToast("Thời gian màn hình chưa đến 3s!");
                            console.log("\u7ed3\u675f\u4e86");
                            e = this;
                            n.stopRecord(function (a) {
                                null != a && (GameApp.dataManager.globalData.recordPath = a.videoPath),
                                    (e.clickedShare = !0),
                                    GameApp.dataManager.changeRecordState(RecordState.READY),
                                    n.shareRecord(
                                        GameApp.dataManager.globalData.recordPath,
                                        function () {
                                            (e.onceClick = !0), console.log("\u5206\u4eab\u5b8c\u6210\u4e86");
                                        },
                                        function () {
                                            (e.onceClick = !0), console.log("\u5206\u4eab\u5931\u8d25\u4e86");
                                        }
                                    );
                            });
                        }
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", Utils: "Utils" },
        ],
        ParatrooperEnemy: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "bf863F2RelJYKW79OD4Wy5c", "ParatrooperEnemy"),
                    cc.Class({
                        extends: cc.Component,
                        properties: { _borderGroup: [] },
                        init: function (e) {
                            this._borderGroup = e;
                        },
                        update: function () {
                            var e = this.node.position;
                            e.x < this._borderGroup[0].x && (e.x = this._borderGroup[0].x),
                                e.x > this._borderGroup[1].x && (e.x = this._borderGroup[1].x),
                                e.y > this._borderGroup[0].y && (e.y = this._borderGroup[0].y),
                                e.y < this._borderGroup[2].y && (e.y = this._borderGroup[2].y),
                                this.node.setPosition(e);
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        ParatrooperPlayer: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "248fc4jZoZIZJMVVhMKdpCk", "ParatrooperPlayer");
                var n = e("JoystickCommon"),
                    i = e("GameConfig");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        moveDir: { default: cc.v2(1, 0), displayName: "Move Dir", tooltip: "\u79fb\u52a8\u65b9\u5411" },
                        _speedType: { default: n.SpeedType.STOP, displayName: "Speed Type", type: n.SpeedType, tooltip: "\u901f\u5ea6\u7ea7\u522b" },
                        _moveSpeed: { default: 0, displayName: "Move Speed", tooltip: "\u79fb\u52a8\u901f\u5ea6" },
                        stopSpeed: { default: 0, type: cc.Integer, tooltip: "\u505c\u6b62\u65f6\u901f\u5ea6" },
                        fastSpeed: { default: 100, type: cc.Integer, tooltip: "\u6700\u5feb\u901f\u5ea6" },
                        _borderGroup: [],
                    },
                    onLoad: function () {
                        (this.movekeyw = !1), (this.movekeys = !1), (this.movekeya = !1), (this.movekeyd = !1), (this.movekeyspeed = 100);
                    },
                    onEnable: function () {},
                    onDisable: function () {},
                    onDestroy: function () {},
                    init: function (e) {
                        this._borderGroup = e;
                    },
                    move: function () {
                        var e = this.node.position.add(this.moveDir.mul(this._moveSpeed / 60));
                        e.x < this._borderGroup[0].x && (e.x = this._borderGroup[0].x),
                            e.x > this._borderGroup[1].x && (e.x = this._borderGroup[1].x),
                            e.y > this._borderGroup[0].y && (e.y = this._borderGroup[0].y),
                            e.y < this._borderGroup[2].y && (e.y = this._borderGroup[2].y),
                            this.node.setPosition(e);
                    },
                    setSpeedType: function (e) {
                        this._isDie || (this._speedType != e && (this._speedType = e));
                    },
                    setDir: function (e) {
                        this.moveDir = e;
                    },
                    move2: function (e) {
                        "w" == e && (this.movekeyw = !0), "s" == e && (this.movekeys = !0), "a" == e && (this.movekeya = !0), "d" == e && (this.movekeyd = !0);
                    },
                    move2d: function (e) {
                        "w" == e && (this.movekeyw = !1), "s" == e && (this.movekeys = !1), "a" == e && (this.movekeya = !1), "d" == e && (this.movekeyd = !1);
                    },
                    update: function (e) {
                        if (1 == i.boolJp)
                            return (
                                this.movekeyw && (this.node.y += this.movekeyspeed * e),
                                this.movekeys && (this.node.y -= this.movekeyspeed * e),
                                this.movekeya && (this.node.x -= this.movekeyspeed * e),
                                void (this.movekeyd && (this.node.x += this.movekeyspeed * e))
                            );
                        switch (this._speedType) {
                            case n.SpeedType.STOP:
                                this._moveSpeed = this.stopSpeed;
                                break;
                            case n.SpeedType.NORMAL:
                            case n.SpeedType.FAST:
                                this._moveSpeed = this.fastSpeed;
                        }
                        this.move();
                    },
                    lateUpdate: function (e) {
                        GameApp.uiManager.mapCamera.node.setPosition(this.node.position);
                    },
                }),
                    cc._RF.pop();
            },
            { GameConfig: "GameConfig", JoystickCommon: "JoystickCommon" },
        ],
        PlaneUI: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "31f24zVlipJbrVcAJ0zIaIp", "PlaneUI"),
                    cc.Class({
                        extends: cc.Component,
                        properties: { planeNode: cc.Node, mapNode: cc.Node, _chooseType: 0, _speedUp: !1 },
                        onLoad: function () {},
                        init: function (e) {
                            this._speedUp = e;
                            var a = Tools.randomNum(0, 3);
                            switch (
                                ((this._chooseType = a % 2),
                                this.planeNode.setPosition(this.node.children[0].convertToNodeSpaceAR(this.mapNode.children[a].convertToWorldSpaceAR(cc.v2(0, 0)))),
                                (this.planeNode.angle = [-135, 135, 45, -45][a]),
                                a)
                            ) {
                                case 0:
                                    this.planeNode.runAction(cc.moveTo(5, this.mapNode.children[2].position));
                                    break;
                                case 1:
                                    this.planeNode.runAction(cc.moveTo(5, this.mapNode.children[3].position));
                                    break;
                                case 2:
                                    this.planeNode.runAction(cc.moveTo(5, this.mapNode.children[0].position));
                                    break;
                                case 3:
                                    this.planeNode.runAction(cc.moveTo(5, this.mapNode.children[1].position));
                            }
                            GameApp.audioManager.playEffect("plane", 1, 2);
                        },
                        onEnable: function () {},
                        jumpBtnClick: function () {
                            var e = this;
                            GameApp.audioManager.playEffect("click"),
                                this.planeNode.stopAllActions(),
                                GameApp.uiManager.showUI("GameUI", function (a) {
                                    var t = 0,
                                        n = 0;
                                    0 == e._chooseType
                                        ? ((t = cc.v2(e.mapNode.children[0].position).sub(e.mapNode.children[2].position).mag()), (n = cc.v2(e.planeNode.position).sub(e.mapNode.children[0].position).mag()))
                                        : ((t = cc.v2(e.mapNode.children[1].position).sub(e.mapNode.children[3].position).mag()), (n = cc.v2(e.planeNode.position).sub(e.mapNode.children[3].position).mag()));
                                    var i = n / t;
                                    a.getComponent("GameUI").init(e._chooseType, i, e._speedUp);
                                });
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        Player: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "175c9l71jJIOK/erMuxWhel", "Player");
                var n = e("JoystickCommon"),
                    i = e("GameConfig");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        moveDir: { default: cc.v2(1, 0), displayName: "Move Dir", tooltip: "\u79fb\u52a8\u65b9\u5411" },
                        _speedType: { default: n.SpeedType.STOP, displayName: "Speed Type", type: n.SpeedType, tooltip: "\u901f\u5ea6\u7ea7\u522b" },
                        _moveSpeed: { default: 0, displayName: "Move Speed", tooltip: "\u79fb\u52a8\u901f\u5ea6" },
                        stopSpeed: { default: 0, type: cc.Integer, tooltip: "\u505c\u6b62\u65f6\u901f\u5ea6" },
                        roleAnim: { default: null, type: sp.Skeleton, tooltip: "\u89d2\u8272\u7684Spine\u52a8\u753b\u7ec4\u4ef6" },
                        _gunDir: { default: cc.v2(1, 0) },
                        gunAnim: { default: null, type: sp.Skeleton, tooltip: "\u67aa\u7684Spine\u52a8\u753b\u7ec4\u4ef6" },
                        gunNode: { default: null, type: cc.Node, tooltip: "\u67aa\u8282\u70b9" },
                        _haveGun: !1,
                        gunData: { default: {} },
                        skinData: { default: {} },
                        _pbc: cc.PhysicsBoxCollider,
                        nameUI: cc.Label,
                        bulletPrefab: cc.Prefab,
                        tempGroundWeapon: null,
                        hpBar: cc.ProgressBar,
                        amoBar: cc.ProgressBar,
                        starNode: cc.Node,
                        lastHitBullet: null,
                        _isAim: !1,
                        _aimTimer: 0,
                        _aimInterval: 0.05,
                        _stepTimer: 0,
                        _stepInterval: 0.3,
                        _isDie: !1,
                        arrowNode: cc.Node,
                        _mapNoGun: !1,
                        _isProtect: !1,
                        _isGas: !1,
                        _inGasTimer: 0,
                        _inGasInterval: 0.5,
                    },
                    onLoad: function () {
                        GameApp.eventManager.on(EventNames.EVENT_PLAYER_SHOOT, this.shoot.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_PLAYER_RELOAD, this.reload.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_PICKUP_WEAPON, this.pickUpWeapon.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_UPDATE_TOPBAR_SHOW, this.updatePlayerTopBarShow.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_AIM, this.aimState.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_THEGAMESTART, this.theGameStart.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_FLASH, this.doFlash.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_RESUME_HEALTH, this.doResumeHealth.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_UPDATE_STAR_SHOW, this.updateStarShow.bind(this)),
                            (this._pbc = this.getComponent(cc.PhysicsBoxCollider)),
                            (this._pbc.tag = Tags.player),
                            (this.movekeyw = !1),
                            (this.movekeys = !1),
                            (this.movekeya = !1),
                            (this.movekeyd = !1),
                            (this.movekeyspeed = 180);
                    },
                    onEnable: function () {},
                    onDisable: function () {},
                    onDestroy: function () {
                        GameApp.eventManager.removeListener(EventNames.EVENT_PLAYER_SHOOT),
                            GameApp.eventManager.removeListener(EventNames.EVENT_PLAYER_RELOAD),
                            GameApp.eventManager.removeListener(EventNames.EVENT_PICKUP_WEAPON),
                            GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_TOPBAR_SHOW),
                            GameApp.eventManager.removeListener(EventNames.EVENT_AIM),
                            GameApp.eventManager.removeListener(EventNames.EVENT_THEGAMESTART),
                            GameApp.eventManager.removeListener(EventNames.EVENT_FLASH),
                            GameApp.eventManager.removeListener(EventNames.EVENT_RESUME_HEALTH),
                            GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_STAR_SHOW);
                    },
                    init: function () {
                        GameApp.dataManager.globalData.isInGame && this.roleProtect(), (this.skinData = GameApp.dataManager.jsonData.SkinsData[GameApp.dataManager.userData.choosedSkinId - 1]), this.initNameShow(), this.initSkinShow();
                    },
                    roleProtect: function () {
                        GameApp.audioManager.playEffect("noticeFindGun", 0.5), this._haveGun || ((this._isProtect = !0), (this.arrowNode.active = !0)), (this.node.opacity = 100);
                    },
                    theGameStart: function () {
                        (this._isProtect = !1), (this.node.opacity = 255);
                    },
                    doFlash: function () {
                        this._isDie || this.move(null, !0);
                    },
                    doResumeHealth: function () {
                        this._isDie || this.resumeHealth(GameApp.dataManager.getResumeHealthNum());
                    },
                    resumeHealth: function (e) {
                        var a = this;
                        this.node.runAction(
                            cc
                                .sequence(
                                    cc.callFunc(function () {
                                        GameApp.uiManager.showGameObject(
                                            "InfoLabel",
                                            function (a) {
                                                a.getComponent(cc.RichText).string = "<b><color=green>+" + e + "</color></b>";
                                                var t = cc.callFunc(function () {
                                                        GameApp.dataManager.addHp(e), a.setPosition(0, 110);
                                                    }),
                                                    n = cc.sequence(
                                                        t,
                                                        cc.spawn(cc.fadeIn(0.2), cc.scaleTo(0, 1.5), cc.moveTo(0.3, cc.v2(0, 190))),
                                                        cc.fadeOut(0.3),
                                                        cc.callFunc(function () {
                                                            a.destroy();
                                                        })
                                                    );
                                                a.runAction(n);
                                            },
                                            a.node
                                        );
                                    }),
                                    cc.delayTime(0.3)
                                )
                                .repeat(4)
                        );
                    },
                    updateStarShow: function () {
                        for (var e = 0, a = 0; a < 4; a++) e += GameApp.dataManager.globalData.getItemAttrArr[a].rank;
                        if (0 == e) this.starNode.active = !1;
                        else {
                            var t = parseInt((e - 1) / 3),
                                n = e - 3 * t;
                            (this.starNode.children[0].getComponent(cc.Sprite).spriteFrame = GameApp.uiManager.commonAtlas.getSpriteFrame("level_bg_" + (t + 1))),
                                (this.starNode.children[1].getComponent(cc.Sprite).spriteFrame = GameApp.uiManager.commonAtlas.getSpriteFrame("level_star_" + (t + 1) + "_" + n)),
                                (this.starNode.active = !0);
                        }
                    },
                    initNameShow: function () {
                        this.nameUI.string = GameApp.dataManager.userData.playerName;
                    },
                    initSkinShow: function () {
                        GameApp.dataManager.userData.choosedSkinId < 21
                            ? ((this.roleAnim.skeletonData = GameApp.uiManager.normalSkinData), this.roleAnim.setSkin(this.skinData.skinname))
                            : (this.roleAnim.skeletonData = GameApp.uiManager.advanceSkinDataGroup[GameApp.dataManager.userData.choosedSkinId - 21]);
                        var e = GameApp.dataManager.userData.choosedSkinId < 21 ? ["await"] : ["await_fight_1"];
                        this.roleAnim.setAnimation(0, e[0], !0);
                    },
                    updatePlayerTopBarShow: function () {
                        (this.hpBar.progress = GameApp.dataManager.globalData.curHp / GameApp.dataManager.globalData.maxHp), (this.amoBar.progress = GameApp.dataManager.globalData.curAmoNum / GameApp.dataManager.globalData.maxAmoNum);
                    },
                    move: function (e, a) {
                        if (a) {
                            var t = GameApp.uiManager.getGame("GameMap").getComponent("GameMap").enemySpawnPosGroupNode.children,
                                n = this.node.position.add(this.moveDir.mul(1e3));
                            return n.x < t[0].x && (n.x = t[0].x), n.x > t[1].x && (n.x = t[1].x), n.y > t[0].y && (n.y = t[0].y), n.y < t[2].y && (n.y = t[2].y), this.node.setPosition(n), void GameApp.audioManager.playEffect("flash");
                        }
                        0 != this._moveSpeed && ((this._stepTimer -= e), this._stepTimer < 0 && ((this._stepTimer = this._stepInterval), GameApp.audioManager.playEffect("run", 0.3)));
                        var i = 90 - cc.misc.radiansToDegrees(Math.atan2(this.moveDir.y, this.moveDir.x));
                        this.roleAnim.node.scaleX = i > 180 || i < 0 ? -1 : 1;
                        var o = this.node.position.add(this.moveDir.mul(this._moveSpeed * e));
                        this.node.setPosition(o), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_MIPMAP_PLAYER, cc.v2(this.node.x / 50, this.node.y / 50));
                    },
                    move2: function (e) {
                        "w" == e && (this.movekeyw = !0), "s" == e && (this.movekeys = !0), "a" == e && ((this.movekeya = !0), (this.roleAnim.node.scaleX = -1)), "d" == e && ((this.movekeyd = !0), (this.roleAnim.node.scaleX = 1));
                    },
                    move2d: function (e) {
                        "w" == e && (this.movekeyw = !1), "s" == e && (this.movekeys = !1), "a" == e && ((this.movekeya = !1), (this.roleAnim.node.scaleX = -1)), "d" == e && ((this.movekeyd = !1), (this.roleAnim.node.scaleX = 1));
                    },
                    setSpeedType: function (e) {
                        if (!this._isDie && this._speedType != e) {
                            this._speedType = e;
                            var a = GameApp.dataManager.userData.choosedSkinId < 21 ? ["await", "run2", "run2"] : ["await_fight_1", "run", "run"];
                            this.roleAnim && this.roleAnim.setAnimation(0, a[e], !0);
                        }
                    },
                    setDir: function (e) {
                        this._isDie || ((this.moveDir = e), this._isAim || this.setGunDir(e));
                    },
                    setGunDir: function (e) {
                        if (this._haveGun && this.gunNode) {
                            null == e && (e = this.moveDir), (this._gunDir = e), (this.gunNode.rotation = -cc.misc.radiansToDegrees(Math.atan2(e.y, e.x)));
                            var a = 90 - this.gunNode.rotation;
                            this.gunNode.scaleY = a > 180 || a < 0 ? -1 : 1;
                        }
                    },
                    setArrowDir: function (e) {
                        this.arrowNode.setPosition(cc.v2(this.arrowNode.parent.position).add(e.mul(100))),
                            this.arrowNode.children[0].children[0].setPosition(cc.v2(this.arrowNode.children[0].position).add(e.mul(30))),
                            (this.arrowNode.children[0].children[0].rotation = -cc.misc.radiansToDegrees(Math.atan2(e.y, e.x)));
                    },
                    update: function (e) {
                        if ((console.log("---\u672a\u51fa\u53d1\u6309\u952e"), !this._isDie)) {
                            if (1 == i.boolJp)
                                return (
                                    this.movekeyw && (this.node.y += this.movekeyspeed * e),
                                    this.movekeys && (this.node.y -= this.movekeyspeed * e),
                                    this.movekeya && (this.node.x -= this.movekeyspeed * e),
                                    void (this.movekeyd && (this.node.x += this.movekeyspeed * e))
                                );
                            switch ((GameApp.dataManager.globalData.isInGame && (GameApp.dataManager.globalData.lifeTime += e), this._speedType)) {
                                case n.SpeedType.STOP:
                                    this._moveSpeed = this.stopSpeed;
                                    break;
                                case n.SpeedType.NORMAL:
                                    this._moveSpeed = GameApp.dataManager.globalData.curSpeed;
                                    break;
                                case n.SpeedType.FAST:
                                    this._moveSpeed = GameApp.dataManager.globalData.curSpeed + Math.floor(GameApp.dataManager.globalData.curSpeed * GameApp.dataManager.getEquipItemAttr(EquipType.speed));
                            }
                            this.move(e),
                                this.checkGas(e),
                                this._haveGun || this._mapNoGun || ((this._aimTimer -= e), this._aimTimer < 0 && ((this._aimTimer = this._aimInterval), this.arrowToNearestGun())),
                                this._isProtect || (this._isAim ? ((this._aimTimer -= e), this._aimTimer < 0 && ((this._aimTimer = this._aimInterval), this.aimToNearest())) : (this._aimTimer = 0));
                        }
                    },
                    lateUpdate: function (e) {
                        GameApp.uiManager.mapCamera.node.setPosition(this.node.position);
                    },
                    checkGas: function (e) {
                        null != GameApp.dataManager.globalData.gasConfig
                            ? cc.v2(GameApp.dataManager.globalData.gasConfig.safePosition).sub(cc.v2(this.node.position)).mag() > GameApp.dataManager.globalData.gasConfig.gasCircle / 2
                                ? ((this._inGasTimer -= e), this._inGasTimer < 0 && ((this._inGasTimer = this._inGasInterval), this.beDamage(5, -1)), (this._isGas = !0))
                                : (this._isGas = !1)
                            : (this._isGas = !1);
                    },
                    aimState: function (e) {
                        this._isDie || (this._haveGun && ((this._isAim = e), this._isAim && this.aimToNearest()));
                    },
                    aimToNearest: function () {
                        var e = GameApp.dataManager.globalData.allRoleArr.concat();
                        Tools.removeArray(e, this.getComponent("Player"));
                        for (var a = 1e6, t = -1, n = 0; n < e.length; n++) {
                            var i = cc.v2(e[n].node.position).sub(cc.v2(this.node.position)).mag();
                            i < a && i < 1.4 * this.gunData.range && ((a = i), (t = n));
                        }
                        var o = null;
                        if (-1 == t) this._isAim = !1;
                        else {
                            this._isAim = !0;
                            var r = e[t].node;
                            o = cc.v2(r.position).sub(cc.v2(this.node.position)).normalize();
                        }
                        this.setGunDir(o);
                    },
                    arrowToNearestGun: function () {
                        for (var e = GameApp.dataManager.globalData.allGunArr.concat(), a = 1e6, t = -1, n = 0; n < e.length; n++) {
                            var i = cc.v2(e[n].position).sub(cc.v2(this.node.position)).mag();
                            i < a && ((a = i), (t = n));
                        }
                        var o = null;
                        if (-1 == t) (this._mapNoGun = !0), (this.arrowNode.active = !1);
                        else {
                            var r = e[t];
                            (o = cc.v2(r.position).sub(cc.v2(this.node.position)).normalize()), this.setArrowDir(o);
                        }
                    },
                    shoot: function () {
                        if (!this._isDie && this._haveGun) {
                            if (GameApp.dataManager.reduceAmo()) {
                                this.gunAnim.setAnimation(0, "attack_" + this.gunData.skinname, !1);
                                var e = Math.ceil(this.gunData.power * (GameApp.dataManager.globalData.curDamage + GameApp.dataManager.getEquipItemAttr(EquipType.damage))),
                                    a = !1;
                                if ((Tools.isCrit(GameApp.dataManager.globalData.curCrit + GameApp.dataManager.getEquipItemAttr(EquipType.crit)) && ((e *= 2), (a = !0)), 1002 == this.gunData.weaponid)) {
                                    GameApp.audioManager.playEffect("shot_shoot", 0.6);
                                    var t = cc.instantiate(this.bulletPrefab),
                                        n = cc.instantiate(this.bulletPrefab),
                                        i = cc.instantiate(this.bulletPrefab),
                                        o = this.node.parent.parent.convertToNodeSpaceAR(this.gunNode.children[0].convertToWorldSpaceAR(cc.v2(0, 0)));
                                    (t.parent = n.parent = i.parent = this.node.parent.parent),
                                        t.setPosition(o),
                                        n.setPosition(o),
                                        i.setPosition(o),
                                        (t.rotation = this.gunNode.rotation),
                                        (n.rotation = this.gunNode.rotation + 30),
                                        (i.rotation = this.gunNode.rotation - 30);
                                    var r = cc.v2(this._gunDir),
                                        s = t.getComponent("Bullet");
                                    (s._belongTag = this._pbc.tag), (s._belongName = GameApp.dataManager.userData.playerName), (s._flyDir = r), s.init(this.gunData, e, a);
                                    var c = n.getComponent("Bullet");
                                    (c._belongTag = this._pbc.tag), (c._belongName = GameApp.dataManager.userData.playerName), (c._flyDir = r.rotate(-cc.misc.degreesToRadians(30))), c.init(this.gunData, e, a);
                                    var d = i.getComponent("Bullet");
                                    (d._belongTag = this._pbc.tag), (d._belongName = GameApp.dataManager.userData.playerName), (d._flyDir = r.rotate(-cc.misc.degreesToRadians(-30))), d.init(this.gunData, e, a);
                                } else {
                                    1003 == this.gunData.weaponid || 1103 == this.gunData.weaponid
                                        ? GameApp.audioManager.playEffect("charge_shoot", 0.6)
                                        : 1005 == this.gunData.weaponid || 1105 == this.gunData.weaponid
                                        ? GameApp.audioManager.playEffect("missile_shoot", 0.6)
                                        : 1102 == this.gunData.weaponid && GameApp.audioManager.playEffect("shot_shoot", 0.6);
                                    var l = cc.instantiate(this.bulletPrefab),
                                        p = this.node.parent.parent.convertToNodeSpaceAR(this.gunNode.children[0].convertToWorldSpaceAR(cc.v2(0, 0)));
                                    (l.parent = this.node.parent.parent), l.setPosition(p), (l.rotation = this.gunNode.rotation);
                                    var h = l.getComponent("Bullet");
                                    (h._belongTag = this._pbc.tag), (h._belongName = GameApp.dataManager.userData.playerName), (h._flyDir = this._gunDir), h.init(this.gunData, e, a);
                                }
                                this.updatePlayerTopBarShow();
                            } else GameApp.uiManager.getUI(GameApp.uiManager.uiRoot.children[0].name).getComponent(GameApp.uiManager.uiRoot.children[0].name).reloadBtnClick();
                            0 == GameApp.dataManager.globalData.curAmoNum && GameApp.uiManager.getUI(GameApp.uiManager.uiRoot.children[0].name).getComponent(GameApp.uiManager.uiRoot.children[0].name).reloadBtnClick();
                        }
                    },
                    reload: function () {
                        this._isDie || (this._haveGun && (GameApp.audioManager.playEffect("reload", 0.6), this.gunAnim.setAnimation(0, "reload_" + this.gunData.skinname, !1)));
                    },
                    equipWeapon: function (e) {
                        GameApp.audioManager.playEffect("pick_item", 0.6),
                            (this.gunData = GameApp.dataManager.jsonData.WeaponData[e]),
                            (this._haveGun = !0),
                            (this.arrowNode.active = !1),
                            GameApp.eventManager.emit(EventNames.EVENT_SHOW_RELOAD_UI, !0),
                            (GameApp.dataManager.globalData.shootInterval = this.gunData.shootdelay),
                            (GameApp.dataManager.globalData.reloadInterval = this.gunData.reloaddelay),
                            (GameApp.dataManager.globalData.maxAmoNum = this.gunData.clipnum),
                            GameApp.dataManager.reloadAmo(),
                            (this.gunNode.active = !0),
                            (this.gunAnim.skeletonData = e < 3 ? GameApp.uiManager.gunSkinDataGroup[0] : GameApp.uiManager.gunSkinDataGroup[1]),
                            this.gunAnim.setSkin(this.gunData.skinname),
                            this.setGunDir(this.moveDir);
                    },
                    getItem: function () {},
                    onBeginContact: function (e, a, t) {
                        if (a.tag != Tags.empty)
                            if (t.tag == Tags.item) {
                                var n = t.node.getComponent("GroundItem");
                                n.itemType._type == ItemType.weapon
                                    ? ((this.tempGroundWeapon = n),
                                      this._haveGun
                                          ? GameApp.eventManager.emit(EventNames.EVENT_SHOW_GUN_UI, !0, GameApp.dataManager.jsonData.WeaponData[n.itemType._kind])
                                          : (Tools.removeArray(GameApp.dataManager.globalData.allGunArr, t.node), this.pickUpWeapon()))
                                    : n.itemType._type == ItemType.item && this.getItem();
                            } else if (t.tag == Tags.bullet) {
                                if (!GameApp.dataManager.globalData.isInGame) return;
                                if (this._isDie) return;
                                var i = t.node.getComponent("Bullet");
                                if (i._belongTag == a.tag) return;
                                if (t.node == this.lastHitBullet) return;
                                (this.lastHitBullet = t.node), this.beDamage(i._power, i._belongTag, i._belongName, i._isCrit);
                            } else if (t.tag == Tags.boom) {
                                if (this._isDie) return;
                                this.beDamage(999, -2);
                            }
                    },
                    onEndContact: function (e, a, t) {
                        if (a.tag != Tags.empty && t.tag == Tags.item) {
                            var n = t.node.getComponent("GroundItem");
                            n.itemType._type == ItemType.weapon ? ((this.tempGroundWeapon = null), GameApp.eventManager.emit(EventNames.EVENT_SHOW_GUN_UI, !1)) : (n.itemType._type, ItemType.item);
                        }
                    },
                    pickUpWeapon: function () {
                        var e = this.tempGroundWeapon.itemType._kind;
                        if (this._haveGun) {
                            var a = { _type: ItemType.weapon, _kind: GameApp.dataManager.jsonData.WeaponData.indexOf(this.gunData) };
                            this.tempGroundWeapon.init(a), GameApp.eventManager.emit(EventNames.EVENT_SHOW_GUN_UI, !0, this.gunData);
                        } else this.tempGroundWeapon.node.destroy();
                        this.equipWeapon(e);
                    },
                    beDamage: function (e, a, t, n) {
                        var i = this;
                        if (
                            (GameApp.uiManager.showGameObject(
                                "InfoLabel",
                                function (a) {
                                    var t = a.parent.convertToNodeSpaceAR(i.node.convertToWorldSpaceAR(cc.v2(0.5, 0.5)));
                                    a.setPosition(t);
                                    var o = Math.ceil(e * GameApp.dataManager.globalData.curDef) + Math.ceil(e * GameApp.dataManager.getEquipItemAttr(EquipType.def)),
                                        r = "<color=red>-" + (e -= o) + "</color>";
                                    n && (r = "<color=red>Chí mạng -" + e + "</color>"), o && (r += "<color=#0fffff>miễn thương" + o + "</color>"), (a.getComponent(cc.RichText).string = "<b>" + r + "</b>");
                                    var s = cc.v2(Tools.randomNum(60, 100), Tools.randomNum(60, 100)),
                                        c = [t, cc.v2(t.x + s.x - 20, t.y + s.y + 20), t.add(s)],
                                        d = cc.sequence(
                                            cc.spawn(cc.fadeIn(0.2), cc.scaleTo(0.3, 1.5), cc.bezierTo(0.3, c)),
                                            cc.delayTime(0.5),
                                            cc.fadeOut(0.3),
                                            cc.callFunc(function () {
                                                a.destroy();
                                            })
                                        );
                                    a.runAction(d);
                                },
                                this.node.parent.parent
                            ),
                            GameApp.dataManager.reduceHp(e))
                        );
                        else {
                            if ((GameApp.audioManager.playEffect("maleDeath", 0.5), (this.node.parent = GameApp.uiManager.getGame("GameMap").getChildByName("DeadObjectNode")), (this._pbc.enabled = !1), (this._isDie = !0), -1 == a))
                                GameApp.uiManager.showToast(GameApp.dataManager.userData.playerName + " rời khỏi trò chơi");
                            else if (-2 == a) GameApp.uiManager.showToast(GameApp.dataManager.userData.playerName + " ném bom");
                            else {
                                var o = GameApp.dataManager.addKillNum(a, t);
                                if (o > 1) {
                                    var r = o > 5 ? 5 : o;
                                    GameApp.audioManager.playEffect("kill" + r, 0.5), GameApp.uiManager.showToast(t, null, o);
                                } else GameApp.uiManager.showToast(t + " đã hạ " + GameApp.dataManager.userData.playerName);
                            }
                            if (this._haveGun) {
                                var s = GameApp.uiManager.gameRoot.children[0].getComponent("GameMap");
                                GameApp.uiManager.showGameObject("GroundItem", function (e) {
                                    var a = s.allGunNode.convertToNodeSpaceAR(i.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                    (e.parent = s.allGunNode), e.setPosition(a);
                                    var t = { _type: ItemType.weapon, _kind: Tools.getIndex(GameApp.dataManager.jsonData.WeaponData, i.gunData) };
                                    e.getComponent("GroundItem").init(t), GameApp.dataManager.globalData.allGunArr.push(e);
                                });
                            }
                            var c = GameApp.dataManager.userData.choosedSkinId < 21 ? ["dead"] : ["dead2"];
                            this.roleAnim.setAnimation(0, c[0], !1), (this.gunNode.active = !1), Tools.removeArray(GameApp.dataManager.globalData.allRoleArr, this.node.getComponent("Player"));
                            var d = GameApp.dataManager.globalData.allRoleArr.length;
                            null == GameApp.uiManager.getPopup("OverPopup") &&
                                GameApp.uiManager.showPopup("OverPopup", function (e) {
                                    e.getComponent("OverPopup").init(!1, d + 1);
                                }),
                                GameApp.eventManager.emit(EventNames.EVENT_SHOW_ALLROLENUM_UI);
                        }
                    },
                }),
                    cc._RF.pop();
            },
            { GameConfig: "GameConfig", JoystickCommon: "JoystickCommon" },
        ],
        PrefabPath: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "d25dcKl/4dFeZ+1ROEIEuTd", "PrefabPath");
                (a.exports = {
                    ToastUI: "uiPrefab/ToastUI",
                    SplashUI: "uiPrefab/SplashUI",
                    LoginUI: "uiPrefab/LoginUI",
                    SkinUI: "uiPrefab/SkinUI",
                    SkinInfoPopup: "uiPrefab/SkinInfoPopup",
                    BoxUI: "uiPrefab/BoxUI",
                    GunUI: "uiPrefab/GunUI",
                    RankUI: "uiPrefab/RankUI",
                    GiftPopup: "uiPrefab/GiftPopup",
                    OpenBoxPopup: "uiPrefab/OpenBoxPopup",
                    PrepareUI: "uiPrefab/PrepareUI",
                    PrepareMap: "uiPrefab/PrepareMap",
                    Player: "game/Player",
                    Enemy: "game/Enemy",
                    GroundItem: "game/GroundItem",
                    PlaneUI: "uiPrefab/PlaneUI",
                    GameUI: "uiPrefab/GameUI",
                    GameMap: "uiPrefab/GameMap",
                    ParatrooperPlayer: "game/ParatrooperPlayer",
                    ParatrooperEnemy: "game/ParatrooperEnemy",
                    InfoLabel: "game/InfoLabel",
                    DropBox: "game/DropBox",
                    MipBox: "game/MipBox",
                    Boom: "game/Boom",
                    OverPopup: "uiPrefab/OverPopup",
                    DailyPopup: "uiPrefab/DailyPopup",
                    ActivityPopup: "uiPrefab/ActivityPopup",
                    GetCoin: "uiPrefab/GetCoin",
                }),
                    cc._RF.pop();
            },
            {},
        ],
        PrepareMap: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "f0242hMp5pE/YgD+xqZxRob", "PrepareMap");
                e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        tiledMap: cc.TiledMap,
                        objectPrefab: cc.Prefab,
                        colliderPrefab: cc.Prefab,
                        groundItemPrefab: cc.Prefab,
                        waitLabel: cc.Node,
                        allObjectNode: cc.Node,
                        allColliderNode: cc.Node,
                        allGunNode: cc.Node,
                        enemySpawnPosGroupNode: cc.Node,
                        mapAtlas: cc.SpriteAtlas,
                        _timer0: 0.1,
                        _timer: 0.1,
                        readyToSort: !1,
                    },
                    onLoad: function () {
                        this.initMapShow(), this.showPlayer(), this.showEnemy();
                    },
                    onEnable: function () {},
                    update: function (e) {
                        this.readyToSort && ((this._timer -= e), this._timer < 0 && ((this._timer = this._timer0), this.sortAll()));
                    },
                    initMapShow: function () {
                        var e = this;
                        (GameApp.dataManager.globalData.allRoleArr = []), (GameApp.dataManager.globalData.allGunArr = []);
                        var a = this.tiledMap.getLayer("wall");
                        this.tiledMap.getObjectGroup("dynamic")._objects.forEach(function (t) {
                            var n = cc.instantiate(e.objectPrefab);
                            (n.getComponent(cc.Sprite).spriteFrame = e.mapAtlas.getSpriteFrame(t.name.split(".")[0])), (n.parent = e.allColliderNode);
                            var i = a.getPositionAt(e.getTilePos(cc.v2(t.x, t.y)));
                            n.setPosition(i);
                            var o = e.allObjectNode.convertToNodeSpaceAR(n.convertToWorldSpaceAR(cc.v2(0, 0)));
                            (n.parent = e.allObjectNode), n.setPosition(o);
                        }),
                            this.tiledMap.getObjectGroup("collision")._objects.forEach(function (a) {
                                var t = cc.instantiate(e.colliderPrefab),
                                    n = t.getComponent(cc.PhysicsBoxCollider);
                                (n.size = cc.size(a.width, a.height)), (n.offset = cc.v2(a.width / 2, -a.height / 2)), n.apply(), e.allColliderNode.addChild(t), t.setPosition(cc.v2(a.x, a.y)), (n.tag = Tags.collider);
                            }),
                            this.tiledMap.getObjectGroup("gun")._objects.forEach(function (t) {
                                var n = cc.instantiate(e.groundItemPrefab);
                                n.parent = e.allColliderNode;
                                var i = a.getPositionAt(e.getTilePos(cc.v2(t.x, t.y)));
                                n.setPosition(i);
                                var o = e.allGunNode.convertToNodeSpaceAR(n.convertToWorldSpaceAR(cc.v2(0, 0)));
                                (n.parent = e.allGunNode), n.setPosition(o);
                                var r = { _type: ItemType.weapon, _kind: Tools.randomNum(0, 5) };
                                n.getComponent("GroundItem").init(r), GameApp.dataManager.globalData.allGunArr.push(n);
                            });
                    },
                    getTilePos: function (e) {
                        var a = this.tiledMap.node.getContentSize(),
                            t = this.tiledMap.getTileSize(),
                            n = Math.floor(e.x / t.width),
                            i = Math.floor((a.height - e.y) / t.height);
                        return cc.v2(n, i);
                    },
                    showPlayer: function () {
                        var e = this;
                        GameApp.uiManager.showGameObject(
                            "Player",
                            function (a) {
                                var t = a.getComponent("Player");
                                (GameApp.uiManager.getUI("PrepareUI").getComponent("PrepareUI").joystick.getComponent("Joystick").player = t), t.init(), GameApp.dataManager.globalData.allRoleArr.push(t), (e.readyToSort = !0);
                            },
                            this.allObjectNode
                        );
                    },
                    showEnemy: function () {
                        for (var e = this.enemySpawnPosGroupNode.children, a = Tags.enemy, t = 0; t < 5; t++)
                            t + 1 != GameApp.dataManager.userData.choosedSkinId &&
                                GameApp.uiManager.showGameObject(
                                    "Enemy",
                                    function (n) {
                                        (n.getComponent(cc.PhysicsBoxCollider).tag = a++), n.setPosition(cc.v2(Tools.randomNum(e[0].x, e[1].x), Tools.randomNum(e[2].y, e[0].y)));
                                        var i = n.getComponent("Enemy");
                                        i.init(t + 1, GameApp.dataManager.jsonData.RobotName[t]), GameApp.dataManager.globalData.allRoleArr.push(i);
                                    },
                                    this.allObjectNode
                                );
                        var n = function () {
                            30 != t &&
                                (t + 1 == GameApp.dataManager.userData.choosedSkinId ||
                                    GameApp.uiManager.showGameObject(
                                        "Enemy",
                                        function (n) {
                                            (n.getComponent(cc.PhysicsBoxCollider).tag = a++), n.setPosition(cc.v2(Tools.randomNum(e[0].x, e[1].x), Tools.randomNum(e[2].y, e[0].y)));
                                            var i = n.getComponent("Enemy");
                                            i.init(t + 1, GameApp.dataManager.jsonData.RobotName[t]), GameApp.dataManager.globalData.allRoleArr.push(i), GameApp.eventManager.emit(EventNames.EVENT_SHOW_ALLROLENUM_UI);
                                        },
                                        this.allObjectNode
                                    ),
                                t++);
                        }.bind(this);
                        this.schedule(n, 0.5, 25, 0);
                    },
                    sortAll: function () {
                        var e = this.allObjectNode.children.concat(),
                            a = [],
                            t = [];
                        for (var n in e) GameApp.uiManager.isInMapSight(e[n]) && (a.push({ y: e[n].y, index: n }), t.push(n));
                        for (var i in (a.sort(function (e, a) {
                            return a.y - e.y;
                        }),
                        a))
                            e[a[i].index].setSiblingIndex(t[i]);
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API" },
        ],
        PrepareUI: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "2e391TZyyJPmYBLDqA+YUbL", "PrepareUI");
                e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: {
                        joystick: { default: null, type: cc.Node, tooltip: "\u6447\u6746\u7684\u811a\u672c" },
                        soundNode: cc.Node,
                        shootBtn: cc.Node,
                        reloadBtnNode: cc.Node,
                        amoUI: cc.Label,
                        allRoleNumUI: cc.Label,
                        weaponBtnNode: cc.Node,
                        prepareTopNode: cc.Node,
                        countDownSpGroup: [cc.SpriteFrame],
                        _shootFlag: !1,
                        _shootTimer: 0,
                        _reloadFlag: !1,
                        _reloadTimer: 0,
                        _timeCountDown: 20,
                        _onceCountDownAnim: !1,
                        _onceExecute: !0,
                    },
                    onLoad: function () {
                        var e = this;
                        (GameApp.dataManager.globalData.isInGame = !1),
                            GameApp.eventManager.on(EventNames.EVENT_UPDATE_AMO_SHOW, this.updateAmoShow.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_SHOW_GUN_UI, this.updateGunUIShow.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_SHOW_RELOAD_UI, this.updateReloadUIShow.bind(this)),
                            GameApp.eventManager.on(EventNames.EVENT_SHOW_ALLROLENUM_UI, this.updateAllRoleNumUIShow.bind(this)),
                            this.shootBtn.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this),
                            this.shootBtn.on(cc.Node.EventType.TOUCH_END, this.onTouchLeave, this),
                            this.shootBtn.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchLeave, this),
                            GameApp.uiManager.showGame("PrepareMap"),
                            this.weaponBtnNode.children[0].runAction(cc.rotateBy(0.2, 90).repeatForever()),
                            this.prepareTopNode.children[0].runAction(
                                cc
                                    .sequence(
                                        cc.callFunc(function () {
                                            e.prepareTopNode.children[0].children[0].active = !0;
                                        }),
                                        cc.delayTime(0.4),
                                        cc.callFunc(function () {
                                            e.prepareTopNode.children[0].children[1].active = !0;
                                        }),
                                        cc.delayTime(0.4),
                                        cc.callFunc(function () {
                                            e.prepareTopNode.children[0].children[2].active = !0;
                                        }),
                                        cc.delayTime(0.4),
                                        cc.callFunc(function () {
                                            (e.prepareTopNode.children[0].children[0].active = !1), (e.prepareTopNode.children[0].children[1].active = !1), (e.prepareTopNode.children[0].children[2].active = !1);
                                        }),
                                        cc.delayTime(0.4)
                                    )
                                    .repeatForever()
                            ),
                            (this._timeCountDown = 20),
                            GameApp.dataManager.globalData.inGameKillNum.push({ _killNum: 0, _belongName: GameApp.dataManager.userData.playerName }),
                            this.updateSoundBtnShow(),
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
                    },
                    onDestroy: function () {
                        GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_AMO_SHOW),
                            GameApp.eventManager.removeListener(EventNames.EVENT_SHOW_GUN_UI),
                            GameApp.eventManager.removeListener(EventNames.EVENT_SHOW_RELOAD_UI),
                            GameApp.eventManager.removeListener(EventNames.EVENT_SHOW_ALLROLENUM_UI);
                    },
                    onKeyDown: function (e) {
                        switch (e.keyCode) {
                            case cc.macro.KEY.j:
                                console.log("Press a key"), this.onTouchBegin();
                                break;
                            case cc.macro.KEY.h:
                                console.log("Press a key"), this.reloadBtnClick();
                        }
                    },
                    onKeyUp: function (e) {
                        switch (e.keyCode) {
                            case cc.macro.KEY.j:
                                console.log("release a key"), this.onTouchLeave();
                                break;
                            case cc.macro.KEY.h:
                                console.log("Press a key"), this.reloadBtnClick();
                        }
                    },
                    update: function (e) {
                        if (
                            ((this._shootTimer -= e),
                            this._shootFlag && this._shootTimer < 0 && !this._reloadFlag && ((this._shootTimer = GameApp.dataManager.globalData.shootInterval), this.shoot()),
                            this._reloadFlag && ((this._reloadTimer -= e), this._reloadFlag && this._reloadTimer < 0 && ((this._reloadFlag = !1), GameApp.dataManager.reloadAmo())),
                            (this._timeCountDown -= e),
                            this._timeCountDown < 6 &&
                                ((this.prepareTopNode.children[0].active = !1),
                                (this.prepareTopNode.children[1].active = !0),
                                (this.prepareTopNode.children[2].active = !0),
                                this.countDownAnim(),
                                (this.prepareTopNode.children[2].getComponent(cc.Sprite).spriteFrame = this.countDownSpGroup[Math.floor(this._timeCountDown - 1)])),
                            Math.floor(this._timeCountDown) <= 0)
                        ) {
                            if (!this._onceExecute) return;
                            (this._onceExecute = !1), GameApp.audioManager.playEffect("click"), GameApp.uiManager.closePopup("GiftPopup"), GameApp.uiManager.getUI("PrepareUI").getComponent("PrepareUI").showPlaneUI(!1);
                        }
                    },
                    showPlaneUI: function (e) {
                        GameApp.uiManager.showUI("PlaneUI", function (a) {
                            a.getComponent("PlaneUI").init(e);
                        });
                    },
                    countDownAnim: function () {
                        var e = this;
                        if (!this._onceCountDownAnim) {
                            (this._onceCountDownAnim = !0), cc.log("\u64ad\u653e\u4e86"), GameApp.audioManager.playEffect("waitSceneCutDown");
                            var a = cc.sequence(
                                cc.scaleTo(0.2, 1.5),
                                cc.scaleTo(0.3, 1),
                                cc.delayTime(0.5),
                                cc.callFunc(function () {
                                    e._onceCountDownAnim = !1;
                                })
                            );
                            this.prepareTopNode.children[2].runAction(a);
                        }
                    },
                    onTouchBegin: function (e) {
                        this._shootFlag = !0;
                    },
                    onTouchLeave: function (e) {
                        (this._shootFlag = !1), GameApp.eventManager.emit(EventNames.EVENT_AIM, !1);
                    },
                    shoot: function () {
                        GameApp.eventManager.emit(EventNames.EVENT_AIM, !0), GameApp.eventManager.emit(EventNames.EVENT_PLAYER_SHOOT);
                    },
                    updateAmoShow: function () {
                        (this.amoUI.string = GameApp.dataManager.globalData.curAmoNum), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_TOPBAR_SHOW);
                    },
                    updateGunUIShow: function (e, a) {
                        a &&
                            (console.log(a),
                            (this.weaponBtnNode.getComponent(cc.Sprite).spriteFrame = GameApp.uiManager.commonAtlas.getSpriteFrame("ui_weapon_" + a.weaponid)),
                            (this.weaponBtnNode.children[1].children[0].getComponent(cc.Label).string = a.name)),
                            (this.weaponBtnNode.active = e),
                            e && ((this.weaponBtnNode.scaleX = 0), (this.weaponBtnNode.scaleY = 0), this.weaponBtnNode.runAction(cc.scaleTo(0.3, 1).easing(cc.easeBackOut())));
                    },
                    updateReloadUIShow: function (e) {
                        this.reloadBtnNode.active = e;
                    },
                    updateAllRoleNumUIShow: function () {
                        this.allRoleNumUI.string = GameApp.dataManager.globalData.allRoleArr.length;
                    },
                    reloadBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), this._reloadFlag || ((this._reloadTimer = GameApp.dataManager.globalData.reloadInterval), (this._reloadFlag = !0), GameApp.eventManager.emit(EventNames.EVENT_PLAYER_RELOAD));
                    },
                    weaponBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.eventManager.emit(EventNames.EVENT_PICKUP_WEAPON);
                    },
                    backBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("LoginUI");
                    },
                    soundBtnClick: function () {
                        GameApp.audioManager.playEffect("click");
                        var e = !GameApp.audioManager._effectOn;
                        GameApp.audioManager.setEffect(e), this.updateSoundBtnShow();
                    },
                    updateSoundBtnShow: function () {
                        (this.soundNode.children[0].active = GameApp.audioManager._effectOn), (this.soundNode.children[1].active = !GameApp.audioManager._effectOn);
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API" },
        ],
        Protocol: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "9687aZxv/RO9ac5DcZQ91Zh", "Protocol"), cc.Class({ statics: { Initialize: function () {} } }), cc._RF.pop();
            },
            {},
        ],
        RankUI: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "6d7790HceZM3JqLL+gUKux9", "RankUI");
                e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: { allPlayNumUI: cc.Label, winNumUI: cc.Label, top5NumUI: cc.Label, winRateUI: cc.Label, kdUI: cc.Label, avgRankUI: cc.Label, mostKillUI: cc.Label, avgLifeTimeUI: cc.Label },
                    onLoad: function () {
                        (this.allPlayNumUI.string = GameApp.dataManager.userData.allPlayNum),
                            (this.winNumUI.string = GameApp.dataManager.userData.winNum),
                            (this.top5NumUI.string = GameApp.dataManager.userData.top5Num),
                            (this.winRateUI.string = 100 * GameApp.dataManager.userData.winRate + "%"),
                            (this.kdUI.string = GameApp.dataManager.userData.kd),
                            (this.avgRankUI.string = GameApp.dataManager.userData.avgRank),
                            (this.mostKillUI.string = GameApp.dataManager.userData.mostKill),
                            (this.avgLifeTimeUI.string = Tools.toTimeString(GameApp.dataManager.userData.avgLifeTime));
                    },
                    backBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("LoginUI");
                    },
                    onEnable: function () {},
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API" },
        ],
        RouletteData: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "87c70GyAa9DY7qwmvLhQogw", "RouletteData");
                var n = {
                    ALLROATE: 360,
                    num: 8,
                    deviation: 5,
                    offset: 22.5,
                    zhuanpanData: { default: {} },
                    duration: 3,
                    rotateNum: 3,
                    load: function () {
                        for (var e = 1; e < 9; e++)
                            this.zhuanpanData[e] = { start: ((this.num - (9 - e)) * this.ALLROATE) / this.num - this.offset + this.deviation, end: ((this.num - (8 - e)) * this.ALLROATE) / this.num - this.offset - this.deviation };
                    },
                };
                n.load(), (a.exports = n), cc._RF.pop();
            },
            {},
        ],
        SkinInfoPopup: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "906abQ6KhRK94jc8lii7QN9", "SkinInfoPopup");
                var n = e("Advertisement_API"),
                    i = e("Utils");
                cc.Class({
                    extends: cc.Component,
                    properties: { actorAnim: sp.Skeleton, nameUI: cc.Label, descUI: cc.Label, skinData: { default: {} }, methodUIGroup: [cc.Node], methodBtnGroup: [cc.Node], onceClick: { default: !0, visible: !1 }, btn1: cc.Node },
                    onLoad: function () {
                        (this.getCoin = cc.find("Canvas/getCoin")), (this.canvas = cc.find("Canvas").getComponent("Canvas")), GameApp.eventManager.on(EventNames.EVENT_UPDATE_SHOP_CHOOSED_SHOW, this.updateUnLockShow);
                    },
                    onDestroy: function () {
                        GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_SHOP_CHOOSED_SHOW, this.updateUnLockShow);
                    },
                    onEnable: function () {
                        n.canPlayReward(), 0 == n.canPlayRewardNum ? (this.btn1.active = !1) : (this.btn1.active = !0);
                    },
                    update: function (e) {
                        this.methodUIGroup[1].children[0].getComponent(cc.Label).string = GameApp.dataManager.userData.playedVideoNum + "/" + this.skinData.needgem;
                    },
                    init: function (e) {
                        (this.skinData = e),
                            this.initNameShow(),
                            this.initSkinShow(),
                            this.updateMethodShow(),
                            n.canPlayReward(),
                            21 == this.skinData.skinid || 22 == this.skinData.skinid || 23 == this.skinData.skinid || 24 == this.skinData.skinid || 25 == this.skinData.skinid
                                ? 0 == n.canPlayRewardNum
                                    ? (this.btn1.active = !1)
                                    : (this.btn1.active = !0)
                                : (this.btn1.active = !1);
                    },
                    initNameShow: function () {
                        this.nameUI.string = this.skinData.name;
                        var e = Math.floor((this.skinData.skinid - 1) / 5);
                        (this.nameUI.node.color = new cc.Color().fromHEX(NameColor[e])), (this.descUI.string = this.skinData.des);
                    },
                    initSkinShow: function () {
                        var e = this;
                        this.skinData.skinid < 21
                            ? ((this.actorAnim.skeletonData = GameApp.uiManager.normalSkinData), this.actorAnim.setSkin(this.skinData.skinname))
                            : (this.actorAnim.skeletonData = GameApp.uiManager.advanceSkinDataGroup[this.skinData.skinid - 21]),
                            this.skinData.skinid < 21
                                ? this.actorAnim.setAnimation(0, "await", !0)
                                : (this.actorAnim.setAnimation(0, "await_main_1", !1),
                                  this.actorAnim.setCompleteListener(function () {
                                      e.actorAnim.setAnimation(0, "await_main_" + Tools.randomNum(1, 3), !1);
                                  }));
                    },
                    updateMethodShow: function () {
                        this.skinData.skinid > 25 &&
                            ((this.methodUIGroup[2].children[0].getComponent(cc.Label).string = GameApp.dataManager.userData.havePieceNum[this.skinData.skinid] + "/" + this.skinData.needpiece), this.setpieceIcon(this.skinData.skinid)),
                            this.updateUnLockShow(this);
                    },
                    updateUnLockShow: function (e) {
                        (e.methodUIGroup[0].active = e.methodBtnGroup[0].active = e.skinData.needcoin),
                            (e.methodUIGroup[1].active = e.methodBtnGroup[1].active = e.skinData.needgem),
                            (e.methodUIGroup[2].active = e.methodBtnGroup[2].active = e.skinData.needpiece),
                            (e.methodBtnGroup[3].active = !1),
                            (e.methodUIGroup[0].children[0].getComponent(cc.Label).string = e.skinData.needcoin),
                            (e.methodUIGroup[1].children[0].getComponent(cc.Label).string = GameApp.dataManager.userData.playedVideoNum + "/" + e.skinData.needgem);
                        var a = GameApp.dataManager.userData.unLockedSkinIdArr.concat();
                        a.sort(function (e, a) {
                            return e - a;
                        }),
                            a.forEach(function (a) {
                                if (a == e.skinData.skinid) return (e.methodBtnGroup[0].active = !1), (e.methodBtnGroup[1].active = !1), (e.methodBtnGroup[2].active = !1), void (e.methodBtnGroup[3].active = !0);
                            }),
                            e.updateChoosedShow2(e);
                    },
                    updateChoosedShow2: function (e) {
                        GameApp.dataManager.getChoosedSkinId() == e.skinData.skinid
                            ? ((e.methodBtnGroup[3].children[0].active = !1), (e.methodBtnGroup[3].children[1].active = !0))
                            : ((e.methodBtnGroup[3].children[0].active = !0), (e.methodBtnGroup[3].children[1].active = !1));
                    },
                    setpieceIcon: function (e) {
                        var a = this;
                        cc.loader.loadRes("texture/skin_piece/card_p_" + e, cc.SpriteFrame, function (e, t) {
                            a.methodUIGroup[2].getComponent(cc.Sprite).spriteFrame = t;
                        });
                    },
                    selelctBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.dataManager.setChoosedSkinId(this.skinData.skinid), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_SHOP_CHOOSED_SHOW, this);
                    },
                    coinBtnClick: function () {
                        GameApp.audioManager.playEffect("click"),
                            GameApp.dataManager.reduceCoin(this.skinData.needcoin)
                                ? (GameApp.uiManager.showToast("Mở khóa thành công"), GameApp.dataManager.unLockSkin(this.skinData.skinid), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_SHOP_CHOOSED_SHOW, this))
                                : 0 != n.canPlayRewardNum
                                ? (GameApp.uiManager.showToast("Không đủ xu!"), (this.getCoin.active = !0))
                                : GameApp.uiManager.showToast("Không đủ xu!");
                    },
                    videoBtnClick: function () {
                        if (window.wx) GameApp.uiManager.showToast("Chưa mở");
                        else if (this.onceClick) {
                            (this.onceClick = !1), GameApp.audioManager.playEffect("click");
                            var e = this;
                            window.tt
                                ? i.addVideo(
                                      "addVideo",
                                      function () {
                                          (e.onceClick = !0), GameApp.dataManager.addPlayedVideoNum(), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_SHOP_CHOOSED_SHOW, e);
                                      },
                                      function (a) {
                                          (e.onceClick = !0), a ? GameApp.uiManager.showToast(a) : GameApp.uiManager.showToast("Video không có sẵn!");
                                      }
                                  )
                                : ((e.onceClick = !0),
                                  0 != n.canPlayRewardNum ? ((this.btn1.active = !0), (n.rewarda = "clock"), e.canvas.showADReward()) : ((this.btn1.active = !1), GameApp.uiManager.showToast("Số Video ngày hôm nay đã hết!")));
                        }
                    },
                    pieceBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showToast("Không đủ mảnh <color=#faf80d> rương kho báu Vàng </color>Nhận!");
                    },
                    onCloseBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.closePopup("SkinInfoPopup");
                    },
                    showAd: function () {
                        GameApp.dataManager.addPlayedVideoNum(), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_SHOP_CHOOSED_SHOW, this);
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", Utils: "Utils" },
        ],
        SkinItem: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "400f7aj7KtIOIhHbYk3GMvQ", "SkinItem");
                e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: { actorAnim: sp.Skeleton, nameUI: cc.Label, skinData: { default: {} }, methodBtnGroup: [cc.Node], btn1: cc.Node },
                    onLoad: function () {
                        GameApp.eventManager.on(EventNames.EVENT_UPDATE_SHOP_CHOOSED_SHOW, this.updateUnLockShow.bind(this));
                    },
                    onDestroy: function () {
                        GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_SHOP_CHOOSED_SHOW);
                    },
                    onEnable: function () {},
                    init: function (e) {
                        (this.skinData = e), this.initNameShow(), this.initSkinShow(), this.updateMethodShow();
                    },
                    initNameShow: function () {
                        this.nameUI.string = this.skinData.name;
                        var e = Math.floor((this.skinData.skinid - 1) / 5);
                        this.nameUI.node.color = new cc.Color().fromHEX(NameColor[e]);
                    },
                    initSkinShow: function () {
                        var e = this;
                        this.skinData.skinid < 21
                            ? ((this.actorAnim.skeletonData = GameApp.uiManager.normalSkinData), this.actorAnim.setSkin(this.skinData.skinname))
                            : (this.actorAnim.skeletonData = GameApp.uiManager.advanceSkinDataGroup[this.skinData.skinid - 21]),
                            this.skinData.skinid < 21
                                ? this.actorAnim.setAnimation(0, "await", !0)
                                : (this.actorAnim.setAnimation(0, "await_main_1", !1),
                                  this.actorAnim.setCompleteListener(function () {
                                      e.actorAnim.setAnimation(0, "await_main_" + Tools.randomNum(1, 3), !1);
                                  }));
                    },
                    updateMethodShow: function () {
                        this.skinData.skinid > 25 &&
                            ((this.methodBtnGroup[2].children[1].getComponent(cc.Label).string = GameApp.dataManager.userData.havePieceNum[this.skinData.skinid] + "/" + this.skinData.needpiece), this.setpieceIcon(this.skinData.skinid)),
                            this.updateUnLockShow();
                    },
                    updateUnLockShow: function () {
                        var e = this;
                        (this.methodBtnGroup[0].active = this.skinData.needcoin),
                            (this.methodBtnGroup[1].active = this.skinData.needgem),
                            (this.methodBtnGroup[2].active = this.skinData.needpiece),
                            (this.methodBtnGroup[3].active = !1),
                            (this.methodBtnGroup[0].children[1].getComponent(cc.Label).string = this.skinData.needcoin),
                            (this.methodBtnGroup[1].children[1].getComponent(cc.Label).string = GameApp.dataManager.userData.playedVideoNum + "/" + this.skinData.needgem);
                        var a = GameApp.dataManager.userData.unLockedSkinIdArr.concat();
                        a.sort(function (e, a) {
                            return e - a;
                        }),
                            a.forEach(function (a) {
                                if (a == e.skinData.skinid) return (e.methodBtnGroup[0].active = !1), (e.methodBtnGroup[1].active = !1), (e.methodBtnGroup[2].active = !1), void (e.methodBtnGroup[3].active = !0);
                            }),
                            this.updateChoosedShow();
                    },
                    updateChoosedShow: function () {
                        GameApp.dataManager.getChoosedSkinId() == this.skinData.skinid
                            ? ((this.methodBtnGroup[3].children[0].active = !1), (this.methodBtnGroup[3].children[1].active = !0))
                            : ((this.methodBtnGroup[3].children[0].active = !0), (this.methodBtnGroup[3].children[1].active = !1));
                    },
                    setpieceIcon: function (e) {
                        var a = this;
                        cc.loader.loadRes("texture/skin_piece/card_p_" + e, cc.SpriteFrame, function (e, t) {
                            a.methodBtnGroup[2].children[0].getComponent(cc.Sprite).spriteFrame = t;
                        });
                    },
                    frameBtnClick: function () {
                        var e = this;
                        GameApp.audioManager.playEffect("click"),
                            GameApp.uiManager.showPopup(
                                "SkinInfoPopup",
                                function (a) {
                                    a.getComponent("SkinInfoPopup").init(e.skinData);
                                },
                                !1
                            );
                    },
                    selelctBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.dataManager.setChoosedSkinId(this.skinData.skinid), GameApp.eventManager.emit(EventNames.EVENT_UPDATE_SHOP_CHOOSED_SHOW);
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API" },
        ],
        SkinUI: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "8453a9XdO5IP5zIjb1wltqu", "SkinUI");
                var n = e("Utils"),
                    i = e("GameConfig"),
                    o = e("Advertisement_API");
                cc.Class({
                    extends: cc.Component,
                    properties: { scrollView: cc.ScrollView, itemPrefab: cc.Prefab, coinUI: cc.Label, btnCoin1: cc.Node, onceClick: { default: !0, visible: !1 } },
                    onLoad: function () {
                        (this.getCoin = cc.find("Canvas/getCoin")), GameApp.eventManager.on(EventNames.EVENT_UPDATE_COIN_SHOW, this.updateCoinShow.bind(this)), this.initData(), this.updateCoinShow();
                    },
                    onEnable: function () {
                        i.GetPlayerData(),
                            0 == i.PlayerData.boolStarGame ? (this.node.children[1].active = !1) : (this.node.children[1].active = !0),
                            (i.PlayerData.boolStarGame = 0),
                            i.SavePlayerData(),
                            o.canPlayReward(),
                            0 != o.canPlayRewardNum ? (this.btnCoin1.active = !0) : (this.btnCoin1.active = !1);
                    },
                    onDestroy: function () {
                        GameApp.eventManager.removeListener(EventNames.EVENT_UPDATE_COIN_SHOW);
                    },
                    initData: function () {
                        var e = this;
                        this.scrollView.content.removeAllChildren();
                        var a = 0;
                        GameApp.dataManager.jsonData.SkinsData.forEach(function (t) {
                            e.scheduleOnce(function () {
                                var a = cc.instantiate(e.itemPrefab);
                                e.scrollView.content.addChild(a), a.getComponent("SkinItem").init(t);
                            }, (a += 0.05));
                        });
                    },
                    updateCoinShow: function () {
                        this.coinUI.string = GameApp.dataManager.userData.coinNum;
                    },
                    update: function () {
                        this.coinUI.string = GameApp.dataManager.userData.coinNum;
                    },
                    coinBtnClick: function () {
                        if (window.wx) GameApp.uiManager.showToast("Chưa mở");
                        else if (this.onceClick) {
                            (this.onceClick = !1), GameApp.audioManager.playEffect("click");
                            var e = this;
                            window.tt
                                ? n.addVideo(
                                      "addVideo",
                                      function () {
                                          (e.onceClick = !0), GameApp.uiManager.showToast("Nhận 500 xu"), GameApp.dataManager.addCoin(500), e.updateCoinShow();
                                      },
                                      function (a) {
                                          (e.onceClick = !0), a ? GameApp.uiManager.showToast(a) : GameApp.uiManager.showToast("Video không có sẵn!");
                                      }
                                  )
                                : ((e.onceClick = !0),
                                  e.updateCoinShow(),
                                  0 != o.canPlayRewardNum ? (GameApp.uiManager.showToast("Không đủ xu!"), (e.getCoin.active = !0), (this.btnCoin1.active = !0)) : ((this.btnCoin1.active = !1), GameApp.uiManager.showToast("Không đủ xu!")));
                        }
                    },
                    backBtnClick: function () {
                        GameApp.audioManager.playEffect("click"), GameApp.uiManager.showUI("LoginUI");
                    },
                    clickStar: function () {
                        0 != o.canPlayRewardNum
                            ? (GameApp.audioManager.playEffect("click"),
                              GameApp.uiManager.showPopup("GiftPopup", function (e) {
                                  e.getComponent("GiftPopup").init("PrepareUI", 1);
                              }))
                            : (GameApp.audioManager.playEffect("click"), GameApp.uiManager.closePopup("GiftPopup"), GameApp.uiManager.showUI("PrepareUI"));
                    },
                }),
                    cc._RF.pop();
            },
            { Advertisement_API: "Advertisement_API", GameConfig: "GameConfig", Utils: "Utils" },
        ],
        SocketManager: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "30ba8LSubxK7Ipz6Ih4t/op", "SocketManager");
                var n = e("events").EventEmitter;
                cc.Class({
                    name: "SocketManager",
                    extends: n,
                    properties: { MockNet: !0, _webSocket: WebSocket, _retryCount: 5, _retryTimer: 0 },
                    ctor: function () {
                        this.setMaxListeners(256);
                    },
                    connect: function () {
                        this._retryCount--, console.log("-------\u521d\u59cb\u5316\u8fde\u63a5-------"), clearInterval(this._retryTimer), this.init(WS_SERVERS[SERVER]);
                    },
                    resetReconnect: function () {
                        this._retryCount = 5;
                    },
                    init: function (e) {
                        (this._webSocket = new WebSocket(e)),
                            (this._webSocket.onopen = function (e) {
                                console.log("\u7f51\u7edcopen\uff01\uff01\uff01"), this.resetReconnect(), GameApp.protocol.AccountLogin();
                            }.bind(this)),
                            (this._webSocket.onmessage = function (e) {
                                var a = JSON.parse(e.data);
                                if (("Heart" != a.scmd && "Sys" != a.mcmd && (console.log("recieve------<<"), console.log(a)), !a.data || 0 == a.data.code)) return this.emit(a.mcmd + a.scmd, a.data);
                                cc.error("\u670d\u52a1\u7aef\u5904\u7406\u5f02\u5e38\uff01 code: " + a.data.code + "  msg: " + a.data.message);
                            }.bind(this)),
                            (this._webSocket.onclose = function (e) {
                                console.log("\u7f51\u7edcclose\uff01\uff01\uff01 code:" + e.code),
                                    1e3 !== Number(e.code) &&
                                        (alert("\u60a8\u4f3c\u4e4e\u5df2\u65ad\u5f00\u4e0e\u4e92\u8054\u7f51\u7684\u8fde\u63a5\uff0c\u70b9\u51fb\u786e\u5b9a\u91cd\u65b0\u767b\u5f55\u3002"), this._retryCount > 0 && this.firstConnect());
                            }.bind(this)),
                            (this._webSocket.onerror = function (e) {});
                    },
                    close: function () {
                        this._webSocket && ((this._webSocket.onclose = null), this._webSocket.close(), (this._webSocket = null));
                    },
                    send: function (e, a, t) {
                        if (this.MockNet) this.emit(e + a, t);
                        else {
                            if (!this._webSocket || this._webSocket.readyState !== WebSocket.OPEN)
                                return console.log("\u91cd\u8fde\u7ed3\u675f\uff0c\u4e3b\u52a8\u8fde\u63a5"), this.firstConnect(), GameApp.uiManager.showToast("Kết nối mạng gián đoạn, đang thử lại!");
                            var n = { mcmd: e, scmd: a };
                            t && (n.data = t);
                            var i = JSON.stringify(n);
                            "Heart" != n.scmd && "Sys" != n.mcmd && (console.log("send-------\x3e>"), console.log(n)), this._webSocket.send(i);
                        }
                    },
                }),
                    cc._RF.pop();
            },
            { events: 1 },
        ],
        SplashUI: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "80d85q9LDVJk5VXIllfACwI", "SplashUI"),
                    cc.Class({
                        extends: cc.Component,
                        properties: {},
                        onLoad: function () {
                            this.node.runAction(
                                cc.sequence(
                                    cc.delayTime(2),
                                    cc.callFunc(function () {
                                        GameApp.uiManager.showUI("LoginUI");
                                    })
                                )
                            );
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        ToastUI: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "a0c7fFQzm9IFYw0LACYPqiI", "ToastUI"),
                    cc.Class({
                        extends: cc.Component,
                        properties: { labTxt: cc.RichText, _callback: null, playerName: cc.RichText, killNum: cc.Label, killTipNode: cc.Node },
                        start: function () {
                            this.node.setScale(0, 0);
                        },
                        show: function (e, a, t) {
                            (this._callback = a),
                                this.node.stopAllActions(),
                                t ? ((this.playerName.string = e), (this.killNum.string = t), (this.killTipNode.active = !0)) : (this.labTxt.string = e),
                                this.node.runAction(
                                    cc.sequence(
                                        cc.scaleTo(0.3, 1).easing(cc.easeBounceOut(2)),
                                        cc.delayTime(1),
                                        cc.callFunc(
                                            function () {
                                                this.dis();
                                            }.bind(this)
                                        )
                                    )
                                );
                        },
                        dis: function () {
                            this.node.runAction(
                                cc.sequence(
                                    cc.spawn(cc.fadeOut(1), cc.moveBy(1, cc.v2(0, this.node.height))),
                                    cc.callFunc(
                                        function () {
                                            this.disIme();
                                        }.bind(this)
                                    )
                                )
                            );
                        },
                        disIme: function () {
                            (this.node.active = !1), this.node.removeFromParent(), this._callback && this._callback();
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        Tools: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "22582a+jCBHjZflQ11fhZCr", "Tools"),
                    (window.Tools = {
                        addClickEvent: function (e, a, t, n, i) {
                            var o = new cc.Component.EventHandler();
                            (o.target = a), (o.component = t), (o.handler = n), i && (o.customEventData = i), (e.getComponent(cc.Button).clickEvents = []), e.getComponent(cc.Button).clickEvents.push(o);
                        },
                        randomNum: function (e, a, t) {
                            return t ? Math.random() * (a - e + 1) + e : Math.floor(Math.random() * (a - e + 1) + e);
                        },
                        getRandomElement: function (e) {
                            var a = e.length;
                            if (a > 0) {
                                var t = Math.floor(Math.random() * a);
                                return t == a && (t = a - 1), e[t];
                            }
                            return null;
                        },
                        getRandomAmountElementUnRepeat: function (e, a) {
                            var t = e.length;
                            if (a >= t) {
                                for (var n = { nodeArr: e, indexArr: [] }, i = 0; i < e.length; i++) n.indexArr.push(i);
                                return n;
                            }
                            if (a <= 0) return null;
                            n = { nodeArr: [], indexArr: [] };
                            var o = [],
                                r = null;
                            for (i = 0; i < a; i++) {
                                do {
                                    r = Math.floor(Math.random() * t);
                                } while (o.indexOf(r) > -1);
                                o.push(r), n.nodeArr.push(e[r]), n.indexArr.push(r);
                            }
                            return n;
                        },
                        isCrit: function (e) {
                            var a = this.getRandomAmountElementUnRepeat([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], e);
                            return null != a && -1 != a.nodeArr.indexOf(7);
                        },
                        getIndex: function (e, a) {
                            for (var t = e.length, n = 0; n < t; n++) if (e[n] == a) return parseInt(n);
                            return -1;
                        },
                        removeArray: function (e, a) {
                            for (var t = e.length, n = 0; n < t; n++) if (e[n] == a) return 0 == n ? (e.shift(), e) : n == t - 1 ? (e.pop(), e) : (e.splice(n, 1), e);
                        },
                        pointOfRandom: function (e, a, t) {
                            for (var n = Tools.randomNum(Math.floor(e.x - (a - t)), Math.floor(e.x + (a - t))), i = Tools.randomNum(Math.floor(e.y - (a - t)), Math.floor(e.y + (a - t))); !this.isInRegion(n - e.x, i - e.y, a - t); )
                                (n = Tools.randomNum(Math.floor(e.x - (a - t)), Math.floor(e.x + (a - t)))), (i = Tools.randomNum(Math.floor(e.y - (a - t)), Math.floor(e.y + (a - t))));
                            return cc.v2(n, i);
                        },
                        isInRegion: function (e, a, t) {
                            return e * e + a * a <= t * t;
                        },
                        isIntersect: function (e, a, t, n) {
                            return parseFloat(Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y))) + n >= a;
                        },
                        scaleUpAndDowm: function (e, a, t) {
                            e.runAction(
                                cc.repeatForever(cc.sequence(cc.scaleTo(0.3, 1.1).easing(cc.easeIn(2)), cc.scaleTo(0.6, 0.9).easing(cc.easeIn(2)), cc.scaleTo(0.6, 1.1).easing(cc.easeIn(2)), cc.scaleTo(0.6, 0.9).easing(cc.easeIn(2))))
                            ),
                                a && t.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(0.3).easing(cc.easeIn(2)), cc.fadeOut(0.6).easing(cc.easeIn(2)), cc.fadeIn(0.6).easing(cc.easeIn(2)), cc.fadeOut(0.6).easing(cc.easeIn(2)))));
                        },
                        shake: function (e) {
                            e.runAction(
                                cc.repeatForever(
                                    cc.sequence(cc.rotateTo(0.1, 5).easing(cc.easeIn(2)), cc.rotateTo(0.2, -5).easing(cc.easeIn(2)), cc.rotateTo(0.2, 5).easing(cc.easeIn(2)), cc.rotateTo(0.1, 0).easing(cc.easeIn(2)), cc.delayTime(0.5))
                                )
                            );
                        },
                        jumpOneByOne: function (e) {
                            for (var a = e.childrenCount, t = 0; t < a; t++)
                                e.children[t].runAction(cc.sequence(cc.delayTime(0.2 * t), cc.scaleTo(0.2, 1.3).easing(cc.easeBackOut()), cc.scaleTo(0.2, 1), cc.delayTime(0.2 * (a - 1 - t) + 1)).repeatForever());
                        },
                        toDateFormat: function () {
                            var e = new Date();
                            return { year: (e = new Date(e.getTime())).getFullYear(), month: e.getMonth() + 1, day: e.getDate() };
                        },
                        toTimeString2: function (e) {
                            if (e <= 0) return "00:00:00";
                            e = Math.floor(e);
                            var a = Math.floor(e / 3600);
                            e -= 3600 * a;
                            var t = Math.floor(e / 60);
                            e -= 60 * t;
                            return a > 0 ? (a < 10 ? "0" + a : a) : "00", ":", t > 0 ? (t < 10 ? "0" + t : t) : "00", ":", e > 0 ? (e < 10 ? "0" + e : e) : "00", { hour: a, minute: t, s: e };
                        },
                        toTimeString: function (e) {
                            if (e <= 0) return "00:00";
                            (e = Math.floor(e)), (e -= 3600 * Math.floor(e / 3600));
                            var a = Math.floor(e / 60);
                            e -= 60 * a;
                            var t = "";
                            return (t += a > 0 ? (a < 10 ? "0" + a : a) : "00"), (t += ":"), (t += e > 0 ? (e < 10 ? "0" + e : e) : "00");
                        },
                        addNegativeCaculation: function (e, a, t, n) {
                            return e ? "-" + this.calculation(a, t, n) : this.calculation(a, t, n);
                        },
                        calculation: function (e, a, t) {
                            var n = Math.floor(e / a),
                                i = Math.floor(((e % a) / a) * 10);
                            return 0 === i ? n + t : n + "." + i + t;
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        UIManager: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "8a5d0r/JcRKyJq63bPbc7t9", "UIManager");
                var n = e("PrefabPath"),
                    i = e("JsonPath");
                (window.conMag = window.conMag || e("ConfigManager")),
                    cc.Class({
                        extends: cc.Component,
                        properties: {
                            gameRoot: cc.Node,
                            uiRoot: cc.Node,
                            popupRoot: cc.Node,
                            toastRoot: cc.Node,
                            toastPrefab: cc.Prefab,
                            loadingMask: cc.Node,
                            loadingProgress: cc.ProgressBar,
                            splashUI: cc.Node,
                            _Prefabs: { default: {} },
                            _Jsons: { default: {} },
                            mapCamera: cc.Camera,
                            mipmapCamera: cc.Camera,
                            normalSkinData: sp.SkeletonData,
                            advanceSkinDataGroup: [sp.SkeletonData],
                            boxSkinDataGroup: [sp.SkeletonData],
                            commonAtlas: cc.SpriteAtlas,
                            gunSkinDataGroup: [sp.SkeletonData],
                        },
                        onLoad: function () {
                            if (null !== GameApp.uiManager) return this.node.destroy();
                            (GameApp.uiManager = this),
                                cc.game.addPersistRootNode(this.node),
                                (cc.director.getCollisionManager().enabled = !0),
                                (cc.director.getCollisionManager().enabledDrawBoundingBox = !0),
                                (cc.director.getCollisionManager().enabledDebugDraw = !0);
                            var e = cc.director.getPhysicsManager();
                            (e.enabled = !0),
                                (e.debugDrawFlags =
                                    cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_pairBit | cc.PhysicsManager.DrawBits.e_centerOfMassBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit);
                            var a = cc.view.getFrameSize(),
                                t = cc.game.canvas;
                            (t.width = a.width * window.devicePixelRatio), (t.height = a.height * window.devicePixelRatio), this.setLoadingMaskVisible(!1), (this.loadingProgress.progress = 0), this.startLoading();
                        },
                        startLoading: function () {
                            (this.loadingProgress.node.active = !0),
                                this.loadAll(
                                    function (e, a) {
                                        var t = e / a;
                                        t && !isNaN(t) && (this.loadingProgress.progress = t);
                                    }.bind(this),
                                    function () {
                                        (this.loadingProgress.node.active = !1), (this.splashUI.active = !1);
                                        var e = cc.sys.localStorage.getItem("EatChicken_UserData");
                                        null == e || void 0 == e || "" == e || ((GameApp.dataManager.userData = JSON.parse(e)), console.log(GameApp.dataManager.userData)), this.showUI("LoginUI");
                                    }.bind(this)
                                );
                        },
                        loadAll: function (e, a) {
                            var t = [],
                                o = 0;
                            for (var r in n) t.push(n[r]), o++;
                            var s = o,
                                c = 0;
                            for (var d in i) t.push(i[d]), c++;
                            var l = c;
                            cc.loader.loadResArray(
                                t,
                                function (a, t) {
                                    e(a, t);
                                },
                                function (e, t) {
                                    for (var o = Object.keys(n), r = 0; r < s; r++) this._Prefabs[o[r]] = t[r];
                                    for (var c = Object.keys(i), d = 0; d < l; d++) (this._Jsons[c[d]] = t[s + d].json[c[d]]), (GameApp.dataManager.jsonData[c[d]] = this._Jsons[c[d]]);
                                    a();
                                }.bind(this)
                            );
                        },
                        load: function (e, a) {
                            cc.loader.loadRes(
                                n[e],
                                function (t, n) {
                                    t ? cc.error(t.message || t) : ((this._Prefabs[e] = n), a && a(e));
                                }.bind(this)
                            );
                        },
                        showGameObject: function (e, a, t) {
                            if (this._Prefabs[e]) {
                                var n = cc.instantiate(this._Prefabs[e]);
                                t && t.addChild(n), a && a(n);
                            } else
                                this.load(
                                    e,
                                    function () {
                                        this.showGameObject(e, a);
                                    }.bind(this)
                                );
                        },
                        showGame: function (e, a) {
                            if ((this._curGameName == e && console.log("---showGame.repeat----"), this._Prefabs[e])) {
                                var t = cc.instantiate(this._Prefabs[e]);
                                this.gameRoot.addChild(t), (this._curGameName = e), a && a(t);
                            } else
                                this.load(
                                    e,
                                    function () {
                                        this.showGame(e, a);
                                    }.bind(this)
                                );
                        },
                        showUI: function (e, a) {
                            if (this._curName != e)
                                if (this._Prefabs[e]) {
                                    this.clearGames(),
                                        this.uiRoot.children.forEach(function (e) {
                                            e.runAction(
                                                cc.sequence(
                                                    cc.fadeOut(0.1),
                                                    cc.callFunc(function () {
                                                        e.destroy();
                                                    })
                                                )
                                            );
                                        }),
                                        this.clearPopups();
                                    var t = cc.instantiate(this._Prefabs[e]);
                                    (t.opacity = 0), this.uiRoot.addChild(t), t.runAction(cc.fadeIn(0.3)), (this._curName = e), a && a(t);
                                } else
                                    this.load(
                                        e,
                                        function () {
                                            this.showUI(e, a);
                                        }.bind(this)
                                    );
                            else console.log("---showUI.repeat----");
                        },
                        getUI: function (e) {
                            return this.uiRoot.getChildByName(e);
                        },
                        popUI: function () {
                            var e = this.uiRoot.children;
                            e.length > 0 && e[e.length - 1].destroy();
                        },
                        isInMapSight: function (e) {
                            var a = this.mapCamera.node.width / 0.9,
                                t = this.mapCamera.node.height / 0.9,
                                n = this.mapCamera.getWorldToScreenPoint(e.convertToWorldSpaceAR(cc.v2(0, 0)));
                            return !(n.x < 0 || n.x > a || n.y < 0 || n.y > t);
                        },
                        showPopup: function (e, a) {
                            var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            if ((this._curPopupName == e && console.log("---showPopup.repeat----"), this._Prefabs[e])) {
                                t && this.clearPopups();
                                var n = cc.instantiate(this._Prefabs[e]);
                                (n.children[0].scaleX = 0), (n.children[0].scaleY = 0), this.popupRoot.addChild(n), n.children[0].runAction(cc.scaleTo(0.5, 1).easing(cc.easeBounceOut(2))), (this._curPopupName = e), a && a(n);
                            } else
                                this.load(
                                    e,
                                    function () {
                                        this.showPopup(e, a);
                                    }.bind(this)
                                );
                        },
                        getPopup: function (e) {
                            return this.popupRoot.getChildByName(e);
                        },
                        popPopup: function () {
                            var e = this.popupRoot.children;
                            e.length > 0 && e[e.length - 1].destroy();
                        },
                        closePopup: function (e) {
                            var a = this,
                                t = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (
                                    var o,
                                        r = function () {
                                            var t = o.value;
                                            if (t.name === e)
                                                return (
                                                    t.runAction(
                                                        cc.sequence(
                                                            cc.fadeOut(0.1),
                                                            cc.callFunc(function () {
                                                                (a._curPopupName = ""), (t.active = !1), t.destroy();
                                                            })
                                                        )
                                                    ),
                                                    "break"
                                                );
                                        },
                                        s = this.popupRoot.children[Symbol.iterator]();
                                    !(t = (o = s.next()).done);
                                    t = !0
                                ) {
                                    if ("break" === r()) break;
                                }
                            } catch (e) {
                                (n = !0), (i = e);
                            } finally {
                                try {
                                    t || null == s.return || s.return();
                                } finally {
                                    if (n) throw i;
                                }
                            }
                        },
                        clearPopups: function () {
                            var e = !0,
                                a = !1,
                                t = void 0;
                            try {
                                for (
                                    var n,
                                        i = function () {
                                            var e = n.value;
                                            e.runAction(
                                                cc.sequence(
                                                    cc.fadeOut(0.1),
                                                    cc.callFunc(function () {
                                                        e.destroy();
                                                    })
                                                )
                                            );
                                        },
                                        o = this.popupRoot.children[Symbol.iterator]();
                                    !(e = (n = o.next()).done);
                                    e = !0
                                )
                                    i();
                            } catch (e) {
                                (a = !0), (t = e);
                            } finally {
                                try {
                                    e || null == o.return || o.return();
                                } finally {
                                    if (a) throw t;
                                }
                            }
                            this._curPopupName = "";
                        },
                        getGame: function (e) {
                            return this.gameRoot.getChildByName(e);
                        },
                        clearGames: function () {
                            this.gameRoot.destroyAllChildren(), (this._curGameName = "");
                        },
                        showToast: function (e, a, t) {
                            if (this.toastPrefab) {
                                var n = cc.instantiate(this.toastPrefab);
                                if (this.toastRoot.childrenCount > 0)
                                    for (var i = this.toastRoot.childrenCount - 1; i >= 0; i--) {
                                        var o = cc.moveBy(0.1, cc.v2(0, n.height));
                                        this.toastRoot.children[i].runAction(o);
                                    }
                                this.toastRoot.addChild(n), n.getComponent("ToastUI").show(e, a, t);
                            }
                        },
                        setLoadingMaskVisible: function (e) {
                            this.loadingMask.active = !!e;
                        },
                        update: function (e) {
                            switch (((GameApp.dataManager.globalData.onLineTime += e), GameApp.dataManager.globalData.recordState)) {
                                case RecordState.READY:
                                    GameApp.dataManager.globalData.recordTimer = 0;
                                    break;
                                case RecordState.RECORD:
                                    GameApp.dataManager.globalData.recordTimer += e;
                                    break;
                                case RecordState.PAUSE:
                            }
                        },
                    }),
                    cc._RF.pop();
            },
            { ConfigManager: "ConfigManager", JsonPath: "JsonPath", PrefabPath: "PrefabPath" },
        ],
        Utils: [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "4e007BguLFPRI4XSmgSly76", "Utils");
                var n = {},
                    i = { addBanner: "503khkj54l5m1j6i0i" };
                (n.m_banner = null), (n.moregameBtn = null), (n.vedioAd = null), (n.recorder = null), (n.recordNatureStop = !1);
                var o = { addVideo: "i2nd08ki9p723pt2k4" },
                    r = "//ecwx-1257044218.cos.ap-chengdu.myqcloud.com/bingoballshare.jpg",
                    s = [
                        { idx: 1, txt: "\u4ed6\u62ff\u8d77\u55b7\u5b50\u4e00\u68ad\u5b50\u5c31\u7ed9\u6211\u5e26\u8d70\u4e86\u3002\u3002\u3002" },
                        { idx: 2, txt: "\u8001\u677f\u6709\u6ca1\u6709\u52a0\u7279\u6797\uff0c\u54d2\u54d2\u54d2\u5192\u84dd\u706b\u90a3\u79cd" },
                        { idx: 3, txt: "\u9e21\u5403\u6491\u4e86\uff0c\u6b47\u4f1a\u513f" },
                        { idx: 4, txt: "\u8fd9\u91cc\u7684\u59b9\u5b50\u771fQ\u5f39\uff0c\u5c31\u662f\u5979\u4e86\uff01" },
                    ];
                (n._getShareObject = function (e, a, t) {
                    var n = "\u53f2\u4e0a\u6700\u96be\u7684\u6e38\u620f\uff0c\u73a9\u8fc7\u7684\u4eba\u90fd\u8bf4\u6625\u8fd0\u62a2\u7968\u4e0d\u7b97\u96be\uff01",
                        i = null,
                        o = null,
                        c = Tools.getRandomElement(s);
                    return (
                        c && ((o = c.txt), (i = "from=" + e + "&txt_id=" + n.idx)),
                        {
                            title: n,
                            desc: o,
                            query: i,
                            imageUrl: r,
                            success: function () {
                                console.log("\u5206\u4eab\u6210\u529f"), a && a();
                            },
                            fail: function (e) {
                                console.log("\u5206\u4eab\u5931\u8d25"), console.log(e), t && t();
                            },
                        }
                    );
                }),
                    (n.shareFromHomePage = function (e, a) {
                        window.wx ? wx.shareAppMessage(n._getShareObject("home_page", e, a)) : e && e();
                    }),
                    (n.shareRecord = function (e, a, t) {
                        if (window.tt) {
                            var n = "\u53f2\u4e0a\u6700\u96be\u7684\u6e38\u620f\uff0c\u73a9\u8fc7\u7684\u4eba\u90fd\u8bf4\u6625\u8fd0\u62a2\u7968\u4e0d\u7b97\u96be\uff01",
                                i = null,
                                o = null,
                                c = Tools.getRandomElement(s);
                            c && ((o = c.txt), (i = "from=share&txt_id=" + n.idx)),
                                tt.shareAppMessage({
                                    channel: "video",
                                    title: n,
                                    desc: o,
                                    imageUrl: r,
                                    templateId: "",
                                    query: i,
                                    extra: { videoPath: e, videoTopics: ["\u5168\u6c11\u523a\u6fc0\u5403\u9e21", "\u5c0f\u6e38\u620f"], createChallenge: !0 },
                                    success: function () {
                                        console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f"), a && a();
                                    },
                                    fail: function (e) {
                                        console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25"), console.log(e), t && t();
                                    },
                                });
                        }
                    }),
                    (n.addBanner = function (e, a, t, o) {
                        if (null != window.tt) {
                            var r = tt.getSystemInfoSync(),
                                s = r.screenWidth,
                                c = r.screenHeight;
                            n.m_banner ? (n.m_banner.destroy(), console.log("m_banner is has create")) : console.log("m_banner is has not create");
                            var d = tt.createBannerAd({ adUnitId: i[e], style: a });
                            (n.m_banner = d),
                                d.onLoad(function () {
                                    console.log("bannerAd \u52a0\u8f7d\u6210\u529f"),
                                        n.m_banner.show().then(function () {
                                            console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f");
                                        });
                                }),
                                d.onResize(function (e) {
                                    0 != e.width && 0 != e.height && 200 != e.width && ((d.style.top = c - e.height), (d.style.left = (s - e.width) / 2));
                                });
                        }
                    }),
                    (n.removeBanner = function () {
                        null != window.tt && n.m_banner && (n.m_banner.hide(), console.log("removeBanner"));
                    }),
                    (n.addMoreGameBtn = function (e) {
                        if (window.tt) {
                            var a = tt.getSystemInfoSync();
                            a.screenWidth, a.screenHeight;
                            (n.moregameBtn = tt.createMoreGamesButton({
                                type: "image",
                                image: e,
                                style: { left: 20, top: 50, width: 50, height: 50, lineHeight: 50, backgroundColor: "", textColor: "", textAlign: "center", fontSize: 16, borderRadius: 0, borderWidth: 0, borderColor: "" },
                                appLaunchOptions: [{ appId: "ttXXXXXX", query: "foo=bar&baz=qux", extraData: {} }],
                                onNavigateToMiniGame: function (e) {
                                    console.log("\u8df3\u8f6c\u5176\u4ed6\u5c0f\u6e38\u620f", e);
                                },
                            })),
                                console.log(n.moregameBtn);
                        }
                    }),
                    (n.closeMoreGameBtn = function () {
                        n.moregameBtn.destroy();
                    }),
                    (n.addVideo = function (e, a, t) {
                        if (null != window.tt) {
                            n.vedioAd = tt.createRewardedVideoAd({ adUnitId: o[e] });
                            try {
                                n.vedioAd.errorFunc && (console.log("\u5173\u95ed\u4e86error"), n.vedioAd.offError(n.vedioAd.errorFunc)),
                                    n.vedioAd.closeFunc && (console.log("\u5173\u95ed\u4e86close"), n.vedioAd.offClose(n.vedioAd.closeFunc));
                            } catch (e) {
                                console.warn("--------------videoAd offClose or offError error:"), console.error(e);
                            }
                            (n.vedioAd.errorFunc = function (e) {
                                console.log(e), 1004 == e.errCode ? a && a("\u65e0\u53ef\u89c2\u770b\u89c6\u9891") : a && a("\u89c6\u9891\u670d\u52a1\u5668\u9519\u8bef");
                            }),
                                n.vedioAd.onError(n.vedioAd.errorFunc),
                                (n.vedioAd.closeFunc = function (e) {
                                    console.log("\u6267\u884c\u4e86closeFunc"), (e && e.isEnded) || void 0 === e ? (console.log("\u64ad\u653e\u5b8c\u4e86"), a && a()) : (console.log("\u4e2d\u9014\u9000\u51fa"), t && t());
                                }),
                                n.vedioAd.onClose(n.vedioAd.closeFunc),
                                n.vedioAd.show().catch(function () {
                                    n.vedioAd
                                        .load()
                                        .then(function () {
                                            return n.vedioAd.show();
                                        })
                                        .catch(function (e) {
                                            console.log("\u6fc0\u52b1\u89c6\u9891or\u5e7f\u544a\u663e\u793a\u5931\u8d25");
                                        });
                                });
                        }
                    }),
                    (n.startRecord = function (e, a) {
                        null != window.tt &&
                            ((n.recorder = tt.getGameRecorderManager()),
                            n.recorder.onStart(function (a) {
                                console.log("\u5f55\u5c4f\u5f00\u59cb"), (n.recordNatureStop = !1), e && e();
                            }),
                            n.recorder.onStop(function (e) {
                                console.log("\u5f55\u5c4f\u81ea\u7136\u505c\u6b62"), (n.recordNatureStop = !0), a && a(e);
                            }),
                            n.recorder.onError(function (e) {
                                console.log("\u5f55\u5c4f\u9519\u8bef");
                            }),
                            n.recorder.start({ duration: 1200 }));
                    }),
                    (n.pauseRecord = function (e) {
                        n.recorder.onPause(function (a) {
                            console.log("\u5f55\u5c4f\u6682\u505c"), e && e();
                        }),
                            n.recorder.pause();
                    }),
                    (n.resumeRecord = function (e) {
                        n.recorder.onResume(function (a) {
                            console.log("\u5f55\u5c4f\u6062\u590d"), e && e();
                        }),
                            n.recorder.resume();
                    }),
                    (n.stopRecord = function (e) {
                        n.recordNatureStop
                            ? e && e()
                            : (n.recorder.onStop(function (a) {
                                  console.log("\u5f55\u5c4f\u505c\u6b62"), e && e(a);
                              }),
                              n.recorder.stop());
                    }),
                    (a.exports = n),
                    cc._RF.pop();
            },
            {},
        ],
        "use_v2.1-2.2.1_cc.Toggle_event": [
            function (e, a, t) {
                "use strict";
                cc._RF.push(a, "c2801tZtItCba3oCLPCXhvX", "use_v2.1-2.2.1_cc.Toggle_event"), cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0), cc._RF.pop();
            },
            {},
        ],
    },
    {},
    [
        "use_v2.1-2.2.1_cc.Toggle_event",
        "Advertisement_API",
        "Canvas",
        "GameApp",
        "GameConfig",
        "Loading",
        "Protocol",
        "Tools",
        "Utils",
        "Consts",
        "JsonPath",
        "PrefabPath",
        "RouletteData",
        "Bullet",
        "DropBox",
        "Enemy",
        "GroundItem",
        "Joystick",
        "JoystickCommon",
        "ParatrooperEnemy",
        "ParatrooperPlayer",
        "Player",
        "AudioManager",
        "ConfigManager",
        "DataManager",
        "EventManager",
        "HttpManager",
        "SocketManager",
        "UIManager",
        "ActivityPopup",
        "BoxUI",
        "DailyPopup",
        "GameMap",
        "GameUI",
        "GetCoin",
        "GiftPopup",
        "GunUI",
        "LoginUI",
        "OpenBoxPopup",
        "OverPopup",
        "PlaneUI",
        "PrepareMap",
        "PrepareUI",
        "RankUI",
        "SkinInfoPopup",
        "SkinItem",
        "SkinUI",
        "SplashUI",
        "ToastUI",
    ]
);
