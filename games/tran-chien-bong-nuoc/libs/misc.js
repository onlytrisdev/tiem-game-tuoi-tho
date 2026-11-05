//import { SCREENS, SCREENS_ATLASSES_DATA, SCREENS_STATIC_ATLASSES } from "../js/config/screens.js";
//import { SAVE_DATA, soundmanager } from "../js/main.js";

function get_query_params(qs = window.location.search) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

function lerp(v0, v1, t) {
    return (1 - t) * v0 + t * v1;
}

function get_random_element_from_array(array) {
    return array[Math.floor(array.length * Math.random())];
}

function get_sound_files_qty() {
    let qty = 0;
    for (let i = 0; i < window.manifest.length; i++) {
        let fileData = window.manifest[i];
        if (fileData.filetype === "mp3") {
            qty++
        }
    }
    return qty;
}

function destroy_all_textures() {

    console.log("clear texture cache");

    for (var i in PIXI.utils.BaseTextureCache) {
        if (can_destroy_texture_from_cache(i)) PIXI.utils.BaseTextureCache[i].destroy();
    }

    for (var i in PIXI.utils.TextureCache) {
        if (can_destroy_texture_from_cache(i)) PIXI.utils.TextureCache[i].destroy();
    }

}

function get_atlas_qty(name) {
    let qty = 0;
    for (let i = 0; i < window.manifest.length; i++) {
        let fileData = window.manifest[i];
        if (fileData.filetype === "json" && fileData.filename.indexOf(name) !== -1) {
            qty++
        }
    }
    return qty;
}

function load_atlasses(screen, screenName) {
    console.log("load atlas from screen " + screenName);
    let newFiles = 0;
    for (let i in SCREENS[screenName].atlas) {
        let atlas = SCREENS[screenName].atlas[i];
        if (!SCREENS_ATLASSES_DATA[screenName]) {
            let atlasQty = get_atlas_qty(atlas);
            for (let i = 0; i < atlasQty; i++) {
                screen.loader.add("assets/" + atlas + ".json");
                console.log("load atlas: " + atlas);
                newFiles += 2;
            }
        }
    }
    screen.totalFiles += newFiles;//pngs+json
}

function load_png(screen, screenName) {
    console.log("load png from screen " + screenName);
    let newFiles = 0;
    for (let i in SCREENS[screenName].png) {
        let png = SCREENS[screenName].png[i];
        if (!SCREENS_ATLASSES_DATA[png]) {
            for (let i = 0; i < window.manifest.length; i++) {
                let fileData = window.manifest[i];
                if (fileData.filetype === "png" && fileData.location.indexOf(png) !== -1) {
                    screen.loader.add(fileData.location);
                    console.log("load png: " + fileData.filename);
                    newFiles++;
                }
            }
        }
    }
    screen.totalFiles += newFiles;//pngs
}

function load_preloader(screen, atlasname, callback) {
    console.log("load preloader atlas " + atlasname);
    let atlasQty = get_atlas_qty(atlasname);
    for (let i = 0; i < atlasQty; i++) {
        screen.loader.add("assets/" + atlasname + ".json");
        console.log("load atlas: " + atlasname);
    }
    screen.totalFiles += Object.keys(screen.loader.resources).length * 2;//pngs+json

    screen.loader.load((loader) => {
        console.log("preloader asset loaded");
        collect_atlasses_data(loader.resources);
        screen.loader.reset();
        screen.totalFiles = 0;
        callback();
    });
}

function collect_atlasses_data(data) {
    for (let i in data) {
        if (data[i].extension === "json" && !SCREENS_ATLASSES_DATA[i]) {
            let name = i.split("/")[1].split(".")[0].split("-")[0];
            SCREENS_ATLASSES_DATA[name] = [];
            let cleanName = i.split(".")[0];
            SCREENS_ATLASSES_DATA[name].push(cleanName + ".json_image");
            SCREENS_ATLASSES_DATA[name].push(cleanName + ".png");
            for (let j in data[i].data.frames) {
                SCREENS_ATLASSES_DATA[name].push(j);
            }
        } else if (data[i].extension === "png" && !SCREENS_ATLASSES_DATA[i] && data[i].name.indexOf("loose") !== -1) {
            let name = i.split("/")[1].split(".")[0].split("-")[0];
            if (!SCREENS_ATLASSES_DATA[name]) SCREENS_ATLASSES_DATA[name] = [];
            SCREENS_ATLASSES_DATA[name].push(i);
        }
    }
    //console.log(SCREENS_ATLASSES_DATA);
}

function need_to_load_files(screenName) {
    let loadFiles = false;
    loadFiles = !soundmanager.soundsLoaded;
    if (need_to_load_atlas(screenName)) loadFiles = true;
    if (need_to_load_png(screenName)) loadFiles = true;
    console.log("need to load files: " + loadFiles);
    return loadFiles;
}

function need_to_load_atlas(screenName) {
    let loadAtlas = false;
    for (let i in SCREENS[screenName].atlas) {
        let atlas = SCREENS[screenName].atlas[i];
        if (!SCREENS_ATLASSES_DATA[screenName]) {
            let atlasQty = get_atlas_qty(atlas);
            for (let i = 0; i < atlasQty; i++) {
                loadAtlas = true;
                break;
            }
        }
    }
    console.log("need to load atlas: " + loadAtlas);
    return loadAtlas;
}

function need_to_load_png(screenName) {
    let loadPNG = false;
    for (let i in SCREENS[screenName].png) {
        let png = SCREENS[screenName].png[i];
        console.log("png: " + png);
        if (!SCREENS_ATLASSES_DATA[png]) {
            loadPNG = true;
            break;
        }
    }
    console.log("need to load loadPNG: " + loadPNG);
    return loadPNG;
}

function can_destroy_texture_from_cache(textureName) {
    //console.log(SCREENS_STATIC_ATLASSES);
    for (var j = 0; j < SCREENS_STATIC_ATLASSES.length; j++) {
        let altasName = SCREENS_STATIC_ATLASSES[j];
        if (!altasName) continue;
        let textureList = SCREENS_ATLASSES_DATA[altasName];
        //console.log(textureList);
        for (let k = 0; k < textureList.length; k++) {
            if (textureList[k] === textureName) {
                console.log("conserve texture: " + textureList[k]);
                return false;
            }
        }
    }
    return true;
}

function destroy_specific_atlas(name) {
    console.log("destroying specific texture: " + name);
    let textureList = SCREENS_ATLASSES_DATA[name];
    for (let k = 0; k < textureList.length; k++) {
        let textureName = textureList[k];
        if (PIXI.utils.BaseTextureCache[textureName] && can_destroy_texture_from_cache(textureName)) PIXI.utils.BaseTextureCache[textureName].destroy();
        if (PIXI.utils.TextureCache[textureName] && can_destroy_texture_from_cache(textureName)) PIXI.utils.TextureCache[textureName].destroy();
    }
}

function toggle_music() {
    SAVE_DATA.music = !SAVE_DATA.music;
    SAVE_DATA.save();
    update_music();
}

function toggle_sfx() {
    SAVE_DATA.sfx = !SAVE_DATA.sfx;
    SAVE_DATA.save();
    update_sfx();
}

function update_sound() {
    //soundmanager.mute(SAVE_DATA.mute);
    update_sfx();
    update_music();
}
function update_sfx() {
    soundmanager.muteSfx(SAVE_DATA.sfx);
}
function update_music() {
    soundmanager.muteMusic(SAVE_DATA.music);
}

function update_sound_button(view) {
    if (SAVE_DATA.mute) {
        view.getChildByLayerName("on").visible = false;
        view.getChildByLayerName("off").visible = true;
    } else {
        view.getChildByLayerName("on").visible = true;
        view.getChildByLayerName("off").visible = false;
    }
}

function update_sfx_button(view) {
    console.log(SAVE_DATA.sfx);
    if (SAVE_DATA.sfx) {
        view.getChildByLayerName("on").visible = false;
        view.getChildByLayerName("off").visible = true;
    } else {
        view.getChildByLayerName("on").visible = true;
        view.getChildByLayerName("off").visible = false;
    }
}

function update_music_button(view) {
    console.log(SAVE_DATA.music);
    if (SAVE_DATA.music) {
        view.getChildByLayerName("on").visible = false;
        view.getChildByLayerName("off").visible = true;
    } else {
        view.getChildByLayerName("on").visible = true;
        view.getChildByLayerName("off").visible = false;
    }
}

function get_instance(container, name) {
    let instance = container.getChildByName(name);
    if (!instance && container["getChildByLayerName"]) {
        instance = container.getChildByLayerName(name);
    }
    if (instance) {
        return instance;
    } else if (container) {
        let found;
        for (let i in container.children) {
            let child = container.children[i];
            //console.log(child.classname);
            found = get_instance(child, name);
            if (found) {
                //console.log("found - " + name);
                return found;
            }
        }
    }
    return;
}

function setBitmapNumber(movieclip, value) {
    let stringValue = Math.round(value).toString();

    movieclip.gotoAndStop(stringValue.length - 1, true);
    for (let i = 0; i < stringValue.length; i++) {
        let numberClip = movieclip.getChildByName("_" + (i + 1));
        if (!numberClip) numberClip = movieclip.getChildByLayerName("_" + (i + 1));
        numberClip.gotoAndStop(stringValue[i]);
    }
}

function getRandomPointCircle(radius) {
    let a = Math.random() * 2 * Math.PI;
    let r = radius * Math.sqrt(Math.random());

    let x = r * Math.cos(a);
    let y = r * Math.sin(a);

    return { x: x, y: y };
}