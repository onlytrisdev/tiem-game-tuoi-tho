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
 * LobbyScene
 * @author XuJian
 */
var HomeScene = /** @class */ (function (_super) {
    __extends(HomeScene, _super);
    function HomeScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 进入调用
         */
        _this.className = "HomeScene";
        return _this;
    }
    HomeScene.prototype.onEnter = function () {
        // this.version.text ="v.1.0.0";
        Audios.playMusic("res/sounds/bgm_main.mp3");
        Audios.setMusicVolume(0.3);
        this.animation_start.play(0, true);
        //开始
        this.start.on(Laya.Event.CLICK, this, this.onStarClick);
        //武器库
        this.weapon.on(Laya.Event.CLICK, this, this.onWeaponClick);
        //防具库
        this.armor.on(Laya.Event.CLICK, this, this.onArmorClick);
        //商城
        this.shop.on(Laya.Event.CLICK, this, this.onShopClick);
        //签到
        this.sign.on(Laya.Event.CLICK, this, this.onSignClick);
        //分享
        this.share.on(Laya.Event.CLICK, this, this.onShareClick);
        this.turntable.on(Laya.Event.CLICK, this, this.onTurntableClick);
        // this.btnHuafeiTip.on(Laya.Event.CLICK,this,this.onHuafeiTipClick);
        this.rank.on(Laya.Event.CLICK, this, this.onRankClick);
        //更多游戏
        this.more.on(Laya.Event.MOUSE_DOWN, this, this.onMoreClick);
        this.logo.skin = "scenes/home/home_logo.png";
        this.rank.removeSelf();
        this.share.removeSelf();
        this.shop.removeSelf();
        //设置
        this.setting.on(Laya.Event.CLICK, this, this.onSettingClick);
        /**检查更新*/
        // patform.onCheckForUpdate();
        var t = this;
        Laya.timer.once(0.25e3, this, function () {
            //离线奖励
            var diamond = t.offLineDiamond();
            if (diamond) {
                (new OnLineLayer(diamond)).popup();
            }
            else {
                var signDao = dao.find(SignDao);
                //签到
                if (signDao.canSign()) {
                    t.onSignClick();
                }
            }
        });
        Dispatcher.on(Events.GUIDE_CLOSE, this, this.onGuideClose);
        var guideDao = dao.find(GuideDao);
        if (guideDao.index === 0) {
            var guide = new Guide();
            guide.step(this);
            guide.popup();
        }
        var shareDao = dao.find(ShareDao);
        if (utils.onTheSameDay(shareDao.shareTime, new Date().getTime())) {
            shareDao.isFirstShare = false;
        }
        else {
            shareDao.isFirstShare = true;
            this.firstShareTip.visible = true;
        }
        this.pineapple.visible = false;
        this.akm.visible = false;
        var armor = dao.find(ArmorDao);
        if (!armor.hasHelmetByID(34)) {
            this.pineapple.visible = true;
            this.pineapple.on(Laya.Event.CLICK, this, this.onPineapple);
            this.git1.play(0, true);
        }
        var gunDao = dao.find(GunDao);
        if (!gunDao.hasWeaponById(19)) {
            this.akm.visible = true;
            this.akm.on(Laya.Event.CLICK, this, this.onAKM);
            this.git2.play(0, true);
        }
        // if(patform.isBaiDu){
        //     let pos = this.localToGlobal(Laya.Point.TEMP.setTo(this.recommendation1.x,this.recommendation1.y),true);
        //     this.buttonRecommendation1 = patform.createRecommendationButton(pos);
        //     pos = this.localToGlobal(Laya.Point.TEMP.setTo(this.recommendation2.x,this.recommendation2.y),true)
        //     this.buttonRecommendation2 = patform.createRecommendationButton(pos,"carousel");
        // }
        // if(patform.isWX){
        //      banner_manager.show();
        // }
    };
    HomeScene.prototype.onHuafeiTipClick = function () {
        // new ui.Layers.Common.HuafeiTipLayerUI().popup()
    };
    HomeScene.prototype.onPineapple = function () {
        this.onPineappleDone();
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.onPineappleDone));
    };
    HomeScene.prototype.onPineappleDone = function () {
        this.git1.stop();
        this.pineapple.visible = false;
        var armor = dao.find(ArmorDao);
        armor.pushHelmets(34);
        var pop = new ItemPop("helmets/helmet_pineapple.png", "pineapple");
        pop.closeHandler = Laya.Handler.create(this, function () {
            this.onArmorClick();
        });
        pop.popup();
    };
    HomeScene.prototype.onAKM = function () {
        this.onAKMDone();
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.onAKMDone));
    };
    HomeScene.prototype.onAKMDone = function () {
        this.git2.stop();
        this.akm.visible = true;
        this.akm.visible = false;
        var gunDao = dao.find(GunDao);
        gunDao.addRoleGuns({ id: 19, powerLevel: 0, shootLevel: 0, bulletLevel: 0 });
        var pop = new ItemPop("weapons/gold_AKM.png", "Gold AKM");
        pop.closeHandler = Laya.Handler.create(this, function () {
            this.onWeaponClick();
        });
        pop.popup();
    };
    HomeScene.prototype.onGuideClose = function () {
        var guideDao = dao.find(GuideDao);
        if (guideDao.index === 3) {
            var guide = new Guide();
            guide.step(this);
            guide.popup();
        }
        else if (guideDao.index === 7) {
            var guide = new Guide();
            guide.step(this);
            guide.popup();
        }
    };
    HomeScene.prototype.onExit = function () {
        // if(patform.isWX){
        //      banner_manager.hide();
        // }
        Dispatcher.off(Events.GUIDE_CLOSE, this, this.onGuideClose);
        if (this.buttonRecommendation1 && this.buttonRecommendation1.destroy) {
            this.buttonRecommendation1.destroy();
        }
        if (this.buttonRecommendation2 && this.buttonRecommendation2.destroy) {
            this.buttonRecommendation2.destroy();
        }
    };
    HomeScene.prototype.onStarClick = function () {
        var guideDao = dao.find(GuideDao);
        if (guideDao.index >= 11) {
            // ad_manager.video(YYG.TYPE.INTERSTITIAL, YYG.EventHandler.create(this, function () { 
            //     new SelectedLayer().popup(); 
            // }), 
            // YYG.EventHandler.create(this, function () { 
                new SelectedLayer().popup(); 
            // }));
        }
        else {
            new SelectedLayer().popup();
        }
    };
    HomeScene.prototype.onArmorClick = function () {
        // new ArmorLayer().popup();
        new DefineLayer().popup();
    };
    HomeScene.prototype.onWeaponClick = function () {
        new WeaponLayer().popup();
    };
    HomeScene.prototype.onShopClick = function () {
        new ShopLayer().popup();
    };
    HomeScene.prototype.onSignClick = function () {
        var guide = dao.find(GuideDao);
        if (guide.index < 12)
            return;
        new SignLayer().popup();
    };
    /**分享 */
    HomeScene.prototype.onShareClick = function () {
        // if(patform.isBaiDu || patform.isTouTiao){
        //     patform.shareAppMessage("","","",Laya.Handler.create(this,function(){
        //         let shareDao:ShareDao = dao.find(ShareDao);
        //         if(shareDao.isFirstShare){
        //             shareDao.shareTime = new Date().getTime();
        //             shareDao.isFirstShare = false;
        //             this.firstShareTip.visible = false;
        //             shareDao.save();
        //             (<DiamondDao>dao.find(DiamondDao)).addDiamonds(30);
        //         }
        //     }))
        // }else{
        //     let shareDao:ShareDao = dao.find(ShareDao);
        //     if(shareDao.isFirstShare){
        //         shareDao.shareTime = new Date().getTime();
        //         shareDao.isFirstShare = false;
        //         this.firstShareTip.visible = false;
        //         shareDao.save();
        //         (<DiamondDao>dao.find(DiamondDao)).addDiamonds(30);
        //     }
        //      patform.shareAppMessage();
        // }
    };
    HomeScene.prototype.onRankClick = function () {
        new RankLayer().popup();
    };
    HomeScene.prototype.onMoreClick = function () {
        platform.getInstance().navigate("HomeScene", "more");
    };
    HomeScene.prototype.onSettingClick = function () {
        (new SettingLayer()).popup();
    };
    /** 轮盘*/
    HomeScene.prototype.onTurntableClick = function () {
        (new TurntableLayer()).popup();
    };
    HomeScene.prototype.offLineDiamond = function () {
        var t = dao.find(LoginTimeDao).timeDifference();
        var diamond = null;
        if (t >= 3600) {
            diamond = .5 * Math.floor(t / 60);
            if (t > 28800) {
                diamond = 240;
            }
            diamond = Math.ceil(diamond);
        }
        return diamond;
    };
    return HomeScene;
}(ui.Scenes.HomeUI));
