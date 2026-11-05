window.zs = window.zs || {},
function(t) {
    "use strict";
    let e; !
    function(t) {
        t[t.Local = 0] = "Local",
        t[t.Async = 1] = "Async",
        t[t.Sync = 2] = "Sync"
    } (e = e || (e = {}));
    class i {
        static rotateLeft(t, e) {
            return t << e | t >>> 32 - e
        }
        static addUnsigned(t, e) {
            var i, a, s, o, r;
            return s = 2147483648 & t,
            o = 2147483648 & e,
            r = (1073741823 & t) + (1073741823 & e),
            (i = 1073741824 & t) & (a = 1073741824 & e) ? 2147483648 ^ r ^ s ^ o: i | a ? 1073741824 & r ? 3221225472 ^ r ^ s ^ o: 1073741824 ^ r ^ s ^ o: r ^ s ^ o
        }
        static F(t, e, i) {
            return t & e | ~t & i
        }
        static G(t, e, i) {
            return t & i | e & ~i
        }
        static H(t, e, i) {
            return t ^ e ^ i
        }
        static I(t, e, i) {
            return e ^ (t | ~i)
        }
        static FF(t, e, i, a, s, o, r) {
            return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.F(e, i, a), s), r)),
            this.addUnsigned(this.rotateLeft(t, o), e)
        }
        static GG(t, e, i, a, s, o, r) {
            return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.G(e, i, a), s), r)),
            this.addUnsigned(this.rotateLeft(t, o), e)
        }
        static HH(t, e, i, a, s, o, r) {
            return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.H(e, i, a), s), r)),
            this.addUnsigned(this.rotateLeft(t, o), e)
        }
        static II(t, e, i, a, s, o, r) {
            return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.I(e, i, a), s), r)),
            this.addUnsigned(this.rotateLeft(t, o), e)
        }
        static convertToWordArray(t) {
            for (var e, i = t.length,
            a = i + 8,
            s = 16 * ((a - a % 64) / 64 + 1), o = Array(s - 1), r = 0, n = 0; n < i;) r = n % 4 * 8,
            o[e = (n - n % 4) / 4] = o[e] | t.charCodeAt(n) << r,
            n++;
            return r = n % 4 * 8,
            o[e = (n - n % 4) / 4] = o[e] | 128 << r,
            o[s - 2] = i << 3,
            o[s - 1] = i >>> 29,
            o
        }
        static wordToHex(t) {
            var e, i = "",
            a = "";
            for (e = 0; e <= 3; e++) i += (a = "0" + (t >>> 8 * e & 255).toString(16)).substr(a.length - 2, 2);
            return i
        }
        static uTF8Encode(t) {
            t = t.replace(/\x0d\x0a/g, "\n");
            for (var e = "",
            i = 0; i < t.length; i++) {
                var a = t.charCodeAt(i);
                a < 128 ? e += String.fromCharCode(a) : a > 127 && a < 2048 ? (e += String.fromCharCode(a >> 6 | 192), e += String.fromCharCode(63 & a | 128)) : (e += String.fromCharCode(a >> 12 | 224), e += String.fromCharCode(a >> 6 & 63 | 128), e += String.fromCharCode(63 & a | 128))
            }
            return e
        }
        static md5(t) {
            var e, i, a, s, o, r, n, d, l, g = Array();
            for (t = this.uTF8Encode(t), g = this.convertToWordArray(t), r = 1732584193, n = 4023233417, d = 2562383102, l = 271733878, e = 0; e < g.length; e += 16) i = r,
            a = n,
            s = d,
            o = l,
            r = this.FF(r, n, d, l, g[e + 0], 7, 3614090360),
            l = this.FF(l, r, n, d, g[e + 1], 12, 3905402710),
            d = this.FF(d, l, r, n, g[e + 2], 17, 606105819),
            n = this.FF(n, d, l, r, g[e + 3], 22, 3250441966),
            r = this.FF(r, n, d, l, g[e + 4], 7, 4118548399),
            l = this.FF(l, r, n, d, g[e + 5], 12, 1200080426),
            d = this.FF(d, l, r, n, g[e + 6], 17, 2821735955),
            n = this.FF(n, d, l, r, g[e + 7], 22, 4249261313),
            r = this.FF(r, n, d, l, g[e + 8], 7, 1770035416),
            l = this.FF(l, r, n, d, g[e + 9], 12, 2336552879),
            d = this.FF(d, l, r, n, g[e + 10], 17, 4294925233),
            n = this.FF(n, d, l, r, g[e + 11], 22, 2304563134),
            r = this.FF(r, n, d, l, g[e + 12], 7, 1804603682),
            l = this.FF(l, r, n, d, g[e + 13], 12, 4254626195),
            d = this.FF(d, l, r, n, g[e + 14], 17, 2792965006),
            n = this.FF(n, d, l, r, g[e + 15], 22, 1236535329),
            r = this.GG(r, n, d, l, g[e + 1], 5, 4129170786),
            l = this.GG(l, r, n, d, g[e + 6], 9, 3225465664),
            d = this.GG(d, l, r, n, g[e + 11], 14, 643717713),
            n = this.GG(n, d, l, r, g[e + 0], 20, 3921069994),
            r = this.GG(r, n, d, l, g[e + 5], 5, 3593408605),
            l = this.GG(l, r, n, d, g[e + 10], 9, 38016083),
            d = this.GG(d, l, r, n, g[e + 15], 14, 3634488961),
            n = this.GG(n, d, l, r, g[e + 4], 20, 3889429448),
            r = this.GG(r, n, d, l, g[e + 9], 5, 568446438),
            l = this.GG(l, r, n, d, g[e + 14], 9, 3275163606),
            d = this.GG(d, l, r, n, g[e + 3], 14, 4107603335),
            n = this.GG(n, d, l, r, g[e + 8], 20, 1163531501),
            r = this.GG(r, n, d, l, g[e + 13], 5, 2850285829),
            l = this.GG(l, r, n, d, g[e + 2], 9, 4243563512),
            d = this.GG(d, l, r, n, g[e + 7], 14, 1735328473),
            n = this.GG(n, d, l, r, g[e + 12], 20, 2368359562),
            r = this.HH(r, n, d, l, g[e + 5], 4, 4294588738),
            l = this.HH(l, r, n, d, g[e + 8], 11, 2272392833),
            d = this.HH(d, l, r, n, g[e + 11], 16, 1839030562),
            n = this.HH(n, d, l, r, g[e + 14], 23, 4259657740),
            r = this.HH(r, n, d, l, g[e + 1], 4, 2763975236),
            l = this.HH(l, r, n, d, g[e + 4], 11, 1272893353),
            d = this.HH(d, l, r, n, g[e + 7], 16, 4139469664),
            n = this.HH(n, d, l, r, g[e + 10], 23, 3200236656),
            r = this.HH(r, n, d, l, g[e + 13], 4, 681279174),
            l = this.HH(l, r, n, d, g[e + 0], 11, 3936430074),
            d = this.HH(d, l, r, n, g[e + 3], 16, 3572445317),
            n = this.HH(n, d, l, r, g[e + 6], 23, 76029189),
            r = this.HH(r, n, d, l, g[e + 9], 4, 3654602809),
            l = this.HH(l, r, n, d, g[e + 12], 11, 3873151461),
            d = this.HH(d, l, r, n, g[e + 15], 16, 530742520),
            n = this.HH(n, d, l, r, g[e + 2], 23, 3299628645),
            r = this.II(r, n, d, l, g[e + 0], 6, 4096336452),
            l = this.II(l, r, n, d, g[e + 7], 10, 1126891415),
            d = this.II(d, l, r, n, g[e + 14], 15, 2878612391),
            n = this.II(n, d, l, r, g[e + 5], 21, 4237533241),
            r = this.II(r, n, d, l, g[e + 12], 6, 1700485571),
            l = this.II(l, r, n, d, g[e + 3], 10, 2399980690),
            d = this.II(d, l, r, n, g[e + 10], 15, 4293915773),
            n = this.II(n, d, l, r, g[e + 1], 21, 2240044497),
            r = this.II(r, n, d, l, g[e + 8], 6, 1873313359),
            l = this.II(l, r, n, d, g[e + 15], 10, 4264355552),
            d = this.II(d, l, r, n, g[e + 6], 15, 2734768916),
            n = this.II(n, d, l, r, g[e + 13], 21, 1309151649),
            r = this.II(r, n, d, l, g[e + 4], 6, 4149444226),
            l = this.II(l, r, n, d, g[e + 11], 10, 3174756917),
            d = this.II(d, l, r, n, g[e + 2], 15, 718787259),
            n = this.II(n, d, l, r, g[e + 9], 21, 3951481745),
            r = this.addUnsigned(r, i),
            n = this.addUnsigned(n, a),
            d = this.addUnsigned(d, s),
            l = this.addUnsigned(l, o);
            return (this.wordToHex(r) + this.wordToHex(n) + this.wordToHex(d) + this.wordToHex(l)).toLowerCase()
        }
        static buildSign(t, e) {
            e = e || !0;
            for (var i = Object.keys(t).sort(), a = "", s = 0; s < i.length; s++) a += i[s] + ":" + t[i[s]];
            e && (a += zs.configs.gameCfg.secret);
            var o = this.md5(a);
            return o = o.toLowerCase()
        }
    }
    class a {
        static encrypt(t) {
            let e = CryptoJS.enc.Utf8.parse(a.authorizationSecret),
            i = CryptoJS.enc.Utf8.parse(t);
            return CryptoJS.AES.encrypt(i, e, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            }).toString()
        }
        static decrypt(t) {
            let e = CryptoJS.enc.Utf8.parse(a.authorizationSecret),
            i = CryptoJS.AES.decrypt(t, e, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            return CryptoJS.enc.Utf8.stringify(i).toString()
        }
        static async init() {
            let t = zs.configs.gameCfg;
            if (a.defaultData = t.network, !t.skipRemote) {
                let e = await zs.resource.nativeLoad(t.remoteWebSettingURL || a.remoteWebSettingURL, null, !0).
                catch(t =>t);
                e && (e.webDomains && (a.listDomain = e.webDomains), e.webApis && (e.webApis.ping && (a.mapWebApi.ping = e.webApis.ping), e.webApis.login && (a.mapWebApi.login = e.webApis.login), e.webApis.config && (a.mapWebApi.config = e.webApis.config), e.webApis.update && (a.mapWebApi.update = e.webApis.update), e.webApis.download && (a.mapWebApi.download = e.webApis.download)), e.exportDomainOld && (zs.exporter.dataMgr.URL = e.exportDomainOld), e.exportDomainNew && (zs.exporter.dataMgr.NEWURL = e.exportDomainNew)),
                zs.log.debug("remote webSetting", "Network", e)
            }
            // await a.ping().catch(t =>t),
            // "v2" == a.version && await a.authorization().
            // catch(t =>t);
            let e = {
                user_id: 1,
                user_type: 1,
                update_time: Date.now(),
                is_new: 0,
                is_shielded: 0
            };
            if (a.domainIdx >= 0) if (zs.platform.proxy) {
                let t = await zs.platform.async.getLoginParams().
                catch(t =>t);
                t && (zs.td.justTrack("后台登录", "后台登录"), await a.login(t).then(t =>{
                    t.user_id ? (e = t, a.ready = !0, zs.log.debug("登陆成功：", "Network", t)) : zs.td.justTrack("后台登录失败", "后台登录失败")
                }).
                catch(t =>{
                    zs.td.justTrack("后台登录失败", "后台登录失败")
                }))
            } else await a.login({
                uid: "1"
            }).then(t =>{
                t.user_id && (e = t, a.ready = !0, zs.log.debug("登陆成功：", "Network", t))
            }).
            catch(t =>t),
            a.ready = !0;
            a.loginCode = "";
            for (let t = 0; t < 3; t++) a.loginCode += zs.utils.randByte();
            return e
        }
        static getUrl(t) {
            return a.domainIdx < 0 || a.domainIdx >= a.listDomain.length ? null: null == a.mapWebApi[t] ? (zs.log.error("非法网络接口： " + t, "Network"), null) : a.listDomain[a.domainIdx] + "/" + a.version + "/" + a.mapWebApi[t]
        }
        static obj2arg(t) {
            var e = [];
            for (var i in t) e.push(i + "=" + t[i]);
            return e.join("&")
        }
        static async post(t, e, i, s, o) {
            if (null == o && (o = 3), zs.platform.proxy && zs.platform.async.request) {
                let t = {
                    "content-type": "application/json"
                };
                if ("v2" == a.version && "" != a.authorizationToken && (t = {
                    "content-type": "application/json",
                    authorization: a.authorizationToken
                },
                !s)) {
                    var r = JSON.stringify(e),
                    n = a.encrypt(r);
                    e._data = n
                }
                return new zs.Coop((t, e) =>{
                    e()
                })
            }
            return new zs.Coop((t, e) =>{
                e()
            })
        }
        static get(t, e, i, a) {
            return null == a && (a = 3),
            zs.platform.proxy && zs.platform.async.request,
            new zs.Coop((t, e) =>{
                e()
            })
        }
        static nativeRequest(t, e, s, o, r, n) {
            let d = Math.round((new Date).getTime() / 1e3).toString();
            if (e = Object.assign(e, {
                timestamp: d
            }), o) {
                let t = i.buildSign(e, !r);
                e = Object.assign(e, {
                    sign: t
                })
            }
            return new zs.Coop((i, s) =>{
                if ("v2" == a.version && "" != a.authorizationToken && !n) {
                    var o = JSON.stringify(e),
                    r = a.encrypt(o);
                    e._data = r
                }
                this.post(t, e, 3e3, !0).then(t =>{
                    i(t)
                }).
                catch(t =>{
                    s(t)
                })
            })
        }
        static request(t, i, s) {
            return new zs.Coop((o, r) =>{
                let n = null,
                d = a.getUrl(t),
                l = null;
                if (zs.configs.gameCfg.local && (s = e.Local), d && (null == s || s == e.Sync)) return a.post(d, i).then(e =>{
                    let s = null;
                    switch (t) {
                    case "config":
                        i && "module" === i.type ? i.module ? (s = i.module ? i.module: "base_module", i.table && (s += ">>" + i.table)) : i.table && (s = i.table) : i && "switch" === i.type && (s = "switch");
                        break;
                    case "download":
                        s = i.key;
                        break;
                    case "auth":
                        a.authorizationToken = e.token,
                        a.authorizationSecret = e.secret
                    }
                    null == e || "" == e || "Array" == typeof e && 0 == e.length ? e = a.getLocalData(t, s) : a.setLocalData(t, e, s),
                    o(e)
                }).
                catch(t =>{
                    r(t)
                });
                if (null == d || s === e.Local || s === e.Async) {
                    switch (t) {
                    case "login":
                        n = a.getLocalData(t);
                        break;
                    case "config":
                        let e = null;
                        i && "module" === i.type ? i.module ? (e = i.module ? i.module: "base_module", i.table && (e += ">>" + i.table)) : i.table && (e = i.table) : i && i.type,
                        e = "switch",
                        n = a.getLocalData(t, e);
                        break;
                    case "download":
                        i && i.key && (n = a.getLocalData(t, i.key));
                        break;
                    case "update":
                        i && i.key && i.data && i.uid == zs.core.userId && a.setLocalData("download", i.data, i.key),
                        n = !0
                    }
                    if (null == n && (console.trace(),zs.log.fatal("本地网络缓存及默认值不存在: " + t, "Network")), l = n, null == d || s === e.Local) return zs.log.debug(t + " 通讯返回本地数据", "Network"),
                    o(l)
                }
                return a.post(d, i).then(e =>{
                    let s = null;
                    switch (t) {
                    case "config":
                        i && "module" === i.type && (s = i.module ? i.module: "base_module", i.table && (s += "_" + i.table));
                        break;
                    case "download":
                        s = i.key
                    }
                    null != e && "" != e && a.setLocalData(t, e, s)
                }).
                catch(t =>t),
                o(l)
            })
        }
        static getLocalData(t, e) {
            let i = t;
            e && (i += ">>" + e);
            let s = zs.utils.getItem("network_" + i);
            return s ? JSON.parse(s) : a.defaultData[i]
        }
        static setLocalData(t, e, i) {
            if (null == e || null == e) return;
            let a = t;
            i && (a += ">>" + i);
            let s = JSON.stringify(e);
            s && zs.utils.setItem("network_" + a, s)
        }
        static async ping() {
            a.domainIdx = -1;
            for (let t = 0; t < a.listDomain.length; t++) {
                let e = a.listDomain[t] + "/" + a.version + "/" + a.mapWebApi.ping,
                i = {};
                if (await a.get(e, i, 1e3).then(e =>{
                    a.domainIdx = t,
                    zs.product.city = e.city,
                    zs.product.country = e.country,
                    zs.product.timestamp = 1e3 * e.timestamp
                }).
                catch(t =>{
                    zs.log.warn("域名 " + e + " 无法正常通讯", "Network")
                }), a.domainIdx >= 0) break;
                await zs.utils.sleep(1e3)
            }
        }
        static async authorization() {
            let t = {};
            return t.gid = window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
            a.request("auth", t)
        }
        static async login(t, e) {
            return null == t && (t = {}),
            t.gid = window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
            zs.log.debug("登录参数：", "Network", t),
            a.request("login", t, e)
        }
        static async config(t, e, i, s) {
            a.ready || await a.init();
            let o = {
                gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                type: t ? "switch": "module",
                v: zs.configs.gameCfg.version
            };
            return t || (o.module = e || "base_module", i && (o.table = i)),
            a.request("config", o, s)
        }
        static async jsonConfig(t, e) {
            a.ready || await a.init();
            let i = {
                gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                type: "json",
                v: zs.configs.gameCfg.version,
                module: "base_module"
            };
            return t && (i.table = t),
            a.request("config", i, e)
        }
        static async update(t, e, i) {
            a.ready || await a.init();
            let s = {
                gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                uid: zs.core.userId,
                key: t,
                data: e
            };
            return a.request("update", s, i)
        }
        static async download(t, e) {
            a.ready || await a.init();
            let i = {
                gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                uid: zs.core.userId,
                key: t
            };
            return a.request("download", i, e)
        }
        static log(t, e) {
            window.zs.platform.config.platformMark,
            zs.configs.gameCfg.appId,
            zs.core.userId
        }
        static edit(t, e, i) {
            let s = {
                gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                uid: zs.core.userId,
                key: t,
                val: e
            };
            return a.request("edit", s, i)
        }
        static behavior(t, e, i, s) {
            let o = {
                event_id: t,
                type: e,
                record: i
            };
            return a.request("behavior", o, s)
        }
        static report(t, e, i, s, o) {
            let r = {
                gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                app_id: window.zs.platform.config.platformMark + zs.configs.gameCfg.appId,
                platform_id: a.platformId[zs.platform.config.platformMark],
                uid: zs.core.userId,
                open_id: zs.exporter.dataMgr.getUUID(),
                group: t,
                event: e,
                name: i,
                version: zs.configs.gameCfg.version,
                params: s,
                timestamp: Math.round((new Date).getTime() / 1e3).toString()
            };
            return a.request("report", r, o)
        }
    }
    a.ready = !1,
    a.version = "v2",
    a.domainIdx = -1,
    a.city = null,
    a.timestamp = null,
    a.defaultData = {},
    a.remoteWebSettingURL = "",
    a.authorizationToken = "",
    a.authorizationSecret = "",
    a.listDomain = [""],
    a.mapWebApi = {
        auth: "game/auth",
        ping: "game/clientInfo",
        login: "game/login",
        config: "game/config",
        update: "game/update",
        download: "game/download",
        report: "game/report",
        log: "game/log",
        behavior: "ad/behavior",
        edit: "game/edit"
    },
    a.platformId = {
        wx_: 1,
        oppo_: 2,
        vivo_: 3,
        qq_: 4,
        tt_: 5,
        app_: 6,
        ks_: 7,
        hw_: 8
    },
    t.NetworkMode = e,
    t.MD5 = i,
    t.network = a
} (window.zs = window.zs || {});