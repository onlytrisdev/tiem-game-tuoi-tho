
//import { CustomInput } from "../libs/custom_input.js";
//import { Physics } from "../libs/physics.js";
//import { ScreenManager } from "../libs/screenmanager.js";
//import { SoundManager } from "../libs/soundmanager.js";
//import { SuperPool } from "../libs/superpool.js";
//import { update_swipes } from "../libs/swiper.js";
//import { SaveData } from "./save/save.js";
//import { MainMenu } from "./screens/mainmenu.js";
//import { MiddleLoader } from "./screens/middleloader.js";

window.DEBUG = false;
window.DESIGN_WIDTH = 640;  // xx
window.DESIGN_HEIGHT = 1136; // xx

window.FIXED_STEP = 1 / 60;  // xx const

window.paused = false;  // xx

// ----------------------------------------------------------------------------
// INITIALIZE APP
// ----------------------------------------------------------------------------

window.SAVE_DATA = {}; // xx
window.soundmanager = {}; // xx
window.superpool = {}; // xx
window.physics = {}; // xx
window.tweenmanager = {};
window.globalsignal = {};

PIXI.settings.MIPMAP_TEXTURES = PIXI.MIPMAP_MODES.OFF; //required by turner

window.app = {}; // xx

window.screenmanager = {}; // xx

window.custominput = {}; // xx

window.cnSdk = {};

const orientationCheck = new OrientationChecker(null, loadLocalisationAndFont);

function loadLocalisationAndFont() {
    var loader = PIXI.loader;
    loader.add('localisation', 'data/localisation.json');
    loader.add('config', 'data/config.json');
    loader.load(loadLocalisation);

    function loadLocalisation() {
        resources = loader.resources;
        window.localisation = resources.localisation.data;
        window.config = resources.config.data;
        window.VERSION = window.config.version;
        window.language = window.config.language;

        console.log("LANGUAGE: ", window.language);


        init();

        WebFont.load({
            active: OnWebFontLoaded,
            custom: {
                families: [
                    "FredBurger Black"
                ],
                urls: [
                    window.language != "ar" ? "fonts/fredburger.css" : "fonts/fredburger_arabic.css"
                ],
            }
        })

        function OnWebFontLoaded() {
            console.log("WEBFONT LOADED: ", window.language);
            window.mainFont = "FredBurger Black";
        }

        window.GetLocalisationText = function (name) {
            if (!(name in window.localisation)) return "UNDEFINED";
            if (!(window.language in window.localisation[name])) return window.localisation[name]["en"];
            return window.localisation[name][window.language];
        }

        window.GetLocalisationTextWithNum = function (name, number) {
            var text = window.GetLocalisationText(name);
            if (!text.includes("{num}")) return text;
            return text.replace("{num}", number);
        }
    }
}

function init() {
    //window.cnSdk = sdk;

    var ua = navigator.userAgent;
    let isDesktop = !/Mobi|Android|iP[ao]d|iPhone/i.test(ua) && (!/Mac/.test(ua) || !navigator.maxTouchPoints || navigator.maxTouchPoints <= 1);

    console.log("Desktop: " + isDesktop);

    function play(e) {//TODO: make a difference between closing CN Arcade's popups and resuming the update loop
        //console.log(e);
        soundmanager.setMasterVolume(1);
        paused = false;
    };

    function pause(e) {
        soundmanager.setMasterVolume(0);
        paused = true;
        globalsignal.emit(ge.CN_OVERSIONLAP_ACTIVE);
        globalsignal.emit(ge.PAUSE);
    };

    window.pauseResumeObj = { pause: pause, resume: play };

    //sdk.setPlayFunction(play.bind(this));
    //sdk.setPauseFunction(pause.bind(this));

    //console.log(sdk);

    achievements_manager.init();

    SAVE_DATA = new SaveData();
    SAVE_DATA.load();
    soundmanager = new SoundManager();
    superpool = new SuperPool();
    physics = new Physics();
    tweenmanager = new TweenManager();
    globalsignal = new Signal();

    //window["soundmanager"] = soundmanager;
    const scalar = window.innerHeight < 640 && window.innerWidth < 640 ? Math.min(window.devicePixelRatio, 2) : 1;
    const deviceWidth = window.innerWidth * scalar;
    const deviceHeight = window.innerHeight * scalar;
    const scale = deviceHeight / DESIGN_HEIGHT;

    var initialDesign = DESIGN_WIDTH;
    var multiplyWidth = 1.25;


    if (isDesktop) {
        DESIGN_WIDTH *= multiplyWidth;
    }

    app = new PIXI.Application({
        width: DESIGN_WIDTH,
        height: DESIGN_HEIGHT, //(isDesktop ? deviceHeight : DESIGN_HEIGHT),
        forceCanvas: true,
        resolution: 1.0
    });

    window.app.renderer.backgroundColor = 0x333333;
    window.app.view.style.height = "100%";
    window.app.view.style.width = (isDesktop ? "auto" : "100%");

    DESIGN_WIDTH = app.screen.width;
    DESIGN_HEIGHT = app.screen.height;

    document.body.appendChild(app.view);

    screenmanager = new ScreenManager(app.width, app.height);
    screenmanager.middleloaderscreen = MiddleLoader;
    screenmanager.middleloaderscreen.isDesktop = isDesktop;
    app.stage.addChild(screenmanager);
    screenmanager.load(MainMenu);

    custominput = new CustomInput();

    window.addEventListener('resize', resize);

    window.addEventListener("blur", pause);
    window.addEventListener("focus", play);
    document.addEventListener("visibilitychange", OnVisibilityChange);

    function OnVisibilityChange() {
        if (document.visibilityState == 'hidden') {
            pause();
        }
        else {
            if (orientationCheck.incorrectOrientation) { return; }
            play();
        }
    }

    function resize() {
        if (isDesktop) {
            app.stage.scale.x = multiplyWidth;
            app.stage.scale.y = 1;

            screenmanager.resize_screens(initialDesign, DESIGN_HEIGHT);
        }
        else {
            const parent = app.view.parentNode;

            app.stage.scale.x = 1;
            app.stage.scale.y = (parent.clientWidth / parent.clientHeight) / (DESIGN_WIDTH / DESIGN_HEIGHT);

            if (app.stage.scale.y > 1) {
                app.stage.scale.x = (parent.clientHeight / parent.clientWidth) / (DESIGN_HEIGHT / DESIGN_WIDTH);
                app.stage.scale.y = 1;
            }

            screenmanager.resize_screens(DESIGN_WIDTH / app.stage.scale.x, DESIGN_HEIGHT / app.stage.scale.y);
        }
    }

    resize();

    // ----------------------------------------------------------------------------
    // MAIN LOOP
    // ----------------------------------------------------------------------------
    let residual_delta_time = 0;
    let last_time = Date.now();
    let time_multiplier = 1;
    let render_counter = 0;

    function fixed_update(fixed_delta_time) {
        //console.log(app.screen.width + " : " + app.screen.height);
        screenmanager.update(fixed_delta_time);
    }

    function render_update(delta_time) {
        if (render_counter % 1 === 0) {
            app.render();
        }

        render_counter++;
    }

    function main_loop() {

        let actual_time = Date.now();
        let delta_time = Math.min(0.1, (actual_time - last_time) / 1000);

        residual_delta_time += delta_time;

        if (paused) { residual_delta_time = 0; }

        while (residual_delta_time > FIXED_STEP) {
            residual_delta_time -= FIXED_STEP;
            fixed_update(FIXED_STEP * time_multiplier);
            custominput.update(FIXED_STEP * time_multiplier);
        }

        last_time = actual_time;

        render_update(delta_time * time_multiplier);
        requestAnimationFrame(main_loop);
    };

    requestAnimationFrame(main_loop);
}
