/** Cooked with Flambe, https://getflambe.com */
'use strict';
(function(rd) {
    function t(a, b) {
        function c() {}
        c.prototype = a;
        var d = new c,
            j;
        for (j in b) d[j] = b[j];
        b.toString !== Object.prototype.toString && (d.toString = b.toString);
        return d
    }

    function rc(a) {
        return a instanceof Array ? function() {
            return w.iter(a)
        } : "function" == typeof a.iterator ? jb(a, a.iterator) : a.iterator
    }

    function jb(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = yd++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var f = {},
        v = function() {
            return B.__string_rec(this, "")
        },
        fa = function() {};
    f["flambe.util.Disposable"] = fa;
    fa.__name__ = ["flambe", "util", "Disposable"];
    fa.prototype = {
        __class__: fa
    };
    var h = function() {
        this._flags = 0;
        this.owner = this.next = null
    };
    f["flambe.Component"] = h;
    h.__name__ = ["flambe", "Component"];
    h.__interfaces__ = [fa];
    h.prototype = {
        onAdded: function() {},
        onRemoved: function() {},
        onStart: function() {},
        onStop: function() {},
        onUpdate: function() {},
        dispose: function() {
            null != this.owner && this.owner.remove(this)
        },
        get_name: function() {
            return null
        },
        __class__: h
    };
    var kb = function(a, b, c, d) {
        this._idleTimer = this._movieTimer = 0;
        this._bobIdle = !1;
        this._timerStop = 0.1;
        this._timer = 0;
        this._currentEnemy = null;
        this._bobMoveElevator = this._bobGoToElevator = this._bobGoToStair = this._bobGoToSave = this._bobInShadow = this._bobBusy = this._isNearEnemyBody = this._isNearStair = !1;
        this.currentPadlock = null;
        var j = this;
        h.call(this);
        this.currentAction = "stay";
        this._ctx = a;
        this._name = b;
        this._x =
            c * this._ctx.gameScale;
        this._y = d * this._ctx.gameScale;
        this.destroyed = new aa;
        this._steps = this._ctx.pack.getSound("sounds/bob_footsteps");
        this.bobWalking = !1;
        this._ctx.currentLevel.paused.watch(function(a) {
            a ? j.bobWalking && j._bobSteps.volume.set__(0) : j.bobWalking && j._bobSteps.volume.set__(1)
        })
    };
    f.BobHero = kb;
    kb.__name__ = ["BobHero"];
    kb.__super__ = h;
    kb.prototype = t(h.prototype, {
        get_name: function() {
            return "BobHero_34"
        },
        onAdded: function() {
            var a = new V(this._ctx.pack, "bobAnim");
            this._moviePlayer = new T(a);
            this.IdleBob();
            this.owner.add(this._moviePlayer);
            this.bobSprite = new q;
            this.owner.add(this.bobSprite);
            this.bobSprite.setScale(this._ctx.gameScale);
            this.bobSprite.setXY(this._x, this._y);
            this.movePointX = this._x;
            this.movePointY = this._y;
            this._movieTimer = 0
        },
        onUpdate: function(a) {
            this._x = this.owner._compMap.Sprite_0.x._value;
            this._y = this.owner._compMap.Sprite_0.y._value;
            this._bobMoveElevator && (this._timer += a, this._timer >= this._timerStop && (this._timer = 0, this._bobMoveElevator = !1));
            "stay" == this.currentAction && (this._idleTimer +=
                a, 4 <= this._idleTimer && (this._idleTimer = 0, 0.6 < Math.random() ? this.bobSprite.scaleX.set__(-1 * Math.abs(this.bobSprite.scaleX._value)) : this.bobSprite.scaleX.set__(Math.abs(this.bobSprite.scaleX._value)), this.currentAction = "idle1", this._moviePlayer.loop("_Idle1", !1), this._ctx.pack.getSound("sounds/bob_looks_around").play(1)));
            "idle1" == this.currentAction && (this._timer += a, 1.5 <= this._timer && (this._timer = 0, this.IdleBob()));
            "idleShadow" == this.currentAction && (this._idleTimer += a, 4 <= this._idleTimer && (this._idleTimer =
                0, 0.6 < Math.random() ? (this.bobSprite.scaleX.set__(-1 * Math.abs(this.bobSprite.scaleX._value)), this._ctx.currentLevel.bobGlass.scaleX.set__(-1 * Math.abs(this.bobSprite.scaleX._value))) : (this.bobSprite.scaleX.set__(Math.abs(this.bobSprite.scaleX._value)), this._ctx.currentLevel.bobGlass.scaleX.set__(Math.abs(this.bobSprite.scaleX._value))), this.currentAction = "_IdleShadow1", this._moviePlayer.loop("_IdleShadow1", !0), this._ctx.currentLevel.moviePlayer.loop("_IdleShadowGlass1", !0), this._ctx.pack.getSound("sounds/bob_looks_around").play(1)));
            "_IdleShadow1" == this.currentAction && (this._timer += a, 1.5 <= this._timer && (this._timer = 0, this.changeAction("idleShadow")));
            if ("hit" == this.currentAction || "shock" == this.currentAction) this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.currentAction = "move", this._moviePlayer.loop("_Walk", !1), this._ctx.currentLevel._screensLayer.removeChild(this.owner), this._ctx.currentLevel._charactersLayer.addChild(this.owner));
            if ("setbox" == this.currentAction || "setboxGostair" == this.currentAction) this._movieTimer +=
                a, this._movieTimer >= this._movieTimerStop && ("GuardA" == this._enemyNameCover && this._currentEnemy._compMap.GuardA_27.CoverTheBox(), "Scientist" == this._enemyNameCover && this._currentEnemy._compMap.Scientist_26.CoverTheBox(), this._bobGoToStair = !1, this._movieTimer = 0, "setbox" == this.currentAction ? (this._bobBusy = this._isNearEnemyBody = !1, this.currentAction = "move", this._moviePlayer.loop("_Walk", !1)) : "setboxGostair" == this.currentAction && (this._ctx.currentLevel.FindStairToTeleport(this._stairGroupId), this.changeAction(this._stairName,
                    this._stairX, this.bobSprite.y._value)));
            "liftIn" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.owner.remove(this._moviePlayer), this._moviePlayer.dispose(), this.IdleBob(), this._ctx.pack.getSound("sounds/elevator_button").play(1), this.currentPadlock._compMap.Elevator_14.bobInLift()));
            "liftOut" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this._bobGoToElevator = this._bobInShadow = !1, this.IdleBob()));
            "beginLevel" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.currentPadlock._compMap.StartDoor_7.closeDoor(), this.IdleBob(), this._ctx.currentLevel.ActivateControl()));
            if ("StairUp" == this.currentAction || "StairDown" == this.currentAction) this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this._ctx.currentLevel.TeleportBobToStair(this.currentAction), "StairUp" == this.currentAction ? (this.currentAction = "stairOutUp", this._ctx.currentLevel._backgroundLayer.removeChild(this.owner),
                this._ctx.currentLevel._charactersLayer.addChild(this.owner)) : this.currentAction = "stairOutDown", this._moviePlayer.loop("_StairOut", !0));
            if ("stairOutUp" == this.currentAction || "stairOutDown" == this.currentAction) this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, "stairOutDown" == this.currentAction && (this._bobInShadow = !1, this._ctx.currentLevel._backgroundLayer.removeChild(this.owner), this._ctx.currentLevel._charactersLayer.addChild(this.owner)), this._isNearStair = this._isNearEnemyBody =
                this._bobInShadow = !1, this.IdleBob(), this._bobBusy = this._bobGoToStair = !1);
            "shadowIn" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.changeAction("idleShadow"), this._bobInShadow = !0));
            "shadowOut" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this._bobInShadow = !1, this.currentAction = "move", this._moviePlayer.loop("_Walk", !1)));
            "inSave" == this.currentAction && (this._movieTimer += a, this._movieTimer >=
                this._movieTimerStop && (this._movieTimer = 0, this._movieTimerStop = 1.2, this._ctx.isLevelPointSaved = !0, this._ctx.copyTempToSave(), this.currentAction = "save", this._moviePlayer.loop("_Save", !1), this._ctx.batteriesInLevel = this._ctx.currentLevel.batery._value, this._ctx.currentLevel.saveDoorCodes()));
            "save" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this._movieTimerStop = 0.4, this.currentAction = "outSave", this._moviePlayer.loop("_OutSave", !0), this.currentPadlock._compMap.ChargeBase_6.OutSavePoint()));
            "outSave" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this._bobGoToSave = this._bobGoToStair = !1, this.IdleBob()));
            "yes" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.currentAction = "toNextLevel", this._moviePlayer.loop("_LiftIn"), this._movieTimerStop = 0.9, this._ctx.currentLevel._charactersLayer.removeChild(this.owner), this._ctx.currentLevel._backgroundLayer.addChild(this.owner)));
            "yes2" ==
            this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.IdleBob()));
            "partIn" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.owner.remove(this._moviePlayer), this._moviePlayer.dispose(), this.currentPadlock._compMap.PartDoor_16.closeDoor(), this.IdleBob()));
            "partOut" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.currentPadlock._compMap.PartDoor_16.closeDoorOut(),
                this.IdleBob()));
            "toNextLevel" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.currentPadlock._compMap.FinishDoor_35.closeDoor(), this.IdleBob(), this.currentAction = "win"));
            "fear" == this.currentAction && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.currentAction = "gameover", this._ctx.currentLevel.score.set__(0)))
        },
        changeAction: function(a, b, c) {
            null == c && (c = 0);
            null == b && (b = 0);
            this._ctx.currentLevel.bobGlass.set_visible(!1);
            this._ctx.currentLevel.moviePlayer.loop("_Walk", !1);
            b -= this._ctx.centerCoefX;
            "move" == a && Math.abs(c - (this._y - 15 * this._ctx.currentScaleCoef + this._ctx.centerCoefY)) < 45 * this._ctx.currentScaleCoef && Math.abs(b - this._x) > 10 * this._ctx.currentScaleCoef && (this.currentAction = a, this._x < b ? this.bobSprite.scaleX.set__(-1 * Math.abs(this.bobSprite.scaleX._value)) : this._x > b && this.bobSprite.scaleX.set__(Math.abs(this.bobSprite.scaleX._value)), this.movePointX = b, this.movePointY = c, this._ctx.currentLevel.crossTarget.setXY(b,
                this._y), this._ctx.currentLevel.crossTarget.scaleX.animate(0, this._ctx.gameScale, 0.2, n.sineOut), this._ctx.currentLevel.crossTarget.scaleY.animate(0, this._ctx.gameScale, 0.2, n.sineOut), this.bobWalking || (this._bobSteps = this._steps.loop(1), this.bobWalking = !0), 1 == this._ctx.currentLevelNumber && 1 == this._ctx.currentLevel.tutor.tipsActivate[0] && this._ctx.currentLevel.tutor.closeTip(1));
            b += this._ctx.centerCoefX;
            "stay" == a && (this.currentAction = a);
            "move" == this.currentAction && !this._bobInShadow ? this._moviePlayer.loop("_Walk", !1) : this._bobInShadow && (this.currentAction = "shadowOut", this._movieTimerStop = 0.1);
            "stay" == this.currentAction && this.IdleBob();
            "hit" == a && !this._bobGoToStair && (this.currentAction = a, this._moviePlayer.loop("_Hit", !0), this._movieTimerStop = 0.5, this._ctx.pack.getSound("sounds/bob_punch_var").play(1), this._ctx.currentLevel._charactersLayer.removeChild(this.owner), this._ctx.currentLevel._screensLayer.addChild(this.owner));
            "shock" == a && !this._bobGoToStair && (this.currentAction = a, this._moviePlayer.loop("_Shocker", !0), this._movieTimerStop = 0.5, this._ctx.currentLevel._charactersLayer.removeChild(this.owner), this._ctx.currentLevel._screensLayer.addChild(this.owner), this._ctx.pack.getSound("sounds/electro_shocker").play());
            "setbox" == a && !this._bobGoToStair && !this._bobBusy && (this._bobGoToStair = !0, this.currentAction = a, this._moviePlayer.loop("_DropBox", !0), this._movieTimerStop = 0.7, this._ctx.pack.getSound("sounds/box_cover").play(1), this._bobBusy = !0);
            "setboxGostair" == a && !this._bobGoToStair && !this._bobBusy && (this.currentAction =
                a, this._moviePlayer.loop("_DropBox", !0), this._movieTimerStop = 0.7, this._ctx.pack.getSound("sounds/box_cover").play(1), this._bobBusy = !0);
            "liftIn" == a && "liftIn" != this.currentAction && (this.currentAction = a, this._moviePlayer.loop("_LiftIn"), this._bobInShadow = !0, this._moviePlayer.movie._value.set_position(0), this._movieTimer = 0, this._movieTimerStop = 0.93, this.bobSprite.setXY(b, c), this.bobSprite.scaleX.set__(Math.abs(this.bobSprite.scaleX._value)));
            if ("liftOut" == a && "liftOut" != this.currentAction) {
                this.currentAction =
                    a;
                var d = new V(this._ctx.pack, "bobAnim");
                this._moviePlayer = new T(d);
                this.owner.add(this._moviePlayer);
                this._moviePlayer.loop("_LiftOut");
                this._movieTimer = 0;
                this._movieTimerStop = 0.55;
                this.bobSprite.scaleX.set__(Math.abs(this.bobSprite.scaleX._value))
            }
            "beginLevel" == a && (this.currentAction = a, this._moviePlayer.loop("_LiftOut"), this._movieTimerStop = 0.55, this.bobSprite.setXY(b, c), this.bobSprite.scaleX.set__(Math.abs(this.bobSprite.scaleX._value)));
            "partOut" == a && (this.currentAction = a, d = new V(this._ctx.pack,
                "bobAnim"), this._moviePlayer = new T(d), this.owner.add(this._moviePlayer), this._moviePlayer.loop("_LiftOut"), this._movieTimerStop = 0.55, this.bobSprite.setXY(b, c), this.bobSprite.scaleX.set__(Math.abs(this.bobSprite.scaleX._value)), this._bobInShadow = !1, this._ctx.currentLevel._backgroundLayer.removeChild(this.owner), this._ctx.currentLevel._charactersLayer.addChild(this.owner));
            "StairUp" == a && (this._bobBusy = this._bobGoToStair = !0, this.currentAction = a, this._moviePlayer.loop("_StairIn", !0), this._movieTimerStop =
                0.5, this.bobSprite.setXY(b, c), this.bobSprite.y.animate(c, c + 25 * this._ctx.currentScaleCoef, 0.5, n.linear), this._ctx.currentLevel._charactersLayer.removeChild(this.owner), this._ctx.currentLevel._backgroundLayer.addChild(this.owner), this._bobSteps.dispose(), this._bobInShadow = !0);
            "StairDown" == a && (this._bobBusy = this._bobGoToStair = !0, this.currentAction = a, this._moviePlayer.loop("_StairIn", !0), this._movieTimerStop = 0.4, this.bobSprite.setXY(b, c), this.bobSprite.y.animate(c, c - 25 * this._ctx.currentScaleCoef, 0.4,
                n.linear), this._ctx.currentLevel._charactersLayer.removeChild(this.owner), this._ctx.currentLevel._backgroundLayer.addChild(this.owner), this._bobSteps.dispose(), this._bobInShadow = !0);
            "shadowIn" == a && "stay" == this.currentAction && (this.currentAction = a, this._moviePlayer.loop("_InShadow", !1), this._movieTimerStop = 0.3, this._bobInShadow = !0, this._ctx.pack.getSound("sounds/bob_shadow").play(1));
            "idleShadow" == a && (this.currentAction = a, this.owner.remove(this._moviePlayer), this._moviePlayer.dispose(), d = new V(this._ctx.pack,
                "bobAnim"), this._moviePlayer = new T(d), this.owner.add(this._moviePlayer), this._moviePlayer.loop("_IdleShadow", !0), this._ctx.currentLevel.glassEntiry.remove(this._ctx.currentLevel.moviePlayer), this._ctx.currentLevel.moviePlayer.dispose(), d = new V(this._ctx.pack, "bobAnim"), this._ctx.currentLevel.moviePlayer = new T(d), this._ctx.currentLevel.glassEntiry.add(this._ctx.currentLevel.moviePlayer), this._ctx.currentLevel.bobGlass.setXY(this._x, this._y), this._ctx.currentLevel.bobGlass.set_visible(!0), this._ctx.currentLevel.moviePlayer.loop("_IdleShadowGlass", !0));
            "save" == a && (this.currentAction = a, this._movieTimerStop = 1.2, this._moviePlayer.loop("_Save", !1), this.bobSprite.setXY(b, c));
            "inSave" == a && (this._bobGoToStair = !0, this.currentAction = a, this._moviePlayer.loop("_InSave", !0), this._movieTimerStop = 0.4, this.bobSprite.setXY(b, c), this.currentPadlock._compMap.ChargeBase_6.GotoSavePoint(), this._ctx.pack.getSound("sounds/scaner").play(1));
            if ("yes" == a || "yes2" == a) this.currentAction = a, this._moviePlayer.loop("_Yes", !0), this._movieTimerStop = 0.9, this.bobSprite.setXY(b,
                c), this._bobSteps.dispose(), this._ctx.pack.getSound("sounds/bob_level_complete_var").play(1);
            "partIn" == a && (this._movieTimer = 0, this.currentAction = "partIn", this._moviePlayer.loop("_LiftIn"), this._movieTimerStop = 0.9, this.bobSprite.setXY(b, c), this._bobInShadow = !0, this._ctx.currentLevel._charactersLayer.removeChild(this.owner), this._ctx.currentLevel._backgroundLayer.addChild(this.owner));
            "fear" == a && (this.currentAction = a, this._moviePlayer.loop("_Fear", !0), this._movieTimerStop = 2, this._movieTimer = 0, this._bobSteps.dispose(),
                this._ctx.pack.getSound("sounds/bob_busted").play(1))
        },
        IdleBob: function() {
            this._ctx.currentLevel.levelCreated && this._ctx.currentLevel.crossTarget.setScale(0);
            this.bobWalking && (this.bobWalking = !1, this._bobSteps.dispose());
            this._bobIdle = !0;
            this._idleTimer = 0;
            this.currentAction = "stay";
            this._moviePlayer.loop("_Idle", !1);
            this._moviePlayer.movie._value.set_position(0)
        },
        getY: function() {
            return this.bobSprite.y._value
        },
        removePlayer: function() {
            this.bobWalking && this._bobSteps.dispose()
        },
        __class__: kb
    });
    var lb =
        function(a) {
            this.rotateCoef = 0;
            this.direction = "left";
            h.call(this);
            this._ctx = a
        };
    f.BobMenu = lb;
    lb.__name__ = ["BobMenu"];
    lb.__super__ = h;
    lb.prototype = t(h.prototype, {
        get_name: function() {
            return "BobMenu_31"
        },
        onAdded: function() {
            this._spriteBob = new i(this._ctx.pack.getTexture("bobRopeJump"));
            this.owner.add(this._spriteBob);
            this._spriteBob.setXY(0.9 * l._platform.getStage().get_width(), 0.05 * l._platform.getStage().get_height());
            this._spriteBob.setAnchor(510, 0);
            this._spriteBob.setScale(this._ctx.gameScale)
        },
        onUpdate: function() {
            if ("left" ==
                this.direction) {
                var a = this._spriteBob.rotation;
                a.set__(a._value - 0.03);
                this.rotateCoef += 1
            }
            "right" == this.direction && (a = this._spriteBob.rotation, a.set__(a._value + 0.03), this.rotateCoef += 1);
            160 <= this.rotateCoef && (this.direction = "left" == this.direction ? "right" : "left", this.rotateCoef = 0)
        },
        __class__: lb
    });
    var mb = function(a, b, c, d, j) {
        this._isBalloonShow = this._firstShowScreen = this._isUsed = !1;
        h.call(this);
        this._ctx = b;
        this._stairName = a;
        this._x = c * this._ctx.gameScale;
        this._y = d * this._ctx.gameScale;
        this._saveCabinId =
            j
    };
    f.ChargeBase = mb;
    mb.__name__ = ["ChargeBase"];
    mb.__super__ = h;
    mb.prototype = t(h.prototype, {
        get_name: function() {
            return "ChargeBase_6"
        },
        onAdded: function() {
            var a;
            a = this._ctx.pack.getTexture("gameObjects/SavePoint");
            this._spriteDoor = k.instance(this.owner._compMap.Sprite_0, i);
            null == this._spriteDoor && this.owner.add(this._spriteDoor = new i(a));
            this._spriteDoor.texture = a;
            this._spriteDoor.setScale(this._ctx.gameScale);
            this._spriteDoor.setXY(this._x, this._y);
            this._spriteDoor.centerAnchor();
            this._light = new i(this._ctx.pack.getTexture("gameObjects/SavePointLight"));
            this._light.setScale(this._ctx.gameScale);
            this._light.setXY(this._x + 3 * this._ctx.currentScaleCoef, this._y);
            this._light.centerAnchor();
            this._topActive = new i(this._ctx.pack.getTexture("gameObjects/SavePointTop"));
            this._topActive.setScale(this._ctx.gameScale);
            this._topActive.setXY(this._x + 2 * this._ctx.currentScaleCoef, this._y - 23 * this._ctx.currentScaleCoef);
            this._topActive.centerAnchor();
            this._light.set_visible(!1);
            this._topActive.set_visible(!1);
            this.light = (new g).add(this._light);
            this._ctx.currentLevel._screensLayer.addChild(this.light);
            this.top = (new g).add(this._topActive);
            this._ctx.currentLevel._lightsLayer.addChild(this.top)
        },
        onUpdate: function() {
            var a = this;
            this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            this.isStairFind = !1;
            if (Math.abs(this._spriteDoor.x._value - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) <
                15 * this._ctx.currentScaleCoef && Math.abs(this._spriteDoor.y._value - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && !this._ctx.kickFirst && !this._ctx.currentLevel.player._compMap.BobHero_34._bobGoToSave && !this._isUsed && (this.isStairFind = !0, !1 == this._isBalloonShow)) {
                this._isBalloonShow = !0;
                1 == this._ctx.currentLevelNumber && 0 == this._ctx.currentLevel.tutor.tipsActivate[5] && this._ctx.currentLevel.tutor.showTip(6);
                this._ctx.currentLevel._currentStairNumber = this.groupID;
                var b = new i(this._ctx.pack.getTexture("BalloonSave"));
                this._currentBalloon = (new g).add(b);
                this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon);
                b.setScale(this._ctx.gameScale);
                b.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
                !1 == this._firstShowScreen && (this._firstShowScreen = !0, 8 == this._ctx.currentLevelNumber && 2 == this._ctx.currentLevelPart && 1 == this._ctx.currentLevel.tutor.tipsActivate[9] &&
                    this._ctx.currentLevel.tutor.closeTip(10), this.ShowSaveMessage());
                b.get_pointerDown().connect(function() {
                    a.ShowSaveMessage()
                })
            }!1 == this.isStairFind && null != this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose())
        },
        ShowSaveMessage: function() {
            this._topActive.set_visible(!0);
            this._ctx.currentLevel.player._compMap.BobHero_34.changeAction("stay", this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef,
                this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            this._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = this.owner;
            this._ctx.currentLevel.player._compMap.BobHero_34._bobGoToSave = !0;
            this._ctx.currentLevel.showSaveMessage(this._x + 2 * this._ctx.currentScaleCoef, this._saveCabinId);
            null != this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose())
        },
        GotoSavePoint: function() {
            this._isUsed =
                this._firstShowScreen = !0;
            this._ctx.currentLevel._lightsLayer.removeChild(this.top);
            this._ctx.currentLevel._screensLayer.addChild(this.top);
            this._light.set_visible(!0);
            this._topActive.set_visible(!0);
            this._spriteDoor.texture = this._ctx.pack.getTexture("gameObjects/SavePointActive")
        },
        CloseSaveMessage: function() {
            this._topActive.set_visible(!1)
        },
        OutSavePoint: function() {
            this._ctx.currentLevel._screensLayer.removeChild(this.top);
            this._ctx.currentLevel._objectsLayer.addChild(this.top);
            this._light.set_visible(!1)
        },
        getX: function() {
            return this._x + 4 * this._ctx.currentScaleCoef
        },
        getY: function() {
            return this._y
        },
        __class__: mb
    });
    var nb = function(a, b, c, d, j, m) {
        this.isUsed = this._isBalloonShow = !1;
        h.call(this);
        this._ctx = a;
        this._x = b * this._ctx.gameScale;
        this._y = c * this._ctx.gameScale;
        this.doorName = d;
        this._passcode = j;
        this._objId = m;
        this.seeIt = !1
    };
    f.Codepad = nb;
    nb.__name__ = ["Codepad"];
    nb.__super__ = h;
    nb.prototype = t(h.prototype, {
        get_name: function() {
            return "Codepad_10"
        },
        onAdded: function() {
            var a = this._ctx.pack.getTexture("gameObjects/codepanel");
            this._spritePadlock = k.instance(this.owner._compMap.Sprite_0, i);
            null == this._spritePadlock && this.owner.add(this._spritePadlock = new i(a));
            this._spritePadlock.texture = a;
            this._spritePadlock.setScale(this._ctx.gameScale);
            this._spritePadlock.setXY(this._x, this._y);
            this._spritePadlock.centerAnchor();
            if (!this._ctx.goNextPart) {
                1 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave1);
                2 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave2);
                3 == this._ctx.currentLevelPart &&
                    (this.objectsForSave = this._ctx.objectsForSave3);
                for (var a = 0, b = this.objectsForSave.length; a < b;) {
                    if (this._objId == this.objectsForSave[a].eId) {
                        this.deactivatePad();
                        break
                    }++a
                }
            }
        },
        onUpdate: function() {
            var a = this;
            this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            this.isStairFind = !1;
            if (Math.abs(this._spritePadlock.x._value - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 15 * this._ctx.currentScaleCoef && Math.abs(this._spritePadlock.y._value - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && !this._ctx.kickFirst && !this._ctx.isGameEnd && (this.isStairFind = !0, !1 == this._isBalloonShow && !this.isUsed)) {
                this._isBalloonShow = !0;
                var b = new i(this._ctx.pack.getTexture("BalloonCode"));
                this._currentBalloon = (new g).add(b);
                this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon);
                b.setScale(this._ctx.gameScale);
                b.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 10 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
                b.get_pointerDown().connect(function() {
                    2 == a._ctx.currentLevelNumber && 1 == a._ctx.currentLevel.tutor.tipsActivate[7] && a._ctx.currentLevel.tutor.closeTip(8);
                    4 == a._ctx.currentLevelNumber && 1 == a._ctx.currentLevel.tutor.tipsActivate[8] && a._ctx.currentLevel.tutor.closeTip(9);
                    a._ctx.currentLevel.player._compMap.BobHero_34.changeAction("stay",
                        a._ctx.currentLevel.player._compMap.Sprite_0.x._value, a._ctx.currentLevel.player._compMap.Sprite_0.y._value);
                    a._ctx.currentLevel.showCodePanel(a.doorName, a._passcode);
                    a._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = a.owner;
                    a._ctx.currentLevel.player._compMap.BobHero_34.currentBalloon = a._currentBalloon
                })
            }!1 == this.isStairFind && null != this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose())
        },
        removeBallon: function() {
            null !=
                this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose())
        },
        getPass: function() {
            return this._passcode
        },
        deactivatePad: function() {
            this.isUsed = !0;
            this._ctx.currentLevel.FindAndOpenDoor(this.doorName)
        },
        CodePadDone: function() {
            this._ctx.addObjectsToSave(new ba(this._objId));
            this.deactivatePad()
        },
        __class__: nb
    });
    var Sa = function(a, b, c) {
        this._factorY = 0.8;
        this._factorX = 0.4;
        this._speedX = this._speedY = 0;
        this._isRight = !0;
        h.call(this);
        this._ctx = a;
        this._x = b;
        this._y = c;
        this._speedX = (30 * Math.random() - 15) * a.gameScale;
        this._speedY = -((20 * Math.random() + 10) * a.gameScale);
        this._factorX *= a.gameScale;
        this._factorY *= a.gameScale
    };
    f.Coin = Sa;
    Sa.__name__ = ["Coin"];
    Sa.__super__ = h;
    Sa.prototype = t(h.prototype, {
        get_name: function() {
            return "Coin_33"
        },
        onAdded: function() {
            var a = this,
                b = new V(this._ctx.pack, "effectsAnim");
            this._moviePlayer = new T(b);
            this.owner.add(this._moviePlayer);
            this._coin = new q;
            this.owner.add(this._coin);
            this._coin.setScale(this._ctx.gameScale);
            this._coin.setXY(this._x, this._y);
            this._coin.centerAnchor();
            this._moviePlayer.loop("_CoinRotate", !0);
            this.uiSpriteScript = new oa;
            this.uiSpriteScript.run(new pa(new qa([new ra(0.01), new sa(function() {
                a.coinMove()
            })])));
            this.owner.add(this.uiSpriteScript)
        },
        onUpdate: function() {},
        coinMove: function() {
            if (this._isRight) {
                var a = this._coin.x;
                a.set__(a._value + this._speedX);
                630 <= this._coin.x._value && (this._isRight = !1)
            } else a = this._coin.x, a.set__(a._value - this._speedX);
            a = this._coin.y;
            a.set__(a._value + this._speedY);
            this._speedY += this._factorY; - 10 > this._coin.y._value && (this._speedY = 5 * this._ctx.gameScale);
            this._speedY > 15 * this._ctx.gameScale && (this._speedY = 15 * this._ctx.gameScale);
            this._coin.y._value > 960 * this._ctx.gameMagnify && this.destroy()
        },
        destroy: function() {
            this.owner.remove(this.uiSpriteScript);
            this.owner.disposeChildren();
            this.owner.dispose()
        },
        __class__: Sa
    });
    var P = function(a, b) {
        b = b.split("u").join("");
        this.r = RegExp(a, b)
    };
    f.EReg = P;
    P.__name__ = ["EReg"];
    P.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex =
                0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        matched: function(a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a];
            throw new o("EReg::matched");
        },
        matchedPos: function() {
            if (null == this.r.m) throw new o("No string matched");
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        split: function(a) {
            return a.replace(this.r, "#__delim__#").split("#__delim__#")
        },
        __class__: P
    };
    var ob = function(a, b, c, d, j, m) {
        this._bobOut = !1;
        this._timerStop = 0.5;
        this._timer = 0;
        this._isBalloonShow = this._bobMoveElevator = !1;
        this._currentBalloon = null;
        h.call(this);
        this._ctx = a;
        this._x = (b - 5) * this._ctx.gameScale;
        this._y = c * this._ctx.gameScale;
        this.groupID = d;
        this.isDoor = j;
        this.doorName = m
    };
    f.Elevator = ob;
    ob.__name__ = ["Elevator"];
    ob.__super__ = h;
    ob.prototype = t(h.prototype, {
        get_name: function() {
            return "Elevator_14"
        },
        onAdded: function() {
            var a;
            a = this._ctx.pack.getTexture("gameObjects/elevatorBack");
            this._elevatorBack = new i(a);
            this.owner.addChild((new g).add(this._elevatorBack));
            this._elevatorBack.setScale(this._ctx.gameScale);
            this._elevatorBack.setXY(this._x +
                4 * this._ctx.currentScaleCoef, this._y);
            this._elevatorBack.centerAnchor();
            a = this._ctx.pack.getTexture("BobElev");
            this._bobElev = new i(a);
            this.owner.addChild((new g).add(this._bobElev));
            this._bobElev.setScale(this._ctx.gameScale);
            this._bobElev.setXY(this._x + 3 * this._ctx.currentScaleCoef, this._y);
            this._bobElev.centerAnchor();
            this._bobElev.set_visible(!1);
            a = this._ctx.pack.getTexture("gameObjects/elevatorLeftDoor");
            this._leftDoor = new i(a);
            this.owner.addChild((new g).add(this._leftDoor));
            this._leftDoor.setScale(this._ctx.gameScale);
            this._leftDoor.setXY(this._elevatorBack.x._value - 0.5 * (this._leftDoor.texture.get_width() + 2) * this._ctx.currentScaleCoef, this._elevatorBack.y._value);
            this._leftDoor.setAnchor(0, 0.5 * this._leftDoor.texture.get_height());
            a = this._ctx.pack.getTexture("gameObjects/elevatorRightDoor");
            this._rightDoor = new i(a);
            this.owner.addChild((new g).add(this._rightDoor));
            this._rightDoor.setScale(this._ctx.gameScale);
            this._rightDoor.setXY(this._elevatorBack.x._value + 0.5 * (this._rightDoor.texture.get_width() - 2) * this._ctx.currentScaleCoef,
                this._elevatorBack.y._value);
            this._rightDoor.setAnchor(this._rightDoor.texture.get_width(), 0.5 * this._rightDoor.texture.get_height())
        },
        onUpdate: function(a) {
            var b = this;
            this._bobOut && (this._timer += a, this._timer >= this._timerStop && (this._timer = 0, this._bobOut = !1, this._bobElev.set_visible(!1), this._ctx.currentLevel.player._compMap.Sprite_0.set_visible(!0), this._ctx.currentLevel.player._compMap.BobHero_34.changeAction("liftOut"), this.isDoor = "open"));
            this._bobMoveElevator && (this._timer += a, this._timer >= this._timerStop &&
                (this._timer = 0, this._bobMoveElevator = !1, this._bobElev.set_visible(!1), this._ctx.currentLevel.FindAndSendBobToElevator(this._elevatorBack.x._value), this.isDoor = "open"));
            this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            this.isStairFind = !1;
            Math.abs(this._elevatorBack.x._value -
                this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 15 * this._ctx.currentScaleCoef && Math.abs(this._elevatorBack.y._value - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && "open" == this.isDoor && !this._ctx.currentLevel.player._compMap.BobHero_34._bobMoveElevator && !this._ctx.currentLevel.player._compMap.BobHero_34._bobMoveElevator && (this.isStairFind = !0, !1 == this._isBalloonShow && (0.1 < this._leftDoor.scaleX._value && (this._ctx.pack.getSound("sounds/elevator_open").play(),
                this._leftDoor.scaleX.animate(this._ctx.currentScaleCoef, 0, 0.5, n.bounceOut), this._rightDoor.scaleX.animate(this._ctx.currentScaleCoef, 0, 0.5, n.bounceOut)), this._isBalloonShow = !0, this._ctx.currentLevel._currentStairNumber = this.groupID, a = new i(this._ctx.pack.getTexture("BalloonStair")), this._currentBalloon = (new g).add(a), this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon), a.setScale(this._ctx.gameScale), a.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef,
                this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef), a.get_pointerDown().connect(function() {
                b._ctx.currentLevel.player._compMap.BobHero_34._bobGoToElevator = !0;
                b._ctx.currentLevel.crossTarget.scaleX.animate(b._ctx.gameScale, 0, 0.2, n.sineOut);
                b._ctx.currentLevel.crossTarget.scaleY.animate(b._ctx.gameScale, 0, 0.2, n.sineOut);
                b._ctx.currentLevel.player._compMap.BobHero_34.changeAction("liftIn", b._elevatorBack.x._value, b._ctx.currentLevel.player._compMap.Sprite_0.y._value);
                b._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = b.owner;
                b._ctx.currentLevel._bulkheadLayer.removeChild(b._currentBalloon);
                b._currentBalloon.dispose();
                b._currentBalloon = null
            })));
            !1 == this.isStairFind && null != this._currentBalloon && (this._ctx.pack.getSound("sounds/elevator_close").play(), this._leftDoor.scaleX.animate(0, this._ctx.gameScale, 0.5, n.bounceOut), this._rightDoor.scaleX.animate(0, this._ctx.gameScale, 0.5, n.bounceOut), this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon),
                this._currentBalloon.dispose(), this._currentBalloon = null)
        },
        bobInLift: function() {
            this._ctx.pack.getSound("sounds/elevator_close").play();
            this.isDoor = "close";
            this._bobMoveElevator = !0;
            this._isBalloonShow = !1;
            this._bobElev.set_visible(!0);
            this._leftDoor.scaleX.animate(0, this._ctx.gameScale, 0.5, n.bounceOut);
            this._rightDoor.scaleX.animate(0, this._ctx.gameScale, 0.5, n.bounceOut);
            this._ctx.currentLevel.SetPlayerBack()
        },
        closeDoor: function() {
            this.isDoor = "close"
        },
        openDoor: function() {
            this._ctx.pack.getSound("sounds/elevator_open").play();
            this._bobElev.set_visible(!0);
            this._leftDoor.scaleX.animate(this._ctx.gameScale, 0, 0.5, n.bounceOut);
            this._rightDoor.scaleX.animate(this._ctx.gameScale, 0, 0.5, n.bounceOut);
            this._bobOut = !0;
            this._timer = 0
        },
        openDoors: function() {
            this.isDoor = "open";
            this.doorName = "none"
        },
        __class__: ob
    });
    var ba = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        this.eId = a;
        this.ePosX = b;
        this.uBox = c
    };
    f.EnemySet = ba;
    ba.__name__ = ["EnemySet"];
    ba.prototype = {
        __class__: ba
    };
    var Fa = function(a, b, c, d) {
        this._inoutSet = !1;
        this._arrowsTimerStop = 0.3;
        this._arrowsTimer = 0;
        this._isBalloonShow = !1;
        h.call(this);
        this._ctx = a;
        this._x = b * this._ctx.gameScale;
        this._y = c * this._ctx.gameScale;
        this._targetX = (b + 5) * this._ctx.gameScale;
        this._targetY = (c + 5) * this._ctx.gameScale;
        this.isDoor = "close";
        this._gType = d
    };
    f.ExitTarget = Fa;
    Fa.__name__ = ["ExitTarget"];
    Fa.__super__ = h;
    Fa.prototype = t(h.prototype, {
        get_name: function() {
            return "ExitTarget_15"
        },
        onAdded: function() {
            this._innerScale = this._ctx.isSquare ? this._ctx.gameScaleSquare : this._ctx.gameScale;
            this._arrow1 = new i(this._ctx.pack.getTexture("gameObjects/ExitTarget"));
            this.owner.addChild((new g).add(this._arrow1));
            this._arrow1.setScale(this._ctx.gameScale);
            this._arrow1.setXY(this._x, this._y);
            this._arrow1.centerAnchor();
            this._arrow2 = new i(this._ctx.pack.getTexture("gameObjects/ExitTarget"));
            this.owner.addChild((new g).add(this._arrow2));
            this._arrow2.setScale(this._ctx.gameScale);
            this._arrow2.setXY(this._x + 24 * this._ctx.currentScaleCoef, this._y);
            this._arrow2.centerAnchor();
            this._arrow2.scaleX.set__(-1 * Math.abs(this._arrow2.scaleX._value));
            this._arrow3 = new i(this._ctx.pack.getTexture("gameObjects/ExitTarget2"));
            this.owner.addChild((new g).add(this._arrow3));
            this._arrow3.setScale(this._ctx.gameScale);
            this._arrow3.setXY(this._x, this._y + 24 * this._ctx.currentScaleCoef);
            this._arrow3.centerAnchor();
            this._arrow4 = new i(this._ctx.pack.getTexture("gameObjects/ExitTarget2"));
            this.owner.addChild((new g).add(this._arrow4));
            this._arrow4.setScale(this._ctx.gameScale);
            this._arrow4.setXY(this._x + 24 * this._ctx.currentScaleCoef, this._y + 24 * this._ctx.currentScaleCoef);
            this._arrow4.centerAnchor();
            this._arrow4.scaleX.set__(-1 * Math.abs(this._arrow4.scaleX._value));
            this._arrow1.set_pointerEnabled(!1);
            this._arrow2.set_pointerEnabled(!1);
            this._arrow3.set_pointerEnabled(!1);
            this._arrow4.set_pointerEnabled(!1);
            10 == this._ctx.currentLevelNumber && 3 == this._ctx.currentLevelPart && (this._arrow1.set_visible(!1), this._arrow2.set_visible(!1), this._arrow3.set_visible(!1), this._arrow4.set_visible(!1))
        },
        onUpdate: function(a) {
            0 != (this._arrow1._flags & 2) && (this._arrowsTimer += a, this._arrowsTimer >= this._arrowsTimerStop && (this._arrowsTimer = 0, this._inoutSet ? (this._inoutSet = !1, this._arrow1.x.animate(this._arrow1.x._value,
                this._arrow1.x._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow1.y.animate(this._arrow1.y._value, this._arrow1.y._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow2.x.animate(this._arrow2.x._value, this._arrow2.x._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow2.y.animate(this._arrow2.y._value, this._arrow2.y._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow3.x.animate(this._arrow3.x._value, this._arrow3.x._value + 4 * this._innerScale,
                this._arrowsTimerStop, n.linear), this._arrow3.y.animate(this._arrow3.y._value, this._arrow3.y._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow4.x.animate(this._arrow4.x._value, this._arrow4.x._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow4.y.animate(this._arrow4.y._value, this._arrow4.y._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear)) : (this._inoutSet = !0, this._arrow1.setXY(this._x, this._y), this._arrow2.setXY(this._x + 24 * this._ctx.currentScaleCoef, this._y),
                this._arrow3.setXY(this._x, this._y + 24 * this._ctx.currentScaleCoef), this._arrow4.setXY(this._x + 24 * this._ctx.currentScaleCoef, this._y + 24 * this._ctx.currentScaleCoef), this._arrow1.x.animate(this._arrow1.x._value, this._arrow1.x._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow1.y.animate(this._arrow1.y._value, this._arrow1.y._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow2.x.animate(this._arrow2.x._value, this._arrow2.x._value + 4 * this._innerScale, this._arrowsTimerStop,
                    n.linear), this._arrow2.y.animate(this._arrow2.y._value, this._arrow2.y._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow3.x.animate(this._arrow3.x._value, this._arrow3.x._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow3.y.animate(this._arrow3.y._value, this._arrow3.y._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow4.x.animate(this._arrow4.x._value, this._arrow4.x._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow4.y.animate(this._arrow4.y._value,
                    this._arrow4.y._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear))), this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef), this.isStairFind = !1, Math.abs(this._targetX - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 15 * this._ctx.currentScaleCoef && Math.abs(this._targetY -
                this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && "close" == this.isDoor && !this._ctx.kickFirst && !this._ctx.isGameEnd && (this.isStairFind = !0, !1 == this._isBalloonShow && !this._ctx.currentLevel.player._compMap.BobHero_34._bobGoToStair && 0 != (this._arrow1._flags & 2) && this.openDoor()))
        },
        showTarget: function() {
            this._arrow1.set_visible(!0);
            this._arrow2.set_visible(!0);
            this._arrow3.set_visible(!0);
            this._arrow4.set_visible(!0)
        },
        hideTarget: function() {
            this._arrow1.set_visible(!1);
            this._arrow2.set_visible(!1);
            this._arrow3.set_visible(!1);
            this._arrow4.set_visible(!1)
        },
        openDoor: function() {
            this.isDoor = "open";
            "gameEnd" == this._gType && (this._ctx.currentLevel.calcStars(), this._ctx.currentLevel.levelWin.set__(!0))
        },
        __class__: Fa
    });
    var pb = function(a, b, c) {
        this.talking = this.smiling = !1;
        this.talkTimer = this.alertTimer = 0;
        h.call(this);
        this._ctx = a;
        this._x = b * a.gameScale;
        this._y = c * a.gameScale
    };
    f.FinalMonitorScreen = pb;
    pb.__name__ = ["FinalMonitorScreen"];
    pb.__super__ = h;
    pb.prototype = t(h.prototype, {
        get_name: function() {
            return "FinalMonitorScreen_8"
        },
        onAdded: function() {
            var a = new V(this._ctx.pack, "effectsAnim");
            this._moviePlayer = new T(a);
            this.owner.add(this._moviePlayer);
            this.enemySprite = new q;
            this.owner.add(this.enemySprite);
            this.enemySprite.setScale(this._ctx.gameScale);
            this.enemySprite.setXY(this._x, this._y);
            this.alertLight1 = new i(this._ctx.pack.getTexture("gameObjects/AlertLightOn"));
            this.alertLight2 = new i(this._ctx.pack.getTexture("gameObjects/AlertLightOn"));
            this.owner.addChild((new g).add(this.alertLight1));
            this.owner.addChild((new g).add(this.alertLight2));
            this.alertLight1.centerAnchor();
            this.alertLight2.centerAnchor();
            this.alertLight1.setXY(-118, -2);
            this.alertLight2.setXY(119, -2);
            this.alertLight1.set_visible(!1);
            this.alertLight2.set_visible(!1)
        },
        onUpdate: function(a) {
            this.talking && (this.talkTimer += a, 7 < this.talkTimer && (this.talking = !1, this.smiling = !0, this.changeAction("_HeadLaugh")));
            if (0 != (this.alertLight1._flags & 2) || 0 != (this.alertLight2._flags & 2)) this.alertTimer += a, 1 < this.alertTimer && (this.alertTimer =
                0, 0 != (this.alertLight1._flags & 2) ? (this.alertLight1.set_visible(!1), this.alertLight2.set_visible(!0)) : 0 != (this.alertLight2._flags & 2) && (this.alertLight2.set_visible(!1), this.alertLight1.set_visible(!0)))
        },
        changeAction: function(a) {
            this.enemySprite.set_visible(!0);
            this._moviePlayer.loop(a, !0);
            this._ctx.pack.getSound("sounds/boss_tv_voice1").play()
        },
        stopAction: function() {
            this.enemySprite.set_visible(!1)
        },
        __class__: pb
    });
    var qb = function(a, b, c) {
        h.call(this);
        this._ctx = a;
        this._x = b;
        this._y = c
    };
    f.Finger = qb;
    qb.__name__ = ["Finger"];
    qb.__super__ = h;
    qb.prototype = t(h.prototype, {
        get_name: function() {
            return "Finger_24"
        },
        onAdded: function() {
            var a = new V(this._ctx.pack, "effectsAnim");
            this._moviePlayer = new T(a);
            this.owner.add(this._moviePlayer);
            this.enemySprite = new q;
            this.owner.add(this.enemySprite);
            this.enemySprite.setXY(this._x, this._y);
            this.enemySprite.set_pointerEnabled(!1)
        },
        changeAction: function(a) {
            this.enemySprite.set_visible(!0);
            this._moviePlayer.loop(a, !0)
        },
        stopAction: function() {
            this.enemySprite.set_visible(!1)
        },
        setCoor: function(a,
            b) {
            this.enemySprite.setXY(a, b)
        },
        __class__: qb
    });
    var rb = function(a, b, c, d) {
        this._movieTimerStop = 1;
        this._movieTimer = 0;
        this._isBalloonShow = !1;
        h.call(this);
        this._ctx = b;
        this._stairName = a;
        this._x = c * this._ctx.gameScale;
        this._y = d * this._ctx.gameScale;
        this.isDoor = "close";
        this._targetX = c - 20;
        this._targetY = d - 20
    };
    f.FinishDoor = rb;
    rb.__name__ = ["FinishDoor"];
    rb.__super__ = h;
    rb.prototype = t(h.prototype, {
        get_name: function() {
            return "FinishDoor_35"
        },
        onAdded: function() {
            var a = new i(this._ctx.pack.getTexture("gameObjects/elevatorBack"));
            a.setScale(this._ctx.gameScale);
            a.setXY(this._x, this._y);
            a.centerAnchor();
            this._ctx.currentLevel._backLayer.addChild((new g).add(a));
            this._bobElev = new i(this._ctx.pack.getTexture("BobElev"));
            this.owner.addChild((new g).add(this._bobElev));
            this._bobElev.setScale(this._ctx.gameScale);
            this._bobElev.setXY(this._x + 3 * this._ctx.currentScaleCoef, this._y);
            this._bobElev.centerAnchor();
            this._bobElev.set_visible(!1);
            this._spriteDoor = new i(this._ctx.pack.getTexture("gameObjects/door1"));
            this.owner.addChild((new g).add(this._spriteDoor));
            this._spriteDoor.setScale(this._ctx.gameScale);
            this._spriteDoor.setXY(this._x, this._y);
            this._spriteDoor.centerAnchor();
            this._ctx.currentLevel.exitTarget = new Fa(this._ctx, this._targetX, this._targetY, "exit");
            this._ctx.currentLevel._lightsLayer.addChild((new g).add(this._ctx.currentLevel.exitTarget))
        },
        onUpdate: function(a) {
            var b = this;
            0 != (this._bobElev._flags & 2) && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this._ctx.currentLevel.levelWin.set__(!0)));
            this._isBalloonShow &&
                null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            this.isStairFind = !1;
            Math.abs(this._spriteDoor.x._value - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 15 * this._ctx.currentScaleCoef && Math.abs(this._spriteDoor.y._value - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 *
                this._ctx.currentScaleCoef && "close" == this.isDoor && !this._ctx.kickFirst && !this._ctx.isGameEnd && (this.isStairFind = !0, !1 == this._isBalloonShow && !this._ctx.currentLevel.player._compMap.BobHero_34._bobGoToStair && (this._isBalloonShow = !0, a = new i(this._ctx.pack.getTexture("BalloonStair")), this._currentBalloon = (new g).add(a), this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon), a.setScale(this._ctx.gameScale), a.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef,
                    this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef), a.get_pointerDown().connect(function() {
                    b._ctx.currentLevel.calcStars();
                    b._ctx.currentLevel.exitTarget.hideTarget();
                    b._ctx.currentLevel.player._compMap.BobHero_34._bobBusy = !0;
                    b._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = b.owner;
                    b.openDoor();
                    null != b._currentBalloon && (b._isBalloonShow = !1, b._ctx.currentLevel._bulkheadLayer.removeChild(b._currentBalloon), b._currentBalloon.dispose())
                })));
            !1 == this.isStairFind &&
                null != this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose())
        },
        openDoor: function() {
            this._ctx.isPartFinishDoor = !0;
            this.isDoor = "open";
            this._spriteDoor.x.animate(this._x, this._x + 40 * this._ctx.currentScaleCoef, 0.5, n.linear);
            this._ctx.currentLevel.player._compMap.BobHero_34.changeAction("yes", this._x, this._ctx.currentLevel.player._compMap.Sprite_0.y._value);
            this._ctx.pack.getSound("sounds/final_door_open").play(1)
        },
        closeDoor: function() {
            this._ctx.currentLevel.player._compMap.Sprite_0.set_visible(!1);
            this._bobElev.set_visible(!0);
            this._spriteDoor.x.animate(this._x + 40 * this._ctx.currentScaleCoef, this._x, 0.5, n.linear);
            this._ctx.pack.getSound("sounds/final_door_close").play(1)
        },
        __class__: rb
    });
    var sb = function(a, b, c, d, j) {
        this._inoutSet = !1;
        this._arrowsTimerStop = 0.3;
        this._arrowsTimer = 0;
        this._movieTimerStop = 2;
        this._movieTimer = 0;
        this._isBalloonShow = !1;
        h.call(this);
        this._ctx = a;
        this._x = b * this._ctx.gameScale;
        this._y = c * this._ctx.gameScale;
        this.isDoor = "close";
        this._targetX = (b + 5) * this._ctx.gameScale;
        this._targetY = (c + 5) * this._ctx.gameScale;
        this._gType = d;
        this._objId = j
    };
    f.GadgetTarget = sb;
    sb.__name__ = ["GadgetTarget"];
    sb.__super__ = h;
    sb.prototype = t(h.prototype, {
        get_name: function() {
            return "GadgetTarget_9"
        },
        onAdded: function() {
            this._innerScale = this._ctx.isSquare ? this._ctx.gameScaleSquare : this._ctx.gameScale;
            this._arrow1 = new i(this._ctx.pack.getTexture("gameObjects/GadgetTarget"));
            this.owner.addChild((new g).add(this._arrow1));
            this._arrow1.setScale(this._ctx.gameScale);
            this._arrow1.setXY(this._x, this._y);
            this._arrow1.centerAnchor();
            this._arrow2 = new i(this._ctx.pack.getTexture("gameObjects/GadgetTarget"));
            this.owner.addChild((new g).add(this._arrow2));
            this._arrow2.setScale(this._ctx.gameScale);
            this._arrow2.setXY(this._x + 24 * this._ctx.currentScaleCoef, this._y);
            this._arrow2.centerAnchor();
            this._arrow2.scaleX.set__(-1 * Math.abs(this._arrow2.scaleX._value));
            this._arrow3 = new i(this._ctx.pack.getTexture("gameObjects/GadgetTarget2"));
            this.owner.addChild((new g).add(this._arrow3));
            this._arrow3.setScale(this._ctx.gameScale);
            this._arrow3.setXY(this._x, this._y + 24 * this._ctx.currentScaleCoef);
            this._arrow3.centerAnchor();
            this._arrow4 = new i(this._ctx.pack.getTexture("gameObjects/GadgetTarget2"));
            this.owner.addChild((new g).add(this._arrow4));
            this._arrow4.setScale(this._ctx.gameScale);
            this._arrow4.setXY(this._x + 24 * this._ctx.currentScaleCoef, this._y + 24 * this._ctx.currentScaleCoef);
            this._arrow4.centerAnchor();
            this._arrow4.scaleX.set__(-1 * Math.abs(this._arrow4.scaleX._value));
            if (!this._ctx.goNextPart) {
                1 ==
                    this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave1);
                2 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave2);
                3 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave3);
                for (var a = 0, b = this.objectsForSave.length; a < b;) {
                    if (this._objId == this.objectsForSave[a].eId) {
                        this.GetGadget();
                        break
                    }++a
                }
            }
            10 == this._ctx.currentLevelNumber && (this._arrow1.set_visible(!1), this._arrow2.set_visible(!1), this._arrow3.set_visible(!1), this._arrow4.set_visible(!1))
        },
        onUpdate: function(a) {
            this._arrowsTimer += a;
            this._arrowsTimer >= this._arrowsTimerStop && (this._arrowsTimer = 0, this._inoutSet ? (this._inoutSet = !1, this._arrow1.x.animate(this._arrow1.x._value, this._arrow1.x._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow1.y.animate(this._arrow1.y._value, this._arrow1.y._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow2.x.animate(this._arrow2.x._value, this._arrow2.x._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow2.y.animate(this._arrow2.y._value,
                this._arrow2.y._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow3.x.animate(this._arrow3.x._value, this._arrow3.x._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow3.y.animate(this._arrow3.y._value, this._arrow3.y._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow4.x.animate(this._arrow4.x._value, this._arrow4.x._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow4.y.animate(this._arrow4.y._value, this._arrow4.y._value - 4 * this._innerScale,
                this._arrowsTimerStop, n.linear)) : (this._inoutSet = !0, this._arrow1.setXY(this._x, this._y), this._arrow2.setXY(this._x + 24 * this._ctx.currentScaleCoef, this._y), this._arrow3.setXY(this._x, this._y + 24 * this._ctx.currentScaleCoef), this._arrow4.setXY(this._x + 24 * this._ctx.currentScaleCoef, this._y + 24 * this._ctx.currentScaleCoef), this._arrow1.x.animate(this._arrow1.x._value, this._arrow1.x._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow1.y.animate(this._arrow1.y._value, this._arrow1.y._value -
                4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow2.x.animate(this._arrow2.x._value, this._arrow2.x._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow2.y.animate(this._arrow2.y._value, this._arrow2.y._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow3.x.animate(this._arrow3.x._value, this._arrow3.x._value - 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow3.y.animate(this._arrow3.y._value, this._arrow3.y._value + 4 * this._innerScale, this._arrowsTimerStop,
                n.linear), this._arrow4.x.animate(this._arrow4.x._value, this._arrow4.x._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear), this._arrow4.y.animate(this._arrow4.y._value, this._arrow4.y._value + 4 * this._innerScale, this._arrowsTimerStop, n.linear)));
            "open" == this.isDoor && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this._ctx.currentLevel.closeNewGadget(), this.destroy()));
            this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0,
                i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            this.isStairFind = !1;
            Math.abs(this._targetX - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 15 * this._ctx.currentScaleCoef && Math.abs(this._targetY - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && "close" == this.isDoor && !this._ctx.kickFirst && !this._ctx.isGameEnd && (this.isStairFind = !0, !1 == this._isBalloonShow && !this._ctx.currentLevel.player._compMap.BobHero_34._bobGoToStair && 0 != (this._arrow1._flags & 2) && (this.openDoor(), this._arrow1.set_visible(!1), this._arrow2.set_visible(!1), this._arrow3.set_visible(!1), this._arrow4.set_visible(!1), this._isBalloonShow = !0, a = new i(this._ctx.pack.getTexture("BalloonGadget")), this._currentBalloon = (new g).add(a), this._ctx.currentLevel._screensLayer.addChild(this._currentBalloon), a.setScale(this._ctx.gameScale)));
            !1 == this.isStairFind && null != this._currentBalloon &&
                (this._isBalloonShow = !1, this._ctx.currentLevel._screensLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose())
        },
        GetGadget: function() {
            this.isDoor = "takeit";
            this._arrow1.set_visible(!1);
            this._arrow2.set_visible(!1);
            this._arrow3.set_visible(!1);
            this._arrow4.set_visible(!1);
            "lockpick" == this._gType && (this._ctx.haveLockpick = !0);
            "nippers" == this._gType && (this._ctx.haveNippers = !0);
            "hackerkit" == this._gType && (this._ctx.haveHackerKit = !0);
            "shocker" == this._gType && (this._ctx.haveShocker = !0);
            "setbox" ==
            this._gType && (this._ctx.haveBox = !0)
        },
        openDoor: function() {
            this.isDoor = "open";
            this._ctx.currentLevel.showNewGadget(this._gType);
            this._ctx.addObjectsToSave(new ba(this._objId));
            this._ctx.currentLevel.exitTarget.showTarget()
        },
        destroy: function() {
            this.isDoor = "destroy";
            this._ctx.currentLevel._screensLayer.removeChild(this._currentBalloon);
            this._currentBalloon.dispose();
            this.owner.disposeChildren();
            this.owner.dispose()
        },
        __class__: sb
    });
    var sc = function(a, b, c) {
        this.isPartFinishDoor = this.isRankShow = !1;
        this.totalBatteries =
            this.batteriesInLevel = this.levelTimer = this.levelTimerSave = this.batteryCollected1 = this.batteryCollected2 = this.batteryCollected3 = 0;
        this.goNextPart = this.kickFirst = !1;
        this.saveCabinNumber = 0;
        this.gridStep = 10;
        this.targetHeight = 960;
        this.targetWidth = 640;
        this.gameMagnify = 2;
        this.isSquare = !1;
        this.currentScaleCoef = this.gameScale = this.gameScaleSquare = 1;
        var d = this;
        this.pack = a;
        this.director = c;
        this.messages = Ta.parse(b.getFile("messages.ini").toString());
        this.interfaceFont = new Z(this.pack, "fonts/Interface");
        this.interfaceFont2 =
            new Z(this.pack, "fonts/Interface2");
        this.messagesFont = new Z(this.pack, "fonts/Messages");
        this.segmentFont = new Z(this.pack, "fonts/Segment");
        this.computerDark = new Z(this.pack, "fonts/ComputerDark");
        this.computerLight = new Z(this.pack, "fonts/ComputerLight");
        this.currentLevelNumber = 1;
        this._tutorialDone = !1;
        a = l._platform.getStage().get_width() / this.targetWidth;
        b = l._platform.getStage().get_height() / this.targetHeight;
        this.gameScale = Math.min(a, b);
        this.gameScaleSquare = Math.max(a, b);
        this.screenCoef = l._platform.getStage().get_height() /
            l._platform.getStage().get_width();
        this.isSquare = 1.5 < l._platform.getStage().get_height() / l._platform.getStage().get_width() ? !1 : !0;
        this.currentScaleCoef = this.gameScale;
        this.currentScaleCoef *= this.gameMagnify;
        this.centerCoefX = 0.5 * l._platform.getStage().get_width() - 0.5 * this.targetWidth * this.gameScale;
        this.centerCoefY = 0.5 * l._platform.getStage().get_height() - 0.5 * this.targetHeight * this.gameScale;
        this.currentLeveLSavePart = this.currentLevelPart = 1;
        this.resetSaveArrays();
        this.levelCodes = [];
        this.levelGuards = [];
        this.levelStars = [];
        this.timeArray = [];
        this.levelBatteryArray = [];
        this.levelsStatus = [];
        for (a = 0; 10 > a;) a++, this.levelStars.push(0);
        this.timeArray.push(80);
        this.timeArray.push(80);
        this.timeArray.push(85);
        this.timeArray.push(105);
        this.timeArray.push(115);
        this.timeArray.push(167);
        this.timeArray.push(180);
        this.timeArray.push(206);
        this.timeArray.push(189);
        this.timeArray.push(323);
        this.levelBatteryArray.push(8);
        this.levelBatteryArray.push(8);
        this.levelBatteryArray.push(8);
        this.levelBatteryArray.push(7);
        this.levelBatteryArray.push(7);
        this.levelBatteryArray.push(14);
        this.levelBatteryArray.push(16);
        this.levelBatteryArray.push(11);
        this.levelBatteryArray.push(14);
        this.levelBatteryArray.push(19);
        this.comixPlayed = this.musicPlayed = !1;
        l.volume.set__(1);
        this.loadGameData();
        e.init("bob_the_robber_3", "1.0.21", {}, {}, jb(this, this.callbackFunction));
        this.isTimerOn = !1;
        this.adsTimer = 300;
        this.timerEntity = new g;
        this.timerScript = new oa;
        this.timerScript.run(new pa(new qa([new ra(1), new sa(function() {
            d.isTimerOn && (d.adsTimer -= 1, 0 == d.adsTimer && (d.adsTimer =
                300, d.isTimerOn = !1))
        })])));
        this.timerEntity.add(this.timerScript)
    };
    f.GameContext = sc;
    sc.__name__ = ["GameContext"];
    sc.prototype = {
        callbackFunction: function() {
            null
        },
        loadGameData: function() {
            if (l._platform.getStorage().get_supported()) {
                for (var a = 1; 11 > a;) {
                    var b = a++;
                    null != l._platform.getStorage().get("level" + b) ? this.levelsStatus[b - 1] = l._platform.getStorage().get("level" + b) : (l._platform.getStorage().set("level" + b, 0), this.levelsStatus[b - 1] = 0);
                    null != l._platform.getStorage().get("levStars" + b) ? this.levelStars[b -
                        1] = l._platform.getStorage().get("levStars" + b) : (l._platform.getStorage().set("levStars" + b, 0), this.levelStars[b - 1] = 0)
                }
                this.totalBatteries = null != l._platform.getStorage().get("totalBatteries") ? l._platform.getStorage().get("totalBatteries") : 0;
                this.isRankShow = null != l._platform.getStorage().get("isRankShow") ? l._platform.getStorage().get("isRankShow") : !1
            }
            0 == this.levelsStatus[0] && (this.levelsStatus[0] = 1)
        },
        startTimer: function() {
            this.isTimerOn = !0
        },
        getTimerState: function() {
            return this.isTimerOn
        },
        saveGameData: function() {
            if (l._platform.getStorage().get_supported()) {
                l._platform.getStorage().set("level1",
                    this.levelsStatus[0]);
                for (var a = 1; 11 > a;) {
                    var b = a++;
                    l._platform.getStorage().set("level" + b, this.levelsStatus[b - 1]);
                    l._platform.getStorage().set("levStars" + b, this.levelStars[b - 1])
                }
                l._platform.getStorage().set("totalBatteries", this.totalBatteries)
            }
        },
        emptyGadgets: function() {
            this.haveBox = this.haveShocker = this.haveHackerKit = this.haveNippers = this.haveLockpick = !1
        },
        playMenuMusic: function() {
            this.musicPlayed || (this._menuMusic = this.pack.getSound("music/btb3_main_theme").loop(), this.musicPlayed = !0)
        },
        stopMenuMusic: function() {
            this.musicPlayed &&
                (this._menuMusic.dispose(), this.musicPlayed = !1)
        },
        playComixMusic: function() {
            this.comixPlayed || (this._comixMusic = this.pack.getSound("music/btb3_comix_theme").loop(), this.comixPlayed = !0)
        },
        stopComixMusic: function() {
            this.comixPlayed && (this._comixMusic.dispose(), this.comixPlayed = !1)
        },
        enterHomeScene: function() {
            this.director.unwindToScene(bd.create(this), null)
        },
        enterLevelMap: function(a) {
            null == a && (a = !0);
            this.levelCodes = [];
            this.director.unwindToScene(cd.create(this), a ? new tb(0.5, n.quadOut) : null);
            this.playMenuMusic()
        },
        enterPlayingScene: function() {
            this.levelTry = this.batteryCollected3 = this.batteryCollected2 = this.batteryCollected1 = 0;
            this.currentGameScene = ub.create(this);
            this.director.unwindToScene(this.currentGameScene, null);
            this.stopMenuMusic()
        },
        restartScene: function() {
            this.goNextPart = !1;
            this.currentGameScene = ub.create(this);
            this.director.unwindToScene(this.currentGameScene, null);
            this.stopMenuMusic()
        },
        loadNextPartOfScene: function() {
            this.goNextPart = !0;
            this.currentGameScene = ub.create(this);
            this.director.unwindToScene(this.currentGameScene,
                null)
        },
        showPrompt: function(a, b) {
            this.director.pushScene(dd.create(this, a, b))
        },
        showGameover: function(a, b) {
            this.director.pushScene(ed.create(this, a, b))
        },
        showCompelted: function(a, b) {
            this.pack.getSound("sounds/level_complete").play();
            this.director.pushScene(fd.create(this, a, b))
        },
        getStars: function(a, b) {
            var c;
            c = 100 * (1.1 * this.timeArray[b - 1] / a);
            return 99 < c ? 3 : 60 <= c && 99 >= c ? 2 : 20 <= c && 60 >= c ? 1 : 0
        },
        resetSaveArrays: function() {
            this.tempObjectsForSave = [];
            this.tempObjectsForSave2 = [];
            this.tempObjectsForSave3 = [];
            this.objectsForSave1 = [];
            this.objectsForSave2 = [];
            this.objectsForSave3 = [];
            this.currentLevelPart = 1;
            this.goNextPart = !1
        },
        addObjectsToSave: function(a) {
            1 == this.currentLevelPart && this.tempObjectsForSave.push(a);
            2 == this.currentLevelPart && this.tempObjectsForSave2.push(a);
            3 == this.currentLevelPart && this.tempObjectsForSave3.push(a)
        },
        refreshSaveArrays: function() {
            this.tempObjectsForSave = [];
            this.tempObjectsForSave2 = [];
            this.tempObjectsForSave3 = [];
            if (1 == this.currentLevelPart)
                for (var a = 0, b = this.objectsForSave1.length; a < b;) this.addObjectsToSave(new ba(this.objectsForSave1[a].eId,
                    this.objectsForSave1[a].ePosX, this.objectsForSave1[a].uBox)), ++a;
            if (2 == this.currentLevelPart) {
                a = 0;
                for (b = this.objectsForSave2.length; a < b;) this.addObjectsToSave(new ba(this.objectsForSave2[a].eId, this.objectsForSave2[a].ePosX, this.objectsForSave2[a].uBox)), ++a
            }
            if (3 == this.currentLevelPart) {
                a = 0;
                for (b = this.objectsForSave3.length; a < b;) this.addObjectsToSave(new ba(this.objectsForSave3[a].eId, this.objectsForSave3[a].ePosX, this.objectsForSave3[a].uBox)), ++a
            }
        },
        copyTempToSave: function() {
            this.currentLeveLSavePart =
                this.currentLevelPart;
            if (1 == this.currentLevelPart) {
                this.objectsForSave1 = [];
                for (var a = 0, b = this.tempObjectsForSave.length; a < b;) this.objectsForSave1.push(this.tempObjectsForSave[a]), ++a
            }
            if (2 == this.currentLevelPart) {
                this.objectsForSave2 = [];
                a = 0;
                for (b = this.tempObjectsForSave2.length; a < b;) this.objectsForSave2.push(this.tempObjectsForSave2[a]), ++a
            }
            if (3 == this.currentLevelPart) {
                this.objectsForSave3 = [];
                a = 0;
                for (b = this.tempObjectsForSave3.length; a < b;) this.objectsForSave3.push(this.tempObjectsForSave3[a]), ++a
            }
        },
        __class__: sc
    };
    var vb = function(a, b, c) {
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b;
        this.guardId = c;
        this.isCovered = !1
    };
    f.GuardOut = vb;
    vb.__name__ = ["GuardOut"];
    vb.prototype = {
        __class__: vb
    };
    var wb = function(a, b, c, d, j) {
        this._timerStop = 0.5;
        this._timer = 0;
        this._isBalloonShow = this._taked = this._batteryFlyUp = this._batteryFly = !1;
        h.call(this);
        this._ctx = a;
        this._x = b * this._ctx.gameScale;
        this._y = c * this._ctx.gameScale;
        this._objId = d;
        this._qBat = j
    };
    f.Hiden = wb;
    wb.__name__ = ["Hiden"];
    wb.__super__ = h;
    wb.prototype =
        t(h.prototype, {
            get_name: function() {
                return "Hiden_38"
            },
            onAdded: function() {
                if (!this._ctx.goNextPart) {
                    1 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave1);
                    2 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave2);
                    3 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave3);
                    for (var a = 0, b = this.objectsForSave.length; a < b;) {
                        if (this._objId == this.objectsForSave[a].eId) {
                            2 == this._ctx.currentLevelPart ? this._ctx.batteryCollected2 += this._qBat : 3 == this._ctx.currentLevelPart ?
                                this._ctx.batteryCollected3 += this._qBat : this._ctx.batteryCollected1 += this._qBat;
                            a = this._ctx.currentLevel.batery;
                            a.set__(a._value + this._qBat);
                            this._taked = !0;
                            break
                        }++a
                    }
                }
            },
            onUpdate: function(a) {
                var b = this;
                this._batteryFlyUp && (this._timer += a, this._timer >= this._timerStop && (this._timer = 0, this._batteryFlyUp = !1, this._batterySprite.x.animate(this._batterySprite.x._value, 100 * this._ctx.currentScaleCoef, 0.5, n.linear), this._batterySprite.y.animate(this._batterySprite.y._value, 15 * this._ctx.currentScaleCoef, 0.5,
                    n.linear), this._timerStop = 0.5, this._batteryFly = !0));
                this._batteryFly && (this._timer += a, a = this._batterySprite.rotation, a.set__(a._value + 15), this._timer >= this._timerStop && (this._batteryFly = !1, this._ctx.addObjectsToSave(new ba(this._objId)), a = this._ctx.currentLevel.batery, a.set__(a._value + this._qBat), this.destroy()));
                this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef,
                    this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
                this.isStairFind = !1;
                Math.abs(this._x - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 15 * this._ctx.currentScaleCoef && Math.abs(this._y - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && !this._taked && !this._ctx.kickFirst && !this._ctx.isGameEnd && !this._ctx.currentLevel.player._compMap.BobHero_34._bobBusy && (this.isStairFind = !0, !1 == this._isBalloonShow && (this._isBalloonShow = !0, 1 == this._ctx.currentLevelNumber && !this._taked && (this._ctx.currentLevel.tutor.tipsActivate[2] = 0, this._y < 200 * this._ctx.gameScale ? (this._ctx.currentLevel.tutor.showTip(3, "backpack"), this._ctx.currentLevel.tutor.tipName = "tip" + this._objId) : this._y < 400 * this._ctx.gameScale && (this._ctx.currentLevel.tutor.showTip(3), this._ctx.currentLevel.tutor.tipName = "tip" + this._objId)), a = new i(this._ctx.pack.getTexture("BalloonHiden")), this._currentBalloon = (new g).add(a), this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon),
                    a.setScale(this._ctx.gameScale), a.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef), a.get_pointerDown().connect(function() {
                        1 == b._ctx.currentLevelNumber && 1 == b._ctx.currentLevel.tutor.tipsActivate[2] && b._ctx.currentLevel.tutor.closeTip(3);
                        b._ctx.currentLevel.player._compMap.BobHero_34.changeAction("stay", b._ctx.currentLevel.player._compMap.Sprite_0.x._value, b._ctx.currentLevel.player._compMap.Sprite_0.y._value);
                        2 == b._ctx.currentLevelPart ? b._ctx.batteryCollected2 += b._qBat : 3 == b._ctx.currentLevelPart ? b._ctx.batteryCollected3 += b._qBat : b._ctx.batteryCollected1 += b._qBat;
                        b._taked = !0;
                        b.isStairFind = !1;
                        b._batterySprite = new i(b._ctx.pack.getTexture("gameObjects/Battery"));
                        b._battery = (new g).add(b._batterySprite);
                        b._ctx.currentLevel._bulkheadLayer.addChild(b._battery);
                        b._batterySprite.setScale(b._ctx.gameScale);
                        b._batterySprite.setXY(b._ctx.currentLevel.player._compMap.Sprite_0.x._value, b._ctx.currentLevel.player._compMap.Sprite_0.y._value);
                        b._batterySprite.centerAnchor();
                        b._batterySprite.y.animate(b._batterySprite.y._value, b._batterySprite.y._value - 50 * b._ctx.currentScaleCoef, 0.5, n.linear);
                        b._batteryFlyUp = !0;
                        b._ctx.pack.getSound("sounds/get_battery").play()
                    })));
                !1 == this.isStairFind && null != this._currentBalloon && (1 == this._ctx.currentLevelNumber && 1 == this._ctx.currentLevel.tutor.tipsActivate[2] && this._ctx.currentLevel.tutor.tipName == "tip" + this._objId && this._ctx.currentLevel.tutor.closeTip(3), this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon),
                    this._currentBalloon.dispose())
            },
            destroy: function() {
                this._ctx.currentLevel._bulkheadLayer.removeChild(this._battery);
                this._battery.dispose();
                this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon);
                this._currentBalloon.dispose();
                this.owner.disposeChildren();
                this.owner.dispose()
            },
            __class__: wb
        });
    var w = function() {};
    f.HxOverrides = w;
    w.__name__ = ["HxOverrides"];
    w.strDate = function(a) {
        switch (a.length) {
            case 8:
                var a = a.split(":"),
                    b = new Date;
                b.setTime(0);
                b.setUTCHours(a[0]);
                b.setUTCMinutes(a[1]);
                b.setUTCSeconds(a[2]);
                return b;
            case 10:
                return a = a.split("-"), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
            case 19:
                return b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2]);
            default:
                throw new o("Invalid date format : " + a);
        }
    };
    w.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    w.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    };
    w.remove = function(a, b) {
        var c =
            a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c, 1);
        return !0
    };
    w.iter = function(a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function() {
                return this.cur < this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    };
    var ta = function() {};
    f.Lambda = ta;
    ta.__name__ = ["Lambda"];
    ta.array = function(a) {
        for (var b = [], a = rc(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    ta.exists = function(a, b) {
        for (var c = rc(a)(); c.hasNext();) {
            var d = c.next();
            if (b(d)) return !0
        }
        return !1
    };
    ta.filter = function(a, b) {
        for (var c = new ua, d = rc(a)(); d.hasNext();) {
            var j =
                d.next();
            b(j) && c.add(j)
        }
        return c
    };
    ta.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var d = rc(a)(); d.hasNext();) d.next(), c++;
        else
            for (d = rc(a)(); d.hasNext();) {
                var j = d.next();
                b(j) && c++
            }
        return c
    };
    var xb = function(a, b, c, d) {
        h.call(this);
        this._ctx = a;
        this._x = b * this._ctx.gameScale;
        this._y = c * this._ctx.gameScale;
        this.laserName = d
    };
    f.LaserLine = xb;
    xb.__name__ = ["LaserLine"];
    xb.__super__ = h;
    xb.prototype = t(h.prototype, {
        get_name: function() {
            return "LaserLine_11"
        },
        onAdded: function() {
            var a;
            a = this._ctx.pack.getTexture("gameObjects/laserLines");
            this.spriteLaser = k.instance(this.owner._compMap.Sprite_0, i);
            null == this.spriteLaser && this.owner.add(this.spriteLaser = new i(a));
            this.spriteLaser.texture = a;
            this.spriteLaser.setScale(this._ctx.gameScale);
            this.spriteLaser.setXY(this._x, this._y);
            this.spriteLaser.centerAnchor()
        },
        onUpdate: function() {
            Math.abs(this.spriteLaser.x._value - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 10 * this._ctx.currentScaleCoef && Math.abs(this.spriteLaser.y._value - this._ctx.currentLevel.player._compMap.Sprite_0.y._value) <
                30 * this._ctx.currentScaleCoef && "silence" == this._ctx.currentLevel.globalState && (this._ctx.currentLevel.alertUp(), this._ctx.currentLevel.gameOver())
        },
        __class__: xb
    });
    var tc = function(a, b) {
        null == b && (b = "");
        null == a && (a = "");
        this.doorName = a;
        this.code = b
    };
    f.LevelCode = tc;
    tc.__name__ = ["LevelCode"];
    tc.prototype = {
        __class__: tc
    };
    var yb = function(a) {
        this._watchTimer = 0;
        this._bobMove = !1;
        this._timerElev = 0;
        this._elevCoefY = 5;
        this._stairCoefY = 3;
        this._isSPOnScreen = this._isNoteOnScreen = this._isNewGadgetOnScreen = this._isPadlockOnScreen =
            this._isWiresPanelOnScreen = this._isCodePanelOnScreen = this._isComputerOnScreen = this._isHackPanelOnScreen = !1;
        this.PLAYER_SPEED = 3.2;
        this.levelCreated = !1;
        this.ySdvigCoef = 0;
        h.call(this);
        this._ctx = a;
        this._walls = [];
        this._stairs = [];
        this._elevators = [];
        this._sidedoors = [];
        this._cameras = [];
        this._lasers = [];
        this._codepads = [];
        this._shadows = [];
        a.levelGuards = [];
        this.score = new H(1);
        this.talert = new H(5);
        this.batery = new H(0);
        this.watch = new H(0);
        this.levelWin = new H(!1);
        this.paused = new H(!1);
        this.restart = new H(!1);
        this._stairCoefY *=
            this._ctx.currentScaleCoef;
        this._elevCoefY *= this._ctx.currentScaleCoef;
        this.PLAYER_SPEED *= this._ctx.gameScale;
        this.globalState = "silence"
    };
    f.LevelModel = yb;
    yb.__name__ = ["LevelModel"];
    yb.__super__ = h;
    yb.prototype = t(h.prototype, {
        get_name: function() {
            return "LevelModel_5"
        },
        onAdded: function() {
            this._ctx.isPartFinishDoor = !1;
            this._worldLayer = new g;
            this.owner.addChild(this._worldLayer);
            this._worldLayer.add(new q);
            this.gameCamera = this._worldLayer._compMap.Sprite_0;
            this.gameCamera.setXY(this._ctx.centerCoefX, this._ctx.centerCoefY);
            this._ctx.emptyGadgets();
            1 < this._ctx.currentLevelNumber && (this._ctx.haveLockpick = !0);
            3 < this._ctx.currentLevelNumber && (this._ctx.haveNippers = !0);
            5 < this._ctx.currentLevelNumber && (this._ctx.haveHackerKit = !0);
            7 < this._ctx.currentLevelNumber && (this._ctx.haveBox = !0);
            if (9 < this._ctx.currentLevelNumber || 9 == this._ctx.currentLevelNumber && 2 == this._ctx.currentLevelPart) this._ctx.haveShocker = !0;
            this._ctx.isLevelPointSaved && !this._ctx.goNextPart ? this._ctx.currentLevelPart = this._ctx.currentLeveLSavePart : !this._ctx.isLevelPointSaved &&
                !this._ctx.goNextPart && (this._ctx.currentLevelPart = 1, this._ctx.levelTimer = 0, this._ctx.levelTimerSave = 0, this._ctx.levelCodes = []);
            2 == this._ctx.currentLevelPart ? (this._backgroundPicture = new i(this._ctx.pack.getTexture("GameBackground" + this._ctx.currentLevelNumber + "2")), this._ctx.batteryCollected2 = 0) : 3 == this._ctx.currentLevelPart ? (this._backgroundPicture = new i(this._ctx.pack.getTexture("GameBackground" + this._ctx.currentLevelNumber + "3")), this._ctx.batteryCollected3 = 0) : (this._backgroundPicture = new i(this._ctx.pack.getTexture("GameBackground" +
                this._ctx.currentLevelNumber)), this._ctx.batteryCollected1 = 0);
            this._worldLayer.addChild(this._backLayer = new g);
            this._worldLayer.addChild(this._backgroundLayer = new g);
            this._worldLayer.addChild(this._objectsLayer = new g);
            this._worldLayer.addChild(this._lightsLayer = new g);
            this._worldLayer.addChild(this._charactersLayer = new g);
            this._worldLayer.addChild(this._shadowsLayer = new g);
            this._worldLayer.addChild(this._enemiesLayer = new g);
            this._worldLayer.addChild(this._screensLayer = new g);
            this._worldLayer.addChild(this._bulkheadLayer =
                new g);
            this._worldLayer.addChild(this._tipsLayer = new g);
            1 == this._ctx.currentLevelNumber && (this.tutor = new za(this._ctx), this._tipsLayer.addChild((new g).add(this.tutor)), this.tutor.showTip(1));
            2 == this._ctx.currentLevelNumber && (this.tutor = new za(this._ctx), this._tipsLayer.addChild((new g).add(this.tutor)), this.tutor.showTip(8));
            4 == this._ctx.currentLevelNumber && (this.tutor = new za(this._ctx), this._tipsLayer.addChild((new g).add(this.tutor)), this.tutor.showTip(9));
            8 == this._ctx.currentLevelNumber && 2 == this._ctx.currentLevelPart &&
                (this.tutor = new za(this._ctx), this._tipsLayer.addChild((new g).add(this.tutor)), this.tutor.showTip(10));
            this.pauseBtn = new i(this._ctx.pack.getTexture("buttons/BtnPause"));
            this.pauseBtn.setXY((this._ctx.targetWidth - 40) * this._ctx.gameScale, 25 * this._ctx.currentScaleCoef);
            this.pauseBtn.setScale(this._ctx.gameScale);
            this.pauseBtn.centerAnchor();
            this.restartBtn = new i(this._ctx.pack.getTexture("buttons/BtnReset"));
            this.restartBtn.setXY((this._ctx.targetWidth - 100) * this._ctx.gameScale, 25 * this._ctx.currentScaleCoef);
            this.restartBtn.setScale(this._ctx.gameScale);
            this.restartBtn.centerAnchor();
            this._screensLayer.addChild((new g).add(this.pauseBtn));
            this._screensLayer.addChild((new g).add(this.restartBtn));
            this._objectsLayer.addChild((new g).add(this._backgroundPicture));
            this._backgroundPicture.setScale(this._ctx.gameScale);
            this._backgroundPicture.setXY(3 * this._ctx.currentScaleCoef, 50 * this._ctx.currentScaleCoef);
            this.objectsId = 1;
            this.saveCabinId = 0;
            this.chargeBases = [];
            this.gadgetExist = !1;
            for (var a = s.parse(this.getXMLFromFile()),
                a = (new Ua(a.firstElement())).node.resolve("objects").nodes.resolve("object").iterator(); null != a.head;) {
                var b;
                a.val = a.head[0];
                a.head = a.head[1];
                b = a.val;
                if ("BobHero" == b.att.resolve("className")) {
                    var c = new kb(this._ctx, "bob", k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")));
                    this.player = (new g).add(c);
                    this._charactersLayer.addChild(this.player)
                }
                "GuardA" == b.att.resolve("className") && (c = new zb(this._ctx, b.att.resolve("className"), k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")),
                    k.parseFloat(b.att.resolve("viewZL")), k.parseFloat(b.att.resolve("viewZR")), this.objectsId), this._enemiesLayer.addChild((new g).add(c)), this.objectsId++);
                "Professor" == b.att.resolve("className") && (c = new Ab(this._ctx, b.att.resolve("className"), k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), k.parseFloat(b.att.resolve("viewZL")), k.parseFloat(b.att.resolve("viewZR")), k.parseFloat(b.att.resolve("buttonPos")), k.parseFloat(b.att.resolve("busyPos")), this.objectsId), this._enemiesLayer.addChild((new g).add(c)),
                    this.objectsId++);
                "Elevator" == b.att.resolve("className") && (c = new ob(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), k.parseInt(b.att.resolve("groupId")), b.att.resolve("door"), b.att.resolve("doorName")), this._objectsLayer.addChild((new g).add(c)), this._elevators.push(c));
                if ("StairUp" == b.att.resolve("className") || "StairDown" == b.att.resolve("className")) {
                    var c = new Bb(b.att.resolve("className"), this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), k.parseInt(b.att.resolve("groupId")),
                            b.att.resolve("door"), b.att.resolve("doorName"), b.att.resolve("doorType")),
                        d = (new g).add(c);
                    this._backgroundLayer.addChild(d);
                    this._backgroundLayer.addChild(d);
                    this._stairs.push(c)
                }
                "FinishDoor" == b.att.resolve("className") && (c = new rb(b.att.resolve("className"), this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y"))), this._backLayer.addChild((new g).add(c)));
                "PartDoor" == b.att.resolve("className") && (2 == k.parseInt(b.att.resolve("part")) && (this.pDoor1 = new Va(b.att.resolve("className"),
                    this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), k.parseInt(b.att.resolve("part"))), this._backLayer.addChild((new g).add(this.pDoor1))), 3 == k.parseInt(b.att.resolve("part")) && (this.pDoor2 = new Va(b.att.resolve("className"), this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), k.parseInt(b.att.resolve("part"))), this._backLayer.addChild((new g).add(this.pDoor2))));
                "StartDoor" == b.att.resolve("className") && (this.startDoor = new Cb(b.att.resolve("className"),
                    this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y"))), this._backLayer.addChild((new g).add(this.startDoor)));
                "ChargeBase" == b.att.resolve("className") && (this._savePointX = (k.parseFloat(b.att.resolve("x")) + 3) * this._ctx.currentScaleCoef, this._savePointY = k.parseFloat(b.att.resolve("y")) * this._ctx.currentScaleCoef, c = new mb(b.att.resolve("className"), this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), this.saveCabinId), this._objectsLayer.addChild((new g).add(c)),
                    this.chargeBases.push(c), this.saveCabinId++);
                "Sidedoor" == b.att.resolve("className") && (c = new Db(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), b.att.resolve("door"), b.att.resolve("doorName")), this._objectsLayer.addChild((new g).add(c)), this._sidedoors.push(c));
                "LaserLine" == b.att.resolve("className") && (c = new xb(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), b.att.resolve("doorName")), this._objectsLayer.addChild((new g).add(c)), this._lasers.push(c));
                "Padlock" == b.att.resolve("className") && (c = new Eb(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), b.att.resolve("doorName"), b.att.resolve("direction"), k.parseInt(b.att.resolve("plevel")), this.objectsId), this._lightsLayer.addChild((new g).add(c)), this.objectsId++);
                if ("Codepad" == b.att.resolve("className")) {
                    for (var c = !1, d = 0, j = this._ctx.levelCodes.length; d < j;) {
                        if (b.att.resolve("doorName") == this._ctx.levelCodes[d].doorName) {
                            this._doorCode = this._ctx.levelCodes[d].code;
                            c = !0;
                            break
                        }++d
                    }!1 ==
                        c && (this._doorCode = this.generateDoorCode());
                    c = new nb(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), b.att.resolve("doorName"), this._doorCode, this.objectsId);
                    this._objectsLayer.addChild((new g).add(c));
                    this._codepads.push(c);
                    this.objectsId++
                }
                "Message" == b.att.resolve("className") && (c = new Fb(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), b.att.resolve("amessage"), b.att.resolve("doorName")), this._objectsLayer.addChild((new g).add(c)));
                "Wall" ==
                b.att.resolve("className") && this._walls.push(new uc(k.parseFloat(b.att.resolve("x")) * this._ctx.gameScale, k.parseFloat(b.att.resolve("y")) * this._ctx.gameScale));
                "Hiden" == b.att.resolve("className") && (c = new wb(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), this.objectsId, k.parseInt(b.att.resolve("quantity"))), this._objectsLayer.addChild((new g).add(c)), this.objectsId++);
                "GadgetTarget" == b.att.resolve("className") && ("gameEnd" == b.att.resolve("gadgetName") ? (this.exitTarget = new Fa(this._ctx,
                    k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), "gameEnd"), this._lightsLayer.addChild((new g).add(this.exitTarget))) : (this.gadget = new sb(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), b.att.resolve("gadgetName"), this.objectsId), this._lightsLayer.addChild((new g).add(this.gadget)), this.objectsId++, this.gadgetExist = !0));
                "screenBack" == b.att.resolve("className") && (this.monitorEnd = new pb(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y"))),
                    this._objectsLayer.addChild((new g).add(this.monitorEnd)), this.monitorEnd.stopAction());
                "EndDoors" == b.att.resolve("className") && (this.endDoors = new i(this._ctx.pack.getTexture("gameObjects/EndDoors")), this._objectsLayer.addChild((new g).add(this.endDoors)), this.endDoors.setScale(this._ctx.gameScale), this.endDoors.setXY(k.parseFloat(b.att.resolve("x")) * this._ctx.gameScale, k.parseFloat(b.att.resolve("y")) * this._ctx.gameScale));
                "TrapDoor" == b.att.resolve("className") && (this.trapDoors = new i(this._ctx.pack.getTexture("gameObjects/TrapDoor")),
                    this._objectsLayer.addChild((new g).add(this.trapDoors)), this.trapDoors.setScale(this._ctx.gameScale), this.trapDoors.setXY(k.parseFloat(b.att.resolve("x")) * this._ctx.gameScale, k.parseFloat(b.att.resolve("y")) * this._ctx.gameScale), this.trapDoors.set_visible(!1));
                "CrashWalls" == b.att.resolve("className") && (this.crashDoors = new i(this._ctx.pack.getTexture("gameObjects/CrashWalls")), this._objectsLayer.addChild((new g).add(this.crashDoors)), this.crashDoors.setScale(this._ctx.gameScale), this.crashDoors.setXY(k.parseFloat(b.att.resolve("x")) *
                    this._ctx.gameScale, k.parseFloat(b.att.resolve("y")) * this._ctx.gameScale));
                "Shadow" == b.att.resolve("className") && (c = new Gb(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), k.parseInt(b.att.resolve("sw"))), this._objectsLayer.addChild((new g).add(c)), this._shadows.push(c));
                "Camera" == b.att.resolve("className") && (b = new Hb(this._ctx, k.parseFloat(b.att.resolve("x")), k.parseFloat(b.att.resolve("y")), k.parseFloat(b.att.resolve("delay")), k.parseFloat(b.att.resolve("viewZL")), k.parseFloat(b.att.resolve("viewZR"))),
                    this._screensLayer.addChild((new g).add(b)), this._cameras.push(b))
            }
            this.gadgetExist && this.exitTarget.hideTarget();
            a = 2 == this._ctx.currentLevelPart ? new i(this._ctx.pack.getTexture("Bulkheads" + this._ctx.currentLevelNumber + "2")) : 3 == this._ctx.currentLevelPart ? new i(this._ctx.pack.getTexture("Bulkheads" + this._ctx.currentLevelNumber + "3")) : new i(this._ctx.pack.getTexture("Bulkheads" + this._ctx.currentLevelNumber));
            this._bulkheadLayer.addChild((new g).add(a));
            a.setScale(this._ctx.gameScale);
            a.setXY(0, 0);
            a.set_pointerEnabled(!1);
            this._bobShadow = new i(this._ctx.pack.getTexture("BobShadow"));
            this._bulkheadLayer.addChild((new g).add(this._bobShadow));
            this._bobShadow.setScale(this._ctx.gameScale);
            this._bobShadow.centerAnchor();
            this._bobShadow.set_visible(!1);
            a = 2 == this._ctx.currentLevelPart && 10 > this._ctx.currentLevelNumber ? new i(this._ctx.pack.getTexture("Shadows" + this._ctx.currentLevelNumber + "2")) : 3 == this._ctx.currentLevelPart && 10 > this._ctx.currentLevelNumber ? new i(this._ctx.pack.getTexture("Shadows" + this._ctx.currentLevelNumber +
                "3")) : new i(this._ctx.pack.getTexture("Shadows" + this._ctx.currentLevelNumber));
            this._shadowsLayer.addChild((new g).add(a));
            a.setScale(this._ctx.gameScale);
            10 == this._ctx.currentLevelNumber && 1 < this._ctx.currentLevelPart && a.setAlpha(0);
            1 == this._ctx.currentLevelNumber && a.setXY(6 * this._ctx.currentScaleCoef, 191.5 * this._ctx.currentScaleCoef);
            2 == this._ctx.currentLevelNumber && a.setXY(5 * this._ctx.currentScaleCoef, 190 * this._ctx.currentScaleCoef);
            3 == this._ctx.currentLevelNumber && a.setXY(5 * this._ctx.currentScaleCoef,
                123 * this._ctx.currentScaleCoef);
            4 == this._ctx.currentLevelNumber && a.setXY(51 * this._ctx.currentScaleCoef, 53 * this._ctx.currentScaleCoef);
            5 == this._ctx.currentLevelNumber && a.setXY(5 * this._ctx.currentScaleCoef, 53 * this._ctx.currentScaleCoef);
            6 == this._ctx.currentLevelNumber && a.setXY(5 * this._ctx.currentScaleCoef, 52 * this._ctx.currentScaleCoef);
            7 == this._ctx.currentLevelNumber && (1 == this._ctx.currentLevelPart && a.setXY(5 * this._ctx.currentScaleCoef, 53 * this._ctx.currentScaleCoef), 2 == this._ctx.currentLevelPart && a.setXY(5 *
                this._ctx.currentScaleCoef, 123 * this._ctx.currentScaleCoef));
            8 == this._ctx.currentLevelNumber && a.setXY(5 * this._ctx.currentScaleCoef, 53 * this._ctx.currentScaleCoef);
            9 == this._ctx.currentLevelNumber && a.setXY(5 * this._ctx.currentScaleCoef, 53 * this._ctx.currentScaleCoef);
            10 == this._ctx.currentLevelNumber && 1 == this._ctx.currentLevelPart && a.setXY(5 * this._ctx.currentScaleCoef, 53 * this._ctx.currentScaleCoef);
            a = new V(this._ctx.pack, "bobAnim");
            this.moviePlayer = new T(a);
            this.glassEntiry = new g;
            this.glassEntiry.add(this.moviePlayer);
            this.bobGlass = new q;
            this.glassEntiry.add(this.bobGlass);
            this.bobGlass.setScale(this._ctx.gameScale);
            this.bobGlass.set_visible(!1);
            this._shadowsLayer.addChild(this.glassEntiry);
            this.backTap = new i(this._ctx.pack.getTexture("backTap"));
            this._screensLayer.addChild((new g).add(this.backTap));
            this.backTap.setScale(this._ctx.gameScale);
            this.backTap.setXY(0, 50 * this._ctx.currentScaleCoef);
            this._gameMusic = this._ctx.pack.getSound("music/btb3_gameplay_theme").loop();
            this.crossTarget = new i(this._ctx.pack.getTexture("buttons/Cross"));
            this._screensLayer.addChild((new g).add(this.crossTarget));
            this.crossTarget.centerAnchor();
            this.crossTarget.setScale(0);
            this._ctx.isGameEnd = !1;
            1 == this._ctx.currentLevelPart && !this._ctx.isLevelPointSaved ? this.batery.set__(this._ctx.totalBatteries) : (this.batery.set__(this._ctx.batteriesInLevel), this.watch.set__(this._ctx.levelTimer));
            1 == this._ctx.currentLevelNumber && (a = this.batery, a.set__(a._value + 5), this._ctx._tutorialDone = !0);
            this._ctx.isLevelPointSaved && !this._ctx.goNextPart ? (this.watch.set__(this._ctx.levelTimerSave),
                    this.player._compMap.BobHero_34.currentPadlock = this.chargeBases[this._ctx.saveCabinNumber].owner, this.player._compMap.BobHero_34._bobGoToSave = !0, this.chargeBases[this._ctx.saveCabinNumber].GotoSavePoint(), this._savePointX = this.chargeBases[this._ctx.saveCabinNumber].getX(), this._savePointY = this.chargeBases[this._ctx.saveCabinNumber].getY(), this.player._compMap.BobHero_34.changeAction("save", this._savePointX, this._savePointY), this.player._compMap.BobHero_34._bobGoToStair = !0, this.ActivateControl()) :
                1 != this._ctx.currentLevelNumber ? (this.player._compMap.Sprite_0.set_visible(!1), this.startDoor.openDoor()) : this.ActivateControl();
            this._ctx.refreshSaveArrays();
            this.levelCreated = !0;
            e.levelStarted(this._ctx.currentLevelNumber)
        },
        onUpdate: function(a) {
            this._watchTimer += a;
            if (1 <= this._watchTimer) {
                this._watchTimer = 0;
                var b = this.watch;
                b.set__(b._value + 1)
            }
            this._bobMove && (b = this._bobShadow.y, b.set__(b._value + this._elevatorSpeed), Math.abs(this._finishCoor - this._bobShadow.y._value) < 3 * this._ctx.gameScale && (this._bobMove = !1, this.SetPlayerFront()));
            if ("alertTimer" == this.globalState && (b = this.talert, b.set__(b._value - a), 0.1 >= this.talert._value)) {
                this.globalState = "silence";
                this.talert.set__(5);
                a = 0;
                for (b = this._cameras.length; a < b;) this._cameras[a].resetCamera(), ++a
            }
            "move" == this.player._compMap.BobHero_34.currentAction && (a = this.player._compMap.BobHero_34.bobSprite, null != a && (Math.abs(this.player._compMap.BobHero_34.movePointX - a.x._value) > this.PLAYER_SPEED ? (a.x._value < this.player._compMap.BobHero_34.movePointX && !this.checkRightWall() &&
                !this.checkRightSidedoor() && (b = a.x, b.set__(b._value + this.PLAYER_SPEED)), a.x._value > this.player._compMap.BobHero_34.movePointX && !this.checkLeftWall() && !this.checkLeftSidedoor() && (b = a.x, b.set__(b._value - this.PLAYER_SPEED)), Math.abs(this.crossTarget.x._value - a.x._value) < 30 * this._ctx.currentScaleCoef && this.crossTarget.scaleX._value >= this._ctx.gameScale && (this.crossTarget.scaleX.animate(this._ctx.gameScale, 0, 0.2, n.sineOut), this.crossTarget.scaleY.animate(this._ctx.gameScale, 0, 0.2, n.sineOut))) : this.player._compMap.BobHero_34.changeAction("stay",
                a.x._value, a.y._value)))
        },
        removeCrashWall: function() {
            this.crashDoors.set_visible(!1)
        },
        ActivateControl: function() {
            var a = this;
            this.backTap.get_pointerDown().connect(function(b) {
                if (!a._isComputerOnScreen && !a._isNewGadgetOnScreen && !a._isNoteOnScreen && !a._isPadlockOnScreen && !a._isWiresPanelOnScreen && !a._isCodePanelOnScreen && !a._isSPOnScreen && !a._isHackPanelOnScreen && !a.player._compMap.BobHero_34._bobMoveElevator && !a.player._compMap.BobHero_34._bobGoToElevator && 0 != (a.player._compMap.Sprite_0._flags & 2) &&
                    !a.player._compMap.BobHero_34._bobGoToStair && !a._ctx.isGameEnd && !a._ctx.isPartFinishDoor) {
                    for (var c = 0, d = b.viewX; c < d;) c += a._ctx.gridStep * a._ctx.currentScaleCoef;
                    a.player._compMap.BobHero_34.changeAction("move", c, b.viewY + a.ySdvigCoef)
                }
            })
        },
        checkLeftWall: function() {
            for (var a = 0, b = this._walls.length; a < b;) {
                if (Math.abs(this._walls[a].px - this.player._compMap.BobHero_34.bobSprite.x._value) < 30 * this._ctx.currentScaleCoef && this._walls[a].px < this.player._compMap.BobHero_34.bobSprite.x._value && Math.abs(this._walls[a].py -
                    this.player._compMap.BobHero_34.getY()) < 40 * this._ctx.currentScaleCoef) return this.player._compMap.BobHero_34.changeAction("stay", this.player._compMap.BobHero_34.bobSprite.x._value, this.player._compMap.BobHero_34.bobSprite.y._value), !0;
                ++a
            }
            return !1
        },
        checkRightWall: function() {
            for (var a = 0, b = this._walls.length; a < b;) {
                if (Math.abs(this._walls[a].px - this.player._compMap.BobHero_34.bobSprite.x._value) < 30 * this._ctx.currentScaleCoef && this._walls[a].px > this.player._compMap.BobHero_34.bobSprite.x._value && Math.abs(this._walls[a].py -
                    this.player._compMap.BobHero_34.getY()) < 40 * this._ctx.currentScaleCoef) return this.player._compMap.BobHero_34.changeAction("stay", this.player._compMap.BobHero_34.bobSprite.x._value, this.player._compMap.BobHero_34.bobSprite.y._value), !0;
                ++a
            }
            return !1
        },
        checkLeftSidedoor: function() {
            for (var a = 0, b = this._sidedoors.length; a < b;) {
                if (Math.abs(this._sidedoors[a]._x - this.player._compMap.BobHero_34.bobSprite.x._value) < 30 * this._ctx.currentScaleCoef && this._sidedoors[a]._x < this.player._compMap.BobHero_34.bobSprite.x._value &&
                    Math.abs(this._sidedoors[a]._y - this.player._compMap.BobHero_34.getY()) < 40 * this._ctx.currentScaleCoef && "close" == this._sidedoors[a].isDoor) return this.player._compMap.BobHero_34.changeAction("stay", this.player._compMap.BobHero_34.bobSprite.x._value, this.player._compMap.BobHero_34.bobSprite.y._value), !0;
                ++a
            }
            return !1
        },
        checkRightSidedoor: function() {
            for (var a = 0, b = this._sidedoors.length; a < b;) {
                if (Math.abs(this._sidedoors[a]._x - this.player._compMap.BobHero_34.bobSprite.x._value) < 30 * this._ctx.currentScaleCoef &&
                    this._sidedoors[a]._x > this.player._compMap.BobHero_34.bobSprite.x._value && Math.abs(this._sidedoors[a]._y - this.player._compMap.BobHero_34.getY()) < 40 * this._ctx.currentScaleCoef && "close" == this._sidedoors[a].isDoor) return this.player._compMap.BobHero_34.changeAction("stay", this.player._compMap.BobHero_34.bobSprite.x._value, this.player._compMap.BobHero_34.bobSprite.y._value), !0;
                ++a
            }
            return !1
        },
        alertUp: function() {
            for (var a = 0, b = this._cameras.length; a < b;) this._cameras[a].alertUp(), ++a;
            this.globalState = "alertTimer"
        },
        FindAndOpenDoor: function(a) {
            for (var b = 0, c = this._stairs.length; b < c;) {
                if (this._stairs[b].doorName == a) {
                    this._stairs[b].openDoor();
                    break
                }++b
            }
            b = 0;
            for (c = this._sidedoors.length; b < c;) {
                if (this._sidedoors[b].doorName == a) {
                    this._sidedoors[b].openDoor();
                    break
                }++b
            }
            b = 0;
            for (c = this._elevators.length; b < c;) {
                if (this._elevators[b].doorName == a) {
                    this._elevators[b].openDoors();
                    break
                }++b
            }
        },
        FindStairToTeleport: function(a) {
            for (var b = 0, c = this._stairs.length; b < c;) {
                if (!this._stairs[b].isStairFind && this._stairs[b].groupID == a) {
                    this._currentStairNumber =
                        b;
                    break
                }++b
            }
        },
        TeleportBobToStair: function(a) {
            this.player._compMap.Sprite_0.setXY(this._stairs[this._currentStairNumber]._spriteDoor.x._value, this._stairs[this._currentStairNumber]._spriteDoor.y._value + this._stairCoefY);
            "StairUp" == a && this.player._compMap.Sprite_0.y.animate(this.player._compMap.Sprite_0.y._value - 10 * this._ctx.currentScaleCoef, this.player._compMap.Sprite_0.y._value, 0.4, n.linear);
            "StairDown" == a && this.player._compMap.Sprite_0.y.animate(this.player._compMap.Sprite_0.y._value + 10 * this._ctx.currentScaleCoef,
                this.player._compMap.Sprite_0.y._value, 0.4, n.linear)
        },
        SetPlayerBack: function() {
            this.player._compMap.Sprite_0.set_visible(!1)
        },
        SetPlayerFront: function() {
            this._bobShadow.set_visible(!1);
            this._elevators[this._currentStairNumber].openDoor()
        },
        FindAndSendBobToElevator: function(a) {
            for (var b = 0, c = this._elevators.length; b < c;) {
                if ("open" == this._elevators[b].isDoor && this._elevators[b].groupID == this._currentStairNumber) {
                    this._currentStairNumber = b;
                    break
                }++b
            }
            this._elevators[this._currentStairNumber].closeDoor();
            this._bobShadow.setXY(a, this.player._compMap.Sprite_0.y._value);
            this.player._compMap.Sprite_0.setXY(this._elevators[this._currentStairNumber]._elevatorBack.x._value, this._elevators[this._currentStairNumber]._elevatorBack.y._value + this._stairCoefY);
            this.moveToElevator(this._bobShadow.y._value, this._elevators[this._currentStairNumber]._elevatorBack.y._value + this._elevCoefY)
        },
        moveToElevator: function(a, b) {
            this._bobShadow.set_visible(!0);
            this._startCoor = a;
            this._finishCoor = b;
            this._elevatorSpeed = this._startCoor <
                this._finishCoor ? 2.8 * this._ctx.gameScale : -2.8 * this._ctx.gameScale;
            this._timerElev = 0;
            this._bobMove = !0
        },
        generateDoorCode: function() {
            var a = Math.floor(2 * Math.random());
            return 0 == a ? "0" + k.string(Math.floor(8 * Math.random()) + 1) + k.string(Math.floor(8 * Math.random()) + 1) + "0" : 1 == a ? k.string(Math.floor(8 * Math.random()) + 1) + "0" + k.string(Math.floor(8 * Math.random()) + 1) + "0" : 2 == a ? "0" + k.string(Math.floor(8 * Math.random()) + 1) + "0" + k.string(Math.floor(8 * Math.random()) + 1) : "0" + k.string(Math.floor(8 * Math.random()) + 1) + k.string(Math.floor(8 *
                Math.random()) + 1) + "0"
        },
        showMessage: function(a) {
            for (var b = "1111", c = 0, d = this._codepads.length; c < d;) {
                if (a == this._codepads[c].doorName) {
                    b = this._codepads[c].getPass();
                    this._codepads[c].seeIt = !0;
                    break
                }++c
            }!1 == this._isNoteOnScreen && (this._note = gd.create(this._ctx, "Door code: \n", b), this._bulkheadLayer.addChild(this._note), this._isNoteOnScreen = !0, this._ctx.pack.getSound("sounds/open_paper").play())
        },
        closeMessage: function() {
            this._bulkheadLayer.removeChild(this._note);
            this._note.dispose();
            this._isNoteOnScreen = !1;
            this._note = null
        },
        showNewGadget: function(a) {
            !1 == this._isNewGadgetOnScreen && (this._newGadget = hd.create(this._ctx, a), this._bulkheadLayer.addChild(this._newGadget), this._isNewGadgetOnScreen = !0, this._ctx.pack.getSound("sounds/new_gadget").play())
        },
        closeNewGadget: function() {
            this._bulkheadLayer.removeChild(this._newGadget);
            this._newGadget.dispose();
            this._isNewGadgetOnScreen = !1;
            this._newGadget = null
        },
        showSaveMessage: function(a, b) {
            !1 == this._isSPOnScreen && (this._savePoint = id.create(this._ctx, a, b), this._bulkheadLayer.addChild(this._savePoint),
                this._isSPOnScreen = !0)
        },
        closeSaveMessage: function() {
            1 == this._ctx.currentLevelNumber && 1 == this._ctx.currentLevel.tutor.tipsActivate[5] && this._ctx.currentLevel.tutor.closeTip(6);
            this.crossTarget.setScale(0);
            this._bulkheadLayer.removeChild(this._savePoint);
            this._savePoint.dispose();
            this._isSPOnScreen = !1;
            this._savePoint = null
        },
        saveDoorCodes: function() {
            for (var a = 0, b = this._codepads.length; a < b;) this._codepads[a].seeIt && this._ctx.levelCodes.push(new tc(this._codepads[a].doorName, this._codepads[a].getPass())),
                ++a
        },
        showCodePanel: function(a, b) {
            if (!1 == this._isCodePanelOnScreen) {
                this._isCodePanelOnScreen = !0;
                var c = new Ib(this._ctx, a, b);
                this._codePanel = (new g).add(c);
                this._bulkheadLayer.addChild(this._codePanel);
                this._ctx.pack.getSound("sounds/code_panel").play()
            }
        },
        closeCodePanel: function() {
            this._bulkheadLayer.removeChild(this._codePanel);
            this._codePanel.disposeChildren();
            this._codePanel.dispose();
            this._isCodePanelOnScreen = !1;
            this._codePanel = null
        },
        showHackPanel: function(a) {
            !1 == this._isHackPanelOnScreen && (this._isHackPanelOnScreen = !0, a = new Jb(this._ctx, a), this._hackPanel = (new g).add(a), this._bulkheadLayer.addChild(this._hackPanel))
        },
        closeHackPanel: function() {
            this._bulkheadLayer.removeChild(this._hackPanel);
            this._hackPanel.disposeChildren();
            this._hackPanel.dispose();
            this._isHackPanelOnScreen = !1;
            this._hackPanel = null
        },
        showPadlock: function(a, b, c) {
            !1 == this._isPadlockOnScreen && (a = new Kb(this._ctx, a, b, c), this._padlock = (new g).add(a), this._bulkheadLayer.addChild(this._padlock), this._isPadlockOnScreen = !0)
        },
        closePadlock: function() {
            this._ctx.currentLevel.player._compMap.BobHero_34._bobBusy = !1;
            this._bulkheadLayer.removeChild(this._padlock);
            this._padlock.dispose();
            this._isPadlockOnScreen = !1;
            this._padlock = null
        },
        gameOver: function() {
            this.stopMusic();
            this._ctx.isGameEnd = !0;
            this.crossTarget.set_visible(!1);
            this.player._compMap.BobHero_34.changeAction("fear");
            this._ctx.pack.getSound("sounds/alarm").play(1)
        },
        calcStars: function() {
            1 == this._ctx.currentLevelNumber && (this._ctx.levelsStatus[this._ctx.currentLevelNumber - 1] = 2, this._ctx.levelsStatus[this._ctx.currentLevelNumber] = 1);
            var a = this._ctx.getStars(this.watch._value,
                this._ctx.currentLevelNumber);
            this._ctx.starsForLevelCompletedScreen = a;
            this._ctx.levelStars[this._ctx.currentLevelNumber - 1] < a && (this._ctx.levelStars[this._ctx.currentLevelNumber - 1] = a);
            this._ctx.saveGameData();
            e.levelEnded(this._ctx.currentLevelNumber, !0, {
                stars: this._ctx.levelStars[this._ctx.currentLevelNumber - 1],
                battery: this._ctx.batteryCollected1 + this._ctx.batteryCollected2 + this._ctx.batteryCollected3,
                attempts: this._ctx.levelTry
            })
        },
        stopMusic: function() {
            this._gameMusic.dispose();
            this.player._compMap.BobHero_34.removePlayer()
        },
        clearLevel: function() {
            this._worldLayer.disposeChildren()
        },
        getXMLFromFile: function() {
            return 2 == this._ctx.currentLevelPart ? this._ctx.pack.getFile("level" + this._ctx.currentLevelNumber + "2.xml").toString() : 3 == this._ctx.currentLevelPart ? this._ctx.pack.getFile("level" + this._ctx.currentLevelNumber + "3.xml").toString() : this._ctx.pack.getFile("level" + this._ctx.currentLevelNumber + ".xml").toString()
        },
        __class__: yb
    });
    var ua = function() {
        this.length = 0
    };
    f.List = ua;
    ua.__name__ = ["List"];
    ua.prototype = {
        add: function(a) {
            a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++
        },
        push: function(a) {
            this.h = a = [a, this.h];
            null == this.q && (this.q = a);
            this.length++
        },
        iterator: function() {
            return new vc(this.h)
        },
        __class__: ua
    };
    var vc = function(a) {
        this.head = a;
        this.val = null
    };
    f["_List.ListIterator"] = vc;
    vc.__name__ = ["_List", "ListIterator"];
    vc.prototype = {
        hasNext: function() {
            return null != this.head
        },
        next: function() {
            this.val = this.head[0];
            this.head = this.head[1];
            return this.val
        },
        __class__: vc
    };
    var Lb = function(a) {
        h.call(this);
        this._ctx = a
    };
    f.LogoMenu =
        Lb;
    Lb.__name__ = ["LogoMenu"];
    Lb.__super__ = h;
    Lb.prototype = t(h.prototype, {
        get_name: function() {
            return "LogoMenu_32"
        },
        onAdded: function() {
            this._spriteBob = new i(this._ctx.pack.getTexture("gameLogo"));
            this.owner.add(this._spriteBob);
            this._spriteBob.setXY(0.5 * l._platform.getStage().get_width(), 0.2 * l._platform.getStage().get_height());
            this._spriteBob.centerAnchor();
            this._spriteBob.setScale(this._ctx.gameScale)
        },
        onUpdate: function() {},
        __class__: Lb
    });
    var jd = function() {};
    f.Main = jd;
    jd.__name__ = ["Main"];
    jd.main = function() {
        l.init();
        var a = new Mb;
        l.root.add(a);
        var b = O.fromAssets("preloader");
        l._platform.loadAssetPack(b).get(function(b) {
            l.loadAssetPack(O.fromAssetsLocalized("locale")).get(function(d) {
                var j = l.loadAssetPack(O.fromAssets("main"));
                j.get(function(j) {
                    (new sc(j, d, a)).enterHomeScene(!1);
                    b.dispose()
                });
                j = kd.create(b, j);
                a.unwindToScene(j)
            })
        })
    };
    Math.__name__ = ["Math"];
    var Fb = function(a, b, c, d, j) {
        this._isBalloonShow = !1;
        h.call(this);
        this._ctx = a;
        this._x = b * this._ctx.gameScale;
        this._y = c * this._ctx.gameScale;
        this._messageAbout = d;
        this._doorName =
            j
    };
    f.Message = Fb;
    Fb.__name__ = ["Message"];
    Fb.__super__ = h;
    Fb.prototype = t(h.prototype, {
        get_name: function() {
            return "Message_37"
        },
        onAdded: function() {
            var a = this._ctx.pack.getTexture("gameObjects/message");
            this._spritePadlock = k.instance(this.owner._compMap.Sprite_0, i);
            null == this._spritePadlock && this.owner.add(this._spritePadlock = new i(a));
            this._spritePadlock.texture = a;
            this._spritePadlock.setScale(this._ctx.gameScale);
            this._spritePadlock.setXY(this._x, this._y);
            this._spritePadlock.centerAnchor()
        },
        onUpdate: function() {
            var a =
                this;
            this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            this.isStairFind = !1;
            if (Math.abs(this._spritePadlock.x._value - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 15 * this._ctx.currentScaleCoef && Math.abs(this._spritePadlock.y._value - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) <
                30 * this._ctx.currentScaleCoef && !this._ctx.isGameEnd && (this.isStairFind = !0, !1 == this._isBalloonShow)) {
                this._isBalloonShow = !0;
                var b = new i(this._ctx.pack.getTexture("BalloonMessage"));
                this._currentBalloon = (new g).add(b);
                this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon);
                b.setScale(this._ctx.gameScale);
                b.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
                b.get_pointerDown().connect(function() {
                    a._ctx.currentLevel.player._compMap.BobHero_34.changeAction("stay",
                        a._ctx.currentLevel.player._compMap.Sprite_0.x._value, a._ctx.currentLevel.player._compMap.Sprite_0.y._value);
                    a._ctx.currentLevel.showMessage(a._doorName)
                })
            }!1 == this.isStairFind && null != this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose())
        },
        __class__: Fb
    });
    var Eb = function(a, b, c, d, j, m, e) {
        this._isBalloonShow = !1;
        h.call(this);
        this._ctx = a;
        this._x = b * this._ctx.gameScale;
        this._y = c * this._ctx.gameScale;
        this._doorName =
            d;
        this._direction = j;
        this._difLevel = m;
        this._objId = e
    };
    f.Padlock = Eb;
    Eb.__name__ = ["Padlock"];
    Eb.__super__ = h;
    Eb.prototype = t(h.prototype, {
        get_name: function() {
            return "Padlock_36"
        },
        onAdded: function() {
            var a = this._ctx.pack.getTexture("gameObjects/padlock");
            this._spritePadlock = k.instance(this.owner._compMap.Sprite_0, i);
            null == this._spritePadlock && this.owner.add(this._spritePadlock = new i(a));
            this._spritePadlock.texture = a;
            this._spritePadlock.setScale(this._ctx.gameScale);
            this._spritePadlock.setXY(this._x, this._y);
            this._spritePadlock.centerAnchor();
            "left" == this._direction && this._spritePadlock.scaleX.set__(-1 * Math.abs(this._spritePadlock.scaleX._value));
            if (!this._ctx.goNextPart) {
                1 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave1);
                2 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave2);
                3 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave3);
                for (var a = 0, b = this.objectsForSave.length; a < b;) {
                    if (this._objId == this.objectsForSave[a].eId) {
                        this.openDoorIfSave();
                        break
                    }++a
                }
            }
        },
        onUpdate: function() {
            var a = this;
            this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            this.isStairFind = !1;
            if (Math.abs(this._spritePadlock.x._value - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 20 * this._ctx.currentScaleCoef && Math.abs(this._spritePadlock.y._value -
                this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && !this._ctx.kickFirst && !this._ctx.isGameEnd && (this.isStairFind = !0, !1 == this._isBalloonShow)) {
                this._isBalloonShow = !0;
                var b;
                b = this._ctx.haveLockpick ? new i(this._ctx.pack.getTexture("BalloonLockpick")) : new i(this._ctx.pack.getTexture("BalloonNone"));
                1 == this._ctx.currentLevelNumber && 0 == this._ctx.currentLevel.tutor.tipsActivate[4] && !this._ctx.haveLockpick && this._ctx.currentLevel.tutor.showTip(5);
                this._currentBalloon =
                    (new g).add(b);
                this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon);
                b.setScale(this._ctx.gameScale);
                b.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
                this._ctx.haveLockpick && b.get_pointerDown().connect(function() {
                    a._ctx.currentLevel.player._compMap.BobHero_34._bobBusy = !0;
                    a._ctx.currentLevel.player._compMap.BobHero_34.changeAction("stay", a._ctx.currentLevel.player._compMap.Sprite_0.x._value,
                        a._ctx.currentLevel.player._compMap.Sprite_0.y._value);
                    a._ctx.currentLevel.showPadlock(a._doorName, a._difLevel, a._objId);
                    a._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = a.owner;
                    a._ctx.currentLevel.player._compMap.BobHero_34.currentBalloon = a._currentBalloon
                })
            }!1 == this.isStairFind && null != this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose(), 1 == this._ctx.currentLevelNumber && 1 == this._ctx.currentLevel.tutor.tipsActivate[4] &&
                !this._ctx.haveLockpick && this._ctx.currentLevel.tutor.closeTip(5))
        },
        openDoorIfSave: function() {
            this._ctx.currentLevel.FindAndOpenDoor(this._doorName);
            this.owner.disposeChildren();
            this.owner.dispose();
            this.owner = null
        },
        __class__: Eb
    });
    var Va = function(a, b, c, d, j) {
        this._movieTimerStop = 1;
        this._movieTimer = 0;
        this._isBalloonShow = !1;
        h.call(this);
        this._ctx = b;
        this._stairName = a;
        this._x = c * this._ctx.gameScale;
        this._y = d * this._ctx.gameScale;
        this.isDoor = "close";
        this._part = j;
        this._targetX = c - 20;
        this._targetY = d - 20
    };
    f.PartDoor =
        Va;
    Va.__name__ = ["PartDoor"];
    Va.__super__ = h;
    Va.prototype = t(h.prototype, {
        get_name: function() {
            return "PartDoor_16"
        },
        onAdded: function() {
            var a = new i(this._ctx.pack.getTexture("gameObjects/elevatorBack"));
            a.setScale(this._ctx.gameScale);
            a.setXY(this._x, this._y);
            a.centerAnchor();
            this._ctx.currentLevel._backLayer.addChild((new g).add(a));
            this._bobElev = new i(this._ctx.pack.getTexture("BobElev"));
            this.owner.addChild((new g).add(this._bobElev));
            this._bobElev.setScale(this._ctx.gameScale);
            this._bobElev.setXY(this._x +
                3 * this._ctx.currentScaleCoef, this._y);
            this._bobElev.centerAnchor();
            this._bobElev.set_visible(!1);
            this._spriteDoor = new i(this._ctx.pack.getTexture("gameObjects/door1"));
            this.owner.addChild((new g).add(this._spriteDoor));
            this._spriteDoor.setScale(this._ctx.gameScale);
            this._spriteDoor.setXY(this._x, this._y);
            this._spriteDoor.centerAnchor();
            this._ctx.currentLevel.exitTarget = new Fa(this._ctx, this._targetX, this._targetY, "exit");
            this._ctx.currentLevel._lightsLayer.addChild((new g).add(this._ctx.currentLevel.exitTarget))
        },
        onUpdate: function(a) {
            var b = this;
            "closeEnd" == this.isDoor && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.isDoor = "done", this._ctx.levelTimer = this._ctx.currentLevel.watch._value, 2 == this._part && (this._ctx.currentLevelPart = 2, this._ctx.currentLevel.stopMusic(), this._ctx.currentLevel.restart.set__(!0), this._ctx.director.unwindToScene(this._ctx.currentGameScene), this._ctx.loadNextPartOfScene()), 3 == this._part && (this._ctx.currentLevelPart = 3, this._ctx.currentLevel.stopMusic(),
                this._ctx.currentLevel.restart.set__(!0), this._ctx.director.unwindToScene(this._ctx.currentGameScene), this._ctx.loadNextPartOfScene())));
            "open" == this.isDoor && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.isDoor = "done", this._ctx.currentLevel.player._compMap.BobHero_34.changeAction("partIn", this._x, this._ctx.currentLevel.player._compMap.Sprite_0.y._value)));
            "openOut" == this.isDoor && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer =
                0, this.isDoor = "done", this._ctx.currentLevel.player._compMap.BobHero_34.changeAction("partOut", this._x, this._y), this._bobElev.set_visible(!1), this._ctx.currentLevel.player._compMap.Sprite_0.set_visible(!0)));
            0 != (this._bobElev._flags & 2) && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0));
            this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef,
                this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            this.isStairFind = !1;
            Math.abs(this._spriteDoor.x._value - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 15 * this._ctx.currentScaleCoef && Math.abs(this._spriteDoor.y._value - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && "close" == this.isDoor && !this._ctx.kickFirst && (this.isStairFind = !0, !1 == this._isBalloonShow && !this._ctx.currentLevel.player._compMap.BobHero_34._bobGoToStair &&
                (this._isBalloonShow = !0, a = new i(this._ctx.pack.getTexture("BalloonStair")), this._currentBalloon = (new g).add(a), this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon), a.setScale(this._ctx.gameScale), a.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef), a.get_pointerDown().connect(function() {
                    b._ctx.batteriesInLevel = b._ctx.currentLevel.batery._value;
                    b._ctx.currentLevel.player._compMap.BobHero_34._bobBusy = !0;
                    b._ctx.currentLevel.exitTarget.hideTarget();
                    b._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = b.owner;
                    b.openDoor();
                    null != b._currentBalloon && (b._isBalloonShow = !1, b._ctx.currentLevel._bulkheadLayer.removeChild(b._currentBalloon), b._currentBalloon.dispose())
                })));
            !1 == this.isStairFind && null != this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose())
        },
        openDoor: function() {
            this._ctx.isPartFinishDoor = !0;
            this.isDoor = "open";
            this._movieTimer = 0;
            this._ctx.currentLevel.player._compMap.BobHero_34.changeAction("yes2", this._x, this._ctx.currentLevel.player._compMap.Sprite_0.y._value);
            this._spriteDoor.x.animate(this._x, this._x + 40 * this._ctx.currentScaleCoef, 0.5, n.linear);
            this._ctx.pack.getSound("sounds/final_door_open").play(1)
        },
        closeDoor: function() {
            this._movieTimer = 0;
            this._movieTimerStop = 2;
            this._ctx.currentLevel.player._compMap.Sprite_0.set_visible(!1);
            this._bobElev.set_visible(!0);
            this._spriteDoor.x.animate(this._x +
                40 * this._ctx.currentScaleCoef, this._x, 0.5, n.linear);
            this.isDoor = "closeEnd";
            this._ctx.pack.getSound("sounds/final_door_close").play(1)
        },
        closeDoorOut: function() {
            this._spriteDoor.x.animate(this._x + 40 * this._ctx.currentScaleCoef, this._x, 0.5, n.linear);
            this.isDoor = "close";
            this._ctx.pack.getSound("sounds/final_door_close").play(1)
        },
        __class__: Va
    });
    var u = function() {};
    f.Reflect = u;
    u.__name__ = ["Reflect"];
    u.field = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return c instanceof o && (c = c.val), null
        }
    };
    u.setField = function(a,
        b, c) {
        a[b] = c
    };
    u.callMethod = function(a, b, c) {
        return b.apply(a, c)
    };
    u.fields = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty,
                d;
            for (d in a) "__id__" != d && "hx__closures__" != d && c.call(a, d) && b.push(d)
        }
        return b
    };
    u.isFunction = function(a) {
        return "function" == typeof a && !(a.__name__ || a.__ename__)
    };
    u.deleteField = function(a, b) {
        if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b];
        return !0
    };
    var Hb = function(a, b, c, d, j, m) {
        this._switchCamera = this._seeEnemyLeft = this._seeEnemyRight = !1;
        this._timerWarning =
            this._timerSwitch = 0;
        this._isChilled = !0;
        this._timerToChill = 0;
        this._isBobInFocus = !1;
        this._cameraState = "free";
        this.direction = "right";
        h.call(this);
        this._ctx = a;
        this._x = b * this._ctx.gameScale;
        this._y = (c - 8 * a.gameMagnify) * this._ctx.gameScale;
        this._cameraDelay = d;
        this._viewL = this._x - j * this._ctx.gameScale;
        this._viewR = this._x + m * this._ctx.gameScale;
        this._timerCount = 0
    };
    f.SecurityCamera = Hb;
    Hb.__name__ = ["SecurityCamera"];
    Hb.__super__ = h;
    Hb.prototype = t(h.prototype, {
        get_name: function() {
            return "SecurityCamera_18"
        },
        onAdded: function() {
            var a =
                this,
                b = this._ctx.pack.getTexture("gameObjects/camera0001");
            this._sprite = k.instance(this.owner._compMap.Sprite_0, i);
            null == this._sprite && this.owner.add(this._sprite = new i(b));
            this._sprite.texture = b;
            this._sprite.setScale(this._ctx.gameScale);
            this._sprite.setXY(this._x, this._y);
            b = new oa;
            b.run(new pa(new qa([new ra(this._cameraDelay), new sa(function() {
                "free" == a._cameraState && a._isChilled && ("left" == a.direction ? (a._sprite.scaleX.set__(Math.abs(a._sprite.scaleX._value)), a._sprite.setXY(a._x - 7 * a._ctx.currentScaleCoef,
                    a._y), a.direction = "right") : (a._sprite.scaleX.set__(-1 * Math.abs(a._sprite.scaleX._value)), a._sprite.setXY(a._x + 7 * a._ctx.currentScaleCoef, a._y), a.direction = "left"), a._switchCamera = !0, a._sprite.texture = a._ctx.pack.getTexture("gameObjects/cameraFront"))
            })])));
            this.owner.add(b);
            this._sign = new Ga(this._ctx, this._x, this._y - 14 * this._ctx.currentScaleCoef);
            this._ctx.currentLevel._screensLayer.addChild((new g).add(this._sign))
        },
        onUpdate: function(a) {
            "alertLaser" != this._cameraState && (this._switchCamera && (this._timerSwitch +=
                    a, 0.1 < this._timerSwitch && (this._switchCamera = !1, this._timerSwitch = 0, "alert" == this._cameraState && (this._sprite.texture = this._ctx.pack.getTexture("gameObjects/camera0003")))), "alert" == this._cameraState && !this._isBobInFocus && !this._switchCamera && (this._timerCount += a, 0.5 < this._timerCount && (this._timerCount = 0, "left" == this.direction ? (this._sprite.scaleX.set__(Math.abs(this._sprite.scaleX._value)), this._sprite.setXY(this._x - 7 * this._ctx.currentScaleCoef, this._y), this.direction = "right") : (this._sprite.scaleX.set__(-1 *
                    Math.abs(this._sprite.scaleX._value)), this._sprite.setXY(this._x + 7 * this._ctx.currentScaleCoef, this._y), this.direction = "left"), this._switchCamera = !0, this._sprite.texture = this._ctx.pack.getTexture("gameObjects/cameraFront"))), this._isChilled || (this._timerToChill += a, 1.5 < this._timerToChill && (this._timerToChill = 0, this._isChilled = !0, this._sign.stopAction())), (this.checkCameraLeftSide() || this.checkCameraRightSide() || this._seeEnemyLeft || this._seeEnemyRight) && !this._switchCamera && !this._ctx.currentLevel.player._compMap.BobHero_34._bobInShadow ?
                ("free" == this._cameraState && (this._cameraState = "warning", this._sign.changeAction("_SignB"), this._sprite.texture = this._ctx.pack.getTexture("gameObjects/camera0002"), this._timerWarning += this._timerToChill, this._isChilled = !1), "warning" == this._cameraState && (this._timerWarning += a, 1.5 < this._timerWarning && (this._cameraState = "alert", this._ctx.currentLevel.globalState = "alert", this._ctx.isGameEnd || this._ctx.currentLevel.gameOver(), this._sign.changeAction("_SignA"), this._sprite.texture = this._ctx.pack.getTexture("gameObjects/camera0003"))),
                    this._isBobInFocus = !0, this._ctx.currentLevel.talert.set__(5)) : (this._timerWarning = 0, this._isBobInFocus = !1, "alert" == this._cameraState ? this._ctx.currentLevel.globalState = "alertTimer" : this._switchCamera || this.resetCamera()))
        },
        checkCameraLeftSide: function() {
            return this._ctx.currentLevel.player._compMap.Sprite_0.x._value + 15 * this._ctx.currentScaleCoef < this._x && Math.abs(this._ctx.currentLevel.player._compMap.BobHero_34.getY() - (this._y + 25 * this._ctx.currentScaleCoef)) < 30 * this._ctx.currentScaleCoef && this._ctx.currentLevel.player._compMap.Sprite_0.x._value >
                this._viewL && "left" == this.direction ? !0 : !1
        },
        checkCameraRightSide: function() {
            return this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 30 * this._ctx.currentScaleCoef > this._x && Math.abs(this._ctx.currentLevel.player._compMap.BobHero_34.getY() - (this._y + 25 * this._ctx.currentScaleCoef)) < 30 * this._ctx.currentScaleCoef && this._ctx.currentLevel.player._compMap.Sprite_0.x._value < this._viewR && "right" == this.direction ? !0 : !1
        },
        checkEnemyLeftSide: function(a) {
            this._seeEnemyLeft = a + 15 * this._ctx.currentScaleCoef < this._x &&
                a > this._viewL && "left" == this.direction ? !0 : !1
        },
        checkEnemyRightSide: function(a) {
            this._seeEnemyRight = a - 15 * this._ctx.currentScaleCoef > this._x && a < this._viewR && "right" == this.direction ? !0 : !1
        },
        getYPos: function() {
            return this._y + 25 * this._ctx.currentScaleCoef
        },
        alertUp: function() {
            this._timerCount = 0;
            this._sign.changeAction("_SignA");
            this._cameraState = "alertLaser";
            this._sprite.texture = this._ctx.pack.getTexture("gameObjects/camera0003");
            this._ctx.currentLevel.player._compMap.Sprite_0.x._value < this._x ? (this._sprite.scaleX.set__(-1 *
                Math.abs(this._sprite.scaleX._value)), this._sprite.setXY(this._x - 7 * this._ctx.currentScaleCoef, this._y)) : (this._sprite.scaleX.set__(Math.abs(this._sprite.scaleX._value)), this._sprite.setXY(this._x + 7 * this._ctx.currentScaleCoef, this._y))
        },
        resetCamera: function() {
            this._cameraState = "free";
            this._sprite.texture = this._ctx.pack.getTexture("gameObjects/camera0001")
        },
        __class__: Hb
    });
    var Gb = function(a, b, c, d) {
        h.call(this);
        this._ctx = a;
        this._x = b * this._ctx.gameScale;
        this._y = c * this._ctx.gameScale;
        this._shadowWidth =
            d
    };
    f.Shadow = Gb;
    Gb.__name__ = ["Shadow"];
    Gb.__super__ = h;
    Gb.prototype = t(h.prototype, {
        get_name: function() {
            return "Shadow_17"
        },
        onAdded: function() {
            var a = this._ctx.pack.getTexture("monitor/computer");
            this._spritePadlock = k.instance(this.owner._compMap.Sprite_0, i);
            null == this._spritePadlock && this.owner.add(this._spritePadlock = new i(a));
            this._spritePadlock.texture = a;
            this._spritePadlock.setScale(this._ctx.gameScale);
            this._spritePadlock.setXY(this._x, this._y);
            this._spritePadlock.centerAnchor()
        },
        onUpdate: function() {
            this.isStairFind = !1;
            Math.abs(this._x - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < this._shadowWidth * this._ctx.gameScale && Math.abs(this._y - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && !this._ctx.kickFirst && !this._ctx.currentLevel.player._compMap.BobHero_34._bobInShadow && "stay" == this._ctx.currentLevel.player._compMap.BobHero_34.currentAction && !this._ctx.currentLevel.player._compMap.BobHero_34._bobBusy && (this.isStairFind = !0, this._ctx.currentLevel.player._compMap.BobHero_34.changeAction("shadowIn"))
        },
        checkEnemyInShadow: function() {
            return Math.abs(this._x - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < this._shadowWidth * this._ctx.gameScale ? !0 : !1
        },
        getYPos: function() {
            return this._y
        },
        __class__: Gb
    });
    var Db = function(a, b, c, d, j) {
        h.call(this);
        this._ctx = a;
        this._x = b * this._ctx.gameScale;
        this._y = c * this._ctx.gameScale;
        this.isDoor = d;
        this.doorName = j
    };
    f.Sidedoor = Db;
    Db.__name__ = ["Sidedoor"];
    Db.__super__ = h;
    Db.prototype = t(h.prototype, {
        get_name: function() {
            return "Sidedoor_12"
        },
        onAdded: function() {
            var a;
            a = 7 <
                this._ctx.currentLevelNumber ? this._ctx.pack.getTexture("gameObjects/sidedoor2") : this._ctx.pack.getTexture("gameObjects/sidedoor");
            this._spriteDoor = k.instance(this.owner._compMap.Sprite_0, i);
            null == this._spriteDoor && this.owner.add(this._spriteDoor = new i(a));
            this._spriteDoor.texture = a;
            this._spriteDoor.setScale(this._ctx.gameScale);
            this._spriteDoor.setXY(this._x, this._y);
            this._spriteDoor.centerAnchor()
        },
        onUpdate: function() {},
        openDoor: function() {
            this.isDoor = "open";
            this._ctx.currentLevel._objectsLayer.removeChild(this.owner);
            this.owner.disposeChildren();
            this.owner.dispose()
        },
        __class__: Db
    });
    var Ga = function(a, b, c) {
        h.call(this);
        this._ctx = a;
        this._x = b;
        this._y = c
    };
    f.Sign = Ga;
    Ga.__name__ = ["Sign"];
    Ga.__super__ = h;
    Ga.prototype = t(h.prototype, {
        get_name: function() {
            return "Sign_19"
        },
        onAdded: function() {
            var a = new V(this._ctx.pack, "effectsAnim");
            this._moviePlayer = new T(a);
            this.owner.add(this._moviePlayer);
            this.enemySprite = new q;
            this.owner.add(this.enemySprite);
            this.enemySprite.setScale(this._ctx.gameScale);
            this.enemySprite.setXY(this._x,
                this._y);
            this.enemySprite.set_pointerEnabled(!1)
        },
        changeAction: function(a) {
            "_SignB" == a && this._ctx.pack.getSound("sounds/alert1").play();
            "_SignA" == a && this._ctx.pack.getSound("sounds/alert2").play();
            this.enemySprite.set_visible(!0);
            this._moviePlayer.loop(a, !0)
        },
        stopAction: function() {
            this.enemySprite.set_visible(!1)
        },
        setCoor: function(a, b) {
            this.enemySprite.setXY(a, b)
        },
        __class__: Ga
    });
    var Bb = function(a, b, c, d, j, m, e, g) {
        this._isBalloonShow = !1;
        h.call(this);
        this._ctx = b;
        this._stairName = a;
        this._x = c * this._ctx.gameScale;
        this._y = d * this._ctx.gameScale;
        this.groupID = j;
        this.isDoor = m;
        this.doorName = e;
        this._doorType = g
    };
    f.Stair = Bb;
    Bb.__name__ = ["Stair"];
    Bb.__super__ = h;
    Bb.prototype = t(h.prototype, {
        get_name: function() {
            return "Stair_13"
        },
        onAdded: function() {
            var a;
            a = "open" == this.isDoor ? this._ctx.pack.getTexture(this._stairName) : this._ctx.pack.getTexture("gameObjects/" + this._doorType);
            this._spriteDoor = k.instance(this.owner._compMap.Sprite_0, i);
            null == this._spriteDoor && this.owner.add(this._spriteDoor = new i(a));
            this._spriteDoor.texture =
                a;
            this._spriteDoor.setScale(this._ctx.gameScale);
            this._spriteDoor.setXY(this._x, this._y);
            this._spriteDoor.centerAnchor()
        },
        onUpdate: function() {
            var a = this;
            this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            this.isStairFind = !1;
            if (Math.abs(this._spriteDoor.x._value - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) <
                15 * this._ctx.currentScaleCoef && Math.abs(this._spriteDoor.y._value - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && "open" == this.isDoor && !this._ctx.kickFirst && !this._ctx.isGameEnd && (this.isStairFind = !0, !1 == this._isBalloonShow && !this._ctx.currentLevel.player._compMap.BobHero_34._bobGoToStair && !this._ctx.currentLevel.player._compMap.BobHero_34._bobBusy)) {
                this._isBalloonShow = !0;
                this._ctx.currentLevel.player._compMap.BobHero_34._isNearStair = !0;
                this._ctx.currentLevel.player._compMap.BobHero_34._stairGroupId =
                    this.groupID;
                this._ctx.currentLevel.player._compMap.BobHero_34._stairName = this._stairName;
                this._ctx.currentLevel.player._compMap.BobHero_34._stairX = this._x;
                1 == this._ctx.currentLevelNumber && 0 == this._ctx.currentLevel.tutor.tipsActivate[1] && this._ctx.currentLevel.tutor.showTip(2);
                "cameraOn" == this.doorName && 1 == this._ctx.currentLevelNumber && 0 == this._ctx.currentLevel.tutor.tipsActivate[3] && 2 == this._ctx.currentLevel.tutor.tipsActivate[2] && this._ctx.currentLevel.tutor.showTip(4);
                var b = new i(this._ctx.pack.getTexture("BalloonStair"));
                this._currentBalloon = (new g).add(b);
                this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon);
                b.setScale(this._ctx.gameScale);
                b.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
                b.get_pointerDown().connect(function() {
                    1 == a._ctx.currentLevelNumber && 1 == a._ctx.currentLevel.tutor.tipsActivate[1] && a._ctx.currentLevel.tutor.closeTip(2);
                    a._spriteDoor.y._value > 400 * a._ctx.gameScale &&
                        1 == a._ctx.currentLevelNumber && 1 == a._ctx.currentLevel.tutor.tipsActivate[3] && a._ctx.currentLevel.tutor.closeTip(4);
                    2 == a._ctx.currentLevelNumber && 1 == a._ctx.currentLevel.tutor.tipsActivate[7] && a._ctx.currentLevel.tutor.closeTip(8);
                    4 == a._ctx.currentLevelNumber && 1 == a._ctx.currentLevel.tutor.tipsActivate[8] && a._ctx.currentLevel.tutor.closeTip(9);
                    a._ctx.currentLevel.player._compMap.BobHero_34._isNearEnemyBody ? a._ctx.currentLevel.player._compMap.BobHero_34.changeAction("setboxGostair") : (a._ctx.currentLevel.FindStairToTeleport(a.groupID),
                        a._ctx.currentLevel.player._compMap.BobHero_34.changeAction(a._stairName, a._x, a._ctx.currentLevel.player._compMap.Sprite_0.y._value));
                    a._ctx.currentLevel.crossTarget.setScale(0);
                    14 == a.groupID && a._ctx.currentLevel.removeCrashWall();
                    null != a._currentBalloon && (a._isBalloonShow = !1, a._ctx.currentLevel._bulkheadLayer.removeChild(a._currentBalloon), a._currentBalloon.dispose())
                })
            }
            if (!this._ctx.currentLevel._isHackPanelOnScreen && "close" == this.isDoor && ("StairDoor2" == this._doorType || "StairDoor3" == this._doorType) &&
                Math.abs(this._spriteDoor.x._value - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 15 * this._ctx.currentScaleCoef && Math.abs(this._spriteDoor.y._value - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && !this._ctx.kickFirst && !this._ctx.isGameEnd && !this._ctx.currentLevel.player._compMap.BobHero_34._bobBusy) this.isStairFind = !0, !1 == this._isBalloonShow && !this._ctx.currentLevel.player._compMap.BobHero_34._bobGoToStair && (this._isBalloonShow = !0, b = this._ctx.haveHackerKit ?
                new i(this._ctx.pack.getTexture("BalloonHackMonitor")) : new i(this._ctx.pack.getTexture("BalloonNone")), this._currentBalloon = (new g).add(b), this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon), b.setScale(this._ctx.gameScale), b.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef), this._ctx.haveHackerKit && b.get_pointerDown().connect(function() {
                    a._ctx.currentLevel.showHackPanel(a.doorName);
                    a._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = a.owner;
                    a._ctx.currentLevel.player._compMap.BobHero_34.currentBalloon = a._currentBalloon;
                    null != a._currentBalloon && (a._isBalloonShow = !1, a._ctx.currentLevel._bulkheadLayer.removeChild(a._currentBalloon), a._currentBalloon.dispose())
                }));
            !1 == this.isStairFind && null != this._currentBalloon && (1 == this._ctx.currentLevelNumber && 1 == this._ctx.currentLevel.tutor.tipsActivate[1] && (this._ctx.currentLevel.tutor.closeTip(2), this._ctx.currentLevel.tutor.tipsActivate[1] =
                0), this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose(), this._ctx.currentLevel.player._compMap.BobHero_34._isNearStair = !1)
        },
        removeBallon: function() {
            null != this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose(), this._ctx.currentLevel.player._compMap.BobHero_34._isNearStair = !1)
        },
        openDoor: function() {
            this.isDoor = "open";
            var a;
            a = this._ctx.pack.getTexture(this._stairName);
            this._spriteDoor = k.instance(this.owner._compMap.Sprite_0, i);
            this.owner.remove(this._spriteDoor);
            this.owner.add(this._spriteDoor = new i(a));
            this._spriteDoor.texture = a;
            this._spriteDoor.setScale(this._ctx.gameScale);
            this._spriteDoor.setXY(this._x, this._y);
            this._spriteDoor.centerAnchor()
        },
        __class__: Bb
    });
    var Cb = function(a, b, c, d) {
        this._movieTimerStop = 1;
        this._movieTimer = 0;
        h.call(this);
        this._ctx = b;
        this._stairName = a;
        this._x = c * this._ctx.gameScale;
        this._y = d * this._ctx.gameScale;
        this.isDoor = "close"
    };
    f.StartDoor =
        Cb;
    Cb.__name__ = ["StartDoor"];
    Cb.__super__ = h;
    Cb.prototype = t(h.prototype, {
        get_name: function() {
            return "StartDoor_7"
        },
        onAdded: function() {
            var a = new i(this._ctx.pack.getTexture("gameObjects/elevatorBack"));
            a.setScale(this._ctx.gameScale);
            a.setXY(this._x, this._y);
            a.centerAnchor();
            this._ctx.currentLevel._backLayer.addChild((new g).add(a));
            this._bobElev = new i(this._ctx.pack.getTexture("BobElev"));
            this.owner.addChild((new g).add(this._bobElev));
            this._bobElev.setScale(this._ctx.gameScale);
            this._bobElev.setXY(this._x +
                3 * this._ctx.currentScaleCoef, this._y);
            this._bobElev.centerAnchor();
            this._spriteDoor = new i(this._ctx.pack.getTexture("gameObjects/door1"));
            this.owner.addChild((new g).add(this._spriteDoor));
            this._spriteDoor.setScale(this._ctx.gameScale);
            this._spriteDoor.setXY(this._x, this._y);
            this._spriteDoor.centerAnchor()
        },
        onUpdate: function(a) {
            "open" == this.isDoor && (this._movieTimer += a, this._movieTimer >= this._movieTimerStop && (this._movieTimer = 0, this.isDoor = "done", this._ctx.currentLevel.player._compMap.BobHero_34.changeAction("beginLevel",
                this._x, this._ctx.currentLevel.player._compMap.Sprite_0.y._value), this._bobElev.set_visible(!1), this._ctx.currentLevel.player._compMap.Sprite_0.set_visible(!0)))
        },
        openDoor: function() {
            this.isDoor = "open";
            this._spriteDoor.x.animate(this._x, this._x + 40 * this._ctx.currentScaleCoef, 0.5, n.linear);
            this._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = this.owner;
            this._ctx.pack.getSound("sounds/final_door_open").play(1)
        },
        closeDoor: function() {
            this._spriteDoor.x.animate(this._x + 40 * this._ctx.currentScaleCoef,
                this._x, 0.5, n.linear);
            this._ctx.pack.getSound("sounds/final_door_close").play(1)
        },
        __class__: Cb
    });
    var k = function() {};
    f.Std = k;
    k.__name__ = ["Std"];
    k.is = function(a, b) {
        return B.__instanceof(a, b)
    };
    k.instance = function(a, b) {
        return a instanceof b ? a : null
    };
    k.string = function(a) {
        return B.__string_rec(a, "")
    };
    k["int"] = function(a) {
        return a | 0
    };
    k.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == w.cca(a, 1) || 88 == w.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    k.parseFloat = function(a) {
        return parseFloat(a)
    };
    var ga =
        function() {
            this.b = ""
        };
    f.StringBuf = ga;
    ga.__name__ = ["StringBuf"];
    ga.prototype = {
        add: function(a) {
            this.b += k.string(a)
        },
        addSub: function(a, b, c) {
            this.b = null == c ? this.b + w.substr(a, b, null) : this.b + w.substr(a, b, c)
        },
        __class__: ga
    };
    var K = function() {};
    f.StringTools = K;
    K.__name__ = ["StringTools"];
    K.startsWith = function(a, b) {
        return a.length >= b.length && w.substr(a, 0, b.length) == b
    };
    K.replace = function(a, b, c) {
        return a.split(b).join(c)
    };
    K.fastCodeAt = function(a, b) {
        return a.charCodeAt(b)
    };
    var x = f.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    x.TNull = ["TNull", 0];
    x.TNull.toString = v;
    x.TNull.__enum__ = x;
    x.TInt = ["TInt", 1];
    x.TInt.toString = v;
    x.TInt.__enum__ = x;
    x.TFloat = ["TFloat", 2];
    x.TFloat.toString = v;
    x.TFloat.__enum__ = x;
    x.TBool = ["TBool", 3];
    x.TBool.toString = v;
    x.TBool.__enum__ = x;
    x.TObject = ["TObject", 4];
    x.TObject.toString = v;
    x.TObject.__enum__ = x;
    x.TFunction = ["TFunction", 5];
    x.TFunction.toString = v;
    x.TFunction.__enum__ = x;
    x.TClass = function(a) {
        a = ["TClass", 6, a];
        a.__enum__ = x;
        a.toString = v;
        return a
    };
    x.TEnum = function(a) {
        a = ["TEnum", 7, a];
        a.__enum__ = x;
        a.toString = v;
        return a
    };
    x.TUnknown = ["TUnknown", 8];
    x.TUnknown.toString = v;
    x.TUnknown.__enum__ = x;
    var F = function() {};
    f.Type = F;
    F.__name__ = ["Type"];
    F.getClassName = function(a) {
        a = a.__name__;
        return null == a ? null : a.join(".")
    };
    F.getEnumName = function(a) {
        return a.__ename__.join(".")
    };
    F.resolveClass = function(a) {
        a = f[a];
        return null == a || !a.__name__ ? null : a
    };
    F.resolveEnum = function(a) {
        a = f[a];
        return null == a || !a.__ename__ ? null : a
    };
    F.createEmptyInstance =
        function(a) {
            function b() {}
            b.prototype = a.prototype;
            return new b
        };
    F.createEnum = function(a, b, c) {
        var d = u.field(a, b);
        if (null == d) throw new o("No such constructor " + b);
        if (u.isFunction(d)) {
            if (null == c) throw new o("Constructor " + b + " need parameters");
            return u.callMethod(a, d, c)
        }
        if (null != c && 0 != c.length) throw new o("Constructor " + b + " does not need parameters");
        return d
    };
    F.getEnumConstructs = function(a) {
        return a.__constructs__.slice()
    };
    F["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return x.TBool;
            case "string":
                return x.TClass(String);
            case "number":
                return Math.ceil(a) == a % 2147483648 ? x.TInt : x.TFloat;
            case "object":
                if (null == a) return x.TNull;
                var b = a.__enum__;
                if (null != b) return x.TEnum(b);
                a = B.getClass(a);
                return null != a ? x.TClass(a) : x.TObject;
            case "function":
                return a.__name__ || a.__ename__ ? x.TObject : x.TFunction;
            case "undefined":
                return x.TNull;
            default:
                return x.TUnknown
        }
    };
    var wc = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    f.Vec2 = wc;
    wc.__name__ = ["Vec2"];
    wc.prototype = {
        __class__: wc
    };
    var Nb = function(a, b) {
        null == b && (b = 0);
        null ==
            a && (a = 0);
        this.x = a;
        this.y = b
    };
    f.Vector2 = Nb;
    Nb.__name__ = ["Vector2"];
    Nb.prototype = {
        __class__: Nb
    };
    var uc = function(a, b) {
        this.px = a;
        this.py = b
    };
    f.Wall = uc;
    uc.__name__ = ["Wall"];
    uc.prototype = {
        __class__: uc
    };
    var s = function(a) {
        this.nodeType = a;
        this.children = [];
        this.attributeMap = new L
    };
    f.Xml = s;
    s.__name__ = ["Xml"];
    s.parse = function(a) {
        return va.parse(a)
    };
    s.createElement = function(a) {
        var b = new s(s.Element);
        if (b.nodeType != s.Element) throw new o("Bad node type, expected Element but found " + b.nodeType);
        b.nodeName = a;
        return b
    };
    s.createPCData = function(a) {
        var b = new s(s.PCData);
        if (b.nodeType == s.Document || b.nodeType == s.Element) throw new o("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    s.createCData = function(a) {
        var b = new s(s.CData);
        if (b.nodeType == s.Document || b.nodeType == s.Element) throw new o("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    s.createComment = function(a) {
        var b = new s(s.Comment);
        if (b.nodeType == s.Document || b.nodeType == s.Element) throw new o("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    s.createDocType = function(a) {
        var b = new s(s.DocType);
        if (b.nodeType == s.Document || b.nodeType == s.Element) throw new o("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    s.createProcessingInstruction = function(a) {
        var b = new s(s.ProcessingInstruction);
        if (b.nodeType == s.Document || b.nodeType == s.Element) throw new o("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    s.createDocument = function() {
        return new s(s.Document)
    };
    s.prototype = {
        get_nodeName: function() {
            if (this.nodeType !=
                s.Element) throw new o("Bad node type, expected Element but found " + this.nodeType);
            return this.nodeName
        },
        get: function(a) {
            if (this.nodeType != s.Element) throw new o("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.get(a)
        },
        set: function(a, b) {
            if (this.nodeType != s.Element) throw new o("Bad node type, expected Element but found " + this.nodeType);
            this.attributeMap.set(a, b)
        },
        exists: function(a) {
            if (this.nodeType != s.Element) throw new o("Bad node type, expected Element but found " +
                this.nodeType);
            return this.attributeMap.exists(a)
        },
        elementsNamed: function(a) {
            if (this.nodeType != s.Document && this.nodeType != s.Element) throw new o("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var b = [], c = 0, d = this.children; c < d.length;) {
                var j = d[c];
                ++c;
                var m;
                if (m = j.nodeType == s.Element) {
                    if (j.nodeType != s.Element) throw new o("Bad node type, expected Element but found " + j.nodeType);
                    m = j.nodeName == a
                }
                m && b.push(j)
            }
            return w.iter(b)
        },
        firstElement: function() {
            if (this.nodeType != s.Document &&
                this.nodeType != s.Element) throw new o("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var a = 0, b = this.children; a < b.length;) {
                var c = b[a];
                ++a;
                if (c.nodeType == s.Element) return c
            }
            return null
        },
        addChild: function(a) {
            if (this.nodeType != s.Document && this.nodeType != s.Element) throw new o("Bad node type, expected Element or Document but found " + this.nodeType);
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this
        },
        removeChild: function(a) {
            if (this.nodeType != s.Document &&
                this.nodeType != s.Element) throw new o("Bad node type, expected Element or Document but found " + this.nodeType);
            return w.remove(this.children, a) ? (a.parent = null, !0) : !1
        },
        __class__: s
    };
    var E = f["com.funtomic.GameOpsStatus"] = {
        __ename__: ["com", "funtomic", "GameOpsStatus"],
        __constructs__: ["UNINITIALIZED", "INITIALIZING", "INITIALIZED", "INITIALIZE_FAILED", "QUITTING"]
    };
    E.UNINITIALIZED = ["UNINITIALIZED", 0];
    E.UNINITIALIZED.toString = v;
    E.UNINITIALIZED.__enum__ = E;
    E.INITIALIZING = ["INITIALIZING", 1];
    E.INITIALIZING.toString =
        v;
    E.INITIALIZING.__enum__ = E;
    E.INITIALIZED = ["INITIALIZED", 2];
    E.INITIALIZED.toString = v;
    E.INITIALIZED.__enum__ = E;
    E.INITIALIZE_FAILED = ["INITIALIZE_FAILED", 3];
    E.INITIALIZE_FAILED.toString = v;
    E.INITIALIZE_FAILED.__enum__ = E;
    E.QUITTING = ["QUITTING", 4];
    E.QUITTING.toString = v;
    E.QUITTING.__enum__ = E;
    var Ha = function(a, b) {
        this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0
    };
    f["flambe.util.SignalConnection"] = Ha;
    Ha.__name__ = ["flambe", "util", "SignalConnection"];
    Ha.__interfaces__ = [fa];
    Ha.prototype = {
        once: function() {
            this.stayInList = !1;
            return this
        },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this), this._signal = null)
        },
        __class__: Ha
    };
    var N = function(a) {
        this._head = null != a ? new Ha(this, a) : null;
        this._deferredTasks = null
    };
    f["flambe.util.SignalBase"] = N;
    N.__name__ = ["flambe", "util", "SignalBase"];
    N.prototype = {
        connectImpl: function(a, b) {
            var c = this,
                d = new Ha(this, a);
            this._head == N.DISPATCHING_SENTINEL ? this.defer(function() {
                c.listAdd(d, b)
            }) : this.listAdd(d, b);
            return d
        },
        disconnect: function(a) {
            var b = this;
            this._head == N.DISPATCHING_SENTINEL ?
                this.defer(function() {
                    b.listRemove(a)
                }) : this.listRemove(a)
        },
        defer: function(a) {
            for (var b = null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new xc(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function() {
            var a = this._head;
            this._head = N.DISPATCHING_SENTINEL;
            return a
        },
        didEmit: function(a) {
            this._head = a;
            a = this._deferredTasks;
            for (this._deferredTasks = null; null != a;) a.fn(), a = a.next
        },
        listAdd: function(a, b) {
            if (b) a._next = this._head, this._head = a;
            else {
                for (var c = null, d = this._head; null != d;) c = d, d = d._next;
                null !=
                    c ? c._next = a : this._head = a
            }
        },
        listRemove: function(a) {
            for (var b = null, c = this._head; null != c;) {
                if (c == a) {
                    a = c._next;
                    null == b ? this._head = a : b._next = a;
                    break
                }
                b = c;
                c = c._next
            }
        },
        __class__: N
    };
    var I = function(a) {
        N.call(this, a)
    };
    f["flambe.util.Signal1"] = I;
    I.__name__ = ["flambe", "util", "Signal1"];
    I.__super__ = N;
    I.prototype = t(N.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a) {
            var b = this;
            this._head == N.DISPATCHING_SENTINEL ? this.defer(function() {
                b.emitImpl(a)
            }) : this.emitImpl(a)
        },
        emitImpl: function(a) {
            for (var b = this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(), c = c._next;
            this.didEmit(b)
        },
        __class__: I
    });
    var e = function() {};
    f["com.funtomic.GameOps"] = e;
    e.__name__ = ["com", "funtomic", "GameOps"];
    e.init = function(a, b, c, d, j) {
        if (e.status == E.UNINITIALIZED) {
            e.status = E.INITIALIZING;
            e.domain = a;
            e.gameVersion = b;
            e.gameOpsStorage = F.resolveClass("com.funtomic.GameOpsStorage");
            null != e.gameOpsStorage && u.field(e.gameOpsStorage, "init")();
            e.readLocalStorage();
            e.readGameStateLocalStorage();
            e.url = window.location.href;
            e.startTimer("session");
            e.isInKiziWrapper() ? (e.isNative = !0, e.platform = e.getPlatform()) : (e.platform = "web", e.isNative = !1);
            e.hostType = e.getUserOS();
            e.hostType = e.isInKiziApp() ? e.hostType + "_kizi_app" : e.isNative ? e.hostType + "_native_app" : e.hostType + "_browser";
            e.sessionId = e.generateRandomString(20);
            null == e.localStorage.installDate && (e.localStorage.installDate = Math.round((new Date).getTime() / 1E3), e.firstSession = !0, e.reportEvent("first_run"));
            e.elapsedGameTime = e.storageGet("FuntomicGameOps-ElapsedGameTime",
                0);
            null != e.localStorage.elapsedGameTime && (e.elapsedGameTime = e.localStorage.elapsedGameTime, u.deleteField(e.localStorage, "elapsedGameTime"));
            null == e.localStorage.originalVersion && (e.localStorage.originalVersion = e.gameVersion);
            e.elapsedPlayTimeAtInit = e.elapsedGameTime;
            e.userID = e.localStorage.userID;
            a = e.KiziAPI_getUserId();
            null != a && (e.userID = a);
            e.levelsWon = 0;
            if (null == e.localStorage.config || null != e.localStorage.configForVersion && e.localStorage.configForVersion != e.gameVersion) e.localStorage.config = c;
            e.gameConfig =
                e.localStorage.config;
            null == e.localStorage.isSynced && (e.localStorage.isSynced = !1);
            null != e.localStorage.experimentId && (e.experimentId = e.localStorage.experimentId);
            null != e.localStorage.alternativeId && (e.alternativeId = e.localStorage.alternativeId);
            c = e.storageGet("FuntomicGameOps-SessionEndEvent", null);
            null != c && (e.reportEvents([c]), e.storageRemove("FuntomicGameOps-SessionEndEvent"));
            var m = null;
            null != u.field(window.document, "hidden") ? m = "" : u.field(window.document, "webkitHidden") && (m = "webkit");
            c = function() {
                e.isHidden =
                    u.field(window.document, "" == m ? "hidden" : m + "Hidden");
                e.isHidden && e.sessionEnd();
                e.pauseTimers(e.isHidden)
            };
            a = function(a) {
                e.isHidden = "pagehide" == a.type;
                e.isHidden && e.sessionEnd();
                e.pauseTimers(e.isHidden)
            };
            null != m ? window.document.addEventListener(m + "visibilitychange", c, !1) : (window.addEventListener("pageshow", a, !1), window.addEventListener("pagehide", a, !1));
            (new yc(5E3)).run = function() {
                e.sessionEnd()
            };
            e.reportEvent("session_start");
            e.gameStateGameOpsData.elapsed_game_time = e.elapsedGameTime;
            e.gameStateGameOpsData.install_date =
                e.localStorage.installDate;
            e.writeLocalStorage();
            e.writeGameStateLocalStorage();
            d.game_ops_data = e.gameStateGameOpsData;
            e.setAdvertisingIdVariable();
            e.loadGameConfig(d, j)
        }
    };
    e.sendRequest = function(a, b, c, d, j, m) {
        null == m && (m = !0);
        var e = new zc(null);
        e.url = a;
        if (null != b)
            for (var a = 0, g = u.fields(b); a < g.length;) {
                var p = g[a];
                ++a;
                e.setParameter(p, u.field(b, p))
            }
        null != c && (e.onData = c);
        null != d && (e.onStatus = d);
        null != j && (e.onError = j);
        e.request(m)
    };
    e.loadGameConfig = function(a, b) {
        A.verbose(["Fetching game config for: ",
            e.domain
        ]);
        var c = e.apiURLPrefix + e.apiConfigLocation,
            d = {
                domain: e.domain,
                game_state: JSON.stringify(a),
                game_ops_version: e.gameOpsVersion,
                game_version: e.gameVersion,
                platform_name: e.platform
            };
        null != e.userID && (d.user_id = e.userID);
        null != e.experimentId && (d.experiment_id = e.experimentId);
        null != e.alternativeId && (d.alternative_id = e.alternativeId);
        null != e.localStorage.userEmail && (d.user_email = e.localStorage.userEmail);
        null != e.localStorage.configMd5 && null != e.localStorage.config && (d.config_md5 = e.localStorage.configMd5);
        e.sendRequest(c, d, function(a) {
            e.onConfigLoadSuccess(a);
            null != b && b(!0);
            e.afterInit()
        }, e.onConfigLoadReturned, function(a) {
            e.IOErrorHandler(a);
            e.status = E.INITIALIZE_FAILED;
            null != b && b(!1);
            e.afterInit()
        }, !0, !1)
    };
    e.onConfigLoadReturned = function(a) {
        switch (a) {
            case 500:
                e.onConfigLoadFailure();
                break;
            case 0:
                e.onConfigLoadTimeout()
        }
    };
    e.onConfigLoadTimeout = function() {
        A.error(["Timeout while fetching game config from server"])
    };
    e.onConfigLoadFailure = function() {
        A.error(["Error loading config"])
    };
    e.IOErrorHandler =
        function(a) {
            A.error(["Error caught ", a])
        };
    e.onConfigLoadSuccess = function(a) {
        var b = JSON.parse(a);
        A.verbose(["Config successfuly loaded", a]);
        null != b && (null != b.user_id && (e.userID = b.user_id, e.localStorage.userID = b.user_id), b.is_debug_mode && (e.isDebugMode = b.is_debug_mode), b.install_date && (e.localStorage.installDate = b.install_date), e.experimentId = b.experiment_id, e.localStorage.experimentId = e.experimentId, e.alternativeId = b.alternative_id, e.localStorage.alternativeId = e.alternativeId, null != b.config && (e.localStorage.config =
            b.config), e.gameConfig = e.localStorage.config, e.localStorage.configMd5 = b.config_md5, e.localStorage.configForVersion = e.gameVersion, e.localStorage.googlePublicKey = b.google_public_key, e.localStorage.appstoreId = b.appstore_id, e.writeLocalStorage(), e.status = E.INITIALIZED, e.reportUnsentEvents())
    };
    e.afterInit = function() {
        null != e.alternativeId && e.KiziAPI_setAlternativeId();
        var a = {
            game_ops_version: e.gameOpsVersion,
            game_version: e.gameVersion,
            game_session_id: e.sessionId,
            game_user_id: e.userID
        };
        null != e.experimentId &&
            (a.game_experiment_id = e.experimentId);
        null != e.alternativeId && (a.game_alternative_id = e.alternativeId);
        e.KiziAPI_reportCustomEvent("game_ops_data", a);
        A.debug(["Executing " + e.deferredReportEvents.length + " deferred event report calls"]);
        for (var a = 0, b = e.deferredReportEvents; a < b.length;) {
            var c = b[a];
            ++a;
            c()
        }
        e.deferredReportEvents = [];
        try {
            null != e.gameConfig.eval_on_after_init && "" != e.gameConfig.eval_on_after_init && (window.evalInContext = function(a, b) {
                return function() {
                    return eval(a)
                }.call(b)
            }, u.field(window,
                "evalInContext")(e.gameConfig.eval_on_after_init, e))
        } catch (d) {
            d instanceof o && (d = d.val), e.reportEvent("error_eval", {
                code: e.gameConfig.eval_on_after_init,
                message: k.string(d)
            })
        }
        a = 0;
        for (b = e.onInitDoneFunctions; a < b.length;) c = b[a], ++a, c()
    };
    e.getEventsStaticParams = function(a) {
        a = {
            domain: e.domain,
            uuid: e.userID,
            platform: e.platform,
            is_native: e.isNative,
            is_synced: e.localStorage.isSynced,
            install_date: e.localStorage.installDate,
            original_version: e.localStorage.originalVersion,
            partial_data: e.localStorage.partialData,
            is_in_kizi_app: e.isInKiziApp(),
            is_in_kizi_web: e.isInKiziWeb(),
            is_in_kizi_mobile_web: e.isInKiziMobileWeb(),
            host_type: e.hostType,
            events: a
        };
        try {
            for (var b = u.field(window, "jsinterface").getCampaignData(), c = JSON.parse(b), b = 0, d = u.fields(c); b < d.length;) {
                var j = d[b];
                ++b;
                u.setField(a, j, u.field(c, j))
            }
        } catch (m) {
            m instanceof o && (m = m.val)
        }
        null != e.url && (a.url = e.url);
        null != e.localStorage.isConverted && (a.is_converted = e.localStorage.isConverted);
        null != e.mediaSource && (a.media_source = e.mediaSource);
        null != e.campaignName &&
            (a.campaign_name = e.campaignName);
        return a
    };
    e.reportEvents = function(a) {
        if (e.status != E.INITIALIZED) e.queueEvents(a);
        else {
            var b = e.apiURLPrefix + e.apiEventsLocation,
                c = e.getEventsStaticParams(a),
                c = {
                    domain: e.domain,
                    data: JSON.stringify(c)
                };
            A.verbose(["Posting event to:", b]);
            e.sendRequest(b, c, e.eventReportSucceeded, function(b) {
                e.onEventReportReturned(b, a)
            }, e.IOErrorHandler);
            e.sessionEnd()
        }
    };
    e.onEventReportReturned = function(a, b) {
        switch (a) {
            case 500:
                e.eventReportFailed();
                break;
            case 0:
                e.eventReportTimeout(b)
        }
    };
    e.eventReportTimeout = function(a) {
        A.error(["Report event timeout"]);
        e.queueEvents(a)
    };
    e.eventReportFailed = function() {
        A.error(["Report event failed"]);
        e.localStorage.unsentEvents = [];
        e.localStorage.partialData = !0;
        e.writeLocalStorage()
    };
    e.eventReportSucceeded = function(a) {
        A.verbose(["Event Posted " + a]);
        e.reportUnsentEvents()
    };
    e.reportEvent = function(a, b) {
        if (!e.isEventsTraceOnly) switch (e.status[1]) {
            case 1:
                e.deferredReportEvents.push(function() {
                    e.reportEvent(a, b)
                });
                break;
            default:
                var c = e.prepareEventObject(a,
                    b);
                e.reportEvents([c])
        }
    };
    e.prepareEventObject = function(a, b) {
        var c = k.string((new Date).getTime() / 1E3),
            c = {
                event_type: a,
                timestamp: c
            };
        null != e.experimentId && (c.experiment_id = e.experimentId);
        null != e.alternativeId && (c.alternative_id = e.alternativeId);
        var d = e.sampleTimer("session");
        c.elapsed_session_time = Math.round(d / 1E3);
        c.elapsed_play_time = Math.round(e.elapsedPlayTimeAtInit + d / 1E3);
        c.session_id = e.sessionId;
        c.game_ops_version = e.gameOpsVersion;
        c.game_version = e.gameVersion;
        e.firstSession && (c.first_session = !0);
        null != e.fbId && (c.fb_id = e.fbId);
        null != e.advertisingId && (c.advertising_id = e.advertisingId);
        c = e.extendObject(c, b);
        null != e.additionalEventsParams && (c = e.extendObject(c, e.additionalEventsParams));
        return c
    };
    e.queueEvents = function(a) {
        A.verbose(["Queuing events:" + JSON.stringify(a)]);
        null == e.localStorage.unsentEvents && (e.localStorage.unsentEvents = []);
        for (var b = 0; b < a.length;) {
            var c = a[b];
            ++b;
            e.localStorage.unsentEvents.push(c)
        }
        e.localStorage.unsentEvents.length > e.MAX_SAVED_UNSENT_EVENTS && (e.localStorage.unsentEvents = [], e.localStorage.partialData = !0);
        e.writeLocalStorage();
        A.verbose(["There are now " + k.string(e.localStorage.unsentEvents.length) + " unsent events."])
    };
    e.reportUnsentEvents = function() {
        null != e.localStorage.unsentEvents && 0 < e.localStorage.unsentEvents.length && (A.verbose(["reporting unsent events", e.localStorage.unsentEvents.length]), e.reportEvents(e.localStorage.unsentEvents), e.localStorage.unsentEvents = [], e.writeLocalStorage())
    };
    e.levelStarted = function(a, b) {
        e.startTimer("level_" + a);
        e.levelsNumbers.push(a);
        null == e.gameStateGameOpsData.progress && (e.gameStateGameOpsData.progress = {});
        if (null == e.gameStateGameOpsData.progress.top_level || e.gameStateGameOpsData.progress.top_level < a) e.gameStateGameOpsData.progress.top_level = a, e.writeGameStateLocalStorage();
        var c = {
            level: a
        };
        null != b && (c = e.extendObject(b, c));
        e.reportEvent("level_started", c);
        e.KiziAPI_levelStarted([a, b])
    };
    e.levelEnded = function(a, b, c) {
        var d = e.stopTimer("level_" + a); - 1 == d ? A.error(["levelEnded was called without a matching startLevel!"]) : (b && e.levelsWon++,
            d = {
                level: a,
                level_duration: Math.round(d / 1E3),
                won: null == b ? "null" : "" + b
            }, 0 < e.movesDuration.length && (d.moves_duration = e.movesDuration.join(","), e.movesDuration = []), null != c && (d = e.extendObject(c, d)), e.reportEvent("level_ended", d), b && a == e.lastLevelNumber && e.reportEvent("game_completion"), e.KiziAPI_levelEnded([a, b, c]))
    };
    e.sessionEnd = function(a, b) {
        null == a && (a = !0);
        var c = e.sampleTimer("session");
        if (-1 == c) A.error(["sessionEnd was called without a matching sessionStart!"]);
        else {
            for (var d = [], j = 0, m = e.levelsNumbers; j <
                m.length;) {
                var td = m[j];
                ++j; - 1 == d.indexOf(td) && d.push(td)
            }
            d = {
                session_duration: Math.round(c / 1E3),
                levels_numbers: d.toString(),
                won_percent: 0,
                levels_count: e.levelsNumbers.length,
                levels_won: e.levelsWon,
                sent_by: "application"
            };
            null != b && (d = e.extendObject(b, d));
            0 < d.levels_count && (d.won_percent = 100 * (e.levelsWon / e.levelsNumbers.length));
            e.updateTotalElapsedTime(c / 1E3);
            c = e.prepareEventObject("session_end", d);
            a ? (A.verbose(["writing session end event to local storage"]), e.storageSet("FuntomicGameOps-SessionEndEvent",
                c)) : e.reportEvents([c])
        }
    };
    e.updateTotalElapsedTime = function(a) {
        e.storageSet("FuntomicGameOps-ElapsedGameTime", e.elapsedPlayTimeAtInit + a)
    };
    e.startTimer = function(a) {
        A.verbose(["Timer '" + a + "' started."]);
        u.setField(e.timers, a, [e.getTimestamp(), 0])
    };
    e.sampleTimer = function(a, b) {
        null == b && (b = !1);
        if (null == u.field(e.timers, a)) return -1;
        var c = u.field(e.timers, a)[1];
        0 != u.field(e.timers, a)[0] && (c += e.getTimestamp() - u.field(e.timers, a)[0]);
        b && u.deleteField(e.timers, a);
        A.verbose(["Timer '" + a + "' sampled. Current elapsed time is " +
            c
        ]);
        return c
    };
    e.stopTimer = function(a) {
        A.verbose(["Timer '" + a + "' stopped"]);
        return e.sampleTimer(a, !0)
    };
    e.pauseTimers = function(a) {
        null == a && (a = !0);
        for (var b = 0, c = u.fields(e.timers); b < c.length;) {
            var d = c[b];
            ++b;
            a ? 0 != u.field(e.timers, d)[0] ? (u.field(e.timers, d)[1] += e.getTimestamp() - u.field(e.timers, d)[0], u.field(e.timers, d)[0] = 0, A.verbose(["Timer '" + d + "' paused at " + u.field(e.timers, d)[1] + " ms"])) : A.verbose(["NOTE: Timer '" + d + "' attempt to pause at " + u.field(e.timers, d)[1] + " **but was already paused**"]) :
                0 == u.field(e.timers, d)[0] ? (u.field(e.timers, d)[0] = e.getTimestamp(), A.verbose(["Timer '" + d + "' unpaused at " + u.field(e.timers, d)[1] + " ms"])) : A.verbose(["NOTE: Timer '" + d + "' attempt to unpause at " + u.field(e.timers, d)[1] + " **but was already unpaused**"])
        }
    };
    e.getTimestamp = function() {
        return (new Date).getTime()
    };
    e.extendObject = function(a, b) {
        for (var c = 0, d = u.fields(b); c < d.length;) {
            var j = d[c];
            ++c;
            var m = u.field(b, j);
            a[null == j ? "null" : "" + j] = m
        }
        return a
    };
    e.generateRandomString = function(a) {
        for (var b = "", c = 0; c < a;) c++,
            b += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(61 * Math.random()));
        return b
    };
    e.storageSet = function(a, b) {
        return null != e.gameOpsStorage ? u.field(e.gameOpsStorage, "set")(e.domain + a, b) : l._platform.getStorage().set(e.domain + a, b)
    };
    e.storageGet = function(a, b) {
        return null != e.gameOpsStorage ? u.field(e.gameOpsStorage, "get")(e.domain + a, b) : l._platform.getStorage().get(e.domain + a, b)
    };
    e.storageRemove = function(a) {
        null != e.gameOpsStorage ? u.field(e.gameOpsStorage, "remove")(e.domain +
            a) : l._platform.getStorage().remove(e.domain + a)
    };
    e.writeLocalStorage = function() {
        e.storageSet("FuntomicGameOps", e.localStorage)
    };
    e.writeGameStateLocalStorage = function() {
        e.storageSet("FuntomicGameOps-GameState", e.gameStateGameOpsData)
    };
    e.readLocalStorage = function() {
        e.localStorage = e.storageGet("FuntomicGameOps", {})
    };
    e.readGameStateLocalStorage = function() {
        e.gameStateGameOpsData = e.storageGet("FuntomicGameOps-GameState", {})
    };
    e.setAdvertisingIdVariable = function() {};
    e.callKIZIAPIFunction = function(a, b) {
        var c =
            u.field(window, "HTML5API");
        if (null == c) return null;
        var d = u.field(c, a);
        if (null == d) return null;
        c = b instanceof Array && null == b.__enum__ ? d.apply(c, b) : d.apply(c, [b]);
        e.reportEvent("html5api_called", {
            function_name: a,
            function_returned: c,
            params: JSON.stringify(b)
        });
        return c
    };
    e.getPlatform = function() {
        try {
            var a = u.field(window, "jsinterface").getPlatform().toLowerCase();
            return "ios" == a ? "iOS" : "android" == a ? "Android" : a
        } catch (b) {
            return b instanceof o && (b = b.val), "other"
        }
    };
    e.isInKiziWrapper = function() {
        try {
            return "com.funtomic.Kizi" !=
                u.field(window, "jsinterface").getPackageName()
        } catch (a) {
            return a instanceof o && (a = a.val), !1
        }
    };
    e.isInKiziApp = function() {
        try {
            return "com.funtomic.Kizi" == u.field(window, "jsinterface").getPackageName()
        } catch (a) {
            return a instanceof o && (a = a.val), !1
        }
    };
    e.isInKiziMobileWeb = function() {
        try {
            return "m.kizi.com" == window.parent.location.host
        } catch (a) {
            return a instanceof o && (a = a.val), !1
        }
    };
    e.isInKiziWeb = function() {
        try {
            return "kizi.com" == window.parent.location.host
        } catch (a) {
            return a instanceof o && (a = a.val), !1
        }
    };
    e.getUserOS =
        function() {
            return "other" != e.getPlatform() ? e.getPlatform().toLowerCase() : (new P("(Android)", "i")).match(window.navigator.userAgent) ? "android" : (new P("(iPad|iPhone|iPod)", "i")).match(window.navigator.userAgent) ? "ios" : "other"
        };
    e.KiziAPI_levelStarted = function(a) {
        e.callKIZIAPIFunction("levelStarted", a)
    };
    e.KiziAPI_levelEnded = function(a) {
        e.callKIZIAPIFunction("levelEnded", a)
    };
    e.KiziAPI_reportCustomEvent = function(a, b) {
        null == b && (b = {});
        b.custom_event_name = a;
        e.callKIZIAPIFunction("reportCustomEvent", b)
    };
    e.KiziAPI_getUserId =
        function() {
            return e.callKIZIAPIFunction("getUserId")
        };
    e.KiziAPI_setAlternativeId = function() {
        e.callKIZIAPIFunction("setAlternativeId", e.alternativeId)
    };
    var A = function() {};
    f["com.funtomic.GameOpsLogger"] = A;
    A.__name__ = ["com", "funtomic", "GameOpsLogger"];
    A.verbose = function(a) {
        A.log(2, a.join(" "))
    };
    A.debug = function(a) {
        A.log(1, a.join(" "))
    };
    A.error = function(a) {
        A.log(0, "ERROR - " + a.join(" "));
        null
    };
    A.log = function(a) {
        a <= A.logLevel && (a = new Date, a.getDay(), a.getMonth(), a.getFullYear(), a.getHours(), a.getMinutes(),
            a.getSeconds(), null)
    };
    var z = function() {};
    f["com.funtomic.GameOpsStorage"] = z;
    z.__name__ = ["com", "funtomic", "GameOpsStorage"];
    z.init = function() {
        null != F.resolveClass("flambe.System") && (z._prefix = "flambe:");
        z._storage = window.localStorage;
        z._isInitialized = !0
    };
    z.validateInitialized = function() {
        if (!z._isInitialized) throw new o("GameOpsStorage Is Not Initialized!");
    };
    z.reportErrorEvent = function(a) {
        3 < z._isErrorEventsSent || (z._isErrorEventsSent += 1, e.reportEvent("local_storage_error", a))
    };
    z.get_supported = function() {
        return !0
    };
    z.set = function(a, b) {
        z.validateInitialized();
        var c;
        try {
            var d = new ha;
            d.useCache = !0;
            d.useEnumIndex = !1;
            d.serialize(b);
            c = d.toString()
        } catch (j) {
            return j instanceof o && (j = j.val), console.warn("Storage serialization failed:", j), z.reportErrorEvent({
                error_message: "Storage serialization failed: " + k.string(j)
            }), !1
        }
        try {
            z._storage.setItem(z._prefix + a, c)
        } catch (m) {
            m instanceof o && (m = m.val);
            console.warn("localStorage.setItem failed:", m.message);
            c = -2;
            d = !0 == u.field(window, "isStorageRedirected");
            try {
                c = JSON.stringify(window.parent.localStorage).length /
                    1024
            } catch (e) {
                e instanceof o && (e = e.val), c = -1
            }
            z.reportErrorEvent({
                error_message: "localStorage.setItem failed: " + k.string(m.message),
                local_storage_size: c,
                is_storage_redirected: d
            });
            z.clear();
            return !1
        }
        return !0
    };
    z.get = function(a, b) {
        z.validateInitialized();
        var c = null;
        try {
            c = z._storage.getItem(z._prefix + a)
        } catch (d) {
            d instanceof o && (d = d.val), console.warn("localStorage.getItem failed:", d.message), z.reportErrorEvent({
                error_message: "localStorage.getItem failed: " + k.string(d.message)
            })
        }
        if (null != c) try {
            return Q.run(c)
        } catch (j) {
            j instanceof
            o && (j = j.val), console.warn("Storage unserialization failed:", j), z.reportErrorEvent({
                error_message: "Storage unserialization failed: " + k.string(j)
            })
        }
        return b
    };
    z.remove = function(a) {
        z.validateInitialized();
        try {
            z._storage.removeItem(z._prefix + a)
        } catch (b) {
            b instanceof o && (b = b.val), console.warn("localStorage.removeItem failed:", b.message), z.reportErrorEvent({
                error_message: "localStorage.removeItem failed: " + k.string(b.message)
            })
        }
    };
    z.clear = function() {
        z.validateInitialized();
        try {
            z._storage.clear()
        } catch (a) {
            a instanceof
            o && (a = a.val), console.warn("localStorage.clear failed:", a.message), z.reportErrorEvent({
                error_message: "localStorage.clear failed: " + k.string(a.message)
            })
        }
    };
    var zb = function(a, b, c, d, j, m, e) {
        this._seeEnemyLeft = this._seeEnemyRight = !1;
        this._isChilled = !0;
        this._idleTimer = this._movieTimer = this._kickTimer = this._timerToChill = 0;
        this._isKickoff = this._isBalloonShow = this.isStairFind = this._enemyIdle = !1;
        this._timerSwitch = this._timerWarning = this._timerKickoff = 0;
        this._isBobInFocus = this._inShadow = !1;
        this._enemyState = "free";
        this._direction = "right";
        this.ENEMY_SPEED = 1.2;
        h.call(this);
        this._ctx = a;
        this._x = c * this._ctx.gameScale;
        this._y = d * this._ctx.gameScale;
        this._viewL = this._x - j * this._ctx.gameScale;
        this._viewR = this._x + m * this._ctx.gameScale;
        this._delay = 3;
        this.enemyType = b;
        this.destroyed = new aa;
        this.ENEMY_SPEED *= this._ctx.gameScale;
        this.enemyId = e;
        this.isBoxCovered = !1
    };
    f["enemies.GuardA"] = zb;
    zb.__name__ = ["enemies", "GuardA"];
    zb.__super__ = h;
    zb.prototype = t(h.prototype, {
        get_name: function() {
            return "GuardA_27"
        },
        onAdded: function() {
            var a =
                new V(this._ctx.pack, "guardAAnim");
            this._moviePlayer = new T(a);
            this.owner.add(this._moviePlayer);
            this.enemySprite = new q;
            this.owner.add(this.enemySprite);
            this.enemySprite.setScale(this._ctx.gameScale);
            this.enemySprite.setXY(this._x, this._y);
            this.movePointX = this._x;
            this.movePointY = this._y;
            this.changeAction("move");
            this._sign = new Ga(this._ctx, this._x, this._y - 34 * this._ctx.currentScaleCoef);
            this._ctx.currentLevel._screensLayer.addChild((new g).add(this._sign));
            if (!this._ctx.goNextPart) {
                1 == this._ctx.currentLevelPart &&
                    (this.objectsForSave = this._ctx.objectsForSave1);
                2 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave2);
                3 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave3);
                for (var a = 0, b = this.objectsForSave.length; a < b;) {
                    if (this.enemyId == this.objectsForSave[a].eId) {
                        this._isKickoff = !0;
                        this.changeAction("savedead", this.objectsForSave[a].ePosX, this._y);
                        this.objectsForSave[a].uBox ? (this.isBoxCovered = !0, this.CoverTheBox()) : this.checkShadows();
                        break
                    }++a
                }
            }
        },
        onUpdate: function(a) {
            this._x =
                this.owner._compMap.Sprite_0.x._value;
            this._y = this.owner._compMap.Sprite_0.y._value;
            this._sign.setCoor(this._x, this._y - 34 * this._ctx.currentScaleCoef);
            if (("dead" == this.currentAction || "savedead" == this.currentAction) && !this._inShadow && !this.isBoxCovered)
                for (var b = 0, c = this._ctx.currentLevel._cameras.length; b < c;) Math.abs(this._y - this._ctx.currentLevel._cameras[b].getYPos()) < 30 * this._ctx.currentScaleCoef && (this._ctx.currentLevel._cameras[b].checkEnemyLeftSide(this._x), this._ctx.currentLevel._cameras[b].checkEnemyRightSide(this._x)),
                    ++b;
            b = 0;
            for (c = this._ctx.levelGuards.length; b < c;)!1 == this._ctx.levelGuards[b].isCovered && (this.checkEnemyLeftSide(this._ctx.levelGuards[b].x, this._ctx.levelGuards[b].y), this.checkEnemyRightSide(this._ctx.levelGuards[b].x, this._ctx.levelGuards[b].y)), ++b;
            this.isBoxCovered || this.checkForBaloon();
            this._isKickoff && ("kicked" == this.currentAction && (this._kickTimer += a, this._kickTimer > this._kickTimerStop && this.changeAction("kickOff")), "dead" != this.currentAction && (this._timerKickoff += a), 0.7 < this._timerKickoff &&
                "kickOff" == this.currentAction && this.changeAction("dead"));
            if (("stay" == this.currentAction || "idle2" == this.currentAction) && !this._isKickoff) this._timerSwitch += a, 1.5 < this._timerSwitch && "stay" == this.currentAction && this.changeAction("idle2"), this._timerSwitch > this._delay && (this._timerSwitch = 0, this.changeAction("move"));
            "move" == this.currentAction && !this._isKickoff && ("right" == this._direction && (Math.abs(this.enemySprite.x._value - this._viewR) > this.ENEMY_SPEED ? (b = this.enemySprite.x, b.set__(b._value + this.ENEMY_SPEED)) :
                (this._direction = "left", this.IdleEnemy())), "left" == this._direction && (Math.abs(this.enemySprite.x._value - this._viewL) > this.ENEMY_SPEED ? (b = this.enemySprite.x, b.set__(b._value - this.ENEMY_SPEED)) : (this._direction = "right", this.IdleEnemy())));
            "warning" == this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimer = 0, this._movieTimerStop = 0.4, this._isBobInFocus ? this.changeAction("startTalk") : this.IdleEnemy()));
            "warningIdle" == this.currentAction && (this._movieTimer += a, this._movieTimer >
                this._movieTimerStop && (this._movieTimer = 0, this._isBobInFocus ? this.changeAction("shot") : (this._movieTimerStop = 0.4, this.changeAction("startTalk"))));
            "shot" == this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimer = 0, this._isBobInFocus && (this._movieTimerStop = 0.4, this.changeAction("warningEnd"))));
            "warningEnd" == this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimer = 0, "alertTimer" == this._ctx.currentLevel.globalState ? (this._movieTimerStop =
                0.4, this.changeAction("startTalk")) : this.IdleEnemy()));
            "startTalk" == this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimer = 0, this.changeAction("talk")));
            "endTalk" == this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimer = 0, this.IdleEnemy()));
            "attentionIdle" == this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimer = 0, this.IdleEnemy()));
            "silence" == this._ctx.currentLevel.globalState &&
                "alert" == this._enemyState && this.resetEnemy();
            this._isChilled || (this._timerToChill += a, 2 < this._timerToChill && (this._timerToChill = 0, this._isChilled = !0, this._sign.stopAction()));
            (this.checkForBob() || this._seeEnemyLeft || this._seeEnemyRight) && !this._isKickoff ? (this._isBobInFocus = !0, this._ctx.currentLevel.talert.set__(5), "free" == this._enemyState && (this._enemyState = "warning", this._sign.changeAction("_SignB"), this.changeAction("attention"), this._timerWarning += this._timerToChill, this._isChilled = !1), "warning" ==
                this._enemyState && (this._timerWarning += a, 1 < this._timerWarning && (this._enemyState = "alert", this._ctx.currentLevel.globalState = "alert", this._sign.changeAction("_SignA"), this._ctx.isGameEnd || this._ctx.currentLevel.gameOver(), this._movieTimerStop = 0.4, this.changeAction("warning"), this._ctx.pack.getSound("sounds/soldier_radio").play()))) : (this._timerWarning = 0, this._isBobInFocus && (this._isBobInFocus = !1, "warning" == this._enemyState && (this._movieTimerStop = 0.9, this.currentAction = "attentionIdle", this._enemyState =
                "free", this._moviePlayer.loop("_AttentionIdle", !1)), "alert" == this._enemyState && (this._ctx.currentLevel.globalState = "alertTimer", this.changeAction("warningEnd"))))
        },
        checkForBaloon: function() {
            var a = this;
            this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            Math.abs(this.enemySprite.x._value -
                this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 20 * this._ctx.currentScaleCoef && Math.abs(this.enemySprite.y._value - this._ctx.currentLevel.player._compMap.Sprite_0.y._value) < 40 * this._ctx.currentScaleCoef && !this._isKickoff && "alert" != this._enemyState && ("stay" == this._ctx.currentLevel.player._compMap.BobHero_34.currentAction || "move" == this._ctx.currentLevel.player._compMap.BobHero_34.currentAction) && this.kickEnemy();
            this.isStairFind = !1;
            if (Math.abs(this._x - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) <
                24 * this._ctx.currentScaleCoef && Math.abs(this._y - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && this._isKickoff && this._ctx.haveBox && !this._ctx.isGameEnd && !this._ctx.currentLevel.player._compMap.BobHero_34._bobBusy && (this.isStairFind = !0, !1 == this._isBalloonShow)) {
                this._isBalloonShow = !0;
                var b = new i(this._ctx.pack.getTexture("BalloonBox"));
                this._currentBalloon = (new g).add(b);
                this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon);
                this._ctx.currentLevel.player._compMap.BobHero_34._isNearEnemyBody = !0;
                this._ctx.currentLevel.player._compMap.BobHero_34._currentEnemy = this.owner;
                this._ctx.currentLevel.player._compMap.BobHero_34._enemyNameCover = "GuardA";
                b.setScale(this._ctx.gameScale);
                b.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
                b.get_pointerDown().connect(function() {
                    a.isBoxCovered = !0;
                    a._ctx.currentLevel.player._compMap.BobHero_34._isNearEnemyBody && a._ctx.currentLevel.player._compMap.BobHero_34._isNearStair ?
                        a._ctx.currentLevel.player._compMap.BobHero_34.changeAction("setboxGostair") : a._ctx.currentLevel.player._compMap.BobHero_34.changeAction("setbox");
                    a._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = a.owner;
                    a._ctx.currentLevel.player._compMap.BobHero_34._enemyNameCover = "GuardA";
                    a.isStairFind = !1;
                    null != a._currentBalloon && (a._isBalloonShow = !1, a._ctx.currentLevel._bulkheadLayer.removeChild(a._currentBalloon), a._currentBalloon.dispose())
                })
            }!1 == this.isStairFind && null != this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon), this._currentBalloon.dispose(), this._ctx.currentLevel.player._compMap.BobHero_34._isNearEnemyBody = !1)
        },
        kickEnemy: function() {
            this._ctx.currentLevel.player._compMap.BobHero_34.changeAction("hit");
            1 == this._ctx.currentLevelNumber && 1 == this._ctx.currentLevel.tutor.tipsActivate[6] && this._ctx.currentLevel.tutor.closeTip(7);
            this._isKickoff = !0;
            this._enemyState = "free";
            this._ctx.kickFirst = !1;
            this.currentAction = "kicked";
            this._timerWarning =
                this._timerSwitch = 0;
            this._kickTimerStop = 0.2;
            this._ctx.addObjectsToSave(new ba(this.enemyId, this._x, this.isBoxCovered));
            this.checkShadows()
        },
        CoverTheBox: function() {
            this.isBoxCovered = !0;
            if (1 == this._ctx.currentLevelPart)
                for (var a = 0, b = this._ctx.tempObjectsForSave.length; a < b;) {
                    if (this.enemyId == this._ctx.tempObjectsForSave[a].eId) {
                        this._ctx.tempObjectsForSave[a].uBox = !0;
                        break
                    }++a
                }
            if (2 == this._ctx.currentLevelPart) {
                a = 0;
                for (b = this._ctx.tempObjectsForSave2.length; a < b;) {
                    if (this.enemyId == this._ctx.tempObjectsForSave2[a].eId) {
                        this._ctx.tempObjectsForSave2[a].uBox = !0;
                        break
                    }++a
                }
            }
            if (3 == this._ctx.currentLevelPart) {
                a = 0;
                for (b = this._ctx.tempObjectsForSave3.length; a < b;) {
                    if (this.enemyId == this._ctx.tempObjectsForSave3[a].eId) {
                        this._ctx.tempObjectsForSave3[a].uBox = !0;
                        break
                    }++a
                }
            }
            this.owner.remove(this._moviePlayer);
            this._moviePlayer.dispose();
            this._sign.stopAction();
            this.owner.add(a = new i(this._ctx.pack.getTexture("gameObjects/box")));
            a.setScale(this._ctx.gameScale);
            a.centerAnchor();
            a.setXY(this.enemySprite.x._value, this.enemySprite.y._value + 2 * this._ctx.currentScaleCoef);
            a = 0;
            for (b = this._ctx.levelGuards.length; a < b;) this._ctx.levelGuards[a].guardId == this.enemyId && (this._ctx.levelGuards[a].isCovered = !0), ++a
        },
        checkShadows: function() {
            for (var a = 0, b = this._ctx.currentLevel._shadows.length; a < b;) {
                if (Math.abs(this._y - this._ctx.currentLevel._shadows[a].getYPos()) < 30 * this._ctx.currentScaleCoef && this._ctx.currentLevel._shadows[a].checkEnemyInShadow(this._x)) {
                    this._inShadow = !0;
                    this._ctx.currentLevel._enemiesLayer.removeChild(this.owner);
                    this._ctx.currentLevel._objectsLayer.addChild(this.owner);
                    break
                }++a
            }!1 == this._inShadow && this._ctx.levelGuards.push(new vb(this._x, this._y, this.enemyId))
        },
        resetEnemy: function() {
            this._isKickoff || (this._enemyState = "free", this.IdleEnemy(), this._timerWarning = this._timerSwitch = 0)
        },
        changeAction: function(a, b) {
            null == b && (b = 0);
            this.currentAction = a;
            "move" == this.currentAction && (this._moviePlayer.loop("_Walk", !1), "left" == this._direction && this.enemySprite.scaleX.set__(-1 * Math.abs(this.enemySprite.scaleX._value)), "right" == this._direction && this.enemySprite.scaleX.set__(Math.abs(this.enemySprite.scaleX._value)));
            "kickOff" == this.currentAction && (this._moviePlayer.loop("_Kicked", !0), this._ctx.pack.getSound("sounds/body_fall").play());
            "dead" == this.currentAction && (this.enemySprite.y.set__(this.enemySprite.y._value + 8 * this._ctx.currentScaleCoef), this._sign.changeAction("_SignC"), this._moviePlayer.loop("_Dead", !0));
            "savedead" == this.currentAction && (this.enemySprite.y.set__(this.enemySprite.y._value + 8 * this._ctx.currentScaleCoef), this._sign.changeAction("_SignC"), this.enemySprite.setXY(b, this.enemySprite.y._value),
                this._moviePlayer.loop("_Dead", !0));
            "attention" == this.currentAction && this._moviePlayer.loop("_Attention", !1);
            "warning" == this.currentAction && this._moviePlayer.loop("_Warning", !1);
            "warningIdle" == this.currentAction && this._moviePlayer.loop("_IdleWarning", !1);
            "idle2" == this.currentAction && this._moviePlayer.loop("_Idle2", !1);
            "shot" == this.currentAction && (this._movieTimerStop = 0.5, this._moviePlayer.loop("_Shot", !1));
            "warningEnd" == this.currentAction && (this._movieTimerStop = 0.5, this._moviePlayer.loop("_WarningEnd", !1));
            "startTalk" == this.currentAction && (this._movieTimerStop = 0.4, this._moviePlayer.loop("_StartTalk", !1));
            "talk" == this.currentAction && this._moviePlayer.loop("_Talk", !1)
        },
        checkEnemyLeftSide: function(a, b) {
            a - 20 * this._ctx.gameScale < this._x && a > this._viewL && "left" == this._direction && Math.abs(this._y - b) < 30 * this._ctx.currentScaleCoef ? (this._seeEnemyLeft = !0, this.enemySprite.scaleX.set__(-1 * Math.abs(this.enemySprite.scaleX._value))) : this._seeEnemyLeft = !1
        },
        checkEnemyRightSide: function(a, b) {
            a + 20 * this._ctx.gameScale >
                this._x && a < this._viewR && "right" == this._direction && Math.abs(this._y - b) < 30 * this._ctx.currentScaleCoef ? (this._seeEnemyRight = !0, this.enemySprite.scaleX.set__(Math.abs(this.enemySprite.scaleX._value))) : this._seeEnemyRight = !1
        },
        checkForBob: function() {
            if (this._ctx.currentLevel.player._compMap.BobHero_34._bobInShadow || this._ctx.currentLevel.player._compMap.BobHero_34._bobBusy) return !1;
            if ("stay" != this.currentAction && "left" == this._direction && this._ctx.currentLevel.player._compMap.Sprite_0.x._value < this.enemySprite.x._value &&
                this._ctx.currentLevel.player._compMap.Sprite_0.x._value > this._viewL - 10 * this._ctx.currentScaleCoef && Math.abs(this._ctx.currentLevel.player._compMap.Sprite_0.y._value - this._y) < 40 * this._ctx.currentScaleCoef) return this.enemySprite.scaleX.set__(-1 * Math.abs(this.enemySprite.scaleX._value)), !0;
            if ("stay" != this.currentAction && "right" == this._direction && this._ctx.currentLevel.player._compMap.Sprite_0.x._value > this.enemySprite.x._value && this._ctx.currentLevel.player._compMap.Sprite_0.x._value < this._viewR + 10 *
                this._ctx.currentScaleCoef && Math.abs(this._ctx.currentLevel.player._compMap.Sprite_0.y._value - this._y) < 40 * this._ctx.currentScaleCoef) return this.enemySprite.scaleX.set__(Math.abs(this.enemySprite.scaleX._value)), !0;
            if ("attentionIdle" == this.currentAction) {
                if (this._ctx.currentLevel.player._compMap.Sprite_0.x._value < this.enemySprite.x._value && this._ctx.currentLevel.player._compMap.Sprite_0.x._value > this._viewL - 10 * this._ctx.currentScaleCoef && Math.abs(this._ctx.currentLevel.player._compMap.Sprite_0.y._value -
                    this._y) < 40 * this._ctx.currentScaleCoef) return this.enemySprite.scaleX.set__(-1 * Math.abs(this.enemySprite.scaleX._value)), this._direction = "left", this.IdleEnemy(), !0;
                if (this._ctx.currentLevel.player._compMap.Sprite_0.x._value > this.enemySprite.x._value && this._ctx.currentLevel.player._compMap.Sprite_0.x._value < this._viewR + 10 * this._ctx.currentScaleCoef && Math.abs(this._ctx.currentLevel.player._compMap.Sprite_0.y._value - this._y) < 40 * this._ctx.currentScaleCoef) return this.enemySprite.scaleX.set__(Math.abs(this.enemySprite.scaleX._value)),
                    this._direction = "right", this.IdleEnemy(), !0
            }
            return !1
        },
        IdleEnemy: function() {
            this._enemyIdle = !0;
            this._idleTimer = 0;
            this.currentAction = "stay";
            this._moviePlayer.loop("_Idle", !1);
            this._ctx.pack.getSound("sounds/soldier_idle").play()
        },
        __class__: zb
    });
    var Ab = function(a, b, c, d, j, m, e, g, p) {
        this._seeEnemyLeft = this._seeEnemyRight = !1;
        this._isChilled = !0;
        this._timerToChill = 0;
        this._isDidWork = this._isPushButton = this._isCry = !1;
        this._idleTimer = this._movieTimer = this._kickTimer = 0;
        this._isKickoff = this._isBalloonShow = this.isStairFind =
            this._enemyIdle = !1;
        this._timerSwitch = this._timerWarning = this._timerKickoff = 0;
        this._isBobInFocus = this._inShadow = !1;
        this._enemyState = "free";
        this._direction = "right";
        this.ENEMY_SPEED = 0.8;
        h.call(this);
        this._ctx = a;
        this._x = c * this._ctx.gameScale;
        this._y = d * this._ctx.gameScale;
        this._viewL = this._x - j * this._ctx.gameScale;
        this._viewR = this._x + m * this._ctx.gameScale;
        this._busyPosX = g * this._ctx.gameScale;
        this._redButtonPosX = e * this._ctx.gameScale;
        this._delay = 3;
        this.enemyType = b;
        this.destroyed = new aa;
        this.ENEMY_SPEED *=
            this._ctx.gameScale;
        this.enemyId = p;
        this.isBoxCovered = !1
    };
    f["enemies.Scientist"] = Ab;
    Ab.__name__ = ["enemies", "Scientist"];
    Ab.__super__ = h;
    Ab.prototype = t(h.prototype, {
        get_name: function() {
            return "Scientist_26"
        },
        onAdded: function() {
            var a = new V(this._ctx.pack, "scientistAnim");
            this._moviePlayer = new T(a);
            this.owner.add(this._moviePlayer);
            this.enemySprite = new q;
            this.owner.add(this.enemySprite);
            this.enemySprite.setScale(this._ctx.gameScale);
            this.enemySprite.setXY(this._x, this._y);
            this.movePointX = this._x;
            this.movePointY =
                this._y;
            this.changeAction("move");
            this._sign = new Ga(this._ctx, this._x, this._y - 34 * this._ctx.currentScaleCoef);
            this._ctx.currentLevel._screensLayer.addChild((new g).add(this._sign));
            if (!this._ctx.goNextPart) {
                1 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave1);
                2 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave2);
                3 == this._ctx.currentLevelPart && (this.objectsForSave = this._ctx.objectsForSave3);
                for (var a = 0, b = this.objectsForSave.length; a < b;) {
                    if (this.enemyId ==
                        this.objectsForSave[a].eId) {
                        this._isKickoff = !0;
                        this.changeAction("savedead", this.objectsForSave[a].ePosX, this._y);
                        this.objectsForSave[a].uBox ? (this.isBoxCovered = !0, this.CoverTheBox()) : this.checkShadows();
                        break
                    }++a
                }
            }
        },
        onUpdate: function(a) {
            this._x = this.owner._compMap.Sprite_0.x._value;
            this._y = this.owner._compMap.Sprite_0.y._value;
            this._sign.setCoor(this._x, this._y - 34 * this._ctx.currentScaleCoef);
            if (("dead" == this.currentAction || "savedead" == this.currentAction) && !this._inShadow && !this.isBoxCovered)
                for (var b =
                    0, c = this._ctx.currentLevel._cameras.length; b < c;) Math.abs(this._y - this._ctx.currentLevel._cameras[b].getYPos()) < 30 * this._ctx.currentScaleCoef && (this._ctx.currentLevel._cameras[b].checkEnemyLeftSide(this._x), this._ctx.currentLevel._cameras[b].checkEnemyRightSide(this._x)), ++b;
            b = 0;
            for (c = this._ctx.levelGuards.length; b < c;)!1 == this._ctx.levelGuards[b].isCovered && (this.checkEnemyLeftSide(this._ctx.levelGuards[b].x, this._ctx.levelGuards[b].y), this.checkEnemyRightSide(this._ctx.levelGuards[b].x, this._ctx.levelGuards[b].y)),
                ++b;
            this.isBoxCovered || this.checkForBaloon();
            this._isKickoff && ("kicked" == this.currentAction && (this._kickTimer += a, this._kickTimer > this._kickTimerStop && this.changeAction("kickOff")), "dead" != this.currentAction && (this._timerKickoff += a), 0.6 < this._timerKickoff && "kickOff" == this.currentAction && this.changeAction("dead"));
            if (("stay" == this.currentAction || "idle2" == this.currentAction) && !this._isKickoff) this._timerSwitch += a, 1.5 < this._timerSwitch && "stay" == this.currentAction && this.changeAction("idle2"), this._timerSwitch >
                this._delay && (this._timerSwitch = 0, this.changeAction("move"));
            "move" == this.currentAction && !this._isKickoff && ("right" == this._direction && (Math.abs(this.enemySprite.x._value - this._viewR) > this.ENEMY_SPEED ? (b = this.enemySprite.x, b.set__(b._value + this.ENEMY_SPEED)) : (this._direction = "left", this._isDidWork = !1, this.IdleEnemy())), "left" == this._direction && (Math.abs(this.enemySprite.x._value - this._viewL) > this.ENEMY_SPEED ? (b = this.enemySprite.x, b.set__(b._value - this.ENEMY_SPEED)) : (this._direction = "right", this._isDidWork = !1, this.IdleEnemy())), 5 > Math.abs(this._busyPosX - this.enemySprite.x._value) && !this._isDidWork && (this._isDidWork = !0, this.changeAction("busy")));
            "attentionIdle" == this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimer = 0, this.currentAction = "attentionIdle2", this._enemyState = "free", this._moviePlayer.loop("_AttentionIdle", !1)));
            "attentionIdle2" == this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimerStop = 0.8, this._movieTimer =
                0, this.IdleEnemy()));
            "busy" == this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimer = 0, this.IdleEnemy()));
            "busyRedButton" == this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimer = 0, this._ctx.isGameEnd || this._ctx.currentLevel.gameOver()));
            "alert" == this._enemyState && !this._isKickoff && !this._isPushButton && !this._isCry && ("right" == this._direction && (Math.abs(this.enemySprite.x._value - this._viewR) > 2 * this.ENEMY_SPEED ? (b = this.enemySprite.x,
                b.set__(b._value + 2 * this.ENEMY_SPEED)) : (this._direction = "left", this._isCry = !0, this.changeAction("startCry"))), "left" == this._direction && (Math.abs(this.enemySprite.x._value - this._viewL) > 2 * this.ENEMY_SPEED ? (b = this.enemySprite.x, b.set__(b._value - 2 * this.ENEMY_SPEED)) : (this._direction = "right", this._isCry = !0, this.changeAction("startCry"))), 5 > Math.abs(this._redButtonPosX - this.enemySprite.x._value) && (this._isPushButton = !0, this._ctx.currentLevel.globalState = "alert", this.changeAction("busyRedButton")));
            "startCry" ==
            this.currentAction && (this._movieTimer += a, this._movieTimer > this._movieTimerStop && (this._movieTimer = 0, this.changeAction("cry")));
            this._isChilled || (this._timerToChill += a, 2 < this._timerToChill && (this._timerToChill = 0, this._isChilled = !0, this._sign.stopAction()));
            (this.checkForBob() || this._seeEnemyLeft || this._seeEnemyRight) && !this._isKickoff ? (this._isBobInFocus = !0, this._ctx.currentLevel.talert.set__(5), "free" == this._enemyState && (this._enemyState = "warning", this._sign.changeAction("_SignB"), this.changeAction("attention"),
                this._timerWarning += this._timerToChill, this._isChilled = !1), "warning" == this._enemyState && (this._timerWarning += a, 1.5 < this._timerWarning && (this._enemyState = "alert", this._sign.changeAction("_SignA"), this.setAlertDirection(), this._movieTimerStop = 0.4, this.changeAction("alert")))) : (this._timerWarning = 0, this._isBobInFocus && (this._isBobInFocus = !1, "warning" == this._enemyState && (this._movieTimerStop = 0.6, this.currentAction = "attentionIdle", this._enemyState = "free", this._moviePlayer.loop("_AttentionIdle2", !1)), "alert" ==
                this._enemyState && (this._isCry = !1, this._ctx.currentLevel.globalState = "alertTimer", this._sign.changeAction("_SignA"), this.setAlertDirection(), this.changeAction("alert"))))
        },
        checkForBaloon: function() {
            var a = this;
            this._isBalloonShow && null != this._currentBalloon && k.instance(this._currentBalloon._compMap.Sprite_0, i).setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
            Math.abs(this.enemySprite.x._value -
                this._ctx.currentLevel.player._compMap.Sprite_0.x._value) < 20 * this._ctx.currentScaleCoef && Math.abs(this.enemySprite.y._value - this._ctx.currentLevel.player._compMap.Sprite_0.y._value) < 40 * this._ctx.currentScaleCoef && !this._isKickoff && "alert" != this._ctx.currentLevel.globalState && ("stay" == this._ctx.currentLevel.player._compMap.BobHero_34.currentAction || "move" == this._ctx.currentLevel.player._compMap.BobHero_34.currentAction) && this.kickEnemy();
            this.isStairFind = !1;
            if (Math.abs(this._x - this._ctx.currentLevel.player._compMap.Sprite_0.x._value) <
                24 * this._ctx.currentScaleCoef && Math.abs(this._y - this._ctx.currentLevel.player._compMap.BobHero_34.getY()) < 30 * this._ctx.currentScaleCoef && this._isKickoff && this._ctx.haveBox && !this._ctx.isGameEnd && !this._ctx.currentLevel.player._compMap.BobHero_34._bobBusy && (this.isStairFind = !0, !1 == this._isBalloonShow)) {
                this._isBalloonShow = !0;
                var b = new i(this._ctx.pack.getTexture("BalloonBox"));
                this._currentBalloon = (new g).add(b);
                this._ctx.currentLevel._bulkheadLayer.addChild(this._currentBalloon);
                this._ctx.currentLevel.player._compMap.BobHero_34._isNearEnemyBody = !0;
                this._ctx.currentLevel.player._compMap.BobHero_34._currentEnemy = this.owner;
                this._ctx.currentLevel.player._compMap.BobHero_34._enemyNameCover = "Scientist";
                b.setScale(this._ctx.gameScale);
                b.setXY(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - 18 * this._ctx.currentScaleCoef, this._ctx.currentLevel.player._compMap.Sprite_0.y._value - 60 * this._ctx.currentScaleCoef);
                b.get_pointerDown().connect(function() {
                    a.isBoxCovered = !0;
                    a._ctx.currentLevel.player._compMap.BobHero_34._isNearStair ? a._ctx.currentLevel.player._compMap.BobHero_34.changeAction("setboxGostair") :
                        a._ctx.currentLevel.player._compMap.BobHero_34.changeAction("setbox");
                    a._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = a.owner;
                    a._ctx.currentLevel.player._compMap.BobHero_34._enemyNameCover = "Scientist";
                    a.isStairFind = !1;
                    null != a._currentBalloon && (a._isBalloonShow = !1, a._ctx.currentLevel._bulkheadLayer.removeChild(a._currentBalloon), a._currentBalloon.dispose())
                })
            }!1 == this.isStairFind && null != this._currentBalloon && (this._isBalloonShow = !1, this._ctx.currentLevel._bulkheadLayer.removeChild(this._currentBalloon),
                this._currentBalloon.dispose(), this._ctx.currentLevel.player._compMap.BobHero_34._isNearEnemyBody = !1)
        },
        kickEnemy: function() {
            this._ctx.currentLevel.player._compMap.BobHero_34.changeAction("hit");
            this._enemyState = "free";
            this._ctx.kickFirst = !1;
            this._isKickoff = !0;
            this.currentAction = "kicked";
            this._timerWarning = this._timerSwitch = 0;
            this._kickTimerStop = 0.2;
            this._ctx.addObjectsToSave(new ba(this.enemyId, this._x, this.isBoxCovered));
            this.checkShadows()
        },
        CoverTheBox: function() {
            this.isBoxCovered = !0;
            if (1 == this._ctx.currentLevelPart)
                for (var a =
                    0, b = this._ctx.tempObjectsForSave.length; a < b;) {
                    if (this.enemyId == this._ctx.tempObjectsForSave[a].eId) {
                        this._ctx.tempObjectsForSave[a].uBox = !0;
                        break
                    }++a
                }
            if (2 == this._ctx.currentLevelPart) {
                a = 0;
                for (b = this._ctx.tempObjectsForSave2.length; a < b;) {
                    if (this.enemyId == this._ctx.tempObjectsForSave2[a].eId) {
                        this._ctx.tempObjectsForSave2[a].uBox = !0;
                        break
                    }++a
                }
            }
            if (3 == this._ctx.currentLevelPart) {
                a = 0;
                for (b = this._ctx.tempObjectsForSave3.length; a < b;) {
                    if (this.enemyId == this._ctx.tempObjectsForSave3[a].eId) {
                        this._ctx.tempObjectsForSave3[a].uBox = !0;
                        break
                    }++a
                }
            }
            this.owner.remove(this._moviePlayer);
            this._moviePlayer.dispose();
            this._sign.stopAction();
            this.owner.add(a = new i(this._ctx.pack.getTexture("gameObjects/box")));
            a.setScale(this._ctx.gameScale);
            a.centerAnchor();
            a.setXY(this.enemySprite.x._value, this.enemySprite.y._value + 2 * this._ctx.currentScaleCoef);
            a = 0;
            for (b = this._ctx.levelGuards.length; a < b;) this._ctx.levelGuards[a].guardId == this.enemyId && (this._ctx.levelGuards[a].isCovered = !0), ++a
        },
        checkShadows: function() {
            for (var a = 0, b = this._ctx.currentLevel._shadows.length; a <
                b;) {
                if (Math.abs(this._y - this._ctx.currentLevel._shadows[a].getYPos()) < 30 * this._ctx.currentScaleCoef && this._ctx.currentLevel._shadows[a].checkEnemyInShadow(this._x)) {
                    this._inShadow = !0;
                    this._ctx.currentLevel._enemiesLayer.removeChild(this.owner);
                    this._ctx.currentLevel._objectsLayer.addChild(this.owner);
                    break
                }++a
            }!1 == this._inShadow && this._ctx.levelGuards.push(new vb(this._x, this._y, this.enemyId))
        },
        changeAction: function(a, b) {
            null == b && (b = 0);
            this.currentAction = a;
            "move" == this.currentAction && (this._moviePlayer.loop("_Walk", !1), "left" == this._direction && this.enemySprite.scaleX.set__(-1 * Math.abs(this.enemySprite.scaleX._value)), "right" == this._direction && this.enemySprite.scaleX.set__(Math.abs(this.enemySprite.scaleX._value)));
            "kickOff" == this.currentAction && (this._moviePlayer.loop("_Kicked", !0), this._ctx.pack.getSound("sounds/body_fall").play());
            "dead" == this.currentAction && (this.enemySprite.y.set__(this.enemySprite.y._value + 5 * this._ctx.currentScaleCoef), this._sign.changeAction("_SignC"), this._moviePlayer.loop("_Dead", !0));
            "savedead" == this.currentAction && (this.enemySprite.y.set__(this.enemySprite.y._value + 5 * this._ctx.currentScaleCoef), this._sign.changeAction("_SignC"), this.enemySprite.setXY(b, this.enemySprite.y._value), this._moviePlayer.loop("_Dead", !0));
            "attention" == this.currentAction && this._moviePlayer.loop("_Attention", !1);
            "alert" == this.currentAction && this._moviePlayer.loop("_Alert", !1);
            "idle2" == this.currentAction && this._moviePlayer.loop("_Idle2", !1);
            "busy" == this.currentAction && (this._movieTimerStop = 3, this._moviePlayer.loop("_Busy", !0));
            "busyRedButton" == this.currentAction && (this._movieTimerStop = 0.5, this._moviePlayer.loop("_Busy", !0));
            "startCry" == this.currentAction && (this._movieTimerStop = 0.4, this._moviePlayer.loop("_StartCry", !0));
            "cry" == this.currentAction && this._moviePlayer.loop("_Cry", !0)
        },
        checkEnemyLeftSide: function(a, b) {
            a - 20 * this._ctx.gameScale < this._x && a > this._viewL && "left" == this._direction && Math.abs(this._y - b) < 30 * this._ctx.currentScaleCoef ? (this._seeEnemyLeft = !0, this.enemySprite.scaleX.set__(-1 * Math.abs(this.enemySprite.scaleX._value))) :
                this._seeEnemyLeft = !1
        },
        checkEnemyRightSide: function(a, b) {
            a + 20 * this._ctx.gameScale > this._x && a < this._viewR && "right" == this._direction && Math.abs(this._y - b) < 30 * this._ctx.currentScaleCoef ? (this._seeEnemyRight = !0, this.enemySprite.scaleX.set__(Math.abs(this.enemySprite.scaleX._value))) : this._seeEnemyRight = !1
        },
        checkForBob: function() {
            if (this._ctx.currentLevel.player._compMap.BobHero_34._bobInShadow) return !1;
            Math.abs(this._ctx.currentLevel.player._compMap.Sprite_0.x._value - this._x) < 40 * this._ctx.currentScaleCoef &&
                Math.abs(this._ctx.currentLevel.player._compMap.Sprite_0.y._value - this._y) < 40 * this._ctx.currentScaleCoef && "move" != this.currentAction && !this._isKickoff && "alert" != this._enemyState && (this._enemyState = "alert", this._sign.changeAction("_SignA"), this.setAlertDirection(), this._movieTimerStop = 0.4, this.changeAction("alert"));
            if ("stay" != this.currentAction && "left" == this._direction && this._ctx.currentLevel.player._compMap.Sprite_0.x._value < this.enemySprite.x._value && this._ctx.currentLevel.player._compMap.Sprite_0.x._value >
                this._viewL - 10 * this._ctx.currentScaleCoef && Math.abs(this._ctx.currentLevel.player._compMap.Sprite_0.y._value - this._y) < 40 * this._ctx.currentScaleCoef) return this.enemySprite.scaleX.set__(-1 * Math.abs(this.enemySprite.scaleX._value)), !0;
            if ("stay" != this.currentAction && "right" == this._direction && this._ctx.currentLevel.player._compMap.Sprite_0.x._value > this.enemySprite.x._value && this._ctx.currentLevel.player._compMap.Sprite_0.x._value < this._viewR + 10 * this._ctx.currentScaleCoef && Math.abs(this._ctx.currentLevel.player._compMap.Sprite_0.y._value -
                this._y) < 40 * this._ctx.currentScaleCoef) return this.enemySprite.scaleX.set__(Math.abs(this.enemySprite.scaleX._value)), !0;
            if ("attentionIdle2" == this.currentAction) {
                if (this._ctx.currentLevel.player._compMap.Sprite_0.x._value < this.enemySprite.x._value && this._ctx.currentLevel.player._compMap.Sprite_0.x._value > this._viewL - 10 * this._ctx.currentScaleCoef && Math.abs(this._ctx.currentLevel.player._compMap.Sprite_0.y._value - this._y) < 40 * this._ctx.currentScaleCoef) return this.enemySprite.scaleX.set__(-1 * Math.abs(this.enemySprite.scaleX._value)),
                    this._direction = "left", this.IdleEnemy(), !0;
                if (this._ctx.currentLevel.player._compMap.Sprite_0.x._value > this.enemySprite.x._value && this._ctx.currentLevel.player._compMap.Sprite_0.x._value < this._viewR + 10 * this._ctx.currentScaleCoef && Math.abs(this._ctx.currentLevel.player._compMap.Sprite_0.y._value - this._y) < 40 * this._ctx.currentScaleCoef) return this.enemySprite.scaleX.set__(Math.abs(this.enemySprite.scaleX._value)), this._direction = "right", this.IdleEnemy(), !0
            }
            return !1
        },
        IdleEnemy: function() {
            this._enemyIdle = !0;
            this._idleTimer = 0;
            this.currentAction = "stay";
            this._moviePlayer.loop("_Idle", !1);
            this._ctx.pack.getSound("sounds/soldier_idle").play()
        },
        setAlertDirection: function() {
            this.bobDistance = Math.abs(this._ctx.currentLevel.player._compMap.BobHero_34.bobSprite.x._value - this._x);
            this.redButtonDistance = Math.abs(this._redButtonPosX - this._x);
            this.deltaDistance = Math.abs(this.bobDistance - this.redButtonDistance);
            this._redButtonPosX < this._x && (this.redButtonSide = "left");
            this._redButtonPosX > this._x && (this.redButtonSide =
                "right");
            this._ctx.currentLevel.player._compMap.BobHero_34.bobSprite.x._value < this._x && (this.bobSide = "left");
            this._ctx.currentLevel.player._compMap.BobHero_34.bobSprite.x._value > this._x && (this.bobSide = "right");
            if ("left" == this.bobSide && "right" == this.redButtonSide || "left" == this.bobSide && "left" == this.redButtonSide && this.redButtonDistance > this.bobDistance || "right" == this.bobSide && "right" == this.redButtonSide && this.redButtonDistance < this.bobDistance) this._direction = "right", this.enemySprite.scaleX.set__(Math.abs(this.enemySprite.scaleX._value));
            if ("right" == this.bobSide && "left" == this.redButtonSide || "left" == this.bobSide && "left" == this.redButtonSide && this.redButtonDistance < this.bobDistance || "right" == this.bobSide && "right" == this.redButtonSide && this.redButtonDistance > this.bobDistance) this._direction = "left", this.enemySprite.scaleX.set__(-1 * Math.abs(this.enemySprite.scaleX._value))
        },
        __class__: Ab
    });
    var g = function() {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    f["flambe.Entity"] = g;
    g.__name__ = ["flambe", "Entity"];
    g.__interfaces__ = [fa];
    g.prototype = {
        add: function(a) {
            null != a.owner && a.owner.remove(a);
            var b = a.get_name(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null;
            for (c = this.firstComponent; null != c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) {
            for (var b = null, c = this.firstComponent; null != c;) {
                var d = c.next;
                if (c == a) return null == b ? this.firstComponent = d : (b.owner = this, b.next = d), delete this._compMap[c.get_name()], 0 != (c._flags &
                    1) && (c.onStop(), c._flags &= -2), c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = d
            }
            return !1
        },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, d = this.firstChild; null != d;) c = d, d = d.next;
                null != c ? c.next = a : this.firstChild = a
            } else a.next = this.firstChild, this.firstChild = a;
            return this
        },
        removeChild: function(a) {
            for (var b = null, c = this.firstChild; null != c;) {
                var d = c.next;
                if (c == a) {
                    null == b ? this.firstChild = d : b.next = d;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = d
            }
        },
        disposeChildren: function() {
            for (; null != this.firstChild;) this.firstChild.dispose()
        },
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren()
        },
        __class__: g
    };
    var ld = function() {};
    f["flambe.util.PackageLog"] = ld;
    ld.__name__ = ["flambe", "util", "PackageLog"];
    var Ac = function() {};
    f["flambe.platform.Platform"] = Ac;
    Ac.__name__ = ["flambe", "platform", "Platform"];
    Ac.prototype = {
        __class__: Ac
    };
    var ia = function() {};
    f["flambe.platform.html.HtmlPlatform"] =
        ia;
    ia.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    ia.__interfaces__ = [Ac];
    ia.prototype = {
        init: function() {
            var a = this;
            y.fixAndroidMath();
            var b = null;
            try {
                b = window.flambe.canvas
            } catch (c) {
                c instanceof o && (c = c.val)
            }
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            this._stage = new Ia(b);
            this._pointer = new R;
            this._mouse = new Ob(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new Ja;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container = b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var d = 0,
                j = function(c) {
                    if (!(1E3 > c.timeStamp - d)) {
                        var j = b.getBoundingClientRect(),
                            m = a.getX(c, j),
                            j = a.getY(c, j);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(), a._mouse.submitDown(m, j, c.button), b.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(m, j);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(m, j, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a._mouse.submitScroll(m,
                                    j, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", j, !1);
            window.addEventListener("mousemove", j, !1);
            window.addEventListener("mouseup", j, !1);
            b.addEventListener("mousewheel", j, !1);
            b.addEventListener("DOMMouseScroll", j, !1);
            b.addEventListener("contextmenu", function(a) {
                a.preventDefault()
            }, !1);
            var m = "undefined" != typeof window.ontouchstart,
                j = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (m || j) {
                var e = new Pb(this._pointer,
                    m ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = e;
                j = function(b) {
                    var c;
                    c = m ? b.changedTouches : [b];
                    var j = b.target.getBoundingClientRect();
                    d = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            y.SHOULD_HIDE_MOBILE_BROWSER && y.hideMobileBrowser();
                            for (b = 0; b < c.length;) {
                                var g = c[b];
                                ++b;
                                var f = a.getX(g, j),
                                    p = a.getY(g, j);
                                e.submitDown((m ? g.identifier : g.pointerId) | 0, f, p)
                            }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b = 0; b <
                                c.length;) g = c[b], ++b, f = a.getX(g, j), p = a.getY(g, j), e.submitMove((m ? g.identifier : g.pointerId) | 0, f, p);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b = 0; b < c.length;) g = c[b], ++b, f = a.getX(g, j), p = a.getY(g, j), e.submitUp((m ? g.identifier : g.pointerId) | 0, f, p)
                    }
                };
                m ? (b.addEventListener("touchstart", j, !1), b.addEventListener("touchmove", j, !1), b.addEventListener("touchend", j, !1), b.addEventListener("touchcancel", j, !1)) : (b.addEventListener("MSPointerDown", j, !1), b.addEventListener("MSPointerMove",
                    j, !1), b.addEventListener("MSPointerUp", j, !1))
            } else this._touch = new Qb;
            var g = window.onerror;
            window.onerror = function(a, b, c) {
                l.uncaughtError.emit(a);
                return null != g ? g(a, b, c) : !1
            };
            var p = y.loadExtension("hidden", window.document);
            null != p.value ? (j = function() {
                l.hidden.set__(u.field(window.document, p.field))
            }, j(null), window.document.addEventListener(p.prefix + "visibilitychange", j, !1)) : (j = function(a) {
                l.hidden.set__("pagehide" == a.type)
            }, window.addEventListener("pageshow", j, !1), window.addEventListener("pagehide",
                j, !1));
            l.hidden.get_changed().connect(function(b) {
                b || (a._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var f = y.loadExtension("requestAnimationFrame").value;
            if (null != f) {
                var i = window.performance,
                    k = null != i && y.polyfill("now", i);
                k ? this._lastUpdate = i.now() : null;
                var n = null,
                    n = function(c) {
                        a.update(k ? i.now() : c);
                        f(n, b)
                    };
                f(n, b)
            } else window.setInterval(function() {
                a.update(Date.now())
            }, 16);
            j = new Wa;
            j.success.connect(function() {
                Xa.info("Initialized HTML platform", ["renderer", a._renderer.get_type()])
            });
            j.set_result(!0);
            return j
        },
        loadAssetPack: function(a) {
            return (new C(this, a)).promise
        },
        getStage: function() {
            return this._stage
        },
        getStorage: function() {
            if (null == this._storage) {
                var a = Rb.getLocalStorage();
                this._storage = null != a ? new Sb(a) : new Tb
            }
            return this._storage
        },
        getLocale: function() {
            var a = window.navigator.language;
            null == a && (a = window.navigator.userLanguage);
            return a
        },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            l.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b),
                this.mainLoop.render(this._renderer)))
        },
        getPointer: function() {
            return this._pointer
        },
        getRenderer: function() {
            return this._renderer
        },
        getX: function(a, b) {
            return (a.clientX - b.left) * this._stage.get_width() / b.width
        },
        getY: function(a, b) {
            return (a.clientY - b.top) * this._stage.get_height() / b.height
        },
        createRenderer: function(a) {
            return new Ka(a)
        },
        __class__: ia
    };
    var H = function(a, b) {
        this._value = a;
        this._changed = null != b ? new Ya(b) : null
    };
    f["flambe.util.Value"] = H;
    H.__name__ = ["flambe", "util", "Value"];
    H.prototype = {
        watch: function(a) {
            a(this._value,
                this._value);
            return this.get_changed().connect(a)
        },
        set__: function(a) {
            var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a, b));
            return a
        },
        get_changed: function() {
            null == this._changed && (this._changed = new Ya);
            return this._changed
        },
        __class__: H
    };
    var Ya = function(a) {
        N.call(this, a)
    };
    f["flambe.util.Signal2"] = Ya;
    Ya.__name__ = ["flambe", "util", "Signal2"];
    Ya.__super__ = N;
    Ya.prototype = t(N.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a, b) {
            var c =
                this;
            this._head == N.DISPATCHING_SENTINEL ? this.defer(function() {
                c.emitImpl(a, b)
            }) : this.emitImpl(a, b)
        },
        emitImpl: function(a, b) {
            for (var c = this.willEmit(), d = c; null != d;) d._listener(a, b), d.stayInList || d.dispose(), d = d._next;
            this.didEmit(c)
        },
        __class__: Ya
    });
    var G = function(a, b) {
        this._behavior = null;
        H.call(this, a, b)
    };
    f["flambe.animation.AnimatedFloat"] = G;
    G.__name__ = ["flambe", "animation", "AnimatedFloat"];
    G.__super__ = H;
    G.prototype = t(H.prototype, {
        set__: function(a) {
            this._behavior = null;
            return H.prototype.set__.call(this,
                a)
        },
        update: function(a) {
            null != this._behavior && (H.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null))
        },
        animate: function(a, b, c, d) {
            this.set__(a);
            this.animateTo(b, c, d)
        },
        animateTo: function(a, b, c) {
            this.set_behavior(new Ub(this._value, a, b, c))
        },
        set_behavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        __class__: G
    });
    var l = function() {};
    f["flambe.System"] = l;
    l.__name__ = ["flambe", "System"];
    l.init = function() {
        l._calledInit || (l.promise = l._platform.init(),
            l._calledInit = !0);
        return l.promise
    };
    l.loadAssetPack = function(a) {
        return l._platform.loadAssetPack(a)
    };
    var Xa = function() {};
    f["flambe.Log"] = Xa;
    Xa.__name__ = ["flambe", "Log"];
    Xa.info = function() {
        null
    };
    Xa.__super__ = ld;
    Xa.prototype = t(ld.prototype, {
        __class__: Xa
    });
    var Bc = function() {
        this._realDt = 0
    };
    f["flambe.SpeedAdjuster"] = Bc;
    Bc.__name__ = ["flambe", "SpeedAdjuster"];
    Bc.__super__ = h;
    Bc.prototype = t(h.prototype, {
        get_name: function() {
            return "SpeedAdjuster_3"
        },
        onUpdate: function(a) {
            0 < this._realDt && (a = this._realDt, this._realDt =
                0);
            this.scale.update(a)
        },
        __class__: Bc
    });
    var Cc = function() {};
    f["flambe.animation.Behavior"] = Cc;
    Cc.__name__ = ["flambe", "animation", "Behavior"];
    Cc.prototype = {
        __class__: Cc
    };
    var n = function() {};
    f["flambe.animation.Ease"] = n;
    n.__name__ = ["flambe", "animation", "Ease"];
    n.linear = function(a) {
        return a
    };
    n.quadOut = function(a) {
        return a * (2 - a)
    };
    n.sineOut = function(a) {
        return Math.sin(1.5707963267948966 * a)
    };
    n.bounceOut = function(a) {
        return 0.36363636363636365 > a ? 7.5625 * a * a : 0.7272727272727273 > a ? 7.5625 * (a - 0.5454545454545454) *
            (a - 0.5454545454545454) + 0.75 : 0.9090909090909091 > a ? 7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375 : 7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375
    };
    n.circIn = function(a) {
        return 1 - Math.sqrt(1 - a * a)
    };
    n.backIn = function(a) {
        return a * a * (2.70158 * a - 1.70158)
    };
    n.backOut = function(a) {
        return 1 - --a * a * (-2.70158 * a - 1.70158)
    };
    var Ub = function(a, b, c, d) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != d ? d : n.linear
    };
    f["flambe.animation.Tween"] = Ub;
    Ub.__name__ = ["flambe", "animation",
        "Tween"
    ];
    Ub.__interfaces__ = [Cc];
    Ub.prototype = {
        update: function(a) {
            this.elapsed += a;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function() {
            return this.elapsed >= this._duration
        },
        __class__: Ub
    };
    var Aa = function() {};
    f["flambe.asset.Asset"] = Aa;
    Aa.__name__ = ["flambe", "asset", "Asset"];
    Aa.__interfaces__ = [fa];
    Aa.prototype = {
        __class__: Aa
    };
    var r = f["flambe.asset.AssetFormat"] = {
        __ename__: ["flambe", "asset", "AssetFormat"],
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    r.WEBP = ["WEBP", 0];
    r.WEBP.toString = v;
    r.WEBP.__enum__ = r;
    r.JXR = ["JXR", 1];
    r.JXR.toString = v;
    r.JXR.__enum__ = r;
    r.PNG = ["PNG", 2];
    r.PNG.toString = v;
    r.PNG.__enum__ = r;
    r.JPG = ["JPG", 3];
    r.JPG.toString = v;
    r.JPG.__enum__ = r;
    r.GIF = ["GIF", 4];
    r.GIF.toString = v;
    r.GIF.__enum__ = r;
    r.DDS = ["DDS", 5];
    r.DDS.toString = v;
    r.DDS.__enum__ = r;
    r.PVR = ["PVR", 6];
    r.PVR.toString = v;
    r.PVR.__enum__ = r;
    r.PKM = ["PKM", 7];
    r.PKM.toString = v;
    r.PKM.__enum__ = r;
    r.MP3 = ["MP3", 8];
    r.MP3.toString = v;
    r.MP3.__enum__ = r;
    r.M4A = ["M4A", 9];
    r.M4A.toString = v;
    r.M4A.__enum__ =
        r;
    r.OPUS = ["OPUS", 10];
    r.OPUS.toString = v;
    r.OPUS.__enum__ = r;
    r.OGG = ["OGG", 11];
    r.OGG.toString = v;
    r.OGG.__enum__ = r;
    r.WAV = ["WAV", 12];
    r.WAV.toString = v;
    r.WAV.__enum__ = r;
    r.Data = ["Data", 13];
    r.Data.toString = v;
    r.Data.__enum__ = r;
    var Dc = function(a, b, c, d) {
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = d
    };
    f["flambe.asset.AssetEntry"] = Dc;
    Dc.__name__ = ["flambe", "asset", "AssetEntry"];
    Dc.prototype = {
        __class__: Dc
    };
    var Vb = function() {};
    f["flambe.asset.AssetPack"] = Vb;
    Vb.__name__ = ["flambe", "asset", "AssetPack"];
    Vb.__interfaces__ = [fa];
    Vb.prototype = {
        __class__: Vb
    };
    var Wb = function() {};
    f["flambe.asset.File"] = Wb;
    Wb.__name__ = ["flambe", "asset", "File"];
    Wb.__interfaces__ = [Aa];
    Wb.prototype = {
        __class__: Wb
    };
    var O = function() {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    f["flambe.asset.Manifest"] = O;
    O.__name__ = ["flambe", "asset", "Manifest"];
    O.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = u.field(Xb.getType(O).assets[0], a);
        if (null == c) {
            if (b) throw new o(M.withFields("Missing asset pack", ["name", a]));
            return null
        }
        var d = new O;
        d.set_localBase("assets");
        for (var j = 0; j < c.length;) {
            var m = c[j];
            ++j;
            var e = m.name,
                g = a + "/" + e + "?v=" + k.string(m.md5),
                f = O.inferFormat(e);
            f != r.Data && (e = M.removeFileExtension(e));
            d.add(e, g, m.bytes, f)
        }
        return d
    };
    O.fromAssetsLocalized = function(a, b, c) {
        null == c && (c = !0);
        null == b && (b = l._platform.getLocale());
        if (null != b)
            for (b = b.split("-"); 0 < b.length;) {
                var d = O.fromAssets(a + "_" + b.join("-"), !1);
                if (null != d) return d;
                b.pop()
            }
        return O.fromAssets(a, c)
    };
    O.inferFormat = function(a) {
        a = M.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return r.GIF;
            case "jpg":
            case "jpeg":
                return r.JPG;
            case "jxr":
            case "wdp":
                return r.JXR;
            case "png":
                return r.PNG;
            case "webp":
                return r.WEBP;
            case "dds":
                return r.DDS;
            case "pvr":
                return r.PVR;
            case "pkm":
                return r.PKM;
            case "m4a":
                return r.M4A;
            case "mp3":
                return r.MP3;
            case "ogg":
                return r.OGG;
            case "opus":
                return r.OPUS;
            case "wav":
                return r.WAV
        } else null;
        return r.Data
    };
    O.prototype = {
        add: function(a, b, c, d) {
            null == c && (c = 0);
            null == d && (d = O.inferFormat(b));
            a = new Dc(a, b, d, c);
            this._entries.push(a);
            return a
        },
        iterator: function() {
            return w.iter(this._entries)
        },
        getFullURL: function(a) {
            var b;
            b = null != this.get_remoteBase() && O._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != b ? M.joinPath(b, a.url) : a.url
        },
        get_localBase: function() {
            return this._localBase
        },
        set_localBase: function(a) {
            null != a && md.that(!K.startsWith(a, "http://") && !K.startsWith(a, "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://", null);
            return this._localBase = a
        },
        get_remoteBase: function() {
            return this._remoteBase
        },
        __class__: O
    };
    var J = f["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",")
    };
    J.Normal = ["Normal", 0];
    J.Normal.toString = v;
    J.Normal.__enum__ = J;
    J.Add = ["Add", 1];
    J.Add.toString = v;
    J.Add.__enum__ = J;
    J.Multiply = ["Multiply", 2];
    J.Multiply.toString = v;
    J.Multiply.__enum__ = J;
    J.Screen = ["Screen", 3];
    J.Screen.toString = v;
    J.Screen.__enum__ = J;
    J.Mask = ["Mask", 4];
    J.Mask.toString = v;
    J.Mask.__enum__ = J;
    J.Copy = ["Copy", 5];
    J.Copy.toString = v;
    J.Copy.__enum__ = J;
    var Yb = function(a, b) {
        null == b && (b = 0);
        null ==
            a && (a = 0);
        this.x = a;
        this.y = b
    };
    f["flambe.math.Point"] = Yb;
    Yb.__name__ = ["flambe", "math", "Point"];
    Yb.prototype = {
        __class__: Yb
    };
    var q = function() {
        this.blendMode = this.scissor = null;
        var a = this;
        h.call(this);
        this._flags |= 54;
        this._localMatrix = new La;
        var b = function() {
            a._flags |= 24
        };
        this.x = new G(0, b);
        this.y = new G(0, b);
        this.rotation = new G(0, b);
        this.scaleX = new G(1, b);
        this.scaleY = new G(1, b);
        this.anchorX = new G(0, b);
        this.anchorY = new G(0, b);
        this.alpha = new G(1)
    };
    f["flambe.display.Sprite"] = q;
    q.__name__ = ["flambe", "display",
        "Sprite"
    ];
    q.hitTest = function(a, b, c) {
        var d = a._compMap.Sprite_0;
        if (null != d) {
            if (6 != (d._flags & 6)) return null;
            d.getLocalMatrix().inverseTransform(b, c, q._scratchPoint) && (b = q._scratchPoint.x, c = q._scratchPoint.y);
            var j = d.scissor;
            if (null != j && !j.contains(b, c)) return null
        }
        a = q.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != d && d.containsLocal(b, c) ? d : null
    };
    q.getBounds = function(a, b) {
        null == b && (b = new Zb);
        b.set(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308, -1.79769313486231E308);
        q.getBoundsImpl(a,
            null, b);
        b.width -= b.x;
        b.height -= b.y;
        return b
    };
    q.render = function(a, b) {
        var c = a._compMap.Sprite_0;
        if (null != c) {
            var d = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= d) return;
            b.save();
            1 > d && b.multiplyAlpha(d);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var d = c.getLocalMatrix(),
                j = d.m02,
                m = d.m12;
            0 != (c._flags & 32) && (j = Math.round(j), m = Math.round(m));
            b.transform(d.m00, d.m10, d.m01, d.m11, j, m);
            d = c.scissor;
            null != d && b.applyScissor(d.x, d.y, d.width, d.height);
            c.draw(b)
        }
        d = a._compMap.Director_2;
        if (null != d) {
            d = d.occludedScenes;
            for (j =
                0; j < d.length;) m = d[j], ++j, q.render(m, b)
        }
        for (d = a.firstChild; null != d;) j = d.next, q.render(d, b), d = j;
        null != c && b.restore()
    };
    q.hitTestBackwards = function(a, b, c) {
        if (null != a) {
            var d = q.hitTestBackwards(a.next, b, c);
            return null != d ? d : q.hitTest(a, b, c)
        }
        return null
    };
    q.getBoundsImpl = function(a, b, c) {
        var d = a._compMap.Sprite_0;
        if (null != d) {
            var b = null != b ? La.multiply(b, d.getLocalMatrix()) : d.getLocalMatrix(),
                j = d.getNaturalWidth(),
                d = d.getNaturalHeight();
            0 < j && 0 < d && (q.extendRect(b, 0, 0, c), q.extendRect(b, j, 0, c), q.extendRect(b, j,
                d, c), q.extendRect(b, 0, d, c))
        }
        j = a._compMap.Director_2;
        if (null != j)
            for (var j = j.occludedScenes, d = 0, m = j.length; d < m;) q.getBoundsImpl(j[d], b, c), ++d;
        for (a = a.firstChild; null != a;) j = a.next, q.getBoundsImpl(a, b, c), a = j
    };
    q.extendRect = function(a, b, c, d) {
        a = a.transform(b, c, q._scratchPoint);
        b = a.x;
        c = a.y;
        b < d.x && (d.x = b);
        c < d.y && (d.y = c);
        b > d.width && (d.width = b);
        c > d.height && (d.height = c)
    };
    q.__super__ = h;
    q.prototype = t(h.prototype, {
        get_name: function() {
            return "Sprite_0"
        },
        getNaturalWidth: function() {
            return 0
        },
        getNaturalHeight: function() {
            return 0
        },
        containsLocal: function(a, b) {
            return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
        },
        getLocalMatrix: function() {
            0 != (this._flags & 8) && (this._flags &= -9, this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180), this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value));
            return this._localMatrix
        },
        setAnchor: function(a, b) {
            this.anchorX.set__(a);
            this.anchorY.set__(b);
            return this
        },
        centerAnchor: function() {
            this.anchorX.set__(this.getNaturalWidth() /
                2);
            this.anchorY.set__(this.getNaturalHeight() / 2);
            return this
        },
        setXY: function(a, b) {
            this.x.set__(a);
            this.y.set__(b);
            return this
        },
        setAlpha: function(a) {
            this.alpha.set__(a);
            return this
        },
        setScale: function(a) {
            this.scaleX.set__(a);
            this.scaleY.set__(a);
            return this
        },
        onAdded: function() {
            0 != (this._flags & 64) && this.connectHover()
        },
        onRemoved: function() {
            null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
        },
        onUpdate: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a)
        },
        draw: function() {},
        getParentSprite: function() {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null != a;) {
                var b = a._compMap.Sprite_0;
                if (null != b) return b;
                a = a.parent
            }
            return null
        },
        get_pointerDown: function() {
            null == this._pointerDown && (this._pointerDown = new I);
            return this._pointerDown
        },
        get_pointerUp: function() {
            null == this._pointerUp && (this._pointerUp = new I);
            return this._pointerUp
        },
        connectHover: function() {
            var a =
                this;
            null == this._hoverConnection && (this._hoverConnection = l._platform.getPointer().move.connect(function(b) {
                for (var c = b.hit; null != c;) {
                    if (c == a) return;
                    c = c.getParentSprite()
                }
                null != a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                a._hoverConnection.dispose();
                a._hoverConnection = null
            }))
        },
        set_visible: function(a) {
            this._flags = Ec.set(this._flags, 2, a);
            return a
        },
        set_pointerEnabled: function(a) {
            this._flags = Ec.set(this._flags, 4, a);
            return a
        },
        onPointerDown: function(a) {
            this.onHover(a);
            null != this._pointerDown &&
                this._pointerDown.emit(a)
        },
        onPointerMove: function(a) {
            this.onHover(a);
            null != this._pointerMove && this._pointerMove.emit(a)
        },
        onHover: function(a) {
            if (0 == (this._flags & 64) && (this._flags |= 64, null != this._pointerIn || null != this._pointerOut)) null != this._pointerIn && this._pointerIn.emit(a), this.connectHover()
        },
        onPointerUp: function(a) {
            switch (a.source[1]) {
                case 1:
                    null != this._pointerOut && 0 != (this._flags & 64) && this._pointerOut.emit(a), this._flags &= -65, null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection =
                        null)
            }
            null != this._pointerUp && this._pointerUp.emit(a)
        },
        __class__: q
    });
    var Za = function(a, b, c) {
        q.call(this);
        this.color = a;
        this.width = new G(b);
        this.height = new G(c)
    };
    f["flambe.display.FillSprite"] = Za;
    Za.__name__ = ["flambe", "display", "FillSprite"];
    Za.__super__ = q;
    Za.prototype = t(q.prototype, {
        draw: function(a) {
            a.fillRect(this.color, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        onUpdate: function(a) {
            q.prototype.onUpdate.call(this,
                a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: Za
    });
    var $b = function(a) {
        this._kernings = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a
    };
    f["flambe.display.Glyph"] = $b;
    $b.__name__ = ["flambe", "display", "Glyph"];
    $b.prototype = {
        draw: function(a, b, c) {
            0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
        },
        getKerning: function(a) {
            return null != this._kernings ? k["int"](this._kernings.h[a]) :
                0
        },
        setKerning: function(a, b) {
            null == this._kernings && (this._kernings = new ca);
            this._kernings.h[a] = b
        },
        __class__: $b
    };
    var Z = function(a, b) {
        this.name = b;
        this._pack = a;
        this._file = a.getFile(b + ".fnt");
        this.reload()
    };
    f["flambe.display.Font"] = Z;
    Z.__name__ = ["flambe", "display", "Font"];
    Z.prototype = {
        layoutText: function(a, b, c, d, j) {
            null == j && (j = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = W.Left);
            return new Ba(this, a, b, c, d, j)
        },
        reload: function() {
            this._glyphs = new ca;
            this._glyphs.h[Z.NEWLINE.charCode] = Z.NEWLINE;
            for (var a =
                new Ma(this._file.toString()), b = new ca, c = this.name.lastIndexOf("/"), c = 0 <= c ? w.substr(this.name, 0, c + 1) : "", d = a.keywords(); d.hasNext();) switch (d.next()) {
                case "info":
                    for (var j = a.pairs(); j.hasNext();) {
                        var m = j.next();
                        switch (m.key) {
                            case "size":
                                this.size = m.getInt()
                        }
                    }
                    break;
                case "common":
                    for (j = a.pairs(); j.hasNext();) switch (m = j.next(), m.key) {
                        case "lineHeight":
                            this.lineHeight = m.getInt()
                    }
                    break;
                case "page":
                    for (var j = 0, m = null, e = a.pairs(); e.hasNext();) {
                        var g = e.next();
                        switch (g.key) {
                            case "id":
                                j = g.getInt();
                                break;
                            case "file":
                                m =
                                    g.getString()
                        }
                    }
                    m = this._pack.getTexture(c + M.removeFileExtension(m));
                    b.h[j] = m;
                    break;
                case "char":
                    j = null;
                    for (m = a.pairs(); m.hasNext();) switch (e = m.next(), e.key) {
                        case "id":
                            j = new $b(e.getInt());
                            break;
                        case "x":
                            j.x = e.getInt();
                            break;
                        case "y":
                            j.y = e.getInt();
                            break;
                        case "width":
                            j.width = e.getInt();
                            break;
                        case "height":
                            j.height = e.getInt();
                            break;
                        case "page":
                            e = e.getInt();
                            j.page = b.h[e];
                            break;
                        case "xoffset":
                            j.xOffset = e.getInt();
                            break;
                        case "yoffset":
                            j.yOffset = e.getInt();
                            break;
                        case "xadvance":
                            j.xAdvance = e.getInt()
                    }
                    this._glyphs.h[j.charCode] =
                        j;
                    break;
                case "kerning":
                    j = null;
                    e = m = 0;
                    for (g = a.pairs(); g.hasNext();) {
                        var f = g.next();
                        switch (f.key) {
                            case "first":
                                j = this._glyphs.h[f.getInt()];
                                break;
                            case "second":
                                m = f.getInt();
                                break;
                            case "amount":
                                e = f.getInt()
                        }
                    }
                    null != j && 0 != e && j.setKerning(m, e)
            }
        },
        __class__: Z
    };
    var W = f["flambe.display.TextAlign"] = {
        __ename__: ["flambe", "display", "TextAlign"],
        __constructs__: ["Left", "Center", "Right"]
    };
    W.Left = ["Left", 0];
    W.Left.toString = v;
    W.Left.__enum__ = W;
    W.Center = ["Center", 1];
    W.Center.toString = v;
    W.Center.__enum__ = W;
    W.Right = ["Right",
        2
    ];
    W.Right.toString = v;
    W.Right.__enum__ = W;
    var Ba = function(a, b, c, d, j, e) {
        this.lines = 0;
        var g = this;
        this._font = a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + e);
        this.bounds = new Zb;
        for (var f = [], e = b.length, p = 0; p < e;) {
            var i = p++,
                i = b.charCodeAt(i),
                i = a._glyphs.h[i];
            null != i ? this._glyphs.push(i) : null
        }
        for (var b = -1, k = 0, l = 0, a = a._glyphs.h[10], e = function() {
            g.bounds.width = Na.max(g.bounds.width, k);
            g.bounds.height += l;
            f[g.lines] = k;
            l = k = 0;
            ++g.lines
        }, p = 0; p < this._glyphs.length;) {
            i = this._glyphs[p];
            this._offsets[p] = Math.round(k);
            var n = 0 < d && k + i.width > d;
            n || i == a ? (n && (0 <= b ? (this._glyphs[b] = a, k = this._offsets[b], p = b) : this._glyphs.splice(p, 0, a)), b = -1, l = this._lineOffset, e()) : (32 == i.charCode && (b = p), k += i.xAdvance + j, l = Na.max(l, i.height + i.yOffset), p + 1 < this._glyphs.length && (k += i.getKerning(this._glyphs[p + 1].charCode)));
            ++p
        }
        e();
        j = 0;
        a = Ba.getAlignOffset(c, f[0], d);
        b = 1.79769313486231E308;
        e = -1.79769313486231E308;
        i = p = 0;
        for (n = this._glyphs.length; i < n;) {
            var h = this._glyphs[i];
            10 == h.charCode && (j += this._lineOffset, ++p,
                a = Ba.getAlignOffset(c, f[p], d));
            this._offsets[i] += a;
            var o = j + h.yOffset,
                b = b < o ? b : o,
                e = Na.max(e, o + h.height);
            ++i
        }
        this.bounds.x = Ba.getAlignOffset(c, this.bounds.width, d);
        this.bounds.y = b;
        this.bounds.height = e - b
    };
    f["flambe.display.TextLayout"] = Ba;
    Ba.__name__ = ["flambe", "display", "TextLayout"];
    Ba.getAlignOffset = function(a, b, c) {
        switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return c - b;
            case 1:
                return Math.round((c - b) / 2)
        }
    };
    Ba.prototype = {
        draw: function(a) {
            for (var b = 0, c = 0, d = this._glyphs.length; c < d;) {
                var j = this._glyphs[c];
                10 == j.charCode ?
                    b += this._lineOffset : j.draw(a, this._offsets[c], b);
                ++c
            }
        },
        __class__: Ba
    };
    var Ma = function(a) {
        this._configText = a;
        this._keywordPattern = new P("([A-Za-z]+)(.*)", "");
        this._pairPattern = new P('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    f["flambe.display._Font.ConfigParser"] = Ma;
    Ma.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    Ma.advance = function(a, b) {
        var c = b.matchedPos();
        return w.substr(a, c.pos + c.len, a.length)
    };
    Ma.prototype = {
        keywords: function() {
            var a = this,
                b = this._configText;
            return {
                next: function() {
                    b = Ma.advance(b,
                        a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2);
                    return a._keywordPattern.matched(1)
                },
                hasNext: function() {
                    return a._keywordPattern.match(b)
                }
            }
        },
        pairs: function() {
            var a = this,
                b = this._pairText;
            return {
                next: function() {
                    b = Ma.advance(b, a._pairPattern);
                    return new Fc(a._pairPattern.matched(1), a._pairPattern.matched(2))
                },
                hasNext: function() {
                    return a._pairPattern.match(b)
                }
            }
        },
        __class__: Ma
    };
    var Fc = function(a, b) {
        this.key = a;
        this._value = b
    };
    f["flambe.display._Font.ConfigPair"] = Fc;
    Fc.__name__ = ["flambe", "display",
        "_Font", "ConfigPair"
    ];
    Fc.prototype = {
        getInt: function() {
            return k.parseInt(this._value)
        },
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null : w.substr(this._value, 1, this._value.length - 2)
        },
        __class__: Fc
    };
    var Gc = function() {};
    f["flambe.display.Graphics"] = Gc;
    Gc.__name__ = ["flambe", "display", "Graphics"];
    Gc.prototype = {
        __class__: Gc
    };
    var i = function(a) {
        q.call(this);
        this.texture = a
    };
    f["flambe.display.ImageSprite"] = i;
    i.__name__ = ["flambe", "display", "ImageSprite"];
    i.__super__ = q;
    i.prototype = t(q.prototype, {
        draw: function(a) {
            null !=
                this.texture && a.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function() {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: i
    });
    var wa = f["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    wa.Portrait = ["Portrait", 0];
    wa.Portrait.toString = v;
    wa.Portrait.__enum__ = wa;
    wa.Landscape = ["Landscape", 1];
    wa.Landscape.toString = v;
    wa.Landscape.__enum__ = wa;
    var $a = function(a, b, c) {
        null == c && (c = -1);
        null == b && (b = -1);
        q.call(this);
        this.texture = a;
        0 > b && (b = null != a ? a.get_width() : 0);
        this.width = new G(b);
        0 > c && (c = null != a ? a.get_height() : 0);
        this.height = new G(c)
    };
    f["flambe.display.PatternSprite"] = $a;
    $a.__name__ = ["flambe", "display", "PatternSprite"];
    $a.__super__ = q;
    $a.prototype = t(q.prototype, {
        draw: function(a) {
            null != this.texture && a.drawPattern(this.texture, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        onUpdate: function(a) {
            q.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: $a
    });
    var ac = function() {};
    f["flambe.display.Texture"] = ac;
    ac.__name__ = ["flambe", "display", "Texture"];
    ac.__interfaces__ = [Aa];
    ac.prototype = {
        __class__: ac
    };
    var nd = function() {};
    f["flambe.display.SubTexture"] = nd;
    nd.__name__ = ["flambe", "display", "SubTexture"];
    nd.__interfaces__ = [ac];
    var na = function(a, b) {
        null == b && (b = "");
        this._layout = null;
        var c = this;
        q.call(this);
        this._font = a;
        this._text = b;
        this._align = W.Left;
        this._flags |= 128;
        var d = function() {
            c._flags |= 128
        };
        this.wrapWidth = new G(0, d);
        this.letterSpacing = new G(0, d);
        this.lineSpacing = new G(0, d)
    };
    f["flambe.display.TextSprite"] = na;
    na.__name__ = ["flambe", "display", "TextSprite"];
    na.__super__ = q;
    na.prototype = t(q.prototype, {
        draw: function(a) {
            this.updateLayout();
            this._layout.draw(a)
        },
        getNaturalWidth: function() {
            this.updateLayout();
            return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width
        },
        getNaturalHeight: function() {
            this.updateLayout();
            var a = this._layout.lines *
                (this._font.lineHeight + this.lineSpacing._value),
                b = this._layout.bounds.height;
            return a > b ? a : b
        },
        containsLocal: function(a, b) {
            this.updateLayout();
            return this._layout.bounds.contains(a, b)
        },
        setWrapWidth: function(a) {
            this.wrapWidth.set__(a);
            return this
        },
        setAlign: function(a) {
            this.set_align(a);
            return this
        },
        set_text: function(a) {
            a != this._text && (this._text = a, this._flags |= 128);
            return a
        },
        set_align: function(a) {
            a != this._align && (this._align = a, this._flags |= 128);
            return a
        },
        updateLayout: function() {
            0 != (this._flags & 128) &&
                (this._flags &= -129, this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value))
        },
        onUpdate: function(a) {
            q.prototype.onUpdate.call(this, a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: na
    });
    var S = f["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    S.Left = ["Left", 0];
    S.Left.toString = v;
    S.Left.__enum__ = S;
    S.Middle = ["Middle",
        1
    ];
    S.Middle.toString = v;
    S.Middle.__enum__ = S;
    S.Right = ["Right", 2];
    S.Right.toString = v;
    S.Right.__enum__ = S;
    S.Unknown = function(a) {
        a = ["Unknown", 3, a];
        a.__enum__ = S;
        a.toString = v;
        return a
    };
    var da = f["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    da.Default = ["Default", 0];
    da.Default.toString = v;
    da.Default.__enum__ = da;
    da.Button = ["Button", 1];
    da.Button.toString = v;
    da.Button.__enum__ = da;
    da.None = ["None", 2];
    da.None.toString = v;
    da.None.__enum__ = da;
    var Hc =
        function() {
            this.init(0, 0, 0, null)
        };
    f["flambe.input.MouseEvent"] = Hc;
    Hc.__name__ = ["flambe", "input", "MouseEvent"];
    Hc.prototype = {
        init: function(a, b, c, d) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = d
        },
        __class__: Hc
    };
    var bc = f["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    bc.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = bc;
        a.toString = v;
        return a
    };
    bc.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = bc;
        a.toString = v;
        return a
    };
    var Ic = function() {
        this.init(0,
            0, 0, null, null)
    };
    f["flambe.input.PointerEvent"] = Ic;
    Ic.__name__ = ["flambe", "input", "PointerEvent"];
    Ic.prototype = {
        init: function(a, b, c, d, j) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = d;
            this.source = j;
            this._stopped = !1
        },
        __class__: Ic
    };
    var Jc = function(a) {
        this.id = a;
        this._source = bc.Touch(this)
    };
    f["flambe.input.TouchPoint"] = Jc;
    Jc.__name__ = ["flambe", "input", "TouchPoint"];
    Jc.prototype = {
        init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: Jc
    };
    var Na = function() {};
    f["flambe.math.FMath"] = Na;
    Na.__name__ = ["flambe",
        "math", "FMath"
    ];
    Na.max = function(a, b) {
        return a > b ? a : b
    };
    Na.clamp = function(a, b, c) {
        return a < b ? b : a > c ? c : a
    };
    var La = function() {
        this.identity()
    };
    f["flambe.math.Matrix"] = La;
    La.__name__ = ["flambe", "math", "Matrix"];
    La.multiply = function(a, b, c) {
        null == c && (c = new La);
        var d = a.m00 * b.m00 + a.m01 * b.m10,
            j = a.m00 * b.m01 + a.m01 * b.m11,
            e = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = d;
        c.m01 = j;
        c.m02 = e;
        d = a.m10 * b.m00 + a.m11 * b.m10;
        j = a.m10 * b.m01 + a.m11 * b.m11;
        e = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = d;
        c.m11 = j;
        c.m12 = e;
        return c
    };
    La.prototype = {
        set: function(a,
            b, c, d, j, e) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = j;
            this.m10 = b;
            this.m11 = d;
            this.m12 = e
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        compose: function(a, b, c, d, j) {
            var e = Math.sin(j),
                j = Math.cos(j);
            this.set(j * c, e * c, -e * d, j * d, a, b)
        },
        translate: function(a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        transform: function(a, b, c) {
            null == c && (c = new Yb);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12;
            return c
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        inverseTransform: function(a,
            b, c) {
            var d = this.determinant();
            if (0 == d) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / d;
            c.y = (b * this.m00 - a * this.m10) / d;
            return !0
        },
        __class__: La
    };
    var Zb = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, d)
    };
    f["flambe.math.Rectangle"] = Zb;
    Zb.__name__ = ["flambe", "math", "Rectangle"];
    Zb.prototype = {
        set: function(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.width = c;
            this.height = d
        },
        contains: function(a, b) {
            a -= this.x;
            if (0 <= this.width) {
                if (0 > a || a > this.width) return !1
            } else if (0 <
                a || a < this.width) return !1;
            b -= this.y;
            if (0 <= this.height) {
                if (0 > b || b > this.height) return !1
            } else if (0 < b || b < this.height) return !1;
            return !0
        },
        __class__: Zb
    };
    var U = function() {
        this._disposed = !1
    };
    f["flambe.platform.BasicAsset"] = U;
    U.__name__ = ["flambe", "platform", "BasicAsset"];
    U.__interfaces__ = [Aa];
    U.prototype = {
        dispose: function() {
            this._disposed || (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function() {
            null
        },
        __class__: U
    };
    var Ca = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new Wa;
        this._bytesLoaded =
            new L;
        this._pack = new cc(b, this);
        var d = ta.array(b);
        if (0 == d.length) this.handleSuccess();
        else {
            for (var j = new L, e = 0; e < d.length;) {
                var g = d[e];
                ++e;
                var f = j.get(g.name);
                null == f && (f = [], j.set(g.name, f));
                f.push(g)
            }
            this._assetsRemaining = ta.count(j);
            for (d = new dc(j, j.arrayKeys()); d.hasNext();) j = [d.next()], this.pickBestEntry(j[0], function(a) {
                return function(d) {
                    if (null != d) {
                        var j = b.getFullURL(d);
                        try {
                            c.loadEntry(j, d)
                        } catch (e) {
                            e instanceof o && (e = e.val), c.handleError(d, "Unexpected error: " + k.string(e))
                        }
                        j = c.promise;
                        j.set_total(j._total +
                            d.bytes)
                    } else d = a[0][0], Ca.isAudio(d.format) ? c.handleLoad(d, $.getInstance()) : c.handleError(d, "Could not find a supported format to load")
                }
            }(j))
        }
    };
    f["flambe.platform.BasicAssetPackLoader"] = Ca;
    Ca.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    Ca.isAudio = function(a) {
        switch (a[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return !0;
            default:
                return !1
        }
    };
    Ca.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a, b) {
            this.getAssetFormats(function(c) {
                for (var d = 0; d < c.length;) {
                    var j = c[d];
                    ++d;
                    for (var e = 0; e <
                        a.length;) {
                        var g = a[e];
                        ++e;
                        if (g.format == j) {
                            b(g);
                            return
                        }
                    }
                }
                b(null)
            })
        },
        loadEntry: function() {
            null
        },
        getAssetFormats: function() {
            null
        },
        handleLoad: function(a, b) {
            if (!this._pack.disposed) {
                this.handleProgress(a, a.bytes);
                var c;
                switch (a.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        c = this._pack.textures;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        c = this._pack.sounds;
                        break;
                    case 13:
                        c = this._pack.files
                }
                c.set(a.name, b);
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(a,
            b) {
            this._bytesLoaded.set(a.name, b);
            for (var c = 0, d = this._bytesLoaded.iterator(); d.hasNext();) var j = d.next(),
                c = c + j;
            this.promise.set_progress(c)
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleError: function(a, b) {
            this.promise.error.emit(M.withFields(b, ["url", a.url]))
        },
        handleTextureError: function(a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: Ca
    };
    var cc = function(a, b) {
        this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new L;
        this.sounds = new L;
        this.files = new L
    };
    f["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = cc;
    cc.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    cc.__interfaces__ = [Vb];
    cc.prototype = {
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures.get(a);
            if (null == c && b) throw new o(M.withFields("Missing texture", ["name", a]));
            return c
        },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw new o(M.withFields("Missing sound", ["name", a]));
            return c
        },
        getFile: function(a,
            b) {
            null == b && (b = !0);
            var c = this.files.get(a);
            if (null == c && b) throw new o(M.withFields("Missing file", ["name", a]));
            return c
        },
        dispose: function() {
            if (!this.disposed) {
                this.disposed = !0;
                for (var a = this.textures.iterator(); a.hasNext();) a.next().dispose();
                this.textures = null;
                for (a = this.sounds.iterator(); a.hasNext();) a.next().dispose();
                this.sounds = null;
                for (a = this.files.iterator(); a.hasNext();) a.next().dispose();
                this.files = null;
                this.loader.onDisposed()
            }
        },
        __class__: cc
    };
    var ab = function(a) {
        this._disposed = !1;
        this._content =
            a
    };
    f["flambe.platform.BasicFile"] = ab;
    ab.__name__ = ["flambe", "platform", "BasicFile"];
    ab.__interfaces__ = [Wb];
    ab.__super__ = U;
    ab.prototype = t(U.prototype, {
        toString: function() {
            return this._content
        },
        onDisposed: function() {
            this._content = null
        },
        __class__: ab
    });
    var Kc = function() {};
    f["flambe.subsystem.MouseSystem"] = Kc;
    Kc.__name__ = ["flambe", "subsystem", "MouseSystem"];
    Kc.prototype = {
        __class__: Kc
    };
    var X = function(a) {
        this._pointer = a;
        this._source = bc.Mouse(X._sharedEvent);
        this.down = new I;
        this.move = new I;
        this.up = new I;
        this.scroll =
            new I;
        this._y = this._x = 0;
        this._cursor = da.Default;
        this._buttonStates = new ca
    };
    f["flambe.platform.BasicMouse"] = X;
    X.__name__ = ["flambe", "platform", "BasicMouse"];
    X.__interfaces__ = [Kc];
    X.prototype = {
        submitDown: function(a, b, c) {
            this._buttonStates.h.hasOwnProperty(c) || (this._buttonStates.h[c] = !0, this.prepare(a, b, Lc.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit(X._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit(X._sharedEvent)
        },
        submitUp: function(a, b, c) {
            this._buttonStates.h.hasOwnProperty(c) && (this._buttonStates.remove(c), this.prepare(a, b, Lc.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(X._sharedEvent))
        },
        submitScroll: function(a, b, c) {
            this._x = a;
            this._y = b;
            if (null == this.scroll._head) return !1;
            this.scroll.emit(c);
            return !0
        },
        prepare: function(a, b, c) {
            this._x = a;
            this._y = b;
            X._sharedEvent.init(X._sharedEvent.id + 1, a, b, c)
        },
        __class__: X
    };
    var Mc = function() {};
    f["flambe.subsystem.PointerSystem"] = Mc;
    Mc.__name__ = ["flambe",
        "subsystem", "PointerSystem"
    ];
    Mc.prototype = {
        __class__: Mc
    };
    var R = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new I;
        this.move = new I;
        this.up = new I;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    f["flambe.platform.BasicPointer"] = R;
    R.__name__ = ["flambe", "platform", "BasicPointer"];
    R.__interfaces__ = [Mc];
    R.prototype = {
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !0;
                var d = [],
                    j = q.hitTest(l.root, a, b);
                if (null != j) {
                    var e = j.owner;
                    do {
                        var g = e._compMap.Sprite_0;
                        null !=
                            g && d.push(g);
                        e = e.parent
                    } while (null != e)
                }
                this.prepare(a, b, j, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerDown(R._sharedEvent), R._sharedEvent._stopped) return;
                this.down.emit(R._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var d = [],
                    j = q.hitTest(l.root, a, b);
                if (null != j) {
                    var e = j.owner;
                    do {
                        var g = e._compMap.Sprite_0;
                        null != g && d.push(g);
                        e = e.parent
                    } while (null != e)
                }
                this.prepare(a, b, j, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerMove(R._sharedEvent), R._sharedEvent._stopped) return;
                this.move.emit(R._sharedEvent)
            }
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var d = [],
                    j = q.hitTest(l.root, a, b);
                if (null != j) {
                    var e = j.owner;
                    do {
                        var g = e._compMap.Sprite_0;
                        null != g && d.push(g);
                        e = e.parent
                    } while (null != e)
                }
                this.prepare(a, b, j, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerUp(R._sharedEvent), R._sharedEvent._stopped) return;
                this.up.emit(R._sharedEvent)
            }
        },
        prepare: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            R._sharedEvent.init(R._sharedEvent.id + 1, a, b, c, d)
        },
        __class__: R
    };
    var Da = function(a, b, c) {
        this._x =
            this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = a;
        this._width = b;
        this._height = c
    };
    f["flambe.platform.BasicTexture"] = Da;
    Da.__name__ = ["flambe", "platform", "BasicTexture"];
    Da.__interfaces__ = [nd];
    Da.__super__ = U;
    Da.prototype = t(U.prototype, {
        subTexture: function(a, b, c, d) {
            c = this.root.createTexture(c, d);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY + b;
            return c
        },
        onDisposed: function() {
            null == this._parent && this.root.dispose()
        },
        get_width: function() {
            return this._width
        },
        get_height: function() {
            return this._height
        },
        __class__: Da
    });
    var od = function() {};
    f["flambe.subsystem.TouchSystem"] = od;
    od.__name__ = ["flambe", "subsystem", "TouchSystem"];
    var Pb = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new ca;
        this._points = [];
        this.down = new I;
        this.move = new I;
        this.up = new I
    };
    f["flambe.platform.BasicTouch"] = Pb;
    Pb.__name__ = ["flambe", "platform", "BasicTouch"];
    Pb.__interfaces__ = [od];
    Pb.prototype = {
        submitDown: function(a, b, c) {
            if (!this._pointMap.h.hasOwnProperty(a)) {
                var d =
                    new Jc(a);
                d.init(b, c);
                this._pointMap.h[a] = d;
                this._points.push(d);
                null == this._pointerTouch && (this._pointerTouch = d, this._pointer.submitDown(b, c, d._source));
                this.down.emit(d)
            }
        },
        submitMove: function(a, b, c) {
            a = this._pointMap.h[a];
            null != a && (a.init(b, c), this._pointerTouch == a && this._pointer.submitMove(b, c, a._source), this.move.emit(a))
        },
        submitUp: function(a, b, c) {
            var d = this._pointMap.h[a];
            null != d && (d.init(b, c), this._pointMap.remove(a), w.remove(this._points, d), this._pointerTouch == d && (this._pointerTouch = null, this._pointer.submitUp(b,
                c, d._source)), this.up.emit(d))
        },
        __class__: Pb
    };
    var Oa = function() {};
    f["flambe.sound.Sound"] = Oa;
    Oa.__name__ = ["flambe", "sound", "Sound"];
    Oa.__interfaces__ = [Aa];
    Oa.prototype = {
        __class__: Oa
    };
    var $ = function() {
        this._disposed = !1;
        this._playback = new ec(this)
    };
    f["flambe.platform.DummySound"] = $;
    $.__name__ = ["flambe", "platform", "DummySound"];
    $.__interfaces__ = [Oa];
    $.getInstance = function() {
        null == $._instance && ($._instance = new $);
        return $._instance
    };
    $.__super__ = U;
    $.prototype = t(U.prototype, {
        play: function() {
            return this._playback
        },
        loop: function() {
            return this._playback
        },
        onDisposed: function() {},
        __class__: $
    });
    var Pa = function() {};
    f["flambe.sound.Playback"] = Pa;
    Pa.__name__ = ["flambe", "sound", "Playback"];
    Pa.__interfaces__ = [fa];
    Pa.prototype = {
        __class__: Pa
    };
    var ec = function(a) {
        this._sound = a;
        this.volume = new G(0);
        this._complete = new H(!0)
    };
    f["flambe.platform.DummyPlayback"] = ec;
    ec.__name__ = ["flambe", "platform", "DummyPlayback"];
    ec.__interfaces__ = [Pa];
    ec.prototype = {
        dispose: function() {},
        __class__: ec
    };
    var fc = function() {};
    f["flambe.subsystem.StorageSystem"] =
        fc;
    fc.__name__ = ["flambe", "subsystem", "StorageSystem"];
    fc.prototype = {
        __class__: fc
    };
    var Tb = function() {
        this.clear()
    };
    f["flambe.platform.DummyStorage"] = Tb;
    Tb.__name__ = ["flambe", "platform", "DummyStorage"];
    Tb.__interfaces__ = [fc];
    Tb.prototype = {
        get_supported: function() {
            return !1
        },
        set: function(a, b) {
            this._hash.set(a, b);
            return !0
        },
        get: function(a, b) {
            return this._hash.exists(a) ? this._hash.get(a) : b
        },
        remove: function(a) {
            this._hash.remove(a)
        },
        clear: function() {
            this._hash = new L
        },
        __class__: Tb
    };
    var Qb = function() {
        this.down =
            new I;
        this.move = new I;
        this.up = new I
    };
    f["flambe.platform.DummyTouch"] = Qb;
    Qb.__name__ = ["flambe", "platform", "DummyTouch"];
    Qb.__interfaces__ = [od];
    Qb.prototype = {
        __class__: Qb
    };
    var bb = function() {
        this._entries = []
    };
    f["flambe.platform.EventGroup"] = bb;
    bb.__name__ = ["flambe", "platform", "EventGroup"];
    bb.__interfaces__ = [fa];
    bb.prototype = {
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new Nc(a, b, c))
        },
        addDisposingListener: function(a, b, c) {
            var d = this;
            this.addListener(a, b, function(a) {
                d.dispose();
                c(a)
            })
        },
        dispose: function() {
            for (var a = 0, b = this._entries; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1)
            }
            this._entries = []
        },
        __class__: bb
    };
    var Nc = function(a, b, c) {
        this.dispatcher = a;
        this.type = b;
        this.listener = c
    };
    f["flambe.platform._EventGroup.Entry"] = Nc;
    Nc.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    Nc.prototype = {
        __class__: Nc
    };
    var gc = function() {};
    f["flambe.platform.InternalGraphics"] = gc;
    gc.__name__ = ["flambe", "platform", "InternalGraphics"];
    gc.__interfaces__ = [Gc];
    gc.prototype = {
        __class__: gc
    };
    var Oc = function() {};
    f["flambe.subsystem.RendererSystem"] = Oc;
    Oc.__name__ = ["flambe", "subsystem", "RendererSystem"];
    Oc.prototype = {
        __class__: Oc
    };
    var hc = function() {};
    f["flambe.platform.InternalRenderer"] = hc;
    hc.__name__ = ["flambe", "platform", "InternalRenderer"];
    hc.__interfaces__ = [Oc];
    hc.prototype = {
        __class__: hc
    };
    var Ja = function() {
        this._tickables = []
    };
    f["flambe.platform.MainLoop"] = Ja;
    Ja.__name__ = ["flambe", "platform", "MainLoop"];
    Ja.updateEntity = function(a, b) {
        var c = a._compMap.SpeedAdjuster_3;
        if (null != c && (c._realDt = b, b *= c.scale._value, 0 >= b)) {
            c.onUpdate(b);
            return
        }
        for (c = a.firstComponent; null != c;) {
            var d = c.next;
            0 == (c._flags & 1) && (c._flags |= 1, c.onStart());
            c.onUpdate(b);
            c = d
        }
        for (c = a.firstChild; null != c;) d = c.next, Ja.updateEntity(c, b), c = d
    };
    Ja.prototype = {
        update: function(a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b
                }
                l.volume.update(a);
                Ja.updateEntity(l.root, a)
            }
        },
        render: function(a) {
            var b = a.graphics;
            null !=
                b && (a.willRender(), q.render(l.root, b), a.didRender())
        },
        addTickable: function(a) {
            this._tickables.push(a)
        },
        __class__: Ja
    };
    var Lc = function() {};
    f["flambe.platform.MouseCodes"] = Lc;
    Lc.__name__ = ["flambe", "platform", "MouseCodes"];
    Lc.toButton = function(a) {
        switch (a) {
            case 0:
                return S.Left;
            case 1:
                return S.Middle;
            case 2:
                return S.Right
        }
        return S.Unknown(a)
    };
    var Pc = function() {};
    f["flambe.platform.TextureRoot"] = Pc;
    Pc.__name__ = ["flambe", "platform", "TextureRoot"];
    Pc.prototype = {
        __class__: Pc
    };
    var ic = function() {};
    f["flambe.platform.Tickable"] =
        ic;
    ic.__name__ = ["flambe", "platform", "Tickable"];
    ic.prototype = {
        __class__: ic
    };
    var jc = function(a, b) {
        this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", {
            alpha: b
        })
    };
    f["flambe.platform.html.CanvasGraphics"] = jc;
    jc.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    jc.__interfaces__ = [gc];
    jc.prototype = {
        save: function() {
            this._canvasCtx.save()
        },
        transform: function(a, b, c, d, j, e) {
            this._canvasCtx.transform(a, b, c, d, j, e)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a,
                b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, d, j, e, g) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, d, j, e, g), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.root.image, a.rootX + d | 0, a.rootY + j | 0, e | 0, g | 0, b | 0, c | 0, e | 0, g | 0)
        },
        drawPattern: function(a, b, c, d, j) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawPattern(a, b, c, d, j), this._canvasCtx.globalCompositeOperation =
                "source-over") : (this._canvasCtx.fillStyle = a.getPattern(), this._canvasCtx.fillRect(b | 0, c | 0, d | 0, j | 0))
        },
        fillRect: function(a, b, c, d, j) {
            if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(a, b, c, d, j), this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + k.string(a);
                this._canvasCtx.fillStyle = "#" + k.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, d | 0, j | 0)
            }
        },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *=
                a
        },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "source-over";
                    break;
                case 1:
                    b = "lighter";
                    break;
                case 2:
                    b = "multiply";
                    break;
                case 3:
                    b = "screen";
                    break;
                case 4:
                    b = "destination-in";
                    break;
                case 5:
                    b = "copy"
            }
            this._canvasCtx.globalCompositeOperation = b
        },
        applyScissor: function(a, b, c, d) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, d | 0);
            this._canvasCtx.clip()
        },
        willRender: function() {
            this._firstDraw = !0
        },
        didRender: function() {},
        __class__: jc
    };
    var Ka = function(a) {
        this.graphics = new jc(a, !1);
        this._hasGPU =
            new H(!0)
    };
    f["flambe.platform.html.CanvasRenderer"] = Ka;
    Ka.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    Ka.__interfaces__ = [hc];
    Ka.prototype = {
        get_type: function() {
            return ea.Canvas
        },
        createTextureFromImage: function(a) {
            a = new cb(Ka.CANVAS_TEXTURES ? y.createCanvas(a) : a);
            return a.createTexture(a.width, a.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        __class__: Ka
    };
    var kc = function(a, b, c) {
        this._rootUpdateCount = 0;
        this._pattern = null;
        Da.call(this, a, b, c)
    };
    f["flambe.platform.html.CanvasTexture"] = kc;
    kc.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    kc.__super__ = Da;
    kc.prototype = t(Da.prototype, {
        getPattern: function() {
            if (this._rootUpdateCount != this.root.updateCount || null == this._pattern) this._rootUpdateCount = this.root.updateCount, this._pattern = this.root.createPattern(this.rootX, this.rootY, this._width, this._height);
            return this._pattern
        },
        __class__: kc
    });
    var cb = function(a) {
        this._graphics = null;
        this.updateCount = 0;
        this._disposed = !1;
        this.image = a;
        this.width = a.width;
        this.height = a.height
    };
    f["flambe.platform.html.CanvasTextureRoot"] = cb;
    cb.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    cb.__interfaces__ = [Pc];
    cb.__super__ = U;
    cb.prototype = t(U.prototype, {
        createTexture: function(a, b) {
            return new kc(this, a, b)
        },
        createPattern: function(a, b, c, d) {
            var j = this.getContext2d(),
                e = this.image;
            if (0 != a || 0 != b || c != this.width || d != this.height) e = y.createEmptyCanvas(c, d), c =
                e.getContext("2d", null), c.globalCompositeOperation = "copy", c.drawImage(this.image, -a, -b);
            return j.createPattern(e, "repeat")
        },
        getContext2d: function() {
            B.__instanceof(this.image, HTMLCanvasElement) || (this.image = y.createCanvas(this.image));
            return this.image.getContext("2d", null)
        },
        onDisposed: function() {
            this._graphics = this.image = null
        },
        __class__: cb
    });
    var C = function(a, b) {
        Ca.call(this, a, b)
    };
    f["flambe.platform.html.HtmlAssetPackLoader"] = C;
    C.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    C.detectImageFormats =
        function(a) {
            var b = [r.PNG, r.JPG, r.GIF],
                c = 2,
                d;
            d = window.document.createElement("img");
            d.onload = d.onerror = function() {
                1 == d.width && b.unshift(r.WEBP);
                --c;
                0 == c && a(b)
            };
            d.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
            var j;
            j = window.document.createElement("img");
            j.onload = j.onerror = function() {
                1 == j.width && b.unshift(r.JXR);
                --c;
                0 == c && a(b)
            };
            j.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
        };
    C.detectAudioFormats = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == jb(a, a.canPlayType)) return [];
        var b = new P("\\b(iPhone|iPod|iPad|Windows Phone)\\b", ""),
            c = new P("\\bCrosswalk\\b", ""),
            d = window.navigator.userAgent;
        if (!D.get_supported() && b.match(d) && !c.match(d)) return [];
        b = [{
            format: r.M4A,
            mimeType: "audio/mp4; codecs=mp4a"
        }, {
            format: r.MP3,
            mimeType: "audio/mpeg"
        }, {
            format: r.OPUS,
            mimeType: "audio/ogg; codecs=opus"
        }, {
            format: r.OGG,
            mimeType: "audio/ogg; codecs=vorbis"
        }, {
            format: r.WAV,
            mimeType: "audio/wav"
        }];
        c = [];
        for (d = 0; d < b.length;) {
            var j = b[d];
            ++d;
            var e = "";
            try {
                e = a.canPlayType(j.mimeType)
            } catch (g) {
                g instanceof o && (g = g.val)
            }
            "" != e && c.push(j.format)
        }
        return c
    };
    C.supportsBlob = function() {
        if (C._detectBlobSupport) {
            C._detectBlobSupport = !1;
            if ((new P("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType) return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType) return !1;
            C._URL = y.loadExtension("URL").value
        }
        return null !=
            C._URL && null != C._URL.createObjectURL
    };
    C.__super__ = Ca;
    C.prototype = t(Ca.prototype, {
        loadEntry: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var d;
                    d = window.document.createElement("img");
                    var j = new bb;
                    j.addDisposingListener(d, "load", function() {
                        C.supportsBlob() && C._URL.revokeObjectURL(d.src);
                        var a = c._platform.getRenderer().createTextureFromImage(d);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    j.addDisposingListener(d, "error", function() {
                        c.handleError(b, "Failed to load image")
                    });
                    C.supportsBlob() ? this.download(a, b, "blob", function(a) {
                        d.src = C._URL.createObjectURL(a)
                    }) : d.src = a;
                    break;
                case 5:
                case 6:
                case 7:
                    this.download(a, b, "arraybuffer", function() {
                        var a = c._platform.getRenderer().createCompressedTexture(b.format, null);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (D.get_supported()) this.download(a, b, "arraybuffer", function(a) {
                        D.ctx.decodeAudioData(a, function(a) {
                            c.handleLoad(b, new D(a))
                        }, function() {
                            c.handleLoad(b, $.getInstance())
                        })
                    });
                    else {
                        var e;
                        e = window.document.createElement("audio");
                        e.preload = "auto";
                        var g = ++C._mediaRefCount;
                        null == C._mediaElements && (C._mediaElements = new ca);
                        C._mediaElements.h[g] = e;
                        j = new bb;
                        j.addDisposingListener(e, "canplaythrough", function() {
                            C._mediaElements.remove(g);
                            c.handleLoad(b, new db(e))
                        });
                        j.addDisposingListener(e, "error", function() {
                            C._mediaElements.remove(g);
                            var a = e.error.code;
                            3 == a || 4 == a ? c.handleLoad(b, $.getInstance()) : c.handleError(b, "Failed to load audio: " + e.error.code)
                        });
                        j.addListener(e, "progress",
                            function() {
                                if (0 < e.buffered.length && 0 < e.duration) {
                                    var a = e.buffered.end(0) / e.duration;
                                    c.handleProgress(b, a * b.bytes | 0)
                                }
                            });
                        e.src = a;
                        e.load()
                    }
                    break;
                case 13:
                    this.download(a, b, "text", function(a) {
                        c.handleLoad(b, new ab(a))
                    })
            }
        },
        getAssetFormats: function(a) {
            var b = this;
            null == C._supportedFormats && (C._supportedFormats = new Wa, C.detectImageFormats(function(a) {
                C._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(C.detectAudioFormats()).concat([r.Data]))
            }));
            C._supportedFormats.get(a)
        },
        download: function(a, b, c, d) {
            var e = this,
                m = null,
                g = null,
                f = 0,
                i = !1,
                k = function() {
                    i && (i = !1, window.clearInterval(f))
                },
                l = 3,
                n = function() {
                    --l;
                    return 0 <= l ? (g(), !0) : !1
                },
                g = function() {
                    k();
                    null != m && m.abort();
                    m = new XMLHttpRequest;
                    m.open("GET", a, !0);
                    m.responseType = c;
                    var g = 0;
                    m.onprogress = function(a) {
                        i || (i = !0, f = window.setInterval(function() {
                            4 != m.readyState && 5E3 < Date.now() - g && !n() && (k(), e.handleError(b, "Download stalled"))
                        }, 1E3));
                        g = Date.now();
                        e.handleProgress(b, a.loaded)
                    };
                    m.onerror = function() {
                        if (0 != m.status || !n()) k(),
                            e.handleError(b, "HTTP error " + m.status)
                    };
                    m.onload = function() {
                        var a = m.response;
                        null == a && (a = m.responseText);
                        k();
                        d(a)
                    };
                    m.send()
                };
            g()
        },
        __class__: C
    });
    var Ob = function(a, b) {
        X.call(this, a);
        this._canvas = b
    };
    f["flambe.platform.html.HtmlMouse"] = Ob;
    Ob.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    Ob.__super__ = X;
    Ob.prototype = t(X.prototype, {
        __class__: Ob
    });
    var db = function(a) {
        this._disposed = !1;
        this.audioElement = a
    };
    f["flambe.platform.html.HtmlSound"] = db;
    db.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    db.__interfaces__ = [Oa];
    db.__super__ = U;
    db.prototype = t(U.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new eb(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new eb(this, a, !0)
        },
        onDisposed: function() {
            this.audioElement = null
        },
        __class__: db
    });
    var eb = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.volume = new G(b, function() {
            d.updateVolume()
        });
        this.updateVolume();
        this._complete =
            new H(!1);
        this.playAudio();
        l.hidden._value && this.set_paused(!0)
    };
    f["flambe.platform.html._HtmlSound.HtmlPlayback"] = eb;
    eb.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    eb.__interfaces__ = [ic, Pa];
    eb.prototype = {
        set_paused: function(a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio());
            return a
        },
        update: function(a) {
            this.volume.update(a);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ? (this._tickableAdded = !1, this._volumeBinding.dispose(), this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        playAudio: function() {
            var a = this;
            this._clonedElement.loop && !ia.instance.musicPlaying && (ia.instance.musicPlaying = !0, this._clonedElement.play(), this._tickableAdded || (ia.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = l.volume.get_changed().connect(function() {
                a.updateVolume()
            }), this._hideBinding = l.hidden.get_changed().connect(function(b) {
                b ?
                    (a._wasPaused = a._clonedElement.paused, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            })))
        },
        updateVolume: function() {
            this._clonedElement.volume = l.volume._value * this.volume._value
        },
        __class__: eb
    };
    var Qc = function() {};
    f["flambe.subsystem.StageSystem"] = Qc;
    Qc.__name__ = ["flambe", "subsystem", "StageSystem"];
    Qc.prototype = {
        __class__: Qc
    };
    var Ia = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new aa;
        this.preResize = new aa;
        this.scaleFactor = Ia.computeScaleFactor();
        1 != this.scaleFactor && (y.setVendorStyle(this._canvas,
            "transform-origin", "top left"), y.setVendorStyle(this._canvas, "transform", "scale(" + 1 / this.scaleFactor + ")"));
        y.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            y.callLater(jb(b, b.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", jb(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new H(null);
        null != window.orientation && (window.addEventListener("orientationchange", jb(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new H(!1);
        y.addVendorListener(window.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    f["flambe.platform.html.HtmlStage"] = Ia;
    Ia.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    Ia.__interfaces__ = [Qc];
    Ia.computeScaleFactor = function() {
        var a = window.devicePixelRatio;
        null == a && (a = 1);
        var b = window.document.createElement("canvas").getContext("2d", null),
            b = y.loadExtension("backingStorePixelRatio", b).value;
        null == b && (b = 1);
        a /= b;
        b = window.screen.height;
        return 1136 <
            a * window.screen.width || 1136 < a * b ? 1 : a
    };
    Ia.prototype = {
        get_width: function() {
            return this._canvas.width
        },
        get_height: function() {
            return this._canvas.height
        },
        onWindowResize: function() {
            this.preResize.emit();
            var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height)
        },
        resizeCanvas: function(a, b) {
            var c = this.scaleFactor * a,
                d = this.scaleFactor * b;
            if (this._canvas.width == c && this._canvas.height == d) return !1;
            this._canvas.width = c | 0;
            this._canvas.height = d | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() {
            var a =
                this,
                b = window.document.documentElement.style;
            b.height = window.innerHeight + 100 + "px";
            b.width = window.innerWidth + "px";
            b.overflow = "visible";
            y.callLater(function() {
                y.hideMobileBrowser();
                y.callLater(function() {
                    b.height = window.innerHeight + "px";
                    a.onWindowResize(null)
                }, 100)
            })
        },
        onOrientationChange: function() {
            this.orientation.set__(y.orientation(window.orientation))
        },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 == y.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: Ia
    };
    var Sb = function(a) {
        this._storage = a
    };
    f["flambe.platform.html.HtmlStorage"] = Sb;
    Sb.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    Sb.__interfaces__ = [fc];
    Sb.prototype = {
        get_supported: function() {
            return !0
        },
        set: function(a, b) {
            var c;
            try {
                var d = new ha;
                d.useCache = !0;
                d.useEnumIndex = !1;
                d.serialize(b);
                c = d.toString()
            } catch (e) {
                return e instanceof o && (e = e.val), !1
            }
            try {
                this._storage.setItem("flambe:" + a, c)
            } catch (m) {
                return m instanceof o && (m = m.val), !1
            }
            return !0
        },
        get: function(a, b) {
            var c = null;
            try {
                c = this._storage.getItem("flambe:" +
                    a)
            } catch (d) {
                d instanceof o && (d = d.val), null
            }
            if (null != c) try {
                return Q.run(c)
            } catch (e) {
                e instanceof o && (e = e.val), null
            }
            return b
        },
        remove: function(a) {
            try {
                this._storage.removeItem("flambe:" + a)
            } catch (b) {
                b instanceof o && (b = b.val), null
            }
        },
        __class__: Sb
    };
    var y = function() {};
    f["flambe.platform.html.HtmlUtil"] = y;
    y.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    y.callLater = function(a, b) {
        null == b && (b = 0);
        window.setTimeout(a, b)
    };
    y.hideMobileBrowser = function() {
        window.scrollTo(1, 0)
    };
    y.loadExtension = function(a, b) {
        null ==
            b && (b = window);
        var c = u.field(b, a);
        if (null != c) return {
            prefix: "",
            field: a,
            value: c
        };
        for (var c = a.charAt(0).toUpperCase() + w.substr(a, 1, null), d = 0, e = y.VENDOR_PREFIXES; d < e.length;) {
            var m = e[d];
            ++d;
            var g = m + c,
                f = u.field(b, g);
            if (null != f) return {
                prefix: m,
                field: g,
                value: f
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    y.loadFirstExtension = function(a, b) {
        for (var c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            d = y.loadExtension(d, b);
            if (null != d.field) return d
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    y.polyfill = function(a, b) {
        null == b && (b =
            window);
        var c = y.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    y.setVendorStyle = function(a, b, c) {
        for (var a = a.style, d = 0, e = y.VENDOR_PREFIXES; d < e.length;) {
            var m = e[d];
            ++d;
            a.setProperty("-" + m + "-" + b, c)
        }
        a.setProperty(b, c)
    };
    y.addVendorListener = function(a, b, c, d) {
        for (var e = 0, m = y.VENDOR_PREFIXES; e < m.length;) {
            var g = m[e];
            ++e;
            a.addEventListener(g + b, c, d)
        }
        a.addEventListener(b, c, d)
    };
    y.orientation = function(a) {
        switch (a) {
            case -90:
            case 90:
                return wa.Landscape;
            default:
                return wa.Portrait
        }
    };
    y.createEmptyCanvas =
        function(a, b) {
            var c;
            c = window.document.createElement("canvas");
            c.width = a;
            c.height = b;
            return c
        };
    y.createCanvas = function(a) {
        var b = y.createEmptyCanvas(a.width, a.height),
            c = b.getContext("2d", null);
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    y.fixAndroidMath = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) {
                return 0 == b ? 0 : a(b)
            };
            Math.cos = function(a) {
                return 0 == a ? 1 : b(a)
            }
        }
    };
    var D = function(a) {
        this._disposed = !1;
        this.buffer = a
    };
    f["flambe.platform.html.WebAudioSound"] = D;
    D.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    D.__interfaces__ = [Oa];
    D.get_supported = function() {
        if (D._detectSupport) {
            D._detectSupport = !1;
            var a = y.loadExtension("AudioContext").value;
            null != a && (D.ctx = new a, D.gain = D.createGain(), D.gain.connect(D.ctx.destination), l.volume.watch(function(a) {
                D.gain.gain.value = a
            }))
        }
        return null != D.ctx
    };
    D.createGain = function() {
        return null != D.ctx.createGain ? D.ctx.createGain() : D.ctx.createGainNode()
    };
    D.start =
        function(a, b) {
            null != a.start ? a.start(b) : a.noteOn(b)
        };
    D.__super__ = U;
    D.prototype = t(U.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new fb(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new fb(this, a, !0)
        },
        get_duration: function() {
            return this.buffer.duration
        },
        onDisposed: function() {
            this.buffer = null
        },
        __class__: D
    });
    var fb = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._head = D.gain;
        this._complete = new H(!1);
        this._sourceNode = D.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop =
            c;
        this._sourceNode.onended = function() {
            d._complete.set__(!0)
        };
        D.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new G(b, function(a) {
            d.setVolume(a)
        });
        1 != b && this.setVolume(b);
        l.hidden._value && this.set_paused(!0)
    };
    f["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = fb;
    fb.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    fb.__interfaces__ = [ic, Pa];
    fb.prototype = {
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) :
                this.playAudio());
            return a
        },
        get_position: function() {
            return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (D.ctx.currentTime - this._startedAt) % this._sound.get_duration()
        },
        update: function(a) {
            this.volume.update(a);
            3 == this._sourceNode.playbackState && this._complete.set__(!0);
            return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1, this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        setVolume: function(a) {
            null ==
                this._gainNode && (this._gainNode = D.createGain(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = a
        },
        insertNode: function(a) {
            0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a
        },
        playAudio: function() {
            var a = this;
            this._sourceNode.connect(this._head);
            this._startedAt = D.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (ia.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = l.hidden.get_changed().connect(function(b) {
                b ?
                    (a._wasPaused = 0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        __class__: fb
    };
    var Mb = function() {
        this._width = this._height = -1;
        this._transitor = null;
        h.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new g
    };
    f["flambe.scene.Director"] = Mb;
    Mb.__name__ = ["flambe", "scene", "Director"];
    Mb.__super__ = h;
    Mb.prototype = t(h.prototype, {
        get_name: function() {
            return "Director_2"
        },
        pushScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var d = this.get_topScene();
            null != d ? this.playTransition(d, a,
                b, function() {
                    c.hide(d)
                }) : (this.add(a), this.invalidateVisibility())
        },
        unwindToScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var d = this.get_topScene();
            if (null != d) {
                if (d != a) {
                    for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.playTransition(d, a, b, function() {
                        c.hideAndDispose(d)
                    })
                }
            } else this.pushScene(a, b)
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this.completeTransition();
            for (var a = 0, b = this.scenes; a <
                b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose()
        },
        onUpdate: function(a) {
            null != this._transitor && this._transitor.update(a) && this.completeTransition()
        },
        get_topScene: function() {
            var a = this.scenes.length;
            return 0 < a ? this.scenes[a - 1] : null
        },
        add: function(a) {
            var b = this.get_topScene();
            null != b && this._root.removeChild(b);
            w.remove(this.scenes, a);
            this.scenes.push(a);
            this._root.addChild(a)
        },
        hide: function(a) {
            a = a._compMap.Scene_4;
            null != a && a.hidden.emit()
        },
        hideAndDispose: function(a) {
            this.hide(a);
            a.dispose()
        },
        show: function(a) {
            a = a._compMap.Scene_4;
            null != a && a.shown.emit()
        },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a;) {
                var b = this.scenes[--a]._compMap.Scene_4;
                if (null == b || b.opaque) break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function() {
            null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
        },
        playTransition: function(a, b,
            c, d) {
            this.completeTransition();
            this.add(b);
            null != c ? (this.occludedScenes.push(a), this._transitor = new Rc(a, b, c, d), this._transitor.init(this)) : (d(), this.invalidateVisibility())
        },
        get_width: function() {
            return 0 > this._width ? l._platform.getStage().get_width() : this._width
        },
        get_height: function() {
            return 0 > this._height ? l._platform.getStage().get_height() : this._height
        },
        __class__: Mb
    });
    var Rc = function(a, b, c, d) {
        this._from = a;
        this._to = b;
        this._transition = c;
        this._onComplete = d
    };
    f["flambe.scene._Director.Transitor"] = Rc;
    Rc.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    Rc.prototype = {
        init: function(a) {
            this._transition.init(a, this._from, this._to)
        },
        update: function(a) {
            return this._transition.update(a)
        },
        complete: function() {
            this._transition.complete();
            this._onComplete()
        },
        __class__: Rc
    };
    var ja = function(a) {
        null == a && (a = !0);
        h.call(this);
        this.opaque = a;
        this.shown = new aa;
        this.hidden = new aa
    };
    f["flambe.scene.Scene"] = ja;
    ja.__name__ = ["flambe", "scene", "Scene"];
    ja.__super__ = h;
    ja.prototype = t(h.prototype, {
        get_name: function() {
            return "Scene_4"
        },
        __class__: ja
    });
    var gb = function() {};
    f["flambe.scene.Transition"] = gb;
    gb.__name__ = ["flambe", "scene", "Transition"];
    gb.prototype = {
        init: function(a, b, c) {
            this._director = a;
            this._from = b;
            this._to = c
        },
        update: function() {
            return !0
        },
        complete: function() {},
        __class__: gb
    };
    var xa = function(a, b) {
        this._duration = a;
        this._ease = null != b ? b : n.linear
    };
    f["flambe.scene.TweenTransition"] = xa;
    xa.__name__ = ["flambe", "scene", "TweenTransition"];
    xa.__super__ = gb;
    xa.prototype = t(gb.prototype, {
        init: function(a, b, c) {
            gb.prototype.init.call(this,
                a, b, c);
            this._elapsed = 0
        },
        update: function(a) {
            this._elapsed += a;
            return this._elapsed >= this._duration
        },
        interp: function(a, b) {
            return a + (b - a) * this._ease(this._elapsed / this._duration)
        },
        __class__: xa
    });
    var tb = function(a, b) {
        this._direction = 2;
        xa.call(this, a, b)
    };
    f["flambe.scene.SlideTransition"] = tb;
    tb.__name__ = ["flambe", "scene", "SlideTransition"];
    tb.__super__ = xa;
    tb.prototype = t(xa.prototype, {
        init: function(a, b, c) {
            xa.prototype.init.call(this, a, b, c);
            switch (this._direction) {
                case 0:
                    this._x = 0;
                    this._y = -this._director.get_height();
                    break;
                case 1:
                    this._x = 0;
                    this._y = this._director.get_height();
                    break;
                case 2:
                    this._x = -this._director.get_width();
                    this._y = 0;
                    break;
                case 3:
                    this._x = this._director.get_width(), this._y = 0
            }
            a = this._from._compMap.Sprite_0;
            null == a && this._from.add(a = new q);
            a.setXY(0, 0);
            a = this._to._compMap.Sprite_0;
            null == a && this._to.add(a = new q);
            a.setXY(-this._x, -this._y)
        },
        update: function(a) {
            a = xa.prototype.update.call(this, a);
            this._from._compMap.Sprite_0.setXY(this.interp(0, this._x), this.interp(0, this._y));
            this._to._compMap.Sprite_0.setXY(this.interp(-this._x,
                0), this.interp(-this._y, 0));
            return a
        },
        complete: function() {
            this._from._compMap.Sprite_0.setXY(0, 0);
            this._to._compMap.Sprite_0.setXY(0, 0)
        },
        __class__: tb
    });
    var Qa = function() {};
    f["flambe.script.Action"] = Qa;
    Qa.__name__ = ["flambe", "script", "Action"];
    Qa.prototype = {
        __class__: Qa
    };
    var sa = function(a) {
        this._fn = a
    };
    f["flambe.script.CallFunction"] = sa;
    sa.__name__ = ["flambe", "script", "CallFunction"];
    sa.__interfaces__ = [Qa];
    sa.prototype = {
        update: function() {
            this._fn();
            return 0
        },
        __class__: sa
    };
    var ra = function(a) {
        this._duration =
            a;
        this._elapsed = 0
    };
    f["flambe.script.Delay"] = ra;
    ra.__name__ = ["flambe", "script", "Delay"];
    ra.__interfaces__ = [Qa];
    ra.prototype = {
        update: function(a) {
            this._elapsed += a;
            if (this._elapsed >= this._duration) {
                var b = this._elapsed - this._duration;
                this._elapsed = 0;
                return a - b
            }
            return -1
        },
        __class__: ra
    };
    var pa = function(a, b) {
        null == b && (b = -1);
        this._action = a;
        this._remaining = this._count = b
    };
    f["flambe.script.Repeat"] = pa;
    pa.__name__ = ["flambe", "script", "Repeat"];
    pa.__interfaces__ = [Qa];
    pa.prototype = {
        update: function(a, b) {
            if (0 == this._count) return 0;
            var c = this._action.update(a, b);
            return 0 < this._count && 0 <= c && 0 == --this._remaining ? (this._remaining = this._count, c) : -1
        },
        __class__: pa
    };
    var oa = function() {
        h.call(this);
        this.stopAll()
    };
    f["flambe.script.Script"] = oa;
    oa.__name__ = ["flambe", "script", "Script"];
    oa.__super__ = h;
    oa.prototype = t(h.prototype, {
        get_name: function() {
            return "Script_1"
        },
        run: function(a) {
            a = new lc(a);
            this._handles.push(a);
            return a
        },
        stopAll: function() {
            this._handles = []
        },
        onUpdate: function(a) {
            for (var b = 0; b < this._handles.length;) {
                var c = this._handles[b];
                c.removed || 0 <= c.action.update(a, this.owner) ? this._handles.splice(b, 1) : ++b
            }
        },
        __class__: oa
    });
    var lc = function(a) {
        this.removed = !1;
        this.action = a
    };
    f["flambe.script._Script.Handle"] = lc;
    lc.__name__ = ["flambe", "script", "_Script", "Handle"];
    lc.__interfaces__ = [fa];
    lc.prototype = {
        dispose: function() {
            this.removed = !0;
            this.action = null
        },
        __class__: lc
    };
    var qa = function(a) {
        this._idx = 0;
        this._runningActions = null != a ? a.slice() : []
    };
    f["flambe.script.Sequence"] = qa;
    qa.__name__ = ["flambe", "script", "Sequence"];
    qa.__interfaces__ = [Qa];
    qa.prototype = {
        update: function(a, b) {
            for (var c = 0;;) {
                var d = this._runningActions[this._idx];
                if (null != d)
                    if (d = d.update(a - c, b), 0 <= d) c += d;
                    else return -1;
                    ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break
                } else if (c > a) return -1
            }
            return c
        },
        __class__: qa
    };
    var ea = f["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe", "subsystem", "RendererType"],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    ea.Stage3D = ["Stage3D", 0];
    ea.Stage3D.toString = v;
    ea.Stage3D.__enum__ = ea;
    ea.WebGL = ["WebGL", 1];
    ea.WebGL.toString =
        v;
    ea.WebGL.__enum__ = ea;
    ea.Canvas = ["Canvas", 2];
    ea.Canvas.toString = v;
    ea.Canvas.__enum__ = ea;
    var mc = function() {};
    f["flambe.swf.Symbol"] = mc;
    mc.__name__ = ["flambe", "swf", "Symbol"];
    mc.prototype = {
        __class__: mc
    };
    var nc = function(a, b) {
        this._name = a.symbol;
        var c = a.rect;
        this.texture = b.subTexture(c[0], c[1], c[2], c[3]);
        c = a.origin;
        null != c ? (this.anchorX = c[0], this.anchorY = c[1]) : this.anchorY = this.anchorX = 0
    };
    f["flambe.swf.BitmapSymbol"] = nc;
    nc.__name__ = ["flambe", "swf", "BitmapSymbol"];
    nc.__interfaces__ = [mc];
    nc.prototype = {
        createSprite: function() {
            var a =
                new i(this.texture);
            a.setAnchor(this.anchorX, this.anchorY);
            return a
        },
        __class__: nc
    };
    var V = function(a, b) {
        this._file = a.getFile(b + "/library.json");
        var c = JSON.parse(this._file.toString());
        this._symbols = new L;
        this.frameRate = c.frameRate;
        for (var d = [], e = 0, m = c.movies; e < m.length;) {
            var g = m[e];
            ++e;
            g = new oc(this, g);
            d.push(g);
            this._symbols.set(g._name, g)
        }
        c = c.textureGroups;
        (1 != c[0].scaleFactor || 1 < c.length) && null;
        c = c[0].atlases;
        for (e = 0; e < c.length;) {
            var f = c[e];
            ++e;
            m = a.getTexture(b + "/" + M.removeFileExtension(f.file));
            g = 0;
            for (f = f.textures; g < f.length;) {
                var i = f[g];
                ++g;
                i = new nc(i, m);
                this._symbols.set(i._name, i)
            }
        }
        for (c = 0; c < d.length;) {
            m = d[c];
            ++c;
            e = 0;
            for (m = m.layers; e < m.length;) {
                g = m[e];
                ++e;
                g = g.keyframes;
                f = g.length;
                for (i = 0; i < f;) {
                    var k = i++,
                        l = g[k];
                    if (null != l.symbolName) {
                        var n = this._symbols.get(l.symbolName);
                        l.symbol = n
                    }
                    if (l.tweened && 1 == l.duration && k + 1 < f && (k = g[k + 1], !k.visible || null == k.symbolName)) l.visible = !1
                }
            }
        }
    };
    f["flambe.swf.Library"] = V;
    V.__name__ = ["flambe", "swf", "Library"];
    V.prototype = {
        createSprite: function(a, b) {
            null ==
                b && (b = !0);
            var c = this._symbols.get(a);
            if (null == c) {
                if (b) throw new o(M.withFields("Missing symbol", ["name", a]));
                return null
            }
            return c.createSprite()
        },
        __class__: V
    };
    var T = function(a) {
        this._oneshotSprite = this._loopingSprite = null;
        h.call(this);
        this._lib = a;
        this._root = new g;
        this.movie = new H(null);
        this.setCache(!0)
    };
    f["flambe.swf.MoviePlayer"] = T;
    T.__name__ = ["flambe", "swf", "MoviePlayer"];
    T.__super__ = h;
    T.prototype = t(h.prototype, {
        get_name: function() {
            return "MoviePlayer_28"
        },
        setCache: function(a) {
            this._cache = a ? new L :
                null;
            return this
        },
        loop: function(a, b) {
            null == b && (b = !0);
            if (b || null == this._loopingSprite || this._loopingSprite.symbol._name != a) this._oneshotSprite = null, this._loopingSprite = this.playFromCache(a);
            return this
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this._root.dispose();
            this._oneshotSprite = this._loopingSprite = null;
            this.movie.set__(null)
        },
        onUpdate: function(a) {
            null != this._oneshotSprite && this._oneshotSprite._position + a > this._oneshotSprite.symbol.duration && (this._oneshotSprite =
                null, this.setCurrent(this._loopingSprite))
        },
        playFromCache: function(a) {
            var b;
            null != this._cache ? (b = this._cache.get(a), null != b ? b.set_position(0) : (b = this.createMovie(a), this._cache.set(a, b))) : b = this.createMovie(a);
            return this.setCurrent(b)
        },
        createMovie: function(a) {
            a = this._lib.createSprite(a, !0);
            null != this._decorator && this._decorator(a);
            return a
        },
        setCurrent: function(a) {
            this._root.add(a);
            return this.movie.set__(a)
        },
        __class__: T
    });
    var hb = function(a) {
        this._looped = null;
        q.call(this);
        this.symbol = a;
        this.speed =
            new G(1);
        this._animators = Array(a.layers.length);
        for (var b = 0, c = this._animators.length; b < c;) {
            var d = b++;
            this._animators[d] = new Sc(a.layers[d])
        }
        this._position = this._frame = 0;
        this["goto"](1)
    };
    f["flambe.swf.MovieSprite"] = hb;
    hb.__name__ = ["flambe", "swf", "MovieSprite"];
    hb.__super__ = q;
    hb.prototype = t(q.prototype, {
        onAdded: function() {
            q.prototype.onAdded.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.addChild(c.content)
            }
        },
        onRemoved: function() {
            q.prototype.onRemoved.call(this);
            for (var a =
                0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.removeChild(c.content)
            }
        },
        onUpdate: function(a) {
            q.prototype.onUpdate.call(this, a);
            this.speed.update(a);
            switch (this._flags & 384) {
                case 0:
                    this._position += this.speed._value * a;
                    this._position > this.symbol.duration && (this._position %= this.symbol.duration, null != this._looped && this._looped.emit());
                    break;
                case 256:
                    this._flags &= -257
            }
            this["goto"](this._position * this.symbol.frameRate)
        },
        "goto": function(a) {
            if (this._frame != a) {
                if (a < this._frame)
                    for (var b = 0, c = this._animators; b <
                        c.length;) {
                        var d = c[b];
                        ++b;
                        d.needsKeyframeUpdate = !0;
                        d.keyframeIdx = 0
                    }
                b = 0;
                for (c = this._animators; b < c.length;) d = c[b], ++b, d.composeFrame(a);
                this._frame = a
            }
        },
        set_position: function(a) {
            return this._position = Na.clamp(a, 0, this.symbol.duration)
        },
        rewind: function() {
            this._position = 0;
            this._flags |= 256
        },
        __class__: hb
    });
    var Sc = function(a) {
        this.keyframeIdx = 0;
        this.needsKeyframeUpdate = !1;
        this.layer = a;
        this.content = new g;
        if (a.empty) this._sprites = null;
        else {
            this._sprites = Array(a.keyframes.length);
            for (var b = 0, c = this._sprites.length; b <
                c;) {
                var d = b++,
                    e = a.keyframes[d];
                this._sprites[d] = 0 < d && a.keyframes[d - 1].symbol == e.symbol ? this._sprites[d - 1] : null == e.symbol ? new q : e.symbol.createSprite()
            }
            this.content.add(this._sprites[0])
        }
    };
    f["flambe.swf._MovieSprite.LayerAnimator"] = Sc;
    Sc.__name__ = ["flambe", "swf", "_MovieSprite", "LayerAnimator"];
    Sc.prototype = {
        composeFrame: function(a) {
            if (null != this._sprites) {
                var b = this.layer.keyframes,
                    c = b.length - 1;
                if (a > this.layer.frames) this.content._compMap.Sprite_0.set_visible(!1), this.keyframeIdx = c, this.needsKeyframeUpdate = !0;
                else {
                    for (; this.keyframeIdx < c && b[this.keyframeIdx + 1].index <= a;)++this.keyframeIdx, this.needsKeyframeUpdate = !0;
                    var d;
                    this.needsKeyframeUpdate ? (this.needsKeyframeUpdate = !1, d = this._sprites[this.keyframeIdx], d != this.content._compMap.Sprite_0 && ((null == d ? null : B.getClass(d)) == hb && d.rewind(), this.content.add(d))) : d = this.content._compMap.Sprite_0;
                    var e = b[this.keyframeIdx],
                        m = e.visible && null != e.symbol;
                    d.set_visible(m);
                    if (m) {
                        var m = e.x,
                            g = e.y,
                            f = e.scaleX,
                            i = e.scaleY,
                            k = e.skewX,
                            l = e.skewY,
                            n = e.alpha;
                        if (e.tweened &&
                            this.keyframeIdx < c) {
                            a = (a - e.index) / e.duration;
                            c = e.ease;
                            if (0 != c) {
                                var h;
                                0 > c ? (h = 1 - a, h = 1 - h * h, c = -c) : h = a * a;
                                a = c * h + (1 - c) * a
                            }
                            b = b[this.keyframeIdx + 1];
                            m += (b.x - m) * a;
                            g += (b.y - g) * a;
                            f += (b.scaleX - f) * a;
                            i += (b.scaleY - i) * a;
                            k += (b.skewX - k) * a;
                            l += (b.skewY - l) * a;
                            n += (b.alpha - n) * a
                        }
                        b = d.getLocalMatrix();
                        a = Math.sin(k);
                        k = Math.cos(k);
                        c = Math.sin(l);
                        l = Math.cos(l);
                        b.set(l * f, c * f, -a * i, k * i, m, g);
                        b.translate(-e.pivotX, -e.pivotY);
                        d.alpha.set__(n)
                    }
                }
            }
        },
        __class__: Sc
    };
    var oc = function(a, b) {
        this._name = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length);
        for (var c = 0, d = this.layers.length; c < d;) {
            var e = c++,
                m = new Tc(b.layers[e]);
            this.frames = Math.max(m.frames, this.frames);
            this.layers[e] = m
        }
        this.duration = this.frames / this.frameRate
    };
    f["flambe.swf.MovieSymbol"] = oc;
    oc.__name__ = ["flambe", "swf", "MovieSymbol"];
    oc.__interfaces__ = [mc];
    oc.prototype = {
        createSprite: function() {
            return new hb(this)
        },
        __class__: oc
    };
    var Tc = function(a) {
        this.empty = !0;
        this.name = a.name;
        var b = null;
        this.keyframes = Array(a.keyframes.length);
        for (var c = 0, d = this.keyframes.length; c <
            d;) {
            var e = c++,
                b = new Uc(a.keyframes[e], b);
            this.keyframes[e] = b;
            this.empty = this.empty && null == b.symbolName
        }
        this.frames = null != b ? b.index + b.duration : 0
    };
    f["flambe.swf.MovieLayer"] = Tc;
    Tc.__name__ = ["flambe", "swf", "MovieLayer"];
    Tc.prototype = {
        __class__: Tc
    };
    var Uc = function(a, b) {
        this.ease = 0;
        this.visible = this.tweened = !0;
        this.alpha = 1;
        this.skewX = this.skewY = this.pivotX = this.pivotY = 0;
        this.scaleX = this.scaleY = 1;
        this.x = this.y = 0;
        this.symbol = null;
        this.index = null != b ? b.index + b.duration : 0;
        this.duration = a.duration;
        this.label =
            a.label;
        this.symbolName = a.ref;
        var c = a.loc;
        null != c && (this.x = c[0], this.y = c[1]);
        c = a.scale;
        null != c && (this.scaleX = c[0], this.scaleY = c[1]);
        c = a.skew;
        null != c && (this.skewX = c[0], this.skewY = c[1]);
        c = a.pivot;
        null != c && (this.pivotX = c[0], this.pivotY = c[1]);
        null != a.alpha && (this.alpha = a.alpha);
        null != a.visible && (this.visible = a.visible);
        null != a.tweened && (this.tweened = a.tweened);
        null != a.ease && (this.ease = a.ease)
    };
    f["flambe.swf.MovieKeyframe"] = Uc;
    Uc.__name__ = ["flambe", "swf", "MovieKeyframe"];
    Uc.prototype = {
        __class__: Uc
    };
    var md =
        function() {};
    f["flambe.util.Assert"] = md;
    md.__name__ = ["flambe", "util", "Assert"];
    md.that = function() {};
    var Ec = function() {};
    f["flambe.util.BitSets"] = Ec;
    Ec.__name__ = ["flambe", "util", "BitSets"];
    Ec.set = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    var ib = function() {
        this.mainSection = new L;
        this.sections = new L
    };
    f["flambe.util.Config"] = ib;
    ib.__name__ = ["flambe", "util", "Config"];
    ib.parse = function(a) {
        for (var b = new ib, c = new P("^\\s*;", ""), d = new P("^\\s*\\[\\s*([^\\]]*)\\s*\\]", ""), e = new P("^\\s*([\\w\\.\\-_]+)\\s*=\\s*(.*)",
            ""), m = b.mainSection, g = 0, a = (new P("\r\n|\r|\n", "g")).split(a); g < a.length;) {
            var f = a[g];
            ++g;
            if (!c.match(f))
                if (d.match(f)) f = d.matched(1), b.sections.exists(f) ? m = b.sections.get(f) : (m = new L, b.sections.set(f, m));
                else if (e.match(f)) {
                var f = e.matched(1),
                    i = e.matched(2),
                    k = i.charCodeAt(0);
                if ((34 == k || 39 == k) && i.charCodeAt(i.length - 1) == k) i = w.substr(i, 1, i.length - 2);
                i = K.replace(K.replace(K.replace(K.replace(K.replace(K.replace(i, "\\n", "\n"), "\\r", "\r"), "\\t", "\t"), "\\'", "'"), '\\"', '"'), "\\\\", "\\");
                null != ka[f] ? m.setReserved(f,
                    i) : m.h[f] = i
            }
        }
        return b
    };
    ib.prototype = {
        get: function(a) {
            var b = a.indexOf(".");
            if (0 > b) return this.mainSection.get(a);
            var c;
            c = this.sections.get(w.substr(a, 0, b));
            return null != c ? (a = w.substr(a, b + 1, null), null != ka[a] ? c.getReserved(a) : c.h[a]) : null
        },
        __class__: ib
    };
    var Ta = function(a) {
        this.config = a;
        this.missingTranslation = new I
    };
    f["flambe.util.MessageBundle"] = Ta;
    Ta.__name__ = ["flambe", "util", "MessageBundle"];
    Ta.parse = function(a) {
        return new Ta(ib.parse(a))
    };
    Ta.prototype = {
        get: function(a, b) {
            var c = this.config.get(a);
            return null == c ? (this.missingTranslation.emit(a), a) : null != b ? M.substitute(c, b) : c
        },
        __class__: Ta
    };
    var Wa = function() {
        this.success = new I;
        this.error = new I;
        this.progressChanged = new aa;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    f["flambe.util.Promise"] = Wa;
    Wa.__name__ = ["flambe", "util", "Promise"];
    Wa.prototype = {
        set_result: function(a) {
            if (this.hasResult) throw new o("Promise result already assigned");
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        get: function(a) {
            return this.hasResult ? (a(this._result),
                null) : this.success.connect(a).once()
        },
        set_progress: function(a) {
            this._progress != a && (this._progress = a, this.progressChanged.emit());
            return a
        },
        set_total: function(a) {
            this._total != a && (this._total = a, this.progressChanged.emit());
            return a
        },
        __class__: Wa
    };
    var aa = function(a) {
        N.call(this, a)
    };
    f["flambe.util.Signal0"] = aa;
    aa.__name__ = ["flambe", "util", "Signal0"];
    aa.__super__ = N;
    aa.prototype = t(N.prototype, {
        emit: function() {
            var a = this;
            this._head == N.DISPATCHING_SENTINEL ? this.defer(function() {
                a.emitImpl()
            }) : this.emitImpl()
        },
        emitImpl: function() {
            for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList || b.dispose(), b = b._next;
            this.didEmit(a)
        },
        __class__: aa
    });
    var xc = function(a) {
        this.next = null;
        this.fn = a
    };
    f["flambe.util._SignalBase.Task"] = xc;
    xc.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    xc.prototype = {
        __class__: xc
    };
    var M = function() {};
    f["flambe.util.Strings"] = M;
    M.__name__ = ["flambe", "util", "Strings"];
    M.getFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? w.substr(a, b + 1, null) : null
    };
    M.removeFileExtension =
        function(a) {
            var b = a.lastIndexOf(".");
            return 0 < b ? w.substr(a, 0, b) : a
        };
    M.getUrlExtension = function(a) {
        var b = a.lastIndexOf("?");
        0 <= b && (a = w.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = w.substr(a, b + 1, null));
        return M.getFileExtension(a)
    };
    M.joinPath = function(a, b) {
        0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    };
    M.substitute = function(a, b) {
        for (var c = 0, d = b.length; c < d;) var e = c++,
            a = K.replace(a, "{" + e + "}", b[e]);
        return a
    };
    M.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = 0 < a.length ? a + " [" :
                a + "[", d = 0; d < c;) {
                0 < d && (a += ", ");
                var e = b[d],
                    m = b[d + 1];
                if (k.is(m, Error)) {
                    var g = m.stack;
                    null != g && (m = g)
                }
                a += e + "=" + k.string(m);
                d += 2
            }
            a += "]"
        }
        return a
    };
    var Vc = function() {};
    f["haxe.IMap"] = Vc;
    Vc.__name__ = ["haxe", "IMap"];
    var zc = function(a) {
        this.url = a;
        this.headers = new ua;
        this.params = new ua;
        this.async = !0
    };
    f["haxe.Http"] = zc;
    zc.__name__ = ["haxe", "Http"];
    zc.prototype = {
        setParameter: function(a, b) {
            this.params = ta.filter(this.params, function(b) {
                return b.param != a
            });
            this.params.push({
                param: a,
                value: b
            });
            return this
        },
        request: function(a) {
            var b =
                this;
            b.responseData = null;
            var c = this.req = Rb.createXMLHttpRequest(),
                d = function() {
                    if (4 == c.readyState) {
                        var a;
                        try {
                            a = c.status
                        } catch (d) {
                            d instanceof o && (d = d.val), a = null
                        }
                        if (null != a) {
                            var e = window.location.protocol.toLowerCase();
                            (new P("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "")).match(e) && (a = null != c.responseText ? 200 : 404)
                        }
                        void 0 == a && (a = null);
                        if (null != a) b.onStatus(a);
                        if (null != a && 200 <= a && 400 > a) b.req = null, b.onData(b.responseData = c.responseText);
                        else if (null == a) b.req = null, b.onError("Failed to connect or resolve host");
                        else switch (a) {
                            case 12029:
                                b.req = null;
                                b.onError("Failed to connect to host");
                                break;
                            case 12007:
                                b.req = null;
                                b.onError("Unknown host");
                                break;
                            default:
                                b.req = null, b.responseData = c.responseText, b.onError("Http Error #" + c.status)
                        }
                    }
                };
            this.async && (c.onreadystatechange = d);
            var e = this.postData;
            if (null != e) a = !0;
            else
                for (var m = this.params.h, g = null; null != m;) g = m[0], m = m[1], e = null == e ? "" : e + "&", e += encodeURIComponent(g.param) + "=" + encodeURIComponent(g.value);
            try {
                if (a) c.open("POST", this.url, this.async);
                else if (null != e) {
                    var f =
                        1 >= this.url.split("?").length;
                    c.open("GET", this.url + (f ? "?" : "&") + e, this.async);
                    e = null
                } else c.open("GET", this.url, this.async)
            } catch (i) {
                i instanceof o && (i = i.val);
                b.req = null;
                this.onError(i.toString());
                return
            }!ta.exists(this.headers, function(a) {
                return "Content-Type" == a.header
            }) && a && null == this.postData && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            a = this.headers.h;
            for (m = null; null != a;) m = a[0], a = a[1], c.setRequestHeader(m.header, m.value);
            c.send(e);
            this.async || d(null)
        },
        onData: function() {},
        onError: function() {},
        onStatus: function() {},
        __class__: zc
    };
    var Wc = function(a, b) {
        this.high = a;
        this.low = b
    };
    f["haxe._Int64.___Int64"] = Wc;
    Wc.__name__ = ["haxe", "_Int64", "___Int64"];
    Wc.prototype = {
        __class__: Wc
    };
    var ha = function() {
        this.buf = new ga;
        this.cache = [];
        this.useCache = ha.USE_CACHE;
        this.useEnumIndex = ha.USE_ENUM_INDEX;
        this.shash = new L;
        this.scount = 0
    };
    f["haxe.Serializer"] = ha;
    ha.__name__ = ["haxe", "Serializer"];
    ha.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += "R", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)) : (this.shash.set(a, this.scount++), this.buf.b += "y", a = encodeURIComponent(a), this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length), this.buf.b += ":", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function(a) {
            for (var b = typeof a, c = 0, d = this.cache.length; c < d;) {
                var e = c++,
                    m = this.cache[e];
                if (typeof m == b && m == a) return this.buf.b += "r", this.buf.b = null == e ? this.buf.b + "null" : this.buf.b + ("" + e), !0
            }
            this.cache.push(a);
            return !1
        },
        serializeFields: function(a) {
            for (var b = 0, c = u.fields(a); b < c.length;) {
                var d = c[b];
                ++b;
                this.serializeString(d);
                this.serialize(u.field(a, d))
            }
            this.buf.b += "g"
        },
        serialize: function(a) {
            var b = F["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == a) {
                        this.buf.b += "z";
                        break
                    }
                    this.buf.b += "i";
                    this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                    break;
                case 2:
                    isNaN(a) ? this.buf.b += "k" : isFinite(a) ? (this.buf.b += "d", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a)) : this.buf.b = 0 > a ? this.buf.b +
                        "m" : this.buf.b + "p";
                    break;
                case 3:
                    this.buf.b = a ? this.buf.b + "t" : this.buf.b + "f";
                    break;
                case 6:
                    b = b[2];
                    if (b == String) {
                        this.serializeString(a);
                        break
                    }
                    if (this.useCache && this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            b = 0;
                            this.buf.b += "a";
                            for (var c = a.length, d = 0; d < c;) {
                                var e = d++;
                                null == a[e] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)), b = 0), this.serialize(a[e]))
                            }
                            0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" +
                                b)));
                            this.buf.b += "h";
                            break;
                        case ua:
                            this.buf.b += "l";
                            a = a.h;
                            for (b = null; null != a;) b = a[0], a = a[1], this.serialize(b);
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.add(a.getTime());
                            break;
                        case L:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(null != ka[c] ? a.getReserved(c) : a.h[c]);
                            this.buf.b += "h";
                            break;
                        case ca:
                            this.buf.b += "q";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c), this.serialize(a.h[c]);
                            this.buf.b += "h";
                            break;
                        case Ea:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c = b.next(), d = u.field(c, "__id__"), u.deleteField(c, "__id__"), this.serialize(c), c.__id__ = d, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case Ra:
                            d = 0;
                            e = a.length - 2;
                            b = new ga;
                            for (c = ha.BASE64; d < e;) {
                                var m = a.get(d++),
                                    g = a.get(d++),
                                    f = a.get(d++);
                                b.add(c.charAt(m >> 2));
                                b.add(c.charAt((m << 4 | g >> 4) & 63));
                                b.add(c.charAt((g << 2 | f >> 6) & 63));
                                b.add(c.charAt(f & 63))
                            }
                            d == e ? (e = a.get(d++), a = a.get(d++), b.add(c.charAt(e >> 2)), b.add(c.charAt((e << 4 | a >> 4) &
                                63)), b.add(c.charAt(a << 2 & 63))) : d == e + 1 && (a = a.get(d++), b.add(c.charAt(a >> 2)), b.add(c.charAt(a << 4 & 63)));
                            a = b.b;
                            this.buf.b += "s";
                            this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length);
                            this.buf.b += ":";
                            this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(F.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(F.getClassName(b)),
                                this.useCache && this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (B.__instanceof(a, ud)) a = F.getClassName(a), this.buf.b += "A", this.serializeString(a);
                    else if (B.__instanceof(a, vd)) this.buf.b += "B", this.serializeString(F.getEnumName(a));
                    else {
                        if (this.useCache && this.serializeRef(a)) break;
                        this.buf.b += "o";
                        this.serializeFields(a)
                    }
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) {
                        if (this.serializeRef(a)) break;
                        this.cache.pop()
                    }
                    this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                    this.serializeString(F.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += k.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += k.string(b - 2);
                    for (c = 2; c < b;) d = c++, this.serialize(a[d]);
                    this.useCache && this.cache.push(a);
                    break;
                case 5:
                    throw new o("Cannot serialize function");
                default:
                    throw new o("Cannot serialize " + k.string(a));
            }
        },
        __class__: ha
    };
    var yc = function(a) {
        var b = this;
        this.id = setInterval(function() {
            b.run()
        }, a)
    };
    f["haxe.Timer"] = yc;
    yc.__name__ = ["haxe", "Timer"];
    yc.prototype = {
        run: function() {},
        __class__: yc
    };
    var Q = function(a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = Q.DEFAULT_RESOLVER;
        null == a && (a = F, Q.DEFAULT_RESOLVER = a);
        this.setResolver(a)
    };
    f["haxe.Unserializer"] = Q;
    Q.__name__ = ["haxe", "Unserializer"];
    Q.initCodes = function() {
        for (var a = [], b = 0, c = Q.BASE64.length; b < c;) {
            var d = b++;
            a[Q.BASE64.charCodeAt(d)] = d
        }
        return a
    };
    Q.run = function(a) {
        return (new Q(a)).unserialize()
    };
    Q.prototype = {
        setResolver: function(a) {
            this.resolver = null == a ? {
                    resolveClass: function() {
                        return null
                    },
                    resolveEnum: function() {
                        return null
                    }
                } :
                a
        },
        get: function(a) {
            return this.buf.charCodeAt(a)
        },
        readDigits: function() {
            for (var a = 0, b = !1, c = this.pos;;) {
                var d = this.buf.charCodeAt(this.pos);
                if (d != d) break;
                if (45 == d) {
                    if (this.pos != c) break;
                    b = !0
                } else {
                    if (48 > d || 57 < d) break;
                    a = 10 * a + (d - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        readFloat: function() {
            for (var a = this.pos;;) {
                var b = this.buf.charCodeAt(this.pos);
                if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                else break
            }
            return k.parseFloat(w.substr(this.buf, a, this.pos - a))
        },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >= this.length) throw new o("Invalid object");
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if ("string" != typeof b) throw new o("Invalid object key");
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function(a, b) {
            if (58 != this.get(this.pos++)) throw new o("Invalid enum format");
            var c = this.readDigits();
            if (0 == c) return F.createEnum(a, b);
            for (var d = []; 0 < c--;) d.push(this.unserialize());
            return F.createEnum(a, b, d)
        },
        unserialize: function() {
            switch (this.get(this.pos++)) {
                case 110:
                    return null;
                case 116:
                    return !0;
                case 102:
                    return !1;
                case 122:
                    return 0;
                case 105:
                    return this.readDigits();
                case 100:
                    return this.readFloat();
                case 121:
                    var a = this.readDigits();
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw new o("Invalid string length");
                    var b = w.substr(this.buf, this.pos, a);
                    this.pos += a;
                    b = decodeURIComponent(b.split("+").join(" "));
                    this.scache.push(b);
                    return b;
                case 107:
                    return NaN;
                case 109:
                    return -Infinity;
                case 112:
                    return Infinity;
                case 97:
                    a = [];
                    for (this.cache.push(a);;) {
                        b = this.buf.charCodeAt(this.pos);
                        if (104 == b) {
                            this.pos++;
                            break
                        }
                        117 ==
                            b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize())
                    }
                    return a;
                case 111:
                    return a = {}, this.cache.push(a), this.unserializeObject(a), a;
                case 114:
                    a = this.readDigits();
                    if (0 > a || a >= this.cache.length) throw new o("Invalid reference");
                    return this.cache[a];
                case 82:
                    a = this.readDigits();
                    if (0 > a || a >= this.scache.length) throw new o("Invalid string reference");
                    return this.scache[a];
                case 120:
                    throw new o(this.unserialize());
                case 99:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null ==
                        b) throw new o("Class not found " + a);
                    a = F.createEmptyInstance(b);
                    this.cache.push(a);
                    this.unserializeObject(a);
                    return a;
                case 119:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new o("Enum not found " + a);
                    a = this.unserializeEnum(b, this.unserialize());
                    this.cache.push(a);
                    return a;
                case 106:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new o("Enum not found " + a);
                    this.pos++;
                    var c = this.readDigits(),
                        d = F.getEnumConstructs(b)[c];
                    if (null == d) throw new o("Unknown enum index " +
                        a + "@" + c);
                    a = this.unserializeEnum(b, d);
                    this.cache.push(a);
                    return a;
                case 108:
                    a = new ua;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 98:
                    a = new L;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 113:
                    a = new ca;
                    this.cache.push(a);
                    for (b = this.get(this.pos++); 58 == b;) b = this.readDigits(), a.set(b, this.unserialize()), b = this.get(this.pos++);
                    if (104 != b) throw new o("Invalid IntMap format");
                    return a;
                case 77:
                    a = new Ea;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 118:
                    return 48 <= this.buf.charCodeAt(this.pos) && 57 >= this.buf.charCodeAt(this.pos) && 48 <= this.buf.charCodeAt(this.pos + 1) && 57 >= this.buf.charCodeAt(this.pos + 1) && 48 <= this.buf.charCodeAt(this.pos + 2) && 57 >= this.buf.charCodeAt(this.pos + 2) && 48 <= this.buf.charCodeAt(this.pos + 3) && 57 >= this.buf.charCodeAt(this.pos + 3) && 45 == this.buf.charCodeAt(this.pos + 4) ? (a =
                        w.substr(this.buf, this.pos, 19), a = w.strDate(a), this.pos += 19) : (a = this.readFloat(), b = new Date, b.setTime(a), a = b), this.cache.push(a), a;
                case 115:
                    a = this.readDigits();
                    d = this.buf;
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw new o("Invalid bytes length");
                    var e = Q.CODES;
                    null == e && (e = Q.initCodes(), Q.CODES = e);
                    for (var g = this.pos, f = a & 3, i = g + (a - f), b = Ra.alloc(3 * (a >> 2) + (2 <= f ? f - 1 : 0)), c = 0; g < i;) {
                        var p = e[K.fastCodeAt(d, g++)],
                            k = e[K.fastCodeAt(d, g++)];
                        b.set(c++, p << 2 | k >> 4);
                        p = e[K.fastCodeAt(d, g++)];
                        b.set(c++, k <<
                            4 | p >> 2);
                        k = e[K.fastCodeAt(d, g++)];
                        b.set(c++, p << 6 | k)
                    }
                    2 <= f && (k = e[K.fastCodeAt(d, g++)], i = e[K.fastCodeAt(d, g++)], b.set(c++, k << 2 | i >> 4), 3 == f && (d = e[K.fastCodeAt(d, g++)], b.set(c++, i << 4 | d >> 2)));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new o("Class not found " + a);
                    a = F.createEmptyInstance(b);
                    this.cache.push(a);
                    a.hxUnserialize(this);
                    if (103 != this.get(this.pos++)) throw new o("Invalid custom data");
                    return a;
                case 65:
                    a = this.unserialize();
                    b =
                        this.resolver.resolveClass(a);
                    if (null == b) throw new o("Class not found " + a);
                    return b;
                case 66:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new o("Enum not found " + a);
                    return b
            }
            this.pos--;
            throw new o("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
        },
        __class__: Q
    };
    var ca = function() {
        this.h = {}
    };
    f["haxe.ds.IntMap"] = ca;
    ca.__name__ = ["haxe", "ds", "IntMap"];
    ca.__interfaces__ = [Vc];
    ca.prototype = {
        set: function(a, b) {
            this.h[a] = b
        },
        remove: function(a) {
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
            return w.iter(a)
        },
        __class__: ca
    };
    var Ea = function() {
        this.h = {};
        this.h.__keys__ = {}
    };
    f["haxe.ds.ObjectMap"] = Ea;
    Ea.__name__ = ["haxe", "ds", "ObjectMap"];
    Ea.__interfaces__ = [Vc];
    Ea.prototype = {
        set: function(a, b) {
            var c = a.__id__ || (a.__id__ = ++Ea.count);
            this.h[c] = b;
            this.h.__keys__[c] = a
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]);
            return w.iter(a)
        },
        __class__: Ea
    };
    var dc = function(a, b) {
        this.map = a;
        this.keys = b;
        this.index = 0;
        this.count = b.length
    };
    f["haxe.ds._StringMap.StringMapIterator"] = dc;
    dc.__name__ = ["haxe", "ds", "_StringMap", "StringMapIterator"];
    dc.prototype = {
        hasNext: function() {
            return this.index < this.count
        },
        next: function() {
            return this.map.get(this.keys[this.index++])
        },
        __class__: dc
    };
    var L = function() {
        this.h = {}
    };
    f["haxe.ds.StringMap"] = L;
    L.__name__ = ["haxe", "ds", "StringMap"];
    L.__interfaces__ = [Vc];
    L.prototype = {
        set: function(a, b) {
            null != ka[a] ? this.setReserved(a,
                b) : this.h[a] = b
        },
        get: function(a) {
            return null != ka[a] ? this.getReserved(a) : this.h[a]
        },
        exists: function(a) {
            return null != ka[a] ? this.existsReserved(a) : this.h.hasOwnProperty(a)
        },
        setReserved: function(a, b) {
            null == this.rh && (this.rh = {});
            this.rh["$" + a] = b
        },
        getReserved: function(a) {
            return null == this.rh ? null : this.rh["$" + a]
        },
        existsReserved: function(a) {
            return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + a)
        },
        remove: function(a) {
            if (null != ka[a]) {
                a = "$" + a;
                if (null == this.rh || !this.rh.hasOwnProperty(a)) return !1;
                delete this.rh[a]
            } else {
                if (!this.h.hasOwnProperty(a)) return !1;
                delete this.h[a]
            }
            return !0
        },
        keys: function() {
            var a = this.arrayKeys();
            return w.iter(a)
        },
        arrayKeys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b);
            if (null != this.rh)
                for (b in this.rh) 36 == b.charCodeAt(0) && a.push(b.substr(1));
            return a
        },
        iterator: function() {
            return new dc(this, this.arrayKeys())
        },
        __class__: L
    };
    var Ra = function(a) {
        this.length = a.byteLength;
        this.b = new sd(a);
        this.b.bufferValue = a;
        a.hxBytes = this;
        a.bytes = this.b
    };
    f["haxe.io.Bytes"] = Ra;
    Ra.__name__ = ["haxe", "io", "Bytes"];
    Ra.alloc =
        function(a) {
            return new Ra(new pd(a))
        };
    Ra.prototype = {
        get: function(a) {
            return this.b[a]
        },
        set: function(a, b) {
            this.b[a] = b & 255
        },
        __class__: Ra
    };
    var Y = f["haxe.io.Error"] = {
        __ename__: ["haxe", "io", "Error"],
        __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
    };
    Y.Blocked = ["Blocked", 0];
    Y.Blocked.toString = v;
    Y.Blocked.__enum__ = Y;
    Y.Overflow = ["Overflow", 1];
    Y.Overflow.toString = v;
    Y.Overflow.__enum__ = Y;
    Y.OutsideBounds = ["OutsideBounds", 2];
    Y.OutsideBounds.toString = v;
    Y.OutsideBounds.__enum__ = Y;
    Y.Custom = function(a) {
        a = ["Custom", 3, a];
        a.__enum__ = Y;
        a.toString = v;
        return a
    };
    var la = function() {};
    f["haxe.io.FPHelper"] = la;
    la.__name__ = ["haxe", "io", "FPHelper"];
    la.i32ToFloat = function(a) {
        var b = a >>> 23 & 255,
            c = a & 8388607;
        return 0 == c && 0 == b ? 0 : (1 - (a >>> 31 << 1)) * (1 + Math.pow(2, -23) * c) * Math.pow(2, b - 127)
    };
    la.floatToI32 = function(a) {
        if (0 == a) return 0;
        var b;
        b = 0 > a ? -a : a;
        var c = Math.floor(Math.log(b) / 0.6931471805599453); - 127 > c ? c = -127 : 128 < c && (c = 128);
        b = Math.round(8388608 * (b / Math.pow(2, c) - 1)) & 8388607;
        return (0 > a ? -2147483648 : 0) | c + 127 << 23 | b
    };
    la.i64ToDouble =
        function(a, b) {
            var c = (b >> 20 & 2047) - 1023,
                d = 4294967296 * (b & 1048575) + 2147483648 * (a >>> 31) + (a & 2147483647);
            return 0 == d && -1023 == c ? 0 : (1 - (b >>> 31 << 1)) * (1 + Math.pow(2, -52) * d) * Math.pow(2, c)
        };
    la.doubleToI64 = function(a) {
        var b = la.i64tmp;
        if (0 == a) b.low = 0, b.high = 0;
        else {
            var c;
            c = 0 > a ? -a : a;
            var d = Math.floor(Math.log(c) / 0.6931471805599453);
            c = 4503599627370496 * (c / Math.pow(2, d) - 1);
            c = Math.round(c);
            b.low = c | 0;
            b.high = (0 > a ? -2147483648 : 0) | d + 1023 << 20 | c / 4294967296 | 0
        }
        return b
    };
    var Xb = function() {};
    f["haxe.rtti.Meta"] = Xb;
    Xb.__name__ = ["haxe",
        "rtti", "Meta"
    ];
    Xb.getType = function(a) {
        a = Xb.getMeta(a);
        return null == a || null == a.obj ? {} : a.obj
    };
    Xb.getMeta = function(a) {
        return a.__meta__
    };
    var Xc = function(a) {
        this.__x = a
    };
    f["haxe.xml._Fast.NodeAccess"] = Xc;
    Xc.__name__ = ["haxe", "xml", "_Fast", "NodeAccess"];
    Xc.prototype = {
        resolve: function(a) {
            var b = this.__x.elementsNamed(a).next();
            if (null == b) throw b = this.__x.nodeType == s.Document ? "Document" : this.__x.get_nodeName(), new o(b + " is missing element " + a);
            return new Ua(b)
        },
        __class__: Xc
    };
    var Yc = function(a) {
        this.__x = a
    };
    f["haxe.xml._Fast.AttribAccess"] = Yc;
    Yc.__name__ = ["haxe", "xml", "_Fast", "AttribAccess"];
    Yc.prototype = {
        resolve: function(a) {
            if (this.__x.nodeType == s.Document) throw new o("Cannot access document attribute " + a);
            var b = this.__x.get(a);
            if (null == b) throw new o(this.__x.get_nodeName() + " is missing attribute " + a);
            return b
        },
        __class__: Yc
    };
    var Zc = function(a) {
        this.__x = a
    };
    f["haxe.xml._Fast.HasAttribAccess"] = Zc;
    Zc.__name__ = ["haxe", "xml", "_Fast", "HasAttribAccess"];
    Zc.prototype = {
        __class__: Zc
    };
    var $c = function(a) {
        this.__x =
            a
    };
    f["haxe.xml._Fast.HasNodeAccess"] = $c;
    $c.__name__ = ["haxe", "xml", "_Fast", "HasNodeAccess"];
    $c.prototype = {
        __class__: $c
    };
    var ad = function(a) {
        this.__x = a
    };
    f["haxe.xml._Fast.NodeListAccess"] = ad;
    ad.__name__ = ["haxe", "xml", "_Fast", "NodeListAccess"];
    ad.prototype = {
        resolve: function(a) {
            for (var b = new ua, a = this.__x.elementsNamed(a); a.hasNext();) {
                var c = a.next();
                b.add(new Ua(c))
            }
            return b
        },
        __class__: ad
    };
    var Ua = function(a) {
        if (a.nodeType != s.Document && a.nodeType != s.Element) throw new o("Invalid nodeType " + a.nodeType);
        this.x = a;
        this.node = new Xc(a);
        this.nodes = new ad(a);
        this.att = new Yc(a);
        this.has = new Zc(a);
        this.hasNode = new $c(a)
    };
    f["haxe.xml.Fast"] = Ua;
    Ua.__name__ = ["haxe", "xml", "Fast"];
    Ua.prototype = {
        __class__: Ua
    };
    var va = function() {};
    f["haxe.xml.Parser"] = va;
    va.__name__ = ["haxe", "xml", "Parser"];
    va.parse = function(a, b) {
        null == b && (b = !1);
        var c = s.createDocument();
        va.doParse(a, b, 0, c);
        return c
    };
    va.doParse = function(a, b, c, d) {
        null == c && (c = 0);
        for (var e = null, g = 1, f = 1, i = null, p = 0, l = 0, n = 0, h = a.charCodeAt(c), q = new ga, r = 1, t = -1; h == h;) {
            switch (g) {
                case 0:
                    switch (h) {
                        case 10:
                        case 13:
                        case 9:
                        case 32:
                            break;
                        default:
                            g = f;
                            continue
                    }
                    break;
                case 1:
                    switch (h) {
                        case 60:
                            g = 0;
                            f = 2;
                            break;
                        default:
                            p = c;
                            g = 13;
                            continue
                    }
                    break;
                case 13:
                    60 == h ? (q.addSub(a, p, c - p), f = s.createPCData(q.b), q = new ga, d.addChild(f), l++, g = 0, f = 2) : 38 == h && (q.addSub(a, p, c - p), g = 18, r = 13, p = c + 1);
                    break;
                case 17:
                    93 == h && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (h = s.createCData(w.substr(a, p, c - p)), d.addChild(h), l++, c += 2, g = 1);
                    break;
                case 2:
                    switch (h) {
                        case 33:
                            if (91 == a.charCodeAt(c + 1)) {
                                c += 2;
                                if ("CDATA[" != w.substr(a, c, 6).toUpperCase()) throw new o("Expected <![CDATA[");
                                c += 5;
                                g = 17
                            } else if (68 == a.charCodeAt(c + 1) || 100 == a.charCodeAt(c + 1)) {
                                if ("OCTYPE" != w.substr(a, c + 2, 6).toUpperCase()) throw new o("Expected <!DOCTYPE");
                                c += 8;
                                g = 16
                            } else {
                                if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2)) throw new o("Expected <\!--");
                                c += 2;
                                g = 15
                            }
                            p = c + 1;
                            break;
                        case 63:
                            g = 14;
                            p = c;
                            break;
                        case 47:
                            if (null == d) throw new o("Expected node name");
                            p = c + 1;
                            g = 0;
                            f = 10;
                            break;
                        default:
                            g = 3;
                            p = c;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= h && 122 >= h || 65 <= h && 90 >= h || 48 <= h && 57 >= h || 58 == h || 46 == h || 95 == h || 45 == h)) {
                        if (c == p) throw new o("Expected node name");
                        e = s.createElement(w.substr(a, p, c - p));
                        d.addChild(e);
                        l++;
                        g = 0;
                        f = 4;
                        continue
                    }
                    break;
                case 4:
                    switch (h) {
                        case 47:
                            g = 11;
                            break;
                        case 62:
                            g = 9;
                            break;
                        default:
                            g = 5;
                            p = c;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= h && 122 >= h || 65 <= h && 90 >= h || 48 <= h && 57 >= h || 58 == h || 46 == h || 95 == h || 45 == h)) {
                        if (p == c) throw new o("Expected attribute name");
                        i = w.substr(a, p, c - p);
                        if (e.exists(i)) throw new o("Duplicate attribute");
                        g = 0;
                        f = 6;
                        continue
                    }
                    break;
                case 6:
                    switch (h) {
                        case 61:
                            g = 0;
                            f = 7;
                            break;
                        default:
                            throw new o("Expected =");
                    }
                    break;
                case 7:
                    switch (h) {
                        case 34:
                        case 39:
                            q =
                                new ga;
                            g = 8;
                            p = c + 1;
                            t = h;
                            break;
                        default:
                            throw new o('Expected "');
                    }
                    break;
                case 8:
                    switch (h) {
                        case 38:
                            q.addSub(a, p, c - p);
                            g = 18;
                            r = 8;
                            p = c + 1;
                            break;
                        case 62:
                            if (b) throw new o("Invalid unescaped " + String.fromCharCode(h) + " in attribute value");
                            h == t && (q.addSub(a, p, c - p), f = q.b, q = new ga, e.set(i, f), g = 0, f = 4);
                            break;
                        case 60:
                            if (b) throw new o("Invalid unescaped " + String.fromCharCode(h) + " in attribute value");
                            h == t && (q.addSub(a, p, c - p), f = q.b, q = new ga, e.set(i, f), g = 0, f = 4);
                            break;
                        default:
                            h == t && (q.addSub(a, p, c - p), f = q.b, q = new ga, e.set(i,
                                f), g = 0, f = 4)
                    }
                    break;
                case 9:
                    p = c = va.doParse(a, b, c, e);
                    g = 1;
                    break;
                case 11:
                    switch (h) {
                        case 62:
                            g = 1;
                            break;
                        default:
                            throw new o("Expected >");
                    }
                    break;
                case 12:
                    switch (h) {
                        case 62:
                            return 0 == l && d.addChild(s.createPCData("")), c;
                        default:
                            throw new o("Expected >");
                    }
                case 10:
                    if (!(97 <= h && 122 >= h || 65 <= h && 90 >= h || 48 <= h && 57 >= h || 58 == h || 46 == h || 95 == h || 45 == h)) {
                        if (p == c) throw new o("Expected node name");
                        f = w.substr(a, p, c - p);
                        if (d.nodeType != s.Element) throw new o("Bad node type, expected Element but found " + d.nodeType);
                        if (f != d.nodeName) throw new o("Expected </" +
                            function() {
                                if (d.nodeType != s.Element) throw "Bad node type, expected Element but found " + d.nodeType;
                                return d.nodeName
                            }(this) + ">");
                        g = 0;
                        f = 12;
                        continue
                    }
                    break;
                case 15:
                    45 == h && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (h = s.createComment(w.substr(a, p, c - p)), d.addChild(h), l++, c += 2, g = 1);
                    break;
                case 16:
                    91 == h ? n++ : 93 == h ? n-- : 62 == h && 0 == n && (h = s.createDocType(w.substr(a, p, c - p)), d.addChild(h), l++, g = 1);
                    break;
                case 14:
                    63 == h && 62 == a.charCodeAt(c + 1) && (c++, h = w.substr(a, p + 1, c - p - 2), h = s.createProcessingInstruction(h), d.addChild(h),
                        l++, g = 1);
                    break;
                case 18:
                    if (59 == h) {
                        p = w.substr(a, p, c - p);
                        if (35 == p.charCodeAt(0)) p = 120 == p.charCodeAt(1) ? k.parseInt("0" + w.substr(p, 1, p.length - 1)) : k.parseInt(w.substr(p, 1, p.length - 1)), q.b += String.fromCharCode(p);
                        else if (va.escapes.exists(p)) q.add(va.escapes.get(p));
                        else {
                            if (b) throw new o("Undefined entity: " + p);
                            q.b += k.string("&" + p + ";")
                        }
                        p = c + 1;
                        g = r
                    } else if (!(97 <= h && 122 >= h || 65 <= h && 90 >= h || 48 <= h && 57 >= h || 58 == h || 46 == h || 95 == h || 45 == h) && 35 != h) {
                        if (b) throw new o("Invalid character in entity: " + String.fromCharCode(h));
                        q.b += "&";
                        q.addSub(a, p, c - p);
                        c--;
                        p = c + 1;
                        g = r
                    }
            }
            h = K.fastCodeAt(a, ++c)
        }
        1 == g && (p = c, g = 13);
        if (13 == g) {
            if (c != p || 0 == l) q.addSub(a, p, c - p), a = s.createPCData(q.b), d.addChild(a), l++;
            return c
        }
        if (!b && 18 == g && 13 == r) return q.b += "&", q.addSub(a, p, c - p), a = s.createPCData(q.b), d.addChild(a), l++, c;
        throw new o("Unexpected end");
    };
    var o = function(a) {
        Error.call(this);
        this.val = a;
        this.message = "" + a;
        Error.captureStackTrace && Error.captureStackTrace(this, o)
    };
    f["js._Boot.HaxeError"] = o;
    o.__name__ = ["js", "_Boot", "HaxeError"];
    o.__super__ = Error;
    o.prototype = t(Error.prototype, {
        __class__: o
    });
    var B = function() {};
    f["js.Boot"] = B;
    B.__name__ = ["js", "Boot"];
    B.getClass = function(a) {
        if (a instanceof Array && null == a.__enum__) return Array;
        var b = a.__class__;
        if (null != b) return b;
        a = B.__nativeClassName(a);
        return null != a ? B.__resolveNativeClass(a) : null
    };
    B.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 ==
                            a.length) return a[0];
                        for (var c = a[0] + "(", b = b + "\t", d = 2, e = a.length; d < e;) var g = d++,
                            c = 2 != g ? c + ("," + B.__string_rec(a[g], b)) : c + B.__string_rec(a[g], b);
                        return c + ")"
                    }
                    c = a.length;
                    d = "[";
                    b += "\t";
                    for (e = 0; e < c;) g = e++, d += (0 < g ? "," : "") + B.__string_rec(a[g], b);
                    return d + "]"
                }
                try {
                    d = a.toString
                } catch (f) {
                    return f instanceof o && (f = f.val), "???"
                }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                for (c in a)
                    if (!e || a.hasOwnProperty(c)) "prototype" ==
                        c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + B.__string_rec(a[c], b));
                b = b.substring(1);
                return d + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return "" + a
        }
    };
    B.__interfLoop = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var d = 0, e = c.length; d < e;) {
                var g = d++,
                    g = c[g];
                if (g == b || B.__interfLoop(g, b)) return !0
            }
        return B.__interfLoop(a.__super__, b)
    };
    B.__instanceof = function(a,
        b) {
        if (null == b) return !1;
        switch (b) {
            case zd:
                return (a | 0) === a;
            case wd:
                return "number" == typeof a;
            case xd:
                return "boolean" == typeof a;
            case String:
                return "string" == typeof a;
            case Array:
                return a instanceof Array && null == a.__enum__;
            case Ad:
                return !0;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (a instanceof b || B.__interfLoop(B.getClass(a), b)) return !0
                    } else {
                        if ("object" == typeof b && B.__isNativeObj(b) && a instanceof b) return !0
                    } else return !1;
                return b == ud && null != a.__name__ || b == vd && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    B.__nativeClassName =
        function(a) {
            a = B.__toStr.call(a).slice(8, -1);
            return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
        };
    B.__isNativeObj = function(a) {
        return null != B.__nativeClassName(a)
    };
    B.__resolveNativeClass = function(a) {
        return rd[a]
    };
    var Rb = function() {};
    f["js.Browser"] = Rb;
    Rb.__name__ = ["js", "Browser"];
    Rb.getLocalStorage = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            return a
        } catch (b) {
            return b instanceof o && (b = b.val), null
        }
    };
    Rb.createXMLHttpRequest = function() {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
        if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        throw new o("Unable to create XMLHttpRequest object.");
    };
    var ma = function(a) {
        if (a instanceof Array && null == a.__enum__) this.a = a, this.byteLength = a.length;
        else {
            this.a = [];
            for (var b = 0; b < a;) this.a[b++] = 0;
            this.byteLength = a
        }
    };
    f["js.html.compat.ArrayBuffer"] = ma;
    ma.__name__ = ["js", "html", "compat", "ArrayBuffer"];
    ma.sliceImpl = function(a, b) {
        var c = new sd(this, a, null == b ? null : b - a),
            d = new pd(c.byteLength);
        (new sd(d)).set(c);
        return d
    };
    ma.prototype = {
        slice: function(a, b) {
            return new ma(this.a.slice(a, b))
        },
        __class__: ma
    };
    var qd = function(a, b, c) {
        this.buf = a;
        this.offset = null == b ? 0 : b;
        this.length = null == c ? a.byteLength - this.offset : c;
        if (0 > this.offset || 0 > this.length || this.offset + this.length > a.byteLength) throw new o(Y.OutsideBounds);
    };
    f["js.html.compat.DataView"] = qd;
    qd.__name__ = ["js", "html", "compat", "DataView"];
    qd.prototype = {
        getInt8: function(a) {
            a = this.buf.a[this.offset + a];
            return 128 <= a ? a - 256 : a
        },
        getUint8: function(a) {
            return this.buf.a[this.offset + a]
        },
        getInt16: function(a,
            b) {
            var c = this.getUint16(a, b);
            return 32768 <= c ? c - 65536 : c
        },
        getUint16: function(a, b) {
            return b ? this.buf.a[this.offset + a] | this.buf.a[this.offset + a + 1] << 8 : this.buf.a[this.offset + a] << 8 | this.buf.a[this.offset + a + 1]
        },
        getInt32: function(a, b) {
            var c = this.offset + a,
                d = this.buf.a[c++],
                e = this.buf.a[c++],
                g = this.buf.a[c++],
                c = this.buf.a[c++];
            return b ? d | e << 8 | g << 16 | c << 24 : c | g << 8 | e << 16 | d << 24
        },
        getUint32: function(a, b) {
            var c = this.getInt32(a, b);
            return 0 > c ? c + 4294967296 : c
        },
        getFloat32: function(a, b) {
            return la.i32ToFloat(this.getInt32(a,
                b))
        },
        getFloat64: function(a, b) {
            var c = this.getInt32(a, b),
                d = this.getInt32(a + 4, b);
            return la.i64ToDouble(b ? c : d, b ? d : c)
        },
        setInt8: function(a, b) {
            this.buf.a[a + this.offset] = 0 > b ? b + 128 & 255 : b & 255
        },
        setUint8: function(a, b) {
            this.buf.a[a + this.offset] = b & 255
        },
        setInt16: function(a, b, c) {
            this.setUint16(a, 0 > b ? b + 65536 : b, c)
        },
        setUint16: function(a, b, c) {
            a += this.offset;
            c ? (this.buf.a[a] = b & 255, this.buf.a[a++] = b >> 8 & 255) : (this.buf.a[a++] = b >> 8 & 255, this.buf.a[a] = b & 255)
        },
        setInt32: function(a, b, c) {
            this.setUint32(a, b, c)
        },
        setUint32: function(a,
            b, c) {
            a += this.offset;
            c ? (this.buf.a[a++] = b & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >>> 24) : (this.buf.a[a++] = b >>> 24, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b & 255)
        },
        setFloat32: function(a, b, c) {
            this.setUint32(a, la.floatToI32(b), c)
        },
        setFloat64: function(a, b, c) {
            b = la.doubleToI64(b);
            c ? (this.setUint32(a, b.low), this.setUint32(a, b.high)) : (this.setUint32(a, b.high), this.setUint32(a, b.low))
        },
        __class__: qd
    };
    var ya = function() {};
    f["js.html.compat.Uint8Array"] =
        ya;
    ya.__name__ = ["js", "html", "compat", "Uint8Array"];
    ya._new = function(a, b, c) {
        if ("number" == typeof a) {
            c = [];
            for (b = 0; b < a;) {
                var d = b++;
                c[d] = 0
            }
            c.byteLength = c.length;
            c.byteOffset = 0;
            c.buffer = new ma(c)
        } else if (B.__instanceof(a, ma)) null == b && (b = 0), null == c && (c = a.byteLength - b), c = 0 == b ? a.a : a.a.slice(b, b + c), c.byteLength = c.length, c.byteOffset = b, c.buffer = a;
        else if (a instanceof Array && null == a.__enum__) c = a.slice(), c.byteLength = c.length, c.byteOffset = 0, c.buffer = new ma(c);
        else throw new o("TODO " + k.string(a));
        c.subarray = ya._subarray;
        c.set = ya._set;
        return c
    };
    ya._set = function(a, b) {
        if (B.__instanceof(a.buffer, ma)) {
            if (a.byteLength + b > this.byteLength) throw new o("set() outside of range");
            for (var c = 0, d = a.byteLength; c < d;) {
                var e = c++;
                this[e + b] = a[e]
            }
        } else if (a instanceof Array && null == a.__enum__) {
            if (a.length + b > this.byteLength) throw new o("set() outside of range");
            c = 0;
            for (d = a.length; c < d;) e = c++, this[e + b] = a[e]
        } else throw new o("TODO");
    };
    ya._subarray = function(a, b) {
        var c = ya._new(this.slice(a, b));
        c.byteOffset = a;
        return c
    };
    var Ib = function(a, b, c) {
        this._timerStop =
            0.8;
        this._timer = 0;
        this._codeEntered = !1;
        h.call(this);
        this._ctx = a;
        this._objectName = b;
        this._passcode = c;
        this._buttonDown = [];
        this._buttonDownTimer = [];
        this._buttons = []
    };
    f["screens.CodePanel"] = Ib;
    Ib.__name__ = ["screens", "CodePanel"];
    Ib.__super__ = h;
    Ib.prototype = t(h.prototype, {
        get_name: function() {
            return "CodePanel_21"
        },
        onAdded: function() {
            var a = this;
            this.owner.add(new q);
            var b = new i(this._ctx.pack.getTexture("backTap"));
            this.owner.addChild((new g).add(b));
            b.setXY(0, 0);
            var c = this._ctx.pack.getTexture("codePanel/codepanelBack"),
                d = new i(c);
            this.owner.addChild((new g).add(d));
            d.setXY(160 * this._ctx.gameMagnify, 260 * this._ctx.gameMagnify);
            d.centerAnchor();
            this._codeText = new na(this._ctx.segmentFont);
            this._codeText.setXY(82 * this._ctx.gameMagnify, 110 * this._ctx.gameMagnify);
            this.owner.addChild((new g).add(this._codeText));
            this._codeText.set_text("");
            for (d = 0; 12 > d;) d++, this._buttonDown.push(!1), this._buttonDownTimer.push(0);
            c = this._ctx.pack.getTexture("codePanel/codebutton001");
            c = new i(c);
            this.owner.addChild((new g).add(c));
            c.setXY(162 *
                this._ctx.gameMagnify, 382 * this._ctx.gameMagnify);
            c.centerAnchor();
            this._buttons.push(c);
            c.get_pointerDown().connect(function() {
                a._buttons[0].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown001");
                a._ctx.pack.getSound("sounds/code_button_push").play()
            });
            c.get_pointerUp().connect(function() {
                if (!a._codeEntered) {
                    var b = a._codeText;
                    b.set_text(b._text + "0")
                }
                a._buttonDown[0] = !0;
                a._buttons[0].texture = a._ctx.pack.getTexture("codePanel/codebutton001")
            });
            for (var d = Math.round(112 * this._ctx.gameMagnify),
                e = Math.round(232 * this._ctx.gameMagnify), f = 2, h = 0; 3 > h;) {
                h++;
                for (var k = 0; 3 > k;) k++, c = this._ctx.pack.getTexture("codePanel/codebutton00" + f), c = new i(c), this.owner.addChild((new g).add(c)), c.setXY(d, e), c.centerAnchor(), this._buttons.push(c), 2 == f && (c.get_pointerDown().connect(function() {
                        a._buttons[1].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown002");
                        a._ctx.pack.getSound("sounds/code_button_push").play()
                    }), c.get_pointerUp().connect(function() {
                        if (!a._codeEntered) {
                            var b = a._codeText;
                            b.set_text(b._text +
                                "1")
                        }
                        a._buttonDown[1] = !0;
                        a._buttons[1].texture = a._ctx.pack.getTexture("codePanel/codebutton002")
                    })), 3 == f && (c.get_pointerDown().connect(function() {
                        a._buttons[2].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown003");
                        a._ctx.pack.getSound("sounds/code_button_push").play()
                    }), c.get_pointerUp().connect(function() {
                        if (!a._codeEntered) {
                            var b = a._codeText;
                            b.set_text(b._text + "2")
                        }
                        a._buttonDown[2] = !0;
                        a._buttons[2].texture = a._ctx.pack.getTexture("codePanel/codebutton003")
                    })), 4 == f && (c.get_pointerDown().connect(function() {
                        a._buttons[3].texture =
                            a._ctx.pack.getTexture("codePanel/codebuttonDown004");
                        a._ctx.pack.getSound("sounds/code_button_push").play()
                    }), c.get_pointerUp().connect(function() {
                        if (!a._codeEntered) {
                            var b = a._codeText;
                            b.set_text(b._text + "3")
                        }
                        a._buttonDown[3] = !0;
                        a._buttons[3].texture = a._ctx.pack.getTexture("codePanel/codebutton004")
                    })), 5 == f && (c.get_pointerDown().connect(function() {
                        a._buttons[4].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown005");
                        a._ctx.pack.getSound("sounds/code_button_push").play()
                    }), c.get_pointerUp().connect(function() {
                        if (!a._codeEntered) {
                            var b =
                                a._codeText;
                            b.set_text(b._text + "4")
                        }
                        a._buttonDown[4] = !0;
                        a._buttons[4].texture = a._ctx.pack.getTexture("codePanel/codebutton005")
                    })), 6 == f && (c.get_pointerDown().connect(function() {
                        a._buttons[5].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown006");
                        a._ctx.pack.getSound("sounds/code_button_push").play()
                    }), c.get_pointerUp().connect(function() {
                        if (!a._codeEntered) {
                            var b = a._codeText;
                            b.set_text(b._text + "5")
                        }
                        a._buttonDown[5] = !0;
                        a._buttons[5].texture = a._ctx.pack.getTexture("codePanel/codebutton006")
                    })),
                    7 == f && (c.get_pointerDown().connect(function() {
                        a._buttons[6].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown007");
                        a._ctx.pack.getSound("sounds/code_button_push").play()
                    }), c.get_pointerUp().connect(function() {
                        if (!a._codeEntered) {
                            var b = a._codeText;
                            b.set_text(b._text + "6")
                        }
                        a._buttonDown[6] = !0;
                        a._buttons[6].texture = a._ctx.pack.getTexture("codePanel/codebutton007")
                    })), 8 == f && (c.get_pointerDown().connect(function() {
                            a._buttons[7].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown008");
                            a._ctx.pack.getSound("sounds/code_button_push").play()
                        }),
                        c.get_pointerUp().connect(function() {
                            if (!a._codeEntered) {
                                var b = a._codeText;
                                b.set_text(b._text + "7")
                            }
                            a._buttonDown[7] = !0;
                            a._buttons[7].texture = a._ctx.pack.getTexture("codePanel/codebutton008")
                        })), 9 == f && (c.get_pointerDown().connect(function() {
                        a._buttons[8].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown009");
                        a._ctx.pack.getSound("sounds/code_button_push").play()
                    }), c.get_pointerUp().connect(function() {
                        if (!a._codeEntered) {
                            var b = a._codeText;
                            b.set_text(b._text + "8")
                        }
                        a._buttonDown[8] = !0;
                        a._buttons[8].texture =
                            a._ctx.pack.getTexture("codePanel/codebutton009")
                    })), 10 == f && (c.get_pointerDown().connect(function() {
                        a._buttons[9].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown010");
                        a._ctx.pack.getSound("sounds/code_button_push").play()
                    }), c.get_pointerUp().connect(function() {
                        if (!a._codeEntered) {
                            var b = a._codeText;
                            b.set_text(b._text + "9")
                        }
                        a._buttonDown[9] = !0;
                        a._buttons[9].texture = a._ctx.pack.getTexture("codePanel/codebutton0010")
                    })), d += Math.round(50 * this._ctx.gameMagnify), f++;
                d = Math.round(112 * this._ctx.gameMagnify);
                e += Math.round(50 * this._ctx.gameMagnify)
            }
            c = new i(this._ctx.pack.getTexture("codePanel/codebutton0011"));
            this.owner.addChild((new g).add(c));
            c.setXY(112 * this._ctx.gameMagnify, 382 * this._ctx.gameMagnify);
            c.centerAnchor();
            this._buttons.push(c);
            c.get_pointerDown().connect(function() {
                a._buttons[10].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown011");
                a._ctx.pack.getSound("sounds/code_button_push").play()
            });
            c.get_pointerUp().connect(function() {
                a._codeEntered || a._codeText.set_text(a._codeText._text.substring(0,
                    a._codeText._text.length - 1));
                a._buttonDown[10] = !0;
                a._buttons[10].texture = a._ctx.pack.getTexture("codePanel/codebutton0011")
            });
            c = new i(this._ctx.pack.getTexture("codePanel/codebutton0012"));
            this.owner.addChild((new g).add(c));
            c.setXY(212 * this._ctx.gameMagnify, 382 * this._ctx.gameMagnify);
            c.centerAnchor();
            this._buttons.push(c);
            c.get_pointerDown().connect(function() {
                a._buttons[11].texture = a._ctx.pack.getTexture("codePanel/codebuttonDown012");
                a._ctx.pack.getSound("sounds/code_button_push").play()
            });
            c.get_pointerUp().connect(function() {
                a._codeEntered ||
                    a._codeText.set_text("");
                a._buttonDown[11] = !0;
                a._buttons[11].texture = a._ctx.pack.getTexture("codePanel/codebutton0012")
            });
            this._closeBtn = new i(this._ctx.pack.getTexture("buttons/BtnClose"));
            this.owner.addChild((new g).add(this._closeBtn));
            this._closeBtn.setXY(280 * this._ctx.gameMagnify, 70 * this._ctx.gameMagnify);
            this._closeBtn.centerAnchor();
            this._closeBtn.get_pointerDown().connect(function() {
                a._ctx.pack.getSound("sounds/button_click").play();
                a._ctx.currentLevel.closeCodePanel()
            });
            b.get_pointerDown().connect(function() {
                a._ctx.currentLevel.closeCodePanel()
            });
            b = this.owner._compMap.Sprite_0;
            b.setScale(this._ctx.gameScale);
            b.setXY(0, this._ctx.currentLevel.ySdvigCoef)
        },
        onUpdate: function(a) {
            4 == this._codeText._text.length && !this._codeEntered && (this._codeEntered = !0, this._passcode == this._codeText._text ? (this._ctx.pack.getSound("sounds/code_open").play(), this._codeText.set_text("open")) : (this._ctx.pack.getSound("sounds/code_error").play(), this._codeText.set_text("  err"), this._codeText.setXY(this._codeText.x._value - 3 * this._ctx.gameMagnify, this._codeText.y._value)));
            this._codeEntered && (this._timer += a, this._timer >= this._timerStop && ("open" == this._codeText._text && (this._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock._compMap.Codepad_10.CodePadDone(), this._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock._compMap.Codepad_10.removeBallon(), this._ctx.currentLevel._charactersLayer.removeChild(this._ctx.currentLevel.player._compMap.BobHero_34.currentBalloon)), this._ctx.currentLevel.closeCodePanel()))
        },
        __class__: Ib
    });
    var pc = function(a) {
        this._timerStop =
            2.8;
        this._timer = 0;
        this._currentSprite = 1;
        h.call(this);
        this._ctx = a
    };
    f["screens.Comics"] = pc;
    pc.__name__ = ["screens", "Comics"];
    pc.__super__ = h;
    pc.prototype = t(h.prototype, {
        get_name: function() {
            return "Comics_30"
        },
        onAdded: function() {
            var a = this;
            this.owner.add(new q);
            var b = new Za(2105376, 3 * l._platform.getStage().get_width(), 3 * l._platform.getStage().get_height());
            this.owner.addChild((new g).add(b));
            b.centerAnchor();
            b.setXY(0.5 * l._platform.getStage().get_width(), 0.5 * l._platform.getStage().get_height());
            this.picture1 =
                new i(this._ctx.pack.getTexture("comics/picture1"));
            this.owner.addChild((new g).add(this.picture1));
            this.picture1.setXY(50, 20);
            this.picture3 = new i(this._ctx.pack.getTexture("comics/picture3"));
            this.owner.addChild((new g).add(this.picture3));
            this.picture3.setXY(330, 20);
            this.picture4 = new i(this._ctx.pack.getTexture("comics/picture4"));
            this.owner.addChild((new g).add(this.picture4));
            this.picture4.setXY(50, 330);
            this.picture5 = new i(this._ctx.pack.getTexture("comics/picture5"));
            this.owner.addChild((new g).add(this.picture5));
            this.picture5.setXY(330, 330);
            this.picture6 = new i(this._ctx.pack.getTexture("comics/picture6"));
            this.owner.addChild((new g).add(this.picture6));
            this.picture6.setXY(50, 640);
            this.picture8 = new i(this._ctx.pack.getTexture("comics/picture8"));
            this.owner.addChild((new g).add(this.picture8));
            this.picture8.setXY(330, 640);
            this.picture2 = new i(this._ctx.pack.getTexture("comics/picture2"));
            this.owner.addChild((new g).add(this.picture2));
            this.picture2.setXY(270, 20);
            this.picture7 = new i(this._ctx.pack.getTexture("comics/picture7"));
            this.owner.addChild((new g).add(this.picture7));
            this.picture7.setXY(228, 640);
            this.picture1.alpha.set__(0);
            this.picture2.alpha.set__(0);
            this.picture3.alpha.set__(0);
            this.picture4.alpha.set__(0);
            this.picture5.alpha.set__(0);
            this.picture6.alpha.set__(0);
            this.picture7.alpha.set__(0);
            this.picture8.alpha.set__(0);
            b = new i(this._ctx.pack.getTexture("backTap"));
            this.owner.addChild((new g).add(b));
            b.setXY(0, 0);
            b.get_pointerDown().connect(function() {
                a._timer = a._timerStop + 1
            });
            b = this.owner._compMap.Sprite_0;
            b.setScale(this._ctx.gameScale);
            b.setXY(this._ctx.centerCoefX, this._ctx.centerCoefY);
            this._currentSprite = 1;
            this._timer = this._timerStop
        },
        onUpdate: function(a) {
            this._timer += a;
            this._timer > this._timerStop && (this._timer = 0, 1 == this._currentSprite && (this.picture1.alpha.animate(0, 1, 0.4, n.backIn), this._comixPlayback = this._ctx.pack.getSound("sounds/comix_start1").play()), 2 == this._currentSprite && (this.picture2.alpha.animate(0, 1, 0.4, n.backIn), this._comixPlayback.dispose(), this._comixPlayback = this._ctx.pack.getSound("sounds/comix_start2_1").play()),
                3 == this._currentSprite && (this.picture3.alpha.animate(0, 1, 0.4, n.backIn), this._comixPlayback.dispose(), this._comixPlayback = this._ctx.pack.getSound("sounds/comix_start2").play()), 4 == this._currentSprite && (this.picture4.alpha.animate(0, 1, 0.4, n.backIn), this._comixPlayback.dispose(), this._comixPlayback = this._ctx.pack.getSound("sounds/comix_start3").play()), 5 == this._currentSprite && (this.picture5.alpha.animate(0, 1, 0.4, n.backIn), this._comixPlayback.dispose(), this._comixPlayback = this._ctx.pack.getSound("sounds/comix_start4").play()),
                6 == this._currentSprite && (this.picture6.alpha.animate(0, 1, 0.4, n.backIn), this._comixPlayback.dispose(), this._comixPlayback = this._ctx.pack.getSound("sounds/comix_start5").play()), 7 == this._currentSprite && (this.picture7.alpha.animate(0, 1, 0.4, n.backIn), this._comixPlayback.dispose(), this._comixPlayback = this._ctx.pack.getSound("sounds/comix_start5_1").play()), 8 == this._currentSprite && (this.picture8.alpha.animate(0, 1, 0.4, n.backIn), this._comixPlayback.dispose(), this._comixPlayback = this._ctx.pack.getSound("sounds/comix_start6").play()),
                this._currentSprite += 1, 10 == this._currentSprite && (this._comixPlayback.dispose(), this._ctx.currentLevelNumber = 1, this._ctx.stopComixMusic(), this._ctx.enterPlayingScene(), this._ctx.isLevelPointSaved = !1))
        },
        __class__: pc
    });
    var fd = function() {};
    f["screens.CompletedMenu"] = fd;
    fd.__name__ = ["screens", "CompletedMenu"];
    fd.create = function(a, b, c) {
        var d;
        a.totalBatteries = a.currentLevel.batery._value;
        var e = new g;
        e.add(new ja(!1));
        a.playMenuMusic();
        b = new q;
        e.add(b);
        b = new i(a.pack.getTexture("screens/BackgrndWellDone"));
        b.centerAnchor();
        b.setXY(0.5 * l._platform.getStage().get_width(), 0.5 * l._platform.getStage().get_height());
        a.isSquare ? b.setScale(a.gameScaleSquare) : b.setScale(a.gameScale);
        d = new i(a.pack.getTexture("screens/WellDone"));
        d.setXY(0.5 * l._platform.getStage().get_width(), 0.2 * l._platform.getStage().get_height());
        d.centerAnchor();
        d.setScale(a.gameScale);
        var f = new i(a.pack.getTexture("screens/WinStar"));
        f.setXY(0.5 * l._platform.getStage().get_width(), 0.65 * l._platform.getStage().get_height());
        f.centerAnchor();
        var h = new i(a.pack.getTexture("screens/WinStar"));
        h.setXY(f.x._value - 1.2 * f.getNaturalWidth() * a.gameScale, 0.65 * l._platform.getStage().get_height());
        h.centerAnchor();
        var k = new i(a.pack.getTexture("screens/WinStar"));
        k.setXY(f.x._value + 1.2 * f.getNaturalWidth() * a.gameScale, 0.65 * l._platform.getStage().get_height());
        k.centerAnchor();
        var p = new i(a.pack.getTexture("screens/WinStarFull"));
        p.setXY(f.x._value - 1.2 * f.getNaturalWidth() * a.gameScale, 0.65 * l._platform.getStage().get_height());
        p.setScale(0);
        p.centerAnchor();
        var o = new i(a.pack.getTexture("screens/WinStarFull"));
        o.setXY(0.5 * l._platform.getStage().get_width(), 0.65 * l._platform.getStage().get_height());
        o.setScale(0);
        o.centerAnchor();
        var r = new i(a.pack.getTexture("screens/WinStarFull"));
        r.setXY(f.x._value + 1.2 * f.getNaturalWidth() * a.gameScale, 0.65 * l._platform.getStage().get_height());
        r.setScale(0);
        r.centerAnchor();
        h.setScale(a.gameScale);
        f.setScale(a.gameScale);
        k.setScale(a.gameScale);
        e.addChild((new g).add(b));
        e.addChild((new g).add(d));
        e.addChild((new g).add(h));
        e.addChild((new g).add(f));
        e.addChild((new g).add(k));
        e.addChild((new g).add(p));
        e.addChild((new g).add(o));
        e.addChild((new g).add(r));
        1 <= a.starsForLevelCompletedScreen && (p.scaleX.animate(p.scaleX._value, 1.5 * h.scaleX._value, 0.3, n.linear), p.scaleY.animate(p.scaleY._value, 1.5 * h.scaleX._value, 0.3, n.linear), p.rotation.animate(0, 360, 0.3, n.linear));
        p.scaleX.get_changed().connect(function(b) {
            b >= 1.5 * h.scaleX._value && (p.scaleX.animate(p.scaleX._value, h.scaleX._value, 0.3, n.linear), p.scaleY.animate(p.scaleY._value,
                h.scaleX._value, 0.3, n.linear), a.pack.getSound("sounds/star1").play(), 2 <= a.starsForLevelCompletedScreen && (o.scaleX.animate(o.scaleX._value, 1.5 * h.scaleX._value, 0.3, n.linear), o.scaleY.animate(o.scaleY._value, 1.5 * h.scaleX._value, 0.3, n.linear), o.rotation.animate(0, 360, 0.3, n.linear)))
        });
        o.scaleX.get_changed().connect(function(b) {
            b >= 1.5 * h.scaleX._value && (o.scaleX.animate(o.scaleX._value, h.scaleX._value, 0.3, n.linear), o.scaleY.animate(o.scaleY._value, h.scaleX._value, 0.3, n.linear), a.pack.getSound("sounds/star2").play(),
                3 <= a.starsForLevelCompletedScreen && (r.scaleX.animate(r.scaleX._value, 1.5 * h.scaleX._value, 0.3, n.linear), r.scaleY.animate(r.scaleY._value, 1.5 * h.scaleX._value, 0.3, n.linear), r.rotation.animate(0, 360, 0.3, n.linear)))
        });
        r.scaleX.get_changed().connect(function(b) {
            b >= 1.5 * h.scaleX._value && (r.scaleX.animate(r.scaleX._value, h.scaleX._value, 0.3, n.linear), r.scaleY.animate(r.scaleY._value, h.scaleX._value, 0.3, n.linear), a.pack.getSound("sounds/star3").play())
        });
        b = new g;
        d = -180 * a.gameScale;
        for (f = 0; f < c.length;) {
            var s =
                c[f++],
                k = [c[f++]],
                s = new i(a.pack.getTexture("buttons/" + s));
            s.setXY(d, 0.85 * l._platform.getStage().get_height());
            s.setScale(a.gameScale);
            s.centerAnchor();
            s.get_pointerDown().connect(function(b) {
                return function() {
                    a.pack.getSound("sounds/button_click").play();
                    b[0]()
                }
            }(k));
            d += 180 * a.gameScale;
            b.addChild((new g).add(s))
        }
        q.getBounds(b);
        var t = new q;
        t.centerAnchor();
        t.x.animate(l._platform.getStage().get_width(), 0.5 * l._platform.getStage().get_width(), 0.5, n.backOut);
        e.addChild(b.add(t));
        !1 == a.getTimerState() &&
            a.startTimer();
        if (!a.isRankShow && (2 == a.currentLevelNumber || 4 == a.currentLevelNumber || 6 == a.currentLevelNumber || 8 == a.currentLevelNumber || 9 == a.currentLevelNumber)) {
            t.set_visible(!1);
            var u = new g,
                c = new q;
            u.add(c);
            e.addChild(u);
            b = new i(a.pack.getTexture("rankingScreen/freeVersionShort"));
            d = (new g).add(b);
            b.setXY(320, 480);
            b.centerAnchor();
            u.addChild(d);
            b = new i(a.pack.getTexture("rankingScreen/googleBtn"));
            d = (new g).add(b);
            b.setXY(320, 805);
            b.centerAnchor();
            u.addChild(d);
            c.setScale(a.gameScale);
            c.setXY(a.centerCoefX,
                a.centerCoefY);
            b.get_pointerDown().connect(function() {
                a.pack.getSound("sounds/button_click").play();
                t.set_visible(!0);
                e.removeChild(u);
                u.disposeChildren();
                u.dispose();
                // window.open("https://play.google.com/store/apps/details?id=air.com.flazm.bobtherobber3")
            })
        }
        return e
    };
    var ub = function() {};
    f["screens.GameScene"] = ub;
    ub.__name__ = ["screens", "GameScene"];
    ub.create = function(a) {
        var b = new g,
            c = new i(a.pack.getTexture("backLevels"));
        c.setXY(0, 0);
        b.addChild((new g).add(c));
        a.isSquare ? c.setScale(a.gameScaleSquare) :
            c.setScale(a.gameScale);
        c = new i(a.pack.getTexture("buttons/TimeSign"));
        c.setScale(a.gameScale);
        c.setXY(20 * a.gameScale + a.centerCoefX, 30 * a.gameScale + a.centerCoefY);
        b.addChild((new g).add(c));
        var d = new na(a.interfaceFont);
        d.setXY(90 * a.gameScale + a.centerCoefX, 46 * a.gameScale + a.centerCoefY);
        d.setScale(a.gameScale);
        d.set_text("0");
        b.addChild((new g).add(d));
        c = new i(a.pack.getTexture("buttons/BaterySign"));
        c.setScale(a.gameScale);
        c.setXY(180 * a.gameScale + a.centerCoefX, 10 * a.gameScale + a.centerCoefY);
        b.addChild((new g).add(c));
        var e = new na(a.interfaceFont);
        e.setXY(240 * a.gameScale + a.centerCoefX, 42 * a.gameScale + a.centerCoefY);
        e.setScale(a.gameScale);
        e.set_text("0");
        e.set_text("0");
        b.addChild((new g).add(e));
        null != a.currentLevel && a.currentLevel.clearLevel();
        var f = new yb(a);
        a.currentLevel = f;
        b.add(f);
        c = new i(a.pack.getTexture("RightBackLine"));
        b.addChild((new g).add(c));
        c.setScale(a.gameScale);
        c.setXY((0.5 * f._backgroundPicture.texture.get_width() + 1) * a.currentScaleCoef + a.centerCoefX, 0);
        f.pauseBtn.get_pointerDown().connect(function() {
            a.currentLevel.paused.set__(!0);
            a.pack.getSound("sounds/button_click").play();
            a.showPrompt(a.messages.get("paused"), ["Play",
                function() {
                    a.currentLevel.paused.set__(!1);
                    a.director.unwindToScene(b)
                }, "Home",
                function() {
                    f.stopMusic();
                    a.isLevelPointSaved = !1;
                    a.resetSaveArrays();
                    a.director.unwindToScene(b);
                    a.enterLevelMap()
                }
            ])
        });
        f.restartBtn.get_pointerDown().connect(function() {
            a.levelTry += 1;
            a.pack.getSound("sounds/button_click").play();
            f.stopMusic();
            a.currentLevel.restart.set__(!0);
            a.director.unwindToScene(b);
            a.restartScene()
        });
        f.watch.watch(function(a) {
            d.set_text(null ==
                a ? "null" : "" + a)
        });
        f.score.watch(function(c) {
            0 >= c && (f.stopMusic(), a.showGameover(a.messages.get("game_over"), ["Replay",
                function() {
                    a.director.unwindToScene(b);
                    a.restartScene()
                }, "Home",
                function() {
                    a.isLevelPointSaved = !1;
                    a.resetSaveArrays();
                    a.director.unwindToScene(b);
                    a.enterLevelMap()
                }
            ]))
        });
        f.batery.watch(function(b) {
            10 > b ? e.setXY(260 * a.gameScale + a.centerCoefX, 42 * a.gameScale + a.centerCoefY) : e.setXY(240 * a.gameScale + a.centerCoefX, 42 * a.gameScale + a.centerCoefY);
            e.set_text(null == b ? "null" : "" + b)
        });
        f.talert.watch(function() {});
        f.levelWin.watch(function(c) {
            c && (f.stopMusic(), a.showCompelted(a.messages.get("win"), ["Replay",
                function() {
                    a.isLevelPointSaved = !1;
                    a.resetSaveArrays();
                    a.director.unwindToScene(b);
                    a.restartScene()
                }, "PlayNext",
                function() {
                    a.director.unwindToScene(b);
                    a.isLevelPointSaved = !1;
                    a.resetSaveArrays();
                    2 > a.currentLevelNumber ? (a.currentLevelNumber += 1, a.enterPlayingScene()) : (a.director.unwindToScene(b), a.enterLevelMap())
                }, "Home",
                function() {
                    a.isLevelPointSaved = !1;
                    a.resetSaveArrays();
                    a.director.unwindToScene(b);
                    a.enterLevelMap()
                }
            ]))
        });
        return b
    };
    var ed = function() {};
    f["screens.GameoverMenu"] = ed;
    ed.__name__ = ["screens", "GameoverMenu"];
    ed.create = function(a, b, c) {
        b = new g;
        b.add(new ja(!1));
        var d = new q;
        b.add(d);
        d = new i(a.pack.getTexture("screens/BackgrndBusted"));
        d.centerAnchor();
        d.setXY(0.5 * l._platform.getStage().get_width(), 0.5 * l._platform.getStage().get_height());
        a.isSquare ? d.setScale(a.gameScaleSquare) : d.setScale(a.gameScale);
        var e = new i(a.pack.getTexture("screens/Busted"));
        e.setXY(0.5 * l._platform.getStage().get_width(), 0.2 * l._platform.getStage().get_height());
        e.centerAnchor();
        e.setScale(a.gameScale);
        b.addChild((new g).add(d));
        b.addChild((new g).add(e));
        for (var d = new g, f = e = 0; f < c.length;) {
            var h = c[f++],
                k = [c[f++]],
                h = new i(a.pack.getTexture("buttons/" + h));
            h.setXY(e, 0.8 * l._platform.getStage().get_height());
            h.setScale(a.gameScale);
            h.get_pointerDown().connect(function(b) {
                return function() {
                    a.pack.getSound("sounds/button_click").play();
                    b[0]()
                }
            }(k));
            e += 170 * a.gameScale;
            d.addChild((new g).add(h))
        }
        c = q.getBounds(d);
        e = new q;
        e.x.animate(l._platform.getStage().get_width(),
            0.5 * l._platform.getStage().get_width() - 0.5 * c.width, 0.5, n.backOut);
        b.addChild(d.add(e));
        !1 == a.getTimerState() && a.startTimer();
        return b
    };
    var Jb = function(a, b) {
        this.regenerate = !1;
        this.deltaY = 110;
        this.deltaX = 50;
        this._isMarkerMove = !1;
        this._markerPos = new wc;
        this._timerMarkerStop = 0.12;
        this._timerMarker = 0;
        this._timerStop = 0.8;
        this._timer = 0;
        this._targetReach = !1;
        h.call(this);
        this._ctx = a;
        this._objectName = b;
        5 == a.currentLevelNumber && (this.kolHodov = 4);
        6 == a.currentLevelNumber && (this.kolHodov = 5);
        7 == a.currentLevelNumber &&
            (this.kolHodov = 6);
        8 == a.currentLevelNumber && (this.kolHodov = 7);
        9 == a.currentLevelNumber && (this.kolHodov = 8);
        10 == a.currentLevelNumber && (this.kolHodov = 9)
    };
    f["screens.HackKitPanel"] = Jb;
    Jb.__name__ = ["screens", "HackKitPanel"];
    Jb.__super__ = h;
    Jb.prototype = t(h.prototype, {
        get_name: function() {
            return "HackKitPanel_25"
        },
        onAdded: function() {
            var a = this;
            this.owner.add(new q);
            var b = new i(this._ctx.pack.getTexture("backTap"));
            this.owner.addChild((new g).add(b));
            b.setXY(0, 0);
            var c = this._ctx.pack.getTexture("hackerPanel/panelBack"),
                c = new i(c);
            this.owner.addChild((new g).add(c));
            c.setXY(160 * this._ctx.gameMagnify, 260 * this._ctx.gameMagnify);
            c.centerAnchor();
            for (this.regenerate = !0; this.regenerate;) this.regenerate = !1, this.generateGame();
            for (c = 0; 11 > c;)
                for (var d = c++, e = 0; 14 > e;) {
                    var f = e++;
                    2 == this.grid[d][f] && this.setBlock(d, f);
                    3 == this.grid[d][f] && this.setTarget(d, f)
                }
            this.setMarker(this.markerX, this.markerY);
            this._closeBtn = new i(this._ctx.pack.getTexture("buttons/BtnClose"));
            this.owner.addChild((new g).add(this._closeBtn));
            this._closeBtn.setXY(280 *
                this._ctx.gameMagnify, 70 * this._ctx.gameMagnify);
            this._closeBtn.centerAnchor();
            this._closeBtn.get_pointerDown().connect(function() {
                a._ctx.pack.getSound("sounds/button_click").play();
                a._ctx.currentLevel.closeHackPanel()
            });
            c = new i(this._ctx.pack.getTexture("hackerPanel/tapZone"));
            this.owner.addChild((new g).add(c));
            c.setXY(160 * this._ctx.gameMagnify, 260 * this._ctx.gameMagnify);
            c.centerAnchor();
            c.get_pointerDown().connect(function(b) {
                var c = k["int"](l._platform.getStage().get_width() / a._ctx.gameScale - a._ctx.targetWidth),
                    d = k["int"](l._platform.getStage().get_height() / a._ctx.gameScale - a._ctx.targetHeight),
                    c = b.viewX / a._ctx.gameScale - c / 2,
                    b = b.viewY / a._ctx.gameScale - d / 2;
                c < a._markerPos.x && 50 > Math.abs(b - a._markerPos.y) && !a._isMarkerMove && (a._markerDirection = "left", a._isMarkerMove = !0, a._marker.rotation.set__(-90));
                c > a._markerPos.x && 50 > Math.abs(b - a._markerPos.y) && !a._isMarkerMove && (a._markerDirection = "right", a._isMarkerMove = !0, a._marker.rotation.set__(90));
                b < a._markerPos.y && 50 > Math.abs(c - a._markerPos.x) && !a._isMarkerMove &&
                    (a._markerDirection = "up", a._isMarkerMove = !0, a._marker.rotation.set__(0));
                b > a._markerPos.y && 50 > Math.abs(c - a._markerPos.x) && !a._isMarkerMove && (a._markerDirection = "down", a._isMarkerMove = !0, a._marker.rotation.set__(180))
            });
            b.get_pointerDown().connect(function() {
                a._ctx.currentLevel.closeHackPanel()
            });
            this._leftBtn = new i(this._ctx.pack.getTexture("wiresPanel/BtnArrow"));
            this.owner.addChild((new g).add(this._leftBtn));
            this._leftBtn.setXY(40 * this._ctx.gameMagnify, 240 * this._ctx.gameMagnify);
            this._leftBtn.centerAnchor();
            this._leftBtn.get_pointerDown().connect(function() {
                a._isMarkerMove || (a._markerDirection = "left", a._isMarkerMove = !0, a._marker.rotation.set__(-90))
            });
            this._rightBtn = new i(this._ctx.pack.getTexture("wiresPanel/BtnArrow"));
            this.owner.addChild((new g).add(this._rightBtn));
            this._rightBtn.setXY(280 * this._ctx.gameMagnify, 240 * this._ctx.gameMagnify);
            this._rightBtn.centerAnchor();
            this._rightBtn.scaleX.set__(-1 * Math.abs(this._rightBtn.scaleX._value));
            this._rightBtn.get_pointerDown().connect(function() {
                a._isMarkerMove ||
                    (a._markerDirection = "right", a._isMarkerMove = !0, a._marker.rotation.set__(90))
            });
            this._upBtn = new i(this._ctx.pack.getTexture("wiresPanel/BtnArrow2"));
            this.owner.addChild((new g).add(this._upBtn));
            this._upBtn.setXY(160 * this._ctx.gameMagnify, 100 * this._ctx.gameMagnify);
            this._upBtn.centerAnchor();
            this._upBtn.get_pointerDown().connect(function() {
                a._isMarkerMove || (a._markerDirection = "up", a._isMarkerMove = !0, a._marker.rotation.set__(0))
            });
            this._downBtn = new i(this._ctx.pack.getTexture("monitor/BtnArrow2"));
            this.owner.addChild((new g).add(this._downBtn));
            this._downBtn.setXY(160 * this._ctx.gameMagnify, 420 * this._ctx.gameMagnify);
            this._downBtn.centerAnchor();
            this._downBtn.get_pointerDown().connect(function() {
                a._isMarkerMove || (a._markerDirection = "down", a._isMarkerMove = !0, a._marker.rotation.set__(180))
            });
            b = this.owner._compMap.Sprite_0;
            b.setScale(this._ctx.gameScale);
            b.setXY(0, this._ctx.currentLevel.ySdvigCoef)
        },
        onUpdate: function(a) {
            if (this._isMarkerMove) {
                this._timerMarker += a;
                var b = this._markerAlpha.alpha;
                b.set__(b._value - 0.3);
                this._timerMarker >= this._timerMarkerStop && (this._timerMarker = 0, this.MoveMarker())
            }
            this._targetReach && (this._timer += a, this._timer >= this._timerStop && (this._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock._compMap.Stair_13.removeBallon(), this._ctx.currentLevel._charactersLayer.removeChild(this._ctx.currentLevel.player._compMap.BobHero_34.currentBalloon), this._ctx.currentLevel.FindAndOpenDoor(this._objectName), this._ctx.currentLevel.closeHackPanel()))
        },
        MoveMarker: function() {
            this._markerAlpha.setXY(this._markerPos.x,
                this._markerPos.y);
            this._markerAlpha.alpha.set__(1);
            this._markerAlpha.rotation.set__(this._marker.rotation._value);
            "left" == this._markerDirection && (this.checkBlocks(this._markerPos.x - 20 * this._ctx.gameMagnify, this._markerPos.y) ? this._isMarkerMove = !1 : (this._markerPos.x -= 20 * this._ctx.gameMagnify, this._ctx.pack.getSound("sounds/computer_cursor").play()));
            "right" == this._markerDirection && (this.checkBlocks(this._markerPos.x + 20 * this._ctx.gameMagnify, this._markerPos.y) ? this._isMarkerMove = !1 : (this._markerPos.x +=
                20 * this._ctx.gameMagnify, this._ctx.pack.getSound("sounds/computer_cursor").play()));
            "up" == this._markerDirection && (this.checkBlocks(this._markerPos.x, this._markerPos.y - 20 * this._ctx.gameMagnify) ? this._isMarkerMove = !1 : (this._markerPos.y -= 20 * this._ctx.gameMagnify, this._ctx.pack.getSound("sounds/computer_cursor").play()));
            "down" == this._markerDirection && (this.checkBlocks(this._markerPos.x, this._markerPos.y + 20 * this._ctx.gameMagnify) ? this._isMarkerMove = !1 : (this._markerPos.y += 20 * this._ctx.gameMagnify, this._ctx.pack.getSound("sounds/computer_cursor").play()));
            this._marker.setXY(this._markerPos.x, this._markerPos.y);
            if (this._markerPos.x < (20 + this.deltaX) * this._ctx.gameMagnify || this._markerPos.x > (200 + this.deltaX) * this._ctx.gameMagnify || this._markerPos.y < (20 + this.deltaY) * this._ctx.gameMagnify || this._markerPos.y > (260 + this.deltaY) * this._ctx.gameMagnify) this._ctx.pack.getSound("sounds/hacker_toolkit_error").play(), this._ctx.currentLevel.closeHackPanel();
            1 > Math.abs(this._markerPos.x - this._target.x._value) && 1 > Math.abs(this._markerPos.y - this._target.y._value) && (this._isMarkerMove = !1, this._targetReach = !0, this._marker.set_visible(!1), this._markerAlpha.set_visible(!1), this._target.texture = this._ctx.pack.getTexture("hackerPanel/targetFull"), this._ctx.pack.getSound("sounds/hacker_toolkit_win").play())
        },
        checkBlocks: function(a, b) {
            for (var c = 0, d = this.blocks.length; c < d;) {
                if (1 > Math.abs(a - this.blocks[c].x._value) && 1 > Math.abs(b - this.blocks[c].y._value)) return !0;
                ++c
            }
            return !1
        },
        generateGame: function() {
            this.markersPos = [];
            this.grid = [];
            this.blocks = [];
            for (var a = 0; 11 > a;) {
                a++;
                this.gridLine = [];
                for (var b = 0; 14 > b;) b++, this.gridLine.push(0);
                this.grid.push(this.gridLine)
            }
            this.idx = Math.floor(7 * Math.random()) + 2;
            this.idy = Math.floor(10 * Math.random()) + 2;
            this.markerX = this.idx;
            this.markerY = this.idy;
            this.grid[this.idx][this.idy] = -1;
            this.markersPos.push(new Nb(this.idx, this.idy));
            this.direction = this.getDirection(Math.floor(8 * Math.random()));
            a = 1;
            for (b = this.kolHodov; a <= b;) this.newDirection(), this.changeDirection(), 4 == a && this.setChoice(), ++a;
            this.newTarget()
        },
        setChoice: function() {
            "left" == this.direction &&
                (this.steps = Math.floor(Math.random() * (this.idx - 1)) + 1, 0 == this.checkPlace(this.idx - this.steps, this.idy) ? this.grid[this.idx - this.steps][this.idy] = 2 : this.regenerate = !0);
            "right" == this.direction && (this.steps = Math.floor(Math.random() * (9 - this.idx)) + 1, 0 == this.checkPlace(this.idx + this.steps, this.idy) ? this.grid[this.idx + this.steps][this.idy] = 2 : this.regenerate = !0);
            "up" == this.direction && (this.steps = Math.floor(Math.random() * (this.idy - 1)) + 1, 0 == this.checkPlace(this.idx, this.idy - this.steps) ? this.grid[this.idx][this.idy -
                this.steps
            ] = 2 : this.regenerate = !0);
            "down" == this.direction && (this.steps = Math.floor(Math.random() * (12 - this.idy)) + 1, 0 == this.checkPlace(this.idx, this.idy + this.steps) ? this.grid[this.idx][this.idy + this.steps] = 2 : this.regenerate = !0)
        },
        changeDirection: function() {
            if ("left" == this.direction || "right" == this.direction) this.direction = 5 > 10 * Math.random() ? "up" : "down";
            else if ("up" == this.direction || "down" == this.direction) this.direction = 5 > 10 * Math.random() ? "left" : "right"
        },
        newTarget: function() {
            this.steps = Math.floor(7 * Math.random()) +
                2;
            "left" == this.direction && 2 > this.idx - this.steps && (this.direction = "right");
            "right" == this.direction && 9 < this.idx + this.steps && (this.direction = "left");
            "up" == this.direction && 2 > this.idy - this.steps && (this.direction = "down");
            "down" == this.direction && 12 < this.idy + this.steps && (this.direction = "up");
            this.isGo = !0;
            for (var a = 0; a < this.steps;) {
                this.moveGenMarker();
                if (!1 == this.isGo) break;
                ++a
            }
            2 > this.checkPlace(this.idx, this.idy) && -1 != this.checkPlace(this.idx, this.idy) && 3 < Math.abs(this.markerX - this.idx) && 3 < Math.abs(this.markerY -
                this.idy) ? this.grid[this.idx][this.idy] = 3 : this.regenerate = !0;
            var a = 1,
                b = this.markersPos.length,
                c, d, e;
            d = this.markersPos[0].x;
            e = this.markersPos[0].y;
            if (!this.regenerate)
                for (; a < b;) {
                    if (3 > a) {
                        if (this.markersPos[a].x == this.idx || this.markersPos[a].y == this.idy) this.regenerate = !0
                    } else if ((this.markersPos[a].x == this.idx || this.markersPos[a].y == this.idy) && (this.markersPos[a].x == this.markerX || this.markersPos[a].y == this.markerY)) this.regenerate = !0;
                    if (this.markersPos[a].x == this.idx) {
                        c = this.markersPos[a].x < this.idx ?
                            "right" : "left";
                        for (var g = 0, f = Math.abs(this.markersPos[a].x - this.idx); g < f;) {
                            d = "right" == c ? d + 1 : d - 1;
                            if (2 == this.checkPlace(d, this.idy)) {
                                this.regenerate = !0;
                                break
                            }++g
                        }
                    }
                    if (this.markersPos[a].y == this.idy) {
                        c = this.markersPos[a].y < this.idy ? "up" : "down";
                        d = 0;
                        for (g = Math.abs(this.markersPos[a].y - this.idy); d < g;) {
                            e = "up" == c ? e + 1 : e - 1;
                            if (2 == this.checkPlace(this.idx, e)) {
                                this.regenerate = !0;
                                break
                            }++d
                        }
                    }
                    if (this.regenerate) break;
                    ++a;
                    d = this.markersPos[a - 1].x;
                    e = this.markersPos[a - 1].y
                }
        },
        newDirection: function() {
            this.steps = Math.floor(5 *
                Math.random()) + 2;
            "left" == this.direction && 2 > this.idx - this.steps && (this.direction = "right");
            "right" == this.direction && 9 < this.idx + this.steps && (this.direction = "left");
            "up" == this.direction && 2 > this.idy - this.steps && (this.direction = "down");
            "down" == this.direction && 12 < this.idy + this.steps && (this.direction = "up");
            this.isGo = !0;
            for (var a = 0; a < this.steps;) {
                this.moveGenMarker();
                if (!1 == this.isGo) break;
                ++a
            }
            this.markersPos.push(new Nb(this.idx, this.idy));
            "left" == this.direction && (0 == this.checkPlace(this.idx - 1, this.idy) ?
                this.grid[this.idx - 1][this.idy] = 2 : this.regenerate = !0);
            "right" == this.direction && (0 == this.checkPlace(this.idx + 1, this.idy) ? this.grid[this.idx + 1][this.idy] = 2 : this.regenerate = !0);
            "up" == this.direction && (0 == this.checkPlace(this.idx, this.idy - 1) ? this.grid[this.idx][this.idy - 1] = 2 : this.regenerate = !0);
            "down" == this.direction && (0 == this.checkPlace(this.idx, this.idy + 1) ? this.grid[this.idx][this.idy + 1] = 2 : this.regenerate = !0)
        },
        moveGenMarker: function() {
            "left" == this.direction && (2 < this.idx - 1 && 2 > this.checkPlace(this.idx -
                1, this.idy) ? (this.idx -= 1, this.grid[this.idx][this.idy] = 1, this.setDot(this.idx, this.idy)) : this.isGo = !1);
            "right" == this.direction && (9 > this.idx + 1 && 2 > this.checkPlace(this.idx + 1, this.idy) ? (this.idx += 1, this.grid[this.idx][this.idy] = 1, this.setDot(this.idx, this.idy)) : this.isGo = !1);
            "up" == this.direction && (2 < this.idy - 1 && 2 > this.checkPlace(this.idx, this.idy - 1) ? (this.idy -= 1, this.grid[this.idx][this.idy] = 1, this.setDot(this.idx, this.idy)) : this.isGo = !1);
            "down" == this.direction && (12 > this.idy - 1 && 2 > this.checkPlace(this.idx,
                this.idy + 1) ? (this.idy += 1, this.grid[this.idx][this.idy] = 1, this.setDot(this.idx, this.idy)) : this.isGo = !1)
        },
        checkPlace: function(a, b) {
            return 0 == this.grid[a][b] ? 0 : 2 == this.grid[a][b] ? 2 : 1
        },
        setTarget: function(a, b) {
            this._target = new i(this._ctx.pack.getTexture("hackerPanel/target"));
            this.owner.addChild((new g).add(this._target));
            this.currentX = 20 * a + this.deltaX;
            this.currentY = 20 * b + this.deltaY;
            this._target.setXY(this.currentX * this._ctx.gameMagnify, this.currentY * this._ctx.gameMagnify);
            this._target.centerAnchor()
        },
        setMarker: function(a, b) {
            this._markerPos.x = (20 * a + this.deltaX) * this._ctx.gameMagnify;
            this._markerPos.y = (20 * b + this.deltaY) * this._ctx.gameMagnify;
            this._marker = new i(this._ctx.pack.getTexture("hackerPanel/marker"));
            this.owner.addChild((new g).add(this._marker));
            this._marker.setXY(this._markerPos.x, this._markerPos.y);
            this._marker.centerAnchor();
            this._markerAlpha = new i(this._ctx.pack.getTexture("hackerPanel/marker"));
            this.owner.addChild((new g).add(this._markerAlpha));
            this._markerAlpha.setXY(this._markerPos.x,
                this._markerPos.y);
            this._markerAlpha.centerAnchor()
        },
        setBlock: function(a, b) {
            var c = (20 * a + this.deltaX) * this._ctx.gameMagnify,
                d = (20 * b + this.deltaY) * this._ctx.gameMagnify;
            this._block1 = new i(this._ctx.pack.getTexture("hackerPanel/block"));
            this.owner.addChild((new g).add(this._block1));
            this._block1.setXY(c, d);
            this._block1.centerAnchor();
            this.blocks.push(this._block1)
        },
        setDot: function() {},
        getDirection: function(a) {
            return 0 == a || 4 == a ? "left" : 1 == a || 6 == a ? "right" : 2 == a || 7 == a ? "up" : "down"
        },
        __class__: Jb
    });
    var qc = function() {};
    f["screens.LevelButton"] = qc;
    qc.__name__ = ["screens", "LevelButton"];
    qc.create = function(a, b, c, d, e, f) {
        null == f && (f = 0);
        var h = new g;
        h.add(new ja(!1));
        var k;
        k = "close" == e ? new i(a.pack.getTexture("buttons/LevelBoxGray" + d)) : new i(a.pack.getTexture("buttons/LevelBox" + d));
        h.addChild((new g).add(k));
        k.setXY(b, c);
        k.centerAnchor();
        if ("close" != e) {
            e = new i(a.pack.getTexture("buttons/levelCircle"));
            h.addChild((new g).add(e));
            e.setXY(b, c - 40 * a.gameMagnify);
            e.centerAnchor();
            k = new i(a.pack.getTexture("buttons/LevelNumber" +
                d));
            h.addChild((new g).add(k));
            k.setXY(b, c - 40 * a.gameMagnify);
            k.centerAnchor();
            if (2 == a.levelsStatus[d - 1]) {
                var l = new i(a.pack.getTexture("buttons/LevelStar"));
                h.addChild((new g).add(l));
                l.setXY(b - 25 * a.gameMagnify, c - 5);
                l.centerAnchor();
                l = new i(a.pack.getTexture("buttons/LevelStar"));
                h.addChild((new g).add(l));
                l.setXY(b, c + 10);
                l.centerAnchor();
                l = new i(a.pack.getTexture("buttons/LevelStar"));
                h.addChild((new g).add(l));
                l.setXY(b + 25 * a.gameMagnify, c - 5);
                l.centerAnchor()
            }
            e.get_pointerUp().connect(function() {
                a.currentLevelNumber =
                    d;
                a.batteriesInLevel = 0;
                a.levelTimer = 0;
                a.pack.getSound("sounds/button_click").play();
                a.enterPlayingScene();
                a.isLevelPointSaved = !1
            });
            k.get_pointerUp().connect(function() {
                a.currentLevelNumber = d;
                a.batteriesInLevel = 0;
                a.levelTimer = 0;
                a.pack.getSound("sounds/button_click").play();
                a.enterPlayingScene();
                a.isLevelPointSaved = !1
            })
        }
        1 <= f && (e = new i(a.pack.getTexture("buttons/LevelStarFull")), h.addChild((new g).add(e)), e.setXY(b - 25 * a.gameMagnify, c - 5), e.centerAnchor());
        2 <= f && (e = new i(a.pack.getTexture("buttons/LevelStarFull")),
            h.addChild((new g).add(e)), e.setXY(b, c + 10), e.centerAnchor());
        3 <= f && (f = new i(a.pack.getTexture("buttons/LevelStarFull")), h.addChild((new g).add(f)), f.setXY(b + 25 * a.gameMagnify, c - 5), f.centerAnchor());
        return h
    };
    var cd = function() {};
    f["screens.LevelMap"] = cd;
    cd.__name__ = ["screens", "LevelMap"];
    cd.create = function(a) {
        var b = new g,
            c = new q;
        b.add(c);
        var d = new g,
            e = new q;
        d.add(e);
        var f = new i(a.pack.getTexture("buttons/LevelMapBack"));
        b.addChild((new g).add(f));
        f.setXY(0, 0);
        a.currentLevelPart = 1;
        a.currentLeveLSavePart =
            1;
        b.addChild(d);
        f = new i(a.pack.getTexture("buttons/MapBattery"));
        f.setXY(160 * a.gameMagnify, 40 * a.gameMagnify);
        f.centerAnchor();
        b.addChild((new g).add(f));
        f = new na(a.interfaceFont);
        f.setXY(170 * a.gameMagnify, 41 * a.gameMagnify);
        f.set_text(null == a.totalBatteries ? "null" : "" + a.totalBatteries);
        b.addChild((new g).add(f));
        for (var f = 400, h = 160 * a.gameMagnify, k = 1, n, o = 1; 5 > o;) o++, n = 0 == a.levelsStatus[k - 1] ? qc.create(a, f, h, k, "close") : 2 < k ? qc.create(a, f, h, k, "close") : qc.create(a, f, h, k, "open", a.levelStars[k - 1]), a.currentLevelNumber ==
            k && 1 != k && e.setXY(0, -h + 0.5 * a.targetHeight), d.addChild(n), k++, f = 400 > f ? 400 : 264, h += 227;
        d = new i(a.pack.getTexture("buttons/Home"));
        d.setXY(100, 0.8 * l._platform.getStage().get_height() / a.gameScale);
        d.centerAnchor();
        d.get_pointerDown().connect(function() {
            a.pack.getSound("sounds/button_click").play();
            a.enterHomeScene()
        });
        b.addChild((new g).add(d));
        c.get_pointerDown().connect(function() {});
        c.get_pointerUp().connect(function() {});
        c = b._compMap.Sprite_0;
        a.isSquare ? c.setScale(a.gameScaleSquare) : c.setScale(a.gameScale);
        c.setXY(0, 0);
        !1 == a.getTimerState() && a.startTimer();
        return b
    };
    var bd = function() {};
    f["screens.Mainmenu"] = bd;
    bd.__name__ = ["screens", "Mainmenu"];
    bd.create = function(a) {
        var b = 0,
            c, d, e, f, h, k = new g,
            p = new q;
        k.add(p);
        p = new i(a.pack.getTexture("MainScreenBg"));
        k.addChild((new g).add(p));
        p.setXY(0, 0);
        a.isSquare ? p.setScale(a.gameScaleSquare) : p.setScale(a.gameScale);
        p = new lb(a);
        k.addChild((new g).add(p));
        p = new i(a.pack.getTexture("buttons/PlayBig"));
        p.centerAnchor().setXY(0.5 * l._platform.getStage().get_width(),
            0.5 * l._platform.getStage().get_height());
        p.setScale(a.gameScale);
        k.addChild((new g).add(p));
        var o = new Lb(a);
        k.addChild((new g).add(o));
        a.playMenuMusic();
        f = 0;
        d = e = !1;
        c = Math.floor(100 * Math.random() + 200);
        h = 0;
        var r = new oa;
        r.run(new pa(new qa([new ra(0.03), new sa(function() {
            b += 1;
            b >= c && (b = 0, c = Math.floor(100 * Math.random() + 200), e = !0, o._spriteBob.rotation.set__(0), o._spriteBob.rotation.animate(o._spriteBob.rotation._value, o._spriteBob.rotation._value + 5, 0.1, n.circIn));
            if (e && (f += 0.03, 0.1 <= f && (f = 0, e = !1, d = !0, 2 >
                h && o._spriteBob.rotation.animate(o._spriteBob.rotation._value, o._spriteBob.rotation._value - 10, 0.2, n.bounceOut), 0 == h))) {
                var i = new Sa(a, 0.55 * l._platform.getStage().get_width(), 0.2 * l._platform.getStage().get_height());
                k.addChild((new g).add(i))
            }
            d && (f += 0.03, 0.2 <= f && (f = 0, d = !1, o._spriteBob.rotation.set__(0), h += 1, 3 > h ? (e = !0, i = new Sa(a, 0.55 * l._platform.getStage().get_width(), 0.2 * l._platform.getStage().get_height()), k.addChild((new g).add(i)), 2 > h && (o._spriteBob.rotation.set__(0), o._spriteBob.rotation.animate(o._spriteBob.rotation._value,
                o._spriteBob.rotation._value + 5, 0.1, n.circIn))) : h = 0))
        })])));
        k.add(r);
        p.get_pointerDown().connect(function() {
            a.pack.getSound("sounds/button_click").play();
            a.stopMenuMusic();
            k.disposeChildren();
            if (1 == a.levelsStatus[0]) {
                a.playComixMusic();
                var b = new pc(a);
                k.addChild((new g).add(b));
                k.remove(r)
            } else a.enterLevelMap()
        });
        return k
    };
    var hd = function() {};
    f["screens.NewGadget"] = hd;
    hd.__name__ = ["screens", "NewGadget"];
    hd.create = function(a, b) {
        var c = new g;
        c.add(new ja(!1));
        var d = new q;
        c.add(d);
        d = new i(a.pack.getTexture("screens/BackgrndGadget"));
        d.centerAnchor();
        d.setXY(0.5 * l._platform.getStage().get_width(), 0.4 * l._platform.getStage().get_height());
        a.isSquare ? d.setScale(a.gameScaleSquare) : d.setScale(a.gameScale);
        var e = new i(a.pack.getTexture("screens/GadgetPlace"));
        e.setXY(0.5 * l._platform.getStage().get_width(), 0.7 * l._platform.getStage().get_height());
        e.centerAnchor();
        e.setScale(a.gameScale);
        var f = new i(a.pack.getTexture("screens/NewGadget"));
        f.setXY(0.5 * -l._platform.getStage().get_width(), 0.3 * l._platform.getStage().get_height());
        f.centerAnchor();
        f.x.animate(f.x._value, 0.5 * l._platform.getStage().get_width(), 0.3, n.linear);
        f.setScale(a.gameScale);
        var h;
        "lockpick" == b && (a.haveLockpick = !0);
        "nippers" == b && (a.haveNippers = !0);
        "hackerkit" == b && (a.haveHackerKit = !0);
        "shocker" == b && (a.haveShocker = !0);
        "setbox" == b && (a.haveBox = !0);
        h = new i(a.pack.getTexture("screens/" + b));
        h.setXY(0.5 * -l._platform.getStage().get_width(), 0.7 * l._platform.getStage().get_height());
        h.centerAnchor();
        h.x.animate(h.x._value, 0.5 * l._platform.getStage().get_width(), 0.3, n.linear);
        h.setScale(a.gameScale);
        c.addChild((new g).add(d));
        c.addChild((new g).add(e));
        c.addChild((new g).add(f));
        c.addChild((new g).add(h));
        c._compMap.Sprite_0.setXY(-30, 0);
        return c
    };
    var gd = function() {};
    f["screens.Note"] = gd;
    gd.__name__ = ["screens", "Note"];
    gd.create = function(a, b, c) {
        var d = new g;
        d.add(new ja(!1));
        var e = new q;
        d.add(e);
        e = new i(a.pack.getTexture("backTap"));
        d.addChild((new g).add(e));
        e.setXY(0, 0);
        var f = a.pack.getTexture("note"),
            f = new i(f);
        d.addChild((new g).add(f));
        f.setXY(50 * a.gameMagnify, 100 * a.gameMagnify);
        b = new na(a.messagesFont,
            b + c);
        b.setWrapWidth(a.targetWidth).setAlign(W.Center);
        b.x.set__(20 * a.gameMagnify);
        b.y.set__(160 * a.gameMagnify);
        d.addChild((new g).add(b));
        var c = new g,
            h = q.getBounds(c),
            k = new q;
        k.x.animate(a.targetWidth, 0.5 * a.targetWidth - h.width / 2, 0.5, n.backOut);
        k.y.set__(b.y._value + b.getNaturalHeight() + 50 * a.gameMagnify);
        d.addChild(c.add(k));
        b.get_pointerDown().connect(function() {
            a.currentLevel.closeMessage()
        });
        f.get_pointerDown().connect(function() {
            a.currentLevel.closeMessage()
        });
        e.get_pointerDown().connect(function() {
            a.currentLevel.closeMessage()
        });
        e = d._compMap.Sprite_0;
        e.setScale(a.gameScale);
        e.setXY(0, a.currentLevel.ySdvigCoef);
        return d
    };
    var Kb = function(a, b, c, d) {
        this._leftKey = this._rightKey = !1;
        this._timerStop = 0.1;
        this._timer = 0;
        this._signHoleX = 1;
        this._arcOpen = this._isOpenFail = !1;
        this._padLocked = !0;
        this._tickNumber = 0;
        h.call(this);
        this._ctx = a;
        this._doorName = b;
        this._holeX = 3 * this._ctx.gameMagnify;
        this._difLevel = c;
        this._padlockId = d
    };
    f["screens.PadlockFull"] = Kb;
    Kb.__name__ = ["screens", "PadlockFull"];
    Kb.__super__ = h;
    Kb.prototype = t(h.prototype, {
        get_name: function() {
            return "PadlockFull_20"
        },
        onAdded: function() {
            var a = this;
            this.owner.add(new q);
            var b = new i(this._ctx.pack.getTexture("backTap"));
            this.owner.addChild((new g).add(b));
            b.setXY(0, 0);
            var c = this._ctx.pack.getTexture("padlockElements/lockarc");
            this._lockarc = new i(c);
            this.owner.addChild((new g).add(this._lockarc));
            this._lockarc.setXY(160 * this._ctx.gameMagnify, 110 * this._ctx.gameMagnify);
            this._lockarc.centerAnchor();
            var c = this._ctx.pack.getTexture("padlockElements/padlockbase"),
                d = new i(c);
            this.owner.addChild((new g).add(d));
            d.setXY(160 *
                this._ctx.gameMagnify, 260 * this._ctx.gameMagnify);
            d.centerAnchor();
            1 == this._difLevel && (c = this._ctx.pack.getTexture("padlockElements/lockhole"), this._hole = new i(c), this.owner.addChild((new g).add(this._hole)), this._hole.setXY(120 * this._ctx.gameMagnify, 275 * this._ctx.gameMagnify), this._hole.centerAnchor());
            2 == this._difLevel && (c = new i(this._ctx.pack.getTexture("padlockElements/backpack")), this.owner.addChild((new g).add(c)), c.setXY(160 * this._ctx.gameMagnify, 250 * this._ctx.gameMagnify), c.centerAnchor(),
                c = this._ctx.pack.getTexture("padlockElements/lockhole2"), this._hole = new i(c), this.owner.addChild((new g).add(this._hole)), this._hole.setXY(120 * this._ctx.gameMagnify, 294 * this._ctx.gameMagnify), this._hole.centerAnchor(), c = this._ctx.pack.getTexture("padlockElements/lockhole2"), this._hole2 = new i(c), this.owner.addChild((new g).add(this._hole2)), this._hole2.setXY(240 * this._ctx.gameMagnify, 250 * this._ctx.gameMagnify), this._hole2.centerAnchor());
            c = this._ctx.pack.getTexture("padlockElements/lockpick");
            this._lockpick =
                new i(c);
            this.owner.addChild((new g).add(this._lockpick));
            this._lockpick.setXY(160 * this._ctx.gameMagnify, 400 * this._ctx.gameMagnify);
            this._lockpick.centerAnchor();
            this._lockspring = new i(this._ctx.pack.getTexture("padlockElements/lockclick0001"));
            this.owner.addChild((new g).add(this._lockspring));
            this._lockspring.setXY(160 * this._ctx.gameMagnify, 194 * this._ctx.gameMagnify);
            this._lockspring.centerAnchor();
            this._closeBtn = new i(this._ctx.pack.getTexture("buttons/BtnClose"));
            this.owner.addChild((new g).add(this._closeBtn));
            this._closeBtn.setXY(260 * this._ctx.gameMagnify, 90 * this._ctx.gameMagnify);
            this._closeBtn.centerAnchor();
            this._closeBtn.get_pointerDown().connect(function() {
                a._ctx.pack.getSound("sounds/button_click").play();
                a._ctx.currentLevel.closePadlock()
            });
            b.get_pointerDown().connect(function() {
                a._ctx.currentLevel.closePadlock()
            });
            this._leftBtn = new i(this._ctx.pack.getTexture("padlockElements/padlockZone"));
            this.owner.addChild((new g).add(this._leftBtn));
            this._leftBtn.setXY(70 * this._ctx.gameMagnify, 270 * this._ctx.gameMagnify);
            this._leftBtn.centerAnchor();
            this._leftBtn.scaleX.set__(-1 * Math.abs(this._leftBtn.scaleX._value));
            this._leftBtn.get_pointerDown().connect(function() {
                a._leftKey = !0
            });
            this._leftBtn.get_pointerUp().connect(function() {
                a._leftKey = !1
            });
            this._upBtn = new i(this._ctx.pack.getTexture("padlockElements/padlockZoneUp"));
            this.owner.addChild((new g).add(this._upBtn));
            this._upBtn.setXY(160 * this._ctx.gameMagnify, 360 * this._ctx.gameMagnify);
            this._upBtn.centerAnchor();
            this._upBtn.get_pointerDown().connect(function() {
                Math.abs(a._lockpick.x._value -
                    a._hole.x._value) < 10 * a._ctx.gameMagnify ? (1 == a._difLevel && (a._padLocked = !1, a._timerStop = 0.2, a._timer = 0, a._lockpick.y.animate(a._lockpick.y._value, 300 * a._ctx.gameMagnify, 0.5, n.backOut)), 2 == a._difLevel && 0 == a._tickNumber ? (a._tickNumber = 1, a._hole = a._hole2, a._lockpick.y.animate(a._lockpick.y._value, 355 * a._ctx.gameMagnify, 0.5, n.backOut)) : 2 == a._difLevel && 1 == a._tickNumber && (a._tickNumber = 2, a._padLocked = !1, a._timerStop = 0.2, a._timer = 0, a._lockpick.y.animate(a._lockpick.y._value, 300 * a._ctx.gameMagnify, 0.5, n.backOut)),
                    a._ctx.pack.getSound("sounds/lock_unlocked").play()) : (a._isOpenFail = !0, a._timerStop = 0.2, a._timer = 0, a._lockpick.y.animate(a._lockpick.y._value, 390 * a._ctx.gameMagnify, 0.5, n.backOut), a._ctx.pack.getSound("sounds/lock_error").play())
            });
            this._rightBtn = new i(this._ctx.pack.getTexture("padlockElements/padlockZone"));
            this.owner.addChild((new g).add(this._rightBtn));
            this._rightBtn.setXY(250 * this._ctx.gameMagnify, 270 * this._ctx.gameMagnify);
            this._rightBtn.centerAnchor();
            this._rightBtn.get_pointerDown().connect(function() {
                a._rightKey = !0
            });
            this._rightBtn.get_pointerUp().connect(function() {
                a._rightKey = !1
            });
            d.get_pointerUp().connect(function() {
                a._leftKey = !1;
                a._rightKey = !1
            });
            b = this.owner._compMap.Sprite_0;
            b.setScale(this._ctx.gameScale);
            b.setXY(0, this._ctx.currentLevel.ySdvigCoef)
        },
        onUpdate: function(a) {
            this._leftKey && this._hole.x._value - 2 * this._ctx.gameMagnify > 100 * this._ctx.gameMagnify && this._hole.setXY(this._hole.x._value - 2 * this._ctx.gameMagnify, this._hole.y._value);
            this._rightKey && this._hole.x._value + 2 * this._ctx.gameMagnify < 220 *
                this._ctx.gameMagnify && this._hole.setXY(this._hole.x._value + 2 * this._ctx.gameMagnify, this._hole.y._value);
            this._padLocked && (this._timer += a, 0 < this._signHoleX ? this._hole.x._value + this._holeX < 210 * this._ctx.gameMagnify && this._hole.x.animate(this._hole.x._value, this._hole.x._value + this._holeX, 0.5, n.backOut) : this._hole.x._value - this._holeX > 110 * this._ctx.gameMagnify && this._hole.x.animate(this._hole.x._value, this._hole.x._value - this._holeX, 0.5, n.backOut), this._timer >= this._timerStop && (this._timer = 0, this._timerStop =
                1, this._signHoleX *= -1, this._holeX = Math.random() + 6 * this._ctx.gameMagnify));
            !this._padLocked && !this._arcOpen && (this._timer += a, this._timer >= this._timerStop && (this._arcOpen = !0, this._timerStop = 0.5, this._timer = 0, this._lockarc.y.animate(this._lockarc.y._value, 50 * this._ctx.gameMagnify, 0.5, n.backOut), this._lockspring.texture = this._ctx.pack.getTexture("padlockElements/lockclick0002")));
            this._arcOpen && (this._timer += a, this._timer >= this._timerStop && (this._ctx.addObjectsToSave(new ba(this._padlockId)), this._ctx.currentLevel.closePadlock(),
                this._ctx.currentLevel.FindAndOpenDoor(this._doorName), this._ctx.currentLevel._charactersLayer.removeChild(this._ctx.currentLevel.player._compMap.BobHero_34.currentBalloon), this._ctx.currentLevel.player._compMap.BobHero_34.currentBalloon.dispose(), this._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock.disposeChildren(), this._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock.dispose(), this._ctx.currentLevel.player._compMap.BobHero_34.currentPadlock = null));
            this._isOpenFail && (this._timer +=
                a, this._timer >= this._timerStop && this._ctx.currentLevel.closePadlock())
        },
        __class__: Kb
    });
    var dd = function() {};
    f["screens.Pausemenu"] = dd;
    dd.__name__ = ["screens", "Pausemenu"];
    dd.create = function(a, b, c) {
        b = new g;
        b.add(new ja(!1));
        var d = new q;
        b.add(d);
        d = new Za(0, a.targetWidth * a.gameMagnify, a.targetHeight * a.gameMagnify);
        d.alpha.animate(0, 0.5, 0.5);
        b.addChild((new g).add(d));
        d.centerAnchor();
        d.setXY(0.5 * a.targetWidth, 0.5 * a.targetHeight);
        d = new i(a.pack.getTexture("screens/Paused"));
        d.setXY(0.5 * a.targetWidth, 170 *
            a.gameMagnify);
        d.centerAnchor();
        b.addChild((new g).add(d));
        for (var d = new g, e = 0, f = 0; f < c.length;) {
            var h = c[f++],
                k = [c[f++]],
                h = new i(a.pack.getTexture("buttons/" + h));
            h.setXY(e, 300 * a.gameMagnify);
            h.get_pointerDown().connect(function(b) {
                return function() {
                    a.pack.getSound("sounds/button_click").play();
                    b[0]()
                }
            }(k));
            e += h.getNaturalWidth() + 20 * a.gameMagnify;
            d.addChild((new g).add(h))
        }
        c = q.getBounds(d);
        e = new q;
        e.x.animate(a.targetWidth, 0.5 * a.targetWidth - c.width / 2, 0.5, n.backOut);
        b.addChild(d.add(e));
        c = b._compMap.Sprite_0;
        c.setScale(a.gameScale);
        c.setXY(a.centerCoefX, a.centerCoefY);
        return b
    };
    var kd = function() {};
    f["screens.Preloader"] = kd;
    kd.__name__ = ["screens", "Preloader"];
    kd.create = function(a) {
        var b = new g,
            c = l._platform.getStage().get_width() / 640,
            d = l._platform.getStage().get_height() / 960,
            e = Math.min(c, d),
            c = Math.max(c, d),
            d = new i(a.getTexture("progress/MainScreenBg"));
        b.addChild((new g).add(d));
        d.setXY(0, 0);
        1.5 < l._platform.getStage().get_height() / l._platform.getStage().get_width() ? d.setScale(e) : d.setScale(c);
        c = new i(a.getTexture("progress/gameLogo"));
        b.addChild((new g).add(c));
        c.setXY(0.5 * l._platform.getStage().get_width(), 0.2 * l._platform.getStage().get_height());
        c.setScale(e);
        c.centerAnchor();
        var f = new i(a.getTexture("progress/Left")),
            c = new i(a.getTexture("progress/Right")),
            h = l._platform.getStage().get_width() - f.texture.get_width() - c.texture.get_width() - 40,
            d = 0.5 * l._platform.getStage().get_height() + f.texture.get_height();
        f.setXY(20, d);
        b.addChild((new g).add(f));
        var k = new $a(a.getTexture("progress/Background"), h);
        k.setXY(f.x._value + f.texture.get_width(),
            d);
        b.addChild((new g).add(k));
        var n = new $a(a.getTexture("progress/Fill"));
        n.setXY(k.x._value, d);
        var o = 0,
            f = new oa;
        f.run(new pa(new qa([new ra(0.01), new sa(function() {
            100 > o ? n.width.set__(o / 100 * h) : n.width.set__(h);
            o += 2
        })])));
        b.add(f);
        b.addChild((new g).add(n));
        c.setXY(n.x._value + h, d);
        b.addChild((new g).add(c));
        a = new na(new Z(a, "fonts/Interface"));
        a.setXY(10 * e, 10 * e);
        a.set_text("1.0.3");
        b.addChild((new g).add(a));
        return b
    };
    var id = function() {};
    f["screens.SavePoint"] = id;
    id.__name__ = ["screens", "SavePoint"];
    id.create = function(a, b, c) {
        var d = new g;
        d.add(new ja(!1));
        var f = new q;
        d.add(f);
        f = new i(a.pack.getTexture("backTap"));
        d.addChild((new g).add(f));
        f.setXY(0, 0);
        var h = new i(a.pack.getTexture("savePoint/BackSP"));
        d.addChild((new g).add(h));
        h.setXY(160 * a.gameMagnify, 260 * a.gameMagnify);
        h.centerAnchor();
        h = new i(a.pack.getTexture("buttons/BtnClose"));
        h.setXY(284 * a.gameMagnify, 194 * a.gameMagnify);
        h.centerAnchor();
        1 < a.currentLevelNumber && d.addChild((new g).add(h));
        var k;
        k = 5 <= a.currentLevel.batery._value ? new i(a.pack.getTexture("savePoint/BtnBattery")) :
            new i(a.pack.getTexture("savePoint/BtnBatteryGray"));
        d.addChild((new g).add(k));
        k.setXY(110 * a.gameMagnify, 275 * a.gameMagnify);
        k.centerAnchor();
        k.get_pointerDown().connect(function() {
            if (5 <= a.currentLevel.batery._value) {
                e.reportEvent("Checkpoint", {
                    Currency: "Batteries"
                });
                a.saveCabinNumber = c;
                a.levelTimerSave = a.currentLevel.watch._value;
                a.currentLevel.player._compMap.BobHero_34.changeAction("inSave", b, a.currentLevel.player._compMap.Sprite_0.y._value);
                var d = a.currentLevel.batery;
                d.set__(d._value - 5);
                a.currentLevel.closeSaveMessage()
            }
        });
        h.get_pointerDown().connect(function() {
            if (1 != a.currentLevelNumber || a.isLevelPointSaved) a.pack.getSound("sounds/button_click").play(), a.currentLevel.player._compMap.BobHero_34.currentPadlock._compMap.ChargeBase_6.CloseSaveMessage(), a.currentLevel.closeSaveMessage(), a.currentLevel.player._compMap.BobHero_34._bobGoToSave = !1
        });
        f.get_pointerDown().connect(function() {
            if (1 != a.currentLevelNumber || a.isLevelPointSaved) a.pack.getSound("sounds/button_click").play(), a.currentLevel.player._compMap.BobHero_34.currentPadlock._compMap.ChargeBase_6.CloseSaveMessage(),
                a.currentLevel.closeSaveMessage(), a.currentLevel.player._compMap.BobHero_34._bobGoToSave = !1
        });
        f = d._compMap.Sprite_0;
        f.setScale(a.gameScale);
        f.setXY(0, a.currentLevel.ySdvigCoef);
        return d
    };
    var za = function(a) {
        this._timerStop = 7.2;
        this._timer = 0;
        this._currentSprite = 1;
        this.tipsActivate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        h.call(this);
        this._ctx = a
    };
    f["screens.Tutorial"] = za;
    za.__name__ = ["screens", "Tutorial"];
    za.__super__ = h;
    za.prototype = t(h.prototype, {
        get_name: function() {
            return "Tutorial_23"
        },
        onAdded: function() {
            this.owner.add(new q);
            this.picture1 = new i(this._ctx.pack.getTexture("tutorial/tip1"));
            this.owner.addChild((new g).add(this.picture1));
            this.picture1.setXY(8 * this._ctx.gameMagnify, 70 * this._ctx.gameMagnify);
            this.picture1.alpha.set__(0);
            this.picture1.set_pointerEnabled(!1);
            this.picture2 = new i(this._ctx.pack.getTexture("tutorial/tip2"));
            this.owner.addChild((new g).add(this.picture2));
            this.picture2.setXY(152 * this._ctx.gameMagnify, 70 * this._ctx.gameMagnify);
            this.picture2.alpha.set__(0);
            this.picture2.set_pointerEnabled(!1);
            this.picture3 =
                new i(this._ctx.pack.getTexture("tutorial/tip3"));
            this.owner.addChild((new g).add(this.picture3));
            this.picture3.alpha.set__(0);
            this.picture3.set_pointerEnabled(!1);
            this.picture6 = new i(this._ctx.pack.getTexture("tutorial/tip6"));
            this.owner.addChild((new g).add(this.picture6));
            this.picture6.setXY(55 * this._ctx.gameMagnify, 270 * this._ctx.gameMagnify);
            this.picture6.alpha.set__(0);
            this.picture6.set_pointerEnabled(!1);
            var a = this.owner._compMap.Sprite_0;
            a.setScale(this._ctx.gameScale);
            a.setXY(0, 50 * this._ctx.currentScaleCoef);
            this._currentSprite = 1;
            this._timer = this._timerStop;
            this._ctx.isLevelPointSaved ? (this.tipsActivate[0] = 2, this.tipsActivate[1] = 2, this.tipsActivate[2] = 2, this.tipsActivate[3] = 2) : (this._finger = new qb(this._ctx, 0, 0), this.owner.addChild((new g).add(this._finger)), this._finger.changeAction("_FingerAnim"), this._finger.setCoor(280 * this._ctx.gameMagnify, 70 * this._ctx.gameMagnify))
        },
        onUpdate: function() {},
        showTip: function(a, b) {
            null == b && (b = "box");
            this._ctx.isLevelPointSaved || (this._currentSprite = a, 0 == this.tipsActivate[this._currentSprite -
                1] && (this._timer = 0, this.tipsActivate[this._currentSprite - 1] = 1, 1 == a && this.picture1.alpha.animate(0, 1, 0.4, n.backIn), 2 == a && (this.picture2.alpha.animate(0, 1, 0.4, n.backIn), this._finger.changeAction("_FingerAnim"), this._finger.setCoor(280 * this._ctx.gameMagnify, 70 * this._ctx.gameMagnify)), 3 == a && (this._finger.changeAction("_FingerAnim"), "box" == b ? (this.picture3.setXY(81 * this._ctx.gameMagnify, 120 * this._ctx.gameMagnify), this._finger.setCoor(140 * this._ctx.gameMagnify, 110 * this._ctx.gameMagnify)) : (this.picture3.setXY(0 *
                    this._ctx.gameMagnify, 70 * this._ctx.gameMagnify), this._finger.setCoor(60 * this._ctx.gameMagnify, 70 * this._ctx.gameMagnify)), this.picture3.alpha.animate(0, 1, 0.4, n.backIn)), 4 == a && (this.picture4 = new i(this._ctx.pack.getTexture("tutorial/tip4")), this.owner.addChild((new g).add(this.picture4)), this.picture4.setXY(8 * this._ctx.gameMagnify, 214 * this._ctx.gameMagnify), this.picture4.alpha.set__(0), this.picture4.alpha.animate(0, 1, 0.4, n.backIn), this.picture4.set_pointerEnabled(!1)), 5 == a && (this.picture5 = new i(this._ctx.pack.getTexture("tutorial/tip5")),
                    this.owner.addChild((new g).add(this.picture5)), this.picture5.setXY(90 * this._ctx.gameMagnify, 285 * this._ctx.gameMagnify), this.picture5.alpha.set__(0), this.picture5.alpha.animate(0, 1, 0.4, n.backIn), this.picture5.set_pointerEnabled(!1)), 6 == a && (this._finger.changeAction("_FingerAnim"), this._finger.setCoor(110 * this._ctx.gameMagnify, 260 * this._ctx.gameMagnify), this.picture6.alpha.animate(0, 1, 0.4, n.backIn)), 7 == a && (this.picture7 = new i(this._ctx.pack.getTexture("tutorial/tip7")), this.owner.addChild((new g).add(this.picture7)),
                    this.picture7.setXY(8 * this._ctx.gameMagnify, 350 * this._ctx.gameMagnify), this.picture7.alpha.set__(0), this.picture7.alpha.animate(0, 1, 0.4, n.backIn), this.picture7.set_pointerEnabled(!1)), 8 == a && (this._finger.stopAction(), this.picture8 = new i(this._ctx.pack.getTexture("tutorial/tip8")), this.owner.addChild((new g).add(this.picture8)), this.picture8.setXY(10 * this._ctx.gameMagnify, 210 * this._ctx.gameMagnify), this.picture8.alpha.set__(0), this.picture8.alpha.animate(0, 1, 0.4, n.backIn), this.picture8.set_pointerEnabled(!1)),
                9 == a && (this._finger.stopAction(), this.picture9 = new i(this._ctx.pack.getTexture("tutorial/tip9")), this.owner.addChild((new g).add(this.picture9)), this.picture9.setXY(10 * this._ctx.gameMagnify, 140 * this._ctx.gameMagnify), this.picture9.alpha.set__(0), this.picture9.alpha.animate(0, 1, 0.4, n.backIn), this.picture9.set_pointerEnabled(!1)), 10 == a && (this._finger.stopAction(), this.picture10 = new i(this._ctx.pack.getTexture("tutorial/tip10")), this.owner.addChild((new g).add(this.picture10)), this.picture10.setXY(22 *
                    this._ctx.gameMagnify, 160 * this._ctx.gameMagnify), this.picture10.alpha.set__(0), this.picture10.alpha.animate(0, 1, 0.4, n.backIn), this.picture10.set_pointerEnabled(!1))))
        },
        closeTip: function(a) {
            this._finger.stopAction();
            this._ctx.isLevelPointSaved ? 7 == a && this.owner.removeChild(this.picture7.owner) : (this._currentSprite = a, this._timer = 0, this.tipsActivate[this._currentSprite - 1] = 2, 1 == this._currentSprite && this.owner.removeChild(this.picture1.owner), 2 == this._currentSprite && this.picture2.alpha.set__(0), 3 == this._currentSprite &&
                this.picture3.alpha.set__(0), 4 == this._currentSprite && this.owner.removeChild(this.picture4.owner), 5 == this._currentSprite && this.owner.removeChild(this.picture5.owner), 6 == this._currentSprite && this.owner.removeChild(this.picture6.owner), 6 == a && 0 == this.tipsActivate[6] && this.showTip(7));
            8 == a ? this.owner.removeChild(this.picture8.owner) : 9 == a ? this.owner.removeChild(this.picture9.owner) : 10 == a && this.owner.removeChild(this.picture10.owner)
        },
        __class__: za
    });
    var yd = 0;
    f.Math = Math;
    String.prototype.__class__ = f.String =
        String;
    String.__name__ = ["String"];
    f.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = f.Date = Date;
    Date.__name__ = ["Date"];
    var zd = f.Int = {
            __name__: ["Int"]
        },
        Ad = f.Dynamic = {
            __name__: ["Dynamic"]
        },
        wd = f.Float = Number;
    wd.__name__ = ["Float"];
    var xd = f.Bool = Boolean;
    xd.__ename__ = ["Bool"];
    var ud = f.Class = {
            __name__: ["Class"]
        },
        vd = {},
        ka = {},
        pd = rd.ArrayBuffer || ma;
    null == pd.prototype.slice && (pd.prototype.slice = ma.sliceImpl);
    var sd = rd.Uint8Array || ya._new;
    s.Element = 0;
    s.PCData = 1;
    s.CData = 2;
    s.Comment = 3;
    s.DocType = 4;
    s.ProcessingInstruction = 5;
    s.Document = 6;
    N.DISPATCHING_SENTINEL = new Ha(null, null);
    e.isEventsTraceOnly = !1;
    e.apiURLPrefix = "http://tools.funtomic.com/";
    e.gameOpsVersion = "0.7.8";
    e.apiEventsLocation = "v2/events/";
    e.apiConfigLocation = "v1/config/";
    e.status = E.UNINITIALIZED;
    e.onInitDoneFunctions = [];
    e.MAX_SAVED_UNSENT_EVENTS = 1E3;
    e.localStorage = {};
    e.gameStateGameOpsData = {};
    e.firstSession = !1;
    e.isDebugMode = !1;
    e.levelsNumbers = [];
    e.deferredReportEvents = [];
    e.movesDuration = [];
    e.timers = {};
    A.logLevel = 0;
    z._prefix = "";
    z._isErrorEventsSent =
        0;
    ia.instance = new ia;
    l.root = new g;
    l.uncaughtError = new I;
    l.hidden = new H(!1);
    l.volume = new G(1);
    l._platform = ia.instance;
    l._calledInit = !1;
    O.__meta__ = {
        obj: {
            assets: [{
                preloader: [{
                    bytes: 1357,
                    md5: "9454e5926fc9f78ce39ef8d7a48336d1",
                    name: "fonts/Interface.fnt"
                }, {
                    bytes: 4302,
                    md5: "2ea7820e9ca216fbe70913910b917bb8",
                    name: "fonts/Interface.png"
                }, {
                    bytes: 239,
                    md5: "5e6c6ca13590ee845da9503383b5f5ac",
                    name: "progress/Background.png"
                }, {
                    bytes: 238,
                    md5: "323ba2110e9484413b983473970375f4",
                    name: "progress/Fill.png"
                }, {
                    bytes: 59064,
                    md5: "1b67d6e98b6aca2273678c0ddc240913",
                    name: "progress/gameLogo.png"
                }, {
                    bytes: 1605,
                    md5: "84e3ffb7b2748d6c1cd7db44763708ae",
                    name: "progress/Left.png"
                }, {
                    bytes: 194083,
                    md5: "aed09132f3788b6045721c7cf1361e55",
                    name: "progress/MainScreenBg.png"
                }, {
                    bytes: 1621,
                    md5: "eadd795b4b5b0993bfee5e3fd0c017e7",
                    name: "progress/Right.png"
                }],
                locale: [{
                    bytes: 63,
                    md5: "63a8fe1cf6ce017543a0a049544e7f9a",
                    name: "messages.ini"
                }],
                main: [{
                    bytes: 185187,
                    md5: "dd41fa1a6f62b32b0f794fa505c72383",
                    name: "backLevels.png"
                }, {
                    bytes: 4402,
                    md5: "d816287b0950c95d1499468456c89192",
                    name: "backTap.png"
                }, {
                    bytes: 5385,
                    md5: "fd4d5fdd56755dc5eceaa9f6eb6e56d7",
                    name: "BalloonBox.png"
                }, {
                    bytes: 3987,
                    md5: "324b2fdb916ede631a2354d98d41e53c",
                    name: "BalloonCode.png"
                }, {
                    bytes: 4521,
                    md5: "bdb44cb74b9740b2be187a5ea8aac81a",
                    name: "BalloonComputer.png"
                }, {
                    bytes: 6382,
                    md5: "cdfa61e619b7d99aefaf3207ab97f011",
                    name: "BalloonElectric.png"
                }, {
                    bytes: 7135,
                    md5: "1760b3788d6a2c1417d0f057c19df971",
                    name: "BalloonGadget.png"
                }, {
                    bytes: 7058,
                    md5: "1143e17ba21a43e1ebe61831d306bd66",
                    name: "BalloonHackMonitor.png"
                }, {
                    bytes: 6579,
                    md5: "2fd8e2fec392c3cb5047e7a466d62e19",
                    name: "BalloonHiden.png"
                }, {
                    bytes: 6138,
                    md5: "2ab4fbfc42db3c34386372341f5a5e65",
                    name: "BalloonLockpick.png"
                }, {
                    bytes: 4834,
                    md5: "cd500ca3be0bc1c43a9b4d2cac5664b0",
                    name: "BalloonMessage.png"
                }, {
                    bytes: 5977,
                    md5: "1980be7f0ac106efe23f52abaf546042",
                    name: "BalloonNone.png"
                }, {
                    bytes: 5333,
                    md5: "aeb46c59ec9f98af60b34f8d8936ad8b",
                    name: "BalloonSave.png"
                }, {
                    bytes: 5045,
                    md5: "48261851abf4e00e1f7f467429af959b",
                    name: "BalloonStair.png"
                }, {
                    bytes: 53577,
                    md5: "b95a7dba308470a2246ec1f5f8532c88",
                    name: "bobAnim/atlas0.png"
                }, {
                    bytes: 177639,
                    md5: "eca0b31f35eca59fc1f5fc953a95c372",
                    name: "bobAnim/library.json"
                }, {
                    bytes: 32,
                    md5: "4fb097dc966c03c37901e4ec2ffd5d0e",
                    name: "bobAnim/md5"
                }, {
                    bytes: 1,
                    md5: "a1a3456a6af490662dd7608914c0f743",
                    name: "bobAnim/version"
                }, {
                    bytes: 7604,
                    md5: "41e324177760cb77762dd3e13c7d99ad",
                    name: "BobElev.png"
                }, {
                    bytes: 88863,
                    md5: "abf83dfce2dcf872422d850df42a66b4",
                    name: "bobRopeJump.png"
                }, {
                    bytes: 3311,
                    md5: "872b5fd5dd1a3fcdfda56824a6eaeefa",
                    name: "BobShadow.png"
                }, {
                    bytes: 7557,
                    md5: "b64b374be34f3d2cfffd861ae213d476",
                    name: "Bulkheads1.png"
                }, {
                    bytes: 8438,
                    md5: "06e8a3a15e991b0c57c2a2eb40c4cf70",
                    name: "Bulkheads2.png"
                }, {
                    bytes: 6561,
                    md5: "d8dbfab8bd76d16942a613b9d2652216",
                    name: "buttons/BaterySign.png"
                }, {
                    bytes: 7772,
                    md5: "7ac63aea650b2018f2f472658d9d6e52",
                    name: "buttons/BtnClose.png"
                }, {
                    bytes: 1190,
                    md5: "bc8063e616659064ff473d106f972fcc",
                    name: "buttons/BtnPause.png"
                }, {
                    bytes: 3205,
                    md5: "88c18642382861f6f988510e6bd3b2e2",
                    name: "buttons/BtnReset.png"
                }, {
                    bytes: 2635,
                    md5: "c583efac81c8e753954ac434d0895634",
                    name: "buttons/Cross.png"
                }, {
                    bytes: 7589,
                    md5: "6553f1906d962b4e635584d6a8ae12c6",
                    name: "buttons/Home.png"
                }, {
                    bytes: 70806,
                    md5: "520ecf36e4034748fb4ed47c3b59b0ab",
                    name: "buttons/LevelBox1.png"
                }, {
                    bytes: 80896,
                    md5: "42614634ad8b7c5492316f8e10867eec",
                    name: "buttons/LevelBox2.png"
                }, {
                    bytes: 74657,
                    md5: "b6895b341c23c1afc6b1a67f7acb5bf4",
                    name: "buttons/LevelBox3.png"
                }, {
                    bytes: 70705,
                    md5: "1a887e24582a31657d926a9a6605c095",
                    name: "buttons/LevelBox4.png"
                }, {
                    bytes: 66770,
                    md5: "c8fcb9bb6d76e436a8a27bcdf149c08f",
                    name: "buttons/LevelBoxGray2.png"
                }, {
                    bytes: 61834,
                    md5: "94caf41ac987e9193575a2601a16a912",
                    name: "buttons/LevelBoxGray3.png"
                }, {
                    bytes: 57438,
                    md5: "1790dead994bf7e8060085887b5ec5ed",
                    name: "buttons/LevelBoxGray4.png"
                }, {
                    bytes: 8221,
                    md5: "348e2906c7c00afaa43adc6d286fe9da",
                    name: "buttons/levelCircle.png"
                }, {
                    bytes: 3083,
                    md5: "651d17ca1864d8f31617b792e8ade5b9",
                    name: "buttons/LevelLock.png"
                }, {
                    bytes: 341371,
                    md5: "d0479b73808a50b489d18f6a22d81f90",
                    name: "buttons/LevelMapBack.png"
                }, {
                    bytes: 1119,
                    md5: "2b4f451b2d2896ce1ee42f9e89db54c8",
                    name: "buttons/LevelNumber1.png"
                }, {
                    bytes: 3793,
                    md5: "57d477915c05060d1c319c9f840684dd",
                    name: "buttons/LevelNumber10.png"
                }, {
                    bytes: 2784,
                    md5: "e8f63bccd5f8b6ab1574c61f279f9902",
                    name: "buttons/LevelNumber2.png"
                }, {
                    bytes: 2697,
                    md5: "5f523b2403b777d0df273f55056f3896",
                    name: "buttons/LevelNumber3.png"
                }, {
                    bytes: 1809,
                    md5: "3be99b02e893c231d4063e1e83bb3c85",
                    name: "buttons/LevelNumber4.png"
                }, {
                    bytes: 2353,
                    md5: "a7cf317feddb98dd399ac8fdb575d79b",
                    name: "buttons/LevelNumber5.png"
                }, {
                    bytes: 2642,
                    md5: "12217bc756a2ba7383bee0c90496f09f",
                    name: "buttons/LevelNumber6.png"
                }, {
                    bytes: 1813,
                    md5: "9d37a61e0bf9f4626982239d339602b7",
                    name: "buttons/LevelNumber7.png"
                }, {
                    bytes: 2587,
                    md5: "7aebb9704dcc3667bc4173644a249df8",
                    name: "buttons/LevelNumber8.png"
                }, {
                    bytes: 2623,
                    md5: "055f5eec7230a559a79880c4d93d9bd9",
                    name: "buttons/LevelNumber9.png"
                }, {
                    bytes: 1647,
                    md5: "4d6e6b40487a97ad57e74de1964184e8",
                    name: "buttons/LevelStar.png"
                }, {
                    bytes: 2368,
                    md5: "09ac510273dfc87cf06749208878d23d",
                    name: "buttons/LevelStarFull.png"
                }, {
                    bytes: 11344,
                    md5: "3fb9b79e1bc91d30016286f247516ec7",
                    name: "buttons/MapBattery.png"
                }, {
                    bytes: 8113,
                    md5: "9904752d356f9ff4b9c1d7400b181573",
                    name: "buttons/Play.png"
                }, {
                    bytes: 12494,
                    md5: "0dbc65fb1ac4c06b715657603cfb516d",
                    name: "buttons/PlayBig.png"
                }, {
                    bytes: 13018,
                    md5: "a4bec2ea3209dc50a636e3fcf8ac20e5",
                    name: "buttons/PlayNext.png"
                }, {
                    bytes: 10738,
                    md5: "398ad78ac0745d1eef5cc1466e3eaead",
                    name: "buttons/Replay.png"
                }, {
                    bytes: 4324,
                    md5: "495a4d9946d0b4123a9b6d2b989d84b4",
                    name: "buttons/TimeSign.png"
                }, {
                    bytes: 3221,
                    md5: "6d2be8dc7d03a55dcd8abdb3c2644ac1",
                    name: "codePanel/codebutton001.png"
                }, {
                    bytes: 3331,
                    md5: "70a2351a7c1b3932af595c5d84ab765d",
                    name: "codePanel/codebutton0010.png"
                }, {
                    bytes: 3172,
                    md5: "32bdaecdff062744f33ef59552765d77",
                    name: "codePanel/codebutton0011.png"
                }, {
                    bytes: 3368,
                    md5: "1fe735381a0262ff20201e65c32a1b19",
                    name: "codePanel/codebutton0012.png"
                }, {
                    bytes: 2568,
                    md5: "35815f98d9df47d74cd0748a8e37997f",
                    name: "codePanel/codebutton002.png"
                }, {
                    bytes: 3191,
                    md5: "980c3de407cb7fca3ffe93867d01f175",
                    name: "codePanel/codebutton003.png"
                }, {
                    bytes: 3286,
                    md5: "d5e276618daffa235e6052c3fac8c6ee",
                    name: "codePanel/codebutton004.png"
                }, {
                    bytes: 2809,
                    md5: "ba391b14c8d68af23e4d19cfb4d4b5a0",
                    name: "codePanel/codebutton005.png"
                }, {
                    bytes: 3173,
                    md5: "e95d023da8703cc1bde55c93173a9265",
                    name: "codePanel/codebutton006.png"
                }, {
                    bytes: 3250,
                    md5: "108edb201cc60351c67a9b5ccbe6408d",
                    name: "codePanel/codebutton007.png"
                }, {
                    bytes: 2833,
                    md5: "d1702457ef241a7c2ba44f5211d08736",
                    name: "codePanel/codebutton008.png"
                }, {
                    bytes: 3253,
                    md5: "9fc481776a577662564b90c65fd3a307",
                    name: "codePanel/codebutton009.png"
                }, {
                    bytes: 3162,
                    md5: "1b39b5e3cbcf86104930778d710a8e10",
                    name: "codePanel/codebuttonDown001.png"
                }, {
                    bytes: 2514,
                    md5: "a4a8c49f554fda60d896f489c5e5de00",
                    name: "codePanel/codebuttonDown002.png"
                }, {
                    bytes: 3075,
                    md5: "daa9081072ff4167b8c3db987abd4e0b",
                    name: "codePanel/codebuttonDown003.png"
                }, {
                    bytes: 3171,
                    md5: "6565f07377fe9b7e9d75a95a35017776",
                    name: "codePanel/codebuttonDown004.png"
                }, {
                    bytes: 2747,
                    md5: "76c348fa7fa2a158064f981ac4753d3c",
                    name: "codePanel/codebuttonDown005.png"
                }, {
                    bytes: 3062,
                    md5: "6e5e1a207ebb53076fc3c1c0e5339fc8",
                    name: "codePanel/codebuttonDown006.png"
                }, {
                    bytes: 3179,
                    md5: "d3f2f09ed205b45854d156a19d658d19",
                    name: "codePanel/codebuttonDown007.png"
                }, {
                    bytes: 2747,
                    md5: "92c9615ee5443842748e4b94bd7f0330",
                    name: "codePanel/codebuttonDown008.png"
                }, {
                    bytes: 3144,
                    md5: "4df092e45ceabe356b9e3d01cad5aee3",
                    name: "codePanel/codebuttonDown009.png"
                }, {
                    bytes: 3187,
                    md5: "59e7256c174ae0012841c984dbafc3b7",
                    name: "codePanel/codebuttonDown010.png"
                }, {
                    bytes: 3077,
                    md5: "4f2b44278c2956177da643c27e060049",
                    name: "codePanel/codebuttonDown011.png"
                }, {
                    bytes: 3279,
                    md5: "4f475773bf99794cf610d55717c6188b",
                    name: "codePanel/codebuttonDown012.png"
                }, {
                    bytes: 22491,
                    md5: "c0a5f92f9d717897917ac2e30986936a",
                    name: "codePanel/codepanelBack.png"
                }, {
                    bytes: 1763,
                    md5: "8bcba93922b884522b66ef76b551759c",
                    name: "coin.png"
                }, {
                    bytes: 60172,
                    md5: "c9b41ab372cbb97ef79b9b7a3e1490c7",
                    name: "comics/picture1.png"
                }, {
                    bytes: 20506,
                    md5: "af53bf0f4a0b0d303fed9262348c578d",
                    name: "comics/picture2.png"
                }, {
                    bytes: 42926,
                    md5: "d361f1a244e9fd8713a827b2a087602f",
                    name: "comics/picture3.png"
                }, {
                    bytes: 55203,
                    md5: "78e67c5bcacab1f7c3b9d9911b7e28d2",
                    name: "comics/picture4.png"
                }, {
                    bytes: 53131,
                    md5: "69c4ebe884720c85062f2e26c22470af",
                    name: "comics/picture5.png"
                }, {
                    bytes: 46825,
                    md5: "a78bfca2d0348dedc0c4a52f0075fba8",
                    name: "comics/picture6.png"
                }, {
                    bytes: 21893,
                    md5: "3faf4109ae6de021046e7dad570b424c",
                    name: "comics/picture7.png"
                }, {
                    bytes: 56787,
                    md5: "f45070843818abe148b4c4d182f1eec0",
                    name: "comics/picture8.png"
                }, {
                    bytes: 4330,
                    md5: "2532b6329868cdf31651f36c68ad6d00",
                    name: "CrashWalls.png"
                }, {
                    bytes: 21625,
                    md5: "7510d57fc32a7e7f826f933ffa9bf6d1",
                    name: "effectsAnim/atlas0.png"
                }, {
                    bytes: 18640,
                    md5: "2ed9f0344ce122576c06356b122bb1e4",
                    name: "effectsAnim/library.json"
                }, {
                    bytes: 32,
                    md5: "391ad450d1e646db1ffec917d23b05bb",
                    name: "effectsAnim/md5"
                }, {
                    bytes: 1,
                    md5: "a1a3456a6af490662dd7608914c0f743",
                    name: "effectsAnim/version"
                }, {
                    bytes: 5031,
                    md5: "1743dab69a80c05722f49bbf7b18e88a",
                    name: "fonts/ComputerDark.fnt"
                }, {
                    bytes: 2521,
                    md5: "93d22fd0e98fcd96b4ef0337c07683f9",
                    name: "fonts/ComputerDark.png"
                }, {
                    bytes: 5033,
                    md5: "40167d50b257d4b1be2d3109a91e8b45",
                    name: "fonts/ComputerLight.fnt"
                }, {
                    bytes: 2579,
                    md5: "758424b4e0c11c0bfecf3b0b57e0af20",
                    name: "fonts/ComputerLight.png"
                }, {
                    bytes: 1357,
                    md5: "9454e5926fc9f78ce39ef8d7a48336d1",
                    name: "fonts/Interface.fnt"
                }, {
                    bytes: 4302,
                    md5: "2ea7820e9ca216fbe70913910b917bb8",
                    name: "fonts/Interface.png"
                }, {
                    bytes: 1361,
                    md5: "4822310419967f53631b2269c705e11c",
                    name: "fonts/Interface2.fnt"
                }, {
                    bytes: 8244,
                    md5: "0f613e9fd26202a712f96a4119e9010d",
                    name: "fonts/Interface2.png"
                }, {
                    bytes: 17177,
                    md5: "a1835f8fc19c61ded4be2b750041a66c",
                    name: "fonts/Messages.fnt"
                }, {
                    bytes: 30489,
                    md5: "5610acbe4d8f146065a26ec723a3ac2d",
                    name: "fonts/Messages.png"
                }, {
                    bytes: 1645,
                    md5: "165464dd0aec1299b2acbe3e7ae05efb",
                    name: "fonts/Segment.fnt"
                }, {
                    bytes: 6630,
                    md5: "43566f29f0a7e420cbfdd90fd50f90a1",
                    name: "fonts/Segment.png"
                }, {
                    bytes: 206569,
                    md5: "7fd0797c3a6dcf8c88461885fd30d26f",
                    name: "GameBackground1.png"
                }, {
                    bytes: 185916,
                    md5: "8b45b946cb70c89a12f65778a1ed1ded",
                    name: "GameBackground2.png"
                }, {
                    bytes: 59064,
                    md5: "1b67d6e98b6aca2273678c0ddc240913",
                    name: "gameLogo.png"
                }, {
                    bytes: 1489,
                    md5: "2497a699492e0b62bf3160c9ced9bc9a",
                    name: "gameObjects/AlertLightOn.png"
                }, {
                    bytes: 1109,
                    md5: "b83a554d86d4537e9f98b4734db125a9",
                    name: "gameObjects/Battery.png"
                }, {
                    bytes: 2143,
                    md5: "a4f6798d65a0d58d798aa901a5ca8d0c",
                    name: "gameObjects/box.png"
                }, {
                    bytes: 6065,
                    md5: "7bfd6554888042fa591b3db1d1894ad2",
                    name: "gameObjects/camera0001.png"
                }, {
                    bytes: 3997,
                    md5: "07a4e26f38df783a11b6247fca754f52",
                    name: "gameObjects/camera0002.png"
                }, {
                    bytes: 4014,
                    md5: "d86a0d9247d68c10429a54927f39c0ad",
                    name: "gameObjects/camera0003.png"
                }, {
                    bytes: 626,
                    md5: "7bf2e5167f45808657540f57e48a28e8",
                    name: "gameObjects/cameraFront.png"
                }, {
                    bytes: 1029,
                    md5: "195c55aa5ed4d34410cc0d99b90218f7",
                    name: "gameObjects/codepanel.png"
                }, {
                    bytes: 4330,
                    md5: "2532b6329868cdf31651f36c68ad6d00",
                    name: "gameObjects/CrashWalls.png"
                }, {
                    bytes: 2348,
                    md5: "f7794d2f160dd54e1c771e9c1004e217",
                    name: "gameObjects/door1.png"
                }, {
                    bytes: 2361,
                    md5: "7ae3da49dd5406808d29eadc431d8211",
                    name: "gameObjects/electricPanel1.png"
                }, {
                    bytes: 4213,
                    md5: "882b1928236a6901e0c965b4949f1d17",
                    name: "gameObjects/electricPanel2.png"
                }, {
                    bytes: 708,
                    md5: "7ac083394c4f4db4d4440630642d905a",
                    name: "gameObjects/elevatorBack.png"
                }, {
                    bytes: 1470,
                    md5: "e1bcb955984061fb3546510151cc8c2d",
                    name: "gameObjects/elevatorLeftDoor.png"
                }, {
                    bytes: 1234,
                    md5: "1ec31f6d084bc9031367fb8a0d2ed448",
                    name: "gameObjects/elevatorRightDoor.png"
                }, {
                    bytes: 3628,
                    md5: "1b319d7334a51189eadef9d688f49ab6",
                    name: "gameObjects/EndDoors.png"
                }, {
                    bytes: 1833,
                    md5: "483cd26cbc8fd6acf5371c3dbbb71607",
                    name: "gameObjects/ExitTarget.png"
                }, {
                    bytes: 1513,
                    md5: "acc4cd2a120ba392fd81d8fe05903be3",
                    name: "gameObjects/ExitTarget2.png"
                }, {
                    bytes: 1711,
                    md5: "8f14af7d0154ad03604d42315df5a0cb",
                    name: "gameObjects/GadgetTarget.png"
                }, {
                    bytes: 1746,
                    md5: "b55bd43e62167c4bdca22df361063e3d",
                    name: "gameObjects/GadgetTarget2.png"
                }, {
                    bytes: 655,
                    md5: "323e0d7164789eae6b6ce4ca67b71eb1",
                    name: "gameObjects/laserLines.png"
                }, {
                    bytes: 1153,
                    md5: "824613a2ba82604b2d30acde5e4eb916",
                    name: "gameObjects/message.png"
                }, {
                    bytes: 1436,
                    md5: "be6452c8faeccf3cdd824ad3fa0499da",
                    name: "gameObjects/padlock.png"
                }, {
                    bytes: 11182,
                    md5: "a99d53e1f5dc0c3bf0ef92605d6e975c",
                    name: "gameObjects/SavePoint.png"
                }, {
                    bytes: 13478,
                    md5: "7bede5f4bc4f08329febf862cfc837c3",
                    name: "gameObjects/SavePointActive.png"
                }, {
                    bytes: 287,
                    md5: "f4975d262b619faedd5abfa91c1b5291",
                    name: "gameObjects/SavePointLight.png"
                }, {
                    bytes: 3098,
                    md5: "6d0f76ff87a4ad820ec00d8129ddd238",
                    name: "gameObjects/SavePointTop.png"
                }, {
                    bytes: 1560,
                    md5: "1cf0b0b869defc7ecf3ab03d09d72e20",
                    name: "gameObjects/sidedoor.png"
                }, {
                    bytes: 1407,
                    md5: "f8a142afd902d918ab2e811d85ec097e",
                    name: "gameObjects/sidedoor2.png"
                }, {
                    bytes: 3686,
                    md5: "bc78fa19ab7356fe326164b517957523",
                    name: "gameObjects/StairDoor1.png"
                }, {
                    bytes: 2119,
                    md5: "5e4cbbf3057b1458c39102ee194474b5",
                    name: "gameObjects/StairDoor2.png"
                }, {
                    bytes: 2231,
                    md5: "43af0e61720b47761c58cd8e89a5bc7a",
                    name: "gameObjects/StairDoor3.png"
                }, {
                    bytes: 2116,
                    md5: "0ba0b932d22de615a89932bf9b8162c7",
                    name: "gameObjects/TrapDoor.png"
                }, {
                    bytes: 22538,
                    md5: "01fdc19fc8780fedf19e64b561e6b9c5",
                    name: "guardAAnim/atlas0.png"
                }, {
                    bytes: 142856,
                    md5: "6a636e03f83ce328066ff3ffb049fcb6",
                    name: "guardAAnim/library.json"
                }, {
                    bytes: 32,
                    md5: "64dccd21ecb6b19cf402f57be287e4b1",
                    name: "guardAAnim/md5"
                }, {
                    bytes: 1,
                    md5: "a1a3456a6af490662dd7608914c0f743",
                    name: "guardAAnim/version"
                }, {
                    bytes: 123,
                    md5: "81283eff016efb373a012fcb1c7d5da5",
                    name: "hackerPanel/block.png"
                }, {
                    bytes: 277,
                    md5: "c5776bd646d56c62e44a1f9764960fb8",
                    name: "hackerPanel/dot.png"
                }, {
                    bytes: 496,
                    md5: "5f18c07751666b71724412e0930fadd2",
                    name: "hackerPanel/marker.png"
                }, {
                    bytes: 57444,
                    md5: "446b43191d0d9602be6ef7bf7bdc18e9",
                    name: "hackerPanel/panelBack.png"
                }, {
                    bytes: 2332,
                    md5: "e9d645b3c75de71a0431b59120a4847e",
                    name: "hackerPanel/tapZone.png"
                }, {
                    bytes: 918,
                    md5: "14decf66fde0d19211b8970d7e24a410",
                    name: "hackerPanel/target.png"
                }, {
                    bytes: 963,
                    md5: "2baf9cf03d93855f562c879aca41cac9",
                    name: "hackerPanel/targetFull.png"
                }, {
                    bytes: 2738,
                    md5: "d27c184b627334a4e491f46287f6450d",
                    name: "level1.xml"
                }, {
                    bytes: 3335,
                    md5: "2d51b07df49928ea24ff09a79d8784e1",
                    name: "level2.xml"
                }, {
                    bytes: 194083,
                    md5: "aed09132f3788b6045721c7cf1361e55",
                    name: "MainScreenBg.png"
                }, {
                    bytes: 3623,
                    md5: "f1269ffec63332ca8ba28fd23ce2fa1e",
                    name: "monitor/asciibob.png"
                }, {
                    bytes: 4365,
                    md5: "a14f88234326ebb523514b0e3874b9b8",
                    name: "monitor/blackcat.png"
                }, {
                    bytes: 7910,
                    md5: "d6b1090bc3a42f6a5d213bb7da89ced3",
                    name: "monitor/BtnArrow.png"
                }, {
                    bytes: 8185,
                    md5: "d7d51561c560768858fc72e0769d92b1",
                    name: "monitor/BtnArrow2.png"
                }, {
                    bytes: 128,
                    md5: "0e335251d901e189c1282aa7a53d7e71",
                    name: "monitor/computer.png"
                }, {
                    bytes: 3543,
                    md5: "7dc23f6bce277c5de53c219db1a5d06c",
                    name: "monitor/doorCodeTxt.png"
                }, {
                    bytes: 7719,
                    md5: "1ae856ba84abf4ed0626752ab17a63dd",
                    name: "monitor/house.png"
                }, {
                    bytes: 192116,
                    md5: "c7ab31c19d2cfbcb73d84850bdd6f16d",
                    name: "monitor/MonitorBack.png"
                }, {
                    bytes: 114,
                    md5: "229679e01c13f5eda16a93fa9076ebc9",
                    name: "monitor/MonitorLine.png"
                }, {
                    bytes: 599,
                    md5: "2404468379c20b1e458f2fea0a0d297c",
                    name: "monitor/monitorNum0.png"
                }, {
                    bytes: 453,
                    md5: "f1c2417eec8cb76fe29b17c86d293dd7",
                    name: "monitor/monitorNum1.png"
                }, {
                    bytes: 749,
                    md5: "dad4282f12f0fa6e13b7efd3e1d21324",
                    name: "monitor/monitorNum2.png"
                }, {
                    bytes: 729,
                    md5: "7642b9af74c7b9e0a008e52e8df284eb",
                    name: "monitor/monitorNum3.png"
                }, {
                    bytes: 473,
                    md5: "887647f9c65988438bba602eeb19d74d",
                    name: "monitor/monitorNum4.png"
                }, {
                    bytes: 642,
                    md5: "3a8b8e6a524e30311282698a5528674b",
                    name: "monitor/monitorNum5.png"
                }, {
                    bytes: 879,
                    md5: "68dbba401c398bf16154ae8f4031b5f2",
                    name: "monitor/monitorNum6.png"
                }, {
                    bytes: 682,
                    md5: "8b941b54840899153c8cfc5f3884bfba",
                    name: "monitor/monitorNum7.png"
                }, {
                    bytes: 901,
                    md5: "0e02a59e7491cd2cbf5f0e47a74b20b3",
                    name: "monitor/monitorNum8.png"
                }, {
                    bytes: 825,
                    md5: "da0c3f1f3a55e3026152f874751d3f2d",
                    name: "monitor/monitorNum9.png"
                }, {
                    bytes: 211,
                    md5: "6e1585646174fcf9435aae4914e20379",
                    name: "monitor/MonitorSelector.png"
                }, {
                    bytes: 91,
                    md5: "1eea0595abde7761d3df25621c521092",
                    name: "monitor/shadow.png"
                }, {
                    bytes: 7820,
                    md5: "60a34ef7e8e6a32b424dda4e99873e18",
                    name: "monitor/superspy.png"
                }, {
                    bytes: 793703,
                    md5: "74ee5e21b42183e959e9f6dba0e66f99",
                    name: "music/btb3_bossfight_v1.mp3"
                }, {
                    bytes: 559646,
                    md5: "e4e1bdd14652f60141d0028b7de2e344",
                    name: "music/btb3_comix_theme.mp3"
                }, {
                    bytes: 1088364,
                    md5: "5c00eb1d07e041ff2e2a4f25e6b79d5b",
                    name: "music/btb3_gameplay_theme.mp3"
                }, {
                    bytes: 1118039,
                    md5: "3f8dd29e453abcb5fcd3e9d950128d1e",
                    name: "music/btb3_main_theme.mp3"
                }, {
                    bytes: 127406,
                    md5: "9164858f1b2eb123d68a2a190114066d",
                    name: "note.png"
                }, {
                    bytes: 1102,
                    md5: "6b8f3a0e532557af511331af47ab62b8",
                    name: "padlockElements/backpack.png"
                }, {
                    bytes: 32079,
                    md5: "b1685a3b4b9cb98e497830239c3f638e",
                    name: "padlockElements/lockarc.png"
                }, {
                    bytes: 6517,
                    md5: "6c79775bb1dbb1f56098c99eb00c3c5e",
                    name: "padlockElements/lockclick0001.png"
                }, {
                    bytes: 4653,
                    md5: "eca27e3f7c682e01fbeca47ccbdff260",
                    name: "padlockElements/lockclick0002.png"
                }, {
                    bytes: 8309,
                    md5: "3b934f4243cc4d597323a1af81e955d7",
                    name: "padlockElements/lockhole.png"
                }, {
                    bytes: 4452,
                    md5: "ea3b465107835885d02ec7513d0e150b",
                    name: "padlockElements/lockhole2.png"
                }, {
                    bytes: 7100,
                    md5: "5559d4241da9bdb158c3fe893c517b65",
                    name: "padlockElements/lockpick.png"
                }, {
                    bytes: 92733,
                    md5: "0462740e205b54d2ee1d36c91003a7aa",
                    name: "padlockElements/padlockbase.png"
                }, {
                    bytes: 9427,
                    md5: "e1aee7656f6d31dc55a0dbb6968fc3ae",
                    name: "padlockElements/padlockZone.png"
                }, {
                    bytes: 8982,
                    md5: "475dd0fd81cd86bf9e14039f7b1e6178",
                    name: "padlockElements/padlockZoneUp.png"
                }, {
                    bytes: 114183,
                    md5: "46811e85637baf10bc47df89f699aedc",
                    name: "rankingScreen/freeVersion.png"
                }, {
                    bytes: 109980,
                    md5: "636fe58d8087a41c35482c130dedc466",
                    name: "rankingScreen/freeVersionShort.png"
                }, {
                    bytes: 7868,
                    md5: "b157b9533f80416b400f2979ef66157f",
                    name: "rankingScreen/googleBtn.png"
                }, {
                    bytes: 7033,
                    md5: "ca30dd03a744d4e158a6627059f80b57",
                    name: "rankingScreen/iosBtn.png"
                }, {
                    bytes: 24363,
                    md5: "a3db8afa37b29391826314f1c98f32b7",
                    name: "RightBackLine.png"
                }, {
                    bytes: 58725,
                    md5: "2476d316969e12b1471b377e8f6ed43b",
                    name: "savePoint/BackSP.png"
                }, {
                    bytes: 6548,
                    md5: "443f8cb6316898d13710f4f255c85c25",
                    name: "savePoint/BtnAd.png"
                }, {
                    bytes: 12624,
                    md5: "b5978e853246adcb68e577a8844231f9",
                    name: "savePoint/BtnBattery.png"
                }, {
                    bytes: 8014,
                    md5: "aadbd22be6305729327a938881897203",
                    name: "savePoint/BtnBatteryGray.png"
                }, {
                    bytes: 17420,
                    md5: "ad5be6da96d3c3096b86791e506d987d",
                    name: "scientistAnim/atlas0.png"
                }, {
                    bytes: 129601,
                    md5: "ebf73e028bc144a40b3b1609fc0945bb",
                    name: "scientistAnim/library.json"
                }, {
                    bytes: 32,
                    md5: "c5cee880ba37ba348cece2c0a2d907a9",
                    name: "scientistAnim/md5"
                }, {
                    bytes: 1,
                    md5: "a1a3456a6af490662dd7608914c0f743",
                    name: "scientistAnim/version"
                }, {
                    bytes: 216600,
                    md5: "ac399dabac551d953b70fbb2029337ce",
                    name: "screens/BackgrndBusted.png"
                }, {
                    bytes: 25851,
                    md5: "7ebe194a2a957f7bdf9b22acfee89de6",
                    name: "screens/BackgrndGadget.png"
                }, {
                    bytes: 217174,
                    md5: "446b6b0585d79435a1e695a1f571e066",
                    name: "screens/BackgrndWellDone.png"
                }, {
                    bytes: 39684,
                    md5: "9707ac4f387e354c71d82b814e242f8a",
                    name: "screens/Busted.png"
                }, {
                    bytes: 22367,
                    md5: "c8ee89ddcec4e802f87228e3c0b107e9",
                    name: "screens/GadgetPlace.png"
                }, {
                    bytes: 21132,
                    md5: "b79ee70c534470fbd95ba166d54e4785",
                    name: "screens/hackerkit.png"
                }, {
                    bytes: 18563,
                    md5: "12ea841d238cf0b321ed45419a19387b",
                    name: "screens/lockpick.png"
                }, {
                    bytes: 101357,
                    md5: "7b8e28b37573fe6d2e2782ece51ad77f",
                    name: "screens/NewGadget.png"
                }, {
                    bytes: 28270,
                    md5: "f1d6818b53c5f18e5ff50e3cf286092b",
                    name: "screens/nippers.png"
                }, {
                    bytes: 36729,
                    md5: "8769a60e95b05741322f994f06a600d2",
                    name: "screens/Paused.png"
                }, {
                    bytes: 12009,
                    md5: "ce62344c36fd397c5d987cae344cead0",
                    name: "screens/setbox.png"
                }, {
                    bytes: 24221,
                    md5: "b94d6775a273a5d36074f8aea7999e9b",
                    name: "screens/shocker.png"
                }, {
                    bytes: 37570,
                    md5: "d1015e3d89b49ebeb4127061d2cb19b1",
                    name: "screens/WellDone.png"
                }, {
                    bytes: 6462,
                    md5: "12980157df6d80c1dfeae96d92f834d1",
                    name: "screens/WinStar.png"
                }, {
                    bytes: 7670,
                    md5: "0afe7dfe29d0d8c8b838623e5cc03f8f",
                    name: "screens/WinStarFull.png"
                }, {
                    bytes: 5196,
                    md5: "b532ca82a534804ba909c6de8e76eb0f",
                    name: "Shadows1.png"
                }, {
                    bytes: 4438,
                    md5: "1a77a0bc3e39d6ab14bc8a95989cf5d4",
                    name: "Shadows2.png"
                }, {
                    bytes: 40161,
                    md5: "39ca16188bcb72bf398844374abf5bd7",
                    name: "sounds/alarm.mp3"
                }, {
                    bytes: 5889,
                    md5: "8bde16c79ea37f595a13384fc3e1f30f",
                    name: "sounds/alert1.mp3"
                }, {
                    bytes: 11740,
                    md5: "1420416d2fcd663d03a1811303df23fc",
                    name: "sounds/alert2.mp3"
                }, {
                    bytes: 19686,
                    md5: "7e4c614bcea38f02f5a92b6f4ee03660",
                    name: "sounds/bob_busted.mp3"
                }, {
                    bytes: 9240,
                    md5: "827af112976f9419ac55decd91143159",
                    name: "sounds/bob_footsteps.mp3"
                }, {
                    bytes: 12588,
                    md5: "ca7a4019b897d12b71930e313cc1db77",
                    name: "sounds/bob_level_complete.mp3"
                }, {
                    bytes: 9667,
                    md5: "76243cfc024be0e7c3312d04cf6057ed",
                    name: "sounds/bob_level_complete_var.mp3"
                }, {
                    bytes: 31812,
                    md5: "0b76c331439a6923ba5a179191dbeccf",
                    name: "sounds/bob_looks_around.mp3"
                }, {
                    bytes: 7151,
                    md5: "fb3324da79b98fd21e279e2de4f9649c",
                    name: "sounds/bob_punch_var.mp3"
                }, {
                    bytes: 11745,
                    md5: "45584bf74bfd646ffcb7d418a0a45198",
                    name: "sounds/bob_shadow.mp3"
                }, {
                    bytes: 10909,
                    md5: "d433d7e466577883acf1acd3a288277e",
                    name: "sounds/body_fall.mp3"
                }, {
                    bytes: 142570,
                    md5: "a3fded474ecb0a8ced13db43437f383d",
                    name: "sounds/boss_tv_voice1.mp3"
                }, {
                    bytes: 20940,
                    md5: "c6a5c2ce069ccc1a0daad67fb0ca54fd",
                    name: "sounds/box_cover.mp3"
                }, {
                    bytes: 7568,
                    md5: "7efdc9c87bb0767dd1642ba82116eab4",
                    name: "sounds/button_click.mp3"
                }, {
                    bytes: 2556,
                    md5: "69643fe389fab85fc8c119fe6cccd372",
                    name: "sounds/code_button_push.mp3"
                }, {
                    bytes: 7984,
                    md5: "8cacdce7effb6dc69c26b8bffbe76d0b",
                    name: "sounds/code_error.mp3"
                }, {
                    bytes: 38494,
                    md5: "d45834821ff9fd88877f505bf2119cac",
                    name: "sounds/code_open.mp3"
                }, {
                    bytes: 4640,
                    md5: "937fae7545619e0d57f7734c930494ff",
                    name: "sounds/code_panel.mp3"
                }, {
                    bytes: 76531,
                    md5: "3e43ef9a1722d4cffc37767674cea963",
                    name: "sounds/comix_final1.mp3"
                }, {
                    bytes: 32645,
                    md5: "e5bb84d662c94566240932b8c181601e",
                    name: "sounds/comix_final2.mp3"
                }, {
                    bytes: 33481,
                    md5: "013d29f6edb6312fb62ac6a2f1620896",
                    name: "sounds/comix_final3.mp3"
                }, {
                    bytes: 80665,
                    md5: "7a2cc290cab333473ac978f78ed449e4",
                    name: "sounds/comix_final4.mp3"
                }, {
                    bytes: 51872,
                    md5: "007fccd2793e9fc7cf22bd2030fe9868",
                    name: "sounds/comix_start1.mp3"
                }, {
                    bytes: 46438,
                    md5: "6388ce702f65a5cec486c9e722925476",
                    name: "sounds/comix_start2.mp3"
                }, {
                    bytes: 28468,
                    md5: "24fe181a5cf1139bc2c9107d0ecfad56",
                    name: "sounds/comix_start2_1.mp3"
                }, {
                    bytes: 40587,
                    md5: "0c076a1af828cec20e1967f36707e7aa",
                    name: "sounds/comix_start3.mp3"
                }, {
                    bytes: 46020,
                    md5: "f97df2fcadf74147354986e8c4195746",
                    name: "sounds/comix_start4.mp3"
                }, {
                    bytes: 27630,
                    md5: "11556c0d3768e7677102307c5101ffce",
                    name: "sounds/comix_start5.mp3"
                }, {
                    bytes: 51874,
                    md5: "6c1c4c9f52181992e72bb96171d2fe60",
                    name: "sounds/comix_start5_1.mp3"
                }, {
                    bytes: 48528,
                    md5: "a35697f39709d2dbba9d6a70c193c237",
                    name: "sounds/comix_start6.mp3"
                }, {
                    bytes: 5481,
                    md5: "f50a0d3b347a83765c8f77a93da5f0e3",
                    name: "sounds/computer_cursor.mp3"
                }, {
                    bytes: 37662,
                    md5: "18d754c16a9c355b96e720330217ae71",
                    name: "sounds/computer_load.mp3"
                }, {
                    bytes: 46,
                    md5: "024dab6ccb03ea86a47a0a99439bd083",
                    name: "sounds/desktop.ini"
                }, {
                    bytes: 22612,
                    md5: "4a29273147cff4bd84604a07b30332b3",
                    name: "sounds/dog_attack.mp3"
                }, {
                    bytes: 4642,
                    md5: "7aa215a3e7c122a6f4856b7e5e1c25df",
                    name: "sounds/dog_barking1.mp3"
                }, {
                    bytes: 4642,
                    md5: "ed03de43522b5061977326a608bc0f02",
                    name: "sounds/dog_barking2.mp3"
                }, {
                    bytes: 11756,
                    md5: "3bb7c994f566557d613cced099b86fa9",
                    name: "sounds/electric_cabinet_open.mp3"
                }, {
                    bytes: 33902,
                    md5: "215bfda125a63135284b35c3fc8fd673",
                    name: "sounds/electro_shocker.mp3"
                }, {
                    bytes: 7988,
                    md5: "cb059f1605c5f2ec7108ec254bc4413b",
                    name: "sounds/elevator_button.mp3"
                }, {
                    bytes: 16347,
                    md5: "b19f52500eb95655e635eb881c122ccb",
                    name: "sounds/elevator_close.mp3"
                }, {
                    bytes: 27631,
                    md5: "fc6ea4169b30772295f93a94bffc9413",
                    name: "sounds/elevator_open.mp3"
                }, {
                    bytes: 20528,
                    md5: "d040fab9fb071703b15e25add827099c",
                    name: "sounds/final_door_close.mp3"
                }, {
                    bytes: 33483,
                    md5: "c3b58e4575900aa86ff2f7bb1373f1d5",
                    name: "sounds/final_door_open.mp3"
                }, {
                    bytes: 25121,
                    md5: "5b1086326d8b3ea41a1f5e5a7f57de5a",
                    name: "sounds/get_battery.mp3"
                }, {
                    bytes: 23876,
                    md5: "7eb9b41fd59a41aeba60c1f3302624c5",
                    name: "sounds/hacker_toolkit_error.mp3"
                }, {
                    bytes: 36413,
                    md5: "369c852aceeb3a0942ffa61dd318a2bf",
                    name: "sounds/hacker_toolkit_win.mp3"
                }, {
                    bytes: 41425,
                    md5: "61795f7c4ccefc7600f8457d536c7c60",
                    name: "sounds/level_complete.mp3"
                }, {
                    bytes: 25538,
                    md5: "d649e804508a09a2d4cb0c840814cd96",
                    name: "sounds/lock_error.mp3"
                }, {
                    bytes: 32228,
                    md5: "cb135164cbad81cfcf429af1b1244389",
                    name: "sounds/lock_unlocked.mp3"
                }, {
                    bytes: 24285,
                    md5: "9becfacdcd74332a96af18edcb1e1114",
                    name: "sounds/mummy_angry.mp3"
                }, {
                    bytes: 38497,
                    md5: "0ead20958705f32e8c98d06b1e7f81c9",
                    name: "sounds/mummy_attack.mp3"
                }, {
                    bytes: 17184,
                    md5: "f2dbcb8396958208d8d1e5a6f30ef50b",
                    name: "sounds/mummy_footsteps.mp3"
                }, {
                    bytes: 18433,
                    md5: "9b29ffbd6f726a38210507894e9f391d",
                    name: "sounds/mummy_idle.mp3"
                }, {
                    bytes: 7983,
                    md5: "c521c4758bcc5430bc6760412c8e2d75",
                    name: "sounds/mummy_run.mp3"
                }, {
                    bytes: 34733,
                    md5: "6406b457656091ab0232ed0735cf618e",
                    name: "sounds/new_gadget.mp3"
                }, {
                    bytes: 8821,
                    md5: "5f4e94e4785ff4b9ebd4898dadd3a618",
                    name: "sounds/nippers_cut.mp3"
                }, {
                    bytes: 5060,
                    md5: "952c245a3f64fb7996f4bf639193b12b",
                    name: "sounds/nippers_move.mp3"
                }, {
                    bytes: 10910,
                    md5: "33949538c1640013370b4f69ad9d2749",
                    name: "sounds/open_paper.mp3"
                }, {
                    bytes: 44342,
                    md5: "89526cfd45ca76d4ed217ce2c6502739",
                    name: "sounds/scaner.mp3"
                }, {
                    bytes: 20531,
                    md5: "f4a09d058d6790d99a2fa1fb65c22d6f",
                    name: "sounds/security_footsteps.mp3"
                }, {
                    bytes: 12170,
                    md5: "6c51732cb585c8bf5a49144afff06fb1",
                    name: "sounds/soldier_footsteps.mp3"
                }, {
                    bytes: 25122,
                    md5: "2190b9e4ea0ee73c12b579b5631727ea",
                    name: "sounds/soldier_idle.mp3"
                }, {
                    bytes: 27631,
                    md5: "7f21856cf90d611e4ff7ba45d1ac605f",
                    name: "sounds/soldier_radio.mp3"
                }, {
                    bytes: 21771,
                    md5: "417a274c79fb6e43adf546e80db87ff6",
                    name: "sounds/star1.mp3"
                }, {
                    bytes: 21771,
                    md5: "2a94b3edb1aeb78617431d67b006116c",
                    name: "sounds/star2.mp3"
                }, {
                    bytes: 20935,
                    md5: "3d185f1b54f02b03bc9409add7fdacf5",
                    name: "sounds/star3.mp3"
                }, {
                    bytes: 3854,
                    md5: "101ec1db92dd3bda863d6f2bb3ea3a00",
                    name: "StairDown.png"
                }, {
                    bytes: 1568,
                    md5: "c408fdfb7594d201394804bd938122b3",
                    name: "StairUp.png"
                }, {
                    bytes: 24275,
                    md5: "d8a70dc407c277e43e54191aef63d77c",
                    name: "tutorial/tip1.png"
                }, {
                    bytes: 46965,
                    md5: "eaaa1f37d1c479bf8ad4f5a3d1592b39",
                    name: "tutorial/tip10.png"
                }, {
                    bytes: 16030,
                    md5: "de25d79d4db5f3abbc9dc7b89502b64c",
                    name: "tutorial/tip2.png"
                }, {
                    bytes: 11455,
                    md5: "64d3c1ca8c2f14481bad78373b04bd2a",
                    name: "tutorial/tip3.png"
                }, {
                    bytes: 68278,
                    md5: "ddccff56314415056c38188ef435c3c1",
                    name: "tutorial/tip4.png"
                }, {
                    bytes: 20263,
                    md5: "761c1dc70ac445731c07b10d34529a02",
                    name: "tutorial/tip5.png"
                }, {
                    bytes: 27162,
                    md5: "7a4c7683c0a7f553697414906a523a31",
                    name: "tutorial/tip6.png"
                }, {
                    bytes: 42303,
                    md5: "10db280ae0cc15d3052103efc738ffb7",
                    name: "tutorial/tip7.png"
                }, {
                    bytes: 45024,
                    md5: "d7db2ec26017fa6830aed326da582871",
                    name: "tutorial/tip8.png"
                }, {
                    bytes: 44485,
                    md5: "d72eb9bfde8a40df0c860c981a228cc5",
                    name: "tutorial/tip9.png"
                }, {
                    bytes: 8240,
                    md5: "efec7ba9249bf1a2d614febdf7864033",
                    name: "wiresPanel/BtnArrow.png"
                }, {
                    bytes: 7922,
                    md5: "9e4dc3203b82109956f7db1615321553",
                    name: "wiresPanel/BtnArrow2.png"
                }, {
                    bytes: 10142,
                    md5: "b5c672641ff35f80e99a64d0dba1cd43",
                    name: "wiresPanel/BtnNippers.png"
                }, {
                    bytes: 14376,
                    md5: "56146f332bba2e672181fb36f7f1e986",
                    name: "wiresPanel/nippersClose.png"
                }, {
                    bytes: 13910,
                    md5: "10dfd575ef6a7f0487b25ed2b1386f05",
                    name: "wiresPanel/nippersOpen.png"
                }, {
                    bytes: 1487,
                    md5: "cb3f6c89fd7c97032635e0bc9a3fcd04",
                    name: "wiresPanel/wireblue0001.png"
                }, {
                    bytes: 3733,
                    md5: "532230534400c938b7480429ea0edb2f",
                    name: "wiresPanel/wireblue0002.png"
                }, {
                    bytes: 1475,
                    md5: "c232823943ac21416c1079a4e5743627",
                    name: "wiresPanel/wiregreen0001.png"
                }, {
                    bytes: 3602,
                    md5: "ee0ed0a07463812a6eeeac9aa039c0d1",
                    name: "wiresPanel/wiregreen0002.png"
                }, {
                    bytes: 1685,
                    md5: "4e2af42b696b0b27220ad8b8b407cd7f",
                    name: "wiresPanel/wireorange0001.png"
                }, {
                    bytes: 3708,
                    md5: "9a92814b98d59f331d170c993e0a5b5e",
                    name: "wiresPanel/wireorange0002.png"
                }, {
                    bytes: 2364,
                    md5: "d428ce99a87aed505544ce0ed52e847c",
                    name: "wiresPanel/wires0001.png"
                }, {
                    bytes: 2534,
                    md5: "94c37664cb352e07785df6df1891f3c3",
                    name: "wiresPanel/wires0002.png"
                }, {
                    bytes: 2471,
                    md5: "2f3ab1c17a1d3fa41266563cdf95b416",
                    name: "wiresPanel/wires0003.png"
                }, {
                    bytes: 2471,
                    md5: "4b537c872975cdea658f338d74d49d80",
                    name: "wiresPanel/wires0004.png"
                }, {
                    bytes: 2266,
                    md5: "c4186486c6f8881fa7a15aadc099837f",
                    name: "wiresPanel/wires0005.png"
                }, {
                    bytes: 2041,
                    md5: "22b63d756c011309200b0dab6b0a39d7",
                    name: "wiresPanel/wires0006.png"
                }, {
                    bytes: 1565,
                    md5: "f2659d25200bef55b7830a9a814238d9",
                    name: "wiresPanel/wires0007.png"
                }, {
                    bytes: 1471,
                    md5: "b42995b85f2d8ed0269f1f2b3011ee97",
                    name: "wiresPanel/wires0008.png"
                }, {
                    bytes: 3899,
                    md5: "7f0d3ba6fe7e382944f3c5472bacd54a",
                    name: "wiresPanel/wireSignalEnd0001.png"
                }, {
                    bytes: 3387,
                    md5: "9a7a5e7e30dd3c4c501b3d1903d42197",
                    name: "wiresPanel/wireSignalEnd0002.png"
                }, {
                    bytes: 181716,
                    md5: "d283d5e518c1e53b9aac6aee2082edd7",
                    name: "wiresPanel/wirespanel.png"
                }]
            }]
        }
    };
    O._supportsCrossOrigin = function() {
        var a;
        a = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
        a || null;
        return a
    }();
    q._scratchPoint = new Yb;
    Z.NEWLINE = new $b(10);
    X._sharedEvent = new Hc;
    R._sharedEvent = new Ic;
    Ka.CANVAS_TEXTURES = (new P("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    C._mediaRefCount = 0;
    C._detectBlobSupport = !0;
    y.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    y.SHOULD_HIDE_MOBILE_BROWSER =
        window.top == window && (new P("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent);
    D._detectSupport = !0;
    ha.USE_CACHE = !1;
    ha.USE_ENUM_INDEX = !1;
    ha.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Q.DEFAULT_RESOLVER = F;
    Q.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Ea.count = 0;
    la.i64tmp = new Wc(0, 0);
    va.escapes = function() {
        var a = new L;
        null != ka.lt ? a.setReserved("lt", "<") : a.h.lt = "<";
        null != ka.gt ? a.setReserved("gt", ">") : a.h.gt = ">";
        null != ka.amp ? a.setReserved("amp",
            "&") : a.h.amp = "&";
        null != ka.quot ? a.setReserved("quot", '"') : a.h.quot = '"';
        null != ka.apos ? a.setReserved("apos", "'") : a.h.apos = "'";
        return a
    }(this);
    B.__toStr = {}.toString;
    ya.BYTES_PER_ELEMENT = 1;
    jd.main()
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);