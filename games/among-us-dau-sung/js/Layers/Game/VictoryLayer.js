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
var VictoryLayer = /** @class */ (function (_super) {
    __extends(VictoryLayer, _super);
    function VictoryLayer() {
        var _this = _super.call(this) || this;
        _this.group = "CLOSE_WITH_DIAMOND_POP";
        _this.diamonds = 0;
        _this._isPopHuafei = false;
        _this.closeOnSide = false;
        _this.btn.on(Laya.Event.CLICK, _this, _this.onBtnClick);
        _this.btn2.on(Laya.Event.CLICK, _this, _this.onBtn2Click);
        _this.bnRecorder.on(Laya.Event.CLICK, _this, _this.onRecorderClick);
        var stageDao = dao.find(StageDao);
        var owner_stage = stageDao.stage;
        var stage = stageDao.selectedStage;
        var db = stageDao.get_from_stage_db(stage);
        if (stage < owner_stage) {
            _this.diamonds = db.passReward;
            _this._isPopHuafei = false;
        }
        else {
            _this.diamonds = db.firstReward;
            stageDao.pass();
            _this._isPopHuafei = true;
        }
        _this.rewardLabel.text = _this.diamonds + "";
        if (RecorderManager.I.enabled) {
            RecorderManager.I.stop();
        }
        else {
            _this.bnRecorder.visible = false;
        }
        return _this;
    }
    VictoryLayer.prototype.onOpened = function () {
        if (this._isPopHuafei) {
            var huaFeiDao = dao.find(HuaFeiDao);
            huaFeiDao.addDiamonds(0.5);
            // new HuaFeiPop().popup();
            var configs = WeaponConfig.configs;
            var stageDao = dao.find(StageDao);
            for (var index = 0; index < configs.length; index++) {
                var element = configs[index];
                if (stageDao.stage === element.stage) {
                    new MessageLayer(element.id).popup();
                }
            }
        }
    };
    VictoryLayer.prototype.onClosed = function () {
        new HomeScene().show();
        new SelectedLayer().popup();
        Scene.manager.closeByName("GameScene");
    };
    VictoryLayer.prototype.onBtnClick = function () {
        this.flush(this.diamonds);
    };
    VictoryLayer.prototype.onBtn2Click = function () {
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, function () {
            this.flush(this.diamonds * 2);
        // }));
    };
    VictoryLayer.prototype.flush = function (diamonds) {
        var diamondDao = dao.find(DiamondDao);
        diamondDao.addDiamonds(diamonds);
    };
    VictoryLayer.prototype.onRecorderClick = function () {
        // RecorderManager.I.share(YYG.EventHandler.create(this,function(){
        //         this.flush(50);
        //     }))
    };
    return VictoryLayer;
}(ui.Layers.Game.VictoryLayerUI));
