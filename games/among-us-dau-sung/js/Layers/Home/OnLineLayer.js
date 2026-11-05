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
var OnLineLayer = /** @class */ (function (_super) {
    __extends(OnLineLayer, _super);
    function OnLineLayer(diamond) {
        var _this = _super.call(this) || this;
        _this.m_diamond = 0;
        _this.group = "CLOSE_WITH_DIAMOND_POP";
        var sub = dao.find(LoginTimeDao).timeDifference();
        var hour = Math.floor(sub / 3600);
        var minute = (Math.floor(sub / 60) % 60);
        _this.context.text = hour + "hours and " + minute + "minutes reward(9 hours maximum) " + " kim cương x" + diamond;
        //  this.context.text    = "本次离线"+hour+"hours"+minute+"分钟(最大8小时),获得离线奖励 " + diamond +" 钻石";
        _this.m_diamond = diamond;
        dao.find(LoginTimeDao).refresh();
        _this.btn.on(Laya.Event.CLICK, _this, _this.onBtnClick);
        _this.doubleBox.changeHandler = new Laya.Handler(_this, _this.onChangeHandler);
        return _this;
    }
    OnLineLayer.prototype.onChangeHandler = function (selected) {
        selected && (this.btn.skin = "commons/button_video_get.png") || (this.btn.skin = "commons/button_get.png");
    };
    OnLineLayer.prototype.onBtnClick = function () {
        if (this.doubleBox.selected) {
            // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.flushVideo));
        }
        else {
            this.flush();
        }
    };
    OnLineLayer.prototype.flushVideo = function () {
        this.flush();
    };
    OnLineLayer.prototype.flush = function () {
        var diamond = this.m_diamond;
        if (this.doubleBox.selected) {
            diamond = diamond * 2;
        }
        var diamondDao = dao.find(DiamondDao);
        diamondDao.addDiamonds(diamond);
        this.close();
    };
    return OnLineLayer;
}(ui.Layers.Home.OnLineLayerUI));
