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
var RankLayer = /** @class */ (function (_super) {
    __extends(RankLayer, _super);
    function RankLayer() {
        return _super.call(this) || this;
        // if(patform.isBaiDu)return;
        // let sharedCanvas = patform.getOpenDataContext().canvas;
        // sharedCanvas.width = Laya.stage.width;
        // sharedCanvas.height = Laya.stage.height;
        // console.log("sharedCanvas ==",sharedCanvas)
        // let texture:Laya.Texture;
        // if(patform.isTouTiao){
        // }else{
        //     texture = new Laya.Texture(sharedCanvas);
        // }
        // console.log("texture ==",texture)
        // texture.bitmap.alwaysChange = true;//小程序使用，非常费，这个参数可以根据自己的需求适当调整，如果内容不变可以不用设置成true
        // this.canvas.graphics.drawTexture(texture, 0, 0, texture.width, texture.height);
        // patform.getOpenDataContext().postMessage("PAGE_RANK");
    }
    RankLayer.prototype.onClosed = function () {
        this.canvas.graphics.clear();
    };
    return RankLayer;
}(ui.Layers.Home.RankUI));
