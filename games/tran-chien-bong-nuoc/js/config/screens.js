//import { ASSET_ID } from "./assets.js";

window.SCREENS = {
    /* example: {
        atlas: [], //atlasses to load
        load_sound: true, //load sound
        load_save: true, //load save file
        update_parent: false, //update below screen
        hide_parent: false, //hides below screen
        popup: false, //is a popup?
        loader_asset: "name", //asset of the loader
        png: ["folder name"], //loose png files to be loaded
        overlay: false, //an overlay screen updates independently and is over other screens and has to be removed manually
        at_start: false, //create screen at start of the creation,
        class: "name", //in case the lowerCase id is not enough to parse when it's been created at start
    }, */
    mainmenu: {
        atlas: ["mainmenu", "charselection", "gameplay", "popups"],
        load_sound: true,
        loader_asset: ASSET_ID.PRELOADER
    },
    settingsmain: {
        popup: true,
    },
    settingscostume: {
        popup: true,
    },
    settingsgameplay: {
        popup: true,
    },
    summary: {
        popup: true,
    },
    tutorial: {
        popup: true,
    },
    /* sounddebug: {
        class: "SoundDebug",
        overlay: true,
        at_start: true
    } */

}

window.SCREENS_ATLASSES_DATA = {};
window.SCREENS_STATIC_ATLASSES = [].concat(SCREENS.mainmenu.atlas);