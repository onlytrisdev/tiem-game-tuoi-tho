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
 * Loading页面
 * @author XuJian
 */
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = "LoadingScene";
        return _this;
    }
    /**
     * 进入调用
     */
    LoadingScene.prototype.onEnter = function () {
        dao.YYYYMMDD();
        dao.find(LoginTimeDao).refresh();
        var color = dao.find(BackgroundDao).color;
        Laya.stage.bgColor = "#000000";
        Laya.loader.load([
            { url: "res/atlas/bullets.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/helmets.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/cloths.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/hits.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/shoot_0.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ranks.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/enemys.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/components.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/components/diamond.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/components/role.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/background.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/weapons.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/scenes/home.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/layers/victory.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/layers/turntable.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/Icons.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/game.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/Buff.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/layers/shop.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/layers/selected.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/layers/armor.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/layers/weapon.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/layers/setting.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/layers/sign.atlas", type: Laya.Loader.ATLAS },
            { url: "db/sign.json", type: Laya.Loader.JSON },
            { url: "db/stages.json", type: Laya.Loader.JSON },
            { url: "db/template.json", type: Laya.Loader.JSON },
            { url: "db/enemys.json", type: Laya.Loader.JSON },
            { url: "db/gun_db.json", type: Laya.Loader.JSON },
            { url: "db/armor_db.json", type: Laya.Loader.JSON },
            { url: "db/gun_detail_db.json", type: Laya.Loader.JSON },
        ], Laya.Handler.create(this, this.onLoadingDone), Laya.Handler.create(this, this.onProgress, null, false));
        this.logo.on(Laya.Event.MOUSE_DOWN, this, this.onLogoClick);
    };
    /**点击logo */
    LoadingScene.prototype.onLogoClick = function () {
        platform.getInstance().navigate("Loading", "logo");
    };
    /**
     * 加载完成
     */
    LoadingScene.prototype.onLoadingDone = function () {
        this.bar.visible = false;
        var settingDao = dao.find(SettingDao);
        Laya.SoundManager.soundMuted = settingDao.soundMuted;
        this.toLobby();
    };
    LoadingScene.prototype.toLobby = function () {
        new HomeScene().show();
        this.close();
    };
    LoadingScene.prototype.onProgress = function (e) {
        this.bar.value = e;
        this.txtBarValue.text = (e * 100).toFixed(0) + "%";
    };
    return LoadingScene;
}(ui.Scenes.LoadingUI));
