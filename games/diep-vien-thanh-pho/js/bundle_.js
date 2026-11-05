!function() {
    "use strict";
    class e extends Laya.EventDispatcher {
        static get Instance() {
            return null === e._instance && (e._instance = new e()), e._instance;
        }
    }
    var t;
    e._instance = null, function(e) {
        e.ResLoadProgress = "ResLoadProgress", e.StartLoadFinish = "StartLoadFinish", e.GetFocus = "GetFocus", 
        e.LostFocus = "LostFocus", e.ShareSuccess = "ShareSuccess", e.ShowAdCompleted = "ShowAdCompleted", 
        e.CloseShowAd = "CloseShowAd", e.FetchVideoFail = "FetchVideoFail", e.ShareFail = "ShareFail", 
        e.userLoginFinish = "userLoginFinish", e.SubpackageLoadProgress = "SubpackageLoadProgress", 
        e.ShowBannerCompleted = "ShowBannerCompleted", e.FinishVideoAd = "FinishVideoAd", 
        e.ShowShareVideoCompleted = "ShowShareVideoCompleted", e.CloseShowShareViedo = "CloseShowShareViedo", 
        e.BannerPosChange = "BannerPosChange", e.DestoryUserInfoButton = "DestoryUserInfoButton", 
        e.OverDayEvent = "OverDayEvent", e.OpenView = "OpenView", e.CloseView = "CloseView", 
        e.ShowView = "showView", e.HideView = "hideView", e.UpdateRecordBtn = "UpdateRecordBtn", 
        e.PlayerGoodsUpdate = "PlayerGoodsUpdate", e.UserInfoChange = "UserInfoChange", 
        e.RoleDie = "RoleDie", e.SkinChange = "SkinChange", e.SkinShowChange = "SkinShowChange", 
        e.LoadLevelComplete = "LoadLevelComplete", e.EnemyKill = "EnemyKill", e.FinishReached = "FinishReached", 
        e.LevelSuccess = "LevelSuccess", e.LevelFail = "LevelFail", e.BossComing = "BossComing", 
        e.ShowStartView = "ShowStartView", e.HideStartView = "HideStartView", e.ChangePlayerSkinCompleted = "ChangePlayerSkinCompleted", 
        e.BossHPChange = "BossHPChange", e.BulletChange = "BulletChange", e.HostageDie = "HostageDie";
    }(t || (t = {}));
    var n, i, a = {
        showAD: "showAD",
        doShare: "doShare",
        watchADComplete: "watchADComplete",
        watchADExit: "watchADExit",
        showBanner: "showBanner",
        loadBanner: "loadBanner",
        loadBannerError: "loadBannerError",
        loadVideoError: "loadVideoError",
        Login: "Login",
        newLogin: "newLogin",
        LoginFail: "LoginFail",
        videoSuccess: "videoSuccess",
        gameStart: "gameStart",
        loadRes: "loadRes",
        showStart: "showStart",
        MyRecommendJump: "自有产品导出",
        BattleInfo: "battleInfo",
        BattleEnd: "BattleEnd",
        BannerJump: "BannerJump",
        showEgg: "showEgg",
        hitedEgg: "hitedEgg"
    };
    !function(e) {
        e[e.Wechat = 1] = "Wechat", e[e.Oppo = 2] = "Oppo", e[e.QQ = 7] = "QQ", e[e.TouTiao = 9] = "TouTiao", 
        e[e.Qutoutiao = 11] = "Qutoutiao";
    }(n || (n = {})), function(e) {
        e[e.Normal = 1] = "Normal", e[e.Check = 2] = "Check", e[e.Fission = 3] = "Fission";
    }(i || (i = {}));
    var s, o, r, l = [ {
        imgUrl: "",
        shareContent: "神狙等你来领取，快打开！"
    } ], h = {
        sRecommend: !0,
        acv: "",
        ttacv: "",
        qqacv: "",
        vsAllCount: 60,
        vsFailShareCount: 60,
        tRecommend: !0,
        tIosRecommend: !0,
        showInAd: !0,
        attrAd: !0,
        eInfo: {
            onLine: 180,
            dayGame: 3
        },
        taskAd: !0,
        showInADC: 3,
        showCheckBox: 3,
        bTimer: 90,
        bCount: 2,
        showHdStart: 1,
        showHdCount: 5,
        qqAppBox: !0,
        tuiInfo: [],
        qqADInfo: {
            bannerCount: 3,
            bannerTime: 90,
            eggInfo: {
                level: [],
                delay: 300,
                newCount: 300,
                newSettle: 1,
                eDelay: 1500,
                aCount: 1e3
            },
            eInfo: {
                onLine: 180,
                dayGame: 3
            },
            showListJump: !0
        },
        qSmall: !0,
        qqAppBoxLB: !1,
        small: !0,
        eggInfo: {
            level: [],
            delay: 300,
            newCount: 1,
            newSettle: 1,
            eDelay: 1500,
            aCount: 1e3
        },
        ttTuiInfo: [ {
            name: "绳索救援",
            pid: "tt8fd7f96a10fd7046",
            path: "?channel=lx_chl_hd",
            url: "https://res7.lexun99.com/tui/icon/linesave.png"
        }, {
            name: "暴走恐龙行动",
            pid: "ttee1798aa713d1228",
            path: "?channel=lx_chl_hd",
            url: "https://res7.lexun99.com/tui/icon/dins.png"
        }, {
            name: "冲吧自行车",
            pid: "ttb9f0cf4d26da4084",
            path: "?channel=lx_chl_hd",
            url: "https://res7.lexun99.com/tui/icon/flybike.png"
        }, {
            name: "海岛大作战",
            pid: "tt41bf3702de95ce54",
            path: "?channel=lx_chl_hd",
            url: "https://res7.lexun99.com/tui/icon/haidao3.png"
        }, {
            name: "僵尸攻城",
            pid: "tt79a80f15e682fa35",
            path: "?channel=lx_chl_hd",
            url: "https://res7.lexun99.com/tui/icon/jsgc3.png"
        }, {
            name: "三国大乐斗",
            pid: "tte21f94a27d355619",
            path: "?channel=lx_chl_hd",
            url: "https://res7.lexun99.com/tui/icon/sanguo3.png"
        }, {
            name: "疯狂战车",
            pid: "ttf0c7867a6fed6ce3",
            path: "?channel=lx_chl_hd",
            url: "https://res7.lexun99.com/tui/icon/zhanche.png"
        }, {
            name: "战斧英雄",
            pid: "tt7c800a3de3aaea3b",
            path: "?channel=lx_chl_hd",
            url: "https://res7.lexun99.com/tui/icon/axe.png"
        }, {
            name: "危城末日逃生",
            pid: "tt682b1e96f701e877",
            path: "?channel=lx_chl_hd",
            url: "https://res7.lexun99.com/tui/icon/weicheng.png"
        }, {
            name: "拯救小花",
            pid: "tt29875f3ab6add0ec",
            path: "?channel=lx_chl_hd",
            url: "https://res7.lexun99.com/tui/icon/zjxh.png"
        } ]
    }, c = {
        IgnoreShare: !1,
        Platform: n.Wechat,
        packageName: "com.lexun.killer",
        ClientVer: "1.1.6",
        Apiversion: "1",
        SupportOpenDomain: !0,
        State: i.Normal,
        showRecommend: !1,
        ShareTickTimer: 3e3,
        host: "https://game.lexun99.com/sanguo",
        Dev: !1,
        ShareInfoList: l,
        isLimitCity: !1,
        isLimitCityB: !1,
        appId: "wxccb926f1d8d32a20",
        closeLD: !1,
        isF: !1,
        vList: [],
        UseRemoteRes: !1,
        resHost: "",
        vsInfo: {
            type: 0,
            snum: 0,
            vnum: 0
        },
        vGameInfo: Object.assign({}, h),
        recoverData: !0,
        vAdCount: 0,
        isAnonymous: !1,
        aiCount: 27,
        videoTopics: [ "我要当枪王" ],
        hasAD: !0,
        hasLogin: !1,
        useZip: !1,
        tResVer: 2
    }, d = (n.TouTiao, i.Normal, Object.assign({}, h), n.QQ, i.Normal, Object.assign({}, h), 
    n.Oppo, i.Normal, Object.assign({}, h), n.Qutoutiao, i.Normal, Object.assign({}, h), 
    c);
    class p {}
    p.windowWidth = 0, p.windowHeight = 0, p.screenWidth = 0, p.screenHeight = 0, p.fetchingVideoAd = !1, 
    p.registerTime = 0, p.accountTime = 0, p.isNewPlayer = !1, p.firstTimePlayer = !1, 
    p.teachMode = !1, p.lastStartTime = 0, p.isOverDay = !1, p.severTime = 0, p.scene = 0, 
    p.registerDayString = "", p.canE = !1, p.chidState = !1, p.isGold = !1, p.isSettle = !1;
    class u {
        static getCurrentTimeStamp() {
            return Date.now();
        }
        static currentYear() {
            new Date();
            return new Date().getFullYear();
        }
        static currentMonth() {
            new Date();
            return new Date().getMonth() + 1;
        }
        static currentDate() {
            new Date();
            return new Date().getDate();
        }
        static currentHours() {
            return new Date().getHours();
        }
        static currentDay() {
            return new Date().getDay();
        }
        static isSameDay(e, t) {
            if (t - e >= 864e5) return !1;
            if (e - t >= 864e5) return !1;
            {
                let n = new Date();
                n.setTime(e);
                let i = new Date();
                if (i.setTime(t), n.getDate() === i.getDate()) return !0;
            }
            return !1;
        }
        static showTime(e) {
            let t = Math.floor(e / 60), n = e - 60 * t, i = "" + t;
            10 > t && (i = "0" + t);
            let a = "" + n;
            return 10 > n && (a = "0" + n), i + ":" + a;
        }
        static isToday(e) {
            return this.isSameDay(e, Date.now());
        }
        static timestampToDay(e) {
            var t = new Date(e);
            return t.getFullYear() + "-" + ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-") + (t.getDate() + " ");
        }
    }
    class g {
        static setBoolValue(e, t) {
            e && Laya.LocalStorage.setItem(e, t ? "1" : "0");
        }
        static getBoolValue(e) {
            if (e) {
                let t = Laya.LocalStorage.getItem(e);
                if (null !== t) return "1" === t;
            }
            return !1;
        }
        static setNumberValue(e, t) {
            e && Laya.LocalStorage.setItem(e, t + "");
        }
        static getNumberValue(e) {
            if (e) {
                let t = Laya.LocalStorage.getItem(e);
                if (null !== t) return parseFloat(t) || 0;
            }
            return 0;
        }
        static setStringValue(e, t) {
            e && Laya.LocalStorage.setItem(e, t);
        }
        static getStringValue(e) {
            if (e) {
                return Laya.LocalStorage.getItem(e) || "";
            }
            return "";
        }
        static setDataValue(e, t) {
            e && Laya.LocalStorage.setJSON(e, t);
        }
        static getDataValue(e) {
            if (e) {
                return Laya.LocalStorage.getJSON(e) || null;
            }
            return null;
        }
    }
    class m {
        static getGameConfig() {
            let e = m.RES_GAME_DATA;
            return  [ {
                url: e,
                type: Laya.Loader.JSON
            } ];
        }
        static getGameRes() {
            return [ {
                url: m.RES_COMMON_CONFIG,
                type: Laya.Loader.ATLAS
            }, {
                url: m.RES_SKIN_CONFIG,
                type: Laya.Loader.ATLAS
            }, {
                url: m.RES_GAME_CONFIG,
                type: Laya.Loader.ATLAS
            }, {
                url: m.RES_BG_1,
                type: Laya.Loader.IMAGE
            }, {
                url: m.RES_BG_2,
                type: Laya.Loader.IMAGE
            }, {
                url: m.RES_BOSS_2,
                type: Laya.Loader.IMAGE
            }, {
                url: m.RES_BOSS_3,
                type: Laya.Loader.IMAGE
            }, {
                url: m.RES_BOSS_4,
                type: Laya.Loader.IMAGE
            }, {
                url: m.RES_BOSS_5,
                type: Laya.Loader.IMAGE
            }, {
                url: m.RES_EMTION_1,
                type: Laya.Loader.IMAGE
            }, {
                url: m.RES_EMTION_2,
                type: Laya.Loader.IMAGE
            }, {
                url: m.RES_EMTION_3,
                type: Laya.Loader.IMAGE
            } ];
        }
    }
    m.RES_COMMON_CONFIG = "res/atlas/common.atlas", m.RES_SKIN_CONFIG = "res/atlas/skin.atlas", 
    m.RES_GAME_CONFIG = "res/atlas/game.atlas", m.RES_GAME_DATA = "res/data/gameData.json", 
    m.RES_BG_1 = "tex/bg_1.jpg", m.RES_BG_2 = "tex/bg_2.jpg", m.RES_BOSS_2 = "tex/boss2.jpg", 
    m.RES_BOSS_3 = "tex/boss3.jpg", m.RES_BOSS_4 = "tex/boss4.jpg", m.RES_BOSS_5 = "tex/boss5.jpg", 
    m.RES_EMTION_1 = "tex/emotion1.png", m.RES_EMTION_2 = "tex/emotion2.png", m.RES_EMTION_3 = "tex/emotion3.png";
    class y {
        static getRadian2(e, t, n, i) {
            let a = n - e, s = i - t;
            return Math.atan2(s, a);
        }
        static getRandom(e, t) {
            if (e == t) return e;
            var n = Math.random();
            return Math.floor(n * t + (1 - n) * e + n);
        }
        static getRandomItem(e) {
            if (e && e.length) {
                let t = y.getRandom(0, e.length - 1);
                return t > e.length - 1 && (t = 0), e[t];
            }
            return null;
        }
        static getAngle(e, t, n, i) {
            var a = n - e, s = i - t;
            if (0 == s) return a > 0 ? 0 : 180;
            var o = 180 * Math.atan(a / s) / Math.PI;
            return s < 0 && (o = a < 0 ? 180 + Math.abs(o) : 180 - Math.abs(o)), o = 270 - o;
        }
        static getDistance(e, t, n, i) {
            var a = n - e, s = i - t;
            return Math.sqrt(a * a + s * s);
        }
        static getDistanceSqr(e, t, n, i) {
            var a = n - e, s = i - t;
            return a * a + s * s;
        }
        static degToRad(e) {
            return e * Math.PI / 180;
        }
        static radToDeg(e) {
            return 180 * e / Math.PI;
        }
        static isCircleCollision(e, t, n, i, a, s) {
            var o = e - i, r = t - a, l = n + s;
            return o * o + r * r < l * l;
        }
        static clamp(e, t, n) {
            return e < t ? t : e > n ? n : e;
        }
        static nextNumber(e, t) {
            if (e == t) return e;
            var n = Math.random();
            return Math.floor(n * t + (1 - n) * e + n);
        }
        static validPos(e, t, n, i, a, s) {
            var o = e - n;
            if (o < -a || o > a) return !1;
            var r = t - i;
            return !(r < -s || r > s);
        }
        static getInt(e) {
            return Math.floor(e);
        }
        static clearDictionary(e) {
            for (var t in e) delete e[t];
        }
        static getCos(e) {
            return e < 0 && (e += 360), e = Math.floor(e % 360), this.cosVals[e];
        }
        static getSin(e) {
            return e < 0 && (e += 360), e = Math.floor(e % 360), this.sinVals[e];
        }
        static ptInRect(e, t, n, i, a, s, o = 0) {
            return !(e + o < n || e - o > n + a || t + o < i || t - o > i + s);
        }
        static initSinCosVal() {
            this.sinVals = {}, this.cosVals = {};
            for (var e = 0; e < 360; e++) {
                var t = e * Math.PI / 180;
                this.cosVals[e] = Math.cos(t), this.sinVals[e] = Math.sin(t);
            }
        }
        static getTidyAngle(e) {
            return .01 * Math.floor(100 * e % 36e3);
        }
    }
    y.cosVals = {}, y.sinVals = {}, y.rad1Angle = Math.PI / 180, y.angle1rad = 180 / Math.PI;
    class f {
        constructor() {
            this.videoCfgData = null, this.bannerCfgData = null, this.signCfgData = {}, this.gunCfgData = {}, 
            this.roleCfgData = {}, this.randomBannerCfgData = null, this.signRed = !0, this.ainameCfgData = {}, 
            this.pattersCfgData = {}, this.signDaynfo = "signDaynfo", this.maxUserGrade = 0, 
            this.levelConfig = {
                1: [ "p_3_1", "p_4_1" ],
                2: [ "p_3_3", "p_5_1" ],
                3: [ "p_4_2", "p_5_2" ],
                4: [ "p_8_4", "p_3_2" ],
                5: [ "p_6_4", "p_8_3" ],
                6: [ "p_6_5", "p_9_1" ],
                7: [ "p_6_1", "p_9_2" ],
                8: [ "p_5_4", "p_3000_2" ],
                9: [ "p_510_1", "p_10_2" ],
                11: [ "p_16_1", "p_9_2" ],
                12: [ "p_6_3", "p_8_4" ],
                13: [ "p_511_1", "p_5_2" ],
                14: [ "p_3000_2", "p_6_5" ],
                15: [ "p_8_3", "p_5_4" ],
                16: [ "p_9_2", "p_3_3" ],
                17: [ "p_5_2", "p_6_5" ],
                18: [ "p_6_3", "p_6_5" ],
                19: [ "p_4_1", "p_6_1" ],
                21: [ "p_3000_2", "p_6_4" ],
                20: [ "p_11_1", "p_10_4" ]
            }, this.loadData(), this.signRed = !this.todayIsSigned(), Laya.timer.loop(1e4, this, this.checkOverDay);
        }
        static get Instance() {
            return null === f._instance && (f._instance = new f()), f._instance;
        }
        loadData() {
            let e = m.RES_GAME_DATA;
            d.UseRemoteRes && (e = "/" + e);
            let n = Laya.loader.getRes(e);
            // n = this.processData(t || "");
            // console.log("loadData", JSON.stringify(n));
            if (n) {
                if (this.videoCfgData = n.videoShareCfg, this.bannerCfgData = n.bannerCfg, ct.IsQutoutiao() && this.bannerCfgData.push({
                    pos: 2,
                    name: "游戏界面",
                    adunit: "adunit-295e8d695c6018da",
                    hAlign: 1,
                    vAlign: 2,
                    w: 375,
                    xOffset: 0,
                    yOffset: 0,
                    canRandom: !0,
                    tadunit: "",
                    qadunit: "c1c966d4482233e456d8a57ecf5c7c3a"
                }), this.signCfgData = n.sign, this.gunCfgData = n.gunCfg, this.roleCfgData = n.roleCfg, 
                this.pattersCfgData = n.patternsConfig, this.bannerCfgData && this.bannerCfgData.length) {
                    this.randomBannerCfgData = [];
                    for (let e in this.bannerCfgData) {
                        let t = this.bannerCfgData[e];
                        this.randomBannerCfgData.push(t);
                    }
                }
                this.ainameCfgData = n.aiName;
            }
            Laya.Loader.clearRes(e), this.init();
        }
        init() {
            y.initSinCosVal();
        }
        getVideoShareCfg(e) {
            if (null == this.videoCfgData) return null;
            for (var t = 0; t < this.videoCfgData.length; t++) if (this.videoCfgData[t].pos == e) return this.videoCfgData[t];
            return null;
        }
        getBannerCfg(e) {
            if (null == this.bannerCfgData) return null;
            for (var t = 0; t < this.bannerCfgData.length; t++) if (this.bannerCfgData[t].pos == e) return this.bannerCfgData[t];
            return null;
        }
        getAIPlayerInfo(e) {
            return e >= 0 && e < this.ainameCfgData.length ? this.ainameCfgData[e] : (console.error("ai name is null,index", e), 
            null);
        }
        getAINameCount() {
            return null == this.ainameCfgData ? 0 : this.ainameCfgData.length;
        }
        saveAutoShowSign() {
            let e = g.getDataValue(this.signDaynfo) || {}, t = new Date().getDate();
            e.showDay = t, g.setDataValue(this.signDaynfo, e);
        }
        doSignAction() {
            let e = g.getDataValue(this.signDaynfo);
            if (e) {
                let t = new Date(), n = e.signDay + 1;
                e.signDay = n;
                let i = t.getTime();
                e.ts = i;
            }
            this.signRed = !1, g.setDataValue(this.signDaynfo, e);
        }
        getSignDayInfo() {
            let e = 0, t = 0, n = g.getDataValue(this.signDaynfo), i = !1, a = new Date(), s = a.getDate(), o = 0, r = 0;
            if (n) {
                if (t = n.showDay, r = n.ts, i = !0, n.ts > 0) {
                    let t = new Date();
                    if (t.setTime(n.ts), a.getTime() < n.ts + 864e5 && s == t.getDate()) o = 1, e = n.signDay, 
                    i = !1; else {
                        (t = new Date()).setTime(n.ts + 864e5), s == t.getDate() && (e = n.signDay, i = !1);
                    }
                }
            } else i = !0;
            i && ((n = {}).signDay = e, n.showDay = t, n.ts = r, g.setDataValue(this.signDaynfo, n));
            let l = {
                signDay: e,
                signed: o,
                show: s == t ? 1 : 0
            };
            return this.signRed = !o, l;
        }
        processData(e) {
            let t = this.uncompile(e);
            return JSON.parse(t);
        }
        uncompile(e) {
            for (var t = String.fromCharCode(e.charCodeAt(0) - 1), n = 1; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) - 1);
            return t;
        }
        checkOverDay() {
            at.checkOverDay() && e.Instance.event(t.OverDayEvent);
        }
        getRandomBannerCfg() {
            let e = this.randomBannerCfgData.length, t = Math.floor(Math.random() * (e - 1));
            if (t >= 0 && t < e) {
                let e = this.randomBannerCfgData[t];
                if (e && e.adunit && e.adunit.length) return this.randomBannerCfgData.splice(t, 1), 
                this.randomBannerCfgData.push(e), e;
            }
            return null;
        }
        isOverSeverTime(e = 7200) {
            if (p.severTime > 0) {
                let t = new Date().getTime();
                if (Math.abs(t - p.severTime) < 1e3 * e) return !1;
            }
            return !0;
        }
        todayIsSigned() {
            return this.getSignDayInfo().signed > 0;
        }
        getSegmentInfo(e, t) {
            return this.pattersCfgData && this.pattersCfgData[e] && this.pattersCfgData[e].segments && this.pattersCfgData[e].segments[t] ? this.pattersCfgData[e].segments[t] : null;
        }
        getLevelConfig(e) {
            return this.levelConfig ? this.levelConfig[e + 1] : null;
        }
        isBossLevel(e) {
            return (e + 1 + 10) % 20 == 0;
        }
        getLevelBg(e) {
            let t = e + 10;
            return Math.floor(t / 20) % 3 + 1;
        }
        getBossSkin(e) {
            let t = e + 10;
            return Math.floor(t / 20) % 5 + 1;
        }
        getCameraColor(e) {
            let t = e + 10, n = Math.floor(t / 20) % 5 + 1;
            return 1 === n ? new Laya.Vector4(233 / 255, 85 / 255, 69 / 255, 0) : 3 === n ? new Laya.Vector4(36 / 255, 38 / 255, 44 / 255, 0) : new Laya.Vector4(46 / 255, 170 / 255, 211 / 255, 0);
        }
        getGunInfo(e) {
            for (let t = 0; t < this.gunCfgData.length; t++) {
                let n = this.gunCfgData[t];
                if (n.id === e) return n;
            }
            return null;
        }
    }
    f.isLarger = !1, f._instance = null;
    class I {
        constructor() {
            this.uid = 0, this.nickName = "UESR", this.avatar = "", 
            this.token = "", this.session_key = "", this.openid = "", this.authorized = !1, 
            this.city = "", this.gender = 0, this.playerInfo = {}, this.isDefaultData = !0;
        }
        setUid(e) {
        }
        loadCacheData() {
            this.uid = 0;
            var e = {};
            try {
                let u = Laya.LocalStorage.getItem("user_0user_0");
                e = JSON.parse(u)||{};
            } catch (error) {
                e = {};
            }
            console.log("usr loadCacheData",e);

            var e = null;
            for (var t in e) this[t] = e[t];
            let n = Laya.LocalStorage.getJSON("attributeInfo");
            n && n.length > 0 && (this.playerInfo.attributeInfo = n);
            let i = Laya.LocalStorage.getJSON("skinArr1");
            i && i.length > 0 && (this.playerInfo.skinArr1 = i);
            return true
        }
        saveToStorage() {
            Laya.LocalStorage.setItem("user_0user_0", JSON.stringify(this));
            Laya.LocalStorage.setJSON("skinArr1", [].concat(this.playerInfo.skinArr1 || [ [], [] ])), 
            Laya.LocalStorage.setJSON("attributeInfo", [].concat(this.playerInfo.attributeInfo || []));
        }
        resumePlayerInfoDefault() {
            this.playerInfo = {
                diamond: 0,
                gold: 0,
                level:0,
            };
        }
        getPlayerInfo() {
            return this.playerInfo;
        }
    }
    class S {
        constructor(e) {
            this.httpCallback = null, this.url = "", this.httpCallback = e, this.url = "", this.http = new Laya.HttpRequest(), 
            this.http.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress), this.http.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete), 
            this.http.once(Laya.Event.ERROR, this, this.onHttpRequestError);
        }
        sendPost(e, t, n) {
            var i = this.parsToStr(t);
            this.url = e + "/" + n, this.http.send(this.url, i, "post", "json");
        }
        sendGet(e, t, n = "json", i = null) {
            var a = this.parsToStr(t);
            this.url = e + "?" + a, this.http.send(this.url, null, "GET", n, i);
        }
        sendGetWithUrl(e) {
            this.url = e, this.http.send(e, null, "get", "json");
        }
        sendPostWithUrl(e, t, n = "json") {
            this.url = e, this.http.send(e, t, "post", n || "json");
        }
        parsToStr(e) {
            if (Array.isArray(t)) {
                for (var t = "", n = 0; n < e.length; n++) t += e[n][0] + "=" + e[n][1], n < e.length - 1 && (t += "&");
                return t;
            }
            return this.parseParams(e);
        }
        onHttpRequestProgress(e) {}
        onHttpRequestComplete(e) {
            if (this.httpCallback) {
                {
                    let e = this.http;
                    if (e._http && e._http.getResponseHeader) {
                        let t = new Date();
                        if (!ct.IsQutoutiao()) {
                            let n = e._http.getResponseHeader("Date");
                            t = new Date(n);
                        }
                        let n = t.getTime();
                        n > 0 && (p.severTime = n);
                    }
                }
                this.httpCallback(null, this.http.data);
            }
        }
        onHttpRequestError(e) {
            console.error(e + " url:" + this.url), this.httpCallback && this.httpCallback(e, null);
        }
        parseParams(e) {
            var t = "";
            if (null != e) {
                for (var n in e) t += n + "=" + e[n] + "&";
                t = t.substring(0, t.length - 1);
            }
            return t;
        }
    }
    !function(e) {
        e[e.OK = 1e4] = "OK", e[e.FAIL = 10002] = "FAIL", e[e.LOGIN_PAR_ERROR = 1001] = "LOGIN_PAR_ERROR", 
        e[e.ENTRY_TOKEN_EXPIRE = 10005] = "ENTRY_TOKEN_EXPIRE", e[e.ENTRY_USER_NOT_EXIST = 10011] = "ENTRY_USER_NOT_EXIST";
    }(s || (s = {}));
    class w {
        constructor() {
            this.packageName = d.packageName, this.mt = d.Platform, this.apiversion = d.Apiversion, 
            this.version = d.ClientVer, this.sessionID = "";
        }
        static get Instance() {
            return null === w._instance && (w._instance = new w()), w._instance;
        }
        addTsParas(e, t) {
            return e;
        }
        qgPostUrl(e) {
            return ct.isQG || ct.IsQutoutiao() ? "/data" + e : e;
        }
        qgPostData(e) {
            return (ct.isQG || ct.IsQutoutiao()) && (e = "data=" + JSON.stringify(e)), e;
        }
        loginUser(e) {
            // let t = Object.assign(e, {
            //     packageName: this.packageName,
            //     inviteCode: _.Instance.inviteCode || ""
            // });
            // return console.log("loginUser:", t), this.post(this.qgPostUrl("/login"), t);
        }
        login2User(e) {
            let t = Object.assign(e, {
                packageName: this.packageName,
                inviteCode: _.Instance.inviteCode || ""
            });
            return console.log("loginUser:", t), this.post(this.qgPostUrl("/2/login"), t);
        }
        getUserInfo(e = "", t = 0, n = "") {
        }
        getRankeList(e = 0) {
        }
        getAppConfig() {
        }
        updateInfo(e) {
        }
        updataGameData(e) {
            let t = {
                b: _.Instance.gold.base,
                c: _.Instance.gold.power
            }, n = {
                b: _.Instance.gold,
                c: 1
            };
            return this.updateInfo({
                gamedata: e,
                gold: t,
                diamond: 0,
                cgold: n,
                cpower: {
                    b: 0,
                    c: 1
                },
                militaryId: 0,
                plunderNum: 0,
                stage: 0
            });
        }
        getRankList(e = 6) {
            return this.get("/hd/RankList", {
                packageName: this.packageName,
                type: e
            });
        }
        buildUrl(e) {
            return d.host + e;
        }
        buildParas(e, t) {
            let n = e;
            return t && (n = Object.assign(e, {
                sessionID: this.sessionID,
                apiversion: this.apiversion,
                version: this.version,
                mt: this.mt
            })), n;
        }
        get(e, t = {}, n = !0) {
            let i = this.buildUrl(e), a = this.buildParas(t, n);
            return new Promise((e, t) => {
                new S((n, i) => {
                    this.handleResult(n, i, e, t);
                }).sendGet(i, a);
            });
        }
        post(e, t = {}, n = !0) {
            let i = this.buildUrl(e), a = this.buildParas(t, n);
            return new Promise((e, t) => {
                new S((n, i) => {
                    this.handleResult(n, i, e, t);
                }).sendPostWithUrl(i, this.qgPostData(a));
            });
        }
        handleResult(e, t, n, i) {
            if (e) return ct.Instance.report("NetworkError", {
                error: e
            }), void i(e);
            t.code === s.OK ? n(t.result) : (ct.Instance.report("NetworkError", {
                code: t.code
            }), i(t));
        }
        yunLogin(e, t) {
            "undefined" != typeof wx && wx.cloud ? (wx.cloud.init(), wx.cloud.callFunction({
                name: "login",
                data: {},
                success: e => {
                    console.log("susss"), console.log(e), e.result && t && t(e.result.userInfo);
                },
                fail: e => {
                    console.log(e), t && t();
                }
            })) : (console.log("error"), t && t());
        }
    }
    w._instance = null;
    class _ {
        constructor() {
            this.inviteCode = "", this.headIconUrl = "", this.logined = !1, this.loginError = !1, 
            this.successLoginCb = null, this.checkUpdateInfoTime = 0, this.updateInfoData = null, 
            this.isReadData = !1, this.lastSendDataTime = 0, this.saveDataTime = 240, this.flushSaveDataTime = 20, 
            this.m_onlineStartTime = 0, this.user = new I(), this.headIconUrl = "", 
            // Laya.timer.loop(1e3 * this.flushSaveDataTime, this, this.doSaveGameData), 
            e.Instance.on(t.OverDayEvent, this, this.resetByOverDay);
        }
        static get Instance() {
            return null == _._instance && (_._instance = new _()), _._instance;
        }
        resetByOverDay() {
            let e = Laya.Browser.now(), t = this.user.playerInfo;
            t.loginDate = e, t.dayBattleCount = 0;
        }
        doSaveGameData() {
            this.realSaveData();
        }
        static dataKey() {
            return "data_" + d.packageName;
        }
        realSaveData() {
            this.user.saveToStorage();
            console.log("doSaveGameData",this.user)
        }
        static saveGameData() {
             _.Instance.doSaveGameData(e, t);
        }
        readDataInfo(e) {
            console.log("readDataInfo ---= ", e),
            // if (console.log("Taylor --- data3= ", e), this.isReadData) return;
            d.recoverData || (e = null),
             this.user.isDefaultData ? (
            e ? (_.initDefaultBBTData(_.fyhdData), _.Instance.initReadBBTData(e, _.fyhdData), 
            this.user.playerInfo = Object.assign({}, e)) : _.initDefaultBBTData(_.fyhdData)) : (_.initDefaultBBTData(_.fyhdData), 
            _.cache_data && _.Instance.initReadBBTData(_.cache_data, _.fyhdData)), this.user.isDefaultData = !1, 
            this.isReadData = !0;
            let t = this.user.playerInfo.loginDate;
            !1 === u.isToday(t) && this.resetByOverDay(), this.doSaveGameData();
        }
        static readBBTDataInfo() {
            let e = Laya.LocalStorage.getItem(_.dataKey()), t = null;
            return e && "" !== e && (t = JSON.parse(e)), t;
        }
        static readBBTData() {
            let e = _.readBBTDataInfo();
            this.cache_data = e || null;
        }
        get gold() {
            return platform.getInstance().getStorageSync("gold") || 0
        }
        set gold(n) {
            platform.getInstance().setStorageSync("gold",n);
            e.Instance.event(t.PlayerGoodsUpdate);
        }
        // get playerInfo() {
        //     return this.user && !this.user.playerInfo && (this.user.playerInfo = {}), this.user.playerInfo;
        // }
        updateWithChangeData(n) {
            if (!this.user.playerInfo) return;
            let i = this.user.playerInfo;
            for (let e in n) i[e] += n[e];
            e.Instance.event(t.PlayerGoodsUpdate), this.doSaveGameData();
        }
        get battleCount() {
            return this.user.playerInfo.battleCount || 0;
        }
        set battleCount(e) {
            this.user.playerInfo.battleCount = e || 0;
        }
        get dayBattleCount() {
            return this.user.playerInfo.dayBattleCount || 0;
        }
        set dayBattleCount(e) {
            this.user.playerInfo.dayBattleCount = e || 0;
        }
        getAttributeInfo(e) {
            return (this.user.playerInfo.attributeInfo || [])[e] || {
                lv: 0,
                videoNum: 0,
                videoLastLv: 0
            };
        }
        setAttributeInfo(e, t) {
            var n = this.user.playerInfo.attributeInfo || [];
            n[e] = t, this.user.playerInfo.attributeInfo = n;
        }
        get grade() {
            return this.user.playerInfo.grade || 1;
        }
        set grade(e) {
            this.user.playerInfo.grade = e;
        }
        get onlineStartTime() {
            return this.m_onlineStartTime || 0;
        }
        set onlineStartTime(e) {
            this.m_onlineStartTime = e;
        }
        get onlineTime() {
            return this.user.playerInfo.onlineTime || 0;
        }
        set onlineTime(e) {
            this.user.playerInfo.onlineTime = e;
        }
        get level() {
            return platform.getInstance().getStorageSync("level") || 0
        }
        set level(e) {
            platform.getInstance().setStorageSync("level",e);
        }
        get isGold() {
            return console.log("Taylor ---get -value= " + this.user.playerInfo.isGold),this.user.playerInfo.isGold || 0;
        }
        set isGold(e) {
            this.user.playerInfo.isGold = e;
        }
        set levelInfo(e) {
            this.user.playerInfo.levelInfo = e;
        }
        get levelInfo() {
            return this.user.playerInfo.levelInfo || {
                start: null,
                seg: null,
                end: null
            };
        }
        get dayNotTry() {
            return this.user.playerInfo.dayNotTry || !1;
        }
        set dayNotTry(e) {
            this.user.playerInfo.dayNotTry = e;
        }
        get levelPattens() {
            return this.user.playerInfo.levelPattens || (this.user.playerInfo.levelPattens = {}), this.user.playerInfo.levelPattens;
        }
        static initDefaultBBTData(e) {
            e.loginDate = Number(Laya.Browser.now()), 
            e.saveTime = Number(Laya.Browser.now()), e.onlineTime = 0;
        }
        initReadBBTData(e, t, n = !0) {
            let i = e;
            if (i.loginDate && (t.loginDate = i.loginDate), i.saveTime && (t.saveTime = i.saveTime), 
            i.onlineTime && (t.onlineTime = i.onlineTime), n) {
                let e = i.loginDate;
                0 == u.isToday(e) && _.Instance.clearOverDayInfo();
            }
        }
        clearOverDayInfo() {
            let e = Laya.Browser.now();
            _.fyhdData.loginDate = e;
        }
    }
    _._instance = null, _.taskRed = !1, _.fyhdData = {}, _.cache_data = null;
    class v {
        constructor() {
            this.sdkParams = null;
        }
        static get Instance() {
            return null === v._instance && (v._instance = new v()), v._instance;
        }
        clear() {}
    }
    v._instance = null;
    class C extends Laya.Script {
        constructor() {
            super(...arguments), this.isTest = !1, this.isOpen = !0, this.recommendData = null, 
            this.tuiInfo = [], this.openId = "", this.isValueuser = !1, this.is_white = 0;
        }
        static get Instance() {
            return null == C._instance && (C._instance = new C()), C._instance;
        }
        initSDK() {
            // this.isTest && this.onFyhdTuiInfo();
        }
        onFyhdTuiInfo() {
        }
        loginData() {
            if (!this.isTest && this.isOpenSDK() && "" != this.openId) {
                var e = {
                    openid: this.openId
                };
                this.fyhdSdk.getFyhd().loginData(e, e => {
                    console.log("Taylor --- loginData - res= ", e);
                });
            }
        }
        valueuser() {
            if (!this.isTest && this.isOpenSDK() && !this.isValueuser && "" != this.openId) {
                var e = {
                    openid: this.openId
                };
                this.isValueuser = !0, this.fyhdSdk.getFyhd().valueuser(e, e => {
                    console.log("Taylor --- valueuser - res= ", e);
                });
            }
        }
        getFyhdUserInfo() {
            this.isTest || this.isOpenSDK() && this.fyhdSdk.getFyhd().getFyhdUserInfo(null, !1, n => {
                console.log("Taylor --- getFyhdUserInfo - res= ", n), n && n.result && n.result.user ? (this.openId = n.result.user.openid || "", 
                _.Instance.user.openid = this.openId, 1 != this.is_white && this.isWhiteConfig(), 
                this.loginData(), v.Instance.doDefaultLoginAction(), console.log("Taylor --- KUIManager.Instance.isUIOpen(KUICConfig.Game)= " + Wt.Instance.isUIOpen(zt.Game)), 
                !this.isValueuser && Wt.Instance.isUIOpen(zt.Game) && (console.log("Taylor --- getFyhdUserInfo - 慢了"), 
                this.valueuser())) : e.Instance.event(t.userLoginFinish, {
                    logined: !1
                });
            });
        }
        isWhiteConfig() {
            this.isTest || this.isOpenSDK() && this.fyhdSdk.getFyhd().whiteConfig(e => {
                console.log("Taylor --- isWhiteConfig - res= ", e), e.data.is_white ? this.is_white = 1 : this.is_white = 0, 
                console.log("Taylor --- this.is_white= ", this.is_white), Laya.LocalStorage.setItem("is_white", this.is_white.toString());
            });
        }
        getIsWhite() {
            return this.is_white;
        }
        advertisement(e) {
            if (!this.isTest && this.isOpenSDK() && "" != this.openId) {
                var t = {
                    ad_type: e,
                    openid: this.openId
                };
                this.fyhdSdk.getFyhd().advertisement(t, e => {
                    console.log("Taylor --- advertisement - res= ", e);
                });
            }
        }
        bannerClickCheck(e) {
            null != e && (8 == e.targetAction || 9 == e.targetAction || 10 == e.targetAction) && e.targetPagePath.length > 50 && this.advertisement("banner");
        }
        shareRecommend() {
            this.isTest || this.isOpenSDK() && this.fyhdSdk.getFyhd().shareRecommend({}, e => {
                console.log("Taylor --- shareRecommend + res= ", e), e && e.data && (this.recommendData = e.data, 
                this.createTuiInfo(e.data));
            });
        }
        createTuiInfo(e) {
            if (e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    let i = e[n];
                    if (2 == i.jump_type) continue;
                    let a = i.togame_name, s = i.to_appid, o = i.jump_path, r = i.icon;
                    0 == i.jump_type && (s = i.platform_appid), this.tuiInfo[t] = {
                        name: a,
                        pid: s,
                        path: o,
                        url: r
                    }, t++;
                }
            }
        }
        sharePlay(e) {
            if (!this.isTest && this.isOpenSDK() && "" != this.openId) {
                var t = {
                    openid: this.openId,
                    to_appid: e
                };
                this.fyhdSdk.getFyhd().sharePlay(t, e => {
                    console.log("Taylor --- sharePlay - res= ", e);
                });
            }
        }
        isOpenSDK() {
            return false;
        }
        canTouchMis() {
            return !0;
        }
    }
    C._instance = null;
    class L {
        constructor() {
            this.recorder = null, this.videoPath = null, this.recording = !1, this.doKilled = !1, 
            this.pausing = !1, this.recordTime = 0, this.maxRecordTime = 0, ct.IsTouTiao() && "undefined" != typeof wx && (this.recorder = wx.getGameRecorderManager(), 
            this.initRecord());
        }
        static get Instance() {
            return null == L._instance && (L._instance = new L()), L._instance;
        }
        start(n = 120) {
            this.recorder && (this.recording && (this.recorder.stop(), this.recording = !1, 
            this.pausing = !1), this.recorder.start({
                duration: n
            }), this.maxRecordTime = n, this.recording = !0, this.doKilled = !1, this.pausing = !1, 
            Laya.timer.clearAll(this), this.recordTime = 0, Laya.timer.loop(1e3, this, this.updateRecordTime), 
            e.Instance.event(t.UpdateRecordBtn));
        }
        updateRecordTime() {
            this.recording && !this.pausing && (this.recordTime += 1, this.recordTime + 1 >= this.maxRecordTime && this.stop());
        }
        canShowShareVideo() {
            return !!this.videoPath;
        }
        pause() {
            this.recorder && this.recorder.recording && (this.recorder.pause(), this.pausing = !0);
        }
        resume() {
            this.recorder && this.recorder.recording && this.pausing && this.recorder.resume();
        }
        stop() {
            this.recorder && this.recording && (Laya.timer.clearAll(this), this.recorder.stop(), 
            this.recording = !1, e.Instance.event(t.UpdateRecordBtn));
        }
        initRecord() {
            this.recorder && (this.recorder.onStart(e => {
                console.log("recorder onStart", e);
            }), this.recorder.onStop(e => {
                let t = e.videoPath;
                console.log("recorder onStop", t), this.recordTime <= 3 && (t = null), this.videoPath = t;
            }), this.recorder.onPause(() => {
                console.log("recorder onPause");
            }), this.recorder.onResume(() => {
                console.log("recorder onResume");
            }), this.recorder.onError(e => {
                console.log("recorder onError", e);
            }), this.recorder.onInterruptionBegin(e => {
                console.log("recorder  onInterruptionBegin", e);
            }), this.recorder.onInterruptionEnd(e => {
                console.log("recorder   onInterruptionEnd", e);
            }));
        }
        shareVideo(e) {
            this.recording && this.stop(), console.log("shareVideo:", this.videoPath), ct.Instance.shareVideo(e);
        }
    }
    L._instance = null, function(e) {
        e[e.World_0 = 0] = "World_0", e[e.World_1 = 1] = "World_1", e[e.World_2 = 2] = "World_2", 
        e[e.World_3 = 3] = "World_3", e[e.World_4 = 4] = "World_4", e[e.World_5 = 5] = "World_5";
    }(o || (o = {}));
    class b extends Laya.Script3D {
        constructor() {
            super(...arguments), this.worlds = [], this.bosses = [];
        }
        onAwake() {}
        onStart() {}
        onDestroy() {}
        getWorldIndex() {
            return this._worldData.leveIndex;
        }
        getWorldId() {
            return o.World_0;
        }
        loadLevel() {
            let e = this.getWorldId();
            this.getWorld(e);
        }
        getWorld(e) {
            return null;
        }
        getLevelIndex(e) {}
        getWorldData() {
            return this._worldData;
        }
        getWorldStructure() {
            return this._structure[0];
        }
        getLevelPattern(e) {
            return null;
        }
        getCurrentLevelType() {
            return K.Simple;
        }
        structureLoaded(e, t) {}
        nextStage() {}
        structureToJson() {}
        save() {}
        Load() {}
    }
    b.WORLD_DATA = "world_data", b._instance = null;
    class k extends Laya.Script3D {
        constructor() {
            super(...arguments), this._scaler = 1;
        }
        onStart() {}
    }
    class T extends Laya.Script3D {
        constructor() {
            super(...arguments), this.walls = {}, this.windows = {}, this.floorHeight = 0, this.windowHeight = 0, 
            this.zOffset = 0, this.totalWidth = 0, this._lowestY = 0, this._id = o.World_0;
        }
        Generate() {}
        Generate2(e, t, n) {
            this.owner && et.Instance.loadWall("bg1").then(t => {
                let n = 10 * t.transform.getWorldLossyScale().x, i = Math.floor((Math.abs(e) + n) / n) + 1, a = (_.Instance.level, 
                f.Instance.getLevelBg(_.Instance.level)), s = null;
                if (2 !== a) {
                    let e = 3;
                    3 === a && (e = 2), s = et.Instance.getMat(`tex/bg_${e - 1}.jpg`);
                }
                for (let e = 0; e < i; e++) {
                    let i = t.clone();
                    i.transform.position = new Laya.Vector3(-e * n, 1.37, 8.6), s && i && i.meshRenderer && (i.meshRenderer.material = s), 
                    this.owner.addChild(i);
                }
            });
        }
        getOffset() {
            return null;
        }
        isWindowsReady(e) {}
        addWindow(e = 0) {}
        getFloorHeight(e) {}
        clear() {}
    }
    class B extends Laya.Script3D {
        constructor() {
            super(...arguments), this.enviromentObjects = [];
        }
        randomize() {}
    }
    class x extends Laya.Script3D {
        constructor() {
            super(...arguments), this.predefinedVariant = 0, this.alwaysExists = !1;
        }
        create() {}
    }
    class A extends Laya.Script3D {
        start() {}
        onEnable() {}
        checkAvailability() {}
    }
    class D extends Laya.Script3D {
        constructor() {
            super(...arguments), this.lives = 0, this.totalLives = 0, this._appeared = !1, this.projectilesThatHit = [], 
            this.alive = !0;
        }
        onShot(e, t) {
            this.projectilesThatHit.push(e);
        }
        onExplosion(e) {}
        onEnvHit(e, t) {}
        appear() {
            this._appeared = !0;
        }
        getLastProjectile() {
            return this.projectilesThatHit[this.projectilesThatHit.length - 1];
        }
        canHit(e) {
            return -1 === this.projectilesThatHit.indexOf(e);
        }
        isAlive() {
            return this.alive;
        }
        damage(e, t) {}
        damage2(e) {}
        kill() {}
    }
    class F {
        static getCommpentInHerit(e, t) {
            let n = e.getComponent(t);
            if (n) return n;
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                if (n = this.getCommpentInHerit(a, t)) return n;
            }
            return null;
        }
        static getCompentsInHerit(e, t, n = []) {
            let i = e.getComponents(t);
            i && i.forEach(e => {
                n.push(e);
            });
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                this.getCompentsInHerit(a, t, n);
            }
            return n;
        }
        static getNodeInHerit(e, t) {
            let n = e.getChildByName(t);
            if (n) return n;
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                if (n = this.getNodeInHerit(a, t)) return n;
            }
            return null;
        }
        static getNodesInHerit(e, t, n = []) {
            let i = e.getChildByName(t);
            i && n.push(i);
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                n = this.getNodesInHerit(a, t, n);
            }
            return n;
        }
        static getParentByName(e, t) {
            let n = e;
            for (;n && n.name !== t; ) n = n.parent;
            return n;
        }
    }
    class V {
        static subtract(e, t, n = null) {
            return !n && (n = new Laya.Vector3()), Laya.Vector3.subtract(e, t, n), n;
        }
        static add(e, t, n = null) {
            return !n && (n = new Laya.Vector3()), Laya.Vector3.add(e, t, n), n;
        }
        static normalized(e, t = null) {
            return !t && (t = new Laya.Vector3()), Laya.Vector3.normalize(e, t), t;
        }
        static scale(e, t, n = null) {
            return !n && (n = new Laya.Vector3()), Laya.Vector3.scale(e, t, n), n;
        }
        static transformLookAt(e, t, n = null) {
            e && (n || (n = new Laya.Vector3(), e.getUp(n)), e.lookAt(t, n));
        }
        static distance(e, t) {
            return Laya.Vector3.distance(e, t);
        }
        static getReflectVector(e, t) {
            Laya.Vector3.normalize(t, this.vecTemp1);
            let n = 2 * Laya.Vector3.dot(this.vecTemp1, e);
            return this.vecTemp2.x = n, this.vecTemp2.y = n, this.vecTemp2.z = n, Laya.Vector3.multiply(e, this.vecTemp2, this.vecTemp3), 
            Laya.Vector3.subtract(this.vecTemp1, this.vecTemp3, this.vecTemp2), this.vecTemp2.clone();
        }
        static addLen(e, t, n) {
            return Laya.Vector3.scale(t, n, this.vecTemp2), Laya.Vector3.add(e, this.vecTemp2, this.vecTemp3), 
            this.vecTemp3.clone();
        }
    }
    V.vecTemp1 = new Laya.Vector3(), V.vecTemp2 = new Laya.Vector3(), V.vecTemp3 = new Laya.Vector3(), 
    function(e) {
        e[e.HELP = 3] = "HELP", e[e.SAFE = 1] = "SAFE", e[e.DIE = 2] = "DIE";
    }(r || (r = {}));
    class E extends D {
        constructor() {
            super(...arguments), this.predefinedVariant = 0;
        }
        onAwake() {
            this._model = F.getNodeInHerit(this.owner, "hostage1"), this._animator = F.getCommpentInHerit(this._model, Laya.Animator), 
            this._enmiSprite = F.getNodeInHerit(this.owner, "emtionImage"), this._enmiAnimator = F.getCommpentInHerit(this._enmiSprite, Laya.Animator), 
            this.showEnmtion(r.HELP);
            let e = F.getCompentsInHerit(this.owner, Laya.Rigidbody3D);
            e && e && e.forEach(e => {
                e.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4;
            });
            let t = F.getCompentsInHerit(this.owner, Laya.PhysicsCollider);
            t && t && t.forEach(e => {
                e.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4;
            });
        }
        onStart() {}
        toggleDialog(e) {
            this._enmiSprite && (this._enmiSprite.active = e);
        }
        onExplosion(e) {
            this.kill();
        }
        onShot(e, t) {
            this.canHit(e) && (super.onShot(e, t), this.kill());
        }
        kill() {
            this.alive && (this.alive = !1, this.toggleDialog(!0), this.showEnmtion(r.DIE), 
            e.Instance.event(t.HostageDie));
        }
        doSafeAction() {
            this.showEnmtion(r.SAFE);
        }
        showEnmtion(e) {
            if (this._enmiSprite && this._enmiSprite.meshRenderer) {
                let t = et.Instance.getMat(`tex/emotion${e}.png`);
                t.albedoIntensity = 1, t.enableLighting = !1, t.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT, 
                this._enmiSprite.meshRenderer.material = t;
            }
            e === r.HELP ? this._animator && this._animator.play("Hostage_Idle") : e === r.DIE ? this._animator && this._animator.play("Death_Hit_Bot") : this._animator && this._animator.play("Hostage_Wave");
        }
    }
    class P extends x {
        constructor() {
            super(...arguments), this.hideDialog = !0;
        }
        create() {
            et.Instance.getHostage().then(e => {
                let t = e.clone();
                this.owner.addChild(t), t.transform.rotationEuler = new Laya.Vector3(0, -90, 0), 
                this._hostage = t.addComponent(E);
            });
        }
    }
    var M, R, U, O, N, H, G, Y, X, z, W, K, q, J, j, Q, $, Z, ee, te, ne, ie, ae, se, oe, re, le, he, ce, de = {
        Bgm: "music/bgm.mp3",
        Button: "music/click.mp3",
        Fail: "music/game_over.mp3",
        Headshot: "music/Headshot.mp3",
        cropGot: "music/crop_got.mp3",
        reload: "music/reload.mp3",
        boss_warn: "music/boss_warn.mp3",
        apc9shot1: "music/apc9shot1.mp3",
        footstep: "music/FootstepDefault09.wav",
        victory: "music/victory.mp3",
        onKill: "music/onKill.mp3",
        LevelUp: "music/LevelUp.mp3",
        Progress: "music/levelprogress.mp3",
        moneyNum: "music/moneynum.mp3",
        Explosion: "music/Explosion.mp3",
        Coin: "music/Kjj_coin.mp3",
        egg: "music/egg.mp3"
    };
    class pe {
        constructor() {
            this.curBgmName = null, this.canPlay = !0, this.init(), e.Instance.on(t.GetFocus, this, this.onGetFocus), 
            e.Instance.on(t.LostFocus, this, this.onLostFocus), this.curBgmName = null;
        }
        static get Instance() {
            return null == pe._instance && (pe._instance = new pe()), pe._instance;
        }
        init() {
            Laya.SoundManager.autoStopMusic = !1;
            var e = Laya.LocalStorage.getItem("musicVolume"), t = 1;
            null !== e && "" !== e && (t = parseFloat(e + "")), this.setMusicVolume(t), this.setMusicMute(0 == t);
            var n = Laya.LocalStorage.getItem("soundVolume"), i = 1;
            null !== n && "" !== n && (i = parseFloat(n)), this.setSoundVolume(i), this.setSoundMute(0 == i);
        }
        onLostFocus() {
            this.stopAll();
        }
        onGetFocus() {
            this.startAll();
        }
        startAll() {
            null != this.curBgmName && setTimeout(() => {
                null != this.curBgmName && Laya.SoundManager.playMusic(this.curBgmName);
            }, 1e3);
        }
        playBgm() {
            this.curBgmName = de.Bgm, this.playMusic(de.Bgm);
        }
        playBattleBgm() {}
        stopSound(e) {
            Laya.SoundManager.stopSound(e);
        }
        stopMusic() {
            Laya.SoundManager.stopMusic();
        }
        playUIClick() {
            this.playSound(de.Button);
        }
        playMusic(e) {
            this.canPlay && (this.stopMusic(), Laya.SoundManager.playMusic(e));
        }
        playSound(e, t = 1, n) {
            Laya.SoundManager.soundMuted || this.canPlay && Laya.SoundManager.playSound(e, t, n);
        }
        playGameSound(e, t = 1, n) {
            if (!e || 0 === e.length) return;
            if (Laya.SoundManager.soundMuted) return;
            let i = `music/${e}`;
            Laya.SoundManager.playSound(i, t, n);
        }
        setMusicMute(e) {
            Laya.SoundManager.musicMuted = e;
        }
        isMusicMuted() {
            return Laya.SoundManager.musicMuted;
        }
        setMusicVolume(e) {
            Laya.SoundManager.setMusicVolume(.5 * e), Laya.LocalStorage.setItem("musicVolume", e);
        }
        getMusicVolume() {
            return Laya.SoundManager.musicVolume;
        }
        setSoundMute(e) {
            Laya.SoundManager.soundMuted = e;
        }
        isSoundMuted() {
            return Laya.SoundManager.soundMuted;
        }
        setSoundVolume(e) {
            Laya.SoundManager.setSoundVolume(e), Laya.LocalStorage.setItem("soundVolume", e);
        }
        getSoundVolume() {
            return Laya.SoundManager.soundVolume;
        }
        stopAll() {
            Laya.SoundManager.stopAll();
        }
        stopAllSound() {
            Laya.SoundManager.stopAllSound();
        }
    }
    class ue extends Laya.Script3D {
        constructor() {
            super(...arguments), this.radius = 5, this.power = 0;
        }
        onAwake() {
            let e = F.getCommpentInHerit(this.owner, Laya.PhysicsCollider);
            e && (e.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2), 
            et.Instance.getEffect("Explosion").then(e => {
                this.explosionEffect = e;
            });
        }
        onHit() {}
        explode() {
            this.owner.active = !1, pe.Instance.playSound(de.Explosion);
            let e = this.owner.transform.position;
            this.explosionEffect && (this.owner.scene.addChild(this.explosionEffect), this.explosionEffect.transform.position = e, 
            Laya.timer.once(2e3, this, () => {
                this.explosionEffect.destroy();
            }));
        }
        onHit2(e) {
            this.explode();
            let t = this.owner.transform.position;
            this.areaDamageEnemies(t).forEach(e => {
                e.onExplosion(this);
            });
        }
        areaDamageEnemies(e) {
            let t = [];
            if (this.owner && this.owner.parent && this.owner.parent.parent) {
                let n = F.getCompentsInHerit(this.owner.parent.parent, Ce);
                n && n.length && n.forEach(n => {
                    if (!n || !n.owner) return;
                    let i = n.owner.transform.position;
                    V.distance(i, e) < this.radius && t.push(n);
                });
            }
            return t;
        }
    }
    class ge extends Laya.Script3D {
        constructor() {
            super(...arguments), this.speed = 20, this.flyDistance = 40, this.trailDisappearDelay = 0, 
            this._active = !0, this.damage = 1;
        }
        onAwake() {}
        onStart() {}
        onTriggerEnter(e) {
            let t = !1;
            if (this._parent && "qiangshou" === this._parent.name) {
                let n = this.checkLayer(e, "Enemy");
                if (n) {
                    n.getComponent(Ce).onShot(this, e), t = !0;
                }
            } else {
                if (this.checkLayer(e, "qiangshou")) {
                    let n = nt.Instance.player;
                    n && n.onShot(this, e), t = !1;
                }
            }
            if (!t) {
                let n = this.checkLayer(e, "hostage");
                if (n) {
                    n.getComponent(E).onShot(this, e), t = !0;
                }
            }
            if (!t) {
                let t = this.checkLayer(e, "Explosive_Barrel");
                if (t) {
                    t.getComponent(ue).onHit2(this);
                }
            }
        }
        OnHitObject() {}
        DestroyObject(e = 0) {}
        checkLayer(e, t) {
            let n = F.getParentByName(e.owner, t);
            return n || null;
        }
        shoot(e, t, n, i) {
            this._parent = n, this.damage = i, this.trail = this.owner.getChildByName("Trail"), 
            this._rb = this.owner.getComponent(Laya.Rigidbody3D), this._startingPos = e.transform.position.clone(), 
            this._startingPos.z = 0, this.moveTowards(t), "qiangshou" === this._parent.name ? this._rb.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2 | Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4 : this._rb.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1 | Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4;
        }
        moveTowards(e) {
            this.owner && (this._rb.linearVelocity = new Laya.Vector3(e.x * this.speed, e.y * this.speed, e.z * this.speed));
        }
        getDamage() {
            return this.damage;
        }
        onUpdate() {
            let e = this.owner.transform.position;
            Math.abs(e.x) <= 1e-5 && Math.abs(e.y) <= 1e-5 && Math.abs(e.z) <= 1e-5 || V.distance(this._startingPos, e) > this.flyDistance && (this.owner.active = !1, 
            this.owner.removeSelf());
        }
    }
    !function(e) {
        e[e.Invalid = 0] = "Invalid", e[e.Apx = 1] = "Apx", e[e.Mauser = 2] = "Mauser", 
        e[e.Pistole = 3] = "Pistole", e[e.Scorpion = 4] = "Scorpion", e[e.Robocop = 5] = "Robocop", 
        e[e.Tac9 = 6] = "Tac9", e[e.SciFiGun = 7] = "SciFiGun", e[e.Mp5 = 8] = "Mp5", e[e.Glock = 9] = "Glock", 
        e[e.Revolver = 10] = "Revolver";
    }(M || (M = {})), function(e) {
        e[e.Invalid = 0] = "Invalid", e[e.Pistols = 1] = "Pistols", e[e.SMG = 2] = "SMG", 
        e[e.SUPER = 3] = "SUPER";
    }(R || (R = {}));
    class me extends Laya.Script3D {
        constructor() {
            super(...arguments), this.barrels = [], this.shotEffectSp = null;
        }
        onAwake() {
            this._data = new Ie();
            let e = new fe();
            e.name = "ac", e.type = M.Apx, e.category = R.Pistols, this._data.list.push(e);
        }
        setOwner(e) {
            if (this._owner = e, this.owner) {
                this._anchor = this.owner.getChildByName("Ancer"), this._shellSpawn = F.getNodeInHerit(this._anchor, "ShootPoint"), 
                this._mag = F.getNodeInHerit(this._shellSpawn, "Mag"), this.muzzle = F.getNodeInHerit(this._anchor, "ShootPoint"), 
                this.muzzle1 = F.getNodeInHerit(this._anchor, "ShootPoint"), et.Instance.getBullet("Bullet").then(e => {
                    this.bullet = e;
                });
                let e = F.getCommpentInHerit(this.owner, Laya.Rigidbody3D);
                e && (e.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER10);
                let t = F.getCommpentInHerit(this.owner, Laya.PhysicsCollider);
                t && (t.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER10), 
                et.Instance.getShotEffect("glow").then(e => {
                    e && (this.shotEffectSp = e);
                });
            }
        }
        onNoAmmo() {}
        shoot(e = "Projectile") {
            this.shoot1(this.getForword(), e);
        }
        miss(e) {
            let t = V.add(e, this.muzzle.transform.position);
            Laya.Vector3.normalize(t, t), this.shoot1(t);
        }
        shoot1(e, t = "projectile", n = !0) {
            let i = this.bullet.clone();
            this._owner.scene.addChild(i);
            let a = this.muzzle.transform.position.clone();
            a.z = 0, i.transform.position = a;
            let s = this.muzzle.transform.rotationEuler.clone();
            (e = e.clone()).z = 0, s.y = 270, s.z = 0, s.x = 0, i.transform.rotationEuler = s;
            let o = i.addComponent(ge);
            console.log(i), o.shoot(this.muzzle, e, this._owner, this.getDamage());
        }
        pointTo(e) {
            let t = V.subtract(e, this.muzzle.transform.position);
            Laya.Vector3.normalize(t, t), this.shoot1(t);
        }
        getForword() {
            let e = F.getNodeInHerit(this.muzzle, "centerPoint");
            if (e) {
                let t = V.subtract(e.transform.position, this.muzzle.transform.position);
                return Laya.Vector3.normalize(t, t), t;
            }
            {
                let e = new Laya.Vector3();
                return this.muzzle.transform.getForward(e), e;
            }
        }
        dropMag() {}
        pushShell() {}
        onCollisionEnter(e) {}
        getBulletsPerShot() {
            return this._data.list[0].bulletsPerShot;
        }
        getShotDelay() {
            this._data.list[0].delayBetweenShot;
        }
        getDamage() {
            return this._data.list[0].damage;
        }
        setData(e) {
            this._data = e;
        }
        getData() {
            return this._data;
        }
    }
    class ye extends Laya.Script3D {
        constructor() {
            super(...arguments), this._defaultLayer = 0, this.updateCount = 0;
        }
        onAwake() {
            if (this.owner) {
                this._targeting = this.owner.getChildByName("Targeting");
                let e = F.getNodesInHerit(this.owner, "Gun");
                this._guns = e.map(e => {
                    let t = e.addComponent(me);
                    return t.setOwner(this.owner), this._targeting && (t.muzzle = this._targeting), 
                    t;
                }), this._rightGun = this._guns[this._guns.length - 1], this._line = new Laya.PixelLineSprite3D(100), 
                this.owner.scene.addChild(this._line), this._line.active = !1;
            }
        }
        onDestroy() {
            this._line && (this._line = null);
        }
        onUpdate() {
            if (this.updateCount > 100 && (this.updateCount = 0), this.updateCount % 30 == 0) {
                let e = this._rightGun.muzzle1.transform.position.clone();
                this._targeting.transform.position = e;
            }
        }
        drawRayLine(e, t, n) {
            let i = V.addLen(e, t, n);
            this._line.addLine(e, i, new Laya.Color(1, 0, 0, 1), new Laya.Color(1, 0, 0, 1));
        }
        shoot() {
            this.shootGun(this._rightGun);
        }
        onNoAmmo() {
            this._rightGun.onNoAmmo();
        }
        shootGun(e, t = 0) {
            e.shoot();
        }
        setTargetingRotation(e) {
            this._targeting.transform.localRotationEuler = e;
        }
        doEnable(e = !0) {
            this._line.active = e;
        }
        dropMag() {}
        getBullets() {
            return this._rightGun.bullet;
        }
        playReload() {}
        checkHit(e, t) {
            return "Metal_Bounce_Wall" === e.collider.owner.name;
        }
        changeWeapon(e, t) {
            this._rightGun.setData(e);
        }
    }
    class fe {
        constructor() {
            this.name = "", this.type = M.Invalid, this.category = R.Invalid, this.damage = 1.4, 
            this.magazineSize = 7, this.bulletsPerShot = 1, this.barrels = 1, this.delayBetweenShot = 200;
        }
        getBulletCount() {
            return 7;
        }
        getDisplayBulletCount() {
            return 7;
        }
        getDamage() {
            return this.damage;
        }
    }
    class Ie {
        constructor() {
            this.list = [];
        }
    }
    class Se extends Laya.AnimationClip {
        constructor() {
            super(...arguments), this.weight = 0, this._realtimeData1 = null, this._realtimeData2 = null;
        }
        _evaluateClipDatasRealTime(e, t, n, i, a) {
            if (!this.aniFirst || !this.aniSecond) return super._evaluateClipDatasRealTime(e, t, n, i, a);
            this._realtimeData1 || (this._realtimeData1 = [], this._realtimeData1.length = e.count), 
            this._realtimeData2 || (this._realtimeData2 = [], this._realtimeData2.length = e.count);
            let s = this.aniFirst.clip._nodes;
            this.aniFirst.clip._evaluateClipDatasRealTime(s, t, this.aniFirst._currentFrameIndices, i, a);
            for (let e = 0; e < s.count; e++) {
                let t = s.getNodeByIndex(e);
                t.data && (t.data.clone ? this._realtimeData1[e] = t.data.clone() : this._realtimeData1[e] = t.data);
            }
            let o = this.aniSecond.clip._nodes;
            this.aniSecond.clip._evaluateClipDatasRealTime(o, t, this.aniSecond._currentFrameIndices, i, a);
            for (let e = 0; e < o.count; e++) {
                let t = o.getNodeByIndex(e);
                t.data && (t.data.clone ? this._realtimeData2[e] = t.data.clone() : this._realtimeData2[e] = t.data);
            }
            for (let t = 0, n = e.count; t < n; t++) {
                let n = e.getNodeByIndex(t);
                switch (n.type) {
                  case 0:
                    n.data = this._realtimeData1[t] * this.weight + (this._realtimeData2[t] - this._realtimeData1[t]) * this.weight;
                    break;

                  case 1:
                  case 4:
                  case 3:
                    Laya.Vector3.lerp(this._realtimeData1[t], this._realtimeData2[t], this.weight, n.data);
                    break;

                  case 2:
                    Laya.Quaternion.slerp(this._realtimeData1[t], this._realtimeData2[t], this.weight, n.data);
                }
            }
        }
    }
    class we extends Laya.AnimatorState {
        constructor() {
            super(...arguments), this.blendClip = null;
        }
        set firstAni(e) {
            this.blendClip && (this.blendClip.aniFirst = e);
        }
        get firstAni() {
            return this.blendClip ? this.blendClip.aniFirst : null;
        }
        set secondAni(e) {
            this.blendClip && (this.blendClip.aniSecond = e);
        }
        get secondAni() {
            return this.blendClip ? this.blendClip.aniSecond : null;
        }
        get weight() {
            return this.blendClip ? this.blendClip.weight : 0;
        }
        set weight(e) {
            this.blendClip && (this.blendClip.weight = e);
        }
        static addBlendAni(e, t, n, i, a) {
            if (!e) return;
            let s = e.getControllerLayer(i);
            if (!s) return;
            let o = s.getAnimatorState(t);
            if (o) return;
            let r = s.getAnimatorState(n);
            if (!r) return;
            o = new we(), r.cloneTo(o);
            let l = new Se();
            l._nodes = r.clip._nodes, l._nodesDic = r.clip._nodesDic, l._nodesMap = r.clip._nodesMap, 
            l._duration = r.clip._duration, l._frameRate = r.clip._frameRate, l._animationEvents = r.clip._animationEvents, 
            l.islooping = r.clip.islooping, o.name = t, o.blendClip = l, o.clip = l, o.speed = a, 
            s.addState(o);
        }
    }
    !function(e) {
        e.Unkown = "Unkown", e.Two_Idle_States = "Two_Idle_States", e.Enemy_Idle = "Enemy_Idle", 
        e.Enemy_Look_X_Y = "Enemy_Look_X_Y", e.Enemy_On_Hook_Idle = "Enemy_On_Hook_Idle", 
        e.On_Hook_Targeting = "On_Hook_Targeting", e.EnemyLook = "EnemyLook", e.Run_Hor_Gun = "Run_Hor_Gun", 
        e.Enemy_Look_X_Y_1 = "Enemy_Look_X_Y_1", e.Run_And_Target = "Run_And_Target", e.Hostage = "Hostage", 
        e.Hostage_Wave = "Hostage_Wave", e.Boss_Idle_1 = "Boss_Idle_1", e.Run_Hor_Gun_0 = "Run_Hor_Gun_0", 
        e.Enemy_Look_X_Y_2 = "Enemy_Look_X_Y_2", e.Run_And_Target_1 = "Run_And_Target_1", 
        e.HitHead = "HitHead", e.HitBody = "HitBody", e.Idle_Stun = "Idle_Stun", e.BossOnHookTargeting = "BossOnHookTargeting", 
        e.Idle_Boss_On_Hook = "Idle_Boss_On_Hook", e.Boss_Idle = "Boss_Idle", e.Nothing = "Nothing", 
        e.Shoot = "Shoot", e.Ballon_Hang_Feet = "Ballon_Hang_Feet";
    }(U || (U = {})), function(e) {
        e.Head_Hit_Bot = "Head_Hit_Bot", e.Head_Hit_L = "Head_Hit_L", e.Head_Hit_R = "Head_Hit_R", 
        e.Head_Hit_Top = "Head_Hit_Top", e.Hit_Bot = "Hit_Bot", e.Hit_L = "Hit_L", e.Hit_R = "Hit_R", 
        e.Hit_Top = "Hit_Top";
    }(O || (O = {})), function(e) {
        e.Idle_Stand_B = "Idle_Stand_B", e.Idle_Stand_BB = "Idle_Stand_BB", e.Idle_Stand_Down = "Idle_Stand_Down", 
        e.Idle_Stand_Down_B = "Idle_Stand_Down_B", e.Idle_Stand_Down_BB = "Idle_Stand_Down_BB", 
        e.Idle_Stand_Down_F = "Idle_Stand_Down_F", e.Idle_Stand_Down_L = "Idle_Stand_Down_L", 
        e.Idle_Stand_Down_R = "Idle_Stand_Down_R", e.Idle_Stand_F = "Idle_Stand_F", e.Idle_Stand_L = "Idle_Stand_L", 
        e.Idle_Stand_R = "Idle_Stand_R", e.Idle_Stand_Up = "Idle_Stand_Up", e.Idle_Stand_Up_B = "Idle_Stand_Up_B", 
        e.Idle_Stand_Up_BB = "Idle_Stand_Up_BB", e.Idle_Stand_Up_F = "Idle_Stand_Up_F", 
        e.Idle_Stand_Up_L = "Idle_Stand_Up_L", e.Idle_Stand_Up_R = "Idle_Stand_Up_R";
    }(N || (N = {})), function(e) {
        e.On_Hook_Down = "On_Hook_Down", e.On_Hook_Down_L = "On_Hook_Down_L", e.On_Hook_Down_R = "On_Hook_Down_R", 
        e.On_Hook_Idle = "On_Hook_Idle", e.On_Hook_L = "On_Hook_L", e.On_Hook_R = "On_Hook_R", 
        e.On_Hook_Top = "On_Hook_Top", e.On_Hook_Top_L = "On_Hook_Top_L", e.On_Hook_Top_R = "On_Hook_Top_R";
    }(H || (H = {})), function(e) {
        e.UpL = "Run_Look_Up_L", e.Up = "Run_Look_Up", e.UpR = "Run_Look_Up_R", e.R = "Run_Look_R", 
        e.DownR = "Run_Look_Down_R", e.Down = "Run_Look_Down", e.DownL = "Run_Look_Down_L", 
        e.L = "Run_Look_L";
    }(G || (G = {}));
    class _e extends Laya.Script3D {
        constructor() {
            super(...arguments), this.angle = 0, this.spot = !1, this.rotation = 0, this.random = 0, 
            this.onHook = !1, this.idle = .5, this.move = !1, this.target = !1, this.stop = !1, 
            this.moveEndTarget = !1, this.boss = !1, this.hostage = !1, this.shootL = !1, this.shootR = !1, 
            this.hitHead = !1, this.hitBody = !1, this.stunEnd = !1, this.hostageSafe = !1, 
            this.bossOnHook = !1, this.onBaloon = !1, this.fall = !1, this.anyState = !1, this.death = !1, 
            this.aniState = U.Two_Idle_States, this.aniState2 = U.BossOnHookTargeting, this.aniState3 = U.Nothing, 
            this.aniState4 = U.Nothing, this.aniState5 = U.Nothing;
        }
        set animator(e) {
            this._animator = e, this.initBlendAni(), this.initAniSpeed();
        }
        get animator() {
            return this._animator;
        }
        onUpdate() {
            this.animator && (this.death || (this.updateDefault(), this.updateLayer1(), this.updateLayer2(), 
            this.updateLayer3(), this.clearValue()));
        }
        updateDefault() {
            let e = this.animator.getCurrentAnimatorPlayState(0), t = 0;
            switch (e && (t = e.normalizedTime % 1), this.aniState) {
              case U.Two_Idle_States:
                this.hostage ? this.playAni(U.Hostage, .25, 0, 0) : this.boss ? this.playAni(U.Boss_Idle_1, .4431937, 0, 0) : this.bossOnHook ? this.playAni(U.Idle_Boss_On_Hook, .03691114, 0, 0, 330904e-9) : this.onHook ? this.playAni(U.Enemy_On_Hook_Idle, .1942708, 0, 0) : this.onHook || this.playAni(U.Enemy_Idle, .1997126, 0, 0);
                break;

              case U.Enemy_Idle:
                this.spot && this.playAni(U.Enemy_Look_X_Y, .25, 0, 0);
                break;

              case U.Enemy_On_Hook_Idle:
                if (this.spot) {
                    this.playAni(U.On_Hook_Targeting, .25, 0, 0);
                    break;
                }
                break;

              case U.Boss_Idle:
                this.move ? this.playAni(U.Run_Hor_Gun, .25, 0, 0) : this.target && this.playAni(U.Enemy_Look_X_Y_1, .25, 0, 0);
                break;

              case U.Enemy_Look_X_Y_1:
                this.move ? this.playAni(U.Run_Hor_Gun, .2465517, 0, 0) : this.stop && this.playAni(U.Boss_Idle, .2465517, 0, 0);
                break;

              case U.Run_Hor_Gun:
                this.target ? this.playAni(U.Enemy_Look_X_Y_1, .25, 0, 0) : this.moveEndTarget && this.playAni(U.Run_And_Target, .25, 0, 0);
                break;

              case U.Run_And_Target:
                this.move ? this.playAni(U.Run_Hor_Gun, .25, 0, 0) : this.stop && this.playAni(U.Boss_Idle, .25, 0, 0);
                break;

              case U.Hostage:
                this.hostageSafe && this.playAni(U.Hostage_Wave, .25, 0, 0);
                break;

              case U.Enemy_Look_X_Y_2:
                this.move ? this.playAni(U.Run_Hor_Gun_0, .2465517, 0, 0) : this.stop && this.playAni(U.Boss_Idle_1, .2465517, 0, 0);
                break;

              case U.Boss_Idle_1:
                this.move ? this.playAni(U.Run_Hor_Gun_0, .25, 0, 0) : this.target && this.playAni(U.Enemy_Look_X_Y_2, .25, 0, 0);
                break;

              case U.Run_Hor_Gun_0:
                this.target ? this.playAni(U.Enemy_Look_X_Y_2, .25, 0, 0) : this.moveEndTarget && this.playAni(U.Run_And_Target_1, .25, 0, 0);
                break;

              case U.Idle_Stun:
                this.stunEnd && !this.bossOnHook ? this.playAni(U.Enemy_Look_X_Y_2, .295052, 0, 0) : this.stunEnd && this.bossOnHook && this.playAni(U.BossOnHookTargeting, .25, 0, .6842105);
                break;

              case U.HitBody:
                t >= .271433 && this.playAni(U.Idle_Stun, .2808284, 0, .0389413);
                break;

              case U.HitHead:
                t > .1507152 && this.playAni(U.Idle_Stun, .25, 0, 0);
                break;

              case U.Run_And_Target_1:
                this.move ? this.playAni(U.Run_Hor_Gun_0, .25, 0, 0) : this.stop && this.playAni(U.Boss_Idle_1, .25, 0, 0);
                break;

              case U.Idle_Boss_On_Hook:
                this.angle > 0 && this.playAni(U.BossOnHookTargeting, .25, 0, 0);
            }
            this.hostage ? this.playAni(U.Hostage, .25, 0, 0) : this.hitHead && !this.bossOnHook ? this.playAni(U.HitHead, .0109688, 0, 0) : this.hitBody && !this.bossOnHook ? this.playAni(U.HitBody, .01096874, 0, 0) : this.updateBleedAniAction(0);
        }
        updateLayer1() {
            let e = this.animator.getCurrentAnimatorPlayState(1), t = 0;
            switch (e && (t = e.normalizedTime % 1), this.aniState2) {
              case U.HitHead:
                t > .6878964 && this.playAni(U.Idle_Stun, .119472, 1, 0);
                break;

              case U.Idle_Stun:
                this.stunEnd && this.playAni(U.BossOnHookTargeting, .25, 1, 0);
                break;

              case U.HitBody:
                t > .7148795 && this.playAni(U.Idle_Stun, .1146591, 1, 0);
            }
            this.hitHead && this.bossOnHook ? this.playAni(U.HitHead, .0006937223, 1, 0) : this.hitHead && this.bossOnHook ? this.playAni(U.HitBody, .004341912, 1, 0) : this.updateBleedAniAction(1);
        }
        updateLayer2() {
            let e = this.animator.getCurrentAnimatorPlayState(2), t = 0;
            switch (e && (t = e.normalizedTime % 1), this.aniState3) {
              case U.Shoot:
                t > .9951411 && this.playAni(U.Nothing, 0, 2, 0);
            }
            this.shootL ? this.playAni(U.Shoot, 0, 2, 0) : this.updateBleedAniAction(2);
        }
        updateLayer3() {
            let e = this.animator.getCurrentAnimatorPlayState(3), t = 0;
            switch (e && (t = e.normalizedTime % 1), this.aniState3) {
              case U.Shoot:
                t > .9999999 && this.playAni(U.Nothing, 0, 3, 0);
            }
            this.shootR ? this.playAni(U.Shoot, 0, 3, 0) : this.updateBleedAniAction(3);
        }
        updateLayer4() {}
        playAni(e, t, n, i, a) {
            switch (n) {
              case 0:
                if (this.aniState === e) return;
                this.aniState = e;
                break;

              case 1:
                if (this.aniState2 === e) return;
                this.aniState2 = e;
                break;

              case 2:
                if (this.aniState3 === e) return;
                this.aniState3 = e;
                break;

              case 3:
                if (this.aniState4 === e) return;
                this.aniState4 = e;
                break;

              case 4:
                if (this.aniState5 === e) return;
                this.aniState5 = e;
            }
            let s = this.getBleedAniName(e, n) || e;
            console.log(s), this.animator.crossFade(s, t, n, i);
        }
        getBleedAniName(e, t) {
            let n = null;
            switch (e) {
              case U.Two_Idle_States:
                n = this.playTwoIdleStates(e, this.idle, t);
                break;

              case U.Enemy_Look_X_Y:
              case U.Enemy_Look_X_Y_1:
              case U.Enemy_Look_X_Y_2:
                n = this.playLockXY(e, this.rotation, this.angle, t);
                break;

              case U.EnemyLook:
                n = this.playEnemyLook(e, this.angle, t);
                break;

              case U.On_Hook_Targeting:
              case U.BossOnHookTargeting:
                n = this.playHookTargeting(e, this.angle, t);
                break;

              case U.HitBody:
                n = this.playHitBody(e, this.angle, t);
                break;

              case U.HitHead:
                n = this.playHitHead(e, this.angle, t);
            }
            return n;
        }
        updateBleedAni(e, t, n) {
            if (t && t.length > 0) {
                let e = 0;
                for (;e < t.length && !(t[e].threshold > n); e++) ;
                return e > 0 && (e -= 1), t[e].type;
            }
            return U.Enemy_Idle;
        }
        clearValue() {
            this.spot = !1, this.onHook = !1, this.move = !1, this.target = !1, this.shootL = !1, 
            this.shootR = !1, this.stop = !1, this.stop = !1, this.moveEndTarget = !1, this.boss = !1, 
            this.hostage = !1, this.shootL = !1, this.shootR = !1, this.hitHead = !1, this.hitBody = !1, 
            this.stunEnd = !1, this.hostageSafe = !1, this.bossOnHook = !1, this.onBaloon = !1, 
            this.fall = !1, this.anyState = !1;
        }
        updateBleedAniAction(e) {
            let t = this.aniState;
            1 === e ? t = this.aniState2 : 2 === e ? t = this.aniState3 : 3 === e ? t = this.aniState4 : 4 === e && (t = this.aniState5);
            let n = this.getBleedAniName(t, e);
            if (!n) return;
            let i = this.animator.getCurrentAnimatorPlayState(e);
            i && i.animatorState && i.animatorState.name !== n && this.animator.play(n, e);
        }
        playTwoIdleStates(e, t, n) {
            return 0 == t ? U.Enemy_Idle : U.Enemy_On_Hook_Idle;
        }
        playLockXY(e, t, n, i) {
            return 0 === this.rotation ? this.updateTwoBleedAni(e, _e.IdleStandListRL, n, i) : this.updateTwoBleedAni(e, _e.IdleStandListFB, n, i);
        }
        playEnemyLook(e, t, n) {
            return this.updateTwoBleedAni(e, _e.IdleStandListRL, t, n);
        }
        playHookTargeting(e, t, n) {
            return this.updateTwoBleedAni(e, _e.HookList, t, n);
        }
        playHitBody(e, t, n) {
            return this.updateTwoBleedAni(e, _e.HitBodyList, t, n);
        }
        playHitHead(e, t, n) {
            return this.updateTwoBleedAni(e, _e.HitHeadList, t, n);
        }
        initBlendAni() {
            this._animator && (this.addBlendAni(U.Two_Idle_States, N.Idle_Stand_B, 0, 1), this.addBlendAni(U.Enemy_Look_X_Y, G.Up, 0, 1), 
            this.addBlendAni(U.EnemyLook, G.L, 0, 1), this.addBlendAni(U.Enemy_Look_X_Y_1, G.Up, 0, 1), 
            this.addBlendAni(U.On_Hook_Targeting, H.On_Hook_Down, 0, 1), this.addBlendAni(U.Enemy_Look_X_Y_2, G.Up, 0, 1), 
            this.addBlendAni(U.BossOnHookTargeting, H.On_Hook_Down, 0, 1), this.addBlendAni(U.HitBody, O.Hit_L, 0, 1), 
            this.addBlendAni(U.HitHead, O.Head_Hit_L, 0, 1), this.addBlendAni(U.Run_And_Target_1, G.Up, 0, 1), 
            this.addBlendAni(U.BossOnHookTargeting, H.On_Hook_Down, 1, 1), this.addBlendAni(U.HitBody, O.Hit_L, 1, 1), 
            this.addBlendAni(U.HitHead, O.Head_Hit_L, 1, 1));
        }
        addBlendAni(e, t, n, i) {
            we.addBlendAni(this._animator, e, t, n, i);
        }
        updateTwoBleedAni(e, t, n, i = 0) {
            if (!t || !t.length) return e;
            let a = this.getAniState(e, i);
            if (!a) return;
            let s = 0;
            for (;s < t.length && !(t[s].threshold > n); s++) ;
            s > 0 && (s -= 1);
            let o = (n - t[s].threshold) / (t[s + 1].threshold - t[s].threshold);
            return a.weight = y.clamp(o, 0, 1), a.firstAni = this.getAniState(t[s].type, i), 
            a.secondAni = this.getAniState(t[s + 1].type, i), e;
        }
        getAniState(e, t) {
            if (!this._animator) return;
            let n = this._animator.getControllerLayer(t);
            return n ? n.getAnimatorState(e) : void 0;
        }
        setAniPlayerSpeed(e, t, n) {
            let i = this.getAniState(e, t);
            i && (i.speed = n);
        }
        initAniSpeed() {
            this.setAniPlayerSpeed(U.Hostage, 0, 1.5), this.setAniPlayerSpeed(U.HitBody, 0, .3), 
            this.setAniPlayerSpeed(U.HitHead, 0, .3), this.setAniPlayerSpeed(U.Enemy_Idle, 0, .3), 
            this.setAniPlayerSpeed(U.Enemy_On_Hook_Idle, 0, .4), this.setAniPlayerSpeed(U.HitHead, 1, .3), 
            this.setAniPlayerSpeed(U.HitBody, 1, .3);
        }
    }
    _e.TwoIdleStateList = [ {
        type: U.Enemy_Idle,
        threshold: 0
    }, {
        type: U.Enemy_On_Hook_Idle,
        threshold: 1
    } ], _e.IdleStandListRL = [ {
        type: N.Idle_Stand_Up,
        threshold: 0
    }, {
        type: N.Idle_Stand_Up_R,
        threshold: .125
    }, {
        type: N.Idle_Stand_R,
        threshold: .25
    }, {
        type: N.Idle_Stand_Down_R,
        threshold: .375
    }, {
        type: N.Idle_Stand_Down,
        threshold: .5
    }, {
        type: N.Idle_Stand_Down_L,
        threshold: .625
    }, {
        type: N.Idle_Stand_L,
        threshold: .75
    }, {
        type: N.Idle_Stand_Up_L,
        threshold: .875
    }, {
        type: N.Idle_Stand_Up,
        threshold: 1
    } ], _e.IdleStandListFB = [ {
        type: N.Idle_Stand_Up,
        threshold: 0
    }, {
        type: N.Idle_Stand_Up_B,
        threshold: .125
    }, {
        type: N.Idle_Stand_B,
        threshold: .25
    }, {
        type: N.Idle_Stand_Down_B,
        threshold: .375
    }, {
        type: N.Idle_Stand_Down,
        threshold: .5
    }, {
        type: N.Idle_Stand_Down_F,
        threshold: .625
    }, {
        type: N.Idle_Stand_F,
        threshold: .75
    }, {
        type: N.Idle_Stand_Up_F,
        threshold: .875
    }, {
        type: N.Idle_Stand_Up_F,
        threshold: 1
    } ], _e.RunLookTypeList = [ {
        type: G.Up,
        threshold: 0
    }, {
        type: G.UpR,
        threshold: .125
    }, {
        type: G.R,
        threshold: .25
    }, {
        type: G.DownR,
        threshold: .375
    }, {
        type: G.Down,
        threshold: .5
    }, {
        type: G.DownL,
        threshold: .625
    }, {
        type: G.L,
        threshold: .75
    }, {
        type: G.UpL,
        threshold: .875
    }, {
        type: G.Up,
        threshold: 1
    } ], _e.HookList = [ {
        type: H.On_Hook_Top,
        threshold: 0
    }, {
        type: H.On_Hook_Top_R,
        threshold: .125
    }, {
        type: H.On_Hook_R,
        threshold: .25
    }, {
        type: H.On_Hook_Down_R,
        threshold: .375
    }, {
        type: H.On_Hook_Down,
        threshold: .5
    }, {
        type: H.On_Hook_Down_L,
        threshold: .625
    }, {
        type: H.On_Hook_L,
        threshold: .75
    }, {
        type: H.On_Hook_Top_L,
        threshold: .875
    }, {
        type: H.On_Hook_Top,
        threshold: 1
    } ], _e.HitBodyList = [ {
        type: O.Hit_Top,
        threshold: 0
    }, {
        type: O.Hit_R,
        threshold: .25
    }, {
        type: O.Hit_Bot,
        threshold: 5
    }, {
        type: O.Hit_L,
        threshold: .75
    }, {
        type: O.Hit_Top,
        threshold: 1
    } ], _e.HitHeadList = [ {
        type: O.Head_Hit_Top,
        threshold: 0
    }, {
        type: O.Head_Hit_R,
        threshold: .25
    }, {
        type: O.Head_Hit_Bot,
        threshold: 5
    }, {
        type: O.Head_Hit_L,
        threshold: .75
    }, {
        type: O.Head_Hit_Top,
        threshold: 1
    } ], function(e) {
        e[e.Default = 0] = "Default", e[e.Rare = 1] = "Rare", e[e.Boss = 2] = "Boss";
    }(Y || (Y = {}));
    class ve extends x {
        constructor() {
            super(...arguments), this.hooked = !1, this._enemy = null, this._acitve = !1, this.lives = 0, 
            this.freezeRotation = 0;
        }
        get miss() {
            return this._enemy.missD;
        }
        initData(e) {
            e && (this.hooked = e.hooked || !1, this.lives = e.lives || 0, this.freezeRotation = e.freezeRotation = 0, 
            this.category = e.category);
        }
        onAwake() {}
        create() {
            let e = this.category === Y.Boss;
            et.Instance.getEnemy(e ? "boss" : "Enemy").then(t => {
                if (!t) return;
                let n = t;
                if (e) {
                    let e = f.Instance.getBossSkin(_.Instance.level);
                    if (1 !== e) {
                        let t = et.Instance.getMat(`tex/boss${e}.jpg`);
                        if (t) {
                            let e = F.getNodeInHerit(n, "Object085");
                            e && e.skinnedMeshRenderer && (e.skinnedMeshRenderer.material = t);
                        }
                    }
                }
                this._enemy = n.addComponent(Ce), this._enemy.setModel(n), this._enemy.setFreezeRotation(this.freezeRotation), 
                this._enemy.aniCtrl.boss = e, this._enemy.lives = this.lives, this._enemy.totalLives = this.lives, 
                this._enemy.setHooked(this.hooked, this.category), this.owner.addChild(n);
            });
        }
        setPlayer(e) {
            this._enemy.setPlayer(e);
        }
        shoot(e = !1) {
            this._enemy.shoot(e);
        }
        isActive() {
            return this._acitve;
        }
        getThreat() {
            return this._enemy;
        }
        appear() {
            this._enemy.appear();
        }
        isDeadly() {
            return !this._enemy.isAlive();
        }
        deactivate() {
            this._acitve = !1;
        }
        freezeAim() {}
    }
    class Ce extends D {
        constructor() {
            super(...arguments), this._staggered = !1, this.freezeRot = 0, this.missD = !1, 
            this.headHitEffect = null, this.rimAmout = 0, this._track = !1, this.variantIndex = 0, 
            this.updateCount = 0;
        }
        onAwake() {}
        addGun() {}
        setModel(e) {
            this._model = e, e.name = "Enemy", this._animator = F.getCommpentInHerit(e, Laya.Animator), 
            this._animator && (this.aniCtrl = this._model.addComponent(_e), this.aniCtrl.animator = this._animator), 
            this.gunParent = F.getNodeInHerit(this._model, "Bip001 R Forearm"), this._rb = e.getComponent(Laya.Rigidbody3D);
            let t = F.getNodeInHerit(e, "Gun");
            this._gun = t.addComponent(me), this._gun.setOwner(this.owner);
            let n = F.getCompentsInHerit(e, Laya.Rigidbody3D);
            n && n && n.forEach(e => {
                e.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
            });
            let i = F.getCompentsInHerit(e, Laya.PhysicsCollider);
            i && i && i.forEach(e => {
                e.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
            }), et.Instance.getHeadShotEffect().then(e => {
                this.headHitEffect = e;
            });
        }
        kill() {
            this.alive = !1, ct.vibrateShort(), e.Instance.event(t.EnemyKill, this), nt.Instance.killNum++, 
            this.type === Y.Boss && this._player.finishReached(!0);
        }
        hasGun() {
            return !!this._gun;
        }
        isStaggered() {
            return this._staggered;
        }
        refresh() {}
        stagger(e, t) {
            this._staggered = !0;
        }
        onShot(n, i) {
            this.canHit(n) && (super.onShot(n, i), this.missD = !0, this.alive && (et.Instance.getBloodEffect().then(e => {
                let t = e.clone();
                t.transform.position = new Laya.Vector3(0, 0, 0), this.owner.addChild(t), Laya.timer.once(2e3, this, () => {
                    t.destroy();
                });
            }), this.lives -= n.getDamage(), this.type === Y.Boss && e.Instance.event(t.BossHPChange, this.lives / this.totalLives), 
            this.lives < 0 ? this.onShotToDeath(n, i) : ("Bip001 Neck" === i.owner.name ? (this.aniCtrl.hitHead = !0, 
            pe.Instance.playSound(de.Headshot)) : this.aniCtrl.hitBody = !0, Laya.timer.once(20, this, () => {
                this.aniCtrl.stunEnd = !0;
            }))));
        }
        hitWithForce(e, t) {
            this._rb.isKinematic = !1;
            var n = new Laya.BoxColliderShape(.1689234, 1.244734, .6878953);
            if (n.localOffset = new Laya.Vector3(0, .48, 0), this._rb.colliderShape = n, this._rb.applyImpulse(e), 
            this.aniCtrl.death = !0, t && "Bip001 Neck" === t.owner.name && (console.log("headShot"), 
            pe.Instance.playSound(de.Headshot), this.headHitEffect)) {
                let e = this.headHitEffect.clone();
                e.transform.position = t.owner.transform.position, this.owner.scene.addChild(e), 
                Laya.timer.once(2e3, this, () => {
                    e.destroy();
                });
            }
            this.aniCtrl.animator.play("deathBack", 0);
        }
        onShotToDeath(e, t) {
            let n = new Laya.Vector3();
            e.owner.transform.getForward(n), Laya.Vector3.normalize(n, n);
            n.x *= -10, n.y *= 10, n.z = 0, this.hitWithForce(n, t), this.kill();
        }
        disppear() {}
        setTrigger(e) {
            e && e.length && (this.aniCtrl[e] = !0);
        }
        shoot(e = !1) {
            e ? this.miss(new Laya.Vector3(0, 2, 0)) : this._gun.pointTo(this._player.getTargetPoint());
        }
        miss(e) {
            let t = this._player.getTargetPoint();
            t = V.add(t, e), this._gun.pointTo(t);
        }
        setPlayer(e) {
            this._player = e, this._track = !0, this.aniCtrl.spot = !0, this.aniCtrl.target = !0, 
            this.missD = !1;
        }
        setHooked(e, t) {
            this.aniCtrl.onHook = e, t === Y.Boss && (this.aniCtrl.bossOnHook = e), this.type = t;
        }
        track() {
            if (this.updateCount % 4 != 0 && this._track && this.alive && this._player) {
                let e = this._player.getTargetPoint(), t = this.owner.transform.position, n = this.gunParent.transform.rotationEuler.y, i = this.angleBetweenVector2(e.x, e.y, t.x, t.y);
                this.aniCtrl.rotation = n / 360, this.aniCtrl.angle = i;
            }
        }
        onUpdate() {
            this.updateCount++, this.updateCount > 100 && (this.updateCount = 0), this.track();
        }
        angleBetweenVector2(e, t, n, i) {
            let a = 180 * Math.atan2(t - i, e - n) / Math.PI;
            return 1 - (a = a >= 0 && a <= 90 ? (90 - a) / 360 : a > 90 && a <= 180 ? (450 - a) / 360 : (90 - a) / 360);
        }
        setFreezeRotation(e) {
            this.freezeRot = e;
        }
        appear() {}
        onExplosion(e) {
            let t = e.owner.transform.position, n = this.owner.transform.position, i = V.subtract(n, t);
            Laya.Vector3.normalize(i, i), this.hitWithForce(i, null), this.kill();
        }
    }
    class Le {
        constructor() {
            this.done = !1;
        }
        check(e) {
            return !this.done;
        }
        act(e, t) {
            this.done = !0;
        }
    }
    class be extends Le {
        constructor() {
            super(...arguments), this.lookLeft = !1, this.time = 0;
        }
        check(e) {
            return !!super.check(e) && e >= this.time;
        }
        act(e, t) {
            t.turn(this.lookLeft, 200, !0, 0), super.act(e, t);
        }
    }
    class ke extends Le {
        constructor() {
            super(...arguments), this.reload = !1, this.reloadTime = 0;
        }
        check(e) {
            return !!super.check(e) && e >= this.reload;
        }
        act(e, t) {
            t.reload(), super.act(e, t);
        }
    }
    !function(e) {
        e[e.Path = 0] = "Path", e[e.Time = 1] = "Time", e[e.Shooting = 2] = "Shooting", 
        e[e.Animation = 3] = "Animation";
    }(X || (X = {}));
    class Te extends Laya.Script3D {
        evaluate(e) {
            this.onAction(e);
        }
        onStart2(e) {
            this.player = e;
        }
        onFinish() {
            this.defaultFinish();
        }
        onAction(e) {}
        getModType() {
            return X.Path;
        }
        hide() {}
        resetData() {}
        defaultFinish() {}
        checkAt(e, t) {
            return !1;
        }
        initModData(e) {}
    }
    class Be extends Te {
        constructor() {
            super(...arguments), this.stopFollowAt = 0, this.reached = !1;
        }
        evaluate(e) {
            e >= this.stopFollowAt && !this.reached && (this.reached = !0, this.player.finishReached());
        }
        doJumpOn() {}
    }
    class xe extends Te {
        constructor() {
            super(...arguments), this.activationTimeInCurve = 0, this._activate = !1, this._index = 0;
        }
        onAwake() {}
        evaluate(e) {
            e >= this.activationTimeInCurve && !this._activate && this.active();
        }
        active() {
            this.checkPointObject && !this.checkPointObject.isActivate() && (this.active(), 
            this.player.checkPointReached(this.getIndex()));
        }
        onStart2(e) {
            super.onStart2(e), this._activate = !1;
        }
        setIndex(e) {
            this._index = e;
        }
        getIndex() {
            return this._index;
        }
    }
    class Ae {
        constructor() {
            this.played = !1, this.trigger = z.Invalid, this.shootAt = 0, this.slopeSlideAngle = 0, 
            this.land_strenght = 0;
        }
        hasPower() {
            return !1;
        }
        isSliding() {
            return this.trigger === z.Slide || this.trigger === z.RunOrSlide || this.trigger === z.StartSlideInAir || this.trigger === z.RunOrSlideInAir;
        }
        isSlideFinish() {
            return this.trigger === z.StopSlide;
        }
    }
    !function(e) {
        e[e.Invalid = 0] = "Invalid", e[e.Prejump = 1] = "Prejump", e[e.Land = 2] = "Land", 
        e[e.LandJump = 3] = "LandJump", e[e.WallJump = 4] = "WallJump", e[e.WallJumpRotate = 5] = "WallJumpRotate", 
        e[e.Slide = 6] = "Slide", e[e.RunOrSlide = 7] = "RunOrSlide", e[e.StopSlide = 8] = "StopSlide", 
        e[e.StartSlideInAir = 9] = "StartSlideInAir", e[e.RunOrSlideInAir = 10] = "RunOrSlideInAir", 
        e[e.Cancle = 11] = "Cancle";
    }(z || (z = {}));
    class De extends Te {
        constructor() {
            super(...arguments), this.animations = [];
        }
        onStart2(e) {
            super.onStart2(e), this.animations && this.animations.forEach(e => {
                e.played = !1;
            });
        }
        evaluate(e) {
            super.evaluate(e);
            for (let t = 0; t < this.animations.length; t++) {
                let n = this.animations[t];
                if (!n || n.played) continue;
                let i = !1;
                e >= n.shootAt && (i = !0), i && (n.played = !0, n.isSliding() ? this.player.aniCtrl.slopeSlideAngle = n.slopeSlideAngle : n.isSlideFinish() && (this.player.aniCtrl.landStrenght = n.land_strenght), 
                this.setTrigger(n.trigger));
            }
        }
        onFinish() {
            super.onFinish();
        }
        resetData() {
            super.resetData(), this.animations = [];
        }
        getModType() {
            return X.Animation;
        }
        setTrigger(e) {
            this.player.setTrigger(this.getAnimationName(e));
        }
        getAnimationName(e) {
            switch (e) {
              case z.Prejump:
                return "jump";

              case z.Land:
                return "land";

              case z.LandJump:
                return "landJump";

              case z.WallJump:
                return "wallJump";

              case z.WallJumpRotate:
                return "wallJumpRotate";

              case z.Slide:
                return "slide";

              case z.RunOrSlide:
                return "run";

              case z.StopSlide:
                return "stopSlide";

              case z.StartSlideInAir:
                return "startSlideInAir";

              case z.RunOrSlideInAir:
                return "run";

              case z.Cancle:
                return "cancle";
            }
            return null;
        }
    }
    De.PARAM_SLOPE_SLIDE_ANGLE = "SlopeSlideAngle";
    class Fe {
        constructor() {
            this.time = 0, this.value = 0, this.outTangent = 0, this.inTangent = 0, this.inWeight = 0, 
            this.outWeight = 0, this.mode = 0;
        }
    }
    class Ve extends Te {
        constructor() {
            super(...arguments), this.adaptiveDifficultyIncreaser = 0;
        }
        onStart2(e) {
            super.onStart2(e);
        }
        onFinish() {
            this.player.setSpeedMultiplier(1);
        }
        evaluate(e) {
            this.setTime(e);
        }
        setTime(e) {
            let t = this.getValueInCurve(e);
            this.player.setSpeedMultiplier(t);
        }
        getValueInCurve(e) {
            if (e <= 0) return this.slowdownCurve[0].value;
            if (e >= 1) return this.slowdownCurve[this.slowdownCurve.length - 1].value;
            for (let t = 0; t < this.slowdownCurve.length; t++) {
                if (e < this.slowdownCurve[t].time) return t > 0 ? this.calcValue(e, this.slowdownCurve[t - 1], this.slowdownCurve[t]) : this.slowdownCurve[0].value;
            }
            return 1;
        }
        calcValue(e, t, n) {
            if (!t) return 0;
            if (!n) return t.value;
            var i, a = n.time - t.time;
            i = 0 !== a ? (e - t.time) / a : 0;
            var s = t.outTangent, o = n.inTangent;
            if (Number.isFinite(s) && Number.isFinite(o)) {
                var r = i * i, l = r * i, h = l - 2 * r + i, c = l - r, d = -2 * l + 3 * r;
                return (2 * l - 3 * r + 1) * t.value + h * s * a + c * o * a + d * n.value;
            }
            return t.value;
        }
        onAction(e) {
            super.onAction(e);
        }
        GetModType() {
            return X.Time;
        }
        initModData(e) {
            super.initModData(e), this.slowdownCurve = [], e.slowdownCurve && e.slowdownCurve.length && (this.slowdownCurve = e.slowdownCurve.map(e => {
                let t = new Fe();
                return t.time = e.time, t.value = e.value, t.outTangent = "Infinity" === e.outTangent ? 1 / 0 : e.outTangent, 
                t.inTangent = "Infinity" === e.inTangent ? 1 / 0 : e.inTangent, t.mode = e.mode, 
                t.inWeight = e.inWeight, t.outWeight = e.outWeight, t;
            }));
        }
    }
    class Ee extends Ve {
        constructor() {
            super(...arguments), this.autoResumeTime = !1, this.overrideBulletCount = 0, this.triggerReloadAnimation = !1, 
            this.aimTime = 0, this.turnBack = !1, this.jumpAim = !1, this.flips = 0, this.minAngle = 0, 
            this.maxAngle = 0, this.flipEasing = 0, this.threats = [], this.autoSetMinMax = !1, 
            this.minEnemies = 0, this.maxEnemies = 0, this.timeStopEnabled = !0, this.timeStopAt = 0, 
            this._spinAngle = 0, this._started = !1, this._currentTime = 0;
        }
        onAwake() {}
        calculateSpinAngle() {
            this._spinAngle = this.getEasedAngle(this._currentTime);
        }
        evaluate(e) {
            super.evaluate(e), this._currentTime = e, this.checkShooting(e), this.calculateSpinAngle(), 
            this.flips > 0 ? this.player.setRotation(this.getEasedFlipAngle(e), this._spinAngle) : this.player.setRotation(0, this._spinAngle);
        }
        checkShooting(e) {
            !this._started && e > this.aimTime && this.startShooting();
            let t = !1;
            if (this.threats.forEach(n => {
                if (n.data.spot.isDeadly()) n.done = !0; else if (!n.done) {
                    t = !0, e > n.data.shootAt && !n.data.spot.miss && (n.data.spot.shoot(!1), n.done = !0);
                    {
                        let t = n.data.misses;
                        t && t.forEach(t => {
                            t.done || e > t.missAt && (n.data.spot.shoot(!0), t.done = !0);
                        });
                    }
                }
            }), !t) {
                let e = F.getCompentsInHerit(this.owner, E);
                e && e.length && e.forEach(e => {
                    e.doSafeAction();
                });
            }
            this._started && (!t || e > this.timeStopAt) && this.stopShooting();
        }
        getEasedFlipAngle(e) {
            return this.flips ? e * (360 * this.flips) * (this.turnBack ? -1 : 1) : 0;
        }
        getEasedAngle(e) {
            return (this.minAngle + (this.maxAngle - this.minAngle) * e) % 1;
        }
        startShooting() {
            this._started = !0, this.player.enableAiming(!0), this.player.enabelShooting(!0, !1);
        }
        getBulletCount() {
            return this.overrideBulletCount;
        }
        stopShooting() {
            this._started && (this._started = !1, this.player.enableAiming(!1), this.player.enabelShooting(!1, !1));
        }
        hide() {
            super.hide();
        }
        onStart2(e) {
            super.onStart2(e), this._spinAngle = 0, this._started = !1, this.threats && this.threats.forEach(e => {
                e.done = !1, e.data.spot.setPlayer(this.player);
            });
        }
        onFinish() {
            this.stopShooting();
        }
        resetData() {}
        onAction(e) {}
        lose(e) {}
        GetModType() {
            return X.Shooting;
        }
        getFlipColor() {}
        flipValidation(e) {}
        initEnemyData(e) {
            if (!e) return;
            let t = this.findAllEnemySpots();
            t && t.length && (this.threats = t.map(t => {
                let n = new Re();
                if (t && t.owner && t.owner.name) {
                    n.data = new Pe(), n.data.spot = t;
                    let i = null, a = t.owner.name;
                    for (let t = 0; t < e.length; t++) if (e[t].data.name === a) {
                        i = e[t].data;
                        break;
                    }
                    if (i) {
                        if (i.instaAim) {} else t.hooked = i.hooked, t.category = i.enemyCategory, t.lives = i.lives, 
                        t.create();
                        n.data.initData(i);
                    }
                }
                return n;
            }));
        }
        findAllEnemySpots() {
            if (this.owner && this.owner.parent) {
                return F.getCompentsInHerit(this.owner.parent, ve);
            }
            return [];
        }
        initModData(e) {
            super.initModData(e), this.autoResumeTime = e.autoResumeTime, this.overrideBulletCount = e.overrideBulletCount, 
            this.triggerReloadAnimation = e.triggerReloadAnimation, this.aimTime = e.aimTime, 
            this.turnBack = e.turnBack, this.jumpAim = e.jumpAim, this.flips = e.flips, this.maxAngle = e.maxAngle, 
            this.minAngle = e.minAngle, this.timeStopAt = e.timeStopAt, this.shootingRange = new Laya.Vector2(e.shootingRange.x, e.shootingRange.y), 
            Laya.timer.callLater(this, () => {
                this.initEnemyData(e.threats);
            });
        }
    }
    class Pe {
        constructor() {
            this.instaAim = !1, this.miss = !1, this.count = 0, this.timeOffset = 0, this.misses = [];
        }
        getColor() {
            return new Laya.Vector3(0, 0, 0);
        }
        initData(e) {
            this.shootAt = e.shootAt, this.instaAim = e.instaAim, this.miss = e.miss, this.count = e.count, 
            this.timeOffset = e.timeOffset, e.misses && (this.misses = e.misses.map(e => {
                let t = new Me();
                return t.missAt = e.missAt, t.offset = new Laya.Vector3(e.offset.x, e.offset.y, e.offset.z), 
                t;
            }));
        }
    }
    class Me {
        constructor() {
            this.missAt = 0, this.done = !1;
        }
    }
    class Re {
        constructor() {
            this.done = !1;
        }
    }
    class Ue extends Te {
        constructor() {
            super(...arguments), this.onlyShowHeader = !1, this.reloadAt = 0, this._waiting = !0;
        }
        evaluate(e) {
            this._waiting && e >= this.reloadAt && this.Reload();
        }
        onStart2(e) {
            super.onStart2(e);
        }
        Reload() {
            this._waiting = !1, e.Instance.event(t.BossComing);
        }
        initModData(e) {
            super.initModData(e), this.reloadAt = e.reloadAt;
        }
    }
    class Oe extends Te {
        onStart2(e) {
            super.onStart2(e), this.turns && this.turns.forEach(e => {
                e.done = !1;
            });
        }
        evaluate(e) {
            super.evaluate(e), this.checkForShooting(this.turns, e), this.reload && this.reload.check(e) && this.reload.act(this, this.player);
        }
        checkForShooting(e, t) {
            for (let n = 0; n < e.length; n++) {
                let i = e[n];
                if (i && i.check(t)) return i.act(this, this.player), !0;
            }
        }
        onFinish() {
            super.onFinish();
        }
        resetData() {
            super.resetData();
        }
        initModData(e) {
            super.initModData(e), e.reload && (this.reload = new ke(), this.reload.reload = e.reload.reload, 
            this.reload.done = e.reload.done, this.reload.reloadTime = e.reload.reloadTime), 
            e.turns && (this.turns = e.turns.map(e => {
                let t = new be();
                return t.time = e.time, t.lookLeft = e.lookLeft, t;
            }));
        }
    }
    class Ne extends Laya.Script3D {
        constructor() {
            super(...arguments), this.valid = !1, this.lastInSet = !1, this.pathAccuracy = 0, 
            this.loopEnabled = !1, this.loopIndexReturn = 0, this.loopCount = 0, this.spline = null, 
            this.point = 0, this.toLocal = 0;
        }
        get distance() {
            return this.spline.getAccurateDistance();
        }
        set distance(e) {}
        init() {
            this.checkSpline();
        }
        get LastPoint() {
            return this.spline.points[this.spline.controlPointCount - 1];
        }
        get FirstPoint() {
            return this.spline.points[0];
        }
        hideObjcetBeforeCheckPoint() {}
        checkSpline() {
            this.spline.calculateArcLenghts(this.pathAccuracy || 20);
        }
        getPoint(e) {
            return this.spline.getPoint(e);
        }
        checkMod(e) {}
        validate(e) {
            return this.valid = e, !1;
        }
        onStart2(e) {
            if (this.owner) {
                let t = this.owner.getComponents(Te);
                t && t.length && t.forEach(t => {
                    t.onStart2(e);
                });
            }
        }
        onFinish(e) {
            if (this.owner) {
                let e = this.owner.getComponents(Te);
                e && e.length && e.forEach(e => {
                    e.onFinish();
                });
            }
        }
    }
    class He extends Laya.Script3D {
        constructor() {
            super(...arguments), this.valid = !1, this.type = K.Simple, this.enviroment = [];
        }
        collectEnvironmentAndVariations() {
            this.owner && (this.enviroment = F.getCompentsInHerit(this.owner, B));
        }
        init() {}
        onEnable() {
            this.init();
        }
        onDisable() {
            this.enviroment = [];
        }
        snap() {
            if (this.owner && this.owner.parent) {
                let e = this.owner.parent.getChildIndex(this.owner);
                if (0 !== e) {
                    let t = this.owner.parent.getChildAt(e - 1).getComponent(He);
                    t && (this.owner.transform.position = new Laya.Vector3(t.endPoint.x, t.endPoint.y, 0));
                }
            }
        }
        get endPoint() {
            if (this.owner) {
                let e = this.owner.getChildAt(this.owner.numChildren - 1), t = e.getComponent(Ne);
                return V.add(t.LastPoint, e.transform.position);
            }
            return new Laya.Vector3(0, 0, 0);
        }
        createEnemiesWithSeed() {}
        createObjectsWithSeed() {}
        validate(e) {
            return this.valid = e, !1;
        }
    }
    class Ge {
        static Clamp(e) {
            return e < 0 ? 0 : e;
        }
    }
    !function(e) {
        e[e.Free = 0] = "Free", e[e.Aligned = 1] = "Aligned", e[e.Mirrored = 2] = "Mirrored";
    }(W || (W = {}));
    class Ye {
        static getPoint3(e, t, n, i, a) {
            let s = 1 - (a = Ge.Clamp(a)), o = new Laya.Vector3();
            return o.x = s * s * e.x + 2 * s * a * t.x + a * a * n.x, o.y = s * s * e.y + 2 * s * a * t.y + a * a * n.y, 
            o.z = s * s * e.z + 2 * s * a * t.z + a * a * n.z, o;
        }
        static getFirstDerivative3(e, t, n, i) {
            let a = new Laya.Vector3();
            return a.x = 2 * (1 - i) * (t.x - e.x) + 2 * i * (n.x - t.x), a.y = 2 * (1 - i) * (t.y - e.y) + 2 * i * (n.y - t.y), 
            a.z = 2 * (1 - i) * (t.z - e.z) + 2 * i * (n.z - t.z), a;
        }
        static getPoint4(e, t, n, i, a) {
            let s = 1 - (a = Ge.Clamp(a)), o = new Laya.Vector3();
            return o.x = s * s * s * e.x + 3 * s * s * a * t.x + 3 * s * a * a * n.x + a * a * a * i.x, 
            o.y = s * s * s * e.y + 3 * s * s * a * t.y + 3 * s * a * a * n.y + a * a * a * i.y, 
            o.z = s * s * s * e.z + 3 * s * s * a * t.z + 3 * s * a * a * n.z + a * a * a * i.z, 
            o;
        }
        static getFirstDerivative4(e, t, n, i, a) {
            let s = new Laya.Vector3(), o = 1 - (a = Ge.Clamp(a));
            return s.x = 3 * o * o * (t.x - e.x) + 6 * o * a * (n.x - t.x) + 3 * a * a * (i.x - n.x), 
            s.y = 3 * o * o * (t.y - e.y) + 6 * o * a * (n.y - t.y) + 3 * a * a * (i.y - n.y), 
            s.z = 3 * o * o * (t.x - e.x) + 6 * o * a * (n.z - t.z) + 3 * a * a * (i.z - n.z), 
            s;
        }
    }
    class Xe extends Laya.Script3D {
        constructor() {
            super(...arguments), this.points = [], this._distance = 0, this._loop = !1;
        }
        get loop() {
            return this._loop;
        }
        set loop(e) {
            this._loop = e;
        }
        get controlPointCount() {
            return this.points.length;
        }
        getControlPoint(e) {
            return this.points[e];
        }
        setControlPoint(e, t) {}
        getControlPointMode(e) {
            return this.modes[Math.floor((e + 1) / 3)];
        }
        setControlPointMode(e, t) {
            let n = Math.fround((e + 1) / 3);
            this.modes[n] = t, this.loop && (0 === n ? this.modes[this.modes.length - 1] = t : n === this.modes.length - 1 && (this.modes[0] = t)), 
            this.enforceMode(e);
        }
        enforceMode(e) {
            let t = Math.floor((e + 1) / 3), n = this.modes[t];
            if (n === W.Free || !this.loop && (0 === t || t === this.modes.length - 1)) return;
            let i = 3 * t, a = 0, s = 0;
            e <= i ? ((a = i - 1) < 0 && (a = this.points.length - 2), (s = i + 1) >= this.points.length && (s = 1)) : ((a = i + 1) >= this.points.length && (a = 1), 
            (s = i - 1) < 0 && (s = this.points.length - 2));
            let o = this.points[i], r = V.subtract(o, this.points[a]);
            if (n === W.Aligned) {
                V.normalized(r, r);
                let e = Laya.Vector3.distance(o, this.points[s]);
                V.scale(r, e, r);
            }
            V.add(o, r, this.points[s]);
        }
        get curveCount() {
            return (this.points.length - 1) / 3;
        }
        getPoint(e) {
            let t = 0;
            if (e >= 1 ? (e = 1, t = this.points.length - 4) : (e = Ge.Clamp(e) * this.curveCount, 
            e -= t = Math.floor(e), t *= 3), this.owner && this.owner.transform) {
                let n = Ye.getPoint4(this.points[t], this.points[t + 1], this.points[t + 2], this.points[t + 3], e);
                return V.add(this.owner.transform.position, n, n), n;
            }
            return new Laya.Vector3(0, 0, 0);
        }
        getVelocity(e) {
            let t = 0;
            if (e >= 1 ? (e = 1, t = this.points.length - 4) : (e = Ge.Clamp(e), e -= t = Math.floor(e), 
            t *= 3), this.owner && this.owner.transform) {
                return Ye.getFirstDerivative4(this.points[t], this.points[t + 1], this.points[t + 2], this.points[t + 3], e);
            }
            return new Laya.Vector3(0, 0, 0);
        }
        GetDirection(e) {
            return V.normalized(this.getVelocity(e));
        }
        reset() {
            this.points = [ new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0) ], 
            this.modes = [ W.Free, W.Free ];
        }
        defaultReset() {
            this.reset();
        }
        resetTowardsX() {}
        forceSetPoints(e) {}
        getLength() {
            return this._distance;
        }
        getAccuratePoint(e) {
            return this.getPoint(e);
        }
        getAccurateDirection(e) {
            return this.GetDirection(e);
        }
        calculateArcLenghts(e = 20) {
            let t = this.getPoint(0), n = null, i = 1 / e;
            this._distance = 0;
            for (let e = i; e <= 1; e += i) n = this.getPoint(e), this._distance += V.distance(t, n), 
            t = n;
        }
        getAccurateDistance() {
            return this.getLength();
        }
        getProgress(e) {
            return e / this.getAccurateDistance();
        }
    }
    class ze extends Laya.Script3D {
        randomize() {}
    }
    class We extends Laya.Script3D {
        constructor() {
            super(...arguments), this.repositionToPoint = 0, this.positionOnly = !1, this.fillToBottom = !1, 
            this.swapper = {};
        }
        onStart() {}
        changeMat() {}
        resize() {}
        autoFitToEnd() {}
        reposition() {}
        checkSnap() {}
        snapTo() {}
        resizeCorner() {}
    }
    class Ke {
        static remove(e, t) {
            if (e) for (let n = 0; n < e.length; n++) e[n] === t && (e.splice(n, 1), n--);
        }
        static randomObjList(e, t) {
            if (!e.length || !t) return null;
            if (e.length < t) return e;
            let n = [];
            for (;n.length < t; ) {
                let t = Ke.randomObj(e);
                if (!t) break;
                -1 === n.indexOf(t) && n.push(t);
            }
            return n;
        }
        static randomObj(e) {
            if (!e.length) return null;
            let t = y.getRandom(0, e.length - 1);
            return t < e.length - 1 ? e[t] : e[0];
        }
    }
    !function(e) {
        e[e.Simple = 0] = "Simple", e[e.Boss = 1] = "Boss", e[e.SuperBoss = 2] = "SuperBoss";
    }(K || (K = {}));
    class qe {
        constructor() {
            this.list = [];
        }
    }
    class Je {
        constructor() {
            this.bossIndex = "", this.LEVEL_DATA = "level_data", this._sets = [], this.patterns = [], 
            this._alreadyUsed = [], this._initialized = !1, this._lowestY = 0, this._highestY = 0, 
            this._rightestX = 0, this._worldLevel = 0, this._checkPointIndex = 0;
        }
        static get Instance() {
            return null === Je._instance && (Je._instance = new Je()), Je._instance;
        }
        getLevelType() {
            return this._type;
        }
        loadLevel() {
            let e = f.Instance.isBossLevel(_.Instance.level) ? K.Boss : K.Simple, t = new qe();
            return t.list = this.getLevelPatternList(_.Instance.level), this.init(e, t, o.World_0);
        }
        addPredefined(e) {}
        addWalls() {}
        getFoldersFromPatterns(e) {
            return [ "" ];
        }
        getFolder(e) {
            return "";
        }
        RandomizePatterns() {
            return [ "" ];
        }
        getVariant(e) {
            return "";
        }
        getEmpty() {
            return "";
        }
        getCheckPoint() {
            return "p_checkpoint_1";
        }
        getBoss() {
            return "";
        }
        getRandomPattern(e) {
            return "";
        }
        getAvailablePatterns(e) {
            return [ "" ];
        }
        getLevelSize() {
            return 0;
        }
        generate() {
            return new Promise((e, t) => {
                if (this._pattern && this._pattern.list) {
                    let t = 0, n = [];
                    this._checkPointIndex = 0, this._sets = [];
                    let i = null;
                    this._pattern.list.forEach((a, s) => {
                        et.Instance.loadPattern(a).then(a => {
                            if (t++, n[s] = a, t === this._pattern.list.length) {
                                n.forEach(e => {
                                    this.levelContainer.addChild(e), this.progressSegment(e);
                                    let t = e.addComponent(He);
                                    this._sets.push(t), t.collectEnvironmentAndVariations(), t.createEnemiesWithSeed(), 
                                    t.createObjectsWithSeed(), t.snap(), i = t.endPoint.clone();
                                }), this.levelContainer.addComponent(T).Generate2(i.x, 0, 0), e(this._sets);
                            }
                        });
                    });
                }
            });
        }
        progressSegment(e) {
            for (let t = 0; t < e.numChildren; t++) {
                let n = e.getChildAt(t);
                if (this.progressSegment(n), n.name.startsWith("PathSegment")) {
                    let t = f.Instance.getSegmentInfo(e.name, n.name), i = n.addComponent(Xe);
                    if (t && t.spline) {
                        let e = t.spline.points;
                        e && (i.points = e.map(e => new Laya.Vector3(-e.x, e.y, e.z))), i.loop = t.spline.loop, 
                        i.modes = t.spline.modes;
                    }
                    if (t.aniList && t.aniList.length) {
                        let e = n.addComponent(De);
                        e.animations = [], e.animations = t.aniList.map(e => {
                            let t = new Ae();
                            return t.shootAt = e.shootAt, t.trigger = e.trigger, t;
                        });
                    }
                    let a = n.addComponent(Ne);
                    if (a.spline = i, a.lastInSet = t.lastInSet, a.pathAccuracy = t.pathAccuracy, a.loopCount = t.loopCount, 
                    a.loopIndexReturn = t.loopIndexReturn, a.loopCount = t.loopCount, a.loopEnabled = t.loopEnabled, 
                    a.init(), t.checkPointMod) {
                        let e = n.addComponent(xe);
                        e.setIndex(this._checkPointIndex), e.activationTimeInCurve = t.checkPointMod.activationTimeInCurve, 
                        this._checkPointIndex++;
                    }
                    if (t.finishMod) {
                        n.addComponent(Be).stopFollowAt = .3;
                    }
                    if (t.shootingMod) {
                        n.addComponent(Ee).initModData(t.shootingMod);
                    }
                    if (t.playerMod) {
                        n.addComponent(Oe).initModData(t.playerMod);
                    }
                    if (t.waitMod) {
                        n.addComponent(Ue).initModData(t.waitMod);
                    }
                } else if (n.name.startsWith("env_far_bg")) {
                    n.addComponent(B).randomize();
                } else if (n.name.startsWith("EnvironmentSpot")) {
                    n.addComponent(B).randomize();
                } else if (n.name.startsWith("Floor")) {
                    n.addComponent(We);
                } else if (n.name.startsWith("Wall")) {
                    n.addComponent(k);
                    n.addComponent(A);
                } else if (n.name.startsWith("variations")) {
                    n.addComponent(ze).randomize();
                } else if (n.name.startsWith("EnemySpot")) n.addComponent(ve); else if (n.name.startsWith("HostageSpot")) {
                    n.addComponent(P).create();
                } else if (n.name.startsWith("Explosive_Barrel")) {
                    n.addComponent(ue);
                }
            }
        }
        updateFloors() {}
        loadData(e) {
            let t = new qe(), n = _.Instance.levelInfo;
            if (n && n.seg && n.seg.length) t.list = [].concat(n.seg); else {
                let i = f.Instance.getLevelConfig(e);
                i && i.length || (i = Ke.randomObjList(et.LevelPatterns, 2)), t.list.push(i[0]), 
                t.list.push(Ke.randomObj(et.EmenyPatterns)), t.list.push(i[1]), n.seg = [].concat(t.list), 
                _.Instance.levelInfo = n;
            }
            return f.Instance.isBossLevel(e) && (t.list = [ "boss_5" ]), t.list.forEach((e, n) => {
                "p_8_1" === e && (t.list[n] = "p_8_3");
            }), t;
        }
        getPath() {
            return this._sets;
        }
        init(e, t, n) {
            return this._type = e, this._worldLevel = n, this._pattern = t, this.generate();
        }
        save() {}
        load() {}
        onLevelFinished() {}
        clearData() {}
        copyConfig() {}
        getLevelPatternList(e) {
            let t = f.Instance.isBossLevel(_.Instance.level) ? K.Boss : K.Simple, n = [], i = _.Instance.levelPattens, a = i[e] || {};
            if (a.start) n.push(a.start); else {
                let e = Ke.randomObj(et.StartPatterns);
                e && n.push(e), a.start = e;
            }
            if (t === K.Boss) n.push("boss_5"); else if (a.seg && a.seg.length) n = n.concat(a.seg); else {
                let t = f.Instance.getLevelConfig(e);
                t && t.length || (t = Ke.randomObjList(et.LevelPatterns, 2));
                let i = [];
                i.push(t[0]), i.push(Ke.randomObj(et.EmenyPatterns)), i.push(t[1]), a.seg = [].concat(i), 
                _.Instance.levelInfo = a, n = n.concat(i);
            }
            if (t === K.Simple) {
                let e = _.Instance.levelInfo;
                if (e.end) n.push(e.end); else {
                    let t = Ke.randomObj(et.FinishPatterns);
                    n.push(t), e.end = t;
                }
            }
            return a && (i[e] = a), n;
        }
    }
    Je._instance = null, function(e) {
        e.Unkown = "Unkown", e.Idle = "Idle", e.Jump_Fast = "Jump_Fast", e.Flip_Pose_1 = "Flip_Pose_1", 
        e.Land = "Land", e.Land_0 = "Land_0", e.Run_Vert_Gun = "Run_Vert_Gun", e.Jump_Fast_0 = "Jump_Fast_0", 
        e.Land_1 = "Land_1", e.Run_Vert_Gun_0 = "Run_Vert_Gun_0", e.Flip_Pose_2 = "Flip_Pose_2", 
        e.Land_2 = "Land_2", e.Flip_Pose_3 = "Flip_Pose_3", e.Slide_Start_3 = "Slide_Start_3", 
        e.Slide_Short1_0 = "Slide_Short1_0", e.Slide_Start_1 = "Slide_Start_1", e.Slide_Long2_0 = "Slide_Long2_0", 
        e.Slide_Short2_0 = "Slide_Short2_0", e.EndSlide = "EndSlide", e.Slide_Long1_0 = "Slide_Long1_0", 
        e.Run_And_Look = "Run_And_Look", e.Slide_Start = "Slide_Start", e.Slide_Start_0 = "Slide_Start_0", 
        e.Slide_Short1 = "Slide_Short1", e.Shoot = "Shoot", e.Run_Reload = "Run_Reload", 
        e.Land_Wall = "Land_Wall", e.Land_Wall_Rotation = "Land_Wall_Rotation", e.Slide_Targeting_Short_1 = "Slide_Targeting_Short_1", 
        e.Slide_Targeting = "Slide_Targeting", e.Slide_Trigger = "Slide_Trigger";
    }(q || (q = {})), function(e) {
        e.UpL = "Flip_Pose_Up_L", e.Up = "Flip_Pose_Up", e.UpR = "Flip_Pose_Up_R", e.R = "Flip_Pose_R", 
        e.DownR = "Flip_Pose_Down_R", e.Down = "Flip_Pose_Down", e.DownL = "Flip_Pose_Down_L", 
        e.L = "Flip_Pose_L";
    }(J || (J = {})), function(e) {
        e.UpL = "Slide_T_Up_L", e.Up = "Slide_T_Up", e.UpR = "Slide_T_Up_R", e.R = "Slide_T_R", 
        e.DownR = "Slide_T_Down_R", e.Down = "Slide_T_Down", e.DownL = "Slide_T_Down_L", 
        e.L = "Slide_T_L";
    }(j || (j = {})), function(e) {
        e.UpL = "Run_Look_Up_L", e.Up = "Run_Look_Up", e.UpR = "Run_Look_Up_R", e.R = "Run_Look_R", 
        e.DownR = "Run_Look_Down_R", e.Down = "Run_Look_Down", e.DownL = "Run_Look_Down_L", 
        e.L = "Run_Look_L";
    }(Q || (Q = {})), function(e) {
        e.UpL = "Slide_T_Slo_Up_L", e.Up = "Slide_T_Slo_Up", e.UpR = "Slide_T_Slo_Up_R", 
        e.R = "Slide_T_Slo_R", e.DownR = "Slide_T_Slo_Down_R", e.Down = "Slide_T_Slo_Down", 
        e.DownL = "Slide_T_Slo_Down_L", e.L = "Slide_T_Slo_L";
    }($ || ($ = {})), function(e) {
        e.UpL = "Slide_90_Up_L_1", e.Up = "Slide_90_Up_1", e.UpR = "Slide_90_Up_R_1", e.R = "Slide_90_R_1", 
        e.DownR = "Slide_90_D_R_1", e.Down = "Slide_90_D_1", e.DownL = "Slide_90_D_L_1", 
        e.L = "Slide_90_L_1";
    }(Z || (Z = {}));
    class je extends Laya.Script3D {
        constructor() {
            super(...arguments), this.run = !1, this.jump = !1, this.land = !1, this.angle = .5, 
            this.fightTime = .5, this.landStrenght = .2, this.landJump = !1, this.shootL = !1, 
            this.shootR = !1, this.laserOn = !1, this.stop = !1, this.blocker = !1, this.reload = !1, 
            this.reloadStand = !1, this.wallJumpRotate = !1, this.wallJump = !1, this.slide = !1, 
            this.stopSlide = !1, this.startSlideInAir = !1, this.slideNoShootingShort = !1, 
            this.slideFromAnyStateShort = !1, this.slideFromAnyStateLong = !1, this.slopeSlideAngle = 0, 
            this.nothing = !1, this.cancle = !1, this.aniState = q.Idle, this.aniState2 = q.Slide_Short1_0, 
            this.aniState3 = q.Shoot, this.aniState4 = q.Shoot, this.aniState5 = q.Run_Reload;
        }
        set animator(e) {
            this._animator = e, this.initBlendAni(), this.initAniSpeed();
        }
        get animator() {
            return this._animator;
        }
        onUpdate() {
            this.animator && (this.updateDefault(), this.updateLayer1(), this.updateLayer2(), 
            this.updateLayer3(), this.updateLayer4(), this.clearValue());
        }
        updateDefault() {
            let e = !1, t = this.animator.getCurrentAnimatorPlayState(0), n = 0;
            switch (t && (n = t.normalizedTime % 1), this.aniState) {
              case q.Idle:
                this.run && (this.playAni(q.Run_Vert_Gun, .25, 0, .16221), e = !0);
                break;

              case q.Run_Vert_Gun:
                this.stop ? (this.playAni(q.Idle, .2110487, 0, 0), e = !0) : this.reload && (this.playAni(q.Run_Reload, .1357143, 0, 0), 
                e = !0);
                break;

              case q.Jump_Fast:
                this.laserOn ? (this.playAni(q.Flip_Pose_1, .2058172, 0, 0), e = !0) : n >= .8578722 && (this.playAni(q.Flip_Pose_3, .1125178, 0, 0, .8578722), 
                e = !0);
                break;

              case q.Flip_Pose_1:
                this.landJump ? (this.playAni(q.Land_0, .08793092, 0, .1276294), e = !0) : this.land ? (this.playAni(q.Land, .5, 0, .2689736), 
                e = !0) : this.wallJump ? (this.playAni(q.Land_Wall, .04344302, 0, 0), e = !0) : this.wallJumpRotate && (this.playAni(q.Land_Wall_Rotation, .09324783, 0, 0), 
                e = !0);
                break;

              case q.Land:
                this.stop ? (this.playAni(q.Idle, .1421003, 0, .00389408, .6693642), e = !0) : this.reload ? (this.playAni(q.Run_Reload, .1748699, 0, 0), 
                e = !0) : n > .8065661 && (this.playAni(q.Run_Vert_Gun, .137439, 0, .4996376, .8065661), 
                e = !0);
                break;

              case q.Land_0:
                n > .350431 && (this.playAni(q.Jump_Fast, .08182475, 0, .3323957, .350431), e = !0);
                break;

              case q.Jump_Fast_0:
                n > .6558416 && (this.playAni(q.Flip_Pose_2, .266832, 0, 0, .6558416), e = !0);
                break;

              case q.Run_Vert_Gun_0:
                this.jump && (this.playAni(q.Jump_Fast_0, .25, 0, 0), e = !0);
                break;

              case q.Land_1:
                n > .8065661 && (this.playAni(q.Run_Vert_Gun_0, .137439, 0, .4996376, .8065661), 
                e = !0);
                break;

              case q.Flip_Pose_2:
                this.land ? (this.playAni(q.Land_1, .2, 0, .2689736), e = !0) : this.landJump && (this.playAni(q.Land_2, .08793092, 0, .1276294), 
                e = !0);
                break;

              case q.Land_2:
                n > .350431 && (this.playAni(q.Jump_Fast_0, .08182475, 0, .3323957, .350431), e = !0);
                break;

              case q.Flip_Pose_3:
                this.landJump ? (this.playAni(q.Land_0, .08301228, 0, .1208479), e = !0) : this.land ? (this.land = !1, 
                this.playAni(q.Land, .2, 0, .2589599), e = !0) : this.wallJump ? (this.playAni(q.Land_Wall, .06378496, 0, .003487283), 
                e = !0) : this.wallJumpRotate && (this.playAni(q.Land_Wall_Rotation, .08606917, 0, 0), 
                e = !0);
                break;

              case q.Run_Reload:
                n > .9138615 && (this.playAni(q.Run_Vert_Gun, .3037779, 0, 0), e = !0);
                break;

              case q.Land_Wall:
                n > .9134221 && (this.playAni(q.Land_Wall, .2278337, 0, 0), e = !0);
                break;

              case q.Land_Wall_Rotation:
                n > .8437569 && (this.playAni(q.Flip_Pose_3, .2795549, 0, 0, .8437569), e = !0);
                break;

              case q.Slide_Start_0:
                this.stopSlide ? (this.playAni(q.EndSlide, .25, 0, 0), e = !0) : n > 0 && (this.playAni(q.Slide_Short1, 0, 0, 0), 
                e = !0);
                break;

              case q.Slide_Targeting_Short_1:
                break;

              case q.Slide_Short1:
                this.stopSlide && (this.playAni(q.EndSlide, .25, 0, 0), e = !0);
                break;

              case q.Slide_Start_3:
                n > .6012049 && (this.playAni(q.Slide_Short1_0, .1993976, 0, 0, .6012049), e = !0);
                break;

              case q.Slide_Short1_0:
                this.slideNoShootingShort ? (this.playAni(q.Slide_Short2_0, 0, 0, 0), e = !0) : this.startSlideInAir && (this.playAni(q.Slide_Long1_0, 0, 0, 0), 
                e = !0);
                break;

              case q.Slide_Start_1:
                n > .7263052 && (this.playAni(q.Slide_Long1_0, .1368474, 0, 0, .7263052), e = !0);
                break;

              case q.Slide_Long2_0:
                this.slideNoShootingShort ? (this.playAni(q.Slide_Long1_0, 0, 0, 0), e = !0) : this.startSlideInAir && (this.playAni(q.Slide_Short2_0, 0, 0, 0), 
                e = !0);
                break;

              case q.Slide_Short2_0:
                this.slideNoShootingShort ? (this.playAni(q.Slide_Short1_0, 0, 0, 0), e = !0) : this.startSlideInAir && (this.playAni(q.Slide_Long2_0, 0, 0, 0), 
                e = !0);
                break;

              case q.EndSlide:
                n > .7664517 && (this.playAni(q.Run_Vert_Gun, .1532258, 0, .1181665, .7664517), 
                e = !0);
                break;

              case q.Slide_Long1_0:
                this.slideNoShootingShort ? (this.playAni(q.Slide_Short1_0, 0, 0, 0), e = !0) : this.startSlideInAir && (this.playAni(q.Slide_Long2_0, 0, 0, 0), 
                e = !0);
            }
            e || (this.jump ? this.playAni(q.Jump_Fast, .1901765, 0, 0) : this.cancle ? this.playAni(q.Flip_Pose_1, .1038384, 0, 0) : this.startSlideInAir ? this.playAni(q.Slide_Short1, .1675343, 0, 0) : this.slide ? this.playAni(q.Slide_Start_0, .1969255, 0, 0) : this.updateBleedAniAction(0));
        }
        updateLayer1() {
            let e = !1, t = this.animator.getCurrentAnimatorPlayState(1), n = 0;
            switch (t && (n = t.normalizedTime % 1), this.aniState2) {
              case q.Run_And_Look:
                break;

              case q.EndSlide:
                n > .6670968 && (this.playAni(q.Run_And_Look, .1758064, 1, .05704589, .6670968), 
                e = !0);
                break;

              case q.Slide_Short1_0:
                this.stopSlide && (this.playAni(q.EndSlide, .25, 1, 0), e = !0);
                break;

              case q.Slide_Start:
                this.stopSlide ? this.playAni(q.EndSlide, .25, 1, 0) : n > .2935483 && this.playAni(q.Slide_Short1_0, .3532258, 1, .2935483);
                break;

              case q.Slide_Targeting:
            }
            e || (this.slide ? this.playAni(q.Slide_Start, .1401785, 1, 0) : this.startSlideInAir ? this.playAni(q.Slide_Short1_0, .0982334, 1, 0) : this.updateBleedAniAction(1));
        }
        updateLayer2() {
            let e = this.animator.getCurrentAnimatorPlayState(2), t = 0;
            e && (t = e.normalizedTime % 1), this.shootR ? this.playAni(q.Shoot, .003448159, 2, 0) : this.updateBleedAniAction(2);
        }
        updateLayer3() {
            let e = this.animator.getCurrentAnimatorPlayState(3), t = 0;
            e && (t = e.normalizedTime % 1), this.shootL ? this.playAni(q.Shoot, 0, 3, 0) : this.updateBleedAniAction(3);
        }
        updateLayer4() {}
        playFlipPose1(e, t, n) {
            return this.updateTwoBleedAni(e, je.poseTypeList, t), e;
        }
        playFlipPose3(e, t, n) {
            return this.updateTwoBleedAni(e, je.poseTypeList, t);
        }
        playSlideShort1(e, t, n) {
            return 0 === t ? this.playSlideT(e, this.angle, n) : t < 1 ? this.playSlideSlo(e, this.angle, n) : t < 2 ? this.playSlide90(e, this.angle, n) : void 0;
        }
        playSlide90(e, t, n) {
            return this.updateTwoBleedAni(e, je.Slide90List, t, n);
        }
        playSlideT(e, t, n) {
            return this.updateTwoBleedAni(e, je.SlideTList, t, n);
        }
        playSlideSlo(e, t, n) {
            return this.updateTwoBleedAni(e, je.SlideTSloList, t, n);
        }
        playSlideTargeingShort(e, t, n) {
            return this.updateTwoBleedAni(e, je.SlideTList, t);
        }
        playRunLook(e, t, n) {
            return this.updateTwoBleedAni(e, je.RunLookList, t);
        }
        playSlideShort1_0(e, t, n) {
            return t <= 0 ? this.playSlideT(e, this.angle, n) : t <= 1 ? this.playSlideSlo(e, this.angle, n) : void 0;
        }
        playSlideLong2_0(e, t, n) {
            return t <= 0 ? this.playSlideT(e, this.angle, n) : t <= 1 ? this.playSlideSlo(e, this.angle, n) : void 0;
        }
        playSlideShort2_0(e, t, n) {
            return t <= 0 ? this.playSlideT(e, this.angle, n) : t <= 1 ? this.playSlideSlo(e, this.angle, n) : void 0;
        }
        playSlideLong1_0(e, t, n) {
            return t <= 0 ? this.playSlideT(e, this.angle, n) : t <= 1 ? this.playSlideSlo(e, this.angle, n) : void 0;
        }
        playAni(e, t, n, i, a) {
            switch (n) {
              case 0:
                if (this.aniState === e) return;
                this.aniState = e;
                break;

              case 1:
                if (this.aniState2 === e) return;
                this.aniState2 = e;
                break;

              case 2:
                if (this.aniState3 === e) return;
                this.aniState3 = e;
                break;

              case 3:
                if (this.aniState4 === e) return;
                this.aniState4 = e;
                break;

              case 4:
                if (this.aniState5 === e) return;
                this.aniState5 = e;
            }
            let s = this.getBleedAniName(e, n) || e;
            this.animator.crossFade(s, t, n, i);
        }
        getBleedAniName(e, t) {
            let n = null;
            switch (e) {
              case q.Flip_Pose_1:
                n = this.playFlipPose1(e, this.angle, t);
                break;

              case q.Flip_Pose_3:
                n = this.playFlipPose3(e, this.angle, t);
                break;

              case q.Slide_Short1:
                n = this.playSlideShort1(e, this.slopeSlideAngle, t);
                break;

              case q.Slide_Targeting_Short_1:
                n = this.playSlideTargeingShort(e, this.angle, t);
                break;

              case q.Slide_Short1_0:
                n = this.playSlideShort1_0(e, this.slopeSlideAngle, t);
                break;

              case q.Slide_Long2_0:
                n = this.playSlideLong2_0(e, this.slopeSlideAngle, t);
                break;

              case q.Slide_Short2_0:
                n = this.playSlideShort2_0(e, this.slopeSlideAngle, t);
                break;

              case q.Slide_Long1_0:
                n = this.playSlideLong1_0(e, this.slopeSlideAngle, t);
                break;

              case q.Run_And_Look:
                n = this.playRunLook(e, this.angle, t);

              case q.Slide_Targeting:
                n = this.playSlideTargeingShort(e, this.slopeSlideAngle, t);
            }
            return n;
        }
        updateBleedAni(e, t, n) {
            if (t && t.length > 0) {
                let e = 0;
                for (;e < t.length && !(t[e].threshold > n); e++) ;
                return e > 0 && (e -= 1), t[e].type;
            }
            return q.Idle;
        }
        clearValue() {
            this.run = !1, this.jump = !1, this.land = !1, this.landJump = !1, this.shootL = !1, 
            this.shootR = !1, this.laserOn = !1, this.stop = !1, this.blocker = !1, this.reload = !1, 
            this.reloadStand = !1, this.wallJumpRotate = !1, this.wallJump = !1, this.slide = !1, 
            this.stopSlide = !1, this.startSlideInAir = !1, this.slideNoShootingShort = !1, 
            this.slideFromAnyStateShort = !1, this.slideFromAnyStateLong = !1, this.nothing = !1, 
            this.cancle = !1;
        }
        updateBleedAniAction(e) {
            let t = this.aniState;
            1 === e ? t = this.aniState2 : 2 === e ? t = this.aniState3 : 3 === e ? t = this.aniState4 : 4 === e && (t = this.aniState5), 
            this.getBleedAniName(t, e);
        }
        initBlendAni() {
            this._animator && (this.addBlendAni(q.Flip_Pose_1, J.L, 0, 1), this.addBlendAni(q.Flip_Pose_3, J.L, 0, 1), 
            this.addBlendAni(q.Slide_Short1, Z.L, 0, 1), this.addBlendAni(q.Slide_Targeting_Short_1, j.L, 0, 1), 
            this.addBlendAni(q.Slide_Short1_0, j.L, 0, 1), this.addBlendAni(q.Slide_Long2_0, j.L, 0, 1), 
            this.addBlendAni(q.Slide_Short2_0, j.L, 0, 1), this.addBlendAni(q.Slide_Long1_0, j.L, 0, 1), 
            this.addBlendAni(q.Run_And_Look, Q.L, 0, 1), this.addBlendAni(q.Run_And_Look, Q.L, 1, 1), 
            this.addBlendAni(q.Slide_Short1_0, j.L, 1, 1), this.addBlendAni(q.Slide_Targeting, j.L, 1, 1));
        }
        addBlendAni(e, t, n, i) {
            we.addBlendAni(this._animator, e, t, n, i);
        }
        updateTwoBleedAni(e, t, n, i = 0) {
            if (!t || !t.length) return e;
            let a = this.getAniState(e, i);
            if (!a) return;
            let s = 0;
            for (;s < t.length && !(t[s].threshold > n); s++) ;
            s > 0 && (s -= 1);
            let o = (n - t[s].threshold) / (t[s + 1].threshold - t[s].threshold);
            return a.weight = y.clamp(o, 0, 1), a.firstAni = this.getAniState(t[s].type, i), 
            a.secondAni = this.getAniState(t[s + 1].type, i), e;
        }
        getAniState(e, t) {
            if (!this._animator) return;
            let n = this._animator.getControllerLayer(t);
            return n ? n.getAnimatorState(e) : void 0;
        }
        setAniPlayerSpeed(e, t, n) {
            let i = this.getAniState(e, t);
            i && (i.speed = n);
        }
        initAniSpeed() {
            this.setAniPlayerSpeed(q.Land_0, 0, 1.4), this.setAniPlayerSpeed(q.Land, 0, 1.4), 
            this.setAniPlayerSpeed(q.Flip_Pose_1, 0, .9), this.setAniPlayerSpeed(q.Land_1, 0, 1.4), 
            this.setAniPlayerSpeed(q.Flip_Pose_2, 0, .9), this.setAniPlayerSpeed(q.Land_2, 0, 1.4), 
            this.setAniPlayerSpeed(q.Flip_Pose_3, 0, .9), this.setAniPlayerSpeed(q.Slide_Short1, 0, .6), 
            this.setAniPlayerSpeed(q.Slide_Short1_0, 0, .4), this.setAniPlayerSpeed(q.Slide_Targeting_Short_1, 0, .4), 
            this.setAniPlayerSpeed(q.Slide_Short2_0, 0, 1), this.setAniPlayerSpeed(q.Slide_Long2_0, 0, .15), 
            this.setAniPlayerSpeed(q.Slide_Long1_0, 0, .15), this.setAniPlayerSpeed(q.EndSlide, 0, .7), 
            this.setAniPlayerSpeed(q.EndSlide, 1, .7), this.setAniPlayerSpeed(q.Slide_Short1_0, 1, .4), 
            this.setAniPlayerSpeed(q.Slide_Start, 1, .6), this.setAniPlayerSpeed(q.Shoot, 2, 1.5), 
            this.setAniPlayerSpeed(q.Shoot, 3, 1.5);
        }
    }
    je.poseTypeList = [ {
        type: J.Up,
        threshold: 0
    }, {
        type: J.UpR,
        threshold: .125
    }, {
        type: J.R,
        threshold: .25
    }, {
        type: J.DownR,
        threshold: .375
    }, {
        type: J.Down,
        threshold: .5
    }, {
        type: J.DownL,
        threshold: .625
    }, {
        type: J.L,
        threshold: .75
    }, {
        type: J.UpL,
        threshold: .875
    }, {
        type: J.Up,
        threshold: 1
    } ], je.SlideTList = [ {
        type: j.Up,
        threshold: 0
    }, {
        type: j.UpR,
        threshold: .125
    }, {
        type: j.R,
        threshold: .25
    }, {
        type: j.DownR,
        threshold: .375
    }, {
        type: j.Down,
        threshold: .5
    }, {
        type: j.DownL,
        threshold: .625
    }, {
        type: j.L,
        threshold: .75
    }, {
        type: j.UpL,
        threshold: .875
    }, {
        type: j.Up,
        threshold: 1
    } ], je.SlideTSloList = [ {
        type: $.Up,
        threshold: 0
    }, {
        type: $.UpR,
        threshold: .125
    }, {
        type: $.R,
        threshold: .25
    }, {
        type: $.DownR,
        threshold: .375
    }, {
        type: $.Down,
        threshold: .5
    }, {
        type: $.DownL,
        threshold: .625
    }, {
        type: $.L,
        threshold: .75
    }, {
        type: $.UpL,
        threshold: .875
    }, {
        type: $.Up,
        threshold: 1
    } ], je.Slide90List = [ {
        type: Z.Up,
        threshold: 0
    }, {
        type: Z.UpR,
        threshold: .125
    }, {
        type: Z.R,
        threshold: .25
    }, {
        type: Z.DownR,
        threshold: .375
    }, {
        type: Z.Down,
        threshold: .5
    }, {
        type: Z.DownL,
        threshold: .625
    }, {
        type: Z.L,
        threshold: .75
    }, {
        type: Z.UpL,
        threshold: .875
    }, {
        type: Z.Up,
        threshold: 1
    } ], je.RunLookList = [ {
        type: Q.Up,
        threshold: 0
    }, {
        type: Q.UpR,
        threshold: .125
    }, {
        type: Q.R,
        threshold: .25
    }, {
        type: Q.DownR,
        threshold: .375
    }, {
        type: Q.Down,
        threshold: .5
    }, {
        type: Q.DownL,
        threshold: .625
    }, {
        type: Q.L,
        threshold: .75
    }, {
        type: Q.UpL,
        threshold: .875
    }, {
        type: Q.Up,
        threshold: 1
    } ];
    class Qe {
        constructor() {
            this.speed = 2, this.skinID = 0, this.canShoot = !1, this._bullets = 7, this._moveProgress = 0, 
            this._path = [], this._segments = [], this._curveIndex = 0, this._segmentCount = 0, 
            this._alive = !0, this._run = !1, this._defaultRimAmount = 0, this._speedMultipler = 1, 
            this._turned = !1, this._lockedAutoReload = !1, this._justMoveAway = !1, this._finishReached = !1, 
            this._finishSegment = !1, this._canPlayStep = !0, this._timeStamp = 0, this.checkPointIndex = 0, 
            this.aniCtrl = null, this.footStepSmokeSp = null;
        }
        setModel(e) {
            this._model = e, this._anim = F.getCommpentInHerit(e, Laya.Animator), this.aniCtrl = this._model.addComponent(je), 
            this.aniCtrl.animator = this._anim, this.weapons = this._model.addComponent(ye), 
            this._targetPoint = e.getChildByName("Targeting"), this._rotatioFix = e.getChildByName("RotationFix"), 
            this.footStepSmokeSp = e.getChildByName("FootStepSmoke"), this._targetPoint.active = !1;
            let t = F.getCompentsInHerit(e, Laya.Rigidbody3D);
            t && t && t.forEach(e => {
                e.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
            });
            let n = F.getCompentsInHerit(e, Laya.PhysicsCollider);
            n && n && n.forEach(e => {
                e.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
            });
        }
        getTargetPoint() {
            return this._model.transform.position;
        }
        init(e, t) {
            this.setPath(e, t);
        }
        showBullets(n) {
            this.setBullets(n), e.Instance.event(t.BulletChange, n);
        }
        reload() {
            this.showBullets(7), this.reloadAnimation(), pe.Instance.playSound(de.reload);
        }
        DropMag() {
            this.weapons.dropMag();
        }
        updateWeapon() {}
        setBullets(e) {
            this._bullets = e;
        }
        getBullets() {
            return this._bullets;
        }
        reloadAnimation() {
            this.aniCtrl.reload = !0, this.aniCtrl.reloadStand = !0, this.weapons.playReload();
        }
        setPath(e, t) {
            this._path = e, this._segments = [], this._path.forEach(e => {
                if (e && e.owner && e.owner.numChildren) for (let t = 0; t < e.owner.numChildren; t++) {
                    let n = e.owner.getChildAt(t).getComponents(Ne);
                    n && n.length && n.forEach(e => {
                        this._segments.push(e);
                    });
                }
            }), this._segmentCount = this._segments.length;
        }
        startRun() {
            this._run = !0;
            let e = this._segments[this._curveIndex];
            this.startModifiers(e);
        }
        gameUpdate() {
            if (this.isRunning()) {
                if (this.canPlayFootsteps()) {
                    let e = Date.now();
                    e - this._timeStamp > 400 && (this._timeStamp = e, pe.Instance.playSound(de.footstep), 
                    this.footStepSmokeSp && this.footStepSmokeSp.particleSystem.play());
                }
                this.updateMovement();
            }
        }
        isRunning() {
            return this._run;
        }
        updatePlayer(e) {
            let t = e.getPoint(this._moveProgress);
            this.setPosition(t), this._moveProgress >= 1 ? this.FinishModifiers(e) : this.updateModifiers(e);
        }
        onHostageKilled() {
            this.endUpdating();
        }
        endUpdating() {
            this._run = !1;
        }
        updateMovement() {
            let e = this._segments[this._curveIndex];
            if (!e) return;
            let t = e.distance * this._moveProgress + this.getSpeed() * Math.min(50, Laya.timer.delta) / 1e3;
            this._moveProgress = e.spline.getProgress(t), this.updatePlayer(e);
        }
        getSpeed() {
            return this.speed;
        }
        checkReload() {
            return !(this._bullets < 7) || (this.reload(), !0);
        }
        finishReached(e = !1) {
            this._finishReached || (this._finishReached = !0, pe.Instance.stopSound(de.footstep), 
            nt.Instance.onFinishReached(e));
        }
        canPlayFootsteps() {
            return this._canPlayStep && !this._finishReached;
        }
        onLand() {}
        startModifiers(e) {
            e.onStart2(this);
        }
        updateModifiers(e) {
            if (e.owner) {
                let t = e.owner.getComponents(Te);
                t && t.length && t.forEach(e => {
                    e.evaluate(this._moveProgress);
                });
            }
        }
        setJustMove() {
            this._justMoveAway = !0;
        }
        JustMoveAway() {
            return this._justMoveAway;
        }
        FinishModifiers(e) {
            e.onFinish(this), this.nextSegment();
        }
        setPosition(e) {
            this._model.transform.position = e;
        }
        setRotation(e, t = 0) {
            let n = this._model.transform.rotationEuler.clone();
            n.z = e, this._model.transform.rotationEuler = n, this.aniCtrl.angle = t;
            let i = this._targetPoint.transform.localRotationEuler.clone();
            i.z = 360 - 360 * t + 25, this.weapons.setTargetingRotation(i);
        }
        enableAiming(e, t = .2) {
            this.weapons.doEnable(e), this._targetPoint && (this._targetPoint.active = e);
        }
        turn(e, t = 0, n = !0, i = 4) {
            let a = {
                y: this._model.transform.rotationEuler.y
            };
            Laya.Tween.to(a, {
                y: e ? 180 : 0,
                update: new Laya.Handler(this, () => {
                    let e = this._model.transform.rotationEuler.clone();
                    e.y = a.y, this._model.transform.rotationEuler = e;
                })
            }, t, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                n && (this._turned = e);
            }));
        }
        lockAutoReload(e = !0) {}
        enabelShooting(e, t = !0) {
            this.canShoot = e;
        }
        isShootingMode(e) {}
        onAction() {}
        addToIndex(e) {}
        setSpeedMultiplier(e) {
            this._speedMultipler = e, Laya.timer.scale = e;
        }
        getSpeedMultiplier() {
            return this._speedMultipler;
        }
        shoot() {
            this._bullets <= 0 || this.canShoot && (this.aniCtrl.shootL = !0, this.aniCtrl.shootR = !0, 
            this.weapons.shoot(), this.showBullets(this._bullets - 1), pe.Instance.playSound(de.apc9shot1));
        }
        stop() {
            this._run = !1, this.aniCtrl.stop = !0;
        }
        stopUpdates() {
            this.endUpdating();
        }
        onLose(e) {}
        onShot(e, t) {
            this._alive && this.kill();
        }
        onExplosion(e) {}
        toggleSlide(e = !1, t = 0) {
            this.aniCtrl.angle = t, this.aniCtrl.slide = e;
        }
        kill() {
            this._alive = !1, ct.vibrateShort(), pe.Instance.playSound(de.onKill), nt.Instance.showGameOver(2), 
            pe.Instance.stopSound(de.footstep);
        }
        setTrigger(e) {
            e && e.length && (this.aniCtrl[e] = !0, this._canPlayStep = "land" === e || "run" === e || "stopSlide" === e);
        }
        checkPointReached(e) {
            this.checkPointIndex !== e && (this.checkPointIndex = e, Qe.OnCheckPointReached && Qe.OnCheckPointReached(e));
        }
        changeVariation() {}
        loadVariation() {}
        nextSegment() {
            this.checkReload(), this.enableAiming(!1, 0);
            let e = this._segments[this._curveIndex];
            if (e.loopEnabled && e.loopIndexReturn > 0 ? this._curveIndex = e.loopIndexReturn + 1 : this._curveIndex++, 
            this._curveIndex >= this._segmentCount) return void (this._finishSegment = !0);
            this._moveProgress = 0;
            let t = this._segments[this._curveIndex];
            this.startModifiers(t);
        }
        moveToEnd() {}
        clear() {
            this._model.destroy();
        }
    }
    class $e extends Laya.Script3D {
        constructor() {
            super(...arguments), this.defaultFov = 0, this._stopped = !1;
        }
        onAwake() {
            this._followVector = new Laya.Vector3(-1, 1, -10);
        }
        setPlayer(e, t = !1) {
            this.target = e, t && (this.owner.transform.position = V.add(e.transform.position, this._followVector));
            let n = this.owner;
            Laya.timer.once(500, this, () => {
                n.clearFlag = Laya.BaseCamera.CLEARFLAG_SOLIDCOLOR, n.clearColor = f.Instance.getCameraColor(_.Instance.level);
            }), this._stopped = !1;
        }
        stopFollow() {
            this._stopped = !0;
        }
        trackWithDelta() {}
        setFollowVector(e) {
            this._followVector = e.clone();
        }
        setOffsetVector(e, t = 1, n = 4) {
            this._defaultOffset = e.clone();
        }
        zoomIn(e, t, n = 3) {}
        setRotation(e, t = 1, n = 4) {}
        setFov(e) {}
        resetToDefautlt() {}
        gameUpdate() {
            this._stopped || this.target && (this.owner.transform.position = V.add(this.target.transform.position, this._followVector));
        }
    }
    !function(e) {
        e[e.role = 0] = "role", e[e.gun = 1] = "gun";
    }(ee || (ee = {})), function(e) {
        e[e.free = 0] = "free", e[e.vedio = 1] = "vedio", e[e.level = 2] = "level", e[e.sign = 3] = "sign", 
        e[e.goin = 4] = "goin";
    }(te || (te = {}));
    class Ze {
        constructor() {
            this.tempRoleSkin = -1, this.tempGunSkin = -1;
        }
        static get Instance() {
            return null === Ze._instance && (Ze._instance = new Ze()), Ze._instance;
        }
        getSkinCfgData(e) {
            return e == ee.gun ? f.Instance.gunCfgData : f.Instance.roleCfgData;
        }
        getCurSkin(e) {
            return e == ee.gun ? _.Instance.user.playerInfo.curGunSkin || 1 : _.Instance.user.playerInfo.curRoleSkin || 1;
        }
        setCurSkin(e, t) {
            t == ee.gun ? _.Instance.user.playerInfo.curGunSkin = e : _.Instance.user.playerInfo.curRoleSkin = e;
        }
        getSkinCfg(e, t) {
            let n = this.getSkinCfgData(t);
            return e > n.length && (e = 1), n[e - 1];
        }
        getCurSkinCfg(e) {
            let t = this.getSkinCfgData(e), n = this.getCurSkin(e);
            return n > t.length && (n = 1), t[n - 1];
        }
        hasComplete(e, t) {
            let n = this.getSkinCfg(e, t), i = this.getSkinInfo(e, t);
            if (n.conditionType == i.type) {
                if (n.conditionType == te.free) return !0;
                if (n.conditionType == te.level) {
                    if (_.Instance.level + 1 > n.conditionCnt) return !0;
                } else if (i.cnt >= n.conditionCnt) return i.activatedTime || (i.activatedTime = Date.now()), 
                !0;
            } else this.setSkinInfo(e, {
                type: n.conditionType,
                cnt: 0
            }, t);
            return !1;
        }
        getSkinInfo(e, t) {
            return (_.Instance.user.playerInfo.skinArr1 || [ [], [] ])[t][e] || {
                type: 0,
                cnt: 0,
                activatedTime: 0
            };
        }
        setSkinInfo(e, t, n) {
            var i = _.Instance.user.playerInfo.skinArr1 || [ [], [] ];
            i[n][e] = t, _.Instance.user.playerInfo.skinArr1 = i, _.Instance.doSaveGameData();
        }
        setTempSkin(e, t) {
            t == ee.gun ? this.tempGunSkin = e : this.tempRoleSkin = e;
        }
        resetTempSkin() {
            this.tempRoleSkin = -1, this.tempGunSkin = -1;
        }
        getGameSkin(e) {
            let t = this.getCurSkin(e), n = e == ee.role ? this.tempRoleSkin : this.tempGunSkin;
            return n >= 0 && (t = n), this.getSkinCfg(t, e);
        }
        getRandomLockSkinCfg(e) {
            let t = [], n = this.getSkinCfgData(e);
            if (n) for (let i = 0; i < n.length; i++) {
                let a = n[i];
                this.hasComplete(a.id, e) || t.push(a);
            }
            if (t.length > 0) {
                return t[Math.floor(Math.random() * (t.length - 1))];
            }
            return null;
        }
        getRoleProgressInfo() {
            let e = f.Instance.roleCfgData, t = _.Instance.level - 1, n = 0;
            for (let i = 1; i < e.length; i++) {
                let a = e[i];
                if (a && 2 == a.conditionType) {
                    if (t < a.conditionCnt) return {
                        id: a.id,
                        num: t - n,
                        total: a.conditionCnt - n,
                        cfg: a
                    };
                    n = a.conditionCnt;
                }
            }
            return null;
        }
    }
    Ze.noGunSkin = !0, Ze._instance = null;
    class et {
        constructor() {
            this.scene = null, this.weaponsMap = {}, this.weaponsCategoryMap = {}, this.folders = [], 
            this.loadConfig();
        }
        static get Instance() {
            return null === et._instance && (et._instance = new et()), et._instance;
        }
        loadConfig() {}
        getModelName(e) {
            return `res/scene/${e}.lh`;
        }
        preLoadLevelRes() {
            let e = Je.Instance.getLevelPatternList(_.Instance.level + 1);
            e && e.length && Laya.loader.create(e.map(e => ({
                url: this.getModelName(e)
            })));
        }
        loadLevel() {
            this.scene && (this.scene.active = !1, this.scene.destroy(), this.scene = null), 
            Laya.Scene3D.load("res/scene/main.ls", Laya.Handler.create(this, e => {
                Laya.stage.addChild(e), this.scene = e;
                let t = e.getChildByName("Main Camera");
                t && (nt.Instance.cameraController = t.addComponent($e)), Je.Instance.levelContainer = this.scene.getChildByName("Level"), 
                Je.Instance.loadLevel().then(e => {
                    this.createPlayer();
                });
            }));
        }
        createPlayer(n = !1) {
            let i = Ze.Instance.getGameSkin(ee.role);
            nt.Instance.player && (nt.Instance.player.clear(), nt.Instance.player = null), i && Laya.Sprite3D.load(this.getModelName(i.modelName), Laya.Handler.create(this, a => {
                let s = a.clone();
                this.scene.addChild(s), s.name = "qiangshou";
                let o = new Qe();
                o.skinID = i.id, nt.Instance.player = o, o.setModel(s), o.init(Je.Instance.getPath(), 2), 
                nt.Instance.cameraController.setPlayer(s, !0), n ? e.Instance.event(t.ChangePlayerSkinCompleted) : e.Instance.event(t.LoadLevelComplete);
            }));
        }
        loadPattern(e) {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        loadModel(e) {
            return new Promise((t, n) => {
                Laya.Sprite3D.load(e, Laya.Handler.create(this, e => {
                    e ? t(e.clone()) : n("load error");
                }));
            });
        }
        loadWall(e) {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        loadEnvironment(e) {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getBullet(e = "Bullet") {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getEffect(e) {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getEnemy(e = "Enemy") {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getHostage(e = "hostage") {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getRandomInFolder(e) {
            return "";
        }
        getListInFolder(e) {
            return [ "" ];
        }
        getShotEffect(e = "glow") {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getBloodEffect(e = "BloodDirectional") {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getHeadShotEffect() {
            let e = this.getModelName("headerShotEffect");
            return this.loadModel(e);
        }
        preLoadLevel(e) {
            let t = [ {
                url: "res/scene/main.ls"
            }, {
                url: "res/scene/qiangshou.lh"
            }, {
                url: "res/scene/qiangshou2.lh"
            }, {
                url: "res/scene/qiangshou3.lh"
            }, {
                url: "res/scene/qiangshou4.lh"
            }, {
                url: "res/scene/qiangshou5.lh"
            }, {
                url: "res/scene/qiangshou6.lh"
            }, {
                url: "res/scene/qiangshou7.lh"
            }, {
                url: "res/scene/qiangshou8.lh"
            }, {
                url: this.getModelName("bg1")
            } ];
            _.Instance.user.playerInfo || _.Instance.user.loadCacheData();
            let n = Je.Instance.getLevelPatternList(_.Instance.level);
            n && n.length && n.forEach(e => {
                t.push({
                    url: this.getModelName(e)
                });
            }), Laya.loader.create(t, e);
        }
        getMat(e) {
            let t = new Laya.BlinnPhongMaterial();
            return t.specularColor = new Laya.Vector4(0, 0, 0, 1), t.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_CUTOUT, 
            t.enableLighting = !0, t.albedoTexture = Laya.loader.getRes(e), t;
        }
    }
    et._instance = null, et.LevelPatterns = [ "p_3_1", "p_3_3", "p_4_1", "p_4_2", "p_5_1", "p_5_2", "p_6_1", "p_6_4", "p_6_5", "p_8_3", "p_8_4", "p_9_1", "p_9_2", "p_10_1", "p_10_2", "p_10_4", "p_11_1", "p_16_1", "p_510_1", "p_511_1", "p_3000_2", "p_3_2", "p_5_4", "p_6_3" ], 
    et.FinishPatterns = [ "p_finish_1", "p_finish_2", "p_finish_3" ], et.StartPatterns = [ "p_start_1", "p_start_2", "p_start_3", "p_start_4", "p_start_5" ], 
    et.EmenyPatterns = [ "p_empty_1", "p_empty_criminal_102", "p_empty_criminal_106" ], 
    et.BossPatterns = [ "boss_5" ], et.CheckPointPatterns = [ "p_checkpoint_1" ];
    class tt {
        constructor() {
            this.showEggViewCountDown = 0, this.showedEggViewCount = 0, this.nextInterval = 0, 
            ct.IsQQ() && (d.vGameInfo.eggInfo = d.vGameInfo.qqADInfo.eggInfo);
        }
        static get Instance() {
            return null === tt._instance && (tt._instance = new tt()), tt._instance;
        }
        checkShowEggView(e = null) {
        }
    }
    tt._instance = null, function(e) {
        e[e.None = 0] = "None", e[e.Ready = 1] = "Ready", e[e.Moving = 2] = "Moving", e[e.Waiting = 3] = "Waiting", 
        e[e.Stop = 4] = "Stop";
    }(ne || (ne = {}));
    class nt {
        constructor() {
            this.battleCnt = 0, this.battleCntDay = 0, this.isInBattle = !1, this.showAdCount = 0, 
            this.preparing = !1, this.playerCount = 0, this.isGamePause = !1, this.preloadInAD = !1, 
            this.prepareGaming = !1, this.inBattling = !1, this.beginBig = !1, this.time = 0, 
            this.lastTime = 0, this.gameTime = 120, this.killNum = 0, this.isBoss = !1, this.getGameMode = function() {
                return this.gameMode;
            }, this.reset(), this.init();
        }
        static get Instance() {
            return null === nt._instance && (nt._instance = new nt()), nt._instance;
        }
        init() {
            this.registerEvent();
        }
        registerEvent() {
            e.Instance.on(t.GetFocus, this, this.onGetFocus), e.Instance.on(t.LostFocus, this, this.onLostFocus), 
            e.Instance.on(t.LoadLevelComplete, this, this.loadLevelCompleted), e.Instance.on(t.ChangePlayerSkinCompleted, this, this.onStart), 
            e.Instance.on(t.SkinChange, this, this.onSkinChange), e.Instance.on(t.HostageDie, this, this.hosageKilled);
        }
        unregisterEvent() {
            e.Instance.off(t.GetFocus, this, this.onGetFocus), e.Instance.off(t.LostFocus, this, this.onLostFocus), 
            e.Instance.off(t.LoadLevelComplete, this, this.loadLevelCompleted), e.Instance.off(t.ChangePlayerSkinCompleted, this, this.onStart), 
            e.Instance.off(t.SkinChange, this, this.onSkinChange), e.Instance.off(t.HostageDie, this, this.hosageKilled);
        }
        onGetFocus() {
            console.log("onGetFocus"), this.player ? Laya.timer.scale = this.player.getSpeedMultiplier() : Laya.timer.scale = 1;
        }
        onLostFocus() {
            Laya.timer.scale = 0, console.log("onLostFocus");
        }
        reset() {
            this.battleCnt = 0, this.battleCntDay = 0, this.isInBattle = !1, this.preparing = !1, 
            this.showAdCount = 0, this.readBattleCnt();
        }
        AddBattleCnt() {
            this.battleCnt++, this.battleCntDay++, _.Instance.battleCount = _.Instance.battleCount + 1, 
            _.Instance.dayBattleCount = _.Instance.dayBattleCount + 1, this.saveBattleCnt(), 
            ct.Instance.report(a.BattleInfo, {
                battleCnt: this.battleCnt,
                battleCntDay: this.battleCntDay
            });
        }
        saveBattleCnt() {
            Laya.LocalStorage.setItem("battleCnt", this.battleCnt.toString()), Laya.LocalStorage.setItem("battleCntDay", this.battleCntDay.toString());
        }
        readBattleCnt() {
            this.battleCnt = parseInt(Laya.LocalStorage.getItem("battleCnt")) || 0, this.battleCntDay = parseInt(Laya.LocalStorage.getItem("battleCntDay")) || 0;
            let e = Date.now();
            p.lastStartTime > 0 && !u.isSameDay(e, p.lastStartTime) && (Laya.LocalStorage.setItem("battleCntDay", "0"), 
            this.battleCntDay = 0);
        }
        get user() {
            return _.Instance.user;
        }
        setGamePause(e) {
            console.log("setGamePause ....." + e), this.isGamePause = e, e ? L.Instance.pause() : L.Instance.resume();
        }
        clear() {
            !1 !== this.isInBattle && this.clearData();
        }
        clearData() {
            this.isInBattle = !1, this.preparing = !1, this.showAdCount = 0;
        }
        static collect() {
            let e = ct.getPlatform();
            e && e.triggerGC && e.triggerGC();
        }
        doPreloadAD() {
            // if (!this.preloadInAD && !ct.IsOppo() && !it.Instance.aCheck() && d.vGameInfo.showInAd && d.vGameInfo.eInfo) {
            //     _.Instance.dayBattleCount - d.vGameInfo.eInfo.dayGame >= 0 && (ct.Instance.showInterstitialAd(1, "", "", !0), 
            //     this.preloadInAD = !0);
            // }
        }
        loadLevel() {
            Laya.timer.clear(this, this.onUpdate), e.Instance.event(t.ShowStartView), et.Instance.loadLevel(), 
            this.killNum = 0;
        }
        preloadLevel() {
            et.Instance.preLoadLevelRes();
        }
        loadLevelCompleted() {
            this._state = ne.Ready;
        }
        onStart() {
            if (this._state === ne.Ready) {
                if (this.player) {
                    let e = Ze.Instance.getGameSkin(ee.role);
                    if (e && e.id !== this.player.skinID) return void et.Instance.createPlayer(!0);
                }
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTouchBegin), this.startLevel();
            }
        }
        levelCompleted(n = .15, i = !1) {
            this.doFinishAction(i), pe.Instance.playSound(de.victory), e.Instance.event(t.LevelSuccess), 
            Laya.timer.once(1e3 * n, this, this.showLevelComplete);
        }
        doFinishAction(e = !1) {
            Laya.timer.scale = 1, this.cameraController.stopFollow(), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onTouchBegin), 
            e && (Laya.timer.clear(this, this.onUpdate), this.player = null);
        }
        onFinishReached(e) {
            this.levelCompleted(2, e);
        }
        showLevelComplete() {
            this.openSetmnent(!0), this.killNum = 0, this.isBoss = !1;
        }
        checkUnlok() {}
        setNext() {
            this.showRoleProgress(), this.loadLevel();
        }
        startLevel() {
            this.AddBattleCnt(), Ze.Instance.resetTempSkin(), this._state = ne.Moving, Laya.timer.frameLoop(1, this, this.onUpdate), 
            this.player.startRun(), e.Instance.event(t.HideStartView);
        }
        onTouchBegin() {
            this._state === ne.Ready ? this.startLevel() : this._state === ne.Moving && this.player && this.player.shoot();
        }
        onUpdate() {
            this._state === ne.Moving && (this.player && this.player.gameUpdate(), this.cameraController && this.cameraController.gameUpdate());
        }
        enemyKilled(e) {}
        bossKillEffect(e) {}
        hosageKilled(e) {
            nt.Instance.showGameOver(2), pe.Instance.stopSound(de.footstep);
        }
        onLose() {}
        showGameOver(n) {
            this.doFinishAction(!0), e.Instance.event(t.LevelFail), pe.Instance.playSound(de.Fail), 
            Laya.timer.once(1e3 * n, this, () => {
                this.openSetmnent(!1);
            });
        }
        openSetmnent(e) {
            console.log("Taylor --- boolean= " + e);
            let t = this.isBoss ? 100 : 10 * this.killNum, n = this.killNum, i = () => {
                Wt.Instance.openUI(zt.Settement, {
                    success: !0,
                    coin: t,
                    killNum: n,
                    isBoss: this.isBoss
                });
            }, a = () => {
                Wt.Instance.openUI(zt.Settement, {
                    success: !1,
                    coin: 0
                });
            };
            e ? C.Instance.isOpenSDK() ? Wt.Instance.openUI(zt.MatrixTui4, {
                callback: i
            }) : i && i() : C.Instance.isOpenSDK() ? Wt.Instance.openUI(zt.MatrixTui4, {
                callback1: a
            }) : a && a();
        }
        restart() {
            this.loadLevel();
        }
        skipLevel() {
            _.Instance.level++, _.Instance.levelInfo = null, this.showRoleProgress(), this.loadLevel();
        }
        checkStartGame() {
            // if (tt.Instance.checkShowEggView()) return;
            let e = Ze.Instance.getRandomLockSkinCfg(ee.role), t = Ze.noGunSkin ? null : Ze.Instance.getRandomLockSkinCfg(ee.gun);
            null != e && null == t ? Wt.Instance.openUI(zt.Try, {
                cfg: e,
                skinType: ee.role
            }) : this.onStart();
        }
        showRoleProgress() {
            let e = Ze.Instance.getRoleProgressInfo();
            null != e && Laya.timer.callLater(this, () => {
                Wt.Instance.openUI(zt.RoleProgress, e);
            });
        }
        onSkinChange() {
            this._state = ne.None, et.Instance.createPlayer(!1);
        }
    }
    nt._instance = null, nt.offlineTime = 0, nt.needTryShow = !1, function(e) {
        e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
    }(ie || (ie = {})), function(e) {
        e[e.Unknow = -1] = "Unknow", e[e.DefaultShare = 0] = "DefaultShare", e[e.SettlementSkipAD = 1] = "SettlementSkipAD", 
        e[e.SettlementDoubleAD = 2] = "SettlementDoubleAD", e[e.SkinTryAD = 3] = "SkinTryAD", 
        e[e.FreeTryAD = 4] = "FreeTryAD", e[e.RoleProgress = 5] = "RoleProgress", e[e.HomeShare = 6] = "HomeShare", 
        e[e.Egg = 7] = "Egg", e[e.OfflineAD = 8] = "OfflineAD";
    }(ae || (ae = {})), se || (se = {}), function(e) {
        e[e.Default = 0] = "Default", e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
    }(oe || (oe = {})), function(e) {
        e[e.Default = 0] = "Default", e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
    }(re || (re = {}));
    class it {
        constructor() {
            this._lastCallTime = 0, this.videoMapping = {}, this.shareMapping = {}, this.clickShareCnts = {}, 
            this.canFetchVideo = !0, this._isShowingBanner = !1, this._inited = !1, this._callShare = !1, 
            this._callShareReward = !1, this._dailyShareMapping = {}, this._vsCount = 0, this._videoCount = 0, 
            this._vsFailShareCount = 0, this._lastCallTime = 0, this.videoMapping = {}, this.shareMapping = {}, 
            this.clickShareCnts = {}, this.canFetchVideo = !0, this._isShowingBanner = !1, this._dailyShareMapping = {}, 
            this._inited = !1, this._callShare = !1, this._callShareReward = !1, this.registerEvent(), 
            this.readVideoCache();
        }
        static get Instance() {
            return null == it._instance && (it._instance = new it()), it._instance;
        }
        registerEvent() {
            e.Instance.on(t.FetchVideoFail, this, this.onFetchVideoFail), e.Instance.on(t.GetFocus, this, this.onGameFocus), 
            e.Instance.on(t.OverDayEvent, this, this.resetByOverDay), e.Instance.on(t.FinishVideoAd, this, this.onFinishVideoAd);
        }
        unregisterEvent() {
            e.Instance.off(t.FetchVideoFail, this, this.onFetchVideoFail), e.Instance.off(t.GetFocus, this, this.onGameFocus), 
            e.Instance.off(t.FinishVideoAd, this, this.onFinishVideoAd);
        }
        canShowVideo() {
            return !0;
        }
        onFetchVideoFail(e) {
            ct.IsOppo() ? Wt.Instance.showTips("获取视频失败") : (this.canFetchVideo = !1, this.saveVideoCache(), 
            !this.isForceVideoWithError(e) && this.checkShowShareAfterVideoFail(e) || Wt.Instance.showTips("获取视频失败"));
        }
        saveShareCache(e, t) {
            this._dailyShareMapping[e] = {
                shared: !0,
                shareTime: t
            }, Laya.LocalStorage.setJSON("dailySharedMapping", this._dailyShareMapping);
        }
        saveVideoCache() {
            Laya.LocalStorage.setItem("canFetchVideo", (this.canFetchVideo ? 1 : 0).toString()), 
            Laya.LocalStorage.setItem("vsCount", this._vsCount.toString()), Laya.LocalStorage.setItem("vsFailShareCount", this._vsFailShareCount.toString()), 
            Laya.LocalStorage.setItem("videoCount", this._videoCount.toString());
        }
        readVideoCache() {
            var e = new Date(), t = e.getFullYear(), n = e.getMonth(), i = e.getDate(), a = Laya.LocalStorage.getJSON("dailySharedMapping");
            for (var s in a) {
                var o = a[s], r = o.shared, l = o.shareTime, h = new Date(l), c = h.getFullYear(), d = h.getMonth(), u = h.getDate();
                (t > c || t == c && (n > d || n == d && i > u)) && (r = !1, l = null), this._dailyShareMapping[s] = {
                    shared: r,
                    shareTime: l
                };
            }
            a = Laya.LocalStorage.getItem("canFetchVideo") || 0, this.canFetchVideo = 1 == (parseInt(a) || 0), 
            this.canFetchVideo = !0, this._vsCount = g.getNumberValue("vsCount") || 0, this._vsFailShareCount = g.getNumberValue("vsFailShareCount") || 0, 
            this._videoCount = g.getNumberValue("videoCount") || 0, p.isOverDay && this.resetByOverDay();
        }
        wxCheck() {
            return !d.Dev && d.State == i.Check;
        }
        aCheck() {
            return !!this.wxCheck() || (ct.IsQQ() ? d.vGameInfo.qqacv === d.ClientVer : ct.IsTouTiao() ? d.vGameInfo.ttacv === d.ClientVer : !d.Dev && d.ClientVer === d.vGameInfo.acv);
        }
        getVideoCnt(e) {
            var t = this.videoMapping[e];
            return null == t ? 0 : t;
        }
        getShareClickCnt(e) {
            var t = this.clickShareCnts[e];
            return null == t ? 0 : t;
        }
        addShareClickCnt(e) {
            var t = this.clickShareCnts[e];
            null == t ? t = 1 : t++, this.clickShareCnts[e] = t;
        }
        showADBanner(e, t = -1) {
            if (C.Instance.isOpenSDK() && e == zt.Settement.id && !C.Instance.canTouchMis()) return;
            if (!d.hasAD) return;
            if (!this.shouldShowForBanner(e)) return;
            if (console.log("Taylor --- GamePlayState= " + nt.Instance._state), 2 == e && 2 == nt.Instance._state || void 0 === nt.Instance._state) return;
            console.log("Taylor --- pos= " + e);
            var n = f.Instance.getBannerCfg(e);
            if (console.log("Taylor --- cfg= " + n), null == n) return;
            let i = n.adunit;
            ct.IsTouTiao() ? i = n.tadunit : ct.IsQQ() && (i = n.qadunit), C.Instance.isOpenSDK() && (d.isF = !0);
            {
                let e = f.Instance.getRandomBannerCfg();
                null !== e && e.adunit && (i = e.adunit, ct.IsTouTiao() && e.tadunit ? i = e.tadunit : ct.IsQQ() && e.qadunit && (i = e.qadunit));
            }
            this._isShowingBanner = !0;
            let a = n.hAlign, s = n.vAlign, o = n.xOffset;
            d.isLimitCityB && (t = -1);
            let r = n.w;
            ct.IsWeChat() && d.vGameInfo.small && (r = 300), ct.IsQQ() && (r = d.vGameInfo.qSmall ? 300 : 375), 
            this.aCheck() && (r = 300), ct.Instance.showBanner(e, i, a, s, r, o, n.yOffset, t);
        }
        hideBanner(e = 0) {
            this._isShowingBanner = !1, ct.Instance.hideBanner(e);
        }
        isShowingBanner() {
            return this._isShowingBanner;
        }
        restoreBanner(e, t = 0) {
            3 != e && this.showADBanner(e, t);
        }
        showVideoOrrShare(e, t) {
            if (this._lastCallTime > 0 && Date.now() - this._lastCallTime < 300) return;
            if (p.fetchingVideoAd && Date.now() - this._lastCallTime < 1e4) Wt.Instance.showTips("正在拉取视频", 2e3); else {
                this._callShareReward = !1, this._callShare = !1, this._lastCallTime = Date.now();
                var n = f.Instance.getVideoShareCfg(e);
                null != n ? n.type == ie.Video ? this.handleVideo(n) : this.handleShare(n, !0) : console.log("没有配置视频");
            }
        }
        isForceVideo(e) {
            return !!ct.IsOppo();
        }
        isForceVideoWithError(e) {
            if (this.wxCheck()) return !0;
        }
        checkShowShareAfterVideoFail(e) {
            let t = !1;
            if (this._vsFailShareCount + this._videoCount >= d.vGameInfo.vsAllCount && (t = !0), 
            t || this._vsFailShareCount >= d.vGameInfo.vsFailShareCount) return !1;
            this._callShareReward = !1, this._callShare = !1, this._lastCallTime = Date.now();
            var n = Date.now();
            let i = at.getShareInfoByCfg(null);
            return this._callShareReward = !0, this._callShare = !0, this._callShareCfg = {
                pos: e,
                fromVideoFail: !0
            }, ct.Instance.shareM(e, !1, 1, i.imgUrl, i.shareContent, n, ""), !0;
        }
        handleVideo(e) {
            if (!d.hasAD) return this.wxCheck() ? (Wt.Instance.showTips("广告功能暂未开通"), !0) : void this.handleShare(e, !1);
            if (this.canShowVideo() || this.isForceVideo(e.pos)) {
                if (!this.canShowVideoADByCount()) {
                    if (!this.wxCheck() && this.checkShowShareAfterVideoFail(e.pos)) return;
                    return void Wt.Instance.showTips("视频奖励次数今日已达上限");
                }
                ct.Instance.report(a.showAD, {
                    adName: e.name || ""
                });
                let t = e.adunit;
                ct.IsTouTiao() ? t = e.tadunit : ct.IsQQ() && (t = e.qadunit), ct.Instance.showVideo(e.pos, t, e.toast);
            } else this.handleShare(e, !1);
        }
        handleShare(e, t) {
            this.hasDailyShared(e.pos) || this.saveShareCache(e.pos, new Date().toString()), 
            ct.Instance.report(a.doShare, {
                adName: e.name || ""
            });
            var n = Date.now();
            let i = at.getShareInfoByCfg(e), s = i.shareContent;
            this._callShareReward = t, this._callShare = !0, this._callShareCfg = {
                pos: e.pos,
                fromVideoFail: !1
            }, ct.Instance.shareM(e.pos, 1 == e.shot, e.type, i.imgUrl, s, n, e.name);
        }
        hasDailyShared(e) {
            var t = this._dailyShareMapping[e];
            return null != t && t.shared;
        }
        onShowAdCompleted(e, t = !1) {
            var n = this.videoMapping[e];
            if (null == n ? n = 1 : n++, this.videoMapping[e] = n, t) return this._vsFailShareCount++, 
            void this.saveVideoCache();
            this.canAddVSCount(e) && (this._vsCount++, g.setNumberValue("vsCount", this._vsCount));
        }
        onGameFocus() {
            console.log("onGameFocus"), this._callShare = !1;
        }
        getVSShowType() {
            if (!d.vsInfo) return re.Default;
            let e = d.vsInfo.type, t = d.vsInfo.snum, n = d.vsInfo.vnum, i = t + n;
            if (e === oe.Default || 0 === t && 0 === n) return re.Default;
            if (0 === t && n > 0) return re.Video;
            if (t > 0 && 0 === n) return re.Share;
            if (e === oe.Share) {
                return this._vsCount % i < t ? re.Share : re.Video;
            }
            if (e === oe.Video) {
                return this._vsCount % i < n ? re.Video : re.Share;
            }
            return re.Default;
        }
        static getShowType(e) {
            if (it.Instance.wxCheck()) return 2;
            if (ct.IsOppo()) return 2;
            let t = it.Instance.getVSShowType();
            if (t !== re.Default) return t === re.Video && d.vsInfo.snum > 0 && !it.Instance.canShowVideoADByCount() ? re.Share : t;
            {
                let t = d.vList;
                if (t.length) for (let n = 0; n < t.length; n++) {
                    let i = t[n];
                    if (i && i.pos == e) return i.type || 0;
                }
            }
            return 0;
        }
        shouldShowForBanner(e) {
            return e !== zt.Load.id && ((!this.aCheck() || e !== zt.Game.id) && (e !== zt.Game.id || (ct.IsQQ(), 
            !0)));
        }
        resetByOverDay() {
            this.canFetchVideo = !0, this._vsCount = 0, this._vsFailShareCount = 0, this._videoCount = 0, 
            this.saveVideoCache();
        }
        canAddVSCount(e) {
            return !1;
        }
        canShowVideoADByCount() {
            return !!ct.IsOppo() || it.Instance._videoCount < d.vAdCount;
        }
        onFinishVideoAd(e) {
            this._videoCount++, this.saveVideoCache();
        }
        updateViewWithPos(e, t) {
            let n = e.getChildByName("icon"), i = it.getShowType(t);
            n.skin = 2 === i ? "common/ic_vedio.png" : "common/ic_share.png";
        }
    }
    it._instance = null;
    class at {
        static onMobile() {
            return Laya.Browser.onIOS || Laya.Browser.onAndroid || Laya.Browser.onMobile;
        }
        static finishVideo(n) {
            e.Instance.event(t.ShowAdCompleted, n), e.Instance.event(t.CloseShowAd, n);
        }
        static getShareInfoByCfg(e) {
            if (e && e.imgUrl && e.imgUrl.length && e.shareContent && e.shareContent.length) return {
                imgUrl: e.imgUrl,
                shareContent: e.shareContent
            };
            let t = d.ShareInfoList.length;
            if (t > 0) {
                let e = Math.floor(Math.random() * t);
                if (ct.IsTouTiao() && (e = 0), e < t) return d.ShareInfoList[e];
            }
            return {
                imgUrl: "",
                shareContent: ""
            };
        }
        static getDeviceRatio() {
            return Laya.stage.height / Laya.stage.width;
        }
        static getBannerOffset() {
            return 20;
        }
        static getNormalBannerOffset() {
            return 40 / p.windowWidth * Laya.stage.width;
        }
        static bannerMoveY(e = 0) {
            return at.getNormalBannerOffset() + e;
        }
        static checkOverDay() {
            let e = parseInt(Laya.LocalStorage.getItem("curPlayDay") || "0"), t = Date.now(), n = !u.isSameDay(t, e);
            return n && Laya.LocalStorage.setItem("curPlayDay", t.toString()), n;
        }
        static finishShare(n, i = !1, a = !1) {
            it.Instance.onShowAdCompleted(n, a), e.Instance.event(t.ShowAdCompleted, n), e.Instance.event(t.CloseShowAd, n);
        }
        static finishShareVideo(n) {
            e.Instance.event(t.ShowShareVideoCompleted, n), e.Instance.event(t.CloseShowShareViedo, n);
        }
        static subString(e, t, n) {
            for (var i = 0, a = "", s = /[^\x00-\xff]/g, o = "", r = e.replace(s, "**").length, l = 0; l < r && (null == (o = e.charAt(l).toString()).match(s) ? i++ : i += 2, 
            !(i > t)); l++) a += o;
            return n && r > t && (a += "..."), a;
        }
        static clearDictionary(e) {
            for (var t in e) delete e[t];
        }
        static arrayRemove(e, t) {
            let n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
        }
        static setVector3(e, t, n, i) {
            e.x = t, e.y = n, e.z = i;
        }
        static Vector3MulNumber(e, t) {
            return new Laya.Vector3(e.x * t, e.y * t, e.z * t);
        }
        static uuid() {
            var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = [];
            for (e = 0; e < 32; e++) n[e] = t[0 | 16 * Math.random()];
            return n.join("");
        }
    }
    class st {
        constructor() {
            this.showBannerPos = 0;
        }
        showBanner(e, t, n, i, a, s = 0, o = 0, r = 0) {}
        hideBanner(e) {}
        showVideo(e, t, n) {
            at.finishVideo(e);
        }
        shareM(e, t, n, i, a, s, o) {
            at.finishVideo(e);
        }
        postToOpenDataMessage(e, t) {}
        report(e, t) {}
        sdkLogin(n, i) {

            console.log("sdkLoginsdkLoginsdkLogin");
            var a = _.Instance;
            a.user.resumePlayerInfoDefault(),
            a.user.loadCacheData(),
            a.user.nickName = "USER", 
            _.Instance.logined = !0,
            e.Instance.event(t.userLoginFinish, { logined: !0 });
        }
        isLowDevice() {
            return !1;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {}
        shareVideo(e) {
            at.finishShare(e);
        }
        hasOpenAD() {
            return !0;
        }
        showInterstitialAd(e, t, n, i) {}
        showModal(e) {}
        setLoadingProgress(e) {
            ct.IsOppo() && (console.log("setLoadingProgress:" + e), "undefined" != typeof qg && (e >= 100 ? qg.loadingComplete && qg.loadingComplete({
                complete: function(e) {}
            }) : qg.setLoadingProgress && qg.setLoadingProgress({
                progress: e
            })));
        }
        showAppBox() {}
        hideAppBox() {}
    }
    !function(e) {
        e.showFriendRank = "showFriendRank", e.hideFriendRank = "hideFriendRank", e.showFriendRankNextPage = "showFriendRankNextPage", 
        e.showFrientRnakPrevPage = "showFrientRnakPrevPage", e.updateGradeList = "updateGradeList", 
        e.updataScoreInfo = "updataScoreInfo";
    }(le || (le = {}));
    class ot {
        constructor() {
            this.bannerAd = null, this.bannerShowInfo = {}, this.checkShared = !0, this.bannerLoadError = !1, 
            this.lastInterstitialAdTime = 0, this.interstitialAd = null, this.info = {}, this.loginParams = {}, 
            this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0, 
            this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null, 
            this.curShareTimer = null, this.lastEndVideoAdTime = 0, this.info = ot.sInfo, this.loginParams = null, 
            "undefined" != typeof wx && (Laya.MiniAdpter.window.wx.aldOnShareAppMessage(this.onShareAppMessage), 
            Laya.MiniAdpter.window.wx.showShareMenu({
                withShareTicket: !0,
                success: function() {},
                fail: function() {}
            }), e.Instance.on(t.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage(n) {
            let i = ae.DefaultShare, a = f.Instance.getVideoShareCfg(ae.DefaultShare), s = at.getShareInfoByCfg(a), o = s.shareContent, r = s.imgUrl, l = 0, h = "";
            return null != _.Instance && null != _.Instance.user && (h = _.Instance.user.openid, 
            l = _.Instance.user.uid), console.log("6666666666666666666666"), console.log("inviteName=" + _.Instance.user.nickName + "&openid=" + h + "&pos=" + i + "&shareTime=" + Date.now() + "&inviteCode=" + (l > 0 ? l : "")), 
            {
                title: o,
                imageUrl: r,
                query: "inviteName=" + _.Instance.user.nickName + "&openid=" + h + "&pos=" + i + "&shareTime=" + Date.now() + "&inviteCode=" + (l > 0 ? l : ""),
                success: n => {
                    e.Instance.event(t.ShareSuccess, {
                        pos: 0,
                        shareTickets: n.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(n, i) {
            if ("undefined" != typeof wx) {
                var a = e => {
                    console.log("wx.getUserInfo success", e), ot.sInfo.encryptedData = e.encryptedData, 
                    ot.sInfo.iv = e.iv, ot.sInfo.nickName = e.userInfo.nickName, ot.sInfo.avatar = e.userInfo.avatarUrl, 
                    ot.sInfo.sex = e.userInfo.gender, ot.sInfo.city = e.userInfo.city, n.runWith(ot.sInfo);
                }, s = e => {
                    console.log("wx.getUserInfo fail", e), n.runWith(ot.sInfo);
                };
                wx.login({
                    success: e => {
                        console.log("wx.login success", e), ot.sInfo.wxCode = e.code, wx.getUserInfo({
                            withCredentials: !0,
                            lang: "zh_CN",
                            success: a,
                            fail: s,
                            complete: null
                        });
                    },
                    fail: () => {
                        console.log("wx.login fail"), _.Instance.loginError = !0, e.Instance.event(t.userLoginFinish, {
                            logined: !1
                        });
                    },
                    complete: null,
                    pkgName: d.packageName
                });
            } else {
                _.Instance.user.loadCacheData();
            }
        }
        getSetting(e, t) {
            wx.getSetting({
                success: n => {
                    var i = n.authSetting;
                    !0 === i["scope.userInfo"] ? this.sdkLogin(e, t) : !1 === i["scope.userInfo"] ? this.openSetting() : i["scope.record"] ? i["scope.writePhotosAlbum"] ? i["scope.camera"] || this.sdkAuthorize("scope.camera") : this.sdkAuthorize("scope.writePhotosAlbum") : this.sdkAuthorize("scope.record");
                },
                fail: null,
                complete: null
            });
        }
        openSetting() {
            wx.openSetting({
                success: function(e) {},
                fail: null,
                complete: null
            });
        }
        sdkAuthorize(e) {
            wx.authorize({
                scope: e,
                success: e => {},
                fail: () => {},
                complete: null
            });
        }
        shareM(n, i, a, s, o, r, l = "") {
            if (d.IgnoreShare) return void e.Instance.event(t.ShareSuccess, {
                pos: n
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = n;
            var h = a, c = "";
            null != _.Instance && null != _.Instance.user && (c = _.Instance.user.openid);
            let p = "inviteName=" + _.Instance.user.nickName + "&openid=" + c + "&pos=" + this.sharePos + "&shareTime=" + r + "&inviteCode=" + _.Instance.user.uid + "&shareScene=" + this.sharePos;
            console.log("777777777777777777"), console.log(p);
            let u = s;
            i && (u = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.aldShareAppMessage({
                title: o,
                imageUrl: u,
                query: p,
                path: p,
                ald_desc: l || "",
                success: n => {
                    e.Instance.event(t.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: n.shareTickets,
                        from: h
                    });
                },
                fail: () => {
                    e.Instance.event(t.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: e => {
                    console.log("<<<<<<<<<<<<<<<<<取消1"), "undefined" == typeof wx || it.Instance.wxCheck() || wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    }), this.checkShared = !1, this.curShareTimer = 0;
                }
            }), C.Instance.advertisement("share"), Laya.timer.clear(this, this.onCheckShare);
        }
        showVideo(n, i, s = "") {
            if (this.lastEndVideoAdTime > 0) {
                let e = 1e3 * 7 - (Date.now() - this.lastEndVideoAdTime);
                if (e > 0) return e = Math.ceil(e / 1e3), void Wt.Instance.showTips("间隔时间太短，请等待" + e + "秒");
            }
            if ("undefined" == typeof wx) return it.Instance.onShowAdCompleted(n), e.Instance.event(t.ShowAdCompleted, n), 
            void e.Instance.event(t.CloseShowAd, n);
            var o = "";
            null !== i && i.length && (o = i), this.showPos = n;
            wx.getSystemInfoSync().SDKVersion;
            wx.createRewardedVideoAd && (null == this.rewardedVideoAd && (this.rewardedVideoAd = wx.createRewardedVideoAd({
                adUnitId: o
            }), this.rewardedVideoAd.onClose(i => {
                p.fetchingVideoAd = !1, i && i.isEnded || void 0 === i ? (it.Instance.onShowAdCompleted(n), 
                e.Instance.event(t.ShowAdCompleted, this.showPos), e.Instance.event(t.CloseShowAd, this.showPos), 
                this.lastEndVideoAdTime = Date.now(), e.Instance.event(t.FinishVideoAd, this.showPos), 
                this.report(a.watchADComplete), C.Instance.advertisement("watch")) : (e.Instance.event(t.CloseShowAd, this.showPos), 
                this.report(a.watchADExit)), pe.Instance.startAll();
            }), this.rewardedVideoAd.onError(n => {
                p.fetchingVideoAd && (p.fetchingVideoAd = !1, console.log("fetch video error:" + n.errMsg), 
                e.Instance.event(t.FetchVideoFail, this.showPos), this.report(a.loadVideoError, {
                    errorCode: n.errCode,
                    errMsg: n.errMsg
                }));
            }), this.rewardedVideoAd.onLoad(() => {
                p.fetchingVideoAd = !1, console.log("fetch video success");
            })), this.rewardedVideoAd.adUnitId = o, p.fetchingVideoAd = !0, this.rewardedVideoAd.load().then(() => {
                p.fetchingVideoAd = !1, this.rewardedVideoAd.show(), pe.Instance.stopAll(), C.Instance.advertisement("video_click");
            }).catch(e => {
                console.log("video:" + e.errMsg), p.fetchingVideoAd = !1, this.report(a.loadVideoError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                });
            }));
        }
        showBanner(n, i, s, o, r, l = 0, h = 0, c = 0, u = !1) {
            if (C.Instance.isOpenSDK() && 2 == n) return;
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            var g = "";
            null != i && (g = i);
            var m = !1;
            this.bannerShowCount >= d.vGameInfo.bCount ? m = !0 : Date.now() - this.lastFetchBannerTime >= 1e3 * d.vGameInfo.bTimer && (m = !0), 
            ct.shouldReBuild && (m = !0, ct.shouldReBuild = !1), (m || this.bannerLoadError) && null != this.bannerAd && (this.bannerAd.destroy(), 
            this.bannerAd = null, this.bannerRes = null), this.bannerLoadError = !1, this.showBannerPos = n;
            let y = r || 375;
            y = y / 375 * p.windowWidth, p.windowWidth > 375 && (l = l / 375 * p.windowWidth, 
            h = h / 375 * p.windowWidth);
            let f = 10;
            if (c = c * (2 * p.windowHeight / Laya.stage.height) / 2, this.bannerShowInfo.hAlign = s, 
            this.bannerShowInfo.vAlign = o, this.bannerShowInfo.pinY = c, this.bannerShowInfo.xOffset = l, 
            this.bannerShowInfo.yOffset = h, null == this.bannerAd) this.bannerShowCount = 1, 
            this.lastFetchBannerTime = Date.now(), this.bannerAd = wx.createBannerAd({
                adUnitId: g,
                style: {
                    left: 0,
                    top: 0,
                    width: y
                }
            }), this.bannerAd.onError(e => {
                console.log("fetch banner error:" + e.errMsg), this.report(a.loadBannerError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                }), this.bannerLoadError = !0;
            }), this.bannerAd.onResize(e => {
                this.report(a.loadBanner, {
                    duration: (Date.now() - this.lastFetchBannerTime) / 1e3
                }), this.bannerRes = e, this.adjustBanner();
            }); else {
                f = 0, this.bannerShowCount++, this.bannerRes && Laya.timer.once(1, this, this.adjustBanner);
            }
            console.log("adUnitId" + g), this.bannerAd.show().then(() => {
                console.log("广告显示成功"), this.report(a.showBanner, {
                    bannerPos: n,
                    adUnitID: this.bannerAd.adUnitId
                }), setTimeout(() => {
                    e.Instance.event(t.ShowBannerCompleted, n);
                }, f);
            }).catch(e => {
                console.log("show banner error:" + e.errMsg), this.report(a.loadBannerError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                }), this.bannerLoadError = !0;
            }), this.bannerAd.style && (this.bannerAd.style.width = y);
        }
        adjustBanner() {
            let n = this.bannerShowInfo.hAlign, i = this.bannerShowInfo.vAlign, a = this.bannerShowInfo.pinY, s = this.bannerShowInfo.xOffset, o = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let r = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            if (0 == n ? this.bannerAd.style.left = 0 + s + (at.getDeviceRatio() > 2 ? 20 : 0) : 1 == n ? this.bannerAd.style.left = .5 * (p.windowWidth - r.width) + s : 2 == n && (this.bannerAd.style.left = p.windowWidth - r.width + s - (at.getDeviceRatio() > 2 ? 20 : 0)), 
            0 == i) this.bannerAd.style.top = 0 + o; else if (1 == i) this.bannerAd.style.top = .5 * (p.windowHeight - r.height) + o; else if (2 == i) {
                let e = 0;
                Laya.stage.height / Laya.stage.width > 2 && (e = 50 / 2436 * Laya.stage.width), 
                this.bannerAd.style.top = p.windowHeight - r.height + o - e, a > 0 && a < this.bannerAd.style.top && (this.bannerAd.style.top = a + 2);
            }
            let l = (this.bannerAd.style.top + r.height) * Laya.stage.width / p.windowWidth, h = this.bannerAd.style.top * Laya.stage.width / p.windowWidth;
            e.Instance.event(t.BannerPosChange, {
                ADPos: this.showBannerPos,
                bottom: l,
                top: h,
                BannerAD: this.bannerAd
            });
        }
        hideBanner() {
            null != this.bannerAd && this.bannerAd.hide();
        }
        report(e, t) {
            wx.aldSendEvent && wx.aldSendEvent(e, t);
        }
        postToOpenDataMessage(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "",
                type: e,
                data: t,
                openid: _.Instance.user.openid
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                let e = Date.now();
                if (console.log("onCheckShare" + this.curShareTimer), console.log(it.Instance), 
                e - this.curShareTimer >= d.ShareTickTimer) {
                    let e = !(!it.Instance._callShareCfg || !it.Instance._callShareCfg.fromVideoFail);
                    at.finishShare(it.Instance._callShareCfg.pos, !0, e);
                    let t = Math.floor(10 * Math.random()) + 1;
                    console.log("Taylor --- random= " + t), _.Instance.gold += 20 * t;
                    let n = 20 * t;
                    Wt.Instance.showTips("分享成功,增加" + `${n}` + "金币");
                } else if ("undefined" != typeof wx && !it.Instance.wxCheck()) {
                    let e = "分享到不同群才能获得奖励!";
                    0 === this.sharePos && (e = ""), e.length && wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    });
                }
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 100);
        }
        isLowDevice() {
            return ct.isAndroid && ct.isLowDevice;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {
            this.postToOpenDataMessage(le.updataScoreInfo, e);
        }
        shareVideo(e) {}
        hasOpenAD() {
            return !0;
        }
        preLoadInAd() {
            "undefined" != typeof wx && this.showInterstitialAd(1, "", "", !0);
        }
        showInterstitialAd(e, t = "", n = "", i = !1) {}
        setLoadingProgress(e) {}
        showModal(e) {}
        showAppBox() {}
        hideAppBox() {}
    }
    ot.sInfo = {};
    class rt {
        constructor() {
            this.bannerAd = null, this.bannerAdPre = null, this.bannerZeroHeightCount = 0, this.bannerShowInfo = {}, 
            this.bannerError = !1, this.bannerLoadFinish = !1, this.checkShared = !0, this.curShareTimer = 0, 
            this.checkSharedVideo = !0, this.curShareVideoTimer = 0, this.info = {}, this.loginParams = {}, 
            this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0, 
            this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null, 
            this.mta = null, this.lastEndVideoAdTime = 0, this.info = rt.sInfo, this.loginParams = null, 
            "undefined" != typeof wx && (Laya.MiniAdpter.window.wx.aldOnShareAppMessage(e => this.onShareAppMessage(e)), 
            Laya.MiniAdpter.window.wx.showShareMenu({
                withShareTicket: !0,
                success: function() {},
                fail: function() {}
            }), e.Instance.on(t.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage(n) {
            let i = ae.DefaultShare, a = f.Instance.getVideoShareCfg(ae.DefaultShare), s = at.getShareInfoByCfg(a), o = s.shareContent, r = s.imgUrl, l = 0;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = 0, it.Instance._callShareCfg = null;
            let h = "";
            return null != _.Instance && null != _.Instance.user && (h = _.Instance.user.openid, 
            l = _.Instance.user.uid), {
                title: o,
                imageUrl: r,
                query: "inviteName=" + _.Instance.user.nickName + "&openid=" + h + "&pos=" + i + "&shareTime=" + Date.now() + "&inviteCode=" + (l > 0 ? l : ""),
                success: function(n) {
                    e.Instance.event(t.ShareSuccess, {
                        pos: 0,
                        shareTickets: n.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(n, i) {
            if ("undefined" != typeof wx) {
                var a = e => {
                    console.log("wx.getUserInfo success", e), rt.sInfo.encryptedData = e.encryptedData, 
                    rt.sInfo.iv = e.iv, rt.sInfo.nickName = e.userInfo.nickName, rt.sInfo.avatar = e.userInfo.avatarUrl, 
                    rt.sInfo.sex = e.userInfo.gender, rt.sInfo.city = e.userInfo.city, n.runWith(rt.sInfo);
                }, s = e => {
                    console.log("wx.getUserInfo fail", e), n.runWith(rt.sInfo);
                };
                wx.login({
                    pkgName: "",
                    force: !1,
                    success: e => {
                        console.log("wx.login success", e);
                        let t = null == e.code ? "" : e.code, n = null == e.anonymousCode ? "" : e.anonymousCode, i = !0;
                        t.length > 5 ? i = !1 : n.length, rt.sInfo.wxCode = t, rt.sInfo.nCode = n, d.isAnonymous = i, 
                        wx.getSetting({
                            success: e => {
                                let t = e.authSetting["scope.userInfo"];
                                !0 === t ? wx.getUserInfo({
                                    withCredentials: !0,
                                    lang: "zh_CN",
                                    success: a,
                                    fail: s,
                                    complete: null
                                }) : s && s({});
                            },
                            fail: () => {
                                s && s({});
                            },
                            complete: null
                        });
                    },
                    fail: () => {
                        console.log("wx.login fail"), _.Instance.loginError = !0, e.Instance.event(t.userLoginFinish, {
                            logined: !1
                        });
                    },
                    complete: null
                });
            } else {
                _.Instance.user.loadCacheData();
            }
        }
        getSetting(e, t) {
            wx.getSetting({
                success: n => {
                    var i = n.authSetting;
                    !0 === i["scope.userInfo"] ? this.sdkLogin(e, t) : !1 === i["scope.userInfo"] ? this.openSetting() : i["scope.record"] ? i["scope.writePhotosAlbum"] ? i["scope.camera"] || this.sdkAuthorize("scope.camera") : this.sdkAuthorize("scope.writePhotosAlbum") : this.sdkAuthorize("scope.record");
                },
                fail: null,
                complete: null
            });
        }
        openSetting() {
            wx.openSetting({
                success: function(e) {},
                fail: null,
                complete: null
            });
        }
        sdkAuthorize(e) {
            wx.authorize({
                scope: e,
                success: e => {},
                fail: () => {},
                complete: null
            });
        }
        shareM(n, i, a, s, o, r, l = "") {
            if (d.IgnoreShare) return void e.Instance.event(t.ShareSuccess, {
                pos: n
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = n;
            var h = a, c = "";
            null != _.Instance && null != _.Instance.user && (c = _.Instance.user.openid);
            let p = "inviteName=" + _.Instance.user.nickName + "&openid=" + c + "&pos=" + this.sharePos + "&shareTime=" + r + "&inviteCode=" + _.Instance.user.uid + "&shareScene=" + this.sharePos, u = s;
            i && (u = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.aldShareAppMessage({
                title: o,
                imageUrl: u,
                query: p,
                path: p,
                success: n => {
                    console.log("share success", n), e.Instance.event(t.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: n.shareTickets,
                        from: h
                    }), this.checkShared = !1, this.curShareTimer = 0, at.finishShare(it.Instance._callShareCfg.pos, !0);
                },
                fail: () => {
                    console.log("share fail"), e.Instance.event(t.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: e => {
                    console.log("<<<<<<<<<<<<<<<<<取消1"), Wt.Instance.showTips("请完成分享"), this.checkShared = !1, 
                    this.curShareTimer = 0;
                }
            });
        }
        shareVideo(e) {
            var t = Date.now(), n = "";
            this.sharePos = e, null != _.Instance && null != _.Instance.user && (n = _.Instance.user.openid);
            let i = "inviteName=" + _.Instance.user.nickName + "&openid=" + n + "&pos=" + this.sharePos + "&shareTime=" + t + "&inviteCode=" + _.Instance.user.uid, a = L.Instance.videoPath;
            if (a && a.length) {
                let e = wx.getSystemInfoSync(), t = !1;
                "Douyin" === e.appName && (t = !0), this.checkSharedVideo = !0, this.curShareVideoTimer = Date.now(), 
                console.log("shareVideo:" + e.appName), wx.shareAppMessage({
                    channel: "video",
                    query: i,
                    path: i,
                    extra: {
                        videoPath: a,
                        videoTopics: d.videoTopics
                    },
                    success: e => {
                        this.checkSharedVideo && (setTimeout(() => {
                            at.finishShareVideo(this.sharePos);
                        }, 100), this.checkSharedVideo = !1, this.curShareVideoTimer = 0), console.log("视频 分享成功！");
                    },
                    fail: e => {
                        if (console.log("分享失败！" + JSON.stringify(e)), this.checkSharedVideo) {
                            let t = "请完成视频分享";
                            e && e.errMsg && -1 === e.errMsg.indexOf("cancel") && (t = "分享视频失败"), Wt.Instance.showTips(t, 2e3), 
                            this.checkSharedVideo = !1, this.curShareVideoTimer = 0;
                        }
                    },
                    cancel: e => {
                        console.log("<<<<<<<<<<<<<<<<<取消1"), this.checkSharedVideo && (Wt.Instance.showTips("请完成视频分享", 2e3), 
                        this.checkSharedVideo = !1, this.curShareVideoTimer = 0);
                    }
                });
            }
        }
        showVideo(n, i, s = "") {
            if (this.lastEndVideoAdTime > 0) {
                let e = 1e3 * 7 - (Date.now() - this.lastEndVideoAdTime);
                if (e > 0) return e = Math.ceil(e / 1e3), void Wt.Instance.showTips("间隔时间太短，请等待" + e + "秒");
            }
            if ("undefined" == typeof wx) return it.Instance.onShowAdCompleted(n), e.Instance.event(t.ShowAdCompleted, n), 
            void e.Instance.event(t.CloseShowAd, n);
            var o = "2f2959ef8lj810vdfa";
            null != i && i.length && (o = i), console.log("showVideo" + o), this.showPos = n;
            wx.getSystemInfoSync().SDKVersion;
            wx.createRewardedVideoAd && (null == this.rewardedVideoAd && (this.rewardedVideoAd = wx.createRewardedVideoAd({
                adUnitId: o
            }), this.rewardedVideoAd.onClose(i => {
                p.fetchingVideoAd = !1, i && i.isEnded || void 0 === i ? (it.Instance.onShowAdCompleted(n), 
                e.Instance.event(t.ShowAdCompleted, this.showPos), e.Instance.event(t.CloseShowAd, this.showPos), 
                this.lastEndVideoAdTime = Date.now(), e.Instance.event(t.FinishVideoAd, this.showPos), 
                this.report(a.watchADComplete)) : (e.Instance.event(t.CloseShowAd, this.showPos), 
                this.report(a.watchADExit)), pe.Instance.startAll();
            }), this.rewardedVideoAd.onError(n => {
                if (!p.fetchingVideoAd) return;
                p.fetchingVideoAd = !1, console.log("fetch video error:" + n.errMsg + ":code:" + n.errCode), 
                e.Instance.event(t.FetchVideoFail, this.showPos);
                let i = it.Instance._videoCount, s = "cnt=" + i + ":code=" + (n.errCode ? n.errCode : "0") + ":msg=" + (n.errMsg || "");
                ct.Instance.report(a.loadVideoError, {
                    info: s,
                    count: i
                });
            }), this.rewardedVideoAd.onLoad(() => {
                p.fetchingVideoAd = !1, console.log("fetch video success");
                let e = it.Instance._videoCount;
                ct.Instance.report(a.videoSuccess, {
                    info: e
                });
            })), this.rewardedVideoAd.adUnitId = o, p.fetchingVideoAd = !0, this.rewardedVideoAd.load().then(() => {
                this.rewardedVideoAd.show(), pe.Instance.stopAll(), p.fetchingVideoAd = !1;
            }).catch(e => {
                console.log("广告组件出现问题", e), this.rewardedVideoAd.load().then(() => {
                    console.log("手动加载成功"), p.fetchingVideoAd = !1;
                });
            }));
        }
        showBanner(n, i, a, s, o, r = 0, l = 0, h = 0) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            let c = "1lkgj15h9bc718fbdn";
            null != i && (c = i);
            var u = !1;
            this.bannerShowCount >= d.vGameInfo.bCount ? u = !0 : Date.now() - this.lastFetchBannerTime >= 1e3 * d.vGameInfo.bTimer && (u = !0), 
            (u || this.bannerError || !this.bannerLoadFinish) && null != this.bannerAd && (this.bannerAd.lxbannerLoadFinish ? (this.bannerAd.hide(), 
            this.bannerAdPre = this.bannerAd) : this.bannerAd.destroy(), this.bannerAd = null, 
            this.bannerRes = null), this.bannerError = !1, this.showBannerPos = n;
            p.windowHeight > 375 && (r = r / 375 * p.windowHeight, l = l / 375 * p.windowHeight);
            let g = 10;
            h = h * (2 * p.windowHeight / Laya.stage.height) / 2, this.bannerShowInfo.hAlign = a, 
            this.bannerShowInfo.vAlign = s, this.bannerShowInfo.pinY = h, this.bannerShowInfo.xOffset = r, 
            this.bannerShowInfo.yOffset = l;
            let m = (i, a) => {
                i.show().then(() => {
                    console.log("广告显示成功"), setTimeout(() => {
                        e.Instance.event(t.ShowBannerCompleted, n);
                    }, a);
                }).catch(e => {
                    console.log("show banner error:" + e.errMsg);
                });
            };
            if (null == this.bannerAd) console.log("showBanner" + c), this.bannerShowCount = 1, 
            this.lastFetchBannerTime = Date.now(), this.bannerZeroHeightCount = 0, this.bannerAd = wx.createBannerAd({
                adUnitId: c,
                style: {
                    left: 0,
                    top: 2e3,
                    width: 208
                }
            }), this.bannerAd.lxHide = !1, this.bannerAd.onError(e => {
                console.log("fetch banner error:" + e.errMsg), this.bannerAdPre ? (this.bannerAd.destroy(), 
                this.bannerAd = this.bannerAdPre, this.bannerAd.lxHide = !1, this.bannerError = !1, 
                this.bannerLoadFinish = !0, g = 0, m(this.bannerAd, g), this.adjustBanner()) : this.bannerError = !0;
            }), this.bannerAd.onResize(e => {
                this.bannerRes = e, this.adjustBanner();
            }), this.bannerLoadFinish = !1, this.bannerAd.lxbannerLoadFinish = !1, this.bannerAd.onLoad(() => {
                this.bannerLoadFinish = !0, this.bannerAd.lxbannerLoadFinish = !0, this.bannerAd.lxHide || m(this.bannerAd, g);
            }); else {
                this.bannerAd.lxHide = !1, this.bannerRes && this.adjustBanner(), g = 0, m(this.bannerAd, g), 
                this.bannerShowCount++;
            }
            this.bannerAd.style && (this.bannerAd.style.width = 208);
        }
        adjustBanner() {
            let e = this.bannerShowInfo.hAlign, t = this.bannerShowInfo.vAlign, n = this.bannerShowInfo.pinY, i = this.bannerShowInfo.xOffset, a = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let s = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            console.log("adjustBanner:" + s.width, s.height, this.bannerAd.style.left, this.bannerAd.style.top, e, t);
            let o = this.bannerAd.style.left, r = this.bannerAd.style.top, l = s.width, h = s.height;
            l < 208 && (h = (l = 208) / 16 * 9), h <= 0 && (h = l / 16 * 9), 0 == e ? (o = 0 + i, 
            at.getDeviceRatio() > 2 && (o += 20)) : 1 == e ? o = .5 * (p.windowWidth - l) + i : 2 == e && (o = p.windowWidth - l + i, 
            at.getDeviceRatio() > 2 && (o -= 20)), 0 == t ? r = 0 + a : 1 == t ? r = .5 * (p.windowHeight - h) + a : 2 == t && (r = p.windowHeight - h + a, 
            n > 0 && n < r && (r = n + 2)), o == this.bannerAd.style.left && r == this.bannerAd.style.top || (this.bannerAd.style.left = o, 
            this.bannerAd.style.top = r, console.log("adjustBanner2:" + s.width, s.height, this.bannerAd.style.left, this.bannerAd.style.top));
        }
        hideBanner() {
            null != this.bannerAd && (this.bannerAd.hide(), this.bannerAd.lxHide = !0);
        }
        report(e, t) {
            wx.aldSendEvent && wx.aldSendEvent(e, t);
        }
        showFriendRank(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "rank",
                type: e,
                openid: _.Instance.user.openid,
                info: t
            });
        }
        hideFriendRank(e) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "hideRank",
                type: e,
                openid: _.Instance.user.openid,
                info: ""
            });
        }
        showFriendRankPage(e, t) {}
        queryRank(e, t, n) {}
        uploadGradeData(e) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "gradeData",
                type: "send",
                openid: _.Instance.user.openid,
                info: e
            });
        }
        onCheckShare() {
            if (console.log("onCheckShare" + this.curShareTimer), this.checkShared && this.curShareTimer > 0) {
                if (Date.now() - this.curShareTimer >= d.ShareTickTimer) {
                    let e = !(!it.Instance._callShareCfg || !it.Instance._callShareCfg.fromVideoFail);
                    at.finishShare(it.Instance._callShareCfg.pos, !0, e);
                } else Wt.Instance.showTips("请完成分享");
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onCheckShareVideo() {
            if (console.log("onCheckShareVideo" + this.curShareVideoTimer), this.checkSharedVideo && this.curShareVideoTimer > 0) {
                Date.now() - this.curShareVideoTimer >= d.ShareTickTimer ? at.finishShareVideo(this.sharePos) : Wt.Instance.showTips("请完成视频分享"), 
                this.curShareVideoTimer = 0, this.checkSharedVideo = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare(), this.onCheckShareVideo();
            }, 10);
        }
        isLowDevice() {
            return !1;
        }
        reportAnalytics(e) {}
        postToOpenDataMessage(e, t) {}
        updataScoreInfo() {}
        hasOpenAD() {
            return !0;
        }
        showInterstitialAd(e, t, n, i) {}
        setLoadingProgress(e) {}
        showModal(e) {}
        showAppBox() {}
        hideAppBox() {}
    }
    rt.sInfo = {};
    class lt {
        constructor() {
            this.bannerAd = null, this.bannerShowInfo = {}, this.checkShared = !0, this.bannerLoadError = !1, 
            this.info = {}, this.loginParams = {}, this.setNickNameCallback = null, this.setHeadCallback = null, 
            this.showPos = 0, this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, 
            this.rewardedVideoAd = null, this.curShareTimer = null, this.lastEndVideoAdTime = 0, 
            this.appBox = null, this.appBoxHide = !1, this.maskBox = null, this.info = lt.sInfo, 
            this.loginParams = null, "undefined" != typeof wx && (wx.aldOnShareAppMessage(this.onShareAppMessage), 
            wx.showShareMenu({
                withShareTicket: !0,
                success: function() {},
                fail: function() {},
                complete: () => {}
            }), e.Instance.on(t.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage() {
            let n = ae.DefaultShare, i = f.Instance.getVideoShareCfg(ae.DefaultShare), a = at.getShareInfoByCfg(i), s = a.shareContent, o = a.imgUrl, r = 0, l = "";
            return null != _.Instance && null != _.Instance.user && (l = _.Instance.user.openid, 
            r = _.Instance.user.uid), console.log("6666666666666666666666"), console.log("inviteName=" + _.Instance.user.nickName + "&openid=" + l + "&pos=" + n + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : "")), 
            {
                title: s,
                imageUrl: o,
                query: "inviteName=" + _.Instance.user.nickName + "&openid=" + l + "&pos=" + n + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: n => {
                    e.Instance.event(t.ShareSuccess, {
                        pos: 0,
                        shareTickets: n.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(n, i) {
            if ("undefined" != typeof wx) {
                var a = e => {
                    console.log("wx.getUserInfo success", e), lt.sInfo.encryptedData = e.encryptedData, 
                    lt.sInfo.iv = e.iv, lt.sInfo.nickName = e.userInfo.nickName, lt.sInfo.avatar = e.userInfo.avatarUrl, 
                    lt.sInfo.sex = e.userInfo.gender, lt.sInfo.city = e.userInfo.city, n.runWith(lt.sInfo);
                }, s = e => {
                    console.log("wx.getUserInfo fail", e), n.runWith(lt.sInfo);
                };
                wx.login({
                    success: e => {
                        console.log("wx.login success", e), lt.sInfo.wxCode = e.code, wx.getSetting({
                            success: e => {
                                let t = e.authSetting["scope.userInfo"];
                                !0 === t ? wx.getUserInfo({
                                    withCredentials: !0,
                                    lang: "zh_CN",
                                    success: a,
                                    fail: s,
                                    complete: null
                                }) : s && s({});
                            },
                            fail: () => {
                                s && s({});
                            },
                            complete: null
                        });
                    },
                    fail: () => {
                        console.log("wx.login fail"), _.Instance.loginError = !0, e.Instance.event(t.userLoginFinish, {
                            logined: !1
                        });
                    },
                    complete: null,
                    pkgName: d.packageName
                });
            } else {
                _.Instance.user.loadCacheData();
            }
        }
        getSetting(e, t) {
            wx.getSetting({
                success: n => {
                    var i = n.authSetting;
                    !0 === i["scope.userInfo"] ? this.sdkLogin(e, t) : !1 === i["scope.userInfo"] ? this.openSetting() : i["scope.record"] ? i["scope.writePhotosAlbum"] ? i["scope.camera"] || this.sdkAuthorize("scope.camera") : this.sdkAuthorize("scope.writePhotosAlbum") : this.sdkAuthorize("scope.record");
                },
                fail: null,
                complete: null
            });
        }
        openSetting() {
            wx.openSetting({
                success: function() {},
                fail: null,
                complete: null
            });
        }
        sdkAuthorize(e) {
            wx.authorize({
                scope: e,
                success: () => {},
                fail: () => {},
                complete: null
            });
        }
        shareM(n, i, a, s, o, r, l = "") {
            if (d.IgnoreShare) return void e.Instance.event(t.ShareSuccess, {
                pos: n
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = n;
            var h = a, c = "";
            null != _.Instance && null != _.Instance.user && (c = _.Instance.user.openid);
            let p = "inviteName=" + _.Instance.user.nickName + "&openid=" + c + "&pos=" + this.sharePos + "&shareTime=" + r + "&inviteCode=" + _.Instance.user.uid + "&shareScene=" + this.sharePos;
            console.log("777777777777777777"), console.log(p);
            let u = s;
            i && (u = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.aldShareAppMessage({
                title: o,
                imageUrl: u,
                query: p,
                path: p,
                ald_desc: l || "",
                success: n => {
                    e.Instance.event(t.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: n.shareTickets,
                        from: h
                    });
                },
                fail: () => {
                    e.Instance.event(t.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: () => {
                    console.log("<<<<<<<<<<<<<<<<<取消1"), "undefined" == typeof wx || it.Instance.wxCheck() || wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: () => {},
                        fail: () => {},
                        complete: () => {}
                    }), this.checkShared = !1, this.curShareTimer = 0;
                }
            }), Laya.timer.clear(this, this.onCheckShare);
        }
        showVideo(n, i, s = "") {
            if (this.lastEndVideoAdTime > 0) {
                let e = 1e3 * 7 - (Date.now() - this.lastEndVideoAdTime);
                if (e > 0) return e = Math.ceil(e / 1e3), void Wt.Instance.showTips("间隔时间太短，请等待" + e + "秒");
            }
            if ("undefined" == typeof wx) return it.Instance.onShowAdCompleted(n), e.Instance.event(t.ShowAdCompleted, n), 
            void e.Instance.event(t.CloseShowAd, n);
            var o = "ed955b0eef1704ee699eee78ed6f257c";
            null != i && i.length && (o = i), this.showPos = n, wx.createRewardedVideoAd && (null == this.rewardedVideoAd && (this.rewardedVideoAd = wx.createRewardedVideoAd({
                adUnitId: o
            }), this.rewardedVideoAd.onClose(i => {
                p.fetchingVideoAd = !1, i && i.isEnded || void 0 === i ? (it.Instance.onShowAdCompleted(n), 
                e.Instance.event(t.ShowAdCompleted, this.showPos), e.Instance.event(t.CloseShowAd, this.showPos), 
                this.lastEndVideoAdTime = Date.now(), e.Instance.event(t.FinishVideoAd, this.showPos), 
                this.report(a.watchADComplete)) : (e.Instance.event(t.CloseShowAd, this.showPos), 
                this.report(a.watchADExit)), pe.Instance.startAll();
            }), this.rewardedVideoAd.onError(n => {
                p.fetchingVideoAd && (p.fetchingVideoAd = !1, console.log("fetch video error:" + n.errMsg), 
                e.Instance.event(t.FetchVideoFail, this.showPos), this.report(a.loadVideoError, {
                    errorCode: n.errCode,
                    errMsg: n.errMsg
                }));
            }), this.rewardedVideoAd.onLoad(() => {
                p.fetchingVideoAd = !1, console.log("fetch video success");
            })), this.rewardedVideoAd.adUnitId = o, p.fetchingVideoAd = !0, this.rewardedVideoAd.load().then(() => {
                p.fetchingVideoAd = !1, this.rewardedVideoAd.show(), pe.Instance.stopAll();
            }).catch(e => {
                console.log("video:" + e.errMsg), p.fetchingVideoAd = !1, this.report(a.loadVideoError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                });
            }));
        }
        showBanner(n, i, s, o, r, l = 0, h = 0, c = 0, u = !1) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            var g = "c1c966d4482233e456d8a57ecf5c7c3a";
            null != i && (g = i);
            var m = !1;
            console.log("unitId " + g), Date.now() - this.lastFetchBannerTime < 2e3 ? m = !1 : this.bannerShowCount >= d.vGameInfo.bCount ? m = !0 : Date.now() - this.lastFetchBannerTime >= 1e3 * d.vGameInfo.bTimer && (m = !0), 
            this.bannerAd && !this.bannerAd.lxbannerLoadFinish && (m = !0), (m || this.bannerLoadError) && null != this.bannerAd && (this.bannerAd.offLoad(), 
            this.bannerAd.offError(), this.bannerAd.offResize(), this.bannerAd.destroy(), this.bannerAd = null, 
            this.bannerRes = null), this.bannerLoadError = !1, this.showBannerPos = n;
            let y = r || 300;
            y = y / 375 * p.windowWidth, p.windowWidth > 375 && (l = l / 375 * p.windowWidth, 
            h = h / 375 * p.windowWidth);
            let f = 10;
            p.windowHeight, Laya.stage.height;
            c = c * p.windowWidth / Laya.stage.width, this.bannerShowInfo.hAlign = s, this.bannerShowInfo.vAlign = o, 
            this.bannerShowInfo.pinY = c, this.bannerShowInfo.xOffset = l, this.bannerShowInfo.yOffset = h;
            let I = (i, s) => {
                console.log("showCall"), console.log(i), i && i.show && (i.show().then(() => {
                    console.log("广告显示成功"), setTimeout(() => {
                        e.Instance.event(t.ShowBannerCompleted, n);
                    }, s), this.report(a.showBanner, {
                        bannerPos: n,
                        adUnitID: this.bannerAd.adUnitId
                    });
                }).catch(e => {
                    console.log("show banner error:" + e.errMsg);
                }), console.log("showCall1111"));
            };
            if (null == this.bannerAd) {
                this.bannerShowCount = 1, this.lastFetchBannerTime = Date.now();
                let e = 3e3, t = 0, n = wx.createBannerAd({
                    adUnitId: g,
                    style: {
                        left: t,
                        top: e,
                        width: y
                    }
                });
                n.lxHide = !1, n.onError(e => {
                    console.log("fetch banner error:" + e.errMsg), this.report(a.loadBannerError, {
                        errorCode: e.errCode,
                        errMsg: e.errMsg
                    }), this.bannerLoadError = !0;
                }), n.onResize(e => {
                    this.report(a.loadBanner, {
                        duration: (Date.now() - this.lastFetchBannerTime) / 1e3
                    }), this.bannerRes = e, this.adjustBanner();
                }), n.lxbannerLoadFinish = !1, n.onLoad(() => {
                    console.log("onLoad2222"), n.lxbannerLoadFinish = !0, n.lxHide || I(n, f);
                }), this.bannerAd = n;
            } else {
                this.bannerAd.lxHide = !1, console.log("reuseBannerAd"), this.bannerRes && this.adjustBanner(), 
                f = 0, I(this.bannerAd, f), this.bannerShowCount++;
            }
            this.bannerAd.style && (this.bannerAd.style.width = y);
        }
        adjustBanner() {
            let n = this.bannerShowInfo.hAlign, i = this.bannerShowInfo.vAlign, a = this.bannerShowInfo.pinY, s = this.bannerShowInfo.xOffset, o = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let r = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            if (0 == n ? this.bannerAd.style.left = 0 + s : 1 == n ? this.bannerAd.style.left = .5 * (p.windowWidth - r.width) + s : 2 == n && (this.bannerAd.style.left = p.windowWidth - r.width + s), 
            0 == i) this.bannerAd.style.top = 0 + o; else if (1 == i) this.bannerAd.style.top = .5 * (p.windowHeight - r.height) + o; else if (2 == i) {
                let e = 0;
                Laya.stage.height / Laya.stage.width > 2 && (e = 100 / 2436 * Laya.stage.width), 
                this.bannerAd.style.top = p.windowHeight - r.height + o - e, a > 0 && a < this.bannerAd.style.top && (this.bannerAd.style.top = a + 2);
            }
            let l = (this.bannerAd.style.top + r.height) * Laya.stage.width / p.windowWidth, h = this.bannerAd.style.top * Laya.stage.width / p.windowWidth;
            e.Instance.event(t.BannerPosChange, {
                ADPos: this.showBannerPos,
                bottom: l,
                top: h,
                BannerAD: this.bannerAd
            });
        }
        hideBanner() {
            null != this.bannerAd && (this.bannerAd.hide(), this.bannerAd.lxHide = !0, console.log("this hideBanner"));
        }
        report(e, t) {
            wx.aldSendEvent && wx.aldSendEvent(e, t);
        }
        postToOpenDataMessage(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "",
                type: e,
                data: t,
                openid: _.Instance.user.openid
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                let e = Date.now();
                if (console.log("onCheckShare" + this.curShareTimer), console.log(it.Instance), 
                e - this.curShareTimer >= d.ShareTickTimer) {
                    let e = !(!it.Instance._callShareCfg || !it.Instance._callShareCfg.fromVideoFail);
                    at.finishShare(it.Instance._callShareCfg.pos, !0, e);
                } else if ("undefined" != typeof wx && !it.Instance.wxCheck()) {
                    let e = "分享到不同群才能获得奖励!";
                    0 === this.sharePos && (e = ""), e.length && wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: () => {},
                        fail: () => {},
                        complete: () => {}
                    });
                }
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 100);
        }
        isLowDevice() {
            return ct.isAndroid && ct.isLowDevice;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {
            this.postToOpenDataMessage(le.updataScoreInfo, e);
        }
        shareVideo(e) {}
        hasOpenAD() {
            return !0;
        }
        showInterstitialAd(e, t, n, i) {}
        setLoadingProgress(e) {}
        showModal(e) {}
        hideAppBox() {
            this.appBoxHide = !0, this.appBox.offClose(this.hideAppBox.bind(this)), this.appBox.destroy(), 
            this.appBox = null, this.maskBox && this.maskBox.removeSelf();
        }
        showAppBox() {
            let e = wx;
            if (!e || !e.createAppBox) return;
            let t = [ "01a35b0603573ea9de83c0385e0aa290", "92f2aeaf7f529fa8c42c88900983ea2b", "40624bbe9b3d0208d367848d72a48cc3" ], n = t[y.getRandom(0, t.length - 1)];
            this.appBox && this.appBox.destroy(), this.appBox = e.createAppBox({
                adUnitId: n
            }), this.appBoxHide = !1, this.appBox.load().then(e => {
                console.log("res1"), console.log(JSON.stringify(e)), this.appBoxHide || this.appBox.show().then(e => {
                    console.log("res2"), console.log(JSON.stringify(e)), this.maskBox || (this.maskBox = new Laya.Box(), 
                    this.maskBox.width = Laya.stage.width, this.maskBox.height = Laya.stage.height, 
                    this.maskBox.pos(0, 0), this.maskBox.bgColor = "#000000", this.maskBox.alpha = .7, 
                    this.maskBox.on(Laya.Event.CLICK, this, this.onMaskClick)), ct.isIos && (Laya.stage.addChild(this.maskBox), 
                    this.maskBox.zOrder = 999999);
                });
            }), this.appBox.onClose(this.hideAppBox.bind(this));
        }
        onMaskClick(e) {
            e.stopPropagation();
        }
    }
    lt.sInfo = {};
    class ht {
        constructor() {
            this.bannerAd = null, this.bannerShowInfo = {}, this.checkShared = !0, this.bannerLoadError = !1, 
            this.lastInterstitialAdTime = 0, this.interstitialAd = null, this.info = {}, this.loginParams = {}, 
            this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0, 
            this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null, 
            this.curShareTimer = null, this.lastEndVideoAdTime = 0, this.info = ht.sInfo, this.loginParams = null;
        }
        onShareAppMessage(n) {
            let i = ae.DefaultShare, a = f.Instance.getVideoShareCfg(ae.DefaultShare), s = at.getShareInfoByCfg(a), o = s.shareContent, r = s.imgUrl, l = 0, h = "";
            return null != _.Instance && null != _.Instance.user && (h = _.Instance.user.openid, 
            l = _.Instance.user.uid), console.log("6666666666666666666666"), console.log("inviteName=" + _.Instance.user.nickName + "&openid=" + h + "&pos=" + i + "&shareTime=" + Date.now() + "&inviteCode=" + (l > 0 ? l : "")), 
            {
                title: o,
                imageUrl: r,
                query: "inviteName=" + _.Instance.user.nickName + "&openid=" + h + "&pos=" + i + "&shareTime=" + Date.now() + "&inviteCode=" + (l > 0 ? l : ""),
                success: n => {
                    e.Instance.event(t.ShareSuccess, {
                        pos: 0,
                        shareTickets: n.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(e, t) {
            e.runWith(ht.sInfo);
        }
        getSetting(e, t) {
            wx.getSetting({
                success: n => {
                    var i = n.authSetting;
                    !0 === i["scope.userInfo"] ? this.sdkLogin(e, t) : !1 === i["scope.userInfo"] ? this.openSetting() : i["scope.record"] ? i["scope.writePhotosAlbum"] ? i["scope.camera"] || this.sdkAuthorize("scope.camera") : this.sdkAuthorize("scope.writePhotosAlbum") : this.sdkAuthorize("scope.record");
                },
                fail: null,
                complete: null
            });
        }
        openSetting() {
            wx.openSetting({
                success: function(e) {},
                fail: null,
                complete: null
            });
        }
        sdkAuthorize(e) {
            wx.authorize({
                scope: e,
                success: e => {},
                fail: () => {},
                complete: null
            });
        }
        shareM(n, i, a, s, o, r, l = "") {
            if (d.IgnoreShare) return void e.Instance.event(t.ShareSuccess, {
                pos: n
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = n;
            var h = a, c = "";
            null != _.Instance && null != _.Instance.user && (c = _.Instance.user.openid);
            let p = "inviteName=" + _.Instance.user.nickName + "&openid=" + c + "&pos=" + this.sharePos + "&shareTime=" + r + "&inviteCode=" + _.Instance.user.uid + "&shareScene=" + this.sharePos;
            console.log("777777777777777777"), console.log(p);
            let u = s;
            i && (u = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.aldShareAppMessage({
                title: o,
                imageUrl: u,
                query: p,
                path: p,
                ald_desc: l || "",
                success: n => {
                    e.Instance.event(t.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: n.shareTickets,
                        from: h
                    });
                },
                fail: () => {
                    e.Instance.event(t.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: e => {
                    console.log("<<<<<<<<<<<<<<<<<取消1"), "undefined" == typeof wx || it.Instance.wxCheck() || wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    }), this.checkShared = !1, this.curShareTimer = 0;
                }
            }), Laya.timer.clear(this, this.onCheckShare);
        }
        showVideo(n, i, a = "") {
            if ("undefined" == typeof qttGame || !qttGame.showVideo) return;
            let s = {};
            s.index = n, s.gametype = 1, s.rewardtype = 1, pe.Instance.stopMusic(), qttGame.showVideo(i => {
                pe.Instance.playBgm(), 1 == i ? (it.Instance.onShowAdCompleted(n), e.Instance.event(t.ShowAdCompleted, n), 
                e.Instance.event(t.CloseShowAd, n), this.lastEndVideoAdTime = Date.now(), e.Instance.event(t.FinishVideoAd, n)) : e.Instance.event(t.CloseShowAd, n);
            }, s);
        }
        showBanner(e, t, n, i, a, s = 0, o = 0, r = 0, l = !1) {
            "undefined" != typeof qttGame && qttGame.showBanner && qttGame.showBanner({
                index: e,
                x: 100,
                y: 100,
                w: 100,
                stage_width: p.windowWidth,
                stage_height: p.windowHeight
            });
        }
        adjustBanner() {
            let n = this.bannerShowInfo.hAlign, i = this.bannerShowInfo.vAlign, a = this.bannerShowInfo.pinY, s = this.bannerShowInfo.xOffset, o = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let r = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            if (0 == n ? this.bannerAd.style.left = 0 + s + (at.getDeviceRatio() > 2 ? 20 : 0) : 1 == n ? this.bannerAd.style.left = .5 * (p.windowWidth - r.width) + s : 2 == n && (this.bannerAd.style.left = p.windowWidth - r.width + s - (at.getDeviceRatio() > 2 ? 20 : 0)), 
            0 == i) this.bannerAd.style.top = 0 + o; else if (1 == i) this.bannerAd.style.top = .5 * (p.windowHeight - r.height) + o; else if (2 == i) {
                let e = 0;
                Laya.stage.height / Laya.stage.width > 2 && (e = 50 / 2436 * Laya.stage.width), 
                this.bannerAd.style.top = p.windowHeight - r.height + o - e, a > 0 && a < this.bannerAd.style.top && (this.bannerAd.style.top = a + 2);
            }
            let l = (this.bannerAd.style.top + r.height) * Laya.stage.width / p.windowWidth, h = this.bannerAd.style.top * Laya.stage.width / p.windowWidth;
            e.Instance.event(t.BannerPosChange, {
                ADPos: this.showBannerPos,
                bottom: l,
                top: h,
                BannerAD: this.bannerAd
            });
        }
        hideBanner() {
            "undefined" != typeof qttGame && qttGame.showBanner && qttGame.hideBanner();
        }
        report(e, t) {}
        postToOpenDataMessage(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "",
                type: e,
                data: t,
                openid: _.Instance.user.openid
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                let e = Date.now();
                if (console.log("onCheckShare" + this.curShareTimer), console.log(it.Instance), 
                e - this.curShareTimer >= d.ShareTickTimer) {
                    let e = !(!it.Instance._callShareCfg || !it.Instance._callShareCfg.fromVideoFail);
                    at.finishShare(it.Instance._callShareCfg.pos, !0, e);
                } else if ("undefined" != typeof wx && !it.Instance.wxCheck()) {
                    let e = "分享到不同群才能获得奖励!";
                    0 === this.sharePos && (e = ""), e.length && wx.showModal({
                        title: "提示",
                        content: "分享到不同群才能获得奖励!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    });
                }
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 100);
        }
        isLowDevice() {
            return ct.isAndroid && ct.isLowDevice;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {
            this.postToOpenDataMessage(le.updataScoreInfo, e);
        }
        shareVideo(e) {}
        hasOpenAD() {
            return !0;
        }
        preLoadInAd() {
            "undefined" != typeof wx && this.showInterstitialAd(1, "", "", !0);
        }
        showInterstitialAd(e, t = "", n = "", i = !1) {
            let a = "adunit-669f1bbb50d78d69";
            1 == e && (a = "adunit-669f1bbb50d78d69");
            let s = !0;
            this.lastInterstitialAdTime > 0 && Date.now() - this.lastInterstitialAdTime <= 2e4 && (s = !1), 
            "undefined" != typeof wx && s && wx.createInterstitialAd && (this.interstitialAd || (this.interstitialAd = wx.createInterstitialAd({
                adUnitId: a
            }), this.interstitialAd.onClose(e => {
                console.log("onClose InterstitialAd"), this.lastInterstitialAdTime = Date.now();
            }), this.interstitialAd.onError(e => {
                console.log("fetch video error:" + e.errMsg);
            }), this.interstitialAd.onLoad(() => {
                console.log("fetch InterstitialAd success");
            })), this.interstitialAd.adUnitId = a, !i && this.interstitialAd && this.interstitialAd.show().catch(e => {
                console.error(e);
            }));
        }
        setLoadingProgress(e) {}
        showModal(e) {}
        hideheziAd() {}
        showheziAd() {}
        showAppBox() {}
        hideAppBox() {}
    }
    ht.sInfo = {};
    class ct {
        static get Instance() {
            if (null == ct._instance) switch (d.Platform) {
              case n.Wechat:
                "undefined" != typeof wx ? ct._instance = new ot() : ct._instance = new st();
                break;

              case n.TouTiao:
                "undefined" != typeof wx ? ct._instance = new rt() : ct._instance = new st();
                break;

              case n.QQ:
                "undefined" != typeof wx ? ct._instance = new lt() : ct._instance = new st();
                break;

              case n.Qutoutiao:
                "undefined" != typeof qttGame ? ct._instance = new ht() : ct._instance = new st();
                break;

              default:
                ct._instance = new st();
            }
            return ct._instance;
        }
        static IsTencentGame() {
            return d.Platform == n.Wechat || d.Platform == n.QQ;
        }
        static IsWeChat() {
            return d.Platform == n.Wechat;
        }
        static IsTouTiao() {
            return d.Platform == n.TouTiao;
        }
        static IsQQ() {
            return d.Platform == n.QQ;
        }
        static IsOppo() {
            return d.Platform == n.Oppo;
        }
        static IsQutoutiao() {
            return d.Platform == n.Qutoutiao;
        }
        static canShowWXOpenDomain() {
            return !!at.onMobile() && (!(!ct.IsTencentGame() || !d.SupportOpenDomain) && "undefined" != typeof wx);
        }
        static isLong() {
            return !(Laya.stage.height / Laya.stage.width < 2);
        }
        static nodeReport(e, t) {
            p.isNewPlayer && ct.Instance.report(e, t);
        }
        static shouldShowTReommend() {
            return !!this.IsTouTiao() && ("undefined" != typeof wx && void 0 !== wx.createMoreGamesButton && !(this.isIos && !d.vGameInfo.tIosRecommend));
        }
        static getPlatform() {
            return "undefined" != typeof qg ? qg : "undefined" != typeof wx ? wx : null;
        }
        static registerQGAldRequest() {
            if ("undefined" != typeof qg && !qg.aldRequest) {
                qg.aldRequest = (e => {
                    let t = e.url, n = e.data;
                    return console.log("aldRequest ev:" + (n.ev ? n.ev : "") + "tp:" + (n.tp ? n.tp : "")), 
                    new Promise((i, a) => {
                        new S((t, n) => {
                            t ? e.fail() : (console.log("aldRequest:" + JSON.stringify(n)), e.success({
                                statusCode: 200,
                                data: n
                            }));
                        }).sendGet(t, n, "text", e.header);
                    });
                });
                {
                    let e = {}, t = "https://glog.aldwx.com/config/app.json";
                    new S((e, t) => {}).sendGet(t, e, "text");
                }
            }
        }
        static onShow(e, t) {
            return ct.IsQutoutiao() && (console.log("visibilitychange"), window.document.addEventListener("visibilitychange", e => {
                console.log(e), window.document.hidden ? pe.Instance.stopMusic() : pe.Instance.playBgm();
            })), "undefined" != typeof qg ? (qg.onShow && qg.onShow(e), void (qg.onHide && qg.onHide(t))) : "undefined" != typeof wx ? (wx.onShow(e), 
            void wx.onHide(t)) : void 0;
        }
        static vibrateShort() {
            "undefined" == typeof wx || wx.vibrateShort({
                success: null,
                fail: null,
                complete: null
            });
        }
        static triggerGC() {
            "undefined" != typeof wx && wx.triggerGC && wx.triggerGC({
                success: null,
                fail: null,
                complete: null
            });
        }
    }
    ct.isQG = !1, ct.shouldReBuild = !1;
    class dt {
        constructor() {
            this.game_name = "我要当枪王";
        }
        static get Instance() {
            return null === dt._instance && (dt._instance = new dt()), dt._instance;
        }
        loadComplete() {
        }
        loadingFinished() {
        }
        startPlayGame() {
        }
    }
    dt._instance = null;
    class pt {
        constructor() {
            this.loadingRes = !1, this.loaded = !1, this.loadResCallback = null, this.templet = null, 
            this.bitmapFont = null, this.threeDResDir = "", this.reset();
        }
        static get Instance() {
            return null == pt._instance && (pt._instance = new pt()), pt._instance;
        }
        reset() {
            this.loadingRes = !1, this.loaded = !1, "undefined" != typeof wx && d.useZip && (this.threeDResDir = wx.env.USER_DATA_PATH + "/DRes" + d.tResVer + "/", 
            console.log(this.threeDResDir));
        }
        loadRes(e) {
            this.loadingRes || (this.loadResCallback = e, this.loadingRes = !0, this.loadAllRes());
        }
        onProgress(n) {
            e.Instance.event(t.ResLoadProgress, n);
        }
        onLoad() {
            this.loadingRes = !1;
        }
        onLoadResComplete() {
            this.loadResCallback && this.loadResCallback.run(), this.loadingRes = !1, this.loaded = !0, 
            this.sentResToOpenContext(), e.Instance.event(t.StartLoadFinish), ct.nodeReport(a.loadRes);
        }
        loadAllRes() {
            "undefined" == typeof wx || d.UseRemoteRes, d.useZip ? this.unzipThreeDRes().then(e => {
                this.deleteOldThreeDResDir(), this.load3DRes();
            }).catch(e => {
                console.log("unzip error");
            }) : this.load3DRes(), dt.Instance.loadComplete();
        }
        load3DRes() {
            et.Instance.preLoadLevel(new Laya.Handler(this, this.loadGRes));
        }
        loadGRes() {
          
            // platform.getInstance().startup("Johnny-Trigger-3d-Online","f7d560115c3d42a993b50fce33a674dc",()=>{
                let yad     = new Laya.Image();
                yad.scale(0.8,0.8);
                yad.skin    = "common/yad.png";
                yad.centerX = 0;
                yad.bottom  = 10;
                yad.zOrder  = 2e3;
                yad.on(Laya.Event.MOUSE_DOWN,yad,()=>{platform.getInstance().navigate("GAME","LOGO")})
                Laya.stage.addChild(yad);
                window.yad  = yad;

                let e = m.getGameRes();
                Laya.loader.load(e, Laya.Handler.create(this, this.loadHomeScene), Laya.Handler.create(this, this.onProgress, null, !1), null, 1, !0);
            // });
        }
        onError() {
            console.log("加载动画失败");
        }
        clear() {}
        sentResToOpenContext() {
            Laya.Browser.onMiniGame;
        }
        deleteOldThreeDResDir() {
            if ("undefined" == typeof wx || !d.useZip) return;
            var e = wx.getFileSystemManager();
            let t = wx.env.USER_DATA_PATH, n = "DRes" + d.tResVer;
            e.readdir({
                dirPath: t,
                success: t => {
                    let i = t.files;
                    for (let t = 0; t < i.length; t++) {
                        let a = i[t];
                        console.log("file " + a), a !== n && 0 == a.indexOf("DRes") && e.rmdir({
                            dirPath: wx.env.USER_DATA_PATH + "/" + a,
                            recursive: !0
                        });
                    }
                }
            });
        }
        unzipThreeDRes() {
            if ("undefined" == typeof wx || !d.useZip) return new Promise((e, t) => {
                e("");
            });
            var e = wx.getFileSystemManager();
            d.tResVer;
            let t = this.threeDResDir;
            return console.log("assets directory: " + t), new Promise((n, i) => {
                e.access({
                    path: t,
                    success: e => {
                        n(e);
                    },
                    fail: () => {
                        i("res directory not exist. upziping...");
                    }
                });
            }).then(e => {
                console.log("res directory exist. load assets...");
            }).catch(t => new Promise((t, n) => {
                e.unzip({
                    zipFilePath: "res/DRes.zip",
                    targetPath: wx.env.USER_DATA_PATH,
                    success: function(e) {
                        console.log("unzip complte"), t();
                    },
                    fail: function(e) {
                        n("assets unzip fail");
                    }
                });
            }));
        }
        loadHomeScene() {
            this.onLoadResComplete();
        }
    }
    pt._instance = null;
    class ut {
        constructor() {}
        static currTimer() {
            return Laya.timer.currTimer;
        }
        static scale() {
            return Laya.timer.scale;
        }
        static currFrame() {
            return Laya.timer.currFrame;
        }
        static delta() {
            return Laya.timer.delta;
        }
        static once(e, t, n, i = [], a = !0) {
            Laya.timer.once(e, t, n, i, a);
        }
        static loop(e, t, n, i = [], a = !0, s = !1) {
            Laya.timer.loop(e, t, n, i, a, s);
        }
        static frameOnce(e, t, n, i, a) {
            Laya.timer.frameOnce(e, t, n, i, a);
        }
        static frameLoop(e, t, n, i = null, a = !0) {
            Laya.timer.frameLoop(e, t, n, i, a);
        }
        static clear(e, t) {
            Laya.timer.clear(e, t);
        }
        static clearAll(e) {
            Laya.timer.clearAll(e);
        }
        static callLater(e, t, n) {
            Laya.timer.callLater(e, t, n);
        }
        static runCallLater(e, t) {
            Laya.timer.runCallLater(e, t);
        }
        static runTimer(e, t) {
            Laya.timer.runTimer(e, t);
        }
    }
    class gt {
        static isEmpty(e) {
            return !e || 0 == e.length;
        }
        static format(e, t) {
            var n = e;
            if (null == t.length) {
                var i = new RegExp("\\{0\\}", "gm");
                n = n.replace(i, t);
            } else for (var a = 0; a < t.length; a++) {
                i = new RegExp("\\{" + a + "\\}", "gm");
                n = n.replace(i, t[a]);
            }
            return n;
        }
        static getFormatSeconds(e, t = ":") {
            var n, i = 0, a = 0;
            return e > 60 && (a = e / 60, e %= 60, a > 60 && (i = a / 60, a %= 60)), n = i >= 10 ? Math.floor(i) + ":" : "0" + Math.floor(i) + ":", 
            n += a >= 10 ? Math.floor(a) + ":" : "0" + Math.floor(a) + ":", n += e >= 10 ? Math.floor(e) + "" : "0" + Math.floor(e);
        }
        static getFormatSeconds2(e, t = ":") {
            var n, i = 0, a = 0;
            return e > 60 && (a = e / 60, e %= 60, a > 60 && (i = a / 60, a %= 60)), n = i >= 10 ? Math.floor(i) + ":" : i > 0 ? "0" + Math.floor(i) + ":" : "", 
            n += a >= 10 ? Math.floor(a) + ":" : "0" + Math.floor(a) + ":", n += e >= 10 ? Math.floor(e) + "" : "0" + Math.floor(e);
        }
        static split(e, t) {
            var n = [];
            return e.split(t).forEach(e => {
                "" != e && n.push(e);
            }), n;
        }
        static getAvatarUrl(e, t = "-img64") {
            return e && e.length ? -1 !== e.indexOf("res7.lexun99.com") ? e + t : e : "common/default_avatar.png";
        }
        static endWith(e, t) {
            let n = t + "$", i = Laya.Pool.getItemByCreateFun(n, () => new RegExp(n)), a = i.test(e);
            return Laya.Pool.recover(n, i), a;
        }
        static startWith(e, t) {
            let n = "^" + t, i = Laya.Pool.getItemByCreateFun(n, () => new RegExp(n)), a = i.test(e);
            return Laya.Pool.recover(n, i), a;
        }
        static replaceAll(e, t, n) {
            return e.split(t).join(n);
        }
        static navigateToMiniProgram(e, t, n = null) {
            if ("undefined" == typeof wx) return;
            if (!e) return;
            let i = {
                appId: e.pid,
                path: e.path,
                extraData: {},
                envVersion: "release",
                success(i) {
                    console.log("Taylor --- open ok"), C.Instance.sharePlay(e.pid), n && n(!0), gt.report(e, he.JumpSuccess, t);
                },
                fail(i) {
                    console.log("Taylor --- open fail"), n && n(!1), gt.report(e, he.JumpFail, t);
                }
            };
            wx.navigateToMiniProgram && wx.navigateToMiniProgram(i), C.Instance.advertisement("icon_click");
        }
        static report(e, t, n) {
            let i = {
                "游戏": e.name,
                "跳转来源": n
            };
            ct.Instance.report(t, i), console.log("Taylor --- eventName= " + t), console.log("Taylor --- params= " + i);
        }
    }
    !function(e) {
        e.JumpSuccess = "跳转成功", e.JumpFail = "跳转失败";
    }(he || (he = {})), function(e) {
        e.Unkonw = "未知", e.HomeIcon = "首页抖动Icon", e.HomeBottom = "首页底部横向滚动", e.GameIcon = "游戏页面抖动Icon", 
        e.ReviveBottom = "复活页底部", e.ReviveCenter = "复活页中部", e.ReviveLR = "复活页左右", e.GradeUp = "段位升级页面", 
        e.Offline = "离线收益页面", e.receiveFree = "免费领取金币页面", e.BeforeSettle = "结算页面之前弹出页面", 
        e.NoTouch = "静止插屏页面", e.HomeGift = "首页礼包", e.HomeRight = "首页侧拉热门按钮", e.HomeOut = "首页退出按钮", 
        e.GameOut = "游戏中退出按钮", e.BackHome = "游戏中小屋按钮", e.JumpFail = "icon跳转失败后页面", e.recent = "最近小程序", 
        e.GradeupClose = "段位升级界面关闭", e.settlementShare = "好友邀请", e.RoleProgressClose = "解锁界面关闭";
    }(ce || (ce = {}));
    class mt {
        constructor() {
            this.curSubPacketLoadProgress = 0, this.loadProgress = 0, this.updateManager = null, 
            this.subPackageName = "res", this.curHideTimer = 0;
        }
        static get Instance() {
            return null === mt._instance && (mt._instance = new mt()), mt._instance;
        }
        onConfigLoaded() {
            this.canLoadSubpackage() ? (console.log("Taylor --- 加载分包"), Wt.Instance.openUI(zt.Load, {
                loadSubpackage: !0
            }), this.loadSubpackage()) : (Wt.Instance.openUI(zt.Load, {
                loadSubpackage: !1
            }), this.loadSubpackageFinish()), C.Instance.initSDK(), this.checkForUpdate();
        }
        initEnv() {
            zt.initConfig(), ct.registerQGAldRequest(), this.stageEvent(), ct.onShow(e => {
                this.onShowWX(e);
            }, e => {
                this.onHideWX(e);
            });
            let e = parseInt(Laya.LocalStorage.getItem("wxRegisterTime") || "0");
            0 === e && (e = Date.now(), Laya.LocalStorage.setItem("wxRegisterTime", e.toString()), 
            Laya.LocalStorage.removeItem("canFetchVideo"), Laya.LocalStorage.removeItem("useVideoMaxTime"), 
            p.firstTimePlayer = !0), p.registerTime = e;
            let t = Date.now();
            p.accountTime = t - e;
            {
                let e = parseInt(Laya.LocalStorage.getItem("lastStartLoadTime") || "0");
                p.lastStartTime = e, Laya.LocalStorage.setItem("lastStartLoadTime", t.toString());
            }
            if (p.registerDayString = u.timestampToDay(p.registerTime), p.isOverDay = at.checkOverDay(), 
            p.isNewPlayer = u.isSameDay(t, e), d.recoverData || (p.isNewPlayer = !0), ct.IsTencentGame() || ct.IsTouTiao()) {
                let e = null, t = ct.getPlatform();
                t && t.getSystemInfoSync && (e = t.getSystemInfoSync()), e && (console.log(e), p.windowHeight = e.windowHeight, 
                p.windowWidth = e.windowWidth, p.screenHeight = e.screenHeight, p.screenWidth = e.screenWidth, 
                e.platform && "android" === e.platform.toLowerCase() ? ct.isAndroid = !0 : e.platform && "ios" === e.platform.toLowerCase() && (ct.isIos = !0), 
                e.benchmarkLevel && e.benchmarkLevel >= 1 && e.benchmarkLevel < 20 && (ct.isLowDevice = !0));
            }
            ct.Instance.setLoadingProgress(0), ct.nodeReport(a.gameStart), ct.IsOppo() && this.onShowWX(null);
        }
        onLoadComplete() {
            pt.Instance.loadRes(null), this.doLoginAction(null);
        }
        canLoadSubpackage() {
            if ( !this.subPackageName || !this.subPackageName.length) return !1;
            if (d.UseRemoteRes) return !1;
            let e = ct.getPlatform();
            return !(!e || !e.loadSubpackage);
        }
        loadSubpackageFinish() {
            Laya.loader.load(m.getGameConfig(), Laya.Handler.create(this, this.onLoadComplete));
        }
        loadSubpackage() {
            let e = ct.getPlatform();
            if (console.log("canLoadSubpackage111"), e && e.loadSubpackage) {
                console.log("canLoadSubpackage112221");
                let t = e.loadSubpackage({
                    name: this.subPackageName,
                    success: e => {
                        this.loadSubpackageFinish(), console.log("success"), Laya.timer.clear(this, this.updateLoad);
                    },
                    fail: e => {
                        console.log("fail"), Laya.timer.clear(this, this.updateLoad);
                    }
                });
                t && (t.onProgressUpdate(e => {
                    console.log("下载进度", e.progress), console.log("已经下载的数据长度", e.totalBytesWritten), 
                    console.log("预期需要下载的数据总长度", e.totalBytesExpectedToWrite), this.curSubPacketLoadProgress = e.progress / 100;
                }), Laya.timer.once(500, this, this.updateLoad));
            }
        }
        loadMusicSubPackage() {
            if (!this.canLoadSubpackage()) return;
            let e = ct.getPlatform();
            if (console.log("canLoadSubpackage111"), e && e.loadSubpackage) {
                console.log("canLoadSubpackage112221"), pe.Instance.canPlay = !1;
                e.loadSubpackage({
                    name: "music",
                    success: e => {
                        pe.Instance.canPlay = !0, pe.Instance.playBgm();
                    },
                    fail: e => {}
                });
            }
        }
        doLoginAction(e = null) {
            this.getAppCfg(), C.Instance.isOpenSDK() && this.getLimitCity(), _.Instance.loginError = !1, 
            ct.Instance.sdkLogin(Laya.Handler.create(this, t => {
                ct.Instance.loginParams = t, this.connectSdkLoginSrv(ct.Instance.loginParams, e);
            }), null);
        }
        getLimitCity() {
            // w.Instance.login2User({
            //     iscommit: 1
            // }).then(e => {
            //     e && (d.isLimitCity = e.isL || !1, d.isLimitCityB = e.isLB || !1);
            // }).catch(e => {
            //     console.log(e);
            // });
        }
        connectSdkLoginSrv(e, t) {
            null !== e && (console.log("Taylor --- params= " + e), v.Instance.sdkLogin(e, t));
        }
        onShowWX(n) {
            if (_.Instance.onlineStartTime = new Date().getTime(), console.log("onShowWX"), 
            n) {
                console.log(n);
                n.path;
                n && n.referrerInfo && n.referrerInfo.appId && console.log(n.referrerInfo);
                let e = n.query;
                if (e && (console.log("showWX:" + e + "scene" + (n.scene || "")), this.updateLoadInfoFromWX(e)), 
                n.scene) {
                    p.scene = n.scene, ct.Instance.report("GameScene", {
                        scene: n.scene
                    });
                    let e = n.scene;
                    console.log("Taylor ---scene=" + e), "1037" != e && "1058" != e && "1067" != e && "1095" != e || (p.canE = !0);
                }
            }
            let i = 0;
            this.curHideTimer && (i = Date.now() - this.curHideTimer) < 0 && (i = 0), this.curHideTimer = null, 
            e.Instance.event(t.GetFocus, {
                hideTime: i
            }), this.onMouseUp();
        }
        onHideWX(n) {
        }
        bannerClickCheck(e) {
            null != e && (8 == e.targetAction || 9 == e.targetAction || 10 == e.targetAction) && e.targetPagePath && e.targetPagePath.length > 50 && ct.Instance.report(a.BannerJump, {
                pos: ct.Instance.showBannerPos
            });
        }
        updateLoadInfoFromWX(e) {
            if (null !== e && (null !== e.inviteName || null !== e.openid || null !== e.inviteCode)) {
                e.inviteName, e.openid, e.pos, e.shareTime;
                let t = e.inviteCode;
                t && (_.Instance.inviteCode = t);
            }
        }
        getAppCfg() {
            // w.Instance.getAppConfig().then(e => {
            //     if (console.log(e), d.State = e.type || 0, d.showRecommend = e.showRecommend || !1, 
            //     d.ShareTickTimer = e.shareTimer || 3e3, d.vGameInfo = Object.assign({}, h, e.vGameInfo), 
            //     d.State == i.Check) d.vAdCount = 3e3; else {
            //         let t = e.shareList || [];
            //         t.length > 0 && (ct.IsTouTiao() || (d.ShareInfoList = t)), d.vList = e.vList || [], 
            //         d.vsInfo = e.vsInfo || {
            //             type: 0,
            //             snu: 6,
            //             vnum: 8
            //         }, d.vAdCount = e.vAdCount || d.vAdCount;
            //     }
            // }).catch(e => {
            //     console.log(e);
            // });
        }
        updateLoad() {
            console.log("updateLoad"), this.loadProgress += .05, this.loadProgress >= 1 ? (console.log("updateLoad clear"), 
            Laya.timer.clear(this, this.updateLoad), this.loadProgress = 1) : Laya.timer.once(500, this, this.updateLoad), 
            this.updateSubPacketLoad();
        }
        updateSubPacketLoad() {
            let n = this.curSubPacketLoadProgress;
            n < .9 || (console.log("updateSubPacketLoad clear"), Laya.timer.clear(this, this.updateLoad)), 
            n = .1 * this.curSubPacketLoadProgress + .9 * this.loadProgress, e.Instance.event(t.SubpackageLoadProgress, n);
        }
        checkForUpdate() {
            "undefined" != typeof wx && wx.getUpdateManager && (this.updateManager = wx.getUpdateManager(), 
            this.updateManager.onCheckForUpdate(function(e) {
                console.log(e.hasUpdate);
            }), this.updateManager.onUpdateReady(() => {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success: e => {
                        e.confirm && this.updateManager.applyUpdate();
                    },
                    fail: null,
                    complete: null,
                    confirmText: "重启",
                    confirmColor: "#3CC51F",
                    showCancel: !0,
                    cancelText: "取消",
                    cancelColor: "#000000"
                });
            }), this.updateManager.onUpdateFailed(() => {}));
        }
        stageEvent() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp), this.onMouseUp();
        }
        onMouseDown() {
            ut.clear(this, this.showFyhdTuiView1);
        }
        onMouseUp() {
            ut.clear(this, this.showFyhdTuiView1), ut.once(1e4, this, this.showFyhdTuiView1);
        }
        showFyhdTuiView1() {
            // if (console.log("Taylor --- showFyhdTuiView1"), !ct.IsWeChat()) return;
            // console.log("Taylor --- showFyhdTuiView2");
            // let e = Wt.Instance.isUIOpen(zt.MatrixTui1) || Wt.Instance.isUIOpen(zt.MatrixTui4) || Wt.Instance.isUIOpen(zt.MatrixTui8);
            // if (C.Instance.isOpenSDK() && !e && Wt.Instance.isUIOpen(zt.Game)) {
            //     console.log("Taylor --- showFyhdTuiView3");
            //     let e = C.Instance.tuiInfo;
            //     console.log("Taylor --- data1= ", e);
            //     let t = Math.floor(10 * Math.random());
            //     console.log("Taylor --- random1= " + t);
            //     let n = e[t];
            //     gt.navigateToMiniProgram(n, ce.NoTouch);
            // }
        }
    }
    mt._instance = null;
    var yt, ft, It, St, wt, _t, vt, Ct, Lt, bt, kt, Tt, Bt = Laya.ClassUtils.regClass;
    !function(e) {
        !function(t) {
            class n extends Laya.EffectAnimation {
                constructor() {
                    super(), this.effectData = e.ani.BtnScaleDownUI.uiView;
                }
            }
            n.uiView = {
                type: "View",
                props: {
                    name: "BtnScaleDown"
                },
                compId: 1,
                child: [ {
                    type: "Image",
                    props: {},
                    compId: 2
                } ],
                animations: [ {
                    nodes: [ {
                        target: 2,
                        keyframes: {
                            x: [ {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "x",
                                index: 0
                            } ],
                            scaleY: [ {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 1
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 5
                            } ],
                            scaleX: [ {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 1
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 5
                            } ]
                        }
                    } ],
                    name: "PressDown",
                    id: 1,
                    frameRate: 24,
                    action: 0
                } ],
                loadList: [],
                loadList3D: []
            }, t.BtnScaleDownUI = n, Bt("ui.ani.BtnScaleDownUI", n);
            class i extends Laya.EffectAnimation {
                constructor() {
                    super(), this.effectData = e.ani.BtnScaleUpUI.uiView;
                }
            }
            i.uiView = {
                type: "View",
                props: {
                    name: "BtnScaleUp"
                },
                compId: 1,
                child: [ {
                    type: "Image",
                    props: {},
                    compId: 2
                } ],
                animations: [ {
                    nodes: [ {
                        target: 2,
                        keyframes: {
                            x: [ {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "x",
                                index: 0
                            } ],
                            scaleY: [ {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 1
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 5
                            } ],
                            scaleX: [ {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 1
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 5
                            } ]
                        }
                    } ],
                    name: "PressUp",
                    id: 1,
                    frameRate: 24,
                    action: 0
                } ],
                loadList: [],
                loadList3D: []
            }, t.BtnScaleUpUI = i, Bt("ui.ani.BtnScaleUpUI", i);
        }(e.ani || (e.ani = {}));
    }(yt || (yt = {})), function(e) {
        class t extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(t.uiView);
            }
        }
        t.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [ {
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .7
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "hitInfoView",
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 459,
                    bottom: 0
                },
                compId: 17,
                child: [ {
                    type: "Image",
                    props: {
                        var: "imgPlayer",
                        skin: "egg/ico_egg.png",
                        name: "imgPlayer",
                        centerY: 0,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 163,
                        x: 308,
                        var: "imgAni",
                        skin: "egg/Hit_1.png",
                        name: "imgAni",
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 32
                }, {
                    type: "Image",
                    props: {
                        var: "imgBg",
                        top: 0,
                        skin: "egg/ico_hammer.png",
                        right: 0,
                        name: "imgBg",
                        left: 0,
                        bottom: 0
                    },
                    compId: 31
                }, {
                    type: "Image",
                    props: {
                        x: 169,
                        var: "imgProgerss",
                        skin: "egg/img_progress_bg.png",
                        name: "imgProgerss",
                        centerY: 350,
                        centerX: 0
                    },
                    compId: 28,
                    child: [ {
                        type: "Sprite",
                        props: {
                            texture: "egg/img_progress_bg$bar.png"
                        },
                        compId: 29,
                        child: [ {
                            type: "Box",
                            props: {
                                width: 410,
                                var: "maskView",
                                renderType: "mask",
                                height: 35
                            },
                            compId: 30
                        } ]
                    } ]
                } ]
            }, {
                type: "Box",
                props: {
                    y: 1e3,
                    x: 0,
                    width: 720,
                    var: "hitActionView",
                    right: 0,
                    left: 0,
                    height: 344,
                    bottom: -10
                },
                compId: 16,
                child: [ {
                    type: "Button",
                    props: {
                        y: 206,
                        var: "hitBtn",
                        stateNum: 1,
                        skin: "egg/btn_open.png",
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 12,
                    child: [ {
                        type: "Script",
                        props: {
                            y: 96,
                            x: 170,
                            playEvent: "mousedown",
                            runtime: "ui.ani.BtnScaleDownUI"
                        },
                        compId: 26
                    }, {
                        type: "Script",
                        props: {
                            runtime: "ui.ani.BtnScaleUpUI"
                        },
                        compId: 27
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 150,
                        x: 510.5,
                        width: 163,
                        texture: "egg/ico_hand.png",
                        height: 192
                    },
                    compId: 13
                }, {
                    type: "Sprite",
                    props: {
                        y: -25,
                        x: 550,
                        width: 186,
                        texture: "egg/ico_press_label.png",
                        height: 158
                    },
                    compId: 14
                } ]
            }, {
                type: "Image",
                props: {
                    y: 250,
                    x: 105,
                    top: 250,
                    skin: "egg/ico_title.png",
                    centerX: 0
                },
                compId: 4
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "awardInfoView",
                    right: 0,
                    left: 0,
                    height: 549,
                    centerY: -139
                },
                compId: 20,
                child: [ {
                    type: "Image",
                    props: {
                        y: 264,
                        width: 528,
                        skin: "common/light.png",
                        height: 528,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 19
                }, {
                    type: "Image",
                    props: {
                        width: 335,
                        top: 150,
                        skin: "egg/box.png",
                        height: 298,
                        centerX: 20
                    },
                    compId: 18
                }, {
                    type: "Label",
                    props: {
                        var: "coinLabel",
                        valign: "middle",
                        text: "1000",
                        right: 0,
                        left: 0,
                        fontSize: 60,
                        color: "#FEB440",
                        bottom: 31,
                        align: "center"
                    },
                    compId: 21
                } ]
            }, {
                type: "Box",
                props: {
                    x: 0,
                    width: 720,
                    var: "awardActionView",
                    runtime: "views/runtime/UIAdapter.ts",
                    height: 165,
                    bottom: 333
                },
                compId: 25,
                child: [ {
                    type: "Button",
                    props: {
                        y: 42,
                        x: 360,
                        var: "watchADBtn",
                        top: 0,
                        stateNum: 1,
                        skin: "common/btn.png",
                        scaleY: .7,
                        scaleX: .7,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 23,
                    child: [ {
                        type: "Image",
                        props: {
                            x: 30,
                            skin: "common/ic_vedio3.png",
                            scaleY: .7,
                            scaleX: .7,
                            centerY: 0
                        },
                        compId: 35
                    }, {
                        type: "Label",
                        props: {
                            x: 83,
                            text: "10倍金币",
                            strokeColor: "#43a116",
                            stroke: 4,
                            fontSize: 65,
                            font: "SimSun",
                            color: "#43e267",
                            centerY: 0
                        },
                        compId: 36
                    } ]
                }, {
                    type: "Label",
                    props: {
                        width: 720,
                        visible: !1,
                        var: "closeBtn",
                        valign: "middle",
                        underlineColor: "#f4ebeb",
                        underline: !0,
                        text: "不,谢谢",
                        right: 0,
                        name: "closeBtn",
                        left: 0,
                        height: 65,
                        fontSize: 24,
                        color: "#FFFFFF",
                        bottom: 0,
                        align: "center"
                    },
                    compId: 24
                } ]
            } ],
            animations: [ {
                nodes: [ {
                    target: 13,
                    keyframes: {
                        scaleY: [ {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 5
                        } ],
                        scaleX: [ {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 5
                        } ]
                    }
                }, {
                    target: 14,
                    keyframes: {
                        scaleY: [ {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleY",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleY",
                            index: 5
                        } ],
                        scaleX: [ {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleX",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleX",
                            index: 5
                        } ]
                    }
                } ],
                name: "ani1",
                id: 1,
                frameRate: 12,
                action: 0
            }, {
                nodes: [ {
                    target: 19,
                    keyframes: {
                        rotation: [ {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 19,
                            key: "rotation",
                            index: 0
                        }, {
                            value: 360,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 19,
                            key: "rotation",
                            index: 10
                        } ]
                    }
                } ],
                name: "ani2",
                id: 2,
                frameRate: 12,
                action: 0
            }, {
                nodes: [ {
                    target: 23,
                    keyframes: {
                        scaleY: [ {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 20
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 40
                        } ],
                        scaleX: [ {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 20
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 40
                        } ]
                    }
                } ],
                name: "ani4",
                id: 4,
                frameRate: 24,
                action: 0
            }, {
                nodes: [],
                name: "ani5",
                id: 5,
                frameRate: 24,
                action: 0
            }, {
                nodes: [ {
                    target: 32,
                    keyframes: {
                        x: [ {
                            value: 308,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 32,
                            key: "x",
                            index: 0
                        } ],
                        skin: [ {
                            value: "egg/Hit_1.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 32,
                            key: "skin",
                            index: 0
                        }, {
                            value: "egg/Hit_2.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 32,
                            key: "skin",
                            index: 5
                        } ]
                    }
                } ],
                name: "ani6",
                id: 6,
                frameRate: 24,
                action: 0
            } ],
            loadList: [ "egg/ico_egg.png", "egg/Hit_1.png", "egg/ico_hammer.png", "egg/img_progress_bg.png", "egg/img_progress_bg$bar.png", "egg/btn_open.png", "egg/ico_hand.png", "egg/ico_press_label.png", "egg/ico_title.png", "common/light.png", "egg/box.png", "common/btn.png", "common/ic_vedio3.png", "egg/Hit_2.png" ],
            loadList3D: []
        }, e.EggViewUI = t, Bt("ui.EggViewUI", t);
        class n extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(n.uiView);
            }
        }
        n.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [ {
                type: "Box",
                props: {
                    var: "startBox",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 72,
                child: [ {
                    type: "Box",
                    props: {
                        var: "startView",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 93
                }, {
                    type: "Box",
                    props: {
                        y: 138,
                        x: 0,
                        width: 750,
                        height: 400
                    },
                    compId: 73,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 96,
                            x: 375,
                            skin: "loading/logo.png",
                            scaleY: .7,
                            scaleX: .7,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 74
                    }, {
                        type: "Box",
                        props: {
                            y: 154,
                            width: 198,
                            left: 20,
                            height: 53
                        },
                        compId: 75,
                        child: [ {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 181,
                                skin: "game/coin_bg.png",
                                sizeGrid: "0,40,0,40",
                                height: 53
                            },
                            compId: 76,
                            child: [ {
                                type: "Label",
                                props: {
                                    y: 0,
                                    x: 16,
                                    width: 126,
                                    var: "coinLabel",
                                    valign: "middle",
                                    text: "1657",
                                    height: 54,
                                    fontSize: 40,
                                    color: "#FFFFFF",
                                    align: "left"
                                },
                                compId: 78
                            }, {
                                type: "Image",
                                props: {
                                    y: -5,
                                    x: 143,
                                    skin: "game/coin.png"
                                },
                                compId: 77
                            } ]
                        } ]
                    } ]
                }, {
                    type: "Box",
                    props: {
                        width: 234,
                        var: "levelBox",
                        scaleY: 1.3,
                        scaleX: 1.3,
                        height: 83,
                        centerY: 190,
                        centerX: 0
                    },
                    compId: 79,
                    child: [ {
                        type: "Image",
                        props: {
                            var: "currentLevelBox",
                            skin: "game/level_1.png",
                            centerY: 0,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 81,
                        child: [ {
                            type: "Label",
                            props: {
                                y: 10.5,
                                width: 55,
                                var: "currentLabel",
                                valign: "middle",
                                text: "60",
                                strokeColor: "#3badd9",
                                stroke: 3,
                                height: 62,
                                fontSize: 50,
                                color: "#eef6f3",
                                centerX: 0,
                                bold: !1,
                                align: "center"
                            },
                            compId: 84
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            var: "preLevelBox",
                            skin: "game/level_2.png",
                            scaleX: 1,
                            centerY: 0,
                            centerX: -98,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 82,
                        child: [ {
                            type: "Label",
                            props: {
                                y: 2,
                                width: 55,
                                var: "preLabel",
                                valign: "middle",
                                text: "60",
                                strokeColor: "#3badd9",
                                stroke: 3,
                                height: 62,
                                fontSize: 40,
                                color: "#eef6f3",
                                centerX: 0,
                                bold: !0,
                                align: "center"
                            },
                            compId: 85
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            x: 215,
                            var: "nextLevelBox",
                            skin: "game/level_2.png",
                            centerY: 0,
                            centerX: 98,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 83,
                        child: [ {
                            type: "Label",
                            props: {
                                y: 2,
                                width: 55,
                                var: "nextLabel",
                                valign: "middle",
                                text: "60",
                                strokeColor: "#3badd9",
                                stroke: 3,
                                height: 62,
                                fontSize: 40,
                                color: "#eef6f3",
                                centerX: 0,
                                bold: !0,
                                align: "center"
                            },
                            compId: 86
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 19,
                            var: "bossIcon",
                            skin: "game/bossLevel.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 87
                    } ]
                }, {
                    type: "Label",
                    props: {
                        x: 255,
                        text: "BẮT ĐẦU",
                        strokeColor: "#000000",
                        stroke: 4,
                        fontSize: 60,
                        color: "#FFFFFF",
                        centerY: 350,
                        bold: !0
                    },
                    compId: 88
                }, {
                    type: "Image",
                    props: {
                        var: "skinGunBtn",
                        skin: "game/gun_btn.png",
                        left: 0,
                        centerY: 350,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 91
                }, {
                    type: "Image",
                    props: {
                        var: "skinRoleBtn",
                        skin: "game/skin_btn.png",
                        right: 0,
                        centerY: 350,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 92
                }, {
                    type: "Image",
                    props: {
                        visible: !1,
                        var: "signBtn",
                        skin: "game/sign_btn.png",
                        left: 0,
                        centerY: 210,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 96
                } ]
            }, {
                type: "Image",
                props: {
                    y: 590,
                    x: 0,
                    var: "tipImageView",
                    skin: "game/success.png",
                    rotation: 0,
                    centerY: 0,
                    centerX: 0,
                    anchorY: 0,
                    anchorX: 0
                },
                compId: 89
            }, {
                type: "Label",
                props: {
                    y: 117,
                    x:5,
                    width: 342,
                    var: "levelTitleLabel",
                    valign: "middle",
                    text: "关卡1",
                    strokeColor: "#000000",
                    stroke: 4,
                    height: 60,
                    fontSize: 60,
                    color: "#FFFFFF",
                    centerX: 0,
                    bold: !0,
                    align: "center"
                },
                compId: 90
            }, {
                type: "Box",
                props: {
                    y: 150,
                    x: 20,
                    width: 198,
                    var: "coinBox",
                    top: 150,
                    left: 20,
                    height: 53
                },
                compId: 98,
                child: [ {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 181,
                        skin: "game/coin_bg.png",
                        sizeGrid: "0,40,0,40",
                        height: 53
                    },
                    compId: 99,
                    child: [ {
                        type: "Label",
                        props: {
                            y: 0,
                            x: 16,
                            width: 126,
                            var: "coinLabel1",
                            valign: "middle",
                            text: "1657",
                            height: 54,
                            fontSize: 40,
                            color: "#FFFFFF",
                            align: "left"
                        },
                        compId: 100
                    }, {
                        type: "Image",
                        props: {
                            y: -5,
                            x: 143,
                            skin: "game/coin.png"
                        },
                        compId: 101
                    } ]
                } ]
            }, {
                type: "Box",
                props: {
                    y: 189,
                    x: 204,
                    var: "BossHP"
                },
                compId: 102,
                child: [ {
                    type: "ProgressBar",
                    props: {
                        y: 18,
                        x: 51,
                        var: "hpProgress",
                        skin: "game/hp.png"
                    },
                    compId: 103
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        skin: "game/casual_boss.png"
                    },
                    compId: 104
                } ]
            }, {
                type: "Box",
                props: {
                    y: 444,
                    x: 38,
                    width: 40,
                    visible: !1,
                    var: "BulletBox",
                    height: 300
                },
                compId: 105,
                child: [ {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        top: 0,
                        skin: "game/bullet_field.png",
                        sizeGrid: "49,12,52,11",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 106
                }, {
                    type: "List",
                    props: {
                        y: 10,
                        x: 0,
                        width: 40,
                        var: "BulletList",
                        spaceY: 10,
                        repeatY: 7,
                        height: 276
                    },
                    compId: 107,
                    child: [ {
                        type: "Box",
                        props: {
                            width: 40,
                            renderType: "render"
                        },
                        compId: 109,
                        child: [ {
                            type: "Image",
                            props: {
                                skin: "game/full_bullet.png",
                                scaleY: .5,
                                scaleX: .5,
                                name: "bulletImage",
                                centerY: 0,
                                centerX: 0,
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 108
                        } ]
                    } ]
                }, {
                    type: "Button",
                    props: {
                        y: -309,
                        x: 536,
                        var: "btnClose",
                        stateNum: 1,
                        skin: "fyhd/btn_fyhd_back.png",
                        name: "btnClose"
                    },
                    compId: 123
                } ]
            }],
            animations: [ {
                nodes: [ {
                    target: 89,
                    keyframes: {
                        x: [ {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "x",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "x",
                            index: 10
                        } ],
                        alpha: [ {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "alpha",
                            index: 0
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "alpha",
                            index: 10
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "alpha",
                            index: 18
                        } ]
                    }
                }, {
                    target: 87,
                    keyframes: {
                        y: [ {
                            value: -10,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 87,
                            key: "y",
                            index: 0
                        } ],
                        x: [ {
                            value: 19,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 87,
                            key: "x",
                            index: 0
                        } ],
                        anchorY: [ {
                            value: .5,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 87,
                            key: "anchorY",
                            index: 0
                        } ],
                        anchorX: [ {
                            value: .5,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 87,
                            key: "anchorX",
                            index: 0
                        } ]
                    }
                } ],
                name: "tipAni",
                id: 1,
                frameRate: 24,
                action: 0
            } ],
            loadList: [ "loading/logo.png", "game/coin_bg.png", "game/coin.png", "game/level_1.png", "game/level_2.png", "game/bossLevel.png", "game/gun_btn.png", "game/skin_btn.png", "game/sign_btn.png", "game/share_btn.png", "common/moreGame.png", "game/success.png", "game/hp.png", "game/casual_boss.png", "game/bullet_field.png", "game/full_bullet.png", "fyhd/btn_fyhd_back.png", "game/img_more.png" ],
            loadList3D: []
        }, e.GameViewUI = n, Bt("ui.GameViewUI", n);

       
        // console.log("gamevie", JSON.stringify(n.uiView))
        class i extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(i.uiView);
            }
        }
        i.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [ {
                type: "Box",
                props: {
                    top: 0,
                    runtime: "views/runtime/UIAdapter.ts",
                    right: 0,
                    name: "scale",
                    left: 0,
                    bottom: 0
                },
                compId: 3,
                child: [ {
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "loading/load_bg.jpg",
                        sizeGrid: "1309,0,0,0",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 4
                } ]
            }, {
                type: "Box",
                props: {
                    width: 407,
                    height: 40,
                    centerX: 0,
                    bottom: 147
                },
                compId: 9,
                child: [ {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 407,
                        skin: "loading/loading_progress_bg.png",
                        height: 40
                    },
                    compId: 15
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 407,
                        skin: "loading/loading_progress.png",
                        sizeGrid: "17,51,22,40",
                        height: 40
                    },
                    compId: 8,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 1,
                            x: 0,
                            width: 395,
                            var: "progressImageMask",
                            renderType: "mask",
                            height: 36
                        },
                        compId: 10
                    } ]
                }, {
                    type: "Label",
                    props: {
                        width: 410,
                        var: "loadingLabel",
                        valign: "middle",
                        text: "0%",
                        strokeColor: "#549FE4",
                        stroke: 4,
                        right: 0,
                        left: -3,
                        height: 40,
                        fontSize: 40,
                        color: "#FFFFFF",
                        bottom: -40,
                        align: "center"
                    },
                    compId: 11
                }, {
                    type: "Label",
                    props: {
                        y: -56,
                        x: 2.5,
                        width: 402,
                        valign: "middle",
                        text: "ĐANG TẢI GAME...",
                        strokeColor: "#549FE4",
                        stroke: 2,
                        height: 67,
                        fontSize: 30,
                        color: "#FFFFFF",
                        align: "center"
                    },
                    compId: 12
                } ]
            },  {
                type: "Image",
                props: {
                    y: 105,
                    skin: "loading/logo.png",
                    centerX: 0
                },
                compId: 14
            } ],
            loadList: [ "loading/load_bg.jpg", "loading/loading_progress_bg.png", "loading/loading_progress.png", "loading/logo.png" ],
            loadList3D: []
        }, e.LoadingViewUI = i, Bt("ui.LoadingViewUI", i);
        class a extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(a.uiView);
            }
        }
        a.uiView = {
            type: "View",
            props: {
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 2,
            child: [ {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .7
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    x: 0,
                    width: 600,
                    var: "centerBox",
                    height: 800,
                    centerY: -100,
                    centerX: 0
                },
                compId: 4,
                child: [ {
                    type: "Box",
                    props: {
                        top: 85,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        bgColor: "#F4EFD1"
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        skin: "common/dialog_top.png",
                        right: 0,
                        left: 0,
                        height: 90
                    },
                    compId: 6
                }, {
                    type: "Label",
                    props: {
                        y: 17,
                        wordWrap: !0,
                        width: 300,
                        var: "titleLabel",
                        valign: "middle",
                        text: "离线收益",
                        leading: 2,
                        height: 58,
                        fontSize: 45,
                        color: "#FFFFFF",
                        centerX: 0,
                        bold: !0,
                        align: "center"
                    },
                    compId: 7
                }, {
                    type: "Box",
                    props: {
                        width: 600,
                        top: 89,
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 11,
                    child: [ {
                        type: "Image",
                        props: {
                            var: "iconImage",
                            skin: "common/coin_box.png",
                            scaleY: .6,
                            scaleX: .6,
                            centerX: -140,
                            bottom: 120,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 12
                    }, {
                        type: "Label",
                        props: {
                            var: "tipLabel",
                            valign: "middle",
                            text: "+500金币",
                            stroke: 2,
                            fontSize: 50,
                            color: "#E7C111",
                            centerX: 80,
                            bottom: 155,
                            bold: !0,
                            align: "center"
                        },
                        compId: 13
                    }, {
                        type: "Button",
                        props: {
                            var: "receiveBtn",
                            stateNum: 1,
                            skin: "common/btn.png",
                            scaleY: .8,
                            scaleX: .8,
                            centerX: 0,
                            bottom: 15,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 14,
                        child: [ {
                            type: "Image",
                            props: {
                                var: "icon",
                                skin: "common/ic_vedio3.png",
                                left: 35,
                                centerY: -3
                            },
                            compId: 17
                        }, {
                            type: "Label",
                            props: {
                                text: "3倍领取",
                                strokeColor: "#000000",
                                stroke: 3,
                                fontSize: 50,
                                color: "#FFFFFF",
                                centerY: 0,
                                centerX: 35,
                                bold: !0
                            },
                            compId: 18
                        }, {
                            type: "Script",
                            props: {
                                playEvent: "mousedown",
                                runtime: "ui.ani.BtnScaleDownUI"
                            },
                            compId: 25
                        }, {
                            type: "Script",
                            props: {
                                playEvent: "mouseup",
                                runtime: "ui.ani.BtnScaleUpUI"
                            },
                            compId: 26
                        } ]
                    }, {
                        type: "Button",
                        props: {
                            y: 759,
                            x: 300,
                            width: 192.5,
                            var: "closeBtn1",
                            stateNum: 1,
                            skin: "common/btn1.png",
                            labelStrokeColor: "#000000",
                            labelStroke: 2,
                            labelSize: 25,
                            labelPadding: "0,0,5,0",
                            labelColors: "#FFFFFF",
                            labelBold: !0,
                            label: "普通领取",
                            height: 64.4,
                            centerX: 0,
                            bottom: -80,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 20,
                        child: [ {
                            type: "Script",
                            props: {
                                y: 0,
                                x: 0,
                                playEvent: "mousedown",
                                runtime: "ui.ani.BtnScaleDownUI"
                            },
                            compId: 28
                        }, {
                            type: "Script",
                            props: {
                                y: 0,
                                x: 0,
                                playEvent: "mouseup",
                                runtime: "ui.ani.BtnScaleUpUI"
                            },
                            compId: 29
                        } ]
                    }, {
                        type: "Label",
                        props: {
                            y: 0,
                            x: 0,
                            width: 120,
                            var: "closeBtn",
                            valign: "middle",
                            text: "普通领取",
                            strokeColor: "#000000",
                            stroke: 3,
                            height: 40,
                            fontSize: 25,
                            color: "#FFFFFF",
                            centerX: 0,
                            bottom: -62,
                            anchorY: .5,
                            anchorX: .5,
                            align: "center"
                        },
                        compId: 21
                    }, {
                        type: "DialogTuiBox",
                        props: {
                            var: "tuiBox",
                            top: 15,
                            name: "tuiBox",
                            centerX: 0,
                            runtime: "views/itemView/DialogTuiView.ts"
                        },
                        compId: 24
                    } ]
                } ]
            } ],
            loadList: [ "common/dialog_top.png", "common/coin_box.png", "common/btn.png", "common/ic_vedio3.png", "common/btn1.png" ],
            loadList3D: []
        }, e.OfflineViewUI = a, Bt("ui.OfflineViewUI", a);
        class s extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(s.uiView);
            }
        }
        s.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [ {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    top: 0,
                    right: 0,
                    name: "bg",
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .85
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    right: 0,
                    left: 0,
                    height: 832,
                    centerY: -22
                },
                compId: 4,
                child: [ {
                    type: "Box",
                    props: {
                        y: 265,
                        x: 375,
                        width: 530,
                        height: 530,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 5,
                    child: [ {
                        type: "Image",
                        props: {
                            y: -90,
                            skin: "skin/role_get_title.png",
                            scaleY: .8,
                            scaleX: .8,
                            centerX: 0
                        },
                        compId: 6
                    }, {
                        type: "Animation",
                        props: {
                            y: 265,
                            x: 265,
                            var: "bgAni",
                            source: "ani/Light.ani"
                        },
                        compId: 7
                    }, {
                        type: "Box",
                        props: {
                            width: 500,
                            var: "dinsBox",
                            height: 500,
                            centerY: 186,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 8,
                        child: [ {
                            type: "Script",
                            props: {
                                runtime: "views/runtime/RoleShowScript.ts"
                            },
                            compId: 53
                        } ]
                    }, {
                        type: "ProgressBar",
                        props: {
                            width: 560,
                            var: "roleProgress",
                            top: 510,
                            skin: "skin/progress.png",
                            sizeGrid: "35,50,35,50",
                            height: 80,
                            centerX: 0
                        },
                        compId: 26,
                        child: [ {
                            type: "Label",
                            props: {
                                var: "proValue",
                                text: "50%",
                                fontSize: 40,
                                color: "#FFFFFF",
                                centerY: 0,
                                centerX: 0,
                                bold: !0
                            },
                            compId: 27
                        } ]
                    }, {
                        type: "Button",
                        props: {
                            width: 270,
                            var: "btn",
                            top: 740,
                            stateNum: 1,
                            skin: "common/btn1.png",
                            height: 90,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 50,
                        child: [ {
                            type: "Label",
                            props: {
                                var: "btnLabel",
                                text: "立即使用",
                                strokeColor: "#5a27ba",
                                stroke: 6,
                                fontSize: 45,
                                color: "#FFFFFF",
                                centerY: 0,
                                centerX: 0,
                                bold: !0
                            },
                            compId: 52
                        } ]
                    } ]
                } ]
            }],
            loadList: [ "skin/role_get_title.png", "ani/Light.ani", "skin/progress.png", "common/btn.png", "common/ic_share3.png", "common/btn1.png" ],
            loadList3D: []
        }, e.RoleProgressViewUI = s, Bt("ui.RoleProgressViewUI", s);
        class o extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(o.uiView);
            }
        }
        o.uiView = {
            type: "View",
            props: {
                width: 750,
                visible: !1,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [ {
                type: "Box",
                props: {
                    visible: !0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .6
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    width: 750,
                    right: 0,
                    left: 0,
                    height: 573,
                    centerY: 0
                },
                compId: 4,
                child: [ {
                    type: "Image",
                    props: {
                        x: .5,
                        var: "resultImage",
                        top: -301,
                        skin: "game/success.png"
                    },
                    compId: 14
                }, {
                    type: "Box",
                    props: {
                        var: "successBox",
                        right: 0,
                        left: 0,
                        height: 500,
                        bottom: -227
                    },
                    compId: 15,
                    child: [ {
                        type: "Box",
                        props: {
                            y: 93,
                            x: 375,
                            width: 566,
                            var: "coinBox",
                            height: 187,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 32,
                        child: [ {
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "common/bg1.png",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 33
                        }, {
                            type: "Image",
                            props: {
                                skin: "common/kill_ic.png",
                                left: 50,
                                centerY: 0
                            },
                            compId: 34
                        }, {
                            type: "Label",
                            props: {
                                var: "killNumLabel",
                                text: "x7",
                                left: 160,
                                fontSize: 90,
                                color: "#feba22",
                                centerY: 0,
                                bold: !0
                            },
                            compId: 35
                        }, {
                            type: "Box",
                            props: {
                                width: 176,
                                right: 15,
                                height: 176,
                                centerY: 0
                            },
                            compId: 37,
                            child: [ {
                                type: "Animation",
                                props: {
                                    y: 88,
                                    x: 88,
                                    width: 176,
                                    var: "lightAni",
                                    source: "ani/Light1.ani",
                                    height: 176,
                                    autoPlay: !0
                                },
                                compId: 36
                            }, {
                                type: "Image",
                                props: {
                                    skin: "common/coin.png",
                                    scaleY: 1.5,
                                    scaleX: 1.5,
                                    centerY: 0,
                                    centerX: 0
                                },
                                compId: 38
                            } ]
                        }, {
                            type: "Label",
                            props: {
                                var: "addLabel",
                                text: "+100",
                                right: 170,
                                fontSize: 50,
                                color: "#FFFFFF",
                                centerY: 0,
                                bold: !0
                            },
                            compId: 39
                        } ]
                    }, {
                        type: "Box",
                        props: {
                            var: "btnBox",
                            top: 220,
                            right: 0,
                            left: 0,
                            height: 200
                        },
                        compId: 47,
                        child: [ {
                            type: "Button",
                            props: {
                                width: 330,
                                var: "videoBtn",
                                top: 0,
                                stateNum: 1,
                                skin: "common/btn.png",
                                height: 110,
                                centerX: 0,
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 5,
                            child: [ {
                                type: "Label",
                                props: {
                                    text: "TIỀN x 3",
                                    strokeColor: "#853C12",
                                    stroke: 4,
                                    fontSize: 40,
                                    color: "#FFFFFF",
                                    centerY: 0,
                                    centerX: 44
                                },
                                compId: 13
                            }, {
                                type: "Image",
                                props: {
                                    x: 47,
                                    skin: "common/ic_vedio3.png",
                                    centerY: 0
                                },
                                compId: 40
                            } ]
                        }, {
                            type: "Button",
                            props: {
                                width: 330,
                                var: "okBtn",
                                top: 0,
                                stateNum: 1,
                                skin: "common/btn.png",
                                height: 110,
                                centerX: 0,
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 41,
                            child: [ {
                                type: "Label",
                                props: {
                                    text: "NHẬN",
                                    strokeColor: "#853C12",
                                    stroke: 4,
                                    fontSize: 40,
                                    color: "#FFFFFF",
                                    centerY: 0,
                                    centerX: 0
                                },
                                compId: 42
                            } ]
                        }, {
                            type: "Box",
                            props: {
                                width: 265,
                                var: "checkBox",
                                top: 130,
                                height: 40,
                                centerX: 40
                            },
                            compId: 44,
                            child: [ {
                                type: "Image",
                                props: {
                                    width: 35,
                                    var: "checkBoxView",
                                    skin: "common/ic_uncheck.png",
                                    left: 0,
                                    height: 35,
                                    centerY: 0
                                },
                                compId: 45
                            }, {
                                type: "Label",
                                props: {
                                    valign: "middle",
                                    text: "TIỀN x 3",
                                    left: 50,
                                    fontSize: 30,
                                    color: "#FFFFFF",
                                    centerY: 0,
                                    align: "center"
                                },
                                compId: 46
                            } ]
                        } ]
                    } ]
                }, {
                    type: "Box",
                    props: {
                        width: 750,
                        var: "failBox",
                        left: 0,
                        height: 443,
                        bottom: -83
                    },
                    compId: 16,
                    child: [ {
                        type: "Button",
                        props: {
                            y: 122,
                            x: 386,
                            width: 339,
                            var: "skinLevelBtn",
                            stateNum: 1,
                            skin: "common/btn.png",
                            height: 100
                        },
                        compId: 23,
                        child: [ {
                            type: "Image",
                            props: {
                                x: 40,
                                skin: "common/ic_vedio3.png",
                                scaleY: .5,
                                scaleX: .5,
                                centerY: 0
                            },
                            compId: 24
                        }, {
                            type: "Label",
                            props: {
                                y: 30.5,
                                x: 107,
                                width: 148,
                                text: "BỎ LEVEL",
                                strokeColor: "#853C12",
                                stroke: 4,
                                height: 39,
                                fontSize: 35,
                                color: "#FFFFFF",
                                bold: !1
                            },
                            compId: 25
                        } ]
                    }, {
                        type: "Button",
                        props: {
                            y: 122.5,
                            x: 44,
                            var: "skinGoldBtn",
                            stateNum: 1,
                            skin: "common/btn1.png"
                        },
                        compId: 28,
                        child: [ {
                            type: "Image",
                            props: {
                                y: 24,
                                x: 24,
                                skin: "common/coin.png"
                            },
                            compId: 29
                        }, {
                            type: "Label",
                            props: {
                                y: 33,
                                x: 99,
                                width: 70,
                                text: "500",
                                strokeColor: "#853C12",
                                stroke: 4,
                                height: 41,
                                fontSize: 40,
                                color: "#FFFFFF",
                                bold: !0
                            },
                            compId: 30
                        },
                        {
                            type: "Label",
                            props: {
                                y: 37,
                                x: 187,
                                width: 77,
                                text: "BỎ QUA",
                                strokeColor: "#853C12",
                                stroke: 4,
                                height: 66,
                                fontSize: 33,
                                color: "#FFFFFF"
                            },
                            compId: 31
                        } ]
                    }, {
                        type: "Label",
                        props: {
                            y: 300,
                            x: 314,
                            width: 122,
                            var: "retryBtn",
                            text: "CHƠI LẠI",
                            stroke: 2,
                            height: 30,
                            fontSize: 30,
                            color: "#FFFFFF",
                            bold: !0
                        },
                        compId: 19
                    } ]
                }, 
                {
                    "x":30,
                    "type":"List",
                    "searchKey":"List,listView",
                    "props":{"width":633,"var":"listView","spaceY":10,"spaceX":10,"runtime":"","repeatY":2,"repeatX":3,"height":317,"centerY":-190,"centerX":0},
                    "nodeParent":4,
                    "label":"listView",
                    "isOpen":true,
                    "isDirectory":true,
                    "isAniNode":true,
                    "hasChild":true,
                    "compId":49,
                    "child":[
                        {
                            "x":45,
                            "type":"Box",
                            "searchKey":"Box,render",
                            "props":{"width":200,"renderType":"render","name":"render","height":150},
                            "nodeParent":49,
                            "label":"render",
                            "isOpen":true,
                            "isDirectory":true,
                            "isAniNode":false,
                            "hasChild":true,
                            "compId":50,
                            "child":[
                                {
                                    "x":60,
                                    "type":"Image",
                                    "searchKey":"Image,thumb",
                                    "props":{"top":0,"right":0,"name":"thumb","left":0,"bottom":0},
                                    "nodeParent":50,
                                    "label":"thumb",
                                    "isDirectory":false,
                                    "isAniNode":false,
                                    "hasChild":false,
                                    "compId":51,
                                    "child":[
                                        ]
                                }]
                        }]
                }
            
            
            
            
                ]
            }],
            loadList: [ "game/success.png", "common/bg1.png", "common/kill_ic.png", "ani/Light1.ani", "common/coin.png", "common/btn.png", "common/ic_vedio3.png", "common/ic_uncheck.png", "common/btn1.png" ],
            loadList3D: []
        }, e.SettlementViewUI = o, Bt("ui.SettlementViewUI", o);
       
        class r extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(r.uiView);
            }
        }
        r.uiView = {
            type: "View",
            props: {
                width: 750,
                visible: !1,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [ {
                type: "Image",
                props: {
                    top: 0,
                    skin: "skin/bg.png",
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    name: "topBox",
                    left: 0,
                    bottom: 650
                },
                compId: 24,
                child: [ {
                    type: "Box",
                    props: {
                        width: 500,
                        var: "dinsBox",
                        mouseEnabled: !1,
                        height: 500,
                        centerY: 233,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 25,
                    child: [ {
                        type: "Script",
                        props: {
                            runtime: "views/runtime/RoleShowScript.ts"
                        },
                        compId: 52
                    } ]
                } ]
            }, {
                type: "Box",
                props: {
                    right: 0,
                    name: "bottomBox",
                    left: 0,
                    height: 650,
                    bottom: 0
                },
                compId: 4,
                child: [ {
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "skin/bottom_bg.png",
                        sizeGrid: "40,40,40,40",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 7
                }, {
                    type: "List",
                    props: {
                        width: 710,
                        var: "list",
                        top: 30,
                        spaceY: 10,
                        spaceX: 10,
                        repeatY: 3,
                        repeatX: 3,
                        height: 420,
                        centerX: 0
                    },
                    compId: 8,
                    child: [ {
                        type: "Box",
                        props: {
                            width: 230,
                            renderType: "render",
                            name: "item",
                            height: 185
                        },
                        compId: 9,
                        child: [ {
                            type: "Image",
                            props: {
                                width: 212,
                                skin: "skin/item_bg.png",
                                height: 167,
                                centerY: 0,
                                centerX: 0
                            },
                            compId: 10
                        }, {
                            type: "Image",
                            props: {
                                width: 160,
                                name: "itemSkin",
                                height: 160,
                                centerY: 0,
                                centerX: 0
                            },
                            compId: 11
                        }, {
                            type: "Image",
                            props: {
                                skin: "skin/ic_hook.png",
                                right: 12,
                                name: "icHook",
                                bottom: 12
                            },
                            compId: 12
                        }, {
                            type: "Box",
                            props: {
                                width: 212,
                                name: "lockBox",
                                height: 167,
                                centerY: 0,
                                centerX: 0,
                                bgColor: "#000000",
                                alpha: .5
                            },
                            compId: 13,
                            child: [ {
                                type: "Image",
                                props: {
                                    top: 0,
                                    skin: "skin/item_bg1.png",
                                    right: 0,
                                    renderType: "mask",
                                    left: 0,
                                    bottom: 0
                                },
                                compId: 14
                            } ]
                        }, {
                            type: "Image",
                            props: {
                                skin: "skin/ic_lock.png",
                                right: 15,
                                name: "icLock",
                                bottom: 15
                            },
                            compId: 15
                        }, {
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "skin/item_selected.png",
                                sizeGrid: "65,65,65,65",
                                right: 0,
                                name: "itemSelected",
                                left: 0,
                                bottom: 0
                            },
                            compId: 16
                        } ]
                    } ]
                }, {
                    type: "Box",
                    props: {
                        right: 0,
                        left: 0,
                        height: 128,
                        bottom: 40
                    },
                    compId: 17,
                    child: [ {
                        type: "Box",
                        props: {
                            width: 323,
                            var: "unlockBtn",
                            left: 50,
                            height: 90,
                            centerY: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 18,
                        child: [ {
                            type: "Script",
                            props: {
                                playEvent: "mousedown",
                                runtime: "ui.ani.BtnScaleDownUI"
                            },
                            compId: 19
                        }, {
                            type: "Script",
                            props: {
                                playEvent: "mouseup",
                                runtime: "ui.ani.BtnScaleUpUI"
                            },
                            compId: 20
                        }, {
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "common/btn1.png",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 21
                        }, {
                            type: "Image",
                            props: {
                                width: 50,
                                skin: "common/coin.png",
                                height: 51,
                                centerY: 0,
                                centerX: -110
                            },
                            compId: 22
                        }, {
                            type: "Label",
                            props: {
                                valign: "middle",
                                text: "",
                                strokeColor: "#5a27ba",
                                stroke: 6,
                                fontSize: 30,
                                color: "#FFFFFF",
                                centerY: 1,
                                centerX: 95,
                                align: "center"
                            },
                            compId: 23
                        }, {
                            type: "Label",
                            props: {
                                x: 109,
                                width: 135,
                                var: "nulockCoin",
                                valign: "middle",
                                text: "5000",
                                strokeColor: "#5a27ba",
                                stroke: 8,
                                height: 48,
                                fontSize: 45,
                                color: "#FFFFFF",
                                centerY: 1,
                                align: "center"
                            },
                            compId: 26
                        } ]
                    }, {
                        type: "Box",
                        props: {
                            width: 220,
                            var: "tryBtn",
                            right: 50,
                            height: 90,
                            centerY: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 27,
                        child: [ {
                            type: "Script",
                            props: {
                                y: 0,
                                x: 0,
                                playEvent: "mousedown",
                                runtime: "ui.ani.BtnScaleDownUI"
                            },
                            compId: 28
                        }, {
                            type: "Script",
                            props: {
                                y: 0,
                                x: 0,
                                playEvent: "mouseup",
                                runtime: "ui.ani.BtnScaleUpUI"
                            },
                            compId: 29
                        }, {
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "common/btn.png",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 30
                        }, {
                            type: "Image",
                            props: {
                                y: 45,
                                x: 58,
                                skin: "common/ic_vedio3.png",
                                scaleY: .8,
                                scaleX: .8,
                                centerY: 0,
                                centerX: -52,
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 31
                        }, {
                            type: "Label",
                            props: {
                                valign: "middle",
                                text: "THỬ",
                                strokeColor: "#854428",
                                stroke: 6,
                                fontSize: 40,
                                color: "#FFFFFF",
                                centerY: 0,
                                centerX: 35,
                                bold: !0,
                                align: "center"
                            },
                            compId: 32
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            width: 268.5,
                            var: "centerBtn",
                            skin: "common/btn.png",
                            height: 90,
                            centerY: 0,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 33,
                        child: [ {
                            type: "Script",
                            props: {
                                y: 0,
                                x: 0,
                                playEvent: "mousedown",
                                runtime: "ui.ani.BtnScaleDownUI"
                            },
                            compId: 34
                        }, {
                            type: "Script",
                            props: {
                                y: 0,
                                x: 0,
                                playEvent: "mouseup",
                                runtime: "ui.ani.BtnScaleUpUI"
                            },
                            compId: 35
                        }, {
                            type: "Label",
                            props: {
                                var: "centerBtnLabel",
                                valign: "middle",
                                text: "使用皮肤",
                                strokeColor: "#854428",
                                stroke: 6,
                                fontSize: 40,
                                color: "#FFFFFF",
                                centerY: 0,
                                centerX: 0,
                                bold: !0,
                                align: "center"
                            },
                            compId: 36
                        } ]
                    }, {
                        type: "Label",
                        props: {
                            var: "gradeCondition",
                            valign: "middle",
                            text: "解锁关卡10",
                            left: 50,
                            fontSize: 35,
                            color: "#FFFFFF",
                            centerY: 0,
                            align: "center"
                        },
                        compId: 37
                    }, {
                        type: "Box",
                        props: {
                            width: 350,
                            var: "progressCondition",
                            left: 50,
                            height: 70,
                            centerY: 0
                        },
                        compId: 38,
                        child: [ {
                            type: "Label",
                            props: {
                                var: "proTitle",
                                valign: "middle",
                                top: 0,
                                text: "试玩看视频5次",
                                strokeColor: "#000000",
                                stroke: 2,
                                left: 0,
                                fontSize: 30,
                                color: "#FFFFFF",
                                align: "center"
                            },
                            compId: 39
                        }, {
                            type: "ProgressBar",
                            props: {
                                var: "progress",
                                skin: "loading/loading_progress_bg.png",
                                sizeGrid: "0,30,0,30",
                                right: 0,
                                left: 0,
                                height: 27,
                                bottom: 0
                            },
                            compId: 40,
                            child: [ {
                                type: "Label",
                                props: {
                                    var: "proValue",
                                    valign: "middle",
                                    text: "100",
                                    strokeColor: "#000000",
                                    stroke: 3,
                                    height: 20,
                                    fontSize: 20,
                                    color: "#FFFFFF",
                                    centerY: 0,
                                    centerX: 0,
                                    align: "center"
                                },
                                compId: 41
                            } ]
                        } ]
                    } ]
                }, {
                    type: "Box",
                    props: {
                        y: -123,
                        var: "attrBox",
                        scaleY: .6,
                        scaleX: .6,
                        right: 0,
                        left: 0,
                        height: 190
                    },
                    compId: 42,
                    child: [ {
                        type: "Image",
                        props: {
                            width: 300,
                            top: 0,
                            skin: "skin/bg_skin_info.png",
                            sizeGrid: "25,75,25,75",
                            height: 90
                        },
                        compId: 43,
                        child: [ {
                            type: "Label",
                            props: {
                                text: "伤害:",
                                left: 10,
                                fontSize: 50,
                                color: "#FFFFFF",
                                centerY: 0,
                                bold: !0
                            },
                            compId: 44
                        }, {
                            type: "Label",
                            props: {
                                var: "damage",
                                text: "10",
                                right: 50,
                                fontSize: 50,
                                color: "#FFFFFF",
                                centerY: 0,
                                bold: !0
                            },
                            compId: 45
                        }, {
                            type: "Image",
                            props: {
                                x: 314,
                                var: "bulletsView",
                                top: 0,
                                skin: "game/level_2.png",
                                scaleY: .75,
                                scaleX: .75,
                                right: 0,
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 49,
                            child: [ {
                                type: "Label",
                                props: {
                                    var: "bullets",
                                    text: "x8",
                                    fontSize: 38,
                                    color: "#FFFFFF",
                                    centerY: 0,
                                    centerX: 0,
                                    bold: !0
                                },
                                compId: 50
                            } ]
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            x: 0,
                            width: 300,
                            skin: "skin/bg_skin_info.png",
                            sizeGrid: "25,75,25,75",
                            height: 90,
                            bottom: 0
                        },
                        compId: 46,
                        child: [ {
                            type: "Label",
                            props: {
                                text: "弹夹:",
                                left: 10,
                                fontSize: 50,
                                color: "#FFFFFF",
                                centerY: 0,
                                bold: !0
                            },
                            compId: 47
                        }, {
                            type: "Label",
                            props: {
                                var: "magazine",
                                text: "10",
                                right: 50,
                                fontSize: 50,
                                color: "#FFFFFF",
                                centerY: 0,
                                bold: !0
                            },
                            compId: 48
                        } ]
                    } ]
                } ]
            }, {
                type: "Box",
                props: {
                    top: 100,
                    name: "headBox",
                    left: 5
                },
                compId: 5,
                child: [ {
                    type: "Image",
                    props: {
                        var: "closeBtn",
                        top: 40,
                        skin: "skin/btn_back.png",
                        left: 20
                    },
                    compId: 6
                } ]
            } ],
            loadList: [ "skin/bg.png", "skin/bottom_bg.png", "skin/item_bg.png", "skin/ic_hook.png", "skin/item_bg1.png", "skin/ic_lock.png", "skin/item_selected.png", "common/btn1.png", "common/coin.png", "common/btn.png", "common/ic_vedio3.png", "loading/loading_progress_bg.png", "skin/bg_skin_info.png", "game/level_2.png", "skin/btn_back.png" ],
            loadList3D: []
        }, e.SkinViewUI = r, Bt("ui.SkinViewUI", r);
        class l extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(l.uiView);
            }
        }
        l.uiView = {
            type: "View",
            props: {
                width: 750,
                visible: !1,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [ {
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    name: "bg",
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .85
                },
                compId: 4
            }, {
                type: "Box",
                props: {
                    right: 0,
                    left: 0,
                    height: 832,
                    centerY: -74
                },
                compId: 5,
                child: [ {
                    type: "Box",
                    props: {
                        y: 271,
                        width: 530,
                        height: 530,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 6,
                    child: [ {
                        type: "Image",
                        props: {
                            y: -150,
                            skin: "skin/ic_free_try.png",
                            centerX: 0
                        },
                        compId: 7
                    }, {
                        type: "Animation",
                        props: {
                            y: 264,
                            x: 265,
                            var: "bgAni",
                            source: "ani/Light.ani"
                        },
                        compId: 8
                    }, {
                        type: "Box",
                        props: {
                            width: 500,
                            var: "dinsBox",
                            mouseEnabled: !1,
                            height: 500,
                            centerY: 187,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 9,
                        child: [ {
                            type: "Script",
                            props: {
                                runtime: "views/runtime/RoleShowScript.ts"
                            },
                            compId: 34
                        } ]
                    }, {
                        type: "Box",
                        props: {
                            var: "attrBox",
                            right: 20,
                            left: 20,
                            height: 80,
                            bottom: -10
                        },
                        compId: 10,
                        child: [ {
                            type: "Box",
                            props: {
                                width: 250,
                                left: 0,
                                height: 80
                            },
                            compId: 11,
                            child: [ {
                                type: "Label",
                                props: {
                                    y: 0,
                                    x: 0,
                                    text: "伤害:",
                                    left: 10,
                                    fontSize: 45,
                                    color: "#FFFFFF",
                                    centerY: 0,
                                    bold: !0
                                },
                                compId: 14
                            }, {
                                type: "Label",
                                props: {
                                    y: 0,
                                    var: "damage",
                                    text: "10",
                                    right: 45,
                                    fontSize: 45,
                                    color: "#FFFFFF",
                                    centerY: 0,
                                    bold: !0
                                },
                                compId: 15
                            }, {
                                type: "Image",
                                props: {
                                    x: 0,
                                    var: "bulletsView",
                                    skin: "game/level_2.png",
                                    scaleY: .6,
                                    scaleX: .6,
                                    right: 0,
                                    centerY: -20
                                },
                                compId: 16,
                                child: [ {
                                    type: "Label",
                                    props: {
                                        var: "bullets",
                                        text: "x8",
                                        fontSize: 38,
                                        color: "#FFFFFF",
                                        centerY: 0,
                                        centerX: 0,
                                        bold: !0
                                    },
                                    compId: 17
                                } ]
                            } ]
                        }, {
                            type: "Box",
                            props: {
                                width: 200,
                                right: 0,
                                height: 80
                            },
                            compId: 12,
                            child: [ {
                                type: "Label",
                                props: {
                                    y: 0,
                                    x: 0,
                                    text: "弹夹:",
                                    left: 10,
                                    fontSize: 45,
                                    color: "#FFFFFF",
                                    centerY: 0,
                                    bold: !0
                                },
                                compId: 22
                            }, {
                                type: "Label",
                                props: {
                                    y: 0,
                                    var: "magazine",
                                    text: "10",
                                    right: 0,
                                    fontSize: 45,
                                    color: "#FFFFFF",
                                    centerY: 0,
                                    bold: !0
                                },
                                compId: 23
                            } ]
                        } ]
                    },  {
                        type: "Button",
                        props: {
                            width: 360,
                            var: "btn",
                            top: 600,
                            stateNum: 1,
                            skin: "common/btn.png",
                            scaleY: 1,
                            scaleX: 1,
                            height: 120,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 29,
                        child: [ {
                            type: "Label",
                            props: {
                                text: "THỬ",
                                strokeColor: "#854428",
                                stroke: 6,
                                fontSize: 50,
                                color: "#FFFFFF",
                                centerY: 0,
                                centerX: 36,
                                bold: !0
                            },
                            compId: 31
                        } ,
                        {
                            "type":"Image",
                            "searchKey":"Image",
                            "props":{"y":0,"x":70,"skin":"common/ic_vedio3.png","centerY":0},
                            "nodeParent":29,
                            "label":"Image",
                            "isDirectory":false,
                            "isAniNode":true,
                            "hasChild":false,
                            "compId":38,
                            "child":[
                                ]
                        }
                    ]
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 295,
                        var: "closeBtn",
                        top: 730,
                        height: 99,
                        centerX: 0
                    },
                    compId: 32,
                    child: [ {
                        type: "Label",
                        props: {
                            text: "BỎ QUA",
                            strokeColor: "#5a27ba",
                            stroke: 6,
                            fontSize: 40,
                            color: "#FFFFFF",
                            centerY: 0,
                            centerX: 0,
                            bold: !0
                        },
                        compId: 33
                    } ]
                } ]
            }],
            animations: [ {
                nodes: [ {
                    target: 29,
                    keyframes: {
                        scaleY: [ {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 3
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 6
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 9
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 12
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleY",
                            index: 25
                        } ],
                        scaleX: [ {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 3
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 6
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 9
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 12
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 29,
                            key: "scaleX",
                            index: 25
                        } ]
                    }
                } ],
                name: "heartAni",
                id: 1,
                frameRate: 24,
                action: 0
            } ],
            loadList: [ "skin/ic_free_try.png", "ani/Light.ani", "game/level_2.png", "common/ic_uncheck.png", "common/btn.png", "common/ic_vedio3.png" ],
            loadList3D: []
        }, e.TryViewUI = l, Bt("ui.TryViewUI", l);
    }(yt || (yt = {})), function(e) {
        !function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(t.uiView);
                }
            }
            t.uiView = {
                type: "View",
                props: {
                    width: 720,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1280,
                    bottom: 0
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        bgColor: "#281944"
                    },
                    compId: 31
                }, {
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        top: 100,
                        right: 0,
                        left: 0,
                        bottom: 30
                    },
                    compId: 4,
                    child: [ {
                        type: "Box",
                        props: {
                            top: 0,
                            right: 0,
                            name: "top",
                            left: 0,
                            height: 65
                        },
                        compId: 5,
                        child: [ {
                            type: "Image",
                            props: {
                                var: "backBtn",
                                skin: "fyhd/ic_back.png",
                                left: 25,
                                centerY: 0
                            },
                            compId: 7
                        } ]
                    }, {
                        type: "Box",
                        props: {
                            width: 690,
                            top: 130,
                            height: 180,
                            centerX: 0
                        },
                        compId: 15,
                        child: [ {
                            type: "Image",
                            props: {
                                y: -50,
                                x: 0,
                                top: 0,
                                skin: "fyhd/img_fyhd_bg.png",
                                sizeGrid: "25,25,25,25",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 16
                        }, {
                            type: "Image",
                            props: {
                                top: -60,
                                skin: "fyhd/img_fyhd_friend_title.png",
                                centerX: 0
                            },
                            compId: 32
                        }, {
                            type: "Box",
                            props: {
                                var: "tuiBox",
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 36,
                            child: [ {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 160,
                                    left: 10,
                                    height: 160,
                                    centerY: 0
                                },
                                compId: 37
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    width: 160,
                                    left: 180,
                                    height: 160,
                                    centerY: 0
                                },
                                compId: 38
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    width: 160,
                                    left: 350,
                                    height: 160,
                                    centerY: 0
                                },
                                compId: 39
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    width: 160,
                                    left: 520,
                                    height: 160,
                                    centerY: 0
                                },
                                compId: 41
                            } ]
                        } ]
                    }, {
                        type: "Box",
                        props: {
                            top: 395,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 27,
                        child: [ {
                            type: "List",
                            props: {
                                width: 670,
                                var: "tuiList",
                                top: 0,
                                spaceY: 10,
                                spaceX: 5,
                                runtime: "views/itemView/AutoScorllView.ts",
                                repeatX: 3,
                                centerX: 0,
                                bottom: 0
                            },
                            compId: 8,
                            child: [ {
                                type: "Box",
                                props: {
                                    width: 220,
                                    renderType: "render",
                                    name: "item",
                                    height: 270
                                },
                                compId: 9,
                                child: [ {
                                    type: "Image",
                                    props: {
                                        top: 0,
                                        skin: "fyhd/img_fyhd_bg.png",
                                        sizeGrid: "25,25,25,25",
                                        right: 0,
                                        name: "bg",
                                        left: 0,
                                        bottom: 0
                                    },
                                    compId: 10
                                }, {
                                    type: "Image",
                                    props: {
                                        x: 0,
                                        width: 200,
                                        top: 10,
                                        name: "img",
                                        height: 200,
                                        centerX: 0
                                    },
                                    compId: 12
                                }, {
                                    type: "Image",
                                    props: {
                                        x: 0,
                                        width: 200,
                                        skin: "fyhd/name_bg_0.png",
                                        name: "nameBg",
                                        height: 45,
                                        centerX: 0,
                                        bottom: 8
                                    },
                                    compId: 34,
                                    child: [ {
                                        type: "Label",
                                        props: {
                                            width: 200,
                                            valign: "middle",
                                            overflow: "hidden",
                                            name: "name",
                                            height: 45,
                                            fontSize: 30,
                                            color: "#FFFFFF",
                                            centerY: 0,
                                            centerX: 0,
                                            align: "center"
                                        },
                                        compId: 35
                                    } ]
                                } ]
                            } ]
                        }, {
                            type: "Image",
                            props: {
                                top: -60,
                                skin: "fyhd/img_fyhd_hot_title.png",
                                centerX: 0
                            },
                            compId: 33
                        } ]
                    } ]
                } ],
                loadList: [ "fyhd/ic_back.png", "fyhd/img_fyhd_bg.png", "fyhd/img_fyhd_friend_title.png", "fyhd/name_bg_0.png", "fyhd/img_fyhd_hot_title.png" ],
                loadList3D: []
            }, e.FyhdTuiView2UI = t, Bt("ui.fyhd.FyhdTuiView2UI", t);
        }(e.fyhd || (e.fyhd = {}));
    }(yt || (yt = {})), function(e) {
        !function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(t.uiView);
                }
            }
            t.uiView = {
                type: "View",
                props: {
                    width: 570,
                    runtime: "views/itemView/DialogTuiView.ts",
                    height: 440
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: .5
                    },
                    compId: 9,
                    child: [ {
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "item/round_bg.png",
                            sizeGrid: "15,15,15,15",
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 10
                    } ]
                }, {
                    type: "List",
                    props: {
                        y: 0,
                        x: 0,
                        width: 550,
                        var: "listView",
                        top: 10,
                        spaceY: 20,
                        spaceX: 20,
                        runtime: "views/itemView/AutoScorllView.ts",
                        repeatX: 3,
                        centerX: 0,
                        bottom: 10
                    },
                    compId: 3,
                    child: [ {
                        type: "Box",
                        props: {
                            width: 170,
                            renderType: "render",
                            name: "item",
                            height: 200
                        },
                        compId: 5,
                        child: [ {
                            type: "Image",
                            props: {
                                width: 170,
                                name: "itemImg",
                                height: 170,
                                centerX: 0
                            },
                            compId: 6
                        }, {
                            type: "Label",
                            props: {
                                width: 170,
                                valign: "middle",
                                overflow: "hidden",
                                name: "itemName",
                                height: 30,
                                fontSize: 26,
                                color: "#FFFFFF",
                                centerX: 0,
                                bottom: 0,
                                align: "center"
                            },
                            compId: 7
                        } ]
                    } ]
                } ],
                loadList: [ "item/round_bg.png" ],
                loadList3D: []
            }, e.DialogTuiBoxUI = t, Bt("ui.itemView.DialogTuiBoxUI", t);
            class n extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(n.uiView);
                }
            }
            n.uiView = {
                type: "View",
                props: {
                    width: 100,
                    runtime: "views/itemView/ScrollTuiItem.ts",
                    height: 119
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        top: 0,
                        skin: "item/img_bg.png",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 3,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 47,
                            width: 90,
                            var: "iconImage",
                            height: 90,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 4
                    }, {
                        type: "Label",
                        props: {
                            width: 95,
                            var: "titleLabel",
                            valign: "middle",
                            height: 24,
                            fontSize: 16,
                            color: "#000000",
                            centerX: 0,
                            bottom: 0,
                            bold: !1,
                            align: "center"
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            width: 25,
                            var: "red_point",
                            top: -8,
                            skin: "item/exclamation_point.png",
                            right: -8,
                            height: 25
                        },
                        compId: 6
                    } ]
                } ],
                loadList: [ "item/img_bg.png", "item/exclamation_point.png" ],
                loadList3D: []
            }, e.ScrollTuiItemUI = n, Bt("ui.itemView.ScrollTuiItemUI", n);
            class i extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(i.uiView);
                }
            }
            i.uiView = {
                type: "View",
                props: {
                    width: 720,
                    runtime: "views/itemView/ScrollTuiView.ts",
                    height: 160
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: .5
                    },
                    compId: 3,
                    child: [ {
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "item/round_bg.png",
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 4
                    } ]
                }, {
                    type: "Box",
                    props: {
                        var: "containerBox",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 5
                } ],
                loadList: [ "item/round_bg.png" ],
                loadList3D: []
            }, e.ScrollTuiViewUI = i, Bt("ui.itemView.ScrollTuiViewUI", i);
            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(a.uiView);
                }
            }
            a.uiView = {
                type: "View",
                props: {
                    width: 96,
                    runtime: "views/itemView/TuiBtn.ts",
                    height: 116
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "item/img_bg.png",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 3,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 47,
                            width: 90,
                            var: "iconImage",
                            height: 90,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 4
                    }, {
                        type: "Label",
                        props: {
                            width: 95,
                            var: "titleLabel",
                            valign: "middle",
                            height: 24,
                            fontSize: 16,
                            color: "#000000",
                            centerX: 0,
                            bottom: 0,
                            bold: !1,
                            align: "center"
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            width: 25,
                            var: "red_point",
                            top: -8,
                            skin: "item/exclamation_point.png",
                            right: -8,
                            height: 25
                        },
                        compId: 7
                    } ]
                } ],
                animations: [ {
                    nodes: [ {
                        target: 3,
                        keyframes: {
                            x: [ {
                                value: 48,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "x",
                                index: 0
                            } ],
                            rotation: [ {
                                value: 30,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 0
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 5
                            }, {
                                value: -20,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 10
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 15
                            }, {
                                value: 10,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 18
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 21
                            }, {
                                value: -10,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 24
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 27
                            } ]
                        }
                    } ],
                    name: "tuiAni",
                    id: 1,
                    frameRate: 24,
                    action: 0
                } ],
                loadList: [ "item/img_bg.png", "item/exclamation_point.png" ],
                loadList3D: []
            }, e.TuiBtnUI = a, Bt("ui.itemView.TuiBtnUI", a);
        }(e.itemView || (e.itemView = {}));
    }(yt || (yt = {})), function(e) {
        !function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(t.uiView);
                }
            }
            t.uiView = {
                type: "View",
                props: {
                    width: 720,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1280,
                    bottom: 0
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        bgColor: "#000000",
                        alpha: .8
                    },
                    compId: 3
                }, {
                    type: "Box",
                    props: {
                        top: 100,
                        right: 0,
                        left: 0,
                        bottom: 30
                    },
                    compId: 4,
                    child: [ {
                        type: "Image",
                        props: {
                            visible: !1,
                            var: "btnClose",
                            skin: "matrix/btn_matrix_back.png",
                            name: "btnClose",
                            left: 30
                        },
                        compId: 11
                    }, {
                        type: "Box",
                        props: {
                            var: "boxFriend",
                            top: 32,
                            right: 0,
                            left: 5
                        },
                        compId: 13,
                        child: [ {
                            type: "Image",
                            props: {
                                var: "imageFriend",
                                top: 0,
                                skin: "matrix/img_matrix_riend.png",
                                name: "imageFriend",
                                centerX: 0
                            },
                            compId: 12
                        }, {
                            type: "Box",
                            props: {
                                width: 700,
                                var: "boxFriendItem",
                                top: 60,
                                name: "boxFriendItem",
                                height: 176,
                                centerX: 0
                            },
                            compId: 16,
                            child: [ {
                                type: "Image",
                                props: {
                                    var: "imageBg",
                                    top: 0,
                                    skin: "matrix/img_matrix_bg.png",
                                    sizeGrid: "25,25,25,25",
                                    right: 0,
                                    name: "imageBg",
                                    left: 0,
                                    bottom: 0
                                },
                                compId: 17
                            }, {
                                type: "List",
                                props: {
                                    width: 680,
                                    var: "friendList",
                                    spaceY: 0,
                                    spaceX: 5,
                                    runtime: "views/itemView/AutoScorllView.ts",
                                    repeatY: 1,
                                    height: 156,
                                    centerY: 0,
                                    centerX: 0
                                },
                                compId: 14,
                                child: [ {
                                    type: "Box",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 126,
                                        renderType: "render",
                                        height: 150
                                    },
                                    compId: 43,
                                    child: [ {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            width: 120,
                                            var: "imageGif",
                                            runtime: "views/item/GifImageView.ts",
                                            name: "imageGif",
                                            height: 120,
                                            centerX: 0
                                        },
                                        compId: 15
                                    }, {
                                        type: "Label",
                                        props: {
                                            width: 126,
                                            valign: "middle",
                                            overflow: "hidden",
                                            name: "labName",
                                            height: 36,
                                            fontSize: 25,
                                            color: "#000000",
                                            centerY: 62,
                                            centerX: 0,
                                            align: "center"
                                        },
                                        compId: 42
                                    } ]
                                } ]
                            } ]
                        } ]
                    }, {
                        type: "Box",
                        props: {
                            var: "boxHot",
                            top: 288,
                            right: 0,
                            name: "boxHot",
                            left: 5,
                            bottom: 0
                        },
                        compId: 18,
                        child: [ {
                            type: "Image",
                            props: {
                                var: "imageHot",
                                top: 0,
                                skin: "matrix/img_matrix_hot_tui.png",
                                name: "imageHot",
                                centerX: 0
                            },
                            compId: 19
                        }, {
                            type: "List",
                            props: {
                                width: 685,
                                var: "hotList",
                                top: 60,
                                spaceY: 5,
                                spaceX: 5,
                                runtime: "views/itemView/AutoScorllView.ts",
                                repeatX: 3,
                                height: 790,
                                centerX: 0,
                                bottom: 0
                            },
                            compId: 22,
                            child: [ {
                                type: "Box",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 225,
                                    var: "boxHotItem",
                                    renderType: "render",
                                    name: "boxHotItem",
                                    height: 275
                                },
                                compId: 24,
                                child: [ {
                                    type: "Image",
                                    props: {
                                        top: 0,
                                        skin: "matrix/img_matrix_bg.png",
                                        sizeGrid: "25,25,25,25",
                                        right: 0,
                                        name: "imageBg",
                                        left: 0,
                                        bottom: 0
                                    },
                                    compId: 23
                                }, {
                                    type: "Image",
                                    props: {
                                        width: 190,
                                        var: "imageIcon",
                                        top: 10,
                                        runtime: "views/item/GifImageView.ts",
                                        name: "imageIcon",
                                        height: 190,
                                        centerX: 0
                                    },
                                    compId: 25
                                }, {
                                    type: "Image",
                                    props: {
                                        width: 190,
                                        var: "imageNameBg",
                                        skin: "matrix/img_matrix_name_bg_1.png",
                                        sizeGrid: "5,30,20,30",
                                        name: "imageNameBg",
                                        height: 45,
                                        centerX: 0,
                                        bottom: 10
                                    },
                                    compId: 26,
                                    child: [ {
                                        type: "Label",
                                        props: {
                                            width: 190,
                                            var: "labName",
                                            valign: "middle",
                                            overflow: "hidden",
                                            name: "labName",
                                            height: 45,
                                            fontSize: 30,
                                            color: "#FFFFFF",
                                            centerY: 0,
                                            centerX: 0,
                                            align: "center"
                                        },
                                        compId: 27
                                    } ]
                                } ]
                            } ]
                        } ]
                    }, {
                        type: "Box",
                        props: {
                            width: 720,
                            var: "boxBottom",
                            right: 0,
                            name: "boxBottom",
                            left: 0,
                            height: 130,
                            bottom: 257
                        },
                        compId: 40,
                        child: [ {
                            type: "Button",
                            props: {
                                y: 65,
                                x: 439,
                                width: 164,
                                visible: !1,
                                var: "btnHome",
                                stateNum: 1,
                                skin: "matrix/btn_matrix_back1.png",
                                pivotY: 65,
                                pivotX: 155,
                                name: "btnHome",
                                height: 130
                            },
                            compId: 36,
                            child: [ {
                                type: "Label",
                                props: {
                                    valign: "middle",
                                    text: "主界面",
                                    strokeColor: "#000000",
                                    stroke: 3,
                                    name: "labHome",
                                    fontSize: 40,
                                    color: "#FFFFFF",
                                    centerY: 36,
                                    centerX: 0,
                                    bold: !0,
                                    align: "center"
                                },
                                compId: 37
                            }, {
                                type: "Image",
                                props: {
                                    y: 4,
                                    x: 45,
                                    skin: "matrix/img_matrix_home.png",
                                    name: "imageHome"
                                },
                                compId: 41
                            }, {
                                type: "Script",
                                props: {
                                    y: 0,
                                    x: 0,
                                    playEvent: "mousedown",
                                    runtime: "ui.ani.BtnScaleDownUI"
                                },
                                compId: 38
                            }, {
                                type: "Script",
                                props: {
                                    y: 0,
                                    x: 0,
                                    playEvent: "mouseup",
                                    runtime: "ui.ani.BtnScaleUpUI"
                                },
                                compId: 39
                            } ]
                        }, {
                            type: "Button",
                            props: {
                                y: 74,
                                x: 360,
                                width: 364,
                                visible: !0,
                                var: "btnContinue",
                                stateNum: 1,
                                skin: "matrix/btn_matrix_continue.png",
                                name: "btnContinue",
                                height: 130,
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 32,
                            child: [ {
                                type: "Label",
                                props: {
                                    var: "cancelLabel",
                                    valign: "middle",
                                    text: "继续游戏",
                                    strokeColor: "#C7710D",
                                    stroke: 10,
                                    name: "labContinue",
                                    fontSize: 55,
                                    color: "#FFFFFF",
                                    centerY: 0,
                                    centerX: 0,
                                    bold: !0,
                                    align: "center"
                                },
                                compId: 33
                            }, {
                                type: "Script",
                                props: {
                                    y: 0,
                                    x: 0,
                                    playEvent: "mousedown",
                                    runtime: "ui.ani.BtnScaleDownUI"
                                },
                                compId: 34
                            }, {
                                type: "Script",
                                props: {
                                    y: 0,
                                    x: 0,
                                    playEvent: "mouseup",
                                    runtime: "ui.ani.BtnScaleUpUI"
                                },
                                compId: 35
                            } ]
                        } ]
                    } ]
                } ],
                loadList: [ "matrix/btn_matrix_back.png", "matrix/img_matrix_riend.png", "matrix/img_matrix_bg.png", "matrix/img_matrix_hot_tui.png", "matrix/img_matrix_name_bg_1.png", "matrix/btn_matrix_back1.png", "matrix/img_matrix_home.png", "matrix/btn_matrix_continue.png" ],
                loadList3D: []
            }, e.MatrixTuiView1UI = t, Bt("ui.matrix.MatrixTuiView1UI", t);
            class n extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(n.uiView);
                }
            }
            n.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        bgColor: "#F1F1F1"
                    },
                    compId: 3,
                    child: [ {
                        type: "Box",
                        props: {
                            width: 750,
                            top: 10,
                            runtime: "views/runtime/UIAdapter.ts",
                            left: 0,
                            bottom: 0
                        },
                        compId: 4,
                        child: [ {
                            type: "Box",
                            props: {
                                y: 0,
                                width: 750,
                                left: 0,
                                height: 88
                            },
                            compId: 5,
                            child: [ {
                                type: "Label",
                                props: {
                                    text: "小程序",
                                    fontSize: 45,
                                    color: "#000000",
                                    centerY: 0,
                                    centerX: 0,
                                    bold: !0
                                },
                                compId: 7
                            }, {
                                type: "Box",
                                props: {
                                    width: 100,
                                    visible: !1,
                                    var: "closeBtn",
                                    top: 0,
                                    bottom: 0
                                },
                                compId: 19,
                                child: [ {
                                    type: "Image",
                                    props: {
                                        y: 17,
                                        x: 39,
                                        skin: "matrix/img_matrix_back.png"
                                    },
                                    compId: 6
                                } ]
                            } ]
                        }, {
                            type: "List",
                            props: {
                                x: 0,
                                width: 750,
                                var: "listView",
                                top: 160,
                                bottom: 0
                            },
                            compId: 10,
                            child: [ {
                                type: "Box",
                                props: {
                                    width: 750,
                                    renderType: "render",
                                    height: 150,
                                    bgColor: "#FFFFFF"
                                },
                                compId: 11,
                                child: [ {
                                    type: "Image",
                                    props: {
                                        skin: "matrix/img_matrix_line.png",
                                        sizeGrid: "0,6,0,5",
                                        right: 5,
                                        left: 5,
                                        height: 2,
                                        bottom: 0
                                    },
                                    compId: 13
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 17,
                                        x: 31,
                                        width: 116,
                                        runtime: "views/item/GifImageView.ts",
                                        name: "appIcon",
                                        height: 116
                                    },
                                    compId: 14,
                                    child: [ {
                                        type: "Box",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            renderType: "mask"
                                        },
                                        compId: 15,
                                        child: [ {
                                            type: "Circle",
                                            props: {
                                                y: 58,
                                                x: 58,
                                                radius: 58,
                                                lineWidth: 1,
                                                fillColor: "#ff0000"
                                            },
                                            compId: 16
                                        } ]
                                    } ]
                                }, {
                                    type: "Label",
                                    props: {
                                        x: 191,
                                        width: 351,
                                        name: "appLabel",
                                        height: 57,
                                        fontSize: 35,
                                        centerY: 0
                                    },
                                    compId: 17
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 56,
                                        x: 646,
                                        skin: "matrix/img_matrix_fav.png",
                                        name: "favImage"
                                    },
                                    compId: 18
                                } ]
                            } ]
                        }, {
                            type: "Box",
                            props: {
                                width: 750,
                                top: 88,
                                left: 0,
                                height: 75,
                                bgColor: "#FFFFFF"
                            },
                            compId: 8,
                            child: [ {
                                type: "Label",
                                props: {
                                    y: 19,
                                    x: 30,
                                    text: "最近使用",
                                    fontSize: 26,
                                    color: "#A3A3A3"
                                },
                                compId: 9
                            } ]
                        } ]
                    } ]
                } ],
                loadList: [ "matrix/img_matrix_back.png", "matrix/img_matrix_line.png", "matrix/img_matrix_fav.png" ],
                loadList3D: []
            }, e.MatrixTuiView4UI = n, Bt("ui.matrix.MatrixTuiView4UI", n);
            class i extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(i.uiView);
                }
            }
            i.uiView = {
                type: "View",
                props: {
                    width: 720,
                    top: 0,
                    right: 0,
                    mouseThrough: !1,
                    left: 0,
                    height: 1280,
                    bottom: 0
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        bgColor: "#000000",
                        alpha: .6
                    },
                    compId: 22
                }, {
                    type: "Box",
                    props: {
                        width: 515,
                        height: 650,
                        centerY: 0,
                        centerX: 0,
                        bgColor: "#ffffff"
                    },
                    compId: 23,
                    child: [ {
                        type: "Box",
                        props: {
                            right: 0,
                            left: 0,
                            height: 105,
                            bottom: 0,
                            bgColor: "#d3d3d3"
                        },
                        compId: 26,
                        child: [ {
                            type: "Box",
                            props: {
                                width: 255,
                                var: "closeBtn",
                                left: 0,
                                height: 100,
                                bottom: 0,
                                bgColor: "#ffffff"
                            },
                            compId: 27,
                            child: [ {
                                type: "Label",
                                props: {
                                    text: "取消",
                                    fontSize: 45,
                                    color: "#000000",
                                    centerY: 0,
                                    centerX: 0,
                                    bold: !0
                                },
                                compId: 29
                            } ]
                        }, {
                            type: "Box",
                            props: {
                                y: 0,
                                width: 255,
                                var: "okBtn",
                                right: 0,
                                height: 100,
                                bottom: 0,
                                bgColor: "#ffffff"
                            },
                            compId: 28,
                            child: [ {
                                type: "Label",
                                props: {
                                    y: 0,
                                    x: 0,
                                    text: "确定",
                                    fontSize: 45,
                                    color: "#656582",
                                    centerY: 0,
                                    centerX: 0,
                                    bold: !0
                                },
                                compId: 30
                            } ]
                        } ]
                    }, {
                        type: "Label",
                        props: {
                            top: 20,
                            text: "温馨提示",
                            fontSize: 58,
                            color: "#000000",
                            centerX: 0,
                            bold: !0
                        },
                        compId: 31
                    }, {
                        type: "Image",
                        props: {
                            y: 70,
                            x: 30,
                            width: 100,
                            var: "fhead",
                            height: 100
                        },
                        compId: 32
                    }, {
                        type: "Label",
                        props: {
                            y: 80,
                            x: 151,
                            wordWrap: !0,
                            width: 327,
                            var: "fname",
                            valign: "middle",
                            text: "殘留在煙草味",
                            overflow: "hidden",
                            height: 80,
                            fontSize: 35,
                            color: "#000000",
                            align: "left"
                        },
                        compId: 33
                    }, {
                        type: "Label",
                        props: {
                            y: 176,
                            wordWrap: !0,
                            width: 414,
                            var: "tip",
                            valign: "middle",
                            text: "您的好友當中づ╮邀请您加入:",
                            overflow: "hidden",
                            height: 87,
                            fontSize: 35,
                            color: "#000000",
                            centerX: 0,
                            align: "center"
                        },
                        compId: 34
                    }, {
                        type: "Image",
                        props: {
                            y: 276,
                            width: 200,
                            var: "appIcon",
                            runtime: "views/item/GifImageView.ts",
                            height: 200,
                            centerX: 0
                        },
                        compId: 35
                    }, {
                        type: "Label",
                        props: {
                            y: 476,
                            wordWrap: !0,
                            width: 381,
                            var: "appName",
                            valign: "middle",
                            text: "名字要六个字",
                            overflow: "hidden",
                            height: 46,
                            fontSize: 32,
                            color: "#000000",
                            centerX: 0,
                            align: "center"
                        },
                        compId: 36
                    } ]
                } ],
                loadList: [],
                loadList3D: []
            }, e.MatrixTuiView8UI = i, Bt("ui.matrix.MatrixTuiView8UI", i);
            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(a.uiView);
                }
            }
            a.uiView = {
                type: "View",
                props: {
                    width: 100,
                    runtime: "matrixSDK/TuiCloseBtn.ts",
                    height: 100
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        y: 3.5,
                        x: 6,
                        skin: "matrix/ic_close.png"
                    },
                    compId: 3
                } ],
                loadList: [ "matrix/ic_close.png" ],
                loadList3D: []
            }, e.TuiCloseBtnUI = a, Bt("ui.matrix.TuiCloseBtnUI", a);
        }(e.matrix || (e.matrix = {}));
    }(yt || (yt = {}));
    class xt extends yt.LoadingViewUI {
        constructor() {
            super(...arguments), this.loadSubpackage = !1, this.loadCompleted = !1, this.retryCount = 0;
        }
        init(e) {
            this.loadSubpackage = e.loadSubpackage || !1, console.log("LoadingView init"), this.registerEvent();
        }
        uninit() {
            Laya.timer.clearAll(this), this.unregisterEvent();
        }
        registerEvent() {
            e.Instance.on(t.ResLoadProgress, this, this.onRefreshProgress), e.Instance.on(t.StartLoadFinish, this, this.onLoadCompleted), 
            e.Instance.on(t.userLoginFinish, this, this.userLoginFinish), e.Instance.on(t.SubpackageLoadProgress, this, this.onSubpackageLoadProgress), 
            e.Instance.on(t.LoadLevelComplete, this, this.loadLevelCompleted);
        }
        unregisterEvent() {
            e.Instance.off(t.ResLoadProgress, this, this.onRefreshProgress), e.Instance.off(t.StartLoadFinish, this, this.onLoadCompleted), 
            e.Instance.off(t.userLoginFinish, this, this.userLoginFinish), e.Instance.off(t.SubpackageLoadProgress, this, this.onSubpackageLoadProgress), 
            e.Instance.off(t.LoadLevelComplete, this, this.loadLevelCompleted);
        }
        onRefreshProgress(e) {
            e < 0 && (e = 0), e > 1 && (e = 1), this.loadSubpackage ? this.updateProgress(.5 + e / 2) : this.updateProgress(e);
        }
        onSubpackageLoadProgress(e) {
            e < 0 && (e = 0), e > 1 && (e = 1), this.updateProgress(e / 2);
        }
        updateProgress(e) {
            e < 0 && (e = 0), e > 1 && (e = 1);
            let t = (100 * e).toFixed(0) + "%";
            this.loadingLabel.changeText(t || "");
            let n = Math.floor(369 * e);
            this.progressImageMask.graphics.clear(), this.progressImageMask.graphics.drawRect(0, 0, n, 40, "#FF0000"), 
            ct.Instance.setLoadingProgress((100 * e).toFixed(0));
        }
        closeLoadingView() {
            Wt.Instance.closeUI(zt.Load), C.Instance.valueuser();
        }
        showMainView() {
            ct.Instance.report(a.showStart), mt.Instance.loadMusicSubPackage(), pe.Instance.playBgm(), 
            nt.Instance.loadLevel();
            
        }
        loadLevelCompleted() {
           
            Laya.timer.once(0.5e3,this,()=>{
                this.closeLoadingView(), 
                Wt.Instance.openUI(zt.Game);
            })
           
        }
        onLoadCompleted() {
            this.loadCompleted = !0;
            let e = _.Instance.logined;
            ct.Instance.setLoadingProgress(100), e ? this.showMainView() : _.Instance.loginError && this.showtReTryBtn();
        }
        userLoginFinish(e) {
            e.logined ? this.onStart() : this.loadCompleted && this.showtReTryBtn();
        }
        onStart() {
            this.loadCompleted && this.showMainView();
        }
        showtReTryBtn() {
            console.log("showtReTryBtn"), v.Instance.doFailLogin();
        }
        reLogin() {
            mt.Instance.doLoginAction(null);
        }
    }
    class At {
        constructor() {
            this.hasShow = !1, this.m_offlineTime = 0;
        }
        static get Instance() {
            return null === At._instance && (At._instance = new At()), At._instance;
        }
        init() {
            let e = this.getOfflineTime();
            this.m_offlineTime = e > 0 ? new Date().getTime() - e : 0;
        }
        getOfflineTime() {
            return g.getNumberValue("offlineTime");
        }
        setOfflineTime(e) {
            g.setNumberValue("offlineTime", e);
        }
        getOfflineTimeCoin() {
            let e = 0;
            if (!this.hasShow) {
                let t = Math.floor(this.m_offlineTime / 6e4), n = 120;
                t >= 3 && (t > n && (t = n), e = 5 * t);
            }
            return e;
        }
    }
    At._instance = null;
    class Dt extends yt.GameViewUI {
        init(e) {
            dt.Instance.startPlayGame(), this.skinGunBtn.visible = !Ze.noGunSkin, this.regiestEvent(), 
            this.onCoinChange(), 
            this.tipImageView.alpha = 0;
            this.onShowStartView(), this.checkOffline(), 
            this.btnClose.visible = !1
        }
        uninit() {
            this.unregiestEvent();
        }
        regiestEvent() {

            this.startView.on(Laya.Event.CLICK, this, this.onStart), this.skinRoleBtn.on(Laya.Event.CLICK, this, this.onRoleSkinBtn), 
            this.skinGunBtn.on(Laya.Event.CLICK, this, this.onGunSkinBtn),
            this.signBtn.on(Laya.Event.CLICK, this, this.onSignBtn), 
            this.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose), e.Instance.on(t.HideStartView, this, this.onHideStartView), 
            e.Instance.on(t.ShowStartView, this, this.onShowStartView), e.Instance.on(t.LevelFail, this, this.onLevelFail), 
            e.Instance.on(t.LevelSuccess, this, this.onLevelSuccess), e.Instance.on(t.PlayerGoodsUpdate, this, this.onCoinChange), 
            e.Instance.on(t.BossComing, this, this.onBossComing), e.Instance.on(t.BossHPChange, this, this.onBossHPChange), 
            e.Instance.on(t.BulletChange, this, this.onBulletChange), e.Instance.on(t.GetFocus, this, this.checkOffline);
        }
        unregiestEvent() {
            this.startView.off(Laya.Event.CLICK, this, this.onStart), this.skinRoleBtn.off(Laya.Event.CLICK, this, this.onRoleSkinBtn), 
            this.skinGunBtn.off(Laya.Event.CLICK, this, this.onGunSkinBtn),
            this.signBtn.off(Laya.Event.CLICK, this, this.onSignBtn), 
            this.btnClose.off(Laya.Event.CLICK, this, this.onBtnClose), e.Instance.off(t.HideStartView, this, this.onHideStartView), 
            e.Instance.off(t.ShowStartView, this, this.onShowStartView), e.Instance.off(t.LevelFail, this, this.onLevelFail), 
            e.Instance.off(t.LevelSuccess, this, this.onLevelSuccess), e.Instance.off(t.PlayerGoodsUpdate, this, this.onCoinChange), 
            e.Instance.off(t.BossComing, this, this.onBossComing), e.Instance.off(t.BossHPChange, this, this.onBossHPChange), 
            e.Instance.off(t.BulletChange, this, this.onBulletChange), e.Instance.off(t.GetFocus, this, this.checkOffline);
        }
        onCoinChange() {
            this.coinLabel.text = `${_.Instance.gold}`, this.coinLabel1.text = `${_.Instance.gold}`;
        }
        onShowStartView() {
            platform.getInstance().canNavigate = true;
             this.startBox.visible = !0, 
            this.coinBox.visible = !1, this.levelTitleLabel.visible = !1, this.BossHP.visible = !1, 
            this.BulletBox.visible = !1, this.updateLevelInfo();
        }
        onHideStartView() {
            platform.getInstance().canNavigate = false;
            this.startBox.visible = !1, this.coinBox.visible = !0, this.levelTitleLabel.visible = !0;
        }
        onLevelSuccess() {}
        onLevelFail() {}
        onBossComing() {
            this.tipImageView.skin = "game/BOSS.png", this.tipAni.play(0, !1), this.BossHP.visible = !0, 
            this.hpProgress.value = 1, nt.Instance.isBoss = !0;
        }
        updateLevelInfo() {
            let e = _.Instance.level + 1;
            console.log("_.Instance.level",_.Instance.level);
            var t = e - 1, 
            n = e + 1;
            this.preLevelBox.visible = t > 0, this.preLabel.text = `${t}`, this.currentLabel.text = `${e}`, 
            this.nextLabel.text = `${n}`, f.Instance.isBossLevel(e - 1) ? (this.bossIcon.x = this.currentLevelBox.x, 
            this.bossIcon.visible = !0) : f.Instance.isBossLevel(t - 1) ? (this.bossIcon.x = this.preLevelBox.x, 
            this.bossIcon.visible = !0) : f.Instance.isBossLevel(n - 1) ? (this.bossIcon.x = this.nextLevelBox.x, 
            this.bossIcon.visible = !0) : this.bossIcon.visible = !1, this.levelTitleLabel.text = `LEVEL:${e}`;
        }
        onRoleSkinBtn() {
            pe.Instance.playUIClick(), Wt.Instance.openUI(zt.Skin, {
                skinType: ee.role
            });
        }
        onGunSkinBtn() {
            pe.Instance.playUIClick(), Wt.Instance.openUI(zt.Skin, {
                skinType: ee.gun
            });
        }
        onStart() {
            platform.getInstance().canNavigate = false;
            // platform.getInstance().showInterstitial(()=>{
               
                nt.Instance.checkStartGame();
            // });
        }
        onShareBtn() {
            pe.Instance.playUIClick(), it.Instance.showVideoOrrShare(ae.HomeShare);
        }
        onSignBtn() {
            pe.Instance.playUIClick();
        }
        onBtnMore() {
            // C.Instance.isOpenSDK() && Wt.Instance.openUIUnique(zt.MatrixTui1, {
            //     cb: null,
            //     from: ce.HomeRight
            // });
        }
        onBtnClose() {
            C.Instance.isOpenSDK() && Wt.Instance.openUIUnique(zt.MatrixTui1, {
                cb: null,
                from: ce.GameOut
            });
        }
        onBossHPChange(e) {
            this.hpProgress.value = e || 0;
        }
        onBulletChange(e) {
            let t = 7 - e, n = [];
            for (let e = 0; e < t; e++) n.push(0);
            for (let t = 0; t < e; t++) n.push(1);
            this.BulletBox.visible = !0, this.BulletList.dataSource = n, this.BulletList.renderHandler = new Laya.Handler(this, (e, t) => {
                e.getChildByName("bulletImage").skin = 1 === n[t] ? "game/full_bullet.png" : "game/empty_bullet.png";
            });
        }
        onMoreBtn() {
        }
        checkOffline() {
            if (nt.needTryShow || Wt.Instance.isUIOpen(zt.Try)) return !1;
            if (!Wt.Instance.isTopUI(zt.Game)) return !1;
            let e = At.Instance.getOfflineTimeCoin();
            return console.log("Taylor --- offlineCoin=Taylor --- offlineCoin= " + e), e > 0 && (Wt.Instance.openUI(zt.Offline, {
                coin: e
            }), !0);
        }
    }
    class Ft {
        static get Instance() {
            return null === Ft._instance && (Ft._instance = new Ft()), Ft._instance;
        }
        getTuiArr() {
            return ct.IsTouTiao() ? d.vGameInfo.ttTuiInfo : C.Instance.isOpenSDK() ? C.Instance.tuiInfo : d.vGameInfo.tuiInfo;
        }
        canTui() {
            var e = !1;
            return ct.IsTouTiao() ? d.vGameInfo.tRecommend && d.vGameInfo.ttTuiInfo && d.vGameInfo.ttTuiInfo.length && d.vGameInfo.ttTuiInfo.length >= 4 && "undefined" != typeof wx && wx.createMoreGamesButton && (ct.isIos ? d.vGameInfo.tIosRecommend && (e = !0) : e = !0) : ct.IsWeChat() && (C.Instance.isOpenSDK() ? C.Instance.tuiInfo && C.Instance.tuiInfo.length > 0 && (e = !0) : d.vGameInfo.sRecommend && d.vGameInfo.tuiInfo && d.vGameInfo.tuiInfo.length && (e = !0)), 
            e;
        }
        static getScorllData(e) {
            if (e) {
                let t = [].concat(e), n = [];
                for (;t.length < 60; ) {
                    0 === n.length && (n = [].concat(e));
                    let i = y.nextNumber(0, n.length - 1);
                    i > n.length && (i = 0), t.push(n[i]), n.splice(i, 1);
                }
                return t;
            }
            return [];
        }
    }
    Ft._instance = null;
    class Vt extends yt.SettlementViewUI {
        constructor() {
            super(...arguments), this.coin = 0, this.killNum = 0, this.isBoss = !1, this.isChecked = !0, 
            this.tempCoin = 0, this.isETouch = !1, this.curPos = ae.Unknow;
        }
        init(e) {
            this.regiestEvent(), ct.triggerGC(), e && (console.log("Taylor --- data", e), this.coin = e.coin || 0, 
            this.killNum = e.killNum || 0, this.isBoss = e.isBoss || !1, e.success ? (this.successBox.visible = !0, 
            this.failBox.visible = !1, this.resultImage.skin = "game/success.png",
            _.Instance.level++, 
            _.Instance.levelInfo = null, 

            this.initSuccessView()) : (this.successBox.visible = !1, 
            this.failBox.visible = !0, this.resultImage.skin = "game/fail.png"), 0 === this.coin && (this.videoBtn.disabled = !0)), 
            nt.Instance.preloadLevel(),
            this.initTtTuiView(), this.initETouch();
            let t = this.hasETouch();
            if (console.log("Taylor --- hasETouch= " + t), t ? (this.updateBtnBox(!0), Laya.timer.once(500, this, () => {
                it.Instance.showADBanner(zt.Settement.id, this.getPinY());
            })) : (this.updateBtnBox(!1), it.Instance.showADBanner(zt.Settement.id, this.getPinY())), 
            C.Instance.isOpenSDK()) {
            }
            _.Instance.doSaveGameData();

            // platform.getInstance().initList(this.listView);
        }
        uninit() {
            this.unregiestEvent(), ct.IsQutoutiao() && (qttGame.hideInterstitialAd(), Laya.timer.clear(this, this.showAppBox), 
            Laya.timer.clear(this, this.showHDAD));
        }
        regiestEvent() {
            this.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn), this.okBtn.on(Laya.Event.CLICK, this, this.onGotBtn), 
            this.checkBox.on(Laya.Event.CLICK, this, this.onCheck), 
            // this.fyhdTuiBox.on(Laya.Event.CLICK, this, this.onFyhdTui), 
            this.skinLevelBtn.on(Laya.Event.CLICK, this, this.onSkinBtn), this.skinGoldBtn.on(Laya.Event.CLICK, this, this.onSkinGoldBtn), 
            this.retryBtn.on(Laya.Event.CLICK, this, this.onRetryBtn), e.Instance.on(t.ShowAdCompleted, this, this.onShowAdComplete), 
            e.Instance.on(t.ShowBannerCompleted, this, this.onShowBannerCompleted);
        }
        unregiestEvent() {
            this.videoBtn.off(Laya.Event.CLICK, this, this.onVideoBtn), this.okBtn.off(Laya.Event.CLICK, this, this.onGotBtn), 
            this.checkBox.off(Laya.Event.CLICK, this, this.onCheck), 
            // this.fyhdTuiBox.off(Laya.Event.CLICK, this, this.onFyhdTui), 
            this.skinLevelBtn.off(Laya.Event.CLICK, this, this.onSkinBtn), this.skinGoldBtn.off(Laya.Event.CLICK, this, this.onSkinGoldBtn), 
            this.retryBtn.off(Laya.Event.CLICK, this, this.onRetryBtn), e.Instance.off(t.ShowAdCompleted, this, this.onShowAdComplete), 
            e.Instance.off(t.ShowBannerCompleted, this, this.onShowBannerCompleted);
        }
        initSuccessView() {
            console.log("Taylor --- SettlementView.showCount= " + Vt.showCount), Vt.showCount ? this.isChecked = !0 : this.isChecked = !1, 
            (ct.IsTouTiao() || ct.IsOppo()) && (this.isChecked = !1), Vt.showCount += 1, this.updateCheckView(), 
            this.coinBox.scaleX = 0, this.coinBox.scaleY = 0, this.btnBox.visible = !1, this.killNumLabel.text = "x" + this.killNum, 
            this.addLabel.text = "+0", this.lightAni.play(0, !0), Laya.Tween.to(this.coinBox, {
                scaleX: 1,
                scaleY: 1
            }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(this, this.aniAddCoin));
        }
        aniAddCoin() {
            pe.Instance.playSound(de.moneyNum), Laya.Tween.to(this, {
                labelAddCoin: this.coin
            }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(this, this.aniComplete));
        }
        aniComplete() {
            this.addLabel.changeText("+" + this.coin), ut.once(100, this, () => {
                this.btnBox.visible = !0;
            });
        }
        set labelAddCoin(e) {
            this.tempCoin = e, this.addLabel.text = "+" + Math.floor(e);
        }
        get labelAddCoin() {
            return this.tempCoin;
        }
        getPinY() {
            if (!this.hasETouch()) return -1;
            if (!it.Instance.aCheck() && this.retryBtn) {
                return this.retryBtn.localToGlobal(new Laya.Point(0, this.retryBtn.height)).y - (ct.isLong(), 
                40);
            }
            return -1;
        }
        initETouch() {
            if (C.Instance.isOpenSDK() && _.Instance.onlineStartTime > 0) {
                let e = new Date().getTime(), t = e - _.Instance.onlineStartTime;
                _.fyhdData.onlineTime += t, _.Instance.onlineStartTime = e, console.log("Taylor --- onlineTime= " + _.fyhdData.onlineTime), 
                console.log("Taylor --- dayBattleCount= " + _.Instance.dayBattleCount), d.vGameInfo.eInfo && !it.Instance.aCheck() && Math.floor(_.fyhdData.onlineTime / 10) >= d.vGameInfo.eInfo.onLine && _.Instance.dayBattleCount >= d.vGameInfo.eInfo.dayGame && (console.log("Taylor --- true"), 
                this.isETouch = !0);
            }
        }
        onShowBannerCompleted(e) {
            console.log("Taylor --- Settement + pos= " + e), e == zt.Settement.id && this.hasETouch() && ut.once(1e3, this, () => {
                this.updateBtnBox(!1, !0);
            });
        }
        hasETouch() {
            return this.isETouch;
        }
        updateBtnBox(e = !1, t = !1) {
            let n = 0, i = 0;
            e ? (n = -440, i = -360) : (n = -240, i = -160), t ? (Laya.Tween.to(this.successBox, {
                bottom: n
            }, 200), Laya.Tween.to(this.failBox, {
                bottom: i
            }, 200)) : (this.successBox.bottom = n, this.failBox.bottom = i);
        }
        onVideoBtn() {

            // platform.getInstance().showReward(()=>{
                pe.Instance.playUIClick();
                _.Instance.gold += 3 * this.coin;
                nt.Instance.setNext();
                this.closeView()
            // })

        }
        onGotBtn() {
            pe.Instance.playUIClick(), _.Instance.gold += this.coin, nt.Instance.setNext(), 
            this.closeView();
        }
        onSkinBtn() {
            // platform.getInstance().showReward(()=>{
                pe.Instance.playUIClick();
                nt.Instance.skipLevel() ;
                this.closeView();
            // })
        }
        onRetryBtn() {
            pe.Instance.playUIClick(), this.closeView(), nt.Instance.restart(), C.Instance.isOpenSDK() && Wt.Instance.openUIUnique(zt.MatrixTui1, {
                cb: null,
                from: ce.RoleProgressClose
            });
        }
        onShowAdComplete(e) {
            this.curPos === e && (this.curPos = ae.Unknow, e === ae.SettlementSkipAD ? nt.Instance.skipLevel() : e === ae.SettlementDoubleAD && (_.Instance.gold += 3 * this.coin, 
            nt.Instance.setNext()), this.closeView());
        }
        closeView() {
            ct.IsQutoutiao() && qttGame.hideInterstitialAd(), Wt.Instance.closeUI(zt.Settement);
        }
        onSkinGoldBtn() {
            _.Instance.gold >= 500 ? (_.Instance.gold -= 500, nt.Instance.skipLevel(), this.closeView()) : Wt.Instance.showTips("Không đủ tiền!");
        }
        initTtTuiView() {
        }
        onCheck() {
            this.isChecked = !this.isChecked, this.updateCheckView();
        }
        updateCheckView() {
            this.checkBoxView.skin = this.isChecked ? "common/ic_check.png" : "common/ic_uncheck.png", 
            this.videoBtn.visible = this.isChecked, this.okBtn.visible = !this.isChecked;
        }
        showAppBox() {
            ct.IsQQ() && (it.Instance.wxCheck() || d.isLimitCityB && d.vGameInfo.qqAppBoxLB || d.vGameInfo.qqAppBox && ct.Instance.showAppBox());
        }
        onFyhdTui() {
            C.Instance.isOpenSDK() && Wt.Instance.openUIUnique(zt.MatrixTui1, {
                cb: null,
                from: ce.BeforeSettle
            });
        }
        showHDAD() {
            let e = !1, t = (_.Instance.level, _.Instance.dayBattleCount);
            console.log("Taylor ---- dayBattleCount= " + t);
            let n = d.vGameInfo.showHdStart, i = d.vGameInfo.showHdCount;
            n && i && t >= n && (t % i != 0 && 1 != t || (e = !0)), e && qttGame.showHDAD({
                index: 3,
                gametype: 3,
                rewardtype: 1,
                data: {},
                title: "刷新道具",
                url: "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png",
                callback: e => {}
            });
        }
        showInterstitialAd() {
            console.log("Taylor --- showInterstitialAd= "), qttGame.showInterstitialAd({
                x: 0,
                y: 0,
                w: 375,
                h: 100,
                stage_width: p.windowWidth,
                stage_height: p.windowHeight
            });
        }
        showPaster() {
            console.log("Taylor --- showPaster= "), qttGame.showPaster({
                cpMessage: {},
                video: {},
                largeImage: {
                    style: 1,
                    y: .5,
                    width: .8
                },
                closeCallback: () => {
                    console.log("广告关闭");
                }
            });
        }
    }
    Vt.showCount = 1;
    class Et extends yt.SkinViewUI {
        constructor() {
            super(...arguments), this.skinType = ee.role, this.curCfg = null, this.curItemSelected = null, 
            this.curSharePos = ae.Unknow;
        }
        init(e) {
            console.log("SkinViewUI --- data= ", e), 
            this.skinType = e.skinType, this.registerEvent(), 
            this.initData(), this.initView();
        }
        uninit() {
            this.unregisterEvent();
        }
        registerEvent() {
            this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn), this.centerBtn.on(Laya.Event.CLICK, this, this.onCenterBtn), 
            this.tryBtn.on(Laya.Event.CLICK, this, this.onTryBtn), this.unlockBtn.on(Laya.Event.CLICK, this, this.onUnlockBtn), 
            e.Instance.on(t.ShowAdCompleted, this, this.onShowAdCompleted), e.Instance.on(t.CloseShowAd, this, this.onCloseShowAd);
            window.yad.visible = false;
        }
        unregisterEvent() {
            window.yad.visible = true;
            this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtn), this.centerBtn.off(Laya.Event.CLICK, this, this.onCenterBtn), 
            this.tryBtn.off(Laya.Event.CLICK, this, this.onTryBtn), this.unlockBtn.on(Laya.Event.CLICK, this, this.onUnlockBtn), 
            e.Instance.off(t.ShowAdCompleted, this, this.onShowAdCompleted), e.Instance.off(t.CloseShowAd, this, this.onCloseShowAd);
        }
        onCloseBtn() {
            pe.Instance.playUIClick(), Wt.Instance.closeUI(zt.Skin);
        }
        initData() {
            let e = Ze.Instance.getCurSkin(this.skinType);
            this.curCfg = Ze.Instance.getSkinCfg(e, this.skinType);
        }
        initView() {
            this.skinType === ee.gun ? this.attrBox.visible = !0 : this.attrBox.visible = !1, 
            this.initList(), this.updateView();
        }
        initList() {
            let n = Ze.Instance.getSkinCfgData(this.skinType);
            this.list.vScrollBarSkin = "", this.list.array = n, 
            this.list.selectEnable = !0, 
            this.list.renderHandler = new Laya.Handler(this, (i, a) => {
                let s = n[a];
                if (!s) return;
                let o = i.getChildByName("itemSkin"), 
                r = i.getChildByName("icHook"), 
                l = i.getChildByName("lockBox"), 
                h = i.getChildByName("icLock"), 
                c = i.getChildByName("itemSelected"), 
                d = !Ze.Instance.hasComplete(s.id, this.skinType);
                o.skin = s.img;
                let p = !d && Ze.Instance.getCurSkin(this.skinType) === s.id;
                _.Instance.isGold && 8 == s.id && (p = !0, d = !1), r.visible = p, l.visible = d, 
                h.visible = d, c.visible = this.curCfg.id === s.id, c.visible && (this.curItemSelected = c);
                let u = this;
                i.offAll(null), 
                i.on(Laya.Event.CLICK, this, () => {
                    if (this.curCfg.id !== s.id) {
                        null != u.curItemSelected && (u.curItemSelected.visible = !1), c.visible = !0, u.curCfg = s, 
                        u.curItemSelected = c, u.updateView();
                        let n = this.skinType === ee.role ? s : null, i = this.skinType === ee.gun ? s : null;
                        e.Instance.event(t.SkinShowChange, {
                            roleCfg: n,
                            gunCfg: i
                        });
                    }
                });
            });
        }
        updateView() {
            this.updateAttr(), this.updateBottomView();
        }
        updateAttr() {
            if (this.skinType === ee.gun && this.curCfg) {
                let e = this.curCfg.damage, t = this.curCfg.magazine, n = this.curCfg.bullets;
                this.damage.text = "" + e, this.magazine.text = "" + t, this.bullets.text = "x" + n, 
                this.bulletsView.visible = n > 1;
            }
        }
        updateBottomView() {
            if (this.unlockBtn.visible = !1, this.tryBtn.visible = !1, this.centerBtn.visible = !1, 
            this.gradeCondition.visible = !1, this.progressCondition.visible = !1, this.curCfg) {
            
                let e = Ze.Instance.hasComplete(this.curCfg.id, this.skinType);
                if (_.Instance.isGold && 8 == this.curCfg.id && (e = !0, this.unlockBtn.visible = !1), 
                e) this.centerBtn.visible = !0, this.unlockBtn.visible = !1, Ze.Instance.getCurSkin(this.skinType) == this.curCfg.id ? (this.centerBtnLabel.text = "SỬ DỤNG", 
                this.centerBtn.disabled = !0) : (this.centerBtnLabel.text = "DÙNG", this.centerBtn.disabled = !1); else if (this.tryBtn.visible = !0, 
                this.curCfg.conditionType == te.level && 8 != this.curCfg.id) this.gradeCondition.visible = !0, 
                this.gradeCondition.text = "MỞ KHÓA Ở "+this.curCfg.condition; else if (this.curCfg.conditionType == te.vedio) {
                    this.progressCondition.visible = !0, this.proTitle.text = this.curCfg.condition + "MỞ KHÓA";
                    let e = Ze.Instance.getSkinInfo(this.curCfg.id, this.skinType);
                    this.progress.value = e.cnt / this.curCfg.conditionCnt, this.proValue.text = e.cnt + "/" + this.curCfg.conditionCnt;
                } else this.curCfg.conditionType == te.sign ? (this.gradeCondition.visible = !0, 
                this.gradeCondition.text = this.curCfg.condition + "MỞ KHÓA") : this.curCfg.conditionType == te.goin && (this.unlockBtn.visible = !0, 
                this.unlockBtn.centerX = 0, this.tryBtn.visible = !1, this.nulockCoin.text = "30000");
            }
        }
        onCenterBtn() {
            Ze.Instance.getCurSkin(this.skinType) != this.curCfg.id && (pe.Instance.playUIClick(), 
            Ze.Instance.setCurSkin(this.curCfg.id, this.skinType), this.list.refresh(), this.updateBottomView(), 
            e.Instance.event(t.SkinChange));
        }
        onTryBtn() {
            // platform.getInstance().showReward(()=>{
                pe.Instance.playUIClick();
                Ze.Instance.setTempSkin(this.curCfg.id, this.skinType); 
                Wt.Instance.closeUI(zt.Skin), nt.Instance.onStart();
            // })
           
        }
        onUnlockBtn() {
            pe.Instance.playUIClick(), _.Instance.gold >= 3e4 ? (_.Instance.isGold = 1, _.Instance.gold -= 3e4, 
            e.Instance.event(t.SkinChange), this.onCenterBtn()) : Wt.Instance.showTips("Không đủ tiền!");
        }
        onShowAdCompleted(n) {
            if (n === this.curSharePos) {
                if (this.curCfg.conditionType == te.level) Ze.Instance.setTempSkin(this.curCfg.id, this.skinType); 
                else if (this.curCfg.conditionType == te.vedio) {
                    let n = Ze.Instance.getSkinInfo(this.curCfg.id, this.skinType);
                    n.cnt += 1, Ze.Instance.setSkinInfo(this.curCfg.id, n, this.skinType), Ze.Instance.setTempSkin(this.curCfg.id, this.skinType), 
                    e.Instance.event(t.SkinChange), this.list.refresh(), this.updateBottomView();
                } else this.curCfg.conditionType === te.sign && Ze.Instance.setTempSkin(this.curCfg.id, this.skinType);
                this.curSharePos = ae.Unknow, Wt.Instance.closeUI(zt.Skin), nt.Instance.onStart();
            }
        }
        onCloseShowAd(e) {
            e === this.curSharePos && e === ae.SkinTryAD && Wt.Instance.showTips("完整看完视频才能试玩");
        }
    }
    class Pt extends yt.TryViewUI {
        constructor() {
            super(...arguments), this.cfg = null, this.skinType = ee.role, this.curSharePos = ae.Unknow, 
            this.isETouch = !1;
        }
        init(e) {
            this.cfg = e.cfg, this.skinType = e.skinType, this.registerEvent(), this.initView();
            let t = this;
        }
        uninit() {
            Laya.timer.clearAll(this), this.unregisterEvent();
        }
        registerEvent() {
            this.closeBtn.on(Laya.Event.CLICK, this, this.onClosed), this.btn.on(Laya.Event.CLICK, this, this.onBtn), 
             e.Instance.on(t.ShowAdCompleted, this, this.onShowAdCompleted), 
            e.Instance.on(t.ShowBannerCompleted, this, this.onShowBannerCompleted), e.Instance.on(t.CloseShowAd, this, this.onCloseShowAd);
        }
        unregisterEvent() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.onClosed), this.btn.off(Laya.Event.CLICK, this, this.onBtn), 
             e.Instance.off(t.ShowAdCompleted, this, this.onShowAdCompleted), 
            e.Instance.off(t.ShowBannerCompleted, this, this.onShowBannerCompleted), e.Instance.off(t.CloseShowAd, this, this.onCloseShowAd);
        }
        initView() {
            pe.Instance.playSound(de.LevelUp);
            let n = this.skinType === ee.role ? this.cfg : null, i = this.skinType === ee.gun ? this.cfg : null;
            e.Instance.event(t.SkinShowChange, {
                roleCfg: n,
                gunCfg: i
            }), this.bgAni.play(0, !0), 
            this.heartAni.play(0, !0),
             this.skinType === ee.role && (i = Ze.Instance.getCurSkinCfg(ee.gun)), 
            i && !Ze.noGunSkin ? (this.damage.text = "" + i.damage, this.magazine.text = "" + i.magazine, 
            this.bullets.text = "x" + i.bullets, this.bulletsView.visible = i.bullets > 1, this.attrBox.visible = !0) : this.attrBox.visible = !1, 
            this.initETouch();
            let a = this.hasETouch();
            console.log("Taylor --- hasETouch= " + a), a ? (this.updateBtnBox(!0)) : (this.updateBtnBox(!1));
        }
        onClosed() {
            pe.Instance.playUIClick(), this.doClose();
        }
        onBtn() {

            // platform.getInstance().showReward(()=>{
                pe.Instance.playUIClick();
                Ze.Instance.setTempSkin(this.cfg.id, this.skinType);
                e.Instance.event(t.SkinChange);
                this.doClose();
            // });
        //    , this.curSharePos = ae.FreeTryAD, it.Instance.showVideoOrrShare(this.curSharePos);
        }
        onShowAdCompleted(n) {
            if (console.log("onShowAdCompleted"), n === this.curSharePos) {
                let n = Ze.Instance.getSkinInfo(this.cfg.id, this.skinType);
                n.cnt += 1, Ze.Instance.setSkinInfo(this.cfg.id, n, this.skinType), Ze.Instance.setTempSkin(this.cfg.id, this.skinType), 
                e.Instance.event(t.SkinChange), this.curSharePos = ae.Unknow, console.log("onShowAdCompleted111"), 
                this.doClose();
            }
        }
        getPinY() {
            if (!this.hasETouch()) return -1;
            if (!it.Instance.aCheck() && this.closeBtn) {
                return this.closeBtn.localToGlobal(new Laya.Point(0, this.closeBtn.height)).y - (ct.isLong() ? 100 : 40);
            }
            return -1;
        }
        initETouch() {
        }
        onShowBannerCompleted(e) {
            e == zt.Try.id && this.hasETouch() && ut.once(1e3, this, () => {
                this.updateBtnBox(!1, !0);
            });
        }
        hasETouch() {
            return this.isETouch;
        }
        updateBtnBox(e = !1, t = !1) {
            let n = 0;
            n = e ? 930 : 730, t ? Laya.Tween.to(this.closeBtn, {
                top: n
            }, 200) : this.closeBtn.top = n;
        }
        doClose() {
            Wt.Instance.closeUI(zt.Try), nt.Instance.onStart();
        }
        onCloseShowAd(e) {
            e === this.curSharePos && e === ae.FreeTryAD && Wt.Instance.showTips("完整看完视频才能免费试用");
        }
        onDayNot() {
        }
        updateDayNotTryCheck() {
            this.dayNotCheck.skin = _.Instance.dayNotTry ? "common/ic_check.png" : "common/ic_uncheck.png";
        }
    }
    class Mt extends yt.RoleProgressViewUI {
        constructor() {
            super(...arguments), this.aniTime = 0, this.pro = 0, this.newPro = 0, this.tempPro = 0, 
            this.isETouch = !1;
        }
        init(n) {
            this.proInfo = n, this.registerEvent(), this.initView(), e.Instance.event(t.SkinShowChange, {
                roleCfg: this.proInfo.cfg,
                gunCfg: null
            }), ct.IsQutoutiao() && (this.shareBtn.visible = !1), this.doAnimate();
        }
        uninit() {
            Laya.timer.clearAll(this), this.unregisterEvent();
        }
        registerEvent() {
            this.btn.on(Laya.Event.CLICK, this, this.onBtn), 
            // this.shareBtn.on(Laya.Event.CLICK, this, this.onShareBtn), 
            e.Instance.on(t.ShowBannerCompleted, this, this.onShowBannerCompleted);
        }
        unregisterEvent() {
            this.btn.off(Laya.Event.CLICK, this, this.onBtn), 
            // this.shareBtn.off(Laya.Event.CLICK, this, this.onShareBtn), 
            e.Instance.off(t.ShowBannerCompleted, this, this.onShowBannerCompleted);
        }
        initView() {
            this.bgAni.play(0, !0),  this.btn.visible = !1, this.initETouch();
            let e = this.hasETouch();
            console.log("Taylor --- hasETouch= " + e), e ? (this.updateBtnBox(!0), Laya.timer.once(500, this, () => {
                it.Instance.showADBanner(zt.RoleProgress.id, this.getPinY());
            })) : (this.updateBtnBox(!1), it.Instance.showADBanner(zt.RoleProgress.id, this.getPinY()));
        }
        getPinY() {
            if (!this.hasETouch()) return -1;
            if (!it.Instance.aCheck() && this.btn) {
                return this.btn.localToGlobal(new Laya.Point(0, this.btn.height)).y - (ct.isLong(), 
                40);
            }
            return -1;
        }
        initETouch() {
            if (C.Instance.isOpenSDK() && _.Instance.onlineStartTime > 0) {
                let e = new Date().getTime(), t = e - _.Instance.onlineStartTime;
                _.fyhdData.onlineTime += t, _.Instance.onlineStartTime = e, console.log("Taylor --- onlineTime= " + _.fyhdData.onlineTime), 
                console.log("Taylor --- dayBattleCount= " + _.Instance.dayBattleCount), d.vGameInfo.eInfo && !it.Instance.aCheck() && Math.floor(_.fyhdData.onlineTime / 10) >= d.vGameInfo.eInfo.onLine && _.Instance.dayBattleCount >= d.vGameInfo.eInfo.dayGame && (console.log("Taylor --- true"), 
                this.isETouch = !0);
            }
        }
        onShowBannerCompleted(e) {
            console.log("Taylor --- pos= " + e), e == zt.RoleProgress.id && this.hasETouch() && ut.once(1e3, this, () => {
                this.updateBtnBox(!1, !0);
            });
        }
        hasETouch() {
            return this.isETouch;
        }
        updateBtnBox(e = !1, t = !1) {
            let n = 0;
            n = e ? 940 : 740, t ? Laya.Tween.to(this.btn, {
                top: n
            }, 200) : this.btn.top = n;
        }
        doAnimate() {
            pe.Instance.playSound(de.Progress, 100);
            let e = this.proInfo.num, t = this.proInfo.total, n = e / t, i = (e + 1) / t;
            i > 1 && (i = 1), this.pro = 100 * n, this.newPro = 100 * i, this.tempPro = this.pro, 
            this.roleProgress.value = n, this.proValue.text = Math.floor(this.pro) + "%";
            let a = this.calcTimeForPorgress(i - n);
            Laya.Tween.to(this.roleProgress, {
                value: i
            }, a, Laya.Ease.linearNone, Laya.Handler.create(this, this.aniComplete)), Laya.Tween.to(this, {
                labelPro: this.newPro
            }, a, Laya.Ease.linearNone), this.aniTime = a;
        }
        calcTimeForPorgress(e) {
            let t = 2e3 * e;
            return Math.max(1500, t);
        }
        set labelPro(e) {
            this.tempPro = e, this.proValue.text = Math.floor(e) + "%";
        }
        get labelPro() {
            return this.tempPro;
        }
        aniComplete() {
            pe.Instance.stopSound(de.Progress), this.proValue.changeText(Math.floor(this.newPro) + "%"), 
            this.doBtnAni();
        }
        doBtnAni() {
            this.newPro >= 100 ? (pe.Instance.playSound(de.LevelUp), this.btnLabel.text = "DÙNG") : this.btnLabel.text = "TIẾP TỤC", this.btn.visible = !0, 
            this.btn.scaleX = 0, this.btn.scaleY = 0, Laya.Tween.to(this.btn, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.linearNone, null, 200);
        }
        onBtn() {
            pe.Instance.playUIClick(), this.newPro >= 100 && (Ze.Instance.setCurSkin(this.proInfo.id, ee.role), 
            e.Instance.event(t.SkinChange)), this.onClose();
        }
        onClose() {
            Wt.Instance.closeUI(zt.RoleProgress), C.Instance.isOpenSDK() && Wt.Instance.openUIUnique(zt.MatrixTui1, {
                cb: null,
                from: ce.RoleProgressClose
            });
        }
        onShareBtn() {
            pe.Instance.playUIClick(), it.Instance.showVideoOrrShare(ae.RoleProgress);
        }
    }
    class Rt extends yt.EggViewUI {
        constructor() {
            super(...arguments), this.count = 25, this.finish = !1, this.isFirst = !0, this.tapTimeArr = [], 
            this.totalCount = 0, this.sampleCount = 0, this.coin = 0, this.startTime = 0, this.maskWidth = 0, 
            this.banner = null, this.curSharePos = ae.Unknow, this.bannerPinY = 0, this.bannerTop = 0, 
            this.imageCount = 0, this.styleTop = 0, this.cfg = null;
        }
        init(e) {
            this.cfg = e, this.cb = e.cb, console.log("Taylor --- egg cb= ", this.cb), this.regiestEvent(), 
            this.count = 20 + Math.floor(10 * Math.random()), this.totalCount = this.count, 
            this.tapTimeArr = [], this.sampleCount = Math.floor(4 * Math.random() + 4), this.hitActionView.visible = !0, 
            this.hitInfoView.visible = !0, this.awardActionView.visible = !1, this.awardInfoView.visible = !1, 
            this.ani1.play(0, !0), this.imgAni.visible = !1, this.closeBtn.visible = !1;
        }
        uninit() {
            this.unregiestEvent();
        }
        regiestEvent() {
            this.hitBtn.on(Laya.Event.CLICK, this, this.clickHitBtn), this.watchADBtn.on(Laya.Event.CLICK, this, this.clickWatchADBtn), 
            e.Instance.on(t.BannerPosChange, this, this.onADBannerChange), Laya.timer.frameLoop(1, this, this.updateMaskHeight), 
            this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn), e.Instance.on(t.ShowAdCompleted, this, this.onShowAdCompleted);
        }
        unregiestEvent() {
            this.hitBtn.off(Laya.Event.CLICK, this, this.clickHitBtn), this.watchADBtn.off(Laya.Event.CLICK, this, this.clickWatchADBtn), 
            e.Instance.off(t.BannerPosChange, this, this.onADBannerChange), Laya.timer.clear(this, this.updateMaskHeight), 
            e.Instance.off(t.ShowAdCompleted, this, this.onShowAdCompleted), this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtn);
        }
        updateMaskHeight() {
            this.maskWidth -= 2, this.maskWidth < 0 && (this.maskWidth = 0), this.updateMask();
        }
        updateMask() {
            let e = this.maskWidth;
            this.maskView.graphics.clear(), this.maskView.graphics.drawRect(0, 0, e, this.maskView.height, "#FF0000");
        }
        clickHitBtn() {
            this.isFirst && (this.startTime = new Date().getTime(), this.isFirst = !1), this.imgAni.visible = !0, 
            this.ani6.play(0, !1);
            let e = 0, t = !1, n = new Date().getTime();
            if (this.tapTimeArr.push(n), this.tapTimeArr.length < this.sampleCount ? (e = this.tapTimeArr.length / (n - this.tapTimeArr[0]), 
            e = Math.min(e, .001 * this.tapTimeArr.length)) : e = this.sampleCount / (n - this.tapTimeArr[this.tapTimeArr.length - this.sampleCount]), 
            e *= 125, e = Math.min(1, e), console.log("len : " + e), t = e > .9, e > .4 && Math.random() < .7 && (this.banner && this.banner.show && this.banner.show(), 
            t = !0), this.maskWidth = this.maskView.width * e, this.updateMask(), pe.Instance.playSound(de.egg), 
            !this.finish && (this.count--, 0 === this.count || t)) {
                let e = d.vGameInfo && d.vGameInfo.eggInfo && d.vGameInfo.eggInfo.delay || 300;
                if (0 === this.count) {
                    e = (d.vGameInfo && d.vGameInfo.eggInfo && d.vGameInfo.eggInfo.eDelay || 1500) + Math.floor(500 * Math.random());
                }
                console.log("end : " + t + " count " + this.count + " duration: " + e), this.finish = !0, 
                Laya.timer.once(e, this, () => {
                    Laya.timer.clear(this, this.updateMaskHeight), this.hitInfoView.visible = !1, this.hitActionView.visible = !1, 
                    this.awardActionView.visible = !0, Laya.timer.once(2e3, this, () => {
                        this.closeBtn.visible = !0;
                    }), this.awardInfoView.visible = !0, this.ani1.stop(), this.ani4.play(0, !0);
                    let e = new Date().getTime() - this.startTime, t = this.totalCount / e;
                    t = Math.max(t, .003), t = (1e3 * Math.min(t, .008) - 3) / 10 + .5, this.coin = Math.round(100 * t) + 50, 
                    this.coinLabel.text = `${this.coin}`, pe.Instance.playSound(de.LevelUp), ct.IsQQ() && this.banner && this.banner.style && (this.banner.style.top = this.styleTop || 3e3), 
                    this.banner && this.banner.show && this.banner.show(), ct.Instance.report(a.hitedEgg, {
                        hitCount: this.totalCount - this.count,
                        totalCount: this.totalCount,
                        timeDiff: e / 1e3,
                        showBanner: null !== this.banner && void 0 !== this.banner,
                        heigthInfo: `${this.bannerPinY}-${this.bannerTop}-${this.stage.height}`
                    }), this.banner && this.banner.show && this.banner.show();
                });
            }
        }
        clickWatchADBtn() {
            this.curSharePos = ae.Egg, it.Instance.showVideoOrrShare(this.curSharePos);
        }
        onCloseBtn() {
            pe.Instance.playUIClick(), _.Instance.gold += this.coin, Wt.Instance.closeUI(zt.Egg), 
            p.isSettle ? this.cb && this.cb() : this.onTry(), p.isSettle = !1;
        }
        onShowAdCompleted(e) {
            e === this.curSharePos && (_.Instance.gold += 10 * this.coin, Wt.Instance.closeUI(zt.Egg), 
            p.isSettle ? this.cb && this.cb() : this.onTry()), p.isSettle = !1;
        }
        onTry() {
            let e = Ze.Instance.getRandomLockSkinCfg(ee.role), t = Ze.noGunSkin ? null : Ze.Instance.getRandomLockSkinCfg(ee.gun);
            console.log("Taylor --- roleSkinCfg", e), null != e && null == t && Wt.Instance.openUI(zt.Try, {
                cfg: e,
                skinType: ee.role
            });
        }
        onADBannerChange(e) {
            e.ADPos === zt.Egg.id && e.BannerAD && (this.bannerTop = e.top, this.banner = e.BannerAD, 
            this.banner && this.banner.hide && this.banner.hide(), Laya.timer.once(20, this, () => {
                this.banner && this.banner.hide && this.banner.hide();
            }), Laya.timer.once(40, this, () => {
                this.banner && this.banner.hide && this.banner.hide();
            }), ct.IsQQ() && (this.banner && this.banner.style ? (this.styleTop = this.banner.style.top, 
            this.banner.style.top = 3e3) : this.styleTop = 3e3));
        }
        getPinY() {
            let e = this.hitBtn.localToGlobal(new Laya.Point(0, -10));
            return this.bannerPinY = e.y, e.y;
        }
    }
    class Ut extends yt.OfflineViewUI {
        constructor() {
            super(...arguments), this.curShareADPos = ae.Unknow, this.coin = 0;
        }
        init(e) {
            this.coin = e.coin || 0, this.tipLabel.text = "+" + this.coin + "金币", this.registerEvent(), 
            this.tuiBox.setFromUI(zt.Offline), ct.IsTouTiao() ? (this.closeBtn.visible = !1, 
            this.closeBtn1.visible = !0) : (this.closeBtn.visible = !0, this.closeBtn1.visible = !1), 
            At.Instance.hasShow = !0;
        }
        uninit() {
            this.unregisterEvent();
        }
        registerEvent() {
            this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn), this.closeBtn1.on(Laya.Event.CLICK, this, this.onCloseBtn), 
            this.receiveBtn.on(Laya.Event.CLICK, this, this.onReceiveBtn), e.Instance.on(t.ShowAdCompleted, this, this.onShowAdCompleted);
        }
        unregisterEvent() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtn), this.closeBtn1.off(Laya.Event.CLICK, this, this.onCloseBtn), 
            this.receiveBtn.off(Laya.Event.CLICK, this, this.onReceiveBtn), e.Instance.off(t.ShowAdCompleted, this, this.onShowAdCompleted);
        }
        onCloseBtn() {
            pe.Instance.playUIClick(), _.Instance.updateWithChangeData({
                gold: this.coin
            }), Wt.Instance.showTips("领取收益成功"), pe.Instance.playSound(de.Coin), Wt.Instance.closeUI(zt.Offline);
        }
        onReceiveBtn() {
            pe.Instance.playUIClick(), this.curShareADPos = ae.OfflineAD, it.Instance.showVideoOrrShare(this.curShareADPos);
        }
        onShowAdCompleted(e) {
            e === this.curShareADPos && (_.Instance.updateWithChangeData({
                gold: 3 * this.coin
            }), Wt.Instance.showTips("领取3倍收益成功"), pe.Instance.playSound(de.Coin), Wt.Instance.closeUI(zt.Offline));
        }
    }
    class Ot extends yt.fyhd.FyhdTuiView2UI {
        constructor() {
            super(), this.tuiData = [], this.listData = [], this.from = ce.Unkonw;
        }
        init(e) {
            this.cb = e.cb, this.from = e.from, this.regiestEvent(), this.initFyhdTui();
        }
        uninit(e) {
            this.unregiestEvent();
        }
        regiestEvent() {
            this.backBtn.on(Laya.Event.CLICK, this, this.onBackClose);
        }
        unregiestEvent() {
            this.backBtn.off(Laya.Event.CLICK, this, this.onBackClose);
        }
        onBackClose() {
            pe.Instance.playUIClick(), this.doBack();
        }
        doBack() {
            this.cb && this.cb(), Wt.Instance.closeUI(zt.FyhdTui2);
        }
        initFyhdTui() {
            if (C.Instance.isOpenSDK() && C.Instance.tuiInfo && C.Instance.tuiInfo.length > 0) {
                let e = C.Instance.tuiInfo;
                console.log("Taylor --- data= ", e), this.tuiData = e.slice(0, 4), console.log("Taylor --- this.tuiBox= ", this.tuiBox);
                for (let e = 0; e < this.tuiBox.numChildren; e++) {
                    let t = this.tuiBox.getChildAt(e), n = e % this.tuiData.length, i = this.tuiData[n];
                    if (!i) return;
                    t.skin = i.url, t.offAll(null), t.on(Laya.Event.CLICK, this, function() {
                        gt.navigateToMiniProgram(i, this.from);
                    });
                }
                return this.listData = e.slice(4), this.tuiList.visible = !0, this.tuiList.vScrollBarSkin = "", 
                this.tuiList.array = this.listData, this.tuiList.selectEnable = !0, void (this.tuiList.renderHandler = new Laya.Handler(this, function(e, t) {
                    let n = t % this.listData.length, i = this.listData[n];
                    if (!i) return;
                    let a = e.getChildByName("img"), s = e.getChildByName("nameBg"), o = s.getChildByName("name");
                    a.skin = i.url, s.skin = "fyhd/name_bg_" + t % 5 + ".png", o.text = i.name, e.offAll(null), 
                    e.on(Laya.Event.CLICK, this, function() {
                        gt.navigateToMiniProgram(i, this.from);
                    });
                }));
            }
            this.doBack();
        }
    }
    !function(e) {
        e.JumpSuccess = "JumpSuccess", e.JumpFail = "JumpFail", e.JumpCancel = "JumpCancel", 
        e.UpdateData = "UpdateData";
    }(ft || (ft = {})), function(e) {
        e.JumpSuccess = "跳转成功", e.JumpFail = "跳转失败", e.Vedio = "拉取视频";
    }(It || (It = {})), function(e) {
        e.unkonw = "未知", e.gameIcon = "游戏界面抖动Icon", e.settlementClose = "结算界面关闭", e.gradeupClose = "段位升级界面关闭", 
        e.jumpFail = "icon跳转失败后界面", e.homeGift = "首页礼包", e.homeIcon = "首页抖动Icon", e.homeList = "首页底部滚动横幅", 
        e.homeLeft = "首页侧拉热门按钮", e.backHome = "游戏中小屋按钮", e.reliveList = "复活界面", e.settlementIcon = "结算界面抖动Icon", 
        e.settlementList = "结算界面滚动列表", e.box = "宝箱界面", e.notEnough = "金币不足", e.offline = "离线收益", 
        e.banner = "banner", e.recent = "最近小程序", e.noTouch = "静止插屏页面", e.homeOut = "首页退出按钮", 
        e.gameOut = "游戏中退出按钮", e.settlementShare = "好友邀请";
    }(St || (St = {}));
    class Nt {
        constructor() {
            this.appTitle = "", this.appName = "", this.appID = "", this.advID = "", this.appIcon1 = "", 
            this.linkPath = "", this.appIconArray = [], this.fav = !1, this.isQy = !1;
        }
        get appIcon() {
            if (this.appIconArray && this.appIconArray instanceof Array) {
                let e = y.getRandom(0, this.appIconArray.length - 1);
                return e > this.appIconArray.length - 1 && (e = 0), this.appIconArray[e];
            }
            return this.appIcon1;
        }
    }
    class Ht {
        constructor() {
            this.qyInfo = null, this.tuiData = [], this.qyTuiData = {};
        }
        static get Instance() {
            return null === Ht._instance && (Ht._instance = new Ht()), Ht._instance;
        }
        static qySdk() {
            return window.G_AdvMgr;
        }
        getQySdk(e) {
            let t = [ {
                index: "4df4c13a66543c0d8dccc1d639e78784"
            }, {
                lunbo: "0038e0ab55f39bbc5be15ecd345724dc"
            }, {
                fail: "6e17e6cd5b8ff1301621fe9b70ab161e"
            }, {
                settle: "e6d22d13ec1818bf69b13aaa989381d9"
            }, {
                out: "25de4a26d595b86b945682df9083be2f"
            }, {
                friend: "902be301e9bb18eadec867ed180df6a9"
            }, {
                fubiao: "f695a4860ef7333511054d687874ad50"
            } ], n = Ht.qySdk() || null;
            n ? n.getIconButtons(t, t => {
                console.log(t), this.qyInfo = Object.assign({}, t), this.referashQyData(), e && e();
            }) : e && e();
        }
        referashQyData() {
            this.qyInfo && (this.qyTuiData = {}, this.setQyItems("index"), this.setQyItems("lunbo"), 
            this.setQyItems("fail"), this.setQyItems("settle"), this.setQyItems("out"), this.setQyItems("friend"), 
            this.setQyItems("fubiao"));
        }
        setQyItems(e) {
            if (this.qyInfo) {
                let t = this.qyInfo[e];
                if (t) {
                    let n = t.map(e => {
                        let t = new Nt();
                        return t.appTitle = e.title || "", t.appName = e.title || "", t.appID = e.appid || "", 
                        t.appIcon1 = e.logo_url || "", t.linkPath = e.path || "", t.appIconArray = e.logo_url || [], 
                        t.fav = !1, t.advID = e.adv_id, t.isQy = !0, t;
                    });
                    this.qyTuiData[e] = n;
                }
            }
        }
        static getQyJudgeRegion(e, t, n = null) {
            return new Promise((e, t) => {
                new S((n, i) => {
                    n ? t(n) : 200 === i.Status ? e(i.Result) : t(i);
                });
            });
        }
        get canShowWXRecommend() {
            return ct.IsWeChat() && this.canShowRecommend;
        }
        get canShowRecommend() {
            return (!ct.IsWeChat() || !p.chidState) && (!it.Instance.wxCheck() && d.vGameInfo.sRecommend);
        }
        getInfo(e) {
            let t = [];
            return ct.IsWeChat() ? t = this.qyTuiData[e] || [] : ct.IsTouTiao() && (t = this.tuiData), 
            t;
        }
        getShowInfo(e) {
            return this.qyInfo && this.qyInfo[e] ? this.qyInfo[e] : null;
        }
        getShowName(e) {
            return e.title;
        }
        getShowUrl(e) {
            if (e.logo_url) {
                if (e.logo_url instanceof Array) {
                    let t = y.nextNumber(0, e.logo_url.length - 1);
                    return e.logo_url[t];
                }
                return e.logo_url;
            }
            return null;
        }
        static getShowUrl2(e) {
            if (e.logo_attr && e.logo_attr instanceof Array && e.logo_attr.length) {
                let t = y.nextNumber(0, e.logo_attr.length - 1);
                return e.logo_attr[t];
            }
            if (e.logo_url) {
                if (e.logo_url instanceof Array) {
                    let t = y.nextNumber(0, e.logo_url.length - 1);
                    return e.logo_url[t];
                }
                return e.logo_url;
            }
            return null;
        }
        referashData() {
            return new Promise((t, n) => {
                let i = [];
                ct.IsWeChat() || ct.IsTouTiao() && (i = d.vGameInfo.ttTuiInfo);
                let a = i.map(e => {
                    let t = new Nt();
                    return t.appTitle = e.name || "", t.appName = e.name_true || "", t.appID = e.pid || "", 
                    t.appIcon1 = e.url || "", t.linkPath = e.path || "", t.appIconArray = e.urls || [], 
                    t.fav = e.fav || !1, t.advID = "", t.isQy = !1, t;
                });
                this.tuiData = a, e.Instance.event(ft.UpdateData), t({
                    tuiData: this.tuiData
                });
            });
        }
        static getScorllData(e, t = 60) {
            if (e) {
                let n = [].concat(e), i = [];
                for (;n.length < t; ) {
                    0 === i.length && (i = [].concat(e));
                    let t = y.nextNumber(0, i.length - 1);
                    t > i.length && (t = 0), n.push(i[t]), i.splice(t, 1);
                }
                return n;
            }
            return [];
        }
        static checkTuiItemRed(e, t = -1) {
            e && (-1 == t && (t = y.nextNumber(0, 100) < 20 ? 1 : 0), t && t > 0 ? (e.skin = 1 == t ? "dsdk/icon-hot.png" : "dsdk/icon-new.png", 
            e.visible = !0) : e.visible = !1);
        }
        doJumpSuccess(e, t) {
            let n = It.JumpSuccess, i = {
                "游戏": e.appTitle,
                "跳转来源": t
            };
            this.report(n, i), console.log(n), console.log(i);
        }
        doJumpFail(e, t) {
            let n = It.JumpFail, i = {
                "游戏": e.appTitle,
                "跳转来源": t
            };
            this.report(n, i), console.log(n), console.log(i), this.canFailOpen(t) && Wt.Instance.openUIUnique(zt.MatrixTui1, {
                cb: null,
                from: St.jumpFail
            });
        }
        report(e, t) {
            ct.IsWeChat() && ct.Instance.report(`qy-${e}`, t);
        }
        canFailOpen(e) {
            return e == St.homeGift || e == St.homeIcon || e == St.homeList || e == St.homeLeft || e == St.backHome || e == St.reliveList || e == St.settlementIcon || e == St.settlementList || e == St.box || e == St.notEnough || e == St.offline;
        }
        randomItem() {
            if (ct.IsWeChat()) {
                let e = this.getInfo("index");
                if (e && e.length) return Ke.randomObj(e);
            }
            return null;
        }
        randomJump(e) {
            if (!ct.IsWeChat()) return;
            this.randomItem();
        }
    }
    Ht.useThirdJudge = !1, Ht._instance = null;
    class Gt extends yt.matrix.MatrixTuiView1UI {
        constructor() {
            super(...arguments), this.from = ce.Unkonw, this.firstClick = !0;
        }
        init(e) {
            this.cb = e.cb, this.from = e.from, this.regiestEvent(), this.initView(), this.timer.once(2e3, this, () => {
                this.btnClose.visible = !0;
            });
        }
        uninit() {
            Laya.timer.clearAll(this), this.unRegiestEvent();
        }
        regiestEvent() {
            this.btnClose.on(Laya.Event.CLICK, this, this.onBtnBack), this.btnHome.on(Laya.Event.CLICK, this, this.onBtnClose), 
            this.btnContinue.on(Laya.Event.CLICK, this, this.onBtnContinue);
        }
        unRegiestEvent() {
            this.btnClose.off(Laya.Event.CLICK, this, this.onBtnBack), this.btnHome.off(Laya.Event.CLICK, this, this.onBtnClose), 
            this.btnContinue.off(Laya.Event.CLICK, this, this.onBtnContinue);
        }
        onBtnClose() {
            if (pe.Instance.playUIClick(), this.firstClick) {
                this.firstClick = !1;
                let e = C.Instance.tuiInfo;
                console.log("Taylor --- data= ", e);
                let t = Math.floor(10 * Math.random());
                console.log("Taylor --- random= " + t);
                let n = e[t];
                gt.navigateToMiniProgram(n, this.from);
            } else this.doCloseAction();
        }
        onBtnBack() {
            pe.Instance.playUIClick(), this.doCloseAction();
        }
        doCloseAction() {
            this.cb && this.cb(), Wt.Instance.isUIOpen(zt.Settement) ? Wt.Instance.closeUI(zt.MatrixTui1) : Wt.Instance.isUIOpen(zt.Game) ? (Wt.Instance.toUI(zt.Game, null), 
            Laya.timer.once(1e3, Ht.Instance, () => {
                Wt.Instance.openUI(zt.MatrixTui8);
            })) : Wt.Instance.isUIOpen(zt.Game) ? Wt.Instance.isUIOpen(zt.Game) && (Wt.Instance.closeUI(zt.MatrixTui1), 
            Laya.timer.once(1e3, Ht.Instance, () => {
                Wt.Instance.openUI(zt.MatrixTui8);
            })) : Wt.Instance.toUI(zt.Game, null);
        }
        onBtnContinue() {
            this.onBtnClose();
        }
        initView() {
            this.initFriendView(), this.initHotView(), this.boxBottom.visible = !1, Laya.timer.once(500, this, () => {
                this.boxBottom.visible = !0;
            });
        }
        initFriendView() {
            let e = C.Instance.tuiInfo;
            this.friendList.hScrollBarSkin = "", this.friendList.updateDataSource(Ht.getScorllData(e)), 
            this.friendList.selectEnable = !0, this.friendList.renderHandler = new Laya.Handler(this, function(e, t) {
                let n = e.dataSource;
                if (!n) return;
                let i = e.getChildByName("imageGif");
                i && i.updateImage(n.url);
                let a = e.getChildByName("labName");
                a && (a.text = n.name), e.offAll(null), e.on(Laya.Event.MOUSE_DOWN, this, function() {
                    gt.navigateToMiniProgram(n, this.from);
                });
            });
        }
        initHotView() {
            let e = [].concat(C.Instance.tuiInfo);
            this.hotList.vScrollBarSkin = "", this.hotList.updateDataSource(Ht.getScorllData(e)), 
            this.hotList.selectEnable = !0, this.hotList.renderHandler = new Laya.Handler(this, function(e, t) {
                let n = e.dataSource;
                if (!n) return;
                let i = e.getChildByName("imageIcon"), a = e.getChildByName("imageNameBg"), s = a.getChildByName("labName");
                i.updateImage(n.url), a.skin = "matrix/img_matrix_name_bg_" + t % 5 + ".png", s.text = n.name, 
                e.offAll(null), e.on(Laya.Event.MOUSE_DOWN, this, function() {
                    gt.navigateToMiniProgram(n, this.from);
                });
            });
            let t = e[Math.floor(10 * Math.random())];
            gt.navigateToMiniProgram(t, ce.NoTouch);
        }
    }
    class Yt extends yt.matrix.MatrixTuiView4UI {
        constructor() {
            super(...arguments), this.from = ce.recent, this.viewData = null, this.callback = null, 
            this.callback1 = null;
        }
        init(e) {
            this.viewData = e, e.callback && (console.log("Taylor ---- callback"), this.callback = e.callback), 
            e.callback1 && (console.log("Taylor ---- callback1"), this.callback1 = e.callback1), 
            this.regiestEvent(), this.initView(), this.closeBtn.visible = !1, this.timer.once(2e3, this, () => {
                this.closeBtn.visible = !0;
            });
        }
        uninit() {
            this.unregisterEvent();
        }
        regiestEvent() {
            this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn);
        }
        unregisterEvent() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtn);
        }
        onCloseBtn() {
            // pe.Instance.playUIClick(), this.callback && (Wt.Instance.closeUI(zt.MatrixTui4), 
            // console.log("Taylor ---- 111"), p.isSettle = !0, tt.Instance.checkShowEggView(() => {
            //     this.callback && this.callback();
            // }) || this.callback && this.callback()), this.callback1 && (console.log("Taylor ---- 222"), 
            // Wt.Instance.closeUI(zt.MatrixTui4), p.isSettle = !0, tt.Instance.checkShowEggView(() => {
            //     this.callback1 && this.callback1();
            // }) || this.callback1 && this.callback1());
        }
        initView() {
            let e = [].concat(C.Instance.tuiInfo);
            this.listView.vScrollBarSkin = "", this.listView.dataSource = e, this.listView.selectEnable = !0;
            let t = y.getRandom(0, e.length - 1);
            this.listView.renderHandler = new Laya.Handler(this, function(n, i) {
                let a = (i + t) % e.length, s = e[a];
                if (!s) return;
                let o = n.getChildByName("appIcon"), r = n.getChildByName("appLabel"), l = n.getChildByName("favImage");
                o.updateImage(s.url), r.text = s.name, l.visible = s.fav, n.offAll(null), n.on(Laya.Event.CLICK, this, function() {
                    gt.navigateToMiniProgram(s, this.from);
                });
            });
            let n = Math.floor(10 * Math.random()), i = e[n];
            gt.navigateToMiniProgram(i, ce.NoTouch);
        }
    }
    class Xt extends yt.matrix.MatrixTuiView8UI {
        constructor() {
            super(...arguments), this.item = [];
        }
        init(e) {
            this.registerEvent(), this.initView();
        }
        uninit() {
            this.unregisterEvent();
        }
        registerEvent() {
            this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn), this.okBtn.on(Laya.Event.CLICK, this, this.onOkBtn);
        }
        unregisterEvent() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtn), this.okBtn.off(Laya.Event.CLICK, this, this.onOkBtn);
        }
        onCloseBtn() {
            pe.Instance.playUIClick(), Wt.Instance.closeUI(zt.MatrixTui8);
        }
        onOkBtn() {
            pe.Instance.playUIClick(), gt.navigateToMiniProgram(this.item, ce.settlementShare), 
            Wt.Instance.closeUI(zt.MatrixTui8);
        }
        initView() {
            this.initFriend();
            let e = C.Instance.tuiInfo;
            console.log("Taylor --- data= ", e);
            let t = Math.floor(10 * Math.random());
            console.log("Taylor --- random= " + t);
            let n = e[t];
            this.item = n, this.appIcon.updateImage(n.url), this.appName.text = n.name;
        }
        initFriend() {
            var e = f.Instance.getAINameCount() - 1;
            let t = Math.round(Math.random() * e), n = f.Instance.getAIPlayerInfo(t);
            n && (this.fhead.skin = gt.getAvatarUrl(n.avatar), this.fname.text = n.name, this.tip.text = "您的好友" + n.name + "邀请您加入:");
        }
    }
    class zt {
        static initConfig() {
            zt.Load.cls = xt, zt.Game.cls = Dt, zt.Settement.cls = Vt, zt.Skin.cls = Et, zt.Try.cls = Pt, 
            zt.RoleProgress.cls = Mt, zt.Egg.cls = Rt, zt.FyhdTui2.cls = Ot, zt.Offline.cls = Ut, 
            zt.MatrixTui1.cls = Gt, zt.MatrixTui4.cls = Yt, zt.MatrixTui8.cls = Xt;
        }
    }
    zt.Load = {
        id: 1,
        cls: null,
        res: null
    }, zt.Game = {
        id: 2,
        cls: null,
        res: null
    }, zt.Settement = {
        id: 3,
        cls: null,
        res: null
    }, zt.Skin = {
        id: 4,
        cls: null,
        res: null
    }, zt.Try = {
        id: 5,
        cls: null,
        res: null
    }, zt.RoleProgress = {
        id: 6,
        cls: null,
        res: null
    }, zt.Egg = {
        id: 7,
        cls: null,
        res: null
    }, zt.Offline = {
        id: 8,
        cls: null,
        res: null
    }, zt.FyhdTui2 = {
        id: 9,
        cls: null,
        res: null
    }, zt.MatrixTui1 = {
        id: 10,
        cls: null,
        res: null
    }, zt.MatrixTui4 = {
        id: 11,
        cls: null,
        res: null
    }, zt.MatrixTui8 = {
        id: 12,
        cls: null,
        res: null
    };
    class Wt {
        constructor() {
            this.hideBanner = !1, this.adpaterArray = [], this.uiArray = [], this.debugStr = "", 
            this.maskView = null, this.arrTips = null, this.reset(), this.hideBanner = !1;
        }
        static get Instance() {
            return null == Wt._instance && (Wt._instance = new Wt(), Wt._instance.init()), Wt._instance;
        }
        init() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.onScreenResize);
        }
        addAdapter(e) {
            this.adpaterArray.push(e);
        }
        clearAdapterOnUI(e) {
            for (var t = e.uiname, n = this.adpaterArray.length - 1; n >= 0; n--) this.adpaterArray[n].uiname == t && this.adpaterArray.splice(n, 1);
        }
        onScreenResize() {
            for (var e = this.adpaterArray.length - 1; e >= 0; e--) this.adpaterArray[e].adapter();
        }
        reset() {
            this.uiArray = [], this.adpaterArray = [];
        }
        pushUI(e) {
            this.uiArray.push(e);
        }
        toUI(e, t) {
            for (var n = this.uiArray.length - 1; n >= 0; n--) {
                var i = this.uiArray[n];
                this.uninitUI(i);
            }
            this.uiArray.length = 0, this.openUI(e, t);
        }
        openUIUnique(e, t, n = !0) {
            0 == this.isUIOpen(e) && this.openUI(e, t, n);
        }
        checkBanner() {
            it.Instance.isShowingBanner() && (it.Instance.hideBanner(), this.hideBanner = !0);
        }
        restoreBanner() {
            if (this.hideBanner) for (let e = this.uiArray.length - 1; e >= 0; e--) {
                let t = this.uiArray[e];
                if (t.visible) {
                    let e = 0;
                    t.getPinY && (e = t.getPinY());
                    let n = t.uiname && t.uiname.id || 0;
                    it.Instance.restoreBanner(n, e);
                    break;
                }
            }
        }
        openUI(e, t = null, n = !0) {
            this.checkBanner(), null != e.res ? Laya.loader.load(e.res, Laya.Handler.create(null, function() {
                Wt.Instance.createUI(e, t, n);
            }), null) : this.createUI(e, t, n);
        }
        createUI(n, i, a = !0) {
            var s = new n.cls();
            if (null != s) {
                s.uiname = n;
                let o = !0;
                switch (n) {
                  case zt.Load:
                    s.zOrder = Wt._loadingViewZorder;
                    break;

                  default:
                    s.zOrder = Wt._viewZorder++;
                }
                if (a && this.uiArray.length > 0) {
                    let n = this.uiArray[this.uiArray.length - 1];
                    n.visible && (null !== n.didHide && void 0 !== n.didHide && n.didHide(), e.Instance.event(t.HideView, n));
                }
                Laya.stage.addChild(s), this.pushUI(s), s.visible = a;
                let r = 0;
                if (s.getPinY && (r = s.getPinY()), e.Instance.event(t.OpenView, n), null != s.init && a && s.init(i), 
                o = this.canShowBaner(s), n === zt.Load && (o = !1), C.Instance.isOpenSDK() && (3 == n.id || 5 == n.id || 6 == n.id)) return;
                a && o && it.Instance.showADBanner(n.id, r), a && (e.Instance.event(t.ShowView, s), 
                null !== s.didShow && void 0 !== s.didShow && a && s.didShow());
            }
        }
        closeUI(n) {
            for (var i = this.uiArray.length - 1; i >= 0; i--) {
                var a = this.uiArray[i];
                if (a.uiname == n) {
                    this.uninitUI(a), this.uiArray.splice(i, 1);
                    break;
                }
            }
            for (let n = this.uiArray.length - 1; n >= 0; n--) {
                let i = this.uiArray[n];
                if (i.visible) {
                    if (null !== i.didShow && void 0 !== i.didShow && i.didShow(), e.Instance.event(t.ShowView, i), 
                    this.hideBanner) {
                        let e = 0;
                        i.getPinY && (e = i.getPinY());
                        let t = i.uiname && i.uiname.id || 0;
                        it.Instance.restoreBanner(t, e);
                    }
                    break;
                }
            }
        }
        isUIOpen(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                if (this.uiArray[t].uiname === e) return !0;
            }
            return !1;
        }
        isTopUI(e) {
            for (let t = this.uiArray.length - 1; t >= 0; t--) {
                let n = this.uiArray[t];
                if (n.visible) return n.uiname === e;
            }
            return !1;
        }
        showUI(n, i) {
            for (var a = this.uiArray.length - 1; a >= 0; a--) {
                var s = this.uiArray[a];
                if (s.uiname == n) {
                    null != s.init && s.init(i), null !== s.didShow && s.didShow(), e.Instance.event(t.ShowView, s), 
                    s.visible = !0, s.zOrder = Wt._viewZorder++;
                    let a = 0;
                    return s.getPinY && (a = s.getPinY()), this.canShowBaner(s) && (console.log("showBanner"), 
                    it.Instance.showADBanner(n.id, a)), e.Instance.event(t.OpenView, n), !0;
                }
            }
            return !1;
        }
        hideUI(n) {
            for (var i = this.uiArray.length - 1; i >= 0; i--) {
                var a = this.uiArray[i];
                if (a.uiname == n) {
                    a.visible = !1, null !== a.didHide && a.didHide(), e.Instance.event(t.HideView, a), 
                    null !== a.uninit && a.uninit(), this.checkBanner();
                    break;
                }
            }
            for (let e = this.uiArray.length - 1; e >= 0; e--) {
                let t = this.uiArray[e];
                if (t.visible) {
                    if (this.hideBanner) {
                        let e = 0;
                        t.getPinY && (e = t.getPinY());
                        let n = t.uiname && t.uiname.id || 0;
                        it.Instance.restoreBanner(n, e);
                    }
                    break;
                }
            }
        }
        findUI(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                var n = this.uiArray[t];
                if (n.uiname == e) return n;
            }
            return null;
        }
        uninitUI(e) {
            this.clearAdapterOnUI(e), null != e.uninit && e.uninit(), Laya.timer.clearAll(e), 
            it.Instance.hideBanner(e.uiname.id), e.removeSelf(), e.destroy();
        }
        update() {
            for (var e = this.uiArray.length - 1; e >= 0; e--) {
                var t = this.uiArray[e];
                null != t.update && t.update();
            }
        }
        showDialog(e) {}
        showMask(e) {
            if (e && null == this.maskView) {
                var t = new Laya.Sprite();
                this.maskView = t, t.graphics.drawRect(-530, -180, 2340, 1080, "#949494"), t.alpha = .5, 
                t.mouseThrough = !1, t.mouseEnabled = !0;
                var n = new Laya.HitArea();
                n.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), t.hitArea = n, 
                t.zOrder = Wt._dialogZorder, Laya.stage.addChild(this.maskView);
            } else e || null == this.maskView || (this.maskView.removeSelf(), this.maskView.destroy(), 
            this.maskView = null);
        }
        showTips(e, t = 600, n = 30, i = "#FFFFFF") {
            var a = this.arrTips;
            let s = null;
            if (null == a) {
                a = [];
                var o = new Laya.Box();
                Laya.stage.addChild(o), o.zOrder = Wt._tipsZorder;
                for (var r = 0; r < 3; r++) {
                    (s = new Laya.Box()).width = 600, s.height = 114, s.visible = !1;
                    {
                        let e = new Laya.Image();
                        e.skin = "common/bg_toast.png", e.width = 600, e.height = 114, s.addChild(e);
                        let t = new Laya.Text();
                        t.name = "txt", t.fontSize = 30, t.color = "#FFFFFF", t.width = 600, t.height = 114, 
                        t.align = "center", t.valign = "middle", s.addChild(t);
                    }
                    a.push(s), o.addChild(s);
                }
                this.arrTips = a, o.width = 600, o.centerX = 0, o.centerY = 0;
            }
            if (0 != a.length) {
                {
                    let t = (s = a.shift()).getChildByName("txt");
                    t.text = e, t.fontSize = n || 30, t.color = i || "#FFFFFF";
                }
                t = t || 600, s.visible = !0, s.alpha = 1, Laya.Tween.to(s, {
                    alpha: 0
                }, t, null, Laya.Handler.create(this, function(e) {
                    e.visible = !1, a.push(e);
                }, [ s ]), 1e3);
            }
        }
        canShowBaner(e) {
            return !0;
        }
    }
    Wt._viewZorder = 1e3, Wt._loadingViewZorder = 2999, Wt._tipsZorder = 3e3, Wt._dialogZorder = 3100, 
    Wt._maskZorder = 3100, Wt._instance = null, Wt._debugTxt = null;
    class Kt extends Laya.Box {
        constructor() {
            super(), this.uiname = "", this.uiname = null, Laya.timer.once(20, this, this.adapter);
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
        static getBangSafeOffX() {
            return Laya.stage.width / Laya.stage.height < 2 ? 0 : 132 / 2436 * Laya.stage.width;
        }
        adapter() {
            if ("scale" === this.name) {
                var e = Laya.stage.width / Laya.stage.designWidth, t = Laya.stage.height / Laya.stage.designHeight, n = e > t ? e : t;
                return this.scaleX = n, this.scaleY = n, this.uiname = this.parent.uiname, void Wt.Instance.addAdapter(this);
            }
            Laya.stage.designHeight, Laya.stage.designWidth;
            if (!(Laya.stage.height / Laya.stage.width < 2)) {
                var i = 132 / 2436 * Laya.stage.height;
                isNaN(this.top) || (this.top = i + this.top);
            }
        }
    }
    class qt extends yt.matrix.TuiCloseBtnUI {
        onAwake() {
            Ht.Instance.canShowRecommend || (this.visible = !1);
        }
        onEnable() {
            this.regiestEvent();
        }
        onDisable() {
            this.unregiestEvent();
        }
        regiestEvent() {
            this.on(Laya.Event.CLICK, this, this.onBtnClick);
        }
        unregiestEvent() {
            this.off(Laya.Event.CLICK, this, this.onBtnClick);
        }
        onBtnClick() {
            pe.Instance.playUIClick(), Wt.Instance.openUI(zt.MatrixTui1, {
                callback: () => {}
            });
        }
    }
    class Jt extends Laya.List {
        constructor() {
            super(...arguments), this.isForward = !0;
        }
        onEnable() {
            // this.on(Laya.Event.MOUSE_UP, this, this.doAnimate), this.on(Laya.Event.MOUSE_OUT, this, this.doAnimate);
        }
        onDisable() {
            // Laya.timer.clear(this, this.doAnimate), Laya.timer.clearAll(this), this.off(Laya.Event.MOUSE_UP, this, this.doAnimate), 
            // this.off(Laya.Event.MOUSE_OUT, this, this.doAnimate);
        }
        updateDataSource(e) {
            // this.array = e, Laya.timer.once(500, this, this.doAnimate);
        }
        doAnimate() {
            // if (!this.destroyed && this.array.length > 0) {
            //     let e = this._isVertical ? this.repeatX : this.repeatY, t = Math.floor(this._scrollBar.value / this._cellSize), n = 0;
            //     if (this.isForward) {
            //         let t = 0;
            //         t = this._isVertical ? Math.ceil(this.displayHeight / this._cellSize) * e : Math.ceil(this.displayWidth / this._cellSize) * e, 
            //         n = this.array.length - t;
            //     }
            //     let i = Math.abs(t - Math.ceil(n / e)), a = 15 * this._cellSize * i;
            //     this.tweenTo(n, a, Laya.Handler.create(this, () => {
            //         this.destroyed || (this.isForward = !this.isForward, Laya.timer.once(100, this, this.doAnimate));
            //     }));
            // }
        }
    }
    class jt {
        static onMobile() {
            return Laya.Browser.onIOS || Laya.Browser.onAndroid || Laya.Browser.onMobile;
        }
        static finishVideo(n) {
            e.Instance.event(t.ShowAdCompleted, n), e.Instance.event(t.CloseShowAd, n);
        }
        static getShareInfoByCfg(e) {
            if (e && e.imgUrl && e.imgUrl.length && e.shareContent && e.shareContent.length) return {
                imgUrl: e.imgUrl,
                shareContent: e.shareContent
            };
            let t = d.ShareInfoList.length;
            if (t > 0) {
                let e = Math.floor(Math.random() * t);
                if (ct.IsTouTiao() && (e = 0), e < t) return d.ShareInfoList[e];
            }
            return {
                imgUrl: "",
                shareContent: ""
            };
        }
        static getDeviceRatio() {
            return Laya.stage.height / Laya.stage.width;
        }
        static getBannerOffset() {
            return 20;
        }
        static getNormalBannerOffset() {
            return 40 / p.windowWidth * Laya.stage.width;
        }
        static bannerMoveY(e = 0) {
            return jt.getNormalBannerOffset() + e;
        }
        static checkOverDay() {
            let e = parseInt(Laya.LocalStorage.getItem("curPlayDay") || "0"), t = Date.now(), n = !u.isSameDay(t, e);
            return n && Laya.LocalStorage.setItem("curPlayDay", t.toString()), n;
        }
        static finishShare(n, i = !1, a = !1) {
            $t.Instance.onShowAdCompleted(n, a), e.Instance.event(t.ShowAdCompleted, n), e.Instance.event(t.CloseShowAd, n);
        }
        static finishShareVideo(n) {
            e.Instance.event(t.ShowShareVideoCompleted, n), e.Instance.event(t.CloseShowShareViedo, n);
        }
        static subString(e, t, n) {
            for (var i = 0, a = "", s = /[^\x00-\xff]/g, o = "", r = e.replace(s, "**").length, l = 0; l < r && (null == (o = e.charAt(l).toString()).match(s) ? i++ : i += 2, 
            !(i > t)); l++) a += o;
            return n && r > t && (a += "..."), a;
        }
        static clearDictionary(e) {
            for (var t in e) delete e[t];
        }
        static arrayRemove(e, t) {
            let n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
        }
        static setVector3(e, t, n, i) {
            e.x = t, e.y = n, e.z = i;
        }
        static Vector3MulNumber(e, t) {
            return new Laya.Vector3(e.x * t, e.y * t, e.z * t);
        }
        static uuid() {
            var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = [];
            for (e = 0; e < 32; e++) n[e] = t[0 | 16 * Math.random()];
            return n.join("");
        }
    }
    class Qt {
        constructor() {
            this.videoCfgData = null, this.bannerCfgData = null, this.signCfgData = {}, this.gunCfgData = {}, 
            this.roleCfgData = {}, this.randomBannerCfgData = null, this.signRed = !0, this.ainameCfgData = {}, 
            this.pattersCfgData = {}, this.signDaynfo = "signDaynfo", this.maxUserGrade = 0, 
            this.levelConfig = {
                1: [ "p_3_1", "p_4_1" ],
                2: [ "p_3_3", "p_5_1" ],
                3: [ "p_4_2", "p_5_2" ],
                4: [ "p_8_4", "p_3_2" ],
                5: [ "p_6_4", "p_8_3" ],
                6: [ "p_6_5", "p_9_1" ],
                7: [ "p_6_1", "p_9_2" ],
                8: [ "p_5_4", "p_3000_2" ],
                9: [ "p_510_1", "p_10_2" ],
                11: [ "p_16_1", "p_9_2" ],
                12: [ "p_6_3", "p_8_4" ],
                13: [ "p_511_1", "p_5_2" ],
                14: [ "p_3000_2", "p_6_5" ],
                15: [ "p_8_3", "p_5_4" ],
                16: [ "p_9_2", "p_3_3" ],
                17: [ "p_5_2", "p_6_5" ],
                18: [ "p_6_3", "p_6_5" ],
                19: [ "p_4_1", "p_6_1" ],
                21: [ "p_3000_2", "p_6_4" ],
                20: [ "p_11_1", "p_10_4" ]
            }, this.loadData(), this.signRed = !this.todayIsSigned(), Laya.timer.loop(1e4, this, this.checkOverDay);
        }
        static get Instance() {
            return null === Qt._instance && (Qt._instance = new Qt()), Qt._instance;
        }
        loadData() {
            let e = m.RES_GAME_DATA;
            // d.UseRemoteRes && (e = "/" + e);
            let n = Laya.loader.getRes(e)
            //  n = this.processData(t || "");
            if (n) {
                if (this.videoCfgData = n.videoShareCfg, this.bannerCfgData = n.bannerCfg, ct.IsQutoutiao() && this.bannerCfgData.push({
                    pos: 2,
                    name: "游戏界面",
                    adunit: "adunit-295e8d695c6018da",
                    hAlign: 1,
                    vAlign: 2,
                    w: 375,
                    xOffset: 0,
                    yOffset: 0,
                    canRandom: !0,
                    tadunit: "",
                    qadunit: "c1c966d4482233e456d8a57ecf5c7c3a"
                }), this.signCfgData = n.sign, this.gunCfgData = n.gunCfg, this.roleCfgData = n.roleCfg, 
                this.pattersCfgData = n.patternsConfig, this.bannerCfgData && this.bannerCfgData.length) {
                    this.randomBannerCfgData = [];
                    for (let e in this.bannerCfgData) {
                        let t = this.bannerCfgData[e];
                        this.randomBannerCfgData.push(t);
                    }
                }
                this.ainameCfgData = n.aiName;
            }
            Laya.Loader.clearRes(e), this.init();
        }
        init() {
            y.initSinCosVal();
        }
        getVideoShareCfg(e) {
            if (null == this.videoCfgData) return null;
            for (var t = 0; t < this.videoCfgData.length; t++) if (this.videoCfgData[t].pos == e) return this.videoCfgData[t];
            return null;
        }
        getBannerCfg(e) {
            if (null == this.bannerCfgData) return null;
            for (var t = 0; t < this.bannerCfgData.length; t++) if (this.bannerCfgData[t].pos == e) return this.bannerCfgData[t];
            return null;
        }
        getAIPlayerInfo(e) {
            return e >= 0 && e < this.ainameCfgData.length ? this.ainameCfgData[e] : (console.error("ai name is null,index", e), 
            null);
        }
        getAINameCount() {
            return null == this.ainameCfgData ? 0 : this.ainameCfgData.length;
        }
        saveAutoShowSign() {
            let e = g.getDataValue(this.signDaynfo) || {}, t = new Date().getDate();
            e.showDay = t, g.setDataValue(this.signDaynfo, e);
        }
        doSignAction() {
            let e = g.getDataValue(this.signDaynfo);
            if (e) {
                let t = new Date(), n = e.signDay + 1;
                e.signDay = n;
                let i = t.getTime();
                e.ts = i;
            }
            this.signRed = !1, g.setDataValue(this.signDaynfo, e);
        }
        getSignDayInfo() {
            let e = 0, t = 0, n = g.getDataValue(this.signDaynfo), i = !1, a = new Date(), s = a.getDate(), o = 0, r = 0;
            if (n) {
                if (t = n.showDay, r = n.ts, i = !0, n.ts > 0) {
                    let t = new Date();
                    if (t.setTime(n.ts), a.getTime() < n.ts + 864e5 && s == t.getDate()) o = 1, e = n.signDay, 
                    i = !1; else {
                        (t = new Date()).setTime(n.ts + 864e5), s == t.getDate() && (e = n.signDay, i = !1);
                    }
                }
            } else i = !0;
            i && ((n = {}).signDay = e, n.showDay = t, n.ts = r, g.setDataValue(this.signDaynfo, n));
            let l = {
                signDay: e,
                signed: o,
                show: s == t ? 1 : 0
            };
            return this.signRed = !o, l;
        }
        processData(e) {
            let t = this.uncompile(e);
            return JSON.parse(t);
        }
        uncompile(e) {
            for (var t = String.fromCharCode(e.charCodeAt(0) - 1), n = 1; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) - 1);
            return t;
        }
        checkOverDay() {
            jt.checkOverDay() && e.Instance.event(t.OverDayEvent);
        }
        getRandomBannerCfg() {
            let e = this.randomBannerCfgData.length, t = Math.floor(Math.random() * (e - 1));
            if (t >= 0 && t < e) {
                let e = this.randomBannerCfgData[t];
                if (e && e.adunit && e.adunit.length) return this.randomBannerCfgData.splice(t, 1), 
                this.randomBannerCfgData.push(e), e;
            }
            return null;
        }
        isOverSeverTime(e = 7200) {
            if (p.severTime > 0) {
                let t = new Date().getTime();
                if (Math.abs(t - p.severTime) < 1e3 * e) return !1;
            }
            return !0;
        }
        todayIsSigned() {
            return this.getSignDayInfo().signed > 0;
        }
        getSegmentInfo(e, t) {
            return this.pattersCfgData && this.pattersCfgData[e] && this.pattersCfgData[e].segments && this.pattersCfgData[e].segments[t] ? this.pattersCfgData[e].segments[t] : null;
        }
        getLevelConfig(e) {
            return this.levelConfig ? this.levelConfig[e + 1] : null;
        }
        isBossLevel(e) {
            return (e + 1 + 10) % 20 == 0;
        }
        getLevelBg(e) {
            let t = e + 10;
            return Math.floor(t / 20) % 3 + 1;
        }
        getBossSkin(e) {
            let t = e + 10;
            return Math.floor(t / 20) % 5 + 1;
        }
        getCameraColor(e) {
            let t = e + 10, n = Math.floor(t / 20) % 5 + 1;
            return 1 === n ? new Laya.Vector4(233 / 255, 85 / 255, 69 / 255, 0) : 3 === n ? new Laya.Vector4(36 / 255, 38 / 255, 44 / 255, 0) : new Laya.Vector4(46 / 255, 170 / 255, 211 / 255, 0);
        }
        getGunInfo(e) {
            for (let t = 0; t < this.gunCfgData.length; t++) {
                let n = this.gunCfgData[t];
                if (n.id === e) return n;
            }
            return null;
        }
    }
    Qt.isLarger = !1, Qt._instance = null, function(e) {
        e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
    }(wt || (wt = {})), function(e) {
        e[e.Unknow = -1] = "Unknow", e[e.DefaultShare = 0] = "DefaultShare", e[e.SettlementSkipAD = 1] = "SettlementSkipAD", 
        e[e.SettlementDoubleAD = 2] = "SettlementDoubleAD", e[e.SkinTryAD = 3] = "SkinTryAD", 
        e[e.FreeTryAD = 4] = "FreeTryAD", e[e.RoleProgress = 5] = "RoleProgress", e[e.HomeShare = 6] = "HomeShare", 
        e[e.Egg = 7] = "Egg", e[e.OfflineAD = 8] = "OfflineAD";
    }(_t || (_t = {})), vt || (vt = {}), function(e) {
        e[e.Default = 0] = "Default", e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
    }(Ct || (Ct = {})), function(e) {
        e[e.Default = 0] = "Default", e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
    }(Lt || (Lt = {}));
    class $t {
        constructor() {
            this._lastCallTime = 0, this.videoMapping = {}, this.shareMapping = {}, this.clickShareCnts = {}, 
            this.canFetchVideo = !0, this._isShowingBanner = !1, this._inited = !1, this._callShare = !1, 
            this._callShareReward = !1, this._dailyShareMapping = {}, this._vsCount = 0, this._videoCount = 0, 
            this._vsFailShareCount = 0, this._lastCallTime = 0, this.videoMapping = {}, this.shareMapping = {}, 
            this.clickShareCnts = {}, this.canFetchVideo = !0, this._isShowingBanner = !1, this._dailyShareMapping = {}, 
            this._inited = !1, this._callShare = !1, this._callShareReward = !1, this.registerEvent(), 
            this.readVideoCache();
        }
        static get Instance() {
            return null == $t._instance && ($t._instance = new $t()), $t._instance;
        }
        registerEvent() {
            e.Instance.on(t.FetchVideoFail, this, this.onFetchVideoFail), e.Instance.on(t.GetFocus, this, this.onGameFocus), 
            e.Instance.on(t.OverDayEvent, this, this.resetByOverDay), e.Instance.on(t.FinishVideoAd, this, this.onFinishVideoAd);
        }
        unregisterEvent() {
            e.Instance.off(t.FetchVideoFail, this, this.onFetchVideoFail), e.Instance.off(t.GetFocus, this, this.onGameFocus), 
            e.Instance.off(t.FinishVideoAd, this, this.onFinishVideoAd);
        }
        canShowVideo() {
            return !0;
        }
        onFetchVideoFail(e) {
            ct.IsOppo() ? Wt.Instance.showTips("获取视频失败") : (this.canFetchVideo = !1, this.saveVideoCache(), 
            !this.isForceVideoWithError(e) && this.checkShowShareAfterVideoFail(e) || Wt.Instance.showTips("获取视频失败"));
        }
        saveShareCache(e, t) {
            this._dailyShareMapping[e] = {
                shared: !0,
                shareTime: t
            }, Laya.LocalStorage.setJSON("dailySharedMapping", this._dailyShareMapping);
        }
        saveVideoCache() {
            Laya.LocalStorage.setItem("canFetchVideo", (this.canFetchVideo ? 1 : 0).toString()), 
            Laya.LocalStorage.setItem("vsCount", this._vsCount.toString()), Laya.LocalStorage.setItem("vsFailShareCount", this._vsFailShareCount.toString()), 
            Laya.LocalStorage.setItem("videoCount", this._videoCount.toString());
        }
        readVideoCache() {
            var e = new Date(), t = e.getFullYear(), n = e.getMonth(), i = e.getDate(), a = Laya.LocalStorage.getJSON("dailySharedMapping");
            for (var s in a) {
                var o = a[s], r = o.shared, l = o.shareTime, h = new Date(l), c = h.getFullYear(), d = h.getMonth(), u = h.getDate();
                (t > c || t == c && (n > d || n == d && i > u)) && (r = !1, l = null), this._dailyShareMapping[s] = {
                    shared: r,
                    shareTime: l
                };
            }
            a = Laya.LocalStorage.getItem("canFetchVideo") || 0, this.canFetchVideo = 1 == (parseInt(a) || 0), 
            this.canFetchVideo = !0, this._vsCount = g.getNumberValue("vsCount") || 0, this._vsFailShareCount = g.getNumberValue("vsFailShareCount") || 0, 
            this._videoCount = g.getNumberValue("videoCount") || 0, p.isOverDay && this.resetByOverDay();
        }
        wxCheck() {
            return !d.Dev && d.State == i.Check;
        }
        aCheck() {
            return !!this.wxCheck() || (ct.IsQQ() ? d.vGameInfo.qqacv === d.ClientVer : ct.IsTouTiao() ? d.vGameInfo.ttacv === d.ClientVer : !d.Dev && d.ClientVer === d.vGameInfo.acv);
        }
        getVideoCnt(e) {
            var t = this.videoMapping[e];
            return null == t ? 0 : t;
        }
        getShareClickCnt(e) {
            var t = this.clickShareCnts[e];
            return null == t ? 0 : t;
        }
        addShareClickCnt(e) {
            var t = this.clickShareCnts[e];
            null == t ? t = 1 : t++, this.clickShareCnts[e] = t;
        }
        showADBanner(e, t = -1) {
            if (C.Instance.isOpenSDK() && e == zt.Settement.id && !C.Instance.canTouchMis()) return;
            if (!d.hasAD) return;
            if (!this.shouldShowForBanner(e)) return;
            if (console.log("Taylor --- GamePlayState= " + nt.Instance._state), 2 == e && 2 == nt.Instance._state || void 0 === nt.Instance._state) return;
            console.log("Taylor --- pos= " + e);
            var n = Qt.Instance.getBannerCfg(e);
            if (console.log("Taylor --- cfg= " + n), null == n) return;
            let i = n.adunit;
            ct.IsTouTiao() ? i = n.tadunit : ct.IsQQ() && (i = n.qadunit), C.Instance.isOpenSDK() && (d.isF = !0);
            {
                let e = Qt.Instance.getRandomBannerCfg();
                null !== e && e.adunit && (i = e.adunit, ct.IsTouTiao() && e.tadunit ? i = e.tadunit : ct.IsQQ() && e.qadunit && (i = e.qadunit));
            }
            this._isShowingBanner = !0;
            let a = n.hAlign, s = n.vAlign, o = n.xOffset;
            d.isLimitCityB && (t = -1);
            let r = n.w;
            ct.IsWeChat() && d.vGameInfo.small && (r = 300), ct.IsQQ() && (r = d.vGameInfo.qSmall ? 300 : 375), 
            this.aCheck() && (r = 300), ct.Instance.showBanner(e, i, a, s, r, o, n.yOffset, t);
        }
        hideBanner(e = 0) {
            this._isShowingBanner = !1, ct.Instance.hideBanner(e);
        }
        isShowingBanner() {
            return this._isShowingBanner;
        }
        restoreBanner(e, t = 0) {
            3 != e && this.showADBanner(e, t);
        }
        showVideoOrrShare(e, t) {
            if (this._lastCallTime > 0 && Date.now() - this._lastCallTime < 300) return;
            if (p.fetchingVideoAd && Date.now() - this._lastCallTime < 1e4) Wt.Instance.showTips("正在拉取视频", 2e3); else {
                this._callShareReward = !1, this._callShare = !1, this._lastCallTime = Date.now();
                var n = Qt.Instance.getVideoShareCfg(e);
                null != n ? n.type == wt.Video ? this.handleVideo(n) : this.handleShare(n, !0) : console.log("没有配置视频");
            }
        }
        isForceVideo(e) {
            return !!ct.IsOppo();
        }
        isForceVideoWithError(e) {
            if (this.wxCheck()) return !0;
        }
        checkShowShareAfterVideoFail(e) {
            let t = !1;
            if (this._vsFailShareCount + this._videoCount >= d.vGameInfo.vsAllCount && (t = !0), 
            t || this._vsFailShareCount >= d.vGameInfo.vsFailShareCount) return !1;
            this._callShareReward = !1, this._callShare = !1, this._lastCallTime = Date.now();
            var n = Date.now();
            let i = jt.getShareInfoByCfg(null);
            return this._callShareReward = !0, this._callShare = !0, this._callShareCfg = {
                pos: e,
                fromVideoFail: !0
            }, ct.Instance.shareM(e, !1, 1, i.imgUrl, i.shareContent, n, ""), !0;
        }
        handleVideo(e) {
            if (!d.hasAD) return this.wxCheck() ? (Wt.Instance.showTips("广告功能暂未开通"), !0) : void this.handleShare(e, !1);
            if (this.canShowVideo() || this.isForceVideo(e.pos)) {
                if (!this.canShowVideoADByCount()) {
                    if (!this.wxCheck() && this.checkShowShareAfterVideoFail(e.pos)) return;
                    return void Wt.Instance.showTips("视频奖励次数今日已达上限");
                }
                ct.Instance.report(a.showAD, {
                    adName: e.name || ""
                });
                let t = e.adunit;
                ct.IsTouTiao() ? t = e.tadunit : ct.IsQQ() && (t = e.qadunit), ct.Instance.showVideo(e.pos, t, e.toast);
            } else this.handleShare(e, !1);
        }
        handleShare(e, t) {
            this.hasDailyShared(e.pos) || this.saveShareCache(e.pos, new Date().toString()), 
            ct.Instance.report(a.doShare, {
                adName: e.name || ""
            });
            var n = Date.now();
            let i = jt.getShareInfoByCfg(e), s = i.shareContent;
            this._callShareReward = t, this._callShare = !0, this._callShareCfg = {
                pos: e.pos,
                fromVideoFail: !1
            }, ct.Instance.shareM(e.pos, 1 == e.shot, e.type, i.imgUrl, s, n, e.name);
        }
        hasDailyShared(e) {
            var t = this._dailyShareMapping[e];
            return null != t && t.shared;
        }
        onShowAdCompleted(e, t = !1) {
            var n = this.videoMapping[e];
            if (null == n ? n = 1 : n++, this.videoMapping[e] = n, t) return this._vsFailShareCount++, 
            void this.saveVideoCache();
            this.canAddVSCount(e) && (this._vsCount++, g.setNumberValue("vsCount", this._vsCount));
        }
        onGameFocus() {
            console.log("onGameFocus"), this._callShare = !1;
        }
        getVSShowType() {
            if (!d.vsInfo) return Lt.Default;
            let e = d.vsInfo.type, t = d.vsInfo.snum, n = d.vsInfo.vnum, i = t + n;
            if (e === Ct.Default || 0 === t && 0 === n) return Lt.Default;
            if (0 === t && n > 0) return Lt.Video;
            if (t > 0 && 0 === n) return Lt.Share;
            if (e === Ct.Share) {
                return this._vsCount % i < t ? Lt.Share : Lt.Video;
            }
            if (e === Ct.Video) {
                return this._vsCount % i < n ? Lt.Video : Lt.Share;
            }
            return Lt.Default;
        }
        static getShowType(e) {
            if ($t.Instance.wxCheck()) return 2;
            if (ct.IsOppo()) return 2;
            let t = $t.Instance.getVSShowType();
            if (t !== Lt.Default) return t === Lt.Video && d.vsInfo.snum > 0 && !$t.Instance.canShowVideoADByCount() ? Lt.Share : t;
            {
                let t = d.vList;
                if (t.length) for (let n = 0; n < t.length; n++) {
                    let i = t[n];
                    if (i && i.pos == e) return i.type || 0;
                }
            }
            return 0;
        }
        shouldShowForBanner(e) {
            return e !== zt.Load.id && ((!this.aCheck() || e !== zt.Game.id) && (e !== zt.Game.id || (ct.IsQQ(), 
            !0)));
        }
        resetByOverDay() {
            this.canFetchVideo = !0, this._vsCount = 0, this._vsFailShareCount = 0, this._videoCount = 0, 
            this.saveVideoCache();
        }
        canAddVSCount(e) {
            return !1;
        }
        canShowVideoADByCount() {
            return !!ct.IsOppo() || $t.Instance._videoCount < d.vAdCount;
        }
        onFinishVideoAd(e) {
            this._videoCount++, this.saveVideoCache();
        }
        updateViewWithPos(e, t) {
            let n = e.getChildByName("icon"), i = $t.getShowType(t);
            n.skin = 2 === i ? "common/ic_vedio.png" : "common/ic_share.png";
        }
    }
    $t._instance = null;
    class Zt {
    }
    class en {
        constructor() {
            this.inviteCode = "", this.headIconUrl = "", this.logined = !1, this.loginError = !1, 
            this.successLoginCb = null, this.checkUpdateInfoTime = 0, this.updateInfoData = null, 
            this.isReadData = !1, this.lastSendDataTime = 0, this.saveDataTime = 240, this.flushSaveDataTime = 20, 
            this.m_onlineStartTime = 0, this.user = new Zt(), this.headIconUrl = "", 
            e.Instance.on(t.OverDayEvent, this, this.resetByOverDay);
        }
        static get Instance() {
            return null == en._instance && (en._instance = new en()), en._instance;
        }
        resetByOverDay() {
            let e = Laya.Browser.now(), t = this.user.playerInfo;
            t.loginDate = e, t.dayBattleCount = 0;
        }
        doSaveGameData() {
            this.realSaveData();
        }
        static dataKey() {
            return "data_" + d.packageName;
        }
        realSaveData() {
            Laya.timer.clear(this, this.realSaveData);
            console.log("this.user", this.user);
            let n = Laya.Browser.now();
            this.user.playerInfo.save_time = n, 
            this.user.playerInfo.ver = d.ClientVer
            this.user.saveToStorage();
            
            let e = JSON.stringify(Object.assign({}, en.Instance.user.playerInfo));
            w.Instance.updataGameData(e).catch(e => {
                console.log(e);
            });
        }
        static saveGameData(e = !1, t = !1) {
            en.Instance.doSaveGameData();
        }
        readDataInfo(e) {
            if ( this.isReadData) return;
            d.recoverData || ( e = null),
            this.user.isDefaultData ? (
            e ? (en.initDefaultBBTData(en.fyhdData), en.Instance.initReadBBTData(e, en.fyhdData), 
            this.user.playerInfo = Object.assign({}, e)) : en.initDefaultBBTData(en.fyhdData)) : (en.initDefaultBBTData(en.fyhdData), 
            en.cache_data && en.Instance.initReadBBTData(en.cache_data, en.fyhdData)), this.user.isDefaultData = !1, 
            this.isReadData = !0;
            let t = this.user.playerInfo.loginDate;
            !1 === u.isToday(t) && this.resetByOverDay(), this.doSaveGameData();
        }
        static readBBTDataInfo() {
            let e = Laya.LocalStorage.getItem(en.dataKey()), t = null;
            return e && "" !== e && (t = JSON.parse(e)), t;
        }
        static readBBTData() {
            let e = en.readBBTDataInfo();
            this.cache_data = e || null;
        }
        get gold() {
            return this.user.playerInfo.gold || (this.user.playerInfo.gold = 0), "string" == typeof this.user.playerInfo.gold && (this.user.playerInfo.gold = parseInt(this.user.playerInfo.gold)), 
            this.user.playerInfo.gold || 0;
        }
        set gold(n) {
            this.user.playerInfo.gold = n, e.Instance.event(t.PlayerGoodsUpdate);
        }
        get playerInfo() {
            return this.user && !this.user.playerInfo && (this.user.playerInfo = {}), this.user.playerInfo;
        }
        updateWithChangeData(n) {
            if (!this.playerInfo) return;
            let i = this.playerInfo;
            for (let e in n) i[e] += n[e];
            e.Instance.event(t.PlayerGoodsUpdate), this.doSaveGameData();
        }
        get battleCount() {
            return this.playerInfo.battleCount || 0;
        }
        set battleCount(e) {
            this.playerInfo.battleCount = e || 0;
        }
        get dayBattleCount() {
            return this.playerInfo.dayBattleCount || 0;
        }
        set dayBattleCount(e) {
            this.playerInfo.dayBattleCount = e || 0;
        }
        getAttributeInfo(e) {
            return (this.playerInfo.attributeInfo || [])[e] || {
                lv: 0,
                videoNum: 0,
                videoLastLv: 0
            };
        }
        setAttributeInfo(e, t) {
            var n = this.playerInfo.attributeInfo || [];
            n[e] = t, this.playerInfo.attributeInfo = n;
        }
        get grade() {
            return this.playerInfo.grade || 1;
        }
        set grade(e) {
            this.playerInfo.grade = e;
        }
        get onlineStartTime() {
            return this.m_onlineStartTime || 0;
        }
        set onlineStartTime(e) {
            this.m_onlineStartTime = e;
        }
        get onlineTime() {
            return this.playerInfo.onlineTime || 0;
        }
        set onlineTime(e) {
            this.playerInfo.onlineTime = e;
        }
        get level() {
            return this.playerInfo.level || 0;
        }
        set level(e) {
            this.playerInfo.level = e;
        }
        get isGold() {
            return console.log("Taylor ---get -value= " + this.playerInfo.isGold), this.playerInfo.isGold || 0;
        }
        set isGold(e) {
            console.log("Taylor ---value= " + e), console.log("Taylor ---this.playerInfo= " + this.playerInfo), 
            this.playerInfo.isGold = e;
        }
        set levelInfo(e) {
            this.playerInfo.levelInfo = e;
        }
        get levelInfo() {
            return this.playerInfo.levelInfo || {
                start: null,
                seg: null,
                end: null
            };
        }
        get dayNotTry() {
            return this.playerInfo.dayNotTry || !1;
        }
        set dayNotTry(e) {
            this.playerInfo.dayNotTry = e;
        }
        get levelPattens() {
            return this.playerInfo.levelPattens || (this.playerInfo.levelPattens = {}), this.playerInfo.levelPattens;
        }
        static initDefaultBBTData(e) {
            console.log("Taylor --- 初始化默认数据fyhdData= " + e), e.loginDate = Number(Laya.Browser.now()), 
            e.saveTime = Number(Laya.Browser.now()), e.onlineTime = 0;
        }
        initReadBBTData(e, t, n = !0) {
            let i = e;
            if (i.loginDate && (t.loginDate = i.loginDate), i.saveTime && (t.saveTime = i.saveTime), 
            i.onlineTime && (t.onlineTime = i.onlineTime), n) {
                let e = i.loginDate;
                0 == u.isToday(e) && en.Instance.clearOverDayInfo();
            }
        }
        clearOverDayInfo() {
            let e = Laya.Browser.now();
            en.fyhdData.loginDate = e;
        }
    }
    en._instance = null, en.taskRed = !1, en.fyhdData = {}, en.cache_data = null, function(e) {
        e[e.role = 0] = "role", e[e.gun = 1] = "gun";
    }(bt || (bt = {})), function(e) {
        e[e.free = 0] = "free", e[e.vedio = 1] = "vedio", e[e.level = 2] = "level", e[e.sign = 3] = "sign", 
        e[e.goin = 4] = "goin";
    }(kt || (kt = {}));
    class tn {
        constructor() {
            this.tempRoleSkin = -1, this.tempGunSkin = -1;
        }
        static get Instance() {
            return null === tn._instance && (tn._instance = new tn()), tn._instance;
        }
        getSkinCfgData(e) {
            return e == bt.gun ? Qt.Instance.gunCfgData : Qt.Instance.roleCfgData;
        }
        getCurSkin(e) {
            return e == bt.gun ? en.Instance.playerInfo.curGunSkin || 1 : en.Instance.playerInfo.curRoleSkin || 1;
        }
        setCurSkin(e, t) {
            t == bt.gun ? en.Instance.playerInfo.curGunSkin = e : en.Instance.playerInfo.curRoleSkin = e;
        }
        getSkinCfg(e, t) {
            let n = this.getSkinCfgData(t);
            return e > n.length && (e = 1), n[e - 1];
        }
        getCurSkinCfg(e) {
            let t = this.getSkinCfgData(e), n = this.getCurSkin(e);
            return n > t.length && (n = 1), t[n - 1];
        }
        hasComplete(e, t) {
            let n = this.getSkinCfg(e, t), i = this.getSkinInfo(e, t);
            if (n.conditionType == i.type) {
                if (n.conditionType == kt.free) return !0;
                if (n.conditionType == kt.level) {
                    if (en.Instance.level + 1 > n.conditionCnt) return !0;
                } else if (i.cnt >= n.conditionCnt) return i.activatedTime || (i.activatedTime = Date.now()), 
                !0;
            } else this.setSkinInfo(e, {
                type: n.conditionType,
                cnt: 0
            }, t);
            return !1;
        }
        getSkinInfo(e, t) {
            return (en.Instance.playerInfo.skinArr1 || [ [], [] ])[t][e] || {
                type: 0,
                cnt: 0,
                activatedTime: 0
            };
        }
        setSkinInfo(e, t, n) {
            var i = en.Instance.playerInfo.skinArr1 || [ [], [] ];
            i[n][e] = t, en.Instance.playerInfo.skinArr1 = i, en.Instance.doSaveGameData();
        }
        setTempSkin(e, t) {
            t == bt.gun ? this.tempGunSkin = e : this.tempRoleSkin = e;
        }
        resetTempSkin() {
            this.tempRoleSkin = -1, this.tempGunSkin = -1;
        }
        getGameSkin(e) {
            let t = this.getCurSkin(e), n = e == bt.role ? this.tempRoleSkin : this.tempGunSkin;
            return n >= 0 && (t = n), this.getSkinCfg(t, e);
        }
        getRandomLockSkinCfg(e) {
            let t = [], n = this.getSkinCfgData(e);
            if (n) for (let i = 0; i < n.length; i++) {
                let a = n[i];
                this.hasComplete(a.id, e) || t.push(a);
            }
            if (t.length > 0) {
                return t[Math.floor(Math.random() * (t.length - 1))];
            }
            return null;
        }
        getRoleProgressInfo() {
            let e = Qt.Instance.roleCfgData, t = en.Instance.level - 1, n = 0;
            for (let i = 1; i < e.length; i++) {
                let a = e[i];
                if (a && 2 == a.conditionType) {
                    if (t < a.conditionCnt) return {
                        id: a.id,
                        num: t - n,
                        total: a.conditionCnt - n,
                        cfg: a
                    };
                    n = a.conditionCnt;
                }
            }
            return null;
        }
    }
    tn.noGunSkin = !0, tn._instance = null;
    class nn {
        constructor() {
            this.scene = null, this.weaponsMap = {}, this.weaponsCategoryMap = {}, this.folders = [], 
            this.loadConfig();
        }
        static get Instance() {
            return null === nn._instance && (nn._instance = new nn()), nn._instance;
        }
        loadConfig() {}
        getModelName(e) {
            return `res/scene/${e}.lh`;
        }
        preLoadLevelRes() {
            let e = Je.Instance.getLevelPatternList(en.Instance.level + 1);
            e && e.length && Laya.loader.create(e.map(e => ({
                url: this.getModelName(e)
            })));
        }
        loadLevel() {
            this.scene && (this.scene.active = !1, this.scene.destroy(), this.scene = null), 
            Laya.Scene3D.load("res/scene/main.ls", Laya.Handler.create(this, e => {
                Laya.stage.addChild(e), this.scene = e;
                let t = e.getChildByName("Main Camera");
                t && (sn.Instance.cameraController = t.addComponent($e)), Je.Instance.levelContainer = this.scene.getChildByName("Level"), 
                Je.Instance.loadLevel().then(e => {
                    this.createPlayer();
                });
            }));
        }
        createPlayer(n = !1) {
            let i = tn.Instance.getGameSkin(bt.role);
            sn.Instance.player && (sn.Instance.player.clear(), sn.Instance.player = null), i && Laya.Sprite3D.load(this.getModelName(i.modelName), Laya.Handler.create(this, a => {
                let s = a.clone();
                this.scene.addChild(s), s.name = "qiangshou";
                let o = new Qe();
                o.skinID = i.id, sn.Instance.player = o, o.setModel(s), o.init(Je.Instance.getPath(), 2), 
                sn.Instance.cameraController.setPlayer(s, !0), n ? e.Instance.event(t.ChangePlayerSkinCompleted) : e.Instance.event(t.LoadLevelComplete);
            }));
        }
        loadPattern(e) {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        loadModel(e) {
            return new Promise((t, n) => {
                Laya.Sprite3D.load(e, Laya.Handler.create(this, e => {
                    e ? t(e.clone()) : n("load error");
                }));
            });
        }
        loadWall(e) {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        loadEnvironment(e) {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getBullet(e = "Bullet") {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getEffect(e) {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getEnemy(e = "Enemy") {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getHostage(e = "hostage") {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getRandomInFolder(e) {
            return "";
        }
        getListInFolder(e) {
            return [ "" ];
        }
        getShotEffect(e = "glow") {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getBloodEffect(e = "BloodDirectional") {
            let t = this.getModelName(e);
            return this.loadModel(t);
        }
        getHeadShotEffect() {
            let e = this.getModelName("headerShotEffect");
            return this.loadModel(e);
        }
        preLoadLevel(e) {
            let t = [ {
                url: "res/scene/main.ls"
            }, {
                url: "res/scene/qiangshou.lh"
            }, {
                url: "res/scene/qiangshou2.lh"
            }, {
                url: "res/scene/qiangshou3.lh"
            }, {
                url: "res/scene/qiangshou4.lh"
            }, {
                url: "res/scene/qiangshou5.lh"
            }, {
                url: "res/scene/qiangshou6.lh"
            }, {
                url: "res/scene/qiangshou7.lh"
            }, {
                url: "res/scene/qiangshou8.lh"
            }, {
                url: this.getModelName("bg1")
            } ];
            en.Instance.user.playerInfo || en.Instance.user.loadCacheData();
            let n = Je.Instance.getLevelPatternList(en.Instance.level);
            n && n.length && n.forEach(e => {
                t.push({
                    url: this.getModelName(e)
                });
            }), Laya.loader.create(t, e);
        }
        getMat(e) {
            let t = new Laya.BlinnPhongMaterial();
            return t.specularColor = new Laya.Vector4(0, 0, 0, 1), t.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_CUTOUT, 
            t.enableLighting = !0, t.albedoTexture = Laya.loader.getRes(e), t;
        }
    }
    nn._instance = null, nn.LevelPatterns = [ "p_3_1", "p_3_3", "p_4_1", "p_4_2", "p_5_1", "p_5_2", "p_6_1", "p_6_4", "p_6_5", "p_8_3", "p_8_4", "p_9_1", "p_9_2", "p_10_1", "p_10_2", "p_10_4", "p_11_1", "p_16_1", "p_510_1", "p_511_1", "p_3000_2", "p_3_2", "p_5_4", "p_6_3" ], 
    nn.FinishPatterns = [ "p_finish_1", "p_finish_2", "p_finish_3" ], nn.StartPatterns = [ "p_start_1", "p_start_2", "p_start_3", "p_start_4", "p_start_5" ], 
    nn.EmenyPatterns = [ "p_empty_1", "p_empty_criminal_102", "p_empty_criminal_106" ], 
    nn.BossPatterns = [ "boss_5" ], nn.CheckPointPatterns = [ "p_checkpoint_1" ];
    class an {
        constructor() {
            this.showEggViewCountDown = 0, this.showedEggViewCount = 0, this.nextInterval = 0, 
            ct.IsQQ() && (d.vGameInfo.eggInfo = d.vGameInfo.qqADInfo.eggInfo);
        }
        static get Instance() {
            return null === an._instance && (an._instance = new an()), an._instance;
        }
        checkShowEggView(e = null) {
        }
    }
    an._instance = null, function(e) {
        e[e.None = 0] = "None", e[e.Ready = 1] = "Ready", e[e.Moving = 2] = "Moving", e[e.Waiting = 3] = "Waiting", 
        e[e.Stop = 4] = "Stop";
    }(Tt || (Tt = {}));
    class sn {
        constructor() {
            this.battleCnt = 0, this.battleCntDay = 0, this.isInBattle = !1, this.showAdCount = 0, 
            this.preparing = !1, this.playerCount = 0, this.isGamePause = !1, this.preloadInAD = !1, 
            this.prepareGaming = !1, this.inBattling = !1, this.beginBig = !1, this.time = 0, 
            this.lastTime = 0, this.gameTime = 120, this.killNum = 0, this.isBoss = !1, this.getGameMode = function() {
                return this.gameMode;
            }, this.reset(), this.init();
        }
        static get Instance() {
            return null === sn._instance && (sn._instance = new sn()), sn._instance;
        }
        init() {
            this.registerEvent();
        }
        registerEvent() {
            e.Instance.on(t.GetFocus, this, this.onGetFocus), e.Instance.on(t.LostFocus, this, this.onLostFocus), 
            e.Instance.on(t.LoadLevelComplete, this, this.loadLevelCompleted), e.Instance.on(t.ChangePlayerSkinCompleted, this, this.onStart), 
            e.Instance.on(t.SkinChange, this, this.onSkinChange), e.Instance.on(t.HostageDie, this, this.hosageKilled);
        }
        unregisterEvent() {
            e.Instance.off(t.GetFocus, this, this.onGetFocus), e.Instance.off(t.LostFocus, this, this.onLostFocus), 
            e.Instance.off(t.LoadLevelComplete, this, this.loadLevelCompleted), e.Instance.off(t.ChangePlayerSkinCompleted, this, this.onStart), 
            e.Instance.off(t.SkinChange, this, this.onSkinChange), e.Instance.off(t.HostageDie, this, this.hosageKilled);
        }
        onGetFocus() {
            console.log("onGetFocus"), this.player ? Laya.timer.scale = this.player.getSpeedMultiplier() : Laya.timer.scale = 1;
        }
        onLostFocus() {
            Laya.timer.scale = 0, console.log("onLostFocus");
        }
        reset() {
            this.battleCnt = 0, this.battleCntDay = 0, this.isInBattle = !1, this.preparing = !1, 
            this.showAdCount = 0, this.readBattleCnt();
        }
        AddBattleCnt() {
            this.battleCnt++, this.battleCntDay++, en.Instance.battleCount = en.Instance.battleCount + 1, 
            en.Instance.dayBattleCount = en.Instance.dayBattleCount + 1, this.saveBattleCnt(), 
            ct.Instance.report(a.BattleInfo, {
                battleCnt: this.battleCnt,
                battleCntDay: this.battleCntDay
            });
        }
        saveBattleCnt() {
            Laya.LocalStorage.setItem("battleCnt", this.battleCnt.toString()), Laya.LocalStorage.setItem("battleCntDay", this.battleCntDay.toString());
        }
        readBattleCnt() {
            this.battleCnt = parseInt(Laya.LocalStorage.getItem("battleCnt")) || 0, this.battleCntDay = parseInt(Laya.LocalStorage.getItem("battleCntDay")) || 0;
            let e = Date.now();
            p.lastStartTime > 0 && !u.isSameDay(e, p.lastStartTime) && (Laya.LocalStorage.setItem("battleCntDay", "0"), 
            this.battleCntDay = 0);
        }
        get user() {
            return en.Instance.user;
        }
        setGamePause(e) {
            console.log("setGamePause ....." + e), this.isGamePause = e, e ? L.Instance.pause() : L.Instance.resume();
        }
        clear() {
            !1 !== this.isInBattle && this.clearData();
        }
        clearData() {
            this.isInBattle = !1, this.preparing = !1, this.showAdCount = 0;
        }
        static collect() {
            let e = ct.getPlatform();
            e && e.triggerGC && e.triggerGC();
        }
        doPreloadAD() {
            if (!this.preloadInAD && !ct.IsOppo() && !$t.Instance.aCheck() && d.vGameInfo.showInAd && d.vGameInfo.eInfo) {
                en.Instance.dayBattleCount - d.vGameInfo.eInfo.dayGame >= 0 && (ct.Instance.showInterstitialAd(1, "", "", !0), 
                this.preloadInAD = !0);
            }
        }
        loadLevel() {
            Laya.timer.clear(this, this.onUpdate), e.Instance.event(t.ShowStartView), nn.Instance.loadLevel(), 
            this.killNum = 0;
        }
        preloadLevel() {
            nn.Instance.preLoadLevelRes();
        }
        loadLevelCompleted() {
            this._state = Tt.Ready;
        }
        onStart() {
            if (this._state === Tt.Ready) {
                if (this.player) {
                    let e = tn.Instance.getGameSkin(bt.role);
                    if (e && e.id !== this.player.skinID) return void nn.Instance.createPlayer(!0);
                }
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTouchBegin), this.startLevel();
            }
        }
        levelCompleted(n = .15, i = !1) {
            this.doFinishAction(i), pe.Instance.playSound(de.victory), e.Instance.event(t.LevelSuccess), 
            Laya.timer.once(1e3 * n, this, this.showLevelComplete);
        }
        doFinishAction(e = !1) {
            Laya.timer.scale = 1, this.cameraController.stopFollow(), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onTouchBegin), 
            e && (Laya.timer.clear(this, this.onUpdate), this.player = null);
        }
        onFinishReached(e) {
            this.levelCompleted(2, e);
        }
        showLevelComplete() {
            this.openSetmnent(!0), this.killNum = 0, this.isBoss = !1;
        }
        checkUnlok() {}
        setNext() {
            this.showRoleProgress(), this.loadLevel();
        }
        startLevel() {
            this.AddBattleCnt(), tn.Instance.resetTempSkin(), this._state = Tt.Moving, Laya.timer.frameLoop(1, this, this.onUpdate), 
            this.player.startRun(), e.Instance.event(t.HideStartView);
        }
        onTouchBegin() {
            this._state === Tt.Ready ? this.startLevel() : this._state === Tt.Moving && this.player && this.player.shoot();
        }
        onUpdate() {
            this._state === Tt.Moving && (this.player && this.player.gameUpdate(), this.cameraController && this.cameraController.gameUpdate());
        }
        enemyKilled(e) {}
        bossKillEffect(e) {}
        hosageKilled(e) {
            sn.Instance.showGameOver(2), pe.Instance.stopSound(de.footstep);
        }
        onLose() {}
        showGameOver(n) {
            this.doFinishAction(!0), e.Instance.event(t.LevelFail), pe.Instance.playSound(de.Fail), 
            Laya.timer.once(1e3 * n, this, () => {
                this.openSetmnent(!1);
            });
        }
        openSetmnent(e) {
            console.log("Taylor --- boolean= " + e);
            let t = this.isBoss ? 100 : 10 * this.killNum, n = this.killNum, i = () => {
                Wt.Instance.openUI(zt.Settement, {
                    success: !0,
                    coin: t,
                    killNum: n,
                    isBoss: this.isBoss
                });
            }, a = () => {
                Wt.Instance.openUI(zt.Settement, {
                    success: !1,
                    coin: 0
                });
            };
            e ? C.Instance.isOpenSDK() ? Wt.Instance.openUI(zt.MatrixTui4, {
                callback: i
            }) : i && i() : C.Instance.isOpenSDK() ? Wt.Instance.openUI(zt.MatrixTui4, {
                callback1: a
            }) : a && a();
        }
        restart() {
            this.loadLevel();
        }
        skipLevel() {
            en.Instance.level++, en.Instance.levelInfo = null, this.showRoleProgress(), this.loadLevel();
        }
        checkStartGame() {
            // if (an.Instance.checkShowEggView()) return;
            let e = tn.Instance.getRandomLockSkinCfg(bt.role), t = tn.noGunSkin ? null : tn.Instance.getRandomLockSkinCfg(bt.gun);
            null != e && null == t ? Wt.Instance.openUI(zt.Try, {
                cfg: e,
                skinType: bt.role
            }) : this.onStart();
        }
        showRoleProgress() {
            let e = tn.Instance.getRoleProgressInfo();
            null != e && Laya.timer.callLater(this, () => {
                Wt.Instance.openUI(zt.RoleProgress, e);
            });
        }
        onSkinChange() {
            this._state = Tt.None, nn.Instance.createPlayer(!1);
        }
    }
    sn._instance = null, sn.offlineTime = 0, sn.needTryShow = !1;
    class on extends yt.itemView.TuiBtnUI {
        constructor() {
            super(), this.tuiInfo = null, this.fromUI = null;
        }
        onEnable() {
            this.timer.loop(6e3, this, this.updateTuiBtn), this.on(Laya.Event.CLICK, this, this.onClickTuiBtn), 
            this.updateTuiBtn(), this.red_point.visible = !0;
        }
        onDisable() {
            this.tuiAni.stop(), this.timer.clear(this, this.updateTuiBtn), this.off(Laya.Event.CLICK, this, this.onClickTuiBtn);
        }
        updateTuiBtn() {
            if ($t.Instance.wxCheck() || !Ft.Instance.canTui()) return void (this.visible = !1);
            let e = Ft.Instance.getTuiArr();
            if (this.visible = !0, on.tuiIndex < 0 && (on.tuiIndex = Math.floor(e.length * Math.random())), 
            on.tuiIndex += 1, on.tuiIndex >= e.length && (on.tuiIndex = 0), on.tuiIndex < 0 && (on.tuiIndex = 0), 
            this.tuiInfo = e[on.tuiIndex], this.tuiInfo) {
                if (this.destroyed) return;
                this.visible = !0, this.iconImage.skin = this.tuiInfo.url || "", this.titleLabel.text = this.tuiInfo.name || "", 
                this.tuiAni.play(0, !1);
            } else console.log("Taylor --- updateTuiBtn"), this.visible = !1;
        }
        onClickTuiBtn() {
            this.red_point.visible = !1;
            let e = !1, t = ce.Unkonw;
            this.fromUI == zt.Game ? t = ce.HomeIcon : this.fromUI == zt.Game && (t = ce.GameIcon, 
            e = !0), e && (pe.Instance.stopMusic(), sn.Instance.setGamePause(!0)), gt.navigateToMiniProgram(this.tuiInfo, t, function(t) {
                !t && C.Instance.isOpenSDK() ? Wt.Instance.openUIUnique(zt.MatrixTui1, {
                    cb: function() {
                        e && (pe.Instance.playBattleBgm(), sn.Instance.setGamePause(!1));
                    },
                    from: ce.JumpFail
                }) : e && (pe.Instance.playBattleBgm(), sn.Instance.setGamePause(!1));
            });
        }
        setFromUI(e) {
            this.fromUI = e;
        }
    }
    on.tuiIndex = -1;
    class rn extends yt.itemView.ScrollTuiItemUI {
        constructor() {
            super(...arguments), this.tuiInfo = null, this.index = 0, this.mouseDownTime = null;
        }
        onEnable() {
            this.registerEvent();
        }
        onDisable() {
            this.unregisterEvent();
        }
        registerEvent() {
            ct.IsTencentGame() && (this.on(Laya.Event.CLICK, this, this.clickItem), this.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown));
        }
        unregisterEvent() {
            this.off(Laya.Event.CLICK, this, this.clickItem), this.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        }
        updateData(e) {
            this.tuiInfo = e, this.iconImage.skin = this.tuiInfo.url || "", this.titleLabel.text = this.tuiInfo.name || "";
        }
        clickItem() {
            this.mouseDownTime > 0 && Date.now() - this.mouseDownTime < 100 && (this.mouseDownTime = 0, 
            gt.navigateToMiniProgram(this.tuiInfo, ce.HomeBottom, function(e) {
                !e && C.Instance.isOpenSDK() && Wt.Instance.openUIUnique(zt.MatrixTui1, {
                    cb: null,
                    from: ce.JumpFail
                });
            }));
        }
        mouseDown() {
            this.mouseDownTime = Date.now();
        }
    }
    class ln extends yt.itemView.ScrollTuiViewUI {
        constructor() {
            super(...arguments), this.initPosArray = [], this.itemViews = [], this.itemWidth = 130, 
            this.itemHeight = 119 * 1.3, this.lastMouseX = 0, this.isMoving = !1, this.itemMargin = 0, 
            this.lastDiff = 0, this.dataArray = [];
        }
        onEnable() {
            this.registerEvent(), this.initView();
        }
        onDisable() {
            this.unregisterEvent(), this.clearTween(), this.clearUpdateTimer(), this.visible = !1;
        }
        registerEvent() {
            this.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        }
        unregisterEvent() {
            this.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown), this.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove), 
            this.off(Laya.Event.MOUSE_UP, this, this.mouseUp), this.off(Laya.Event.MOUSE_OUT, this, this.mouseUp);
        }
        initView() {
            if ($t.Instance.wxCheck() || !Ft.Instance.canTui()) this.visible = !1, console.log("Taylor --- false"); else {
                if (console.log("Taylor --- true"), this.visible = !0, !this.itemViews || !this.itemViews.length) {
                    this.itemMargin = Math.ceil((this.containerBox.width - 10 - 5 * this.itemWidth) / 4);
                    let e = 5 - this.itemMargin - this.itemWidth / 2;
                    for (let t = 0; t < 7; t++) {
                        let t = new rn();
                        t.anchorX = .5, t.anchorY = .5, t.pos(e, this.containerBox.height / 2), this.itemViews.push(t);
                        let n = new Laya.Point(e, this.height);
                        this.initPosArray.push(n), e += this.itemMargin + this.itemWidth, this.containerBox.addChild(t);
                    }
                }
                this.updateView(0), this.clearUpdateTimer(), this.startUpdateTimer(), this.updateDataSource();
            }
        }
        mouseDown(e) {
            this.clearTween(), this.on(Laya.Event.MOUSE_UP, this, this.mouseUp), this.on(Laya.Event.MOUSE_OUT, this, this.mouseUp), 
            this.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove), this.lastMouseX = e.stageX, 
            this.clearUpdateTimer();
        }
        mouseMove(e) {
            let t = e.stageX - this.lastMouseX;
            this.lastMouseX = e.stageX, this.isMoving = !0, this.updateView(t);
        }
        mouseUp(e) {
            this.off(Laya.Event.MOUSE_UP, this, this.mouseUp), this.off(Laya.Event.MOUSE_OUT, this, this.mouseUp), 
            this.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove), this.updateViewAnimate(), 
            this.startUpdateTimer();
        }
        startUpdateTimer() {
            Laya.timer.loop(2e3, this, this.scrollView);
        }
        clearUpdateTimer() {
            Laya.timer.clear(this, this.scrollView);
        }
        updateView(e) {
            this.lastDiff = e;
            this.initPosArray[3].x;
            if (this.itemViews.forEach(t => {
                t.pos(t.x + e, t.y);
                let n = this.getScale(t.x);
                t.scaleX = n, t.scaleY = n, t.red_point.visible = n > 1.2;
            }), e < 0) for (;this.itemViews[0].x < this.initPosArray[0].x; ) {
                let e = this.itemViews.shift();
                e.pos(this.itemViews[this.itemViews.length - 1].x + this.itemMargin + e.width, e.y), 
                this.updateItemView(e, this.itemViews[this.itemViews.length - 1].index + 1), this.itemViews.push(e);
            }
            if (e > 0) for (;this.itemViews[this.itemViews.length - 1].x > this.initPosArray[this.initPosArray.length - 1].x; ) {
                let e = this.itemViews.pop();
                e.pos(this.itemViews[0].x - this.itemMargin - e.width, e.y), this.updateItemView(e, this.itemViews[0].index - 1), 
                this.itemViews.unshift(e);
            }
        }
        updateViewAnimate() {
            let e = 0;
            this.lastDiff > 0 ? this.itemViews[3].x > this.initPosArray[3].x && (e = 1) : this.itemViews[3].x < this.initPosArray[3].x && (e = -1), 
            this.doAniWithDiff(e);
        }
        doAniWithDiff(e) {
            if (this.clearTween(), this.itemViews.forEach((t, n) => {
                let i = n + e;
                i >= this.initPosArray.length ? i = 0 : i < 0 && (i = this.initPosArray.length - 1);
                let a = this.initPosArray[i], s = this.getScale(a.x), o = 1e3 * Math.abs((t.x - a.x) / 200), r = !0;
                e > 0 && 6 === n ? r = !1 : e < 0 && 0 === n && (r = !1), r ? Laya.Tween.to(t, {
                    x: a.x,
                    scaleX: s,
                    scaleY: s
                }, o, null) : (t.x = a.x, t.scaleX = s, t.scaleY = s), t.red_point.visible = s > 1.2;
            }), e > 0) {
                let e = this.itemViews.pop();
                this.updateItemView(e, this.itemViews[0].index - 1), this.itemViews.unshift(e);
            } else if (e < 0) {
                let e = this.itemViews.shift();
                this.updateItemView(e, this.itemViews[this.itemViews.length - 1].index + 1), this.itemViews.push(e);
            }
        }
        clearTween() {
            this.itemViews.forEach(e => {
                Laya.Tween.clearAll(e);
            });
        }
        getScale(e) {
            let t = this.initPosArray[3].x, n = Math.abs(e - t) / (this.itemMargin + this.itemWidth);
            return n > 1 ? 1.2 : .15 * (1 - n) + 1.2;
        }
        updateDataSource() {
            if (console.log("Taylor --- TuiManager.Instance.getTuiArr()= " + Ft.Instance.getTuiArr()), 
            this.dataArray = [].concat(Ft.Instance.getTuiArr()), this.dataArray.length > 0) {
                let e = Math.ceil(Math.random() * this.dataArray.length);
                this.itemViews.forEach((t, n) => {
                    this.updateItemView(t, e + n);
                });
            }
        }
        updateItemView(e, t) {
            this.dataArray && this.dataArray.length && (t = (t + 9 * this.dataArray.length) % this.dataArray.length, 
            e.index = t, e.updateData(this.dataArray[t]));
        }
        scrollView() {
            this.doAniWithDiff(-1);
        }
    }
    class hn extends yt.itemView.DialogTuiBoxUI {
        constructor() {
            super(), this.from = ce.Unkonw;
        }
        onEnable() {
            this.registerEvent(), this.initView();
        }
        onDisable() {
            this.unregisterEvent();
        }
        registerEvent() {}
        unregisterEvent() {}
        initView() {
            ct.IsTouTiao() ? this.initTtTuiView() : this.initFyhdTui();
        }
        initTtTuiView() {
            if (!$t.Instance.wxCheck() && Ft.Instance.canTui()) {
                let e = d.vGameInfo.ttTuiInfo;
                return this.listView.vScrollBarSkin = "", this.listView.updateDataSource(Ft.getScorllData(e)), 
                this.listView.selectEnable = !0, this.listView.renderHandler = new Laya.Handler(this, function(t, n) {
                    let i = n % e.length, a = e[i];
                    if (!a) return;
                    let s = t.getChildByName("itemImg"), o = t.getChildByName("itemName");
                    s.skin = a.url, o.text = a.name;
                }), void this.updateInfoBox(!0);
            }
            this.updateInfoBox(!1);
        }
        initFyhdTui() {
            if (C.Instance.isOpenSDK() && C.Instance.tuiInfo && C.Instance.tuiInfo.length > 0) {
                let e = C.Instance.tuiInfo;
                return this.listView.vScrollBarSkin = "", this.listView.updateDataSource(Ft.getScorllData(e)), 
                this.listView.selectEnable = !0, this.listView.renderHandler = new Laya.Handler(this, function(t, n) {
                    let i = n % e.length, a = e[i];
                    if (!a) return;
                    let s = t.getChildByName("itemImg"), o = t.getChildByName("itemName");
                    s.skin = a.url, o.text = a.name, t.offAll(null), t.on(Laya.Event.CLICK, this, function() {
                        gt.navigateToMiniProgram(a, this.from, function(e) {
                            !e && C.Instance.isOpenSDK() && Wt.Instance.openUIUnique(zt.MatrixTui1, {
                                cb: null,
                                from: ce.JumpFail
                            });
                        });
                    });
                }), void this.updateInfoBox(!0);
            }
            this.updateInfoBox(!1);
        }
        updateInfoBox(e) {
            let t = this.parent.parent || null, n = 400;
            e ? (this.visible = !0, n = 800) : (this.visible = !1, n = 400), t && (t.height = n);
        }
        setFromUI(e) {
            ce.Unkonw;
            e == zt.Offline && (this.from = ce.Offline);
        }
    }
    class cn extends Laya.Image {
        constructor() {
            super(...arguments), this.gifAni = null, this.url = null;
        }
        updateImage(e) {
            -1 != e.indexOf(".json") ? (this.gifAni && this.gifAni.stop(), this.gifAni || (this.gifAni = new Laya.Animation(), 
            this.gifAni.interval = 150, this.addChild(this.gifAni)), this.gifAni && (this.gifAni.visible = !0, 
            this.gifAni.loadAtlas(e, null, e), this.gifAni.play(0, !0), this.gifAni.scale(this.width / 120, this.height / 120), 
            this.skin = "")) : (this.gifAni && (this.gifAni.stop(), this.gifAni.visible = !1), 
            this.skin = e), this.url = e;
        }
    }
    class dn extends Laya.Script {
        constructor() {
            super(), this.noInit = !1, this.gameScene = null, this.roleSprite = null, this.skinID = 0, 
            this.pos = null;
        }
        onEnable() {
            this.initScene(), this.regiestEvent();
        }
        onDisable() {
            this.roleSprite && (this.roleSprite.destroy(), this.roleSprite = null), this.gameScene && (this.gameScene.destroy(!0), 
            this.gameScene = null), this.unregiestEvent(), Laya.timer.clearAll(this);
        }
        regiestEvent() {
            e.Instance.on(t.SkinShowChange, this, this.onSkinChange);
        }
        unregiestEvent() {
            e.Instance.off(t.SkinShowChange, this, this.onSkinChange);
        }
        addRole(e) {
            this.roleSprite && this.roleSprite.removeSelf();
            let t = et.Instance.getModelName(e);
            console.log(t), Laya.Sprite3D.load(t, Laya.Handler.create(this, e => {
                if (!this.destroyed) {
                    let t = Laya.Sprite3D.instantiate(e), n = F.getNodeInHerit(t, "Targeting");
                    n && (n.active = !1);
                    let i = F.getNodeInHerit(t, "FootStepSmoke");
                    i && (i.active = !1), t.transform.setWorldLossyScale(new Laya.Vector3(.3, .3, .3));
                    let a = F.getCommpentInHerit(t, Laya.Animator);
                    a && (a.speed = .5), null != this.pos && (t.transform.position = this.pos, this.gameScene.addChild(t)), 
                    t.transform.rotate(new Laya.Vector3(0, -20, 0), !1, !1), this.roleSprite = t;
                }
            }));
        }
        initScene() {
            if (this.gameScene) return;
            this.gameScene = new Laya.Scene3D(), this.owner && this.owner.addChild(this.gameScene);
            let e = new Laya.Camera(0, .1, 1e3);
            this.gameScene.addChild(e), e.transform.rotate(new Laya.Vector3(0, 180, 0), !0, !1), 
            e.transform.position = new Laya.Vector3(0, 0, -1), e.orthographic = !0, e.orthographicVerticalSize = 1, 
            e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
            var t = new Laya.DirectionLight();
            t.color = new Laya.Vector3(1, 1, 1), t.transform.localPosition = new Laya.Vector3(0, 2, 5), 
            t.intensity = 1.2, t.transform.rotate(new Laya.Vector3(-25, 200, 0), !0, !1), t.shadow = !1, 
            this.gameScene.addChild(t);
            let n = 750 / Laya.stage.width, i = 1334 / Laya.stage.height;
            var a = new Laya.Vector3(0, 0, 0), s = new Laya.Vector3(0, 0, 0), o = new Laya.Vector3(0, 0, 0);
            e.convertScreenCoordToOrthographicCoord(o, a), o.setValue(n, i, 0), e.convertScreenCoordToOrthographicCoord(o, s), 
            this.noInit || this.updateSkinInfo(Ze.Instance.getCurSkin(ee.role));
            let r = new Laya.Vector2(s.x - a.x, s.y - a.y);
            Laya.timer.once(100, this, () => {
                let t = this.owner, n = t.localToGlobal(new Laya.Point(t.width / 2, t.height / 2));
                this.pos = new Laya.Vector3((n.x - Laya.stage.width / 2 + e.transform.position.x) * r.x, (n.y - Laya.stage.height / 2 + e.transform.position.y) * r.y, e.transform.position.z + 1), 
                this.roleSprite && (this.roleSprite.parent || this.gameScene.addChild(this.roleSprite), 
                this.roleSprite.transform.position = this.pos);
            });
        }
        startPlayAni() {}
        startPlayAttackAni() {}
        startPlayHowlAni() {}
        onSkinChange(e) {
            this.updateSkinInfo(e.roleCfg.id);
        }
        showSkin(e) {}
        updateSkinInfo(e) {
            if (this.skinID != e && (this.skinID = e, this.skinID > 0)) {
                let e = Ze.Instance.getSkinCfg(this.skinID, ee.role);
                this.addRole(e.modelName);
            }
        }
    }
    class pn {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("views/runtime/UIAdapter.ts", Kt), e("matrixSDK/TuiCloseBtn.ts", qt), e("views/itemView/AutoScorllView.ts", Jt), 
            e("views/itemView/TuiBtn.ts", on), e("views/itemView/ScrollTuiView.ts", ln), e("views/itemView/DialogTuiView.ts", hn), 
            e("views/itemView/ScrollTuiItem.ts", rn), e("views/item/GifImageView.ts", cn), e("views/runtime/RoleShowScript.ts", dn);
        }
    }
    pn.width = 750, pn.height = 1334, pn.scaleMode = "fixedwidth", pn.screenMode = "vertical", 
    pn.alignV = "top", pn.alignH = "center", pn.startScene = "GameView.scene", pn.sceneRoot = "", 
    pn.debug = !1, pn.stat = !1, pn.physicsDebug = !1, pn.exportSceneToJson = !1, pn.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(pn.width, pn.height) : Laya.init(pn.width, pn.height, Laya.WebGL), 
            Laya.DebugPanel && Laya.DebugPanel.enable(),
             Laya.stage.scaleMode = "showall", 
            // Laya.stage.screenMode = pn.screenMode, 
            Laya.stage.alignV = pn.alignV, Laya.stage.alignH = pn.alignH, 
            Laya.URL.exportSceneToJson = pn.exportSceneToJson, (pn.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            pn.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), pn.stat && Laya.Stat.show(), 
            Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION), 
            mt.Instance.initEnv();
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            mt.Instance.onConfigLoaded();
        }
    }();
}();