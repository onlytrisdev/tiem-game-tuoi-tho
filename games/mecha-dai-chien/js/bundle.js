! function() {
    "use strict";
    class t extends Laya.Script {
        constructor() {
            super(), this.scale = 0, this.moveTime = 100, this.state = "", this.finalPosition = new Laya.Vector3(0, 0, 0), this.RandomX = 0, this.RandomY = 0
        }
        Init(t, i, e, a) {
            this.data = t, this.owner.scaleX = this.scale, this.owner.scaleY = this.scale, 1 == e && (this.RandomX = v.RandomFloat(-50, 50), this.RandomY = v.RandomFloat(-100, 100)), Laya.Tween.to(this.owner, {
                x: this.owner.x + this.RandomX,
                y: this.owner.y + this.RandomY,
                scaleX: a,
                scaleY: a
            }, 300, null, null, this.data.delay), Laya.timer.frameOnce(30, this, function() {
                Laya.Tween.to(this.owner, {
                    x: this.data.target.x,
                    y: this.data.target.y,
                    scaleX: 1,
                    scaleY: 1
                }, 300, null, null, this.data.delay)
            }), Laya.timer.frameOnce(50, this, function() {
                Laya.Tween.to(this.owner, {
                    x: this.data.target.x,
                    y: this.data.target.y,
                    scaleX: .5,
                    scaleY: .5
                }, 30, null, Laya.Handler.create(this, function() {
                    null != i && i(), this.owner.destroy()
                }), this.data.delay)
            })
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    var i = Laya.View,
        e = (Laya.Dialog, Laya.Scene, Laya.ClassUtils.regClass);
    class a extends i {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(a.uiView)
        }
    }
    a.uiView = {
        type: "View",
        props: {
            zOrder: 12,
            width: 720,
            height: 1280
        },
        compId: 2,
        child: [{
            type: "Image",
            props: {
                y: 0,
                x: 0,
                width: 684,
                skin: "UIRes/repeat/Image_repeat_03.png",
                pivotY: 49,
                pivotX: 342,
                height: 97
            },
            compId: 5,
            child: [{
                type: "Label",
                props: {
                    width: 400,
                    var: "value",
                    valign: "middle",
                    text: "Ko đủ xu vàng!",
                    height: 67,
                    fontSize: 30,
                    font: "Microsoft YaHei",
                    color: "#ffffff",
                    centerY: 6,
                    centerX: 0,
                    bold: !0,
                    align: "center"
                },
                compId: 4
            }]
        }],
        animations: [{
            nodes: [{
                target: 5,
                keyframes: {
                    y: [{
                        value: 0,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 5,
                        key: "y",
                        index: 0
                    }, {
                        value: -50,
                        tweenMethod: "linearOut",
                        tween: !0,
                        target: 5,
                        key: "y",
                        index: 90
                    }],
                    alpha: [{
                        value: 1,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 5,
                        key: "alpha",
                        index: 0
                    }, {
                        value: 0,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 5,
                        key: "alpha",
                        index: 90
                    }]
                }
            }],
            name: "ani1",
            id: 1,
            frameRate: 24,
            action: 1
        }],
        loadList: ["UIRes/repeat/Image_repeat_03.png"],
        loadList3D: []
    }, e("ui.UIPanel.GameTipUI", a);
    class s extends Laya.Script3D {
        constructor() {
            super(), this.scale = 0, this.moveTime = 10, this.state = "", this.finalPosition = new Laya.Vector3(0, 0, 0)
        }
        Init(t) {
            this.data = t, this.thisTrans = this.owner.transform, this.moveY = 0, this.thisTrans.setWorldLossyScale(new Laya.Vector3(this.scale, this.scale, this.scale)), this.finalPosition = this.thisTrans.position.clone(), this.moveX = this.thisTrans.position.x + v.RandomFloat(-4, 4), this.moveZ = this.thisTrans.position.z + v.RandomFloat(-4, 4), this.thisTrans.localRotationEuler = new Laya.Vector3(v.RandomFloat(0, 360), v.RandomFloat(0, 360), 0), this.state = "create"
        }
        onUpdate() {
            switch (this.state) {
                case "create":
                    if (this.data.delay -= 1, this.data.delay <= 0) {
                        this.scale = .6, this.thisTrans.setWorldLossyScale(new Laya.Vector3(this.scale, this.scale, this.scale));
                        var t = .1;
                        null == this.fanzhuan ? (this.moveY += this.GetDir(7 - this.moveY) * t, this.moveY >= 6 && (this.fanzhuan = !0), this.finalPosition.x += this.GetDir(this.moveX - this.finalPosition.x) * t * .3, this.finalPosition.z += this.GetDir(this.moveZ - this.finalPosition.z) * t * .3) : (this.moveY += this.GetDir(0 - this.moveY) * t, this.moveY <= 0 && (this.moveY = 0), this.finalPosition.x += this.GetDir(this.moveX - this.finalPosition.x) * t * 2, this.finalPosition.z += this.GetDir(this.moveZ - this.finalPosition.z) * t * 2), this.thisTrans.position = new Laya.Vector3(this.finalPosition.x, this.moveY, this.finalPosition.z), this.thisTrans.localRotationEulerX += this.GetDir(0 - this.thisTrans.localRotationEulerX) * t * .5, this.thisTrans.localRotationEulerY += this.GetDir(0 - this.thisTrans.localRotationEulerY) * t * .5, this.thisTrans.localRotationEulerZ += this.GetDir(0 - this.thisTrans.localRotationEulerZ) * t * .5, this.moveTime -= t, this.moveTime <= 0 && (this.finalPosition = this.thisTrans.position.clone(), this.state = "move")
                    }
                    break;
                case "move":
                    t = .1;
                    var i = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
                    i = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)), v.mainCamera.viewportPointToRay(new Laya.Vector2(607, 230), i);
                    var e = new Laya.Vector3(0, 0, 0);
                    if (Laya.Vector3.scale(i.direction, 30, e), Laya.Vector3.add(v.mainCamera.transform.position, e, e), this.finalPosition.x += this.GetDir(e.x - this.finalPosition.x) * t * 2, this.finalPosition.y += this.GetDir(e.y - this.finalPosition.y) * t * 2, this.finalPosition.z += this.GetDir(e.z - this.finalPosition.z) * t * 2, this.thisTrans.position = new Laya.Vector3(this.finalPosition.x, this.finalPosition.y, this.finalPosition.z), this.scale += .03 * (.1 - this.scale), this.thisTrans.setWorldLossyScale(new Laya.Vector3(this.scale, this.scale, this.scale)), this.scale <= .4) return this.owner.destroy(), void(this.state = "over")
            }
        }
        GetDir(t) {
            return t
        }
    }
    class n {
        static ShowUIPanel(t, i = !0, e = null) {
            Laya.Scene.open("UIPanel/" + t + ".scene", i, e)
        }
        static createGoldEffect(t) {
            var i = Laya.stage.width,
                e = Laya.stage.height;
            if (window.qg) {
                var a = qg.getSystemInfoSync();
                i = a.screenWidth, e = a.screenHeight
            }
            var n = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            v.mainCamera.viewportPointToRay(new Laya.Vector2(.5 * i, .5 * e), n);
            var o = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.scale(n.direction, 30, o), Laya.Vector3.add(v.mainCamera.transform.position, o, o), Laya.Vector3.subtract(o, v.cameraTrans.transform.position, o), n = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)), v.mainCamera.viewportPointToRay(new Laya.Vector2(48, 97), n);
            var h = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.scale(n.direction, 30, h), Laya.Vector3.add(v.mainCamera.transform.position, h, h), Laya.Vector3.subtract(h, v.cameraTrans.transform.position, h);
            for (var r = 0; r < t; r++) {
                var l = Laya.Sprite3D.instantiate(v.models.getChildByName("money"), v.curScene);
                l.transform.position = v.cameraTrans.transform.position.clone(), l.addComponent(s).Init({
                    delay: r * (50 / t),
                    target: {
                        x: h.x,
                        y: h.y,
                        z: h.z
                    }
                }), l.layer = 1
            }
        }
        static ShowGameTipUI(t) {
            return;
            var i = new Laya.Point(360, 700);
            let e = Laya.stage.addChild(new a);
            e.value.text = t, e.x = i.x, e.y = i.y, Laya.timer.frameOnce(120, this, function() {
                e.destroy()
            })
        }
        static CreateGoldEffectUI(i, e, a, s, n) {
            for (var o = 0; o < i; o++) {
                var h = new Laya.Image("UIRes/game/Image_game_" + e + ".png");
                h.anchorX = .5, h.anchorX = .5, Laya.stage.addChild(h), h.zOrder = -1;
                var r = new Laya.Vector4;
                v.mainCamera.worldToViewportPoint(n, r), h.x = r.x, h.y = r.y - 50, h.addComponent(t).Init({
                    delay: o * (50 / i),
                    target: {
                        x: a,
                        y: s
                    }
                }, null, !1, 2)
            }
        }
        static CreateGoldEffectCoinUI(i, e, a, s) {
            for (var n = 0; n < i; n++) {
                var o = new Laya.Image("UIRes/repeat/Image_repeat_04.png");
                o.anchorX = .5, o.anchorX = .5, Laya.stage.addChild(o);
                var h = new Laya.Vector4;
                v.mainCamera.worldToViewportPoint(s, h), o.x = h.x, o.y = h.y - 150, o.addComponent(t).Init({
                    delay: n * (50 / i),
                    target: {
                        x: e,
                        y: a
                    }
                }, null, !0, 1)
            }
        }
    }
    n.gameUI = null, n.joy = null, n.pushUI = 0;
    class o {
        static GetData() {
            var t = Laya.LocalStorage.getItem("mlzxData");
            t && (o.user = JSON.parse(t))
        }
        static SaveData() {
            var t = JSON.stringify(o.user);
            Laya.LocalStorage.setItem("mlzxData", t)
        }
        static GetUserData(t) {
            return null != o.user[t] ? o.user[t] : o.userDV[t]
        }
        static SetUserData(t, i) {
            o.user[t] = i, o.SaveData()
        }
        static AddProp(t, i) {
            1 == t ? o.SetUserData("Gold", o.GetUserData("Gold") + i) : 2 == t && o.SetUserData("Money", o.GetUserData("Money") + i)
        }
        static IsCanLessProp(t, i) {
            if (1 == t) {
                if (o.GetUserData("Gold") >= i) return !0
            } else if (2 == t && o.GetUserData("Money") >= i) return !0;
            return !1
        }
        static LessProp(t, i) {
            var e = 0;
            1 == t ? (e = o.GetUserData("Gold")) >= i && o.SetUserData("Gold", e - i) : 2 == t && (e = o.GetUserData("Money")) >= i && o.SetUserData("Money", e - i)
        }
        static SavePiFuTypeList(t) {
            var i = o.GetUserData("piFuType");
            i[t] = 1, o.SetUserData("piFuType", i)
        }
        static savePiFuTypeNum(t) {
            o.SetUserData("piFuTypeNum", t)
        }
        static SaveChongWuTypeList(t) {
            var i = o.GetUserData("chongWuType");
            i[t] = 1, o.SetUserData("chongWuType", i)
        }
        static saveChongWuNum(t) {
            o.SetUserData("chongWuNum", t)
        }
        static savePowerLv() {
            o.SetUserData("powerLv", o.GetUserData("powerLv") + 1)
        }
        static AddExp(t) {
            var i = o.GetUserData("curExp"),
                e = o.GetUserData("playerLv");
            (i += t) >= o.GetUserData("allExp") && (i = 0, e += 1, o.SetUserData("playerLv", e)), o.SetUserData("curExp", i)
        }
        static GetGuangKalv() {
            var t = o.GetUserData("showLv");
            return t > 5 && (t = v.RandomInt(1, 6)), t
        }
    }
    o.user = {}, o.userDV = {}, o.maxGuanQia = 100, o.maxPlayerLevel = 30, o.userDV.beijing = 1, o.userDV.yinxiao = 1, o.userDV.Gold = 0, o.userDV.Money = 0, o.userDV.showLv = 1, o.userDV.powerLv = 1, o.userDV.playerLv = 1, o.userDV.curExp = 0, o.userDV.allExp = 60, o.userDV.piFuType = {
        1: 1,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    }, o.userDV.piFuTypeNum = 1, o.userDV.chongWuType = {
        0: 1,
        1: 0,
        2: 0,
        3: 0
    }, o.userDV.chongWuNum = 0, o.userDV.isSign = 0, o.userDV.signNum = 0, o.userDV.canSignNum = 0;
    class h extends Laya.Script3D {
        constructor() {
            super()
        }
        onAwake() {
            Laya.timer.once(5e3, this, function() {
                this.owner.destroy()
            })
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class r extends Laya.Script3D {
        constructor() {
            super(), this.speed = .5, this.damage = 1, this.targetPos = null, this.initPos = new Laya.Vector3
        }
        onAwake() {
            Laya.timer.once(5e3, this, function() {
                this.owner.destroy()
            }), this.initPos = new Laya.Vector3(this.owner.transform.position.x, 0, this.owner.transform.position.z)
        }
        init(t) {
            this.speed = t
        }
        onUpdate() {
            var t = new Laya.Vector3(0, 0, 0);
            this.owner.transform.getForward(t), Laya.Vector3.normalize(t, t), this.owner.transform.translate(new Laya.Vector3(-t.x * this.speed * Laya.timer.delta * .08, -t.y * this.speed * Laya.timer.delta * .08, -t.z * this.speed * Laya.timer.delta * .08), !1)
        }
        onTriggerEnter(t) {
            if (t && t.owner) {
                if (1 == t.owner.destroyed) return;
                t.owner.name.indexOf("ShangHai")
            }
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class l extends Laya.Script3D {
        constructor() {
            super(), this.xuetiao, this.Shu, this.ShangHaiShu, this.anim, this.animShangHai
        }
        onAwake() {
            this.xuetiao = this.owner.getChildByName("xuetiao").getChildByName("red"), this.Shu = this.owner.getChildByName("Shu"), this.ShangHaiShu = this.owner.getChildByName("ShangHaiShu").getChildByName("Shu"), this.anim = this.owner.getComponent(Laya.Animator), this.anim.crossFade("ChuXian", .02), this.animShangHai = this.owner.getChildByName("ShangHaiShu").getComponent(Laya.Animator), this.animShangHai.play("Idle")
        }
        updateTiao(t, i, e) {
            this.xuetiao.meshRenderer.material.tilingOffsetZ = .5 - t / i * .5, v.updateShuZi3D(t, this.Shu, .35, !1), e > 0 && v.updateShuZi3D(e, this.ShangHaiShu, .2, !0), this.animShangHai.crossFade("TanChu", .02), t > 0 || this.anim.crossFade("XiaoShi", .02)
        }
        onUpdate() {
            var t = new Laya.Vector3(0, 1, 0),
                i = new Laya.Quaternion;
            Laya.Quaternion.lookAt(v.mainCamera.transform.position, this.owner.transform.position, t, i), i.w = -i.w, this.owner.transform.rotation = i
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class u extends Laya.Script3D {
        constructor() {
            super(), this.rigi, this.hurtNum = 2
        }
        onAwake() {
            this.rigi = this.owner.getComponent(Laya.Rigidbody3D)
        }
        hurt() {
            return this.hurtNum -= 1, this.hurtNum <= 0
        }
        Fei() {
            null != this.rigi && (v.PlaySound("DiRenPoSui"), this.rigi.isKinematic = !1, this.rigi.applyImpulse(new Laya.Vector3(v.RandomFloat(-10, 10), v.RandomFloat(-5, 10), v.RandomFloat(-10, 10))), this.rigi.angularVelocity = new Laya.Vector3(v.RandomFloat(-5, 5), v.RandomFloat(-5, 5), v.RandomFloat(-5, 5)))
        }
        onUpdate() {}
        onDisable() {}
    }
    class d extends Laya.Script3D {
        constructor() {
            super(), this.anim, this.animName = "Idle", this.body, this.Robot1_ArmL, this.Robot1_ArmR, this.Robot1_Vest, this.Robot1_GreaveL, this.Robot1_GreaveR, this.Vest_TossedR, this.Vest_TossedL, this.Robot1_GreaveLSui, this.Robot1_GreaveRSui, this.Vest_TossedSui1, this.Vest_TossedSui2, this.ArmRTossed, this.ArmLTossed, this.EnemyRocketLauncher, this.hp = 100, this.allHp = 100, this.state = "watie", this.isAttack = !0, this.attacking = !1, this.attackNum = 0, this.framNum = 2e3, this.Xue, this.XueJs, this.isFangYu = !1, this.bullPre, this.firePos, this.bullSpeed = .5, this.E8Fx, this.E18Fx, this.E4Fx
        }
        onAwake() {
            this.anim = this.owner.getComponent(Laya.Animator), this.body = this.owner.getChildByName("AngryRobot1"), this.Robot1_ArmL = this.body.getChildByName("Robot1_ArmL"), this.Robot1_ArmR = this.body.getChildByName("Robot1_ArmR"), this.Robot1_Vest = this.body.getChildByName("Robot1_Vest"), this.Robot1_GreaveL = v.FindChildByNameHelper(this.body, "Robot1_GreaveL"), this.Robot1_GreaveR = v.FindChildByNameHelper(this.body, "Robot1_GreaveR"), this.Robot1_GreaveLSui = v.FindChildByNameHelper(this.body, "Robot1_GreaveLSui"), this.Robot1_GreaveRSui = v.FindChildByNameHelper(this.body, "Robot1_GreaveRSui"), this.Vest_TossedSui1 = v.FindChildByNameHelper(this.body, "Vest_TossedSui1"), this.Vest_TossedSui2 = v.FindChildByNameHelper(this.body, "Vest_TossedSui2"), this.Vest_TossedR = this.Vest_TossedSui2.getChildByName("Vest_TossedR"), this.Vest_TossedL = this.Vest_TossedSui2.getChildByName("Vest_TossedL"), this.ArmRTossed = v.FindChildByNameHelper(this.body, "ArmRTossed"), this.ArmLTossed = v.FindChildByNameHelper(this.body, "ArmLTossed"), this.EnemyRocketLauncher = v.FindChildByNameHelper(this.body, "EnemyRocketLauncher"), this.Vest_TossedSui1.active = !1, this.Vest_TossedSui2.active = !1, this.ArmRTossed.active = !1, this.ArmLTossed.active = !1, this.Robot1_GreaveLSui.active = !1, this.Robot1_GreaveRSui.active = !1, this.E4Fx = v.FindChildByNameHelper(this.body, "E4"), this.E4Fx.active = !1, this.E8Fx = this.body.getChildByName("E8"), this.E18Fx = this.body.getChildByName("E18"), this.E8Fx.active = !1, this.E18Fx.active = !1, 1 == o.GetUserData("showLv") ? this.EnemyRocketLauncher.active = !1 : this.EnemyRocketLauncher.active = !0, this.bullPre = v.models.getChildByName("Boss1ZiDan"), this.firePos = this.EnemyRocketLauncher.getChildByName("Rocket"), this.Xue = this.owner.getChildByName("Xue"), this.XueJs = this.Xue.addComponent(l), this.hideGL(), this.initHp(), this.XueJs.updateTiao(this.hp, this.allHp, 0)
        }
        initHp() {
            this.hp = 50 + 10 * (o.GetUserData("showLv") - 1), this.hp > 999 && (this.hp = 999), this.allHp = this.hp
        }
        begin() {
            this.anim.play("ShengCheng"), this.state = "watie", Laya.timer.once(800, this, function() {
                v.PlaySound("DiRenZhuoLu");
                var t = Laya.Sprite3D.instantiate(v.models.getChildByName("E1"), v.curScene);
                t.transform.position = this.owner.transform.position, t.transform.rotation = this.owner.transform.rotation, t.addComponent(h), v.curLevelManager.begin()
            }), Laya.timer.once(1500, this, function() {
                this.anim.play("Ready"), this.animName = "Ready", Laya.timer.once(800, this, function() {
                    this.anim.play("Idle"), this.animName = "Idle", null != n.gameUI && n.gameUI.showYouXiZhong(), Laya.timer.once(1e3, this, function() {
                        this.state = "attack"
                    })
                })
            })
        }
        playAnim(t) {
            this.anim.crossFade(t, .02), this.animName = t
        }
        hideGL() {
            this.Robot1_ArmL.getChildAt(0).active = !1, this.Robot1_ArmR.getChildAt(0).active = !1, this.Robot1_Vest.getChildAt(0).active = !1, this.Robot1_GreaveL.getChildAt(0).active = !1, this.Robot1_GreaveR.getChildAt(0).active = !1, this.Vest_TossedR.getChildAt(0).active = !1, this.Vest_TossedL.getChildAt(0).active = !1
        }
        showGL(t) {
            this.Robot1_Vest.getChildAt(0).active = "DEF-spine.002" == t, this.Robot1_ArmL.getChildAt(0).active = "DEF-forearm.L" == t, this.Robot1_ArmR.getChildAt(0).active = "DEF-forearm.R" == t, this.Robot1_GreaveL.getChildAt(0).active = "DEF-shin.L" == t, this.Robot1_GreaveR.getChildAt(0).active = "DEF-shin.R" == t, this.Vest_TossedL.getChildAt(0).active = "DEF-breast.L" == t, this.Vest_TossedR.getChildAt(0).active = "DEF-breast.R" == t
        }
        huJiaShouJi(t) {
            if ("DEF-spine.002" == t.name) {
                var i = !1;
                for (let t = 0; t < this.Vest_TossedSui1.numChildren; t++) {
                    var e = null;
                    if (1 == (i = null == (o = this.Vest_TossedSui1.getChildAt(t)).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                        var a = o.transform.position.clone(),
                            s = o.transform.rotation.clone(),
                            n = o.transform.getWorldLossyScale().clone();
                        v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), e.Fei(), t--
                    }
                }
                1 == i && (this.Robot1_Vest.active = !1, this.Vest_TossedSui1.active = !0, this.Vest_TossedSui2.active = !0, t.active = !1)
            } else if ("DEF-forearm.L" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.ArmLTossed).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), this.ArmLTossed.active = !0, e.Fei(), this.Robot1_ArmL.active = !1, t.active = !1
                }
            } else if ("DEF-forearm.R" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.ArmRTossed).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), this.ArmRTossed.active = !0, e.Fei(), this.Robot1_ArmR.active = !1, this.EnemyRocketLauncher.active = !1, t.active = !1
                }
            } else if ("DEF-shin.L" == t.name) {
                i = !1;
                for (let t = 0; t < this.Robot1_GreaveLSui.numChildren; t++) {
                    e = null;
                    if (1 == (i = null == (o = this.Robot1_GreaveLSui.getChildAt(t)).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                        a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                        v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), e.Fei(), t--
                    }
                }
                1 == i && (this.Robot1_GreaveLSui.active = !0, this.Robot1_GreaveL.active = !1, t.active = !1)
            } else if ("DEF-shin.R" == t.name) {
                i = !1;
                for (let t = 0; t < this.Robot1_GreaveRSui.numChildren; t++) {
                    e = null;
                    if (1 == (i = null == (o = this.Robot1_GreaveRSui.getChildAt(t)).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                        a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                        v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), e.Fei(), t--
                    }
                }
                1 == i && (this.Robot1_GreaveRSui.active = !0, this.Robot1_GreaveR.active = !1, t.active = !1)
            } else if ("DEF-breast.L" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.Vest_TossedL).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), e.Fei(), this.Vest_TossedL.active = !0, t.active = !1
                }
            } else if ("DEF-breast.R" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.Vest_TossedR).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    var o;
                    a = (o = this.Vest_TossedR).transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), e.Fei(), this.Vest_TossedR.active = !0, t.active = !1
                }
            }
        }
        hurt(t, i, e) {
            if ("dead" != this.state) {
                var a = i,
                    s = t;
                if (this.attacking = !1, this.anim.speed = 1, "xuanYun" != this.state)
                    if (0 == this.isFangYu) {
                        Laya.timer.clearAll(this), this.isAttack = !1, this.E18Fx.active = !1, this.E8Fx.active = !1, a.transform.position.x >= this.owner.transform.position.x ? this.playAnim("Hit_L") : this.playAnim("Hit_R");
                        var n = Laya.Sprite3D.instantiate(v.models.getChildByName("E2"), v.curScene);
                        n.transform.position = e, n.addComponent(h), Laya.timer.once(2200, this, this.huiFuIdle), Laya.timer.once(4e3, this, function() {
                            this.isAttack = !0, "fangYu" != this.state && "watie" != this.state || (this.state = "attack")
                        })
                    } else v.PlaySound("GeDang"), this.playAnim("FangYu_Hit"), s = Math.floor(.3 * s);
                this.hp -= s, this.hp <= 0 && (Laya.timer.clearAll(this), v.PlaySound("DiFangJiJiaSiWang"), this.playAnim("Die"), this.hp = 0, this.state = "dead", v.curPlayerControl.win()), this.XueJs.updateTiao(this.hp, this.allHp, s)
            }
        }
        attackDongZuo() {
            if (1 == o.GetUserData("showLv")) 1 == this.Robot1_ArmL.active ? this.playAnim("Atk_L") : this.playAnim("Atk_Head"), this.framNum = 2500 / this.anim.speed;
            else {
                var t = v.RandomInt(0, 3);
                0 == t ? (1 == this.Robot1_ArmL.active ? this.playAnim("Atk_L") : this.playAnim("Atk_Head"), this.framNum = 2500 / this.anim.speed) : 1 == t ? 1 == this.Robot1_ArmL.active && 1 == this.Robot1_ArmR.active ? (this.playAnim("Atk_Za"), this.E18Fx.active = !0, this.framNum = 3500 / this.anim.speed, Laya.timer.once(2e3 / this.anim.speed, this, function() {
                    this.E18Fx.active = !1
                })) : 1 == this.Robot1_ArmL.active ? (this.playAnim("Atk_L"), this.framNum = 2500 / this.anim.speed) : 1 == this.Robot1_ArmR.active && 1 == this.firePos.active ? (this.playAnim("Atk_SheJi"), this.E8Fx.active = !0, this.framNum = 4e3 / this.anim.speed, Laya.timer.once(2e3 / this.anim.speed, this, this.fireFaShe)) : (this.playAnim("Atk_Head"), this.framNum = 2500 / this.anim.speed) : 2 == t && (1 == this.Robot1_ArmR.active && 1 == this.firePos.active ? (this.playAnim("Atk_SheJi"), this.E8Fx.active = !0, this.framNum = 4e3 / this.anim.speed, Laya.timer.once(2e3 / this.anim.speed, this, this.fireFaShe)) : 1 == this.Robot1_ArmL.active ? (this.playAnim("Atk_L"), this.framNum = 2500 / this.anim.speed) : (this.playAnim("Atk_Head"), this.framNum = 2500 / this.anim.speed))
            }
        }
        onUpdate() {
            if (!(Laya.timer.delta > 300) && 0 != Laya.timer.scale) switch (this.state) {
                case "watie":
                    break;
                case "attack":
                    if (1 == this.isAttack) {
                        if (Laya.timer.clear(this, this.huiFuIdle), this.isAttack = !1, this.attacking = !0, this.anim.speed = 1, this.attackDongZuo(), 1 == v.duoBiJiaoXue) return void Laya.timer.once(this.framNum / 3, this, function() {
                            null != n.gameUI && n.gameUI.duoBiNoCD(), this.stop()
                        });
                        Laya.timer.once(this.framNum / 2, this, function() {
                            this.attacking = !1, v.PlaySound("DiRenGongJi"), 1 == v.curPlayerControl.hurt(10) && (Laya.timer.clearAll(this), this.xuanYun())
                        }), Laya.timer.once(this.framNum, this, function() {
                            this.playAnim("Idle"), this.anim.speed = 1
                        }), Laya.timer.once(2 * this.framNum, this, function() {
                            this.isAttack = !0
                        })
                    }
            }
        }
        fireFaShe() {
            var t = Laya.Sprite3D.instantiate(this.bullPre, v.curScene);
            t.transform.position = this.firePos.transform.position, t.transform.rotation = this.firePos.transform.rotation, t.addComponent(r).init(this.bullSpeed), this.firePos.active = !1, this.E8Fx.active = !1, Laya.timer.once(1e3, this, function() {
                this.firePos.active = !0
            })
        }
        shanBi() {}
        fangYu() {
            0 == this.isFangYu && "xuanYun" != this.state && (Laya.timer.clearAll(this), this.attacking = !1, this.isFangYu = !0, this.anim.speed = 1, this.playAnim("FangYu_Start"), this.state = "fangYu", this.isAttack = !0, Laya.timer.once(4e3, this, function() {
                this.playAnim("FangYu_End")
            }), Laya.timer.once(4200, this, function() {
                this.isFangYu = !1, this.playAnim("Idle")
            }), Laya.timer.once(6e3, this, function() {
                this.state = "attack"
            }))
        }
        huiFuIdle() {
            this.playAnim("Idle")
        }
        stop() {
            Laya.timer.clearAll(this), this.attacking = !1, this.anim.speed = 0, this.state = "waiteJiaoXue"
        }
        huiFu() {
            this.anim.speed = 1
        }
        huiFuAttack() {
            this.anim.speed = 1, Laya.timer.once(this.framNum - this.framNum / 3, this, function() {
                this.playAnim("Idle"), this.anim.speed = 1
            }), Laya.timer.once(5 * this.framNum - this.framNum / 3, this, function() {
                this.isAttack = !0
            }), this.state = "attack"
        }
        xuanYun() {
            this.anim.speed = 1, this.playAnim("XuanYun"), this.state = "xuanYun", this.E4Fx.active = !0, this.isAttack = !0, Laya.timer.once(4e3, this, function() {
                this.E4Fx.active = !1, this.playAnim("Idle")
            }), Laya.timer.once(6e3, this, function() {
                this.state = "attack"
            })
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class m extends Laya.Script3D {
        constructor() {
            super(), this.anim, this.animName = "Idle", this.body, this.GreaveL, this.GreaveR, this.Jaws, this.NoseShell, this.Shield1, this.GreaveLSui, this.GreaveRSui, this.Shield_TossedSui1, this.Shield_TossedSui2, this.Shield1_Tossed, this.NoseShellSui, this.WeaponBlaster, this.hp = 100, this.allHp = 100, this.state = "watie", this.isAttack = !0, this.attacking = !1, this.attackNum = 0, this.framNum = 2e3, this.Xue, this.XueJs, this.isFangYu = !1, this.bullPre, this.firePos, this.bullSpeed = .5, this.E8Fx, this.E18Fx, this.E4Fx
        }
        onAwake() {
            this.anim = this.owner.getComponent(Laya.Animator), this.body = this.owner.getChildByName("AngryDino"), this.GreaveL = this.body.getChildByName("Greave.L"), this.GreaveR = this.body.getChildByName("Greave.R"), this.Jaws = this.body.getChildByName("Jaws"), this.NoseShell = this.body.getChildByName("NoseShell"), this.Shield1 = this.body.getChildByName("Shield1"), this.GreaveLSui = v.FindChildByNameHelper(this.body, "GreaveLSui"), this.GreaveRSui = v.FindChildByNameHelper(this.body, "GreaveRSui"), this.Shield_TossedSui1 = v.FindChildByNameHelper(this.body, "Shield_TossedSui1"), this.Shield_TossedSui2 = v.FindChildByNameHelper(this.body, "Shield_TossedSui2"), this.Shield1_Tossed = this.Shield_TossedSui2.getChildByName("Shield1_Tossed"), this.NoseShellSui = v.FindChildByNameHelper(this.body, "NoseShellSui"), this.WeaponBlaster = v.FindChildByNameHelper(this.body, "WeaponBlaster"), this.GreaveLSui.active = !1, this.GreaveRSui.active = !1, this.Shield_TossedSui1.active = !1, this.Shield_TossedSui2.active = !1, this.NoseShellSui.active = !1, this.E4Fx = v.FindChildByNameHelper(this.body, "E4"), this.E4Fx.active = !1, this.E8Fx = this.body.getChildByName("E8"), this.E18Fx = this.body.getChildByName("E18"), this.E8Fx.active = !1, this.E18Fx.active = !1, 2 == o.GetUserData("showLv") ? this.WeaponBlaster.active = !1 : this.WeaponBlaster.active = !0, this.bullPre = v.models.getChildByName("Boss2ZiDan"), this.firePos = this.WeaponBlaster.getChildByName("firePos"), this.Xue = this.owner.getChildByName("Xue"), this.XueJs = this.Xue.addComponent(l), this.hideGL(), this.initHp(), this.XueJs.updateTiao(this.hp, this.allHp, 0)
        }
        initHp() {
            this.hp = 50 + 10 * (o.GetUserData("showLv") - 1), this.hp > 999 && (this.hp = 999), this.allHp = this.hp
        }
        begin() {
            this.anim.play("ShengCheng"), this.state = "watie", Laya.timer.once(800, this, function() {
                v.PlaySound("DiRenZhuoLu");
                var t = Laya.Sprite3D.instantiate(v.models.getChildByName("E1"), v.curScene);
                t.transform.position = this.owner.transform.position, t.transform.rotation = this.owner.transform.rotation, t.addComponent(h), v.curLevelManager.begin()
            }), Laya.timer.once(1500, this, function() {
                this.anim.play("Ready"), this.animName = "Ready", v.PlaySound("Boss2HouJiao"), Laya.timer.once(1200, this, function() {
                    this.anim.play("Idle"), this.animName = "Idle", null != n.gameUI && n.gameUI.showYouXiZhong(), Laya.timer.once(1e3, this, function() {
                        this.state = "attack"
                    })
                })
            })
        }
        playAnim(t) {
            this.anim.crossFade(t, .02), this.animName = t
        }
        hideGL() {
            this.GreaveL.getChildAt(0).active = !1, this.GreaveR.getChildAt(0).active = !1, this.NoseShell.getChildAt(0).active = !1, this.Shield1.getChildAt(0).active = !1, this.Shield1_Tossed.getChildAt(0).active = !1
        }
        showGL(t) {
            this.GreaveL.getChildAt(0).active = "DEF-shin.L" == t, this.GreaveR.getChildAt(0).active = "DEF-shin.R" == t, this.NoseShell.getChildAt(0).active = "DEF-neck.003" == t, this.Shield1.getChildAt(0).active = "DEF-spine.004" == t, this.Shield1_Tossed.getChildAt(0).active = "DEF-Shield1_Tossed" == t
        }
        huJiaShouJi(t) {
            if ("DEF-spine.004" == t.name) {
                var i = !1;
                for (let t = 0; t < this.Shield_TossedSui1.numChildren; t++) {
                    var e = null;
                    if (1 == (i = null == (r = this.Shield_TossedSui1.getChildAt(t)).getComponent(u) ? (e = r.addComponent(u)).hurt() : (e = r.getComponent(u)).hurt())) {
                        var a = r.transform.position.clone(),
                            s = r.transform.rotation.clone(),
                            n = r.transform.getWorldLossyScale().clone();
                        v.curScene.addChild(r), r.transform.position = a, r.transform.rotation = s, r.transform.setWorldLossyScale(n), e.Fei(), t--
                    }
                }
                1 == i && (this.Shield1.active = !1, this.Shield_TossedSui1.active = !0, this.Shield_TossedSui2.active = !0, t.active = !1)
            } else if ("DEF-neck.003" == t.name) {
                i = !1;
                for (let t = 0; t < this.NoseShellSui.numChildren; t++) {
                    e = null;
                    if (1 == (i = null == (r = this.NoseShellSui.getChildAt(t)).getComponent(u) ? (e = r.addComponent(u)).hurt() : (e = r.getComponent(u)).hurt())) {
                        a = r.transform.position.clone(), s = r.transform.rotation.clone(), n = r.transform.getWorldLossyScale().clone();
                        v.curScene.addChild(r), r.transform.position = a, r.transform.rotation = s, r.transform.setWorldLossyScale(n), e.Fei(), t--
                    }
                }
                1 == i && (this.NoseShellSui.active = !0, this.NoseShell.active = !1, t.active = !1)
            } else if ("DEF-shin.R" == t.name) {
                i = !1;
                for (let t = 0; t < this.GreaveRSui.numChildren; t++) {
                    e = null;
                    if (1 == (i = null == (r = this.GreaveRSui.getChildAt(t)).getComponent(u) ? (e = r.addComponent(u)).hurt() : (e = r.getComponent(u)).hurt())) {
                        a = r.transform.position.clone(), s = r.transform.rotation.clone(), n = r.transform.getWorldLossyScale().clone();
                        v.curScene.addChild(r), r.transform.position = a, r.transform.rotation = s, r.transform.setWorldLossyScale(n), e.Fei(), t--
                    }
                }
                1 == i && (this.GreaveRSui.active = !0, this.GreaveR.active = !1, t.active = !1)
            } else if ("DEF-shin.L" == t.name) {
                i = !1;
                for (let t = 0; t < this.GreaveLSui.numChildren; t++) {
                    e = null;
                    if (1 == (i = null == (r = this.GreaveLSui.getChildAt(t)).getComponent(u) ? (e = r.addComponent(u)).hurt() : (e = r.getComponent(u)).hurt())) {
                        a = r.transform.position.clone(), s = r.transform.rotation.clone(), n = r.transform.getWorldLossyScale().clone();
                        v.curScene.addChild(r), r.transform.position = a, r.transform.rotation = s, r.transform.setWorldLossyScale(n), e.Fei(), t--
                    }
                }
                1 == i && (this.GreaveLSui.active = !0, this.GreaveL.active = !1, t.active = !1)
            } else if ("DEF-Shield1_Tossed" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (r = this.Shield1_Tossed).getComponent(u) ? (e = r.addComponent(u)).hurt() : (e = r.getComponent(u)).hurt())) {
                    a = r.transform.position.clone(), s = r.transform.rotation.clone(), n = r.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(r), r.transform.position = a, r.transform.rotation = s, r.transform.setWorldLossyScale(n), e.Fei(), this.Shield1_Tossed.active = !0, t.active = !1
                }
            } else if ("DEF-Jaws" == t.name) {
                i = !1;
                if (this.Jaws.numChildren > 0) {
                    var o = v.RandomInt(0, this.Jaws.numChildren + 1);
                    for (let t = 0; t < o; t++) {
                        var h = v.RandomInt(0, this.Jaws.numChildren),
                            r = this.Jaws.getChildAt(h);
                        if (1 == (i = !0)) {
                            a = r.transform.position.clone(), s = r.transform.rotation.clone(), n = r.transform.getWorldLossyScale().clone();
                            this.body.addChild(r), r.transform.position = a, r.transform.rotation = s, r.transform.setWorldLossyScale(n), r.active = !1
                        }
                    }
                }
                this.Jaws.numChildren <= 0 && (t.active = !1)
            }
        }
        hurt(t, i, e) {
            if ("dead" != this.state) {
                var a = i,
                    s = t;
                if (this.attacking = !1, this.anim.speed = 1, "xuanYun" != this.state)
                    if (0 == this.isFangYu) {
                        Laya.timer.clearAll(this), this.isAttack = !1, this.E18Fx.active = !1, this.E8Fx.active = !1, a.transform.position.x >= this.owner.transform.position.x ? this.playAnim("Hit_L") : this.playAnim("Hit_R");
                        var n = Laya.Sprite3D.instantiate(v.models.getChildByName("E2"), v.curScene);
                        n.transform.position = e, n.addComponent(h), Laya.timer.once(2200, this, this.huiFuIdle), Laya.timer.once(4e3, this, function() {
                            this.isAttack = !0, "fangYu" != this.state && "watie" != this.state || (this.state = "attack")
                        })
                    } else v.PlaySound("GeDang"), this.playAnim("FangYu_Hit"), s = Math.floor(.3 * s);
                this.hp -= s, v.PlaySound("Boss2Hit"), this.hp <= 0 && (Laya.timer.clearAll(this), v.PlaySound("Boss2SiWang"), this.playAnim("Die"), this.hp = 0, this.state = "dead", v.curPlayerControl.win()), this.XueJs.updateTiao(this.hp, this.allHp, s)
            }
        }
        attackDongZuo() {
            if (2 == o.GetUserData("showLv")) this.Jaws.numChildren > 0 ? this.playAnim("Atk_Mouth") : (this.playAnim("Atk_WeiBa"), this.E18Fx.active = !0, Laya.timer.once(1500 / this.anim.speed, this, function() {
                this.E18Fx.active = !1
            })), this.framNum = 3e3 / this.anim.speed;
            else {
                var t = v.RandomInt(0, 3);
                0 == t ? this.Jaws.numChildren > 0 ? this.playAnim("Atk_Mouth") : (this.playAnim("Atk_WeiBa"), this.E18Fx.active = !0, Laya.timer.once(1500 / this.anim.speed, this, function() {
                    this.E18Fx.active = !1
                })) : 1 == t ? (this.playAnim("Atk_WeiBa"), this.E18Fx.active = !0, Laya.timer.once(1500 / this.anim.speed, this, function() {
                    this.E18Fx.active = !1
                })) : 2 == t && (1 == this.WeaponBlaster.active && 1 == this.firePos.active ? (this.playAnim("Atk_SheJi"), this.E8Fx.active = !0, Laya.timer.once(1500 / this.anim.speed, this, this.fireFaShe)) : this.Jaws.numChildren > 0 ? this.playAnim("Atk_Mouth") : (this.playAnim("Atk_WeiBa"), this.E18Fx.active = !0, Laya.timer.once(1500 / this.anim.speed, this, function() {
                    this.E18Fx.active = !1
                }))), this.framNum = 3e3 / this.anim.speed
            }
        }
        onUpdate() {
            if (!(Laya.timer.delta > 300) && 0 != Laya.timer.scale) switch (this.state) {
                case "watie":
                    break;
                case "attack":
                    if (1 == this.isAttack) {
                        if (Laya.timer.clear(this, this.huiFuIdle), this.isAttack = !1, this.attacking = !0, this.anim.speed = 1, this.attackDongZuo(), 1 == v.duoBiJiaoXue) return void Laya.timer.once(this.framNum / 3, this, function() {
                            null != n.gameUI && n.gameUI.duoBiNoCD(), this.stop()
                        });
                        if (1 == v.fangYuJiaoXue) return void Laya.timer.once(this.framNum / 3, this, function() {
                            null != n.gameUI && n.gameUI.fangYuNoCD(), this.stop()
                        });
                        Laya.timer.once(this.framNum / 2, this, function() {
                            this.attacking = !1, 1 == v.curPlayerControl.hurt(10) ? (Laya.timer.clearAll(this), this.xuanYun()) : v.PlaySound("Boss2GongJi")
                        }), Laya.timer.once(this.framNum, this, function() {
                            this.playAnim("Idle"), this.anim.speed = 1
                        }), Laya.timer.once(2 * this.framNum, this, function() {
                            this.isAttack = !0
                        })
                    }
            }
        }
        fireFaShe() {
            var t = Laya.Sprite3D.instantiate(this.bullPre, v.curScene);
            t.transform.position = this.firePos.transform.position, t.transform.rotation = this.firePos.transform.rotation, t.addComponent(h), this.firePos.active = !1, this.E8Fx.active = !1, Laya.timer.once(1e3, this, function() {
                this.firePos.active = !0
            })
        }
        shanBi() {}
        fangYu() {
            0 == this.isFangYu && "xuanYun" != this.state && (Laya.timer.clearAll(this), this.attacking = !1, this.isFangYu = !0, this.anim.speed = 1, this.playAnim("FangYu_Start"), this.state = "fangYu", this.isAttack = !0, Laya.timer.once(4e3, this, function() {
                this.playAnim("FangYu_End")
            }), Laya.timer.once(4200, this, function() {
                this.isFangYu = !1, this.playAnim("Idle")
            }), Laya.timer.once(6e3, this, function() {
                this.state = "attack"
            }))
        }
        huiFuIdle() {
            this.playAnim("Idle")
        }
        stop() {
            Laya.timer.clearAll(this), this.attacking = !1, this.anim.speed = 0, this.state = "waiteJiaoXue"
        }
        huiFu() {
            this.anim.speed = 1
        }
        huiFuAttack() {
            this.anim.speed = 1, this.playAnim("XuanYun"), this.state = "xuanYun", this.E4Fx.active = !0, v.curPlayerControl.hurt(0), Laya.timer.once(5 * this.framNum - this.framNum / 3, this, function() {
                this.isAttack = !0
            }), Laya.timer.once(4e3, this, function() {
                this.E4Fx.active = !1, this.playAnim("Idle"), this.state = "attack"
            })
        }
        xuanYun() {
            this.anim.speed = 1, this.playAnim("XuanYun"), this.state = "xuanYun", this.E4Fx.active = !0, this.isAttack = !0, Laya.timer.once(4e3, this, function() {
                this.E4Fx.active = !1, this.playAnim("Idle")
            }), Laya.timer.once(6e3, this, function() {
                this.state = "attack"
            })
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class c extends Laya.Script3D {
        constructor() {
            super(), this.anim, this.animName = "Idle", this.body, this.Horn1, this.Horn2, this.Horn5, this.Horn6, this.Horn9, this.ToothDown, this.ToothUp, this.hp = 100, this.allHp = 100, this.state = "watie", this.isAttack = !0, this.attacking = !1, this.attackNum = 0, this.framNum = 2e3, this.Xue, this.XueJs, this.isFangYu = !1, this.bullPre, this.firePos, this.bullSpeed = .1, this.E8Fx, this.E18Fx
        }
        onAwake() {
            this.anim = this.owner.getComponent(Laya.Animator), this.body = this.owner.getChildByName("Worm_Monster"), this.Horn1 = v.FindChildByNameHelper(this.body, "Horn1"), this.Horn2 = v.FindChildByNameHelper(this.body, "Horn2"), this.Horn5 = v.FindChildByNameHelper(this.body, "Horn5"), this.Horn6 = v.FindChildByNameHelper(this.body, "Horn6"), this.Horn9 = v.FindChildByNameHelper(this.body, "Horn9"), this.ToothDown = v.FindChildByNameHelper(this.body, "ToothDown"), this.ToothUp = v.FindChildByNameHelper(this.body, "ToothUp"), this.bullPre = v.models.getChildByName("Boss3ZiDan"), this.firePos = v.FindChildByNameHelper(this.body, "firePos"), this.E8Fx = this.body.getChildByName("E8"), this.E18Fx = this.body.getChildByName("E18"), this.E8Fx.active = !1, this.E18Fx.active = !1, this.Xue = this.owner.getChildByName("Xue"), this.XueJs = this.Xue.addComponent(l), this.hideGL(), this.initHp(), this.XueJs.updateTiao(this.hp, this.allHp, 0)
        }
        initHp() {
            this.hp = 50 + 10 * (o.GetUserData("showLv") - 1), this.hp > 999 && (this.hp = 999), this.allHp = this.hp
        }
        begin() {
            this.anim.play("ShengCheng"), this.state = "watie", Laya.timer.once(500, this, function() {
                v.PlaySound("DiRenZhuoLu");
                var t = Laya.Sprite3D.instantiate(v.models.getChildByName("E1"), v.curScene);
                t.transform.position = this.owner.transform.position, t.transform.rotation = this.owner.transform.rotation, t.addComponent(h), v.curLevelManager.begin()
            }), Laya.timer.once(1e3, this, function() {
                this.anim.play("Ready"), this.animName = "Ready", v.PlaySound("Boss2HouJiao"), Laya.timer.once(2e3, this, function() {
                    this.anim.play("Idle"), this.animName = "Idle", null != n.gameUI && n.gameUI.showYouXiZhong(), Laya.timer.once(1e3, this, function() {
                        this.state = "attack"
                    })
                })
            })
        }
        playAnim(t) {
            this.anim.crossFade(t, .02), this.animName = t
        }
        hideGL() {
            this.Horn1.getChildAt(0).active = !1, this.Horn2.getChildAt(0).active = !1, this.Horn5.getChildAt(0).active = !1, this.Horn6.getChildAt(0).active = !1
        }
        showGL(t) {
            this.Horn1.getChildAt(0).active = "DEF-Horn1" == t, this.Horn2.getChildAt(0).active = "DEF-Horn2" == t, this.Horn5.getChildAt(0).active = "DEF-Horn5" == t, this.Horn6.getChildAt(0).active = "DEF-Horn6" == t
        }
        huJiaShouJi(t) {
            if (0 == this.isFangYu)
                if ("DEF-HeadUp" == t.name) {
                    if (this.ToothUp.numChildren > 0) {
                        var i = v.RandomInt(0, this.ToothUp.numChildren + 1);
                        for (let t = 0; t < i; t++) {
                            var e = v.RandomInt(0, this.ToothUp.numChildren),
                                a = null;
                            if (1 == (null == (h = this.ToothUp.getChildAt(e)).getComponent(u) ? (a = h.addComponent(u)).hurt() : (a = h.getComponent(u)).hurt())) {
                                var s = h.transform.position.clone(),
                                    n = h.transform.rotation.clone(),
                                    o = h.transform.getWorldLossyScale().clone();
                                v.curScene.addChild(h), h.transform.position = s, h.transform.rotation = n, h.transform.setWorldLossyScale(o), a.Fei()
                            }
                        }
                    }
                    this.ToothUp.numChildren <= 0 && (t.active = !1)
                } else if ("DEF-HeadDown" == t.name) {
                if (this.ToothDown.numChildren > 0) {
                    i = v.RandomInt(0, this.ToothDown.numChildren + 1);
                    for (let t = 0; t < i; t++) {
                        e = v.RandomInt(0, this.ToothDown.numChildren), a = null;
                        if (1 == (null == (h = this.ToothDown.getChildAt(e)).getComponent(u) ? (a = h.addComponent(u)).hurt() : (a = h.getComponent(u)).hurt())) {
                            s = h.transform.position.clone(), n = h.transform.rotation.clone(), o = h.transform.getWorldLossyScale().clone();
                            v.curScene.addChild(h), h.transform.position = s, h.transform.rotation = n, h.transform.setWorldLossyScale(o), a.Fei()
                        }
                    }
                }
                this.ToothDown.numChildren <= 0 && (t.active = !1)
            } else if ("DEF-Horn1" == t.name) {
                a = null;
                if (1 == (null == (h = this.Horn1).getComponent(u) ? (a = h.addComponent(u)).hurt() : (a = h.getComponent(u)).hurt())) {
                    s = h.transform.position.clone(), n = h.transform.rotation.clone(), o = h.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(h), h.transform.position = s, h.transform.rotation = n, h.transform.setWorldLossyScale(o), a.Fei(), t.active = !1
                }
            } else if ("DEF-Horn2" == t.name) {
                a = null;
                if (1 == (null == (h = this.Horn2).getComponent(u) ? (a = h.addComponent(u)).hurt() : (a = h.getComponent(u)).hurt())) {
                    s = h.transform.position.clone(), n = h.transform.rotation.clone(), o = h.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(h), h.transform.position = s, h.transform.rotation = n, h.transform.setWorldLossyScale(o), a.Fei(), t.active = !1
                }
            } else if ("DEF-Horn5" == t.name) {
                a = null;
                if (1 == (null == (h = this.Horn5).getComponent(u) ? (a = h.addComponent(u)).hurt() : (a = h.getComponent(u)).hurt())) {
                    s = h.transform.position.clone(), n = h.transform.rotation.clone(), o = h.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(h), h.transform.position = s, h.transform.rotation = n, h.transform.setWorldLossyScale(o), a.Fei(), t.active = !1
                }
            } else if ("DEF-Horn6" == t.name) {
                a = null;
                if (1 == (null == (h = this.Horn6).getComponent(u) ? (a = h.addComponent(u)).hurt() : (a = h.getComponent(u)).hurt())) {
                    s = h.transform.position.clone(), n = h.transform.rotation.clone(), o = h.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(h), h.transform.position = s, h.transform.rotation = n, h.transform.setWorldLossyScale(o), a.Fei(), t.active = !1
                }
            } else if ("DEF-Horn9" == t.name) {
                var h;
                a = null;
                if (1 == (null == (h = this.Horn9).getComponent(u) ? (a = h.addComponent(u)).hurt() : (a = h.getComponent(u)).hurt())) {
                    s = h.transform.position.clone(), n = h.transform.rotation.clone(), o = h.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(h), h.transform.position = s, h.transform.rotation = n, h.transform.setWorldLossyScale(o), a.Fei(), t.active = !1
                }
            }
        }
        hurt(t, i, e) {
            if ("dead" != this.state) {
                var a = i,
                    s = t;
                if (this.attacking = !1, this.anim.speed = 1, 0 != this.isFangYu) return void v.PlaySound("GeDang");
                Laya.timer.clearAll(this), this.isAttack = !1, this.E18Fx.active = !1, this.E8Fx.active = !1, a.transform.position.x, this.owner.transform.position.x, this.playAnim("Hit");
                var n = Laya.Sprite3D.instantiate(v.models.getChildByName("E9"), v.curScene);
                n.transform.position = e, n.addComponent(h), Laya.timer.once(500, this, this.huiFuIdle), Laya.timer.once(2e3, this, function() {
                    this.isAttack = !0, "fangYu" != this.state && "watie" != this.state || (this.state = "attack")
                }), v.PlaySound("Boss2Hit"), this.hp -= s, this.hp <= 0 && (Laya.timer.clearAll(this), v.PlaySound("Boss2SiWang"), this.playAnim("Die"), this.hp = 0, this.state = "dead", v.curPlayerControl.win()), this.XueJs.updateTiao(this.hp, this.allHp, s)
            }
        }
        attackDongZuo() {
            this.anim.speed = .3;
            var t = v.RandomInt(0, 3);
            0 == t ? (this.ToothDown.numChildren > 0 || this.ToothUp.numChildren > 0 ? this.playAnim("Atk_Mouth") : (this.playAnim("Atk_Za"), this.E18Fx.active = !0, Laya.timer.once(300 / this.anim.speed, this, function() {
                this.E18Fx.active = !1
            })), this.framNum = 800 / this.anim.speed) : 1 == t ? (this.playAnim("Atk_Za"), this.E18Fx.active = !0, Laya.timer.once(300 / this.anim.speed, this, function() {
                this.E18Fx.active = !1
            }), this.framNum = 800 / this.anim.speed) : 2 == t && (this.playAnim("Atk_SheJi"), this.framNum = 800 / this.anim.speed, this.E8Fx.active = !0, Laya.timer.once(320 / this.anim.speed, this, this.fireFaShe))
        }
        onUpdate() {
            if (!(Laya.timer.delta > 300) && 0 != Laya.timer.scale) switch (this.state) {
                case "watie":
                    break;
                case "attack":
                    if (1 == this.isAttack) {
                        if (Laya.timer.clear(this, this.huiFuIdle), this.isAttack = !1, this.attacking = !0, this.anim.speed = 1, this.attackDongZuo(), 1 == v.duoBiJiaoXue) return void Laya.timer.once(this.framNum / 3, this, function() {
                            null != n.gameUI && n.gameUI.duoBiNoCD(), this.stop()
                        });
                        Laya.timer.once(this.framNum / 2, this, function() {
                            v.PlaySound("Boss2GongJi"), v.curPlayerControl.hurt(10), this.attacking = !1
                        }), Laya.timer.once(this.framNum, this, function() {
                            this.playAnim("Idle"), this.anim.speed = 1
                        }), Laya.timer.once(2 * this.framNum, this, function() {
                            this.isAttack = !0
                        })
                    }
            }
        }
        fireFaShe() {
            var t = Laya.Sprite3D.instantiate(this.bullPre, v.curScene);
            t.transform.position = this.firePos.transform.position, t.transform.rotation = this.firePos.transform.rotation, t.addComponent(r).init(this.bullSpeed), this.firePos.active = !1, this.E8Fx.active = !1, Laya.timer.once(1e3, this, function() {
                this.firePos.active = !0
            })
        }
        shanBi() {
            0 == this.isFangYu && (Laya.timer.clearAll(this), this.attacking = !1, this.isFangYu = !0, this.anim.speed = 3, this.playAnim("ShanBi_Start"), this.state = "fangYu", this.isAttack = !0, Laya.timer.once(1200, this, function() {
                this.anim.speed = 1, this.playAnim("ShanBi_End")
            }), Laya.timer.once(2e3, this, function() {
                this.isFangYu = !1, this.playAnim("Idle")
            }), Laya.timer.once(4e3, this, function() {
                this.state = "attack"
            }))
        }
        fangYu() {}
        huiFuIdle() {
            this.playAnim("Idle")
        }
        stop() {
            Laya.timer.clearAll(this), this.attacking = !1, this.anim.speed = 0, this.state = "waiteJiaoXue"
        }
        huiFu() {
            this.anim.speed = 1
        }
        huiFuAttack() {
            this.anim.speed = 1, Laya.timer.once(this.framNum - this.framNum / 3, this, function() {
                this.playAnim("Idle"), this.anim.speed = 1
            }), Laya.timer.once(5 * this.framNum - this.framNum / 3, this, function() {
                this.isAttack = !0
            }), this.state = "attack"
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class y extends Laya.Script3D {
        constructor() {
            super(), this.anim, this.animName = "Idle", this.body, this.ShoulderLeft, this.ShoulderRight, this.HandLeft, this.HandRight, this.body001, this.ChestPartSui1, this.ChestPartSui2, this.ChestPart3, this.ChestPart5, this.hp = 100, this.allHp = 100, this.state = "watie", this.isAttack = !0, this.attacking = !1, this.attackNum = 0, this.framNum = 2e3, this.Xue, this.XueJs, this.isFangYu = !1, this.bullPre, this.firePosL, this.firePosR, this.bullSpeed = .5, this.E8Fx, this.E18Fx
        }
        onAwake() {
            this.anim = this.owner.getComponent(Laya.Animator), this.body = this.owner.getChildByName("TrooperRobotOuterParent"), this.ShoulderLeft = v.FindChildByNameHelper(this.body, "ShoulderLeft"), this.ShoulderRight = v.FindChildByNameHelper(this.body, "ShoulderRight"), this.HandLeft = v.FindChildByNameHelper(this.body, "HandLeft"), this.HandRight = v.FindChildByNameHelper(this.body, "HandRight"), this.body001 = v.FindChildByNameHelper(this.body, "body001"), this.ChestPartSui1 = v.FindChildByNameHelper(this.body, "ChestPartSui1"), this.ChestPartSui2 = v.FindChildByNameHelper(this.body, "ChestPartSui2"), this.ChestPart3 = this.ChestPartSui2.getChildByName("ChestPart3"), this.ChestPart5 = this.ChestPartSui2.getChildByName("ChestPart5"), this.ChestPartSui1.active = !1, this.ChestPartSui2.active = !1, this.bullPre = v.models.getChildByName("Boss4ZiDan"), this.firePosL = v.FindChildByNameHelper(this.body, "firePosL"), this.firePosR = v.FindChildByNameHelper(this.body, "firePosR"), this.E8Fx = this.body.getChildByName("E8"), this.E18Fx = this.body.getChildByName("E18"), this.E8Fx.active = !1, this.E18Fx.active = !1, this.Xue = this.owner.getChildByName("Xue"), this.XueJs = this.Xue.addComponent(l), this.hideGL(), this.initHp(), this.XueJs.updateTiao(this.hp, this.allHp, 0)
        }
        initHp() {
            this.hp = 50 + 10 * (o.GetUserData("showLv") - 1), this.hp > 999 && (this.hp = 999), this.allHp = this.hp
        }
        begin() {
            this.anim.play("ShengCheng"), this.state = "watie", Laya.timer.once(400, this, function() {
                v.PlaySound("DiRenZhuoLu");
                var t = Laya.Sprite3D.instantiate(v.models.getChildByName("E1"), v.curScene);
                t.transform.position = this.owner.transform.position, t.transform.rotation = this.owner.transform.rotation, t.addComponent(h), v.curLevelManager.begin()
            }), Laya.timer.once(800, this, function() {
                this.anim.play("Ready"), this.animName = "Ready", Laya.timer.once(800, this, function() {
                    this.anim.play("Idle"), this.animName = "Idle", null != n.gameUI && n.gameUI.showYouXiZhong(), Laya.timer.once(1e3, this, function() {
                        this.state = "attack"
                    })
                })
            })
        }
        playAnim(t) {
            this.anim.crossFade(t, .02), this.animName = t
        }
        hideGL() {
            this.ShoulderLeft.getChildAt(0).active = !1, this.ShoulderRight.getChildAt(0).active = !1, this.HandLeft.getChildAt(0).active = !1, this.HandRight.getChildAt(0).active = !1, this.body001.getChildAt(0).active = !1, this.ChestPart3.getChildAt(0).active = !1, this.ChestPart5.getChildAt(0).active = !1
        }
        showGL(t) {
            this.ShoulderLeft.getChildAt(0).active = "DEF-RigLArm1" == t, this.ShoulderRight.getChildAt(0).active = "DEF-RigRArm1" == t, this.HandLeft.getChildAt(0).active = "DEF-RigLArmPalm" == t, this.HandRight.getChildAt(0).active = "DEF-RigRArmPalm" == t, this.body001.getChildAt(0).active = "DEF-RigRibcage" == t, this.ChestPart3.getChildAt(0).active = "DEF-ChestPart3" == t, this.ChestPart5.getChildAt(0).active = "DEF-ChestPart5" == t
        }
        huJiaShouJi(t) {
            if (0 == this.isFangYu)
                if ("DEF-RigRibcage" == t.name) {
                    var i = !1;
                    for (let t = 0; t < this.ChestPartSui1.numChildren; t++) {
                        var e = null;
                        if (1 == (i = null == (o = this.ChestPartSui1.getChildAt(t)).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                            var a = o.transform.position.clone(),
                                s = o.transform.rotation.clone(),
                                n = o.transform.getWorldLossyScale().clone();
                            v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), e.Fei(), t--
                        }
                    }
                    1 == i && (this.body001.active = !1, this.ChestPartSui1.active = !0, this.ChestPartSui2.active = !0, t.active = !1)
                } else if ("DEF-RigLArm1" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.ShoulderLeft).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), this.ShoulderLeft.active = !0, e.Fei(), t.active = !1
                }
            } else if ("DEF-RigLArmPalm" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.HandLeft).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), this.HandLeft.active = !0, this.firePosL.active = !1, e.Fei(), t.active = !1
                }
            } else if ("DEF-RigRArm1" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.ShoulderRight).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), this.ShoulderRight.active = !0, e.Fei(), t.active = !1
                }
            } else if ("DEF-RigRArmPalm" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.HandRight).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), this.HandRight.active = !0, this.firePosR.active = !1, e.Fei(), t.active = !1
                }
            } else if ("DEF-ChestPart3" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.ChestPart3).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), e.Fei(), this.ChestPart3.active = !0, t.active = !1
                }
            } else if ("DEF-ChestPart5" == t.name) {
                var o;
                i = !1, e = null;
                if (1 == (i = null == (o = this.ChestPart5).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), e.Fei(), this.ChestPart5.active = !0, t.active = !1
                }
            }
        }
        hurt(t, i, e) {
            if ("dead" != this.state) {
                var a = i,
                    s = t;
                if (this.attacking = !1, this.anim.speed = 1, 0 != this.isFangYu) return void v.PlaySound("GeDang");
                Laya.timer.clearAll(this), this.isAttack = !1, this.E18Fx.active = !1, this.E8Fx.active = !1, a.transform.position.x, this.owner.transform.position.x, this.playAnim("Hit");
                var n = Laya.Sprite3D.instantiate(v.models.getChildByName("E2"), v.curScene);
                n.transform.position = e, n.addComponent(h), Laya.timer.once(500, this, this.huiFuIdle), Laya.timer.once(2e3, this, function() {
                    this.isAttack = !0, "fangYu" != this.state && "watie" != this.state || (this.state = "attack")
                }), this.hp -= s, this.hp <= 0 && (Laya.timer.clearAll(this), v.PlaySound("DiFangJiJiaSiWang"), this.playAnim("Die"), this.hp = 0, this.state = "dead", v.curPlayerControl.win()), this.XueJs.updateTiao(this.hp, this.allHp, s)
            }
        }
        attackDongZuo() {
            this.anim.speed = .3;
            var t = v.RandomInt(0, 3);
            if (0 == t) 0 == v.RandomInt(0, 2) ? this.playAnim("Atk_L") : this.playAnim("Atk_R");
            else if (1 == t) this.playAnim("Atk_Za"), this.E18Fx.active = !0, Laya.timer.once(200 / this.anim.speed, this, function() {
                this.E18Fx.active = !1
            });
            else if (2 == t) {
                0 == v.RandomInt(0, 2) ? 1 == this.firePosL.active ? (this.playAnim("Atk_LSheJi"), this.E8Fx.active = !0, Laya.timer.once(300 / this.anim.speed, this, this.fireFaSheL)) : 1 == this.firePosR.active ? (this.playAnim("Atk_RSheJi"), this.E8Fx.active = !0, Laya.timer.once(300 / this.anim.speed, this, this.fireFaSheR)) : (this.playAnim("Atk_Za"), this.E18Fx.active = !0, Laya.timer.once(200 / this.anim.speed, this, function() {
                    this.E18Fx.active = !1
                })) : 1 == this.firePosR.active ? (this.playAnim("Atk_RSheJi"), this.E8Fx.active = !0, Laya.timer.once(300 / this.anim.speed, this, this.fireFaSheR)) : 1 == this.firePosL.active ? (this.playAnim("Atk_LSheJi"), this.E8Fx.active = !0, Laya.timer.once(300 / this.anim.speed, this, this.fireFaSheL)) : (this.playAnim("Atk_Za"), this.E18Fx.active = !0, Laya.timer.once(200 / this.anim.speed, this, function() {
                    this.E18Fx.active = !1
                }))
            }
            this.framNum = 700 / this.anim.speed
        }
        onUpdate() {
            if (!(Laya.timer.delta > 300) && 0 != Laya.timer.scale) switch (this.state) {
                case "watie":
                    break;
                case "attack":
                    if (1 == this.isAttack) {
                        if (Laya.timer.clear(this, this.huiFuIdle), this.isAttack = !1, this.attacking = !0, this.anim.speed = 1, this.attackDongZuo(), 1 == v.duoBiJiaoXue) return void Laya.timer.once(this.framNum / 3, this, function() {
                            null != n.gameUI && n.gameUI.duoBiNoCD(), this.stop()
                        });
                        Laya.timer.once(this.framNum / 2, this, function() {
                            v.PlaySound("DiRenGongJi"), v.curPlayerControl.hurt(10), this.attacking = !1
                        }), Laya.timer.once(this.framNum, this, function() {
                            this.playAnim("Idle"), this.anim.speed = 1
                        }), Laya.timer.once(2 * this.framNum, this, function() {
                            this.isAttack = !0
                        })
                    }
            }
        }
        fireFaSheL() {
            var t = Laya.Sprite3D.instantiate(this.bullPre, v.curScene);
            t.transform.position = this.firePosL.transform.position, t.transform.rotation = this.firePosL.transform.rotation, t.addComponent(r).init(this.bullSpeed), this.E8Fx.active = !1
        }
        fireFaSheR() {
            var t = Laya.Sprite3D.instantiate(this.bullPre, v.curScene);
            t.transform.position = this.firePosR.transform.position, t.transform.rotation = this.firePosR.transform.rotation, t.addComponent(r).init(this.bullSpeed), this.E8Fx.active = !1
        }
        shanBi() {
            0 == this.isFangYu && (Laya.timer.clearAll(this), this.attacking = !1, this.isFangYu = !0, this.anim.speed = 1, this.playAnim("ShanBi"), this.state = "fangYu", this.isAttack = !0, Laya.timer.once(500, this, function() {
                this.isFangYu = !1, this.playAnim("Idle")
            }), Laya.timer.once(3e3, this, function() {
                this.state = "attack"
            }))
        }
        fangYu() {}
        huiFuIdle() {
            this.playAnim("Idle")
        }
        stop() {
            Laya.timer.clearAll(this), this.attacking = !1, this.anim.speed = 0, this.state = "waiteJiaoXue"
        }
        huiFu() {
            this.anim.speed = 1
        }
        huiFuAttack() {
            this.anim.speed = 1, Laya.timer.once(this.framNum - this.framNum / 3, this, function() {
                this.playAnim("Idle"), this.anim.speed = 1
            }), Laya.timer.once(5 * this.framNum - this.framNum / 3, this, function() {
                this.isAttack = !0
            }), this.state = "attack"
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class g extends Laya.Script3D {
        constructor() {
            super(), this.anim, this.animName = "Idle", this.body, this.HandLeft, this.HandRight, this.EyePartSui1, this.EyePartSui2, this.EyePart3, this.EyePart6, this.hp = 100, this.allHp = 100, this.state = "watie", this.isAttack = !0, this.attacking = !1, this.attackNum = 0, this.framNum = 2e3, this.Xue, this.XueJs, this.isFangYu = !1, this.bullPre, this.qiangKouPre, this.firePosL, this.firePosR, this.bullSpeed = .1, this.E8Fx, this.E18Fx
        }
        onAwake() {
            this.anim = this.owner.getComponent(Laya.Animator), this.body = this.owner.getChildByName("TankerRobot"), this.HandLeft = v.FindChildByNameHelper(this.body, "HandLeft"), this.HandRight = v.FindChildByNameHelper(this.body, "HandRight"), this.EyePartSui1 = v.FindChildByNameHelper(this.body, "EyePartSui1"), this.EyePartSui2 = v.FindChildByNameHelper(this.body, "EyePartSui2"), this.EyePart3 = this.EyePartSui2.getChildByName("EyePart3"), this.EyePart6 = v.FindChildByNameHelper(this.body, "EyePart6"), this.EyePartSui1.active = !1, this.EyePartSui2.active = !1, this.bullPre = v.models.getChildByName("Boss5ZiDan"), this.qiangKouPre = v.models.getChildByName("Boss5FaShe"), this.firePosL = v.FindChildByNameHelper(this.body, "firePosL"), this.firePosR = v.FindChildByNameHelper(this.body, "firePosR"), this.E8Fx = this.body.getChildByName("E8"), this.E18Fx = this.body.getChildByName("E18"), this.E8Fx.active = !1, this.E18Fx.active = !1, this.Xue = this.owner.getChildByName("Xue"), this.XueJs = this.Xue.addComponent(l), this.hideGL(), this.initHp(), this.XueJs.updateTiao(this.hp, this.allHp, 0)
        }
        initHp() {
            this.hp = 50 + 10 * (o.GetUserData("showLv") - 1), this.hp > 999 && (this.hp = 999), this.allHp = this.hp
        }
        begin() {
            this.anim.play("ShengCheng"), this.state = "watie", Laya.timer.once(250, this, function() {
                v.PlaySound("DiRenZhuoLu");
                var t = Laya.Sprite3D.instantiate(v.models.getChildByName("E1"), v.curScene);
                t.transform.position = this.owner.transform.position, t.transform.rotation = this.owner.transform.rotation, t.addComponent(h), v.curLevelManager.begin()
            }), Laya.timer.once(500, this, function() {
                this.anim.play("Ready"), this.animName = "Ready", Laya.timer.once(1e3, this, function() {
                    this.anim.play("Idle"), this.animName = "Idle", null != n.gameUI && n.gameUI.showYouXiZhong(), Laya.timer.once(1e3, this, function() {
                        this.state = "attack"
                    })
                })
            })
        }
        playAnim(t) {
            this.anim.crossFade(t, .02), this.animName = t
        }
        hideGL() {
            this.HandLeft.getChildAt(0).active = !1, this.HandRight.getChildAt(0).active = !1, this.EyePart3.getChildAt(0).active = !1, this.EyePart6.getChildAt(0).active = !1
        }
        showGL(t) {
            this.HandLeft.getChildAt(0).active = "DEF-RigLArmPalm" == t, this.HandRight.getChildAt(0).active = "DEF-RigRArmPalm" == t, this.EyePart6.getChildAt(0).active = "DEF-RigHead" == t, this.EyePart3.getChildAt(0).active = "DEF-EyePart3" == t
        }
        huJiaShouJi(t) {
            if ("DEF-RigHead" == t.name) {
                var i = !1;
                for (let t = 0; t < this.EyePartSui1.numChildren; t++) {
                    var e = null;
                    if (1 == (i = null == (o = this.EyePartSui1.getChildAt(t)).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                        var a = o.transform.position.clone(),
                            s = o.transform.rotation.clone(),
                            n = o.transform.getWorldLossyScale().clone();
                        v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), e.Fei(), t--
                    }
                }
                1 == i && (this.EyePart6.active = !1, this.EyePartSui1.active = !0, this.EyePartSui2.active = !0, t.active = !1)
            } else if ("DEF-RigRArmPalm" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.HandRight).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), this.HandRight.active = !0, this.firePosR.active = !1, e.Fei(), t.active = !1
                }
            } else if ("DEF-RigLArmPalm" == t.name) {
                i = !1, e = null;
                if (1 == (i = null == (o = this.HandLeft).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), this.HandLeft.active = !0, this.firePosL.active = !1, e.Fei(), t.active = !1
                }
            } else if ("DEF-EyePart3" == t.name) {
                var o;
                i = !1, e = null;
                if (1 == (i = null == (o = this.EyePart3).getComponent(u) ? (e = o.addComponent(u)).hurt() : (e = o.getComponent(u)).hurt())) {
                    a = o.transform.position.clone(), s = o.transform.rotation.clone(), n = o.transform.getWorldLossyScale().clone();
                    v.curScene.addChild(o), o.transform.position = a, o.transform.rotation = s, o.transform.setWorldLossyScale(n), e.Fei(), this.EyePart3.active = !0, t.active = !1
                }
            }
        }
        hurt(t, i, e) {
            if ("dead" != this.state) {
                var a = i,
                    s = t;
                if (this.attacking = !1, this.anim.speed = 1, 0 == this.isFangYu) {
                    Laya.timer.clearAll(this), this.isAttack = !1, this.E18Fx.active = !1, this.E8Fx.active = !1, a.transform.position.x, this.owner.transform.position.x, this.playAnim("Hit");
                    var n = Laya.Sprite3D.instantiate(v.models.getChildByName("E2"), v.curScene);
                    n.transform.position = e, n.addComponent(h), Laya.timer.once(300, this, this.huiFuIdle), Laya.timer.once(2e3, this, function() {
                        this.isAttack = !0, "fangYu" != this.state && "watie" != this.state || (this.state = "attack")
                    })
                } else v.PlaySound("GeDang"), this.playAnim("FangYu_Hit"), s = Math.floor(.3 * s);
                this.hp -= s, this.hp <= 0 && (Laya.timer.clearAll(this), v.PlaySound("DiFangJiJiaSiWang"), this.playAnim("Die"), this.hp = 0, this.state = "dead", v.curPlayerControl.win()), this.XueJs.updateTiao(this.hp, this.allHp, s)
            }
        }
        attackDongZuo() {
            this.anim.speed = .3;
            var t = v.RandomInt(0, 3);
            if (0 == t) 0 == v.RandomInt(0, 2) ? this.playAnim("Atk_L") : this.playAnim("Atk_R");
            else if (1 == t) this.playAnim("Atk_Za"), this.E18Fx.active = !0, Laya.timer.once(200 / this.anim.speed, this, function() {
                this.E18Fx.active = !1
            });
            else if (2 == t) {
                0 == v.RandomInt(0, 2) ? 1 == this.firePosL.active ? (this.playAnim("Atk_LSheJi"), this.E8Fx.active = !0, Laya.timer.once(200 / this.anim.speed, this, this.fireFaSheL)) : 1 == this.firePosR.active ? (this.playAnim("Atk_RSheJi"), this.E8Fx.active = !0, Laya.timer.once(200 / this.anim.speed, this, this.fireFaSheR)) : (this.playAnim("Atk_Za"), this.E18Fx.active = !0, Laya.timer.once(200 / this.anim.speed, this, function() {
                    this.E18Fx.active = !1
                })) : 1 == this.firePosR.active ? (this.playAnim("Atk_RSheJi"), this.E8Fx.active = !0, Laya.timer.once(200 / this.anim.speed, this, this.fireFaSheR)) : 1 == this.firePosL.active ? (this.playAnim("Atk_LSheJi"), this.E8Fx.active = !0, Laya.timer.once(200 / this.anim.speed, this, this.fireFaSheL)) : (this.playAnim("Atk_Za"), this.E18Fx.active = !0, Laya.timer.once(200 / this.anim.speed, this, function() {
                    this.E18Fx.active = !1
                }))
            }
            this.framNum = 800 / this.anim.speed
        }
        onUpdate() {
            if (!(Laya.timer.delta > 300) && 0 != Laya.timer.scale) switch (this.state) {
                case "watie":
                    break;
                case "attack":
                    if (1 == this.isAttack) {
                        if (Laya.timer.clear(this, this.huiFuIdle), this.isAttack = !1, this.attacking = !0, this.anim.speed = 1, this.attackDongZuo(), 1 == v.duoBiJiaoXue) return void Laya.timer.once(this.framNum / 3, this, function() {
                            null != n.gameUI && n.gameUI.duoBiNoCD(), this.stop()
                        });
                        Laya.timer.once(this.framNum / 2, this, function() {
                            v.PlaySound("DiRenGongJi"), v.curPlayerControl.hurt(10), this.attacking = !1
                        }), Laya.timer.once(this.framNum, this, function() {
                            this.playAnim("Idle"), this.anim.speed = 1
                        }), Laya.timer.once(2 * this.framNum, this, function() {
                            this.isAttack = !0
                        })
                    }
            }
        }
        fireFaSheL() {
            var t = Laya.Sprite3D.instantiate(this.qiangKouPre, v.curScene);
            t.transform.position = this.firePosL.transform.position, t.transform.rotation = this.firePosL.transform.rotation, t.addComponent(h);
            var i = Laya.Sprite3D.instantiate(this.bullPre, v.curScene);
            i.transform.position = this.firePosL.transform.position, i.transform.rotation = this.firePosL.transform.rotation, i.addComponent(r).init(this.bullSpeed), this.E8Fx.active = !1
        }
        fireFaSheR() {
            var t = Laya.Sprite3D.instantiate(this.qiangKouPre, v.curScene);
            t.transform.position = this.firePosR.transform.position, t.transform.rotation = this.firePosR.transform.rotation, t.addComponent(h);
            var i = Laya.Sprite3D.instantiate(this.bullPre, v.curScene);
            i.transform.position = this.firePosR.transform.position, i.transform.rotation = this.firePosR.transform.rotation, i.addComponent(r).init(this.bullSpeed), this.E8Fx.active = !1
        }
        shanBi() {}
        fangYu() {
            0 == this.isFangYu && (Laya.timer.clearAll(this), this.attacking = !1, this.isFangYu = !0, this.anim.speed = 1, this.playAnim("FangYu_Start"), this.state = "fangYu", this.isAttack = !0, Laya.timer.once(4e3, this, function() {
                this.playAnim("FangYu_End")
            }), Laya.timer.once(4200, this, function() {
                this.isFangYu = !1, this.playAnim("Idle")
            }), Laya.timer.once(6e3, this, function() {
                this.state = "attack"
            }))
        }
        huiFuIdle() {
            this.playAnim("Idle")
        }
        stop() {
            Laya.timer.clearAll(this), this.attacking = !1, this.anim.speed = 0, this.state = "waiteJiaoXue"
        }
        huiFu() {
            this.anim.speed = 1
        }
        huiFuAttack() {
            this.anim.speed = 1, Laya.timer.once(this.framNum - this.framNum / 3, this, function() {
                this.playAnim("Idle"), this.anim.speed = 1
            }), Laya.timer.once(5 * this.framNum - this.framNum / 3, this, function() {
                this.isAttack = !0
            }), this.state = "attack"
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class p extends Laya.Script3D {
        constructor() {
            super(), this.anim, this.target, this.WinPos, this.state = "watie", this.speed = .02, this.isWin = !1
        }
        onAwake() {
            this.anim = this.owner.getComponent(Laya.Animator), this.anim.play("Idle_" + v.RandomInt(1, 5)), this.target = this.owner.parent.getChildByName("target"), this.WinPos = this.owner.parent.getChildByName("WinPos")
        }
        Win() {
            this.target = this.WinPos, this.anim.play("Run"), this.isWin = !0, this.speed = .08, this.state = "move"
        }
        begin() {
            this.state = "move", this.anim.play("Run")
        }
        onUpdate() {
            if (!(Laya.timer.delta > 300) && 0 != Laya.timer.scale) switch (this.state) {
                case "watie":
                    break;
                case "move":
                    if (null != this.target) {
                        var t = new Laya.Vector3(0, 1, 0),
                            i = new Laya.Quaternion;
                        Laya.Quaternion.lookAt(this.target.transform.position, this.owner.transform.position, t, i), i.w = -i.w;
                        var e = new Laya.Quaternion;
                        Laya.Quaternion.slerp(this.owner.transform.rotation, i, .1, e), this.owner.transform.rotation = e;
                        var a = new Laya.Vector3(0, 0, 0);
                        this.owner.transform.getForward(a), Laya.Vector3.normalize(a, a), this.owner.transform.translate(new Laya.Vector3(-a.x * this.speed * Laya.timer.delta * .08, -a.y * this.speed * Laya.timer.delta * .08, -a.z * this.speed * Laya.timer.delta * .08), !1), Laya.Vector3.distance(this.target.transform.position, this.owner.transform.position) < .5 && (0 == this.isWin ? this.anim.play("DuoBi") : this.anim.play("TiaoWu_" + v.RandomInt(1, 4)), this.state = "rotaToTarget")
                    }
                    break;
                case "rotaToTarget":
                    if (null != this.target) {
                        e = new Laya.Quaternion;
                        Laya.Quaternion.slerp(this.owner.transform.rotation, this.target.transform.rotation, .1, e), this.owner.transform.rotation = e
                    }
            }
        }
        onDisable() {}
    }
    class f extends Laya.Script3D {
        constructor() {
            super(), this.speed = .5, this.damage = 1, this.targetPos = null, this.initPos = new Laya.Vector3
        }
        onAwake() {
            Laya.timer.once(5e3, this, function() {
                this.owner.destroy()
            }), this.initPos = new Laya.Vector3(this.owner.transform.position.x, 0, this.owner.transform.position.z)
        }
        init(t, i, e) {
            if (this.speed = e, this.damage = i, this.targetPos = t, null != this.targetPos) {
                var a = new Laya.Vector3(this.targetPos.x, this.targetPos.y, this.targetPos.z),
                    s = new Laya.Vector3(0, 1, 0),
                    n = new Laya.Quaternion;
                Laya.Quaternion.lookAt(a, this.owner.transform.position, s, n), n.w = -n.w, this.owner.transform.rotation = n
            }
        }
        onUpdate() {
            var t = new Laya.Vector3(0, 0, 0);
            this.owner.transform.getForward(t), Laya.Vector3.normalize(t, t), this.owner.transform.translate(new Laya.Vector3(-t.x * this.speed * Laya.timer.delta * .08, -t.y * this.speed * Laya.timer.delta * .08, -t.z * this.speed * Laya.timer.delta * .08), !1)
        }
        onTriggerEnter(t) {
            if (t && t.owner) {
                if (1 == t.owner.destroyed) return;
                if (-1 != t.owner.name.indexOf("ShangHai")) {
                    if (v.curBoss.hurt(this.damage, t.owner, t.owner.transform.position), v.PlaySound("DaoDanBaoZha"), "Rocket" == this.owner.name) {
                        var i = Laya.Sprite3D.instantiate(v.models.getChildByName("E6"), v.curScene);
                        i.transform.position = t.owner.transform.position, i.addComponent(h)
                    } else if ("E10" == this.owner.name) {
                        var e = Laya.Sprite3D.instantiate(v.models.getChildByName("E14"), v.curScene);
                        e.transform.position = t.owner.transform.position, e.addComponent(h)
                    }
                    this.owner.destroy()
                }
            }
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class C extends Laya.Script3D {
        constructor() {
            super(), this.curTouchId = 0, this.curTouchIdMove = 0, this.firstTouchMove = -1, this.lastMouseX = 0, this.lastMouseY = 0, this.rotaionSpeed = .05, this.isMouseDown = !1, this.playerState = "waite", this.speed = 2, this.normalSpeed = this.speed, this.speedMax = 5, this.dianTiSpeed = 2, this.maxX = 2.6, this.velocity = 6.7, this.t = .07, this.curPosX = 0, this.curPosY = 0, this.anim, this.initPos, this.initGravity, this.initFallSpeed, this.character, this.left = -.9, this.right = .9, this.rota, this.lastAngle = 180, this.rigi, this.body, this.rotaY = 0, this.animName = "Idle", this.shangcheng, this.PlayerRobotBody, this.PlayerRobotBody_Damaged, this.isAttack = !1, this.attacking = !1, this.isFangYu = !1, this.isDiDang = !1, this.duoTarget, this.mubiao = null, this.shangHaimubiao = null, this.hp = 100, this.allHp = 100, this.damage = 10, this.wuQiParent, this.daoDanParent, this.daoDanObj, this.daoDanAnim, this.daoDanKouAnim = null, this.daoDanName = "L", this.firePos, this.fireNum = 1, this.bullSpeed = .5, this.bullPre, this.fxPos, this.E3Fx, this.E12Fx
        }
        onAwake() {
            this.anim = this.owner.getComponent(Laya.Animator), this.anim.play("Main_Idle"), this.animName = "Main_Idle", this.body = this.owner.getChildByName("PlayerRobot"), this.PlayerRobotBody = this.body.getChildByName("PlayerRobot.Body"), this.PlayerRobotBody_Damaged = this.body.getChildByName("PlayerRobot.Body_Damaged"), 1 == v.isReStart ? this.PlayerRobotBody.active = !1 : this.PlayerRobotBody_Damaged.active = !1, this.wuQiParent = v.FindChildByNameHelper(this.body, "WuQi"), this.daoDanParent = v.FindChildByNameHelper(this.body, "DaoDan"), this.E12Fx = this.daoDanParent.getChildByName("L3").getChildByName("Wings").getChildByName("E12"), this.E12Fx.active = !1, this.E3Fx = this.body.getChildByName("E3"), this.E3Fx.active = !1, this.updateBody(-1), v.piFuType = o.GetUserData("piFuTypeNum"), v.chongWuType = o.GetUserData("chongWuNum"), this.updateDaoDan(v.chongWuType), this.updateWuQi(v.piFuType - 1), this.updatePower()
        }
        onEnable() {
            n.gameUI.bg.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), n.gameUI.quanTouBtn.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), n.gameUI.daoDan.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), n.gameUI.wuQi.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.mouseOut)
        }
        xiuFu() {
            var t = Laya.Sprite3D.instantiate(v.models.getChildByName("E17"), v.curScene);
            t.transform.position = new Laya.Vector3(this.owner.transform.position.x, this.owner.transform.position.y + 2.5, this.owner.transform.position.z), t.transform.rotation = this.owner.transform.rotation, t.addComponent(h), this.PlayerRobotBody.active = !0, this.PlayerRobotBody_Damaged.active = !1
        }
        updatePower() {
            this.damage = 5 * (o.GetUserData("powerLv") - 1) + 10, this.hp = 10 * (o.GetUserData("powerLv") - 1) + 100, this.allHp = this.hp
        }
        updateDaoDan(t) {
            for (let i = 0; i < this.daoDanParent.numChildren; i++) this.daoDanParent.getChildAt(i).active = i == t;
            this.daoDanName = "L" + t
        }
        updateWuQi(t) {
            for (let i = 0; i < this.wuQiParent.numChildren; i++) this.wuQiParent.getChildAt(i).active = i == t
        }
        showDaoDan() {
            null == this.daoDanObj && (this.daoDanObj = this.daoDanParent.getChildByName(this.daoDanName)), "L1" == this.daoDanName ? (this.firePos = this.daoDanObj.getChildByName("Rocket"), this.bullPre = v.models.getChildByName("Rocket"), this.fireNum = 1, this.bullSpeed = .5) : "L2" == this.daoDanName ? (this.fireNum = 3, this.firePos = this.daoDanObj.getChildByName("BulletSpawnPos"), this.bullPre = v.models.getChildByName("minigunBullet"), this.daoDanKouAnim = this.daoDanObj.getChildByName("MinigunBarrels").getComponent(Laya.Animator), this.bullSpeed = .3) : "L3" == this.daoDanName && (v.PlaySound("JiGuangPaoXuLi"), this.fireNum = 1, this.E12Fx.active = !0, this.firePos = this.daoDanObj.getChildByName("Projectile"), this.bullPre = v.models.getChildByName("E10"), this.daoDanKouAnim = this.daoDanObj.getChildByName("Wings").getComponent(Laya.Animator), this.bullSpeed = .05), this.daoDanAnim = this.daoDanObj.getComponent(Laya.Animator), this.daoDanObj.active = !0, this.daoDanAnim.play("MiaoZhun"), null != this.daoDanKouAnim && this.daoDanKouAnim.play("Ready")
        }
        updateBody(t) {
            for (let i = 0; i < this.PlayerRobotBody.numChildren; i++) this.PlayerRobotBody.getChildAt(i).active = i == t
        }
        updateShopYifu(t) {}
        playAnim(t) {
            this.animName != t && (this.anim.crossFade(t, .02), this.animName = t)
        }
        onUpdate() {
            if (!(Laya.timer.delta > 300) && 0 != Laya.timer.scale) switch (this.playerState) {
                case "waite":
                    break;
                case "move":
                    var t = new Laya.Quaternion;
                    Laya.Quaternion.lerp(this.owner.transform.rotation, new Laya.Quaternion(0, 0, 0, 1), .1, t), this.owner.transform.rotation = t;
                    var i = new Laya.Vector3;
                    if (Laya.Vector3.lerp(this.owner.transform.position, new Laya.Vector3(0, 0, 0), .1, i), this.owner.transform.position = i, 1 == v.isQuanTou || 1 == v.isDaoDan || 1 == v.isWuQi) {
                        if (this.curTouchIdMove == this.curTouchId) {
                            var e = Laya.stage.mouseX - this.lastMouseX,
                                a = Laya.stage.mouseY - this.lastMouseY;
                            this.curPosX = .08 * -e, this.curPosY = .08 * a, this.curPosX = this.Clamp(this.curPosX, this.left, this.right), this.curPosY = this.Clamp(this.curPosY, this.left, this.right), this.lastMouseX = Laya.stage.mouseX, this.lastMouseY = Laya.stage.mouseY, this.body.transform.localRotationEulerY += this.curPosX, this.body.transform.localRotationEulerX += this.curPosY, this.body.transform.localRotationEulerY >= 20 ? this.body.transform.localRotationEulerY = 20 : this.body.transform.localRotationEulerY <= -20 && (this.body.transform.localRotationEulerY = -20), this.body.transform.localRotationEulerX >= 20 ? this.body.transform.localRotationEulerX = 20 : this.body.transform.localRotationEulerX <= -20 && (this.body.transform.localRotationEulerX = -20), this.rayScreen()
                        }
                    } else if (0 == this.attacking) {
                        var s = new Laya.Vector3;
                        Laya.Vector3.lerp(this.body.transform.localRotationEuler, new Laya.Vector3(0, 0, 0), .05, s), this.body.transform.localRotationEuler = s;
                        i = new Laya.Vector3;
                        Laya.Vector3.lerp(this.body.transform.localPosition, new Laya.Vector3(0, 0, 0), .1, i), this.body.transform.localPosition = i
                    } else {
                        i = new Laya.Vector3;
                        Laya.Vector3.lerp(this.body.transform.localPosition, new Laya.Vector3(0, 0, 2), .2, i), this.body.transform.localPosition = i
                    }
                    break;
                case "duo":
                    if (null != this.duoTarget) {
                        t = new Laya.Quaternion;
                        Laya.Quaternion.lerp(this.owner.transform.rotation, this.duoTarget.transform.rotation, .1, t), this.owner.transform.rotation = t;
                        i = new Laya.Vector3;
                        Laya.Vector3.lerp(this.owner.transform.position, this.duoTarget.transform.position, .1, i), this.owner.transform.position = i
                    }
            }
        }
        rayScreen() {
            var t = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            v.mainCamera.viewportPointToRay(new Laya.Vector2(.5 * Laya.stage.width * Laya.stage.clientScaleX, .5 * Laya.stage.height * Laya.stage.clientScaleY), t);
            var i = [];
            if (v.curScene.physicsSimulation.rayCastAll(t, i), i.length > 0)
                for (let t = 0; t < i.length; t++) - 1 != i[t].collider.owner.name.indexOf("DEF") ? this.mubiao != i[t].collider.owner && (this.mubiao = i[t].collider.owner, v.curBoss.showGL(this.mubiao.name)) : -1 != i[t].collider.owner.name.indexOf("ShangHai") && (this.fxPos = i[t].point, this.shangHaimubiao = i[t].collider.owner);
            else null != this.mubiao && (v.curBoss.hideGL(), this.mubiao = null), null != this.shangHaimubiao && (this.shangHaimubiao = null)
        }
        onLateUpdate() {}
        fireFaShe() {
            "L1" == this.daoDanName ? v.PlaySound("DaoDanFaShe") : "L2" == this.daoDanName ? v.PlaySound("JiaTeLinSheJi") : "L3" == this.daoDanName && v.PlaySound("JiGuangPaoFaShe"), this.attacking = !0;
            var t = Laya.Sprite3D.instantiate(this.bullPre, v.curScene);
            t.transform.position = this.firePos.transform.position, t.transform.rotation = this.firePos.transform.rotation, null != this.shangHaimubiao ? t.addComponent(f).init(this.shangHaimubiao.transform.position, this.damage, this.bullSpeed) : t.addComponent(f).init(null, this.damage, this.bullSpeed), this.fireNum -= 1, this.fireNum > 0 ? Laya.timer.once(100, this, this.fireFaShe) : (this.shangHaimubiao = null, this.isAttack = !1)
        }
        taiShou() {
            1 == this.isAttack && (v.RandomInt(0, 101) > 80 && v.curBoss.shanBi(), 1 == v.isQuanTou && (this.playAnim("Atk_R_End"), null != this.mubiao && (v.curBoss.hideGL(), v.curBoss.huJiaShouJi(this.mubiao), this.mubiao = null), null != this.shangHaimubiao ? (v.PlaySound("QuanTouJiDa"), v.curBoss.hurt(this.damage, this.shangHaimubiao, this.fxPos), this.shangHaimubiao = null) : v.PlaySound("GongJiLuoKong"), this.isAttack = !1, this.attacking = !0, Laya.timer.once(1e3, this, function() {
                this.attacking = !1, this.playAnim("Idle")
            })), 1 == v.isDaoDan && (this.playAnim("Fire_End"), null != this.daoDanKouAnim && this.daoDanKouAnim.play("FaShe"), Laya.timer.once(300, this, function() {
                this.daoDanAnim.play("FaShe")
            }), this.E12Fx.active = !1, this.firePos.active = !1, null != this.mubiao && (v.curBoss.hideGL(), v.curBoss.huJiaShouJi(this.mubiao), this.mubiao = null), null != this.shangHaimubiao ? this.fireFaShe() : (this.fireFaShe(), this.isAttack = !1, this.attacking = !1), Laya.timer.once(1e3, this, function() {
                this.attacking = !1, this.daoDanObj.active = !1, this.firePos.active = !0, this.playAnim("Idle")
            })), 1 == v.isWuQi && (this.playAnim("Atk_Kan_End"), v.PlaySound("DaoKan"), null != this.mubiao && (v.curBoss.hideGL(), v.curBoss.huJiaShouJi(this.mubiao), this.mubiao = null), null != this.shangHaimubiao && (v.curBoss.hurt(this.damage, this.shangHaimubiao, this.fxPos), this.shangHaimubiao = null), this.isAttack = !1, this.attacking = !0, Laya.timer.once(1e3, this, function() {
                this.attacking = !1, this.playAnim("Idle")
            })));
            null != n.gameUI && n.gameUI.btnPosHuiFu()
        }
        attack() {
            0 == this.isAttack && "move" == this.playerState && (this.isAttack = !0, null != this.daoDanObj && (this.daoDanObj.active = !1), Laya.timer.clearAll(this), 1 == v.isQuanTou && this.playAnim("Atk_R_Start"), 1 == v.isDaoDan && (this.playAnim("Fire_Start"), this.showDaoDan()), 1 == v.isWuQi && this.playAnim("Atk_Kan_Start"), v.RandomInt(0, 101) > 80 && v.curBoss.fangYu())
        }
        isFangYuFun() {
            return this.isFangYu
        }
        zuoDuo() {
            return 0 == this.isAttack && 0 == this.isFangYu && (this.isFangYu = !0, this.playAnim("ShanBi_L"), this.duoTarget = v.curScene.getChildByName("zuoDuo"), this.playerState = "duo", Laya.timer.once(800, this, this.fangYuHuiFuMove), !0)
        }
        youDuo() {
            return 0 == this.isAttack && 0 == this.isFangYu && (this.isFangYu = !0, this.playAnim("ShanBi_R"), this.duoTarget = v.curScene.getChildByName("youDuo"), this.playerState = "duo", Laya.timer.once(800, this, this.fangYuHuiFuMove), !0)
        }
        fangYu() {
            return 0 == this.isAttack && 0 == this.isFangYu && (this.isFangYu = !0, this.isDiDang = !0, this.playAnim("FangYu_Loop"), Laya.timer.once(1500, this, this.fangYuHuiFuMove), !0)
        }
        fangYuHuiFuMove() {
            this.isFangYu = !1, this.isDiDang = !1, this.playAnim("Idle"), this.playerState = "move", 1 == v.quanTouJiaoXue && (null != n.gameUI && n.gameUI.quanTouNoCD(), v.curBoss.stop())
        }
        mouseDown(t) {
            if (this.curTouchIdMove = t.touchId, this.curTouchId = t.touchId, 0 == this.isMouseDown) {
                if ("waite" == this.playerState && (this.playerState = "showCameraInitWaite", null != n.gameUI && n.gameUI.unlockpiFuIndexList.length > 0)) {
                    n.pushUI = 1;
                    var i = v.RandomInt(0, n.gameUI.unlockpiFuIndexList.length);
                    return void n.ShowUIPanel("Push", !1, n.gameUI.unlockpiFuIndexList[i])
                }
                if ("showCameraInitWaite" == this.playerState && 0 == n.pushUI && (this.playerState = "showCameraInit"), "showCameraInit" == this.playerState) return this.playerState = "waitemove", null != n.gameUI && n.gameUI.beginHide(), v.cameraControl.begin(), Laya.timer.once(500, this, function() {
                    this.playAnim("Hand_Ready_Start")
                }), Laya.timer.once(1e3, this, function() {
                    this.playAnim("Hand_Read_End"), v.curBoss.owner.active = !0, v.curBoss.begin()
                }), Laya.timer.once(1500, this, function() {
                    this.E3Fx.active = !0
                }), void Laya.timer.once(2e3, this, function() {
                    this.E3Fx.active = !1, this.playerState = "move", this.PlayerRobotBody.active = !1, this.playAnim("Idle")
                });
                "move" == this.playerState && (Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.Move), this.lastMouseX = Laya.stage.mouseX, this.lastMouseY = Laya.stage.mouseY, this.curPosX = 0, this.curPosY = 0, this.isMouseDown = !0, this.firstTouchMove = t.touchId, Laya.timer.clear(this, this.huiFuIdle))
            }
        }
        Move(t) {
            if ("move" == this.playerState) {
                if (t.touchId != this.curTouchId) return void(this.curTouchIdMove = t.touchId);
                this.curTouchIdMove = t.touchId, null != n.gameUI && n.gameUI.updateBtnPos()
            }
        }
        mouseUp(t) {
            t.touchId == this.curTouchId ? -1 != this.firstTouchMove ? (this.curTouchIdMove = this.firstTouchMove, this.curTouchId = this.firstTouchMove, t.touchId == this.firstTouchMove && (Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.Move), this.taiShou(), this.isMouseDown = !1, this.curTouchIdMove = 0, this.curPosY = 0, this.curPosX = 0)) : (Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.Move), this.taiShou(), this.isMouseDown = !1, this.curTouchIdMove = 0, this.curPosY = 0, this.curPosX = 0) : this.firstTouchMove = -1
        }
        mouseOut(t) {
            t.touchId == this.curTouchId ? -1 != this.firstTouchMove ? (this.curTouchIdMove = this.firstTouchMove, this.curTouchId = this.firstTouchMove, t.touchId == this.firstTouchMove && (Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.Move), this.taiShou(), this.isMouseDown = !1, this.curTouchIdMove = 0, this.curPosY = 0, this.curPosX = 0)) : (Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.Move), this.taiShou(), this.isMouseDown = !1, this.curTouchIdMove = 0, this.curPosY = 0, this.curPosX = 0) : this.firstTouchMove = -1
        }
        lose() {
            "lose" != this.playerState && (this.playerState = "lose", this.playAnim("Fail"), Laya.timer.once(2e3, this, function() {
                n.ShowUIPanel("Fail")
            }))
        }
        win() {
            "win" != this.playerState && (this.playerState = "win", null != n.gameUI && n.gameUI.hideAllUI(), v.curLevelManager.win(), Laya.timer.once(1500, this, function() {
                this.playAnim("Win")
            }), Laya.timer.once(5e3, this, function() {
                n.ShowUIPanel("Box")
            }))
        }
        huiFuIdle() {
            this.playAnim("Idle")
        }
        hurtDaDuan() {
            this.isAttack = !1, this.attacking = !1, this.mubiao = null, this.shangHaimubiao = null, null != this.daoDanAnim && this.daoDanAnim.play("FaShe"), null != this.daoDanKouAnim && this.daoDanKouAnim.play("Idle"), null != n.gameUI && n.gameUI.btnPosHuiFu()
        }
        hurt(t) {
            return "lose" != this.playerState && (0 == this.isFangYu ? (this.hurtDaDuan(), this.playAnim("Hit"), null != n.gameUI && n.gameUI.hitTuShow(), v.cameraControl.shake(), Laya.timer.once(1e3, this, this.huiFuIdle), this.hp -= t, v.PlaySound("PlayerHit"), this.hp <= 0 && (Laya.timer.clearAll(this), this.hp = 0, this.lose()), !1) : 1 == this.isDiDang && (v.PlaySound("GeDang"), this.playAnim("FangYu_Hit"), !0))
        }
        onTriggerStay(t) {
            1 != t.owner.destroyed && t.owner.name.indexOf("jieSuoTrigger")
        }
        onTriggerEnter(t) {
            1 != t.owner.destroyed && t.owner.name.indexOf("Trampoline")
        }
        onTriggerExit(t) {
            1 != t.owner.destroyed && t.owner.name.indexOf("zaBingTrigger")
        }
        getHpBi() {
            var t = this.hp / this.allHp;
            return t <= 0 && (t = 0), t
        }
        Clamp(t, i, e) {
            return t < i && (t = i), t > e && (t = e), t
        }
        onDisable() {
            null != n.gameUI && (n.gameUI.bg.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown), n.gameUI.quanTouBtn.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown), n.gameUI.daoDan.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown), n.gameUI.wuQi.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown)), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.mouseOut), Laya.timer.clearAll(this)
        }
    }
    class L extends Laya.Script3D {
        constructor() {
            super()
        }
        onEnable() {}
        onDisable() {
            Laya.timer.clearAll(this)
        }
        onUpdate() {}
        CreatePlayer() {
            v.beiShu = 0, v.currentPiFuType = -1, v.isQuanTou = !1, v.isDaoDan = !1, v.isWuQi = !1, o.GetUserData("showLv") <= 1 ? (v.duoBiJiaoXue = !0, v.quanTouJiaoXue = !0, v.fangYuJiaoXue = !1) : (v.duoBiJiaoXue = !1, v.quanTouJiaoXue = !1, 2 == o.GetUserData("showLv") ? v.fangYuJiaoXue = !0 : v.fangYuJiaoXue = !1), v.curLevelManager.initLv();
            var t = v.curScene.getChildByName("Player");
            switch (v.curPlayerControl = t.addComponent(C), v.guanKaLv) {
                case 1:
                    v.curBoss = v.curScene.getChildByName("Boss1").addComponent(d);
                    break;
                case 2:
                    v.curBoss = v.curScene.getChildByName("Boss2").addComponent(m);
                    break;
                case 3:
                    v.curBoss = v.curScene.getChildByName("Boss3").addComponent(c);
                    break;
                case 4:
                    v.curBoss = v.curScene.getChildByName("Boss4").addComponent(y);
                    break;
                case 5:
                    v.curBoss = v.curScene.getChildByName("Boss5").addComponent(g)
            }
            v.curBoss.owner.active = !1
        }
        initLv() {
            var t = v.curScene.getChildByName("BossNpc");
            if (null != t)
                for (let i = 0; i < t.numChildren; i++) {
                    t.getChildAt(i).getChildAt(0).addComponent(p)
                }
            var i = v.curScene.getChildByName("PlayerNpc");
            if (null != i)
                for (let t = 0; t < i.numChildren; t++) {
                    i.getChildAt(t).getChildAt(0).addComponent(p)
                }
        }
        begin() {
            var t = v.curScene.getChildByName("BossNpc");
            if (null != t)
                for (let i = 0; i < t.numChildren; i++) {
                    t.getChildAt(i).getChildAt(0).getComponent(p).begin()
                }
            var i = v.curScene.getChildByName("PlayerNpc");
            if (null != i)
                for (let t = 0; t < i.numChildren; t++) {
                    i.getChildAt(t).getChildAt(0).getComponent(p).begin()
                }
        }
        win() {
            var t = v.curScene.getChildByName("PlayerNpc");
            if (null != t)
                for (let i = 0; i < t.numChildren; i++) {
                    t.getChildAt(i).getChildAt(0).getComponent(p).Win()
                }
        }
    }
    class S extends Laya.Script3D {
        constructor() {
            super(), this.cameraState = "waiteInit", this.offect = new Laya.Vector3, this.anim, this.speed = .05, this.initPos, this.MainCamera, this.MainCameraZ = 0, this.MainCameraY = 0, this.Camera, this.CameraBody, this.nextTarget = null, this.CameraRoot
        }
        onAwake() {
            this.CameraBody = this.owner.getChildByName("CameraBody"), this.Camera = this.CameraBody.getChildByName("Camera"), this.anim = this.Camera.getComponent(Laya.Animator), this.anim.play("CameraIdle"), this.MainCamera = this.Camera.getChildByName("Main Camera")
        }
        begin() {
            this.cameraState = "move", this.anim.play("CameraBegin")
        }
        shake() {
            this.anim.crossFade("CameraShake", .02)
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
        onLateUpdate() {
            switch (this.cameraState) {
                case "waiteInit":
                    break;
                case "move":
                    null != v.curPlayerControl && (this.owner.transform.rotation = v.curPlayerControl.owner.transform.rotation, this.owner.transform.position = v.curPlayerControl.owner.transform.position, this.CameraBody.transform.localRotationEulerY = v.curPlayerControl.body.transform.localRotationEulerY, this.CameraBody.transform.localRotationEulerX = v.curPlayerControl.body.transform.localRotationEulerX, this.CameraBody.transform.localPosition = v.curPlayerControl.body.transform.localPosition)
            }
        }
    }
    class v {
        static PlaySound(t, i = 1) {
            if (0 != o.GetUserData("yinxiao")) {
                var e = "res/audio/" + t;
                return Laya.SoundManager.playSound(e + ".mp3", i, null)
            }
        }
        static PlaySoundUpdate(t) {
            if (0 != o.GetUserData("yinxiao") && 0 == v.isSound) {
                v.isSound = !0;
                var i = "res/audio/" + t;
                Laya.SoundManager.playSound(i + ".mp3", 1, Laya.Handler.create(this, function() {
                    v.isSound = !1
                }))
            }
        }
        static StopSound(t) {
            var i = "res/audio/" + t;
            Laya.SoundManager.stopSound(i + ".mp3")
        }
        static PlayMusic(t, i = 0) {
            if (v.preMusicName != t && 0 != o.GetUserData("beijing")) {
                v.preMusicName = t, v.bjMusic && (v.bjMusic.stop(), v.bjMusic = null);
                var e, a = "res/audio/" + t;
                return e = Laya.SoundManager.playMusic(a + ".mp3", i), v.bjMusic = e, e
            }
        }
        static StopMusic() {
            v.bjMusic && (v.bjMusic.stop(), v.bjMusic = null), v.preMusicName = ""
        }
        static SetMusicVolume(t) {
            v.bjMusic && (v.bjMusic.volume = t)
        }
        static PlayVibrate() {
            window.wx ? wx.vibrateShort() : window.swan ? swan.vibrateShort() : window.navigator && window.navigator.vibrate && window.navigator.vibrate(20)
        }
        static RandomInt(t, i) {
            return Math.floor(Math.random() * (i - t) + t)
        }
        static RandomFloat(t, i) {
            return Math.random() * (i - t) + t
        }
        static toTwoTimeFormat(t) {
            var i = Math.floor(t % 3600 / 60),
                e = Math.floor(t % 3600 % 60);
            return i < 10 && (i = "0" + i), e < 10 && (e = "0" + e), i + ":" + e
        }
        static TotimeFormat(t) {
            var i = Math.floor(t / 3600),
                e = Math.floor(t % 3600 / 60),
                a = Math.floor(t % 3600 % 60);
            return i < 10 && (i = "0" + i), e < 10 && (e = "0" + e), a < 10 && (a = "0" + a), i + ":" + e + ":" + a
        }
        static getWeekOfYear() {
            var t = new Date,
                i = new Date(t.getFullYear(), 0, 1),
                e = i.getDay(),
                a = 1;
            0 != e && (a = 7 - e + 1), i = new Date(t.getFullYear(), 0, 1 + a);
            var s = Math.ceil((t.valueOf() - i.valueOf()) / 864e5);
            return Math.ceil(s / 7) + 1
        }
        static FindChild(t, i) {
            for (var e = [], a = 0; a < t.length; a++) {
                var s = t[a];
                if (s.name == i) return s;
                s.numChildren && (e = e.concat(s._children))
            }
            return e.length ? v.FindChild(e, i) : null
        }
        static FindChildByNameHelper(t, i) {
            if (t.name == i) return t;
            var e = t.numChildren,
                a = null;
            for (let s = 0; s < e && !(a = v.FindChildByNameHelper(t.getChildAt(s), i)); ++s);
            return a
        }
        static GetCirclePoint(t) {
            var i = v.RandomFloat(0, 2 * Math.PI),
                e = 2 * Math.cos(i),
                a = 2 * Math.sin(i),
                s = new Laya.Vector3(e, 0, a);
            return Laya.Vector3.add(new Laya.Vector3(t.x, t.y, t.z), s, s), s
        }
        static AngleBetweenVector(t, i) {
            var e = Laya.Vector3.dot(t, i) / (Laya.Vector3.scalarLength(t) * Laya.Vector3.scalarLength(i));
            return 180 * Math.acos(e) / Math.PI
        }
        static NFormatter(t) {
            const i = [{
                value: 1,
                symbol: ""
            }, {
                value: 1e3,
                symbol: "k"
            }, {
                value: 1e6,
                symbol: "m"
            }, {
                value: 1e9,
                symbol: "g"
            }, {
                value: 1e12,
                symbol: "t"
            }, {
                value: 1e15,
                symbol: "p"
            }, {
                value: 1e18,
                symbol: "e"
            }];
            let e;
            for (e = i.length - 1; e > 0 && !(t >= i[e].value); e--);
            return (t / i[e].value).toFixed(0).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + i[e].symbol
        }
        static ShowMoney3D(t, i) {
            for (var e = v.NFormatter(t).split(""), a = .16 * (e.length - 1) * .5, s = 1; s <= 5; s++)
                if (s <= e.length) {
                    i.getChildAt(s - 1).active = !0, i.getChildAt(s - 1).transform.localPositionX = .16 * -(s - 1) + a, i.getChildAt(s - 1).transform.localPositionZ = -.3;
                    for (var n = 0; n < i.getChildAt(s - 1).numChildren; n++) e[s - 1] == i.getChildAt(s - 1).getChildAt(n).name ? i.getChildAt(s - 1).getChildAt(n).active = !0 : i.getChildAt(s - 1).getChildAt(n).active = !1
                } else i.getChildAt(s - 1).active = !1
        }
        static updateShuZi3D(t, i, e, a) {
            var s = t.toString().split(""),
                n = s.length;
            1 == a && (n += 1);
            for (var o = -(n - 1) * e * .5, h = 0; h < i.numChildren; h++)
                if (h <= n) {
                    i.getChildAt(h).active = !0, i.getChildAt(h).transform.localPositionX = h * e + o;
                    for (var r = 0; r < i.getChildAt(h).numChildren; r++) 1 == a ? s[h - 1] == i.getChildAt(h).getChildAt(r).name ? i.getChildAt(h).getChildAt(r).active = !0 : i.getChildAt(h).getChildAt(r).active = !1 : s[h] == i.getChildAt(h).getChildAt(r).name ? i.getChildAt(h).getChildAt(r).active = !0 : i.getChildAt(h).getChildAt(r).active = !1
                } else i.getChildAt(h).active = !1
        }
        static GetDirForce(t, i, e) {
            var a = t,
                s = i,
                n = new Laya.Vector3((s.x - a.x) / 3, (s.y - a.y) / 3 + 2.1, (s.z - a.z) / 3),
                o = new Laya.Vector3;
            return Laya.Vector3.scale(n, e, o), o
        }
        static loadScene(t, i) {
            null != v.curScene && (v.curScene.destroy(), v.curScene = null), Laya.loader.create(t, Laya.Handler.create(this, function() {
                if (v.curScene = Laya.loader.getRes(t), v.curScene) {
                    if (Laya.stage.addChild(v.curScene), v.curScene.zOrder = -1, v.mainCamera = v.curScene.getChildByName("Camera").getChildByName("CameraBody").getChildByName("Camera").getChildByName("Main Camera"), v.curLevelManager = v.curScene.addComponent(L), v.cameraTrans = v.curScene.getChildByName("Camera"), v.cameraFocus = v.curScene.getChildByName("Camera").getChildByName("CameraBody"), v.cameraControl = v.curScene.getChildByName("Camera").addComponent(S), SdkUtil.GetConfig && 0 == SdkUtil.GetConfig("openlight")) {
                        var e = v.cameraFocus.getChildByName("Camera").getChildByName("Directional Light");
                        e.shadowMode = Laya.ShadowMode.Hard, e.shadowDistance = 30, e.shadowResolution = 2048
                    }
                    i && i()
                } else v.loadScene(t, i)
            }))
        }
    }
    v.curScene = null, v.curLevelManager = null, v.curPlayerControl = null, v.models = null, v.mainCamera = null, v.cameraFocus = null, v.cameraTrans = null, v.cameraControl = null, v.Config = {}, v.guanKaLv = 1, v.piFuType = 1, v.currentPiFuType = -1, v.chongWuType = 1, v.currentChongWuType = -1, v.beiShu = 0, v.curBoss = null, v.isSound = !1, v.isQuanTou = !1, v.isDaoDan = !1, v.isWuQi = !1, v.duoBiJiaoXue = !0, v.quanTouJiaoXue = !0, v.fangYuJiaoXue = !0, v.isReStart = !1;
    class w extends Laya.Scene {
        constructor() {
            super(), this.xiangZiNum = 0, this.jinBiList = new Array, this.xiangZiRandom = 3, this.xiangZiAllNum = 0
        }
        onEnable() {
            window.SdkUtil.ShowBanner && window.SdkUtil.ShowBanner(), null != this.ADPanel && SdkUtil.ShowNeiZhiAD && SdkUtil.ShowNeiZhiAD(this.ADPanel, 3), Laya.SoundManager.stopAllSound();
            for (let i = 1; i <= 9; i++) {
                var t = 30 * i;
                this.jinBiList.push(t)
            }
            for (let t = 1; t <= 9; t++) {
                var i = v.RandomInt(0, this.jinBiList.length);
                this["num" + t].text = this.jinBiList[i], this.jinBiList.splice(i, 1), this["qian" + t].visible = !1
            }
            this.fangQi.visible = !1, this.zaiLai.visible = !1, this.xiangZi1.on(Laya.Event.CLICK, this, function() {
                this.xiangZiNum += 1, this.xiangZiNum > this.xiangZiRandom ? window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("宝箱页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (this.xiangZi1.visible = !1, this.qian1.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num1.text), n.ShowGameTipUI("领取成功", 300), SdkUtil.TDEvent("宝箱页面视频完成"))
                }.bind(this))) : (this.xiangZiAllNum += 1, this.xiangZi1.visible = !1, this.qian1.visible = !0, o.AddProp(1, 1 * this.num1.text), n.ShowGameTipUI("领取成功", 300))
            }), this.xiangZi2.on(Laya.Event.CLICK, this, function() {
                this.xiangZiNum += 1, v.PlaySound("Btn"), this.xiangZiNum > this.xiangZiRandom ? window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("宝箱页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (this.xiangZi2.visible = !1, this.qian2.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num2.text), n.ShowGameTipUI("领取成功", 300), SdkUtil.TDEvent("宝箱页面视频完成"))
                }.bind(this))) : (this.xiangZi2.visible = !1, this.qian2.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num2.text), n.ShowGameTipUI("领取成功", 300))
            }), this.xiangZi3.on(Laya.Event.CLICK, this, function() {
                this.xiangZiNum += 1, v.PlaySound("Btn"), this.xiangZiNum > this.xiangZiRandom ? window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("宝箱页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (this.xiangZi3.visible = !1, this.qian3.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num3.text), n.ShowGameTipUI("领取成功", 300), SdkUtil.TDEvent("宝箱页面视频完成"))
                }.bind(this))) : (this.xiangZi3.visible = !1, this.qian3.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num3.text), n.ShowGameTipUI("领取成功", 300))
            }), this.xiangZi4.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), this.xiangZiNum += 1, this.xiangZiNum > this.xiangZiRandom ? window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("宝箱页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (this.xiangZi4.visible = !1, this.qian4.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num4.text), n.ShowGameTipUI("领取成功", 300), SdkUtil.TDEvent("宝箱页面视频完成"))
                }.bind(this))) : (this.xiangZi4.visible = !1, this.qian4.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num4.text), n.ShowGameTipUI("领取成功", 300))
            }), this.xiangZi5.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), this.xiangZiNum += 1, this.xiangZiNum > this.xiangZiRandom ? window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("宝箱页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (this.xiangZi5.visible = !1, this.qian5.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num5.text), n.ShowGameTipUI("领取成功", 300), SdkUtil.TDEvent("宝箱页面视频完成"))
                }.bind(this))) : (this.xiangZi5.visible = !1, this.qian5.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num5.text), n.ShowGameTipUI("领取成功", 300))
            }), this.xiangZi6.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), this.xiangZiNum += 1, this.xiangZiNum > this.xiangZiRandom ? window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("宝箱页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (this.xiangZi6.visible = !1, this.qian6.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num6.text), n.ShowGameTipUI("领取成功", 300), SdkUtil.TDEvent("宝箱页面视频完成"))
                }.bind(this))) : (this.xiangZi6.visible = !1, this.qian6.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num6.text), n.ShowGameTipUI("领取成功", 300))
            }), this.xiangZi7.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), this.xiangZiNum += 1, this.xiangZiNum > this.xiangZiRandom ? window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("宝箱页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (this.xiangZi7.visible = !1, this.qian7.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num7.text), n.ShowGameTipUI("领取成功", 300), SdkUtil.TDEvent("宝箱页面视频完成"))
                }.bind(this))) : (this.xiangZi7.visible = !1, this.qian7.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num7.text), n.ShowGameTipUI("领取成功", 300))
            }), this.xiangZi8.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), this.xiangZiNum += 1, this.xiangZiNum > this.xiangZiRandom ? window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("宝箱页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (this.xiangZi8.visible = !1, this.qian8.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num8.text), n.ShowGameTipUI("领取成功", 300), SdkUtil.TDEvent("宝箱页面视频完成"))
                }.bind(this))) : (this.xiangZi8.visible = !1, this.qian8.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num8.text), n.ShowGameTipUI("领取成功", 300))
            }), this.xiangZi9.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), this.xiangZiNum += 1, this.xiangZiNum > this.xiangZiRandom ? window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("宝箱页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (this.xiangZi9.visible = !1, this.qian9.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num9.text), n.ShowGameTipUI("领取成功", 300), SdkUtil.TDEvent("宝箱页面视频完成"))
                }.bind(this))) : (this.xiangZi9.visible = !1, this.qian9.visible = !0, this.xiangZiAllNum += 1, o.AddProp(1, 1 * this.num9.text), n.ShowGameTipUI("领取成功", 300))
            }), this.zaiLai.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("宝箱页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (this.xiangZiNum = 0, this.xiangZiRandom = 3, this.fangQi.visible = !1, this.zaiLai.visible = !1, n.ShowGameTipUI("领取钥匙成功", 300), SdkUtil.TDEvent("宝箱页面视频完成"))
                }.bind(this)))
            }), this.fangQi.on(Laya.Event.CLICK, this, function() {
                this.destroy(), n.ShowUIPanel("Win")
            }), this.qian.text = o.GetUserData("Gold"), Laya.timer.loop(10, this, function() {
                this.qian.text = o.GetUserData("Gold")
            });
            isAfterTime() && setTimeout(()=>ShowInter(),1500);
            Laya.timer.loop(10, this, function() {
                this.updateUI();
            });
        }
        updateUI() {
            if (this.xiangZiNum >= this.xiangZiRandom) {
                for (let t = 1; t <= this.allBtn.numChildren; t++) this["ad" + t].alpha = 1;
                this.fangQi.visible = !0, this.zaiLai.visible = !0
            } else
                for (let t = 1; t <= this.allBtn.numChildren; t++) this["ad" + t].alpha = 0;
            this.xiangZiAllNum >= 7 && (this.fangQi.visible = !0, this.zaiLai.visible = !1)
        }
        onDisable() {
            Laya.timer.clearAll(this), window.SdkUtil.CloseBanner && window.SdkUtil.CloseBanner();
            !isAfterTime() && ShowInter();
        }
    }
    class D extends Laya.Scene {
        constructor() {
            super()
        }
        onEnable() {
            this.fangQi.on(Laya.Event.CLICK, this, function(t) {
                v.PlaySound("Btn"), this.destroy()
            }), this.lingQu.on(Laya.Event.CLICK, this, function(t) {
                v.PlaySound("Btn"), SdkUtil.TDEvent("视频点击推送加钱"), window.SdkUtil.ShowVideo(function(t) {
                    if (1 == t) {
                        var i = 1 * this.addQian.text;
                        o.AddProp(1, i), this.destroy(), SdkUtil.TDEvent("视频完成推送加钱")
                    }
                }.bind(this))
            })
        }
        onDisable() {}
    }
    class b extends Laya.Scene {
        constructor() {
            super()
        }
        onEnable() {
            this.tiaoGuan.visible = !1, this.fangQi.visible = !1, this.skeleton = new Laya.Skeleton, this.title.addChildAt(this.skeleton, 0), this.skeleton.pos(this.title.width / 2, this.title.height / 2 + 15), this.skeleton.load("res/longgu/win_fail.sk", Laya.Handler.create(this, function() {
                this.skeleton.play("fail_01", !0)
            })), Laya.timer.once(1e3, this, function() {
                this.tiaoGuan.visible = !0, this.fangQi.visible = !0
            }), window.SdkUtil.TDGuanQia && window.SdkUtil.TDGuanQia(3, o.GetUserData("showLv")), window.SdkUtil.ShowBanner && window.SdkUtil.ShowBanner(), window.SdkUtil.ShowAddIcon && window.SdkUtil.ShowAddIcon(), window.SdkUtil.ShowChaPing && window.SdkUtil.ShowChaPing(), SdkUtil.TDEvent(o.GetUserData("showLv") + "游戏失败页面"), v.PlayMusic("Fail", 1), this.tiaoGuan.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("失败页面复活视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (o.SetUserData("showLv", o.GetUserData("showLv") + 1), v.guanKaLv = o.GetGuangKalv(), this.destroy(), n.ShowUIPanel("Second"), SdkUtil.TDEvent("失败页面复活视频完成"))
                }.bind(this)))
            }), this.fangQi.on(Laya.Event.CLICK, this, function() {
                !isAfterTime() && ShowInter();
                this.destroy(), v.PlaySound("Btn"), v.isReStart = !0, n.ShowUIPanel("Second")
            });
            isAfterTime() && setTimeout(()=>ShowInter(),1500);
        }
        onDisable() {
            Laya.timer.clearAll(this), window.SdkUtil.CloseBanner && window.SdkUtil.CloseBanner()
        }
    }
    class B extends Laya.Scene {
        constructor() {
            super()
        }
        onEnable() {
            window.SdkUtil.ADInit(!1), this.loadValue = 0, this.curValue = 0, this.onUpdate(), Laya.timer.frameLoop(1, this, this.onUpdate), window.SdkUtil.LoadSubpackage ? (this.loadValue = 1, window.SdkUtil.LoadSubpackage(function() {
                this.LoadConfig()
            }.bind(this))) : this.LoadConfig();
            var t = ["font01", "font02"];
            for (let i = 0; i < t.length; i++) {
                let e = new Laya.BitmapFont;
                e.loadFont("First/Font/" + t[i] + ".fnt", new Laya.Handler(this, function() {
                    Laya.Text.registerBitmapFont(t[i], e)
                }))
            }
        }
        onDisable() {}
        onUpdate() {
            this.curValue += .01, this.curValue > this.loadValue && (this.curValue = this.loadValue), this.curValue >= 1 && (this.curValue = 0), this.jiaZaiTiao.width = 450 * this.curValue
        }
        LoadConfig() {
            var t = [];
            t.length > 0 ? Laya.loader.load(t, Laya.Handler.create(this, function() {
                o.GetData(), this.LoadModels()
            })) : (o.GetData(), this.LoadModels())
        }
        LoadModels() {
            this.loadValue = 1, Laya.Sprite3D.load("res/Scene/Conventional/models.lh", Laya.Handler.create(this, function(t) {
                if (v.models = t, v.models) {
                    v.guanKaLv = o.GetGuangKalv();
                    var i = "res/Scene/Conventional/Level" + v.guanKaLv + ".ls";
                    v.loadScene(i, function() {
                        this.StartGame()
                    }.bind(this))
                } else this.LoadModels()
            }))
        }
        StartGame() {
            Laya.timer.clearAll(this), n.ShowUIPanel("GameRun", !0, !1), window.SdkUtil.ReportMonitor && window.SdkUtil.ReportMonitor(1)
        }
    }
    class A extends Laya.Scene {
        constructor() {
            super(), this.unlockpiFuIndexList = new Array, this.timerNum = 30, this.skeleton, this.quanTouCD = 0, this.daoDanCD = 0, this.wuQiCD = 0, this.zuoDuoCD = 0, this.youDuoCD = 0, this.fangYuCD = 0, this.quanTouCDAll = 2, this.daoDanCDAll = 2, this.wuQiCDAll = 2, this.zuoDuoCDAll = 2, this.youDuoCDAll = 2, this.fangYuCDAll = 2, this.quanTouInitPos = null, this.daoDanInitPos = null, this.wuQiInitPos = null
        }
        onOpened(t) {
            if (n.gameUI = this, 1 == t) {
                var i = new Date,
                    e = i.getMonth() + 1,
                    a = i.getFullYear() + "年" + e + "月" + i.getDate() + "日";
                o.GetUserData("curDay") != a && o.GetUserData("signNum") < 7 && n.ShowUIPanel("Sign", !1)
            }
            this.gameAudio.skin = Laya.SoundManager.muted ? 
                "UIRes/audio_off.png":"UIRes/audio_on.png",
            this.gameAudio.clickHandler = new Laya.Handler(this, ()=>{
                Laya.SoundManager.muted = !Laya.SoundManager.muted;
                this.gameAudio.skin = Laya.SoundManager.muted ? 
                "UIRes/audio_off.png":"UIRes/audio_on.png"
            });
            this.ohayo.on(Laya.Event.CLICK, this, function () {
                /* if(ysdk.environment.i18n.tld == "ru"){
                    window.open("https://yandex.ru/games/developer?name=Ohayo");
                }else{
                    window.open("https://yandex.com/games/developer?name=Ohayo");
                } */
            });
            this.startBtn.on(Laya.Event.CLICK, this, function(t) {
                v.PlaySound("Btn"), null != v.curPlayerControl && v.curPlayerControl.mouseDown(t)
            }), this.WeiXiuBtn.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), this.anNiu.visible = !0, this.bg.visible = !0, v.isReStart = !1, this.WeiXiuBtn.visible = !1, v.PlaySound("XiuFuJiJia"), v.curPlayerControl.xiuFu()
            }), this.shop.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), n.ShowUIPanel("Shop", !1)
            }), this.shop2.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), n.ShowUIPanel("Shop2", !1)
            }), this.addQianBtn.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), SdkUtil.TDEvent("视频点击主页加钱"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (o.AddProp(1, 2e3), this.updateShengJiBtn(), SdkUtil.TDEvent("视频完成主页加钱"))
                }.bind(this))
            }), this.quanTouBtn.on(Laya.Event.MOUSE_DOWN, this, function() {
                this.quanTouZhao.height > 1 || 1 == v.curPlayerControl.isFangYuFun() || null == this.quanTouInitPos || (this.zhunXing1.skin = "UIRes/game/Image_game_06.png", this.zhunXing1.visible = !0, v.PlaySound("Btn"), v.isQuanTou = !0, 1 == v.quanTouJiaoXue && (this.allNoCD(), v.curBoss.huiFuAttack(), v.quanTouJiaoXue = !1), v.curPlayerControl.attack())
            }), this.daoDan.on(Laya.Event.MOUSE_DOWN, this, function() {
                this.daoDanZhao.height > 1 || 1 == v.curPlayerControl.isFangYuFun() || null == this.daoDanInitPos || (this.zhunXing1.skin = "UIRes/game/Image_game_05.png", this.zhunXing1.visible = !0, v.PlaySound("Btn"), v.isDaoDan = !0, v.curPlayerControl.attack())
            }), this.wuQi.on(Laya.Event.MOUSE_DOWN, this, function() {
                this.wuQiZhao.height > 1 || 1 == v.curPlayerControl.isFangYuFun() || null == this.wuQiInitPos || (this.zhunXing1.skin = "UIRes/game/Image_game_06.png", this.zhunXing1.visible = !0, v.PlaySound("Btn"), v.isWuQi = !0, 1 == v.quanTouJiaoXue && (this.allNoCD(), v.curBoss.huiFuAttack(), v.quanTouJiaoXue = !1), v.curPlayerControl.attack())
            }), this.zuoDuo.on(Laya.Event.CLICK, this, function() {
                this.zuoDuoZhao.width > 1 || (v.PlaySound("Btn"), 1 == v.curPlayerControl.zuoDuo() && (1 == v.duoBiJiaoXue && (v.curBoss.huiFu(), v.duoBiJiaoXue = !1), this.zuoDuo.skin = "UIRes/game/Button_game_06.png", this.zuoDuoCD = this.zuoDuoCDAll, Laya.timer.loop(10, this, this.zuoDuoCDLess)))
            }), this.youDuo.on(Laya.Event.CLICK, this, function() {
                this.youDuoZhao.width > 1 || (v.PlaySound("Btn"), 1 == v.curPlayerControl.youDuo() && (1 == v.duoBiJiaoXue && (v.curBoss.huiFu(), v.duoBiJiaoXue = !1), this.youDuo.skin = "UIRes/game/Button_game_05.png", this.youDuoCD = this.youDuoCDAll, Laya.timer.loop(10, this, this.youDuoCDLess)))
            }), this.fangYu.on(Laya.Event.CLICK, this, function() {
                this.fangYuZhao.height > 1 || (v.PlaySound("Btn"), 1 == v.curPlayerControl.fangYu() && (1 == v.fangYuJiaoXue && (this.allNoCD(), v.curBoss.huiFuAttack(), v.fangYuJiaoXue = !1), this.fangYu.skin = "UIRes/game/Button_game_02.png", this.fangYuCD = this.fangYuCDAll, Laya.timer.loop(10, this, this.fangYuCDLess)))
            }), this.shengJiADBtn.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), SdkUtil.TDEvent("视频点击主页升级"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (o.savePowerLv(), null != v.curPlayerControl && (v.PlaySound("ShengJi"), v.curPlayerControl.updatePower()), this.updateShengJiBtn(), SdkUtil.TDEvent("视频完成主页升级"))
                }.bind(this))
            }), this.shengJiQianBtn.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), o.LessProp(1, 1 * this.shengJiQian.text), o.savePowerLv(), null != v.curPlayerControl && (v.PlaySound("ShengJi"), v.curPlayerControl.updatePower()), this.updateShengJiBtn()
            }), v.PlayMusic("Bgm"), this.Init()
        }
        hitTuShow() {
            this.hitTu.width = Laya.stage.width;
            this.hitTu.height = Laya.stage.height;
            this.ani1.play(0, !1)
        }
        updateShengJiBtn() {
            this.shengJiQian.text = 200 + 50 * (o.GetUserData("powerLv") - 1), o.IsCanLessProp(1, 1 * this.shengJiQian.text) ? (this.shengJiQianBtn.visible = !0, this.shengJiADBtn.visible = !1) : (this.shengJiQianBtn.visible = !1, this.shengJiADBtn.visible = !0)
        }
        updateBtnPos() {
            1 == v.isQuanTou && (this.quanTouBtn.x = Laya.stage.mouseX - this.youXiZhong.x, this.quanTouBtn.y = Laya.stage.mouseY - this.youXiZhong.y), 1 == v.isDaoDan && (this.daoDan.x = Laya.stage.mouseX - this.youXiZhong.x, this.daoDan.y = Laya.stage.mouseY - this.youXiZhong.y), 1 == v.isWuQi && (this.wuQi.x = Laya.stage.mouseX - this.youXiZhong.x, this.wuQi.y = Laya.stage.mouseY - this.youXiZhong.y)
        }
        btnPosHuiFu() {
            1 == v.isQuanTou && null != this.quanTouInitPos && (this.quanTouBtn.skin = "UIRes/game/Button_game_10.png", this.quanTouCD = this.quanTouCDAll, Laya.timer.loop(10, this, this.quanTouCDLess), Laya.Tween.to(this.quanTouBtn, {
                x: this.quanTouInitPos.x,
                y: this.quanTouInitPos.y
            }, 30, null, Laya.Handler.create(this, function() {})), v.isQuanTou = !1), 1 == v.isDaoDan && null != this.daoDanInitPos && (this.daoDan.skin = "UIRes/game/Button_game_08.png", this.daoDanCD = this.daoDanCDAll, Laya.timer.loop(10, this, this.daoDanCDLess), Laya.Tween.to(this.daoDan, {
                x: this.daoDanInitPos.x,
                y: this.daoDanInitPos.y
            }, 30, null, Laya.Handler.create(this, function() {})), v.isDaoDan = !1), 1 == v.isWuQi && null != this.wuQiInitPos && (this.wuQi.skin = "UIRes/game/Button_game_12.png", this.wuQiCD = this.wuQiCDAll, Laya.timer.loop(10, this, this.wuQiCDLess), Laya.Tween.to(this.wuQi, {
                x: this.wuQiInitPos.x,
                y: this.wuQiInitPos.y
            }, 30, null, Laya.Handler.create(this, function() {})), v.isWuQi = !1), 0 == v.duoBiJiaoXue && 0 == v.fangYuJiaoXue && 0 == v.quanTouJiaoXue && this.hideZhiYin(), this.hideZhuXing()
        }
        quanTouCDLess() {
            if (this.quanTouCD -= .01, this.quanTouCD <= 0) return this.quanTouCD = 0, this.quanTouZhao.height = 0, this.quanTouBtn.skin = "UIRes/game/Button_game_09.png", void Laya.timer.clear(this, this.quanTouCDLess);
            this.quanTouZhao.height = this.quanTouCD / this.quanTouCDAll * 150
        }
        daoDanCDLess() {
            if (this.daoDanCD -= .01, this.daoDanCD <= 0) return this.daoDanCD = 0, this.daoDanZhao.height = 0, this.daoDan.skin = "UIRes/game/Button_game_07.png", void Laya.timer.clear(this, this.daoDanCDLess);
            this.daoDanZhao.height = this.daoDanCD / this.daoDanCDAll * 150
        }
        wuQiCDLess() {
            if (this.wuQiCD -= .01, this.wuQiCD <= 0) return this.wuQiCD = 0, this.wuQiZhao.height = 0, this.wuQi.skin = "UIRes/game/Button_game_11.png", void Laya.timer.clear(this, this.wuQiCDLess);
            this.wuQiZhao.height = this.wuQiCD / this.wuQiCDAll * 150
        }
        zuoDuoCDLess() {
            this.zuoDuoCD -= .01, this.zuoDuoCD <= 0 && (this.zuoDuoCD = 0, this.zuoDuoZhao.width = 0, this.zuoDuo.skin = "UIRes/game/Button_game_04.png", Laya.timer.clear(this, this.zuoDuoCDLess)), this.zuoDuoZhao.width = this.zuoDuoCD / this.zuoDuoCDAll * 150
        }
        youDuoCDLess() {
            if (this.youDuoCD -= .01, this.youDuoCD <= 0) return this.youDuoCD = 0, this.youDuoZhao.width = 0, this.youDuo.skin = "UIRes/game/Button_game_03.png", void Laya.timer.clear(this, this.youDuoCDLess);
            this.youDuoZhao.width = this.youDuoCD / this.youDuoCDAll * 150
        }
        fangYuCDLess() {
            if (this.fangYuCD -= .01, this.fangYuCD <= 0) return this.fangYuCD = 0, this.fangYuZhao.height = 0, this.fangYu.skin = "UIRes/game/Button_game_01.png", void Laya.timer.clear(this, this.fangYuCDLess);
            this.fangYuZhao.height = this.fangYuCD / this.fangYuCDAll * 150
        }
        onDisable() {
            Laya.timer.clearAll(this), n.gameUI = null, window.SdkUtil.CloseBanner && window.SdkUtil.CloseBanner()
        }
        Init() {
            this.StartGame(), this.youXiZhong.visible = !1, this.xueTiaoBg.visible = !1, this.WeiXiuBtn.visible = !1, 1 == v.duoBiJiaoXue || 1 == v.fangYuJiaoXue ? (this.quanTouZhao.height = 150, this.daoDanZhao.height = 150, this.fangYuZhao.height = 150, this.youDuoZhao.width = 150, this.zuoDuoZhao.width = 150, this.wuQiZhao.height = 150, this.quanTouBtn.skin = "UIRes/game/Button_game_10.png", this.wuQi.skin = "UIRes/game/Button_game_12.png", this.daoDan.skin = "UIRes/game/Button_game_08.png", this.zuoDuo.skin = "UIRes/game/Button_game_06.png", this.youDuo.skin = "UIRes/game/Button_game_05.png", this.fangYu.skin = "UIRes/game/Button_game_02.png") : (this.wuQiZhao.height = 0, this.daoDanZhao.height = 0, this.quanTouZhao.height = 0, this.fangYuZhao.height = 0, this.youDuoZhao.width = 0, this.zuoDuoZhao.width = 0), this.zhunXing1.visible = !1, this.updateShengJiBtn(), this.hideZhiYin(), 1 == v.isReStart && this.hideAll(), this.qian.text = o.GetUserData("Gold"), null != v.curPlayerControl && (this.xueTiao.height = 321 * v.curPlayerControl.getHpBi(), this.hpNum.text = v.curPlayerControl.allHp, this.damageNum.text = v.curPlayerControl.damage), Laya.timer.loop(10, this, function() {
                this.qian.text = o.GetUserData("Gold"), null != v.curPlayerControl && (this.xueTiao.height = 321 * v.curPlayerControl.getHpBi(), this.hpNum.text = v.curPlayerControl.allHp, this.damageNum.text = v.curPlayerControl.damage)
            })
        }
        allNoCD() {
            Laya.timer.clear(this, this.quanTouCDLess), Laya.timer.clear(this, this.fangYuCDLess), Laya.timer.clear(this, this.zuoDuoCDLess), Laya.timer.clear(this, this.youDuoCDLess), Laya.timer.clear(this, this.daoDanCDLess), Laya.timer.clear(this, this.wuQiCDLess), this.wuQiZhao.height = 1, this.daoDanZhao.height = 1, this.quanTouZhao.height = 1, this.fangYuZhao.height = 1, this.youDuoZhao.width = 1, this.zuoDuoZhao.width = 1, this.wuQi.skin = "UIRes/game/Button_game_11.png", this.daoDan.skin = "UIRes/game/Button_game_07.png", this.fangYu.skin = "UIRes/game/Button_game_01.png", this.youDuo.skin = "UIRes/game/Button_game_03.png", this.zuoDuo.skin = "UIRes/game/Button_game_04.png", this.quanTouBtn.skin = "UIRes/game/Button_game_09.png"
        }
        duoBiNoCD() {
            Laya.timer.clear(this, this.quanTouCDLess), Laya.timer.clear(this, this.fangYuCDLess), Laya.timer.clear(this, this.zuoDuoCDLess), Laya.timer.clear(this, this.youDuoCDLess), Laya.timer.clear(this, this.daoDanCDLess), Laya.timer.clear(this, this.wuQiCDLess), this.wuQiZhao.height = 150, this.quanTouZhao.height = 150, this.fangYuZhao.height = 150, this.daoDanZhao.height = 150, this.wuQi.skin = "UIRes/game/Button_game_12.png", this.daoDan.skin = "UIRes/game/Button_game_08.png", this.quanTouBtn.skin = "UIRes/game/Button_game_10.png", this.fangYu.skin = "UIRes/game/Button_game_02.png", this.youDuoZhao.width = 1, this.zuoDuoZhao.width = 1, this.zuoDuo.skin = "UIRes/game/Button_game_04.png", this.youDuo.skin = "UIRes/game/Button_game_03.png", this.showZhiYin(this.youDuo.x, this.youDuo.y, "UIRes/game/Image_game_14.png")
        }
        quanTouNoCD() {
            Laya.timer.clear(this, this.quanTouCDLess), Laya.timer.clear(this, this.fangYuCDLess), Laya.timer.clear(this, this.zuoDuoCDLess), Laya.timer.clear(this, this.youDuoCDLess), Laya.timer.clear(this, this.daoDanCDLess), Laya.timer.clear(this, this.wuQiCDLess), this.fangYuZhao.height = 150, this.youDuoZhao.width = 150, this.zuoDuoZhao.width = 150, this.daoDanZhao.height = 150, this.daoDan.skin = "UIRes/game/Button_game_08.png", this.zuoDuo.skin = "UIRes/game/Button_game_06.png", this.youDuo.skin = "UIRes/game/Button_game_05.png", this.fangYu.skin = "UIRes/game/Button_game_02.png", -1 == v.currentPiFuType ? v.piFuType <= 2 ? (this.wuQiZhao.height = 150, this.wuQi.skin = "UIRes/game/Button_game_12.png", this.quanTouZhao.height = 1, this.quanTouBtn.skin = "UIRes/game/Button_game_09.png", this.showZhiYin(this.quanTouBtn.x, this.quanTouBtn.y, "UIRes/game/Image_game_15.png")) : (this.quanTouZhao.height = 150, this.quanTouBtn.skin = "UIRes/game/Button_game_10.png", this.wuQiZhao.height = 1, this.wuQi.skin = "UIRes/game/Button_game_11.png", this.showZhiYin(this.wuQi.x, this.wuQi.y, "UIRes/game/Image_game_15.png")) : v.currentPiFuType <= 2 ? (this.wuQiZhao.height = 150, this.wuQi.skin = "UIRes/game/Button_game_12.png", this.quanTouZhao.height = 1, this.quanTouBtn.skin = "UIRes/game/Button_game_09.png", this.showZhiYin(this.quanTouBtn.x, this.quanTouBtn.y, "UIRes/game/Image_game_15.png")) : (this.quanTouZhao.height = 150, this.quanTouBtn.skin = "UIRes/game/Button_game_10.png", this.wuQiZhao.height = 1, this.wuQi.skin = "UIRes/game/Button_game_11.png", this.showZhiYin(this.wuQi.x, this.wuQi.y, "UIRes/game/Image_game_15.png"))
        }
        fangYuNoCD() {
            Laya.timer.clear(this, this.quanTouCDLess), Laya.timer.clear(this, this.fangYuCDLess), Laya.timer.clear(this, this.zuoDuoCDLess), Laya.timer.clear(this, this.youDuoCDLess), Laya.timer.clear(this, this.daoDanCDLess), Laya.timer.clear(this, this.wuQiCDLess), this.wuQiZhao.height = 150, this.quanTouZhao.height = 150, this.daoDanZhao.height = 150, this.youDuoZhao.width = 150, this.zuoDuoZhao.width = 150, this.wuQi.skin = "UIRes/game/Button_game_12.png", this.daoDan.skin = "UIRes/game/Button_game_08.png", this.zuoDuo.skin = "UIRes/game/Button_game_06.png", this.youDuo.skin = "UIRes/game/Button_game_05.png", this.quanTouBtn.skin = "UIRes/game/Button_game_10.png", this.fangYuZhao.height = 1, this.fangYu.skin = "UIRes/game/Button_game_01.png", this.showZhiYin(this.fangYu.x, this.fangYu.y, "UIRes/game/Image_game_16.png")
        }
        showZhiYin(t, i, e) {
            this.zhiYinShou.x = t, this.zhiYinShou.y = i, this.zhiYinZi.skin = e, this.zhiYinShou.visible = !0, this.zhiYinZi.visible = !0
        }
        hideZhiYin() {
            this.zhiYinZi.visible = !1, this.zhiYinShou.visible = !1
        }
        showAnNiu() {
            this.anNiu.visible = !0
        }
        hideAnNiu() {
            this.anNiu.visible = !1
        }
        showYouXiZhong() {
            v.chongWuType > 0 ? (this.daoDan.visible = !0, this.daoDan.y = -100, this.daoDan.alpha = 0, Laya.Tween.to(this.daoDan, {
                y: 188,
                alpha: 1
            }, 500, Laya.Ease.backInOut, Laya.Handler.create(this, function() {
                this.daoDanInitPos = new Laya.Point(this.daoDan.x, this.daoDan.y)
            }))) : this.daoDan.visible = !1, -1 == v.currentPiFuType ? v.piFuType <= 2 ? (this.quanTouBtn.visible = !0, this.wuQi.visible = !1, this.quanTouBtn.y = -100, this.quanTouBtn.alpha = 0, Laya.Tween.to(this.quanTouBtn, {
                y: 188,
                alpha: 1
            }, 500, Laya.Ease.backInOut, Laya.Handler.create(this, function() {
                this.quanTouInitPos = new Laya.Point(this.quanTouBtn.x, this.quanTouBtn.y)
            }))) : (this.quanTouBtn.visible = !1, this.wuQi.visible = !0, this.wuQi.y = -100, this.wuQi.alpha = 0, Laya.Tween.to(this.wuQi, {
                y: 188,
                alpha: 1
            }, 500, Laya.Ease.backInOut, Laya.Handler.create(this, function() {
                this.wuQiInitPos = new Laya.Point(this.wuQi.x, this.wuQi.y)
            }))) : v.currentPiFuType <= 2 ? (this.quanTouBtn.visible = !0, this.wuQi.visible = !1, this.quanTouBtn.y = -100, this.quanTouBtn.alpha = 0, Laya.Tween.to(this.quanTouBtn, {
                y: 188,
                alpha: 1
            }, 500, Laya.Ease.backInOut, Laya.Handler.create(this, function() {
                this.quanTouInitPos = new Laya.Point(this.quanTouBtn.x, this.quanTouBtn.y)
            }))) : (this.quanTouBtn.visible = !1, this.wuQi.visible = !0, this.wuQi.y = -100, this.wuQi.alpha = 0, Laya.Tween.to(this.wuQi, {
                y: 188,
                alpha: 1
            }, 500, Laya.Ease.backInOut, Laya.Handler.create(this, function() {
                this.wuQiInitPos = new Laya.Point(this.wuQi.x, this.wuQi.y)
            }))), 0 == this.daoDan.visible && (this.quanTouBtn.x = 0, this.wuQi.x = 0), 1 == o.GetUserData("showLv") ? (this.fangYu.visible = !1, this.youDuo.x = 500, this.zuoDuo.x = -500, Laya.Tween.to(this.youDuo, {
                x: 100
            }, 500, Laya.Ease.backInOut), Laya.Tween.to(this.zuoDuo, {
                x: -100
            }, 500, Laya.Ease.backInOut)) : (this.fangYu.visible = !0, this.fangYu.y = 800, this.youDuo.x = 500, this.zuoDuo.x = -500, Laya.Tween.to(this.youDuo, {
                x: 175
            }, 500, Laya.Ease.backInOut), Laya.Tween.to(this.zuoDuo, {
                x: -175
            }, 500, Laya.Ease.backInOut), Laya.Tween.to(this.fangYu, {
                y: 350
            }, 500, Laya.Ease.backInOut)), v.PlaySound("DuiZhanKaiShi"), this.ani2.play(0, !1), this.youXiZhong.visible = !0, this.xueTiaoBg.visible = !0
        }
        hideZhuXing() {
            this.zhunXing1.visible = !1
        }
        beginHide() {
            window.SdkUtil.luzhiKaishi && window.SdkUtil.luzhiKaishi(), this.anNiu.visible = !1, this.end.visible = !1
        }
        hideAll() {
            this.bg.visible = !1, this.youXiZhong.visible = !1, this.anNiu.visible = !1, this.end.visible = !1, this.WeiXiuBtn.visible = !0
        }
        hideAllUI() {
            this.bg.visible = !1, this.youXiZhong.visible = !1, this.anNiu.visible = !1, this.end.visible = !1, this.WeiXiuBtn.visible = !1
        }
        StartGame() {
            var t = o.GetUserData("piFuType");
            this.unlockpiFuIndexList.length = 0;
            for (let i = 1; i <= 6; i++) 0 == t[i] && this.unlockpiFuIndexList.push(i);
            v.curLevelManager.CreatePlayer(), window.SdkUtil.TDGuanQia(1, o.GetUserData("showLv"))
        }
    }
    class P extends Laya.Scene {
        constructor() {
            super(), this.show
        }
        onOpened(t) {
            this.closeBtn.visible = !1, this.getBtn.visible = !1, this.skeleton = new Laya.Skeleton, this.title.addChildAt(this.skeleton, 0), this.skeleton.pos(this.title.width / 2, this.title.height / 2 + 5), this.skeleton.load("res/longgu/tuisong.sk", Laya.Handler.create(this, function() {
                this.skeleton.play(0, !0)
            })), Laya.timer.once(1e3, this, function() {
                this.closeBtn.visible = !0, this.getBtn.visible = !0
            }), this.show = Laya.Sprite3D.instantiate(v.models.getChildByName("showCamera"), v.curScene), this.updateShow(t - 1), this.show.transform.position = new Laya.Vector3(1e4, 1e4, 1e4);
            var i = this.show.getChildByName("camera").getChildByName("Camera");
            i.renderTarget = new Laya.RenderTexture(720, 600, Laya.RenderTextureFormat.R8G8B8A8), i.clearFlag = 0, i.clearColor = new Laya.Vector4(0, 0, 0, 0);
            var e = new Laya.Texture(i.renderTarget, Laya.Texture.DEF_UV);
            this.showBg.graphics.drawTexture(e), this.closeBtn.on(Laya.Event.CLICK, this, function(t) {
                v.PlaySound("Btn"), null != v.curPlayerControl && (n.pushUI = 0, v.curPlayerControl.mouseDown(t)), this.destroy()
            }), this.getBtn.on(Laya.Event.CLICK, this, function(i) {
                v.PlaySound("Btn"), SdkUtil.TDEvent("视频点击推送换皮肤"), window.SdkUtil.ShowVideo(function(e) {
                    1 == e && (null != v.curPlayerControl && (n.pushUI = 0, v.currentPiFuType = t, v.curPlayerControl.updateWuQi(t - 1), v.curPlayerControl.mouseDown(i)), this.destroy(), SdkUtil.TDEvent("视频完成推送换皮肤"))
                }.bind(this))
            }), null != this.ADPanel && SdkUtil.ShowNeiZhiAD && SdkUtil.ShowNeiZhiAD(this.ADPanel, 1)
        }
        updateShow(t) {
            var i = this.show.getChildByName("WuQi");
            for (let e = 0; e < 6; e++) i.getChildAt(e).active = t == e
        }
        onDisable() {
            null != this.show && this.show.destroy()
        }
    }
    class N extends Laya.Scene {
        constructor() {
            super(), this.tiaoAllWidth
        }
        onEnable() {
            this.loadScene()
        }
        loadScene() {
            var t = "res/Scene/Conventional/Level" + v.guanKaLv + ".ls";
            v.loadScene(t, function() {
                Laya.timer.once(1, this, function() {
                    this.destroy(), n.ShowUIPanel("GameRun", !0, !0)
                })
            }.bind(this))
        }
    }
    class F extends Laya.Scene {
        constructor() {
            super(), this.pageYe = 0, this.show
        }
        onEnable() {
            window.SdkUtil.ShowBanner && window.SdkUtil.ShowBanner(), window.SdkUtil.ShowChaPing && window.SdkUtil.ShowChaPing(), this.show = Laya.Sprite3D.instantiate(v.models.getChildByName("showCamera"), v.curScene), this.updateShow(v.piFuType - 1), this.show.transform.position = new Laya.Vector3(1e4, 1e4, 1e4);
            var t = this.show.getChildByName("camera").getChildByName("Camera");
            t.renderTarget = new Laya.RenderTexture(720, 600, Laya.RenderTextureFormat.R8G8B8A8), t.clearFlag = 0, t.clearColor = new Laya.Vector4(0, 0, 0, 0);
            var i = new Laya.Texture(t.renderTarget, Laya.Texture.DEF_UV);
            this.showBg.graphics.drawTexture(i), this.updateUI();
            for (let t = 1; t <= this.bg.numChildren; t++) this["shiYong" + t].on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), v.piFuType = t, null != v.curPlayerControl && v.curPlayerControl.updateWuQi(v.piFuType - 1), v.currentPiFuType = -1, this.updateUI(), this.updateShow(v.piFuType - 1), o.savePiFuTypeNum(v.piFuType)
            }), this["xiaoHao" + t].on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn");
                var i = 1 * this["xiaoHaoNum" + t].text;
                o.IsCanLessProp(1, i) ? (o.LessProp(1, i), v.piFuType = t, null != v.curPlayerControl && v.curPlayerControl.updateWuQi(v.piFuType - 1), v.currentPiFuType = -1, o.SavePiFuTypeList(v.piFuType), o.savePiFuTypeNum(v.piFuType), this.updateUI(), this.updateShow(v.piFuType - 1)) : n.ShowUIPanel("BuyGold", !1)
            });
            this.fangQi.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), this.destroy()
            }), this.qian.text = o.GetUserData("Gold"), Laya.timer.loop(10, this, function() {
                this.qian.text = o.GetUserData("Gold")
            })
        }
        updateUI() {
            this.xiaoHaoNum1.text = 0, this.xiaoHaoNum2.text = 2e3, this.xiaoHaoNum3.text = 5e3, this.xiaoHaoNum4.text = 5e3, this.xiaoHaoNum5.text = 5e3, this.xiaoHaoNum6.text = 5e3;
            var t = o.GetUserData("piFuType");
            for (let e = 1; e <= 6; e++)
                if (null != t[e])
                    if (1 == t[e]) {
                        var i = "btn" + e;
                        this.bg.getChildByName(i).getChildByName("gouMai").visible = !1, this.bg.getChildByName(i).getChildByName("yongYou").visible = !0, -1 == v.currentPiFuType ? v.piFuType == e ? (this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !1) : (this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !1, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !0) : v.currentPiFuType == e ? (this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !1) : (this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !1, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !0)
                    } else {
                        i = "btn" + e;
                        v.currentPiFuType != e ? (this.bg.getChildByName(i).getChildByName("gouMai").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").visible = !1, this.bg.getChildByName(i).getChildByName("gouMai").getChildByName("shiPin").visible = !1, this.bg.getChildByName(i).getChildByName("gouMai").getChildByName("xiaoHao").visible = !0) : (this.bg.getChildByName(i).getChildByName("gouMai").visible = !1, this.bg.getChildByName(i).getChildByName("yongYou").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !1)
                    }
            else {
                i = "btn" + e;
                v.currentPiFuType != e ? (this.bg.getChildByName(i).getChildByName("gouMai").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").visible = !1, this.bg.getChildByName(i).getChildByName("gouMai").getChildByName("shiPin").visible = !1, this.bg.getChildByName(i).getChildByName("gouMai").getChildByName("xiaoHao").visible = !0) : (this.bg.getChildByName(i).getChildByName("gouMai").visible = !1, this.bg.getChildByName(i).getChildByName("yongYou").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !1)
            }
        }
        updateShow(t) {
            var i = this.show.getChildByName("WuQi");
            for (let e = 0; e < 6; e++) i.getChildAt(e).active = t == e
        }
        onDisable() {
            null != n.gameUI && n.gameUI.updateShengJiBtn(), window.SdkUtil.CloseBanner && window.SdkUtil.CloseBanner(), null != this.show && this.show.destroy()
        }
    }
    class k extends Laya.Scene {
        constructor() {
            super(), this.pageYe = 0, this.show
        }
        onEnable() {
            window.SdkUtil.ShowBanner && window.SdkUtil.ShowBanner(), window.SdkUtil.ShowChaPing && window.SdkUtil.ShowChaPing(), this.show = Laya.Sprite3D.instantiate(v.models.getChildByName("showCamera2"), v.curScene), this.updateShow(v.chongWuType), this.show.transform.position = new Laya.Vector3(1e4, 1e4, 1e4);
            var t = this.show.getChildByName("camera").getChildByName("Camera");
            t.renderTarget = new Laya.RenderTexture(720, 600, Laya.RenderTextureFormat.R8G8B8A8), t.clearFlag = 0, t.clearColor = new Laya.Vector4(0, 0, 0, 0);
            var i = new Laya.Texture(t.renderTarget, Laya.Texture.DEF_UV);
            this.showBg.graphics.drawTexture(i), this.updateUI();
            for (let t = 1; t <= this.bg.numChildren; t++) this["shiYong" + t].on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), v.chongWuType = t, null != v.curPlayerControl && v.curPlayerControl.updateDaoDan(v.chongWuType), v.currentChongWuType = -1, this.updateUI(), this.updateShow(v.chongWuType), o.saveChongWuNum(v.chongWuType)
            }), this["xiaoHao" + t].on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn");
                var i = 1 * this["xiaoHaoNum" + t].text;
                o.IsCanLessProp(1, i) ? (o.LessProp(1, i), v.chongWuType = t, null != v.curPlayerControl && v.curPlayerControl.updateDaoDan(v.chongWuType), v.currentChongWuType = -1, o.SaveChongWuTypeList(v.chongWuType), o.saveChongWuNum(v.chongWuType), this.updateUI(), this.updateShow(v.chongWuType)) : n.ShowUIPanel("BuyGold", !1)
            });
            this.fangQi.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), this.destroy()
            }), this.qian.text = o.GetUserData("Gold"), Laya.timer.loop(10, this, function() {
                this.qian.text = o.GetUserData("Gold")
            })
        }
        updateUI() {
            this.xiaoHaoNum1.text = 2e3, this.xiaoHaoNum2.text = 3e3, this.xiaoHaoNum3.text = 5e3;
            var t = o.GetUserData("chongWuType");
            for (let e = 1; e <= 3; e++)
                if (null != t[e])
                    if (1 == t[e]) {
                        var i = "btn" + e;
                        this.bg.getChildByName(i).getChildByName("gouMai").visible = !1, this.bg.getChildByName(i).getChildByName("yongYou").visible = !0, -1 == v.currentChongWuType ? v.chongWuType == e ? (this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !1) : (this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !1, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !0) : v.currentChongWuType == e ? (this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !1) : (this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !1, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !0)
                    } else {
                        i = "btn" + e;
                        v.currentChongWuType != e ? (this.bg.getChildByName(i).getChildByName("gouMai").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").visible = !1, this.bg.getChildByName(i).getChildByName("gouMai").getChildByName("shiPin").visible = !1, this.bg.getChildByName(i).getChildByName("gouMai").getChildByName("xiaoHao").visible = !0) : (this.bg.getChildByName(i).getChildByName("gouMai").visible = !1, this.bg.getChildByName(i).getChildByName("yongYou").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !1)
                    }
            else {
                i = "btn" + e;
                v.currentChongWuType != e ? (this.bg.getChildByName(i).getChildByName("gouMai").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").visible = !1, this.bg.getChildByName(i).getChildByName("gouMai").getChildByName("shiPin").visible = !1, this.bg.getChildByName(i).getChildByName("gouMai").getChildByName("xiaoHao").visible = !0) : (this.bg.getChildByName(i).getChildByName("gouMai").visible = !1, this.bg.getChildByName(i).getChildByName("yongYou").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("yiYong").visible = !0, this.bg.getChildByName(i).getChildByName("yongYou").getChildByName("shiYong").visible = !1)
            }
        }
        updateShow(t) {
            var i = this.show.getChildByName("DaoDan");
            for (let e = 1; e < 4; e++) i.getChildAt(e).active = t == e
        }
        onDisable() {
            null != n.gameUI && n.gameUI.updateShengJiBtn(), window.SdkUtil.CloseBanner && window.SdkUtil.CloseBanner(), null != this.show && this.show.destroy()
        }
    }
    class U extends Laya.Scene {
        constructor() {
            super(), this.qianDaoQian = 100
        }
        onEnable() {
            window.SdkUtil.ShowBanner && window.SdkUtil.ShowBanner();
            var t = new Date,
                i = t.getMonth() + 1,
                e = t.getFullYear() + "年" + i + "月" + t.getDate() + "日";
            this.initQianDaoFun(), this.shuangBei.on(Laya.Event.CLICK, this, function() {
                if (v.PlaySound("Btn"), o.GetUserData("curDay") == e) return n.ShowGameTipUI("今日已签到"), void this.destroy();
                window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("签到页面视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (o.GetUserData("curDay") != e ? (o.AddProp(1, 2 * this.qianDaoQian), o.SetUserData("curDay", e), o.SetUserData("signNum", o.GetUserData("signNum") + 1), n.ShowGameTipUI("签到成功")) : n.ShowGameTipUI("今日已签到"), this.destroy(), SdkUtil.TDEvent("签到页面视频完成"))
                }.bind(this)))
            }), this.qianDao.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), o.GetUserData("curDay") != e ? (o.AddProp(1, this.qianDaoQian), o.SetUserData("curDay", e), o.SetUserData("signNum", o.GetUserData("signNum") + 1), n.ShowGameTipUI("签到成功"), n.ShowGameTipUI("签到成功")) : n.ShowGameTipUI("今日已签到"), this.destroy()
            })
        }
        initQianDaoFun() {
            var t = o.GetUserData("signNum") + 1;
            for (let e = 1; e <= this.allDay.numChildren; e++) {
                var i = "day" + e;
                this["dayQian" + e].text = 50 * e + 50, o.GetUserData("signNum") >= e ? this.allDay.getChildByName(i).getChildByName("yiQian").visible = !0 : (this.allDay.getChildByName(i).getChildByName("yiQian").visible = !1, t <= 7 && t == e && (this.qianDaoQian = 1 * this["dayQian" + e].text))
            }
        }
        onDisable() {
            window.SdkUtil.CloseBanner && window.SdkUtil.CloseBanner()
        }
    }
    class T extends Laya.Scene {
        constructor() {
            super(), this.show
        }
        onEnable() {
            this.init()
        }
        init() {
            this.shuangBei.visible = !1, this.fangQi.visible = !1, this.skeleton = new Laya.Skeleton, this.title.addChildAt(this.skeleton, 0), this.skeleton.pos(this.title.width / 2, this.title.height / 2 + 15), this.skeleton.load("res/longgu/win_fail.sk", Laya.Handler.create(this, function() {
                this.skeleton.play("win_01", !0)
            })), Laya.timer.once(1e3, this, function() {
                this.shuangBei.visible = !0, this.fangQi.visible = !0
            }), SdkUtil.IsShowShareBtn && SdkUtil.IsShowShareBtn(), window.SdkUtil.TDGuanQia && window.SdkUtil.TDGuanQia(2, o.GetUserData("showLv")), window.SdkUtil.ShowBanner && window.SdkUtil.ShowBanner(), window.SdkUtil.ShowAddIcon && window.SdkUtil.ShowAddIcon(), window.SdkUtil.ShowChaPing && window.SdkUtil.ShowChaPing(), null != this.ADPanel && SdkUtil.ShowNeiZhiAD && SdkUtil.ShowNeiZhiAD(this.ADPanel, 2), v.PlayMusic("Win", 1), this.addQian.text = 50 * o.GetUserData("showLv"), o.SetUserData("showLv", o.GetUserData("showLv") + 1), v.guanKaLv = o.GetGuangKalv(), this.shuangBei.on(Laya.Event.CLICK, this, function() {
                v.PlaySound("Btn"), window.SdkUtil.ShowVideo && (SdkUtil.TDEvent("胜利页面三倍视频点击"), window.SdkUtil.ShowVideo(function(t) {
                    1 == t && (o.AddProp(1, 2 * this.addQian.text), this.destroy(), n.ShowUIPanel("Second"), n.ShowGameTipUI("双倍领取成功"), SdkUtil.TDEvent("胜利页面双倍视频完成"))
                }.bind(this)))
            }), this.fangQi.on(Laya.Event.CLICK, this, function() {
                o.AddProp(1, 1 * this.addQian.text), v.PlaySound("Btn"), n.ShowUIPanel("Second"), this.destroy()
            }), this.qian.text = o.GetUserData("Gold"), Laya.timer.loop(10, this, function() {
                this.qian.text = o.GetUserData("Gold")
            })
        }
        onDisable() {
            Laya.timer.clearAll(this), window.SdkUtil.CloseBanner && window.SdkUtil.CloseBanner(), window.SdkUtil.TDGuanQia(1, o.GetUserData("showLv"))
        }
    }
    class x {
        static init() {
            let t = Laya.ClassUtils.regClass;
            t("PanelBox.js", w), t("PanelBuyGold.js", D), t("PanelFail.js", b), t("PanelFirst.js", B), t("PanelGameRun.js", A), t("PanelPush.js", P), t("PanelSecond.js", N), t("PanelShop.js", F), t("PanelShop2.js", k), t("PanelSign.js", U), t("PanelWin.js", T)
        }
    }
    x.width = 720, x.height = 1280, x.scaleMode = "fixedauto", x.screenMode = "none", x.alignV = "middle", x.alignH = "center", x.startScene = "UIPanel/GameRun.scene", x.sceneRoot = "", x.debug = !1, x.stat = !1, x.physicsDebug = !1, x.exportSceneToJson = !0, x.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(x.width, x.height) : Laya.init(x.width, x.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = x.scaleMode, Laya.stage.screenMode = x.screenMode, Laya.stage.alignV = x.alignV, Laya.stage.alignH = x.alignH, Laya.URL.exportSceneToJson = x.exportSceneToJson, (x.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), x.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), x.stat && Laya.Stat.show(), Laya.alertGlobalError(!0), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            Laya.stage.on(Laya.Event.RESIZE, this, this.resizeView);
            Laya.SoundManager.useAudioMusic = false;
        }
        resizeView() {
            Laya.stage.pivot(x.width / 2, x.height / 2);
            Laya.stage.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            x.startScene && Laya.Scene.open("UIPanel/First.scene")
        }
    }
}();