class Tutorial extends Screen {
    constructor() {
        super();
        this.page = 1;
    }
    enter() {
        super.enter();

        this.view = new AWClip(tutorial, "tutorial");
        this.addMC(this.view);
        this.gotoPage(0);

        this.addButton("prev", this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("button_prev"), () => {
            this.gotoPage(-1);
        });
        this.addButton("next", this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("button_next"), () => {
            this.gotoPage(1);
        });
        this.addButton("close", this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("button_close"), () => {
            screenmanager.close(this);
        });

        //this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("button_close").children[0].texture = PIXI.Texture.from('assets/tutorial_play_button.png');

        if (orientationCheck.desktop) {
            this.tutorialPagesChanged = [false, false, false];
            this.setDesktopTutorialForPage(1);
        }

        if (!SAVE_DATA.tutorial) {
            this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("button_close").attribs.visible = false;
        }

        let tutoText = new PIXI.Text(window.GetLocalisationText("tutorial"), { fontFamily: window.mainFont, fontSize: 48, fill: 0xFFFFFF, align: 'center', stroke: 'black', strokeThickness: 8 });
        tutoText.anchor.set(0.4, 0.7);
        this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("Layer 6").addChild(tutoText);

        function createSprite(location, pos, scale) {
            let sprite = PIXI.Sprite.from(location);

            sprite.x = pos.x;
            sprite.y = pos.y;
            sprite.anchor.set(0.5);
            sprite.scale.set(scale);

            return sprite;
        }

        this.playButton = createSprite('assets/tutorial_play_button.png', { x: 230.45, y: 226 }, 0.35);
        this.view.getChildByLayerName("center").getChildByLayerName("container").addChild(this.playButton);
        this.addButton("play", this.playButton, () => {
            screenmanager.close(this);
        });
        this.playButton.visible = false;

        this.playButton.tweenConfig = {
            growing: true,
            maxScale: 0.5,
            minScale: 0.33,
            rate: 0.4
        }
    }

    setAllKeysInConfig(layer, visibility, position, scale) {
        for (var i = 0; i < layer.keys.length; i++) {
            var data = layer.keys[i];
            data.visible = visibility;
            if (position != undefined) {
                if (position.x != undefined) data.transform[0] = position.x;
                if (position.y != undefined) data.transform[1] = position.y;
            }
            if (scale != undefined) {
                data.transform[2] = scale;
                data.transform[3] = scale;
            }
        }
        return layer.keys;
    }

    setDesktopTutorialPage1() {
        this.setAllKeysInConfig(this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("Layer 5").config.layers[0], false);
        var layer1Keys = this.setAllKeysInConfig(this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("Layer 5").config.layers[1], true, { x: 0 }, 1.3);

        var right = PIXI.Texture.from('assets/keyboard/keys_1.png');
        var left = PIXI.Texture.from('assets/keyboard/keys_3.png');
        layer1Keys[1].texture = right;
        layer1Keys[3].texture = left;
        this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("Layer 5").children[1].texture = left;
    }

    setDesktopTutorialPage2() {
        this.setAllKeysInConfig(this.view.getChildByLayerName("center").getChildByLayerName("container").childrenPool._tutorial_tutorial_2[0].config.layers[0], false);
        this.setAllKeysInConfig(this.view.getChildByLayerName("center").getChildByLayerName("container").childrenPool._tutorial_tutorial_2[0].config.layers[1], true, { y: -120 }, 1.4);

        var up = PIXI.Texture.from('assets/keyboard/keys_0.png');
        this.view.getChildByLayerName("center").getChildByLayerName("container").childrenPool._tutorial_tutorial_2[0].children[0].texture = up;
    }

    setDesktopTutorialPage3() {
        this.setAllKeysInConfig(this.view.getChildByLayerName("center").getChildByLayerName("container").childrenPool._tutorial_tutorial_3[0].config.layers[0], false);
        var layer1Keys = this.setAllKeysInConfig(this.view.getChildByLayerName("center").getChildByLayerName("container").childrenPool._tutorial_tutorial_3[0].config.layers[1], true, { x: 0 }, 1.3);

        var right = PIXI.Texture.from('assets/keyboard/keys_1.png');
        var left = PIXI.Texture.from('assets/keyboard/keys_3.png');
        var downAndRight = PIXI.Texture.from('assets/keyboard/keys_6.png');
        var downAndLeft = PIXI.Texture.from('assets/keyboard/keys_5.png');
        layer1Keys[1].texture = downAndRight;
        layer1Keys[2].texture = right;
        layer1Keys[3].texture = downAndLeft;
        layer1Keys[4].texture = left;

        this.view.getChildByLayerName("center").getChildByLayerName("container").childrenPool._tutorial_tutorial_3[0].children[0].texture = right;
    }

    setDesktopTutorialForPage(pageNb) {
        if (!orientationCheck.desktop || this.tutorialPagesChanged == undefined || this.tutorialPagesChanged[pageNb - 1]) return;
        this.tutorialPagesChanged[pageNb - 1] = true;

        switch (pageNb) {
            case 1:
                console.log("SETTING UP PAGE 1");
                this.setDesktopTutorialPage1();
                break;
            case 2:
                console.log("SETTING UP PAGE 2");
                this.setDesktopTutorialPage2();
                break;
            case 3:
                console.log("SETTING UP PAGE 3");
                this.setDesktopTutorialPage3();
                break;
        }
    }

    gotoPage(page) {
        this.page += page;
        if (this.page < 1) this.page = 1;
        if (this.page > 3) this.page = 3;
        if (this.playButton) {
            if (this.page == 3 && this.playButton.visible == false) {
                this.playButton.visible = true;
            }
            else if (this.page != 3 && this.playButton.visible == true) {
                this.playButton.visible = false;
            }
        }
        this.view.getChildByLayerName("center").getChildByLayerName("container").gotoAndStop("_" + this.page);

        this.setDesktopTutorialForPage(this.page);
        
        if (this.page === 3 && !SAVE_DATA.tutorial) {
            SAVE_DATA.tutorial = true;
            SAVE_DATA.setSaveDataTutorial();
        }
        if (SAVE_DATA.tutorial) {
            this.view.getChildByLayerName("center").getChildByLayerName("container").getChildByLayerName("button_close").attribs.visible = true;
        }
    }

    on_screen_resize(width, height) {
        this.alignAnchor(this.view, "center");
    }

    update(dt) {
        super.update(dt);

        if (this.playButton && this.playButton.visible == true) {
            if (this.playButton.tweenConfig.growing == true) {
                this.playButton.scale.set(this.playButton.scale.x + this.playButton.tweenConfig.rate * dt);

                if (this.playButton.scale.x > this.playButton.tweenConfig.maxScale) {
                    this.playButton.tweenConfig.growing = false;
                }
            }
            else {
                this.playButton.scale.set(this.playButton.scale.x - this.playButton.tweenConfig.rate * dt);

                if (this.playButton.scale.x < this.playButton.tweenConfig.minScale) {
                    this.playButton.tweenConfig.growing = true;
                }
            }
        }
    }
}