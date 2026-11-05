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
var LoginLayer = /** @class */ (function (_super) {
    __extends(LoginLayer, _super);
    function LoginLayer(handler) {
        var _this = _super.call(this) || this;
        _this.__handler = null;
        _this.__handler = handler;
        return _this;
    }
    LoginLayer.prototype.onOpened = function () {
        // let pos   = this.btnLogin.localToGlobal(new Laya.Point(0, 0));
        // let center =  platform.getInstance().getSystemInfoSync().windowWidth / Laya.stage.width;
        // let btn = platform.getInstance().createUserInfoButton({
        //         type: "text",
        //         text: "",
        //         style: {
        //             left: pos.x * center,
        //             top:  pos.y  * center,
        //             width:  this.btnLogin.width * center,
        //             height: this.btnLogin.height * center,
        //             lineHeight: 40,
        //             backgroundColor: "rgba(255,0,0,0)",
        //             color: "#ffffff",
        //             textAlign: "center",
        //             fontSize: 16,
        //             borderRadius: 4
        //         }
        //     });
        // let t = this;
        // btn.onTap(function(res){
        //     console.log("onTap ----res=",res)
        //     if(res.userInfo){
        //         if(t.__handler){ t.__handler.runWith(res);}
        //         btn.destroy();
        //         t.close();
        //     }
        // })
    };
    /**
    *关闭对话框。
    *@param type 如果是点击默认关闭按钮触发，则传入关闭按钮的名字(name)，否则为null。
    *@param showEffect 是否显示关闭效果
    */
    LoginLayer.prototype.close = function (type, showEffect) {
        if (type === "side") {
            return;
        }
        (showEffect === void 0) && (showEffect = true);
        Dialog.manager.close(this, type, showEffect);
    };
    return LoginLayer;
}(ui.Layers.Common.LoginLayerUI));
