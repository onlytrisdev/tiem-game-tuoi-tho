class MainMenu extends Screen {
    constructor() {
        super();
    }

    enter() {
        super.enter();

        update_sound();

        if (!soundmanager.sound["music_menu"].playing())
            soundmanager.playAndFade("music_menu", 0, 1, 0.5, false);

        this.view = new AWClip(mainmenu_view, "view");

        this.addMC(this.view);

        this.addButton("play", this.view.getChildByLayerName("button_play"), () => {
            this.view.getChildByLayerName("transition").gotoAndPlay("out");
            this.view.interactiveChildren = false;
        });
       
        this.addButton("settings", this.view.getChildByLayerName("top_right").getChildByLayerName("settings"), () => {
            screenmanager.change(SettingsMain);
        });

        let highscoreText = new PIXI.Text(window.GetLocalisationTextWithNum("high_score", SAVE_DATA.highscore), { fontFamily: window.mainFont, fontSize: 24, fill: 0xffffff, align: 'center', stroke: 'black', strokeThickness: 6 });
        highscoreText.anchor.set(0.6, 1);

        this.view.getChildByLayerName("button_play").getChildByLayerName("highscore").addChild(highscoreText);

        let highscore = this.view.getChildByLayerName("button_play").getChildByLayerName("highscore").getChildByLayerName("highscore");
        //if (SAVE_DATA.highscore < 1) highscore.visible = false;

        highscore.attribs.visible = false;

        this.view.getChildByLayerName("transition").gotoAndPlay("in");

        this.view.getChildByLayerName("transition").outFinished = () => {
            screenmanager.change(CharSelection);
        };

        orientationCheck.SetGame(window.pauseResumeObj);
        //orientationCheck.SetScene(SettingsMain);

        function createSprite(location, plus, scale) {
            let cnLogo = PIXI.Sprite.from(location);
            cnLogo.scale.set(scale);
            cnLogo.anchor.set(0.5, 0.5);

            cnLogo.x += 220 * (plus ? 1 : -1);
            cnLogo.y -= 121.6;

            return cnLogo;
        }

        this.view.getChildByLayerName("button_play").addChild(createSprite('assets/cn_logo.png', false, 0.7));
        this.view.getChildByLayerName("button_play").addChild(createSprite('assets/cotc_logo_small.png', true, 1.4));

        let logo = new PIXI.Sprite(resources.logo.texture);
        logo.anchor.set(0.5);
        logo.y -= 100;

        this.view.getChildByLayerName("top").addChild(logo);
    }

    on_screen_resize(width, height) {
        console.log("GOT HERE");
        this.alignAnchor(this.view, "bottom");
        this.alignAnchor(this.view, "bottom_button", "bottom");
        this.alignAnchor(this.view, "top_right");
        this.alignAnchor(this.view, "center");
        this.alignAnchor(this.view, "top");
        this.alignAnchor(this.view, "transition", "center");
        let ratio = width / height;

        let iphone = {
            ratio: 0.46,
            logo: { x: width * 0.5, y: height * 0.03, scale: 1 },
            characters: { x: width * 0.5, y: height * 0.69, scale: 1.3 },
            boss: { x: width * 0.45, y: height * 0.68, scale: 1.1 },
            button_play: { x: width * 0.5, y: height * 1, scale: 1 },
            background: { x: width * 0.5, y: height * 1, scale: 1.3 },
        };
        let ipad = {
            ratio: 0.75,
            logo: { x: width * 0.5, y: height * -0.03, scale: 1 },
            characters: { x: width * 0.5, y: height * 0.67, scale: 1 },
            boss: { x: width * 0.5, y: height * 0.68, scale: 1.05 },
            button_play: { x: width * 0.5, y: height * 1, scale: 1 },
            background: { x: width * 0.5, y: height * 1, scale: 1 },
        }

        let refRatio = (ipad.ratio - ratio) / (ipad.ratio - iphone.ratio);

        this.repositionAsset(this.view.getChildByLayerName("characters"), iphone.characters, ipad.characters, refRatio);
        //this.repositionAsset(this.view.getChildByLayerName("logo"), iphone.logo, ipad.logo, refRatio);
        this.repositionAsset(this.view.getChildByLayerName("button_play"), iphone.button_play, ipad.button_play, refRatio);
        this.repositionAsset(this.view.getChildByLayerName("background"), iphone.background, ipad.background, refRatio);
        this.repositionAsset(this.view.getChildByLayerName("boss"), iphone.boss, ipad.boss, refRatio);

        //this.view.getChildByLayerName("background").getChildByLayerName("background_x").visible = false;

        if (this.view.getChildByLayerName("background").getChildByLayerName("background_x").width * 0.69 < app.screen.width) {
            this.view.getChildByLayerName("background").scale.set(app.screen.width / (this.view.getChildByLayerName("background").getChildByLayerName("background_x").width * 0.69), this.view.getChildByLayerName("background").scale.y);
        }
    }

    repositionAsset(asset, iphone, ipad, refRatio) {
        asset.attribs.x = iphone.x + (ipad.x - iphone.x) * (1 - refRatio);
        asset.attribs.y = iphone.y + (ipad.y - iphone.y) * (1 - refRatio);
        if ((iphone.scale + (ipad.scale - iphone.scale) * (1 - refRatio)) <= 1) {
            asset.scale.set(1);
        }
        else {
            asset.scale.set(iphone.scale + (ipad.scale - iphone.scale) * (1 - refRatio));
        }
    }
}