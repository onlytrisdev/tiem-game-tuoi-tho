export class SaveData {
    constructor() {
        this.sfx = 0;
        this.music = 0;
        this.mute = 0;

        this.rooms = [];
        this.checkpoint = "";

        this.waves_cleared = {};

        this.player_keys = ["none"];

        this.current_player = "";

        this.players_unlocked = [];

        this.cutscenes = {};

        this.upgrades = {};

        this.diary = {};
        this.doors = [];
        this.exclamations = ["room_9"];

        this.pause_exclamation = 0;
    }

    load() {
        this.sfx = parseInt(localStorage.getItem("sfx") || this.sfx);
        this.music = parseInt(localStorage.getItem("music") || this.music);
        this.mute = parseInt(localStorage.getItem("mute") || this.mute);
        
        this.rooms = JSON.parse(localStorage.getItem("rooms")) || this.rooms;
        this.checkpoint = localStorage.getItem("checkpoint") || this.checkpoint;
        
        this.waves_cleared = JSON.parse(localStorage.getItem("waves_cleared")) || this.waves_cleared;
        
        this.player_keys = JSON.parse(localStorage.getItem("player_keys")) || this.player_keys;
        
        this.current_player = localStorage.getItem("current_player") || this.current_player;
        
        this.players_unlocked = JSON.parse(localStorage.getItem("players_unlocked")) || this.players_unlocked;
        
        this.cutscenes = JSON.parse(localStorage.getItem("cutscenes")) || this.cutscenes;
        
        this.upgrades = JSON.parse(localStorage.getItem("upgrades")) || this.upgrades;
        
        this.diary = JSON.parse(localStorage.getItem("diary")) || this.diary;
        this.doors = JSON.parse(localStorage.getItem("doors")) || this.doors;
        this.exclamations = JSON.parse(localStorage.getItem("exclamations")) || this.exclamations;
        this.pause_exclamation = parseInt(localStorage.getItem("pause_exclamation") || this.pause_exclamation);

        console.log("loading data: ", localStorage);
    }

    save() {
        localStorage.setItem("sfx", parseInt(this.sfx ? 1 : 0));
        localStorage.setItem("music", parseInt(this.music ? 1 : 0));
        localStorage.setItem("mute", parseInt(this.mute ? 1 : 0));

        console.log("saving sound data: ", localStorage);
    }

    save_progress_data() {
        localStorage.setItem("rooms", JSON.stringify(this.rooms));
        localStorage.setItem("checkpoint", this.checkpoint || "");
        localStorage.setItem("waves_cleared", JSON.stringify(this.waves_cleared));
        localStorage.setItem("player_keys", JSON.stringify(this.player_keys));
        
        localStorage.setItem("current_player", this.current_player);
        localStorage.setItem("players_unlocked", JSON.stringify(this.players_unlocked));
        
        localStorage.setItem("cutscenes", JSON.stringify(this.cutscenes));
        
        localStorage.setItem("upgrades", JSON.stringify(this.upgrades));
        
        localStorage.setItem("diary", JSON.stringify(this.diary));
        
        localStorage.setItem("doors", JSON.stringify(this.doors));
        
        localStorage.setItem("exclamations", JSON.stringify(this.exclamations));
        localStorage.setItem("pause_exclamation", parseInt(this.pause_exclamation ? 1 : 0));

        console.log("saving progress data: ", localStorage);
    }

    add_room(room_name) {
        if (this.rooms.indexOf(room_name) === -1) {
            this.rooms.push(room_name);
        }
    }

    add_wave_cleared(room_name, wave_index) {
        if (!this.waves_cleared[room_name]) {
            this.waves_cleared[room_name] = {};
        }
        this.waves_cleared[room_name][wave_index] = {};
    }

    add_player_key(keyname) {
        if (this.player_keys.indexOf(keyname) === -1) {
            this.player_keys.push(keyname);
        }
    }

    is_wave_cleared(room_name, wave_index) {
        return (this.waves_cleared[room_name] && this.waves_cleared[room_name][wave_index]) ? true : false;
    }

    get_player_last_key() {
        let lastKey = this.player_keys[this.player_keys.length - 1];
        return lastKey;
    }

    player_has_key(keyname) {
        return this.player_keys.indexOf(keyname) !== -1;
    }

    save_cutscene(roomName, cutsceneIndex) {
        if (!this.cutscenes[roomName]) {
            this.cutscenes[roomName] = {};
        }
        this.cutscenes[roomName][cutsceneIndex] = {};
    }

    completed_cutscene(roomName, cutsceneIndex) {
        if (this.cutscenes[roomName] && this.cutscenes[roomName][cutsceneIndex]) return true;

        return false;
    }

    unlock_player(name) {
        if (this.players_unlocked.indexOf(name) === -1) {
            this.players_unlocked.push(name);
        }
    }

    add_upgrade(name) {
        if (this.upgrades[name] === undefined) {
            this.upgrades[name] = -1;
        }
        this.upgrades[name]++;
    }

    get_upgrade(name) {
        if (this.upgrades[name] !== undefined) {
            return this.upgrades[name];
        }
        return -1;
    }

    add_door(id) {
        if (this.doors.indexOf(id) === -1) {
            this.doors.push(id);
        }
    }

    is_door_unlocked(id) {
        return this.doors.indexOf(id) !== -1;
    }
}

const SAVE_KEY = "0.0.2";

// Safari private mode hack
if (typeof localStorage === 'object') {
    try {
        localStorage.setItem('localStorage', 1);
        localStorage.removeItem('localStorage');
    } catch (e) {
        Storage.prototype.dict = {};
        Storage.prototype._setItem = Storage.prototype.setItem;
        Storage.prototype.setItem = function (k, v) {
            this.dict[k] = v;
        };
        Storage.prototype.getItem = function (k) {
            return this.dict[k];
        };
        //console.log('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
    }
}

// Increment SAVE_KEY value to reset save data
if (localStorage.getItem("saveKey") !== SAVE_KEY || get_query_params().reset) {
    console.log("creating save version " + SAVE_KEY);
    localStorage.clear();
    localStorage.setItem("saveKey", SAVE_KEY);
    localStorage.setItem("sfx", 0);
    localStorage.setItem("music", 0);
    localStorage.setItem("mute", 0);
}

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