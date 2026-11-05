//--------------------------------------------------------------------------------------------------------------------------------------------------------

var TitleLayer = cc.Layer.extend({
    howToNode: null,

    slideIn: null,
    slideOut: null,

    playButtonA: null,
    playButtonB: null,
    howToButton: null,
    backButton: null,

    ctor: function() {
        this._super();

        var background = new cc.Sprite(res.titleScreen);
        background.setPosition(gg.anchor.center);
        this.addChild(background);

        // Title Screen
        this.playButtonA = new ccui.Button("btn_playU.png", "btn_playD.png", "btn_playU.png", ccui.Widget.PLIST_TEXTURE);
        this.playButtonA.setPosition(cc.pAdd(gg.anchor.bot, cc.p(0, 150)));
        this.playButtonA.addTouchEventListener(this.onPlay, this);
        this.addChild(this.playButtonA);

        this.howToButton = new ccui.Button("btn_howToU.png", "btn_howToD.png", "btn_howToU.png", ccui.Widget.PLIST_TEXTURE);
        this.howToButton.setPosition(cc.pAdd(gg.anchor.bot, cc.p(0, 60)));
        this.howToButton.addTouchEventListener(this.onHowTo, this);
        this.addChild(this.howToButton);

        // How to Play
        this.howToNode = new cc.Node();
        this.addChild(this.howToNode);

        var howToPage = new cc.Sprite(res.howTo);
        howToPage.setPosition(gg.anchor.center);
        this.howToNode.addChild(howToPage);

        this.playButtonB = new ccui.Button("btn_playU.png", "btn_playD.png", "btn_playU.png", ccui.Widget.PLIST_TEXTURE);
        this.playButtonB.setPosition(cc.p(gg.screen.width - 170, 60));
        this.playButtonB.addTouchEventListener(this.onPlay, this);
        this.howToNode.addChild(this.playButtonB);

        this.backButton = new ccui.Button("ui_btnLeft.png", "ui_btnLeft.png", "ui_btnLeft.png", ccui.Widget.PLIST_TEXTURE);
        this.backButton.setAnchorPoint(0, 0.5);
        this.backButton.setPosition(gg.anchor.left);
        this.backButton.addTouchEventListener(this.onBack, this);
        this.howToNode.addChild(this.backButton);

        this.howToNode.setPosition(-gg.screen.width, 0);

        this.slideIn = cc.moveBy(0.25, gg.screen.width, 0);
        this.slideOut = cc.moveBy(0.25, -gg.screen.width, 0);

        gg.resetGame();

        // Fix for instances where button sounds are not triggered on first use
        // Call with muted volume then reset to 1
        this.runAction(cc.sequence(
            cc.callFunc(this.initSound, this),
            cc.delayTime(1),
            cc.callFunc(this.reenableSound, this)
        ));
    },

    initSound: function() {
        cc.audioEngine.setEffectsVolume(0);
        cc.audioEngine.playEffect("res/sfx/SFX_UI_Button.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_BG_Mushroom.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_BG_MusicStand.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_bg_Trumpet.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_BG_Leaves.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_BG_PaintBucket.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_BG_PaintTube.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_intro.mp3");
        cc.audioEngine.playEffect("res/sfx/SFx_Ninja_appear.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_Ninja_Poof.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_Ninja_Dialogue.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_Ninja_FoundPoof.mp3");
        cc.audioEngine.playEffect("res/sfx/SFX_Ninja_Jump3.mp3");

        cc.audioEngine.stopAllEffects();
    },

    reenableSound: function() {
        cc.audioEngine.setEffectsVolume(1);
    },

    onPlay: function(sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                cc.director.runScene(new GameplayScene());

                cc.audioEngine.playEffect("res/sfx/SFX_UI_Button.mp3");
                break;
        }
    },

    onHowTo: function(sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                this.howToNode.runAction(this.slideIn);
                this.toggleMenuButtons(false);
                this.toggleHowToButtons(true);

                cc.audioEngine.playEffect("res/sfx/SFX_UI_Button.mp3");
                break;
        }
    },

    onBack: function(sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                this.howToNode.runAction(this.slideOut);
                this.toggleMenuButtons(true);
                this.toggleHowToButtons(false);

                cc.audioEngine.playEffect("res/sfx/SFX_UI_Button.mp3");
                break;
        }
    },

    toggleMenuButtons: function(p_enabled) {
        this.playButtonA.enabled = p_enabled;
        this.howToButton.enabled = p_enabled;
    },

    toggleHowToButtons: function(p_enabled) {
        this.playButtonB.enabled = p_enabled;
        this.backButton.enabled = p_enabled;
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var TitleScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        cc.spriteFrameCache.addSpriteFrames("res/anim.plist");
        cc.spriteFrameCache.addSpriteFrames("res/mask.plist");
        cc.spriteFrameCache.addSpriteFrames(res.ui_plist);
        cc.spriteFrameCache.addSpriteFrames(res.fx_plist);
        cc.spriteFrameCache.addSpriteFrames(res.hotSpots_plist);


        cc.spriteFrameCache.addSpriteFrames(res.char0_batch1);
        cc.spriteFrameCache.addSpriteFrames(res.char0_batch2);
        cc.spriteFrameCache.addSpriteFrames(res.char1_batch1);
        cc.spriteFrameCache.addSpriteFrames(res.char1_batch2);
        cc.spriteFrameCache.addSpriteFrames(res.char2_batch1);
        cc.spriteFrameCache.addSpriteFrames(res.char2_batch2);

        this.addChild(new TitleLayer());
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------