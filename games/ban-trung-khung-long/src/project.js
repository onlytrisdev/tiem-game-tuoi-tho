window.__require = function t(e, n, i) {
    function o(a, c) {
        if (!n[a]) {
            if (!e[a]) {
                var l = a.split("/");
                if (l = l[l.length - 1], !e[l]) {
                    var r = "function" == typeof __require && __require;
                    if (!c && r) return r(l, !0);
                    if (s) return s(l, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
            }
            var h = n[a] = {
                exports: {}
            };
            e[a][0].call(h.exports, function(t) {
                return o(e[a][1][t] || t)
            }, h, h.exports, t, e, n, i)
        }
        return n[a].exports
    }
    for (var s = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
    return o
}({
    AdController: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7d341pXabdG6qYUrPsI/PJ/", "AdController");
        var i = "eggshoot";
        cc.Class({
            extends: cc.Component,
            properties: {
                ad_icon: cc.Sprite,
                ad_name: cc.Label,
                ad_fullscreen: cc.Sprite,
                ad_button: cc.Sprite
            },
            onLoad: function() {
                window.adsCtl = this, this.locale = "", this.pid = "", "undefined" != typeof FBInstant && (this.locale = FBInstant.getLocale().split("_")[0], this.pid = FBInstant.player.getID()), this.arrayRate = new Array, this.arrayClick = new Array, this.arrayView = new Array, this.countInters = 0, this.countIndex = 0, this.multi = 1, this.loadFullSuccess = !1, this.loadIconSuccess = !1, this.loadConfig()
            },
            start: function() {},
            checkRules: function(t, e) {
                if (e)
                    for (var n = 0; n < e.length; n++)
                        if (this.pid == e[n]) return !0;
                if (t)
                    for (var i = 0; i < t.length; i++)
                        if (this.locale == t[i]) return !0;
                return !1
            },
            loadConfig: function() {
                var t = this;
                cc.loader.load("egg-shoot.json", function(e, n) {
                    if (null == e) {
                        t.config = n, t.version = t.config.version, t.rules = t.config.rules, t.clickAdjust = t.rules["click-adjust"], t.viewAdjust = t.rules["view-adjust"], t.skey = "default";
                        var o = t.rules.distributions;
                        if (o && o.length > 0)
                            for (var s = 0; s < o.length; s++) {
                                var a = o[s].countries,
                                    c = o[s].players;
                                if (t.checkRules(a, c)) {
                                    t.skey = o[s].set;
                                    break
                                }
                            }
                        t.listGame = t.config.sets[t.skey];
                        var l = 0;
                        if (cc.sys.localStorage.getItem("config_version" + i) && (l = cc.sys.localStorage.getItem("config_version" + i)), t.updateConfig(), l == t.version) {
                            var r = new Date,
                                h = 0;
                            cc.sys.localStorage.getItem("config_date" + i) && (h = cc.sys.localStorage.getItem("config_date" + i));
                            var u = cc.sys.localStorage.getItem("config_view" + i).split(","),
                                d = cc.sys.localStorage.getItem("config_click" + i).split(",");
                            if (u)
                                for (var g = 0; g < u.length && g < t.arrayView.length; g++) t.arrayView[g] = parseInt(u[g]), t.arrayClick[g] = parseInt(d[g]);
                            h == r.getDate() ? (cc.sys.localStorage.getItem("countInters" + i) && (t.countInters = parseInt(cc.sys.localStorage.getItem("countInters" + i))), cc.sys.localStorage.getItem("countIndex" + i) && (t.countIndex = parseInt(cc.sys.localStorage.getItem("countIndex" + i)))) : cc.sys.localStorage.setItem("config_date" + i, r.getDate())
                        }
                        cc.sys.localStorage.setItem("config_version" + i, t.version), cc.sys.localStorage.setItem("config_view" + i, t.arrayView.toString()), cc.sys.localStorage.setItem("config_click" + i, t.arrayClick.toString()), t.index = t.getIndex(), t.indexFull = t.index, t.loadFullscreen(), t.loadIcon()
                    }
                })
            },
            updateConfig: function() {
                if (this.listGame)
                    for (var t = 0; t < this.listGame.length; t++) this.arrayRate.push(this.listGame[t].rate), this.arrayView.push(0), this.arrayClick.push(0)
            },
            getIndex: function() {
                var t = 0,
                    e = new Array;
                do {
                    t = 0, e = new Array;
                    for (var n = 0; n < this.arrayRate.length; n++) {
                        var i = this.arrayRate[n] * Math.pow(1 - this.viewAdjust, this.arrayView[n]) * Math.pow(1 - this.clickAdjust, this.arrayClick[n]) * this.multi;
                        e.push(i), t += i
                    }
                    this.multi += 2
                } while (t < 10);
                for (var o = this.random(0, t), s = 0, a = 0; a < e.length; a++)
                    if (o < (s += e[a])) return a;
                return 0
            },
            random: function(t, e) {
                return Math.floor(t + Math.random() * (e - t + 1))
            },
            loadFullscreen: function() {
                var t = this;
                !this.listGame || this.indexFull < 0 || (this.listGame[this.indexFull].button && "" != this.listGame[this.indexFull].button.image && cc.loader.load(this.listGame[this.indexFull].button.image, function(e, n) {
                    t.ad_button.spriteFrame = new cc.SpriteFrame(n)
                }), cc.loader.load(this.listGame[this.indexFull].screenshot, function(e, n) {
                    t.ad_fullscreen.spriteFrame = new cc.SpriteFrame(n), t.loadFullSuccess = !0
                }))
            },
            loadIcon: function() {
                var t = this;
                !this.listGame || this.index < 0 || (this.ad_name.string = this.listGame[this.index].name, cc.loader.load(this.listGame[this.index].icon, function(e, n) {
                    t.loadIconSuccess = !0, t.ad_icon.spriteFrame = new cc.SpriteFrame(n)
                }))
            },
            checkSupportSwitchApi: function() {
                return "undefined" != typeof FBInstant && FBInstant.getSupportedAPIs().includes("switchGameAsync")
            },
            showFullScreen: function() {
                return !!this.checkSupportSwitchApi() && (!(!this.listGame || this.indexFull < 0 || this.countIndex < 0 || !this.loadFullSuccess) && (this.countInters++, cc.sys.localStorage.setItem("countInters" + i, this.countInters), this.countInters == this.rules.interstitial[this.countIndex] && (this.countIndex++, this.countIndex >= this.rules.interstitial.length && (this.countIndex = -1), cc.sys.localStorage.setItem("countIndex" + i, this.countIndex), this.arrayView[this.indexFull]++, cc.sys.localStorage.setItem("config_view" + i, this.arrayView.toString()), this.ad_fullscreen.node.active = !0, "undefined" != typeof FBInstant && (FBInstant.logEvent("ADS_FULL_SHOW", 1, {
                    GAMEID: this.listGame[this.indexFull].id
                }), !0))))
            },
            hideFullscreen: function() {
                this.ad_fullscreen.node.active = !1, this.loadFullSuccess = !1, this.indexFull = this.getIndex(), this.loadFullscreen()
            },
            showIcon: function() {
                if (!this.checkSupportSwitchApi()) return !1;
                !this.listGame || this.index < 0 || !this.loadIconSuccess || this.ad_name.node.parent.active || (this.ad_name.node.parent.active = !0, this.arrayView[this.index]++, cc.sys.localStorage.setItem("config_view" + i, this.arrayView.toString()), "undefined" != typeof FBInstant && FBInstant.logEvent("ADS_ICON_SHOW", 1, {
                    GAMEID: this.listGame[this.index].id
                }))
            },
            hideIcon: function() {
                this.ad_name.node.parent.active = !1, this.loadIconSuccess = !1, this.index = this.getIndex(), this.loadIcon()
            },
            clickAd: function() {
                this.arrayClick[this.index]++, cc.sys.localStorage.setItem("config_click" + i, this.arrayClick.toString()), "undefined" != typeof FBInstant && (FBInstant.logEvent("ADS_ICON_CLICK", 1, {
                    GAMEID: this.listGame[this.index].id
                }), FBInstant.switchGameAsync(this.listGame[this.index].id).catch(function(t) {
                    cc.log(t)
                }))
            },
            clickAdFull: function() {
                this.arrayClick[this.indexFull]++, cc.sys.localStorage.setItem("config_click" + i, this.arrayClick.toString()), "undefined" != typeof FBInstant && (FBInstant.logEvent("ADS_FULL_CLICK", 1, {
                    GAMEID: this.listGame[this.indexFull].id
                }), FBInstant.switchGameAsync(this.listGame[this.indexFull].id).catch(function(t) {
                    cc.log(t)
                }))
            }
        }), cc._RF.pop()
    }, {}],
    AdsCtl: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e8658VGjaRHkYHrAPLhSj/9", "AdsCtl");
        var i = null,
            o = null,
            s = cc.scaleTo(.01, 0),
            a = t("UtilsFB");
        cc.Class({
            extends: cc.Component,
            properties: {
                ballLayout: t("BallLayout"),
                homeCtrl: t("HomeCtl"),
                createShortcutNode: cc.Node,
                inviteBanner: cc.Node,
                contextBanner: cc.Node,
                shortcutButton: cc.Node,
                avatarInvite: cc.Sprite,
                inviteScore: cc.Label,
                inviteTop: cc.Label,
                subBtn: cc.Node,
                content: cc.Node,
                classicChallenge_label: cc.Label,
                prefabUserChallenge: cc.Prefab,
                parentUserBravo: cc.Node,
                prefabUserBravo: cc.Prefab
            },
            onLoad: function() {
                if (Global.adsCtl = this, cc.sys.localStorage.getItem("SUGGEST_RATE_REPLAY")) {
                    var t = cc.sys.localStorage.getItem("SUGGEST_RATE_REPLAY");
                    this.suggestRate = JSON.parse(t)
                } else this.suggestRate = [.6, .3, .1];
                if (cc.sys.localStorage.getItem("BEST_SCORE_EGGSHOOT")) {
                    var e = parseInt(cc.sys.localStorage.getItem("BEST_SCORE_EGGSHOOT"));
                    Global.bestEndless < e && (Global.bestEndless = e)
                }
            },
            start: function() {
                var t = this;
                this.listUserBravo = new cc.NodePool, this.listUserChallenge = [], this.d1 = new Date, this.isSub = !1, this.lastContextID = null,  this.loadInterstitial(), this.timeads = 30, this.timeAds(), this.adIndex = 0, this.showShortcutButton(), this.setSub(!1), this.checkSubBot(), this.classicChallenge_label.string = Global.i18n.t("CLASSICCHALLENGE");
                cc.loader.load("img/wicXp3X.jpg", function(e, n) {
                    t.contextBanner.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n), "undefined" != typeof FBInstant && null != FBInstant.context.getID() && t.sendUpdateContext()
                }), cc.loader.load("img/1LfRpyT.png", function(e, n) {
                    t.inviteBanner.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n)
                });
                this.schedule(function() {
                    "undefined" != typeof FBInstant && FBInstant.logEvent("TIMEONEGAME")
                }, 30), "undefined" != typeof FBInstant && cc.loader.load(Global.normalizeUrl(FBInstant.player.getPhoto()), function(e, n) {
                    t.avatarInvite.spriteFrame = new cc.SpriteFrame(n)
                })
            },
            rdText: function() {
                switch (Global.randRange(0, 2)) {
                    case 0:
                        return Global.i18n.t("GOOD");
                    case 1:
                        return Global.i18n.t("NICE");
                    case 2:
                        return Global.i18n.t("COOL")
                }
            },
            rdText1: function() {
                switch (Global.randRange(0, 2)) {
                    case 0:
                        return Global.i18n.t("WOW");
                    case 1:
                        return Global.i18n.t("EXCELLENT");
                    case 2:
                        return Global.i18n.t("PERFECT")
                }
            },
            spawnBravo: function(t) {
                var e = null;
                return (e = this.listUserBravo.size() > 0 ? this.listUserBravo.get() : cc.instantiate(this.prefabUserBravo)).parent = this.parentUserBravo, e.getComponent("UserRankingController").setInfo2(t), e
            },
            showScore: function(t, e, n) {
                var i = this;
                if ("undefined" != typeof FBInstant && (this.playerArray || (this.playerArray = a.getLeaderboardLocal("Endless")), this.playerArray && t > 500)) {
                    var o = Math.floor(Math.random() * this.playerArray.length),
                        s = this.spawnBravo(this.playerArray[o]);
                    t > 1e3 ? s.getComponent("UserRankingController").setBravoText(this.rdText1()) : s.getComponent("UserRankingController").setBravoText(this.rdText()), s.x = e.x - 40, s.y = e.y - 40;
                    var c = cc.moveBy(1.2, cc.v2(0, -50)),
                        l = cc.callFunc(function() {
                            i.listUserBravo.put(s)
                        }, this);
                    s.runAction(cc.sequence(c, l))
                }
            },
            loadFriends: function() {
                var t = this;
                this.num_f = 0, this.haveFriends = !1, "undefined" != typeof FBInstant && (FBInstant.player.getConnectedPlayersAsync().then(function(e) {
                    e.length > 0 && (t.haveFriends = !0, t.loadFriendLB(e)), FBInstant.logEvent("NUMBER_OF_FRIEND", e.length)
                }).catch(function(t) {}), this.getBestScore())
            },
            testLayout: function() {},
            loadFriendLB: function(t) {
                var e = this;
                this.num_f = t.length;
                for (var n = new Array, i = 0; i < this.num_f; i++) {
                    var o = cc.instantiate(this.prefabUserChallenge);
                    o.parent = this.content, this.listUserChallenge.push(o.getComponent("UserRankingController")), this.listUserChallenge[i].setInfo1(t[i].getID(), t[i].getPhoto(), t[i].getName());
                    var s = {};
                    s.photoUrl = t[i].getPhoto(), s.photoTexture = null, s.isSelf = t[i].getID() == FBInstant.player.getID(), s.isFriend = !0, s.id = t[i].getID(), s.playerName = t[i].getName(), s.rank = i, s.score = "", n.push(s)
                }
                a.updateLbLocal("lbfriend", n).then(function(t) {
                    e.playerArray = t
                }), t.length >= 5 && (this.content.getComponent(cc.Widget).isAlignHorizontalCenter = !1, this.content.getComponent(cc.Widget).isAlignLeft = !0, this.content.getComponent(cc.Widget).left = 860, this.content.getComponent(cc.Widget).updateAlignment())
            },
            startFriendHome: function() {
                this.homeCtrl.endlessMode()
            },
            startFriendRanking: function() {},
            loadInterstitial: function() {
                /*"undefined" != typeof FBInstant && null == i && FBInstant.getInterstitialAdAsync("2492644277420233_2522982261053101").then(function(t) {
                    return (i = t).loadAsync()
                }).then(function() {}).catch(function(t) {
                    console.error("Interstitial failed to preload A: ", t), FBInstant.logEvent("INTERSTITIAL FAILED TO PRELOAD A", 1), FBInstant.getInterstitialAdAsync("2492644277420233_2523103617707632").then(function(t) {
                        return (i = t).loadAsync()
                    }).then(function() {
                        cc.log("Interstitial preloaded B")
                    }).catch(function(t) {
                        console.error("Interstitial failed to preload B: ", t)
                    })
                })*/
            },
            checkSupportedAds: function() {
                return "undefined" != typeof FBInstant && FBInstant.getSupportedAPIs().includes("getInterstitialAdAsync")
            },
            showFirstSubscirbe: function() {
                if (!this.isSub) {
                    this.isSub = !0;
                    var t = new Date,
                        e = Math.floor((t.getTime() - this.d1.getTime()) / 1e3);
                    FBInstant.logEvent("TIME_SUBSCRIBE_OPEN", e)
                }
            },
            showInterstitialAsync: function() {
                var t = this;
                return "undefined" == typeof FBInstant ? Promise.resolve() : Global.isPurchaseRemoveAds ? Promise.resolve() : null != cc.sys.localStorage.getItem("RemoveAds") ? Promise.resolve() : this.isSubscribe() ? (FBInstant.logEvent("SHOW_SUBSCRIBE_BOT_FIRST_INTERSTITIAL"), this.showSubsBotAsync().then(function() {
                    t.setSub(!1)
                })) : this.showIntersAsync()
            },
            showSubsBotAsync: function() {
                return this.showFirstSubscirbe(), FBInstant.player.subscribeBotAsync().then(function() {
                    FBInstant.logEvent("SUBSCRIBE_BOT", 1, {
                        SELECT: "Yes"
                    })
                }).catch(function(t) {
                    FBInstant.logEvent("SUBSCRIBE_BOT", 1, {
                        SELECT: "No"
                    })
                })
            },
            showIntersAsync: function() {
                var t = this;
                return null == i ? (this.loadInterstitial(), this.timeads <= 0 ? (this.timeads = 30, this.timeAds(), this.showCantLoadAds()) : Promise.resolve()) : this.timeads > 0 ? Promise.resolve() : window.adsCtl.showFullScreen() ? (this.timeads = 30, this.timeAds(), Promise.resolve()) : (this.timeads = 30, this.timeAds(), i.showAsync().then(function() {
                    i = null, t.loadInterstitial()
                }).catch(function(e) {
                    return i = null, t.loadInterstitial(), t.showCantLoadAds()
                }))
            },
            showInterstitial: function() {
                return "undefined" != typeof FBInstant && (!Global.isPurchaseRemoveAds && void(this.isSubscribe() ? (FBInstant.logEvent("SHOW_SUBSCRIBE_BOT_FIRST_INTERSTITIAL"), this.showSubsBot(), this.setSub(!1)) : this.showInters()))
            },
            showInters: function() {
                var t = this;
                if (null == i) return this.loadInterstitial(), this.timeads <= 0 && (this.timeads = 30, this.timeAds(), this.showCantLoadAds()), !1;
                if (!(this.timeads > 0)) {
                    if (window.adsCtl.showFullScreen()) return this.timeads = 30, void this.timeAds();
                    this.timeads = 30, this.timeAds(), i.showAsync().then(function() {
                        i = null, t.loadInterstitial()
                    }).catch(function(e) {
                        i = null, t.loadInterstitial(), t.showCantLoadAds()
                    })
                }
            },
            timeAds: function() {
                var t = this;
                this.timeads--, this.timeads > 0 && this.scheduleOnce(function() {
                    t.timeAds()
                }, 1)
            },
            showCantLoadAds: function() {
                return FBInstant.logEvent("SHOW_ADS_FAILED_INVITE_FB"), Promise.resolve()
            },
            closeAds: function() {
                this.ballLayout.closeAdsState()
            },
            isLocaleVN: function() {
                return "undefined" != typeof FBInstant && "vi_VN" == FBInstant.getLocale()
            },
            checkSupportedAPIs: function() {
                return "undefined" != typeof FBInstant && FBInstant.getSupportedAPIs().includes("getRewardedVideoAsync")
            },
            loadVideo: function() {
                "undefined" != typeof FBInstant && (o || FBInstant.getRewardedVideoAsync("2492644277420233_2506583762692951").then(function(t) {
                    return (o = t).loadAsync()
                }).then(function() {
                    FBInstant.logEvent("VIDEO PRELOADED A")
                }).catch(function(t) {
                    o = null, FBInstant.getRewardedVideoAsync("2492644277420233_2523117571039570").then(function(t) {
                        return (o = t).loadAsync()
                    }).then(function() {
                        FBInstant.logEvent("VIDEO PRELOADED B")
                    }).catch(function(t) {
                        o = null, cc.log(t.message)
                    })
                }))
            },
            showVideo: function() {
                1 == Global.modeID ? (cc.log("showVideoEndless"), this.showVideoPopupEndless()) : (cc.log("showVideoStomped"), this.showVideoStomped())
            },
            showInvitePopupEndless: function() {
                /*FBInstant.logEvent("INVITE_FRIEND", 1, {
                    LOCATION: "GAMEOVER_POPUP_ENDLESS"
                }), this.ballLayout.clearCountDownVideoEndless(), this.inviteFriends()*/
            },
            showVideoPopupEndless: function() {
                var t = this;
                if (!o) return cc.log("null preloadedVideo"), this.loadVideo(), this.ballLayout.isFinishEndless && (this.ballLayout.cancelVideoEndless(), this.ballLayout.isFinishEndless = !1), void this.videoNotAvailable();
                this.ballLayout.clearCountDownVideoEndless(), o.showAsync().then(function() {
                    t.ballLayout.bgVideoStomped1.node.runAction(s), t.ballLayout.videoStomped.active = !1, t.ballLayout.isFinishEndless && (t.ballLayout.playContinueVideoEndless(), t.ballLayout.isFinishEndless = !1), o = null, t.loadVideo()
                }).catch(function(e) {
                    t.ballLayout.isFinishEndless && (t.ballLayout.cancelVideoEndless(), t.ballLayout.isFinishEndless = !1), t.videoNotAvailable(), o = null, t.loadVideo(), console.error(e.message)
                })
            },
            showVideoStomped: function() {
                var t = this;
                if (!o) return cc.log("null preloadedVideo"), this.loadVideo(), this.ballLayout.clearCountDownVideo(), FBInstant.logEvent("INVITE_FRIEND", 1, {
                    LOCATION: "GAMEOVER_POPUP_STOMPED"
                }), void this.inviteFriends();
                this.ballLayout.clearCountDownVideo(), o.showAsync().then(function() {
                    FBInstant.logEvent("SHOW_VIDEO_STOMPED"), t.ballLayout.playAgainVideoStomped(), o = null, t.loadVideo()
                }).catch(function(e) {
                    t.showInterstitialStomped(), o = null, t.loadVideo(), console.error(e.message)
                })
            },
            showInterstitialStomped: function() {
                var t = this;
                return "undefined" != typeof FBInstant && (null == i ? (this.loadInterstitial(), this.ballLayout.playAgainVideoStomped(), this.showCantLoadAds(), !1) : void(window.adsCtl.showFullScreen() ? this.ballLayout.playAgainVideoStomped() : i.showAsync().then(function() {
                    t.ballLayout.playAgainVideoStomped(), i = null, t.loadInterstitial()
                }).catch(function(e) {
                    i = null, t.loadInterstitial(), t.ballLayout.playAgainVideoStomped(), t.showCantLoadAds()
                })))
            },
            showCreateShortcut: function() {
                var t = this;
                Math.floor(100 * Math.random()) < 20 ? "undefined" == typeof FBInstant ? (this.createShortcutNode.active = !1, this.ballLayout.finishStompedWithVideo()) : FBInstant.canCreateShortcutAsync().then(function(e) {
                    e ? FBInstant.player.getDataAsync(["CS2"]).then(function(e) {
                        void 0 === e.CS2 ? (FBInstant.logEvent("SHOW_ADS_FAILED_CREATE_SHORTCUT"), t.createShortcutNode.active = !0, t.ballLayout.showAdsState()) : (t.createShortcutNode.active = !1, t.ballLayout.finishStompedWithVideo())
                    }) : (t.createShortcutNode.active = !1, t.ballLayout.finishStompedWithVideo())
                }) : this.ballLayout.finishStompedWithVideo()
            },
            createShortcutButton: function() {
                var t = this;
                FBInstant.createShortcutAsync().then(function() {
                    FBInstant.player.setDataAsync({
                        CS2: 0
                    }), FBInstant.logEvent("CREATE_SHORTCUT_BUTTON_POPUP"), t.shortcutButton.active = !1, t.createShortcutNode.active = !1, t.ballLayout.closeAdsState(), t.ballLayout.playAgainVideoStomped()
                }).catch(function() {
                    t.closeCreateShortcut()
                })
            },
            closeCreateShortcut: function() {
                this.shortcutButton.active = !1, this.createShortcutNode.active = !1, this.ballLayout.closeAdsState(), this.ballLayout.cancelVideoStomped()
            },
            playAgainWF: function() {
                var t = this;
                FBInstant.context.chooseAsync().then(function() {
                    t.ballLayout.playAgain(), t.sendUpdateLastSession()
                }).catch(function(e) {
                    t.ballLayout.playAgain()
                })
            },
            inviteFriendsFromFinishPopup: function() {
                var t = this;
                this.suggestPlayAgain()
            },
            suggestChallenge: function() {
                var t = this;
                return "undefined" == typeof FBInstant ? (this.suggestRate[0] *= .67, Promise.resolve()) : this.num_f > 0 && this.haveFriends ? FBInstant.context.createAsync(this.listUserChallenge[Global.randRange(0, this.num_f - 1)].getID()).then(function() {
                    t.updateContext(), t.suggestRate[0] *= 1.5, FBInstant.logEvent("REPLAY_SUGGEST", 1, {
                        type: "challenge",
                        result: "yes"
                    })
                }).catch(function(e) {
                    return "SAME_CONTEXT" == e.code ? (FBInstant.logEvent("REPLAY_SUGGEST", 1, {
                        type: "challenge",
                        result: "yes"
                    }), t.suggestRate[0] *= 1.5) : (FBInstant.logEvent("REPLAY_SUGGEST", 1, {
                        type: "challenge",
                        result: "no"
                    }), t.suggestRate[0] *= .67), Promise.resolve()
                }) : FBInstant.context.chooseAsync().then(function() {
                    t.updateLastContext(), t.suggestRate[0] *= 1.5, FBInstant.logEvent("REPLAY_SUGGEST", 1, {
                        type: "challenge",
                        result: "yes"
                    })
                }).catch(function(e) {
                    return t.suggestRate[0] *= .67, FBInstant.logEvent("REPLAY_SUGGEST", 1, {
                        type: "challenge",
                        result: "no"
                    }), Promise.resolve()
                })
            },
            suggestInvite: function() {
                var t = this;
                return "undefined" == typeof FBInstant ? (this.suggestRate[1] *= .67, Promise.resolve()) : FBInstant.context.chooseAsync().then(function() {
                    t.updateLastContext(), t.suggestRate[1] *= 1.5, FBInstant.logEvent("REPLAY_SUGGEST", 1, {
                        type: "invite",
                        result: "yes"
                    })
                }).catch(function(e) {
                    return t.suggestRate[1] *= .67, FBInstant.logEvent("REPLAY_SUGGEST", 1, {
                        type: "invite",
                        result: "no"
                    }), Promise.resolve()
                })
            },
            suggestPlayAgain: function() {
                var t = this,
                    e = this.getSuggestIndex();
                0 == e ? this.suggestChallenge().finally(function() {
                    t.updateSuggestRate()
                }) : 1 == e ? this.suggestInvite().finally(function() {
                    t.updateSuggestRate()
                }) : this.ballLayout.playAgain()
            },
            updateSuggestRate: function() {
                this.ballLayout.playAgain();
                var t = this.suggestRate[0] + this.suggestRate[1] + this.suggestRate[2],
                    e = Math.round(100 * this.suggestRate[0] / t) / 100,
                    n = Math.round(100 * this.suggestRate[1] / t) / 100,
                    i = Math.round(100 * this.suggestRate[2] / t) / 100;
                this.suggestRate = [e, n, i], console.log("rate", this.suggestRate), cc.sys.localStorage.setItem("SUGGEST_RATE_REPLAY", JSON.stringify(this.suggestRate))
            },
            getSuggestIndex: function() {
                for (var t = Math.random(), e = 0, n = 0; n < this.suggestRate.length; n++)
                    if (t < (e += this.suggestRate[n])) return n;
                return 2
            },
            inviteFriendsFromRank: function() {
                /*var t = this;
                "undefined" != typeof FBInstant ? this.num_f > 0 && this.haveFriends ? (FBInstant.logEvent("CHALLENGE_FRIEND", 1, {
                    LOCATION: "RANK2"
                }), FBInstant.context.createAsync(this.listUserChallenge[Global.randRange(0, this.num_f - 1)].getID()).then(function() {
                    t.ballLayout.closeRanking(), t.sendUpdateLastSession()
                }).catch(function(e) {
                    console.log("invite-rank error 1", e), "SAME_CONTEXT" == e.code ? t.ballLayout.closeRanking() : "USER_INPUT" == e.code && FBInstant.context.chooseAsync().then(function() {
                        t.ballLayout.closeRanking(), t.sendUpdateLastSession()
                    }).catch(function(e) {
                        "SAME_CONTEXT" == e.code && t.ballLayout.closeRanking()
                    })
                })) : (FBInstant.logEvent("INVITE_FRIEND", 1, {
                    LOCATION: "RANK"
                }), FBInstant.context.chooseAsync().then(function() {
                    t.ballLayout.closeRanking(), t.sendUpdateLastSession()
                }).catch(function(e) {
                    console.log("invite-rank error 2", e), "SAME_CONTEXT" == e.code && t.ballLayout.closeRanking()
                })) : this.ballLayout.closeRanking()*/
            },
            inviteFriends: function() {
                /*var t = this;
                if ("undefined" != typeof FBInstant) return FBInstant.context.chooseAsync().then(function() {
                    t.ballLayout.bgVideoStomped1.node.runAction(s), t.ballLayout.videoStomped.active = !1, t.updateContext(), t.ballLayout.isFinishEndless && (t.ballLayout.playContinueVideoEndless(), t.ballLayout.isFinishEndless = !1), t.ballLayout.isFinishStomped && (t.ballLayout.playAgainVideoStomped(), t.ballLayout.isFinishStomped = !1)
                }).catch(function(e) {
                    cc.log("choose reject 1", e), t.ballLayout.isFinishEndless && (FBInstant.logEvent("SHOW_POPUP_INVITE_ENDLESS", 1, {
                        STATE: "INVITE_REJECT"
                    }), t.ballLayout.cancelVideoEndless(), t.ballLayout.isFinishEndless = !1), t.ballLayout.isFinishStomped && (t.ballLayout.cancelVideoStomped(), t.ballLayout.isFinishStomped = !1)
                })*/
            },
            updateContext: function() {
                a.getTournamentAsync().then(function(t) {}).catch(function(t) {}), this.contextBanner.active = !1, this.inviteScore.string = this.ballLayout.currentScore, FBInstant.updateAsync({
                    action: "CUSTOM",
                    cta: "Challenge!",
                    template: "invite_play",
                    image: this.getImgBase64(this.inviteBanner),
                    text: {
                        default: "\ud83d\ude0e Can you score BETTER?",
                        localizations: {
                            vi_VN: "\ud83d\ude0e B\u1ea1n c\xf3 th\u1ec3 v\u01b0\u1ee3t qua t\xf4i?",
                            th_TH: "\ud83d\ude0e \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e04\u0e30\u0e41\u0e19\u0e19\u0e44\u0e14\u0e49\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32?"
                        }
                    },
                    data: {},
                    strategy: "IMMEDIATE",
                    notification: "PUSH"
                }).then(function() {
                    cc.log("invite success")
                }).catch(function(t) {
                    cc.log("invite reject ", t)
                })
            },
            updateLastContext: function() {
                this.contextBanner.active = !0, FBInstant.updateAsync({
                    action: "CUSTOM",
                    cta: "Play Game",
                    template: "update_last_context",
                    image: this.getImgBase64(this.contextBanner),
                    text: {
                        default: "\ud83e\udd29 Game so cute! Play with me?",
                        localizations: {
                            vi_VN: "\ud83e\udd29 Game kute qu\xe1! V\xe0o ch\u01a1i c\xf9ng nh\xe9.",
                            th_TH: "\ud83e\udd29 \u0e40\u0e01\u0e21\u0e19\u0e48\u0e32\u0e23\u0e31\u0e01\u0e21\u0e32\u0e01! \u0e40\u0e25\u0e48\u0e19\u0e01\u0e31\u0e1a\u0e09\u0e31\u0e19?"
                        }
                    },
                    data: {},
                    strategy: "IMMEDIATE_CLEAR",
                    notification: "PUSH"
                }).then(function() {
                    cc.log("updateLastContext success")
                }).catch(function(t) {
                    cc.log("updateLastContext reject ", t)
                }), a.getTournamentAsync().then(function(t) {}).catch(function(t) {})
            },
            getImgBase64: function(t) {
                return t.getComponent("ScreenShotNode").shot()
            },
            showShortcutButton: function() {
                var t = this;
                "undefined" != typeof FBInstant ? FBInstant.canCreateShortcutAsync().then(function(e) {
                    e ? FBInstant.player.getDataAsync(["CS2"]).then(function(e) {
                        void 0 === e.CS2 ? t.shortcutButton.active = !0 : t.shortcutButton.active = !1
                    }) : t.shortcutButton.active = !1
                }) : this.shortcutButton.active = !1
            },
            createShortcut1: function() {
                FBInstant.logEvent("CREATE_SHORTCUT_FROM_BUTTON"), FBInstant.createShortcutAsync().then(function() {
                    FBInstant.player.setDataAsync({
                        CS2: 0
                    })
                }).catch(function() {}), this.shortcutButton.active = !1
            },
            showInviteRanking: function() {
                this.showInterstitial()
            },
            shareFacebook: function() {
                "undefined" != typeof FBInstant && (FBInstant.logEvent("BUTTON_SHARE_CLICK"), this.inviteScore.string = Global.bestEndless, this.contextBanner.active = !1, FBInstant.shareAsync({
                    intent: "INVITE",
                    image: this.getImgBase64(this.inviteBanner),
                    text: "\ud83d\ude0e Can you beat me!",
                    data: {}
                }).then(function() {
                    FBInstant.logEvent("SHARE_FINISH_LEVEL_SUCCESS")
                }))
            },
            sendUpdateLastSession: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.inviteScore.string = Global.bestEndless, this.contextBanner.active = !1, FBInstant.updateAsync({
                    action: "CUSTOM",
                    cta: "Play Game",
                    template: "game_session_ends",
                    image: this.getImgBase64(this.inviteBanner),
                    text: {
                        default: "\ud83d\ude0e Can you score BETTER?",
                        localizations: {
                            vi_VN: "\ud83d\ude0e B\u1ea1n c\xf3 th\u1ec3 v\u01b0\u1ee3t qua t\xf4i?",
                            th_TH: "\ud83d\ude0e \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e04\u0e30\u0e41\u0e19\u0e19\u0e44\u0e14\u0e49\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32?"
                        }
                    },
                    data: {},
                    strategy: "IMMEDIATE_CLEAR",
                    notification: "PUSH"
                }).then(function() {
                    console.log("game_session_ends success")
                }).catch(function(t) {
                    console.log("game_session_ends reject ", t)
                }), a.getTournamentAsync().then(function(t) {}).catch(function(t) {})
            },
            showVideoGift: function() {
                var t = this;
				
				// $.ajax({
					// type: 'POST',
					// url: '/luudiem.php',
					// data: 'data=afk',
					// success:function(result){
						// if(result==1) {
							// xqc = xemquangcao();
						// }
					// }
				// });
                if ("undefined" == typeof FBInstant) return this.ballLayout.pauseInvite(), void this.ballLayout.showVideoGift();
                this.ballLayout.pauseInvite(), 12 == this.ballLayout.giftBonus ? FBInstant.logEvent("SHOW_VIDEO_GIFT_BONUS", 1, {
                    custom_property: "X2"
                }) : 13 == this.ballLayout.giftBonus ? FBInstant.logEvent("SHOW_VIDEO_GIFT_BONUS", 1, {
                    custom_property: "X3"
                }) : 14 == this.ballLayout.giftBonus ? FBInstant.logEvent("SHOW_VIDEO_GIFT_BONUS", 1, {
                    custom_property: "X4"
                }) : 7 == this.ballLayout.giftBonus && FBInstant.logEvent("SHOW_VIDEO_GIFT_BONUS", 1, {
                    custom_property: "BOOM"
                }), this.isSubscribe() ? (FBInstant.logEvent("SHOW_SUBSCRIBE_BOT_VIDEO_GIFT"), this.showFirstSubscirbe(), FBInstant.player.subscribeBotAsync().then(function() {
                    FBInstant.logEvent("SUBSCRIBE_BOT", 1, {
                        SELECT: "Yes"
                    }), t.ballLayout.resumeGame(), t.ballLayout.addGift()
                }).catch(function(e) {
                    t.ballLayout.resumeGame(), FBInstant.logEvent("SUBSCRIBE_BOT", 1, {
                        SELECT: "No"
                    })
                }), this.setSub(!1)) : this.ballLayout.showVideoGift()
            },
            eventButtonVideoGift: function() {
				//alert(1111);
                var t = this;
               // xqc===true,cc.log("show video success"), t.ballLayout.cancelVideoGift(), t.ballLayout.addGift(), o = null, t.loadVideo()
                
               /* return "undefined" == typeof FBInstant ? (this.ballLayout.cancelVideoGift(), this.ballLayout.addGift(), void this.videoNotAvailable()) : o ? void o.showAsync().then(function() {
                    cc.log("show video success"), t.ballLayout.cancelVideoGift(), t.ballLayout.addGift(), o = null, t.loadVideo()
                }).catch(function(e) {
                    cc.log("show video fail"), t.ballLayout.buttonGift.active = !1, t.ballLayout.cancelVideoGift(), t.videoNotAvailable(), o = null, t.loadVideo()
                }) : (cc.log("preload video failed"), this.loadVideo(), this.ballLayout.buttonGift.active = !1, this.ballLayout.cancelVideoGift(), void this.videoNotAvailable())*/
            },
            videoNotAvailable: function() {
                var t = this;
                this.ballLayout.notVideo.active = !0, this.scheduleOnce(function() {
                    t.ballLayout.notVideo.active = !1
                }, 2)
            },
            playWithFriends: function() {
                /*var t = this;
                "undefined" != typeof FBInstant ? (FBInstant.logEvent("PLAY_WF_HOME"), FBInstant.context.chooseAsync().then(function() {
                    t.homeCtrl.endlessMode(), t.sendUpdateLastSession()
                }).catch(function(e) {
                    t.homeCtrl.endlessMode()
                })) : this.homeCtrl.endlessMode()*/
            },
            showInviteGift: function() {
                var t = this;
                this.ballLayout.pauseInvite(), FBInstant.context.chooseAsync().then(function() {
                    t.ballLayout.resumeGame(), t.ballLayout.addGift(), t.updateContext()
                }).catch(function(e) {
                    t.ballLayout.resumeGame(), cc.log("choose reject ", e)
                })
            },
            checkSubBot: function() {
                var t = this;
                "undefined" != typeof FBInstant && FBInstant.player.canSubscribeBotAsync().then(function(e) {
                    t.setSub(!1), e && (FBInstant.logEvent("SUBSCRIBE_BOT_NEED"), t.showSubsBot())
                })
            },
            isSubscribe: function() {
                return this.can_subscribe
            },
            setSub: function(t) {
                this.can_subscribe = t
            },
            eventSubBot: function() {
                "undefined" != typeof FBInstant && (this.isSubscribe() && (FBInstant.logEvent("SHOW_SUBSCRIBE_BOT_HOME_BUTTON"), this.showSubsBot()), this.setSub(!1))
            },
            showSubsBot: function() {
                this.showFirstSubscirbe(), FBInstant.player.subscribeBotAsync().then(function() {
                    FBInstant.logEvent("SUBSCRIBE_BOT", 1, {
                        SELECT: "Yes"
                    })
                }).catch(function(t) {
                    FBInstant.logEvent("SUBSCRIBE_BOT", 1, {
                        SELECT: "No"
                    })
                })
            },
            openSubPopup: function() {
                this.eventSubBot()
            },
            closeSubPopup: function() {},
            loadAdButton: function() {},
            switchAdButton: function() {},
            switchPikachu: function() {
                "undefined" != typeof FBInstant && (FBInstant.logEvent("SWITCH_PIKACHU"), FBInstant.switchGameAsync("1043181865796678").catch(function(t) {}))
            },
            switchColorLink: function() {
                "undefined" != typeof FBInstant && (FBInstant.logEvent("SWITCH_COLOR_LINK"), FBInstant.switchGameAsync("529117187574163").catch(function(t) {
                    cc.log(t)
                }))
            },
            switchBubbleShooter: function() {
                "undefined" != typeof FBInstant && (FBInstant.logEvent("SWITCH_BUBBLE_SHOOTER"), FBInstant.switchGameAsync("227788504726017").catch(function(t) {}))
            },
            showAdButton: function(t) {
                t ? window.adsCtl.showIcon() : window.adsCtl.hideIcon()
            },
            checkSupportSwitchApi: function() {
                return "undefined" != typeof FBInstant && FBInstant.getSupportedAPIs().includes("switchGameAsync")
            },
            sendUpdateContext: function() {
                this.contextBanner.active = !0, FBInstant.updateAsync({
                    action: "CUSTOM",
                    cta: "Play Game",
                    template: "game_session_ends",
                    image: this.getImgBase64(this.contextBanner),
                    text: {
                        default: "\ud83e\udd29 Game so cute! Play with me?",
                        localizations: {
                            vi_VN: "\ud83e\udd29 Game kute qu\xe1! V\xe0o ch\u01a1i c\xf9ng nh\xe9.",
                            th_TH: "\ud83e\udd29 \u0e40\u0e01\u0e21\u0e19\u0e48\u0e32\u0e23\u0e31\u0e01\u0e21\u0e32\u0e01! \u0e40\u0e25\u0e48\u0e19\u0e01\u0e31\u0e1a\u0e09\u0e31\u0e19?"
                        }
                    },
                    data: {},
                    strategy: "LAST",
                    notification: "PUSH"
                }).then(function() {
                    console.log("game_session_ends success")
                }).catch(function(t) {
                    console.log("game_session_ends reject ", t)
                }), a.getTournamentAsync().then(function(t) {}).catch(function(t) {
                    Global.adsCtl.getTourMap()
                })
            },
            getBestScore: function() {
                var t = this;
                "undefined" != typeof FBInstant && null != FBInstant.context.getID() && (this.lastContextID = FBInstant.context.getID(), a.getFBContext().then(function(e) {
                    for (var n = !1, i = 0; i < e.length; i++)
                        if (e[i].isSelf) {
                            n = !0, i > 0 ? t.ballLayout.loadNextInfo(e[i - 1]) : t.ballLayout.loadNextInfo(e[0]), t.inviteScore.string = e[i].score, e[i].rank;
                            break
                        } n || t.ballLayout.loadNextInfo(e[e.length - 1]), t.inviteTop.string = "", window.home_rank && window.home_rank.node.active && window.home_rank.loadLB(e)
                }).catch(function(t) {}))
            },
            setBestScore: function(t) {
                console.log("best-score", Global.bestEndless), t > Global.bestEndless && (Global.bestEndless = t, this.setBestlocal()), a.initPlayerInfo(t), this.setBestlabel()
            },
            setBestlabel: function() {
                this.homeCtrl.labelScoreInvite.string = Global.bestEndless, this.homeCtrl.best1.string = Global.i18n.t("BEST") + ": " + Global.bestEndless
            },
            setBestlocal: function() {
                cc.sys.localStorage.setItem("BEST_SCORE_EGGSHOOT", Global.bestEndless)
            },
            saveBestscore: function() {
                FBInstant.player.setDataAsync({
                    BEST_SCORE_EGGSHOOT: Global.bestEndless
                })
            },
            getTourMap: function() {
                var t = this;
                "{}" == JSON.stringify(a.tournamentMapLocal) ? FBInstant.player.getDataAsync(["TOUR_MAP"]).then(function(e) {
                    void 0 !== e.TOUR_MAP && (cc.log("tour-map", e.TOUR_MAP), a.tournamentMapLocal = JSON.parse(e.TOUR_MAP), t.switchTournament())
                }) : this.switchTournament()
            },
            switchTournament: function() {
                var t = this;
                cc.log("tour", a.tournamentMapLocal);
                var e = a.getTournamentLocal();
                cc.log("tourid", e), e && (FBInstant.logEvent("SWITCH_TOURNAMENT_SHOW_POPUP"), FBInstant.context.switchAsync(e.id).then(function() {
                    FBInstant.logEvent("SWITCH_TOURNAMENT_SELECT", 1, {
                        SELECT: "YES"
                    }), a.getTournamentAsync().then(function(t) {}).catch(function(t) {}), t.homeCtrl.node.active ? t.homeCtrl.endlessMode() : t.ballLayout.fbConText(0)
                }).catch(function(t) {
                    FBInstant.logEvent("SWITCH_TOURNAMENT_SELECT", 1, {
                        SELECT: "CANCEL"
                    }), cc.log("switch error", t)
                }))
            },
            getLBEndless: function() {}
        }), cc._RF.pop()
    }, {
        BallLayout: "BallLayout",
        HomeCtl: "HomeCtl",
        UtilsFB: "UtilsFB"
    }],
    AudioMng: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7f1d7EOMLtDIoCtn7duoZDz", "AudioMng"), cc.Class({
            extends: cc.Component,
            properties: {
                musicIcon: cc.Node,
                soundIcon: cc.Node,
                musicSlider: cc.Slider,
                soundSlider: cc.Slider
            },
            onLoad: function() {
                Global.audioMng = this, this._urls = {
                    game: "audio/home",
                    stick: "audio/stick",
                    gameover: "audio/xgameover",
                    rebound: "audio/rebound",
                    lauch: "audio/lauch",
                    newrootsolo: "audio/newroot_solo",
                    aooga: "audio/Aooga",
                    destroygroup: "audio/destroy_group",
                    alert: "audio/alert",
                    thunder: "audio/Thunderbolt",
                    ticktock: "audio/ticktock"
                }
            },
            startMusic: function() {
                cc.sys.localStorage.getItem("musicOn1") && 1 == cc.sys.localStorage.getItem("musicOn1") ? this.isMusicOn = !1 : this.isMusicOn = !0, cc.sys.localStorage.getItem("music_volume") && (this.musicSlider.progress = cc.sys.localStorage.getItem("music_volume"), cc.audioEngine.setMusicVolume(this.musicSlider.progress)), cc.sys.localStorage.getItem("sound_volume") && (this.soundSlider.progress = cc.sys.localStorage.getItem("sound_volume"), cc.audioEngine.setEffectsVolume(this.soundSlider.progress)), cc.sys.localStorage.getItem("soundOn1") ? 1 == cc.sys.localStorage.getItem("soundOn1") ? Global.sound = !1 : Global.sound = !0 : Global.sound = !1, this.musicCtl(), this.soundCtl()
            },
            playMusicGame: function() {
                var t = this;
                this.isMusic || cc.loader.loadRes(this._urls.game, cc.AudioClip, function(e, n) {
                    t.isMusic = !0, cc.audioEngine.playMusic(n, !0)
                })
            },
            playMusic2: function() {},
            setMusicVolume: function() {
                cc.audioEngine.setMusicVolume(this.musicSlider.progress), cc.sys.localStorage.setItem("music_volume", this.musicSlider.progress)
            },
            setEffectsVolume: function() {
                cc.audioEngine.setEffectsVolume(this.soundSlider.progress), cc.sys.localStorage.setItem("sound_volume", this.soundSlider.progress)
            },
            pauseMusic: function() {
                cc.audioEngine.pauseMusic()
            },
            resumeMusic: function() {
                cc.audioEngine.resumeMusic()
            },
            _playSFX: function(t) {
                Global.sound && cc.loader.loadRes(t, cc.AudioClip, function(t, e) {
                    cc.audioEngine.playEffect(e, !1)
                })
            },
            playCombo: function(t) {
                Global.sound && cc.loader.loadRes("audio/X" + t, cc.AudioClip, function(t, e) {
                    cc.audioEngine.playEffect(e, !1)
                })
            },
            playTickTock: function() {
                var t = this;
                this.schedule(function() {
                    t._playSFX(t._urls.ticktock)
                }, .6, 2), this.scheduleOnce(function() {
                    t._playSFX(t._urls.alert)
                }, 1.8)
            },
            playThunder: function() {
                this._playSFX(this._urls.thunder)
            },
            playStick: function() {
                this._playSFX(this._urls.stick)
            },
            playRebound: function() {
                this._playSFX(this._urls.rebound)
            },
            playDestroyGroup: function() {
                this._playSFX(this._urls.destroygroup)
            },
            playGameOver: function() {
                this._playSFX(this._urls.gameover)
            },
            playAooga: function() {
                this._playSFX(this._urls.aooga)
            },
            playNewRoot: function() {
                this._playSFX(this._urls.newrootsolo)
            },
            playLauch: function() {
                this._playSFX(this._urls.lauch)
            },
            soundCtl: function() {
                Global.sound = !Global.sound, Global.sound ? (this.soundIcon.color = cc.Color.WHITE, cc.sys.localStorage.setItem("soundOn1", 1)) : (this.soundIcon.color = cc.Color.BLACK, cc.sys.localStorage.setItem("soundOn1", 0))
            },
            musicCtl: function() {
                this.isMusicOn = !this.isMusicOn, this.isMusicOn ? (this.musicIcon.color = cc.Color.WHITE, this.playMusicGame(), this.resumeMusic(), cc.sys.localStorage.setItem("musicOn1", 1)) : (this.musicIcon.color = cc.Color.BLACK, this.pauseMusic(), cc.sys.localStorage.setItem("musicOn1", 0))
            }
        }), cc._RF.pop()
    }, {}],
    BallLayout: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "62398FSMJtHJ55jmSoqf4WF", "BallLayout");
        var i, o, s, a = cc.Enum({
                PAUSE: 0,
                RANK: 1,
                PLAY: 2,
                FINISH: 3,
                HOME: 4,
                ADS: 5,
                THUNDER: 6
            }),
            c = [],
            l = 11,
            r = .1,
            h = 3,
            u = 0,
            d = -1,
            g = -1,
            f = null,
            p = 0,
            b = 0,
            m = 0,
            y = 0,
            v = 0,
            S = [],
            I = 0,
            E = !1,
            C = 1,
            B = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                this.bubble = t, this.type = e
            },
            F = function(t, e, n, i, o) {
                this.final = t, this.x = e, this.y = n, this.dx = i, this.dy = o
            },
            T = cc.scaleTo(.01, 0),
            A = [cc.v2(0, -70), cc.v2(-50, -50), cc.v2(-70, 0), cc.v2(-50, 50), cc.v2(0, 70), cc.v2(50, 50), cc.v2(70, 0), cc.v2(50, -50)],
            G = 0,
            L = t("UtilsFB");
        cc.Class({
            extends: cc.Component,
            properties: {
                ballPrefab: cc.Prefab,
                spriteBall: {
                    default: [],
                    type: cc.SpriteFrame
                },
                arrowNode: cc.Node,
                audioMng: cc.Node,
                compressor: cc.Node,
                progressbar: cc.Node,
                continueProgressBar: cc.Node,
                yolk: cc.SpriteFrame,
                p1: cc.Prefab,
                cp1: {
                    default: [],
                    type: cc.SpriteFrame
                },
                cp2: {
                    default: [],
                    type: cc.SpriteFrame
                },
                cp3: {
                    default: [],
                    type: cc.SpriteFrame
                },
                cp4: {
                    default: [],
                    type: cc.SpriteFrame
                },
                scoreLabel: cc.Label,
                flyScore: cc.Label,
                flyScore1: cc.Label,
                flyScore2: cc.Label,
                clockCtrl: t("ClockCtrl"),
                flyEgg: cc.Prefab,
                popupFinish: cc.Node,
                labelFinish: cc.Node,
                babySprite: cc.SpriteFrame,
                spriteBonus: {
                    default: [],
                    type: cc.Prefab
                },
                popupPause: cc.Node,
                spriteBonusMulti: {
                    default: [],
                    type: cc.SpriteFrame
                },
                star: {
                    default: [],
                    type: cc.SpriteFrame
                },
                comboLabel: cc.Label,
                alertFlyEgg: cc.Node,
                eggComing: cc.Node,
                alertGameOver: cc.Node,
                bombSprite: cc.SpriteFrame,
                whiteBG: cc.Node,
                bolt: cc.Node,
                bombEffect: cc.Node,
                slingshoot: cc.Graphics,
                home: cc.Node,
                gamestate: {
                    default: a.HOME,
                    type: a
                },
                videoStomped: cc.Node,
                cancelBtnOppotunity: cc.Node,
                playAgainBtnOppotunity: cc.Node,
                levelLabel: cc.Label,
                videoCountLabel: cc.Label,
                textVideo: cc.Label,
                buttonGift: cc.Node,
                iconGift: cc.Sprite,
                spriteGift2x: cc.SpriteFrame,
                spriteGift3x: cc.SpriteFrame,
                spriteGift4x: cc.SpriteFrame,
                handNode: cc.Node,
                char_red: {
                    default: [],
                    type: cc.SpriteFrame
                },
                char_bomb: {
                    default: [],
                    type: cc.SpriteFrame
                },
                charRed: cc.Sprite,
                charBomb: cc.Sprite,
                rankScore: cc.Label,
                rankPhoto: cc.Sprite,
                inviteLabelPopupOppotunity: cc.Label,
                opportunityLabel: cc.Label,
                bgVideoStomped1: cc.Sprite,
                bonusPrefab: cc.Prefab,
                bonusParent: cc.Node,
                lighting: cc.Node,
                notVideo: cc.Node,
                tapToStart_btn: cc.Node,
                claimGiftPopup: cc.Node,
                dialogCtl: cc.Node,
                tutorialPanel: cc.Node,
                dialogAds: cc.Node,
                videoGift: t("ProgressBar")
            },
            onLoad: function() {
                var e = this;
                Global.i18n || (Global.i18n = t("i18n")), window.ballLayout = this, Global.bubblecolors = 4, this.videoscountStomped = 4, this.finishScoreContext = 0, this.lastContext = "", this.isFinishEndless = !1, this.isFinishStomped = !1, this.fired = !1, this.shooter = null, this.starttime = !1, s = this.getShooterPosition(), this.arrowNode.x = s.x, this.arrowNode.y = s.y, l = Global.randRange(11, 29), this.node.parent.on("touchstart", function(t) {
                    var n = {
                        x: t.getLocation().x - 360,
                        y: t.getLocation().y - 640
                    };
                    e.onTouchStart(n)
                }), this.node.parent.on("touchmove", function(t) {
                    var n = {
                        x: t.getLocation().x - 360,
                        y: t.getLocation().y - 640
                    };
                    e.onTouchMove(n)
                }), this.node.parent.on("touchend", function(t) {
                    var n = {
                        x: t.getLocation().x - 360,
                        y: t.getLocation().y - 640
                    };
                    e.onTouchEnd(n)
                }), Global.eggPool = new cc.NodePool, Global.crackPool = new cc.NodePool, Global.bonusPool = new cc.NodePool, this.listbonus = [], this.listbonustime = [], this.listBonusNode = [];
                for (var n = 0; n < 20; ++n) {
                    var i = cc.instantiate(this.ballPrefab);
                    Global.eggPool.put(i);
                    var o = cc.instantiate(this.p1);
                    Global.crackPool.put(o)
                }
            },
            start: function() {
                var t = this;
                this.finish_label = this.labelFinish.getChildByName("label").getComponent(cc.Label), this.finish_sprite = this.labelFinish.getChildByName("game-over-text"), this.videoCountLabel.string = Global.i18n.t("ONLY", {
                    time: 3
                });
                cc.loader.load("img/jv6rlAn.png", function(e, n) {
                    t.lighting.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n)
                }), "undefined" != typeof FBInstant && FBInstant.onPause(function() {
                    cc.log("Pause event was triggered!"), t.pauseGameFB()
                }), this.postSessionScoreCount = 0, this.targetScore = [15e3, 35e3, 65e3, 1e5], this.targetSpace = 5e4, this.callbackTournament = function() {
                    this.checkTournamentCreate()
                }
            },
            homeScene: function() {
                Global.scene = 1, C = 1;
                for (var t = 0; t < Global.rows; t++)
                    for (var e = 0; e < Global.columns; e++) null != c[t][e] && (Global.eggPool.put(c[t][e].bubble), c[t][e] = null);
                if (clearTimeout(this.autostart), this.buttonGift.active = !1, clearInterval(this.timegiftCD), this.popupPause.active = !1, this.popupFinish.active = !1, this.listBonusNode)
                    for (var n = 0; n < this.listBonusNode.length; n++) this.listBonusNode[n].active = !1;
                this.home.active = !0, this.gamestate = a.HOME, Global.adsCtl.showAdButton(!0), Global.adsCtl.showShortcutButton()
            },
            startGameScene: function() {
                var t = this;
                if (Global.adsCtl.showAdButton(!1), this.allow2 = !1, this.gamestate = a.PLAY, this.playTime = 0, this.loadGame(), this.addSlingShoot(), Global.scene = 2, Global.audioMng.playLauch())
                    this.home.getComponent("HomeCtl").isTutorial || (this.autostart = setTimeout(function() {
                        t.autoStart()
                    }, 2e3))
            },
            addSlingShoot: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
                this.slingshoot.clear(), this.slingshoot.lineWidth = 10, this.slingshoot.moveTo(0, 0), this.slingshoot.bezierCurveTo(80, t, 140, t, 200, 0), this.slingshoot.strokeColor = cc.Color.RED, this.slingshoot.stroke(), 100 == t ? this.handNode.runAction(cc.moveTo(.1, cc.v2(0, -640))) : this.handNode.runAction(cc.moveTo(.1, cc.v2(0, -620)))
            },
            autoStart: function() {
                this.starttime || (this.starttime = !0, this.firstFired = !0, this.playTime % 60 != 0 ? this.timeRemaining = 60 - this.playTime % 60 : this.timeRemaining = 60, this.timeCtl(), 1 == Global.modeID && this.currentScore <= 0 && this.resetSpeedEgg())
            },
            onTouchStart: function(t) {
                var e = this;
                1 != Global.scene && (this.gamestate != a.PLAY && this.gamestate != a.THUNDER || (this.addSlingShoot(125), this.isTouch = !0, this.tutorialPanel.getChildByName("hand").active = !1, this.touchstart = setTimeout(function() {
                    e.preFire(t)
                }, 300)))
            },
            onTouchMove: function(t) {
                1 != Global.scene && (this.gamestate == a.PLAY || this.gamestate == a.THUNDER ? (clearTimeout(this.touchstart), this.fired || (this.isTouch = !0, this.preFire(t))) : this.arrowNode.active = !1)
            },
            onTouchEnd: function(t) {
                if (1 != Global.scene) {
                    if (this.gamestate != a.PLAY && this.gamestate != a.THUNDER) return this.charBomb.spriteFrame = this.char_bomb[0], void(this.arrowNode.active = !1);
                    if (this.gamestate == a.THUNDER && (clearInterval(this.flashCombo), this.isTouch = !1, this.hideFlashCombo()), clearTimeout(this.touchstart), t.y > 350 || t.x < -450 || t.x > 450 || this.fired || t.y < -520) return this.arrowNode.active = !1, void(this.charBomb.spriteFrame = this.char_bomb[0]);
                    this.preFire(t), this.startFire(), this.gamestate != a.PAUSE && (this.charBomb.spriteFrame = this.char_bomb[2])
                }
            },
            preFire: function(t) {
                t.y >= s.y && ((p = Global.radToDeg(Math.atan2(t.y - s.y, t.x - s.x))) < 10 && (p = 10), p > 170 && (p = 170)), this.gamestate != a.PAUSE && (this.charBomb.spriteFrame = this.char_bomb[1]), this.arrowNode.active = !0, this.arrowNode.width = 2.5 * this.distArrow(t, s), this.arrowNode.width > 1e3 && (this.arrowNode.width = 1e3), this.arrowNode.rotation = -p
            },
            distArrow: function(t, e) {
                var n = t.x - e.x,
                    i = t.y - e.y;
                return Math.sqrt(n * n + i * i)
            },
            startFire: function() {
                this.gamestate != a.PAUSE && (this.charBomb.spriteFrame = this.char_bomb[1]), this.addSlingShoot(), this.arrowNode.active = !1, !this.shooter || this.paused || E || (this.starttime = !0, this.fired = !0, b = Math.cos(Global.degToRad(p)), m = Math.sin(Global.degToRad(p)), Global.audioMng.playRebound(), this.firstFired || (this.firstFired = !0, this.playTime % 60 != 0 ? this.timeRemaining = 60 - this.playTime % 60 : this.timeRemaining = 60, this.timeCtl(), 1 == Global.modeID && this.currentScore <= 0 && this.resetSpeedEgg(), this.home.getComponent("HomeCtl").isTutorial && (this.tutorialPanel.getChildByName("text-box").getChildByName("tap-then").active = !1, this.tutorialPanel.getChildByName("text-box").getChildByName("shoot-to-break").active = !0)))
            },
            init: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.firstFired = !1, this.babyBonus = -1, this.lastScore = 0, this.initVisited(), this.node.removeAllChildren(), this.numberLevel = 0, this.listTypeFlash = [], I = 0, i = Global.rows + 3, o = Global.columns + 2;
                for (var e = 0; e < i; e++) {
                    c[e] = [];
                    for (var n = 0; n < o; n++) c[e][n] = null
                }
                this.progressbar.active = !1, this.buttonGift.active = !1, this.whiteBG.active = !1, this.bolt.active = !1, this.timeShowGift = Global.randRange(30, 50), 1 == Global.modeID ? ("undefined" != typeof FBInstant && FBInstant.logEvent("PLAY_ENDLESS"), this.loadEndless(t)) : 2 == Global.modeID && ("undefined" != typeof FBInstant && FBInstant.logEvent("PLAY_STOMPED"), this.progressbar.active = !0, this.loadStomped(this.numberLevel, t))
            },
            loadEndless: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.allow = !0, this.allow5 = !1, this.currentScore = 0, this.updateScore(), "undefined" != typeof FBInstant && (null != FBInstant.context.getID() ? (this.lastContext != FBInstant.context.getID() && (this.lastContext = FBInstant.context.getID(), this.finishScoreContext = 0), this.fbConText(this.currentScore)) : this.loadRankInfo()), this.timeCounter = 0, this.startLose = !1, this.newRoot = 1, this.starttime = !1, this.paused = !1, this.recycleNextShoot(), this.clockCtrl.setActive(!0);
                var e = Global.columns * Global.radius * 2,
                    n = Global.PER * (Global.rows - 1) + 2 * Global.radius;
                if (this.boundRect = new Global.LBRect(-e / 2, -n / 2, e, n + 225), this.boundRectTop = this.boundRect.getTop() - 310, this.compressor.y = this.boundRect.getTop() + 20, u = this.boundRectTop, E = !1, y = 0, this.gridReset(), this.currentMaxRows = 17, this.currentTarget = 0, t) {
                    this.videoscountEndless = 2, "undefined" != typeof FBInstant && FBInstant.player.setDataAsync({
                        videoscountEndless: this.videoscountEndless
                    }).then(function() {}).catch(function(t) {}), r = 10, Global.bubblecolors = 4, C = 1, this.playTime = 0, this.listbonus = [], this.listbonustime = [];
                    for (var i = 0; i < this.listBonusNode.length; i++) this.listBonusNode[i].active = !1;
                    if (this.home.getComponent("HomeCtl").isTutorial) this.setUpTutorial();
                    else
                        for (var o = 0; o < 7; o++)
                            for (var s = 0; s < Global.columns - o % 2; s++) c[o][s] = this.getOneBubbleAtPos(Global.indexToPosition(this.boundRect, Global.index(o, s)), Global.randRange(0, 2));
                    this.loadShooterBubble()
                }
            },
            setUpTutorial: function() {
                var t = this;
                this.scheduleOnce(function() {
                    cc.log("setUpTutorial"), t.tutorialPanel.active = !0, t.tutorialPanel.getChildByName("text-box").active = !0
                }, 1);
                for (var e = 0; e < 7; e++)
                    for (var n = 0; n < Global.columns - e % 2; n++) c[e][n] = 5 == e || 6 == e ? 6 == e && 4 == n ? this.getOneBubbleAtPos(Global.indexToPosition(this.boundRect, Global.index(e, n)), 1) : this.getOneBubbleAtPos(Global.indexToPosition(this.boundRect, Global.index(e, n)), this.getRandomValueFromArray([0, 2])) : this.getOneBubbleAtPos(Global.indexToPosition(this.boundRect, Global.index(e, n)), Global.randRange(0, 2))
            },
            getRandomValueFromArray: function(t) {
                return t[Math.floor(Math.random() * t.length)]
            },
            fbConText: function(t) {
                var e = this;
                this.finishScoreContext < t && (this.finishScoreContext = t), L.setFBContext(t).then(function(t) {
                    return e.finishScoreContext = t.getScore(), L.getFBContext()
                }).then(function(t) {
                    e.getContextLB(t)
                }).catch(function(t) {})
            },
            getContextLB: function(t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e].isSelf) return cc.log(e), void(0 == e ? this.loadNextInfo(t[0]) : this.loadNextInfo(t[e - 1]));
                this.loadNextInfo(t[t.length - 1])
            },
            loadPlayerArray: function(t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e].isSelf) return void(0 == e ? this.loadNextInfo(t[0]) : this.loadNextInfo(t[e - 1]));
                this.loadNextInfo(t[t.length - 1])
            },
            loadNextInfo: function(t) {
                L.getPlayerPhotoAsync(t).then(function() {
                    null != t.photoTexture && (this.rankPhoto.spriteFrame = new cc.SpriteFrame, this.rankPhoto.spriteFrame.setTexture(t.photoTexture))
                }.bind(this)).catch(function(t) {}), this.rankScore.string = t.score
            },
            updateContextScore: function() {
                FBInstant.updateAsync({
                    action: "LEADERBOARD",
                    name: "EndlessContext." + FBInstant.context.getID(),
                    text: "Game so cute! Play with me?"
                }).then(function() {
                    return cc.log("Update Posted")
                }).catch(function(t) {
                    return console.error(t)
                })
            },
            getContextScore: function() {
                "undefined" != typeof FBInstant && FBInstant.context.getID()
            },
            loadRankInfo: function() {
                if ("undefined" != typeof FBInstant) {
                    var t = L.getLeaderboardLocal("Endless");
                    t && t.length > 0 ? this.loadPlayerArray(t) : (L.initPlayerInfo(Global.bestEndless), this.loadNextInfo(window.playerInfo))
                }
            },
            loadStomped: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.currentScore = this.lastScore, this.updateScore(), this.clockCtrl.setActive(!1), this.allow5 = !1, this.lastSpeedEgg = 10, E = !1, r = 10, this.starttime = !1, this.paused = !1, this.startLose = !1, this.recycleNextShoot(), this.newRoot = 0, this.height = 0;
                var i = Global.columns * Global.radius * 2,
                    o = Global.PER * (Global.rows - 1) + 2 * Global.radius;
                if (this.boundRect = new Global.LBRect(-i / 2, -o / 2, i, o + 300), this.boundRectTop = this.boundRect.getTop() - 550, this.compressor.y = this.boundRect.getTop() + 20, y = 0, this.timeBeforeNewRoot = this.loadTimeBeforeNewRoot(), this.gridReset(), e) {
                    if (n || (this.videoscountStomped = 4, this.videoCountLabel.string = Global.i18n.t("ONLY", {
                            time: 3
                        })), 0 == t) {
                        this.listbonus = [], this.listbonustime = [];
                        for (var s = 0; s < this.listBonusNode.length; s++) this.listBonusNode[s].active = !1;
                        C = 1
                    }
                    this.loadLevel(t)
                }
            },
            update: function(t) {
                if (1 != Global.scene) {
                    if (this.boundRect && this.boundRect.getTop() >= this.boundRectTop && !this.paused && !E && !this.startLose && (this.boundRect.height -= r, this.Recall(), this.compressor.y = this.boundRect.getTop() + 20), this.boundRect && this.boundRect.getTop() < this.boundRectTop && !this.paused && !E && this.allow2 && (this.boundRect.height += r, this.Recall(), this.compressor.y = this.boundRect.getTop() + 20), this.fired && this.shooter) {
                        var e = this.shooter.bubble.x,
                            n = this.shooter.bubble.y,
                            i = this.isFinalParkingIndex(e, n, b, m);
                        b = i.dx, m = i.dy, e = i.x, n = i.y, i.final ? this.parkBubble({
                            x: e,
                            y: n
                        }) : (this.shooter.bubble.x = e, this.shooter.bubble.y = n)
                    }
                    if (this.tutorialPanel.active && this.home.getComponent("HomeCtl").isTutorial && (this.isTouch || this.preFire(this.tutorialPanel.getChildByName("hand").getPosition())), 1 == Global.modeID) {
                        if (this.paused || E || this.allow5 || this.loseEndless(), E || this.checkMaxRow() || (this.startLose = !1), this.starttime && this.allow && (this.allow2 = !1, this.allow = !1, this.boundRectTop -= 2 * Global.PER), !this.allow && this.boundRect && this.boundRect.getTop() <= this.boundRectTop && (this.allow1 = !0, this.boundRectTop = u, this.boundRect.setTop(u)), this.allow1) {
                            for (var o = this.MaxRow(); o >= 0; o--)
                                for (var s = 0; s < Global.columns; s++) c[o + 2][s] = c[o][s];
                            for (var a = 1; a >= 0; a--)
                                for (var l = 0; l < Global.columns - a % 2; l++) {
                                    var h = Global.randRange(0, Global.bubblecolors - 1);
                                    this.playTime < 100 && 3 == h && (h = Global.randRange(0, 2)), c[a][l] = this.getOneBubbleAtPos(Global.indexToPosition(this.boundRect, Global.index(a, l)), h)
                                }
                            this.allow = !0, this.allow1 = !1
                        }
                    } else this.allow3 && this.boundRect.getTop() >= this.boundRectTop && (r = this.lastSpeedEgg, this.boundRectTop = u, this.allow3 = !1, Global.modeID = 1, this.allow2 = !1, this.allow = !0);
                    2 == Global.modeID ? this.paused || E || this.allow5 || !this.firstFired || this.winOrLoseStomped() : 0 == Global.modeID && this.allow4 && this.boundRect.getTop() >= this.boundRectTop && (this.allow4 = !1, Global.modeID = 2)
                }
            },
            isFinalParkingIndex: function(t, e, n, i) {
                var o = !1,
                    s = t,
                    a = e;
                if (e += 50 * i, (t += 50 * n) < this.boundRect.left + Global.radius && (t = this.boundRect.left + Global.radius, n *= -1), t > this.boundRect.getRight() - Global.radius && (t = this.boundRect.getRight() - Global.radius, n *= -1), e > this.boundRect.getTop() - Global.radius && (e = this.boundRect.getTop() - Global.radius, o = !0), !o && this.isCollidingOthers({
                        x: t,
                        y: e
                    }) && (o = !0), o) {
                    var l = Global.positionToIndex(this.boundRect, {
                        x: t,
                        y: e
                    });
                    if (l.row + y == Global.rows) return new F(o, t, e, n, i);
                    if (null != c[l.row][l.col]) {
                        for (;
                            (!Global.isEqual(t, s) || !Global.isEqual(e, a)) && (t -= 2 * n, e -= 2 * i, this.isCollidingOthers({
                                x: t,
                                y: e
                            })););
                        l = Global.positionToIndex(this.boundRect, {
                            x: t,
                            y: e
                        });
                        var r = Global.indexToPosition(this.boundRect, l);
                        t = r.x, e = r.y
                    }
                }
                return new F(o, t, e, n, i)
            },
            isCollidingOthers: function(t) {
                for (var e = Global.rows - 1; e >= 0; e--)
                    for (var n = 0; n < Global.columns; n++)
                        if (null != c[e][n] && this.isCloseEnough(t, {
                                x: c[e][n].bubble.x,
                                y: c[e][n].bubble.y
                            })) return !0
            },
            isCloseEnough: function(t, e) {
                var n = t.x - e.x,
                    i = t.y - e.y;
                return n * n + i * i <= 2 * Global.radius * .82 * (2 * Global.radius * .82)
            },
            parkBubble: function(t) {
                var e = this,
                    n = Global.positionToIndex(this.boundRect, t),
                    i = Global.indexToPosition(this.boundRect, n);
                if (n.row == this.currentMaxRows) {
                    this.shooter.bubble.addComponent("FallEgg");
                    var o = this.shooter.bubble.getComponent("FallEgg");
                    return o.gravity = 2500, o.lowerLimit = this.boundRect.bottom, void this.loadShooterBubble()
                }
                if (null == c[n.row][n.col]) {
                    if (this.shooter.bubble.x = i.x, this.shooter.bubble.y = i.y, c[n.row][n.col] = this.shooter, this.onChain(n), this.onUnlink(n), v > 2) {
                        this.home.getComponent("HomeCtl").isTutorial && (cc.log("done tutorial"), this.tutorialPanel.active = !1, this.home.getComponent("HomeCtl").isTutorial = !1);
                        var s = 10 * v * C;
                        v = 0, this.numberLevel >= 30 && 2 == Global.modeID && (s *= 2), this.currentScore += s, this.flyScore.string = "+" + s, this.flyScore.node.x = i.x, this.flyScore.node.y = i.y, this.flyScore.node.active = !0, this.flyScore.node.runAction(cc.moveBy(1, 0, 66)), Global.adsCtl.showScore(s, i, this.boundRect.bottom), this.scheduleOnce(function() {
                            e.flyScore.node.active = !1
                        }, 1), this.updateScore()
                    }
                    2 == Global.modeID && (this.newRoot++, this.newRoot > this.timeBeforeNewRoot && (this.newRoot = 0, Global.audioMng.playNewRoot(), y++, this.boundRectTop = this.boundRect.getTop() - Global.PER), this.height < 1 / this.timeBeforeNewRoot * this.newRoot && (this.height = 1 / this.timeBeforeNewRoot * this.newRoot, this.progressbar.getComponent("ProgressBar").updateDisplay(this.height)), 0 == this.newRoot && this.height >= 0 && (this.height = 0, this.progressbar.getComponent("ProgressBar").updateDisplay(this.height))), this.loadShooterBubble()
                }
            },
            speedCtrl: function() {},
            Recall: function() {
                for (var t = -1, e = 0; e < i; e++)
                    for (var n = 0; n < o; n++)
                        if (null != c[e][n]) {
                            e > t && (t = e);
                            var s = c[e][n].bubble.y;
                            c[e][n].bubble.y += Global.indexToPosY(this.boundRect, Global.index(e, n)) - s
                        } if (1 == Global.modeID && t > 0 && this.boundRect.getTop() >= this.boundRectTop && this.starttime) {
                    var a = this.boundRect.height - Global.radius - Global.PER * t + this.boundRect.bottom;
                    r = this.home.getComponent("HomeCtl").isTutorial ? 0 : a > 275 - h * Global.PER ? 1.5 * this.lastSpeedEgg : a > -241 ? this.lastSpeedEgg : .18
                }
            },
            MaxRow: function() {
                for (var t = -1, e = 0; e < i; e++)
                    for (var n = 0; n < o; n++) null != c[e][n] && e > t && (t = e);
                return t
            },
            loadShooterBubble: function() {
                var t = this;
                if (this.fired = !1, this.shooter = null, this.countFunc() >= 0) {
                    this.charRed.spriteFrame = this.char_red[0], null == f && (f = this.home.getComponent("HomeCtl").isTutorial ? this.getOneBubbleAtPos(this.getNextPosition(), 1) : this.getOneBubbleAtPos(this.getNextPosition()));
                    var e = cc.moveTo(.2, cc.v2(0, -540)),
                        n = cc.callFunc(function() {
                            (t.shooter = f, t.arrowNode.color = t.getColor(t.shooter.type), f = t.home.getComponent("HomeCtl").isTutorial ? t.getOneBubbleAtPos(t.getNextPosition(), 1) : t.getOneBubbleAtPos(t.getNextPosition()), t.babyBonus >= 0) && (t.babyBonus >= 0 && t.babyBonus < 8 ? t.isBreakShakeEgg ? t.isBreakShakeEgg = !1 : (cc.instantiate(t.spriteBonus[t.babyBonus]).parent = f.bubble, t.babyBonus += 8) : t.babyBonus = -1);
                            10 == I && (t.shooter.bubble.getComponent(cc.Sprite).spriteFrame = t.bombSprite, t.arrowNode.color = cc.Color.RED, t.shooter.bubble.width = 128, t.shooter.bubble.height = 125), setTimeout(function() {
                                t.charRed.spriteFrame = t.char_red[1], t.charBomb.spriteFrame = t.char_bomb[0]
                            }, 500)
                        }, this),
                        i = cc.sequence(e, n);
                    f.bubble.runAction(i)
                }
            },
            getOneBubbleAtPos: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                    n = null;
                return Global.eggPool.size() > 0 ? ((n = Global.eggPool.get()).active = !0, n.stopAllActions(), n.removeAllChildren(), n.setScale(1), n.width = 66, n.height = 73.3) : n = cc.instantiate(this.ballPrefab), -1 == e && (e = this.listTypeFlash.length > 0 && Math.random() < .6 ? this.listTypeFlash[Global.randRange(0, this.listTypeFlash.length - 1)] : this.getRandomColorFromList()), n.getComponent(cc.Sprite).spriteFrame = this.spriteBall[e], n.parent = this.node, n.x = t.x, n.y = t.y, new B(n, e)
            },
            getRandomColorFromList: function() {
                var t = this.getAllUniqueTypes();
                if (t.length > 0) {
                    if (1 == t.length) return t[0];
                    for (;;) {
                        var e = Global.randRange(0, t.length - 1);
                        if (t[e] != d || t[e] != g) return d = g, g = t[e], t[e]
                    }
                }
                return Global.randRange(0, 2)
            },
            getAllUniqueTypes: function() {
                for (var t = [], e = 0; e < Global.rows; e++)
                    for (var n = 0; n < Global.columns; n++)
                        if (null != c[e][n]) {
                            var i = c[e][n].type;
                            16 == i || t.includes(i) || t.push(i)
                        } return t
            },
            countFunc: function() {
                for (var t = 0, e = 0; e < i; e++)
                    for (var n = 0; n < o; n++) null != c[e][n] && 16 != c[e][n].type && t++;
                return t
            },
            getShooterPosition: function() {
                return {
                    x: 0,
                    y: -(Global.PER * (Global.rows - 1) + 2 * Global.radius) / 2 - Global.radius + 66
                }
            },
            getNextPosition: function() {
                var t = this.getShooterPosition();
                return t.x -= 4 * Global.radius, t
            },
            onChain: function(t) {
                if (10 == I) return this.onBomb(t), this.raiseUpEgg(), void(I = 0);
                var e = this.getChain(t);
                e.length > 2 ? (9 == ++I && (I++, this.showFlashCombo()), this.showComboLabel(), v = e.length, Global.audioMng.playDestroyGroup(), this.removeBubbles(e, 0)) : (I = 0, Global.audioMng.playStick())
            },
            onBomb: function(t) {
                var e = this;
                this.bombEffect.active = !0;
                var n = Global.indexToPosition(this.boundRect, t);
                this.bombEffect.x = n.x, this.bombEffect.y = n.y, this.bombEffect.getComponent(cc.Animation).play("bomb"), this.scheduleOnce(function() {
                    e.bombEffect.active = !1
                }, .5);
                var i = [];
                this.clearVisitedList(), S[t.row][t.col] = !0, i.push(t);
                for (var o = Global.getNeighbours2(t), s = 0; s < o.length; s++) Global.isIndexValid(o[s]) && !S[o[s].row][o[s].col] && null != c[o[s].row][o[s].col] && (i.push(o[s]), S[o[s].row][o[s].col] = !0);
                v = i.length, this.removeBubbles(i, 0), Global.audioMng.playDestroyGroup()
            },
            showFlashCombo: function() {
                var t = this;
                this.gamestate = a.THUNDER;
                var e = this.shooter.type;
                Global.audioMng.playThunder(), this.flashCombo = setInterval(function() {
                    setTimeout(function() {
                        t.gamestate == a.THUNDER && (t.whiteBG.active = !0, t.bolt.active = !1, t.shooter.bubble.getComponent(cc.Sprite).spriteFrame = t.bombSprite, t.shooter.bubble.width = 128, t.shooter.bubble.height = 125, setTimeout(function() {
                            t.gamestate == a.THUNDER && (t.whiteBG.active = !1, t.bolt.active = !0, t.shooter.bubble.getComponent(cc.Sprite).spriteFrame = t.spriteBall[e], t.shooter.bubble.width = 66, t.shooter.bubble.height = 73.3)
                        }, 250))
                    }, 1)
                }, 500);
                var n = cc.callFunc(function() {
                        clearInterval(t.flashCombo)
                    }, this),
                    i = cc.callFunc(function() {
                        t.hideFlashCombo()
                    }, this);
                this.node.runAction(cc.sequence(cc.delayTime(2), n, cc.delayTime(.5), i))
            },
            hideFlashCombo: function() {
                this.gamestate != a.PLAY && (this.gamestate = a.PLAY, this.whiteBG.active = !1, this.bolt.active = !1, this.shooter.bubble.getComponent(cc.Sprite).spriteFrame = this.bombSprite, this.shooter.bubble.width = 128, this.shooter.bubble.height = 125)
            },
            showComboLabel: function() {
                var t = this;
                if (!(I < 3)) {
                    switch (this.comboLabel.node.parent.active = !0, I < 9 ? Global.audioMng.playCombo(I) : Global.audioMng.playCombo(9), I) {
                        case 3:
                            this.comboLabel.string = "COMBO!";
                            break;
                        case 4:
                            this.comboLabel.string = "SUPER\nCOMBO!";
                            break;
                        case 5:
                            this.comboLabel.string = "CAMBRIAN\nCOMBO!";
                            break;
                        case 6:
                            this.comboLabel.string = "TRIASSIC\nCOMBO!";
                            break;
                        case 7:
                            this.comboLabel.string = "JURASSIC\nCOMBO!";
                            break;
                        case 8:
                            this.comboLabel.string = "CRETACEOUS\nCOMBO!"
                    }
                    I > 9 && (this.comboLabel.string = "DYNOMITE\nCOMBO!"), this.scheduleOnce(function() {
                        t.comboLabel.node.parent.active = !1
                    }, 1)
                }
            },
            getChain: function(t) {
                var e = this.shooter.type,
                    n = [],
                    i = [];
                for (this.clearVisitedList(), i.push(t), S[t.row][t.col] = !0; 0 != i.length;) {
                    var o = i.shift();
                    n.push(o);
                    for (var s = Global.getNeighbours(o), a = 0; a < s.length; a++) this.inNewChain(s[a], e) && (i.push(s[a]), S[s[a].row][s[a].col] = !0)
                }
                return n
            },
            clearVisitedList: function() {
                for (var t = 0; t < Global.rows; t++)
                    for (var e = 0; e < Global.columns; e++) S[t][e] = !1
            },
            initVisited: function() {
                for (var t = 0; t < Global.rows + 4; t++) {
                    S[t] = [];
                    for (var e = 0; e < Global.columns + 2; e++) S[t].push(!1)
                }
            },
            inNewChain: function(t, e) {
                return !(!Global.isIndexValid(t) || S[t.row][t.col] || null == c[t.row][t.col] || -1 == e || c[t.row][t.col].type != e)
            },
            onUnlink: function() {
                var t = this.getUnlinked();
                t.length > 1 && (v *= t.length), this.removeBubbles(t, 1)
            },
            getUnlinked: function() {
                var t = [];
                this.clearVisitedList();
                for (var e = 0; e < Global.columns; e++) null != c[0][e] && (t.push(Global.index(0, e)), S[0][e] = !0);
                for (; 0 != t.length;)
                    for (var n = t.shift(), i = Global.getNeighbours(n), o = 0; o < i.length; o++) Global.isIndexValid(i[o]) && !S[i[o].row][i[o].col] && null != c[i[o].row][i[o].col] && (t.push(i[o]), S[i[o].row][i[o].col] = !0);
                for (var s = [], a = 0; a < Global.rows; a++)
                    for (var l = 0; l < Global.columns; l++) null == c[a][l] || S[a][l] || s.push(Global.index(a, l));
                return s
            },
            removeBubbles: function(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var i = c[t[n].row][t[n].col].bubble;
                    i.addComponent("FallEgg");
                    var o = i.getComponent("FallEgg");
                    if (o.gravity = 2500, o.lowerLimit = this.boundRect.bottom, 1 == e) o.initialVelocity = 0;
                    else {
                        if (i.childrenCount > 0)
                            if ("bonus5" == i.children[0].name) this.bonusMultiEggs(5, i);
                            else if ("bonus10" == i.children[0].name) this.bonusMultiEggs(10, i);
                        else if ("bonus15" == i.children[0].name) this.bonusMultiEggs(20, i);
                        else if ("bonus2X" == i.children[0].name) {
                            C *= 2, this.listbonus.push(2), this.listbonustime.push(30);
                            var s = null;
                            if (Global.bonusPool.size() > 0) s = Global.bonusPool.get();
                            else {
                                s = cc.instantiate(this.bonusPrefab);
                                var a = A.slice(G, 8).concat(A.slice(0, G + 1));
                                s.getComponent("SpinBonus").startSpin(a), ++G > 7 && (G = 0)
                            }
                            s.getComponent(cc.Sprite).spriteFrame = this.spriteBonusMulti[0], s.parent = this.bonusParent, s.active = !0, s.opacity = 255, this.listBonusNode.push(s)
                        } else if ("bonus3X" == i.children[0].name) {
                            C *= 3, this.listbonus.push(3), this.listbonustime.push(30);
                            s = null;
                            if (Global.bonusPool.size() > 0) s = Global.bonusPool.get();
                            else {
                                s = cc.instantiate(this.bonusPrefab);
                                a = A.slice(G, 8).concat(A.slice(0, G + 1));
                                s.getComponent("SpinBonus").startSpin(a), ++G > 7 && (G = 0)
                            }
                            s.getComponent(cc.Sprite).spriteFrame = this.spriteBonusMulti[1], s.parent = this.bonusParent, s.active = !0, s.opacity = 255, this.listBonusNode.push(s)
                        } else if ("bonus4X" == i.children[0].name) {
                            C *= 4, this.listbonus.push(4), this.listbonustime.push(30);
                            s = null;
                            if (Global.bonusPool.size() > 0) s = Global.bonusPool.get();
                            else {
                                s = cc.instantiate(this.bonusPrefab);
                                a = A.slice(G, 8).concat(A.slice(0, G + 1));
                                s.getComponent("SpinBonus").startSpin(a), ++G > 7 && (G = 0)
                            }
                            s.getComponent(cc.Sprite).spriteFrame = this.spriteBonusMulti[2], s.parent = this.bonusParent, s.active = !0, s.opacity = 255, this.listBonusNode.push(s)
                        } else "bonusRaise" == i.children[0].name && this.raiseUpEgg();
                        i.getComponent(cc.Sprite).spriteFrame = this.yolk, this.checkShakeEgg(i), this.spawnParticle(i, c[t[n].row][t[n].col].type), 0 == n ? o.initialAngle = 15 : n == t.length - 1 ? o.initialAngle = 165 : o.initialAngle = Global.randRange(15, 165), o.initialVelocity = Global.randRange(15, 175)
                    }
                    c[t[n].row][t[n].col] = null
                }
            },
            raiseUpEgg: function() {
                1 == Global.modeID ? (Global.modeID = 0, this.allow2 = !0, this.allow3 = !0, r = 10, this.boundRectTop = this.boundRect.getTop() + 2 * Global.PER) : 2 == Global.modeID && (this.allow2 = !0, Global.modeID = 0, this.allow4 = !0, this.boundRectTop = Global.PER * y + this.boundRect.getTop(), y = 0)
            },
            recycleNextShoot: function() {
                null != f && (Global.eggPool.put(f.bubble), f = null), null != this.shooter && (Global.eggPool.put(this.shooter.bubble), this.shooter = null)
            },
            gridReset: function() {
                for (var t = 0; t < Global.rows; t++)
                    for (var e = 0; e < Global.columns; e++) null != c[t][e] && (Global.eggPool.put(c[t][e].bubble), c[t][e] = null)
            },
            checkMaxRow: function() {
                var t = this.MaxRow();
                if (t < 0) return !1;
                for (var e = 0; e < Global.columns; e++)
                    if (null != c[t][e] && c[t][e].bubble.y < -355) return !0;
                return !1
            },
            loadLevel: function(t) {
                for (var e = Global.leveldata[t % 30].split(";"), n = 0; n < Global.rows && n < e.length; n++)
                    for (var i = e[n], o = 0; o < Global.columns && o < i.length; o++) "-" != i[o] && (c[n][o] = this.getOneBubbleAtPos(Global.indexToPosition(this.boundRect, Global.index(n, o)), Global.charToType(i[o])));
                E = !1, this.loadShooterBubble()
            },
            loadTimeBeforeNewRoot: function() {
                switch (this.numberLevel) {
                    case 3:
                        return 13;
                    case 5:
                    case 13:
                    case 20:
                        return 15;
                    case 6:
                        return 18;
                    case 7:
                    case 17:
                    case 19:
                        return 11;
                    case 8:
                    case 12:
                        return 14;
                    case 9:
                        return 6;
                    case 16:
                    case 28:
                        return 9;
                    case 22:
                        return 7;
                    case 24:
                        return 5;
                    case 25:
                    case 27:
                        return 19;
                    case 26:
                        return 3;
                    case 29:
                        return 34;
                    case 33:
                        return 11;
                    case 35:
                    case 43:
                    case 50:
                        return 13;
                    case 36:
                        return 16;
                    case 37:
                    case 47:
                    case 49:
                        return 9;
                    case 38:
                    case 42:
                        return 12;
                    case 39:
                        return 5;
                    case 46:
                    case 58:
                        return 7;
                    case 52:
                        return 5;
                    case 54:
                        return 4;
                    case 55:
                    case 57:
                        return 17;
                    case 56:
                        return 3;
                    case 59:
                        return 32;
                    default:
                        return 8
                }
            },
            loseEndless: function() {
                this.checkMaxRow() && (Global.audioMng.playAooga(), this.startLose = !0, this.allow5 = !0, this.flashAlertGameOver(), this.flashegg = function() {
                    this.flashEggs()
                }, this.schedule(this.flashegg, .5), this.countEndless = 0, this.callback = function() {
                    if (this.checkMaxRow()) {
                        if (4 === this.countEndless) {
                            if (this.checkMaxRow()) {  
                                var t = 1e4;
                                //t = "undefined" != typeof FBInstant && null != FBInstant.context.getID() ? Math.max(1e4, this.finishScoreContext / 2) : Math.max(1e4, Global.bestEndless / 4), this.currentScore > t ? this.finishEndlessWithVideo() : this.finishEndless()
								Math.max(1e4, this.finishScoreContext / 2), this.currentScore > t ? this.finishEndlessWithVideo() : this.finishEndless()
                            }
                            this.unschedule(this.callback)
                        }
                    } else this.countEndless = 0, this.unschedule(this.callback);
                    this.countEndless++
                }, this.schedule(this.callback, 1))
            },
            unscheduleContextScore: function() {},
            showVideoGift: function() {
                this.videoGift.showVideoGift(), clearInterval(this.timegiftCD), this.bgVideoStomped1.node.runAction(cc.scaleTo(.5, 1))
            },
            splashScaleout: function() {
                this.bgVideoStomped1.node.runAction(T)
            },
            cancelVideoGift: function() {
                this.videoGift.cancelVideoGift(), this.paused = !1, this.gamestate = a.PLAY, this.timeCtl(), this.timeGiftCountdown()
            },
            finishEndlessWithVideo: function() {
                var t = this;
                this.videoscountEndless--, FBInstant.player.setDataAsync({
                    videoscountEndless: this.videoscountEndless
                }).then(function() {}).catch(function(t) {}), this.videoscountEndless <= 0 ? this.finishEndless() : Global.adsCtl.checkSupportedAPIs() ? (this.cancelBtnOppotunity.getComponent(cc.Button).interactable = !1, this.playAgainBtnOppotunity.getComponent(cc.Button).interactable = !1, this.isFinishEndless = !0, this.inviteLabelPopupOppotunity.string = Global.i18n.t("INVITEPOPUP2"), this.opportunityLabel.string = Global.i18n.t("OPPORTUNITY"), this.bgVideoStomped1.node.runAction(cc.scaleTo(2, 1)), this.paused = !0, this.gamestate = a.PAUSE, this.textVideo.getComponent(cc.Label).string = Global.i18n.t("RETRY"), this.continueProgressBar.getComponent(cc.Sprite).fillRange = 1, this.scheduleOnce(function() {
                    t.countdownVideoEndless(), t.cancelBtnOppotunity.getComponent(cc.Button).interactable = !0, t.playAgainBtnOppotunity.getComponent(cc.Button).interactable = !0, FBInstant.logEvent("SHOW_POPUP_INVITE_ENDLESS", 1, {
                        STATE: "SHOW_POPUP"
                    }), t.videoStomped.active = !0
                }, 2)) : (this.bgVideoStomped1.node.runAction(T), this.videoStomped.active = !1, this.finishEndless())
            },
            countdownVideoEndless: function() {
                var t = this;
                this.cdvideotime = 5, this.cdVideoEndless = setInterval(function() {
                    t.cdvideotime -= .01, t.continueProgressBar.getComponent(cc.Sprite).fillRange = t.cdvideotime / 5, t.cdvideotime <= 0 && (FBInstant.logEvent("SHOW_POPUP_INVITE_ENDLESS", 1, {
                        STATE: "TIMEOUT"
                    }), clearInterval(t.cdVideoEndless), t.cancelVideoEndless())
                }, 10)
            },
            cancelVideoEndless: function() {
                FBInstant.logEvent("SHOW_POPUP_INVITE_ENDLESS", 1, {
                    STATE: "CONTINUE_FAIL"
                }), this.isFinishEndless = !1, this.bgVideoStomped1.node.runAction(T), this.videoStomped.active = !1, Global.adsCtl.showAdButton(!1), this.clearCountDownVideoEndless(), this.finishEndless()
            },
            playContinueVideoEndless: function() {
                FBInstant.logEvent("SHOW_POPUP_INVITE_ENDLESS", 1, {
                    STATE: "CONTINUE_SUCCESS"
                }), this.bgVideoStomped1.node.runAction(T), this.videoStomped.active = !1, this.finish_sprite.active = !1, this.paused = !1, this.gamestate = a.PLAY, this.timeCtl(), this.raiseUpEggContinueVideoEndless()
            },
            raiseUpEggContinueVideoEndless: function() {
                Global.modeID = 0, this.allow2 = !0, this.allow3 = !0, r = 10, this.boundRectTop = this.boundRect.getTop() + 4 * Global.PER, this.currentMaxRows = 20
            },
            cancelVideo: function() {
                1 == Global.modeID ? (FBInstant.logEvent("SHOW_POPUP_INVITE_ENDLESS", 1, {
                    STATE: "CLOSE_BUTTON"
                }), this.cancelVideoEndless()) : this.cancelVideoStomped()
            },
            winOrLoseStomped: function() {
                if (0 == this.countFunc()) return this.paused = !0, this.allow5 = !0, void this.winStomped();
                this.checkMaxRow() && (Global.audioMng.playAooga(), this.allow5 = !0, this.flashAlertGameOver(), this.flashegg = function() {
                    this.flashEggs()
                }, this.schedule(this.flashegg, .5), this.countEndless = 0, this.callback = function() {
                    this.checkMaxRow() ? 4 === this.countEndless && (this.checkMaxRow() && this.finishEndless(), this.unschedule(this.callback)) : (this.countEndless = 0, this.unschedule(this.callback)), this.countEndless++
                }, this.schedule(this.callback, 1))
            },
            winStomped: function() {
                this.unschedule(this.callback), this.videoscountStomped = 4, this.videoCountLabel.string = Global.i18n.t("ONLY", {
                    time: 3
                }), "undefined" != typeof FBInstant && FBInstant.logEvent("WIN_STOMPED_LEVEL_" + Math.floor(this.numberLevel / 10), 1, {
                    custom_property: "level_" + this.numberLevel
                }), this.numberLevel >= 30 && 2 == Global.modeID ? (this.currentScore += 2e3, this.finish_label.string = "+2000") : (this.currentScore += 1e3, this.finish_label.string = "+1000"), this.updateScore(), this.lastScore = this.currentScore, this.firstFired = !1, this.paused = !0, this.boundRectTop = 400, this.newRoot = 0, this.numberLevel++, this.progressbar.getComponent("ProgressBar").updateDisplay(0), this.finish_label.node.active = !0, this.scheduleOnce(function() {
                    this.numberLevel > 1 && Global.adsCtl.showInterstitial(), this.finish_label.node.active = !1, this.loadStomped(this.numberLevel)
                }, 2)
            },
            spawnParticle: function(t, e) {
                this.spawnP1(t, e), this.spawnP2(t, e), this.spawnP3(t, e)
            },
            checkShakeEgg: function(t) {
                var e = this;
                if (t == this.shakeegg) {
                    this.shakeegg = null, t.getComponent("FallEgg").gravity = 1e3, t.getComponent(cc.Sprite).spriteFrame = this.babySprite, this.babyBonus = this.spawnBonus();
                    var n = cc.instantiate(this.spriteBonus[this.babyBonus]);
                    n && (this.babyBonus > 3 && (n.getComponent(cc.Sprite).spriteFrame = this.spriteBonusMulti[this.babyBonus - 4]), n.parent = t, n.y = -30);
                    var i = 250 * C;
                    this.numberLevel >= 30 && 2 == Global.modeID && (i *= 2), this.currentScore += i, this.flyScore1.string = "+" + i, this.flyScore1.node.x = t.x, this.flyScore1.node.y = t.y + Global.radius, this.flyScore1.node.active = !0, this.flyScore1.node.runAction(cc.moveBy(1, 0, 66)), this.scheduleOnce(function() {
                        e.flyScore1.node.active = !1
                    }, 1), this.isBreakShakeEgg = !0, this.updateScore()
                }
            },
            bonusMultiEggs: function(t, e) {
                var n = this,
                    i = t * C * 10;
                this.numberLevel >= 30 && 2 == Global.modeID && (i *= 2), this.currentScore += i, this.flyScore2.string = "+" + i, this.flyScore2.node.x = e.x, this.flyScore2.node.y = e.y + Global.radius, this.flyScore2.node.active = !0, this.flyScore2.node.runAction(cc.moveBy(1, 0, 66)), this.scheduleOnce(function() {
                    n.flyScore2.node.active = !1
                }, 1), this.updateScore()
            },
            spawnBonus: function() {
                return this.MaxRow() > 11 && Global.randRange(0, 100) < 50 ? 0 : (this.babyBonus = Global.randRange(0, 100), this.babyBonus < 30 ? 1 : this.babyBonus < 50 ? 2 : this.babyBonus < 65 ? 3 : this.babyBonus < 80 ? 4 : this.babyBonus < 90 ? 5 : this.babyBonus < 95 ? 6 : 0)
            },
            spawnP1: function(t, e) {
                var n = null;
                (n = Global.crackPool.size() > 0 ? Global.crackPool.get() : cc.instantiate(this.p1)).getComponent(cc.Sprite).spriteFrame = 1 == C ? this.cp1[e] : this.star[0], n.parent = this.node, n.x = t.x, n.y = t.y, n.addComponent("FallCrack"), n.getComponent("FallCrack").setInfo(this.boundRect.bottom, Global.randRange(150, 175), 300)
            },
            spawnP2: function(t, e) {
                var n = null;
                (n = Global.crackPool.size() > 0 ? Global.crackPool.get() : cc.instantiate(this.p1)).getComponent(cc.Sprite).spriteFrame = 1 == C ? this.cp2[e] : this.star[1], n.parent = this.node, n.x = t.x, n.y = t.y, n.addComponent("FallCrack"), n.getComponent("FallCrack").setInfo(this.boundRect.bottom, Global.randRange(10, 45), 300)
            },
            spawnP3: function(t, e) {
                var n = null;
                (n = Global.crackPool.size() > 0 ? Global.crackPool.get() : cc.instantiate(this.p1)).getComponent(cc.Sprite).spriteFrame = 1 == C ? this.cp3[e] : this.star[2], n.parent = this.node, n.x = t.x, n.y = t.y, n.addComponent("FallCrack"), n.getComponent("FallCrack").setInfo(this.boundRect.bottom, Global.randRange(50, 85), 150)
            },
            spawnP4: function(t, e) {
                var n = null;
                (n = Global.crackPool.size() > 0 ? Global.crackPool.get() : cc.instantiate(this.p1)).getComponent(cc.Sprite).spriteFrame = 1 == C ? this.cp4[e] : this.star[3], n.parent = this.node, n.x = t.x, n.y = t.y, n.addComponent("FallCrack"), n.getComponent("FallCrack").setInfo(this.boundRect.bottom, Global.randRange(100, 145), 150)
            },
            flashEggs: function() {
                var t = this;
                1 == Global.modeID ? (this.flashEggs1(!1), this.scheduleOnce(function() {
                    t.flashEggs1(!0)
                }, .25)) : (this.flashEggs2(!1), this.scheduleOnce(function() {
                    t.flashEggs2(!0)
                }, .25))
            },
            flashAlertGameOver: function() {
                var t = this;
                this.flashAlert && clearInterval(this.flashAlert), this.flashAlert = setInterval(function() {
                    setTimeout(function() {
                        t.alertGameOver.active = !0, setTimeout(function() {
                            t.alertGameOver.active = !1
                        }, 200)
                    }, 1)
                }, 400), this.scheduleOnce(function() {
                    clearInterval(t.flashAlert), t.alertGameOver.active = !1
                }, 2), this.scheduleOnce(function() {
                    t.alertGameOver.active = !1
                }, 2.5)
            },
            flashEggs1: function(t) {
                for (var e = 0, n = 13; n < Global.rows; n++)
                    for (var i = 0; i < Global.columns; i++) null != c[n][i] && 16 != c[n][i].type && (c[n][i].bubble.y <= -355 ? (c[n][i].bubble.active = t, e++, this.listTypeFlash.includes(c[n][i].type) || this.listTypeFlash.push(c[n][i].type)) : c[n][i].bubble.active = !0);
                0 == e && (this.countEndless = 0, this.allow5 = !1, this.unschedule(this.flashegg), this.listTypeFlash = [])
            },
            flashEggs2: function(t) {
                for (var e = 0, n = 0; n < Global.rows; n++)
                    for (var i = 0; i < Global.columns; i++) null != c[n][i] && 16 != c[n][i].type && (c[n][i].bubble.y <= -355 ? (c[n][i].bubble.active = t, e++, this.listTypeFlash.includes(c[n][i].type) || this.listTypeFlash.push(c[n][i].type)) : c[n][i].bubble.active = !0);
                0 == e && (this.countEndless = 0, this.allow5 = !1, this.unschedule(this.flashegg), this.listTypeFlash = [])
            },
            finishEndless: function() {
                var t = this;
                this.gamestate = a.FINISH, E = !0, this.paused = !0, Global.audioMng.playGameOver(), this.finish_sprite.active = !0, 1 == Global.modeID ? (this.buttonGift.active = !1, clearInterval(this.timegiftCD), this.saveBestScore(), this.scheduleOnce(function() {
                    t.finishEndlessPopup()
                }, 2)) : this.finishStompedPopup();
                var e = cc.moveTo(.3, cc.v2(0, -366));
                this.compressor.runAction(e);
                for (var n = 0; n < Global.rows; n++)
                    for (var i = 0; i < Global.columns; i++)
                        if (null != c[n][i]) {
                            var o = c[n][i].bubble;
                            o.addComponent("FallEgg");
                            var s = o.getComponent("FallEgg");
                            s.gravity = 3e3, s.lowerLimit = this.boundRect.bottom, o.getComponent(cc.Sprite).spriteFrame = this.yolk, this.spawnParticle(o, c[n][i].type), s.initialAngle = 1, s.initialVelocity = Global.randRange(100, 205), c[n][i] = null
                        }
            },
            cancelVideoStomped: function() {
                FBInstant.logEvent("SHOW_POPUP_VIDEO_STOMPED", 1, {
                    STATE: "PLAY_AGAIN_FAIL"
                }), this.isFinishStomped = !1, this.videoStomped.active = !1, Global.adsCtl.showAdButton(!1), this.lastScore = 0, this.clearCountDownVideo(), "undefined" != typeof FBInstant && FBInstant.logEvent("LOSE_STOMPED_LEVEL_" + Math.floor(this.numberLevel / 10), 1, {
                    custom_property: "level_" + this.numberLevel
                }), this.finish_sprite.active = !1, this.popupFinish.active = !0, this.popupFinish.getComponent("GameOverCtl").updateGameOver(this.currentScore, Global.i18n)
            },
            playAgainVideoStomped: function() {
                FBInstant.logEvent("SHOW_POPUP_VIDEO_STOMPED", 1, {
                    STATE: "PLAY_AGAIN_SUCCESS"
                }), this.bgVideoStomped1.node.runAction(T), this.videoStomped.active = !1, this.finish_sprite.active = !1, this.gamestate = a.PLAY, this.firstFired = !1, this.boundRectTop = 400, this.newRoot = 0, this.progressbar.getComponent("ProgressBar").updateDisplay(0), this.loadStomped(this.numberLevel, !0, !0)
            },
            finishStompedPopup: function() {
                Global.adsCtl.loadVideo(), Global.adsCtl.showCreateShortcut()
            },
            finishStompedWithVideo: function() {
                var t = this;
                this.videoscountStomped--, this.videoCountLabel.string = Global.i18n.t("ONLY", {
                    time: this.videoscountStomped
                }), this.videoscountStomped <= 0 ? this.scheduleOnce(function() {
                    t.finishEndlessPopup()
                }, 2) : Global.adsCtl.checkSupportedAPIs() ? (FBInstant.logEvent("SHOW_POPUP_VIDEO_STOMPED", 1, {
                    STATE: "SHOW_POPUP"
                }), this.isFinishStomped = !0, this.inviteLabelPopupOppotunity.string = Global.i18n.t("INVITEPOPUP2"), this.opportunityLabel.string = Global.i18n.t("OPPORTUNITY"), this.videoStomped.active = !0, this.bgVideoStomped1.node.runAction(cc.scaleTo(.01, 1)), this.countdownVideoStomped()) : (this.bgVideoStomped1.node.runAction(T), this.videoStomped.active = !1, this.scheduleOnce(function() {
                    t.finishEndlessPopup()
                }, 2))
            },
            countdownVideoStomped: function() {
                var t = this;
                this.cdvideotime = 5, this.textVideo.string = Global.i18n.t("RETRY"), this.cdVideoStomped = setInterval(function() {
                    t.cdvideotime -= .01, t.continueProgressBar.getComponent(cc.Sprite).fillRange = t.cdvideotime / 5, t.cdvideotime <= 0 && (FBInstant.logEvent("SHOW_POPUP_VIDEO_STOMPED", 1, {
                        STATE: "TIMEOUT"
                    }), clearInterval(t.cdVideoStomped), t.cancelVideoStomped())
                }, 10)
            },
            clearCountDownVideoEndless: function() {
                this.finish_sprite.active = !1, clearInterval(this.cdVideoEndless)
            },
            clearCountDownVideo: function() {
                this.bgVideoStomped1.node.runAction(T), this.videoStomped.active = !1, this.finish_sprite.active = !1, clearInterval(this.cdVideoStomped)
            },
            finishEndlessPopup: function() {
                var t = this;
                this.lastScore = 0, "undefined" != typeof FBInstant && (1 == Global.modeID ? FBInstant.logEvent("FINISH_ENDLESS_TIME", this.playTime) : FBInstant.logEvent("LOSE_STOMPED_LEVEL_" + Math.floor(this.numberLevel / 10), 1, {
                    custom_property: "level_" + this.numberLevel
                })), Global.adsCtl.showInterstitialAsync().finally(function() {
                    cc.log("show ad done"), t.finish_sprite.active = !1, t.popupFinish.active = !0, t.showAdsDialog(), t.popupFinish.getComponent("GameOverCtl").updateGameOver(t.currentScore, Global.i18n)
                })
            },
            showAdsDialog: function() {
                if (cc.log("showAdsDialog"), Global.supportedPayment && !Global.isPurchaseRemoveAds && !(cc.sys.localStorage.getItem("GameOverCount") > 9)) {
                    if (null == cc.sys.localStorage.getItem("GameOverCount")) cc.sys.localStorage.setItem("GameOverCount", 1);
                    else {
                        var t = cc.sys.localStorage.getItem("GameOverCount");
                        t++, cc.sys.localStorage.setItem("GameOverCount", t)
                    }
                    cc.log(cc.sys.localStorage.getItem("GameOverCount")), 3 != cc.sys.localStorage.getItem("GameOverCount") && 8 != cc.sys.localStorage.getItem("GameOverCount") || this.dialogAds.getComponent("DialogAdsCtl").show()
                }
            },
            hideDialogAds: function() {
                this.dialogAds.getComponent("DialogAdsCtl").hide()
            },
            openRanking: function() {
                var t = this;
                this.gamestate == a.PLAY && (this.gamestate = a.RANK, this.popupFinish.active = !0, this.paused = !0, this.callback && this.unschedule(this.callback), Global.adsCtl.showInterstitialAsync().finally(function() {
                    t.popupFinish.getComponent("GameOverCtl").updateGameOver(t.currentScore, Global.i18n, !0)
                }))
            },
            resumeWithFriends: function() {
                this.gamestate == a.RANK ? this.closeRanking() : this.playAgain()
            },
            closeRanking: function() {
                this.gamestate = a.PLAY, this.popupFinish.active = !1, this.paused = !1, this.timeCtl()
            },
            updateScore: function() {
                this.scoreLabel.string = this.currentScore;
                var t = L.updateLocal(this.currentScore);
                t ? this.loadPlayerArray(t) : this.currentScore > Global.bestEndless && (Global.bestEndless = this.currentScore, Global.adsCtl.setBestlocal(), Global.adsCtl.setBestlabel(), this.rankScore.string = Global.bestEndless), this.checkClaimGift()
            },
            checkClaimGift: function() {
                if ((new Date).getDay() != cc.sys.localStorage.getItem("today"))
                    if (this.currentTarget < this.targetScore.length) this.currentScore >= this.targetScore[this.currentTarget] && (this.dialogCtl.getComponent("DialogCtl").show(.4, 0), this.currentTarget++, this.paused = !0, this.callback && this.unschedule(this.callback));
                    else {
                        var t = (this.currentTarget - this.targetScore.length + 1) * this.targetSpace + this.targetScore[this.targetScore.length - 1];
                        this.currentScore >= t && (this.dialogCtl.getComponent("DialogCtl").show(.4, t), this.currentTarget++, this.paused = !0, this.callback && this.unschedule(this.callback))
                    }
            },
            timeCtl: function() {
                var t = this;
                if (this.lighting.active = C > 1, !this.paused && this.firstFired && 1 != Global.scene) {
                    if (this.playTime++, this.logScore(), 5 == this.playTime ? (this.lastSpeedEgg += .15, r = this.lastSpeedEgg, h += 3) : 100 == this.playTime && (this.lastSpeedEgg -= .15, r = this.lastSpeedEgg, h -= 3), this.playTime == this.timeShowGift && 1 == Global.modeID && this.eventGiftRandom(), this.timeRemaining--, this.clockCtrl.updateDisplay(this.timeRemaining), l <= 0 ? (l = Global.randRange(11, 29), this.shakeEgg()) : l--, this.listbonustime.length > 0)
                        for (var e = 0; e < this.listbonustime.length; e++) this.listbonustime[e] <= 0 ? (C = 2 == this.listbonus[e] ? Math.round(C / 2) : 3 == this.listbonus[e] ? Math.round(C / 3) : Math.round(C / 4), this.listbonus.splice(e, 1), this.listbonustime.splice(e, 1), this.listBonusNode[e].active = !1, Global.bonusPool.put(this.listBonusNode[e]), this.listBonusNode.splice(e, 1), e--) : (this.listbonustime[e]--, this.listbonustime[e] <= 10 && this.listBonusNode[e].runAction(cc.sequence(cc.fadeTo(.25, 100), cc.fadeTo(.25, 255), cc.fadeTo(.25, 100), cc.fadeTo(.25, 255))));
                    if (this.timeRemaining > 0) this.timeRemaining < 4 && 1 == Global.modeID && (3 == this.timeRemaining && Global.audioMng.playTickTock(), this.alertFlyEgg.active = !0, this.scheduleOnce(function() {
                        t.eggComing.active = !0, t.scheduleOnce(function() {
                            t.alertFlyEgg.active = !1, t.eggComing.active = !1
                        }, 1.5)
                    }, 1.5)), this.scheduleOnce(function() {
                        t.timeCtl()
                    }, 1);
                    else {
                        if (1 == Global.modeID) {
                            var n = cc.instantiate(this.flyEgg);
                            n.parent = this.node, n.getComponent("FlyEgg").init(this, h)
                        }
                        this.timeReset()
                    }
                }
            },
            logScore: function() {
                if ("undefined" != typeof FBInstant) switch (this.playTime) {
                    case 120:
                        FBInstant.logEvent("SCORE_2M", this.currentScore);
                        break;
                    case 300:
                        FBInstant.logEvent("SCORE_5M", this.currentScore);
                        break;
                    case 600:
                        FBInstant.logEvent("SCORE_10M", this.currentScore);
                        break;
                    case 1080:
                        FBInstant.logEvent("SCORE_18M", this.currentScore)
                }
            },
            flyEggHit: function(t) {
                var e = this,
                    n = 250 * C;
                this.currentScore += n, this.flyScore2.string = "+" + n, this.flyScore2.node.x = t.x, this.flyScore2.node.y = t.y + Global.radius, this.flyScore2.node.active = !0, this.flyScore2.node.runAction(cc.moveBy(1, 0, 66)), this.scheduleOnce(function() {
                    e.flyScore2.node.active = !1
                }, 1), this.updateScore(), this.updateSpeedEgg()
            },
            timeReset: function() {
                this.clockCtrl.updateAnim(), this.timeRemaining = 60, this.timeCtl()
            },
            updateSpeedEgg: function() {
                cc.log("updateSpeedEgg"), this.lastSpeedEgg += .04, ++h > 9 && (h = 9), r = this.lastSpeedEgg
            },
            resetSpeedEgg: function() {
                this.tapToStart_btn.active && (this.tapToStart_btn.active = !1), h = 3, this.lastSpeedEgg = .18, r = this.lastSpeedEgg
            },
            shakeEgg: function() {
                for (var t = this, e = Global.randRange(20, 55), n = 0; n < i; n++)
                    for (var s = 0; s < o; s++)
                        if (null != c[n][s] && 0 == --e) {
                            16 != c[n][s].type && (this.shakeegg = c[n][s].bubble);
                            break
                        } if (!(e > 0)) {
                    var a = cc.scaleTo(.2, 1.1, 1.2),
                        l = cc.scaleTo(.2, .99, .99),
                        r = cc.repeat(cc.sequence(a, l), 25);
                    this.shakeegg, this.shakeegg.runAction(r), this.scheduleOnce(function() {
                        t.shakeegg = null
                    }, 10)
                }
            },
            playAgain: function() {
                var t = this;
                this.gamestate = a.PLAY, Global.adsCtl.showAdButton(!1), Global.audioMng.playLauch(), this.popupFinish.active = !1, this.popupPause.active = !1, this.paused = !1, this.init(!0), this.scheduleOnce(function() {
                    t.autoStart()
                }, 2)
            },
            pauseGameFB: function() {
                this.gamestate != a.PLAY && this.gamestate != a.THUNDER || (this.paused = !0, this.popupPause.active = !0, this.callback && this.unschedule(this.callback), this.gamestate = a.PAUSE, Global.adsCtl.showAdButton(!0), "WEB" == FBInstant.getPlatform() && Global.adsCtl.showInterstitial())
            },
            pauseGame: function() {
                var t = this;
                this.gamestate != a.PLAY && this.gamestate != a.THUNDER || (this.paused = !0, this.popupPause.active = !0, this.callback && this.unschedule(this.callback), this.gamestate = a.PAUSE, this.tutorialPanel.getChildByName("hand").getComponent(cc.Animation).pause(), this.saveBestScore(), Global.adsCtl.showAdButton(!0), Global.adsCtl.showInterstitialAsync().finally(function() {
                    t.post_SessionScore("PAUSE"), t.updateContext()
                }))
            },
            updateContext: function() {
                "undefined" != typeof FBInstant && null != FBInstant.context.getID() ? this.fbConText(this.currentScore) : this.loadRankInfo()
            },
            post_SessionScore: function(t) {
                "undefined" != typeof FBInstant && (console.log("postSessionScore: " + t + " " + this.currentScore), this.postSessionScoreCount++, this.postSessionScoreCount < 4 ? FBInstant.logEvent("PSS_" + this.postSessionScoreCount, 1, {
                    SOURCE: t
                }) : FBInstant.logEvent("PSS_4p", 1, {
                    SOURCE: t
                }), FBInstant.postSessionScore(this.currentScore), this.unschedule(this.callbackTournament), this.schedule(this.callbackTournament, .5))
            },
            checkTournamentCreate: function() {
                var t = this;
                if ("undefined" != typeof FBInstant) {
                    var e = FBInstant.context.getID();
                    e && !Global.adsCtl.lastContextID ? (Global.adsCtl.lastContextID = e, this.unschedule(this.callbackTournament), L.getTourAsync().then(function(e) {
                        e.getContextID() in L.tournamentMapLocal || (L.updateTournamentLocal(e), FBInstant.logEvent("CREATE_TOURNAMENT_INFO", 1, {
                            PSS: t.postSessionScoreCount
                        }))
                    }).catch(function(t) {})) : e && (this.unschedule(this.callbackTournament), L.getTournamentAsync().then(function(t) {}).catch(function(t) {}))
                } else this.unschedule(this.callbackTournament)
            },
            saveBestScore: function() {
                Global.adsCtl.saveBestscore()
            },
            isPause: function() {
                return this.paused
            },
            pauseInvite: function() {
                this.saveGame(), this.paused = !0, this.gamestate = a.PAUSE, this.callback && this.unschedule(this.callback)
            },
            resumeGame: function() {
                Global.adsCtl.showAdButton(!1), this.gamestate = a.PLAY, this.paused = !1, this.popupPause.active = !1, this.tutorialPanel.getChildByName("hand").getComponent(cc.Animation).resume(), this.timeCtl(), this.whiteBG.active && (this.whiteBG.active = !1, this.bolt.active = !1), this.callback && this.schedule(this.callback, 1)
            },
            saveGame: function() {},
            loadGame: function() {
                var t = "SaveGameBT",
                    e = "SaveStateBT";
                2 == Global.modeID && (t = "SaveGameBTS", e = "SaveStateBTS");
                var n = !1;
                if ("undefined" == typeof FBInstant) {
                    var i = cc.sys.localStorage.getItem(t);
                    1 == i ? (this.init(!0), i = cc.sys.localStorage.getItem(e), n = !0) : this.init()
                } else this.init(!0);
                return n
            },
            testAction: function() {},
            loadSaveState: function(t) {
                var e = this,
                    n = t.split(";");
                if (this.currentScore = parseInt(n[0]), this.lastScore = this.currentScore, this.updateScore(), 1 == Global.modeID && (14 == n.length ? (h = parseInt(n[10]), this.playTime = parseInt(n[11])) : (h = parseInt(n[9]), this.playTime = parseInt(n[10])), this.lastSpeedEgg = parseFloat(n[1]), r = this.playTime > 0 ? this.lastSpeedEgg : 10, "undefined" != typeof FBInstant && FBInstant.player.getDataAsync(["videoscountEndless"]).then(function(t) {
                        e.videoscountEndless = t.videoscountEndless
                    })), cc.sys.localStorage.getItem("listbonus" + Global.modeID)) {
                    this.listbonus = cc.sys.localStorage.getItem("listbonus" + Global.modeID).split(","), this.listbonustime = cc.sys.localStorage.getItem("listbonustime" + Global.modeID).split(",");
                    for (var i = 0; i < this.listbonustime.length; i++) {
                        var o = null;
                        if (i < this.listBonusNode.length) o = this.listBonusNode[i];
                        else if (Global.bonusPool.size() > 0) o = Global.bonusPool.get(), this.listBonusNode.push(o);
                        else {
                            o = cc.instantiate(this.bonusPrefab);
                            var s = A.slice(G, 8).concat(A.slice(0, G + 1));
                            o.getComponent("SpinBonus").startSpin(s), ++G > 7 && (G = 0), this.listBonusNode.push(o)
                        }
                        o.getComponent(cc.Sprite).spriteFrame = this.spriteBonusMulti[this.listbonus[i] - 2], o.parent = this.bonusParent, o.active = !0, o.opacity = 255, C *= this.listbonus[i]
                    }
                }
                if (this.timeShowGift = this.playTime + Global.randRange(30, 50), this.numberLevel = parseInt(n[2]), this.newRoot = parseInt(n[3]), this.height = 1 / this.timeBeforeNewRoot * this.newRoot, this.progressbar.getComponent("ProgressBar").updateDisplay(this.height), this.boundRect.setTop(parseFloat(n[4])), this.compressor.y = this.boundRect.getTop() + 20, y = parseInt(n[5]), 14 == n.length) {
                    var a = n[13].split("-");
                    Global.bubblecolors = parseInt(a[0]), this.videoscountStomped = parseInt(a[1])
                } else {
                    a = n[12].split("-");
                    Global.bubblecolors = parseInt(a[0]), this.videoscountStomped = parseInt(a[1])
                }
                if (this.videoCountLabel.string = Global.i18n.t("ONLY", {
                        time: this.videoscountStomped
                    }), "undefined" != typeof SoundGame && Global.sound && SoundGame(), 14 == n.length)
                    for (var l = n[6].split(","), u = 0; u < Global.rows && u < l.length; u++)
                        for (var d = l[u], g = 0; g < Global.columns && g < d.length; g++) "-" != d[g] && (c[u][g] = this.getOneBubbleAtPos(Global.indexToPosition(this.boundRect, Global.index(u, g)), Global.charToType(d[g])));
                this.loadShooterBubble()
            },
            deleteSaveGame: function() {},
            showAdsState: function() {
                this.laststate = this.gamestate, this.gamestate = a.ADS
            },
            closeAdsState: function() {
                this.laststate ? this.gamestate = this.laststate : this.gamestate = a.PLAY
            },
            eventGiftRandom: function() {
                var t = Global.randRange(0, 100);
                t < 25 ? (this.giftBonus = 12, this.iconGift.spriteFrame = this.spriteGift2x, "undefined" != typeof FBInstant && FBInstant.logEvent("SHOW_BUTTON_GIFT_BONUS", 1, {
                    custom_property: "X2"
                })) : t < 50 ? (this.giftBonus = 13, this.iconGift.spriteFrame = this.spriteGift3x, "undefined" != typeof FBInstant && FBInstant.logEvent("SHOW_BUTTON_GIFT_BONUS", 1, {
                    custom_property: "X3"
                })) : t < 75 ? (this.giftBonus = 14, this.iconGift.spriteFrame = this.spriteGift4x, "undefined" != typeof FBInstant && FBInstant.logEvent("SHOW_BUTTON_GIFT_BONUS", 1, {
                    custom_property: "X4"
                })) : (this.giftBonus = 7, this.iconGift.spriteFrame = this.bombSprite, "undefined" != typeof FBInstant && FBInstant.logEvent("SHOW_BUTTON_GIFT_BONUS", 1, {
                    custom_property: "BOOM"
                })), this.timeGift()
            },
            timeGift: function() {
                Global.adsCtl.loadVideo(), this.buttonGift.active = !0, this.timegift = 15, this.textTimeGift = this.buttonGift.getChildByName("timegift").getComponent(cc.Label), this.textTimeGift.string = "(15)", this.timeGiftCountdown()
            },
            timeGiftCountdown: function() {
                var t = this;
                this.timegiftCD = setInterval(function() {
                    t.timegift -= 1, t.textTimeGift.string = "(" + t.timegift + ")", t.timegift <= 0 && (t.timeShowGift = t.playTime + Global.randRange(30, 50), t.buttonGift.active = !1, clearInterval(t.timegiftCD))
                }, 1e3)
            },
            addGift: function() {
                if (7 == this.giftBonus) I = 10, this.showFlashCombo();
                else {
                    this.shooter.bubble.childrenCount > 0 && this.shooter.bubble.removeAllChildren();
                    var t = cc.instantiate(this.spriteBonus[this.giftBonus - 8]);
                    this.babyBonus = this.giftBonus, t.parent = this.shooter.bubble, this.babyBonus = -1
                }
                this.buttonGift.active = !1, this.timeShowGift = this.playTime + 120
            },
            addClaimGift: function(t) {
                if (7 == t) cc.log("bom claim gift"), I = 10, this.shooter.bubble.getComponent(cc.Sprite).spriteFrame = this.bombSprite, this.shooter.bubble.width = 128, this.shooter.bubble.height = 125;
                else {
                    this.shooter.bubble.childrenCount > 0 && this.shooter.bubble.removeAllChildren();
                    var e = cc.instantiate(this.spriteBonus[t]);
                    this.babyBonus = t, e.parent = this.shooter.bubble, this.babyBonus = -1
                }
            },
            getColor: function(t) {
                switch (t) {
                    case 0:
                        return cc.Color.RED;
                    case 1:
                        return new cc.Color(7, 11, 172);
                    case 2:
                        return new cc.Color(8, 104, 12);
                    case 3:
                        return new cc.Color(221, 219, 45);
                    case 4:
                        return new cc.Color(167, 10, 164);
                    case 5:
                        return new cc.Color(215, 173, 172);
                    case 6:
                        return cc.Color.GRAY;
                    case 7:
                        return new cc.Color(247, 165, 23);
                    default:
                        return cc.Color.RED
                }
            }
        }), cc._RF.pop()
    }, {
        ClockCtrl: "ClockCtrl",
        ProgressBar: "ProgressBar",
        UtilsFB: "UtilsFB",
        i18n: "i18n"
    }],
    ClaimGift: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b36de89q8REK40pqOcO2WPy", "ClaimGift"), cc.Class({
            extends: cc.Component,
            properties: {
                ballLayout: t("BallLayout"),
                score: cc.Label,
                tick: cc.Node,
                scoreEgg1: cc.Label,
                scoreEgg2: cc.Label,
                scoreEgg3: cc.Label,
                giftEgg1: {
                    default: [],
                    type: cc.Node
                },
                giftEgg2: {
                    default: [],
                    type: cc.Node
                },
                giftEgg3: {
                    default: [],
                    type: cc.Node
                }
            },
            start: function() {},
            init: function() {
                this.targetScore = this.ballLayout.targetScore, this.currentTarget = this.ballLayout.currentTarget, this.targetSpace = this.ballLayout.targetSpace, this.date = new Date
            },
            openClaimGiftPopup: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.init(), this.date.getDay() != cc.sys.localStorage.getItem("today") && (0 == t ? (this.setScoreEgg(), this.score.string = this.targetScore[this.currentTarget]) : (this.setScoreEgg(t), this.score.string = t), this.setGiftIndexFirst(), this.setGiftIndex(), "undefined" != typeof FBInstant && (FBInstant.logEvent("SHOW_REWARD_POPUP"), this.ballLayout.post_SessionScore("REWARD"), this.ballLayout.updateContext()))
            },
            setGiftIndexFirst: function() {
                if (0 == this.currentTarget) {
                    for (var t = 0; t <= 2; t++) this.giftIndex1 = this.getRandomValueFromArray([4, 2]), this.giftIndex2 = this.getRandomValueFromArray([0, 5]), this.giftIndex3 = this.getRandomValueFromArray([7, 2, 3, 0, 6]);
                    this.generateGift()
                }
            },
            setGiftIndex: function() {
                if (0 != this.currentTarget) {
                    switch (this.giftIndex1 = this.giftIndex2, this.giftIndex2 = this.giftIndex3, this.currentTarget + 2) {
                        case 3:
                            this.giftIndex3 = this.getRandomValueFromArray([5, 2, 3, 4]);
                            break;
                        default:
                            this.giftIndex3 = this.getRandomValueFromArray([0, 2, 3, 4, 5, 6, 7])
                    }
                    this.generateGift()
                }
            },
            generateGift: function() {
                if (7 == this.giftIndex1) this.giftEgg1[0].parent.active = !1, this.giftEgg1[7].active = !0;
                else {
                    this.giftEgg1[7].active = !1, this.giftEgg1[0].parent.active = !0;
                    for (var t = 0; t < this.giftEgg1.length; t++) t == this.giftIndex1 ? this.giftEgg1[t].active = !0 : this.giftEgg1[t].active = !1
                }
                if (7 == this.giftIndex2) this.giftEgg2[0].parent.active = !1, this.giftEgg2[7].active = !0;
                else {
                    this.giftEgg2[7].active = !1, this.giftEgg2[0].parent.active = !0;
                    for (t = 0; t < this.giftEgg2.length; t++) t == this.giftIndex2 ? this.giftEgg2[t].active = !0 : this.giftEgg2[t].active = !1
                }
                if (7 == this.giftIndex3) this.giftEgg3[0].parent.active = !1, this.giftEgg3[7].active = !0;
                else {
                    this.giftEgg3[7].active = !1, this.giftEgg3[0].parent.active = !0;
                    for (t = 0; t < this.giftEgg3.length; t++) t == this.giftIndex3 ? this.giftEgg3[t].active = !0 : this.giftEgg3[t].active = !1
                }
            },
            setScoreEgg: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (0 == t) {
                    if (this.scoreEgg1.string = this.targetScore[this.currentTarget], 2 == this.currentTarget) return this.scoreEgg2.string = this.targetScore[this.currentTarget + 1], void(this.scoreEgg3.string = this.targetScore[this.targetScore.length - 1] + this.targetSpace);
                    if (3 == this.currentTarget) return this.scoreEgg2.string = this.targetScore[this.targetScore.length - 1] + this.targetSpace, void(this.scoreEgg3.string = this.targetScore[this.targetScore.length - 1] + 2 * this.targetSpace);
                    this.scoreEgg2.string = this.targetScore[this.currentTarget + 1], this.scoreEgg3.string = this.targetScore[this.currentTarget + 2]
                } else this.scoreEgg1.string = t, this.scoreEgg2.string = t + this.targetSpace, this.scoreEgg3.string = t + 2 * this.targetSpace
            },
            claimGiftButton: function() {
                this.checkDontShowToday(), this.ballLayout.addClaimGift(this.giftIndex1), this.node.parent.getComponent("DialogCtl").hide(), this.ballLayout.resumeGame()
            },
            checkDontShowToday: function() {
                this.tick.active && (cc.sys.localStorage.setItem("today", this.date.getDay()), "undefined" != typeof FBInstant && FBInstant.logEvent("NOT_SHOW_AGAIN_REWARD"))
            },
            dontShowButton: function() {
                this.tick.active = !this.tick.active
            },
            getRandomValueFromArray: function(t) {
                return t[Math.floor(Math.random() * t.length)]
            }
        }), cc._RF.pop()
    }, {
        BallLayout: "BallLayout"
    }],
    ClockCtrl: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "bdf94XnmrlHVqWXq9Ox1Qiv", "ClockCtrl");
        cc.Class({
            extends: cc.Component,
            properties: {
                cTop: cc.Sprite,
                cBot: cc.Sprite
            },
            start: function() {},
            setActive: function(t) {
                this.node.active = t, this.cTop.node.active = t, this.cBot.node.active = t
            },
            updateDisplay: function(t) {
                this.cTop.fillRange = t / 60, this.cBot.fillRange = 1 - t / 60
            },
            updateAnim: function() {
                var t = this;
                this.cTop.node.active = !1, this.cBot.node.active = !1, this.getComponent(cc.Animation).play("clocks"), this.scheduleOnce(function() {
                    t.cTop.node.active = !0, t.cBot.node.active = !0
                }, .8)
            }
        }), cc._RF.pop()
    }, {}],
    DialogAdsCtl: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b9c6dCfE1JC47UIS3LYr9bw", "DialogAdsCtl"), cc.Class({
            extends: cc.Component,
            properties: {},
            show: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .2;
                this.node.active || (this.isHide = !1, this.node.active = !0, this.content || (this.content = this.node.getChildByName("content")), this.content.setScale(.8), this.content.opacity = 0, cc.tween(this.content).to(t, {
                    opacity: 255,
                    scale: 1
                }, {
                    easing: "backOut"
                }).start())
            },
            hideInstant: function() {
                this.isHide = !0, this.node.active = !1
            },
            hide: function() {
                var t = this;
                !this.isHide && this.node.active && (this.content || (this.content = this.node.getChildByName("content")), cc.tween(this.content).to(.2, {
                    opacity: 0,
                    scale: .8
                }, {
                    easing: "backIn"
                }).call(function() {
                    t.node.active = !1
                }).start(), this.isHide = !0)
            }
        }), cc._RF.pop()
    }, {}],
    DialogCtl: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "924200RSh9GBZKOddHPsrRh", "DialogCtl"), cc.Class({
            extends: cc.Component,
            properties: {},
            show: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .2,
                    e = arguments[1];
                this.node.active || (this.isHide = !1, this.node.active = !0, this.content || (this.content = this.node.getChildByName("ClaimGiftPopup")), this.content.getComponent("ClaimGift").openClaimGiftPopup(e), this.content.setScale(.8), this.content.opacity = 0, cc.tween(this.content).to(t, {
                    opacity: 255,
                    scale: 1
                }, {
                    easing: "backOut"
                }).start())
            },
            hideInstant: function() {
                this.isHide = !0, this.node.active = !1
            },
            hide: function() {
                var t = this;
                !this.isHide && this.node.active && (this.content || (this.content = this.node.getChildByName("ClaimGiftPopup")), cc.tween(this.content).to(.2, {
                    opacity: 0,
                    scale: .8
                }, {
                    easing: "backIn"
                }).call(function() {
                    t.node.active = !1
                }).start(), this.isHide = !0)
            }
        }), cc._RF.pop()
    }, {}],
    FallCrack: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "63a9d3iKbhPTbtrUZnwOkSo", "FallCrack"), cc.Class({
            extends: cc.Component,
            properties: {
                gravity: 3e3,
                initialVelocity: 10,
                initialAngle: 0,
                lowerLimit: 0
            },
            start: function() {
                this._velocity = {
                    x: this.initialVelocity * Math.cos(Global.degToRad(this.initialAngle)),
                    y: this.initialVelocity * Math.sin(Global.degToRad(this.initialAngle))
                }
            },
            update: function(t) {
                this.node.x += this._velocity.x * t, this.node.y += this._velocity.y * t - .5 * this.gravity * t * t, this._velocity.y -= t * this.gravity, this.node.y <= this.lowerLimit && (Global.crackPool.put(this.node), this.node.removeComponent("FallCrack"))
            },
            setInfo: function(t, e, n) {
                this.gravity = 3e3, this.lowerLimit = t, this.initialAngle = e, this.initialVelocity = n, this._velocity = {
                    x: this.initialVelocity * Math.cos(Global.degToRad(this.initialAngle)),
                    y: this.initialVelocity * Math.sin(Global.degToRad(this.initialAngle))
                }
            }
        }), cc._RF.pop()
    }, {}],
    FallEffect: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a412b1YrMxEB6f0m0zI1Oks", "FallEffect"), cc.Class({
            extends: cc.Component,
            properties: {
                gravity: 3e3,
                initialVelocity: 10,
                initialAngle: 0,
                lowerLimit: 0
            },
            start: function() {
                this._velocity = {
                    x: this.initialVelocity * Math.cos(Global.degToRad(this.initialAngle)),
                    y: this.initialVelocity * Math.sin(Global.degToRad(this.initialAngle))
                }
            },
            update: function(t) {
                this.node.x += this._velocity.x * t, this.node.y += this._velocity.y * t - .5 * this.gravity * t * t, this._velocity.y -= t * this.gravity, this.node.y <= this.lowerLimit && (this.node.removeComponent("FallEffect"), this.node.active = !1)
            },
            setInfo: function(t, e, n) {
                this.gravity = 3e3, this.lowerLimit = t, this.initialAngle = e, this.initialVelocity = n, this._velocity = {
                    x: this.initialVelocity * Math.cos(Global.degToRad(this.initialAngle)),
                    y: this.initialVelocity * Math.sin(Global.degToRad(this.initialAngle))
                }
            }
        }), cc._RF.pop()
    }, {}],
    FallEgg: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1bbf3KwBMBFAKvn6hUsmsro", "FallEgg"), cc.Class({
            extends: cc.Component,
            properties: {
                gravity: 20,
                initialVelocity: 10,
                initialAngle: 0,
                lowerLimit: 0
            },
            start: function() {
                this._velocity = {
                    x: this.initialVelocity * Math.cos(Global.degToRad(this.initialAngle)),
                    y: this.initialVelocity * Math.sin(Global.degToRad(this.initialAngle))
                }
            },
            update: function(t) {
                this.node.x += this._velocity.x * t, this.node.y += this._velocity.y * t - .5 * this.gravity * t * t, this._velocity.y -= t * this.gravity, this.node.y <= this.lowerLimit && (Global.eggPool.put(this.node), this.node.removeComponent("FallEgg"))
            }
        }), cc._RF.pop()
    }, {}],
    FlyEgg: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "63fc6DPrP5D6awxfFYJ+Mld", "FlyEgg"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                this.addSpeed = 0
            },
            init: function(t, e) {
                this.addSpeed = 20 * (e - 3), this.node.scaleX = 1, this.ballLayout = t, this.node.position = cc.v2(Global.randRange(-300, 300), -600), this.spawn = !0, this.getComponent(cc.Sprite).spriteFrame = this.ballLayout.spriteBall[Global.bubblecolors]
            },
            update: function(t) {
                if (this.ballLayout.isPause() || this.spawn && (-1 == this.node.scaleX ? this.node.x -= (260 + this.addSpeed) * t : 1 == this.node.scaleX && (this.node.x += (260 + this.addSpeed) * t), this.node.y += 160 * t, this.node.x > 270 ? this.node.scaleX = -1 : this.node.x < -270 ? this.node.scaleX = 1 : this.node.y > 640 && (this.spawn = !1, Global.bubblecolors < 15 && Global.bubblecolors++, this.ballLayout.resetSpeedEgg(), this.node.destroy())), this.spawn && this.ballLayout.fired && Global.circleIntersection(this.node.x, this.node.y, this.ballLayout.shooter.bubble.x, this.ballLayout.shooter.bubble.y)) {
                    this.ballLayout.flyEggHit(this.node);
                    var e = this.ballLayout.shooter.bubble;
                    e.addComponent("FallEffect");
                    var n = e.getComponent("FallEffect");
                    n.gravity = 3e3, n.lowerLimit = this.ballLayout.boundRect.bottom, n.initialAngle = 1, n.initialVelocity = Global.randRange(100, 205), e.getComponent(cc.Sprite).spriteFrame = this.ballLayout.yolk, this.ballLayout.spawnParticle(e, this.ballLayout.shooter.type), this.addComponent("FallEffect");
                    var i = this.getComponent("FallEffect");
                    i.gravity = 3e3, i.lowerLimit = this.ballLayout.boundRect.bottom, i.initialAngle = 1, i.initialVelocity = Global.randRange(100, 205), this.getComponent(cc.Sprite).spriteFrame = this.ballLayout.yolk, this.ballLayout.spawnParticle(this.node, Global.bubblecolors), this.ballLayout.loadShooterBubble()
                }
            }
        }), cc._RF.pop()
    }, {}],
    GameCtl: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "79e60IWBq9EHoEhNiLpDJSq", "GameCtl"), cc.Class({
            extends: cc.Component,
            properties: {
                home: cc.Node
            },
            start: function() {},
            homeScene: function() {
                Global.scene = 1, this.home.active = !0
            }
        }), cc._RF.pop()
    }, {}],
    GameOverCtl: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "986dfmw+7pDt4Ot2AyAWQPO", "GameOverCtl");
        var i = t("UtilsFB");
        cc.Class({
            extends: cc.Component,
            properties: {
                avatar: cc.Sprite,
                playername: cc.Label,
                playerscore: cc.Label,
                listUser: {
                    default: [],
                    type: cc.Node
                },
                labelMode: cc.Label,
                richtextMode: cc.RichText,
                resumeNode: cc.Node,
                finishNode: cc.Node,
                inviteScore: cc.Label,
                inviteTop: cc.Label,
                ballLayout: t("BallLayout"),
                playFriendlyTxt: cc.Label,
                opponentScore: cc.Label
            },
            start: function() {
                this.bestSessionScore = 0, this.countUser = 0, this.scheduleOnce(function() {
                    var t = this;
                    
                }, 1), this.playFriendlyTxt.string = Global.i18n.t("PLAYFRIENDLY")
            },
            updateGameOver: function(t, e) {
				//updateShare(t,21);
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                Global.i18n || (Global.i18n = e), this.inviteScore.string = t, this.resumeNode.active = n, this.finishNode.active = !n, this.playerscore.string = t
            },
            updateLB: function() {
                "undefined" != typeof FBInstant && null != FBInstant.context.getID() && this.currentContextID != FBInstant.context.getID() && (this.currentContextID = FBInstant.context.getID(), this.fbConText(this.ballLayout.currentScore))
            },
            onDisable: function() {
                this.unschedule(this.callback)
            },
            fbConText: function(t) {
                var e = this;
                this.ballLayout.finishScoreContext < t && (this.ballLayout.finishScoreContext = t), i.setFBContext(t).then(function(t) {
                    return e.ballLayout.finishScoreContext = t.getScore(), i.getFBContext()
                }).then(function(t) {
                    e.loadLB(t), e.ballLayout.getContextLB(t), t.length > 1 ? e.opponentScore.string = "" : e.opponentScore.string = Global.i18n.t("OPPONENTSCORE"), Global.adsCtl.updateLastContext()
                }).catch(function(t) {
                    Global.adsCtl.updateLastContext()
                })
            },
            loadLB: function(t) {
                if (t && t.length > 0) {
                    cc.log("parray", t), this.hideUser(), this.countUser = t.length, this.countUser > 10 && (this.countUser = 10);
                    for (var e = !1, n = 0; n < this.countUser; n++) this.listUser[n].getComponent("UserRankingController").setInfo(t[n], this), t[n].isSelf && (e = !0, this.loadRank(t[n].rank));
                    e || this.loadRank("10+"), this.showUser()
                }
            },
            updateContextScore: function() {
                FBInstant.updateAsync({
                    action: "LEADERBOARD",
                    name: this.boardcontext + FBInstant.context.getID(),
                    text: "Game so cute! Play with me?"
                }).then(function() {
                    return cc.log("Update Posted")
                }).catch(function(t) {
                    return console.error(t)
                })
            },
            closeRankingStartFriend: function() {
                this.ballLayout.resumeWithFriends()
            },
            loadFriendLB: function(t) {
                this.countUser = t.length, this.countUser > 10 && (this.countUser = 10);
                for (var e = 0; e < this.countUser; e++) this.listUser[e].getComponent("UserRankingController").setInfo(t[e].getPlayer().getID(), t[e].getPlayer().getPhoto(), t[e].getPlayer().getName(), t[e].getScore(), this, t[e].getPlayer().getID() == FBInstant.player.getID(), !0)
            },
            loadRank: function(t) {
                this.richtextMode.string = Global.i18n.t("RANK1") + "<color=#F4E800> #" + t + "</color>", this.inviteTop.string = ""
            },
            hideUser: function() {
                for (var t = 0; t < this.listUser.length; t++) this.listUser[t].active = !1
            },
            showUser: function() {
                for (var t = 0; t < this.countUser; t++) this.listUser[t].active = !0
            }
        }), cc._RF.pop()
    }, {
        BallLayout: "BallLayout",
        UtilsFB: "UtilsFB"
    }],
    Globals: [function(t, e, n) {
        "use strict";
        var i;

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        cc._RF.push(e, "49373RC82lCt6JdDz9QUO9z", "Globals"), window.Global = (o(i = {
            modeID: 1,
            columns: 9,
            rows: 20,
            radius: 33,
            rowsInData: 10,
            colsInData: 9,
            balls: [],
            bubblecolors: 7,
            bestEndless: 0,
            bestStomped: 0,
            sound: !0,
            scene: 1,
            eggPool: null,
            crackPool: null,
            supportedPayment: !1,
            isPurchaseRemoveAds: !1,
            leveldata: ["----a----;---a----;----b----;---b----;----c----;---c----;----d----;---d----;----a----;---a----", "----db---;---bc---;---ad----;---bc---;----db---;----ca--;----db---;---bc---;---ad----", "ed--b--de;ec-aa-ce;-abdadba-;-eb--be-;--ea-ae--;--cddc--;---aca---;---bb---;----b----", "--beaeb--;-ecbbce-;-cbaaabc-;-bejjeb-;--ejjje--;accjjcca;cbabbbabc;--aeea--", "a-b-c-d-e;b-c-d-e-;c-d-e-a--;d-e-a-b-;e-a-b-c--;a-b-c-d-;b-c-d-e--", "bc-cac-cb;a-abba-a;b-bcjcb-b;-ca--ac-;-be---eb-;ac----ca;cb-----bc;a------a;d-------d", "bc-----cb;bc----cb;afb---bfa;ada--ada;-bedddeb-;afa--afa;afb---bfa;bc----cb;bc-----cb;d------d", "ahddhjcbe;-aahdhjc;---aaahjc;----hadd;------hdj;-----ahd;--------a;-------a", "deabbaed-;eabfeae-;-fcabcf--;-cbfec--;--dabd---;-adcda--;--acca---;-qqqqq--", "---abc---;---de---;---cba---;--bddb--;--eedee--;--dbbd--;---dbd---;---aa---;----a----", "-bdc--cdd;bba--abd;ecd--dce-;ae--ead-;ebc--cbe-;adb--bdc;-aea--aec", "dchcjchcd;deebbeed;-adajada-;-bchhcb-;--hejeh--;--ccbb--;---hjh---;---aa---;----j----", "-ab--ba--;c-h-h-c-;d--dd--d-;h-e-e-h-;-ab--ba--;b-e-e-b-;d--dd--d-;c-a-a-c-;-ab--ba--", "eabcdeabc;-q---q--;beabcdeab;-q---q--;abdcbadcb;-q---q--;abcdeabcd", "babdea---;decbc---;abdeab---;eabcd---;bdeaba---;abcde---;edabca---;acede---", "---gbig--;-ikikek-;-be--gib-;-----ekg;-----jbie;k---ekgk;ib-jjbbbe;kgkekekb;-ibgiige-;--kbbe--", "--dnenb--;-babcac-;-d-hed-d-;d--pp--d;n--d-h--n;--a--a--;--na-an--;-ae--ea-;--n---n--", "-a-mcmcmc;--mbgbjb;--mgjjjmg;-cbjcjcm;-mgjjjcgm;mbmcjcjc;mgjjjjmgm;gbgjggbm;cccmmmccc", "ffd---dff;bcb--bcb;-dgg-ggd-;-baffab-;--gbfbg--;--caac--;---faf---;--cbdc--", "--acgca--;-cb--bc-;-g-bgb-g-;c-giig-c;abbdjdbba;c-giig-c;-g-bgb-g-;-cb--bc-;--acgca--", "habchcbah;bgaeeagb;ghecbaehg;eacbjbae;acbdjjdca;biadjajd", "-ehcdche-;-ndmmdn-;--fncnf--;--baab--;pklooolkp;q------q;q-------q", "b-beed-d-;a-alc-c-;-q-qq-q--;f-f-a-a-;e-e--b-b-;dd---cc-;-c----d--;b-----e-;a------f-", "eeeeedcab;bbeadbef;-bdbddbee;-ddecddd;--aaccbac;--acbcba;---ccdbdb;---qqqqq", "---kk----;---h----;---gg----;---f----;---ee----;---q----;---cc----;---b----;---aa----", "ddccbccdd;ggjqqjgg;qqcgqgcqq;qqbbbbqq;-aaebeaa-;aqqffqqa;aqqqfqqqa;ddhhhhdd", "d--ccc--d;c--bb--c;-a--a--a-;-b----b-", "aecdqqdce;ibhqpqhb;-ncqiiqcn;-aqijiqa;-acckkcca;fqgqkqgq;fqhbqqefq;qfhbqefh", "-oooooo--;-o---o--;qqqq--o--;-o---o--;-o--qqqqq;-o---o--;qqqq--o--;-o---o--;-o--qqqqq", "emacbcame;lcammaci;eoldfgipe;gjolipjg;ladfolipd;-kiplk--"],
            PER: 33 * Math.sqrt(3),
            randRange: function(t, e) {
                return Math.floor(t + Math.random() * (e - t + 1))
            },
            radToDeg: function(t) {
                return t * (180 / Math.PI)
            },
            circleIntersection: function(t, e, n, i, o, s) {
                var a = t - i,
                    c = e - o;
                return Math.sqrt(a * a + c * c) < n + s
            },
            degToRad: function(t) {
                return t * (Math.PI / 180)
            },
            index: function(t, e) {
                return {
                    row: t,
                    col: e
                }
            },
            positionToIndex: function(t, e) {
                var n, i = e.x - t.left,
                    o = e.y - t.bottom,
                    s = void 0;
                return (n = Math.floor((t.height - this.radius - o + this.PER / 2) / this.PER)) % 2 == 0 ? (i < 0 && (i = 0), s = Math.floor(i / (2 * this.radius))) : (i < this.radius && (i = this.radius), (s = Math.floor((i - this.radius) / (2 * this.radius))) >= this.columns - 1 && (s = this.columns - 2)), {
                    row: n,
                    col: s
                }
            },
            indexToPosition: function(t, e) {
                var n, i = void 0;
                return i = e.row % 2 == 0 ? this.radius + 2 * this.radius * e.col : 2 * this.radius + 2 * this.radius * e.col, n = t.height - this.radius - this.PER * e.row, {
                    x: i + t.left,
                    y: n + t.bottom
                }
            },
            indexToPosY: function(t, e) {
                return t.height - this.radius - this.PER * e.row + t.bottom
            },
            getNeighbours: function(t) {
                var e = t.row,
                    n = t.col;
                return e % 2 == 0 ? [this.index(e - 1, n - 1), this.index(e - 1, n), this.index(e, n - 1), this.index(e, n + 1), this.index(e + 1, n - 1), this.index(e + 1, n)] : [this.index(e - 1, n), this.index(e - 1, n + 1), this.index(e, n - 1), this.index(e, n + 1), this.index(e + 1, n), this.index(e + 1, n + 1)]
            },
            getNeighbours2: function(t) {
                var e = t.row,
                    n = t.col;
                return e % 2 == 0 ? [this.index(e - 1, n - 1), this.index(e - 1, n), this.index(e, n - 1), this.index(e, n + 1), this.index(e + 1, n - 1), this.index(e + 1, n), this.index(e - 1, n - 2), this.index(e - 1, n + 1), this.index(e - 2, n - 2), this.index(e - 2, n - 1), this.index(e - 2, n), this.index(e, n - 2), this.index(e, n + 2), this.index(e + 1, n - 2), this.index(e + 1, n + 1), this.index(e + 2, n - 2), this.index(e + 2, n - 1), this.index(e + 2, n)] : [this.index(e - 1, n), this.index(e - 1, n + 1), this.index(e, n - 1), this.index(e, n + 1), this.index(e + 1, n), this.index(e + 1, n + 1), this.index(e, n - 2), this.index(e, n + 2), this.index(e - 1, n - 1), this.index(e - 1, n + 2), this.index(e + 1, n - 1), this.index(e + 1, n + 2), this.index(e - 2, n - 1), this.index(e - 2, n), this.index(e - 2, n + 1), this.index(e + 2, n - 1), this.index(e + 2, n), this.index(e + 2, n + 1)]
            },
            LBRect: function(t, e, n, i) {
                this.left = t, this.bottom = e, this.width = n, this.height = i, this.isInInnerOffset = function(t, e, n) {
                    return e >= this.left + t && e <= this.left + this.width - t && n >= this.bottom + t && n <= this.bottom + this.height - t
                }, this.isInBounds = function(t) {
                    return this.isInInnerOffset(0, t, x, t.y)
                }, this.getTop = function() {
                    return this.bottom + this.height
                }, this.setTop = function(t) {
                    this.height = t - this.bottom, this.top = t
                }, this.getRight = function() {
                    return this.left + this.width
                }, this.setRight = function(t) {
                    this.right = t, this.width = t - this.left
                }
            },
            isEqual: function(t, e) {
                return t >= e - Number.EPSILON && t <= e + Number.EPSILON
            },
            isIndexValid: function(t) {
                return t.row >= 0 && t.row < this.rows && t.col >= 0 && t.col < this.columns
            },
            charToType: function(t) {
                return t.charCodeAt(0) - 97
            }
        }, "circleIntersection", function(t, e, n, i) {
            var o = t - n,
                s = e - i;
            return Math.sqrt(o * o + s * s) <= 2 * this.radius
        }), o(i, "cached", {}), o(i, "normalizeUrl", function(t) {
			var e=[1,2];
            if (e) {
                var n = e[1];
                return this.cached[n] || (this.cached[n] = t), this.cached[n]
            }
            return t
        }), i), cc._RF.pop()
    }, {}],
    HomeCtl: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ad435qas71G7og7ybb0mhPm", "HomeCtl");
        var i = t("UtilsFB");
        cc.Class({
            extends: cc.Component,
            properties: {
                best1: cc.Label,
                best2: cc.Label,
                btnEndless: cc.Animation,
                btnStomped: cc.Animation,
                hand: cc.Node,
                hand2: cc.Node,
                ballLayout: t("BallLayout"),
                addHome: cc.RichText,
                labelScoreInvite: cc.Label
            },
            onLoad: function() {
                Global.scene = 1, Global.i18n || (Global.i18n = t("i18n"))
            },
            onEnable: function() {
                "undefined" != typeof FBInstant && null != FBInstant.context.getID() && this.ballLayout.finishScoreContext && Global.bestEndless < this.ballLayout.finishScoreContext && (Global.bestEndless = this.ballLayout.finishScoreContext, Global.adsCtl.saveBestscore(), Global.adsCtl.setBestlocal()), this.best1.string = Global.i18n.t("BEST") + ": " + Global.bestEndless
            },
            start: function() {
                var t = this;
                Global.audioMng.startMusic(), this.best2.string = Global.i18n.t("BEST") + ": " + Global.bestStomped, this.addHome.string = "<u>" + Global.i18n.t("ADDHOME") + "</u>", "undefined" != typeof FBInstant && FBInstant.player.getDataAsync(["isFirstBT", "PlayCount", "TOUR_MAP", "BEST_SCORE_EGGSHOOT", "GET_LB_ASYNC"]).then(function(e) {
                    if (void 0 !== e.BEST_SCORE_EGGSHOOT && Global.bestEndless < parseInt(e.BEST_SCORE_EGGSHOOT) && (Global.bestEndless = parseInt(e.BEST_SCORE_EGGSHOOT)), Global.adsCtl.setBestlabel(), Global.adsCtl.setBestlocal(), void 0 !== e.TOUR_MAP && (i.tournamentMapLocal = JSON.parse(e.TOUR_MAP), i.getTournamentLocal()), void 0 === e.isFirstBT ? (FBInstant.setSessionData({
                            firsttime: 10
                        }), cc.sys.localStorage.removeItem("RemoveAds"), t.isTutorial = !0, FBInstant.player.setDataAsync({
                            isFirstBT: 0,
                            PlayCount: 1,
                            GET_LB_ASYNC: 1
                        }), t.endlessMode()) : (t.isTutorial = !1, console.log("get-lb-endless", e.GET_LB_ASYNC), void 0 === e.GET_LB_ASYNC && i.getLeaderboardAsync("Endless").then(function(t) {
                            console.log("get-lb-endless-success", t), Global.adsCtl.setBestScore(t), FBInstant.player.setDataAsync({
                                GET_LB_ASYNC: 1
                            })
                        }).catch(function(t) {
                            console.log("get-lb-endless-error", t)
                        })), void 0 !== e.PlayCount) {
                        var n = parseInt(e.PlayCount);
                        n++, FBInstant.player.setDataAsync({
                            PlayCount: n
                        }), parseInt(e.PlayCount) < 3 ? t.endlessMode() : 3 == parseInt(e.PlayCount) && (t.btnEndless.play("button"), t.hand.active = !0)
                    }
                    null != FBInstant.context.getID() && t.endlessMode()
                })
            },
            endlessMode: function() {
                this.node.active = !1, Global.modeID = 1, this.hand.active && (this.hand.active = !1, this.btnEndless.stop("button"), this.btnStomped.play("button"), this.hand2.active = !0), this.ballLayout.startGameScene()
            },
            stompedMode: function() {},
            openRanking: function() {},
            backToHome: function() {},
            playWithFriends: function() {},
            testTutorial: function() {
                this.isTutorial = !0
            }
        }), cc._RF.pop()
    }, {
        BallLayout: "BallLayout",
        UtilsFB: "UtilsFB",
        i18n: "i18n"
    }],
    HomeRanking: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6a4dcgSeC9AcbMHnBMiX5wL", "HomeRanking");
        var i = t("UtilsFB");
        cc.Class({
            extends: cc.Component,
            properties: {
                avatar: cc.Sprite,
                playername: cc.Label,
                playerscore: cc.Label,
                listUser: {
                    default: [],
                    type: cc.Node
                },
                ballLayout: t("BallLayout")
            },
            onLoad: function() {
                window.home_rank = this
            },
            start: function() {
                this.bestSessionScore = 0, this.countUser = 0, this.scheduleOnce(function() {
                    var t = this;
                    "undefined" != typeof FBInstant && cc.loader.load(Global.normalizeUrl(FBInstant.player.getPhoto()), function(e, n) {
                        t.avatar.spriteFrame = new cc.SpriteFrame(n)
                    })
                }, 1)
            },
            onEnable: function() {
                var t = this;
                if ("undefined" != typeof FBInstant)
                    if (null != FBInstant.context.getID()) i.getFBContext().then(function(e) {
                        t.loadLB(e)
                    });
                    else {
                        var e = i.getLeaderboardLocal("Endless");
                        e && e.length > 0 && this.loadLB(e)
                    }
            },
            loadLB: function(t) {
                if (t && t.length > 0) {
                    this.hideUser(), this.countUser = t.length, this.countUser > 10 && (this.countUser = 10);
                    for (var e = !1, n = 0; n < this.countUser; n++) this.listUser[n].getComponent("UserRankingController").setInfo(t[n], this), t[n].isSelf && (e = !0, this.loadRank(t[n].rank));
                    e || this.loadRank("10+"), this.showUser()
                }
            },
            loadRank: function(t) {
                this.playername.string = Global.i18n.t("RANK1") + " #" + t
            },
            closeRankingStartFriend: function() {
                this.ballLayout.resumeWithFriends()
            },
            hideUser: function() {
                for (var t = 0; t < this.listUser.length; t++) this.listUser[t].active = !1
            },
            showUser: function() {
                for (var t = 0; t < this.countUser; t++) this.listUser[t].active = !0
            }
        }), cc._RF.pop()
    }, {
        BallLayout: "BallLayout",
        UtilsFB: "UtilsFB"
    }],
    LabelLocalized: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d4566bMELdN8r7GOiALQTbl", "LabelLocalized");
        var i = t("i18n");
        cc.Class({
            extends: cc.Label,
            properties: {
                textKey: {
                    default: "TEXT_KEY",
                    multiline: !0,
                    tooltip: "Enter i18n key here",
                    notify: function() {
                        this._sgNode && (this._sgNode.setString(this.string), this._updateNodeSize())
                    }
                },
                string: {
                    override: !0,
                    tooltip: "Here shows the localized string of Text Key",
                    get: function() {
                        return i.t(this.textKey)
                    },
                    set: function(t) {
                        cc.warn("Please set label text key in Text Key property.")
                    }
                }
            }
        }), cc._RF.pop()
    }, {
        i18n: "i18n"
    }],
    LoadGame: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e402aQT2gpBYqU1zCxNTcYQ", "LoadGame"), cc.Class({
            extends: cc.Component,
            properties: {
                loadLabel: cc.Label
            },
            start: function() {
                var t = 0;
                cc.loader.onProgress = function(e, n, i) {
                    t = e / n, i && i.uuid
                }, cc.director.preloadScene("game", function() {
                    1 == t && cc.director.loadScene("game")
                }), cc.director.loadScene("game", function() {
                    cc.loader.onProgress = null
                })
            }
        }), cc._RF.pop()
    }, {}],
    PaymentCtl: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cca15gZ2eZNvZB6NAMvznxd", "PaymentCtl"), cc.Class({
            extends: cc.Component,
            properties: {
                removeAdsButton: cc.Node,
                dialogAds: cc.Node
            },
            onLoad: function() {
                this.checkSupportPayment()
            },
            start: function() {
                this.isPurchasing = !1
            },
            checkSupportPayment: function() {
                var t = this;
                "undefined" != typeof FBInstant && (FBInstant.getSupportedAPIs().includes("payments.purchaseAsync") ? (console.log("support"), FBInstant.payments.onReady(function() {
                    t.getPlayerUnconsumedPurchases(), console.log("Payments ready"), t.removeAdsButton.active = !0, Global.supportedPayment = !0, t.checkPurchase()
                })) : this.checkPurchase())
            },
            purchaseRemoveAds: function() {
                var t = this;
                this.isPurchasing || (this.isPurchasing = !0, console.log("isPurchasing"), FBInstant.payments.purchaseAsync({
                    productID: "removeads",
                    developerPayload: "foobar"
                }).then(function(e) {
                    console.log(e), FBInstant.payments.consumePurchaseAsync(e.purchaseToken).then(function() {
                        FBInstant.player.setDataAsync({
                            RemoveAds: 1
                        }).then(function() {
                            t.removeAdsButton.active = !1, Global.isPurchaseRemoveAds = !0, t.dialogAds.getComponent("DialogAdsCtl").hide()
                        })
                    }).catch(function(t) {})
                }).catch(function(e) {
                    console.log("catch purchase"), t.isPurchasing = !1, console.log(e)
                }))
            },
            buyRemoveAdsTest: function() {
                var t = this;
                FBInstant.player.setDataAsync({
                    RemoveAds: 1
                }).then(function() {
                    console.log("data is set"), cc.sys.localStorage.setItem("RemoveAds", 1), t.ballLayout.removeAdsButton.active = !1
                })
            },
            checkPurchase: function() {
                var t = this;
                console.log("checkPurchase"), FBInstant.player.getDataAsync(["RemoveAds"]).then(function(e) {
                    void 0 !== e.RemoveAds ? (console.log("removeAds: " + parseInt(e.RemoveAds)), 1 == parseInt(e.RemoveAds) && (console.log("da mua"), t.removeAdsButton.active = !1, Global.isPurchaseRemoveAds = !0)) : console.log("chua mua remove ads")
                }).catch(function() {
                    console.log("chua mua")
                })
            },
            getPlayerUnconsumedPurchases: function() {
                var t = this;
                FBInstant.payments.getPurchasesAsync().then(function(e) {
                    t.consumePurchase(e)
                })
            },
            consumePurchase: function(t) {
                for (var e = 0; e < t.length; e++) FBInstant.payments.consumePurchaseAsync(t[e].purchaseToken).then(function() {
                    var t = this;
                    FBInstant.player.setDataAsync({
                        RemoveAds: 1
                    }).then(function() {
                        t.removeAdsButton.active = !1, Global.isPurchaseRemoveAds = !0
                    })
                }).catch(function(t) {})
            }
        }), cc._RF.pop()
    }, {}],
    ProgressBar: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "abf2d+axi9AhYivn8Db61HM", "ProgressBar"), cc.Class({
            extends: cc.Component,
            properties: {
                fill: cc.Sprite,
                closeBtn: cc.Button,
                watchBtn: cc.Button,
                giftSprite: cc.Sprite
            },
            start: function() {
                this.max = 1
            },
            updateDisplay: function(t) {
                this.fill.fillRange = t, t >= 1 && (this.fill.fillRange = 1)
            },
            showVideoGift: function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5;
                this.node.active = !0, this.node.opacity = 0, this.fill.fillRange = 1, this.closeBtn.interactable = !1, this.watchBtn.interactable = !1, 12 == window.ballLayout.giftBonus ? this.giftSprite.spriteFrame = window.ballLayout.spriteGift2x : 13 == window.ballLayout.giftBonus ? this.giftSprite.spriteFrame = window.ballLayout.spriteGift3x : 14 == window.ballLayout.giftBonus ? this.giftSprite.spriteFrame = window.ballLayout.spriteGift4x : this.giftSprite.spriteFrame = window.ballLayout.bombSprite, this.scheduleOnce(function() {
                    t.node.opacity = 255, t.closeBtn.interactable = !0, t.watchBtn.interactable = !0
                }, e)
            },
            runCountdown: function() {
                var t = this;
                this.cdvideotime = 5, this.cdVideoGift = setInterval(function() {
                    t.cdvideotime -= .01, t.fill.fillRange = t.cdvideotime / 5, t.cdvideotime <= 0 && (clearInterval(t.cdVideoGift), t.closeVideoGift())
                }, 10)
            },
            closeVideoGift: function() {
                window.ballLayout.cancelVideoGift()
            },
            cancelVideoGift: function() {
                window.ballLayout.splashScaleout(), this.node.active = !1
            },
            eventButtonVideoGift: function() {
                Global.adsCtl.eventButtonVideoGift()
            }
        }), cc._RF.pop()
    }, {}],
    ScreenShotNode: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "776b0pDkHpN0KvNuDhcyTEx", "ScreenShotNode"), cc.Class({
            extends: cc.Component,
            properties: {
                _camera: cc.Camera,
                _texture: cc.RenderTexture
            },
            onLoad: function() {
                var t = this.getComponent(cc.Camera);
                t || (t = this.addComponent(cc.Camera)), t.enabled = !1;
                var e = cc.size(360, 202.5),
                    n = cc.v2(0, 0);
                t.zoomRatio = .5;
                var i = new cc.RenderTexture,
                    o = cc.game._renderContext;
                i.initWithSize(e.width, e.height, o.STENCIL_INDEX8), this.node.setPosition(n), t.targetTexture = i, this._camera = t, this._texture = i
            },
            shot: function() {
                this._camera.render(void 0);
                var t = this._texture,
                    e = t.readPixels(),
                    n = t.width,
                    i = t.height,
                    o = document.createElement("canvas"),
                    s = o.getContext("2d");
                o.width = t.width, o.height = t.height;
                for (var a = 4 * n, c = 0; c < i; c++) {
                    for (var l = i - 1 - c, r = s.createImageData(n, 1), h = l * n * 4, u = 0; u < a; u++) r.data[u] = e[h + u];
                    s.putImageData(r, 0, c)
                }
                return o.toDataURL("image/png")
            },
            showTexture: function(t) {
                if (this._sprite) {
                    var e = new Image;
                    e.src = t;
                    var n = this;
                    e.onload = function() {
                        var t = new cc.Texture2D;
                        t.initWithElement(e), t.handleLoadedTexture();
                        var i = new cc.SpriteFrame(t);
                        n._sprite.spriteFrame = i
                    }
                } else console.warn("Need to add a sprite component")
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    SpinBonus: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "88138Nm6EFCwKYJ7oxKyp//", "SpinBonus"), cc.Class({
            extends: cc.Component,
            properties: {},
            startSpin: function(t) {
                var e = cc.repeatForever(cc.cardinalSplineTo(4, t, 0));
                this.node.runAction(e)
            }
        }), cc._RF.pop()
    }, {}],
    UserRankingController: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "fa821vQeIFK751k3SBUTPHw", "UserRankingController");
        var i = t("UtilsFB");
        cc.Class({
            extends: cc.Component,
            properties: {
                userAvatar: cc.Sprite,
                userName: cc.Label,
                userScore: cc.Label,
                playButton: cc.Node,
                shareButton: cc.Node,
                textNode: cc.Label
            },
            start: function() {},
            getID: function() {
                return this.id
            },
            setInfo: function(t, e) {
                this.gameover = e, this.playButton.active = !1, this.shareButton.active = !1, this.userName.string = t.playerName, this.userScore.string = t.score, this.setColor(t.isSelf, t.isFriend), this.id = t.id, i.getPlayerPhotoAsync(t).then(function() {
                    null != t.photoTexture && (this.userAvatar.spriteFrame = new cc.SpriteFrame, this.userAvatar.spriteFrame.setTexture(t.photoTexture))
                }.bind(this)).catch(function(t) {}), this.node.active = !0
            },
            setColor: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t) {
                    e && (this.shareButton.active = !0);
                    var n = new cc.Color(244, 232, 0);
                    this.userName.node.color = n, this.userScore.node.color = n
                } else e && (this.playButton.active = !0), this.userName.node.color = cc.Color.WHITE, this.userScore.node.color = cc.Color.WHITE;
                null != FBInstant.context.getID() && (this.playButton.active = !1, this.shareButton.active = !1)
            },
            setInfo1: function(t, e, n) {
                var i = this;
                this.userName.string = n, this.id = t, cc.loader.load(Global.normalizeUrl(e), function(t, e) {
                    i.userAvatar.spriteFrame = new cc.SpriteFrame(e), i.userAvatar.node.width = 100, i.userAvatar.node.height = 100
                }), this.setChallengeText()
            },
            setInfo2: function(t) {
                i.getPlayerPhotoAsync(t).then(function() {
                    null != t.photoTexture && (this.userAvatar.spriteFrame = new cc.SpriteFrame(t.photoTexture))
                }.bind(this)).catch(function(t) {})
            },
            createAsync: function() {
                FBInstant.logEvent("CHALLENGE_FRIEND", 1, {
                    LOCATION: "HOME"
                }), FBInstant.context.createAsync(this.id).then(function() {
                    Global.adsCtl.startFriendHome(), Global.adsCtl.updateLastContext()
                }).catch(function(t) {
                    "SAME_CONTEXT" == t.code && Global.adsCtl.startFriendHome()
                })
            },
            createAsync1: function() {
                var t = this;
                FBInstant.logEvent("CHALLENGE_FRIEND", 1, {
                    LOCATION: "RANK"
                }), FBInstant.context.createAsync(this.id).then(function() {
                    t.gameover.closeRankingStartFriend(), Global.adsCtl.updateLastContext()
                }).catch(function(e) {
                    "SAME_CONTEXT" == e.code && t.gameover.closeRankingStartFriend()
                })
            },
            setChallengeText: function() {
                this.textNode.string = Global.i18n.t("CHALLENGE")
            },
            setBravoText: function(t) {
                this.textNode.string = t
            }
        }), cc._RF.pop()
    }, {
        UtilsFB: "UtilsFB"
    }],
    UtilsFB: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "27c1f3tF6NMN5DIw3c5xy9I", "UtilsFB");
        var i = null,
            o = cc.Class({
                extends: cc.Component,
                statics: {
                    leaderboardMapLocal: {},
                    tournamentMapLocal: {},
                    invitePlayerRandomAsync: function(t) {
                        return new Promise(function(e, n) {
                            "undefined" != typeof FBInstant ? FBInstant.player.getConnectedPlayersAsync().then(function(i) {
                                if (i.length) {
                                    var s = i[Math.floor(Math.random() * i.length)].getID();
                                    o.invitePlayerAsync(s, t).then(function() {
                                        e()
                                    }).catch(function(t) {
                                        n(t)
                                    })
                                } else n("Player count is 0.")
                            }).catch(function(t) {
                                n(t)
                            }) : n("FBInstant undefined")
                        })
                    },
                    invitePlayerAsync: function(t, e) {
                        return new Promise(function(n, i) {
                            "undefined" != typeof FBInstant ? FBInstant.context.createAsync(t).then(function() {
                                n(), FBInstant.updateAsync({
                                    action: "CUSTOM",
                                    cta: "Play Now",
                                    image: e,
                                    text: {
                                        default: "Play Eggshoot together!",
                                        localizations: {
                                            vi_VN: "Ch\u01a1i Eggshoot c\xf9ng t\xf4i nh\xe9!",
                                            th_TH: "\u0e40\u0e25\u0e48\u0e19 Eggshoot \u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19!",
                                            id_ID: "Mainkan Eggshoot bersama!",
                                            es_ES: "Jueguen Eggshoot juntas!",
                                            pt_PT: "Tocar Eggshoot juntos!"
                                        }
                                    },
                                    template: "invite_play",
                                    strategy: "IMMEDIATE",
                                    notification: "NO_PUSH",
                                    data: {
                                        createId: t
                                    }
                                }).then(function() {}).catch(function(t) {})
                            }).catch(function(t) {
                                i(t)
                            }) : i("FBInstant undefined")
                        })
                    },
                    getTourAsync: function() {
                        return new Promise(function(t, e) {
                            FBInstant.getTournamentAsync().then(function(e) {
                                t(e)
                            }).catch(function(t) {
                                e(t)
                            })
                        })
                    },
                    getTournamentAsync: function() {
                        return new Promise(function(t, e) {
                            FBInstant.getTournamentAsync().then(function(e) {
                                o.updateTournamentLocal(e), t(e)
                            }).catch(function(t) {
                                e(t)
                            })
                        })
                    },
                    updateTournamentLocal: function(t) {
                        var e = t.getContextID();
                        e in o.tournamentMapLocal || (o.tournamentMapLocal[e] = {}), o.tournamentMapLocal[e].id = e, o.tournamentMapLocal[e].endTime = t.getEndTime(), o.tournamentMapLocal[e].playTime = (new Date).getTime();
                        var n = JSON.stringify(o.tournamentMapLocal);
                        cc.log("update-tour", n), FBInstant.player.setDataAsync({
                            TOUR_MAP: n
                        }).then(function() {}).catch(function(t) {})
                    },
                    getTournamentLocal: function() {
                        var t = 0,
                            e = (new Date).getTime() / 1e3,
                            n = null,
                            i = FBInstant.context.getID();
                        for (var s in o.tournamentMapLocal) o.tournamentMapLocal[s].endTime > e ? i != o.tournamentMapLocal[s].id && (0 == t || o.tournamentMapLocal[s].playTime < t) && (t = o.tournamentMapLocal[s].playTime, n = o.tournamentMapLocal[s]) : delete o.tournamentMapLocal[s];
                        var a = JSON.stringify(o.tournamentMapLocal);
                        return FBInstant.player.setDataAsync({
                            TOUR_MAP: a
                        }), n
                    },
                    getFBContext: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        return new Promise(function(e, n) {
                            if ("undefined" != typeof FBInstant) {
                                var s = "EndlessContext." + FBInstant.context.getID();
                                t && (s = t), FBInstant.getLeaderboardAsync(s).then(function(t) {
                                    return i = t, t.getEntriesAsync()
                                }).then(function(t) {
                                    for (var e = new Array, n = 0; n < t.length; n++) {
                                        var i = {},
                                            a = t[n].getPlayer();
                                        i.isSelf = a.getID() == FBInstant.player.getID(), i.isFriend = !0, i.id = a.getID(), i.playerName = a.getName(), i.photoUrl = a.getPhoto(), i.score = t[n].getScore(), i.rank = t[n].getRank(), i.photoTexture = null, e.push(i), i.isSelf && (window.playerInfo = i)
                                    }
                                    return o.updateLbLocal(s, e)
                                }).then(function(t) {
                                    o.initPlayerInfo(), e(t)
                                }).catch(function(t) {
                                    cc.log("getFBContext error", t);
                                    var i = o.getLeaderboardLocal(s);
                                    null != i ? e(i) : n(t)
                                })
                            } else n("FBInstant undefined")
                        })
                    },
                    initPlayerInfo: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (!window.playerInfo) {
                            var e = {
                                isSelf: !0,
                                isFriend: !0
                            };
                            e.id = FBInstant.player.getID(), e.playerName = FBInstant.player.getName(), e.photoUrl = FBInstant.player.getPhoto(), o.loadPlayerPhotoAsync(e).catch(function(t) {}), e.score = t, e.rank = 1, e.photoTexture = null, window.playerInfo = e
                        }
                        t > window.playerInfo.score && (window.playerInfo.score = t)
                    },
                    getLeaderboardAsync: function(t) {
                        return new Promise(function(e, n) {
                            "undefined" != typeof FBInstant ? FBInstant.getLeaderboardAsync(t).then(function(t) {
                                return i = t, t.getPlayerEntryAsync()
                            }).then(function(t) {
                                console.log("get-lb", t), e(t.getScore())
                            }).catch(function(t) {
                                n(t)
                            }) : n("FBInstant undefined")
                        })
                    },
                    getPlayerEntryAsync: function() {
                        i && i.getPlayerEntryAsync().then(function(t) {
                            t && Global.adsCtl.setBestScore(t.getScore())
                        }).catch(function(t) {})
                    },
                    loadPlayerArrayPhoto: function(t) {
                        if (null != t)
                            for (var e = 0; e < t.length; e++) o.loadPlayerPhotoAsync(t[e]).catch(function(t) {})
                    },
                    loadPlayerPhotoAsync: function(t) {
                        return new Promise(function(e, n) {
                            cc.loader.load({
                                url: t.photoUrl,
                                type: "jpg"
                            }, function(i, s) {
                                null != s ? (t.photoTexture = s, e()) : (o.debugLog("loadPlayerPhotoAsync error: " + JSON.stringify(i)), n(i))
                            })
                        })
                    },
                    setFBContext: function(t) {
                        var e = "EndlessContext." + FBInstant.context.getID();
                        return new Promise(function(n, s) {
                            "undefined" != typeof FBInstant ? (o.setLeaderboardLocal(e, t), FBInstant.getLeaderboardAsync(e).then(function(e) {
                                return i = e, e.setScoreAsync(t)
                            }).then(function(t) {
                                cc.log("setFBContext", t), o.initPlayerInfo(t.getScore()), n(t)
                            }).catch(function(t) {
                                cc.log("setFBContext error", t), s(t)
                            })) : n(0)
                        })
                    },
                    setLeaderboardAsync: function(t, e) {
                        return new Promise(function(n, s) {
                            "undefined" != typeof FBInstant ? (o.setLeaderboardLocal(t, e), FBInstant.getLeaderboardAsync(t).then(function(t) {
                                return i = t, t.setScoreAsync(e)
                            }).then(function(t) {
                                n(t.getScore())
                            }).catch(function(t) {
                                s(t)
                            })) : n(0)
                        })
                    },
                    getPlayerPhotoAsync: function(t) {
                        return new Promise(function(e, n) {
                            null != t.photoTexture ? e() : o.loadPlayerPhotoAsync(t).then(function() {
                                e()
                            }).catch(function(t) {
                                n(t)
                            })
                        })
                    },
                    getLeaderboardLocal: function(t) {
                        return t in o.leaderboardMapLocal ? o.leaderboardMapLocal[t].playerArray : null
                    },
                    updateLeaderboardLocal: function(t, e) {
                        return new Promise(function(n, i) {
                            if (!Global.adsCtl.haveFriends) return o.loadGlobalLB().then(function(e) {
                                0 == e.length ? i(0) : (t in o.leaderboardMapLocal || (o.leaderboardMapLocal[t] = {}), o.leaderboardMapLocal[t].playerArray = e, o.loadPlayerArrayPhoto(o.leaderboardMapLocal[t].playerArray), n(e))
                            });
                            0 == e.length ? i(0) : (t in o.leaderboardMapLocal || (o.leaderboardMapLocal[t] = {}), o.leaderboardMapLocal[t].playerArray = e, o.loadPlayerArrayPhoto(o.leaderboardMapLocal[t].playerArray), n(e))
                        })
                    },
                    updateLbLocal: function(t, e) {
                        return new Promise(function(n, i) {
                            t in o.leaderboardMapLocal || (o.leaderboardMapLocal[t] = {}), o.leaderboardMapLocal[t].playerArray = e, o.loadPlayerArrayPhoto(o.leaderboardMapLocal[t].playerArray), n(e)
                        })
                    },
                    loadGlobalLB: function() {
                        return new Promise(function(t, e) {
                            i.getEntriesAsync(10, 2).then(function(e) {
                                for (var n = new Array, i = 0; i < e.length; i++) {
                                    var o = {},
                                        s = e[i].getPlayer();
                                    o.isSelf = s.getID() == FBInstant.player.getID(), o.isFriend = !1, o.id = s.getID(), o.playerName = s.getName(), o.photoUrl = s.getPhoto(), o.score = e[i].getScore(), o.rank = e[i].getRank(), o.photoTexture = null, n.push(o)
                                }
                                t(n)
                            }).catch(function(t) {
                                e(), cc.log("Error load leaderboard bravo")
                            })
                        })
                    },
                    updateLocal: function(t) {
                        if ("undefined" == typeof FBInstant) return null;
                        var e = "Endless";
                        return FBInstant.context.getID() && (e = "EndlessContext." + FBInstant.context.getID()), o.setLeaderboardLocal(e, t) ? o.getLeaderboardLocal(e) : null
                    },
                    setLeaderboardLocal: function(t, e) {
                        var n = !1;
                        if (t in o.leaderboardMapLocal) {
                            var i = o.leaderboardMapLocal[t].playerArray,
                                s = !1;
                            if (null != i) {
                                for (var a = 0; a < i.length; a++) {
                                    var c = i[a];
                                    c.isSelf && (e > c.score && (c.score = e, s = !0), n = !0)
                                }
                                window.playerInfo && !n && i.push(window.playerInfo)
                            }
                            if (s) {
                                i.sort(function(t, e) {
                                    return e.score - t.score
                                });
                                for (var l = 0; l < i.length; l++) i[l].rank = l + 1
                            }
                        }
                        return n
                    },
                    getPlayerInfoScoreOvertake: function(t, e, n) {
                        var i = [],
                            s = o.getLeaderboardLocal(t);
                        if (null != s)
                            for (var a = 0; a < s.length; a++) {
                                var c = s[a],
                                    l = c.score;
                                e <= l && l < n && i.push(c)
                            }
                        return i
                    },
                    getSelfLeaderboardScore: function(t) {
                        var e = o.getLeaderboardLocal(t);
                        if (null != e)
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                if (i.isSelf) return i.score
                            }
                        return -1
                    },
                    getSelfLeaderboardInfo: function(t) {
                        if (window.playerInfo) return window.playerInfo;
                        var e = o.getLeaderboardLocal(t);
                        if (null != e)
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                if (i.isSelf) return i
                            }
                        return null
                    },
                    shareAsync: function(t, e) {
                        return new Promise(function(n, i) {
                            "undefined" != typeof FBInstant ? FBInstant.shareAsync({
                                intent: "SHARE",
                                image: e,
                                text: t,
                                data: {
                                    myReplayData: "..."
                                }
                            }).then(function() {
                                n()
                            }).catch(function(t) {
                                o.debugLog("shareAsync error: " + JSON.stringify(t)), i(t)
                            }) : i("FBInstant undefined")
                        })
                    },
                    chooseAsync: function(t) {
                        return new Promise(function(e, n) {
                            "undefined" != typeof FBInstant ? (t = t || [], FBInstant.context.chooseAsync({
                                filters: t
                            }).then(function() {
                                e()
                            }).catch(function(t) {
                                o.debugLog("chooseAsync error: " + JSON.stringify(t)), n(t)
                            })) : n("FBInstant undefined")
                        })
                    },
                    updateAsync: function(t) {
                        "undefined" != typeof FBInstant && FBInstant.updateAsync({
                            action: "CUSTOM",
                            cta: "Play with me",
                            image: t,
                            text: {
                                default: "Game so cute! Play with me?",
                                localizations: {
                                    vi_VN: "Game kute qu\xe1! V\xe0o ch\u01a1i c\xf9ng nh\xe9.",
                                    th_TH: "\u0e40\u0e01\u0e21\u0e19\u0e48\u0e32\u0e23\u0e31\u0e01\u0e21\u0e32\u0e01! \u0e40\u0e25\u0e48\u0e19\u0e01\u0e31\u0e1a\u0e09\u0e31\u0e19?",
                                    id_ID: "Game sangat lucu! Bermain denganku.",
                                    es_ES: "Juego tan lindo! Juega conmigo.",
                                    pt_PT: "Jogo t\xe3o fofo! Jogue comigo."
                                }
                            },
                            template: "invite_play",
                            strategy: "IMMEDIATE",
                            notification: "NO_PUSH",
                            data: {}
                        }).then(function() {
                            o.debugLog("chooseAsync success.")
                        }).catch(function(t) {
                            o.debugLog("chooseAsync updateAsync error: " + JSON.stringify(t))
                        })
                    },
                    debugLog: function(t) {}
                }
            });
        cc._RF.pop()
    }, {}],
    en: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c78a4m+4iVLwbuJa8Q4Eppk", "en"), e.exports = {
            GAMEOVER: "Game Over",
            ADDHOME: "Add to Homescreen",
            ENDLESS: "BẮT ĐẦU",
            STOMPED: "Stomped",
            EGGCOME: "Egg Coming!",
            SHARE: "Share your score!",
            BEST: "Kỷ lục",
            RETRY: "Continue",
            ONLY: "Only %{time} times left",
            SCORE: "Score",
            RANK1: "Top",
            RANK2: "",
            SUB: "Subscribe",
            INVITE: "Invite friends",
            CHALLENGE: "Challenge",
            PLAYFRIENDLY: "Challenge",
            OPPORTUNITY: "Opportunity",
            INVITEPOPUP: "Invite friends",
            INVITEPOPUP2: "Watch a video",
            CLASSICCHALLENGE: "Chế độ Classic",
            TOP: "Top",
            GOOD: "Good!",
            NICE: "Nice!",
            COOL: "Cool!",
            WOW: "Wow!",
            EXCELLENT: "Excellent!",
            PERFECT: "Perfect!",
            FRIEND: "Arcade",
            OPPONENTSCORE: "The opponent's score is being updated",
            LEADERBOARD: "Leaderboard",
            NOTVIDEO: "Video not available",
            TAPTOPLAY: "Tap to play",
            GREAT: "AWESOME",
            REACH1: "You've reached",
            REACH2: "points",
            CLAIM: "Here\u2019s your gift",
            CLAIMBUTTON: "Claim",
            DONTSHOW: "Don't show this dialog today",
            REMOVEADSTITLE: "Hide Ads",
            REMOVEADSCONTENT1: "We need to show ads.",
            REMOVEADSCONTENT2: "Money received will help us \n make the game better!",
            REMOVEADSCONTENT3: "You can choose to",
            "REMOVEADSCONTETN3.1": "hide ads",
            "REMOVEADSCONTETN3.2": "to support us for $1.99",
            DONATE: "Donate",
            NOTHANKS: "No, Thanks",
            TOUCHTHENRELEASE: "Tap then release \n to create a \n group of eggs of \n the same color",
            SHOOT: "Shoot to \n break egg",
            PLAYAGAIN: "Chơi lại",
            FREEGIFT: "Lucky Gift",
            WATCHGIFT: "Watch a video to claim gift",
            WATCHVIDEO: "Watch video"
        }, cc._RF.pop()
    }, {}],
    i18n: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1994dKfT2NEzYXigFCZZUdQ", "i18n");
        var i = t("polyglot"),
            o = t("en"),
            s = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
        "vi-VN" == s || "vi" == s ? o = t("vi") : "th-TH" != s && "th" != s || (o = t("th"));
        var a = new i({
            phrases: o
        });
        e.exports = {
            init: function(e) {
                var n = t(e);
                a.replace(n)
            },
            t: function(t, e) {
                return a.t(t, e)
            }
        }, cc._RF.pop()
    }, {
        en: "en",
        polyglot: "polyglot",
        th: "th",
        vi: "vi"
    }],
    polyglot: [function(t, e, n) {
        (function(t) {
            "use strict";
            cc._RF.push(e, "d1db2NW+PtLCbuMxHqJJ4yn", "polyglot");
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            (function(t, o) {
                "function" == typeof define && define.amd ? define([], function() {
                    return o(t)
                }) : "object" === (void 0 === n ? "undefined" : i(n)) ? e.exports = o(t) : t.Polyglot = o(t)
            })(void 0 !== t ? t : void 0, function(t) {
                var e = String.prototype.replace;

                function n(t) {
                    t = t || {}, this.phrases = {}, this.extend(t.phrases || {}), this.currentLocale = t.locale || "en", this.allowMissing = !!t.allowMissing, this.warn = t.warn || b
                }
                n.VERSION = "1.0.0", n.prototype.locale = function(t) {
                    return t && (this.currentLocale = t), this.currentLocale
                }, n.prototype.extend = function(t, e) {
                    var n;
                    for (var o in t) t.hasOwnProperty(o) && (n = t[o], e && (o = e + "." + o), "object" === (void 0 === n ? "undefined" : i(n)) ? this.extend(n, o) : this.phrases[o] = n)
                }, n.prototype.unset = function(t, e) {
                    var n;
                    if ("string" == typeof t) delete this.phrases[t];
                    else
                        for (var o in t) t.hasOwnProperty(o) && (n = t[o], e && (o = e + "." + o), "object" === (void 0 === n ? "undefined" : i(n)) ? this.unset(n, o) : delete this.phrases[o])
                }, n.prototype.clear = function() {
                    this.phrases = {}
                }, n.prototype.replace = function(t) {
                    this.clear(), this.extend(t)
                }, n.prototype.t = function(t, e) {
                    var n, i;
                    return "number" == typeof(e = null == e ? {} : e) && (e = {
                        smart_count: e
                    }), "string" == typeof this.phrases[t] ? n = this.phrases[t] : "string" == typeof e._ ? n = e._ : this.allowMissing ? n = t : (this.warn('Missing translation for key: "' + t + '"'), i = t), "string" == typeof n && (e = m(e), i = p(i = h(n, this.currentLocale, e.smart_count), e)), i
                }, n.prototype.has = function(t) {
                    return t in this.phrases
                };
                var o = "||||",
                    s = {
                        chinese: function(t) {
                            return 0
                        },
                        german: function(t) {
                            return 1 !== t ? 1 : 0
                        },
                        french: function(t) {
                            return t > 1 ? 1 : 0
                        },
                        russian: function(t) {
                            return t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
                        },
                        czech: function(t) {
                            return 1 === t ? 0 : t >= 2 && t <= 4 ? 1 : 2
                        },
                        polish: function(t) {
                            return 1 === t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
                        },
                        icelandic: function(t) {
                            return t % 10 != 1 || t % 100 == 11 ? 1 : 0
                        }
                    },
                    a = {
                        chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                        german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                        french: ["fr", "tl", "pt-br"],
                        russian: ["hr", "ru"],
                        czech: ["cs", "sk"],
                        polish: ["pl"],
                        icelandic: ["is"]
                    };

                function c(t) {
                    var e, n, i, o = {};
                    for (e in t)
                        if (t.hasOwnProperty(e))
                            for (i in n = t[e]) o[n[i]] = e;
                    return o
                }
                var l = /^\s+|\s+$/g;

                function r(t) {
                    return e.call(t, l, "")
                }

                function h(t, e, n) {
                    var i;
                    return null != n && t ? r((i = t.split(o))[d(e, n)] || i[0]) : t
                }

                function u(t) {
                    var e = c(a);
                    return e[t] || e.en
                }

                function d(t, e) {
                    return s[u(t)](e)
                }
                var g = /\$/g,
                    f = "$$$$";

                function p(t, n) {
                    for (var i in n)
                        if ("_" !== i && n.hasOwnProperty(i)) {
                            var o = n[i];
                            "string" == typeof o && (o = e.call(n[i], g, f)), t = e.call(t, new RegExp("%\\{" + i + "\\}", "g"), o)
                        } return t
                }

                function b(e) {
                    t.console && t.console.warn && t.console.warn("WARNING: " + e)
                }

                function m(t) {
                    var e = {};
                    for (var n in t) e[n] = t[n];
                    return e
                }
                return n
            }), cc._RF.pop()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    th: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "68bb1hsnINLM6gPeAQh1ScG", "th"), e.exports = {
            GAMEOVER: "\u0e08\u0e1a\u0e40\u0e01\u0e21",
            ADDHOME: "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d\u0e2b\u0e25\u0e31\u0e01",
            ENDLESS: "\u0e40\u0e25\u0e48\u0e19",
            STOMPED: "\u0e1b\u0e23\u0e34\u0e28\u0e19\u0e32",
            EGGCOME: "\u0e44\u0e02\u0e48\u0e01\u0e33\u0e25\u0e31\u0e07\u0e21\u0e32",
            SHARE: "\u0e41\u0e0a\u0e23\u0e4c\u0e04\u0e30\u0e41\u0e19\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
            BEST: "\u0e04\u0e30\u0e41\u0e19\u0e19\u0e14\u0e35\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
            RETRY: "\u0e40\u0e25\u0e48\u0e19\u0e2d\u0e35\u0e34\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
            ONLY: "\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e40\u0e27\u0e25\u0e32\u0e2d\u0e35\u0e01\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e19\u0e34\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27 %{time}",
            SCORE: "\u0e04\u0e30\u0e41\u0e19\u0e19",
            RANK1: "Top",
            RANK2: "",
            SUB: "\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01",
            INVITE: "\u0e40\u0e25\u0e48\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e21\u0e34\u0e15\u0e23",
            CHALLENGE: "\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22",
            PLAYFRIENDLY: "\u0e40\u0e25\u0e48\u0e19\u0e01\u0e31\u0e1a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
            OPPORTUNITY: "\u0e42\u0e2d\u0e01\u0e32\u0e2a",
            INVITEPOPUP: "\u0e40\u0e0a\u0e34\u0e0d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19 \u0e46",
            INVITEPOPUP2: "\u0e14\u0e39\u0e27\u0e35\u0e14\u0e35\u0e42\u0e2d",
            CLASSICCHALLENGE: "\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e04\u0e25\u0e32\u0e2a\u0e2a\u0e34\u0e01",
            TOP: "\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e41\u0e23\u0e01",
            GOOD: "\u0e14\u0e35!",
            NICE: "\u0e14\u0e35!",
            COOL: "\u0e40\u0e22\u0e47\u0e19!",
            WOW: "\u0e27\u0e49\u0e32\u0e27!",
            EXCELLENT: "\u0e22\u0e2d\u0e14\u0e40\u0e22\u0e35\u0e48\u0e22\u0e21!",
            PERFECT: "\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c!",
            FRIEND: "\u0e40\u0e25\u0e48\u0e19\u0e01\u0e31\u0e1a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
            OPPONENTSCORE: "The opponent's score is being updated",
            LEADERBOARD: "\u0e25\u0e35\u0e14\u0e40\u0e14\u0e2d\u0e23\u0e4c\u0e1a\u0e2d\u0e23\u0e4c\u0e14",
            NOTVIDEO: "Video not available",
            TAPTOPLAY: "Tap to play",
            GREAT: "\u0e22\u0e34\u0e48\u0e07\u0e43\u0e2b\u0e0d\u0e48",
            REACH1: "You have reached",
            REACH2: "points",
            CLAIM: "Here\u2019s your gift",
            CLAIMBUTTON: "Claim",
            DONTSHOW: "Don't show this dialog today",
            REMOVEADSTITLE: "Hide Ads",
            REMOVEADSCONTENT1: "We need to show ads.",
            REMOVEADSCONTENT2: "Money received will help us \n make the game better!",
            REMOVEADSCONTENT3: "You can choose to",
            "REMOVEADSCONTETN3.1": "hide ads",
            "REMOVEADSCONTETN3.2": "to support us for $1.99",
            DONATE: "Donate",
            NOTHANKS: "No, Thanks",
            TOUCHTHENRELEASE: "Tap then release \n to create a \n group of eggs of \n the same color",
            SHOOT: "Shoot to \n break egg",
            PLAYAGAIN: "Chơi lại",
            FREEGIFT: "Lucky Gift",
            WATCHGIFT: "Watch a video to claim gift",
            WATCHVIDEO: "Watch video"
        }, cc._RF.pop()
    }, {}],
    vi: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "49649CAUvVE5LJyib1gk36N", "vi"), e.exports = {
            GAMEOVER: "Thua Cu\u1ed9c",
            ADDHOME: "Th\xeam v\xe0o m\xe0n h\xecnh ch\xednh!",
            ENDLESS: "Ch\u01a1i",
            STOMPED: "C\xe2u \u0111\u1ed1",
            EGGCOME: "Tr\u1ee9ng \u0111ang t\u1edbi!",
            SHARE: "Chia s\u1ebb ngay!",
            BEST: "\u0110i\u1ec3m cao",
            RETRY: "Ti\u1ebfp t\u1ee5c",
            ONLY: "Ch\u1ec9 c\xf2n %{time} c\u01a1 h\u1ed9i",
            SCORE: "\u0110i\u1ec3m s\u1ed1",
            RANK1: "Top",
            RANK2: "",
            SUB: "\u0110\u0103ng k\xfd",
            INVITE: "M\u1eddi b\u1ea1n",
            CHALLENGE: "Th\xe1ch \u0111\u1ea5u",
            PLAYFRIENDLY: "Ch\u01a1i c\xf9ng b\u1ea1n",
            OPPORTUNITY: "C\u01a1 h\u1ed9i",
            INVITEPOPUP: "M\u1eddi b\u1ea1n b\xe8",
            INVITEPOPUP2: "Xem video",
            CLASSICCHALLENGE: "Th\xe1ch \u0111\u1ea5u c\u1ed5 \u0111i\u1ec3n",
            TOP: "Top",
            GOOD: "T\u1ed1t gh\xea!",
            NICE: "Hay!",
            COOL: "Kool!",
            WOW: "Wow!",
            EXCELLENT: "Tuy\u1ec7t v\u1eddi!",
            PERFECT: "Ho\xe0n h\u1ea3o!",
            FRIEND: "Ch\u01a1i v\u1edbi b\u1ea1n b\xe8",
            OPPONENTSCORE: "\u0110i\u1ec3m c\u1ee7a \u0111\u1ed1i ph\u01b0\u01a1ng \u0111ang \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt",
            LEADERBOARD: "B\u1ea3ng x\u1ebfp h\u1ea1ng",
            NOTVIDEO: "Kh\xf4ng c\xf3 video",
            TAPTOPLAY: "Ch\u1ea1m \u0111\u1ec3 ch\u01a1i",
            GREAT: "TUY\u1ec6T V\u1edcI",
            REACH1: "B\u1ea1n \u0111\xe3 \u0111\u1ea1t \u0111\u01b0\u1ee3c",
            REACH2: "\u0111i\u1ec3m",
            CLAIM: "\u0110\xe2y l\xe0 qu\xe0 c\u1ee7a b\u1ea1n",
            CLAIMBUTTON: "Nh\u1eadn",
            DONTSHOW: "Kh\xf4ng hi\u1ec7n dialog l\u1ea1i h\xf4m nay",
            REMOVEADSTITLE: "\u1ea8n qu\u1ea3ng c\xe1o",
            REMOVEADSCONTENT1: "Ch\xfang t\xf4i c\u1ea7n hi\u1ec3n th\u1ecb qu\u1ea3ng c\xe1o.",
            REMOVEADSCONTENT2: "Ti\u1ec1n nh\u1eadn \u0111\u01b0\u1ee3c s\u1ebd gi\xfap ch\xfang t\xf4i \n l\xe0m game t\u1ed1t h\u01a1n!",
            REMOVEADSCONTENT3: "B\u1ea1n c\xf3 th\u1ec3 l\u1ef1a ch\u1ecdn",
            "REMOVEADSCONTETN3.1": "\u1ea9n qu\u1ea3ng c\xe1o",
            "REMOVEADSCONTETN3.2": "\u0111\u1ec3 \u1ee7ng h\u1ed9 ch\xfang t\xf4i v\u1edbi $1.99",
            DONATE: "\u1ee6ng h\u1ed9",
            NOTHANKS: "Kh\xf4ng, c\u1ea3m \u01a1n",
            TOUCHTHENRELEASE: "Ch\u1ea1m r\u1ed3i th\u1ea3 \n \u0111\u1ec3 t\u1ea1o m\u1ed9t nh\xf3m \n tr\u1ee9ng c\xf9ng m\xe0u",
            SHOOT: "B\u1eafn \u0111\u1ec3 \n ph\xe1 tr\u1ee9ng",
            PLAYAGAIN: "Ch\u01a1i v\xe1n m\u1edbi",
            FREEGIFT: "H\u1ed9p qu\xe0 may m\u1eafn",
            WATCHGIFT: "Xem video \u0111\u1ec3 nh\u1eadn h\u1ed9p qu\xe0",
            WATCHVIDEO: "Xem video"
        }, cc._RF.pop()
    }, {}]
}, {}, ["LabelLocalized", "en", "th", "vi", "i18n", "polyglot", "ClaimGift", "ClockCtrl", "DialogAdsCtl", "DialogCtl", "FlyEgg", "GameOverCtl", "HomeRanking", "LoadGame", "PaymentCtl", "ProgressBar", "SpinBonus", "UserRankingController", "UtilsFB", "AdController", "AdsCtl", "AudioMng", "GameCtl", "HomeCtl", "Globals", "ScreenShotNode", "BallLayout", "FallCrack", "FallEffect", "FallEgg"]);