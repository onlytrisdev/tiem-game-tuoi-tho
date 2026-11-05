
import { InstantInput } from "../libs/instant_input.js";
import { update_sound } from "../libs/misc.js";
import { ScreenManager } from "../libs/screenmanager.js";
import { SoundManager } from "../libs/soundmanager.js";
import { TweenManager } from "../libs/tween_manager.js";
import { MainTransition } from "./misc/main_transition.js";
import { SaveData } from "./save/save.js";
import { Boot } from "./screens/boot.js";
import { MiddleLoader } from "./screens/middleloader.js";
import { SoundDebug } from "./screens/sounddebug.js";

export const DEBUG = false;
export const DESIGN_WIDTH = 1280;
export const DESIGN_HEIGHT = 720;
export const FIXED_STEP = 1 / 60;
let landscape = true;
let soundTimer;
// ----------------------------------------------------------------------------
// LOCALIZATION
// ----------------------------------------------------------------------------
let LOCALE = null;
fetch("js/config/locale.json")
    .then(response => response.json())
    .then(json => LOCALE = json);
export function get_lang_text(key) {
    return LOCALE[key][window.lang];
}
export function set_localized_string(key, tf) {
    tf.text = get_lang_text(key);
    tf.updateText();
    tf.y = -tf.height / 2;
}

// ----------------------------------------------------------------------------
// INITIALIZE APP
// ----------------------------------------------------------------------------

export const INPUT = new InstantInput();
export const SAVE_DATA = new SaveData();
export const tweenmanager = new TweenManager();

SAVE_DATA.load();

export const soundmanager = new SoundManager();
update_sound();
window.soundmanager = soundmanager;

export const app = new PIXI.Application({
    autoResize: false,
    width: DESIGN_WIDTH,
    height: DESIGN_HEIGHT,
    resolution: 1,
    backgroundColor: 0x000000,
    backgroundAlpha: false,
    autoStart: false,
    /* antialias: false,
    forceFXAA: false, */
    clearBeforeRender: true,
    legacy: true,
});

document.body.appendChild(app.view);

export const screenmanager = new ScreenManager(DESIGN_WIDTH, DESIGN_HEIGHT);
screenmanager.middleloaderscreen = MiddleLoader;
app.stage.addChild(screenmanager);
screenmanager.change(SoundDebug);
screenmanager.load(Boot);

window.addEventListener('resize', resize);

export const main_transition = new MainTransition();

function resize() {
    const parent = app.view.parentNode;

    app.stage.scale.x = 1;
    app.stage.scale.y = (parent.clientWidth / parent.clientHeight) / (DESIGN_WIDTH / DESIGN_HEIGHT);

    if (app.stage.scale.y > 1) {
        app.stage.scale.x = (parent.clientHeight / parent.clientWidth) / (DESIGN_HEIGHT / DESIGN_WIDTH);
        app.stage.scale.y = 1;
    }

    screenmanager.resize_screens(DESIGN_WIDTH / app.stage.scale.x, DESIGN_HEIGHT / app.stage.scale.y);

    main_transition.scale();

    landscape = (DESIGN_WIDTH / app.stage.scale.x > DESIGN_HEIGHT / app.stage.scale.y) ? true : false;

    // Get the modal
    var rotate_modal = document.getElementById("rotate_modal");
    rotate_modal.style.display = landscape ? "none" : "block";
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

    main_transition.update(fixed_delta_time);

    screenmanager.update(fixed_delta_time);
}

function render_update(delta_time) {
    if (render_counter % 1 === 0) {
        app.render();
    }

    render_counter++;
}

function main_loop() {

    soundmanager.setMasterVolume(1);
    clearTimeout(soundTimer);

    let actual_time = Date.now();
    let delta_time = Math.min(0.1, (actual_time - last_time) / 1000);

    //ROTATE MODAL
    if (landscape) {
        residual_delta_time += delta_time;
    }

    while (residual_delta_time > FIXED_STEP) {
        residual_delta_time -= FIXED_STEP;
        fixed_update(FIXED_STEP * time_multiplier);
    }

    last_time = actual_time;

    soundTimer = setTimeout(() => {
        soundmanager.setMasterVolume(0);
    }, FIXED_STEP * 2000)//1000*2

    render_update(delta_time * time_multiplier);
    requestAnimationFrame(main_loop);
};

requestAnimationFrame(main_loop);

setInterval(function () {
    window.focus();
}, 1000);

const init_loader_time = Date.now();
window.finish_loader = function () {
    const total_loader_time = (Date.now() - init_loader_time) / 1000;
    console.log("Download Time", total_loader_time);
}
