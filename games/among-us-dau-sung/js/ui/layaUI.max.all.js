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
var View = laya.ui.View;
var Dialog = Core.UI.Layer;
var Scene = Core.UI.Scene;
var ui;
(function (ui) {
    var Components;
    (function (Components) {
        var AirGiftUI = /** @class */ (function (_super) {
            __extends(AirGiftUI, _super);
            function AirGiftUI() {
                return _super.call(this) || this;
            }
            AirGiftUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.AirGiftUI.uiView);
            };
            AirGiftUI.uiView = { "type": "View", "props": { "width": 245, "height": 248 }, "child": [{ "type": "Image", "props": { "y": 124, "x": 122, "skin": "background/background_gift.png", "rotation": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 28, "child": [{ "type": "Image", "props": { "y": 171, "x": 93, "var": "m_icon", "skin": "helmets/helmet_yt.png", "scaleY": 0.5, "scaleX": 0.5 } }] }], "animations": [{ "nodes": [{ "target": 28, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 28, "key": "rotation", "index": 0 }, { "value": 20, "tweenMethod": "linearNone", "tween": true, "target": 28, "key": "rotation", "index": 30 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 28, "key": "rotation", "index": 60 }, { "value": -30, "tweenMethod": "linearNone", "tween": true, "target": 28, "key": "rotation", "index": 90 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 28, "key": "rotation", "index": 120 }] } }], "name": "fly", "id": 1, "frameRate": 24, "action": 0 }] };
            return AirGiftUI;
        }(View));
        Components.AirGiftUI = AirGiftUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var DiamondUI = /** @class */ (function (_super) {
            __extends(DiamondUI, _super);
            function DiamondUI() {
                return _super.call(this) || this;
            }
            DiamondUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.DiamondUI.uiView);
            };
            DiamondUI.uiView = { "type": "View", "props": { "width": 232, "height": 64 }, "child": [{ "type": "Image", "props": { "x": 32, "width": 194, "skin": "components/diamond/background_diamond.png", "sizeGrid": "10,10,10,10", "height": 45, "centerY": 0 } }, { "type": "Image", "props": { "y": -13, "x": 8, "width": 44, "skin": "Icons/icon_diamond.png", "height": 83 } }, { "type": "Label", "props": { "y": 16, "x": 81, "width": 121, "var": "diamond", "text": "10", "height": 34, "fontSize": 32, "color": "#010000", "bold": true, "align": "center" } }], "animations": [{ "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 3 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 5 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 9 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 13 }], "x": [{ "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 5 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 10 }, { "value": -11, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 15 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 20 }] } }, { "target": 26, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 1 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 7 }] } }], "name": "shoot", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 3 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 5 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 9 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 13 }], "x": [{ "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 5 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 10 }, { "value": -11, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 15 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 20 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 0 }, { "value": 5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 3 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 20 }] } }], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }] };
            return DiamondUI;
        }(View));
        Components.DiamondUI = DiamondUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var DiamondPopLayerUI = /** @class */ (function (_super) {
            __extends(DiamondPopLayerUI, _super);
            function DiamondPopLayerUI() {
                return _super.call(this) || this;
            }
            DiamondPopLayerUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.DiamondPopLayerUI.uiView);
            };
            DiamondPopLayerUI.uiView = { "type": "Dialog", "props": { "width": 334, "popupCenter": true, "height": 401 }, "child": [{ "type": "Image", "props": { "y": 177, "x": 167, "skin": "background/background_diamond_light.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 65 }, { "type": "Image", "props": { "y": 0, "x": 0, "skin": "background/background_diamond_pop.png" } }, { "type": "Button", "props": { "y": 7, "x": 272, "stateNum": 1, "skin": "commons/button_close.png", "scaleY": 0.6, "scaleX": 0.6, "name": "close" } }, { "type": "Image", "props": { "y": 86, "x": 137, "skin": "Icons/icon_diamond.png", "scaleY": 1.5, "scaleX": 1.5 } }, { "type": "Label", "props": { "y": 259, "x": 18, "width": 300, "var": "count", "text": "x30", "height": 54, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }], "animations": [{ "nodes": [{ "target": 65, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 65, "key": "rotation", "index": 0 }, { "value": 360, "tweenMethod": "linearNone", "tween": true, "target": 65, "key": "rotation", "index": 180 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }] };
            return DiamondPopLayerUI;
        }(Dialog));
        Components.DiamondPopLayerUI = DiamondPopLayerUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var DoubleBoxUI = /** @class */ (function (_super) {
            __extends(DoubleBoxUI, _super);
            function DoubleBoxUI() {
                return _super.call(this) || this;
            }
            DoubleBoxUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.DoubleBoxUI.uiView);
            };
            DoubleBoxUI.uiView = { "type": "View", "props": { "width": 232, "height": 64 }, "child": [{ "type": "Button", "props": { "y": 9, "x": 15, "var": "btn", "stateNum": 1, "skin": "commons/button_selected_box.png" }, "child": [{ "type": "Image", "props": { "y": -8, "x": -8, "var": "selecedImage", "skin": "commons/button_selected.png" } }, { "type": "Image", "props": { "y": 9, "x": 64, "skin": "commons/text_double.png" } }] }], "animations": [{ "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 3 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 5 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 9 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 13 }], "x": [{ "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 5 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 10 }, { "value": -11, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 15 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 20 }] } }, { "target": 26, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 1 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 7 }] } }], "name": "shoot", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 3 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 5 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 9 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 13 }], "x": [{ "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 5 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 10 }, { "value": -11, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 15 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 20 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 0 }, { "value": 5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 3 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 20 }] } }], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }] };
            return DoubleBoxUI;
        }(View));
        Components.DoubleBoxUI = DoubleBoxUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var EnemyUI = /** @class */ (function (_super) {
            __extends(EnemyUI, _super);
            function EnemyUI() {
                return _super.call(this) || this;
            }
            EnemyUI.prototype.createChildren = function () {
                View.regComponent("ProgressBar", ProgressBar);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.EnemyUI.uiView);
            };
            EnemyUI.uiView = { "type": "View", "props": { "y": 29, "x": 22, "width": 45, "height": 59, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 39.2, "x": 21, "var": "leg", "skin": "enemys/enemy_leg1.png", "anchorX": 0.5 }, "compId": 17 }, { "type": "Image", "props": { "y": 40, "x": 24, "var": "body", "skin": "enemys/enemy_body1.png", "rotation": 0, "anchorY": 0.9, "anchorX": 0.58 }, "compId": 18, "child": [{ "type": "Image", "props": { "y": -11, "x": -5, "visible": true, "var": "helmet", "skin": "enemys/enemy_helmet1.png" } }, { "type": "Image", "props": { "y": 19, "x": 4, "visible": true, "var": "cloth", "skin": "enemys/enemy_cloth1.png" } }, { "type": "Box", "props": { "y": 31, "x": 28, "width": 43, "var": "arm", "rotation": 0, "height": 84.55, "anchorY": 0.5, "anchorX": 1 }, "compId": 22, "child": [{ "type": "Image", "props": { "y": 27, "x": 39, "var": "gun", "skin": "weapons/gold_AKM.png", "scaleY": 0.3, "scaleX": -0.3 } }, { "type": "Image", "props": { "y": 31, "x": -5, "var": "arm2", "skin": "enemys/enemy_arm1.png" } }, { "type": "Image", "props": { "y": 34, "x": -60, "visible": false, "var": "temp", "skin": "bullets/bNormal.png", "anchorY": 0.5, "anchorX": 0 } }] }] }, { "type": "ProgressBar", "props": { "y": -28, "x": -18, "var": "bar", "value": 1, "skin": "components/blood_progress.png", "runtime": "ProgressBar" } }], "animations": [{ "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": 35, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": 31, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 3 }, { "value": 31, "tweenMethod": "linearNone", "tween": true, "target": 22, "label": null, "key": "y", "index": 5 }, { "value": 38, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 6 }, { "value": 35, "tweenMethod": "linearNone", "tween": true, "target": 22, "label": null, "key": "y", "index": 10 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 3 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 5 }, { "value": 10, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "label": null, "key": "rotation", "index": 10 }] } }], "name": "shoot", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 3 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 5 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 9 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 13 }], "x": [{ "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 5 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 10 }, { "value": -11, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 15 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 20 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 0 }, { "value": 5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 3 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 20 }] } }], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 18, "keyframes": { "y": [{ "value": 40, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 0 }], "x": [{ "value": 24, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 0 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "rotation", "index": 0 }] } }, { "target": 17, "keyframes": { "y": [{ "value": 39.2, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "y", "index": 0 }], "x": [{ "value": 21, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 0 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "rotation", "index": 0 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "alpha", "index": 0 }] } }, { "target": 22, "keyframes": { "y": [{ "value": 31, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }], "x": [{ "value": 28, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 0 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 0 }] } }], "name": "action_die", "id": 2, "frameRate": 24, "action": 0 }] };
            return EnemyUI;
        }(View));
        Components.EnemyUI = EnemyUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var EnemyBossUI = /** @class */ (function (_super) {
            __extends(EnemyBossUI, _super);
            function EnemyBossUI() {
                return _super.call(this) || this;
            }
            EnemyBossUI.prototype.createChildren = function () {
                View.regComponent("ProgressBar", ProgressBar);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.EnemyBossUI.uiView);
            };
            EnemyBossUI.uiView = { "type": "View", "props": { "y": 40, "x": 22, "width": 45, "height": 80, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 46, "x": 2, "var": "leg", "skin": "enemys/enemy_boss_leg.png" } }, { "type": "ProgressBar", "props": { "y": -21, "x": -21, "var": "bar", "value": 1, "skin": "components/blood_progress.png", "runtime": "ProgressBar" } }, { "type": "Image", "props": { "y": 47, "x": 24, "var": "body", "skin": "enemys/enemy_boss_body.png", "rotation": 0, "anchorY": 0.9, "anchorX": 0.58 }, "compId": 18, "child": [{ "type": "Sprite", "props": { "y": 31, "x": 19, "width": 3, "var": "armPoint", "height": 3 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "var": "arm", "skin": "enemys/enemy_boss_arm.png", "rotation": 0, "anchorY": 0, "anchorX": 0.75 }, "compId": 19, "child": [{ "type": "Image", "props": { "y": 22, "x": -5, "visible": false, "var": "temp", "skin": "bullets/bNormal.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }] }], "animations": [{ "nodes": [{ "target": 19, "keyframes": { "x": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "x", "index": 0 }, { "value": 3, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "x", "index": 2 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "x", "index": 6 }, { "value": -2, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "x", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "x", "index": 14 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "rotation", "index": 0 }, { "value": 8, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "rotation", "index": 4 }, { "value": 5, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "rotation", "index": 8 }, { "value": 6, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "rotation", "index": 12 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "rotation", "index": 14 }] } }, { "target": 18, "keyframes": { "y": [{ "value": 47, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 0 }, { "value": 49, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 4 }, { "value": 47, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 9 }] } }], "name": "shoot", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }] };
            return EnemyBossUI;
        }(View));
        Components.EnemyBossUI = EnemyBossUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var EnemyPanUI = /** @class */ (function (_super) {
            __extends(EnemyPanUI, _super);
            function EnemyPanUI() {
                return _super.call(this) || this;
            }
            EnemyPanUI.prototype.createChildren = function () {
                View.regComponent("ProgressBar", ProgressBar);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.EnemyPanUI.uiView);
            };
            EnemyPanUI.uiView = { "type": "View", "props": { "y": 29, "x": 22, "width": 45, "height": 59, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 36, "x": 8, "var": "leg", "skin": "enemys/enemy_pan_leg.png" } }, { "type": "ProgressBar", "props": { "y": -20, "x": -23, "var": "bar", "value": 1, "skin": "components/blood_progress.png", "runtime": "ProgressBar" }, "compId": 13 }, { "type": "Image", "props": { "y": 36, "x": 22, "var": "body", "skin": "enemys/enemy_pan_body.png", "rotation": 0, "anchorY": 0.9, "anchorX": 0.58 }, "child": [{ "type": "Image", "props": { "y": -12, "x": -7, "visible": true, "var": "helmet", "skin": "enemys/enemy_helmet1.png" } }, { "type": "Image", "props": { "y": 15, "x": 8, "visible": true, "var": "cloth", "skin": "enemys/enemy_cloth1.png" } }, { "type": "Image", "props": { "y": 22, "x": 20, "var": "arm", "skin": "enemys/enemy_pan.png", "anchorY": 0.5, "anchorX": 1 }, "compId": 19 }] }], "animations": [{ "nodes": [{ "target": 19, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "rotation", "index": 0 }, { "value": 8, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "rotation", "index": 6 }, { "value": 5, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "rotation", "index": 9 }, { "value": 6, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "rotation", "index": 12 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "rotation", "index": 15 }] } }, { "target": 13, "keyframes": { "y": [{ "value": -23, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "y", "index": 0 }], "x": [{ "value": -19, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "x", "index": 0 }], "skin": [{ "value": "components/blood_progress.png", "tweenMethod": "linearNone", "tween": false, "target": 13, "key": "skin", "index": 0 }] } }], "name": "shoot", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }] };
            return EnemyPanUI;
        }(View));
        Components.EnemyPanUI = EnemyPanUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var EnemyTableUI = /** @class */ (function (_super) {
            __extends(EnemyTableUI, _super);
            function EnemyTableUI() {
                return _super.call(this) || this;
            }
            EnemyTableUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.EnemyTableUI.uiView);
            };
            EnemyTableUI.uiView = { "type": "View", "props": { "width": 52, "height": 78 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 52, "height": 78 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "wLeft", "skin": "game/EnemyTable_Left.png" }, "compId": 12 }, { "type": "Image", "props": { "y": 0, "x": 52, "var": "wRight", "skin": "game/EnemyTable_Right.png", "anchorX": 1 }, "compId": 13 }] }], "animations": [{ "nodes": [{ "target": 12, "keyframes": { "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 0 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 5 }] } }, { "target": 13, "keyframes": { "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 5 }] } }], "name": "action_open", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 12, "keyframes": { "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 0 }], "scaleX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 5 }] } }, { "target": 13, "keyframes": { "scaleX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 5 }] } }], "name": "aciton_close", "id": 1, "frameRate": 24, "action": 0 }] };
            return EnemyTableUI;
        }(View));
        Components.EnemyTableUI = EnemyTableUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var ErrorPopUI = /** @class */ (function (_super) {
            __extends(ErrorPopUI, _super);
            function ErrorPopUI() {
                return _super.call(this) || this;
            }
            ErrorPopUI.prototype.createChildren = function () {
                View.regComponent("Core.UI.Button", Core.UI.Button);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.ErrorPopUI.uiView);
            };
            ErrorPopUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 729, "skin": "commons/tan.png", "name": "bg", "height": 500, "sizeGrid": "60,60,60,60" } }, { "type": "Button", "props": { "y": 50, "x": 676, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 48, "text": "Tip", "fontSize": 40, "color": "#ffffff", "centerX": -15, "bold": true } }, { "type": "Label", "props": { "y": 176, "x": 117, "wordWrap": true, "width": 512, "text": "No ads avaliable today,\\n\\nplease wait for tomorrow!", "height": 135, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }] };
            return ErrorPopUI;
        }(Dialog));
        Components.ErrorPopUI = ErrorPopUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var GameRoleUI = /** @class */ (function (_super) {
            __extends(GameRoleUI, _super);
            function GameRoleUI() {
                return _super.call(this) || this;
            }
            GameRoleUI.prototype.createChildren = function () {
                View.regComponent("ProgressBar", ProgressBar);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.GameRoleUI.uiView);
            };
            GameRoleUI.uiView = { "type": "View", "props": { "width": 120, "height": 220 }, "child": [{ "type": "Image", "props": { "y": 147, "x": 14, "visible": false, "var": "leftLeg1", "skin": "components/role/left_leg.png" } }, { "type": "Image", "props": { "y": 153, "x": 54, "visible": false, "var": "rightLeg1", "skin": "components/role/right_leg.png", "rotation": -45 } }, { "type": "Image", "props": { "y": 192, "x": 34, "visible": false, "skin": "components/role/left_leg2.png", "rotation": 90 } }, { "type": "Image", "props": { "y": 160, "x": 115, "visible": false, "skin": "components/role/right_leg2.png", "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 152, "x": 59, "width": 326, "var": "bodyContainer", "height": 216, "anchorY": 0.65, "anchorX": 0.22 }, "child": [{ "type": "Box", "props": { "y": 77, "x": 97, "var": "armContainer", "rotation": 0, "name": "外手臂" }, "compId": 45, "child": [{ "type": "Image", "props": { "x": 9, "var": "weapon", "skin": "weapons/YT.png", "scaleY": 1, "scaleX": 1, "rotation": 0 }, "compId": 39 }, { "type": "Image", "props": { "y": 20, "x": 257, "visible": false, "var": "fireLight", "skin": "components/fire_light2.png", "scaleY": 5, "scaleX": 5, "anchorY": 0.5, "anchorX": 0.1 }, "compId": 47 }, { "type": "Image", "props": { "y": 30, "x": 210, "visible": false, "var": "bulletPos", "skin": "bullets/bNormal.png", "anchorY": 0.5, "anchorX": 1 } }] }, { "type": "Image", "props": { "y": 90, "x": 59, "skin": "shoot_0/s01.png", "scaleY": 1.2, "scaleX": 1.2, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 56 }, { "type": "Box", "props": { "y": 133, "x": 73, "width": 130, "rotation": 0, "name": "身体", "height": 130, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 51, "child": [{ "type": "Image", "props": { "y": -7, "x": -60, "var": "cloth", "skin": "cloths/icon_define2.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Sprite", "props": { "y": 34, "x": 81, "width": 80, "rotation": 0, "pivotY": 70, "pivotX": 55, "height": 70 }, "compId": 53, "child": [{ "type": "Image", "props": { "y": 68, "x": 41, "visible": false, "var": "head", "skin": "components/role/head.png", "rotation": 1.6, "anchorY": 1, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 19, "x": 39, "var": "helmet", "skin": "helmets/helmet_yt.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 43 }] }] }, { "type": "ProgressBar", "props": { "y": -151, "x": -113, "var": "bar", "value": 1, "skin": "components/blood_progress.png", "scaleY": 4, "scaleX": 4, "runtime": "ProgressBar" } }], "animations": [{ "nodes": [{ "target": 47, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 47, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 47, "key": "visible", "index": 3 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 47, "key": "visible", "index": 5 }], "skin": [{ "value": "components/fire_light.png", "tweenMethod": "linearNone", "tween": false, "target": 47, "key": "skin", "index": 0 }, { "value": "components/fire_light1.png", "tweenMethod": "linearNone", "tween": false, "target": 47, "key": "skin", "index": 3 }, { "value": "components/fire_light2.png", "tweenMethod": "linearNone", "tween": false, "target": 47, "key": "skin", "index": 4 }] } }, { "target": 45, "keyframes": { "y": [{ "value": 77, "tweenMethod": "linearNone", "tween": true, "target": 45, "key": "y", "index": 0 }, { "value": 77, "tweenMethod": "linearNone", "tween": true, "target": 45, "key": "y", "index": 3 }, { "value": 77, "tweenMethod": "linearNone", "tween": true, "target": 45, "key": "y", "index": 10 }], "x": [{ "value": 97, "tweenMethod": "linearNone", "tween": true, "target": 45, "key": "x", "index": 0 }, { "value": 100, "tweenMethod": "linearNone", "tween": true, "target": 45, "key": "x", "index": 3 }, { "value": 87, "tweenMethod": "linearNone", "tween": true, "target": 45, "label": null, "key": "x", "index": 5 }, { "value": 90, "tweenMethod": "linearNone", "tween": true, "target": 45, "key": "x", "index": 7 }, { "value": 97, "tweenMethod": "linearNone", "tween": true, "target": 45, "label": null, "key": "x", "index": 10 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 45, "key": "rotation", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 45, "key": "rotation", "index": 5 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 45, "key": "rotation", "index": 7 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 45, "label": null, "key": "rotation", "index": 10 }] } }, { "target": 51, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 51, "key": "rotation", "index": 0 }, { "value": 15, "tweenMethod": "linearNone", "tween": true, "target": 51, "key": "rotation", "index": 3 }, { "value": 15, "tweenMethod": "linearNone", "tween": true, "target": 51, "label": null, "key": "rotation", "index": 5 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 51, "key": "rotation", "index": 7 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 51, "label": null, "key": "rotation", "index": 10 }] } }, { "target": 53, "keyframes": { "x": [{ "value": 55, "tweenMethod": "linearNone", "tween": true, "target": 53, "key": "x", "index": 0 }, { "value": 37, "tweenMethod": "linearNone", "tween": true, "target": 53, "key": "x", "index": 3 }, { "value": 14, "tweenMethod": "linearNone", "tween": true, "target": 53, "key": "x", "index": 7 }, { "value": 55, "tweenMethod": "linearNone", "tween": true, "target": 53, "key": "x", "index": 10 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 53, "key": "rotation", "index": 0 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 53, "key": "rotation", "index": 3 }, { "value": 25, "tweenMethod": "linearNone", "tween": true, "target": 53, "label": null, "key": "rotation", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 53, "key": "rotation", "index": 7 }] } }, { "target": 56, "keyframes": { "skin": [{ "value": "shoot_0/s01.png", "tweenMethod": "linearNone", "tween": false, "target": 56, "key": "skin", "index": 0 }, { "value": "shoot_0/s04.png", "tweenMethod": "linearNone", "tween": false, "target": 56, "key": "skin", "index": 3 }, { "value": "shoot_0/s08.png", "tweenMethod": "linearNone", "tween": false, "target": 56, "key": "skin", "index": 7 }, { "value": "shoot_0/s01.png", "tweenMethod": "linearNone", "tween": false, "target": 56, "key": "skin", "index": 10 }] } }], "name": "aciton_shoot", "id": 2, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 39, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 39, "key": "rotation", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 39, "key": "rotation", "index": 9 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 39, "label": null, "key": "rotation", "index": 15 }] } }], "name": "aciton_fullbullets", "id": 3, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 43, "keyframes": { "y": [{ "value": 52, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "y", "index": 0 }, { "value": 30, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "y", "index": 5 }, { "value": 48, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "y", "index": 7 }, { "value": 53, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "y", "index": 9 }], "x": [{ "value": 50, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "x", "index": 0 }, { "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "x", "index": 5 }, { "value": -17, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "x", "index": 7 }, { "value": -38, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "x", "index": 9 }], "visible": [{ "value": true, "tweenMethod": "linearNone", "tween": false, "target": 43, "key": "visible", "index": 0 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 43, "key": "visible", "index": 9 }], "rotation": [{ "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "rotation", "index": 0 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "rotation", "index": 5 }, { "value": -30, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "rotation", "index": 7 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "alpha", "index": 7 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 43, "key": "alpha", "index": 9 }] } }], "name": "action_hemletLost", "id": 4, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 51, "keyframes": { "x": [{ "value": 73, "tweenMethod": "linearNone", "tween": true, "target": 51, "key": "x", "index": 0 }] } }, { "target": 53, "keyframes": { "x": [{ "value": 55, "tweenMethod": "linearNone", "tween": true, "target": 53, "key": "x", "index": 0 }] } }], "name": "idle", "id": 4, "frameRate": 24, "action": 0 }] };
            return GameRoleUI;
        }(View));
        Components.GameRoleUI = GameRoleUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var HomeRoleUI = /** @class */ (function (_super) {
            __extends(HomeRoleUI, _super);
            function HomeRoleUI() {
                return _super.call(this) || this;
            }
            HomeRoleUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.HomeRoleUI.uiView);
            };
            HomeRoleUI.uiView = { "type": "View", "props": { "width": 100, "height": 200 }, "child": [{ "type": "Box", "props": { "y": 0, "x": -12 }, "compId": 41, "child": [{ "type": "Image", "props": { "y": 106, "x": 59, "var": "weapon", "skin": "weapons/S686.png", "scaleY": 1, "scaleX": 1 } }, { "type": "Image", "props": { "y": 7, "x": -34, "skin": "shoot_0/s01.png" } }, { "type": "Image", "props": { "y": 18, "x": 55, "var": "helmet", "skin": "helmets/helmet_miaomi.png", "scaleY": 0.9, "scaleX": 0.9, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 84, "x": 0, "var": "cloth", "skin": "cloths/cloths_miaomi.png", "anchorY": 0.5, "anchorX": 0.5 } }] }], "animations": [{ "nodes": [{ "target": 41, "keyframes": { "y": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 41, "key": "y", "index": 0 }, { "value": -2, "tweenMethod": "linearNone", "tween": true, "target": 41, "key": "y", "index": 10 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 41, "key": "y", "index": 20 }] } }], "name": "idle", "id": 1, "frameRate": 24, "action": 0 }] };
            return HomeRoleUI;
        }(View));
        Components.HomeRoleUI = HomeRoleUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var HuaFeiUI = /** @class */ (function (_super) {
            __extends(HuaFeiUI, _super);
            function HuaFeiUI() {
                return _super.call(this) || this;
            }
            HuaFeiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.HuaFeiUI.uiView);
            };
            HuaFeiUI.uiView = { "type": "View", "props": { "width": 232, "height": 64 }, "child": [{ "type": "Image", "props": { "x": 32, "skin": "components/diamond/background_diamond.png", "centerY": 0.5 } }, { "type": "Image", "props": { "y": 1, "x": 0, "skin": "Icons/icon_chongzhika.png" } }, { "type": "Label", "props": { "y": 16, "x": 98, "width": 111, "var": "diamond", "text": "10", "height": 34, "fontSize": 32, "color": "#010000", "bold": true, "align": "center" } }], "animations": [{ "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 3 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 5 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 9 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 13 }], "x": [{ "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 5 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 10 }, { "value": -11, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 15 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 20 }] } }, { "target": 26, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 1 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 7 }] } }], "name": "shoot", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 3 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 5 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 9 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 13 }], "x": [{ "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 5 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 10 }, { "value": -11, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 15 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 20 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 0 }, { "value": 5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 3 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 20 }] } }], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }] };
            return HuaFeiUI;
        }(View));
        Components.HuaFeiUI = HuaFeiUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var HuaFeiPopLayerUI = /** @class */ (function (_super) {
            __extends(HuaFeiPopLayerUI, _super);
            function HuaFeiPopLayerUI() {
                return _super.call(this) || this;
            }
            HuaFeiPopLayerUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.HuaFeiPopLayerUI.uiView);
            };
            HuaFeiPopLayerUI.uiView = { "type": "Dialog", "props": { "width": 334, "popupCenter": true, "height": 436 }, "child": [{ "type": "Image", "props": { "y": 177, "x": 167, "skin": "background/background_diamond_light.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 65 }, { "type": "Image", "props": { "y": 0, "x": 31, "skin": "Icons/pop_huafei.png" } }, { "type": "Button", "props": { "y": 7, "x": 293, "stateNum": 1, "skin": "commons/button_close.png", "scaleY": 0.6, "scaleX": 0.6, "name": "close" } }], "animations": [{ "nodes": [{ "target": 65, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 65, "key": "rotation", "index": 0 }, { "value": 360, "tweenMethod": "linearNone", "tween": true, "target": 65, "key": "rotation", "index": 180 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }] };
            return HuaFeiPopLayerUI;
        }(Dialog));
        Components.HuaFeiPopLayerUI = HuaFeiPopLayerUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var ItemPopLayerUI = /** @class */ (function (_super) {
            __extends(ItemPopLayerUI, _super);
            function ItemPopLayerUI() {
                return _super.call(this) || this;
            }
            ItemPopLayerUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.ItemPopLayerUI.uiView);
            };
            ItemPopLayerUI.uiView = { "type": "Dialog", "props": { "width": 334, "popupCenter": true, "height": 401 }, "child": [{ "type": "Image", "props": { "y": 177, "x": 167, "skin": "background/background_diamond_light.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 65 }, { "type": "Image", "props": { "y": 0, "x": 0, "skin": "background/background_diamond_pop.png" } }, { "type": "Button", "props": { "y": 7, "x": 272, "stateNum": 1, "skin": "commons/button_close.png", "scaleY": 0.6, "scaleX": 0.6, "name": "close" } }, { "type": "Image", "props": { "y": 152, "x": 157, "var": "icon", "skin": "helmets/helmet_pineapple.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 259, "x": 7, "width": 311, "var": "des", "text": "x30", "height": 54, "fontSize": 40, "color": "#000000", "bold": true, "align": "center" } }], "animations": [{ "nodes": [{ "target": 65, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 65, "key": "rotation", "index": 0 }, { "value": 360, "tweenMethod": "linearNone", "tween": true, "target": 65, "key": "rotation", "index": 180 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }] };
            return ItemPopLayerUI;
        }(Dialog));
        Components.ItemPopLayerUI = ItemPopLayerUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var MessageUI = /** @class */ (function (_super) {
            __extends(MessageUI, _super);
            function MessageUI() {
                return _super.call(this) || this;
            }
            MessageUI.prototype.createChildren = function () {
                View.regComponent("Core.UI.Button", Core.UI.Button);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.MessageUI.uiView);
            };
            MessageUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 729, "skin": "commons/tan.png", "name": "bg", "height": 500, "sizeGrid": "60,60,60,60" } }, { "type": "Button", "props": { "y": 50, "x": 676, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 43, "text": "Tip", "fontSize": 40, "color": "#ffffff", "centerX": -15, "bold": true } }, { "type": "Button", "props": { "y": 419, "x": 378, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/buttom_normal.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 21, "x": 3, "width": 260, "visible": true, "valign": "middle", "text": "Go", "height": 53, "fontSize": 34, "color": "#060606", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 263, "x": 380, "var": "wIcon", "skin": "weapons/AKM.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 123, "x": 114, "wordWrap": true, "width": 491, "text": "New weapon unlocked, go armory to check it.", "height": 46, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 307, "x": 114, "wordWrap": true, "width": 512, "var": "wName", "text": "AKM", "height": 46, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }] };
            return MessageUI;
        }(Dialog));
        Components.MessageUI = MessageUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var MessagePopUI = /** @class */ (function (_super) {
            __extends(MessagePopUI, _super);
            function MessagePopUI() {
                return _super.call(this) || this;
            }
            MessagePopUI.prototype.createChildren = function () {
                View.regComponent("Core.UI.Button", Core.UI.Button);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.MessagePopUI.uiView);
            };
            MessagePopUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 729, "skin": "commons/tan.png", "name": "bg", "height": 500, "sizeGrid": "60,60,60,60" } }, { "type": "Button", "props": { "y": 50, "x": 676, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 40, "text": "Tip", "fontSize": 40, "color": "#ffffff", "centerX": -15, "bold": true } }, { "type": "Button", "props": { "y": 378, "x": 374, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/buttom_normal.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 21, "x": 3, "width": 260, "visible": true, "valign": "middle", "text": "Go", "height": 53, "fontSize": 34, "color": "#060606", "bold": true, "align": "center" } }] }, { "type": "Label", "props": { "y": 197, "x": 103, "wordWrap": true, "width": 512, "var": "message", "text": "New weapon unlocked, go armory to check it.", "height": 46, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }] };
            return MessagePopUI;
        }(Dialog));
        Components.MessagePopUI = MessagePopUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var PowerUI = /** @class */ (function (_super) {
            __extends(PowerUI, _super);
            function PowerUI() {
                return _super.call(this) || this;
            }
            PowerUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.PowerUI.uiView);
            };
            PowerUI.uiView = { "type": "View", "props": { "width": 232, "height": 64 }, "child": [{ "type": "Image", "props": { "x": 32, "width": 194, "skin": "components/diamond/background_diamond.png", "sizeGrid": "10,10,10,10", "height": 45, "centerY": 0 } }, { "type": "Image", "props": { "y": 4, "x": 0, "skin": "Icons/icon_power.png", "scaleY": 1.8, "scaleX": 1.8 } }, { "type": "Label", "props": { "y": 16, "x": 87, "var": "amont", "text": "10", "fontSize": 32, "color": "#0a0000", "bold": true } }, { "type": "Label", "props": { "y": 36, "x": 168, "width": 45, "var": "recovery", "text": "10:00", "height": 18, "fontSize": 16, "color": "#0a0000" } }], "animations": [{ "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 3 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 5 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 9 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 13 }], "x": [{ "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 5 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 10 }, { "value": -11, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 15 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 20 }] } }, { "target": 26, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 1 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 26, "key": "alpha", "index": 7 }] } }], "name": "shoot", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 3 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 5 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 9 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 13 }], "x": [{ "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 5 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 10 }, { "value": -11, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 15 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "x", "index": 20 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 0 }, { "value": 5, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 3 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "rotation", "index": 20 }] } }], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }] };
            return PowerUI;
        }(View));
        Components.PowerUI = PowerUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var PowerEnoughPopUI = /** @class */ (function (_super) {
            __extends(PowerEnoughPopUI, _super);
            function PowerEnoughPopUI() {
                return _super.call(this) || this;
            }
            PowerEnoughPopUI.prototype.createChildren = function () {
                View.regComponent("Core.UI.Button", Core.UI.Button);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.PowerEnoughPopUI.uiView);
            };
            PowerEnoughPopUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 729, "skin": "commons/tan.png", "name": "bg", "height": 500, "sizeGrid": "60,60,60,60" } }, { "type": "Button", "props": { "y": 50, "x": 676, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 52, "text": "Tip", "fontSize": 40, "color": "#ffffff", "centerX": -15, "bold": true } }, { "type": "Button", "props": { "y": 383, "x": 365, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/buttom_normal.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 23, "x": 4, "width": 260, "visible": true, "valign": "middle", "text": "Go", "height": 47, "fontSize": 34, "color": "#060606", "bold": true, "align": "center" } }] }, { "type": "Label", "props": { "y": 150, "x": 114, "wordWrap": true, "width": 512, "text": "Sức lực của bạn đã đầy và không thể có thêm, \\nStill want to see the ads?", "height": 102, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }] };
            return PowerEnoughPopUI;
        }(Dialog));
        Components.PowerEnoughPopUI = PowerEnoughPopUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var RoleMiaoMiUI = /** @class */ (function (_super) {
            __extends(RoleMiaoMiUI, _super);
            function RoleMiaoMiUI() {
                return _super.call(this) || this;
            }
            RoleMiaoMiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.RoleMiaoMiUI.uiView);
            };
            RoleMiaoMiUI.uiView = { "type": "View", "props": { "width": 100, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 135, "x": 19, "var": "leftLeg1", "skin": "components/role/left_leg.png" } }, { "type": "Image", "props": { "y": 134, "x": 61, "var": "rightLeg1", "skin": "components/role/right_leg.png" } }, { "type": "Image", "props": { "y": 191, "x": 12, "skin": "components/role/left_leg2.png" } }, { "type": "Image", "props": { "y": 187, "x": 77, "skin": "components/role/right_leg2.png" } }, { "type": "Box", "props": { "y": -12.6, "x": -12 }, "compId": 41, "child": [{ "type": "Image", "props": { "y": 68, "x": 58, "var": "head", "skin": "components/role/head.png", "rotation": 1.6, "anchorY": 1, "anchorX": 0.5 }, "compId": 27 }, { "type": "Image", "props": { "y": 6, "x": 48, "var": "helmet", "skin": "helmets/helmet_miaomi.png", "scaleY": 0.9, "scaleX": 0.9, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 71, "x": 60, "var": "rigthArm1", "skin": "components/role/right_arm.png" } }, { "type": "Image", "props": { "y": 92, "x": 72, "var": "rightArm2", "skin": "components/role/arm.png", "rotation": 20 } }, { "type": "Image", "props": { "y": 66, "x": 43, "var": "body", "skin": "components/role/body.png" } }, { "type": "Image", "props": { "y": 66, "x": 9, "var": "leftArm1", "skin": "components/role/left_arm.png" } }, { "type": "Image", "props": { "y": 127, "x": 52, "var": "cloth", "skin": "cloths/cloths_miaomi.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 70, "x": 20, "var": "leftArm2", "skin": "components/role/arm.png", "rotation": 40 } }] }], "animations": [{ "nodes": [{ "target": 41, "keyframes": { "y": [{ "value": -12.6, "tweenMethod": "linearNone", "tween": true, "target": 41, "key": "y", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 41, "key": "y", "index": 10 }, { "value": -12.6, "tweenMethod": "linearNone", "tween": true, "target": 41, "key": "y", "index": 20 }] } }, { "target": 27, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 27, "key": "rotation", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 27, "key": "rotation", "index": 10 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 27, "key": "rotation", "index": 20 }] } }], "name": "idle", "id": 1, "frameRate": 24, "action": 2 }] };
            return RoleMiaoMiUI;
        }(View));
        Components.RoleMiaoMiUI = RoleMiaoMiUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var RoleTableUI = /** @class */ (function (_super) {
            __extends(RoleTableUI, _super);
            function RoleTableUI() {
                return _super.call(this) || this;
            }
            RoleTableUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.RoleTableUI.uiView);
            };
            RoleTableUI.uiView = { "type": "View", "props": { "width": 130, "height": 140 }, "child": [{ "type": "Box", "props": { "y": 19, "x": 30, "width": 72, "height": 104 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "wLeft", "skin": "game/RoleTable_Left.png" }, "compId": 12 }, { "type": "Image", "props": { "y": 0, "x": 72, "var": "wRight", "skin": "game/RoleTable_Right.png", "anchorX": 1 }, "compId": 13 }] }], "animations": [{ "nodes": [{ "target": 12, "keyframes": { "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 0 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 5 }] } }, { "target": 13, "keyframes": { "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 5 }] } }], "name": "action_open", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 12, "keyframes": { "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 0 }], "scaleX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 5 }] } }, { "target": 13, "keyframes": { "scaleX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 5 }] } }], "name": "aciton_close", "id": 1, "frameRate": 24, "action": 0 }] };
            return RoleTableUI;
        }(View));
        Components.RoleTableUI = RoleTableUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Components;
    (function (Components) {
        var RoleYTUI = /** @class */ (function (_super) {
            __extends(RoleYTUI, _super);
            function RoleYTUI() {
                return _super.call(this) || this;
            }
            RoleYTUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Components.RoleYTUI.uiView);
            };
            RoleYTUI.uiView = { "type": "View", "props": { "width": 100, "height": 200 }, "child": [{ "type": "Box", "props": { "y": -12.6, "x": -12 }, "compId": 41, "child": [{ "type": "Image", "props": { "y": 6, "x": 48, "var": "helmet", "skin": "helmets/helmet_yt.png", "scaleY": 0.9, "scaleX": 0.9, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 87, "x": -17, "var": "cloth", "skin": "cloths/cloths_yt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 63, "x": 10, "var": "weapon", "skin": "weapons/YT.png", "scaleY": 1, "scaleX": 1 } }] }], "animations": [{ "nodes": [{ "target": 41, "keyframes": { "y": [{ "value": -12.6, "tweenMethod": "linearNone", "tween": true, "target": 41, "key": "y", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 41, "key": "y", "index": 10 }, { "value": -12.6, "tweenMethod": "linearNone", "tween": true, "target": 41, "key": "y", "index": 20 }] } }], "name": "idle", "id": 1, "frameRate": 24, "action": 2 }] };
            return RoleYTUI;
        }(View));
        Components.RoleYTUI = RoleYTUI;
    })(Components = ui.Components || (ui.Components = {}));
})(ui || (ui = {}));
(function (ui) {
    var Effects;
    (function (Effects) {
        var MoseUpUI = /** @class */ (function (_super) {
            __extends(MoseUpUI, _super);
            function MoseUpUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.Effects.MoseUpUI.uiView;
                return _this;
            }
            MoseUpUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "stateNum": 1, "skin": "common/button_red.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.9, "tweenMethod": "sineOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": "end", "key": "scaleX", "index": 10 }] } }], "name": "effect", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 11 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 0 }] };
            return MoseUpUI;
        }(laya.display.EffectAnimation));
        Effects.MoseUpUI = MoseUpUI;
    })(Effects = ui.Effects || (ui.Effects = {}));
})(ui || (ui = {}));
(function (ui) {
    var Effects;
    (function (Effects) {
        var MouseDownUI = /** @class */ (function (_super) {
            __extends(MouseDownUI, _super);
            function MouseDownUI() {
                var _this = _super.call(this) || this;
                _this.effectData = ui.Effects.MouseDownUI.uiView;
                return _this;
            }
            MouseDownUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "stateNum": 1, "skin": "common/button_red.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "sineOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }], "name": "effect", "id": 1, "frameRate": 24, "action": 0 }] };
            return MouseDownUI;
        }(laya.display.EffectAnimation));
        Effects.MouseDownUI = MouseDownUI;
    })(Effects = ui.Effects || (ui.Effects = {}));
})(ui || (ui = {}));
(function (ui) {
    var Guide;
    (function (Guide) {
        var GuideUI = /** @class */ (function (_super) {
            __extends(GuideUI, _super);
            function GuideUI() {
                return _super.call(this) || this;
            }
            GuideUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Guide.GuideUI.uiView);
            };
            GuideUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 640, "x": 272, "var": "hand", "skin": "commons/guide_hand.png" } }] };
            return GuideUI;
        }(Dialog));
        Guide.GuideUI = GuideUI;
    })(Guide = ui.Guide || (ui.Guide = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Common;
        (function (Common) {
            var HuafeiNotEnoughLayerUI = /** @class */ (function (_super) {
                __extends(HuafeiNotEnoughLayerUI, _super);
                function HuafeiNotEnoughLayerUI() {
                    return _super.call(this) || this;
                }
                HuafeiNotEnoughLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Common.HuafeiNotEnoughLayerUI.uiView);
                };
                HuafeiNotEnoughLayerUI.uiView = { "type": "Dialog", "props": { "y": -3, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "background/background_layer.png", "name": "bg" } }, { "type": "Label", "props": { "y": 31, "text": "话 费 不 足", "fontSize": 40, "color": "#ffffff", "centerX": 0.5, "bold": true } }, { "type": "Label", "props": { "y": 164, "x": 79, "wordWrap": true, "width": 574, "var": "context", "text": "话费券不足30元,无法兑换", "height": 159, "fontSize": 38, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 51, "x": 672, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }] };
                return HuafeiNotEnoughLayerUI;
            }(Dialog));
            Common.HuafeiNotEnoughLayerUI = HuafeiNotEnoughLayerUI;
        })(Common = Layers.Common || (Layers.Common = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Common;
        (function (Common) {
            var HuafeiTipLayerUI = /** @class */ (function (_super) {
                __extends(HuafeiTipLayerUI, _super);
                function HuafeiTipLayerUI() {
                    return _super.call(this) || this;
                }
                HuafeiTipLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Common.HuafeiTipLayerUI.uiView);
                };
                HuafeiTipLayerUI.uiView = { "type": "Dialog", "props": { "y": -3, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "background/background_layer.png", "name": "bg" } }, { "type": "Label", "props": { "y": 31, "text": "提示", "fontSize": 40, "color": "#ffffff", "centerX": 0.5, "bold": true } }, { "type": "Label", "props": { "y": 164, "x": 79, "wordWrap": true, "width": 554, "var": "context", "text": "1 每闯一关得0.5话费券,相同关卡不会重复获得\\n\\n2 满30元能兑换话费，不满30元不可兑换 \\n\\n3 话费兑换后48小时到账 微信客服:763689673\\n\\n4通过作弊或其他非正常手段通关的不给与话费兑换,需要提供第六十关通关视频即可兑换话费\\n\\n5 本游戏所有解释权归游戏开发者所有", "height": 248, "fontSize": 22, "color": "#000000", "bold": true, "align": "left" } }, { "type": "Button", "props": { "y": 51, "x": 672, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }] };
                return HuafeiTipLayerUI;
            }(Dialog));
            Common.HuafeiTipLayerUI = HuafeiTipLayerUI;
        })(Common = Layers.Common || (Layers.Common = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Common;
        (function (Common) {
            var LoginLayerUI = /** @class */ (function (_super) {
                __extends(LoginLayerUI, _super);
                function LoginLayerUI() {
                    return _super.call(this) || this;
                }
                LoginLayerUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Common.LoginLayerUI.uiView);
                };
                LoginLayerUI.uiView = { "type": "Dialog", "props": { "width": 310, "height": 100 }, "child": [{ "type": "Button", "props": { "var": "btnLogin", "stateNum": 1, "skin": "commons/btn_skin_login.png", "centerY": 0.5, "centerX": 0.5 } }] };
                return LoginLayerUI;
            }(Dialog));
            Common.LoginLayerUI = LoginLayerUI;
        })(Common = Layers.Common || (Layers.Common = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Common;
        (function (Common) {
            var PowerNotEnoughLayerUI = /** @class */ (function (_super) {
                __extends(PowerNotEnoughLayerUI, _super);
                function PowerNotEnoughLayerUI() {
                    return _super.call(this) || this;
                }
                PowerNotEnoughLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Common.PowerNotEnoughLayerUI.uiView);
                };
                PowerNotEnoughLayerUI.uiView = { "type": "Dialog", "props": { "y": -3, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 729, "skin": "commons/tan.png", "name": "bg", "height": 500, "sizeGrid": "60,60,60,60" } }, { "type": "Label", "props": { "y": 45, "text": "Sức mạnh không đủ", "fontSize": 40, "color": "#ffffff", "centerX": 4, "bold": true } }, { "type": "Button", "props": { "y": 393, "x": 364, "var": "btn", "stateNum": 1, "skin": "commons/button_video_get.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 164, "x": 79, "wordWrap": true, "width": 574, "var": "context", "text": "", "height": 159, "fontSize": 38, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 51, "x": 672, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }] };
                return PowerNotEnoughLayerUI;
            }(Dialog));
            Common.PowerNotEnoughLayerUI = PowerNotEnoughLayerUI;
        })(Common = Layers.Common || (Layers.Common = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Game;
        (function (Game) {
            var AirDropLayerUI = /** @class */ (function (_super) {
                __extends(AirDropLayerUI, _super);
                function AirDropLayerUI() {
                    return _super.call(this) || this;
                }
                AirDropLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Game.AirDropLayerUI.uiView);
                };
                AirDropLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 729, "skin": "commons/tan.png", "name": "bg", "height": 500, "sizeGrid": "60,60,60,60" } }, { "type": "Button", "props": { "y": 50, "x": 676, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 37, "text": "Lucky Airdrop", "fontSize": 40, "color": "#ffffff", "centerX": -15, "bold": true } }, { "type": "Button", "props": { "y": 437, "x": 372, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/button_video_get.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 30, "x": 66, "width": 0, "visible": false, "text": "分享试用", "height": 0, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Label", "props": { "y": 326, "x": 113, "wordWrap": true, "width": 512, "height": 46, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 249, "x": 109, "wordWrap": true, "width": 512, "text": "Get one of the weapon in max level for free", "height": 67, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }, { "type": "HBox", "props": { "y": 142, "x": 65, "width": 600, "space": 40 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "weapons/Kar98K.png", "scaleY": 0.6, "scaleX": 0.6 } }, { "type": "Label", "props": { "y": 50, "x": 28, "width": 0, "text": "Kar98K", "height": 0, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "weapons/M249.png", "scaleY": 0.6, "scaleX": 0.6 } }, { "type": "Label", "props": { "y": 50, "x": 28, "width": 0, "text": "M249", "height": 0, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "weapons/AWM.png", "scaleY": 0.6, "scaleX": 0.6 } }, { "type": "Label", "props": { "y": 50, "x": 28, "width": 0, "text": "AWM", "height": 0, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }] }] }] };
                return AirDropLayerUI;
            }(Dialog));
            Game.AirDropLayerUI = AirDropLayerUI;
        })(Game = Layers.Game || (Layers.Game = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Game;
        (function (Game) {
            var AirMaoMiDropLayerUI = /** @class */ (function (_super) {
                __extends(AirMaoMiDropLayerUI, _super);
                function AirMaoMiDropLayerUI() {
                    return _super.call(this) || this;
                }
                AirMaoMiDropLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Game.AirMaoMiDropLayerUI.uiView);
                };
                AirMaoMiDropLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 729, "skin": "commons/tan.png", "name": "bg", "height": 500, "sizeGrid": "60,60,60,60" } }, { "type": "Button", "props": { "y": 50, "x": 676, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 37, "text": "Kitty Suit", "fontSize": 40, "color": "#ffffff", "centerX": -15, "bold": true } }, { "type": "Button", "props": { "y": 437, "x": 372, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/button_video_get.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 279, "x": 328, "wordWrap": true, "width": 309, "text": "(Limited to this use)", "height": 46, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 181, "x": 166, "skin": "helmets/helmet_miaomi.png", "scaleY": 0.9, "scaleX": 0.9, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 302, "x": 170, "skin": "cloths/cloths_miaomi.png", "anchorY": 0.5, "anchorX": 0.5 } }] };
                return AirMaoMiDropLayerUI;
            }(Dialog));
            Game.AirMaoMiDropLayerUI = AirMaoMiDropLayerUI;
        })(Game = Layers.Game || (Layers.Game = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Game;
        (function (Game) {
            var AirYTDropLayerUI = /** @class */ (function (_super) {
                __extends(AirYTDropLayerUI, _super);
                function AirYTDropLayerUI() {
                    return _super.call(this) || this;
                }
                AirYTDropLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    View.regComponent("ui.Components.RoleYTUI", ui.Components.RoleYTUI);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Game.AirYTDropLayerUI.uiView);
                };
                AirYTDropLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "background/background_layer.png", "name": "bg" } }, { "type": "Button", "props": { "y": 50, "x": 676, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 27, "text": "Jade Bunny Suit", "fontSize": 40, "color": "#ffffff", "centerX": 22, "bold": true } }, { "type": "Button", "props": { "y": 437, "x": 372, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/button_video_get.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 279, "x": 328, "wordWrap": true, "width": 310, "text": "(Limited to this use)", "height": 46, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }, { "type": "RoleYT", "props": { "y": 164, "x": 152, "runtime": "ui.Components.RoleYTUI" } }] };
                return AirYTDropLayerUI;
            }(Dialog));
            Game.AirYTDropLayerUI = AirYTDropLayerUI;
        })(Game = Layers.Game || (Layers.Game = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Game;
        (function (Game) {
            var FailLayerUI = /** @class */ (function (_super) {
                __extends(FailLayerUI, _super);
                function FailLayerUI() {
                    return _super.call(this) || this;
                }
                FailLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Game.FailLayerUI.uiView);
                };
                FailLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 699, "popupCenter": true, "height": 1060 }, "child": [{ "type": "Image", "props": { "y": 40, "x": 2, "width": 699, "skin": "commons/tan.png", "height": 1011, "sizeGrid": "60,60,60,60" } }, { "type": "Image", "props": { "y": 0, "x": 112, "skin": "layers/victory/fail_text.png" } }, { "type": "Image", "props": { "y": 153, "x": 172, "skin": "layers/victory/background_v2.png" } }, { "type": "Button", "props": { "y": 807, "x": 184, "var": "btnContinue", "stateNum": 1, "skin": "commons/buttom_normal.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 18, "x": 24, "skin": "commons/button_icon_video.png" } }, { "type": "Label", "props": { "y": 23, "x": 98, "wordWrap": true, "width": 147, "text": "Free Shield + Revive", "name": "tName", "height": 58, "fontSize": 24, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Button", "props": { "y": 807, "x": 519, "stateNum": 1, "skin": "commons/buttom_normal.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 28, "x": 74, "wordWrap": true, "width": 124, "text": "Lùi", "name": "tName", "height": 46, "fontSize": 40, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Button", "props": { "y": 632, "x": 519, "var": "buttonArmor", "stateNum": 1, "skin": "scenes/home/button_armor.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 630, "x": 184, "var": "buttonWeapon", "stateNum": 1, "skin": "scenes/home/button_weapon.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 904, "x": 64, "width": 572, "var": "list", "spaceY": 30, "spaceX": 30, "repeatY": 1, "repeatX": 4, "height": 103 }, "child": [{ "type": "Box", "props": { "width": 120, "renderType": "render", "height": 90 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 120, "skin": "Icons/icon_2048.png", "name": "image", "height": 90 } }] }] }] };
                return FailLayerUI;
            }(Dialog));
            Game.FailLayerUI = FailLayerUI;
        })(Game = Layers.Game || (Layers.Game = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Game;
        (function (Game) {
            var VictoryLayerUI = /** @class */ (function (_super) {
                __extends(VictoryLayerUI, _super);
                function VictoryLayerUI() {
                    return _super.call(this) || this;
                }
                VictoryLayerUI.prototype.createChildren = function () {
                    View.regComponent("0", 0);
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Game.VictoryLayerUI.uiView);
                };
                VictoryLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 699, "popupCenter": true, "height": 1200 }, "child": [{ "type": "Image", "props": { "y": 317, "skin": "background/background_diamond_light.png", "runtime": "0", "rotation": 308, "centerX": -2, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 20 }, { "type": "Image", "props": { "y": 182, "x": 0, "width": 699, "skin": "commons/tan.png", "height": 1011, "sizeGrid": "60,60,60,60" } }, { "type": "Image", "props": { "y": 328, "x": 157, "skin": "layers/victory/background_v1.png" } }, { "type": "Image", "props": { "y": 221, "x": 171, "skin": "layers/victory/victory_text.png" } }, { "type": "Image", "props": { "y": 725, "x": 259, "width": 210, "skin": "components/diamond/background_diamond.png", "sizeGrid": "10,10,10,10", "height": 58 }, "child": [{ "type": "Label", "props": { "y": 11, "x": 60, "width": 100, "var": "rewardLabel", "text": "0", "height": 30, "fontSize": 30, "color": "#ffffff", "bold": true, "align": "right" } }, { "type": "Image", "props": { "y": -41, "x": 1, "skin": "Icons/icon_diamond.png" } }] }, { "type": "Button", "props": { "y": 857, "x": 200, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/button_get.png", "runtime": "Core.UI.Button", "left": 100, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 857, "visible": true, "var": "btn2", "stateNum": 1, "skin": "commons/button_video_get.png", "runtime": "Core.UI.Button", "right": 100, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 85, "x": 29, "skin": "commons/text_double.png" } }] }, { "type": "Button", "props": { "y": 1020, "x": 350, "visible": false, "var": "bnRecorder", "stateNum": 1, "skin": "commons/buttom_normal.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 11, "x": 89, "width": 154, "visible": true, "valign": "middle", "text": "录制分享", "height": 53, "fontSize": 32, "color": "#060606", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 61, "x": 132, "visible": true, "valign": "middle", "text": "+50", "fontSize": 20, "color": "#060606", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 60, "x": 171, "skin": "Icons/icon_diamond.png", "scaleY": 0.4, "scaleX": 0.4 } }, { "type": "Image", "props": { "y": 24, "x": 31, "skin": "Icons/icon_recorder.png" } }] }], "animations": [{ "nodes": [{ "target": 20, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "rotation", "index": 0 }, { "value": 360, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "rotation", "index": 180 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }] };
                return VictoryLayerUI;
            }(Dialog));
            Game.VictoryLayerUI = VictoryLayerUI;
        })(Game = Layers.Game || (Layers.Game = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var DefineLayerUI = /** @class */ (function (_super) {
                __extends(DefineLayerUI, _super);
                function DefineLayerUI() {
                    return _super.call(this) || this;
                }
                DefineLayerUI.prototype.createChildren = function () {
                    View.regComponent("Power", Power);
                    View.regComponent("Diamond", Diamond);
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.DefineLayerUI.uiView);
                };
                DefineLayerUI.uiView = { "type": "Dialog", "props": { "width": 750, "popupCenter": false, "height": 1334 }, "child": [{ "type": "Power", "props": { "y": 120, "x": 392, "runtime": "Power" } }, { "type": "Diamond", "props": { "y": 120, "x": 152, "runtime": "Diamond" } }, { "type": "Button", "props": { "y": 149, "x": 76, "stateNum": 1, "skin": "commons/button_back.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 230, "x": 20, "width": 710, "skin": "commons/tan.png", "height": 951, "sizeGrid": "60,60,60,60" } }, { "type": "Tab", "props": { "y": 236, "x": 23, "width": 704, "var": "tab", "selectedIndex": 0, "height": 102 }, "child": [{ "type": "Button", "props": { "y": 49, "x": 175, "stateNum": 1, "skin": "commons/tab_nomal1.png", "name": "item0", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 18, "x": 145, "skin": "game/icon_hemlet.png" } }] }, { "type": "Button", "props": { "y": 49, "x": 525, "stateNum": 1, "skin": "commons/tab_nomal2.png", "name": "item1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 18, "x": 145, "skin": "game/icon_cloth.png" } }] }] }, { "type": "List", "props": { "y": 350, "x": 95, "width": 562, "var": "page0", "spaceY": 20, "spaceX": 50, "repeatY": 3, "repeatX": 2, "height": 710 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "renderType": "render" }, "child": [{ "type": "Image", "props": { "skin": "layers/armor/armor_item.png" } }, { "type": "Label", "props": { "y": 13, "x": 15, "width": 218, "text": "一级头盔", "name": "tName", "height": 32, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 74, "x": 73, "skin": "helmets/icon_helmet1.png", "name": "skin" } }, { "type": "Label", "props": { "y": 206, "x": 8, "wordWrap": true, "width": 237, "text": "装备中", "name": "desLabel", "height": 56, "fontSize": 24, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 226, "x": 129, "stateNum": 1, "skin": "commons/button_equip.png", "runtime": "Core.UI.Button", "name": "btn", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 168, "x": 81, "name": "container" }, "child": [{ "type": "Image", "props": { "y": -20, "x": 1, "skin": "Icons/icon_diamond.png", "scaleY": 0.4, "scaleX": 0.4, "name": "costImage" } }, { "type": "Label", "props": { "y": 1, "x": 41, "text": "0", "name": "priceLabel", "fontSize": 22, "color": "#000000", "bold": true, "align": "center" } }] }] }] }, { "type": "List", "props": { "y": 350, "x": 95, "width": 562, "var": "page1", "spaceY": 20, "spaceX": 50, "repeatY": 3, "repeatX": 2, "height": 710 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "renderType": "render" }, "child": [{ "type": "Image", "props": { "skin": "layers/armor/armor_item.png" } }, { "type": "Label", "props": { "y": 13, "x": 15, "width": 218, "text": "一级头盔", "name": "tName", "height": 32, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 65, "x": 73, "skin": "helmets/icon_helmet1.png", "name": "skin" } }, { "type": "Label", "props": { "y": 206, "x": 5, "wordWrap": true, "width": 241, "text": "装备中", "name": "desLabel", "height": 56, "fontSize": 24, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 226, "x": 129, "stateNum": 1, "skin": "commons/button_equip.png", "runtime": "Core.UI.Button", "name": "btn", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 168, "x": 81, "name": "container" }, "child": [{ "type": "Image", "props": { "y": -17, "x": 1, "skin": "Icons/icon_diamond.png", "scaleY": 0.4, "scaleX": 0.4, "name": "costImage" } }, { "type": "Label", "props": { "y": 1, "x": 41, "text": "0", "name": "priceLabel", "fontSize": 22, "color": "#000000", "bold": true, "align": "center" } }] }] }] }] };
                return DefineLayerUI;
            }(Dialog));
            Home.DefineLayerUI = DefineLayerUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var MoreLayerUI = /** @class */ (function (_super) {
                __extends(MoreLayerUI, _super);
                function MoreLayerUI() {
                    return _super.call(this) || this;
                }
                MoreLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.MoreLayerUI.uiView);
                };
                MoreLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "background/background_layer.png", "name": "bg" } }, { "type": "Label", "props": { "y": 30, "x": 268, "text": "更 多 游 戏", "fontSize": 40, "color": "#ffffff", "bold": true } }, { "type": "List", "props": { "y": 108, "x": 52, "width": 624, "var": "list", "spaceY": 30, "spaceX": 30, "repeatX": 5, "height": 363 }, "child": [{ "type": "Box", "props": { "width": 100, "renderType": "render", "height": 100 }, "child": [{ "type": "Button", "props": { "y": 50, "x": 50, "width": 100, "stateNum": 1, "runtime": "Core.UI.Button", "name": "btn", "height": 100, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 100, "skin": "Icons/icon_2048.png", "name": "image", "height": 100 } }, { "type": "Label", "props": { "y": 67, "x": 0, "wordWrap": true, "width": 100, "text": "六角消消除", "strokeColor": "#000000", "stroke": 1, "name": "label", "height": 22, "fontSize": 18, "color": "#f1f9f3", "bold": true, "align": "center" } }] }] }, { "type": "Button", "props": { "y": 52, "x": 674, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }] };
                return MoreLayerUI;
            }(Dialog));
            Home.MoreLayerUI = MoreLayerUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var OnLineLayerUI = /** @class */ (function (_super) {
                __extends(OnLineLayerUI, _super);
                function OnLineLayerUI() {
                    return _super.call(this) || this;
                }
                OnLineLayerUI.prototype.createChildren = function () {
                    View.regComponent("DoubleBox", DoubleBox);
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.OnLineLayerUI.uiView);
                };
                OnLineLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 729, "skin": "commons/tan.png", "name": "bg", "height": 500, "sizeGrid": "60,60,60,60" } }, { "type": "Label", "props": { "y": 31, "text": "Off-line Reward", "fontSize": 40, "color": "#ffffff", "centerX": -15, "bold": true } }, { "type": "Label", "props": { "y": 159, "wordWrap": true, "width": 474, "var": "context", "text": "111", "height": 159, "fontSize": 36, "color": "#ffffff", "centerX": -20, "bold": true, "align": "center" } }, { "type": "DoubleBox", "props": { "y": 401, "x": 249, "var": "doubleBox", "runtime": "DoubleBox" } }, { "type": "Button", "props": { "y": 30, "x": 680, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 342, "x": 365, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/button_video_get.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }] };
                return OnLineLayerUI;
            }(Dialog));
            Home.OnLineLayerUI = OnLineLayerUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var PopSelectedUI = /** @class */ (function (_super) {
                __extends(PopSelectedUI, _super);
                function PopSelectedUI() {
                    return _super.call(this) || this;
                }
                PopSelectedUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.PopSelectedUI.uiView);
                };
                PopSelectedUI.uiView = { "type": "Dialog", "props": { "width": 661, "popupCenter": true, "height": 620 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 0, "width": 661, "skin": "commons/tan.png", "height": 524, "sizeGrid": "60,60,60,60" }, "child": [{ "type": "Label", "props": { "y": 32, "x": 63, "width": 520, "text": "Chọn vũ khí và áo giáp của bạn", "height": 40, "fontSize": 32, "color": "#ffffff", "bold": true } }, { "type": "Button", "props": { "y": 14, "x": 610, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 180, "x": 243, "var": "btnWeapon", "stateNum": 1, "skin": "commons/button_pop_weapon.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 180, "x": 425, "var": "btnDefine", "stateNum": 1, "skin": "commons/button_pop_armor.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 269, "x": 131, "wordWrap": true, "width": 400, "text": "", "height": 75, "fontSize": 32, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 360, "x": 205, "var": "btnVideo", "stateNum": 1, "skin": "commons/button_vedio_enter.png", "runtime": "Core.UI.Button" } }, { "type": "Image", "props": { "y": 477, "x": 283, "skin": "Icons/icon_power.png" } }, { "type": "Label", "props": { "y": 470, "x": 340, "text": "-2", "fontSize": 40, "color": "#ffffff", "align": "center" } }, { "type": "Button", "props": { "y": 575, "x": 331, "var": "btnEnter", "stateNum": 1, "skin": "commons/button_enter.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }] };
                return PopSelectedUI;
            }(Dialog));
            Home.PopSelectedUI = PopSelectedUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var RankUI = /** @class */ (function (_super) {
                __extends(RankUI, _super);
                function RankUI() {
                    return _super.call(this) || this;
                }
                RankUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.RankUI.uiView);
                };
                RankUI.uiView = { "type": "Dialog", "props": { "width": 699, "height": 1011 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ranks/04.png" }, "child": [{ "type": "Image", "props": { "y": 21, "x": 217, "skin": "ranks/05.png" } }] }, { "type": "Button", "props": { "y": 44, "x": 642, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Sprite", "props": { "y": 141, "x": 27, "width": 645, "var": "canvas", "height": 800 } }] };
                return RankUI;
            }(Dialog));
            Home.RankUI = RankUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var SelectedLayerUI = /** @class */ (function (_super) {
                __extends(SelectedLayerUI, _super);
                function SelectedLayerUI() {
                    return _super.call(this) || this;
                }
                SelectedLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    View.regComponent("Power", Power);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.SelectedLayerUI.uiView);
                };
                SelectedLayerUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "commons/bg2.jpg", "sizeGrid": "2,2,2,2", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 1085, "x": 497, "skin": "commons/stone.png" } }, { "type": "Image", "props": { "y": 12, "x": 10, "skin": "background/Cafeteria.png" } }, { "type": "Button", "props": { "y": 105, "x": 75, "stateNum": 1, "skin": "commons/button_back.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Power", "props": { "y": 80, "x": 260, "runtime": "Power" } }, { "type": "List", "props": { "y": 160, "x": 0, "width": 750, "var": "list", "spaceY": 10, "repeatY": 6, "repeatX": 1, "height": 1165 }, "child": [{ "type": "Box", "props": { "y": 2, "x": 0, "width": 750, "renderType": "render", "height": 758 }, "child": [{ "type": "Image", "props": { "y": 24, "x": 0, "skin": "layers/selected/s_line.png" } }, { "type": "Image", "props": { "y": 0, "x": 279, "skin": "layers/selected/s_item.png" } }, { "type": "Label", "props": { "y": 11, "x": 300, "width": 110, "text": "1-10", "name": "title", "height": 40, "fontSize": 40, "color": "#eeecec", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 162, "x": 149, "skin": "layers/selected/s_icon_pass.png", "name": "i1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 36, "x": 63, "width": 58, "text": "1", "name": "txt", "fontSize": 42, "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 158, "x": 372, "skin": "layers/selected/s_icon_pass.png", "name": "i2", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 38, "x": 63, "width": 58, "text": "1", "name": "txt", "fontSize": 42, "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 162, "x": 595, "skin": "layers/selected/s_icon_pass.png", "name": "i3", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 39, "x": 61, "width": 58, "text": "1", "name": "txt", "fontSize": 42, "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 343, "x": 156, "skin": "layers/selected/s_icon_future.png", "name": "i4", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 38, "x": 62, "width": 58, "text": "1", "name": "txt", "fontSize": 42, "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 346, "x": 376, "skin": "layers/selected/s_icon_pass.png", "name": "i5", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 34, "x": 62, "width": 58, "text": "1", "name": "txt", "fontSize": 42, "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 344, "x": 594, "skin": "layers/selected/s_icon_pass.png", "name": "i6", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 40, "x": 64, "width": 58, "text": "1", "name": "txt", "fontSize": 42, "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 517, "x": 150, "skin": "layers/selected/s_icon_pass.png", "name": "i7", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 36, "x": 57, "width": 58, "text": "1", "name": "txt", "fontSize": 42, "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 518, "x": 374, "skin": "layers/selected/s_icon_pass.png", "name": "i8", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 38, "x": 64, "width": 58, "text": "1", "name": "txt", "fontSize": 42, "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 519, "x": 596, "skin": "layers/selected/s_icon_pass.png", "name": "i9", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 34, "x": 64, "width": 58, "text": "1", "name": "txt", "fontSize": 42, "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 673, "x": 372, "width": 300, "skin": "layers/selected/s_icon_pass.png", "sizeGrid": "0,26,0,21", "name": "i10", "height": 131, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 37, "x": 42, "width": 58, "text": "10", "name": "txt", "fontSize": 42, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 8, "x": 120, "skin": "Icons/icon_diamond.png", "scaleY": 0.8, "scaleX": 0.8 } }, { "type": "Label", "props": { "y": 41, "x": 171, "text": "+30", "name": "diamond", "fontSize": 42, "color": "#ffffff", "bold": true } }] }] }] }] };
                return SelectedLayerUI;
            }(Dialog));
            Home.SelectedLayerUI = SelectedLayerUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var SettingLayerUI = /** @class */ (function (_super) {
                __extends(SettingLayerUI, _super);
                function SettingLayerUI() {
                    return _super.call(this) || this;
                }
                SettingLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.SettingLayerUI.uiView);
                };
                SettingLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 500 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 729, "skin": "commons/tan.png", "height": 500, "sizeGrid": "60,60,60,60" } }, { "type": "Label", "props": { "y": 44, "fontSize": 40, "color": "#535252", "centerX": -15, "bold": true } }, { "type": "Button", "props": { "y": 29, "x": 673, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 160, "x": 105, "skin": "layers/setting/icon_music.png" } }, { "type": "Image", "props": { "y": 323, "x": 105, "skin": "layers/setting/icon_sound.png" } }, { "type": "Label", "props": { "y": 179, "x": 220, "width": 124.453125, "text": "Nhạc", "height": 40, "fontSize": 40, "color": "#ffffff", "centerX": -109, "bold": true } }, { "type": "Label", "props": { "y": 345, "x": 218, "width": 124.453125, "text": "Tiếng", "height": 40, "fontSize": 40, "color": "#ffffff", "centerX": -111, "bold": true } }, { "type": "Box", "props": { "y": 173, "x": 373 }, "child": [{ "type": "Image", "props": { "y": 10, "x": 2, "skin": "layers/setting/setting_icon_bar.png" } }, { "type": "Image", "props": { "x": 120, "var": "btnMusicOpen", "skin": "layers/setting/icon_open.png" } }, { "type": "Image", "props": { "var": "btnMusicClose", "skin": "layers/setting/icon_close.png" } }] }, { "type": "Box", "props": { "y": 337, "x": 373 }, "child": [{ "type": "Image", "props": { "y": 11, "skin": "layers/setting/setting_icon_bar.png" } }, { "type": "Image", "props": { "x": 118, "var": "btnSoundOpen", "skin": "layers/setting/icon_open.png" } }, { "type": "Image", "props": { "y": 1, "var": "btnSoundClose", "skin": "layers/setting/icon_close.png" } }] }] };
                return SettingLayerUI;
            }(Dialog));
            Home.SettingLayerUI = SettingLayerUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var ShopLayerUI = /** @class */ (function (_super) {
                __extends(ShopLayerUI, _super);
                function ShopLayerUI() {
                    return _super.call(this) || this;
                }
                ShopLayerUI.prototype.createChildren = function () {
                    View.regComponent("Power", Power);
                    View.regComponent("Diamond", Diamond);
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.ShopLayerUI.uiView);
                };
                ShopLayerUI.uiView = { "type": "Dialog", "props": { "width": 750, "popupCenter": false, "height": 1334 }, "child": [{ "type": "Power", "props": { "y": 120, "x": 392, "runtime": "Power" } }, { "type": "Diamond", "props": { "y": 120, "x": 152, "runtime": "Diamond" } }, { "type": "Button", "props": { "y": 149, "x": 76, "stateNum": 1, "skin": "commons/button_back.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 230, "x": 20, "width": 710, "skin": "commons/tan.png", "height": 951, "sizeGrid": "60,60,60,60" } }, { "type": "Tab", "props": { "y": 236, "x": 23, "var": "tab", "selectedIndex": 0 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "stateNum": 1, "skin": "layers/shop/tab_diamond.png", "name": "item0" } }, { "type": "Button", "props": { "y": 0, "x": 350, "stateNum": 1, "skin": "layers/shop/tap_background.png", "name": "item1" } }] }, { "type": "List", "props": { "y": 350, "x": 125, "width": 501, "var": "page0", "height": 236 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "var": "buttonDiamond" }, "child": [{ "type": "Image", "props": { "y": -2, "x": 0, "skin": "layers/shop/shop_item.png" }, "child": [{ "type": "Label", "props": { "y": 107, "x": 58, "width": 119, "text": "20", "height": 32, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 32, "x": 57, "skin": "Icons/icon_diamond.png", "scaleY": 1, "scaleX": 1 } }, { "type": "Label", "props": { "y": 154, "x": 14, "wordWrap": true, "width": 167, "text": "", "height": 32, "fontSize": 16, "color": "#000000", "bold": true, "align": "center" } }] }] }, { "type": "Box", "props": { "y": 0, "x": 300, "var": "buttonPower" }, "child": [{ "type": "Image", "props": { "y": -2, "x": 0, "skin": "layers/shop/shop_item.png" }, "child": [{ "type": "Label", "props": { "y": 105, "x": 35, "width": 119, "text": "3", "height": 32, "fontSize": 32, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 150, "x": 17, "wordWrap": true, "width": 162, "text": "", "height": 32, "fontSize": 16, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 32, "x": 53, "skin": "Icons/icon_power.png", "scaleY": 2, "scaleX": 2 } }] }] }, { "type": "Box", "props": { "y": 230, "x": 0, "visible": false, "var": "btnHuafei" }, "child": [{ "type": "Image", "props": { "y": -2, "x": 0, "skin": "layers/shop/shop_item.png" }, "child": [{ "type": "Label", "props": { "y": 137, "x": 65, "text": "兑换", "height": 32, "fontSize": 26, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 31, "x": 27, "skin": "Icons/duihuan.png", "scaleY": 1, "scaleX": 1 } }] }] }] }, { "type": "List", "props": { "y": 350, "x": 58, "width": 636, "var": "page1", "spaceY": 20, "spaceX": 20, "repeatY": 3, "repeatX": 3, "height": 822 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "renderType": "render" }, "child": [{ "type": "Image", "props": { "y": -2, "x": 0, "skin": "layers/shop/shop_item.png" } }, { "type": "Image", "props": { "y": 23, "x": 50, "skin": "layers/shop/color1.png", "name": "colorItem" } }, { "type": "Image", "props": { "y": 137, "x": 37, "skin": "Icons/icon_diamond.png", "scaleY": 0.8, "scaleX": 0.8, "name": "icon_diamond" } }, { "type": "Label", "props": { "y": 145, "x": 105, "text": "30", "name": "diamond", "height": 32, "fontSize": 36, "color": "#000000", "bold": true, "align": "left" } }, { "type": "Label", "props": { "y": 150, "x": 1, "width": 188, "text": "使用中", "name": "status", "height": 32, "fontSize": 30, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 146, "x": 16, "skin": "layers/shop/shop_icon_vedio.png", "name": "video" }, "child": [{ "type": "Label", "props": { "y": 2, "x": 41, "width": 123, "text": "FREE", "height": 32, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }] }] }] }] };
                return ShopLayerUI;
            }(Dialog));
            Home.ShopLayerUI = ShopLayerUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var SignLayerUI = /** @class */ (function (_super) {
                __extends(SignLayerUI, _super);
                function SignLayerUI() {
                    return _super.call(this) || this;
                }
                SignLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.SignLayerUI.uiView);
                };
                SignLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 729, "popupCenter": true, "height": 729 }, "child": [{ "type": "Image", "props": { "y": 0, "x": -104, "width": 918, "skin": "commons/tan.png", "name": "bg", "height": 729, "sizeGrid": "60,60,60,60" } }, { "type": "Button", "props": { "y": 23, "x": 672, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 55, "x": 290, "text": "Đăng nhập", "fontSize": 40, "color": "#ffffff", "bold": true } }, { "type": "Image", "props": { "y": 111, "x": 17, "skin": "layers/sign/sign_item.png", "name": "day1" }, "child": [{ "type": "Label", "props": { "y": 13, "x": 30, "width": 111, "text": "第1天", "name": "title", "height": 28, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 70, "x": 68, "skin": "Icons/icon_diamond.png", "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 146, "x": 41, "width": 138, "text": "x30", "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 110, "x": 194, "skin": "layers/sign/sign_item.png", "name": "day2" }, "child": [{ "type": "Label", "props": { "y": 13, "x": 30, "width": 111, "text": "第1天", "name": "title", "height": 28, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 70, "x": 48, "skin": "Icons/icon_diamond.png" } }, { "type": "Label", "props": { "y": 146, "x": 41, "width": 138, "text": "x30", "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 111, "x": 370, "skin": "layers/sign/sign_item.png", "name": "day3" }, "child": [{ "type": "Label", "props": { "y": 13, "x": 30, "width": 111, "text": "第1天", "name": "title", "height": 28, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 70, "x": 48, "skin": "Icons/icon_diamond.png" } }, { "type": "Label", "props": { "y": 146, "x": 41, "width": 138, "text": "x30", "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 109, "x": 553, "skin": "layers/sign/sign_item.png", "name": "day4" }, "child": [{ "type": "Label", "props": { "y": 13, "x": 30, "width": 111, "text": "第1天", "name": "title", "height": 28, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 70, "x": 48, "skin": "Icons/icon_diamond.png" } }, { "type": "Label", "props": { "y": 146, "x": 41, "width": 138, "text": "x30", "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 322, "x": 93, "skin": "layers/sign/sign_item.png", "name": "day5" }, "child": [{ "type": "Label", "props": { "y": 13, "x": 30, "width": 111, "text": "第1天", "name": "title", "height": 28, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 70, "x": 48, "skin": "Icons/icon_diamond.png" } }, { "type": "Label", "props": { "y": 146, "x": 41, "width": 138, "text": "x30", "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 322, "x": 273, "skin": "layers/sign/sign_item.png", "name": "day6" }, "child": [{ "type": "Label", "props": { "y": 13, "x": 30, "width": 111, "text": "第1天", "name": "title", "height": 28, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 70, "x": 48, "skin": "Icons/icon_diamond.png" } }, { "type": "Label", "props": { "y": 146, "x": 41, "width": 138, "text": "x30", "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 322, "x": 450, "skin": "layers/sign/sign_item.png", "name": "day7" }, "child": [{ "type": "Label", "props": { "y": 13, "x": 30, "width": 111, "text": "第1天", "name": "title", "height": 28, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 70, "x": 48, "skin": "Icons/icon_diamond.png" } }, { "type": "Label", "props": { "y": 146, "x": 41, "width": 138, "text": "x30", "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Button", "props": { "y": 600, "x": 232, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/button_get.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 600, "visible": true, "var": "btn2", "stateNum": 1, "skin": "commons/button_video_get.png", "runtime": "Core.UI.Button", "right": 111, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 85, "x": 29, "skin": "commons/text_double.png" } }] }] };
                return SignLayerUI;
            }(Dialog));
            Home.SignLayerUI = SignLayerUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var TurntableLayerUI = /** @class */ (function (_super) {
                __extends(TurntableLayerUI, _super);
                function TurntableLayerUI() {
                    return _super.call(this) || this;
                }
                TurntableLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.TurntableLayerUI.uiView);
                };
                TurntableLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 750, "popupCenter": true, "height": 1000 }, "child": [{ "type": "Image", "props": { "y": 435, "x": 376, "width": 729, "var": "pan", "skin": "layers/turntable/turntable_pan.png", "rotation": 0, "height": 729, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 78, "x": 309, "skin": "Icons/icon_diamond.png" } }, { "type": "Label", "props": { "y": 156, "x": 312, "width": 100, "text": "x15", "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 651, "x": 434, "skin": "Icons/icon_diamond.png", "rotation": 180 } }, { "type": "Label", "props": { "y": 577, "x": 428, "width": 100, "text": "x30", "rotation": 180, "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 286, "x": 638, "skin": "weapons/YT.png", "scaleY": 0.5, "scaleX": 0.5, "rotation": 90 } }, { "type": "Label", "props": { "y": 294, "x": 575, "width": 136, "text": "Jade Bunny", "rotation": 90, "name": "txtCount", "height": 28, "fontSize": 24, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 612, "x": 230, "skin": "weapons/gold_AWM.png", "scaleY": 0.5, "scaleX": 0.5, "rotation": 225 } }, { "type": "Label", "props": { "y": 550, "x": 276, "width": 120, "text": "Gold AWM", "rotation": 225, "name": "txtCount", "height": 28, "fontSize": 24, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 527, "x": 608, "skin": "Icons/icon_power.png", "scaleY": 2, "scaleX": 2, "rotation": 135 } }, { "type": "Label", "props": { "y": 468, "x": 555, "width": 100, "text": "x6", "rotation": 135, "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 139, "x": 531, "skin": "Icons/icon_power.png", "scaleY": 2, "scaleX": 2, "rotation": 45 } }, { "type": "Label", "props": { "y": 195, "x": 463, "width": 100, "text": "x10", "rotation": 45, "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 423, "x": 80, "skin": "Icons/icon_diamond.png", "rotation": 270 } }, { "type": "Label", "props": { "y": 422, "x": 168, "width": 100, "text": "x20", "rotation": 270, "name": "txtCount", "height": 28, "fontSize": 28, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 185, "x": 133, "skin": "helmets/helmet_yt.png", "scaleY": 0.5, "scaleX": 0.5, "rotation": 315 } }, { "type": "Label", "props": { "y": 282, "x": 178, "width": 137, "text": "Jade Bunny", "rotation": 315, "name": "txtCount", "height": 28, "fontSize": 24, "color": "#000000", "bold": true, "align": "center" } }] }, { "type": "Button", "props": { "y": 34, "x": 717, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 434, "x": 378, "var": "arrow", "skin": "layers/turntable/turntable_a.png", "anchorY": 0.54, "anchorX": 0.5, "alpha": 1 }, "compId": 95 }, { "type": "Button", "props": { "y": 887, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/button_vNormal.png", "runtime": "Core.UI.Button", "right": 240, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 34, "x": 93, "skin": "layers/turntable/turntable_text.png" } }, { "type": "Image", "props": { "y": 23, "x": 22, "skin": "commons/button_icon_video.png" } }] }], "animations": [{ "nodes": [{ "target": 95, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 95, "key": "rotation", "index": 0 }, { "value": 10, "tweenMethod": "linearNone", "tween": true, "target": 95, "key": "rotation", "index": 7 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 95, "key": "rotation", "index": 8 }, { "value": 10, "tweenMethod": "linearNone", "tween": true, "target": 95, "key": "rotation", "index": 10 }] } }], "name": "action_roll", "id": 1, "frameRate": 24, "action": 0 }] };
                return TurntableLayerUI;
            }(Dialog));
            Home.TurntableLayerUI = TurntableLayerUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var TurntablePopUI = /** @class */ (function (_super) {
                __extends(TurntablePopUI, _super);
                function TurntablePopUI() {
                    return _super.call(this) || this;
                }
                TurntablePopUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.TurntablePopUI.uiView);
                };
                TurntablePopUI.uiView = { "type": "Dialog", "props": { "width": 661, "popupCenter": true, "height": 620 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 0, "width": 661, "skin": "commons/tan.png", "height": 524, "sizeGrid": "60,60,60,60" }, "child": [{ "type": "Button", "props": { "y": 14, "x": 610, "stateNum": 1, "skin": "commons/button_close.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Label", "props": { "y": 129, "x": 137, "wordWrap": true, "width": 400, "text": "Item Already Owned\\nRoll Again", "height": 75, "fontSize": 36, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 372, "x": 338, "visible": true, "var": "btn", "stateNum": 1, "skin": "commons/button_vNormal.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 34, "x": 54, "skin": "layers/turntable/turntable_text.png" } }] }] };
                return TurntablePopUI;
            }(Dialog));
            Home.TurntablePopUI = TurntablePopUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Layers;
    (function (Layers) {
        var Home;
        (function (Home) {
            var WeaponLayerUI = /** @class */ (function (_super) {
                __extends(WeaponLayerUI, _super);
                function WeaponLayerUI() {
                    return _super.call(this) || this;
                }
                WeaponLayerUI.prototype.createChildren = function () {
                    View.regComponent("Core.UI.Button", Core.UI.Button);
                    View.regComponent("Diamond", Diamond);
                    View.regComponent("ProgressBar", ProgressBar);
                    View.regComponent("HomeRole", HomeRole);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.Layers.Home.WeaponLayerUI.uiView);
                };
                WeaponLayerUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 750, "popupCenter": false, "height": 1334 }, "child": [{ "type": "Button", "props": { "y": 129, "x": 75, "stateNum": 1, "skin": "commons/button_back.png", "runtime": "Core.UI.Button", "name": "close", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Diamond", "props": { "y": 100, "x": 260, "var": "diamond", "runtime": "Diamond" } }, { "type": "Image", "props": { "y": 175, "x": 0, "skin": "background/background_weapon.png" } }, { "type": "Label", "props": { "y": 206, "x": 317, "text": "Bắn", "fontSize": 24, "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 320, "x": 253, "text": "Tốc độ bắn", "fontSize": 24, "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 433, "x": 225, "text": "Hộp đạn", "fontSize": 24, "color": "#ffffff", "bold": true } }, { "type": "ProgressBar", "props": { "y": 197, "x": 395, "var": "attackBar", "value": 0.01, "skin": "layers/weapon/weapon_progress.png", "sizeGrid": "0,20,0,20", "runtime": "ProgressBar" }, "child": [{ "type": "Label", "props": { "y": 12, "x": 8, "text": "100", "name": "tValue", "fontSize": 22, "color": "#000000", "bold": true } }] }, { "type": "ProgressBar", "props": { "y": 309, "x": 395, "var": "shootBar", "skin": "layers/weapon/weapon_progress.png", "sizeGrid": "0,20,0,20", "runtime": "ProgressBar" }, "child": [{ "type": "Label", "props": { "y": 12, "x": 8, "text": "100", "name": "tValue", "fontSize": 22, "color": "#000000", "bold": true } }] }, { "type": "ProgressBar", "props": { "y": 422, "x": 395, "var": "bulletBar", "skin": "layers/weapon/weapon_progress.png", "sizeGrid": "0,20,0,20", "runtime": "ProgressBar" }, "child": [{ "type": "Label", "props": { "y": 12, "x": 8, "text": "100", "name": "tValue", "fontSize": 22, "color": "#000000", "bold": true } }] }, { "type": "Label", "props": { "y": 267, "x": 620, "text": "MAX", "fontSize": 22, "color": "#000000" } }, { "type": "Label", "props": { "y": 377, "x": 620, "text": "MAX", "fontSize": 22, "color": "#000000" } }, { "type": "Label", "props": { "y": 488, "x": 620, "text": "MAX", "fontSize": 22, "color": "#000000" } }, { "type": "Image", "props": { "y": 247, "x": 394, "var": "attackContainer", "skin": "layers/weapon/weapon_di.png" }, "child": [{ "type": "Image", "props": { "y": -4, "x": 12, "skin": "Icons/icon_diamond.png", "scaleY": 0.5, "scaleX": 0.5 } }, { "type": "Label", "props": { "y": 13, "x": 45, "width": 52, "var": "attackCost", "text": "16", "height": 28, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 26, "x": 122, "var": "btnAttackUp", "stateNum": 1, "skin": "layers/weapon/button_up.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 360, "x": 394, "var": "shootContainer", "skin": "layers/weapon/weapon_di.png" }, "child": [{ "type": "Label", "props": { "y": 13, "x": 45, "width": 52, "var": "shootCost", "text": "16", "height": 28, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 26, "x": 122, "var": "btnShootUp", "stateNum": 1, "skin": "layers/weapon/button_up.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -5, "x": 14, "skin": "Icons/icon_diamond.png", "scaleY": 0.5, "scaleX": 0.5 } }] }, { "type": "Image", "props": { "y": 473, "x": 394, "var": "bulletContainer", "skin": "layers/weapon/weapon_di.png" }, "child": [{ "type": "Label", "props": { "y": 13, "x": 45, "width": 52, "var": "bulletCost", "text": "16", "height": 28, "fontSize": 28, "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": -2, "x": 12, "skin": "Icons/icon_diamond.png", "scaleY": 0.5, "scaleX": 0.5 } }, { "type": "Button", "props": { "y": 26, "x": 122, "var": "btnBulletUp", "stateNum": 1, "skin": "layers/weapon/button_up.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 250, "x": 567, "var": "freeAttackContainer", "skin": "layers/weapon/weapon_di.png" }, "child": [{ "type": "Image", "props": { "y": 12, "x": 14, "skin": "layers/weapon/image_vedio.png" } }, { "type": "Image", "props": { "y": 16, "x": 52, "skin": "layers/weapon/image_free.png" } }, { "type": "Button", "props": { "y": 26, "x": 127, "var": "btnFreeAttackUp", "stateNum": 1, "skin": "layers/weapon/button_up.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 361, "x": 566, "var": "freeShootContainer", "skin": "layers/weapon/weapon_di.png" }, "child": [{ "type": "Button", "props": { "y": 26, "x": 127, "var": "btnFreeShootUp", "stateNum": 1, "skin": "layers/weapon/button_up.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 12, "x": 14, "skin": "layers/weapon/image_vedio.png" } }, { "type": "Image", "props": { "y": 16, "x": 52, "skin": "layers/weapon/image_free.png" } }] }, { "type": "Image", "props": { "y": 473, "x": 567, "var": "freeBulletContainer", "skin": "layers/weapon/weapon_di.png" }, "child": [{ "type": "Button", "props": { "y": 26, "x": 127, "var": "btnFreeBulletUp", "stateNum": 1, "skin": "layers/weapon/button_up.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 12, "x": 14, "skin": "layers/weapon/image_vedio.png" } }, { "type": "Image", "props": { "y": 16, "x": 52, "skin": "layers/weapon/image_free.png" } }] }, { "type": "List", "props": { "y": 545, "x": 0, "width": 750, "var": "weapons", "spaceY": 5, "repeatY": 4, "repeatX": 1, "height": 550 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 38, "width": 676, "renderType": "render", "height": 182 }, "child": [{ "type": "Image", "props": { "skin": "layers/weapon/weapon_item.png" } }, { "type": "Image", "props": { "y": 90, "x": 178, "skin": "weapons/AKM.png", "name": "icon", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "visible": false, "skin": "layers/weapon/weapon_item_select.png", "name": "border" } }, { "type": "Label", "props": { "y": 23, "x": 48, "text": "弹    夹", "name": "txtName", "fontSize": 28, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 27, "x": 393, "text": "Bắn", "fontSize": 16, "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 24, "x": 448, "text": "10", "name": "\battack", "fontSize": 24, "color": "#000000", "bold": true, "align": "left" } }, { "type": "Label", "props": { "y": 69, "x": 354, "wordWrap": true, "width": 107, "text": "Tốc độ bắn", "height": 19, "fontSize": 16, "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 65, "x": 448, "text": "10", "name": "shoot", "fontSize": 24, "color": "#000000", "bold": true, "align": "left" } }, { "type": "Label", "props": { "y": 121, "x": 338, "text": "Hộp đạn", "fontSize": 16, "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 115, "x": 448, "text": "10", "name": "bullet", "fontSize": 24, "color": "#000000", "bold": true, "align": "left" } }, { "type": "Label", "props": { "y": 23, "x": 561, "text": "MAX", "name": "max", "fontSize": 24, "color": "#000000", "bold": true } }, { "type": "Button", "props": { "y": 132, "x": 582, "stateNum": 1, "skin": "commons/button_test.png", "runtime": "Core.UI.Button", "name": "btn", "mouseThrough": false, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 119, "x": 520, "wordWrap": true, "width": 123, "visible": true, "text": "Hoàn thành level 20 để mở", "name": "message", "height": 40, "fontSize": 18, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Box", "props": { "y": 65, "x": 545, "visible": false, "name": "diamndContainer" }, "child": [{ "type": "Image", "props": { "y": -19, "x": 0, "skin": "Icons/icon_diamond.png", "scaleY": 0.5, "scaleX": 0.5 } }, { "type": "Label", "props": { "x": 41, "text": "16", "name": "diamndLabel", "fontSize": 24, "color": "#000000", "bold": true, "align": "left" } }] }] }] }, { "type": "Image", "props": { "y": 171, "x": 134, "skin": "layers/weapon/weapon_zhun.png" } }, { "type": "HomeRole", "props": { "y": 237, "x": 56, "var": "role", "runtime": "HomeRole" } }] };
                return WeaponLayerUI;
            }(Dialog));
            Home.WeaponLayerUI = WeaponLayerUI;
        })(Home = Layers.Home || (Layers.Home = {}));
    })(Layers = ui.Layers || (ui.Layers = {}));
})(ui || (ui = {}));
(function (ui) {
    var Scenes;
    (function (Scenes) {
        var GameUI = /** @class */ (function (_super) {
            __extends(GameUI, _super);
            function GameUI() {
                return _super.call(this) || this;
            }
            GameUI.prototype.createChildren = function () {
                View.regComponent("Core.UI.Button", Core.UI.Button);
                View.regComponent("ProgressBar", ProgressBar);
                View.regComponent("RoleTable", RoleTable);
                View.regComponent("GameRole", GameRole);
                View.regComponent("EnemyTable", EnemyTable);
                View.regComponent("AirGift", AirGift);
                View.regComponent("Diamond", Diamond);
                View.regComponent("HuaFei", HuaFei);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Scenes.GameUI.uiView);
            };
            GameUI.uiView = { "type": "Scene", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "skin": "background/background_game.png", "name": "游戏背景" }, "child": [{ "type": "Image", "props": { "y": 430, "x": 0, "skin": "background/role_build.png" } }, { "type": "Image", "props": { "y": 284, "x": 425, "skin": "background/enemy_build.png" } }] }, { "type": "Button", "props": { "y": 65, "x": 66, "var": "buttonClose", "stateNum": 1, "skin": "commons/button_back.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 149, "x": 370, "width": 90, "var": "limitTime", "text": "35", "fontSize": 60, "color": "#000000", "align": "center" } }, { "type": "Box", "props": { "y": 145, "x": 31, "name": "弹药" }, "child": [{ "type": "Image", "props": { "skin": "game/icon_bullet.png" } }, { "type": "Label", "props": { "y": -15, "x": 90, "text": "Đạn", "fontSize": 28, "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": -12, "x": 180, "width": 83, "var": "bulletCountLabel", "text": "100/100", "fontSize": 24, "color": "#ffffff", "bold": true, "align": "right" } }, { "type": "ProgressBar", "props": { "x": 84, "var": "bulletBar", "value": 0.8, "skin": "game/status_progress.png", "runtime": "ProgressBar", "centerY": 7 } }] }, { "type": "Box", "props": { "y": 234, "x": 31, "name": "头盔" }, "child": [{ "type": "Image", "props": { "skin": "game/icon_hemlet.png" } }, { "type": "Label", "props": { "y": -27, "x": 88, "wordWrap": true, "width": 112, "text": "Chống đạn", "height": 46, "fontSize": 20, "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": -12, "x": 180, "width": 83, "var": "hemletLabel", "text": "100%", "fontSize": 24, "color": "#ffffff", "bold": true, "align": "right" } }, { "type": "ProgressBar", "props": { "x": 84, "var": "hemletBar", "value": 0.8, "skin": "game/status_progress.png", "runtime": "ProgressBar", "centerY": 7 } }] }, { "type": "Box", "props": { "y": 331, "x": 32, "name": "护甲" }, "child": [{ "type": "Image", "props": { "skin": "game/icon_cloth.png" } }, { "type": "Label", "props": { "y": -25, "x": 88, "wordWrap": true, "width": 114, "text": "Chống đạn", "height": 40, "fontSize": 20, "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": -12, "x": 180, "width": 83, "var": "clothLabel", "text": "100%", "fontSize": 24, "color": "#ffffff", "bold": true, "align": "right" } }, { "type": "ProgressBar", "props": { "x": 84, "var": "clothBar", "value": 0.8, "skin": "game/status_progress.png", "runtime": "ProgressBar", "centerY": 7 } }] }, { "type": "Box", "props": { "y": 142, "x": 511, "name": "敌人" }, "child": [{ "type": "Image", "props": { "skin": "game/icon_enemy.png" } }, { "type": "Label", "props": { "y": 25, "x": 72, "text": "Địch", "fontSize": 22, "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 25, "x": 134, "width": 78, "var": "enemyCountLabel", "text": "10/10", "height": 24, "fontSize": 24, "color": "#ffffff", "bold": true, "align": "right" } }] }, { "type": "RoleTable", "props": { "y": 616, "x": 84, "runtime": "RoleTable", "name": "w1", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "RoleTable", "props": { "y": 616, "x": 232, "runtime": "RoleTable", "name": "w2", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "RoleTable", "props": { "y": 787, "x": 84, "runtime": "RoleTable", "name": "w3", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "RoleTable", "props": { "y": 787, "x": 231, "runtime": "RoleTable", "name": "w4", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "RoleTable", "props": { "y": 957, "x": 83, "runtime": "RoleTable", "name": "w5", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "RoleTable", "props": { "y": 960, "x": 232, "width": 130, "runtime": "RoleTable", "name": "w6", "height": 140, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "RoleTable", "props": { "y": 1126, "x": 83, "runtime": "RoleTable", "name": "w7", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "RoleTable", "props": { "y": 1127, "x": 231, "runtime": "RoleTable", "name": "w8", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "GameRole", "props": { "y": 622, "x": 76, "var": "role", "scaleY": 0.3, "scaleX": 0.3, "runtime": "GameRole", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 476, "x": 553, "runtime": "EnemyTable", "name": "e1", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 475, "x": 682, "runtime": "EnemyTable", "name": "e2", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 606, "x": 553, "runtime": "EnemyTable", "name": "e3", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 608, "x": 682, "runtime": "EnemyTable", "name": "e4", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 748, "x": 553, "runtime": "EnemyTable", "name": "e5", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 749, "x": 683, "runtime": "EnemyTable", "name": "e6", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 884, "x": 553, "runtime": "EnemyTable", "name": "e7", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 885, "x": 683, "runtime": "EnemyTable", "name": "e8", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 1020, "x": 553, "runtime": "EnemyTable", "name": "e9", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 1021, "x": 684, "runtime": "EnemyTable", "name": "e10", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 1160, "x": 553, "runtime": "EnemyTable", "name": "e11", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 1159, "x": 684, "runtime": "EnemyTable", "name": "e12", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "EnemyTable", "props": { "y": 1257, "x": 615, "visible": false, "runtime": "EnemyTable", "name": "e13", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "AirGift", "props": { "y": -125, "x": 370, "var": "airGift", "runtime": "AirGift", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Diamond", "props": { "y": 41, "x": 200, "runtime": "Diamond" } }, { "type": "HuaFei", "props": { "y": 43, "x": 454, "visible": false, "runtime": "HuaFei" } }] };
            return GameUI;
        }(Scene));
        Scenes.GameUI = GameUI;
    })(Scenes = ui.Scenes || (ui.Scenes = {}));
})(ui || (ui = {}));
(function (ui) {
    var Scenes;
    (function (Scenes) {
        var HomeUI = /** @class */ (function (_super) {
            __extends(HomeUI, _super);
            function HomeUI() {
                return _super.call(this) || this;
            }
            HomeUI.prototype.createChildren = function () {
                View.regComponent("Diamond", Diamond);
                View.regComponent("Core.UI.Button", Core.UI.Button);
                View.regComponent("HuaFei", HuaFei);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Scenes.HomeUI.uiView);
            };
            HomeUI.uiView = { "type": "Scene", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 1075, "x": 487, "skin": "commons/stone.png" } }, { "type": "Image", "props": { "y": 2, "x": 0, "skin": "background/home_background.png" } }, { "type": "Image", "props": { "y": 147, "x": 81, "var": "logo", "skin": "scenes/home/home_logo.png" } }, { "type": "Label", "props": { "y": 412, "x": 598, "var": "version", "fontSize": 28, "color": "#000000" } }, { "type": "Diamond", "props": { "y": 91, "x": 200, "var": "diamond", "runtime": "Diamond" } }, { "type": "Button", "props": { "y": 613, "x": 391, "var": "start", "stateNum": 1, "skin": "scenes/home/button_start.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 19 }, { "type": "Button", "props": { "y": 865, "x": 532, "var": "armor", "stateNum": 1, "skin": "scenes/home/button_armor.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 865, "x": 221, "var": "weapon", "stateNum": 1, "skin": "scenes/home/button_weapon.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 125, "x": 98, "var": "setting", "stateNum": 1, "skin": "scenes/home/button_setting.png", "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "HBox", "props": { "y": 951, "space": 18, "centerX": -1 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "var": "sign", "stateNum": 1, "skin": "scenes/home/button_sgin.png", "runtime": "Core.UI.Button" } }, { "type": "Button", "props": { "y": 0, "x": 65, "var": "shop", "stateNum": 1, "skin": "scenes/home/button_shop.png", "runtime": "Core.UI.Button" } }, { "type": "Button", "props": { "y": 0, "x": 177, "var": "share", "stateNum": 1, "skin": "scenes/home/button_share.png", "runtime": "Core.UI.Button" }, "child": [{ "type": "Box", "props": { "y": 97, "x": -9, "visible": false, "var": "firstShareTip" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 93, "skin": "Icons/icon_diamond.png", "scaleY": 0.4, "scaleX": 0.4 } }, { "type": "Label", "props": { "y": 5, "x": 0, "width": 86, "text": "首次分享x30", "height": 17, "fontSize": 16, "color": "#f9f3f3", "bold": true, "align": "center" } }] }] }, { "type": "Button", "props": { "y": 0, "x": 289, "var": "turntable", "stateNum": 1, "skin": "scenes/home/button_turntable.png", "runtime": "Core.UI.Button" } }, { "type": "Button", "props": { "y": 0, "x": 289, "var": "rank", "stateNum": 1, "skin": "scenes/home/button_rank.png", "runtime": "Core.UI.Button" } }, { "type": "Button", "props": { "y": 0, "x": 448, "var": "more", "stateNum": 1, "skin": "scenes/home/button_more.png", "runtime": "Core.UI.Button" } }] }, { "type": "Box", "props": { "y": 513, "x": 84, "width": 136, "var": "pineapple", "height": 140, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 133, "skin": "background/s_icon_future.png", "height": 140 } }, { "type": "Image", "props": { "y": 60, "x": 63, "skin": "helmets/helmet_pineapple.png", "scaleY": 0.8, "scaleX": 0.8, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 48 }, { "type": "Box", "props": { "y": 107, "x": 65, "width": 200, "scaleY": 0.5, "scaleX": 0.5, "height": 83, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 41.5, "x": 100, "stateNum": 1, "skin": "commons/button_video_get.png", "scaleY": 1, "scaleX": 1, "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Box", "props": { "y": 684, "x": 84, "width": 136, "var": "akm", "height": 140, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 133, "skin": "background/s_icon_future.png", "height": 140 } }, { "type": "Image", "props": { "y": 52, "x": 63, "skin": "weapons/gold_AKM.png", "scaleY": 0.4, "scaleX": 0.4, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 55 }, { "type": "Box", "props": { "y": 107, "x": 65, "width": 200, "scaleY": 0.5, "scaleX": 0.5, "height": 83, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 41.5, "x": 100, "stateNum": 1, "skin": "commons/button_video_get.png", "scaleY": 1, "scaleX": 1, "runtime": "Core.UI.Button", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Box", "props": { "y": 229, "x": 5, "width": 136, "var": "recommendation1", "height": 140 } }, { "type": "Box", "props": { "y": 389, "x": 4, "width": 136, "var": "recommendation2", "height": 140 } }, { "type": "HuaFei", "props": { "y": 93, "x": 470, "visible": false, "runtime": "HuaFei" } }, { "type": "Image", "props": { "skin": "commons/stone.png" } }, { "type": "Image", "props": { "y": 1138, "x": 28, "skin": "commons/stone.png" } }, { "type": "Image", "props": { "y": 1208, "x": 184, "skin": "commons/stone.png", "scaleY": 2, "scaleX": 2 } }, { "type": "Image", "props": { "y": 1291, "x": 617, "skin": "commons/stone.png" } }, { "type": "Image", "props": { "y": 1205, "x": 417, "skin": "commons/stone.png", "scaleY": 0.5, "scaleX": 0.5 } }], "animations": [{ "nodes": [{ "target": 19, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "scaleY", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "scaleY", "index": 30 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "scaleY", "index": 60 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "scaleX", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "scaleX", "index": 30 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "scaleX", "index": 60 }] } }], "name": "animation_start", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 48, "keyframes": { "scaleY": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "scaleY", "index": 20 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "scaleY", "index": 40 }], "scaleX": [{ "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "scaleX", "index": 20 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 48, "key": "scaleX", "index": 40 }] } }], "name": "git1", "id": 2, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 55, "keyframes": { "scaleY": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 55, "key": "scaleY", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 55, "key": "scaleY", "index": 20 }, { "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 55, "key": "scaleY", "index": 40 }], "scaleX": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 55, "key": "scaleX", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 55, "key": "scaleX", "index": 20 }, { "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 55, "key": "scaleX", "index": 40 }] } }], "name": "git2", "id": 2, "frameRate": 24, "action": 0 }] };
            return HomeUI;
        }(Scene));
        Scenes.HomeUI = HomeUI;
    })(Scenes = ui.Scenes || (ui.Scenes = {}));
})(ui || (ui = {}));
(function (ui) {
    var Scenes;
    (function (Scenes) {
        var LoadingUI = /** @class */ (function (_super) {
            __extends(LoadingUI, _super);
            function LoadingUI() {
                return _super.call(this) || this;
            }
            LoadingUI.prototype.createChildren = function () {
                View.regComponent("ProgressBar", ProgressBar);
                _super.prototype.createChildren.call(this);
                this.createView(ui.Scenes.LoadingUI.uiView);
            };
            LoadingUI.uiView = { "type": "Scene", "props": { "y": 0, "x": 0, "width": 750, "height": 1334 }, "child": [{ "type": "ProgressBar", "props": { "y": 857, "width": 603, "var": "bar", "value": 1, "skin": "scenes/loading/progressl.png", "runtime": "ProgressBar", "centerX": 4 }, "child": [{ "type": "Label", "props": { "y": -60, "var": "txtBarValue", "text": "100%", "fontSize": 40, "color": "#ffffff", "centerX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 52, "var": "txtMessage", "text": "Loading", "fontSize": 32, "color": "#ffffff", "centerX": 0, "align": "center" } }] }, { "type": "Image", "props": { "y": 175, "x": 85, "skin": "scenes/home/home_logo.png" } }, { "type": "Image", "props": { "y": 1080, "x": 236, "var": "logo", "skin": "scenes/loading/200x150.png", "scaleY": 1.5, "scaleX": 1.5 } }] };
            return LoadingUI;
        }(Scene));
        Scenes.LoadingUI = LoadingUI;
    })(Scenes = ui.Scenes || (ui.Scenes = {}));
})(ui || (ui = {}));
