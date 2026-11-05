window.__require = function e(t, n, o) {
    function i(r, s) {
        if (!n[r]) {
            if (!t[r]) {
                var c = r.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (a) return a(c, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = c
            }
            var u = n[r] = {
                exports: {}
            };
            t[r][0].call(u.exports, function(e) {
                return i(t[r][1][e] || e)
            }, u, u.exports, e, t, n, o)
        }
        return n[r].exports
    }
    for (var a = "function" == typeof __require && __require, r = 0; r < o.length; r++) i(o[r]);
    return i
}({
    AudioMarger: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "74ddePiZnJNRqlQRIKVpmZm", "AudioMarger"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./frameworks/Def"),
            i = function() {
                function e() {}
                return e.getInstance = function() {
                    return null == this.instance && (this.instance = new e), this.instance
                }, e.prototype.playEffect = function(e, t, n) {
                    var i = this,
                        a = o.Def.AUDIO_DIR + e;
                    return cc.loader.loadRes(a, cc.AudioClip, function(e, o) {
                        e ? cc.error(e) : i.audioID = cc.audioEngine.play(o, t || !1, n || 1)
                    }), this.audioID
                }, e.prototype.playLoadEffect = function(e) {
                    cc.loader.loadRes(e, cc.AudioClip, function(e, t) {
                        e ? cc.error(e) : cc.audioEngine.play(t, !1, 1)
                    })
                }, e.prototype.pauseEffect = function(e) {
                    e ? cc.audioEngine.pauseEffect(e) : cc.audioEngine.pauseEffect(this.audioID)
                }, e.prototype.resumeEffect = function(e) {
                    e ? cc.audioEngine.resumeEffect(e) : cc.audioEngine.resumeEffect(this.audioID)
                }, e.prototype.resumeAllEffects = function() {
                    cc.audioEngine.resumeAllEffects()
                }, e.prototype.pauseAllEffects = function() {
                    cc.audioEngine.pauseAllEffects()
                }, e.prototype.stopEffect = function(e) {
                    e ? cc.audioEngine.stopEffect(e) : cc.audioEngine.stopEffect(this.audioID)
                }, e.prototype.stopAllEffects = function() {
                    cc.audioEngine.stopAllEffects()
                }, e.instance = null, e
            }();
        n.AudioMgr = i, cc._RF.pop()
    }, {
        "./frameworks/Def": "Def"
    }],
    BaseAI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9d484gsdABAlYs0ndQqMQwh", "BaseAI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            return function(e, t) {}
        }();
        n.BaseAI = o, cc._RF.pop()
    }, {}],
    Battery: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e8e845sJcBCabZ7k8LLNEER", "Battery"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./frameworks/Utils"),
            i = function() {
                function e(e) {
                    return this.earnStar = 0, this.earnGem = 0, this.earnGold = 0, this._count_stars = 0, this._count_gems = 0, this._count_golds = 0, cc.log("\u6784\u9020\u70ae\u53f0\u7c7b=============>"), this.FightScene = e, this
                }
                return e.prototype.createBattery = function(e, t, n) {
                    var i = "ani/" + e;
                    o.Utils.loadDragonBones2(t, i, n)
                }, e.prototype.createWeapon = function(e, t, n) {
                    var o = this.getWeaponPos(),
                        i = this.FightScene.node.getChildByName("pointNode"),
                        a = new cc.Node,
                        r = a.addComponent(cc.Sprite);
                    cc.loader.loadRes("res/paodank", cc.SpriteFrame, function(e, t) {
                        e || (r.spriteFrame = t)
                    }), this.FightScene.weaponNode = a, a.setPosition(o), i.addChild(a, 0, "paodank");
                    var s = new cc.Node;
                    s.setPosition(60, 0), a.addChild(s, 0, "posNode"), this.FightScene.getBulletinitPos()
                }, e.prototype.createNPC = function(e, t) {
                    var n = "";
                    1 == e ? n = "longmao_npc" : 2 == e && (n = "people_npc");
                    var i = this.FightScene.node.getChildByName("pointNode"),
                        a = "ani/" + n,
                        r = new cc.Node;
                    r.setPosition(t), i.addChild(r, 0, n), o.Utils.loadDragonBones2(r, a, null, "armatureName", "stand")
                }, e.prototype.getWeaponPos = function() {
                    var e = this.FightScene.batteryNode.getChildByName("node").getComponent(dragonBones.ArmatureDisplay).attachUtil;
                    e.generateAllAttachedNodes();
                    var t = e.getAttachedNodes("CannonPoint")[0].convertToWorldSpaceAR(cc.Vec2.ZERO);
                    return this.FightScene.node.getChildByName("pointNode").parent.convertToNodeSpaceAR(t)
                }, e.prototype.getMaoPos = function() {
                    var e = this.FightScene.batteryNode.getChildByName("node").getComponent(dragonBones.ArmatureDisplay).attachUtil;
                    e.generateAllAttachedNodes();
                    var t = e.getAttachedNodes("MaoPoint")[0].convertToWorldSpaceAR(cc.Vec2.ZERO),
                        n = this.FightScene.node.getChildByName("pointNode");
                    n.parent.getPosition();
                    return n.parent.convertToNodeSpaceAR(t)
                }, e.prototype.getRolePos = function() {
                    var e = this.FightScene.batteryNode.getChildByName("node").getComponent(dragonBones.ArmatureDisplay).attachUtil;
                    e.generateAllAttachedNodes();
                    var t = e.getAttachedNodes("RolePoint")[0].convertToWorldSpaceAR(cc.Vec2.ZERO);
                    return this.FightScene.node.getChildByName("pointNode").parent.convertToNodeSpaceAR(t)
                }, e.prototype.playNpcActMao = function(e) {
                    var t = this.FightScene.node.getChildByName("pointNode").getChildByName("longmao_npc");
                    if (null != t) {
                        var n = t.getComponent(dragonBones.ArmatureDisplay);
                        null != n && (null == e ? n.playAnimation("stand", 0) : e != this.isUpOrDown && (1 == e ? n.playAnimation("stand1", 0) : n.playAnimation("stand2", 0)), this.isUpOrDown = e)
                    }
                }, e
            }();
        n.Battery = i, cc._RF.pop()
    }, {
        "./frameworks/Utils": "Utils"
    }],
    Bullet: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8b2a4JDDKtPR41n8uWu/dWW", "Bullet"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./GameData"),
            i = e("./FightScene"),
            a = e("./tool"),
            r = e("./frameworks/Utils"),
            s = e("./CollisionEvent"),
            c = e("./Shake"),
            l = e("./AudioMarger"),
            u = function() {
                function e(e, t, n, o) {
                    this.startX = 0, this.startY = 0, this.g_sensitivity = 2, this.newStar = null, this.GRAVITY = 20, this.AIR_DRAG = 600, this.g_air_time = .2, this.multiple = 1.2, this.dropTime = 0, this.speed = 600, this.angle = 0, this.directionX = 1, this.directionY = -1, this.vx = 1, this.vy = 1, this.countTime = 0, this.sumTime = 5, this.cdNormal = 5, this.isDying = !1, this.bulletId = "", this.sum_time = 0, this.isrun = !1, this.hasStopped = !1, this.sumAirTime = 10, this.countAirTime = 0, this.startPos = null, this.scene = e, this.FightScene = e, this.battery = e.weaponNode, this.bottom_bg = e.node.getChildByName("bottom_bg"), this.res = t, this.startPos = n, this.angle = o;
                    var a = Number(this.res.bombType);
                    this.res.bombType == i.BombType.AirSon && (a = i.BombType.Air);
                    var r = cc.sys.localStorage.getItem("bullet" + a);
                    return this.bulletId = this.getBulletId(this.res.bombType, r), this.info = this.getBulletRes(this.bulletId), this.speed = this.info.SPEED || 0, this.trackType = this.res.trackType, this.bombType = this.res.bombType, this.physicsATK = this.info.POWER || 0, this.bombType == i.BombType.Rock && (this.GRAVITY = 50, this.speed = 300), this.init(this.speed), this
                }
                return e.prototype.init = function(e) {
                    this.saveSpeed = Math.abs(e), this.speed = this.saveSpeed, this.directionX = 1, this.directionY = -1;
                    var t = this.battery;
                    this.battery.position, t.position;
                    null == this.angle && (this.angle = this.battery.angle), this.multiple = this.scene.getSpedMultiple(), this.setSpedMultiple(this.multiple), this.slow_vx = .2, this.creatBullet()
                }, e.prototype.creatBullet = function() {
                    if (cc.find("Canvas")) {
                        var e = this;
                        cc.loader.loadRes("prefab/" + e.res.ani, function(t, n) {
                            if (t) cc.log("Prefab error:" + t);
                            else if (n instanceof cc.Prefab) {
                                var o = cc.instantiate(n);
                                e.sprite = o, e.scene.addBullet(e), null == e.startPos ? o.setPosition(e.battery.position.x, e.battery.position.y) : o.setPosition(e.startPos.x, e.startPos.y), e.rotateAction2(3)
                            } else cc.log("Prefab error")
                        })
                    } else cc.log("find Canvas error")
                }, e.prototype.rotateAction2 = function(e) {
                    this.sprite.stopActionByTag(i.ActType.TAG_ACT_ROTATE);
                    var t = cc.repeatForever(cc.rotateBy(e, 360));
                    t.setTag(i.ActType.TAG_ACT_ROTATE), this.sprite.runAction(t)
                }, e.prototype.setSpedMultiple = function(e) {
                    this.setSpeed(this.saveSpeed * e, this.angle)
                }, e.prototype.setSpeed = function(e, t) {
                    if (null != this.speed) {
                        var n = t && t || this.angle;
                        this.angle != n && (this.angle = n), this.speed = e;
                        var o = Math.abs(this.speed);
                        this.vx = o * Math.cos(this.angle * Math.PI / 180), this.vy = o * Math.sin(this.angle * Math.PI / 180)
                    }
                }, e.prototype.update = function(e) {
                    if (null != this.sprite) {
                        var t = this.sprite.getPosition(),
                            n = t.x,
                            o = t.y;
                        if (n > this.FightScene.SCREEN_WIDTH / 2 + 50) this.die();
                        else {
                            var r = cc.game.getFrameRate(),
                                s = r / 60,
                                u = 60 / r;
                            if (s > 1 && (s = 1), u < 1 && (u = 1), s < .8 && (s = .8), this.dropTime = this.dropTime + e, this.trackType == i.TrackType.Beeline) {
                                var h = this.vx * e,
                                    d = this.vy * e;
                                this.sprite.setPosition(n + h, o + d)
                            } else {
                                var p = this.AIR_DRAG * (this.multiple - 1) * e,
                                    g = this.GRAVITY * (this.multiple - 1) * this.dropTime * 8;
                                this.bombType != i.BombType.Rock && (this.vx = (this.getOriginSpeedX() * this.multiple * s - p) * this.directionX), this.vy = this.vy - this.GRAVITY * this.dropTime * u - g;
                                var m = n + this.vx * e,
                                    f = o + this.vy * e;
                                if (this.bombType == i.BombType.Air && (this.sumAirTime = this.sumAirTime + e, this.sumAirTime - this.countAirTime > this.g_air_time)) {
                                    this.countAirTime = this.sumAirTime;
                                    for (var y = 0; y < 3; y++) {
                                        var v = this.sprite.getPosition(),
                                            b = a.tools.getRandomNumInt(0, 360);
                                        this.FightScene.createBulletAirSon(v, b)
                                    }
                                }
                                var _ = this.bottom_bg.position.y + this.bottom_bg.height / 2;
                                if (f <= _ + 40 && this.bombType == i.BombType.Rock && (this.vx = this.vx - 2.3, f = _ + 40, 0 == this.isrun && (this.rotateAction2(10), this.isrun = !0, l.AudioMgr.getInstance().playEffect("SE002")), this.vx <= 0 && (this.vx = 0, 0 == this.hasStopped))) {
                                    this.hasStopped = !0;
                                    var I = this,
                                        S = cc.callFunc(function() {
                                            I.sprite.stopActionByTag(i.ActType.TAG_ACT_ROTATE)
                                        }),
                                        N = this,
                                        B = cc.callFunc(function() {
                                            N.die(), N.FightScene.issetBulletRock = !1
                                        }),
                                        A = new Array;
                                    A.push(S), A.push(cc.delayTime(3)), A.push(B), this.sprite.runAction(cc.sequence(A))
                                }
                                if (f <= _) {
                                    var T = c.Shake.create(.1, -5, 3);
                                    this.bottom_bg.runAction(T);
                                    var C = c.Shake.create(.1, -5, 3);
                                    if (this.FightScene.batteryNode.runAction(C), this.bombType != i.BombType.Rock) return f = _, void this.die(!0)
                                }
                                this.sprite.setPosition(m, f)
                            }
                        }
                    }
                }, e.prototype.getOriginSpeedX = function() {
                    return null == this.speed || null == this.angle ? 0 : this.speed * Math.cos(this.angle * Math.PI / 180)
                }, e.prototype.doDeath = function() {}, e.prototype.die = function(e) {
                    if (!this.isDying)
                        if (this.isDying = !0, this.sprite.stopAllActions(), e)
                            if (this.bombType == i.BombType.Ice) this.bombEffectIce(), this.sprite.removeFromParent(), l.AudioMgr.getInstance().playEffect("SE004");
                            else if (this.bombType == i.BombType.Screen) this.bombEffectScreen(), this.sprite.removeFromParent(), this.FightScene.hurtAllEnemys(this), l.AudioMgr.getInstance().playEffect("SE002");
                    else if (this.bombType == i.BombType.Protect) this.bombEffectProtect(), this.sprite.removeFromParent();
                    else {
                        this.bulletBomb = cc.instantiate(this.scene.bulletBomb), this.bulletBomb.setPosition(this.sprite.getPosition()), this.scene.node.addChild(this.bulletBomb);
                        var t = this.bulletBomb.getComponent(dragonBones.ArmatureDisplay);
                        t.playAnimation("run", 1), this.sprite.removeFromParent(), l.AudioMgr.getInstance().playEffect("SE002"), t.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this._animationEventHandler, this), t.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this._animationEventHandler, this), t.addEventListener(dragonBones.EventObject.COMPLETE, this._animationEventHandler, this)
                    } else this.sprite.removeFromParent()
                }, e.prototype.hit = function(e, t) {
                    this.bombType != i.BombType.Rock && this.bombType != i.BombType.Protect && this.die(!0), this.bombType == i.BombType.AirSon && l.AudioMgr.getInstance().playEffect("SE006"), this.bombType == i.BombType.Rock && l.AudioMgr.getInstance().playEffect("SE008")
                }, e.prototype._animationEventHandler = function(e) {
                    e.type == dragonBones.EventObject.START || e.type === dragonBones.EventObject.LOOP_COMPLETE || e.type === dragonBones.EventObject.FADE_IN || e.type === dragonBones.EventObject.COMPLETE && this.bulletBomb && this.bulletBomb.removeFromParent()
                }, e.prototype.getBulletId = function(e, t) {
                    if (null != e) {
                        (null == t || t < 1) && (t = 1);
                        return t < 10 ? "S" + e + "0" + t : "S" + e + t
                    }
                }, e.prototype.getBulletRes = function(e) {
                    return o.GameData.BulletsData[e] || {}
                }, e.prototype.getPowerData = function() {
                    return this.atkData
                }, e.prototype.rotateAction = function(e, t) {
                    t && (t < -1 || t > 1) && (t = 0);
                    var n = Math.random();
                    0 == n && (n = .5), t && (n = Math.abs(n) * t);
                    var o = cc.repeatForever(cc.rotateBy(e, 360 * n));
                    o.setTag(i.ActType.TAG_ACT_ROTATE), this.sprite.runAction(o)
                }, e.prototype.bombEffectIce = function() {
                    this.bulletBomb = new cc.Node, this.bulletBomb.setPosition(this.sprite.getPosition()), this.scene.node.addChild(this.bulletBomb);
                    var e = this;
                    r.Utils.loadDragonBones2(this.bulletBomb, "ani/iceBombEffect", null, "armatureName", "run", function() {
                        e.bulletBomb && e.bulletBomb.removeFromParent()
                    }, 1), this.FightScene.attckEffectIce(this, this.sprite.getPosition())
                }, e.prototype.bombEffectScreen = function() {
                    for (var e = 0; e < 30; e++) {
                        var t = a.tools.getRandomNumInt(-480, 480),
                            n = a.tools.getRandomNumInt(-320, 320),
                            o = this,
                            i = new cc.Node;
                        i.setPosition(t, n), this.FightScene.node.addChild(i, 0, "bombEffectScreen"), r.Utils.loadDragonBones2(i, "ani/baozhan", null, "armatureName", "run", function() {
                            var e = o.FightScene.node.getChildByName("bombEffectScreen");
                            e && e.removeFromParent()
                        }, 1)
                    }
                }, e.prototype.bombEffectProtect = function() {
                    this.bulletBomb = cc.instantiate(this.FightScene.shouweiBomb), this.bulletBomb.setPosition(this.sprite.getPosition()), this.FightScene.node.addChild(this.bulletBomb);
                    var e = this.bulletBomb.getComponent(dragonBones.ArmatureDisplay);
                    e.playAnimation("attack", 5);
                    var t = e.attachUtil._boneIndexToNode,
                        n = t[8],
                        o = t[9],
                        i = t[10],
                        a = t[11];
                    n.getComponent(s.default).fightScene = this.FightScene, o.getComponent(s.default).fightScene = this.FightScene, i.getComponent(s.default).fightScene = this.FightScene, a.getComponent(s.default).fightScene = this.FightScene, e.addEventListener(dragonBones.EventObject.COMPLETE, this._animationEventHandler, this)
                }, e.prototype.outHp = function(e) {}, e
            }();
        n.Bullet = u, cc._RF.pop()
    }, {
        "./AudioMarger": "AudioMarger",
        "./CollisionEvent": "CollisionEvent",
        "./FightScene": "FightScene",
        "./GameData": "GameData",
        "./Shake": "Shake",
        "./frameworks/Utils": "Utils",
        "./tool": "tool"
    }],
    ByteDanceManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9b07awB8UtOgafmMxSIcxIh", "ByteDanceManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../frameworks/Def"),
            i = e("../TipUI"),
            a = function() {
                function e() {
                    this.hasAd = !0, this.hasBanner = !0, this.hasInsertAd = !0, this.hasVideoAd = !0, this.BannerAd = null, this.stub = "", this.BannerAdHight = 0, this.BannerAdWight = 0, this.InterstitialAd = null, this.VideoMap = new Map
                }
                return e.prototype.initSdk = function(e, t, n) {
                    var i = this;
                    this.FightScene = e;
                    var a = tt.createRewardedVideoAd({
                            adUnitId: "2f4lb9m8mglnclljfg"
                        }),
                        r = tt.createRewardedVideoAd({
                            adUnitId: "6l9uhjfqqd15g9fb88"
                        }),
                        s = tt.createRewardedVideoAd({
                            adUnitId: "ocm6rj85l9f3mgd70h"
                        }),
                        c = tt.createRewardedVideoAd({
                            adUnitId: "2j84fmajfp514i3f9i"
                        }),
                        l = tt.createRewardedVideoAd({
                            adUnitId: "3mjmehc3ltf1gi78hj"
                        }),
                        u = tt.createRewardedVideoAd({
                            adUnitId: "gkf1c99rj18d5bkl8j"
                        }),
                        h = tt.createRewardedVideoAd({
                            adUnitId: "1ci02be221cc3boa78"
                        }),
                        d = tt.createRewardedVideoAd({
                            adUnitId: "4ohsoghnuga8kdek6b"
                        }),
                        p = tt.createRewardedVideoAd({
                            adUnitId: "1fblicttes33fhn4wi"
                        });
                    this.VideoMap.set(o.Def.videoType.signget, a), this.VideoMap.set(o.Def.videoType.video_battery, r), this.VideoMap.set(o.Def.videoType.qiqiugift, s), this.VideoMap.set(o.Def.videoType.buyhighbullet, c), this.VideoMap.set(o.Def.videoType.upbullet, l), this.VideoMap.set(o.Def.videoType.guajishouyi, u), this.VideoMap.set(o.Def.videoType.video_offline, h), this.VideoMap.set(o.Def.videoType.video_rebirth, d), this.VideoMap.set(o.Def.videoType.video_score, p), this.VideoMap.set("\u5176\u4ed6", h);
                    var g = tt.getSystemInfoSync(),
                        m = g.windowWidth,
                        f = g.windowHeight;
                    console.log("\u5c4f\u5e55\u7684\u9ad8========>", f), console.log("\u5c4f\u5e55\u7684\u5bbd========>", m), "Douyin" != tt.getSystemInfoSync().appName && (this.BannerAd = tt.createBannerAd({
                        adUnitId: "6a0bb83h6d7h32mt46",
                        style: {
                            left: 0,
                            top: 0,
                            width: 200
                        }
                    }), this.BannerAd.onResize(function(e) {
                        console.log(" \u5c3a\u5bf8\u8c03\u6574\u65f6\u4f1a\u89e6\u53d1\u56de\u8c03==============>"), console.log(e.width, e.height), i.BannerAdHight = e.height, i.BannerAdWight = e.width, i.BannerAd.style.top = f - i.BannerAdHight, i.BannerAd.style.left = m / 2 - i.BannerAdWight / 2
                    }), this.BannerAd.onError(function(e) {
                        console.log(" banner \u5e7f\u544a\u9519\u8bef", e.errCode)
                    }))
                }, e.prototype.login = function(e, t) {
                    t && t()
                }, e.prototype.pay = function(e, t) {
                    t && t()
                }, e.prototype.share = function(e, t) {
                    tt.shareAppMessage({
                        title: e.title,
                        desc: e.msg,
                        imageUrl: "http://yuema.sfplay.net/yuemaIcon/icon.png",
                        query: "",
                        success: function() {
                            console.log("\u5206\u4eab\u6210\u529f"), t && t()
                        },
                        fail: function(e) {
                            console.log("\u5206\u4eab\u5931\u8d25")
                        }
                    })
                }, e.prototype.showBanner = function(e) {
                    console.log("\u663e\u793abanner==============>", e), console.log("banner\u5bf9\u8c61\u662f\u5426\u5b58\u5728==============>", this.BannerAd), "Douyin" !== tt.getSystemInfoSync().appName && null != this.BannerAd ? (this.stub = e, this.BannerAd.show(), console.log("\u8fd9\u4e2abanner\u7684\u9ad8=====>", this.BannerAdHight)) : console.log("\u6296\u97f3\u4e0d\u652f\u6301Banner=====>")
                }, e.prototype.hideBanner = function(e, t) {
                    "Douyin" != tt.getSystemInfoSync().appName && null != this.BannerAd && (console.log("\u9690\u85cfbanner==============>", this.BannerAd), this.BannerAd.hide())
                }, e.prototype.showInsertAd = function(e, t) {
                    console.log("\u64ad\u653e\u63d2\u5c4fappName==============>", tt.getSystemInfoSync().appName), console.log("\u64ad\u653e\u63d2\u5c4f==============>", this.InterstitialAd), console.log("\u64ad\u653e\u63d2\u5c4f\u7684\u4f4d\u7f6e==============>", e), console.log("length==============>", e.length), this.InterstitialAd && e.length > 0 && (console.log("\u5f00\u59cbshow\u63d2\u5c4f==============>"), this.InterstitialAd.show())
                }, e.prototype.showVideoAd = function(e, t, n) {
                    var o = this.VideoMap.get(n);
                    null != o && 0 != o.length || (console.log("==============>\u5176\u4ed6\u89c6\u9891"), o = this.VideoMap.get("\u5176\u4ed6")), o.show().then(function() {
                        console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
                    }).catch(function(e) {
                        console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", e), o.load().then(function() {
                            return console.log("\u624b\u52a8\u52a0\u8f7d\u6210\u529f"), o.show()
                        })
                    });
                    var i = function(e) {
                        console.log("\u89c6\u9891\u5e7f\u544a\u5173\u95ed\u56de\u8c03"), e && e.isEnded ? (t && (console.log("callback===========>"), t()), console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1")) : console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), o.offClose(i), o.load()
                    };
                    o.onClose(i)
                }, e.prototype.homeToBackgroud = function(e, t) {
                    t && t()
                }, e.prototype.backgroudToHome = function(e, t) {
                    t && t()
                }, e.prototype.openNotify = function() {}, e.prototype.registerNotify = function(e, t, n) {}, e.prototype.deleteNotify = function(e) {}, e.prototype.otherFun = function(e, t) {
                    t && t()
                }, e.prototype.shark = function(e, t) {
                    t && t()
                }, e.prototype.recorderManager = function(e, t) {
                    console.log("\u8fdb\u5165\u5f55\u5c4f\u63a5\u53e3===================="), tt.getSystemInfo({
                        success: function(e) {
                            var t = e.screenWidth,
                                n = e.screenHeight,
                                o = tt.getGameRecorderManager(),
                                i = o.getMark(),
                                a = (t - i.markWidth) / 2,
                                r = (n - i.markHeight) / 2;
                            o.onStart(function(e) {
                                console.log("\u5f55\u5c4f\u5f00\u59cb")
                            }), o.start({
                                duration: 300,
                                isMarkOpen: !1,
                                locLeft: a,
                                locTop: r
                            })
                        }
                    })
                }, e.prototype.stopRecorderManager = function(e, t) {
                    var n = tt.getGameRecorderManager();
                    console.log("\u505c\u6b62\u5f55\u5c4f\u63a5\u53e3====================>", e), n.onStop(function(e) {
                        console.log("\u83b7\u53d6\u5f55\u5c4f\u5730\u5740===================="), console.log(e.videoPath), cc.sys.localStorage.setItem("RecorderPath", e.videoPath)
                    }), n.stop()
                }, e.prototype.shareVideo = function(e, t) {
                    console.log("\u89c6\u9891\u5206\u4eab====================");
                    var n = cc.sys.localStorage.getItem("RecorderPath");
                    console.log("videopath====================", n), console.log("videopath.length====================", n.length), null != n && 0 != n.length ? tt.shareAppMessage({
                        channel: "video",
                        query: "",
                        templateId: "1fidnqkeari9dnd18o",
                        title: "\u9f99\u732b\u5c04\u624b",
                        desc: "\u9f99\u732b\u5c04\u624b",
                        extra: {
                            videoPath: n,
                            videoTopics: ["\u9f99\u732b\u5c04\u624b"]
                        },
                        success: function() {
                            console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f")
                        },
                        fail: function(e) {
                            console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25")
                        }
                    }) : new i.TipUI(this.FightScene, "Chưa có nội dung chia sẻ")
                }, e
            }();
        n.ByteDanceManager = a, cc._RF.pop()
    }, {
        "../TipUI": "TipUI",
        "../frameworks/Def": "Def"
    }],
    CollisionEvent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3e849dWbwtGcIprlsoVeA+z", "CollisionEvent");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(e, t, n, o) {
                var i, a = arguments.length,
                    r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
                return a > 3 && r && Object.defineProperty(t, n, r), r
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            r = a.ccclass,
            s = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(t, e), t.prototype.onLoad = function() {}, t.prototype.attack = function() {
                    this._armature.animation.fadeIn("run", -1, -1, 0, "hit")
                }, t.prototype.attack2 = function() {
                    this._armatureDisPlay.playAnimation("run", 1)
                }, t.prototype.animationEventHandler = function(e) {
                    e.type == dragonBones.EventObject.FADE_IN_COMPLETE ? cc.log(e.detail.animationName + " fade in complete") : e.type == dragonBones.EventObject.FADE_OUT_COMPLETE && cc.log(e.detail.animationName + " fade out complete")
                }, t.prototype.onCollisionEnter = function(e, t) {
                    this.fightScene && this.fightScene.contactListener(e, t)
                }, t.prototype.onCollisionStay = function(e, t) {}, t.prototype.onCollisionExit = function(e, t) {}, t = i([r], t)
            }(cc.Component));
        n.default = s, cc._RF.pop()
    }, {}],
    Config: [function(e, t, n) {
        "use strict";
        var o, i, a;
        cc._RF.push(t, "66ec0fS6l1JSY7iD3kUEaCW", "Config"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r, s, c = e("../frameworks/Def"),
            l = function() {
                function e() {}
                return e.httpUrl = "https://yuema.sfplay.net:8081/", e.httpUrl_Census = "https://yuema.sfplay.net:9090/", e.dayRewardNum = 100, e.QQZoneParms = {
                    APPID: 101559478,
                    APPKey: "392e93c8c92957cdf4a01154c182783f",
                    factoryId: "2511070469"
                }, e.shareBoyImg = [{
                    id: "G4n9TQVtTL2l8Crq4EOiHg",
                    url: "https://mmocgame.qpic.cn/wechatgame/zy7todtTIicqBzUvNWGmIf7YsPcaib47uiajic50e0BNPibPcsia6sQOyszEHYZVHVbpiaX/0"
                }, {
                    id: "PtCtubIjSwmRyvoJ0Y7vwQ",
                    url: "https://mmocgame.qpic.cn/wechatgame/zy7todtTIicq6g8gD1riaOSvHHqxQuyibHeDtHyYT0sg0UQXYcJH6DUC2CiaPOkDnOAf/0"
                }, {
                    id: "PjiYHRpqTVW8xM6poVBKPQ",
                    url: "https://mmocgame.qpic.cn/wechatgame/zy7todtTIicruu8kFn91wuhL1xgpH2sR2tavGNATXSPDfcSE8Cz0InKpGkS5bGKSq/0"
                }], e.shareGirlImg = [{
                    id: "bbFUCxcVRcKsJYdWnXDlDQ",
                    url: "https://mmocgame.qpic.cn/wechatgame/zy7todtTIicqQicKsbfkVMPiaphVH4fRKZL5MTaO0HlRRkZ5zVTQ4jG1ib88iauX3EiaBw/0"
                }, {
                    id: "9idxyOv7RN2cEDhdWoVYmw",
                    url: "https://mmocgame.qpic.cn/wechatgame/zy7todtTIicoMLfAXIJKAHOYvcaCCugcRDvrWwoJXOoiaRE3ickjtw2ty4YAZLq96Ns/0"
                }], e.shareTypeRewards = [{
                    info: "\u83b7\u5f97\u94bb\u77f3x{0}",
                    num: 10,
                    reward: {
                        type: "diamond",
                        num: 20
                    },
                    double: 10
                }, {
                    info: "\u65e0\u9650\u77ed\u4fe1{0}/{1}",
                    num: 3,
                    reward: {
                        type: "gift",
                        name: "MoreNote"
                    }
                }, {
                    info: "\u79d2\u56de\u5927\u793c\u5305{0}/{1}",
                    num: 4,
                    reward: {
                        type: "gift",
                        name: "ImmediatelyReply"
                    }
                }, {
                    info: "\u6709\u94b1\u4efb\u6027\u793c\u5305{0}/{1}",
                    num: 3,
                    reward: {
                        type: "gift",
                        name: "MoreMoney"
                    }
                }, {
                    info: "\u514d\u8d39\u89e3\u9501{0}/{1}",
                    num: 1,
                    reward: {
                        type: "role",
                        name: "MoreMoney"
                    }
                }], e.shareMsg = {
                    BoyMsg: ["@\u4f60 \u7ea6\u5230\u5973\u795e\uff0c\u53ea\u5dee\u8fd9\u4e00\u6b65\uff01\uff01", "\u662f\u670b\u53cb\u5c31\u5e2e\u6211\u70b9\u4e00\u4e0b\uff0c\u7ea6\u5230\u5973\u795e\u5c31\u9760\u4f60\u5566\uff01", "\u5973\u795e\u7ea6\u6211\u53bb\u722c\u5c71\uff0c\u6211\u8981\u4e0d\u8981\u7b54\u5e94\u5979\uff1f", "\u5feb\u6765\u5e2e\u5e2e\u6211\uff01\u600e\u6837\u624d\u80fd\u7ea6\u5230\u5fc3\u4eea\u7684\u5979\uff1f\uff01"],
                    GirlMsg: ["@\u4f60 \u7ea6\u5230\u7537\u795e\uff0c\u53ea\u5dee\u8fd9\u4e00\u6b65\uff01\uff01", "\u662f\u670b\u53cb\u5c31\u5e2e\u6211\u70b9\u4e00\u4e0b\uff0c\u7ea6\u5230\u7537\u795e\u5c31\u9760\u4f60\u5566\uff01", "\u7537\u795e\u7ea6\u6211\u53bb\u722c\u5c71\uff0c\u6211\u8981\u4e0d\u8981\u7b54\u5e94\u4ed6\uff1f", "\u5feb\u6765\u5e2e\u5e2e\u6211\uff01\u600e\u6837\u624d\u80fd\u7ea6\u5230\u5fc3\u4eea\u7684\u4ed6\uff1f\uff01"]
                }, e.PlayerData = {
                    GoldNum: 10,
                    NoteNum: 40,
                    NoteTime: 180,
                    DefeatedTime: 3600
                }, e.TimeToGold = 20, e.FirstRole = [6, 18], e.InterstitialAdNum = 10, e.TeamConfig = {
                    name: "\u871c\u6843\u5973\u53cb",
                    info: "\u79c1\u4eba\u604b\u7231\u4e13\u5bb6",
                    weibo: "\u6682\u672a\u5f00\u901a=.=",
                    mail: "lianaiyouxi@outlook.com"
                }, e.ShakeTime = 1800, e.ShakeRole = {
                    BoyList: [2, 3, 4, 5, 7, 8, 9],
                    GirlList: [16, 18, 19, 20, 21, 22, 23]
                }, e.ResetShake = 20, e.ScanTime = 3600, e.ScanRole = {
                    BoyList: [{
                        role_id: 10,
                        diamond: 50
                    }, {
                        role_id: 11,
                        diamond: 50
                    }, {
                        role_id: 12,
                        diamond: 50
                    }, {
                        role_id: 13,
                        diamond: 50
                    }, {
                        role_id: 14,
                        diamond: 50
                    }, {
                        role_id: 15,
                        diamond: 50
                    }],
                    GirlList: [{
                        role_id: 24,
                        diamond: 50
                    }, {
                        role_id: 25,
                        diamond: 50
                    }, {
                        role_id: 26,
                        diamond: 50
                    }, {
                        role_id: 27,
                        diamond: 50
                    }, {
                        role_id: 28,
                        diamond: 50
                    }, {
                        role_id: 29,
                        diamond: 50
                    }]
                }, e.ScanPos = [{
                    x: 37,
                    y: 240
                }, {
                    x: 153,
                    y: 162
                }, {
                    x: -15,
                    y: 130
                }, {
                    x: 175,
                    y: 37
                }, {
                    x: 153,
                    y: -97
                }, {
                    x: 43,
                    y: -164
                }, {
                    x: -91,
                    y: -164
                }, {
                    x: -153,
                    y: -33
                }, {
                    x: -154,
                    y: 97
                }, {
                    x: -97,
                    y: 223
                }], e.TalkExpend = {
                    RemoveBad: 5,
                    SecondReply: 3,
                    ExpendNote: 1
                }, e.ShopConfig = [{
                    index: 0,
                    name: "\u770b\u89c6\u9891\u6210\u529f",
                    image: "i_free.jpg",
                    expend: {
                        type: "video"
                    },
                    reward: [{
                        type: "gold",
                        num: 5
                    }]
                }, {
                    index: 1,
                    name: "\u7537\u795e\u9a7e\u5230\u5927\u793c\u5305",
                    image: "i_gift_2.jpg",
                    expend: {
                        type: "gift",
                        point: "com.googleplay.wodenvyou.6",
                        name: "MoreBoy"
                    },
                    reward: [{
                        type: "role",
                        list: [10, 11, 12, 13, 14, 15],
                        sex: 0
                    }]
                }, {
                    index: 2,
                    name: "\u5973\u795e\u8054\u76df\u5927\u793c\u5305",
                    image: "i_gift_3.jpg",
                    expend: {
                        type: "gift",
                        point: "com.googleplay.wodenvyou.5",
                        name: "MoreGirl"
                    },
                    reward: [{
                        type: "role",
                        list: [24, 25, 26, 27, 28, 29],
                        sex: 1
                    }]
                }, {
                    index: 3,
                    name: "\u6709\u94b1\u4efb\u6027\u5927\u793c\u5305",
                    image: "i_gift_4.jpg",
                    expend: {
                        type: "gift",
                        point: "com.googleplay.wodenvyou.7",
                        name: "MoreMoney"
                    },
                    reward: [{
                        type: "gold",
                        num: 200
                    }, {
                        type: "note",
                        num: 9999
                    }]
                }, {
                    index: 4,
                    name: "\u79d2\u56de\u7279\u6743\u5927\u793c\u5305",
                    image: "i_gift_1.jpg",
                    expend: {
                        type: "gift",
                        point: "com.googleplay.wodenvyou.8",
                        name: "ImmediatelyReply"
                    },
                    reward: [{
                        type: "gold",
                        num: 100
                    }]
                }, {
                    index: 5,
                    name: "10\u6761\u77ed\u4fe1",
                    image: "i_note_1.jpg",
                    expend: {
                        type: "gold",
                        num: 20
                    },
                    reward: [{
                        type: "note",
                        num: 10
                    }]
                }, {
                    index: 6,
                    name: "35\u6761\u77ed\u4fe1",
                    image: "i_note_2.jpg",
                    expend: {
                        type: "gold",
                        num: 50
                    },
                    reward: [{
                        type: "note",
                        num: 35
                    }]
                }, {
                    index: 7,
                    name: "80\u6761\u77ed\u4fe1",
                    image: "i_note_3.jpg",
                    expend: {
                        type: "gold",
                        num: 100
                    },
                    reward: [{
                        type: "note",
                        num: 80
                    }]
                }, {
                    index: 8,
                    name: "60\u94bb\u77f3",
                    image: "i_diamond_1.jpg",
                    expend: {
                        type: "rmb",
                        point: "com.googleplay.wodenvyou.1"
                    },
                    reward: [{
                        type: "gold",
                        num: 60
                    }]
                }, {
                    index: 9,
                    name: "200\u94bb\u77f3",
                    image: "i_diamond_2.jpg",
                    expend: {
                        type: "rmb",
                        point: "com.googleplay.wodenvyou.2"
                    },
                    reward: [{
                        type: "gold",
                        num: 200
                    }]
                }, {
                    index: 10,
                    name: "380\u94bb\u77f3",
                    image: "i_diamond_3.jpg",
                    expend: {
                        type: "rmb",
                        point: "com.googleplay.wodenvyou.3"
                    },
                    reward: [{
                        type: "gold",
                        num: 380
                    }]
                }, {
                    index: 11,
                    name: "1000\u94bb\u77f3",
                    image: "i_diamond_4.jpg",
                    expend: {
                        type: "rmb",
                        point: "com.googleplay.wodenvyou.4"
                    },
                    reward: [{
                        type: "gold",
                        num: 1e3
                    }]
                }, {
                    index: 12,
                    name: "\u770b\u89c6\u9891\u6210\u529f",
                    image: "i_free.jpg",
                    expend: {
                        type: "video"
                    },
                    reward: [{
                        type: "note",
                        num: 5
                    }]
                }], e.WeChatShopConfig = [{
                    index: 0,
                    name: "\u6749\u6749+baby",
                    image: "i_gift_3",
                    expend: {
                        type: "gold",
                        num: 100,
                        name: "MoreGirl1"
                    },
                    reward: [{
                        type: "role",
                        list: [27, 28],
                        sex: 1,
                        num: 1
                    }]
                }, {
                    index: 1,
                    name: "\u838e\u838e+\u9ad8\u96ef",
                    image: "i_gift_2",
                    expend: {
                        type: "gold",
                        num: 100,
                        name: "MoreGirl2"
                    },
                    reward: [{
                        type: "role",
                        list: [26, 29],
                        sex: 1,
                        num: 1
                    }]
                }, {
                    index: 2,
                    name: "\u6167\u5a9b+joyjo",
                    image: "i_gift_2",
                    expend: {
                        type: "gold",
                        num: 100,
                        name: "MoreGirl3"
                    },
                    reward: [{
                        type: "role",
                        list: [24, 25],
                        sex: 1,
                        num: 1
                    }]
                }, {
                    index: 3,
                    name: "\u9e7f+\u90fd\u6559\u6388",
                    image: "i_gift_2",
                    expend: {
                        type: "gold",
                        num: 100,
                        name: "MoreBoy1"
                    },
                    reward: [{
                        type: "role",
                        list: [13, 15],
                        sex: 0,
                        num: 1
                    }]
                }, {
                    index: 4,
                    name: "\u6768\u54a9\u54a9+\u90fd\u6559\u6388",
                    image: "i_gift_2",
                    expend: {
                        type: "gold",
                        num: 100,
                        name: "MoreBoy2"
                    },
                    reward: [{
                        type: "role",
                        list: [12, 14],
                        sex: 0,
                        num: 1
                    }]
                }, {
                    index: 5,
                    name: "\u5cf0\u5cf0+\u5305\u5b50",
                    image: "i_gift_2",
                    expend: {
                        type: "gold",
                        num: 100,
                        name: "MoreBoy3"
                    },
                    reward: [{
                        type: "role",
                        list: [11, 10],
                        sex: 0,
                        num: 1
                    }]
                }, {
                    index: 6,
                    name: "10\u6761\u77ed\u4fe1",
                    image: "i_note_1",
                    expend: {
                        type: "gold",
                        num: 10
                    },
                    reward: [{
                        type: "note",
                        num: 5,
                        sex: 1,
                        list: []
                    }]
                }, {
                    index: 7,
                    name: "5\u94bb\u77f3",
                    image: "i_diamond_1",
                    expend: {
                        type: "share",
                        point: "com.yuema.lianai_01"
                    },
                    reward: [{
                        type: "gold",
                        num: 100,
                        sex: 1,
                        list: []
                    }]
                }, {
                    index: 8,
                    name: "\u770b\u89c6\u9891\u6210\u529f",
                    image: "i_free.jpg",
                    expend: {
                        type: "video"
                    },
                    reward: [{
                        type: "gold",
                        num: 5
                    }]
                }, {
                    index: 9,
                    name: "\u770b\u89c6\u9891\u6210\u529f",
                    image: "i_free.jpg",
                    expend: {
                        type: "video"
                    },
                    reward: [{
                        type: "note",
                        num: 3
                    }]
                }], e.AchievementConfig = [{
                    index: 0,
                    info: "\u53d1\u9001\u77ed\u4fe1\u6570",
                    Achievement: [{
                        info: "\u4f4e\u5934\u515a",
                        title: "\u6210\u529f\u53d1\u900110\u6761\u77ed\u4fe1",
                        condition: [{
                            type: "consume_note_num",
                            num: 10
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u505c\u4e0d\u4e0b\u6765",
                        title: "\u6210\u529f\u53d1\u9001100\u6761\u77ed\u4fe1",
                        condition: [{
                            type: "consume_note_num",
                            num: 100
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u673a\u4e0d\u79bb\u624b",
                        title: "\u6210\u529f\u53d1\u9001100\u6761\u77ed\u4fe1",
                        condition: [{
                            type: "consume_note_num",
                            num: 1e3
                        }],
                        reward: [{
                            type: "gold",
                            num: 10
                        }]
                    }]
                }, {
                    index: 1,
                    info: "\u5931\u8d25\u6b21\u6570",
                    Achievement: [{
                        info: "\u4e0d\u6015\uff0c\u8fd9\u70b9\u75db\u7b97\u4ec0\u4e48\uff01",
                        title: "\u7b2c\u4e00\u6b21\u653b\u7565\u5931\u8d25",
                        condition: [{
                            type: "defeated_num",
                            num: 1
                        }],
                        reward: [{
                            type: "gold",
                            num: 10
                        }]
                    }, {
                        info: "\u4e0d\u54ed\uff0c\u7ed9\u4f60\u7231\u7684\u62b1\u62b1~",
                        title: "\u7b2c\u4e8c\u6b21\u653b\u7565\u5931\u8d25",
                        condition: [{
                            type: "defeated_num",
                            num: 2
                        }],
                        reward: [{
                            type: "gold",
                            num: 20
                        }]
                    }, {
                        info: "\u73bb\u7483\u5fc3",
                        title: "\u5931\u8d25\u6b21\u6570\u8fbe\u52304\u6b21",
                        condition: [{
                            type: "defeated_num",
                            num: 4
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u4e0d\u518d\u72b9\u8c6b",
                        title: "\u5931\u8d25\u6b21\u6570\u8fbe\u523034\u6b21",
                        condition: [{
                            type: "defeated_num",
                            num: 34
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u52c7\u6562\u7684\u5fc3",
                        title: "\u5931\u8d25\u6b21\u6570\u8fbe\u523068\u6b21",
                        condition: [{
                            type: "defeated_num",
                            num: 68
                        }],
                        reward: [{
                            type: "gold",
                            num: 10
                        }]
                    }]
                }, {
                    index: 2,
                    info: "\u62e5\u6709\u5bc6\u53cb\u6570",
                    Achievement: [{
                        info: "\u62e5\u6709\u604b\u4eba\u529b",
                        title: "\u5bc6\u53cb\u6570\u8fbe\u52303\u4eba",
                        condition: [{
                            type: "friend_num",
                            num: 3
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u604b\u7231\u7684\u9178\u81ed\u5473",
                        title: "\u5bc6\u53cb\u6570\u8fbe\u523017\u4eba",
                        condition: [{
                            type: "friend_num",
                            num: 17
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u6559\u79d1\u4e66\u5f0f\u604b\u7231",
                        title: "\u5bc6\u53cb\u6570\u8fbe\u523034\u4eba",
                        condition: [{
                            type: "friend_num",
                            num: 34
                        }],
                        reward: [{
                            type: "gold",
                            num: 10
                        }]
                    }]
                }, {
                    index: 3,
                    info: "\u4f7f\u7528\u53bb\u9519\u529f\u80fd",
                    Achievement: [{
                        info: "\u5fc3\u75bc\u81ea\u5df1",
                        title: "\u6210\u529f\u53bb\u951910\u6b21",
                        condition: [{
                            type: "help_num",
                            num: 10
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u52a9\u653b\u5c0f\u80fd\u624b",
                        title: "\u6210\u529f\u53bb\u951950\u6b21",
                        condition: [{
                            type: "help_num",
                            num: 50
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u795e\u52a9\u653b",
                        title: "\u6210\u529f\u53bb\u9519100\u6b21",
                        condition: [{
                            type: "help_num",
                            num: 100
                        }],
                        reward: [{
                            type: "gold",
                            num: 10
                        }]
                    }]
                }, {
                    index: 4,
                    info: "\u89c2\u770b\u89c6\u9891\u6570",
                    Achievement: [{
                        info: "\u8d5e\u52a9\u5546",
                        title: "\u6210\u529f\u89c2\u770b\u89c6\u989110\u6b21",
                        condition: [{
                            type: "video_num",
                            num: 10
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u5e7f\u544a\u72c2\u4eba",
                        title: "\u6210\u529f\u89c2\u770b\u89c6\u989150\u6b21",
                        condition: [{
                            type: "video_num",
                            num: 50
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "av\u7231\u597d\u8005",
                        title: "\u6210\u529f\u89c2\u770b\u89c6\u9891100\u6b21",
                        condition: [{
                            type: "video_num",
                            num: 100
                        }],
                        reward: [{
                            type: "gold",
                            num: 10
                        }]
                    }]
                }, {
                    index: 5,
                    info: "\u653b\u7565\u6210\u529f\u6b21\u6570",
                    Achievement: [{
                        info: "\u795d\u8d3a\uff01\u9996\u6b21\u653b\u7565\u6210\u529f\uff01",
                        title: "\u7b2c\u4e00\u6b21\u653b\u7565\u6210\u529f",
                        condition: [{
                            type: "succeed_num",
                            num: 1
                        }],
                        reward: [{
                            type: "gold",
                            num: 10
                        }]
                    }, {
                        info: "\u5e72\u5f97\u6f02\u4eae\uff01\u518d\u6b21\u653b\u7565\uff01",
                        title: "\u7b2c\u4e8c\u6b21\u653b\u7565\u6210\u529f",
                        condition: [{
                            type: "succeed_num",
                            num: 2
                        }],
                        reward: [{
                            type: "gold",
                            num: 20
                        }]
                    }]
                }, {
                    index: 6,
                    info: "\u5b8c\u7f8e\u653b\u7565\u4eba\u6570",
                    Achievement: [{
                        info: "\u613f\u5f97\u4e00\u4eba\u5fc3",
                        title: "\u5b8c\u7f8e\u653b\u75651\u4eba",
                        condition: [{
                            type: "perfect_num",
                            num: 1
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u91cd\u5ea6\u5f3a\u8feb\u75c5\u60a3\u8005",
                        title: "\u5b8c\u7f8e\u653b\u756517\u4eba",
                        condition: [{
                            type: "perfect_num",
                            num: 17
                        }],
                        reward: [{
                            type: "gold",
                            num: 5
                        }]
                    }, {
                        info: "\u5904\u5973\u5ea712\u7ea7",
                        title: "\u5b8c\u7f8e\u653b\u756534\u4eba",
                        condition: [{
                            type: "perfect_num",
                            num: 34
                        }],
                        reward: [{
                            type: "gold",
                            num: 10
                        }]
                    }]
                }], e
            }();
        n.Config = l,
            function(e) {
                e[e.Config = 0] = "Config", e[e.AdConfig = 1] = "AdConfig", e[e.Census = 2] = "Census"
            }(r = n.UriMap || (n.UriMap = {})), n.URIID = ((o = {})[r.Config] = {
                uri: "app/config",
                showLog: !0
            }, o[r.AdConfig] = {
                uri: "app/adConfig",
                showLog: !0
            }, o[r.Census] = {
                uri: "addCustomEvent",
                showLog: !0
            }, o), n.CENSUSID = ((i = {})[c.Def.CensusEventUI.talk_help_begin] = {
                keyvalue: "start_takeoutanswer"
            }, i[c.Def.CensusEventUI.talk_help_end] = {
                keyvalue: "success_takeoutanswer"
            }, i[c.Def.CensusEventUI.recall_ui_begin] = {
                keyvalue: "start_recall"
            }, i[c.Def.CensusEventUI.recall_ui_end] = {
                keyvalue: "success_recall"
            }, i[c.Def.CensusEventUI.talk_second_begin] = {
                keyvalue: "start_replynow"
            }, i[c.Def.CensusEventUI.talk_second_end] = {
                keyvalue: "success_replynow"
            }, i[c.Def.CensusEventUI.showInfo_scan_begin] = {
                keyvalue: "start_looksecret"
            }, i[c.Def.CensusEventUI.showInfo_scan_end] = {
                keyvalue: "success_looksecret"
            }, i[c.Def.CensusEventUI.clearCd_scan_begin] = {
                keyvalue: "start_rescan"
            }, i[c.Def.CensusEventUI.clearCd_scan_end] = {
                keyvalue: "success_rescan"
            }, i[c.Def.CensusEventUI.start_shake_begin] = {
                keyvalue: "start_datenow"
            }, i[c.Def.CensusEventUI.start_shake_end] = {
                keyvalue: "success_datenow"
            }, i[c.Def.CensusEventUI.arriveToRoleUI] = {
                keyvalue: "arrive_datenow"
            }, i[c.Def.CensusEventUI.free_shake_begin] = {
                keyvalue: "start_reshake"
            }, i[c.Def.CensusEventUI.free_shake_end] = {
                keyvalue: "success_reshake"
            }, i[c.Def.CensusEventUI.fail_onreyue_begin] = {
                keyvalue: "start_redate"
            }, i[c.Def.CensusEventUI.fail_onreyue_end] = {
                keyvalue: "success_redate"
            }, i[c.Def.CensusEventUI.diamon_shop_begin] = {
                keyvalue: "start_freediamond"
            }, i[c.Def.CensusEventUI.diamon_shop_end] = {
                keyvalue: "success_freediamond"
            }, i[c.Def.CensusEventUI.note_shop_begin] = {
                keyvalue: "start_freemessage"
            }, i[c.Def.CensusEventUI.note_shop_end] = {
                keyvalue: "success_freemessage"
            }, i[c.Def.CensusEventUI.diamon_shop_three_begin] = {
                keyvalue: "start_triplediamond"
            }, i[c.Def.CensusEventUI.diamon_shop_three_end] = {
                keyvalue: "success_triplediamond"
            }, i[c.Def.CensusEventUI.note_shop_three_begin] = {
                keyvalue: "start_triplemessage"
            }, i[c.Def.CensusEventUI.note_shop_three_end] = {
                keyvalue: "success_triplemessage"
            }, i[c.Def.CensusEventUI.diamon_shop_three_arrive] = {
                keyvalue: "arrive_triplediamond"
            }, i[c.Def.CensusEventUI.note_shop_three_arrive] = {
                keyvalue: "arrive_triplemessage"
            }, i[c.Def.CensusEventUI.diamon_shop_three_nothinks] = {
                keyvalue: "clickcancel_triplediamond"
            }, i[c.Def.CensusEventUI.note_shop_three_nothinks] = {
                keyvalue: "clickcancel_triplemessage"
            }, i[c.Def.CensusEventUI.send_message_begin] = {
                keyvalue: "start_sendprocess"
            }, i[c.Def.CensusEventUI.send_message_end] = {
                keyvalue: "success_sendprocess"
            }, i),
            function(e) {
                e[e.MainUI = 0] = "MainUI", e[e.Answe = 1] = "Answe", e[e.Return = 2] = "Return", e[e.MiaoHui = 3] = "MiaoHui"
            }(n.AdStub || (n.AdStub = {})),
            function(e) {
                e[e.Mainlink = 0] = "Mainlink", e[e.Scan = 1] = "Scan"
            }(n.AdBannerStub || (n.AdBannerStub = {})),
            function(e) {
                e[e.MainUI = 0] = "MainUI"
            }(n.AdInsertStub || (n.AdInsertStub = {})),
            function(e) {
                e[e.DiamondLackUI = 0] = "DiamondLackUI", e[e.FriendCircleUI = 1] = "FriendCircleUI", e[e.FriendIntroUI = 2] = "FriendIntroUI", e[e.GuideUI = 3] = "GuideUI", e[e.InterstitialAdUI = 4] = "InterstitialAdUI", e[e.LoadUI = 5] = "LoadUI", e[e.LoseUI = 6] = "LoseUI", e[e.MainFriendListUI = 7] = "MainFriendListUI", e[e.MainLinkListUI = 8] = "MainLinkListUI", e[e.MainSettingUI = 9] = "MainSettingUI", e[e.MainShopUI = 10] = "MainShopUI", e[e.MainUI = 11] = "MainUI", e[e.NoteLackUI = 12] = "NoteLackUI", e[e.RedPackUI = 13] = "RedPackUI", e[e.RegisterUI = 14] = "RegisterUI", e[e.RoleIntroUI = 15] = "RoleIntroUI", e[e.ScanUI = 16] = "ScanUI", e[e.SettingPlayerUI = 17] = "SettingPlayerUI", e[e.SettingTeamUI = 18] = "SettingTeamUI", e[e.ShakeUI = 19] = "ShakeUI", e[e.SharePopUI = 20] = "SharePopUI", e[e.StopTalkUI = 21] = "StopTalkUI", e[e.TalkHelpUI = 22] = "TalkHelpUI", e[e.TalkUI = 23] = "TalkUI", e[e.TeachUI = 24] = "TeachUI", e[e.TipUI = 25] = "TipUI", e[e.WechatDiamonPop = 26] = "WechatDiamonPop", e[e.WechatNotePop = 27] = "WechatNotePop", e[e.WinUI = 28] = "WinUI", e[e.ReCallUI = 29] = "ReCallUI", e[e.PopAdSuccessUI = 30] = "PopAdSuccessUI"
            }(s = n.UIID || (n.UIID = {})), n.UICF = ((a = {})[s.DiamondLackUI] = {
                prefab: "prefab/DiamondLackUI",
                calssName: "DiamondLackUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.FriendCircleUI] = {
                prefab: "prefab/FriendCircleUI",
                calssName: "FriendCircleUI",
                zIndex: c.Def.LayerType.MIDPOP
            }, a[s.FriendIntroUI] = {
                prefab: "prefab/FriendIntroUI",
                calssName: "FriendIntroUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.GuideUI] = {
                prefab: "prefab/GuideUI",
                calssName: "GuideUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.InterstitialAdUI] = {
                prefab: "prefab/InterstitialAdUI",
                calssName: "InterstitialAdUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.LoadUI] = {
                prefab: "prefab/LoadUI",
                calssName: "LoadUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.LoseUI] = {
                prefab: "prefab/LoseUI",
                calssName: "LoseUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.MainFriendListUI] = {
                prefab: "prefab/MainFriendListUI",
                calssName: "MainFriendListUI",
                zIndex: c.Def.LayerType.MID
            }, a[s.MainLinkListUI] = {
                prefab: "prefab/MainLinkListUI",
                calssName: "MainLinkListUI",
                zIndex: c.Def.LayerType.MID,
                bannerStub: "MainLinkListUI"
            }, a[s.MainSettingUI] = {
                prefab: "prefab/MainSettingUI",
                calssName: "MainSettingUI",
                zIndex: c.Def.LayerType.MID
            }, a[s.MainShopUI] = {
                prefab: "prefab/MainShopUI",
                calssName: "MainShopUI",
                zIndex: c.Def.LayerType.MID
            }, a[s.MainUI] = {
                prefab: "prefab/MainUI",
                calssName: "MainUI",
                zIndex: c.Def.LayerType.MAIN
            }, a[s.NoteLackUI] = {
                prefab: "prefab/NoteLackUI",
                calssName: "NoteLackUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.RedPackUI] = {
                prefab: "prefab/RedPackUI",
                calssName: "RedPackUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.RegisterUI] = {
                prefab: "prefab/RegisterUI",
                calssName: "RegisterUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.RoleIntroUI] = {
                prefab: "prefab/RoleIntroUI",
                calssName: "RoleIntroUI",
                zIndex: c.Def.LayerType.POP,
                bannerStub: "RoleIntroUI"
            }, a[s.ScanUI] = {
                prefab: "prefab/ScanUI",
                calssName: "ScanUI",
                zIndex: c.Def.LayerType.MIDPOP,
                bannerStub: "ScanUI"
            }, a[s.SettingPlayerUI] = {
                prefab: "prefab/SettingPlayerUI",
                calssName: "SettingPlayerUI",
                zIndex: c.Def.LayerType.MIDPOP
            }, a[s.SettingTeamUI] = {
                prefab: "prefab/SettingTeamUI",
                calssName: "SettingTeamUI",
                zIndex: c.Def.LayerType.MIDPOP
            }, a[s.ShakeUI] = {
                prefab: "prefab/ShakeUI",
                calssName: "ShakeUI",
                zIndex: c.Def.LayerType.MIDPOP,
                bannerStub: "ShakeUI"
            }, a[s.SharePopUI] = {
                prefab: "prefab/SharePopUI",
                calssName: "SharePopUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.StopTalkUI] = {
                prefab: "prefab/StopTalkUI",
                calssName: "StopTalkUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.TalkHelpUI] = {
                prefab: "prefab/TalkHelpUI",
                calssName: "TalkHelpUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.TalkUI] = {
                prefab: "prefab/TalkUI",
                calssName: "TalkUI",
                zIndex: c.Def.LayerType.TALK
            }, a[s.TeachUI] = {
                prefab: "prefab/TeachUI",
                calssName: "TeachUI",
                zIndex: c.Def.LayerType.TEACH
            }, a[s.TipUI] = {
                prefab: "prefab/TipUI",
                calssName: "TipUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.WechatDiamonPop] = {
                prefab: "prefab/WechatDiamonPop",
                calssName: "WechatDiamonPop",
                zIndex: c.Def.LayerType.POP
            }, a[s.WechatNotePop] = {
                prefab: "prefab/WechatNotePop",
                calssName: "WechatNotePop",
                zIndex: c.Def.LayerType.POP
            }, a[s.WinUI] = {
                prefab: "prefab/WinUI",
                calssName: "WinUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.ReCallUI] = {
                prefab: "prefab/ReCallUI",
                calssName: "ReCallUI",
                zIndex: c.Def.LayerType.POP
            }, a[s.PopAdSuccessUI] = {
                prefab: "prefab/PopAdSuccessUI",
                calssName: "PopAdSuccessUI",
                zIndex: c.Def.LayerType.POP
            }, a), cc._RF.pop()
    }, {
        "../frameworks/Def": "Def"
    }],
    Def: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bf212iobZVNcpJgdlj8D4e6", "Def"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.STATE_REPLY = 1, e.STATE_WAIT_REPLY = -2, e.STATE_WAIT = -3, e.STATE_DEFEAT = -4, e.STATE_END = -5, e.INFO_START = 1, e.INFO_CONTINUE = 2, e.INFO_DEFEAT = 3, e.INFO_NEXT = 4, e.INFO_SHOW = 5, e.SCREEN_HEIGHT = 800, e.SCREEN_WIDTH = 480, e.PREFAB_UI_DIR = "prefab/", e.AUDIO_DIR = "audio/", e.LayerType = {
                ROOT: 0,
                MAIN: 1,
                TEACH: 2,
                TALK: 3,
                MID: 4,
                MIDPOP: 5,
                POP: 6
            }, e.ShareType = {
                DIAMONED: 0,
                NOTE: 1,
                SECOND: 2,
                MOREMONEY: 3,
                SCANROLE: 4
            }, e.ListenerType = {
                ROLE_TALK_REPLY: "ROLE_TALK_REPLY",
                PLAYER_TALK_REPLY: "PLAYER_TALK_REPLY",
                UPDATE_ROLE_LOVER: "UPDATE_ROLE_LOVER",
                UPDATE_RED_PACKET_STATE: "UPDATE_RED_PACKET_STATE",
                ADD_ROLE: "ADD_ROLE",
                ROLE_SKULL: "ROLE_SKULL",
                UPDATE_RESTITEM: "UPDATE_RESTITEM",
                UPDATE_FRIEND_TALK_NUM: "UPDATE_FRIEND_TALK_NUM",
                UPDATE_FRIEND_TALK: "UPDATE_FRIEND_TALK",
                UPDATE_NOTE: "UPDATE_NOTE",
                UPDATE_DIAMOND: "UPDATE_DIAMOND",
                INSUFFICINET_NOTE: "INSUFFICINET_NOTE",
                INSUFFICINET_DIAMOND: "INSUFFICINET_DIAMOND",
                UPDATE_FUN: "UPDATE_FUN",
                REFRESH_TOP_TITLE: "REFRESH_TOP_TITLE",
                REFRESH_NICKNAME: "REFRESH_NICKNAME",
                QUERY_SHARE: "QUERY_SHARE",
                UPDATE_SHARE: "UPDATE_SHARE",
                REFRESH_BOTTOM: "REFRESH_BOTTOM",
                HideLod: "HideLod",
                ResizeBanner: "ResizeBanner",
                UpdateShopUIPos: "UpdateShopUIPos"
            }, e.videoType = {
                signget: "\u7b7e\u5230\u9886\u53d6",
                qiqiugift: "\u6c14\u7403\u793c\u5305",
                buyhighbullet: "\u8d2d\u4e70\u9ad8\u7ea7\u5b50\u5f39",
                upbullet: "\u5347\u7ea7\u5b50\u5f39",
                guajishouyi: "\u6302\u673a\u6536\u76ca",
                video_offline: "\u79bb\u7ebf\u6536\u76ca",
                video_battery: "\u66f4\u6362\u70ae\u53f0\u514d\u8d39\u91d1\u5e01",
                video_rebirth: "\u5931\u8d25\u754c\u9762",
                video_score: "\u7ed3\u7b97\u754c\u9762\u53cc\u500d"
            }, e.bannerType = {
                banner_main: "\u4e3b\u754c\u9762",
                qiqiugift: "\u6c14\u7403\u793c\u5305",
                buyhighbullet: "\u8d2d\u4e70\u9ad8\u7ea7\u5b50\u5f39",
                upbullet: "\u5347\u7ea7\u5b50\u5f39",
                guajishouyi: "\u6302\u673a\u6536\u76ca",
                video_offline: "\u79bb\u7ebf\u6536\u76ca",
                video_battery: "\u66f4\u6362\u70ae\u53f0\u514d\u8d39\u91d1\u5e01",
                video_rebirth: "\u5931\u8d25\u754c\u9762",
                video_score: "\u7ed3\u7b97\u754c\u9762\u53cc\u500d"
            }, e.insetVideoType = {
                click_reply: "\u70b9\u51fb\u56de\u590d\u6309\u94ae"
            }, e.PoolNodePrefab = ["MainUI", "MainLinkListUI", "ScanUI", "ShakeUI", "TalkUI", "TeachUI"], e.userStepEventID = {
                user_step: "user_step",
                user_system: "user_system",
                character: "character_new",
                iap: "iap",
                abtest: "abtest"
            }, e.userStepUploadValue = {
                choosegender: "choosegender",
                step_startgame: "step_startgame",
                step_chat: "step_chat",
                step_reply: "step_reply",
                changegender: "changegender",
                seconddayreward: "seconddayreward",
                unlocktotal: "unlocktotal",
                datesuccess: "datesuccess",
                datefail: "datefail",
                takeoutanswer: "takeoutanswer",
                recall: "recall",
                shake: "shake",
                scan: "scan",
                scantimes: "scantimes",
                shaketimes: "shaketimes",
                replynow: "replynow",
                recallname: "recallname",
                redate: "redate",
                takeoutanswername: "takeoutanswername",
                looksecret: "looksecret",
                unlock: "unlock",
                score: "score",
                scan_diamondunlock: "scan_diamondunlock",
                shake_unlocksuccess: "shake_unlocksuccess",
                shake_unlockfail: "shake_unlockfail",
                paycharacterbag: "paycharacterbag",
                daysuser: "daysuser"
            }, e.videoAbUploadValue = {
                video_takeoutanswer: "video_takeoutanswer",
                video_recall: "video_recall",
                video_replynow: "video_replynow",
                video_looksecret: "video_looksecret",
                video_rescan: "video_rescan",
                video_datenow: "video_datenow",
                video_reshake: "video_reshake",
                video_redate: "video_redate",
                video_freediamond: "video_freediamond",
                video_freemessage: "video_freemessage",
                video_triplediamond: "video_triplediamond",
                video_triplemessage: "video_triplemessage",
                video_openshake: "video_openshake",
                video_openscan: "video_openscan",
                video_switch: "video_switch",
                video_sendprocess: "video_sendprocess"
            }, e.CensusEventUI = {
                free_shake_begin: "\u91cd\u65b0\u6447\u4e00\u6447\u5f00\u59cb\u64ad\u653e",
                free_shake_end: "\u91cd\u65b0\u6447\u4e00\u6447\u64ad\u653e\u6210\u529f",
                talk_second_begin: "\u5bf9\u8bdd\u79d2\u56de\u5f00\u59cb\u64ad\u653e",
                talk_second_end: "\u5bf9\u8bdd\u79d2\u56de\u64ad\u653e\u6210\u529f",
                talk_help_begin: "\u53bb\u6389\u6263\u5206\u9009\u9879\u5f00\u59cb\u64ad\u653e",
                talk_help_end: "\u53bb\u6389\u6263\u5206\u9009\u9879\u64ad\u653e\u6210\u529f",
                diamon_shop_begin: "\u5546\u5e97\u52a0\u94bb\u77f3\u5f00\u59cb\u64ad\u653e",
                diamon_shop_end: "\u5546\u5e97\u52a0\u94bb\u77f3\u64ad\u653e\u6210\u529f",
                note_shop_begin: "\u5546\u5e97\u52a0\u77ed\u4fe1\u5f00\u59cb\u64ad\u653e",
                note_shop_end: "\u5546\u5e97\u52a0\u77ed\u4fe1\u64ad\u653e\u6210\u529f",
                diamon_shop_three_begin: "\u4e09\u500d\u9886\u53d6\u94bb\u77f3\u5f00\u59cb\u64ad\u653e",
                diamon_shop_three_end: "\u4e09\u500d\u9886\u53d6\u94bb\u77f3\u64ad\u653e\u6210\u529f",
                note_shop_three_begin: "\u4e09\u500d\u9886\u53d6\u77ed\u4fe1\u5f00\u59cb\u64ad\u653e",
                note_shop_three_end: "\u4e09\u500d\u9886\u53d6\u77ed\u4fe1\u64ad\u653e\u6210\u529f",
                diamon_shop_three_arrive: "\u5230\u8fbe\u4e09\u500d\u94bb\u77f3\u754c\u9762",
                note_shop_three_arrive: "\u5230\u8fbe\u4e09\u500d\u77ed\u4fe1\u754c\u9762",
                diamon_shop_three_nothinks: "\u4e09\u500d\u94bb\u77f3\u754c\u9762\u70b9\u51fb\u201d\u4e0d\u4e86\u8c22\u8c22\u201c\u6b21\u6570",
                note_shop_three_nothinks: "\u4e09\u500d\u77ed\u4fe1\u754c\u9762\u70b9\u51fb\u201d\u4e0d\u4e86\u8c22\u8c22\u201c\u6b21\u6570",
                start_shake_begin: "\u6447\u4e00\u6447\u5f00\u7ea6\u5f00\u59cb\u64ad\u653e",
                start_shake_end: "\u6447\u4e00\u6447\u5f00\u7ea6\u64ad\u653e\u6210\u529f",
                recall_ui_begin: "\u64a4\u56de\u5f00\u59cb\u64ad\u653e",
                recall_ui_end: "\u64a4\u56de\u64ad\u653e\u6210\u529f",
                showInfo_scan_begin: "\u626b\u4e00\u626b\u754c\u9762\u770b\u8d44\u6599\u5f00\u59cb\u64ad\u653e",
                showInfo_scan_end: "\u626b\u4e00\u626b\u754c\u9762\u770b\u8d44\u6599\u64ad\u653e\u6210\u529f",
                clearCd_scan_begin: "\u626b\u4e00\u626b\u6e05\u9664\u65f6\u95f4\u5f00\u59cb\u64ad\u653e",
                clearCd_scan_end: "\u626b\u4e00\u626b\u6e05\u9664\u65f6\u95f4\u64ad\u653e\u6210\u529f",
                arriveToRoleUI: "\u5230\u8fbe\u7acb\u5373\u7ea6TA\u754c\u9762",
                fail_onreyue_begin: "\u89d2\u8272\u5931\u8d25\u754c\u9762\u7acb\u5373\u91cd\u7ea6\u5f00\u59cb\u64ad\u653e",
                fail_onreyue_end: "\u89d2\u8272\u5931\u8d25\u754c\u9762\u7acb\u5373\u91cd\u7ea6\u64ad\u653e\u6210\u529f",
                send_message_begin: "\u7b2c4\u548c8\u6761\u4fe1\u606f\u540e\u89c6\u9891\u5e7f\u544a\u5f00\u59cb\u64ad\u653e",
                send_message_end: "\u7b2c4\u548c8\u6761\u4fe1\u606f\u540e\u89c6\u9891\u5e7f\u544a\u64ad\u653e\u6210\u529f"
            }, e
        }();
        n.Def = o, cc._RF.pop()
    }, {}],
    EditorManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ab22cw4qbtEZo6hj40ui2yJ", "EditorManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {
                this.hasAd = !0, this.hasBanner = !0, this.hasInsertAd = !0, this.hasVideoAd = !0
            }
            return e.prototype.shareVideo = function(e, t) {}, e.prototype.stopRecorderManager = function(e, t) {}, e.prototype.recorderManager = function(e, t) {}, e.prototype.initSdk = function(e, t) {}, e.prototype.login = function(e, t) {}, e.prototype.pay = function(e, t) {}, e.prototype.share = function(e, t) {}, e.prototype.showBanner = function(e, t) {}, e.prototype.hideBanner = function(e, t) {}, e.prototype.showInsertAd = function(e, t) {}, e.prototype.showVideoAd = function(e, t) {
                t && t()
            }, e.prototype.otherFun = function(e, t) {}, e.prototype.homeToBackgroud = function(e, t) {}, e.prototype.backgroudToHome = function(e, t) {}, e.prototype.openNotify = function() {}, e.prototype.registerNotify = function(e, t, n) {}, e.prototype.deleteNotify = function(e) {}, e.prototype.shark = function(e, t) {}, e.prototype.openShare = function(e, t) {}, e
        }();
        n.EditorManager = o, cc._RF.pop()
    }, {}],
    Effect: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6dec4l6tupCBa8io0ewUjab", "Effect"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                return cc.log("\u6784\u9020\u5b50\u5f39=============>"), this
            }
            return e.prototype.bombEffect = function() {}, e
        }();
        n.Effect = o, cc._RF.pop()
    }, {}],
    Enemy: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "aba37T/f/tLCJKRXdDlLk5V", "Enemy"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = e("./GameData"),
            a = e("./CollisionEvent"),
            r = e("./FightScene"),
            s = e("./tool"),
            c = e("./frameworks/Utils"),
            l = e("./AudioMarger");
        (function(e) {
            e[e.NULL = 0] = "NULL", e[e.ANI_TYPE_LAND = 1] = "ANI_TYPE_LAND", e[e.ANI_TYPE_AIR = 2] = "ANI_TYPE_AIR", e[e.ANI_TYPE_ACC = 3] = "ANI_TYPE_ACC", e[e.ANI_TYPE_CAR = 4] = "ANI_TYPE_CAR", e[e.ANI_TYPE_BUILDING = 5] = "ANI_TYPE_BUILDING", e[e.ANI_TYPE_DEFENCE = 6] = "ANI_TYPE_DEFENCE"
        })(o = n.AniType || (n.AniType = {}));
        var u = function() {
            function e(e, t) {
                this.startX = 0, this.startY = 0, this.g_sensitivity = 2, this.newStar = null, this.GRAVITY = 20, this.AIR_DRAG = 600, this.g_air_time = .1, this.multiple = 1.2, this.dropTime = 0, this.speed = 50, this.angle = 0, this.directionX = 1, this.directionY = -1, this.vx = 1, this.vy = 1, this.countTime = 0, this.preTime = 0, this.curTime = 0, this.isDeath = !1, this.isDying = !1, this.data = null, this.cdNormal = 6, this.sumTime = 0, this.force = !1, this.mon_id = null, cc.log("\u6784\u9020\u654c\u4eba=============>", t), this.scene = e, this.FightScene = e, this.battery = e.battery, this.bottom_bg = e.node.getChildByName("bottom_bg"), this.batteryBottom = e.batteryNode.getChildByName("batteryBottom"), this.actions = i.GameData.AnisData[t], this.sprite = null, this.res = this.getAniData(), this.rewards = this.getDropRewards(), this.aniType = parseInt(this.getAniType()), this.hardLevel = 1, this.maxHp = this.res.maxHp * this.hardLevel, this.hp = this.maxHp, this.speed = this.res.speed, this.saveSpeed = this.res.speed;
                var n = Math.abs(this.res.speed);
                return this.angle = 180, this.vx = n * Math.cos(this.res.angle * Math.PI / 2), this.vy = 0, this
            }
            return e.prototype.init = function(e, t, n) {
                this.setHardLevel(t), this.mon_id = e.mon_id, this.creatEnemy(e, n)
            }, e.prototype.setSpeed = function(e, t) {
                if (null != e) {
                    var n = t && t || this.angle;
                    this.angle != n && (this.angle = n), this.speed = e;
                    var o = Math.abs(this.speed);
                    this.vx = o * Math.cos(this.angle * Math.PI / 2), this.vy = 0
                }
            }, e.prototype.creatEnemy = function(e, t) {
                if (this.data = e, cc.find("Canvas")) {
                    var n = this;
                    cc.loader.loadRes("prefab/" + this.actions.ANI_FILE, function(e, i) {
                        if (e) cc.log("Prefab error:" + e);
                        else if (i instanceof cc.Prefab) {
                            var r = cc.instantiate(i);
                            n.sprite = r, n.scene.addEnemy(n);
                            var s = -n.FightScene.SCREEN_HEIGHT / 2 + n.bottom_bg.height - 10;
                            n.aniType == o.ANI_TYPE_LAND ? s = -n.FightScene.SCREEN_HEIGHT / 2 + n.bottom_bg.height - 10 : n.aniType != o.ANI_TYPE_AIR && n.aniType != o.ANI_TYPE_BUILDING || (s = 110), n.width = n.res.size.width || 80, n.height = n.res.size.height || 80, null != n.data && (n.aniType == o.ANI_TYPE_BUILDING ? (r.setPosition(n.FightScene.SCREEN_WIDTH / 2 - n.data.mon_x / 3, s), n.falling = !0) : r.setPosition(n.FightScene.SCREEN_WIDTH / 2 + n.data.mon_x / 2, s)), t && r.setPosition(t.x, t.y), r.getComponent(a.default).fightScene = n.scene
                        } else cc.log("Prefab error")
                    })
                } else cc.log("find Canvas error")
            }, e.prototype.getAniData = function() {
                var e = this.actions.ANI_DATA,
                    t = {};
                return t.maxHp = e[0], t.physicsATK = e[1], t.atkInterval = e[2], t.speed = e[3], t.angle = e[4], t.bloodHeight = e[5], t.posY = e[6], t.gravity = e[7], t.size = cc.size(Number(e[8]) || 0, Number(e[9]) || 0), t.zorder = e[10], t
            }, e.prototype.getAniType = function() {
                return this.actions.ANI_TYPE
            }, e.prototype.update = function(e) {
                if (null != this.sprite) {
                    this.curTime = this.curTime + e, 0 == this.preTime && (this.preTime = this.curTime);
                    var t = this.sprite.getPosition(),
                        n = t.x,
                        i = t.y,
                        a = n - this.vx * e,
                        r = i - this.vy * e;
                    Math.abs(this.res.gravity) > 0 && this.aniType == o.ANI_TYPE_BUILDING && (this.dropTime = this.dropTime + e, r -= this.res.gravity * this.dropTime);
                    var s = this.FightScene.batteryNode.getPosition(),
                        c = s.y;
                    r <= c && (r = c), this.sprite.setPosition(a, r), a <= this.FightScene.SCREEN_WIDTH / 2 + 80 && (this.FightScene.isOutEnemy = !0), a <= s.x ? this.FightScene.gameOver(!1) : (this.FightScene.gjsumTime = this.FightScene.gjsumTime + e, 1 == this.FightScene.isguajiing && a <= s.x + 500 && this.FightScene.gjsumTime - this.FightScene.gjcountTime > this.FightScene.gjcdNormal && (this.FightScene.gjcountTime = this.FightScene.gjsumTime, cc.log("\u6302\u673a\u53d1\u6280\u80fd========>", this.FightScene.autoCdType), 0 == this.FightScene.autoCdType ? (this.FightScene.createBulletScreen(), this.FightScene.autoCdType = 1) : (this.FightScene.createBulletProtect(), this.FightScene.autoCdType = 0)), this.aniType == o.ANI_TYPE_BUILDING && (this.sumTime = this.sumTime + e, this.sumTime - this.countTime >= 5 && (this.countTime = this.sumTime, 0 == this.FightScene.isGameOver() && (cc.log("\u521b\u5efa\u602a\u7269==========>"), this.FightScene.buildingAddEnemy(cc.v2(a, r))))))
                }
            }, e.prototype.getOriginSpeedX = function() {
                return null == this.speed || null == this.angle ? 0 : this.speed * Math.cos(this.angle * Math.PI / 180)
            }, e.prototype.outHp = function(e) {
                this.isDeath || (this.hp = this.hp - e, this.updateHpBar())
            }, e.prototype.hit = function(e, t) {
                if (!this.isDeath)
                    if (e.bombType == r.BombType.Ice) {
                        this.sprite.stopActionByTag(r.ActType.TAG_ACT_SLOW), this.slowRate = e.info.SLOW_RATE, this.slowTime = e.info.SLOW_TIME;
                        var n = this,
                            o = this,
                            i = new Array;
                        i.push(cc.callFunc(function() {
                            n.slowdown(!0)
                        })), i.push(cc.delayTime(this.slowTime || 6)), i.push(cc.callFunc(function() {
                            o.slowdown(!1)
                        }));
                        var a = cc.sequence(i);
                        a.setTag(r.ActType.TAG_ACT_SLOW), this.sprite.runAction(a)
                    } else this.hp = this.hp - e.physicsATK, this.updateHpBar(), this.hitNum(e.physicsATK)
            }, e.prototype.updateHpBar = function() {
                var e = this.getCurHp() / this.getMaxHp();
                e <= 0 && (e = 0), this.sprite.getChildByName("bloodNode").getChildByName("bloodBar").getComponent(cc.ProgressBar).progress = e, this.hp <= 0 && this.die()
            }, e.prototype.setHardLevel = function(e) {
                null == e && (e = 1), this.hardLevel = e, this.maxHp = this.maxHp * this.hardLevel, this.hp = this.hp * this.hardLevel
            }, e.prototype.getCurHp = function() {
                return Number(this.hp) || 0
            }, e.prototype.getMaxHp = function() {
                return Number(this.maxHp) || 0
            }, e.prototype.getDropRewards = function() {
                return this.actions.DROP_REWARDS
            }, e.prototype.die = function(e) {
                if (this.isDeath = !0, this.force = e, 0 == this.FightScene.isGameOver()) {
                    var t = this.rewards[2];
                    this.FightScene.getFightUI().earnMoney(0, 0, t), this.FightScene.getFightUI().playGoldNum(t)
                }
                var n = this.sprite.getChildByName("bloodNode");
                if (n && (n.active = !1), this.aniType == o.ANI_TYPE_AIR) {
                    var i = this.bottom_bg.position.y + this.bottom_bg.height / 2,
                        a = this.sprite.getPosition().x,
                        r = cc.rotateBy(1, 360),
                        s = cc.moveTo(1, cc.v2(a, i));
                    this.sprite.runAction(cc.spawn(r, s)), this.doDeath()
                } else this.doDeath()
            }, e.prototype._animationEventHandler = function(e) {
                if (e.type === dragonBones.EventObject.FADE_IN_COMPLETE);
                else if (e.type === dragonBones.EventObject.FADE_OUT_COMPLETE);
                else if (e.type === dragonBones.EventObject.COMPLETE && (this.isDeath = !0)) {
                    var t = this.sprite.getComponent(dragonBones.ArmatureDisplay).attachUtil;
                    t.generateAllAttachedNodes();
                    var n = t._attachedNodeArray,
                        o = this.FightScene.node.getChildByName("pointNode"),
                        i = n.length;
                    i > 3 && (i = 3), l.AudioMgr.getInstance().playEffect("SE016");
                    for (var a = 0; a < i; a++) {
                        var r = n[a].convertToWorldSpaceAR(cc.Vec2.ZERO),
                            s = o.convertToNodeSpaceAR(r);
                        this.dropGoldEffect(s, a + 1), this.deadEffect(s, 1)
                    }
                    this.sprite.removeFromParent()
                }
            }, e.prototype.doDeath = function() {
                var e = this.sprite.getComponent(dragonBones.ArmatureDisplay);
                e.playAnimation("dead", 1), e.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this._animationEventHandler, this), e.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this._animationEventHandler, this), e.addEventListener(dragonBones.EventObject.COMPLETE, this._animationEventHandler, this)
            }, e.prototype.hitNum = function(e) {
                var t = this.FightScene.node.getChildByName("num30Label"),
                    n = cc.instantiate(t);
                n.getComponent(cc.Label).string = e, n.setPosition(this.sprite.getPosition()), this.FightScene.node.addChild(n), n.active = !0;
                var o = s.tools.makeRandomArr([-.4, .8, -1.2, 1.6, -2], 1),
                    i = s.tools.makeRandomArr([.4, .8, 1.2, 1.6, 2], 1),
                    a = o[0],
                    r = i[0],
                    c = [cc.v2(20 * a, 30 * r), cc.v2(20 * a, 30 * r), cc.v2(40 * a, 40)],
                    l = cc.bezierBy(.8, c),
                    u = cc.callFunc(function() {
                        n.removeFromParent()
                    }),
                    h = new Array;
                h.push(l), h.push(cc.fadeTo(1.5, 0));
                var d = new Array;
                d.push(cc.spawn(h)), d.push(u), n.runAction(cc.sequence(d))
            }, e.prototype.setSpedMultiple = function(e) {
                this.setSpeed(this.saveSpeed * e)
            }, e.prototype.slowdown = function(e) {
                e && 0 == this.isDeath ? (this.slowing = !0, this.setSlowColor(!1), this.setSpedMultiple(this.slowRate || .1)) : (this.slowing = !1, this.recoverColor(!0), this.setSpedMultiple(this.FightScene.getSpedMultiple()))
            }, e.prototype.setSlowColor = function(e) {
                this.setColor(cc.color(128, 192, 200), e)
            }, e.prototype.setColor = function(e, t) {
                this.c_r = e.r, this.c_g = e.g, this.c_b = e.b, this.isRefreshColor = t;
                var n = cc.color(e.r, e.g, e.b, 255);
                this.sprite.color = n
            }, e.prototype.recoverColor = function(e) {
                1 == e ? this.sprite.color = cc.color(255, 255, 255, 255) : 1 == this.isRefreshColor && (this.c_r + 10 <= 255 ? this.c_r = this.c_r + 10 : this.c_r = 255, this.c_g + 10 <= 255 ? this.c_g = this.c_g + 10 : this.c_g = 255, this.c_b + 10 <= 255 ? this.c_b = this.c_b + 10 : this.c_b = 255, this.sprite.setColor(cc.color(this.c_r, this.c_g, this.c_b)), 255 == this.c_r && 255 == this.c_g && 255 == this.c_b && (this.isRefreshColor = !1))
            }, e.prototype.deadEffect = function(e, t) {
                var n = this.FightScene.node.getChildByName("pointNode"),
                    o = new cc.Node;
                o.setPosition(e), n.addChild(o, 0, "deadsmoke"), c.Utils.loadDragonBones2(o, "ani/deadsmoke", null, "armatureName", "run", function() {
                    var e = n.getChildByName("deadsmoke");
                    e && e.removeFromParent()
                }, 1)
            }, e.prototype.dropGoldEffect = function(e, t) {
                if (1 != this.force && 1 != this.FightScene.isguajiing) {
                    var n = this.FightScene.node.getChildByName("goldEffectNode"),
                        o = cc.instantiate(n);
                    o.active = !0, o.setPosition(e.x, e.y), this.FightScene.node.addChild(o);
                    var i = this.FightScene.getGoldPos(),
                        a = new Array;
                    a.push(cc.delayTime(.1 * t)), a.push(cc.moveTo(.5, i)), a.push(cc.callFunc(function() {
                        l.AudioMgr.getInstance().playEffect("SE011"), o.removeFromParent()
                    })), o.runAction(cc.sequence(a))
                }
            }, e
        }();
        n.Enemy = u, cc._RF.pop()
    }, {
        "./AudioMarger": "AudioMarger",
        "./CollisionEvent": "CollisionEvent",
        "./FightScene": "FightScene",
        "./GameData": "GameData",
        "./frameworks/Utils": "Utils",
        "./tool": "tool"
    }],
    EqiupChange: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b10a3mRFwZICo2B14UGUCNn", "EqiupChange"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./GameData"),
            i = e("./frameworks/Utils"),
            a = e("./TipUI"),
            r = e("./platform/SDK"),
            s = e("./frameworks/Def"),
            c = function() {
                function e(e) {
                    return this.buttonArray = new Map, this.tipPayPrice = 0, cc.log("\u6784\u9020\u66f4\u6362\u70ae\u53f0\u7c7b=============>"), this.FightScene = e, this.createUI(), this
                }
                return e.prototype.createUI = function() {
                    if (cc.find("Canvas")) {
                        var e = this;
                        cc.loader.loadRes("prefab/PaodanChange", function(t, n) {
                            if (t) cc.log("Prefab error:" + t);
                            else if (n instanceof cc.Prefab) {
                                var c = cc.instantiate(n);
                                e.FightScene.node.addChild(c, 200), e.lookvideoBtn = c.getChildByName("lookvideoBtn");
                                var l = c.getChildByName("paotanScrollView").getChildByName("view").getChildByName("content"),
                                    u = c.getChildByName("previewBg");
                                e.previewBg = u, c.getChildByName("closeBtn").on("touchend", function(t) {
                                    c.removeFromParent(), e.FightScene.StopBannerNode = !1
                                }, this), e.lookvideoBtn.on("touchend", function(t) {
                                    r.SDK.getInstance().ShowVideoAd(function() {
                                        var t = cc.sys.localStorage.getItem("CurrentGolds");
                                        cc.sys.localStorage.setItem("CurrentGolds", Number(t) + 500), e.FightScene.updateFightUI(), new a.TipUI(e.FightScene, "Nhận vàng*" + String(500))
                                    }, s.Def.videoType.video_battery)
                                }, this);
                                for (var h = l.getChildByName("paodanitem"), d = o.GameData.BatteryData, p = 0, g = 0, m = Object.keys(d); g < m.length; g++) {
                                    var f = m[g],
                                        y = cc.instantiate(h),
                                        v = y.getChildByName("titilebg").getChildByName("titileicon").getComponent(cc.Sprite);
                                    i.Utils.loadSprite("res/" + d[f].TITLE_ICON, v), y.active = !0, y.index = f, y.targetOff(e), y.setPosition(0, -35 - 60 * p), y.on("touchend", e.GotoSelectLayer, e), l.addChild(y);
                                    var b = y.getChildByName("equipBtn");
                                    b.index = f, b.on("touchend", e.changeBattry, e), e.buttonArray.set(f, b);
                                    var _ = String(d[f].PAY_PRICE);
                                    y.getChildByName("needgold").getComponent(cc.Label).string = _, p += 1
                                }
                                cc.sys.localStorage.setItem("BATT_1", !0), e.initBatteryPreview("BATT_1"), e.resetAllButton()
                            } else cc.log("Prefab error")
                        })
                    } else cc.log("find Canvas error")
                }, e.prototype.GotoSelectLayer = function(e) {
                    var t = e.currentTarget.index;
                    cc.log("index==============>", t), this.initBatteryPreview(t)
                }, e.prototype.changeBattry = function(e) {
                    var t = e.currentTarget.index;
                    cc.log("index==============>,event======>", t, e);
                    var n = cc.sys.localStorage.getItem(t);
                    cc.log("equipIndex==========>", n), null != n && 0 != n.length ? (cc.sys.localStorage.setItem("CurrentBattery", t), this.FightScene.changeBattery(), this.resetAllButton()) : this.buyBattry(t)
                }, e.prototype.buyBattry = function(e) {
                    var t = Number(o.GameData.BatteryData[e].PAY_PRICE),
                        n = Number(cc.sys.localStorage.getItem("CurrentGolds"));
                    n >= t ? (cc.sys.localStorage.setItem(e, !0), cc.sys.localStorage.setItem("CurrentGolds", n - t), this.FightScene.updateFightUI(), this.resetAllButton(), new a.TipUI(this.FightScene, "Mua thành công")) : (this.tipPayPrice = t, new a.TipUI(this.FightScene, "Thiếu vàng"), this.lookvideoBtn.active = !0)
                }, e.prototype.resetAllButton = function() {
                    this.buttonArray.forEach(function(e, t) {
                        var n = e,
                            o = "res/wuqiup_pay1";
                        cc.sys.localStorage.getItem(t) && (o = "res/battery_btn3"), cc.sys.localStorage.getItem("CurrentBattery") == t && (o = "res/battery_btn1");
                        var i = n.getComponent(cc.Button);
                        cc.loader.loadRes(o, cc.SpriteFrame, function(e, t) {
                            e || (i.normalSprite = t, i.pressedSprite = t, i.hoverSprite = t)
                        })
                    })
                }, e.prototype.initBatteryPreview = function(e) {
                    var t = this.previewBg.getChildByName("aniNode"),
                        n = o.GameData.BatteryData,
                        a = "ani/" + n[e].ANI_FILE;
                    i.Utils.loadDragonBones2(t, a), this.previewBg.getChildByName("gjSprite").getChildByName("label").getComponent(cc.Label).string = n[e].ATK_INC + "%", this.previewBg.getChildByName("sdSprite").getChildByName("label").getComponent(cc.Label).string = n[e].ATK_SPEED + "%", this.previewBg.getChildByName("jqhdSprite").getChildByName("label").getComponent(cc.Label).string = n[e].GOLD_INC + "%", this.previewBg.getChildByName("bsjlSprite").getChildByName("label").getComponent(cc.Label).string = n[e].PAY_PRICE
                }, e
            }();
        n.EqiupChange = c, cc._RF.pop()
    }, {
        "./GameData": "GameData",
        "./TipUI": "TipUI",
        "./frameworks/Def": "Def",
        "./frameworks/Utils": "Utils",
        "./platform/SDK": "SDK"
    }],
    FightFail: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "27c6bndCQFOnZvRTrZWr8kV", "FightFail"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./AudioMarger"),
            i = e("./platform/SDK"),
            a = e("./frameworks/Def"),
            r = e("./platform/PlatformManager"),
            s = function() {
                function e(e) {
                    return cc.log("\u6784\u9020\u6218\u6597\u5931\u8d25\u7c7b=============>"), this.FightScene = e, this.createUI(), this
                }
                return e.prototype.createUI = function() {
                    if (cc.find("Canvas")) {
                        var e = this;
                        cc.loader.loadRes("prefab/FightFail", function(t, n) {
                            if (t) cc.log("Prefab error:" + t);
                            else if (n instanceof cc.Prefab) {
                                var s = cc.instantiate(n);
                                e.FightScene.node.addChild(s, 100);
                                var c = s.getChildByName("continue_btn"),
                                    l = s.getChildByName("nothanksNode");
                                l.on("touchend", function(t) {
                                    s.removeFromParent(), e.FightScene.goHome()
                                }, this), c.on("touchend", function(t) {
                                    i.SDK.getInstance().ShowVideoAd(function() {
                                        s.removeFromParent(), e.FightScene.revive()
                                    }, a.Def.videoType.video_rebirth)
                                }, this);
                                var u = s.getChildByName("daojishi"),
                                    h = u.getComponent(cc.Label),
                                    d = 3,
                                    p = cc.callFunc(function() {
                                        d -= 1, h.string = String(d), d <= 0 && (u.stopAllActions(), l.active = !0)
                                    }),
                                    g = cc.repeatForever(cc.sequence(cc.delayTime(1), p));
                                u.runAction(g);
                                var m = s.getChildByName("share_btn");
                                r.PlatformManager.CurrentPlatform == r.Platform.BYTEDANCE && (m.active = !0), m.on("touchend", function(e) {
                                    console.log("\u70b9\u51fb\u5206\u4eab\u5f55\u5c4f=============>"), r.PlatformManager.getInstance().shareVideo()
                                }, this), o.AudioMgr.getInstance().playEffect("BGM004")
                            } else cc.log("Prefab error")
                        })
                    } else cc.log("find Canvas error")
                }, e
            }();
        n.FightFail = s, cc._RF.pop()
    }, {
        "./AudioMarger": "AudioMarger",
        "./frameworks/Def": "Def",
        "./platform/PlatformManager": "PlatformManager",
        "./platform/SDK": "SDK"
    }],
    FightScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e1b90/rohdEk4SdmmEZANaD", "FightScene");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(e, t, n, o) {
                var i, a = arguments.length,
                    r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
                return a > 3 && r && Object.defineProperty(t, n, r), r
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, r, s = e("./Bullet"),
            c = e("./Enemy"),
            l = e("./GameData"),
            u = e("./tool"),
            h = e("./FightUI"),
            d = e("./FightVictory"),
            p = e("./PauseUI"),
            g = e("./FightFail"),
            m = e("./Battery"),
            f = e("./EqiupChange"),
            y = e("./frameworks/Utils"),
            v = e("./AudioMarger"),
            b = e("./Help"),
            _ = e("./SignUI"),
            I = e("./platform/SDK"),
            S = e("./platform/PlatformManager"),
            N = e("./frameworks/Def"),
            B = e("./frameworks/Lib"),
            A = e("./GuajiUI"),
            T = e("./OnlineOffUI"),
            C = cc._decorator,
            D = C.ccclass,
            P = C.property;
        (function(e) {
            e[e.Beeline = 0] = "Beeline", e[e.Parabola = 1] = "Parabola", e[e.Free = 2] = "Free"
        })(a = n.TrackType || (n.TrackType = {})),
        function(e) {
            e[e.NULL = 0] = "NULL", e[e.Normal = 1] = "Normal", e[e.Air = 2] = "Air", e[e.AirSon = 3] = "AirSon", e[e.Ice = 4] = "Ice", e[e.Rock = 5] = "Rock", e[e.Screen = 6] = "Screen", e[e.Protect = 7] = "Protect"
        }(r = n.BombType || (n.BombType = {})),
        function(e) {
            e[e.TAG_ACT_SHAKE = 0] = "TAG_ACT_SHAKE", e[e.TAG_ACT_ROTATE = 1] = "TAG_ACT_ROTATE", e[e.TAG_ACT_SLOW = 2] = "TAG_ACT_SLOW"
        }(n.ActType || (n.ActType = {}));
        var E = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.bulletBomb = null, t.pauseBtn = null, t.batteryNode = null, t.startGameBtn = null, t.eqiupChangeBtn = null, t.signBtn = null, t.shouweiBomb = null, t.guajishouyiBtn = null, t.lookvideo = null, t.guajishouyiNode = null, t.startX = 0, t.startY = 0, t.g_sensitivity = 2, t.newStar = null, t.GRAVITY = 20, t.AIR_DRAG = 600, t.g_air_time = .1, t.multiple = 1.2, t.dropTime = 0, t.speed = 600, t.angle = 5, t.directionX = 1, t.directionY = -1, t.vx = 0, t.vy = 0, t.countTime = 0, t.sumTime = 5, t.cdNormal = 1, t.bulletList = new Array, t.enemyList = new Array, t.dieEnemyList = new Array, t.g_curSpedMultiple = 1, t.GatesData = null, t.curWave = 0, t.enemyData = null, t.isloadEnemy = !1, t.tagMap = new Map, t.time = 0, t.g_game_over = !1, t.g_game_start = !1, t.weaponNode = null, t.currentGates = 0, t.bulletinitPos = null, t.isguajiing = !0, t.issetBulletRock = !1, t.isOutEnemy = !1, t.autoCdType = 0, t.StopBannerNode = !1, t.gjcdNormal = 6, t.gjsumTime = 5, t.gjcountTime = 0, t.QiqiuitemType = 0, t.QiqiuNode = null, t.hard_level = 1, t.isRevive = !1, t.shiyongju = 1, t
            }
            return o(t, e), t.prototype.onDestroy = function() {
                console.log("\u79bb\u7ebf========>")
            }, t.prototype.onLoad = function() {
                var e = this;
                this.g_fight_scene = this, this.batteryNode.zIndex = 100, this.bottom_bg = this.node.getChildByName("bottom_bg"), this.SCREEN_WIDTH = cc.winSize.width, this.SCREEN_HEIGHT = cc.winSize.height, console.log("\u7a97\u53e3\u7684\u5bbd=======>", this.SCREEN_WIDTH), console.log("\u7a97\u53e3\u7684\u9ad8=======>", this.SCREEN_HEIGHT), this.node.on(cc.Node.EventType.TOUCH_START, this.on_touch_start, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this), this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                    this.battery.playNpcActMao()
                }, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
                    this.battery.playNpcActMao()
                }, this);
                var t = cc.sys.localStorage.getItem("CurrentBattery");
                null != t && 0 != t.length || cc.sys.localStorage.setItem("CurrentBattery", "BATT_1"), cc.director.getCollisionManager().enabled = !0, cc.director.getCollisionManager().enabledDebugDraw = !1, cc.director.getCollisionManager().enabledDrawBoundingBox = !1, l.GameData.loadDataFromFile(function(t) {
                    cc.log("loadFileNum===============>", t), 5 == t && (e.enemyData = l.GameData.GatesData[e.currentGates.toString()], console.log("\u6587\u4ef6\u52a0\u8f7d\u5b8c\u6bd5===============>", e.enemyData), e.hard_level = e.enemyData.hard_level || 1, e.fightUI = new h.FightUI(e), e.scheduleOnce(function() {
                        e.changeBattery()
                    }, 1))
                }), this.pauseBtn.node.on("touchend", function(t) {
                    e.creatPauseUi(), e.StopBannerNode = !0, I.SDK.getInstance().ShowBannerAd(N.Def.bannerType.banner_main)
                }, this), this.startGameBtn.node.on("touchend", function(t) {
                    e.gameStart()
                }, this), this.eqiupChangeBtn.node.on("touchend", function(t) {
                    new f.EqiupChange(e), e.StopBannerNode = !0, I.SDK.getInstance().ShowBannerAd(N.Def.bannerType.banner_main)
                }, this), this.signBtn.node.on("touchend", function(t) {
                    new _.SignUI(e), e.StopBannerNode = !0, I.SDK.getInstance().ShowBannerAd(N.Def.bannerType.banner_main)
                }, this), this.guajishouyiBtn.node.on("touchend", function(t) {
                    new A.GuajiUI(e), e.StopBannerNode = !0, I.SDK.getInstance().ShowBannerAd(N.Def.bannerType.banner_main)
                }, this), this.lookvideo.node.on("touchend", function(t) {
                    var n = e;
                    I.SDK.getInstance().ShowVideoAd(function() {
                        var e = cc.sys.localStorage.getItem("CurrentGolds");
                        cc.sys.localStorage.setItem("CurrentGolds", Number(e) + Number(1e3)), n.updateFightUI()
                    }, N.Def.videoType.video_battery, "Nhận vàng*1000")
                }, this), this.battery = new m.Battery(this), v.AudioMgr.getInstance().playEffect("BGM002", !0), S.PlatformManager.getInstance().init(), I.SDK.getInstance().initSDK(this), this.createQiqiu(), this.schedule(this.updateData, 1), this.createOnlineOff(), this.scheduleOnce(function() {
                    e.bannerShowHide()
                }, 3), cc.game.on(cc.game.EVENT_HIDE, function() {
                    console.log("\u6e38\u620f\u8fdb\u5165\u540e\u53f0"), this.pauseAll()
                }, this), cc.game.on(cc.game.EVENT_SHOW, function() {
                    console.log("\u6e38\u620f\u8fdb\u5165\u524d\u53f0"), this.resumeAll()
                }, this)
            }, t.prototype.start = function() {}, t.prototype.changeBattery = function() {
                var e = l.GameData.BatteryData,
                    t = cc.sys.localStorage.getItem("CurrentBattery"),
                    n = cc.sys.localStorage.getItem("ShiyongBattery");
                "" != n && null != n && (t = n);
                var o = e[t].ANI_FILE,
                    i = this;
                i.batteryNode.active = !0;
                var a = i.batteryNode.getChildByName("node");
                i.node.getChildByName("pointNode").removeAllChildren(), this.battery.createBattery(o, a, function() {
                    i.battery.createNPC(1, i.battery.getMaoPos()), i.battery.createNPC(2, i.battery.getRolePos()), i.battery.createWeapon()
                })
            }, t.prototype.on_touch_start = function(e) {
                var t = e.getLocation();
                this.startY = t.y
            }, t.prototype.on_touch_move = function(e) {
                if (null != this.weaponNode && 1 != this.isguajiing) {
                    var t = e.getLocation(),
                        n = e.getDelta();
                    this.node.x += n.x, this.node.y += n.y;
                    var o = t.y - this.startY;
                    o > 0 ? this.battery.playNpcActMao(!0) : this.battery.playNpcActMao(!1);
                    var i = o / this.node.height * 180 * 1 * this.g_sensitivity,
                        a = this.weaponNode.angle + i;
                    a > 90 ? a = 90 : a < -90 && (a = -90), this.weaponNode.angle = a, this.startY = t.y, this.getBulletinitPos()
                }
            }, t.prototype.getBulletinitPos = function() {
                var e = this.node.getChildByName("pointNode"),
                    t = e.getChildByName("paodank");
                if (null != t) {
                    var n = t.getChildByName("posNode").convertToWorldSpaceAR(cc.Vec2.ZERO),
                        o = e.parent.convertToNodeSpaceAR(n);
                    this.bulletinitPos = o
                }
            }, t.prototype.getFightUI = function() {
                return this.g_fight_scene.fightUI
            }, t.prototype.rotateCannon = function() {}, t.prototype.getSpedMultiple = function() {
                return this.g_curSpedMultiple
            }, t.prototype.update = function(e) {
                this.sumTime = this.sumTime + e;
                var t = this.node.getChildByName("pointNode").getChildByName("paodank");
                this.sumTime - this.countTime > this.cdNormal && 0 == this.g_game_over && 1 == this.g_game_start && 0 == this.isguajiing && null != t && 1 == this.isOutEnemy && (this.countTime = this.sumTime, this.createBulletNormal(), this.time), this.updateAnimationList(this.bulletList, e, "bullet"), this.updateAnimationList(this.enemyList, e, "enemy"), 0 != this.enemyList.length || 0 != this.isloadEnemy || 0 != this.g_game_over || 1 != this.g_game_start && 1 != this.isguajiing || this.curWave <= 2 && this.initEnemys(this.curWave)
            }, t.prototype.getOriginSpeedX = function() {
                return null == this.speed || null == this.angle ? 0 : this.speed * Math.cos(this.angle * Math.PI / 180)
            }, t.prototype.createBulletNormal = function() {
                if (null != l.GameData.BulletsData) {
                    v.AudioMgr.getInstance().playEffect("SE001");
                    var e = {
                        ani: "bullets/NormalBullet",
                        index: 0
                    };
                    e.trackType = a.Parabola, e.bombType = r.Normal, e.speed = 0, e.xOffset = 0, e.yOffset = 0, e.physicsATK = 0;
                    new s.Bullet(this, e, this.bulletinitPos)
                }
            }, t.prototype.createBulletRock = function() {
                if (null != l.GameData.BulletsData) {
                    v.AudioMgr.getInstance().playEffect("SE007"), this.issetBulletRock = !0, cc.log("\u91cd\u70ae\u5f39==============>");
                    var e = {
                        ani: "bullets/RockBullet",
                        index: 0
                    };
                    e.trackType = a.Parabola, e.bombType = r.Rock, e.speed = 0, e.xOffset = 0, e.yOffset = 0, e.physicsATK = 0;
                    new s.Bullet(this, e, this.bulletinitPos)
                }
            }, t.prototype.createBulletAir = function() {
                if (null != l.GameData.BulletsData) {
                    v.AudioMgr.getInstance().playEffect("SE005"), cc.log("\u7a7a\u6c14\u5f39==============>");
                    var e = {
                        ani: "bullets/AirBullet",
                        index: 0
                    };
                    e.trackType = a.Parabola, e.bombType = r.Air, e.speed = 0, e.xOffset = 0, e.yOffset = 0, e.physicsATK = 0;
                    new s.Bullet(this, e, this.bulletinitPos)
                }
            }, t.prototype.createBulletAirSon = function(e, t) {
                if (null != l.GameData.BulletsData) {
                    cc.log("\u5b50\u6bcd\u5f39==============>");
                    var n = {
                        ani: "bullets/AirSonBullet",
                        index: 0
                    };
                    n.trackType = a.Beeline, n.bombType = r.AirSon, n.speed = 0, n.xOffset = 0, n.yOffset = 0, n.physicsATK = 0;
                    new s.Bullet(this, n, e, t)
                }
            }, t.prototype.createBulletIce = function() {
                if (null != l.GameData.BulletsData) {
                    v.AudioMgr.getInstance().playEffect("SE003"), cc.log("\u51b0\u5f39==============>");
                    var e = {
                        ani: "bullets/IceBullet",
                        index: 0
                    };
                    e.trackType = a.Parabola, e.bombType = r.Ice, e.speed = 0, e.xOffset = 0, e.yOffset = 0, e.physicsATK = 0;
                    new s.Bullet(this, e, this.bulletinitPos)
                }
            }, t.prototype.createBulletScreen = function() {
                if (null != l.GameData.BulletsData) {
                    v.AudioMgr.getInstance().playEffect("SE009"), cc.log("\u5168\u5c4f\u5f39==============>");
                    var e = {
                        ani: "bullets/BulletScreen",
                        index: 0
                    };
                    e.trackType = a.Parabola, e.bombType = r.Screen, e.speed = 0, e.xOffset = 0, e.yOffset = 0, e.physicsATK = 0;
                    new s.Bullet(this, e, this.bulletinitPos)
                }
            }, t.prototype.createBulletProtect = function() {
                if (null != l.GameData.BulletsData) {
                    v.AudioMgr.getInstance().playEffect("SE001"), cc.log("\u4fdd\u62a4\u5f39==============>");
                    var e = {
                        ani: "bullets/ProtectBullet",
                        index: 0
                    };
                    e.trackType = a.Parabola, e.bombType = r.Protect, e.speed = 0, e.xOffset = 0, e.yOffset = 0, e.physicsATK = 0;
                    new s.Bullet(this, e, this.bulletinitPos)
                }
            }, t.prototype.updateAnimationList = function(e, t, n) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    if (i && (i.isDeath || i.isDying)) {
                        e.splice(o, 1);
                        var a = i.sprite.idTag;
                        this.tagMap.delete(a), "enemy" == n && 0 == e.length && (cc.log("\u602a\u7269\u4e86\u6253\u5b8c\u4e86\uff0c\u751f\u6210\u4e0b\u4e00\u6ce2\u602a\u7269=============>"), this.isloadEnemy = !1, this.isOutEnemy = !1), "enemy" == n && 1 != i.force && 0 == this.isguajiing && (this.dieEnemyList.push(i.mon_id), cc.log("\u6b7b\u4ea1\u7684\u602a\u7269=============>", this.dieEnemyList))
                    } else i && i.update && i.update(t)
                }
            }, t.prototype.initEnemys = function(e) {
                if (null != this.enemyData) {
                    var t = this.enemyData.waves[e || 0];
                    if ("{}" == JSON.stringify(t)) return cc.log("\u6ca1\u6709\u602a\u7269\u4e86\uff0c\u5219\u6218\u6597\u80dc\u5229=============>", this.isguajiing), void(1 == this.isguajiing ? this.curWave = 0 : this.gameOver(!0));
                    for (var n = 0, o = Object.keys(t); n < o.length; n++)
                        for (var i = o[n], a = 0, r = Object.values(t[i]); a < r.length; a++) {
                            var s = r[a],
                                l = !0;
                            if (1 == this.isRevive)
                                for (var u = 0; u < this.dieEnemyList.length; u++) s.mon_id == this.dieEnemyList[u] && (l = !1);
                            if (1 == l) new c.Enemy(this, i).init(s, this.hard_level)
                        }
                    this.isloadEnemy = !0, this.curWave = this.curWave + 1
                }
            }, t.prototype.buildingAddEnemy = function(e) {
                new c.Enemy(this, "A1003").init({
                    mon_x: 571,
                    mon_y: 157,
                    mon_type: 1,
                    mon_id: "A1003_1",
                    mon_time: "14"
                }, this.hard_level, e)
            }, t.prototype.addEnemy = function(e) {
                this.addAnimationToTabel(this.enemyList, e)
            }, t.prototype.addBullet = function(e) {
                this.addAnimationToTabel(this.bulletList, e)
            }, t.prototype.addAnimationToTabel = function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] == t) return;
                this.node.addChild(t.sprite), e.push(t);
                var o = u.tools.tagGenerator();
                t.sprite.idTag = o, this.tagMap.set(o, t)
            }, t.prototype.getSpriteByTag = function(e) {
                return this.tagMap.get(e)
            }, t.prototype.contactListener = function(e, t) {
                if (null != e && null != t) {
                    var n = e.node.idTag,
                        o = t.node.idTag,
                        i = this.getSpriteByTag(n),
                        a = this.getSpriteByTag(o);
                    if ("shouwei" != e.node.group) {
                        if (null != i && null != a) {
                            var r = e.tag;
                            a.hit(i, r), i.hit(a, r)
                        }
                    } else a && a.outHp(15)
                }
            }, t.prototype.gameOver = function(e) {
                if (!this.g_game_over) {
                    this.g_game_over = !0;
                    if (0 == e) {
                        this.node.getChildByName("pointNode").removeAllChildren();
                        var t = this,
                            n = cc.callFunc(function() {
                                cc.loader.loadRes("prefab/playerdead", function(e, n) {
                                    var o = t.batteryNode.getPosition();
                                    if (t.batteryNode.active = !1, e) cc.log("Prefab error:" + e);
                                    else if (n instanceof cc.Prefab) {
                                        var i = cc.instantiate(n);
                                        i.setPosition(o.x, o.y), t.node.addChild(i), i.getComponent(dragonBones.ArmatureDisplay).playAnimation("run", 1), t.deadPrefebAni = i, v.AudioMgr.getInstance().playEffect("SE009")
                                    } else cc.log("Prefab error")
                                })
                            }),
                            o = this,
                            i = cc.callFunc(function() {
                                t.balanceUI = new g.FightFail(o)
                            }),
                            a = new Array;
                        a.push(n), a.push(cc.delayTime(2)), a.push(i), this.node.runAction(cc.sequence(a)), this.clearAllEnemy(!0)
                    } else this.balanceUI = new d.FightVictory(this), this.clearAllEnemy();
                    S.PlatformManager.getInstance().stopRecorderManager()
                }
            }, t.prototype.clearAllEnemy = function(e) {
                for (var t = 0; t < this.enemyList.length; t++) {
                    var n = this.enemyList[t];
                    n && n.die(e)
                }
            }, t.prototype.creatPauseUi = function() {
                new p.PauseUI(this)
            }, t.prototype.getFightScene = function() {
                return this.g_fight_scene
            }, t.prototype.isGameOver = function() {
                return this.g_game_over
            }, t.prototype.pauseAll = function() {
                console.log("\u6682\u505c\u6240\u6709===========>"), cc.game.pause()
            }, t.prototype.resumeAll = function() {
                console.log("\u6062\u590d\u6240\u6709===========>"), cc.game.resume()
            }, t.prototype.hurtAllEnemys = function(e) {
                for (var t = 0; t < this.enemyList.length; t++) {
                    var n = this.enemyList[t];
                    n && n.hit(e)
                }
            }, t.prototype.enterNextGate = function() {
                cc.log("\u4e0b\u4e00\u5173"), this.cleanFightScene(), this.enemyData = null, this.currentGates = Number(this.currentGates) + 1, this.reloadGatesData(), cc.sys.localStorage.setItem("CurrentGates", Number(this.currentGates)), this.updateCurrentGates(), this.playReadyAni()
            }, t.prototype.updateCurrentGates = function() {
                this.node.getChildByName("gatesNode").getChildByName("current").getChildByName("gatesLabel").getComponent(cc.Label).string = String(this.currentGates);
                var e = this.node.getChildByName("gatesNode").getChildByName("next"),
                    t = this.node.getChildByName("gatesNode").getChildByName("last"),
                    n = this.node.getChildByName("gatesNode").getChildByName("current"),
                    o = this.node.getChildByName("gatesNode").getChildByName("next2"),
                    i = this.node.getChildByName("gatesNode").getChildByName("last2");
                if (Number(this.currentGates) > 1) {
                    var a = e.getChildByName("gatesLabel").getComponent(cc.Label),
                        r = t.getChildByName("gatesLabel").getComponent(cc.Label);
                    o.getChildByName("gatesLabel").getComponent(cc.Label), i.getChildByName("gatesLabel").getComponent(cc.Label);
                    a.string = String(Number(this.currentGates) + 1), r.string = String(Number(this.currentGates) - 1), e.active = !0, t.active = !0, n.active = !0
                } else 1 == Number(this.currentGates) ? n.active = !0 : (n.active = !1, e.active = !1, t.active = !1)
            }, t.prototype.cleanFightScene = function() {
                this.g_game_over = !1, this.isloadEnemy = !1, this.issetBulletRock = !1, this.curWave = 0, this.g_game_start = !1
            }, t.prototype.reloadGatesData = function() {
                this.enemyData = l.GameData.GatesData[this.currentGates.toString()], cc.log("\u91cd\u65b0reload\u602a\u7269========>,currentGates=======>", this.enemyData, this.currentGates.toString()), this.hard_level = this.enemyData.hard_level || 1
            }, t.prototype.gameStart = function() {
                var e = this;
                this.clearAllEnemy(!0), this.cleanFightScene(), this.startGameBtn.node.active = !1, this.node.getChildByName("guajiNode").active = !1, this.pauseBtn.node.active = !0, this.signBtn.node.active = !1, this.guajishouyiNode.active = !1, this.eqiupChangeBtn.node.active = !1, this.lookvideo.node.active = !1, this.isguajiing = !1, this.g_game_start = !0, this.dieEnemyList.splice(0, this.dieEnemyList.length), this.isRevive = !1;
                var t = cc.sys.localStorage.getItem("CurrentGates");
                null != t && 0 != t.length || (t = 1, cc.sys.localStorage.setItem("CurrentGates", Number(t))), this.currentGates = t, this.enemyData = null, this.reloadGatesData(), this.updateCurrentGates(), this.playReadyAni(), this.getFightUI().updateAll();
                var n = cc.sys.localStorage.getItem("ShiyongBattery");
                "" != n && null != n && Number(this.currentGates) != this.shiyongju && (cc.sys.localStorage.setItem("ShiyongBattery", ""), this.changeBattery()), null != this.QiqiuNode && this.QiqiuNode.removeFromParent(), 1 != this.currentGates && 2 != this.currentGates && 3 != this.currentGates || this.scheduleOnce(function() {
                    new b.Help(e)
                }, 3), S.PlatformManager.getInstance().recorderManager()
            }, t.prototype.goHome = function() {
                var e = this;
                this.cleanFightScene(), this.isguajiing = !0, this.signBtn.node.active = !0, this.guajishouyiNode.active = !0, this.eqiupChangeBtn.node.active = !0, this.lookvideo.node.active = !0, this.enemyData = null, this.node.getChildByName("guajiNode").active = !0, this.pauseBtn.node.active = !1, this.currentGates = 0, this.reloadGatesData(), this.updateCurrentGates(), this.deadPrefebAni && (this.deadPrefebAni.removeFromParent(), this.deadPrefebAni = null), this.scheduleOnce(function() {
                    e.changeBattery(), e.startGameBtn.node.active = !0
                }, 2), this.getFightUI().updateAll(), this.createQiqiu()
            }, t.prototype.playReadyAni = function() {
                v.AudioMgr.getInstance().playEffect("ready_go");
                var e = this.node.getChildByName("pointNode"),
                    t = new cc.Node;
                e.addChild(t, 0, "ready"), y.Utils.loadDragonBones2(t, "ani/battlebegin", null, "armatureName", "run", function() {
                    var t = e.getChildByName("ready");
                    t && t.removeFromParent()
                }, 1)
            }, t.prototype.getGoldPos = function() {
                return this.fightUI.getGoldPos()
            }, t.prototype.attckEffectIce = function(e, t) {
                for (var n = 0; n < this.enemyList.length; n++) {
                    var o = this.enemyList[n];
                    if (o) {
                        var i = o.sprite.getPosition().x;
                        t.x + 200 > i && t.x - 200 < i && o.hit(e)
                    }
                }
            }, t.prototype.updateFightUI = function() {
                this.getFightUI().updateAll()
            }, t.prototype.createQiqiu = function() {
                var e = this;
                cc.loader.loadRes("prefab/QiqiuUI", function(t, n) {
                    if (t) cc.log("Prefab error:" + t);
                    else if (n instanceof cc.Prefab) {
                        var o = cc.instantiate(n);
                        o.setPosition(-e.SCREEN_WIDTH / 2, e.SCREEN_HEIGHT / 2), e.node.addChild(o, 100), e.QiqiuNode = o;
                        var i = cc.moveTo(15, cc.v2(e.SCREEN_WIDTH / 2, 50)),
                            a = cc.moveTo(15, cc.v2(-e.SCREEN_WIDTH / 2, -50)),
                            r = cc.moveTo(15, cc.v2(e.SCREEN_WIDTH / 2 + 100, -e.SCREEN_HEIGHT / 2 + 50)),
                            s = cc.callFunc(function() {}),
                            c = cc.delayTime(3),
                            l = cc.callFunc(function() {
                                var t = o.getChildByName("itemicon");
                                t.setContentSize(cc.size(120, 80)), 0 == e.QiqiuitemType && t.setContentSize(cc.size(100, 100));
                                var n = "res/qiandao_baodan2";
                                0 == e.QiqiuitemType ? (n = "res/qiandao_baodan2", e.QiqiuitemType = 1) : (n = "res/batteryMagic", e.QiqiuitemType = 0);
                                var i = o.getChildByName("itemicon").getComponent(cc.Sprite);
                                y.Utils.loadSprite(n, i), o.setPosition(-e.SCREEN_WIDTH / 2, e.SCREEN_HEIGHT / 2)
                            }),
                            u = new Array;
                        u.push(i), u.push(a), u.push(r), u.push(s), u.push(c), u.push(l), o.runAction(cc.repeatForever(cc.sequence(u))), o.getChildByName("clickNode").on("touchend", function(t) {
                            cc.log("\u770b\u89c6\u9891\u9886\u53d6==========>", e.QiqiuitemType);
                            var n = "Thử pháo cao cấp 1 ván";
                            1 == e.QiqiuitemType && (n = "Đã nhận đạn x3"), I.SDK.getInstance().ShowVideoAd(function() {
                                e.playSuccessReward()
                            }, N.Def.videoType.qiqiugift, n)
                        }, e)
                    } else cc.log("Prefab error")
                })
            }, t.prototype.playSuccessReward = function() {
                if (0 == this.QiqiuitemType) {
                    cc.sys.localStorage.setItem("ShiyongBattery", "BATT_2"), this.changeBattery();
                    var e = cc.sys.localStorage.getItem("CurrentGates");
                    null != e && 0 != e.length || (e = 1), this.shiyongju = e
                } else {
                    var t = cc.sys.localStorage.getItem("ScreenbulletNum");
                    cc.sys.localStorage.setItem("ScreenbulletNum", Number(t) + 3), this.updateFightUI()
                }
            }, t.prototype.updateData = function() {
                var e = cc.sys.localStorage.getItem("GuajiGold");
                null != e && 0 != e.length || (e = 0);
                var t = Number(e) + 4;
                Number(t) > 14400 && (t = 14400), cc.sys.localStorage.setItem("GuajiGold", t), cc.sys.localStorage.setItem("offlineTime", B.Lib.GetTimeBySecond())
            }, t.prototype.createOnlineOff = function() {
                var e = this,
                    t = cc.sys.localStorage.getItem("offlineTime"),
                    n = B.Lib.GetTimeBySecond();
                if (console.log("\u79bb\u7ebf\u6536\u76ca,offlineTime=====>", t), console.log("\u79bb\u7ebf\u6536\u76ca=====>", n - t), 0 == t.length && (t = n, console.log("\u79bb\u7ebf\u6536\u76ca\u5b57\u6bb5\u4e3a\u7a7a=====>", t)), null != t && n - t > 0) {
                    var o = n - t,
                        i = cc.sys.localStorage.getItem("GuajiGold"),
                        a = Number(i) + 4 * o;
                    a > 14400 && (a = 14400), cc.sys.localStorage.setItem("GuajiGold", a), o > 0 && this.scheduleOnce(function() {
                        new T.OnlineOffUI(e, a)
                    }, 1)
                }
            }, t.prototype.bannerShowHide = function() {
                var e = new cc.Node;
                this.node.addChild(e);
                var t = this,
                    n = cc.delayTime(10),
                    o = cc.callFunc(function() {
                        0 == t.StopBannerNode && I.SDK.getInstance().CloseBannerAd()
                    }),
                    i = cc.delayTime(10),
                    a = cc.callFunc(function() {
                        1 == t.isguajiing && I.SDK.getInstance().ShowBannerAd(N.Def.bannerType.banner_main)
                    }),
                    r = new Array;
                r.push(n), r.push(o), r.push(i), r.push(a), e.runAction(cc.repeatForever(cc.sequence(r))), I.SDK.getInstance().ShowBannerAd(N.Def.bannerType.banner_main)
            }, t.prototype.revive = function() {
                var e = this;
                this.g_game_over = !1, this.isloadEnemy = !1, this.issetBulletRock = !1, this.curWave = this.curWave - 1, cc.log("\u590d\u6d3b\u7b2c\u51e0\u6ce2\u602a\u7269======>", this.curWave), this.startGameBtn.node.active = !1, this.node.getChildByName("guajiNode").active = !1, this.pauseBtn.node.active = !0, this.signBtn.node.active = !1, this.guajishouyiNode.active = !1, this.eqiupChangeBtn.node.active = !1, this.lookvideo.node.active = !1, this.isguajiing = !1, this.g_game_start = !0, this.isRevive = !0;
                var t = cc.sys.localStorage.getItem("CurrentGates");
                this.currentGates = t, this.enemyData = null, this.reloadGatesData(), this.updateCurrentGates(), this.deadPrefebAni && (this.deadPrefebAni.removeFromParent(), this.deadPrefebAni = null), this.scheduleOnce(function() {
                    e.changeBattery()
                }, 2), null != this.QiqiuNode && this.QiqiuNode.removeFromParent(), S.PlatformManager.getInstance().recorderManager()
            }, i([P(cc.Prefab)], t.prototype, "bulletBomb", void 0), i([P(cc.Button)], t.prototype, "pauseBtn", void 0), i([P(cc.Node)], t.prototype, "batteryNode", void 0), i([P(cc.Button)], t.prototype, "startGameBtn", void 0), i([P(cc.Button)], t.prototype, "eqiupChangeBtn", void 0), i([P(cc.Button)], t.prototype, "signBtn", void 0), i([P(cc.Prefab)], t.prototype, "shouweiBomb", void 0), i([P(cc.Button)], t.prototype, "guajishouyiBtn", void 0), i([P(cc.Button)], t.prototype, "lookvideo", void 0), i([P(cc.Node)], t.prototype, "guajishouyiNode", void 0), t = i([D], t)
        }(cc.Component);
        n.default = E, cc._RF.pop()
    }, {
        "./AudioMarger": "AudioMarger",
        "./Battery": "Battery",
        "./Bullet": "Bullet",
        "./Enemy": "Enemy",
        "./EqiupChange": "EqiupChange",
        "./FightFail": "FightFail",
        "./FightUI": "FightUI",
        "./FightVictory": "FightVictory",
        "./GameData": "GameData",
        "./GuajiUI": "GuajiUI",
        "./Help": "Help",
        "./OnlineOffUI": "OnlineOffUI",
        "./PauseUI": "PauseUI",
        "./SignUI": "SignUI",
        "./frameworks/Def": "Def",
        "./frameworks/Lib": "Lib",
        "./frameworks/Utils": "Utils",
        "./platform/PlatformManager": "PlatformManager",
        "./platform/SDK": "SDK",
        "./tool": "tool"
    }],
    FightUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9309a0nanVNWaKh9j1GjGEI", "FightUI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./FightScene"),
            i = e("./GameData"),
            a = e("./TipUI"),
            r = e("./platform/SDK"),
            s = e("./frameworks/Def"),
            c = function() {
                function e(e) {
                    var t = this;
                    this.earnStar = 0, this.earnGem = 0, this.earnGold = 0, this._count_stars = 0, this._count_gems = 0, this._count_golds = 0, cc.log("\u6784\u9020\u6218\u6597UI\u7c7b=============>"), this.FightScene = e, this.txt_gold = this.FightScene.node.getChildByName("goldNode").getChildByName("goldBg").getChildByName("gold_label"), this.gold_icon = this.FightScene.node.getChildByName("goldNode").getChildByName("goldBg").getChildByName("gold_icon"), this.goldNode = this.FightScene.node.getChildByName("goldNode");
                    var n = this.FightScene.node.getChildByName("skillNode").getChildByName("bulletRockBtn");
                    n.on("touchend", function(e) {
                        if (1 != n.index && 1 != t.FightScene.isguajiing) {
                            var i = t.getNeedCD(o.BombType.Rock);
                            t.FightScene.createBulletRock(), t.checkCDTime(n, i)
                        } else cc.log("\u51b7\u5374\u4e2d=======>")
                    }, this);
                    var i = this.FightScene.node.getChildByName("skillNode").getChildByName("AirBulletButton");
                    i.on("touchend", function(e) {
                        if (1 != i.index && 1 != t.FightScene.isguajiing) {
                            var n = t.getNeedCD(o.BombType.Air);
                            t.FightScene.createBulletAir(), t.checkCDTime(i, n)
                        } else cc.log("\u51b7\u5374\u4e2d=======>")
                    }, this);
                    var c = this.FightScene.node.getChildByName("skillNode").getChildByName("IceBulletButton");
                    c.on("touchend", function(e) {
                        if (1 != c.index && 1 != t.FightScene.isguajiing) {
                            var n = t.getNeedCD(o.BombType.Ice);
                            t.FightScene.createBulletIce(), t.checkCDTime(c, n)
                        } else cc.log("\u51b7\u5374\u4e2d=======>")
                    }, this);
                    var l = this.FightScene.node.getChildByName("buyNode").getChildByName("BulletScreenBtn");
                    l.on("touchend", function(e) {
                        if (1 != t.FightScene.isguajiing) {
                            var n = cc.sys.localStorage.getItem("ScreenbulletNum");
                            n > 0 ? (t.FightScene.createBulletScreen(), cc.sys.localStorage.setItem("ScreenbulletNum", Number(n) - 1), t.updateAll()) : new a.TipUI(t.FightScene, "Không đủ")
                        }
                    }, this);
                    var u = this.FightScene.node.getChildByName("buyNode").getChildByName("BulletProtectBtn");
                    u.on("touchend", function(e) {
                        if (1 != t.FightScene.isguajiing) {
                            var n = cc.sys.localStorage.getItem("ProtectNum");
                            n > 0 ? (t.FightScene.createBulletProtect(), cc.sys.localStorage.setItem("ProtectNum", Number(n) - 1), t.updateAll()) : new a.TipUI(t.FightScene, "Không đủ")
                        }
                    }, this), this.FightScene.node.getChildByName("buyNode").getChildByName("bulletNormalBtn").getChildByName("lvupBtn").on("touchend", function(e) {
                        var n = cc.sys.localStorage.getItem("bullet" + o.BombType.Normal);
                        Number(n) % 3 != 0 || 1 == Number(n) ? t.dealUpLv(o.BombType.Normal) && (cc.sys.localStorage.setItem("bullet" + o.BombType.Normal, Number(n) + 1), t.updateAll()) : r.SDK.getInstance().ShowVideoAd(function() {
                            cc.sys.localStorage.setItem("bullet" + o.BombType.Normal, Number(n) + 1), t.updateAll()
                        }, s.Def.videoType.upbullet)
                    }, this), n.getChildByName("lvupBtn").on("touchend", function(e) {
                        var n = cc.sys.localStorage.getItem("bullet" + o.BombType.Rock);
                        Number(n) % 3 != 0 || 1 == Number(n) ? t.dealUpLv(o.BombType.Rock) && (cc.sys.localStorage.setItem("bullet" + o.BombType.Rock, Number(n) + 1), t.updateAll()) : r.SDK.getInstance().ShowVideoAd(function() {
                            cc.sys.localStorage.setItem("bullet" + o.BombType.Rock, Number(n) + 1), t.updateAll()
                        }, s.Def.videoType.upbullet)
                    }, this), i.getChildByName("lvupBtn").on("touchend", function(e) {
                        var n = cc.sys.localStorage.getItem("bullet" + o.BombType.Air);
                        Number(n) % 3 != 0 || 1 == Number(n) ? t.dealUpLv(o.BombType.Air) && (cc.sys.localStorage.setItem("bullet" + o.BombType.Air, Number(n) + 1), t.updateAll()) : r.SDK.getInstance().ShowVideoAd(function() {
                            cc.sys.localStorage.setItem("bullet" + o.BombType.Air, Number(n) + 1), t.updateAll()
                        }, s.Def.videoType.upbullet)
                    }, this), c.getChildByName("lvupBtn").on("touchend", function(e) {
                        var n = cc.sys.localStorage.getItem("bullet" + o.BombType.Ice);
                        Number(n) % 3 != 0 || 1 == Number(n) ? t.dealUpLv(o.BombType.Ice) && (cc.sys.localStorage.setItem("bullet" + o.BombType.Ice, Number(n) + 1), t.updateAll()) : r.SDK.getInstance().ShowVideoAd(function() {
                            cc.sys.localStorage.setItem("bullet" + o.BombType.Ice, Number(n) + 1), t.updateAll()
                        }, s.Def.videoType.upbullet)
                    }, this), l.getChildByName("lvupBtn").on("touchend", function(e) {
                        cc.log("\u5347\u7ea7=========>");
                        var n = cc.sys.localStorage.getItem("bullet" + o.BombType.Screen);
                        Number(n) % 3 != 0 || 1 == Number(n) ? t.dealUpLv(o.BombType.Screen) && (cc.sys.localStorage.setItem("bullet" + o.BombType.Screen, Number(n) + 1), t.updateAll()) : r.SDK.getInstance().ShowVideoAd(function() {
                            cc.sys.localStorage.setItem("bullet" + o.BombType.Screen, Number(n) + 1), t.updateAll()
                        }, s.Def.videoType.upbullet)
                    }, this), u.getChildByName("lvupBtn").on("touchend", function(e) {
                        var n = cc.sys.localStorage.getItem("bullet" + o.BombType.Protect);
                        (cc.log("\u5347\u7ea7=========>", n), Number(n) % 3 != 0 || 1 == Number(n)) ? t.dealUpLv(o.BombType.Protect) && (cc.sys.localStorage.setItem("bullet" + o.BombType.Protect, Number(n) + 1), t.updateAll()): r.SDK.getInstance().ShowVideoAd(function() {
                            cc.sys.localStorage.setItem("bullet" + o.BombType.Protect, Number(n) + 1), t.updateAll()
                        }, s.Def.videoType.upbullet)
                    }, this), l.getChildByName("buyBtn").on("touchend", function(e) {
                        cc.log("\u8d2d\u4e70=========>");
                        cc.sys.localStorage.getItem("CurrentGolds");
                        var n = l.getChildByName("buyBtn").getChildByName("buygold").getComponent(cc.Label);
                        Number(n.string);
                        r.SDK.getInstance().ShowVideoAd(function() {
                            var e = cc.sys.localStorage.getItem("ScreenbulletNum");
                            cc.sys.localStorage.setItem("ScreenbulletNum", Number(e) + 1), t.updateAll()
                        }, s.Def.videoType.buyhighbullet)
                    }, this), u.getChildByName("buyBtn").on("touchend", function(e) {
                        cc.sys.localStorage.getItem("CurrentGolds");
                        var n = u.getChildByName("buyBtn").getChildByName("buygold").getComponent(cc.Label),
                            o = Number(n.string);
                        cc.log("\u8d2d\u4e70=========>", o), r.SDK.getInstance().ShowVideoAd(function() {
                            var e = cc.sys.localStorage.getItem("ProtectNum");
                            cc.sys.localStorage.setItem("ProtectNum", Number(e) + 1), t.updateAll()
                        }, s.Def.videoType.buyhighbullet)
                    }, this);
                    var h = cc.sys.localStorage.getItem("bullet" + o.BombType.Normal);
                    null != h && 0 != h.length || cc.sys.localStorage.setItem("bullet" + o.BombType.Normal, 1);
                    var d = cc.sys.localStorage.getItem("bullet" + o.BombType.Rock);
                    null != d && 0 != d.length || cc.sys.localStorage.setItem("bullet" + o.BombType.Rock, 1);
                    var p = cc.sys.localStorage.getItem("bullet" + o.BombType.Air);
                    null != p && 0 != p.length || cc.sys.localStorage.setItem("bullet" + o.BombType.Air, 1);
                    var g = cc.sys.localStorage.getItem("bullet" + o.BombType.Ice);
                    null != g && 0 != g.length || cc.sys.localStorage.setItem("bullet" + o.BombType.Ice, 1);
                    var m = cc.sys.localStorage.getItem("bullet" + o.BombType.Screen);
                    null != m && 0 != m.length || cc.sys.localStorage.setItem("bullet" + o.BombType.Screen, 1);
                    var f = cc.sys.localStorage.getItem("bullet" + o.BombType.Protect);
                    null != f && 0 != f.length || cc.sys.localStorage.setItem("bullet" + o.BombType.Protect, 1);
                    var y = cc.sys.localStorage.getItem("ScreenbulletNum");
                    null != y && 0 != y.length || cc.sys.localStorage.setItem("ScreenbulletNum", 3);
                    var v = cc.sys.localStorage.getItem("ProtectNum");
                    null != v && 0 != v.length || cc.sys.localStorage.setItem("ProtectNum", 3);
                    var b = cc.sys.localStorage.getItem("CurrentGolds");
                    return null != b && 0 != b.length || cc.sys.localStorage.setItem("CurrentGolds", 0), this.updateScoreInfo(), this.getGoldPos(), this.updateAll(), this
                }
                return e.prototype.updateAll = function() {
                    var e = this.FightScene.node.getChildByName("buyNode").getChildByName("bulletNormalBtn"),
                        t = this.FightScene.node.getChildByName("skillNode").getChildByName("bulletRockBtn"),
                        n = this.FightScene.node.getChildByName("skillNode").getChildByName("AirBulletButton"),
                        i = this.FightScene.node.getChildByName("skillNode").getChildByName("IceBulletButton"),
                        a = this.FightScene.node.getChildByName("buyNode").getChildByName("BulletScreenBtn"),
                        r = this.FightScene.node.getChildByName("buyNode").getChildByName("BulletProtectBtn");
                    this.updateInfo(e, o.BombType.Normal), this.updateInfo(t, o.BombType.Rock), this.updateInfo(n, o.BombType.Air), this.updateInfo(i, o.BombType.Ice), this.updateInfo(a, o.BombType.Screen), this.updateInfo(r, o.BombType.Protect)
                }, e.prototype.playGoldNum = function(e, t) {
                    1 != this.FightScene.isguajiing && (null == t && (t = 1), this.rollNumLabelAtlas(this.txt_gold, e, t))
                }, e.prototype.earnMoney = function(e, t, n) {
                    if (1 != this.FightScene.isguajiing) {
                        cc.sys.localStorage.getItem("CurrentGolds");
                        this.earnStar = this.earnStar + (e || 0), this.earnGem = this.earnGem + (t || 0), this.earnGold = this.earnGold + (n || 0), this._count_stars = this._count_stars + (e || 0), this._count_gems = this._count_gems + (t || 0), this._count_golds = this._count_golds + (n || 0), cc.sys.localStorage.setItem("CurrentGolds", this.earnGold);
                        this.FightScene.node.getChildByName("buyNode").getChildByName("BulletScreenBtn"), this.FightScene.node.getChildByName("buyNode").getChildByName("BulletProtectBtn")
                    }
                }, e.prototype.rollNumLabelAtlas = function(e, t, n) {
                    var o = Number(t),
                        i = 10 * Number(n),
                        a = 0,
                        r = Math.floor(o / i + 1);
                    o <= i ? (i = o, r = 1) : i += 1;
                    var s = cc.callFunc(function() {
                        if (a != o) {
                            (a += r) > o && (r -= a - o, a = o);
                            var t = e.getComponent(cc.Label),
                                n = Number(t.string),
                                i = String(n + r);
                            t.string = i
                        }
                    });
                    if (i > 0) {
                        for (var c = new Array, l = 0; l < i; l++) c.push(s), c.push(cc.delayTime(.05));
                        e.runAction(cc.sequence(c))
                    }
                }, e.prototype.getNeedGolds = function(e) {
                    var t = null,
                        n = cc.sys.localStorage.getItem("bullet" + e),
                        o = Number(n) + 1,
                        i = this.getBulletId(e, o),
                        a = this.getBulletRes(i);
                    return null != a && null != a.UPGRADE_GOLD && (t = Number(a.UPGRADE_GOLD)), t
                }, e.prototype.getNeedCD = function(e) {
                    var t = null,
                        n = cc.sys.localStorage.getItem("bullet" + e),
                        o = this.getBulletId(e, n),
                        i = this.getBulletRes(o);
                    return null != i && null != i.CD && (t = Number(i.CD)), t
                }, e.prototype.getBulletId = function(e, t) {
                    if (null != e) {
                        (null == t || t < 1) && (t = 1);
                        return t < 10 ? "S" + e + "0" + t : "S" + e + t
                    }
                }, e.prototype.getBulletRes = function(e) {
                    return i.GameData.BulletsData[e] || {}
                }, e.prototype.updateInfo = function(e, t) {
                    var n = e.getChildByName("lvicon").getChildByName("level").getComponent(cc.Label),
                        i = e.getChildByName("lvupBtn").getChildByName("need").getComponent(cc.Label),
                        a = cc.sys.localStorage.getItem("bullet" + t);
                    n.string = "Lv." + a;
                    var r = this.getNeedGolds(t);
                    i.string = r;
                    var s = Number(cc.sys.localStorage.getItem("CurrentGolds"));
                    Number(s) - Number(r) >= 0 ? e.getChildByName("lvupBtn").getChildByName("redicon").active = !0 : e.getChildByName("lvupBtn").getChildByName("redicon").active = !1;
                    if (t == o.BombType.Screen || t == o.BombType.Protect) {
                        var c = e.getChildByName("num").getComponent(cc.Label);
                        if (c)
                            if (t == o.BombType.Screen) {
                                var l = cc.sys.localStorage.getItem("ScreenbulletNum");
                                c.string = String(l)
                            } else if (t == o.BombType.Protect) {
                            l = cc.sys.localStorage.getItem("ProtectNum");
                            c.string = String(l)
                        }
                    }
                    if (this.updateScoreInfo(), 1 == this.FightScene.g_game_start) {
                        if (e.getChildByName("lvupBtn").active = !1, p = e.getChildByName("buyBtn")) {
                            p.active = !0;
                            var u = e.getChildByName("buyBtn").getChildByName("videoicon"),
                                h = e.getChildByName("buyBtn").getChildByName("buygold").getComponent(cc.Label);
                            u.active = !1, t == o.BombType.Protect ? (u.active = !0, h.string = "") : t == o.BombType.Screen && (u.active = !0, h.string = "")
                        }
                        e.active = !0;
                        var d = cc.sys.localStorage.getItem("CurrentGates");
                        1 == Number(d) ? t != o.BombType.Rock && t != o.BombType.Air || (e.active = !1) : 2 == Number(d) && t == o.BombType.Rock && (e.active = !1), t == o.BombType.Normal && (e.active = !1)
                    } else {
                        e.getChildByName("lvupBtn").active = !0;
                        var p = e.getChildByName("buyBtn"),
                            g = e.getChildByName("lvupBtn").getChildByName("videoicon");
                        g && (g.active = !1), p && (p.active = !1), t == o.BombType.Normal && (e.active = !0);
                        var m = e.getChildByName("lvupBtn").getChildByName("need");
                        if (m.active = !0, Number(a) % 3 == 0 && 1 != Number(a)) {
                            var f = e.getChildByName("lvupBtn").getChildByName("videoicon");
                            f && (f.active = !0, m.active = !1)
                        }
                    }
                }, e.prototype.updateScoreInfo = function() {
                    var e = cc.sys.localStorage.getItem("CurrentGolds");
                    this.txt_gold.getComponent(cc.Label).string = e, this.earnGold = Number(e)
                }, e.prototype.dealUpLv = function(e) {
                    var t = !0,
                        n = cc.sys.localStorage.getItem("CurrentGolds") - this.getNeedGolds(e);
                    return n < 0 ? (new a.TipUI(this.FightScene, "Thiếu vàng"), t = !1) : (cc.log("\u8db3\u591f====>", n), this.earnGold = Number(n), cc.sys.localStorage.setItem("CurrentGolds", Number(n)), this.updateScoreInfo()), t
                }, e.prototype.checkCDTime = function(e, t) {
                    e.index = !0;
                    var n = e.getComponent(cc.ProgressBar);
                    n.progress = 1;
                    var o = 1;
                    t = t || 6;
                    var i = cc.callFunc(function() {
                            o -= 1 / (100 * t), n.progress = o, o < 0 && (e.index = !1, e.stopAllActions())
                        }),
                        a = cc.repeatForever(cc.sequence(cc.delayTime(.01), i));
                    e.runAction(a)
                }, e.prototype.getGoldPos = function() {
                    var e = this.gold_icon.convertToWorldSpaceAR(cc.Vec2.ZERO);
                    return this.goldNode.convertToNodeSpaceAR(e)
                }, e
            }();
        n.FightUI = c, cc._RF.pop()
    }, {
        "./FightScene": "FightScene",
        "./GameData": "GameData",
        "./TipUI": "TipUI",
        "./frameworks/Def": "Def",
        "./platform/SDK": "SDK"
    }],
    FightVictory: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c1000agFvxJV5DtxmmJZ/2R", "FightVictory"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./AudioMarger"),
            i = e("./platform/SDK"),
            a = e("./frameworks/Def"),
            r = e("./platform/PlatformManager"),
            s = function() {
                function e(e) {
                    return this.earnStar = 0, this.earnGem = 0, this.earnGold = 0, this._count_stars = 0, this._count_gems = 0, this._count_golds = 0, this.resource = null, this.isDouble = !0, cc.log("\u6784\u9020\u6218\u6597\u80dc\u5229\u7c7b=============>"), this.FightScene = e, o.AudioMgr.getInstance().playEffect("victory"), this.creatBullet(), this
                }
                return e.prototype.creatBullet = function() {
                    if (cc.find("Canvas")) {
                        var e = this;
                        cc.loader.loadRes("prefab/FightVictory", function(t, n) {
                            if (t) cc.log("Prefab error:" + t);
                            else if (n instanceof cc.Prefab) {
                                var s = cc.instantiate(n);
                                e.FightScene.node.addChild(s, 100), e.resource = s, s.getChildByName("next_btn").on("touchend", function(t) {
                                    i.SDK.getInstance().ShowVideoAd(function() {
                                        var t = cc.sys.localStorage.getItem("CurrentGolds");
                                        1 == e.isDouble ? cc.sys.localStorage.setItem("CurrentGolds", Number(t) + 200) : cc.sys.localStorage.setItem("CurrentGolds", Number(t) + 100), e.FightScene.updateFightUI(), s.removeFromParent(), e.FightScene.goHome()
                                    }, a.Def.videoType.video_score)
                                }, this);
                                var c = s.getChildByName("nothanksNode"),
                                    l = cc.callFunc(function() {
                                        c.active = !0
                                    }),
                                    u = cc.sequence(cc.delayTime(3), l);
                                s.runAction(u), c.on("touchend", function(t) {
                                    var n = cc.sys.localStorage.getItem("CurrentGolds");
                                    cc.sys.localStorage.setItem("CurrentGolds", Number(n) + 100), e.FightScene.updateFightUI(), s.removeFromParent(), e.FightScene.goHome()
                                }, this);
                                var h = cc.sys.localStorage.getItem("CurrentGates"),
                                    d = Number(h) + 1;
                                cc.sys.localStorage.setItem("CurrentGates", Number(d));
                                try {
                                    window.ArcadeTool && window.ArcadeTool.submitChallengeScore && window.ArcadeTool.submitChallengeScore()
                                } catch (gvErr) {}
                                var p = s.getChildByName("share_btn");
                                r.PlatformManager.CurrentPlatform == r.Platform.BYTEDANCE && (p.active = !0), p.on("touchend", function(e) {
                                    console.log("\u70b9\u51fb\u5206\u4eab\u5f55\u5c4f=============>"), r.PlatformManager.getInstance().shareVideo()
                                }, this), s.getChildByName("doubleGet").on("toggle", e.callback1, e), o.AudioMgr.getInstance().playEffect("BGM003"), o.AudioMgr.getInstance().playEffect("SE012")
                            } else cc.log("Prefab error")
                        })
                    } else cc.log("find Canvas error")
                }, e.prototype.callback1 = function(e) {
                    var t = e,
                        n = this.resource.getChildByName("next_btn").getChildByName("textlabel").getComponent(cc.Label);
                    t.isChecked ? (n.string = "Nhận x2", this.isDouble = !0) : (n.string = "Nhận luôn", this.isDouble = !1)
                }, e
            }();
        n.FightVictory = s, cc._RF.pop()
    }, {
        "./AudioMarger": "AudioMarger",
        "./frameworks/Def": "Def",
        "./platform/PlatformManager": "PlatformManager",
        "./platform/SDK": "SDK"
    }],
    GameData: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8057d8OBxVJq7/xWIS1jzmU", "GameData"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.loadDataFromFile = function(t) {
                var n = 0;
                cc.loader.loadRes("gates", function(o, i) {
                    e.GatesData = i.json, t(n += 1), cc.loader.releaseAsset(i)
                }), cc.loader.loadRes("anis", function(o, i) {
                    e.AnisData = i.json, t(n += 1), cc.loader.releaseAsset(i)
                }), cc.loader.loadRes("bullets", function(o, i) {
                    e.BulletsData = i.json, t(n += 1), cc.loader.releaseAsset(i)
                }), cc.loader.loadRes("battery", function(o, i) {
                    e.BatteryData = i.json, t(n += 1), cc.loader.releaseAsset(i)
                }), cc.loader.loadRes("signIn", function(o, i) {
                    e.SignInData = i.json, t(n += 1), cc.loader.releaseAsset(i)
                })
            }, e.GatesData = null, e.AnisData = null, e.BulletsData = null, e.BatteryData = null, e.SignInData = null, e
        }();
        n.GameData = o, cc._RF.pop()
    }, {}],
    GuajiUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "75147kSlmFDJa0A8mXCtAkW", "GuajiUI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./platform/SDK"),
            i = e("./frameworks/Def"),
            a = e("./platform/PlatformManager"),
            r = function() {
                function e(e) {
                    return this.rewardData = null, this.isDouble = !1, this.curDayId = 0, this.currentGuajiNum = 0, this.FightScene = e, this.creatUI(), this
                }
                return e.prototype.creatUI = function() {
                    if (cc.find("Canvas")) {
                        var e = this;
                        cc.loader.loadRes("prefab/GuajiShouYi", function(t, n) {
                            if (t) cc.log("Prefab error:" + t);
                            else if (n instanceof cc.Prefab) {
                                var o = cc.instantiate(n);
                                e.FightScene.node.addChild(o, 100), e.Scene = o, o.getChildByName("close_btn").on("touchend", function(t) {
                                    o.removeFromParent(), e.FightScene.StopBannerNode = !1
                                }, this), e.currentGuajiNum = cc.sys.localStorage.getItem("GuajiGold"), o.getChildByName("win_bg").getChildByName("goldNum").getComponent(cc.Label).string = String(e.currentGuajiNum), o.getChildByName("double_btn").on("touchend", function(t) {
                                    e.isDouble = !0, e.getReword()
                                }, this), o.getChildByName("normal_btn").on("touchend", function(t) {
                                    e.isDouble = !1, e.successCallBack()
                                }, this);
                                var i = o.getChildByName("shuiyinLabel");
                                a.PlatformManager.CurrentPlatform == a.Platform.SISANJIUJIU && (i.active = !0)
                            } else cc.log("Prefab error")
                        })
                    } else cc.log("find Canvas error")
                }, e.prototype.getReword = function() {
                    var e = this;
                    0 != this.currentGuajiNum && o.SDK.getInstance().ShowVideoAd(function() {
                        e.successCallBack()
                    }, i.Def.videoType.guajishouyi)
                }, e.prototype.successCallBack = function() {
                    var e = Number(this.currentGuajiNum);
                    this.isDouble && (e *= 2);
                    var t = cc.sys.localStorage.getItem("CurrentGolds");
                    cc.sys.localStorage.setItem("CurrentGolds", Number(t) + e);
                    cc.sys.localStorage.getItem("GuajiGold");
                    cc.sys.localStorage.setItem("GuajiGold", 0), this.FightScene.updateFightUI(), this.Scene.removeFromParent()
                }, e
            }();
        n.GuajiUI = r, cc._RF.pop()
    }, {
        "./frameworks/Def": "Def",
        "./platform/PlatformManager": "PlatformManager",
        "./platform/SDK": "SDK"
    }],
    Help: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5362b2dscdId6ir1azisPM2", "Help"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e) {
                return this.earnStar = 0, this.earnGem = 0, this.earnGold = 0, this._count_stars = 0, this._count_gems = 0, this._count_golds = 0, cc.log("\u6784\u9020\u5f15\u5bfc\u7c7b=============>"), this.FightScene = e, this.creatUI(), this
            }
            return e.prototype.creatUI = function() {
                if (cc.find("Canvas")) {
                    var e = this;
                    cc.loader.loadRes("prefab/helper_102", function(t, n) {
                        if (t) cc.log("Prefab error:" + t);
                        else if (n instanceof cc.Prefab) {
                            var o = cc.instantiate(n);
                            e.FightScene.node.addChild(o, 100);
                            var i = o.getChildByName("masklayer"),
                                a = o.getChildByName("bgcontent").getComponent(cc.Sprite),
                                r = cc.sys.localStorage.getItem("CurrentGates"),
                                s = 0;
                            if (i.on("touchend", function(e) {
                                    2 != Number(r) && 3 != Number(r) ? 0 == s ? cc.loader.loadRes("res/helper_103", cc.SpriteFrame, function(e, t) {
                                        e || (a.spriteFrame = t, s += 1)
                                    }) : 1 == s ? cc.loader.loadRes("res/helper_104", cc.SpriteFrame, function(e, t) {
                                        e || (a.spriteFrame = t, s += 1)
                                    }) : o.removeFromParent() : o.removeFromParent()
                                }, this), 2 == Number(r)) {
                                var c = "res/helper_106";
                                cc.loader.loadRes(c, cc.SpriteFrame, function(e, t) {
                                    e || (a.spriteFrame = t)
                                })
                            } else 3 == Number(r) && (c = "res/helper_107", cc.loader.loadRes(c, cc.SpriteFrame, function(e, t) {
                                e || (a.spriteFrame = t)
                            }))
                        } else cc.log("Prefab error")
                    })
                } else cc.log("find Canvas error")
            }, e
        }();
        n.Help = o, cc._RF.pop()
    }, {}],
    Lib: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "66852Xy6PNEt5ybbiZWvzME", "Lib"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.GetTimeBySecond = function() {
                var e = new Date;
                return Math.floor(e.getTime() / 1e3)
            }, e.SecondToHours = function(e) {
                var t = e % 60;
                t = Math.floor(t / 10).toString() + t % 10;
                var n = Math.floor(e / 60) % 60;
                n = Math.floor(n / 10).toString() + n % 10;
                var o = Math.floor(e / 60 / 60);
                return (o = Math.floor(o / 10).toString() + o % 10) + ":" + n + ":" + t
            }, e.prototype.SecondToHours2 = function(e) {
                var t = e % 60;
                t = Math.floor(t / 10).toString() + t % 10;
                var n = Math.floor(e / 60) % 60;
                n = Math.floor(n / 10).toString() + n % 10;
                var o = Math.floor(e / 60 / 60);
                return (o = Math.floor(o / 10).toString() + o % 10) + ":" + n
            }, e.TimeToChinese = function(e) {
                if (null == e) return "";
                var t = new Date,
                    n = Math.floor(t.getTime() / 1e3) - e;
                return n <= 0 && (n = 1), Math.floor(n / 60 / 60 / 24) > 0 ? Math.floor(n / 60 / 60 / 24) + " ngày trước" : Math.floor(n / 60 / 60) > 0 ? Math.floor(n / 60 / 60) + " giờ trước" : Math.floor(n / 60) > 0 ? Math.floor(n / 60) + " phút trước" : Math.floor(n) + " giây trước"
            }, e.GetTimeByHours = function() {
                var e = new Date,
                    t = e.getHours();
                t = Math.floor(t / 10).toString() + t % 10;
                var n = e.getMinutes();
                return t + ":" + (n = Math.floor(n / 10).toString() + n % 10)
            }, e.encrypt = function(e, t) {
                if (null == t || t.length <= 0) return null;
                for (var n = "", o = 0; o < t.length; o++) n += t.charCodeAt(o).toString();
                var i = Math.floor(n.length / 5),
                    a = parseInt(n.charAt(i) + n.charAt(2 * i) + n.charAt(3 * i) + n.charAt(4 * i) + n.charAt(5 * i)),
                    r = Math.ceil(t.length / 2),
                    s = Math.pow(2, 31) - 1;
                if (a < 2) return null;
                var c = Math.round(1e9 * Math.random()) % 1e8;
                for (n += c; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
                n = (a * n + r) % s;
                var l = "",
                    u = "";
                for (o = 0; o < e.length; o++) {
                    var h = (e.charCodeAt(o) ^ Math.floor(n / s * 255)) + "";
                    u += (l = parseInt(h)) < 16 ? "0" + l.toString(16) : l.toString(16), n = (a * n + r) % s
                }
                for (c = c.toString(16); c.length < 8;) c = "0" + c;
                return u += c
            }, e.decrypt = function(e, t) {
                if (!(null == e || e.length < 8 || null == t || t.length <= 0)) {
                    for (var n = "", o = 0; o < t.length; o++) n += t.charCodeAt(o).toString();
                    var i = Math.floor(n.length / 5),
                        a = parseInt(n.charAt(i) + n.charAt(2 * i) + n.charAt(3 * i) + n.charAt(4 * i) + n.charAt(5 * i)),
                        r = Math.round(t.length / 2),
                        s = Math.pow(2, 31) - 1,
                        c = parseInt(e.substring(e.length - 8, e.length), 16);
                    for (e = e.substring(0, e.length - 8), n += c; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
                    n = (a * n + r) % s;
                    var l = "",
                        u = "";
                    for (o = 0; o < e.length; o += 2) l = parseInt((parseInt(e.substring(o, o + 2), 16) ^ Math.floor(n / s * 255)) + ""), u += String.fromCharCode(l), n = (a * n + r) % s;
                    return u
                }
            }, e.ShowTB = function(e, t) {
                e ? (t || (t = 1), function e(n, o, i) {
                    if (!(o > t || o > i)) {
                        for (var a = "", r = 0; r < o; r++) a += "  ";
                        for (var r in n) {
                            var s = n[r];
                            "object" != typeof s || (s instanceof Array ? cc.log(a + "[" + r + "] = ") : cc.log(a + "{" + r + "} = "), e(s, o + 1, i))
                        }
                    }
                }(e, 1, t)) : cc.log("table_raw is null")
            }, e.CopyTB2 = function(e, t) {
                for (var n in t) {
                    var o = t[n];
                    "object" != typeof o || null == o ? e[n] = o : (o instanceof Array ? e[n] = new Array : e[n] = new Object, this.CopyTB2(e[n], o))
                }
            }, e.CopyTB = function(t) {
                var n = new Object;
                return e.CopyTB2(n, t), n
            }, e.AddNewlineCharacter = function(e, t) {
                for (var n = 0, o = 0, i = 0; i < e.length; i++) {
                    if (e[i].charCodeAt() >= 0 && e[i].charCodeAt() <= 127 ? 2 == ++o && (n++, o = 0) : n++, "\n" == e[i] && (n = 0), n == t + 1) e = e.substring(0, i) + "\n" + e.substring(i, e.length), n = 0
                }
                return e
            }, e.AddNewlineCharacter2 = function(e, t) {
                null == e && (e = ""), null == t && (t = e.length);
                for (var n = new Array, o = 0, i = 0, a = 0, r = 0; r < e.length; r++) e[r].charCodeAt() >= 0 && e[r].charCodeAt() <= 127 ? 2 == ++a && (i++, a = 0) : "\n" == e[r] ? (i = 0, n.push(e.substring(o, r)), o = r + 1) : i++, i == t && (i = 0, n.push(e.substring(o, r + 1)), o = r + 1);
                return o < e.length && n.push(e.substring(o, e.length)), n
            }, e.GetNewlineCharacterNum = function(e) {
                for (var t = 0, n = 0; n < e.length; n++) "\n" == e[n] && t++;
                return t
            }, e.extend = function(e, t, n) {
                var o, i = Object.prototype.toString,
                    a = Object.prototype.hasOwnProperty,
                    r = {
                        "[object Boolean]": "boolean",
                        "[object Number]": "number",
                        "[object String]": "string",
                        "[object Function]": "function",
                        "[object Array]": "array",
                        "[object Date]": "date",
                        "[object RegExp]": "regExp",
                        "[object Object]": "object"
                    },
                    s = function(e) {
                        return null == e ? String(e) : r[i.call(e)] || "object"
                    },
                    c = function(e) {
                        return e && "object" == typeof e && "setInterval" in e
                    },
                    l = Array.isArray || function(e) {
                        return "array" === s(e)
                    },
                    u = function(e) {
                        if (!e || "object" !== s(e) || e.nodeType || c(e)) return !1;
                        if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                        var t;
                        for (t in e) return void 0 === t || a.call(e, t)
                    },
                    h = function(e, t, n) {
                        for (var i in n) {
                            var a = t[i],
                                r = n[i];
                            if (t !== r)
                                if (e && r && (u(r) || (o = l(r)))) {
                                    var s = void 0;
                                    o ? (o = !1, s = a && l(a) ? a : []) : s = a && u(a) ? a : {}, t[i] = h(e, s, r)
                                } else void 0 !== r && (t[i] = r)
                        }
                        return t
                    };
                return h(e, t, n)
            }, e.compare_time = function(e) {
                var t = new Date(e),
                    n = t.getFullYear(),
                    o = t.getMonth(),
                    i = t.getDay(),
                    a = new Date(1e3 * this.GetTimeBySecond()),
                    r = a.getFullYear(),
                    s = a.getMonth(),
                    c = a.getDay();
                return n == r && o == s && i == c
            }, e
        }();
        n.Lib = o, cc._RF.pop()
    }, {}],
    OnlineOffUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "04649psaqtCTZ8Eiofinbf3", "OnlineOffUI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./platform/SDK"),
            i = e("./frameworks/Def"),
            a = function() {
                function e(e, t) {
                    return this.rewardData = null, this.isDouble = !1, this.curDayId = 0, this.currentGuajiNum = 0, this.FightScene = e, cc.log("\u79bb\u7ebf\u6536\u76ca\u7c7b============>"), this.currentGuajiNum = t, this.creatUI(), this
                }
                return e.prototype.creatUI = function() {
                    if (cc.find("Canvas")) {
                        var e = this;
                        cc.loader.loadRes("prefab/OnlineOffShouYi", function(t, n) {
                            if (t) cc.log("Prefab error:" + t);
                            else if (n instanceof cc.Prefab) {
                                var o = cc.instantiate(n);
                                e.FightScene.node.addChild(o, 100), e.Scene = o, o.getChildByName("close_btn").on("touchend", function(e) {
                                    o.removeFromParent()
                                }, this);
                                var i = o.getChildByName("nothanksNode"),
                                    a = cc.delayTime(2),
                                    r = cc.callFunc(function() {
                                        i.active = !0
                                    }),
                                    s = new Array;
                                s.push(a), s.push(r), o.runAction(cc.sequence(s)), o.getChildByName("win_bg").getChildByName("goldNum").getComponent(cc.Label).string = String(e.currentGuajiNum), o.getChildByName("double_btn").on("touchend", function(t) {
                                    e.isDouble = !0, e.getReword()
                                }, this), i.on("touchend", function(t) {
                                    cc.log("\u4e0d\u4e86\uff0c\u8c22\u8c22============>"), e.isDouble = !1, e.successCallBack()
                                }, this)
                            } else cc.log("Prefab error")
                        })
                    } else cc.log("find Canvas error")
                }, e.prototype.getReword = function() {
                    var e = this;
                    0 != this.currentGuajiNum && o.SDK.getInstance().ShowVideoAd(function() {
                        e.successCallBack()
                    }, i.Def.videoType.video_offline)
                }, e.prototype.successCallBack = function() {
                    var e = Number(this.currentGuajiNum);
                    this.isDouble && (e *= 2);
                    var t = cc.sys.localStorage.getItem("CurrentGolds");
                    cc.sys.localStorage.setItem("CurrentGolds", Number(t) + e), cc.sys.localStorage.setItem("GuajiGold", 0), this.FightScene.updateFightUI(), this.Scene.removeFromParent()
                }, e
            }();
        n.OnlineOffUI = a, cc._RF.pop()
    }, {
        "./frameworks/Def": "Def",
        "./platform/SDK": "SDK"
    }],
    PauseUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "124d4Lc//BCaZB5aE+aX8ti", "PauseUI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e) {
                return this.earnStar = 0, this.earnGem = 0, this.earnGold = 0, this._count_stars = 0, this._count_gems = 0, this._count_golds = 0, cc.log("\u6784\u9020\u6682\u505cUI\u7c7b=============>"), this.FightScene = e, this.creatUI(), this
            }
            return e.prototype.creatUI = function() {
                if (cc.find("Canvas")) {
                    var e = this;
                    cc.loader.loadRes("prefab/PauseUI", function(t, n) {
                        if (t) cc.log("Prefab error:" + t);
                        else if (n instanceof cc.Prefab) {
                            var o = cc.instantiate(n);
                            e.FightScene.node.addChild(o, 2e3);
                            var i = o.getChildByName("btnNode");
                            e.continu_btn = i.getChildByName("continu_btn"), e.goback_btn = i.getChildByName("goback_btn"), e.showing(i), e.continu_btn.on("touchend", function(t) {
                                cc.log("\u6062\u590d=========>"), e.closing(i, o)
                            }, this), e.goback_btn.on("touchend", function(t) {
                                cc.log("\u4e3b\u9875=========>"), e.closing(i, o), e.FightScene.getFightScene().goHome()
                            }, this)
                        } else cc.log("Prefab error")
                    })
                } else cc.log("find Canvas error")
            }, e.prototype.showing = function(e) {
                if (null != e) {
                    e.setScale(0);
                    var t = this,
                        n = new Array;
                    n.push(cc.scaleTo(.3, 1)), n.push(cc.callFunc(function() {
                        t.FightScene.getFightScene().pauseAll()
                    })), e.runAction(cc.sequence(n))
                }
            }, e.prototype.closing = function(e, t) {
                if (this.FightScene.getFightScene().resumeAll(), cc.log("\u5173\u95ed\u52a8\u753b=========>", e), null != e) {
                    var n = this,
                        o = new Array;
                    o.push(cc.scaleTo(.3, 0)), o.push(cc.callFunc(function() {
                        t.removeFromParent(), n.FightScene.StopBannerNode = !1
                    })), e.runAction(cc.sequence(o))
                }
            }, e
        }();
        n.PauseUI = o, cc._RF.pop()
    }, {}],
    PlatformManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "52d02DPdOtLOZLarNsSlQVO", "PlatformManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = e("./ByteDanceManager"),
            a = e("./EditorManager"),
            r = e("./SiSanJiuJiuManager"),
            s = function() {
                return function() {}
            }();
        n.ADConfig = s,
            function(e) {
                e[e.KUAIKAN = 1] = "KUAIKAN", e[e.WEICHAT = 2] = "WEICHAT", e[e.BYTEDANCE = 3] = "BYTEDANCE", e[e.Vivo = 4] = "Vivo", e[e.Baidu = 5] = "Baidu", e[e.QQGAME = 6] = "QQGAME", e[e.SISANJIUJIU = 7] = "SISANJIUJIU", e[e.EDITOR = 0] = "EDITOR"
            }(o = n.Platform || (n.Platform = {}));
        var c = function() {
            function e() {
                this.TalkingdataEvent = [o.KUAIKAN], this.PlayVedioEvent = [o.Baidu]
            }
            return e.getInstance = function() {
                return null == this._instance && (this._instance = new e), this._instance
            }, e.prototype.iSupportTalkingdata = function() {
                for (var t = 0; t < this.TalkingdataEvent.length; t++)
                    if (e.CurrentPlatform == this.TalkingdataEvent[t]) return !0;
                return !1
            }, e.prototype.iSupportPlayVedio = function() {
                for (var t = 0; t < this.PlayVedioEvent.length; t++)
                    if (e.CurrentPlatform == this.PlayVedioEvent[t]) return !0;
                return !1
            }, e.prototype.init = function() {
                switch (cc.sys.platform) {
                    case cc.sys.WECHAT_GAME:
                        e.CurrentPlatform == o.WEICHAT ? console.log("\u5f53\u524d\u5e73\u53f0\u662fweixin============>") : e.CurrentPlatform == o.BYTEDANCE ? (console.log("\u5f53\u524d\u5e73\u53f0\u662fBYTEDANCE============>"), this.currentPaltform = new i.ByteDanceManager) : e.CurrentPlatform == o.QQGAME && console.log("\u5f53\u524d\u5e73\u53f0\u662fQQGAME============>");
                        break;
                    case cc.sys.ANDROID:
                        console.log("\u5f53\u524d\u5e73\u53f0\u662fandroid============>");
                        break;
                    case cc.sys.IPHONE:
                        console.log("\u5f53\u524d\u5e73\u53f0\u662fIPHONE============>");
                    case cc.sys.IPAD:
                        break;
                    case cc.sys.VIVO_GAME:
                        e.CurrentPlatform == o.Vivo && (console.log("\u5f53\u524d\u5e73\u53f0\u662fvivo============>"), this.currentPaltform = new a.EditorManager);
                        break;
                    case cc.sys.BAIDU_GAME:
                        e.CurrentPlatform == o.Baidu && console.log("\u5f53\u524d\u5e73\u53f0\u662fbaidu============>");
                        break;
                    default:
                        e.CurrentPlatform == o.KUAIKAN ? console.log("\u5f53\u524d\u5e73\u53f0\u662fKUAIKAN============>") : e.CurrentPlatform == o.SISANJIUJIU ? (console.log("\u5f53\u524d\u5e73\u53f0\u662f4399============>"), this.currentPaltform = new r.SiSanJiuJiuManager) : (console.log("\u5f53\u524d\u5e73\u53f0\u662fEDITOR============>"), this.currentPaltform = new a.EditorManager)
                }
            }, e.prototype.hasAd = function() {
                return this.currentPaltform.hasAd
            }, e.prototype.hasBanner = function() {
                return !!this.hasAd && this.currentPaltform.hasBanner
            }, e.prototype.hasInsertAd = function() {
                return !!this.hasAd && this.currentPaltform.hasInsertAd
            }, e.prototype.hasVideoAd = function() {
                return !!this.hasAd && this.currentPaltform.hasVideoAd
            }, e.prototype.initConfig = function() {}, e.prototype.initSdk = function(e, t, n) {
                this.currentPaltform.initSdk(e, t, n)
            }, e.prototype.login = function(e, t) {
                this.currentPaltform.login(e, t)
            }, e.prototype.pay = function(e, t) {
                this.currentPaltform.pay(e, t)
            }, e.prototype.share = function(e, t) {
                this.currentPaltform.share(e, t)
            }, e.prototype.showBanner = function(e) {
                this.currentPaltform.showBanner(e)
            }, e.prototype.hideBanner = function(e, t) {
                this.currentPaltform.hideBanner(e, t)
            }, e.prototype.showInsertAd = function(e, t, n) {
                this.currentPaltform.showInsertAd(e, t, n)
            }, e.prototype.showVideoAd = function(e, t, n) {
                this.currentPaltform.showVideoAd(e, t, n)
            }, e.prototype.otherFun = function(e, t) {
                this.currentPaltform.otherFun(e, t)
            }, e.prototype.homeToBackgroud = function(e, t) {}, e.prototype.backgroudToHome = function(e, t) {}, e.prototype.openNotify = function() {
                this.currentPaltform.openNotify()
            }, e.prototype.registerNotify = function(e, t, n) {
                this.currentPaltform.registerNotify(e, t, n)
            }, e.prototype.deleteNotify = function(e) {
                this.currentPaltform.deleteNotify(e)
            }, e.prototype.shark = function(e, t) {
                this.currentPaltform.shark(e, t)
            }, e.prototype.recorderManager = function(e, t) {
                this.currentPaltform.recorderManager(e, t)
            }, e.prototype.stopRecorderManager = function(e, t) {
                this.currentPaltform.stopRecorderManager(e, t)
            }, e.prototype.shareVideo = function(e, t) {
                this.currentPaltform.shareVideo(e, t)
            }, e.CurrentPlatform = o.SISANJIUJIU, e
        }();
        n.PlatformManager = c, cc._RF.pop()
    }, {
        "./ByteDanceManager": "ByteDanceManager",
        "./EditorManager": "EditorManager",
        "./SiSanJiuJiuManager": "SiSanJiuJiuManager"
    }],
    SDK: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fcf8dHbKCJIgoh1iZfGSexA", "SDK"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../platform/PlatformManager"),
            i = e("../TipUI"),
            a = function() {
                function e() {}
                return e.getInstance = function() {
                    return null == this.instance && (this.instance = new e), this.instance
                }, e.prototype.initSDK = function(e) {
                    this.FightScene = e, o.PlatformManager.getInstance().initSdk(this.FightScene)
                }, e.prototype.OpenNotify = function() {
                    o.PlatformManager.getInstance().openNotify()
                }, e.prototype.OpenNotifyFinish = function(e, t) {
                    e.IsOpenPush = t
                }, e.prototype.RegisterNotify = function(e, t, n) {
                    o.PlatformManager.getInstance().registerNotify(e, t, n)
                }, e.prototype.DeleteNotify = function(e) {
                    o.PlatformManager.getInstance().deleteNotify(e)
                }, e.prototype.ShowIntersticeAd = function(e) {}, e.prototype.ShowBannerAd = function(e) {
                    o.PlatformManager.getInstance().showBanner(e)
                }, e.prototype.CloseBannerAd = function() {
                    o.PlatformManager.getInstance().hideBanner()
                }, e.prototype.ShowVideoAd = function(e, t, n) {
                    var i = this;
                    this.video_func = e, this.videoType = t, this.videoTips = n, o.PlatformManager.getInstance().showVideoAd("window.SDK.ShowVideoFinish", function() {
                        i.ShowVideoFinish()
                    }, this.videoType)
                }, e.prototype.ShowVideoFinish = function() {
                    if (this.video_func) {
                        var e = "Xem QC thành công";
                        this.videoTips && (e = this.videoTips), new i.TipUI(this.FightScene, e), this.video_func()
                    }
                }, e.prototype.share = function(e, t) {}, e.prototype.Log = function(e) {
                    cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS || cc.log("Log: " + e)
                }, e.prototype.level = function() {
                    o.PlatformManager.getInstance().iSupportTalkingdata()
                }, e.prototype.registerAccount = function() {
                    cc.log("Talkingdata\u7edf\u8ba1\u7528\u6237\u6ce8\u518c=========="), o.PlatformManager.getInstance().iSupportTalkingdata()
                }, e.isShared = !1, e.bannerHeight = 120, e.restorePurchase = function() {
                    cc.sys.isNative && "iOS" == cc.sys.os && this.iAP.restorePurchase()
                }, e
            }();
        n.SDK = a, cc._RF.pop()
    }, {
        "../TipUI": "TipUI",
        "../platform/PlatformManager": "PlatformManager"
    }],
    Shake: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "08e4bOSJ+NIfq0Qcad3BTUc", "Shake");
        var o = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function o() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(e, t, n, o) {
                var i, a = arguments.length,
                    r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
                return a > 3 && r && Object.defineProperty(t, n, r), r
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            r = a.ccclass,
            s = (a.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._initial_x = 0, t._initial_y = 0, t._strength_x = 0, t._strength_y = 0, t
                }
                var n;
                return o(t, e), n = t, t.create = function(e, t, o) {
                    var i = new n;
                    return i.initWithDuration(e, t, o), i
                }, t.prototype.initWithDuration = function(e, t, n) {
                    return cc.ActionInterval.prototype.initWithDuration.apply(this, arguments), this._strength_x = t, this._strength_y = n, !0
                }, t.prototype.fgRangeRand = function(e, t) {
                    return Math.random() * (t - e) + e
                }, t.prototype.update = function(e) {
                    var t = this.fgRangeRand(-this._strength_x, this._strength_x),
                        n = this.fgRangeRand(-this._strength_y, this._strength_y);
                    this.getTarget().setPosition(t + this._initial_x, n + this._initial_y)
                }, t.prototype.startWithTarget = function(e) {
                    cc.ActionInterval.prototype.startWithTarget.apply(this, arguments), this._initial_x = e.x, this._initial_y = e.y
                }, t.prototype.stop = function() {
                    this.getTarget().setPosition(new cc.Vec2(this._initial_x, this._initial_y)), cc.ActionInterval.prototype.stop.apply(this)
                }, t = n = i([r], t)
            }(cc.ActionInterval));
        n.Shake = s, cc._RF.pop()
    }, {}],
    SiSanJiuJiuManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "77a92tuXV5FQIw07w98OS22", "SiSanJiuJiuManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../TipUI"),
            i = function() {
                function e() {
                    this.hasAd = !0, this.hasBanner = !0, this.hasInsertAd = !0, this.hasVideoAd = !0
                }
                return e.prototype.shareVideo = function(e, t) {}, e.prototype.stopRecorderManager = function(e, t) {}, e.prototype.recorderManager = function(e, t) {}, e.prototype.initSdk = function(e, t, n) {
                    this.FightScene = e, console.log("4399=====initSdk")
                }, e.prototype.login = function(e, t) {}, e.prototype.pay = function(e, t) {}, e.prototype.share = function(e, t) {}, e.prototype.showBanner = function(e, t) {}, e.prototype.hideBanner = function(e, t) {}, e.prototype.showInsertAd = function(e, t) {}, e.prototype.showVideoAd = function(e, t) {
                    var n = this;
                    console.log("Bắt đầu quảng cáo video ===========>");
                    try {
                        n.FightScene && n.FightScene.pauseAll && n.FightScene.pauseAll()
                    } catch (err) {}
                    var finish = function(ok) {
                        try {
                            n.FightScene && n.FightScene.resumeAll && n.FightScene.resumeAll()
                        } catch (err2) {}
                        if (ok) {
                            t && t();
                            try {
                                window.ArcadeTool && window.ArcadeTool.scheduleSave && window.ArcadeTool.scheduleSave(400)
                            } catch (err3) {}
                        } else new o.TipUI(n.FightScene, "Quảng cáo của ngày hôm nay đã hết")
                    };
                    if (window.ArcadeTool && typeof window.ArcadeTool.showRewardAd === "function") window.ArcadeTool.showRewardAd(function() {
                        finish(!0)
                    }, function() {
                        finish(!1)
                    });
                    else if (typeof GVAdBreak === "function") try {
                        GVAdBreak(function() {
                            finish(!0)
                        })
                    } catch (err4) {
                        finish(!0)
                    } else finish(!0)
                }, e.prototype.otherFun = function(e, t) {}, e.prototype.homeToBackgroud = function(e, t) {}, e.prototype.backgroudToHome = function(e, t) {}, e.prototype.openNotify = function() {}, e.prototype.registerNotify = function(e, t, n) {}, e.prototype.deleteNotify = function(e) {}, e.prototype.shark = function(e, t) {}, e.prototype.openShare = function(e, t) {}, e
            }();
        n.SiSanJiuJiuManager = i, cc._RF.pop()
    }, {
        "../TipUI": "TipUI"
    }],
    SignUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ebded9UdLVMx7OByBVh2/JH", "SignUI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./GameData"),
            i = e("./frameworks/Utils"),
            a = e("./TipUI"),
            r = e("./frameworks/Lib"),
            s = e("./platform/SDK"),
            c = e("./frameworks/Def"),
            l = e("./platform/PlatformManager"),
            u = function() {
                function e(e) {
                    return this.rewardData = null, this.isDouble = !1, this.curDayId = 0, this.buttonArray = new Map, this.FightScene = e, this.creatUI(), this
                }
                return e.prototype.creatUI = function() {
                    if (cc.find("Canvas")) {
                        var e = this;
                        cc.sys.localStorage.getItem("SignInDays") >= 9 && cc.sys.localStorage.setItem("SignInDays", 0);
                        cc.loader.loadRes("prefab/SignUI", function(t, n) {
                            if (t) cc.log("Prefab error:" + t);
                            else if (n instanceof cc.Prefab) {
                                var a = cc.instantiate(n);
                                e.FightScene.node.addChild(a, 100), e.Scene = a, a.getChildByName("closeButton").on("touchend", function(t) {
                                    a.removeFromParent(), e.FightScene.StopBannerNode = !1
                                }, this);
                                var r = cc.sys.localStorage.getItem("SignInDays");
                                null != r && 0 != r.length || cc.sys.localStorage.setItem("SignInDays", 0), a.getChildByName("getSignButton").on("touchend", function(t) {
                                    e.isDouble = !0, 1 == e.getReword() && s.SDK.getInstance().ShowVideoAd(function() {
                                        e.playSuccessReward()
                                    }, c.Def.videoType.signget)
                                }, this), a.getChildByName("normalSignNode").on("touchend", function(t) {
                                    e.isDouble = !1, 1 == e.getReword() && e.playSuccessReward()
                                }, this);
                                var u = a.getChildByName("shuiyinLabel");
                                l.PlatformManager.CurrentPlatform == l.Platform.SISANJIUJIU && (u.active = !0);
                                for (var h = a.getChildByName("rewordBg"), d = h.getChildByName("rewordItem"), p = o.GameData.SignInData, g = 0, m = 0, f = Object.keys(p); m < f.length; m++) {
                                    var y = f[m],
                                        v = cc.instantiate(d);
                                    v.active = !0;
                                    var b = g % 3,
                                        _ = Math.floor(g / 3);
                                    v.setPosition(160 * b - 160, 110 - 110 * _), h.addChild(v), e.buttonArray.set(y, v), v.getChildByName("rewordnum").getComponent(cc.Label).string = p[y].AMOUNT;
                                    var I = v.getChildByName("rewordicon").getComponent(cc.Sprite);
                                    i.Utils.loadSprite("res/" + p[y].SMALL_ICON, I);
                                    var S = cc.sys.localStorage.getItem("SignInDays");
                                    e.curDayId = Number(S) + 1, Number(y) == e.curDayId && (e.updatePreView(p[y]), e.rewardData = p[y], 1 == e.getReword() && (v.getChildByName("todayicon").active = !0));
                                    var N = v.getChildByName("yigeticon");
                                    Number(y) < e.curDayId && (N.active = !0), g += 1
                                }
                            } else cc.log("Prefab error")
                        })
                    } else cc.log("find Canvas error")
                }, e.prototype.updatePreView = function(e) {
                    var t = this.Scene.getChildByName("previewbg").getChildByName("previewnum").getComponent(cc.Label),
                        n = this.Scene.getChildByName("previewbg").getChildByName("previewicon").getComponent(cc.Sprite);
                    t.string = e.AMOUNT, i.Utils.loadSprite("res/" + e.BIG_ICON, n)
                }, e.prototype.getReword = function() {
                    if (null == this.rewardData) return !1;
                    var e = cc.sys.localStorage.getItem("SignedTime");
                    return 1 != r.Lib.compare_time(1e3 * e) || (new a.TipUI(this.FightScene, "Hôm nay đã điểm danh"), !1)
                }, e.prototype.playSuccessReward = function() {
                    var e = this,
                        t = Number(this.rewardData.KIND),
                        n = Number(this.rewardData.AMOUNT);
                    if (this.isDouble && (n *= 2), 1 == t);
                    else if (2 == t) {
                        cc.log("\u91d1\u5e01==========>", n);
                        var o = cc.sys.localStorage.getItem("CurrentGolds");
                        cc.sys.localStorage.setItem("CurrentGolds", Number(o) + n)
                    } else if (3 == t) {
                        var i = cc.sys.localStorage.getItem("ScreenbulletNum");
                        cc.sys.localStorage.setItem("ScreenbulletNum", Number(i) + n)
                    } else if (4 == t) {
                        i = cc.sys.localStorage.getItem("ProtectNum");
                        cc.sys.localStorage.setItem("ProtectNum", Number(i) + n)
                    }
                    cc.sys.localStorage.setItem("SignInDays", this.curDayId), cc.sys.localStorage.setItem("SignedTime", r.Lib.GetTimeBySecond()), this.FightScene.updateFightUI(), this.buttonArray.forEach(function(t, n) {
                        n == Number(e.curDayId) && (t.getChildByName("yigeticon").active = !0)
                    })
                }, e
            }();
        n.SignUI = u, cc._RF.pop()
    }, {
        "./GameData": "GameData",
        "./TipUI": "TipUI",
        "./frameworks/Def": "Def",
        "./frameworks/Lib": "Lib",
        "./frameworks/Utils": "Utils",
        "./platform/PlatformManager": "PlatformManager",
        "./platform/SDK": "SDK"
    }],
    TipUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1be73uIxPFPKrFaEEwSZnNC", "TipUI");
        var o = this && this.__decorate || function(e, t, n, o) {
            var i, a = arguments.length,
                r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, n, r) : i(t, n)) || r);
            return a > 3 && r && Object.defineProperty(t, n, r), r
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            a = i.ccclass,
            r = (i.property, function() {
                function e(e, t) {
                    return this.FightScene = e, this.creatUI(t), this
                }
                return e.prototype.creatUI = function(e) {
                    if (cc.find("Canvas")) {
                        var t = this;
                        cc.loader.loadRes("prefab/TipUI", function(n, o) {
                            if (n) cc.log("Prefab error:" + n);
                            else if (o instanceof cc.Prefab) {
                                var i = cc.instantiate(o);
                                t.FightScene.node.addChild(i, 1e3);
                                var a = i;
                                a.stopAllActions();
                                var r = a.getChildByName("tips"),
                                    s = a.getChildByName("tipStr");
                                r.removeAllChildren(!0), s.active = !0, s.getComponent(cc.Label).string = e, a.setScale(0, .1), a.runAction(cc.sequence(cc.scaleTo(.1, 1, .1), cc.scaleTo(.1, 1, 1), cc.delayTime(2), cc.spawn(cc.moveBy(2, cc.v2(0, 100)), cc.fadeOut(1)), cc.callFunc(function() {
                                    i.removeFromParent()
                                })))
                            } else cc.log("Prefab error")
                        })
                    } else cc.log("find Canvas error")
                }, e = o([a], e)
            }());
        n.TipUI = r, cc._RF.pop()
    }, {}],
    Utils: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e5689oYsNhHV6EMKxG7VD+M", "Utils"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), String.prototype.format = function() {
            if (0 == arguments.length) return this;
            var e = arguments[0],
                t = this;
            if ("object" == typeof e) {
                for (var n in e) t = t.replace(new RegExp("\\{" + n + "\\}", "g"), e[n]);
                return t
            }
            for (var o = 0; o < arguments.length; o++) t = t.replace(new RegExp("\\{" + o + "\\}", "g"), arguments[o]);
            return t
        };
        var o = function() {
            function e() {}
            return e.loadText = function(e, t) {
                cc.loader.loadRes(e, function(e, n) {
                    t(n.text)
                })
            }, e.loadJson = function(e, t) {
                cc.loader.loadRes(e, function(e, n) {
                    t(n.json)
                })
            }, e.loadSprite = function(e, t) {
                cc.loader.loadRes(e, cc.SpriteFrame, function(e, n) {
                    e || (t.spriteFrame = n)
                })
            }, e.loadButtonSprite = function(e, t) {
                cc.loader.loadRes(e, cc.SpriteFrame, function(e, n) {
                    e || (t.normalSprite = n, t.pressedSprite = n, t.hoverSprite = n)
                })
            }, e.loadAtlasSprite = function(e, t, n) {
                cc.loader.loadRes(e, cc.SpriteAtlas, function(e, o) {
                    var i = o.getSpriteFrame(t);
                    n.spriteFrame = i
                })
            }, e.loadPrefab = function(e, t, n) {
                cc.loader.loadRes(e, function(e, o) {
                    if (!e) {
                        var i = cc.instantiate(o);
                        t(i, n)
                    }
                })
            }, e.loadDragonBones2 = function(e, t, n, o, i, a, r) {
                void 0 === o && (o = "armatureName"), void 0 === i && (i = "Animation1"), void 0 === a && (a = null), void 0 === r && (r = 0), cc.loader.loadResDir(t, function(t, s) {
                    if (!(t || s.length <= 0)) {
                        var c = e.addComponent(dragonBones.ArmatureDisplay);
                        s.forEach(function(e) {
                            e instanceof dragonBones.DragonBonesAsset && (c.dragonAsset = e), e instanceof dragonBones.DragonBonesAtlasAsset && (c.dragonAtlasAsset = e)
                        }), c.armatureName = o, c.playAnimation(i, r), n && n(), a && c.addEventListener(dragonBones.EventObject.COMPLETE, a)
                    }
                })
            }, e.loadDragonBones = function(e, t, n, o, i, a) {
                void 0 === o && (o = "Animation1"), void 0 === a && (a = 0), cc.loader.loadResDir(t, cc.Asset, null, function(t, r) {
                    var s = e.addComponent(dragonBones.ArmatureDisplay);
                    s.dragonAsset = r[0], s.dragonAtlasAsset = r[3], s.armatureName = "armatureName", s.playAnimation(o, a), n && n(), i && s.addEventListener(dragonBones.EventObject.COMPLETE, i)
                })
            }, e.reloadDragonBones = function(e, t, n, o, i) {
                void 0 === o && (o = "Animation1"), cc.loader.loadResDir(t, cc.Asset, null, function(t, a) {
                    var r = e.getComponent(dragonBones.ArmatureDisplay);
                    r.dragonAsset = a[0], r.dragonAtlasAsset = a[3], r.armatureName = "armatureName", r.playAnimation(o, 0), n && (cc.log("\u52a0\u8f7d\u56de\u8c03=========>"), n()), i && (cc.log("\u56de\u8c03=========>"), r.addEventListener(dragonBones.EventObject.COMPLETE, i))
                })
            }, e.loadAnimationClip = function(e, t) {
                cc.loader.loadRes(e, function(e, n) {
                    t.getComponent(cc.Animation).addClip(n, "anim")
                })
            }, e.releaseRes = function(e, t) {
                t ? cc.loader.releaseRes(e, t) : cc.loader.releaseRes(e)
            }, e.releaseAsset = function(e) {
                cc.loader.releaseAsset(e)
            }, e.relasePrefab = function(e, t) {
                var n = cc.loader.getDependsRecursively(e);
                if (t)
                    for (var o = 0; o < t.length; o++) {
                        var i = n.indexOf(t[o]._uuid); - 1 !== i && n.splice(i, 1)
                    }
                cc.loader.release(n)
            }, e
        }();
        n.Utils = o, cc._RF.pop()
    }, {}],
    Weapon: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c780bQFuAJCV6sYqByB1nRk", "Weapon"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.prototype.update = function(e) {}, e.prototype.createBullet = function() {}, e.prototype.createBulletNormal = function() {}, e.prototype.createCannon = function() {}, e
        }();
        n.Weapon = o, cc._RF.pop()
    }, {}],
    tool: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ea00bsB1B9B2IzomyyW/syd", "tool"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.tagGenerator = function() {
                return null == this.cur_tag && (this.cur_tag = this.getRandomNumInt(1e3, 9999)), this.cur_tag = this.cur_tag + 1, this.cur_tag
            }, e.getRandomNumInt = function(e, t) {
                var n = t - e,
                    o = Math.random();
                return e + Math.round(o * n)
            }, e.makeRandomArr = function(e, t) {
                if (!(t > e.length)) {
                    for (var n = e.slice(0), o = [], i = 0; i < t; i++) {
                        var a = Math.floor(Math.random() * (n.length - 1)),
                            r = n[a];
                        n.splice(a, 1), o.push(r)
                    }
                    return o
                }
            }, e.cur_tag = null, e
        }();
        n.tools = o, cc._RF.pop()
    }, {}]
}, {}, ["AudioMarger", "BaseAI", "Battery", "Bullet", "CollisionEvent", "Effect", "Enemy", "EqiupChange", "FightFail", "FightScene", "FightUI", "FightVictory", "GameData", "GuajiUI", "Help", "OnlineOffUI", "PauseUI", "Shake", "SignUI", "TipUI", "Weapon", "Config", "Def", "Lib", "Utils", "ByteDanceManager", "EditorManager", "PlatformManager", "SDK", "SiSanJiuJiuManager", "tool"]);