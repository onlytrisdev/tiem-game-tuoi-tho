! function(t) {
    function e(e) {
        for (var a, r, o = e[0], h = e[1], c = e[2], l = 0, p = []; l < o.length; l++) r = o[l], s[r] && p.push(s[r][0]), s[r] = 0;
        for (a in h) Object.prototype.hasOwnProperty.call(h, a) && (t[a] = h[a]);
        for (u && u(e); p.length;) p.shift()();
        return n.push.apply(n, c || []), i()
    }

    function i() {
        for (var t, e = 0; e < n.length; e++) {
            for (var i = n[e], a = !0, o = 1; o < i.length; o++) {
                var h = i[o];
                0 !== s[h] && (a = !1)
            }
            a && (n.splice(e--, 1), t = r(r.s = i[0]))
        }
        return t
    }
    var a = {},
        s = {
            0: 0
        },
        n = [];

    function r(e) {
        if (a[e]) return a[e].exports;
        var i = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = t, r.c = a, r.d = function(t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) r.d(i, a, function(e) {
                return t[e]
            }.bind(null, a));
        return i
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "";
    var o = window.webpackJsonp = window.webpackJsonp || [],
        h = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var c = 0; c < o.length; c++) e(o[c]);
    var u = h;
    n.push([166, 1, 2, 3]), i()
}(Array(61).concat([function(t, e, i) {
    var a, s;

    function n(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }
    i.r(e), i.d(e, "config", function() {
        return r
    });
    var r = {
        toggoKey: "playmobil-knights-brawler-03",
        storageKey: "playmobil-knights-brawler-03",
        midRollInterval: 180,
        textNameInputError: "Vui lòng chọn tên khác",
        PLAYER_CHARACTERS: [{
            ID: 1,
            MODEL: "playerChar_01",
            COLOR_BASE: "#52cdcc",
            COLOR_HIGHLIGHT: "#41fafa",
            SOUND_ATTACK: ["attack01", "attack02", "attack03"]
        }, {
            ID: 2,
            MODEL: "playerChar_02",
            COLOR_BASE: "#52cdcc",
            COLOR_HIGHLIGHT: "#41fafa",
            SOUND_ATTACK: ["attack01", "attack02", "attack03"]
        }, {
            ID: 3,
            MODEL: "playerChar_03",
            COLOR_BASE: "#52cdcc",
            COLOR_HIGHLIGHT: "#41fafa",
            SOUND_ATTACK: ["attack01", "attack02", "attack03"]
        }],
        PLAYER_STATS: {
            MESH_SCALE: 2,
            RADIUS: 1.5,
            ENABLE_RUN: !1,
            SPEED: 7,
            TRIGGER_RUN_DIST: 7,
            HEALTH: 200,
            ENERGY: 100,
            SPECIAl_ENERGY: 100,
            ENERGY_PER_SECOND: 20,
            INVUL_TIME: 1.25,
            INVUL_FLICKER_TIME: .1,
            COMBO_RESET_ON_MISS: !0,
            COMBO_RESET_ON_HIT: !0,
            COMBO_RESET_ON_TIME: !1,
            COMBO_RESET_TIME: 2.5,
            COMBO_MAX_CAP: !1,
            COMBO_MAX_SCORE: 10,
            ATTACKS: {
                PUNCH: {
                    DAMAGE: 13,
                    ENERGY: 15,
                    RANGE: 3.5,
                    DOT_ANGLE: .7,
                    CAMERA_SHAKE: 0,
                    KNOCKBACK: 15,
                    TRAVEL: 10
                },
                KICK: {
                    DAMAGE: 45,
                    ENERGY: 30,
                    RANGE: 6,
                    DOT_ANGLE: .5,
                    CHARGE_TIME: .5,
                    FREEZE_FRAMES: .3,
                    CAMERA_SHAKE: .4,
                    KNOCKBACK: 40,
                    TRAVEL: 25
                },
                SPECIAL: {
                    DAMAGE: 60,
                    DURATION: 10,
                    SPEED: 10,
                    ENERGY: 100,
                    RANGE: 3.5,
                    DOT_ANGLE: 0,
                    FREEZE_FRAMES: .5,
                    CAMERA_SHAKE: .6,
                    KNOCKBACK: 80,
                    ROTATION_SPEED_PLAYER: 20
                }
            }
        },
        WAVE: {
            MAX_AGENTS: 8,
            FUND_INCREASE_DELAY: 30,
            FUND_INCREASE_RATE: 3,
            FUND_MAX: 36,
            SPEND_DELAY: 1,
            REFUND_FACTOR: 1,
            FUNDS_START: 3
        },
        PICKUPS: {
            SPECIAL_ENERGY_CHANCE: .21,
            ENERGY: {
                CHARGE: 25
            },
            ENERGY_SPECIAL: {
                CHARGE: 25
            }
        },
        AGENT_TYPES: {
            EASY: "EASY",
            MEDIUM: "MEDIUM",
            HARD: "HARD",
            BOSS: "BOSS"
        }
    };
    r.AGENT_STATS = {
        MESH_SCALE: 2,
        RADIUS: 1.5,
        KNOCK_DAMAGE: 20,
        KNOCK_DAMAGE_IGNORE: 50,
        AGENTS: (a = {}, n(a, r.AGENT_TYPES.EASY, {
            ANIM_KEY_ACTION: "enemy_action_01",
            ANIM_KEY_ANTICIPATION: "enemy_anticipation_01",
            KEY: r.AGENT_TYPES.EASY,
            MODEL: "enemy_01",
            COST: 1.5,
            HEALTH: 15,
            DAMAGE: 20,
            RANGE: 5,
            DOT_ANGLE: .75,
            TAUNT_CHANCE: .7,
            TAUNT_DELAY: 1,
            ATTACK_CHARGE_TIME: .7,
            MAX_DROPS: 2,
            POINTS: 1,
            SPEED: 5
        }), n(a, r.AGENT_TYPES.MEDIUM, {
            ANIM_KEY_ACTION: "enemy_action_02",
            ANIM_KEY_ANTICIPATION: "enemy_anticipation_02",
            KEY: r.AGENT_TYPES.MEDIUM,
            MODEL: "enemy_02",
            COST: 6.5,
            HEALTH: 30,
            DAMAGE: 70,
            RANGE: 5,
            DOT_ANGLE: .75,
            TAUNT_CHANCE: .5,
            TAUNT_DELAY: 1,
            ATTACK_CHARGE_TIME: 2.5,
            MAX_DROPS: 2,
            POINTS: 3,
            SPEED: 3
        }), n(a, r.AGENT_TYPES.HARD, {
            ANIM_KEY_ACTION: "enemy_action_03",
            ANIM_KEY_ANTICIPATION: "enemy_anticipation_03",
            KEY: r.AGENT_TYPES.HARD,
            MODEL: "enemy_03",
            COST: 12.75,
            HEALTH: 60,
            DAMAGE: 45,
            RANGE: 5,
            DOT_ANGLE: .75,
            TAUNT_CHANCE: .3,
            TAUNT_DELAY: 1,
            ATTACK_CHARGE_TIME: 1,
            MAX_DROPS: 1,
            POINTS: 6,
            SPEED: 5
        }), n(a, r.AGENT_TYPES.BOSS, {
            ANIM_KEY_ACTION: "enemy_action_04",
            ANIM_KEY_ANTICIPATION: "enemy_anticipation_04",
            KEY: r.AGENT_TYPES.BOSS,
            MODEL: "enemy_04",
            COST: 0,
            HEALTH: 100,
            DAMAGE: 100,
            RANGE: 5,
            DOT_ANGLE: .75,
            TAUNT_CHANCE: 0,
            TAUNT_DELAY: 0,
            ATTACK_CHARGE_TIME: 1,
            MAX_DROPS: 3,
            POINTS: 6,
            SPEED: 5,
            SPAWN_DELAY: 30,
            HEALTH_INCREASE_PER_DEATH: 100
        }), a)
    }, r.TUTORIAL_EVENT = {
        PUNCH: "PUNCH",
        KICK: "KICK",
        KILL: "KILL",
        DEATH: "DEATH",
        SPECIAL: "SPECIAL"
    };
    var o = r.TUTORIAL_EVENT;
    r.TUTORIAL = (n(s = {
        minInputAdvanceTime: .5,
        steps: [{
            textMobile: "Bấm chuột hoặc chạm để tấn công theo hướng chỉ định.",
            textDesktop: "Bấm chuột hoặc chạm để tấn công theo hướng chỉ định.",
            advanceEvent: o.PUNCH
        }, {
            textMobile: "Bấm, giữ và nhả ra để tấn công bằng tuyệt chiêu.",
            textDesktop: "Bấm, giữ và nhả ra để tấn công bằng tuyệt chiêu.",
            advanceEvent: o.KICK
        }, {
            text: "Hạ gục quân địch để tăng thêm năng lượng.",
            advanceEvent: o.KILL,
            spawnTutorialEnemy: !0,
            time: 1e-4,
            timeoutHide: !0
        }]
    }, o.DEATH, {
        text: "explain life and death",
        advanceEvent: o.DEATH,
        singleEvent: !0,
        freezeTime: !0,
        inputAdvance: !0
    }), n(s, o.SPECIAL, {
        text: "Đòn tuyệt chiêu sẽ sử dụng hết toàn bộ năng lượng! Bấm để kích hoạt.",
        advanceEvent: o.SPECIAL,
        singleEvent: !0,
        freezeTime: !0,
        showArrow: !0
    }), s)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    var a = {
        "./atlas/button": 117,
        "./atlas/button.json": 117,
        "./atlas/button.png": 343,
        "./atlas/button.webp": 344,
        "./atlas/frame": 118,
        "./atlas/frame.json": 118,
        "./atlas/frame.png": 345,
        "./atlas/frame.webp": 346,
        "./atlas/label": 119,
        "./atlas/label.json": 119,
        "./atlas/label.png": 347,
        "./atlas/label.webp": 348,
        "./atlas/preload": 120,
        "./atlas/preload.json": 120,
        "./atlas/preload.png": 349,
        "./atlas/preload.webp": 350,
        "./data/basePack": 121,
        "./data/basePack.json": 121,
        "./data/config": 61,
        "./data/config.js": 61,
        "./data/gamePack": 122,
        "./data/gamePack.json": 122,
        "./data/menuPack": 123,
        "./data/menuPack.json": 123,
        "./font/Roboto-Medium.css": 351,
        "./font/Roboto-Medium.woff": 124,
        "./font/Roboto-Regular.css": 352,
        "./font/Roboto-Regular.woff": 125,
        "./font/RobotoCondensed-Bold.css": 353,
        "./font/RobotoCondensed-Bold.woff": 126,
        "./font/RobotoCondensed-BoldItalic.css": 354,
        "./font/RobotoCondensed-BoldItalic.woff": 127,
        "./font/RobotoCondensed-Regular.css": 355,
        "./font/RobotoCondensed-Regular.woff": 128,
        "./font/RobotoCondensedBold.css": 356,
        "./font/RobotoCondensedBold.woff": 129,
        "./font/SquadaOne-Regular.css": 357,
        "./font/SquadaOne-Regular.woff": 130,
        "./image/default.jpg": 358,
        "./image/default.webp": 359,
        "./image/loading.jpg": 360,
        "./image/loading.webp": 361,
        "./image/start.jpg": 362,
        "./image/start.webp": 363,
        "./layout/end": 131,
        "./layout/end.json": 131,
        "./layout/highscore": 132,
        "./layout/highscore.json": 132,
        "./layout/ingame": 133,
        "./layout/ingame.json": 133,
        "./layout/nameEntry": 134,
        "./layout/nameEntry.json": 134,
        "./layout/options": 135,
        "./layout/options.json": 135,
        "./layout/preload": 136,
        "./layout/preload.json": 136,
        "./layout/start": 137,
        "./layout/start.json": 137,
        "./layout/tutorial": 138,
        "./layout/tutorial.json": 138,
        "./model/chargeIndicator.png": 364,
        "./model/dissolve.png": 365,
        "./model/enemy_01": 139,
        "./model/enemy_01.json": 139,
        "./model/enemy_02": 140,
        "./model/enemy_02.json": 140,
        "./model/enemy_03": 141,
        "./model/enemy_03.json": 141,
        "./model/enemy_04": 142,
        "./model/enemy_04.json": 142,
        "./model/enemy_atlas.png": 366,
        "./model/env": 143,
        "./model/env.json": 143,
        "./model/env.png": 367,
        "./model/playerChar_01": 144,
        "./model/playerChar_01.json": 144,
        "./model/playerChar_02": 145,
        "./model/playerChar_02.json": 145,
        "./model/playerChar_03": 146,
        "./model/playerChar_03.json": 146,
        "./model/playerChar_atlas.png": 368,
        "./model/shadow.png": 369,
        "./model/sheepScene": 147,
        "./model/sheepScene.json": 147,
        "./model/tornado.png": 370,
        "./model/tornado_core": 148,
        "./model/tornado_core.json": 148,
        "./particle/agent_smoke": 149,
        "./particle/agent_smoke.json": 149,
        "./particle/bossAura": 150,
        "./particle/bossAura.json": 150,
        "./particle/bossAura.png": 371,
        "./particle/bossSparks": 151,
        "./particle/bossSparks.json": 151,
        "./particle/bossSparks.png": 372,
        "./particle/charge": 152,
        "./particle/charge.json": 152,
        "./particle/circle.png": 373,
        "./particle/dust.png": 374,
        "./particle/dustCircle": 153,
        "./particle/dustCircle.json": 153,
        "./particle/glow.png": 375,
        "./particle/ground_smoke_big": 154,
        "./particle/ground_smoke_big.json": 154,
        "./particle/ground_smoke_small": 155,
        "./particle/ground_smoke_small.json": 155,
        "./particle/pickup_energy": 156,
        "./particle/pickup_energy.json": 156,
        "./particle/pickup_health": 157,
        "./particle/pickup_health.json": 157,
        "./particle/pickup_special": 158,
        "./particle/pickup_special.json": 158,
        "./particle/pow": 159,
        "./particle/pow.json": 159,
        "./particle/pow01.png": 376,
        "./particle/pow02.png": 377,
        "./particle/swirlFloor": 160,
        "./particle/swirlFloor.json": 160,
        "./particle/torch": 161,
        "./particle/torch.json": 161,
        "./particle/torch_flames.png": 378,
        "./shader/agent_fs.glsl": 379,
        "./shader/agent_vs.glsl": 380,
        "./shader/cylinder_fs.glsl": 381,
        "./shader/cylinder_vs.glsl": 382,
        "./shader/env_fog_fs.glsl": 383,
        "./shader/env_fog_vs.glsl": 384,
        "./shader/shadow_fs.glsl": 385,
        "./shader/shadow_vs.glsl": 386,
        "./snd/attack01.m4a": 387,
        "./snd/attack01.ogg": 388,
        "./snd/attack02.m4a": 389,
        "./snd/attack02.ogg": 390,
        "./snd/attack03.m4a": 391,
        "./snd/attack03.ogg": 392,
        "./snd/attackSpecial.m4a": 393,
        "./snd/attackSpecial.ogg": 394,
        "./snd/bossAttack.m4a": 395,
        "./snd/bossAttack.ogg": 396,
        "./snd/bossEnter.m4a": 397,
        "./snd/bossEnter.ogg": 398,
        "./snd/bossKo.m4a": 399,
        "./snd/bossKo.ogg": 400,
        "./snd/button.m4a": 401,
        "./snd/button.ogg": 402,
        "./snd/enemtTaunt01.m4a": 403,
        "./snd/enemtTaunt01.ogg": 404,
        "./snd/enemyFall.m4a": 405,
        "./snd/enemyFall.ogg": 406,
        "./snd/enemyOut01.m4a": 407,
        "./snd/enemyOut01.ogg": 408,
        "./snd/enemyOut02.m4a": 409,
        "./snd/enemyOut02.ogg": 410,
        "./snd/enemyOut03.m4a": 411,
        "./snd/enemyOut03.ogg": 412,
        "./snd/enemyOut04.m4a": 413,
        "./snd/enemyOut04.ogg": 414,
        "./snd/enemyOut05.m4a": 415,
        "./snd/enemyOut05.ogg": 416,
        "./snd/enemyOut06.m4a": 417,
        "./snd/enemyOut06.ogg": 418,
        "./snd/enemyOut07.m4a": 419,
        "./snd/enemyOut07.ogg": 420,
        "./snd/fallFloor.m4a": 421,
        "./snd/fallFloor.ogg": 422,
        "./snd/fallFloorMetal.m4a": 423,
        "./snd/fallFloorMetal.ogg": 424,
        "./snd/hit1.m4a": 425,
        "./snd/hit1.ogg": 426,
        "./snd/hit2.m4a": 427,
        "./snd/hit2.ogg": 428,
        "./snd/ko.m4a": 429,
        "./snd/ko.ogg": 430,
        "./snd/music.m4a": 431,
        "./snd/music.ogg": 432,
        "./snd/score.m4a": 433,
        "./snd/score.ogg": 434,
        "./snd/start.m4a": 435,
        "./snd/start.ogg": 436,
        "./snd/stompIn.m4a": 437,
        "./snd/stompIn.ogg": 438,
        "./snd/swoosh.m4a": 439,
        "./snd/swoosh.ogg": 440,
        "./snd/victory.m4a": 441,
        "./snd/victory.ogg": 442
    };

    function s(t) {
        var e = n(t);
        return i(e)
    }

    function n(t) {
        var e = a[t];
        if (!(e + 1)) {
            var i = new Error("Cannot find module '" + t + "'");
            throw i.code = "MODULE_NOT_FOUND", i
        }
        return e
    }
    s.keys = function() {
        return Object.keys(a)
    }, s.resolve = n, t.exports = s, s.id = 116
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/button_7cebaf98a3ed5b1619bf0d65b3952aeb.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/frame_be088e6ae61d3560d40969b15f3bd923.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/label_2d0d0db2a2d2b7848ba38a55089eb098.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/preload_38d27a10370e3c9395d064d40f57543b.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/data/basePack_e3650c12a433fa2ff10544fbe4f5b555.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/data/gamePack_18eac474f313080227b598cbe816107f.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/data/menuPack_a65aa76631e66405de4208e91a140944.json"
}, function(t, e) {
    t.exports = "../../assets/font/Roboto-Medium_c6d3c1cc9f10c735395b375fe9074970.woff"
}, function(t, e) {
    t.exports = "../../assets/font/Roboto-Regular_dfdf538d897e867b818a71436f33927e.woff"
}, function(t, e) {
    t.exports = "../../assets/font/RobotoCondensed-Bold_dd74f279715903e447c0269bf14d1744.woff"
}, function(t, e) {
    t.exports = "../../assets/font/RobotoCondensed-BoldItalic_e43d3ee19b7895e773d2826287b339c5.woff"
}, function(t, e) {
    t.exports = "../../assets/font/RobotoCondensed-Regular_cce62693acc0a2a7bc517852bc4f99b9.woff"
}, function(t, e) {
    t.exports = "../../assets/font/RobotoCondensedBold_1c848d055d96a42d9321367d9bbdec9f.woff"
}, function(t, e) {
    t.exports = "../../assets/font/SquadaOne-Regular_6fb198481a6596874b3eeb488bb7f526.woff"
}, function(t, e, i) {
    t.exports = i.p + "assets/layout/end_e815327da39df82d043f7924934279cf.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/layout/highscore_3cdd3a23c50f23e36b3a6359be80e117.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/layout/ingame_b617225a97eaa858e69d9544a557dbfe.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/layout/nameEntry_b86843a5b8b32bf87f2cab34d536b72e.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/layout/options_ed48e1dd40e9c42af9e90357995efd23.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/layout/preload_9bee207d06f6f54d374559ee7c7c1479.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/layout/start_72ccbd926420b759fa6f52928ca06759.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/layout/tutorial_88159a2bdfd0af193133c993f76f8b54.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/enemy_01_a7599babf37384ef3d715131c22077d5.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/enemy_02_4b5db5e3737e269962216554761c8769.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/enemy_03_dccbbc6eb26a0c10eb7fdee75c1e84a1.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/enemy_04_a19a70a98553b47497ca40da2a207913.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/env_b623f40a4b15d7a3ea308ca4d08fcfca.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/playerChar_01_92ef5788a858ac89b9c68665f0d4c462.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/playerChar_02_fe05d9f9716faa4fa66cea4348335a3b.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/playerChar_03_119e4a84d363848b51e1f28bdb9e3829.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/sheepScene_1ecda91a5ad9c208f188f1892e3ade77.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/tornado_core_0f0482a2b3abc2cdaabe0293e15b8b09.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/agent_smoke_b1d58f55512e16dc2301bf682b6c7bea.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/bossAura_2334050a3599f5ceb50f3ef9bffc0148.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/bossSparks_a0613f7c3e183a6bd7e0c6bbd00e35f0.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/charge_b6be6d23fe1ab9f18bf34fcd2680f2a9.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/dustCircle_8eadb7f58cd0e217843fea5e7a7c2384.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/ground_smoke_big_315626a21b46f9983ca75a8ffd1e80d8.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/ground_smoke_small_656e8fdaa553aa438c2be4a8ad7e43fe.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/pickup_energy_f1bcaa58dac28cae1904b23ef8aa360b.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/pickup_health_98f3c1c57a4be71c0df96b8cc2b8b8e1.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/pickup_special_a1b602e2b1f34a6f2245f24de4071026.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/pow_0b719bdae096da26ce0d5b5e8550e460.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/swirlFloor_7f5f66f473ba69aa6a79cf3b60a8fb9f.json"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/torch_37de733e311dc5ecd4dba8b2b6b2c9c1.json"
}, , , , , function(t, e, i) {
    i(167), i(333), i(335), i(337), i(340), i(0), t.exports = i(447)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    t.exports = i.p + "assets/atlas/button_28469aa9d56390f23525f0ca8f6c99a2.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/button_ec49e966d66ad9cbbe5930d7b814ebb1.webp"
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/frame_da2457e103785eaf1d572df5387af66e.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/frame_5285be0acbc8095aaf0e858ff7e1b0f3.webp"
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/label_4e7c63489cd6ba4c96ab5f9903594130.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/label_5d29355aa05c452b73ec0d1cf1fafe97.webp"
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/preload_73a7ff44a41d772bdb10eef76e863954.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/atlas/preload_7944e4f05d03f0e9ddc5dd4392479309.webp"
}, function(t, e, i) {
    t.exports = i.p + "assets/font/Roboto-Medium_cf45d1536c2523cb3bdc3ef726a0a5b2.css"
}, function(t, e, i) {
    t.exports = i.p + "assets/font/Roboto-Regular_fbbae6f65be82c730208ef2a7686fdd9.css"
}, function(t, e, i) {
    t.exports = i.p + "assets/font/RobotoCondensed-Bold_c0f31fa36e0c340281ba146fd7060a20.css"
}, function(t, e, i) {
    t.exports = i.p + "assets/font/RobotoCondensed-BoldItalic_e7eff458000e266571aa8fbdcedfcb66.css"
}, function(t, e, i) {
    t.exports = i.p + "assets/font/RobotoCondensed-Regular_df2236e3c8096a1096e76c87d0d04a0d.css"
}, function(t, e, i) {
    t.exports = i.p + "assets/font/RobotoCondensedBold_5acc5e2d28ee1d7f47c5d3fc02535c73.css"
}, function(t, e, i) {
    t.exports = i.p + "assets/font/SquadaOne-Regular_75fa095f67cc4b98751cbafc3fd891af.css"
}, function(t, e, i) {
    t.exports = i.p + "assets/image/default_6cf21f9aad4244182a68a6eab7054f00.jpg"
}, function(t, e, i) {
    t.exports = i.p + "assets/image/default_5d37f1ae3788aea71875c2d9d3315db9.webp"
}, function(t, e, i) {
    t.exports = i.p + "assets/image/loading_6cf21f9aad4244182a68a6eab7054f00.jpg"
}, function(t, e, i) {
    t.exports = i.p + "assets/image/loading_5d37f1ae3788aea71875c2d9d3315db9.webp"
}, function(t, e, i) {
    t.exports = i.p + "assets/image/start_8154e680f1f058466a9d84204402f277.jpg"
}, function(t, e, i) {
    t.exports = i.p + "assets/image/start_4107b82941c5bada4d860e0dcf2ee6c9.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/chargeIndicator_2bca4c601025bb5ed9de1dee603a35b1.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/dissolve_f97e42ebc97fb91e21816cdd748c6bc3.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/enemy_atlas_6f4046ee9a885d19916b1729eb653a4c.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/env_79a91c332d97394e05ed08356d3cf57d.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/playerChar_atlas_e42f33ed254fc6c8d2e5f0d8a46ec58e.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/shadow_4ec01adbd4d63d35ca255acb825f6b23.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/model/tornado_7f3910200c28b9ca367539db29d6e6d5.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/bossAura_34db9517690d45c7d7c0930ac1b331b9.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/bossSparks_f6c321b33f9c4c748b22fba341ac8379.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/circle_a1b7b4fd40508993fdf122191a03091c.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/dust_18e5ef771a6abf9c199c32a1c56082c3.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/glow_4c285b489ed284e53cda346da8d6cbd8.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/pow01_bd71d1c02ff63573df7d98449748f0b6.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/pow02_18ca530d6db76fc8b7080693a80813df.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/particle/torch_flames_81a9059b3cb170237ff7a0df6237549e.png"
}, function(t, e, i) {
    t.exports = i.p + "assets/shader/agent_fs_a4d655c74ffda14dd201c5e4b00b4aa8.glsl"
}, function(t, e, i) {
    t.exports = i.p + "assets/shader/agent_vs_aaf25e9febc7e34a6a2a038b18c24b35.glsl"
}, function(t, e, i) {
    t.exports = i.p + "assets/shader/cylinder_fs_9abca3d1c2cac611817cb468e3c07e73.glsl"
}, function(t, e, i) {
    t.exports = i.p + "assets/shader/cylinder_vs_dcd41e21136ac25ca254614918749429.glsl"
}, function(t, e, i) {
    t.exports = i.p + "assets/shader/env_fog_fs_30c2fab813343ac19a392526ea010ec4.glsl"
}, function(t, e, i) {
    t.exports = i.p + "assets/shader/env_fog_vs_100d35c33e18aa817b57b15d1c4dcb07.glsl"
}, function(t, e, i) {
    t.exports = i.p + "assets/shader/shadow_fs_8fef6093e3eb66671dce17e3fd2fff6e.glsl"
}, function(t, e, i) {
    t.exports = i.p + "assets/shader/shadow_vs_9d737fb3cd6f8ca14845efab278ae127.glsl"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/attack01_2bedda9b587d6816e82bf0c86849ee44.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/attack01_86b9e157e3d5ed3743c8cb8ca20332a5.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/attack02_7f83d28783c4ec46654723569bf5e62b.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/attack02_8728b9c1555f83feb16546ef22b63761.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/attack03_551864d811dce4983e8e66220289e6b1.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/attack03_16ffd405f569a3006d3e416b4417bc33.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/attackSpecial_995ccaf44d23d36e3902079fe4d77257.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/attackSpecial_67393dae74305bffbe85966b06e11de6.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/bossAttack_2a064de3ed115636be87fa2b083b780d.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/bossAttack_019871ac073373580c0ba9bd43c4f9cc.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/bossEnter_9438415a88f2b045654afe20e3747832.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/bossEnter_9ad6217ec3d097ef3c91bff6f6c8a5a1.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/bossKo_ebf968aee21f10c178f5936c5e7a5953.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/bossKo_235169a6fd0d8a44bf9dbd75fed32e4a.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/button_4adb67b892594813d77e66affe5f7a2e.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/button_3b4b8f1f7162553047e16e6b7750c657.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemtTaunt01_81fe82657473b4d499cf43656540c3b4.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemtTaunt01_4c1ca88e9260806d86c5c2d8be0817b4.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyFall_de808de701d3943479e944fab8b5eaa6.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyFall_2ef2382db5c243bd40a5eea4983432d2.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut01_97c4eabb750393a0914bc87dd67bf1ec.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut01_d039ba82c023d6c2c52a0e8abf63ad71.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut02_e4969035256a06a4a20eb33979a7ae75.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut02_8642b1dc7b6a362d48eedfe4070ff696.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut03_ef4f1f2c308767980ece5b35adc3527f.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut03_f57bcabee178a9c1bfe6180474f53e27.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut04_de0df971175039e0e596094025879344.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut04_97d47fbdc517a2e4f683971ce65d1999.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut05_2dde80bb4afee7bd348439c5dd69cb20.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut05_826f92213a2ac815e6836a2b4b4cf4f7.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut06_556dc493052ef52f34dc4631300b05af.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut06_3ff72243e17eda3692bc0cc700a65b74.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut07_64b563d1e15fa5cb95ac7ed03c2d04bf.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/enemyOut07_de32907011b1e6058369d879e7e731f3.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/fallFloor_9ee007303b57474a9c7b55d5ec14cbbf.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/fallFloor_f68d9614ffbd95cf02d02c22eba2f2fa.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/fallFloorMetal_2906bec176125e07d7405a9c01186565.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/fallFloorMetal_80594e7caef76bde0c671a841fb8999e.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/hit1_63afb06f9112047170f6c8480bc209b8.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/hit1_fd504535260b9bf9a30c692f7c3cbd60.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/hit2_384393e12013435d9e90ff8e338520a4.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/hit2_ad57012c4ab6db5d7132bdb3f4bac5e9.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/ko_4a9c67d8ed38c9f44bee387b9ad77f25.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/ko_914c51d4001872f9b994895c25a302b2.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/music_38cc7028bf774f5febced0f23b3da37b.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/music_222d17ad084856775640338098f7e82e.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/score_56b7ecedd4c820465c03d93d04a77118.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/score_634121f906e12ec5b76fb4b4688006f4.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/start_d009c925a518caee6c2526900a3077c1.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/start_fab75235f57eb83d1fb740de3bcfae2d.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/stompIn_531136b5420d258565873eec96732645.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/stompIn_c8ff5057cd299c6643a5f6bce215e311.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/swoosh_7ce3ba81acadde6e465850f8b065d51d.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/swoosh_d30166de16f2475639188a71685f7c20.ogg"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/victory_a4577858cdadb2d084107f444d88d1bf.m4a"
}, function(t, e, i) {
    t.exports = i.p + "assets/snd/victory_f1000f6428df27140d37e7821ae04f99.ogg"
}, , , , function(t, e) {
    var i = {
        Project: "1.0.1",
        SheepCore: "0.12.8",
        SheepUi: "0.13.1"
    };
    "fsVersion" in window ? Phaser.Utils.mixin(i, window.fsVersion) : window.fsVersion = i
}, function(t, e, i) {
    i.r(e);
    var a = i(12),
        s = i(8),
        n = i(0),
        r = i(31);

    function o(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var h = function() {
        function t(e, i) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.storageKey = i, this.saveObj = {}, this.load() || (this.saveObj = {
                name: "",
                bestScore: 0,
                bestScoreName: ""
            }, this.resetTutorialFlags())
        }
        var e, i, a;
        return e = t, (i = [{
            key: "resetTutorialFlags",
            value: function() {
                return function() {
                    this.saveObj.tutorialComplete = !1, this.saveObj.tutorialBaseComplete = !1, this.saveObj.tutorialSpecialComplete = !1, this.save()
                }
            }()
        }, {
            key: "checkTutorialFlagsComplete",
            value: function() {
                return function() {
                    this.saveObj.tutorialBaseComplete && this.saveObj.tutorialSpecialComplete && (this.saveObj.tutorialComplete = !0, this.save())
                }
            }()
        }, {
            key: "setBestScoreName",
            value: function() {
                return function(t) {
                    this.saveObj.bestScoreName = t, this.setName(t)
                }
            }()
        }, {
            key: "setName",
            value: function() {
                return function(t) {
                    this.saveObj.name = t, this.save()
                }
            }()
        }, {
            key: "getName",
            value: function() {
                return function() {
                    return this.saveObj.name
                }
            }()
        }, {
            key: "setBestScore",
            value: function() {
                return function(t) {
                    return !(this.saveObj.bestScore >= t || (this.saveObj.bestScore = t, this.saveObj.bestScoreName = this.saveObj.name, this.save(), 0))
                }
            }()
        }, {
            key: "getBestScore",
            value: function() {
                return function() {
                    return {
                        name: this.saveObj.bestScoreName,
                        score: this.saveObj.bestScore
                    }
                }
            }()
        }, {
            key: "getTutorialComplete",
            value: function() {
                return function() {
                    return this.saveObj.tutorialComplete
                }
            }()
        }, {
            key: "setTutorialComplete",
            value: function() {
                return function(t) {
                    this.saveObj.tutorialComplete = t, this.save()
                }
            }()
        }, {
            key: "load",
            value: function() {
                return function() {
                    try {
                        var t = localStorage.getItem(this.storageKey);
                        if (null !== t) return this.saveObj = JSON.parse(t), !0
                    } catch (t) {
                        console.warn("error loading from localstorage", t)
                    }
                    return !1
                }
            }()
        }, {
            key: "save",
            value: function() {
                return function() {
                    try {
                        var t = JSON.stringify(this.saveObj);
                        localStorage.setItem(this.storageKey, t)
                    } catch (t) {
                        console.warn("error saving to localstorage")
                    }
                }
            }()
        }]) && o(e.prototype, i), a && o(e, a), t
    }();

    function c(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var u = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.game = e, this.musicCurrent = null, this.musicKeyCurrent = "", this.musicVolume = 1, this.fadeingMusic = !1, this.fadingOut = [], this.sfx = {}, this.sfxPlayCounter = {}, this.MAX_COUNT = 3, this.sfxPlayTimer = {}, this.MIN_PLAY_DELAY_MS = 100, this.listenerPosition = new n.Vector3, this.attenuationRange = 20
            }
            var e, i, a;
            return e = t, (i = [{
                key: "updateListenerPosition",
                value: function() {
                    return function(t) {
                        this.listenerPosition.copy(t), this.listenerPosition.y = 10
                    }
                }()
            }, {
                key: "getAttenuation",
                value: function() {
                    return function(t) {
                        var e = this.listenerPosition.distanceTo(t);
                        if (e > this.attenuationRange) return 0;
                        var i = 1 - e / this.attenuationRange;
                        return i > .6 && (i = .6), i
                    }
                }()
            }, {
                key: "setTargetMusicVolume",
                value: function() {
                    return function(t, e) {
                        this.musicVolume = t, this.musicCurrent && (this.fadeingMusic = !0, this.musicCurrent.fadeInSpeed = 1 / (.001 * e))
                    }
                }()
            }, {
                key: "_onDecodedMusic",
                value: function() {
                    return function(t) {
                        var e = this;
                        this.musicCurrent && (this.game.device.ie ? (this.musicCurrent.play("", 0, 0, !1), this.musicCurrent.onStop.add(function() {
                            e.musicCurrent && e.musicCurrent.play("", 0, e.musicVolume, !1)
                        }, this)) : this.musicCurrent.play("", 0, 0, !0), this.fadeingMusic = !0)
                    }
                }()
            }, {
                key: "playMusic",
                value: function() {
                    return function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        this.musicKeyCurrent !== t && (this.musicCurrent && this.musicCurrent.stop(), this.musicKeyCurrent = t, this.musicCurrent = this.game.add.audio(t, e, !0), this.musicCurrent.play())
                    }
                }()
            }, {
                key: "fadeToMusic",
                value: function() {
                    return function(t, e, i) {
                        this.setTargetMusicVolume(e, i), this.musicKeyCurrent !== t && (this.musicKeyCurrent = t, this.musicCurrent && (this.musicCurrent.fadeOutSpeed = 1 / (.001 * i), this.fadingOut.push(this.musicCurrent)), t ? (this.musicCurrent = this.game.add.audio(t), this.musicCurrent.fadeInSpeed = 1 / (.001 * i), this.musicCurrent.isDecoded ? this._onDecodedMusic(this.musicCurrent) : this.musicCurrent.onDecoded.add(this._onDecodedMusic, this, 0)) : this.musicCurrent = null)
                    }
                }()
            }, {
                key: "update",
                value: function() {
                    return function(t) {
                        this.fadeingMusic && this.musicCurrent && (this.musicCurrent.volume < this.musicVolume ? (this.musicCurrent.volume += this.musicCurrent.fadeInSpeed * t, this.musicCurrent.volume >= this.musicVolume && (this.musicCurrent.volume = this.musicVolume, this.fadeingMusic = !1)) : (this.musicCurrent.volume -= this.musicCurrent.fadeInSpeed * t, this.musicCurrent.volume <= this.musicVolume && (this.musicCurrent.volume = this.musicVolume, this.fadeingMusic = !1)));
                        for (var e = 0; e < this.fadingOut.length; e++) {
                            var i = this.fadingOut[e];
                            i.isDecoded && (i.volume -= t * i.fadeOutSpeed, i.volume <= 0 && (i.stop(), i.destroy(), this.fadingOut.splice(e, 1), e--))
                        }
                    }
                }()
            }, {
                key: "_onDecodedSfx",
                value: function() {
                    return function(t, e, i, a) {
                        if (t.play("", 0, e, !1), t.usingWebAudio && i) {
                            var s = i;
                            s += a * Math.random() - .5 * a, t._sound.playbackRate.value = s
                        }
                    }
                }()
            }, {
                key: "_onEndSfx",
                value: function() {
                    return function(t) {
                        this.sfx[t.soundKey] || (this.sfx[t.soundKey] = []), this.sfx[t.soundKey].push(t), this.sfxPlayCounter[t.soundKey]--
                    }
                }()
            }, {
                key: "playSfxAttenuated",
                value: function() {
                    return function(t, e, i, a, s) {
                        this.playSfx(t, this.getAttenuation(s) * e, i, a)
                    }
                }()
            }, {
                key: "playSfx",
                value: function() {
                    return function(t, e, i, a, s) {
                        if (!t) return null;
                        if (!e) return null;
                        if (e > 1 && (e = 1), i = i || 1, a = a || 0, s) {
                            var n = (new Date).getTime();
                            if (void 0 === this.sfxPlayTimer[t] && (this.sfxPlayTimer[t] = 0), n - this.sfxPlayTimer[t] < this.MIN_PLAY_DELAY_MS) return null;
                            if (this.sfxPlayTimer[t] = n, void 0 === this.sfxPlayCounter[t] && (this.sfxPlayCounter[t] = 0), this.sfxPlayCounter[t] >= this.MAX_COUNT) return null;
                            this.sfxPlayCounter[t]++
                        }
                        var r = null;
                        if (this.sfx[t] && this.sfx[t].length > 0) r = this.sfx[t].pop();
                        else {
                            if (!(r = this.game.add.audio(t))) return console.log("Sound key:", t, "not found"), null;
                            r.soundKey = t, r.onStop.add(this._onEndSfx, this), r.allowMultiple = !0
                        }
                        return r.isDecoded ? this._onDecodedSfx(r, e, i, a) : r.onDecoded.add(this._onDecodedSfx, this, 0, e, i, a), r
                    }
                }()
            }, {
                key: "getSound",
                value: function() {
                    return function(t, e) {
                        if (t && e) {
                            var i = this.game.add.audio(t);
                            i ? (i.soundKey = t, i.isDecoded ? e(i) : i.onDecoded.add(e, this)) : console.log("Sound key:", t, "not found")
                        } else console.log("SoundManager: Invalid sound key or missing callback")
                    }
                }()
            }]) && c(e.prototype, i), a && c(e, a), t
        }(),
        l = i(61);

    function p(t) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function f(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function m(t, e) {
        return !e || "object" !== p(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function g(t, e, i) {
        return (g = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
            return function(t, e, i) {
                var a = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
                    return t
                }(t, e);
                if (a) {
                    var s = Object.getOwnPropertyDescriptor(a, e);
                    return s.get ? s.get.call(i) : s.value
                }
            }
        }())(t, e, i || t)
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
            return function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
        }())(t)
    }

    function y(t, e) {
        return (y = Object.setPrototypeOf || function() {
            return function(t, e) {
                return t.__proto__ = e, t
            }
        }())(t, e)
    }
    var b = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), m(this, d(e).apply(this, arguments))
        }
        var i, o, c;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && y(t, e)
        }(e, a["a"].State.Base), i = e, (o = [{
            key: "init",
            value: function() {
                return function() {
                    for (var t, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                    (t = g(d(e.prototype), "init", this)).call.apply(t, [this].concat(a))
                }
            }()
        }, {
            key: "createOnce",
            value: function() {
                return function() {
                    var t = this;
                    g(d(e.prototype), "createOnce", this).call(this), this.game.device.iOS && (this.game.fsConf.fullscreen = a.a.NONE), this.game.onPause.add(function() {
                        t.game.lockRender = !0, t.game.sound.pauseAll()
                    }), this.game.onResume.add(function() {
                        t.game.lockRender = !1, t.game.sound.resumeAll()
                    }), this.game.cache.checkLayoutKey("layout_preload") && (this.game.preloadLayout = new s.a.Layout(this.game, this.game.cache.getLayout("layout_preload"))), document.body.classList.remove("loading"), this.game.gameConfig = l.config, this.createUtil(), this.game.toggoApi = new r.a(this.game.gameConfig.toggoKey, this.game.gameConfig.midRollInterval, this.game.gameConfig.midRollInterval), this.game.soundManager = new u(this.game), this.game.storageManager = new h(this.game, this.game.gameConfig.storageKey), this.game.DEBUG = !this.game.debug.isDisabled, this.game.DEBUG && (this.game.DEBUG_LOG_WAVE = !1, this.game.DEBUG_SKIP_INTRO = !1, this.game.DEBUG_PICKUP_TARGETS = !1, this.game.DEBUG_DISABLE_MUSIC = !1, this.game.stage.disableVisibilityChange = !1, this.game.fsConf.fullscreen = a.a.NONE, window.game = this.game), this.game.state.start("menu")
                }
            }()
        }, {
            key: "createUtil",
            value: function() {
                return function() {
                    var t = this;
                    n.Vector3.prototype.distanceXZ = function(t) {
                        return Math.sqrt((this.x - t.x) * (this.x - t.x) + (this.z - t.z) * (this.z - t.z))
                    }, this.game.getMeshBoneByName = function(e, i) {
                        if (e.name === i) return e;
                        for (var a = 0; a < e.children.length; a++) {
                            var s = t.game.getMeshBoneByName(e.children[a], i);
                            if (s) return s
                        }
                        return null
                    }, Phaser.Point.prototype.lerp = function(t, e) {
                        this.x = (1 - e) * this.x + e * t.x, this.y = (1 - e) * this.y + e * t.y
                    }, this.game.attachButtonSoundTraverse = function(e, i) {
                        e.onInputUp && e.onInputUp.add(i);
                        for (var a = 0; a < e.children.length; a++) t.game.attachButtonSoundTraverse(e.children[a], i)
                    }, this.game.scaleTextToMaxWidth = function(t, e) {
                        if (t.width > e) {
                            var i = e / t.width;
                            t.scale.set(i)
                        }
                    }, this.game.removePhaserLabel = function(t) {
                        t && t.parent && t.parent.remove(t)
                    }, this.game.getRndInt = function(t, e) {
                        return Math.floor(Math.random() * (e - t + 1) + t)
                    }
                }
            }()
        }]) && f(i.prototype, o), c && f(i, c), e
    }();

    function v(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var S = function() {
        function t(e) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.dimmer = new Phaser.Graphics(this.game, 0, 0), this.game.world.add(this.dimmer), this.dimmer.beginFill("0xffffff"), this.dimmer.tint = 0, this.dimmer.drawRect(0, 0, 1, 1), this.dimmer.endFill(), this.dimmer.width = this.game.width, this.dimmer.height = this.game.height, this.dimmer.alpha = 1, this.dimmer.visible = !1, this.dimmer.inputEnabled = !1
        }
        var e, i, a;
        return e = t, (i = [{
            key: "fadeIn",
            value: function() {
                return function(t, e) {
                    var i = this;
                    this.dimmer.visible = !0, this.dimmer.alpha = 1;
                    var a = this.game.add.tween(this.dimmer).to({
                        alpha: 0
                    }, t, Phaser.Easing.Linear.None, !0, 250, 0, !1);
                    a.onComplete.add(function() {
                        i.dimmer.visible = !1
                    }), e && a.onComplete.add(e)
                }
            }()
        }, {
            key: "setFadeColor",
            value: function() {
                return function(t) {
                    this.dimmer.tint = t
                }
            }()
        }, {
            key: "fadeOut",
            value: function() {
                return function(t, e) {
                    this.dimmer.visible = !0, this.dimmer.alpha = 0;
                    var i = this.game.add.tween(this.dimmer).to({
                        alpha: 1
                    }, t, Phaser.Easing.Linear.None, !0, 250, 0, !1);
                    e && i.onComplete.add(e)
                }
            }()
        }, {
            key: "resize",
            value: function() {
                return function() {
                    this.dimmer.width = this.game.width, this.dimmer.height = this.game.height
                }
            }()
        }]) && v(e.prototype, i), a && v(e, a), t
    }();

    function A(t) {
        return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function k(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function E(t, e) {
        return !e || "object" !== A(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function T(t, e, i) {
        return (T = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
            return function(t, e, i) {
                var a = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _(t)););
                    return t
                }(t, e);
                if (a) {
                    var s = Object.getOwnPropertyDescriptor(a, e);
                    return s.get ? s.get.call(i) : s.value
                }
            }
        }())(t, e, i || t)
    }

    function _(t) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
            return function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
        }())(t)
    }

    function w(t, e) {
        return (w = Object.setPrototypeOf || function() {
            return function(t, e) {
                return t.__proto__ = e, t
            }
        }())(t, e)
    }
    var C = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), E(this, _(e).apply(this, arguments))
        }
        var i, s, n;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && w(t, e)
        }(e, a["a"].State.Base), i = e, (s = [{
            key: "preload",
            value: function() {
                return function() {
                    var t = this;
                    T(_(e.prototype), "preload", this).call(this), this.lblFigure = this.game.preloadLayout.getElementById("labelAnimation"), this.lblLoadingBar = this.game.preloadLayout.getElementById("labelLoadingbar"), this.textPercent = this.game.preloadLayout.getElementById("varTextLoading"), this.game.add.tween(this.lblFigure.shui.position).to({
                        y: this.lblFigure.shui.position.y + 20
                    }, 500, Phaser.Easing.Linear.None, !0, 0, -1, !0), this.game.add.tween(this.lblFigure.shui.position).to({
                        x: this.lblFigure.shui.position.x + 480
                    }, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !0).onLoop.add(function() {
                        t.lblFigure.scale.x *= -1
                    })
                }
            }()
        }, {
            key: "loadUpdate",
            value: function() {
                return function() {
                    for (var t, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                    (t = T(_(e.prototype), "loadUpdate", this)).call.apply(t, [this].concat(a));
                    var n = this.game.load.progress / 100;
                    this.lblLoadingBar.scale.x = n, this.textPercent.setText("".concat(this.game.load.progress, "%"))
                }
            }()
        }, {
            key: "create",
            value: function() {
                return function() {
                    T(_(e.prototype), "create", this).call(this)
                }
            }()
        }]) && k(i.prototype, s), n && k(i, n), e
    }();

    function P(t) {
        return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function I(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function M(t, e) {
        return !e || "object" !== P(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function x(t, e, i) {
        return (x = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
            return function(t, e, i) {
                var a = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = O(t)););
                    return t
                }(t, e);
                if (a) {
                    var s = Object.getOwnPropertyDescriptor(a, e);
                    return s.get ? s.get.call(i) : s.value
                }
            }
        }())(t, e, i || t)
    }

    function O(t) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
            return function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
        }())(t)
    }

    function D(t, e) {
        return (D = Object.setPrototypeOf || function() {
            return function(t, e) {
                return t.__proto__ = e, t
            }
        }())(t, e)
    }
    var R = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), M(this, O(e).apply(this, arguments))
        }
        var i, a, n;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && D(t, e)
        }(e, C), i = e, (a = [{
            key: "init",
            value: function() {
                return function() {
                    for (var t, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                    (t = x(O(e.prototype), "init", this)).call.apply(t, [this, {
                        key: "menuState",
                        url: "data/menuPack.json"
                    }].concat(a))
                }
            }()
        }, {
            key: "create",
            value: function() {
                return function() {
                    x(O(e.prototype), "create", this).call(this), this.createUI(), this.fadeUI = new S(this.game), this.fadeUI.fadeIn(1e3), this.game.DEBUG_DISABLE_MUSIC || this.game.soundManager.fadeToMusic("music", .4, 5e3), this.game.toggoApi.track("menue")
                }
            }()
        }, {
            key: "createUI",
            value: function() {
                return function() {
                    var t = this;
                    this.layout = new s.a.Layout(this.game, this.game.cache.getLayout("layout_menu")), this.layout.setup(), this.game.world.add(this.layout);
                    var e = this.layout.getElementById("buttonPlay");
                    e.onInputUp.add(function() {
                        t.game.soundManager.playSfx("start", .4), t.game.toggoApi.showMidRoll(), t.game.state.start("game", !0, !1)
                    });
                    var i = this.layout.getElementById("buttonTutorial");
                    i.onInputUp.add(function() {
                        t.game.storageManager.resetTutorialFlags(), t.game.soundManager.playSfx("start", .4), t.game.toggoApi.showMidRoll(), t.game.state.start("game", !0, !1)
                    });
                    var a = this.layout.getElementById("buttonHighscore");
                    a.onInputUp.add(function() {
                        t.game.soundManager.playSfx("button", 1, 1, .3), t.game.state.start("highscore")
                    });
                    var n = this.layout.getElementById("buttonSound");
                    this.game.sound.mute && n.useState("muted"), n.onInputUp.add(function() {
                        t.game.soundManager.playSfx("button", 1, 1, .3), "default" === n.getCurrentState() ? (t.game.sound.mute = !0, n.useState("muted")) : (t.game.sound.mute = !1, n.useState("default"))
                    }), this.game.add.tween(i.shui.position).from({
                        x: .5 * -this.game.width,
                        y: .5 * this.game.height
                    }, 750, Phaser.Easing.Back.Out, !0, 500, -0, !1).onStart.add(function() {
                        t.game.soundManager.playSfx("swoosh", .3, .8, 0)
                    }), this.game.add.tween(e.shui.position).from({
                        y: .5 * this.game.height
                    }, 750, Phaser.Easing.Back.Out, !0, 700, -0, !1).onStart.add(function() {
                        t.game.soundManager.playSfx("swoosh", .3, .85, 0)
                    }), this.game.add.tween(e.scale).to({
                        x: 1.1,
                        y: 1.1
                    }, 800, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0), this.game.add.tween(a.shui.position).from({
                        x: .5 * this.game.width,
                        y: .5 * this.game.height
                    }, 750, Phaser.Easing.Back.Out, !0, 900, -0, !1).onStart.add(function() {
                        t.game.soundManager.playSfx("swoosh", .3, .9, 0)
                    })
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function() {
                    x(O(e.prototype), "update", this).call(this);
                    var t = Math.min(.1, this.game.time.elapsedMS / 1e3);
                    t > .1 && (t = .1), this.game.soundManager.update(t)
                }
            }()
        }, {
            key: "shutdown",
            value: function() {
                return function() {
                    x(O(e.prototype), "shutdown", this).call(this), this.fadeUI = null
                }
            }()
        }, {
            key: "resize",
            value: function() {
                return function() {
                    x(O(e.prototype), "resize", this).call(this), this.fadeUI && this.fadeUI.resize()
                }
            }()
        }]) && I(i.prototype, a), n && I(i, n), e
    }();

    function N(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var L = function() {
            function t(e, i) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.game = e, this.spline = i, this.scene = this.game.mainScene, this.fov = 60, this.far = 1e3, this.near = 2, this.introPan = {
                    value: 0
                }, this.UP = new n.Vector3(0, 1, 0), this._createMainCamera(), this.activeCamera = this.camera, this._createDebugCamera(), this.viewProjectionMatrix = new n.Matrix4, this.updateInverseMatrix(), this._createSkyPlane(), this.resize()
            }
            var e, i, a;
            return e = t, (i = [{
                key: "_createMainCamera",
                value: function() {
                    return function() {
                        this.camera = new n.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, this.near, this.far), this.camera.isDebug = !1, this.camera.rotation.set(0, Math.PI, 0), this.cameraNode = new n.Object3D, this.scene.add(this.cameraNode), this.cameraNode.add(this.camera), this.zoomIn = !1, this.cameraOffset = new n.Vector3(11, 25, -11), this.cameraOffsetZoom = new n.Vector3(5.6, 12, -5.6), this.cameraNode.position.copy(this.cameraOffset), this.cameraNode.updateMatrix(), this.intoLookAt = new n.Vector3(0, -3, 0), this.lookAtPos = new n.Vector3(-3.5, 0, 3.5), this.cameraNode.lookAt(this.lookAtPos), this.cameraRotFinal = (new n.Quaternion).copy(this.cameraNode.quaternion), this.cameraShake = {
                            timer: -1,
                            length: .7,
                            amp: .3,
                            displace: new n.Vector3
                        }, this.cameraTarget = null, this.tmpVec = new n.Vector3
                    }
                }()
            }, {
                key: "_createDebugCamera",
                value: function() {
                    return function() {
                        this.game.DEBUG && (this.debugCamera = new n.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, this.near, this.far), this.debugCamera.isDebug = !0, this.debugCamera.position.copy(this.cameraNode.position), this.debugCamera.lookAt(new n.Vector3(0, 2, 0)), this.debugTranslationSpeed = 20, this.debugRotationSpeed = 1.5, this.debugTranslate = new n.Vector3, this.debugRotate = new n.Vector3, this.debugRight = new n.Vector3, this.debugForward = new n.Vector3, this.debugUp = new n.Vector3(0, 1, 0), this.debugQuat = new n.Quaternion)
                    }
                }()
            }, {
                key: "_createSkyPlane",
                value: function() {
                    return function() {
                        this.skyPlane = new n.Mesh(new n.PlaneBufferGeometry(50, 50, 1, 1), this.game.materialCache.getMaterial("sky")), this.skyPlane.position.set(0, 25, -100)
                    }
                }()
            }, {
                key: "init",
                value: function() {
                    return function() {
                        var t = this;
                        if (this.zoomIn = !1, this.intro = !0, this.triggerJumpOut = !0, this.introPan = {
                                value: 0
                            }, this.game.DEBUG_SKIP_INTRO) this.introPan.value = 1;
                        else {
                            var e = this.game.add.tween(this.introPan).to({
                                value: 1
                            }, 4500, Phaser.Easing.Sinusoidal.InOut, !0, 2e3, 0, !1);
                            e._onUpdateCallback = function() {
                                t.game.tweenUpdateCallback(e)
                            }, this.update(1)
                        }
                        this.game.DEBUG && this.game.input.keyboard.addKey(Phaser.Keyboard.PAGE_UP).onDown.add(function() {
                            t.activeCamera.isDebug ? t.activeCamera = t.camera : (t.activeCamera = t.debugCamera, t.debugCamera.position.copy(t.cameraNode.position), t.cameraTarget && t.debugCamera.lookAt(t.cameraTarget.position))
                        }, this)
                    }
                }()
            }, {
                key: "resize",
                value: function() {
                    return function() {
                        this.camera.aspect = this.game.width / this.game.height, this.camera.updateProjectionMatrix(), this.debugCamera && (this.debugCamera.aspect = this.game.width / this.game.height, this.debugCamera.updateProjectionMatrix())
                    }
                }()
            }, {
                key: "update",
                value: function() {
                    return function(t) {
                        this.activeCamera.isDebug && this.updateDebugCamera(t), this.updateMainCamera(t), this.updateCameraShake(t)
                    }
                }()
            }, {
                key: "updateInverseMatrix",
                value: function() {
                    return function() {
                        this.camera.updateMatrixWorld(!0), this.viewProjectionMatrix.copy(this.camera.projectionMatrix), this.viewProjectionMatrix.multiply(this.camera.matrixWorldInverse)
                    }
                }()
            }, {
                key: "updateMainCamera",
                value: function() {
                    return function(t) {
                        this.cameraTarget && (this.triggerJumpOut && this.introPan.value > .2 && (this.triggerJumpOut = !1, this.game.gameState.triggerPlayerIntroJumpOut()), this.introPan.value < 1 ? (this.tmpVec.copy(this.spline.getPointAt(this.introPan.value)), this.cameraNode.position.lerp(this.tmpVec, Math.min(2 * t, 1)), this.cameraNode.lookAt(this.intoLookAt)) : (this.intro && (this.intro = !1, this.game.gameState.triggerIntroComplete()), this.tmpVec.copy(this.cameraTarget.position), this.zoomIn ? this.tmpVec.add(this.cameraOffsetZoom) : this.tmpVec.add(this.cameraOffset), this.cameraNode.position.lerp(this.tmpVec, Math.min(2 * t, 1)), this.cameraNode.quaternion.slerp(this.cameraRotFinal, .5 * t), this.cameraNode.updateMatrix()))
                    }
                }()
            }, {
                key: "updateDebugCamera",
                value: function() {
                    return function(t) {
                        this.debugTranslate.set(0, 0, 0), this.debugRotate.set(0, 0, 0), this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_ADD) && (this.debugTranslationSpeed += 20 * t), this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_SUBTRACT) && (this.debugTranslationSpeed += -20 * t), this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && (this.debugTranslate.x += -1), this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && (this.debugTranslate.x += 1), this.game.input.keyboard.isDown(Phaser.Keyboard.UP) && (this.debugTranslate.z += 1), this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) && (this.debugTranslate.z += -1), this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_7) && (this.debugTranslate.y += 1), this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_9) && (this.debugTranslate.y += -1), this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_4) && (this.debugRotate.y += 1), this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_6) && (this.debugRotate.y += -1), this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_8) && (this.debugRotate.x += 1), this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_5) && (this.debugRotate.x += -1), this.debugTranslate.multiplyScalar(t * this.debugTranslationSpeed), this.debugRotate.multiplyScalar(t * this.debugRotationSpeed), this.debugCamera.getWorldDirection(this.debugForward), this.debugRight.copy(this.debugForward), this.debugRight.cross(this.UP).normalize(), this.debugUp.set(0, 1, 0), this.debugQuat.setFromAxisAngle(this.UP, this.debugRotate.y).multiply(this.debugCamera.quaternion), this.debugCamera.quaternion.copy(this.debugQuat), this.debugQuat.setFromAxisAngle(this.debugRight, this.debugRotate.x).multiply(this.debugCamera.quaternion), this.debugCamera.quaternion.copy(this.debugQuat), this.debugForward.multiplyScalar(this.debugTranslate.z), this.debugRight.multiplyScalar(this.debugTranslate.x), this.debugUp.multiplyScalar(this.debugTranslate.y), this.debugCamera.position.add(this.debugForward), this.debugCamera.position.add(this.debugRight), this.debugCamera.position.add(this.debugUp)
                    }
                }()
            }, {
                key: "setCameraTarget",
                value: function() {
                    return function(t) {
                        this.cameraTarget = t
                    }
                }()
            }, {
                key: "updateCameraShake",
                value: function() {
                    return function(t) {
                        if (0 !== t)
                            if (this.cameraShake.timer > 0) {
                                this.cameraShake.timer -= t;
                                var e = this.cameraShake.amp * (this.cameraShake.timer / this.cameraShake.length);
                                this.camera.rotation.x = (Math.random() - .5) * e * .01, this.camera.rotation.y = (Math.random() - .5) * e * .01 + Math.PI, this.camera.rotation.z = (Math.random() - .5) * e * .01
                            } else this.camera.rotation.x = 0, this.camera.rotation.y = Math.PI, this.camera.rotation.z = 0
                    }
                }()
            }, {
                key: "triggerCameraShake",
                value: function() {
                    return function(t, e) {
                        this.cameraShake.amp = t, this.cameraShake.length = e, this.cameraShake.timer = this.cameraShake.length, this.game.gameState.gameUI.triggerCameraShake(t, e)
                    }
                }()
            }, {
                key: "getUIAlignPositionFromWorld",
                value: function() {
                    return function(t) {
                        t.applyMatrix4(this.viewProjectionMatrix), t.x = .5 * (t.x + 1), t.y = 1 - .5 * (t.y + 1)
                    }
                }()
            }, {
                key: "getWorldPosition",
                value: function() {
                    return function() {
                        return this.activeCamera.isDebug ? this.debugCamera.position : this.cameraNode.position
                    }
                }()
            }, {
                key: "setZoomIn",
                value: function() {
                    return function(t) {
                        this.zoomIn = t
                    }
                }()
            }]) && N(e.prototype, i), a && N(e, a), t
        }(),
        B = i(164);

    function U(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var F = function() {
        function t(e) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.FLOOR_RADIUS = 25, this.PLAYER_WALK_RADIUS = 10, this.AGENT_WALK_RADIUS = 12, this.floorCenter = new n.Vector3(0, 0, 0), this.edgeSpline = null, this.stairSplines = [], this.tempVec = new n.Vector3, this._parseMap()
        }
        var e, i, a;
        return e = t, (i = [{
            key: "_createDebug",
            value: function() {
                return function() {
                    var t = new n.Mesh(new n.CircleBufferGeometry(this.FLOOR_RADIUS, 25), new n.MeshNormalMaterial);
                    this.game.mainScene.add(t), t.rotation.x = .5 * -Math.PI, t.position.y = 4;
                    var e = new n.Mesh(new n.CircleBufferGeometry(this.PLAYER_WALK_RADIUS, 25), new n.MeshBasicMaterial({
                        color: new n.Color(.545, .784, .435)
                    }));
                    this.game.mainScene.add(e), e.rotation.x = .5 * -Math.PI, e.position.y = .75
                }
            }()
        }, {
            key: "_parseMap",
            value: function() {
                return function() {
                    var t = this,
                        e = this.game.cache.getJSON("scene"),
                        i = {
                            "env.json": this.game.cache.getThreeObject("env"),
                            env: this.game.materialCache.getMaterial("envFog")
                        };
                    this.sheepScene = new B.a(e, i, this.game.DEBUG), this.stairSplines.push(this.sheepScene.paths[0].spline), this.edgeSpline = this.sheepScene.paths[1].spline, this.stairSplines.push(this.sheepScene.paths[2].spline), this.stairSplines.push(this.sheepScene.paths[3].spline), this.cameraSpline = this.sheepScene.paths[4].spline, this.sheepScene.world.traverse(function(e) {
                        e.userData.source && "deco_enemies" === e.userData.source && (e.material = t.game.materialCache.getMaterial("agentStatic")), e.userData.source && "env_01" === e.userData.source && (e.material = t.game.materialCache.getMaterial("envFogClose")), e.userData.source && "Group" === e.userData.source && e.children.forEach(function(e) {
                            t._addTorchParticleToDecoEnemy(e)
                        })
                    }), this.game.mainScene.add(this.sheepScene.world)
                }
            }()
        }, {
            key: "_addTorchParticleToDecoEnemy",
            value: function() {
                return function(t) {
                    var e = this.game.particleManager.getEffectFromPool("torch_particle");
                    e.visible = !0, e.emitters[0].reset(), e.emitters[0].alive = !0, e.emitters[0].setPosition(t.position)
                }
            }()
        }, {
            key: "getRandomStairSpline",
            value: function() {
                return function() {
                    return this.stairSplines[Math.floor(Math.random() * this.stairSplines.length)]
                }
            }()
        }, {
            key: "getStairSplineByIndex",
            value: function() {
                return function(t) {
                    return this.stairSplines[t]
                }
            }()
        }, {
            key: "getCameraSpline",
            value: function() {
                return function() {
                    return this.cameraSpline
                }
            }()
        }, {
            key: "constrainPlayerMovement",
            value: function() {
                return function(t) {
                    t.distanceXZ(this.floorCenter) > this.PLAYER_WALK_RADIUS && (t.normalize(), t.multiplyScalar(this.PLAYER_WALK_RADIUS))
                }
            }()
        }, {
            key: "constrainAgentMovement",
            value: function() {
                return function(t) {
                    t.distanceXZ(this.floorCenter) > this.AGENT_WALK_RADIUS && (t.normalize(), t.multiplyScalar(this.AGENT_WALK_RADIUS))
                }
            }()
        }, {
            key: "getClosestPointOnFightAreaEdge",
            value: function() {
                return function(t) {
                    t.y = 0, t.normalize(), t.multiplyScalar(this.AGENT_WALK_RADIUS)
                }
            }()
        }, {
            key: "checkKnockedOutOfMap",
            value: function() {
                return function(t) {
                    return this.tempVec.copy(t), this.tempVec.y = 0, this.tempVec.length() > this.FLOOR_RADIUS
                }
            }()
        }]) && U(e.prototype, i), a && U(e, a), t
    }();

    function j(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var V = function() {
        function t(e) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.game.blobShadowGeo || (this.game.blobShadowGeo = new n.PlaneGeometry(2, 2)), this.geometry = this.game.blobShadowGeo, this.material = this.game.materialCache.getMaterial("blobshadow", !0), this.mesh = new n.Mesh(this.geometry, this.material), this.target = null, this.targetBone = null, this.mesh.rotation.x = .5 * -Math.PI, this.mesh.position.y = .2, this.material.opacity = 1, this.alpha = 1, this.alphaTarget = 1, this.fadeSpeed = 1
        }
        var e, i, a;
        return e = t, (i = [{
            key: "setTarget",
            value: function() {
                return function(t, e) {
                    e || console.log("missing bone target"), this.target = t, this.targetBone = e, this.game.mainScene.add(this.mesh)
                }
            }()
        }, {
            key: "clear",
            value: function() {
                return function() {
                    this.mesh.parent && this.mesh.parent.remove(this.mesh)
                }
            }()
        }, {
            key: "setVisible",
            value: function() {
                return function(t) {
                    this.mesh.visible = t
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function(t) {
                    this.mesh.visible && (this.target.updateMatrixWorld(), this.targetBone.updateMatrixWorld(), this.targetBone.getWorldPosition(this.mesh.position), this.mesh.position.y = this.target.position.y + .2)
                }
            }()
        }]) && j(e.prototype, i), a && j(e, a), t
    }();

    function G(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var K = function() {
        function t(e) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.target = null;
            var i = new n.PlaneBufferGeometry(2, 2, 1, 1);
            i.rotateX(.5 * -Math.PI), this.material = this.game.materialCache.getMaterial("chargeIndicator"), this.mesh = new n.Mesh(i, this.material), this.mesh.position.y = .3, this.mesh.position.z = .9;
            this.mesh.scale.set(.7, .7, .7), this.colorLerp = new n.Color, this.colorStart = new n.Color("#f9f4fb"), this.colorEnd = new n.Color("#fbcf65"), this.colorFinal = new n.Color("#fbcf65"), this.opacityLerp = 0, this.opacityEnd = .6, this.opacityFinal = .8, this.lastAttackChargeFactor = -1
        }
        var e, i, a;
        return e = t, (i = [{
            key: "setTarget",
            value: function() {
                return function(t) {
                    this.target = t, this.target ? (this.mesh.visible = !0, this.target.add(this.mesh)) : this.mesh.visible = !1
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function(t) {
                    if (t > 1 && (t = 1), t !== this.lastAttackChargeFactor) {
                        if (this.lastAttackChargeFactor = t, this.mesh.visible = !0, 1 === t) this.colorLerp.copy(this.colorFinal), this.opacityLerp = this.opacityFinal, this.scaleTween || (this.scaleTween = this.game.add.tween(this.mesh.scale).to({
                            x: 1.1,
                            z: 1.1
                        }, 250, Phaser.Easing.Sinusoidal.InOut, !1, 0, 0, !0)), this.mesh.scale.set(1, 1, 1), this.scaleTween.stop(), this.scaleTween.pendingDelete = !1, this.scaleTween.start();
                        else {
                            if (!(t > 0)) return void(this.mesh.visible = !1);
                            this.colorLerp.copy(this.colorStart), this.colorLerp.lerp(this.colorEnd, t), this.opacityLerp = t * this.opacityEnd
                        }
                        this.material.color = this.colorLerp, this.material.opacity = this.opacityLerp
                    }
                }
            }()
        }, {
            key: "hide",
            value: function() {
                return function() {
                    this.mesh.visible = !1
                }
            }()
        }]) && G(e.prototype, i), a && G(e, a), t
    }();

    function H(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var W = function() {
        function t(e, i, a) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.env = i, this.cameraManager = a, this.config = this.game.gameConfig.PLAYER_STATS, this.configAttacks = this.config.ATTACKS, this.agentManager = null, this.radius = this.config.RADIUS, this.pushVector = new n.Vector3, this.inputWorldDistance = 0, this.elapsed = 0, this.attackSoundDelay = 0, this.attackSoundDelayLength = 3, this.attackDownTimer = 0, this.inputVector = new n.Vector3, this.translateVector = new n.Vector3, this.attackTranslate = new n.Vector3, this.attackVector = new n.Vector3, this.zeroVector = new n.Vector3, this.specialTranslateVector = new n.Vector3, this.effectPosition = new n.Vector3, this.rotationHelper = new n.Object3D, this.specialAttackPlayerSpinQuat = new n.Quaternion, this.UP = new n.Vector3(0, 1, 0), this.states = {
                SPAWN: "SPAWN",
                IDLE: "IDLE",
                RUN: "RUN",
                ATTACK: "ATTACK",
                SPECIAL: "SPECIAL",
                STUNNED: "STUNNED",
                FALL: "FALL",
                GETUP: "GETUP",
                DEAD: "DEAD",
                EXIT: "EXIT"
            }, this.attackStates = {
                ANTICIPATE: "ANTICIPATE",
                SWING: "SWING",
                KICK: "KICK"
            }, this.state = null, this.newState = !0, this.attackState = null, this.characters = this.game.gameConfig.PLAYER_CHARACTERS, this.characterIndex = -1, this._createPlayerMeshes(), this._createSpecialAttackMesh(), this._createInput(), this._createParticles(), this.chargeIndicator = new K(this.game), this.resize(), this.introFriends = []
        }
        var e, i, a;
        return e = t, (i = [{
            key: "clear",
            value: function() {
                return function() {
                    for (var t = this.config.MESH_SCALE, e = 0; e < this.characters.length; e++) this.characters[e].mesh.visible = !1, this.characters[e].mesh.scale.set(t, t, t);
                    this.specialAttackRoot.visible = !1, this.cylinderMesh.visible = !1, this.floorWril.visible = !1, this.score = 0, this.comboCounter = 0, this.comboTimer = -1;
                    for (var i = new Array(this.characters.length), a = 0; a < this.characters.length; a++) i[a] = this.characters[a];
                    for (this.characterOrder = []; i.length > 0;) {
                        var s = i.splice(i.length * Math.random(), 1)[0];
                        this.characterOrder.push(s)
                    }
                    this.specialUsed = !1, this.introLock = !0, this.elapsed = 0, this.characterIndex = -1, this.mesh = null, this.spawnNextCharacter(), this.mesh.position.set(0, 0, 0), this.setupIntro()
                }
            }()
        }, {
            key: "setAgentManagerRef",
            value: function() {
                return function(t) {
                    this.agentManager = t
                }
            }()
        }, {
            key: "_createPlayerMeshes",
            value: function() {
                return function() {
                    for (var t = this.config.MESH_SCALE, e = 0; e < this.characters.length; e++) {
                        var i = this.game.cache.getThreeJson("playerChar_0".concat((e + 1).toString())),
                            a = new n.SkinnedMesh(i, this.game.materialCache.getMaterial("player"));
                        a.scale.set(t, t, t), this.characters[e].index = e, this.characters[e].mesh = a, this.characters[e].mesh.config = this.characters[e], a.mixer = new n.AnimationMixer(a), a.currentAnim = a.mixer.clipAction("idle"), a.currentAnim.reset().setEffectiveWeight(1).play()
                    }
                    this.mesh = this.characters[0].mesh, this.blobShadow = new V(this.game);
                    var s = this.game.getMeshBoneByName(this.mesh, "chest");
                    this.blobShadow.setTarget(this.mesh, s)
                }
            }()
        }, {
            key: "_createSpecialAttackMesh",
            value: function() {
                return function() {
                    this.specialAttackMesh = new n.Mesh(this.game.cache.getThreeJson("tornado_core"), this.game.materialCache.getMaterial("tornado")), this.specialAttackMesh.scale.set(2, 2, 2), this.specialAttackRoot = new n.Object3D, this.specialAttackRoot.add(this.specialAttackMesh), this.specialAttackRoot.visible = !1, this.game.mainScene.add(this.specialAttackRoot);
                    var t = new n.CylinderBufferGeometry(15, 15, 15, 24, 1, !0);
                    t.translate(0, 7.5, 0);
                    var e = this.game.materialCache.getMaterial("cylinder");
                    this.cylinderMesh = new n.Mesh(t, e), this.game.mainScene.add(this.cylinderMesh), this.cylinderMesh.renderOrder = 10, this.cylinderMesh.visible = !1, this.specialRotSpeedPlayer = this.config.ATTACKS.SPECIAL.ROTATION_SPEED_PLAYER
                }
            }()
        }, {
            key: "animate",
            value: function() {
                return function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (this.mesh.currentAnim._clip.name !== t || i) {
                        var a = this.mesh.mixer.clipAction(t);
                        if (null === a) return console.error("Annimation: ".concat(t, " does not exist")), 0;
                        this.mesh.mixer.stopAllAction(), this.mesh.currentAnim.crossFadeTo(a, e, !1).play(), this.mesh.currentAnim = a
                    }
                    return .95 * this.mesh.currentAnim._clip.duration
                }
            }()
        }, {
            key: "animateMesh",
            value: function() {
                return function(t, e, i) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (t.currentAnim._clip.name !== e || a) {
                        var s = t.mixer.clipAction(e);
                        if (null === s) return console.error("Annimation: ".concat(e, " does not exist")), 0;
                        t.mixer.stopAllAction(), t.currentAnim.crossFadeTo(s, i, !1).play(), t.currentAnim = s
                    }
                    return .95 * t.currentAnim._clip.duration
                }
            }()
        }, {
            key: "_createInput",
            value: function() {
                return function() {
                    this.screenSpace = new n.Vector2(0, 0), this.screenSize = new n.Vector2(0, 0), this.inputWorldSpace = new n.Vector3, this.raycaster = new n.Raycaster, this.intersecting = !1, this.rayPlane = new n.Mesh(new n.PlaneGeometry(100, 100), new n.MeshBasicMaterial), this.rayPlane.rotation.x = .5 * -Math.PI, this.rayPlane.updateMatrixWorld()
                }
            }()
        }, {
            key: "_createParticles",
            value: function() {
                return function() {
                    this.floorWril = this.game.particleManager.getEffectFromPool("swirlFloor"), this.floorWril.position.y += 1, this.floorWril.visible = !1, this.floorWril.emitters[0].alive = !1, this.chargeEffect = this.game.particleManager.getEffectFromPool("charge"), this.chargeEffect.position.y += 1.2, this.chargeEffect.visible = !1, this.chargeEffect.emitters[0].alive = !1
                }
            }()
        }, {
            key: "setupIntro",
            value: function() {
                return function() {
                    this.setState(this.states.IDLE), this.translateVector.set(0, 0, 1), this.rotationHelper.lookAt(this.translateVector), this.introFriends = [this.characterOrder[1], this.characterOrder[2]];
                    for (var t = [{
                            x: -1,
                            y: 0,
                            z: -6
                        }, {
                            x: -.5,
                            y: 0,
                            z: -3
                        }, {
                            x: 2,
                            y: 0,
                            z: 2
                        }, {
                            x: 4,
                            y: 0,
                            z: 4
                        }, {
                            x: 3,
                            y: 0,
                            z: -2
                        }], e = 0; e < this.introFriends.length; e++) {
                        var i = this.introFriends[e].mesh;
                        i.visible = !0, this.game.mainScene.add(i), i.position.copy(t[e]), i.quaternion.setFromAxisAngle(this.UP, e / 4 * -Math.PI * .5);
                        var a = this.animateMesh(i, "idle", 0, !0);
                        i.currentAnim.time = Math.random() * a
                    }
                }
            }()
        }, {
            key: "spawnNextCharacter",
            value: function() {
                return function() {
                    if (this.life = this.config.HEALTH, this.energy = this.config.ENERGY, -1 === this.characterIndex && (this.specialEnergy = 0), this.stateTimer = -1, this.stunTimer = -1, this.invulTimer = -1, this.invulFlickerTimer = -1, this.attackStateTimer = -1, this.attackProcDelay = -1, this.bufferAttack = !1, this.instantRotate = !0, this.cameraManager.setZoomIn(!0), this.characterIndex++, this.characterIndex >= this.characters.length) return this.characterIndex = this.characters.length - 1, void this.game.gameState.gameOver();
                    var t = null;
                    this.mesh && (t = this.mesh, this.mesh.parent && this.mesh.parent.remove(this.mesh)), this.mesh = this.characterOrder[this.characterIndex].mesh, this.game.mainScene.add(this.mesh), t ? this.mesh.position.copy(t.position) : this.mesh.position.set(0, 0, 0);
                    var e = this.config.MESH_SCALE;
                    this.mesh.scale.set(e, e, e), this.cameraManager.setCameraTarget(this.mesh);
                    var i = this.game.getMeshBoneByName(this.mesh, "chest");
                    this.blobShadow.setTarget(this.mesh, i), this.mesh.visible = !0, this.chargeIndicator.setTarget(this.mesh), this.chargeIndicator.hide(), this.character = this.characterOrder[this.characterIndex], this.cylinderMesh.material.uniforms.color_base.value.set(this.character.COLOR_BASE), this.cylinderMesh.material.uniforms.color_highlight.value.set(this.character.COLOR_HIGHLIGHT), this.speicalAttackSound && this.speicalAttackSound.stop(), this.setState(this.states.SPAWN)
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function(t) {
                    var e = this;
                    this.elapsed += t, this.stateTimer -= t, this.stunTimer -= t, this.attackSoundDelay -= t, this.chargeEffect.position.x = this.mesh.position.x, this.chargeEffect.position.z = this.mesh.position.z, this.addEnergy(t * this.config.ENERGY_PER_SECOND), this.invulTimer > 0 && (this.invulTimer -= t, this.invulFlickerTimer -= t, this.invulFlickerTimer < 0 && (this.invulFlickerTimer = this.config.INVUL_FLICKER_TIME, this.mesh.visible = !this.mesh.visible), this.invulTimer <= 0 && (this.mesh.visible = !0)), this.comboTimer > 0 && this.state !== this.states.SPECIAL && (this.comboTimer -= t, this.comboTimer <= 0 && this.config.COMBO_RESET_ON_TIME && this.resetComboCounter());
                    var i = this.states;
                    switch (this.state) {
                        case i.SPAWN:
                            if (this.stateSetupRequired() && (this.stateTimer = this.animate("spawn", 0), this.stateTimer *= 1, this.mesh.currentAnim.timeScale /= 1, this.mesh.currentAnim.clampWhenFinished = !0, this.mesh.currentAnim.repetitions = 0, this.translateVector.set(0, 0, -1), this.rotationHelper.lookAt(this.translateVector), this.attackProcDelay = .6 * this.stateTimer, this.instantRotate = !0, this.effectPosition.set(0, 0, 0), this.game.soundManager.playSfx("stompIn", .6)), this.attackProcDelay -= t, this.attackProcDelay < 0) {
                                this.attackProcDelay = 100;
                                var a = this.configAttacks.SPECIAL,
                                    s = this.agentManager.attackAgents(this.mesh.position, null, 7.5, a.DOT_ANGLE, a.DAMAGE, a.KNOCKBACK);
                                s && (this.cameraManager.triggerCameraShake(a.CAMERA_SHAKE, a.CAMERA_SHAKE), this.game.gameState.triggerFreezeTime(a.FREEZE_FRAMES)), this.updateComboCounter(s), this.cameraManager.triggerCameraShake(1, 1), this.effectPosition.copy(this.mesh.position), this.effectPosition.y += .5, this.game.particleManager.triggerSingleInstance("groundSmokeBig", this.effectPosition, 2).rotation.x = .5 * Math.PI
                            }
                            this.stateTimer < 0 && (this.bufferAttack = !1, this.setState(i.IDLE), this.cameraManager.setZoomIn(!1));
                            break;
                        case i.IDLE:
                            this.stateSetupRequired() && (this.animate("idle", .3, !0), this.mesh.currentAnim.timeScale = 1), this._updateInputs(), this.config.ENABLE_RUN ? (this.intersecting || this.bufferAttack) && (!this.bufferAttack && this.inputWorldDistance > this.config.TRIGGER_RUN_DIST ? this.setState(i.RUN) : this.setState(i.ATTACK)) : (this.intersecting || this.bufferAttack) && this.setState(i.ATTACK);
                            break;
                        case i.RUN:
                            if (this.stateSetupRequired() && (this.animate("run", .3, !0), this.mesh.currentAnim.timeScale = 1), this._updateInputs(), this.bufferAttack = !1, !this.intersecting) {
                                this.setState(i.IDLE);
                                break
                            }
                            break;
                        case i.SPECIAL:
                            this.stateSetupRequired() && (this.inputVector.set(0, 0, 0), this.animate("special_attack", 0, !0), this.mesh.currentAnim.timeScale = .5, this.mesh.currentAnim.clampWhenFinished = !0, this.mesh.currentAnim.repetitions = 0, this.cameraManager.setZoomIn(!1), this.speicalAttackSound = this.game.soundManager.playSfx("attackSpecial", .7), this.stateTimer = this.config.ATTACKS.SPECIAL.DURATION, this.specialAttackRoot.visible = !0, this.cylinderMesh.visible = !0, this.specialAttackRoot.scale.set(.1, .1, .1), this.game.add.tween(this.specialAttackRoot.scale).to({
                                x: 1,
                                y: 1,
                                z: 1
                            }, 1e3, Phaser.Easing.Back.Out, !0, 0, 0), this.specialAttackMesh.material.opacity = 0, this.game.add.tween(this.specialAttackMesh.material).to({
                                opacity: 1
                            }, 500, Phaser.Easing.Sinusoidal.In, !0, 0, 0), this.cylinderMesh.material.uniforms.opacity.value = 0, this.game.add.tween(this.cylinderMesh.material.uniforms.opacity).to({
                                value: 1
                            }, 500, Phaser.Easing.Sinusoidal.In, !0, 0, 0), this.floorWril.visible = !0, this.floorWril.emitters[0].alive = !0, this.floorWril.reset(!0), this.specialAttackActive = !0), this.specialAttackActive && this.stateTimer < 1 && (this.specialAttackActive = !1, this.floorWril.emitters[0].alive = !1, this.game.add.tween(this.specialAttackMesh.material).to({
                                opacity: 0
                            }, 1500, Phaser.Easing.Linear.None, !0, 0, 0).onComplete.add(function() {
                                e.specialAttackRoot.visible = !1, e.cylinderMesh.visible = !1
                            }), this.game.add.tween(this.cylinderMesh.material.uniforms.opacity).to({
                                value: 0
                            }, 1500, Phaser.Easing.Linear.None, !0, 0, 0), this.game.add.tween(this.speicalAttackSound).to({
                                volume: 0
                            }, 1500, Phaser.Easing.Linear.None, !0, 0, 0).onComplete.add(function() {
                                e.speicalAttackSound.stop()
                            })), this.specialAttackRoot.position.copy(this.mesh.position), this.specialAttackPlayerSpinQuat.setFromAxisAngle(this.UP, t * this.specialRotSpeedPlayer), this.rotationHelper.quaternion.multiply(this.specialAttackPlayerSpinQuat), this.specialAttackMesh.quaternion.copy(this.mesh.quaternion), this.floorWril.position.copy(this.mesh.position), this.floorWril.y += .2, this._updateInputs(), this.specialTranslateVector.copy(this.inputVector), 0 === this.inputVector.length() && (this.specialTranslateVector.x += .4 * Math.sin(3 * this.elapsed), this.specialTranslateVector.z += .4 * Math.cos(3 * this.elapsed)), this.specialTranslateVector.multiplyScalar(this.configAttacks.SPECIAL.SPEED);
                            var n = this.configAttacks.SPECIAL,
                                r = this.agentManager.attackAgents(this.mesh.position, null, n.RANGE, n.DOT_ANGLE, n.DAMAGE, n.KNOCKBACK);
                            if (r) {
                                this.cameraManager.triggerCameraShake(n.CAMERA_SHAKE, n.CAMERA_SHAKE), this.game.gameState.triggerFreezeTime(n.FREEZE_FRAMES), this.updateComboCounter(r);
                                var o = Math.floor(2 * Math.random()) + 1;
                                this.game.soundManager.playSfx("hit".concat(o), .7, 1, .3)
                            }
                            this.stateTimer < 0 && this.setState(this.states.IDLE);
                            break;
                        case i.ATTACK:
                            var h = this.attackStates;
                            if (this.stateSetupRequired()) {
                                if (this.energy < this.configAttacks.PUNCH.ENERGY) {
                                    this.setState(i.IDLE);
                                    break
                                }
                                this.setAttackState(h.ANTICIPATE), this.animate("".concat(this.mesh.config.MODEL, "_anticipation"), .5, !0), this.mesh.currentAnim.timeScale = .8, this.mesh.currentAnim.clampWhenFinished = !0, this.mesh.currentAnim.repetitions = 0, this.attackStateTimer = 0, this.attackDownTimer = 0
                            }
                            switch (this._updateInputs(), this.attackState) {
                                case h.ANTICIPATE:
                                    this.attackStateTimer += t, this.attackDownTimer += t, this.attackStateTimer < .8 * this.configAttacks.KICK.CHARGE_TIME ? this.chargeEffect.visible || (this.chargeEffect.emitters[0].reset(!0), this.chargeEffect.emitters[0].alive = !0, this.chargeEffect.visible = !0) : this.chargeEffect.emitters[0].alive = !1, this.intersecting || (this.bufferAttack = !1, this.chargeEffect.emitters[0].alive = !1, this.chargeEffect.visible = !1, this.energy < this.configAttacks.KICK.ENERGY && (this.attackStateTimer = .1), this.attackStateTimer < this.configAttacks.KICK.CHARGE_TIME ? (this.setAttackState(h.SWING), this.attackDownTimer = 0, this.attackStateTimer = .3, this.attackProcDelay = .5 * this.attackStateTimer, this.attackTranslate.copy(this.attackVector), this.attackTranslate.multiplyScalar(this.configAttacks.PUNCH.TRAVEL), this.animate("".concat(this.mesh.config.MODEL, "_action"), 0, !0), this.mesh.currentAnim.timeScale = 2, this.mesh.currentAnim.clampWhenFinished = !0, this.mesh.currentAnim.repetitions = 0, this.energy -= this.configAttacks.PUNCH.ENERGY, this.playAttackSound(1)) : (this.setAttackState(h.KICK), this.attackDownTimer = 0, this.attackProcDelay = .5 * this.attackStateTimer, this.attackTranslate.copy(this.attackVector), this.attackTranslate.multiplyScalar(this.configAttacks.KICK.TRAVEL), this.attackStateTimer = this.animate("flying_kick_02", .1, !0), this.attackStateTimer = .6, this.mesh.currentAnim.timeScale *= 1, this.attackStateTimer /= 1, this.mesh.currentAnim.clampWhenFinished = !0, this.mesh.currentAnim.repetitions = 0, this.attackProcDelay = .2 * this.attackStateTimer, this.energy -= this.configAttacks.KICK.ENERGY, this.playAttackSound(.8)));
                                    break;
                                case h.SWING:
                                    if (this.attackProcDelay -= t, this.attackProcDelay < 0) {
                                        this.attackProcDelay = 100;
                                        var c = this.configAttacks.PUNCH,
                                            u = this.agentManager.attackAgents(this.mesh.position, this.attackVector, c.RANGE, c.DOT_ANGLE, c.DAMAGE, c.KNOCKBACK);
                                        if (u) {
                                            this.cameraManager.triggerCameraShake(c.CAMERA_SHAKE, c.CAMERA_SHAKE), this.game.gameState.triggerFreezeTime(c.FREEZE_FRAMES);
                                            var l = Math.floor(2 * Math.random()) + 1;
                                            this.game.soundManager.playSfx("hit".concat(l), .7, 1, .3), this.attackSoundDelay < 0 && Math.random() < .2 && (this.attackSoundDelay = this.attackSoundDelayLength, this.playCharacterSoud("SOUND_ATTACK", .7, 1, .2))
                                        }
                                        this.updateComboCounter(u);
                                        var p = this.game.gameConfig.TUTORIAL_EVENT.PUNCH;
                                        this.game.gameState.triggerTutorialAdvanceEvent(p)
                                    }
                                    this.attackStateTimer -= t, this.attackStateTimer < 0 && this.setState(i.IDLE);
                                    break;
                                case h.KICK:
                                    if (this.attackProcDelay -= t, this.attackProcDelay < 0) {
                                        this.attackProcDelay = 100;
                                        var f = this.configAttacks.KICK,
                                            m = this.agentManager.attackAgents(this.mesh.position, this.attackVector, f.RANGE, f.DOT_ANGLE, f.DAMAGE, f.KNOCKBACK);
                                        if (m) {
                                            this.cameraManager.triggerCameraShake(f.CAMERA_SHAKE, f.CAMERA_SHAKE), this.game.gameState.triggerFreezeTime(f.FREEZE_FRAMES);
                                            var g = Math.floor(2 * Math.random()) + 1;
                                            this.game.soundManager.playSfx("hit".concat(g), .7, 1, .3), this.attackSoundDelay < 0 && Math.random() < .2 && (this.attackSoundDelay = this.attackSoundDelayLength, this.playCharacterSoud("SOUND_ATTACK", .7, 1, .2))
                                        }
                                        this.updateComboCounter(m);
                                        var d = this.game.gameConfig.TUTORIAL_EVENT.KICK;
                                        this.game.gameState.triggerTutorialAdvanceEvent(d)
                                    }
                                    this.attackStateTimer -= t, this.attackStateTimer < 0 && this.setState(i.IDLE)
                            }
                            break;
                        case i.STUNNED:
                            this.stateSetupRequired() && (this.stunTimer = this.animate("hit", .1), this.stunTimer /= .8, this.mesh.currentAnim.timeScale = .8), this._updateInputs(), this.intersecting && this.setState(i.ATTACK), this.stunTimer < 0 && this.setState(this.states.IDLE);
                            break;
                        case i.FALL:
                            this.stateSetupRequired() && (this.stunTimer = .5, this.animate("fall", .1), this.mesh.currentAnim.clampWhenFinished = !0, this.mesh.currentAnim.repetitions = 0, this.chargeIndicator.hide(), Math.random() < .5 ? this.game.soundManager.playSfx("fallFloorMetal", 1, 1, 0) : this.game.soundManager.playSfx("fallFloor", 1, 1, 0)), this.stunTimer < 0 && this.setState(this.states.GETUP);
                            break;
                        case i.GETUP:
                            this.stateSetupRequired() && (this.stunTimer = this.animate("get_up", .1), this.chargeIndicator.hide()), this.stunTimer -= t, this.stunTimer <= 0 && (this.setState(this.states.IDLE), this.invulTimer = this.config.INVUL_TIME);
                            break;
                        case i.DEAD:
                            this.stateSetupRequired() && (this.animate("fall", .1), this.game.soundManager.playSfx("ko", 1), this.mesh.currentAnim.clampWhenFinished = !0, this.mesh.currentAnim.repetitions = 0, this.stateTimer = 1, this.cameraManager.setZoomIn(!0), this.chargeIndicator.hide()), this.stateTimer < 0 && this.setState(this.states.EXIT);
                            break;
                        case i.EXIT:
                            this.stateSetupRequired() && (this.stunTimer = this.animate("get_up", .1), this.cameraManager.setZoomIn(!0), this.stateTimer = 100, this.playJumpOutParticle = !1, this.chargeIndicator.hide()), this.stunTimer -= t, this.stunTimer < 0 && (this.stunTimer = 100, this.game.soundManager.playSfx("swoosh", .7), this.stateTimer = this.animate("exit", .3), this.mesh.currentAnim.timeScale = .6, this.stateTimer /= .6, this.mesh.currentAnim.clampWhenFinished = !0, this.mesh.currentAnim.repetitions = 0, this.stateTimer += .5, this.playJumpOutParticle = !0), this.playJumpOutParticle && this.stateTimer < .8 && (this.effectPosition.copy(this.mesh.position), this.effectPosition.y += .5, this.playJumpOutParticle = !1, this.game.particleManager.triggerSingleInstance("groundSmokeSmall", this.effectPosition, 2)), this.stateTimer < 0 && (this.game.gameState.gameUI.playerDeath(), this.spawnNextCharacter())
                    }
                    this._updateMovement(t), this.mesh.mixer.update(t), this.blobShadow.update(t), this.chargeIndicator.update(this.attackDownTimer / this.configAttacks.KICK.CHARGE_TIME);
                    for (var y = 0; y < this.introFriends.length; y++) this.introFriends[y].mesh.mixer.update(t)
                }
            }()
        }, {
            key: "updateComboCounter",
            value: function() {
                return function(t) {
                    t ? (this.comboTimer = this.config.COMBO_RESET_TIME, this.comboCounter += t, this.config.COMBO_MAX_CAP ? this.addScore(Math.min(this.comboCounter, this.config.COMBO_MAX_SCORE)) : this.addScore(this.comboCounter), this.game.gameState.gameUI.updateComboCounter(this.comboCounter)) : this.config.COMBO_RESET_ON_MISS && this.resetComboCounter()
                }
            }()
        }, {
            key: "resetComboCounter",
            value: function() {
                return function() {
                    this.comboCounter = 0, this.game.gameState.gameUI.updateComboCounter(this.comboCounter)
                }
            }()
        }, {
            key: "addScore",
            value: function() {
                return function(t) {
                    this.score += t
                }
            }()
        }, {
            key: "_updateInputs",
            value: function() {
                return function(t) {
                    this.introLock || (this.game.input.keyboard.isDown(Phaser.Keyboard.Q) && this.triggerSpecialAttack(), this._updateTouchPosition(t))
                }
            }()
        }, {
            key: "triggerSpecialAttack",
            value: function() {
                return function() {
                    if (this.state !== this.states.DEAD && this.state !== this.states.SPECIAL && this.state !== this.states.EXIT && (this.specialUsed = !0, !(this.specialEnergy < this.configAttacks.SPECIAL.ENERGY))) {
                        this.specialEnergy -= this.configAttacks.SPECIAL.ENERGY, this.setState(this.states.SPECIAL);
                        var t = this.game.gameConfig.TUTORIAL_EVENT.SPECIAL;
                        this.game.gameState.triggerTutorialAdvanceEvent(t)
                    }
                }
            }()
        }, {
            key: "_updateTouchPosition",
            value: function() {
                return function() {
                    this.inputVector.set(0, 0, 0);
                    var t = this.game.input.activePointer,
                        e = this.game.gameState.gameUI.blockPlayerInput();
                    if (!t || !t.isDown || e) return this.intersecting && (this.bufferAttack = !0), void(this.intersecting = !1);
                    this.screenSpace.x = 2 * (t.x / this.screenSize.x - .5), this.screenSpace.y = -2 * (t.y / this.screenSize.y - .5), this.raycaster.setFromCamera(this.screenSpace, this.cameraManager.activeCamera);
                    var i = this.raycaster.intersectObject(this.rayPlane);
                    i.length > 0 && (this.inputWorldSpace.copy(i[0].point), this.inputWorldDistance = this.mesh.position.distanceXZ(this.inputWorldSpace), this.inputVector.copy(this.inputWorldSpace), this.inputVector.sub(this.mesh.position), this.inputVector.normalize(), this.intersecting, this.intersecting = !0, this.attackVector.copy(this.inputVector))
                }
            }()
        }, {
            key: "_updateMovement",
            value: function() {
                return function(t) {
                    this.state !== this.states.SPECIAL && this.inputVector.length() > 0 && this.rotationHelper.lookAt(this.inputVector);
                    var e = 10 * t;
                    this.state === this.states.EXIT && (e *= .3), this.mesh.quaternion.slerp(this.rotationHelper.quaternion, e), this.instantRotate && (this.instantRotate = !1, this.mesh.quaternion.copy(this.rotationHelper.quaternion)), this.mesh.position.add(this.pushVector), this.pushVector.set(0, 0, 0), this.attackTranslate.lerp(this.zeroVector, 3 * t), this.translateVector.copy(this.attackTranslate).multiplyScalar(t), this.specialTranslateVector.multiplyScalar(t), this.translateVector.add(this.specialTranslateVector), this.mesh.position.add(this.translateVector), this.specialTranslateVector.set(0, 0, 0), this.state === this.states.RUN && (this.translateVector.copy(this.inputVector), this.translateVector.multiplyScalar(this.config.SPEED * t), this.mesh.position.add(this.translateVector)), this.env.constrainPlayerMovement(this.mesh.position)
                }
            }()
        }, {
            key: "applyDamage",
            value: function() {
                return function(t, e) {
                    this.state === this.states.DEAD || this.state === this.states.EXIT || this.state === this.states.SPECIAL || this.state === this.states.FALL || this.state === this.states.GETUP || this.invulTimer > 0 || (this.config.COMBO_RESET_ON_HIT && this.resetComboCounter(), this.cameraManager.triggerCameraShake(.4, .5), this.chargeEffect.emitters[0].alive = !1, this.chargeEffect.visible = !1, this.life -= e, this.effectPosition.copy(this.mesh.position), Math.random() < .5 ? this.game.particleManager.triggerEmitterPool("pow1", this.effectPosition) : this.game.particleManager.triggerEmitterPool("pow2", this.effectPosition), Math.random() < .5 ? this.game.soundManager.playSfx("hit1", .7, 1, .2) : this.game.soundManager.playSfx("hit2", .7, 1, .2), t.multiplyScalar(-1), this.rotationHelper.lookAt(t), this.life <= 0 ? this.setState(this.states.DEAD) : this.stunTimer > 0 ? this.setState(this.states.FALL) : this.setState(this.states.STUNNED))
                }
            }()
        }, {
            key: "addEnergy",
            value: function() {
                return function(t) {
                    this.energy += t, this.energy = Phaser.Math.clamp(this.energy, 0, this.config.ENERGY)
                }
            }()
        }, {
            key: "giveFullHealth",
            value: function() {
                return function() {
                    this.life = this.config.HEALTH
                }
            }()
        }, {
            key: "addSpecialEnergy",
            value: function() {
                return function(t) {
                    if (this.state !== this.states.DEAD && this.state !== this.states.SPECIAL && this.specialEnergy !== this.config.SPECIAl_ENERGY && (this.specialUsed || (t *= 2), this.specialEnergy += t, this.specialEnergy >= this.config.SPECIAl_ENERGY)) {
                        this.specialEnergy = this.config.SPECIAl_ENERGY;
                        var e = this.game.gameConfig.TUTORIAL_EVENT.SPECIAL;
                        this.game.gameState.triggerTutorialSetupEvent(e)
                    }
                }
            }()
        }, {
            key: "setState",
            value: function() {
                return function(t) {
                    this.state = t, this.newState = !0
                }
            }()
        }, {
            key: "setAttackState",
            value: function() {
                return function(t) {
                    this.attackState = t
                }
            }()
        }, {
            key: "stateSetupRequired",
            value: function() {
                return function() {
                    return !!this.newState && (this.newState = !1, !0)
                }
            }()
        }, {
            key: "isAlive",
            value: function() {
                return function() {
                    return this.state !== this.states.SPAWN && this.state !== this.states.DEAD && this.state !== this.states.EXIT && this.life > 0
                }
            }()
        }, {
            key: "getLifeFactor",
            value: function() {
                return function() {
                    return this.life / this.config.HEALTH
                }
            }()
        }, {
            key: "getEnergyFactor",
            value: function() {
                return function() {
                    return this.energy / this.config.ENERGY
                }
            }()
        }, {
            key: "getSpecialEnergyFactor",
            value: function() {
                return function() {
                    return this.specialEnergy / this.config.SPECIAl_ENERGY
                }
            }()
        }, {
            key: "resize",
            value: function() {
                return function() {
                    this.screenSize.set(this.game.width, this.game.height)
                }
            }()
        }, {
            key: "playAttackSound",
            value: function() {
                return function(t) {
                    var e = Math.floor(3 * Math.random()) + 1;
                    this.game.soundManager.playSfx("attack0" + e, .7, t, .2)
                }
            }()
        }, {
            key: "playCharacterSoud",
            value: function() {
                return function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        s = this.character[t],
                        n = s[Math.floor(s.length * Math.random())];
                    this.game.soundManager.playSfx(n, e, i, a)
                }
            }()
        }, {
            key: "triggerIntroJumpOut",
            value: function() {
                return function() {
                    for (var t = this, e = function(e) {
                            t.game.time.events.add(1e3 * Math.random(), function() {
                                if (t.introFriends[e]) {
                                    var i = t.introFriends[e].mesh;
                                    t.animateMesh(i, "exit", .2, !0), i.currentAnim.timeScale = .5, i.currentAnim.clampWhenFinished = !0, i.currentAnim.repetitions = 0, t.game.soundManager.playSfx("swoosh", .6, 1, .1)
                                }
                            }, t)
                        }, i = 0; i < this.introFriends.length; i++) e(i)
                }
            }()
        }, {
            key: "triggerIntroComplete",
            value: function() {
                return function() {
                    for (this.introLock = !1; this.introFriends.length > 0;) {
                        var t = this.introFriends.pop().mesh;
                        t.parent && (t.parent.remove(t), t.visible = !1)
                    }
                }
            }()
        }]) && H(e.prototype, i), a && H(e, a), t
    }();

    function z(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var Y = function() {
        function t(e, i, a, s, r) {
            var o = this;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.agentType = i, this.env = a, this.player = s, this.pickupManager = r, this.config = this.game.gameConfig.AGENT_STATS, this.typeConfig = this.config.AGENTS[i], this.radius = this.config.RADIUS, this.animKeyAction = this.typeConfig.ANIM_KEY_ACTION, this.animKeyAnticipation = this.typeConfig.ANIM_KEY_ANTICIPATION, this.states = {
                SPAWN_EDGE: "SPAWN_EDGE",
                SPAWN_STAIR: "SPAWN_STAIR",
                ENTER_RING: "ENTER_RING",
                APPROACH: "APPROACH",
                IDLE: "IDLE",
                ATTACK: "ATTACK",
                STUNNED: "STUNNED",
                FALL: "FALL",
                GETUP: "GETUP",
                DEAD: "DEAD",
                KNOCK_OUT: "KNOCK_OUT",
                TAUNT: "TAUNT"
            }, this.attackStates = {
                ANTICIPATE: "ANTICIPATE",
                SWING: "SWING"
            }, this.attackStateTimer = 0, this.attackProcDelay = -1, this.attackDistance = 3, this.approachAttack = !1, this.edgeSpline = this.env.edgeSpline, this.enterRingTarget = new n.Vector3, this.translateVector = new n.Vector3, this.rotationHelper = new n.Object3D, this.up = new n.Vector3(0, 1, 0), this.attackDir = new n.Vector3, this.pushVector = new n.Vector3, this.effectPosition = new n.Vector3, this.knockBackVector = new n.Vector3, this.zeroVector = new n.Vector3, this.knockOutVector = new n.Vector3, this._createMesh(), this.blobShadow = new V(this.game);
            var h = this.game.getMeshBoneByName(this.mesh, "chest");
            this.blobShadow.setTarget(this.mesh, h), this.game.soundManager.getSound("bossKo", function(t) {
                o.sndBossKo = t, o.sndBossKo.volume = .7
            })
        }
        var e, i, a;
        return e = t, (i = [{
            key: "_createMesh",
            value: function() {
                return function() {
                    this.material = this.game.materialCache.getMaterial("agent", !0), this.material.uniforms.dissolveFactor.value = 0;
                    var t = this.game.cache.getThreeJson(this.typeConfig.MODEL);
                    this.mesh = new n.SkinnedMesh(t, this.material), this.game.mainScene.add(this.mesh);
                    var e = this.config.MESH_SCALE;
                    this.mesh.scale.set(e, e, e), this.mixer = new n.AnimationMixer(this.mesh), this.currentAnim = this.mixer.clipAction("idle"), this.currentAnim.reset().setEffectiveWeight(1).play(), this.mesh.visible = !1
                }
            }()
        }, {
            key: "animate",
            value: function() {
                return function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (this.currentAnim._clip.name !== t || i) {
                        var a = this.mixer.clipAction(t);
                        if (null === a) return console.error("Annimation: ".concat(t, " does not exist")), 0;
                        this.mixer.stopAllAction(), this.currentAnim.crossFadeTo(a, e, !1).play(), this.currentAnim = a
                    }
                    return .9 * this.currentAnim._clip.duration
                }
            }()
        }, {
            key: "init",
            value: function() {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (this.mesh.visible = !0, this.life = this.typeConfig.HEALTH, this.removeTimerLength = 2, this.state = null, this.attackState = this.attackStates.ANTICIPATE, this.splineValue = 0, this.newState = !0, this.instantRotate = !1, this.pushVector.set(0, 0, 0), this.approachDist = 0, this.stateTimer = -1, this.tauntTimer = -1, this.tauntTimerLength = 2, this.removeThis = !1, this.material.uniforms.dissolveFactor.value = 0, this.blobShadow.setVisible(!0), this.introAgent = t, this.stairSpline = t ? this.env.getStairSplineByIndex(e) : this.env.getRandomStairSpline(), Math.random() < .6 || t) this.setState(this.states.SPAWN_STAIR), this.mesh.position.copy(this.stairSpline.getPointAt(.001));
                    else {
                        this.setState(this.states.SPAWN_EDGE);
                        var i = Phaser.Math.clamp(Math.random(), .001, .999);
                        this.mesh.position.copy(this.edgeSpline.getPointAt(i))
                    }
                    this.isHardEnemy() && (this.torchParticle = this.game.particleManager.getEffectFromPool("torch_particle"), this.torchParticleSample = new n.Vector3, this.torchParticle.visible = !0, this.torchBone = null, this.torchBone = this.game.getMeshBoneByName(this.mesh, "weapon"), this.torchParticle.emitters[0].reset(), this.torchParticle.emitters[0].alive = !0), this.isBoss() && (this.bossAuraFX = this.game.particleManager.getEffectFromPool("boss_aura"), this.bossAuraFX.visible = !0, this.bossAuraFX.emitters[0].reset(), this.bossAuraFX.emitters[0].alive = !0, this.bossSparksFX = this.game.particleManager.getEffectFromPool("boss_spraks"), this.bossSparksFX.visible = !0, this.bossSparksFX.emitters[0].reset(), this.bossSparksFX.emitters[0].alive = !0, this.bossParticleBone = this.game.getMeshBoneByName(this.mesh, "chest"), this.bossParticlesSample = new n.Vector3)
                }
            }()
        }, {
            key: "disable",
            value: function() {
                return function() {
                    this.mesh.visible = !1, this.blobShadow.setVisible(!1), this.isHardEnemy() && this.torchParticle && (this.torchParticle.emitters[0].reset(!0), this.game.particleManager.returnEffectToPool(this.torchParticle)), this.isBoss() && this.bossAuraFX && this.bossSparksFX && (this.bossAuraFX.emitters[0].reset(!0), this.bossSparksFX.emitters[0].reset(!0), this.game.particleManager.returnEffectToPool(this.bossAuraFX), this.game.particleManager.returnEffectToPool(this.bossSparksFX))
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function(t) {
                    this.player.isAlive() || (t *= .2), this.stateTimer -= t, this.tauntTimer -= t;
                    var e = this.states;
                    switch (this.state) {
                        case e.SPAWN_EDGE:
                            this.stateSetupRequired() && (this.instantRotate = !0, this.env.getClosestPointOnFightAreaEdge(this.enterRingTarget), this.translateVector.copy(this.enterRingTarget), this.translateVector.sub(this.mesh.position), this.rotationHelper.lookAt(this.translateVector), this.spawnEdgeTimer = this.animate("spawn", 0)), this.spawnEdgeTimer -= t, this.spawnEdgeTimer < 0 && this.setState(e.ENTER_RING);
                            break;
                        case e.SPAWN_STAIR:
                            this.stateSetupRequired() && (this.instantRotate = !0, this.animate("run", 0), this.currentAnim.timeScale = this.typeConfig.SPEED / 3), this.introAgent ? this.splineValue += t * this.typeConfig.SPEED * .025 : this.splineValue += t * this.typeConfig.SPEED * .05, this.translateVector.copy(this.mesh.position);
                            var i = Phaser.Math.clamp(this.splineValue, .001, .999);
                            this.mesh.position.copy(this.stairSpline.getPointAt(i)), this.translateVector.sub(this.mesh.position), this.translateVector.y = 0, this.translateVector.normalize().multiplyScalar(-1), this.rotationHelper.lookAt(this.translateVector), this.splineValue > .99 && this.setState(this.states.ENTER_RING);
                            break;
                        case e.ENTER_RING:
                            this.stateSetupRequired() && (this.enterRingTarget.copy(this.mesh.position), this.env.getClosestPointOnFightAreaEdge(this.enterRingTarget), this.animate("run", .2), this.currentAnim.timeScale = this.typeConfig.SPEED / 3, this.approachAttack = !1), this.translateVector.copy(this.enterRingTarget), this.translateVector.sub(this.mesh.position), this.translateVector.normalize(), this.rotationHelper.lookAt(this.translateVector), this.translateVector.multiplyScalar(t * this.typeConfig.SPEED), this.mesh.position.length() < this.env.AGENT_WALK_RADIUS + .1 ? (this.mesh.position.copy(this.enterRingTarget), this.setState(this.states.APPROACH)) : this.mesh.position.add(this.translateVector);
                            break;
                        case e.APPROACH:
                            if (this.stateSetupRequired() && (!this.approachAttack && Math.random() < .4 && (this.approachAttack = !0), this.approachAttack ? this.approachDist = this.attackDistance : this.approachDist = 4 + 5 * Math.random(), this.approachAttack = !0, this.animate("run", .2), this.currentAnim.timeScale = this.typeConfig.SPEED / 3), this.translateVector.copy(this.player.mesh.position), this.translateVector.sub(this.mesh.position), this.translateVector.length() < this.approachDist) {
                                this.setState(this.states.IDLE);
                                break
                            }
                            this.translateVector.normalize(), this.rotationHelper.lookAt(this.translateVector), this.translateVector.multiplyScalar(t * this.typeConfig.SPEED), this.mesh.position.add(this.translateVector);
                            break;
                        case e.IDLE:
                            this.stateSetupRequired() && (this.stateTimer = 4 * Math.random(), this.animate("idle", .5), this.tauntTimer < 0 && Math.random() < this.typeConfig.TAUNT_CHANCE && (this.tauntTimer = this.tauntTimerLength, this.setState(e.TAUNT))), this.translateVector.copy(this.player.mesh.position), this.translateVector.sub(this.mesh.position), this.rotationHelper.lookAt(this.translateVector), this.translateVector.length() < 1.5 * this.attackDistance && this.setState(this.states.ATTACK), this.stateTimer -= t, this.stateTimer < 0 && this.setState(this.states.APPROACH);
                            break;
                        case e.STUNNED:
                            this.stateSetupRequired() && (this.stateTimer = this.animate("hit", .1), this.stateTimer /= .8, this.currentAnim.timeScale = .8), this.stateTimer < 0 && this.setState(this.states.IDLE);
                            break;
                        case e.FALL:
                            this.stateSetupRequired() && (this.stateTimer = .5 + 1.2 * Math.random(), this.animate("fall", .1), this.currentAnim.clampWhenFinished = !0, this.currentAnim.repetitions = 0), this.stateTimer < 0 && this.setState(this.states.GETUP);
                            break;
                        case e.SWING:
                            this.attackStateTimer -= t, this.attackStateTimer <= 0 && (this.animate("idle", .3), this.setState(this.states.IDLE));
                            break;
                        case e.GETUP:
                            this.stateSetupRequired() && (this.stateTimer = this.animate("get_up", .1), this.currentAnim.clampWhenFinished = !0, this.currentAnim.repetitions = 0), this.stateTimer <= 0 && this.setState(this.states.IDLE);
                            break;
                        case e.DEAD:
                            if (this.stateSetupRequired()) {
                                if (this.animate("fall", .1), this.currentAnim.clampWhenFinished = !0, this.currentAnim.repetitions = 0, this.isBoss() && !this.sndBossKo.isPlaying && this.sndBossKo.play(), !this.isBoss()) {
                                    var a = this.game.getRndInt(1, 7);
                                    this.game.soundManager.playSfx("enemyOut0".concat(a), .5, 1, .3)
                                }
                                this.stateTimer = 6, this.triggerDeathParticle = !0
                            }
                            this.stateTimer -= t, this.material.uniforms.dissolveFactor.value = this.stateTimer / 4.5, this.triggerDeathParticle && this.stateTimer < 3 && (this.triggerDeathParticle = !1, this.effectPosition.copy(this.blobShadow.mesh.position), this.effectPosition.y += .5, this.game.particleManager.triggerEmitterPool("agent_smoke", this.effectPosition), this.blobShadow.setVisible(!1)), this.stateTimer < 0 && (this.removeThis = !0);
                            break;
                        case e.KNOCK_OUT:
                            this.stateSetupRequired() && (this.animate("fall", .1), this.currentAnim.clampWhenFinished = !0, this.currentAnim.repetitions = 0, this.knockOutVector.normalize(), this.knockOutVector.multiplyScalar(20), this.knockOutVector.y = 20, this.isBoss() || this.game.soundManager.playSfx("enemyFall", .5, 1, .4), this.isBoss() && !this.sndBossKo.isPlaying && this.sndBossKo.play(), this.stateTimer = 3.5), this.knockOutVector.y -= 40 * t, this.translateVector.copy(this.knockOutVector), this.translateVector.multiplyScalar(t), this.mesh.position.add(this.translateVector), this.stateTimer -= t, this.stateTimer < 0 && (this.removeThis = !0);
                            break;
                        case e.ATTACK:
                            if (this.stateSetupRequired()) {
                                this.attackStateTimer = this.animate(this.animKeyAnticipation, .2);
                                var s = this.typeConfig.ATTACK_CHARGE_TIME / this.attackStateTimer;
                                this.currentAnim.timeScale = 1 / s, this.attackStateTimer = this.typeConfig.ATTACK_CHARGE_TIME, this.setAttackState(this.attackStates.ANTICIPATE)
                            }
                            this.player.isAlive() || this.setState(e.IDLE);
                            var n = this.attackStates;
                            switch (this.attackState) {
                                case n.ANTICIPATE:
                                    this.attackStateTimer -= t, this.attackStateTimer <= 0 && (this.attackStateTimer = this.animate(this.animKeyAction, .2), this.currentAnim.timeScale = 1.5, this.attackStateTimer /= 1.5, this.setAttackState(this.attackStates.SWING), this.attackProcDelay = .5 * this.attackStateTimer, this.mesh.getWorldDirection(this.translateVector), this.translateVector.y = 0, this.isBoss() ? this.game.soundManager.playSfx("bossAttack", .7, 1, .2) : this.playAttackSound(1));
                                    break;
                                case n.SWING:
                                    this.attackStateTimer -= t, this.attackProcDelay -= t, this.attackProcDelay < 0 && (this.attackProcDelay = 100, this.attackPlayer(this.mesh.position, this.translateVector, this.typeConfig.RANGE, this.typeConfig.DOT_ANGLE, this.typeConfig.DAMAGE)), this.attackStateTimer <= 0 && (this.animate("idle", .3), this.setState(this.states.IDLE))
                            }
                            break;
                        case e.TAUNT:
                            this.stateSetupRequired() && (this.stateTimer = this.animate("taunt", .5), this.stateTimer /= .5, this.currentAnim.timeScale = .5, this.game.soundManager.playSfx("enemtTaunt01", .35, 1, .2)), this.stateTimer < 0 && this.setState(e.IDLE)
                    }
                    this.mesh.position.add(this.pushVector), this.knockBackVector.lerp(this.zeroVector, 5 * t), this.pushVector.copy(this.knockBackVector).multiplyScalar(t), this.mesh.position.add(this.pushVector), this.state !== this.states.STUNNED && this.state !== this.states.FALL || this.env.constrainAgentMovement(this.mesh.position), this.pushVector.set(0, 0, 0), this.instantRotate ? (this.instantRotate = !1, this.mesh.quaternion.copy(this.rotationHelper.quaternion)) : this.mesh.quaternion.slerp(this.rotationHelper.quaternion, 5 * t), this.mixer.update(t), this.blobShadow.update(t), this.isHardEnemy() && this.torchParticle.visible && this.torchBone && (this.torchBone.getWorldPosition(this.torchParticleSample), this.torchParticle.emitters[0].setPosition(this.torchParticleSample)), this.isBoss() && this.bossAuraFX.visible && this.bossSparksFX.visible && (this.bossParticleBone.getWorldPosition(this.bossParticlesSample), this.bossAuraFX.emitters[0].setPosition(this.bossParticlesSample), this.bossSparksFX.emitters[0].setPosition(this.bossParticlesSample))
                }
            }()
        }, {
            key: "applyDamage",
            value: function() {
                return function(t, e, i) {
                    if (this.state === this.states.DEAD || e < this.config.KNOCK_DAMAGE_IGNORE && (this.state === this.states.FALL || this.state === this.states.GETUP)) return !1;
                    if (this.effectPosition.copy(this.mesh.position), this.effectPosition.y += 1.5, Math.random() < .5 ? this.game.particleManager.triggerEmitterPool("pow1", this.effectPosition) : this.game.particleManager.triggerEmitterPool("pow2", this.effectPosition), Math.random() < .5 ? this.game.soundManager.playSfx("hit1", .7, 1, .2) : this.game.soundManager.playSfx("hit2", .7, 1, .2), this.knockBackVector.copy(t), this.knockBackVector.multiplyScalar(i), this.translateVector.copy(t), this.translateVector.multiplyScalar(-1), this.rotationHelper.lookAt(this.translateVector), this.life -= e, this.life <= 0)
                        if (this.setState(this.states.DEAD), this.game.gameState.triggerAgentDeath(this.typeConfig), this.isBoss() && this.pickupManager.triggerMultiplePickups(this.mesh.position, 1, !1, !0), this.forceSpecialDrop) this.pickupManager.triggerMultiplePickups(this.mesh.position, 1, !0);
                        else {
                            var a = Math.floor(Math.random() * (this.typeConfig.MAX_DROPS + 1));
                            this.pickupManager.triggerMultiplePickups(this.mesh.position, a)
                        } return e > this.config.KNOCK_DAMAGE || this.state === this.states.STUNNED || this.state === this.states.GETUP || this.state === this.states.DEAD ? e > this.config.KNOCK_DAMAGE && this.state === this.states.DEAD ? (this.knockOutVector.copy(t), this.knockOutVector.multiplyScalar(20), this.knockOutVector.add(this.mesh.position), this.env.checkKnockedOutOfMap(this.knockOutVector) && (this.knockOutVector.normalize(), this.setState(this.states.KNOCK_OUT))) : this.state !== this.states.DEAD && this.setState(this.states.FALL) : this.setState(this.states.STUNNED), !0
                }
            }()
        }, {
            key: "attackPlayer",
            value: function() {
                return function(t, e, i, a, s) {
                    t.distanceXZ(this.player.mesh.position) > i || (this.attackDir.copy(this.player.mesh.position), this.attackDir.sub(t), this.attackDir.y = 0, this.attackDir.normalize(), e && this.attackDir.dot(e) < a || this.player.applyDamage(this.attackDir, s))
                }
            }()
        }, {
            key: "isBoss",
            value: function() {
                return function() {
                    return this.agentType === this.game.gameConfig.AGENT_TYPES.BOSS
                }
            }()
        }, {
            key: "isHardEnemy",
            value: function() {
                return function() {
                    return this.agentType === this.game.gameConfig.AGENT_TYPES.HARD
                }
            }()
        }, {
            key: "isAlive",
            value: function() {
                return function() {
                    return this.life > 0
                }
            }()
        }, {
            key: "inStairs",
            value: function() {
                return function() {
                    return this.state === this.states.SPAWN_STAIR
                }
            }()
        }, {
            key: "setState",
            value: function() {
                return function(t) {
                    this.state = t, this.newState = !0
                }
            }()
        }, {
            key: "setAttackState",
            value: function() {
                return function(t) {
                    this.attackState = t
                }
            }()
        }, {
            key: "stateSetupRequired",
            value: function() {
                return function() {
                    return !!this.newState && (this.newState = !1, !0)
                }
            }()
        }, {
            key: "playAttackSound",
            value: function() {
                return function(t) {
                    var e = Math.floor(3 * Math.random()) + 1;
                    this.game.soundManager.playSfx("attack0".concat(e), .7, t, .2)
                }
            }()
        }]) && z(e.prototype, i), a && z(e, a), t
    }();

    function X(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function q(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var J = function() {
        function t(e, i, a, s) {
            var r;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.env = i, this.player = a, this.pickupManager = s, this.agentTypes = this.game.gameConfig.AGENT_TYPES, this.agentConfigs = this.game.gameConfig.AGENT_STATS.AGENTS, this.agentTypesArray = [this.agentConfigs[this.agentTypes.EASY], this.agentConfigs[this.agentTypes.MEDIUM], this.agentConfigs[this.agentTypes.HARD]], this.agents = [], this.agentPools = (X(r = {}, this.agentTypes.EASY, []), X(r, this.agentTypes.MEDIUM, []), X(r, this.agentTypes.HARD, []), X(r, this.agentTypes.BOSS, []), r), this.pushVector = new n.Vector3, this.attackDir = new n.Vector3, this.configWave = this.game.gameConfig.WAVE, this.fundIncreaseDelayLength = this.configWave.FUND_INCREASE_DELAY, this.spendDelayLength = this.configWave.SPEND_DELAY, this.fixedSpecialDropsIndex = {
                5: !0,
                9: !0
            }, this.bossSpawnDelay = this.agentConfigs[this.agentTypes.BOSS].SPAWN_DELAY, this.bossHealthIncrease = this.agentConfigs[this.agentTypes.BOSS].HEALTH_INCREASE_PER_DEATH, this.bossSpawnTimer = this.bossSpawnDelay, this.bossAlive = !1, this.boss = null, this.healthIncreaseMultiplier = 0
        }
        var e, i, a;
        return e = t, (i = [{
            key: "_updateBossSpawnTimer",
            value: function() {
                return function(t) {
                    this.bossAlive || this.tutorialBlockSpawn || this.introBlock || (this.bossSpawnTimer -= t, this.bossSpawnTimer < 0 && (this.bossAlive = !0, this.bossSpawnTimer = this.bossSpawnDelay, this.boss = this._spawnAgentType(this.agentTypes.BOSS), this.boss.noRefunds = !0, this.boss.life += this.bossHealthIncrease * this.healthIncreaseMultiplier, this.boss.mesh.scale.set(3, 3, 3), this.boss.maxLife = this.boss.life, this.game.gameState.gameUI.setBossRef(this.boss), this.game.gameState.gameUI.showBossUI(), this.game.soundManager.playSfx("bossEnter", .7)))
                }
            }()
        }, {
            key: "clear",
            value: function() {
                return function() {
                    this.fundWave = 0, this.funds = this.configWave.FUNDS_START, this.fundIncreaseDelay = 2, this.spendDelay = this.spendDelayLength, this.tutorialBlockSpawn = !1, this.introBlock = !0, this._clearAllAgents(), this.agentIndex = 0, this.healthIncreaseMultiplier = 0, this.bossAlive = !1, this.bossSpawnTimer = this.bossSpawnDelay, this.spawnIntroAgents(), this.pickupManager.setEnemyWaveIndex(0)
                }
            }()
        }, {
            key: "setTutorialBlockSpawn",
            value: function() {
                return function(t) {
                    this.tutorialBlockSpawn = t
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function(t) {
                    this._calcPushVectors(), this._updateFundWave(t), this._updateBossSpawnTimer(t);
                    for (var e = 0; e < this.agents.length; e++)
                        if (this.agents[e].update(t), this.agents[e].removeThis) {
                            var i = this.agents[e];
                            this.agents[e] = this.agents[this.agents.length - 1], this.agents.pop(), this.refundAgent(i), i.disable();
                            var a = i.agentType;
                            this.agentPools[a].push(i), e--;
                            var s = this.game.gameConfig.TUTORIAL_EVENT.KILL;
                            this.game.gameState.triggerTutorialAdvanceEvent(s), a === this.agentTypes.BOSS && (this.bossAlive = !1, this.bossSpawnTimer = this.bossSpawnDelay, this.healthIncreaseMultiplier++, this.game.gameState.gameUI.setBossRef(null), this.game.gameState.gameUI.hideBossUI())
                        }
                }
            }()
        }, {
            key: "_calcPushVectors",
            value: function() {
                return function() {
                    for (var t, e = 0; e < this.agents.length; e++)
                        if ((t = this.agents[e]).isAlive() && !t.inStairs()) {
                            for (var i = e + 1; i < this.agents.length; i++) this.agents[i].isAlive() && (t.inStairs() || this._pushAwayObjects(t, this.agents[i]));
                            this._pushAwayObjects(t, this.player)
                        }
                }
            }()
        }, {
            key: "_pushAwayObjects",
            value: function() {
                return function(t, e) {
                    this.pushVector.copy(e.mesh.position), this.pushVector.sub(t.mesh.position), this.pushVector.y = 0;
                    var i = this.pushVector.length() - (t.radius + e.radius);
                    i > 0 || (this.pushVector.normalize().multiplyScalar(.5 * i), t.pushVector.add(this.pushVector), e.pushVector.sub(this.pushVector))
                }
            }()
        }, {
            key: "attackAgents",
            value: function() {
                return function(t, e, i, a, s, n) {
                    for (var r = 0, o = 0; o < this.agents.length; o++) t.distanceXZ(this.agents[o].mesh.position) > i || (this.attackDir.copy(this.agents[o].mesh.position), this.attackDir.sub(t), this.attackDir.y = 0, this.attackDir.normalize(), e && this.attackDir.dot(e) < a || this.agents[o].applyDamage(this.attackDir, s, n) && r++);
                    return r
                }
            }()
        }, {
            key: "_updateFundWave",
            value: function() {
                return function(t) {
                    if (!this.tutorialBlockSpawn && !this.introBlock) {
                        if (this.fundIncreaseDelay -= t, this.fundIncreaseDelay < 0) {
                            this.fundIncreaseDelay = this.fundIncreaseDelayLength, this.fundWave++, this.pickupManager.setEnemyWaveIndex(this.fundWave);
                            var e = this.fundWave * this.configWave.FUND_INCREASE_RATE;
                            e > this.configWave.FUND_MAX && (e = this.configWave.FUND_MAX), this.funds += e, this.game.DEBUG_LOG_WAVE && console.log("New wave: " + this.fundWave + " Added funds: " + e + " total: " + this.funds)
                        }
                        this.agents.length >= this.configWave.MAX_AGENTS || (this.spendDelay -= t, this.spendDelay < 0 && this._spawnFundAgent() && (this.spendDelay = this.spendDelayLength))
                    }
                }
            }()
        }, {
            key: "_spawnFundAgent",
            value: function() {
                return function() {
                    var t = this._getBestAffordableAgentType();
                    return !t || (this.funds -= this.agentConfigs[t].COST, this._spawnAgentType(t), !0)
                }
            }()
        }, {
            key: "_spawnAgentType",
            value: function() {
                return function(t) {
                    var e;
                    return (e = this.agentPools[t].length < 1 ? new Y(this.game, t, this.env, this.player, this.pickupManager) : this.agentPools[t].pop()).init(), this.agents.push(e), this.game.DEBUG_LOG_WAVE && console.log("Spawned", t, "count:", this.agents.length, "funds", this.funds), e.forceSpecialDrop = !!this.fixedSpecialDropsIndex[this.agentIndex], this.agentIndex++, e
                }
            }()
        }, {
            key: "spawnIntroAgents",
            value: function() {
                return function() {
                    for (var t = [this._spawnAgentType(this.agentTypes.EASY), this._spawnAgentType(this.agentTypes.MEDIUM), this._spawnAgentType(this.agentTypes.EASY)], e = 0; e < t.length; e++) {
                        var i = t[e];
                        i.init(!0, e), i.noRefunds = !0
                    }
                }
            }()
        }, {
            key: "refundAgent",
            value: function() {
                return function(t) {
                    t.typeConfig.COST && (t.noRefunds ? t.noRefunds = !1 : (this.funds += t.typeConfig.COST * this.configWave.REFUND_FACTOR, this.game.DEBUG_LOG_WAVE && console.log("refunded", t.typeConfig.COST * this.configWave.REFUND_FACTOR)))
                }
            }()
        }, {
            key: "_getBestAffordableAgentType",
            value: function() {
                return function() {
                    if (this.funds < this.agentTypesArray[0].COST) return null;
                    for (var t = this.agentTypesArray.length - 1; t >= 0; t--)
                        if (this.funds >= this.agentTypesArray[t].COST) return this.agentTypesArray[t].KEY;
                    return null
                }
            }()
        }, {
            key: "triggerIntroComplete",
            value: function() {
                return function() {
                    this.introBlock = !1, this._clearAllAgents()
                }
            }()
        }, {
            key: "_clearAllAgents",
            value: function() {
                return function() {
                    for (; this.agents.length > 0;) {
                        var t = this.agents.pop();
                        t.disable(), this.agentPools[t.agentType].push(t)
                    }
                }
            }()
        }]) && q(e.prototype, i), a && q(e, a), t
    }();

    function Z(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var Q = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.game = e, this.cache = {}, this.timeUniforms = [], this.timeElapsed = 0, this.createMaterials()
            }
            var e, i, a;
            return e = t, (i = [{
                key: "getMaterial",
                value: function() {
                    return function(t, e) {
                        if (!this.cache[t]) return console.log("missing material", t), null;
                        if (e) {
                            var i = this.cache[t],
                                a = i.clone();
                            for (var s in i.uniforms) i.uniforms[s].value.image && (a.uniforms[s].value = i.uniforms[s].value);
                            return a
                        }
                        return this.cache[t]
                    }
                }()
            }, {
                key: "update",
                value: function() {
                    return function(t) {
                        this.timeElapsed += t;
                        for (var e = 0; e < this.timeUniforms.length; e++) this.timeUniforms[e].uniforms.time.value = this.timeElapsed
                    }
                }()
            }, {
                key: "createMaterials",
                value: function() {
                    return function() {
                        var t = this.game.cache.getThreeTexture("env");
                        t.magFilter = n.NearestFilter, t.minFilter = n.NearestFilter, this.cache.envFog = this._createEnvFogMaterial("env"), this.cache.envFogClose = this.getMaterial("envFog", !0), this.cache.envFogClose.uniforms.fogVerticalStart.value = 0, this.cache.envFogClose.uniforms.fogVerticalEnd.value = -10, this.cache.envFogClose.uniforms.fogHorizontalStart.value = 0, this.cache.envFogClose.uniforms.fogHorizontalEnd.value = 250, this.cache.blobshadow = this._createShadowMaterial(), this.cache.chargeIndicator = new n.MeshBasicMaterial({
                            map: this.game.cache.getThreeTexture("chargeIndicator"),
                            alphaTest: .005,
                            transparent: !0
                        }), this.cache.cylinder = this._createCylinderMaterial(), this.cache.player = this._createPlayerMaterial(), this.cache.tornado = this._createTornadoMaterial(), this.cache.agent = this._createAgentMaterial("enemy_atlas"), this.cache.agentStatic = this.getMaterial("envFogClose", !0), this.cache.agentStatic.uniforms.map.value = this.game.cache.getThreeTexture("enemy_atlas")
                    }
                }()
            }, {
                key: "_createPlayerMaterial",
                value: function() {
                    return function() {
                        var t = this.game.cache.getThreeTexture("playerChar_atlas");
                        return t.minFilter = n.NearestMipMapLinearFilter, t.magFilter = n.NearestFilter, new n.MeshBasicMaterial({
                            map: t,
                            skinning: !0,
                            fog: !1
                        })
                    }
                }()
            }, {
                key: "_createCylinderMaterial",
                value: function() {
                    return function() {
                        var t = this.game.cache.getThreeTexture("tornado");
                        t.wrapS = n.RepeatWrapping, t.wrapT = n.RepeatWrapping;
                        var e = this.game.cache.getThreeTexture("dissolve");
                        e.wrapS = n.RepeatWrapping, e.wrapT = n.RepeatWrapping;
                        var i = new n.ShaderMaterial({
                            uniforms: {
                                map: {
                                    value: t
                                },
                                noise: {
                                    value: e
                                },
                                time: {
                                    value: 0
                                },
                                color_base: {
                                    value: new n.Color
                                },
                                color_highlight: {
                                    value: new n.Color
                                },
                                opacity: {
                                    value: 1
                                }
                            },
                            defines: {},
                            vertexShader: this.game.cache.getShader("cylinder_vs"),
                            fragmentShader: this.game.cache.getShader("cylinder_fs"),
                            side: n.DoubleSide,
                            blending: n.AdditiveBlending,
                            transparent: !0,
                            depthWrite: !1
                        });
                        return this.timeUniforms.push(i), i
                    }
                }()
            }, {
                key: "_createTornadoMaterial",
                value: function() {
                    return function() {
                        var t = this.game.cache.getThreeTexture("enemy_atlas");
                        return t.minFilter = n.NearestMipMapLinearFilter, t.magFilter = n.NearestFilter, new n.MeshBasicMaterial({
                            map: t,
                            fog: !1,
                            transparent: !0,
                            depthWrite: !1
                        })
                    }
                }()
            }, {
                key: "_createEnvFogMaterial",
                value: function() {
                    return function(t) {
                        var e = this.game.cache.getThreeTexture(t);
                        return e.magFilter = n.NearestFilter, e.minFilter = n.NearestFilter, new n.ShaderMaterial({
                            uniforms: {
                                map: {
                                    value: e
                                },
                                fogVerticalStart: {
                                    value: -75
                                },
                                fogVerticalEnd: {
                                    value: -100
                                },
                                fogHorizontalStart: {
                                    value: 0
                                },
                                fogHorizontalEnd: {
                                    value: 300
                                }
                            },
                            defines: {},
                            vertexShader: this.game.cache.getShader("env_fog_vs"),
                            fragmentShader: this.game.cache.getShader("env_fog_fs")
                        })
                    }
                }()
            }, {
                key: "_createShadowMaterial",
                value: function() {
                    return function() {
                        var t = this.game.cache.getThreeTexture("shadow");
                        return new n.ShaderMaterial({
                            uniforms: {
                                map: {
                                    value: t
                                },
                                opacity: {
                                    value: 1
                                }
                            },
                            defines: {},
                            vertexShader: this.game.cache.getShader("shadow_vs"),
                            fragmentShader: this.game.cache.getShader("shadow_fs"),
                            side: n.DoubleSide,
                            transparent: !0,
                            depthWrite: !1
                        })
                    }
                }()
            }, {
                key: "_createAgentMaterial",
                value: function() {
                    return function(t) {
                        return new n.ShaderMaterial({
                            uniforms: {
                                map: {
                                    value: this.game.cache.getThreeTexture(t)
                                },
                                dissolve: {
                                    value: this.game.cache.getThreeTexture("dissolve")
                                },
                                dissolveFactor: {
                                    value: .5
                                }
                            },
                            skinning: !0,
                            vertexShader: this.game.cache.getShader("agent_vs"),
                            fragmentShader: this.game.cache.getShader("agent_fs"),
                            transparent: !0
                        })
                    }
                }()
            }]) && Z(e.prototype, i), a && Z(e, a), t
        }(),
        $ = i(165);

    function tt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var et = function() {
        function t(e, i) {
            for (var a in function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.game = e, this.scene = i, this.sheepfx = new $.a, this.config = this.createConfig(), this.fx = {}, this.config.effect) this.fx[a] = {
                pool: []
            };
            this.active = [], this.resize(), this.createEmitterPools(), this.singleInstances = []
        }
        var e, i, a;
        return e = t, (i = [{
            key: "createConfig",
            value: function() {
                return function() {
                    return {
                        effect: {
                            swirlFloor: {
                                json: "swirlFloor",
                                tex: "smoke"
                            },
                            charge: {
                                json: "charge",
                                tex: "glow"
                            },
                            pow1: {
                                json: "pow",
                                tex: "pow01"
                            },
                            pow2: {
                                json: "pow",
                                tex: "pow02"
                            },
                            groundSmokeSmall: {
                                json: "ground_smoke_small",
                                tex: "smoke"
                            },
                            groundSmokeBig: {
                                json: "ground_smoke_big",
                                tex: "smoke"
                            },
                            pickup_energy: {
                                json: "pickup_energy",
                                tex: "glow"
                            },
                            pickup_special: {
                                json: "pickup_special",
                                tex: "glow"
                            },
                            pickup_health: {
                                json: "pickup_health",
                                tex: "glow"
                            },
                            agent_smoke: {
                                json: "agent_smoke",
                                tex: "smoke"
                            },
                            torch_particle: {
                                json: "torch",
                                tex: "torch_tex"
                            },
                            boss_aura: {
                                json: "bossAura",
                                tex: "bossAura_tex"
                            },
                            boss_spraks: {
                                json: "bossSparks",
                                tex: "bossSparks_tex"
                            }
                        }
                    }
                }
            }()
        }, {
            key: "createEmitterPools",
            value: function() {
                return function() {
                    this.emitterPools = {}, this._emiterPoolInit("pow2", 2, 15, 1), this._emiterPoolInit("pow1", 30, 15, 1), this._emiterPoolInit("pickup_energy", 25, 15, 2), this._emiterPoolInit("pickup_special", 25, 15, 2), this._emiterPoolInit("pickup_health", 25, 15, 2), this._emiterPoolInit("agent_smoke", 46, 5, 3)
                }
            }()
        }, {
            key: "getEffectFromPool",
            value: function() {
                return function(t, e) {
                    var i;
                    if (this.fx[t].pool.length > 0)(i = this.fx[t].pool.pop()).reset(!0), i.visible = !0;
                    else {
                        var a = this.config.effect[t],
                            s = this.game.cache.getJSON(a.json);
                        if (!s) return console.log("Json ID ".concat(t, " Not found in cache")), null;
                        var r = this.game.cache.getThreeTexture(a.tex);
                        if (!r) return console.log("Texture ID ".concat(t, " Not found in cache")), null;
                        r.minFilter = n.NearestMipMapLinearFilter, r.magFilter = n.NearestFilter, i = this.sheepfx.effectFromJson(s, r, e), this.scene.add(i)
                    }
                    return i.frustumCulled = !1, i.effectID = t, i.activeID = this.active.length, this.active.push(i), i
                }
            }()
        }, {
            key: "returnAll",
            value: function() {
                return function() {
                    for (; this.active.length > 0;) this.returnEffectToPool(this.active[this.active.length - 1])
                }
            }()
        }, {
            key: "returnEffectToPool",
            value: function() {
                return function(t) {
                    var e = this.fx[t.effectID].pool;
                    e ? (t.visible = !1, e.push(t), this.active[t.activeID] = this.active[this.active.length - 1], this.active[t.activeID].activeID = t.activeID, this.active.pop()) : console.log("Effect pool: ".concat(t.effectID, " not found"))
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function(t) {
                    if (0 !== t) {
                        for (var e in this.sheepfx.update(t), this.emitterPools) this.emitterPools[e].update(t);
                        for (var i = 0; i < this.singleInstances.length; i++)
                            if (this.singleInstances[i].ttl -= t, this.singleInstances[i].ttl < 0) {
                                var a = this.singleInstances.splice(i, 1)[0];
                                this.returnEffectToPool(a), i--
                            }
                    }
                }
            }()
        }, {
            key: "resize",
            value: function() {
                return function() {
                    this.sheepfx.setParticleSize(.5 * this.game.height)
                }
            }()
        }, {
            key: "getEmitterFromEmitterPool",
            value: function() {
                return function(t) {
                    return this.emitterPools[t].getFromPool()
                }
            }()
        }, {
            key: "returnEmitterToEmitterPool",
            value: function() {
                return function(t) {
                    this.emitterPools[t.key].returnToPool(t)
                }
            }()
        }, {
            key: "triggerEmitterPool",
            value: function() {
                return function(t, e) {
                    if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) {
                        var i = e.y;
                        e.y = e.z, e.z = -i
                    }
                    this.emitterPools[t].trigger(e)
                }
            }()
        }, {
            key: "triggerSingleInstance",
            value: function() {
                return function(t, e, i) {
                    var a = this.getEffectFromPool(t);
                    return this.singleInstances.push(a), a.ttl = i, a.position.copy(e), a
                }
            }()
        }, {
            key: "_emiterPoolInit",
            value: function() {
                return function(t, e, i, a) {
                    var s = e * i,
                        n = {
                            ttl: a,
                            effect: this.getEffectFromPool(t, s),
                            pool: [],
                            active: [],
                            manager: this,
                            maxCount: i
                        };
                    n.effect.frustumCulled = !1;
                    for (var r = 1; r < i; r++) n.effect.group.addEmitter(n.effect.emitters[0].copy(e));
                    for (var o = n.effect.emitters, h = 0; h < o.length; h++) o[h].alive = !1, o[h].key = t, n.pool.push(o[h]), o[h].ttl = n.ttl;
                    this.emitterPools[t] = n, n.trigger = function(t) {
                        var e = this.getFromPool();
                        e && (e.setPosition(t), e.ttl = this.ttl, this.active.push(e), e.activeID = this.active.length - 1)
                    }.bind(n), n.getFromPool = function() {
                        if (0 === this.pool.length) return null;
                        var t = this.pool.pop();
                        return t.reset(!0), t.alive = !0, t
                    }.bind(n), n.returnToPool = function(t) {
                        this.pool.push(t), t.alive = !1
                    }.bind(n), n.update = function(t) {
                        if (this.pool.length !== this.maxCount) {
                            n.effect.visible = !0;
                            for (var e = 0; e < this.active.length; e++) {
                                var i = this.active[e];
                                i.ttl -= t, i.ttl < 0 && (this.active[i.activeID] = this.active[this.active.length - 1], this.active[i.activeID].activeID = i.activeID, this.active.pop(), this.returnToPool(i))
                            }
                        }
                    }.bind(n)
                }
            }()
        }]) && tt(e.prototype, i), a && tt(e, a), t
    }();

    function it(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function at(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var st = function() {
        function t(e, i, a) {
            var s, r;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.cameraManager = i, this.player = a, this.config = this.game.gameConfig.PICKUPS, this.pickupTypes = {
                ENERGY: "pickup_energy",
                SPECIAL: "pickup_special",
                HEALTH: "pickup_health"
            }, this.pickups = (it(s = {}, this.pickupTypes.ENERGY, []), it(s, this.pickupTypes.SPECIAL, []), it(s, this.pickupTypes.HEALTH, []), s);
            var o = new n.BoxGeometry(.5, .5, .5),
                h = new n.MeshNormalMaterial;
            this.absorbTargets = (it(r = {}, this.pickupTypes.ENERGY, new n.Mesh(o, h)), it(r, this.pickupTypes.SPECIAL, new n.Mesh(o, h)), it(r, this.pickupTypes.HEALTH, new n.Mesh(o, h)), r), this.absorbTargets[this.pickupTypes.ENERGY].position.set(0, 5, -12), this.absorbTargets[this.pickupTypes.SPECIAL].position.set(0, -6, -12), this.absorbTargets[this.pickupTypes.HEALTH].position.set(0, 5, -12), this.game.DEBUG_PICKUP_TARGETS || (this.absorbTargets[this.pickupTypes.ENERGY].visible = !1, this.absorbTargets[this.pickupTypes.SPECIAL].visible = !1, this.absorbTargets[this.pickupTypes.HEALTH].visible = !1), this.cameraManager.camera.add(this.absorbTargets[this.pickupTypes.ENERGY]), this.cameraManager.camera.add(this.absorbTargets[this.pickupTypes.SPECIAL]), this.cameraManager.camera.add(this.absorbTargets[this.pickupTypes.HEALTH]), this.translateVector = new n.Vector3, this.translateTarget = new n.Vector3, this.pickupSpawn = new n.Vector3, this.pickupSpawnRange = 3, this.enemyWaveIndex = 0
        }
        var e, i, a;
        return e = t, (i = [{
            key: "clear",
            value: function() {
                return function() {
                    for (var t in this.pickups)
                        for (; this.pickups[t].length > 0;) {
                            var e = this.pickups[t].pop();
                            e.alive = !1, this.game.particleManager.returnEmitterToEmitterPool(e)
                        }
                }
            }()
        }, {
            key: "setEnemyWaveIndex",
            value: function() {
                return function(t) {
                    this.enemyWaveIndex = t
                }
            }()
        }, {
            key: "triggerMultiplePickups",
            value: function() {
                return function(t, e) {
                    for (var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], s = 0; s < e; s++) this.pickupSpawn.copy(t), this.pickupSpawn.x += (Math.random() - .5) * this.pickupSpawnRange, this.pickupSpawn.z += (Math.random() - .5) * this.pickupSpawnRange, this.triggerPickup(this.pickupSpawn, i, a)
                }
            }()
        }, {
            key: "triggerPickup",
            value: function() {
                return function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = Math.max(1 - this.enemyWaveIndex / 45, .5);
                    if (!(Math.random() > a) || e || i) {
                        var s, r = this.config.SPECIAL_ENERGY_CHANCE,
                            o = Math.max(r - this.enemyWaveIndex / 90, .17);
                        s = i ? this.pickupTypes.HEALTH : Math.random() > o && !e ? this.pickupTypes.ENERGY : this.pickupTypes.SPECIAL, this.player.state !== this.player.states.SPECIAL || i || (s = this.pickupTypes.ENERGY);
                        var h = this.game.particleManager.getEmitterFromEmitterPool(s);
                        h && (h._position || (h._position = new n.Vector3), h._position.copy(t), h.setPosition(h._position), h._speed = 5, h._pickupType = s, this.pickups[s].push(h))
                    }
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function(t) {
                    for (var e in this.pickups) {
                        this.absorbTargets[e].getWorldPosition(this.translateTarget);
                        for (var i = 0; i < this.pickups[e].length; i++) {
                            var a = this.pickups[e][i];
                            a._speed += 10 * t, this.translateVector.copy(this.translateTarget), this.translateVector.sub(a._position), this.translateVector.length() < 1 ? (a.alive = !1, this.game.particleManager.returnEmitterToEmitterPool(a), this.pickups[e].splice(i, 1), i--, e === this.pickupTypes.HEALTH ? this.player.giveFullHealth() : e === this.pickupTypes.ENERGY ? this.player.addEnergy(this.config.ENERGY.CHARGE) : this.player.addSpecialEnergy(this.config.ENERGY_SPECIAL.CHARGE)) : (this.translateVector.normalize(), this.translateVector.multiplyScalar(a._speed * t), a._position.add(this.translateVector), a.setPosition(a._position))
                        }
                    }
                }
            }()
        }]) && at(e.prototype, i), a && at(e, a), t
    }();

    function nt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var rt = function() {
        function t(e) {
            var i = this;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.dimmer = new Phaser.Graphics(this.game, 0, 0), this.game.world.add(this.dimmer), this.dimmer.beginFill("0x000000"), this.dimmer.drawRect(0, 0, 1, 1), this.dimmer.endFill(), this.dimmer.width = this.game.width, this.dimmer.height = this.game.height, this.dimmer.alpha = .3, this.dimmer.visible = !1, this.dimmer.inputEnabled = !0, this.layout = new s.a.Layout(this.game, this.game.cache.getLayout("layout_options")), this.layout.setup(), this.game.world.add(this.layout), this.isOpen = !1;
            var a = this.layout.getElementById("buttonSound");
            this.game.sound.mute && a.useState("muted"), a.onInputUp.add(function() {
                i.game.soundManager.playSfx("button", 1, 1, .3), "default" === a.getCurrentState() ? (i.game.sound.mute = !0, a.useState("muted")) : (i.game.sound.mute = !1, a.useState("default"))
            }), this.layout.getElementById("buttonTutorial").onInputUp.add(function() {
                i.game.soundManager.playSfx("button", 1, 1, .3), i.game.storageManager.resetTutorialFlags(), i.game.toggoApi.showMidRoll(), i.game.state.start("game")
            }), this.layout.getElementById("buttonRestart").onInputUp.add(function() {
                i.game.soundManager.playSfx("button", 1, 1, .3), i.game.toggoApi.showMidRoll(), i.game.state.start("game")
            }), this.layout.getElementById("buttonContinue").onInputUp.add(function() {
                i.game.soundManager.playSfx("button", 1, 1, .3), i.toggle()
            }), this.isOpen = !0, this.close(!0)
        }
        var e, i, a;
        return e = t, (i = [{
            key: "open",
            value: function() {
                return function() {
                    this.isOpen || (this.isOpen = !0, this.layout.visible = !0, this.dimmer.visible = !0, this.game.toggoApi.track("settings-oeffnen"))
                }
            }()
        }, {
            key: "close",
            value: function() {
                return function(t) {
                    this.isOpen && (this.isOpen = !1, this.layout.visible = !1, this.dimmer.visible = !1, t || this.game.toggoApi.track("settings-schliessen"))
                }
            }()
        }, {
            key: "toggle",
            value: function() {
                return function() {
                    this.isOpen ? this.close() : this.open()
                }
            }()
        }, {
            key: "resize",
            value: function() {
                return function() {
                    this.dimmer.width = this.game.width, this.dimmer.height = this.game.height
                }
            }()
        }]) && nt(e.prototype, i), a && nt(e, a), t
    }();

    function ot(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var ht = function() {
        function t(e, i) {
            var a = this;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.player = i, this.layout = new s.a.Layout(this.game, this.game.cache.getLayout("layout_game")), this.layout.setup(), this.game.world.add(this.layout), this.lifeLerp = 0, this.energyLerp = 0, this.specialLerp = 0, this.lerpTarget = new Phaser.Point, this.characterOrder = this.player.characterOrder, this.charIndex = 0, this.charIcons = [], this.characterOrder.forEach(function(t) {
                var e = {
                    active: a.layout.getElementById("labelChar_0".concat(t.ID, "_active")),
                    alive: a.layout.getElementById("labelChar_0".concat(t.ID, "_available")),
                    ko: a.layout.getElementById("labelChar_0".concat(t.ID, "_ko"))
                };
                a.charIcons.push(e)
            }), this.charIcons.forEach(function(t) {
                a.fixCharIcon(t)
            }), this.charIconShuiPositions = [];
            for (var n = 3; n >= 1; n--) this.charIconShuiPositions.push(this.layout.getElementById("labelChar_0".concat(n, "_ko")).shui.position);
            this.reorderCharIcons(), this.setStartingActiveIcon(), this.lblBossLifeBar = this.layout.getElementById("labelBoss_hp"), this.groupBoss = this.layout.getElementById("groupBoss"), this.groupBoss.visible = !1, this.buttonAttack = this.layout.getElementById("buttonAttack"), this.buttonAttack.onInputDown.add(function() {
                a.buttonAttack._keyDown = !0
            }), this.buttonAttack.onCooldown = !1, this.buttonAttack.onInputUp.add(function(t, e, i) {
                a.buttonAttack._keyDown = !1, i && a.player.triggerSpecialAttack()
            }), this.buttonAttackOff = this.layout.getElementById("buttonAttack"), this.rect = new Phaser.Rectangle, this.buttonAttackOff.crop(this.rect, !0), this.buttonAttackOff.anchor.set(.5), this.buttonAttackOff.originalPosy = this.buttonAttackOff.shui.position.y, this.buttonAttackTween = this.game.add.tween(this.buttonAttackOff.scale).to({
                x: 1.1,
                y: 1.1
            }, 500, Phaser.Easing.Sinusoidal.InOut, !1, 0, -1, !0), this.buttonOptions = this.layout.getElementById("buttonOptions"), this.buttonOptions.onInputDown.add(function() {
                a.game.soundManager.playSfx("button", 1, 1, .3), a.buttonOptions._keyDown = !0, a.settingsUI.toggle()
            }), this.buttonOptions.onInputUp.add(function() {
                a.buttonOptions._keyDown = !1
            }), this.buttonOptions.visible = !1, this.groupHUD = this.layout.getElementById("groupHUD"), this.lifeBar = this.layout.getElementById("labelBarHp"), this.energyBar = this.layout.getElementById("labelBarStamina"), this.varTextScore = this.layout.getElementById("varTextScore"), this.scoreLerp = 0, this.textComboCounter = this.layout.getElementById("varTextComboCounter"), this.textCombo = this.layout.getElementById("textCombo"), this.labelComboBG = this.layout.getElementById("labelComboBG"), this.comboGroup = this.layout.getElementById("groupCombo"), this.comboGroup.parent.remove(this.comboGroup), this.layout.add(this.comboGroup), this.game.add.tween(this.labelComboBG.scale).to({
                x: 1.2,
                y: 1.2
            }, 1e3, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0), this.settingsUI = new rt(this.game), this.game.world.add(this.buttonOptions), this.updateComboCounter(0), this.layout.visible = !1, this.buttonAttackGroup = new Phaser.Group(this.game, this.layout), this.buttonAttackGroup.add(this.layout.getElementById("buttonAttackOff")), this.buttonAttackGroup.add(this.buttonAttack), this.cameraShake = {
                timer: -1,
                length: .7,
                amp: .3,
                displace: new Phaser.Point
            }
        }
        var e, i, a;
        return e = t, (i = [{
            key: "fixCharIcon",
            value: function() {
                return function(t) {
                    t.ko.visible = !0, t.ko.bringToTop(), t.alive.visible = !0, t.alive.bringToTop(), t.active.visible = !0, t.active.bringToTop()
                }
            }()
        }, {
            key: "reorderCharIcons",
            value: function() {
                return function() {
                    for (var t = 0; t < this.characterOrder.length; t++) {
                        var e = this.charIconShuiPositions[t],
                            i = this.charIcons[t];
                        i.active.shui.position = e, i.alive.shui.position = e, i.ko.shui.position = e
                    }
                }
            }()
        }, {
            key: "setStartingActiveIcon",
            value: function() {
                return function() {
                    this.charIcons[0].alive.visible = !1, this.charIcons[1].active.visible = !1, this.charIcons[2].active.visible = !1
                }
            }()
        }, {
            key: "playerDeath",
            value: function() {
                return function() {
                    var t = this.charIcons[this.charIndex];
                    t.active.visible = !1, t.alive.visible = !1, this.charIndex++, this.charIcons[this.charIndex] && this.setNextPlayerActive()
                }
            }()
        }, {
            key: "setNextPlayerActive",
            value: function() {
                return function() {
                    var t = this.charIcons[this.charIndex];
                    t.alive.visible = !1, t.active.visible = !0
                }
            }()
        }, {
            key: "showBossUI",
            value: function() {
                return function() {
                    this.lblBossLifeBar.scale.y = 1, this.groupBoss.visible = !0, this.game.add.tween(this.groupBoss.position).from({
                        x: this.groupBoss.position.x - 300
                    }, 1e3, Phaser.Easing.Back.Out, !0)
                }
            }()
        }, {
            key: "hideBossUI",
            value: function() {
                return function() {
                    var t = this,
                        e = {
                            x: this.groupBoss.position.x,
                            y: this.groupBoss.position.y
                        };
                    this.game.add.tween(this.groupBoss.position).to({
                        x: this.groupBoss.position.x - 300
                    }, 1e3, Phaser.Easing.Back.In, !0).onComplete.add(function() {
                        t.groupBoss.visible = !1, t.groupBoss.position.x = e.x, t.groupBoss.position.y = e.y
                    })
                }
            }()
        }, {
            key: "setBossRef",
            value: function() {
                return function(t) {
                    this.bossRef = t
                }
            }()
        }, {
            key: "updateBossLifeBar",
            value: function() {
                return function(t) {
                    if (this.bossRef) {
                        var e = this.bossRef.life / this.bossRef.maxLife;
                        e = Phaser.Math.clamp(e, 0, 1), this.lblBossLifeBar.scale.y = Phaser.Math.linear(this.lblBossLifeBar.scale.y, e, 5 * t)
                    }
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function(t) {
                    this.updateCameraShake(t), this.updateBossLifeBar(t), this.specialLerp = Phaser.Math.linear(this.specialLerp, this.player.getSpecialEnergyFactor(), 5 * t), this.specialLerp > .95 && (this.specialLerp = 1);
                    var e = Math.round(this.buttonAttack._frame.height * (1 - this.specialLerp));
                    this.rect.setTo(0, e, this.buttonAttack._frame.width, this.buttonAttack._frame.height), this.buttonAttackOff.crop(this.rect, !0), this.buttonAttackOff.shui.position.y = this.buttonAttackOff.originalPosy + e, this.specialLerp < 1 && !this.buttonAttack.onCooldown && (this.buttonAttack.onCooldown = !0, this.buttonAttack.enableInput = !1, this.buttonAttack.tint = 10066329, this.buttonAttackTween.stop(), this.buttonAttackTween.pendingDelete = !1, this.buttonAttackOff.scale.set(1, 1)), 1 === this.specialLerp && this.buttonAttack.onCooldown && (this.buttonAttack.onCooldown = !1, this.buttonAttack.enableInput = !0, this.buttonAttack.tint = 16777215, this.buttonAttackTween.stop(), this.buttonAttackTween.pendingDelete = !1, this.buttonAttackOff.scale.set(1, 1), this.buttonAttackTween.start()), this.buttonAttack.onCooldown && this.buttonAttack.scale.set(1, 1), this.lifeLerp = Phaser.Math.linear(this.lifeLerp, this.player.getLifeFactor(), 5 * t), this.rect.setTo(0, 0, Math.round(this.lifeBar._frame.width * this.lifeLerp), this.lifeBar._frame.height), this.lifeBar.crop(this.rect, !0), this.energyLerp = Phaser.Math.linear(this.energyLerp, this.player.getEnergyFactor(), 5 * t), this.rect.setTo(0, 0, Math.round(this.energyBar._frame.width * this.energyLerp), this.energyBar._frame.height), this.energyBar.crop(this.rect, !0), this.scoreLerp += 20 * t, this.scoreLerp > this.player.score && (this.scoreLerp = this.player.score), this.varTextScore.text = Math.floor(this.scoreLerp)
                }
            }()
        }, {
            key: "updateCameraShake",
            value: function() {
                return function(t) {
                    if (this.cameraShake.timer > 0 && t > 0) {
                        this.cameraShake.timer -= t;
                        var e = this.cameraShake.amp * (this.cameraShake.timer / this.cameraShake.length);
                        this.layout.position.x = (Math.random() - .5) * e * 20, this.layout.position.y = (Math.random() - .5) * e * 20
                    } else this.layout.position.x = 0, this.layout.position.y = 0
                }
            }()
        }, {
            key: "triggerCameraShake",
            value: function() {
                return function(t, e) {
                    this.cameraShake.amp = t, this.cameraShake.length = 1.5 * e, this.cameraShake.timer = this.cameraShake.length
                }
            }()
        }, {
            key: "triggerIntroComplete",
            value: function() {
                return function() {
                    this.layout.visible = !0, this.buttonOptions.visible = !0, this.game.add.tween(this.groupHUD.position).from({
                        x: 0,
                        y: .5 * -this.game.height
                    }, 1500, Phaser.Easing.Back.Out, !0, 0, 0, !1), this.game.add.tween(this.buttonOptions.shui.position).from({
                        x: .5 * -this.game.width,
                        y: .5 * -this.game.height
                    }, 1e3, Phaser.Easing.Back.Out, !0, 500, 0, !1), this.game.add.tween(this.buttonAttackGroup.position).from({
                        y: .5 * this.game.height
                    }, 1e3, Phaser.Easing.Back.Out, !0, 1e3, 0, !1)
                }
            }()
        }, {
            key: "updateComboCounter",
            value: function() {
                return function(t) {
                    0 === t ? this.comboGroup.visible = !1 : this.comboGroup.visible || (this.comboGroup.visible = !0, this.comboTweenShow || (this.comboTweenShow = this.game.add.tween(this.comboGroup.position).to({
                        x: 0,
                        y: 0
                    }, 500, Phaser.Easing.Back.Out, !1, 0, 0, !1)), this.comboTweenShow.stop(), this.comboTweenShow.pendingDelete = !1, this.comboGroup.position.set(.5 * this.game.width, 0), this.comboTweenShow.start()), this.textComboCounter.text = "x" + t.toString(), this.comboTween || (this.comboTween = this.game.add.tween(this.textComboCounter.scale).to({
                        x: 1,
                        y: 1
                    }, 500, Phaser.Easing.Back.Out, !1, 0, 0, !1)), this.comboTween.stop(), this.comboTween.pendingDelete = !1, this.textComboCounter.scale.set(.5), this.comboTween.start()
                }
            }()
        }, {
            key: "blockPlayerInput",
            value: function() {
                return function() {
                    return this.buttonAttack._keyDown || this.buttonOptions._keyDown || this.settingsUI.isOpen
                }
            }()
        }, {
            key: "resize",
            value: function() {
                return function() {
                    this.settingsUI.resize()
                }
            }()
        }]) && ot(e.prototype, i), a && ot(e, a), t
    }();

    function ct(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }
    var ut = function() {
        function t(e, i, a) {
            var n = this;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.game = e, this.player = i, this.agentManager = a, this.agentManager.setTutorialBlockSpawn(!0), this.config = this.game.gameConfig.TUTORIAL, this.steps = this.config.steps, this.storageFlags = this.game.storageManager.saveObj, this.dimmer = new Phaser.Graphics(this.game, 0, 0), this.game.world.add(this.dimmer), this.dimmer.beginFill("0x000000"), this.dimmer.drawRect(0, 0, 1, 1), this.dimmer.endFill(), this.dimmer.width = this.game.width, this.dimmer.height = this.game.height, this.dimmer.alpha = .3, this.dimmer.visible = !1, this.dimmer.inputEnabled = !0, this.dimmer.events.onInputDown.add(function() {
                n.triggerInputAdvance()
            }), this.layout = new s.a.Layout(this.game, this.game.cache.getLayout("layout_tutorial")), this.layout.setup(), this.game.world.add(this.layout), this.btnContinue = this.layout.getElementById("button_1"), this.btnContinue.visible = !1, this.isOpen = !1, this.labelFrame = this.layout.getElementById("frameTutorial"), this.labelFrame.shui.align.y = .32, this.text = this.layout.getElementById("varTextTutorial"), this.text.shui.align.y = .32, this.labelArrow = this.layout.getElementById("labelArrowDown"), this.labelArrow.visible = !1, this.game.add.tween(this.labelArrow.anchor).to({
                y: 1
            }, 500, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0), this.labelMouse = this.layout.getElementById("labelMouse"), this.labelMouse.visible = !1, this.labelHand = this.layout.getElementById("labelArrow"), this.labelHand.visible = !1, this.advanceTimer = -1, this.tutorialEventsCompleted = {}, this.layout.visible = !1
        }
        var e, i, a;
        return e = t, (i = [{
            key: "start",
            value: function() {
                return function() {
                    this.currentStep = null, this.stepIndex = -1, this.advanceTutorial()
                }
            }()
        }, {
            key: "advanceTutorial",
            value: function() {
                return function() {
                    if (this._hideCurrentStep(), this.currentStep && this.currentStep.singleEvent) this.currentStep = null;
                    else {
                        if (this.currentStep = null, this.stepIndex++, this.stepIndex >= this.steps.length) return this.stepIndex = this.steps.length, this.storageFlags.tutorialBaseComplete = !0, this.game.storageManager.checkTutorialFlagsComplete(), void this.agentManager.setTutorialBlockSpawn(!1);
                        var t = this.steps[this.stepIndex];
                        this._setupStep(t), this.labelFrame.scale.set(.5), this.game.add.tween(this.labelFrame.scale).to({
                            x: 1,
                            y: 1
                        }, 500, Phaser.Easing.Back.Out, !0, 0, 0, !1), this.text.scale.set(.5), this.game.add.tween(this.text.scale).to({
                            x: 1,
                            y: 1
                        }, 500, Phaser.Easing.Back.Out, !0, 0, 0, !1)
                    }
                }
            }()
        }, {
            key: "_setupStep",
            value: function() {
                return function(t) {
                    if (this.currentStep = t, this.layout.visible = !0, this.labelArrow.visible = !1, t.text ? this.text.text = t.text : this.game.device.desktop ? this.text.text = t.textDesktop : this.text.text = t.textMobile, this.advanceTimer = -1, t.time && (this.advanceTimer = t.time), t.spawnTutorialEnemy) {
                        var e = this.game.gameConfig.AGENT_TYPES.EASY;
                        this.agentManager._spawnAgentType(e)
                    }
                    t.inputAdvance && (this.dimmer.visible = !0), t.showArrow && (this.labelArrow.visible = !0)
                }
            }()
        }, {
            key: "_hideCurrentStep",
            value: function() {
                return function() {
                    this.advanceTimer = -1, this.layout.visible = !1, this.dimmer.visible = !1
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function(t) {
                    this.advanceTimer > 0 && (this.advanceTimer -= t, this.advanceTimer <= 0 && (this.currentStep.timeoutHide ? this._hideCurrentStep() : this.advanceTutorial()))
                }
            }()
        }, {
            key: "getTutorialFreeze",
            value: function() {
                return function() {
                    return !!this.currentStep && this.currentStep.freezeTime
                }
            }()
        }, {
            key: "triggerInputAdvance",
            value: function() {
                return function() {
                    this.currentStep && (this.currentStep.advanceEvent ? this.triggerTutorialAdvanceEvent(this.currentStep.advanceEvent) : this.advanceTutorial())
                }
            }()
        }, {
            key: "triggerTutorialAdvanceEvent",
            value: function() {
                return function(t) {
                    if (this.currentStep && this.currentStep.advanceEvent === t) {
                        this.tutorialEventsCompleted[t] = !0, this.advanceTutorial();
                        var e = this.game.gameConfig.TUTORIAL_EVENT;
                        t === e.DEATH ? this.storageFlags.tutorialDeathComplete = !0 : t === e.SPECIAL && (this.storageFlags.tutorialSpecialComplete = !0), this.game.storageManager.checkTutorialFlagsComplete()
                    }
                }
            }()
        }, {
            key: "triggerTutorialSetupEvent",
            value: function() {
                return function(t) {
                    this.tutorialEventsCompleted[t] || this.currentStep || this.storageFlags.tutorialBaseComplete && this.config[t] && this._setupStep(this.config[t])
                }
            }()
        }, {
            key: "resize",
            value: function() {
                return function() {
                    this.dimmer.width = this.game.width, this.dimmer.height = this.game.height
                }
            }()
        }]) && ct(e.prototype, i), a && ct(e, a), t
    }();

    function lt(t) {
        return (lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function pt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function ft(t, e) {
        return !e || "object" !== lt(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function mt(t, e, i) {
        return (mt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
            return function(t, e, i) {
                var a = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = gt(t)););
                    return t
                }(t, e);
                if (a) {
                    var s = Object.getOwnPropertyDescriptor(a, e);
                    return s.get ? s.get.call(i) : s.value
                }
            }
        }())(t, e, i || t)
    }

    function gt(t) {
        return (gt = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
            return function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
        }())(t)
    }

    function dt(t, e) {
        return (dt = Object.setPrototypeOf || function() {
            return function(t, e) {
                return t.__proto__ = e, t
            }
        }())(t, e)
    }
    var yt = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), ft(this, gt(e).apply(this, arguments))
        }
        var i, a, s;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && dt(t, e)
        }(e, C), i = e, (a = [{
            key: "init",
            value: function() {
                return function() {
                    for (var t, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                    (t = mt(gt(e.prototype), "init", this)).call.apply(t, [this, {
                        key: "game",
                        url: "data/gamePack.json"
                    }].concat(a)), this.tutorial = !this.game.storageManager.getTutorialComplete(), this.tutorial && this.game.storageManager.resetTutorialFlags()
                }
            }()
        }, {
            key: "createOnce",
            value: function() {
                return function() {
                    var t = this;
                    mt(gt(e.prototype), "createOnce", this).call(this), this.game.gameState = this, this.game.mainScene = new n.Scene, this.game.three.renderer.setClearColor(new n.Color(.517, .854, .96)), this.game.materialCache = new Q(this.game), this.game.particleManager = new et(this.game, this.game.mainScene), this.env = new F(this.game), this.cameraManager = new L(this.game, this.env.getCameraSpline()), this.player = new W(this.game, this.env, this.cameraManager), this.pickupManager = new st(this.game, this.cameraManager, this.player), this.agentManager = new J(this.game, this.env, this.player, this.pickupManager), this.player.setAgentManagerRef(this.agentManager), this.freezeTimer = -1, this.debugPause = !1, this.timeScale = 1, this.game.tweenUpdateCallback = function(e) {
                        e.timeScale = t.timeScale
                    }, this.game.tweenUpdateCallback = this.game.tweenUpdateCallback.bind(this)
                }
            }()
        }, {
            key: "create",
            value: function() {
                return function() {
                    var t = this;
                    mt(gt(e.prototype), "create", this).call(this), this.game.three.show(), this.game.toggoApi.track("play"), this.player.clear(), this.cameraManager.init(), this.cameraManager.setCameraTarget(this.player.mesh), this.agentManager.clear(), this.pickupManager.clear(), this.tutorial && (this.tutorialUI = new ut(this.game, this.player, this.agentManager)), this.gameUI = new ht(this.game, this.player), this.fadeUI = new S(this.game), this.fadeUI.fadeIn(2e3, null), this.game.DEBUG && this.game.input.keyboard.addKey(Phaser.Keyboard.PAGE_DOWN).onDown.add(function() {
                        t.debugPause = !t.debugPause
                    }, this), this.resize()
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function(t) {
                    mt(gt(e.prototype), "update", this).call(this, t);
                    var i = this.game.time.elapsedMS / 1e3;
                    this.timeScale = 1, i > .1 && (i = .1), this.gameUI.settingsUI.isOpen && (i = 0), this.freezeTimer > 0 && (this.freezeTimer -= i, this.timeScale *= .05), this.debugPause && (this.timeScale = 0), this.tutorialUI && this.tutorialUI.getTutorialFreeze() && (this.timeScale = 0);
                    var a = i * this.timeScale;
                    this.player.update(a), this.agentManager.update(a), this.cameraManager.update(i), this.gameUI.update(i), this.tutorialUI && this.tutorialUI.update(a), this.pickupManager.update(a), this.game.materialCache.update(i), this.game.particleManager.update(a), this.game.soundManager.update(i)
                }
            }()
        }, {
            key: "gameOver",
            value: function() {
                return function() {
                    var t = this;
                    this.fadeUI.fadeOut(1e3, function() {
                        t.game.state.start("end", !0, !1, {
                            score: t.player.score
                        })
                    })
                }
            }()
        }, {
            key: "triggerPlayerIntroJumpOut",
            value: function() {
                return function() {
                    this.player.triggerIntroJumpOut()
                }
            }()
        }, {
            key: "triggerIntroComplete",
            value: function() {
                return function() {
                    this.player.triggerIntroComplete(), this.agentManager.triggerIntroComplete(), this.gameUI.triggerIntroComplete(), this.tutorial && this.tutorialUI.start()
                }
            }()
        }, {
            key: "triggerTutorialAdvanceEvent",
            value: function() {
                return function(t) {
                    this.tutorial && this.tutorialUI && this.tutorialUI.triggerTutorialAdvanceEvent(t)
                }
            }()
        }, {
            key: "triggerTutorialSetupEvent",
            value: function() {
                return function(t) {
                    this.tutorial && this.tutorialUI && this.tutorialUI.triggerTutorialSetupEvent(t)
                }
            }()
        }, {
            key: "triggerAgentDeath",
            value: function() {
                return function(t) {
                    this.player.addScore(t.POINTS)
                }
            }()
        }, {
            key: "render",
            value: function() {
                return function(t) {
                    mt(gt(e.prototype), "render", this).call(this, t), this.game.three.renderer.render(this.game.mainScene, this.cameraManager.activeCamera)
                }
            }()
        }, {
            key: "resize",
            value: function() {
                return function() {
                    mt(gt(e.prototype), "resize", this).call(this), this.cameraManager && this.cameraManager.resize(), this.player && this.player.resize(), this.game.particleManager && this.game.particleManager.resize(), this.gameUI && this.gameUI.resize(), this.tutorialUI && this.tutorialUI.resize(), this.fadeUI && this.fadeUI.resize()
                }
            }()
        }, {
            key: "triggerFreezeTime",
            value: function() {
                return function(t) {
                    this.freezeTimer < t && (this.freezeTimer = t)
                }
            }()
        }, {
            key: "shutdown",
            value: function() {
                return function() {
                    mt(gt(e.prototype), "shutdown", this).call(this), this.game.three.hide(), this.gameUI = null, this.tutorialUI = null, this.fadeUI = null
                }
            }()
        }]) && pt(i.prototype, a), s && pt(i, s), e
    }();

    function bt(t) {
        return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function vt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function St(t, e) {
        return !e || "object" !== bt(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function At(t, e, i) {
        return (At = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
            return function(t, e, i) {
                var a = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = kt(t)););
                    return t
                }(t, e);
                if (a) {
                    var s = Object.getOwnPropertyDescriptor(a, e);
                    return s.get ? s.get.call(i) : s.value
                }
            }
        }())(t, e, i || t)
    }

    function kt(t) {
        return (kt = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
            return function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
        }())(t)
    }

    function Et(t, e) {
        return (Et = Object.setPrototypeOf || function() {
            return function(t, e) {
                return t.__proto__ = e, t
            }
        }())(t, e)
    }
    var Tt = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), St(this, kt(e).apply(this, arguments))
        }
        var i, a, n;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Et(t, e)
        }(e, C), i = e, (a = [{
            key: "init",
            value: function() {
                return function(t) {
                    for (var i, a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) s[n - 1] = arguments[n];
                    (i = At(kt(e.prototype), "init", this)).call.apply(i, [this, {
                        key: "menuState",
                        url: "data/menuPack.json"
                    }].concat(s)), this.stateParam = t
                }
            }()
        }, {
            key: "createOnce",
            value: function() {
                return function() {
                    var t = this;
                    At(kt(e.prototype), "createOnce", this).call(this), this.scoreSound = null, this.game.soundManager.getSound("score", function(e) {
                        t.scoreSound = e
                    })
                }
            }()
        }, {
            key: "create",
            value: function() {
                return function() {
                    var t = this;
                    At(kt(e.prototype), "create", this).call(this), this.createUI(), this.fadeUI = new S(this.game), this.fadeUI.fadeIn(1e3, null), this.game.attachButtonSoundTraverse(this.game.world, function() {
                        t.game.soundManager.playSfx("button", 1, 1, .3)
                    })
                }
            }()
        }, {
            key: "createUI",
            value: function() {
                return function() {
                    var t = this;
                    this.layout = new s.a.Layout(this.game, this.game.cache.getLayout("layout_end")), this.layout.setup(), this.game.world.add(this.layout);
                    var e = this.layout.getElementById("buttonSound");
                    this.game.sound.mute && e.useState("muted"), e.onInputUp.add(function() {
                        "default" === e.getCurrentState() ? (t.game.sound.mute = !0, e.useState("muted")) : (t.game.sound.mute = !1, e.useState("default"))
                    }), this.layout.getElementById("buttonReplay").onInputUp.add(function() {
                        t.game.toggoApi.showMidRoll(), t.game.state.start("game")
                    });
                    var i = this.layout.getElementById("buttonHighscore");
                    i.onInputUp.add(function() {
                        t.game.state.start("highscore")
                    }), i.visible = !1;
                    var a = this.layout.getElementById("buttonSubmit");
                    a.onInputUp.add(function() {
                        t.game.state.start("name", !0, !1, t.stateParam)
                    });
                    var n = this.game.storageManager.getBestScore().score,
                        r = this.stateParam.score > n;
                    a.visible = r, i.visible = !r, this.textScore = this.layout.getElementById("varTextScore"), this.textScore.text = 0;
                    var o = this.stateParam.score / 1250 * 1e3 + 500;
                    this.scoreEase = {
                        value: 0
                    };
                    var h = this.game.add.tween(this.scoreEase).to({
                        value: this.stateParam.score
                    }, o, Phaser.Easing.Linear.None, !0, 1e3, 0, !1);
                    h.onStart.add(function() {
                        t.scoreSound && t.scoreSound.play(null, null, .5, !0)
                    }), h.onComplete.add(function() {
                        t.game.add.tween(t.textScore.scale).to({
                            x: 1.2,
                            y: 1.2
                        }, 250, Phaser.Easing.Sinusoidal.InOut, !0, 0, 0, !0), t.scoreSound && t.scoreSound.stop(), t.game.soundManager.playSfx("victory", 1, 1.5)
                    })
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function() {
                    At(kt(e.prototype), "update", this).call(this), this.textScore.text = Math.floor(this.scoreEase.value);
                    var t = Math.min(.1, this.game.time.elapsedMS / 1e3);
                    t > .1 && (t = .1), this.game.soundManager.update(t)
                }
            }()
        }, {
            key: "resize",
            value: function() {
                return function() {
                    At(kt(e.prototype), "resize", this).call(this), this.fadeUI && this.fadeUI.resize()
                }
            }()
        }, {
            key: "shutdown",
            value: function() {
                return function() {
                    At(kt(e.prototype), "shutdown", this).call(this), this.fadeUI = null, this.scoreSound && this.scoreSound.stop()
                }
            }()
        }]) && vt(i.prototype, a), n && vt(i, n), e
    }();

    function _t(t) {
        return (_t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function wt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function Ct(t, e) {
        return !e || "object" !== _t(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Pt(t, e, i) {
        return (Pt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
            return function(t, e, i) {
                var a = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = It(t)););
                    return t
                }(t, e);
                if (a) {
                    var s = Object.getOwnPropertyDescriptor(a, e);
                    return s.get ? s.get.call(i) : s.value
                }
            }
        }())(t, e, i || t)
    }

    function It(t) {
        return (It = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
            return function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
        }())(t)
    }

    function Mt(t, e) {
        return (Mt = Object.setPrototypeOf || function() {
            return function(t, e) {
                return t.__proto__ = e, t
            }
        }())(t, e)
    }
    var xt = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Ct(this, It(e).apply(this, arguments))
        }
        var i, n, o;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Mt(t, e)
        }(e, C), i = e, (n = [{
            key: "init",
            value: function() {
                return function(t) {
                    for (var i, a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) s[n - 1] = arguments[n];
                    (i = Pt(It(e.prototype), "init", this)).call.apply(i, [this, {
                        key: "menuState",
                        url: "data/menuPack.json"
                    }].concat(s)), this.scoreParam = t
                }
            }()
        }, {
            key: "createOnce",
            value: function() {
                return function() {
                    Pt(It(e.prototype), "createOnce", this).call(this), this.maxNameLength = 14
                }
            }()
        }, {
            key: "create",
            value: function() {
                return function() {
                    var t = this;
                    Pt(It(e.prototype), "create", this).call(this), this.playerName = "", this.game.toggoApi.track("namenseingabe"), this.textChangePollTime = 0, this.textChangePollTimeLength = .1, this.lastText = "", this.createUI(), this.fadeUI = new S(this.game), this.fadeUI.fadeIn(500), this.game.attachButtonSoundTraverse(this.game.world, function() {
                        t.game.soundManager.playSfx("button", 1, 1, .3)
                    }), this.inFullscreen = !0, this.stopFullscreen()
                }
            }()
        }, {
            key: "stopFullscreen",
            value: function() {
                return function() {
                    if (this.inFullscreen && (this.inFullscreen = !1, this.previousFullscreenConf = this.game.fsConf.fullscreen, this.game.fsConf.fullscreen = a.a.NONE, a.a.Util.isFullScreen()))
                        if (window.frameElement) try {
                            window.parent.document[this.game.device.cancelFullscreen]()
                        } catch (t) {} else try {
                            window.document[this.game.device.cancelFullscreen]()
                        } catch (t) {}
                }
            }()
        }, {
            key: "resumeFullscreen",
            value: function() {
                return function() {
                    this.inFullscreen || (this.inFullscreen = !0, this.game.fsConf.fullscreen = this.previousFullscreenConf)
                }
            }()
        }, {
            key: "displayErrorPopup",
            value: function() {
                return function() {
                    this.dimmer.visible = !0, this.errorLayout.visible = !0;
                    var t = this.game.gameConfig.textNameInputError;
                    this.textError.setText(t), this.layout.visible = !0
                }
            }()
        }, {
            key: "closeErrorPopup",
            value: function() {
                return function() {
                    this.errorLayout.visible = !1, this.dimmer.visible = !1
                }
            }()
        }, {
            key: "createDimmer",
            value: function() {
                return function() {
                    this.dimmer = this.game.add.graphics(0, 0), this.dimmer.beginFill("0x000000"), this.dimmer.drawRect(0, 0, this.game.width, this.game.height), this.dimmer.endFill(), this.dimmer.alpha = .7, this.dimmer.inputEnabled = !0
                }
            }()
        }, {
            key: "createUI",
            value: function() {
                return function() {
                    var t = this;
                    this.layout = new s.a.Layout(this.game, this.game.cache.getLayout("layout_name")), this.layout.setup(), this.game.world.add(this.layout.getElementById("bgDefault")), this.game.world.add(this.layout), this.createDimmer(), this.dimmer.visible = !1, this.errorLayout = new s.a.Layout(this.game, this.game.cache.getLayout("layout_tutorial")), this.errorLayout.setup(), this.game.world.add(this.errorLayout), this.errorLayout.visible = !1, this.errorLayout.getElementById("labelArrow").visible = !1, this.errorLayout.getElementById("labelMouse").visible = !1, this.errorLayout.getElementById("labelArrowDown").visible = !1, this.textError = this.errorLayout.getElementById("varTextTutorial"), this.btnErrorContinue = this.errorLayout.getElementById("button_1"), this.btnErrorContinue.onInputUp.add(function() {
                        t.closeErrorPopup()
                    }), this.buttonContinue = this.layout.getElementById("buttonContinue"), this.buttonContinue.onInputUp.add(function() {
                        t.validPlayerName(t.playerName) && (t.game.toggoApi.addOnceListener(r.a.event.ADDED, function() {
                            t.game.storageManager.setName(t.playerName), t.game.storageManager.setBestScore(t.scoreParam.score), t.game.state.start("highscore")
                        }), t.game.toggoApi.addOnceListener(r.a.event.ERROR, function() {
                            t.displayErrorPopup()
                        }), t.game.toggoApi.addOnceListener(r.a.event.ERROR_BADWORD, function() {
                            t.displayErrorPopup()
                        }), t.layout.visible = !1, t.game.toggoApi.pushScore(t.playerName, t.scoreParam.score))
                    }), this.buttonContinue.visible = !1, this.game.add.tween(this.buttonContinue.scale).to({
                        x: 1.1,
                        y: 1.1
                    }, 750, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0);
                    var e = this.layout.getElementById("buttonSound");
                    this.game.sound.mute && e.useState("muted"), e.onInputUp.add(function() {
                        "default" === e.getCurrentState() ? (t.game.sound.mute = !0, e.useState("muted")) : (t.game.sound.mute = !1, e.useState("default"))
                    }), this.inputField = this.layout.getElementById("inputName"), this.validPlayerName(this.playerName) && this.inputField.children[0].setText(this.playerName), this.inputField.shui.inputField.focusIn.add(function() {
                        t.game.device.desktop || (t.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT)
                    }, this), this.inputField.shui.inputField.focusOut.add(function() {
                        t.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
                    }, this)
                }
            }()
        }, {
            key: "update",
            value: function() {
                return function() {
                    Pt(It(e.prototype), "update", this).call(this);
                    var t = Math.min(.1, this.game.time.elapsedMS / 1e3);
                    t > .1 && (t = .1), this.game.soundManager.update(t), this.textChangePollTime -= t, this.textChangePollTime < 0 && (this.textChangePollTime = this.textChangePollTimeLength, this.inputField.children[0].value !== this.lastText && (this.lastText = this.inputField.children[0].value, this.onTextChange()));
                    var i = 5 * t;
                    !this.game.device.desktop && PhaserInput.KeyboardOpen ? this.layout.position.y = this.layout.position.y * (1 - i) + .3 * -this.game.height * i : this.layout.position.y = 0
                }
            }()
        }, {
            key: "onTextChange",
            value: function() {
                return function() {
                    this.buttonContinue.visible = !0, this.playerName = this.inputField.shui.inputField.value, this.playerName.length > this.maxNameLength && (this.playerName = this.playerName.slice(0, this.maxNameLength), this.inputField.children[0].setText(this.playerName)), !1 === this.validPlayerName(this.playerName) && (this.buttonContinue.visible = !1)
                }
            }()
        }, {
            key: "validPlayerName",
            value: function() {
                return function(t) {
                    return !!t && t.length > 0 && t.length <= this.maxNameLength
                }
            }()
        }, {
            key: "resize",
            value: function() {
                return function() {
                    Pt(It(e.prototype), "resize", this).call(this), PhaserInput.KeyboardOpen || this.fadeUI && this.fadeUI.resize()
                }
            }()
        }, {
            key: "shutdown",
            value: function() {
                return function() {
                    Pt(It(e.prototype), "shutdown", this).call(this), this.fadeUI = null, this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.resumeFullscreen()
                }
            }()
        }]) && wt(i.prototype, n), o && wt(i, o), e
    }();

    function Ot(t) {
        return (Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Dt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function Rt(t, e) {
        return !e || "object" !== Ot(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Nt(t, e, i) {
        return (Nt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
            return function(t, e, i) {
                var a = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Lt(t)););
                    return t
                }(t, e);
                if (a) {
                    var s = Object.getOwnPropertyDescriptor(a, e);
                    return s.get ? s.get.call(i) : s.value
                }
            }
        }())(t, e, i || t)
    }

    function Lt(t) {
        return (Lt = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
            return function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
        }())(t)
    }

    function Bt(t, e) {
        return (Bt = Object.setPrototypeOf || function() {
            return function(t, e) {
                return t.__proto__ = e, t
            }
        }())(t, e)
    }
    var Ut = function(t) {
            function e() {
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Rt(this, Lt(e).apply(this, arguments))
            }
            var i, a, n;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Bt(t, e)
            }(e, C), i = e, (a = [{
                key: "init",
                value: function() {
                    return function() {
                        for (var t, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                        return (t = Nt(Lt(e.prototype), "init", this)).call.apply(t, [this, {
                            key: "menuState",
                            url: "data/menuPack.json"
                        }].concat(a)), this
                    }
                }()
            }, {
                key: "create",
                value: function() {
                    return function() {
                        var t = this;
                        Nt(Lt(e.prototype), "create", this).call(this), this.game.toggoApi.track("highscore"), this.stateIsActive = !0, this.bestScore = this.game.storageManager.getBestScore(), this.createUI(), this.game.attachButtonSoundTraverse(this.game.world, function() {
                            t.game.soundManager.playSfx("button", 1, 1, .3)
                        })
                    }
                }()
            }, {
                key: "createUI",
                value: function() {
                    return function() {
                        var t = this;
                        this.layout = new s.a.Layout(this.game, this.game.cache.getLayout("layout_highscore")), this.layout.setup(), this.game.world.add(this.layout), this.layout.getElementById("buttonContinue").onInputUp.add(function() {
                            t.game.state.start("menu")
                        });
                        var e = this.layout.getElementById("buttonSound");
                        this.game.sound.mute && e.useState("muted"), e.onInputUp.add(function() {
                            "default" === e.getCurrentState() ? (t.game.sound.mute = !0, e.useState("muted")) : (t.game.sound.mute = !1, e.useState("default"))
                        }), this.textPlayerRank = this.layout.getElementById("varTextPlayerRank"), this.textPlayerRank.text = "99+", this.textPlayerName = this.layout.getElementById("varTextPlayerName"), this.textPlayerScore = this.layout.getElementById("varTextPlayerScore"), this.groups = [];
                        for (var i = 0; i < 10; i++) {
                            var a = this.layout.getElementById("groupScore_" + Phaser.Utils.pad((i + 1).toString(), 2, "0", 1));
                            a.position.x = this.game.width, this.groups.push(a)
                        }
                        var n = this.layout.getElementById("groupPlayerScore");
                        n.position.x = this.game.width, this.groups.push(n), this.game.toggoApi.addOnceListener(r.a.event.LOADED, function(t) {
                            var e = this;
                            if (!1 !== this.stateIsActive) {
                                this.game.nintyninthScore = t[98].score;
                                for (var i = 0; i < 10; i++) {
                                    var a = "textPosition_";
                                    i < 9 && (a += "0");
                                    var s = this.layout.getElementById(a + (i + 1).toString());
                                    s && (s.text = (i + 1).toString() + "."), a = "varTextName_", i < 9 && (a += "0"), (s = this.layout.getElementById(a + (i + 1).toString())) && (s.text = t[i].nickName, this.game.scaleTextToMaxWidth(s, 370)), a = "varTextScore_", i < 9 && (a += "0"), (s = this.layout.getElementById(a + (i + 1).toString())) && (s.text = t[i].score)
                                }
                                var r = this.bestScore.name;
                                if ("" !== r) {
                                    this.textPlayerName.text = r, this.game.scaleTextToMaxWidth(this.textPlayerName, 370);
                                    for (var o = null, h = 0; h < t.length; h++)
                                        if (t[h].nickName === r) {
                                            o = t[h].score, this.textPlayerScore.text = t[h].score, this.textPlayerRank.text = (h + 1).toString() + ".";
                                            break
                                        } this.textPlayerScore.text = o ? o.toString() : this.bestScore.score
                                } else this.textPlayerScore.text = "0", this.textPlayerName.text = "Nhập tên", n.visible = !1;
                                for (var c = function(t) {
                                        var i = e.groups[t];
                                        i.position.x = e.game.width, e.game.add.tween(i.position).to({
                                            x: 0
                                        }, 750, Phaser.Easing.Back.Out, !0, 80 * t + 250, 0, !1).onStart.add(function() {
                                            e.game.soundManager.playSfx("swoosh", .5, t / 11 * .4 + 1.3, 0)
                                        })
                                    }, u = 0; u < this.groups.length; u++) c(u)
                            }
                        }.bind(this)), this.game.toggoApi.pullScores(99)
                    }
                }()
            }, {
                key: "shutdown",
                value: function() {
                    return function() {
                        Nt(Lt(e.prototype), "shutdown", this).call(this), this.stateIsActive = !1, this.fadeUI = null
                    }
                }()
            }, {
                key: "update",
                value: function() {
                    return function() {
                        Nt(Lt(e.prototype), "update", this).call(this);
                        var t = Math.min(this.game.time.elapsedMS / 1e3, .1);
                        t > .1 && (t = .1), this.game.soundManager.update(t)
                    }
                }()
            }]) && Dt(i.prototype, a), n && Dt(i, n), e
        }(),
        Ft = (i(446), new a.a.Game({
            width: 720,
            height: 1280,
            three: !0,
            phaserParameters: {
                disableVisibilityChange: !1,
                roundPixels: !1
            },
            enableDebug: !1
        }));
    Ft.state.add("boot", new b), Ft.state.add("menu", new R), Ft.state.add("game", new yt), Ft.state.add("end", new Tt), Ft.state.add("name", new xt), Ft.state.add("highscore", new Ut), Ft.state.start("boot", !0, !1, {
        key: "base",
        url: "data/basePack.json"
    })
}]));