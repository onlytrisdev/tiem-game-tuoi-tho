var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * LobbyView
 * @author XuJian
 */
var SettingLayer = /** @class */ (function (_super) {
    __extends(SettingLayer, _super);
    function SettingLayer() {
        var _this = _super.call(this) || this;
        _this.btnMusicClose.on(Laya.Event.CLICK, _this, _this.onMuiscChange);
        _this.btnMusicOpen.on(Laya.Event.CLICK, _this, _this.onMuiscChange);
        _this.btnSoundClose.on(Laya.Event.CLICK, _this, _this.onSoundChange);
        _this.btnSoundOpen.on(Laya.Event.CLICK, _this, _this.onSoundChange);
        var settingDao = dao.find(SettingDao);
        Laya.SoundManager.musicMuted = settingDao.musicMuted;
        _this.btnMusicClose.visible = Laya.SoundManager.musicMuted;
        _this.btnMusicOpen.visible = !_this.btnMusicClose.visible;
        Laya.SoundManager.soundMuted = settingDao.soundMuted;
        _this.btnSoundClose.visible = Laya.SoundManager.soundMuted;
        _this.btnSoundOpen.visible = !_this.btnSoundClose.visible;
        return _this;
        // let gunDao:GunDao = dao.find(GunDao);
        // let armor:ArmorDao = dao.find(ArmorDao);
        // gunDao.addRoleGuns({id:21,powerLevel:0,shootLevel:0,bulletLevel:0});
        // armor.pushCloths(45);
        // armor.pushHelmets(36);
        // let d:PowerDao= dao.find(PowerDao);
        // d.power +=20;
        // let diamondDao:DiamondDao = dao.find(DiamondDao);
        // diamondDao.addDiamonds(200000);
        // Laya.LocalStorage.clear();
    }
    SettingLayer.prototype.onMuiscChange = function () {
        Laya.SoundManager.musicMuted = !Laya.SoundManager.musicMuted;
        this.btnMusicClose.visible = Laya.SoundManager.musicMuted;
        this.btnMusicOpen.visible = !this.btnMusicClose.visible;
        var settingDao = dao.find(SettingDao);
        settingDao.musicMuted = Laya.SoundManager.musicMuted;
        if (settingDao.musicMuted === false) {
            Audios.playMusic("");
            Audios.playMusic("res/sounds/bgm_main.mp3");
            Audios.setMusicVolume(0.5);
        }
        settingDao.save();
        // 
    };
    SettingLayer.prototype.onSoundChange = function () {
        Laya.SoundManager.soundMuted = !Laya.SoundManager.soundMuted;
        this.btnSoundClose.visible = Laya.SoundManager.soundMuted;
        this.btnSoundOpen.visible = !this.btnSoundClose.visible;
        var settingDao = dao.find(SettingDao);
        settingDao.soundMuted = Laya.SoundManager.soundMuted;
        settingDao.save();
    };
    return SettingLayer;
}(ui.Layers.Home.SettingLayerUI));
