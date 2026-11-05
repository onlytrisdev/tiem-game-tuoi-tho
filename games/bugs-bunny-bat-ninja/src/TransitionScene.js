var TransitionLayer = cc.Layer.extend({

    ctor: function() {
        this._super();

        var bg = cc.Sprite.create(res.preGame);
        bg.setPosition(gg.screen.center.x, gg.screen.center.y);
        this.addChild(bg);

        var bubble = new Balloon("#ui_preBubble_1.png");
        bubble.setPosition(1000, gg.screen.height / 2 + 150);
        this.addChild(bubble);

        var label = new BalloonLabel("Hãy bắt " + gg.gameplay.goal + " ninjas!", 1, bubble.width - 100);
        label.setPosition(bubble.x, bubble.y + 25);
        this.addChild(label);

        this.runAction(cc.sequence(
            cc.delayTime(4),
            cc.callFunc(this.goToNextLevel, this)
        ));
    },

    goToNextLevel: function() {
        cc.director.runScene(new cc.TransitionFade(1.0, new GameplayScene()));
    }
});

var TransitionScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        this.addChild(new TransitionLayer());
    }
});