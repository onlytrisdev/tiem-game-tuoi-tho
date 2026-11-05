var __extends = this && this.__extends || function() {
    var extendStatics = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(d, b) {
        d.__proto__ = b
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p])
    };
    return function(d, b) {
        function __() {
            this.constructor = d
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __)
    }
}();
! function() {
    return function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    return o(e[i][1][r] || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
}()({
    1: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var AddMiniProgramDialog_1 = require("./game/dialog/AddMiniProgramDialog"),
            ButtonClick_1 = require("./game/script/ButtonClick"),
            AddProgramAlertDialog_1 = require("./game/dialog/AddProgramAlertDialog"),
            AwardDialog_1 = require("./game/dialog/AwardDialog"),
            DailyAwardDialog_1 = require("./game/dialog/DailyAwardDialog"),
            FlySkillBoxAlertDialog_1 = require("./game/dialog/FlySkillBoxAlertDialog"),
            FreeGoldDialog_1 = require("./game/dialog/FreeGoldDialog"),
            GuankaFailDialog_1 = require("./game/dialog/GuankaFailDialog"),
            GuankaWinDialog_1 = require("./game/dialog/GuankaWinDialog"),
            InviteNewPlayerDialog_1 = require("./game/dialog/InviteNewPlayerDialog"),
            LuckyHechengDialog_1 = require("./game/dialog/LuckyHechengDialog"),
            LuckyPlantBoxDialog_1 = require("./game/dialog/LuckyPlantBoxDialog"),
            MonsterListDialog_1 = require("./game/dialog/MonsterListDialog"),
            PlantBianyiDialog_1 = require("./game/dialog/PlantBianyiDialog"),
            PlayTipsDialog_1 = require("./game/dialog/PlayTipsDialog"),
            RankDialog_1 = require("./game/dialog/RankDialog"),
            ShareFailDialog_1 = require("./game/dialog/ShareFailDialog"),
            ShopDialog_1 = require("./game/dialog/ShopDialog"),
            SubscribeSkillDialog_1 = require("./game/dialog/SubscribeSkillDialog"),
            TianFuDialog_1 = require("./game/dialog/TianFuDialog"),
            TianFuAlertDialog_1 = require("./game/dialog/TianFuAlertDialog"),
            UnlockMonsterDialog_1 = require("./game/dialog/UnlockMonsterDialog"),
            UnlockNewModuleDialog_1 = require("./game/dialog/UnlockNewModuleDialog"),
            UnlockPlantDialog_1 = require("./game/dialog/UnlockPlantDialog"),
            UnlockZhaLanDialog_1 = require("./game/dialog/UnlockZhaLanDialog"),
            ZhaLanSelectDialog_1 = require("./game/dialog/ZhaLanSelectDialog"),
            ZhuanPanDialog_1 = require("./game/dialog/ZhuanPanDialog"),
            LoadingScene_1 = require("./game/scene/LoadingScene"),
            StartScene_1 = require("./game/scene/StartScene"),
            GameControl_1 = require("./game/script/GameControl"),
            MonsterView_1 = require("./game/view/MonsterView"),
            GroundView_1 = require("./game/view/GroundView"),
            PlantView_1 = require("./game/view/PlantView"),
            EffectView_1 = require("./game/view/EffectView"),
            NewGunakaView_1 = require("./game/view/NewGunakaView"),
            GoldMonsterTipView_1 = require("./game/view/GoldMonsterTipView"),
            BossJingBaoView_1 = require("./game/view/BossJingBaoView"),
            AwardView_1 = require("./game/view/AwardView"),
            LeftView_1 = require("./game/view/LeftView"),
            SkillButton_1 = require("./game/script/SkillButton"),
            GuideView_1 = require("./game/view/GuideView"),
            PlantBoxView_1 = require("./game/view/PlantBoxView"),
            MySprite_1 = require("./game/script/monster/MySprite"),
            GameConfig = function() {
                function GameConfig() {}
                return GameConfig.init = function() {
                    var reg = Laya.ClassUtils.regClass;
                    reg("game/dialog/AddMiniProgramDialog.ts", AddMiniProgramDialog_1.default), reg("game/script/ButtonClick.ts", ButtonClick_1.default), reg("game/dialog/AddProgramAlertDialog.ts", AddProgramAlertDialog_1.default), reg("game/dialog/AwardDialog.ts", AwardDialog_1.default), reg("game/dialog/DailyAwardDialog.ts", DailyAwardDialog_1.default), reg("game/dialog/FlySkillBoxAlertDialog.ts", FlySkillBoxAlertDialog_1.default), reg("game/dialog/FreeGoldDialog.ts", FreeGoldDialog_1.default), reg("game/dialog/GuankaFailDialog.ts", GuankaFailDialog_1.default), reg("game/dialog/GuankaWinDialog.ts", GuankaWinDialog_1.default), reg("game/dialog/InviteNewPlayerDialog.ts", InviteNewPlayerDialog_1.default), reg("game/dialog/LuckyHechengDialog.ts", LuckyHechengDialog_1.default), reg("game/dialog/LuckyPlantBoxDialog.ts", LuckyPlantBoxDialog_1.default), reg("game/dialog/MonsterListDialog.ts", MonsterListDialog_1.default), reg("game/dialog/PlantBianyiDialog.ts", PlantBianyiDialog_1.default), reg("game/dialog/PlayTipsDialog.ts", PlayTipsDialog_1.default), reg("game/dialog/RankDialog.ts", RankDialog_1.default), reg("game/dialog/ShareFailDialog.ts", ShareFailDialog_1.default), reg("game/dialog/ShopDialog.ts", ShopDialog_1.default), reg("game/dialog/SubscribeSkillDialog.ts", SubscribeSkillDialog_1.default), reg("game/dialog/TianFuDialog.ts", TianFuDialog_1.default), reg("game/dialog/TianFuAlertDialog.ts", TianFuAlertDialog_1.default), reg("game/dialog/UnlockMonsterDialog.ts", UnlockMonsterDialog_1.default), reg("game/dialog/UnlockNewModuleDialog.ts", UnlockNewModuleDialog_1.default), reg("game/dialog/UnlockPlantDialog.ts", UnlockPlantDialog_1.default), reg("game/dialog/UnlockZhaLanDialog.ts", UnlockZhaLanDialog_1.default), reg("game/dialog/ZhaLanSelectDialog.ts", ZhaLanSelectDialog_1.default), reg("game/dialog/ZhuanPanDialog.ts", ZhuanPanDialog_1.default), reg("game/scene/LoadingScene.ts", LoadingScene_1.default), reg("game/scene/StartScene.ts", StartScene_1.default), reg("game/script/GameControl.ts", GameControl_1.default), reg("game/view/MonsterView.ts", MonsterView_1.default), reg("game/view/GroundView.ts", GroundView_1.default), reg("game/view/PlantView.ts", PlantView_1.default), reg("game/view/EffectView.ts", EffectView_1.default), reg("game/view/NewGunakaView.ts", NewGunakaView_1.default), reg("game/view/GoldMonsterTipView.ts", GoldMonsterTipView_1.default), reg("game/view/BossJingBaoView.ts", BossJingBaoView_1.default), reg("game/view/AwardView.ts", AwardView_1.default), reg("game/view/LeftView.ts", LeftView_1.default), reg("game/script/SkillButton.ts", SkillButton_1.default), reg("game/view/GuideView.ts", GuideView_1.default), reg("game/view/PlantBoxView.ts", PlantBoxView_1.default), reg("game/script/monster/MySprite.ts", MySprite_1.default)
                }, GameConfig.width = 640, GameConfig.height = 1136, GameConfig.scaleMode = "showall", GameConfig.screenMode = "none", GameConfig.alignV = "top", GameConfig.alignH = "middle", GameConfig.startScene = "LoadingScene.scene", GameConfig.sceneRoot = "", GameConfig.debug = !1, GameConfig.stat = !1, GameConfig.physicsDebug = !1, GameConfig.exportSceneToJson = !0, GameConfig
            }();
        exports.default = GameConfig, GameConfig.init()
    }, {
        "./game/dialog/AddMiniProgramDialog": 25,
        "./game/dialog/AddProgramAlertDialog": 26,
        "./game/dialog/AwardDialog": 27,
        "./game/dialog/DailyAwardDialog": 28,
        "./game/dialog/FlySkillBoxAlertDialog": 29,
        "./game/dialog/FreeGoldDialog": 30,
        "./game/dialog/GuankaFailDialog": 31,
        "./game/dialog/GuankaWinDialog": 32,
        "./game/dialog/InviteNewPlayerDialog": 33,
        "./game/dialog/LuckyHechengDialog": 34,
        "./game/dialog/LuckyPlantBoxDialog": 35,
        "./game/dialog/MonsterListDialog": 36,
        "./game/dialog/PlantBianyiDialog": 37,
        "./game/dialog/PlayTipsDialog": 38,
        "./game/dialog/RankDialog": 39,
        "./game/dialog/ShareFailDialog": 40,
        "./game/dialog/ShopDialog": 41,
        "./game/dialog/SubscribeSkillDialog": 42,
        "./game/dialog/TianFuAlertDialog": 43,
        "./game/dialog/TianFuDialog": 44,
        "./game/dialog/UnlockMonsterDialog": 45,
        "./game/dialog/UnlockNewModuleDialog": 46,
        "./game/dialog/UnlockPlantDialog": 47,
        "./game/dialog/UnlockZhaLanDialog": 48,
        "./game/dialog/ZhaLanSelectDialog": 49,
        "./game/dialog/ZhuanPanDialog": 50,
        "./game/scene/LoadingScene": 53,
        "./game/scene/StartScene": 54,
        "./game/script/ButtonClick": 55,
        "./game/script/GameControl": 56,
        "./game/script/SkillButton": 57,
        "./game/script/monster/MySprite": 86,
        "./game/view/AwardView": 95,
        "./game/view/BossJingBaoView": 96,
        "./game/view/EffectView": 97,
        "./game/view/GoldMonsterTipView": 98,
        "./game/view/GroundView": 99,
        "./game/view/GuideView": 100,
        "./game/view/LeftView": 101,
        "./game/view/MonsterView": 102,
        "./game/view/NewGunakaView": 103,
        "./game/view/PlantBoxView": 104,
        "./game/view/PlantView": 105
    }],
    2: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var GameConfig_1 = require("./GameConfig"),
            GameData_1 = require("./game/data/GameData"),
            Confings_1 = require("./game/data/Confings"),
            LayerRoot_1 = require("./game/scene/LayerRoot"),
            ResConfig_1 = require("./game/core/ResConfig"),
            AudioManager_1 = require("./wxSDK/AudioManager"),
            MessageCenter_1 = require("./game/core/MessageCenter"),
            ShareManager_1 = require("./wxSDK/ShareManager"),
            WxSDK_1 = require("./wxSDK/WxSDK"),
            LoadingScene_1 = require("./game/scene/LoadingScene");
        new(function() {
            function Main() {
                window.Laya3D ? Laya3D.init(GameConfig_1.default.width, GameConfig_1.default.height) : Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = GameConfig_1.default.scaleMode, Laya.stage.screenMode = GameConfig_1.default.screenMode, Laya.stage.alignH = GameConfig_1.default.alignH, Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson, (GameConfig_1.default.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), GameConfig_1.default.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), GameConfig_1.default.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.MouseManager.multiTouchEnabled = !1, this.onVersionLoaded(), console.log("资源版本：" + ResConfig_1.ResConfig.Version)
            }
            return Main.prototype.onVersionLoaded = function() {
                var _this = this;
                LayerRoot_1.default.Instance.openScene(GameConfig_1.default.startScene, !1, null, Laya.Handler.create(this, function() {
                    MessageCenter_1.MessageCenter.Instance.dispatch("loading_msg", "当前加载主UI资源"), Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(_this, _this.onConfigLoaded))
                }))
            }, Main.prototype.onConfigLoaded = function() {
                this.downloadComplete(!0)
            }, Main.prototype.downloadComplete = function(success) {
                var _this = this;
                success && (AudioManager_1.AudioManager.Instance.init(), ShareManager_1.ShareManager.Instance.init(), LoadingScene_1.default.Instance.showTips("Đang tải (1/3)"), GameData_1.default.Instance.login(Laya.Handler.create(this, function() {
                    Confings_1.default.Instance.init(Laya.Handler.create(_this, function() {
                        GameData_1.default.Instance.initLastUnlock(), GameData_1.default.Instance.initZhaLan(), GameData_1.default.Instance.initTuJian(), LoadingScene_1.default.Instance.showTips("Đang tải (3/3)"), LayerRoot_1.default.Instance.openScene("scene/StartScene.scene", !1, null, Laya.Handler.create(_this, function() {
                            MessageCenter_1.MessageCenter.Instance.dispatch("loading_complete"), WxSDK_1.default.Instance.init(), GameData_1.default.Instance.createToday && DDSDK.logEvent("lodingsuccess", {})
                        }), Laya.Handler.create(_this, function(progress) {
                            LoadingScene_1.default.Instance.setProgress(progress)
                        }, null, !1))
                    }))
                })))
            }, Main.prototype.showSDKUI = function() {}, Main.prototype.onLoadedSDK = function() {
                console.log("onLoadedSDK"), DDSDK.setAccount(GameData_1.default.Instance.openid), GameData_1.default.Instance.createToday && DDSDK.logEvent("passbaipin", {}), DDSDK.setRewardCB(function(num, type) {
                    console.log("give reward:", num, "type:", type)
                }), DDSDK.getIPInfo(function(data) {
                    if (0 == data.error_code) {
                        var filter = Confings_1.default.Instance.getFilterIp(),
                            city = data.result.city,
                            idx = filter.indexOf(city);
                        if (console.log("[当前地区]:", city), -1 !== idx && Confings_1.default.Instance.shield) {
                            var img_1 = new Laya.Image;
                            img_1.loadImage(ResConfig_1.ResConfig.getCDNResPrefix() + "/weihu.png", Laya.Handler.create(this, function() {
                                var rate = Laya.stage.displayWidth / 750;
                                img_1.scaleX = img_1.scaleY = rate, img_1.y = (Laya.stage.displayHeight - 1624 * rate) / 2
                            })), Laya.stage.addChild(img_1)
                        } else Confings_1.default.Instance.isFilterIp = !1
                    }
                }), DDSDK.OnShareAppMessage(function() {
                    var title = "",
                        imageUrl = "",
                        cfg = Confings_1.default.Instance.getShareCfgByGroup(1);
                    return cfg && (title = cfg.title, imageUrl = cfg.url), {
                        title: title,
                        imageUrl: imageUrl
                    }
                })
            }, Main.prototype.initSDK = function() {
                DDSDK.init(this.onLoadedSDK.bind(this))
            }, Main
        }())
    }, {
        "./GameConfig": 1,
        "./game/core/MessageCenter": 10,
        "./game/core/ResConfig": 11,
        "./game/data/Confings": 23,
        "./game/data/GameData": 24,
        "./game/scene/LayerRoot": 52,
        "./game/scene/LoadingScene": 53,
        "./wxSDK/AudioManager": 108,
        "./wxSDK/ShareManager": 110,
        "./wxSDK/WxSDK": 113
    }],
    3: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var PlantSlotVo = function() {
            return function() {}
        }();
        exports.default = PlantSlotVo
    }, {}],
    4: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ColliderUtil = function() {
            function ColliderUtil() {}
            return ColliderUtil.rectHittest = function(a, b) {
                return a.intersects(b)
            }, ColliderUtil.rectHitTestPoint = function(rect, p) {
                return rect.contains(p.x, p.y)
            }, ColliderUtil
        }();
        exports.ColliderUtil = ColliderUtil
    }, {}],
    5: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ColorFilterTool = function() {
            function ColorFilterTool() {}
            return Object.defineProperty(ColorFilterTool, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new ColorFilterTool), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), ColorFilterTool.prototype.blue = function() {
                return [new Laya.ColorFilter([.8, 0, 0, 0, 0, 0, .8, 0, 0, 0, 0, 0, 1, 0, 200, 0, 0, 0, 1, 0])]
            }, ColorFilterTool.prototype.gray = function() {
                return [new Laya.ColorFilter([.36, .36, .36, 0, 0, .36, .36, .36, 0, 0, .36, .36, .36, 0, 0, 0, 0, 0, 1, 0])]
            }, ColorFilterTool.prototype.white = function() {
                return [new Laya.ColorFilter([0, 0, 0, 0, 10, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, .5, 0])]
            }, ColorFilterTool.prototype.flash = function() {
                return [new Laya.ColorFilter([1, 0, 0, 0, 50, 0, 1, 0, 0, 50, 0, 0, 1, 0, 50, 0, 0, 0, 1, 0])]
            }, ColorFilterTool
        }();
        exports.default = ColorFilterTool
    }, {}],
    6: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            function(BulletType) {
                BulletType[BulletType.Bullet0 = 0] = "Bullet0", BulletType[BulletType.Bullet1 = 1] = "Bullet1", BulletType[BulletType.Bullet2 = 2] = "Bullet2", BulletType[BulletType.Bullet3 = 3] = "Bullet3", BulletType[BulletType.Bullet4 = 4] = "Bullet4", BulletType[BulletType.Bullet5 = 5] = "Bullet5"
            }(exports.BulletType || (exports.BulletType = {})),
            function(Direction) {
                Direction[Direction.Left = 0] = "Left", Direction[Direction.Right = 1] = "Right", Direction[Direction.Up = 2] = "Up", Direction[Direction.Down = 3] = "Down"
            }(exports.Direction || (exports.Direction = {})),
            function(MonsterAniName) {
                MonsterAniName.Walk = "walk", MonsterAniName.Hit = "hit", MonsterAniName.Dead = "dead", MonsterAniName.Attack_1 = "atk"
            }(exports.MonsterAniName || (exports.MonsterAniName = {})),
            function(PlantType) {
                PlantType[PlantType.Single = 1] = "Single", PlantType[PlantType.Buff = 2] = "Buff", PlantType[PlantType.Range = 3] = "Range"
            }(exports.PlantType || (exports.PlantType = {})),
            function(MonsterType) {
                MonsterType[MonsterType.Monster1 = 1] = "Monster1", MonsterType[MonsterType.Monster2 = 2] = "Monster2", MonsterType[MonsterType.Monster3 = 3] = "Monster3", MonsterType[MonsterType.Monster4 = 4] = "Monster4", MonsterType[MonsterType.Monster5 = 5] = "Monster5", MonsterType[MonsterType.Monster6 = 6] = "Monster6", MonsterType[MonsterType.Monster7 = 7] = "Monster7", MonsterType[MonsterType.Monster8 = 8] = "Monster8", MonsterType[MonsterType.Monster9 = 9] = "Monster9", MonsterType[MonsterType.Monster10 = 10] = "Monster10", MonsterType[MonsterType.Monster11 = 11] = "Monster11", MonsterType[MonsterType.Monster12 = 12] = "Monster12"
            }(exports.MonsterType || (exports.MonsterType = {})),
            function(BuffType) {
                BuffType[BuffType.AttackSpeed = 1] = "AttackSpeed", BuffType[BuffType.MoveSpeed = 2] = "MoveSpeed", BuffType[BuffType.GoldTimes3 = 3] = "GoldTimes3", BuffType[BuffType.Ice = 4] = "Ice", BuffType[BuffType.HitBack = 5] = "HitBack", BuffType[BuffType.Defense = 6] = "Defense", BuffType[BuffType.Kill = 7] = "Kill", BuffType[BuffType.Poisoning = 8] = "Poisoning", BuffType[BuffType.YunShi = 9] = "YunShi"
            }(exports.BuffType || (exports.BuffType = {})),
            function(TianFuType) {
                TianFuType[TianFuType.type1 = 1] = "type1", TianFuType[TianFuType.type2 = 2] = "type2", TianFuType[TianFuType.type3 = 3] = "type3"
            }(exports.TianFuType || (exports.TianFuType = {})),
            function(SkillType) {
                SkillType[SkillType.Ice = 0] = "Ice", SkillType[SkillType.YunShi = 1] = "YunShi", SkillType[SkillType.AtkSpeedUp = 2] = "AtkSpeedUp"
            }(exports.SkillType || (exports.SkillType = {}))
    }, {}],
    7: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ResConfig_1 = require("./ResConfig"),
            GameConfig_1 = require("../../GameConfig"),
            TipMsg_1 = require("../view/TipMsg"),
            StartScene_1 = require("../scene/StartScene"),
            MathEx_1 = require("./MathEx"),
            Confings_1 = require("../data/Confings");
        exports.CoreFunction = {
            getSkeleton: function(aniName, con, scaleX, scaleY, complete) {
                void 0 === scaleX && (scaleX = 1);
                void 0 === scaleY && (scaleY = 1);
                var skeleton = Laya.Pool.getItemByClass("skeleton", Laya.Skeleton);
                skeleton.pos(0, 0), con.addChild(skeleton);
                var url = ResConfig_1.ResConfig.getDragonBonesUrl(aniName);
                return skeleton.load(url, complete), skeleton.scale(scaleX, scaleY), skeleton
            },
            releaseSkeleton: function(skeleton) {
                skeleton && (skeleton.removeSelf(), Laya.Pool.recover("skeleton", skeleton))
            },
            isIphoneX: function() {
                return !1
            },
            isIOS: function() {
                var info = wx.getSystemInfoSync();
                if (info && -1 != info.system.indexOf("iOS")) return !0
            },
            tipMsg: function(msg, color) {
                void 0 === color && (color = "#000000");
                msgList.push({
                    msg: msg,
                    color: color
                }), isShowMsg || (timer || (timer = new Laya.Timer), Laya.timer.once(100, this, checkTipMsg), timer.loop(500, this, checkTipMsg), isShowMsg = !0)
            },
            showFlyGold: function(x, y, min, max, offsetX, offsetY) {
                void 0 === offsetX && (offsetX = 0);
                void 0 === offsetY && (offsetY = 0);
                var goldImg = StartScene_1.default.Instance.goldImg,
                    goldPos = Laya.Point.create();
                goldPos.x = goldImg.x, goldPos.y = goldImg.y, goldImg.parent.localToGlobal(goldPos);
                for (var count = MathEx_1.default.Inst.randomInt(min, max), _loop_1 = function(i) {
                        var gold = Laya.Pool.getItemByClass("img", Laya.Image);
                        gold.skin = ResConfig_1.ResConfig.getMainUrl("zwujs_icon_jinbi1"), gold.pos(x, y), gold.zOrder = 10, gold.scale(.6, .6), Laya.stage.addChild(gold);
                        var randomX = MathEx_1.default.Inst.randomInt(-50 + offsetX, 50 + offsetX),
                            randomY = MathEx_1.default.Inst.randomInt(-50 + offsetY, 50 + offsetY);
                        Laya.Tween.to(gold, {
                            x: x + randomX,
                            y: y + randomY
                        }, 300), Laya.Tween.to(gold, {
                            x: goldPos.x,
                            y: goldPos.y,
                            scaleX: .4,
                            scaleY: .4
                        }, 500, Laya.Ease.backIn, Laya.Handler.create(gold, function() {
                            gold.removeSelf(), Laya.Pool.recover("img", gold), StartScene_1.default.Instance.gold.play(1, !1)
                        }), 300 + 50 * i)
                    }, i = 0; i < count; i++) _loop_1(i)
            },
            showFlyDiamond: function(x, y, min, max, offsetX, offsetY) {
                void 0 === offsetX && (offsetX = 0);
                void 0 === offsetY && (offsetY = 0);
                var diamondImg = StartScene_1.default.Instance.diamondImg,
                    diamondPos = Laya.Point.create();
                diamondPos.x = diamondImg.x, diamondPos.y = diamondImg.y, diamondImg.parent.localToGlobal(diamondPos);
                for (var count = MathEx_1.default.Inst.randomInt(min, max), _loop_2 = function(i) {
                        var diamond = Laya.Pool.getItemByClass("img", Laya.Image);
                        diamond.skin = ResConfig_1.ResConfig.getMainUrl("nczjs_icon_8"), diamond.pos(x, y), diamond.zOrder = 10, diamond.scale(1, 1), Laya.stage.addChild(diamond);
                        var randomX = MathEx_1.default.Inst.randomInt(-50 + offsetX, 50 + offsetX),
                            randomY = MathEx_1.default.Inst.randomInt(-50 + offsetY, 50 + offsetY);
                        Laya.Tween.to(diamond, {
                            x: x + randomX,
                            y: y + randomY
                        }, 300), Laya.Tween.to(diamond, {
                            x: diamondPos.x,
                            y: diamondPos.y
                        }, 500, Laya.Ease.backIn, Laya.Handler.create(diamond, function() {
                            diamond.removeSelf(), Laya.Pool.recover("img", diamond), StartScene_1.default.Instance.diamond.play(1, !1)
                        }), 300 + 50 * i)
                    }, i = 0; i < count; i++) _loop_2(i)
            },
            isTishen: function() {
                var shareCfg = Confings_1.default.Instance.getAppCfg();
                if (shareCfg) return 1 == shareCfg.model
            }
        };
        var timer, msgList = [],
            isShowMsg = !1;

        function checkTipMsg() {
            if (msgList.length > 0) {
                var obj = msgList.shift(),
                    render_1 = Laya.Pool.getItemByClass("tipMsg", TipMsg_1.default);
                Laya.stage.addChild(render_1), render_1.setMsg(obj.msg, obj.color), render_1.alpha = 1, render_1.x = 0, render_1.y = GameConfig_1.default.height / 2, Laya.Tween.to(render_1, {
                    y: render_1.y - 150,
                    alpha: 0
                }, 1e3, null, Laya.Handler.create(this, function() {
                    render_1.removeSelf(), Laya.Pool.recover("tipMsg", render_1)
                }), 1e3)
            } else isShowMsg = !1, timer.clear(this, checkTipMsg)
        }
    }, {
        "../../GameConfig": 1,
        "../data/Confings": 23,
        "../scene/StartScene": 54,
        "../view/TipMsg": 106,
        "./MathEx": 9,
        "./ResConfig": 11
    }],
    8: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var DateUtil = function() {
            function DateUtil() {}
            return DateUtil.toNextHoursTime = function(hour) {
                void 0 === hour && (hour = 1), hour = Math.min(hour, 23), hour = Math.max(hour, 0);
                var nowdate = new Date,
                    year = nowdate.getFullYear(),
                    mon = nowdate.getMonth(),
                    day = nowdate.getDate(),
                    hh = nowdate.getHours(),
                    newYear = (nowdate.getMinutes(), nowdate.getSeconds(), nowdate.getMilliseconds(), year),
                    newMon = mon,
                    newDay = day;
                (hour <= hh || 0 == hour) && ++newDay > this.getCurrentMonthDays() && (newDay = 1, ++newMon > 11 && (newMon = 0, newYear++));
                var newDate = new Date(newYear, newMon, newDay, hour),
                    nowtime = nowdate.getTime(),
                    newtime = newDate.getTime();
                return Math.abs(newtime - nowtime)
            }, DateUtil.formatSecondsTime = function(time) {
                time < 0 && (time = 0);
                var total_secends = Math.floor(time),
                    h = Math.floor(total_secends / 3600),
                    m = Math.floor(total_secends % 3600 / 60),
                    s = Math.floor(total_secends % 3600 % 60);
                return (h < 10 ? "0" + h : "" + h) + ":" + (m < 10 ? "0" + m : "" + m) + ":" + (s < 10 ? "0" + s : "" + s)
            }, DateUtil.formatSecondsTime1 = function(time) {
                time < 0 && (time = 0);
                var total_secends = Math.floor(time),
                    m = Math.floor(total_secends % 3600 / 60),
                    s = Math.floor(total_secends % 3600 % 60);
                return (m < 10 ? "0" + m : "" + m) + ":" + (s < 10 ? "0" + s : "" + s)
            }, DateUtil.formatTime = function(time) {
                time < 0 && (time = 0);
                var total_secends = Math.floor(time / 1e3),
                    h = Math.floor(total_secends / 3600),
                    m = Math.floor(total_secends % 3600 / 60),
                    s = Math.floor(total_secends % 3600 % 60 % 1e3);
                return (h < 10 ? "0" + h : "" + h) + ":" + (m < 10 ? "0" + m : "" + m) + ":" + (s < 10 ? "0" + s : "" + s)
            }, DateUtil.formatTime1 = function(time) {
                time < 0 && (time = 0);
                var total_secends = Math.floor(time / 1e3),
                    m = Math.floor(total_secends % 3600 / 60),
                    s = Math.floor(total_secends % 3600 % 60 % 1e3);
                return (m < 10 ? "0" + m : "" + m) + ":" + (s < 10 ? "0" + s : "" + s)
            }, DateUtil.getCurrentMonthDays = function() {
                var nowdate = new Date,
                    year = nowdate.getFullYear(),
                    mon = nowdate.getMonth(),
                    monthStartDate = new Date(year, mon, 1);
                return (new Date(year, mon + 1, 1) - monthStartDate) / 864e5
            }, DateUtil.timestampToTime = function(timestamp) {
                var date = new Date(1e3 * timestamp);
                return date.getFullYear() + "-" + ((date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-") + (date.getDate() + " ") + (date.getHours() + ":") + (date.getMinutes() + ":") + date.getSeconds()
            }, DateUtil.makeTime = function(timestamp) {
                void 0 === timestamp && (timestamp = -1);
                var date = null;
                return (date = -1 == timestamp ? new Date : new Date(timestamp)).getFullYear() + "-" + ((date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-") + date.getDate()
            }, DateUtil.dateTotimeStamp = function(date) {
                return void 0 === date && (date = "1979-1-1 00:00:00"), new Date(date).getTime()
            }, DateUtil.currentTime = function() {
                return (new Date).getTime()
            }, DateUtil.currentDayHourTimeStamp = function(hours, min, sec, minSec) {
                void 0 === hours && (hours = 0), void 0 === min && (min = 0), void 0 === sec && (sec = 0), void 0 === minSec && (minSec = 0);
                var now = new Date;
                return now.setHours(hours, min, sec, minSec), now.getTime()
            }, DateUtil
        }();
        exports.default = DateUtil
    }, {}],
    9: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var MathEx = function() {
            function MathEx() {}
            return Object.defineProperty(MathEx, "Inst", {
                get: function() {
                    return this._instance || (this._instance = new MathEx), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), MathEx.prototype.randomInt = function(min, max) {
                var d = Math.abs(max - min),
                    random = Math.round(d * Math.random());
                return min < max ? min + random : max + random
            }, MathEx.prototype.randomFloat = function(min, max) {
                var random = Math.abs(max - min) * Math.random();
                return min < max ? min + random : max + random
            }, MathEx.prototype.clamp = function(target, min, max) {
                return target = Math.min(target, max), target = Math.max(target, min)
            }, MathEx.prototype.lerp = function(start, end, progress) {
                return start + Math.abs(start - end) * progress * (start < end ? 1 : -1)
            }, MathEx
        }();
        exports.default = MathEx
    }, {}],
    10: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Delegate = function() {
            function Delegate(method, thisObj) {
                this.init(method, thisObj)
            }
            return Delegate.prototype.init = function(method, thisObj) {
                this._delegateMethod = method, this._theObj = thisObj
            }, Delegate.prototype.run = function() {
                for (var ctx = [], _i = 0; _i < arguments.length; _i++) ctx[_i] = arguments[_i];
                this._delegateMethod && (ctx ? this._delegateMethod.apply(this._theObj, ctx) : this._delegateMethod.apply(this._theObj))
            }, Delegate
        }();
        exports.Delegate = Delegate;
        var MessageCenter = function() {
            function MessageCenter() {
                this._listeners = {}
            }
            return Object.defineProperty(MessageCenter, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new MessageCenter), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), MessageCenter.prototype.addListener = function(type, listener, thisObj) {
                var delegate = null;
                if (type && listener) {
                    var delegates = this._listeners[type];
                    if (delegates) {
                        if (delegate = this._getDelegate(type, listener, thisObj, delegates)) return
                    } else delegates = [], this._listeners[type] = delegates;
                    delegate = new Delegate(listener, thisObj), delegates.push(delegate)
                }
            }, MessageCenter.prototype._getDelegate = function(type, method, thisObj, delegates) {
                if (void 0 === delegates && (delegates = null), delegates || (delegates = this._listeners[type]), delegates)
                    for (var i = 0, tol = delegates.length; i < tol; i++)
                        if (delegates[i]._theObj == thisObj && delegates[i]._delegateMethod == method) return delegates[i];
                return null
            }, MessageCenter.prototype.removeListener = function(type, listener, thisObj) {
                if (type) {
                    var delegates = this._listeners[type];
                    if (!delegates) return;
                    for (var i = 0, tol = delegates.length; i < tol; i++)
                        if (delegates[i]._theObj == thisObj && delegates[i]._delegateMethod == listener) {
                            delegates.splice(i, 1);
                            break
                        } delegates.length <= 0 && delete this._listeners[type]
                }
            }, MessageCenter.prototype.removeByType = function(type) {
                if (type) {
                    var delegates = this._listeners[type];
                    if (!delegates) return;
                    delegates.length = 0, delete this._listeners[type]
                }
            }, MessageCenter.prototype.removeByThisObj = function(thisObj) {
                if (thisObj)
                    for (var key in this._listeners) {
                        var delegates = this._listeners[key];
                        if (delegates && !(delegates.length <= 0)) {
                            for (var i = 0; i < delegates.length; i++) delegates[i]._theObj == thisObj && (delegates.splice(i, 1), i--);
                            delegates.length <= 0 && delete this._listeners[key]
                        }
                    }
            }, MessageCenter.prototype.dispatch = function(type, data) {
                if (void 0 === data && (data = null), type) {
                    var dispatchList = [],
                        delegates = this._listeners[type];
                    if (delegates && !(delegates.length <= 0)) {
                        for (var idx = 0, tol = delegates.length; idx < tol; idx++) dispatchList.push(delegates[idx]);
                        if (dispatchList.length > 0) {
                            for (idx = 0, tol = dispatchList.length; idx < tol; idx++) dispatchList[idx].run(data);
                            dispatchList.length = 0
                        }
                    }
                }
            }, MessageCenter
        }();
        exports.MessageCenter = MessageCenter
    }, {}],
    11: [function(require, module, exports) {
        "use strict";

        function getCDNResPrefix() {
            return "https://commcdn.rzdggame.com/farmzombie"
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ResConfig = {
            Version: "v1.0.147",
            IsDebug: !1,
            clear: !1,
            getMainUrl: function(value, suffix) {
                void 0 === suffix && (suffix = ".png");
                return "main/" + value + suffix
            },
            getDragonBonesUrl: function(value) {
                return "subpackages/package1/bones/" + value + ".sk"
            },
            getCDNResUrl: function(dir, value, suffix) {
                void 0 === suffix && (suffix = ".png");
                return "https://commcdn.rzdggame.com/farmzombie/" + exports.ResConfig.Version + "/" + dir + "/" + value + suffix
            },
            getCDNResPrefix: getCDNResPrefix,
            getSound: function(name) {
                return "sound/" + name + ".mp3"
            },
            getPlantUrl: function(value, suffix) {
                void 0 === suffix && (suffix = ".png");
                return "plant/" + value + suffix
            },
            getMonsterUrl: function(value, suffix) {
                void 0 === suffix && (suffix = ".png");
                return "monster/" + value + suffix
            }
        }
    }, {}],
    12: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var MathEx_1 = require("../MathEx"),
            FramePlayer = function(_super) {
                function FramePlayer(skin) {
                    var _this = _super.call(this, skin) || this;
                    return _this._playing = !1, _this._loop = 0, _this._curLoop = 0, _this._curFrame = 0, _this._totalFrame = 0, _this._frameRate = 30, _this._delta = 0, _this
                }
                return __extends(FramePlayer, _super), Object.defineProperty(FramePlayer.prototype, "frameRate", {
                    set: function(frameRate) {
                        this._frameRate = MathEx_1.default.Inst.clamp(frameRate, 1, 60)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(FramePlayer.prototype, "skins", {
                    set: function(skins) {
                        skins && (this._skins = skins, this._totalFrame = skins.length)
                    },
                    enumerable: !0,
                    configurable: !0
                }), FramePlayer.prototype.gotoFrame = function(frame) {
                    frame = Math.max(frame, 0), this._curFrame = frame
                }, FramePlayer.prototype.gotoPlay = function(frame, loop) {
                    void 0 === loop && (loop = 0), this.gotoFrame(frame), this.play(loop)
                }, FramePlayer.prototype.play = function(loop) {
                    void 0 === loop && (loop = -1), this._skins && (this._playing = !0, this._loop = loop)
                }, FramePlayer.prototype.stop = function() {
                    this._playing = !1
                }, FramePlayer.prototype.updateLogic = function(dt) {
                    if (this._playing && this._skins && (this._delta += dt, !(this._delta < 1e3 / this._frameRate)))
                        if (this._delta = 0, this._curFrame >= this._totalFrame - 1) this._curFrame = 0, this._curLoop++, this._loop >= 0 && (this._curLoop >= this._loop && (this._curLoop = 0, this._playing = !1, this.completeCallBack && this.completeCallBack.apply(this, [this])), this.onceCallBack && this.onceCallBack.apply(this, [this]));
                        else {
                            if (this._curFrame >= this._skins.length) return;
                            var skin = this._skins[this._curFrame];
                            this.skin = skin, this._curFrame++
                        }
                }, FramePlayer.prototype.onCreate = function() {
                    this.skin = "", this._curLoop = 0, this.anchorX = this.anchorY = 0, this.scaleX = this.scaleY = 1, this.centerX = NaN, this.centerY = NaN, this.rotation = 0
                }, FramePlayer.prototype.dispose = function() {
                    this.stop(), this.onceCallBack = this.completeCallBack = this._skins = null, this.parent && this.parent.removeChild(this)
                }, FramePlayer
            }(Laya.Image);
        exports.default = FramePlayer
    }, {
        "../MathEx": 9
    }],
    13: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var MD5 = function() {
            function MD5() {}
            return MD5.hex_md5 = function(s) {
                return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s))).toUpperCase()
            }, MD5.b64_md5 = function(s) {
                return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s)))
            }, MD5.any_md5 = function(s, e) {
                return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e)
            }, MD5.hex_hmac_md5 = function(k, d) {
                return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)))
            }, MD5.b64_hmac_md5 = function(k, d) {
                return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)))
            }, MD5.any_hmac_md5 = function(k, d, e) {
                return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e)
            }, MD5.md5_vm_test = function() {
                return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
            }, MD5.rstr_md5 = function(s) {
                return this.binl2rstr(this.binl_md5(this.rstr2binl(s), 8 * s.length))
            }, MD5.rstr_hmac_md5 = function(key, data) {
                var bkey = this.rstr2binl(key);
                bkey.length > 16 && (bkey = this.binl_md5(bkey, 8 * key.length));
                for (var ipad = Array(16), opad = Array(16), i = 0; i < 16; i++) ipad[i] = 909522486 ^ bkey[i], opad[i] = 1549556828 ^ bkey[i];
                var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + 8 * data.length);
                return this.binl2rstr(this.binl_md5(opad.concat(hash), 640))
            }, MD5.rstr2hex = function(input) {
                try {
                    this.hexcase
                } catch (e) {
                    this.hexcase = 0
                }
                for (var x, hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", output = "", i = 0; i < input.length; i++) x = input.charCodeAt(i), output += hex_tab.charAt(x >>> 4 & 15) + hex_tab.charAt(15 & x);
                return output
            }, MD5.rstr2b64 = function(input) {
                try {
                    this.b64pad
                } catch (e) {
                    this.b64pad = ""
                }
                for (var output = "", len = input.length, i = 0; i < len; i += 3)
                    for (var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0), j = 0; j < 4; j++) 8 * i + 6 * j > 8 * input.length ? output += this.b64pad : output += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(triplet >>> 6 * (3 - j) & 63);
                return output
            }, MD5.rstr2any = function(input, encoding) {
                var i, j, q, x, quotient, divisor = encoding.length,
                    dividend = Array(Math.ceil(input.length / 2));
                for (i = 0; i < dividend.length; i++) dividend[i] = input.charCodeAt(2 * i) << 8 | input.charCodeAt(2 * i + 1);
                var full_length = Math.ceil(8 * input.length / (Math.log(encoding.length) / Math.log(2))),
                    remainders = Array(full_length);
                for (j = 0; j < full_length; j++) {
                    for (quotient = Array(), x = 0, i = 0; i < dividend.length; i++) x = (x << 16) + dividend[i], x -= (q = Math.floor(x / divisor)) * divisor, (quotient.length > 0 || q > 0) && (quotient[quotient.length] = q);
                    remainders[j] = x, dividend = quotient
                }
                var output = "";
                for (i = remainders.length - 1; i >= 0; i--) output += encoding.charAt(remainders[i]);
                return output
            }, MD5.str2rstr_utf8 = function(input) {
                for (var x, y, output = "", i = -1; ++i < input.length;) x = input.charCodeAt(i), y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0, 55296 <= x && x <= 56319 && 56320 <= y && y <= 57343 && (x = 65536 + ((1023 & x) << 10) + (1023 & y), i++), x <= 127 ? output += String.fromCharCode(x) : x <= 2047 ? output += String.fromCharCode(192 | x >>> 6 & 31, 128 | 63 & x) : x <= 65535 ? output += String.fromCharCode(224 | x >>> 12 & 15, 128 | x >>> 6 & 63, 128 | 63 & x) : x <= 2097151 && (output += String.fromCharCode(240 | x >>> 18 & 7, 128 | x >>> 12 & 63, 128 | x >>> 6 & 63, 128 | 63 & x));
                return output
            }, MD5.str2rstr_utf16le = function(input) {
                for (var output = "", i = 0; i < input.length; i++) output += String.fromCharCode(255 & input.charCodeAt(i), input.charCodeAt(i) >>> 8 & 255);
                return output
            }, MD5.str2rstr_utf16be = function(input) {
                for (var output = "", i = 0; i < input.length; i++) output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 255, 255 & input.charCodeAt(i));
                return output
            }, MD5.rstr2binl = function(input) {
                for (var output = Array(input.length >> 2), i = 0; i < output.length; i++) output[i] = 0;
                for (i = 0; i < 8 * input.length; i += 8) output[i >> 5] |= (255 & input.charCodeAt(i / 8)) << i % 32;
                return output
            }, MD5.binl2rstr = function(input) {
                for (var output = "", i = 0; i < 32 * input.length; i += 8) output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
                return output
            }, MD5.binl_md5 = function(x, len) {
                x[len >> 5] |= 128 << len % 32, x[14 + (len + 64 >>> 9 << 4)] = len;
                for (var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, i = 0; i < x.length; i += 16) {
                    var olda = a,
                        oldb = b,
                        oldc = c,
                        oldd = d;
                    a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936), d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586), c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819), b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330), a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897), d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426), c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341), b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983), a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416), d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417), c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063), b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162), a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682), d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101), c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290), b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329), a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510), d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632), c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713), b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302), a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691), d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083), c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335), b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848), a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438), d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690), c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961), b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501), a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467), d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784), c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473), b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734), a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558), d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463), c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562), b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556), a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060), d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353), c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632), b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640), a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174), d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222), c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979), b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189), a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487), d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835), c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520), b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651), a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844), d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415), c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905), b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055), a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571), d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606), c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523), b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799), a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359), d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744), c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380), b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649), a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070), d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379), c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259), b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551), a = this.safe_add(a, olda), b = this.safe_add(b, oldb), c = this.safe_add(c, oldc), d = this.safe_add(d, oldd)
                }
                return [a, b, c, d]
            }, MD5.md5_cmn = function(q, a, b, x, s, t) {
                return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b)
            }, MD5.md5_ff = function(a, b, c, d, x, s, t) {
                return this.md5_cmn(b & c | ~b & d, a, b, x, s, t)
            }, MD5.md5_gg = function(a, b, c, d, x, s, t) {
                return this.md5_cmn(b & d | c & ~d, a, b, x, s, t)
            }, MD5.md5_hh = function(a, b, c, d, x, s, t) {
                return this.md5_cmn(b ^ c ^ d, a, b, x, s, t)
            }, MD5.md5_ii = function(a, b, c, d, x, s, t) {
                return this.md5_cmn(c ^ (b | ~d), a, b, x, s, t)
            }, MD5.safe_add = function(x, y) {
                var lsw = (65535 & x) + (65535 & y);
                return (x >> 16) + (y >> 16) + (lsw >> 16) << 16 | 65535 & lsw
            }, MD5.bit_rol = function(num, cnt) {
                return num << cnt | num >>> 32 - cnt
            }, MD5.hexcase = 0, MD5.b64pad = "", MD5
        }();
        exports.MD5 = MD5
    }, {}],
    14: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var MD5_1 = require("./MD5"),
            StringUtil = function() {
                function StringUtil() {}
                return StringUtil.isNullOrEmpty = function(str) {
                    return null == str || null == str || "" == str
                }, StringUtil.digestMD5 = function(str) {
                    return this.isNullOrEmpty(str) ? str : MD5_1.MD5.hex_md5(str)
                }, StringUtil.decimalFormat = function(decimal) {
                    if (!decimal) return "";
                    var str = decimal.toFixed(),
                        strVector = str.split(".");
                    strVector && strVector.length > 1 && (str = strVector[0]);
                    var index = Math.floor(str.length / 3);
                    str.length % 3 == 0 && index--;
                    var nuit = this.units[index];
                    if ("" == nuit) return str;
                    var pos = str.length - 3 * index,
                        n = str.substr(0, pos);
                    return (n += "." + str.substr(pos, 2)) + nuit
                }, StringUtil.units = ["", "K", "M", "T", "B", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az", "ba", "bb", "bc", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bk", "bl", "bm", "bn", "bo", "bp", "bq", "br", "bs", "bt", "bu", "bv", "bw", "bx", "by", "bz", "ca", "cb", "cc", "cd", "ce", "cf", "cg", "ch", "ci", "cj", "ck", "cl", "cm", "cn", "co", "cp", "cq", "cr", "cs", "ct", "cu", "cv", "cw", "cx", "cy", "cz", "da", "db", "dc", "dd", "de", "df", "dg", "dh", "di", "dj", "dk", "dl", "dm", "dn", "do", "dp", "dq", "dr", "ds", "dt", "du", "dv", "dw", "dx", "dy", "dz", "ea", "eb", "ec", "ed", "ee", "ef", "eg", "eh", "ei", "ej", "ek", "el", "em", "en", "eo", "ep", "eq", "er", "es", "et", "eu", "ev", "ew", "ex", "ey", "ez", "fa", "fb", "fc", "fd", "fe", "ff", "fg", "fh", "fi", "fj", "fk", "fl", "fm", "fn", "fo", "fp", "fq", "fr", "fs", "ft", "fu", "fv", "fw", "fx", "fy", "fz", "ga", "gb", "gc", "gd", "ge", "gf", "gg", "gh", "gi", "gj", "gk", "gl", "gm", "gn", "go"], StringUtil
            }();
        exports.StringUtil = StringUtil
    }, {
        "./MD5": 13
    }],
    15: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var LocalStorageData = function() {
            function LocalStorageData() {}
            return Object.defineProperty(LocalStorageData, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new LocalStorageData), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), LocalStorageData.prototype.load = function(key) {
                var value = Laya.LocalStorage.getItem(key);
                return "undefined" != value && null != value || (value = null), value
            }, LocalStorageData.prototype.save = function(key, value) {
                Laya.LocalStorage.setItem(key, value)
            }, LocalStorageData
        }();
        exports.LocalStorageData = LocalStorageData
    }, {}],
    16: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Log_1 = require("../utility/Log"),
            LocalStorageData_1 = require("./LocalStorageData"),
            String_1 = require("../basic/String"),
            Settings = function() {
                function Settings() {
                    this._setting = {}
                }
                return Object.defineProperty(Settings, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new Settings), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), Settings.prototype.init = function() {
                    this.loadSetting()
                }, Settings.prototype.loadSetting = function() {
                    var setting = LocalStorageData_1.LocalStorageData.Instance.load("setting");
                    if (Log_1.Log.trace(" >>>= load setting: ", setting), String_1.StringUtil.isNullOrEmpty(setting)) this._setting.music_mute = 0, this._setting.sound_mute = 0, this._setting.vibrate = 0;
                    else try {
                        this._setting = JSON.parse(setting)
                    } catch (ex) {
                        Log_1.Log.error("XXXX load setting error: ", ex)
                    }
                }, Settings.prototype.saveSetting = function() {
                    Log_1.Log.trace(" >>>= save setting: ", this._setting);
                    var setting = null != this._setting ? JSON.stringify(this._setting) : void 0;
                    LocalStorageData_1.LocalStorageData.Instance.save("setting", setting)
                }, Settings.prototype.setSetting = function(settingKey, val) {
                    this._setting[settingKey] = val
                }, Settings.prototype.getSetting = function(settingKey) {
                    return this._setting[settingKey]
                }, Settings
            }();
        exports.Settings = Settings
    }, {
        "../basic/String": 14,
        "../utility/Log": 20,
        "./LocalStorageData": 15
    }],
    17: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Dictionary = function() {
            function Dictionary() {
                this._dic = {}
            }
            return Dictionary.prototype.contains = function(id) {
                return this._dic.hasOwnProperty(id)
            }, Dictionary.prototype.add = function(id, v) {
                this.set(id, v)
            }, Dictionary.prototype.remove = function(id) {
                this._dic.hasOwnProperty(id) && delete this._dic[id]
            }, Dictionary.prototype.reset = function() {
                var keys = Object.keys(this._dic);
                if (keys && keys.length > 0)
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        delete this._dic[key]
                    }
            }, Dictionary.prototype.get = function(id) {
                if (this._dic.hasOwnProperty(id)) return this._dic[id]
            }, Dictionary.prototype.set = function(id, v) {
                if (this._dic.hasOwnProperty(id) && this._dic[id] == v) return;
                this._dic[id] = v
            }, Object.defineProperty(Dictionary.prototype, "keys", {
                get: function() {
                    return Object.keys(this._dic)
                },
                enumerable: !0,
                configurable: !0
            }), Dictionary
        }();
        exports.Dictionary = Dictionary;
        var AccociatedArray = function() {
            function AccociatedArray() {
                this._idxMap = new Dictionary, this._arr = [], this._lastEmptyIdx = 0
            }
            return AccociatedArray.prototype.contains = function(id) {
                return this._idxMap.contains(id)
            }, AccociatedArray.prototype.add = function(id, v) {
                return this.set(id, v)
            }, AccociatedArray.prototype.remove = function(id) {
                var idx = this._idxMap.get(id);
                if (null != idx) {
                    this._idxMap.remove(id), this._lastEmptyIdx = Math.min(this._lastEmptyIdx, idx);
                    var item = this._arr[idx];
                    return this._arr[idx] = void 0, item
                }
            }, AccociatedArray.prototype.reset = function() {
                this._idxMap.reset(), this._arr.length = 0, this._lastEmptyIdx = 0
            }, AccociatedArray.prototype.get = function(id) {
                var idx = this._idxMap.get(id);
                if (null != idx) return this._arr[idx]
            }, AccociatedArray.prototype.set = function(id, v) {
                var oldIdx = this._idxMap.get(id);
                if (null != oldIdx) return this._arr[oldIdx] = v, oldIdx;
                this._advanceEmptyIdx();
                var idx = this._lastEmptyIdx;
                return this._arr[idx] = v, this._idxMap.set(id, idx), idx
            }, Object.defineProperty(AccociatedArray.prototype, "arrar", {
                get: function() {
                    return this._arr
                },
                enumerable: !0,
                configurable: !0
            }), AccociatedArray.prototype._advanceEmptyIdx = function() {
                if (null != this._arr[this._lastEmptyIdx]) {
                    for (var i = this._lastEmptyIdx + 1, len = this._arr.length; i < len; i++) {
                        if (null == this._arr[i]) return void(this._lastEmptyIdx = i)
                    }
                    this._lastEmptyIdx = this._arr.length
                }
            }, AccociatedArray
        }();
        exports.AccociatedArray = AccociatedArray
    }, {}],
    18: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var HandyArray = function() {
            function HandyArray(capacity, isAutoAdaptive) {
                var c = null == capacity ? 20 : capacity,
                    isa = null != isAutoAdaptive && isAutoAdaptive;
                this.init(c), this.IsAutoAdaptive = isa
            }
            return HandyArray.prototype.clone = function(newSize) {
                newSize < this.length && (newSize = this.length);
                for (var result = new HandyArray(newSize), i = 0; i < this.length; i++) {
                    var item = this.get_at(i);
                    result.push(item)
                }
                return result.IsAutoAdaptive = this.IsAutoAdaptive, result
            }, HandyArray.prototype.reset = function() {
                for (var i = 0; i < this.mCapacity; i++) delete this.mItemList[i], this.mItemList[i] = void 0;
                this.mYinYang = -1, this.mNIndex = this.mNFreeIndex = 0, this.mMIndex = this.mMFreeIndex = 0
            }, HandyArray.prototype.init = function(capacity) {
                this.mItemList = new Array(capacity), this.mCapacity = capacity, this.mYinYang = -1, this.mNIndex = this.mNFreeIndex = 0, this.mMIndex = this.mMFreeIndex = 0, this.IsAutoAdaptive = !1
            }, HandyArray.prototype.moveClockwise = function(index, step) {
                return index = (index + step) % this.mCapacity
            }, HandyArray.prototype.moveReverseClockwise = function(index, step) {
                return index += this.mCapacity - step, index %= this.mCapacity
            }, HandyArray.prototype.reAdaptCapacity = function(newCapaity) {
                var dataCount = this.length,
                    oldItemList = this.mItemList;
                if (newCapaity < dataCount && (newCapaity = dataCount), this.mItemList = new Array(newCapaity), dataCount > 0) {
                    var count = 0;
                    this.mItemList[count++] = oldItemList[this.mNIndex];
                    var i = this.mNIndex;
                    for (i = this.moveClockwise(i, 1); i != this.mMIndex; i = this.moveClockwise(i, 1)) this.mItemList[count++] = oldItemList[i]
                }
                this.mNIndex = 0, this.mNFreeIndex = 0, this.mMIndex = dataCount, this.mMFreeIndex = this.mMIndex, this.mCapacity = newCapaity, 0 == dataCount ? this.mYinYang = -1 : dataCount == this.mCapacity ? this.mYinYang = 1 : this.mYinYang = 0
            }, Object.defineProperty(HandyArray.prototype, "IsAutoAdaptive", {
                get: function() {
                    return this._autoadaptive
                },
                set: function(value) {
                    this._autoadaptive = value
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(HandyArray.prototype, "length", {
                get: function() {
                    return this.mYinYang < 0 ? 0 : this.mYinYang > 0 ? this.mCapacity : (this.mCapacity - this.mNIndex + this.mMIndex) % this.mCapacity
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(HandyArray.prototype, "freeCount", {
                get: function() {
                    return this.mCapacity - this.length
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(HandyArray.prototype, "nFree", {
                get: function() {
                    return this.mNFreeIndex <= this.mNIndex ? this.mNIndex - this.mNFreeIndex : this.mCapacity - this.mNFreeIndex + this.mNIndex
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(HandyArray.prototype, "mFree", {
                get: function() {
                    return this.mMIndex <= this.mMFreeIndex ? this.mMFreeIndex - this.mMIndex : this.mCapacity - this.mMIndex + this.mMFreeIndex
                },
                enumerable: !0,
                configurable: !0
            }), HandyArray.prototype.tryMoreCapacity = function() {
                if (this.IsAutoAdaptive) {
                    var newCapaity = this.mCapacity > 512 ? this.mCapacity + (1024 - this.mCapacity % 1024) : this.mCapacity + this.mCapacity;
                    newCapaity < this.mCapacity || this.reAdaptCapacity(newCapaity)
                }
            }, HandyArray.prototype.allocForN = function(allocNum) {
                return allocNum <= 0 ? 0 : this.freeCount < allocNum && (this.tryMoreCapacity(), this.freeCount < allocNum) ? 0 : (this.mNFreeIndex = this.moveReverseClockwise(this.mNFreeIndex, allocNum), allocNum)
            }, HandyArray.prototype.freeFromN = function(freeNum) {
                return freeNum <= 0 || this.length <= 0 ? 0 : (freeNum >= this.length ? (freeNum = this.length, this.mYinYang = -1) : this.mYinYang = 0, this.mNIndex = this.moveClockwise(this.mNIndex, freeNum), freeNum)
            }, HandyArray.prototype.allocForM = function(allocNum) {
                return allocNum <= 0 ? 0 : this.freeCount < allocNum && (this.tryMoreCapacity(), this.freeCount < allocNum) ? 0 : (this.mMFreeIndex = this.moveClockwise(this.mMFreeIndex, allocNum), allocNum)
            }, HandyArray.prototype.freeFromM = function(freeNum) {
                return freeNum <= 0 || this.length <= 0 ? 0 : (freeNum >= this.length ? (freeNum = this.length, this.mYinYang = -1) : this.mYinYang = 0, this.mMIndex = this.moveReverseClockwise(this.mMIndex, freeNum), freeNum)
            }, HandyArray.prototype.rPush = function(item) {
                return !(this.nFree < 1 && this.allocForN(1) <= 0) && (this.mNIndex = this.moveReverseClockwise(this.mNIndex, 1), this.mNIndex == this.mMIndex ? this.mYinYang = 1 : this.mYinYang = 0, this.mItemList[this.mNIndex] = item, !0)
            }, HandyArray.prototype.rPop = function() {
                if (!(this.length <= 0)) {
                    var item = this.mItemList[this.mNIndex];
                    return this.mItemList[this.mNIndex] = void 0, this.freeFromN(1), item
                }
            }, HandyArray.prototype.push = function(item) {
                return !(this.mFree < 1 && this.allocForM(1) <= 0) && (this.mItemList[this.mMIndex] = item, this.mMIndex = this.moveClockwise(this.mMIndex, 1), this.mNIndex == this.mMIndex ? this.mYinYang = 1 : this.mYinYang = 0, !0)
            }, HandyArray.prototype.pop = function() {
                if (!(this.length <= 0)) {
                    this.freeFromM(1);
                    var item = this.mItemList[this.mMIndex];
                    return this.mItemList[this.mMIndex] = void 0, item
                }
            }, HandyArray.prototype.enqueue = function(item) {
                return this.push(item)
            }, HandyArray.prototype.dequeue = function() {
                return this.rPop()
            }, HandyArray.prototype.rEnqueue = function(item) {
                return this.rPush(item)
            }, HandyArray.prototype.rDequeue = function() {
                return this.pop()
            }, HandyArray.prototype.dequeueAt = function(offset) {
                if (!(this.length <= 0 || offset >= this.length)) {
                    for (var item = this[offset], i = offset; i > 0; i--) this.set_at(i, this.get_at(i - 1));
                    return this.rPop(), item
                }
            }, HandyArray.prototype.indexFromNOffset = function(offset) {
                if (offset >= this.length) throw "IndexOutOfRangeException";
                var index = this.mNIndex;
                return 0 == offset ? index : index = (this.mNIndex + offset) % this.mCapacity
            }, HandyArray.prototype.indexFromMOffset = function(offset) {
                if (offset >= this.length) throw "IndexOutOfRangeException";
                var index = this.mMIndex - 1 - offset;
                return index < 0 && (index += this.mCapacity), index
            }, HandyArray.prototype.atOffset = function(offset) {
                var index = this.indexFromNOffset(offset);
                return this.mItemList[index]
            }, HandyArray.prototype.atOffsetR = function(offset) {
                var index = this.indexFromMOffset(offset);
                return this.mItemList[index]
            }, HandyArray.prototype.atFixOffset = function(offset) {
                if (offset < 0 || offset > this.mItemList.length) throw "IndexOutOfRangeException";
                return this.mItemList[offset]
            }, HandyArray.prototype.get_at = function(i) {
                var index = this.indexFromNOffset(i);
                return this.mItemList[index]
            }, HandyArray.prototype.set_at = function(i, v) {
                var index = this.indexFromNOffset(i);
                this.mItemList[index] = v
            }, HandyArray
        }();
        exports.HandyArray = HandyArray
    }, {}],
    19: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var LocalStorageData = function() {
            function LocalStorageData() {}
            return Object.defineProperty(LocalStorageData, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new LocalStorageData), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), LocalStorageData.prototype.load = function(key) {
                var value = Laya.LocalStorage.getItem(key);
                return "undefined" != value && null != value || (value = null), value
            }, LocalStorageData.prototype.save = function(key, value) {
                Laya.LocalStorage.setItem(key, value)
            }, LocalStorageData
        }();
        exports.LocalStorageData = LocalStorageData
    }, {}],
    20: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Log = function() {
            function Log() {}
            return Log.trace = function() {
                for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                if (!Laya.Browser.onWeiXin) {
                    for (var text = "", _a = 0, args_1 = args; _a < args_1.length; _a++) {
                        var p = args_1[_a];
                        "string" == typeof p ? text += p : ("" != text && (console.log("[Log]> " + text), text = ""), console.log("[Log]> ", p))
                    }
                    "" != text && console.log("[Log]> " + text)
                }
            }, Log.error = function() {
                for (var optionalParams = [], _i = 0; _i < arguments.length; _i++) optionalParams[_i] = arguments[_i];
                for (var text = "", _a = 0, optionalParams_1 = optionalParams; _a < optionalParams_1.length; _a++) {
                    var p = optionalParams_1[_a];
                    "string" == typeof p ? text += p : ("" != text && (console.error("[Log]> " + text), text = ""), console.error("[Log]> ", p))
                }
                "" != text && console.error("[Log]> " + text)
            }, Log
        }();
        exports.Log = Log
    }, {}],
    21: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Dictionary_1 = require("./Dictionary"),
            HandyArray_1 = require("./HandyArray"),
            IPoolableObj = function() {
                function IPoolableObj() {}
                return IPoolableObj.prototype.onPickUp = function() {
                    for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i]
                }, IPoolableObj.prototype.onPutDown = function() {}, IPoolableObj
            }();
        exports.IPoolableObj = IPoolableObj;
        var ObjectPool = function() {
            function ObjectPool() {
                this._classList = []
            }
            return Object.defineProperty(ObjectPool, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new ObjectPool), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), ObjectPool.prototype.pickUp = function(objClass) {
                for (var args = [], _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                var objList = objClass.__objPool;
                objList || (objList = new HandyArray_1.HandyArray(10, !0), objClass.__objPool = objList, this._classList.push(objClass));
                var obj = void 0;
                return objList.length > 0 && (obj = objList.pop()), obj || (obj = new objClass), "function" == typeof obj.onPickUp && obj.onPickUp.apply(obj, args), obj
            }, ObjectPool.prototype.putDown = function(obj) {
                var objClass = obj.constructor;
                if (objClass) {
                    var objList = objClass.__objPool;
                    objList || (objList = new HandyArray_1.HandyArray(10, !0), objClass.__objPool = objList, this._classList.push(objClass)),
                        function(obj, f) {
                            return f(obj)
                        }(obj, function(obj) {
                            return null != obj.onPutDown
                        }) && obj.onPutDown(), objList.push(obj)
                }
            }, ObjectPool.prototype.clear = function() {
                for (var i = 0; i < this._classList.length; i++) {
                    var objList = this._classList[i].__objPool;
                    objList && objList.reset()
                }
            }, ObjectPool
        }();
        exports.ObjectPool = ObjectPool;
        var NamedCache = function() {
            function NamedCache() {
                this._cache = new Dictionary_1.Dictionary
            }
            return Object.defineProperty(NamedCache, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new ObjectPool), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), NamedCache.prototype.getObj = function(objKey) {
                return this._cache.get(objKey)
            }, NamedCache.prototype.cacheObj = function(objKey, obj) {
                this._cache.add(objKey, obj)
            }, NamedCache
        }();
        exports.NamedCache = NamedCache;
        var NamedObjectPool = function() {
            function NamedObjectPool() {
                this._pool = new Dictionary_1.Dictionary
            }
            return Object.defineProperty(NamedObjectPool, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new NamedObjectPool), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), NamedObjectPool.prototype.pickUp = function(poolKey, objClass) {
                void 0 === objClass && (objClass = null);
                for (var args = [], _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
                var objList = this._pool.get(poolKey);
                objList || (objList = new HandyArray_1.HandyArray(10, !0), this._pool.add(poolKey, objList));
                var obj = void 0;
                if (objList.length > 0 && (obj = objList.pop()), !obj) {
                    if (!objClass) return null;
                    (obj = new objClass).__pool_key__ = poolKey
                }
                return "function" == typeof obj.onPickUp && obj.onPickUp.apply(obj, args), obj
            }, NamedObjectPool.prototype.putDown = function(obj, poolKey) {
                if (void 0 === poolKey && (poolKey = null), poolKey && "" != poolKey || (poolKey = obj.__pool_key__), poolKey && "" != poolKey) {
                    var objList = this._pool.get(poolKey);
                    objList || (objList = new HandyArray_1.HandyArray(10, !0), this._pool.add(poolKey, objList)), objList.push(obj)
                }
            }, NamedObjectPool.prototype.getCount = function(poolKey) {
                var objList = this._pool.get(poolKey);
                return objList ? objList.length : 0
            }, NamedObjectPool.prototype.clear = function() {
                for (var keys = this._pool.keys, i = 0; i < keys.length; i++) {
                    var objList = this._pool.get(keys[i]);
                    objList && objList.reset()
                }
            }, NamedObjectPool
        }();
        exports.NamedObjectPool = NamedObjectPool
    }, {
        "./Dictionary": 17,
        "./HandyArray": 18
    }],
    22: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Log_1 = require("../utility/Log"),
            LocalStorageData_1 = require("./LocalStorageData"),
            String_1 = require("../basic/String"),
            Settings = function() {
                function Settings() {
                    this._setting = {}
                }
                return Object.defineProperty(Settings, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new Settings), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), Settings.prototype.init = function() {
                    this.loadSetting()
                }, Settings.prototype.loadSetting = function() {
                    var setting = LocalStorageData_1.LocalStorageData.Instance.load("setting");
                    if (Log_1.Log.trace(" >>>= load setting: ", setting), String_1.StringUtil.isNullOrEmpty(setting)) this._setting.music_mute = 0, this._setting.sound_mute = 0, this._setting.vibrate = 0;
                    else try {
                        this._setting = JSON.parse(setting)
                    } catch (ex) {
                        Log_1.Log.error("XXXX load setting error: ", ex)
                    }
                }, Settings.prototype.saveSetting = function() {
                    Log_1.Log.trace(" >>>= save setting: ", this._setting);
                    var setting = null != this._setting ? JSON.stringify(this._setting) : void 0;
                    LocalStorageData_1.LocalStorageData.Instance.save("setting", setting)
                }, Settings.prototype.setSetting = function(settingKey, val) {
                    this._setting[settingKey] = val
                }, Settings.prototype.getSetting = function(settingKey) {
                    return this._setting[settingKey]
                }, Settings
            }();
        exports.Settings = Settings
    }, {
        "../basic/String": 14,
        "../utility/Log": 20,
        "./LocalStorageData": 19
    }],
    23: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var LoadingScene_1 = require("../scene/LoadingScene"),
            GameData_1 = require("./GameData"),
            Confings = function() {
                function Confings() {
                    this._loaded = 0, this.appConfigUrl = "https://jsonconfig.rzdggame.com/json/ncdzjs/appConfig1.json", this.shareConfigUrl = "https://jsonconfig.rzdggame.com/json/ncdzjs/share.json", this.limitConfigUrl = "https://jsonconfig.rzdggame.com/json/ncdzjs/limitConfig.json", this._shareByGroup = {}, this._isFilterIp = !0
                }
                return Object.defineProperty(Confings.prototype, "plantCfg", {
                    get: function() {
                        return this._plantCfg
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Confings.prototype, "zhalanCfg", {
                    get: function() {
                        return this._zhalanCfg
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Confings.prototype, "tuJianCfg", {
                    get: function() {
                        return this._tujianCfg
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Confings.prototype, "bianyiCfg", {
                    get: function() {
                        return this._bianyiCfg
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Confings, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new Confings), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), Confings.prototype.init = function(complete) {
                    var _this = this;
                    LoadingScene_1.default.Instance.showTips("Đang tải (2/3)"), this.complete = complete;
                    (new Date).getTime();
                    var jsons = [{
                        url: "json/Bullet.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/Monster.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/Plant.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/Guanka.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/ShuZhi.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/UnLock.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/tianfu.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/Skill.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/zhalan.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/Tujian.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/Map.json",
                        type: Laya.Loader.JSON
                    }, {
                        url: "json/Bianyi.json",
                        type: Laya.Loader.JSON
                    }];
                    Laya.loader.load(jsons, Laya.Handler.create(this, function() {
                        _this._bulletCfg = Laya.loader.getRes("json/Bullet.json"), _this._monsterCfg = Laya.loader.getRes("json/Monster.json"), _this._plantCfg = Laya.loader.getRes("json/Plant.json"), _this._guankaCfg = Laya.loader.getRes("json/Guanka.json"), _this._shuzhiCfg = Laya.loader.getRes("json/ShuZhi.json"), _this._unlockCfg = Laya.loader.getRes("json/UnLock.json"), _this._tianfuCfg = Laya.loader.getRes("json/tianfu.json"), _this._skillCfg = Laya.loader.getRes("json/Skill.json"), _this._zhalanCfg = Laya.loader.getRes("json/zhalan.json"), _this._tujianCfg = Laya.loader.getRes("json/Tujian.json"), _this._mapCfg = Laya.loader.getRes("json/Map.json"), _this._bianyiCfg = Laya.loader.getRes("json/Bianyi.json"), _this.initBulletCfg(), _this.initMonsterCfg(), _this.initPlantCfg(), _this.initGuankaCfg(), _this.initShuZhiCfg(), _this.initUnlockCfg(), _this.initTianFuCfg(), _this.initSkillCfg(), _this.initZhaLanCfg(), _this.initTuJianCfg(), _this.initMapCfg(), _this.initBianyiCfg(), _this.loadComplete()
                    }))
                }, Confings.prototype.loadComplete = function(data, url) {
                    switch (url) {
                        case this.appConfigUrl:
                            this._appConfig = data;
                            break;
                        case this.shareConfigUrl:
                            this._shareConfig = data, this.ininShareCfg();
                            break;
                        case this.limitConfigUrl:
                            this._limitConfig = data
                    }
                    this._loaded++, LoadingScene_1.default.Instance.setProgress(this._loaded / 4, !0), this._loaded >= 1 && this.complete && (this.complete.run(), this.complete.clear())
                }, Confings.prototype.ininShareCfg = function() {
                    for (var cfgs = this._shareConfig, len = cfgs.length, idDic = this._shareByGroup, i = 0; i < len; i++) {
                        var cfg = cfgs[i],
                            arr = idDic[cfg.group];
                        arr || (arr = [], idDic[cfg.group] = arr), arr.push(cfg)
                    }
                }, Confings.prototype.getShareCfgByGroup = function(group) {
                    var cfgs = this._shareByGroup[group];
                    if (cfgs) {
                        for (var all = 0, len = cfgs.length, i = 0; i < len; i++) {
                            all += +(cfg = cfgs[i]).random
                        }
                        var temp = 0;
                        for (i = 0; i < len; i++) {
                            temp += +(cfg = cfgs[i]).random / all * 100, cfg.probability = temp
                        }
                        var random = 100 * Math.random();
                        for (i = 0; i < len; i++) {
                            var cfg;
                            if (random < (cfg = cfgs[i]).probability) return cfg
                        }
                    }
                }, Confings.prototype.initBulletCfg = function() {
                    var cfgs = this._bulletCfg,
                        obj = this._bulletById = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.id + ""] = cfg
                    }
                }, Confings.prototype.initMonsterCfg = function() {
                    var cfgs = this._monsterCfg,
                        obj = this._monsterById = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.id] = cfg
                    }
                }, Confings.prototype.initPlantCfg = function() {
                    var cfgs = this._plantCfg,
                        obj = this._plantById = {},
                        obj1 = this._plantsByType = {},
                        obj2 = this._unlockPlantId = {},
                        obj3 = this._diamondPlantId = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.id] = cfg;
                        var arr = obj1[cfg.type];
                        arr || (arr = obj1[cfg.type] = []), arr.push(cfg), obj2[cfg.unlock] || (obj2[cfg.unlock] = cfg), cfg.diamunlock > 0 && !obj3[cfg.diamunlock] && (obj3[cfg.diamunlock] = cfg)
                    }
                    console.log("obj2:", obj2)
                }, Confings.prototype.initGuankaCfg = function() {
                    var cfgs = this._guankaCfg,
                        obj = this._guankaById = {},
                        obj1 = this._guankaTurns = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.id] = cfg;
                        var temp = obj1[cfg.guanka];
                        temp || (temp = obj1[cfg.guanka] = []), temp[cfg.turn - 1] = cfg
                    }
                }, Confings.prototype.initShuZhiCfg = function() {
                    var cfgs = this._shuzhiCfg,
                        obj = this._shuzhiById = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.id] = cfg
                    }
                }, Confings.prototype.initUnlockCfg = function() {
                    var cfgs = this._unlockCfg,
                        obj = this._unlockById = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.location] = cfg
                    }
                }, Confings.prototype.initTianFuCfg = function() {
                    var cfgs = this._tianfuCfg,
                        obj = this._tianfuById = {},
                        obj1 = this._tianfuByTimes = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.id] = cfg, obj1[cfg.unlock] = cfg
                    }
                }, Confings.prototype.initSkillCfg = function() {
                    var cfgs = this._skillCfg,
                        obj = this._skillById = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.id] = cfg
                    }
                }, Confings.prototype.initZhaLanCfg = function() {
                    var cfgs = this._zhalanCfg,
                        obj = this._zhanlanById = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.id] = cfg
                    }
                }, Confings.prototype.initTuJianCfg = function() {
                    var cfgs = this._tujianCfg,
                        obj = this._tujiansById = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.unlockid] = cfg
                    }
                }, Confings.prototype.initMapCfg = function() {
                    var cfgs = this._mapCfg,
                        obj = this._mapById = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.id] = cfg
                    }
                }, Confings.prototype.initBianyiCfg = function() {
                    var cfgs = this._bianyiCfg,
                        obj = this._bianyiById = {};
                    for (var key in cfgs) {
                        var cfg = cfgs[key];
                        obj[cfg.id] = cfg
                    }
                }, Confings.prototype.getBianyiById = function(id) {
                    return this._bianyiById[id]
                }, Confings.prototype.getMapById = function(id) {
                    var mapCfg, guanka = id || GameData_1.default.Instance.guanka + 1,
                        obj = this._mapById;
                    for (var key in obj) {
                        var cfg = obj[key];
                        guanka >= cfg.unlock && (mapCfg = cfg)
                    }
                    return mapCfg
                }, Confings.prototype.getTuJianById = function(id) {
                    return this._tujiansById[id]
                }, Confings.prototype.getZhaLanById = function(id) {
                    return this._zhanlanById[id]
                }, Confings.prototype.getSkillById = function(id) {
                    return this._skillById[id]
                }, Confings.prototype.getBulletById = function(id) {
                    return this._bulletById[id]
                }, Confings.prototype.getMonsters = function() {
                    return this._monsterCfg
                }, Confings.prototype.getMonsterById = function(id) {
                    return this._monsterById[id]
                }, Confings.prototype.getPlantById = function(id) {
                    return this._plantById[id]
                }, Confings.prototype.getPlantsByType = function(type) {
                    return this._plantsByType[type]
                }, Confings.prototype.getGuankaById = function(id) {
                    return this._guankaById[id]
                }, Confings.prototype.getGuankaTurns = function(guanka) {
                    return this._guankaTurns[guanka]
                }, Confings.prototype.getGuankaCfgByTurn = function(turn, cfgs) {
                    return cfgs[turn - 1]
                }, Confings.prototype.getShuZhiById = function(id) {
                    return this._shuzhiById[id]
                }, Confings.prototype.getUnlockPlantById = function(id) {
                    return this._unlockPlantId[id]
                }, Confings.prototype.getDiamondUnlockPlantById = function(id) {
                    return this._diamondPlantId[id]
                }, Confings.prototype.getUnlockCfgById = function(id) {
                    return this._unlockById[id]
                }, Confings.prototype.getTianFuCfgById = function(id) {
                    return this._tianfuById[id]
                }, Confings.prototype.getTianFuCfgs = function() {
                    return this._tianfuCfg
                }, Confings.prototype.getTianFuCfgByTimes = function(times) {
                    return this._tianfuByTimes[times]
                }, Confings.prototype.getAppCfg = function() {
                    return this._appConfig
                }, Object.defineProperty(Confings.prototype, "isFilterIp", {
                    get: function() {
                        return this._isFilterIp
                    },
                    set: function(v) {
                        this._isFilterIp = v
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Confings.prototype, "shield", {
                    get: function() {
                        return this._appConfig.shield
                    },
                    enumerable: !0,
                    configurable: !0
                }), Confings.prototype.getFilterIp = function() {
                    var ip = [];
                    return this._appConfig && this._appConfig.shieldip && (ip = this._appConfig.shieldip), ip
                }, Object.defineProperty(Confings.prototype, "jifenModel1", {
                    get: function() {
                        return this._appConfig.jifenModel1
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Confings.prototype, "jifenModel2", {
                    get: function() {
                        return this._appConfig.jifenModel2
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Confings.prototype, "jifenModel3", {
                    get: function() {
                        return this._appConfig.jifenModel3
                    },
                    enumerable: !0,
                    configurable: !0
                }), Confings
            }();
        exports.default = Confings
    }, {
        "../scene/LoadingScene": 53,
        "./GameData": 24
    }],
    24: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Confings_1 = require("./Confings"),
            MessageCenter_1 = require("../core/MessageCenter"),
            Constant_1 = require("../core/Constant"),
            WxSDK_1 = require("../../wxSDK/WxSDK"),
            HttpNet_1 = require("../../wxSDK/HttpNet"),
            PlantSlotVO_1 = require("../cfgs/PlantSlotVO"),
            SoundManager_1 = require("../../wxSDK/SoundManager"),
            CoreFunction_1 = require("../core/CoreFunction"),
            GuideView_1 = require("../view/GuideView"),
            MathEx_1 = require("../core/MathEx"),
            ResConfig_1 = require("../core/ResConfig"),
            FreeGoldDialog_1 = require("../dialog/FreeGoldDialog"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            DateUtil_1 = require("../core/DateUtil"),
            GameData = function() {
                function GameData() {
                    this.prefix = "https://wxgamego01.rzdggame.com/zwdzjs/", this.login_url = this.prefix + "login.action", this.update_url = this.prefix + "update.action", this.getintegral_url = this.prefix + "getintegral.action", this.inviteNew_url = this.prefix + "getinvitelist.action", this.subscribe_url = this.prefix + "subscribe.action", this.userData = {}, this._pathWidth = 0, this.lastUnlockIdByType = {}, this._turnRelifeCount = 0, this._maxInviteCount = 0
                }
                return Object.defineProperty(GameData.prototype, "createToday", {
                    get: function() {
                        return DateUtil_1.default.makeTime(1e3 * this._createtime) == DateUtil_1.default.makeTime((new Date).getTime())
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "inviteNewList", {
                    get: function() {
                        return this._inviteNewList
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "skillBoxId", {
                    get: function() {
                        return this._skillBoxId
                    },
                    set: function(value) {
                        this._skillBoxId = value
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "ddsdkIpInfo", {
                    get: function() {
                        return this._ddsdkIpInfo
                    },
                    set: function(value) {
                        this._ddsdkIpInfo = value
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "dianAdDay", {
                    get: function() {
                        return this.userData.dianAdDay
                    },
                    set: function(val) {
                        this.userData.dianAdDay = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "loginDay", {
                    get: function() {
                        return this.userData.loginDay
                    },
                    set: function(val) {
                        this.userData.loginDay = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "dianAdTimes", {
                    get: function() {
                        return this.userData.dianAdTimes
                    },
                    set: function(val) {
                        this.userData.dianAdTimes = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "guideIds", {
                    get: function() {
                        return this.userData.guideIds
                    },
                    set: function(val) {
                        this.userData.guideIds = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "newModuleIds", {
                    get: function() {
                        return this.userData.newModuleIds
                    },
                    set: function(val) {
                        this.userData.newModuleIds = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "lastAwardTime", {
                    get: function() {
                        return this.userData.lastAwardTime
                    },
                    set: function(val) {
                        this.userData.lastAwardTime = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "zhuanpanFreeTimes", {
                    get: function() {
                        return this.userData.zhuanpanFreeTimes
                    },
                    set: function(val) {
                        this.userData.zhuanpanFreeTimes = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "zhuanpanAdTimes", {
                    get: function() {
                        return this.userData.zhuanpanAdTimes
                    },
                    set: function(val) {
                        this.userData.zhuanpanAdTimes = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "tianfuIds", {
                    get: function() {
                        return this.userData.tianfuIds
                    },
                    set: function(val) {
                        this.userData.tianfuIds = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "tianfuFreeTimes", {
                    get: function() {
                        return this.userData.tianfuFreeTimes
                    },
                    set: function(val) {
                        this.userData.tianfuFreeTimes = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "tianfuYaoqingTimes", {
                    get: function() {
                        return this.userData.tianfuYaoqingTimes
                    },
                    set: function(val) {
                        this.userData.tianfuYaoqingTimes = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "freeGoldTimes", {
                    get: function() {
                        return this.userData.freeGoldTimes
                    },
                    set: function(val) {
                        this.userData.freeGoldTimes = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "addProgramReward", {
                    get: function() {
                        return this.userData.addProgramReward
                    },
                    set: function(val) {
                        this.userData.addProgramReward = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "addSkillTimes", {
                    get: function() {
                        return this.userData.addSkillTimes
                    },
                    set: function(val) {
                        this.userData.addSkillTimes = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "today", {
                    get: function() {
                        return this.userData.today
                    },
                    set: function(val) {
                        this.userData.today = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "guanka", {
                    get: function() {
                        return this.userData.guanka
                    },
                    set: function(val) {
                        this.userData.guanka = val, WxSDK_1.default.Instance.setUserCloudStorage()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "currGuanka", {
                    get: function() {
                        return this.guanka + 1
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "shareTimesDic", {
                    get: function() {
                        return this.userData.shareTimesDic
                    },
                    set: function(val) {
                        this.userData.shareTimesDic = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "openid", {
                    get: function() {
                        return this.userData.openid
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "zhalanIds", {
                    get: function() {
                        return this.userData.zhalanIds
                    },
                    set: function(val) {
                        this.userData.zhalanIds = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "useZhaLanId", {
                    get: function() {
                        return this.userData.useZhaLanId
                    },
                    set: function(val) {
                        this.userData.useZhaLanId = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "bestLvPlantPassTimes", {
                    get: function() {
                        return this.userData.bestLvPlantPassTimes
                    },
                    set: function(val) {
                        this.userData.bestLvPlantPassTimes = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "subscribeReward", {
                    get: function() {
                        return this.userData.subscribeReward
                    },
                    set: function(val) {
                        this.userData.subscribeReward = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "tujianIds", {
                    get: function() {
                        return this.userData.tujianIds
                    },
                    set: function(val) {
                        this.userData.tujianIds = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "userInfo", {
                    get: function() {
                        return this.userData.userInfo
                    },
                    set: function(uInfo) {
                        this.userData.userInfo = uInfo
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "dailySlotInfo", {
                    get: function() {
                        return this.userData.dailySlotInfo
                    },
                    set: function(val) {
                        this.userData.dailySlotInfo = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "tujianAwardIds", {
                    get: function() {
                        return this.userData.tujianAwardIds
                    },
                    set: function(val) {
                        this.userData.tujianAwardIds = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "pathWidth", {
                    get: function() {
                        return this._pathWidth
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "groundRect", {
                    get: function() {
                        return this._groundRect
                    },
                    set: function(v) {
                        this._groundRect = v
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "turnAddDpsFactor", {
                    get: function() {
                        return MathEx_1.default.Inst.clamp(this._turnRelifeCount ? 1 + .3 * this._turnRelifeCount : 1, 1, 1.5)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "turnRelifeCount", {
                    get: function() {
                        return this._turnRelifeCount
                    },
                    set: function(num) {
                        this._turnRelifeCount = num
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "offlineTime", {
                    get: function() {
                        return this._offlineTime
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "uid", {
                    get: function() {
                        return this._uid
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "jifen", {
                    get: function() {
                        return this._jifen
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameData.prototype, "maxInviteCount", {
                    get: function() {
                        return this._maxInviteCount
                    },
                    enumerable: !0,
                    configurable: !0
                }), GameData.prototype.hasInviteCount = function() {
                    return this._maxInviteCount < 9
                }, Object.defineProperty(GameData, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new GameData), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), GameData.prototype.login = function(callback) {
                    var udata, userData = this.userData,
                        udataStr = Laya.LocalStorage.getItem("udataCache");
                    try {
                        udata = JSON.parse(udataStr)
                    } catch (e) {}
                    udata ? function(udata) {
                        userData.gold = new Decimal(udata.gold), userData.diamond = new Decimal(udata.diamond || 0), userData.guanka = udata.guanka || 0, userData.unlockPlants = udata.unlockPlants, userData.diamondBuy = udata.diamondBuy || {}, userData.hechengPlants = udata.hechengPlants, userData.slotPlants = udata.slotPlants, userData.dianAdDay = udata.dianAdDay, userData.dianAdTimes = udata.dianAdTimes, userData.guideIds = udata.guideIds || [], userData.newModuleIds = udata.newModuleIds || [], userData.lastAwardTime = udata.lastAwardTime || 0, userData.zhuanpanFreeTimes = udata.zhuanpanFreeTimes || 0, userData.zhuanpanAdTimes = udata.zhuanpanAdTimes || 0, userData.today = udata.today || 0, userData.tianfuIds = udata.tianfuIds || [], userData.tianfuFreeTimes = udata.tianfuFreeTimes || 0, userData.tianfuYaoqingTimes = udata.tianfuYaoqingTimes || 0, userData.freeGoldTimes = udata.freeGoldTimes || 0, userData.shareTimesDic = udata.shareTimesDic || {}, userData.addProgramReward = udata.addProgramReward || 0, userData.skills = udata.skills || {}, userData.addSkillTimes = udata.addSkillTimes || 0, userData.zhalanIds = udata.zhalanIds || [], userData.useZhaLanId = udata.useZhaLanId || 0, userData.loginDay = udata.loginDay || 0, userData.bestLvPlantPassTimes = udata.bestLvPlantPassTimes || {
                            id: -1,
                            count: 0
                        }, userData.subscribeIds = udata.subscribeIds || [], userData.tujianIds = udata.tujianIds || [], userData.userInfo = udata.userInfo || null, userData.dailySlotInfo = udata.dailySlotInfo || {}, userData.tujianAwardIds = udata.tujianAwardIds || []
                    }(udata) : this.clearData(), this.initData(), callback && callback.run()
                }, GameData.prototype.upload = function() {
                    Laya.LocalStorage.setItem("udataCache", JSON.stringify(this.userData))
                }, GameData.prototype.inviteNew = function() {}, GameData.prototype.dailyInvite = function() {}, GameData.prototype.subscribe = function() {
                    var data = {
                        openid: this.userData.openid
                    };
                    HttpNet_1.HttpNet.Instance.request(this.subscribe_url, function(data, url) {
                        console.log("[request data]", data)
                    }, this, data, "POST")
                }, GameData.prototype.clearData = function() {
                    var userData = this.userData;
                    ResConfig_1.ResConfig.IsDebug ? (userData.gold = new Decimal(2e30), userData.diamond = new Decimal(300), GuideView_1.default.Instance.isGuide = !0) : (userData.gold = new Decimal(1e3), userData.diamond = new Decimal(0), GuideView_1.default.Instance.isGuide = !0), userData.guanka = 0, userData.unlockPlants = {
                        10101: {
                            id: 10101,
                            count: 0
                        }
                    }, userData.diamondBuy = {}, userData.hechengPlants = [10101], userData.slotPlants = {
                        1: {
                            slot: 1,
                            id: 10101,
                            isShow: !0,
                            isUnlock: !0,
                            bianyiId: 0
                        }
                    }, userData.dianAdDay = 0, userData.dianAdTimes = 0, userData.guideIds = [], userData.newModuleIds = [], userData.lastAwardTime = 0, userData.zhuanpanFreeTimes = 0, userData.zhuanpanAdTimes = 0, userData.today = 0, userData.tianfuIds = [], userData.tianfuFreeTimes = 0, userData.tianfuYaoqingTimes = 0, userData.freeGoldTimes = 0, userData.shareTimesDic = {}, userData.addProgramReward = 0, userData.skills = {}, userData.addSkillTimes = 0, userData.zhalanIds = [], userData.useZhaLanId = 0, userData.loginDay = 0, userData.bestLvPlantPassTimes = {
                        id: -1,
                        count: 0
                    }, userData.subscribeIds = [], userData.tujianIds = [], userData.userInfo = null, userData.dailySlotInfo = {}, userData.tujianAwardIds = []
                }, GameData.prototype.initData = function() {
                    var today = (new Date).getDate();
                    today != this.today && (this.today = today, this.initKuaTian(), this.loginDay++), this._pathWidth = (Laya.stage.width - 100) / GameData.MaxPath;
                    this.userData;
                    this.initSlotPlants(), this.initSkills(), this.initDailyInfos(), WxSDK_1.default.Instance.setUserCloudStorage(), this.inviteNew(), this.dailyInvite()
                }, GameData.prototype.initDailyInfos = function() {
                    for (var dailyInfos = this.dailyInfos = [], i = 0; i < 20; i++) {
                        var info = {};
                        info.slot = i, dailyInfos.push(info)
                    }
                }, GameData.prototype.getDailyInfos = function() {
                    var list = this.dailyInviteList,
                        dailySlotInfo = this.dailySlotInfo,
                        oldPlayerIds = [];
                    for (var key in dailySlotInfo) {
                        var info = dailySlotInfo[key];
                        oldPlayerIds.push(info.openid)
                    }
                    var newPlayers = [];
                    for (var key in list) {
                        var element = list[key],
                            openid = element.openid; - 1 == oldPlayerIds.indexOf(openid) && newPlayers.push(element)
                    }
                    for (var infos = this.dailyInfos, len = infos.length, i = 0; i < len; i++) {
                        var slotInfo = dailySlotInfo[(info = infos[i]).slot];
                        if (slotInfo) infos[i] = slotInfo;
                        else if (newPlayers.length > 0) {
                            var player = newPlayers.shift();
                            player.openid && (info.head = player.avatar, info.openid = player.openid, info.state = 0, dailySlotInfo[info.slot] = info)
                        }
                    }
                    return this.dailyInfos
                }, GameData.prototype.initTuJian = function() {
                    for (var tujianIds = this.tujianIds, cfgs = Confings_1.default.Instance.tuJianCfg, len = cfgs.length, i = 0; i < len; i++) {
                        var cfg = cfgs[i],
                            guankaCfg = Confings_1.default.Instance.getGuankaById(cfg.unlockid);
                        guankaCfg && guankaCfg.guanka <= this.guanka && -1 == tujianIds.indexOf(cfg.monsterid) && tujianIds.push(cfg.monsterid)
                    }
                }, GameData.prototype.initZhaLan = function() {
                    var ids = this.zhalanIds;
                    0 == ids.length && (ids.push(1), this.useZhaLanId = 1);
                    for (var data = Confings_1.default.Instance.zhalanCfg, zhalanIds = this.zhalanIds, guanka = this.guanka + 1, i = 0; i < data.length; i++) {
                        var cfg = data[i];
                        !(-1 != zhalanIds.indexOf(cfg.id)) && 5 == cfg.type && cfg.num <= guanka && zhalanIds.push(cfg.id)
                    }
                    this.useZhaLanId || (this.useZhaLanId = 1)
                }, GameData.prototype.initKuaTian = function() {
                    this.zhuanpanFreeTimes = 0, this.zhuanpanAdTimes = 0, this.tianfuFreeTimes = 0, this.freeGoldTimes = 0, this.addProgramReward = 0, this.subscribeReward = 0, this.addSkillTimes = 0, this.shareTimesDic = {}, this.dailySlotInfo = {}
                }, GameData.prototype.initLastUnlock = function() {
                    var dic = this.lastUnlockIdByType,
                        plants = this.userData.unlockPlants;
                    for (var key in plants) {
                        var plant = plants[key],
                            cfg = Confings_1.default.Instance.getPlantById(+plant.id);
                        if (cfg)(dic[cfg.type] || 0) < cfg.id && (dic[cfg.type] = +plant.id)
                    }
                }, GameData.prototype.initSlotPlants = function() {
                    var slotPlants = this.userData.slotPlants;
                    slotPlants || (slotPlants = this.userData.slotPlants = {});
                    for (var i = 0; i < 15; i++) {
                        var vo = slotPlants[i];
                        vo || ((vo = slotPlants[i] = new PlantSlotVO_1.default).slot = i, vo.id = 0, vo.isShow = !1, vo.isUnlock = !1)
                    }
                }, GameData.prototype.initSkills = function() {
                    var skills = this.userData.skills,
                        useSkillState = this._useSkillState = {};
                    skills || (skills = this.userData.skills = {});
                    for (var i = 0; i < 3; i++) {
                        var vo = skills[i];
                        vo || (vo = skills[i] = {
                            id: i,
                            count: 1
                        }), useSkillState[i] = !1
                    }
                }, GameData.prototype.getSkillState = function(id) {
                    return this._useSkillState[id]
                }, GameData.prototype.setSkillState = function(id, state) {
                    this._useSkillState[id] = state
                }, Object.defineProperty(GameData.prototype, "skills", {
                    get: function() {
                        return this.userData.skills
                    },
                    enumerable: !0,
                    configurable: !0
                }), GameData.prototype.skillCount = function(id) {
                    return this.userData.skills[id]
                }, GameData.prototype.addSkillCount = function(id, count) {
                    var vo = this.userData.skills[id];
                    this.userData.addSkillTimes++, vo.count += count
                }, GameData.prototype.useSkill = function(id) {
                    var skills = this.userData.skills;
                    if (skills) {
                        var vo = skills[id];
                        return vo.count > 0 ? (vo.count--, this.userData.skills[id] = vo, vo.count) : 0
                    }
                }, GameData.prototype.addGold = function(value) {
                    "number" == typeof value && (value = new Decimal(value)), this.userData.gold = this.userData.gold.add(value), MessageCenter_1.MessageCenter.Instance.dispatch("gold_update")
                }, Object.defineProperty(GameData.prototype, "gold", {
                    get: function() {
                        return this.userData.gold
                    },
                    set: function(value) {
                        this.userData.gold = value, MessageCenter_1.MessageCenter.Instance.dispatch("gold_update")
                    },
                    enumerable: !0,
                    configurable: !0
                }), GameData.prototype.addDiamond = function(value) {
                    "number" == typeof value && (value = new Decimal(value)), this.userData.diamond = this.userData.diamond.add(value), MessageCenter_1.MessageCenter.Instance.dispatch("diamond_update")
                }, Object.defineProperty(GameData.prototype, "diamond", {
                    get: function() {
                        return this.userData.diamond
                    },
                    set: function(value) {
                        this.userData.diamond = value, MessageCenter_1.MessageCenter.Instance.dispatch("diamond_update")
                    },
                    enumerable: !0,
                    configurable: !0
                }), GameData.prototype.getPathCenterX = function(path) {
                    var w = this._pathWidth;
                    return Math.floor(w * path + w / 2)
                }, GameData.prototype.getBuyPlantByType = function(type) {
                    var lastId = this.lastUnlockIdByType[type];
                    if (lastId) return Confings_1.default.Instance.getPlantById(lastId);
                    var cfgs = Confings_1.default.Instance.getPlantsByType(type);
                    return cfgs ? cfgs[0] : void 0
                }, GameData.prototype.getBuyCheapestPlant = function() {
                    for (var cheapestCfg, cheapest = new Decimal(1 / 0), i = 1; i <= 3; i++) {
                        var cfg = this.getBuyPlantByType(i);
                        cfg.id;
                        if (this.isPlantUnlock(cfg.id)) {
                            var cost = GameData.Instance.getBuyPlantCost(cfg.id);
                            cost.lt(cheapest) && (cheapest = cost, cheapestCfg = cfg)
                        }
                    }
                    return cheapestCfg
                }, GameData.prototype.getHechengBestLvPlant = function(type) {
                    var ids = this.userData.hechengPlants,
                        lv = 0;
                    for (var key in ids) {
                        var id = ids[key],
                            cfg = Confings_1.default.Instance.getPlantById(id);
                        cfg && cfg.type == type && cfg.level > lv && (lv = cfg.level)
                    }
                    return lv
                }, Object.defineProperty(GameData.prototype, "slotPlants", {
                    get: function() {
                        return this.userData.slotPlants
                    },
                    enumerable: !0,
                    configurable: !0
                }), GameData.prototype.clearSlotPlantByIndex = function(index) {
                    var plant = this.userData.slotPlants[index];
                    plant.id = 0, plant.bianyiId = 0
                }, GameData.prototype.isPlantUnlock = function(id) {
                    return !!this.userData.unlockPlants[id]
                }, GameData.prototype.isPlantHeCheng = function(id) {
                    return -1 != this.userData.hechengPlants.indexOf(id)
                }, GameData.prototype.checkHechengBianyi = function(cfg, index) {
                    var id = cfg.id;
                    if (-1 != this.userData.hechengPlants.indexOf(id) && cfg.bianyi) {
                        var random = 100 * Math.random(),
                            arr = cfg.bianyi.split(";"),
                            temmpRate = 0,
                            bianyiId = void 0;
                        for (var key in arr) {
                            var strArr = arr[key].split(","),
                                rate = +strArr[0] + temmpRate;
                            temmpRate = rate;
                            var id_1 = +strArr[1];
                            if (random < rate) {
                                bianyiId = id_1;
                                break
                            }
                        }
                        return bianyiId && (LayerRoot_1.default.Instance.openScene("dialog/PlantBianyi.scene", !1, [index, bianyiId]), console.log("[合成变异植物，变异属性id]", bianyiId), DDSDK.logEvent("bianyihecheng", {})), bianyiId
                    }
                }, GameData.prototype.checkLuckyHecheng = function(cfg) {
                    if (cfg) {
                        var id = cfg.id;
                        if (-1 != this.userData.hechengPlants.indexOf(id)) {
                            var bestLv = this.getHechengBestLvPlant(cfg.type);
                            if (cfg.level != bestLv && cfg.level != bestLv - 1) {
                                var lucky = cfg.lucky;
                                if (lucky)
                                    for (var arr = lucky.split(";"), len = arr.length, currProp = 0, random = 100 * Math.random(), i = 0; i < len; i++) {
                                        var temp = arr[i].split(",");
                                        if (temp.length > 1) {
                                            var prop = +temp[0],
                                                id_2 = +temp[1];
                                            if (random < (currProp += prop)) return Confings_1.default.Instance.getPlantById(id_2)
                                        }
                                    }
                            }
                        }
                    }
                }, GameData.prototype.hechengPlant = function(cfg, index) {
                    -1 == this.guideIds.indexOf(1) && GuideView_1.default.Instance.hideGuide();
                    var userData = this.userData;
                    SoundManager_1.default.Instance.playHeCheng();
                    var id = cfg.id;
                    if (-1 == userData.hechengPlants.indexOf(id) && id && (userData.hechengPlants.push(id), this.bestLvPlantPassTimes.id < id && (this.bestLvPlantPassTimes.id = id, this.bestLvPlantPassTimes.count = 0), Laya.Browser.window.h5api.canPlayAd() && MessageCenter_1.MessageCenter.Instance.dispatch("hehceng_new_plant", cfg)), !userData.unlockPlants[id]) {
                        var unlockId = cfg.unlock;
                        if (!userData.unlockPlants[unlockId])(unlockCfg = Confings_1.default.Instance.getPlantById(unlockId)) && (userData.unlockPlants[unlockId] = {
                            id: unlockCfg.id,
                            count: 0
                        }, this.lastUnlockIdByType[unlockCfg.type] = unlockId, MessageCenter_1.MessageCenter.Instance.dispatch("unlock_plant_update", unlockCfg));
                        var unlockCfg, diamondUnlock = cfg.diamunlock;
                        if (!userData.diamondBuy[diamondUnlock])(unlockCfg = Confings_1.default.Instance.getPlantById(diamondUnlock)) && (userData.diamondBuy[diamondUnlock] = {
                            id: diamondUnlock,
                            count: 0
                        })
                    }
                }, GameData.prototype.hasEmptySlot = function() {
                    var slotPlants = this.userData.slotPlants;
                    for (var key in slotPlants) {
                        var element = slotPlants[key];
                        if (element && element.isUnlock && !element.id) return !0
                    }
                }, GameData.prototype.checkGoldEnough = function(need) {
                    return !this.gold.lt(need) || (FreeGoldDialog_1.default.MaxFreeTimes > this.freeGoldTimes && Laya.Browser.window.h5api.canPlayAd() ? LayerRoot_1.default.Instance.openScene("dialog/FreeGold.scene", !1) : CoreFunction_1.CoreFunction.tipMsg("Thiếu xu"), !1)
                }, GameData.prototype.checkDiamondEnough = function(need) {
                    return !this.diamond.lt(need) || (CoreFunction_1.CoreFunction.isTishen(), !1)
                }, GameData.prototype.buyPlant = function(cfg) {
                    if (!this.hasEmptySlot()) return CoreFunction_1.CoreFunction.tipMsg("Không còn chỗ trống, hãy mở thêm");
                    var id = cfg.id,
                        idCount = this.userData.unlockPlants[id];
                    if (idCount) {
                        var cost = this.getBuyPlantCost(id);
                        if (this.checkGoldEnough(cost)) return this.addGold(-cost), idCount.count++, MessageCenter_1.MessageCenter.Instance.dispatch("buy_plant_update", cfg), !0
                    }
                }, GameData.prototype.diamondBuyPlant = function(cfg) {
                    if (!this.hasEmptySlot()) return CoreFunction_1.CoreFunction.tipMsg("Không còn chỗ trống, hãy mở thêm");
                    var id = cfg.id,
                        idCount = this.userData.diamondBuy[id];
                    idCount || (idCount = this.userData.diamondBuy[id] = {
                        id: id,
                        count: 0
                    });
                    var cost = this.getBuyPlantDiamondCost(id);
                    return this.checkDiamondEnough(cost) ? (this.addDiamond(-cost), idCount.count++, MessageCenter_1.MessageCenter.Instance.dispatch("buy_plant_update", cfg), !0) : void 0
                }, GameData.prototype.getBuyPlantCost = function(id) {
                    var buyTimes = 0,
                        idCount = this.userData.unlockPlants[id];
                    idCount && (buyTimes = idCount.count || 0);
                    var cfg = Confings_1.default.Instance.getPlantById(id);
                    if (cfg) {
                        var tianfuFactor = GameData.Instance.getTianFuAwardByType(Constant_1.TianFuType.type2);
                        return new Decimal(1 + cfg.saleRate).pow(buyTimes).mul(cfg.sale).mul(tianfuFactor)
                    }
                }, GameData.prototype.getBuyPlantDiamondCost = function(id) {
                    var buyTimes = 0,
                        idCount = this.userData.diamondBuy[id];
                    idCount && (buyTimes = idCount.count || 0);
                    var cfg = Confings_1.default.Instance.getPlantById(id);
                    if (cfg) return new Decimal(cfg.diamond).add(cfg.diamondAdd * buyTimes)
                }, GameData.prototype.getSaleGold = function(id) {
                    var cfg = Confings_1.default.Instance.getPlantById(id);
                    if (cfg) return new Decimal(cfg.sale)
                }, GameData.prototype.unlockPlantByGuanka = function(guanka) {
                    var type, cfg;
                    switch (guanka) {
                        case 1:
                            type = Constant_1.PlantType.Single;
                            var cfgs = Confings_1.default.Instance.getPlantsByType(type);
                            cfg = cfgs[0];
                            break;
                        case 3:
                            type = Constant_1.PlantType.Buff, cfg = (cfgs = Confings_1.default.Instance.getPlantsByType(type))[0];
                            break;
                        case 5:
                            type = Constant_1.PlantType.Range, cfg = (cfgs = Confings_1.default.Instance.getPlantsByType(type))[0]
                    }
                    if (cfg) {
                        var id = cfg.id;
                        this.lastUnlockIdByType[type] = id, this.userData.unlockPlants[id] = {
                            id: cfg.id,
                            count: 0
                        }, -1 == this.userData.hechengPlants.indexOf(id) && id && this.userData.hechengPlants.push(id), MessageCenter_1.MessageCenter.Instance.dispatch("unlock_plant_update", cfg)
                    }
                }, GameData.prototype.updateNewSlotsByGuanKa = function(guanka) {
                    var hasNew = !1,
                        slotPlants = this.userData.slotPlants;
                    for (var key in slotPlants) {
                        var slotPlant = slotPlants[key],
                            unlockCfg = Confings_1.default.Instance.getUnlockCfgById(slotPlant.slot);
                        unlockCfg && unlockCfg.guanka <= guanka && (slotPlant.isShow || (slotPlant.isShow = !0, hasNew = !0), slotPlant.isUnlock || (slotPlant.isUnlock = unlockCfg.cost <= 0))
                    }
                    hasNew && MessageCenter_1.MessageCenter.Instance.dispatch("plant_slot_update")
                }, GameData.prototype.getBuyBestCost = function() {
                    for (var bestCost = new Decimal(0), i = 1; i < 4; i++) {
                        var cfg = this.getBuyPlantByType(i);
                        if (cfg) {
                            var cost = GameData.Instance.getBuyPlantCost(cfg.id);
                            bestCost.lte(cost) && (bestCost = cost)
                        }
                    }
                    return bestCost
                }, GameData.prototype.getTianFuAwardByType = function(type) {
                    for (var total = 0, tianfuIds = [], i = 0; i < this.maxInviteCount; i++) tianfuIds.push(i + 1);
                    if (2 != type) {
                        for (var key in tianfuIds) {
                            var id = tianfuIds[key];
                            (cfg = Confings_1.default.Instance.getTianFuCfgById(id)) && cfg.type == type && (total += cfg.value / 100)
                        }
                        total += 1
                    } else {
                        var arr = [];
                        for (var key in tianfuIds) {
                            var cfg;
                            id = tianfuIds[key];
                            (cfg = Confings_1.default.Instance.getTianFuCfgById(id)) && cfg.type == type && arr.push(Math.abs(cfg.value))
                        }
                        arr.sort(function(a, b) {
                            return a - b
                        }), total = (1 - (arr[0] || 0) / 100) * (1 - (arr[1] || 0) / 100) * (1 - (arr[2] || 0) / 100)
                    }
                    return total
                }, GameData.prototype.updateBestLvPlant = function() {
                    this.bestLvPlantPassTimes.count++
                }, GameData.prototype.getJieSuanGold = function() {
                    var lastUnlockIdByType = this.lastUnlockIdByType,
                        count = 0,
                        all = 0;
                    for (var key in lastUnlockIdByType) {
                        var id = lastUnlockIdByType[key];
                        if (id > 0) {
                            var cfg = Confings_1.default.Instance.getPlantById(id);
                            cfg && (all += cfg.sale || 0, count++)
                        }
                    }
                    return all / count * (1 + .2 * this.bestLvPlantPassTimes.count) + 50 * this.guanka
                }, GameData.prototype.getUnlockZhaLanMaxId = function() {
                    for (var max = -1, ids = this.zhalanIds, i = 0; i < ids.length; i++) {
                        var id = ids[i];
                        max < id && (max = id)
                    }
                    return max
                }, GameData.prototype.updataUnlockIds = function() {
                    for (var data = Confings_1.default.Instance.zhalanCfg, zhalanIds = GameData.Instance.zhalanIds, guanka = GameData.Instance.guanka + 1, i = 0; i < data.length; i++) {
                        var cfg = data[i];
                        !(-1 != zhalanIds.indexOf(cfg.id)) && 5 == cfg.type && cfg.num <= guanka && (zhalanIds.push(cfg.id), 1 != cfg.id && 2 != cfg.id && LayerRoot_1.default.Instance.openScene("dialog/UnlockZhaLan.scene", !1, cfg))
                    }
                }, GameData.prototype.getNewMonster = function(id) {
                    var cfg = Confings_1.default.Instance.getTuJianById(id);
                    if (cfg && (!(-1 != this.tujianIds.indexOf(cfg.monsterid)) && (this.tujianIds.push(cfg.monsterid), MessageCenter_1.MessageCenter.Instance.dispatch("monster_new_tujian"), 101 != id))) return cfg
                }, GameData.prototype.checkZhaLanOpen = function() {
                    return !CoreFunction_1.CoreFunction.isTishen() && this.currGuanka >= 10
                }, GameData.prototype.checkZhaLanHpOpen = function() {
                    return this.currGuanka >= this.zhaLanHpOpenGuanka
                }, Object.defineProperty(GameData.prototype, "zhaLanHpOpenGuanka", {
                    get: function() {
                        return 6
                    },
                    enumerable: !0,
                    configurable: !0
                }), GameData.prototype.checkZhuanPanOpen = function() {
                    return this.currGuanka >= 7
                }, GameData.prototype.checkInviteNewOpen = function() {
                    return !1
                }, GameData.prototype.checkSkillOpen = function() {
                    return this.currGuanka >= 5
                }, GameData.prototype.checkSubscribeId = function(tempId) {
                    return !tempId || -1 != this.userData.subscribeIds.indexOf(tempId)
                }, GameData.prototype.insertSubscribe = function(tempId) {
                    tempId && "" != tempId ? this.userData.subscribeIds.push(tempId) : console.error("非法订阅模板id")
                }, GameData.prototype.checkTujianAward = function(id) {
                    return -1 == GameData.Instance.tujianAwardIds.indexOf(id)
                }, GameData.prototype.checkTujianUnlock = function(id) {
                    if (-1 != GameData.Instance.tujianIds.indexOf(id)) return !0
                }, GameData.prototype.checkDiamondBuy = function() {
                    return !!this.checkDiamondBuyByType(Constant_1.PlantType.Single) || (!!this.checkDiamondBuyByType(Constant_1.PlantType.Buff) || (!!this.checkDiamondBuyByType(Constant_1.PlantType.Range) || void 0))
                }, GameData.prototype.checkDiamondBuyByType = function(type) {
                    for (var plants = Confings_1.default.Instance.getPlantsByType(type), len = plants.length, i = 0; i < len; i++) {
                        var cfg = plants[i];
                        if (!GameData.Instance.isPlantUnlock(cfg.id)) {
                            var diamondUnlockCfg = Confings_1.default.Instance.getDiamondUnlockPlantById(cfg.id);
                            if (diamondUnlockCfg)
                                if (GameData.Instance.isPlantHeCheng(diamondUnlockCfg.id)) {
                                    var cost = GameData.Instance.getBuyPlantDiamondCost(cfg.id);
                                    if (this.diamond.gte(cost)) return !0
                                }
                        }
                    }
                }, GameData.prototype.isGoldGuanKa = function(guanka) {
                    var cfgs = Confings_1.default.Instance.getGuankaTurns(guanka);
                    if (cfgs && cfgs.length > 0) return 2 == cfgs[0].guankatype
                }, GameData.prototype.isNewModule = function(moduleName) {
                    return -1 == this.newModuleIds.indexOf(moduleName)
                }, GameData.MaxPath = 5, GameData.MaxAddSkillTimes = 10, GameData
            }();
        exports.default = GameData
    }, {
        "../../wxSDK/HttpNet": 109,
        "../../wxSDK/SoundManager": 111,
        "../../wxSDK/WxSDK": 113,
        "../cfgs/PlantSlotVO": 3,
        "../core/Constant": 6,
        "../core/CoreFunction": 7,
        "../core/DateUtil": 8,
        "../core/MathEx": 9,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../dialog/FreeGoldDialog": 30,
        "../scene/LayerRoot": 52,
        "../view/GuideView": 100,
        "./Confings": 23
    }],
    25: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            AddMiniProgramDialog = function(_super) {
                function AddMiniProgramDialog() {
                    return _super.call(this) || this
                }
                return __extends(AddMiniProgramDialog, _super), AddMiniProgramDialog.prototype.onEnable = function() {
                    this.btnClose.getComponent(ButtonClick_1.default).setCallBack(this.close, this)
                }, AddMiniProgramDialog
            }(layaMaxUI_1.ui.dialog.AddMiniProgramUI);
        exports.default = AddMiniProgramDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../script/ButtonClick": 55
    }],
    26: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            GameData_1 = require("../data/GameData"),
            MessageCenter_1 = require("../core/MessageCenter"),
            AddProgramAlertDialog = function(_super) {
                function AddProgramAlertDialog() {
                    var _this = _super.call(this) || this;
                    return _this.rewardCount = 0, _this
                }
                return __extends(AddProgramAlertDialog, _super), AddProgramAlertDialog.prototype.onEnable = function() {
                    var _this = this;
                    this.btnClose.getComponent(ButtonClick_1.default).setCallBack(function() {
                        for (var index = 0; index < 3; index++) GameData_1.default.Instance.addSkillCount(index, _this.rewardCount);
                        MessageCenter_1.MessageCenter.Instance.dispatch("update_skill_count"), _this.close()
                    }, this)
                }, AddProgramAlertDialog.prototype.onOpened = function(parmas) {
                    parmas.title;
                    var count = this.rewardCount = parmas.count;
                    count || (count = this.rewardCount = 1), this.countTxt1.text = this.countTxt2.text = this.countTxt3.text = "+" + count
                }, AddProgramAlertDialog
            }(layaMaxUI_1.ui.dialog.AddProgramAlertDialogUI);
        exports.default = AddProgramAlertDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../core/MessageCenter": 10,
        "../data/GameData": 24,
        "../script/ButtonClick": 55
    }],
    27: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            Confings_1 = require("../data/Confings"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            String_1 = require("../core/basic/String"),
            GameData_1 = require("../data/GameData"),
            MessageCenter_1 = require("../core/MessageCenter"),
            GameControl_1 = require("../script/GameControl"),
            CoreFunction_1 = require("../core/CoreFunction"),
            GameConfig_1 = require("../../GameConfig"),
            ResConfig_1 = require("../core/ResConfig"),
            AwardDialog = function(_super) {
                function AwardDialog() {
                    return _super.call(this) || this
                }
                return __extends(AwardDialog, _super), AwardDialog.prototype.checkBtnVideo = function() {
                    var shareCfg = Confings_1.default.Instance.getAppCfg();
                    if (shareCfg) {
                        var str = shareCfg.lixian,
                            isVideo = ShareManager_1.ShareManager.Instance.isVideo(str, "lixian");
                        this.adImg.visible = !0, this.adImg.skin = ResConfig_1.ResConfig.getMainUrl(isVideo ? "zwujs_icon_ship1" : "nczjs_icon_fenxb1")
                    }
                }, AwardDialog.prototype.onGet = function() {
                    GameData_1.default.Instance.addGold(this.gold), MessageCenter_1.MessageCenter.Instance.dispatch("award_get_succ"), this.close()
                }, AwardDialog.prototype.onShare = function() {
                    var _this = this;
                    Laya.Browser.window.h5api.canPlayAd() ? Laya.Browser.window.h5api.playAd(function(data) {
                        if (Laya.Browser.window.console.log("播放广告回调数据", data), data && "10001" == data.code) {
                            var gold_1 = _this.gold.mul(3);
                            GameData_1.default.Instance.addGold(gold_1), MessageCenter_1.MessageCenter.Instance.dispatch("award_get_succ"), CoreFunction_1.CoreFunction.showFlyGold(GameConfig_1.default.width / 2, GameConfig_1.default.height / 2, 12, 13), Laya.timer.once(700, _this, function() {
                                CoreFunction_1.CoreFunction.tipMsg("Nhận " + String_1.StringUtil.decimalFormat(gold_1) + " xu")
                            }), Laya.Browser.window.h5api.canPlayAd() || (MessageCenter_1.MessageCenter.Instance.dispatch("no_ad"), _this.getMoreBtn.visible = !1), _this.close()
                        }
                    }) : Laya.Browser.window.console.log("没有广告资源可播放")
                }, AwardDialog.prototype.callback = function(succ) {
                    if (void 0 === succ && (succ = !0), succ) {
                        var gold_2 = this.gold.mul(3);
                        GameData_1.default.Instance.addGold(gold_2), MessageCenter_1.MessageCenter.Instance.dispatch("award_get_succ"), CoreFunction_1.CoreFunction.showFlyGold(GameConfig_1.default.width / 2, GameConfig_1.default.height / 2, 12, 13), Laya.timer.once(700, this, function() {
                            CoreFunction_1.CoreFunction.tipMsg("Nhận " + String_1.StringUtil.decimalFormat(gold_2) + " xu")
                        }), DDSDK.logEvent("jinbijianglisanbei", {}), this.close()
                    } else this.checkBtnVideo()
                }, AwardDialog.prototype.onEnable = function() {
                    var myBtn = this.closeBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.close, this), (myBtn = this.getBtn.getComponent(ButtonClick_1.default)).setCallBack(this.onGet, this), Laya.Browser.window.h5api.canPlayAd() || (this.getMoreBtn.visible = !1), (myBtn = this.getMoreBtn.getComponent(ButtonClick_1.default)).setCallBack(this.onShare, this), DDSDK.logEvent("jinbijiemian", {})
                }, AwardDialog.prototype.onOpened = function(params) {
                    this.gold = new Decimal(params[0]), this.goldTxt.text = "+" + String_1.StringUtil.decimalFormat(this.gold), this.checkBtnVideo(), GameControl_1.default.Instance.pauseGame()
                }, AwardDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame()
                }, AwardDialog
            }(layaMaxUI_1.ui.dialog.AwardUI);
        exports.default = AwardDialog
    }, {
        "../../GameConfig": 1,
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../core/basic/String": 14,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    28: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            GameData_1 = require("../data/GameData"),
            ButtonClick_1 = require("../script/ButtonClick"),
            ResConfig_1 = require("../core/ResConfig"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            CoreFunction_1 = require("../core/CoreFunction"),
            DailyAwardDialog = function(_super) {
                function DailyAwardDialog() {
                    var _this = _super.call(this) || this;
                    return _this.awardCount = 80, _this.listData = [], _this
                }
                return __extends(DailyAwardDialog, _super), DailyAwardDialog.prototype.onListRender = function(cell, index) {
                    var _this = this;
                    if (this.listData) {
                        var info = this.listData[index],
                            headIcon = cell.getChildByName("headIcon"),
                            awardCount = cell.getChildByName("awardCount"),
                            hasGetTxt = cell.getChildByName("hasGetTxt"),
                            hasGetImg = cell.getChildByName("hasGetImg"),
                            addBtn = cell.getChildByName("addBtn"),
                            inviteBtn = cell.getChildByName("inviteBtn"),
                            getBtn = cell.getChildByName("getBtn"),
                            myBtn = addBtn.getComponent(ButtonClick_1.default);
                        myBtn.setCallBack(function() {
                            _this.onShareBtn(), DDSDK.logEvent("meirizuanshijiemian", {})
                        }, this), (myBtn = inviteBtn.getComponent(ButtonClick_1.default)).setCallBack(function() {
                            _this.onShareBtn(), DDSDK.logEvent("meirizuanshiyaoqing", {})
                        }, this), (myBtn = getBtn.getComponent(ButtonClick_1.default)).setCallBack(function() {
                            info.state || (info.state = 1, addBtn.visible = inviteBtn.visible = getBtn.visible = !1, hasGetTxt.visible = hasGetImg.visible = !0, GameData_1.default.Instance.dailySlotInfo[index] = info, GameData_1.default.Instance.addDiamond(_this.awardCount), CoreFunction_1.CoreFunction.tipMsg("Nhận " + _this.awardCount + " kim cương"), DDSDK.logEvent("meirizuanshigetsuccess", {}))
                        }, this), info.head ? headIcon.skin = info.head : headIcon.skin = ResConfig_1.ResConfig.getMainUrl("nczjs_img_mrjltx3"), headIcon.visible = !!info.openid, hasGetTxt.visible = hasGetImg.visible = 1 == info.state, addBtn.visible = getBtn.visible = inviteBtn.visible = !info.openid, getBtn.visible = !!info.openid && !info.state, awardCount.text = "x" + this.awardCount
                    }
                }, DailyAwardDialog.prototype.onShareBtn = function() {
                    ShareManager_1.ShareManager.Instance.doShareMessage(null, !0)
                }, DailyAwardDialog.prototype.onEnable = function() {
                    this.closeBtn.getComponent(ButtonClick_1.default).setCallBack(this.close, this);
                    var list = this.list;
                    list.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), list.vScrollBarSkin = "", list.visible = !1
                }, DailyAwardDialog.prototype.onOpened = function() {
                    GameData_1.default.Instance.dailyInvite(), GameControl_1.default.Instance.pauseGame(), this.listData = GameData_1.default.Instance.getDailyInfos(), this.list.array = this.listData, this.list.visible = !0
                }, DailyAwardDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame()
                }, DailyAwardDialog
            }(layaMaxUI_1.ui.dialog.DailyAwardUI);
        exports.default = DailyAwardDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../core/CoreFunction": 7,
        "../core/ResConfig": 11,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    29: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            GameData_1 = require("../data/GameData"),
            MessageCenter_1 = require("../core/MessageCenter"),
            Confings_1 = require("../data/Confings"),
            ResConfig_1 = require("../core/ResConfig"),
            CoreFunction_1 = require("../core/CoreFunction"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            GameControl_1 = require("../script/GameControl"),
            VideoManager_1 = require("../../wxSDK/VideoManager"),
            StartScene_1 = require("../scene/StartScene"),
            FlySkillBoxAlertDialog = function(_super) {
                function FlySkillBoxAlertDialog() {
                    return _super.call(this) || this
                }
                return __extends(FlySkillBoxAlertDialog, _super), FlySkillBoxAlertDialog.prototype.checkBtnVideo = function() {
                    var shareCfg = Confings_1.default.Instance.getAppCfg();
                    if (shareCfg) {
                        var str = shareCfg.flybox,
                            isVideo = ShareManager_1.ShareManager.Instance.isVideo(str, "flybox");
                        this.adImg.visible = !0, this.adImg.skin = ResConfig_1.ResConfig.getMainUrl(isVideo ? "zwujs_icon_ship1" : "nczjs_icon_fenxb1")
                    }
                }, FlySkillBoxAlertDialog.prototype.onEnable = function() {
                    var _this = this;
                    if (!GameData_1.default.Instance.skillBoxId) {
                        var random = 100 * Math.random();
                        GameData_1.default.Instance.skillBoxId = random < 25 ? 0 : random < 35 ? 1 : random < 60 ? 2 : 9999
                    }
                    this.updateData(), this.awardCount.text = "+" + this.count, this.checkBtnVideo();
                    var myBtn = this.closeBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.close, this), this.closeBtn.visible = !1, Laya.timer.once(2700, this, function() {
                        _this.closeBtn.visible = !0
                    }), Laya.Browser.window.h5api.canPlayAd() || (this.btnGet.visible = !1), (myBtn = this.btnGet.getComponent(ButtonClick_1.default)).setCallBack(this.onShare, this)
                }, FlySkillBoxAlertDialog.prototype.updateData = function() {
                    this.isDaimond() ? this.updateDiamondData() : this.updateSkillDataById(GameData_1.default.Instance.skillBoxId)
                }, FlySkillBoxAlertDialog.prototype.updateDiamondData = function() {
                    this.count = 80, this.cfgName = this.awardName.text = "Kim cương", this.skillicon.skin = ResConfig_1.ResConfig.getMainUrl("nczjs_icon_9")
                }, FlySkillBoxAlertDialog.prototype.updateSkillDataById = function(id) {
                    this.count = 1 == id ? 2 : 1 == id ? 3 : 2;
                    var cfg = Confings_1.default.Instance.getSkillById(id);
                    cfg && (this.cfgName = this.awardName.text = cfg.name, this.skillicon.skin = ResConfig_1.ResConfig.getMainUrl(cfg.pic))
                }, FlySkillBoxAlertDialog.prototype.isDaimond = function() {
                    return 9999 == GameData_1.default.Instance.skillBoxId
                }, FlySkillBoxAlertDialog.prototype.onShare = function() {
                    var _this = this;
                    Laya.Browser.window.h5api.canPlayAd() ? Laya.Browser.window.h5api.playAd(function(data) {
                        Laya.Browser.window.console.log("播放广告回调数据", data), data && "10001" == data.code && (_this.isDaimond() ? (GameData_1.default.Instance.addDiamond(_this.count), CoreFunction_1.CoreFunction.tipMsg("Nhận " + _this.count + " kim cương")) : (GameData_1.default.Instance.addSkillCount(GameData_1.default.Instance.skillBoxId, _this.count), MessageCenter_1.MessageCenter.Instance.dispatch("update_skill_count"), CoreFunction_1.CoreFunction.tipMsg(_this.cfgName + "Kỹ năng +" + _this.count)), GameData_1.default.Instance.skillBoxId = void 0, StartScene_1.default.Instance.hideSkillBox(), Laya.Browser.window.h5api.canPlayAd() || (MessageCenter_1.MessageCenter.Instance.dispatch("no_ad"), _this.btnGet.visible = !1), _this.close())
                    }) : Laya.Browser.window.console.log("没有广告资源可播放")
                }, FlySkillBoxAlertDialog.prototype.callback = function(succ) {
                    void 0 === succ && (succ = !0), succ ? (this.isDaimond() ? (GameData_1.default.Instance.addDiamond(this.count), CoreFunction_1.CoreFunction.tipMsg("Nhận " + this.count + " kim cương")) : (GameData_1.default.Instance.addSkillCount(GameData_1.default.Instance.skillBoxId, this.count), MessageCenter_1.MessageCenter.Instance.dispatch("update_skill_count"), CoreFunction_1.CoreFunction.tipMsg(this.cfgName + "Kỹ năng +" + this.count)), GameData_1.default.Instance.skillBoxId = void 0, StartScene_1.default.Instance.hideSkillBox(), this.close(), DDSDK.logEvent("flyboxsuccess", {})) : this.checkBtnVideo()
                }, FlySkillBoxAlertDialog.prototype.onOpened = function(parmas) {
                    GameControl_1.default.Instance.pauseGame(), VideoManager_1.VideoManager.Instance.showBannerAd()
                }, FlySkillBoxAlertDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame(), VideoManager_1.VideoManager.Instance.hideBannerAd()
                }, FlySkillBoxAlertDialog
            }(layaMaxUI_1.ui.dialog.FlySkillBoxUI);
        exports.default = FlySkillBoxAlertDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../../wxSDK/VideoManager": 112,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../scene/StartScene": 54,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    30: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ButtonClick_1 = require("../script/ButtonClick"),
            GameData_1 = require("../data/GameData"),
            String_1 = require("../core/basic/String"),
            Confings_1 = require("../data/Confings"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            CoreFunction_1 = require("../core/CoreFunction"),
            GameConfig_1 = require("../../GameConfig"),
            layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            VideoManager_1 = require("../../wxSDK/VideoManager"),
            ResConfig_1 = require("../core/ResConfig"),
            MessageCenter_1 = require("../core/MessageCenter"),
            FreeGoldDialog = function(_super) {
                function FreeGoldDialog() {
                    return _super.call(this) || this
                }
                return __extends(FreeGoldDialog, _super), FreeGoldDialog.prototype.checkBtnVideo = function() {
                    var shareCfg = Confings_1.default.Instance.getAppCfg();
                    if (shareCfg) {
                        var str = shareCfg.freegold,
                            isVideo = ShareManager_1.ShareManager.Instance.isVideo(str, "freegold");
                        this.adImg.visible = !0, this.adImg.skin = ResConfig_1.ResConfig.getMainUrl(isVideo ? "zwujs_icon_ship1" : "nczjs_icon_fenxb1")
                    }
                }, FreeGoldDialog.prototype.onEnable = function() {
                    var _this = this;
                    Laya.Browser.window.h5api.canPlayAd() || (this.btn_get.visible = !1);
                    var myBtn = this.btn_get.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.onGet, this), (myBtn = this.btn_close.getComponent(ButtonClick_1.default)).setCallBack(this.close, this), this.btn_close.visible = !1, Laya.timer.once(2700, this, function() {
                        _this.btn_close.visible = !0
                    })
                }, FreeGoldDialog.prototype.onGet = function() {
                    var _this = this;
                    GameData_1.default.Instance.freeGoldTimes >= FreeGoldDialog.MaxFreeTimes ? CoreFunction_1.CoreFunction.tipMsg("Thưởng đã đầy, vui lòng quay lại vào ngày mai") : Laya.Browser.window.h5api.canPlayAd() ? Laya.Browser.window.h5api.playAd(function(data) {
                        if (data && "10001" == data.code) {
                            var gold_1 = _this.bestCost.mul(1.5);
                            GameData_1.default.Instance.addGold(gold_1), GameData_1.default.Instance.freeGoldTimes++, GameData_1.default.Instance.upload(), CoreFunction_1.CoreFunction.showFlyGold(GameConfig_1.default.width / 2, GameConfig_1.default.height / 2, 12, 13), Laya.timer.once(700, _this, function() {
                                CoreFunction_1.CoreFunction.tipMsg("Nhận " + String_1.StringUtil.decimalFormat(gold_1) + " xu")
                            }), Laya.Browser.window.h5api.canPlayAd() || (MessageCenter_1.MessageCenter.Instance.dispatch("no_ad"), _this.btn_get.visible = !1), _this.close()
                        }
                        Laya.Browser.window.console.log("播放广告回调数据", data)
                    }) : Laya.Browser.window.console.log("没有广告资源可播放")
                }, FreeGoldDialog.prototype.callback = function(suc) {
                    if (suc) {
                        var gold_2 = this.bestCost.mul(1.5);
                        GameData_1.default.Instance.addGold(gold_2), GameData_1.default.Instance.freeGoldTimes++, GameData_1.default.Instance.upload(), CoreFunction_1.CoreFunction.showFlyGold(GameConfig_1.default.width / 2, GameConfig_1.default.height / 2, 12, 13), Laya.timer.once(700, this, function() {
                            CoreFunction_1.CoreFunction.tipMsg("Nhận " + String_1.StringUtil.decimalFormat(gold_2) + " xu")
                        }), this.close()
                    } else this.checkBtnVideo()
                }, FreeGoldDialog.prototype.onOpened = function() {
                    var bestCost = this.bestCost = GameData_1.default.Instance.getBuyBestCost().div(2);
                    this.txt_gold.text = "+" + String_1.StringUtil.decimalFormat(bestCost.mul(1.5)) + " xu";
                    var count = FreeGoldDialog.MaxFreeTimes - GameData_1.default.Instance.freeGoldTimes;
                    this.txt_tips.text = "Miễn phí hàng ngày:     /" + FreeGoldDialog.MaxFreeTimes, this.txt_cishu.text = "" + count, this.checkBtnVideo(), GameControl_1.default.Instance.pauseGame(), VideoManager_1.VideoManager.Instance.showBannerAd()
                }, FreeGoldDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame(), VideoManager_1.VideoManager.Instance.hideBannerAd()
                }, FreeGoldDialog.prototype.onDestroy = function() {}, FreeGoldDialog.MaxFreeTimes = 10, FreeGoldDialog
            }(layaMaxUI_1.ui.dialog.FreeGoldUI);
        exports.default = FreeGoldDialog
    }, {
        "../../GameConfig": 1,
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../../wxSDK/VideoManager": 112,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../core/basic/String": 14,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    31: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            GameControl_1 = require("../script/GameControl"),
            SoundManager_1 = require("../../wxSDK/SoundManager"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            Confings_1 = require("../data/Confings"),
            VideoManager_1 = require("../../wxSDK/VideoManager"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            GameData_1 = require("../data/GameData"),
            ResConfig_1 = require("../core/ResConfig"),
            MathEx_1 = require("../core/MathEx"),
            MessageCenter_1 = require("../core/MessageCenter"),
            GuankaFailDialog = function(_super) {
                function GuankaFailDialog() {
                    var _this = _super.call(this) || this;
                    return _this.tipsMsgs = ["Sử dụng xu hợp lý!", "Tận dụng các loại Buff", "Sử dụng kỹ năng hợp lý!", "Kết hợp các loại cây để tăng sức mạnh!", "Không nên tiết kiệm!", "Dùng kim cương để mua item cao cấp!"], _this
                }
                return __extends(GuankaFailDialog, _super), GuankaFailDialog.prototype.checkBtnVideo = function() {
                    var shareCfg = Confings_1.default.Instance.getAppCfg();
                    if (shareCfg) {
                        var str = shareCfg.fuhuo,
                            isVideo = ShareManager_1.ShareManager.Instance.isVideo(str, "fuhuo");
                        this.adImg.visible = !0, this.adImg.skin = ResConfig_1.ResConfig.getMainUrl(isVideo ? "zwujs_icon_ship1" : "nczjs_icon_fenxb1")
                    }
                }, GuankaFailDialog.prototype.onShare = function() {
                    var _this = this;
                    Laya.Browser.window.h5api.canPlayAd() ? Laya.Browser.window.h5api.playAd(function(data) {
                        data && "10001" == data.code && (GameControl_1.default.Instance.fuhuo(), Laya.Browser.window.h5api.canPlayAd() || (MessageCenter_1.MessageCenter.Instance.dispatch("no_ad"), _this.shareBtn.visible = !1), _this.close("1")), Laya.Browser.window.console.log("播放广告回调数据", data)
                    }) : Laya.Browser.window.console.log("没有广告资源可播放")
                }, GuankaFailDialog.prototype.callback = function(succ) {
                    void 0 === succ && (succ = !0), succ ? (GameControl_1.default.Instance.fuhuo(), DDSDK.logEvent("guankafailfuhuo", {}), this.close("1")) : this.checkBtnVideo()
                }, GuankaFailDialog.prototype.onAwake = function() {}, GuankaFailDialog.prototype.onEnable = function() {
                    var _this = this;
                    Laya.Browser.window.h5api.canPlayAd() || (this.closeBtn_bg.visible = !0, this.shareBtn.visible = !1);
                    var myBtn = this.shareBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.onShare, this);
                    var isInviteNewOpen = GameData_1.default.Instance.checkInviteNewOpen();
                    this.strongBtn.visible = isInviteNewOpen, (myBtn = this.strongBtn.getComponent(ButtonClick_1.default)).setCallBack(function() {
                        LayerRoot_1.default.Instance.openScene("dialog/InviteNewPlayer.scene", !1)
                    }, this), (myBtn = this.closeBtn.getComponent(ButtonClick_1.default)).setCallBack(this.close, this), this.closeBtn.visible = !1, Laya.timer.once(2700, this, function() {
                        _this.closeBtn.visible = !0
                    });
                    var len = this.tipsMsgs.length,
                        idx = MathEx_1.default.Inst.randomInt(0, len - 1);
                    this.tipsTxt.text = this.tipsMsgs[idx], this.btnAddprogram.visible = !1, (myBtn = this.btnAddprogram.getComponent(ButtonClick_1.default)).setCallBack(function() {
                        LayerRoot_1.default.Instance.openScene("dialog/AddMiniProgram.scene", !1)
                    }, this), DDSDK.logEvent("guankafail", {})
                }, GuankaFailDialog.prototype.onOpened = function() {
                    SoundManager_1.default.Instance.playFail(), this.checkBtnVideo(), VideoManager_1.VideoManager.Instance.showBannerAd()
                }, GuankaFailDialog.prototype.onClosed = function(type) {
                    "1" != type && GameControl_1.default.Instance.resetGame(), VideoManager_1.VideoManager.Instance.hideBannerAd()
                }, GuankaFailDialog.prototype.onDestroy = function() {}, GuankaFailDialog
            }(layaMaxUI_1.ui.dialog.GuankaFailUI);
        exports.default = GuankaFailDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../../wxSDK/SoundManager": 111,
        "../../wxSDK/VideoManager": 112,
        "../core/MathEx": 9,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../scene/LayerRoot": 52,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    32: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            String_1 = require("../core/basic/String"),
            GameData_1 = require("../data/GameData"),
            GameControl_1 = require("../script/GameControl"),
            SoundManager_1 = require("../../wxSDK/SoundManager"),
            Confings_1 = require("../data/Confings"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            ResConfig_1 = require("../core/ResConfig"),
            CoreFunction_1 = require("../core/CoreFunction"),
            GameConfig_1 = require("../../GameConfig"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            VideoManager_1 = require("../../wxSDK/VideoManager"),
            MessageCenter_1 = require("../core/MessageCenter"),
            GuankaWinDialog = function(_super) {
                function GuankaWinDialog() {
                    return _super.call(this) || this
                }
                return __extends(GuankaWinDialog, _super), GuankaWinDialog.prototype.isPingbiGuanka = function() {
                    GameData_1.default.Instance.guanka;
                    return !1
                }, GuankaWinDialog.prototype.checkBtnVideo = function() {
                    if (!this.isPingbiGuanka()) {
                        var shareCfg = Confings_1.default.Instance.getAppCfg();
                        if (shareCfg) {
                            var str = shareCfg.guankawin,
                                isVideo = ShareManager_1.ShareManager.Instance.isVideo(str, "guankawin");
                            this.adImg.visible = !0, this.adImg.skin = ResConfig_1.ResConfig.getMainUrl(isVideo ? "zwujs_icon_ship1" : "nczjs_icon_fenxb1")
                        }
                    }
                }, GuankaWinDialog.prototype.onShare = function() {
                    var _this = this;
                    Laya.Browser.window.h5api.canPlayAd() ? Laya.Browser.window.h5api.playAd(function(data) {
                        data && "10001" == data.code && (Laya.Browser.window.h5api.canPlayAd() || (MessageCenter_1.MessageCenter.Instance.dispatch("no_ad"), _this.shareBtn.visible = !1), _this.close("1")), Laya.Browser.window.console.log("播放广告回调数据", data)
                    }) : Laya.Browser.window.console.log("没有广告资源可播放")
                }, GuankaWinDialog.prototype.callback = function(succ) {
                    void 0 === succ && (succ = !0), succ ? (DDSDK.logEvent("guankasanbei", {}), this.close("1")) : this.checkBtnVideo()
                }, GuankaWinDialog.prototype.checkReward = function() {
                    this.rate = 3
                }, GuankaWinDialog.prototype.scaleAni = function() {
                    var _this = this;
                    Laya.Tween.to(this.rateImg, {
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, 1e3, Laya.Ease.quadIn), Laya.Tween.to(this.rateImg, {
                        scaleX: 1,
                        scaleY: 1
                    }, 800, Laya.Ease.quadIn, Laya.Handler.create(this, function() {
                        _this.scaleAni()
                    }), 1e3)
                }, GuankaWinDialog.prototype.onAwake = function() {}, GuankaWinDialog.prototype.onEnable = function() {
                    var _this = this;
                    Laya.Browser.window.h5api.canPlayAd() || (this.getBtn_bg.visible = !0, this.shareBtn.visible = !1);
                    var myBtn = this.shareBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.onShare, this), (myBtn = this.getBtn.getComponent(ButtonClick_1.default)).setCallBack(this.close, this), this.getBtn.visible = !1, Laya.timer.once(2700, this, function() {
                        _this.getBtn.visible = !0
                    }), this.btnAddprogram.visible = !1, (myBtn = this.btnAddprogram.getComponent(ButtonClick_1.default)).setCallBack(function() {
                        LayerRoot_1.default.Instance.openScene("dialog/AddMiniProgram.scene", !1)
                    }, this), DDSDK.logEvent("guankasuccess", {})
                }, GuankaWinDialog.prototype.onOpened = function(params) {
                    SoundManager_1.default.Instance.playWin(), this.gold = new Decimal(params[0]), this.goldTxt.text = "+" + String_1.StringUtil.decimalFormat(this.gold), this.guankaTxt.text = "Level " + GameData_1.default.Instance.guanka, this.checkBtnVideo(), this.checkReward(), this.rotationTweenBig(), VideoManager_1.VideoManager.Instance.showBannerAd()
                }, GuankaWinDialog.prototype.rotationTweenBig = function() {
                    var _this = this;
                    Laya.Tween.clearTween(this.guangImg), this.guangImg.rotation = 0, Laya.Tween.to(this.guangImg, {
                        rotation: 360
                    }, 9e3, null, Laya.Handler.create(this, function() {
                        _this.rotationTweenBig()
                    }))
                }, GuankaWinDialog.prototype.close = function(type) {
                    this.gold && _super.prototype.close.call(this, type)
                }, GuankaWinDialog.prototype.onClosed = function(type) {
                    var rate = 1;
                    "1" == type && (rate = this.rate);
                    var gold = this.gold.mul(rate);
                    GameData_1.default.Instance.addGold(gold), GameControl_1.default.Instance.initNextGuanka(), Laya.Tween.clearTween(this.rateImg), Laya.Tween.clearTween(this.guangImg), CoreFunction_1.CoreFunction.showFlyGold(GameConfig_1.default.width / 2, GameConfig_1.default.height / 2, 12, 13), Laya.timer.once(700, this, function() {
                        CoreFunction_1.CoreFunction.tipMsg("Nhận " + String_1.StringUtil.decimalFormat(gold) + " xu")
                    }), GameControl_1.default.Instance.recoveryGame(), VideoManager_1.VideoManager.Instance.hideBannerAd()
                }, GuankaWinDialog.prototype.onDestroy = function() {}, GuankaWinDialog
            }(layaMaxUI_1.ui.dialog.GuankaWinUI);
        exports.default = GuankaWinDialog
    }, {
        "../../GameConfig": 1,
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../../wxSDK/SoundManager": 111,
        "../../wxSDK/VideoManager": 112,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../core/basic/String": 14,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../scene/LayerRoot": 52,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    33: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            GameData_1 = require("../data/GameData"),
            MessageCenter_1 = require("../core/MessageCenter"),
            CoreFunction_1 = require("../core/CoreFunction"),
            Confings_1 = require("../data/Confings"),
            ButtonClick_1 = require("../script/ButtonClick"),
            ResConfig_1 = require("../core/ResConfig"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            ColorFilterTool_1 = require("../core/ColorFilterTool"),
            InviteNewPlayerDialog = function(_super) {
                function InviteNewPlayerDialog() {
                    var _this = _super.call(this) || this;
                    return _this.yaoqingCD = 0, MessageCenter_1.MessageCenter.Instance.addListener("notice_wx_onshow", _this.onShow, _this), _this
                }
                return __extends(InviteNewPlayerDialog, _super), InviteNewPlayerDialog.prototype.onShow = function() {
                    CoreFunction_1.CoreFunction.tipMsg("Nhận hiệu ứng nếu mời bạn bè thành công")
                }, InviteNewPlayerDialog.prototype.onListRender = function(cell, index) {
                    var iconImg = cell.getChildByName("iconImg"),
                        stateImg = cell.getChildByName("stateImg"),
                        headImg = cell.getChildByName("headImg"),
                        shareBtn = cell.getChildByName("shareBtn"),
                        tipsTxt = cell.getChildByName("tipsTxt"),
                        stateTxt = cell.getChildByName("stateTxt"),
                        inviteNameTxt = cell.getChildByName("inviteNameTxt"),
                        inviteCount = GameData_1.default.Instance.maxInviteCount;
                    shareBtn.visible = inviteCount <= index, headImg.visible = inviteNameTxt.visible = stateImg.visible = index < inviteCount, stateTxt.color = index < inviteCount ? "#3e740f" : "#876147", stateTxt.text = index < inviteCount ? "Đã mở" : "Chưa mở", stateTxt.x = index < inviteCount ? 160 : 129, inviteNameTxt.text = "Bạn" + (index + 1) + "số", shareBtn.getComponent(ButtonClick_1.default).setCallBack(this.onShareBtn, this);
                    var cfg = this._tianfuData[index];
                    cfg && (iconImg.skin = ResConfig_1.ResConfig.getMainUrl(cfg.icon), tipsTxt.text = cfg.tips, tipsTxt.color = index < inviteCount ? "#ae4500" : "#876147", iconImg.filters = index < inviteCount ? null : ColorFilterTool_1.default.Instance.gray())
                }, InviteNewPlayerDialog.prototype.onShareBtn = function() {
                    ShareManager_1.ShareManager.Instance.doShareMessage(null, !0), DDSDK.logEvent("zuliyaoqinganniu", {})
                }, InviteNewPlayerDialog.prototype.onEnable = function() {
                    var list = this.list;
                    list.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), list.vScrollBarSkin = "", list.selectEnable = !0, list.visible = !1, this.closeBtn.getComponent(ButtonClick_1.default).setCallBack(this.close, this), DDSDK.logEvent("zulianniudianji", {})
                }, InviteNewPlayerDialog.prototype.onOpened = function() {
                    GameControl_1.default.Instance.pauseGame();
                    var now = Laya.Browser.now();
                    now >= this.yaoqingCD && (GameData_1.default.Instance.inviteNew(), this.yaoqingCD = 6e4 + now), this._tianfuData = Confings_1.default.Instance.getTianFuCfgs(), this.list.array = this._tianfuData, this.list.visible = !0
                }, InviteNewPlayerDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame(), MessageCenter_1.MessageCenter.Instance.removeByThisObj(this)
                }, InviteNewPlayerDialog
            }(layaMaxUI_1.ui.dialog.InviteNewPlayerUI);
        exports.default = InviteNewPlayerDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../core/ColorFilterTool": 5,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    34: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            VideoManager_1 = require("../../wxSDK/VideoManager"),
            ButtonClick_1 = require("../script/ButtonClick"),
            Confings_1 = require("../data/Confings"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            ResConfig_1 = require("../core/ResConfig"),
            MessageCenter_1 = require("../core/MessageCenter"),
            LuckyHechengDialog = function(_super) {
                function LuckyHechengDialog() {
                    return _super.call(this) || this
                }
                return __extends(LuckyHechengDialog, _super), LuckyHechengDialog.prototype.checkBtnVideo = function() {
                    var shareCfg = Confings_1.default.Instance.getAppCfg();
                    if (shareCfg) {
                        var str = shareCfg.luckyhecheng,
                            isVideo = ShareManager_1.ShareManager.Instance.isVideo(str, "luckyhecheng");
                        this.adImg.visible = !0, this.adImg.skin = ResConfig_1.ResConfig.getMainUrl(isVideo ? "zwujs_icon_ship1" : "nczjs_icon_fenxb1")
                    }
                }, LuckyHechengDialog.prototype.onShare = function() {
                    var _this = this;
                    Laya.Browser.window.h5api.canPlayAd() ? Laya.Browser.window.h5api.playAd(function(data) {
                        data && "10001" == data.code && (_this.handler && _this.handler.runWith(_this.luckyCfg), Laya.Browser.window.h5api.canPlayAd() || (MessageCenter_1.MessageCenter.Instance.dispatch("no_ad"), _this.luckyBtn.visible = !1), _this.close()), Laya.Browser.window.console.log("播放广告回调数据", data)
                    }) : Laya.Browser.window.console.log("没有广告资源可播放")
                }, LuckyHechengDialog.prototype.callback = function(succ) {
                    void 0 === succ && (succ = !0), succ ? (DDSDK.logEvent("luckyhechengsuccess", {}), this.handler && this.handler.runWith(this.luckyCfg), this.close()) : this.checkBtnVideo()
                }, LuckyHechengDialog.prototype.normalHencheng = function() {
                    var cfg = this.cfg;
                    if (cfg) {
                        var nextCfg = Confings_1.default.Instance.getPlantById(cfg.id + 1);
                        this.handler && this.handler.runWith(nextCfg)
                    }
                    this.close()
                }, LuckyHechengDialog.prototype.onEnable = function() {
                    Laya.Browser.window.h5api.canPlayAd() || (this.luckyBtn.visible = !1);
                    var myBtn = this.luckyBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.onShare, this), (myBtn = this.normalBtn.getComponent(ButtonClick_1.default)).setCallBack(this.normalHencheng, this)
                }, LuckyHechengDialog.prototype.onOpened = function(params) {
                    GameControl_1.default.Instance.pauseGame(), VideoManager_1.VideoManager.Instance.showBannerAd(), this.checkBtnVideo();
                    var cfg = this.cfg = params[0],
                        luckyCfg = this.luckyCfg = params[1];
                    this.handler = params[2];
                    cfg && (this.plantImg0.skin = ResConfig_1.ResConfig.getPlantUrl(cfg.pic), this.plantImg1.skin = ResConfig_1.ResConfig.getPlantUrl(cfg.pic), this.lvClip0.value = cfg.level + "", this.lvClip1.value = cfg.level + ""), luckyCfg && (this.plantImg2.skin = ResConfig_1.ResConfig.getPlantUrl(luckyCfg.pic), this.lvClip2.value = luckyCfg.level + "")
                }, LuckyHechengDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame(), VideoManager_1.VideoManager.Instance.hideBannerAd()
                }, LuckyHechengDialog
            }(layaMaxUI_1.ui.dialog.LuckyHechengUI);
        exports.default = LuckyHechengDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../../wxSDK/VideoManager": 112,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    35: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameData_1 = require("../data/GameData"),
            ButtonClick_1 = require("../script/ButtonClick"),
            GameControl_1 = require("../script/GameControl"),
            ResConfig_1 = require("../core/ResConfig"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            Confings_1 = require("../data/Confings"),
            VideoManager_1 = require("../../wxSDK/VideoManager"),
            CoreFunction_1 = require("../core/CoreFunction"),
            Constant_1 = require("../core/Constant"),
            MessageCenter_1 = require("../core/MessageCenter"),
            LuckyPlantBoxDialog = function(_super) {
                function LuckyPlantBoxDialog() {
                    return _super.call(this) || this
                }
                return __extends(LuckyPlantBoxDialog, _super), LuckyPlantBoxDialog.prototype.checkBtnVideo = function() {
                    var shareCfg = Confings_1.default.Instance.getAppCfg();
                    if (shareCfg) {
                        var str = shareCfg.luckybox,
                            isVideo = ShareManager_1.ShareManager.Instance.isVideo(str, "luckybox");
                        this.adImg.visible = !0, this.adImg.skin = ResConfig_1.ResConfig.getMainUrl(isVideo ? "zwujs_icon_ship1" : "nczjs_icon_fenxb1")
                    }
                }, LuckyPlantBoxDialog.prototype.onEnable = function() {
                    this.btn_close.getComponent(ButtonClick_1.default).setCallBack(this.close, this), Laya.Browser.window.h5api.canPlayAd() ? (this.btn_get.visible = !0, this.btn_free.visible = !1) : (this.btn_get.visible = !1, this.btn_free.visible = !0), this.btn_get.getComponent(ButtonClick_1.default).setCallBack(this.onGet, this), this.btn_free.getComponent(ButtonClick_1.default).setCallBack(this.onFree, this)
                }, LuckyPlantBoxDialog.prototype.onGet = function() {
                    var _this = this;
                    console.log("获得新植物");
                    GameData_1.default.Instance.guanka;
                    this.btn_get.mouseEnabled = !1, Laya.Browser.window.h5api.canPlayAd() ? Laya.Browser.window.h5api.playAd(function(data) {
                        data && "10001" == data.code && (Laya.Browser.window.console.log("播放广告回调数据", data), _this.btn_get.mouseEnabled = !0, GameControl_1.default.Instance.createPlantBySlot(_this.cfg, _this.index, 0), GameData_1.default.Instance.guanka < 30 && DDSDK.logEvent("plantboxget" + GameData_1.default.Instance.guanka, {}), CoreFunction_1.CoreFunction.tipMsg("Nhận thành công " + _this.cfg.name), Laya.Browser.window.h5api.canPlayAd() || (MessageCenter_1.MessageCenter.Instance.dispatch("no_ad"), _this.btn_get.visible = !1), _this.close())
                    }) : Laya.Browser.window.console.log("没有广告资源可播放")
                }, LuckyPlantBoxDialog.prototype.onFree = function() {
                    console.log("获得新植物"), this.btn_free.mouseEnabled = !1, this.callback(!0)
                }, LuckyPlantBoxDialog.prototype.callback = function(succ) {
                    void 0 === succ && (succ = !0), this.btn_get.mouseEnabled = !0, succ ? (GameControl_1.default.Instance.createPlantBySlot(this.cfg, this.index, 0), GameData_1.default.Instance.guanka < 30 && DDSDK.logEvent("plantboxget" + GameData_1.default.Instance.guanka, {}), CoreFunction_1.CoreFunction.tipMsg("Nhận thành công " + this.cfg.name), DDSDK.logEvent("xingyunboxsuccess", {}), this.close()) : this.checkBtnVideo()
                }, LuckyPlantBoxDialog.prototype.onOpened = function(params) {
                    this.index = params[0];
                    var type = Math.random() < .5 ? 1 : 3,
                        cfg = this.cfg = GameData_1.default.Instance.getBuyPlantByType(type),
                        random = GameData_1.default.Instance.guanka <= 15 ? .5 : .25;
                    if (Math.random() < random) {
                        var cfgs = Confings_1.default.Instance.getPlantsByType(type);
                        for (var k in cfgs) {
                            var temp = cfgs[k];
                            if (temp.level > cfg.level) {
                                cfg = this.cfg = temp;
                                break
                            }
                        }
                    }
                    if (cfg) {
                        this.img_plantPic.skin = ResConfig_1.ResConfig.getPlantUrl(cfg.pic), this.txt_plantName.text = cfg.name, this.lvClip.value = cfg.level + "";
                        var skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji1");
                        switch (cfg.type) {
                            case Constant_1.PlantType.Single:
                                skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji1");
                                break;
                            case Constant_1.PlantType.Range:
                                skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji2");
                                break;
                            case Constant_1.PlantType.Buff:
                                skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji3")
                        }
                        this.lvBg.skin = skin
                    }
                    this.checkBtnVideo(), VideoManager_1.VideoManager.Instance.showBannerAd()
                }, LuckyPlantBoxDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame(), VideoManager_1.VideoManager.Instance.hideBannerAd()
                }, LuckyPlantBoxDialog
            }(layaMaxUI_1.ui.dialog.LuckyPlantBoxUI);
        exports.default = LuckyPlantBoxDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../../wxSDK/VideoManager": 112,
        "../core/Constant": 6,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    36: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            Confings_1 = require("../data/Confings"),
            ResConfig_1 = require("../core/ResConfig"),
            ButtonClick_1 = require("../script/ButtonClick"),
            GameControl_1 = require("../script/GameControl"),
            GameData_1 = require("../data/GameData"),
            CoreFunction_1 = require("../core/CoreFunction"),
            MessageCenter_1 = require("../core/MessageCenter"),
            MonsterListDialog = function(_super) {
                function MonsterListDialog() {
                    return _super.call(this) || this
                }
                return __extends(MonsterListDialog, _super), MonsterListDialog.prototype.onEnable = function() {
                    var list = this.list;
                    list.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), list.vScrollBarSkin = "";
                    var plantList = this.plantList;
                    plantList.renderHandler = Laya.Handler.create(this, this.onPlantListRender, null, !1), plantList.vScrollBarSkin = "", plantList.visible = !1, this.closeBtn.getComponent(ButtonClick_1.default).setCallBack(this.close, this), this.list.visible = !1, this.tab.selectHandler = Laya.Handler.create(this, this.onSelecte, null, !1)
                }, MonsterListDialog.prototype.onSelecte = function(index) {
                    0 == index ? (this.list.array = this.listData, this.list.visible = !0, this.plantList.visible = !1) : (this.plantList.array = this.plantListData, this.list.visible = !1, this.plantList.visible = !0)
                }, MonsterListDialog.prototype.onPlantListRender = function(cell, index) {
                    if (this.plantListData) {
                        var cfg = this.plantListData[index],
                            iconImg = cell.getChildByName("iconImg"),
                            nameTxt = cell.getChildByName("nameTxt"),
                            descTxt = cell.getChildByName("descTxt");
                        descTxt.style.font = "Arial", descTxt.style.fontSize = 20, descTxt.style.color = "#7d420d", descTxt.style.width = 340, descTxt.style.height = 66, iconImg.skin = ResConfig_1.ResConfig.getPlantUrl(cfg.icon), nameTxt.text = cfg.name, descTxt.innerHTML = cfg.dsc
                    }
                }, MonsterListDialog.prototype.onListRender = function(cell, index) {
                    if (this.listData) {
                        var cfg = this.listData[index],
                            iconImg = cell.getChildByName("iconImg"),
                            nameTxt = cell.getChildByName("nameTxt"),
                            descTxt = cell.getChildByName("descTxt"),
                            hasGetTxt = cell.getChildByName("hasGetTxt"),
                            hasGetImg = cell.getChildByName("hasGetImg"),
                            awardBtn = cell.getChildByName("awardBtn"),
                            diamondTxt = awardBtn.getChildByName("diamondTxt"),
                            myBtn = awardBtn.getComponent(ButtonClick_1.default),
                            canGetAward = GameData_1.default.Instance.checkTujianAward(cfg.id);
                        myBtn.setCallBack(function() {
                            var tujianAwardIds = GameData_1.default.Instance.tujianAwardIds;
                            canGetAward && (tujianAwardIds.push(cfg.id), GameData_1.default.Instance.addDiamond(cfg.diamond), CoreFunction_1.CoreFunction.tipMsg("Nhận " + cfg.diamond + " kim cương") , hasGetTxt.visible = hasGetImg.visible = !0, awardBtn.visible = !1, DDSDK.logEvent("tujiangetzuanshi", {}), MessageCenter_1.MessageCenter.Instance.dispatch("get_tujain_award_succ"))
                        }, this);
                        var diamond = awardBtn.getChildByName("diamond");
                        descTxt.style.font = "Arial", descTxt.style.fontSize = 20, descTxt.style.color = "#7d420d", descTxt.style.width = 220, descTxt.style.height = 66, diamondTxt.text = cfg.diamond + "";
                        var monsterCfg = Confings_1.default.Instance.getMonsterById(cfg.monsterid);
                        if (monsterCfg) GameData_1.default.Instance.checkTujianUnlock(monsterCfg.id) ? (diamond.filters = null, iconImg.skin = ResConfig_1.ResConfig.getMonsterUrl(monsterCfg.icon), nameTxt.text = monsterCfg.name, descTxt.innerHTML = monsterCfg.desc || "", iconImg.filters = null, awardBtn.skin = ResConfig_1.ResConfig.getMainUrl("zwujs_button_lv1"), awardBtn.visible = awardBtn.mouseEnabled = canGetAward, hasGetTxt.visible = hasGetImg.visible = !canGetAward, canGetAward && DDSDK.logEvent("tujianjihuozuanshi", {})) : (diamond.filters = [(new Laya.ColorFilter).gray()], hasGetTxt.visible = hasGetImg.visible = awardBtn.mouseEnabled = !1, awardBtn.skin = ResConfig_1.ResConfig.getMainUrl("zwujs_button_hui1"), iconImg.skin = ResConfig_1.ResConfig.getMonsterUrl(monsterCfg.icon), nameTxt.text = "????", descTxt.innerHTML = "????????????????", iconImg.filters = [(new Laya.ColorFilter).setColor("#7d420d")])
                    }
                }, MonsterListDialog.prototype.onOpened = function() {
                    this.listData = Confings_1.default.Instance.tuJianCfg, this.list.array = this.listData, this.list.visible = !0, this.plantListData = Confings_1.default.Instance.bianyiCfg, this.plantList.visible = !1, GameControl_1.default.Instance.pauseGame()
                }, MonsterListDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame()
                }, MonsterListDialog
            }(layaMaxUI_1.ui.dialog.MonsterListUI);
        exports.default = MonsterListDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    37: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            GameData_1 = require("../data/GameData"),
            Confings_1 = require("../data/Confings"),
            ResConfig_1 = require("../core/ResConfig"),
            ButtonClick_1 = require("../script/ButtonClick"),
            VideoManager_1 = require("../../wxSDK/VideoManager"),
            PlantBianyiDialog = function(_super) {
                function PlantBianyiDialog() {
                    return _super.call(this) || this
                }
                return __extends(PlantBianyiDialog, _super), PlantBianyiDialog.prototype.onEnable = function() {
                    this.bianyiBtn.getComponent(ButtonClick_1.default).setCallBack(this.close, this);
                    var descTxt = this.desc;
                    descTxt.style.font = "Arial", descTxt.style.fontSize = 30, descTxt.style.align = "center", descTxt.style.color = "#ffffff", descTxt.style.width = 462, descTxt.style.height = 66
                }, PlantBianyiDialog.prototype.onOpened = function(params) {
                    GameControl_1.default.Instance.pauseGame();
                    var index = +params[0],
                        id = +params[1],
                        vo = GameData_1.default.Instance.slotPlants[index];
                    if (vo) {
                        var cfg = Confings_1.default.Instance.getPlantById(vo.id);
                        cfg && (this.leftIcon.skin = this.rightIcon.skin = ResConfig_1.ResConfig.getPlantUrl(cfg.pic));
                        var bianyiCfg = Confings_1.default.Instance.getBianyiById(id);
                        bianyiCfg && (this.flagImg.skin = ResConfig_1.ResConfig.getPlantUrl(bianyiCfg.icon), this.desc.innerHTML = bianyiCfg.dsc)
                    }
                    VideoManager_1.VideoManager.Instance.showBannerAd()
                }, PlantBianyiDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame(), VideoManager_1.VideoManager.Instance.hideBannerAd()
                }, PlantBianyiDialog
            }(layaMaxUI_1.ui.dialog.PlantBianyiUI);
        exports.default = PlantBianyiDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/VideoManager": 112,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    38: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            PlayTipsDialog = function(_super) {
                function PlayTipsDialog() {
                    return _super.call(this) || this
                }
                return __extends(PlayTipsDialog, _super), PlayTipsDialog.prototype.onEnable = function() {
                    this.closeBtn.getComponent(ButtonClick_1.default).setCallBack(this.close, this), DDSDK.logEvent("zenmewanjiemian", {})
                }, PlayTipsDialog
            }(layaMaxUI_1.ui.dialog.PlayTipsUI);
        exports.default = PlayTipsDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../script/ButtonClick": 55
    }],
    39: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            GameControl_1 = require("../script/GameControl"),
            RankView = function(_super) {
                function RankView() {
                    var _this = _super.call(this) || this;
                    return RankView._instance = _this, _this
                }
                return __extends(RankView, _super), Object.defineProperty(RankView, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new RankView), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), RankView.prototype.onShare = function() {}, RankView.prototype.onEnable = function() {
                    var _this = this,
                        myBtn = this.closeBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.close, this), (myBtn = this.yaoqingBtn.getComponent(ButtonClick_1.default)).setCallBack(this.onShare, this), (myBtn = this.preBtn.getComponent(ButtonClick_1.default)).setCallBack(function() {
                        _this.openDataView.postMsg({
                            command: "pre"
                        })
                    }, this), (myBtn = this.nextBtn.getComponent(ButtonClick_1.default)).setCallBack(function() {
                        _this.openDataView.postMsg({
                            command: "next"
                        })
                    }, this), this.init(), DDSDK.logEvent("paihangjiemian", {})
                }, RankView.prototype.init = function() {}, RankView.prototype.onOpened = function() {
                    GameControl_1.default.Instance.pauseGame()
                }, RankView.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame()
                }, RankView
            }(layaMaxUI_1.ui.dialog.RankUI);
        exports.default = RankView
    }, {
        "../../ui/layaMaxUI": 107,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    40: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ButtonClick_1 = require("../script/ButtonClick"),
            layaMaxUI_1 = require("../../ui/layaMaxUI"),
            VideoManager_1 = require("../../wxSDK/VideoManager"),
            ShareFailDialog = function(_super) {
                function ShareFailDialog() {
                    return _super.call(this) || this
                }
                return __extends(ShareFailDialog, _super), ShareFailDialog.prototype.onEnable = function() {
                    var myBtn = this.btn_share.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.onShare, this), (myBtn = this.btn_close.getComponent(ButtonClick_1.default)).setCallBack(this.close, this)
                }, ShareFailDialog.prototype.onShare = function() {
                    VideoManager_1.VideoManager.Instance.playRewardAd(this.handler), this.close("1")
                }, ShareFailDialog.prototype.close = function(type) {
                    _super.prototype.close.call(this), "1" != type && this.handler && (this.handler.runWith(!1), this.handler.clear())
                }, ShareFailDialog.prototype.onOpened = function(parmas) {
                    console.log("[ShareFailDialog onOpened]", parmas), this.txt_tips.text = parmas.failMsg, this.handler = parmas.handler, this.shareType = parmas.shareType
                }, ShareFailDialog.prototype.onDestroy = function() {}, ShareFailDialog
            }(layaMaxUI_1.ui.dialog.ShareFailUI);
        exports.default = ShareFailDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/VideoManager": 112,
        "../script/ButtonClick": 55
    }],
    41: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            Confings_1 = require("../data/Confings"),
            Constant_1 = require("../core/Constant"),
            ResConfig_1 = require("../core/ResConfig"),
            GameData_1 = require("../data/GameData"),
            String_1 = require("../core/basic/String"),
            GameControl_1 = require("../script/GameControl"),
            MessageCenter_1 = require("../core/MessageCenter"),
            ShopDialog = function(_super) {
                function ShopDialog() {
                    return _super.call(this) || this
                }
                return __extends(ShopDialog, _super), ShopDialog.prototype.onListRender = function(cell, index) {
                    var lvBg = cell.getChildByName("lvBg"),
                        icon = cell.getChildByName("icon"),
                        lvClip = cell.getChildByName("lvClip"),
                        nameTxt = cell.getChildByName("nameTxt"),
                        zhanliTxt = cell.getChildByName("zhanliTxt"),
                        descTxt = cell.getChildByName("descTxt"),
                        goldBtn = cell.getChildByName("goldBtn"),
                        goldTxt = goldBtn.getChildByName("goldTxt"),
                        diamondBtn = cell.getChildByName("diamondBtn"),
                        diamondTxt = diamondBtn.getChildByName("diamondTxt"),
                        myGoldBtn = goldBtn.getComponent(ButtonClick_1.default),
                        myDiamondBtn = diamondBtn.getComponent(ButtonClick_1.default),
                        lockBtn = cell.getChildByName("lockBtn"),
                        jianyingImg = lockBtn.getChildByName("jianyingImg");
                    icon.skin = null, jianyingImg.skin = null;
                    var cfg = this._listData[index];
                    if (cfg) {
                        myGoldBtn.setCallBack(function() {
                            var succ = GameData_1.default.Instance.buyPlant(cfg);
                            succ && GameControl_1.default.Instance.createPlant(cfg), succ && DDSDK.logEvent("shopseccuss", {})
                        }, this), myDiamondBtn.setCallBack(function() {
                            var succ = GameData_1.default.Instance.diamondBuyPlant(cfg);
                            succ && GameControl_1.default.Instance.createPlant(cfg), succ && DDSDK.logEvent("shopzuanshigetsuccess", {})
                        }, this);
                        var skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji1");
                        switch (cfg.type) {
                            case Constant_1.PlantType.Single:
                                skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji1");
                                break;
                            case Constant_1.PlantType.Range:
                                skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji2");
                                break;
                            case Constant_1.PlantType.Buff:
                                skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji3")
                        }
                        lvBg.skin = skin, icon.skin = ResConfig_1.ResConfig.getPlantUrl(cfg.pic), lvClip.value = index + 1 + "";
                        var cost = GameData_1.default.Instance.getBuyPlantCost(cfg.id);
                        goldTxt.text = String_1.StringUtil.decimalFormat(cost);
                        var isUnlock = GameData_1.default.Instance.isPlantUnlock(cfg.id),
                            isHecheng = GameData_1.default.Instance.isPlantHeCheng(cfg.id);
                        goldBtn.visible = isUnlock;
                        var isDiamondUnlock = !1;
                        if (isUnlock) lockBtn.visible = diamondBtn.visible = !1, goldTxt.color = cost.lte(GameData_1.default.Instance.gold) ? "#ffffff" : "#ff0000";
                        else {
                            var diamondUnlock = Confings_1.default.Instance.getDiamondUnlockPlantById(cfg.id);
                            if (diamondUnlock && (isDiamondUnlock = GameData_1.default.Instance.isPlantHeCheng(diamondUnlock.id)), lockBtn.visible = !isDiamondUnlock, diamondBtn.visible = isDiamondUnlock, isDiamondUnlock) {
                                var cost_1 = GameData_1.default.Instance.getBuyPlantDiamondCost(cfg.id);
                                diamondTxt.text = String_1.StringUtil.decimalFormat(cost_1), diamondTxt.color = cost_1.lte(GameData_1.default.Instance.diamond) ? "#ffffff" : "#ff0000"
                            } else {
                                var unlockCfg = Confings_1.default.Instance.getUnlockPlantById(cfg.id);
                                unlockCfg && (jianyingImg.skin = ResConfig_1.ResConfig.getPlantUrl(unlockCfg.pic), jianyingImg.filters = [(new Laya.ColorFilter).setColor("#000")])
                            }
                        }
                        isUnlock || isHecheng || isDiamondUnlock ? (icon.filters = null, nameTxt.text = cfg.name, descTxt.text = cfg.desc, zhanliTxt.text = String_1.StringUtil.decimalFormat(new Decimal(cfg.attack))) : (nameTxt.text = "???", descTxt.text = "???", zhanliTxt.text = "???", icon.filters = [(new Laya.ColorFilter).setColor("#000")]), cell.mouseEnabled = isUnlock || isDiamondUnlock, cell.filters = isUnlock || isDiamondUnlock ? null : [(new Laya.ColorFilter).gray()]
                    }
                }, ShopDialog.prototype.onSelecte = function(index) {
                    var type = Constant_1.PlantType.Single;
                    switch (index) {
                        case 0:
                            type = Constant_1.PlantType.Single, this._listData = this._singleData;
                            break;
                        case 1:
                            type = Constant_1.PlantType.Buff, this._listData = this._buffData;
                            break;
                        case 2:
                            type = Constant_1.PlantType.Range, this._listData = this._rangeData
                    }
                    this.updateData(), this.list.tweenTo(this.getMoveToIndex(type))
                }, ShopDialog.prototype.updateData = function() {
                    this.list.array = this._listData, this.tabIndex = this.tab.selectedIndex, this.checkBtn()
                }, ShopDialog.prototype.getMoveToIndex = function(type) {
                    var listData = this._listData,
                        cfg = GameData_1.default.Instance.getBuyPlantByType(type);
                    if (cfg)
                        for (var len = listData.length, i = 0; i < len; i++) {
                            if (listData[i].id == cfg.id) return i
                        }
                    return 0
                }, ShopDialog.prototype.onLeft = function() {
                    this.tabIndex > 0 && (this.tabIndex--, this.tab.selectedIndex = this.tabIndex, this.onSelecte(this.tabIndex)), this.checkBtn()
                }, ShopDialog.prototype.onRight = function() {
                    this.tabIndex < 2 && (this.tabIndex++, this.tab.selectedIndex = this.tabIndex, this.onSelecte(this.tabIndex)), this.checkBtn()
                }, ShopDialog.prototype.checkBtn = function() {
                    this.leftBtn.visible = this.tabIndex > 0, this.rightBtn.visible = this.tabIndex < 2
                }, ShopDialog.prototype.checkHongDian = function() {
                    this.tabhongdian0.visible = GameData_1.default.Instance.checkDiamondBuyByType(Constant_1.PlantType.Single), this.tabhongdian1.visible = GameData_1.default.Instance.checkDiamondBuyByType(Constant_1.PlantType.Buff), this.tabhongdian2.visible = GameData_1.default.Instance.checkDiamondBuyByType(Constant_1.PlantType.Range)
                }, ShopDialog.prototype.onEnable = function() {
                    var _this = this;
                    this.tabHongdianArr = [], this.tabHongdianArr.push(this.tabhongdian0), this.tabHongdianArr.push(this.tabhongdian1), this.tabHongdianArr.push(this.tabhongdian2);
                    var myBtn = this.closeBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.close, this), (myBtn = this.leftBtn.getComponent(ButtonClick_1.default)).setCallBack(this.onLeft, this), (myBtn = this.rightBtn.getComponent(ButtonClick_1.default)).setCallBack(this.onRight, this), this.tab.selectHandler = Laya.Handler.create(this, this.onSelecte, null, !1);
                    var list = this.list;
                    list.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), list.vScrollBarSkin = "", MessageCenter_1.MessageCenter.Instance.addListener("gold_update", function() {
                        _this.updateData()
                    }, this), MessageCenter_1.MessageCenter.Instance.addListener("diamond_update", function() {
                        _this.updateData(), _this.checkHongDian()
                    }, this), DDSDK.logEvent("shopjiemian", {}), this.tabhongdian0.visible = this.tabhongdian1.visible = this.tabhongdian2.visible = this.leftBtn.visible = this.rightBtn.visible = !1
                }, ShopDialog.prototype.onOpened = function(params) {
                    this._singleData = Confings_1.default.Instance.getPlantsByType(Constant_1.PlantType.Single), this._rangeData = Confings_1.default.Instance.getPlantsByType(Constant_1.PlantType.Range), this._buffData = Confings_1.default.Instance.getPlantsByType(Constant_1.PlantType.Buff), this.tabIndex = this.tab.selectedIndex, this.onSelecte(this.tabIndex), this.checkBtn(), this.checkHongDian()
                }, ShopDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame()
                }, ShopDialog.prototype.onDestroy = function() {}, ShopDialog
            }(layaMaxUI_1.ui.dialog.ShopUI);
        exports.default = ShopDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../core/Constant": 6,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../core/basic/String": 14,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    42: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            WxSDK_1 = require("../../wxSDK/WxSDK"),
            ButtonClick_1 = require("../script/ButtonClick"),
            CoreFunction_1 = require("../core/CoreFunction"),
            GameData_1 = require("../data/GameData"),
            MessageCenter_1 = require("../core/MessageCenter"),
            SubscribeSkillDialog = function(_super) {
                function SubscribeSkillDialog() {
                    return _super.call(this) || this
                }
                return __extends(SubscribeSkillDialog, _super), Object.defineProperty(SubscribeSkillDialog, "opened", {
                    set: function(b) {
                        this._opened = b
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(SubscribeSkillDialog, "subscribeData", {
                    get: function() {
                        return {
                            opened: this._opened,
                            tmplId: this._tmplId
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), SubscribeSkillDialog.prototype.onEnable = function() {
                    GameControl_1.default.Instance.pauseGame();
                    var myBtn = this.btn_close.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.close, this), myBtn = this.btn_get.getComponent(ButtonClick_1.default)
                }, SubscribeSkillDialog.prototype.onBtnClick = function() {
                    var _this = this,
                        tmplId = SubscribeSkillDialog._tmplId;
                    WxSDK_1.default.Instance.requestSubscribeMessage([tmplId], function(res) {
                        if (console.log("[requestSubscribeMessage]:suc", res), res && "requestSubscribeMessage:ok" == res.errMsg) switch (res[tmplId]) {
                            case "accept":
                                CoreFunction_1.CoreFunction.tipMsg("+2 tất cả kỹ năng"), GameData_1.default.Instance.insertSubscribe(tmplId);
                                for (var index = 0; index < 3; index++) GameData_1.default.Instance.addSkillCount(index, 2);
                                MessageCenter_1.MessageCenter.Instance.dispatch("update_skill_count"), GameData_1.default.Instance.subscribe(), _this.close();
                                break;
                            case "reject":
                                CoreFunction_1.CoreFunction.tipMsg("Đăng ký thất bại");
                                break;
                            default:
                                CoreFunction_1.CoreFunction.tipMsg("Đăng ký thất bại")
                        }
                    }, function(err) {
                        console.log("[requestSubscribeMessage]:fail", err), CoreFunction_1.CoreFunction.tipMsg("Đăng ký thất bại")
                    })
                }, SubscribeSkillDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame()
                }, SubscribeSkillDialog._opened = !1, SubscribeSkillDialog._tmplId = "30rDiXFxShWZaXF8t9dPg4Fkrlhs2Iu6tsfAhujwHjQ", SubscribeSkillDialog
            }(layaMaxUI_1.ui.dialog.SubscribeSkillActivityUI);
        exports.default = SubscribeSkillDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/WxSDK": 113,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    43: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            Confings_1 = require("../data/Confings"),
            ResConfig_1 = require("../core/ResConfig"),
            TianFuAlertDialog = function(_super) {
                function TianFuAlertDialog() {
                    return _super.call(this) || this
                }
                return __extends(TianFuAlertDialog, _super), TianFuAlertDialog.prototype.onEnable = function() {
                    this.okBtn.getComponent(ButtonClick_1.default).setCallBack(this.close, this), this.icon.skin = "", this.typeTxt.text = "", this.valueTxt.text = ""
                }, TianFuAlertDialog.prototype.onOpened = function(id) {
                    var cfg = Confings_1.default.Instance.getTianFuCfgById(id);
                    if (cfg) {
                        this.typeTxt.text = cfg.des, this.valueTxt.text = cfg.value > 0 ? "+" + cfg.value + "%" : cfg.value + "%";
                        var skin = "";
                        switch (cfg.type) {
                            case 1:
                                skin = ResConfig_1.ResConfig.getMainUrl("nczjs_icon_14");
                                break;
                            case 2:
                                skin = ResConfig_1.ResConfig.getMainUrl("nczjs_icon_16");
                                break;
                            case 3:
                                skin = ResConfig_1.ResConfig.getMainUrl("nczjs_icon_15")
                        }
                        this.icon.skin = skin
                    }
                }, TianFuAlertDialog
            }(layaMaxUI_1.ui.dialog.TianFuAlertUI);
        exports.default = TianFuAlertDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../script/ButtonClick": 55
    }],
    44: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            ButtonClick_1 = require("../script/ButtonClick"),
            GameData_1 = require("../data/GameData"),
            CoreFunction_1 = require("../core/CoreFunction"),
            Confings_1 = require("../data/Confings"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            ColorFilterTool_1 = require("../core/ColorFilterTool"),
            MessageCenter_1 = require("../core/MessageCenter"),
            TianFuDialog = function(_super) {
                function TianFuDialog() {
                    var _this = _super.call(this) || this;
                    return _this.isTweening = !1, _this.yaoqingCD = 0, MessageCenter_1.MessageCenter.Instance.addListener("notice_wx_onshow", _this.onShow, _this), _this
                }
                return __extends(TianFuDialog, _super), TianFuDialog.prototype.onShow = function() {
                    CoreFunction_1.CoreFunction.tipMsg("Thêm lần quay thưởng")
                }, TianFuDialog.prototype.onYaoqingNew = function() {
                    ShareManager_1.ShareManager.Instance.doShareMessage(null, !0)
                }, TianFuDialog.prototype.checkChouJiangState = function() {
                    var freeTimes = GameData_1.default.Instance.tianfuFreeTimes,
                        tianfuYaoqingTimes = GameData_1.default.Instance.maxInviteCount - GameData_1.default.Instance.tianfuYaoqingTimes,
                        shengyuFreeTimes = 1 - freeTimes;
                    GameData_1.default.Instance.tianfuIds.length >= 9 ? (this.tipsTxt.visible = !1, this.unlockAllTxt.visible = !0, this.choujiangBtn.mouseEnabled = !1, this.choujiangBtn.filters = [(new Laya.ColorFilter).gray()], this.freeBox.visible = !0, this.yaoqingBox.visible = !1) : shengyuFreeTimes > 0 ? (this.freeBox.visible = !0, this.yaoqingBox.visible = !1, this.tipsTxt.visible = !0, this.unlockAllTxt.visible = !1, this.choujiangBtn.mouseEnabled = !0, this.choujiangBtn.filters = null) : (this.freeBox.visible = !1, this.yaoqingBox.visible = !0, this.timesTxt.text = tianfuYaoqingTimes > 0 ? tianfuYaoqingTimes + "" : "0", this.choujiang1Btn.visible = tianfuYaoqingTimes > 0);
                    for (var lockTianfuIds = this.lockTianfuIds = [], tianfuIds = GameData_1.default.Instance.tianfuIds, i = 1; i < 10; i++) {
                        var bg = this.bgList[i],
                            img = this.imgList[i],
                            has = -1 != tianfuIds.indexOf(i);
                        bg.visible = !1, has ? img.filters = null : (img.filters = ColorFilterTool_1.default.Instance.gray(), lockTianfuIds.push(i))
                    }
                }, TianFuDialog.prototype.updateLockTianfu = function() {
                    for (var lockTianfuIds = this.lockTianfuIds = [], tianfuIds = GameData_1.default.Instance.tianfuIds, i = 1; i < 10; i++) {
                        -1 != tianfuIds.indexOf(i) || lockTianfuIds.push(i)
                    }
                }, TianFuDialog.prototype.onFreeChoujiang = function() {
                    if (GameData_1.default.Instance.tianfuFreeTimes < 1) {
                        var id = this.getTianFuId(),
                            tianfuIds = GameData_1.default.Instance.tianfuIds; - 1 == tianfuIds.indexOf(id) ? (GameData_1.default.Instance.tianfuFreeTimes++, this.checkChouJiangState(), this.doTween(id), tianfuIds.push(id), GameData_1.default.Instance.upload()) : console.log("获取的天赋id" + id + "重复")
                    } else CoreFunction_1.CoreFunction.tipMsg("Đã hết lượt ngày hôm nay")
                }, TianFuDialog.prototype.onYaoqingChoujiang = function() {
                    if (GameData_1.default.Instance.maxInviteCount - GameData_1.default.Instance.tianfuYaoqingTimes > 0) {
                        var id = this.getTianFuId(),
                            tianfuIds = GameData_1.default.Instance.tianfuIds; - 1 == tianfuIds.indexOf(id) ? (GameData_1.default.Instance.tianfuYaoqingTimes++, this.checkChouJiangState(), this.doTween(id), tianfuIds.push(id), GameData_1.default.Instance.upload()) : console.log("获取的天赋id" + id + "重复")
                    } else CoreFunction_1.CoreFunction.tipMsg("Mời bạn thêm lần quay thưởng")
                }, TianFuDialog.prototype.doTween = function(id) {
                    if (!this.isTweening) {
                        this.isTweening = !0, this.updateLockTianfu();
                        var arr = this.lockTianfuIds,
                            bgList = this.bgList,
                            len = (this.imgList, arr.length);
                        arr.splice(arr.indexOf(id), 1);
                        var randomArr = arr.sort(function() {
                            return Math.random() - Math.random()
                        });
                        randomArr.push(id);
                        for (var posList = this.posList = [], i = 0; i < len; i++) {
                            var bg = bgList[randomArr[i]],
                                p = Laya.Point.create();
                            p.x = bg.x, p.y = bg.y, posList.push(p)
                        }
                        this.showSelect(id)
                    }
                }, TianFuDialog.prototype.showSelect = function(id) {
                    var _this = this,
                        bgList = this.bgList,
                        imgList = this.imgList,
                        selectImg = this.selectImg,
                        posList = this.posList;
                    if (posList.length > 0) {
                        var p = posList.shift();
                        selectImg.pos(p.x, p.y), selectImg.visible = !0, Laya.timer.once(200, null, function() {
                            _this.showSelect(id)
                        })
                    } else {
                        bgList[id];
                        imgList[id].filters = null, LayerRoot_1.default.Instance.openScene("dialog/TianFuAlert.scene", !1, id)
                    }
                }, TianFuDialog.prototype.getTianFuId = function() {
                    var times = GameData_1.default.Instance.tianfuIds.length,
                        cfg = Confings_1.default.Instance.getTianFuCfgByTimes(times);
                    return cfg && cfg.id || 1
                }, TianFuDialog.prototype.onEnable = function() {
                    var myBtn = this.closeBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.close, this), (myBtn = this.choujiangBtn.getComponent(ButtonClick_1.default)).setCallBack(this.onFreeChoujiang, this), (myBtn = this.choujiang1Btn.getComponent(ButtonClick_1.default)).setCallBack(this.onYaoqingChoujiang, this), (myBtn = this.yaoqingBtn.getComponent(ButtonClick_1.default)).setCallBack(this.onYaoqingNew, this), this.imgList = {}, this.bgList = {};
                    for (var i = 1; i < 10; i++) {
                        var bg = this.getChildByName("bg" + i),
                            img = this.getChildByName("img" + i);
                        this.bgList[i] = bg, this.imgList[i] = img
                    }
                    this.selectImg.visible = !1, this.freeBox.visible = this.yaoqingBox.visible = !1
                }, TianFuDialog.prototype.onOpened = function() {
                    this.isTweening = !1, GameControl_1.default.Instance.pauseGame(), this.checkChouJiangState();
                    var now = Laya.Browser.now();
                    now >= this.yaoqingCD && (GameData_1.default.Instance.inviteNew(), this.yaoqingCD = 6e4 + now)
                }, TianFuDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame(), MessageCenter_1.MessageCenter.Instance.removeByThisObj(this)
                }, TianFuDialog
            }(layaMaxUI_1.ui.dialog.TianFuUI);
        exports.default = TianFuDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../core/ColorFilterTool": 5,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../scene/LayerRoot": 52,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    45: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            Confings_1 = require("../data/Confings"),
            ResConfig_1 = require("../core/ResConfig"),
            GameControl_1 = require("../script/GameControl"),
            ButtonClick_1 = require("../script/ButtonClick"),
            VideoManager_1 = require("../../wxSDK/VideoManager"),
            StartScene_1 = require("../scene/StartScene"),
            UnlockMonsterDialog = function(_super) {
                function UnlockMonsterDialog() {
                    return _super.call(this) || this
                }
                return __extends(UnlockMonsterDialog, _super), UnlockMonsterDialog.prototype.onEnable = function() {
                    var descTxt = this.descTxt;
                    descTxt.style.font = "Arial", descTxt.style.fontSize = 24, descTxt.style.color = "#c4b28e", descTxt.style.width = 412, descTxt.style.height = 72
                }, UnlockMonsterDialog.prototype.onOpened = function(cfg) {
                    this.closeBtn.getComponent(ButtonClick_1.default).setCallBack(this.close, this);
                    var monsterCfg = Confings_1.default.Instance.getMonsterById(cfg.monsterid);
                    monsterCfg && (this.nameTxt.text = monsterCfg.name, this.descTxt.innerHTML = monsterCfg.desc, this.pic.skin = ResConfig_1.ResConfig.getMonsterUrl(monsterCfg.icon)), GameControl_1.default.Instance.pauseGame(), VideoManager_1.VideoManager.Instance.showBannerAd()
                }, UnlockMonsterDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame(), VideoManager_1.VideoManager.Instance.hideBannerAd()
                }, UnlockMonsterDialog.prototype.close = function() {
                    _super.prototype.close.call(this);
                    var pic = this.pic,
                        guangImg = this.guangImg,
                        p = Laya.Point.create();
                    p.setTo(guangImg.x, guangImg.y), guangImg.parent.localToGlobal(p), guangImg.pos(p.x, p.y), this.stage.addChild(guangImg), p.setTo(pic.x, pic.y), pic.parent.localToGlobal(p), pic.pos(p.x, p.y), this.stage.addChild(pic);
                    var target = StartScene_1.default.Instance.showOrHideBtn;
                    p.setTo(target.x, target.y), target.parent.localToGlobal(p), Laya.Tween.to(guangImg, {
                        x: p.x,
                        y: p.y,
                        scaleX: .1,
                        scaleY: .1
                    }, 800, Laya.Ease.sineIn, Laya.Handler.create(this, function() {
                        guangImg.removeSelf()
                    }), 1e3), Laya.Tween.to(pic, {
                        x: p.x,
                        y: p.y,
                        scaleX: .1,
                        scaleY: .1
                    }, 800, Laya.Ease.sineIn, Laya.Handler.create(this, function() {
                        pic.removeSelf()
                    }), 1e3)
                }, UnlockMonsterDialog
            }(layaMaxUI_1.ui.dialog.UnlockMonsterUI);
        exports.default = UnlockMonsterDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/VideoManager": 112,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../scene/StartScene": 54,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    46: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            GameControl_1 = require("../script/GameControl"),
            UnlockNewModule = function(_super) {
                function UnlockNewModule() {
                    return _super.call(this) || this
                }
                return __extends(UnlockNewModule, _super), UnlockNewModule.prototype.onEnable = function() {
                    this.closeBtn.getComponent(ButtonClick_1.default).setCallBack(this.close, this)
                }, UnlockNewModule.prototype.onOpened = function() {
                    GameControl_1.default.Instance.pauseGame()
                }, UnlockNewModule.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame()
                }, UnlockNewModule
            }(layaMaxUI_1.ui.dialog.UnlockNewModuleUI);
        exports.default = UnlockNewModule
    }, {
        "../../ui/layaMaxUI": 107,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    47: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameData_1 = require("../data/GameData"),
            ButtonClick_1 = require("../script/ButtonClick"),
            String_1 = require("../core/basic/String"),
            ResConfig_1 = require("../core/ResConfig"),
            GameControl_1 = require("../script/GameControl"),
            Confings_1 = require("../data/Confings"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            CoreFunction_1 = require("../core/CoreFunction"),
            GameConfig_1 = require("../../GameConfig"),
            MessageCenter_1 = require("../core/MessageCenter"),
            UnlockPlantDialog = function(_super) {
                function UnlockPlantDialog() {
                    var _this = _super.call(this) || this;
                    return _this.hasShow = !1, _this
                }
                return __extends(UnlockPlantDialog, _super), UnlockPlantDialog.prototype.checkBtnVideo = function() {
                    if (!this.isPingbiPlant(this.cfg.id)) {
                        var shareCfg = Confings_1.default.Instance.getAppCfg();
                        if (shareCfg) {
                            var str = shareCfg.newplant,
                                isVideo = ShareManager_1.ShareManager.Instance.isVideo(str, "newplant");
                            this.adImg.visible = !0, this.adImg.skin = ResConfig_1.ResConfig.getMainUrl(isVideo ? "zwujs_icon_ship1" : "nczjs_icon_fenxb1")
                        }
                    }
                }, UnlockPlantDialog.prototype.onShare = function() {
                    var _this = this;
                    Laya.Browser.window.h5api.canPlayAd() ? Laya.Browser.window.h5api.playAd(function(data) {
                        data && "10001" == data.code && (Laya.Browser.window.h5api.canPlayAd() || (MessageCenter_1.MessageCenter.Instance.dispatch("no_ad"), _this.shareBtn.visible = !1), _this.close("1")), Laya.Browser.window.console.log("播放广告回调数据", data)
                    }) : Laya.Browser.window.console.log("没有广告资源可播放")
                }, UnlockPlantDialog.prototype.isPingbiPlant = function(id) {
                    if (10102 == id || 10103 == id || 10202 == id || 10203 == id || 10302 == id || 10303 == id) return !0
                }, UnlockPlantDialog.prototype.callback = function(succ) {
                    if (void 0 === succ && (succ = !0), succ) {
                        this.cfg;
                        DDSDK.logEvent("newplantsanbei", {}), this.close("1")
                    } else this.checkBtnVideo()
                }, UnlockPlantDialog.prototype.onEnable = function() {
                    var _this = this;
                    Laya.Browser.window.h5api.canPlayAd() || (this.shareBtn.visible = !1);
                    var myBtn = this.shareBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.onShare, this), (myBtn = this.getBtn.getComponent(ButtonClick_1.default)).setCallBack(this.close, this), this.getBtn.visible = !1, Laya.timer.once(2700, this, function() {
                        _this.getBtn.visible = !0
                    }), DDSDK.logEvent("newplantjiemian", {})
                }, UnlockPlantDialog.prototype.onOpened = function(params) {
                    var cfg = this.cfg = params[0];
                    this.gold = new Decimal(this.cfg.newTurret), this.goldTxt.text = String_1.StringUtil.decimalFormat(this.gold), this.nameTxt.text = cfg.name, this.zhanliTxt.text = String_1.StringUtil.decimalFormat(new Decimal(cfg.attack)), this.descTxt.text = cfg.desc, this.icon.skin = ResConfig_1.ResConfig.getPlantUrl(cfg.pic), this.hasShow ? this.hongdian.visible = !1 : (this.hasShow = !0, this.hongdian.visible = !0)
                }, UnlockPlantDialog.prototype.close = function(type) {
                    this.gold && _super.prototype.close.call(this, type)
                }, UnlockPlantDialog.prototype.onClosed = function(type) {
                    var rate = 1;
                    if ("1" == type) {
                        rate = 3;
                        var gold_1 = this.gold.mul(rate);
                        GameData_1.default.Instance.addGold(gold_1), CoreFunction_1.CoreFunction.showFlyGold(GameConfig_1.default.width / 2, GameConfig_1.default.height / 2, 12, 13), Laya.timer.once(700, this, function() {
                            CoreFunction_1.CoreFunction.tipMsg("Nhận " + String_1.StringUtil.decimalFormat(gold_1) + " xu")
                        })
                    }
                    GameControl_1.default.Instance.recoveryGame()
                }, UnlockPlantDialog.prototype.onDestroy = function() {}, UnlockPlantDialog
            }(layaMaxUI_1.ui.dialog.UnlockPlantUI);
        exports.default = UnlockPlantDialog
    }, {
        "../../GameConfig": 1,
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../core/basic/String": 14,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    48: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            ButtonClick_1 = require("../script/ButtonClick"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            ResConfig_1 = require("../core/ResConfig"),
            UnlockZhaLanDialog = function(_super) {
                function UnlockZhaLanDialog() {
                    return _super.call(this) || this
                }
                return __extends(UnlockZhaLanDialog, _super), UnlockZhaLanDialog.prototype.onUse = function() {
                    this.close(), LayerRoot_1.default.Instance.openScene("dialog/ZhaLanSelect.scene", !1)
                }, UnlockZhaLanDialog.prototype.onEnable = function() {
                    var myBtn = this.useBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.onUse, this), (myBtn = this.backBtn.getComponent(ButtonClick_1.default)).setCallBack(this.close, this)
                }, UnlockZhaLanDialog.prototype.onOpened = function(cfg) {
                    GameControl_1.default.Instance.pauseGame(), cfg && (this.descTxt.text = cfg.desc, this.icon.skin = ResConfig_1.ResConfig.getMainUrl(cfg.pic))
                }, UnlockZhaLanDialog.prototype.onClosed = function(type) {
                    GameControl_1.default.Instance.recoveryGame()
                }, UnlockZhaLanDialog
            }(layaMaxUI_1.ui.dialog.UnlockZhaLanUI);
        exports.default = UnlockZhaLanDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../core/ResConfig": 11,
        "../scene/LayerRoot": 52,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    49: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            ButtonClick_1 = require("../script/ButtonClick"),
            Confings_1 = require("../data/Confings"),
            ResConfig_1 = require("../core/ResConfig"),
            GameData_1 = require("../data/GameData"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            MessageCenter_1 = require("../core/MessageCenter"),
            ZhaLanSelectDialog = function(_super) {
                function ZhaLanSelectDialog() {
                    return _super.call(this) || this
                }
                return __extends(ZhaLanSelectDialog, _super), ZhaLanSelectDialog.prototype.onUse = function(cfg) {
                    cfg && (GameData_1.default.Instance.useZhaLanId = cfg.id, this.updateList(), MessageCenter_1.MessageCenter.Instance.dispatch("zhalan_use_update", cfg))
                }, ZhaLanSelectDialog.prototype.updateList = function() {
                    this.list.array = this.listData
                }, ZhaLanSelectDialog.prototype.onUnlock = function(cfg) {
                    if (cfg) switch (cfg.type) {
                        case 2:
                            ShareManager_1.ShareManager.Instance.doShareMessage(null, !0);
                            break;
                        case 3:
                            if (!Confings_1.default.Instance.getAppCfg()) return
                    }
                }, ZhaLanSelectDialog.prototype.onListRender = function(cell, index) {
                    if (this.listData && cell) {
                        var cfg = this.listData[index],
                            bg1 = cell.getChildByName("bg1"),
                            bg2 = cell.getChildByName("bg2"),
                            icon = cell.getChildByName("zhalanIcon"),
                            weijihuoBox = cell.getChildByName("weijihuoBox"),
                            yijihuoImg = cell.getChildByName("yijihuoImg"),
                            jihuoBtn = weijihuoBox.getChildByName("jihuoBtn"),
                            progressMsgTxt = weijihuoBox.getChildByName("progressMsgTxt"),
                            myBtn = jihuoBtn.getComponent(ButtonClick_1.default);
                        myBtn.setCallBack(this.onUse, this, cfg);
                        var unlockBtn = weijihuoBox.getChildByName("unlockBtn"),
                            btnTxt = unlockBtn.getChildByName("btnTxt");
                        (myBtn = unlockBtn.getComponent(ButtonClick_1.default)).setCallBack(this.onUnlock, this, cfg);
                        var nameTxt = cell.getChildByName("nameTxt"),
                            descTxt = cell.getChildByName("descTxt");
                        icon.skin = ResConfig_1.ResConfig.getMainUrl(cfg.icon);
                        var currId = GameData_1.default.Instance.useZhaLanId;
                        if (cfg.id == currId) bg1.visible = !1, bg2.visible = !0, yijihuoImg.visible = !0, weijihuoBox.visible = !1, nameTxt.text = cfg.name, descTxt.text = cfg.desc;
                        else {
                            bg1.visible = !0, bg2.visible = !1, yijihuoImg.visible = !1;
                            var pinbi = !0,
                                maxUnlockId = GameData_1.default.Instance.getUnlockZhaLanMaxId();
                            pinbi = !(maxUnlockId + 1 >= cfg.id), icon.filters = pinbi ? [(new Laya.ColorFilter).gray()] : null, nameTxt.text = pinbi ? "???" : cfg.name, descTxt.text = pinbi ? "???" : cfg.desc;
                            var max = cfg.num || 0,
                                curr = 0,
                                msg = "";
                            switch (cfg.type) {
                                case 1:
                                    break;
                                case 2:
                                    curr = GameData_1.default.Instance.maxInviteCount, msg = "邀请(    /" + (pinbi ? "?" : max) + ")", btnTxt.text = "Mời người mới";
                                    break;
                                case 3:
                                    curr = GameData_1.default.Instance.shareTimesDic.zhalanselect, msg = "看广告(    /" + (pinbi ? "?" : max) + ")", btnTxt.text = "Xem quảng cáo";
                                    break;
                                case 4:
                                    curr = GameData_1.default.Instance.loginDay, msg = "登录(    /" + (pinbi ? "?" : max) + ")";
                                    break;
                                case 5:
                                    curr = GameData_1.default.Instance.guanka + 1, msg = "Đợt " + (pinbi ? "?" : max) + "để mở khóa"
                            }
                            maxUnlockId >= cfg.id ? progressMsgTxt.text = "" : progressMsgTxt.text = msg, yijihuoImg.visible = !1, weijihuoBox.visible = !0, curr >= max ? (curr = max, unlockBtn.visible = !1, jihuoBtn.visible = !0, jihuoBtn.mouseEnabled = !0, jihuoBtn.filters = null) : 4 == cfg.type || 5 == cfg.type ? (unlockBtn.visible = !1, jihuoBtn.visible = !0, jihuoBtn.mouseEnabled = !1, jihuoBtn.filters = [(new Laya.ColorFilter).gray()]) : (unlockBtn.visible = !0, jihuoBtn.visible = !1)
                        }
                    }
                }, ZhaLanSelectDialog.prototype.onEnable = function() {
                    this.closeBtn.getComponent(ButtonClick_1.default).setCallBack(this.close, this);
                    var list = this.list;
                    list.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), list.vScrollBarSkin = "", list.visible = !1
                }, ZhaLanSelectDialog.prototype.onOpened = function() {
                    this.listData = Confings_1.default.Instance.zhalanCfg, this.list.array = this.listData, this.list.visible = !0, GameControl_1.default.Instance.pauseGame()
                }, ZhaLanSelectDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame()
                }, ZhaLanSelectDialog
            }(layaMaxUI_1.ui.dialog.ZhaLanSelectUI);
        exports.default = ZhaLanSelectDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/ShareManager": 110,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    50: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            ButtonClick_1 = require("../script/ButtonClick"),
            Confings_1 = require("../data/Confings"),
            GameData_1 = require("../data/GameData"),
            CoreFunction_1 = require("../core/CoreFunction"),
            String_1 = require("../core/basic/String"),
            MessageCenter_1 = require("../core/MessageCenter"),
            ZhuanPanDialog = function(_super) {
                function ZhuanPanDialog() {
                    var _this = _super.call(this) || this;
                    return _this.freeMaxTimes = 2, _this.adMaxTimes = 10, _this.optioning = !1, _this
                }
                return __extends(ZhuanPanDialog, _super), ZhuanPanDialog.prototype.checkBtnVideo = function() {
                    var shareCfg = Confings_1.default.Instance.getAppCfg();
                    if (shareCfg) {
                        shareCfg.zhuanpan;
                        this.adImg.visible = !0
                    }
                }, ZhuanPanDialog.prototype.onShare = function() {
                    var _this = this;
                    if (GameData_1.default.Instance.zhuanpanAdTimes < this.adMaxTimes) {
                        if (this.optioning) return;
                        this.optioning = !0, Laya.Browser.window.h5api.canPlayAd() ? Laya.Browser.window.h5api.playAd(function(data) {
                            data && "10001" == data.code && (GameData_1.default.Instance.zhuanpanAdTimes++, GameData_1.default.Instance.upload(), _this.doChouJiang(), _this.optioning = !1), Laya.Browser.window.console.log("播放广告回调数据", data)
                        }) : Laya.Browser.window.console.log("没有广告资源可播放")
                    } else CoreFunction_1.CoreFunction.tipMsg("Hết video quảng cáo hôm nay")
                }, ZhuanPanDialog.prototype.callback = function(succ) {
                    void 0 === succ && (succ = !0), succ && (GameData_1.default.Instance.zhuanpanAdTimes++, GameData_1.default.Instance.upload(), this.doChouJiang(), DDSDK.logEvent("zhuanpanshipin", {})), this.optioning = !1
                }, ZhuanPanDialog.prototype.onFree = function() {
                    if (GameData_1.default.Instance.zhuanpanFreeTimes < this.freeMaxTimes) {
                        if (this.optioning) return;
                        GameData_1.default.Instance.zhuanpanFreeTimes++, GameData_1.default.Instance.upload(), this.doChouJiang(), DDSDK.logEvent("zhuanpanmianfei", {}), this.optioning = !0
                    } else CoreFunction_1.CoreFunction.tipMsg("Lượt miễn phí hôm nay đã hết")
                }, ZhuanPanDialog.prototype.isGold = function() {
                    return this.type < 3
                }, ZhuanPanDialog.prototype.getMoneyByType = function(type) {
                    var money, bestCost = GameData_1.default.Instance.getBuyBestCost(),
                        guankaGold = 150 * GameData_1.default.Instance.guanka;
                    switch (type) {
                        case 0:
                            money = bestCost.mul(1.2).add(guankaGold);
                            break;
                        case 1:
                            money = bestCost.mul(1.5).add(guankaGold);
                            break;
                        case 2:
                            money = bestCost.mul(1.9).add(guankaGold);
                            break;
                        case 3:
                            money = new Decimal(30);
                            break;
                        case 4:
                            money = new Decimal(50);
                            break;
                        case 5:
                            money = new Decimal(70)
                    }
                    return money
                }, ZhuanPanDialog.prototype.doChouJiang = function() {
                    this.checkBtnState();
                    GameData_1.default.Instance.getBuyBestCost();
                    var random = 100 * Math.random(),
                        msg = "";
                    random < 15 ? (msg = "少量金币", this.type = 0) : random < 35 ? (msg = "中量金币", this.type = 1) : random < 50 ? (msg = "大量金币", this.type = 2) : random < 63 ? (msg = "少量钻石", this.type = 3) : random < 88 ? (msg = "中量钻石", this.type = 4) : (msg = "大量钻石", this.type = 5), this.money = this.getMoneyByType(this.type), console.log("[zhuanpan]", this.type);
                    var rotation = {
                        0: 0,
                        1: 240,
                        2: 120,
                        3: 180,
                        4: 60,
                        5: 300
                    } [this.type];
                    this.doTween(rotation, msg), MessageCenter_1.MessageCenter.Instance.dispatch("zhuanpan_times_change")
                }, ZhuanPanDialog.prototype.doTween = function(rotation, msg) {
                    var _this = this;
                    this.zhuanpanBox.rotation = this.startRotation;
                    var targetRotation = this.startRotation + 2520 + rotation;
                    Laya.Tween.to(this.zhuanpanBox, {
                        rotation: targetRotation
                    }, 2500, Laya.Ease.elasticOut, Laya.Handler.create(this, function() {
                        var x = _this.goldFlyPos.x,
                            y = _this.goldFlyPos.y,
                            min = 2,
                            max = 3;
                        switch (_this.type) {
                            case 0:
                            case 3:
                                min = 7, max = 8;
                                break;
                            case 1:
                            case 4:
                                min = 12, max = 13;
                                break;
                            case 2:
                            case 5:
                                min = 17, max = 18
                        }
                        _this.isGold() ? CoreFunction_1.CoreFunction.showFlyGold(x, y, min, max) : CoreFunction_1.CoreFunction.showFlyDiamond(x, y, min, max), Laya.timer.once(700, _this, function() {
                            CoreFunction_1.CoreFunction.tipMsg("Chúc mừng nhận được " + msg + String_1.StringUtil.decimalFormat(_this.money)), _this.isGold() ? GameData_1.default.Instance.addGold(_this.money) : GameData_1.default.Instance.addDiamond(_this.money), Laya.Browser.window.h5api.canPlayAd() || (MessageCenter_1.MessageCenter.Instance.dispatch("no_ad"), _this.adBtn.visible = !1, _this.close())
                        }), _this.optioning = !1
                    }))
                }, ZhuanPanDialog.prototype.checkBtnState = function() {
                    var freeTimes = GameData_1.default.Instance.zhuanpanFreeTimes,
                        adTimes = GameData_1.default.Instance.zhuanpanAdTimes;
                    if (this.freeMaxTimes > freeTimes) {
                        this.freeBtn.visible = !0, this.adBtn.visible = !1, this.txt.text = "今日免费次数:", this.maxTimesTxt.text = "/2";
                        var times = this.freeMaxTimes - freeTimes;
                        this.timesTxt.text = "" + (times > 0 ? times : 0)
                    } else {
                        this.freeBtn.visible = !1, this.adBtn.visible = !0, Laya.Browser.window.h5api.canPlayAd() || (this.adBtn.visible = !1), this.txt.text = "今日视频次数:", this.maxTimesTxt.text = "/10", this.timesTxt.text = "";
                        times = this.adMaxTimes - adTimes;
                        this.timesTxt.text = "" + (times > 0 ? times : 0)
                    }
                }, ZhuanPanDialog.prototype.updateGoldAward = function() {
                    GameData_1.default.Instance.getBuyBestCost();
                    for (var gold, goldTxtArr = this.goldTxtArr, i = 0; i < 6; i++) {
                        var txt = goldTxtArr[i];
                        gold = this.getMoneyByType(i), txt.text = String_1.StringUtil.decimalFormat(gold)
                    }
                }, ZhuanPanDialog.prototype.onEnable = function() {
                    var myBtn = this.closeBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(this.close, this), (myBtn = this.freeBtn.getComponent(ButtonClick_1.default)).setCallBack(this.onFree, this), Laya.Browser.window.h5api.canPlayAd() || (this.adBtn.visible = !1), (myBtn = this.adBtn.getComponent(ButtonClick_1.default)).setCallBack(this.onShare, this);
                    var zhuanpanBox = this.zhuanpanBox;
                    this.freeBtn.visible = this.adBtn.visible = !1, this.startRotation = zhuanpanBox.rotation = 0, this.goldFlyPos = Laya.Point.create(), this.goldFlyPos.x = this.goldPos.x, this.goldFlyPos.y = this.goldPos.y, this.goldPos.parent.localToGlobal(this.goldFlyPos), DDSDK.logEvent("zhuanpanjiemian", {});
                    for (var goldTxtArr = this.goldTxtArr = [], i = 0; i < 6; i++) {
                        var txt = zhuanpanBox.getChildByName("award" + i).getChildByName("goldTxt");
                        goldTxtArr.push(txt)
                    }
                }, ZhuanPanDialog.prototype.onOpened = function() {
                    GameControl_1.default.Instance.pauseGame(), this.checkBtnState(), this.updateGoldAward()
                }, ZhuanPanDialog.prototype.onClosed = function() {
                    GameControl_1.default.Instance.recoveryGame()
                }, ZhuanPanDialog
            }(layaMaxUI_1.ui.dialog.ZhuanPanUI);
        exports.default = ZhuanPanDialog
    }, {
        "../../ui/layaMaxUI": 107,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../core/basic/String": 14,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    51: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ImgAni = function(_super) {
            function ImgAni(skinKey, count, time, timeArr) {
                void 0 === time && (time = 50), void 0 === timeArr && (timeArr = null);
                var _this = _super.call(this) || this;
                return _this.index = 0, _this.time = 50, _this.skinKey = skinKey, _this.count = count, _this.time = time, _this.timeArr = timeArr, _this.update(), _this
            }
            return __extends(ImgAni, _super), ImgAni.prototype.rePlay = function() {
                this.visible = !0, this.index = 0, this.update()
            }, ImgAni.prototype.setPivot = function(x, y) {
                this.pivotX = x, this.pivotY = y
            }, ImgAni.prototype.update = function() {
                this.skin = this.skinKey + this.index + ".png", this.anchorX = .5, this.anchorY = .5, this.index++, this.index >= this.count ? (this.index = 0, this.visible = !1) : this.timerOnce(this.time, this, this.update)
            }, ImgAni
        }(Laya.Image);
        exports.default = ImgAni
    }, {}],
    52: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var LayerRoot = function(_super) {
            function LayerRoot() {
                var _this = _super.call(this) || this;
                return _this.sceneLayer = _this.createSceneLayer(), _this.dialogLayer = _this.createDialogLayer(), _this.guideLayer = _this.createGuideLayer(), _this.loadingLayer = _this.createLoadingLayer(), _this
            }
            return __extends(LayerRoot, _super), Object.defineProperty(LayerRoot, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new LayerRoot), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), LayerRoot.prototype.createSceneLayer = function() {
                var box = new Laya.Box;
                return box.width = Laya.stage.width, box.height = Laya.stage.height, Laya.stage.addChild(box), box.addChild(Laya.Scene.root), box
            }, LayerRoot.prototype.createDialogLayer = function() {
                var box = new Laya.Box;
                return Laya.stage.addChild(box), box.addChild(Laya.Dialog.manager), box
            }, LayerRoot.prototype.createGuideLayer = function() {
                var box = new Laya.Box;
                return box.mouseEnabled = !0, box.name = "GuideLayer", Laya.stage.addChild(box), box
            }, LayerRoot.prototype.createLoadingLayer = function() {
                var box = new Laya.Box;
                return box.mouseEnabled = !1, box.name = "LoadingLayer", Laya.stage.addChild(box), box
            }, LayerRoot.prototype.openScene = function(scene, closeOther, param, complete, progress) {
                scene && Laya.Scene.open(scene, closeOther, param, complete, progress)
            }, LayerRoot.prototype.closeScene = function(scene, name) {
                scene && Laya.Scene.close(scene, name)
            }, LayerRoot.prototype.openView = function(view, type) {
                void 0 === type && (type = 0);
                var layer = this.sceneLayer;
                switch (type) {
                    case 0:
                        layer = this.sceneLayer;
                        break;
                    case 1:
                        layer = this.dialogLayer
                }
                layer.addChild(view)
            }, LayerRoot.prototype.addToSceneLayer = function(view) {
                this.sceneLayer.addChild(view)
            }, LayerRoot.prototype.addToGuideLayer = function(view) {
                this.guideLayer.addChild(view)
            }, LayerRoot.prototype.addToLoadingLayer = function(view) {
                this.loadingLayer.addChild(view)
            }, LayerRoot
        }(Laya.Sprite);
        exports.default = LayerRoot
    }, {}],
    53: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            MessageCenter_1 = require("../core/MessageCenter"),
            LayerRoot_1 = require("./LayerRoot"),
            CoreFunction_1 = require("../core/CoreFunction"),
            LoadingScene = function(_super) {
                function LoadingScene() {
                    var _this = _super.call(this) || this;
                    _this.total = 100, _this._curr = 0, _this.loadingComplete = !1, LoadingScene._instance = _this;
                    var s = new Laya.Sprite;
                    return s.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000"), _this.addChildAt(s, 0), _this
                }
                return __extends(LoadingScene, _super), Object.defineProperty(LoadingScene, "Instance", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(LoadingScene.prototype, "curr", {
                    get: function() {
                        return this._curr
                    },
                    set: function(value) {
                        var progressTxt = this.progressTxt,
                            progressBar = this.progressBar,
                            barImg = this.barImg,
                            progress = this._curr / this.total;
                        progressTxt.text = Math.floor(100 * progress) + "%", progressTxt.x = progressBar.x + progressBar.width * progress, barImg.x = progressTxt.x - barImg.width / 2, progressBar.scaleX = progress, this._curr = value
                    },
                    enumerable: !0,
                    configurable: !0
                }), LoadingScene.prototype.progressTween = function() {
                    var _this = this;
                    Laya.Tween.to(this, {
                        curr: 100
                    }, 4e3, null, Laya.Handler.create(this, function() {
                        _this.curr = 0, _this.loadingComplete ? (_this.close(), _this.skeleton && CoreFunction_1.CoreFunction.releaseSkeleton(_this.skeleton)) : _this.progressTween()
                    }))
                }, LoadingScene.prototype.onEnable = function() {
                    var _this = this;
                    this.width = Laya.stage.width, this.height = Laya.stage.height, MessageCenter_1.MessageCenter.Instance.addListener("loading_complete", function() {
                        _this.loadingComplete = !0, _this.close(), _this.skeleton && CoreFunction_1.CoreFunction.releaseSkeleton(_this.skeleton)
                    }, this), this.setProgress(0), LayerRoot_1.default.Instance.addToLoadingLayer(this)
                }, LoadingScene.prototype.onClosed = function() {
                    MessageCenter_1.MessageCenter.Instance.removeByThisObj(this), this.destroy(!1)
                }, LoadingScene.prototype.showTips = function(title) {
                    this.progressMsg.text = title
                }, LoadingScene.prototype.hide = function() {}, LoadingScene.prototype.setProgress = function(progress, tween) {
                    void 0 === tween && (tween = !1);
                    var progressTxt = this.progressTxt,
                        progressBar = this.progressBar,
                        barImg = this.barImg;
                    if (progressTxt.text = Math.floor(100 * progress) + "%", tween) {
                        Laya.Tween.clearTween(progressBar), Laya.Tween.clearTween(progressTxt), Laya.Tween.clearTween(barImg);
                        var tx = progressBar.x + progressBar.width * progress;
                        Laya.Tween.to(progressTxt, {
                            x: tx
                        }, 150), Laya.Tween.to(barImg, {
                            x: tx - barImg.width / 2
                        }, 150), Laya.Tween.to(progressBar, {
                            scaleX: progress
                        }, 150)
                    } else progressTxt.x = progressBar.x + progressBar.width * progress, barImg.x = progressTxt.x - barImg.width / 2, progressBar.scaleX = progress
                }, LoadingScene
            }(layaMaxUI_1.ui.LoadingSceneUI);
        exports.default = LoadingScene
    }, {
        "../../ui/layaMaxUI": 107,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "./LayerRoot": 52
    }],
    54: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            GameControl_1 = require("../script/GameControl"),
            ButtonClick_1 = require("../script/ButtonClick"),
            GameData_1 = require("../data/GameData"),
            Confings_1 = require("../data/Confings"),
            ResConfig_1 = require("../core/ResConfig"),
            MessageCenter_1 = require("../core/MessageCenter"),
            String_1 = require("../core/basic/String"),
            Constant_1 = require("../core/Constant"),
            LayerRoot_1 = require("./LayerRoot"),
            CoreFunction_1 = require("../core/CoreFunction"),
            SkillButton_1 = require("../script/SkillButton"),
            WxSDK_1 = require("../../wxSDK/WxSDK"),
            StartScene = function(_super) {
                function StartScene() {
                    var _this = _super.call(this) || this;
                    return _this.inviteNewClick = !1, _this.pathImgArr = [], _this.handTimes = 0, _this.skillBoxShowCD = 0, _this.hechengTweenTimes = 0, StartScene._instance = _this, _this
                }
                return __extends(StartScene, _super), Object.defineProperty(StartScene, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new StartScene), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), StartScene.prototype.checkPnoneModel = function() {}, StartScene.prototype.onBuyPlant = function(type) {
                    var cfg = GameData_1.default.Instance.getBuyPlantByType(type);
                    cfg && (GameData_1.default.Instance.buyPlant(cfg) && this._control.createPlant(cfg))
                }, StartScene.prototype.updatePlant = function(cfg) {
                    this.updateBuyBtnByType(cfg.type), this.checkShopHongdian();
                    var cfgs = Confings_1.default.Instance.getPlantsByType(cfg.type);
                    cfg == cfgs[0] && cfg.type == Constant_1.PlantType.Buff && showBtnEff(this.buyBtns[1]);
                    cfg == cfgs[0] && cfg.type == Constant_1.PlantType.Range && showBtnEff(this.buyBtns[2]);
                    return;

                    function showBtnEff(target) {
                        Laya.Tween.to(target, {
                            scaleX: 1.3,
                            scaleY: 1.3
                        }, 300, null, Laya.Handler.create(null, function() {
                            Laya.Tween.to(target, {
                                scaleX: 1,
                                scaleY: 1
                            }, 200)
                        }))
                    }
                }, StartScene.prototype.updateBuyBtnByType = function(type) {
                    var cfg = GameData_1.default.Instance.getBuyPlantByType(type);
                    if (cfg) {
                        this.buyIcons[type - 1].skin = ResConfig_1.ResConfig.getPlantUrl(cfg.pic), this.buyCosts[type - 1].text = String_1.StringUtil.decimalFormat(GameData_1.default.Instance.getBuyPlantCost(cfg.id));
                        var isUnlock = GameData_1.default.Instance.isPlantUnlock(cfg.id),
                            btn = this.buyBtns[type - 1];
                        isUnlock ? (btn.mouseEnabled = !0, btn.filters = null) : (btn.mouseEnabled = !1, btn.filters = [(new Laya.ColorFilter).gray()])
                    }
                }, StartScene.prototype.updateGold = function() {
                    this.goldTxt.text = String_1.StringUtil.decimalFormat(GameData_1.default.Instance.gold)
                }, StartScene.prototype.updateDiamond = function() {
                    this.diamondTxt.text = GameData_1.default.Instance.diamond.toString()
                }, StartScene.prototype.checkZhuanpanCount = function() {
                    var freeTimes = GameData_1.default.Instance.zhuanpanFreeTimes,
                        yaoqingTimes = GameData_1.default.Instance.zhuanpanAdTimes;
                    GameData_1.default.Instance.upload(), this.zhanpanBtn.visible && (freeTimes < 2 || yaoqingTimes < 10) && Laya.Browser.window.h5api.canPlayAd() ? this.zhuanpanHongDian.visible = !0 : this.zhuanpanHongDian.visible = !1
                }, StartScene.prototype.setNoAd = function() {
                    this.skillCon.visible = !1, this.boxBtn.visible = !1, this.zhanpanBtn.visible = !1
                }, StartScene.prototype.checkShopHongdian = function() {
                    this.shopHongDian.visible = GameData_1.default.Instance.checkDiamondBuy()
                }, StartScene.prototype.showPathEff = function(path) {
                    var img = this.pathImgArr[path],
                        times = 0;
                    return void(img && (Laya.Tween.clearTween(img), img.visible = !0, img.alpha = 0, showNormalAlpha()));

                    function showChangeAlpha() {
                        if (times > 5) return img.visible = !1, void Laya.Tween.clearTween(img);
                        times++, Laya.Tween.to(img, {
                            alpha: 1
                        }, 400, null, Laya.Handler.create(null, showNormalAlpha))
                    }

                    function showNormalAlpha() {
                        Laya.Tween.to(img, {
                            alpha: 0
                        }, 400, null, Laya.Handler.create(null, showChangeAlpha))
                    }
                }, StartScene.prototype.showQipao = function(msg) {
                    this.qipaoBox.visible = !0, this.msgTxt.text = msg
                }, StartScene.prototype.hideHandTween = function() {
                    this.handTweening = !1;
                    var handImg = this.handImg;
                    handImg.visible = !1, this.handTimes = 0, Laya.Tween.clearTween(handImg), this.qipaoBox.visible = !1
                }, StartScene.prototype.showHandTween = function(type) {
                    var p = Laya.Point.create();
                    switch (type) {
                        case Constant_1.PlantType.Single:
                            p.setTo(this.buyBtn1.x, this.buyBtn1.y), this.buyBtn1.parent.localToGlobal(p);
                            break;
                        case Constant_1.PlantType.Buff:
                            p.setTo(this.buyBtn2.x, this.buyBtn2.y), this.buyBtn2.parent.localToGlobal(p);
                            break;
                        case Constant_1.PlantType.Range:
                            p.setTo(this.buyBtn3.x, this.buyBtn3.y), this.buyBtn3.parent.localToGlobal(p)
                    }
                    this.hideHandTween(), this.handTweening = !0;
                    var handImg = this.handImg;
                    handImg.x = p.x, handImg.y = p.y, handImg.visible = !0, this.showChangePos(p)
                }, StartScene.prototype.showChangePos = function(p) {
                    this.handImg;
                    this.handTimes > 4 ? this.hideHandTween() : (this.handTimes++, Laya.Tween.to(this.handImg, {
                        y: p.y - 30
                    }, 400, null, Laya.Handler.create(this, this.showNormalPos, [p])))
                }, StartScene.prototype.showNormalPos = function(p) {
                    Laya.Tween.to(this.handImg, {
                        y: p.y
                    }, 400, null, Laya.Handler.create(this, this.showChangePos, [p]))
                }, StartScene.prototype.showHechengTipTween = function(from, to) {
                    if (from && to) {
                        this.hideHandTween(), this.handTweening = !0, this.hechengTweenTimes = 0;
                        var handImg = this.handImg;
                        handImg.pos(from.x, from.y), handImg.visible = !0, this.showHechengChangePos(from, to)
                    }
                }, StartScene.prototype.showHechengChangePos = function(from, to) {
                    var handImg = this.handImg;
                    this.hechengTweenTimes > 2 ? this.hideHandTween() : (this.hechengTweenTimes++, handImg.pos(from.x, from.y), Laya.Tween.to(handImg, {
                        x: to.x,
                        y: to.y
                    }, 600, null, Laya.Handler.create(this, this.showHechengChangePos, [from, to])))
                }, StartScene.prototype.onEnable = function() {
                    var _this = this;
                    Laya.Dialog.manager.maskLayer.alpha = .7, this.checkPnoneModel(), this.width = Laya.stage.width, this.height = Laya.stage.height, MessageCenter_1.MessageCenter.Instance.addListener("plant_pos_init_complete", function() {
                        _this._control = _this.getComponent(GameControl_1.default), _this._control.prepareGame()
                    }, this);
                    var targetStartBtn = this.startBtn.getChildAt(1);
                    WxSDK_1.default.Instance.createUserInfoButton(targetStartBtn, Laya.Handler.create(this, function() {
                        console.log("点击开始游戏"), _this.startBtn.mouseEnabled = !1, GameData_1.default.Instance.createToday && DDSDK.logEvent("touchstart", {}), WxSDK_1.default.Instance.loadSubpackage("package1", Laya.Handler.create(_this, function() {
                            _this.startBtn.mouseEnabled = !0, _this._control.startGame()
                        }))
                    }));
                    var clickOpt = !0,
                        myBtn = this.shopBtn.getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(function() {
                        clickOpt && (clickOpt = !1, _this._control.pauseGame(), LayerRoot_1.default.Instance.openScene("dialog/Shop.scene", !1, null, Laya.Handler.create(_this, function() {
                            clickOpt = !0
                        })))
                    }, this), (myBtn = this.recoverBtn.getComponent(ButtonClick_1.default)).setCallBack(function() {
                        CoreFunction_1.CoreFunction.tipMsg("Kéo vào đây để bán")
                    }, this), (myBtn = this.zhanpanBtn.getComponent(ButtonClick_1.default)).setCallBack(function() {
                        clickOpt && (clickOpt = !1, GameData_1.default.Instance.checkZhuanPanOpen() && Laya.Browser.window.h5api.canPlayAd() ? LayerRoot_1.default.Instance.openScene("dialog/ZhuanPan.scene", !1, null, Laya.Handler.create(_this, function() {
                            clickOpt = !0
                        })) : CoreFunction_1.CoreFunction.tipMsg("Hết lượt hôm nay"))
                    }, this), this.skillBoxBtn.visible = !1, (myBtn = this.boxBtn.getComponent(ButtonClick_1.default)).setCallBack(function() {
                        DDSDK.logEvent("flyboxdianji", {}), LayerRoot_1.default.Instance.openScene("dialog/FlySkillBox.scene", !1)
                    }, this), (myBtn = this.playTipsOutBtn.getComponent(ButtonClick_1.default)).setCallBack(function() {
                        LayerRoot_1.default.Instance.openScene("dialog/PlayTips.scene", !1)
                    }, this), (myBtn = this.inviteNewBtn.getComponent(ButtonClick_1.default)).setCallBack(function() {
                        _this.inviteNewHongDian.visible = !1, _this.inviteNewClick = !0, LayerRoot_1.default.Instance.openScene("dialog/InviteNewPlayer.scene", !1)
                    }, this), Laya.Browser.window.h5api.canPlayAd() || this.setNoAd();
                    var skillBtn = this.skill1Cmp = this.btnSkill1.getComponent(SkillButton_1.default);
                    skillBtn.setCallBack(skillBtn.useSkill, skillBtn), (skillBtn = this.skill2Cmp = this.btnSkill2.getComponent(SkillButton_1.default)).setCallBack(skillBtn.useSkill, skillBtn), (skillBtn = this.skill3Cmp = this.btnSkill3.getComponent(SkillButton_1.default)).setCallBack(skillBtn.useSkill, skillBtn);
                    var arr = this.buyBtns = [],
                        icons = this.buyIcons = [],
                        costs = this.buyCosts = [];
                    arr.push(this.buyBtn1), arr.push(this.buyBtn2), arr.push(this.buyBtn3);
                    for (var i = 0; i < arr.length; i++) {
                        var btn = arr[i];
                        (myBtn = btn.getComponent(ButtonClick_1.default)).setCallBack(this.onBuyPlant, this, i + 1);
                        var icon = btn.getChildByName("icon"),
                            txt = btn.getChildByName("buyCostTxt");
                        icons.push(icon), costs.push(txt), this.updateBuyBtnByType(i + 1)
                    }
                    this.updateGold(), this.updateDiamond(), this.checkZhuanpanCount(), MessageCenter_1.MessageCenter.Instance.addListener("gold_update", this.updateGold, this), MessageCenter_1.MessageCenter.Instance.addListener("diamond_update", this.updateDiamond, this), MessageCenter_1.MessageCenter.Instance.addListener("buy_plant_update", this.updatePlant, this), MessageCenter_1.MessageCenter.Instance.addListener("unlock_plant_update", this.updatePlant, this), MessageCenter_1.MessageCenter.Instance.addListener("zhuanpan_times_change", this.checkZhuanpanCount, this), MessageCenter_1.MessageCenter.Instance.addListener("no_ad", this.setNoAd, this), MessageCenter_1.MessageCenter.Instance.addListener("guanka_update", function() {
                        _this.updateMap()
                    }, this), this.checkSystemOpen(), this.updateMap(), this.checkShopHongdian();
                    for (this.pathImgArr, i = 0; i < 5; i++) {
                        var element = this.pathCon.getChildByName("pathImg" + i);
                        this.pathImgArr.push(element), element.visible = !1
                    }
                }, StartScene.prototype.onDisable = function() {}, StartScene.prototype.updateMap = function() {
                    var cfg = Confings_1.default.Instance.getMapById();
                    if (cfg) {
                        this.mapImg.skin = ResConfig_1.ResConfig.getMainUrl(cfg.road_pic), this.caodiImg.skin = ResConfig_1.ResConfig.getMainUrl(cfg.land_pic);
                        var decorationList = void 0;
                        cfg.decorate && (decorationList = cfg.decorate.split(","));
                        var con = this.decorationCon,
                            num = con.numChildren;
                        if (num > 0)
                            for (var i = 0; i < num; i++) {
                                var child = con.getChildAt(i);
                                child && (decorationList && -1 != decorationList.indexOf(child.name) ? child.visible = !0 : child.visible = !1)
                            }
                    }
                }, StartScene.prototype.onSkillBoxUpdate = function() {
                    GameData_1.default.Instance.checkSkillOpen() && (DDSDK.logEvent("flyboxchuxian", {}), this.skillBoxBtn.visible = !0, this.skillBoxAni.play(0, !0), GameData_1.default.Instance.addSkillTimes >= GameData_1.default.MaxAddSkillTimes && Laya.timer.clear(this, this.onSkillBoxUpdate))
                }, StartScene.prototype.checkSystemOpen = function() {
                    var skillOpen = GameData_1.default.Instance.checkSkillOpen();
                    this.skillCon.visible = skillOpen, Laya.Browser.window.h5api.canPlayAd() || (this.skillCon.visible = !1), this.awardCon.visible = !1, skillOpen && GameData_1.default.Instance.isNewModule("skill") && (GameData_1.default.Instance.newModuleIds.push("skill"), LayerRoot_1.default.Instance.openScene("dialog/UnlockNewModule.scene", !1));
                    var isZhuanpanOpen = GameData_1.default.Instance.checkZhuanPanOpen();
                    this.zhuanpanHongDian.visible = this.zhanpanBtn.visible = isZhuanpanOpen, this.playTipsOutBtn.visible = !isZhuanpanOpen, Laya.Browser.window.h5api.canPlayAd() || (this.zhuanpanHongDian.visible = this.zhanpanBtn.visible = !1)
                }, StartScene.prototype.checkSkillBox = function(dt) {
                    if (Laya.Browser.window.h5api.canPlayAd() && GameData_1.default.Instance.checkSkillOpen()) {
                        var now = GameControl_1.default.Instance.onlineTime;
                        if (this.skillBoxShowCD || (this.skillBoxShowCD = now + 4e4), this.skillBoxShowCD < now) {
                            DDSDK.logEvent("flyboxchuxian", {}), this.skillBoxShowCD = now + 7e4;
                            var boxBtn_1 = this.boxBtn;
                            boxBtn_1.bottom = 800, boxBtn_1.scale(.1, .1), boxBtn_1.visible = !0, Laya.Tween.to(boxBtn_1, {
                                scaleX: 1,
                                scaleY: 1
                            }, 500), Laya.Tween.to(boxBtn_1, {
                                bottom: 480
                            }, 700, Laya.Ease.sineOut, null, 1e3), Laya.timer.once(3e4, this, function() {
                                boxBtn_1.visible = !1
                            })
                        }
                    }
                }, StartScene.prototype.hideSkillBox = function() {
                    this.boxBtn.visible = !1;
                    var now = GameControl_1.default.Instance.onlineTime;
                    this.skillBoxShowCD = now + 4e4
                }, StartScene.prototype.updateLogic = function(dt) {
                    this.skill1Cmp.updateLogic(dt), this.skill2Cmp.updateLogic(dt), this.skill3Cmp.updateLogic(dt), this.checkSkillBox(dt)
                }, StartScene.PlantMax = 5, StartScene
            }(layaMaxUI_1.ui.scene.StartSceneUI);
        exports.default = StartScene
    }, {
        "../../ui/layaMaxUI": 107,
        "../../wxSDK/WxSDK": 113,
        "../core/Constant": 6,
        "../core/CoreFunction": 7,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../core/basic/String": 14,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56,
        "../script/SkillButton": 57,
        "./LayerRoot": 52
    }],
    55: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ButtonEff, ButtonClick = function(_super) {
            function ButtonClick() {
                var _this = _super.call(this) || this;
                return _this.soundName = "hit", _this.isScale = !0, _this
            }
            return __extends(ButtonClick, _super), ButtonClick.prototype.setCallBack = function(callback, thisObj, argArray) {
                this.callback = callback, this.thisObj = thisObj, this.argArray = argArray;
                var effType = this.effType;
                if (effType) switch (+effType) {
                    case ButtonEff.Eff1:
                        this.showEff1()
                }
            }, ButtonClick.prototype.showEff1 = function() {
                var owner = this.owner,
                    times = 0;
                return void toChange();

                function toChange() {
                    var delay = 0;
                    ++times >= 2 && (delay = 2e3, times = 0), Laya.Tween.to(owner, {
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, 200, null, Laya.Handler.create(this, toNormal), delay)
                }

                function toNormal() {
                    Laya.Tween.to(owner, {
                        scaleX: 1,
                        scaleY: 1
                    }, 200, null, Laya.Handler.create(this, toChange))
                }
            }, ButtonClick.prototype.onClick = function(e) {
                this.callback && this.thisObj && this.callback.apply(this.thisObj, [this.argArray])
            }, ButtonClick.prototype.onMouseDown = function() {
                this.owner.scale(1, 1), this.isScale && this.owner.scale(.85, .85)
            }, ButtonClick.prototype.onMouseUp = function() {
                this.isScale && this.owner.scale(1, 1)
            }, ButtonClick.prototype.onMouseOut = function() {
                this.isScale && this.owner.scale(1, 1)
            }, ButtonClick.prototype.onEnable = function() {}, ButtonClick.prototype.onDisable = function() {}, ButtonClick
        }(Laya.Script);
        exports.default = ButtonClick,
            function(ButtonEff) {
                ButtonEff[ButtonEff.Eff1 = 1] = "Eff1", ButtonEff[ButtonEff.Eff2 = 2] = "Eff2", ButtonEff[ButtonEff.Eff3 = 3] = "Eff3"
            }(ButtonEff = exports.ButtonEff || (exports.ButtonEff = {}))
    }, {}],
    56: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var StartScene_1 = require("../scene/StartScene"),
            PlantView_1 = require("../view/PlantView"),
            Confings_1 = require("../data/Confings"),
            MonsterView_1 = require("../view/MonsterView"),
            PlantFactory_1 = require("./plant/PlantFactory"),
            BulletFactory_1 = require("./buttle/BulletFactory"),
            MonsterFactory_1 = require("./monster/MonsterFactory"),
            MonsterManager_1 = require("./manager/MonsterManager"),
            BuffManager_1 = require("./manager/BuffManager"),
            FramePlayerManager_1 = require("./manager/FramePlayerManager"),
            GameData_1 = require("../data/GameData"),
            MessageCenter_1 = require("../core/MessageCenter"),
            MathEx_1 = require("../core/MathEx"),
            ColliderUtil_1 = require("../core/ColliderUtil"),
            NewGunakaView_1 = require("../view/NewGunakaView"),
            BossJingBaoView_1 = require("../view/BossJingBaoView"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            GroundView_1 = require("../view/GroundView"),
            PlantBoxManager_1 = require("./manager/PlantBoxManager"),
            GuideView_1 = require("../view/GuideView"),
            Constant_1 = require("../core/Constant"),
            IceBuff_1 = require("./buff/IceBuff"),
            GoldMonsterTipView_1 = require("../view/GoldMonsterTipView"),
            YunShiBuff_1 = require("./buff/YunShiBuff"),
            GameControl = function(_super) {
                function GameControl() {
                    var _this = _super.call(this) || this;
                    return _this._slowDt = 1e3 / 30, _this._fastDt = 1e3 / 60, _this._start = !1, _this._started = !1, _this.plantList = [], _this.monsterList = [], _this.bulletList = [], _this.monsterDeadCount = 0, _this._onlineTime = 0, _this.checkHandGuideCD = 0, _this.showNoPlantWarn = !1, _this.guanka3Tips = !1, _this.guanka5Tips = !1, GameControl._instance = _this, Laya.timer.once(200, _this, function() {}), _this
                }
                return __extends(GameControl, _super), Object.defineProperty(GameControl.prototype, "monsters", {
                    get: function() {
                        return this.monsterList
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameControl.prototype, "onlineTime", {
                    get: function() {
                        return this._onlineTime
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameControl, "Instance", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), GameControl.prototype.showMonsterList = function() {
                    for (var key in console.log("mnonster list:", this.monsterList.length), this.monsterList) {
                        var element = this.monsterList[key];
                        console.log("$monsterX" + element.Owner.x + ",$monsterY" + element.Owner.y), console.log("" + !element.Owner.parent)
                    }
                }, Object.defineProperty(GameControl.prototype, "Owner", {
                    get: function() {
                        return this.owner
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(GameControl.prototype, "recoverBtn", {
                    get: function() {
                        return this.Owner.recoverBtn
                    },
                    enumerable: !0,
                    configurable: !0
                }), GameControl.prototype.prepareGame = function() {
                    var guanka = GameData_1.default.Instance.guanka + 1;
                    GameData_1.default.Instance.unlockPlantByGuanka(guanka), GameData_1.default.Instance.updateNewSlotsByGuanKa(guanka);
                    var guankaCfgs = this.guankaCfgs = Confings_1.default.Instance.getGuankaTurns(guanka);
                    guankaCfgs ? (this.currTurn = 1, this.guankaCfg = Confings_1.default.Instance.getGuankaCfgByTurn(this.currTurn, guankaCfgs), PlantBoxManager_1.default.Instance.init(this.guankaCfg), this.Owner.guankaClip.value = guanka + "", this.maxTurn = guankaCfgs.length, this.updateTurnInfo(), console.log("[prepareGame]"), this.updateMonsterProggress(), this.initSlotPlants()) : console.log("未取到关卡id:[" + (GameData_1.default.Instance.guanka + 1) + "]配置")
                }, GameControl.prototype.initSlotPlants = function() {
                    var plants = GameData_1.default.Instance.slotPlants;
                    if (plants)
                        for (var key in plants) {
                            var vo = plants[key];
                            if (vo && vo.id)
                                if (vo.id < 0) {
                                    var box = PlantBoxManager_1.default.Instance.createPlantBox(+key);
                                    PlantView_1.default.Instance.addLuckyBoxAtSlot(box, +key)
                                } else {
                                    var cfg = Confings_1.default.Instance.getPlantById(vo.id);
                                    cfg && this.createPlantBySlot(cfg, vo.slot, vo.bianyiId)
                                }
                        }
                }, GameControl.prototype.startGame = function() {
                    var _this = this;
                    this._start || (this.Owner.startBtn.visible = !1, GuideView_1.default.Instance.checkGuideId(1) && 0 == GameData_1.default.Instance.guanka ? GuideView_1.default.Instance.showGuide(1, 3, Laya.Handler.create(this, function() {
                        _this.doStart()
                    })) : this.doStart())
                }, GameControl.prototype.doStart = function() {
                    var _this = this;
                    this._started = !0, this._start = !0;
                    var guanka = GameData_1.default.Instance.guanka + 1;
                    NewGunakaView_1.default.Instance.show(guanka, Laya.Handler.create(this, function() {
                        GameData_1.default.Instance.isGoldGuanKa(guanka) ? GoldMonsterTipView_1.default.Instance.show(Laya.Handler.create(_this, function() {
                            _this.showBoShu(), _this.initMonster()
                        })) : (_this.showBoShu(), _this.initMonster())
                    }))
                }, GameControl.prototype.pauseGame = function() {
                    this._started && (this._start = !1, console.log("游戏暂停"))
                }, GameControl.prototype.recoveryGame = function() {
                    this._started && (this._start = !0, console.log("游戏暂停结束"))
                }, GameControl.prototype.startNextGame = function() {
                    this._start = !0, GameData_1.default.Instance.turnRelifeCount = 0, StartScene_1.default.Instance.checkSystemOpen(), this.initGame(), GameData_1.default.Instance.updataUnlockIds()
                }, GameControl.prototype.initGame = function() {
                    var _this = this,
                        guanka = GameData_1.default.Instance.guanka + 1;
                    GameData_1.default.Instance.unlockPlantByGuanka(guanka), GameData_1.default.Instance.updateNewSlotsByGuanKa(guanka);
                    var guankaCfgs = this.guankaCfgs = Confings_1.default.Instance.getGuankaTurns(guanka);
                    guankaCfgs ? NewGunakaView_1.default.Instance.show(guanka, Laya.Handler.create(this, function() {
                        GameData_1.default.Instance.isGoldGuanKa(guanka) ? GoldMonsterTipView_1.default.Instance.show(Laya.Handler.create(_this, function() {
                            _this.currTurn = 1, _this.guankaCfg = Confings_1.default.Instance.getGuankaCfgByTurn(_this.currTurn, guankaCfgs), PlantBoxManager_1.default.Instance.init(_this.guankaCfg), _this.Owner.guankaClip.value = guanka + "", _this.maxTurn = guankaCfgs.length, _this.updateTurnInfo(), _this.showBoShu(), _this.initMonster()
                        })) : (_this.currTurn = 1, _this.guankaCfg = Confings_1.default.Instance.getGuankaCfgByTurn(_this.currTurn, guankaCfgs), PlantBoxManager_1.default.Instance.init(_this.guankaCfg), _this.Owner.guankaClip.value = guanka + "", _this.maxTurn = guankaCfgs.length, _this.updateTurnInfo(), _this.showBoShu(), _this.initMonster())
                    })) : console.log("未取到关卡id:[" + (GameData_1.default.Instance.guanka + 1) + "]配置")
                }, GameControl.prototype.updateTurnInfo = function() {
                    this.Owner.turnClip.value = "" + this.currTurn
                }, GameControl.prototype.showBoShu = function() {
                    var label = Laya.Pool.getItemByClass("label", Laya.Label);
                    label.text = "Đợt " + this.currTurn /* + "波" */, label.width = 180, label.align = "center";
                    var x = (Laya.stage.width - label.width) / 2,
                        y = (Laya.stage.height - label.height) / 2 - 200;
                    label.pos(x, y), label.color = "#fff", label.font = "Arial", label.fontSize = 30, label.stroke = 2, label.strokeColor = "#000", Laya.stage.addChild(label), Laya.Tween.to(label, {
                        y: y - 100
                    }, 1200, null, Laya.Handler.create(label, function(t) {
                        t.removeSelf(), Laya.Pool.recover("label", t)
                    }, [label]))
                }, GameControl.prototype.updateMonsterProggress = function() {
                    if (this.guankaCfg) {
                        var total = this.guankaCfg.allCount + this.fisionCount,
                            scale = this.monsterDeadCount / total;
                        this.Owner.turnBar.scaleX = scale > 1 ? 1 : scale, this.monsterDeadCount >= total && (this.currTurn++, this.monsterDeadCount = 0, this.fisionCount = 0, this.showNoPlantWarn = !1, GameData_1.default.Instance.turnRelifeCount = 0, this.checkNextTurn())
                    }
                }, GameControl.prototype.checkNextTurn = function() {
                    var _this = this;
                    this.currTurn > this.maxTurn ? (this.pauseGame(), Laya.timer.once(1e3, this, this.showWin)) : (this.guankaCfg = Confings_1.default.Instance.getGuankaCfgByTurn(this.currTurn, this.guankaCfgs), this.guankaCfg && (PlantBoxManager_1.default.Instance.init(this.guankaCfg), this.updateTurnInfo(), this.showBoShu(), this.currTurn == this.maxTurn ? Laya.timer.once(500, this, function() {
                        BossJingBaoView_1.default.Instance.show(Laya.Handler.create(_this, function() {
                            _this.initMonster()
                        }))
                    }) : this.initMonster()))
                }, GameControl.prototype.showWin = function() {
                    if (console.log("[showWin]", this.guankaCfg), this.guankaCfg) {
                        GameData_1.default.Instance.guanka = this.guankaCfg.guanka, MessageCenter_1.MessageCenter.Instance.dispatch("guanka_update"), GameData_1.default.Instance.upload(), GameData_1.default.Instance.updateBestLvPlant();
                        var money = GameData_1.default.Instance.getJieSuanGold();
                        LayerRoot_1.default.Instance.openScene("dialog/GuankaWin.scene", !1, [money])
                    }
                }, GameControl.prototype.initNextGuanka = function() {
                    if (this.guankaCfg) {
                        var nextGuankaCfg = Confings_1.default.Instance.getGuankaById(this.guankaCfg.nextId);
                        nextGuankaCfg && (GroundView_1.default.Instance.recover(), console.log("[showWin nextGuankaCfg]", nextGuankaCfg), this.startNextGame())
                    }
                }, GameControl.prototype.gameover = function() {
                    this.pauseGame(), Laya.timer.once(1e3, this, function() {
                        LayerRoot_1.default.Instance.openScene("dialog/GuankaFail.scene", !1)
                    })
                }, GameControl.prototype.fuhuo = function() {
                    console.log("@@@@@@@@@@@@@@@@@@@@@@@fuhuo"), this.clear(), this.guankaCfg = Confings_1.default.Instance.getGuankaCfgByTurn(this.currTurn, this.guankaCfgs), this.guankaCfg ? (this.recoveryGame(), this.updateTurnInfo(), this.initMonster()) : console.log("[复活失败, this.currTurn:" + this.currTurn + ", this.guankaCfgs:" + this.guankaCfgs + "]")
                }, GameControl.prototype.resetGame = function() {
                    console.log("@@@@@@@@@@@@@@@@@@@@@@@resetGame"), this.clear(), this.startNextGame()
                }, GameControl.prototype.clear = function() {
                    console.log("`````````````````````````````clear"), this.monsterDeadCount = 0, GroundView_1.default.Instance.recover();
                    for (var monsterList = this.monsterList, bulletList = this.bulletList, index = monsterList.length - 1; index >= 0; index--) {
                        var monster = monsterList[index];
                        this.removeMonster(monster)
                    }
                    for (index = bulletList.length - 1; index >= 0; index--) {
                        var bullet = bulletList[index];
                        this.removeBullet(bullet)
                    }
                }, GameControl.prototype.initMonster = function() {
                    var guankaCfg = this.guankaCfg;
                    if (guankaCfg) {
                        var fision = 0,
                            ids = guankaCfg.monsterId.split(","),
                            counts = guankaCfg.monstrCount.split(",");
                        for (var i in ids) {
                            var m = Confings_1.default.Instance.getShuZhiById(+ids[i]),
                                c = +counts[i];
                            m && (fision += m.fission * c)
                        }
                        this.fisionCount = fision, MonsterManager_1.default.Instance.init(guankaCfg), this.updateMonsterProggress();
                        var newTuJian = GameData_1.default.Instance.getNewMonster(guankaCfg.id);
                        newTuJian && LayerRoot_1.default.Instance.openScene("dialog/UnlockMonster.scene", !1, newTuJian), MessageCenter_1.MessageCenter.Instance.dispatch("monster_init_complete")
                    }
                }, GameControl.prototype.createPlant = function(cfg) {
                    var plant = PlantFactory_1.default.Instance.create(cfg.type, this.plant);
                    PlantView_1.default.Instance.addItem(plant, cfg), plant && this.plantList.push(plant)
                }, GameControl.prototype.createPlantBySlot = function(cfg, slot, bianyiId) {
                    var plant = PlantFactory_1.default.Instance.create(cfg.type, this.plant);
                    PlantView_1.default.Instance.createItem(plant, cfg, slot, bianyiId), plant && this.plantList.push(plant)
                }, GameControl.prototype.removePlant = function(plant) {
                    var idx = this.plantList.indexOf(plant); - 1 != idx && (this.plantList.splice(idx, 1), plant.owner && plant.owner.removeSelf(), PlantFactory_1.default.Instance.destory(plant.type, plant))
                }, GameControl.prototype.createMonster = function(cfg, path, y) {
                    if (void 0 === y && (y = 0), cfg) {
                        var monster = MonsterFactory_1.default.Instance.create(cfg.type, this.monster);
                        monster.bornY = y, MonsterView_1.default.Instance.addItem(monster, cfg, path), this.monsterList.push(monster)
                    }
                }, GameControl.prototype.hitMonster = function(data) {
                    data.monster.beHit(data.collider, data.damage, data.buff, data.bianyiBuff)
                }, GameControl.prototype.addBuffMonster = function(buffs) {
                    var monsterList = this.monsterList,
                        count = buffs ? buffs.length : 0,
                        activeList = [];
                    monsterList.forEach(function(element) {
                        element.active && activeList.push(element)
                    });
                    var mLen = activeList.length;
                    count = MathEx_1.default.Inst.clamp(count, 0, mLen);
                    for (var addIdxs = [], whiles = 0; count;) {
                        var idx = MathEx_1.default.Inst.randomInt(0, mLen - 1),
                            monster = activeList[idx];
                        monster && -1 == addIdxs.indexOf(idx) && (monster.addBuff(buffs.shift()), addIdxs.push(idx), count--), ++whiles > 199 && (count = 0, console.log("error: while never end!"))
                    }
                }, GameControl.prototype.addBuffAllMonster = function(buff) {
                    this.monsterList.forEach(function(element) {
                        if (element.active) switch (buff.type) {
                            case Constant_1.BuffType.Ice:
                                var b_1 = new IceBuff_1.default(buff.value, buff.time);
                                element.addBuff(b_1);
                                break;
                            case Constant_1.BuffType.YunShi:
                                var b = new YunShiBuff_1.default(buff.value, buff.time, buff.bossValue);
                                element.addBuff(b)
                        }
                    })
                }, GameControl.prototype.removeMonster = function(monster) {
                    var idx = this.monsterList.indexOf(monster); - 1 != idx && (this.monsterList.splice(idx, 1), monster.owner && monster.owner.removeSelf(), MonsterFactory_1.default.Instance.destory(monster.type, monster))
                }, GameControl.prototype.addBullet = function(bullet, plantPos) {
                    void 0 === plantPos && (plantPos = !0), PlantView_1.default.Instance.addBullet(bullet, plantPos) && bullet && this.bulletList.push(bullet)
                }, GameControl.prototype.addBulletByPos = function(bullet, pos) {
                    var _this = this;
                    Laya.timer.frameOnce(1, this, function() {
                        PlantView_1.default.Instance.addBulletByPos(bullet, pos), _this.bulletList.push(bullet)
                    })
                }, GameControl.prototype.removeBullet = function(bullet) {
                    var idx = this.bulletList.indexOf(bullet); - 1 != idx && this.bulletList.splice(idx, 1), bullet && (bullet.owner && bullet.owner.removeSelf(), BulletFactory_1.default.Instance.destory(bullet.type, bullet))
                }, GameControl.prototype.doAOE = function(rect, damage) {
                    for (var monsterList = this.monsterList, index = monsterList.length - 1; index >= 0; index--) {
                        var element = monsterList[index];
                        element && ColliderUtil_1.ColliderUtil.rectHittest(element.Rectangle, rect) && element.beHit(null, damage, null)
                    }
                }, GameControl.prototype.doAOEByPath = function(path, damage) {
                    for (var monsterList = this.monsterList, index = monsterList.length - 1; index >= 0; index--) {
                        var element = monsterList[index];
                        element && element.path == path && element.beHit(null, damage, null)
                    }
                }, GameControl.prototype.orderMonsters = function() {
                    var monsters = this.monsterList;
                    if (monsters) {
                        monsters.sort(function(a, b) {
                            return a.Owner && b.Owner ? a.Owner.y - b.Owner.y : 0
                        });
                        for (var index = monsters.length - 1; index >= 0; index--) {
                            var element = monsters[index];
                            element.parent && element.parent.addChildAt(element.Owner, 0)
                        }
                    }
                }, GameControl.prototype.newPlantUnlock = function(cfg) {
                    this.pauseGame(), LayerRoot_1.default.Instance.openScene("dialog/UnlockPlant.scene", !1, [cfg])
                }, GameControl.prototype.onEnable = function() {
                    var _this = this;
                    console.log("[ GameControl onEnable ]"), MessageCenter_1.MessageCenter.Instance.addListener("monster_dead_update", function() {
                        _this.monsterDeadCount++, _this.updateMonsterProggress()
                    }, this), MessageCenter_1.MessageCenter.Instance.addListener("monster_behit_event", this.hitMonster, this), MessageCenter_1.MessageCenter.Instance.addListener("monster_addbuff", this.addBuffMonster, this), MessageCenter_1.MessageCenter.Instance.addListener("allmonster_addbuff", this.addBuffAllMonster, this), MessageCenter_1.MessageCenter.Instance.addListener("game_over", this.gameover, this), MessageCenter_1.MessageCenter.Instance.addListener("hehceng_new_plant", this.newPlantUnlock, this), Laya.stage.on(Laya.Event.CLICK, this, this.onStageClick)
                }, GameControl.prototype.onStageClick = function() {
                    this.checkHandGuideCD = this._onlineTime, StartScene_1.default.Instance.hideHandTween()
                }, GameControl.prototype.checkPathNoPlantWarn = function() {
                    if (!(GameData_1.default.Instance.guanka >= 4 || this.onlineTime < this._nextyWarnTime)) {
                        this._nextyWarnTime = this.onlineTime + 2e3;
                        var monsterPaths = [],
                            plantPaths = [],
                            plantList = this.plantList,
                            monsterList = this.monsterList;
                        for (var key in plantList) {
                            var path = plantList[key].index % 5; - 1 == plantPaths.indexOf(path) && plantPaths.push(path)
                        }
                        for (var key in monsterList) {
                            path = monsterList[key].path; - 1 == monsterPaths.indexOf(path) && monsterPaths.push(path)
                        }
                        var showWarn = !1;
                        for (var key in monsterPaths) {
                            path = monsterPaths[key]; - 1 == plantPaths.indexOf(path) && (StartScene_1.default.Instance.showPathEff(path), showWarn = !0)
                        }
                        if (!this.showNoPlantWarn && showWarn) {
                            this.showNoPlantWarn = !0;
                            var cfg = GameData_1.default.Instance.getBuyCheapestPlant();
                            cfg && StartScene_1.default.Instance.showHandTween(cfg.type)
                        }
                    }
                }, GameControl.prototype.checkHandGuide = function() {
                    var currGuanka = GameData_1.default.Instance.currGuanka;
                    if (currGuanka > 5) Laya.stage.off(Laya.Event.CLICK, this, this.onStageClick);
                    else {
                        var now = this._onlineTime;
                        if (now - this.checkHandGuideCD > 3e3)
                            if (this.checkHandGuideCD = now, 3 != currGuanka || this.guanka3Tips)
                                if (5 != currGuanka || this.guanka5Tips) {
                                    var p = PlantView_1.default.Instance.getHechengPlants();
                                    p && StartScene_1.default.Instance.showHechengTipTween(p[0], p[1])
                                } else this.guanka5Tips = !0, StartScene_1.default.Instance.showHandTween(Constant_1.PlantType.Range), StartScene_1.default.Instance.showQipao("Cây dạng trùm sẽ gây sát thương vùng cho Zombie");
                        else this.guanka3Tips = !0, StartScene_1.default.Instance.showHandTween(Constant_1.PlantType.Buff), StartScene_1.default.Instance.showQipao("Làm chậm đáng kể lũ Zombie")
                    }
                }, GameControl.prototype.onUpdate = function() {
                    var dt = Laya.timer.delta;
                    if (dt = dt < 1e3 / 30 ? this._fastDt : this._slowDt, this._onlineTime += dt, this._start) {
                        this.checkHandGuide(), this.checkPathNoPlantWarn();
                        var plantList = this.plantList,
                            monsterList = this.monsterList,
                            bulletList = this.bulletList;
                        for (var key in plantList) {
                            plantList[key].updateLogic(dt)
                        }
                        for (var key in monsterList) {
                            monsterList[key].updateLogic(dt)
                        }
                        for (var key in this.orderMonsters(), bulletList) {
                            bulletList[key].updateLogic(dt)
                        }
                        GameData_1.default.Instance.getSkillState(Constant_1.SkillType.Ice) || MonsterManager_1.default.Instance.updateLogic(dt), BuffManager_1.default.Instance.updateLogic(dt), FramePlayerManager_1.default.Instance.updateLogic(dt), PlantBoxManager_1.default.Instance.updateLogic(dt), StartScene_1.default.Instance.updateLogic(dt)
                    }
                }, GameControl
            }(Laya.Script);
        exports.default = GameControl
    }, {
        "../core/ColliderUtil": 4,
        "../core/Constant": 6,
        "../core/MathEx": 9,
        "../core/MessageCenter": 10,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../scene/LayerRoot": 52,
        "../scene/StartScene": 54,
        "../view/BossJingBaoView": 96,
        "../view/GoldMonsterTipView": 98,
        "../view/GroundView": 99,
        "../view/GuideView": 100,
        "../view/MonsterView": 102,
        "../view/NewGunakaView": 103,
        "../view/PlantView": 105,
        "./buff/IceBuff": 62,
        "./buff/YunShiBuff": 66,
        "./buttle/BulletFactory": 68,
        "./manager/BuffManager": 75,
        "./manager/FramePlayerManager": 76,
        "./manager/MonsterManager": 77,
        "./manager/PlantBoxManager": 78,
        "./monster/MonsterFactory": 85,
        "./plant/PlantFactory": 92
    }],
    57: [function(require, module, exports) {
        "use strict";
        var _a;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ButtonClick_1 = require("./ButtonClick"),
            GameData_1 = require("../data/GameData"),
            Confings_1 = require("../data/Confings"),
            ResConfig_1 = require("../core/ResConfig"),
            DateUtil_1 = require("../core/DateUtil"),
            MessageCenter_1 = require("../core/MessageCenter"),
            CoreFunction_1 = require("../core/CoreFunction"),
            Constant_1 = require("../core/Constant"),
            IceBuff_1 = require("./buff/IceBuff"),
            ShareManager_1 = require("../../wxSDK/ShareManager"),
            GameControl_1 = require("./GameControl"),
            YunShiBuff_1 = require("./buff/YunShiBuff"),
            EffectView_1 = require("../view/EffectView"),
            FramePlayerManager_1 = require("./manager/FramePlayerManager"),
            SkillButton = function(_super) {
                function SkillButton() {
                    var _this = null !== _super && _super.apply(this, arguments) || this;
                    return _this._timeout = -1, _this.isTweening = !1, _this
                }
                return __extends(SkillButton, _super), Object.defineProperty(SkillButton.prototype, "timeout", {
                    get: function() {
                        return this._timeout
                    },
                    set: function(val) {
                        this._timeout = val, this.timeTxt.text = DateUtil_1.default.formatSecondsTime1(Math.floor(this._timeout / 1e3))
                    },
                    enumerable: !0,
                    configurable: !0
                }), SkillButton.prototype.onEnable = function() {
                    var _this = this,
                        effImg = this.effImg = this.owner.getChildAt(0);
                    effImg.visible = !1;
                    var icon = this.iconImg = this.owner.getChildAt(1),
                        timeImg = (this.countImg = this.owner.getChildAt(2), this.timeImg = this.owner.getChildAt(3)),
                        timeTxt = (this.freeImg = this.owner.getChildAt(4), this.timeTxt = this.owner.getChildAt(5)),
                        countTxt = this.countTxt = this.owner.getChildAt(6),
                        cfg = this.cfg = Confings_1.default.Instance.getSkillById(this.skillid);
                    icon.skin = ResConfig_1.ResConfig.getMainUrl(cfg.pic);
                    var vo = GameData_1.default.Instance.skillCount(this.skillid);
                    SkillButton.freeSkill[this.skillid];
                    countTxt.text = vo.count + "", timeTxt.text = "00:00", timeImg.visible = timeTxt.visible = !1, this.updateCountOrFree(!0), MessageCenter_1.MessageCenter.Instance.addListener("update_skill_count", function() {
                        _this.updateCountOrFree(!0)
                    }, this), MessageCenter_1.MessageCenter.Instance.addListener("groud_hp_update", function() {
                        _this.times = 0;
                        var idCount = GameData_1.default.Instance.skillCount(_this.skillid);
                        !_this.isTweening && idCount.count > 0 && (_this.isTweening = !0, effImg.visible = !0, _this.toBig())
                    }, this)
                }, SkillButton.prototype.toBig = function() {
                    this.times < 2 ? (this.times++, Laya.Tween.to(this.effImg, {
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, 200, null, Laya.Handler.create(this, this.toNormal))) : (Laya.Tween.clearTween(this.effImg), this.effImg.visible = !1, this.isTweening = !1)
                }, SkillButton.prototype.toNormal = function() {
                    Laya.Tween.to(this.effImg, {
                        scaleX: 1,
                        scaleY: 1
                    }, 200, null, Laya.Handler.create(this, this.toBig))
                }, SkillButton.prototype.useSkill = function() {
                    var _this = this;
                    if (!(this.timeout > 0))
                        if (+this.countTxt.text <= 0)
                            if (SkillButton.freeSkill[this.skillid]) {
                                this.skillid;
                                GameControl_1.default.Instance.pauseGame(), Laya.Browser.window.h5api.canPlayAd() ? Laya.Browser.window.h5api.playAd(function(data) {
                                    if (data && "10001" == data.code) {
                                        _this.doShareOrVideoCallback(!0);
                                        _this.effImg = _this.owner.getChildAt(0);
                                        Laya.Browser.window.h5api.canPlayAd() || MessageCenter_1.MessageCenter.Instance.dispatch("no_ad")
                                    }
                                    Laya.Browser.window.console.log("播放广告回调数据", data)
                                }) : Laya.Browser.window.console.log("没有广告资源可播放")
                            } else CoreFunction_1.CoreFunction.tipMsg(this.cfg.name + "thiếu kỹ năng");
                    else this.doShareOrVideoCallback(!0)
                }, SkillButton.prototype.doShareOrVideoCallback = function(suc) {
                    if (suc) {
                        var timeImg = this.timeImg,
                            timeTxt = this.timeTxt,
                            countTxt = (this.countImg, this.countTxt),
                            cfg_1 = this.cfg;
                        if (+countTxt.text <= 0) SkillButton.freeSkill[this.skillid]--, DDSDK.logEvent("skill" + (cfg_1.type + 1) + "shipin", {});
                        else {
                            var count = GameData_1.default.Instance.useSkill(this.skillid);
                            countTxt.text = count + ""
                        }
                        GameData_1.default.Instance.setSkillState(this.skillid, !0), this._timeout = 1e3 * cfg_1.time, timeImg.visible = timeTxt.visible = !0, this.updateCountOrFree(!1), cfg_1.type == Constant_1.SkillType.Ice ? MessageCenter_1.MessageCenter.Instance.dispatch("allmonster_addbuff", new IceBuff_1.default(cfg_1.value, 1e3 * cfg_1.time)) : cfg_1.type == Constant_1.SkillType.YunShi && (this.showYunShiEff(), Laya.timer.once(1200, this, function() {
                            MessageCenter_1.MessageCenter.Instance.dispatch("allmonster_addbuff", new YunShiBuff_1.default(cfg_1.value, 1e3 * cfg_1.time, cfg_1.bossvalue))
                        })), CoreFunction_1.CoreFunction.tipMsg("Mở " + this.cfg.name + "kỹ năng"), DDSDK.logEvent("skill" + (cfg_1.type + 1), {})
                    }
                    GameControl_1.default.Instance.recoveryGame()
                }, SkillButton.prototype.showYunShiEff = function() {
                    for (var _this = this, _loop_1 = function(i) {
                            Laya.timer.once(200 * i, this_1, function() {
                                var x = GameData_1.default.Instance.getPathCenterX(i),
                                    eff = FramePlayerManager_1.default.Instance.create("starRock");
                                eff.anchorX = eff.anchorY = .5;
                                var pos = Laya.Point.create();
                                pos.setTo(x, -300), eff.pos(pos.x, pos.y), eff.play(), EffectView_1.default.Instance.addChild(eff);
                                var y = Laya.stage.height / 2 - 300 * Math.random() - 150;
                                Laya.Tween.to(eff, {
                                    y: y
                                }, 1e3, null, Laya.Handler.create(_this, function() {
                                    FramePlayerManager_1.default.Instance.release(eff)
                                })), Laya.timer.once(1e3, _this, function() {
                                    eff = FramePlayerManager_1.default.Instance.create("starRockBoom"), EffectView_1.default.Instance.addEffect(eff, x, y)
                                })
                            })
                        }, this_1 = this, i = 0; i < 5; i++) _loop_1(i)
                }, SkillButton.prototype.updateLogic = function(dt) {
                    this.timeout >= 0 && (this.timeout -= dt, this.timeout < 0 && (this.timeImg.visible = this.timeTxt.visible = !1, this.updateCountOrFree(!0), GameData_1.default.Instance.setSkillState(this.skillid, !1)))
                }, SkillButton.prototype.updateCountOrFree = function(visible) {
                    var countImg = this.countImg,
                        countTxt = this.countTxt,
                        freeImg = this.freeImg;
                    if (visible) {
                        var vo = GameData_1.default.Instance.skillCount(this.skillid),
                            freeCount = SkillButton.freeSkill[this.skillid];
                        countTxt.text = vo.count + "", this.checkBtnVideo(), !vo.count && freeCount ? (freeImg.visible = !0, countImg.visible = countTxt.visible = !1) : (freeImg.visible = !1, countImg.visible = countTxt.visible = !0)
                    } else freeImg.visible = countImg.visible = countTxt.visible = visible
                }, SkillButton.prototype.checkBtnVideo = function() {
                    var shareCfg = Confings_1.default.Instance.getAppCfg();
                    if (shareCfg) {
                        var freeImg = this.freeImg,
                            key = "skill" + this.skillid,
                            str = shareCfg[key],
                            isVideo = ShareManager_1.ShareManager.Instance.isVideo(str, key);
                        freeImg.skin = ResConfig_1.ResConfig.getMainUrl(isVideo ? "nczjs_icon_jnship" : "nczjs_icon_jnfenx")
                    }
                }, SkillButton.freeSkill = ((_a = {})[Constant_1.SkillType.Ice] = 2, _a[Constant_1.SkillType.AtkSpeedUp] = 2, _a[Constant_1.SkillType.YunShi] = 2, _a), SkillButton
            }(ButtonClick_1.default);
        exports.default = SkillButton
    }, {
        "../../wxSDK/ShareManager": 110,
        "../core/Constant": 6,
        "../core/CoreFunction": 7,
        "../core/DateUtil": 8,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../view/EffectView": 97,
        "./ButtonClick": 55,
        "./GameControl": 56,
        "./buff/IceBuff": 62,
        "./buff/YunShiBuff": 66,
        "./manager/FramePlayerManager": 76
    }],
    58: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBuff_1 = require("./BaseBuff"),
            Constant_1 = require("../../core/Constant"),
            GameData_1 = require("../../data/GameData"),
            AttackSpeedBuff = function(_super) {
                function AttackSpeedBuff(value, time) {
                    return _super.call(this, Constant_1.BuffType.AttackSpeed, value, time) || this
                }
                return __extends(AttackSpeedBuff, _super), AttackSpeedBuff.prototype.calculate = function(targetValue) {
                    return targetValue * this.value
                }, Object.defineProperty(AttackSpeedBuff.prototype, "active", {
                    get: function() {
                        return !GameData_1.default.Instance.getSkillState(Constant_1.SkillType.AtkSpeedUp) && this.passtime <= this.bufftime
                    },
                    enumerable: !0,
                    configurable: !0
                }), AttackSpeedBuff
            }(BaseBuff_1.BaseBuff);
        exports.default = AttackSpeedBuff
    }, {
        "../../core/Constant": 6,
        "../../data/GameData": 24,
        "./BaseBuff": 59
    }],
    59: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBuff = function() {
            function BaseBuff(type, value, time, interval, bossValue) {
                void 0 === interval && (interval = 0), void 0 === bossValue && (bossValue = 0), this.bufftype = type, this.buffvalue = value, this.bufftime = time, this.passtime = 0, this.buffBossValue = bossValue
            }
            return Object.defineProperty(BaseBuff.prototype, "type", {
                get: function() {
                    return this.bufftype
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BaseBuff.prototype, "value", {
                get: function() {
                    return this.buffvalue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BaseBuff.prototype, "bossValue", {
                get: function() {
                    return this.buffBossValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BaseBuff.prototype, "time", {
                get: function() {
                    return this.bufftime
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BaseBuff.prototype, "active", {
                get: function() {
                    return this.passtime <= this.bufftime
                },
                enumerable: !0,
                configurable: !0
            }), BaseBuff.prototype.plus = function(buff) {
                this.passtime = 0
            }, BaseBuff.prototype.calculate = function(targetValue) {
                return targetValue
            }, BaseBuff.prototype.updateLogic = function(dt) {
                this.active && (this.passtime += dt)
            }, BaseBuff.prototype.clear = function() {
                this.bufftime = 0, this.passtime = 0
            }, BaseBuff
        }();
        exports.BaseBuff = BaseBuff
    }, {}],
    60: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBuff_1 = require("./BaseBuff"),
            Constant_1 = require("../../core/Constant"),
            MathEx_1 = require("../../core/MathEx"),
            DefenseBuff = function(_super) {
                function DefenseBuff(hp) {
                    var _this = _super.call(this, Constant_1.BuffType.Defense, 0, 0) || this;
                    return _this._defenseHp = _this._maxHp = hp, _this
                }
                return __extends(DefenseBuff, _super), Object.defineProperty(DefenseBuff.prototype, "defenseHp", {
                    get: function() {
                        return this._defenseHp
                    },
                    set: function(hp) {
                        hp = Math.max(0, hp), this._defenseHp = hp
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(DefenseBuff.prototype, "hpprogress", {
                    get: function() {
                        return MathEx_1.default.Inst.clamp(this._defenseHp / this._maxHp, 0, 1)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(DefenseBuff.prototype, "active", {
                    get: function() {
                        return this._defenseHp > 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), DefenseBuff.prototype.plus = function(buff) {
                    this.active || (this._defenseHp = this._maxHp = buff.defenseHp)
                }, DefenseBuff
            }(BaseBuff_1.BaseBuff);
        exports.default = DefenseBuff
    }, {
        "../../core/Constant": 6,
        "../../core/MathEx": 9,
        "./BaseBuff": 59
    }],
    61: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBuff_1 = require("./BaseBuff"),
            Constant_1 = require("../../core/Constant"),
            HitBackBuff = function(_super) {
                function HitBackBuff(push) {
                    return _super.call(this, Constant_1.BuffType.HitBack, push, 0) || this
                }
                return __extends(HitBackBuff, _super), HitBackBuff.prototype.calculate = function(targetValue) {
                    return this.buffvalue
                }, HitBackBuff
            }(BaseBuff_1.BaseBuff);
        exports.default = HitBackBuff
    }, {
        "../../core/Constant": 6,
        "./BaseBuff": 59
    }],
    62: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBuff_1 = require("./BaseBuff"),
            Constant_1 = require("../../core/Constant"),
            IceBuff = function(_super) {
                function IceBuff(value, time) {
                    return _super.call(this, Constant_1.BuffType.Ice, value, time) || this
                }
                return __extends(IceBuff, _super), IceBuff
            }(BaseBuff_1.BaseBuff);
        exports.default = IceBuff
    }, {
        "../../core/Constant": 6,
        "./BaseBuff": 59
    }],
    63: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBuff_1 = require("./BaseBuff"),
            Constant_1 = require("../../core/Constant"),
            KillBuff = function(_super) {
                function KillBuff() {
                    return _super.call(this, Constant_1.BuffType.Kill, 0, 0) || this
                }
                return __extends(KillBuff, _super), KillBuff.prototype.calculate = function(targetValue) {
                    return this.buffvalue
                }, KillBuff
            }(BaseBuff_1.BaseBuff);
        exports.default = KillBuff
    }, {
        "../../core/Constant": 6,
        "./BaseBuff": 59
    }],
    64: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBuff_1 = require("./BaseBuff"),
            Constant_1 = require("../../core/Constant"),
            MoveSpeedBuff = function(_super) {
                function MoveSpeedBuff(value, time) {
                    return _super.call(this, Constant_1.BuffType.MoveSpeed, value, time) || this
                }
                return __extends(MoveSpeedBuff, _super), MoveSpeedBuff.prototype.calculate = function(targetValue) {
                    return targetValue * this.buffvalue
                }, MoveSpeedBuff
            }(BaseBuff_1.BaseBuff);
        exports.default = MoveSpeedBuff
    }, {
        "../../core/Constant": 6,
        "./BaseBuff": 59
    }],
    65: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBuff_1 = require("./BaseBuff"),
            Constant_1 = require("../../core/Constant"),
            PoisoningBuff = function(_super) {
                function PoisoningBuff(value, value1, time, interval) {
                    var _this = _super.call(this, Constant_1.BuffType.Poisoning, value, time, interval) || this;
                    return _this.damgeBili = value, _this.bossDamgeBili = value1, _this.interval = interval, _this.cdTime = interval, _this
                }
                return __extends(PoisoningBuff, _super), PoisoningBuff.prototype.plus = function(buff) {
                    this.passtime = 0, this.cdTime = this.interval
                }, Object.defineProperty(PoisoningBuff.prototype, "isActive", {
                    get: function() {
                        if (this.active && this.passtime > this.cdTime) return this.cdTime = this.passtime + this.interval, !0
                    },
                    enumerable: !0,
                    configurable: !0
                }), PoisoningBuff
            }(BaseBuff_1.BaseBuff);
        exports.default = PoisoningBuff
    }, {
        "../../core/Constant": 6,
        "./BaseBuff": 59
    }],
    66: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBuff_1 = require("./BaseBuff"),
            Constant_1 = require("../../core/Constant"),
            YunShiBuff = function(_super) {
                function YunShiBuff(value, time, bossValue) {
                    return _super.call(this, Constant_1.BuffType.YunShi, value, time, 0, bossValue) || this
                }
                return __extends(YunShiBuff, _super), YunShiBuff
            }(BaseBuff_1.BaseBuff);
        exports.default = YunShiBuff
    }, {
        "../../core/Constant": 6,
        "./BaseBuff": 59
    }],
    67: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Constant_1 = require("../../core/Constant"),
            BulletFactory_1 = require("./BulletFactory"),
            GameControl_1 = require("../GameControl"),
            ResConfig_1 = require("../../core/ResConfig"),
            BaseMonster_1 = require("../monster/BaseMonster"),
            GameData_1 = require("../../data/GameData"),
            FramePlayerManager_1 = require("../manager/FramePlayerManager"),
            EffectView_1 = require("../../view/EffectView"),
            MessageCenter_1 = require("../../core/MessageCenter"),
            Confings_1 = require("../../data/Confings"),
            SoundManager_1 = require("../../../wxSDK/SoundManager"),
            PlantView_1 = require("../../view/PlantView"),
            KillBuff_1 = require("../buff/KillBuff"),
            PoisoningBuff_1 = require("../buff/PoisoningBuff"),
            MoveSpeedBuff_1 = require("../buff/MoveSpeedBuff"),
            BaseBullet = function(_super) {
                function BaseBullet() {
                    var _this = _super.call(this) || this;
                    return _this._behitList = [], _this._active = !0, _this
                }
                return __extends(BaseBullet, _super), BaseBullet.prototype.pos = function(x, y) {
                    this._x = x, this._y = y
                }, Object.defineProperty(BaseBullet.prototype, "push", {
                    get: function() {
                        return this._push
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseBullet.prototype, "moveSpeedX", {
                    get: function() {
                        return this._moveSpeedX
                    },
                    set: function(v) {
                        this._moveSpeedX = v
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseBullet.prototype, "moveSpeedY", {
                    get: function() {
                        return this._moveSpeedY
                    },
                    set: function(v) {
                        this._moveSpeedY = v
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseBullet.prototype, "effectHit", {
                    get: function() {
                        return this._effectHit
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseBullet.prototype, "type", {
                    get: function() {
                        return this._type
                    },
                    enumerable: !0,
                    configurable: !0
                }), BaseBullet.prototype.initData = function(cfg, rotation, index, moveIndex, bianyiId) {
                    if (this.bianyiId = bianyiId, this._cfg = cfg, this._skin = this.owner.getChildAt(0), this._skin.scaleX = this._skin.scaleY = 1, this._skin.anchorX = this._skin.anchorY = .5, this.eff = null, this._skin.skin = null, "0" != cfg.pic)
                        if (0 == cfg.pictype) this._skin.skin = ResConfig_1.ResConfig.getPlantUrl(cfg.pic);
                        else {
                            var eff = this.eff = FramePlayerManager_1.default.Instance.create(cfg.pic);
                            eff && (eff.anchorX = eff.anchorY = .5, eff.scaleX = eff.scaleY = cfg.bili, eff.play(), eff.x = eff.y = 0, this._skin.addChild(eff))
                        } if (this._behitList.length = 0, this._skin.rotation = rotation, this._type = cfg.type, this._effectHit = cfg.effect_Hit, this._circular = cfg.circular, this._rotationSpeed = +cfg.spin, "0" != cfg.scale) {
                        var scaleParams = cfg.scale.split(",");
                        scaleParams.length > 1 && (this._moveScale = +scaleParams[0], this._moveScaleTime = 1e3 * +scaleParams[1], this.toScaleChange())
                    }
                    var circularRadius, speedfactor = GameData_1.default.Instance.getSkillState(Constant_1.SkillType.AtkSpeedUp) ? 1.5 : 1;
                    (this.moveSpeedY = -cfg.speed * speedfactor * Math.cos(rotation * Math.PI / 180), this.moveSpeedX = cfg.speed * speedfactor * Math.sin(rotation * Math.PI / 180), this._damage = cfg.dps, this._push = cfg.push, this._split = cfg.split, this._towRay = cfg.towRay, this._chuantou = +cfg.chuantou, this._huili = +cfg.huili, cfg.circularRadius) && (circularRadius = +cfg.circularRadius.split(",")[0]);
                    this._circularRadius = circularRadius || 20, this._index = index, this._moveIndex = moveIndex, this._startMove = !1, this._active = !0, this._chuantouNum = 0, this.checkBianyi();
                    var collider = this.collider = this.Owner.getComponent(Laya.CircleCollider) || this.Owner.addComponent(Laya.CircleCollider);
                    collider.x = -this._circularRadius / 2, collider.y = -this._circularRadius / 2, collider.radius = this._circularRadius
                }, BaseBullet.prototype.checkBianyi = function() {
                    if (this.bianyiId) {
                        var cfg = Confings_1.default.Instance.getBianyiById(this.bianyiId);
                        cfg && 1 == cfg.type && cfg.attack && (this._damage *= cfg.attack || 1)
                    }
                }, Object.defineProperty(BaseBullet.prototype, "skinRoration", {
                    set: function(value) {
                        this._skin && (this._skin.rotation = value)
                    },
                    enumerable: !0,
                    configurable: !0
                }), BaseBullet.prototype.toScaleChange = function() {
                    this.Owner && Laya.Tween.to(this.Owner, {
                        scaleX: this._moveScale,
                        scaleY: this._moveScale
                    }, this._moveScaleTime, null, Laya.Handler.create(this, this.toScaleNormal))
                }, BaseBullet.prototype.toScaleNormal = function() {
                    this.Owner && Laya.Tween.to(this.Owner, {
                        scaleX: 1,
                        scaleY: 1
                    }, this._moveScaleTime, null, Laya.Handler.create(this, this.toScaleChange))
                }, Object.defineProperty(BaseBullet.prototype, "index", {
                    get: function() {
                        return this._index
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseBullet.prototype, "Owner", {
                    get: function() {
                        return this.owner
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseBullet.prototype, "damage", {
                    get: function() {
                        return this._chuantou ? this._damage * Math.pow(this._chuantou, this._chuantouNum) : this._damage
                    },
                    set: function(value) {
                        this._damage = value
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseBullet.prototype, "Rectangle", {
                    get: function() {
                        this._rectangle || (this._rectangle = new Laya.Rectangle);
                        var pos = Laya.Point.create(),
                            owner = this.Owner;
                        if (owner) {
                            pos.setTo(owner.x - this._circularRadius, owner.y - 25);
                            var parent_1 = this.owner.parent;
                            parent_1 && parent_1.localToGlobal(pos), this._rectangle.setTo(pos.x, pos.y, 2 * this._circularRadius, 50)
                        }
                        return this._rectangle
                    },
                    enumerable: !0,
                    configurable: !0
                }), BaseBullet.prototype.startMove = function() {
                    this._startMove = !0
                }, Object.defineProperty(BaseBullet.prototype, "active", {
                    get: function() {
                        return this._active
                    },
                    enumerable: !0,
                    configurable: !0
                }), BaseBullet.prototype.onEnable = function() {
                    var _this = this;
                    this.Owner.y = this._y, this.Owner.x = this._x;
                    var moveIndex = this._moveIndex;
                    if (this._moveIndex) {
                        Laya.Tween.to(this.owner, {
                            x: this.Owner.x + moveIndex * GameData_1.default.Instance.pathWidth,
                            y: this._y + 200 * this.moveSpeedY / 13
                        }, 200, Laya.Ease.linearInOut, Laya.Handler.create(this, function() {
                            _this.startMove()
                        }))
                    } else this.startMove()
                }, BaseBullet.prototype.isOutToScreen = function() {
                    if (!this.owner) return !1;
                    if (!this.owner.parent) return !1;
                    var x = this.owner.x,
                        y = this.owner.y,
                        p = Laya.Point.create();
                    return p.x = x, p.y = y, (p = this.owner.parent.localToGlobal(p)).x > Laya.stage.width || p.x < 0 || p.y > Laya.stage.height || p.y < 0
                }, BaseBullet.prototype.onTriggerEnter = function(other) {
                    if (other && other.owner && other.rigidBody && "monster" == other.rigidBody.label) {
                        var monster = other.owner.getComponent(BaseMonster_1.default);
                        this.onHit(monster, other)
                    }
                }, BaseBullet.prototype.onHit = function(target, otherCollider) {
                    var idx = this._behitList.indexOf(target);
                    if (target && !target.transparent && this.Owner && (-1 == idx || this._huili)) {
                        if (this._behitList.push(target), SoundManager_1.default.Instance.playName(this._cfg.boomVoice), 0 != this._circular) {
                            var bulletCfg = Confings_1.default.Instance.getBulletById(this._circular + "");
                            bulletCfg && this.createCircularBullet(bulletCfg)
                        }
                        var eff = FramePlayerManager_1.default.Instance.create(this.effectHit);
                        eff && (eff.scaleX = eff.scaleY = this._cfg.bili);
                        var damage, pos = Laya.Point.create();
                        pos.setTo(this.Owner.x, this.Owner.y), this.Owner.parent.localToGlobal(pos, !1), EffectView_1.default.Instance.addEffect(eff, pos.x, pos.y);
                        var bianyiBuff = this.getBianyiBuff();
                        "0" != this._split ? (damage = this.createChildBullet() * GameData_1.default.Instance.turnAddDpsFactor, MessageCenter_1.MessageCenter.Instance.dispatch("monster_behit_event", {
                            monster: target,
                            collider: otherCollider,
                            damage: damage,
                            buff: null,
                            bianyiBuff: bianyiBuff
                        })) : (damage = this.damage, MessageCenter_1.MessageCenter.Instance.dispatch("monster_behit_event", {
                            monster: target,
                            collider: otherCollider,
                            damage: damage,
                            buff: this.createBuff(),
                            bianyiBuff: bianyiBuff
                        })), "0" != this._towRay && this.createKuoShanBullet(), this._chuantou ? this._chuantouNum++ : GameControl_1.default.Instance.removeBullet(this)
                    }
                }, BaseBullet.prototype.getBianyiBuff = function() {
                    if (this.bianyiId) {
                        var cfg = Confings_1.default.Instance.getBianyiById(this.bianyiId);
                        if (cfg && 1 == cfg.type) {
                            var arr;
                            if (cfg.die)
                                if (Math.random() < cfg.die) return new KillBuff_1.default;
                            if ("0" != cfg.frozen)
                                if ((arr = cfg.frozen.split(",")).length > 2) {
                                    var value = +arr[0],
                                        duration = +arr[1],
                                        probability = +arr[2];
                                    if (Math.random() < probability) return new MoveSpeedBuff_1.default(value, 1e3 * duration)
                                } if ("0" != cfg.poisoning)
                                if ((arr = cfg.poisoning.split(",")).length > 4) {
                                    var damage = +arr[0],
                                        bossDamage = +arr[1],
                                        interval = (duration = +arr[2], +arr[3]);
                                    probability = +arr[4];
                                    if (Math.random() < probability) return new PoisoningBuff_1.default(damage, bossDamage, 1e3 * duration, 1e3 * interval)
                                }
                        }
                    }
                }, BaseBullet.prototype.createCircularBullet = function(cfg) {
                    var circularRadius = cfg.circularRadius;
                    if (circularRadius) {
                        var owner = this.Owner;
                        if (owner) {
                            var circularParams = circularRadius.split(",");
                            if (circularParams.length > 2) {
                                var bullet = BulletFactory_1.default.Instance.create(cfg.type);
                                bullet.initData(cfg, 0, this._index, 0, this.bianyiId);
                                var p = Laya.Point.create();
                                p.x = owner.x, p.y = owner.y, GameControl_1.default.Instance.addBulletByPos(bullet, p)
                            } else {
                                var circularRadius_1 = +circularParams[0],
                                    rect = Laya.Rectangle.create(),
                                    x = owner.x,
                                    y = owner.y,
                                    pos = Laya.Point.create();
                                pos.setTo(x, y), this.Owner.parent.localToGlobal(pos);
                                var w, h;
                                w = h = 2 * circularRadius_1, rect.setTo(pos.x - circularRadius_1, pos.y - circularRadius_1, w, h);
                                var dps = cfg.dps;
                                if (this.bianyiId) {
                                    var bianyiCfg = Confings_1.default.Instance.getBianyiById(this.bianyiId);
                                    bianyiCfg && 1 == bianyiCfg.type && bianyiCfg.attack && (dps *= bianyiCfg.attack || 1)
                                }
                                GameControl_1.default.Instance.doAOE(rect, dps)
                            }
                        }
                    }
                }, BaseBullet.prototype.createKuoShanBullet = function() {
                    var arr = this._towRay.split(",");
                    if (arr.length > 2) {
                        var rotation = +arr[0],
                            count = +arr[1],
                            id = arr[2],
                            cfg = Confings_1.default.Instance.getBulletById(id);
                        if (cfg) {
                            var offset = count > 1 ? rotation / (count - 1) : 0,
                                min = -rotation >> 1,
                                owner = this.Owner;
                            if (!owner) return;
                            for (var i = 0; i < count; i++) {
                                var temp = min + offset * i;
                                (bullet = BulletFactory_1.default.Instance.create(cfg.type)).initData(cfg, temp, this._index, 0, this.bianyiId), this.copyTo(bullet._behitList, this._behitList), bullet.moveSpeedX = cfg.speed * Math.cos(temp * Math.PI / 180), bullet.moveSpeedY = cfg.speed * Math.sin(temp * Math.PI / 180), bullet.skinRoration = 90 + temp, (p = Laya.Point.create()).x = owner.x, p.y = owner.y, GameControl_1.default.Instance.addBulletByPos(bullet, p)
                            }
                            for (i = 0; i < count; i++) {
                                var bullet, p;
                                temp = min + offset * i;
                                (bullet = BulletFactory_1.default.Instance.create(cfg.type)).initData(cfg, temp, this._index, 0, this.bianyiId), this.copyTo(bullet._behitList, this._behitList), bullet.moveSpeedX = -cfg.speed * Math.cos(temp * Math.PI / 180), bullet.moveSpeedY = cfg.speed * Math.sin(temp * Math.PI / 180), bullet.skinRoration = 90 + temp + 180 - 2 * temp, (p = Laya.Point.create()).x = owner.x, p.y = owner.y, GameControl_1.default.Instance.addBulletByPos(bullet, p)
                            }
                        }
                    }
                }, BaseBullet.prototype.copyTo = function(to, from) {
                    from.forEach(function(element) {
                        to.push(element)
                    })
                }, BaseBullet.prototype.createChildBullet = function() {
                    var sArr = this._split.split(",");
                    if (!(sArr.length > 2)) {
                        for (var count = +sArr[0], distance = +sArr[1], childid = sArr[2], bulletCfg = Confings_1.default.Instance.getBulletById(childid), _a = this.Owner, x = _a.x, y = _a.y, i = 0; i < count; i++) {
                            var img = Laya.Pool.getItemByClass("childBullet", Laya.Image);
                            img.skin = ResConfig_1.ResConfig.getPlantUrl(bulletCfg.pic), img.anchorX = img.anchorY = .5, img.scaleX = img.scaleY = .4, img.x = x, img.y = y;
                            var angle = 360 * Math.random() / 180 * Math.PI,
                                dis = Math.random() * distance;
                            this.Owner.parent.addChild(img), Laya.Tween.to(img, {
                                x: x + Math.cos(angle) * dis,
                                y: y + Math.sin(angle) * dis
                            }, 300, null, Laya.Handler.create(this, function(cbullet, eff_hit) {
                                var framePlayer = FramePlayerManager_1.default.Instance.create(eff_hit);
                                if (framePlayer) {
                                    framePlayer.anchorX = framePlayer.anchorY = .5, framePlayer.scaleX = framePlayer.scaleY = .4;
                                    var stagepos = Laya.Point.create();
                                    stagepos.setTo(cbullet.x, cbullet.y), PlantView_1.default.Instance.localToGlobal(stagepos), framePlayer.x = stagepos.x, framePlayer.y = stagepos.y, framePlayer.onceCallBack = function(e) {
                                        FramePlayerManager_1.default.Instance.release(e)
                                    }, framePlayer.play(1), EffectView_1.default.Instance.addChild(framePlayer)
                                }
                                cbullet.removeSelf(), Laya.Pool.recover("childBullet", cbullet)
                            }, [img, bulletCfg.effect_Hit]))
                        }
                        return bulletCfg.dps * count
                    }
                }, BaseBullet.prototype.isMoveBack = function() {
                    if (!this.owner) return !1;
                    if (!this.owner.parent) return !1;
                    var x = this.owner.x,
                        y = this.owner.y,
                        p = Laya.Point.create();
                    return p.x = x, p.y = y, p = this.owner.parent.localToGlobal(p), this._huili && p.y <= 0
                }, BaseBullet.prototype.updateLogic = function(dt) {
                    if (this.Owner) {
                        var Owner = this.Owner;
                        if (this.isOutToScreen()) this.isMoveBack() ? (this.moveSpeedY = Math.abs(this.moveSpeedY), Owner.y += this.moveSpeedY) : GameControl_1.default.Instance.removeBullet(this);
                        else if (this._startMove) {
                            var factor = dt / (1e3 / 60);
                            Owner.x += this.moveSpeedX * factor, Owner.y += this.moveSpeedY * factor, this._rotationSpeed && this._skin && (this._skin.rotation += this._rotationSpeed)
                        }
                    }
                }, BaseBullet.prototype.onDisable = function() {
                    this._active = !1, this.Owner && Laya.Tween.clearTween(this.Owner), this._skin = null, this.eff && (this.eff.removeSelf(), FramePlayerManager_1.default.Instance.release(this.eff), this.eff = null), this._behitList.length = 0
                }, BaseBullet.prototype.createBuff = function() {
                    return null
                }, BaseBullet
            }(Laya.Script);
        exports.default = BaseBullet
    }, {
        "../../../wxSDK/SoundManager": 111,
        "../../core/Constant": 6,
        "../../core/MessageCenter": 10,
        "../../core/ResConfig": 11,
        "../../data/Confings": 23,
        "../../data/GameData": 24,
        "../../view/EffectView": 97,
        "../../view/PlantView": 105,
        "../GameControl": 56,
        "../buff/KillBuff": 63,
        "../buff/MoveSpeedBuff": 64,
        "../buff/PoisoningBuff": 65,
        "../manager/FramePlayerManager": 76,
        "../monster/BaseMonster": 79,
        "./BulletFactory": 68
    }],
    68: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Constant_1 = require("../../core/Constant"),
            NormalBullet_1 = require("./NormalBullet"),
            JianSuBullet_1 = require("./JianSuBullet"),
            JiTuiBullet_1 = require("./JiTuiBullet"),
            GameControl_1 = require("../GameControl"),
            JiaSuBullet_1 = require("./JiaSuBullet"),
            CircularBullet_1 = require("./CircularBullet"),
            JiGuangBullet_1 = require("./JiGuangBullet"),
            BulletFactory = function() {
                function BulletFactory() {
                    this._useItems = []
                }
                return Object.defineProperty(BulletFactory, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new BulletFactory), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), BulletFactory.prototype.create = function(type) {
                    var plant, prefab = GameControl_1.default.Instance.bullet,
                        box = Laya.Pool.getItemByCreateFun("bullet", prefab.create, prefab);
                    switch (type) {
                        case Constant_1.BulletType.Bullet0:
                            plant = box.addComponent(NormalBullet_1.default);
                            break;
                        case Constant_1.BulletType.Bullet1:
                            plant = box.addComponent(JianSuBullet_1.default);
                            break;
                        case Constant_1.BulletType.Bullet2:
                            plant = box.addComponent(JiTuiBullet_1.default);
                            break;
                        case Constant_1.BulletType.Bullet3:
                            plant = box.addComponent(JiaSuBullet_1.default);
                            break;
                        case Constant_1.BulletType.Bullet4:
                            plant = box.addComponent(CircularBullet_1.default);
                            break;
                        case Constant_1.BulletType.Bullet5:
                            plant = box.addComponent(JiGuangBullet_1.default);
                            break;
                        default:
                            plant = box.addComponent(NormalBullet_1.default)
                    }
                    return plant
                }, BulletFactory.prototype.destory = function(type, item) {
                    var owner = item.Owner;
                    owner && (owner.x = owner.y = 0, owner.rotation = 0, owner.scaleX = owner.scaleY = 1, Laya.Pool.recover("bullet", owner)), item.destroy()
                }, BulletFactory
            }();
        exports.default = BulletFactory;
        var MyImage = function(_super) {
            function MyImage() {
                return _super.call(this) || this
            }
            return __extends(MyImage, _super), MyImage.prototype._setX = function(x) {
                this._x = x
            }, MyImage.prototype._setY = function(y) {
                this._y = y
            }, MyImage
        }(Laya.Image);
        exports.MyImage = MyImage
    }, {
        "../../core/Constant": 6,
        "../GameControl": 56,
        "./CircularBullet": 69,
        "./JiGuangBullet": 70,
        "./JiTuiBullet": 71,
        "./JiaSuBullet": 72,
        "./JianSuBullet": 73,
        "./NormalBullet": 74
    }],
    69: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBullet_1 = require("./BaseBullet"),
            GameControl_1 = require("../GameControl"),
            CircularBullet = function(_super) {
                function CircularBullet() {
                    var _this = _super.call(this) || this;
                    return _this._circularDuration = 0, _this._circularDelay = 0, _this._startTime = 0, _this._overTime = 0, _this
                }
                return __extends(CircularBullet, _super), CircularBullet.prototype.initData = function(cfg, rotation, index, moveIndex, bianyiId) {
                    cfg.speed = 0, cfg.chuantou = 1, _super.prototype.initData.call(this, cfg, rotation, index, moveIndex, bianyiId), this.Owner && this.Owner.scale(1.2, 1.2);
                    var circularParams = cfg.circularRadius.split(",");
                    circularParams.length > 2 ? (this._circularRadius = +circularParams[0], this._circularDuration = +circularParams[1] || 0, this._circularDelay = +circularParams[2], this._overTime = GameControl_1.default.Instance.onlineTime + 1e3 * this._circularDuration) : this._circularRadius = 20
                }, CircularBullet.prototype.updateLogic = function(dt) {
                    _super.prototype.updateLogic.call(this, dt);
                    var now = GameControl_1.default.Instance.onlineTime;
                    now > this._overTime ? GameControl_1.default.Instance.removeBullet(this) : now >= this._startTime && (this.doAoe(), this._startTime = now + 1e3 * this._circularDelay)
                }, CircularBullet.prototype.doAoe = function() {
                    var owner = this.Owner;
                    if (owner) {
                        var cfg = this._cfg;
                        if (cfg) {
                            var w, h, rect = Laya.Rectangle.create(),
                                x = owner.x,
                                y = owner.y,
                                pos = Laya.Point.create();
                            pos.setTo(x, y), this.Owner.parent.localToGlobal(pos);
                            var circularRadius = this._circularRadius;
                            w = h = 2 * circularRadius, rect.setTo(pos.x - circularRadius, pos.y - circularRadius, w, h), GameControl_1.default.Instance.doAOE(rect, cfg.dps)
                        }
                    }
                }, CircularBullet
            }(BaseBullet_1.default);
        exports.default = CircularBullet
    }, {
        "../GameControl": 56,
        "./BaseBullet": 67
    }],
    70: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBullet_1 = require("./BaseBullet"),
            FramePlayerManager_1 = require("../manager/FramePlayerManager"),
            EffectView_1 = require("../../view/EffectView"),
            GameControl_1 = require("../GameControl"),
            JiGuangBullet = function(_super) {
                function JiGuangBullet() {
                    return _super.call(this) || this
                }
                return __extends(JiGuangBullet, _super), JiGuangBullet.prototype.initData = function(cfg, rotation, index, moveIndex, bianyiId) {
                    cfg.speed = 0, cfg.chuantou = 1, _super.prototype.initData.call(this, cfg, rotation, index, moveIndex, bianyiId), this._skin.anchorY = 1, this._skin.scaleY = 0, this._skin.scaleX = .8
                }, JiGuangBullet.prototype.startMove = function() {
                    var _this = this,
                        cfg = this._cfg;
                    if (cfg) {
                        var owner = this.Owner;
                        if (owner) {
                            var eff = FramePlayerManager_1.default.Instance.create(cfg.effect_Hit);
                            eff && (eff.anchorX = eff.anchorY = .5, eff.scaleX = eff.scaleY = cfg.bili);
                            var pos = Laya.Point.create();
                            pos.setTo(owner.x, owner.y), owner.parent.localToGlobal(pos, !1), EffectView_1.default.Instance.addEffect(eff, pos.x, pos.y), eff.onceCallBack = function(e) {
                                FramePlayerManager_1.default.Instance.release(e), _this._skin && Laya.Tween.to(_this._skin, {
                                    scaleY: 10
                                }, 300, null, Laya.Handler.create(_this, function() {
                                    _this.doAoe(), Laya.Tween.to(_this._skin, {
                                        scaleX: 0
                                    }, 200)
                                }))
                            }
                        }
                    }
                }, JiGuangBullet.prototype.doAoe = function() {
                    if (this.Owner) {
                        var cfg = this._cfg;
                        cfg && GameControl_1.default.Instance.doAOEByPath(this.index % 5, cfg.dps)
                    }
                }, JiGuangBullet
            }(BaseBullet_1.default);
        exports.default = JiGuangBullet
    }, {
        "../../view/EffectView": 97,
        "../GameControl": 56,
        "../manager/FramePlayerManager": 76,
        "./BaseBullet": 67
    }],
    71: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBullet_1 = require("./BaseBullet"),
            HitBackBuff_1 = require("../buff/HitBackBuff"),
            JiTuiBullet = function(_super) {
                function JiTuiBullet() {
                    return _super.call(this) || this
                }
                return __extends(JiTuiBullet, _super), JiTuiBullet.prototype.createBuff = function() {
                    return new HitBackBuff_1.default(this.push)
                }, JiTuiBullet
            }(BaseBullet_1.default);
        exports.default = JiTuiBullet
    }, {
        "../buff/HitBackBuff": 61,
        "./BaseBullet": 67
    }],
    72: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBullet_1 = require("./BaseBullet"),
            AttackSpeedBuff_1 = require("../buff/AttackSpeedBuff"),
            FramePlayerManager_1 = require("../manager/FramePlayerManager"),
            EffectView_1 = require("../../view/EffectView"),
            PlantView_1 = require("../../view/PlantView"),
            JiaSuBullet = function(_super) {
                function JiaSuBullet() {
                    var _this = _super.call(this) || this;
                    return _this._buffvalue = 0, _this._bufftime = 0, _this._bufflv = 0, _this
                }
                return __extends(JiaSuBullet, _super), JiaSuBullet.prototype.initData = function(cfg, rotation, index, moveIndex, bianyiId) {
                    if (cfg.pic = "0", cfg.speed = 0, _super.prototype.initData.call(this, cfg, rotation, index, moveIndex, bianyiId), "0" != cfg.atkspeed) {
                        var arr = cfg.atkspeed.split(",");
                        arr.length > 2 && (this._buffvalue = +arr[0], this._bufftime = +arr[1], this._bufflv = +arr[2])
                    }
                }, JiaSuBullet.prototype.startMove = function() {
                    var cfg = this._cfg;
                    if (cfg) {
                        var owner = this.Owner;
                        if (owner) {
                            var index = this._index,
                                buffvalue = this._buffvalue,
                                bufftime = 1e3 * this._bufftime;
                            switch (this._bufflv) {
                                case 1:
                                    top();
                                    break;
                                case 2:
                                    top(), bottom();
                                    break;
                                case 3:
                                    top(), left(), right();
                                    break;
                                case 4:
                                    top(), bottom(), left(), right()
                            }
                            return
                        }
                    }

                    function left() {
                        var buffIndex = index - 1;
                        index % 5 != 0 && (PlantView_1.default.Instance.addBuffByIndex(buffIndex, new AttackSpeedBuff_1.default(buffvalue, bufftime)), addEffByRotation(-90))
                    }

                    function right() {
                        var buffIndex = index + 1;
                        buffIndex % 5 != 0 && (PlantView_1.default.Instance.addBuffByIndex(buffIndex, new AttackSpeedBuff_1.default(buffvalue, bufftime)), addEffByRotation(90))
                    }

                    function top() {
                        var buffIndex = index + 5;
                        buffIndex >= 0 && (PlantView_1.default.Instance.addBuffByIndex(buffIndex, new AttackSpeedBuff_1.default(buffvalue, bufftime)), addEffByRotation(0))
                    }

                    function bottom() {
                        var buffIndex = index - 5;
                        buffIndex < 15 && (PlantView_1.default.Instance.addBuffByIndex(buffIndex, new AttackSpeedBuff_1.default(buffvalue, bufftime)), addEffByRotation(180))
                    }

                    function addEffByRotation(rotation) {
                        var eff = FramePlayerManager_1.default.Instance.create(cfg.effect_Hit);
                        eff && (eff.scaleX = eff.scaleY = cfg.bili, eff.rotation = rotation);
                        var pos = Laya.Point.create();
                        pos.setTo(owner.x, owner.y + 40), owner.parent.localToGlobal(pos, !1), EffectView_1.default.Instance.addEffect(eff, pos.x, pos.y, .5, 1)
                    }
                }, JiaSuBullet
            }(BaseBullet_1.default);
        exports.default = JiaSuBullet
    }, {
        "../../view/EffectView": 97,
        "../../view/PlantView": 105,
        "../buff/AttackSpeedBuff": 58,
        "../manager/FramePlayerManager": 76,
        "./BaseBullet": 67
    }],
    73: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseBullet_1 = require("./BaseBullet"),
            MoveSpeedBuff_1 = require("../buff/MoveSpeedBuff"),
            IceBuff_1 = require("../buff/IceBuff"),
            JianSuBullet = function(_super) {
                function JianSuBullet() {
                    var _this = _super.call(this) || this;
                    return _this._icetime = NaN, _this._iceRate = NaN, _this._buffvalue = 0, _this._bufftime = 0, _this
                }
                return __extends(JianSuBullet, _super), JianSuBullet.prototype.initData = function(cfg, rotation, index, moveIndex, bianyiId) {
                    if (_super.prototype.initData.call(this, cfg, rotation, index, moveIndex, bianyiId), "0" != cfg.frozen) {
                        var arr = cfg.frozen.split(",");
                        this._bufftime = +arr[1], this._buffvalue = +arr[0], arr.length > 2 && (this._iceRate = +arr[2], this._icetime = +arr[3])
                    }
                }, JianSuBullet.prototype.createBuff = function() {
                    return !isNaN(this._iceRate) && !isNaN(this._icetime) && Math.random() < this._iceRate ? new IceBuff_1.default(1, 1e3 * this._icetime) : new MoveSpeedBuff_1.default(this._buffvalue, 1e3 * this._bufftime)
                }, JianSuBullet
            }(BaseBullet_1.default);
        exports.default = JianSuBullet
    }, {
        "../buff/IceBuff": 62,
        "../buff/MoveSpeedBuff": 64,
        "./BaseBullet": 67
    }],
    74: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var NormalBullet = function(_super) {
            function NormalBullet() {
                return _super.call(this) || this
            }
            return __extends(NormalBullet, _super), NormalBullet
        }(require("./BaseBullet").default);
        exports.default = NormalBullet
    }, {
        "./BaseBullet": 67
    }],
    75: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BuffManager = function() {
            function BuffManager() {}
            return Object.defineProperty(BuffManager, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new BuffManager), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), BuffManager.prototype.addBuff = function(buff) {
                var buffList = this._activeBuffList;
                buffList || (buffList = this._activeBuffList = []), buffList.push(buff)
            }, BuffManager.prototype.removeBuff = function(buff) {
                var buffList = this._activeBuffList;
                if (buffList) {
                    var idx = buffList.indexOf(buff);
                    buffList.splice(idx, 1)
                }
            }, BuffManager.prototype.updateLogic = function(dt) {
                var buffList = this._activeBuffList;
                if (buffList)
                    for (var i in buffList) buffList[i].updateLogic(dt)
            }, BuffManager
        }();
        exports.default = BuffManager
    }, {}],
    76: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var FramePlayer_1 = require("../../core/animation/FramePlayer"),
            FramePlayerManager = function() {
                function FramePlayerManager() {
                    this._pool = [], this._useItems = []
                }
                return Object.defineProperty(FramePlayerManager, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new FramePlayerManager, this._instance.init()), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), FramePlayerManager.prototype.init = function() {
                    this._skinsMap = {}, this._skinsMap.huluobo = {
                        order: 0,
                        frame: 8,
                        skins: ["animation/huluobo01.png", "animation/huluobo02.png", "animation/huluobo03.png"]
                    }, this._skinsMap.huoleft = {
                        order: 1,
                        frame: 8,
                        skins: ["animation/huoleft01.png", "animation/huoleft02.png", "animation/huoleft03.png", "animation/huoleft04.png", "animation/huoleft05.png", "animation/huoleft06.png"]
                    }, this._skinsMap.iceball = {
                        order: 2,
                        frame: 8,
                        skins: ["animation/iceball01.png", "animation/iceball02.png", "animation/iceball03.png", "animation/iceball04.png", "animation/iceball05.png", "animation/iceball06.png", "animation/iceball07.png", "animation/iceball08.png"]
                    }, this._skinsMap.wandou = {
                        order: 3,
                        frame: 8,
                        skins: ["animation/wandou01.png", "animation/wandou02.png", "animation/wandou03.png"]
                    }, this._skinsMap.yumi = {
                        order: 4,
                        frame: 8,
                        skins: ["animation/yumi01.png", "animation/yumi02.png", "animation/yumi03.png", "animation/yumi04.png", "animation/yumi05.png", "animation/yumi06.png", "animation/yumi07.png", "animation/yumi08.png", "animation/yumi09.png", "animation/yumi10.png", "animation/yumi11.png"]
                    }, this._skinsMap.guazi = {
                        order: 5,
                        frame: 8,
                        skins: ["animation/guazi01.png", "animation/guazi02.png", "animation/guazi03.png"]
                    }, this._skinsMap.xigua = {
                        order: 6,
                        frame: 8,
                        skins: ["animation/xigua01.png", "animation/xigua02.png", "animation/xigua03.png"]
                    }, this._skinsMap.ci = {
                        order: 7,
                        frame: 8,
                        skins: ["animation/ci01.png", "animation/ci02.png", "animation/ci03.png"]
                    }, this._skinsMap.tudou = {
                        order: 8,
                        frame: 8,
                        skins: ["animation/tudou01.png", "animation/tudou02.png", "animation/tudou03.png", "animation/ci04.png"]
                    }, this._skinsMap.lajiao = {
                        order: 9,
                        frame: 8,
                        skins: ["animation/lajiao01.png", "animation/lajiao02.png", "animation/lajiao03.png"]
                    }, this._skinsMap.hulu = {
                        order: 10,
                        frame: 8,
                        skins: ["animation/hulu01.png", "animation/hulu02.png", "animation/hulu03.png"]
                    }, this._skinsMap.nangua = {
                        order: 11,
                        frame: 8,
                        skins: ["animation/nangua01.png", "animation/nangua02.png", "animation/nangua03.png"]
                    }, this._skinsMap.sanyecao = {
                        order: 12,
                        frame: 8,
                        skins: ["animation/sanyecao01.png", "animation/sanyecao02.png", "animation/sanyecao03.png"]
                    }, this._skinsMap.shirenhua = {
                        order: 13,
                        frame: 8,
                        skins: ["animation/shirenhua01.png", "animation/shirenhua02.png", "animation/shirenhua03.png"]
                    }, this._skinsMap.yezi = {
                        order: 14,
                        frame: 8,
                        skins: ["animation/yezi01.png", "animation/yezi02.png", "animation/yezi03.png"]
                    }, this._skinsMap.lianzi = {
                        order: 15,
                        frame: 8,
                        skins: ["animation/lianzi01.png", "animation/lianzi02.png", "animation/lianzi03.png"]
                    }, this._skinsMap.wogua = {
                        order: 16,
                        frame: 8,
                        skins: ["animation/wogua01.png", "animation/wogua02.png", "animation/wogua03.png"]
                    }, this._skinsMap["y-baozha"] = {
                        order: 17,
                        frame: 10,
                        skins: ["animation/y-baozha01.png", "animation/y-baozha02.png", "animation/y-baozha03.png", "animation/y-baozha04.png", "animation/y-baozha05.png", "animation/y-baozha06.png", "animation/y-baozha07.png"]
                    }, this._skinsMap.heidong = {
                        order: 18,
                        frame: 24,
                        skins: ["animation/heidong01.png", "animation/heidong02.png", "animation/heidong03.png", "animation/heidong04.png", "animation/heidong05.png", "animation/heidong06.png", "animation/heidong07.png", "animation/heidong08.png"]
                    }, this._skinsMap["b-nangua"] = {
                        order: 19,
                        frame: 8,
                        skins: ["animation/b-nangua01.png", "animation/b-nangua02.png", "animation/b-nangua03.png"]
                    }, this._skinsMap["p-shirenhua"] = {
                        order: 20,
                        frame: 8,
                        skins: ["animation/p-shirenhua01.png", "animation/p-shirenhua02.png", "animation/p-shirenhua03.png"]
                    }, this._skinsMap["q-yezi"] = {
                        order: 21,
                        frame: 8,
                        skins: ["animation/q-yezi01.png", "animation/q-yezi02.png", "animation/q-yezi03.png"]
                    }, this._skinsMap["s-yezi"] = {
                        order: 22,
                        frame: 8,
                        skins: ["animation/s-yezi01.png", "animation/s-yezi02.png", "animation/s-yezi03.png"]
                    }, this._skinsMap["y-nangua"] = {
                        order: 23,
                        frame: 8,
                        skins: ["animation/y-nangua01.png", "animation/y-nangua02.png", "animation/y-nangua03.png"]
                    }, this._skinsMap.jiansu = {
                        order: 24,
                        frame: 8,
                        skins: ["animation/jiansu01.png", "animation/jiansu02.png", "animation/jiansu03.png", "animation/jiansu04.png"]
                    }, this._skinsMap["b-baozha"] = {
                        order: 25,
                        frame: 10,
                        skins: ["animation/b-baozha01.png", "animation/b-baozha02.png", "animation/b-baozha03.png", "animation/b-baozha04.png", "animation/b-baozha05.png", "animation/b-baozha06.png", "animation/b-baozha07.png", "animation/b-baozha08.png", "animation/b-baozha09.png"]
                    }, this._skinsMap["g-baozha"] = {
                        order: 26,
                        frame: 10,
                        skins: ["animation/g-baozha01.png", "animation/g-baozha02.png", "animation/g-baozha03.png", "animation/g-baozha04.png", "animation/g-baozha05.png", "animation/g-baozha06.png", "animation/g-baozha07.png", "animation/g-baozha08.png", "animation/g-baozha09.png"]
                    }, this._skinsMap["r-baozha"] = {
                        order: 27,
                        frame: 10,
                        skins: ["animation/r-baozha01.png", "animation/r-baozha02.png", "animation/r-baozha03.png", "animation/r-baozha04.png", "animation/r-baozha05.png", "animation/r-baozha06.png", "animation/r-baozha07.png", "animation/r-baozha08.png", "animation/r-baozha09.png"]
                    }, this._skinsMap.hudun = {
                        order: 28,
                        frame: 8,
                        skins: ["animation/hudun01.png", "animation/hudun02.png", "animation/hudun03.png", "animation/hudun04.png", "animation/hudun05.png", "animation/hudun06.png"]
                    }, this._skinsMap.MotoSmoke = {
                        order: 29,
                        frame: 20,
                        skins: ["animation/MotoSmoke01.png", "animation/MotoSmoke02.png", "animation/MotoSmoke03.png", "animation/MotoSmoke04.png", "animation/MotoSmoke05.png", "animation/MotoSmoke06.png", "animation/MotoSmoke07.png"]
                    }, this._skinsMap.qianghua = {
                        order: 30,
                        frame: 15,
                        skins: ["animation/qianghua01.png", "animation/qianghua02.png", "animation/qianghua03.png", "animation/qianghua04.png", "animation/qianghua05.png", "animation/qianghua06.png"]
                    }, this._skinsMap.iceEffect = {
                        order: 31,
                        frame: 8,
                        skins: ["animation/Bingdong_00001.png", "animation/Bingdong_00002.png", "animation/Bingdong_00003.png", "animation/Bingdong_00004.png", "animation/Bingdong_00005.png", "animation/Bingdong_00006.png", "animation/Bingdong_00007.png", "animation/Bingdong_00008.png"]
                    }, this._skinsMap.shiliu = {
                        order: 32,
                        frame: 8,
                        skins: ["animation/shiliu01.png", "animation/shiliu02.png", "animation/shiliu03.png"]
                    }, this._skinsMap.juhua = {
                        order: 33,
                        frame: 8,
                        skins: ["animation/juhua01.png", "animation/juhua02.png", "animation/juhua03.png"]
                    }, this._skinsMap.luhui = {
                        order: 34,
                        frame: 8,
                        skins: ["animation/luhui01.png", "animation/luhui02.png", "animation/luhui03.png"]
                    }, this._skinsMap.pugongying = {
                        order: 35,
                        frame: 8,
                        skins: ["animation/pugongying01.png", "animation/pugongying02.png", "animation/pugongying03.png"]
                    }, this._skinsMap.suan = {
                        order: 36,
                        frame: 8,
                        skins: ["animation/suan01.png", "animation/suan02.png", "animation/suan03.png"]
                    }, this._skinsMap.xiangjiao = {
                        order: 37,
                        frame: 8,
                        skins: ["animation/xiangjiao01.png", "animation/xiangjiao02.png", "animation/xiangjiao03.png"]
                    }, this._skinsMap.xilanhua = {
                        order: 38,
                        frame: 8,
                        skins: ["animation/xilanhua01.png", "animation/xilanhua02.png", "animation/xilanhua03.png"]
                    }, this._skinsMap.yinfu = {
                        order: 39,
                        frame: 8,
                        skins: ["animation/yinfu01.png", "animation/yinfu02.png", "animation/yinfu03.png", "animation/yinfu04.png"]
                    }, this._skinsMap["r-guozhi"] = {
                        order: 40,
                        frame: 12,
                        skins: ["animation/r-guozhi01.png", "animation/r-guozhi02.png", "animation/r-guozhi03.png", "animation/r-guozhi04.png", "animation/r-guozhi05.png", "animation/r-guozhi06.png"]
                    }, this._skinsMap.baocai = {
                        order: 41,
                        frame: 12,
                        skins: ["animation/baocai01.png", "animation/baocai02.png", "animation/baocai03.png", "animation/baocai04.png", "animation/baocai05.png", "animation/baocai06.png", "animation/baocai07.png"]
                    }, this._skinsMap["o-baozha"] = {
                        order: 42,
                        frame: 12,
                        skins: ["animation/o-baozha01.png", "animation/o-baozha02.png", "animation/o-baozha03.png", "animation/o-baozha04.png", "animation/o-baozha05.png", "animation/o-baozha06.png", "animation/o-baozha07.png"]
                    }, this._skinsMap.pingguo = {
                        order: 43,
                        frame: 12,
                        skins: ["animation/pingguo01.png", "animation/pingguo02.png", "animation/pingguo03.png", "animation/pingguo04.png", "animation/pingguo05.png", "animation/pingguo06.png", "animation/pingguo07.png", "animation/pingguo08.png"]
                    }, this._skinsMap["w-guozhi"] = {
                        order: 44,
                        frame: 12,
                        skins: ["animation/w-guozhi01.png", "animation/w-guozhi02.png", "animation/w-guozhi03.png", "animation/w-guozhi04.png", "animation/w-guozhi05.png", "animation/w-guozhi06.png"]
                    }, this._skinsMap["y-guozhi"] = {
                        order: 45,
                        frame: 12,
                        skins: ["animation/y-guozhi01.png", "animation/y-guozhi02.png", "animation/y-guozhi03.png", "animation/y-guozhi04.png", "animation/y-guozhi05.png", "animation/y-guozhi06.png"]
                    }, this._skinsMap["z-baozha"] = {
                        order: 46,
                        frame: 12,
                        skins: ["animation/z-baozha01.png", "animation/z-baozha02.png", "animation/z-baozha03.png", "animation/z-baozha04.png", "animation/z-baozha05.png", "animation/z-baozha06.png", "animation/z-baozha07.png"]
                    }, this._skinsMap.bingqiling = {
                        order: 47,
                        frame: 12,
                        skins: ["animation/ice01.png", "animation/ice02.png", "animation/ice03.png", "animation/ice04.png", "animation/ice05.png", "animation/ice06.png", "animation/ice07.png", "animation/ice08.png", "animation/ice09.png", "animation/ice10.png"]
                    }, this._skinsMap.jiansuice = {
                        order: 48,
                        frame: 12,
                        skins: ["animation/jiansuice01.png", "animation/jiansuice02.png", "animation/jiansuice03.png", "animation/jiansuice04.png", "animation/jiansuice05.png", "animation/jiansuice06.png", "animation/jiansuice07.png"]
                    }, this._skinsMap.juqi = {
                        order: 49,
                        frame: 8,
                        skins: ["animation/juqi01.png", "animation/juqi02.png", "animation/juqi03.png", "animation/juqi04.png", "animation/juqi05.png", "animation/juqi06.png"]
                    }, this._skinsMap.fq = {
                        order: 50,
                        frame: 12,
                        skins: ["animation/fq01.png", "animation/fq02.png", "animation/fq03.png", "animation/fq04.png", "animation/fq05.png", "animation/fq06.png", "animation/fq07.png", "animation/fq08.png", "animation/fq09.png", "animation/fq10.png", "animation/fq11.png", "animation/fq12.png"]
                    }, this._skinsMap.db = {
                        order: 51,
                        frame: 12,
                        skins: ["animation/db01.png", "animation/db02.png", "animation/db03.png", "animation/db04.png", "animation/db05.png", "animation/db06.png", "animation/db07.png"]
                    }, this._skinsMap.starRock = {
                        order: 52,
                        frame: 8,
                        skins: ["animation/starRock01.png", "animation/starRock02.png", "animation/starRock03.png", "animation/starRock04.png"]
                    }, this._skinsMap.starRockBoom = {
                        order: 53,
                        frame: 12,
                        skins: ["animation/starRockBoom01.png", "animation/starRockBoom02.png", "animation/starRockBoom03.png", "animation/starRockBoom04.png", "animation/starRockBoom05.png", "animation/starRockBoom06.png", "animation/starRockBoom07.png"]
                    }
                }, FramePlayerManager.prototype.create = function(name) {
                    var data = this._skinsMap[name];
                    if (!data) return null;
                    var player = this._pool.length > 0 ? this._pool.shift() : new FramePlayer_1.default;
                    return player && (player.skins = data.skins, player.frameRate = data.frame, player.onCreate(), this._useItems.push(player)), player
                }, FramePlayerManager.prototype.release = function(item) {
                    if (item) {
                        item.dispose(), this._pool.push(item);
                        var idx = this._useItems.indexOf(item); - 1 != idx && this._useItems.splice(idx, 1)
                    }
                }, FramePlayerManager.prototype.updateLogic = function(dt) {
                    for (var _i = 0, _a = this._useItems; _i < _a.length; _i++) {
                        _a[_i].updateLogic(dt)
                    }
                }, FramePlayerManager
            }();
        exports.default = FramePlayerManager
    }, {
        "../../core/animation/FramePlayer": 12
    }],
    77: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var GameData_1 = require("../../data/GameData"),
            Confings_1 = require("../../data/Confings"),
            GameControl_1 = require("../GameControl"),
            MonsterManager = function() {
                function MonsterManager() {
                    this._randomCount = 0
                }
                return Object.defineProperty(MonsterManager, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new MonsterManager), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), MonsterManager.prototype.init = function(cpCfg) {
                    if (cpCfg) {
                        this._cpCfg = cpCfg;
                        var ids = cpCfg.monsterId.split(","),
                            counts = cpCfg.monstrCount.split(","),
                            len = ids.length;
                        this.monsterVos = [];
                        for (var i = 0; i < len; i++) {
                            var vo = {
                                id: ids[i],
                                count: +counts[i]
                            };
                            this.monsterVos.push(vo)
                        }
                        this._recordallCDCreateTime = 0, this._recordCDCreateTime = null, this._randomCount = 0
                    }
                }, MonsterManager.prototype.randomAllCD = function() {
                    var allRateArr = this._cpCfg.allRate.split(","),
                        allCDRate = this._allCDRate = {
                            minrate: +allRateArr[0],
                            maxrate: +allRateArr[1]
                        };
                    this._recordallCDCreateTime = 1e3 * (Math.random() * allCDRate.minrate + (allCDRate.maxrate - allCDRate.minrate))
                }, MonsterManager.prototype.randomLineCD = function() {
                    for (var _a = this._cpCfg, rate = _a.rate, entrance = _a.entrance, allCount = _a.allCount, pathRateArr = rate.split(","), pathCDRate = this._lineCDRate = {
                            minrate: +pathRateArr[0],
                            maxrate: +pathRateArr[1]
                        }, minPath = this.minPath = Math.floor(GameData_1.default.MaxPath - entrance >> 1), recordCDTime = this._recordCDCreateTime, entrances = [], index = 0; index < entrance; index++) entrances.push(minPath + index);
                    for (var i = 0; i < entrance; i++)
                        if (!(this._randomCount >= allCount)) {
                            var entranceIndex = Math.floor(entrances.length / 2),
                                entranceValue = entrances.splice(entranceIndex, 1)[0];
                            if (recordCDTime) {
                                var randomLineCD = 1e3 * (Math.random() * pathCDRate.minrate + (pathCDRate.maxrate - pathCDRate.minrate));
                                recordCDTime[entranceValue] ? recordCDTime[entranceValue].push(randomLineCD) : recordCDTime[entranceValue] = [randomLineCD]
                            } else(recordCDTime = {})[entranceValue] = [0];
                            this._randomCount++
                        } this._recordCDCreateTime = recordCDTime
                }, MonsterManager.prototype.createMonster = function(path) {
                    var vos = this.monsterVos;
                    if (vos && vos.length > 0) {
                        var idx = Math.floor(Math.random() * vos.length),
                            vo = vos[idx];
                        if (vo && vo.count > 0) {
                            var cfg = Confings_1.default.Instance.getShuZhiById(+vo.id);
                            cfg ? (GameControl_1.default.Instance.createMonster(cfg, path), vo.count--, vo.count <= 0 && vos.splice(idx, 1)) : console.error("[怪物配置错误]:id=>" + vo.id)
                        }
                    }
                }, MonsterManager.prototype.updateLogic = function(dt) {
                    this._recordallCDCreateTime -= dt;
                    var cpCfg = this._cpCfg;
                    if (cpCfg) {
                        this._randomCount < cpCfg.allCount && this._recordallCDCreateTime < 0 && (this.randomAllCD(), this.randomLineCD());
                        var recordCDTime = this._recordCDCreateTime;
                        if (recordCDTime) {
                            for (var key in recordCDTime) {
                                var timeArr = recordCDTime[key];
                                if (timeArr.length > 0) {
                                    for (var i = timeArr.length - 1; i >= 0; i--) timeArr[i] -= dt, timeArr[i] < 0 && (this.createMonster(+key), timeArr.splice(i, 1));
                                    recordCDTime[key] = timeArr
                                }
                            }
                            this._recordCDCreateTime = recordCDTime
                        }
                    }
                }, MonsterManager
            }();
        exports.default = MonsterManager
    }, {
        "../../data/Confings": 23,
        "../../data/GameData": 24,
        "../GameControl": 56
    }],
    78: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var PlantBoxView_1 = require("../../view/PlantBoxView"),
            PlantView_1 = require("../../view/PlantView"),
            GameData_1 = require("../../data/GameData"),
            PlantBoxManager = function() {
                function PlantBoxManager() {
                    this._passtime = 0
                }
                return Object.defineProperty(PlantBoxManager, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new PlantBoxManager), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), PlantBoxManager.prototype.init = function(cfg) {
                    this._createCount = this._boxCount = cfg.plantBoxCount, this._passtime = this._boxCD = cfg.plantBoxCD, this._boxRate = +cfg.plantBoxRate.split(",")[0]
                }, PlantBoxManager.prototype.updateLogic = function(dt) {
                    if (this._passtime += dt, this._createCount > 0 && this._passtime > 1e3 * this._boxCD && (this._passtime = 0, Math.random() < this._boxRate && !PlantView_1.default.Instance.isMoving)) {
                        if (!Laya.Browser.window.h5api.canPlayAd()) return;
                        this.showPlantBox()
                    }
                }, PlantBoxManager.prototype.showPlantBox = function() {
                    var data = PlantView_1.default.Instance.getEmptyPos();
                    if (data && data.parent) {
                        GameData_1.default.Instance.slotPlants[data.index].id = -1;
                        var box = this.createPlantBox(data.index);
                        data.parent.addChild(box), this._createCount--, console.log("创建幸运花盆"), GameData_1.default.Instance.guanka < 30 && DDSDK.logEvent("plantboxinit" + GameData_1.default.Instance.guanka, {})
                    }
                }, PlantBoxManager.prototype.createPlantBox = function(index) {
                    var box = Laya.Pool.getItemByClass("plantBoxView", PlantBoxView_1.default);
                    return box.index = index, box.x = -47, box.y = -38, box
                }, PlantBoxManager
            }();
        exports.default = PlantBoxManager
    }, {
        "../../data/GameData": 24,
        "../../view/PlantBoxView": 104,
        "../../view/PlantView": 105
    }],
    79: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var GameData_1 = require("../../data/GameData"),
            Confings_1 = require("../../data/Confings"),
            CoreFunction_1 = require("../../core/CoreFunction"),
            Constant_1 = require("../../core/Constant"),
            GameControl_1 = require("../GameControl"),
            BuffManager_1 = require("../manager/BuffManager"),
            ColorFilterTool_1 = require("../../core/ColorFilterTool"),
            DefenseBuff_1 = require("../buff/DefenseBuff"),
            MessageCenter_1 = require("../../core/MessageCenter"),
            ColliderUtil_1 = require("../../core/ColliderUtil"),
            SoundManager_1 = require("../../../wxSDK/SoundManager"),
            ResConfig_1 = require("../../core/ResConfig"),
            FramePlayerManager_1 = require("../manager/FramePlayerManager"),
            BaseMonster = function(_super) {
                function BaseMonster() {
                    var _this = _super.call(this) || this;
                    return _this._hitEffTime = -501, _this._attackPassTime = 0, _this._attackCD = 1e3, _this._showHpTime = 0, _this
                }
                return __extends(BaseMonster, _super), Object.defineProperty(BaseMonster.prototype, "bornY", {
                    set: function(val) {
                        this._bornY = val
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "isBoss", {
                    get: function() {
                        return 1 == this._isBoss
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "maxHp", {
                    get: function() {
                        return this._maxhp
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "path", {
                    get: function() {
                        return this._nowpath
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "inmmune", {
                    get: function() {
                        return this._immune
                    },
                    set: function(b) {
                        this._immune = b
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "transparent", {
                    get: function() {
                        return this._transparent
                    },
                    set: function(b) {
                        this._transparent = b
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "active", {
                    get: function() {
                        return !this.isDead
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "type", {
                    get: function() {
                        return this._type
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "Owner", {
                    get: function() {
                        return this.owner
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "parent", {
                    get: function() {
                        return this.Owner ? this.Owner.parent : null
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "globleY", {
                    get: function() {
                        var owner = this.Owner;
                        if (owner && owner.parent) {
                            var p = Laya.Point.create();
                            return p.x = owner.x, p.y = owner.y, owner.parent.localToGlobal(p), p.y
                        }
                        return -999
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "isIce", {
                    get: function() {
                        var buff = this._buffDir ? this._buffDir[Constant_1.BuffType.Ice] : null;
                        return !(!buff || !buff.active)
                    },
                    enumerable: !0,
                    configurable: !0
                }), BaseMonster.prototype.initData = function(cfg, path) {
                    var _this = this;
                    this._started = !1, this._inited = !1, this._cfg = cfg, this._moveSpeed = this._currSpeed = cfg.speed, this._type = cfg.type, this._big = cfg.big, this._isBoss = cfg.isBoss, this._colliderWidth = this.isBoss ? 270 : 90;
                    var collider = this.owner.getComponent(Laya.BoxCollider);
                    collider.width = this._colliderWidth, collider.x = this.isBoss ? -135 : -45;
                    this.defenseBox = this.owner.getChildByName("defenseBox");
                    var lvTxt = this.lvTxt = this.owner.getChildByName("lvTxt");
                    lvTxt.text = "Lv." + cfg.level;
                    var hpBar = this.hpBar = this.owner.getChildByName("hpBar");
                    lvTxt.visible = hpBar.visible = !1, this.defenseHpBar = hpBar.getChildByName("defenseBar"), this.defenseHpBarBg = hpBar.getChildByName("defenseBarBg"), this.setDefenseState(!1);
                    this.bar = hpBar.getChildByName("bar");
                    this.updateBar();
                    var monsterCfg = this._monsterCfg = Confings_1.default.Instance.getMonsterById(cfg.monsterid);
                    if (monsterCfg) {
                        var guankaCfgs = Confings_1.default.Instance.getGuankaTurns(GameData_1.default.Instance.currGuanka),
                            baseHp = guankaCfgs && guankaCfgs.length > 0 ? guankaCfgs[0].hp : 1;
                        this._maxhp = this._hp = monsterCfg.hpratio * baseHp, this._attackCD = 1e3 * monsterCfg.attackCD;
                        var skCon = this.owner.getChildByName("skCon");
                        this.skeleton = CoreFunction_1.CoreFunction.getSkeleton(monsterCfg.bone, skCon, 1, 1, Laya.Handler.create(this, function() {
                            var scale = _this._big,
                                skeletonRate = _this._skeletonRate = _this._currSpeed / .5 * 1.5;
                            _this.skeleton.playbackRate(skeletonRate), _this.skeleton.scale(scale, scale);
                            var ty = -135;
                            _this.isBoss && (ty *= 1.8), _this.type == Constant_1.MonsterType.Monster9 && (ty *= .3), lvTxt.y = ty - 40, hpBar.y = ty - 30, _this.skeleton.on(Laya.Event.STOPPED, _this, _this.onSkeletonEvent), _this.play(Constant_1.MonsterAniName.Walk, !0), _this.startMove(), _this._inited = !0
                        }))
                    }
                    this._buffDir = null, this._immune = !1, this._transparent = !1, this._nowpath = this._targetPath = path;
                    var moonWalk = cfg.moonWalk;
                    if ("0" != moonWalk) {
                        var arr = moonWalk.split(","),
                            moonWalkCD = this._moonWalkCD = {
                                minVal: +arr[0],
                                maxVal: +arr[1]
                            };
                        this._moonWalkTime = 1e3 * (Math.random() * (moonWalkCD.maxVal - moonWalkCD.minVal) + moonWalkCD.minVal), this._moonWalkSkill = !0, this._moonWalkPassTime = 0
                    } else this._moonWalkSkill = !1
                }, BaseMonster.prototype.updateBar = function() {
                    this.bar && this._cfg && this._cfg.isBoss ? this.bar.skin = ResConfig_1.ResConfig.getMainUrl("zwujs_jindt_xuet2") : this.bar.skin = ResConfig_1.ResConfig.getMainUrl("zwujs_jindt_xuet3")
                }, Object.defineProperty(BaseMonster.prototype, "moveSpeed", {
                    get: function() {
                        return this._moveSpeed
                    },
                    set: function(value) {
                        this._moveSpeed = value
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BaseMonster.prototype, "Rectangle", {
                    get: function() {
                        this._rectangle || (this._rectangle = new Laya.Rectangle);
                        var pos = Laya.Point.create(),
                            owner = this.Owner;
                        return owner && (pos.setTo(-this._colliderWidth / 2, this.isBoss ? -160 : -110), owner.localToGlobal(pos), this._rectangle.setTo(pos.x, pos.y, this._colliderWidth, 90)), this._rectangle
                    },
                    enumerable: !0,
                    configurable: !0
                }), BaseMonster.prototype.startMove = function() {
                    this._started = !0
                }, BaseMonster.prototype.play = function(name, loop) {
                    this._lastAniName = name, this.skeleton.play(name, loop)
                }, BaseMonster.prototype.onSkeletonEvent = function(e) {
                    switch (this._lastAniName) {
                        case Constant_1.MonsterAniName.Hit:
                            this.play(Constant_1.MonsterAniName.Walk, !0);
                            break;
                        case Constant_1.MonsterAniName.Dead:
                            GameControl_1.default.Instance.removeMonster(this);
                            break;
                        case Constant_1.MonsterAniName.Attack_1:
                            this.play(Constant_1.MonsterAniName.Walk, !0), MessageCenter_1.MessageCenter.Instance.dispatch("groud_hp_update")
                    }
                }, BaseMonster.prototype.dead = function() {
                    this._started = !1;
                    var money = this._cfg.money * GameData_1.default.Instance.getTianFuAwardByType(Constant_1.TianFuType.type3),
                        skillbuff = Confings_1.default.Instance.getSkillById(Constant_1.SkillType.YunShi),
                        skillState = GameData_1.default.Instance.getSkillState(skillbuff.id);
                    skillState && (money *= skillbuff.value), GameData_1.default.Instance.addGold(money);
                    var buff = this._buffDir ? this._buffDir[Constant_1.BuffType.Ice] : null;
                    buff && (buff.clear(), this.Owner.filters = null, this.iceEffect && (FramePlayerManager_1.default.Instance.release(this.iceEffect), this.iceEffect = null), this.skeleton.playbackRate(this._skeletonRate)), this.play(Constant_1.MonsterAniName.Dead, !1), MessageCenter_1.MessageCenter.Instance.dispatch("monster_dead_update"), SoundManager_1.default.Instance.playName(this._monsterCfg.deathVoice);
                    var point = Laya.Point.create();
                    point.x = this.Owner.x, point.y = this.Owner.y, this.Owner.parent.localToGlobal(point);
                    var min = skillState ? 4 : 2,
                        max = skillState ? 6 : 3;
                    CoreFunction_1.CoreFunction.showFlyGold(point.x, point.y, min, max, 0, -50)
                }, Object.defineProperty(BaseMonster.prototype, "isDead", {
                    get: function() {
                        return this._hp <= 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), BaseMonster.prototype.changeBlood = function(dps) {
                    if (!this.isDead && !this.transparent && this._inited) {
                        var defenseBuff = this._buffDir ? this._buffDir[Constant_1.BuffType.Defense] : null;
                        if (defenseBuff && defenseBuff instanceof DefenseBuff_1.default && defenseBuff.active) defenseBuff.defenseHp -= dps;
                        else {
                            this._hp -= dps, this._hp = Math.max(0, this._hp);
                            try {
                                var scaleX = this._hp / this._maxhp;
                                Laya.Tween.clearTween(this.bar), Laya.Tween.to(this.bar, {
                                    scaleX: scaleX
                                }, 150)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        this._hp <= 0 && this.dead(), this._hitEffTime < -500 && (this.skeleton.filters = ColorFilterTool_1.default.Instance.flash(), this._hitEffTime = 100)
                    }
                }, BaseMonster.prototype.isOutToScreen = function() {
                    if (!this.owner) return !0;
                    var x = this.owner.x,
                        y = this.owner.y;
                    return x > Laya.stage.width || x < 0 || y > Laya.stage.height || y < -150
                }, BaseMonster.prototype.beHit = function(collider, damage, buff, bianyiBuff) {
                    this.isDead || this.transparent || !this._inited || (this.addBuff(buff), this.addBianyiBuff(bianyiBuff), this.changeBlood(damage), this._showHpTime = 2e3, SoundManager_1.default.Instance.playName(this._monsterCfg.damageVoice))
                }, BaseMonster.prototype.createKillEff = function() {
                    var owner = this.Owner;
                    if (owner) {
                        var img = Laya.Pool.getItemByClass("img", Laya.Image);
                        img.skin = ResConfig_1.ResConfig.getMainUrl("zwujs_txt_zhim"), img.anchorX = img.anchorY = .5, img.scale(.1, .1);
                        var p = Laya.Point.create();
                        if (p.setTo(owner.x, owner.y), owner.parent) {
                            owner.parent.localToGlobal(p);
                            img.pos(p.x, p.y - 90), Laya.stage.addChild(img), Laya.Tween.to(img, {
                                scaleX: 1.3,
                                scaleY: 1.3,
                                y: p.y - 90 - 50
                            }, 400, Laya.Ease.backOut), Laya.timer.once(600, null, function() {
                                img.removeSelf()
                            })
                        }
                    }
                }, BaseMonster.prototype.addBianyiBuff = function(buff) {
                    if (buff)
                        if (buff.type != Constant_1.BuffType.Kill) {
                            this._buffDir || (this._buffDir = {});
                            var curBuff = this._buffDir[buff.type];
                            curBuff ? curBuff.plus(buff) : (this._buffDir[buff.type] = buff, BuffManager_1.default.Instance.addBuff(buff))
                        } else this._cfg && !this._cfg.isBoss && (this.changeBlood(this._maxhp), this.createKillEff())
                }, BaseMonster.prototype.addBuff = function(buff) {
                    if (buff)
                        if (buff.type != Constant_1.BuffType.HitBack) {
                            if (buff.type == Constant_1.BuffType.YunShi) {
                                var value = this._cfg.isBoss ? buff.bossValue : buff.value,
                                    damage = this._maxhp * value || 0;
                                return this.changeBlood(damage), void(this._showHpTime = 2e3)
                            }
                            this._buffDir || (this._buffDir = {});
                            var curBuff = this._buffDir[buff.type];
                            curBuff ? curBuff.plus(buff) : (this._buffDir[buff.type] = buff, BuffManager_1.default.Instance.addBuff(buff))
                        } else this.Owner.y -= buff.calculate(0)
                }, BaseMonster.prototype.setDefenseState = function(boo) {
                    this.defenseHpBarBg.visible = this.defenseHpBar.visible = this.defenseBox.visible = boo
                }, BaseMonster.prototype.attack = function() {
                    var buff = this._buffDir ? this._buffDir[Constant_1.BuffType.Ice] : null;
                    buff && buff.active || this.play(Constant_1.MonsterAniName.Attack_1, !1)
                }, BaseMonster.prototype.updateLogic = function(dt) {
                    var selfRect = this.Rectangle;
                    if (this._hitEffTime > -500 && (this._hitEffTime -= dt), this._hitEffTime < 0 && (this.skeleton.filters = null), this.buffLogic(), this._started || (this._attackPassTime += dt, this.active && this._attackPassTime > this._attackCD && (this._attackPassTime = 0, this.attack())), ColliderUtil_1.ColliderUtil.rectHitTestPoint(GameData_1.default.Instance.groundRect, {
                            x: selfRect.x,
                            y: selfRect.y + selfRect.height
                        })) this.active && this._started && this.attack(), this._started = !1;
                    else {
                        if (this._started = !0, this._moonWalkSkill && (this._moonWalkPassTime += dt, this._moonWalkPassTime > this._moonWalkTime)) {
                            this._moonWalkPassTime = 0;
                            var moonWalkCD = this._moonWalkCD;
                            this._moonWalkTime = 1e3 * (Math.random() * (moonWalkCD.maxVal - moonWalkCD.minVal) + moonWalkCD.minVal);
                            var buff = this._buffDir ? this._buffDir[Constant_1.BuffType.Ice] : null;
                            buff && buff.active || this.updateMoonWalk()
                        }
                        var owner = this.Owner;
                        if (owner && !this.isDead) {
                            var factor = dt / (1e3 / 60);
                            owner.y += this._currSpeed * factor
                        }
                    }
                    this._showHpTime -= dt, this.hpBar && (this.hpBar.visible = this._showHpTime > 0)
                }, BaseMonster.prototype.buffLogic = function() {
                    if (this._buffDir) {
                        var owner = void 0;
                        for (var type in this._buffDir) {
                            var buff = this._buffDir[type];
                            switch (+type) {
                                case Constant_1.BuffType.MoveSpeed:
                                    var moveSpeed = buff.active ? buff.calculate(this.moveSpeed) : this.moveSpeed;
                                    this._currSpeed = moveSpeed = this.isDead ? 0 : moveSpeed, (owner = this.Owner) && this.skeleton && (buff.active ? this.skeleton.filters || (this.skeleton.filters = ColorFilterTool_1.default.Instance.blue(), this.skeleton.playbackRate(buff.calculate(this._skeletonRate))) : (this.skeleton.filters = null, this.skeleton.playbackRate(this._skeletonRate)));
                                    break;
                                case Constant_1.BuffType.Ice:
                                    if (this._currSpeed = moveSpeed = this.isDead || buff.active ? 0 : this.moveSpeed, owner = this.Owner)
                                        if (buff.active) {
                                            if (owner.filters || (owner.filters = ColorFilterTool_1.default.Instance.blue(), this.skeleton.playbackRate(0)), !this.iceEffect) {
                                                var eff = this.iceEffect = FramePlayerManager_1.default.Instance.create("iceEffect");
                                                eff && (eff.anchorX = eff.anchorY = .5, eff.x = 0, eff.y = -60, eff.play(1), owner.addChild(eff))
                                            }
                                        } else owner.filters = null, this.iceEffect && (FramePlayerManager_1.default.Instance.release(this.iceEffect), this.iceEffect = null), this.skeleton.playbackRate(this._skeletonRate);
                                    break;
                                case Constant_1.BuffType.Defense:
                                    if (this.setDefenseState(buff.active), !this.frameplayer) {
                                        var frameplayer = this.frameplayer = FramePlayerManager_1.default.Instance.create("hudun");
                                        frameplayer.scaleX = frameplayer.scaleY = .8, frameplayer.anchorX = frameplayer.anchorY = .5, frameplayer.centerX = 0, frameplayer.centerY = 15, this.defenseBox.addChild(frameplayer), frameplayer.play(-1)
                                    }
                                    var scaleX = buff.hpprogress;
                                    Laya.Tween.clearTween(this.defenseHpBar), Laya.Tween.to(this.defenseHpBar, {
                                        scaleX: scaleX
                                    }, 150);
                                    break;
                                case Constant_1.BuffType.Poisoning:
                                    if (buff.active) {
                                        this._showHpTime = 2e3, this.bar.skin = ResConfig_1.ResConfig.getMainUrl("zwujs_jindt_xuet4");
                                        var tempBuff = buff,
                                            bili = this.isBoss ? tempBuff.bossDamgeBili : tempBuff.damgeBili,
                                            damage = this._maxhp * bili;
                                        tempBuff.isActive && this.changeBlood(damage)
                                    } else this.updateBar()
                            }
                        }
                    }
                }, BaseMonster.prototype.updateMoonWalk = function() {
                    var _this = this;
                    switch (this._targetPath) {
                        case 0:
                            this._targetPath++;
                            break;
                        case GameData_1.default.MaxPath - 1:
                            this._targetPath--;
                            break;
                        default:
                            var movePath = Math.random() < .5 ? 1 : -1;
                            this._targetPath += movePath
                    }
                    Laya.Tween.to(this.owner, {
                        x: GameData_1.default.Instance.getPathCenterX(this._targetPath)
                    }, 1e3, null, Laya.Handler.create(this, function() {
                        _this._nowpath = _this._targetPath
                    }))
                }, BaseMonster.prototype.disposeBones = function() {
                    var skeleton = this.skeleton;
                    skeleton && (CoreFunction_1.CoreFunction.releaseSkeleton(skeleton), skeleton.off(Laya.Event.STOPPED, this, this.onSkeletonEvent))
                }, BaseMonster.prototype.onEnable = function() {
                    this.Owner.pos(GameData_1.default.Instance.getPathCenterX(this._nowpath), this._bornY);
                    var skinCon = this.owner.getChildByName("skCon");
                    skinCon.scaleX = skinCon.scaleY = 0, Laya.Tween.to(skinCon, {
                        scaleX: 1,
                        scaleY: 1
                    }, 500)
                }, BaseMonster.prototype.recover = function() {
                    this._started = !1, this.bar && (this.bar.scaleX = 1), this.defenseHpBar && (this.defenseHpBar.scaleX = 1), this.frameplayer && (FramePlayerManager_1.default.Instance.release(this.frameplayer), this.frameplayer = null), this.iceEffect && (FramePlayerManager_1.default.Instance.release(this.iceEffect), this.iceEffect = null), this.Owner.filters = null;
                    var buffDir = this._buffDir;
                    if (buffDir) {
                        for (var type in this._buffDir) BuffManager_1.default.Instance.removeBuff(buffDir[type]);
                        this._buffDir = null
                    }
                }, BaseMonster
            }(Laya.Script);
        exports.default = BaseMonster
    }, {
        "../../../wxSDK/SoundManager": 111,
        "../../core/ColliderUtil": 4,
        "../../core/ColorFilterTool": 5,
        "../../core/Constant": 6,
        "../../core/CoreFunction": 7,
        "../../core/MessageCenter": 10,
        "../../core/ResConfig": 11,
        "../../data/Confings": 23,
        "../../data/GameData": 24,
        "../GameControl": 56,
        "../buff/DefenseBuff": 60,
        "../manager/BuffManager": 75,
        "../manager/FramePlayerManager": 76
    }],
    80: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseMonster_1 = require("./BaseMonster"),
            Confings_1 = require("../../data/Confings"),
            GameControl_1 = require("../GameControl"),
            MathEx_1 = require("../../core/MathEx"),
            FissionMonster = function(_super) {
                function FissionMonster() {
                    return _super.call(this) || this
                }
                return __extends(FissionMonster, _super), FissionMonster.prototype.initData = function(cfg, path) {
                    _super.prototype.initData.call(this, cfg, path);
                    var fission = cfg.fission,
                        fissionID = cfg.fissionID;
                    this._fisson = fission, this._fissonId = fissionID
                }, FissionMonster.prototype.dead = function() {
                    for (var fission = this._fisson, minPath = this.path - Math.floor(fission / 2), owner = this.Owner, bornY = owner ? owner.y : 0, p = 0, i = 0; i < fission; i++) {
                        var cfg = Confings_1.default.Instance.getShuZhiById(+this._fissonId);
                        fission % 2 == 0 && minPath + p == this.path && p++;
                        var curPath = MathEx_1.default.Inst.clamp(minPath + p, 0, 4);
                        GameControl_1.default.Instance.createMonster(cfg, curPath, bornY), p++
                    }
                    _super.prototype.dead.call(this)
                }, FissionMonster
            }(BaseMonster_1.default);
        exports.default = FissionMonster
    }, {
        "../../core/MathEx": 9,
        "../../data/Confings": 23,
        "../GameControl": 56,
        "./BaseMonster": 79
    }],
    81: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseMonster_1 = require("./BaseMonster"),
            GameData_1 = require("../../data/GameData"),
            FramePlayerManager_1 = require("../manager/FramePlayerManager"),
            FlashMonster = function(_super) {
                function FlashMonster() {
                    return _super.call(this) || this
                }
                return __extends(FlashMonster, _super), FlashMonster.prototype.initData = function(cfg, path) {
                    _super.prototype.initData.call(this, cfg, path);
                    var flash = cfg.flash;
                    this._flashCD = 1e3 * flash, this._passTime = 0
                }, FlashMonster.prototype.updateLogic = function(dt) {
                    var _this = this;
                    if (_super.prototype.updateLogic.call(this, dt), this._passTime += dt, this._passTime > this._flashCD) {
                        if (this._passTime = 0, this.isIce) return;
                        for (var path_1 = this._nowpath; path_1 == this._nowpath;) path_1 = Math.floor(Math.random() * GameData_1.default.MaxPath);
                        var x_1 = GameData_1.default.Instance.getPathCenterX(path_1);
                        this.Owner && this.active && (Laya.Tween.to(this.skeleton, {
                            scaleX: 0,
                            scaleY: 0
                        }, 500, null, Laya.Handler.create(this, function() {
                            var owner = _this.Owner;
                            owner && (owner.x = x_1), _this._nowpath = _this._targetPath = path_1, _this.showHeiDong()
                        })), Laya.Tween.to(this.skeleton, {
                            scaleX: this._cfg.big,
                            scaleY: this._cfg.big
                        }, 500, null, null, 500), this.showHeiDong())
                    }
                }, FlashMonster.prototype.showHeiDong = function() {
                    var frameplayer = FramePlayerManager_1.default.Instance.create("heidong");
                    frameplayer && (frameplayer.anchorX = frameplayer.anchorY = .5, frameplayer.x = 0, frameplayer.y = -50, this.Owner.addChildAt(frameplayer, 0), frameplayer.onceCallBack = function(e) {
                        FramePlayerManager_1.default.Instance.release(e)
                    }, frameplayer.play(1))
                }, FlashMonster
            }(BaseMonster_1.default);
        exports.default = FlashMonster
    }, {
        "../../data/GameData": 24,
        "../manager/FramePlayerManager": 76,
        "./BaseMonster": 79
    }],
    82: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var GhostMonster = function(_super) {
            function GhostMonster() {
                return _super.call(this) || this
            }
            return __extends(GhostMonster, _super), Object.defineProperty(GhostMonster.prototype, "transparent", {
                get: function() {
                    return !this.defenseBox.visible && this._transparent
                },
                set: function(b) {
                    this._transparent = b
                },
                enumerable: !0,
                configurable: !0
            }), GhostMonster.prototype.initData = function(cfg, path) {
                _super.prototype.initData.call(this, cfg, path);
                var invisible = cfg.invisible,
                    invisibleCD = cfg.invisibleCD;
                if ("0" != invisible) {
                    var arr = invisible.split(",");
                    this._invisible = {
                        minVal: +arr[0],
                        maxVal: +arr[1]
                    }, this._invisibleCD = 1e3 * invisibleCD, this._invisibelPassTime = 0, this.randomInvisibleTime()
                }
                this.transparent = !0
            }, GhostMonster.prototype.randomInvisibleTime = function() {
                var invisible = this._invisible;
                this._invisibelTime = 1e3 * (Math.random() * invisible.minVal + (invisible.maxVal - invisible.minVal))
            }, GhostMonster.prototype.updateLogic = function(dt) {
                _super.prototype.updateLogic.call(this, dt), this._invisibelPassTime += dt, this.transparent = this._invisibelPassTime < this._invisibelTime, this._invisibelPassTime > this._invisibelTime + this._invisibleCD && (this._invisibelPassTime = 0, this.randomInvisibleTime()), this.owner.alpha = this.transparent ? .5 : 1
            }, GhostMonster
        }(require("./BaseMonster").default);
        exports.default = GhostMonster
    }, {
        "./BaseMonster": 79
    }],
    83: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var GuardMonster = function(_super) {
            function GuardMonster() {
                return _super.call(this) || this
            }
            return __extends(GuardMonster, _super), GuardMonster.prototype.initData = function(cfg, path) {
                _super.prototype.initData.call(this, cfg, path);
                var collider = this.collider2 = this.Owner.addComponent(Laya.BoxCollider);
                collider.width = 270, collider.height = 80, collider.x = -135, collider.y = -120
            }, GuardMonster.prototype.beHit = function(collider, damage, buff, bianyiBuff) {
                collider != this.collider2 && _super.prototype.beHit.call(this, collider, damage, buff, bianyiBuff)
            }, GuardMonster.prototype.recover = function() {
                this.collider2.destroy(), _super.prototype.recover.call(this)
            }, GuardMonster
        }(require("./BaseMonster").default);
        exports.default = GuardMonster
    }, {
        "./BaseMonster": 79
    }],
    84: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseMonster_1 = require("./BaseMonster"),
            PlantView_1 = require("../../view/PlantView"),
            layaMaxUI_1 = require("../../../ui/layaMaxUI"),
            ResConfig_1 = require("../../core/ResConfig"),
            AttackSpeedBuff_1 = require("../buff/AttackSpeedBuff"),
            FramePlayerManager_1 = require("../manager/FramePlayerManager"),
            JianSuMonster = function(_super) {
                function JianSuMonster() {
                    var _this = _super.call(this) || this;
                    return _this.attackIndex = -1, _this.attacked = !1, _this
                }
                return __extends(JianSuMonster, _super), JianSuMonster.prototype.initData = function(cfg, path) {
                    _super.prototype.initData.call(this, cfg, path)
                }, JianSuMonster.prototype.updateLogic = function(dt) {
                    if (_super.prototype.updateLogic.call(this, dt), !this.attacked) {
                        var parent_1 = this.Owner.parent;
                        if (this.Owner.y > parent_1.height - 350) {
                            this.attacked = !0;
                            var slotData = PlantView_1.default.Instance.getMaxLvPos();
                            if (slotData) {
                                var eff = this.eff_miaozhun = new layaMaxUI_1.ui.effects.eff_miaozhunUI,
                                    targetPos = Laya.Point.create();
                                targetPos.setTo(slotData.slot.x, slotData.slot.y);
                                var parent_2 = slotData.slot.parent;
                                parent_2 && parent_2.localToGlobal(targetPos, !1), eff.x = Laya.stage.displayWidth / 2, eff.y = Laya.stage.displayHeight - 200, Laya.Tween.to(eff, {
                                    x: targetPos.x,
                                    y: targetPos.y
                                }, 2e3), eff.ani1.once(Laya.Event.COMPLETE, this, this.onMiaozhunComplete), eff.ani1.play(0, !1), Laya.stage.addChild(eff), this.attackIndex = slotData.index
                            }
                        }
                    }
                }, JianSuMonster.prototype.onMiaozhunComplete = function() {
                    var _this = this,
                        eff_miaozhun = this.eff_miaozhun;
                    eff_miaozhun.ani2.play(0, !0), eff_miaozhun.off(Laya.Event.COMPLETE, this, this.onMiaozhunComplete);
                    var image = new Laya.Image;
                    image.skin = ResConfig_1.ResConfig.getMainUrl("bingqilin"), image.x = this.Owner.x + 45, image.y = this.Owner.y;
                    var dx = image.x - eff_miaozhun.x,
                        dy = image.y - eff_miaozhun.y,
                        rotation = Math.atan2(dy, dx) / Math.PI * 180 + 90;
                    image.rotation = rotation, image.scaleX = image.scaleY = .8, image.anchorX = image.anchorY = .5, Laya.stage.addChild(image);
                    var t = Math.sqrt(dx * dx + dy * dy) / 600;
                    Laya.Tween.to(image, {
                        x: eff_miaozhun.x,
                        y: eff_miaozhun.y
                    }, 1e3 * t, null, Laya.Handler.create(this, function() {
                        eff_miaozhun.removeSelf(), eff_miaozhun.destroy(!1), image.removeSelf(), PlantView_1.default.Instance.addBuffByIndex(_this.attackIndex, new AttackSpeedBuff_1.default(2, 1e4));
                        var bingqilin = FramePlayerManager_1.default.Instance.create("bingqiling");
                        Laya.stage.addChild(bingqilin), bingqilin.anchorX = bingqilin.anchorY = .5, bingqilin.x = eff_miaozhun.x, bingqilin.y = eff_miaozhun.y, bingqilin.play(1), bingqilin.onceCallBack = function(f) {
                            FramePlayerManager_1.default.Instance.release(f)
                        }
                    }), 500)
                }, JianSuMonster.prototype.recover = function() {
                    var eff_miaozhun = this.eff_miaozhun;
                    eff_miaozhun && (eff_miaozhun.off(Laya.Event.COMPLETE, this, this.onMiaozhunComplete), eff_miaozhun.removeSelf(), eff_miaozhun.destroy(!1)), _super.prototype.recover.call(this)
                }, JianSuMonster
            }(BaseMonster_1.default);
        exports.default = JianSuMonster
    }, {
        "../../../ui/layaMaxUI": 107,
        "../../core/ResConfig": 11,
        "../../view/PlantView": 105,
        "../buff/AttackSpeedBuff": 58,
        "../manager/FramePlayerManager": 76,
        "./BaseMonster": 79
    }],
    85: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Constant_1 = require("../../core/Constant"),
            NormalMonster_1 = require("./NormalMonster"),
            GhostMonster_1 = require("./GhostMonster"),
            FlashMonster_1 = require("./FlashMonster"),
            GuardMonster_1 = require("./GuardMonster"),
            FissionMonster_1 = require("./FissionMonster"),
            ShieldMonster_1 = require("./ShieldMonster"),
            SmokeMonster_1 = require("./SmokeMonster"),
            JianSuMonster_1 = require("./JianSuMonster"),
            MonsterFactory = function() {
                function MonsterFactory() {}
                return Object.defineProperty(MonsterFactory, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new MonsterFactory), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), MonsterFactory.prototype.create = function(type, prefab) {
                    var plant, box = Laya.Pool.getItemByCreateFun("monster_" + type, prefab.create, prefab);
                    switch (type) {
                        case Constant_1.MonsterType.Monster1:
                            plant = box.addComponent(NormalMonster_1.default);
                            break;
                        case Constant_1.MonsterType.Monster2:
                            plant = box.addComponent(GhostMonster_1.default);
                            break;
                        case Constant_1.MonsterType.Monster3:
                            plant = box.addComponent(FlashMonster_1.default);
                            break;
                        case Constant_1.MonsterType.Monster4:
                            plant = box.addComponent(FissionMonster_1.default);
                            break;
                        case Constant_1.MonsterType.Monster5:
                            plant = box.addComponent(GuardMonster_1.default);
                            break;
                        case Constant_1.MonsterType.Monster6:
                            plant = box.addComponent(SmokeMonster_1.default);
                            break;
                        case Constant_1.MonsterType.Monster7:
                            plant = box.addComponent(ShieldMonster_1.default);
                            break;
                        case Constant_1.MonsterType.Monster8:
                            plant = box.addComponent(JianSuMonster_1.default);
                            break;
                        case Constant_1.MonsterType.Monster9:
                            plant = box.addComponent(NormalMonster_1.default)
                    }
                    return plant
                }, MonsterFactory.prototype.destory = function(type, item) {
                    item.owner && Laya.Pool.recover("monster_" + type, item.owner), item.disposeBones(), item.recover(), item.destroy()
                }, MonsterFactory
            }();
        exports.default = MonsterFactory
    }, {
        "../../core/Constant": 6,
        "./FissionMonster": 80,
        "./FlashMonster": 81,
        "./GhostMonster": 82,
        "./GuardMonster": 83,
        "./JianSuMonster": 84,
        "./NormalMonster": 87,
        "./ShieldMonster": 88,
        "./SmokeMonster": 89
    }],
    86: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var MySprite = function(_super) {
            function MySprite() {
                return _super.call(this) || this
            }
            return __extends(MySprite, _super), MySprite.prototype._setX = function(x) {
                isNaN(x) ? console.log("isNaN(x)") : this._x = x
            }, MySprite.prototype._setY = function(y) {
                isNaN(y) ? console.log("isNaN(y)") : this._y = y
            }, Object.defineProperty(MySprite.prototype, "x", {
                set: function(x) {
                    this._x = x
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(MySprite.prototype, "y", {
                set: function(y) {
                    this._y = y
                },
                enumerable: !0,
                configurable: !0
            }), MySprite
        }(Laya.Sprite);
        exports.default = MySprite
    }, {}],
    87: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var NormalMonster = function(_super) {
            function NormalMonster() {
                return _super.call(this) || this
            }
            return __extends(NormalMonster, _super), NormalMonster
        }(require("./BaseMonster").default);
        exports.default = NormalMonster
    }, {
        "./BaseMonster": 79
    }],
    88: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseMonster_1 = require("./BaseMonster"),
            DefenseBuff_1 = require("../buff/DefenseBuff"),
            MessageCenter_1 = require("../../core/MessageCenter"),
            ShieldMonster = function(_super) {
                function ShieldMonster() {
                    return _super.call(this) || this
                }
                return __extends(ShieldMonster, _super), Object.defineProperty(ShieldMonster.prototype, "shieldHP", {
                    get: function() {
                        return this._shieldHP
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(ShieldMonster.prototype, "shieldCount", {
                    get: function() {
                        return this._shieldCount
                    },
                    enumerable: !0,
                    configurable: !0
                }), ShieldMonster.prototype.initData = function(cfg, path) {
                    _super.prototype.initData.call(this, cfg, path);
                    var shieldCount = cfg.shieldCount,
                        shieldHP = cfg.shieldHP;
                    this._shieldCount = shieldCount, this._shieldHP = shieldHP
                }, ShieldMonster.prototype.dead = function() {
                    _super.prototype.dead.call(this);
                    for (var shieldCount = this.shieldCount, shieldHP = this.shieldHP, buffs = [], index = 0; index < shieldCount; index++) buffs.push(new DefenseBuff_1.default(this.maxHp * shieldHP));
                    MessageCenter_1.MessageCenter.Instance.dispatch("monster_addbuff", buffs)
                }, ShieldMonster
            }(BaseMonster_1.default);
        exports.default = ShieldMonster
    }, {
        "../../core/MessageCenter": 10,
        "../buff/DefenseBuff": 60,
        "./BaseMonster": 79
    }],
    89: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseMonster_1 = require("./BaseMonster"),
            FramePlayerManager_1 = require("../manager/FramePlayerManager"),
            SmokeMonster = function(_super) {
                function SmokeMonster() {
                    return _super.call(this) || this
                }
                return __extends(SmokeMonster, _super), SmokeMonster.prototype.initData = function(cfg, path) {
                    _super.prototype.initData.call(this, cfg, path);
                    var smoke = this.smokeEff = FramePlayerManager_1.default.Instance.create("MotoSmoke");
                    smoke.anchorX = .5, smoke.anchorY = 1, smoke.y = -100, smoke.x = 0, smoke.play(-1), this.Owner.addChildAt(smoke, 0)
                }, SmokeMonster.prototype.dead = function() {
                    Laya.Tween.to(this.smokeEff, {
                        scaleX: 0,
                        scaleY: 0
                    }, 500), _super.prototype.dead.call(this)
                }, SmokeMonster.prototype.recover = function() {
                    var smoke = this.smokeEff;
                    smoke && (smoke.stop(), FramePlayerManager_1.default.Instance.release(smoke)), this.smokeEff = null, _super.prototype.recover.call(this)
                }, SmokeMonster
            }(BaseMonster_1.default);
        exports.default = SmokeMonster
    }, {
        "../manager/FramePlayerManager": 76,
        "./BaseMonster": 79
    }],
    90: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ResConfig_1 = require("../../core/ResConfig"),
            GameControl_1 = require("../GameControl"),
            Confings_1 = require("../../data/Confings"),
            BulletFactory_1 = require("../buttle/BulletFactory"),
            SoundManager_1 = require("../../../wxSDK/SoundManager"),
            Constant_1 = require("../../core/Constant"),
            GameData_1 = require("../../data/GameData"),
            FramePlayerManager_1 = require("../manager/FramePlayerManager"),
            BuffManager_1 = require("../manager/BuffManager"),
            ColorFilterTool_1 = require("../../core/ColorFilterTool"),
            BasePlant = function(_super) {
                function BasePlant() {
                    var _this = _super.call(this) || this;
                    return _this.attackCD = 0, _this
                }
                return __extends(BasePlant, _super), Object.defineProperty(BasePlant.prototype, "type", {
                    get: function() {
                        return this._type
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BasePlant.prototype, "Owner", {
                    get: function() {
                        return this.owner
                    },
                    enumerable: !0,
                    configurable: !0
                }), BasePlant.prototype.initData = function(cfg, i, bianyiId) {
                    if (this._index = i, this._bianyiId = bianyiId, this.updateBianyi(), !this._cfg || this._cfg.id != cfg.id) {
                        if (this.attackTimes = 0, this.otherId = "0", this.otherInterval = 0, cfg.others) {
                            var arr = cfg.others.split(",");
                            arr.length > 1 && (this.otherInterval = +arr[0], this.otherId = arr[1])
                        }
                        this._type = cfg.type, this.icon = this.owner.getChildByName("icon"), this.lvBg || (this.lvBg = new Laya.Image);
                        var lvBg = this.lvBg;
                        lvBg.visible = !0;
                        var lvClip = this.lvClip;
                        this.lvClip || ((lvClip = this.lvClip = new Laya.FontClip).skin = ResConfig_1.ResConfig.getPlantUrl("nczjs_txt_sylv1"), lvClip.align = "center", lvClip.sheet = "0123456789LV.", lvClip.spaceX = -3, lvClip.width = 34), lvClip.visible = !0, this.icon.skin = ResConfig_1.ResConfig.getPlantUrl(cfg.pic), this.icon.scaleX = this.icon.scaleY = .85, this.attackGap = cfg.attackGap, this._cfg = cfg, this.checkBianyiAttackGap();
                        var skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji1");
                        switch (cfg.type) {
                            case Constant_1.PlantType.Single:
                                skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji1");
                                break;
                            case Constant_1.PlantType.Range:
                                skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji2");
                                break;
                            case Constant_1.PlantType.Buff:
                                skin = ResConfig_1.ResConfig.getPlantUrl("zwujs_icon_zwdji3")
                        }
                        lvBg.skin = skin, lvClip.value = cfg.level + "";
                        var owner = this.Owner;
                        lvBg.x = owner.x, lvBg.y = owner.y, lvClip.x = owner.x + 8, lvClip.y = owner.y + 16, this.clearBuff()
                    }
                }, BasePlant.prototype.checkBianyiAttackGap = function() {
                    var cfg = Confings_1.default.Instance.getBianyiById(this._bianyiId);
                    cfg && 2 == cfg.type && (this.attackGap *= cfg.atkspeed || 1)
                }, BasePlant.prototype.updateBianyi = function() {
                    var bianyiIcon = this.bianyiIcon;
                    if (this._bianyiId) {
                        var owner = this.Owner;
                        bianyiIcon || (this.bianyiIcon = bianyiIcon = new Laya.Image, bianyiIcon.anchorX = bianyiIcon.anchorY = .5, bianyiIcon.scale(.5, .5)), bianyiIcon.x = owner.x, bianyiIcon.y = owner.y, bianyiIcon.visible = !0, this.Owner.parent.addChild(bianyiIcon);
                        var cfg = Confings_1.default.Instance.getBianyiById(this._bianyiId);
                        if (cfg) {
                            var skin = ResConfig_1.ResConfig.getPlantUrl(cfg.icon);
                            bianyiIcon.skin = skin
                        }
                    } else bianyiIcon && bianyiIcon.removeSelf()
                }, Object.defineProperty(BasePlant.prototype, "attackRange", {
                    get: function() {
                        return this._attactDistance
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BasePlant.prototype, "attackRate", {
                    get: function() {
                        return this._attackRate
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BasePlant.prototype, "level", {
                    get: function() {
                        return this._level
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BasePlant.prototype, "data", {
                    get: function() {
                        return this._cfg
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BasePlant.prototype, "bianyiId", {
                    get: function() {
                        return this._bianyiId
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(BasePlant.prototype, "index", {
                    get: function() {
                        return this._index
                    },
                    set: function(value) {
                        this._index = value
                    },
                    enumerable: !0,
                    configurable: !0
                }), BasePlant.prototype.createOtherBullet = function() {
                    var cfg = Confings_1.default.Instance.getBulletById(this.otherId);
                    if (cfg) {
                        var bullet = BulletFactory_1.default.Instance.create(cfg.type);
                        bullet.initData(cfg, 0, this.index, 0, this._bianyiId), GameControl_1.default.Instance.addBullet(bullet)
                    }
                }, BasePlant.prototype.createBullet = function() {
                    var _this = this,
                        cfg = this._cfg;
                    if (cfg) {
                        var binyiId = this._bianyiId;
                        SoundManager_1.default.Instance.playName(cfg.fireVoice);
                        var col, arr, interval = 0,
                            rotation = 0,
                            count = 1,
                            boshu = 1,
                            _a = cfg,
                            colCount = _a.colCount,
                            channel = _a.channel,
                            ray = _a.ray,
                            shellid = _a.shellid;
                        if (count = col = channel || 1, "0" != colCount && "string" == typeof colCount)(arr = colCount.split(",")) && arr.length > 1 && (boshu = +arr[0], interval = +arr[1]);
                        if ("0" != ray)
                            if ("string" == typeof ray)(arr = ray.split(",")) && arr.length > 1 && (count = +arr[1], rotation = +arr[0]);
                        var bulletCfg = Confings_1.default.Instance.getBulletById(shellid);
                        if (bulletCfg) {
                            for (var offset = count > 1 ? rotation / (count - 1) : 0, min = -rotation >> 1, i = 0; i < boshu; i++) Laya.timer.once(1e3 * interval * i, this, function() {
                                for (var leftIndex = -(col - 1) / 2, index = _this.index, i_1 = 0; i_1 < count; i_1++) {
                                    func(i_1, index, col > 1 ? leftIndex + i_1 : 0)
                                }
                            });
                            return
                        }
                    }

                    function func(i, index, moveIndex) {
                        var bullet = BulletFactory_1.default.Instance.create(bulletCfg.type);
                        bullet.initData(bulletCfg, min + offset * i, index, moveIndex, binyiId), GameControl_1.default.Instance.addBullet(bullet)
                    }
                }, Object.defineProperty(BasePlant.prototype, "stop", {
                    set: function(value) {
                        this._stop = value
                    },
                    enumerable: !0,
                    configurable: !0
                }), BasePlant.prototype.checkAttackRange = function() {
                    if (!this.owner) return !1;
                    for (var monsters = GameControl_1.default.Instance.monsters, colNum = this.index % 5, index = monsters.length - 1; index >= 0; index--) {
                        var monster = monsters[index];
                        if (monster.isBoss && colNum >= monster.path - 1 && colNum <= monster.path + 1 || monster.path == colNum) {
                            var y = this.getGlobleY();
                            if (monster.globleY >= y - this._cfg.range) return !0
                        }
                    }
                }, BasePlant.prototype.getGlobleY = function() {
                    var owner = this.owner;
                    if (!owner || !owner.parent) return 0;
                    var p = Laya.Point.create();
                    return p.x = this.Owner.x, p.y = this.Owner.y, owner.parent.localToGlobal(p), p.y
                }, BasePlant.prototype.onEnable = function() {
                    this.stop = !1
                }, BasePlant.prototype.moveHide = function() {
                    this.lvBg && (this.lvBg.visible = !1), this.lvClip && (this.lvClip.visible = !1), this.bianyiIcon && (this.bianyiIcon.visible = !1)
                }, BasePlant.prototype.buffActive = function(type) {
                    if (this._buffDir) {
                        var buff = this._buffDir[type];
                        return !!buff && buff.active
                    }
                    return !1
                }, BasePlant.prototype.addBuff = function(buff) {
                    if (buff) {
                        this._buffDir || (this._buffDir = {});
                        var curBuff = this._buffDir[buff.type];
                        curBuff ? curBuff.plus(buff) : (this._buffDir[buff.type] = buff, BuffManager_1.default.Instance.addBuff(buff))
                    }
                }, BasePlant.prototype.clearBuff = function() {
                    this.iceEffect && (FramePlayerManager_1.default.Instance.release(this.iceEffect), this.iceEffect = null), this.jiasuEffect && (FramePlayerManager_1.default.Instance.release(this.jiasuEffect), this.jiasuEffect = null), this.Owner.filters = null;
                    var buffDir = this._buffDir;
                    if (buffDir) {
                        for (var type in this._buffDir) BuffManager_1.default.Instance.removeBuff(buffDir[type]);
                        this._buffDir = null
                    }
                }, BasePlant.prototype.buffLogic = function() {
                    if (this._buffDir) {
                        var owner = this.Owner;
                        for (var key in this._buffDir) {
                            var buff = this._buffDir[key];
                            switch (+key) {
                                case Constant_1.BuffType.AttackSpeed:
                                    var eff;
                                    if (this.attackGap = buff.active ? buff.calculate(this._cfg.attackGap) : this._cfg.attackGap, buff.active) {
                                        if (this.attackGap > this._cfg.attackGap) {
                                            if (owner.filters || (owner.filters = ColorFilterTool_1.default.Instance.blue()), !this.iceEffect)(eff = this.iceEffect = FramePlayerManager_1.default.Instance.create("jiansuice")) && (eff.anchorX = eff.anchorY = .5, eff.x = 55, eff.y = 50, Laya.timer.once(1e3, eff, eff.play), owner.addChild(eff))
                                        } else if (!this.jiasuEffect)(eff = this.jiasuEffect = FramePlayerManager_1.default.Instance.create("qianghua")).anchorX = .5, eff.anchorY = .5, eff.x = 60, eff.y = 30, Laya.timer.once(1e3, eff, eff.play), owner.addChild(eff)
                                    } else owner.filters = null, this.iceEffect && (FramePlayerManager_1.default.Instance.release(this.iceEffect), this.iceEffect = null), this.jiasuEffect && (FramePlayerManager_1.default.Instance.release(this.jiasuEffect), this.jiasuEffect = null)
                            }
                        }
                    }
                }, BasePlant.prototype.updateLogic = function(dt) {
                    this.attackCD += dt, this.buffLogic();
                    var attackGap = 1e3 * this.attackGap,
                        skillbuff = Confings_1.default.Instance.getSkillById(Constant_1.SkillType.AtkSpeedUp);
                    if (GameData_1.default.Instance.getSkillState(skillbuff.id) && (attackGap *= 1 - skillbuff.value), this.attackCD > attackGap && !this._stop && this.owner && this.owner.parent && this.checkAttackRange()) {
                        if (this.attackCD = 0, this.otherInterval > 0)
                            if (this.attackTimes == this.otherInterval) this.attackTimes = 0, Confings_1.default.Instance.getBulletById(this.otherId) ? Laya.timer.once(120, this, this.createOtherBullet) : Laya.timer.once(120, this, this.createBullet);
                            else Laya.timer.once(120, this, this.createBullet), this.attackTimes++;
                        else Laya.timer.once(120, this, this.createBullet);
                        this.icon.scaleY = .8, Laya.Tween.clearAll(this.icon), Laya.Tween.to(this.icon, {
                            scaleY: .6
                        }, 120), Laya.Tween.to(this.icon, {
                            scaleY: .8
                        }, 120, null, null, 120)
                    }
                    if (GameData_1.default.Instance.turnRelifeCount > 0 || GameData_1.default.Instance.getSkillState(Constant_1.SkillType.AtkSpeedUp)) {
                        if (!this.qianghuaEff) {
                            var frameplayer = this.qianghuaEff = FramePlayerManager_1.default.Instance.create("qianghua");
                            frameplayer.anchorY = .5, frameplayer.x = frameplayer.y = 0, this.Owner.addChild(frameplayer), frameplayer.play(-1)
                        }
                    } else this.qianghuaEff && (FramePlayerManager_1.default.Instance.release(this.qianghuaEff), this.qianghuaEff = null)
                }, BasePlant.prototype.recover = function() {
                    this.qianghuaEff && (FramePlayerManager_1.default.Instance.release(this.qianghuaEff), this.qianghuaEff = null), this.lvBg && (this.lvBg.visible = !1), this.lvClip && (this.lvClip.visible = !1), this.clearBuff()
                }, BasePlant.prototype.onDestroy = function() {
                    this.stop = !0
                }, BasePlant
            }(Laya.Script);
        exports.default = BasePlant
    }, {
        "../../../wxSDK/SoundManager": 111,
        "../../core/ColorFilterTool": 5,
        "../../core/Constant": 6,
        "../../core/ResConfig": 11,
        "../../data/Confings": 23,
        "../../data/GameData": 24,
        "../GameControl": 56,
        "../buttle/BulletFactory": 68,
        "../manager/BuffManager": 75,
        "../manager/FramePlayerManager": 76
    }],
    91: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BuffAttPlant = function(_super) {
            function BuffAttPlant() {
                return _super.call(this) || this
            }
            return __extends(BuffAttPlant, _super), BuffAttPlant.prototype.createBullet = function() {
                _super.prototype.createBullet.call(this)
            }, BuffAttPlant
        }(require("./BasePlant").default);
        exports.default = BuffAttPlant
    }, {
        "./BasePlant": 90
    }],
    92: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var SingleAttPlant_1 = require("./SingleAttPlant"),
            RangeAttPlant_1 = require("./RangeAttPlant"),
            BuffAttPlant_1 = require("./BuffAttPlant"),
            Constant_1 = require("../../core/Constant"),
            PlantFactory = function() {
                function PlantFactory() {}
                return Object.defineProperty(PlantFactory, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new PlantFactory), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), PlantFactory.prototype.create = function(type, prefab) {
                    var plant, box = Laya.Pool.getItemByCreateFun("plant_" + type, prefab.create, prefab);
                    switch (type) {
                        case Constant_1.PlantType.Single:
                            plant = box.addComponent(SingleAttPlant_1.default);
                            break;
                        case Constant_1.PlantType.Range:
                            plant = box.addComponent(RangeAttPlant_1.default);
                            break;
                        case Constant_1.PlantType.Buff:
                            plant = box.addComponent(BuffAttPlant_1.default)
                    }
                    return plant
                }, PlantFactory.prototype.destory = function(type, item) {
                    Laya.Pool.recover("plant_" + type, item.owner), item.recover(), item.destroy()
                }, PlantFactory
            }();
        exports.default = PlantFactory
    }, {
        "../../core/Constant": 6,
        "./BuffAttPlant": 91,
        "./RangeAttPlant": 93,
        "./SingleAttPlant": 94
    }],
    93: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var RangeAttPlant = function(_super) {
            function RangeAttPlant() {
                return _super.call(this) || this
            }
            return __extends(RangeAttPlant, _super), RangeAttPlant.prototype.createBullet = function() {
                _super.prototype.createBullet.call(this)
            }, RangeAttPlant
        }(require("./BasePlant").default);
        exports.default = RangeAttPlant
    }, {
        "./BasePlant": 90
    }],
    94: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var SingleAttPlant = function(_super) {
            function SingleAttPlant() {
                return _super.call(this) || this
            }
            return __extends(SingleAttPlant, _super), SingleAttPlant.prototype.createBullet = function() {
                _super.prototype.createBullet.call(this)
            }, SingleAttPlant
        }(require("./BasePlant").default);
        exports.default = SingleAttPlant
    }, {
        "./BasePlant": 90
    }],
    95: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var GameData_1 = require("../data/GameData"),
            MessageCenter_1 = require("../core/MessageCenter"),
            String_1 = require("../core/basic/String"),
            StartScene_1 = require("../scene/StartScene"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            Confings_1 = require("../data/Confings"),
            AwardView = function(_super) {
                function AwardView() {
                    var _this = _super.call(this) || this;
                    return _this.time = 0, AwardView._instance = _this, _this
                }
                return __extends(AwardView, _super), Object.defineProperty(AwardView, "Instance", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), AwardView.prototype.initData = function() {
                    this.curr = 0, this.offlineTime = 0, this.onlineTime = 0, this.guangImg.visible = !1, this.isTweening = !1, StartScene_1.default.Instance.award.stop(), this.bar.scaleY = 0, this.lastAwardTime = 0, this.goldTxt.text = "0";
                    var sunEff = StartScene_1.default.Instance.sunEff;
                    sunEff.ani1.stop(), sunEff.visible = !1
                }, AwardView.prototype.onEnable = function() {
                    var _this = this;
                    this.goldTxt = this.getChildByName("goldTxt"), this.bar = this.getChildByName("bar"), this.guangImg = this.getChildByName("guangImg"), this.goldHongdian = this.getChildByName("goldHongdian"), this.initData(), this.offlineTime = GameData_1.default.Instance.offlineTime || 0, this.lastAwardTime = GameData_1.default.Instance.lastAwardTime || 0, MessageCenter_1.MessageCenter.Instance.addListener("award_get_succ", this.initData, this), this.on(Laya.Event.CLICK, this, function() {
                        LayerRoot_1.default.Instance.openScene("dialog/Award.scene", !1, [_this.curr])
                    }), this.updateData()
                }, Object.defineProperty(AwardView.prototype, "gold", {
                    get: function() {
                        return this.curr
                    },
                    enumerable: !0,
                    configurable: !0
                }), AwardView.prototype.updateLogic = function(dt) {
                    this.onlineTime += dt, this.time += dt, this.time < 2e3 || this.updateData()
                }, AwardView.prototype.updateData = function() {
                    GameData_1.default.Instance.lastAwardTime = this.lastAwardTime + this.onlineTime;
                    var allTime = GameData_1.default.Instance.lastAwardTime;
                    this.time = 0;
                    var cfgs = Confings_1.default.Instance.getGuankaTurns(GameData_1.default.Instance.guanka + 1),
                        add = 0;
                    cfgs && cfgs.length > 0 && (add = cfgs[0].timeMoney || 0, add /= 2);
                    var max = add * AwardView.MaxTime / 1e3,
                        curr = this.curr = add * allTime / 1e3;
                    curr = curr > max ? max : curr, this.curr = curr;
                    var gold = new Decimal(curr);
                    this.goldTxt.text = String_1.StringUtil.decimalFormat(gold), this.bar.scaleY = curr / max, curr >= max && !this.isTweening && this.showTween();
                    StartScene_1.default.Instance.sunEff;
                    if (allTime < AwardView.MaxTime) {
                        this.goldHongdian.visible = allTime > 3e5;
                        var label = Laya.Pool.getItemByClass("label", Laya.Label);
                        label.text = "+" + String_1.StringUtil.decimalFormat(new Decimal(2 * add)), label.width = 100, label.align = "center", label.pos(0, 0), label.color = "#fff", label.font = "Arial", label.fontSize = 30, label.stroke = 2, label.strokeColor = "#000", this.addChild(label), Laya.Tween.to(label, {
                            y: -50
                        }, 500, null, Laya.Handler.create(label, function(t) {
                            t.removeSelf(), Laya.Pool.recover("label", t)
                        }, [label]))
                    }
                }, AwardView.prototype.showTween = function() {
                    this.isTweening = !0, this.guangImg.visible = !0, StartScene_1.default.Instance.award.play()
                }, AwardView.MaxTime = 18e5, AwardView
            }(Laya.Box);
        exports.default = AwardView
    }, {
        "../core/MessageCenter": 10,
        "../core/basic/String": 14,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../scene/LayerRoot": 52,
        "../scene/StartScene": 54
    }],
    96: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var SoundManager_1 = require("../../wxSDK/SoundManager"),
            BossJingBaoView = function(_super) {
                function BossJingBaoView() {
                    var _this = _super.call(this) || this;
                    return _this.visible = !1, BossJingBaoView._instance = _this, _this
                }
                return __extends(BossJingBaoView, _super), Object.defineProperty(BossJingBaoView, "Instance", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), BossJingBaoView.prototype.show = function(handler) {
                    var _this = this;
                    this.ani1.once(Laya.Event.COMPLETE, this, function() {
                        handler.run(), handler.clear(), _this.hide()
                    }), this.visible = !0, this.ani0.play(0, !0), this.ani1.play(0, !1), SoundManager_1.default.Instance.playWarning()
                }, BossJingBaoView.prototype.hide = function() {
                    this.visible = !1
                }, BossJingBaoView.prototype.onEnable = function() {
                    this.ani0 = this.parent.parent.BossJingBao0, this.ani1 = this.parent.parent.BossJingBao1
                }, BossJingBaoView
            }(Laya.Box);
        exports.default = BossJingBaoView
    }, {
        "../../wxSDK/SoundManager": 111
    }],
    97: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var FramePlayerManager_1 = require("../script/manager/FramePlayerManager"),
            EffectView = function(_super) {
                function EffectView() {
                    var _this = _super.call(this) || this;
                    return EffectView._instance = _this, _this
                }
                return __extends(EffectView, _super), Object.defineProperty(EffectView, "Instance", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), EffectView.prototype.addEffect = function(eff, x, y, anchorX, anchorY) {
                    void 0 === anchorX && (anchorX = .5), void 0 === anchorY && (anchorY = .5), eff && (eff.x = x, eff.y = y, eff.anchorX = anchorX, eff.anchorY = anchorY, eff.play(1), eff.onceCallBack = function(e) {
                        FramePlayerManager_1.default.Instance.release(e)
                    }, this.addChild(eff))
                }, EffectView.prototype.onDestroy = function() {}, EffectView
            }(Laya.Box);
        exports.default = EffectView
    }, {
        "../script/manager/FramePlayerManager": 76
    }],
    98: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var GoldMonsterTipView = function(_super) {
            function GoldMonsterTipView() {
                var _this = _super.call(this) || this;
                return GoldMonsterTipView._instance = _this, _this.visible = !1, _this
            }
            return __extends(GoldMonsterTipView, _super), Object.defineProperty(GoldMonsterTipView, "Instance", {
                get: function() {
                    return this._instance
                },
                enumerable: !0,
                configurable: !0
            }), GoldMonsterTipView.prototype.show = function(handler) {
                this.handler = handler, this.initPos(), this.visible = !0, this.alpha = 1;
                for (var txtArr = this.txtArr, len = txtArr.length, _loop_1 = function(i) {
                        var txt = txtArr[i];
                        Laya.Tween.to(txt, {
                            centerY: -30
                        }, 200, null, Laya.Handler.create(this_1, function() {
                            Laya.Tween.to(txt, {
                                centerY: 0
                            }, 250, null, null, 20)
                        }), 250 * i)
                    }, this_1 = this, i = 0; i < len; i++) _loop_1(i);
                Laya.Tween.to(this, {
                    alpha: 0
                }, 200, null, Laya.Handler.create(this, this.hide), 400 * len)
            }, GoldMonsterTipView.prototype.hide = function() {
                this.visible = !1;
                var handler = this.handler;
                handler && (handler.run(), handler.clear())
            }, GoldMonsterTipView.prototype.initPos = function() {
                var txtArr = this.txtArr;
                for (var key in txtArr) {
                    txtArr[key].centerY = 0
                }
            }, GoldMonsterTipView.prototype.onEnable = function() {
                for (var txtArr = this.txtArr = [], i = 0; i < 10; i++) {
                    var txt = this.getChildByName("txt" + i);
                    txtArr.push(txt)
                }
            }, GoldMonsterTipView
        }(Laya.Box);
        exports.default = GoldMonsterTipView
    }, {}],
    99: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var MessageCenter_1 = require("../core/MessageCenter"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            GameData_1 = require("../data/GameData"),
            ButtonClick_1 = require("../script/ButtonClick"),
            Confings_1 = require("../data/Confings"),
            ResConfig_1 = require("../core/ResConfig"),
            GroundView = function(_super) {
                function GroundView() {
                    var _this = _super.call(this) || this;
                    return GroundView._instance = _this, Laya.timer.once(200, _this, function() {
                        GameData_1.default.Instance.groundRect = new Laya.Rectangle(_this.x, _this.y, _this.width, _this.height)
                    }), _this
                }
                return __extends(GroundView, _super), Object.defineProperty(GroundView, "Instance", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), GroundView.prototype.recover = function() {
                    this.currHp = this.maxHp, this.isBusying = !1, this.isGameOver = !1, this.updateHp()
                }, GroundView.prototype.updateHp = function() {
                    this.currHp = this.currHp >= 0 ? this.currHp : 0, this.hpTxt.text = this.currHp + "/" + this.maxHp;
                    var scale = this.currHp / this.maxHp;
                    this.hpBar.scaleX = scale > 1 ? 1 : scale
                }, GroundView.prototype.updateUseZhaLan = function() {
                    GameData_1.default.Instance.userData;
                    var useZhaLanId = GameData_1.default.Instance.useZhaLanId,
                        cfg = Confings_1.default.Instance.getZhaLanById(useZhaLanId);
                    cfg && (this.maxHp = cfg.hp || 4, null == this.currHp && (this.currHp = this.maxHp), this.groundImg.skin = ResConfig_1.ResConfig.getMainUrl(cfg.pic), this.zhaopaiImg.skin = ResConfig_1.ResConfig.getMainUrl(cfg.zhaopai)), this.updateHp()
                }, GroundView.prototype.checkOpen = function() {
                    GameData_1.default.Instance.checkZhaLanOpen() ? (this.upgradeImg.visible = !0, this.hpCon.mouseEnabled = !0) : (this.upgradeImg.visible = !1, this.hpCon.mouseEnabled = !1)
                }, GroundView.prototype.showZhaLanEff = function() {
                    var guanka = GameData_1.default.Instance.currGuanka,
                        openGuanka = GameData_1.default.Instance.zhaLanHpOpenGuanka;
                    if (guanka < openGuanka) this.hpCon.visible = !1;
                    else if (guanka == openGuanka) {
                        var hpCon_1 = this.hpCon;
                        hpCon_1.visible = !0, hpCon_1.scaleY = 0, Laya.Tween.to(hpCon_1, {
                            scaleY: 1.3
                        }, 350, null, Laya.Handler.create(this, function() {
                            Laya.Tween.to(hpCon_1, {
                                scaleY: 1
                            }, 100)
                        }))
                    } else this.hpCon.visible = !0
                }, GroundView.prototype.onEnable = function() {
                    var _this = this,
                        groundImg = this.groundImg = this.getChildByName("groundImg"),
                        hpCon = this.hpCon = this.getChildByName("hpCon");
                    this.upgradeImg = hpCon.getChildByName("upgradeImg"), this.zhaopaiImg = hpCon.getChildByName("zhaopaiImg"), hpCon.getComponent(ButtonClick_1.default).setCallBack(function() {
                        LayerRoot_1.default.Instance.openScene("dialog/ZhaLanSelect.scene", !1)
                    }, this), this.hpBar = hpCon.getChildByName("hpBar"), this.hpTxt = hpCon.getChildByName("hpTxt"), this.updateUseZhaLan(), this.checkOpen(), this.showZhaLanEff(), MessageCenter_1.MessageCenter.Instance.addListener("monster_init_complete", function() {
                        _this.showZhaLanEff()
                    }, this), MessageCenter_1.MessageCenter.Instance.addListener("guanka_update", function() {
                        _this.checkOpen()
                    }, this), MessageCenter_1.MessageCenter.Instance.addListener("zhalan_use_update", function() {
                        _this.updateUseZhaLan()
                    }, this), MessageCenter_1.MessageCenter.Instance.addListener("groud_hp_update", function() {
                        if (_this.isGameOver);
                        else {
                            if (GameData_1.default.Instance.currGuanka >= GameData_1.default.Instance.zhaLanHpOpenGuanka && (_this.currHp--, _this.updateHp()), _this.currHp <= 0) return _this.isGameOver = !0, console.log("game over!!!"), void MessageCenter_1.MessageCenter.Instance.dispatch("game_over");
                            _this.isBusying || (_this.isBusying = !0, groundImg.filters = [(new Laya.ColorFilter).setColor("#fb341a")], groundImg.alpha = .7, Laya.timer.once(200, _this, function() {
                                groundImg.filters = null, groundImg.alpha = 1, _this.isBusying = !1
                            }));
                            var timeout, allTimes = 2,
                                leftTimes = 0,
                                rightTimes = 0,
                                startRotation = 5;
                            ! function() {
                                Laya.Tween.clearTween(hpCon), leftTimes = 0, rightTimes = 0, clearTimeout(timeout), Laya.Tween.to(hpCon, {
                                    rotation: startRotation
                                }, 100, Laya.Ease.sineOut, Laya.Handler.create(this, tweenRight))
                            }()
                        }

                        function tweenLeft() {
                            var speed = (allTimes - leftTimes) / allTimes;
                            leftTimes < allTimes && (Laya.Tween.to(hpCon, {
                                rotation: startRotation * speed
                            }, 100 * speed, Laya.Ease.sineOut, Laya.Handler.create(this, tweenRight)), leftTimes++)
                        }

                        function tweenRight() {
                            var speed = (allTimes - rightTimes) / allTimes;
                            rightTimes <= allTimes && (Laya.Tween.to(hpCon, {
                                rotation: -startRotation * speed
                            }, 100 * speed, Laya.Ease.sineOut, Laya.Handler.create(this, tweenLeft)), rightTimes++)
                        }
                    }, this)
                }, GroundView
            }(Laya.Box);
        exports.default = GroundView
    }, {
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../scene/LayerRoot": 52,
        "../script/ButtonClick": 55
    }],
    100: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            GameData_1 = require("../data/GameData"),
            StartScene_1 = require("../scene/StartScene"),
            GuideView = function(_super) {
                function GuideView() {
                    var _this = _super.call(this) || this;
                    return _this.guideContainer = null, _this.isGuide = !0, _this
                }
                return __extends(GuideView, _super), Object.defineProperty(GuideView, "Instance", {
                    get: function() {
                        return null == GuideView._instance && (GuideView._instance = new GuideView), GuideView._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), GuideView.prototype.onEnable = function() {
                    this.closeBtn.getComponent(ButtonClick_1.default).setCallBack(this.tiaoguoGuide, this)
                }, GuideView.prototype.init = function() {
                    if (null == this.guideContainer) {
                        this.width = Laya.stage.width, this.height = Laya.stage.height, this.guideContainer = new Laya.Sprite, this.guideContainer.cacheAs = "bitmap";
                        var maskArea = new Laya.Sprite;
                        maskArea.alpha = .5, maskArea.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), this.guideContainer.addChild(maskArea), this.interactionArea = new Laya.Sprite, this.interactionArea.blendMode = "destination-out", this.guideContainer.addChild(this.interactionArea);
                        var hitArea = new Laya.HitArea;
                        hitArea.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), this.guideContainer.hitArea = hitArea, this.guideContainer.mouseEnabled = !0, this.guideContainer.addChild(this)
                    }
                }, GuideView.prototype.onClick = function(e) {
                    this.x, this.y;
                    var target = this.target,
                        targetPos = this.targetPos;
                    if (target) {
                        var stageX = e.stageX,
                            stageY = e.stageY,
                            w = target.width / 2,
                            h = 1 == target.anchorY ? target.height : target.height / 2;
                        stageX > targetPos.x - w && stageX < targetPos.x + w && stageY > targetPos.y - h && stageY < targetPos.y + h && this.doStep()
                    }
                }, GuideView.prototype.showGuide = function(id, step, handler) {
                    this.id = id, this.maxStep = step, this.currStep = 0, this.handler = handler, this.guideContainer || this.init(), this.doStep()
                }, GuideView.prototype.doStep = function() {
                    var _this = this;
                    this.currStep++, this.currStep > this.maxStep ? this.hideGuide() : Laya.timer.once(200, this, function() {
                        var target, pos, w, h, msg = "",
                            key = _this.id + "_" + _this.currStep;
                        switch (_this.hideAll(), _this.msgBox.centerY = 0, key) {
                            case "1_1":
                                GameData_1.default.Instance.createToday && DDSDK.logEvent("newzhiyin1", {}), msg = "Đợt Zombie lớn đang tấn công, \nhãy mua vũ khí để hạ chúng", _this.guide1_0.visible = !0, target = _this.target = StartScene_1.default.Instance.buyBtn1, (pos = _this.targetPos = Laya.Point.create()).x = target.x, pos.y = target.y, target.parent.localToGlobal(pos), _this.targetPos = pos, _this.guide1_0.pos(pos.x, pos.y), w = target.width, h = target.height, _this.drawHitArea(pos, pos.x - w / 2, pos.y - h / 2, w, h);
                                break;
                            case "1_2":
                                GameData_1.default.Instance.createToday && DDSDK.logEvent("newzhiyin3", {}), msg = "2 cây giống nhau sẽ kết hợp\nthành 1 cây cấp cao hơn", _this.ani2.play(), _this.guide1_1.visible = !0, target = _this.target = StartScene_1.default.Instance.pos_1, (pos = _this.targetPos = Laya.Point.create()).x = target.x, pos.y = target.y, target.parent.localToGlobal(pos), _this.targetPos = pos, w = 120, h = 120, _this.guide1_1.pos(pos.x, pos.y - h / 2), _this.drawHitArea(pos, pos.x - w / 2, pos.y - h / 2, 2 * w, h);
                                break;
                            case "2_1":
                                msg = "Dùng mẹo có thể kiếm được nhiều xu vàng", _this.guide1_0.visible = !0, target = _this.target = StartScene_1.default.Instance.zhanpanBtn, (pos = _this.targetPos = Laya.Point.create()).x = target.x, pos.y = target.y, target.parent.localToGlobal(pos), _this.targetPos = pos, _this.guide1_0.pos(pos.x, pos.y), w = target.width, h = target.height, _this.drawHitArea(pos, pos.x - w / 2, pos.y - h / 2, w, h);
                                break;
                            case "3_1":
                                _this.msgBox.centerY = -200, msg = "Mời bạn bè tham gia để nhận Buff", _this.guide1_0.visible = !0, target = _this.target = StartScene_1.default.Instance.inviteNewBtn, (pos = _this.targetPos = Laya.Point.create()).x = target.x, pos.y = target.y, target.parent.localToGlobal(pos), _this.targetPos = pos, _this.guide1_0.pos(pos.x, pos.y), w = target.width, h = target.height, _this.drawHitArea(pos, pos.x - w / 2, pos.y - h / 2, w, h);
                                break;
                            case "4_1":
                                _this.msgBox.centerY = -200, msg = "Nâng cấp hàng rào để phòng thủ tốt hơn", _this.guide1_0.visible = !0, target = _this.target = StartScene_1.default.Instance.hpCon, (pos = _this.targetPos = Laya.Point.create()).x = target.x, pos.y = target.y, target.parent.localToGlobal(pos), _this.targetPos = pos, _this.guide1_0.pos(pos.x, pos.y), w = target.width, h = target.height, _this.drawHitArea(pos, pos.x - w / 2, pos.y - h, w, h)
                        }
                        msg && msg.length > 0 ? (_this.msgTxt.text = msg, _this.msgBox.visible = !0) : (_this.msgTxt.text = "", _this.msgBox.visible = !1), LayerRoot_1.default.Instance.addToGuideLayer(_this.guideContainer), Laya.stage.on(Laya.Event.CLICK, _this, _this.onClick)
                    })
                }, GuideView.prototype.drawHitArea = function(pos, x, y, w, h) {
                    this.guideContainer.hitArea.unHit.clear(), this.guideContainer.hitArea.unHit.drawRect(x, y, w, h, "#000000"), this.interactionArea.graphics.clear(), this.interactionArea.graphics.drawRect(x, y, w, h, "#000000")
                }, GuideView.prototype.tiaoguoGuide = function() {
                    this.hideGuide(), DDSDK.logEvent("outzhiyin", {})
                }, GuideView.prototype.hideGuide = function() {
                    this.hideAll(), this.id && GameData_1.default.Instance.guideIds.push(this.id), this.guideContainer && this.guideContainer.removeSelf(), Laya.stage.off(Laya.Event.CLICK, this, this.onClick), this.handler && (this.handler.run(), this.handler.clear(), this.handler = null)
                }, GuideView.prototype.hideAll = function() {
                    this.guide1_0.visible = !1, this.guide1_1.visible = !1
                }, GuideView.prototype.checkGuideId = function(id) {
                    if (this.isGuide) return -1 == GameData_1.default.Instance.guideIds.indexOf(id)
                }, GuideView
            }(layaMaxUI_1.ui.view.GuideViewUI);
        exports.default = GuideView
    }, {
        "../../ui/layaMaxUI": 107,
        "../data/GameData": 24,
        "../scene/LayerRoot": 52,
        "../scene/StartScene": 54,
        "../script/ButtonClick": 55
    }],
    101: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ButtonClick_1 = require("../script/ButtonClick"),
            Settings_1 = require("../core/framework/Settings"),
            AudioManager_1 = require("../../wxSDK/AudioManager"),
            ResConfig_1 = require("../core/ResConfig"),
            GameData_1 = require("../data/GameData"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            Confings_1 = require("../data/Confings"),
            MessageCenter_1 = require("../core/MessageCenter"),
            LeftView = function(_super) {
                function LeftView() {
                    var _this = _super.call(this) || this;
                    return _this._isShow = !1, LeftView._instance = _this, _this
                }
                return __extends(LeftView, _super), Object.defineProperty(LeftView, "Instance", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), LeftView.prototype.showOrHide = function() {
                    var _this = this;
                    if (!this._isShowing) {
                        var endX = this._startX;
                        this._isShow || (endX = 0), this._isShow = !this._isShow, Laya.Tween.to(this, {
                            x: endX
                        }, 200, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                            _this._isShowing = !1, _this.arrowImg.scaleX = _this._isShow ? -1 : 1
                        }))
                    }
                }, LeftView.prototype.onSound = function() {
                    var isMusicMuted = this.isMusicMuted;
                    this.isMusicMuted = !isMusicMuted, this.checkAudio()
                }, LeftView.prototype.checkAudio = function() {
                    var isMusicMuted = this.isMusicMuted;
                    AudioManager_1.AudioManager.Instance.muteAudio = isMusicMuted, this.soundBtn.skin = isMusicMuted ? ResConfig_1.ResConfig.getMainUrl("zwujs_icon_ceb3") : ResConfig_1.ResConfig.getMainUrl("zwujs_icon_ceb2")
                }, LeftView.prototype.updateOpenId = function() {
                    this.getChildByName("openId").text = GameData_1.default.Instance.uid + "" || "000000"
                }, LeftView.prototype.checkMainHongDian = function() {
                    this.hongdianImg.visible = this.checkTujianHongDian()
                }, LeftView.prototype.checkTujianHongDian = function() {
                    var boo = this.canGetTujianAward();
                    return this.tujianHongdianImg.visible = !!boo, boo
                }, LeftView.prototype.canGetTujianAward = function() {
                    var cfgs = Confings_1.default.Instance.tuJianCfg;
                    for (var key in cfgs) {
                        var cfg = cfgs[key],
                            canGetAward = GameData_1.default.Instance.checkTujianAward(cfg.id),
                            monsterCfg = Confings_1.default.Instance.getMonsterById(cfg.monsterid),
                            unlock = !1;
                        if (monsterCfg && (unlock = GameData_1.default.Instance.checkTujianUnlock(monsterCfg.id)), canGetAward && unlock) return !0
                    }
                }, LeftView.prototype.onEnable = function() {
                    var bg = this.getChildByName("bg");
                    this.x = this._startX = -bg.width, this.updateOpenId(), this.hongdianImg = this.getChildByName("hongdianImg"), this.getChildByName("showOrHideBtn").on(Laya.Event.CLICK, this, this.showOrHide), this.arrowImg = this.getChildByName("arrowImg"), this.arrowImg.scaleX = 1;
                    var myBtn = this.getChildByName("kefuBtn").getComponent(ButtonClick_1.default);
                    myBtn.setCallBack(function() {}, this), (myBtn = (this.soundBtn = this.getChildByName("soundBtn")).getComponent(ButtonClick_1.default)).setCallBack(this.onSound, this), (myBtn = this.getChildByName("playTipsBtn").getComponent(ButtonClick_1.default)).setCallBack(function() {
                        LayerRoot_1.default.Instance.openScene("dialog/PlayTips.scene", !1)
                    }, this), (myBtn = this.getChildByName("rankBtn").getComponent(ButtonClick_1.default)).setCallBack(function() {
                        LayerRoot_1.default.Instance.openScene("dialog/Rank.scene", !1)
                    }, this), (myBtn = this.getChildByName("tujianBtn").getComponent(ButtonClick_1.default)).setCallBack(function() {
                        LayerRoot_1.default.Instance.openScene("dialog/MonsterList.scene", !1)
                    }, this), this.tujianHongdianImg = this.getChildByName("tujianHongdianImg"), this.isMusicMuted = Settings_1.Settings.Instance.getSetting("music_mute"), this.checkAudio(), this.checkMainHongDian(), MessageCenter_1.MessageCenter.Instance.addListener("monster_new_tujian", this.checkMainHongDian, this), MessageCenter_1.MessageCenter.Instance.addListener("get_tujain_award_succ", this.checkMainHongDian, this)
                }, LeftView
            }(Laya.Box);
        exports.default = LeftView
    }, {
        "../../wxSDK/AudioManager": 108,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../core/framework/Settings": 16,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../scene/LayerRoot": 52,
        "../script/ButtonClick": 55
    }],
    102: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var MathEx_1 = require("../core/MathEx"),
            ResConfig_1 = require("../core/ResConfig"),
            MonsterView = function(_super) {
                function MonsterView() {
                    var _this = _super.call(this) || this;
                    return _this._createSmokeTime = 0, MonsterView._instance = _this, _this.cloudBox = _this.addChild(new Laya.Box), _this
                }
                return __extends(MonsterView, _super), Object.defineProperty(MonsterView, "Instance", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), MonsterView.prototype.addItem = function(monster, cfg, path) {
                    null == path && (path = Math.floor(5 * Math.random())), monster.initData(cfg, path);
                    var owner = monster.owner;
                    this.addChild(owner)
                }, MonsterView.prototype.updateLogic = function(dt) {
                    if (this._createSmokeTime -= dt, this._createSmokeTime < 0) {
                        this._createSmokeTime = MathEx_1.default.Inst.randomInt(800, 1200);
                        var cloud_1 = Laya.Pool.getItemByClass("cloudImage1", Laya.Image);
                        cloud_1.anchorX = cloud_1.anchorY = 1, cloud_1.x = 0, cloud_1.y = MathEx_1.default.Inst.randomInt(-150, 70), cloud_1.skin = ResConfig_1.ResConfig.getMainUrl("maincloud1"), this.cloudBox.addChild(cloud_1), Laya.Tween.to(cloud_1, {
                            x: Laya.stage.width + 543
                        }, MathEx_1.default.Inst.randomInt(8e3, 12e3), null, Laya.Handler.create(cloud_1, function() {
                            cloud_1.removeSelf(), Laya.Pool.recover("cloudImage1", cloud_1)
                        }))
                    }
                }, MonsterView.prototype.onDestroy = function() {}, MonsterView
            }(Laya.Box);
        exports.default = MonsterView
    }, {
        "../core/MathEx": 9,
        "../core/ResConfig": 11
    }],
    103: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var NewGuankaView = function(_super) {
            function NewGuankaView() {
                var _this = _super.call(this) || this;
                return NewGuankaView._instance = _this, _this.visible = !1, _this
            }
            return __extends(NewGuankaView, _super), Object.defineProperty(NewGuankaView, "Instance", {
                get: function() {
                    return this._instance
                },
                enumerable: !0,
                configurable: !0
            }), NewGuankaView.prototype.show = function(guanka, handler) {
                var _this = this;
                this.alpha = 1, this.guanka.value = guanka + "";
                var tweenCon = this.tweenCon;
                tweenCon.x = Laya.stage.width, this.visible = !0, Laya.Tween.to(tweenCon, {
                    x: this.stopX
                }, 700), Laya.Tween.to(tweenCon, {
                    x: -300
                }, 700, null, Laya.Handler.create(this, function() {
                    _this.hide(), handler.run(), handler.clear()
                }), 1200), Laya.Tween.to(this, {
                    alpha: 0
                }, 200, null, null, 1700)
            }, NewGuankaView.prototype.hide = function() {
                this.visible = !1
            }, NewGuankaView.prototype.onEnable = function() {
                var tweenCon = this.tweenCon = this.getChildByName("tweenCon");
                tweenCon.x = Laya.stage.width, this.stopX = Laya.stage.width / 2, this.guanka = tweenCon.getChildByName("fontClip")
            }, NewGuankaView
        }(Laya.Box);
        exports.default = NewGuankaView
    }, {}],
    104: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var layaMaxUI_1 = require("../../ui/layaMaxUI"),
            ButtonClick_1 = require("../script/ButtonClick"),
            GameData_1 = require("../data/GameData"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            GameControl_1 = require("../script/GameControl"),
            PlantBoxView = function(_super) {
                function PlantBoxView() {
                    return null !== _super && _super.apply(this, arguments) || this
                }
                return __extends(PlantBoxView, _super), Object.defineProperty(PlantBoxView.prototype, "index", {
                    set: function(i) {
                        this._index = i
                    },
                    enumerable: !0,
                    configurable: !0
                }), PlantBoxView.prototype.onEnable = function() {
                    this.action(), this.plantBox.getComponent(ButtonClick_1.default).setCallBack(this.onBtnClick, this), this.plantBox.scaleX = this.plantBox.scaleY = 0, Laya.Tween.to(this.plantBox, {
                        scaleX: 1,
                        scaleY: 1
                    }, 300, Laya.Ease.backOut), DDSDK.logEvent("xingyunbox", {})
                }, PlantBoxView.prototype.onBtnClick = function() {
                    this.removeSelf(), Laya.Pool.recover("plantBoxView", this), GameData_1.default.Instance.slotPlants[this._index].id = 0, console.log("弹出获得植物展示界面"), GameControl_1.default.Instance.pauseGame(), LayerRoot_1.default.Instance.openScene("dialog/LuckyPlantBox.scene", !1, [this._index])
                }, PlantBoxView.prototype.onOpened = function() {}, PlantBoxView.prototype.action = function() {
                    this.wenhao.play(0, !1), Laya.timer.once(3e3, this, this.action)
                }, PlantBoxView.prototype.onDisable = function() {
                    Laya.timer.clear(this, this.action)
                }, PlantBoxView
            }(layaMaxUI_1.ui.view.PlantBoxUI);
        exports.default = PlantBoxView
    }, {
        "../../ui/layaMaxUI": 107,
        "../data/GameData": 24,
        "../scene/LayerRoot": 52,
        "../script/ButtonClick": 55,
        "../script/GameControl": 56
    }],
    105: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BasePlant_1 = require("../script/plant/BasePlant"),
            GameControl_1 = require("../script/GameControl"),
            Confings_1 = require("../data/Confings"),
            GameData_1 = require("../data/GameData"),
            ImgAni_1 = require("../imgAni/ImgAni"),
            String_1 = require("../core/basic/String"),
            MessageCenter_1 = require("../core/MessageCenter"),
            MathEx_1 = require("../core/MathEx"),
            CoreFunction_1 = require("../core/CoreFunction"),
            ResConfig_1 = require("../core/ResConfig"),
            Constant_1 = require("../core/Constant"),
            LayerRoot_1 = require("../scene/LayerRoot"),
            PlantView = function(_super) {
                function PlantView() {
                    var _this = _super.call(this) || this;
                    return _this.bgImgs = [], _this.pointItem = [], _this.globlePointArr = [], _this.pointArr = [], _this.rowMinY = 9999, _this.hechengEff = new ImgAni_1.default("hecheng/car2Shinning02_", 6, 100), _this.hechengEff.visible = !1, _this.hechengEff.scale(4, 4), _this.addChild(_this.hechengEff), PlantView._instance = _this, _this
                }
                return __extends(PlantView, _super), Object.defineProperty(PlantView.prototype, "isMoving", {
                    get: function() {
                        return this._isMoving
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(PlantView.prototype, "RowMinY", {
                    get: function() {
                        return this.rowMinY
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(PlantView, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new PlantView), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), PlantView.prototype.checkCanHecheng = function(plant) {
                    var id = plant ? plant.data.id : void 0,
                        plants = GameData_1.default.Instance.slotPlants;
                    for (var key in plants) {
                        var vo = plants[key],
                            eff = this.getChildByName("pos_" + vo.slot).getChildByName("aniEff");
                        id > 0 && vo.id == id && plant.index != vo.slot ? (eff.visible = !0, eff.ani1.play()) : (eff.visible = !1, eff.ani1.stop())
                    }
                }, PlantView.prototype.mapUpdate = function() {
                    var cfg = Confings_1.default.Instance.getMapById();
                    if (cfg)
                        for (var bgImgs = this.bgImgs, len = bgImgs.length, i = 0; i < len; i++) {
                            bgImgs[i].skin = ResConfig_1.ResConfig.getMainUrl(cfg.enclosure_pic)
                        }
                }, PlantView.prototype.getHechengPlants = function() {
                    var obj = {},
                        slots = GameData_1.default.Instance.slotPlants;
                    for (var key in slots) {
                        var slotVO = slots[key],
                            id = slotVO.id;
                        if (id > 0) {
                            var arr = obj[id];
                            arr || (arr = obj[id] = []);
                            var p = this.globlePointArr[slotVO.slot];
                            if (arr.push(p), arr.length > 1) return arr
                        }
                    }
                }, PlantView.prototype.onEnable = function() {
                    var _this = this;
                    this.pointMove = new Laya.Point, Laya.timer.once(200, this, function() {
                        for (var i = 0; i < PlantView.PlantMax; i++) {
                            var child = _this.getChildByName("pos_" + i);
                            if (child) {
                                var bg = child.getChildByName("bgImg");
                                _this.bgImgs.push(bg);
                                var parent_1 = child.parent;
                                _this.pointMove.x = child.x, _this.pointMove.y = child.y, parent_1.localToGlobal(_this.pointMove);
                                var p = Laya.Point.create();
                                p.x = _this.pointMove.x, p.y = _this.pointMove.y, _this.globlePointArr.push(p), (p = Laya.Point.create()).x = child.x, p.y = child.y, _this.pointArr.push(p), _this.rowMinY > _this.pointMove.y && (_this.rowMinY = _this.pointMove.y)
                            }
                        }
                        var revocerBtn = GameControl_1.default.Instance.recoverBtn,
                            pos = _this.recoverPos = Laya.Point.create();
                        pos.x = revocerBtn.x, pos.y = revocerBtn.y, revocerBtn.parent.localToGlobal(pos), MessageCenter_1.MessageCenter.Instance.dispatch("plant_pos_init_complete"), MessageCenter_1.MessageCenter.Instance.addListener("guanka_update", _this.mapUpdate, _this), _this.mapUpdate()
                    }), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, function(event) {
                        if (!_this._isMoving && null == _this.currItem) {
                            var target = event.target;
                            if (target instanceof Laya.Image && "unlockBox" == target.name) {
                                var index = +target.parent.name.split("_")[1],
                                    slotPlant = GameData_1.default.Instance.slotPlants[index];
                                if (!slotPlant.isUnlock && slotPlant.isShow) {
                                    var cfg = Confings_1.default.Instance.getUnlockCfgById(index);
                                    if (cfg) {
                                        var cost = new Decimal(cfg.cost);
                                        GameData_1.default.Instance.checkGoldEnough(cost) && (GameData_1.default.Instance.addGold(-cfg.cost), target.visible = !1, slotPlant.isUnlock = !0)
                                    }
                                    return
                                }
                            }
                            if (target instanceof Laya.Box && "plant" == target.name) {
                                var plant = target.getComponent(BasePlant_1.default);
                                _this.checkCanHecheng(plant);
                                index = plant.index;
                                _this.currItem = target, _this.pointMove.x = event.stageX, _this.pointMove.y = event.stageY, GameData_1.default.Instance.clearSlotPlantByIndex(index), _this.currItem.pos(event.stageX, event.stageY), plant.moveHide(), Laya.stage.addChild(_this.currItem), _this._isMoving = !0
                            }
                        }
                    }), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, function(event) {
                        _this._isMoving && null != _this.currItem && (_this.pointMove.x = event.stageX, _this.pointMove.y = event.stageY, _this.currItem.x = _this.pointMove.x, _this.currItem.y = _this.pointMove.y)
                    }), Laya.stage.on(Laya.Event.MOUSE_UP, this, function(event) {
                        if (_this._isMoving && null != _this.currItem) {
                            _this.checkCanHecheng();
                            var currItem = _this.currItem,
                                plant = currItem.getComponent(BasePlant_1.default),
                                oldIndex = plant.index;
                            GameData_1.default.Instance.slotPlants[plant.index];
                            if (_this.recoverPos)
                                if ((tmpDist = _this.pointMove.distance(_this.recoverPos.x, _this.recoverPos.y)) < 50) {
                                    var gold = GameData_1.default.Instance.getSaleGold(plant.data.id);
                                    return GameControl_1.default.Instance.removePlant(plant), GameData_1.default.Instance.clearSlotPlantByIndex(oldIndex), _this.currItem = null, CoreFunction_1.CoreFunction.tipMsg("Nhận " + String_1.StringUtil.decimalFormat(gold) + " xu"), GameData_1.default.Instance.addGold(gold), void(_this._isMoving = !1)
                                } for (var index = -1, dist = 2e3, i = 0; i < PlantView.PlantMax; i++) {
                                var tmpDist, plant_1 = GameData_1.default.Instance.slotPlants[i];
                                if (plant_1 && plant_1.isUnlock)(tmpDist = _this.pointMove.distance(_this.globlePointArr[i].x, _this.globlePointArr[i].y)) < dist && (dist = tmpDist, index = i)
                            } - 1 == index && (index = _this.pointItem.indexOf(currItem)), console.log("[index]", index);
                            var slotPlant = GameData_1.default.Instance.slotPlants[index];
                            if (slotPlant.isUnlock && !slotPlant.id) GameData_1.default.Instance.clearSlotPlantByIndex(oldIndex), Laya.Tween.to(currItem, {
                                x: _this.globlePointArr[index].x,
                                y: _this.globlePointArr[index].y
                            }, 50, Laya.Ease.linearInOut, Laya.Handler.create(_this, function() {
                                _this.createItem(plant, plant.data, index, plant.bianyiId), _this.currItem = null, _this._isMoving = !1
                            }));
                            else if (index == oldIndex) Laya.Tween.to(currItem, {
                                x: _this.globlePointArr[index].x,
                                y: _this.globlePointArr[index].y
                            }, 50, Laya.Ease.linearInOut, Laya.Handler.create(_this, function() {
                                _this.createItem(plant, plant.data, index, plant.bianyiId), _this.currItem = null, _this._isMoving = !1
                            }));
                            else if (slotPlant.id < 0) Laya.Tween.to(currItem, {
                                x: _this.globlePointArr[oldIndex].x,
                                y: _this.globlePointArr[oldIndex].y
                            }, 50, Laya.Ease.linearInOut, Laya.Handler.create(_this, function() {
                                _this.createItem(plant, plant.data, oldIndex, plant.bianyiId), _this.currItem = null, _this._isMoving = !1
                            }));
                            else {
                                var target = _this.pointItem[index],
                                    targetPlant_1 = target.getComponent(BasePlant_1.default),
                                    targetData_1 = targetPlant_1.data;
                                if (targetData_1.id == plant.data.id) {
                                    console.log("同等级");
                                    var cfgs = Confings_1.default.Instance.getPlantsByType(targetData_1.type),
                                        cfg = cfgs[cfgs.length - 1];
                                    if (targetData_1.id >= cfg.id) CoreFunction_1.CoreFunction.tipMsg("Đã đạt level tối đa"), Laya.Tween.to(currItem, {
                                        x: _this.globlePointArr[oldIndex].x,
                                        y: _this.globlePointArr[oldIndex].y
                                    }, 50, Laya.Ease.linearInOut, Laya.Handler.create(_this, function() {
                                        _this.createItem(plant, plant.data, oldIndex, plant.bianyiId), _this.currItem = null, _this._isMoving = !1
                                    }));
                                    else {
                                        targetPlant_1.moveHide(), _this.pointMove.x = _this.globlePointArr[index].x, _this.pointMove.y = _this.globlePointArr[index].y;
                                        _this.currItem.x = _this.pointMove.x - 60, _this.currItem.y = _this.pointMove.y, Laya.Tween.to(_this.currItem, {
                                            x: _this.pointMove.x
                                        }, 300, Laya.Ease.backInOut);
                                        var x = target.x;
                                        target.x = x + 60, Laya.Tween.to(target, {
                                            x: x
                                        }, 300, Laya.Ease.backInOut), Laya.timer.once(200, _this, function() {
                                            var p = _this.hechengEff.parent.globalToLocal(_this.pointMove, !0);
                                            _this.hechengEff.x = p.x, _this.hechengEff.y = p.y, _this.hechengEff.parent && _this.setChildIndex(_this.hechengEff, _this.numChildren - 1), _this.addChild(_this.hechengEff), _this.hechengEff.rePlay()
                                        }), Laya.timer.once(300, _this, function() {
                                            GameControl_1.default.Instance.removePlant(plant), GameData_1.default.Instance.clearSlotPlantByIndex(oldIndex), GameData_1.default.Instance.clearSlotPlantByIndex(index);
                                            var luckyCfg, nextId = targetData_1.id + 1,
                                                cfg = Confings_1.default.Instance.getPlantById(nextId),
                                                bianyiId = GameData_1.default.Instance.checkHechengBianyi(cfg, index);
                                            !bianyiId && Laya.Browser.window.h5api.canPlayAd() && (luckyCfg = GameData_1.default.Instance.checkLuckyHecheng(targetData_1)), luckyCfg ? (DDSDK.logEvent("luckyhecheng", {}), LayerRoot_1.default.Instance.openScene("dialog/LuckyHecheng.scene", !1, [targetData_1, luckyCfg, Laya.Handler.create(_this, function(value) {
                                                value && (_this.createItem(targetPlant_1, value, index, bianyiId), GameData_1.default.Instance.hechengPlant(value, index))
                                            })])) : (_this.createItem(targetPlant_1, cfg, index, bianyiId), GameData_1.default.Instance.hechengPlant(cfg, index)), _this._isMoving = !1, _this.currItem = null
                                        })
                                    }
                                } else {
                                    console.log("不同等级");
                                    var target_1 = _this.pointItem[index],
                                        targetPlant_2 = target_1.getComponent(BasePlant_1.default);
                                    _this.pointMove.x = _this.globlePointArr[oldIndex].x, _this.pointMove.y = _this.globlePointArr[oldIndex].y;
                                    GameData_1.default.Instance.slotPlants[index];
                                    Laya.Tween.to(target_1, {
                                        x: _this.pointMove.x,
                                        y: _this.pointMove.y
                                    }, 50, Laya.Ease.linearInOut, Laya.Handler.create(_this, function() {
                                        _this.createItem(targetPlant_2, targetPlant_2.data, oldIndex, targetPlant_2.bianyiId), _this._isMoving = !1
                                    })), Laya.Tween.to(currItem, {
                                        x: _this.globlePointArr[index].x,
                                        y: _this.globlePointArr[index].y
                                    }, 50, Laya.Ease.linearInOut, Laya.Handler.create(_this, function() {
                                        _this.createItem(plant, plant.data, index, plant.bianyiId), _this._isMoving = !1
                                    })), _this.currItem = null
                                }
                            }
                        }
                    }), MessageCenter_1.MessageCenter.Instance.addListener("plant_slot_update", this.updatePlantSlots, this), MessageCenter_1.MessageCenter.Instance.addListener("gold_update", this.updatePlantSlots, this), this.updatePlantSlots()
                }, PlantView.prototype.updatePlantSlots = function() {
                    var slotPlants = GameData_1.default.Instance.userData.slotPlants;
                    if (slotPlants)
                        for (var key in slotPlants) {
                            var slotPlant = slotPlants[key],
                                con = this.getChildByName("pos_" + slotPlant.slot);
                            con.visible = slotPlant.isShow;
                            var unlockBox = con.getChildByName("unlockBox");
                            if (unlockBox.visible = !slotPlant.isUnlock, !slotPlant.isUnlock) {
                                var cfg = Confings_1.default.Instance.getUnlockCfgById(slotPlant.slot);
                                if (cfg) {
                                    var cost = new Decimal(cfg.cost);
                                    unlockBox.filters = cost.lte(GameData_1.default.Instance.gold) ? null : [(new Laya.ColorFilter).gray()], unlockBox.getChildByName("costTxt").text = String_1.StringUtil.decimalFormat(cost)
                                }
                            }
                        }
                }, PlantView.prototype.addItem = function(item, cfg) {
                    for (var plant, i = 0; i < PlantView.PlantMax; i++) {
                        var slotPlant = GameData_1.default.Instance.slotPlants[i];
                        if (slotPlant && slotPlant.isShow && slotPlant.isUnlock && !slotPlant.id) {
                            plant = this.createItem(item, cfg, i, slotPlant.bianyiId);
                            break
                        }
                    }
                    return plant
                }, PlantView.prototype.createItem = function(plant, cfg, i, bianyiId) {
                    var slotPlant = GameData_1.default.Instance.slotPlants[i];
                    slotPlant.id = cfg.id, slotPlant.bianyiId = bianyiId;
                    var owner = plant.owner;
                    this.addChild(owner);
                    var p = this.pointArr[i];
                    return owner.x = p.x, owner.y = p.y, plant.initData(cfg, i, bianyiId), owner.mouseEnabled = !0, owner.mouseThrough = !1, this.getChildByName("pos_" + i).getChildByName("unlockBox").visible = !1, owner.scaleX = owner.scaleY = 0, Laya.Tween.to(owner, {
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, 250, Laya.Ease.backOut), Laya.Tween.to(owner, {
                        scaleX: .85,
                        scaleY: .85
                    }, 50, null, null, 250), this.pointItem[i] = owner, plant
                }, PlantView.prototype.addBullet = function(bullet, plantPos) {
                    void 0 === plantPos && (plantPos = !0);
                    var i = bullet.index,
                        owner = this.pointItem[i];
                    return !!owner && (plantPos && bullet.pos(owner.x, owner.y - 50), this.addChild(bullet.owner), !0)
                }, PlantView.prototype.addBulletByPos = function(bullet, pos) {
                    bullet.pos(pos.x, pos.y), this.addChild(bullet.owner)
                }, PlantView.prototype.getEmptyPos = function() {
                    for (var slotPlants = GameData_1.default.Instance.slotPlants, i = 0; i < PlantView.PlantMax; i++) {
                        var slot = slotPlants[i];
                        if (!slot.id && slot.isUnlock) return {
                            parent: this.getChildByName("pos_" + i),
                            index: i
                        }
                    }
                }, PlantView.prototype.getPosBySlot = function(slot) {
                    return slot = MathEx_1.default.Inst.clamp(slot, 0, PlantView.PlantMax - 1), this.getChildByName("pos_" + slot)
                }, PlantView.prototype.addLuckyBoxAtSlot = function(box, slot) {
                    slot = MathEx_1.default.Inst.clamp(slot, 0, PlantView.PlantMax - 1);
                    var parent = this.getChildByName("pos_" + slot);
                    parent && parent.addChild(box)
                }, PlantView.prototype.addBuffByIndex = function(index, buff) {
                    if (!(index < 0 || index >= PlantView.PlantMax)) {
                        var slot = GameData_1.default.Instance.slotPlants[index];
                        if (!(slot.id <= 0 || null == slot.id)) {
                            var owner = this.pointItem[index];
                            if (owner) {
                                var plant = owner.getComponent(BasePlant_1.default);
                                plant && plant.addBuff(buff)
                            }
                        }
                    }
                }, PlantView.prototype.getMaxLvPos = function() {
                    for (var slotPlants = GameData_1.default.Instance.slotPlants, slotIndex = -1, cfg = null, i = 0; i < PlantView.PlantMax; i++) {
                        var slot = slotPlants[i];
                        if (slot.id > 0 && slot.isUnlock) {
                            var sCfg = Confings_1.default.Instance.getPlantById(slot.id),
                                owner = this.pointItem[i];
                            if (owner)
                                if (owner.getComponent(BasePlant_1.default).buffActive(Constant_1.BuffType.AttackSpeed)) continue;
                            (!cfg || cfg.level < sCfg.level) && (cfg = sCfg, slotIndex = i)
                        }
                    }
                    return slotIndex > -1 ? {
                        slot: this.getChildByName("pos_" + slotIndex),
                        index: slotIndex
                    } : (console.warn("场上没有植物"), null)
                }, PlantView.PlantMax = 15, PlantView
            }(Laya.Box);
        exports.default = PlantView
    }, {
        "../core/Constant": 6,
        "../core/CoreFunction": 7,
        "../core/MathEx": 9,
        "../core/MessageCenter": 10,
        "../core/ResConfig": 11,
        "../core/basic/String": 14,
        "../data/Confings": 23,
        "../data/GameData": 24,
        "../imgAni/ImgAni": 51,
        "../scene/LayerRoot": 52,
        "../script/GameControl": 56,
        "../script/plant/BasePlant": 90
    }],
    106: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var GameConfig_1 = require("../../GameConfig"),
            ResConfig_1 = require("../core/ResConfig"),
            TipMsg = function(_super) {
                function TipMsg() {
                    return _super.call(this) || this
                }
                return __extends(TipMsg, _super), TipMsg.prototype.setMsg = function(value, color) {
                    void 0 === color && (color = "#fff"), this.msg.color = color, this.msg.text = value
                }, TipMsg.prototype.onEnable = function() {
                    if (!this.bg) {
                        var bg = this.bg = new Laya.Image;
                        bg.pos(40, 0), bg.sizeGrid = "20,20,20,20", bg.scaleX = bg.scaleY = 1, bg.skin = ResConfig_1.ResConfig.getMainUrl("zwujs_kuan_phlbdi2"), bg.height = 80, bg.width = GameConfig_1.default.width - 80, this.addChild(bg)
                    }
                    if (!this.msg) {
                        var msg = this.msg = new Laya.Label;
                        msg.alpha = 1, msg.scaleX = msg.scaleY = 1, msg.width = GameConfig_1.default.width, msg.align = "center", msg.pos(0, 25), msg.color = "#fff", msg.font = "Arial", msg.fontSize = 35, this.addChild(msg)
                    }
                }, TipMsg.prototype.onDisable = function() {
                    this.msg.text = ""
                }, TipMsg
            }(Laya.Sprite);
        exports.default = TipMsg
    }, {
        "../../GameConfig": 1,
        "../core/ResConfig": 11
    }],
    107: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var REG = Laya.ClassUtils.regClass;
        ! function(ui) {
            ! function(dialog) {
                var AddMiniProgramUI = function(_super) {
                    function AddMiniProgramUI() {
                        return _super.call(this) || this
                    }
                    return __extends(AddMiniProgramUI, _super), AddMiniProgramUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/AddMiniProgram")
                    }, AddMiniProgramUI
                }(Laya.Dialog);
                dialog.AddMiniProgramUI = AddMiniProgramUI, REG("ui.dialog.AddMiniProgramUI", AddMiniProgramUI);
                var AddProgramAlertDialogUI = function(_super) {
                    function AddProgramAlertDialogUI() {
                        return _super.call(this) || this
                    }
                    return __extends(AddProgramAlertDialogUI, _super), AddProgramAlertDialogUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/AddProgramAlertDialog")
                    }, AddProgramAlertDialogUI
                }(Laya.Dialog);
                dialog.AddProgramAlertDialogUI = AddProgramAlertDialogUI, REG("ui.dialog.AddProgramAlertDialogUI", AddProgramAlertDialogUI);
                var AwardUI = function(_super) {
                    function AwardUI() {
                        return _super.call(this) || this
                    }
                    return __extends(AwardUI, _super), AwardUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/Award")
                    }, AwardUI
                }(Laya.Dialog);
                dialog.AwardUI = AwardUI, REG("ui.dialog.AwardUI", AwardUI);
                var DailyAwardUI = function(_super) {
                    function DailyAwardUI() {
                        return _super.call(this) || this
                    }
                    return __extends(DailyAwardUI, _super), DailyAwardUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/DailyAward")
                    }, DailyAwardUI
                }(Laya.Dialog);
                dialog.DailyAwardUI = DailyAwardUI, REG("ui.dialog.DailyAwardUI", DailyAwardUI);
                var FlySkillBoxUI = function(_super) {
                    function FlySkillBoxUI() {
                        return _super.call(this) || this
                    }
                    return __extends(FlySkillBoxUI, _super), FlySkillBoxUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/FlySkillBox")
                    }, FlySkillBoxUI
                }(Laya.Dialog);
                dialog.FlySkillBoxUI = FlySkillBoxUI, REG("ui.dialog.FlySkillBoxUI", FlySkillBoxUI);
                var FreeGoldUI = function(_super) {
                    function FreeGoldUI() {
                        return _super.call(this) || this
                    }
                    return __extends(FreeGoldUI, _super), FreeGoldUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/FreeGold")
                    }, FreeGoldUI
                }(Laya.Dialog);
                dialog.FreeGoldUI = FreeGoldUI, REG("ui.dialog.FreeGoldUI", FreeGoldUI);
                var GuankaFailUI = function(_super) {
                    function GuankaFailUI() {
                        return _super.call(this) || this
                    }
                    return __extends(GuankaFailUI, _super), GuankaFailUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/GuankaFail")
                    }, GuankaFailUI
                }(Laya.Dialog);
                dialog.GuankaFailUI = GuankaFailUI, REG("ui.dialog.GuankaFailUI", GuankaFailUI);
                var GuankaWinUI = function(_super) {
                    function GuankaWinUI() {
                        return _super.call(this) || this
                    }
                    return __extends(GuankaWinUI, _super), GuankaWinUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/GuankaWin")
                    }, GuankaWinUI
                }(Laya.Dialog);
                dialog.GuankaWinUI = GuankaWinUI, REG("ui.dialog.GuankaWinUI", GuankaWinUI);
                var InviteNewPlayerUI = function(_super) {
                    function InviteNewPlayerUI() {
                        return _super.call(this) || this
                    }
                    return __extends(InviteNewPlayerUI, _super), InviteNewPlayerUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/InviteNewPlayer")
                    }, InviteNewPlayerUI
                }(Laya.Dialog);
                dialog.InviteNewPlayerUI = InviteNewPlayerUI, REG("ui.dialog.InviteNewPlayerUI", InviteNewPlayerUI);
                var LuckyHechengUI = function(_super) {
                    function LuckyHechengUI() {
                        return _super.call(this) || this
                    }
                    return __extends(LuckyHechengUI, _super), LuckyHechengUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/LuckyHecheng")
                    }, LuckyHechengUI
                }(Laya.Dialog);
                dialog.LuckyHechengUI = LuckyHechengUI, REG("ui.dialog.LuckyHechengUI", LuckyHechengUI);
                var LuckyPlantBoxUI = function(_super) {
                    function LuckyPlantBoxUI() {
                        return _super.call(this) || this
                    }
                    return __extends(LuckyPlantBoxUI, _super), LuckyPlantBoxUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/LuckyPlantBox")
                    }, LuckyPlantBoxUI
                }(Laya.Dialog);
                dialog.LuckyPlantBoxUI = LuckyPlantBoxUI, REG("ui.dialog.LuckyPlantBoxUI", LuckyPlantBoxUI);
                var MonsterListUI = function(_super) {
                    function MonsterListUI() {
                        return _super.call(this) || this
                    }
                    return __extends(MonsterListUI, _super), MonsterListUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/MonsterList")
                    }, MonsterListUI
                }(Laya.Dialog);
                dialog.MonsterListUI = MonsterListUI, REG("ui.dialog.MonsterListUI", MonsterListUI);
                var PlantBianyiUI = function(_super) {
                    function PlantBianyiUI() {
                        return _super.call(this) || this
                    }
                    return __extends(PlantBianyiUI, _super), PlantBianyiUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/PlantBianyi")
                    }, PlantBianyiUI
                }(Laya.Dialog);
                dialog.PlantBianyiUI = PlantBianyiUI, REG("ui.dialog.PlantBianyiUI", PlantBianyiUI);
                var PlayTipsUI = function(_super) {
                    function PlayTipsUI() {
                        return _super.call(this) || this
                    }
                    return __extends(PlayTipsUI, _super), PlayTipsUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/PlayTips")
                    }, PlayTipsUI
                }(Laya.Dialog);
                dialog.PlayTipsUI = PlayTipsUI, REG("ui.dialog.PlayTipsUI", PlayTipsUI);
                var RankUI = function(_super) {
                    function RankUI() {
                        return _super.call(this) || this
                    }
                    return __extends(RankUI, _super), RankUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/Rank")
                    }, RankUI
                }(Laya.Dialog);
                dialog.RankUI = RankUI, REG("ui.dialog.RankUI", RankUI);
                var ShareFailUI = function(_super) {
                    function ShareFailUI() {
                        return _super.call(this) || this
                    }
                    return __extends(ShareFailUI, _super), ShareFailUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/ShareFail")
                    }, ShareFailUI
                }(Laya.Dialog);
                dialog.ShareFailUI = ShareFailUI, REG("ui.dialog.ShareFailUI", ShareFailUI);
                var ShopUI = function(_super) {
                    function ShopUI() {
                        return _super.call(this) || this
                    }
                    return __extends(ShopUI, _super), ShopUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/Shop")
                    }, ShopUI
                }(Laya.Dialog);
                dialog.ShopUI = ShopUI, REG("ui.dialog.ShopUI", ShopUI);
                var SubscribeSkillActivityUI = function(_super) {
                    function SubscribeSkillActivityUI() {
                        return _super.call(this) || this
                    }
                    return __extends(SubscribeSkillActivityUI, _super), SubscribeSkillActivityUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/SubscribeSkillActivity")
                    }, SubscribeSkillActivityUI
                }(Laya.Dialog);
                dialog.SubscribeSkillActivityUI = SubscribeSkillActivityUI, REG("ui.dialog.SubscribeSkillActivityUI", SubscribeSkillActivityUI);
                var TianFuUI = function(_super) {
                    function TianFuUI() {
                        return _super.call(this) || this
                    }
                    return __extends(TianFuUI, _super), TianFuUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/TianFu")
                    }, TianFuUI
                }(Laya.Dialog);
                dialog.TianFuUI = TianFuUI, REG("ui.dialog.TianFuUI", TianFuUI);
                var TianFuAlertUI = function(_super) {
                    function TianFuAlertUI() {
                        return _super.call(this) || this
                    }
                    return __extends(TianFuAlertUI, _super), TianFuAlertUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/TianFuAlert")
                    }, TianFuAlertUI
                }(Laya.Dialog);
                dialog.TianFuAlertUI = TianFuAlertUI, REG("ui.dialog.TianFuAlertUI", TianFuAlertUI);
                var UnlockMonsterUI = function(_super) {
                    function UnlockMonsterUI() {
                        return _super.call(this) || this
                    }
                    return __extends(UnlockMonsterUI, _super), UnlockMonsterUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/UnlockMonster")
                    }, UnlockMonsterUI
                }(Laya.Dialog);
                dialog.UnlockMonsterUI = UnlockMonsterUI, REG("ui.dialog.UnlockMonsterUI", UnlockMonsterUI);
                var UnlockNewModuleUI = function(_super) {
                    function UnlockNewModuleUI() {
                        return _super.call(this) || this
                    }
                    return __extends(UnlockNewModuleUI, _super), UnlockNewModuleUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/UnlockNewModule")
                    }, UnlockNewModuleUI
                }(Laya.Dialog);
                dialog.UnlockNewModuleUI = UnlockNewModuleUI, REG("ui.dialog.UnlockNewModuleUI", UnlockNewModuleUI);
                var UnlockPlantUI = function(_super) {
                    function UnlockPlantUI() {
                        return _super.call(this) || this
                    }
                    return __extends(UnlockPlantUI, _super), UnlockPlantUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/UnlockPlant")
                    }, UnlockPlantUI
                }(Laya.Dialog);
                dialog.UnlockPlantUI = UnlockPlantUI, REG("ui.dialog.UnlockPlantUI", UnlockPlantUI);
                var UnlockZhaLanUI = function(_super) {
                    function UnlockZhaLanUI() {
                        return _super.call(this) || this
                    }
                    return __extends(UnlockZhaLanUI, _super), UnlockZhaLanUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/UnlockZhaLan")
                    }, UnlockZhaLanUI
                }(Laya.Dialog);
                dialog.UnlockZhaLanUI = UnlockZhaLanUI, REG("ui.dialog.UnlockZhaLanUI", UnlockZhaLanUI);
                var ZhaLanSelectUI = function(_super) {
                    function ZhaLanSelectUI() {
                        return _super.call(this) || this
                    }
                    return __extends(ZhaLanSelectUI, _super), ZhaLanSelectUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/ZhaLanSelect")
                    }, ZhaLanSelectUI
                }(Laya.Dialog);
                dialog.ZhaLanSelectUI = ZhaLanSelectUI, REG("ui.dialog.ZhaLanSelectUI", ZhaLanSelectUI);
                var ZhuanPanUI = function(_super) {
                    function ZhuanPanUI() {
                        return _super.call(this) || this
                    }
                    return __extends(ZhuanPanUI, _super), ZhuanPanUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("dialog/ZhuanPan")
                    }, ZhuanPanUI
                }(Laya.Dialog);
                dialog.ZhuanPanUI = ZhuanPanUI, REG("ui.dialog.ZhuanPanUI", ZhuanPanUI)
            }(ui.dialog || (ui.dialog = {}))
        }(exports.ui || (exports.ui = {})),
        function(ui) {
            ! function(effects) {
                var eff_JS_001UI = function(_super) {
                    function eff_JS_001UI() {
                        return _super.call(this) || this
                    }
                    return __extends(eff_JS_001UI, _super), eff_JS_001UI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("effects/eff_JS_001")
                    }, eff_JS_001UI
                }(Laya.Scene);
                effects.eff_JS_001UI = eff_JS_001UI, REG("ui.effects.eff_JS_001UI", eff_JS_001UI);
                var eff_JS_002UI = function(_super) {
                    function eff_JS_002UI() {
                        return _super.call(this) || this
                    }
                    return __extends(eff_JS_002UI, _super), eff_JS_002UI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("effects/eff_JS_002")
                    }, eff_JS_002UI
                }(Laya.Scene);
                effects.eff_JS_002UI = eff_JS_002UI, REG("ui.effects.eff_JS_002UI", eff_JS_002UI);
                var eff_miaozhunUI = function(_super) {
                    function eff_miaozhunUI() {
                        return _super.call(this) || this
                    }
                    return __extends(eff_miaozhunUI, _super), eff_miaozhunUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.createView(eff_miaozhunUI.uiView)
                    }, eff_miaozhunUI.uiView = {
                        type: "Scene",
                        props: {
                            width: 50,
                            height: 50
                        },
                        compId: 2,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                skin: "main/nczjs_img_gwmzj.png",
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 3
                        }],
                        animations: [{
                            nodes: [{
                                target: 3,
                                keyframes: {
                                    y: [{
                                        value: 60,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 0
                                    }, {
                                        value: -92,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 10
                                    }, {
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 20
                                    }, {
                                        value: -67,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 30
                                    }, {
                                        value: -29,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 40
                                    }, {
                                        value: 126,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 50
                                    }, {
                                        value: -67,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 60
                                    }, {
                                        value: -33,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 70
                                    }, {
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 80
                                    }],
                                    x: [{
                                        value: -92,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 0
                                    }, {
                                        value: 50,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 10
                                    }, {
                                        value: 215,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 20
                                    }, {
                                        value: -182,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 30
                                    }, {
                                        value: 229,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 40
                                    }, {
                                        value: 98,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 50
                                    }, {
                                        value: 169,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 60
                                    }, {
                                        value: -175,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 70
                                    }, {
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 80
                                    }],
                                    scaleY: [{
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 0
                                    }, {
                                        value: 1.5,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 10
                                    }, {
                                        value: 1.3,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 20
                                    }, {
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 30
                                    }, {
                                        value: 1.3,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 40
                                    }, {
                                        value: 1.5,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 50
                                    }, {
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 60
                                    }],
                                    scaleX: [{
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 0
                                    }, {
                                        value: 1.5,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 10
                                    }, {
                                        value: 1.3,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 20
                                    }, {
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 30
                                    }, {
                                        value: 1.3,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 40
                                    }, {
                                        value: 1.5,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 50
                                    }, {
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 60
                                    }]
                                }
                            }],
                            name: "ani1",
                            id: 1,
                            frameRate: 30,
                            action: 0
                        }, {
                            nodes: [{
                                target: 3,
                                keyframes: {
                                    y: [{
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 0
                                    }, {
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 10
                                    }, {
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "y",
                                        index: 20
                                    }],
                                    x: [{
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 0
                                    }, {
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 10
                                    }, {
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "x",
                                        index: 20
                                    }],
                                    scaleY: [{
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 0
                                    }, {
                                        value: 1.2,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 10
                                    }, {
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 20
                                    }],
                                    scaleX: [{
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 0
                                    }, {
                                        value: 1.2,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 10
                                    }, {
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 20
                                    }]
                                }
                            }],
                            name: "ani2",
                            id: 2,
                            frameRate: 24,
                            action: 0
                        }],
                        loadList: ["main/nczjs_img_gwmzj.png"],
                        loadList3D: []
                    }, eff_miaozhunUI
                }(Laya.Scene);
                effects.eff_miaozhunUI = eff_miaozhunUI, REG("ui.effects.eff_miaozhunUI", eff_miaozhunUI)
            }(ui.effects || (ui.effects = {}))
        }(exports.ui || (exports.ui = {})),
        function(ui) {
            var LoadingSceneUI = function(_super) {
                function LoadingSceneUI() {
                    return _super.call(this) || this
                }
                return __extends(LoadingSceneUI, _super), LoadingSceneUI.prototype.createChildren = function() {
                    _super.prototype.createChildren.call(this), this.loadScene("LoadingScene")
                }, LoadingSceneUI
            }(Laya.Dialog);
            ui.LoadingSceneUI = LoadingSceneUI, REG("ui.LoadingSceneUI", LoadingSceneUI)
        }(exports.ui || (exports.ui = {})),
        function(ui) {
            ! function(scene) {
                var StartSceneUI = function(_super) {
                    function StartSceneUI() {
                        return _super.call(this) || this
                    }
                    return __extends(StartSceneUI, _super), StartSceneUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("scene/StartScene")
                    }, StartSceneUI
                }(Laya.Scene);
                scene.StartSceneUI = StartSceneUI, REG("ui.scene.StartSceneUI", StartSceneUI)
            }(ui.scene || (ui.scene = {}))
        }(exports.ui || (exports.ui = {})),
        function(ui) {
            ! function(view) {
                var GuideViewUI = function(_super) {
                    function GuideViewUI() {
                        return _super.call(this) || this
                    }
                    return __extends(GuideViewUI, _super), GuideViewUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.createView(GuideViewUI.uiView)
                    }, GuideViewUI.uiView = {
                        type: "View",
                        props: {
                            width: 640,
                            runtime: "game/view/GuideView.ts",
                            mouseThrough: !0,
                            mouseEnabled: !0,
                            height: 1136
                        },
                        compId: 2,
                        child: [{
                            type: "Image",
                            props: {
                                width: 532,
                                var: "msgBox",
                                skin: "main/zwujs_img_ydkuan.png",
                                sizeGrid: "39,37,52,38",
                                height: 156,
                                centerY: 0,
                                centerX: 0
                            },
                            compId: 14,
                            child: [{
                                type: "Label",
                                props: {
                                    y: 35,
                                    x: 69,
                                    wordWrap: !0,
                                    width: 398,
                                    var: "msgTxt",
                                    text: "Đợt Zombie lớn đang tấn công, \nhãy mua vũ khí để hạ chúng",
                                    leading: 20,
                                    height: 86,
                                    fontSize: 24,
                                    font: "Arial",
                                    color: "#652f14",
                                    bold: !0
                                },
                                compId: 15
                            }]
                        }, {
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                var: "guide1_0"
                            },
                            compId: 3,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    skin: "main/zwujs_icon_ydshou.png",
                                    anchorY: 1,
                                    anchorX: 0
                                },
                                compId: 4
                            }]
                        }, {
                            type: "Box",
                            props: {
                                x: 200,
                                var: "guide1_1"
                            },
                            compId: 19,
                            child: [{
                                type: "Image",
                                props: {
                                    skin: "main/zwujs_icon_ydshou.png"
                                },
                                compId: 20
                            }]
                        }, {
                            type: "Image",
                            props: {
                                y: 139,
                                x: 122,
                                var: "closeBtn",
                                skin: "main/fbmian_txt_tguoyd.png",
                                scaleY: 1.2,
                                scaleX: 1.2,
                                mouseEnabled: !0,
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 9,
                            child: [{
                                type: "Script",
                                props: {
                                    runtime: "game/script/ButtonClick.ts"
                                },
                                compId: 10
                            }]
                        }],
                        animations: [{
                            nodes: [{
                                target: 4,
                                keyframes: {
                                    y: [{
                                        value: -37,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 4,
                                        key: "y",
                                        index: 0
                                    }, {
                                        value: -27,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 4,
                                        key: "y",
                                        index: 10
                                    }, {
                                        value: -37,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 4,
                                        key: "y",
                                        index: 20
                                    }, {
                                        value: -27,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 4,
                                        label: null,
                                        key: "y",
                                        index: 30
                                    }, {
                                        value: -37,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 4,
                                        label: null,
                                        key: "y",
                                        index: 40
                                    }],
                                    x: [{
                                        value: -4,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 4,
                                        key: "x",
                                        index: 0
                                    }, {
                                        value: -4,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 4,
                                        key: "x",
                                        index: 10
                                    }, {
                                        value: -4,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 4,
                                        label: null,
                                        key: "x",
                                        index: 40
                                    }]
                                }
                            }],
                            name: "ani1",
                            id: 1,
                            frameRate: 24,
                            action: 2
                        }, {
                            nodes: [{
                                target: 20,
                                keyframes: {
                                    y: [{
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 20,
                                        key: "y",
                                        index: 0
                                    }, {
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 20,
                                        key: "y",
                                        index: 30
                                    }],
                                    x: [{
                                        value: 0,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 20,
                                        key: "x",
                                        index: 0
                                    }, {
                                        value: 120,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 20,
                                        key: "x",
                                        index: 30
                                    }]
                                }
                            }],
                            name: "ani2",
                            id: 2,
                            frameRate: 24,
                            action: 2
                        }],
                        loadList: ["main/zwujs_img_ydkuan.png", "main/zwujs_icon_ydshou.png", "main/fbmian_txt_tguoyd.png"],
                        loadList3D: []
                    }, GuideViewUI
                }(Laya.View);
                view.GuideViewUI = GuideViewUI, REG("ui.view.GuideViewUI", GuideViewUI);
                var PlantBoxUI = function(_super) {
                    function PlantBoxUI() {
                        return _super.call(this) || this
                    }
                    return __extends(PlantBoxUI, _super), PlantBoxUI.prototype.createChildren = function() {
                        _super.prototype.createChildren.call(this), this.loadScene("view/PlantBox")
                    }, PlantBoxUI
                }(Laya.Scene);
                view.PlantBoxUI = PlantBoxUI, REG("ui.view.PlantBoxUI", PlantBoxUI)
            }(ui.view || (ui.view = {}))
        }(exports.ui || (exports.ui = {}))
    }, {}],
    108: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ObjectPool_1 = require("../game/core/utility/ObjectPool"),
            Log_1 = require("../game/core/utility/Log"),
            String_1 = require("../game/core/basic/String"),
            Settings_1 = require("../game/core/utility/Settings"),
            ResConfig_1 = require("../game/core/ResConfig"),
            Dictionary_1 = require("../game/core/utility/Dictionary"),
            AudioInfo = function() {
                function AudioInfo() {
                    this._havePlayed = !1, this._onStopBind = this._onStop.bind(this), this._onEndedBind = this._onEnded.bind(this)
                }
                return AudioInfo.prototype.play = function(res, loop) {
                    this._layaSoundChannel = Laya.SoundManager.playSound(res, loop ? 0 : 1, Laya.Handler.create(this, this.onAudioEnded)), this._havePlayed = !0
                }, AudioInfo.prototype.playMusic = function(res, loop) {
                    this._layaSoundChannel = Laya.SoundManager.playMusic(res, loop ? 0 : 1), this._havePlayed = !0
                }, AudioInfo.prototype.pause = function() {}, AudioInfo.prototype.resume = function() {
                    this._layaSoundChannel && this._layaSoundChannel.play()
                }, AudioInfo.prototype.stop = function() {
                    this._havePlayed = !1, this._layaSoundChannel && this._layaSoundChannel.stop()
                }, AudioInfo.prototype.destroy = function() {
                    this._layaSoundChannel && this._layaSoundChannel.stop(), this._layaSoundChannel = null, Laya.SoundManager.destroySound(this.res)
                }, AudioInfo.prototype._onStop = function() {
                    this.onAudioStoped && this.onAudioStoped()
                }, AudioInfo.prototype._onEnded = function() {
                    this.onAudioEnded && this.onAudioEnded()
                }, AudioInfo
            }();
        exports.AudioInfo = AudioInfo;
        var AudioManager = function() {
            function AudioManager() {
                this._playingSounds = {}, this.soundLimit = 2, AudioManager.audioPlayId = 0, this._inExclusivePlaying = new Dictionary_1.AccociatedArray, this._allInPlaying = new Dictionary_1.AccociatedArray, this._isMusiceMuted = !0, this._isSoundMuted = !0, this._music = null
            }
            return Object.defineProperty(AudioManager, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new AudioManager), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), AudioManager.prototype.init = function() {
                var isMusicMuted = Settings_1.Settings.Instance.getSetting("music_mute");
                this._isMusiceMuted = !!isMusicMuted;
                var isSoundMuted = Settings_1.Settings.Instance.getSetting("sound_mute");
                this._isSoundMuted = !!isSoundMuted, this.playBgm()
            }, AudioManager.prototype.playBgm = function() {
                AudioManager.Instance.playMusic(ResConfig_1.ResConfig.getSound("bgm"), !0)
            }, Object.defineProperty(AudioManager.prototype, "muteAudio", {
                set: function(val) {
                    this.muteSound = val, this.muteMusic = val, val || this.playBgm()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(AudioManager.prototype, "muteSound", {
                set: function(val) {
                    this._isSoundMuted = val, this._isSoundMuted && this.stopAllSound(), Settings_1.Settings.Instance.setSetting("sound_mute", val)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(AudioManager.prototype, "muteMusic", {
                set: function(val) {
                    this._isMusiceMuted = val, this._isMusiceMuted && this._music && this._music.stop(), Settings_1.Settings.Instance.setSetting("music_mute", val)
                },
                enumerable: !0,
                configurable: !0
            }), AudioManager.prototype.onSoundComplete = function(key) {
                var playingSounds = this._playingSounds,
                    idcount = playingSounds[key];
                idcount || (idcount = {
                    id: key,
                    count: 0
                }), idcount.count--, playingSounds[key] = idcount
            }, AudioManager.prototype.playSound = function(res, exclusive) {
                if (!this._isSoundMuted) {
                    var key = String_1.StringUtil.digestMD5(res),
                        playingSounds = this._playingSounds,
                        idcount = playingSounds[key];
                    if (idcount || (idcount = {
                            id: key,
                            count: 0
                        }), !(idcount.count >= this.soundLimit)) idcount.count++, playingSounds[key] = idcount, Laya.SoundManager.playSound(res, 1, Laya.Handler.create(this, this.onSoundComplete, [key]))
                }
            }, AudioManager.prototype.playMusic = function(res, loop) {
                this._isMusiceMuted || (this._music || (this._music = new AudioInfo), this._music.playMusic(res, loop))
            }, AudioManager.prototype.stopMusic = function() {
                this._music && this._music.stop()
            }, AudioManager.prototype.stopAllSound = function() {
                var arrar = this._allInPlaying.arrar;
                Log_1.Log.trace(">>== stop all sounds, len: " + arrar.length);
                for (var _i = 0, arrar_1 = arrar; _i < arrar_1.length; _i++) {
                    var audio = arrar_1[_i];
                    audio && (audio.stop(), audio.onAudioEnded = null, this._putdownAudio(audio))
                }
                this._allInPlaying.reset(), this._inExclusivePlaying.reset()
            }, AudioManager.prototype.stopAllAudio = function() {
                this.stopAllSound(), this.stopMusic()
            }, AudioManager.prototype.stopSound = function(sound) {
                Log_1.Log.trace(">>== sound " + sound.playId + " stoped"), sound.stop(), this._onSoundEnded(sound)
            }, AudioManager.prototype._onSoundEnded = function(sound) {
                var inExclusive = this._inExclusivePlaying.get(sound.key);
                inExclusive && inExclusive.playId == sound.playId && this._inExclusivePlaying.remove(sound.key), this._allInPlaying.remove(sound.playId + ""), sound.onAudioEnded = null, this._putdownAudio(sound)
            }, AudioManager.prototype._genNextPlayId = function() {
                return ++AudioManager.audioPlayId
            }, AudioManager.prototype._onAudioInterruptionBegin = function() {
                Log_1.Log.trace(">>>> == audio interruption begin")
            }, AudioManager.prototype._onAudioInterruptionEnd = function() {
                Log_1.Log.trace(">>>> == audio interruption end"), this._music && !this._isMusiceMuted && this._music.resume()
            }, AudioManager.prototype._pickupAudio = function(key) {
                var audio = ObjectPool_1.NamedObjectPool.Instance.pickUp(key);
                return audio || ((audio = new AudioInfo).key = key), audio
            }, AudioManager.prototype._putdownAudio = function(audio) {
                ObjectPool_1.NamedObjectPool.Instance.getCount(audio.key) > 5 ? audio.destroy() : ObjectPool_1.NamedObjectPool.Instance.putDown(audio, audio.key)
            }, AudioManager
        }();
        exports.AudioManager = AudioManager
    }, {
        "../game/core/ResConfig": 11,
        "../game/core/basic/String": 14,
        "../game/core/utility/Dictionary": 17,
        "../game/core/utility/Log": 20,
        "../game/core/utility/ObjectPool": 21,
        "../game/core/utility/Settings": 22
    }],
    109: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var requestData = function() {
            function requestData(url, data, method, callback, caller) {
                void 0 === method && (method = "GET"), this.url = url, this.param = data, this.method = method, this.callback = callback, this.caller = caller
            }
            return requestData.prototype.run = function(data) {
                if (this.callback && this.caller) try {
                    this.callback.apply(this.caller, [data, this.url])
                } catch (err) {
                    console.log("[requestData run err]", err)
                }
                this.destory()
            }, requestData.prototype.destory = function() {
                this.url = null, this.param = null, this.method = null, this.callback = null, this.caller = null
            }, requestData
        }();
        exports.requestData = requestData;
        var HttpNet = function() {
            function HttpNet() {
                this.requests = [], this.repetition = 0, this.httpRequest = new laya.net.HttpRequest, this.httpRequest.on(Laya.Event.COMPLETE, this, this.onComplete), this.httpRequest.on(Laya.Event.ERROR, this, this.onError), this.httpRequest.on(Laya.Event.PROGRESS, this, this.onProgress)
            }
            return Object.defineProperty(HttpNet, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new HttpNet), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), HttpNet.prototype.request = function(url, callback, caller, data, method) {
                void 0 === method && (method = "GET");
                var request = new requestData(url, data, method, callback, caller);
                console.log("this.inviteNew_url," + url);
                try {
                    this.requests.push(request), this.currentRequest || this._request()
                } catch (error) {}
            }, HttpNet.prototype._request = function() {
                var _this = this;
                if (!this.currentRequest) {
                    if (0 == this.requests.length) return;
                    this.currentRequest = this.requests.pop(), this.repetition = 0
                }
                Laya.Browser.window.wx ? (console.log("[http request]:" + this.currentRequest.url, this.currentRequest.param), wx.request({
                    url: this.currentRequest.url,
                    method: this.currentRequest.method,
                    dataType: "json",
                    data: this.currentRequest.param,
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(response) {
                        console.log("[http response]:", response.data), _this.currentRequest.run(response.data), _this.currentRequest = null, _this.requests.length > 0 && _this._request()
                    },
                    fail: function(err) {
                        _this.repetition >= 5 ? (_this.currentRequest.run({
                            errMsg: "fail"
                        }), _this.currentRequest = null) : _this.repetition++, _this.requests.length > 0 && _this._request()
                    },
                    complete: function() {}
                })) : (console.log("[http request]:" + this.currentRequest.url, this.currentRequest.param), "https://wxgamego01.rzdggame.com/zwdzjs/login.action" == this.currentRequest.url ? this.httpRequest.send(this.currentRequest.url + "?openid=" + this.currentRequest.param.openid, this.currentRequest.param, this.currentRequest.method, "text", ["Content-Type", "application/x-www-form-urlencoded"]) : "https://wxgamego01.rzdggame.com/zwdzjs/update.action" == this.currentRequest.url && this.httpRequest.send(this.currentRequest.url + "?openid=" + this.currentRequest.param.openid + "&udata=" + this.currentRequest.param.udata, this.currentRequest.param, this.currentRequest.method, "text", ["Content-Type", "application/x-www-form-urlencoded"]))
            }, HttpNet.prototype.onComplete = function(e) {
                console.log("[http response]:" + this.httpRequest.data);
                var data, response = this.httpRequest.data;
                try {
                    data = JSON.parse(response)
                } catch (e) {}
                this.currentRequest.run(data), this.currentRequest = null, this.requests.length > 0 && this._request()
            }, HttpNet.prototype.onError = function(e) {
                console.log("[http error]:" + this.currentRequest.url, this.httpRequest.data), this.repetition >= 5 ? (this.currentRequest.run({
                    errMsg: "fail"
                }), this.currentRequest = null) : this.repetition++, this._request()
            }, HttpNet.prototype.onProgress = function(e) {}, HttpNet
        }();
        exports.HttpNet = HttpNet
    }, {}],
    110: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var VideoManager_1 = require("./VideoManager"),
            GameData_1 = require("../game/data/GameData"),
            MessageCenter_1 = require("../game/core/MessageCenter"),
            Confings_1 = require("../game/data/Confings"),
            CoreFunction_1 = require("../game/core/CoreFunction"),
            GameControl_1 = require("../game/script/GameControl"),
            LayerRoot_1 = require("../game/scene/LayerRoot"),
            ShareManager = function() {
                function ShareManager() {
                    this.shareTime = 0, this.shareTimesDic = {}
                }
                return Object.defineProperty(ShareManager, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new ShareManager), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), ShareManager.prototype.init = function() {
                    MessageCenter_1.MessageCenter.Instance.addListener("notice_wx_onshow", this.onShow, this)
                }, ShareManager.prototype.isVideo = function(model, key) {
                    var shareCfg = Confings_1.default.Instance.getAppCfg(),
                        modelType = shareCfg.model,
                        shareTimesDic = GameData_1.default.Instance.shareTimesDic,
                        times = shareTimesDic[key];
                    if (null == times && (times = shareTimesDic[key] = 0), 1 == modelType) return doModel(shareCfg.tishen);
                    var old = GameData_1.default.Instance.dianAdDay,
                        today = (new Date).getDate();
                    old != today && (GameData_1.default.Instance.dianAdTimes = 0, GameData_1.default.Instance.dianAdDay = today);
                    var dianad = shareCfg.dianad;
                    if (!dianad) return !0;
                    var dianadParams = dianad.split(","),
                        dianAdNum = (dianadParams[0], +dianadParams[1]);
                    return GameData_1.default.Instance.dianAdTimes < dianAdNum || (1 == +model.split(",")[4] && (null == (times = shareTimesDic[key = "jifen"]) && (times = shareTimesDic[key] = 0), model = this.getJifenModel()), doModel(model));

                    function doModel(model) {
                        if (!model) return !0;
                        var params = model.split(",");
                        if (params.length >= 4) {
                            var type = params[0],
                                times1 = (params[1], +params[2]),
                                times2 = +params[3];
                            switch (type) {
                                case "model1":
                                    return !1;
                                case "model2":
                                case "model3":
                                    return !0;
                                case "model4":
                                    if (times >= times1 + times2 && (times = shareTimesDic[key] = 0), times < times1) return !0;
                                    if (times < times1 + times2) return !1;
                                case "model5":
                                    if (times >= times1 + times2 && (times = shareTimesDic[key] = 0), times < times1) return !1;
                                    if (times < times1 + times2) return !0;
                                    break;
                                case "model6":
                                    return times < times1;
                                case "model7":
                                    return !(times < times1);
                                case "model8":
                                    return !(times >= times1 + times2) && (1 == times || 4 == times || 7 == times)
                            }
                        }
                    }
                }, ShareManager.prototype.getJifenModel = function() {
                    var jifen = GameData_1.default.Instance.jifen;
                    return jifen < 100 ? Confings_1.default.Instance.jifenModel1 : jifen < 200 ? Confings_1.default.Instance.jifenModel2 : Confings_1.default.Instance.jifenModel3
                }, ShareManager.prototype.doShareOrVideo = function(key, handler) {
                    var shareCfg = Confings_1.default.Instance.getAppCfg();
                    if (shareCfg) {
                        this.curShareType = key;
                        var model = shareCfg[key],
                            modelType = shareCfg.model,
                            shareTimesDic = GameData_1.default.Instance.shareTimesDic,
                            times = shareTimesDic[key];
                        if (null == times && (times = shareTimesDic[key] = 0), 1 == modelType) doModel(shareCfg.tishen);
                        else {
                            var old = GameData_1.default.Instance.dianAdDay,
                                today = (new Date).getDate();
                            old != today && (GameData_1.default.Instance.dianAdTimes = 0, GameData_1.default.Instance.dianAdDay = today);
                            var dianad = shareCfg.dianad;
                            if (!dianad) return void(handler && (handler.runWith(!0), handler.clear()));
                            var dianadParams = dianad.split(","),
                                dianAdType = dianadParams[0],
                                dianAdNum = +dianadParams[1];
                            if (GameData_1.default.Instance.dianAdTimes < dianAdNum) VideoManager_1.VideoManager.Instance.showRewardAd(dianAdType, Laya.Handler.create(this, function() {
                                handler && (handler.runWith(!0), handler.clear()), GameData_1.default.Instance.dianAdTimes++
                            }), Laya.Handler.create(this, doModel, model));
                            else 1 == +model.split(",")[4] && (null == (times = shareTimesDic[key = "jifen"]) && (times = shareTimesDic[key] = 0), model = this.getJifenModel()), doModel(model);
                            console.log("[dianAdTimes]:", GameData_1.default.Instance.dianAdTimes)
                        }
                    } else handler && (handler.runWith(!0), handler.clear());

                    function doModel(model) {
                        if (model) {
                            var params = model.split(",");
                            if (params.length >= 4) {
                                var type = params[0],
                                    adType = params[1],
                                    times1 = +params[2],
                                    times2 = +params[3];
                                switch (type) {
                                    case "model1":
                                        doShare();
                                        break;
                                    case "model2":
                                        VideoManager_1.VideoManager.Instance.showRewardAd(adType, handler, Laya.Handler.create(null, function() {
                                            CoreFunction_1.CoreFunction.tipMsg("Đã hết video, thử lại sau 2 giờ")
                                        }));
                                        break;
                                    case "model3":
                                        VideoManager_1.VideoManager.Instance.showRewardAd(adType, handler, Laya.Handler.create(null, function() {
                                            ShareManager.Instance.doShareMessage(handler)
                                        }));
                                        break;
                                    case "model4":
                                        times >= times1 + times2 && (times = shareTimesDic[key] = 0), times < times1 ? doVideo(adType) : times < times1 + times2 && doShare();
                                        break;
                                    case "model5":
                                        times >= times1 + times2 && (times = shareTimesDic[key] = 0), times < times1 ? doShare() : times < times1 + times2 && doVideo(adType);
                                        break;
                                    case "model6":
                                        times < times1 ? doVideo(adType) : doShare();
                                        break;
                                    case "model7":
                                        times < times1 ? doShare() : doVideo(adType);
                                        break;
                                    case "model8":
                                        times >= times1 + times2 ? doShare() : 1 == times || 4 == times || 7 == times ? doVideo(adType) : doShare()
                                }
                                console.log("[modelType]:", type), console.log("[shareTimesDic]:", shareTimesDic)
                            }
                        } else handler && (handler.runWith(!0), handler.clear())
                    }

                    function doVideo(adType) {
                        var _this = this;
                        VideoManager_1.VideoManager.Instance.showRewardAd(adType, Laya.Handler.create(this, function(suc) {
                            shareTimesDic[key] = times + 1, handler && (handler.runWith(suc), handler.clear()), console.log("[update shareTimesDic doVideo]key:" + (times + 1) + ":", shareTimesDic)
                        }), Laya.Handler.create(null, function() {
                            ShareManager.Instance.doShareMessage(Laya.Handler.create(_this, function(suc) {
                                handler && (handler.runWith(suc), handler.clear()), shareTimesDic[key] = times + 1, console.log("[update shareTimesDic doVideoToShare]key:" + (times + 1) + ":", shareTimesDic)
                            }))
                        }))
                    }

                    function doShare() {
                        ShareManager.Instance.doShareMessage(Laya.Handler.create(this, function(suc) {
                            shareTimesDic[key] = times + 1, handler && (handler.runWith(suc), handler.clear()), console.log("[update shareTimesDic doShare]key:" + (times + 1) + ":", shareTimesDic)
                        }))
                    }
                }, ShareManager.prototype.doShareMessage = function(handler, ignoreResult) {
                    void 0 === ignoreResult && (ignoreResult = !1), this.ignoreResult = ignoreResult
                }, ShareManager.prototype.onShow = function() {
                    if (this.ignoreResult) return this.ignoreResult = !1, void(GameControl_1.default.Instance && GameControl_1.default.Instance.recoveryGame());
                    var limitTime = 2500,
                        appCfg = Confings_1.default.Instance.getAppCfg(),
                        failMsg = "分享失败！",
                        handler = this.handler,
                        shareType = this.curShareType;
                    if (handler) {
                        if (appCfg) {
                            limitTime = appCfg.shareSuccTime;
                            var shareFail = appCfg.shareFail,
                                failMsgs = appCfg.failMsgs;
                            if (failMsgs) {
                                var count = failMsgs.length;
                                failMsg = failMsgs[Math.floor(Math.random() * count)]
                            }
                            if (100 * Math.random() < shareFail) return LayerRoot_1.default.Instance.openScene("dialog/ShareFail.scene", !1, {
                                shareType: shareType,
                                failMsg: failMsg,
                                handler: handler
                            }), GameControl_1.default.Instance.pauseGame(), this.shareTime = 0, this.curShareType = null, void(this.handler = void 0)
                        }
                        var now = (new Date).getTime(),
                            shareTime = this.shareTime;
                        shareTime > 0 && (now - shareTime > limitTime ? handler && (handler.runWith(!0), handler.clear(), this.handler = void 0) : (LayerRoot_1.default.Instance.openScene("dialog/ShareFail.scene", !1, {
                            shareType: shareType,
                            failMsg: failMsg,
                            handler: handler
                        }), GameControl_1.default.Instance.pauseGame()), this.shareTime = 0, this.handler = void 0, this.curShareType = null)
                    } else GameControl_1.default.Instance && GameControl_1.default.Instance.recoveryGame()
                }, ShareManager.prototype.toTempFilePathSync = function(x, y, width, height, title, destWidth, destHeight, fileType, quality) {}, ShareManager
            }();
        exports.ShareManager = ShareManager
    }, {
        "../game/core/CoreFunction": 7,
        "../game/core/MessageCenter": 10,
        "../game/data/Confings": 23,
        "../game/data/GameData": 24,
        "../game/scene/LayerRoot": 52,
        "../game/script/GameControl": 56,
        "./VideoManager": 112
    }],
    111: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var AudioManager_1 = require("./AudioManager"),
            ResConfig_1 = require("../game/core/ResConfig"),
            SoundManager = function() {
                function SoundManager() {}
                return Object.defineProperty(SoundManager, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new SoundManager), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), SoundManager.prototype.playWarning = function() {
                    AudioManager_1.AudioManager.Instance.playSound(ResConfig_1.ResConfig.getSound("warning"))
                }, SoundManager.prototype.playHeCheng = function() {
                    AudioManager_1.AudioManager.Instance.playSound(ResConfig_1.ResConfig.getSound("hechengchenggong"))
                }, SoundManager.prototype.playGold = function() {
                    AudioManager_1.AudioManager.Instance.playSound(ResConfig_1.ResConfig.getSound("gold"))
                }, SoundManager.prototype.playWin = function() {
                    AudioManager_1.AudioManager.Instance.playSound(ResConfig_1.ResConfig.getSound("win"))
                }, SoundManager.prototype.playFail = function() {
                    AudioManager_1.AudioManager.Instance.playSound(ResConfig_1.ResConfig.getSound("lost"))
                }, SoundManager.prototype.playName = function(name) {
                    "0" != name && AudioManager_1.AudioManager.Instance.playSound(ResConfig_1.ResConfig.getSound("" + name))
                }, SoundManager
            }();
        exports.default = SoundManager
    }, {
        "../game/core/ResConfig": 11,
        "./AudioManager": 108
    }],
    112: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var VideoManager = function() {
            function VideoManager() {}
            return Object.defineProperty(VideoManager, "Instance", {
                get: function() {
                    return this._instance || (this._instance = new VideoManager), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), VideoManager.prototype.showRewardAd = function(adType, closeHanlder, errorHanlder) {
                closeHanlder && closeHanlder.runWith(!0)
            }, VideoManager.prototype.playRewardAd = function(closeHanlder) {}, VideoManager.prototype.showBannerAd = function() {}, VideoManager.prototype.hideBannerAd = function() {}, VideoManager
        }();
        exports.VideoManager = VideoManager
    }, {}],
    113: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Log_1 = require("../game/core/utility/Log"),
            CoreFunction_1 = require("../game/core/CoreFunction"),
            GameData_1 = require("../game/data/GameData"),
            AudioManager_1 = require("./AudioManager"),
            Confings_1 = require("../game/data/Confings"),
            WxSDK = function() {
                function WxSDK() {
                    this._WX_ROOT = "", this.rewardAdDic = {}, this.sdkVersion = null
                }
                return Object.defineProperty(WxSDK, "Instance", {
                    get: function() {
                        return this._instance || (this._instance = new WxSDK), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), WxSDK.prototype.init = function() {}, WxSDK.prototype.setOnHide = function(callback) {}, Object.defineProperty(WxSDK.prototype, "WX_ROOT", {
                    get: function() {},
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(WxSDK.prototype, "launchOption", {
                    get: function() {},
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(WxSDK.prototype, "inviteid", {
                    get: function() {
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(WxSDK.prototype, "inviteopenid", {
                    get: function() {
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(WxSDK.prototype, "invitetype", {
                    get: function() {
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), WxSDK.prototype.loadSubpackage = function(name, complete) {
                    complete && complete.run()
                }, WxSDK.prototype.shareAppMessage = function(title, imageUrl, query, handler) {
                    Log_1.Log.trace(">>>>>>> shareAppMesage <<<<<<< "), Log_1.Log.trace("   title: " + imageUrl), query ? Log_1.Log.trace("   query: " + query) : query = "inviteopenid=" + GameData_1.default.Instance.openid, DDSDK.ShareAppMessage({
                        title: title,
                        imageUrl: imageUrl,
                        query: query,
                        success: function(res) {
                            console.log("------ shareAppMessage ok.")
                        },
                        fail: function(res) {
                            console.log("------ shareAppMessage failed, res: " + JSON.stringify(res))
                        },
                        complete: function(res) {
                            console.log("------ shareAppMessage complete, res: " + JSON.stringify(res));
                            var shareTickets = res.shareTickets;
                            shareTickets && shareTickets[0] && (res.shareTicket = shareTickets[0]), handler && handler.runWith(res)
                        },
                        cancel: function(res) {
                            console.log("------ shareAppMessage cancel, res: ", res), res.canceled = !0, handler && handler.runWith(res)
                        }
                    })
                }, WxSDK.prototype.showBannerAd = function(adUnitId) {
                    var _this = this;
                    if (this.getSDKVersion() < 204) CoreFunction_1.CoreFunction.tipMsg("Không thể hiển thị");
                    else {
                        console.log("[adUnitId:]", adUnitId);
                        var bannerAd = this.bannerAd,
                            canvas = window.canvas,
                            canvasWidth = parseInt(canvas.style.width),
                            canvasHeight = parseInt(canvas.style.height);
                        if (!bannerAd) {
                            var style = {
                                left: 0,
                                top: canvasHeight - 140,
                                width: canvasWidth,
                                height: 100
                            };
                            console.log("[style:]", style), bannerAd = this.bannerAd = wx.createBannerAd({
                                adUnitId: adUnitId,
                                style: style
                            })
                        }
                        bannerAd.onError(function(errorData) {
                            console.log("onError:" + JSON.stringify(errorData))
                        }), this.bannerAd.onResize(function(resize) {
                            console.log("onResize:" + JSON.stringify(resize));
                            var top = canvasHeight - resize.height;
                            CoreFunction_1.CoreFunction.isIphoneX() && (top = canvasHeight - resize.height - 30), _this.bannerAd.style.top = top
                        }), bannerAd.onLoad(function() {
                            console.log("onLoad")
                        }), bannerAd.show(), console.log("bannerAd显示")
                    }
                }, WxSDK.prototype.hideBannerAd = function() {
                    null != this.bannerAd && (console.log("bannerAd关闭"), this.bannerAd.hide(), this.bannerAd.offError(null), this.bannerAd.offResize(null), this.bannerAd.offLoad(null), this.bannerAd.destroy(), this.bannerAd = null)
                }, WxSDK.prototype.showRewardAd = function(adUnitId, closeHanlder, errorHanlder) {
                    var rewardAd = this.rewardAdDic[adUnitId];
                    rewardAd || (rewardAd = this.rewardAdDic[adUnitId] = wx.createRewardedVideoAd({
                        adUnitId: adUnitId,
                        multiton: !0
                    })), rewardAd.load().then(function() {
                        rewardAd.show()
                    }).catch(function(e) {
                        console.log("[showRewardAd load]: ERROR"), errorHanlder && errorHanlder.run()
                    });
                    var closeCallback = function(res) {
                            closeHanlder && closeHanlder.runWith(res.isEnded), AudioManager_1.AudioManager.Instance.playBgm(), rewardAd.offClose(closeCallback), rewardAd.offError(errorCallback), console.log("[closeCallback]:", res)
                        },
                        errorCallback = function(res) {
                            console.log("[errorCallback]: ERROR"), errorHanlder && errorHanlder.run(), rewardAd.offClose(closeCallback), rewardAd.offError(errorCallback)
                        };
                    rewardAd.onClose(closeCallback), rewardAd.onError(errorCallback)
                }, WxSDK.prototype.vibrateShort = function() {}, WxSDK.prototype.vibrateLong = function() {}, WxSDK.prototype.download = function(url, folder, res_name, callBack) {}, WxSDK.prototype.fileRemove = function(dir, callback) {}, WxSDK.prototype.downloadFile = function(url, root, name, callBack) {
                    console.log("下载链接:" + url);
                    var nativePath = this.WX_ROOT + "/" + root + "/" + name;
                    console.log("nativePath:" + nativePath);
                    wx.downloadFile({
                        url: url,
                        header: {},
                        filePath: nativePath,
                        success: function(res) {
                            console.log(JSON.stringify(res)), callBack(!0)
                        },
                        fail: function(res) {
                            console.log(JSON.stringify(res)), console.log("下载失败:" + url), callBack(!1)
                        }
                    })
                }, WxSDK.prototype.hasDirectory = function(dirName, callback) {
                    var fs = this.getFileManager(),
                        allPath = this.WX_ROOT + "/" + dirName;
                    fs.access({
                        path: allPath,
                        success: function() {
                            callback(!0)
                        },
                        fail: function() {
                            callback(!1)
                        }
                    })
                }, WxSDK.prototype.hasFile = function(url, callback) {
                    var fs = this.getFileManager(),
                        allPath = this.WX_ROOT + "/" + url;
                    fs.access({
                        path: allPath,
                        success: function() {
                            callback(!0)
                        },
                        fail: function() {
                            callback(!1)
                        }
                    })
                }, WxSDK.prototype.mkdirSync = function(dirName) {
                    this.getFileManager().mkdirSync(this.WX_ROOT + "/" + dirName)
                }, WxSDK.prototype.getFileManager = function() {
                    return this._fs || (this._fs = wx.getFileSystemManager()), this._fs
                }, WxSDK.prototype.getSDKVersion = function() {
                    if (null == this.sdkVersion) {
                        var sdkVersion = wx.getSystemInfoSync().SDKVersion;
                        sdkVersion = (sdkVersion = sdkVersion.replace(/\./g, "")).substr(0, 3);
                        var sdkVersionNum = parseInt(sdkVersion);
                        this.sdkVersion = sdkVersionNum, console.log("wxSDK:" + sdkVersionNum)
                    }
                    return this.sdkVersion
                }, WxSDK.prototype.setUserCloudStorage = function() {}, WxSDK.prototype.requestSubscribeMessage = function(tmplIds, success, fail) {
                    this.getSDKVersion() < 282 && CoreFunction_1.CoreFunction.tipMsg("Không thể hiển thị")
                }, WxSDK.prototype.createUserInfoButton = function(target, cb) {
                    var left, top, width, height;
                    Laya.timer.once(200, this, function() {
                        var shareCfg = Confings_1.default.Instance.getAppCfg(),
                            uInfo = GameData_1.default.Instance.userInfo;
                        if (!uInfo && shareCfg && shareCfg.getuserinfo) {
                            var point = Laya.Point.create();
                            point.setTo(target.x, target.y), target.parent.localToGlobal(point, !1);
                            var systemInfo = wx.getSystemInfoSync(),
                                pixelRatioX = systemInfo.windowWidth / Laya.stage.displayWidth,
                                pixelRatioY = systemInfo.windowHeight / Laya.stage.displayHeight;
                            left = point.x * pixelRatioX, top = point.y * pixelRatioY, width = target.width * pixelRatioX, height = target.height * pixelRatioY;
                            var style = {
                                    left: left,
                                    top: top,
                                    width: width,
                                    height: height
                                },
                                button = wx.createUserInfoButton({
                                    withCredentials: !0,
                                    style: style,
                                    type: "image",
                                    text: "",
                                    image: "loading/login.png"
                                });
                            button.onTap(function(res) {
                                console.log("[UserInfo]:", res), "getUserInfo:ok" == res.errMsg ? (res.userInfo && !uInfo && (GameData_1.default.Instance.userInfo = res.userInfo, GameData_1.default.Instance.upload()), DDSDK.logEvent("shouquansuccess", {})) : DDSDK.logEvent("shouquanfail", {}), cb && cb.run(), button.hide()
                            }), button.show()
                        } else cb && cb.run()
                    })
                }, WxSDK.prototype.checkForUpdate = function() {}, WxSDK.prototype.onMemoryWarning = function() {}, WxSDK.prototype.triggerGC = function() {
                    console.warn("[triggerGC]"), wx.triggerGC()
                }, WxSDK
            }();
        exports.default = WxSDK
    }, {
        "../game/core/CoreFunction": 7,
        "../game/core/utility/Log": 20,
        "../game/data/Confings": 23,
        "../game/data/GameData": 24,
        "./AudioManager": 108
    }]
}, {}, [2]);