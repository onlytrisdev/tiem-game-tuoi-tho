class SettingsMain extends Screen {
    constructor() {
        super();
    }
    enter() {
        super.enter();

        this.view = new AWClip(popups, "settings_main_pop");
        this.addMC(this.view);

        this.addMusicButton("music", this.view.getChildByLayerName("center").getChildByLayerName("music"));

        this.addSfxButton("sfx", this.view.getChildByLayerName("center").getChildByLayerName("sfx"));

        this.addButton("play", this.view.getChildByLayerName("center").getChildByLayerName("play"), () => {
            screenmanager.close(this);
        });

        setBitmapNumber(this.view.getChildByLayerName("center").getChildByLayerName("version").getChildByLayerName("score"), window.VERSION);
        this.view.getChildByLayerName("center").getChildByLayerName("version").getChildByLayerName("score").attribs.visible = false;
        let versionText = new PIXI.Text("v " + window.VERSION, { fontFamily: window.mainFont, fontSize: 18, fill: 0xffffff, align: 'center', stroke: 'black', strokeThickness: 6 });
        versionText.anchor.set(0.5, 1);
        this.view.getChildByLayerName("center").getChildByLayerName("version").addChild(versionText);
    }

    on_screen_resize(width, height) {
        this.alignAnchor(this.view, "center");
        this.alignAnchor(this.view, "transition", "center");
    }
}