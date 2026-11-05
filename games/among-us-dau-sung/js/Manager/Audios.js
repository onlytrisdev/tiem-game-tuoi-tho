/**
 * 音频管理
 * @author XuJian
 */
var AudioManager = Core.Manager.AudioManager;
var Audios = /** @class */ (function () {
    function Audios() {
    }
    Audios.playMusic = function (music) {
        this.musicChannel = AudioManager.playMusic(music);
    };
    Audios.setMusicVolume = function (value) {
        this.musicChannel && this.musicChannel.volume && (this.musicChannel.volume = value);
    };
    Audios.playSound = function (s) {
        AudioManager.playSound(s);
    };
    /**
     * 点击声音
     */
    Audios.CLICK = function () {
        AudioManager.playSound("res/sounds/click.mp3");
    };
    Audios.hit = function () {
        AudioManager.playSound("res/sounds/hit.mp3");
    };
    Audios.hit_01 = function () {
        AudioManager.playSound("res/sounds/hit_01.mp3");
    };
    Audios.victory = function () {
        AudioManager.playSound("res/sounds/win.mp3");
    };
    Audios.fail = function () {
        AudioManager.playSound("res/sounds/lose.mp3");
    };
    Audios.dead = function () {
        AudioManager.playSound("res/sounds/dead.mp3");
    };
    Audios.HELMETLOST = function () {
        AudioManager.playSound("res/sounds/helmetLost.mp3");
    };
    Audios.ChangeBullets = function () {
        AudioManager.playSound("res/sounds/ChangeBullet.mp3");
    };
    Audios.DIAMOND = function () {
        this.playSound("res/sounds/diamond.mp3");
    };
    Audios.SOUNDS = {
        11: "res/sounds/simple.mp3",
        12: "res/sounds/simple.mp3",
        13: "res/sounds/S686.mp3",
        14: "res/sounds/simple.mp3",
        15: "res/sounds/simple.mp3",
        16: "res/sounds/Kar98K.mp3",
        17: "res/sounds/M249.mp3",
        18: "res/sounds/AWM.mp3",
        19: "res/sounds/simple.mp3",
        20: "res/sounds/sound_YT.mp3",
        21: "res/sounds/AWM.mp3",
    };
    return Audios;
}());
