window.zs = window.zs || {},
function(e) {
    "use strict";
    class t {
        get exportWindow() {
            return null == this._exportWindow && (this._exportWindow = zs.fgui.window.create().show()),
            this._exportWindow
        }
        get bannerWindow() {
            return null == this._bannerWindow && (this._bannerWindow = zs.fgui.window.create().show()),
            this._bannerWindow
        }
        get fsmList() {
            return null == this._fsmList && (this._fsmList = {}),
            this._fsmList
        }
        get state() {
            return this.fsm ? this.fsm.current: null
        }
        get childState() {
            return this.fsm && this.fsmList[this.fsm.current] ? this.fsmList[this.fsm.current].current: null
        }
        get eventList() {
            return null == this._eventList && (this._eventList = {}),
            this._eventList
        }
        constructor() {
            this.switchExporter = "zs_jump_switch",
            this.exporterPack = null
        }
        registe() {
            this.fsm = (new zs.fsm).registe(zs.workflow.PRODUCT_START, zs.workflow.PRODUCT_BEGIN).registe(zs.workflow.PRODUCT_BEGIN, zs.workflow.GAME_HOME).registe(zs.workflow.GAME_HOME, zs.workflow.PRODUCT_HOME_PLAY).registe(zs.workflow.PRODUCT_HOME_PLAY, zs.workflow.GAME_PLAY).registe(zs.workflow.GAME_PLAY, zs.workflow.PRODUCT_PLAY_END).registe(zs.workflow.PRODUCT_PLAY_END, zs.workflow.GAME_END).registe(zs.workflow.GAME_END, zs.workflow.PRODUCT_FINISH).registe(zs.workflow.PRODUCT_FINISH, zs.workflow.PRODUCT_BEGIN).setDefault(zs.workflow.PRODUCT_START),
            this.registeEvent(t.eventNext, this, e =>{
                this.next(e)
            }),
            this.registeEvent(t.eventChildNext, this, e =>{
                this.childNext(e)
            }),
            this.registeEvent(t.eventCreateBase, this, e =>{
                this.createBase(e)
            }),
            this.registeEvent(t.eventCloseBase, this, e =>{
                this.exportWindow.detach(e)
            })
        }
        start() {
            this.fsm && (this.fsm.onBeforeChange = zs.Handler.create(this, this.onBeforeChange, null, !1), this.fsm.onChanged = zs.Handler.create(this, this.onChanged, null, !1)),
            zs.fgui.configs.registeBase(t.exporterList, zs.exporter.list),
            zs.fgui.configs.registeBase(t.exporterCard, zs.exporter.card),
            zs.fgui.configs.registeBase(t.exporterBackground, zs.exporter.background),
            zs.fgui.configs.registeBase(t.exporterLoader, zs.exporter.loader),
            zs.fgui.configs.registeBase(t.exporterButton, zs.exporter.button),
            s.addAppShow(zs.Handler.create(this, zs.platform.sync.clearDelayBanner, null, !1)),
            this.fsm.init()
        }
        setFSM(e, t) {
            this.fsmList[e.trim()] = t
        }
        registeEvent(e, t, s, ...i) {
            this.eventList[e.trim()] = {
                caller: t,
                func: s,
                args: i
            }
        }
        applyEvent(e, t) {
            let s = this.eventList[e.trim()];
            s && s.func && s.func.apply(s.caller, t && t.length > 0 ? t: s.args)
        }
        applyEventReturn(e, t) {
            let s = this.eventList[e.trim()];
            return s && s.func ? s.func.apply(s.caller, t && t.length > 0 ? t: s.args) : null
        }
        callEvent(e, ...t) {
            this.applyEvent(e, t)
        }
        callEventReturn(e, ...t) {
            return this.applyEventReturn(e, t)
        }
        readConfigReturn(e) {
            if (null == e || null == e) return null;
            let t = null,
            s = typeof e;
            if ("number" === s || "boolean" === s || Array.isArray(e)) t = e;
            else if ("object" === s) for (let s in e) {
                let i = e[s];
                null == i || null == i || Array.isArray(i) || (i = [i]),
                t = this.applyEventReturn(s, i);
                break
            } else "string" === s && (t = this.applyEventReturn(e));
            return t
        }
        runEventConfig(e) {
            if (null == e || null == e) return;
            let t = typeof e;
            if ("string" === t) this.callEvent(e);
            else if (Array.isArray(e)) for (let t = 0, s = e.length; t < s; t++) this.runEventConfig(e[t]);
            else if ("object" == t) for (let t in e) {
                let s = e[t];
                Array.isArray(s) || null == s || null == s || (s = [s]),
                this.applyEvent(t, s)
            }
        }
        registeChildFSM() {
            let e = zs.configs.productCfg;
            for (let t in e) {
                if (t = t.trim(), this.fsmList[t]) continue;
                let s = e[t].states;
                if (!s || s.length <= 0) continue;
                let i = null,
                r = null,
                n = new zs.fsm;
                for (let e = 0, t = s.length; e < t; e++) {
                    let t = s[e];
                    null != t && "string" == typeof t && ((t = t.trim()).length <= 0 || (i ? (n.registe(r, t), r = t) : (i = t, r = t)))
                }
                if (i) {
                    n.setDefault(i);
                    let s = e[t].substates;
                    if (s && Array.isArray(s)) for (let e = 0, t = s.length; e < t; e++) {
                        let t = s[e];
                        if (null == t || !Array.isArray(t) || t.length <= 1) continue;
                        let i = null;
                        for (let e = 0, s = t.length; e < s; e++) {
                            let s = t[e];
                            null != s && "string" == typeof s && ((s = s.trim()).length <= 0 || n.getState(i, s) || (i && n.registe(i, s, null != n.list[i] ? -1 : 0), i = s))
                        }
                    }
                    this.fsmList[t] = n
                }
            }
        }
        on(e, t, s, i) {
            if (null == e || e.trim().length <= 0 || null == t) return;
            e = e.trim(),
            t.once = !1,
            i = i || 0,
            t.priority = i;
            let r = -1,
            n = null;
            if (s ? (null == this.preListeners && (this.preListeners = {}), null == this.preListeners[e] && (this.preListeners[e] = []), n = this.preListeners[e]) : (null == this.listeners && (this.listeners = {}), null == this.listeners[e] && (this.listeners[e] = []), n = this.listeners[e]), n) {
                for (let e = 0, s = n.length; e < s; e++) {
                    if (n[e]._id == t._id) return;
                    let s = n[e].priority || 0;
                    if (r < 0 && i > s) {
                        r = e;
                        break
                    }
                }
                r < 0 ? n.push(t) : n.splice(r, 0, t)
            }
        }
        onLater(e, t, s, i) {
            if (null == e || e.trim().length <= 0 || null == t) return;
            e = e.trim(),
            t.once = !1,
            i = i || 0,
            t.priority = i;
            let r = -1,
            n = null;
            if (s ? (null == this.laterPreListeners && (this.laterPreListeners = {}), null == this.laterPreListeners[e] && (this.laterPreListeners[e] = []), n = this.laterPreListeners[e]) : (null == this.laterListeners && (this.laterListeners = {}), null == this.laterListeners[e] && (this.laterListeners[e] = []), n = this.laterListeners[e]), n) {
                for (let e = 0, s = n.length; e < s; e++) {
                    if (n[e]._id == t._id) return;
                    let s = n[e].priority || 0;
                    if (r < 0 && i > s) {
                        r = e;
                        break
                    }
                }
                r < 0 ? n.push(t) : n.splice(r, 0, t)
            }
        }
        once(e, t, s, i) {
            this.on(e, t, s, i),
            t && (t.once = !0)
        }
        onceLater(e, t, s, i) {
            this.onLater(e, t, s, i),
            t && (t.once = !0)
        }
        off(e, t, s) {
            if (! (null == e || e.trim().length <= 0 || null == t)) if (e = e.trim(), s) {
                if (null == this.preListeners) return;
                if (null == this.preListeners[e]) return;
                let s = this.preListeners[e];
                for (let e = 0, i = s.length; e < i; e++) if (s[e]._id == t._id) return void s.splice(e, 1)
            } else {
                if (null == this.listeners) return;
                if (null == this.listeners[e]) return;
                let s = this.listeners[e];
                for (let e = 0, i = s.length; e < i; e++) if (s[e]._id == t._id) return void s.splice(e, 1)
            }
        }
        offLater(e, t, s) {
            if (! (null == e || e.trim().length <= 0 || null == t)) if (e = e.trim(), s) {
                if (null == this.laterPreListeners) return;
                if (null == this.laterPreListeners[e]) return;
                let s = this.laterPreListeners[e];
                for (let e = 0, i = s.length; e < i; e++) if (s[e]._id == t._id) return void s.splice(e, 1)
            } else {
                if (null == this.laterListeners) return;
                if (null == this.laterListeners[e]) return;
                let s = this.laterListeners[e];
                for (let e = 0, i = s.length; e < i; e++) if (s[e]._id == t._id) return void s.splice(e, 1)
            }
        }
        offAll(e, t) {
            if (! (null == e || e.trim().length <= 0)) if (e = e.trim(), t) {
                if (null == this.preListeners) return;
                if (null == this.preListeners[e]) return;
                delete this.preListeners[e]
            } else {
                if (null == this.listeners) return;
                if (null == this.listeners[e]) return;
                delete this.listeners[e]
            }
        }
        offAllLater(e, t) {
            if (! (null == e || e.trim().length <= 0)) if (e = e.trim(), t) {
                if (null == this.laterPreListeners) return;
                if (null == this.laterPreListeners[e]) return;
                delete this.laterPreListeners[e]
            } else {
                if (null == this.laterListeners) return;
                if (null == this.laterListeners[e]) return;
                delete this.laterListeners[e]
            }
        }
        offAllCaller(e, t, s) {
            if (null != e) if (null == t || t.trim().length <= 0) if (s) for (let t in this.preListeners) {
                let s = this.preListeners[t];
                for (let t = 0, i = s.length; t < i; t++) s[t].caller == e && (s.splice(t, 1), t--, i--)
            } else for (let t in this.listeners) {
                let s = this.listeners[t];
                for (let t = 0, i = s.length; t < i; t++) s[t].caller == e && (s.splice(t, 1), t--, i--)
            } else if (t = t.trim(), s) {
                let s = this.preListeners[t];
                if (s) for (let t = 0, i = s.length; t < i; t++) s[t].caller == e && (s.splice(t, 1), t--, i--)
            } else {
                let s = this.listeners[t];
                if (s) for (let t = 0, i = s.length; t < i; t++) s[t].caller == e && (s.splice(t, 1), t--, i--)
            }
        }
        offAllCallerLater(e, t, s) {
            if (null != e) if (null == t || t.trim().length <= 0) if (s) for (let t in this.laterPreListeners) {
                let s = this.laterPreListeners[t];
                for (let t = 0, i = s.length; t < i; t++) s[t].caller == e && (s.splice(t, 1), t--, i--)
            } else for (let t in this.laterListeners) {
                let s = this.laterListeners[t];
                for (let t = 0, i = s.length; t < i; t++) s[t].caller == e && (s.splice(t, 1), t--, i--)
            } else if (t = t.trim(), s) {
                let s = this.laterPreListeners[t];
                if (s) for (let t = 0, i = s.length; t < i; t++) s[t].caller == e && (s.splice(t, 1), t--, i--)
            } else {
                let s = this.laterListeners[t];
                if (s) for (let t = 0, i = s.length; t < i; t++) s[t].caller == e && (s.splice(t, 1), t--, i--)
            }
        }
        clear(e) {
            e ? this.preListeners = null: this.listeners = null
        }
        clearLater(e) {
            e ? this.laterPreListeners = null: this.laterListeners = null
        }
        next(e) {
            this.wantNext = 1,
            this.nextTarget = e,
            this.step()
        }
        childNext(e) {
            this.wantNext || (this.wantNext = 2, this.nextTarget = e, this.step())
        }
        step() {
            if (this.lockStep) return;
            let e = this.nextTarget,
            t = this.wantNext;
            switch (this.wantNext = 0, this.nextTarget = null, t) {
            case 1:
                if (null != this.fsm) {
                    let t = this.fsm.current;
                    e ? this.fsm.runTransition(e) || zs.log.error("无法执行从 " + t + " 到 " + e + " 的工作流，请检查是否完整注册流程!", "Core") : this.fsm.runNext() || zs.log.error("无法执行 " + t + " 的后续工作流，请检查是否完整注册流程!", "Core")
                }
                break;
            case 2:
                if (null != this.fsm) {
                    let t = this.fsmList[this.fsm.current],
                    s = !1;
                    if (t && (e && !t.runTransition(e) || !e && !t.runNext()) && (this.onChildFSMBeforeChanged(null, t.current), s = !0), !t || s) {
                        let e = this.fsm.current;
                        this.fsm.runNext() || zs.log.error("无法执行 " + e + " 的后续工作流，请检查是否完整注册流程!", "Core")
                    }
                }
            }
        }
        onBeforeChange(e, t) {
            if (this.checkExitEvent(t), this.exportWindow.clear(), zs.platform.sync.hideBanner(), zs.platform.sync.clearDelayBanner(), null != this.laterPreListeners && null != this.laterPreListeners[e]) {
                let t = this.laterPreListeners[e];
                for (let e = 0, s = t.length; e < s; e++) {
                    let i = t[e].once;
                    t[e].run(),
                    i && (t.splice(e, 1), e--, s--)
                }
            }
            this.lockStep = !1,
            this.step()
        }
        checkSwitch(e, t) {
            let s = !0;
            if (e) if ("boolean" == typeof e) s = e;
            else if (Array.isArray(e)) for (let t = 0, i = e.length; t < i; t++) {
                let i = e[t];
                if (i && !(i.length <= 0)) if ("!" == i[0] || "！" == i[0]) {
                    if (! (i.length > 1)) {
                        s = !1;
                        break
                    }
                    if (i = i.slice(1, i.length), zs.product.get(i)) {
                        s = !1;
                        break
                    }
                } else if (!zs.product.get(i)) {
                    s = !1;
                    break
                }
            } else if ("string" == typeof typeof e) {
                let t = e;
                t && t.length > 0 && ("!" == t[0] || "！" == t[0] ? t.length > 1 ? (t = t.slice(1, t.length), zs.product.get(t) && (s = !1)) : s = !1 : zs.product.get(t) || (s = !1))
            }
            return !! s && (t && (s = this.readConfigReturn(t)), s)
        }
        onChanged(e) {
            this.lockStep = !0;
            let t = zs.td.descMap[e];
            null == t && (t = e),
            zs.td.justTrack(t, t);
            let s = zs.configs.productCfg[e],
            i = !1;
            s && (s.
            switch || s.check) && (i = !this.checkSwitch(s.
            switch, s.check));
            let r = this.fsmList[e];
            if (i) this.next();
            else {
                if (null != this.listeners && null != this.listeners[e]) {
                    let t = this.listeners[e];
                    for (let e = 0, s = t.length; e < s; e++) {
                        let i = t[e].once;
                        t[e].run(),
                        i && (t.splice(e, 1), e--, s--)
                    }
                }
                if (this.checkEvent(e), r) {
                    r.onBeforeChange = zs.Handler.create(this, this.onChildFSMBeforeChanged, null, !1),
                    r.onChanged = zs.Handler.create(this, this.onChildFSMChanged, null, !1),
                    r.init(),
                    zs.configs.productCfg[e] && zs.log.info(e + " 状态存在子状态机，无法自动创建应用运营配置，请使用子状态进行配置!", "Workflow", r.list)
                } else this.checkBase(e),
                zs.product.get(this.switchExporter) && this.checkExporter(e),
                this.checkBanner(e);
                if (this.checkLaterEvent(e), null != this.laterListeners && null != this.laterListeners[e]) {
                    let t = this.laterListeners[e];
                    for (let e = 0, s = t.length; e < s; e++) {
                        let i = t[e].once;
                        t[e].run(),
                        i && (t.splice(e, 1), e--, s--)
                    }
                }
            }
            this.lockStep = !1,
            this.step()
        }
        onChildFSMBeforeChanged(e, t) {
            if (null == this.fsm) return;
            this.lockStep = !0;
            let s = this.fsm.current + "." + e;
            if (null != this.preListeners && null != this.preListeners[s]) {
                let e = this.preListeners[s];
                for (let t = 0, s = e.length; t < s; t++) {
                    let i = e[t].once;
                    e[t].run(),
                    i && (e.splice(t, 1), t--, s--)
                }
            }
            if (this.checkExitEvent(this.fsm.current + "." + t), this.exportWindow.clear(), zs.platform.sync.hideBanner(), zs.platform.sync.clearDelayBanner(), null != this.laterPreListeners && null != this.laterPreListeners[s]) {
                let e = this.laterPreListeners[s];
                for (let t = 0, s = e.length; t < s; t++) {
                    let i = e[t].once;
                    e[t].run(),
                    i && (e.splice(t, 1), t--, s--)
                }
            }
            this.lockStep = !1,
            this.step()
        }
        onChildFSMChanged(e) {
            if (null == this.fsm) return;
            this.lockStep = !0;
            let t = this.fsm.current + "." + e,
            s = zs.td.descMap[this.fsm.current];
            null == s && (s = this.fsm.current),
            s = s + "." + e,
            zs.td.justTrack(s, s);
            let i = zs.configs.productCfg[t],
            r = !1;
            if (i && (i.
            switch || i.check) && (r = !this.checkSwitch(i.
            switch, i.check)), r) this.childNext();
            else {
                if (null != this.listeners && null != this.listeners[t]) {
                    let e = this.listeners[t];
                    for (let t = 0, s = e.length; t < s; t++) {
                        let i = e[t].once;
                        e[t].run(),
                        i && (e.splice(t, 1), t--, s--)
                    }
                }
                if (this.checkEvent(t), this.checkBase(t), zs.product.get(this.switchExporter) && this.checkExporter(t), this.checkBanner(t), this.checkLaterEvent(t), null != this.laterListeners && null != this.laterListeners[t]) {
                    let e = this.laterListeners[t];
                    for (let t = 0, s = e.length; t < s; t++) {
                        let i = e[t].once;
                        e[t].run(),
                        i && (e.splice(t, 1), t--, s--)
                    }
                }
            }
            this.lockStep = !1,
            this.step()
        }
        checkEvent(e) {
            let t = zs.configs.productCfg[e];
            t && t.event && this.runEventConfig(t.event)
        }
        checkLaterEvent(e) {
            let t = zs.configs.productCfg[e];
            t && t.laterevent && this.runEventConfig(t.laterevent)
        }
        checkExitEvent(e) {
            let t = zs.configs.productCfg[e];
            t && t.exitevent && this.runEventConfig(t.exitevent)
        }
        showPreviewBanner(e) {
            let t = e ? e.pos: null,
            s = e ? e.size: null,
            i = e ? e.checkInit: null,
            r = e && null != e.isWait ? e.isWait: null,
            n = t && t.right ? t.right: null,
            l = t && t.bottom ? t.bottom: null;
            t && t.left && (n = -t.left),
            t && t.top && (l = -t.top),
            e && e.empty ? s = {
                width: zs.configs.gameCfg.debug ? 10 : 1,
                height: zs.configs.gameCfg.debug ? 10 : 1
            }: null == s && (s = {
                width: zs.platform.config.bannerWidth || 600,
                height: zs.platform.config.bannerHeight || 200
            }),
            i ? this.banner || (this.bannerWindow.attach(zs.exporter.banner).update(zs.exporter.banner, e =>{
                this.banner = e,
                s && (s.width && e.setWidth(s.width), s.height && e.setHeight(s.height)),
                this.banner.view.visible = !r
            },
            this), e && e.empty ? this.bannerWindow.align(zs.fgui.AlignType.TopLeft) : this.bannerWindow.align(zs.fgui.AlignType.Bottom, n, l), this.bannerWindow.show().front()) : this.banner && (s && (s.width && this.banner.setWidth(s.width), s.height && this.banner.setHeight(s.height)), this.bannerWindow.setBase(this.banner), e && e.empty ? this.bannerWindow.align(zs.fgui.AlignType.TopLeft) : this.bannerWindow.align(zs.fgui.AlignType.Bottom, n, l), this.bannerWindow.show().front(), this.banner.view.visible = !0)
        }
        hidePreviewBanner() {
            this.banner && (this.bannerWindow.detach(this.banner), this.banner = null)
        }
        checkBanner(e) {
            let t = zs.configs.productCfg[e],
            s = zs.product.get("zs_skip_empty_banner") || "wx_" != zs.platform.config.platformMark;
            if (t && t.banner) {
                if (this.bannerIgnoreList && this.bannerIgnoreList.indexOf(e) >= 0) return zs.log.info("状态 " + e + " 在横幅广告忽略列表中，无法自动生成，请自主管理横幅广告展示或将该状态移出忽略列表", "Workflow"),
                void(!s && zs.platform.sync.updateBanner({
                    empty: !0,
                    checkInit: !0
                }));
                if ((t.banner.
                switch || t.banner.check) && !this.checkSwitch(t.banner.
                switch, t.banner.check)) return void(!s && zs.platform.sync.updateBanner({
                    empty: !0,
                    checkInit: !0
                }));
                zs.platform.sync.checkBanner({
                    data: t
                })
            } else ! s && zs.platform.sync.updateBanner({
                empty: !0,
                checkInit: !0
            })
        }
        checkExporter(e) {
            let t = zs.configs.productCfg[e];
            if (this.exporterIgnoreList && this.exporterIgnoreList.indexOf(e) >= 0) t && t.exporter && t.exporter.length > 0 && zs.log.info("状态 " + e + " 在导出忽略列表中，无法自动生成，请自主管理导出展示或将该状态移出忽略列表", "Workflow");
            else if (t && t.exporter) {
                let e = t.exporter;
                if (Array.isArray(e) && e.length > 0) for (let e = 0, s = t.exporter.length; e < s; e++) {
                    let s = t.exporter[e];
                    s && ((!s.
                    switch && !s.check || this.checkSwitch(s.
                    switch, s.check)) && this.exportWindow.applyConfig(s).front())
                } else "object" == typeof e && (!e.
                switch && !e.check || this.checkSwitch(e.
                switch, e.check)) && this.exportWindow.applyConfig(e).front()
            }
        }
        checkBase(e) {
            let t = zs.configs.productCfg[e];
            if (t && t.base) {
                let e = t.base;
                if (Array.isArray(e) && e.length > 0) for (let e = 0, s = t.base.length; e < s; e++) {
                    let s = t.base[e];
                    s && ((!s.
                    switch && !s.check || this.checkSwitch(s.
                    switch, s.check)) && this.exportWindow.applyConfig(s).front())
                } else "object" == typeof e && (!e.
                switch && !e.check || this.checkSwitch(e.
                switch, e.check)) && this.exportWindow.applyConfig(e).front()
            }
        }
        createBase(e) {
            let t = zs.configs.uiCfg.base[e];
            return t && this.checkSwitch(t.
            switch, t.check) ? this.exportWindow.applyConfig(t).front().getBase() : null
        }
    }
    t.exporterList = "export_list",
    t.exporterCard = "export_card",
    t.exporterBackground = "export_background",
    t.exporterLoader = "export_loader",
    t.exporterButton = "export_button",
    t.eventNext = "event_next",
    t.eventChildNext = "event_childnext",
    t.eventCreateBase = "event_createbase",
    t.eventCloseBase = "event_closebase",
    t.PRODUCT_START = "PRODUCT_START",
    t.PRODUCT_BEGIN = "PRODUCT_BEGIN",
    t.GAME_HOME = "GAME_HOME",
    t.PRODUCT_HOME_PLAY = "PRODUCT_HOME_PLAY",
    t.GAME_PLAY = "GAME_PLAY",
    t.PRODUCT_PLAY_END = "PRODUCT_PLAY_END",
    t.GAME_END = "GAME_END",
    t.PRODUCT_FINISH = "PRODUCT_FINISH";
    class s {
        static registeBase(e, t) {
            zs.fgui.configs.registeBase(e, t)
        }
        static unregisteBase(e) {
            zs.fgui.configs.unregisteBase(e)
        }
        static registeItem(e, t) {
            zs.fgui.configs.registeItem(e, t)
        }
        static unregisteItem(e) {
            zs.fgui.configs.unregisteItem(e)
        }
        static async init(e) {
            zs.proxy.init(),
            zs.Timer.gTimer = new zs.Timer,
            window.requestAnimationFrame(function timerLoop(e) {
                zs.Timer.gTimer._update();
                zs.Timer.inst._update();
                window.requestAnimationFrame(timerLoop)
            }),
            zs.platform.init(),
            zs.platform.sync.addEventShow({
                showHandler: e =>{
                    s.onAppShow(e)
                }
            }),
            zs.platform.sync.addEventHide({
                hideHandler: e =>{
                    s.onAppHide(e)
                }
            }),
            await zs.configs.init().
            catch(e =>e),
            zs.configs.gameCfg.debug && (zs.log.Configs.logLevel = zs.log.Level.DEBUG),
            zs.platform.proxy && "wx_" == zs.platform.config.platformMark && "undefined" != typeof wx && zs.exporter.dataMgr.collectSource(),
            this.tdKey && this.tdKey != zs.td.defaultKey ? zs.td.appKey = this.tdKey: (zs.td.appKey = zs.td.defaultKey, zs.td.appName = zs.configs.gameCfg.appName),
            zs.td.channel = zs.platform.proxy ? zs.platform.config.channel: "TEST",
            zs.configs.gameCfg.tdVersion && (zs.td.versionName = zs.configs.gameCfg.tdVersion),
            zs.td.init(),
            zs.td.justTrack(zs.td.startupDesc, zs.td.startupDesc),
            zs.resource.init(),
            this.onConfigInit && this.onConfigInit.run(),
            zs.product.init(e),
            this._readyStart = !1,
            zs.fgui.init();
            let t = this.entry ? this.entry: zs.base.entry;
            this.loadingPage ? (
                await this.loadingPage.preload().catch(e =>e), 
                this.entryInst = t.init(this.loadingPage, this, this.ready)) : 
                this.nativeLoadingPage ? (
                    await this.nativeLoadingPage.preload().catch(e =>e), 
                    this.entryInst = t.init(this.nativeLoadingPage, this, this.ready)) : 
                    (this.entryInst = null, this.ready())
        }
        static get appName() {
            return zs.configs.gameCfg ? zs.configs.gameCfg.appName: null
        }
        static get appId() {
            return zs.configs.gameCfg ? zs.configs.gameCfg.appId: null
        }
        static get tdKey() {
            return zs.configs.gameCfg ? zs.configs.gameCfg.tdKey: null
        }
        static get readyStart() {
            return this.entryInst ? this.entryInst && this.entryInst.progress >= 100 && this._readyStart: this._readyStart
        }
        static updateProgress() {
            if (this.progress >= 99) {
                zs.Timer.inst.clear(this, this.updateProgress);
            } else if (this.progress >= 90) {
                this.progress += 1;
            } else {
                this.progress += 3;
            }
        }
        static async ready() {
            zs.Timer.inst.loop(500, this, this.updateProgress)
            zs.log.debug("web 设置", "Core");
            this.progress = 10,
            await zs.resource.preload().catch(e =>e),
            // this.progress = 40,
            zs.log.debug("加载 main", "Core");
            await zs.fgui.loadPacks(zs.configs.gameCfg.fguiPacks, !0).
            catch(e =>e);
            if (this.onFGUIBind && this.onFGUIBind.run(), 
            // this.progress = 50, 
            zs.log.debug("初始化数据统计", "Core"), zs.EggKnock && (zs.EggKnock.init(), zs.core.onWorkflow(zs.workflow.PRODUCT_PLAY_END, zs.Handler.create(this, () =>{
                zs.EggKnock.markGameNum(!0)
            }), !0)), 
            // this.progress = 60, 
            zs.log.debug("加载基础配置", "Core"), zs.configs.gameCfg && zs.configs.gameCfg.resources && zs.configs.gameCfg.resources.configs) {
                let e = zs.configs.gameCfg.resources.configs;
                for (let t in e) {
                    let s = e[t];
                    s && (Array.isArray(s) ? s.length > 0 && null != s[0] && s[0].trim().length > 0 && await zs.configs.load(t, s[0], s.length > 1 ? s[1] : null, !(s.length > 2) || s[2]).
                    catch(e =>e) : "string" == typeof s && await zs.configs.load(t, s, null, !0).
                    catch(e =>e))
                }
            }
            // this.progress = 70, 
            if (zs.configs.gameCfg && zs.configs.gameCfg.resources && zs.configs.gameCfg.resources.prefabs) {
                let e = zs.configs.gameCfg.resources.prefabs;
                for (let t in e) {
                    let s = e[t];
                    s && (Array.isArray(s) ? s.length > 0 && null != s[0] && s[0].trim().length > 0 && await zs.prefabs.load(t, s[0], s.length > 1 ? s[1] : null, !(s.length > 2) || s[2]).
                    catch(e =>e) : "string" == typeof s && await zs.prefabs.load(t, s, null, !0).
                    catch(e =>e))
                }
            }
            // this.progress = 80, 
            null == this.workflow && (this.workflow = new zs.workflow), 
            this.workflow.exporterPack && (Array.isArray(this.workflow.exporterPack) ? await zs.fgui.loadPacks(this.workflow.exporterPack).catch(e =>e) : await zs.fgui.loadPack(this.workflow.exporterPack).catch(e =>e)), 
            this.workflow.registe(), this.workflow.registeChildFSM()
            if (this.workListeners) {
                for (let e = 0, t = this.workListeners.length; e < t; e++) {
                    let t = this.workListeners[e];
                    t.handler.once ? t.later ? this.workflow.onceLater(t.key, t.handler, t.isBefore) : this.workflow.once(t.key, t.handler, t.isBefore) : t.later ? this.workflow.onLater(t.key, t.handler, t.isBefore) : this.workflow.on(t.key, t.handler, t.isBefore)
                }
                this.workListeners = null
            }
            // this.progress = 95, 
            this.checkGameCfg(e),
            this.onPrepare ? this.onPrepare.run() : this.readyFinish()
        }
        static readyFinish() {
            zs.Timer.inst.clear(this, this.updateProgress);
            this.checkPanelSort(),
            zs.Timer.inst.frameLoop(1, this, this.step),
            this.progress = 100,
            this._readyStart = !0,
            this.loadingPage || this.nativeLoadingPage || this.start()
        }
        static step() {
            this.checkPanelSort()
        }
        static start() {
            zs.log.debug("启动业务", "Core"),
            this.readyStart && (zs.td.justTrack(zs.td.gameStartDesc, zs.td.gameStartDesc, {
                uid: s.userId
            }), this.workflow.start(), this.onStart && this.onStart.run())
        }
        static onWorkflow(e, t, s, i) {
            null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []), this.workflow ? this.workflow.on(e, t, s, i) : (t.once = !1, this.workListeners.push({
                key: e,
                handler: t,
                priority: i,
                isBefore: s
            })))
        }
        static onWorkflowLater(e, t, s, i) {
            null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []), this.workflow ? this.workflow.onLater(e, t, s, i) : (t.once = !1, this.workListeners.push({
                key: e,
                handler: t,
                priority: i,
                isBefore: s,
                later: !0
            })))
        }
        static onceWorkflow(e, t, s, i) {
            null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []), this.workflow ? this.workflow.once(e, t, s, i) : (t.once = !0, this.workListeners.push({
                key: e,
                handler: t,
                priority: i,
                isBefore: s
            })))
        }
        static onceWorkflowLater(e, t, s, i) {
            null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []), this.workflow ? this.workflow.onceLater(e, t, s, i) : (t.once = !0, this.workListeners.push({
                key: e,
                handler: t,
                priority: i,
                isBefore: s,
                later: !0
            })))
        }
        static onAppShow(e) {
            if (! (null == this.appShowListeners || this.appShowListeners.length <= 0)) for (let t = 0, s = this.appShowListeners.length; t < s; t++) {
                let i = this.appShowListeners[t];
                i && i.runWith(e),
                i && !i.once || (this.appShowListeners.splice(t, 1), t--, s--)
            }
        }
        static onAppHide(e) {
            if (! (null == this.appHideListeners || this.appHideListeners.length <= 0)) for (let t = 0, s = this.appHideListeners.length; t < s; t++) {
                let i = this.appHideListeners[t];
                i && i.runWith(e),
                i && !i.once || (this.appHideListeners.splice(t, 1), t--, s--)
            }
        }
        static addAppShow(e) {
            null != e && (null == this.appShowListeners && (this.appShowListeners = []), this.appShowListeners.push(e))
        }
        static removeAppShow(e) {
            if (null == e || null == this.appShowListeners || this.appShowListeners.length <= 0) return;
            let t = e.caller,
            s = e.method,
            i = e.once;
            for (let e = 0, r = this.appShowListeners.length; e < r; e++) {
                let n = this.appShowListeners[e]; ! n || t && n.caller !== t || null != s && n.method !== s || i && !n.once || (this.appShowListeners.splice(e, 1), e--, r--, n.recover())
            }
        }
        static addAppHide(e) {
            null != e && (null == this.appHideListeners && (this.appHideListeners = []), this.appHideListeners.push(e))
        }
        static removeAppHide(e) {
            if (null == e || null == this.appHideListeners || this.appHideListeners.length <= 0) return;
            let t = e.caller,
            s = e.method,
            i = e.once;
            for (let e = 0, r = this.appHideListeners.length; e < r; e++) {
                let n = this.appHideListeners[e]; ! n || t && n.caller !== t || null != s && n.method !== s || i && !n.once || (this.appHideListeners.splice(e, 1), e--, r--, n.recover())
            }
        }
        static checkPanelSort() {
            zs.proxy.sortScene(this.entryInst)
        }
        static checkGameCfg(e) {
            let t = zs.configs.gameCfg;
            if (!t || !t.skipCheck) return null == t.gameId || t.gameId.trim().length <= 0 ? zs.fgui.msgtext.show("未填写gameId") : null == t.appId || t.appId.trim().length <= 0 ? zs.fgui.msgtext.show("未填写appId") : 1 == s.userId && zs.platform.proxy ? zs.fgui.msgtext.show("用户登录失败") : null == t.version || t.version.trim().length <= 0 ? zs.fgui.msgtext.show("未填写版本号version") : null == e || e.length < 0 ? zs.fgui.msgtext.show("配置数据同步失败") : t.pure && zs.platform.proxy ? zs.fgui.msgtext.show("当前处于纯净模式") : t.debug && zs.platform.proxy ? zs.fgui.msgtext.show("当前处于测试模式") : void 0
        }
    }
    s.userInfo = null,
    s.userId = null,
    s.entry = null,
    s.onConfigInit = null,
    s.onFGUIBind = null,
    s.onPrepare = null,
    s.onStart = null,
    s.overrideWorkflow = null,
    s.workflow = null,
    s.loadingPage = null,
    s.nativeLoadingPage = null,
    e.showMsgBox = function(e) {
        zs.fgui.msgbox.show(e)
    },
    e.hideMsgBox = function(e) {
        e && zs.fgui.msgbox.clear(),
        zs.fgui.msgbox.hide()
    },
    e.workflow = t,
    e.core = s
} (window.zs = window.zs || {});