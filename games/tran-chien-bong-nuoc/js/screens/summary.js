class Summary extends Screen {
    constructor() {
        super();
    }
    enter() {
        super.enter();

        if (!soundmanager.sound["music_menu"].playing())
            soundmanager.playAndFade("music_menu", 0, 0.1, 1, false);

        this.view = new AWClip(summary, "summary");
        this.view.getChildByLayerName("transition").attribs.visible = false;
        this.view.getChildByLayerName("center").getChildByLayerName("container").gotoAndStop("ad");
        this.addMC(this.view);
        this.coinsDoubled = false;
        this.levelGold = SAVE_DATA.levelGold;

        this.addButton("ok", this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("ok"), () => {
            this.view.interactiveChildren = false;
            this.view.getChildByLayerName("transition").attribs.visible = true;
            this.view.getChildByLayerName("transition").gotoAndPlay("out");

            this.view.getChildByLayerName("transition").outFinished = () => {
                screenmanager.change(CharSelection);
            };
        });
        this.showValues();
    }

    showValues() {
        soundmanager.stop("music_menu");
        soundmanager.play("fanfarria_win");
        this.view.interactiveChildren = true;
        this.view.getChildByLayerName("center").getChildByLayerName("container").gotoAndStop("summary", true);

        let scoreText = new PIXI.Text(window.GetLocalisationTextWithNum("you_scored", SAVE_DATA.score), { fontFamily: window.mainFont, fontSize: 36, fill: 0xFF4500, align: 'center'});
        scoreText.position.y -= 125;
        scoreText.anchor.set(0.5, 0.5);
        this.view.getChildByLayerName("center").getChildByLayerName("container").addChild(scoreText);

        let coinText = new PIXI.Text(window.GetLocalisationTextWithNum("coins_collected", this.levelGold), { fontFamily: window.mainFont, fontSize: 36, fill: 0xFF4500, align: 'center'});
        coinText.position.y -= 25;
        coinText.anchor.set(0.5, 0.5);
        this.view.getChildByLayerName("center").getChildByLayerName("container").addChild(coinText);

        setBitmapNumber(this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("score"), SAVE_DATA.score);
        this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("score").attribs.visible = false;
        setBitmapNumber(this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("coins"), this.levelGold);
        this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("coins").attribs.visible = false;

        let x2 = this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("x2");
        if (!this.coinsDoubled && x2) {
            x2.attribs.visible = false;
        }

        let hScoreText = new PIXI.Text(window.GetLocalisationTextWithNum("high_score", (SAVE_DATA.highscore > SAVE_DATA.score ? SAVE_DATA.highscore : SAVE_DATA.score)), { fontFamily: window.mainFont, fontSize: 36, fill: 0xFF4500, align: 'center'});
        
        let newH = this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("new");
        if ((SAVE_DATA.score <= SAVE_DATA.highscore) && newH) {
            newH.attribs.visible = false;

            hScoreText.position.y += 75;
            hScoreText.anchor.set(0.5, 0.5);
            this.view.getChildByLayerName("center").getChildByLayerName("container").addChild(hScoreText);
        }
        else {
            let xExtra = 60;
            
            let newText = new PIXI.Text(window.GetLocalisationText("new"), { fontFamily: window.mainFont, fontSize: 36, fill: 0xFFFFFF, align: 'center'});
            newText.anchor.set(0.5, 0.5);

            if (newText.width > 100) {
               if (newText.width > 140) {
                   newH.scale.set(newText.width / 140);
                   this.setAllKeysInConfig(newH.parent.config.layers[3], {}, newH.scale.x);
                   xExtra *= newH.scale.x;
               }
                newText.scale.set(100 / newText.width);
            }

            if (hScoreText.width + xExtra >= 425) {
                let changeScale = 1;
                let change = hScoreText.width + xExtra - 420;
                if (change > 70) {
                    changeScale = 1 - (change - 70) / 500;
                    change = 70;
                }

                newH.x -= change;
                this.setAllKeysInConfig(newH.parent.config.layers[3], { x: newH.x }, newH.scale.x * changeScale);
                hScoreText.scale.set(changeScale);
            }

            newH.addChild(newText);

            hScoreText.position.x += xExtra + newH.x;
            hScoreText.position.y = newH.y;
            hScoreText.anchor.set(0, 0.5);
            this.view.getChildByLayerName("center").getChildByLayerName("container").addChild(hScoreText);
        }
        

        let okText = new PIXI.Text(window.GetLocalisationText("ok"), { fontFamily: window.mainFont, fontSize: 36, fill: 0xFFFFFF, align: 'center', stroke: 'black', strokeThickness: 6 });
        okText.anchor.set(0.5, 0.5);
        this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("ok").addChild(okText);


        //achievements_manager.setAchievementProgress(achievements_id.the_collector, SAVE_DATA.levelGold);

        //achievements_manager.setAchievementProgress(achievements_id.become_a_legend, SAVE_DATA.score);

        SAVE_DATA.finishSession();

        setBitmapNumber(this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("hiscore"), SAVE_DATA.highscore);
        this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("hiscore").attribs.visible = false;
    }

    setAllKeysInConfig(layer, position, scale) {
        for (var i = 0; i < layer.keys.length; i++) {
            var data = layer.keys[i];
            if (data.transform != undefined) {
                if (position != undefined) {
                    if (position.x != undefined) data.transform[0] = position.x;
                    if (position.y != undefined) data.transform[1] = position.y;
                }
                if (scale != undefined) {
                    data.transform[2] = scale;
                    data.transform[3] = scale;
                }
            }
        }
        return layer.keys;
    }

    on_screen_resize(width, height) {
        this.alignAnchor(this.view, "center");
    }
}