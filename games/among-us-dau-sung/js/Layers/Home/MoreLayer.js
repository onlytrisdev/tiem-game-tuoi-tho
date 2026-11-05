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
 * 更多游戏
 * @author XuJian
 */
var MoreLayer = /** @class */ (function (_super) {
    __extends(MoreLayer, _super);
    function MoreLayer() {
        var _this = _super.call(this) || this;
        _this.list.renderHandler = new Laya.Handler(_this, _this.onRender);
        _this.list.array = window["RelatedGames"];
        return _this;
    }
    MoreLayer.prototype.onRender = function (cell) {
        var data = cell.dataSource;
        var label = cell.getChildByName("label");
        var btn = cell.getChildByName("btn");
        var image = cell.getChildByName("image");
        label.text = data.name;
        image.skin = data.thumb;
        btn.on(Laya.Event.CLICK, this, this.onCellClick, [data]);
    };
    MoreLayer.prototype.onCellClick = function (data) {
    };
    return MoreLayer;
}(ui.Layers.Home.MoreLayerUI));
