window.zs = window.zs || {},
window.zs.fgui = window.zs.fgui || {},
function(t) {
    "use strict";
    let i,
    e; !
    function(t) {
        t[t.Center = 0] = "Center",
        t[t.Top = 1] = "Top",
        t[t.Bottom = 2] = "Bottom",
        t[t.Left = 3] = "Left",
        t[t.Right = 4] = "Right",
        t[t.TopLeft = 5] = "TopLeft",
        t[t.BottomLeft = 6] = "BottomLeft",
        t[t.TopRight = 7] = "TopRight",
        t[t.BottomRight = 8] = "BottomRight"
    } (i = i || (i = {})),
    function(t) {
        t[t.None = 0] = "None",
        t[t.Fit = 1] = "Fit",
        t[t.ScaleFit = 2] = "ScaleFit",
        t[t.Both = 3] = "Both"
    } (e = e || (e = {}));
    class s {
        static get bases() {
            return null == this._bases && (this._bases = {}),
            this._bases
        }
        static get items() {
            return null == this._items && (this._items = {}),
            this._items
        }
        static registeBase(t, i) {
            this.bases[t] = i
        }
        static unregisteBase(t) {
            this.bases[t] && delete this.bases[t]
        }
        static registeItem(t, i) {
            this.items[t] = i
        }
        static unregisteItem(t) {
            this.items[t] && delete this.items[t]
        }
    }
    function loadPack(t, i) {
        return i || (t = s.path_root + "/" + t),
        zs.resource.load(t, zs.ResourceType.FGUIPack)
    }
    s.onInit = null,
    s.path_root = "fgui",
    s.pack_basic = "zs_basic";
    class n {
        constructor(t) {
            this.disposed = !1,
            this._view = t,
            t.baseCtrl = this,
            this._id = n.usedId,
            n.usedId++,
            this.init()
        }
        get view() {
            return this._view
        }
        get id() {
            return this._id
        }
        get window() {
            return this._window
        }
        static make(t) {
            return t && t.prototype instanceof fairygui.GComponent ? t.createInstance() : new fairygui.GComponent
        }
        static type() {
            return fairygui.GComponent
        }
        check(t) {
            return ! 0
        }
        dispose() {
            zs.Timer.inst.clearAll(this),
            zs.Tween.clearAll(this),
            this.disposed = !0
        }
        show() {
            return this._view && (this._view.visible = !0),
            this
        }
        hide() {
            return this._view && (this._view.visible = !1),
            this
        }
        init() {}
        apply() {
            return this
        }
        applyConfig() {
            return this
        }
    }
    n.usedId = 0,
    n.typeDefine = null;
    class a {
        get listByKeys() {
            return null == this._listByKeys && (this._listByKeys = {}),
            this._listByKeys
        }
        get list() {
            return null == this._list && (this._list = {}),
            this._list
        }
        static create(t, i, e, s) {
            null == t && (t = 0),
            null == i && (i = 0),
            null == e && (e = fairygui.GRoot.inst.width),
            null == s && (s = fairygui.GRoot.inst.height);
            let n = new a;
            n.window = new fairygui.Window,
            n.window.x = t,
            n.window.y = i,
            n.window.width = e,
            n.window.height = s;
            let o = new fairygui.GComponent;
            return n.window.contentPane = o,
            o.x = 0,
            o.y = 0,
            o.width = e,
            o.height = s,
            n
        }
        attach(t, i, e) {
            if (this.lastBase = null, null == t || null == this.window) return this;
            let s = t.make(t.typeDefine || t.type());
            null != i && null != i ? this.window.contentPane.addChildAt(s, i) : this.window.contentPane.addChild(s),
            s instanceof fairygui.GButton ? s.opaque = !0 : s.opaque = !1;
            let n = new t(s);
            if (n._window = this, this.lastBase = n, e && (this.listByKeys[e] = n, n.baseKey = e), this.list[n.id] = n, zs.configs.uiCfg && zs.configs.uiCfg.base && zs.configs.uiCfg.binder && zs.configs.uiCfg.binder[e]) {
                n.bindBases = [];
                let t = zs.configs.uiCfg.binder[e];
                if (Array.isArray(t)) for (let i = 0, e = t.length; i < e; i++) {
                    if ("string" != typeof t[i]) continue;
                    let e = zs.configs.uiCfg.base[t[i]];
                    e && ((zs.core.workflow || zs.core.workflow.checkSwitch(e.
                    switch, e.check)) && n.bindBases.push(this.applyConfig(e).getBase()))
                } else if ("string" == typeof t) {
                    let i = zs.configs.uiCfg.base[t];
                    i && zs.core.workflow && zs.core.workflow.checkSwitch(i.
                    switch, i.check) && n.bindBases.push(this.applyConfig(i).getBase())
                }
            }
            return this.setBase(n),
            this
        }
        detach(t) {
            if (null == t) return this;
            if ("number" == typeof t) this.window.contentPane.removeChildAt(t, !0);
            else if ("string" == typeof t) {
                let i = this.listByKeys[t];
                i && (i.dispose(), this.window.contentPane.removeChild(i.view, !0), this.list[i.id] && delete this.list[t.id])
            } else {
                if (t.baseKey && this.listByKeys[t.baseKey] && delete this.listByKeys[t.baseKey], t.bindBases && t.bindBases.length > 0) for (let i = 0; i < t.bindBases.length; i++) this.detach(t.bindBases[i]);
                t.dispose(),
                this.window.contentPane.removeChild(t.view, !0),
                this.list[t.id] && delete this.list[t.id]
            }
            return this
        }
        setBase(t, i) {
            return t && t.view ? (this.lastBase = t, i && (this.listByKeys[i] = t)) : this.lastBase = null,
            this
        }
        getBase() {
            return this.lastBase
        }
        getBaseByKey(t) {
            let i = this.listByKeys[t];
            return ! i || i.disposed ? null: i
        }
        getBaseByType(t) {
            let i = [];
            for (let e in this.list) {
                let s = this.list[e];
                s && !s.disposed ? s instanceof t && i.push(s) : delete this.list[e]
            }
            return i
        }
        clearBase() {
            return this.lastBase = null,
            this
        }
        align(t, e, s) {
            if (this.lastBase) {
                let n = this.lastBase.view.width * this.lastBase.view.scaleX,
                a = this.lastBase.view.height * this.lastBase.view.scaleY,
                o = 0;
                switch (t) {
                case i.Top:
                case i.Center:
                case i.Bottom:
                    o = .5 * (this.window.contentPane.width - n);
                    break;
                case i.TopRight:
                case i.Right:
                case i.BottomRight:
                    o = this.window.contentPane.width - n
                }
                let l = 0;
                switch (t) {
                case i.Left:
                case i.Center:
                case i.Right:
                    l = .5 * (this.window.contentPane.height - a);
                    break;
                case i.BottomLeft:
                case i.Bottom:
                case i.BottomRight:
                    l = this.window.contentPane.height - a
                }
                switch (this.lastBase.view.pivotAsAnchor && (o += n * this.lastBase.view.pivotX, l += a * this.lastBase.view.pivotY), e && (o += e), s && (l += s), zs.proxy.setFGUIObjectXY(this.lastBase.view, o, l), t) {
                case i.TopLeft:
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Left_Left),
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Top_Top);
                    break;
                case i.Top:
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Center_Center),
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Top_Top);
                    break;
                case i.TopRight:
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Right_Right),
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Top_Top);
                    break;
                case i.Left:
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Left_Left),
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Middle_Middle);
                    break;
                case i.Center:
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Center_Center),
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Middle_Middle);
                    break;
                case i.Right:
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Right_Right),
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Middle_Middle);
                    break;
                case i.BottomLeft:
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Left_Left),
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Bottom_Bottom);
                    break;
                case i.Bottom:
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Center_Center),
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Bottom_Bottom);
                    break;
                case i.BottomRight:
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Right_Right),
                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Bottom_Bottom)
                }
            }
            return this
        }
        setX(t) {
            return this.lastBase && (this.lastBase.view.x = t),
            this
        }
        setWindowX(t) {
            return this.window && (this.window.x = t),
            this
        }
        setY(t) {
            return this.lastBase && (this.lastBase.view.y = t),
            this
        }
        setWindowY(t) {
            return this.window && (this.window.y = t),
            this
        }
        setXY(t, i) {
            return this.lastBase && (this.lastBase.view.x = t, this.lastBase.view.y = i),
            this
        }
        setWindowXY(t, i) {
            return this.window && (this.window.x = t, this.window.y = i),
            this
        }
        setWidth(t) {
            return this.lastBase && (this.lastBase.view.width = t),
            this
        }
        setWindowWidth(t) {
            return this.window && (this.window.width = t),
            this
        }
        setHeight(t) {
            return this.lastBase && (this.lastBase.view.height = t),
            this
        }
        setWindowHeight(t) {
            return this.window && (this.window.height = t),
            this
        }
        scaleFitWindow(t, i) {
            if (this.window) {
                let e = 1;
                e = i / t >= fairygui.GRoot.inst.width / fairygui.GRoot.inst.height ? fairygui.GRoot.inst.height / i: fairygui.GRoot.inst.width / t,
                this.window.setScale(e, e)
            }
            return this
        }
        scaleFit(t, i) {
            if (this.lastBase) {
                let e = 1;
                e = i / t >= this.window.contentPane.height / this.window.contentPane.width ? this.window.contentPane.height / i: this.window.contentPane.width / t,
                this.lastBase.view.setScale(e, e)
            }
            return this
        }
        scaleWindow(t, i) {
            return this.window && this.window.setScale(t, i),
            this
        }
        scale(t, i) {
            return this.lastBase && this.lastBase.view.setScale(t, i),
            this
        }
        fitScale(t, i) {
            return this.lastBase && this.lastBase.view.setScale(this.lastBase.view.scaleX * t, this.lastBase.view.scaleY * i),
            this
        }
        fit() {
            if (this.lastBase) {
                let t = 0,
                i = 0;
                this.lastBase.view.width = this.window.contentPane.width / this.lastBase.view.scaleX * (1 / this.window.scaleX),
                this.lastBase.view.height = this.window.contentPane.height / this.lastBase.view.scaleY * (1 / this.window.scaleY),
                this.lastBase.view.pivotAsAnchor && (t += this.lastBase.view.width * this.lastBase.view.scaleX * this.lastBase.view.pivotX, i += this.lastBase.view.height * this.lastBase.view.scaleY * this.lastBase.view.pivotY),
                this.lastBase.view.x = t,
                this.lastBase.view.y = i
            }
            return this
        }
        fitWidth(t) {
            if (this.lastBase) {
                let i = this.window.contentPane.width / this.lastBase.view.width;
                this.lastBase.view.width = this.window.contentPane.width * (1 / this.window.scaleX),
                this.lastBase.view.x = this.lastBase.view.pivotAsAnchor ? this.lastBase.view.width * this.lastBase.view.pivotX: 0,
                t && (this.lastBase.view.height *= i * (1 / this.window.scaleY), this.lastBase.view.y = this.lastBase.view.y + (this.lastBase.view.pivotAsAnchor ? this.lastBase.view.height * this.lastBase.view.pivotY: 0))
            }
            return this
        }
        fitHeight(t) {
            if (this.lastBase) {
                let i = this.window.contentPane.height / this.lastBase.view.height;
                this.lastBase.view.height = this.window.contentPane.height * (1 / this.window.scaleY),
                this.lastBase.view.y = this.lastBase.view.pivotAsAnchor ? this.lastBase.view.height * this.lastBase.view.pivotY: 0,
                t && (this.lastBase.view.width *= i * (1 / this.window.scaleX), this.lastBase.view.x = this.lastBase.view.x + (this.lastBase.view.pivotAsAnchor ? this.lastBase.view.width * this.lastBase.view.pivotX: 0))
            }
            return this
        }
        block(t) {
            return this.lastBase && (this.lastBase.view.opaque = t),
            this
        }
        autoFront(t) {
            return null != this.window && (this.window.bringToFontOnClick = t),
            this
        }
        front() {
            if (null != this.window) {
                let t = this.window.root || fairygui.GRoot.inst;
                t.getChildIndex(this.window) >= 0 && t.setChildIndex(this.window, t.numChildren - 1),
                this.checkMsgbox()
            }
            return this
        }
        top() {
            if (this.lastBase) {
                let t = this.window.contentPane;
                t.getChildIndex(this.lastBase.view) >= 0 && t.setChildIndex(this.lastBase.view, t.numChildren - 1)
            }
            return this
        }
        update(t, i, e) {
            return this.lastBase && (this.lastBase instanceof t && this.lastBase.view ? i.call(e, this.lastBase, this.window) : zs.log.warn("UI类型不匹配，无法生成对应系统!", this.lastBase)),
            this
        }
        show() {
            return null != this.window && (this.window.show(), this.checkMsgbox()),
            this
        }
        hide() {
            return null != this.window && this.window.hide(),
            this
        }
        clear() {
            if (null != this.window) {
                for (let t = this.window.contentPane.numChildren - 1; t >= 0; t--) {
                    const i = this.window.contentPane.getChildAt(t);
                    i && i.baseCtrl && i.baseCtrl.dispose && i.baseCtrl.dispose()
                }
                this.window.contentPane.removeChildren(0, -1, !0)
            }
            return this
        }
        applyConfig(t) {
            let e = s.bases[t.type];
            if (null == e) return this;
            if (this.attach(e, null, t.key), t.window) {
                if (null != t.window.width && this.setWidth(t.window.width), null != t.window.height && this.setHeight(t.window.height), !t.window.ignoreautoscale && !t.window.ignore_auto_scale && (zs.configs.gameCfg.autoScaleFit || null != t.window.scale_fit || null != t.window.scalefit)) {
                    let i = t.window.scale_fit || t.window.scalefit;
                    null == i || !Array.isArray(i) || i.length <= 1 ? this.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight) : this.scaleFit(i[0], i[1])
                }
                if (t.window.fitscale || t.window.fit_scale) {
                    let i = t.window.fit_scale || t.window.fitscale;
                    Array.isArray(i) && i.length > 1 && this.fitScale(i[0], i[1])
                }
                t.window.scale && Array.isArray(t.window.scale) && t.window.scale.length > 1 && this.scale(t.window.scale[0], t.window.scale[1]),
                (t.window.fit_width || t.window.fitwidth) && this.fitWidth(),
                (t.window.fit_height || t.window.fitheight) && this.fitHeight(),
                t.window.fit && this.fit()
            }
            if (t.base ? this.update(e, i =>{
                i.applyConfig(t.base)
            }) : this.update(e, t =>{
                t.apply()
            }), t.window) {
                if (t.window.align) switch (t.window.align) {
                case "center":
                    this.align(i.Center, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                    break;
                case "top":
                    this.align(i.Top, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                    break;
                case "bottom":
                    this.align(i.Bottom, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                    break;
                case "left":
                    this.align(i.Left, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                    break;
                case "right":
                    this.align(i.Right, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                    break;
                case "topleft":
                    this.align(i.TopLeft, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                    break;
                case "bottomleft":
                    this.align(i.BottomLeft, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                    break;
                case "topright":
                    this.align(i.TopRight, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                    break;
                case "bottomright":
                    this.align(i.BottomRight, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0)
                }
                null != t.window.x && this.setX(t.window.x),
                null != t.window.y && this.setY(t.window.y),
                null != t.window.block && this.block(t.window.block),
                (null != t.window.auto_front || null != t.window.autofront) && this.autoFront(t.window.auto_front || t.window.autofront),
                t.window.front && this.front(),
                t.window.top && this.top()
            }
            return this
        }
        dispose() {
            if (null != this.window) {
                for (let t = this.window.contentPane.numChildren - 1; t >= 0; t--) {
                    const i = this.window.contentPane.getChildAt(t);
                    i && i.baseCtrl && i.baseCtrl.dispose && (i.baseCtrl.dispose(), i.dispose())
                }
                this.window.dispose()
            }
        }
        isShowing() {
            return null != this.window && this.window.isShowing
        }
        checkMsgbox() {
            if (l._windowInst && l._windowInst.isShowing()) {
                let t = l._windowInst.window,
                i = t.root || fairygui.GRoot.inst;
                i.getChildIndex(t) >= 0 && i.setChildIndex(t, i.numChildren - 1)
            }
            if (h.inst && h.inst.view.visible) {
                let t = h._windowInst.window,
                i = t.root || fairygui.GRoot.inst;
                i.getChildIndex(t) >= 0 && i.setChildIndex(t, i.numChildren - 1)
            }
        }
    }
    class o {
        static get list() {
            return null == this._list && (this._list = {}),
            this._list
        }
        static get(t, i) {
            let e = this.defaultPanel;
            return null != t && t.trim().length > 0 && (t = t.trim(), e = this.list[t]),
            null == e && i && (e = a.create(), null != t && t.trim().length > 0 ? this.list[t] = e: this.defaultPanel = e),
            e
        }
        static open(t, i, s) {
            let n = this.defaultPanel;
            if (null != i && i.trim().length > 0 && (i = i.trim(), n = this.list[i]), null != n && n.dispose(), n = a.create(), t) switch (n.attach(t), null != s && null != s || (s = e.Both), s) {
            case e.Fit:
                n.fit();
                break;
            case e.ScaleFit:
                n.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight);
                break;
            case e.Both:
                n.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit()
            }
            return n.show(),
            null != i && i.trim().length > 0 ? this.list[i] = n: this.defaultPanel = n,
            n
        }
        static show(t, i, s, n) {
            let a = this.defaultPanel;
            if (null != s && s.trim().length > 0 && (s = s.trim(), a = this.list[s]), null != a) {
                if (i) {
                    let t = a.getBaseByType(i);
                    if (t && t.length > 0) a.setBase(t[0]);
                    else switch (a.attach(i), null != n && null != n || (n = e.Both), n) {
                    case e.Fit:
                        a.fit();
                        break;
                    case e.ScaleFit:
                        a.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight);
                        break;
                    case e.Both:
                        a.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit()
                    }
                }
            } else if (t) return this.open(i, s, n);
            return a.show()
        }
        static hide(t) {
            let i = this.defaultPanel;
            return null != t && t.trim().length > 0 && (t = t.trim(), i = this.list[t]),
            null != i && i.hide(),
            i
        }
    }
    o.defaultPanel = null;
    class l extends n {
        static get msgList() {
            return null == this._msgList && (this._msgList = []),
            this._msgList
        }
        static get windowInst() {
            return null == this._windowInst && (this._windowInst = a.create().attach(l).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).block(!0)),
            this._windowInst
        }
        static show(t) {
            l.windowInst.isShowing() ? l.msgList.push(t) : l.windowInst.update(l, i =>{
                i.setTitle(t.title).setContent(t.content).setConfirmText(t.confirmText).setCancelText(t.cancelText).setConfirmHandler(t.confirmHandler).setCancelHandler(t.cancelHandler).switchCancel(t.hideCancel).apply()
            }).align(i.Center).show().front()
        }
        static hide() {
            l.windowInst.hide(),
            l.msgList.length > 0 && l.show(l.msgList.pop())
        }
        static clear() {
            l._msgList = []
        }
        constructor(t) {
            super(t),
            zs.proxy.Event.FGUIOnClick(t.btn_confirm, this, this.onConfirmClick),
            zs.proxy.Event.FGUIOnClick(t.btn_cancel, this, this.onCancelClick)
        }
        static make() {
            return zs.ui.FGUI_msgbox.createInstance()
        }
        static type() {
            return zs.ui.FGUI_msgbox
        }
        check(t) {
            return t instanceof zs.ui.FGUI_msgbox
        }
        setTitle(t) {
            return this.view.title.text = t || "提示",
            this
        }
        setContent(t) {
            return this.view.content.text = t || "",
            this
        }
        setConfirmText(t) {
            return this.view.btn_confirm.title = t || "确定",
            this
        }
        setCancelText(t) {
            return this.view.btn_cancel.title = t || "取消",
            this
        }
        switchCancel(t) {
            return t ? this.hideCancel() : this.showCancel()
        }
        showCancel() {
            return this.view.state.selectedIndex = 1,
            this
        }
        hideCancel() {
            return this.view.state.selectedIndex = 0,
            this
        }
        setConfirmHandler(t) {
            return this.confirmHandler = t,
            this
        }
        setCancelHandler(t) {
            return this.cancelHandler = t,
            this
        }
        onConfirmClick() {
            this.confirmHandler && this.confirmHandler.run(),
            l.hide()
        }
        onCancelClick() {
            this.cancelHandler && this.cancelHandler.run(),
            l.hide()
        }
    }
    class h extends n {
        constructor(t) {
            super(t),
            t.text = "",
            t.color = zs.proxy.color("#ff0000"),
            t.fontSize = 30,
            t.bold = !0,
            t.singleLine = !0,
            t.autoSize = !0
        }
        static get windowInst() {
            return null == this._windowInst && (this._windowInst = a.create()),
            this._windowInst
        }
        static make() {
            return new zs.proxy.FGUITextField
        }
        get text() {
            return this.view.text
        }
        setText(t) {
            this.view.text = t
        }
        static show(t) {
            let i = zs.configs.gameCfg;
            i && i.skipCheck || (null == this.inst && (this.inst = this.windowInst.attach(h).align(zs.fgui.AlignType.BottomLeft).show().front().getBase()), this.inst && (this.inst.view.visible = !0, this.inst.setText(t)))
        }
        static hide() {
            this.inst && (this.inst.view.visible = !1)
        }
    }
    t.AlignType = i,
    t.FitType = e,
    t.configs = s,
    t.init = function() {
        fairygui.UIConfig.packageFileExtension = "bin",
        fairygui.UIConfig.bringWindowToFrontOnClick = !1,
        s.onInit && s.onInit.run(),
        zs.proxy.initFGUIRoot()
    },
    t.loadPack = loadPack,
    t.loadPacks = function(t, i) {
        return new zs.Coop(async(e, s) =>{
            if (null == t || t.length <= 0) return e(null);
            let n = [];
            for (let e = 0, s = t.length; e < s; e++) n.push(await loadPack(t[e], i).
            catch(t =>t));
            e(n)
        })
    },
    t.base = n,
    t.baseGeneric = class extends n {
        get view() {
            return this._view
        }
    },
    t.window = a,
    t.manager = o,
    t.msgbox = l,
    t.msgtext = h
} (window.zs.fgui = window.zs.fgui || {});