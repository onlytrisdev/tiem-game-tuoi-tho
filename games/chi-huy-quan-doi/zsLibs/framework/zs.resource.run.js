window.zs = window.zs || {},
function(a) {
    "use strict";
    let e; !
    function(a) {
        a[a.Common = 0] = "Common",
        a[a.Scene = 1] = "Scene",
        a[a.Scene3D = 2] = "Scene3D",
        a[a.Sprite3D = 3] = "Sprite3D",
        a[a.FGUIPack = 4] = "FGUIPack"
    } (e = e || (e = {}));
    class t {
        static init() {
            if (t.loadedPacks = [], t.preloadPacks = [], t.subpacks = {},
            s.gameCfg && s.gameCfg.subpackages) {
                let a = s.gameCfg.subpackages;
                for (let e in s.gameCfg.subpackages) {
                    if (null == e || e.length <= 0) continue;
                    let s = !1,
                    l = a[e];
                    "*" === e[0] && (s = !0, e = e.slice(1), t.preloadPacks.push(e)),
                    t.subpacks[e] = l
                }
            }
        }
        static async preload() {
            if (! (null == t.preloadPacks || t.preloadPacks.length <= 0)) for (let a = 0, e = t.preloadPacks.length; a < e; a++) {
                let e = t.preloadPacks[a];
                await zs.platform.async.loadSubpackage({
                    pkgName: e
                }).then(() =>{
                    t.loadedPacks.push(e),
                    zs.log.debug("预加载分包" + e + "成功!")
                }).
                catch(() =>{
                    zs.log.warn("预加载分包" + e + "失败!")
                })
            }
        }
        static check(a) {
            for (let e in t.subpacks) if (zs.utils.startwith(a, t.subpacks[e])) return e;
            return null
        }
        static isPackLoaded(a) {
            return this.loadedPacks.indexOf(a) >= 0
        }
        static isLoading() {
            return t.numLoading > 0
        }
        static load(a, e) {
            return new zs.Coop((s, l) =>{
                if (!a) return s();
                let c = t.check(a);
                t.numLoading++,
                c && !this.isPackLoaded(c) ? zs.platform.async.loadSubpackage({
                    pkgName: c
                }).then(() =>{
                    t.loadedPacks.push(c),
                    t.nativeLoad(a, e).then(a =>{
                        t.numLoading--,
                        s(a)
                    }).
                    catch(a =>a)
                }).
                catch(() =>{
                    t.nativeLoad(a, e).then(a =>{
                        t.numLoading--,
                        s(a)
                    }).
                    catch(a =>a)
                }) : t.nativeLoad(a, e).then(a =>{
                    t.numLoading--,
                    s(a)
                }).
                catch(a =>a)
            })
        }
        static nativeLoad(a, t, s) {
            return new zs.Coop((l, c) =>{
                let n = zs.proxy.Loader.getRes(a);
                if (n) l(n);
                else switch (t) {
                case e.Scene:
                    zs.proxy.Loader.loadScene(a, zs.Handler.create(null, a =>{
                        l(a)
                    }));
                    break;
                case e.Scene3D:
                    zs.proxy.Loader.loadScene3D(a, zs.Handler.create(null, a =>{
                        l(a)
                    }));
                    break;
                case e.Sprite3D:
                    zs.proxy.Loader.loadSprite3D(a, zs.Handler.create(null, a =>{
                        l(a)
                    }));
                    break;
                case e.FGUIPack:
                    zs.proxy.loadFGUIPack(a).then(l).
                    catch(c);
                    break;
                default:
                    zs.proxy.Loader.load(a, zs.Handler.create(null, a =>{
                        l(a)
                    }), s)
                }
            })
        }
        static destroyFGUIPackage(a) {
            a && a.dispose()
        }
        static destroyFGUIPackageByName(a) {
            let e = fairygui.UIPackage.getByName(a);
            this.destroyFGUIPackage(e)
        }
    }
    t.subpacks = {},
    t.preloadPacks = [],
    t.loadedPacks = [],
    t.numLoading = 0;
    class s {
        static async init() {
            s.gameCfg = await zs.resource.load(s.gameCfgPath).
            catch(a =>a),
            s.productCfg = await zs.resource.load(s.porductCfgPath).
            catch(a =>a),
            s.uiCfg = await zs.resource.load(s.uiCfgPath).
            catch(a =>a),
            s.gameCfg.secret || (s.gameCfg.secret = "7CaD3L23LlGnENd1")
        }
        static async load(a, e, t, l) {
            if (null == s.list && (s.list = {}), s.list[a]) return new zs.Coop((e, t) =>{
                e(s.list[a])
            });
            if ((null == t || l) && await zs.resource.load(e).then(e =>{
                s.list[a] = e
            }).
            catch(() =>{
                zs.log.warn("本地无法正确加载配置表 " + a + " 路径为 " + e, "Configs")
            }), t) {
                let e = t.split(">>", 2);
                if (e.length > 0) {
                    let c = e.length > 1 ? e[0] : null,
                    n = e.length > 1 ? e[1] : e[0];
                    if (l) zs.network.config(!1, c, n).then(e =>{
                        e && (s.list[a] = e)
                    }).
                    catch(() =>{
                        zs.log.warn("远程无法正确加载配置表 " + a + " 路径为 " + t, "Configs")
                    });
                    else {
                        let e = await zs.network.config(!1, c, n).
                        catch(() =>{
                            zs.log.warn("远程无法正确加载配置表 " + a + " 路径为 " + t, "Configs")
                        });
                        e && (s.list[a] = e)
                    }
                }
            }
            return new zs.Coop((e, t) =>{
                e(s.list[a])
            })
        }
        static get(a) {
            return null == s.list || null == s.list[a] ? null: s.list[a]
        }
    }
    s.gameCfgPath = zs.proxy.Configs.gameCfgPath,
    s.porductCfgPath = zs.proxy.Configs.porductCfgPath,
    s.uiCfgPath = zs.proxy.Configs.uiCfgPath;
    a.ResourceType = e,
    a.resource = t,
    a.configs = s,
    a.prefabs = class {
        static async load(a, e, t, l) {
            if (null == s.list && (s.list = {}), s.list[a]) return new zs.Coop((e, t) =>{
                e(s.list[a])
            });
            if (null == t || l) {
                let t = await zs.resource.load(e, zs.ResourceType.Sprite3D).
                catch(() =>{
                    zs.log.warn("本地无法正确加载预制体 " + a + " 路径为 " + e, "Prefabs")
                });
                s.list[a] = t
            }
            return new zs.Coop((e, t) =>{
                e(s.list[a])
            })
        }
        static get(a) {
            return null == s.list || null == s.list[a] ? null: s.list[a]
        }
    }
} (window.zs = window.zs || {});