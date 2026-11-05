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
var Core;
(function (Core) {
    var UI;
    (function (UI) {
        var Scene = /** @class */ (function (_super) {
            __extends(Scene, _super);
            function Scene() {
                var _this = _super.call(this) || this;
                _this.className = "Scene";
                Laya.stage.on(Laya.Event.RESIZE, _this, _this._onResize);
                _this.once(Laya.Event.ADDED, _this, _this._onEnter);
                _this.once(Laya.Event.REMOVED, _this, _this._onExit);
                return _this;
            }
            Object.defineProperty(Scene, "manager", {
                get: function () {
                    return Core.Manager.SceneManager.I;
                },
                enumerable: false,
                configurable: true
            });
            Scene.prototype.getClassName = function () { return this.className; };
            Scene.prototype._onResize = function () {
                this.y = (Laya.stage.height - this.height);
                this.onResize();
            };
            Scene.prototype._onEnter = function () {
                this.y = (Laya.stage.height - this.height);
                this.onEnter();
            };
            Scene.prototype._onExit = function () {
                Laya.stage.off(Laya.Event.RESIZE, this, this._onResize);
                Laya.timer.clearAll(this);
                this.onExit();
            };
            Scene.prototype.onResize = function () { };
            ;
            /**打开完成后，调用此方法（如果有弹出动画，则在动画完成后执行）*/
            Scene.prototype.onOpened = function () { };
            Scene.prototype.onEnter = function () { };
            ;
            Scene.prototype.onExit = function () { };
            ;
            Scene.prototype.show = function () {
                Scene.manager.open(this);
            };
            Scene.prototype.close = function () {
                Scene.manager.close(this);
            };
            Scene.prototype.onClosed = function () {
            };
            return Scene;
        }(Laya.View));
        UI.Scene = Scene;
    })(UI = Core.UI || (Core.UI = {}));
})(Core || (Core = {}));
