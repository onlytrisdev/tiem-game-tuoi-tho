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
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        /**
         * Layer
         * @author XuJian
         */
        var Layer = /** @class */ (function (_super) {
            __extends(Layer, _super);
            function Layer() {
                var _this = _super.call(this) || this;
                /**
                 * 点击弹窗外是否关闭
                 * @author XuJian
                 */
                _this.closeOnSide = true;
                _this._backgroundLayer = new Laya.Sprite();
                _this._backgroundLayer.mouseEnabled = true;
                _this.addChild(_this._backgroundLayer);
                _this._backgroundLayer.zOrder = -1;
                Laya.stage.on(Laya.Event.RESIZE, _this, _this._onResize);
                _this.on(Laya.Event.ADDED, _this, _this._onEnter);
                _this.on(Laya.Event.REMOVED, _this, _this._onExit);
                _this.onLoad();
                return _this;
            }
            Layer.pop = function (cls) { (new cls()).popup(); };
            Layer.prototype.close = function (type, showEffect) {
                (showEffect === void 0) && (showEffect = true);
                if (type === "side") {
                    if (!this.closeOnSide)
                        return;
                    this.closeOnSide = false;
                }
                Dialog.manager.close(this, type, showEffect);
            };
            Layer.prototype._onResize = function () {
                if (this._backgroundColor) {
                    this._backgroundLayer.graphics.clear();
                    this._backgroundLayer.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, this._backgroundColor);
                }
                this.onResize();
            };
            Layer.prototype._onEnter = function () {
                this.onEnter();
            };
            Layer.prototype._onExit = function () {
                Laya.stage.off(Laya.Event.RESIZE, this, this._onResize);
                this.off(Laya.Event.ADDED, this, this._onEnter);
                this.off(Laya.Event.REMOVED, this, this._onExit);
                Laya.timer.clearAll(this);
                this.onExit();
            };
            Layer.prototype.onResize = function () { };
            ;
            Layer.prototype.onLoad = function () { };
            ;
            Layer.prototype.onEnter = function () { };
            ;
            Layer.prototype.onExit = function () { };
            ;
            Layer.prototype.setBackgroudnColor = function (color) {
                this._backgroundColor = color;
                this._backgroundLayer.graphics.clear();
                this._backgroundLayer.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, color);
            };
            // showBacground(){
            //     Layer.manager.maskLayer.graphics.clear();
            //     Layer.manager.maskLayer.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,Laya.stage.bgColor);
            //     Layer.manager.maskLayer.alpha = 1;
            // }
            // hideBacground(){
            //     Core.UI.Layer.manager.maskLayer.graphics.clear();
            //     Core.UI.Layer.manager.maskLayer.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,UIConfig.popupBgColor);
            //     Core.UI.Layer.manager.maskLayer.alpha=UIConfig.popupBgAlpha;
            // }
            /**
             * 根据组关闭所有弹出框
             * @param	group 需要关闭的组名称
             * @return	需要关闭的对话框数组
             */
            Layer.prototype.closeByGroup = function (group) {
                return Layer.manager.closeByGroup(group);
            };
            return Layer;
        }(Laya.Dialog));
        UI.Layer = Layer;
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
