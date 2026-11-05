//import { SOUND_CONFIG } from "../js/config/sfx.js";

class SoundManager {
    constructor() {
        this.sound = {};
        this.soundsLoaded = false;
    }

    isMuted() {
        return Howler._muted;
    }

    switchMute() {
        Howler.mute(!Howler._muted);
    }

    mute(value) {
        Howler.mute(value);
    }

    muteMusic(value = true) {
        for (let soundName in this.sound) {
            soundName = soundName.toLowerCase();
            if (soundName.indexOf("music") !== -1) {
                this.sound[soundName].mute(value);
            }
        }
    }

    muteSfx(value = true) {
        for (let soundName in this.sound) {
            soundName = soundName.toLowerCase();
            if (soundName.indexOf("music") === -1) {
                this.sound[soundName].mute(value);
                if (!this.sound[soundName].polyphony) continue;
                for (let i = 0; i < this.sound[soundName].polyphony.length; i++) {
                    this.sound[soundName].polyphony[i].mute(value);
                }
            }
        }
    }

    setMasterVolume(value) {
        Howler.volume(value);
    }

    load(loadedCallback) {

        for (let i = 0; i < window.manifest.length; i++) {
            let fileData = window.manifest[i];
            if (fileData.filetype === "mp3") {
                let src = fileData.location;
                let id = fileData.filename.split(".mp3")[0].toLowerCase();
                let config = SOUND_CONFIG[id];//create file like sound_config = {click:{loop:-1, volume:0.5}}
                let sound = this.createSound(src, config, loadedCallback);
                this.sound[id] = sound;

                if (config && config.polyphony) {
                    this.sound[id].polyphony = [];
                    for (let k = 0; k < config.polyphony; k++) {
                        this.sound[id].polyphony.push(this.createSound(src, config));
                    }
                }
            }
        }
        this.soundsLoaded = true;
    }

    createSound(src, config, loadedCallback = null) {

        var sound = new Howl({
            src: src,
            loop: (config && config.loop) ? config.loop : 0,
            volume: (config && config.volume) ? config.volume : 1
        });

        if (loadedCallback) sound.once("load", loadedCallback);

        sound.elapsedTime = Date.now();
        sound.interruptDelay = 0;
        if (config && config.interrupt_delay) {
            sound.interruptDelay = config.interrupt_delay;
        }

        return sound;
    }

    play(id, interrupt = true, rate = 1) {
        id = id.toLowerCase();
        if (this.sound[id]) {
            let elapsedDiff = (Date.now() - this.sound[id].elapsedTime) / 1000;
            let poly = this.sound[id].polyphony;
            //console.log("elapsed Diff: " + elapsedDiff, this.sound[id].interruptDelay);
            if (this.sound[id].playing() && interrupt && elapsedDiff > this.sound[id].interruptDelay) {
                this.stop(id);
            }
            if (!this.sound[id].playing()) {
                this.sound[id].play();
                this.sound[id].elapsedTime = Date.now();
                this.setVolume(id, this.getVolume(id));
                if (rate !== undefined) {
                    this.sound[id].rate(rate);
                }
            } else if (poly) {
                for (let i = 0; i < poly.length; i++) {
                    if (!poly[i].playing()) {
                        poly[i].play();
                        //console.log("polyphony play: " + id + " - " + i);
                        break;
                    }
                }
            }
            //console.log("playing: " + id);
        }
    }

    //duration in seconds
    fade(id, from, to, duration) {
        id = id.toLowerCase();
        if (this.sound[id]) {
            var maxVolume = this.getVolume(id);
            from = this.clamp(from, 0, maxVolume);
            to = this.clamp(to, 0, maxVolume);
            this.sound[id].fade(from, to, (duration * 1000)); //Howler needs milliseconds
        }
    }

    fadeTo(id, to, duration) {
        id = id.toLowerCase();
        if (this.sound[id]) {
            var from = this.sound[id]._volume;
            this.fade(id, from, to, duration);
        }
    }

    playRandom(id, interrupt = true, rate = 1) {
        id = id.toLowerCase();
        var sounds = [], allSounds = [];
        for (let soundName in this.sound) {
            soundName = soundName.toLowerCase();
            if (!this.sound[soundName].playing() && soundName.indexOf(id) !== -1) {
                sounds.push(soundName);
            }
            if (soundName.indexOf(id) !== -1) allSounds.push(soundName);
        }
        if (sounds.length > 0) {
            id = this.pickRandom(sounds);
        } else if (interrupt) {
            id = this.pickRandom(allSounds);
        } else {
            id = "";
        }
        if (id) this.play(id, interrupt, rate);
        else console.log("sound not found", id);
    }

    stop(id) {
        id = id.toLowerCase();
        if (this.sound[id].playing()) {
            this.sound[id].stop();
        }
    }

    getVolume(id) {
        id = id.toLowerCase();
        if (SOUND_CONFIG[id]) {
            return SOUND_CONFIG[id].volume;
        }
        return this.sound[id]._volume;
    }

    setVolume(id, volume) {
        id = id.toLowerCase();
        volume = Math.min(Math.max(volume, 0), 1);
        this.sound[id].volume(volume);
    }

    getPos(id) {
        id = id.toLowerCase();
        var seek = this.sound[id].seek(),
            duration = this.sound[id]._duration,
            pos = 0;
        pos = ((duration - seek) / duration);
        return pos;
    }

    playRandomProb(id, interrupt, prob) {
        id = id.toLowerCase();
        if (Math.random() < prob) {
            this.playRandom(id, interrupt);
        }
    }

    pickRandom(arr) {
        let index = Math.floor(arr.length * Math.random());
        return arr[index];
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    playAndFade(id, from, to, duration, interrupt = false) {
        this.play(id, interrupt);
        this.fade(id, from, to, duration);
    }

    fadeAndStop(id, to, duration) {
        id = id.toLowerCase();
        this.sound[id].once("fade", () => {
            //console.log("fade and stop " + id);
            this.sound[id].stop();
        });
        this.fadeTo(id, to, duration);
    }
};