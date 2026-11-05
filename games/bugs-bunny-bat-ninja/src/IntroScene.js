var IntroLayer = cc.Layer.extend({
    animTransitionTime: 0.5,
    ctor: function() {
        this._super();

        var drawNode = cc.DrawNode.create();
        drawNode.drawRect(
            cc.p(-5, -5),
            cc.p(gg.screen.width + 5, gg.screen.height + 5),
            cc.color(0, 0, 0, 160),
            0
        );
        this.addChild(drawNode);

        this.character = cc.Sprite.create("#ui_preBugs_0.png");
        this.character.setAnchorPoint(0.5, 0);
        this.character.setPosition(450, -gg.screen.height);
        this.addChild(this.character);

        var bubble = cc.Sprite.create("#ui_preBubble_0.png");
        bubble.setAnchorPoint(0.5, 1);
        bubble.setPosition(700, gg.screen.height);
        this.character.addChild(bubble);

        g_action.character.hide();

        this.runAction(cc.sequence(
            cc.callFunc(this.animCharIn, this),
            cc.delayTime(this.animTransitionTime),
            cc.callFunc(this.doIntroDialogue, this),
            cc.delayTime(3),
            cc.callFunc(this.animCharOut, this),
            cc.delayTime(this.animTransitionTime),
            cc.callFunc(this.startGame, this)
        ));
    },

    animCharIn: function() {
        this.character.runAction(cc.moveTo(this.animTransitionTime, cc.p(450, 0)));
    },

    animCharOut: function() {
        this.character.runAction(cc.moveTo(this.animTransitionTime, cc.p(450, -gg.screen.height)));
    },

    doIntroDialogue: function() {
        cc.audioEngine.playEffect("res/sfx/SFX_intro.mp3");
    },

    startGame: function() {
        g_gameplay.startLevel();

        this.removeFromParent();

        gg.gameplay.isFirstLevel = false;

        g_action.character.show();
    }
});