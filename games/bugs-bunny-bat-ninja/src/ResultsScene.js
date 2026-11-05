//--------------------------------------------------------------------------------------------------------------------------------------------------------

var ResultsLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var fontScale = 0.7;

        var background = new cc.Sprite("res/gameScreen_0.png");
        background.setPosition(gg.anchor.center);
        this.addChild(background);

        var panel = new cc.Sprite(res.resultScreen);
        panel.setPosition(gg.screen.center.x, gg.screen.center.y);
        this.addChild(panel);

        var daysPlayedLabel = new cc.LabelBMFont("" + gg.gameplay.level, res.score2_fnt);
        daysPlayedLabel.setScale(fontScale);
        daysPlayedLabel.setPosition(799, 455);
        this.addChild(daysPlayedLabel);

        var lizardsCaughtLabel = new cc.LabelBMFont("" + gg.gameplay.totalCounter, res.score2_fnt);
        lizardsCaughtLabel.setScale(fontScale);
        lizardsCaughtLabel.setPosition(799, 405);
        this.addChild(lizardsCaughtLabel);

        var totalScore = gg.gameplay.totalCounter * (gg.gameplay.level);
        var totalScoreLabel = new cc.LabelBMFont("" + totalScore, res.score2_fnt);
        totalScoreLabel.setScale(fontScale);
        totalScoreLabel.setPosition(799, 345);
        this.addChild(totalScoreLabel);

        var newHighScore = false;
        var highScore = cc.sys.localStorage.getItem(gg.highScore);
        if (highScore === null || totalScore > highScore) {
            highScore = totalScore;

            if (totalScore > 0) {
                newHighScore = true;
                cc.sys.localStorage.setItem(gg.highScore, totalScore);
            }
        }

        var highScoreLabel = new cc.LabelBMFont("" + highScore, res.score2_fnt);
        highScoreLabel.setScale(fontScale);
        highScoreLabel.setPosition(799, 285); //325
        this.addChild(highScoreLabel);

        if (newHighScore) {
            var newIcon = new cc.Sprite("#ui_newRecord.png");
            newIcon.setPosition(highScoreLabel.x + 170, highScoreLabel.y - 20);
            this.addChild(newIcon);
        }

        var replayButton = new cc.MenuItemImage(
            "#btn_playAgainU.png",
            "#btn_playAgainD.png",
            this.replayGame,
            this);

        var replayMenu = new cc.Menu(replayButton);
        replayMenu.x = gg.screen.center.x - 50;
        replayMenu.y = gg.screen.center.y - 200;
        this.addChild(replayMenu, 1);
    },

    replayGame: function() {
        cc.audioEngine.playEffect("res/sfx/SFX_UI_Button.mp3");

        gg.resetGame();
        cc.director.runScene(new GameplayScene());
    }

});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var ResultsScene = cc.Scene.extend({ 
    onEnter: function() { 
        this._super();

        if (gg.onMobile) {
            window.location = 'cnwap://showad';
        } else if (typeof showAd === 'function') {
            showAd();
        }

        this.addChild(new ResultsLayer());

        gg.isFirstScene = true;
    
}
	
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------