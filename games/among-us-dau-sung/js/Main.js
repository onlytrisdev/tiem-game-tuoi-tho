/**
 * Layer 弹出效果与关闭效果
 * @author XuJian
 */
var Dispatcher = Core.Dispatcher;
/**
 * 游戏入口
 * @author XuJian
 */
Laya.init(750, 1334, Laya.WebGL);
Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
var Main = /** @class */ (function () {
    function Main() {
        // YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED, this, function () {
            // ad_manager.reg();s
            //版本控制
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onBeginLoad), Laya.ResourceVersion.FILENAME_VERSION);
        // });
        // var options = new YYG.Options();
        // options.gameNameId = AppConfig.GameNameID;
        // options.gamedistributionID = "4a9a8a2c5c814919b5426ec3e3f932e9";
        // YYGSDK.__init__(YYG.ChannelType.YAD, options);
    }
    /**
     * 开始加载常规资源
     */
    Main.prototype.onBeginLoad = function () {
        Laya.loader.load([
            { url: "res/atlas/scenes/loading.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/commons.atlas", type: Laya.Loader.ATLAS },
        ], Laya.Handler.create(this, this.run));
    };
    /**资源加载完毕,启动*/
    Main.prototype.run = function () {
        (new LoadingScene()).show();
    };
    return Main;
}());
new Main();
