/**
 * scene_manager
 * UI页面管理器
 * @author XuJian
 */
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
    var Manager;
    (function (Manager) {
        var SceneManager = /** @class */ (function (_super) {
            __extends(SceneManager, _super);
            function SceneManager() {
                var _this = _super.call(this) || this;
                _this.scenes = {};
                Laya.stage.addChild(_this);
                return _this;
            }
            Object.defineProperty(SceneManager, "I", {
                get: function () {
                    return SceneManager._instance || (SceneManager._instance = new SceneManager());
                },
                enumerable: false,
                configurable: true
            });
            SceneManager.prototype.open = function (scene) {
                if (this.scenes[scene.getClassName()]) {
                    return;
                }
                this.scenes[scene.getClassName()] = scene;
                this.addChild(scene);
                this.onOpened(scene);
                scene.onOpenedHandler && scene.onOpenedHandler.run();
            };
            SceneManager.prototype.close = function (scene) {
                this.doClose(scene);
            };
            SceneManager.prototype.doClose = function (scene) {
                scene.removeSelf();
                scene.onClosed();
                scene.onClosedHandler && scene.onClosedHandler.run();
                this.scenes[scene.getClassName()] = null;
            };
            SceneManager.prototype.onOpened = function (scene) {
                scene.onOpened();
            };
            SceneManager.prototype.closeByName = function (sceneName) {
                var scene = this.scenes[sceneName];
                if (scene) {
                    this.close(scene);
                }
            };
            return SceneManager;
        }(Laya.Sprite));
        Manager.SceneManager = SceneManager;
    })(Manager = Core.Manager || (Core.Manager = {}));
})(Core || (Core = {}));
