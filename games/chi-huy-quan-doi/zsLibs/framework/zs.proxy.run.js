window.zs = window.zs || {},
window.zs.platform = window.zs.platform || {},
null == zs.platform.config && (window.zs.platform.config = {},
function(a) {
    a.platformMark = "wx_",
    a.channel = "ZS",
    a.bannerWidth = 600,
    a.bannerHeight = 200
} (window.zs.platform.config = {})),
window.zs.proxy = window.zs.proxy || {},
function(a) {
    "use strict";
    class e {}
    e.gameCfgPath = "config/gameCfg.json",
    e.porductCfgPath = "config/productCfg.json",
    e.uiCfgPath = "config/uiCfg.json",
    e.FGUI_AlignType_Top = "top",
    e.FGUI_AlignType_Middle = "middle",
    e.FGUI_AlignType_Bottom = "bottom",
    e.FGUI_AlignType_Left = "left",
    e.FGUI_AlignType_Center = "center",
    e.FGUI_AlignType_Right = "right";
    class t {
        static FGUIEvent(a, e) {
            return zs.Handler.create(a, e, null, !1)
        }
        static FGUIOnClick(a, e, t) {
            a.onClick(e, t)
        }
        static FGUIOffClick(a, e, t) {
            a.offClick(e, t)
        }
        static FGUIOn(a, e, t, s) {
            a.on(e, t, s)
        }
        static FGUIOff(a, e, t, s) {
            a.off(e, t, s)
        }
        static FGUIButtonTouchBegin(a) {
            a.on(Laya.Event.MOUSE_DOWN, a, a.__mousedown)
        }
    }
    t.MOUSE_DOWN = Laya.Event.MOUSE_DOWN,
    t.MOUSE_MOVE = Laya.Event.MOUSE_MOVE,
    t.FGUI_CLICK_ITEM = fairygui.Events.CLICK_ITEM,
    t.FGUI_DRAG_START = fairygui.Events.DRAG_START,
    t.FGUI_DRAG_END = fairygui.Events.DRAG_END;
    const s = fairygui.GBasicTextField;
    a.Configs = e,
    a.LocalStorage = class {
        static getItem(a) {
            return Laya.LocalStorage.getItem(a)
        }
        static setItem(a, e) {
            Laya.LocalStorage.setItem(a, e)
        }
    },
    a.Event = t,
    a.Touch = class {
        static get touchX() {
            return Laya.stage.mouseX
        }
        static get touchY() {
            return Laya.stage.mouseY
        }
    },
    a.Tween = class {
        static to(a, e, t, s = null, i = null, n = 0) {
            let r = null;
            switch (s) {
            case "linearNone":
                r = Laya.Ease.linearNone;
                break;
            case "linearIn":
                r = Laya.Ease.linearIn;
                break;
            case "linearInOut":
                r = Laya.Ease.linearInOut;
                break;
            case "linearOut":
                r = Laya.Ease.linearOut;
                break;
            case "bounceIn":
                r = Laya.Ease.bounceIn;
                break;
            case "bounceInOut":
                r = Laya.Ease.bounceInOut;
                break;
            case "bounceOut":
                r = Laya.Ease.bounceOut;
                break;
            case "backIn":
                r = Laya.Ease.backIn;
                break;
            case "backInOut":
                r = Laya.Ease.backInOut;
                break;
            case "backOut":
                r = Laya.Ease.backOut;
                break;
            case "elasticIn":
                r = Laya.Ease.elasticIn;
                break;
            case "elasticInOut":
                r = Laya.Ease.elasticInOut;
                break;
            case "elasticOut":
                r = Laya.Ease.elasticOut;
                break;
            case "strongIn":
                r = Laya.Ease.strongIn;
                break;
            case "strongInOut":
                r = Laya.Ease.strongInOut;
                break;
            case "strongOut":
                r = Laya.Ease.strongOut;
                break;
            case "sineInOut":
                r = Laya.Ease.sineInOut;
                break;
            case "sineIn":
                r = Laya.Ease.sineIn;
                break;
            case "sineOut":
                r = Laya.Ease.sineOut;
                break;
            case "quintIn":
                r = Laya.Ease.quintIn;
                break;
            case "quintInOut":
                r = Laya.Ease.quintInOut;
                break;
            case "quintOut":
                r = Laya.Ease.quintOut;
                break;
            case "quartIn":
                r = Laya.Ease.quartIn;
                break;
            case "quartInOut":
                r = Laya.Ease.quartInOut;
                break;
            case "quartOut":
                r = Laya.Ease.quartOut;
                break;
            case "cubicIn":
                r = Laya.Ease.cubicIn;
                break;
            case "cubicInOut":
                r = Laya.Ease.cubicInOut;
                break;
            case "cubicOut":
                r = Laya.Ease.cubicOut;
                break;
            case "quadIn":
                r = Laya.Ease.quadIn;
                break;
            case "quadInOut":
                r = Laya.Ease.quadInOut;
                break;
            case "quadOut":
                r = Laya.Ease.quadOut;
                break;
            case "expoIn":
                r = Laya.Ease.expoIn;
                break;
            case "expoInOut":
                r = Laya.Ease.expoInOut;
                break;
            case "expoOut":
                r = Laya.Ease.expoOut;
                break;
            case "circIn":
                r = Laya.Ease.circIn;
                break;
            case "circInOut":
                r = Laya.Ease.circInOut;
                break;
            case "circOut":
                r = Laya.Ease.circOut
            }
            return Laya.Tween.to(a, e, t, r, i, n, !1, !0, !0, !0)
        }
        static clearAll(a) {
            Laya.Tween.clearAll(a)
        }
    },
    a.Loader = class {
        static getRes(a) {
            return Laya.loader.getRes(a)
        }
        static loadScene(a, e) {
            Laya.Scene.load(a, e)
        }
        static loadScene3D(a, e) {
            Laya.Scene3D.load(a, e)
        }
        static loadSprite3D(a, e) {
            Laya.Sprite3D.load(a, e)
        }
        static load(a, e, t) {
            t ? Laya.loader.load(a, e, null, null, 1, null, null, !0) : Laya.loader.load(a, e)
        }
    },
    a.NativeLoading = class extends Laya.Script {
        constructor() {
            super(...arguments),
            this.progressTime = .01,
            this.progressCount = 0,
            this.current = 0,
            this.progress = 0
        }
        static preload() {
            return Promise((a, e) =>{
                a()
            })
        }
        static make() {
            return null
        }
        init() {
            this.updateProgress(0)
        }
        updateProgress(a) {}
        run(a) {
            if (this.progress = a, this.current < this.progress) {
                this.progressCount += .001 * zs.Timer.inst.delta;
                let a = Math.round(this.progressCount / this.progressTime);
                this.progressCount -= a * this.progressTime,
                this.current + a >= this.progress ? this.current = this.progress: this.current = this.current + a,
                this.updateProgress(this.current)
            } else if (this.progress >= 100) return ! 0;
            return ! 1
        }
    },
    a.UIScene = class {
        static get list() {
            return null == this._list && (this._list = []),
            this._list
        }
        static init() {
            this.scene = Laya.stage.addChild(new Laya.Scene3D),
            this.camera = this.scene.addChild(new Laya.Camera(0, .1, 100)),
            this.camera.clearFlag = Laya.CameraClearFlags.DepthOnly,
            this.camera.clearColor = new Laya.Vector4(0, 0, 0, 0),
            this.camera.transform.position = new Laya.Vector3(0, 0, 3),
            this.camera.transform.rotation = new Laya.Quaternion,
            this.camera.enableRender = !1,
            this.light = this.scene.addChild(new Laya.DirectionLight),
            this.light.color = new Laya.Vector3(1, 1, 1),
            this.light.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0))
        }
        static sync(a) {
            this.scene || this.init(),
            a instanceof Laya.Camera ? (this.camera.clearFlag = a.clearFlag, this.camera.clearColor = a.clearColor, this.camera.cullingMask = a.cullingMask, this.camera.aspectRatio = a.aspectRatio, this.camera.nearPlane = a.nearPlane, this.camera.farPlane = a.farPlane, this.camera.fieldOfView = a.fieldOfView, this.camera.orthographic = a.orthographic, this.camera.orthographicVerticalSize = a.orthographicVerticalSize) : a instanceof Laya.DirectionLight && (this.light.transform.rotation = a.transform.rotation, this.light.color = a.color, this.light.intensity = a.intensity)
        }
        static resetCamera() {
            this.scene || this.init(),
            this.camera.clearFlag = Laya.CameraClearFlags.DepthOnly,
            this.camera.clearColor = new Laya.Vector4(0, 0, 0, 0),
            this.camera.aspectRatio = 0,
            this.camera.nearPlane = .1,
            this.camera.farPlane = 100,
            this.camera.fieldOfView = 60,
            this.camera.orthographic = !1,
            this.camera.orthographicVerticalSize = 10,
            this.camera.addAllLayers(),
            this.camera.transform.position = new Laya.Vector3(0, 0, 3),
            this.camera.transform.rotation = new Laya.Quaternion
        }
        static resetLight() {
            this.scene || this.init(),
            this.light.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0)),
            this.light.color = new Laya.Vector3(1, 1, 1),
            this.light.intensity = 1
        }
        static add(a, e, t) {
            return this.scene || this.init(),
            this.scene.addChild(a),
            this.list.push(a),
            a.transform.position = e || new Laya.Vector3,
            a.transform.rotationEuler = t || new Laya.Vector3,
            this.camera.enableRender = !0,
            a
        }
        static cloneAdd(a, e, t) {
            return this.add(a.clone(), e, t)
        }
        static clear() {
            if (! (null == this.list || this.list.length <= 0)) {
                for (let a = 0, e = this.list.length; a < e; a++) this.list[a].removeSelf();
                this._list = [],
                this.camera && (this.camera.enableRender = !1)
            }
        }
        static removeAt(a) {
            null == this.list || this.list.length <= 0 || a >= this.list.length || (this.list[a].removeSelf(), this.list.splice(a, 1), this.list.length <= 0 && this.camera && (this.camera.enableRender = !1))
        }
        static remove(a) {
            if (! (null == this.list || this.list.length <= 0)) {
                for (let e = 0, t = this.list.length; e < t; e++) if (this.list[e].id == a.id) {
                    this.list[e].removeSelf(),
                    this.list.splice(e, 1);
                    break
                }
                this.list.length <= 0 && this.camera && (this.camera.enableRender = !1)
            }
        }
    },
    a.init = function() {},
    a.playSound = function(a) {
        Laya.SoundManager.playSound(a, 1)
    },
    a.color = function(a) {
        return a
    },
    a.point = function(a, e) {
        return Laya.Point.create().setTo(a, e)
    },
    a.FGUITextField = s,
    a.initFGUIRoot = function() {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject)
    },
    a.setFGUIObjectXY = function(a, e, t) {
        a.setXY(e, t)
    },
    a.loadFGUIPack = function(a) {
        return new zs.Coop((e, t) =>{
            fairygui.UIPackage.loadPackage(a, zs.Handler.create(this, a =>{
                if (a && a.length > 0) {
                    let t = a[0],
                    s = t._items;
                    for (let a = 0, e = s.length; a < e; a++) {
                        let e = s[a];
                        if (e.type == fairygui.PackageItemType.Atlas) {
                            let a = t.getItemAsset(e);
                            a._bitmap && (a._bitmap.lock = !0)
                        }
                    }
                    e(t)
                } else e(null)
            }))
        })
    },
    a.setFGUIExtension = function(a, e) {
        null == fairygui.UIObjectFactory.extensions[a] && fairygui.UIObjectFactory.setPackageItemExtension(a, e)
    },
    a.sortScene = function(a) {
        let e = 1;
        zs.ui.UIScene.scene && (Laya.stage.getChildIndex(zs.ui.UIScene.scene) < Laya.stage.numChildren - e && Laya.stage.setChildIndex(zs.ui.UIScene.scene, Laya.stage.numChildren - e), e++),
        Laya.stage.getChildIndex(fairygui.GRoot.inst.displayObject) != Laya.stage.numChildren - e && Laya.stage.setChildIndex(fairygui.GRoot.inst.displayObject, Laya.stage.numChildren - e),
        a && a.loading && a.loading.owner && Laya.stage.getChildIndex(a.loading.owner) != Laya.stage.numChildren - e && Laya.stage.setChildIndex(a.loading.owner, Laya.stage.numChildren - e)
    }
} (window.zs.proxy = window.zs.proxy || {});