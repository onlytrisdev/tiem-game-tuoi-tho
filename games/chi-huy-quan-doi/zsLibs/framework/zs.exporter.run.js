window.zs = window.zs || {},
window.zs.exporter = window.zs.exporter || {},
function(t) {
    "use strict";
    let e,
    i = zs.fgui.AlignType; !
    function(t) {
        t[t.None = 0] = "None",
        t[t.Horizontal = 1] = "Horizontal",
        t[t.Vertical = 2] = "Vertical"
    } (e = e || (e = {}));
    class s {
        static get cache() {
            return null == this._cache && (this._cache = {}),
            this._cache
        }
        static get bases() {
            return null == this._bases && (this._bases = {}),
            this._bases
        }
        static isSameDay(t) {
            return new Date(t).toDateString() === (new Date).toDateString()
        }
        static getStorageSync(t) {
            return this.cache[t]
        }
        static setStorageSync(t, e) {
            this.cache[t] = e
        }
        static getCache(t, e) {
            if (e) {
                let i = this.getStorageSync(t + "_time");
                return null == i || Date.now() - Number(i) < e ? this.getStorageSync(t) : null
            }
            return this.getStorageSync(t)
        }
        static setCache(t, e) {
            this.setStorageSync(t, e),
            this.setStorageSync(t + "_time", Date.now())
        }
        static getCacheNewDay(t, e) {
            if (e) {
                let e = this.getStorageSync(t + "_time");
                return null != e && this.isSameDay(e) ? null: this.getStorageSync(t)
            }
            return this.getStorageSync(t)
        }
        static getDistance(t, e, i, s) {
            return Math.sqrt(Math.pow(t - e, 2) + Math.pow(i - s, 2))
        }
        static checkScroll(t, e, i) {
            return this.getDistance(t, zs.proxy.Touch.touchX, e, zs.proxy.Touch.touchY) > i
        }
        static async navigateToMiniProgram(t, e) {
            let i = t ? t.info: null,
            a = null,
            r = null,
            n = t ? t.img_index: null;
            if (i) {
                let s = this.getCacheNewDay("unlinkAd") || {};
                if (s[i.appid]) {
                    zs.log.debug("广告位今日点击过", "Exporter");
                    let t = (await l.load().
                    catch(t =>t)).filter(t =>!s[t.info.appid]);
                    if (t && t.length > 0) {
                        let s = Math.floor(Math.random() * t.length);
                        if (i.imgs) for (let t = 0, s = i.imgs.length; t < s; t++) if (i.imgs[t].icon == e) {
                            let e = i.imgs[t];
                            a = e.group_id,
                            r = e.img_id;
                            break
                        }
                        i = t[s].info,
                        zs.log.debug("新的导出", "Exporter", i)
                    } else i = null
                }
                i || (i = t.info, this.setCache("unlinkAd", {}))
            }
            return new zs.Coop((t, o) =>{
                if (i) {
                    i.img_index = n,
                    s.navigateCount++,
                    s.readyExport = {
                        target: i,
                        icon: e,
                        group: a,
                        img: r
                    };
                    let h = zs.utils.getEventCode("export-" + s.navigateCount + "-" + i.app_id);
                    s.behaviorExport = {
                        event_id: h,
                        app_id: i.app_id
                    },
                    i.extraData = {
                        event_id: h
                    },
                    zs.td.justTrack("导出跳转", "导出跳转"),
                    zs.platform.async.navigateToOther({
                        appInfo: i
                    }).then(() =>{
                        let n = s.getCacheNewDay("unlinkAd") || {};
                        n[i.appid] = !0,
                        s.setCache("unlinkAd", n),
                        s.readyExport && (l.collectExport(i, e, a, r), s.readyExport = null),
                        t(null)
                    }).
                    catch(() =>{
                        s.behaviorExport = null,
                        s.readyExport = null,
                        s.navigateErrorHandler && s.navigateErrorHandler.run(),
                        o(null)
                    })
                } else zs.log.warn("跳转信息丢失，无法完成跳转！", "Exporter"),
                o(null)
            })
        }
        static addBase(t, e) {
            this.bases[t] = e
        }
        static removeBase(t) {
            this.bases[t] && delete this.bases[t]
        }
    }
    s.navigateErrorHandler = null,
    s.navigateCount = 0,
    s.readyExport = null,
    s.record = [];
    class l {
        static get cache() {
            return null == this._cache && (this._cache = {}),
            this._cache
        }
        static setCache(t, e, i) {
            this.cache[t] = {
                data: e,
                timestamp: Date.now(),
                expire: i || this.expireTime
            }
        }
        static getCache(t) {
            let e = this.cache[t];
            return null != e && Date.now() - e.timestamp < e.expire ? e.data: null
        }
        static getUUID() {
            let t = zs.utils.getItem("ads_uuid");
            if (!t || t.trim().length <= 0) {
                let e = "";
                for (let t = 0; t < 8; t++) e += zs.utils.randByte();
                zs.utils.setItem("ads_uuid", e),
                t = e
            }
            return t
        }
        static collectSource() {
            zs.configs.gameCfg.newAds ? this.collectSourceNew() : this.collectSourceOld()
        }
        static collectSourceNew() {
            let t = l.NEWURL + "/" + zs.network.version + "/ad/source",
            e = zs.platform.sync.getLaunchOptions();
            if (!e || !e.referrerInfo || !e.referrerInfo.appId) return;
            let i = {
                from_app_id: e.referrerInfo.appId,
                to_app_id: zs.core.appId,
                scene: zs.platform.sync.getScene(),
                gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                open_id: this.getUUID(),
                zhise: e && e.query && e.query.zhise ? e.query.zhise: "",
                event_id: e.referrerInfo.extraData && e.referrerInfo.extraData.event_id ? e.referrerInfo.extraData.event_id: ""
            };
            zs.td.justTrack("来路统计", "来路统计"),
            zs.network.nativeRequest(t, i, "POST", !1, !1, !0).then(t =>{
                console.log("collect source success!", t)
            }).
            catch(t =>{
                zs.td.justTrack("来路统计失败", "来路统计失败"),
                console.log("collect source failed!", t)
            }),
            zs.network.log("来路:" + JSON.stringify(i))
        }
        static collectSourceOld() {
            let t = l.URL + "/api/app_jump/in",
            e = zs.platform.sync.getLaunchOptions(),
            i = "";
            e && e.referrerInfo && e.referrerInfo.extraData && e.referrerInfo.extraData.event_id && (i = e.referrerInfo.extraData.event_id);
            let s = {
                ak: zs.core.appId,
                uu: this.getUUID(),
                wsr: e,
                rq_c: 0,
                eid: i
            };
            zs.td.justTrack("来路统计", "来路统计"),
            zs.network.nativeRequest(t, s, "POST", !1, !1, !0).then(t =>{
                console.log("collect source success!", t)
            }).
            catch(t =>{
                zs.td.justTrack("来路统计失败", "来路统计失败"),
                console.log("collect source failed!", t)
            }),
            zs.network.log("来路:" + JSON.stringify(s))
        }
        static collectExport(t, e, i, s) {
            zs.configs.gameCfg.newAds ? this.collectExportNew(t, e, i, s) : this.collectExportOld(t)
        }
        static collectExportNew(t, e, i, s) {
            if ("wx_" != zs.platform.config.platformMark || "undefined" == typeof wx) return;
            let a = l.NEWURL + "/" + zs.network.version + "/ad/jump",
            r = null;
            if (null != i && null != s)(r = {}).group_id = i,
            r.img_id = s;
            else if (e) for (let i = 0, s = t.imgs.length; i < s; i++) if (t.imgs[i].icon == e) {
                r = t.imgs[i];
                break
            }
            let n = {
                user_id: zs.core.userId,
                from_app_id: zs.core.appId,
                to_app_id: t.app_id,
                position: t.position_type,
                group_id: null != r ? r.group_id: 0,
                img_id: null != r ? r.img_id: 0,
                event_id: zs.utils.getEventCode("export-" + zs.exporter.utils.navigateCount + "-" + t.app_id),
                record: ""
            };
            zs.td.justTrack("跳转统计", "跳转统计"),
            zs.network.nativeRequest(a, n, "POST", !1).then(t =>{
                t && t.status && 1 == t.status || zs.td.justTrack("跳转统计失败", "跳转统计失败"),
                console.log("collect export success!", t)
            }).
            catch(t =>{
                zs.td.justTrack("跳转统计失败", "跳转统计失败"),
                console.log("collect export failed!", t)
            }),
            zs.network.log("跳转:" + JSON.stringify(n))
        }
        static collectExportOld(t) {
            if ("wx_" != zs.platform.config.platformMark || "undefined" == typeof wx) return;
            let e = l.URL + "/api/appad_new/collect",
            i = Math.round((new Date).getTime() / 1e3).toString(),
            s = zs.platform.sync.getLaunchOptions(),
            a = {
                user_id: zs.core.userId,
                from_id: zs.core.appId,
                to_id: t.app_id,
                timestamp: i,
                scene: zs.product.scene,
                zhise: s && s.query && s.query.zhise ? s.query.zhise: "",
                event_id: zs.utils.getEventCode("export-" + zs.exporter.utils.navigateCount + "-" + t.app_id)
            };
            zs.td.justTrack("跳转统计", "跳转统计"),
            zs.network.nativeRequest(e, a, "POST", !0, !1, !0).then(t =>{
                t && t.status && 1 == t.status || zs.td.justTrack("跳转统计失败", "跳转统计失败"),
                console.log("collect export success!", t)
            }).
            catch(t =>{
                zs.td.justTrack("跳转统计失败", "跳转统计失败"),
                console.log("collect export failed!", t)
            })
        }
        static loadNew() {
            let t = l.NEWURL + "/" + zs.network.version + "/ad/list",
            e = {
                appid: zs.configs.gameCfg.appId
            };
            return new zs.Coop((i, s) =>{
                let a = l.getCache(l.exportCacheNew);
                return a ? i(a) : l.cacheSetting ? (null == l.requestList && (l.requestList = []), void l.requestList.push(t =>{
                    i(t)
                })) : (l.cacheSetting = !0, zs.td.justTrack("拉取广告数据", "拉取广告数据"), void zs.network.nativeRequest(t, e, "POST", !0, !1).then(t =>{
                    let e = [];
                    for (let i in t) {
                        let s = t[i];
                        if (null != s && Array.isArray(s) && !(s.length <= 0)) for (let t = 0, i = s.length; t < i; t++) {
                            let i = {},
                            l = s[t];
                            l.position_type = l.position,
                            l.app_title = l.name,
                            l.appid = l.app_id,
                            i.info = l,
                            i.info.imgs && i.info.imgs.length > 0 && (i.img_index = zs.utils.randInt(0, i.info.imgs.length), i.getIcon = (t =>(t = t || 0, i.info.imgs[t % i.info.imgs.length].icon))),
                            e.push(i)
                        }
                    }
                    if (l.setCache(l.exportCacheNew, e), zs.log.debug("load success: ", "Exporter", e), l.requestList && l.requestList.length > 0) for (let t = 0, i = l.requestList.length; t < i; t++) l.requestList[t].call(this, e);
                    l.requestList = null,
                    l.cacheSetting = !1,
                    null == e || e.length <= 0 ? zs.td.justTrack("拉取广告数据失败", "拉取广告数据失败") : zs.td.justTrack("拉取广告数据成功", "拉取广告数据成功"),
                    i(e)
                }).
                catch(t =>{
                    let e = [];
                    if (l.requestList && l.requestList.length > 0) for (let t = 0, i = l.requestList.length; t < i; t++) l.requestList[t].call(this, e);
                    l.requestList = null,
                    l.cacheSetting = !1,
                    zs.td.justTrack("拉取广告数据失败", "拉取广告数据失败"),
                    i(e)
                }))
            })
        }
        static loadOld() {
            let t = l.URL + "/api/appad_new/index",
            e = Math.round((new Date).getTime() / 1e3).toString(),
            i = {
                appid: zs.configs.gameCfg.appId,
                timestamp: e
            };
            return new zs.Coop((e, s) =>{
                let a = l.getCache(l.exportCache);
                return a ? e(a) : l.cacheSetting ? (null == l.requestList && (l.requestList = []), void l.requestList.push(t =>{
                    e(t)
                })) : (l.cacheSetting = !0, zs.td.justTrack("拉取广告数据", "拉取广告数据"), void zs.network.nativeRequest(t, i, "POST", !0, !1, !0).then(t =>{
                    let i = [];
                    for (let e in t) {
                        let s = t[e];
                        if (null != s && Array.isArray(s)) for (let t = 0, e = s.length; t < e; t++) {
                            let e = {},
                            l = s[t];
                            e.info = l;
                            let a = !1;
                            for (let t = 0, e = i.length; t < e; t++) {
                                let e = i[t];
                                if (e.info.appid == l.appid) {
                                    e.info.imgs || (e.info.imgs = [], e.info.imgs.push(e.info.app_icon)),
                                    e.info.imgs.push(l.app_icon),
                                    e.img_index = zs.utils.randInt(0, e.info.imgs.length),
                                    a = !0;
                                    break
                                }
                            }
                            a || (e.getIcon = (t =>e.info.imgs ? (t = t || 0, e.info.imgs[t % e.info.imgs.length]) : e.info.app_icon), i.push(e))
                        }
                    }
                    if (l.setCache(l.exportCache, i), zs.log.debug("load success: ", "Exporter", i), l.requestList && l.requestList.length > 0) for (let t = 0, e = l.requestList.length; t < e; t++) l.requestList[t].call(this, i);
                    l.requestList = null,
                    l.cacheSetting = !1,
                    (null == i || i.length <= 0) && zs.td.justTrack("拉取广告数据失败", "拉取广告数据失败"),
                    e(i)
                }).
                catch(t =>{
                    let i = [];
                    if (l.requestList && l.requestList.length > 0) for (let t = 0, e = l.requestList.length; t < e; t++) l.requestList[t].call(this, i);
                    l.requestList = null,
                    l.cacheSetting = !1,
                    zs.td.justTrack("拉取广告数据失败", "拉取广告数据失败"),
                    e(i)
                }))
            })
        }
        static load() {
            return zs.configs.gameCfg.newAds ? this.loadNew() : this.loadOld()
        }
    }
    l.URL = "",
    l.NEWURL = "",
    l.expireTime = 6e5,
    l.exportCache = "ExpCache",
    l.exportCacheNew = "ExpCacheNew";
    class a extends zs.fgui.base {
        constructor(t) {
            super(t),
            this._cellWidth = 0,
            this._cellHeight = 0,
            this._effectWidth = 0,
            this._effectHeight = 0,
            this._itemType = null,
            this._datas = [],
            this._maxItems = 0,
            this._adaptScale = !1,
            this._keepRatio = e.None,
            this._autoScrollSpeed = 0,
            this._autoScrollForward = !0,
            this._isAutoScrolling = !1,
            this._dragRecoverTime = 0,
            this._dragStopCount = 0,
            this._readyDrag = !1,
            this._clickHandler = null,
            this._transition = null,
            this._bScrollExport = !1,
            t && t instanceof zs.ui.FGUI_list && (t.list.itemProvider = zs.proxy.Event.FGUIEvent(this, this.onItemProvider), t.list.itemRenderer = zs.proxy.Event.FGUIEvent(this, this.onItemRenderer), zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.FGUI_CLICK_ITEM, this, this.onClickItem), zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.MOUSE_DOWN, this, this.onDragStateBegin), zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.MOUSE_MOVE, this, this.onDragStateChanged))
        }
        static make() {
            return zs.ui.FGUI_list.createInstance()
        }
        static type() {
            return zs.ui.FGUI_list
        }
        dispose() {
            super.dispose(),
            this.startOffsetDelayHandler && clearTimeout(this.startOffsetDelayHandler),
            zs.Tween.clearAll(this.view),
            this.shakeTime > 0 && this.stopShake()
        }
        check(t) {
            return t instanceof zs.ui.FGUI_list
        }
        setHorizontalList(t, s, a, r) {
            return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowVertical).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Vertical).setScrollType(fairygui.ScrollType.Horizontal).setColumnGap(25).setGridHeight(s).snapWidth().setAutoScrollSpeed(50).setDragRecoverTime(3).loop().setScrollExport().setMaxItems(a),
            l.load().then(t =>{
                this.disposed || this.setDatas(t).apply()
            }).
            catch(t =>t),
            r ? this.apply() : this
        }
        setVerticalList(t, s, a, r) {
            return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Horizontal).setScrollType(fairygui.ScrollType.Vertical).setLineGap(25).setGridWidth(s).snapHeight().setAutoScrollSpeed(50).setDragRecoverTime(3).loop().setMaxItems(a),
            l.load().then(t =>{
                this.disposed || this.setDatas(t).apply()
            }).
            catch(t =>t),
            r ? this.apply() : this
        }
        setSideList(t, s, a, r) {
            return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Horizontal).setCellWidth(.7 * s).setScrollType(fairygui.ScrollType.Vertical).setLineGap(25).setGridWidth(s).setListFit(!0).bounce(!1).setMaxItems(a),
            l.load().then(t =>{
                this.disposed || (t && t.sort((t, e) =>t < e ? -1 : 1), this.setDatas(t).apply())
            }).
            catch(t =>t),
            r ? this.apply() : this
        }
        setHorizontalGrid(t, s, a, r, n, o) {
            return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Horizontal).setCellWidth((s - 30 * r) / r).setScrollType(fairygui.ScrollType.Both).setLineGap(30).setLineCount(r).setColumnGap(30).setGridSize(s, a).bounce(!1).setMaxItems(n),
            l.load().then(t =>{
                this.disposed || this.setDatas(t).apply()
            }).
            catch(t =>t),
            o ? this.apply() : this
        }
        setVerticalGrid(t, s, a, r, n, o) {
            return this.setItem(t).setLayout(fairygui.ListLayoutType.FlowHorizontal).setAlign(i.Center).setAdaptScale(!0).setKeepRatio(e.Vertical).setCellHeight((a - 30 * r) / r).setScrollType(fairygui.ScrollType.Both).setLineGap(30).setLineCount(r).setColumnGap(30).setGridSize(s, a).bounce(!1).setMaxItems(n),
            l.load().then(t =>{
                this.disposed || this.setDatas(t).apply()
            }).
            catch(t =>t),
            o ? this.apply() : this
        }
        get adaptScale() {
            return this._adaptScale
        }
        setAdaptScale(t) {
            return this._adaptScale = t,
            this
        }
        get listFit() {
            return this._listFit
        }
        setListFit(t) {
            return this._listFit = t,
            this
        }
        get keepRatio() {
            return this._keepRatio
        }
        setKeepRatio(t) {
            return this._keepRatio = t,
            this
        }
        get align() {
            let t = this.view,
            e = i.Center;
            if (t && t.list) {
                let s = t.list.align,
                l = t.list.verticalAlign;
                switch (s) {
                case a.AlignMiddle:
                    switch (l) {
                    case a.AlignBottom:
                        e = i.Bottom;
                        break;
                    case a.AlignCenter:
                        e = i.Center;
                        break;
                    default:
                        e = i.Top
                    }
                    break;
                case a.AlignRight:
                    switch (l) {
                    case a.AlignBottom:
                        e = i.BottomRight;
                        break;
                    case a.AlignCenter:
                        e = i.Right;
                        break;
                    default:
                        e = i.TopRight
                    }
                    break;
                default:
                    switch (l) {
                    case a.AlignBottom:
                        e = i.BottomLeft;
                        break;
                    case a.AlignCenter:
                        e = i.Left;
                        break;
                    default:
                        e = i.TopLeft
                    }
                }
            }
            return e
        }
        setAlign(t) {
            let e = this.view;
            if (e && e.list) switch (t) {
            case i.Center:
                e.list.align = a.AlignCenter,
                e.list.verticalAlign = a.AlignMiddle;
                break;
            case i.Top:
                e.list.align = a.AlignCenter,
                e.list.verticalAlign = a.AlignTop;
                break;
            case i.Bottom:
                e.list.align = a.AlignCenter,
                e.list.verticalAlign = a.AlignBottom;
                break;
            case i.Left:
                e.list.align = a.AlignLeft,
                e.list.verticalAlign = a.AlignMiddle;
                break;
            case i.Right:
                e.list.align = a.AlignRight,
                e.list.verticalAlign = a.AlignMiddle;
                break;
            case i.TopLeft:
                e.list.align = a.AlignLeft,
                e.list.verticalAlign = a.AlignTop;
                break;
            case i.BottomLeft:
                e.list.align = a.AlignLeft,
                e.list.verticalAlign = a.AlignBottom;
                break;
            case i.TopRight:
                e.list.align = a.AlignRight,
                e.list.verticalAlign = a.AlignTop;
                break;
            case i.BottomRight:
                e.list.align = a.AlignRight,
                e.list.verticalAlign = a.AlignBottom
            }
            return this
        }
        get lineCount() {
            let t = this.view;
            return t && t.list ? t.list.lineCount: 0
        }
        setLineCount(t) {
            let e = this.view;
            return e && e.list && (e.list.lineCount = t),
            this
        }
        get lineGap() {
            let t = this.view;
            return t && t.list ? t.list.lineGap: 0
        }
        setLineGap(t) {
            let e = this.view;
            return e && e.list && (e.list.lineGap = t),
            this
        }
        get columnCount() {
            let t = this.view;
            return t && t.list ? t.list.columnCount: 0
        }
        setColumnCount(t) {
            let e = this.view;
            return e && e.list && (e.list.columnCount = t),
            this
        }
        get columnGap() {
            let t = this.view;
            return t && t.list ? t.list.columnGap: 0
        }
        setColumnGap(t) {
            let e = this.view;
            return e && e.list && (e.list.columnGap = t),
            this
        }
        get layout() {
            let t = this.view;
            return t ? t.list.layout: fairygui.ListLayoutType.FlowHorizontal
        }
        setLayout(t) {
            let e = this.view;
            return e && e.list && (e.list.layout = t),
            this
        }
        get cellWidth() {
            return this._cellWidth
        }
        setCellWidth(t) {
            return this._cellWidth = t,
            this
        }
        get cellHeight() {
            return this._cellHeight
        }
        setCellHeight(t) {
            return this._cellHeight = t,
            this
        }
        setCellSize(t, e) {
            return this._cellWidth = t,
            this._cellHeight = e,
            this
        }
        get x() {
            return this.view ? this.view.x: 0
        }
        setX(t) {
            return this.view && (this.view.x = t),
            this
        }
        get y() {
            return this.view ? this.view.y: 0
        }
        setY(t) {
            return this.view && (this.view.y = t),
            this
        }
        setXY(t, e) {
            return this.view && (this.view.x = t, this.view.y = e),
            this
        }
        get scaleX() {
            return this.view ? this.view.scaleX: 1
        }
        setScaleX(t) {
            return this.view && (this.view.scaleX = t),
            this
        }
        get scaleY() {
            return this.view ? this.view.scaleY: 1
        }
        setScaleY(t) {
            return this.view && (this.view.scaleY = t),
            this
        }
        setScaleXY(t, e) {
            return this.view && (this.view.scaleX = t, this.view.scaleY = e),
            this
        }
        get gridWidth() {
            return this.view ? this.view.width: 0
        }
        setGridWidth(t) {
            return this.view && (this.view.width = t),
            this
        }
        snapWidth() {
            return this.view && (this.view.width = fairygui.GRoot.inst.width * (1 / this.view.scaleX)),
            this
        }
        get gridHeight() {
            return this.view ? this.view.height: 0
        }
        setGridHeight(t) {
            return this.view && (this.view.height = t),
            this
        }
        snapHeight() {
            return this.view && (this.view.height = fairygui.GRoot.inst.height * (1 / this.view.scaleY)),
            this
        }
        setGridSize(t, e) {
            return this.view && (this.view.width = t, this.view.height = e),
            this
        }
        get marginLeft() {
            return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.list.margin.left: 0
        }
        setMarginLeft(t) {
            let e = this.view;
            return e && e.list && (e.list.margin.left = t),
            this
        }
        get marginRight() {
            return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.list.margin.right: 0
        }
        setMarginRight(t) {
            let e = this.view;
            return e && e.list && (e.list.margin.right = t),
            this
        }
        get marginTop() {
            return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.list.margin.top: 0
        }
        setMarginTop(t) {
            let e = this.view;
            return e && e.list && (e.list.margin.top = t),
            this
        }
        get marginBottom() {
            return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.list.margin.bottom: 0
        }
        setMarginBottom(t) {
            let e = this.view;
            return e && e.list && (e.list.margin.bottom = t),
            this
        }
        get margin() {
            return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.list.margin: null
        }
        setMargin(t, e, i, s) {
            let l = this.view;
            return l && l.list && (l.list.margin.left = t, l.list.margin.right = e, l.list.margin.top = i, l.list.margin.bottom = s),
            this
        }
        get background() {
            return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.background.url: null
        }
        setBackground(t) {
            let e = this.view;
            return e && e.background && (Array.isArray(t) && t.length > 1 ? zs.fgui.loadPack(t[0]).then(i =>{
                e.background.url = zs.ui.readURL(i, t[1])
            }).
            catch(t =>t) : e.background.url = t),
            this
        }
        get backgroundAlpha() {
            return this.view && this.view instanceof zs.ui.FGUI_list ? this.view.background.alpha: 0
        }
        setBackgroundAlpha(t) {
            return this.view && this.view.background && (this.view.background.alpha = t),
            this
        }
        get item() {
            return this._itemType
        }
        setItem(t) {
            this._itemType = t;
            let e = this.view;
            return e && e.list && (e.list.defaultItem = this._itemType.URL),
            this
        }
        get datas() {
            return this._datas
        }
        setDatas(t) {
            return this._datas = zs.utils.arrayDeepCopy(t),
            this._datas.sort((t, e) =>Math.random() > .5 ? -1 : 1),
            this
        }
        get maxItems() {
            return this._maxItems
        }
        setMaxItems(t) {
            return this._maxItems = t,
            this
        }
        get scrollType() {
            let t = this.view;
            return t && t.list ? t.list.scrollPane._scrollType: fairygui.ScrollType.Both
        }
        setScrollType(t) {
            let e = this.view;
            return e && e.list && (e.list.scrollPane._scrollType = t),
            this
        }
        get autoScrollSpeed() {
            return this._autoScrollSpeed
        }
        setAutoScrollSpeed(t) {
            return this._autoScrollSpeed = t,
            this
        }
        get dragRecoverTime() {
            return this._dragRecoverTime
        }
        setDragRecoverTime(t) {
            return this._dragRecoverTime = t,
            this
        }
        get transition() {
            return this._transition
        }
        setTransition(t) {
            return this._transition = t,
            this
        }
        get startOffsetX() {
            return this._startoffsetx
        }
        setStartOffsetX(t) {
            return this._startoffsetx = t,
            this
        }
        get startOffsetY() {
            return this._startoffsety
        }
        setStartOffsetY(t) {
            return this._startoffsety = t,
            this
        }
        get startOffsetTime() {
            return this._startoffsettime
        }
        setStartOffsetTime(t) {
            this._startoffsettime = t
        }
        get startOffsetDelay() {
            return this._startoffsetdelay
        }
        setStartOffsetDelay(t) {
            this._startoffsetdelay = t
        }
        get startFadeDelay() {
            return this._startfadedelay
        }
        setStartFadeDelay(t) {
            this._startfadedelay = t
        }
        get startFadeTime() {
            return this._startfadetime
        }
        setStartFadeTime(t) {
            this._startfadetime = t
        }
        setDataHandler(t) {
            return t && (t.once = !1, this._itemRendererHandler = t),
            this
        }
        setClickHandler(t) {
            return this._clickHandler = t,
            this
        }
        setScrollExport() {
            return this._bScrollExport = !0,
            this
        }
        fit() {
            let t = this.view;
            if (t && t.list) {
                t.list.resizeToFit();
                let e = t.list.width,
                i = t.list.height;
                t.width = e,
                t.height = i,
                t.list.width = e,
                t.list.height = i
            }
            return this
        }
        loop() {
            let t = this.view;
            return t && t.list && this._itemType && (t.list.layout == fairygui.ListLayoutType.FlowHorizontal ? t.list.layout = fairygui.ListLayoutType.SingleColumn: t.list.layout == fairygui.ListLayoutType.FlowVertical && (t.list.layout = fairygui.ListLayoutType.SingleRow), t.list.setVirtualAndLoop()),
            this._itemType || zs.log.warn("请先使用SetItem设置列表组件，再执行loop", "Exporter"),
            this
        }
        virtual() {
            let t = this.view;
            return t && t.list && this._itemType && t.list.setVirtual(),
            this._itemType || zs.log.warn("请先使用SetItem设置列表组件，再执行virtual", "Exporter"),
            this
        }
        bounce(t) {
            let e = this.view;
            return e && e.list && (e.list.scrollPane.bouncebackEffect = t),
            this
        }
        setShakeTime(t) {
            return this.shakeTime = t,
            this
        }
        apply() {
            let t = this.view;
            if (t && t.list && !this.disposed) {
                t.list.handleSizeChanged();
                let e = this.margin;
                this._effectWidth = this.gridWidth - e.left - e.right,
                this._effectHeight = this.gridHeight - e.top - e.bottom,
                this._effectWidth <= 0 || this._effectHeight <= 0 ? t.list.numItems = 0 : this.maxItems > 0 ? t.list.numItems = this._datas ? Math.min(this._datas.length, this._maxItems) : 0 : t.list.numItems = this._datas ? this._datas.length: 0,
                this._listFit && t.list.resizeToFit(t.list.numItems),
                0 != this._autoScrollSpeed && (zs.Timer.inst.clear(this, this.onAutoScroll), zs.Timer.inst.frameLoop(1, this, this.onAutoScroll), this._isAutoScrolling = !0),
                this._bScrollExport && (zs.proxy.Event.FGUIOff(t.list, zs.proxy.Event.FGUI_DRAG_START, this, this.scrollStart), zs.proxy.Event.FGUIOff(t.list, zs.proxy.Event.FGUI_DRAG_END, this, this.scrollJumpExport), zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.FGUI_DRAG_START, this, this.scrollStart), zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.FGUI_DRAG_END, this, this.scrollJumpExport)),
                this.shakeTime && this.shakeTime > 0 && zs.Timer.inst.once(this.shakeTime, this, this.refreshItem)
            }
            return null == this._startoffsetx && null == this._startoffsety || null != this.startOffsetDelayHandler || (this.startOffsetDelayHandler = setTimeout(() =>{
                let t = this.view.x + (this._startoffsetx || 0),
                e = this.view.y + (this._startoffsety || 0);
                zs.Tween.to(this.view, {
                    x: t,
                    y: e
                },
                this._startoffsettime || 500, null, null, this._startoffsetdelay || 0)
            },
            1)),
            null == this._startfadedelay && null == this._startfadetime || (this.view.alpha = 0, zs.Tween.to(this.view, {
                alpha: 1
            },
            this._startfadetime || 500, null, null, this._startfadedelay || 0), this._startfadedelay = null, this._startfadetime = null),
            this
        }
        applyConfig(t) {
            if (t) {
                null != t.scalex && this.setScaleX(t.scalex),
                null != t.scale_x && this.setScaleX(t.scale_x),
                null != t.scaley && this.setScaleY(t.scaley),
                null != t.scale_y && this.setScaleY(t.scale_y);
                let e = zs.fgui.configs.items[t.item];
                if (t.mode && null != e) switch (t.mode) {
                case "hlist":
                    null != t.height && this.setHorizontalList(e, t.height, t.max || 0, !1);
                    break;
                case "vlist":
                    null != t.width && this.setVerticalList(e, t.width, t.max || 0, !1);
                    break;
                case "hgrid":
                    null == t.width || null == t.height || null == t.linelimit && null == t.line_limit || this.setHorizontalGrid(e, t.width, t.height, null != t.line_limit ? t.line_limit: t.linelimit, t.max || 0, !1);
                    break;
                case "vgrid":
                    null == t.width || null == t.height || null == t.columnlimit && null == t.column_limit || this.setVerticalGrid(e, t.width, t.height, null != t.column_limit ? t.column_limit: t.columnlimit, t.max || 0, !1);
                    break;
                case "side":
                    null != t.width && this.setSideList(e, t.width, t.max || 0, !1)
                }
                null != t.adaptscale && this.setAdaptScale(t.adaptscale),
                null != t.adapt_scale && this.setAdaptScale(t.adapt_scale),
                null != t.listfit && this.setListFit(t.listfit),
                null != t.list_fit && this.setListFit(t.list_fit);
                let i = t.keep_ratio || t.keepratio;
                if (i) switch (i) {
                case "horizontal":
                    this.setKeepRatio(zs.AdaptType.Horizontal);
                    break;
                case "vertical":
                    this.setKeepRatio(zs.AdaptType.Vertical);
                    break;
                default:
                    this.setKeepRatio(zs.AdaptType.None)
                }
                if (t.align) switch (t.align) {
                case "center":
                    this.setAlign(zs.AlignType.Center);
                    break;
                case "top":
                    this.setAlign(zs.AlignType.Top);
                    break;
                case "bottom":
                    this.setAlign(zs.AlignType.Bottom);
                    break;
                case "left":
                    this.setAlign(zs.AlignType.Left);
                    break;
                case "right":
                    this.setAlign(zs.AlignType.Right);
                    break;
                case "topleft":
                    this.setAlign(zs.AlignType.TopLeft);
                    break;
                case "bottomleft":
                    this.setAlign(zs.AlignType.BottomLeft);
                    break;
                case "topright":
                    this.setAlign(zs.AlignType.TopRight);
                    break;
                case "bottomright":
                    this.setAlign(zs.AlignType.BottomRight)
                }
                if (null != t.linecount && this.setLineCount(t.linecount), null != t.line_count && this.setLineCount(t.line_count), null != t.linegap && this.setLineGap(t.linegap), null != t.line_gap && this.setLineGap(t.line_gap), null != t.columncount && this.setColumnCount(t.columncount), null != t.column_count && this.setColumnCount(t.column_count), null != t.columngap && this.setColumnGap(t.columngap), null != t.column_gap && this.setColumnGap(t.column_gap), t.layout) switch (t.layout) {
                case "singlecolumn":
                case "single_column":
                case "column":
                    this.setLayout(fairygui.ListLayoutType.SingleColumn);
                    break;
                case "singlerow":
                case "single_row":
                case "row":
                    this.setLayout(fairygui.ListLayoutType.SingleRow);
                    break;
                case "flowhorizontal":
                case "flow_horizontal":
                case "horizontal":
                    this.setLayout(fairygui.ListLayoutType.FlowHorizontal);
                    break;
                case "flowvertical":
                case "flow_vertical":
                case "vertical":
                    this.setLayout(fairygui.ListLayoutType.FlowVertical);
                    break;
                case "pagination":
                case "page":
                    this.setLayout(fairygui.ListLayoutType.Pagniation)
                }
                null != t.cellwidth && this.setCellWidth(t.cellwidth),
                null != t.cell_width && this.setCellWidth(t.cell_width),
                null != t.cellheight && this.setCellHeight(t.cellheight),
                null != t.cell_height && this.setCellHeight(t.cell_height),
                null != t.x && this.setX(x),
                null != t.y && this.setY(y),
                null != t.gridwidth && this.setGridWidth(t.gridWidth),
                null != t.grid_width && this.setGridWidth(t.grid_width),
                null != t.gridheight && this.setGridHeight(t.gridHeight),
                null != t.grid_height && this.setGridHeight(t.grid_height),
                (t.snap_width || t.snapwidth) && this.snapWidth(),
                (t.snap_height || t.snapheight) && this.snapheight(),
                null != t.marginleft && this.setMarginLeft(t.marginleft),
                null != t.margin_left && this.setMarginLeft(t.margin_left),
                null != t.marginright && this.setMarginRight(t.marginright),
                null != t.margin_right && this.setMarginRight(t.margin_right),
                null != t.margintop && this.setMarginTop(t.margintop),
                null != t.margin_top && this.setMarginTop(t.margin_top),
                null != t.marginbottom && this.setMarginBottom(t.marginbottom),
                null != t.margin_bottom && this.setMarginBottom(t.margin_bottom),
                t.background && this.setBackground(t.background),
                null != t.backgroundalpha && this.setBackgroundAlpha(t.backgroundalpha),
                null != t.background_alpha && this.setBackgroundAlpha(t.background_alpha),
                e && this.setItem(e),
                t.max && this.setMaxItems(t.max);
                let s = t.scroll_type || t.scrolltype;
                if (s) switch (s) {
                case "horizontal":
                    this.setScrollType(fairygui.ScrollType.Horizontal);
                    break;
                case "vertical":
                    this.setScrollType(fairygui.ScrollType.Vertical);
                    break;
                case "both":
                    this.setScrollType(fairygui.ScrollType.Both)
                }
                null != t.autoscrollspeed && this.setAutoScrollSpeed(t.autoscrollspeed),
                null != t.auto_scroll_speed && this.setAutoScrollSpeed(t.auto_scroll_speed),
                null != t.dragrecovertime && this.setDragRecoverTime(t.dragrecovertime),
                null != t.drag_recover_time && this.setDragRecoverTime(t.drag_recover_time),
                t.transition && this.setTransition(t.transition),
                t.fit && this.fit(),
                t.loop && this.loop(),
                t.virtual && this.virtual(),
                null != t.bounce && this.bounce(t.bounce),
                null != t.shaketime && this.setShakeTime(t.shaketime),
                null != t.shake_time && this.setShakeTime(t.shake_time),
                null != t.startoffsetx && this.setStartOffsetX(t.startoffsetx),
                null != t.start_offset_x && this.setStartOffsetX(t.start_offset_x),
                null != t.startoffsety && this.setStartOffsetY(t.startoffsety),
                null != t.start_offset_y && this.setStartOffsetY(t.start_offset_y),
                null != t.startoffsettime && this.setStartOffsetTime(t.startoffsettime),
                null != t.start_offset_time && this.setStartOffsetTime(t.start_offset_time),
                null != t.startoffsetdelay && this.setStartOffsetDelay(t.startoffsetdelay),
                null != t.start_offset_delay && this.setStartOffsetDelay(t.start_offset_delay),
                null != t.startfadedelay && this.setStartFadeDelay(t.startfadedelay),
                null != t.start_fade_delay && this.setStartFadeDelay(t.start_fade_delay),
                null != t.startfadetime && this.setStartFadeTime(t.startfadetime),
                null != t.start_fade_time && this.setStartFadeTime(t.start_fade_time)
            }
            return this.apply()
        }
        startShake() {
            for (let t = 0; t < this.view.list.numChildren; t++) {
                let e = this.view.list.getChildAt(t);
                this.shakeNode(e)
            }
            zs.Timer.inst.once(this.shakeTime, this, () =>{
                this.refreshItem()
            })
        }
        stopShake() {
            for (let t = 0; t < this.view.list.numChildren; t++) {
                let e = this.view.list.getChildAt(t);
                zs.Tween.clearAll(e)
            }
        }
        refreshItem() {
            this._datas.sort((t, e) =>Math.random() > .5 ? -1 : 1),
            this.maxItems > 0 ? this.view.list.numItems = this._datas ? Math.min(this._datas.length, this._maxItems) : 0 : this.view.list.numItems = this._datas ? this._datas.length: 0,
            this.view.list._virtual && this.view.list.refreshVirtualList(),
            this.startShake()
        }
        shakeNode(t, e = 0) {
            switch (++e) {
            case 0:
                t.rotation = 0,
                zs.Tween.to(t, {
                    rotation: 5
                },
                50, null, zs.Handler.create(this, this.shakeNode, [t, e]));
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                zs.Tween.to(t, {
                    rotation: 10 * (e % 2 == 0 ? 1 : -1)
                },
                100, null, zs.Handler.create(this, this.shakeNode, [t, e]));
                break;
            case 6:
                zs.Tween.to(t, {
                    rotation: 0
                },
                50)
            }
        }
        onDragStateBegin() {
            this._readyDrag = !0
        }
        onDragStateChanged() {
            this._readyDrag && this._dragRecoverTime > 0 && (this._isAutoScrolling = !1, this._dragStopCount = 0),
            this._readyDrag && (this._readyDrag = !1)
        }
        onItemProvider() {
            return this._itemType.URL
        }
        onItemRenderer(t, i) {
            if (t < 0 || t >= this._datas.length) return i.picture.icon = "",
            i.title.text = "",
            i.desc && (i.desc = ""),
            void(i.data = null);
            let s = this._datas[t];
            if (this._cellWidth > 0 || this._adaptScale && i.width > this._effectWidth) {
                let t = this._adaptScale ? this._effectWidth: i.width;
                this._cellWidth > 0 && (t = Math.min(t, this._cellWidth)),
                i.width = t
            }
            if (this._cellHeight > 0 || this._adaptScale && i.height > this._effectHeight) {
                let t = this._adaptScale ? this._effectHeight: i.height;
                this._cellHeight > 0 && (t = Math.min(t, this._cellHeight)),
                i.height = t
            }
            if (this.keepRatio == e.Horizontal ? i.height = i.width * (i.initHeight / i.initWidth) : this.keepRatio == e.Vertical && (i.width = i.height * (i.initWidth / i.initHeight)), this._transition && this._transition.length >= 0) {
                let t = i.getTransition(this._transition);
                t && t.play()
            }
            this._itemRendererHandler ? this._itemRendererHandler.runWith([i, s]) : (i.picture && i.picture.icon && (i.picture.icon = s.getIcon(s.img_index)), s.info.app_title && i.title ? i.title.text = s.info.app_title: i.title && (i.title.text = ""), s.info.app_desc && i.desc ? i.desc.text = s.info.app_desc: i.desc && (i.desc.text = ""), i.desc && (i.desc.text = "")),
            i.data = s
        }
        onAutoScroll() {
            let t = this.view;
            if (t && t.list) if (this._isAutoScrolling && this.scrollType != fairygui.ScrollType.Both) {
                let e = this._autoScrollSpeed * zs.Timer.inst.delta * .001 * (this._autoScrollForward ? 1 : -1),
                i = t.list.scrollPane;
                this.scrollType == fairygui.ScrollType.Horizontal ? (i.setPosX(e + t.list.scrollPane.posX), i.percX >= 1 ? this._autoScrollForward = !1 : i.percX <= 0 && (this._autoScrollForward = !0)) : (i.setPosY(e + t.list.scrollPane.posY), i.percY >= 1 ? this._autoScrollForward = !1 : i.percY <= 0 && (this._autoScrollForward = !0))
            } else this.scrollType != fairygui.ScrollType.Both && (this._dragStopCount += .001 * zs.Timer.inst.delta, this._dragStopCount > this._dragRecoverTime && (this._dragStopCount = 0, this._isAutoScrolling = !0))
        }
        refreshSingleItem(t) {
            var e = this._datas[t];
            if (null != e.img_index) e.img_index++;
            else {
                var i = Math.floor(Math.random() * this._datas.length);
                if (this._datas.length > 1 && i == t) return this.refreshSingleItem(t);
                var s = this._datas[i];
                s && (this._datas[t] = s, this._datas[i] = e)
            }
            this.apply(),
            this.view.list._virtual && this.view.list.refreshVirtualList()
        }
        onClickItem(t) {
            this._clickHandler ? this._clickHandler.runWith(t) : (zs.td.justTrack("列表点击导出跳转", "列表点击导出跳转"), s.navigateToMiniProgram(t.data, t.picture.icon).then(() =>{
                let e = this._datas.indexOf(t.data);
                this.refreshSingleItem(e)
            }).
            catch(t =>t))
        }
        scrollStart() {
            this.touchX = zs.proxy.Touch.touchX,
            this.touchY = zs.proxy.Touch.touchY
        }
        scrollJumpExport() {
            s.checkScroll(this.touchX, this.touchY, a.checkScrollDistance) && (zs.product.get("zs_slide_jump_switch") && this.randomJumpExport())
        }
        randomJumpExport() {
            if (!this._datas || this._datas.length <= 0) return;
            let t = this._datas[Math.floor(Math.random() * this._datas.length)];
            zs.td.justTrack("列表随机导出跳转", "列表随机导出跳转"),
            s.navigateToMiniProgram(t)
        }
    }
    a.checkScrollDistance = 30,
    a.AlignTop = zs.proxy.Configs.FGUI_AlignType_Top,
    a.AlignBottom = zs.proxy.Configs.FGUI_AlignType_Bottom,
    a.AlignMiddle = zs.proxy.Configs.FGUI_AlignType_Middle,
    a.AlignLeft = zs.proxy.Configs.FGUI_AlignType_Left,
    a.AlignRight = zs.proxy.Configs.FGUI_AlignType_Right,
    a.AlignCenter = zs.proxy.Configs.FGUI_AlignType_Center,
    a.transitionShakeLeft = "shakeLeft",
    a.transitionShakeRight = "shakeRight";
    class r extends zs.fgui.base {
        constructor(t) {
            super(t),
            r.gid++,
            this.fullId = r.gid,
            this.record = []
        }
        dispose() {
            super.dispose(),
            zs.network.behavior(zs.utils.getEventCode("full-" + this.fullId), 3, JSON.stringify(this.record)),
            this.record = []
        }
        setMistaken() {
            return this
        }
        setClickContinue(t) {
            return this._clickContinue = t,
            this
        }
        onClickContinue() {
            this._clickContinue && this._clickContinue.run()
        }
        enterJumpExport() {
            return zs.product.get("zs_auto_jump_switch") && this.randomJumpExport(),
            this
        }
        scrollJumpExport() {
            s.checkScroll(this.touchX, this.touchY, r.checkScrollDistance) && (zs.product.get("zs_slide_jump_switch") && this.randomJumpExport())
        }
        randomJumpExport() {}
        apply() {
            return this
        }
    }
    r.gid = 0,
    r.checkScrollDistance = 30,
    t.utils = s,
    t.dataMgr = l,
    t.list = a,
    t.loader = class extends zs.fgui.base {
        constructor(t) {
            super(t),
            t.width = zs.configs.gameCfg.designWidth,
            t.height = zs.configs.gameCfg.designHeight,
            t.alpha = 1,
            t.x = 0,
            t.y = 0,
            t.autoSize = !1,
            t.fill = fairygui.LoaderFillType.ScaleFree
        }
        static make() {
            return new fairygui.GLoader
        }
        get url() {
            return this.view.url
        }
        setURL(t) {
            return Array.isArray(t) && t.length > 1 ? zs.fgui.loadPack(t[0]).then(e =>{
                this.view.url = zs.ui.readURL(e, t[1])
            }).
            catch(t =>t) : this.view.url = t,
            this
        }
        get alpha() {
            return this.view.alpha
        }
        setAlpha(t) {
            return this.view.alpha = t,
            this
        }
        get width() {
            return this.view.width
        }
        setWidth(t) {
            return this.view.width = t,
            this
        }
        get height() {
            return this.view.height
        }
        setHeight(t) {
            return this.view.height = t,
            this
        }
        get x() {
            return this.view.x
        }
        setX(t) {
            return this.view.x = t,
            this
        }
        get y() {
            return this.view.y
        }
        setY(t) {
            return this.view.y = t,
            this
        }
        get fill() {
            let t = "free";
            switch (this.view.fill) {
            case fairygui.LoaderFillType.None:
                t = "none";
                break;
            case fairygui.LoaderFillType.Scale:
                t = "scale";
                break;
            case fairygui.LoaderFillType.ScaleMatchHeight:
                t = "height";
                break;
            case fairygui.LoaderFillType.ScaleMatchWidth:
                t = "width";
                break;
            case fairygui.LoaderFillType.ScaleFree:
                t = "free";
                break;
            case fairygui.LoaderFillType.ScaleNoBorder:
                t = "noborder"
            }
            return t
        }
        setFill(t) {
            let e = fairygui.LoaderFillType.ScaleFree;
            switch (t) {
            case "scale":
                e = fairygui.LoaderFillType.Scale;
                break;
            case "height":
                e = fairygui.LoaderFillType.ScaleMatchHeight;
                break;
            case "width":
                e = fairygui.LoaderFillType.ScaleMatchWidth;
                break;
            case "free":
                e = fairygui.LoaderFillType.ScaleFree;
                break;
            case "noborder":
                e = fairygui.LoaderFillType.ScaleNoBorder;
                break;
            case "none":
                e = fairygui.LoaderFillType.None
            }
            return this.view.fill = e,
            this
        }
        applyConfig(t) {
            return t && (null != t.alpha && this.setAlpha(t.alpha), t.url && this.setURL(t.url), null != t.width && this.setWidth(t.width), null != t.height && this.setHeight(t.height), null != t.x && this.setX(t.x), null != t.y && this.setY(t.y), t.fill && this.setFill(t.fill)),
            this
        }
    },
    t.background = class extends zs.fgui.base {
        constructor(t) {
            super(t),
            t.width = zs.configs.gameCfg.designWidth,
            t.height = zs.configs.gameCfg.designHeight,
            t.alpha = .5,
            t.x = 0,
            t.y = 0,
            t.drawRect(0, zs.proxy.color("#000000"), zs.proxy.color("#000000"))
        }
        static make() {
            return new fairygui.GGraph
        }
        get color() {
            return this.view.color
        }
        setColor(t) {
            return this.view.color = zs.proxy.color(t),
            this
        }
        get alpha() {
            return this.view.alpha
        }
        setAlpha(t) {
            return this.view.alpha = t,
            this
        }
        applyConfig(t) {
            return t && (t.color && this.setColor(t.color), null != t.alpha && this.setAlpha(t.alpha)),
            this
        }
    },
    t.banner = class extends zs.fgui.base {
        constructor(t) {
            super(t),
            t.width = zs.platform.config.bannerWidth ? zs.platform.config.bannerWidth: 600,
            t.height = zs.platform.config.bannerHeight ? zs.platform.config.bannerHeight: 200,
            t.drawRect(0, zs.proxy.color("#888888"), zs.proxy.color("#888888"))
        }
        static make() {
            return new fairygui.GGraph
        }
        get width() {
            return this.view.width
        }
        setWidth(t) {
            this.view.width = t
        }
        get height() {
            return this.view.height
        }
        setHeight(t) {
            this.view.height = t
        }
    },
    t.button = class extends zs.fgui.base {
        static make() {
            return new fairygui.GButton
        }
        constructor(t) {
            super(t),
            t.width = 300,
            t.height = 80,
            t._downEffect = 2,
            t._downEffectValue = .9,
            zs.proxy.Event.FGUIButtonTouchBegin(t),
            t.setPivot(.5, .5, !0),
            zs.proxy.Event.FGUIOnClick(t, this, this.onClicked);
            let e = new fairygui.GLoader;
            e.x = 0,
            e.y = 0,
            e.width = t.width,
            e.height = t.height,
            e.addRelation(t, fairygui.RelationType.Width),
            e.addRelation(t, fairygui.RelationType.Height),
            e.alpha = 1,
            e.autoSize = !1,
            e.fill = fairygui.LoaderFillType.ScaleFree,
            t.addChild(e),
            this.icon = e,
            this.setURL([zs.fgui.configs.pack_basic, "msg_background"]);
            let i = new zs.proxy.FGUITextField;
            i.autoSize = fairygui.AutoSizeType.None,
            i.x = 0,
            i.y = 0,
            i.width = t.width,
            i.height = t.height,
            i.addRelation(t, fairygui.RelationType.Width),
            i.addRelation(t, fairygui.RelationType.Height),
            i.singleLine = !0,
            i.fontSize = 36,
            i.align = zs.proxy.Configs.FGUI_AlignType_Center,
            i.valign = zs.proxy.Configs.FGUI_AlignType_Middle,
            i.color = zs.proxy.color("#000000"),
            t.addChild(i),
            this.title = i
        }
        dispose() {
            zs.Tween.clearAll(this.view),
            this.fakeDelayHandler && clearTimeout(this.fakeDelayHandler),
            this.clickDelayHandler && clearTimeout(this.clickDelayHandler),
            this.offsetDelayHandler && clearTimeout(this.offsetDelayHandler),
            super.dispose()
        }
        get url() {
            return this.icon ? this.icon.url: null
        }
        setURL(t) {
            return this.icon && (Array.isArray(t) && t.length > 1 ? zs.fgui.loadPack(t[0]).then(e =>{
                this.icon.url = zs.ui.readURL(e, t[1])
            }).
            catch(t =>t) : this.icon.url = t),
            this
        }
        get alpha() {
            return this.icon ? this.icon.alpha: null
        }
        setAlpha(t) {
            return this.icon && (this.icon.alpha = t),
            this
        }
        get width() {
            return this.view.width
        }
        setWidth(t) {
            return this.view.width = t,
            this
        }
        get height() {
            return this.view.height
        }
        setHeight(t) {
            return this.view.height = t,
            this
        }
        get font() {
            return this.title ? this.title.font: null
        }
        setFont(t) {
            return this.title && (this.title.font = t),
            this
        }
        get fontsize() {
            return this.title ? this.title.fontSize: 0
        }
        setFontSize(t) {
            return this.title && (this.title.fontSize = t),
            this
        }
        get text() {
            return this.title ? this.title.text: null
        }
        setText(t) {
            return this.title && (this.title.text = t),
            this
        }
        get fontcolor() {
            return this.title ? this.title.color: null
        }
        setFontColor(t) {
            return this.title && (this.title.color = zs.proxy.color(t)),
            this
        }
        get
        switch () {
            return this._switch
        }
        setSwitch(t, e) {
            return zs.core.workflow ? this._switch = zs.core.workflow.checkSwitch(t, e) : this._switch = !1,
            this
        }
        get fill() {
            if (!this.icon) return null;
            let t = "free";
            switch (this.icon.fill) {
            case fairygui.LoaderFillType.None:
                t = "none";
                break;
            case fairygui.LoaderFillType.Scale:
                t = "scale";
                break;
            case fairygui.LoaderFillType.ScaleMatchHeight:
                t = "height";
                break;
            case fairygui.LoaderFillType.ScaleMatchWidth:
                t = "width";
                break;
            case fairygui.LoaderFillType.ScaleFree:
                t = "free";
                break;
            case fairygui.LoaderFillType.ScaleNoBorder:
                t = "noborder"
            }
            return t
        }
        setFill(t) {
            if (!this.icon) return;
            let e = fairygui.LoaderFillType.ScaleFree;
            switch (t) {
            case "scale":
                e = fairygui.LoaderFillType.Scale;
                break;
            case "height":
                e = fairygui.LoaderFillType.ScaleMatchHeight;
                break;
            case "width":
                e = fairygui.LoaderFillType.ScaleMatchWidth;
                break;
            case "free":
                e = fairygui.LoaderFillType.ScaleFree;
                break;
            case "noborder":
                e = fairygui.LoaderFillType.ScaleNoBorder;
                break;
            case "none":
                e = fairygui.LoaderFillType.None
            }
            return this.icon.fill = e,
            this
        }
        setAutoFade(t) {
            return this.autofade = t,
            this.isFading = !1,
            this
        }
        setAutoFadeTime(t) {
            return this.autofadetime = t,
            this
        }
        setAutoOffset(t) {
            return this.autooffset = t,
            this
        }
        setOffsetX(t) {
            return this.offsetx = t,
            this
        }
        setOffsetY(t) {
            return this.offsety = t,
            this
        }
        setOffsetTime(t) {
            return this.offsettime = t,
            this
        }
        setClickIgnore(t) {
            return this.clickignore = t,
            this
        }
        setClickAlways(t) {
            return this.clickalways = t,
            this
        }
        setFakeDelay(t) {
            return this.fakedelay = t,
            this
        }
        setFakeEvent(t) {
            return this.fakeevent = t,
            this
        }
        setEvent(t) {
            return this.event = t,
            this
        }
        onClicked() {
            if (null != this.autooffset || null != this.autofade || this.ignoreClick) return;
            this.ignoreClick = !0;
            let t = !1;
            if (this.
            switch && zs.core.workflow && (t = zs.core.workflow.checkSwitch(this.
            switch)), t && (this.offsetx || this.offsety)) {
                let t = this.view.x + (this.offsetx || 0) * this.view.scaleX,
                e = this.view.y + (this.offsety || 0) * this.view.scaleY;
                zs.Tween.to(this.view, {
                    x: t,
                    y: e
                },
                this.offsettime || 0, null, zs.Handler.create(this, () =>{
                    this.ignoreClick = !1
                }), Number(zs.product.get("zs_button_delay_time"))),
                this.offsetx = null,
                this.offsety = null,
                this.onFakeClicked()
            } else t && this.clickignore ? (this.clickDelayHandler = setTimeout(() =>{
                this.ignoreClick = !1
            },
            Number(zs.product.get("zs_button_delay_time"))), this.clickignore = null, this.onFakeClicked()) : (this.clickalways && (this.ignoreClick = !1), this.event && zs.core.workflow && zs.core.workflow.runEventConfig(this.event))
        }
        onFakeClicked() {
            if (this.fakeevent) {
                let t = zs.core.workflow ? zs.core.workflow.readConfigReturn(this.fakedelay) : null; ! t || "number" != typeof t || t <= 0 ? zs.core.workflow.runEventConfig(this.fakeevent) : (this.readyEvent = this.fakeevent, this.fakeDelayHandler = setTimeout(() =>{
                    zs.core.workflow.runEventConfig(this.readyEvent),
                    this.readyEvent = null
                },
                t)),
                this.fakeevent = null
            }
        }
        autoOffset() {
            let t = !1;
            if (this.
            switch && zs.core.workflow && (t = zs.core.workflow.checkSwitch(this.
            switch)), !t || null == this.autooffset || null == this.offsetx && null == this.offsety) this.autooffset = null,
            this.view.x += (this.offsetx || 0) * this.view.scaleX,
            this.view.y += (this.offsety || 0) * this.view.scaleY;
            else {
                let t = zs.core.workflow ? zs.core.workflow.readConfigReturn(this.autooffset) : null; (!t || "number" != typeof t || t <= 0) && (t = 0);
                let e = this.view.x + (this.offsetx || 0) * this.view.scaleX,
                i = this.view.y + (this.offsety || 0) * this.view.scaleY;
                zs.Tween.to(this.view, {
                    x: e,
                    y: i
                },
                this.offsettime || 0, null, zs.Handler.create(this, () =>{
                    this.autooffset = null
                }), t),
                this.clickignore = null,
                this.offsetx = null,
                this.offsety = null
            }
        }
        autoFade() {
            if (null != this.autofade) {
                let t = zs.core.workflow ? zs.core.workflow.readConfigReturn(this.autofade) : null; (!t || "number" != typeof t || t <= 0) && (t = 0),
                zs.Tween.to(this.view, {
                    alpha: 1
                },
                this.autofadetime || 0, null, zs.Handler.create(this, () =>{
                    this.ignoreClick = !1,
                    this.autofade = null
                }), t)
            }
        }
        apply() {
            return null != this.autooffset && null == this.offsetDelayHandler && (this.offsetDelayHandler = setTimeout(() =>{
                this.autoOffset()
            },
            1)),
            null == this.autofade || this.isFading || (this.view.alpha = 0, this.ignoreClick = !0, this.autoFade(), this.isFading = !0),
            this
        }
        applyConfig(t) {
            return t && (t.url && this.setURL(t.url), t.fill && this.setFill(t.fill), null != t.alpha && this.setAlpha(t.alpha), null != t.width && this.setWidth(t.width), null != t.height && this.setHeight(t.height), t.font && this.setFont(t.font), null != t.fontsize && this.setFontSize(t.fontsize), null != t.font_size && this.setFontSize(t.font_size), t.fontcolor && this.setFontColor(t.fontcolor), t.font_color && this.setFontColor(t.font_color), t.text && this.setText(t.text), null != t.autofade && this.setAutoFade(t.autofade), null != t.auto_fade && this.setAutoFade(t.auto_fade), null != t.autofadetime && this.setAutoFadeTime(t.autofadetime), null != t.auto_fade_time && this.setAutoFadeTime(t.auto_fade_time), null != t.autooffset && this.setAutoOffset(t.autooffset), null != t.auto_offset && this.setAutoOffset(t.auto_offset), null != t.offsetx && this.setOffsetX(t.offsetx), null != t.offset_x && this.setOffsetX(t.offset_x), null != t.offsety && this.setOffsetY(t.offsety), null != t.offset_y && this.setOffsetY(t.offset_y), null != t.offsettime && this.setOffsetTime(t.offsettime), null != t.offset_time && this.setOffsetTime(t.offset_time), t.clickignore && this.setClickIgnore(t.clickignore), t.click_ignore && this.setClickIgnore(t.click_ignore), t.clickalways && this.setClickAlways(t.clickalways), t.click_always && this.setClickAlways(t.click_always), null != t.fakedelay && this.setFakeDelay(t.fakedelay), null != t.fake_delay && this.setFakeDelay(t.fake_delay), t.fakeevent && this.setFakeEvent(t.fakeevent), t.fake_event && this.setFakeEvent(t.fake_event), t.event && this.setEvent(t.event), (t.
            switch || t.check) && this.setSwitch(t.
            switch, t.check)),
            this.apply()
        }
    },
    t.full = r,
    t.AlignType = i,
    t.AdaptType = e
} (window.zs.exporter = window.zs.exporter || {});