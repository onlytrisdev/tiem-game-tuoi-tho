class CharSelection extends Screen {
    constructor() {
        super();
    }

    enter() {
        super.enter();

        this.view = new AWClip(charselection_view, "view");
        this.addMC(this.view);

        this.outfitId = 1;
        this.outfitName = get_outfit_name_by_id(this.outfitId);
        this.outfitPrice = 0;
        this.canPlay = true;

        if (!soundmanager.sound["music_menu"].playing())
            soundmanager.playAndFade("music_menu", 0, 1, 0.5, false);

        this.view.getChildByLayerName("center").getChildByLayerName("title").gotoAndStop("notch");

        this.addButton("select", this.view.getChildByLayerName("center").getChildByLayerName("selectbtn"), () => {
            if (!this.canPlay) {
                this.buttons["select"].clickSound = "click_no";
                return;
            }
            if (this.outfitPrice > 0) {//if it's not free, charge the outfit
                this.buttons["select"].clickSound = "click_buy";
                SAVE_DATA.removeGold(this.outfitPrice);
            } else {
                this.buttons["select"].clickSound = "click";
            }
            this.updateGold();
            //this.view.getChildByLayerName("transition").gotoAndPlay("out");
            this.view.interactiveChildren = false;

            SAVE_DATA.setCostumeUse(this.outfitName);


            soundmanager.fadeTo("music_menu", 0.1, 0.5);

            soundmanager.play("bonus");

            this.view.getChildByLayerName("transition").gotoAndPlay("out");

            this.view.getChildByLayerName("bonus").getChildByLayerName("container").gotoAndStop(this.outfitId - 1);
            this.view.getChildByLayerName("bonus").gotoAndPlay("in");

            let scoreMultiplyerText2 = new PIXI.Text(window.GetLocalisationTextWithNum("score", ""), { fontFamily: window.mainFont, fontSize: 64, fill: 0xFF4500, align: 'center'});
            scoreMultiplyerText2.anchor.set(0.5, 1);
            let scoreMult2 = new PIXI.Text(this.scoreMultiplyer.text, { fontFamily: window.mainFont, fontSize: 64, fill: 0xFF4500, align: 'center'});
            scoreMult2.anchor.set(0.5, 0);

            this.view.getChildByLayerName("bonus").getChildByLayerName("container").addChild(scoreMultiplyerText2);
            this.view.getChildByLayerName("bonus").getChildByLayerName("container").addChild(scoreMult2);
        });

        this.addButton("settings", this.view.getChildByLayerName("top_right").getChildByLayerName("settings"), () => {
            screenmanager.change(SettingsCostume);
        });

        this.buttons["select"].container.gotoAndStop("off");

        let scoreMultiplyerText = new PIXI.Text(window.GetLocalisationTextWithNum("score", ""), { fontFamily: window.mainFont, fontSize: 40, fill: 0xFF4500, align: 'center'});
        scoreMultiplyerText.anchor.set(0.5, 1);

        this.scoreMultiplyer = new PIXI.Text("x1", { fontFamily: window.mainFont, fontSize: 40, fill: 0xFF4500, align: 'center'});
        this.scoreMultiplyer.anchor.set(0.5, 0);

        this.view.getChildByLayerName("center").getChildByLayerName("perks").addChild(this.scoreMultiplyer);
        this.view.getChildByLayerName("center").getChildByLayerName("perks").addChild(scoreMultiplyerText);

        this.updateOutfits();

        this.view.getChildByLayerName("transition").gotoAndPlay("in");

        this.view.getChildByLayerName("transition").outFinished = () => {
           // analytics_manager.trackPlayAnalytics(game_locations.PLAY);
            screenmanager.change(Game, this.outfitId);//costume id
        };

        let size = 32;
        let l = window.language;
        if (l == "fr" || l == "de" || l == "pt" || l == "hu" || l == "ro" || l == "it" || l == "es" || l == "bg" || l == "da" || l == "tr" || l == "es-419" || l == "sv") size = 26;

        let costumeText = new PIXI.Text(window.GetLocalisationText("select_costume"), { fontFamily: window.mainFont, fontSize: size, fill: 0xFF4500, align: 'center', wordWrap: true, wordWrapWidth: 150});
        costumeText.anchor.set(0.5, 0.5);
        costumeText.position.y -= 5;

        this.view.getChildByLayerName("center").getChildByLayerName("title").addChild(costumeText);

        //orientationCheck.SetScene(SettingsCostume);
        //analytics_manager.trackPlayAnalytics(game_locations.SHOP);
    }

    on_screen_resize(width, height) {
        this.alignAnchor(this.view, "bottom");
        this.alignAnchor(this.view, "top_right");
        this.alignAnchor(this.view, "center");
        this.alignAnchor(this.view, "top");
        this.alignAnchor(this.view, "transition", "center");
        this.alignAnchor(this.view, "bonus", "center");

        this.scaleToFit(this.view.getChildByLayerName("center"), 0.99, false);
    }

    update(dt) {
        super.update(dt);
    }

    updateOutfits() {
        let isSelectedFree = false;
        this.updateGold();
        for (let i in OUTFITS) {
            let btnName = "craig_" + OUTFITS[i].id;
            let mc = this.view.getChildByLayerName("center").getChildByLayerName(btnName);
            this.addButton(btnName, mc, () => {
                this.outfitId = OUTFITS[i].id;
                this.outfitName = i;
                this.outfitPrice = OUTFITS[i].price;
                this.updateOutfits();
            });

            let goldMc = mc.getChildByLayerName("gold");
            setBitmapNumber(goldMc, OUTFITS[i].price);

            let isSelected = this.outfitId === OUTFITS[i].id;
            if (isSelected && (OUTFITS[i].price <= 0 || CHEATS.RICH)) {
                mc.gotoAndStop("free_selected");
                this.buttons[btnName].enable(true);
                isSelectedFree = true;
            } else if (isSelected && OUTFITS[i].price > 0 && SAVE_DATA.gold >= OUTFITS[i].price) {
                mc.gotoAndStop("selected");
                this.buttons[btnName].enable(true);
                isSelectedFree = false;
            } else if (isSelected && OUTFITS[i].price > 0 && SAVE_DATA.gold < OUTFITS[i].price) {
                mc.gotoAndStop("off_selected");
                this.buttons[btnName].enable(true);
                isSelectedFree = false;
            } else if (SAVE_DATA.gold >= OUTFITS[i].price && OUTFITS[i].price > 0) {
                mc.gotoAndStop("idle");
                this.buttons[btnName].enable(true);
            } else if (OUTFITS[i].price <= 0 || CHEATS.RICH) {
                mc.gotoAndStop("free");
                this.buttons[btnName].enable(true);
            } else {
                mc.gotoAndStop("off");
                this.buttons[btnName].enable(true);
            }
        }
        if (isSelectedFree) {
            this.buttons["select"].container.gotoAndStop("on_play");
            //this.buttons["select"].enable(true);
            this.canPlay = true;
        } else if (SAVE_DATA.gold < this.outfitPrice) {
            this.buttons["select"].container.gotoAndStop("off");
            //this.buttons["select"].enable(false);
            this.canPlay = false;
        } else {
            this.buttons["select"].container.gotoAndStop("on");
            //this.buttons["select"].enable(true);
            this.canPlay = true;
        }

        //this.view.getChildByLayerName("center").getChildByLayerName("perks").gotoAndStop(this.outfitId - 1);
        let mult = (this.outfitId * 0.5 + 0.5);
        this.scoreMultiplyer.text = "x" + (mult == 3.5 ? 4 : mult);
    }

    updateGold() {
        setBitmapNumber(this.view.getChildByLayerName("center").getChildByLayerName("gold"), SAVE_DATA.gold);
    }
}