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
var PopSelected = /** @class */ (function (_super) {
    __extends(PopSelected, _super);
    function PopSelected() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeOnSide = false;
        return _this;
    }
    PopSelected.prototype.onOpened = function () {
        this.btnDefine.on(Laya.Event.CLICK, this, this.onDefine);
        this.btnWeapon.on(Laya.Event.CLICK, this, this.onWeapon);
        this.btnVideo.on(Laya.Event.CLICK, this, this.onVideo);
        this.btnEnter.on(Laya.Event.CLICK, this, this.onEnterGame);
        var guideDao = dao.find(GuideDao);
        if (guideDao.index === 9) {
            var guide = new Guide();
            guide.step(this);
            guide.popup();
        }
        var heroDao = dao.find(HeroDao);
        heroDao.protective = false;
    };
    PopSelected.prototype.onDefine = function () {
        new DefineLayer().popup();
    };
    PopSelected.prototype.onWeapon = function () {
        new WeaponLayer().popup();
    };
    PopSelected.prototype.onVideo = function () {
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.onVideoDone));
    };
    PopSelected.prototype.onVideoDone = function () {
        var heroDao = dao.find(HeroDao);
        heroDao.protective = true;
        this.onEnterGame();
    };
    PopSelected.prototype.onEnterGame = function () {
        this.close();
        this.closeByGroup("SELECTED_STAGE");
        Scene.manager.closeByName("HomeScene");
        Laya.timer.once(0.2e3, this, function () {
            var d = dao.find(PowerDao);
            d.power -= 2;
            (new GameScene()).show();
        });
    };
    return PopSelected;
}(ui.Layers.Home.PopSelectedUI));
