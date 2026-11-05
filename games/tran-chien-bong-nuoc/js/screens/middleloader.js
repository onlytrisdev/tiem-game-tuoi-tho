//import { collect_atlasses_data, destroy_all_textures, destroy_specific_atlas, get_sound_files_qty, load_atlasses, load_png, load_preloader, need_to_load_atlas, need_to_load_files, need_to_load_png } from "../../libs/misc.js";
//import { Screen } from "../../libs/screenmanager.js";
//import { get_asset, get_asset_atlass_name, update_loader } from "../config/assets.js";
//import { SCREENS } from "../config/screens.js";
//import { screenmanager, soundmanager } from "../main.js";

class MiddleLoader extends Screen {
    constructor() {
        super();

    }

    enter(...args) {

        destroy_all_textures();

        super.enter();

        this.arguments = args;
        this.targetFrame = 0;
        this.currentFrame = 0;
        this.barSpeed = 150;
        this.outStart = false;
        this.outEnd = false;

        this.totalFiles = 0;
        this.loadedFiles = 0;

        this.loader = new PIXI.Loader();
        this.loader.reset();

        this.loader.add('logo', 'assets/names/title_' + window.language + '.png');
        this.loader.onComplete.once(() => {
            resources = this.loader.resources;
            });

        this.nextScreenName = this.arguments[0].name.toLowerCase();
        this.view = null;

        if (SCREENS[this.nextScreenName].loader_asset) {
            load_preloader(this, get_asset_atlass_name(SCREENS[this.nextScreenName].loader_asset), this.startLoadingAssets.bind(this));
        } else {
            this.startLoadingAssets();
        }
    }

    startLoadingAssets() {
        if (SCREENS[this.nextScreenName].loader_asset && !this.view && need_to_load_files(this.nextScreenName)) {
            this.view = get_asset(SCREENS[this.nextScreenName].loader_asset);
            let mask = this.view.getChildByLayerName("bottom").getChildByLayerName("bar").getChildByLayerName("mask");
            if (mask) {
                this.view.getChildByLayerName("bottom").getChildByLayerName("bar").getChildByLayerName("bar").mask = mask;
            } else {
                console.log("no mask in loading asset");
            }
            this.addMC(this.view);
            this.reposition_anchors(screenmanager.last_width, screenmanager.last_height);

            let ver = this.view.getChildByLayerName("bottom_right");
            if (ver) ver = ver.getChildByLayerName("version");
            if (ver) ver = ver.getChildByLayerName("version");
            if (ver) ver.text = "" + VERSION;

        }
        if (SCREENS[this.nextScreenName].load_sound && !soundmanager.soundsLoaded) {
            this.totalFiles += get_sound_files_qty();
            soundmanager.load(() => {
                this.loadedFiles++;
            });
        }

        if (need_to_load_atlas(this.nextScreenName)) {
            load_atlasses(this, this.nextScreenName);
        }

        if (need_to_load_png(this.nextScreenName)) {
            load_png(this, this.nextScreenName);
        }

        if (need_to_load_atlas(this.nextScreenName) || need_to_load_png(this.nextScreenName)) {
            this.loader.onProgress.add(() => {
                this.loadedFiles++;
            });
            this.loader.load((loader) => {
                collect_atlasses_data(loader.resources);
                this.loader.destroy();
                this.loader = null;
            });
        }

        if (this.totalFiles === 0) {//HACK to prevent NaN result on division
            this.totalFiles = 1;
            this.loadedFiles = 1;
            this.barSpeed = 10000000;
        }
    }

    on_screen_resize(width, height) {
        if (!this.view) return;

        let bottom = this.view.getChildByLayerName("bottom");
        if (this.view.getChildByLayerName("top")) this.alignAnchor(this.view, "top");
        if (this.view.getChildByLayerName("center")) this.alignAnchor(this.view, "center");
        if (bottom) this.alignAnchor(this.view, "bottom");
        if (this.view.getChildByLayerName("bottom_right")) this.alignAnchor(this.view, "bottom_right");
        if (this.view.getChildByLayerName("transition")) this.alignAnchor(this.view, "transition", "center");

        if (bottom && bottom.getChildByLayerName("background") && !orientationCheck.desktop) {
            this.scaleToFit(bottom.getChildByLayerName("background"));
        }
    }

    update(dt) {
        super.update(dt);

        this.targetFrame = Math.floor((this.loadedFiles / this.totalFiles) * 100);
        this.currentFrame = Math.floor(Math.min(this.currentFrame + (dt * this.barSpeed), this.targetFrame));

        update_loader(SCREENS[this.nextScreenName].loader_asset, this.view, this.currentFrame,
            () => {
                let nextScreenType = this.arguments[0];
                this.arguments.shift();
                screenmanager.change(nextScreenType, ...this.arguments);
            }
        );
    }

    dispose() {
        super.dispose();
        destroy_specific_atlas(get_asset_atlass_name(SCREENS[this.nextScreenName].loader_asset));
    }
}