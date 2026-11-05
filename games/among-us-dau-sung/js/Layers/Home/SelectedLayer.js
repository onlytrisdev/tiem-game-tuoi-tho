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
 * GameView
 * @author XuJian
 */
var SelectedLayer = /** @class */ (function (_super) {
    __extends(SelectedLayer, _super);
    function SelectedLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.group = "SELECTED_STAGE";
        _this.m_stage = 0;
        return _this;
    }
    SelectedLayer.prototype.onEnter = function () {
        this.showBacground();
        var stageDao = dao.find(StageDao);
        this.m_stage = stageDao.stage;
        this.list.vScrollBarSkin = "";
        this.list.array = [[1, 10], [11, 20], [21, 30], [31, 40], [41, 50], [51, 60]];
        this.list.renderHandler = new Laya.Handler(this, this.onRender);
        var guideDao = dao.find(GuideDao);
        if (guideDao.index === 8) {
            var guide = new Guide();
            guide.step(this);
            guide.popup();
        }
        this.list.scrollTo(Math.floor(this.m_stage / 11));
    };
    SelectedLayer.prototype.showBacground = function () {
    };
    SelectedLayer.prototype.onResize = function () {
        this.showBacground();
    };
    SelectedLayer.prototype.onExit = function () { };
    SelectedLayer.prototype.onRender = function (cell, index) {
        var array = cell.dataSource;
        var label;
        var image;
        var item;
        var title = cell.getChildByName("title");
        var lock;
        title.text = array[0] + "-" + array[1];
        for (var i = array[0], k = 1; i <= array[1]; i++, k++) {
            image = cell.getChildByName("i" + k);
            lock = image.getChildByName("lock");
            label = image.getChildByName("txt");
            label.text = i + "";
            if (i < this.m_stage) {
                //lock.skin  = "layers/selected/lock_open.png";
                image.skin = "layers/selected/s_icon_pass.png";
            }
            else if (i === this.m_stage) {
                //lock.skin  = "layers/selected/lock_open.png";
                image.skin = "layers/selected/s_icon_now.png";
            }
            else {
                //lock.skin  = "layers/selected/lock_close.png";
                image.skin = "layers/selected/s_icon_future.png";
            }
            image.on(Laya.Event.CLICK, this, this.onSelectedClick, [i]);
        }
    };
    SelectedLayer.prototype.onSelectedClick = function (i) {
        var d = dao.find(PowerDao);
        var power = d.power;
        if (power < 2) {
            new PowerNotEnoughLayer().popup();
            return;
        }
        // let stageDao:StageDao = dao.find(StageDao);
        // stageDao.selectedStage = i;
        // new PopSelected().popup();
        if (i <= this.m_stage) {
            var stageDao = dao.find(StageDao);
            stageDao.selectedStage = i;
            new PopSelected().popup();
        }
        else {
            new MessagePop("Not unlocked!").popup();
        }
    };
    return SelectedLayer;
}(ui.Layers.Home.SelectedLayerUI));
