window.__require = function e(t, n, r) {
    function o(l, a) {
        if (!n[l]) {
            if (!t[l]) {
                var s = l.split("/");
                if (s = s[s.length - 1], !t[s]) {
                    var c = "function" == typeof __require && __require;
                    if (!a && c) return c(s, !0);
                    if (i) return i(s, !0);
                    throw new Error("Cannot find module '" + l + "'")
                }
            }
            var u = n[l] = {
                exports: {}
            };
            t[l][0].call(u.exports, function(e) {
                return o(t[l][1][e] || e)
            }, u, u.exports, e, t, n, r)
        }
        return n[l].exports
    }
    for (var i = "function" == typeof __require && __require, l = 0; l < r.length; l++) o(r[l]);
    return o
}({
    AnimCompleted: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e9574AGSMdP9rCWsy8kCA+b", "AnimCompleted"), cc.Class({
            extends: cc.Component,
            onAnimCompleted: function(e, t) {
                this.node.active = !1
            }
        }), cc._RF.pop()
    }, {}],
    Currency: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "05729yYnjZM+IOT9yScOBCk", "Currency"), t.exports.init = function() {
            Flower.Currency.checkpoint = Flower.Currency.getData("checkpoint") ? parseInt(Flower.Currency.getData("checkpoint")) : 1, Flower.Currency.wave = Flower.Currency.getData("wave") ? parseInt(Flower.Currency.getData("wave")) : 1, Flower.Currency.money = Flower.Currency.getData("money") ? Number(Flower.Currency.getData("money")) : 1e4, Flower.Currency.diamond = Flower.Currency.getData("diamond") ? Number(Flower.Currency.getData("diamond")) : 0, Flower.Currency.isPlayBgMusic = !Flower.Currency.getData("isplayBgMusic") || JSON.parse(Flower.Currency.getData("isplayBgMusic")), Flower.Currency.isPlaySound = !Flower.Currency.getData("isplaySound") || JSON.parse(Flower.Currency.getData("isplaySound"));
            var e = Flower.Currency.getData("flower");
            if (e ? Flower.Currency.flower = JSON.parse(e) : (Flower.Currency.flower = [0, 0, 0, 0, 0, null, null, null, null, null, null, null], Flower.Currency.flower[0] = new Flower.Currency.FlowerObj(Flower.Currency.BotanyData[1])), Flower.Currency.fireInfo = Flower.Currency.getData("fireInfo") ? Flower.Currency.getData("fireInfo") : "0:0", Flower.Currency.questRefrshTime = Flower.Currency.getData("questRefrshTime") ? Flower.Currency.getData("questRefrshTime") : 0, e = Flower.Currency.getData("shopprice")) Flower.Currency.shopprice = JSON.parse(e);
            else {
                Flower.Currency.shopprice = [null];
                for (var t = 1; t < Flower.Currency.BotanyData.length; t++) Flower.Currency.shopprice.push(Flower.Currency.BotanyData[t].price)
            }
            Flower.Currency.Plat = Flower.Currency.PlatType.Windows, e = Flower.Currency.getData("quests"), Flower.Currency.quests = e ? JSON.parse(e) : [], e = Flower.Currency.getData("achieves"), Flower.Currency.achieves = e ? JSON.parse(e) : [], e = Flower.Currency.getData("dialInfo"), Flower.Currency.dialInfo = e ? JSON.parse(e) : "", e = Flower.Currency.getData("plane"), Flower.Currency.planeInfo = e ? JSON.parse(e) : [], e = Flower.Currency.getData("signinflower"), Flower.Currency.signInFlower = e ? JSON.parse(e) : [], Flower.Currency.isGuide = !Flower.Currency.getData("guide") || JSON.parse(Flower.Currency.getData("guide"))
        }, t.exports.checkpointTotal = 60, t.exports.checkpoint = 1, t.exports.wave = 1, t.exports.money = 0, t.exports.diamond = 0, t.exports.isPlayBgMusic = null, t.exports.isPlaySound = null, t.exports.single = 108, t.exports.shopprice = null, t.exports.quests = [], t.exports.achieves = [], t.exports.fireInfo = null, t.exports.questRefrshTime = null, t.exports.dialInfo = null, t.exports.planeInfo = null, t.exports.signInFlower = null, t.exports.BotanyData = null, t.exports.CheckpointData = null, t.exports.MonsterData = null, t.exports.ShopLevelData = null, t.exports.AchieveData = null, t.exports.DialData = null, t.exports.planeData = null, t.exports.signInData = null, t.exports.AirdropData = null, t.exports.isGuide = null, t.exports.isBlessing = null, t.exports.flower = null, t.exports.highLevel = 1, t.exports.unLockPrice = [0, 0, 0, 0, 0, 100, 1500, 10560, 73785, 344163, 1767845, 3069284], t.exports.BulletPool = null, t.exports.color = [
            [104, 230, 255, 255],
            [239, 182, 248, 255],
            [239, 255, 155, 255],
            [221, 59, 77, 255],
            [255, 236, 153, 255],
            [255, 216, 84, 255],
            [232, 107, 95, 255],
            [214, 231, 149, 255],
            [236, 255, 92, 255],
            [255, 233, 137, 255],
            [226, 243, 145, 255],
            [252, 210, 229, 255],
            [191, 244, 144, 255],
            [224, 234, 240, 255],
            [237, 220, 136, 255],
            [164, 48, 50, 255],
            [166, 76, 128, 255],
            [255, 217, 53, 255],
            [204, 101, 43, 255],
            [173, 191, 207, 255],
            [168, 205, 221, 255],
            [222, 49, 53, 255],
            [152, 47, 218, 255],
            [52, 187, 214, 255],
            [232, 57, 117, 255],
            [239, 246, 255, 255],
            [245, 200, 21, 255],
            [41, 126, 188, 255],
            [253, 212, 45, 255],
            [242, 78, 68, 255],
            [204, 46, 38, 255],
            [251, 204, 22, 255],
            [251, 128, 52, 255],
            [203, 45, 38, 255],
            [123, 94, 200, 255],
            [197, 230, 235, 255],
            [197, 230, 235, 255],
            [255, 158, 24, 255],
            [210, 117, 198, 255],
            [48, 211, 253, 255],
            [246, 215, 98, 255],
            [42, 147, 255, 255],
            [99, 253, 142, 255],
            [42, 75, 190, 255],
            [167, 226, 250, 255],
            [178, 28, 15, 255],
            [234, 118, 22, 255],
            [113, 240, 230, 255],
            [255, 217, 53, 255],
            [255, 238, 45, 255],
            [167, 226, 250, 255],
            [48, 149, 203, 255],
            [42, 147, 255, 255],
            [74, 55, 83, 255],
            [89, 243, 245, 255],
            [184, 230, 92, 255],
            [106, 98, 44, 255],
            [58, 169, 255, 255],
            [92, 66, 60, 255],
            [226, 50, 49, 255]
        ], t.exports.monsterSize = [{
            name: "BOSS_Ani",
            size: 200
        }, {
            name: "JiangShi_DingZi",
            size: 135
        }, {
            name: "JiangShi_FangBao",
            size: 135
        }, {
            name: "JiangShi_FuWuYan",
            size: 152
        }, {
            name: "JiangShi_HuShi",
            size: 145
        }, {
            name: "JiangShi_HuaBan",
            size: 130
        }, {
            name: "JiangShi_HuaNv",
            size: 145
        }, {
            name: "JiangShi_JingGai",
            size: 139
        }, {
            name: "JiangShi_JiuGui",
            size: 139
        }, {
            name: "JiangShi_KuangGong",
            size: 139
        }, {
            name: "JiangShi_LaLaDui",
            size: 135
        }, {
            name: "JiangShi_LaoTaiTai",
            size: 167
        }, {
            name: "JiangShi_NvHai",
            size: 145
        }, {
            name: "JiangShi_NvJiangShi",
            size: 140
        }, {
            name: "JiangShi_QiQiu",
            size: 200
        }, {
            name: "JiangShi_QuanJi",
            size: 135
        }, {
            name: "JiangShi_ReGou",
            size: 170
        }, {
            name: "JiangShi_ShangBan",
            size: 145
        }, {
            name: "JiangShi_XiaoChou",
            size: 140
        }, {
            name: "JiangShi_XunBao",
            size: 155
        }, {
            name: "JiangShi_YiSheng",
            size: 135
        }, {
            name: "JiangShi_ZuQiu",
            size: 135
        }, {
            name: "JiangShi__ShengDan",
            size: 160
        }, {
            name: "Jsg_Ani",
            size: 110
        }, {
            name: "Jsz_Ani",
            size: 100
        }, {
            name: "XinNiang_Ani",
            size: 140
        }, {
            name: "Z1_Ani",
            size: 140
        }, {
            name: "Z2_Ani_Gai",
            size: 155
        }, {
            name: "Z_BeiBao_Ani",
            size: 145
        }, {
            name: "Z_BengDai_Ani_Gai",
            size: 160
        }, {
            name: "Z_BiJiNi_Ani_Gai",
            size: 125
        }, {
            name: "Z_BoShi_Ani_Gai",
            size: 165
        }, {
            name: "Z_ChuShi_Ani_Gai",
            size: 160
        }, {
            name: "Z_DuYe_Ani",
            size: 180
        }, {
            name: "Z_FeiJiTou_Ani_Gai",
            size: 150
        }, {
            name: "Z_GanLanQiu_Ani_Gai",
            size: 155
        }, {
            name: "Z_GuShou",
            size: 153
        }, {
            name: "Z_HaiDao_Ani_Gai",
            size: 150
        }, {
            name: "Z_HeMa_Ani_Gai",
            size: 150
        }, {
            name: "Z_JingCha_Ani",
            size: 156
        }, {
            name: "Z_LanQiu_Ani",
            size: 173
        }, {
            name: "Z_MeiRenYu_Ani_Gai",
            size: 150
        }, {
            name: "Z_PZ_Ani",
            size: 145
        }, {
            name: "Z_PangZi_Ani",
            size: 147
        }, {
            name: "Z_PingHeng_Ani",
            size: 152
        }, {
            name: "Z_Rock",
            size: 141
        }, {
            name: "Z_ShiBing_Ani",
            size: 145
        }, {
            name: "Z_XiangPu_Ani",
            size: 157
        }, {
            name: "Z_XiaoFang_Ani",
            size: 142
        }, {
            name: "Z_YingErChe_Ani_Gai",
            size: 158
        }, {
            name: "Z_YuHuang_Ani",
            size: 160
        }, {
            name: "longguchai1",
            size: 138
        }], t.exports.offtimes = 0, t.exports.isLookVideo = !1, t.exports.shareTimes = 0, t.exports.sharetarget = null, t.exports.sharefunc = null, t.exports.soundtarget = null, t.exports.soundfunc = null, t.exports.tiptarget = null, t.exports.tipfunc = null, t.exports.rewardTarget = null, t.exports.rewardFunc = null, t.exports.rewardFunc2 = null, t.exports.sufixes0 = "KMBT", t.exports.sufixes1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", t.exports.FlowerObj = cc.Class({
            level: null,
            cd: null,
            power: null,
            skill: null,
            offline: null,
            price: null,
            gem: null,
            ani: null,
            shootPos: null,
            head: null,
            ctor: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this.level = e.level, this.cd = e.cd, this.power = e.power, this.skill = [], this.offline = e.offline, this.price = e.price, this.gem = e.gem, this.ani = e.prefab, this.shootPos = [], this.head = e.head;
                for (var t = 0; t < e.skill.length; t++) this.skill.push(e.skill[t]);
                for (t = 0; t < e.shoot_pos.length; t++) this.shootPos.push(e.shoot_pos[t])
            }
        }), t.exports.QuestObj = cc.Class({
            id: null,
            count: null,
            pro: null,
            award: !1
        }), t.exports.DialObj = cc.Class({
            num: null,
            total: null,
            adCd: null,
            lastTime: null
        }), t.exports.SkillType = {
            SlowDown: 1,
            Critical: 2,
            Frozen: 3
        }, t.exports.ActionType = {
            CriticalShow: 0,
            CoinShow: 1,
            BossWarning: 2
        }, t.exports.MusicType = {
            click: 0,
            fail: 1,
            hit: 2,
            merge: 3,
            skill_critical: 4,
            skill_freeze: 5,
            skill_slow: 6,
            success_one: 7,
            success_two: 8,
            bgm: 9,
            flower_pot_tap: 10,
            flower_pot_land: 11,
            plane: 12
        }, t.exports.loadStep = {
            WxAPIInit: 0,
            READCONFIG: 1,
            WHOLE: 2,
            COMPLETE: 5
        }, t.exports.MessageType = {
            TIP: 0,
            SHAREFAIL: 1,
            PLAYFAIL: 2
        }, t.exports.PlatType = {
            Windows: 1,
            WX: 2
        }, t.exports.RewardType = {
            Coin: 1,
            Gem: 2
        }, t.exports.saveData = function(e) {
            switch (e) {
                case "flower":
                    Flower.Currency.setData("flower", JSON.stringify(Flower.Currency.flower));
                    break;
                case "shopprice":
                    Flower.Currency.setData("shopprice", JSON.stringify(Flower.Currency.shopprice));
                    break;
                case "checkpoint":
                    Flower.Currency.setData("checkpoint", Flower.Currency.checkpoint), Flower.Currency.setData("wave", Flower.Currency.wave)
            }
        }, t.exports.AddSeed = function(e) {
            for (var t = 0; t < e.length; t++) Flower.Currency.planeInfo.push(e[t])
        }, t.exports.ShowTip = function(e) {
            Flower.Currency.tiptarget && Flower.Currency.tipfunc && Flower.Currency.tipfunc.call(Flower.Currency.tiptarget, e)
        }, t.exports.ShowEffect = function(e) {
            Flower.Currency.rewardTarget && Flower.Currency.rewardFunc && Flower.Currency.rewardFunc.call(Flower.Currency.rewardTarget, e)
        }, t.exports.ShowEffect2 = function(e, t) {
            Flower.Currency.rewardTarget && Flower.Currency.rewardFunc2 && Flower.Currency.rewardFunc2.call(Flower.Currency.rewardTarget, e, t)
        }, t.exports.gameShare = function(e, t) {
            var n = "\u82b1\u82b1\u60f9\u4e0d\u8d77",
                r = "";
            wx.shareAppMessage({
                title: n,
                imageUrl: r,
                query: "userid=0"
            }), Flower.Currency.sharetarget = e, Flower.Currency.sharefunc = t
        }, t.exports.getDistance = function(e, t) {
            var n = Math.abs(e.x - t.x),
                r = Math.abs(e.y - t.y);
            return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2))
        }, t.exports.ToGoodString = function(e) {
            if (e <= 0) return 0;
            var t = parseInt(Math.log10(e)),
                n = e / Math.pow(10, t / 3 * 3);
            if (t <= 2) return e + "";
            if (t > 2 && t <= 5) return n = 4 == t ? (n *= 10).toFixed(1) : 5 == t ? (n *= 100).toFixed(1) : n.toFixed(1), Flower.Currency.stringFormat("{0}{1}", n, Flower.Currency.sufixes0[0]);
            if (t > 5 && t <= 8) return n = 7 == t ? (n *= 10).toFixed(1) : 8 == t ? (n *= 100).toFixed(1) : n.toFixed(1), Flower.Currency.stringFormat("{0}{1}", n, Flower.Currency.sufixes0[1]);
            if (t > 8 && t <= 11) return n = 10 == t ? (n *= 10).toFixed(1) : 11 == t ? (n *= 100).toFixed(1) : n.toFixed(1), Flower.Currency.stringFormat("{0}{1}", n, Flower.Currency.sufixes0[2]);
            if (t > 11 && t <= 14) return n = 13 == t ? (n *= 10).toFixed(1) : 14 == t ? (n *= 100).toFixed(1) : n.toFixed(1), Flower.Currency.stringFormat("{0}{1}", n, Flower.Currency.sufixes0[3]);
            var r = (t - 15) % 3;
            n = (n * Math.pow(10, r)).toFixed(1);
            var o = parseInt((t - 15) / 78),
                i = parseInt((t - 15 - 78 * o) / 3);
            return o >= Flower.Currency.sufixes1.length && (o = Flower.Currency.sufixes1.length - 1), i >= Flower.Currency.sufixes1.length && (i = Flower.Currency.sufixes1.length - 1), Flower.Currency.stringFormat("{0}{1}{2}", n, Flower.Currency.sufixes1[o], Flower.Currency.sufixes1[i])
        }, t.exports.stringFormat = function() {
            if (0 == arguments.length) return null;
            for (var e = arguments[0], t = 1; t < arguments.length; t++) {
                var n = new RegExp("\\{" + (t - 1) + "\\}", "gm");
                e = e.replace(n, arguments[t])
            }
            return e
        }, t.exports.ToClockString = function(e) {
            var t = 0,
                n = 0;
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (t = parseInt(e / 86400), n = parseInt((e - parseFloat(3600 * t * 24)) / 3600)) : n = parseInt(e / 3600);
            var r = parseInt((e - parseFloat(3600 * n)) / 60),
                o = parseInt(Math.ceil(e - parseFloat(3600 * n) - parseFloat(60 * r)));
            return 60 == o && (o = 0, r++), 60 == r && (r = 0, n++), n = Flower.Currency.PrefixInteger(n, 2), r = Flower.Currency.PrefixInteger(r, 2), o = Flower.Currency.PrefixInteger(o, 2), Flower.Currency.stringFormat("{0}:{1}:{2}", n, r, o)
        }, t.exports.PrefixInteger = function(e, t) {
            return (Array(t).join(0) + e).slice(-t)
        }, t.exports.getRandomNumber = function(e, t) {
            var n = (Math.floor(Math.random() * (t - e + 1) + e) + Math.floor(Math.random() * (t - e + 1) + e) + Math.floor(Math.random() * (t - e + 1) + e)) / 3;
            return Math.round(n)
        }, t.exports.planeAction = function(e, t, n, r) {
            e.runAction(cc.sequence(cc.moveBy(.8, cc.v2(-250, 0)), cc.delayTime(2), cc.moveBy(5, cc.v2(-600, 0)), cc.delayTime(2), cc.moveBy(5, cc.v2(600, 0)), cc.delayTime(2), cc.moveBy(5, cc.v2(-600, 0)), cc.delayTime(2), cc.moveBy(.8, cc.v2(-250, 0)), cc.callFunc(function() {
                e.x = t.x, e.y = t.y, e.active = !1, r.call(n)
            })))
        }, t.exports.currencyAction = function(e, t) {
            switch (t) {
                case Flower.Currency.ActionType.CriticalShow:
                    var n = {
                        x: e.x,
                        y: e.y
                    };
                    e.opacity = 255, e.active = !0, e.runAction(cc.spawn(cc.moveBy(.7, cc.v2(0, 35)), cc.sequence(cc.delayTime(.6), cc.fadeOut(.1), cc.callFunc(function() {
                        e.active = !1, e.x = n.x, e.y = n.y
                    }))));
                    break;
                case Flower.Currency.ActionType.CoinShow:
                    e.active = !0, e.scale = 0, e.runAction(cc.spawn(cc.moveBy(.4, cc.v2(0, 35)), cc.sequence(cc.sequence(cc.scaleTo(.2, 1), cc.scaleTo(.06, .95), cc.scaleTo(.06, 1)), cc.delayTime(.8), cc.callFunc(function() {
                        e.active = !1, e.scale = 1
                    }))));
                    break;
                case Flower.Currency.ActionType.BossWarning:
                    e.scaleX = 0, e.runAction(cc.scaleTo(.2, 1, 1))
            }
        }, t.exports.viewEffect = function(e, t, n, r) {
            t ? (e.scale = 0, e.runAction(cc.sequence(cc.scaleTo(.16, 1), cc.scaleTo(.06, .95), cc.scaleTo(.06, 1)))) : (e.scale = 1, e.runAction(cc.sequence(cc.scaleTo(.15, 0), cc.callFunc(function() {
                r && r.call(n)
            }))))
        }, t.exports.setData = function(e, t) {
            cc.sys.localStorage.setItem(e, t)
        }, t.exports.getData = function(e) {
            return cc.sys.localStorage.getItem(e)
        }, t.exports.requestFile = function(e, t, n, r) {
            wx.request({
                url: e,
                dataType: t,
                complete: function(e) {
                    n && r && r.call(n, e.data)
                }
            })
        }, t.exports.httpRequest = function(e, t) {
            var n = cc.loader.getXMLHttpRequest();
            n.timeout = 3e5, n.onreadystatechange || (n.onreadystatechange = function() {
                4 == n.readyState && (n.status >= 200 && n.status <= 207 && t ? t(!0, n) : t && t(!1, n))
            }), n.open("POST", e, !0), cc.sys.isNative ? n.setRequestHeader("content-type", "text/plain;charset=UTF-8") : n.setRequestHeader("content-type", "application/x-www-form-urlencoded"), n.send(null)
        }, t.exports.bottonAnim = function(e) {
            var t = new Array;
            void 0 == e.length ? t[0] = e : t = e;
            for (var n = 0; n < t.length; n++) {
                var r = t[n].scale,
                    o = 5 * Math.random() + 1,
                    i = t[n].height * r / 25,
                    l = cc.jumpBy(o, cc.v2(i, 0), i, 1),
                    a = cc.jumpBy(o, cc.v2(-i, 0), -i, 1),
                    s = cc.scaleBy(.3, r + .05, r - .05),
                    c = cc.delayTime(o),
                    u = cc.sequence(l, a, s, s.reverse(), c);
                t[n].runAction(u.repeatForever())
            }
        }, t.exports.playSound = function(e) {
            Flower.Currency.soundtarget && Flower.Currency.soundfunc && Flower.Currency.soundfunc.call(Flower.Currency.soundtarget, e)
        }, t.exports.playBackgroundMusic = function(e) {
            e && (Flower.Currency.isPlayBgMusic ? (cc.audioEngine.setMusicVolume(.8), cc.audioEngine.playMusic(e, !0)) : cc.audioEngine.stopMusic())
        }, t.exports.playEffectMusic = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null != e && Flower.Currency.isPlaySound) return cc.audioEngine.setEffectsVolume(1), cc.audioEngine.playEffect(e, t)
        }, t.exports.stopEffectMusic = function(e) {
            cc.audioEngine.stopEffect(e)
        }, t.exports.CSVToArray = function(e, t) {
            t = t || ",";
            for (var n = new RegExp("(\\" + t + '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + t + "\\r\\n]*))", "gi"), r = [
                    []
                ], o = null; o = n.exec(e);) {
                var i = o[1];
                if (i.length && i != t && r.push([]), o[2]) var l = o[2].replace(new RegExp('""', "g"), '"');
                else l = o[3];
                r[r.length - 1].push(l)
            }
            return r
        }, t.exports.recoverInfo = function() {
            var e = Flower.Currency.offtimes;
            e = e ? parseInt(e) : 0;
            var t = Flower.Currency.fireInfo.split(":"),
                n = Number(t[0]) - e,
                r = Number(t[1]) - e;
            n = n <= 0 ? 0 : n, r = r <= 0 ? 0 : r, Flower.Currency.fireInfo = n + ":" + r, Flower.Currency.setData("fireInfo", Flower.Currency.fireInfo)
        }, t.exports.recoverDialInfo = function() {
            var e = Flower.Currency.offtimes;
            e = e ? parseInt(e) : 0;
            var t = Flower.Currency.dialInfo.adCd;
            t = t > e ? t - e : 0, Flower.Currency.dialInfo.adCd = t, Flower.Currency.setData("dialInfo", JSON.stringify(Flower.Currency.dialInfo))
        }, cc._RF.pop()
    }, {}],
    DialView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7a55eOyqohB/oK+C8DXXtVu", "DialView");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                dialNode: cc.Node,
                remNum: cc.Node,
                iconSp: [cc.SpriteFrame],
                headAtlas: cc.SpriteAtlas,
                newIcon: cc.Node,
                awardNode: cc.Node,
                point: cc.Node,
                flowerManage: cc.Node,
                doubleButton: cc.Button
            },
            start: function() {
                this.node.getChildByName("btn1").getComponent(cc.Button).enableAutoGrayEffect = !0, r.default.is4399() && "0" == r.default.AdRemain4399 && (this.doubleButton.node.active = !1)
            },
            updateTime: function(e) {
                if (0 != Flower.Currency.dialInfo.adCd) {
                    var t = Flower.Currency.dialInfo.adCd - e;
                    Flower.Currency.dialInfo.adCd = t < 0 ? 0 : t, this.remNum.getComponent(cc.Label).string = Flower.Currency.ToClockString(Flower.Currency.dialInfo.adCd), 0 == Flower.Currency.dialInfo.adCd && this.editBtnNode()
                }
            },
            refreshView: function() {
                this.mayData = [];
                for (var e = 0; e < 6; e++) this.randDialContent();
                this.dialNode.angle = 0;
                var t = this.dialNode.children;
                for (e = 0; e < t.length; e++) this.editDialchild(t[e], this.mayData[e]);
                this.editBtnNode()
            },
            editBtnNode: function() {
                this.refreshDialInfo();
                var e = this.node.getChildByName("btn1");
                if (0 != Flower.Currency.dialInfo.adCd) e.getComponent(cc.Button).interactable = !1, this.remNum.getComponent(cc.Label).string = Flower.Currency.ToClockString(Flower.Currency.dialInfo.adCd);
                else if (Flower.Currency.dialInfo.num >= Flower.Currency.dialInfo.total) e.getComponent(cc.Button).interactable = !1, this.remNum.getComponent(cc.Label).string = "\u672c\u65e5\u6b21\u6570\u7528\u5b8c";
                else {
                    e.getComponent(cc.Button).interactable = !0;
                    var t = Flower.Currency.dialInfo.total - Flower.Currency.dialInfo.num;
                    t = t < 0 ? 0 : t, this.remNum.getComponent(cc.Label).string = "(" + t + "/" + Flower.Currency.dialInfo.total + ")"
                }
                this.newIcon.active = e.getComponent(cc.Button).interactable, r.default.is4399() && "0" == r.default.AdRemain4399 && (this.doubleButton.node.active = !1)
            },
            editDialchild: function(e, t) {
                var n = e.getChildByName("num");
                if (5 == t.type) {
                    var r = Flower.Currency.highLevel;
                    r = r <= 5 ? 1 : r - 5, e._components[0].spriteFrame = this.headAtlas.getSpriteFrame(Flower.Currency.BotanyData[r].prefab), n.getComponent(cc.Label).string = "LV." + r
                } else if (1 == t.type) {
                    e._components[0].spriteFrame = this.iconSp[t.type - 1];
                    var o = this.node.parent.getComponent("GameScene").offlineSc.caculateSc(3600 * t.reward);
                    n.getComponent(cc.Label).string = Flower.Currency.ToGoodString(o)
                } else 3 == t.type ? (e._components[0].spriteFrame = this.iconSp[t.type - 1], n.getComponent(cc.Label).string = t.reward + "s") : (e._components[0].spriteFrame = this.iconSp[t.type - 1], n.getComponent(cc.Label).string = t.reward)
            },
            randDialContent: function() {
                for (var e = 0, t = [], n = 1; n < Flower.Currency.DialData.length; n++) - 1 == this.mayData.indexOf(Flower.Currency.DialData[n]) && (e += Flower.Currency.DialData[n].extract_probability, t.push(Flower.Currency.DialData[n]));
                var r = parseInt(Math.random() * e),
                    o = 0;
                for (n = 0; n < t.length; n++)
                    if (r < (o += t[n].extract_probability)) return void this.mayData.push(t[n])
            },
            refreshDialInfo: function() {
                Flower.Currency.dialInfo && !this.verifyShouldUpdate() || (Flower.Currency.dialInfo = new Flower.Currency.DialObj, Flower.Currency.dialInfo.num = 0, Flower.Currency.dialInfo.total = 5, Flower.Currency.dialInfo.adCd = 0, Flower.Currency.dialInfo.lastTime = 0, Flower.Currency.setData("dialInfo", JSON.stringify(Flower.Currency.dialInfo)))
            },
            verifyShouldUpdate: function() {
                var e = new Date((new Date).toLocaleDateString()).getTime();
                return Flower.Currency.dialInfo.lastTime < e
            },
            adBtnClick: function() {
                if (!this.hasStart) {
                    var e = Flower.Currency.dialInfo;
                    0 == e.adCd ? e.num >= e.total ? Flower.Currency.ShowTip("\u6b21\u6570\u4e0d\u8db3") : r.default.showVideo(this, this.adBtnAward, this.freeFailed, "3") : Flower.Currency.ShowTip("CD\u4e2d")
                }
            },
            adBtnAward: function() {
                Flower.Currency.dialInfo.num += 1, Flower.Currency.dialInfo.lastTime = (new Date).getTime(), Flower.Currency.dialInfo.num >= Flower.Currency.dialInfo.total ? Flower.Currency.dialInfo.adCd = 0 : Flower.Currency.dialInfo.adCd = 300, Flower.Currency.setData("dialInfo", JSON.stringify(Flower.Currency.dialInfo)), this.editBtnNode(), this.node.parent.getComponent("GameScene").questSc.updateQuestPro(4, 1, 0), this.startDial()
            },
            freeFailed: function() {
                console.log("DialView freeFailed!")
            },
            gemBtnClick: function() {
                this.hasStart || (Flower.Currency.diamond < 5 ? Flower.Currency.ShowTip("\u94bb\u77f3\u4e0d\u8db3") : (Flower.Currency.ShowEffect(Flower.Currency.RewardType.Gem), this.node.parent.getComponent("GameScene").operateGem(!1, 5), this.startDial()))
            },
            startDial: function() {
                var e = this.randAward(),
                    t = 60 * e[1];
                this.data = e[0], this.hasStart = !0;
                var n = 2880 - t,
                    r = cc.rotateTo(5, n);
                r.easing(cc.easeCubicActionOut());
                var o = cc.callFunc(this.awardViewShow, this),
                    i = cc.sequence(r, o);
                this.dialNode.runAction(i);
                i = cc.repeat(cc.sequence(cc.rotateTo(1, -30), cc.callFunc(function() {
                    this.point.angle = 0
                }.bind(this))), 4);
                this.point.runAction(i)
            },
            awardViewShow: function() {
                this.awardNode.active = !0;
                var e = this.awardNode.getChildByName("icon"),
                    t = this.awardNode.getChildByName("num"),
                    n = this.data,
                    r = Flower.Currency.highLevel;
                switch (5 == n.type ? (r = r <= 5 ? 1 : r - 5, e._components[0].spriteFrame = this.headAtlas.getSpriteFrame(Flower.Currency.BotanyData[r].prefab)) : e._components[0].spriteFrame = this.iconSp[n.type - 1], n.type) {
                    case 1:
                        var o = this.node.parent.getComponent("GameScene").offlineSc.caculateSc(3600 * n.reward);
                        Flower.Currency.ShowEffect(Flower.Currency.RewardType.Coin), this.node.parent.getComponent("GameScene").operateMoney(!0, o), t.getComponent(cc.Label).string = "x" + Flower.Currency.ToGoodString(o);
                        break;
                    case 2:
                        Flower.Currency.ShowEffect(Flower.Currency.RewardType.Gem), this.node.parent.getComponent("GameScene").operateGem(!0, n.reward), t.getComponent(cc.Label).string = "x" + n.reward;
                        break;
                    case 3:
                        this.fireAward(n.reward), t.getComponent(cc.Label).string = "+" + n.reward + "s", this.flowerManage.getComponent("FlowerManage").handleRage(!0);
                        break;
                    case 4:
                        console.log("\u83b7\u5f97\u7a7a\u6295\u76c6\u683d"), t.getComponent(cc.Label).string = "x" + n.reward;
                        break;
                    case 5:
                        console.log("\u6307\u5b9a\u7b49\u7ea7\u690d\u7269"), t.getComponent(cc.Label).string = "Lv." + r;
                        for (var i = [], l = 0; l < n.reward; l++) i.push(r);
                        Flower.Currency.AddSeed(i);
                        i = Flower.Currency.planeInfo[0];
                        Flower.Currency.planeInfo[0] = Flower.Currency.planeInfo[Flower.Currency.planeInfo.length - 1], Flower.Currency.planeInfo[Flower.Currency.planeInfo.length - 1] = i, this.flowerManage.getComponent("FlowerManage").handlePlane()
                }
            },
            closeAwardView: function() {
                this.awardNode.active = !1, this.hasStart = !1, this.refreshView()
            },
            fireAward: function(e) {
                var t = Flower.Currency.fireInfo.split(":"),
                    n = Number(t[0]),
                    r = (n = n <= 0 ? 0 : n) + e;
                r = r > 150 ? 150 : r, Flower.Currency.fireInfo = r + ":" + t[1], Flower.Currency.setData("fireInfo", Flower.Currency.fireInfo)
            },
            randAward: function() {
                for (var e = 0, t = [], n = 1; n < this.mayData.length; n++) e += this.mayData[n].win_probability;
                var r = parseInt(Math.random() * e),
                    o = 0;
                for (n = 0; n < this.mayData.length; n++)
                    if (r < (o += this.mayData[n].win_probability)) return t.push(this.mayData[n]), t.push(n), t
            },
            closeBtnClick: function() {
                this.showView(!1)
            },
            openBtnClick: function() {
                this.showView(!0)
            },
            showView: function(e) {
                r.default.hideBanner(), this.node.active = e, e ? (this.refreshView(), r.default.showBanner("4")) : this.awardNode.active = !1
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    Effect: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cd90bvo8M5BsJMWthX86tMB", "Effect"), cc.Class({
            extends: cc.Component,
            properties: {
                spriteNode: [cc.Node],
                spriteName: [cc.SpriteFrame],
                money: cc.Node,
                gem: cc.Node,
                effectNode: [cc.Node],
                mon: cc.Node
            },
            playAnimation: function(e) {
                var t = this,
                    n = e == Flower.Currency.RewardType.Coin ? {
                        x: this.money.x,
                        y: this.money.y
                    } : {
                        x: this.gem.x,
                        y: this.gem.y
                    };
                this.mon.active = !0;
                var r = new cc.v2(-170, 100);
                n.x < 0 && (r.x = 170);
                for (var o = 0, i = function(i) {
                        t.spriteNode[i].getComponent(cc.Sprite).spriteFrame = t.spriteName[e - 1], t.spriteNode[i].opacity = 255, t.spriteNode[i].active = !0, t.spriteNode[i].setPosition(1, -3), a = [cc.v2(1, -3), r, cc.v2(n.x, n.y)], t.spriteNode[i].runAction(cc.sequence(cc.delayTime(o), cc.bezierTo(.6, a), cc.fadeTo(.15, 0), cc.callFunc(function() {
                            this.spriteNode[i].active = !1, i >= 7 && (this.mon.active = !1)
                        }.bind(t)))), o += .15
                    }, l = 0; l < this.spriteNode.length; l++) {
                    var a;
                    i(l)
                }
            },
            playAnimation2: function(e, t) {
                for (var n = this, r = null, o = 0; o < this.effectNode.length; o++)
                    if (!this.effectNode[o].active) {
                        r = o;
                        break
                    } if (null != r) {
                    var i = e == Flower.Currency.RewardType.Coin ? {
                            x: this.money.x,
                            y: this.money.y
                        } : {
                            x: this.gem.x,
                            y: this.gem.y
                        },
                        l = new cc.v2(-170, 100);
                    t.x < 0 && (l.x = 170);
                    var a = 0;
                    this.effectNode[r].active = !0;
                    for (var s = function(o) {
                            n.effectNode[r].children[o].getComponent(cc.Sprite).spriteFrame = n.spriteName[e - 1], n.effectNode[r].children[o].opacity = 255, n.effectNode[r].children[o].active = !0, n.effectNode[r].children[o].setPosition(t.x, t.y), u = [cc.v2(t.x, t.y), l, cc.v2(i.x, i.y)], n.effectNode[r].children[o].stopAllActions(), n.effectNode[r].children[o].runAction(cc.sequence(cc.delayTime(a), cc.bezierTo(.6, u), cc.fadeTo(.1, 0), cc.callFunc(function() {
                                this.effectNode[r].children[o].active = !1, this.effectNode[r].active = !1
                            }.bind(n)))), a += .1
                        }, c = 0; c < this.effectNode[r].childrenCount; c++) {
                        var u;
                        s(c)
                    }
                }
            }
        }), cc._RF.pop()
    }, {}],
    FireView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7d9b1B4toJGmpU03PfTfbKO", "FireView");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                proTime: cc.Label,
                adTime: cc.Label,
                proNode: [cc.Node],
                doubleButton: cc.Button,
                flowerManage: cc.Node,
                fireMsg: cc.Node,
                fireTime: cc.Node
            },
            start: function() {
                r.default.is4399() && "0" == r.default.AdRemain4399 && (this.doubleButton.node.active = !1)
            },
            refreshView: function() {
                var e = Flower.Currency.fireInfo.split(":"),
                    t = Number(e[0]);
                t = t <= 0 ? 0 : t, this.proTime.string = Flower.Currency.ToClockString(t);
                var n = Number(e[1]);
                n = n <= 0 ? 0 : n, this.adTime.string = Flower.Currency.ToClockString(n), this.refreshProBar(t), r.default.is4399() && "0" == r.default.AdRemain4399 && (this.doubleButton.node.active = !1)
            },
            refreshProBar: function(e) {
                for (var t = 0; t < 5; t++) this.refreshProBar2(e, t)
            },
            refreshProBar2: function(e, t) {
                var n = (e - 30 * t) / 30;
                n < 0 ? n = 0 : n > 1 && (n = 1), this.proNode[t]._components[1].progress = n
            },
            updateTime: function(e) {
                var t = Flower.Currency.fireInfo.split(":"),
                    n = Number(t[0]) - e,
                    r = Number(t[1]) - e;
                n = n <= 0 ? 0 : n, r = r <= 0 ? 0 : r, Flower.Currency.fireInfo = n + ":" + r, 0 == n && this.flowerManage.getComponent("FlowerManage").isRage && (this.flowerManage.getComponent("FlowerManage").handleRage(!1), this.fireMsg.active = !1), this.fireMsg.active = !(0 == n), this.fireTime.getComponent(cc.Label).string = Flower.Currency.ToClockString(n), this.node.active && (this.refreshProBar(n), this.proTime.string = Flower.Currency.ToClockString(n), this.adTime.string = Flower.Currency.ToClockString(r))
            },
            adBtnClick: function() {
                var e = Flower.Currency.fireInfo.split(":"),
                    t = Number(e[0]),
                    n = Number(e[1]);
                return t = t <= 0 ? 0 : t, n = n <= 0 ? 0 : n, t > 120 ? (console.log("\u5145\u80fd\u65f6\u95f4\u5927\u4e8e120\u79d2"), void Flower.Currency.ShowTip("\u5269\u4f59\u72c2\u66b4\u65f6\u95f4\u8fc7\u957f,\u6682\u65f6\u4e0d\u80fd\u5145\u80fd")) : n > 0 ? (console.log("\u5e7f\u544acd\u4e2d"), void Flower.Currency.ShowTip("\u5e7f\u544acd\u4e2d")) : void r.default.showVideo(this, this.adBtnAward, this.freeFailed, "6")
            },
            adBtnAward: function() {
                var e = Flower.Currency.fireInfo.split(":"),
                    t = Number(e[0]);
                t = t <= 0 ? 0 : t, this.flowerManage.getComponent("FlowerManage").handleRage(!0), Flower.Currency.fireInfo = t + 30 + ":120", Flower.Currency.setData("fireInfo", Flower.Currency.fireInfo), this.refreshView(), this.node.parent.getComponent("GameScene").questSc.updateQuestPro(4, 1, 0)
            },
            freeFailed: function() {
                console.log("FireView freeFailed!")
            },
            gemBtnClick: function() {
                var e = Flower.Currency.fireInfo.split(":"),
                    t = Number(e[0]);
                if ((t = t <= 0 ? 0 : t) > 120) return console.log("\u5145\u80fd\u65f6\u95f4\u5927\u4e8e120\u79d2"), void Flower.Currency.ShowTip("\u5269\u4f59\u72c2\u66b4\u65f6\u95f4\u8fc7\u957f,\u6682\u65f6\u4e0d\u80fd\u5145\u80fd");
                Flower.Currency.diamond < 3 ? Flower.Currency.ShowTip("\u5e7f\u544acd\u4e2d") : (this.flowerManage.getComponent("FlowerManage").handleRage(!0), this.node.parent.getComponent("GameScene").operateGem(!1, 3), Flower.Currency.fireInfo = t + 30 + ":" + e[1], Flower.Currency.setData("fireInfo", Flower.Currency.fireInfo), this.refreshView())
            },
            makeWarnMsg: function(e) {
                this.warnMsg.getComponent(cc.Label).string = e, this.warnMsg.stopAllActions(), this.warnMsg.opacity = 255;
                var t = cc.fadeOut(3),
                    n = cc.callFunc(this.hiddenWarnMsg, this),
                    r = cc.sequence(t, n);
                this.warnMsg.runAction(r)
            },
            hiddenWarnMsg: function() {
                this.warnMsg.opacity = 0
            },
            closeBtnClick: function() {
                this.showView(!1)
            },
            openBtnClick: function() {
                this.showView(!0)
            },
            showView: function(e) {
                r.default.hideBanner(), this.node.active = e, e && (r.default.showBanner("6"), this.refreshView())
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    FlowerManage: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8b9c5jR9uNK8avumYDguuJk", "FlowerManage");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                flowerPrefab: cc.Prefab,
                flowerPortPrefab: cc.Prefab,
                headAtlas: cc.SpriteAtlas,
                list: cc.Node,
                flowerNode: [cc.Node],
                corpseNode: cc.Node,
                mergeAni: cc.Node,
                recoveryNode: cc.Node,
                buyBtn: cc.Node,
                newFlowerNode: cc.Node,
                UnlockTip: cc.Node,
                GuideNode: cc.Node,
                mergeBtn: cc.Node
            },
            gameSc: null,
            parentSc: null,
            selectPos: null,
            selectIndex: null,
            selectFlower: null,
            isLock: null,
            isFlowerPort: null,
            speedTime: null,
            flowerIndex: null,
            monsterName: null,
            timeOutID: null,
            UnlockIndex: null,
            isRage: null,
            isActiveMerge: null,
            mergeAction: null,
            mergeIndex1: null,
            mergeIndex2: null,
            onLoad: function() {
                this.isRage = !1, this.gameSc = this.node.parent.parent.getComponent("GameScene"), this.parentSc = this.node.parent.parent.getComponent("GameControl"), this.initList(), this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this), this.isActiveMerge = !1, setInterval(function() {
                    this.handleAirdrop()
                }.bind(this), 15e3)
            },
            start: function() {},
            update: function(e) {
                for (var t = 0; t < Flower.Currency.flower.length; t++)
                    if (null != Flower.Currency.flower[t] && 0 != Flower.Currency.flower[t] && 1 != Flower.Currency.flower[t] && this.flowerNode[t].active) {
                        this.speedTime[t] += e;
                        var n = this.isRage ? Flower.Currency.flower[t].cd / 2 : Flower.Currency.flower[t].cd;
                        if (this.speedTime[t] >= n) {
                            this.speedTime[t] = 0;
                            var r = this.judgeIsMonster({
                                x: this.flowerNode[t].x,
                                y: this.flowerNode[t].y
                            });
                            null != r && (this.monsterName[t] = this.corpseNode.children[r].name, this.corpseNode.children[r].x > 0 ? this.flowerNode[t].getChildByName("flower").scaleX = -1 : this.flowerNode[t].getChildByName("flower").scaleX = 1, this.flowerNode[t].getChildByName("flower").getComponent("flower").playHitAnimation(), this.flowerIndex.push(t), setTimeout(function() {
                                this.createBullet()
                            }.bind(this), 100))
                        }
                    } else this.speedTime[t] = 0
            },
            touchStart: function(e) {
                this.isLock = !1, this.isFlowerPort = !1;
                for (var t = e.touch.getLocation(), n = 0; n < 12; n++) {
                    if (this.flowerNode[n].getBoundingBoxToWorld().contains(t)) {
                        if (this.flowerNode[n].active && null != Flower.Currency.flower[n] && 0 != Flower.Currency.flower[n] && 1 != Flower.Currency.flower[n]) return this.isActiveMerge && this.mergeCallback(), this.selectIndex = n, this.selectPos = {
                            x: this.flowerNode[n].x,
                            y: this.flowerNode[n].y
                        }, this.selectFlower.getComponent("flower").init(Flower.Currency.flower[n].level, this.node, this.flowerNode[n].getChildByName("flower").scaleX), this.selectFlower.anchorY = 0, this.selectFlower.x = this.flowerNode[n].x, this.selectFlower.y = this.flowerNode[n].y, this.selectFlower.active = !0, this.flowerNode[n].active = !1, void this.handleSign(!0, Flower.Currency.flower[n].level);
                        null == Flower.Currency.flower[n] && (this.isLock = !0), 1 == Flower.Currency.flower[n] && (this.isFlowerPort = !0)
                    }
                }
            },
            touchMove: function(e) {
                if (null != this.selectIndex) {
                    var t = e.touch.getLocation(),
                        n = this.list.convertToNodeSpaceAR(cc.v2(t.x, t.y));
                    this.selectFlower.x = n.x, this.selectFlower.y = n.y
                }
            },
            touchEnd: function(e) {
                for (var t = e.touch.getLocation(), n = null, r = 0; r < 12; r++) {
                    this.flowerNode[r].getBoundingBoxToWorld().contains(t) && (null != Flower.Currency.flower[r] && 1 != Flower.Currency.flower[r] && r != this.selectIndex && (n = r), null == Flower.Currency.flower[r] && this.isLock && this.showUnlockNode(r), 1 == Flower.Currency.flower[r] && this.isFlowerPort && this.handleFlowerPort(r))
                }
                if (null != this.selectIndex) {
                    if (this.recoveryNode.getBoundingBoxToWorld().contains(t) && (this.handleRecovery(this.selectIndex), this.handleBuyShow()), this.handleSign(!1, 0), null == n) return this.flowerNode[this.selectIndex].active = !0, this.selectFlower.active = !1, this.selectIndex = null, void(this.selectPos = null);
                    this.flowerNode[this.selectIndex].active = !0;
                    var o = this.flowerNode[this.selectIndex].getChildByName("flower").scaleX;
                    if (this.selectFlower.active = !1, 0 == Flower.Currency.flower[n]) {
                        if (Flower.Currency.flower[n] = Flower.Currency.flower[this.selectIndex], null == this.flowerNode[n].getChildByName("flower")) {
                            var i = cc.instantiate(this.flowerPrefab);
                            i.name = "flower", i.getComponent("flower").init(Flower.Currency.flower[n].level, this.node, o, this.isRage), this.flowerNode[n].addChild(i)
                        } else this.flowerNode[n].getChildByName("flower").getComponent("flower").init(Flower.Currency.flower[n].level, this.node, o, this.isRage);
                        Flower.Currency.flower[this.selectIndex] = 0, (s = this.flowerNode[this.selectIndex].getChildByName("flower")).removeFromParent(!0), s.destroy()
                    } else if (Flower.Currency.flower[n].level == Flower.Currency.flower[this.selectIndex].level) {
                        if (Flower.Currency.flower[n].level >= 60 || this.isActiveMerge) return Flower.Currency.ShowTip("\u690d\u7269\u5df2\u7ecf\u662f\u6700\u9ad8\u7b49\u7ea7\uff01"), this.selectIndex = null, void(this.selectPos = null);
                        Flower.Currency.playSound(Flower.Currency.MusicType.merge);
                        var l = Flower.Currency.flower[n].level + 1;
                        Flower.Currency.flower[n] = 0, Flower.Currency.flower[this.selectIndex] = 0, Flower.Currency.flower[n] = new Flower.Currency.FlowerObj(Flower.Currency.BotanyData[l]), this.flowerNode[n].getChildByName("flower").getComponent("flower").init(l, this.node, o, this.isRage), (s = this.flowerNode[this.selectIndex].getChildByName("flower")).removeFromParent(!0), s.destroy(), l > Flower.Currency.highLevel && (Flower.Currency.isGuide && this.GuideNode.getComponent("guide").overGuide(), this.newFlowerNode.getComponent("NewFlower").showView(l)), this.handleMergeAnimation(n), this.handleBuyShow(), this.node.parent.parent.getComponent("GameScene").questSc.updateQuestPro(5, 1, 0), this.node.parent.parent.getComponent("GameScene").questSc.updateAchievePro(2, 1, l), this.handleSignIn(), this.handlePlane()
                    } else {
                        var a = this.flowerNode[n].getChildByName("flower").scaleX,
                            s = Flower.Currency.flower[this.selectIndex];
                        Flower.Currency.flower[this.selectIndex] = Flower.Currency.flower[n], Flower.Currency.flower[n] = s, this.flowerNode[n].getChildByName("flower").getComponent("flower").init(Flower.Currency.flower[n].level, this.node, a, this.isRage), this.flowerNode[this.selectIndex].getChildByName("flower").getComponent("flower").init(Flower.Currency.flower[this.selectIndex].level, this.node, o, this.isRage)
                    }
                    for (r = 0; r < Flower.Currency.flower.length; r++) null == Flower.Currency.flower[r] ? (this.flowerNode[r].getChildByName("lock").active = !0, this.flowerNode[r].getChildByName("level").active = !1) : 0 == Flower.Currency.flower[r] || 1 == Flower.Currency.flower[r] ? (this.flowerNode[r].getChildByName("lock").active = !1, this.flowerNode[r].getChildByName("level").active = !1) : (this.flowerNode[r].getChildByName("level").active = !0, this.flowerNode[r].getChildByName("level").getComponent(cc.Label).string = "Lv: " + Flower.Currency.flower[r].level);
                    Flower.Currency.saveData("flower"), this.selectIndex = null, this.selectPos = null
                }
            },
            initList: function() {
                for (var e = 0; e < 12; e++)
                    if (null == Flower.Currency.flower[e]) this.flowerNode[e].getChildByName("lock").active = !0, this.flowerNode[e].getChildByName("lock").getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.unLockPrice[e]), this.flowerNode[e].getChildByName("level").active = !1;
                    else if (0 == Flower.Currency.flower[e]) {
                    if (this.flowerNode[e].getChildByName("lock").active = !1, this.flowerNode[e].getChildByName("level").active = !1, Flower.Currency.planeInfo.length > 0) {
                        var t = Flower.Currency.planeInfo[0];
                        this.createFlowerPort(e, t), Flower.Currency.planeInfo.splice(0, 1)
                    }
                } else {
                    var n = cc.instantiate(this.flowerPrefab);
                    n.name = "flower", n.getComponent("flower").init(Flower.Currency.flower[e].level, this.node), this.flowerNode[e].addChild(n), this.flowerNode[e].getChildByName("level").active = !0, this.flowerNode[e].getChildByName("level").getComponent(cc.Label).string = "Lv: " + Flower.Currency.flower[e].level
                }
                this.selectFlower = cc.instantiate(this.flowerPrefab), this.list.addChild(this.selectFlower), this.selectFlower.active = !1, this.handleBuyShow(), this.speedTime = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.monsterName = [null, null, null, null, null, null, null, null, null, null, null, null], this.timeOutID = [null, null, null, null, null, null, null, null, null, null, null, null], this.flowerIndex = [], this.parentSc.startPlane()
            },
            handleSign: function(e, t) {
                for (var n = 0; n < Flower.Currency.flower.length; n++) e ? 0 != Flower.Currency.flower[n] && null != Flower.Currency.flower[n] && 1 != Flower.Currency.flower[n] && Flower.Currency.flower[n].level == t && (this.flowerNode[n].getChildByName("sign").active = !0) : this.flowerNode[n].getChildByName("sign").active = !1
            },
            handleMergeAnimation: function(e) {
                var t = this;
                this.mergeAni.active = !0, this.mergeAni.x = this.flowerNode[e].x, this.mergeAni.y = this.flowerNode[e].y + 40;
                var n = this.mergeAni.getComponent(dragonBones.ArmatureDisplay);
                n.playAnimation("newAnimation", 1), n.addEventListener(dragonBones.EventObject.COMPLETE, function() {
                    t.mergeAni.active = !1
                })
            },
            showUnlockNode: function(e) {
                this.UnlockIndex = e, this.UnlockTip.getChildByName("bg").getChildByName("num").children[0].getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.unLockPrice[e]), this.UnlockTip.active = !0, r.default.is4399() && "0" == r.default.AdRemain4399 && (this.UnlockTip.getChildByName("bg").getChildByName("freeBtn").active = !1)
            },
            handleUnlock: function(e) {
                Flower.Currency.flower[e] = 0, this.flowerNode[e].getChildByName("lock").active = !1, this.flowerNode[e].getChildByName("level").active = !1, Flower.Currency.saveData("flower")
            },
            freeUnlockCallback: function() {
                this.UnlockTip.active = !1, r.default.showVideo(this, this.handleUnlock2, this.freeFailed, "14")
            },
            handleUnlock2: function() {
                Flower.Currency.flower[this.UnlockIndex] = 0, this.flowerNode[this.UnlockIndex].getChildByName("lock").active = !1, this.flowerNode[this.UnlockIndex].getChildByName("level").active = !1, Flower.Currency.saveData("flower")
            },
            freeFailed: function() {
                console.log("FlowerManager freeFailed!")
            },
            coinUnlockCallback: function() {
                this.UnlockTip.active = !1, Flower.Currency.money < Flower.Currency.unLockPrice[this.UnlockIndex] ? Flower.Currency.ShowTip("\u91d1\u5e01\u4e0d\u8db3\uff01") : (this.gameSc.operateMoney(!1, Flower.Currency.unLockPrice[this.UnlockIndex]), this.handleUnlock(this.UnlockIndex))
            },
            closeUnlockCallback: function() {
                this.UnlockTip.active = !1
            },
            handleRecovery: function(e) {
                Flower.Currency.flower[e] = 0, this.flowerNode[e].getChildByName("lock").active = !1, this.flowerNode[e].getChildByName("level").active = !1;
                var t = this.flowerNode[e].getChildByName("flower");
                t.removeFromParent(!0), t.destroy();
                var n = this.recoveryNode.getChildByName("ani");
                n.active = !0;
                var r = n.getComponent(dragonBones.ArmatureDisplay);
                r.playAnimation("newAnimation", 1), r.addEventListener(dragonBones.EventObject.COMPLETE, function() {
                    n.active = !1
                }.bind(this)), this.handleSignIn(), this.handlePlane(), Flower.Currency.saveData("flower")
            },
            judgeIsMonster: function(e) {
                var t = null;
                if (this.corpseNode.childrenCount > 0)
                    for (var n = 0;;) {
                        if (Flower.Currency.getDistance(e, {
                                x: this.corpseNode.children[n].x,
                                y: this.corpseNode.children[n].y
                            }) <= 4.5 * Flower.Currency.single && !this.corpseNode.children[n].getComponent("MonsterManage").isDie) {
                            t = n;
                            break
                        }
                        if (++n >= this.corpseNode.childrenCount) {
                            t = null;
                            break
                        }
                    }
                return t
            },
            getHighestFlower: function() {
                for (var e = 1, t = 0; t < Flower.Currency.flower.length; t++) null != Flower.Currency.flower[t] && 0 != Flower.Currency.flower[t] && Flower.Currency.flower[t].level > e && (e = Flower.Currency.flower[t].level);
                Flower.Currency.highLevel = e
            },
            createBullet: function() {
                var e = this.flowerIndex[0];
                if (this.flowerIndex.splice(0, 1), null != this.flowerNode[e].getChildByName("flower")) {
                    var t = this.flowerNode[e].getChildByName("flower").getComponent("flower").bulletPos,
                        n = this.flowerNode[e].getChildByName("flower").scaleX > 0 ? t.x : -1 * t.x,
                        r = this.node.convertToNodeSpaceAR(this.list.convertToWorldSpaceAR(cc.v2(this.flowerNode[e].x + n, this.flowerNode[e].y + 1.2 * t.y + 40)));
                    this.flowerNode[e].active && this.parentSc.createBullet(Flower.Currency.flower[e].level, r, this.monsterName[e])
                }
            },
            handleBuyShow: function() {
                this.getHighestFlower();
                var e = Flower.Currency.ShopLevelData[Flower.Currency.highLevel];
                this.buyBtn.getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[e]), this.buyBtn.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.headAtlas.getSpriteFrame(Flower.Currency.BotanyData[e].prefab)
            },
            createFlowerPort: function(e, t) {
                var n = this;
                Flower.Currency.flower[e] = 1;
                var r = cc.instantiate(this.flowerPortPrefab);
                r.tagIndex = e, r.tagLevel = t, r.y = 150, this.flowerNode[e].addChild(r), this.flowerAction(r, {
                    x: 0,
                    y: 30
                });
                var o = r.getComponent(dragonBones.ArmatureDisplay);
                o.playAnimation("DaiJi", -1), this.timeOutID[e] = setTimeout(function() {
                    o.playAnimation("DianJi", 1), o.addEventListener(dragonBones.EventObject.COMPLETE, function() {
                        var e = Number(o.node.tagIndex),
                            t = Number(o.node.tagLevel),
                            r = o.node;
                        r.removeFromParent(!0), r.destroy(), n.handleMergeAnimation(e), n.createFlower(e, t), Flower.Currency.playSound(Flower.Currency.MusicType.flower_pot_tap)
                    })
                }.bind(this), 8e3)
            },
            handleFlowerPort: function(e) {
                null != this.timeOutID[e] && clearInterval(this.timeOutID[e]);
                var t = this,
                    n = this.flowerNode[e].getChildByName("flowerpot");
                if (null == n.is) {
                    n.is = !0;
                    var r = n.getComponent(dragonBones.ArmatureDisplay);
                    r.playAnimation("DianJi", 1), r.addEventListener(dragonBones.EventObject.COMPLETE, function() {
                        var e = Number(r.node.tagIndex),
                            n = Number(r.node.tagLevel),
                            o = r.node;
                        o.removeFromParent(!0), o.destroy(), t.handleMergeAnimation(e), t.createFlower(e, n), Flower.Currency.playSound(Flower.Currency.MusicType.flower_pot_tap)
                    })
                }
            },
            flowerAction: function(e, t) {
                e.runAction(cc.sequence(cc.moveTo(.1, cc.v2(t.x, t.y)), cc.callFunc(function() {
                    Flower.Currency.playSound(Flower.Currency.MusicType.flower_pot_land)
                })))
            },
            handleRage: function(e) {
                this.isRage = e;
                for (var t = 0; t < Flower.Currency.flower.length; t++) 0 != Flower.Currency.flower[t] && 1 != Flower.Currency.flower[t] && null != Flower.Currency.flower[t] && (e ? (this.flowerNode[t].getChildByName("flower").getChildByName("rage").active = !0, this.flowerNode[t].getChildByName("flower").getChildByName("rage").getComponent(cc.Animation).play("huo")) : (this.flowerNode[t].getChildByName("flower").getChildByName("rage").active = !1, this.flowerNode[t].getChildByName("flower").getChildByName("rage").getComponent(cc.Animation).stop("huo")))
            },
            handlePlane: function() {
                for (var e = 0; e < Flower.Currency.flower.length; e++)
                    if (0 == Flower.Currency.flower[e] && Flower.Currency.planeInfo.length > 0) {
                        var t = Flower.Currency.planeInfo[0];
                        this.createFlowerPort(e, t), Flower.Currency.planeInfo.splice(0, 1)
                    } this.parentSc.startPlane(), Flower.Currency.setData("plane", JSON.stringify(Flower.Currency.planeInfo))
            },
            handleSignIn: function() {
                for (var e = 0; e < Flower.Currency.flower.length; e++)
                    if (0 == Flower.Currency.flower[e] && Flower.Currency.signInFlower.length > 0) {
                        var t = Flower.Currency.signInFlower[0];
                        this.createFlowerPort(e, t), Flower.Currency.signInFlower.splice(0, 1)
                    } Flower.Currency.setData("signinflower", JSON.stringify(Flower.Currency.signInFlower))
            },
            handleActiveMerge: function() {
                null != this.mergeAction && (this.node.stopAction(this.mergeAction), this.mergeAction = null);
                var e = Flower.Currency.highLevel;
                this.mergeAction = this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.9), cc.callFunc(function() {
                    this.implementMerge() || (null != this.mergeAction && (this.node.stopAction(this.mergeAction), this.mergeAction = null), Flower.Currency.highLevel > e && this.newFlowerNode.getComponent("NewFlower").showView(Flower.Currency.highLevel), this.handleSignIn(), this.handlePlane())
                }.bind(this)))))
            },
            implementMerge: function() {
                if (null != this.mergeIndex1 || null != this.mergeIndex2) return !0;
                for (var e = !1, t = 0; t < Flower.Currency.flower.length - 1; t++) {
                    var n = !1;
                    if (0 != Flower.Currency.flower[t] && 1 != Flower.Currency.flower[t] && null != Flower.Currency.flower[t]) {
                        this.mergeIndex1 = t;
                        for (var r = t + 1; r < Flower.Currency.flower.length; r++)
                            if (0 != Flower.Currency.flower[r] && 1 != Flower.Currency.flower[r] && null != Flower.Currency.flower[r] && Flower.Currency.flower[t].level == Flower.Currency.flower[r].level) {
                                this.mergeIndex2 = r, n = !0;
                                break
                            } if (n) {
                            e = !0;
                            break
                        }
                    }
                }
                return e ? Flower.Currency.flower[this.mergeIndex1].level < 60 && (this.selectFlower.active = !0, this.selectFlower.getComponent("flower").init(Flower.Currency.flower[this.mergeIndex2].level, this.node, this.flowerNode[this.mergeIndex2].getChildByName("flower").scaleX), this.selectFlower.anchorY = 0, this.selectFlower.x = this.flowerNode[this.mergeIndex2].x, this.selectFlower.y = this.flowerNode[this.mergeIndex2].y, this.flowerNode[this.mergeIndex2].active = !1, this.selectFlower.runAction(cc.sequence(cc.moveTo(.5, cc.v2(this.flowerNode[this.mergeIndex1].x - 10, this.flowerNode[this.mergeIndex1].y + 30)), cc.callFunc(function() {
                    this.selectFlower.active = !1;
                    var e = this.flowerNode[this.mergeIndex1].getChildByName("flower").scaleX,
                        t = Flower.Currency.flower[this.mergeIndex1].level + 1;
                    Flower.Currency.flower[this.mergeIndex1] = 0, Flower.Currency.flower[this.mergeIndex2] = 0, Flower.Currency.flower[this.mergeIndex1] = new Flower.Currency.FlowerObj(Flower.Currency.BotanyData[t]), this.flowerNode[this.mergeIndex1].getChildByName("flower").getComponent("flower").init(t, this.node, e, this.isRage), this.flowerNode[this.mergeIndex1].getChildByName("level").getComponent(cc.Label).string = "Lv: " + t, this.flowerNode[this.mergeIndex2].active = !0;
                    var n = this.flowerNode[this.mergeIndex2].getChildByName("flower");
                    this.flowerNode[this.mergeIndex2].getChildByName("lock").active = !1, this.flowerNode[this.mergeIndex2].getChildByName("level").active = !1, n.removeFromParent(!0), n.destroy(), this.handleMergeAnimation(this.mergeIndex1), this.handleBuyShow(), this.node.parent.parent.getComponent("GameScene").questSc.updateQuestPro(5, 1, 0), this.node.parent.parent.getComponent("GameScene").questSc.updateAchievePro(2, 1, t), Flower.Currency.saveData("flower"), this.mergeIndex1 = null, this.mergeIndex2 = null
                }.bind(this))))) : (this.mergeIndex1 = null, this.mergeIndex2 = null), e
            },
            handleAirdrop: function() {
                for (var e = 0; e < Flower.Currency.flower.length; e++)
                    if (0 == Flower.Currency.flower[e]) {
                        var t = Flower.Currency.AirdropData[Flower.Currency.highLevel];
                        this.createFlowerPort(e, t);
                        break
                    }
            },
            createFlower: function(e, t) {
                if (null == this.flowerNode[e].getChildByName("flower")) {
                    Flower.Currency.flower[e] = new Flower.Currency.FlowerObj(Flower.Currency.BotanyData[t]), this.speedTime[e] = 0;
                    var n = cc.instantiate(this.flowerPrefab);
                    n.name = "flower", n.getComponent("flower").init(Flower.Currency.flower[e].level, this.node, 1, this.isRage), this.flowerNode[e].addChild(n), this.flowerNode[e].getChildByName("level").active = !0, this.flowerNode[e].getChildByName("level").getComponent(cc.Label).string = "Lv: " + Flower.Currency.flower[e].level, Flower.Currency.saveData("flower"), this.isActiveMerge && this.handleActiveMerge()
                }
            },
            mergeCallback: function(e) {
                this.isActiveMerge = !this.isActiveMerge, this.isActiveMerge ? this.handleActiveMerge() : null != this.mergeAction && (this.node.stopAction(this.mergeAction), this.mergeAction = null), this.mergeBtn.children[0].active = !this.isActiveMerge, this.mergeBtn.children[1].active = this.isActiveMerge;
                var t = this.isActiveMerge ? "\u81ea\u52a8\u5408\u6210\u5f00\u542f\uff01" : "\u81ea\u52a8\u5408\u6210\u5173\u95ed\uff01";
                Flower.Currency.ShowTip(t)
            },
            buyFlowerCallback: function() {
                for (var e = null, t = 0; t < Flower.Currency.flower.length; t++)
                    if (0 == Flower.Currency.flower[t]) {
                        e = t;
                        break
                    } if (null != e) {
                    var n = Flower.Currency.ShopLevelData[Flower.Currency.highLevel];
                    if (Flower.Currency.money < Flower.Currency.shopprice[n]) Flower.Currency.ShowTip("\u91d1\u5e01\u4e0d\u8db3\uff01");
                    else {
                        this.gameSc.operateMoney(!1, Flower.Currency.shopprice[n]), this.createFlower(e, n);
                        var r = .1 * Flower.Currency.shopprice[n];
                        Flower.Currency.shopprice[n] += r, Flower.Currency.shopprice[n] = Math.round(Flower.Currency.shopprice[n]), this.handleBuyShow(), Flower.Currency.saveData("shopprice")
                    }
                } else Flower.Currency.ShowTip("\u6ca1\u6709\u4f4d\u7f6e\u5566\uff01")
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    GameControl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4d6eeOp7zNEjbd2lx8Wwdah", "GameControl");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                corpse: cc.Node,
                bullet: cc.Node,
                cruxPoint: [cc.Node],
                monsterPrefab: cc.Prefab,
                bulletPrefab: cc.Prefab,
                planeNode: cc.Node,
                bossWarning: cc.Node,
                Guide: cc.Node,
                blessingSign: cc.Node,
                blessingTime: cc.Node,
                blessingView: cc.Node
            },
            gameSc: null,
            createTimeout: null,
            monsterIDArray: null,
            monsterIndex: null,
            planeTimeOutID: null,
            planePos: null,
            monster: null,
            blessingSurplus: null,
            onLoad: function() {
                this.gameSc = this.node.getComponent("GameScene")
            },
            start: function() {
                Flower.Currency.BulletPool = new cc.NodePool;
                for (var e = 0; e < 200; e++) {
                    var t = cc.instantiate(this.bulletPrefab);
                    Flower.Currency.BulletPool.put(t)
                }
                cc.director.getCollisionManager().enabled = !0, Flower.Currency.isGuide ? this.Guide.getComponent("guide").guideStep(1) : setTimeout(function() {
                    this.startGame()
                }.bind(this), 1500), this.planePos = {
                    x: this.planeNode.x,
                    y: this.planeNode.y
                }, this.handleBlessing(!0)
            },
            update: function(e) {
                this.blessingSurplus > 0 && (this.blessingSurplus -= e, this.blessingTime.getChildByName("time").getComponent(cc.Label).string = Flower.Currency.ToClockString(this.blessingSurplus), this.blessingSurplus <= 0 && (this.blessingTime.active = !1, Flower.Currency.isBlessing = !1, setTimeout(function() {
                    this.showBlessingBtn()
                }.bind(this), 18e4)))
            },
            startGame: function() {
                this.checkpointCreate()
            },
            checkpointCreate: function() {
                this.gameSc.checkpointShow();
                var e = Flower.Currency.CheckpointData[Flower.Currency.checkpoint];
                this.monsterIDArray = [], this.monsterIndex = 0;
                for (var t = 0; t < e.wave[Flower.Currency.wave - 1].count1 + e.wave[Flower.Currency.wave - 1].count2; t++) t < e.wave[Flower.Currency.wave - 1].count1 ? this.monsterIDArray.push(e.wave[Flower.Currency.wave - 1].id1) : this.monsterIDArray.push(e.wave[Flower.Currency.wave - 1].id2);
                this.schedule(this.createSingleMonster, 1.2), Flower.Currency.wave >= e.wave_count && (this.bossWarning.active = !0, Flower.Currency.currencyAction(this.bossWarning.getChildByName("0"), Flower.Currency.ActionType.BossWarning), Flower.Currency.currencyAction(this.bossWarning.getChildByName("1"), Flower.Currency.ActionType.BossWarning), Flower.Currency.currencyAction(this.bossWarning.getChildByName("2"), Flower.Currency.ActionType.BossWarning), this.bossWarning.runAction(cc.sequence(cc.delayTime(2.5), cc.callFunc(function() {
                    this.bossWarning.active = !1
                }.bind(this)))))
            },
            createSingleMonster: function() {
                var e = [],
                    t = cc.instantiate(this.monsterPrefab);
                t.x = this.cruxPoint[0].x, t.y = this.cruxPoint[0].y, this.corpse.addChild(t), t.getComponent("MonsterManage").init(this.monsterIDArray[this.monsterIndex], this.monsterIndex);
                for (var n = 0; n < this.cruxPoint.length; n++) {
                    var r = {
                        x: this.cruxPoint[n].x,
                        y: this.cruxPoint[n].y
                    };
                    e.push(r)
                }
                t.getComponent("MonsterManage").getPoint(e), this.monsterIndex++, this.monsterIndex >= this.monsterIDArray.length && this.unschedule(this.createSingleMonster)
            },
            getMonsterData: function(e) {
                for (var t = 1; t < Flower.Currency.MonsterData.length; t++)
                    if (Flower.Currency.MonsterData[t].id == e) return Flower.Currency.MonsterData[t]
            },
            createBullet: function(e, t, n) {
                if (null != this.corpse.getChildByName(n) && !this.corpse.getChildByName(n).getComponent("MonsterManage").isDie) {
                    var r = Flower.Currency.BulletPool.get();
                    r.getComponent("bullet").init(e, this.corpse.getChildByName(n), t), this.bullet.addChild(r)
                }
            },
            judgeIsWin: function() {
                this.monsterIndex >= this.monsterIDArray.length && this.handleGameResult(!0)
            },
            handleGameResult: function(e) {
                if (this.corpse.childrenCount > 0)
                    for (;;) {
                        var t = this.corpse.children[0];
                        if (t.removeFromParent(!0), t.destroy(), this.corpse.childrenCount <= 0) break
                    }
                var n = 0,
                    r = Flower.Currency.CheckpointData[Flower.Currency.checkpoint],
                    o = Flower.Currency.wave >= r.wave_count,
                    i = r.wave[r.wave_count - 1].id1,
                    l = this.getMonsterData(i);
                e ? (o && (n = l.money), Flower.Currency.wave++, Flower.Currency.wave > r.wave_count && (Flower.Currency.checkpoint++, Flower.Currency.wave = 1), this.node.getComponent("GameScene").questSc.updateQuestPro(3, 1, 0)) : (Flower.Currency.wave = 1, o && (n = Math.round(l.money / 2))), this.gameSc.resultSc.showResult(e, o, n), Flower.Currency.saveData("checkpoint")
            },
            startPlane: function() {
                Flower.Currency.planeInfo.length <= 0 && (null != this.planeTimeOutID && (clearInterval(this.planeTimeOutID), this.planeTimeOutID = null), this.planeTimeOutID = setTimeout(function() {
                    this.handlePlane(!0)
                }.bind(this), 3e4)), this.node.getComponent("GameScene").stopPlane()
            },
            handlePlane: function(e) {
                e ? (this.planeNode.children[0].getComponent(dragonBones.ArmatureDisplay).playAnimation("newAnimation", 0), this.planeNode.active = !0, Flower.Currency.playSound(Flower.Currency.MusicType.plane), Flower.Currency.planeAction(this.planeNode, this.planePos, this, this.startPlane)) : (this.node.getComponent("GameScene").stopPlane(), this.planeNode.stopAllActions(), this.planeNode.active = !1, this.planeNode.x = this.planePos.x, this.planeNode.y = this.planePos.y)
            },
            showBlessingBtn: function() {
                r.default.is4399() && "0" == r.default.AdRemain4399 || (this.blessingSign.active = !0, this.blessingSign.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.35, .5), cc.scaleTo(.35, .45)))))
            },
            handleBlessing: function(e) {
                var t = new Date;
                if (e) {
                    var n = Flower.Currency.getData("blessingTime");
                    this.blessingSurplus = n ? Number(n) : 0, n = Flower.Currency.getData("blessingleavetime"), this.leaveTime = n ? Number(n) : t.getTime();
                    var r = (t - this.leaveTime) / 1e3;
                    this.blessingSurplus -= r, this.blessingSurplus = this.blessingSurplus <= 0 ? 0 : this.blessingSurplus, this.blessingSurplus <= 0 ? (Flower.Currency.isBlessing = !1, setTimeout(function() {
                        this.showBlessingBtn()
                    }.bind(this), 18e4)) : (Flower.Currency.isBlessing = !0, this.blessingTime.active = !0)
                } else Flower.Currency.setData("blessingleavetime", t.getTime()), Flower.Currency.setData("blessingTime", this.blessingSurplus)
            },
            showBlessingView: function(e) {
                this.blessingSign.stopAllActions(), this.blessingSign.active = !1, this.blessingView.active = !0
            },
            closeBlessingView: function(e) {
                this.blessingView.active = !1, setTimeout(function() {
                    this.showBlessingBtn()
                }.bind(this), 18e4)
            },
            getBlessing: function(e) {
                r.default.showVideo(this, this.doubleAward, this.doubleAwardFailed, "12")
            },
            doubleAward: function() {
                Flower.Currency.isBlessing = !0, this.blessingTime.active = !0, this.blessingSurplus = 120, this.blessingView.active = !1
            },
            doubleAwardFailed: function() {
                this.blessingView.active = !1
            },
            testCallback: function(e) {
                Flower.Currency.ShowEffect(Flower.Currency.RewardType.Gem, this.node.getChildByName("wealth").getChildByName("gem").getPosition())
            },
            testSlowDown: function(e) {
                this.monster.getComponent("MonsterManage").handleSlowDown()
            },
            testBullet: function(e) {}
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    GameScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "GameScene");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                bgm: {
                    default: null,
                    type: cc.AudioClip
                },
                click: {
                    default: null,
                    type: cc.AudioClip
                },
                fail: {
                    default: null,
                    type: cc.AudioClip
                },
                hit: {
                    default: null,
                    type: cc.AudioClip
                },
                merge: {
                    default: null,
                    type: cc.AudioClip
                },
                skill_critical: {
                    default: null,
                    type: cc.AudioClip
                },
                skill_freeze: {
                    default: null,
                    type: cc.AudioClip
                },
                skill_slow: {
                    default: null,
                    type: cc.AudioClip
                },
                success_one: {
                    default: null,
                    type: cc.AudioClip
                },
                success_two: {
                    default: null,
                    type: cc.AudioClip
                },
                flower_pot_tap: {
                    default: null,
                    type: cc.AudioClip
                },
                flower_pot_land: {
                    default: null,
                    type: cc.AudioClip
                },
                plane: {
                    default: null,
                    type: cc.AudioClip
                },
                lastCheckpoint: cc.Label,
                currentCheckpoint: cc.Label,
                nextCheckpoint: cc.Label,
                wave: cc.Label,
                money: cc.Label,
                diamond: cc.Label,
                resultNode: cc.Node,
                offlineNode: cc.Node,
                fireNode: cc.Node,
                questNode: cc.Node,
                shopNode: cc.Node,
                tipNode: cc.Node,
                setNode: cc.Node,
                dialNode: cc.Node,
                planeView: cc.Node,
                signInView: cc.Node,
                rewardNode: cc.Node,
                othershowNode: cc.Node,
                mask: [cc.Node]
            },
            resultSc: null,
            offlineSc: null,
            fireSc: null,
            questSc: null,
            shopSc: null,
            tipSc: null,
            setSc: null,
            dialSc: null,
            planeSc: null,
            signInSc: null,
            planeMusicID: null,
            onLoad: function() {
                Flower.Currency.soundfunc = this.playSound, Flower.Currency.soundtarget = this, setTimeout(function() {
                    Flower.Currency.playSound(Flower.Currency.MusicType.bgm)
                }.bind(this), 100), this.checkpointShow(), this.money.string = Flower.Currency.ToGoodString(Flower.Currency.money), this.diamond.string = Flower.Currency.ToGoodString(Flower.Currency.diamond), this.resultSc = this.resultNode.getComponent("ResultView"), this.offlineSc = this.offlineNode.getComponent("OfflineView"), this.fireSc = this.fireNode.getComponent("FireView"), this.questSc = this.questNode.getComponent("QuestView"), this.shopSc = this.shopNode.getComponent("ShopView"), this.setSc = this.setNode.getComponent("SetView"), this.dialSc = this.dialNode.getComponent("DialView"), this.planeSc = this.planeView.getComponent("PlaneView"), this.signInSc = this.signInView.getComponent("SignInView"), this.tipSc = this.tipNode.getComponent("tip"), Flower.Currency.tiptarget = this.tipSc, Flower.Currency.tipfunc = this.tipSc.showTip, Flower.Currency.rewardTarget = this.rewardNode.getComponent("Effect"), Flower.Currency.rewardFunc = this.rewardNode.getComponent("Effect").playAnimation, Flower.Currency.rewardFunc2 = this.rewardNode.getComponent("Effect").playAnimation2, this.handlerOffline(), this.registerGame(), this.initRedIcon(), r.default.is4399() && (this.othershowNode.getChildByName("moregame").active = !0, this.node.getChildByName("logo4399").active = !0), r.default.isVivo() && (this.othershowNode.getChildByName("addDesktop").active = !0);
                var e = cc.winSize.height / cc.winSize.width <= 1.65,
                    t = this.node.getComponent(cc.Canvas);
                e && (t.fitHeight = !0, t.fitWidth = !1, this.mask[0].active = !0, this.mask[1].active = !0)
            },
            start: function() {
                if (r.default.isVivo()) {
                    setInterval(function() {
                        console.log("\u4e3b\u754c\u9762\uff0c\u5468\u671f\u663e\u793abanner"), r.default.showBanner("12")
                    }, 3e4)
                }
            },
            initRedIcon: function() {
                this.questSc && this.questSc.init(), this.dialSc && this.dialSc.editBtnNode()
            },
            registerGame: function() {
                Flower.Currency.Plat == Flower.Currency.PlatType.Windows && (cc.game.on(cc.game.EVENT_HIDE, function() {
                    console.log("\u6e38\u620f\u8fdb\u5165\u540e\u53f0"), Flower.WxAPI.hideStage()
                }), cc.game.on(cc.game.EVENT_SHOW, function() {
                    console.log("\u6e38\u620f\u8fdb\u5165\u524d\u53f0"), Flower.WxAPI.showStage()
                }))
            },
            update: function(e) {
                this.fireSc.updateTime(e), this.dialSc.updateTime(e)
            },
            checkpointShow: function() {
                var e = Flower.Currency.CheckpointData[Flower.Currency.checkpoint],
                    t = Flower.Currency.checkpoint - 1,
                    n = Flower.Currency.checkpoint + 1;
                this.lastCheckpoint.string = t <= 0 ? "" : t, this.nextCheckpoint.string = n > Flower.Currency.checkpointTotal ? "" : n, this.currentCheckpoint.string = Flower.Currency.checkpoint, this.wave.string = Flower.Currency.wave + "/" + e.wave_count
            },
            operateMoney: function(e, t) {
                t && (e ? Flower.Currency.money += t : Flower.Currency.money -= t, Flower.Currency.setData("money", Flower.Currency.money), this.money.string = Flower.Currency.ToGoodString(Flower.Currency.money))
            },
            operateGem: function(e, t) {
                t && (e ? Flower.Currency.diamond += t : Flower.Currency.diamond -= t, Flower.Currency.setData("diamond", Flower.Currency.diamond), this.diamond.string = Flower.Currency.ToGoodString(Flower.Currency.diamond))
            },
            playSound: function(e) {
                var t = null;
                switch (e) {
                    case Flower.Currency.MusicType.bgm:
                        t = this.bgm;
                        break;
                    case Flower.Currency.MusicType.click:
                        t = this.click;
                        break;
                    case Flower.Currency.MusicType.hit:
                        t = this.hit;
                        break;
                    case Flower.Currency.MusicType.fail:
                        t = this.fail;
                        break;
                    case Flower.Currency.MusicType.merge:
                        t = this.merge;
                        break;
                    case Flower.Currency.MusicType.skill_critical:
                        t = this.skill_critical;
                        break;
                    case Flower.Currency.MusicType.skill_freeze:
                        t = this.skill_freeze;
                        break;
                    case Flower.Currency.MusicType.skill_slow:
                        t = this.skill_slow;
                        break;
                    case Flower.Currency.MusicType.success_one:
                        t = this.success_one;
                        break;
                    case Flower.Currency.MusicType.success_two:
                        t = this.success_two;
                        break;
                    case Flower.Currency.MusicType.flower_pot_tap:
                        t = this.flower_pot_tap;
                        break;
                    case Flower.Currency.MusicType.flower_pot_land:
                        t = this.flower_pot_land;
                        break;
                    case Flower.Currency.MusicType.plane:
                        t = this.plane
                }
                e == Flower.Currency.MusicType.bgm ? Flower.Currency.playBackgroundMusic(t) : e == Flower.Currency.MusicType.plane || Flower.Currency.playEffectMusic(t, !1)
            },
            stopPlane: function() {
                null != this.planeMusicID && Flower.Currency.stopEffectMusic(this.planeMusicID)
            },
            viewCallback: function(e, t) {
                switch (Number(t)) {
                    case 1:
                        this.shopSc.showView(!0);
                        break;
                    case 2:
                        this.setSc.showView(!this.setNode.active);
                        break;
                    case 3:
                        this.planeSc.showView(!0), this.stopPlane(), this.node.getComponent("GameControl").handlePlane(!1);
                        break;
                    case 4:
                        this.signInSc.showView(!0);
                        break;
                    case 5:
                        r.default.moreGames4399();
                        break;
                    case 6:
                        r.default.addDesktop()
                }
            },
            handlerOffline: function() {
                var e = (new Date).getTime(),
                    t = parseInt(e / 1e3),
                    n = cc.sys.localStorage.getItem("offlinetime");
                console.log("offlinetime = " + n), n = n ? parseInt(n) : t, Flower.Currency.offtimes = t - n, cc.sys.localStorage.setItem("offlinetime", t), Flower.Currency.offtimes > 300 && !Flower.Currency.isGuide && this.offlineSc.showView(!0)
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    LoadingScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dadcbJexxlCBrwPaaxgmpZM", "LoadingScene");
        var r = i(e("./SdkMgr")),
            o = i(e("./SdkVivo"));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        cc.Class({
            extends: cc.Component,
            properties: {
                loadLabel: cc.Label,
                loadProgressBar: cc.ProgressBar
            },
            loadStep: null,
            loadValue: null,
            isBotany: null,
            isCheckpoint: null,
            isMonster: null,
            isShop: null,
            isAchievement: !1,
            isDial: !1,
            isPlane: !1,
            isSignIn: !1,
            onLoad: function() {
                window.Flower = {}, Flower.Currency = e("Currency"), Flower.WxAPI = e("wxAPI").WxAPI
            },
            start: function() {
                if (r.default.is4399() && r.default.canShowAd4399(), r.default.isVivo()) {
                    qg.onShow(function() {
                        console.log("\u91cd\u65b0\u8fd4\u56de\u6e38\u620f"), cc.game.isPaused() || (cc.game.pause(), cc.audioEngine.stopAll()), "no" == o.default.isVideoPlay && (cc.game.resume(), cc.audioEngine.stopAll(), Flower.Currency.playSound(Flower.Currency.MusicType.bgm))
                    })
                }
                cc.debug.setDisplayStats(!1), cc.sys.platform == cc.sys.WECHAT_GAME ? this.loadStep = Flower.Currency.loadStep.WxAPIInit : this.loadStep = Flower.Currency.loadStep.READCONFIG, this.isBotany = !1, this.isCheckpoint = !1, this.isMonster = !1, this.isShop = !1, this.loadValue = 0, this.loadProgressBar.progress = 0, this.schedule(this.setLoadingBar, .02), this.loadingStep(), cc.director.preloadScene("GameScene")
            },
            setLoadingBar: function() {
                this.loadProgressBar.progress >= 1 && this.loadStep == Flower.Currency.loadStep.COMPLETE ? (this.loadLabel.string = "ĐANG VÀO GAME...", this.unschedule(this.setLoadingBar), cc.director.loadScene("GameScene")) : this.loadProgressBar.progress = this.loadProgressBar.progress >= this.loadValue ? this.loadValue : this.loadProgressBar.progress + .02
            },
            loadingStep: function() {
                switch (this.loadStep) {
                    case Flower.Currency.loadStep.WxAPIInit:
                        Flower.WxAPI.init(), this.loadValue = .2;
                        break;
                    case Flower.Currency.loadStep.READCONFIG:
                        this.readConfigTable();
                        break;
                    case Flower.Currency.loadStep.WHOLE:
                        Flower.Currency.init(), this.loadValue = .6, this.loadStep = Flower.Currency.loadStep.COMPLETE, this.loadingStep();
                        break;
                    case Flower.Currency.loadStep.COMPLETE:
                        this.loadValue = 1
                }
            },
            readConfigTable: function() {
                var e = this;
                null == Flower.Currency.BotanyData && cc.loader.loadRes("form/botany", function(t, n) {
                    if (t) return cc.error(t.message), void e.readConfigTable();
                    var r = Flower.Currency.CSVToArray(n);
                    e.analysisBotanyTable(r), e.isBotany = !0, e.verifyDataLoad()
                }), null == Flower.Currency.CheckpointData && cc.loader.loadRes("form/checkpoint", function(t, n) {
                    if (t) return cc.error(t.message), void e.readConfigTable();
                    var r = Flower.Currency.CSVToArray(n);
                    e.analysisCheckpointTable(r), e.isCheckpoint = !0, e.verifyDataLoad()
                }), null == Flower.Currency.MonsterData && cc.loader.loadRes("form/monster", function(t, n) {
                    if (t) return cc.error(t.message), void e.readConfigTable();
                    var r = Flower.Currency.CSVToArray(n);
                    e.analysisMonsterTable(r), e.isMonster = !0, e.verifyDataLoad()
                }), null == Flower.Currency.ShopLevelData && cc.loader.loadRes("form/shop", function(t, n) {
                    if (t) return cc.error(t.message), void e.readConfigTable();
                    var r = Flower.Currency.CSVToArray(n);
                    e.analysisShopTable(r), e.isShop = !0, e.verifyDataLoad()
                }), null == Flower.Currency.ShopLevelData && cc.loader.loadRes("form/achievement", function(t, n) {
                    if (t) return cc.error(t.message), void e.readConfigTable();
                    var r = Flower.Currency.CSVToArray(n);
                    e.analysisAchievementTable(r), e.isAchievement = !0, e.verifyDataLoad()
                }), null == Flower.Currency.ShopLevelData && cc.loader.loadRes("form/dial", function(t, n) {
                    if (t) return cc.error(t.message), void e.readConfigTable();
                    var r = Flower.Currency.CSVToArray(n);
                    e.analysisDialTable(r), e.isDial = !0, e.verifyDataLoad()
                }), null == Flower.Currency.planeData && cc.loader.loadRes("form/plane", function(t, n) {
                    if (t) return cc.error(t.message), void e.readConfigTable();
                    var r = Flower.Currency.CSVToArray(n);
                    e.analysisPlaneTable(r), e.isPlane = !0, e.verifyDataLoad()
                }), null == Flower.Currency.signInData && cc.loader.loadRes("form/signin", function(t, n) {
                    if (t) return cc.error(t.message), void e.readConfigTable();
                    var r = Flower.Currency.CSVToArray(n);
                    e.analysisSignInTable(r), e.isSignIn = !0, e.verifyDataLoad()
                }), null == Flower.Currency.AirdropData && cc.loader.loadRes("form/airdrop", function(t, n) {
                    if (t) return cc.error(t.message), void e.readConfigTable();
                    var r = Flower.Currency.CSVToArray(n);
                    e.analysisAirdropTable(r)
                })
            },
            analysisBotanyTable: function(e) {
                if (null == Flower.Currency.BotanyData) {
                    Flower.Currency.BotanyData = [null];
                    for (var t = 1; t < e.length; t++) {
                        for (var n = e[t], r = {
                                level: Number(n[0]),
                                cd: Number(n[1]),
                                power: Number(n[2]),
                                skill: [],
                                offline: Number(n[4]),
                                price: Number(n[5]),
                                gem: Number(n[6]),
                                prefab: n[7],
                                shoot_pos: [],
                                steak_color: n[9],
                                head: Number(n[10])
                            }, o = "", i = 0; i < n[3].length; i++) "|" == n[3][i] || i == n[3].length - 1 ? (i == n[3].length - 1 && (o += n[3][i]), r.skill.push(Number(o)), o = "") : o += n[3][i];
                        o = "";
                        for (i = 0; i < n[8].length; i++) "," == n[8][i] || i == n[8].length - 1 ? (i == n[8].length - 1 && (o += n[8][i]), r.shoot_pos.push(Number(o)), o = "") : o += n[8][i];
                        Flower.Currency.BotanyData.push(r)
                    }
                }
            },
            analysisCheckpointTable: function(e) {
                if (null == Flower.Currency.CheckpointData) {
                    Flower.Currency.CheckpointData = [null];
                    for (var t = 1; t < e.length;) {
                        for (var n = {
                                level: Number(e[t][0]),
                                wave_count: Number(e[t][2]),
                                wave: []
                            }, r = t; r < t + n.wave_count; r++) {
                            var o = e[r],
                                i = {
                                    id1: Number(o[3]),
                                    count1: Number(o[4]),
                                    id2: Number(o[5]),
                                    count2: Number(o[6])
                                };
                            n.wave.push(i)
                        }
                        Flower.Currency.CheckpointData.push(n), t += n.wave_count
                    }
                }
            },
            analysisMonsterTable: function(e) {
                if (null == Flower.Currency.MonsterData) {
                    Flower.Currency.MonsterData = [null];
                    for (var t = 1; t < e.length; t++) {
                        var n = e[t],
                            r = {
                                id: Number(n[0]),
                                hp: Number(n[1]),
                                spd: Number(n[2]),
                                money: Number(n[3]),
                                ani: n[4],
                                gender: n[5]
                            };
                        Flower.Currency.MonsterData.push(r)
                    }
                }
            },
            analysisShopTable: function(e) {
                if (null == Flower.Currency.ShopLevelData) {
                    Flower.Currency.ShopLevelData = [null];
                    for (var t = 1; t < e.length; t++) {
                        var n = e[t];
                        Flower.Currency.ShopLevelData.push(Number(n[1]))
                    }
                }
            },
            analysisAchievementTable: function(e) {
                if (null == Flower.Currency.AchieveData) {
                    Flower.Currency.AchieveData = [null];
                    for (var t = 1; t < e.length; t++) {
                        var n = e[t],
                            r = {
                                id: Number(n[0]),
                                type: Number(n[1]),
                                target: Number(n[2]),
                                condition: Number(n[3]),
                                count: Number(n[4]),
                                reward: Number(n[5]),
                                name: n[6],
                                icon: n[7],
                                default: Number(n[8]),
                                nextId: Number(n[9])
                            };
                        Flower.Currency.AchieveData.push(r)
                    }
                }
            },
            analysisDialTable: function(e) {
                if (null == Flower.Currency.DialData) {
                    Flower.Currency.DialData = [null];
                    for (var t = 1; t < e.length; t++) {
                        var n = e[t],
                            r = {
                                id: Number(n[0]),
                                type: Number(n[1]),
                                reward: Number(n[2]),
                                extract_probability: Number(n[3]),
                                win_probability: Number(n[4])
                            };
                        Flower.Currency.DialData.push(r)
                    }
                }
            },
            analysisPlaneTable: function(e) {
                if (null == Flower.Currency.planeData) {
                    Flower.Currency.planeData = [null];
                    for (var t = 1; t < e.length; t++) {
                        var n = e[t];
                        Flower.Currency.planeData.push(Number(n[1]))
                    }
                }
            },
            analysisAirdropTable: function(e) {
                if (null == Flower.Currency.AirdropData) {
                    Flower.Currency.AirdropData = [null];
                    for (var t = 1; t < e.length; t++) {
                        var n = e[t];
                        Flower.Currency.AirdropData.push(Number(n[1]))
                    }
                }
            },
            analysisSignInTable: function(e) {
                if (null == Flower.Currency.signInData) {
                    Flower.Currency.signInData = [null];
                    for (var t = 1; t < e.length; t++) {
                        for (var n = e[t], r = {
                                type: [],
                                reward: []
                            }, o = "", i = 0; i < n[1].length; i++) "|" == n[1][i] || i == n[1].length - 1 ? (i == n[1].length - 1 && (o += n[1][i]), r.type.push(Number(o)), o = "") : o += n[1][i];
                        o = "";
                        for (i = 0; i < n[2].length; i++) "|" == n[2][i] || i == n[2].length - 1 ? (i == n[2].length - 1 && (o += n[2][i]), r.reward.push(Number(o)), o = "") : o += n[2][i];
                        Flower.Currency.signInData.push(r)
                    }
                }
            },
            verifyDataLoad: function() {
                this.isBotany && this.isCheckpoint && this.isMonster && this.isShop && this.isAchievement && this.isDial && this.isPlane && this.isSignIn && (this.loadValue = .4, this.loadStep = Flower.Currency.loadStep.WHOLE, this.loadingStep())
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr",
        "./SdkVivo": "SdkVivo",
        Currency: "Currency",
        wxAPI: "wxAPI"
    }],
    MonsterManage: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9bc2en3+0BBc6RN064AD5+T", "MonsterManage"), cc.Class({
            extends: cc.Component,
            properties: {
                aniNode: cc.Node,
                hitAni: cc.Node,
                blastAni: cc.Node,
                bloodPro: cc.ProgressBar,
                moneyNode: cc.Node,
                criticalAni: cc.Node,
                frozenAni: cc.Node
            },
            controlSc: null,
            gameSc: null,
            parentNode: null,
            scaleNum: null,
            isDie: null,
            animationDisplay: null,
            isAction: null,
            actionTag: null,
            cruxPoint: null,
            name: null,
            id: null,
            hp: null,
            tempHp: null,
            speed: null,
            money: null,
            isSlowdown: null,
            slowDownValue: null,
            isFrozen: null,
            slowDownTimeout: null,
            froZenTimeout: null,
            size: null,
            update: function(e) {
                if (this.isAction && !this.isFrozen) {
                    var t = !1,
                        n = null,
                        r = null;
                    1 == this.actionTag ? (n = this.cruxPoint[0], r = this.cruxPoint[1]) : 2 == this.actionTag ? (n = this.cruxPoint[1], r = this.cruxPoint[2]) : 3 == this.actionTag ? (n = this.cruxPoint[2], r = this.cruxPoint[3]) : 4 == this.actionTag ? (n = this.cruxPoint[3], r = this.cruxPoint[4]) : 5 == this.actionTag && (n = this.cruxPoint[4], r = this.cruxPoint[5]);
                    var o = this.isSlowdown ? this.speed * this.slowDownValue : this.speed,
                        i = Flower.Currency.getDistance(n, r) / (Flower.Currency.single / (1 / o)),
                        l = Math.abs(r.x - n.x) / i,
                        a = Math.abs(r.y - n.y) / i;
                    r.x > this.node.x ? (this.node.x += l * e, this.node.x > r.x && (t = !0)) : (this.node.x -= l * e, this.node.x < r.x && (t = !0)), r.y > this.node.y ? (this.node.y += a * e, this.node.y > r.y && (t = !0)) : (this.node.y -= a * e, this.node.y < r.y && (t = !0)), t && (this.actionTag++, 5 == this.actionTag && (this.aniNode.scaleX = -this.scaleNum), this.actionTag >= 6 && (this.isAction = !1, this.controlSc.handleGameResult(!1)))
                }
            },
            init: function(e, t) {
                var n = this.getData(e);
                this.node.name = "monster" + t, this.actionTag = 1, this.isSlowdown = !1, this.slowDownValue = .3, this.isFrozen = !1, this.id = e, this.hp = n.hp, this.tempHp = n.hp, this.speed = n.spd, this.money = n.money, this.isDie = !1, this.initAnimation(n.ani), this.scaleNum = 1.2, this.size = this.getSize(n.ani), e >= 100 ? (this.node.getChildByName("corpse").scale = 1.8, this.size *= 1.8, this.scaleNum = 1.8) : (this.node.getChildByName("corpse").scale = 1.2, this.size *= 1.2, this.scaleNum = 1.2), this.initMsgPosition(this.size), this.controlSc = this.node.parent.parent.parent.getComponent("GameControl"), this.gameSc = this.node.parent.parent.parent.getComponent("GameScene"), this.parentNode = this.node.parent
            },
            getSize: function(e) {
                for (var t = 0; t < Flower.Currency.monsterSize.length; t++)
                    if (e == Flower.Currency.monsterSize[t].name) return Flower.Currency.monsterSize[t].size
            },
            getPoint: function(e) {
                this.cruxPoint = [];
                for (var t = 0; t < e.length; t++) {
                    var n = {
                        x: e[t].x,
                        y: e[t].y
                    };
                    this.cruxPoint.push(n)
                }
                this.isAction = !0
            },
            getData: function(e) {
                for (var t = 1; t < Flower.Currency.MonsterData.length; t++)
                    if (Flower.Currency.MonsterData[t].id == e) return Flower.Currency.MonsterData[t]
            },
            handleSlowDown: function() {
                null != this.slowDownTimeout && clearInterval(this.slowDownTimeout), this.isSlowdown = !0, this.aniNode.color = new cc.Color(147, 241, 209, 255), this.slowDownTimeout = setTimeout(function() {
                    this.isSlowdown = !1, this.aniNode.color = new cc.Color(255, 255, 255, 255)
                }.bind(this), 1e3)
            },
            handleFrozen: function() {
                null != this.froZenTimeout && clearInterval(this.froZenTimeout), this.isFrozen = !0, this.animationDisplay.timeScale = 0, this.aniNode.active = !1, this.aniNode.active = !0, this.aniNode.color = new cc.Color(66, 156, 207, 255), this.frozenAni.active = !0, this.frozenAni.getComponent(cc.Animation).play("yun"), this.froZenTimeout = setTimeout(function() {
                    this.isFrozen = !1, this.animationDisplay.timeScale = 1, this.animationDisplay.playAnimation("Walk", -1), this.animationDisplay.playAnimation("newAnimation", -1), this.aniNode.active = !1, this.aniNode.active = !0, this.aniNode.color = new cc.Color(255, 255, 255, 255), this.frozenAni.active = !1, this.frozenAni.getComponent(cc.Animation).stop("yun")
                }.bind(this), 1e3)
            },
            initAnimation: function(e) {
                var t = this;
                this.animationDisplay = this.aniNode.getComponent(dragonBones.ArmatureDisplay);
                var n = "animation/corpse/" + e;
                cc.loader.loadResDir(n, function(e, n) {
                    e || n.length <= 0 || (n.forEach(function(e) {
                        e instanceof dragonBones.DragonBonesAsset && (t.animationDisplay.dragonAsset = e), e instanceof dragonBones.DragonBonesAtlasAsset && (t.animationDisplay.dragonAtlasAsset = e)
                    }), t.animationDisplay.playAnimation("Walk", -1), t.animationDisplay.playAnimation("newAnimation", -1), t.aniNode.active = !1, t.aniNode.active = !0)
                })
            },
            initMsgPosition: function(e) {
                this.node.getComponent(cc.BoxCollider).offset.y = e / 2.5, this.hitAni.y = e / 2.5, this.blastAni.y = e / 2, this.bloodPro.node.y = e + 20, this.bloodPro.progress = 1, this.moneyNode.y = e / 1.5, this.criticalAni.y = e - 50, this.frozenAni.y = e - 20
            },
            playHitAnimation: function() {
                var e = this;
                this.node.getChildByName("hit").active = !0;
                var t = this.node.getChildByName("hit").getComponent(dragonBones.ArmatureDisplay);
                t.playAnimation("newAnimation", 1), t.addEventListener(dragonBones.EventObject.COMPLETE, function() {
                    e.node.getChildByName("hit").active = !1
                })
            },
            onCollisionEnter: function(e, t) {
                if (t.node.name == e.node.name) {
                    Flower.Currency.playSound(Flower.Currency.MusicType.hit), null !== e.node && null != e.node.getComponent("bullet") && e.node.getComponent("bullet").recovery(), this.playHitAnimation();
                    var n = e.node.getComponent("bullet").hurt;
                    if (e.node.getComponent("bullet").isSlowdown && (this.handleSlowDown(), Flower.Currency.playSound(Flower.Currency.MusicType.skill_slow)), e.node.getComponent("bullet").isCritical && (n *= 2, Flower.Currency.currencyAction(this.criticalAni, Flower.Currency.ActionType.CriticalShow), Flower.Currency.playSound(Flower.Currency.MusicType.skill_critical)), e.node.getComponent("bullet").isFrozen && (this.handleFrozen(), Flower.Currency.playSound(Flower.Currency.MusicType.skill_freeze)), this.tempHp -= n, this.bloodPro.progress = this.tempHp / this.hp, this.tempHp <= 0) {
                        this.bloodPro.node.active = !1, this.isDie = !0;
                        var r = Flower.Currency.isBlessing ? Math.round(1.5 * this.money) : this.money,
                            o = {
                                x: this.node.x,
                                y: this.node.y + this.size / 2
                            };
                        Flower.Currency.ShowEffect2(Flower.Currency.RewardType.Coin, o), this.gameSc.operateMoney(!0, r), this.moneyNode.active = !0, this.moneyNode.getComponent(cc.Label).string = "+" + Flower.Currency.ToGoodString(r), this.parentNode.childrenCount <= 1 && this.controlSc.judgeIsWin(), this.node.getChildByName("corpse").active = !1, this.node.getChildByName("blast").active = !0;
                        var i = this.node.getChildByName("blast").getComponent(dragonBones.ArmatureDisplay);
                        i.playAnimation("newAnimation", 1), i.addEventListener(dragonBones.EventObject.COMPLETE, function() {
                            this.node.getChildByName("blast").active = !1, this.node.removeFromParent(!0), this.node.destroy()
                        }.bind(this)), null != this.froZenTimeout && clearInterval(this.froZenTimeout), null != this.slowDownTimeout && clearInterval(this.slowDownTimeout)
                    }
                }
            }
        }), cc._RF.pop()
    }, {}],
    NewFlower: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ffad57GENZHIbi1kqqcnShl", "NewFlower");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                level: cc.Label,
                flower: cc.Node,
                moneyLabel: cc.Label,
                doubleBtn: cc.Button,
                flowerManage: cc.Node
            },
            gameSc: null,
            money: null,
            onLoad: function() {
                this.gameSc = this.node.parent.getComponent("GameScene")
            },
            showView: function(e) {
                if (r.default.showInterstitial("1"), r.default.showBanner("10"), r.default.showNative("1"), null == this.flower.getChildByName("flower")) {
                    var t = cc.instantiate(this.flowerManage.getComponent("FlowerManage").flowerPrefab);
                    t.name = "flower", t.getComponent("flower").init(e), t.y = 0, this.flower.addChild(t)
                } else this.flower.getChildByName("flower").getComponent("flower").init(e);
                this.level.string = "\u7b49\u7ea7\uff1a" + e, this.node.active = !0, this.money = Math.round(Flower.Currency.BotanyData[e].price / 18.82), this.moneyLabel.string = Flower.Currency.ToGoodString(this.money), r.default.is4399() && (this.doubleBtn.node.active = !1)
            },
            closeCallback: function() {
                this.node.active = !1, r.default.hideBanner()
            },
            freeCallback: function() {
                r.default.showVideo(this, this.doubleAward, this.receiveCallback, "11")
            },
            doubleAward: function() {
                r.default.hideBanner(), Flower.Currency.ShowEffect(Flower.Currency.RewardType.Coin), this.gameSc.operateMoney(!0, 2 * this.money), this.node.active = !1, this.node.parent.getComponent("GameScene").questSc.updateQuestPro(4, 1, 0)
            },
            receiveCallback: function() {
                r.default.hideBanner(), Flower.Currency.ShowEffect(Flower.Currency.RewardType.Coin), this.gameSc.operateMoney(!0, this.money), this.node.active = !1
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    OfflineView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dbf08obhRxJUKMqxZTjMkpd", "OfflineView");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                scNumNode: cc.Label,
                doubleButton: cc.Button
            },
            start: function() {
                r.default.is4399() && "0" == r.default.AdRemain4399 && (this.doubleButton.node.active = !1)
            },
            refreshView: function() {
                var e = Flower.Currency.offtimes,
                    t = this.caculateSc(e);
                t <= 0 && this.showView(!1), this.getSc = t, this.scNumNode.string = "+" + Flower.Currency.ToGoodString(t), r.default.is4399() && "0" == r.default.AdRemain4399 && (this.doubleButton.node.active = !1)
            },
            caculateSc: function(e) {
                for (var t = Flower.Currency.flower, n = Flower.Currency.BotanyData, r = Math.round(e / 1), o = 0, i = 0; i < t.length; i++) {
                    var l = t[i];
                    if (l && 0 != l && 1 != l) o += r * n[l.level].offline
                }
                return o
            },
            normalGetSc: function(e) {
                Flower.Currency.ShowEffect(Flower.Currency.RewardType.Coin), this.node.parent.getComponent("GameScene").operateMoney(!0, this.getSc), this.showView(!1)
            },
            doubleGetSc: function(e) {
                console.log("\u53cc\u500d\u9886\u53d6"), r.default.showVideo(this, this.doubleGetScAdEnd, this.normalGetSc, "1")
            },
            doubleGetScAdEnd: function() {
                Flower.Currency.ShowEffect(Flower.Currency.RewardType.Coin), this.node.parent.getComponent("GameScene").operateMoney(!0, 2 * this.getSc), this.showView(!1)
            },
            closeBtnClick: function() {
                this.showView(!1)
            },
            showView: function(e) {
                r.default.hideBanner(), this.node.active = e, e && (this.refreshView(), r.default.showBanner("1"))
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    PlaneView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "637c8u7pWRKZ4hCmpWsrKMb", "PlaneView");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                flowerManage: cc.Node,
                doubleButton: cc.Button
            },
            gameSc: null,
            controlSc: null,
            start: function() {
                this.gameSc = this.node.parent.getComponent("GameScene"), this.controlSc = this.node.parent.getComponent("GameControl"), r.default.is4399() && "0" == r.default.AdRemain4399 && (this.doubleButton.node.active = !1)
            },
            freeCallback: function(e) {
                r.default.showVideo(this, this.free, this.freeFailed, "2")
            },
            free: function() {
                var e = Flower.Currency.planeData[Flower.Currency.highLevel];
                Flower.Currency.AddSeed([e, e, e, e]), this.flowerManage.getComponent("FlowerManage").handlePlane(), this.node.parent.getComponent("GameScene").questSc.updateQuestPro(4, 1, 0), this.showView(!1)
            },
            freeFailed: function() {
                console.log("PlaneView freeFailed!"), this.showView(!1)
            },
            gemCallback: function(e) {
                if (Flower.Currency.diamond < 6) Flower.Currency.ShowTip("\u5b9d\u77f3\u4e0d\u8db3\uff01");
                else {
                    this.gameSc.operateGem(!1, 6);
                    var t = Flower.Currency.planeData[Flower.Currency.highLevel];
                    Flower.Currency.AddSeed([t, t, t, t]), this.flowerManage.getComponent("FlowerManage").handlePlane(), this.showView(!1)
                }
            },
            closeCallback: function(e) {
                this.showView(!1), this.controlSc.startPlane()
            },
            showView: function(e) {
                r.default.hideBanner(), this.node.active = e, e && r.default.showBanner("3")
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    QuestView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "700e0VdjZ9GXbucSiktRKGp", "QuestView");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                itemPrefab: [cc.Prefab],
                itemList: cc.Node,
                newIcon: cc.Node,
                awardNode: cc.Node
            },
            isInit: !1,
            isNew: !1,
            start: function() {},
            init: function() {
                this.refreshQuestInfos(), this.initView()
            },
            handlerJsonData: function() {
                for (var e = Flower.Currency.AchieveData, t = [], n = [], r = 1; r < e.length; r++) 1 == e[r].type ? t.push(e[r]) : n.push(e[r]);
                this.questDatas = t, this.achieveDatas = n
            },
            refreshQuestInfos: function() {
                if (this.verifyShouldUpdate() || 0 == Flower.Currency.quests.length) {
                    Flower.Currency.quests = this.initQuestInfos(), Flower.Currency.setData("quests", JSON.stringify(Flower.Currency.quests));
                    var e = (new Date).getTime();
                    Flower.Currency.questRefrshTime = e, Flower.Currency.setData("questRefrshTime", Flower.Currency.questRefrshTime)
                }
            },
            update: function(e) {
                this.verifyShouldUpdate() && this.init()
            },
            verifyShouldUpdate: function() {
                var e = new Date((new Date).toLocaleDateString()).getTime();
                return Flower.Currency.questRefrshTime < e
            },
            initQuestInfos: function() {
                var e = [];
                this.handlerJsonData();
                for (var t = this.questDatas, n = 0; n < 4 && 0 != t.length; n++) {
                    var r = parseInt(Math.random() * t.length),
                        o = new Flower.Currency.QuestObj;
                    o.id = t[r].id, o.count = t[r].count, o.pro = 1 == t[r].target ? 1 : 0, o.award = !1, e.push(o), t.splice(r, 1)
                }
                return this.sortQuestById(e), e
            },
            sortQuestById: function(e) {
                for (var t = 0; t < e.length - 1; t++)
                    for (var n = 0; n < e.length - 1 - t; n++)
                        if (e[n].id > e[n + 1].id) {
                            var r = e[n];
                            e[n] = e[n + 1], e[n + 1] = r
                        }
            },
            initView: function() {
                this.delChild(), this.isNew = !1, this.initContent(), this.initAchieve(), this.newIcon.active = this.isNew
            },
            initContent: function() {
                for (var e = Flower.Currency.quests, t = !1, n = 0, r = 0; n < e.length; n++)
                    if (!e[n].award) {
                        t = !0;
                        var o = cc.instantiate(this.itemPrefab[0]);
                        this.itemList.insertChild(o, r + 1), this.editQuestPrefab(o, e[n], 1), o.active = !0, o.tagId = e[n].id, o.type = 1, r++
                    } this.itemList.getChildByName("title1").active = t
            },
            delChild: function() {
                for (var e = this.itemList.children, t = 0; t < e.length;) {
                    var n = e[t];
                    n.type ? n.removeFromParent() : t++
                }
            },
            refreshContent: function() {
                var e = this.itemList.children;
                this.isNew = !1;
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n.type && 1 == n.type)(r = this.getQuestInfoById(n.tagId)) && this.editQuestPrefab(n, r, n.type);
                    else if (n.type && 2 == n.type) {
                        var r;
                        (r = this.getAchieveInfoById(n.tagId)) && this.editQuestPrefab(n, r, n.type)
                    }
                }
                this.newIcon.active = this.isNew
            },
            editQuestPrefab: function(e, t, n) {
                var r = Flower.Currency.AchieveData[t.id];
                if (1 == n) {
                    var o = e.getChildByName("iconDi").getChildByName("icon"),
                        i = "./pic/quest/" + r.icon;
                    cc.loader.loadRes(i, cc.SpriteFrame, function(e, t) {
                        o._components[0].spriteFrame = t
                    })
                }
                e.getChildByName("name").getComponent(cc.Label).string = r.name, e.getChildByName("num").getComponent(cc.Label).string = "x" + Flower.Currency.ToGoodString(r.reward);
                var l = e.getChildByName("pro"),
                    a = l.getChildByName("label"),
                    s = Number(t.pro / t.count);
                1 != (s = s >= 1 ? 1 : s) || t.award || (this.isNew = !0), l._components[1].progress = s;
                var c = 1 == s ? t.count + "/" + t.count : t.pro + "/" + t.count;
                a.getComponent(cc.Label).string = c;
                var u = e.getChildByName("award");
                u.active = 1 == s, u.tagId = t.id, u.off(cc.Node.EventType.TOUCH_END, this.showAwardView, this), u.on(cc.Node.EventType.TOUCH_END, this.showAwardView, this)
            },
            showAwardView: function(e) {
                this.awardNode.active = !0;
                var t = this.awardNode.getChildByName("num"),
                    n = e.target.tagId,
                    o = Flower.Currency.AchieveData[n];
                t.getComponent(cc.Label).string = "x" + Flower.Currency.ToGoodString(o.reward), this.awardID = n, this.targerNode = e.target, r.default.is4399() && (this.awardNode.getChildByName("btn1").active = !1)
            },
            closeAwardView: function() {
                this.awardNode.active = !1
            },
            getAwardNormal: function() {
                1 == Flower.Currency.AchieveData[this.awardID].type ? this.getQuestAward(this.awardID, 1) : this.getAchieveAward(this.awardID, 1), this.initView(), this.closeAwardView()
            },
            getAwardBonus: function() {
                r.default.showVideo(this, this.doubleAward, this.getAwardNormal, "8")
            },
            doubleAward: function() {
                1 == Flower.Currency.AchieveData[this.awardID].type ? this.getQuestAward(this.awardID, 2) : this.getAchieveAward(this.awardID, 2), this.initView(), this.closeAwardView()
            },
            getQuestAward: function(e, t) {
                var n = Flower.Currency.AchieveData[e];
                Flower.Currency.ShowEffect(Flower.Currency.RewardType.Gem), this.node.parent.getComponent("GameScene").operateGem(!0, n.reward * t), this.saveQuestInfo(e)
            },
            saveQuestInfo: function(e) {
                for (var t = 0; t < Flower.Currency.quests.length; t++)
                    if (Flower.Currency.quests[t].id == e) {
                        Flower.Currency.quests[t].award = !0;
                        break
                    } Flower.Currency.setData("quests", JSON.stringify(Flower.Currency.quests))
            },
            getQuestDataById: function(e) {
                for (var t = 0; t < this.questDatas.length; t++)
                    if (this.questDatas[t].id == e) return this.questDatas[t];
                return ""
            },
            getQuestInfoById: function(e) {
                for (var t = 0; t < Flower.Currency.quests.length; t++)
                    if (Flower.Currency.quests[t].id == e) return Flower.Currency.quests[t];
                return ""
            },
            getAchieveInfoById: function(e) {
                for (var t = 0; t < Flower.Currency.achieves.length; t++)
                    if (Flower.Currency.achieves[t].id == e) return Flower.Currency.achieves[t];
                return ""
            },
            initAchieve: function() {
                var e = Flower.Currency.achieves;
                0 == e.length && this.initAchievenfos(e);
                for (var t = !1, n = 0; n < e.length; n++)
                    if (!e[n].award) {
                        t = !0;
                        var r = cc.instantiate(this.itemPrefab[1]);
                        this.itemList.addChild(r), this.editQuestPrefab(r, e[n], 2), r.active = !0, r.tagId = e[n].id, r.type = 2
                    } this.itemList.getChildByName("title2").active = t
            },
            initAchievenfos: function(e) {
                for (var t = Flower.Currency.AchieveData, n = 1; n < t.length; n++)
                    if (2 == t[n].type && 1 == t[n].default) {
                        var r = new Flower.Currency.QuestObj;
                        r.id = t[n].id, r.count = t[n].count, r.pro = 0, r.award = !1, e.push(r)
                    } this.sortQuestById(e), Flower.Currency.achieves = e, Flower.Currency.setData("achieves", JSON.stringify(Flower.Currency.achieves))
            },
            getAchieveAward: function(e, t) {
                var n = Flower.Currency.AchieveData[e];
                if (Flower.Currency.ShowEffect(Flower.Currency.RewardType.Gem), this.node.parent.getComponent("GameScene").operateGem(!0, n.reward * t), n.nextId) {
                    var r = Flower.Currency.AchieveData[n.nextId],
                        o = new Flower.Currency.QuestObj;
                    o.id = r.id, o.count = r.count, o.pro = n.condition == r.condition ? n.count : 0, o.award = !1, Flower.Currency.achieves.push(o)
                }
                this.sortQuestById(Flower.Currency.achieves), this.saveAchieveInfo(e), this.itemList.removeChild(this.targerNode)
            },
            saveAchieveInfo: function(e) {
                for (var t = 0; t < Flower.Currency.achieves.length; t++)
                    if (Flower.Currency.achieves[t].id == e) {
                        Flower.Currency.achieves[t].award = !0;
                        break
                    } Flower.Currency.setData("achieves", JSON.stringify(Flower.Currency.achieves))
            },
            updateQuestPro: function(e, t, n) {
                for (var r = Flower.Currency.quests, o = 0; o < r.length; o++) {
                    var i = r[o],
                        l = Flower.Currency.AchieveData[i.id];
                    l.target != e || 0 != l.condition && l.condition != n || (i.pro += Number(t))
                }
                Flower.Currency.setData("quests", JSON.stringify(Flower.Currency.quests)), this.refreshContent()
            },
            updateAchievePro: function(e, t, n) {
                for (var r = Flower.Currency.achieves, o = 0; o < r.length; o++) {
                    var i = r[o],
                        l = Flower.Currency.AchieveData[i.id];
                    l.target != e || 0 != l.condition && l.condition != n || (i.pro += Number(t))
                }
                Flower.Currency.setData("achieves", JSON.stringify(Flower.Currency.achieves)), this.refreshContent()
            },
            closeBtnClick: function() {
                this.showView(!1)
            },
            openBtnClick: function() {
                this.showView(!0)
            },
            showView: function(e) {
                r.default.hideBanner(), this.node.active = e, e ? (r.default.showInterstitial("3"), r.default.showBanner("7"), this.refreshContent()) : this.closeAwardView()
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    ResultView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a4cc7oBoqlBEIMbVPGGoSdZ", "ResultView");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                winNode: cc.Node,
                failNode: cc.Node,
                smallNode: cc.Node,
                light: cc.Node,
                winTitle: cc.SpriteFrame,
                failTitle: cc.SpriteFrame
            },
            gameSc: null,
            parentSc: null,
            time: null,
            moneyNum: null,
            timeID: null,
            isBig: null,
            onLoad: function() {},
            start: function() {},
            showResult: function(e, t, n) {
                this.gameSc = this.node.parent.getComponent("GameScene"), this.parentSc = this.node.parent.getComponent("GameControl"), this.node.active = !0, this.winNode.active = !1, this.failNode.active = !1, this.smallNode.active = !1, this.moneyNum = n, this.isBig = t, t ? (r.default.showInterstitial("2"), this.time = 4e3, e ? (this.light.angle = 0, this.light.runAction(cc.rotateBy(10, 360)), this.winNode.active = !0, r.default.showBanner("9"), r.default.is4399() && (this.winNode.getChildByName("double").active = !1), this.winNode.getChildByName("money").getChildByName("num").getComponent(cc.Label).string = Flower.Currency.ToGoodString(n), Flower.Currency.playSound(Flower.Currency.MusicType.success_two)) : (this.failNode.active = !0, r.default.showBanner("8"), r.default.is4399() && "0" == r.default.AdRemain4399 && (this.failNode.getChildByName("double").active = !1), this.failNode.getChildByName("money").getChildByName("num").getComponent(cc.Label).string = Flower.Currency.ToGoodString(n), Flower.Currency.playSound(Flower.Currency.MusicType.fail))) : (this.time = 2e3, this.smallNode.active = !0, this.smallNode.getChildByName("tip").active = !e, e ? (this.smallNode.getChildByName("title").getComponent(cc.Sprite).spriteFrame = this.winTitle, Flower.Currency.playSound(Flower.Currency.MusicType.success_one)) : (this.smallNode.getChildByName("title").getComponent(cc.Sprite).spriteFrame = this.failTitle, Flower.Currency.playSound(Flower.Currency.MusicType.fail))), t || (this.timeID = setTimeout(function() {
                    this.handleNext()
                }.bind(this), this.time))
            },
            handleNext: function(e) {
                this.light.stopAllActions(), this.node.active = !1, this.parentSc.startGame();
                var t = e ? 2 * this.moneyNum : this.moneyNum;
                this.isBig && Flower.Currency.ShowEffect(Flower.Currency.RewardType.Coin), this.gameSc.operateMoney(!0, t)
            },
            receiveCallback: function(e) {
                r.default.hideBanner(), this.node.active = !1, null != this.timeID && clearInterval(this.timeID), this.handleNext(!1)
            },
            doubleCallback: function(e) {
                r.default.showVideo(this, this.doubles, this.freeFailed, "9")
            },
            doubles: function() {
                r.default.hideBanner(), this.node.active = !1, null != this.timeID && clearInterval(this.timeID), this.handleNext(!0)
            },
            freeFailed: function() {
                console.log("ResultView double Failed!"), r.default.hideBanner(), this.node.active = !1, null != this.timeID && clearInterval(this.timeID), this.handleNext(!1)
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    Sdk4399: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1a694nBioBJ/7824F0YmK3H", "Sdk4399"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(e("./SdkMgr"));

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var l = function() {
            function e() {
                i(this, e)
            }
            return r(e, null, [{
                key: "showVideo",
                value: function(e, t, n, r) {/* 
                    var i = this;
                    this.adTarget = e, this.adfunc = t, this.failfunc = n, h5api.canPlayAd(function(e) {
                        //console.log("showVideo, \u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a\uff1a ", e.canPlayAd, "\n", "\u5269\u4f59\u6b21\u6570\uff1a ", e.remain), "1" == e.remain && (o.default.AdRemain4399 = "0")
                    }) ? (console.log("\u6709\u5e7f\u544a\u8d44\u6e90\u53ef\u64ad\u653e"), h5api.playAd(function(e) {
                        //console.log("\u4ee3\u7801:" + e.code + ",\u6d88\u606f:" + e.message), 1e4 === e.code ? (console.log("\u5f00\u59cb\u64ad\u653e\uff0c\u6682\u505c\u97f3\u4e50"), cc.game.pause()) : 10001 === e.code ? (console.log("\u64ad\u653e\u7ed3\u675f"), i.adfunc.call(i.adTarget), cc.game.resume()) : (console.log("\u5e7f\u544a\u5f02\u5e38"), i.failfunc.call(i.adTarget))
                    })) : (console.log("\u6ca1\u6709\u5e7f\u544a\u8d44\u6e90\u53ef\u64ad\u653e"), i.failfunc.call(i.adTarget)) */
                }
            }, {
                key: "moreGames",
                value: function() {
                    //h5api.showRecommend()
                }
            }, {
                key: "canShowAd4399",
                value: function() {
                    /* h5api.canPlayAd(function(e) {
                        //console.log("onLoad-----\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a\uff1a ", e.canPlayAd, "\n", "\u5269\u4f59\u6b21\u6570\uff1a ", e.remain), o.default.AdRemain4399 = e.remain
                    }) */
                }
            }, {
                key: "moreGames4399",
                value: function() {
                    //h5api.showRecommend()
                }
            }]), e
        }();
        n.default = l, t.exports = n.default, cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    SdkMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fc095OUEO9PjL8L3REVO+We", "SdkMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = a(e("./Sdk4399")),
            i = a(e("./SdkVivo")),
            l = a(e("./SdkQtt"));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var c = function() {
            function e() {
                s(this, e)
            }
            return r(e, null, [{
                key: "init",
                value: function() {}
            }, {
                key: "share",
                value: function(e, t) {}
            }, {
                key: "showBanner",
                value: function(e) {
                    this.isVivo() && i.default.showBanner(e), this.isQtt() && l.default.showBanner(e)
                }
            }, {
                key: "hideBanner",
                value: function() {
                    this.isVivo() && i.default.hideBanner(), this.isQtt() && l.default.hideBanner()
                }
            }, {
                key: "showInterstitial",
                value: function(e) {
                    this.isVivo() && i.default.showInterstitial(e)
                }
            }, {
                key: "showVideo",
                value: function(e, t, n, r) {
                    if (this.isBaidu()) SdkBaidu.showVideo(e, t, n, r);
                    else if (this.isVivo()) i.default.showVideo(e, t, n, r);
                    else if (this.is4399()) o.default.showVideo(e, t, n, r);
                    else if (this.isQtt()) l.default.showVideo(e, t, n, r);
                    else {
                        console.log("xiewu==11");
                        this.adTarget = e, this.adfunc = t, this.adfunc.call(this.adTarget), console.log("xiewu==3333")
                    }
                }
            }, {
                key: "showNative",
                value: function(e) {
                    this.isVivo() && i.default.showNative(e)
                }
            }, {
                key: "canShowAd4399",
                value: function() {
                    o.default.canShowAd4399()
                }
            }, {
                key: "moreGames4399",
                value: function() {
                    o.default.moreGames4399()
                }
            }, {
                key: "addDesktop",
                value: function() {
                    this.isVivo() && i.default.addDesktop()
                }
            }, {
                key: "isVivo",
                value: function() {
                    return "vivo" == this.channel
                }
            }, {
                key: "isBaidu",
                value: function() {
                    return "baidu" == this.channel
                }
            }, {
                key: "isOppo",
                value: function() {
                    return "oppo" == this.channel
                }
            }, {
                key: "is4399",
                value: function() {
                    return "4399" == this.channel
                }
            }, {
                key: "isQtt",
                value: function() {
                    return "qtt" == this.channel
                }
            }]), e
        }();
        n.default = c, c.channel = "4399", c.AdRemain4399 = "10", t.exports = n.default, cc._RF.pop()
    }, {
        "./Sdk4399": "Sdk4399",
        "./SdkQtt": "SdkQtt",
        "./SdkVivo": "SdkVivo"
    }],
    SdkQtt: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9e7d9S9GcJDUpZ3Vribound", "SdkQtt"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        (function(e) {
            e && e.__esModule
        })(e("./SdkMgr"));

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e() {
                o(this, e)
            }
            return r(e, null, [{
                key: "showBanner",
                value: function(e) {
                    console.log("showBanner, bannerType=" + e), qttGame.showBanner(e)
                }
            }, {
                key: "hideBanner",
                value: function() {
                    qttGame.hideBanner()
                }
            }, {
                key: "showVideo",
                value: function(e, t, n, r) {
                    cc.game.pause();
                    var o = this;
                    this.adTarget = e, this.adfunc = t, this.failfunc = n;
                    var i = {
                        gametype: 1,
                        rewardtype: 1,
                        data: {}
                    };
                    i.data.title = "\u606d\u559c\uff0c\u6210\u529f\u83b7\u5f97\u5956\u52b1", qttGame.showVideo(function(e) {
                        1 == e ? (console.log("\u89c6\u9891\u64ad\u653e\u5b8c\u6210\uff0c\u53d1\u653e\u5956\u52b1"), o.adfunc.call(o.adTarget)) : 2 == e ? (console.log("\u89c6\u9891\u63d0\u524d\u5173\u95ed"), o.failfunc.call(o.adTarget)) : (console.log("\u5e7f\u544a\u586b\u5145\u4e0d\u8db3"), o.failfunc.call(o.adTarget)), cc.game.resume()
                    }, i)
                }
            }]), e
        }();
        n.default = i, t.exports = n.default, cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    SdkVivo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "03c83b9xQZMmKT3gErbNfgU", "SdkVivo"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r, o, i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = (o = r = function() {
            function e() {
                l(this, e)
            }
            return i(e, null, [{
                key: "showBanner",
                value: function(e) {
                    var t = this,
                        n = "fd41c06d2a4f477ba9a71b715e6529f4";
                    "1" == e ? n = "fd41c06d2a4f477ba9a71b715e6529f4" : "2" == e ? n = "1732a90eaa054c498fb9e952c68d3bfc" : "3" == e ? n = "79753c28924a4ac9b44d66dc43a63cf5" : "4" == e ? n = "d47ae73bb0484d9ab8a2caa94aab46ba" : "5" == e ? n = "2d8d04fc167e403cbac56bef2e2cfcc6" : "6" == e ? n = "e50a5d5a606245099b79d7efb3a42b73" : "7" == e ? n = "853e5e387c3e4a248f032d29b9125f3f" : "8" == e ? n = "9564448d5cac4b77ba2f72030b9bd780" : "9" == e ? n = "adb028431b8a40e790f79bfa5abcad3b" : "10" == e ? n = "4ac5b038226f432db0986c023a98e171" : "11" == e ? n = "0d9c743713e346c9afcd576b8a2a6435" : "12" == e && (n = "ccf7ff2b389f4d7cb4129de51b327cce"), console.log("posIds=" + n + ",bannerType=" + e), this.hideBanner(), qg.getSystemInfoSync().platformVersionCode >= 1031 ? (this.bannerAd = qg.createBannerAd({
                        posId: n,
                        style: {}
                    }), this.bannerAd.onError(function(e) {
                        console.log("vivo banner\u9519\u8bef:" + e.errCode)
                    }), this.bannerAd.onLoad(function() {
                        console.log("banner\u5e7f\u544a,onLoad\u6210\u529f,start\u5c55\u793a"), t.bannerAd.show().then(function() {
                            console.log("banner\u5e7f\u544a\u5c55\u793a\u6210\u529f")
                        }).catch(function(e) {
                            console.log("banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25", e.errCode)
                        })
                    })) : console.log("\u7248\u672c\u8fc7\u4f4e\uff0c\u4e0d\u80fd\u663e\u793a banner")
                }
            }, {
                key: "hideBanner",
                value: function() {
                    console.log("vivo \u9500\u6bc1 banner"), this.bannerAd && this.bannerAd.destroy()
                }
            }, {
                key: "showInterstitial",
                value: function(e) {
                    var t = this,
                        n = "5a52a175e01a4c33b932e2190e1216af";
                    "1" == e ? n = "5a52a175e01a4c33b932e2190e1216af" : "2" == e ? n = "a9028973854040f6b0a1efd4aed37988" : "3" == e && (n = "d72d6e8c059c4067ae25bff76374be27"), console.log("posIds=" + n + ",interstitialType=" + e), qg.getSystemInfoSync().platformVersionCode >= 1031 ? (this.interstitialAd = qg.createInterstitialAd({
                        posId: n
                    }), this.interstitialAd.onError(function(e) {
                        console.log("vivo Interstitial\u9519\u8bef:" + e.errCode)
                    }), this.interstitialAd.onLoad(function() {
                        console.log("\u63d2\u5c4f\u5e7f\u544a,onLoad\u6210\u529f,start\u5c55\u793a"), t.interstitialAd.show().then(function() {
                            console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u6210\u529f")
                        }).catch(function(e) {
                            console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25", e.errCode)
                        })
                    })) : console.log("\u7248\u672c\u8fc7\u4f4e\uff0c\u4e0d\u80fd\u663e\u793a Interstitial AD")
                }
            }, {
                key: "showVideo",
                value: function(e, t, n, r) {
                    var o = this,
                        i = this;
                    this.adTarget = e, this.adfunc = t, this.failfunc = n;
                    var l = "a19a30bb587e4503bbeb5ef5280e3df4";
                    "1" == r ? l = "a19a30bb587e4503bbeb5ef5280e3df4" : "2" == r ? l = "27d5b00db85c49b2b06210bd8a6c8e76" : "3" == r ? l = "fcff0ee2454f4a0d9d31e236d38f7d96" : "4" == r ? l = "f63a65566bf6429bbf42ea061dff827d" : "5" == r ? l = "6da50a372d2e4469999db730f097d673" : "6" == r ? l = "78418392f751423d852e089e8c0bbfa3" : "7" == r ? l = "xxxxxxxxxxxxxxx" : "8" == r ? l = "6f2265ed3f9f4823a195dfa35a325530" : "9" == r ? l = "661da12b0b214fc7ad1f0ef6e5d81958" : "10" == r ? l = "b1cf634b47e144bcb7ad8e694abd0483" : "11" == r ? l = "da3e5ec6bb7c48ddb6e6bf69b0f708c1" : "12" == r ? l = "ff905931b175422d870fa5764c67eb84" : "13" == r ? l = "26843d8726e6451da31692ea0c3cd620" : "14" == r && (l = "87c7bd3eadc24f0085ff34c58c80b0cf"), console.log("show video! videoType=" + r + ",posIds=" + l), qg.getSystemInfoSync().platformVersionCode >= 1041 ? (this.rewardedVideoAd ? (console.log("\u89c6\u9891\uff0c\u4e0d\u662f\u7b2c\u4e00\u6b21\uff0cload"), Date.now() - this.adLastUpdateTime > 6e4 ? this.rewardedVideoAd.load().then(function() {
                        console.log("\u89c6\u9891\uff0c\u4e0d\u662f\u7b2c\u4e00\u6b21\uff0cload\u6210\u529f")
                    }).catch(function(e) {
                        console.log("\u6fc0\u89c6\u9891\uff0c\u4e0d\u662f\u7b2c\u4e00\u6b21\uff0cload\u5931\u8d25:", e.errCode)
                    }) : (qg.showToast({
                        message: "\u89c6\u9891\u8fc7\u4e8e\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                        duration: 1
                    }), i.failfunc.call(i.adTarget))) : (console.log("\u89c6\u9891\uff0c\u7b2c\u4e00\u6b21, create"), this.rewardedVideoAd = qg.createRewardedVideoAd({
                        posId: l
                    })), this.rewardedVideoAd.onError(function(e) {
                        console.log("\u89c6\u9891\u5f02\u5e38:", e.errCode), qg.showToast({
                            message: "\u89c6\u9891\u6682\u672a\u51c6\u5907\u597d",
                            duration: 1
                        }), i.failfunc.call(i.adTarget)
                    }), this.rewardedVideoAd.onLoad(function() {
                        o.adLastUpdateTime = Date.now(), o.rewardedVideoAd.show().then(function() {
                            console.log("\u64ad\u653e\u89c6\u9891\uff0c\u6682\u505c\u6e38\u620f--"), o.isVideoPlay = "yes", cc.game.pause(), cc.audioEngine.stopAll()
                        }).catch(function(e) {
                            console.log("\u89c6\u9891\u64ad\u653e\u9519\u8bef:" + e.errCode), qg.showToast({
                                message: "\u89c6\u9891\u6682\u672a\u51c6\u5907\u597d",
                                duration: 1
                            }), i.failfunc.call(i.adTarget)
                        })
                    }), this.rewardedVideoAd.onClose(function(e) {
                        e && e.isEnded ? (console.log("\u89c6\u9891\u5b8c\u6574\u64ad\u653e\u540e\u5173\u95ed:" + r), i.adfunc.call(i.adTarget)) : (console.log("\u89c6\u9891\u4e2d\u9014\u5173\u95ed:" + r), i.failfunc.call(i.adTarget)), o.rewardedVideoAd.offClose(console.log("\u89c6\u9891\u5173\u95ed\uff0c\u7ee7\u7eed\u6e38\u620f , \u5173\u95edonClose\u76d1\u542c:" + r)), o.isVideoPlay = "no", cc.game.resume(), cc.audioEngine.stopAll(), Flower.Currency.playSound(Flower.Currency.MusicType.bgm)
                    })) : (qg.showToast({
                        message: "\u7248\u672c\u8fc7\u4f4e\uff0c\u4e0d\u652f\u6301\u89c6\u9891\u5e7f\u544a",
                        duration: 1
                    }), i.failfunc.call(i.adTarget))
                }
            }, {
                key: "addDesktop",
                value: function() {
                    qg.getSystemInfoSync().platformVersionCode >= 1041 ? qg.hasShortcutInstalled({
                        success: function(e) {
                            e ? console.log("\u5df2\u521b\u5efa\u684c\u9762\u56fe\u6807.") : (console.log("\u672a\u521b\u5efa\u684c\u9762\u56fe\u6807."), qg.installShortcut({
                                success: function() {
                                    console.log("\u684c\u9762\u56fe\u6807,\u521b\u5efa\u6210\u529f.")
                                }
                            }))
                        }
                    }) : qg.showToast({
                        message: "\u7248\u672c\u8fc7\u4f4e\uff0c\u4e0d\u652f\u6301\u6dfb\u52a0\u684c\u9762\u56fe\u6807",
                        duration: 1
                    })
                }
            }, {
                key: "showNative",
                value: function(e) {
                    var t = this,
                        n = "fc6a391890614d5b885e092a298d8261";
                    "1" == e ? n = "fc6a391890614d5b885e092a298d8261" : "2" == e ? n = "xxxxxxxxxxxxxxx" : "3" == e && (n = "xxxxxxxxxxxxxxx"), console.log("posIds=" + n + ",nativeType=" + e), qg.getSystemInfoSync().platformVersionCode >= 1053 && (this.nativeAd = qg.createNativeAd({
                        posId: n
                    }), this.nativeAd.load().then(function() {
                        console.log("\u539f\u751f\u5e7f\u544aload\u6210\u529f")
                    }).catch(function(e) {
                        console.log("\u539f\u751f\u5e7f\u544aload\u5931\u8d25", JSON.stringify(e))
                    }), this.nativeAd.onLoad(function(e) {
                        console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210.....", JSON.stringify(e)), e && e.adList && (t.nativeCurrentAdList = e.adList.pop())
                    }))
                }
            }]), e
        }(), r.adLastUpdateTime = 0, r.isVideoPlay = "no", o);
        n.default = a, t.exports = n.default, cc._RF.pop()
    }, {}],
    SetView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "870c9Jag15LHbivqT29s6Nr", "SetView"), cc.Class({
            extends: cc.Component,
            properties: {
                musicSign: [cc.Node],
                effectSign: [cc.Node]
            },
            onLoad: function() {
                this.musicSign[0].active = Flower.Currency.isPlayBgMusic, this.musicSign[1].active = !Flower.Currency.isPlayBgMusic, this.effectSign[0].active = Flower.Currency.isPlaySound, this.effectSign[1].active = !Flower.Currency.isPlaySound
            },
            start: function() {},
            btnClick: function(e, t) {
                switch (Number(t)) {
                    case 0:
                        this.showView(!1);
                        break;
                    case 1:
                        Flower.Currency.isPlayBgMusic = !Flower.Currency.isPlayBgMusic, Flower.Currency.setData("isplayBgMusic", Flower.Currency.isPlayBgMusic), Flower.Currency.playSound(Flower.Currency.MusicType.bgm), this.musicSign[0].active = Flower.Currency.isPlayBgMusic, this.musicSign[1].active = !Flower.Currency.isPlayBgMusic;
                        break;
                    case 2:
                        Flower.Currency.isPlaySound = !Flower.Currency.isPlaySound, Flower.Currency.setData("isplaySound", Flower.Currency.isPlaySound), this.effectSign[0].active = Flower.Currency.isPlaySound, this.effectSign[1].active = !Flower.Currency.isPlaySound
                }
            },
            showView: function(e) {
                this.node.active = e
            }
        }), cc._RF.pop()
    }, {}],
    ShopView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "15ca0B2N3lN7KgWvR2JrTH4", "ShopView");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                shopItem: cc.Prefab,
                headAtlas: cc.SpriteAtlas,
                yellowHead: cc.SpriteFrame,
                blueHead: cc.SpriteFrame,
                violetHead: cc.SpriteFrame,
                lockHead: cc.SpriteFrame,
                flowerControl: cc.Node,
                list: cc.Node,
                PAGE_NUM: 10,
                OPT_HEIGHT: 202,
                scroll_view: cc.ScrollView,
                shopBtn: cc.Node
            },
            gameSc: null,
            shopTime: null,
            freeIndex: null,
            index5: null,
            onLoad: function() {
                var e = new Date,
                    t = Flower.Currency.getData("shoptime");
                this.shopTime = t ? JSON.parse(t) : {
                    year: e.getFullYear(),
                    month: e.getMonth() + 1,
                    day: e.getDate(),
                    times: 5,
                    surplus: 0,
                    gemTimes1: 1,
                    gemTimes2: 1
                }, this.shopTime.year == e.getFullYear() && this.shopTime.month == e.getMonth() + 1 && this.shopTime.day == e.getDate() || (this.shopTime.year = e.getFullYear(), this.shopTime.month = e.getMonth() + 1, this.shopTime.day = e.getDate(), this.shopTime.times = 5, this.shopTime.surplus = 0, this.shopTime.gemTimes = 2), this.gameSc = this.node.parent.getComponent("GameScene"), this.initList(), this.shopTime.times > 0 && Flower.Currency.highLevel >= 4 && (this.shopBtn.getChildByName("tip").active = !0)
            },
            start: function() {
                this.start_y = this.content.y, this.start_index = 0, this.load_record(this.start_index)
            },
            load_record: function(e) {
                this.start_index = e;
                for (var t = 0; t < 3 * this.PAGE_NUM; t++) {
                    var n = this.opt_item_set[t];
                    this.initShopItem(n, e + t + 1), n.shopId = e + t + 1
                }
                this.flashMsg()
            },
            on_scroll_ended: function() {
                this.scrollveiw_load_recode(), this.scroll_view.elastic = !0
            },
            scrollveiw_load_recode: function() {
                if (this.start_index + 3 * this.PAGE_NUM < Flower.Currency.BotanyData.length - 1 && this.content.y >= this.start_y + 2 * this.PAGE_NUM * this.OPT_HEIGHT) {
                    if (this.scroll_view._autoScrolling) return void(this.scroll_view.elastic = !1);
                    var e = this.PAGE_NUM;
                    if (this.start_index += e, this.start_index + 3 * this.PAGE_NUM > Flower.Currency.BotanyData.length - 1) {
                        var t = this.start_index + 3 * this.PAGE_NUM - Flower.Currency.BotanyData.length + 1;
                        e -= t, this.start_index -= t
                    }
                    return this.load_record(this.start_index), void(this.content.y -= e * this.OPT_HEIGHT)
                }
                if (this.start_index > 0 && this.content.y <= this.start_y) {
                    if (this.scroll_view._autoScrolling) return void(this.scroll_view.elastic = !1);
                    var n = this.PAGE_NUM;
                    this.start_index -= n, this.start_index < 0 && (n += this.start_index, this.start_index = 0), this.load_record(this.start_index), this.content.y += n * this.OPT_HEIGHT
                }
            },
            update: function(e) {
                this.scrollveiw_load_recode(), null != this.freeIndex && this.shopTime.surplus > 0 && (this.shopTime.surplus -= e, this.list.children[this.freeIndex].getChildByName("freeBtn").getChildByName("time").getComponent(cc.Label).string = Flower.Currency.ToClockString(this.shopTime.surplus), this.shopTime.surplus <= 0 && (this.list.children[this.freeIndex].getChildByName("freeBtn").getChildByName("time").active = !1, this.list.children[this.freeIndex].getChildByName("freeBtn").getChildByName("freelabel").active = !0, this.list.children[this.freeIndex].getChildByName("freeBtn").getComponent(cc.Button).interactable = !0, this.freeIndex = null))
            },
            initList: function() {
                this.content = this.scroll_view.content, this.opt_item_set = [];
                for (var e = 0; e < 3 * this.PAGE_NUM; e++) {
                    var t = cc.instantiate(this.shopItem);
                    this.content.addChild(t), this.opt_item_set.push(t), t.shopId = e + 1
                }
                this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this)
            },
            initShopItem: function(e, t) {
                var n = e.getChildByName("freeBtn"),
                    r = e.getChildByName("moneyBtn"),
                    o = e.getChildByName("gemBtn"),
                    i = e.getChildByName("lock");
                t < 60 ? (i.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.headAtlas.getSpriteFrame(Flower.Currency.BotanyData[t + 1].prefab), i.getChildByName("lock").children[0].getComponent(cc.Label).string = t + 1) : (i.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.headAtlas.getSpriteFrame(Flower.Currency.BotanyData[t].prefab), i.getChildByName("lock").children[0].getComponent(cc.Label).string = t), e.getChildByName("head").children[0].getComponent(cc.Sprite).spriteFrame = this.headAtlas.getSpriteFrame(Flower.Currency.BotanyData[t].prefab), e.getChildByName("level").children[0].getComponent(cc.Label).string = Flower.Currency.BotanyData[t].level, e.getChildByName("skill").getComponent(cc.Label).string = this.getSkill(t), e.getChildByName("power").children[0].getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.BotanyData[t].power), e.getChildByName("speed").children[0].getComponent(cc.Label).string = Flower.Currency.BotanyData[t].cd, n.getComponent(cc.Button).enableAutoGrayEffect = !0, n.getComponent(cc.Button).clickEvents[0].target = this.node, n.getComponent(cc.Button).clickEvents[0].component = "ShopView", n.getComponent(cc.Button).clickEvents[0].handler = "freeCallback", n.getComponent(cc.Button).clickEvents[0].customEventData = t - 1, r.getComponent(cc.Button).clickEvents[0].target = this.node, r.getComponent(cc.Button).clickEvents[0].component = "ShopView", r.getComponent(cc.Button).clickEvents[0].handler = "coinCallback", r.getComponent(cc.Button).clickEvents[0].customEventData = t - 1, o.getComponent(cc.Button).clickEvents[0].target = this.node, o.getComponent(cc.Button).clickEvents[0].component = "ShopView", o.getComponent(cc.Button).clickEvents[0].handler = "gemCallback", o.getComponent(cc.Button).clickEvents[0].customEventData = t - 1
            },
            flashMsg: function() {
                for (var e = this.content.children, t = 0; t < e.length; t++) {
                    var n = e[t],
                        o = n.shopId,
                        i = n.getChildByName("freeBtn"),
                        l = n.getChildByName("moneyBtn"),
                        a = n.getChildByName("gemBtn"),
                        s = n.getChildByName("lock");
                    i.active = !1, l.active = !1, a.active = !1, s.active = !1, n.getChildByName("head").children[0].color = new cc.Color(255, 255, 255, 255), Flower.Currency.BotanyData[o].level == Flower.Currency.highLevel - 3 ? this.shopTime.times > 0 ? r.default.is4399() && "0" == r.default.AdRemain4399 ? (l.getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[o]), n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.yellowHead, l.active = !0, this.freeIndex = null) : (n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.blueHead, i.active = !0, this.shopTime.surplus > 0 ? (i.getComponent(cc.Button).interactable = !1, i.getChildByName("freelabel").active = !1, i.getChildByName("time").active = !0, i.getChildByName("time").getComponent(cc.Label).string = Flower.Currency.ToClockString(this.shopTime.surplus)) : (i.getComponent(cc.Button).interactable = !0, i.getChildByName("freelabel").active = !0, i.getChildByName("time").active = !1), this.freeIndex = t) : (this.freeIndex = null, l.active = !0, l.getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[o]), n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.yellowHead) : Flower.Currency.BotanyData[o].level == Flower.Currency.highLevel - 1 ? this.shopTime.gemTimes1 > 0 && Flower.Currency.BotanyData[o].gem > 0 ? (a.getChildByName("gem").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.BotanyData[o].gem), n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.violetHead, a.active = !0) : (l.active = !0, l.getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[o]), n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.yellowHead) : Flower.Currency.BotanyData[o].level == Flower.Currency.highLevel - 2 ? this.shopTime.gemTimes2 > 0 && Flower.Currency.BotanyData[o].gem > 0 ? (a.getChildByName("gem").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.BotanyData[o].gem), n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.violetHead, a.active = !0) : (l.active = !0, l.getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[o]), n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.yellowHead) : Flower.Currency.BotanyData[o].level >= Flower.Currency.highLevel ? 60 == Flower.Currency.highLevel && 60 == Flower.Currency.BotanyData[o].level ? (l.getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[o]), n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.yellowHead, l.active = !0) : (s.active = !0, n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.lockHead, Flower.Currency.BotanyData[o].level > Flower.Currency.highLevel && (n.getChildByName("head").children[0].color = new cc.Color(0, 0, 0, 255))) : (l.getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[o]), n.getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.yellowHead, l.active = !0)
                }
            },
            getSkill: function(e) {
                var t = "";
                switch (Flower.Currency.BotanyData[e].skill[0]) {
                    case Flower.Currency.SkillType.SlowDown:
                        t = "Nội tại: " + Flower.Currency.BotanyData[e].skill[1] + "% làm chậm 1s";
                        break;
                    case Flower.Currency.SkillType.Critical:
                        t = "Nội tại: " + Flower.Currency.BotanyData[e].skill[1] + "% tỉ lệ chí mạng";
                        break;
                    case Flower.Currency.SkillType.Frozen:
                        t = "Nội tại: " + Flower.Currency.BotanyData[e].skill[1] + "% đóng băng 1s"
                }
                return t
            },
            handleTime: function(e) {
                var t = new Date;
                if (e) {
                    var n = Flower.Currency.getData("leaveTime");
                    this.leaveTime = n ? Number(n) : t.getTime();
                    var r = (t - this.leaveTime) / 1e3;
                    this.shopTime.surplus -= r, this.shopTime.surplus = this.shopTime.surplus <= 0 ? 0 : this.shopTime.surplus
                } else Flower.Currency.setData("leaveTime", t.getTime()), Flower.Currency.setData("shoptime", JSON.stringify(this.shopTime)), Flower.Currency.setData("shoptime", JSON.stringify(this.shopTime))
            },
            freeCallback: function(e, t) {
                this.index5 = Number(t), null != this.getIndex() ? r.default.showVideo(this, this.free, this.freeFailed, "5") : Flower.Currency.ShowTip("\u6ca1\u6709\u4f4d\u7f6e\u5566\uff01")
            },
            free: function() {
                var e = this.index5,
                    t = this.getIndex();
                console.log("\u7b2c\u51e0\u5757\u571f\u5730\uff1a", t, e + 1), null == t ? console.log("ShopView success, tag = null!") : this.flowerControl.getComponent("FlowerManage").createFlowerPort(t, e + 1), this.shopTime.times--, this.shopTime.times <= 0 ? (this.shopBtn.getChildByName("tip").active = !1, this.freeIndex = null, this.list.children[e].getChildByName("freeBtn").active = !1, this.list.children[e].getChildByName("moneyBtn").active = !0, this.list.children[e].getChildByName("moneyBtn").getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[e + 1]), this.list.children[e].getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.yellowHead) : (this.shopTime.surplus = 300, this.list.children[e].getChildByName("freeBtn").getChildByName("freelabel").active = !1, this.list.children[e].getChildByName("freeBtn").getChildByName("time").active = !0, this.list.children[e].getChildByName("freeBtn").getComponent(cc.Button).interactable = !1, this.freeIndex = e), this.node.parent.getComponent("GameScene").questSc.updateQuestPro(4, 1, 0)
            },
            freeFailed: function() {
                console.log("ShopView freeFailed!")
            },
            coinCallback: function(e, t) {
                var n = Number(t);
                if (Flower.Currency.money < Flower.Currency.shopprice[n + 1]) Flower.Currency.ShowTip("\u91d1\u5e01\u4e0d\u8db3\uff01");
                else {
                    var r = this.getIndex();
                    if (null != r) {
                        this.flowerControl.getComponent("FlowerManage").createFlowerPort(r, n + 1), this.gameSc.operateMoney(!1, Flower.Currency.shopprice[n + 1]);
                        var o = .1 * Flower.Currency.shopprice[n + 1];
                        Flower.Currency.shopprice[n + 1] += o, Flower.Currency.shopprice[n + 1] = Math.round(Flower.Currency.shopprice[n + 1]), Flower.Currency.saveData("shopprice"), this.flowerControl.getComponent("FlowerManage").handleBuyShow(), this.list.children[n].getChildByName("moneyBtn").getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[n + 1])
                    } else Flower.Currency.ShowTip("\u6ca1\u6709\u4f4d\u7f6e\u5566\uff01")
                }
            },
            gemCallback: function(e, t) {
                var n = Number(t);
                if (Flower.Currency.diamond < Flower.Currency.BotanyData[n + 1].gem) Flower.Currency.ShowTip("\u5b9d\u77f3\u4e0d\u8db3\uff01");
                else {
                    var r = this.getIndex();
                    null != r ? (this.flowerControl.getComponent("FlowerManage").createFlowerPort(r, n + 1), this.gameSc.operateGem(!1, Flower.Currency.BotanyData[n + 1].gem), n + 1 == Flower.Currency.highLevel - 1 ? (this.shopTime.gemTimes2--, this.shopTime.gemTimes2 <= 0 && (this.list.children[n].getChildByName("gemBtn").active = !1, this.list.children[n].getChildByName("moneyBtn").active = !0, this.list.children[n].getChildByName("moneyBtn").getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[n + 1]), this.list.children[n].getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.yellowHead)) : (this.shopTime.gemTimes1--, this.shopTime.gemTimes1 <= 0 && (this.list.children[n].getChildByName("gemBtn").active = !1, this.list.children[n].getChildByName("moneyBtn").active = !0, this.list.children[n].getChildByName("moneyBtn").getChildByName("money").getComponent(cc.Label).string = Flower.Currency.ToGoodString(Flower.Currency.shopprice[n + 1]), this.list.children[n].getChildByName("head").getComponent(cc.Sprite).spriteFrame = this.yellowHead))) : Flower.Currency.ShowTip("\u6ca1\u6709\u4f4d\u7f6e\u5566\uff01")
                }
            },
            getIndex: function() {
                for (var e = null, t = 0; t < Flower.Currency.flower.length; t++)
                    if (0 == Flower.Currency.flower[t]) {
                        e = t;
                        break
                    } return e
            },
            closeCallback: function(e, t) {
                this.showView(!1)
            },
            showView: function(e) {
                r.default.hideBanner(), this.node.active = e, this.handleTime(e), e && (r.default.showBanner("5"), this.list.children.length > 0 && this.flashMsg())
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    SignInView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8c885TYrbNPV5jHzbzpjSar", "SignInView");
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e("./SdkMgr"));
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                commonFarm: [cc.SpriteFrame],
                specialFarm: [cc.SpriteFrame],
                singleBtn: cc.Button,
                doubleBtn: cc.Button,
                flowerManage: cc.Node
            },
            gameSc: null,
            signInObj: null,
            onLoad: function() {},
            start: function() {
                this.gameSc = this.node.parent.getComponent("GameScene"), r.default.is4399() && (this.doubleBtn.node.active = !1)
            },
            handleShow: function(e, t) {
                if (e) this.content.children[t].getComponent(cc.Sprite).spriteFrame = 6 == t ? this.specialFarm[0] : this.commonFarm[0], this.content.children[t].getChildByName("day").color = new cc.Color(67, 52, 31, 255), this.content.children[t].getChildByName("day").getComponent(cc.LabelOutline).color = new cc.Color(67, 52, 31, 255), this.content.children[t].getChildByName("num").color = new cc.Color(255, 255, 255, 255), this.content.children[t].getChildByName("num").getComponent(cc.LabelOutline).color = new cc.Color(0, 51, 42, 255), this.content.children[t].getChildByName("is").active = !0;
                else
                    for (var n = 0; n < this.content.childrenCount; n++) n + 1 == this.signInObj.several ? this.signInObj.isReceive ? (this.content.children[n].getComponent(cc.Sprite).spriteFrame = 6 == n ? this.specialFarm[0] : this.commonFarm[0], this.content.children[n].getChildByName("day").color = new cc.Color(67, 52, 31, 255), this.content.children[n].getChildByName("day").getComponent(cc.LabelOutline).color = new cc.Color(67, 52, 31, 255), this.content.children[n].getChildByName("num").color = new cc.Color(255, 255, 255, 255), this.content.children[n].getChildByName("num").getComponent(cc.LabelOutline).color = new cc.Color(0, 51, 42, 255), this.content.children[n].getChildByName("is").active = !0) : (this.content.children[n].getComponent(cc.Sprite).spriteFrame = 6 == n ? this.specialFarm[1] : this.commonFarm[1], this.content.children[n].getChildByName("day").color = new cc.Color(255, 255, 255, 255), this.content.children[n].getChildByName("day").getComponent(cc.LabelOutline).color = new cc.Color(255, 255, 255, 255), this.content.children[n].getChildByName("num").color = new cc.Color(255, 255, 255, 255), this.content.children[n].getChildByName("num").getComponent(cc.LabelOutline).color = new cc.Color(89, 37, 0, 255), this.content.children[n].getChildByName("is").active = !1) : (this.content.children[n].getComponent(cc.Sprite).spriteFrame = 6 == n ? this.specialFarm[0] : this.commonFarm[0], this.content.children[n].getChildByName("day").color = new cc.Color(67, 52, 31, 255), this.content.children[n].getChildByName("day").getComponent(cc.LabelOutline).color = new cc.Color(67, 52, 31, 255), this.content.children[n].getChildByName("num").color = new cc.Color(255, 255, 255, 255), this.content.children[n].getChildByName("num").getComponent(cc.LabelOutline).color = new cc.Color(0, 51, 42, 255), this.content.children[n].getChildByName("is").active = n + 1 < this.signInObj.several);
                this.singleBtn.enableAutoGrayEffect = !0, this.doubleBtn.enableAutoGrayEffect = !0, this.singleBtn.interactable = !this.signInObj.isReceive, this.doubleBtn.interactable = !this.signInObj.isReceive
            },
            getSignInObj: function() {
                var e = new Date,
                    t = Flower.Currency.getData("signinobj");
                this.signInObj = t ? JSON.parse(t) : {
                    year: e.getFullYear(),
                    month: e.getMonth() + 1,
                    day: e.getDate(),
                    isReceive: !1,
                    several: 1
                }, this.signInObj.year == e.getFullYear() && this.signInObj.month == e.getMonth() + 1 && this.signInObj.day == e.getDate() || this.signInObj.isReceive && (this.signInObj.several >= 7 ? this.signInObj.several = 1 : this.signInObj.several++, this.signInObj.isReceive = !1)
            },
            singleBtnCallback: function(e, t) {
                for (var n = new Date, r = Flower.Currency.signInData[this.signInObj.several], o = 0; o < r.type.length; o++) 1 == r.type[o] ? (Flower.Currency.ShowEffect(Flower.Currency.RewardType.Coin), this.gameSc.operateMoney(!0, r.reward[o])) : 2 == r.type[o] ? (Flower.Currency.ShowEffect(Flower.Currency.RewardType.Gem), this.gameSc.operateGem(!0, r.reward[o])) : 3 == r.type[o] && Flower.Currency.signInFlower.push(Flower.Currency.highLevel <= 3 ? 1 : Flower.Currency.highLevel - 2);
                this.signInObj.year = n.getFullYear(), this.signInObj.month = n.getMonth() + 1, this.signInObj.day = n.getDate(), this.signInObj.isReceive = !0, Flower.Currency.setData("signinobj", JSON.stringify(this.signInObj)), this.handleShow(!0, this.signInObj.several - 1), this.flowerManage.getComponent("FlowerManage").handleSignIn()
            },
            doubleBtnCallback: function(e, t) {
                r.default.showVideo(this, this.doubleAward, this.doubleAwardFailed, "13")
            },
            doubleAward: function() {
                for (var e = new Date, t = Flower.Currency.signInData[this.signInObj.several], n = 0; n < t.type.length; n++) 1 == t.type[n] ? (Flower.Currency.ShowEffect(Flower.Currency.RewardType.Coin), this.gameSc.operateMoney(!0, 2 * t.reward[n])) : 2 == t.type[n] ? (Flower.Currency.ShowEffect(Flower.Currency.RewardType.Gem), this.gameSc.operateGem(!0, 2 * t.reward[n])) : 3 == t.type[n] && (Flower.Currency.signInFlower.push(Flower.Currency.highLevel <= 3 ? 1 : Flower.Currency.highLevel - 2), Flower.Currency.signInFlower.push(Flower.Currency.highLevel <= 3 ? 1 : Flower.Currency.highLevel - 2));
                this.signInObj.year = e.getFullYear(), this.signInObj.month = e.getMonth() + 1, this.signInObj.day = e.getDate(), this.signInObj.isReceive = !0, Flower.Currency.setData("signinobj", JSON.stringify(this.signInObj)), this.handleShow(!0, this.signInObj.several - 1), this.flowerManage.getComponent("FlowerManage").handleSignIn()
            },
            doubleAwardFailed: function() {},
            closeCallback: function(e, t) {
                this.showView(!1)
            },
            showView: function(e) {
                r.default.hideBanner(), this.node.active = e, e && (this.getSignInObj(), this.handleShow(), r.default.showBanner("2"))
            }
        }), cc._RF.pop()
    }, {
        "./SdkMgr": "SdkMgr"
    }],
    bullet: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ea9eeJbYplGhIf2btvtX67F", "bullet"), cc.Class({
            extends: cc.Component,
            properties: {
                bulletAtlas: cc.SpriteAtlas
            },
            monsterParent: null,
            monster: null,
            name: null,
            speed: null,
            hurt: null,
            level: null,
            isCritical: null,
            isSlowdown: null,
            isFrozen: null,
            initPos: null,
            update: function(e) {
                if (null != this.monsterParent.getChildByName(this.node.name))
                    if (this.monster.getComponent("MonsterManage").isDie) this.recovery();
                    else {
                        var t = {
                                x: this.node.x,
                                y: this.node.y
                            },
                            n = {
                                x: this.monster.x,
                                y: this.monster.y + this.monster.getComponent(cc.BoxCollider).offset.y
                            },
                            r = Flower.Currency.getDistance(t, n),
                            o = r / this.speed,
                            i = Math.abs(n.x - t.x) / o,
                            l = Math.abs(n.y - t.y) / o;
                        n.x > this.node.x ? this.node.x += i * e : this.node.x -= i * e, n.y > this.node.y ? this.node.y += l * e : this.node.y -= l * e;
                        var a = Math.asin(s) * (180 / Math.PI);
                        if (n.x <= t.x && n.y >= t.y) {
                            var s = Math.abs(n.y - t.y) / r;
                            a = Math.asin(s) * (180 / Math.PI), a *= -1
                        } else if (n.x <= t.x && n.y <= t.y) {
                            s = Math.abs(n.y - t.y) / r;
                            a = Math.asin(s) * (180 / Math.PI), a *= 1
                        } else if (n.x >= t.x && n.y <= t.y) {
                            s = Math.abs(n.x - t.x) / r;
                            a = Math.asin(s) * (180 / Math.PI), a *= 1, a += 90
                        } else if (n.x >= t.x && n.y >= t.y) {
                            s = Math.abs(n.y - t.y) / r;
                            a = Math.asin(s) * (180 / Math.PI), a *= 1, a += 180
                        }
                        this.node.angle = a, Flower.Currency.getDistance({
                            x: this.node.x,
                            y: this.node.y
                        }, this.initPos) >= 95 && !this.node.getChildByName("wei").active && (this.node.getChildByName("wei").active = !0)
                    }
                else this.recovery()
            },
            init: function(e, t, n) {
                var r = Flower.Currency.BotanyData[e];
                this.monster = t, this.node.name = t.name, this.speed = 500, this.hurt = r.power, this.isCritical = !1, this.isSlowdown = !1, this.isFrozen = !1, this.level = e, this.node.getChildByName("picture").getComponent(cc.Sprite).spriteFrame = this.bulletAtlas.getSpriteFrame(r.prefab + "_ZiDan");
                for (var o = "", i = 1; i < r.prefab.length; i++) o += r.prefab[i];
                var l = Number(o),
                    a = Flower.Currency.color[l - 1];
                this.node.getChildByName("wei").color = new cc.Color(a[0], a[1], a[2], a[3]), this.managerKnifeCollider(), this.node.getChildByName("wei").active = !1, this.node.x = n.x, this.node.y = n.y, this.initPos = {
                    x: n.x,
                    y: n.y
                }, this.monsterParent = t.parent, this.handleSkill()
            },
            handleSkill: function() {
                var e = Flower.Currency.BotanyData[this.level],
                    t = e.skill[0],
                    n = e.skill[1],
                    r = Flower.Currency.getRandomNumber(1, 100);
                t == Flower.Currency.SkillType.SlowDown ? r <= n && (this.isSlowdown = !0) : t == Flower.Currency.SkillType.Critical ? r <= n && (this.isCritical = !0) : t == Flower.Currency.SkillType.Frozen && r <= n && (this.isFrozen = !0)
            },
            managerKnifeCollider: function() {
                var e = parseInt(this.node.width),
                    t = parseInt(this.node.height);
                this.node.getComponent(cc.BoxCollider).size.width = e, this.node.getComponent(cc.BoxCollider).size.height = t
            },
            recovery: function() {
                Flower.Currency.BulletPool.put(this.node)
            }
        }), cc._RF.pop()
    }, {}],
    flower: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "01499tQUy5GOrnokh0PZyWW", "flower"), cc.Class({
            extends: cc.Component,
            properties: {
                rootAtlas: cc.SpriteAtlas,
                aniNode: cc.Node
            },
            parentSc: null,
            level: null,
            animationDisplay: null,
            actionIndex: null,
            bulletPos: null,
            onLoad: function() {},
            init: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                this.actionIndex = 1;
                var o = this;
                this.level = e;
                var i = Flower.Currency.BotanyData[e],
                    l = "animation/flower/" + i.prefab + "_Ani";
                this.animationDisplay = this.aniNode.getComponent(dragonBones.ArmatureDisplay), cc.loader.loadResDir(l, function(e, t) {
                    e || t.length <= 0 || (t.forEach(function(e) {
                        e instanceof dragonBones.DragonBonesAsset && (o.animationDisplay.dragonAsset = e), e instanceof dragonBones.DragonBonesAtlasAsset && (o.animationDisplay.dragonAtlasAsset = e)
                    }), o.animationDisplay.playAnimation("DaiJi", -1), o.aniNode.active = !1, o.aniNode.active = !0)
                }), this.node.getChildByName("root").getComponent(cc.Sprite).spriteFrame = this.rootAtlas.getSpriteFrame(i.prefab), null != t && (this.parentSc = t.getComponent("FlowerManage")), this.node.scaleX = n, this.node.y = 40, r ? (this.node.getChildByName("rage").active = !0, this.node.getChildByName("rage").getComponent(cc.Animation).play("huo")) : (this.node.getChildByName("rage").active = !1, this.node.getChildByName("rage").getComponent(cc.Animation).stop("huo"))
            },
            playHitAnimation: function() {
                var e = this,
                    t = "",
                    n = Flower.Currency.BotanyData[this.level];
                20 == this.level || 39 == this.level || 59 == this.level || 60 == this.level ? (t = "GongJi" + this.actionIndex, 1 == this.actionIndex ? this.bulletPos = {
                    x: n.shoot_pos[0],
                    y: n.shoot_pos[1]
                } : this.bulletPos = {
                    x: n.shoot_pos[2],
                    y: n.shoot_pos[3]
                }, this.actionIndex++, this.actionIndex > 2 && (this.actionIndex = 1)) : 35 == this.level ? (t = "GongJi" + this.actionIndex, 1 == this.actionIndex ? this.bulletPos = {
                    x: n.shoot_pos[0],
                    y: n.shoot_pos[1]
                } : 2 == this.actionIndex ? this.bulletPos = {
                    x: n.shoot_pos[2],
                    y: n.shoot_pos[3]
                } : this.bulletPos = {
                    x: n.shoot_pos[4],
                    y: n.shoot_pos[5]
                }, this.actionIndex++, this.actionIndex > 3 && (this.actionIndex = 1)) : (t = "GongJi", this.bulletPos = {
                    x: n.shoot_pos[0],
                    y: n.shoot_pos[1]
                }), this.animationDisplay.playAnimation(t, 1), this.animationDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function() {
                    e.animationDisplay.playAnimation("DaiJi", -1)
                })
            }
        }), cc._RF.pop()
    }, {}],
    guide: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0ca4aT110xKsrcomVmbdBYJ", "guide"), cc.Class({
            extends: cc.Component,
            properties: {
                flowerManage: cc.Node,
                first: cc.Node,
                second: cc.Node
            },
            stepNum: null,
            movePos1: null,
            movePos2: null,
            onLoad: function() {},
            start: function() {
                this.stepNum = 1;
                var e = cc.v2(this.flowerManage.getComponent("FlowerManage").flowerNode[0].x, this.flowerManage.getComponent("FlowerManage").flowerNode[0].y),
                    t = cc.v2(this.flowerManage.getComponent("FlowerManage").flowerNode[1].x, this.flowerManage.getComponent("FlowerManage").flowerNode[1].y);
                this.movePos1 = this.node.convertToNodeSpaceAR(this.flowerManage.getComponent("FlowerManage").list.convertToWorldSpaceAR(e)), this.movePos2 = this.node.convertToNodeSpaceAR(this.flowerManage.getComponent("FlowerManage").list.convertToWorldSpaceAR(t))
            },
            guideStep: function(e) {
                switch (this.node.active = !0, e) {
                    case 1:
                        this.first.active = !0, this.second.active = !1, this.first.getChildByName("hande").runAction(cc.repeatForever(cc.sequence(cc.moveBy(.3, cc.v2(0, -15)), cc.moveBy(.3, cc.v2(0, 15)))));
                        break;
                    case 2:
                        this.first.active = !1, this.second.active = !0, this.second.getChildByName("hande").x = this.movePos1.x, this.second.getChildByName("hande").y = this.movePos1.y + 20, this.second.getChildByName("hande").runAction(cc.repeatForever(cc.sequence(cc.moveTo(1, cc.v2(this.movePos2.x + 20, this.movePos2.y + 20)), cc.delayTime(.3), cc.callFunc(function() {
                            this.second.getChildByName("hande").x = this.movePos1.x, this.second.getChildByName("hande").y = this.movePos1.y + 20
                        }.bind(this)))))
                }
            },
            buyFlowerCallback: function() {
                this.first.getChildByName("hande").stopAllActions(), this.flowerManage.getComponent("FlowerManage").buyFlowerCallback(), this.stepNum = 2, this.guideStep(this.stepNum), this.node.parent.getComponent("GameControl").startGame()
            },
            overGuide: function() {
                this.second.getChildByName("hande").stopAllActions(), this.node.active = !1, Flower.Currency.isGuide = !1, Flower.Currency.setData("guide", Flower.Currency.isGuide)
            }
        }), cc._RF.pop()
    }, {}],
    tip: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d7e92fxNThNtrAvDANckpoF", "tip"), cc.Class({
            extends: cc.Component,
            properties: {
                text: cc.Label
            },
            showTip: function(e) {
                this.text.string = e, this.node.stopAllActions(), this.node.x = 0, this.node.y = 120;
                var t = {
                    x: this.node.x,
                    y: this.node.y
                };
                this.node.opacity = 255, this.node.active = !0, this.node.runAction(cc.sequence(cc.delayTime(1.5), cc.moveBy(.3, cc.v2(0, 50)), cc.fadeOut(.1), cc.callFunc(function() {
                    this.node.active = !1, this.node.x = t.x, this.node.y = t.y
                }.bind(this))))
            }
        }), cc._RF.pop()
    }, {}],
    wxAPI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9a6edrxmutAm6T44E9sG6e9", "wxAPI"), t.exports.WxAPI = {
            func: null,
            target: null,
            init: function() {
                wx.onShow(function(e) {
                    this.showStage()
                }.bind(this)), wx.onHide(function(e) {
                    this.hideStage()
                }.bind(this))
            },
            showStage: function() {
                console.log("\u6e38\u620f\u5524\u9192~~~~~~");
                var e = (new Date).getTime(),
                    t = parseInt(e / 1e3),
                    n = cc.sys.localStorage.getItem("offlinetime");
                n = n ? parseInt(n) : t, Flower.Currency.offtimes = t - n, Flower.Currency.shareTimes = t - Flower.Currency.shareTimes;
                var r = Flower.Currency.shareTimes >= 1;
                Flower.Currency.sharetarget && Flower.Currency.sharefunc && Flower.Currency.sharefunc.call(Flower.Currency.sharetarget, r), Flower.Currency.recoverInfo(), Flower.Currency.recoverDialInfo()
            },
            hideStage: function() {
                console.log("\u5207\u65ad\u6e38\u620f~~~~~~");
                var e = parseInt((new Date).getTime() / 1e3);
                cc.sys.localStorage.setItem("offlinetime", e), Flower.Currency.shareTimes = e, Flower.Currency.setData("fireInfo", Flower.Currency.fireInfo), Flower.Currency.setData("dialInfo", JSON.stringify(Flower.Currency.dialInfo))
            },
            wxSetUserLevel: function(e, t) {
                var n = t + "",
                    r = [];
                r.push({
                    key: e,
                    value: n
                }), wx.setUserCloudStorage({
                    KVDataList: r,
                    success: function() {
                        console.log("setUserCloudStorage")
                    }
                })
            }
        }, cc._RF.pop()
    }, {}]
}, {}, ["AnimCompleted", "Currency", "DialView", "Effect", "FireView", "FlowerManage", "GameControl", "GameScene", "LoadingScene", "MonsterManage", "NewFlower", "OfflineView", "PlaneView", "QuestView", "ResultView", "Sdk4399", "SdkMgr", "SdkQtt", "SdkVivo", "SetView", "ShopView", "SignInView", "bullet", "flower", "guide", "tip", "wxAPI"]);