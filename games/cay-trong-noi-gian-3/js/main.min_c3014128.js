var __reflect = this && this.__reflect || function(e, t, a) {
        e.__class__ = t, a ? a.push(t) : a = [t], e.__types__ = e.__types__ ? a.concat(e.__types__) : a
    },
    __extends = this && this.__extends || function(e, t) {
        function a() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        a.prototype = t.prototype, e.prototype = new a
    },
    __awaiter = this && this.__awaiter || function(e, t, a, n) {
        return new(a || (a = Promise))(function(i, o) {
            function r(e) {
                try {
                    l(n.next(e))
                } catch (t) {
                    o(t)
                }
            }

            function s(e) {
                try {
                    l(n["throw"](e))
                } catch (t) {
                    o(t)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new a(function(t) {
                    t(e.value)
                }).then(r, s)
            }
            l((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function a(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(a) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; l;) try {
                if (i = 1, o && (r = o[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(r = r.call(o, a[1])).done) return r;
                switch (o = 0, r && (a = [0, r.value]), a[0]) {
                    case 0:
                    case 1:
                        r = a;
                        break;
                    case 4:
                        return l.label++, {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        l.label++, o = a[1], a = [0];
                        continue;
                    case 7:
                        a = l.ops.pop(), l.trys.pop();
                        continue;
                    default:
                        if (r = l.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                            l = 0;
                            continue
                        }
                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                            l.label = a[1];
                            break
                        }
                        if (6 === a[0] && l.label < r[1]) {
                            l.label = r[1], r = a;
                            break
                        }
                        if (r && l.label < r[2]) {
                            l.label = r[2], l.ops.push(a);
                            break
                        }
                        r[2] && l.ops.pop(), l.trys.pop();
                        continue
                }
                a = t.call(e, l)
            } catch (n) {
                a = [6, n], o = 0
            } finally {
                i = r = 0
            }
            if (5 & a[0]) throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
        var i, o, r, s, l = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: a(0),
            "throw": a(1),
            "return": a(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    },
    UIBase = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._eventObjs = [], t._eventTypes = [], t._eventCallbacks = [], t._lockBtn = !1, t._lockTime = !1, t._onRemoveUI = null, t._thisObj = null, t
        }
        return __extends(t, e), t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        }, t.prototype.BandTap = function(e, t, a) {
            void 0 === a && (a = !0);
            var n = this;
            e.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                n._lockBtn || (n._lockBtn = !0, setTimeout(function() {
                    n._lockBtn = !1
                }, 200), t.call(n)), a && GAudio.PlaySoundByName("buttonclick_m4a", 1, 1)
            }, n), n._eventObjs.push(e), n._eventTypes.push(egret.TouchEvent.TOUCH_TAP), n._eventCallbacks.push(t)
        }, t.prototype.BandTapEx = function(e, t, a) {
            var n = this;
            e.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                n._lockBtn || (n._lockBtn = !0, setTimeout(function() {
                    n._lockBtn = !1
                }, 200), a.call(n, t))
            }, n), n._eventObjs.push(e), n._eventTypes.push(egret.TouchEvent.TOUCH_TAP), n._eventCallbacks.push(a)
        }, t.prototype.RemoveUI = function() {
            for (; null != this._eventObjs && this._eventObjs.length > 0;) {
                var e = this._eventObjs.pop(),
                    a = this._eventTypes.pop(),
                    n = this._eventCallbacks.pop();
                e.removeEventListener(a, n, this)
            }
            this._eventObjs = null, this._eventTypes = null, this._eventCallbacks = null, null != this.parent && (this.parent.removeChild(this), t.uiCount--), this._lockTime && GTime.Resume();
            var i = this._thisObj,
                o = this._onRemoveUI;
            this._thisObj = null, this._onRemoveUI = null, null != o && o.call(i)
        }, t.prototype.AddUI = function() {
            this.width = GameView.instance.uiLayer.width, this.height = GameView.instance.uiLayer.height, GameView.instance.uiLayer.addChild(this)
        }, t.prototype.AddTopUI = function() {
            this.width = GameView.instance.uiLayer.width, this.height = GameView.instance.uiLayer.height, GameView.instance.topLayer.addChild(this)
        }, t.prototype.AddOfflineUI = function() {
            this.width = GameView.instance.uiLayer.width, this.height = GameView.instance.uiLayer.height, GameView.instance.offlineLayer.addChild(this)
        }, t.prototype.LockTime = function() {
            GTime.Pause(), this._lockTime = !0
        }, t.uiCount = 0, t
    }(eui.Component);
__reflect(UIBase.prototype, "UIBase", ["eui.UIComponent", "egret.DisplayObject"]);
var UIAutoCompose = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.cnumber = 0, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.AddUI(), e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t.btnClose, t.CloseUI), t.BandTap(t.btnStar1, t.StarReward1), t.BandTap(t.btnVideo, t.VideoReward), 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.cnumber = 1, t.btnStar1.visible = MainData.GetCompound() > 0, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo() && !t.btnStar1.visible);
        MainData.GetAutoComposeCostStar();
        switch (t.uiBanner.visible = !1, t.uiHtTop.visible = !1, GameChannel) {
            case 2:
                0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1), ADSDK.uiADTop = t.uiAD, ADSDK.ShowNative(7, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 4:
                t.uiHtTop.visible = !0, t.uiAD.visible = !1, 0 == ADSDK.kds.getBlack() || 1 == ADSDK.kds.getBlack() ? ADSDK.ShowBannerAd(1) : (ADSDK.uiBannerAD = t.uiBanner, ADSDK.ShowNative(1, ADSDK.bannerChangeNative_id1, ADSDK.BannerChangeNative));
                break;
            case 3:
                t.bg.bottom = 200, 0 != ADSDK.kds.getBlack() && 1 != ADSDK.kds.getBlack() && t.DelayBtnClose(2500), ADSDK.ShowBannerAd(1);
                break;
            case 5:
                t.bg.bottom = 200, ADSDK.ShowBannerAd(1), 0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 7:
                t.bg.bottom = 200, 0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3), ADSDK.ShowBannerAd(1), "douyin_lite" != platform.GetToutiaoApp() && 0 == MainData.GetRefreshData("toutiao_AutoComposeCount") ? t.btnVideo.iconDisplay.source = "share_png" : t.btnVideo.iconDisplay.source = "video_png";
                break;
            case 8:
                t.bg.bottom = 200, 0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 9:
                t.bg.bottom = 200, ADSDK.ShowBannerAd(1);
            case 10:
                t.bg.bottom = 200, t.DelayBtnClose(2e3)
        }
    }, t.prototype.UpdateUI = function() {
        var e = this;
        2 == GameChannel || 4 == GameChannel ? e.btnVideo.visible = MainData.GetRefreshData("AutoFreeCount") >= 3 : e.btnVideo.visible = !0
    }, t.prototype.CloseUI = function() {
        this.uiBanner.Clear(), ADSDK.HideBannerAd(), this.uiHtTop.RemoveUI(), this.uiAD.Clear(), this.RemoveUI()
    }, t.prototype.VideoReward = function() {
        var e = this;
        7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp() && 0 == MainData.GetRefreshData("toutiao_AutoComposeCount") ? ADSDK.TouTiaoRecorderShare(function() {
            MainData.SetRefreshData("toutiao_AutoComposeCount", 1), platform.TaTrack("assist_action", {
                assistaction_type: 5
            }), e.GetReward(1)
        }, this) : MYAD.Video_UIAutoCompose(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 5
            }), e.GetReward(1)
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this)
    }, t.prototype.StarReward = function() {
        var e = MainData.GetAutoComposeCostStar();
        if (MainData.role.star >= e) {
            if (2 == GameChannel || 4 == GameChannel) {
                var t = MainData.GetRefreshData("AutoFreeCount");
                3 > t && MainData.SetRefreshData("AutoFreeCount", t + 1)
            }
            MainData.role.star -= e, platform.TaTrack("gem_use_or_gain", {
                useOrGain: 0,
                gemNum: e,
                gemtype: 1,
                gemdetails: -1
            }), this.GetReward(2)
        } else MainData.Alert_NotEnoughStar();
        MYAD.aldynthetic()
    }, t.prototype.StarReward1 = function() {
        MainData.AddCustomDataValue("ConmPound", 1), egret.updateAllScreens(), this.cnumber = MainData.GetCompound(), this.GetReward(0), MYAD.aldynthetic()
    }, t.prototype.GetReward = function(e) {
        void 0 === e && (e = 1), MainData.SetRefreshData("btnAutoCompose", 1), 0 == e ? MainData.role.autoComposeTick = GUtil.SystemMillionSecond() + 6e4 : 1 == e ? MainData.GetAutoComposeDuration() > 0 ? MainData.role.autoComposeTick += 2 * MainData.GameValue(13) * 1e3 : MainData.role.autoComposeTick = GUtil.SystemMillionSecond() + 2 * MainData.GameValue(13) * 1e3 : MainData.GetAutoComposeDuration() > 0 ? MainData.role.autoComposeTick += 1e3 * MainData.GameValue(13) : MainData.role.autoComposeTick = GUtil.SystemMillionSecond() + 1e3 * MainData.GameValue(13), this.CloseUI()
    }, t.prototype.DelayBtnClose = function(e) {
        var t = this;
        t.btnClose.visible = !1, setTimeout(function() {
            t.btnClose.visible = !0
        }, e)
    }, t
}(UIBase);
__reflect(UIAutoCompose.prototype, "UIAutoCompose");
var UIBank = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.AddUI(), e.LockTime(), e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.img.source = MainData.imgSheet.getTexture("Gold chart_png"), t.BandTap(t.btnBack, t.CloseUI);
        var a = t.btnStar.getChildAt(2);
        switch (a.text = MainData.GetBankCostStar() + "", MainData.role.money2 = Math.min(MainData.role.money2, MainData.GetBankMaxValue()), t.lMoney.text = GUtil.BigNumber(MainData.role.money2), t.BandTap(t.btnVideo, t.VideoReward), t.btnVideo.visible = !0, t.BandTap(t.btnStar, t.StarReward), t.slider_388.width = 388 * (MainData.role.money2 / MainData.GetBankMaxValue()), t.btnStar.visible = MainData.role.money2 > 0, t.btnVideo.visible = MainData.role.money2 > 0, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo() && MainData.role.money2 > 0), GameChannel) {
            case 2:
                0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1), ADSDK.uiADTop = t.uiAD, ADSDK.ShowNative(8, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 4:
                ADSDK.uiADTop = t.uiAD, ADSDK.ShowNative(8, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 9:
            case 5:
            case 7:
            case 3:
                ADSDK.ShowBannerAd(1)
        }
        if (3 == GameChannel) {
            var n = MainData.GetRefreshData("qqVideo_19");
            2 > n ? this.btnVideo.iconDisplay.source = "video_png" : this.btnVideo.iconDisplay.source = "sharepoint_png"
        }
        7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp() && (t.btnVideo.iconDisplay.source = "share_png")
    }, t.prototype.CloseUI = function() {
        this.uiAD.Clear(), this.uiHtTop.RemoveUI(), this.RemoveUI(), ADSDK.HideBannerAd()
    }, t.prototype.VideoReward = function() {
        var e = this;
        7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp() ? ADSDK.TouTiaoRecorderShare(function() {
            e.GetReward(3)
        }, this) : MYAD.Video_UIBank(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 10
            }), e.GetReward(3)
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this)
    }, t.prototype.StarReward = function() {
        var e = MainData.GetBankCostStar();
        MainData.role.star >= e ? (MainData.role.star -= e, platform.TaTrack("gem_use_or_gain", {
            useOrGain: 0,
            gemNum: e,
            gemtype: 2,
            gemdetails: -1
        }), this.GetReward(1)) : MainData.Alert_NotEnoughStar()
    }, t.prototype.GetReward = function(e) {
        var t = MainData.role.money2 * e;
        MainData.gbattle.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, t), MainData.role.money2 = 0, this.CloseUI()
    }, t
}(UIBase);
__reflect(UIBank.prototype, "UIBank");
var UIBattle = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.battle = null, t.money = -1, t.money2 = -1, t.star = -1, t.lv = -1, t.exp = -1, t.buyCount = -1, t.currBuyTankId = -1, t.tank = null, t.toutiaoIsRecording = !0, t._lockRankView = !1, t.isFirstBuyTank = !0, t.spdEff = null, t
    }
    return __extends(t, e), t.prototype.Init = function(e) {
        this.battle = e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.imgDe.source = MainData.imgSheet.getTexture("Demolition icon_png"), t.imgUp.source = MainData.imgSheet.getTexture("up_png"), t.btnRankUp.source = MainData.imgSheet.getTexture("EXPfull_png"), t.BandTap(t.btnBuy, t.BuyTank), t.BandTap(t.btnRankUp, function() {
            MainData.role.lv == MainData.MaxRankLv && UIPopTips.ShowTips("您的段位已达到最高，无法再进行升级"), UIRank.Show()
        }), t.BandTap(t.expBorder, function() {
            MainData.role.lv == MainData.MaxRankLv && UIPopTips.ShowTips("您的段位已达到最高，无法再进行升级"), UIRank.Show()
        }), t.BandTap(t.btnSpdup, UISpdUp.Show), t.BandTap(t.btnAuto, UIAutoCompose.Show), t.BandTap(t.btnShop, UIShop.Show), t.BandTap(t.btnPig, UIBank.Show), t.BandTap(t.btnTask, UITask.Show), t.BandTap(t.btnStars, UIBuyDiamond.Show), t.BandTap(t.btnDungeon, UIDungeon.Show), t.BandTap(t.image, UIDungeon.Show), t.BandTap(t.btnLuckyWheel, UILuckyWheel.Show), t.BandTap(t.btnLuckyWheel_51, UILuckyWheel_51Activity.Show), t.BandTap(t.btnToutiao, t.ToutiaoRecord), t.BandTap(t.btnToutiaoShare, t.ToutiaoOnShare), t.BandTap(t.btnLadder, function() {
            var e = UILadder.Show();
            e.UpDataView()
        }), t.BandTap(t.btnMoreGame, t.OnClickQQAppBox), t.BandTap(t.gEffectView, function() {
            UIShop.isShowPage2 = !0, platform.TaTrack("Privilege", {
                discount_level: void 0 != MainData.role.privileges[1] ? MainData.role.privileges[1] : 1,
                strength_level: void 0 != MainData.role.privileges[2] ? MainData.role.privileges[2] : 1
            }), UIShop.Show()
        }), t.uiBulletScreen.visible = 7 == GameChannel, t.btnBulletScreen.visible = 7 == GameChannel, t.BandTap(t.btnBulletScreen, function() {
            t.uiBulletScreen.OnBtnBSClick(t.btnBulletScreen)
        }), t.BandTap(t.btnLimitActive, UIActiveBag.Show), t.btnToutiao.visible = 7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp(), t.lToutiao.visible = 7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp(), t.flagToutiao.visible = 7 == GameChannel && MainData.GetRefreshData("toutiaoShare") < 3 && "douyin_lite" != platform.GetToutiaoApp(), t.guideEffectAuto.visible = !1, t.guideEffectSpd.visible = !1, t.flyBox.visible = !1, t.btnToutiaoShare.visible = !1, t.lToutiaoShare.visible = !1, t.gNewRankView.visible = !1, t.shopFreeFlag.visible = !1, t.UpdateCurrBuyTankID(), t.UpdateUI(), t.effect.play(0), t.uiHts.visible = 4 == GameChannel || 5 == GameChannel || 6 == GameChannel, t.btnLadder.visible = 3 == GameChannel || 6 == GameChannel, t.btnMoreGame.visible = 3 == GameChannel || 7 == GameChannel, 7 == GameChannel && ("XiGua" == platform.GetToutiaoApp() && (t.btnMoreGame.visible = !1), "douyin_lite" != platform.GetToutiaoApp() && t.StartGameRecord()), t.btnActiveAnim.play(0), t.btnLimitActive.visible = !1, !MainData.isShow51Activity && 0 != MainData.GetActivityDisEndTime() && MainData.isActivityRange && GTime.startTick(t.AutoShow51Activity, t, !0, !0)
    }, t.prototype.AutoShow51Activity = function() {
        var e = this;
        MainData.GetCustomData(GUIDE_DATANAME) <= 1 || null == GUtil.HasUI(UISignDay) && null == GUtil.HasUI(UIOfflineReward) && (MainData.isShow51Activity || (UILuckyWheel_51Activity.Show(), MainData.isShow51Activity = !0, GTime.stopTick(e.AutoShow51Activity, e)))
    }, t.prototype.GuideAnim = function() {
        var e = this,
            t = null;
        (e.guideEffectAuto.visible || e.guideEffectSpd.visible) && (e.guideEffectAuto.visible && (t = e.guideEffectAuto), e.guideEffectSpd.visible && (t = e.guideEffectSpd), egret.Tween.get(t).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, 500).call(function() {
            egret.Tween.get(t).to({
                scaleX: .5,
                scaleY: .5
            }, 500).call(function() {
                e.GuideAnim()
            }, e)
        }, e))
    }, t.prototype.OnClickQQAppBox = function() {
        3 == GameChannel ? platform.ShowAppBox() : 7 == GameChannel && platform.TuotiaoShowButton()
    }, t.prototype.StartGameRecord = function() {
        var e = this;
        platform.IsDebugMode() || (e.toutiaoIsRecording = !0, e.lToutiao.text = "录制中", e.btnToutiao.getChildAt(1).visible = !0, platform.ToutiaoStartRecord(function() {
            e.toutiaoIsRecording = !1, e.lToutiao.text = "Kỷ lục", e.btnToutiao.getChildAt(1).visible = !1
        }, e))
    }, t.prototype.ToutiaoRecord = function() {
        var e = this;
        e.toutiaoIsRecording ? (e.toutiaoIsRecording = !1, e.lToutiao.text = "Kỷ lục", e.btnToutiao.getChildAt(1).visible = !1, platform.ToutiaoStopRecord(null, null, function() {
            e.btnToutiaoShare.visible = !0, e.lToutiaoShare.visible = !0
        })) : (e.toutiaoIsRecording = !0, e.btnToutiaoShare.visible = !1, e.lToutiaoShare.visible = !1, e.lToutiao.text = "录制中", e.btnToutiao.getChildAt(1).visible = !0, platform.ToutiaoStartRecord(function() {
            e.toutiaoIsRecording = !1, e.lToutiao.text = "Kỷ lục", e.btnToutiao.getChildAt(1).visible = !1
        }, e))
    }, t.prototype.ToutiaoShareOnSucc = function() {
        if (!(MainData.GetRefreshData("toutiaoShare") >= 3)) {
            var e = MainData.GetRefreshData("toutiaoShare");
            MainData.SetRefreshData("toutiaoShare", e + 1), MainData.role.star += 10, UIPopDialog.ShowOKOnly("获得10钻石", "Stars_png", function() {}, this), this.btnToutiaoShare.visible = !1, this.lToutiaoShare.visible = !1, platform.TaTrack("gem_use_or_gain", {
                useOrGain: 1,
                gemNum: 10,
                gemtype: 17,
                gemdetails: -1
            })
        }
    }, t.prototype.ToutiaoOnShare = function() {
        var e = this;
        e.btnToutiaoShare.visible = !1, e.lToutiaoShare.visible = !1, platform.ToutiaoShare(this.ToutiaoShareOnSucc, this)
    }, t.prototype.ShopFreeFlagAnim = function() {
        var e = this;
        e.shopFreeFlag.visible && (e.shopFreeFlag.scaleX = 1.3, e.shopFreeFlag.scaleY = 1.3, egret.Tween.get(e.shopFreeFlag).to({
            scaleX: 1.6,
            scaleY: 1.6
        }, 200).call(function() {
            egret.Tween.get(e.shopFreeFlag).to({
                scaleX: 1.2,
                scaleY: 1.2
            }, 200).call(function() {
                e.ShopFreeFlagAnim()
            }, e)
        }, e))
    }, t.prototype.UpdateEffectView = function() {
        var e = this;
        if (void 0 != MainData.role.privileges[1]) {
            var t = MainData.role.privileges[1];
            e.buyEffect.text = "Giam gia (" + 100 * MainData.allSeeds.privilegs[1].lvs[t].rate + "%)"
        }
        if (void 0 != MainData.role.privileges[2]) {
            var a = MainData.role.privileges[2];
            e.attEffect.text = "nang cao (" + 100 * MainData.allSeeds.privilegs[2].lvs[a].rate + "%)"
        }
    }, t.prototype.UpdateUI = function() {
        var e = this;
        if (e.money != MainData.role.money && (e.money = MainData.role.money, e.lMoney.text = GUtil.BigNumber(e.money), e.UpdateMoneyColor()), e.star != MainData.role.star && (e.star = MainData.role.star, e.lStar.text = e.star.toString()), e.lv != MainData.role.lv || e.exp != MainData.role.exp) {
            e.lv = MainData.role.lv;
            var t = MainData.allSeeds.playerRanks[e.lv];
            t.name;
            e.exp = MainData.role.exp;
            var a = e.exp / t.nextExp;
            a = Math.min(1, a), e.slider27_308.width = 27 + 254 * a, e._lockRankView || (e.imgRank.source = UIRank.GetRankImg(MainData.role.lv), e.imgRankName.source = UIRank.GetRankNameImg(MainData.role.lv), e.imgRankLv2.source = UIRank.GetRankLvImg(MainData.role.lv)), e.btnRankUp.visible = a >= 1, this.LevUpAction.play(0)
        }
        e.money2 != MainData.role.money2 && (e.money2 = MainData.role.money2);
        var n = MainData.role.buyHistory[e.currBuyTankId];
        if (null == n && (n = 0), n != e.buyCount) {
            e.buyCount = n;
            var i = MainData.GetTankCost(e.currBuyTankId);
            e.btnBuy.label = GUtil.BigNumber(i), e.UpdateMoneyColor()
        }
        var o = e.shopFreeFlag.visible;
        e.shopFreeFlag.visible = GUtil.SystemMillionSecond() >= MainData.GetCustomData("shop_videobuy_cdTick") && MainData.role.highestTank - 4 > 0, o != e.shopFreeFlag.visible && e.shopFreeFlag.visible && e.ShopFreeFlagAnim(), e.buffSpdUp.Update(), e.buffAutoCompose.Update(), e.buffX5Money.Update(), e.flyBox.Update(), e.btnTask.getChildAt(1).visible = UITask.ShowAchieveDoc() || UITask.ShowTaskDoc(), e.UpdateWheelRedPoint(), e.btnAuto.getChildAt(1).visible = MainData.GetRefreshData("btnAutoCompose") < 1, e.btnSpdup.getChildAt(1).visible = MainData.GetRefreshData("btnSpd") < 1, e.btnLimitActive.getChildAt(1).visible = 0 == MainData.GetCustomData("isGetLuckyBag") || 0 == MainData.GetRefreshData("isEliteBag"), e.UpdateEffectView(), e.SpdEffectPlay(), e.flagToutiao.visible = 7 == GameChannel && MainData.GetRefreshData("toutiaoShare") < 3 && "douyin_lite" != platform.GetToutiaoApp(), e.btnLimitActive.visible = MainData.GetCustomData(GUIDE_DATANAME) >= 1, e.btnLuckyWheel_51.visible = MainData.isActivityRange && 0 != MainData.GetActivityDisEndTime(), e.btnLuckyWheel.visible = !e.btnLuckyWheel_51.visible
    }, t.prototype.PlayNewRankAnim = function() {
        var e = this;
        e.gNewRankView.visible = !0, e._lockRankView = !0, e.NewRank.play(1), e.imgNRank.source = UIRank.GetRankImg(MainData.role.lv), e.imgNRankName.source = UIRank.GetRankNameImg(MainData.role.lv), e.imgNRankLv2.source = UIRank.GetRankLvImg(MainData.role.lv), GAudio.PlaySoundByName("hugewave_m4a", 1, 1), UIPopTips.ShowTips("僵尸变得更强大了！"), e.NewRank.once(egret.Event.COMPLETE, function() {
            e._lockRankView = !1, e.gNewRankView.visible = !1, e.UpdateUI()
        }, e)
    }, t.prototype.UpdateMoneyColor = function() {
        var e = this,
            t = MainData.GetTankCost(e.currBuyTankId),
            a = e.btnBuy.labelDisplay;
        a.style = t > MainData.role.money ? "d" : ""
    }, t.prototype.GetTankCostDecComposeRate = function(e) {
        var t = MainData.allSeeds.tanks[e],
            a = MainData.GetTankCost(e),
            n = a / t.composeRate;
        return n
    }, t.prototype.UpdateCurrBuyTankID = function() {
        for (var e = this, t = Math.max(MainData.role.highestTank - 5, 1), a = Math.max(1, t - 3), n = e.GetTankCostDecComposeRate(a), i = a; t >= i; i++) {
            var o = e.GetTankCostDecComposeRate(i);
            n > o && (a = i, n = o)
        }
        if (a != e.currBuyTankId) {
            e.currBuyTankId = a, null != e.tank && e.tank.Delete(), e.tank = GTank.NewTankWithOutPool(e.currBuyTankId);
            var r = e.btnBuy;
            r.gTank.addChild(e.tank)
        }
    }, t.prototype.BuyTank = function() {
        var e = this,
            t = e.battle.GetEmptySlotIdx(5),
            a = MainData.GetTankCost(e.currBuyTankId);
        if (t >= 0)
            if (MainData.role.money >= a) {
                MainData.role.money -= a;
                var n = MainData.GetCustomData("freeLvTick"),
                    i = GUtil.SystemMillionSecond() >= n,
                    o = e.currBuyTankId + Math.min(Math.max(Math.max(MainData.role.highestTank - 4, 0) - e.currBuyTankId, 0), 3);
                if (o > e.currBuyTankId && i && o < MainData.MaxTankLv && o > 4 && GUtil.RandomRangeFloat(0, 100) < MainData.GameValue(24)) {
                    var r = GUtil.SystemMillionSecond() + Math.min(5e3 * e.currBuyTankId, 3e4);
                    UIFreeTankUp.Show(function() {
                        MainData.SetCustomData("freeLvTick", r), MainData.CreateNewTank(o)
                    }, function() {
                        MainData.CreateNewTank(e.currBuyTankId)
                    }, e, e.currBuyTankId, o)
                } else MainData.CreateNewTank(e.currBuyTankId);
                e.UpdateCurrBuyTankID()
            } else UIFreeOrBuyTank.Show(e.currBuyTankId);
        else MainData.Alert_NotEmptySlot();
        MainData.SetCustomData("HintTimer", GUtil.SystemMillionSecond())
    }, t.prototype.FlyIcon = function(e, t, a, n, i, o, r, s, l, d, u) {
        void 0 === l && (l = 0), void 0 === d && (d = 0), void 0 === u && (u = !1);
        var c = this,
            h = GFlyIcon.GetFlyMoney(e);
        h.x = t, h.y = a, GameView.instance.topLayer.addChild(h);
        var p = GUtil.RandomRangeFloat(-l, l),
            D = p / 2,
            v = 40 + GUtil.RandomRangeFloat(0, d),
            f = 300 + GUtil.RandomRangeFloat(-100, 100);
        egret.Tween.get(h).to({
            x: t + D,
            y: a - v
        }, 300, egret.Ease.quadOut).to({
            x: t + p,
            y: a
        }, 300).to({
            y: a + 1
        }, f).to({
            x: n,
            y: i
        }, 300).call(function() {
            MainData.role.money += o, MainData.role.money2 += r, MainData.role.star += s, h.Release(), u && c.UpdateUI()
        }, null)
    }, t.prototype.FlyStars = function(e, t, a) {
        for (var n = this, i = "Stars_png", o = n.imgStar.x, r = n.imgStar.y, s = Math.floor(a / 5), l = a % 5, d = 1; s >= d; d++) n.battle.RunDelay(.1 * d, function() {
            n.FlyIcon(i, e, t, o, r, 0, 0, 5, 50, 10, !0)
        }, n);
        l > 0 && n.FlyIcon(i, e, t, o, r, 0, 0, l)
    }, t.prototype.FlyMoneys = function(e, t, a) {
        for (var n = this, i = "money_png", o = n.imgMoney.x, r = n.imgMoney.y, s = a.toString().length, l = a / s, d = 1; s >= d; d++) n.battle.RunDelay(.1 * d, function() {
            n.FlyIcon(i, e, t, o, r, l, 0, 0, 50, 20, !0)
        }, n)
    }, t.prototype.MoneyEff = function(e) {
        var t = this;
        t.battle.RunDelay(1, function() {
            switch (e) {
                case 0:
                    GEffect.OnceEffect("eff_2", +t.imgStar.x + 30, t.imgStar.y + 30, 1.5);
                    break;
                case 1:
                    GEffect.OnceEffect("eff_3", +t.imgMoney.x + 32, t.imgMoney.y + 30, 1.5);
                    break;
                case 2:
                    t.PigShake.play(0)
            }
        }, t)
    }, t.prototype.UpdateWheelRedPoint = function() {
        var e = this,
            t = MainData.GetLuckWheelDay() > 0;
        e.btnLuckyWheel.getChildAt(1).visible = t
    }, t.prototype.SpdEffectPlay = function() {
        var e = this;
        e.validateNow(), null == e.spdEff && MainData.GetSpdUpDuration() > 0 && (e.spdEff = new GActor("火", "fire", 1.7, 1.7), e.spdEff.x = e.btnSpdup.x + 45, e.spdEff.y = e.btnSpdup.y + 55, e.gBottomView.addChildAt(e.spdEff, 4), e.spdEff.PlayAnim("newAnimation")), MainData.GetSpdUpDuration() <= 0 && null != e.spdEff && (e.spdEff.OnDestroy(), e.spdEff = null)
    }, t
}(UIBase);
__reflect(UIBattle.prototype, "UIBattle");
var UIShop_Cell = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.owner = null, t.sd = null, t.btns = null, t.mode = 0, t.cost = 0, t.tank = null, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.sAtk_156.width = 156 * t.sd.showAtk / 100, t.sSpd_156.width = 156 * t.sd.showSpd / 100, t.UpdateBtnCost(), t.locked.visible = 99 == t.mode, t.btns = [t.btnBuy, t.btnVideo, t.btnStar];
        for (var a = 0; a < t.btns.length; a++) t.btns[a].visible = a == t.mode;
        t.BandTap(t.btnBuy, t.MoneyBuy), t.BandTap(t.btnVideo, t.VideoBuy), t.BandTap(t.btnStar, t.StarBuy), 1 == t.mode && GTime.startTick(t.Update, t, !1, !0), t.ShopFreeFlagBtnAnim()
    }, t.prototype.InitTank = function() {
        var e = this;
        e.tank = GTank.NewTankWithOutPool(e.sd.id), e.owner.gTanks1.addChild(e.tank), e.tank.x = e.slot.x, e.tank.y = e.slot.y + 30 + e.y
    }, t.prototype.Update = function() {
        var e = this,
            t = MainData.GetCustomData("shop_videobuy_cdTick"),
            a = GUtil.SystemMillionSecond() + 1e3 * Math.max(e.sd.id * MainData.GameValue(16), 30);
        t > a && MainData.SetCustomData("shop_videobuy_cdTick", a);
        var n = GUtil.SystemMillionSecond();
        e.btnVideo.visible = n >= t && MainData.role.highestTank - 4 > 0, e.btnStar.visible = 1 == e.mode && !e.btnVideo.visible
    }, t.prototype.ShopFreeFlagBtnAnim = function() {
        var e = this;
        e.btnVideo.visible && (e.btnVideo.getChildAt(4).scaleX = 1, e.btnVideo.getChildAt(4).scaleY = 1, egret.Tween.get(e.btnVideo.getChildAt(4)).to({
            scaleX: 1.3,
            scaleY: 1.3
        }, 200).call(function() {
            egret.Tween.get(e.btnVideo.getChildAt(4)).to({
                scaleX: 1,
                scaleY: 1
            }, 200).call(function() {
                e.ShopFreeFlagBtnAnim()
            }, e)
        }, e))
    }, t.prototype.CheckSlot = function() {
        var e = MainData.gbattle.GetEmptySlotIdx(5);
        return e >= 0 ? !0 : (UIPopTips.ShowTips("没有空位了"), !1)
    }, t.prototype.UpdateBtnCost = function() {
        var e = this;
        if (0 == e.mode) e.cost = MainData.GetTankCost(e.sd.id), e.btnBuy.label = GUtil.BigNumber(e.cost);
        else if (1 == e.mode || 2 == e.mode) {
            e.cost = e.sd.priceStars;
            var t = e.btnStar.getChildAt(2);
            t.text = e.cost + "";
            e.btnStar.getChildAt(3)
        }
    }, t.prototype.BuyTankSucc = function() {
        var e = this;
        MainData.CreateNewTank(e.sd.id), UIPopTips.ShowTips("购买成功!"), e.UpdateBtnCost()
    }, t.prototype.MoneyBuy = function() {
        var e = this;
        e.CheckSlot() && (e.cost <= MainData.role.money ? (MainData.role.money -= e.cost, platform.TaTrack("shop_action", {
            Item_id: e.sd.id,
            Use_resource_type: 2,
            Use_num: e.cost
        }), e.BuyTankSucc()) : MainData.Alert_NotEnoughMoney())
    }, t.prototype.VideoBuy = function() {
        var e = this;
        e.CheckSlot() && MYAD.Video_UIShop_BuyTank(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 6
            }), platform.TaTrack("shop_action", {
                Item_id: e.sd.id,
                Use_resource_type: 3,
                Use_num: -1
            }), e.BuyTankSucc();
            var t = GUtil.SystemMillionSecond() + 1e3 * Math.max(e.sd.id * MainData.GameValue(16), 30);
            MainData.SetCustomData("shop_videobuy_cdTick", t)
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, e)
    }, t.prototype.StarBuy = function() {
        var e = this;
        e.CheckSlot() && (MainData.role.star >= e.cost ? (MainData.role.star -= e.cost, platform.TaTrack("gem_use_or_gain", {
            useOrGain: 0,
            gemNum: e.cost,
            gemtype: 7,
            gemdetails: e.sd.id
        }), platform.TaTrack("shop_action", {
            Item_id: e.sd.id,
            Use_resource_type: 1,
            Use_num: e.cost
        }), e.BuyTankSucc(), MainData.gbattle.ui.UpdateUI()) : MainData.Alert_NotEnoughStar())
    }, t.prototype.SetData = function(e, t) {
        this.sd = e, this.mode = t
    }, t.prototype.CloseUI = function() {
        this.btns = null, this.owner = null, null != this.tank && this.tank.Delete(), 1 == this.mode && GTime.stopTick(this.Update, this), null != this.parent && this.parent.removeChild(this)
    }, t
}(UIBase);
__reflect(UIShop_Cell.prototype, "UIShop_Cell");
var UIShop = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.markNum = 0, t.cells = [], t.cells2 = [], t.videoIndex = 0, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.AddUI(), e.LockTime(), e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var a = this;
        a.shopImg.source = MainData.imgSheet.getTexture("Store Title_png"), a.BandTap(a.btnBack, a.CloseUI), a.BandTap(a.btnPage1, a.ShowPage1), a.BandTap(a.btnPage2, a.ShowPage2), a.BandTap(a.shopImg, a.ClickShopMark), a.CreateCells1(), a.UpdateCells2(), a.validateNow();
        for (var n = 0; n < a.cells.length; n++) a.cells[n].InitTank();
        for (var n = 0; n < a.cells2.length; n++) a.cells2[n].InitLabels();
        switch (t.isShowPage2 ? a.ShowPage2() : a.ShowPage1(), GameChannel) {
            case 2:
            case 4:
                ADSDK.uiADTop = a.uiAD, ADSDK.ShowNative(8, ADSDK.bannerChangeNative_id, ADSDK.Native_2)
        }
        a.SetShopTankPageLocation()
    }, t.prototype.UpdateCells2 = function() {
        for (var e = {}, t = 0, a = 1; 1e3 > a; a++) {
            var n = !0;
            for (var i in MainData.allSeeds.privilegs) {
                null == e[i] && (e[i] = 0);
                var o = e[i];
                if (!(o >= 2)) {
                    n = !1;
                    var r = MainData.allSeeds.privilegs[i],
                        s = r.lvs[a];
                    if (!s) break;
                    var l = null;
                    t < this.cells2.length ? l = this.cells2[t] : (l = new UIShop_Cell2, l.owner = this, this.gCells2.addChild(l), this.cells2.push(l)), l.SetData(r, a), t++, l.locked.visible && (o++, e[i] = o)
                }
            }
            if (n) break
        }
    }, t.prototype.CreateCells1 = function() {
        var e = this,
            t = Math.max(MainData.role.highestTank - 5, 1),
            a = t + 1,
            n = t + 3;
        a = GUtil.RandomRangeInt(a, n + 1), e.videoIndex = t;
        for (var i = 1; n >= i; i++) {
            var o = 0;
            i == a ? o = 10 != GameChannel || platform.H5_4399_IsShowVideo() ? 1 : 2 : i > t && (o = 2);
            var r = MainData.allSeeds.tanks[i],
                s = new UIShop_Cell;
            s.owner = e, s.SetData(r, o), e.gCells1.addChild(s), e.cells.push(s)
        }
        for (var i = n + 1; n + 5 > i; i++) {
            var r = MainData.allSeeds.tanks[i];
            if (!r) break;
            var s = new UIShop_Cell;
            s.owner = e, s.SetData(r, 99), e.gCells1.addChild(s), e.cells.push(s)
        }
    }, t.prototype.CloseUI = function() {
        t.isShowPage2 = !1;
        for (var e = 0; e < this.cells.length; e++) this.cells[e].CloseUI();
        this.cells = null;
        for (var e = 0; e < this.cells2.length; e++) this.cells2[e].CloseUI();
        this.cells2 = null, this.uiAD.Clear(), this.RemoveUI()
    }, t.prototype.ShowPage1 = function() {
        var e = this;
        platform.TaTrack("shop_plantPage", {}), e.btnPage1.source = "Page sign_png", e.btnPage2.source = "Page-sign-off_png", e.gTanksView.visible = !0, e.gOthersView.visible = !1
    }, t.prototype.ShowPage2 = function() {
        var e = this;
        e.btnPage1.source = "Page-sign-off_png", e.btnPage2.source = "Page sign_png", e.gTanksView.visible = !1, e.gOthersView.visible = !0
    }, t.prototype.ClickShopMark = function() {
        var e = this;
        e.markNum = e.markNum + 1, e.markNum > 20 && (UIPopTips.ShowTips("changshashilieyanniaowangluokejiyouxiangongsi"), e.markNum = 0)
    }, t.prototype.SetShopTankPageLocation = function() {
        var e = this;
        GUtil.SystemMillionSecond() >= MainData.GetCustomData("shop_videobuy_cdTick") && MainData.role.highestTank - 4 > 0 && (e.gTanksView.viewport.scrollV = 152 * e.videoIndex)
    }, t.isShowPage2 = !1, t
}(UIBase);
__reflect(UIShop.prototype, "UIShop");
var ActorScale = 1,
    GActor = function(e) {
        function t(a, n, i, o, r) {
            void 0 === r && (r = !1);
            var s = e.call(this) || this;
            s.anim = null, s.armature = null, s.sX = 1, s.sY = 1, s.unEnableScaleTime = !0, s.destroyed = !1, s.OnUpdate = null, s.OnUpdateObj = null, s._prevAnim = null, s.onHandlerEvent = null, s.thisObj = null, s.width = 1, s.height = 1, s._actorName = a, s._src = n;
            var l = t.factoryDict[n];
            if (null == l) {
                var d = RES.getRes(n + "_ske_json"),
                    u = RES.getRes(n + "_tex_json"),
                    c = RES.getRes(n + "_tex_png");
                l = new dragonBones.EgretFactory, l.addDragonBonesData(l.parseDragonBonesData(d)), l.addTextureAtlasData(l.parseTextureAtlasData(u, c)), t.factoryDict[n] = l
            }
            return s.armature = l.buildArmature(a), s.anim = s.armature.display, s.anim.scaleX = i, s.anim.scaleY = o, s.sX = i, s.sY = o, s.unEnableScaleTime = r, s.touchEnabled = !1, s.touchChildren = !1, s.anim.touchEnabled = !1, s.anim.touchChildren = !1, s.addChild(s.anim), s.anim.addEventListener(dragonBones.EventObject.START, s.HandlerEvent, s), s.anim.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, s.HandlerEvent, s), s.anim.addEventListener(dragonBones.EventObject.COMPLETE, s.HandlerEvent, s), s.anim.addEventListener(dragonBones.EventObject.FADE_IN, s.HandlerEvent, s), s.anim.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, s.HandlerEvent, s), s.anim.addEventListener(dragonBones.EventObject.FADE_OUT, s.HandlerEvent, s), s.anim.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, s.HandlerEvent, s), s.anim.addEventListener(dragonBones.EventObject.FRAME_EVENT, s.HandlerEvent, s), s.anim.addEventListener(dragonBones.EventObject.SOUND_EVENT, s.HandlerEvent, s), dragonBones.WorldClock.clock.add(s.armature), GTime.startTick(s.Update, s, !0, r), s
        }
        return __extends(t, e), t.prototype.OnDestroy = function() {
            this.destroyed || (null != this.parent && this.parent.removeChild(this), GTime.stopTick(this.Update, this), dragonBones.WorldClock.clock.remove(this.armature), this.anim.removeEventListener(dragonBones.EventObject.START, this.HandlerEvent, this), this.anim.removeEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.HandlerEvent, this), this.anim.removeEventListener(dragonBones.EventObject.COMPLETE, this.HandlerEvent, this), this.anim.removeEventListener(dragonBones.EventObject.FADE_IN, this.HandlerEvent, this), this.anim.removeEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this.HandlerEvent, this), this.anim.removeEventListener(dragonBones.EventObject.FADE_OUT, this.HandlerEvent, this), this.anim.removeEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this.HandlerEvent, this), this.anim.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this.HandlerEvent, this), this.anim.removeEventListener(dragonBones.EventObject.SOUND_EVENT, this.HandlerEvent, this), this.armature = null, this.destroyed = !0)
        }, t.prototype.SetSlot = function(e, t) {
            if (null != this.anim) {
                var a = this.armature.getSlot(e);
                null == a && console.error("找不到slot: " + e), a.displayIndex = t
            }
        }, t.prototype.Update = function() {
            this.unEnableScaleTime && GTime._pause && this.armature.advanceTime(GTime.deltaTimeUnscale), this.OnUpdate && this.OnUpdate.call(this.OnUpdateObj)
        }, t.prototype.SetPos = function(e, t) {
            this.x = e, this.y = t
        }, t.prototype.SetVec2Pos = function(e) {
            this.x = e.x, this.y = e.y
        }, t.prototype.PlayAnim = function(e, t, a) {
            void 0 === t && (t = 1), void 0 === a && (a = -1), null != this.anim && null != this.armature && null != this.armature.animation && (this._prevAnim != e && (this._prevAnim = e, this.prevState = this.armature.animation.play(e, a)), null != this.prevState && (this.prevState.timeScale = t))
        }, t.prototype.SetTimeScale = function(e) {
            this.prevState && (this.prevState.timeScale = e)
        }, t.prototype.HandlerEvent = function(e) {
            if (null != MainData.gbattle && this instanceof t && null != this.armature) {
                e.eventObject, e.type;
                this.onHandlerEvent && this.onHandlerEvent.call(this.thisObj, e)
            }
        }, t.factoryDict = {}, t
    }(eui.Component);
__reflect(GActor.prototype, "GActor");
var GPool = function() {
    function e() {
        this.objs = []
    }
    return e.prototype.GetObject = function() {
        for (var e = this, t = null, a = e.objs.length - 1; a >= 0; a--) {
            var n = e.objs[a];
            if (!n.used) {
                n.used = !0, t = n, t.NewFromPool();
                break
            }
        }
        return t
    }, e.prototype.AddObject = function(e) {
        var t = this;
        e.pool = t, e.used = !0, e.NewFromPool(), t.objs.push(e)
    }, e.prototype.ReleaseObject = function(e) {
        null != e.parent && e.parent.removeChild(e), egret.Tween.removeTweens(e), e.used = !1
    }, e
}();
__reflect(GPool.prototype, "GPool");
var GPoolItem = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.used = !1, t
    }
    return __extends(t, e), t.prototype.Release2Pool = function() {
        this.pool.ReleaseObject(this)
    }, t.prototype.NewFromPool = function() {}, t
}(eui.Component);
__reflect(GPoolItem.prototype, "GPoolItem", ["eui.UIComponent", "egret.DisplayObject"]);
var Math_Rad2Deg = 57.295780490442965,
    Math_Deg2Rad = .01745329251993889,
    GUtil = function() {
        function e() {}
        return e.BlackMark_InOut = function(t, a, n, i, o) {
            void 0 === i && (i = 500), void 0 === o && (o = 500), e.BlackMark_In(function() {
                t && t.call(n), e.BlackMark_Out(function() {
                    a && a.call(n)
                }, n, o)
            }, n, i)
        }, e.BlackMark_In = function(e, t, a) {
            void 0 === a && (a = 500);
            var n = GameView.instance.imgBlackMark;
            null == n.parent && GameView.instance.addChild(n), n.alpha = 0, n.visible = !0;
            var i = e,
                o = t;
            egret.Tween.get(n).to({
                alpha: 1
            }, a).call(function() {
                null != i && i.call(o)
            }, this)
        }, e.BlackMark_Out = function(e, t, a) {
            void 0 === e && (e = null), void 0 === t && (t = null), void 0 === a && (a = 500);
            var n = GameView.instance.imgBlackMark;
            null == n.parent && GameView.instance.addChild(n), n.alpha = 1, n.visible = !0;
            var i = e,
                o = t;
            egret.Tween.get(n).to({
                alpha: 0
            }, a).call(function() {
                n.visible = !1, null != n.parent && n.parent.removeChild(n), null != i && i.call(o)
            }, this)
        }, e.RichText = function(e, t) {
            for (var a = t; a.indexOf("<BR>") >= 0;) a = a.replace("<BR>", "\n");
            e.textFlow = (new egret.HtmlTextParser).parser(a)
        }, e.Contains = function(e, t) {
            for (var a = 0; a < e.length; a++)
                if (e[a] == t) return !0;
            return !1
        }, e.NumberEx = function(e) {
            return e *= 10, e = Math.floor(e), e /= 10
        }, e.FormatMoney = function(e) {
            var t = e.toString(),
                a = null;
            return a = e > 1e9 ? Math.floor(e / 1e8) + "亿" : e > 1e8 ? t.substr(0, 1) + "." + t.substr(1, 1) + "亿" : e > 1e5 ? Math.floor(e / 1e4) + "万" : Math.floor(e).toString()
        }, e.FormatTime_HHMMSS = function(e) {
            var t = e / 1e3,
                a = (Array(2).join("0") + Math.floor(t / 3600)).slice(-2),
                n = (Array(2).join("0") + Math.floor(t % 3600 / 60)).slice(-2),
                i = (Array(2).join("0") + Math.floor(t) % 60).slice(-2);
            return "00" == a ? n + ":" + i : a + ":" + n + ":" + i
        }, e.FormatTime_DDHHMMSS = function(e) {
            var t = e / 1e3,
                a = t % 60;
            t = Math.floor(t / 60);
            var n = t % 60;
            t = Math.floor(t / 60);
            var i = t % 24;
            t = Math.floor(t / 24);
            var o = t,
                r = "";
            return o > 0 ? (r = o + "天", i > 0 && (r += i + "小时")) : (i > 0 && (r += i + "小时"), n > 0 ? r += n + "分" : i > 0 && (r += "零"), a > 0 && (r += Math.floor(a) + "秒")), r
        }, e.FormatTime_DDHHMMSS_Full = function(e) {
            var t = e / 1e3,
                a = t % 60;
            t = Math.floor(t / 60);
            var n = t % 60;
            t = Math.floor(t / 60);
            var i = t % 24;
            t = Math.floor(t / 24);
            var o = t,
                r = "";
            return o > 0 ? (r = o + "天", r += i > 0 ? i + "小时" : "0小时", n > 0 ? r += n + "分" : a > 0 && (r += "1分")) : (i > 0 && (r += i + "小时"), n > 0 ? r += n + "分" : i > 0 && (r += "零"), a > 0 && (r += Math.floor(a) + "秒")), r
        }, e.BigNumber = function(e) {
            if (1e4 > e) return e = Math.floor(e), e.toString();
            var t = e.toString();
            if (t.indexOf("e") > 0) {
                var a = t.split("e"),
                    n = Number(a[1]),
                    i = a[0].split("."),
                    o = i[0];
                if (i.length > 1 && (o += i[1], n -= i[1].length), 0 > n) o.substr(0, o.length - 1);
                else
                    for (var r = 0; n > r; r++) o += "0";
                return this._string2BigNumberString(o)
            }
            if (t.indexOf(".") > 0) {
                var i = t.split(".");
                return this._string2BigNumberString(i[0])
            }
            return this._string2BigNumberString(t)
        }, e.LookAt = function(e, t, a) {
            var n = 57.29578 * Math.atan2(a, t);
            e.rotation = n
        }, e.GetWorldPos = function(e, t) {
            t.x = e.x, t.y = e.y;
            for (var a = e.parent; null != a.parent;) a instanceof eui.Scroller && (t.x -= a.viewport.scrollH, t.y -= a.viewport.scrollV), t.x += a.x, t.y += a.y, t.x -= a.anchorOffsetX, t.y -= a.anchorOffsetY, a = a.parent
        }, e._GetExt_24 = function(t) {
            var a;
            if (4 >= t) a = this._exts_4[t];
            else {
                for (a = "", t -= 5; t >= 0;) {
                    var n = t % e._exts_24.length;
                    if (t = Math.floor(t / e._exts_24.length), a = e._exts_24[n] + a, 0 == t) break
                }
                1 == a.length && (a = "a" + a)
            }
            return a
        }, e._string2BigNumberString = function(e) {
            var t = e.length,
                a = t % 3;
            a = 0 == a ? 3 : a;
            for (var n = 3 - a, i = Math.floor((t - 1) / 3), o = "", r = 0; a > r; r++) o += e.charAt(r);
            if (i > 0)
                for (var r = a; a + n > r; r++) r == a && (o += "."), o += e.charAt(r);
            return o += this._GetExt_24(i)
        }, e.BinUTF8ToString = function(e, t) {
            var a = 0,
                n = "",
                i = 0,
                o = 0;
            for (a = t; a < e.length;) o = e[a], o >>> 7 === 0 ? (n += String.fromCharCode(e[a]), a += 1) : 252 === (252 & o) ? (i = (3 & e[a]) << 30, i |= (63 & e[a + 1]) << 24, i |= (63 & e[a + 2]) << 18, i |= (63 & e[a + 3]) << 12, i |= (63 & e[a + 4]) << 6, i |= 63 & e[a + 5], n += String.fromCharCode(i), a += 6) : 248 === (248 & o) ? (i = (7 & e[a]) << 24, i |= (63 & e[a + 1]) << 18, i |= (63 & e[a + 2]) << 12, i |= (63 & e[a + 3]) << 6, i |= 63 & e[a + 4], n += String.fromCharCode(i), a += 5) : 240 === (240 & o) ? (i = (15 & e[a]) << 18, i |= (63 & e[a + 1]) << 12, i |= (63 & e[a + 2]) << 6, i |= 63 & e[a + 3], n += String.fromCharCode(i), a += 4) : 224 === (224 & o) ? (i = (31 & e[a]) << 12, i |= (63 & e[a + 1]) << 6, i |= 63 & e[a + 2], n += String.fromCharCode(i), a += 3) : 192 === (192 & o) ? (i = (63 & e[a]) << 6, i |= 63 & e[a + 1], n += String.fromCharCode(i), a += 2) : (n += String.fromCharCode(e[a]), a += 1);
            return n
        }, e.SystemMillionSecond = function() {
            return (new Date).getTime() + this.fixedServerTime
        }, e.SystemTimeHHMMSS = function() {
            var t = this.SystemMillionSecond(),
                a = t.toString();
            return a = a.substr(a.length - 4), e.FormatTime_HHMMSS(t) + " " + a
        }, e.SyncServerTime = function(e) {
            this.serverTime = e, this.fixedServerTime = e - (new Date).getTime()
        }, e.SystemDay = function() {
            var t = this.GetDay(e.SystemMillionSecond());
            return t
        }, e.GetDay = function(e) {
            var t = e / 1e3;
            return t /= 60, t /= 60, t += 8, t /= 24, t = Math.floor(t)
        }, e.RandomRangeFloat = function(e, t) {
            var a = t - e,
                n = Math.random() * a + e;
            return n
        }, e.RandomRangeInt = function(e, t) {
            var a = Math.floor(Math.random() * t * 100);
            return a %= t - e, a += e
        }, e.Lerp = function(e, t, a) {
            return e + (t - e) * a
        }, e.isInArray = function(e, t) {
            return null != e && void 0 != e ? e.indexOf(t) >= 0 : void 0
        }, e.isNullOrUndefined = function(e) {
            return null == e || void 0 == e ? !0 : !1
        }, e.GetDiscLength = function(e) {
            var t = 0;
            for (var a in e) ++t;
            return t
        }, e.NumberChangeLuoMa = function(e) {
            var t = "";
            switch (e) {
                case 5:
                    t = "Ⅴ";
                    break;
                case 4:
                    t = "Ⅳ";
                    break;
                case 3:
                    t = "Ⅲ";
                    break;
                case 2:
                    t = "Ⅱ";
                    break;
                case 1:
                    t = "Ⅰ"
            }
            return t
        }, e.HasUI = function(e) {
            for (var t = 0; t < GameView.instance.uiLayer.$children.length; t++) {
                var a = GameView.instance.uiLayer.getChildAt(t);
                if (a instanceof e) return a
            }
            return null
        }, e.UserFunc = function() {
            var t = e.RandomRangeInt(0, 10);
            switch (t) {
                case 0:
                    e.funcs[t](e.uis[e.RandomRangeInt(0, 5)]);
                    break;
                case 1:
                    e.funcs[t](e.RandomRangeInt(1, 6));
                    break;
                case 2:
                    e.funcs[t](e.RandomRangeInt(0, 9999));
                    break;
                case 3:
                    e.funcs[t]();
                    break;
                case 4:
                    e.funcs[t]();
                    break;
                case 5:
                    e.funcs[t](e.RandomRangeInt(0, 400));
                    break;
                case 6:
                    e.funcs[t](e.RandomRangeInt(0, 1e4));
                    break;
                case 7:
                    e.funcs[t](e.RandomRangeInt(0, 1e6));
                    break;
                case 8:
                    e.funcs[t](e.RandomRangeFloat(1, 5));
                    break;
                case 9:
                    e.funcs[t](e.RandomRangeInt(500, 1e6))
            }
        }, e._exts_4 = ["", "k", "m", "b", "t"], e._exts_24 = ["a", "b", "c", "d", "e", "f"], e.fixedServerTime = 0, e.serverTime = 0, e.funcs = [e.HasUI, e.NumberChangeLuoMa, e.GetDay, e.SystemMillionSecond, e.SystemDay, e._GetExt_24, e.BigNumber, e.FormatTime_DDHHMMSS, e.NumberEx, e.FormatTime_HHMMSS], e.uis = [UIBank, UIShop_Cell, UIBattle, UIAutoCompose, UIShop], e
    }();
__reflect(GUtil.prototype, "GUtil");
var Vector2 = function() {
    function e(e, t) {
        this.x = e, this.y = t
    }
    return e.Zero = function() {
        return new e(0, 0)
    }, e.Vec2 = function(t) {
        return new e(t.x, t.y)
    }, e.prototype.normalization = function() {
        var e = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return 0 == e ? (this.x = 0, this.y = 0) : (this.x = this.x / e, this.y = this.y / e), this
    }, e.prototype.SetXY = function(e, t) {
        return this.x = e, this.y = t, this
    }, e.prototype.mul = function(e) {
        return this.x *= e, this.y *= e, this
    }, e.prototype.addXY = function(e, t) {
        return this.x += e, this.y += t, this
    }, e.prototype.addVec2 = function(e) {
        return this.x += e.x, this.y += e.y, this
    }, e.lerp = function(t, a, n) {
        var i = (a.x - t.x) * n + t.x,
            o = (a.y - t.y) * n + t.y;
        return new e(i, o)
    }, e.DistanceVec2 = function(e, t) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }, e.Distance = function(e, t, a, n) {
        return Math.sqrt(Math.pow(e - a, 2) + Math.pow(t - n, 2))
    }, e.CalcForward = function(e, t, a, n) {
        var i = a - e,
            o = n - t,
            r = Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2));
        if (0 == r) return this.tmpVec2.SetXY(0, 0), this.tmpVec2;
        var s = i / r,
            l = o / r;
        return this.tmpVec2.SetXY(s, l), this.tmpVec2
    }, e.tmpVec2 = new e(0, 0), e
}();
__reflect(Vector2.prototype, "Vector2");
var UIActiveBag = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        e.AddUI(), e.LockTime()
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t.btnLuckyBagVideo, t.OnLuckyBagClick), t.BandTap(t.btnEliteBagVideo, t.OnEliteBagVideoClick), t.BandTap(t.btnEliteBagFree, t.OnEliteBagFreeClivk), t.BandTap(t.btnClose, t.CloseUI), t.btnLuckyBagVideo.visible = 0 == MainData.GetCustomData("isGetLuckyBag"), t.lIsGetLB.visible = !t.btnLuckyBagVideo.visible, t.btnEliteBagVideo.visible = 0 == MainData.GetRefreshData("isEliteBag") && MainData.GetDayOnlineTime() < 6e4 * MainData.GameValue(29), t.btnEliteBagFree.visible = 0 == MainData.GetRefreshData("isEliteBag") && !t.btnEliteBagVideo.visible, t.gEliteFreeTime.visible = t.btnEliteBagVideo.visible, t.iIsGetEB.visible = !t.btnEliteBagVideo.visible && !t.btnEliteBagFree.visible, 0 != MainData.GetCustomData("isGetLuckyBag") && 0 != MainData.GetRefreshData("isEliteBag") && (t.btnClose.labelDisplay.text = "关闭"), 10 == GameChannel && (t.btnLuckyBagVideo.visible = platform.H5_4399_IsShowVideo() && 0 == MainData.GetCustomData("isGetLuckyBag")), 10 == GameChannel && (t.btnEliteBagVideo.visible = platform.H5_4399_IsShowVideo() && 0 == MainData.GetRefreshData("isEliteBag") && MainData.GetDayOnlineTime() < 6e4 * MainData.GameValue(29)), t.anim.play(0), GTime.startTick(t.UpdateEliteTime, t, !1, !0)
    }, t.prototype.UpdateView = function() {
        var e = this;
        e.btnLuckyBagVideo.visible = 0 == MainData.GetCustomData("isGetLuckyBag"), e.lIsGetLB.visible = !e.btnLuckyBagVideo.visible, e.btnEliteBagVideo.visible = 0 == MainData.GetRefreshData("isEliteBag") && MainData.GetDayOnlineTime() < 6e4 * MainData.GameValue(29), e.btnEliteBagFree.visible = 0 == MainData.GetRefreshData("isEliteBag") && !e.btnEliteBagVideo.visible, e.gEliteFreeTime.visible = e.btnEliteBagVideo.visible, e.iIsGetEB.visible = !e.btnEliteBagVideo.visible && !e.btnEliteBagFree.visible, 0 != MainData.GetCustomData("isGetLuckyBag") && 0 != MainData.GetRefreshData("isEliteBag") && (e.btnClose.labelDisplay.text = "关闭"), 10 == GameChannel && (e.btnLuckyBagVideo.visible = platform.H5_4399_IsShowVideo() && 0 == MainData.GetCustomData("isGetLuckyBag")), 10 == GameChannel && (e.btnEliteBagVideo.visible = platform.H5_4399_IsShowVideo() && 0 == MainData.GetRefreshData("isEliteBag") && MainData.GetDayOnlineTime() < 6e4 * MainData.GameValue(29))
    }, t.prototype.UpdateEliteTime = function() {
        var e = this;
        if (e.gEliteFreeTime.visible) {
            var t = 6e4 * MainData.GameValue(29) - MainData.GetDayOnlineTime();
            if (0 >= t) return e.gEliteFreeTime.visible = !1, void e.UpdateView();
            var a = GUtil.FormatTime_HHMMSS(t);
            a != e.lEBTime.text && (e.lEBTime.text = a)
        }
    }, t.prototype.OnLuckyBagClick = function() {
        var e = this;
        MYAD.Video_UILuckyBagReward(function() {
            UIAlert.Show("恭喜获得6个植物", "prize1_png", 0, null), MainData.SetCustomData("isGetLuckyBag", 1), MainData.gbattle._dropedBox = -1, MainData.gbattle.needDropBox += 6, e.UpdateView()
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, e)
    }, t.prototype.OnEliteBagVideoClick = function() {
        var e = this;
        MYAD.Video_UIEliteBagReward(function() {
            e.GetEliteBagReward()
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, e)
    }, t.prototype.OnEliteBagFreeClivk = function() {
        var e = this;
        e.GetEliteBagReward()
    }, t.prototype.GetEliteBagReward = function() {
        var e = this;
        UIAlert.Show("恭喜获得6个植物", "prize1_png", 0, null), MainData.SetRefreshData("isEliteBag", 1), MainData.gbattle._dropedBox = -1, MainData.gbattle.needDropBox += 6;
        var t = [100, 200, 300, 400],
            a = MainData.GetCustomData("limitBagDay");
        a = a > 3 ? 3 : a, MainData.role.star += t[a], UIAlert.Show("Nhận kim cương", "sign_3_png", t[a], null), MainData.AddCustomDataValue("limitBagDay", 1), e.UpdateView()
    }, t.prototype.CloseUI = function() {
        var e = this;
        GTime.stopTick(e.UpdateEliteTime, e), e.RemoveUI()
    }, t
}(UIBase);
__reflect(UIActiveBag.prototype, "UIActiveBag");
var GRewardBox = function(e) {
    function t(t, a, n, i) {
        var o = e.call(this) || this;
        return o.openTankLv = 0, o.isHighBox = !1, o.isADBox = !1, o.slotIdx = 0, o.isADBox = t, o.slotIdx = a, o.isHighBox = n, void 0 != i ? o.openTankLv = i : o.openTankLv = Math.ceil(Math.max((MainData.role.highestTank - 1) / 3, 1)), o
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t, t.OnClick, !1), t.isADBox ? t.imgBox.source = "Superior-treasure-chest_png" : t.isHighBox ? (t.imgBox.source = "High-treasure-chest_png", t.AutoClick()) : t.AutoClick(), t.shake.play(0)
    }, t.prototype.AutoClick = function() {
        var e = this;
        MainData.gbattle.RunDelay(10, e.OnClick, e)
    }, t.prototype.OnClick = function() {
        var e = this;
        MainData.gbattle.ClearDelay(this.OnClick, this), this.isADBox ? (UIADBox.Show(this.ADVideo, function() {
            e.DeleteMe()
        }, this), MainData.gbattle.CreateTank(this.slotIdx, this.openTankLv), GAudio.PlaySoundByName("points4_m4a", .8, 1), this.DeleteMe()) : this.isHighBox ? (MainData.gbattle.CreateTank(this.slotIdx, this.openTankLv + 1), GAudio.PlaySoundByName("points4_m4a", .8, 1), this.DeleteMe()) : (MainData.gbattle.CreateTank(this.slotIdx, this.openTankLv), GAudio.PlaySoundByName("points4_m4a", .8, 1), this.DeleteMe())
    }, t.prototype.ADVideo = function() {
        var e = this;
        ADSDK.HideBannerAd(), MYAD.Video_GRewardBoxVideo(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 7
            }), MainData.gbattle._dropedBox = -1, MainData.gbattle.needDropBox += 6, e.DeleteMe()
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this)
    }, t.prototype.DeleteMe = function() {
        delete MainData.gbattle.boxList[this.slotIdx], this.RemoveUI()
    }, t
}(UIBase);
__reflect(GRewardBox.prototype, "GRewardBox");
var GTails = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.dpX = 0, t.dpY = 0, t.dSpd = 0, t.removeOnStop = !1, t.delay = 0, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.validateNow(), t.width /= 2, t.anchorOffsetX = t.width / 2
    }, t.prototype.SetRotation = function(e, t, a) {
        this.rotation = e, this.dSpd = t, this.height = 0, this.delay = a, this.removeOnStop = !1
    }, t.prototype.UpdateDestPos = function(e, t) {
        this.dpX = e, this.dpY = t
    }, t.prototype.Update = function() {
        var e = this;
        if (0 == e.height && e.removeOnStop) return void e.RemoveMe();
        e.x = this.dpX, e.y = this.dpY;
        var t = GTime.deltaTime * e.dSpd * .8;
        e.removeOnStop || (e.height += t), e.delay > 0 ? e.delay -= GTime.deltaTime : t > e.height ? e.height = 0 : e.height -= t
    }, t.prototype.RemoveMe = function() {
        this.Release2Pool()
    }, t
}(GPoolItem);
__reflect(GTails.prototype, "GTails");
var GTank = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.lockTouch = !1, t.enableAI = !0, t.gd = null, t.sd = null, t.prevLv = -1, t._shotCD = 0, t._needAutoFire = !0, t.storeX = 0, t.storeY = 0, t.offsetX = 0, t.offsetY = 0, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.CheckTankLv()
    }, t.prototype.CheckTankLv = function() {
        var e = this;
        e.prevLv != e.gd.lv && (e.prevLv = e.gd.lv, e.atank && e.atank.OnDestroy(), e.afloor && e.afloor.OnDestroy(), e.atank = new GActor("Tank" + e.prevLv, "Tanks", 1, 1), e.afloor = new GActor("Tank" + +e.prevLv + "A", "Tanks", 1, 1), e.atank.x = 60, e.atank.y = 30, e.afloor.x = e.atank.x, e.afloor.y = e.atank.y, e.addChild(e.afloor), e.addChild(e.atank), e.atank.PlayAnim("idle"), e.atank.thisObj = e, e.atank.onHandlerEvent = e.OnEvent)
    }, t.prototype.NewFromPool = function() {
        e.prototype.NewFromPool.call(this);
        var t = this;
        t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.onTouchBegin, t), t.atank.rotation = 0, t._shotCD = 0, t.atank.PlayAnim("idle")
    }, t.prototype.RemoveMe = function() {
        var e = this;
        e.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, e.onTouchBegin, e), e.Release2Pool()
    }, t.NewTankWithOutPool = function(e) {
        var a = new t;
        return a.gd = new GD_Tank, a.gd.lv = e, a.gd.sdId = e, a.SetGD(a.gd, !1), a
    }, t.prototype.Delete = function() {
        var e = this;
        null != e.parent && e.parent.removeChild(e), e.atank.OnDestroy(), e.afloor.OnDestroy()
    }, t.prototype.SetGD = function(e, t) {
        void 0 === t && (t = !0);
        var a = this;
        a.gd = e, a.sd = MainData.allSeeds.tanks[a.gd.sdId], t && a.gd.lv > MainData.role.highestTank && (MainData.role.highestTank = a.gd.lv, UINewTank.Show(a.gd.lv), MainData.SaveGame()), a.CheckTankLv()
    }, t.prototype.UpdateAI = function() {
        var e = this;
        if (e.enableAI && !e.lockTouch) {
            var t = GTime.deltaTime,
                a = MainData.gbattle;
            MainData.GetSpdUpDuration() > 0 && 0 == a.battleMode ? (t *= 2, e.atank.SetTimeScale(2)) : e.atank.SetTimeScale(1), e._shotCD -= t;
            var n = 9999,
                i = null,
                o = e.x + e.parent.x + 60,
                r = e.y + e.parent.y + 60,
                s = 0,
                l = 0;
            if (a.imgAnim.visible) i = a.imgAnim, s = a.imgAnim.x, l = a.imgAnim.y;
            else {
                for (var d = a._enemys.length > 16 ? 16 : a._enemys.length, u = 0; d > u; u++) {
                    var c = a._enemys[u];
                    if (!(c.y <= 400)) {
                        var h = Math.abs(c.y - r) + Math.abs(c.x - o);
                        n > h && (i = c, n = h)
                    }
                }
                i && (s = i.x, l = i.y)
            }
            if (null != i) {
                var p = e.sd.rotSpd * GTime.deltaTime,
                    D = e.atank.rotation,
                    v = Math.atan2(l - r, s - o) * Math_Rad2Deg + 90,
                    f = v - D;
                Math.abs(f) > p && (f = f > 0 ? p : -p), e.atank.rotation = D + f, e._shotCD <= 0 && (e._shotCD = e.sd.atkCD, e.Fire())
            }
        }
    }, t.prototype.Fire = function() {
        var e = this;
        e.atank.PlayAnim("atk1", 1, 1)
    }, t.prototype.OnEvent = function(e) {
        switch (e.type) {
            case dragonBones.EventObject.FRAME_EVENT:
                if ("Fire" == e.data.name) {
                    this._needAutoFire = !1;
                    var a = e.data.bone;
                    this.atank.armature.display.localToGlobal(a.global.x, a.global.y, t._globalPoint);
                    var n = e.data.data.floats[0];
                    MainData.gbattle.AddBullet(this, {
                        x: t._globalPoint.x,
                        y: t._globalPoint.y,
                        r: n
                    })
                }
                break;
            case dragonBones.EventObject.COMPLETE:
                "atk1" == e.animationState.name ? (this._needAutoFire && MainData.gbattle.AddBullet(this, {
                    x: 0,
                    y: 50,
                    r: 1
                }), this.atank.PlayAnim("atk2", 1, 1)) : "atk2" == e.animationState.name && (this.atank.PlayAnim("idle"), this._needAutoFire = !0)
        }
    }, t.prototype.onTouchBegin = function(e) {
        var t = this;
        t.lockTouch || (t.enableAI = !1, t.storeX = t.x, t.storeY = t.y, t.offsetX = e.stageX - t.x, t.offsetY = e.stageY - t.y, t.parent.setChildIndex(t, 99), MainData.gbattle.RegTouch(t, t.onTouchMove, t.onTouchEnd), MainData.gbattle.ShowTips(t))
    }, t.prototype.onTouchMove = function(e) {
        var t = this;
        t.x = e.stageX - t.offsetX, t.y = e.stageY - t.offsetY
    }, t.prototype.onTouchEnd = function() {
        var e = this;
        MainData.gbattle.UnregTouch(e, e.onTouchMove, e.onTouchEnd), MainData.gbattle.TankMove(e), e.enableAI = !0, MainData.gbattle.HideTips()
    }, t.prototype.TweenBack = function() {
        var e = this;
        e.TweenTo(e.storeX, e.storeY)
    }, t.prototype.TweenTo = function(e, t, a, n) {
        void 0 === a && (a = null), void 0 === n && (n = null);
        var i = this;
        i.storeX = e, i.storeY = t, i.lockTouch = !0, egret.Tween.get(i).to({
            x: i.storeX,
            y: i.storeY
        }, 200, egret.Ease.cubicOut).call(function() {
            i.lockTouch = !1, null != a && a.call(n)
        }, i)
    }, t._globalPoint = new egret.Point, t
}(GPoolItem);
__reflect(GTank.prototype, "GTank");
var GZombie = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.rank = 0, t.uiHp = null, t.baseActorY = 0, t.isDead = !1, t.hpMax = 0, t.rewardMoneyRate = 0, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.validateNow(), t.UpdateHP(), t.gView.addChild(t.actor)
    }, t.prototype.NewFromPool = function() {
        e.prototype.NewFromPool.call(this);
        var t = this;
        t.isDead = !1, t.actor.PlayAnim("move"), t.actor.armature.animation.advanceTime(GUtil.RandomRangeFloat(0, 5)), t.baseActorY = t.actor.y
    }, t.prototype.SetZombieRank = function(e) {
        var t = this;
        t.rank = e;
        var a = MainData.allSeeds.playerRanks[t.rank];
        t.hpMax = t.sd.hp * a.enemyHpRate, t.gd.hp = t.hpMax, t.rewardMoneyRate = a.rewardMoneyRate, t.UpdateHP()
    }, t.prototype.BeHurt = function(e) {
        var t = this,
            a = e.GetDamage();
        t.gd.hp -= a, UIPause.CalcDPS(a), t.gd.hp <= 0 ? t.Die(!1) : t.UpdateHP(), egret.Tween.removeTweens(t.actor), t.actor.y = t.baseActorY - 10, egret.Tween.get(t.actor).to({
            y: t.baseActorY
        }, 100), GAudio.PlaySoundByName("kernelpult_m4a", 1, 1), t.ShowRedEffect()
    }, t.prototype.Die = function(e) {
        var t = this,
            a = MainData.GetRefreshData("Task_5");
        MainData.SetRefreshData("Task_5", a + 1), t.BattleReward(e), t.actor.PlayAnim("die", 1, 1), null != t.uiHp && t.uiHp.RemoveUI(), MainData.gbattle.RemoveEnemy(t), MainData.gbattle.RunDelay(1, function() {
            t.RemoveMe(!1)
        }, t), t.isDead = !0
    }, t.prototype.BattleReward = function(e) {
        if (0 == MainData.gbattle.battleMode) {
            var t = this;
            if (e) switch (t.sd.rewardType) {
                case 1:
                    t.FlyMoney(e, !0), MainData.gbattle.ui.MoneyEff(2)
            } else {
                switch (t.sd.rewardType) {
                    case 1:
                        t.FlyMoney(e, !0), MainData.gbattle.ui.MoneyEff(1);
                        break;
                    case 2:
                        t.FlyMoney(e, !1), MainData.gbattle.ui.MoneyEff(0)
                }
                MainData.role.exp += t.sd.exp;
                var a = MainData.allSeeds.playerRanks[MainData.role.lv].nextExp;
                MainData.role.exp >= a && (MainData.role.exp = a)
            }
        }
    }, t.prototype.FlyMoney = function(e, t) {
        var a = this,
            n = t ? "money_png" : "Stars_png",
            i = MainData.gbattle,
            o = a.sd.rewardNumber * a.rewardMoneyRate;
        MainData.GetX5MoneyDuration() > 0 && (o *= 5), t || (o = a.sd.rewardNumber);
        var r = e,
            s = a.x + 45 - 15,
            l = a.y + 90 - 15,
            d = e ? i.ui.btnPig.x : i.ui.imgMoney.x,
            u = e ? i.ui.btnPig.y : i.ui.imgMoney.y;
        t || (d = i.ui.imgStar.x, u = i.ui.imgStar.y);
        var c = 0,
            h = 0,
            p = 0;
        t ? r ? h = o : c = o : p = o, i.ui.FlyIcon(n, s, l, d, u, c, h, p, 10, 10), 0 != p && platform.TaTrack("gem_use_or_gain", {
            useOrGain: 1,
            gemNum: p,
            gemtype: 3,
            gemdetails: -1
        })
    }, t.prototype.RemoveMe = function(e) {
        void 0 === e && (e = !0);
        var t = this;
        egret.Tween.removeTweens(t.actorred), null != t.actorred.parent && t.actorred.parent.removeChild(t.actorred), t.Release2Pool()
    }, t.prototype.UpdateHP = function() {
        var e = this,
            t = e.gd.hp / e.hpMax;
        1 > t && (null == e.uiHp ? (e.uiHp = new UISliderHP, MainData.gbattle.gHPLayer.addChild(e.uiHp), e.SyncUIHP()) : null == e.uiHp.parent && (MainData.gbattle.gHPLayer.addChild(e.uiHp), e.SyncUIHP()), e.uiHp.SetRate(t))
    }, t.prototype.SetGD = function(e) {
        var t = this;
        t.gd = e, t.sd = MainData.allSeeds.zombies[e.sdId], t.actor = new GActor("Zombie" + t.sd.skin, "Zombies", 1, 1), t.actor.PlayAnim("move"), t.actor.OnUpdate = t.SyncActorRed, t.actor.OnUpdateObj = t, t.actorred = new GActorNoLogic("Zombie" + t.sd.skin, "Zombies", 1, 1, "Zombies_red"), t.actorred.PlayAnim("move")
    }, t.prototype.ShowRedEffect = function() {
        var e = this;
        egret.Tween.removeTweens(e.actorred), null == e.actorred.parent && MainData.gbattle.gEnemyRedView.addChild(e.actorred), e.actorred.alpha = 1, egret.Tween.get(e.actorred).to({
            alpha: 0
        }, 200).call(function() {
            null != e.actorred.parent && e.actorred.parent.removeChild(e.actorred)
        }, e)
    }, t.prototype.SyncUIHP = function() {
        var e = this;
        null != e.uiHp && null != e.uiHp.parent && (e.uiHp.x = e.x + e.actor.x + e.gView.x - e.anchorOffsetX - 45, e.uiHp.y = e.y + e.actor.y + e.gView.y - e.anchorOffsetY - 14)
    }, t.prototype.SyncActorRed = function() {
        var e = this;
        null != e.actorred.parent && (e.actorred.x = e.x + e.actor.x + e.gView.x - e.anchorOffsetX, e.actorred.y = e.y + e.actor.y + e.gView.y - e.anchorOffsetY, e.actorred.scaleX = e.scaleX, e.actorred.scaleY = e.scaleY, e.actorred.SyncAnim(e.actor))
    }, t
}(GPoolItem);
__reflect(GZombie.prototype, "GZombie");
var ADSDK = function() {
    function e() {}
    return e.InitKdsAD = function(t) {
        switch (console.log("AD-->Kds init"), e.banner_id = t.bannerId, e.kds = Kds.instance(), e.kds.init(t, function(t) {
            return t ? void console.log("初始化失败:" + t) : (e.kds.onEvent("toutiao", "video", "load", function() {
                7 == GameChannel && (console.log("AD-->video load finished"), e.toutiaoVideoIsLoad = !0)
            }), void e.kds.onEvent("baidu", "banner", "error", function() {
                5 == GameChannel && e.HideBannerAd()
            }))
        }), GameChannel) {
            case 2:
                e.native_id = t.nativeId, e.inter_id = t.interId, e.Video_ids = Vivo_AD_Vidoe_Id, e.videoChangeNative_id = vivo_videoChangeNative_id, e.bannerChangeNative_id = vivo_bannerChangeNative_id, e.interAd_adPoint2 = vivo_interAd_adPoint2, e.interAd_adPoint3 = vivo_interAd_adPoint3, e.interAd_adPoint4 = vivo_interAd_adPoint4, e.interAd_adPoint5 = vivo_interAd_adPoint5, e.interAd_adPoint6 = vivo_interAd_adPoint6, e.isShowNative_2 = !0;
                break;
            case 4:
                e.native_id = t.nativeId, e.inter_id = t.interId, e.Video_ids = Oppo_AD_Video_Id, e.videoChangeNative_id = oppo_videoChangeNative_id, e.bannerChangeNative_id = oppo_bannerChangeNative_id, e.bannerChangeNative_id1 = oppo_bannerChangeNative_id1, e.interAd_adPoint2 = oppo_interAd_adPoint2, e.interAd_adPoint3 = oppo_interAd_adPoint3, e.interAd_adPoint4 = oppo_interAd_adPoint4, e.interAd_adPoint5 = oppo_interAd_adPoint5, e.interAd_adPoint6 = oppo_interAd_adPoint6, e.isShowNative_2 = !0;
                break;
            case 3:
                e.video_id = t.videoId, e.inter_id = t.interId, e.Video_ids = QQ_AD_Video_Id, e.isShowNative_2 = !1;
                break;
            case 5:
                e.video_id = t.videoId, e.Video_ids = Baidu_AD_Video_Id, e.isShowNative_2 = !1;
                break;
            case 6:
                e.video_id = t.videoId, e.Video_ids = Wx_AD_Video_Id, e.interAd_adPoint2 = wx_interAd_adPoint2, e.interAd_adPoint3 = wx_interAd_adPoint3, e.interAd_adPoint4 = wx_interAd_adPoint4, e.interAd_adPoint5 = wx_interAd_adPoint5, e.interAd_adPoint6 = wx_interAd_adPoint6, e.isShowNative_2 = !1;
                break;
            case 7:
                e.video_id = t.videoId, e.inter_id = t.interId, e.Video_ids = Toutiao_AD_Video_Id, e.isShowNative_2 = !1;
                break;
            case 8:
                e.video_id = t.videoId, e.Video_ids = UC_AD_Video_Id, e.isShowNative_2 = !1
        }
    }, e.OVAD_DungeonShowVideo = function() {
        var e = MainData.GetRefreshData("showDungeonVideoCount");
        return 3 > e ? (MainData.SetRefreshData("showDungeonVideoCount", e + 1), !0) : (UIPopTips.ShowTips("暂时没有广告"), !1)
    }, e.ShowVideoAD_KDS = function(t, a, n, i, o, r) {
        if (platform.IsDebugMode()) return UIPopTips.ShowTips("暂时没有广告"), void(a && a());
        if (7 == GameChannel) {
            if (!e.toutiaoVideoIsLoad) return void UIPopTips.ShowTips("暂时没有广告");
            e.toutiaoVideoIsLoad = !1
        }
        if (!e._VideoADLock) {
            switch (e.gamePause = GTime._pause, e._VideoADLock = !0, e.videoChangeNative = !1, e.StartVideo(), e.video_adPoint = t, e.video_onSucc = a, e.video_thisObj = i, console.log("AD--> show video"), GameChannel) {
                case 2:
                case 3:
                case 4:
                case 6:
                    e.video_id = r, r && e.kds.showVideo(t, function(t) {
                        e.OnVideoComplete(t)
                    }, r);
                    break;
                case 5:
                case 7:
                case 8:
                    e.kds.showVideo(t, function(t) {
                        e.OnVideoComplete(t)
                    });
                    break;
                case 9:
                    platform.QTTShowVideo(e.QTTOnVideoCallBack, t);
                    break;
                case 10:
                    platform.H5_4399_ShowVideo(e.H5_4399OnVideoCallBack)
            }
            platform.TaTrack("AdsButtonClick", {
                AdsButtonClick_adsId: e.video_id,
                Ad_Type: 2
            })
        }
    }, e.H5_4399OnVideoCallBack = function(t) {
        if (console.log("代码:" + t.code + ",消息:" + t.message), 1e4 === t.code) {
            var a = MainData.GetRefreshData("Task_3");
            MainData.SetRefreshData("Task_3", a + 1), console.log("开始播放")
        } else 10001 === t.code ? (console.log("播放结束"), e.video_onSucc && e.video_onSucc.call(e.video_thisObj), e.CloseVideo()) : (console.log("广告异常"), e.CloseVideo())
    }, e.QTTOnVideoCallBack = function(t) {
        switch (console.log("完成回调res" + t), t) {
            case 0:
                UIPopTips.ShowTips("暂时没有广告");
                break;
            case 1:
                console.log("AD--> video play finished");
                var a = MainData.GetRefreshData("Task_3");
                MainData.SetRefreshData("Task_3", a + 1), e.video_onSucc && e.video_onSucc.call(e.video_thisObj);
                break;
            case 2:
                console.log("AD--> video play no finished");
                var a = MainData.GetRefreshData("Task_3");
                MainData.SetRefreshData("Task_3", a + 1)
        }
        e.CloseVideo()
    }, e.OnVideoComplete = function(t) {
        if (t)
            if ("noAd" === t) {
                switch (console.log("AD--> no video"), GameChannel) {
                    case 2:
                        UIPopTips.ShowTips("暂时没有广告");
                        break;
                    case 4:
                        UIPopTips.ShowTips("暂时没有广告"), e.videoChangeNative || (console.log("AD-->no video,user native"), e.videoChangeNative = !0, e.ShowNative(e.video_adPoint, e.videoChangeNative_id, e.VideoChangeNative, e.video_onSucc));
                        break;
                    case 7:
                    case 5:
                    case 8:
                    case 3:
                        UIPopTips.ShowTips("暂时没有广告")
                }
                platform.TaTrack("AdsPlayRet", {
                    AdsPlayRet_adsId: e.video_id,
                    playRet: -1,
                    Ad_Type: 2
                })
            } else {
                console.log("AD--> video no play finished");
                var a = MainData.GetRefreshData("Task_3");
                MainData.SetRefreshData("Task_3", a + 1), platform.TaTrack("AdsPlayRet", {
                    AdsPlayRet_adsId: e.video_id,
                    playRet: 1,
                    Ad_Type: 2
                })
            }
        else {
            console.log("AD--> video play finished");
            var a = MainData.GetRefreshData("Task_3");
            MainData.SetRefreshData("Task_3", a + 1), platform.TaTrack("AdsPlayRet", {
                AdsPlayRet_adsId: e.video_id,
                playRet: 0,
                Ad_Type: 2
            }), e.video_onSucc && e.video_onSucc.call(e.video_thisObj)
        }
        e.CloseVideo()
    }, e.StartVideo = function() {
        GAudio.PauseBGM(), GTime.Pause(), MainData.MusicOn() && (GAudio.bgmOn = !1)
    }, e.CloseVideo = function() {
        MainData.MusicOn() && (GAudio.bgmOn = !0), e.gamePause || GTime.Resume(), 8 == GameChannel ? GAudio.PlayBGM(GAudio.bgmName) : GAudio.ResumeBGM(), e._VideoADLock = !1
    }, e.NativeOnload = function(t) {
        var a = t.adList[0];
        UIPageAd.Show(a), platform.TaTrack("AdsPlayRet", {
            AdsPlayRet_adsId: e.native_id,
            playRet: 0,
            Ad_Type: 1
        })
    }, e.VideoChangeNative = function(t) {
        var a = t.adList[0];
        UIPageAd.Show(a), e.nativeOnSucc && e.nativeOnSucc(), e.nativeOnSucc = null, platform.TaTrack("AdsPlayRet", {
            AdsPlayRet_adsId: e.videoChangeNative_id,
            playRet: 0,
            Ad_Type: 1
        })
    }, e.BannerChangeNative = function(t) {
        var a = t.adList[0];
        UIBannerAd.adData = a, e.uiBannerAD && e.uiBannerAD.Update(), platform.TaTrack("AdsPlayRet", {
            AdsPlayRet_adsId: e.bannerChangeNative_id1,
            playRet: 0,
            Ad_Type: 1
        })
    }, e.Native_1 = function(t) {
        var a = t.adList[0];
        UINative_1_Ad.Show(a), platform.TaTrack("AdsPlayRet", {
            AdsPlayRet_adsId: e.bannerChangeNative_id,
            playRet: 0,
            Ad_Type: 1
        })
    }, e.Native_2 = function(t) {
        var a = t.adList[0];
        UIAD_Top.adDate = a, null != e.uiADTop && e.uiADTop.Updata()
    }, e.ShowNative = function(t, a, n, i) {
        if (e.kds.checkShow(t)) {
            if (platform.TaTrack("AdsButtonClick", {
                    AdsButtonClick_adsId: a,
                    Ad_Type: 1
                }), e.currNative_adPion = t, 4 == GameChannel && n == e.BannerChangeNative) {
                var o = MainData.GetRefreshData("oppoNativeBannerCount");
                if (console.log("AD-->today close nativeBanner count：" + o + "/5"), o >= 5) return
            }
            if (4 == GameChannel && n == e.NativeOnload) {
                var o = MainData.GetRefreshData("oppoInterCount"),
                    r = GUtil.SystemMillionSecond();
                if (o >= 8) return;
                if (r - e.oppoInterADTime < 6e4 && 6 > o) return;
                if (o >= 6 && r - e.oppoInterADTime < 3e4) return;
                e.oppoInterADTime = r, MainData.SetRefreshData("oppoInterCount", o + 1)
            }
            i && (e.nativeOnSucc = i), e.currNative_id = a, console.log("AD-->nativeId:" + a), e.kds.loadNative(n, a)
        }
    }, e.ShowBannerAd = function(t) {
        if (!(platform.IsDebugMode() || 8 == GameChannel || 7 == GameChannel && ("douyin_lite" == platform.GetToutiaoApp() || "douyin" == platform.GetToutiaoApp()) || 5 == GameChannel && GUtil.SystemMillionSecond() - e.baiduBannerTimer <= 5e3)) {
            if (2 == GameChannel) {
                var a = GUtil.SystemMillionSecond();
                if (a - e.oppoBannerTimer <= 15e3) return void console.log("AD-->vivo banner often");
                e.oppoBannerTimer = a
            }
            platform.TaTrack("AdsButtonClick", {
                AdsButtonClick_adsId: e.banner_id,
                Ad_Type: 4
            }), console.log("AD-->show banner"), 9 == GameChannel ? platform.QTTShowBanner() : e.kds.showBanner(t)
        }
    }, e.HideBannerAd = function() {
        platform.IsDebugMode() || 8 != GameChannel && 10 != GameChannel && (7 != GameChannel || "douyin_lite" != platform.GetToutiaoApp() && "douyin" != platform.GetToutiaoApp()) && (console.log("AD-->hide banner"), 9 == GameChannel ? platform.QTTHideBanner() : e.kds.closeBanner())
    }, e.ShowInterAd = function(t, a) {
        void 0 === a && (a = ""), platform.IsDebugMode() || 8 != GameChannel && (platform.TaTrack("AdsButtonClick", {
            AdsButtonClick_adsId: "" == a ? e.inter_id : a,
            Ad_Type: 3
        }), console.log("AD-->show interAD"), "" == a ? e.kds.showInter(t) : e.kds.showInter(t, a))
    }, e.NewHtInit = function(t) {
        var a = new Date,
            n = a.getFullYear().toString().substr(-2, 2),
            i = a.getMonth() < 10 ? "0" + (a.getMonth() + 1).toString() : (a.getMonth() + 1).toString(),
            o = a.getDate() < 10 ? "0" + a.getDate().toString() : a.getDate().toString(),
            r = a.getHours() < 10 ? "0" + a.getHours().toString() : a.getHours().toString(),
            s = a.getMinutes() < 10 ? "0" + a.getMinutes().toString() : a.getMinutes().toString();
        console.log("互推链接:" + t + "v:" + n + i + o + r + s), GSHttp.Send(t, "v=" + n + i + o + r + s, function(t) {
            var a = JSON.parse(t);
            console.log("互推Json数据==>"), console.log(a), e.imghead = a.imghead, HtsData.allHtData = a.turnlist
        }, function(e) {}, this, !1, !0)
    }, e.Hts_Jump = function(e, t) {
        switch (GameChannel) {
            case 4:
                window.qg.navigateToMiniGame({
                    pkgName: e.app_id,
                    path: e.path,
                    success: function() {
                        console.log("Hts-->navigate success"), platform.TaTrack("AppJump", {
                            Jump_appid: e.app_id,
                            Jump_click: 1,
                            Jump_position: t,
                            Jump_icon: e.image_id
                        })
                    },
                    fail: function() {
                        console.log("Hts-->navigate fail"), platform.TaTrack("AppJump", {
                            Jump_appid: e.app_id,
                            Jump_click: 0,
                            Jump_position: t,
                            Jump_icon: e.image_id
                        })
                    }
                });
                break;
            case 5:
                window.swan.navigateToMiniProgram({
                    appKey: e.app_id,
                    path: e.path,
                    success: function(a) {
                        console.log("Hts-->navigate success"), platform.TaTrack("AppJump", {
                            Jump_appid: e.app_id,
                            Jump_click: 1,
                            Jump_position: t,
                            Jump_icon: e.image_id
                        })
                    },
                    fail: function(a) {
                        console.log("Hts-->navigate fail"), platform.TaTrack("AppJump", {
                            Jump_appid: e.app_id,
                            Jump_click: 0,
                            Jump_position: t,
                            Jump_icon: e.image_id
                        })
                    }
                })
        }
    }, e.BaiduPrevent_15 = function() {
        UIPopDialog.ShowOKOnly("健康提示：您累计在线时间满1.5小时，建议您适当休息眼睛，活动身体，在畅享游戏的同时，也要注意劳逸结合哦~", "", null, null, !0)
    }, e.BaiduPrevent_30 = function() {
        UIPopDialog.ShowOKOnly("健康提示：您累计在线时间满3小时，点击确定退出游戏，建议您适当休息眼睛，活动身体，在畅享游戏的同时，也要注意劳逸结合哦~", "", function() {
            window.swan.exit({
                success: MainData.OnPauseGame()
            })
        }, null, !0)
    }, e.Share = function(t, a) {
        void 0 === a && (a = ""), console.log("Share"), e.shareOnSucc = t, e.shareTimeTick = GUtil.SystemMillionSecond();
        var n = {
            title: "注意，一大波僵尸即将来袭! ",
            imageUrl: "resource/imgs/shareImg.png"
        };
        platform.Share(n)
    }, e.ShareCallBack = function() {
        if (null != e.shareOnSucc) {
            var t = e.shareOnSucc,
                a = e.shareTimeTick;
            if (e.shareOnSucc = null, e.shareTimeTick = 0, !(MainData.GetCustomData(GUIDE_DATANAME) < 1)) return 0 == MainData.GetRefreshData("firstShare") ? (window.qq.showModal({
                title: "分享失败",
                content: "请重新分享给不同的好友或群",
                showCancel: !1,
                success: function(e) {
                    e.confirm && console.log("click ok")
                }
            }), void MainData.SetRefreshData("firstShare", 1)) : void(GUtil.SystemMillionSecond() - a >= 3e3 ? t() : UIPopDialog.ShowOKOnly("分享失败", "", null, null, !0))
        }
    }, e.TouTiaoRecorderShare = function(e, t) {
        return platform.IsDebugMode() ? void e.call(t) : void(MainData.gbattle.ui.toutiaoIsRecording ? (console.log("录制中分享"), platform.ToutiaoStopRecord(e, t)) : (console.log("录制完成分享"), platform.ToutiaoShare(e, t)))
    }, e.kds = null, e.nativeOnSucc = null, e.isShowNative_2 = !1, e._VideoADLock = !1, e.gamePause = !1, e.videoChangeNative = !1, e.toutiaoVideoIsLoad = !1, e.videoChangeNative_id = "", e.bannerChangeNative_id = "", e.bannerChangeNative_id1 = "", e.bannerStyle = {}, e.bannerMode = 1, e.uiBannerAD = null, e.uiADTop = null, e.currNative_id = "", e.currNative_adPion = 0, e.baiduBannerTimer = 0, e.oppoBannerTimer = 0, e.interAd_adPoint2 = "", e.interAd_adPoint5 = "", e.interAd_adPoint3 = "", e.interAd_adPoint6 = "", e.interAd_adPoint4 = "", e.oppoInterADTime = 0, e.imghead = "", e.shareOnSucc = null, e.shareTimeTick = 0, e
}();
__reflect(ADSDK.prototype, "ADSDK");
var MYAD = function() {
    function e() {}
    return e.Video_UIPopReward = function(e, t, a) {
        3 == GameChannel ? ADSDK.Share(e) : ADSDK.ShowVideoAD_KDS(27, e, t, a, !1, ADSDK.Video_ids.adPoint_27)
    }, e.Video_UIDungeonReward = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(26, e, t, a, !1, ADSDK.Video_ids.adPoint_26)
    }, e.Video_UIDungeon = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(23, e, t, a, !1, ADSDK.Video_ids.adPoint_23)
    }, e.Video_UIFreeTankUp = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(24, e, t, a, !1, ADSDK.Video_ids.adPoint_24)
    }, e.Video_UIBuyDiamond = function(e, t, a) {
        if (3 == GameChannel) {
            var n = MainData.GetRefreshData("qqShare_22");
            2 > n ? ADSDK.Share(function() {
                e && e(), MainData.SetRefreshData("qqShare_22", MainData.GetRefreshData("qqShare_22") + 1)
            }) : ADSDK.ShowVideoAD_KDS(22, e, t, a, !1, ADSDK.Video_ids.adPoint_22)
        } else ADSDK.ShowVideoAD_KDS(22, e, t, a, !1, ADSDK.Video_ids.adPoint_22)
    }, e.Video_GRewardBoxVideo = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(16, e, t, a, !1, ADSDK.Video_ids.adPoint_16)
    }, e.Video_UIFlyBoxVideo = function(e, t, a, n, i) {
        3 == GameChannel && 0 == n.videoMode ? ADSDK.Share(t) : ADSDK.ShowVideoAD_KDS(e, t, a, n, !1, i)
    }, e.Video_UILuckyWheel = function(e, t, a) {
        if (3 == GameChannel) {
            var n = MainData.GetRefreshData("qqVideo_20");
            2 > n ? (MainData.SetRefreshData("qqVideo_20", n + 1), ADSDK.ShowVideoAD_KDS(20, e, t, a, !1, ADSDK.Video_ids.adPoint_20)) : ADSDK.Share(e)
        } else ADSDK.ShowVideoAD_KDS(20, e, t, a, !1, ADSDK.Video_ids.adPoint_20)
    }, e.Video_UIShop_BuyTank = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(15, e, t, a, !1, ADSDK.Video_ids.adPoint_15)
    }, e.Video_UIAutoCompose = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(14, e, t, a, !1, ADSDK.Video_ids.adPoint_14)
    }, e.Video_UISignDay = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(21, e, t, a, !1, ADSDK.Video_ids.adPoint_21)
    }, e.Video_UIBank = function(e, t, a) {
        if (3 == GameChannel) {
            var n = MainData.GetRefreshData("qqVideo_19");
            2 > n ? (MainData.SetRefreshData("qqVideo_19", n + 1), ADSDK.ShowVideoAD_KDS(19, e, t, a, !1, ADSDK.Video_ids.adPoint_19)) : ADSDK.Share(e)
        } else ADSDK.ShowVideoAD_KDS(19, e, t, a, !1, ADSDK.Video_ids.adPoint_19)
    }, e.Video_UIOfflineReward = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(10, e, t, a, !1, ADSDK.Video_ids.adPoint_10)
    }, e.Video_UINewTank = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(12, e, t, a, !1, ADSDK.Video_ids.adPoint_12)
    }, e.Video_UISpdUp = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(13, e, t, a, !1, ADSDK.Video_ids.adPoint_13)
    }, e.Video_UIRankDown = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(25, e, t, a, !1, ADSDK.Video_ids.adPoint_25)
    }, e.Video_UIRankDoubleReward = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(11, e, t, a, !1, ADSDK.Video_ids.adPoint_11)
    }, e.Video_UIFreeBuyTank = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(28, e, t, a, !1, ADSDK.Video_ids.adPoint_28)
    }, e.Video_UILuckyBagReward = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(29, e, t, this, !1, ADSDK.Video_ids.adPoint_29)
    }, e.Video_UIEliteBagReward = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(30, e, t, this, !1, ADSDK.Video_ids.adPoint_30)
    }, e.Video_UILuckyWheel_51 = function(e, t, a) {
        ADSDK.ShowVideoAD_KDS(31, e, t, this, !1, ADSDK.Video_ids.adPoint_31)
    }, e.aldStageStart = function(e, t) {}, e.aldStageEnd = function(e, t, a) {}, e.aldFirstRank = function() {}, e.aldSign = function() {}, e.aldpeed = function() {}, e.aldLuckyWheel = function() {}, e.aldyMysterious = function() {}, e.aldynthetic = function() {}, e.aldchallenge = function() {}, e
}();
__reflect(MYAD.prototype, "MYAD");
var GAudio = function() {
    function e() {}
    return e.PlayBGM = function(t) {
        if (e.bgmOn) {
            if (null == e.bgmSound || t != e.bgmName) {
                if (e.bgmChannel && (e.bgmChannel.stop(), e.bgmChannel = null, e.bgmSound = null), e.bgmSound = RES.getRes(t), null == e.bgmSound) return;
                e.bgmSound.type = egret.Sound.MUSIC
            }
            var a = 0;
            2 == GameChannel && (a = 1), e.bgmChannel = e.bgmSound.play(0, a)
        }
        e.bgmName = t, -1 != e.timeOut1 && clearTimeout(e.timeOut1), 2 == GameChannel && (-1 != e.timeOut && clearTimeout(e.timeOut), e.timeOut = setTimeout(function() {
            e.bgmChannel.stop(), e.bgmChannel = null, e.PlayBGM(e.bgmName)
        }, 91e3))
    }, e.StopBGM = function() {
        e.pausePosition = 0, e.bgmName = null, e.bgmChannel && (e.bgmChannel.stop(), e.bgmChannel = null, e.bgmSound = null), 2 == GameChannel && -1 != e.timeOut && clearTimeout(e.timeOut), -1 != e.timeOut1 && clearTimeout(e.timeOut1)
    }, e.PauseBGM = function() {
        e.bgmChannel && (e.pausePosition = e.bgmChannel.position, e.bgmChannel.stop(), e.bgmChannel = null), e.onPause = !0, 2 == GameChannel && -1 != e.timeOut && clearTimeout(e.timeOut), -1 != e.timeOut1 && clearTimeout(e.timeOut1)
    }, e.ResumeBGM = function() {
        if (e.onPause && (e.onPause = !1, e.bgmOn))
            if (null != e.bgmSound)
                if (null != e.bgmChannel) e.bgmChannel.stop(), setTimeout(function() {
                    if (e.bgmChannel = e.bgmSound.play(e.pausePosition, 1), console.log("PLAY Delay100 ResumeBGM " + e.bgmName), 2 == GameChannel) - 1 != e.timeOut && clearTimeout(e.timeOut), e.timeOut = setTimeout(function() {
                        e.bgmChannel.stop(), e.bgmChannel = null, e.PlayBGM(e.bgmName)
                    }, 91e3 - 1e3 * e.pausePosition);
                    else {
                        var t = 5 == GameChannel ? 41e3 : 91e3; - 1 != e.timeOut1 && clearTimeout(e.timeOut1), e.timeOut1 = setTimeout(function() {
                            e.bgmChannel.stop(), e.bgmChannel = null, e.PlayBGM(e.bgmName)
                        }, t - 1e3 * e.pausePosition)
                    }
                }, 100);
                else if (e.bgmChannel = e.bgmSound.play(e.pausePosition, 1), console.log("PLAY ResumeBGM " + e.bgmName), 2 == GameChannel) - 1 != e.timeOut && clearTimeout(e.timeOut), e.timeOut = setTimeout(function() {
            e.bgmChannel.stop(), e.bgmChannel = null, e.PlayBGM(e.bgmName)
        }, 91e3 - 1e3 * e.pausePosition);
        else {
            var t = 5 == GameChannel ? 41e3 : 91e3; - 1 != e.timeOut1 && clearTimeout(e.timeOut1), e.timeOut1 = setTimeout(function() {
                e.bgmChannel.stop(), e.bgmChannel = null, e.PlayBGM(e.bgmName)
            }, t - 1e3 * e.pausePosition)
        } else null != e.bgmName && e.PlayBGM(e.bgmName)
    }, e.PlaySoundByName = function(t, a, n) {
        if (platform.EnableAudio() && e.soundOn) {
            t = t.replace(".mp3", "_mp3"), t = t.replace(".m4a", "_mp3"), t = t.replace("_m4a", "_mp3");
            var i = RES.getRes(t);
            if (i) {
                i.type = egret.Sound.EFFECT;
                var o = i.play(0, 1);
                o.volume = a
            }
        }
    }, e.soundOn = !0, e.bgmOn = !0, e.bgmSound = null, e.bgmChannel = null, e.pausePosition = 0, e.bgmName = null, e.onPause = !1, e.timeOut = -1, e.timeOut1 = -1, e
}();
__reflect(GAudio.prototype, "GAudio");
var GBattle = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.pools = new GPools, t.slots = null, t.tips = null, t.guide = null, t.battleMode = 0, t.bossList = null, t._doUpdateEnemys = !0, t._saveDelay = 6e4, t.pause = !1, t._dskip = !1, t._dropedBox = 0, t._dropBoxDelay = 0, t.boxRewardUpCount = 0, t.boxRewardMaxTankCount = 0, t.wheel_51_currTankLv = 0, t.needDropBox = 0, t.boxList = {}, t._composeDelay = -1, t.tanks = null, t._createEnemyDt = 0, t._enemys = [], t._rndCE = [0, 1, 2, 3, 4, 5, 6, 7], t.grid = new GridCollision, t.quadTree = null, t._lineCount = 0, t._rzBorder = 60, t._rzSize = 90, t._rzUITopHeight = 248, t.refreshEnemys = null, t.zombieMoveDownY = 0, t.isShowSpdGuide = !1, t._alertTime = 0, t._bfCount = 0, t._guide_lockTankComposeOnly = !1, t.vec2 = new Vector2(0, 0), t.vec2t = new Vector2(0, 0), t._runDelay = [], t._runFunc = [], t._runThisObj = [], t.timer = -1, t.pos = null, t.prevPos = null, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.removeChild(t.gTouchPlant), GameView.instance.addChild(t.gTouchPlant), t.gTouchPlant.visible = !1, t.slots = [t.slot0, t.slot1, t.slot2, t.slot3, t.slot4, t.slot5, t.slot6, t.slot7, t.slot8, t.slot9, t.slot10, t.slot11, t.slot12, t.slot13, t.slot14], t.tips = [t.tip0, t.tip1, t.tip2, t.tip3, t.tip4, t.tip5, t.tip6, t.tip7, t.tip8, t.tip9, t.tip10, t.tip11, t.tip12, t.tip13, t.tip14], t.tanks = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        var a = function(e, t) {
            return null
        };
        t.gEnemyView.$hitTest = a, t.gEnemyView.touchEnabled = !1, t.gEnemyRedView.$hitTest = a, t.gEnemyRedView.touchEnabled = !1, t.gHPLayer.$hitTest = a, t.gHPLayer.touchEnabled = !1, t.gBulletTails.$hitTest = a, t.gBulletTails.touchEnabled = !1, t.gBulletView.$hitTest = a, t.gBulletView.touchEnabled = !1, t.gFlyIcons.$hitTest = a, t.gFlyIcons.touchEnabled = !1, t.gFlyIconsTop.$hitTest = a, t.gFlyIconsTop.touchEnabled = !1, t.imgAnim.visible = !1, t.imgAlert.alpha = 0, t.gTouchAnim.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.onTouchBegin_Aim, t), GTime.startTick(t.Update, t), t.validateNow();
        for (var n = 0; n < t.tanks.length; n++)
            if (null != MainData.role.tanks[n] && MainData.role.tanks[n] > 0) {
                var i = MainData.role.tanks[n];
                t.CreateTank(n, i, !1)
            } switch (t.quadTree = new QuadTree(t.gEnemyView), t.battleMode) {
            case 0:
                t.InitBattle();
                break;
            case 1:
                t.InitDungeon()
        }
        10 == GameChannel && (t.bg.source = "Middle_4399_png")
    }, t.prototype.InitBattle = function() {
        var e = this;
        e.battleMode = 0, e.HideTips(), e.ui.visible = !0, e.ui.Init(e), e.refreshEnemys = e.RefreshEnemys_GBattle, MainData.OnEnterGame(), e.guide = new GGuide(e), e.guide.OnEnterGame()
    }, t.prototype.InitDungeon = function() {
        -1 != this.timer && clearTimeout(this.timer);
        var e = this;
        e.refreshEnemys = e.RefreshEnemys_GDungeon, e.ui2.visible = !0, e.ui2.Init(e, e.dungeonSD), MainData.OnEnterGame(), e.bossList = [], e.RefreshEnemys_GDungeon(!0), MYAD.aldStageStart(e.dungeonSD.lvId, "第" + e.dungeonSD.lvId + "关")
    }, t.prototype.PlayerPower = function() {
        for (var e = this, t = 0, a = 0; a < e.tanks.length; a++)
            if (null != e.tanks[a]) {
                var n = MainData.allSeeds.tanks[e.tanks[a].gd.sdId];
                t += n.power
            } return t *= MainData.GetAtkRate(), t = Math.floor(t)
    }, t.prototype.onTouchBegin_Aim = function(e) {
        var t = this;
        t.imgAnim.visible = !0, t.imgAnim.x = e.stageX, t.imgAnim.y = e.stageY, t.RegTouch(t, t.onTouchMove_Aim, t.onTouchEnd_Aim)
    }, t.prototype.onTouchMove_Aim = function(e) {
        var t = this;
        t.imgAnim.x = e.stageX, t.imgAnim.y = e.stageY
    }, t.prototype.onTouchEnd_Aim = function() {
        var e = this;
        e.imgAnim.visible = !1, e.UnregTouch(e, e.onTouchMove_Aim, e.onTouchEnd_Aim)
    }, t.prototype.Update = function() {
        var e = this;
        e._dskip = !e._dskip, e.pause || (e._doUpdateEnemys && e.UpdateEnemys(), e.UpdateTanks(), e.UpdateBullets(), e.UpdateTails(), 0 == e.battleMode ? (e.ui.UpdateUI(), e.UpdateAutoCompose(), e.UpdateDropBox(), e._saveDelay <= 0 ? MainData.SaveGame() : e._saveDelay -= GTime.deltaTime) : e.ui2.UpdateUI(e), e.UpdateRunDelay(), dragonBones.WorldClock.clock.advanceTime(GTime.deltaTime), e.UpdateHintBuyTank())
    }, t.prototype.UpdateDropBox = function() {
        var e = this;
        e._dropBoxDelay += GTime.deltaTime, e._dropBoxDelay > MainData.GameValue(21) && (e._dropBoxDelay = 0, e.needDropBox <= 0 && e.needDropBox++);
        var t = e.GetEmptySlotIdx(5);
        if (t >= 0 && e.needDropBox > 0) {
            var a = null,
                n = e._dropedBox >= MainData.GameValue(22);
            if (n && (e._dropedBox = 0), n)
                for (var i in e.boxList)
                    if (e.boxList[i].isADBox) {
                        n = !1;
                        break
                    } if (e._dropedBox++, e.boxRewardUpCount > 0 ? (a = new GRewardBox(!1, t, !0), --e.boxRewardUpCount) : e.boxRewardMaxTankCount > 0 ? (--e.boxRewardMaxTankCount, a = new GRewardBox(n, t, !1, e.wheel_51_currTankLv)) : a = new GRewardBox(n, t, !1), a) {
                a.x = e.slots[t].x + e.slots[t].parent.x, a.y = -100;
                var o = e.slots[t].y + e.slots[t].parent.y;
                e.ui.gBoxView.addChild(a), e.boxList[t] = a, a.touchEnabled = !1, egret.Tween.get(a).to({
                    y: o
                }, 1e3).call(function() {
                    a.touchEnabled = !0
                }, e), e.needDropBox--
            }
        }
    }, t.prototype.UpdateAutoCompose = function() {
        var e = this;
        if (e._composeDelay <= 0) {
            if (!e.gTouchPlant.visible && MainData.GetAutoComposeDuration() > 0)
                for (var t = 5; t < e.tanks.length; t++)
                    for (var a = 5; a < e.tanks.length; a++)
                        if (t != a) {
                            var n = e.tanks[t],
                                i = e.tanks[a];
                            if (null != n && null != i && n.gd.lv == i.gd.lv && n.gd.lv < MainData.MaxTankLv && !n.lockTouch && !i.lockTouch) return n.lockTouch = !0, i.lockTouch = !0, e.ComposeTank(n, i), void(e._composeDelay = MainData.GameValue(14) / 2)
                        }
        } else e._composeDelay -= GameFPS
    }, t.prototype.AddBullet = function(e, t) {
        if (null != e && null != e.parent) {
            var a = this,
                n = a.pools.GetBullet(e.sd.bulletId);
            n.SetTarget(e, t), a.gBulletView.addChild(n)
        }
    }, t.prototype.UpdateTanks = function() {
        for (var e = this, t = 0; 5 > t; t++) null != e.tanks[t] && e.tanks[t].UpdateAI()
    }, t.prototype.RefreshEnemys_GBattle = function() {
        var e = this;
        e._createEnemyDt -= GTime.deltaTime;
        var t = MainData.allSeeds.playerRanks[MainData.role.lv].enemyMoveSpd,
            a = GUtil.RandomRangeInt(4, 8);
        if (e._rndCE.sort(function(e, t) {
                return GUtil.RandomRangeInt(0, 100) < 50 ? 1 : -1
            }), e._createEnemyDt < 0) {
            for (var n = 0; a > n; n++) {
                var i = e.GetEnemyIdByPlayerRank(MainData.role.lv);
                e.RefreshZombie(i, MainData.role.lv, e._rndCE[n], 0)
            }
            e._createEnemyDt = e._rzSize / t
        }
        return t
    }, t.prototype.RefreshEnemys_GDungeon = function(e) {
        void 0 === e && (e = !1);
        var t = this;
        t._createEnemyDt -= GTime.deltaTime;
        var a = MainData.allSeeds.playerRanks[t.dungeonSD.rank].enemyMoveSpd,
            n = GUtil.RandomRangeInt(4, 8);
        if (t._rndCE.sort(function(e, t) {
                return GUtil.RandomRangeInt(0, 100) < 50 ? 1 : -1
            }), e) {
            t.RunDelay(2, function() {
                UIPopTips.ShowTips("Boss来袭!"), GAudio.PlaySoundByName("hugewave.m4a", 1, 1)
            }, t);
            for (var i = 0; i < t.dungeonSD.bossIds.length; i++) {
                var o = t.RefreshZombie(t.dungeonSD.bossIds[i], t.dungeonSD.rank, t.dungeonSD.bossX[i], t.dungeonSD.bossY[i] * a, t.dungeonSD.bossSizes[i]);
                o.zIndex = o.y, t.bossList.push(o)
            }
            t.gEnemyView.sortChildren(), t._createEnemyDt = t._rzSize / a
        } else if (t._createEnemyDt < 0 && 0 == t.dungeonSD.bossOnly) {
            for (var i = 0; n > i; i++) {
                for (var r = t.GetEnemyIdByPlayerRank(t.dungeonSD.rank), s = !1, l = t._rndCE[i], d = t._rzBorder + l * t._rzSize, u = t._rzUITopHeight, c = 0; c < t.bossList.length; c++) {
                    var o = t.bossList[c];
                    if (Math.abs(d - o.x) < o.width * o.scaleX * .5 && Math.abs(u - o.y) < o.height * o.scaleY) {
                        s = !0;
                        break
                    }
                }
                s || t.RefreshZombie(r, t.dungeonSD.rank, l, 0)
            }
            t._createEnemyDt = t._rzSize / a, t._lineCount++;
            for (var i = 0; i < t.gEnemyView.$children.length; i++) {
                var h = t.gEnemyView.$children[i];
                h.zIndex = h.y
            }
            t.gEnemyView.sortChildren()
        }
        for (var p = !0, i = 0; i < t.bossList.length; i++)
            if (t.bossList[i].gd.hp > 0) {
                p = !1;
                break
            } return p && t._doUpdateEnemys && t.DungeonWin(), a
    }, t.prototype.RefreshZombie = function(e, t, a, n, i) {
        void 0 === i && (i = 1);
        var o = this,
            r = o.pools.GetZombie(e, t);
        return r.x = o._rzBorder + a * o._rzSize, r.y = o._rzUITopHeight - n, r.scaleX != i && (r.scaleX = i), r.scaleY != i && (r.scaleY = i), r.anchorOffsetX = o._rzSize / 2, r.anchorOffsetY = o._rzSize, o.gEnemyView.addChildAt(r, 0), o._enemys.push(r), o.quadTree.insert(r), r
    }, t.prototype.UpdateEnemys = function() {
        var e = this,
            t = e.refreshEnemys.call(e);
        this.zombieMoveDownY = t * GTime.deltaTime;
        for (var a = 0, n = 0; n < e._enemys.length; n++) {
            var i = e._enemys[n];
            i.y += this.zombieMoveDownY, i.SyncUIHP(), i.y > e.gTowersView.y && e.BattleFail(), a = Math.max(i.y, a)
        }
        var o = e.gTowersView.y - a < 300;
        o || (e.isShowSpdGuide = !1), e.UpdateAlert(o);
        var r = MainData.GetCustomData("SpdShowTick");
        if (o && !e.isShowSpdGuide && MainData.GetSpdUpDuration() <= 0 && 0 == e.battleMode) {
            if (0 == MainData.GetSundat()) {
                var s = GUtil.SystemMillionSecond();
                switch (GameChannel) {
                    case 3:
                        2 == ADSDK.kds.getBlack() || 3 == ADSDK.kds.getBlack() ? s - r > 6e4 && (MainData.SetCustomData("SpdShowTick", s), UISpdUp.Show()) : e.guide.GuideSpd();
                        break;
                    case 7:
                        2 == ADSDK.kds.getBlack() || 3 == ADSDK.kds.getBlack() ? s - r > 6e4 && (MainData.SetCustomData("SpdShowTick", s), UISpdUp.Show()) : e.guide.GuideSpd();
                        break;
                    case 4:
                        3 == ADSDK.kds.getBlack() ? s - r > 6e4 && (MainData.SetCustomData("SpdShowTick", s), UISpdUp.Show()) : e.guide.GuideSpd();
                        break;
                    case 2:
                        2 == ADSDK.kds.getBlack() || 3 == ADSDK.kds.getBlack() ? s - r > 6e4 && (MainData.SetCustomData("SpdShowTick", s), UISpdUp.Show()) : e.guide.GuideSpd();
                        break;
                    default:
                        e.guide.GuideSpd()
                }
            } else e.guide.FirstSpdGuide();
            e.isShowSpdGuide = !0
        }
    }, t.prototype.UpdateAlert = function(e) {
        var t = this;
        if (e) {
            var a = Math.sin(t._alertTime);
            a = (a + 1) / 4 + .5, t._alertTime < 1 && (a *= t._alertTime), t._alertTime += 10 * GTime.deltaTime, t.imgAlert.alpha = a
        } else t.imgAlert.alpha -= 2 * GTime.deltaTime, t.imgAlert.alpha <= 0 && (t.imgAlert.alpha = 0)
    }, t.prototype.UpdateBullets = function() {
        var e = this,
            t = e.gTowersView.y + 100,
            a = (UIPause.instance, e._rzUITopHeight),
            n = e.width;
        e._dskip || e.quadTree.refresh(e.quadTree);
        for (var i in e.pools.bulletPoolDict)
            for (var o = e.pools.bulletPoolDict[i], r = 0; r < o.objs.length; r++) {
                var s = o.objs[r];
                s.used && (s.UpdatePosition(t), e._dskip || s.CheckHit(null, 0, a, n, this.zombieMoveDownY), s.UpdateRotation())
            }
    }, t.prototype.UpdateTails = function() {
        for (var e = this, t = 0; t < e.pools.tailsPool.objs.length; t++) {
            var a = e.pools.tailsPool.objs[t];
            a.used && a.Update()
        }
    }, t.prototype.DungeonWin = function() {
        var e = this;
        e._doUpdateEnemys = !1;
        for (var t = e._enemys.length - 1; t >= 0; t--) {
            var a = e._enemys[t];
            a.Die(!0)
        }
        e.RunDelay(2, function() {
            GAudio.PlaySoundByName("winmusic.m4a", 1, 1), e.pause = !0, e.dungeonSD.lvId == MainData.role.currentDungeonId ? (UIDungeonReward.Show(MainData.role.currentDungeonId, !0), MainData.role.currentDungeonId++) : UIDungeonReward.Show(MainData.role.currentDungeonId, !1)
        }, e), MYAD.aldStageEnd(e.dungeonSD.lvId, "第" + e.dungeonSD.lvId + "关", !0), platform.TaTrack("challenge_end", {
            Challenge_id: e.dungeonSD.lvId,
            Challenge_result: 1
        })
    }, t.prototype.BattleFail = function() {
        var e = this;
        if (0 == e.battleMode) {
            e._bfCount++, e._doUpdateEnemys = !1;
            for (var t = e._enemys.length - 1; t >= 0; t--) {
                var a = e._enemys[t];
                a.Die(!0)
            }
            GAudio.PlaySoundByName("cherryBomb_m4a", 1, 2), e.RunDelay(2, function() {
                e._doUpdateEnemys = !0
            }, e);
            var n = Math.min(MainData.role.lv + 1, MainData.MaxRankLv),
                i = MainData.allSeeds.playerRanks[n];
            platform.TaTrack("level_end", {
                Current_level: MainData.role.lv,
                Zhanli_recommend: i.rightPower
            }), e.guide.ShowBattleFailedGuide();
            var o = Math.min(MainData.role.lv, MainData.MaxRankLv),
                i = MainData.allSeeds.playerRanks[o + 1],
                r = MainData.gbattle.PlayerPower();
            MainData.GetCustomData("BattleFailedGuide_Passed") > 0 && r < i.rightPower && UIRank.Show()
        } else if (!e.pause) {
            e.pause = !0;
            var s = !1;
            switch (2 == GameChannel && (s = !0), GAudio.PlaySoundByName("losemusic.m4a", 1, 1), UIPopDialog.ShowOKOnly("挑战失败!", "fail_png", function() {
                GameView.instance.ResumeBattle_UIDungeon(null), 7 == GameChannel && (platform.ToutiaoStopRecord(), platform.ClearVideo())
            }, e, !1, s), GameChannel) {
                case 2:
                    switch (ADSDK.kds.getBlack()) {
                        case 0:
                            ADSDK.ShowNative(2, ADSDK.native_id, ADSDK.NativeOnload);
                            break;
                        case 1:
                            ADSDK.ShowNative(2, ADSDK.native_id, ADSDK.NativeOnload);
                            break;
                        case 2:
                            ADSDK.ShowNative(2, ADSDK.native_id, ADSDK.NativeOnload);
                            break;
                        case 3:
                            setTimeout(function() {
                                ADSDK.ShowNative(2, ADSDK.native_id, ADSDK.NativeOnload)
                            }, 1e3)
                    }
                    break;
                case 4:
                    ADSDK.ShowNative(2, ADSDK.native_id, ADSDK.NativeOnload);
                    break;
                case 7:
                    switch (ADSDK.kds.getBlack()) {
                        case 0:
                            break;
                        case 1:
                            ADSDK.ShowInterAd(2);
                            break;
                        case 2:
                            setTimeout(function() {
                                ADSDK.ShowInterAd(2)
                            }, 800);
                            break;
                        case 3:
                            setTimeout(function() {
                                ADSDK.ShowInterAd(2)
                            }, 1e3)
                    }
            }
            MYAD.aldStageEnd(e.dungeonSD.lvId, "第" + e.dungeonSD.lvId + "关", !1), platform.TaTrack("challenge_end", {
                Challenge_id: e.dungeonSD.lvId,
                Challenge_result: 2
            })
        }
        MainData.SaveGame()
    }, t.prototype.GetEnemyIdByPlayerRank = function(e) {
        var t = 1,
            a = MainData.allSeeds.playerRanks[e],
            n = GUtil.RandomRangeFloat(0, a.enemyGroupSumRate);
        for (var i in a.enemyGroup) {
            var o = Number(i),
                r = a.enemyGroup[o];
            if (r >= n) {
                t = o;
                break
            }
            n -= r
        }
        return t
    }, t.prototype.RemoveEnemy = function(e) {
        var t = this,
            a = t._enemys.indexOf(e);
        a >= 0 && t._enemys.splice(a, 1)
    }, t.prototype.GetEmptySlotIdx = function(e) {
        void 0 === e && (e = 0);
        for (var t = this, a = t.boxList, n = e; n < t.tanks.length; n++)
            if (null == t.tanks[n] && !a[n]) return n;
        return -1
    }, t.prototype.GetEmptySlotCount = function() {
        for (var e = this, t = 0, a = 5; a < e.tanks.length; a++) null == e.tanks[a] && t++;
        return t
    }, t.prototype.GetSlotIdxByTank = function(e) {
        for (var t = this, a = 0; a < t.tanks.length; a++)
            if (t.tanks[a] == e) return a;
        return -1
    }, t.prototype.IsEmptySlot = function(e) {
        var t = this;
        return t.tanks[e] ? !1 : t.boxList[e] ? !1 : !0
    }, t.prototype.GetSlotIdxByPos = function(e, t) {
        var a = this;
        e += 45, t += 45;
        for (var n = 0; n < a.slots.length; n++) {
            var i = a.slots[n],
                o = Math.abs(i.x - e),
                r = Math.abs(i.y - t);
            if (o < i.width && r < i.height) return n
        }
        return -1
    }, t.prototype.TankMove = function(e) {
        var t = this,
            a = t.GetSlotIdxByTank(e),
            n = t.GetSlotIdxByPos(e.x, e.y),
            i = t.slots[a],
            o = t.slots[n];
        if (0 > n) t.SellTank(e, null, function() {
            e.TweenBack()
        }, t);
        else {
            var r = t.tanks[n],
                s = t.IsEmptySlot(n),
                l = 0;
            switch (e == r || null == r && !s ? e.TweenBack() : l = null == r || e.gd.lv != r.gd.lv || e.gd.lv == MainData.MaxTankLv ? 1 : 2, 2 == l && 1 == t.battleMode && (l = 1), t._guide_lockTankComposeOnly && 1 == l && (l = 0), e.gd.lv == MainData.MaxTankLv && 1 == l && null != r && e.gd.lv == r.gd.lv && UIPopTips.ShowTips("当前植物已达到最高等级，无法合成"), l) {
                case 0:
                    e.TweenBack();
                    break;
                case 1:
                    t.tanks[a] = r, t.tanks[n] = e, e.TweenTo(o.x, o.y), MainData.role.tanks[a] = 0, MainData.role.tanks[n] = e.gd.lv, null != r && (MainData.role.tanks[a] = r.gd.lv, r.TweenTo(i.x, i.y));
                    break;
                case 2:
                    t.ComposeTank(e, r)
            }
        }
    }, t.prototype.ComposeTank = function(e, t) {
        var a = MainData.GetRefreshData("Task_2");
        MainData.SetRefreshData("Task_2", a + 1);
        var n = this,
            i = n.GetSlotIdxByTank(e),
            o = n.GetSlotIdxByTank(t),
            r = n.slots[o],
            s = r.x + r.parent.x + t.width / 2,
            l = r.y + r.parent.y + t.height / 2;
        e.TweenTo(r.x - 30, r.y, function() {
            e.TweenTo(r.x, r.y, function() {
                e.RemoveMe()
            })
        }), t.TweenTo(r.x + 30, r.y, function() {
            t.TweenTo(r.x, r.y, function() {
                var e = t.gd.lv + 1;
                t.RemoveMe(), n.FreeUpTank(e, o), MainData.role.tanks[i] = 0, GEffect.OnceEffect("eff_1", s + 0, l - 20, 1.5), GAudio.PlaySoundByName("points4_m4a", 1, 1)
            })
        }, n), n.tanks[i] = null
    }, t.prototype.FreeUpTank = function(e, t) {
        var a = this,
            n = MainData.GetCustomData("Compose_freeLvTick"),
            i = GUtil.SystemMillionSecond() >= n,
            o = e + Math.min(Math.max(Math.max(MainData.role.highestTank - 4, 0) - e, 0), 3);
        if (o > e && i && o < MainData.MaxTankLv && o > 4 && GUtil.RandomRangeFloat(0, 100) < MainData.GameValue(24)) {
            var r = GUtil.SystemMillionSecond() + Math.min(5e3 * e, 3e4);
            UIFreeTankUp.Show(function() {
                MainData.SetCustomData("Compose_freeLvTick", r), a.CreateTank(t, o), MainData.role.tanks[t] = o
            }, function() {
                a.CreateTank(t, e), MainData.role.tanks[t] = e
            }, a, e, o)
        } else a.CreateTank(t, e), MainData.role.tanks[t] = e
    }, t.prototype.SellTank = function(e, a, n, i) {
        var o = this;
        if (null == o.ui) return void(n && n.call(i));
        GUtil.GetWorldPos(o.ui.imgRecovery, o.vec2), GUtil.GetWorldPos(e, o.vec2t);
        var r = Math.abs(o.vec2.x - o.vec2t.x),
            s = Math.abs(o.vec2.y - o.vec2t.y);
        r < o.ui.imgRecovery.width && s < o.ui.imgRecovery.height ? (t.guideDeleteTank = !0, UISellPopDialog.Show(e, function() {
            o.ui.FlyMoneys(o.vec2t.x, o.vec2t.y, e.sd.price), GAudio.PlaySoundByName("sell_m4a", 1, 1), o.DeleteTank(e), platform.TaTrack("assist_action", {
                assistaction_type: 17
            })
        }, function() {
            n && n.call(i)
        }, o)) : n && n.call(i)
    }, t.prototype.ShowTips = function(e) {
        if (0 == this.battleMode)
            for (var t = 0; t < this.tanks.length; t++) {
                var a = this.tanks[t];
                null != a && e != a && a.gd.lv == e.gd.lv && (this.tips[t].visible = !0)
            }
    }, t.prototype.HideTips = function() {
        if (0 == this.battleMode)
            for (var e = 0; e < this.tips.length; e++) this.tips[e].visible = !1
    }, t.prototype.CreateTank = function(e, t, a) {
        void 0 === a && (a = !0);
        var n = this,
            i = n.pools.GetTank(t),
            o = n.slots[e];
        i.x = o.x, i.y = o.y, n.tanks[e] = i, MainData.role.tanks[e] = t, egret.Tween.removeTweens(i), a && (i.scaleX = .5, i.scaleY = .5, egret.Tween.get(i).to({
            scaleX: 1,
            scaleY: 1
        }, 800, egret.Ease.elasticOut), GAudio.PlaySoundByName("plant1_m4a", 1, 1)), n.gTowersView.addChild(i), n.guide && (n.guide.GuideAutoCompose(), n.guide.GuideDeleteTank()), UIAchieve_Cell.UpdataAchieve(t), n.StartHintCompose()
    }, t.prototype.DeleteTank = function(e) {
        for (var t = this, a = 0; a < t.tanks.length; a++) t.tanks[a] == e && (t.tanks[a] = null, MainData.role.tanks[a] = 0);
        e.RemoveMe()
    }, t.prototype.RegTouch = function(e, t, a) {
        var n = this;
        n.gTouchPlant.visible = !0, n.gTouchPlant.addEventListener(egret.TouchEvent.TOUCH_MOVE, t, e), n.gTouchPlant.addEventListener(egret.TouchEvent.TOUCH_END, a, e), n.gTouchPlant.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, a, e)
    }, t.prototype.UnregTouch = function(e, t, a) {
        var n = this;
        n.gTouchPlant.visible = !1, n.gTouchPlant.removeEventListener(egret.TouchEvent.TOUCH_MOVE, t, e), n.gTouchPlant.removeEventListener(egret.TouchEvent.TOUCH_END, a, e), n.gTouchPlant.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, a, e)
    }, t.prototype.RunDelay = function(e, t, a) {
        for (var n = !0, i = 0; i < this._runDelay.length; i++)
            if (null == this._runFunc[i]) {
                this._runDelay[i] = e, this._runFunc[i] = t, this._runThisObj[i] = a, n = !1;
                break
            } n && (this._runDelay.push(e), this._runFunc.push(t), this._runThisObj.push(a))
    }, t.prototype.ClearDelay = function(e, t) {
        for (var a = 0; a < this._runDelay.length; a++) this._runFunc[a] == e && this._runThisObj[a] == t && (this._runFunc[a] = null, this._runThisObj[a] = null)
    }, t.prototype.UpdateRunDelay = function() {
        for (var e = 0; e < this._runFunc.length; e++)
            if (null != this._runFunc[e] && (this._runDelay[e] -= GTime.deltaTime, this._runDelay[e] <= 0)) {
                var t = this._runFunc[e],
                    a = this._runThisObj[e];
                this._runFunc[e] = null, this._runThisObj[e] = null, t.call(a)
            }
    }, t.prototype.GetTankLength = function() {
        for (var e = 0, t = 5; t < this.tanks.length; t++) null != this.tanks[t] && ++e;
        return e
    }, t.prototype.GetTankMaxLV = function() {
        for (var e = -9999999, t = 0; t < this.tanks.length; t++) null != this.tanks[t] && this.tanks[t].gd.lv > e && (e = this.tanks[t].gd.lv);
        return e
    }, t.prototype.GetComposePos = function() {
        for (var e = [], t = this, a = 5; a < t.tanks.length; a++)
            for (var n = a + 1; n < t.tanks.length; n++)
                if (null != t.tanks[a] && null != t.tanks[n] && t.tanks[a].gd.sdId == t.tanks[n].gd.sdId) return e[0] = a, e[1] = n, e;
        return null
    }, t.prototype.StartHintCompose = function() {
        var e = this; - 1 != this.timer && clearTimeout(this.timer), null != e.prevPos && (e.tips[e.prevPos[0]].visible = !1, e.tips[e.prevPos[1]].visible = !1, egret.Tween.removeTweens(e.tips[e.prevPos[0]]), egret.Tween.removeTweens(e.tips[e.prevPos[1]])), this.timer = setTimeout(this.HintCompose, 5e3)
    }, t.prototype.HintCompose = function() {
        var e = this;
        1 != e.battleMode && (null != MainData.gbattle && (e.pos = MainData.gbattle.GetComposePos()), null != e.pos && MainData.gbattle.HintComposeAnim(e.pos))
    }, t.prototype.HintComposeAnim = function(e) {
        var t = this;
        1 != t.battleMode && (null != t.prevPos && (t.tips[t.prevPos[0]].visible = !1, t.tips[t.prevPos[1]].visible = !1, egret.Tween.removeTweens(t.tips[t.prevPos[0]]), egret.Tween.removeTweens(t.tips[t.prevPos[1]])), t.prevPos = e, t.tips[e[0]].visible = !0, t.tips[e[1]].visible = !0, egret.Tween.get(t.tips[e[0]], {
            loop: !0
        }).to({
            alpha: 0
        }, 500).to({
            alpha: 1
        }, 500), egret.Tween.get(t.tips[e[1]], {
            loop: !0
        }).to({
            alpha: 0
        }, 500).to({
            alpha: 1
        }, 500))
    }, t.prototype.UpdateHintBuyTank = function() {
        var e = this;
        0 == e.battleMode && (MainData.role.money < MainData.GetTankCost(e.ui.currBuyTankId) || GameView.instance.uiLayer.numChildren > 1 || GUtil.SystemMillionSecond() - MainData.GetCustomData("HintTimer") >= 5e3 && e.guide.BuyTankGuide())
    }, t.guideDeleteTank = !1, t
}(UIBase);
__reflect(GBattle.prototype, "GBattle");
var GridCollision = function() {
    function e() {
        this.grids = {}
    }
    return e.prototype.GetKey = function(e, t) {
        var a = 1e4 * Math.floor(e / 200) + Math.floor(t / 200);
        return a
    }, e.prototype.GetGridList = function(e, t) {
        var a = this.GetKey(e, t);
        return this.GetGridListByKey(a)
    }, e.prototype.GetGridListByKey = function(e) {
        var t = null;
        return null != this.grids[e] && (t = this.grids[e]), t
    }, e.prototype.AddZombie = function(e) {
        var t = e.width,
            a = e.height,
            n = t / 2,
            i = this.GetKey(e.x - n, e.y - a);
        this._AddZombie(i, e);
        var o = this.GetKey(e.x + n, e.y - a);
        i != o && this._AddZombie(o, e);
        var r = this.GetKey(e.x - n, e.y);
        i != r && o != r && this._AddZombie(r, e);
        var s = this.GetKey(e.x + n, e.y);
        i != s && o != s && r != s && this._AddZombie(s, e)
    }, e.prototype._AddZombie = function(e, t) {
        var a = this.GetGridListByKey(e);
        null == a && (a = [], this.grids[e] = a);
        for (var n = 0; n < a.length; n++)
            if (null == a[n]) return void(a[n] = t);
        a.push(t)
    }, e.prototype.ClearGrids = function() {
        for (var e in this.grids)
            for (var t = this.grids[e], a = 0; a < t.length; a++) t[a] = null
    }, e
}();
__reflect(GridCollision.prototype, "GridCollision");
var GSHttp = function() {
    function e() {
        this.onSending = !1, this.serverURL = [], this.dataList = [], this.onCompletes = [], this.onErrors = [], this.thisObjs = [], this.onComplete = null, this.onError = null, this.thisObj = null, this.hasJSON = !1, this.isGet = !1
    }
    return e.Send = function(t, a, n, i, o, r, s) {
        void 0 === i && (i = null), void 0 === o && (o = null), void 0 === r && (r = !1), void 0 === s && (s = !1), null == this.instance && (this.instance = new e, this.instance.onSending = !1), this.instance.isGet = s, s ? this.instance.SendGet(t, a, n, i, o) : this.instance.SendPost(t, a, n, i, o, r)
    }, e.prototype.SendPost = function(e, t, a, n, i, o) {
        void 0 === o && (o = !1), this.serverURL.push(e), this.dataList.push(t), this.onCompletes.push(a), this.onErrors.push(n), this.thisObjs.push(i), this.hasJSON = o, this.sendPostRequest()
    }, e.prototype.SendGet = function(e, t, a, n, i) {
        this.serverURL.push(e), this.dataList.push(t), this.onCompletes.push(a), this.onErrors.push(n), this.thisObjs.push(i), this.sendPostRequest()
    }, e.prototype.sendPostRequest = function() {
        if (!(this.onSending || this.dataList.length <= 0)) {
            console.log("====> 发送指令 ====>");
            var e = this.serverURL.shift(),
                t = this.dataList.shift();
            this.onComplete = this.onCompletes.shift(), this.onError = this.onErrors.shift(), this.thisObj = this.thisObjs.shift(), this.onSending = !0;
            var a = new egret.HttpRequest;
            if (a.responseType = egret.HttpResponseType.TEXT, this.isGet) {
                var n = "" == t ? e : e + "?" + t;
                a.open(n, egret.HttpMethod.GET), a.send(), a.timeout = 1e4
            } else this.hasJSON ? a.setRequestHeader("Content-Type", "application/json;charset=UTF-8") : a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"), a.open(e, egret.HttpMethod.POST), this.hasJSON && (t = JSON.parse(t)), a.send(t);
            a.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this), a.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this)
        }
    }, e.prototype.onPostComplete = function(e) {
        this.onSending = !1;
        var t = e.currentTarget;
        null != this.onComplete && this.onComplete.call(this.thisObj, t.response), this.sendPostRequest()
    }, e.prototype.onPostIOError = function(e) {
        this.onSending = !1, console.error("!!!!! 发送错误: " + e.type), console.error(e), null != this.onError && this.onError.call(this.thisObj, e)
    }, e.prototype.onPostProgress = function(e) {}, e.token = null, e.uid = null, e.showLog = !0, e
}();
__reflect(GSHttp.prototype, "GSHttp");
var GTime = function() {
    function e() {
        this.instance = null, this.currTime = 0, this.prevTime = 0, this.datas = {}, this._runDelay = [], this._runFunc = [], this._runThisObj = [], GameView.instance.addEventListener(egret.Event.ENTER_FRAME, this.OnUpdate, this)
    }
    return e.Init = function() {
        null == e.instance && (e.instance = new e)
    }, e.OnResume = function() {
        null != e.instance && (e.instance.prevTime = egret.getTimer())
    }, e.Pause = function() {
        e._pause = !0
    }, e.Resume = function() {
        e._pause = !1, e.OnResume()
    }, e.startTick = function(t, a, n, i) {
        void 0 === n && (n = !0), void 0 === i && (i = !1), e.Init();
        var o = "obj_" + a.$hashCode,
            r = e.instance,
            s = r.datas[o];
        s || (s = new GTimeData, s.obj = a, r.datas[o] = s), s.AddFunc(t, n, i)
    }, e.stopTick = function(t, a) {
        var n = "obj_" + a.$hashCode,
            i = e.instance,
            o = i.datas[n];
        o.RemoveFunc(t), o.isEmpty && delete i.datas[n]
    }, e.prototype.OnUpdate = function() {
        var t = this;
        e.deltaTimeUnscale = GameFPS, e.deltaTime = GameFPS, t.prevTime = t.currTime;
        for (var a in t.datas) {
            var n = t.datas[a];
            n.isEmpty || n.Execute()
        }
        t.UpdateRunDelay()
    }, e.RunDelay = function(t, a, n) {
        for (var i = !0, o = 0; o < e.instance._runDelay.length; o++)
            if (null == e.instance._runFunc[o]) {
                e.instance._runDelay[o] = t, e.instance._runFunc[o] = a, e.instance._runThisObj[o] = n, i = !1;
                break
            } i && (e.instance._runDelay.push(t), e.instance._runFunc.push(a), e.instance._runThisObj.push(n))
    }, e.ClearDelay = function(t, a) {
        for (var n = 0; n < e.instance._runDelay.length; n++) e.instance._runFunc[n] == t && e.instance._runThisObj[n] == a && (e.instance._runFunc[n] = null, e.instance._runThisObj[n] = null)
    }, e.prototype.UpdateRunDelay = function() {
        for (var t = 0; t < this._runFunc.length; t++)
            if (null != this._runFunc[t] && (this._runDelay[t] -= e.deltaTime, this._runDelay[t] <= 0)) {
                var a = this._runFunc[t],
                    n = this._runThisObj[t];
                this._runFunc[t] = null, this._runThisObj[t] = null, a.call(n)
            }
    }, e.instance = null, e.deltaTime = 0, e.deltaTimeUnscale = 0, e.timeScale = 1, e._pause = !1, e
}();
__reflect(GTime.prototype, "GTime");
var GTimeData = function() {
    function e() {
        this.funList = [], this.scaleIt = [], this.unPaused = [], this.isEmpty = !0
    }
    return e.prototype.Execute = function() {
        for (var e = 0; e < this.funList.length; e++) {
            var t = this.funList[e];
            if (t) {
                var a = this.scaleIt[e],
                    n = this.unPaused[e];
                (!GTime._pause || n) && (a && 0 == GTime.timeScale || t.call(this.obj))
            }
        }
    }, e.prototype.AddFunc = function(e, t, a) {
        for (var n = 0; n < this.funList.length; n++)
            if (this.funList[n] == e) return;
        this.isEmpty = !1;
        for (var n = 0; n < this.funList.length; n++)
            if (null == this.funList[n]) return this.funList[n] = e, this.scaleIt[n] = t, void(this.unPaused[n] = a);
        this.funList.push(e), this.scaleIt.push(t), this.unPaused.push(a)
    }, e.prototype.RemoveFunc = function(e) {
        this.isEmpty = !0;
        for (var t = 0; t < this.funList.length; t++) this.funList[t] == e ? this.funList[t] = null : null != this.funList[t] && (this.isEmpty = !1)
    }, e
}();
__reflect(GTimeData.prototype, "GTimeData");
var GPools = function() {
    function e() {
        this.bulletPoolDict = {}, this.tailsPool = new GPool, this.zombiePoolDict = {}, this.tankPoolDict = {}
    }
    return e.prototype.GetBullet = function(e) {
        var t = this,
            a = t.bulletPoolDict[e];
        a || (a = new GPool, t.bulletPoolDict[e] = a);
        var n = a.GetObject();
        return null == n && (n = new GBullet(e), a.AddObject(n)), n
    }, e.prototype.GetTails = function() {
        var e = this,
            t = e.tailsPool.GetObject();
        return null == t && (t = new GTails, e.tailsPool.AddObject(t)), t
    }, e.prototype.GetZombie = function(e, t) {
        var a = this,
            n = a.zombiePoolDict[e];
        null == n && (n = new GPool, a.zombiePoolDict[e] = n);
        var i = n.GetObject();
        if (null == i) {
            i = new GZombie;
            var o = new GD_Zombie;
            o.sdId = e, i.SetGD(o), n.AddObject(i)
        }
        return i.SetZombieRank(t), i.scaleX = 1, i.scaleY = 1, i
    }, e.prototype.GetTank = function(e) {
        var t = this,
            a = t.tankPoolDict[e];
        null == a && (a = new GPool, t.tankPoolDict[e] = a);
        var n = a.GetObject();
        if (null == n) {
            n = new GTank;
            var i = new GD_Tank;
            i.lv = e, i.sdId = e, n.SetGD(i), a.AddObject(n)
        }
        return n
    }, e
}();
__reflect(GPools.prototype, "GPools");
var QuadTree = function() {
    function e(e, t) {
        void 0 === t && (t = 0), this.MAX_OBJECTS = 10, this.MAX_LEVELS = 5, this.objects = null, this.nodes = null, this.level = 0, this.bounds = null, this.bounds_center = null, this.objects = [], this.nodes = [], this.level = t, this.bounds = e, this.bounds_center = new egret.Point(e.x + .5 * e.width, e.y + .5 * e.height), this.MAX_OBJECTS = 10, this.MAX_LEVELS = 5
    }
    return e.prototype.getIndex = function(e) {
        var t = (this.bounds, this.bounds_center),
            a = e.y <= t.y,
            n = e.y - e.height >= t.y,
            i = e.x + .5 * e.width <= t.x,
            o = e.x - .5 * e.width >= t.x;
        if (a) {
            if (o) return 0;
            if (i) return 1
        } else if (n) {
            if (i) return 2;
            if (o) return 3
        }
        return -1
    }, e.prototype.getIndexByPoint = function(e, t) {
        var a = (this.bounds, this.bounds_center),
            n = t <= a.y,
            i = t >= a.y,
            o = e <= a.x,
            r = e >= a.x;
        if (n) {
            if (r) return 0;
            if (o) return 1
        } else if (i) {
            if (o) return 2;
            if (r) return 3
        }
        return -1
    }, e.prototype.split = function() {
        var t = egret.Rectangle,
            a = this.level,
            n = this.bounds,
            i = this.bounds_center,
            o = n.x,
            r = n.y,
            s = n.width / 2,
            l = n.height / 2;
        this.nodes.push(new e(new t(i.x, r, s, l), a + 1), new e(new t(o, r, s, l), a + 1), new e(new t(o, i.y, s, l), a + 1), new e(new t(i.x, i.y, s, l), a + 1))
    }, e.prototype.insert = function(e) {
        var t, a, n = this.objects;
        if (this.nodes.length && (a = this.getIndex(e), -1 !== a)) return void this.nodes[a].insert(e);
        if (n.push(e), !this.nodes.length && this.objects.length > this.MAX_OBJECTS && this.level < this.MAX_LEVELS)
            for (this.split(), t = n.length - 1; t >= 0; t--) a = this.getIndex(n[t]), -1 !== a && this.nodes[a].insert(n.splice(t, 1)[0])
    }, e.prototype.retrieve = function(e, t) {
        var a, n = [];
        return this.nodes.length && (a = this.getIndexByPoint(e, t), -1 !== a && (n = n.concat(this.nodes[a].retrieve(e, t)))), n = n.concat(this.objects)
    }, e.prototype.isInner = function(e) {
        var t = this.bounds;
        return e.x - .5 * e.width >= t.x && e.x + .5 * e.width <= t.x + t.width && e.y - e.height >= t.y && e.y <= t.y + t.height
    }, e.prototype.refresh = function(e) {
        var t, a, n, i, o = this.objects;
        for (e = e || this, n = o.length - 1; n >= 0; n--) t = o[n], t.isDead ? (o[n] = null, o.splice(n, 1)) : (a = this.getIndex(t), this.isInner(t) ? this.nodes.length && a >= 0 && this.nodes[a].insert(o.splice(n, 1)[0]) : this !== e && e.insert(o.splice(n, 1)[0]));
        for (n = 0, i = this.nodes.length; i > n; n++) this.nodes[n].refresh(e)
    }, e
}();
__reflect(QuadTree.prototype, "QuadTree");
var SimpleStateMachineState = function() {
    function e(e, t, a, n, i) {
        this.enter = null, this.exit = null, this.update = null, this.thisObj = null, this.state = t, this.enter = a, this.exit = n, this.update = i, this.thisObj = e
    }
    return e
}();
__reflect(SimpleStateMachineState.prototype, "SimpleStateMachineState");
var SimpleStateMachine = function() {
    function e() {
        this.states = {}, this.firstUpdate = !0
    }
    return e.prototype.Register = function(e, t, a, n, i) {
        this.states[t] = new SimpleStateMachineState(e, t, a, n, i)
    }, e.prototype.ChangeState = function(e) {
        null != this._curState && null != this._curState.exit && this._curState.exit.call(this._curState.thisObj), this.preState = this.curState, this.curState = e, this.firstUpdate = !0, this._curState = this.states[e], null != this._curState && null != this._curState.enter && this._curState.enter.call(this._curState.thisObj)
    }, e.prototype.Update = function() {
        null != this._curState && null != this._curState.update && this._curState.update.call(this._curState.thisObj), this.firstUpdate = !1
    }, e
}();
__reflect(SimpleStateMachine.prototype, "SimpleStateMachine");
var GD_Role = function() {
    function e() {
        this.lv = 0, this.exp = 0, this.money = 0, this.money2 = 0, this.star = 0, this.buyHistory = {}, this.highestTank = 0, this.spdUpTick = 0, this.maxPlayerRank = 0, this.atkRate = 0, this.costRate = 0, this.customData = {}, this.autoRefreshData = {}, this.offlineTick = 0, this.offlineTime = 0, this.signDay = 0, this.autoComposeTick = 0, this.privileges = {}, this.saveCount = 0, this.saveCreateDate = 0, this.tanks = {}, this.currentDungeonId = 0, this.downloadVer = "ver_001", this.dayOnlineTime = 0, this.skinDebris = 0
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.lv;
        void 0 != t && (this.lv = Number(t));
        var a = e.exp;
        void 0 != a && (this.exp = Number(a));
        var n = e.money;
        void 0 != n && (this.money = Number(n));
        var i = e.money2;
        void 0 != i && (this.money2 = Number(i));
        var o = e.star;
        void 0 != o && (this.star = Number(o));
        var r = e.buyHistory;
        void 0 != r && (this.buyHistory = r);
        var s = e.highestTank;
        void 0 != s && (this.highestTank = Number(s));
        var l = e.spdUpTick;
        void 0 != l && (this.spdUpTick = Number(l));
        var d = e.maxPlayerRank;
        void 0 != d && (this.maxPlayerRank = Number(d));
        var u = e.atkRate;
        void 0 != u && (this.atkRate = Number(u));
        var c = e.costRate;
        void 0 != c && (this.costRate = Number(c));
        var h = e.customData;
        void 0 != h && (this.customData = h);
        var p = e.autoRefreshData;
        void 0 != p && (this.autoRefreshData = p);
        var D = e.offlineTick;
        void 0 != D && (this.offlineTick = Number(D));
        var v = e.offlineTime;
        void 0 != v && (this.offlineTime = Number(v));
        var f = e.signDay;
        void 0 != f && (this.signDay = Number(f));
        var m = e.autoComposeTick;
        void 0 != m && (this.autoComposeTick = Number(m));
        var g = e.privileges;
        void 0 != g && (this.privileges = g);
        var _ = e.saveCount;
        void 0 != _ && (this.saveCount = Number(_));
        var y = e.saveCreateDate;
        void 0 != y && (this.saveCreateDate = Number(y));
        var S = e.tanks;
        void 0 != S && (this.tanks = S);
        var b = e.currentDungeonId;
        void 0 != b && (this.currentDungeonId = Number(b));
        var T = e.downloadVer;
        void 0 != T && (this.downloadVer = T);
        var k = e.dayOnlineTime;
        void 0 != k && (this.dayOnlineTime = Number(k));
        var w = e.skinDebris;
        void 0 != w && (this.skinDebris = Number(w))
    }, e
}();
__reflect(GD_Role.prototype, "GD_Role");
var GD_ServerConfig = function() {
    function e() {
        this.data = {}
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.data;
        void 0 != t && (this.data = t)
    }, e
}();
__reflect(GD_ServerConfig.prototype, "GD_ServerConfig");
var GD_Tank = function() {
    function e() {
        this.sdId = 0, this.lv = 0
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.sdId;
        void 0 != t && (this.sdId = Number(t));
        var a = e.lv;
        void 0 != a && (this.lv = Number(a))
    }, e
}();
__reflect(GD_Tank.prototype, "GD_Tank");
var GD_Zombie = function() {
    function e() {
        this.sdId = 0, this.hp = 0
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.sdId;
        void 0 != t && (this.sdId = Number(t));
        var a = e.hp;
        void 0 != a && (this.hp = Number(a))
    }, e
}();
__reflect(GD_Zombie.prototype, "GD_Zombie");
var SD_Achieve = function() {
    function e() {
        this.id = 0, this.des = "", this.count1 = 0, this.count2 = 0, this.reward = 0, this.type = 0
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.id;
        void 0 != t && (this.id = Number(t));
        var a = e.des;
        void 0 != a && (this.des = a);
        var n = e.count1;
        void 0 != n && (this.count1 = Number(n));
        var i = e.count2;
        void 0 != i && (this.count2 = Number(i));
        var o = e.reward;
        void 0 != o && (this.reward = Number(o));
        var r = e.type;
        void 0 != r && (this.type = Number(r))
    }, e
}();
__reflect(SD_Achieve.prototype, "SD_Achieve");
var SD_AllSeeds = function() {
    function e() {
        this.version = 0, this.createTime = "", this.tanks = {}, this.zombies = {}, this.playerRanks = {}, this.config = {}, this.privilegs = {}, this.buyStarLvs = {}, this.dungeons = {}, this.task = {}, this.achieve = {}
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.version;
        void 0 != t && (this.version = Number(t));
        var a = e.createTime;
        void 0 != a && (this.createTime = a);
        var n = e.tanks;
        if (void 0 != n) {
            this.tanks = {};
            for (var i in n) {
                var o = new SD_Tank;
                o.FromJSON(n[i]), this.tanks[i] = o
            }
        }
        var r = e.zombies;
        if (void 0 != r) {
            this.zombies = {};
            for (var i in r) {
                var s = new SD_Zombie;
                s.FromJSON(r[i]), this.zombies[i] = s
            }
        }
        var l = e.playerRanks;
        if (void 0 != l) {
            this.playerRanks = {};
            for (var i in l) {
                var d = new SD_PlayerRank;
                d.FromJSON(l[i]), this.playerRanks[i] = d
            }
        }
        var u = e.config;
        void 0 != u && (this.config = u);
        var c = e.privilegs;
        if (void 0 != c) {
            this.privilegs = {};
            for (var i in c) {
                var h = new SD_Privileges;
                h.FromJSON(c[i]), this.privilegs[i] = h
            }
        }
        var p = e.buyStarLvs;
        if (void 0 != p) {
            this.buyStarLvs = {};
            for (var i in p) {
                var D = new SD_BuyStarLv;
                D.FromJSON(p[i]), this.buyStarLvs[i] = D
            }
        }
        var v = e.dungeons;
        if (void 0 != v) {
            this.dungeons = {};
            for (var i in v) {
                var f = new SD_DungeonLv;
                f.FromJSON(v[i]), this.dungeons[i] = f
            }
        }
        var m = e.task;
        if (void 0 != m) {
            this.task = {};
            for (var g in m) {
                var _ = new SD_Task;
                _.FromJSON(m[g]), this.task[g] = _
            }
        }
        var y = e.achieve;
        if (void 0 != y) {
            this.achieve = {};
            for (var S in y) {
                var b = new SD_Achieve;
                b.FromJSON(y[S]), this.achieve[S] = b
            }
        }
    }, e
}();
__reflect(SD_AllSeeds.prototype, "SD_AllSeeds");
var SD_BuyStarLv = function() {
    function e() {
        this.lv = 0, this.count = 0, this.starNum = 0
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.lv;
        void 0 != t && (this.lv = Number(t));
        var a = e.count;
        void 0 != a && (this.count = Number(a));
        var n = e.starNum;
        void 0 != n && (this.starNum = Number(n))
    }, e
}();
__reflect(SD_BuyStarLv.prototype, "SD_BuyStarLv");
var SD_Config = function() {
    function e() {}
    return e.prototype.FromJSON = function(e) {}, e
}();
__reflect(SD_Config.prototype, "SD_Config");
var SD_DungeonLv = function() {
    function e() {
        this.lvId = 0, this.rank = 0, this.rewardStars = 0, this.bossIds = [], this.bossSizes = [], this.bossX = [], this.bossY = [], this.bossOnly = 0
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.lvId;
        void 0 != t && (this.lvId = Number(t));
        var a = e.rank;
        void 0 != a && (this.rank = Number(a));
        var n = e.rewardStars;
        void 0 != n && (this.rewardStars = Number(n));
        var i = e.bossIds;
        void 0 != i && (this.bossIds = i);
        var o = e.bossSizes;
        void 0 != o && (this.bossSizes = o);
        var r = e.bossX;
        void 0 != r && (this.bossX = r);
        var s = e.bossY;
        void 0 != s && (this.bossY = s);
        var l = e.bossOnly;
        void 0 != l && (this.bossOnly = Number(l))
    }, e
}();
__reflect(SD_DungeonLv.prototype, "SD_DungeonLv");
var SD_PlayerRank = function() {
    function e() {
        this.lv = 0, this.name = "", this.nextExp = 0, this.enemyGroup = {}, this.enemyGroupSumRate = 0, this.enemyHpRate = 0, this.rewardMoneyRate = 0, this.enemyMoveSpd = 0, this.rewardStar = 0, this.atkRate = 0, this.costSubRate = 0, this.rightPower = 0, this.spdUpCostStar = 0, this.autoComposeCostStar = 0, this.maxMoney2 = 0, this.getMoney2CostStar = 0, this.offlineMoney = 0, this.offlineCostStar = 0
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.lv;
        void 0 != t && (this.lv = Number(t));
        var a = e.name;
        void 0 != a && (this.name = a);
        var n = e.nextExp;
        void 0 != n && (this.nextExp = Number(n));
        var i = e.enemyGroup;
        void 0 != i && (this.enemyGroup = i);
        var o = e.enemyGroupSumRate;
        void 0 != o && (this.enemyGroupSumRate = Number(o));
        var r = e.enemyHpRate;
        void 0 != r && (this.enemyHpRate = Number(r));
        var s = e.rewardMoneyRate;
        void 0 != s && (this.rewardMoneyRate = Number(s));
        var l = e.enemyMoveSpd;
        void 0 != l && (this.enemyMoveSpd = Number(l));
        var d = e.rewardStar;
        void 0 != d && (this.rewardStar = Number(d));
        var u = e.atkRate;
        void 0 != u && (this.atkRate = Number(u));
        var c = e.costSubRate;
        void 0 != c && (this.costSubRate = Number(c));
        var h = e.rightPower;
        void 0 != h && (this.rightPower = Number(h));
        var p = e.spdUpCostStar;
        void 0 != p && (this.spdUpCostStar = Number(p));
        var D = e.autoComposeCostStar;
        void 0 != D && (this.autoComposeCostStar = Number(D));
        var v = e.maxMoney2;
        void 0 != v && (this.maxMoney2 = Number(v));
        var f = e.getMoney2CostStar;
        void 0 != f && (this.getMoney2CostStar = Number(f));
        var m = e.offlineMoney;
        void 0 != m && (this.offlineMoney = Number(m));
        var g = e.offlineCostStar;
        void 0 != g && (this.offlineCostStar = Number(g))
    }, e
}();
__reflect(SD_PlayerRank.prototype, "SD_PlayerRank");
var SD_Privileges = function() {
    function e() {
        this.id = 0, this.lvs = {}
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.id;
        void 0 != t && (this.id = Number(t));
        var a = e.lvs;
        if (void 0 != a) {
            this.lvs = {};
            for (var n in a) {
                var i = new SD_PrivilegesLv;
                i.FromJSON(a[n]), this.lvs[n] = i
            }
        }
    }, e
}();
__reflect(SD_Privileges.prototype, "SD_Privileges");
var SD_PrivilegesLv = function() {
    function e() {
        this.lv = 0, this.name = "", this.rate = 0, this.cost = 0, this.desc = ""
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.lv;
        void 0 != t && (this.lv = Number(t));
        var a = e.name;
        void 0 != a && (this.name = a);
        var n = e.rate;
        void 0 != n && (this.rate = Number(n));
        var i = e.cost;
        void 0 != i && (this.cost = Number(i));
        var o = e.desc;
        void 0 != o && (this.desc = o)
    }, e
}();
__reflect(SD_PrivilegesLv.prototype, "SD_PrivilegesLv");
var SD_Tank = function() {
    function e() {
        this.id = 0, this.name = "", this.bulletId = 0, this.atk = 0, this.atkCD = 0, this.rotSpd = 0, this.price = 0, this.priceRate = 0, this.composeRate = 0, this.power = 0, this.showAtk = 0, this.showSpd = 0, this.rewardStars = 0, this.priceStars = 0
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.id;
        void 0 != t && (this.id = Number(t));
        var a = e.name;
        void 0 != a && (this.name = a);
        var n = e.bulletId;
        void 0 != n && (this.bulletId = Number(n));
        var i = e.atk;
        void 0 != i && (this.atk = Number(i));
        var o = e.atkCD;
        void 0 != o && (this.atkCD = Number(o));
        var r = e.rotSpd;
        void 0 != r && (this.rotSpd = Number(r));
        var s = e.price;
        void 0 != s && (this.price = Number(s));
        var l = e.priceRate;
        void 0 != l && (this.priceRate = Number(l));
        var d = e.composeRate;
        void 0 != d && (this.composeRate = Number(d));
        var u = e.power;
        void 0 != u && (this.power = Number(u));
        var c = e.showAtk;
        void 0 != c && (this.showAtk = Number(c));
        var h = e.showSpd;
        void 0 != h && (this.showSpd = Number(h));
        var p = e.rewardStars;
        void 0 != p && (this.rewardStars = Number(p));
        var D = e.priceStars;
        void 0 != D && (this.priceStars = Number(D))
    }, e
}();
__reflect(SD_Tank.prototype, "SD_Tank");
var SD_Task = function() {
    function e() {
        this.id = 1, this.icon = "", this.des = "", this.count = 0, this.reward = 0, this.rewardIcon = ""
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.id;
        void 0 != t && (this.id = Number(t));
        var a = e.icon;
        void 0 != a && (this.icon = a);
        var n = e.des;
        void 0 != n && (this.des = n);
        var i = e.count;
        void 0 != i && (this.count = Number(i));
        var o = e.reward;
        void 0 != o && (this.reward = Number(o));
        var r = e.rewardIcon;
        void 0 != r && (this.rewardIcon = r)
    }, e
}();
__reflect(SD_Task.prototype, "SD_Task");
var SD_Zombie = function() {
    function e() {
        this.id = 0, this.name = "", this.hp = 0, this.rewardType = 1, this.objId = 0, this.rewardNumber = 0, this.exp = 0, this.skin = 0
    }
    return e.prototype.FromJSON = function(e) {
        var t = e.id;
        void 0 != t && (this.id = Number(t));
        var a = e.name;
        void 0 != a && (this.name = a);
        var n = e.hp;
        void 0 != n && (this.hp = Number(n));
        var i = e.rewardType;
        void 0 != i && (this.rewardType = Number(i));
        var o = e.objId;
        void 0 != o && (this.objId = Number(o));
        var r = e.rewardNumber;
        void 0 != r && (this.rewardNumber = Number(r));
        var s = e.exp;
        void 0 != s && (this.exp = Number(s));
        var l = e.skin;
        void 0 != l && (this.skin = Number(l))
    }, e
}();
__reflect(SD_Zombie.prototype, "SD_Zombie");
var AssetAdapter = function() {
    function e() {}
    return e.prototype.getAsset = function(e, t, a) {
        function n(n) {
            t.call(a, n, e)
        }
        if (RES.hasRes(e)) {
            var i = RES.getRes(e);
            i ? n(i) : RES.getResAsync(e, n, this)
        } else RES.getResByUrl(e, n, this, RES.ResourceItem.TYPE_IMAGE)
    }, e
}();
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var LoadingUI = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.createView(), t
    }
    return __extends(t, e), t.prototype.createView = function() {
        if (1 == GameChannel) var e = new eui.Image("covervivo_png");
        else if (2 == GameChannel) var e = new eui.Image("covervivo_png");
        var t = new eui.Label("正在加载游戏，请稍后...");
        t.size = 35, this.addChild(e), this.addChild(t), this.textField = new eui.Label, this.addChild(this.textField), e.width = egret.MainContext.instance.stage.stageWidth, e.height = egret.MainContext.instance.stage.stageHeight, t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2, t.bold = !0, t.x = e.width / 2, t.y = e.height / 1.15
    }, t.prototype.onProgress = function(e, t) {
        this.textField.text = "Loading..." + e + "/" + t
    }, t
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var Main = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.countGroupError = 0, t
    }
    return __extends(t, e), t.prototype.createChildren = function() {
        e.prototype.createChildren.call(this), egret.lifecycle.addLifecycleListener(function(e) {}), egret.lifecycle.onPause = function() {
            ADSDK._VideoADLock || (console.log("OnPause"), egret.ticker.pause(), MainData.GameInit && MainData.OnPauseGame())
        }, egret.lifecycle.onResume = function() {
            ADSDK._VideoADLock || (console.log("onResume"), (3 == GameChannel || 6 == GameChannel) && ADSDK.ShareCallBack(), egret.ticker.resume(), MainData.GameInit && MainData.OnEnterGame())
        };
        var t = new AssetAdapter;
        egret.registerImplementation("eui.IAssetAdapter", t), egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter), RES.setMaxLoadingThread(1), 7 == GameChannel && platform.CheckGameVer(), this.runGame()["catch"](function(e) {
            console.log(e)
        })
    }, t.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return platform.TaInit(), platform.TaSetProperties({
                            channel: GameChannel,
                            gameId: 0
                        }, function() {
                            return {
                                level: null == MainData.role ? 0 : MainData.role.lv,
                                sunshine: Math.floor(null == MainData.role ? 0 : MainData.role.money),
                                gams: null == MainData.role ? 0 : MainData.role.star,
                                plantMaxLv: null != MainData.gbattle ? MainData.gbattle.GetTankMaxLV() : 0,
                                Zhanli: null != MainData.gbattle ? MainData.gbattle.PlayerPower() : 0,
                                gird1: null != MainData.gbattle && null != MainData.gbattle.tanks[0] ? MainData.gbattle.tanks[0].gd.sdId : 0,
                                gird2: null != MainData.gbattle && null != MainData.gbattle.tanks[1] ? MainData.gbattle.tanks[1].gd.sdId : 0,
                                gird3: null != MainData.gbattle && null != MainData.gbattle.tanks[2] ? MainData.gbattle.tanks[2].gd.sdId : 0,
                                gird4: null != MainData.gbattle && null != MainData.gbattle.tanks[3] ? MainData.gbattle.tanks[3].gd.sdId : 0,
                                gird5: null != MainData.gbattle && null != MainData.gbattle.tanks[4] ? MainData.gbattle.tanks[4].gd.sdId : 0,
                                Plant_num: null != MainData.gbattle ? MainData.gbattle.GetTankLength() : 0
                            }
                        }), [4, this.loadResource()];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 5, , 6]), platform.TaTrack("Loading", {
                            loading_step: 1,
                            state: 0
                        }), [4, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        return n.sent(), platform.TaTrack("Loading", {
                            loading_step: 1,
                            state: 1
                        }), platform.TaTrack("Loading", {
                            loading_step: 2,
                            state: 0
                        }), [4, this.loadTheme()];
                    case 2:
                        return n.sent(), platform.TaTrack("Loading", {
                            loading_step: 2,
                            state: 1
                        }), platform.TaTrack("Loading", {
                            loading_step: 3,
                            state: 0
                        }), RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.OnLoadGroupError, this), [4, RES.loadGroup("loadingRes", 0, null)];
                    case 3:
                        return n.sent(), platform.TaTrack("Loading", {
                            loading_step: 3,
                            state: 1
                        }), e = new UILoading, this.stage.addChild(e), platform.TaTrack("Loading", {
                            loading_step: 4,
                            state: 0
                        }), [4, RES.loadGroup("preload", 0, e)];
                    case 4:
                        switch (n.sent(), platform.TaTrack("Loading", {
                            loading_step: 4,
                            state: 1
                        }), t = new GameView, GameChannel) {
                            case 2:
                                ADSDK.InitKdsAD(KDSconfig_vivo);
                                break;
                            case 3:
                                ADSDK.InitKdsAD(KDSconfig_qq);
                                break;
                            case 4:
                                ADSDK.InitKdsAD(KDSconfig_oppo), ADSDK.NewHtInit(Oppo_CPAHtURL);
                                break;
                            case 5:
                                ADSDK.InitKdsAD(KDSconfig_baidu), ADSDK.NewHtInit(Baidu_CPAHtURL);
                                break;
                            case 7:
                                ADSDK.InitKdsAD(KDSconfig_toutiao);
                                break;
                            case 8:
                                ADSDK.InitKdsAD(KDSconfig_uc);
                                break;
                            case 9:
                                ADSDK.Video_ids = H5__AD_Video_Id, ADSDK.isShowNative_2 = !1;
                                break;
                            case 10:
                                ADSDK.Video_ids = H5__AD_Video_Id, ADSDK.isShowNative_2 = !1
                        }
                        return this.stage.addChild(t), 9 == GameChannel && platform.QTTReportData({
                            type: "ready",
                            app_id: "a3VpBRNBrdrf",
                            game_name: "植物大战僵尸2守护"
                        }), this.stage.removeChild(e), 4 == GameChannel && platform.OppoLoginReportMonitor(), [3, 6];
                    case 5:
                        return a = n.sent(), console.error(a), [3, 6];
                    case 6:
                        return [2]
                }
            })
        })
    }, t.prototype.OnLoadGroupError = function(e) {
        ++this.countGroupError <= 3 && (console.log("加载资源组" + e.groupName + "失败,重新加载"), RES.loadGroup(e.groupName))
    }, t.prototype.loadTheme = function() {
        var e = this;
        return new Promise(function(t, a) {
            var n = new eui.Theme("resource/default.thm.json", e.stage);
            n.addEventListener(eui.UIEvent.COMPLETE, function() {
                t()
            }, e)
        })
    }, t
}(eui.UILayer);
__reflect(Main.prototype, "Main");
var DebugPlatform = function() {
    function e() {}
    return e.prototype.EnableAudio = function() {
        return !0
    }, e.prototype.IsDebugMode = function() {
        return !1
    }, e.prototype.aldStageStart = function(e) {}, e.prototype.aldStageRunning = function(e) {}, e.prototype.aldStageEnd = function(e) {}, e.prototype.aldSendEvent = function(e, t) {}, e.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, {
                    nickName: "username"
                }]
            })
        })
    }, e.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return platform.IsDebugMode() || 8 != GameChannel ? [2] : (console.log("-->login"), [2, new Promise(function(e, t) {
                    window.uc.isLogin({
                        success: function(t) {
                            console.log(t), t.isLogin ? window.uc.login({
                                success: function(t) {
                                    console.log("-->LoginSucc " + t), e(t)
                                }
                            }) : (console.log("-->LoginFail"), e({}))
                        }
                    })
                })])
            })
        })
    }, e.prototype.TaInit = function() {}, e.prototype.TaLogin = function(e) {}, e.prototype.TaUser_Set = function() {}, e.prototype.TaSetProperties = function(e, t) {}, e.prototype.TaTrack = function(e, t) {}, e.prototype.ToutiaoStartRecord = function(e, t) {}, e.prototype.ToutiaoStopRecord = function(e, t, a) {}, e.prototype.BaiduPrevent = function(e, t) {}, e.prototype.ToutiaoShare = function(e, t) {}, e.prototype.Share = function(e) {}, e.prototype.InitShare = function() {}, e.prototype.setLadderData = function(e) {}, e.prototype.getODC = function() {}, e.prototype.ShowAppBox = function() {}, e.prototype.HideAppBox = function() {}, e.prototype.TuotiaoShowButton = function() {}, e.prototype.IsApply = function() {}, e.prototype.GetToutiaoApp = function() {}, e.prototype.GetWxLaunchOptionsSync = function() {}, e.prototype.ClearVideo = function() {}, e.prototype.HasVideo = function() {
        return !1
    }, e.prototype.getLaunchOptions = function() {
        return platform.IsDebugMode() || 8 != GameChannel ? platform.IsDebugMode() || 9 != GameChannel ? void 0 : new Promise(function(e, t) {
            e({
                scene: "0",
                query: "qtt"
            })
        }) : new Promise(function(e, t) {
            e({
                scene: "0",
                query: "uc"
            })
        })
    }, e.prototype.OppoLoginReportMonitor = function() {}, e.prototype.CheckGameVer = function() {}, e.prototype.OppoGetLaunchOptionsSync = function() {}, e.prototype.DeleteFile = function(e) {
        return egret.localStorage.removeItem(e), null
    }, e.prototype.LoadPNGFile = function(e, t, a) {
        var n = egret.localStorage.getItem(e);
        n ? egret.BitmapData.create("base64", n, function(n) {
            console.log("存在资源+" + e), t.call(a, n)
        }) : (console.log("需要下载" + e), t.call(a, null))
    }, e.prototype.LoadTXTFile = function(e) {
        return egret.localStorage.getItem(e)
    }, e.prototype.SaveBASE64File = function(t, a) {
        var n = e.arrayBufferToBase64(a);
        n = n.replace("data:image/png;base64,", ""), egret.localStorage.setItem(t, n)
    }, e.prototype.SaveTXTFile = function(e, t) {
        egret.localStorage.setItem(e, t)
    }, e.arrayBufferToBase64 = function(e) {
        for (var t = new Uint8Array(e), a = function(e) {
                var t = "data:image/{0};base64," + e;
                return t.replace("{0}", "png")
            }, n = "", i = t.byteLength, o = 0; i > o; o++) n += String.fromCharCode(t[o]);
        return a(window.btoa(n))
    }, e.prototype.QTTShowVideo = function(e, t) {
        if (!platform.IsDebugMode()) {
            console.log("qttShow Video-->");
            var a = {
                index: t,
                callback: e
            };
            a.callback = e, window.qttGame.ready(function() {
                window.qttGame.showVideo(e, a)
            })
        }
    }, e.prototype.QTTReportData = function(e) {
        platform.IsDebugMode() || (console.log("qttReportData-->"), window.qttGame.ready(function() {
            window.qttGame.reportData(e)
        }))
    }, e.prototype.QTTShowBanner = function() {
        platform.IsDebugMode() || (console.log("qttShow banner-->"), window.qttGame.ready(function() {
            window.qttGame.showBanner()
        }))
    }, e.prototype.QTTHideBanner = function() {
        platform.IsDebugMode() || (console.log("qttHide banner-->"), window.qttGame.ready(function() {
            window.qttGame.hideBanner()
        }))
    }, e.prototype.H5_4399_IsShowVideo = function() {
        var e = !0;
        return platform.IsDebugMode() || (e = h5_4399_IsShowVideo()), e
    }, e.prototype.H5_4399_ShowVideo = function(e) {
        platform.IsDebugMode() || h5_4399_ShowVideo(e)
    }, e
}();
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]), window.platform || (window.platform = new DebugPlatform);
var ThemeAdapter = function() {
    function e() {}
    return e.prototype.getTheme = function(e, t, a, n) {
        function i(e) {
            t.call(n, e)
        }

        function o(t) {
            t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null), a.call(n))
        }
        var r = this;
        if ("undefined" != typeof generateEUI) egret.callLater(function() {
            t.call(n, generateEUI)
        }, this);
        else if ("undefined" != typeof generateEUI2) RES.getResByUrl("resource/gameEui.json", function(e, a) {
            window.JSONParseClass.setData(e), egret.callLater(function() {
                t.call(n, generateEUI2)
            }, r)
        }, this, RES.ResourceItem.TYPE_JSON);
        else if ("undefined" != typeof generateJSON)
            if (e.indexOf(".exml") > -1) {
                var s = e.split("/");
                s.pop();
                var l = s.join("/") + "_EUI.json";
                generateJSON.paths[e] ? egret.callLater(function() {
                    t.call(n, generateJSON.paths[e])
                }, this) : RES.getResByUrl(l, function(a) {
                    window.JSONParseClass.setData(a), egret.callLater(function() {
                        t.call(n, generateJSON.paths[e])
                    }, r)
                }, this, RES.ResourceItem.TYPE_JSON)
            } else egret.callLater(function() {
                t.call(n, generateJSON)
            }, this);
        else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null), RES.getResByUrl(e, i, this, RES.ResourceItem.TYPE_TEXT)
    }, e
}();
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var UILoading = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        this.width = egret.MainContext.instance.stage.stageWidth, this.height = egret.MainContext.instance.stage.stageHeight
    }, t.prototype.onProgress = function(e, t) {
        var a = e / t,
            n = Math.floor(100 * a);
        this.lProgress.text = n + "%", this.imgProgress.width = 362 * a
    }, t
}(UIBase);
__reflect(UILoading.prototype, "UILoading");
var GUIDE_DATANAME = "GameOnEnterGuide_Step",
    GGuide = function() {
        function e(e) {
            this.gb = null, this.ui = null, this.buyTankUI = null, this.gb = e
        }
        return e.prototype.OnEnterGame = function() {
            this.ui = UIGuideView.Show();
            var e = MainData.GetCustomData(GUIDE_DATANAME);
            switch (e) {
                case 0:
                    MainData.enableSave = !1, this.ui.LockTime(), this.WaitForNext(this.Guide1);
                    break;
                case 1:
                    this.WaitForNext(this.Guide5);
                    break;
                default:
                    this.CloseGuide()
            }
        }, e.prototype.CloseGuide = function() {
            MainData.SetCustomData("freeLvTick", 0), null != this.ui && this.ui.RemoveUI(), this.ui = null
        }, e.prototype.WaitForNext = function(e, t) {
            void 0 === t && (t = 700);
            var a = this;
            null != a.ui && (MainData.SetCustomData("freeLvTick", GUtil.SystemMillionSecond() + 99999999), a.ui.ClearAll(), a.ui.LockTouch(), a.ui.LookOne(a.gb, 100), GTime.RunDelay(t / 1e3, function() {
                e.call(a)
            }, a))
        }, e.prototype.Guide1 = function() {
            platform.TaTrack("Tutorial", {
                tutorial_step: 1
            });
            var e = this,
                t = e.gb.ui.btnBuy;
            e.ui.LookOne(t, 300), e.ui.skipGuide2.visible = !1, e.ui.skipGuide.visible = !1, GTime.RunDelay(.3, function() {
                e.ui.ShowArr(), e.ui.ShowText("点击购买两个植物"), GAudio.StopBGM(), GAudio.PlaySoundByName("crazydaveshort1_m4a", 1, 1), e.ui.UnlockTouch()
            }, e);
            var a = function() {
                null != e.gb.tanks[5] && null != e.gb.tanks[6] && (t.removeEventListener(egret.TouchEvent.TOUCH_TAP, a, null), e.WaitForNext(e.Guide2))
            };
            t.addEventListener(egret.TouchEvent.TOUCH_TAP, a, null)
        }, e.prototype.Guide2 = function() {
            var e = this;
            platform.TaTrack("Tutorial", {
                tutorial_step: 2
            });
            var t = this,
                a = t.gb.slot5,
                n = t.gb.slot6,
                i = n.x - (a.x + a.width) + n.width;
            t.ui.LookOne(a, 100, 10, -20, i - 20, 23), t.gb._guide_lockTankComposeOnly = !0, GTime.RunDelay(.3, function() {
                t.ui.ShowText("拖拽将相同植物合并升级"), GAudio.PlaySoundByName("crazydavelong1_m4a", 1, 1), t.ui.ShowHand1(t.ui.vec2.x, t.ui.vec2.y - 70), t.ui.UnlockTouch()
            }, t);
            var o = function() {
                t.theUI = t.HasUI(UINewTank), t.theUI && (t.gb._guide_lockTankComposeOnly = !1, GTime.stopTick(o, e), t.WaitForNext(t.Guide3, 1500))
            };
            GTime.startTick(o, this, !1, !0)
        }, e.prototype.HasUI = function(e) {
            for (var t = 0; t < GameView.instance.uiLayer.$children.length; t++) {
                var a = GameView.instance.uiLayer.getChildAt(t);
                if (a instanceof e) return a
            }
            return null
        }, e.prototype.Guide3 = function() {
            platform.TaTrack("Tutorial", {
                tutorial_step: 3
            });
            var e = this;
            e.ui.LookOne(e.theUI.btnClose, 300), 6 == GameChannel && 0 != ADSDK.kds.getBlack() && (e.theUI.btnClose.skinName = "BtnGreen1", e.theUI.btnClose.labelDisplay.text = "炫耀一下"), GTime.RunDelay(.3, function() {
                e.ui.ShowArr(), e.ui.ShowText("点击获得奖励"), GAudio.PlaySoundByName("crazydaveshort2_m4a", 1, 1), e.ui.UnlockTouch()
            }, e), e.theUI.btnClose.once(egret.TouchEvent.TOUCH_TAP, function() {
                e.WaitForNext(e.Guide4), 6 == GameChannel && 0 != ADSDK.kds.getBlack() && (ADSDK.Share(function() {}, "炫耀一下"), e.theUI.btnClose.skinName = "UI.BtnCancel", e.theUI.btnClose.labelDisplay.text = "Mục đích")
            }, this)
        }, e.prototype.Guide4 = function() {
            var e = this;
            platform.TaTrack("Tutorial", {
                tutorial_step: 4
            });
            var t = this,
                a = t.gb.slot0,
                n = t.gb.slot14,
                i = n.x - (a.x + a.width) + n.width,
                o = n.y - (a.y + a.height) + n.height;
            t.ui.LookOne(a, 100, 10, -20, i - 20, o), t.ui.LockTime(), GTime.RunDelay(.3, function() {
                t.ui.ShowText("将植物放入花盆就可以迎战僵尸了！"), GAudio.PlaySoundByName("crazydavelong2_m4a", 1, 1), t.ui.ShowHand2(t.ui.vec2.x + 150, t.ui.vec2.y + o - 180), t.ui.UnlockTouch()
            }, t);
            var r = function() {
                for (var a = 0; 5 > a; a++)
                    if (null != t.gb.tanks[a]) {
                        GTime.stopTick(r, e), t.WaitForNext(e.Guide200, 1e3);
                        break
                    }
            };
            GTime.startTick(r, this, !1, !0)
        }, e.prototype.GuideSound = function() {
            platform.TaTrack("Tutorial", {
                tutorial_step: 5
            });
            var e = this;
            switch (GTime.Resume(), MainData.SetCustomData(GUIDE_DATANAME, 1), GAudio.PlaySoundByName("hugewave_m4a", 1, 1), UIPopTips.ShowTips("一大波僵尸正在来袭！"), GameChannel) {
                case 2:
                case 4:
                case 5:
                case 9:
                case 10:
                    GAudio.PlayBGM("Faster_mp3");
                    break;
                case 3:
                case 6:
                case 8:
                case 7:
                    GAudio.PlayBGM("Faster_m4a")
            }
            MainData.enableSave = !0, e.ui.skipGuide2.visible = !0, e.ui.skipGuide.visible = !0, MainData.SaveGame(), e.WaitForNext(e.Guide5)
        }, e.prototype.Guide5 = function() {
            var e = this,
                t = this;
            t.ui.visible = !1;
            var a = function() {
                t.gb.ui.btnRankUp.visible && 1 == GameView.instance.uiLayer.$children.length && (null != t.ui && (t.ui.LockTime(), t.ui.visible = !0), GTime.stopTick(a, e), t.WaitForNext(t.Guide6))
            };
            GTime.startTick(a, this, !1, !0)
        }, e.prototype.Guide6 = function() {
            var e = this;
            platform.TaTrack("Tutorial", {
                tutorial_step: 6
            });
            var t = this,
                a = t.gb.ui.btnRankUp;
            t.ui.LookOne(a, 200, 5, 20), GTime.RunDelay(.3, function() {
                t.ui.ShowArr(!0), t.ui.ShowText("经验满了,点这里提升段位", !0), GAudio.PlaySoundByName("crazydavelong3_m4a", 1, 1), t.ui.UnlockTouch()
            }, t);
            var n = function() {
                t.theUI = t.HasUI(UIRank), t.theUI && (GTime.stopTick(n, e), t.WaitForNext(t.AgainGuideBuyTank))
            };
            MainData.SetCustomData(GUIDE_DATANAME, 99), GTime.startTick(n, this, !1, !0)
        }, e.prototype.AgainGuideBuyTank = function() {
            var e = this,
                t = this;
            t.ui.UnlockTouch();
            var a = function() {
                if (!t.HasUI(UIRank) && 2 == MainData.role.maxPlayerRank) {
                    GTime.stopTick(a, e);
                    var n = t.gb.ui.btnBuy;
                    t.ui.LookOne(n, 300, 0, 0, 0, 0), GTime.RunDelay(.3, function() {
                        t.ui.ShowArr(), t.ui.ShowText("购买更多植物迎战僵尸！"), t.ui.UnlockTouch(), n.once(egret.TouchEvent.TOUCH_TAP, function() {
                            t.WaitForNext(t.CloseGuide), MainData.SetCustomData(GUIDE_DATANAME, 99), GTime.stopTick(a, e)
                        }, t)
                    }, t)
                }
            };
            GTime.startTick(a, this, !1, !0)
        }, e.prototype.ShowBattleFailedGuide = function() {
            var e = this,
                t = Math.min(MainData.role.lv, MainData.MaxRankLv),
                a = MainData.allSeeds.playerRanks[t + 1],
                n = MainData.gbattle.PlayerPower(),
                i = MainData.GetCustomData("BattleFailedGuide_Passed");
            if (1 != i && 1 != MainData.role.lv) {
                var o = function() {
                    if (10 == GameChannel && !platform.H5_4399_IsShowVideo()) return void GTime.stopTick(o, e);
                    var t = GameView.instance.uiLayer.numChildren;
                    if (1 == t && n < a.rightPower || 2 == t && null != e.buyTankUI && n < a.rightPower) {
                        GTime.stopTick(o, e);
                        var i = e;
                        platform.TaTrack("Tutorial", {
                            tutorial_step: -1
                        }), i.ui = UIGuideView.Show(), i.ui.LockTime(), i.theUI = UIRank.Show(), i.WaitForNext(e.Guide100, 1e3)
                    }
                };
                GTime.startTick(o, this, !1, !0)
            }
        }, e.prototype.Guide100 = function() {
            platform.TaTrack("Tutorial", {
                tutorial_step: 100
            });
            var e = this,
                t = e.theUI,
                a = t.btnRankDown;
            1 == a.visible && (e.ui.LookOne(a, 300), GTime.RunDelay(.3, function() {
                e.ui.ShowArr(!0), e.ui.ShowText("战力不足，可以暂时降低段位", !0), e.ui.UnlockTouch(), a.once(egret.TouchEvent.TOUCH_TAP, function() {
                    MainData.SetCustomData("BattleFailedGuide_Passed", 1), e.CloseGuide()
                }, e)
            }, e))
        }, e.prototype.showBuyGuide = function() {
            var e = this;
            e.ui = UIGuideView.Show()
        }, e.prototype.Guide200 = function() {
            platform.TaTrack("Tutorial", {
                tutorial_step: 200
            });
            var e = this,
                t = e.gb.ui.btnBuy;
            e.ui.LookOne(t, 300, 0, 0, 0, 0), GTime.RunDelay(.3, function() {
                e.ui.ShowArr(), e.ui.ShowText("购买更多植物迎战僵尸！"), e.ui.UnlockTouch(), t.once(egret.TouchEvent.TOUCH_TAP, function() {
                    e.WaitForNext(e.GuideSound), setTimeout(function() {
                        MainData.CanSign() && (platform.TaTrack("sign_in", {
                            sign_in: 0
                        }), UISignDay.Show())
                    }, 1e3)
                }, e)
            }, e)
        }, e.prototype.GuideAutoCompose = function() {
            if (!(MainData.GetCustomData(GUIDE_DATANAME) <= 1 || 1 == MainData.GetCustomData("GuideAutoCompose") || MainData.GetCustomData("PrivilegeGuide") < 1)) {
                for (var e = this, t = e.gb.tanks, a = 5; a < t.length; a++)
                    if (null == t[a]) return;
                for (var n = !1, a = 5; a < t.length; a++)
                    for (var i = a + 1; i < t.length; i++)
                        if (t[a].gd.sdId == t[i].gd.sdId) {
                            n = !0;
                            break
                        } if (n) {
                    MainData.SetCustomData("GuideAutoCompose", 1), platform.TaTrack("Tutorial", {
                        tutorial_step: 300
                    }), e.ui = UIGuideView.Show(), e.ui.ClearAll(), e.ui.dfUp.x -= 250;
                    var o = e.gb.ui.btnAuto;
                    e.gb.ui.guideEffectAuto.visible = !0, e.gb.ui.GuideAnim(), e.ui.LookOne(o, 300, -60, -50, 80, 80, !0), GTime.RunDelay(.3, function() {
                        e.ui.ShowArr(), e.ui.ShowText("点击免费开启自动合成"), e.ui.UnlockTouch(), o.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                            e.gb.ui.guideEffectAuto.visible = !1, null != e.ui && (e.ui.ClearAll(), e.ui.RemoveUI(), e.ui = null)
                        }, null)
                    }, e), o.removeEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                        e.gb.ui.guideEffectAuto.visible = !1, null != e.ui && (e.ui.ClearAll(), e.ui.RemoveUI(), e.ui = null)
                    }, null)
                }
            }
        }, e.prototype.GuideDeleteTank = function() {
            var e = this;
            if (MainData.GetCustomData(GUIDE_DATANAME) >= 1 && 1 != MainData.GetCustomData("GuideDeleteTank") && 0 != MainData.GetCustomData("GuideAutoCompose") && !(MainData.GetCustomData("PrivilegeGuide") < 1)) {
                for (var t = this, a = t.gb.tanks, n = 5; n < a.length; n++)
                    if (null == a[n]) return;
                for (var n = 5; n < a.length; n++)
                    for (var i = n + 1; i < a.length; i++)
                        if (a[n].gd.sdId == a[i].gd.sdId) return;
                if (platform.TaTrack("Tutorial", {
                        tutorial_step: 500
                    }), MainData.SetCustomData("GuideDeleteTank", 1), !GBattle.guideDeleteTank) {
                    var o = t.gb.slot5,
                        r = t.gb.slot14,
                        s = r.x - (o.x + o.width) + r.width,
                        l = r.y - (o.y + o.height) + r.height + 100;
                    t.ui = UIGuideView.Show(), t.ui.ClearAll(), t.ui.LookOne(o, 100, 10, -20, s - 20, l, !0), GTime.RunDelay(.3, function() {
                        t.ui.ShowText("将植物拖入这里就可以出售植物了！"), t.ui.ShowHand3(t.ui.vec2.x + 120, t.ui.vec2.y + 100), t.ui.UnlockTouch()
                    }, t);
                    var d = function() {
                        GBattle.guideDeleteTank && (GTime.stopTick(d, e), t.WaitForNext(t.CloseGuide))
                    };
                    GTime.startTick(d, this, !1, !0)
                }
            }
        }, e.prototype.PrivilegeGuide = function() {
            if (MainData.GetCustomData(GUIDE_DATANAME) >= 1 && !(MainData.GetCustomData("PrivilegeGuide") > 0)) {
                var e = this,
                    t = e.gb.ui.gEffectView;
                e.ui = UIGuideView.Show(), e.ui.ClearAll(), e.ui.dfDown.x -= 250, e.ui.LookOne(t, 350), GTime.RunDelay(.3, function() {
                    e.ui.ShowArr(!0), e.ui.ShowText("看看你的特权有哪些?", !0), e.ui.UnlockTouch(), t.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                        null != e.ui && (e.ui.ClearAll(), e.ui.ClearBlack(), e.ui.RemoveUI(), e.ui = null)
                    }, null)
                }, e), t.removeEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                    null != e.ui && (e.ui.ClearAll(), e.ui.ClearBlack(), e.ui.RemoveUI(), e.ui = null)
                }, null), platform.TaTrack("Tutorial", {
                    tutorial_step: 600
                }), MainData.SetCustomData("PrivilegeGuide", 1)
            }
        }, e.prototype.FirstSpdGuide = function() {
            if (MainData.GetCustomData(GUIDE_DATANAME) >= 1 && !(MainData.GetCustomData("FirstSpdGuide") > 0 || MainData.GetCustomData("PrivilegeGuide") < 1)) {
                var e = UISpdUp.Show(),
                    t = this;
                e.validateNow();
                var a = e.btnUseStar1;
                t.ui = UIGuideView.Show(), t.ui.ClearAll(), platform.TaTrack("Tutorial", {
                    tutorial_step: 400
                }), t.ui.LookOne(a, 300), GTime.RunDelay(.3, function() {
                    t.ui.ShowArr(), t.ui.ShowText("点击免费开启双倍攻速"), t.ui.UnlockTouch(), a.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                        null != t.ui && (t.ui.ClearAll(), t.ui.ClearBlack(), t.ui.RemoveUI(), t.ui = null)
                    }, null)
                }, t), a.removeEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                    null != t.ui && (t.ui.ClearAll(), t.ui.ClearBlack(), t.ui.RemoveUI(), t.ui = null)
                }, null), MainData.SetCustomData("FirstSpdGuide", 1)
            }
        }, e.prototype.GuideSpd = function() {
            if (MainData.GetCustomData(GUIDE_DATANAME) >= 1 && !(MainData.GetCustomData("BattleFailedGuide_Passed") <= 0)) {
                var e = this;
                if (null == e.ui && !(MainData.GetSpdUpDuration() > 0)) {
                    var t = e.gb.ui.btnSpdup,
                        a = e.gb.ui.guideEffectSpd.visible;
                    e.gb.ui.guideEffectSpd.visible = !0, 1 != a && e.gb.ui.GuideAnim(), GTime.RunDelay(.3, function() {
                        t.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                            e.gb.ui.guideEffectSpd.visible = !1
                        }, null)
                    }, e), t.removeEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                        e.gb.ui.guideEffectSpd.visible = !1
                    }, null)
                }
            }
        }, e.prototype.BuyTankGuide = function() {
            var e = this;
            if (!(MainData.role.maxPlayerRank > 5 || MainData.GetCustomData(GUIDE_DATANAME) <= 1)) {
                var t = e.gb.ui.btnBuy;
                null == e.buyTankUI && (e.buyTankUI = UIGuideView.Show(!1), e.buyTankUI.ClearAll(), e.gb.ui.buyAnim.play(0), e.buyTankUI.LookOne(t, 300, 0, 0, 0, 0, !0), GTime.RunDelay(.3, function() {
                    e.buyTankUI.ShowArr(), e.buyTankUI.UnlockTouch(), t.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                        e.buyTankUI && (e.buyTankUI.ClearAll(), e.buyTankUI.RemoveUI(), e.buyTankUI = null), e.gb.ui.buyAnim.stop()
                    }, null)
                }, e), t.removeEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                    e.buyTankUI && (e.buyTankUI.ClearAll(), e.buyTankUI.RemoveUI(), e.buyTankUI = null), e.gb.ui.buyAnim.stop()
                }, null))
            }
        }, e
    }();
__reflect(GGuide.prototype, "GGuide");
var UIGuideView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.vec2 = new Vector2(0, 0), t
    }
    return __extends(t, e), t.Show = function(e) {
        void 0 === e && (e = !0);
        var a = new t;
        return e ? a.AddTopUI() : a.AddUI(), a
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.df1.source = MainData.imgSheet.getTexture("df_png"), t.df2.source = MainData.imgSheet.getTexture("df_png"), t.validateNow(), t.gView.width = t.width, t.gView.height = t.height, t.gView.x = 0, t.gView.y = 0, t.BandTap(t.skipGuide, t.SkipGuide), t.BandTap(t.skipGuide2, t.SkipGuide)
    }, t.prototype.ClearAll = function() {
        this.gArr.visible = !1, this.gArrDown.visible = !1, this.gHand1.visible = !1, this.gHand2.visible = !1, this.gHand3.visible = !1, this.dfUp.visible = !1, this.dfDown.visible = !1
    }, t.prototype.LockTouch = function() {
        this.lockTouch.visible = !0
    }, t.prototype.UnlockTouch = function() {
        this.lockTouch.visible = !1
    }, t.prototype.ShowHand1 = function(e, t) {
        this.gHand1.visible = !0, this.gHand1.x = e, this.gHand1.y = t, this.LoopPlay(this.HandAnim1, this.gHand1)
    }, t.prototype.ShowHand2 = function(e, t) {
        this.gHand2.visible = !0, this.gHand2.x = e, this.gHand2.y = t, this.LoopPlay(this.HandAnim2, this.gHand2)
    }, t.prototype.ShowHand3 = function(e, t) {
        this.gHand3.visible = !0, this.gHand3.x = e, this.gHand3.y = t, this.LoopPlay(this.HandAnim3, this.gHand3)
    }, t.prototype.ShowArr = function(e) {
        void 0 === e && (e = !1), e ? (this.gArrDown.visible = !0, this.LoopPlay(this.ArrAnimDown, this.gArrDown)) : (this.gArr.visible = !0, this.LoopPlay(this.ArrAnim, this.gArr))
    }, t.prototype.LoopPlay = function(e, t) {
        var a = this,
            n = function() {
                t.visible ? e.play(0) : e.removeEventListener(egret.Event.COMPLETE, n, a)
            };
        e.addEventListener(egret.Event.COMPLETE, n, a), e.play(0)
    }, t.prototype.ShowText = function(e, t) {
        void 0 === t && (t = !1), this.lDesc.text = e, this.lDesc0.text = e, t ? this.dfDown.visible = !0 : this.dfUp.visible = !0
    }, t.prototype.LookOne = function(e, t, a, n, i, o, r) {
        void 0 === a && (a = 0), void 0 === n && (n = 0), void 0 === i && (i = 0), void 0 === o && (o = 0), void 0 === r && (r = !1);
        var s = this;
        GUtil.GetWorldPos(e, s.vec2), egret.Tween.removeTweens(s.gView);
        var l = s.vec2.x + a,
            d = s.vec2.y + n,
            u = e.width + i,
            c = e.height + o;
        0 == t ? (s.gView.x = l, s.gView.y = d, s.gView.width = u, s.gView.height = c) : egret.Tween.get(s.gView).to({
            x: l,
            y: d,
            width: u,
            height: c
        }, t);
        for (var h = 0; 4 > h; h++) {
            var p = s.gView.getChildAt(h);
            p.visible = !r
        }
    }, t.prototype.SkipGuide = function() {
        switch (MainData.gbattle.guide.CloseGuide(), MainData.SetCustomData(GUIDE_DATANAME, 99), GAudio.StopBGM(), GameChannel) {
            case 2:
            case 4:
            case 5:
            case 10:
            case 9:
                GAudio.PlayBGM("Faster_mp3");
                break;
            case 3:
            case 6:
            case 8:
            case 7:
                GAudio.PlayBGM("Faster_m4a")
        }
        MainData.enableSave = !0, MainData.gbattle.ui.guideEffectSpd.visible = !1, MainData.gbattle.ui.guideEffectAuto.visible = !1, MainData.SaveGame()
    }, t.prototype.ClearBlack = function() {
        for (var e = this, t = 0; 4 > t; t++) {
            var a = e.gView.getChildAt(t);
            a.visible = !1
        }
    }, t
}(UIBase);
__reflect(UIGuideView.prototype, "UIGuideView");
var UIBoxIcon = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.isEpic = !1, t.isRare = !1, t.isShowCursor = !1, t.source = "", t.desc = "", t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.InitView()
    }, t.prototype.InitView = function() {
        var e = this;
        e.icursor.visible = e.isShowCursor, e.icon.source = e.source, e.iEpic.visible = e.isEpic, e.iRare.visible = e.isRare, e.lDesc.text = e.desc
    }, t
}(eui.Component);
__reflect(UIBoxIcon.prototype, "UIBoxIcon", ["eui.UIComponent", "egret.DisplayObject"]);
var UILuckyWheel_51Activity = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.cells = null, t._step = 0, t.rewardId = 0, t._Count = 0, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        e.AddUI(), e.LockTime()
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t.btnClose, t.CloseUI), t.BandTap(t.btnFree, t.OnBtnFreeClick), t.BandTap(t.btnVideo, t.OnBtnVideoClick), t.BandTap(t.btnSkinConversion, UISkinConversion.Show), t.cells = [t.cell0, t.cell1, t.cell2, t.cell3, t.cell4, t.cell5, t.cell6, t.cell7, t.cell8, t.cell9, t.cell10, t.cell11], 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.InitCell(), t.anim.play(0), t.freeCount.text = "剩余" + MainData.GetCustomData("51FreeCount") + "次", GTime.startTick(t.UpdateEndTime, t, !0, !0)
    }, t.prototype.InitCell = function() {
        for (var e = this, t = ["51_highTank_png", "sign_1_png", "sign_3_png", "51_TankItem_png", "spd+autoCompose_png", "sign_4_png", "sign_1_png", "51_TankItem_png", "prize2_png", "sign_3_png", "51_TankItem_png", "prize5_png"], a = ["高级植物", "少量金币", "少量钻石", "植物碎片x1", "技能礼包", "6个箱子", "大量金币", "植物碎片x5", "五倍收益", "大量钻石", "植物碎片x3", "4小时收益"], n = 0; n < e.cells.length; n++) e.cells[n].isShowCursor = 0 == n, e.cells[n].source = t[n], e.cells[n].desc = a[n], 0 == n && (e.cells[n].isEpic = !0), (3 == n || 7 == n || 10 == n) && (e.cells[n].isRare = !0), e.cells[n].InitView()
    }, t.prototype.UpdateView = function() {
        var e = this;
        e.freeCount.text = "剩余" + MainData.GetCustomData("51FreeCount") + "次"
    }, t.prototype.UpdateEndTime = function() {
        var e = this;
        e.lActivityTime.text = 0 == MainData.GetActivityDisEndTime() ? "活动结束" : "距离活动结束:" + GUtil.FormatTime_DDHHMMSS_Full(MainData.GetActivityDisEndTime()), e.lDisTime.text = "（距离下次增加机会剩余：" + GUtil.FormatTime_DDHHMMSS_Full(1e3 * (300 - GameView.instance._51FreeTick)), e.UpdateView()
    }, t.prototype.StartWheel = function() {
        var e = this;
        e.btnVideo.visible = !1, e.btnFree.visible = !1, e.btnClose.visible = !1, e.btnSkinConversion.visible = !1, e.lVideoDesc.visible = !1, e.freeCount.visible = !1, e.lDisTime.visible = !1, e.CalcReward(), e.PlayAnim1()
    }, t.prototype.CalcReward = function() {
        var e = this,
            t = GUtil.RandomRangeInt(0, 100);
        2 > t ? e.rewardId = 0 : 12 > t ? e.rewardId = 1 : 22 > t ? e.rewardId = 2 : 39 > t ? e.rewardId = 3 : 44 > t ? e.rewardId = 4 : 49 > t ? e.rewardId = 5 : 64 > t ? e.rewardId = 6 : 69 > t ? e.rewardId = 7 : 74 > t ? e.rewardId = 8 : 84 > t ? e.rewardId = 9 : 90 > t ? e.rewardId = 10 : e.rewardId = 11
    }, t.prototype.PlayAnim1 = function() {
        var e = this;
        e.cells[e._step].icursor.visible = !0, egret.Tween.get(e.cells[e._step].icursor).to({
            visible: !1
        }, 300 - 220 * e._step / 12).call(function() {
            ++e._step, 12 == e._step ? e.PlayAnim2() : e.PlayAnim1()
        }, e)
    }, t.prototype.PlayAnim2 = function() {
        var e = this;
        return 12 == e._step && (e._step = 0, ++e._Count), 3 == e._Count ? (e._Count = 0, void e.PlayAnim3()) : (e.cells[e._step].icursor.visible = !0, void egret.Tween.get(e.cells[e._step].icursor).to({
            visible: !1
        }, 80).call(function() {
            ++e._step, e.PlayAnim2()
        }, e))
    }, t.prototype.PlayAnim3 = function() {
        var e = this;
        e.cells[e._step].icursor.visible = !0, egret.Tween.get(e.cells[e._step].icursor).to({
            visible: !1
        }, 80 + 220 * e._step / (0 == e.rewardId ? 12 : e.rewardId)).call(function() {
            ++e._step, 12 == e._step && (e._step = 0), e._step == e.rewardId ? (e.cells[e._step].icursor.visible = !0, setTimeout(function() {
                e.PlayAnimEnd()
            }, 300)) : e.PlayAnim3()
        }, e)
    }, t.prototype.PlayAnimEnd = function() {
        var e = this;
        switch (e.rewardId) {
            case 0:
                var t = GUtil.RandomRangeInt(5, 11);
                UIAlert.Show("恭喜获得高级植物x" + t, "HighTank_bjg_png", t, null), MainData.gbattle._dropedBox = -1, MainData.gbattle.wheel_51_currTankLv = MainData.role.highestTank, MainData.gbattle.boxRewardMaxTankCount += t, MainData.gbattle.needDropBox += t;
                break;
            case 1:
                var t = 2 * MainData.GetTankCost(MainData.gbattle.ui.currBuyTankId);
                UIAlert.Show("恭喜获得阳光", "sign_1_png", t, null), MainData.gbattle.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, t);
                break;
            case 2:
                var t = MainData.allSeeds.tanks[Math.max(MainData.role.highestTank - 5, 1) + 1].priceStars;
                MainData.gbattle.ui.FlyStars(this.width / 2, this.height / 2 - 220, t), UIAlert.Show("Nhận kim cương", "sign_3_png", t, null);
                break;
            case 3:
                var t = 1;
                MainData.role.skinDebris += t, UIAlert.Show("恭喜获得植物碎片x1", "51_TankItem_png", t, null);
                break;
            case 4:
                UIAlert.Show("恭喜获得功速+自动合成", "spd+autoCompose_png", 0, null), MainData.GetSpdUpDuration() > 0 ? MainData.role.spdUpTick += 1e3 * MainData.GameValue(1) : MainData.role.spdUpTick = GUtil.SystemMillionSecond() + 1e3 * MainData.GameValue(1), MainData.GetAutoComposeDuration() > 0 ? MainData.role.autoComposeTick += 1e3 * MainData.GameValue(13) : MainData.role.autoComposeTick = GUtil.SystemMillionSecond() + 1e3 * MainData.GameValue(13);
                break;
            case 5:
                UIAlert.Show("恭喜获得6个植物", "prize1_png", 0, null), MainData.gbattle._dropedBox = -1, MainData.gbattle.needDropBox += 6;
                break;
            case 6:
                var t = 4 * MainData.GetTankCost(MainData.gbattle.ui.currBuyTankId);
                UIAlert.Show("恭喜获得阳光", "sign_1_png", t, null), MainData.gbattle.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, t);
                break;
            case 7:
                var t = 5;
                MainData.role.skinDebris += t, UIAlert.Show("恭喜获得植物碎片x5", "51_TankItem_png", t, null);
                break;
            case 8:
                UIAlert.Show("恭喜获得五倍收益", "prize2_png", 0, null);
                var a = MainData.GetCustomData("X5_Money_EndTick");
                a = Math.max(a, GUtil.SystemMillionSecond()), a += 1e3 * MainData.GameValue(23), MainData.SetCustomData("X5_Money_EndTick", a);
                break;
            case 9:
                var t = 2 * MainData.allSeeds.tanks[Math.max(MainData.role.highestTank - 5, 1) + 3].priceStars;
                MainData.gbattle.ui.FlyStars(this.width / 2, this.height / 2 - 220, t), UIAlert.Show("Nhận kim cương", "sign_3_png", t, null);
                break;
            case 10:
                var t = 3;
                MainData.role.skinDebris += t, UIAlert.Show("恭喜获得植物碎片x3", "51_TankItem_png", t, null);
                break;
            case 11:
                var n = MainData.allSeeds.playerRanks[MainData.role.maxPlayerRank],
                    i = 4,
                    o = i * n.offlineMoney;
                UIAlert.Show("恭喜获得四小时收益", "prize5_png", o, null), MainData.gbattle.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, o)
        }
        e.btnVideo.visible = !0, e.btnFree.visible = !0, e.btnClose.visible = !0, e.btnSkinConversion.visible = !0, e.lVideoDesc.visible = !0, e.freeCount.visible = !0, e.lDisTime.visible = !0, 10 == GameChannel && (e.btnVideo.visible = platform.H5_4399_IsShowVideo())
    }, t.prototype.OnBtnFreeClick = function() {
        var e = this;
        MainData.GetCustomData("51FreeCount") > 0 ? (MainData.SetCustomData("51FreeCount", MainData.GetCustomData("51FreeCount") - 1), e.UpdateView(), e.StartWheel()) : UIPopTips.ShowTips("当前抽奖次数不足")
    }, t.prototype.OnBtnVideoClick = function() {
        var e = this;
        MYAD.Video_UILuckyWheel_51(function() {
            e.UpdateView(), e.StartWheel()
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, e)
    }, t.prototype.CloseUI = function() {
        var e = this;
        GTime.stopTick(e.UpdateEndTime, e), e.RemoveUI()
    }, t
}(UIBase);
__reflect(UILuckyWheel_51Activity.prototype, "UILuckyWheel_51Activity");
var UISkinConversion = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.isPause = !1, t.tank0 = null, t.tank1 = null, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        e.AddUI(), e.isPause = GTime._pause
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t.btnConverTank0, t.OnBtnTank0Click), t.BandTap(t.btnConverTank1, t.OnBtnTank1Click), t.BandTap(t.btnConverStar, t.OnBtnStarClick), t.BandTap(t.btnConverSkill, t.OnBtnSkillClick), t.BandTap(t.btnClose, t.CloseUI), t.InitTank(), t.lCount.text = "当前拥有植物碎片:" + MainData.role.skinDebris + "个"
    }, t.prototype.InitTank = function() {
        var e = this;
        e.tank0 = GTank.NewTankWithOutPool(MainData.role.highestTank), e.gTank0.addChild(e.tank0), e.tank1 = GTank.NewTankWithOutPool(MainData.role.highestTank), e.gTank1.addChild(e.tank1), e.gTank0.left = 0, e.gTank1.left = 0
    }, t.prototype.UpdateView = function() {
        var e = this;
        e.lCount.text = "当前拥有植物碎片:" + MainData.role.skinDebris + "个"
    }, t.prototype.OnBtnTank0Click = function() {
        var e = this;
        MainData.role.skinDebris >= 20 ? (MainData.role.skinDebris -= 20, UIAlert.Show("恭喜获得高级植物x5", "HighTank_bjg_png", 5, null), MainData.gbattle._dropedBox = -1, MainData.gbattle.wheel_51_currTankLv = MainData.role.highestTank, MainData.gbattle.boxRewardMaxTankCount += 5, MainData.gbattle.needDropBox += 5, e.UpdateView()) : UIPopTips.ShowTips("当前植物碎片不足")
    }, t.prototype.OnBtnTank1Click = function() {
        var e = this;
        MainData.role.skinDebris >= 35 ? (MainData.role.skinDebris -= 35, UIAlert.Show("恭喜获得高级植物x10", "HighTank_bjg_png", 10, null), MainData.gbattle._dropedBox = -1, MainData.gbattle.wheel_51_currTankLv = MainData.role.highestTank, MainData.gbattle.boxRewardMaxTankCount += 10, MainData.gbattle.needDropBox += 10, e.UpdateView()) : UIPopTips.ShowTips("当前植物碎片不足")
    }, t.prototype.OnBtnStarClick = function() {
        var e = this;
        if (MainData.role.skinDebris >= 5) {
            MainData.role.skinDebris -= 5;
            var t = 2 * MainData.allSeeds.tanks[Math.max(MainData.role.highestTank - 5, 1) + 3].priceStars;
            MainData.gbattle.ui.FlyStars(this.width / 2, this.height / 2 - 220, t), UIAlert.Show("Nhận kim cương", "sign_3_png", t, null), e.UpdateView()
        } else UIPopTips.ShowTips("当前植物碎片不足")
    }, t.prototype.OnBtnSkillClick = function() {
        var e = this;
        MainData.role.skinDebris >= 2 ? (MainData.role.skinDebris -= 2, UIAlert.Show("恭喜获得功速+自动合成", "spd+autoCompose_png", 0, null), MainData.GetSpdUpDuration() > 0 ? MainData.role.spdUpTick += 1e3 * MainData.GameValue(1) : MainData.role.spdUpTick = GUtil.SystemMillionSecond() + 1e3 * MainData.GameValue(1), MainData.GetAutoComposeDuration() > 0 ? MainData.role.autoComposeTick += 1e3 * MainData.GameValue(13) : MainData.role.autoComposeTick = GUtil.SystemMillionSecond() + 1e3 * MainData.GameValue(13), e.UpdateView()) : UIPopTips.ShowTips("当前植物碎片不足")
    }, t.prototype.CloseUI = function() {
        var e = this;
        null != this.tank0 && this.tank0.Delete(), null != this.tank1 && this.tank1.Delete(), this.tank0 = null, this.tank1 = null, e.RemoveUI(), this.isPause && GTime.Pause()
    }, t
}(UIBase);
__reflect(UISkinConversion.prototype, "UISkinConversion");
var GameView = function(e) {
    function t() {
        var a = e.call(this) || this;
        return a.firstLoadGame = !0, a.mainBattle = null, a._51FreeTick = 0, t.instance = a, a
    }
    return __extends(t, e), t.prototype.UpdateSize = function() {
        var e = this,
            t = .6,
            a = e.stage.stageWidth,
            n = e.stage.stageHeight,
            i = a / n;
        i > t && (e.stage.scaleMode = egret.StageScaleMode.SHOW_ALL, n = e.stage.stageHeight), e.width = a, e.height = n
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this), this.UpdateSize(), this.validateNow(), this.removeChild(this.imgBlackMark), platform.TaTrack("Loading", {
            loading_step: 5,
            state: 0
        }), MainData.LoadAllSeeds(), platform.TaTrack("Loading", {
            loading_step: 5,
            state: 1
        }), UILogin.Show()
    }, t.prototype.StartGame = function() {
        switch (9 == GameChannel && platform.QTTReportData({
            type: "start",
            open_id: MainData.openid
        }), MainData.GameInit = !0, GAudio.soundOn = MainData.SoundOn(), GAudio.bgmOn = MainData.MusicOn(), GameChannel) {
            case 2:
            case 4:
            case 5:
            case 9:
            case 10:
                GAudio.PlayBGM("Faster_mp3");
                break;
            case 7:
            case 3:
            case 8:
                GAudio.PlayBGM("Faster_m4a")
        }
        if (MainData.UpdateDayTick(), platform.IsDebugMode() && (MainData.activity_51Tick = 86410), MainData.SetCustomData("activity51Tick", GUtil.SystemMillionSecond() + 1e3 * MainData.activity_51Tick), MainData.gbattle = new GBattle, MainData.gbattle.battleMode = 0, MainData.gbattle.AddUI(), MainData.SetRefreshData("Task_1", 1), platform.TaTrack("Login", {
                If_new: MainData.isNewUser
            }), 5 == GameChannel && (ADSDK.baiduBannerTimer = GUtil.SystemMillionSecond()), 5 == GameChannel && platform.BaiduPrevent(ADSDK.BaiduPrevent_15, ADSDK.BaiduPrevent_30), (4 == GameChannel || 3 == GameChannel) && MainData.isNewUser) {
            var e = "";
            4 == GameChannel ? e = platform.OppoGetLaunchOptionsSync().query.twtraceid ? platform.OppoGetLaunchOptionsSync().query.twtraceid : "" : 3 == GameChannel && (e = UILogin.lOption.query.twtraceid ? UILogin.lOption.query.twtraceid : ""), platform.TaUser_Set({
                twtraceid: e,
                tracetime: MainData.playerStartTime,
                channel: GameChannel,
                openid: MainData.openid,
                gameId: 0
            })
        }
        GTime.startTick(this.Update_51FreeCount, this, !0, !0)
    }, t.prototype.StartDungeon = function(e) {
        switch (this.mainBattle = MainData.gbattle, MainData.gbattle = new GBattle, MainData.gbattle.skinName = "GDungeonSkin", MainData.gbattle.battleMode = 1, MainData.gbattle.dungeonSD = e, MainData.gbattle.AddUI(), GameChannel) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 8:
                GAudio.PlayBGM("Watery Graves_mp3");
                break;
            case 10:
            case 9:
            case 7:
                GAudio.PlayBGM("WateryGraves_mp3")
        }
    }, t.prototype.ResumeBattle_UIDungeon = function(e) {
        var t = this;
        GAudio.PauseBGM(), GUtil.BlackMark_InOut(function() {
            switch (MainData.gbattle.pause = !0, MainData.gbattle.RemoveUI(), e && e.RemoveUI(), MainData.gbattle = t.mainBattle, t.mainBattle.AddUI(), t.mainBattle.ui.UpdateUI(), UIDungeon.Show(), GameChannel) {
                case 2:
                case 4:
                case 5:
                case 9:
                case 10:
                    GAudio.PlayBGM("Faster_mp3");
                    break;
                case 3:
                case 6:
                case 7:
                case 8:
                    GAudio.PlayBGM("Faster_m4a")
            }
        }, function() {
            MainData.gbattle.pause = !1
        }, this, 500, 500)
    }, t.prototype.Update_51FreeCount = function() {
        var e = this;
        e._51FreeTick += GTime.deltaTime, e._51FreeTick >= 300 && (MainData.AddCustomDataValue("51FreeCount", 1), e._51FreeTick = 0)
    }, t.instance = null, t
}(eui.Component);
__reflect(GameView.prototype, "GameView", ["eui.UIComponent", "egret.DisplayObject"]);
var UIADBox = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.onVideo = null, t.onCancel = null, t.thisObj = null, t
    }
    return __extends(t, e), t.Show = function(e, a, n) {
        var i = new t;
        i.onVideo = e, i.onCancel = a, i.thisObj = n, i.AddUI()
    }, t.prototype.childrenCreated = function() {
        var t = this;
        e.prototype.childrenCreated.call(this);
        var a = this;
        switch (a.count.text = "x" + GUtil.BigNumber(6), 10 == GameChannel && (a.btnVideo.visible = platform.H5_4399_IsShowVideo()), a.BandTap(a.btnVideo, function() {
            a.onVideo.call(t.thisObj), a.CloseUI()
        }), a.BandTap(a.btnCancel, function() {
            a.onCancel.call(t.thisObj), a.CloseUI()
        }), a.BtnVideoAnim(), a.uiBanner.visible = !1, GameChannel) {
            case 2:
                0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1);
                break;
            case 4:
                0 == ADSDK.kds.getBlack() || 1 == ADSDK.kds.getBlack() ? ADSDK.ShowBannerAd(1) : (ADSDK.uiBannerAD = a.uiBanner, ADSDK.ShowNative(1, ADSDK.bannerChangeNative_id1, ADSDK.BannerChangeNative));
                break;
            case 3:
                ADSDK.ShowBannerAd(1);
                break;
            case 5:
            case 7:
                ADSDK.ShowBannerAd(1), 0 != ADSDK.kds.getBlack() && a.DelayBtnClose();
                break;
            case 8:
                0 != ADSDK.kds.getBlack() && a.DelayBtnClose();
                break;
            case 9:
                ADSDK.ShowBannerAd(1);
                break;
            case 10:
                a.DelayBtnClose()
        }
    }, t.prototype.CloseUI = function() {
        ADSDK.HideBannerAd(), this.RemoveUI()
    }, t.prototype.BtnVideoAnim = function() {
        var e = this;
        e.btnVideo.visible && egret.Tween.get(e.btnVideo).to({
            scaleX: 1,
            scaleY: 1
        }, 400).call(function() {
            egret.Tween.get(e.btnVideo).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 400).call(function() {
                e.BtnVideoAnim()
            }, e)
        }, e)
    }, t.prototype.DelayBtnClose = function() {
        var e = this;
        e.btnCancel.visible = !1, setTimeout(function() {
            e.btnCancel.visible = !0
        }, 3e3)
    }, t
}(UIBase);
__reflect(UIADBox.prototype, "UIADBox");
var MainData = function() {
    function e() {}
    return e.LoadAllSeeds = function() {
        var t = RES.getRes("SD_AllSeeds_json");
        e.allSeeds = new SD_AllSeeds, e.allSeeds.FromJSON(t);
        for (var a in e.allSeeds.tanks) {
            var n = Number(a);
            n > e.MaxTankLv && (e.MaxTankLv = n)
        }
        for (var a in e.allSeeds.playerRanks) {
            var n = Number(a);
            n > e.MaxRankLv && (e.MaxRankLv = n)
        }
        console.log("读取种子成功 版本号:" + this.allSeeds.version + " 创建时间:" + this.allSeeds.createTime)
    }, e.GameValue = function(t) {
        var a = 0;
        return e.allSeeds.config[t] && (a = e.allSeeds.config[t]), a
    }, e.OnPauseGame = function() {
        null != e.role && (GAudio.PauseBGM(), e.role.offlineTick = GUtil.SystemMillionSecond(), e.SaveGame())
    }, e.OnEnterGame = function() {
        if (null != e.role) {
            if (GAudio.ResumeBGM(), 0 != e.role.offlineTick) {
                var t = GUtil.SystemMillionSecond(),
                    a = (t - e.role.offlineTick) / 1e3;
                a = Math.min(a, e.GameValue(4)), a > e.role.offlineTime && (e.role.offlineTime = a)
            }
            0 == e.GetRefreshData("Task_4") && e.SetRefreshData("Task_4", GUtil.SystemMillionSecond()), e.SetRefreshData("dayOnlineTick", GUtil.SystemMillionSecond()), UIOfflineReward.OfflineBox(), e.role.offlineTick = 0, e.UpdateDayTick(), UIOfflineReward.OnEnterGame(), GTime.OnResume()
        }
    }, e.UpdateDayTick = function() {
        var t = e.GetCustomData("game_day"),
            a = GUtil.SystemDay();
        a > t && (e.SetCustomData("game_day", a), e.role.autoRefreshData = {}, e.role.dayOnlineTime = 0)
    }, e.InitRole = function() {
        if (e.role = new GD_Role, e.role.money = 1e3, e.role.highestTank = 1, e.role.lv = 1, e.role.maxPlayerRank = 1, e.role.costRate = 1, e.role.atkRate = 1, e.role.saveCreateDate = GUtil.SystemMillionSecond(), e.uid = egret.localStorage.getItem("WB04_ldiwlqlMWNiqo23Iwk"), !e.uid) {
            var t = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            };
            e.uid = t() + t() + t() + t() + t() + t() + t() + t(), egret.localStorage.setItem("WB04_ldiwlqlMWNiqo23Iwk", e.uid)
        }
        e.DebugData()
    }, e.DebugData = function() {}, e.SaveGame = function(t) {
        if (void 0 === t && (t = !1), null != e.role && e.enableSave) {
            e.role.saveCount++;
            var a = JSON.stringify(e.role);
            if (egret.localStorage.setItem(GameLocalFile, a) ? console.log("本地存储成功。" + e.role.saveCount) : UIPopDialog.ShowOKCANCEL("存档失败，是否重新存档？", "", function() {
                    e.SaveGame()
                }, null, null, !0), 10 != GameChannel) {
                var n = "uid=" + GSHttp.uid + "&data=" + a + "&token=" + GSHttp.token;
                GSHttp.Send(GameServerURL + "save_game", n, function(t) {
                    console.log("网络存储成功。" + e.role.saveCount)
                }, function(e) {})
            }
        }
    }, e.LoadGame = function() {
        e.InitRole();
        var t = egret.localStorage.getItem(GameLocalFile),
            a = null;
        if (null != t && "" != t) try {
            var n = JSON.parse(t);
            a = new GD_Role, a.FromJSON(n)
        } catch (i) {
            console.error(i), console.error("本地存档读取失败"), a = null
        }
        if (a) e.role = a, console.error("==> 读取到本地存档" + a.saveCount);
        else {
            e.newUser = 1;
            var o = GUtil.SystemDay();
            e.SetCustomData("gameStartTime", o), console.error("==> 未找到本地存档，使用新的存档。")
        }
    }, e.LoadNetData = function(t, a) {
        if (platform.IsDebugMode()) return void t.call(a);
        if (10 != GameChannel) {
            var n = "uid=" + GSHttp.uid + "&token=" + GSHttp.token;
            GSHttp.Send(GameServerURL + "load_game", n, function(n) {
                var i = JSON.parse(n);
                console.log("当前网络存档：" + JSON.stringify(i));
                try {
                    var o = new GD_Role,
                        r = JSON.parse(i.data);
                    o.FromJSON(r), console.log("读取到网络存档" + o.saveCount)
                } catch (n) {
                    console.log("网络存档读取失败")
                }
                null == e.role || e.role.saveCount < o.saveCount ? (console.log("使用网络存档替换本地。" + o.saveCount), e.role = o) : console.log("使用本地存档。" + e.role.saveCount), t.call(a)
            }, function() {
                console.log("网络存档读取失败"), t.call(a)
            })
        } else t.call(a)
    }, e.GetRefreshData = function(t) {
        var a = 0,
            n = e.role.autoRefreshData;
        return n[t] && (a = n[t]), a
    }, e.SetRefreshData = function(t, a) {
        e.role.autoRefreshData[t] = a
    }, e.AddRefreshDataValue = function(t, a) {
        var n = e.GetRefreshData(t);
        n += a, e.SetRefreshData(t, n)
    }, e.GetCustomData = function(t) {
        var a = 0,
            n = e.role.customData;
        return n[t] && (a = n[t]), a
    }, e.SetCustomData = function(t, a) {
        e.role.customData[t] = a
    }, e.AddCustomDataValue = function(t, a) {
        var n = e.GetCustomData(t);
        n += a, e.SetCustomData(t, n)
    }, e.GetPrivilegesLv = function(t) {
        var a = 0;
        return e.role.privileges[t] && (a = e.role.privileges[t]), a
    }, e.CreateNewTank = function(t) {
        var a = e.gbattle,
            n = a.GetEmptySlotIdx(5);
        if (n >= 0) {
            var i = e.role.buyHistory[t];
            null == i && (i = 0), e.role.buyHistory[t] = i + 1, a.CreateTank(n, t)
        }
    }, e.GetTankCost = function(t) {
        var a = e.allSeeds.tanks[t],
            n = e.role.buyHistory[t];
        null == n && (n = 0);
        var i = Math.floor(a.price * Math.pow(a.priceRate, n)),
            o = e.GetCostRate();
        return i *= o
    }, e.GetCostRate = function() {
        var t = e.role.costRate,
            a = e.GetPrivilegesLv(1);
        if (a > 0) {
            var n = e.allSeeds.privilegs[1],
                i = n.lvs[a];
            t -= i.rate
        }
        return t
    }, e.GetAtkRate = function() {
        var t = e.role.atkRate,
            a = e.GetPrivilegesLv(2);
        if (a > 0) {
            var n = e.allSeeds.privilegs[2],
                i = n.lvs[a];
            t += i.rate
        }
        return t
    }, e.GetX5MoneyDuration = function() {
        var t = e.GetCustomData("X5_Money_EndTick"),
            a = t - GUtil.SystemMillionSecond();
        return a
    }, e.GetBuyDiamondData = function() {
        var t = e.GetRefreshData("BuyDiamond_Lv");
        0 == t && (t = 1, e.SetRefreshData("BuyDiamond_Lv", 1));
        var a = e.GetRefreshData("BuyDiamond_Count");
        return {
            lv: t,
            count: a
        }
    }, e.GetAutoComposeDuration = function() {
        var t = e.role.autoComposeTick - GUtil.SystemMillionSecond();
        return t
    }, e.GetSpdUpDuration = function() {
        var t = e.role.spdUpTick - GUtil.SystemMillionSecond();
        return 0 > t && (t = 0), t
    }, e.GetAutoComposeCostStar = function() {
        var t = e.allSeeds.playerRanks[e.role.maxPlayerRank];
        return t.autoComposeCostStar
    }, e.GetBankCostStar = function() {
        var t = e.allSeeds.playerRanks[e.role.maxPlayerRank];
        return t.getMoney2CostStar
    }, e.CanSign = function() {
        var t = 1 == e.GetRefreshData("SignedToday");
        return !t
    }, e.GetLuckyWheelFreeCount = function() {
        var t = e.GetRefreshData("luckywheel_videobuy_count"),
            a = e.GameValue(17) - t;
        return a = Math.max(0, a)
    }, e.GetLuckWheelDay = function() {
        var t = e.GetRefreshData("LuckyWheel_buy_one"),
            a = e.GameValue(28) - t;
        return a
    }, e.GetDungeonCountToday = function() {
        var t = e.GameValue(25),
            a = e.GetRefreshData("dungeon_dayCount");
        return t - a
    }, e.GetSundat = function() {
        var t = e.GetCustomData("sunsday"),
            a = 1 - t;
        return a
    }, e.GetCompound = function() {
        var t = e.GetCustomData("ConmPound"),
            a = e.GameValue(26) - t;
        return a
    }, e.SoundOn = function() {
        var e = "Off" == egret.localStorage.getItem("SettingSound");
        return !e
    }, e.MusicOn = function() {
        var e = "Off" == egret.localStorage.getItem("SettingMusic");
        return !e
    }, e.GetBankMaxValue = function() {
        var t = e.allSeeds.playerRanks[e.role.maxPlayerRank];
        return t.maxMoney2
    }, e.GetVideoBuySunCount = function() {
        return e.GetRefreshData("BuySunCount")
    }, e.Alert_NotEnoughStar = function() {
        UIPopTips.ShowTips("Thiếu kim cương!"), setTimeout(function() {
            UIBuyDiamond.Show()
        }, 500)
    }, e.Alert_NotEnoughMoney = function() {
        UIPopTips.ShowTips("Thiếu mặt trời!")
    }, e.Alert_NotEmptySlot = function() {
        UIPopTips.ShowTips("Không đủ chỗ!")
    }, e.UpdateLadder = function(e, t) {
        platform.setLadderData({
            KVDataList: [{
                key: e,
                value: t + ""
            }],
            success: function() {
                console.log("段位提交成功")
            },
            fail: function(e) {
                console.error(e)
            }
        })
    }, e.UploadLv = function() {
        var t = null == e.role ? 1 : e.role.lv;
        e.UpdateLadder("ladder1", t)
    }, e.BaiduNewYearsActivity = function() {
        if (!(e.GetRefreshData("isUpload") > 0) && !platform.IsDebugMode() && null != e.baiduLoginData && platform.IsApply() && !(e.GetRefreshData("baiduTankComposeCount") < 4)) {
            console.log("openid:" + e.baiduLoginData.data.openid);
            var t = {
                openid: e.baiduLoginData.data.openid,
                appid: "18049512",
                appkey: "CGdImHRx3UM5naA3Zq0QDEko62IxbldS",
                from: 0,
                timestamp: (new Date).getTime().toString()
            };
            GSHttp.Send("https://gamecenter.baidu.com/api/act/spring2020/cpreport", JSON.stringify(t), function(t) {
                console.log("活动数据上报成功"), e.SetRefreshData("isUpload", 1), console.log(JSON.stringify(t))
            }, function(e) {
                console.log("活动数据上报失败")
            }, null, !0)
        }
    }, e.InitServerConfig = function() {
        switch (GameChannel) {
            case 2:
                GameVer = "1.0.2", GameDomain = "3.1.3";
                break;
            case 3:
                GameVer = "1.0.0", GameDomain = "3.1.2";
                break;
            case 4:
                GameVer = "1.0.3", GameDomain = "3.1.5";
                break;
            case 5:
                GameVer = "1.0.1", GameDomain = "3.1.11";
                break;
            case 7:
                GameVer = "1.0.4", GameDomain = "3.1.19";
                break;
            case 8:
                GameVer = "1.0.0", GameDomain = "1.1.21";
                break;
            case 9:
                GameVer = "1.0.0", GameDomain = "3.1.23", qttTicket = egret.getOption("ticket"), qttPlatform = egret.getOption("platform")
        }
    }, e.GetDayOnlineTime = function() {
        var t = GUtil.SystemMillionSecond() - e.GetRefreshData("dayOnlineTick");
        return e.role.dayOnlineTime + t
    }, e.GetActivityDisEndTime = function() {
        var t = e.GetCustomData("activity51Tick") - GUtil.SystemMillionSecond();
        return 0 >= t && (t = 0), t
    }, e.allSeeds = null, e.role = null, e.MaxTankLv = 0, e.MaxRankLv = 0, e.GameInit = !1, e.gbattle = null, e.uid = null, e.baiduLoginData = null, e.openid = "", e.isNewUser = !1, e.playerStartTime = "", e.newUser = 0, e.offlineTime = 0, e.imgSheet = null, e.isShow51Activity = !1, e.activity_51Tick = 0, e.isActivityRange = !1, e.enableSave = !0, e
}();
__reflect(MainData.prototype, "MainData");
var GameFPS = 1 / 60,
    GameVer = "",
    GameLocalFile = "NotTD_Save100",
    GamePlatformServerURL = "https://uc-dzjs.lynlzqy.com/get_pre_domain",
    GameServerURL = "",
    GameDomain = "",
    GameChannel = 10,
    qttTicket = "",
    qttPlatform = "",
    KDSconfig_vivo = {
        gameId: "scjshcm",
        channelName: "vivo",
        videoId: "063b3e017ea248b18310048726e9d507",
        bannerId: "9cbc4b3ffa6649d4a8c0439669c3a49e",
        interId: "7628c5c7ffc34232b3e6ad01c150fdb9",
        nativeId: "a0801ebf75e14fad8b43b2f3c74d7585",
        bannerReborn: !1,
        audioCtrl: {
            play: function() {},
            stop: function() {}
        },
        kdStrategy: [
            [
                [0, 3, 4, 5]
            ],
            [
                [1, 100]
            ],
            [
                [1, 100]
            ],
            [
                [1, 100]
            ]
        ],
        nativeOnLoad: function(e) {
            ADSDK.NativeOnload(e)
        },
        nativeOnError: function(e) {
            switch (console.log("AD-->netive err", e), platform.TaTrack("AdsPlayRet", {
                AdsPlayRet_adsId: ADSDK.currNative_id,
                playRet: -1,
                Ad_Type: 1
            }), ADSDK.nativeOnSucc && window.qg.showToast({
                message: "当前没有广告可以播放,请稍后再试"
            }), ADSDK.nativeOnSucc = null, ADSDK.currNative_adPion) {
                case 2:
                    ADSDK.ShowInterAd(ADSDK.currNative_adPion, ADSDK.interAd_adPoint2);
                    break;
                case 3:
                    ADSDK.ShowInterAd(ADSDK.currNative_adPion, ADSDK.interAd_adPoint3);
                    break;
                case 4:
                    ADSDK.ShowInterAd(ADSDK.currNative_adPion, ADSDK.interAd_adPoint4);
                    break;
                case 5:
                    ADSDK.ShowInterAd(ADSDK.currNative_adPion, ADSDK.interAd_adPoint5);
                    break;
                case 6:
                    ADSDK.ShowInterAd(ADSDK.currNative_adPion, ADSDK.interAd_adPoint6)
            }
            ADSDK.currNative_adPion = 0
        },
        videoAutoLoad: !1
    },
    KDSconfig_qq = {
        gameId: "scjshc",
        channelName: "qq",
        videoId: "45031f49aed594e09480f63513ce881d",
        bannerId: "3b3dafccf4de6f77f76dc0aebb772a44",
        interId: "2e5444e44cba477b24e3ca5e04a3d228",
        bannerStyle: function() {
            return {
                top: window.qq.getSystemInfoSync().screenHeight - 90,
                left: 20,
                width: 400
            }
        },
        kdStrategy: [
            [
                [0, 1]
            ],
            [
                [100, 1]
            ],
            [
                [100, 1]
            ],
            [
                [100, 1]
            ]
        ],
        videoAutoLoad: !1
    },
    KDSconfig_oppo = {
        gameId: "scjshc",
        appId: "30230629",
        channelName: "oppo",
        videoId: "147613",
        bannerId: "147606",
        interId: "147608",
        nativeId: "150360",
        bannerReborn: !1,
        kdStrategy: [
            [
                [0, 1, 2, 3, 4, 5, 6]
            ],
            [
                [0, 3, 5],
                [50, 2, 6]
            ],
            [
                [0, 3, 5]
            ],
            [
                [0, 3, 5]
            ]
        ],
        nativeOnLoad: function(e) {},
        nativeOnError: function(e) {
            switch (console.log("AD-->netive err", e), UIAD_Top.adDate = null, ADSDK.currNative_adPion) {
                case 2:
                    ADSDK.ShowInterAd(ADSDK.currNative_adPion, ADSDK.interAd_adPoint2);
                    break;
                case 3:
                    ADSDK.ShowInterAd(ADSDK.currNative_adPion, ADSDK.interAd_adPoint3);
                    break;
                case 4:
                    ADSDK.ShowInterAd(ADSDK.currNative_adPion, ADSDK.interAd_adPoint4);
                    break;
                case 5:
                    ADSDK.ShowInterAd(ADSDK.currNative_adPion, ADSDK.interAd_adPoint5);
                    break;
                case 6:
                    ADSDK.ShowInterAd(ADSDK.currNative_adPion, ADSDK.interAd_adPoint6)
            }
            ADSDK.currNative_adPion = 0
        },
        videoAutoLoad: !1,
        interAutoLoad: !1
    },
    KDSconfig_baidu = {
        gameId: "scjshc",
        channelName: "baidu",
        appId: "f482a490",
        videoId: "6797767",
        bannerId: "6797790",
        bannerStyle: function() {
            return {
                top: window.swan.getSystemInfoSync().screenHeight - 90,
                left: window.swan.getSystemInfoSync().screenWidth / 2 - 180,
                width: 300
            }
        },
        kdStrategy: [
            [
                [100, 1]
            ],
            [
                [100, 1]
            ]
        ],
        videoAutoLoad: !0,
        bannerLoadDelay: 5500
    },
    KDSconfig_toutiao = {
        gameId: "scjshc",
        channelName: "toutiao",
        appId: "tt80a3f61e1f89cefd",
        videoId: "7bm075h3b0h17mbsrt",
        bannerId: "fk4c7d089e9a67c08j",
        interId: "1c9ekeibdaj29pane8",
        kdStrategy: [
            [
                [100, 1]
            ],
            [
                [100, 1]
            ],
            [
                [100, 1]
            ],
            [
                [100, 1]
            ]
        ],
        videoAutoLoad: !0
    },
    KDSconfig_wx = {
        gameId: "scjshc",
        channelName: "wx",
        videoId: "adunit-bb5063ae9ca9b272",
        bannerId: "adunit-eec88a6a7949dc47",
        interId: "adunit-cf3e32097365b287",
        kdStrategy: [
            [
                [30, 4, 6]
            ],
            [
                [30, 4, 6]
            ],
            [
                [30, 4, 6]
            ],
            [
                [30, 4, 6]
            ],
            [
                [30, 4, 6]
            ],
            [
                [30, 4, 6]
            ],
            [
                [30, 4, 6]
            ]
        ],
        videoAutoLoad: !1
    },
    KDSconfig_uc = {
        gameId: "scjshc",
        channelName: "uc",
        videoId: "video",
        audioCtrl: {
            play: function() {},
            stop: function() {}
        },
        kdStrategy: [
            [
                [1, 100]
            ],
            [
                [1, 100]
            ]
        ]
    },
    Vivo_AD_Vidoe_Id = {
        adPoint_10: "063b3e017ea248b18310048726e9d507",
        adPoint_11: "b98da474895d48b88c66868702408b71",
        adPoint_12: "af47cdc1ee8f4df9ad8c928a0a477a61",
        adPoint_13: "9ba33245a866431e845c748ae8aa9f6c",
        adPoint_14: "f86ab70bd0a346d9b8788d736759eac5",
        adPoint_15: "e4fc072e75404c3cb12f70aa354b71c0",
        adPoint_16: "8eae042933634106b72702afe0d07ed8",
        adPoint_17: "bd2c98b182044f838384f81ae747f7d0",
        adPoint_18: "163f1ced646d45b598a3eeb71c01a54b",
        adPoint_19: "3707bebfe88547beaa1d92ae5f3c7c1d",
        adPoint_20: "40f09b949f5741779c1272e2c2ff9ee8",
        adPoint_21: "85af3323c1e84f0e83aabc4d73fb7096",
        adPoint_22: "b7ab4d1d71ae49c09dda243b509d500b",
        adPoint_23: "0fde8a0c26474c87a32e402f3121826e",
        adPoint_24: "f4459f391d0a4bb9b108f0c2cc770f01",
        adPoint_25: "ec7cfad1e5bb4b92b8e1b3402aab82f2",
        adPoint_26: "dcbf18fe85a34f45a02b9d75b09c04e8",
        adPoint_27: "1aa2be1a205d439b912f70c751ae2f03",
        adPoint_28: "a9156ad39d47429bbd4bd62d733099bf",
        adPoint_29: "a3c21f511f9b4211a4af477aecc91768",
        adPoint_30: "a3c21f511f9b4211a4af477aecc91768",
        adPoint_31: "b0df176eb2284fb6a110c7a62c12e840"
    },
    vivo_videoChangeNative_id = "3bfc8e6390e74ce4b020e49eafe8925d",
    vivo_bannerChangeNative_id = "eb71b57f94bf4701bc4e55152af47038",
    vivo_interAd_adPoint2 = "ae6bdcbc881342bcad22bf1b75959ecd",
    vivo_interAd_adPoint3 = "ae6bdcbc881342bcad22bf1b75959ecd",
    vivo_interAd_adPoint4 = "13df62d990584b0493b7697fd8599389",
    vivo_interAd_adPoint5 = "db275ec1b22846c4b378e415d1f0dd02",
    vivo_interAd_adPoint6 = "ed567c86563342e299767241609a0d60",
    Oppo_AD_Video_Id = {
        adPoint_10: "147613",
        adPoint_11: "147615",
        adPoint_12: "147617",
        adPoint_13: "147619",
        adPoint_14: "147621",
        adPoint_15: "147622",
        adPoint_16: "147624",
        adPoint_17: "147626",
        adPoint_18: "147627",
        adPoint_19: "147628",
        adPoint_20: "147629",
        adPoint_21: "147630",
        adPoint_22: "147631",
        adPoint_23: "147632",
        adPoint_24: "147633",
        adPoint_25: "147634",
        adPoint_26: "147635",
        adPoint_27: "147636",
        adPoint_28: "155147",
        adPoint_29: "178303",
        adPoint_30: "178302",
        adPoint_31: "178301"
    },
    oppo_videoChangeNative_id = "150360",
    oppo_bannerChangeNative_id = "160889",
    oppo_bannerChangeNative_id1 = "160889",
    oppo_interAd_adPoint2 = "148007",
    oppo_interAd_adPoint3 = "148009",
    oppo_interAd_adPoint4 = "148010",
    oppo_interAd_adPoint5 = "148010",
    oppo_interAd_adPoint6 = "148008",
    oppo_gid = "5df9f4802b4acd3cbc50c597",
    oppo_bid = "5df9f50c2b4acd3cbc50c598",
    oppo_query = null,
    wx_gid = "5e3bede1dec580177e0785eb",
    wx_bid = "5e3bedf9dec580177e0785ec",
    wx_query = null,
    QQ_AD_Video_Id = {
        adPoint_10: "45031f49aed594e09480f63513ce881d",
        adPoint_11: "6d9efe07353393a7202a9596a78c99fb",
        adPoint_12: "b2862725f72c86b1df814e39cd5a101c",
        adPoint_13: "1de4ca0301c0103a1fa93cf9fc00081c",
        adPoint_14: "40a75bf0de84a5587f6b1a3ce2a7debc",
        adPoint_15: "3b9b0173b8f07c3710ef0597c3dcf8d1",
        adPoint_16: "6784f8b8483589afbca39421ea67ab4b",
        adPoint_17: "41ff504fdadd99e3bb32a58822b6e84f",
        adPoint_18: "7b3be934cf9a10590b639c0707bbaa73",
        adPoint_19: "d0a26b4977a30d7b92674e7c6e9965d1",
        adPoint_20: "6c91dc3f21e2738de7d1bd6103f8a03a",
        adPoint_21: "5cdc869a4921fe56fff5f689548b61e0",
        adPoint_22: "e3b6e736d6c9c8e3318071f5cc8e0b2c",
        adPoint_23: "aae8de7dc1f0275590916e7e10d3d48d",
        adPoint_24: "a7a5514a79e0a88de164b08d447f99e1",
        adPoint_25: "6f6d0e21a501f3d7c65128edafd433ac",
        adPoint_26: "e478cb176a872613fffd56f28a715ce2",
        adPoint_27: "1a928857f0753f150e287295d85f9c34",
        adPoint_28: "1a928857f0753f150e287295d85f9c34",
        adPoint_29: "1a928857f0753f150e287295d85f9c34",
        adPoint_30: "1a928857f0753f150e287295d85f9c34",
        adPoint_31: "1a928857f0753f150e287295d85f9c34"
    },
    baidu_gid = "5e059e0fbcc29513307839cb",
    baidu_bid = "5e059e54bcc29513307839cc",
    baidu_query = null,
    Baidu_AD_Video_Id = {
        adPoint_10: "6797767",
        adPoint_11: "6797770",
        adPoint_12: "6797771",
        adPoint_13: "6797772",
        adPoint_14: "6797773",
        adPoint_15: "6797774",
        adPoint_16: "6797778",
        adPoint_17: "6797779",
        adPoint_18: "6797780",
        adPoint_19: "6797781",
        adPoint_20: "6797782",
        adPoint_21: "6797783",
        adPoint_22: "6797784",
        adPoint_23: "6797785",
        adPoint_24: "6797786",
        adPoint_25: "6797787",
        adPoint_26: "6797788",
        adPoint_27: "6797789",
        adPoint_28: "",
        adPoint_29: "",
        adPoint_30: "",
        adPoint_31: ""
    },
    tuotiao_gid = "5e17f3a0f2454e4f90ff2b07",
    toutiao_bid = "5e17f527f2454e4f90ff2b08",
    toutiao_query = null,
    Toutiao_AD_Video_Id = {
        adPoint_10: "7bm075h3b0h17mbsrt",
        adPoint_11: "7bm075h3b0h17mbsrt",
        adPoint_12: "7bm075h3b0h17mbsrt",
        adPoint_13: "7bm075h3b0h17mbsrt",
        adPoint_14: "7bm075h3b0h17mbsrt",
        adPoint_15: "bic6m2kinf12uk2mjh",
        adPoint_16: "891ft3u936snqjc001",
        adPoint_17: "5swr84a3sci2jada85",
        adPoint_18: "35gg791o2ew9vy8i7k",
        adPoint_19: "2o2440ek2nck1l0khc",
        adPoint_20: "6blph01gt8t1mad5mg",
        adPoint_21: "ck6858n07se4f6rlhg",
        adPoint_22: "3c950qa8pah1kss3nb",
        adPoint_23: "4s0rgl51d5pcig0h8e",
        adPoint_24: "ad20mb2a3j3qb9j1mm",
        adPoint_25: "577c17fmh6g1583d44",
        adPoint_26: "7v001406j1dgaf8mbl",
        adPoint_27: "an03e47gkcdb70gh38",
        adPoint_28: "",
        adPoint_29: "",
        adPoint_30: "",
        adPoint_31: ""
    },
    Wx_AD_Video_Id = {
        adPoint_10: "adunit-bb5063ae9ca9b272",
        adPoint_11: "adunit-cd1dfd65bf40731a",
        adPoint_12: "adunit-ecc3fda32bf63b2b",
        adPoint_13: "adunit-bc5b36b2d58c614c",
        adPoint_14: "adunit-857f80a304e19f0d",
        adPoint_15: "adunit-7b4f4e668809c20c",
        adPoint_16: "adunit-5ddb89e41ff1c8fc",
        adPoint_17: "adunit-894c16dd136ef303",
        adPoint_18: "adunit-c4e956f4ef7e34eb",
        adPoint_19: "adunit-77439668c814e2be",
        adPoint_20: "adunit-9364d69e63d29b08",
        adPoint_21: "adunit-3665aedfaca94ffa",
        adPoint_22: "adunit-4277d7c13c27ed70",
        adPoint_23: "adunit-110eaa21074dbd30",
        adPoint_24: "adunit-523b0486a3813de9",
        adPoint_25: "adunit-635fd62295c524ae",
        adPoint_26: "adunit-a848fab7ad6a8880",
        adPoint_27: "adunit-dea094583091979f",
        adPoint_28: "adunit-dbe2f36411cdea66"
    },
    wx_interAd_NoVideo = "adunit-3be86db52ad55afd",
    wx_interAd_adPoint2 = "",
    wx_interAd_adPoint3 = "",
    wx_interAd_adPoint4 = "adunit-cf3e32097365b287",
    wx_interAd_adPoint5 = "",
    wx_interAd_adPoint6 = "adunit-7a95252082d87bdc",
    UC_AD_Video_Id = {
        adPoint_10: "video",
        adPoint_11: "video",
        adPoint_12: "video",
        adPoint_13: "video",
        adPoint_14: "video",
        adPoint_15: "video",
        adPoint_16: "video",
        adPoint_17: "video",
        adPoint_18: "video",
        adPoint_19: "video",
        adPoint_20: "video",
        adPoint_21: "video",
        adPoint_22: "video",
        adPoint_23: "video",
        adPoint_24: "video",
        adPoint_25: "video",
        adPoint_26: "video",
        adPoint_27: "video",
        adPoint_28: "video",
        adPoint_29: "video",
        adPoint_30: "video",
        adPoint_31: "video"
    },
    Oppo_CPAHtURL = "https://minigame-cdn.hrgame.com.cn/pro/PVZ2M/oppo/1.6.0/cpa.json",
    Baidu_CPAHtURL = "https://minigame-cdn.hrgame.com.cn/pro/PVZ2M/baidu/1.0.0.15/cpa.json",
    H5__AD_Video_Id = {
        adPoint_10: "",
        adPoint_11: "",
        adPoint_12: "",
        adPoint_13: "",
        adPoint_14: "",
        adPoint_15: "",
        adPoint_16: "",
        adPoint_17: "",
        adPoint_18: "",
        adPoint_19: "",
        adPoint_20: "",
        adPoint_21: "",
        adPoint_22: "",
        adPoint_23: "",
        adPoint_24: "",
        adPoint_25: "",
        adPoint_26: "",
        adPoint_27: "",
        adPoint_28: "",
        adPoint_29: "",
        adPoint_30: "",
        adPoint_31: ""
    },
    GActorNoLogic = function(e) {
        function t(a, n, i, o, r) {
            void 0 === r && (r = null);
            var s = e.call(this) || this;
            s.anim = null, s.armature = null, s.sX = 1, s.sY = 1, s.destroyed = !1, s.width = 1, s.height = 1, s._actorName = a, s._src = n;
            var l = t.factoryDict[n];
            if (null == l) {
                var d = RES.getRes(n + "_ske_json"),
                    u = RES.getRes(n + "_tex_json");
                null == r && (r = n);
                var c = RES.getRes(r + "_tex_png");
                l = new dragonBones.EgretFactory, l.addDragonBonesData(l.parseDragonBonesData(d)), l.addTextureAtlasData(l.parseTextureAtlasData(u, c)), t.factoryDict[n] = l
            }
            return s.armature = l.buildArmature(a), s.anim = s.armature.display, s.anim.scaleX = i, s.anim.scaleY = o, s.sX = i, s.sY = o, s.touchEnabled = !1, s.touchChildren = !1, s.anim.touchEnabled = !1, s.anim.touchChildren = !1, s.addChild(s.anim), s
        }
        return __extends(t, e), t.prototype.OnDestroy = function() {
            this.destroyed || (null != this.parent && this.parent.removeChild(this), this.armature = null, this.destroyed = !0)
        }, t.prototype.PlayAnim = function(e, t, a) {
            void 0 === t && (t = 1), void 0 === a && (a = -1), this.prevState = this.armature.animation.play(e, a)
        }, t.prototype.SyncAnim = function(e) {
            this.prevState.name != e.prevState.name && this.PlayAnim(e._prevAnim), this.prevState.currentTime = e.prevState.currentTime, this.armature.advanceTime(0)
        }, t.factoryDict = {}, t
    }(eui.Component);
__reflect(GActorNoLogic.prototype, "GActorNoLogic");
var GBullet = function(e) {
    function t(t) {
        var a = e.call(this) || this;
        return a.bulletId = 1, a.dmg = 0, a.dmgRate = 1, a.speed = 0, a.tails = null, a.dirX = 0, a.dirY = 0, a.passHit = null, a._prevDX = 0, a._prevDY = 0, a.hitCount = 0, a.bulletId = t, a
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.validateNow(), t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2;
        var a = new GActor("bullet" + t.bulletId, "Tanks", 2, 2);
        a.PlayAnim("play"), t.addChild(a), a.x = t.width / 2, a.y = t.width / 2
    }, t.prototype.GetDamage = function() {
        return this.dmg * this.dmgRate * MainData.GetAtkRate()
    }, t.prototype.SetTarget = function(e, a) {
        var n = this;
        n.dmg = e.sd.atk, GUtil.GetWorldPos(e, t.vec2), n.x = t.vec2.x + e.width / 2, n.y = t.vec2.y + e.width / 2;
        var i = e.atank.rotation + 270,
            o = 100 * Math.cos(i * Math_Deg2Rad),
            r = 100 * Math.sin(i * Math_Deg2Rad),
            s = Math.sqrt(o * o + r * r);
        n.dirX = o / s, n.dirY = r / s, n.x += 50 * n.dirX, n.y += 50 * n.dirY, n.speed = MainData.GameValue(3), MainData.GetSpdUpDuration() > 0 && 0 == MainData.gbattle.battleMode && (n.speed *= 1.5), 0 != a.x && (n.x = a.x, n.y = a.y), n._prevDX = n.dirX, n._prevDY = n.dirY, n.dmgRate = a.r, n.hitCount = 0, n.CalcRotation(), n.NewTails()
    }, t.prototype.CalcRotation = function() {
        var e = this,
            t = Math.atan2(e.dirY, e.dirX) * Math_Rad2Deg + 90;
        e.rotation = t
    }, t.prototype.NewTails = function() {
        MainData.GetSpdUpDuration() > 0 && 0 == MainData.gbattle.battleMode && (this.tails = MainData.gbattle.pools.GetTails(), this.tails.SetRotation(this.rotation, this.speed, .2), this.tails.UpdateDestPos(this.x, this.y), MainData.gbattle.gBulletTails.addChild(this.tails))
    }, t.prototype.UpdatePosition = function(e) {
        var t = this,
            a = GTime.deltaTime * t.speed;
        t.x += t.dirX * a, t.y += t.dirY * a, t.y > e && t.RemoveMe(), t.tails && t.tails.UpdateDestPos(t.x, t.y)
    }, t.prototype.UpdateRotation = function() {
        var e = this;
        if (e._prevDX != e.dirX || e._prevDY != e.dirY) {
            e._prevDX = e.dirX, e._prevDY = e.dirY, e.CalcRotation(), e.hitCount++;
            var t = 0;
            6 == GameChannel ? t = 2 : 5 != GameChannel && (t = MainData.GameValue(15)), e.hitCount >= t ? e.RemoveMe() : (null != e.tails && (e.tails.removeOnStop = !0), e.NewTails())
        }
    }, t.prototype.RemoveMe = function() {
        var e = this;
        null != e.tails && (e.tails.removeOnStop = !0), e.tails = null, e.passHit = null, e.Release2Pool()
    }, t.prototype.CheckHit = function(e, a, n, i, o) {
        void 0 === e && (e = null);
        var r = this,
            s = MainData.gbattle,
            l = t.p0,
            d = t.p1,
            u = t.l0,
            c = t.l1,
            h = GTime.deltaTime * r.speed * 2.2;
        u.x = r.x - r.dirX * h, u.y = r.y - r.dirY * h - r.dirY * o, c.x = r.x, c.y = r.y;
        var p = s.quadTree.retrieve(r.x, r.y);
        if (p)
            for (var D = 0; D < p.length; D++) {
                var v = p[D];
                if (null != v && (null == e || e == v) && r.passHit != v) {
                    var f = v.width * v.scaleX,
                        m = v.height * v.scaleY,
                        g = f / 2;
                    if (!(r.x < v.x - g - h || r.x > v.x + g + h || r.y < v.y - m - h || r.y > v.y + h)) {
                        if (l.x = v.x - g, l.y = v.y - m, d.x = v.x + g, d.y = v.y - m, u.y < d.y && r.IsLineMeet(l, d, u, c)) {
                            r.dirY = -r.dirY;
                            var _ = r.y - l.y;
                            r.y = l.y - _, v.BeHurt(r), r.passHit = v;
                            break
                        }
                        if (l.x = v.x - g, l.y = v.y, d.x = v.x + g, d.y = v.y, u.y > d.y && r.IsLineMeet(l, d, u, c)) {
                            r.dirY = -r.dirY;
                            var _ = r.y - l.y;
                            r.y = l.y - _, v.BeHurt(r), r.passHit = v;
                            break
                        }
                        if (l.x = v.x - g, l.y = v.y - m, d.x = v.x - g, d.y = v.y, u.x < d.x && r.IsLineMeet(l, d, u, c)) {
                            r.dirX = -r.dirX;
                            var y = r.x - l.x;
                            r.x = l.x - y, v.BeHurt(r), r.passHit = v;
                            break
                        }
                        if (l.x = v.x + g, l.y = v.y - m, d.x = v.x + g, d.y = v.y, u.x > d.x && r.IsLineMeet(l, d, u, c)) {
                            r.dirX = -r.dirX;
                            var y = r.x - l.x;
                            r.x = l.x - y, v.BeHurt(r), r.passHit = v;
                            break
                        }
                    }
                }
            }
        r.x < a && r.dirX < 0 ? r.dirX = -r.dirX : r.x > i && r.dirX > 0 ? r.dirX = -r.dirX : r.y < n && r.dirY < 248 && (r.dirY = -r.dirY)
    }, t.prototype.sgn = function(e) {
        return -1e-5 > e ? -1 : e > 1e-5 ? 1 : 0
    }, t.prototype.Cross = function(e, t, a, n) {
        return (t.x - e.x) * (n.y - a.y) - (t.y - e.y) * (n.x - a.x)
    }, t.prototype.Area = function(e, t, a) {
        return this.Cross(e, t, e, a)
    }, t.prototype.fArea = function(e, t, a) {
        return Math.abs(this.Area(e, t, a))
    }, t.prototype.IsLineMeet = function(e, t, a, n) {
        var i = Math.max,
            o = Math.min;
        return i(o(e.x, t.x), o(a.x, n.x)) <= o(i(e.x, t.x), i(a.x, n.x)) && i(o(e.y, t.y), o(a.y, n.y)) <= o(i(e.y, t.y), i(a.y, n.y)) && this.sgn(this.Cross(a, t, a, n) * this.Cross(a, n, a, e)) >= 0 && this.sgn(this.Cross(e, n, e, t) * this.Cross(e, t, e, a)) >= 0
    }, t.prototype.CalcLineInter = function(e, a, n, i) {
        var o = this.fArea(e, a, n) / this.fArea(e, a, i);
        return t.cp.x = (n.x + o * i.x) / (1 + o), t.cp.y = (n.y + o * i.y) / (1 + o), t.cp
    }, t.vec2 = new Vector2(0, 0), t.p0 = new Vector2(0, 0), t.p1 = new Vector2(0, 0), t.l0 = new Vector2(0, 0), t.l1 = new Vector2(0, 0), t.cp = new Vector2(0, 0), t
}(GPoolItem);
__reflect(GBullet.prototype, "GBullet");
var UIBuffAction = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.mode = 0, t
    }
    return __extends(t, e), t.Show = function(e) {
        var a = new t;
        return a.mode = e, a.AddUI(), a
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.BuffAbg.source = MainData.imgSheet.getTexture("light_png"), t.BuffAbg0.source = MainData.imgSheet.getTexture("light_png"), t.BuffAbg1.source = MainData.imgSheet.getTexture("light_png"), t.mode) {
            case 0:
                t.BuffAAction.play(1), t.BuffAAction.once(egret.Event.COMPLETE, t.RemoveUI, t), GAudio.PlaySoundByName("tone_m4a", 1, 1);
                break;
            case 1:
                t.BuffBAction.play(1), t.BuffBAction.once(egret.Event.COMPLETE, t.RemoveUI, t), GAudio.PlaySoundByName("tone_m4a", 1, 1);
                break;
            case 2:
                t.BuffCAction.play(1), t.BuffCAction.once(egret.Event.COMPLETE, t.RemoveUI, t), GAudio.PlaySoundByName("tone_m4a", 1, 1)
        }
    }, t
}(UIBase);
__reflect(UIBuffAction.prototype, "UIBuffAction");
var UIBuffIcon = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.mode = 0, t
    }
    return __extends(t, e), t.prototype.Update = function() {
        var e = this,
            t = 0;
        switch (e.mode) {
            case 0:
                t = MainData.GetSpdUpDuration();
                break;
            case 1:
                t = MainData.GetX5MoneyDuration();
                break;
            case 2:
                t = MainData.GetAutoComposeDuration()
        }
        if (t > 0 && null == e.parent ? (MainData.gbattle.ui.gBuffs.addChild(e), UIBuffAction.Show(e.mode)) : 0 >= t && null != e.parent && e.parent.removeChild(e), t > 0) {
            var a = GUtil.FormatTime_HHMMSS(t);
            5 == a.length && (a = "00:" + a), e.lTime.text != a && (e.lTime.text = a)
        }
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.mode) {
            case 0:
                t.img.source = "speedbuff_png", t.lInfo.text = "植物攻击速度和子弹飞行速度提高1倍";
                break;
            case 1:
                t.img.source = "prizebuff_png", t.lInfo.text = "短时间内击杀获得的金钱提高5倍";
                break;
            case 2:
                t.img.source = "Synthesisbuff_png", t.lInfo.text = "自动将一样的植物合成为高级植物"
        }
        t.removeChild(t.gDesc), t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.ShowDesc, t), t.addEventListener(egret.TouchEvent.TOUCH_END, t.HideDesc, t), t.addEventListener(egret.TouchEvent.TOUCH_CANCEL, t.HideDesc, t), t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, t.HideDesc, t)
    }, t.prototype.ShowDesc = function() {
        null == this.gDesc.parent && this.addChild(this.gDesc)
    }, t.prototype.HideDesc = function() {
        null != this.gDesc.parent && this.removeChild(this.gDesc)
    }, t
}(eui.Component);
__reflect(UIBuffIcon.prototype, "UIBuffIcon", ["eui.UIComponent", "egret.DisplayObject"]);
var UIFlyBox = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.delay = 0, t.fcount = 0, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.flyBox.source = MainData.imgSheet.getTexture("FlyBox_png"), this.fcount = MainData.GameValue(20), t.BandTap(t.flyBox, t.OnClick), t.HideView()
    }, t.prototype.OnClick = function() {
        if (egret.Tween.removeTweens(this.flyBox), egret.Tween.removeTweens(this.gFlyBox), 6 == GameChannel && 0 == MainData.GetRefreshData("wxFlyBoxReward") && 0 != ADSDK.kds.getBlack()) UIFlyBoxReward.ShowSpdReward();
        else {
            var e = GUtil.RandomRangeInt(0, 100);
            e < MainData.GameValue(19) ? UIFlyBoxReward.ShowBoxReward() : UIFlyBoxReward.ShowBuffReward()
        }
        this.HideView()
    }, t.prototype.Update = function() {
        var e = this;
        e.visible || (e.delay -= GTime.deltaTime, e.delay <= 0 && e.StartFly())
    }, t.prototype.StartFly = function() {
        var e = this;
        return e.fcount <= 0 ? void e.HideView() : (e.fcount--, MainData.gbattle.RunDelay(2, function() {
            GAudio.PlaySoundByName("flybox_m4a", .3, 2)
        }, e), e.visible = !0, e.gFlyBox.x = -300, e.gFlyBox.y = 600, e.flyBox.scaleX = -1, void egret.Tween.get(e.gFlyBox, {
            onChange: function() {
                e.flyBox.y = 10 * Math.sin(e.gFlyBox.x / 20)
            },
            onChangeObj: e
        }).to({
            x: e.width - 100,
            y: 600
        }, 2e4).call(function() {
            e.flyBox.scaleX = 1
        }).to({
            x: -300,
            y: 550
        }, 2e4).call(function() {
            e.StartFly()
        }, e))
    }, t.prototype.HideView = function() {
        this.delay = MainData.GameValue(18), this.fcount = MainData.GameValue(20), this.visible = !1
    }, t
}(UIBase);
__reflect(UIFlyBox.prototype, "UIFlyBox");
var UIPause = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._isMenuShown = !1, t._lockBtnMenu = !1, t.rtick = 0, t.rsum = [0, 0, 0, 0, 0, 0, 0, 0], t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var a = this;
        a.BandTap(a.btnSignDay, UISignDay.Show), a.BandTap(a.btnLuckyWheel, UILuckyWheel.Show), a.BandTap(a.btnSetting, UISetting.Show), a.BandTap(a.btnMenu, a.ShowMenu), a.BandTap(a.imgPauseBG, a.ShowMenu), a.validateNow(), a.gPauseView.x = -a.gPauseView.width, a.imgPauseBG.visible = !1, a.UpdateSignRedPoint(), t.instance = a, a.gBtns.visible = !1;
        var n = a.btnMenu,
            i = a.btnSignDay,
            o = a.btnLuckyWheel,
            r = n.shining,
            s = i.shining,
            l = o.shining;
        r.play(), s.play(), l.play(), a.BandTap(a.btnDebug0, function() {
            MainData.gbattle.ui.flyBox.delay = 1
        }), a.BandTap(a.btnDebug1, function() {
            MainData.gbattle._dropBoxDelay = 99999
        }), a.BandTap(a.btnDebug2, function() {
            MainData.role.offlineTime = 3600, UIOfflineReward.Show()
        }), a.BandTap(a.btnDebug3, function() {
            UIPopDialog.ShowOKCANCEL("reset game", null, function() {
                MainData.InitRole(), MainData.enableSave = !0, MainData.SaveGame(), GameView.instance.parent.removeChild(GameView.instance)
            }, null, a)
        }), a.BandTap(a.btnDebug4, function() {
            MainData.gbattle.ui.FlyStars(a.width / 2, a.height / 2 - 220, 1e3)
        }), a.BandTap(a.btnDebug5, function() {
            var e = MainData.allSeeds.playerRanks[MainData.role.lv].nextExp;
            MainData.role.exp = e
        })
    }, t.prototype.ShowMenu = function() {
        var e = this;
        e._lockBtnMenu || (e._lockBtnMenu = !0, e._isMenuShown ? egret.Tween.get(e.gPauseView).to({
            x: -100
        }, 250).call(function() {
            e.gBtns.visible = !1, e.imgPauseBG.visible = !1, e._isMenuShown = !1, e._lockBtnMenu = !1
        }, e) : (e.gBtns.visible = !0, egret.Tween.get(e.gPauseView).to({
            x: 0
        }, 250).call(function() {
            e.imgPauseBG.visible = !0, e._isMenuShown = !0, e._lockBtnMenu = !1
        }, e)))
    }, t.prototype.UpdateRedPoint = function() {
        var e = this,
            t = MainData.CanSign(),
            a = MainData.GetLuckyWheelFreeCount() > 0;
        t >= a ? t = a : a = t;
        var n = t || a;
        e.btnSignDay.getChildAt(1).visible = t, e.btnLuckyWheel.getChildAt(1).visible = a, e.btnMenu.getChildAt(1).visible = n
    }, t.prototype.UpdateSignRedPoint = function() {
        var e = this,
            t = MainData.CanSign(),
            a = t;
        e.btnSignDay.getChildAt(1).visible = t, e.btnMenu.getChildAt(1).visible = a
    }, t.CalcDPS = function(e) {
        t.sum_dmg += e, null == t.dps_func && (t.dps_func = function() {
            t.sum_dur += GTime.deltaTime, t.instance.t0.text = GUtil.BigNumber(t.sum_dmg / t.sum_dur)
        }, GTime.startTick(t.dps_func, this))
    }, t.prototype.RecordSet = function() {
        this.rtick = GUtil.SystemMillionSecond()
    }, t.prototype.RecordEnd = function(e) {
        var a = t.instance,
            n = null;
        switch (e) {
            case 0:
                n = a.t0;
                break;
            case 1:
                n = a.t1;
                break;
            case 2:
                n = a.t2;
                break;
            case 3:
                n = a.t3;
                break;
            case 4:
                n = a.t4;
                break;
            case 5:
                n = a.t5;
                break;
            case 6:
                n = a.t6;
                break;
            case 7:
                n = a.t7
        }
        var i = this.rtick;
        this.rsum[e] += this.rtick - i, this.RecordSet(), n.text = e + ":" + this.rsum[e]
    }, t.instance = null, t.sum_dmg = 0, t.sum_dur = 0, t.dps_func = null, t
}(UIBase);
__reflect(UIPause.prototype, "UIPause");
var UIBulletScreen = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.lRs = [], t.lLs = [], t.lRsFlag = [], t.lLsFlag = [], t.rollSpeed = 7e3, t.isShowing = !0, t._dtR = 0, t._dtL = 0, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.lRs = [t.lR0, t.lR1, t.lR2, t.lR3], t.lLs = [t.lL0, t.lL1, t.lL2, t.lL3], t.lRsFlag = [!1, !1, !1, !1], t.lLsFlag = [!1, !1, !1, !1], GTime.startTick(t.PlayRightAnim, t, !0, !0), GTime.startTick(t.PlayLeftAnim, t, !0, !0)
    }, t.prototype.OnBtnBSClick = function(e) {
        var t = this;
        t.isShowing ? (e.currentState = "uncheck", t.gView.visible = !1, GTime.stopTick(t.PlayLeftAnim, t), GTime.stopTick(t.PlayRightAnim, t), t.RecoverView()) : (e.currentState = "check", GTime.startTick(t.PlayRightAnim, t, !0, !0), GTime.startTick(t.PlayLeftAnim, t, !0, !0), t.gView.visible = !0), t.isShowing = !t.isShowing
    }, t.prototype.RecoverView = function() {
        for (var e = this, t = 0; t < e.lLs.length; t++) e.lRs[t].x = 750, e.lLs[t].x = -e.lLs[t].width, egret.Tween.removeTweens(e.lLs[t]), egret.Tween.removeTweens(e.lRs[t]), e.lRsFlag[t] = !1, e.lLsFlag[t] = !1
    }, t.prototype.PlayRightBulletLabelAnim = function(e) {
        var a = this;
        a.lRs[e].text = t.desc[GUtil.RandomRangeInt(0, t.desc.length)], a.lRs[e].x = 750, a.lRsFlag[e] = !0, egret.Tween.get(a.lRs[e]).to({
            x: -a.lRs[e].width
        }, a.rollSpeed).call(function() {
            a.lRsFlag[e] = !1
        })
    }, t.prototype.PlayLeftBulletLabelAnim = function(e) {
        var a = this;
        a.lLs[e].text = t.desc[GUtil.RandomRangeInt(0, t.desc.length)], a.lLs[e].x = -a.lLs[e].width, a.lLsFlag[e] = !0, egret.Tween.get(a.lLs[e]).to({
            x: 750
        }, a.rollSpeed).call(function() {
            a.lLsFlag[e] = !1
        })
    }, t.prototype.PlayRightAnim = function() {
        var e = this;
        if (e._dtR += GameFPS, e._dtR > 3) {
            if (e._dtR = 0, !e.HasRightLabel()) return;
            for (var t = 0; e.lRsFlag[t = GUtil.RandomRangeInt(0, 4)];);
            e.PlayRightBulletLabelAnim(t)
        }
    }, t.prototype.PlayLeftAnim = function() {
        var e = this;
        if (e._dtL += GameFPS, e._dtL > 2) {
            if (e._dtL = 0, !e.HasLeftLabel()) return;
            for (var t = 0; e.lLsFlag[t = GUtil.RandomRangeInt(0, 4)];);
            e.PlayLeftBulletLabelAnim(t)
        }
    }, t.prototype.HasRightLabel = function() {
        for (var e = this, t = 0; t < e.lRsFlag.length; t++)
            if (!e.lRsFlag[t]) return !0;
        return !1
    }, t.prototype.HasLeftLabel = function() {
        for (var e = this, t = 0; t < e.lLsFlag.length; t++)
            if (!e.lLsFlag[t]) return !0;
        return !1
    }, t.desc = ["Chú ý! Zombie đang đến!", "Hả? Cái gì cơ?", "Hãy để cho chuyên gia xử lý", "启战歌", "233333", "有点东西啊", "真好玩，带感，啦啦啦啦", "大神", "吃个瓜，围观。", "666！！！！！！", "真的是秀", "前方高能预警", "不要吵，专心玩游戏了", "哈哈", "呵呵", "真是搞笑，腻害了", "帅的一批", "么么哒", "弹幕笑尿了3333", "来啊，快活啊，一起快活啊"], t
}(UIBase);
__reflect(UIBulletScreen.prototype, "UIBulletScreen");
var UIBuyDiamond = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.sd = null, t.buyCount = 0, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.isPause = GTime._pause, e.LockTime(), e.AddUI(), e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.BandTap(t.btnClose, t.CloseUI), t.BandTap(t.btnClose1, t.CloseUI), t.BandTap(t.btnVideo, t.VideoReward), t.btnVideo.visible = !0, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.uiHtTop.visible = !1, t.UpdateView(), GameChannel) {
            case 2:
                t.uiAD.visible = !1, 0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1);
                break;
            case 4:
                t.uiAD.visible = !1, t.uiHtTop.visible = !0;
                break;
            case 3:
                ADSDK.ShowBannerAd(1);
                var a = MainData.GetRefreshData("qqShare_22");
                2 > a ? t.btnVideo.iconDisplay.source = "sharepoint_png" : t.btnVideo.iconDisplay.source = "video_png";
                break;
            case 7:
                if (ADSDK.ShowBannerAd(1), "douyin_lite" != platform.GetToutiaoApp()) {
                    var a = MainData.GetRefreshData("toutiao_buyDiamondCount");
                    4 > a ? t.btnVideo.iconDisplay.source = "share_png" : t.btnVideo.iconDisplay.source = "video_png"
                }
                break;
            case 9:
            case 5:
                ADSDK.ShowBannerAd(1)
        }
    }, t.prototype.UpdateView = function() {
        var e = this;
        if (3 == GameChannel) {
            var t = MainData.GetRefreshData("qqShare_22");
            2 > t ? e.btnVideo.iconDisplay.source = "sharepoint_png" : e.btnVideo.iconDisplay.source = "video_png"
        }
        if (7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp()) {
            var t = MainData.GetRefreshData("toutiao_buyDiamondCount");
            4 > t ? e.btnVideo.iconDisplay.source = "share_png" : e.btnVideo.iconDisplay.source = "video_png"
        }
        var a = MainData.GetBuyDiamondData();
        e.buyCount = a.count, e.sd = MainData.allSeeds.buyStarLvs[a.lv], e.sd ? (e.gNoCount.visible = !1, e.gHasCount.visible = !0, e.lStarNum.text = "+ " + (e.sd.starNum + Math.max(MainData.role.lv - 5, 0)), e.btnVideo.label = "Nhận (" + e.buyCount + "/" + e.sd.count + ")") : (e.gNoCount.visible = !0, e.gHasCount.visible = !1)
    }, t.prototype.CloseUI = function() {
        ADSDK.HideBannerAd(), this.uiAD.Clear(), this.uiHtTop.RemoveUI(), this.RemoveUI(), this.isPause && GTime.Pause()
    }, t.prototype.VideoReward = function() {
        var e = this;
        7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp() && MainData.GetRefreshData("toutiao_buyDiamondCount") < 4 ? ADSDK.TouTiaoRecorderShare(function() {
            MainData.AddRefreshDataValue("toutiao_buyDiamondCount", 1), platform.TaTrack("assist_action", {
                assistaction_type: 13
            }), MainData.role.star += e.sd.starNum + Math.max(MainData.role.lv - 5, 0), platform.TaTrack("gem_use_or_gain", {
                useOrGain: 1,
                gemNum: e.sd.starNum + Math.max(MainData.role.lv - 5, 0),
                gemtype: 9,
                gemdetails: -1
            }), e.buyCount++, MainData.AddRefreshDataValue("BuyDiamond_Count", 1), e.buyCount >= e.sd.count && (MainData.SetRefreshData("BuyDiamond_Count", 0), MainData.AddRefreshDataValue("BuyDiamond_Lv", 1)), UIPopDialog.ShowOKOnly("获得" + (e.sd.starNum + Math.max(MainData.role.lv - 5, 0)) + "钻石", "Stars_png", function() {}, e, !1, !0), e.UpdateView(), MainData.gbattle.ui.UpdateUI()
        }, this) : MYAD.Video_UIBuyDiamond(function() {
            MainData.AddRefreshDataValue("toutiao_buyDiamondCount", 1), platform.TaTrack("assist_action", {
                assistaction_type: 13
            }), MainData.role.star += e.sd.starNum + Math.max(MainData.role.lv - 5, 0), platform.TaTrack("gem_use_or_gain", {
                useOrGain: 1,
                gemNum: e.sd.starNum + Math.max(MainData.role.lv - 5, 0),
                gemtype: 9,
                gemdetails: -1
            }), e.buyCount++, MainData.AddRefreshDataValue("BuyDiamond_Count", 1), e.buyCount >= e.sd.count && (MainData.SetRefreshData("BuyDiamond_Count", 0), MainData.AddRefreshDataValue("BuyDiamond_Lv", 1)), UIPopDialog.ShowOKOnly("获得" + (e.sd.starNum + Math.max(MainData.role.lv - 5, 0)) + "钻石", "Stars_png", function() {}, e, !1, !0), e.UpdateView(), MainData.gbattle.ui.UpdateUI()
        }, null, this)
    }, t
}(UIBase);
__reflect(UIBuyDiamond.prototype, "UIBuyDiamond");
var UIAlert = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._desc = "", t._img = "", t._num = 0, t._onOk = null, t.isPause = !1, t
    }
    return __extends(t, e), t.Show = function(e, a, n, i) {
        var o = new t;
        o._desc = e, o._img = a, o._num = n, o._onOk = i, t.instance = o, o.isPause = GTime._pause, o.AddUI()
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.desc.text = t._desc, t.img.source = t._img, 0 == t._num ? t.num.text = "" : t._num > 1e4 ? (t._num = Math.floor(t._num), t.num.text = "x" + GUtil.BigNumber(t._num)) : (t._num = Math.floor(t._num), t.num.text = "x" + t._num.toString()), t.BandTap(t.btnOK, t.OnClickOK), t.anim1.play(0), t.validateNow(), setTimeout(function() {
            GEffect.Eff_Sign("eff_2", t.effectPos.x - 100, t.effectPos.y - 90, 3)
        }, 1200)
    }, t.prototype.OnClickOK = function() {
        var e = this;
        e.CloseUI(), e._onOk && e._onOk()
    }, t.prototype.CloseUI = function() {
        var e = this;
        e.RemoveUI(), this.isPause && GTime.Pause()
    }, t.instance = null, t
}(UIBase);
__reflect(UIAlert.prototype, "UIAlert");
var UIPopDialog = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.isShowBanner = !1, t._showHt = !1, t._istext = !1, t._onOK = null, t._onCANCEL = null, t._thisObj = null, t.vOK = !1, t.vCANCEL = !1, t.vOKCenter = !1, t._text = null, t._image = null, t
    }
    return __extends(t, e), t.ShowOKOnly = function(e, a, n, i, o, r) {
        void 0 === o && (o = !1), void 0 === r && (r = !1);
        var s = new t;
        s._onOK = n, s._onCANCEL = null, s._thisObj = i, s._text = e, s.vOK = !1, s.vCANCEL = !1, s.vOKCenter = !0, s._image = a, s._istext = o, s.isShowBanner = r, s.AddUI()
    }, t.ShowOKCANCEL = function(e, a, n, i, o, r, s) {
        void 0 === r && (r = !1), void 0 === s && (s = !1);
        var l = new t;
        l._onOK = n, l._onCANCEL = i, l._thisObj = o, l._text = e, l._image = a, l.vOK = !0, l.vCANCEL = !0, l.vOKCenter = !1, l._istext = r, l.isShowBanner = s, l.AddUI()
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        if (t.BandTap(t.btnOK, t.DoOK), t.BandTap(t.btnOKCenter, t.DoOK), t.BandTap(t.btnCANCEL, t.DoCANCEL), t.btnOK.visible = t.vOK, t.btnCANCEL.visible = t.vCANCEL, t.btnOKCenter.visible = t.vOKCenter, t.lText.visible = !t._istext, t.lText1.visible = t._istext, t._istext ? t.lText1.text = t._text : t.lText.text = t._text, "fail_png" == t._image ? t.IImage.source = MainData.imgSheet.getTexture("fail_png") : t.IImage.source = t._image, "Treasure chest_png" == t._image && t.visable.play(1), 3 == GameChannel && ADSDK.ShowBannerAd(1), t.uiBanner.visible = !1, t.isShowBanner) switch (GameChannel) {
            case 2:
                0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1);
                break;
            case 4:
                0 == ADSDK.kds.getBlack() || 1 == ADSDK.kds.getBlack() ? ADSDK.ShowBannerAd(1) : (ADSDK.uiBannerAD = t.uiBanner, ADSDK.ShowNative(1, ADSDK.bannerChangeNative_id1, ADSDK.BannerChangeNative))
        }
    }, t.prototype.CloseUI = function() {
        this.uiBanner.Clear(), ADSDK.HideBannerAd(), this.RemoveUI()
    }, t.prototype.DoOK = function() {
        this._onOK && this._onOK.call(this._thisObj), this.CloseUI()
    }, t.prototype.DoCANCEL = function() {
        this._onCANCEL && this._onCANCEL.call(this._thisObj), this.CloseUI()
    }, t
}(UIBase);
__reflect(UIPopDialog.prototype, "UIPopDialog");
var UIPopTips = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.ShowTips = function(e) {
        var a = new t;
        return a.tips = e, a.AddTopUI(), a
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.validateNow(), t.lTips.text = t.tips, t.gTips.y = t.height / 2, t.gTips.alpha = 0;
        var a = t.gTips.y - 50,
            n = t.gTips.y - 100,
            i = egret.Tween.get(t.gTips);
        i.to({
            y: a,
            alpha: 1
        }, 200).to({
            alpha: .99
        }, 1e3).to({
            y: n,
            alpha: 0
        }, 200).call(function() {
            t.RemoveUI()
        }, t)
    }, t
}(UIBase);
__reflect(UIPopTips.prototype, "UIPopTips");
var UISellPopDialog = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.tank = null, t.onSucc = null, t.onFail = null, t.thisObj = null, t.srcParent = null, t
    }
    return __extends(t, e), t.Show = function(e, a, n, i) {
        var o = new t;
        return o.tank = e, o.onSucc = a, o.onFail = n, o.thisObj = i, o.AddUI(), o
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.BandTap(t.btnOK, t.OnOK), t.BandTap(t.btnCANCEL, t.OnCANCEL), t.srcParent = t.tank.parent, t.srcParent.removeChild(t.tank), t.srcX = t.tank.x, t.srcY = t.tank.y, t.gView.addChild(t.tank), t.tank.x = 0, t.tank.y = 0, t.moneyNum.text = GUtil.BigNumber(t.tank.sd.price), t.uiBanner.visible = !1, GameChannel) {
            case 2:
                switch (0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1), ADSDK.kds.getBlack()) {
                    case 0:
                        ADSDK.ShowNative(5, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 1:
                        ADSDK.ShowNative(5, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 2:
                        ADSDK.ShowNative(5, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 3:
                        setTimeout(function() {
                            ADSDK.ShowNative(5, ADSDK.native_id, ADSDK.NativeOnload)
                        }, 1e3)
                }
                break;
            case 4:
                0 == ADSDK.kds.getBlack() && 1 == ADSDK.kds.getBlack() ? ADSDK.ShowBannerAd(1) : (ADSDK.uiBannerAD = t.uiBanner, ADSDK.ShowNative(1, ADSDK.bannerChangeNative_id1, ADSDK.BannerChangeNative));
                break;
            case 9:
                ADSDK.ShowBannerAd(1)
        }
    }, t.prototype.ClearFunc = function() {
        this.onSucc = null, this.onFail = null, this.thisObj = null
    }, t.prototype.OnOK = function() {
        var e = this.onSucc,
            t = this.thisObj;
        this.CloseUI(), e && e.call(t)
    }, t.prototype.OnCANCEL = function() {
        var e = this.onFail,
            t = this.thisObj;
        this.CloseUI(), e && e.call(t)
    }, t.prototype.CloseUI = function() {
        ADSDK.HideBannerAd(), this.uiBanner.Clear(), this.gView.removeChild(this.tank), this.srcParent.addChild(this.tank), this.tank.x = this.srcX, this.tank.y = this.srcY, this.tank = null, this.ClearFunc(), this.RemoveUI()
    }, t
}(UIBase);
__reflect(UISellPopDialog.prototype, "UISellPopDialog");
var UISliderHP = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t.prototype.SetRate = function(e) {
        this.imgHP.width = (this.imgHPMax.width - 4) * e
    }, t.prototype.RemoveUI = function() {
        null != this.parent && this.parent.removeChild(this)
    }, t
}(eui.Component);
__reflect(UISliderHP.prototype, "UISliderHP", ["eui.UIComponent", "egret.DisplayObject"]);
var UIText = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._prevText = null, t._text = "", t._prevStyle = null, t._style = "", t._prevAlign = null, t._textAlign = "", t._init = !1, t.unusedImgs = [], t.usedImgs = [], t
    }
    return __extends(t, e), Object.defineProperty(t.prototype, "text", {
        get: function() {
            return this._text
        },
        set: function(e) {
            this._text = e, this.UpdateView()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "style", {
        get: function() {
            return this._style
        },
        set: function(e) {
            this._style = e, this.UpdateView()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "textAlign", {
        get: function() {
            return this._textAlign
        },
        set: function(e) {
            this._textAlign = e, this.UpdateView()
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.validateNow(), t.text = t.labelDisplay.text, t.labelDisplay.parent.removeChild(t.labelDisplay), t._init = !0, t.UpdateView()
    }, t.prototype.GetImg = function() {
        var e = this,
            t = null;
        return t = e.unusedImgs.length > 0 ? e.unusedImgs.pop() : new eui.Image, e.gView.addChild(t), e.usedImgs.push(t), t
    }, t.prototype.FreeImg = function(e) {
        var t = this;
        t.gView.removeChild(e), t.unusedImgs.push(e)
    }, t.prototype.UpdateView = function() {
        var e = this;
        if (e._init) {
            if (e._prevText != e._text || e._prevStyle != e._style) {
                e._prevText = e._text, e._prevStyle = e.style;
                for (var t = 0, a = 0; a < e._text.length; a++) {
                    var n = e._text.charAt(a),
                        i = null;
                    i = a < e.usedImgs.length ? e.usedImgs[a] : e.GetImg(), "." == n ? i.source = "nDot" + e.style + "_png" : ":" == n ? i.source = "doubleDot" + e.style + "_png" : i.source = n + e.style + "_png", i.left = t, i.top = 0, t += i.width
                }
                for (var o = e.usedImgs.length - e._text.length, a = 0; o > a; a++) {
                    var r = e.usedImgs.pop();
                    e.FreeImg(r)
                }
            }
            if (e._prevAlign != e._textAlign) {
                e._prevAlign = e._textAlign;
                var s = new eui.HorizontalLayout;
                s.horizontalAlign = e._prevAlign, e.gView.layout = s
            }
        }
    }, t
}(eui.Component);
__reflect(UIText.prototype, "UIText", ["eui.UIComponent", "egret.DisplayObject"]);
var UIToggle = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.iconSource = "", t
    }
    return __extends(t, e), Object.defineProperty(t.prototype, "label", {
        get: function() {
            return this._label
        },
        set: function(e) {
            this._label = e
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.labelDisplay.text = t.label, t.BandTap(t, function() {
            t.imgChecked.visible = !t.imgChecked.visible, UIFlyBoxReward.instance.btnVideo.skinName = t.imgChecked.visible ? "BtnNewVideo" : "BtnBuleStar", UIFlyBoxReward.instance.btnVideo.labelDisplay.text = t.imgChecked.visible ? "免费开启" : "钻石开启"
        }, !0)
    }, t.prototype.IsOn = function() {
        return this.imgChecked.visible
    }, t
}(UIBase);
__reflect(UIToggle.prototype, "UIToggle");
var DownloadURL = "https://pvzcdn.kbb805.com/single/PVZ/V1/",
    DownloadVer = "ver_012",
    UIDownload = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.resPngDLList = null, t.resJsonDLList = null, t.pngList = null, t.jsonList = null, t
        }
        return __extends(t, e), t.Show = function() {
            var e = new t;
            e.AddUI(), e.lp.text = "", t.instance = e
        }, t.Hide = function() {
            null != t.instance && null != t.instance.parent && (t.instance.parent.removeChild(t.instance), t.instance = null), t.unzipQueue = null
        }, t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        }, t.DownLoadAllRes = function(e, a) {
            return __awaiter(this, void 0, void 0, function() {
                var n, i, o, r, s, l, s, l, s, l;
                return __generator(this, function(d) {
                    switch (d.label) {
                        case 0:
                            if (t.Show(), t.instance.InitPrevLoad(), n = t.instance, console.log("检查资源更新"), MainData.role.downloadVer == DownloadVer) return [3, 8];
                            console.log("资源已经更新，需要重新下载"), MainData.role.downloadVer = DownloadVer, MainData.SaveGame(), i = 0, d.label = 1;
                        case 1:
                            return i < n.pngList.length ? [4, platform.DeleteFile(n.pngList[i])] : [3, 4];
                        case 2:
                            d.sent(), d.label = 3;
                        case 3:
                            return i++, [3, 1];
                        case 4:
                            o = 0, d.label = 5;
                        case 5:
                            return o < n.jsonList.length ? [4, platform.DeleteFile(n.jsonList[o])] : [3, 8];
                        case 6:
                            d.sent(), d.label = 7;
                        case 7:
                            return o++, [3, 5];
                        case 8:
                            r = 0, d.label = 9;
                        case 9:
                            return r < n.pngList.length ? (n.lp.text = "检查" + n.pngList[r], n.lp.text = Math.floor(100 * r / n.pngList.length) + "%", t.instance.imgProgress.width = 390 * r / n.pngList.length, [4, n.PrevLoadPNG(n.pngList[r])]) : [3, 12];
                        case 10:
                            d.sent(), d.label = 11;
                        case 11:
                            return r++, [3, 9];
                        case 12:
                            s = 0, d.label = 13;
                        case 13:
                            return s < n.jsonList.length ? (l = n.jsonList[s], n.lp.text = "检查" + l, [4, n.PrevLoadJSON(l)]) : [3, 16];
                        case 14:
                            d.sent(), d.label = 15;
                        case 15:
                            return s++, [3, 13];
                        case 16:
                            if (!(n.resPngDLList.length > 0)) return [3, 20];
                            s = 0, d.label = 17;
                        case 17:
                            return s < n.resPngDLList.length ? (l = n.resPngDLList[s], n.lp.text = "下载 " + l, [4, n.DownloadResZip(l, !0)]) : [3, 20];
                        case 18:
                            d.sent(), d.label = 19;
                        case 19:
                            return s++, [3, 17];
                        case 20:
                            if (!(n.resJsonDLList.length > 0)) return [3, 24];
                            s = 0, d.label = 21;
                        case 21:
                            return s < n.resJsonDLList.length ? (l = n.resJsonDLList[s], n.lp.text = "下载 " + l, [4, n.DownloadResZip(l, !1)]) : [3, 24];
                        case 22:
                            d.sent(), d.label = 23;
                        case 23:
                            return s++, [3, 21];
                        case 24:
                            return t.Hide(), console.log("资源检查完毕"), e.call(a), [2]
                    }
                })
            })
        }, t.prototype.InitPrevLoad = function() {
            var e = this;
            e.resPngDLList = [], e.resJsonDLList = [], e.pngList = [], e.jsonList = [];
            var a = t.resDictPng,
                n = t.resDictJson;
            for (var i in a) i.toLowerCase().indexOf(".png") > 0 && e.pngList.push(i);
            for (var o in n) o.toLowerCase().indexOf(".json") > 0 && e.jsonList.push(o)
        }, t.prototype.PrevLoadPNG = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var a;
                return __generator(this, function(n) {
                    return a = this, [2, new Promise(function(n, i) {
                        platform.LoadPNGFile(e, function(i) {
                            if (i) t._CachePNG(e, i);
                            else {
                                var o = "res1.zip";
                                a.AddDownloadRES(o, !0)
                            }
                            n()
                        }, a)
                    })]
                })
            })
        }, t.prototype.PrevLoadJSON = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var a;
                return __generator(this, function(n) {
                    return a = this, [2, new Promise(function(n, i) {
                        var o = platform.LoadTXTFile(e);
                        if (null != o && o.length > 0) a._CacheJson(e, o);
                        else {
                            var r = t.resDictJson[e];
                            a.AddDownloadRES(r, !1)
                        }
                        n()
                    })]
                })
            })
        }, t._CachePNG = function(e, t) {
            var a = e.replace(".png", "_png"),
                n = new egret.Texture;
            n.bitmapData = t;
            var i = {
                name: a,
                root: "",
                type: RES.ResourceItem.TYPE_IMAGE,
                url: DownloadURL + e
            };
            RES.ResourceConfig.prototype.addResourceData(i);
            var o = RES;
            o.host.save(i, n)
        }, t.prototype._CacheJson = function(e, a) {
            var n = e.replace(".json", "_json"),
                i = t.JSON2SHEET(a);
            if (null != i) {
                var o = {
                    name: n,
                    root: "",
                    type: RES.ResourceItem.TYPE_SHEET,
                    url: DownloadURL + e
                };
                RES.ResourceConfig.prototype.addResourceData(o);
                var r = RES;
                r.host.save(o, i)
            }
        }, t.JSON2SHEET = function(e) {
            var t = JSON.parse(e),
                a = null;
            try {
                a = t.file
            } catch (n) {}
            if (void 0 != a && null != a) {
                var i = a.replace(".png", "_png"),
                    o = RES.getRes(i);
                if (null == o) return null;
                var r = {
                        name: i,
                        url: a,
                        type: "image",
                        root: ""
                    },
                    s = t.frames,
                    l = new egret.SpriteSheet(o);
                l.$resourceInfo = r;
                for (var d in s) {
                    var u = s[d];
                    "b" == a.charAt(0) && "g" == a.charAt(1) && (u.x += 1, u.w -= 2, u.sourceW -= 2);
                    var c = l.createTexture(d, u.x, u.y, u.w, u.h, u.offX, u.offY, u.sourceW, u.sourceH);
                    if (u.scale9grid) {
                        var h = u.scale9grid,
                            p = h.split(",");
                        c.scale9Grid = new egret.Rectangle(parseInt(p[0]), parseInt(p[1]), parseInt(p[2]), parseInt(p[3]))
                    }
                }
                return l
            }
        }, t.prototype.AddDownloadRES = function(e, t) {
            var a = this;
            if (t) {
                for (var n = 0; n < a.resPngDLList.length; n++)
                    if (a.resPngDLList[n] == e) return;
                a.resPngDLList.push(e)
            } else {
                for (var n = 0; n < a.resJsonDLList.length; n++)
                    if (a.resJsonDLList[n] == e) return;
                a.resJsonDLList.push(e)
            }
        }, t.prototype.DownloadResZip = function(e, a) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(n) {
                    return [2, new Promise(function(n, i) {
                        console.log("开始下载 " + e), t.StartDown(n, e, a)
                    })]
                })
            })
        }, t.StartDown = function(e, a, n) {
            t.instance.imgProgress.width = 0, t.StartLoaderTime(), egret.ImageLoader.crossOrigin = "anonymous";
            var i = DownloadURL + a,
                o = new egret.HttpRequest;
            o.responseType = egret.HttpResponseType.ARRAY_BUFFER, o.open(i, egret.HttpMethod.GET), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send(), o.once(egret.Event.COMPLETE, function(i) {
                var o = i.currentTarget;
                t.instance.lp.text = "保存到本地", console.log("下载" + a + "完成, 保存到本地。"), t.loadTimer && t.loadTimer.stop(), t.instance.imgProgress.width = 390;
                var r = o.response;
                o = null, t.UnzipFiles(r, function() {
                    r = null, e()
                }, n)
            }, null), o.once(egret.IOErrorEvent.IO_ERROR, function(o) {
                console.log("加载失败 " + i), setTimeout(function() {
                    t.StartDown(e, a, n)
                }, 200)
            }, null)
        }, t.StartLoaderTime = function() {
            t.loadTimer || (t.loadTimer = new egret.Timer(100, 0), t.loadTimer.addEventListener(egret.TimerEvent.TIMER, this.TimerFunc, this)), t.loadTimer.start()
        }, t.TimerFunc = function() {
            t.instance.imgProgress.width < 350 && (t.instance.imgProgress.width += 30), console.log(t.instance.imgProgress.width)
        }, t.UnzipFiles = function(e, a, n) {
            console.log("解压缩"), JSZip.loadAsync(e).then(function(e) {
                t.unzipQueue = [];
                var i = e.files;
                for (var o in i) t.unzipQueue.push(o);
                n ? t._UnzipPngs(i, 0, a) : t._UnzipJsons(i, 0, a)
            })
        }, t._UnzipPngs = function(e, a, n) {
            if (a >= t.unzipQueue.length) return void n();
            var i = t.unzipQueue[a];
            a > 0 && (t.instance.lp.text = Math.floor(100 * a / t.unzipQueue.length) + "%", t.instance.imgProgress.width = 392 * a / t.unzipQueue.length), i.indexOf(".png") < 0 ? t._UnzipPngs(e, a + 1, n) : e[i].async("arraybuffer").then(function(o) {
                t.SavePNG_LoadPNG(i, o, e, a, n)
            })
        }, t.SavePNG_LoadPNG = function(e, a, n, i, o) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(r) {
                    return platform.SaveBASE64File(e, a), t.LoadPNGTimes(3, 100, e, n, i, o), [2]
                })
            })
        }, t.LoadPNGTimes = function(e, a, n, i, o, r) {
            platform.LoadPNGFile(n, function(a) {
                a ? (t._CachePNG(n, a), t._UnzipPngs(i, o + 1, r)) : (console.log("[Fail LoadPNG] Retry " + e), t._UnzipPngs(i, o + 1, r))
            }, null)
        }, t._UnzipJsons = function(e, a, n) {
            if (a >= t.unzipQueue.length) return void n();
            var i = t.unzipQueue[a];
            t.instance.lp.text = "解压缩 " + i, a > 0 && (t.instance.lp.text = Math.floor(100 * a / t.unzipQueue.length) + "%", t.instance.imgProgress.width = 392 * a / t.unzipQueue.length), i.indexOf(".json") < 0 ? t._UnzipJsons(e, a + 1, n) : e[i].async("text").then(function(o) {
                t.instance._CacheJson(i, o), platform.SaveTXTFile(i, o), t._UnzipJsons(e, a + 1, n)
            })
        }, t.instance = null, t.resDictPng = {
            "t1.png": "res1.zip",
            "t2.png": "res1.zip",
            "t3.png": "res1.zip",
            "disk.png": "res1.zip",
            "imgs.png": "res1.zip",
            "lower.png": "res1.zip",
            "Middle.png": "res1.zip",
            "bg_js.png": "res1.zip",
            "t4.png": "res1.zip"
        }, t.resDictJson = {
            "imgs.json": "res2.zip"
        }, t.loadTimer = null, t.unzipQueue = null, t
    }(UIBase);
__reflect(UIDownload.prototype, "UIDownload");
var UIDungeon_Cell = function(e) {
    function t(t, a) {
        var n = e.call(this) || this;
        return n.sd = t, n.owner = a, n
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        MainData.role.currentDungeonId <= 0 && (MainData.role.currentDungeonId = 1), t.imgClear.visible = MainData.role.currentDungeonId > t.sd.lvId, t.imgLock.visible = MainData.role.currentDungeonId < t.sd.lvId, MainData.role.currentDungeonId >= t.sd.lvId && t.BandTap(t, t.OnClick), t.lLv.visible = !t.imgClear.visible && !t.imgLock.visible, t.lLv.visible && (t.lLv.text = t.sd.lvId + "")
    }, t.prototype.CloseUI = function() {
        this.sd = null, this.owner = null, this.RemoveUI()
    }, t.prototype.OnClick = function() {
        var e = this,
            t = this;
        7 != GameChannel && MainData.role.currentDungeonId == t.sd.lvId ? 10 == GameChannel && platform.H5_4399_IsShowVideo() ? UIEnterDungeon.Show("Thách đấu với trùm Boss?", function() {
            e.owner.EnterDungeon(e.sd)
        }, t) : 10 != GameChannel && UIEnterDungeon.Show("Thách đấu với trùm Boss?", function() {
            e.owner.EnterDungeon(e.sd)
        }, t) : this.owner.EnterDungeon(this.sd)
    }, t
}(UIBase);
__reflect(UIDungeon_Cell.prototype, "UIDungeon_Cell");
var UIDungeon = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.cells = [], t.count = 10, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.LockTime(), e.AddUI(), e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        if (7 == GameChannel) {
            t.lCount.visible = !0, t.desc.visible = !0, t.count = MainData.GetDungeonCountToday();
            var a = MainData.GameValue(25);
            t.lCount.text = t.count + "/" + a
        }
        for (var n = 1; 1e4 > n; n++) {
            var i = MainData.allSeeds.dungeons[n];
            if (!i) break;
            var o = new UIDungeon_Cell(i, t);
            t.gCells.addChild(o), t.cells.push(o)
        }
        switch (t.BandTap(t.btnBack, t.CloseUI), GameChannel) {
            case 2:
                switch (ADSDK.kds.getBlack()) {
                    case 0:
                        ADSDK.ShowNative(3, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 1:
                        ADSDK.ShowNative(3, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 2:
                        ADSDK.ShowNative(3, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 3:
                        setTimeout(function() {
                            ADSDK.ShowNative(3, ADSDK.native_id, ADSDK.NativeOnload)
                        }, 1e3)
                }
                break;
            case 4:
                ADSDK.uiADTop = t.uiAD, ADSDK.ShowNative(8, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 6:
        }
    }, t.prototype.EnterDungeon = function(e) {
        var t = this;
        MainData.gbattle.ui.buyAnim.stop(), this.dsd = e, 7 != GameChannel ? this._EnterDungeon() : this.count > 0 ? (MainData.AddRefreshDataValue("dungeon_dayCount", 1), this._EnterDungeon()) : (UIPopDialog.ShowOKCANCEL("免费次数不足,是否观看激励视频广告进行挑战?", "adChallenge_png", function() {
            MYAD.Video_UIDungeon(function() {
                platform.TaTrack("assist_action", {
                    assistaction_type: 14
                }), t._EnterDungeon()
            }, function() {
                UIPopTips.ShowTips("暂时没有广告")
            }, t), ADSDK.HideBannerAd()
        }, function() {
            ADSDK.HideBannerAd()
        }, this), ADSDK.ShowBannerAd(1))
    }, t.prototype._EnterDungeon = function() {
        var e = this;
        GAudio.PauseBGM(), 7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp() && (MainData.gbattle.ui.toutiaoIsRecording && (platform.ToutiaoStopRecord(), MainData.gbattle.ui.btnToutiaoShare.visible = !1, MainData.gbattle.ui.lToutiaoShare.visible = !1), platform.ClearVideo(), platform.ToutiaoStartRecord(null, null), platform.IsDebugMode() || window.tt.showToast({
            title: "开始录制",
            icon: "none",
            duration: 2e3,
            success: function(e) {},
            fail: function(e) {}
        })), GUtil.BlackMark_InOut(function() {
            MainData.gbattle.pause = !0, MainData.gbattle.RemoveUI(), GameView.instance.StartDungeon(e.dsd), e.CloseUI()
        }, function() {}, this, 500, 500)
    }, t.prototype.CloseUI = function() {
        this.uiAD.Clear();
        for (var e = 0; e < this.cells.length; e++) this.cells[e].CloseUI();
        this.cells = null, this.RemoveUI()
    }, t
}(UIBase);
__reflect(UIDungeon.prototype, "UIDungeon");
var UIDungeonBattle = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.gb = null, t.sd = null, t
    }
    return __extends(t, e), t.prototype.Init = function(e, t) {
        switch (this.gb = e, this.sd = t, this.lLv && (this.lLv.text = this.sd.lvId + ""), GameChannel) {
            case 2:
            case 4:
                ADSDK.ShowNative(9, ADSDK.bannerChangeNative_id, ADSDK.Native_1)
        }
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.imgUp.source = MainData.imgSheet.getTexture("up_png"), null != t.sd && (t.lLv.text = t.sd.lvId + ""), t.BandTap(t.btnBack, t.ExitDungeon)
    }, t.prototype.UpdateUI = function(e) {
        for (var t = this, a = 0, n = 0, i = 0; i < e.bossList.length; i++) a += Math.max(0, e.bossList[i].gd.hp), n += e.bossList[i].hpMax;
        a = Math.max(0, a), t.lHp.text = GUtil.BigNumber(a);
        var o = a / n;
        t.slider_281.width = 281 * o
    }, t.prototype.ExitDungeon = function() {
        UINative_1_Ad.instence && UINative_1_Ad.instence.RemoveUI(), 7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp() && (platform.ToutiaoStopRecord(), platform.ClearVideo()), GameView.instance.ResumeBattle_UIDungeon(null)
    }, t
}(UIBase);
__reflect(UIDungeonBattle.prototype, "UIDungeonBattle");
var UIDungeonReward = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.lv = 0, t.hasReward = !0, t.baseReward = 0, t
    }
    return __extends(t, e), t.Show = function(e, a) {
        var n = new t;
        return n.lv = e, n.hasReward = a, n.AddUI(), n
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.tVideo.visible = !1, t.BandTap(t.btnVideo, t.VideoOnClick), t.btnVideo.visible = !0, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.BandTap(t.btnOK, t.OKOnClick), t.hasReward ? (t.baseReward = 15, t.lMoney.text = "" + t.baseReward) : (t.baseReward = 0, t.lMoney.text = "0"), this.shake.play(0), GameChannel) {
            case 2:
                switch (0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1), ADSDK.kds.getBlack()) {
                    case 0:
                        ADSDK.ShowNative(2, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 1:
                        ADSDK.ShowNative(2, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 2:
                        ADSDK.ShowNative(2, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 3:
                        setTimeout(function() {
                            ADSDK.ShowNative(2, ADSDK.native_id, ADSDK.NativeOnload)
                        }, 1e3)
                }
                break;
            case 4:
                ADSDK.ShowNative(2, ADSDK.native_id, ADSDK.NativeOnload);
                break;
            case 3:
                if (0 == ADSDK.kds.getBlack() || 1 == ADSDK.kds.getBlack() || 2 == ADSDK.kds.getBlack()) ADSDK.ShowBannerAd(1);
                else {
                    var a = t.btnOK.bottom;
                    t.btnOK.bottom = -356, setTimeout(function() {
                        t.btnOK.bottom = a
                    }, 2e3), setTimeout(function() {
                        ADSDK.ShowBannerAd(1)
                    }, 1500)
                }
                break;
            case 7:
                switch (ADSDK.ShowBannerAd(1), ADSDK.kds.getBlack()) {
                    case 0:
                        break;
                    case 1:
                        ADSDK.ShowInterAd(2);
                        break;
                    case 2:
                        setTimeout(function() {
                            ADSDK.ShowInterAd(2)
                        }, 800);
                        break;
                    case 3:
                        setTimeout(function() {
                            ADSDK.ShowInterAd(2)
                        }, 1e3)
                }
                0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 5:
                ADSDK.ShowBannerAd(1), 0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 8:
                0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 9:
                ADSDK.ShowBannerAd(1);
            case 10:
                t.DelayBtnClose(2e3)
        }
        7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp() && (t.btnVideo.iconDisplay.source = "share_png", platform.ToutiaoStopRecord())
    }, t.prototype.OKOnClick = function() {
        this.GetReward(1)
    }, t.prototype.VideoOnClick = function() {
        var e = this;
        7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp() ? (platform.ToutiaoShare(function() {
            e.GetReward(3)
        }, this), platform.ClearVideo()) : MYAD.Video_UIDungeonReward(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 18
            }), e.GetReward(3)
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this)
    }, t.prototype.GetReward = function(e) {
        var t = this.baseReward * e;
        GameView.instance.mainBattle.ui.FlyStars(this.width / 2, this.height / 2 - 220, t), platform.TaTrack("gem_use_or_gain", {
            useOrGain: 1,
            gemNum: t,
            gemtype: 10,
            gemdetails: -1
        }), MainData.SaveGame(), this.CloseUI()
    }, t.prototype.CloseUI = function() {
        ADSDK.HideBannerAd(), 3 == GameChannel && 0 != ADSDK.kds.getBlack() && setTimeout(function() {
            ADSDK.HideBannerAd()
        }, 1500), GameView.instance.ResumeBattle_UIDungeon(this)
    }, t.prototype.DelayBtnClose = function(e) {
        var t = this;
        t.btnOK.visible = !1, setTimeout(function() {
            t.btnOK.visible = !0
        }, e)
    }, t
}(UIBase);
__reflect(UIDungeonReward.prototype, "UIDungeonReward");
var UIEnterDungeon = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.strDesc = "", t.zombie = null, t._thisObj = null, t._enterDungeon = null, t.isPause = !1, t
    }
    return __extends(t, e), t.Show = function(e, a, n) {
        var i = new t;
        return i.strDesc = e, i._enterDungeon = a, i._thisObj = n, i.isPause = GTime._pause, i.AddUI(), i.LockTime(), i
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t.btnClose, t.CloseUI), t.BandTap(t.btnVideo, t.VideoEnterDungeon), 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.desc.text = t.strDesc, t.BtnVideoAnim(), t.InitZombie(), 4 != GameChannel && t.DelayBtnClose()
    }, t.prototype.InitZombie = function() {
        var e = this;
        e.zombie = new GActor("Zombie17", "Zombies", 2, 2, !0), e.zombie.PlayAnim("move"), e.zombieView.addChild(e.zombie), e.zombie.verticalCenter = 80, e.zombie.horizontalCenter = 0
    }, t.prototype.VideoEnterDungeon = function() {
        var e = this;
        MYAD.Video_UIDungeon(function() {
            e.CloseUI(), e._enterDungeon && e._enterDungeon.call(e._thisObj)
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this)
    }, t.prototype.CloseUI = function() {
        var e = this;
        e.uiHtTop.RemoveUI(), e.zombie.OnDestroy(), e.RemoveUI(), this.isPause && GTime.Pause()
    }, t.prototype.BtnVideoAnim = function() {
        var e = this;
        e.btnVideo.visible && egret.Tween.get(e.btnVideo).to({
            scaleX: 1,
            scaleY: 1
        }, 400).call(function() {
            egret.Tween.get(e.btnVideo).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 400).call(function() {
                e.BtnVideoAnim()
            }, e)
        }, e)
    }, t.prototype.DelayBtnClose = function() {
        var e = this;
        e.btnClose.visible = !1, setTimeout(function() {
            e.btnClose.visible = !0
        }, 3e3)
    }, t
}(UIBase);
__reflect(UIEnterDungeon.prototype, "UIEnterDungeon");
var UIFlyBoxReward = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.mode = 0, t.videoMode = 0, t
    }
    return __extends(t, e), t.ShowBuffReward = function() {
        var e = new t;
        return e.mode = 0, e.AddUI(), t.instance = e, e
    }, t.ShowBoxReward = function() {
        var e = new t;
        return e.mode = 1, e.AddUI(), t.instance = e, e
    }, t.ShowSpdReward = function() {
        var e = new t;
        return e.mode = 2, e.AddUI(), t.instance = e, e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.buffImg1.source = MainData.imgSheet.getTexture("Sunillustration_png"), t.img.source = MainData.imgSheet.getTexture("prizeTitle_png"), t.buffImg.source = MainData.imgSheet.getTexture("light_png"), t.boxImg.source = MainData.imgSheet.getTexture("light_png"), t.buffReward.visible = 0 == t.mode, t.boxReward.visible = 1 == t.mode, t.spdReward.visible = 2 == t.mode, t.BandTap(t.btnVideo, t.VideoReward), t.toggle.visible = 4 != GameChannel && 2 != t.mode, t.toggle.labelDisplay.text = "Xem video nhận thưởng", t.btnFree.visible = 2 == t.mode && 0 == MainData.GetRefreshData("wxFlyBoxReward"), t.btnVideo.visible = !t.btnFree.visible, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.btnStar.visible = 4 == GameChannel, t.BandTap(t.btnStar, t.StarReward), t.BandTap(t.btnClose, t.CloseUI), t.BandTap(t.btnFree, t.WxUseFree);
        var a = MainData.GetAutoComposeCostStar(),
            n = t.btnStar.getChildAt(2);
        switch (n.text = a + "", GameChannel) {
            case 2:
            case 4:
                ADSDK.uiADTop = t.uiAD, ADSDK.ShowNative(8, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 3:
                ADSDK.ShowBannerAd(1);
                break;
            case 7:
                ADSDK.ShowBannerAd(1), 0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 5:
                ADSDK.ShowBannerAd(1), 0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 8:
                0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 9:
                ADSDK.ShowBannerAd(1);
            case 10:
                t.DelayBtnClose(2e3)
        }
        3 == GameChannel && (t.videoMode = GUtil.RandomRangeInt(0, 10), t.videoMode < 3 ? (t.toggle.labelDisplay.text = "分享好友后领取", t.btnVideo.iconDisplay.source = "sharepoint_png") : (t.toggle.labelDisplay.text = "Xem video nhận thưởng", t.btnVideo.iconDisplay.source = "video_png")), 7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp() && (t.toggle.labelDisplay.text = "录屏分享后领取", t.btnVideo.iconDisplay.source = "share_png"), 2 == GameChannel && (t.toggle.visible = !1)
    }, t.prototype.CloseUI = function() {
        ADSDK.HideBannerAd(), this.uiAD.Clear(), this.RemoveUI()
    }, t.prototype.VideoReward = function() {
        var e = this;
        if (this.toggle.IsOn() || 4 == GameChannel)
            if (7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp()) ADSDK.TouTiaoRecorderShare(function() {
                e.GetReward()
            }, this);
            else {
                var t = 1 == this.mode ? 17 : 18,
                    a = 1 == this.mode ? ADSDK.Video_ids.adPoint_17 : ADSDK.Video_ids.adPoint_18;
                MYAD.Video_UIFlyBoxVideo(t, function() {
                    1 == e.mode ? platform.TaTrack("assist_action", {
                        assistaction_type: 8
                    }) : 0 == e.mode && platform.TaTrack("assist_action", {
                        assistaction_type: 9
                    }), e.GetReward()
                }, function() {
                    UIPopTips.ShowTips("暂时没有广告")
                }, this, a), MYAD.aldyMysterious()
            }
        else this.StarReward()
    }, t.prototype.WxUseFree = function() {
        var e = this;
        ADSDK.Share(function() {
            MainData.SetRefreshData("wxFlyBoxReward", 1), e.GetReward()
        }, "Zombie Bay")
    }, t.prototype.StarReward = function() {
        var e = MainData.GetAutoComposeCostStar();
        MainData.role.star >= e ? (MainData.role.star -= e, platform.TaTrack("gem_use_or_gain", {
            useOrGain: 0,
            gemNum: e,
            gemtype: 4,
            gemdetails: -1
        }), this.GetReward()) : MainData.Alert_NotEnoughStar(), MYAD.aldyMysterious()
    }, t.prototype.GetReward = function() {
        switch (this.mode) {
            case 0:
                var e = MainData.GetCustomData("X5_Money_EndTick");
                e = Math.max(e, GUtil.SystemMillionSecond()), e += 1e3 * MainData.GameValue(23), MainData.SetCustomData("X5_Money_EndTick", e);
                break;
            case 1:
                MainData.gbattle._dropedBox = -1, MainData.gbattle.needDropBox += 6;
                break;
            case 2:
                this.SpdUp()
        }
        this.CloseUI()
    }, t.prototype.SpdUp = function() {
        var e = GUtil.SystemMillionSecond(),
            t = Math.max(e + 6e4, MainData.role.spdUpTick + 6e4),
            a = e + 1e3 * MainData.GameValue(2);
        MainData.role.spdUpTick = Math.min(t, a)
    }, t.prototype.DelayBtnClose = function(e) {
        var t = this;
        t.btnClose.visible = !1, setTimeout(function() {
            t.btnClose.visible = !0
        }, e)
    }, t
}(UIBase);
__reflect(UIFlyBoxReward.prototype, "UIFlyBoxReward");
var UIFreeOrBuyTank = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.tankLv = 0, t.moneyCost = 0, t.cost = 0, t
    }
    return __extends(t, e), t.Show = function(e) {
        var a = new t;
        return a.tankLv = e, a.AddUI(), a.LockTime(), a
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t.btnVideo, t.VideoBuy), 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.BandTap(t.btnStar, t.StarBuy), t.BandTap(t.btnClose, t.CloseUI), t.cost = MainData.allSeeds.tanks[t.tankLv].priceStars, t.moneyCost = MainData.GetTankCost(t.tankLv), t.lMoney.text = "x" + GUtil.BigNumber(t.moneyCost);
        var a = t.btnStar.getChildAt(2);
        switch (a.text = t.cost + "", t.validateNow(), t.uiBanner.visible = !1, GameChannel) {
            case 2:
                0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1);
                break;
            case 4:
                0 == ADSDK.kds.getBlack() || 1 == ADSDK.kds.getBlack() ? ADSDK.ShowBannerAd(1) : (ADSDK.uiBannerAD = t.uiBanner, ADSDK.ShowNative(1, ADSDK.bannerChangeNative_id1, ADSDK.BannerChangeNative));
                break;
            case 9:
                ADSDK.ShowBannerAd(1)
        }
    }, t.prototype.CloseUI = function() {
        var e = this;
        e.uiBanner.Clear(), e.uiHtTop.RemoveUI(), ADSDK.HideBannerAd(), e.RemoveUI()
    }, t.prototype.VideoBuy = function() {
        var e = this,
            t = MainData.GetVideoBuySunCount();
        5 - t > 0 ? (MainData.SetRefreshData("BuySunCount", t + 1), MYAD.Video_UIFreeBuyTank(function() {
            e.GetReward(2), e.CloseUI()
        }, null, e)) : UIPopTips.ShowTips("今日次数已用完")
    }, t.prototype.StarBuy = function() {
        var e = this;
        MainData.role.star >= e.cost ? (MainData.role.star -= e.cost, platform.TaTrack("gem_use_or_gain", {
            useOrGain: 0,
            gemNum: e.cost,
            gemtype: 21,
            gemdetails: -1
        }), e.GetReward(1), e.CloseUI()) : MainData.Alert_NotEnoughStar()
    }, t.prototype.GetReward = function(e) {
        var t = this,
            a = t.moneyCost * e;
        MainData.gbattle.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, a)
    }, t
}(UIBase);
__reflect(UIFreeOrBuyTank.prototype, "UIFreeOrBuyTank");
var UIFreeTankUp = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.tank0 = null, t.tank1 = null, t
    }
    return __extends(t, e), t.Show = function(e, a, n, i, o) {
        var r = new t;
        return r.onSucc = e, r.onFail = a, r.thisObj = n, r.clv = i, r.nextlv = o, r.AddUI(), r.LockTime(), r
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.BandTap(t.btnVideo, t.VideoBuy), t.btnVideo.visible = !0, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.BandTap(t.btnClose, t.CancelBuy), t.validateNow(), t.InitTank(), t.uiBanner.visible = !1, GameChannel) {
            case 2:
                0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1);
                break;
            case 6:
                4 != ADSDK.kds.getBlack() && 5 != ADSDK.kds.getBlack() && 6 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1);
                break;
            case 3:
                3 == ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1);
                break;
            case 7:
            case 5:
                ADSDK.ShowBannerAd(1);
                break;
            case 4:
                0 == ADSDK.kds.getBlack() || 1 == ADSDK.kds.getBlack() ? ADSDK.ShowBannerAd(1) : (ADSDK.uiBannerAD = t.uiBanner, ADSDK.ShowNative(1, ADSDK.bannerChangeNative_id1, ADSDK.BannerChangeNative));
                break;
            case 9:
                ADSDK.ShowBannerAd(1)
        }
    }, t.prototype.InitTank = function() {
        var e = this;
        e.tank0 = GTank.NewTankWithOutPool(e.clv), e.gTank0.addChild(e.tank0), e.tank1 = GTank.NewTankWithOutPool(e.nextlv), e.gTank1.addChild(e.tank1)
    }, t.prototype.CloseUI = function() {
        ADSDK.HideBannerAd(), this.uiBanner.Clear(), this.thisObj = null, this.onSucc = null, this.onFail = null, null != this.tank0 && this.tank0.Delete(), null != this.tank1 && this.tank1.Delete(), this.tank0 = null, this.tank1 = null, this.RemoveUI()
    }, t.prototype.CancelBuy = function() {
        var e = this.onFail,
            t = this.thisObj;
        this.CloseUI(), e && e.call(t)
    }, t.prototype.VideoBuy = function() {
        var e = this;
        MYAD.Video_UIFreeTankUp(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 15
            });
            var t = e.onSucc,
                a = e.thisObj;
            e.CloseUI(), t && t.call(a)
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this)
    }, t
}(UIBase);
__reflect(UIFreeTankUp.prototype, "UIFreeTankUp");
var HtsData = function() {
    function e() {
        this.app_id = null, this.name = null, this.image_url = null, this.path = null, this.image_id = null
    }
    return e.prototype.fromData = function(e) {
        var t = this;
        t.app_id = e.app_id, t.name = e.name, t.image_url = ADSDK.imghead + e.image_url, t.path = e.path, t.image_id = e.image_id
    }, e.allHtData = null, e
}();
__reflect(HtsData.prototype, "HtsData");
var UIHts_Top = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.imgs = null, t.labels = null, t.gs = null, t.htDatas = null, t._dt = 0, t.isPlay = !0, t.htPointName = "", t.htId = 0, t._skip = 0, t.dic = "left", t.seedHtData = null, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.visible = 4 == GameChannel, t.imgs = [t.img0, t.img1, t.img2, t.img3, t.img4, t.img5], t.labels = [t.l0, t.l1, t.l2, t.l3, t.l4, t.l5], t.gs = [t.g0, t.g1, t.g2, t.g3, t.g4, t.g5], t.htDatas = [null, null, null, null, null, null];
        for (var a = function(e) {
                t.BandTap(t.gs[e], function() {
                    t.OnClickIcon(e)
                })
            }, n = 0; n < t.imgs.length; n++) a(n);
        t.InitData(), t.UpdateView(0), t._dt = 0, t.UpdateTime()
    }, t.prototype.UpdateTime = function() {
        var e = this;
        e.visible && e.isPlay && ("left" == e.dic ? (e._skip += 1, !platform.IsDebugMode() && e._skip >= e.seedHtData.length && (e._skip -= e.seedHtData.length), e.anim.play(0), egret.Tween.get(e.gView).to({
            x: -240
        }, 1500).call(function() {
            e.gView.x = -120, e.UpdateView(e._skip), e.UpdateTime()
        }, e)) : "right" == e.dic && (e._skip -= 1, !platform.IsDebugMode() && e._skip < 0 && (e._skip += e.seedHtData.length), e.anim1.play(0), egret.Tween.get(e.gView).to({
            x: 0
        }, 1500).call(function() {
            e.gView.x = -120, e.UpdateView(e._skip), e.UpdateTime()
        }, e)))
    }, t.prototype.UpdateView = function(e) {
        var t = this;
        if (null != t.seedHtData)
            for (var a = t.seedHtData.length, n = 0; n < t.imgs.length; n++) {
                var i = (n + e) % a,
                    o = t.seedHtData[i];
                t.imgs[n].source = o.image_url, t.labels[n].text = o.name, t.htDatas[n] = o
            }
    }, t.prototype.OnClickIcon = function(e) {
        var t = this,
            a = t.htDatas[e];
        ADSDK.Hts_Jump(a, t.htId)
    }, t.prototype.RemoveUI = function() {
        this.isPlay = !1, e.prototype.RemoveUI.call(this)
    }, t.prototype.InitData = function() {
        var e = this;
        if (null != HtsData.allHtData && null != HtsData.allHtData[e.htId]) {
            e.seedHtData = [];
            for (var t = 0; t < HtsData.allHtData[e.htId].length; t++) {
                var a = new HtsData;
                a.fromData(HtsData.allHtData[e.htId][t]), e.seedHtData.push(a)
            }
        }
    }, t
}(UIBase);
__reflect(UIHts_Top.prototype, "UIHts_Top");
var UIHts = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.htData = null, t.htPointName = "", t.htId = 1, t._dt = 2, t.index = 0, t.seedHtData = null, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.visible = 4 == GameChannel || 5 == GameChannel, t.BandTap(t.icon, t.OnClick), t.InitData(), t.UpDateView(0), (4 == GameChannel || 5 == GameChannel) && GTime.startTick(t.UpdateTime, t, !0, !0), t.anim.play(0)
    }, t.prototype.OnClick = function() {
        var e = this;
        null != e.seedHtData && ADSDK.Hts_Jump(e.htData, e.htId)
    }, t.prototype.UpdateTime = function() {
        var e = this;
        e._dt -= GameFPS, e._dt <= 0 && (e._dt = 2, e.index++, !platform.IsDebugMode() && e.index >= e.seedHtData.length && (e.index -= e.seedHtData.length), e.UpDateView(e.index))
    }, t.prototype.UpdateOne = function() {
        var e = this;
        e.index++, !platform.IsDebugMode() && e.index >= e.seedHtData.length && (e.index -= e.seedHtData.length), e.UpDateView(e.index)
    }, t.prototype.UpDateView = function(e) {
        var t = this;
        if (null != t.seedHtData) {
            var a = t.seedHtData[e];
            t.icon.source = a.image_url, t.htData = a
        }
    }, t.prototype.RemoveUI = function() {
        (4 == GameChannel || 5 == GameChannel) && GTime.stopTick(this.UpdateTime, this), e.prototype.RemoveUI.call(this)
    }, t.prototype.InitData = function() {
        var e = this;
        if (null != HtsData.allHtData && null != HtsData.allHtData[e.htId]) {
            e.seedHtData = [];
            for (var t = 0; t < HtsData.allHtData[e.htId].length; t++) {
                var a = new HtsData;
                a.fromData(HtsData.allHtData[e.htId][t]), e.seedHtData.push(a)
            }
        }
    }, t
}(UIBase);
__reflect(UIHts.prototype, "UIHts");
var UILadder = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.ndc = null, t.odc = null, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.LockTime(), e.AddUI(), e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        if (t.visible = !1, MainData.UploadLv(), t.odc = platform.getODC(), t.odc) {
            var a = t.odc.createDisplayObject(null, t.width, t.height);
            t.gLadderView.addChild(a), t.odc.postMessage({
                command: "loadRes"
            }), t.odc.postMessage({
                command: "refreshLadder"
            })
        }
        t.BandTap(t.btnShare, function() {
            ADSDK.Share(function() {}, "排行榜")
        }), t.BandTap(t.btnLadderClose, function() {
            t.CloseUI(), t.odc && t.odc.postMessage({
                command: "close"
            })
        })
    }, t.prototype.CloseUI = function() {
        this.RemoveUI()
    }, t.prototype.UpDataView = function() {
        this.visible = !0, this.odc && (MainData.UploadLv(), this.odc.postMessage({
            command: "refreshLadder"
        }), this.odc.postMessage({
            isRanking: !0,
            text: "egret",
            year: (new Date).getFullYear(),
            command: "open"
        }))
    }, t
}(UIBase);
__reflect(UILadder.prototype, "UILadder");
var UILogin = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.onLoginEnd = null, t
    }
    return __extends(t, e), t.Show = function() {
        t.hasLoadedRes ? t.ShowView() : t.Login()
    }, t.prototype.LoginEnd = function() {
        var e = this;
        e.onLoginEnd && e.onLoginEnd()
    }, t.ShowView = function() {
        var e = new t;
        t.instance = e, e.AddUI()
    }, t.Login = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, a, n, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, platform.login()];
                    case 1:
                        return e = o.sent(), [4, platform.getLaunchOptions()];
                    case 2:
                        return a = o.sent(), MainData.InitServerConfig(), n = GameVer.replace(".", "").replace(".", ""), platform.IsDebugMode() ? t.ShowView() : 10 == GameChannel ? t.ShowView() : (i = "game=" + GameDomain.split(".")[1] + "&version=" + n + "&platform=" + GameDomain.split(".")[0] + "&game_id=" + GameDomain.split(".")[1] + "&sdk=" + GameDomain.split(".")[2], console.log("GSHttp.Send " + i), GSHttp.Send(GamePlatformServerURL, i, function(i) {
                            t.LoginGameServer(i, e, a, n)
                        }, function(e) {
                            t.LoginFail(), console.log("无法连接平台服务器")
                        }, null)), [2]
                }
            })
        })
    }, t.LoginGameServer = function(e, a, n, i) {
        var o = JSON.parse(e);
        if (console.log("GSHttp.Send PlatformServer Doc:"), console.log(o), 0 != o.code) t.Login();
        else {
            GameServerURL = o.pre_domain;
            var r = GameServerURL + "channel_login",
                s = "";
            switch (GameChannel) {
                case 2:
                    a.token && (s = a.token);
                    break;
                case 4:
                    a.token && (s = a.token);
                    break;
                case 5:
                    a.code && (s = a.code);
                    break;
                case 3:
                case 7:
                    a.code && (s = a.code);
                    break;
                case 8:
                    a.code && (s = a.code);
                    break;
                case 9:
                    s = qttPlatform + "|" + qttTicket
            }
            var l = "&token=" + s + "&cver=" + i + "&scene=" + n.scene + "&query=" + n.query + "&platform=" + GameDomain.split(".")[0] + "&game_id=" + GameDomain.split(".")[1] + "&sdk=" + GameDomain.split(".")[2];
            console.log("fServer:" + r), console.log("fParam:" + l), GSHttp.Send(r, l, function(e) {
                var a = JSON.parse(e);
                console.log(JSON.stringify(a)), GSHttp.uid = a.uid, GSHttp.token = a.token, MainData.openid = a.chan_user, MainData.isNewUser = a.x, MainData.playerStartTime = a.create_date, MainData.activity_51Tick = a.diff56Day, MainData.isActivityRange = a.In55, console.log("游戏服务器登陆成功"), platform.TaLogin(MainData.openid), 9 == GameChannel && platform.QTTReportData({
                    type: "login",
                    app_id: "a3VpBRNBrdrf",
                    open_id: MainData.openid,
                    game_name: "植物大战僵尸2守护"
                }), t.ShowView()
            }, function(o) {
                switch (GameChannel) {
                    case 2:
                        window.qg.showDialog({
                            title: "连接失败",
                            message: "游戏服务器连接异常，请重新连接...",
                            buttons: [{
                                text: "Mục đích",
                                color: "#33dd44"
                            }],
                            success: function(e) {
                                e.confirm && t.LoginGameServer(e, a, n, i)
                            }
                        });
                        break;
                    case 3:
                        window.qq.showModal({
                            title: "连接失败",
                            content: "游戏服务器连接异常，请重新连接...",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm && t.LoginGameServer(e, a, n, i)
                            }
                        });
                        break;
                    case 4:
                        window.qg.showModal({
                            title: "连接失败",
                            content: "游戏服务器连接异常，请重新连接...",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm && t.LoginGameServer(e, a, n, i)
                            }
                        });
                        break;
                    case 5:
                        window.swan.showModal({
                            title: "连接失败",
                            content: "游戏服务器连接异常，请重新连接...",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm && t.LoginGameServer(e, a, n, i)
                            }
                        });
                        break;
                    case 7:
                        window.tt.showModal({
                            title: "连接失败",
                            content: "游戏服务器连接异常，请重新连接...",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm && t.LoginGameServer(e, a, n, i)
                            }
                        });
                        break;
                    case 8:
                        window.uc.showModal({
                            title: "连接失败",
                            content: "游戏服务器连接异常，请重新连接...",
                            showCancel: !1,
                            success: function(o) {
                                o.confirm && (console.log("点击了确定"), t.LoginGameServer(e, a, n, i))
                            }
                        })
                }
                console.log("无法连接游戏服务器")
            })
        }
    }, t.LoginFail = function() {
        switch (GameChannel) {
            case 2:
                0 == t.loginCount ? (t.loginCount++, window.qg.showToast({
                    message: "连接超时，正在重新连接...",
                    duration: 0
                }), setTimeout(function() {
                    t.Login()
                }, 3e3)) : 1 == t.loginCount && (t.loginCount++, window.qg.showDialog({
                    title: "连接失败",
                    message: "网络连接异常，请检查网络...",
                    buttons: [{
                        text: "Mục đích",
                        color: "#33dd44"
                    }]
                }));
                break;
            case 3:
                0 == t.loginCount ? (t.loginCount++, window.qq.showToast({
                    title: "连接超时，正在重新连接...",
                    icon: "none",
                    duration: 3e3
                }), setTimeout(function() {
                    t.Login()
                }, 3e3)) : 1 == t.loginCount && (t.loginCount++, window.qq.showModal({
                    title: "连接失败",
                    content: "网络连接异常，请检查网络...",
                    showCancel: !1
                }));
                break;
            case 4:
                0 == t.loginCount ? (t.loginCount++, window.qg.showToast({
                    title: "连接超时，正在重新连接...",
                    icon: "none",
                    duration: 3e3
                }), setTimeout(function() {
                    t.Login()
                }, 3e3)) : 1 == t.loginCount && (t.loginCount++, window.qg.showModal({
                    title: "连接失败",
                    content: "网络连接异常，请检查网络...",
                    showCancel: !1
                }));
                break;
            case 5:
                0 == t.loginCount ? (t.loginCount++, window.swan.showToast({
                    title: "连接超时，正在重新连接...",
                    icon: "none",
                    duration: 3e3
                }), setTimeout(function() {
                    t.Login()
                }, 3e3)) : 1 == t.loginCount && (t.loginCount++, window.swan.showModal({
                    title: "连接失败",
                    content: "网络连接异常，请检查网络...",
                    showCancel: !1
                }));
                break;
            case 7:
                0 == t.loginCount ? (t.loginCount++, window.tt.showToast({
                    title: "连接超时，正在重新连接...",
                    icon: "none",
                    duration: 3e3
                }), setTimeout(function() {
                    t.Login()
                }, 3e3)) : 1 == t.loginCount && (t.loginCount++, window.tt.showModal({
                    title: "连接失败",
                    content: "网络连接异常，请检查网络...",
                    showCancel: !1
                }));
                break;
            case 8:
                0 == t.loginCount ? (t.loginCount++, console.log("第一次连接失败"), window.uc.showToast({
                    content: "连接超时，正在重新连接...",
                    duration: 3e3,
                    success: function() {
                        console.log("提示框显示成功")
                    },
                    fail: function() {
                        console.log("提示框显示失败")
                    }
                }), setTimeout(function() {
                    t.Login()
                }, 3e3)) : 1 == t.loginCount && (t.loginCount++, console.log("第二次连接失败"), window.uc.showModal({
                    title: "连接失败",
                    content: "网络连接异常，请检查网络...",
                    showCancel: !1
                }))
        }
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var a = this;
        t.hasLoadedRes ? a.LoginSucc() : setTimeout(function() {
            a.LoadGameData()
        }, 200)
    }, t.prototype.LoadGameData = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                return e = this, MainData.LoadGame(), MainData.LoadNetData(function() {
                    10 == GameChannel || 9 == GameChannel ? e.LoginSucc() : UIDownload.DownLoadAllRes(function() {
                        e.LoginSucc()
                    }, e)
                }, e), [2]
            })
        })
    }, t.prototype.LoginSucc = function() {
        var e = this;
        t.hasLoadedRes = !0, 9 == GameChannel && platform.QTTReportData({
            type: "load",
            app_id: "a3VpBRNBrdrf",
            open_id: MainData.openid,
            game_name: "植物大战僵尸2守护"
        }), MainData.imgSheet = RES.getRes("imgs_json"), GameView.instance.StartGame(), e.RemoveUI()
    }, t.instence = null, t.lOption = null, t.offLine = !1, t.instance = null, t.hasLoadedRes = !1, t.loginCount = 0, t
}(UIBase);
__reflect(UILogin.prototype, "UILogin");
var UILuckyBag = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        e.AddUI(), e.LockTime()
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t.btnVideo, t.OnBtnVideoClick), 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.BandTap(t.btnClose, t.CloseUI), t.btnVideoAnim.play(0)
    }, t.prototype.OnBtnVideoClick = function() {
        var e = this;
        MYAD.Video_UILuckyBagReward(function() {
            UIAlert.Show("恭喜获得6个植物", "prize1_png", 0, function() {
                e.CloseUI()
            }), MainData.SetCustomData("isGetLuckyBag", 1), MainData.gbattle._dropedBox = -1, MainData.gbattle.needDropBox += 6
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, e)
    }, t.prototype.CloseUI = function() {
        var e = this;
        e.btnVideoAnim.stop(), e.RemoveUI()
    }, t
}(UIBase);
__reflect(UILuckyBag.prototype, "UILuckyBag");
var UILuckyWheel = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.cost = 0, t.fcount = 0, t.numbewone = 0, t.datnum = 0, t.rewardId = 0, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.AddUI(), e.LockTime(), e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.img.source = MainData.imgSheet.getTexture("turntable Title_png"), t.BandTap(t.btnClose, t.CloseUI), t.BandTap(t.btnStar, t.StarBuy), t.BandTap(t.btnstarday, t.starbuy1), t.BandTap(t.btnVideo, t.VideoBuy), t.numbewone = 1, t.numbewone < 1 && (t.btnstarday.visible = !1), t.btnStar.visible = !1, this.btnstarday.visible = MainData.GetLuckWheelDay() > 0, this.btnVideo.visible = !this.btnstarday.visible, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo() && !this.btnstarday.visible), t.BtnVideoAnim(), t.UpdateView(), GameChannel) {
            case 2:
                0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1), ADSDK.uiADTop = t.uiAD, ADSDK.ShowNative(8, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 4:
                ADSDK.uiADTop = t.uiAD, ADSDK.ShowNative(8, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 5:
            case 7:
            case 6:
            case 9:
            case 3:
                ADSDK.ShowBannerAd(1)
        }
        if (3 == GameChannel) {
            var a = MainData.GetRefreshData("qqVideo_20");
            2 > a ? t.btnVideo.iconDisplay.source = "video_png" : t.btnVideo.iconDisplay.source = "sharepoint_png"
        }
        if (7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp()) {
            var n = MainData.GetLuckyWheelFreeCount() + MainData.GetLuckWheelDay();
            4 == n || 3 == n ? t.btnVideo.iconDisplay.source = "share_png" : t.btnVideo.iconDisplay.source = "video_png"
        }
    }, t.prototype.UpdateView = function() {
        if (3 == GameChannel) {
            var e = MainData.GetRefreshData("qqVideo_20");
            2 > e ? this.btnVideo.iconDisplay.source = "video_png" : this.btnVideo.iconDisplay.source = "sharepoint_png"
        }
        if (7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp()) {
            var t = MainData.GetLuckyWheelFreeCount() + MainData.GetLuckWheelDay();
            4 == t || 3 == t ? this.btnVideo.iconDisplay.source = "share_png" : this.btnVideo.iconDisplay.source = "video_png"
        }
        var a = MainData.GetRefreshData("luckywheel_starbuy_count");
        this.cost = Math.min(5 * (a + 1), 20);
        var n = this.btnStar.getChildAt(2);
        n.text = this.cost + "", this.fcount = MainData.GetLuckyWheelFreeCount() + MainData.GetLuckWheelDay(), this.lVCount.text = "Miễn phí " + this.fcount + "/" + (MainData.GameValue(17) + MainData.GameValue(28))
    }, t.prototype.CloseUI = function() {
        ADSDK.HideBannerAd(), this.uiAD.Clear(), this.RemoveUI()
    }, t.prototype.VideoBuy = function() {
        var e = this;
        this.fcount > 0 ? 7 != GameChannel || "douyin_lite" == platform.GetToutiaoApp() || 4 != this.fcount && 3 != this.fcount ? MYAD.Video_UILuckyWheel(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 11
            }), MainData.AddRefreshDataValue("luckywheel_videobuy_count", 1), e.BuySucc()
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this) : ADSDK.TouTiaoRecorderShare(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 11
            }), MainData.AddRefreshDataValue("luckywheel_videobuy_count", 1), e.BuySucc()
        }, this) : UIPopTips.ShowTips("今日次数已经用完")
    }, t.prototype.StarBuy = function() {
        MainData.role.star >= this.cost ? (MainData.role.star -= this.cost, platform.TaTrack("gem_use_or_gain", {
            useOrGain: 0,
            gemNum: this.cost,
            gemtype: 5,
            gemdetails: -1
        }), MainData.AddRefreshDataValue("luckywheel_starbuy_count", 1), this.BuySucc()) : MainData.Alert_NotEnoughStar(), MYAD.aldLuckyWheel()
    }, t.prototype.starbuy1 = function() {
        MainData.AddRefreshDataValue("LuckyWheel_buy_one", 1), this.numbewone = MainData.GetLuckWheelDay(), this.BuySucc(), MYAD.aldLuckyWheel()
    }, t.prototype.CalcReward = function() {
        var e = GUtil.RandomRangeInt(0, 100);
        20 > e ? this.rewardId = 0 : 25 > e ? this.rewardId = 1 : 40 > e ? this.rewardId = 2 : 75 > e ? this.rewardId = 3 : 90 > e ? this.rewardId = 4 : this.rewardId = 5
    }, t.prototype.BuySucc = function() {
        UIPause.instance && UIPause.instance.UpdateRedPoint(), this.btnStar.visible = !1, this.btnVideo.visible = !1, this.btnClose.visible = !1, this.numbewone = MainData.GetLuckWheelDay(), this.btnstarday.visible = MainData.GetLuckWheelDay() > 0, this.CalcReward(), this.PlayWheel1()
    }, t.prototype.PlayWheel1 = function() {
        var e = this;
        e.UpdateView();
        var t = 720,
            a = t / 1,
            n = e.arr.rotation % 360;
        t += -n;
        var i = t / a,
            o = egret.Tween.get(e.arr);
        o.to({
            rotation: t
        }, i, egret.Ease.quadIn).call(e.PlayWheel2, e)
    }, t.prototype.PlayWheel2 = function() {
        var e = this,
            t = egret.Tween.get(e.arr);
        t.to({
            rotation: 2880
        }, 2e3).call(e.PlayWheel3, e)
    }, t.prototype.PlayWheel3 = function() {
        var e = this,
            t = 720,
            a = t / 1;
        switch (e.rewardId) {
            case 5:
                t += 30;
                break;
            case 4:
                t += 90;
                break;
            case 3:
                t += 150;
                break;
            case 2:
                t += 210;
                break;
            case 1:
                t += 270;
                break;
            case 0:
                t += 330
        }
        var n = t / a * 1e3,
            i = egret.Tween.get(e.arr);
        i.to({
            rotation: t
        }, n, egret.Ease.quadOut).call(e.PlayWheelEnd, e)
    }, t.prototype.PlayWheelEnd = function() {
        var e = this,
            t = MainData.gbattle;
        switch (e.rewardId) {
            case 0:
                UIAlert.Show("Nhận kim cương", "prize6_png", 20, null), t.ui.FlyStars(this.width / 2, this.height / 2 - 220, 20), platform.TaTrack("gem_use_or_gain", {
                    useOrGain: 1,
                    gemNum: 20,
                    gemtype: 11,
                    gemdetails: -1
                });
                break;
            case 1:
                var a = MainData.allSeeds.playerRanks[MainData.role.maxPlayerRank],
                    n = 24,
                    i = n * a.offlineMoney;
                UIAlert.Show("Chúc mừng đã đạt mốc thưởng", "prize3_png", i, null), t.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, i);
                break;
            case 2:
                UIAlert.Show("恭喜获得五倍收益", "prize2_png", 0, null);
                var o = MainData.GetCustomData("X5_Money_EndTick");
                o = Math.max(o, GUtil.SystemMillionSecond()), o += 1e3 * MainData.GameValue(23), MainData.SetCustomData("X5_Money_EndTick", o);
                break;
            case 3:
                UIAlert.Show("恭喜获得箱子", "prize1_png", 6, null), t._dropedBox = -1, t.needDropBox += 6;
                break;
            case 4:
                UIAlert.Show("恭喜获得功速X2", "prize4_png", 0, null), MainData.GetSpdUpDuration() > 0 ? MainData.role.spdUpTick += 6e4 : MainData.role.spdUpTick = GUtil.SystemMillionSecond() + 6e4;
                break;
            case 5:
                var a = MainData.allSeeds.playerRanks[MainData.role.maxPlayerRank],
                    n = 4,
                    i = n * a.offlineMoney;
                UIAlert.Show("恭喜获得四小时收益", "prize5_png", i, null), t.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, i)
        }
        e.btnClose.visible = !0, e.btnStar.visible = !1, e.btnVideo.visible = !0, 10 == GameChannel && (this.btnVideo.visible = platform.H5_4399_IsShowVideo()), e.BtnVideoAnim(), e.UpdateView()
    }, t.prototype.BtnVideoAnim = function() {
        var e = this;
        e.btnVideo.visible && egret.Tween.get(e.btnVideo).to({
            scaleX: 1,
            scaleY: 1
        }, 400).call(function() {
            egret.Tween.get(e.btnVideo).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 400).call(function() {
                e.BtnVideoAnim()
            }, e)
        }, e)
    }, t
}(UIBase);
__reflect(UILuckyWheel.prototype, "UILuckyWheel");
var UIAD_Top = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this), this.visible = ADSDK.isShowNative_2, this.btnDowd.visible = !1, this.icon.visible = !1, this.adLabel.visible = !1
    }, t.prototype.Updata = function() {
        null != t.adDate && (this.btnDowd.visible = !0, this.icon.visible = !0, this.icon.source = t.adDate.icon, this.adLabel.visible = 2 == GameChannel, ADSDK.kds.reportNativeShow(), this.BandTap(this.btnDowd, this.OnClick), this.BandTap(this.icon, this.OnClick), this.BandTap(this.bg, this.OnClick))
    }, t.prototype.OnClick = function() {
        ADSDK.kds.reportNativeClick()
    }, t.prototype.Clear = function() {
        t.adDate = null, ADSDK.uiADTop = null
    }, t.adDate = null, t
}(UIBase);
__reflect(UIAD_Top.prototype, "UIAD_Top");
var UIBannerAd = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.visible = !1, t.BandTap(t.gView, t.OnClick), t.BandTap(t.btnClose, t.CloseUI)
    }, t.prototype.Update = function() {
        var e = this;
        t.adData && (console.log("设置banner数据"), e.iImg.source = t.adData.iconUrlList[0], ADSDK.kds.reportNativeShow(), e.visible = !0, console.log("显示"))
    }, t.prototype.CloseUI = function() {
        MainData.SetRefreshData("oppoNativeBannerCount", MainData.GetRefreshData("oppoNativeBannerCount") + 1), this.visible = !1, t.adData = null, ADSDK.uiBannerAD = null
    }, t.prototype.Clear = function() {
        t.adData = null, ADSDK.uiBannerAD = null
    }, t.prototype.OnClick = function() {
        ADSDK.kds.reportNativeClick()
    }, t.adData = null, t
}(UIBase);
__reflect(UIBannerAd.prototype, "UIBannerAd");
var UINative_1_Ad = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.dataReady = !1, t.uiRealy = !1, t
    }
    return __extends(t, e), t.Show = function(e) {
        t.instence = new t, t.instence.SetData(e), t.instence.AddUI()
    }, t.prototype.Sync = function() {
        var e = this;
        e.visible = !0, e.iImg.source = e.icon, ADSDK.kds.reportNativeShow()
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.visible = !1, t.BandTap(t.iImg, t.OnClick), t.Sync()
    }, t.prototype.OnClick = function() {
        ADSDK.kds.reportNativeClick()
    }, t.prototype.SetData = function(e) {
        var t = this;
        t.adId = e.adId, t.title = e.title, t.desc = e.desc, t.icon = e.icon, t.imgUrlList = e.imgUrlList, t.logoUrl = e.logoUrl, t.clickBtnTxt = e.clickBtnTxt, t.creativeType = e.creativeType, t.interactionType = e.interaction
    }, t
}(UIBase);
__reflect(UINative_1_Ad.prototype, "UINative_1_Ad");
var UIPageAd = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.dataReady = !1, t.uiRealy = !1, t
    }
    return __extends(t, e), t.Show = function(e) {
        t.instence = new t, t.instence.SetData(e), t.instence.AddUI()
    }, t.prototype.Sync = function() {
        var e = this;
        e.visible = !0, e.iTitle.text = e.title, e.iDesc.text = e.desc, e.iImg.source = e.imgUrlList[0], ADSDK.kds.reportNativeShow()
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.visible = !1, t.BandTap(t.btnClose, t.CloseOnClick), t.BandTap(t.iDesc, t.OnClick), t.BandTap(t.iImg, t.OnClick), t.BandTap(t.iTitle, t.OnClick), t.BandTap(t.btnAD, t.OnClick), t.visible = !0, t.Sync()
    }, t.prototype.OnClick = function() {
        ADSDK.kds.reportNativeClick(), this.RemoveUI()
    }, t.prototype.CloseOnClick = function() {
        if (2 == GameChannel && 5 == ADSDK.kds.getBlack()) {
            var e = MainData.GetRefreshData("vivoPageADCount");
            15 > e && (MainData.SetRefreshData("vivoPageADCount", e + 1), ADSDK.kds.reportNativeClick())
        }
        this.RemoveUI()
    }, t.prototype.SetData = function(e) {
        var t = this;
        t.adId = e.adId, t.title = e.title, t.desc = e.desc, t.icon = e.icon, t.imgUrlList = e.imgUrlList, t.logoUrl = e.logoUrl, t.clickBtnTxt = e.clickBtnTxt, t.creativeType = e.creativeType, t.interactionType = e.interaction
    }, t
}(UIBase);
__reflect(UIPageAd.prototype, "UIPageAd");
var UINewTank = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.newTankId = 0, t.rewardStars = 0, t.tank = null, t
    }
    return __extends(t, e), t.Show = function(e) {
        var a = new t;
        return a.newTankId = e, a.rewardStars = MainData.allSeeds.tanks[e].rewardStars, a.AddUI(), a.LockTime(), a
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.img.source = MainData.imgSheet.getTexture("Unlock Botany Title_png"), t.image.source = MainData.imgSheet.getTexture("light_png"), t.tank = GTank.NewTankWithOutPool(t.newTankId), t.gView.addChild(t.tank), t.BandTap(t.btnClose, t.CloseUI), t.BandTap(t.btnVideo, t.VideoReward), t.btnVideo.visible = !0, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.tankName.text = t.tank.sd.name + "", t.btnVideo.label = "+" + t.rewardStars, t.sliderAtk_396.width = 396 * t.tank.sd.showAtk / 100, t.sliderSpd_396.width = 369 * t.tank.sd.showSpd / 100, this.blast.play(0), GAudio.PlaySoundByName("points4_m4a", 1, 1), GameChannel) {
            case 2:
                MainData.GetCustomData(GUIDE_DATANAME) >= 1 && (ADSDK.uiADTop = t.uiAD, ADSDK.ShowNative(7, ADSDK.bannerChangeNative_id, ADSDK.Native_2), MainData.role.highestTank > 10 && ADSDK.ShowInterAd(32, ADSDK.interAd_adPoint5));
                break;
            case 4:
                t.bg.bottom = -242, t.uiAD.visible = !1, MainData.GetCustomData(GUIDE_DATANAME) >= 1 && MainData.role.highestTank > 10 && ADSDK.ShowNative(32, ADSDK.native_id, ADSDK.NativeOnload);
                break;
            case 3:
                if (t.bg.bottom = -242, MainData.GetCustomData(GUIDE_DATANAME) >= 1)
                    if (t.bg.bottom = -242, 0 == ADSDK.kds.getBlack() || 1 == ADSDK.kds.getBlack() || 2 == ADSDK.kds.getBlack()) ADSDK.ShowBannerAd(1);
                    else {
                        var a = t.btnClose.verticalCenter;
                        t.btnClose.verticalCenter = 720, setTimeout(function() {
                            t.btnClose.verticalCenter = a
                        }, 2e3), setTimeout(function() {
                            ADSDK.ShowBannerAd(1)
                        }, 1500)
                    } break;
            case 7:
                if (MainData.GetCustomData(GUIDE_DATANAME) >= 1)
                    if (t.bg.bottom = -242, 3 != ADSDK.kds.getBlack()) ADSDK.ShowBannerAd(1);
                    else {
                        var n = t.btnClose.verticalCenter;
                        t.btnClose.verticalCenter = 720, setTimeout(function() {
                            t.btnClose.verticalCenter = n
                        }, 2e3), setTimeout(function() {
                            ADSDK.ShowBannerAd(1)
                        }, 1500)
                    } break;
            case 5:
                if (MainData.GetCustomData(GUIDE_DATANAME) >= 1)
                    if (t.bg.bottom = -242, 0 == ADSDK.kds.getBlack()) ADSDK.ShowBannerAd(1);
                    else {
                        var i = t.btnClose.verticalCenter;
                        t.btnClose.verticalCenter = 720, setTimeout(function() {
                            t.btnClose.verticalCenter = i
                        }, 2e3), setTimeout(function() {
                            ADSDK.ShowBannerAd(1)
                        }, 1500)
                    } break;
            case 9:
                ADSDK.ShowBannerAd(1)
        }
    }, t.prototype.CloseUI = function() {
        var e = this;
        if (this.uiAD.Clear(), this.tank.Delete(), ADSDK.HideBannerAd(), 3 == GameChannel && 0 != ADSDK.kds.getBlack() && setTimeout(function() {
                ADSDK.HideBannerAd()
            }, 1500), this.RemoveUI(), MainData.gbattle.ui && (MainData.gbattle.ui.UpdateCurrBuyTankID(), MainData.gbattle.ui.UpdateUI()), !(MainData.GetCustomData(GUIDE_DATANAME) < 1)) {
            if (10 == GameChannel && platform.H5_4399_IsShowVideo(), 4 == MainData.role.highestTank && 0 == MainData.GetCustomData("isGetLuckyBag")) {
                if (10 == GameChannel && platform.H5_4399_IsShowVideo()) return void UILuckyBag.Show();
                if (10 != GameChannel || platform.H5_4399_IsShowVideo()) return void UILuckyBag.Show()
            }
            7 != GameChannel && ((2 == GameChannel || 4 == GameChannel) && MainData.role.highestTank <= 12 || (10 != GameChannel || platform.H5_4399_IsShowVideo()) && UIEnterDungeon.Show("恭喜您战力增加，赶紧去挑战BOSS，获得丰厚的奖励吧", function() {
                GAudio.PauseBGM(), MainData.role.currentDungeonId <= 0 && (MainData.role.currentDungeonId = 1);
                var t = MainData.allSeeds.dungeons[MainData.role.currentDungeonId];
                t && GUtil.BlackMark_InOut(function() {
                    MainData.gbattle.pause = !0, MainData.gbattle.RemoveUI(), GameView.instance.StartDungeon(t)
                }, function() {}, e, 500, 500)
            }, this))
        }
    }, t.prototype.VideoReward = function() {
        var e = this;
        MYAD.Video_UINewTank(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 3
            }), MainData.gbattle.ui.FlyStars(e.width / 2, e.height / 2 - 220, e.rewardStars), platform.TaTrack("gem_use_or_gain", {
                useOrGain: 1,
                gemNum: e.rewardStars,
                gemtype: 12,
                gemdetails: -1
            }), e.CloseUI()
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this)
    }, t.isNative = !0, t
}(UIBase);
__reflect(UINewTank.prototype, "UINewTank");
var UIOfflineReward = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._rewardBox = 0, t._rewardMoney = 0, t._rewardCostStar = 0, t
    }
    return __extends(t, e), t.OnEnterGame = function() {
        if (MainData.gbattle.ui) {
            var e = MainData.GetCustomData(GUIDE_DATANAME);
            console.log("======离线检测======"), console.log("= 指引进度: " + e), console.log("= 离线时间: " + MainData.role.offlineTime), console.log("= 设定时间: " + MainData.GameValue(5)), console.log("======离线检测======"), MainData.role.offlineTime >= MainData.GameValue(5) && e > 1 && t.Show();
            var a = (GUtil.SystemMillionSecond() - MainData.role.saveCreateDate, MainData.GetCustomData("gameStartTime")),
                n = GUtil.SystemDay();
            a != n && MainData.CanSign() && MainData.role.offlineTime >= MainData.GameValue(5) && e > 1 && !t.HasUISignDay() && (UISignDay.Show(), platform.TaTrack("sign_in", {
                sign_in: 1
            }))
        }
    }, t.OfflineBox = function() {
        if (0 != MainData.role.offlineTick) {
            var e = GUtil.SystemMillionSecond(),
                t = (e - MainData.role.offlineTick) / 1e3,
                a = 0;
            t > 20 && (a = Math.floor(t / 20));
            var n = MainData.gbattle.GetEmptySlotCount();
            n > 0 && (MainData.gbattle.needDropBox += Math.min(a, n))
        }
    }, t.HasUISignDay = function() {
        for (var e = 0; e < GameView.instance.uiLayer.$children.length; e++) {
            var t = GameView.instance.uiLayer.getChildAt(e);
            if (t instanceof UISignDay) return !0
        }
        return !1
    }, t.Show = function() {
        if (null == t.instance) {
            var e = new t;
            e.AddUI(), t.instance = e
        } else t.instance.UpdateView();
        return t.instance
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.img.source = MainData.imgSheet.getTexture("leave Title_png"), t.BandTap(t.btnClose, t.RewardFree), t.BandTap(t.btnVideo, t.VideoReward), t.BandTap(t.btnOK, t.StarReward), t.UpdateView(), t.btnVideo.visible = !0, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), GameChannel) {
            case 2:
            case 4:
                ADSDK.uiADTop = t.uiAD, ADSDK.ShowNative(7, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 3:
                t.bg.bottom = 196, ADSDK.ShowBannerAd(1), 0 != ADSDK.kds.getBlack() && 1 != ADSDK.kds.getBlack() && t.DelayBtnClose(2500);
                break;
            case 5:
                t.gView.verticalCenter = 0, t.bg.bottom = 192, ADSDK.ShowBannerAd(1), 0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 7:
                ADSDK.ShowBannerAd(1), 0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 8:
                0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 9:
                ADSDK.ShowBannerAd(1);
            case 10:
                t.DelayBtnClose(2e3)
        }
    }, t.prototype.UpdateView = function() {
        var e = this,
            t = MainData.allSeeds.playerRanks[MainData.role.maxPlayerRank],
            a = MainData.role.offlineTime / 3600;
        e._rewardMoney = a * t.offlineMoney, e._rewardCostStar = Math.floor(a * t.offlineCostStar) + 1, e.lMoney.text = "x" + GUtil.BigNumber(e._rewardMoney), a >= 1 ? (e.boxView.visible = !0, e._rewardBox = Math.floor(a) > 5 ? 5 : Math.floor(a), e.lBox.text = "x" + GUtil.BigNumber(e._rewardBox)) : e.boxView.visible = !1;
        var n = e.btnOK.getChildAt(2);
        n.text = e._rewardCostStar + "";
        var i = e.btnOK.labelDisplay;
        i.style = MainData.role.star >= e._rewardCostStar ? "" : "d"
    }, t.prototype.CloseUI = function() {
        this.uiAD.Clear(), this.uiHtTop.RemoveUI(), ADSDK.HideBannerAd(), t.instance = null, this.RemoveUI()
    }, t.prototype.VideoReward = function() {
        var e = this;
        MYAD.Video_UIOfflineReward(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 1
            }), e.GetReward(3)
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this)
    }, t.prototype.StarReward = function() {
        MainData.role.star >= this._rewardCostStar ? (MainData.role.star -= this._rewardCostStar, platform.TaTrack("gem_use_or_gain", {
            useOrGain: 0,
            gemNum: this._rewardCostStar,
            gemtype: 6,
            gemdetails: -1
        }), this.GetReward(2)) : MainData.Alert_NotEnoughStar()
    }, t.prototype.RewardFree = function() {
        this.GetReward(1)
    }, t.prototype.GetReward = function(e) {
        var t = this._rewardMoney * e;
        MainData.gbattle.needDropBox += this._rewardBox * e, MainData.gbattle.boxRewardUpCount += this._rewardBox * e, MainData.gbattle.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, t), MainData.role.offlineTime = 0, this.CloseUI()
    }, t.prototype.DelayBtnClose = function(e) {
        var t = this;
        t.btnClose.visible = !1, setTimeout(function() {
            t.btnClose.visible = !0
        }, e)
    }, t.instance = null, t
}(UIBase);
__reflect(UIOfflineReward.prototype, "UIOfflineReward");
var UIRank = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.AddUI(), e.LockTime(), e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.img1.source = MainData.imgSheet.getTexture("Promotion Title_png"), t.tVideo.visible = !1, t.BandTap(t.btnRankUp, t.RankUp), t.BandTap(t.btnRankDown, t.RankDown), t.BandTap(t.btnClose, t.CloseUI), t.BandTap(t.btnGetReward, t.FreeOnClick), t.BandTap(t.btnVideo, t.VideoOnClick), t.btnVideo.visible = !0, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo());
        var a = Math.min(MainData.role.lv + 1, MainData.MaxRankLv),
            n = MainData.allSeeds.playerRanks[a],
            i = MainData.gbattle.PlayerPower(),
            o = GUtil.BigNumber(i);
        switch (t.lText.text = o + "", t.rText.text = GUtil.BigNumber(n.rightPower), t.rText.style = i >= n.rightPower ? "b" : "d", t.gView1.visible = !0, t.gView2.visible = !1, t.btnRankUp.visible = t.CanRankUP(), t.btnRankDown.visible = MainData.role.lv > 1, 10 == GameChannel && (t.btnRankDown.visible = platform.H5_4399_IsShowVideo() && MainData.role.lv > 1), GameChannel) {
            case 2:
                switch (ADSDK.ShowBannerAd(1), ADSDK.kds.getBlack()) {
                    case 0:
                        ADSDK.ShowNative(6, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 1:
                        ADSDK.ShowNative(6, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 2:
                        ADSDK.ShowNative(6, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 3:
                        setTimeout(function() {
                            ADSDK.ShowNative(6, ADSDK.native_id, ADSDK.NativeOnload)
                        }, 1e3)
                }
                break;
            case 4:
                ADSDK.ShowNative(6, ADSDK.native_id, ADSDK.NativeOnload);
                break;
            case 7:
                if (MainData.GetCustomData(GUIDE_DATANAME) >= 1) switch (ADSDK.kds.getBlack()) {
                    case 0:
                        break;
                    case 1:
                        ADSDK.ShowInterAd(6);
                        break;
                    case 2:
                        setTimeout(function() {
                            ADSDK.ShowInterAd(6)
                        }, 800);
                        break;
                    case 3:
                        setTimeout(function() {
                            ADSDK.ShowInterAd(6)
                        }, 1e3)
                }
        }
    }, t.prototype.VideoOnClick = function() {
        var e = this;
        MYAD.Video_UIRankDoubleReward(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 2
            }), e.GetReward(3)
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this)
    }, t.prototype.FreeOnClick = function() {
        this.GetReward(1)
    }, t.prototype.GetReward = function(e) {
        var t = this,
            a = this,
            n = MainData.allSeeds.playerRanks[MainData.role.lv],
            i = n.rewardStar * e;
        return MainData.gbattle.ui.FlyStars(this.width / 2, this.height / 2 - 220, i), platform.TaTrack("gem_use_or_gain", {
            useOrGain: 1,
            gemNum: i,
            gemtype: 13,
            gemdetails: -1
        }), MainData.gbattle.ui.PlayNewRankAnim(), 3 == GameChannel && ADSDK.ShowInterAd(6), a.CloseUI(), 7 != GameChannel || "douyin_lite" == platform.GetToutiaoApp() || MainData.gbattle.ui.toutiaoIsRecording || (MainData.gbattle.ui.toutiaoIsRecording = !0, MainData.gbattle.ui.lToutiao.text = "录制中", MainData.gbattle.ui.btnToutiao.getChildAt(1).visible = !0, platform.ToutiaoStartRecord(function() {
            MainData.gbattle.ui.btnToutiaoShare.visible = !0, MainData.gbattle.ui.lToutiaoShare.visible = !0, MainData.gbattle.ui.toutiaoIsRecording = !1, MainData.gbattle.ui.lToutiao.text = "Kỷ lục", MainData.gbattle.ui.btnToutiao.getChildAt(1).visible = !1
        }, MainData.gbattle.ui)), MainData.AddCustomDataValue("RankUpCount", 1), 2 == MainData.GetCustomData("RankUpCount") ? (console.log("进入特权引导"), void MainData.gbattle.guide.PrivilegeGuide()) : void(7 != GameChannel && (MainData.GetCustomData(GUIDE_DATANAME) < 1 || 0 != MainData.GetCustomData("PrivilegeGuide") && (10 != GameChannel || platform.H5_4399_IsShowVideo()) && UIEnterDungeon.Show("恭喜您晋级新段位，赶紧去挑战BOSS，获得丰厚的奖励吧", function() {
            GAudio.PauseBGM(), MainData.role.currentDungeonId <= 0 && (MainData.role.currentDungeonId = 1);
            var e = MainData.allSeeds.dungeons[MainData.role.currentDungeonId];
            e && GUtil.BlackMark_InOut(function() {
                MainData.gbattle.pause = !0, MainData.gbattle.RemoveUI(), GameView.instance.StartDungeon(e)
            }, function() {}, t, 500, 500)
        }, this)))
    }, t.prototype.CanRankUP = function() {
        var e = MainData.allSeeds.playerRanks[MainData.role.lv].nextExp;
        return MainData.role.exp >= e && MainData.role.lv < MainData.MaxRankLv ? !0 : !1
    }, t.prototype.RankUp = function() {
        var e = this;
        if (this.CanRankUP()) {
            var t = Math.min(MainData.role.lv + 1, MainData.MaxRankLv),
                a = MainData.allSeeds.playerRanks[t];
            if (platform.TaTrack("level_change", {
                    Current_level: MainData.role.lv,
                    Change_type: 1,
                    Zhanli_recommend: a.rightPower
                }), MainData.role.lv++, MainData.role.exp = 0, MainData.SaveGame(), MainData.role.lv > MainData.role.maxPlayerRank) {
                switch (9 == GameChannel && platform.QTTReportData({
                    type: "upgrade",
                    app_id: "a3VpBRNBrdrf",
                    open_id: MainData.openid,
                    game_name: "植物大战僵尸2守护",
                    user_level: MainData.role.lv
                }), this.gView1.visible = !1, this.gView2.visible = !0, GameChannel) {
                    case 2:
                    case 4:
                        ADSDK.uiADTop = this.uiAD, ADSDK.ShowNative(7, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                        break;
                    case 3:
                        if (MainData.GetCustomData(GUIDE_DATANAME) >= 1)
                            if (this.bg.bottom = -129, 0 == ADSDK.kds.getBlack() || 1 == ADSDK.kds.getBlack() || 2 == ADSDK.kds.getBlack()) ADSDK.ShowBannerAd(1);
                            else {
                                var n = this.btnGetReward.verticalCenter;
                                this.btnGetReward.verticalCenter = 600, setTimeout(function() {
                                    e.btnGetReward.verticalCenter = n
                                }, 2e3), setTimeout(function() {
                                    ADSDK.ShowBannerAd(1)
                                }, 1500)
                            } break;
                    case 7:
                        if (MainData.GetCustomData(GUIDE_DATANAME) >= 1)
                            if (this.bg.bottom = -129, 3 != ADSDK.kds.getBlack()) ADSDK.ShowBannerAd(1);
                            else {
                                var i = this.btnGetReward.verticalCenter;
                                this.btnGetReward.verticalCenter = 600, setTimeout(function() {
                                    e.btnGetReward.verticalCenter = i
                                }, 2e3), setTimeout(function() {
                                    ADSDK.ShowBannerAd(1)
                                }, 1500)
                            } break;
                    case 5:
                        if (MainData.GetCustomData(GUIDE_DATANAME) >= 1)
                            if (this.bg.bottom = -129, 0 == ADSDK.kds.getBlack()) ADSDK.ShowBannerAd(1);
                            else {
                                var o = this.btnGetReward.verticalCenter;
                                this.btnGetReward.verticalCenter = 600, setTimeout(function() {
                                    e.btnGetReward.verticalCenter = o
                                }, 2e3), setTimeout(function() {
                                    ADSDK.ShowBannerAd(1)
                                }, 1e3)
                            } break;
                    case 9:
                        MainData.GetCustomData(GUIDE_DATANAME) >= 1 && ADSDK.ShowBannerAd(1)
                }
                MainData.role.maxPlayerRank = Math.max(MainData.role.lv, MainData.role.maxPlayerRank), this.UpdateView2()
            } else this.CloseUI()
        } else UIPopDialog.ShowOKOnly("当前经验不足,无法升级段位。", null, null, null)
    }, t.GetRankImg = function(e) {
        var a = (MainData.allSeeds.playerRanks[e], Math.floor((e - 1) / 5));
        return t.rankImgs[a]
    }, t.GetRankNameImg = function(e) {
        var a = (MainData.allSeeds.playerRanks[e], Math.floor((e - 1) / 5));
        return t.rankNameImgs[a]
    }, t.GetRankLvImg = function(e) {
        e = 5 - (e - 1) % 5;
        var t = e + "x_png";
        return t
    }, t.prototype.UpdateView2 = function() {
        var e = this,
            a = MainData.role.lv - 1,
            n = MainData.role.lv,
            i = MainData.allSeeds.playerRanks[a],
            o = MainData.allSeeds.playerRanks[n];
        e.imgRank1.source = t.GetRankImg(a), e.imgRank2.source = t.GetRankImg(n), e.lRank1.text = i.name.substr(0, 2) + GUtil.NumberChangeLuoMa(Number(i.name.substr(2, 1))), e.lRank2.text = o.name.substr(0, 2) + GUtil.NumberChangeLuoMa(Number(o.name.substr(2, 1)));
        var r = (MainData.role.lv - 1) % 2;
        1 == r ? (e.lRewardAtk.text = "植物攻击", e.lRewardAtkVal.text = "+" + Math.floor(100 * o.atkRate) + "%", e.lRewardAtkImg.source = "attack icon_png") : (e.lRewardAtk.text = "植物花费", e.lRewardAtkVal.text = "-" + Math.floor(100 * o.costSubRate) + "%", e.lRewardAtkImg.source = MainData.imgSheet.getTexture("Demolition icon_png")), e.lRewardStars.text = "+" + o.rewardStar, MainData.role.atkRate = 1 + o.atkRate, MainData.role.costRate = 1 - o.costSubRate, this.blast.play(0), GAudio.PauseBGM(), GAudio.PlaySoundByName("winmusic_m4a", 1, 1), MainData.gbattle.RunDelay(4, function() {
            GAudio.ResumeBGM()
        }, e), MYAD.aldFirstRank()
    }, t.prototype.RankDown = function() {
        var e = this;
        if (MainData.role.lv > 1) {
            var t = !1;
            2 == GameChannel && (t = !0), UIPopDialog.ShowOKCANCEL("确定要降低段位吗?", "", function() {
                MYAD.Video_UIRankDown(function() {
                    platform.TaTrack("assist_action", {
                        assistaction_type: 16
                    });
                    var t = Math.min(MainData.role.lv + 1, MainData.MaxRankLv),
                        a = MainData.allSeeds.playerRanks[t];
                    platform.TaTrack("level_change", {
                        Current_level: MainData.role.lv,
                        Change_type: 2,
                        Zhanli_recommend: a.rightPower
                    }), MainData.role.lv--, MainData.role.exp = 0, e.CloseUI()
                }, function() {
                    UIPopTips.ShowTips("暂时没有广告")
                }, e)
            }, null, this, t)
        } else UIPopDialog.ShowOKOnly("已经是最低等级,无法降级段位。", null, null, null)
    }, t.prototype.CloseUI = function() {
        ADSDK.HideBannerAd(), this.uiHtTop.RemoveUI(), 3 == GameChannel && 0 != ADSDK.kds.getBlack() && setTimeout(function() {
            ADSDK.HideBannerAd()
        }, 1500), this.uiAD.Clear(), this.RemoveUI()
    }, t.rankImgs = ["bronze_png", "silver_png", "gold_png", "Platinum_png", "Diamonds_png", "master_png", "mmaster_png", "King_png"], t.rankNameImgs = ["rank1_png", "rank2_png", "rank3_png", "rank4_png", "rank5_png", "rank6_png", "rank7_png", "rank8_png"], t
}(UIBase);
__reflect(UIRank.prototype, "UIRank");
var UISetting = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.imghead.source = MainData.imgSheet.getTexture("Set upTitle_png"), t.BandTap(t.btnBack, t.CloseUI), t.BandTap(t.btnMusic, t.ChangeMusic), t.BandTap(t.btnSound, t.ChangeSound), t.UpdateView(), t.uiBanner.visible = !1, GameChannel) {
            case 2:
                0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1);
                break;
            case 9:
                ADSDK.ShowBannerAd(1)
        }
        4 == GameChannel && (0 == ADSDK.kds.getBlack() || 1 == ADSDK.kds.getBlack() ? ADSDK.ShowBannerAd(1) : (ADSDK.uiBannerAD = t.uiBanner, ADSDK.ShowNative(1, ADSDK.bannerChangeNative_id1, ADSDK.BannerChangeNative)))
    }, t.prototype.UpdateView = function() {
        var e = this;
        e.btnMusic.iconDisplay.visible = MainData.MusicOn(), e.btnSound.iconDisplay.visible = MainData.SoundOn()
    }, t.prototype.ChangeMusic = function() {
        var e = !MainData.MusicOn();
        GAudio.bgmOn = e, egret.localStorage.setItem("SettingMusic", e ? "On" : "Off"), e ? GAudio.PlayBGM(GAudio.bgmName) : GAudio.PauseBGM(), this.UpdateView()
    }, t.prototype.ChangeSound = function() {
        var e = !MainData.SoundOn();
        GAudio.soundOn = e;
        egret.localStorage.setItem("SettingSound", e ? "On" : "Off"), this.UpdateView()
    }, t.Show = function() {
        var e = new t;
        return e.AddUI(), e.LockTime(), e
    }, t.prototype.CloseUI = function() {
        this.RemoveUI()
    }, t
}(UIBase);
__reflect(UISetting.prototype, "UISetting");
var GEffect = function(e) {
    function t(t, a, n) {
        void 0 === n && (n = !1);
        var i = e.call(this, t, "effs", a, a, n) || this;
        return i.autoDestroy = !1, i
    }
    return __extends(t, e), t.prototype.PlayOnce_AutoDestroy = function(e) {
        this.autoDestroy = !0, this.PlayAnim(e, 1, 1)
    }, t.prototype.HandlerEvent = function(t) {
        if (e.prototype.HandlerEvent.call(this, t), null != MainData.gbattle && this instanceof GActor && null != this.armature) {
            var a = (t.eventObject, t.type);
            a == dragonBones.EgretEvent.COMPLETE && this.autoDestroy && this.OnDestroy()
        }
    }, t.OnceEffect = function(e, a, n, i) {
        var o = new t(e, i);
        o.PlayOnce_AutoDestroy("play"), o.x = a, o.y = n, MainData.gbattle.gFlyIconsTop.addChild(o)
    }, t.Eff_2 = function(e, a, n, i) {
        var o = new t("eff_2", i);
        o.PlayOnce_AutoDestroy("play"), o.x = a, o.y = n, MainData.gbattle.gFlyIconsTop.addChild(o)
    }, t.Eff_3 = function(e, a, n, i) {
        var o = new t("eff_3", i);
        o.PlayOnce_AutoDestroy("play"), o.x = a, o.y = n, MainData.gbattle.gFlyIconsTop.addChild(o)
    }, t.Eff_Sign = function(e, a, n, i) {
        var o = new t("eff_1", i, !0);
        o.PlayOnce_AutoDestroy("play"), o.x = a, o.y = n, UIAlert.instance && UIAlert.instance.effectPos.addChild(o)
    }, t
}(GActor);
__reflect(GEffect.prototype, "GEffect");
var UIShop_Cell2 = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.sd = null, t.lv = 0, t.icons = [new egret.Texture, MainData.imgSheet.getTexture("Demolition icon_png"), new egret.Texture], t.cost = 0, t.owner = null, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t.btnBuy, t.MoneyBuy), t.UpdateView()
    }, t.prototype.InitLabels = function() {
        var e = this;
        e.label.parent.removeChild(e.label), e.locked.parent.removeChild(e.locked), e.unlocked.parent.removeChild(e.unlocked), e.owner.gLabels2.addChild(e.label), e.owner.gLabels2.addChild(e.locked), e.owner.gLabels2.addChild(e.unlocked), e.label.x += e.x, e.label.y += e.y, e.locked.x += e.x, e.locked.y += e.y, e.unlocked.x += e.x, e.unlocked.y += e.y
    }, t.prototype.UpdateView = function() {
        var e = this;
        if (null != e.sd) {
            e.sd.id < e.icons.length ? e.icon.source = 2 == e.sd.id ? "attack icon_png" : e.icons[e.sd.id] : e.icon.source = null;
            var t = MainData.GetPrivilegesLv(e.sd.id),
                a = e.sd.lvs[e.lv];
            if (e.label.text = a.name + "\n" + a.desc, e.btnBuy.visible = !1, e.locked.visible = !1, e.unlocked.visible = !1, e.lv <= t) e.unlocked.visible = !0;
            else if (e.lv == t + 1) {
                e.btnBuy.visible = !0, e.cost = Math.floor(a.cost);
                var n = e.btnBuy.getChildAt(2);
                n.text = e.cost + ""
            } else e.locked.visible = !0
        }
    }, t.prototype.SetData = function(e, t) {
        this.sd = e, this.lv = t, this.UpdateView()
    }, t.prototype.CloseUI = function() {
        var e = this;
        e.label.parent && e.label.parent.removeChild(e.label), e.locked.parent && e.locked.parent.removeChild(e.locked), e.unlocked.parent && e.unlocked.parent.removeChild(e.unlocked), this.RemoveUI()
    }, t.prototype.BuySucc = function() {
        var e = this,
            t = MainData.GetPrivilegesLv(e.sd.id) + 1;
        MainData.role.privileges[e.sd.id] = t, e.owner.UpdateCells2(), MainData.gbattle.ui && MainData.gbattle.ui.UpdateCurrBuyTankID()
    }, t.prototype.MoneyBuy = function() {
        var e = this;
        MainData.role.star >= e.cost ? (MainData.role.star -= e.cost, platform.TaTrack("gem_use_or_gain", {
            useOrGain: 0,
            gemNum: e.cost,
            gemtype: 20,
            gemdetails: -1
        }), UIPopTips.ShowTips("购买成功!"), e.BuySucc()) : MainData.Alert_NotEnoughStar()
    }, t
}(UIBase);
__reflect(UIShop_Cell2.prototype, "UIShop_Cell2");
var GFlyIcon = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.onUse = !1, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this), this.iconDisplay.source = this.icon
    }, t.prototype.Release = function() {
        null != this.parent && this.parent.removeChild(this), this.onUse = !1
    }, t.GetOBJ = function() {
        for (var e = t.pool, a = null, n = 0; n < e.length; n++) {
            var i = e[n];
            if (!i.onUse) {
                a = i;
                break
            }
        }
        return null == a && (a = new t, e.push(a)), a
    }, t.GetFlyMoney = function(e) {
        var a = t.GetOBJ();
        return a.onUse = !0, a.icon = e, null != a.iconDisplay && (a.iconDisplay.source = e), a
    }, t.pool = [], t
}(eui.Component);
__reflect(GFlyIcon.prototype, "GFlyIcon", ["eui.UIComponent", "egret.DisplayObject"]);
var UISignDay = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.ldays = null, t.lrewards = null, t.lrights = null, t.checks = null, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.AddUI(), e.LockTime(), e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.imghead.source = MainData.imgSheet.getTexture("Sign in Title_png"), t.tVideo.visible = !1, t.ldays = [t.lDay1, t.lDay2, t.lDay3, t.lDay4, t.lDay5, t.lDay6, t.lDay7], t.lrights = [t.imgH1, t.imgH2, t.imgH3, t.imgH4, t.imgH5, t.imgH6, t.imgH7], t.checks = [t.check1, t.check2, t.check3, t.check4, t.check5, t.check6, t.check7], t.UpdateView(), t.BandTap(t.btnClose, t.CloseUI), t.BandTap(t.btnVideo, t.VideoReward), t.btnVideo.visible = !0, 10 == GameChannel && (t.btnVideo.visible = platform.H5_4399_IsShowVideo()), t.BandTap(t.btnFree, t.RewardFree), t.uiBanner.visible = !1, GameChannel) {
            case 2:
                0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1);
                break;
            case 6:
            case 9:
            case 3:
                ADSDK.ShowBannerAd(1);
                break;
            case 4:
        }
        t.BtnVideoAnim()
    }, t.prototype.UpdateView = function() {
        var e = this;
        e.lrewards = [.2 * MainData.allSeeds.playerRanks[MainData.role.lv].offlineMoney, 50, 6, 1, 10, 1, 120];
        for (var t = 0; t < e.ldays.length; t++) 0 == t ? e.ldays[t].text = GUtil.BigNumber(e.lrewards[t]) : 3 != t && 5 != t && (e.ldays[t].text = e.lrewards[t] + ""), e.lrights[t].visible = MainData.role.signDay > t, e.checks[t].visible = MainData.role.signDay == t && MainData.CanSign();
        var a = MainData.CanSign();
        e.gCanSign.visible = a, e.gSigned.visible = !a
    }, t.prototype.CloseUI = function() {
        ADSDK.HideBannerAd(), this.RemoveUI()
    }, t.prototype.VideoReward = function() {
        var e = this;
        MYAD.Video_UISignDay(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 12
            }), e.GetReward(2)
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this), MYAD.aldSign()
    }, t.prototype.RewardFree = function() {
        switch (GameChannel) {
            case 2:
                switch (ADSDK.kds.getBlack()) {
                    case 0:
                        ADSDK.ShowNative(4, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 1:
                        ADSDK.ShowNative(4, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 2:
                        ADSDK.ShowNative(4, ADSDK.native_id, ADSDK.NativeOnload);
                        break;
                    case 3:
                        setTimeout(function() {
                            ADSDK.ShowNative(4, ADSDK.native_id, ADSDK.NativeOnload)
                        }, 1e3)
                }
                break;
            case 4:
                ADSDK.ShowNative(4, ADSDK.native_id, ADSDK.NativeOnload);
                break;
            case 3:
                ADSDK.ShowInterAd(4)
        }
        this.GetReward(1), MYAD.aldSign()
    }, t.prototype.GetReward = function(e) {
        var t = this,
            a = this.lrewards[MainData.role.signDay];
        switch (MainData.role.signDay) {
            case 0:
                var n = MainData.allSeeds.playerRanks[MainData.role.lv],
                    i = 1,
                    o = i * n.offlineMoney * e * .2;
                UIAlert.Show("恭喜获得阳光", "sign_1_png", o, function() {
                    MainData.role.signDay = (MainData.role.signDay + 1) % 7, MainData.SetRefreshData("SignedToday", 1), t.UpdateView(), UIPause.instance && UIPause.instance.UpdateSignRedPoint()
                }), MainData.gbattle.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, o);
                break;
            case 1:
                MainData.gbattle.ui.FlyStars(this.width / 2, this.height / 2 - 220, a * e), platform.TaTrack("gem_use_or_gain", {
                    useOrGain: 1,
                    gemNum: a * e,
                    gemtype: 14,
                    gemdetails: -1
                }), UIAlert.Show("Nhận kim cương", "sign_3_png", a * e, function() {
                    MainData.role.signDay = (MainData.role.signDay + 1) % 7, MainData.SetRefreshData("SignedToday", 1), t.UpdateView(), UIPause.instance && UIPause.instance.UpdateSignRedPoint()
                });
                break;
            case 2:
                MainData.gbattle._dropedBox = -1, MainData.gbattle.needDropBox += 6 * e, UIAlert.Show("恭喜获得箱子", "sign_4_png", 6 * e, function() {
                    MainData.role.signDay = (MainData.role.signDay + 1) % 7, MainData.SetRefreshData("SignedToday", 1), t.UpdateView(), UIPause.instance && UIPause.instance.UpdateSignRedPoint()
                });
                break;
            case 3:
                var n = MainData.allSeeds.playerRanks[MainData.role.maxPlayerRank],
                    i = 4,
                    o = i * n.offlineMoney * e * .2;
                UIAlert.Show("恭喜获得四小时收益", "prize5_png", o, function() {
                    MainData.role.signDay = (MainData.role.signDay + 1) % 7, MainData.SetRefreshData("SignedToday", 1), t.UpdateView(), UIPause.instance && UIPause.instance.UpdateSignRedPoint()
                }), MainData.gbattle.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, o);
                break;
            case 4:
                MainData.gbattle._dropedBox = -1, MainData.gbattle.needDropBox += 10 * e, UIAlert.Show("恭喜获得箱子", "sign_4_png", 10 * e, function() {
                    MainData.role.signDay = (MainData.role.signDay + 1) % 7, MainData.SetRefreshData("SignedToday", 1), t.UpdateView(), UIPause.instance && UIPause.instance.UpdateSignRedPoint()
                });
                break;
            case 5:
                var n = MainData.allSeeds.playerRanks[MainData.role.maxPlayerRank],
                    i = 24,
                    o = i * n.offlineMoney * e * .2;
                UIAlert.Show("Chúc mừng đã đạt mốc thưởng", "prize3_png", o, function() {
                    MainData.role.signDay = (MainData.role.signDay + 1) % 7, MainData.SetRefreshData("SignedToday", 1), t.UpdateView(), UIPause.instance && UIPause.instance.UpdateSignRedPoint()
                }), MainData.gbattle.ui.FlyMoneys(this.width / 2, this.height / 2 - 220, o);
                break;
            case 6:
                MainData.gbattle.ui.FlyStars(this.width / 2, this.height / 2 - 220, a * e), platform.TaTrack("gem_use_or_gain", {
                    useOrGain: 1,
                    gemNum: a,
                    gemtype: 14,
                    gemdetails: -1
                }), UIAlert.Show("Nhận kim cương", "sign_3_png", a * e, function() {
                    MainData.role.signDay = (MainData.role.signDay + 1) % 7, MainData.SetRefreshData("SignedToday", 1), t.UpdateView(), UIPause.instance && UIPause.instance.UpdateSignRedPoint()
                })
        }
    }, t.prototype.BtnVideoAnim = function() {
        var e = this;
        e.btnVideo.visible && egret.Tween.get(e.btnVideo).to({
            scaleX: 1,
            scaleY: 1
        }, 400).call(function() {
            egret.Tween.get(e.btnVideo).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 400).call(function() {
                e.BtnVideoAnim()
            }, e)
        }, e)
    }, t
}(UIBase);
__reflect(UISignDay.prototype, "UISignDay");
var UISpdUp = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.spdMaxDur = 0, t.spdUpDur = 0, t.sunsday = 0, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.AddUI(), e.LockTime(), e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (t.BandTap(t.btnBack, t.CloseUI), t.BandTap(t.btnVideoFree, t.VideoFree), t.BandTap(t.btnUseStar1, t.UseStar1), t.BandTap(t.btnUseStar2, t.UseStar2), GTime.startTick(t.Update, t, !1, !0), t.spdMaxDur = 1e3 * MainData.GameValue(2), t.spdUpDur = 1e3 * MainData.GameValue(1), t.sunsday = 1, this.btnUseStar1.visible = MainData.GetSundat() > 0, t.btnVideoFree.visible = !1, t.btnUseStar2.visible = !1, t.uiHtTop.visible = !1, GameChannel) {
            case 2:
                ADSDK.ShowBannerAd(1), ADSDK.uiADTop = t.uiAD, ADSDK.ShowNative(7, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 4:
                ADSDK.uiADTop = t.uiAD, t.uiHtTop.visible = !0, ADSDK.ShowNative(7, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 3:
                2 != ADSDK.kds.getBlack() && 3 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1), 0 != ADSDK.kds.getBlack() && 1 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3);
                break;
            case 7:
                0 != ADSDK.kds.getBlack() && t.DelayBtnClose(2e3), ADSDK.ShowBannerAd(1), "douyin_lite" != platform.GetToutiaoApp() && (0 == MainData.GetRefreshData("toutiao_spdCount") ? this.btnVideoFree.iconDisplay.source = "share_png" : this.btnVideoFree.iconDisplay.source = "video_png");
                break;
            case 5:
                ADSDK.ShowBannerAd(1);
                break;
            case 9:
                ADSDK.ShowBannerAd(1);
            case 10:
                t.DelayBtnClose(2e3)
        }
    }, t.prototype.DelayBtnClose = function(e) {
        var t = this;
        t.btnBack.visible = !1, setTimeout(function() {
            t.btnBack.visible = !0
        }, 2e3)
    }, t.prototype.Update = function() {
        var e = this;
        e.btnVideoFree.visible = !1;
        var t = MainData.GetSpdUpDuration(),
            a = t / e.spdMaxDur;
        a = Math.min(a, 1), e.slider_486.width = 486 * a;
        var n = GUtil.FormatTime_HHMMSS(t);
        n != e.lLastTime.text && (e.lLastTime.text = n);
        var i = t < e.spdMaxDur - e.spdUpDur;
        this.sunsday < 0 && (e.btnUseStar1.visible = !1), e.btnVideoFree.visible = i, 10 == GameChannel && (e.btnVideoFree.visible = platform.H5_4399_IsShowVideo() && i && MainData.GetSundat() <= 0)
    }, t.prototype.VideoFree = function() {
        var e = this;
        7 == GameChannel && "douyin_lite" != platform.GetToutiaoApp() && 0 == MainData.GetRefreshData("toutiao_spdCount") ? ADSDK.TouTiaoRecorderShare(function() {
            MainData.SetRefreshData("toutiao_spdCount", 1), platform.TaTrack("assist_action", {
                assistaction_type: 4
            }), e.SpdUp(1), e.CloseUI()
        }, this) : MYAD.Video_UISpdUp(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 4
            }), e.SpdUp(1), e.CloseUI()
        }, function() {
            UIPopTips.ShowTips("暂时没有广告")
        }, this)
    }, t.prototype.UseStar = function() {
        if (MainData.role.star >= 5) {
            if (2 == GameChannel || 4 == GameChannel) {
                var e = MainData.GetRefreshData("spdFreeCount");
                3 > e && MainData.SetRefreshData("spdFreeCount", e + 1)
            }
            MainData.role.star -= 5, platform.TaTrack("gem_use_or_gain", {
                useOrGain: 0,
                gemNum: 5,
                gemtype: 8,
                gemdetails: -1
            }), this.SpdUp(2), this.CloseUI()
        } else MainData.Alert_NotEnoughStar();
        MYAD.aldpeed()
    }, t.prototype.UseStar1 = function() {
        MainData.AddCustomDataValue("sunsday", 1), this.sunsday = MainData.GetSundat(), egret.updateAllScreens(), this.SpdUp(0), this.CloseUI(), MYAD.aldpeed()
    }, t.prototype.UseStar2 = function() {
        var e = this;
        ADSDK.Share(function() {
            MainData.SetRefreshData("wxSpdFree", 1), egret.updateAllScreens(), e.SpdUp(1), e.CloseUI()
        }, "Tốc độ x2")
    }, t.prototype.SpdUp = function(e) {
        MainData.SetRefreshData("btnSpd", 1);
        var t = GUtil.SystemMillionSecond();
        this.sunsday = MainData.GetSundat(), this.btnUseStar1.visible = MainData.GetSundat() > 0, 0 == e ? this.spdUpDur = 6e4 : 1 == e ? this.spdUpDur = 1e3 * MainData.GameValue(1) * 2 : this.spdUpDur = 1e3 * MainData.GameValue(1);
        var a = Math.max(t + this.spdUpDur, MainData.role.spdUpTick + this.spdUpDur),
            n = t + this.spdMaxDur;
        MainData.role.spdUpTick = Math.min(a, n)
    }, t.prototype.CloseUI = function() {
        ADSDK.HideBannerAd();
        var e = this;
        e.uiAD.Clear(), e.uiHtTop.RemoveUI(), GTime.stopTick(e.Update, e), e.RemoveUI()
    }, t
}(UIBase);
__reflect(UISpdUp.prototype, "UISpdUp");
var UIAchieve_Cell = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.sd = null, t.rewardValue = 0, t.currRate = 0, t.maxRate = 0, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t.btnGetReward, t.GetReward), t.UpdataView()
    }, t.prototype.SetData = function(e) {
        this.sd = e
    }, t.prototype.UpdataView = function() {
        var e = this;
        e.des.text = e.sd.des, e.rewardValue = e.sd.reward, e.rewardNum.text = e.rewardValue.toString(), e.maxRate = e.sd.count1, e.GetCurrRate(), e.currRate > e.maxRate && (e.currRate = e.maxRate), e.countNum.text = e.currRate + "/" + e.maxRate, e.countBar.width = e.currRate / e.maxRate * 335;
        var t = e.currRate == e.maxRate;
        e.locked.visible = !t, e.btnGetReward.visible = t, e.rewardNum.visible = t, e.rewardIcon.visible = t
    }, t.prototype.GetCurrRate = function() {
        this.currRate = MainData.GetCustomData("Achieve" + this.sd.id)
    }, t.UpdataAchieve = function(e) {
        for (var t = GUtil.GetDiscLength(MainData.allSeeds.achieve), a = MainData.allSeeds.achieve, n = 1; t >= n; n++)
            if (a[n].count2 == e) {
                var i = MainData.GetCustomData("Achieve" + n);
                i >= 0 && MainData.SetCustomData("Achieve" + n, i + 1)
            }
    }, t.prototype.GetReward = function() {
        var e = this;
        MainData.SetCustomData("Achieve" + this.sd.id, -1), UIPopReward.Show(e.rewardValue)
    }, t.prototype.CloseUI = function() {
        this.RemoveUI()
    }, t
}(UIBase);
__reflect(UIAchieve_Cell.prototype, "UIAchieve_Cell");
var UIPopReward = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.rewardValue = 0, t.rewardMode = 0, t
    }
    return __extends(t, e), t.Show = function(e) {
        var a = new t;
        return a.AddUI(), a.rewardValue = e, a.UpdataView(), a
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        switch (10 == GameChannel ? t.btnDoubleReward.visible = platform.H5_4399_IsShowVideo() : t.btnDoubleReward.visible = !0, t.BandTap(t.btnGetReward, t.OrdiReward), t.BandTap(t.btnDoubleReward, t.VideoReward), t.uiBanner.visible = !1, GameChannel) {
            case 2:
                0 != ADSDK.kds.getBlack() && ADSDK.ShowBannerAd(1);
                break;
            case 4:
                0 == ADSDK.kds.getBlack() || 1 == ADSDK.kds.getBlack() ? ADSDK.ShowBannerAd(1) : (ADSDK.uiBannerAD = t.uiBanner, ADSDK.ShowNative(1, ADSDK.bannerChangeNative_id1, ADSDK.BannerChangeNative))
        }
    }, t.prototype.UpdataView = function() {
        var e = this;
        e.rewardNum.text = "x" + e.rewardValue.toString()
    }, t.prototype.VideoReward = function() {
        var e = this;
        MYAD.Video_UIPopReward(function() {
            platform.TaTrack("assist_action", {
                assistaction_type: 19
            }), e.GetReward(3)
        }, null, this)
    }, t.prototype.OrdiReward = function() {
        this.GetReward(1)
    }, t.prototype.GetReward = function(e) {
        var a = this,
            n = a.rewardValue * e;
        MainData.role.star += n, platform.TaTrack("gem_use_or_gain", {
            useOrGain: 1,
            gemNum: n,
            gemtype: 16,
            gemdetails: -1
        }), UIPopDialog.ShowOKOnly("获得" + n + "钻石", "Stars_png", function() {}, this), t.uiTask.UpdataAchieveCell(), a.CloseUI()
    }, t.prototype.CloseUI = function() {
        this.uiBanner.Clear(), ADSDK.HideBannerAd(), this.RemoveUI()
    }, t
}(UIBase);
__reflect(UIPopReward.prototype, "UIPopReward");
var UITask_Cell = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.sd = null, t.rewardValue = 0, t.currTaskRate = 0, t.maxTaskRate = 0, t.rewardMode = 0, t
    }
    return __extends(t, e), t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var t = this;
        t.BandTap(t.btnGetReward, t.GetReward), t.UpdataView()
    }, t.prototype.SetData = function(e) {
        this.sd = e
    }, t.prototype.UpdataView = function() {
        var e = this;
        if (null != e.sd) {
            if (e.des.text = e.sd.des, e.rewardIcon.source = e.sd.rewardIcon, e.icon.source = e.sd.icon, "money_png" == e.sd.rewardIcon) {
                e.rewardMode = 1;
                var t = MainData.role.lv;
                e.rewardValue = MainData.allSeeds.playerRanks[t].offlineMoney * e.sd.reward
            } else e.rewardMode = 0, e.rewardValue = e.sd.reward;
            e.rewardNum.gView.scaleX = .6, e.rewardNum.gView.scaleY = .6, e.rewardNum.text = GUtil.BigNumber(e.rewardValue), e.maxTaskRate = e.sd.count, e.UpdataCurrTaskRate(), e.currTaskRate > e.maxTaskRate && (e.currTaskRate = e.maxTaskRate), e.countNum.text = e.currTaskRate + "/" + e.maxTaskRate, e.countBar.width = e.currTaskRate / e.maxTaskRate * 196;
            var a = e.currTaskRate == e.maxTaskRate;
            e.locked.visible = !a, e.btnGetReward.visible = a, e.rewardNum.visible = a, e.rewardIcon.visible = a
        }
    }, t.prototype.UpdataCurrTaskRate = function() {
        var e = this;
        switch (e.sd.id) {
            case 1:
                e.currTaskRate = MainData.GetRefreshData("Task_1");
                break;
            case 2:
                e.currTaskRate = MainData.GetRefreshData("Task_2");
                break;
            case 3:
                e.currTaskRate = MainData.GetRefreshData("Task_3");
                break;
            case 4:
                e.currTaskRate = Math.floor((GUtil.SystemMillionSecond() - MainData.GetRefreshData("Task_4")) / 1e3);
                break;
            case 5:
                e.currTaskRate = MainData.GetRefreshData("Task_5")
        }
    }, t.prototype.GetReward = function() {
        var e = this;
        if (MainData.SetRefreshData("Task" + e.sd.id, 1), 0 == e.rewardMode) {
            MainData.role.star += e.rewardValue, platform.TaTrack("gem_use_or_gain", {
                useOrGain: 1,
                gemNum: e.rewardValue,
                gemtype: 15,
                gemdetails: -1
            });
            var a = !1;
            (2 == GameChannel || 4 == GameChannel) && (a = !0), UIPopDialog.ShowOKOnly("获得" + e.rewardValue + "钻石", "Stars_png", function() {}, this, !1, a)
        } else MainData.gbattle.ui.FlyMoneys(MainData.gbattle.width / 2, MainData.gbattle.height / 2 - 220, e.rewardValue);
        t.uiTask.UpdataTaskCell()
    }, t.prototype.CloseUI = function() {
        this.RemoveUI()
    }, t.uiTask = null, t
}(UIBase);
__reflect(UITask_Cell.prototype, "UITask_Cell");
var UITask = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.taskCells = [], t.achieveCells = [], t.isTask = !1, t.isAchieve = !1, t
    }
    return __extends(t, e), t.Show = function() {
        var e = new t;
        return e.AddUI(), e.LockTime(), UIPopReward.uiTask = e, UITask_Cell.uiTask = e, e
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        var a = this;
        switch (a.BandTap(a.btnBack, a.CloseUI), a.BandTap(a.btnPage1, a.ShowPage1), a.BandTap(a.btnPage2, a.ShowPage2), a.UpdataTaskCell(), a.UpdataAchieveCell(), t.ShowTaskDoc() ? a.ShowPage1() : t.ShowAchieveDoc() ? a.ShowPage2() : t.TaskComplete() ? a.ShowPage2() : a.ShowPage1(), GameChannel) {
            case 2:
            case 4:
                ADSDK.uiADTop = a.uiAD, ADSDK.ShowNative(28, ADSDK.bannerChangeNative_id, ADSDK.Native_2);
                break;
            case 7:
            case 6:
            case 5:
            case 8:
            case 9:
            case 10:
            case 3:
                a.gAchieveView.top = 21, a.gTaskView.top = 21
        }
    }, t.prototype.UpdataTaskCell = function() {
        for (var e = this, a = 0; a < e.taskCells.length; a++) e.taskCells[a].CloseUI();
        for (var n = GUtil.GetDiscLength(MainData.allSeeds.task), a = 1; n >= a; a++) {
            var i = MainData.allSeeds.task[a],
                o = new UITask_Cell;
            o.SetData(i);
            var r = 0 == MainData.GetRefreshData("Task" + a);
            r && (e.gCells1.addChild(o), e.taskCells.push(o))
        }
        e.taskDot.visible = t.ShowTaskDoc()
    }, t.ShowTaskDoc = function() {
        for (var e = GUtil.GetDiscLength(MainData.allSeeds.task), t = 1; e >= t; t++) {
            var a = MainData.allSeeds.task[t];
            if (1 != MainData.GetRefreshData("Task" + t))
                if (4 != t) {
                    if (a.count <= MainData.GetRefreshData("Task_" + t)) return !0
                } else if (a.count <= Math.floor((GUtil.SystemMillionSecond() - MainData.GetRefreshData("Task_4")) / 1e3)) return !0
        }
        return !1
    }, t.ShowAchieveDoc = function() {
        for (var e = GUtil.GetDiscLength(MainData.allSeeds.achieve), t = 1; e >= t; t++) {
            var a = MainData.allSeeds.achieve[t];
            if (-1 != MainData.GetCustomData("Achieve" + t) && a.count1 <= MainData.GetCustomData("Achieve" + t)) return !0
        }
        return !1
    }, t.TaskComplete = function() {
        for (var e = GUtil.GetDiscLength(MainData.allSeeds.task), t = 1; e >= t; t++)
            if (1 != MainData.GetRefreshData("Task" + t)) return !1;
        return !0
    }, t.prototype.UpdataAchieveCell = function() {
        for (var e = this, a = 0; a < e.achieveCells.length; a++) e.achieveCells[a].CloseUI();
        for (var n = GUtil.GetDiscLength(MainData.allSeeds.achieve), i = 0, a = 1; n >= a; a++) {
            var o = MainData.allSeeds.achieve[a],
                r = new UIAchieve_Cell;
            r.SetData(o);
            var s = -1 == MainData.GetCustomData("Achieve" + a);
            o.type == i || s || (i = o.type, e.gCells2.addChild(r), e.achieveCells.push(r))
        }
        e.achieveDot.visible = t.ShowAchieveDoc()
    }, t.prototype.CloseUI = function() {
        for (var e = this, t = 0; t < e.taskCells.length; t++) e.taskCells[t].CloseUI();
        for (var t = 0; t < e.achieveCells.length; t++) e.achieveCells[t].CloseUI();
        this.uiAD.Clear(), this.RemoveUI()
    }, t.prototype.ShowPage1 = function() {
        var e = this;
        e.btnPage1.source = "Page sign_png", e.btnPage2.source = "Page-sign-off_png", e.gTaskView.visible = !0, e.gAchieveView.visible = !1
    }, t.prototype.ShowPage2 = function() {
        var e = this;
        e.btnPage1.source = "Page-sign-off_png", e.btnPage2.source = "Page sign_png", e.gTaskView.visible = !1, e.gAchieveView.visible = !0
    }, t
}(UIBase);
__reflect(UITask.prototype, "UITask");