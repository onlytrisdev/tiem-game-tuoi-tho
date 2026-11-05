//--------------------------------------------------------------------------------------------------------------------------------------------------------

var g_action = null;
var ActionLayer = cc.Layer.extend({
    lizards: null,
    masks: null,
    character: null,
    easterEggs: null,
    puffs: null,

    spawnTimer: null,

    touchListener: null,

    ctor: function() {
        this._super();

        g_action = this;

        this.setCascadeColorEnabled(true);

        var stage = gg.gameplay.stage;

        // Background
        var background = new cc.Sprite("res/gameScreen_" + stage + ".png");
        background.setPosition(gg.anchor.center);
        this.addChild(background, 0);

        // Lizards
        var lizardBatchNode = new cc.SpriteBatchNode("res/anim.png");
        lizardBatchNode.setCascadeColorEnabled(true);
        var lizardBatchNodeZ = 2;
        if (gg.useNinjaPositioningTool)
            lizardBatchNodeZ = 5;
        this.addChild(lizardBatchNode, lizardBatchNodeZ);

        var lizardBatchNodeTop = new cc.SpriteBatchNode("res/anim.png");
        lizardBatchNodeTop.setCascadeColorEnabled(true);
        this.addChild(lizardBatchNodeTop, 4);

        this.lizards = [];
        for (var i = 0; i < sd[stage].lizards.length; i++) {
            var lizardData = sd[stage].lizards[i];
            var lizard = null;
            switch (lizardData.type) {
                case gg.lizard.type.holezard:
                    lizard = new Holezard(lizardData, i);
                    break;
                case gg.lizard.type.groundzard:
                    lizard = new Groundzard(lizardData, i);
                    break;
            }
            var newScale = lizardData.scale;
            if (newScale == undefined)
                newScale = 1;
            lizard.scale = newScale;

            if (!gg.useNinjaPositioningTool)
                lizard.hide();

            this.lizards.push(lizard);
            if (lizardData.skin == 0 || lizardData.skin == 2)
                lizardBatchNodeTop.addChild(lizard);
            else
                lizardBatchNode.addChild(lizard);
        }

        // Masks
        var maskBatchNode = new cc.SpriteBatchNode("res/mask.png");
        maskBatchNode.setCascadeColorEnabled(true);
        this.addChild(maskBatchNode, 3);

        this.masks = [];
        for (var i = 0; i < sd[stage].masks.length; i++) {
            var index = i;
            if (sd[stage].masks[i].index != undefined)
                index = sd[stage].masks[i].index;
            var mask = new Mask(stage, index, sd[stage].masks[i]);
            this.masks.push(mask);
            maskBatchNode.addChild(mask);
        }

        // Character
        this.character = new Character(stage, sd[stage].character);
        this.addChild(this.character);
        if (stage == 2) // Special case where ninja can appear in front of bunny
            this.character.setLocalZOrder(1);
        else
            this.character.setLocalZOrder(4);

        // Easter Egg
        this.easterEggs = [];
        switch (stage) {
            case 0:
                var stand = new Stand();
                stand.setPosition(gg.screen.center.x - 250, gg.screen.center.y - 100);
                this.easterEggs.push(stand);

                var horn = new Horn();
                horn.setPosition(gg.screen.center.x - 100, gg.screen.center.y - 200);
                this.easterEggs.push(horn);
                break;
            case 1:
                var mushroom = new Mushroom();
                mushroom.setPosition(1150, 100);
                this.easterEggs.push(mushroom);

                var leaves = new Leaves();
                leaves.setPosition(534, 67);
                this.easterEggs.push(leaves);
                break;
            case 2:
                var bucket = new PaintBucket();
                bucket.setPosition(1120, 100);
                this.easterEggs.push(bucket);

                var tube = new PaintTube();
                tube.setPosition(150, 30);
                this.easterEggs.push(tube);
                break;
        }

        for (var i in this.easterEggs) {
            this.easterEggs[i].updateCollideRect();
            this.addChild(this.easterEggs[i], 4);
        }
    },

    init: function() {

        this.character.idle();

        this.spawnTimer = 0;
    },

    addTouchListener: function() {
        // Event Manager
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan
        }, this);
    },

    onTouchBegan: function(touch, event) {
        var target = event.getCurrentTarget();

        target.touchOnEasterEgg(touch.getLocation());
        if (gg.useMaskPositioningTool)
            target.positionMask(touch.getLocation(), gg.maskIndexToPosition);

        if (gg.useNinjaPositioningTool)
            target.positionNinja(touch.getLocation());

        // debug mask blocking
        if (target.touchOnMask(touch.getLocation())) {
            return;
        }

        target.touchOnLizard(touch.getLocation());

        return true;
    },

    positionMask: function(touchPos, index) {
        if (index >= this.masks.length || index < 0) {
            cc.log("Invalid mask index");
            return;
        }
        cc.log(touchPos);
        this.masks[index].setPosition(touchPos);
    },

    positionNinja: function(touchPos) {
        cc.log(touchPos);
        this.lizards[0].setPosition(touchPos);
    },

    touchOnEasterEgg: function(touchPos) {
        for (var i in this.easterEggs) {
            var easterEgg = this.easterEggs[i];
            if (easterEgg.active && cc.rectContainsPoint(easterEgg.collideRect, touchPos)) {
                easterEgg.trigger();
            }
        }
    },

    touchOnMask: function(touchPos) {
        for (var i in this.masks) {
            var mask = this.masks[i];
            if (cc.rectContainsPoint(mask.collideRect, touchPos)) {
                return true;
            }
        }

        return false;
    },

    touchOnLizard: function(touchPos) {
        for (var i in this.lizards) {
            var lizard = this.lizards[i];
            if (lizard.active && cc.rectContainsPoint(lizard.collideRect(), touchPos)) {
                lizard.hitAnimation();
                lizard.stopSFX();

                g_gameplay.increaseCounter();

                gg.gameplay.totalCounter++;

                cc.audioEngine.playEffect("res/sfx/SFX_Ninja_FoundPoof.mp3");

                return;
            }
        }
    },

    spawnLizard: function() {
        var spawnCount = gg.gameplay.spawnCounts[g_gameplay.dayTimer <= gg.gameplay.day.half ? 0 : 1];
        for (var i = 0; i < spawnCount; i++) {
            var lizard = null;
            do {
                var random = Tools.random(0, sd[gg.gameplay.stage].lizards.length - 1);
                //random = 0; // debug random lizard
                lizard = this.lizards[random];
            } while (lizard.active);

            lizard.spawn();
        }
    },

    catchLizard: function(lizard) {
        lizard.hit();
        g_gameplay.increaseCounter();
    },

    createPuff: function(pos) {
        for (var i in this.puffs) {
            var puff = this.puffs[i];
            if (!puff.active) {
                puff.setPosition(pos);
                puff.show();
                return;
            }
        }
    },

    update: function(dt) {
        // Spawn Timer
        if (this.spawnTimer < 3) {
            this.spawnTimer += dt;
        } else {
            this.spawnTimer = 0;
            if (!gg.useNinjaPositioningTool)
                this.spawnLizard();
        }

        // Lizards
        for (var i in this.lizards) {
            var lizard = this.lizards[i];
            if (lizard.active) {
                lizard.update(dt);
            }
        }
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var g_hud = null;
var HudLayer = cc.Layer.extend({
    balloon: null,
    balloonLabel: null,
    counterLabel: null,
    dayLabel: null,
    timerFill: null,

    ctor: function() {
        this._super();

        g_hud = this;

        this.balloon = new Balloon("#ui_preBubble_1.png");
        this.balloon.setPosition(sd[gg.gameplay.stage].balloon.pos);
        this.balloon.setFlippedX(sd[gg.gameplay.stage].balloon.flipped);
        this.balloon.setScale(this.balloon.targetScale);
        this.balloon.visible = false;
        this.addChild(this.balloon);

        this.balloonLabel = new BalloonLabel("", 0.8, this.balloon.width - 70);
        this.balloonLabel.setPosition(this.balloon.width / 2, this.balloon.height / 2 + 30);
        this.balloon.addChild(this.balloonLabel);

        var counterPanel = new cc.Sprite("#ui_score.png");
        counterPanel.setAnchorPoint(0, 1);
        counterPanel.setPosition(40, gg.screen.height - 20);
        this.addChild(counterPanel);

        var dayPanel = new cc.Sprite("#ui_day.png");
        dayPanel.setAnchorPoint(1, 1);
        dayPanel.setPosition(counterPanel.width - 30, 5);
        counterPanel.addChild(dayPanel);

        this.counterLabel = new cc.LabelBMFont("99/99", res.score0_fnt);
        this.counterLabel.setScale(2);
        this.counterLabel.setPosition(counterPanel.width / 2 + 50, counterPanel.height / 2 + 47);
        this.counterLabel.setColor(cc.color(255, 191, 0));
        counterPanel.addChild(this.counterLabel);

        var dayLabel = new cc.LabelBMFont(gg.gameplay.level + "", res.score1_fnt);
        dayLabel.setColor(cc.color(255, 255, 255));
        dayLabel.setPosition(dayPanel.width - 40, dayPanel.height / 2 + 36);
        dayLabel.setScale(1.4);
        dayPanel.addChild(dayLabel);

        var timerBg = new cc.Sprite("#ui_barBase.png");
        timerBg.setPosition(gg.screen.center.x, 708);
        this.addChild(timerBg);

        this.timerFill = new ccui.LoadingBar();
        this.timerFill.loadTexture("ui_barFill.png", ccui.Widget.PLIST_TEXTURE);
        this.timerFill.setPosition(timerBg.x - 5, timerBg.y - 5);
        this.addChild(this.timerFill);

        if (gg.showMaskRects) {
            var drawNode = cc.DrawNode.create();
            var curStage = gg.gameplay.stage;

            for (var i = 0; i < sd[curStage].masks.length; i++) {
                var curMaskRect = sd[curStage].masks[i].rect;
                drawNode.drawRect(
                    cc.p(curMaskRect.x, curMaskRect.y),
                    cc.p(curMaskRect.x + curMaskRect.width, curMaskRect.y + curMaskRect.height),
                    cc.color(196, 30, 30, 128), 0
                );

                var curMask = g_action.masks[i].boundingBox();
                cc.log(curMask);
                drawNode.drawRect(
                    cc.p(curMask.x, curMask.y),
                    cc.p(curMask.x + curMask.width, curMask.y + curMask.height),
                    cc.color(30, 30, 196, 128), 0
                );
            }

            this.addChild(drawNode);
        }
    },

    init: function() {
        this.updateCounter();
        this.updateTimer();
    },

    updateCounter: function() {
        this.counterLabel.setString(g_gameplay.counter + "/" + gg.gameplay.goal);
    },

    updateTimer: function() {
        this.timerFill.setPercent((g_gameplay.dayTimer / 60) * 100);
    },

    goalReached: function() {
        this.counterLabel.setColor(cc.color(255, 200, 0));
        this.cheer();
    },

    cheer: function() {
        var index = Tools.random(0, sd[gg.gameplay.stage].cheerDialog.length - 1);
        this.balloonLabel.setString(sd[gg.gameplay.stage].cheerDialog[index]);
        this.runAction(cc.sequence(
            cc.callFunc(this.balloon.show, this.balloon),
            cc.delayTime(2),
            cc.callFunc(this.balloon.hide, this.balloon)
        ));
    },

    nag: function() {
        var index = Tools.random(0, sd[gg.gameplay.stage].nagDialog.length - 1);
        this.balloonLabel.setString(sd[gg.gameplay.stage].nagDialog[index]);
        this.runAction(cc.sequence(
            cc.callFunc(this.balloon.show, this.balloon),
            cc.delayTime(2),
            cc.callFunc(this.balloon.hide, this.balloon)
        ));
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var g_gameplay = null;
var GameplayScene = cc.Scene.extend({
    counter: null,
    spawnTimer: null,
    dayTimer: null,
    nearEndReached: null,

    onEnter: function() {
        this._super();

        g_gameplay = this;

        this.addChild(new ActionLayer());
        this.addChild(new HudLayer());
        if (gg.gameplay.isFirstLevel)
            this.addChild(new IntroLayer());
        else
            this.runAction(cc.sequence(
                cc.delayTime(1),
                cc.callFunc(this.startLevel, this)
            ));

        this.init();
    },

    init: function() {
        this.counter = 0;
        this.spawnTimer = 0;
        this.dayTimer = 0;
        this.nearEndReached = false;

        g_action.init();
        g_hud.init();
    },

    startLevel: function() {
        this.scheduleUpdate();

        g_action.runAction(cc.tintTo(60, gg.gameplay.tint.night.r, gg.gameplay.tint.night.g, gg.gameplay.tint.night.b).easing(cc.easeSineIn()));

        g_action.addTouchListener();
    },

    increaseCounter: function() {
        this.counter++;
        if (this.counter === gg.gameplay.goal) {
            this.goalReached();
        } else if (this.counter === Math.ceil(gg.gameplay.goal * 0.25) ||
            this.counter === Math.ceil(gg.gameplay.goal * 0.5) ||
            this.counter === Math.ceil(gg.gameplay.goal * 0.75)) {
            g_action.character.cheer();
            g_hud.cheer();
        }
        g_hud.updateCounter();
    },

    goalReached: function() {
        g_action.character.goalReached();
        g_hud.goalReached();
    },

    endDay: function() {
        this.unscheduleUpdate();

        if (this.counter >= gg.gameplay.goal) {
            this.levelSuccessful();
        } else {
            this.levelFailed();
        }
    },

    levelSuccessful: function() {
        gg.gameplay.level++;

        gg.gameplay.stage = (gg.gameplay.level - 1) % 3;

        if (gg.gameplay.stage === 0 && gg.gameplay.spawnCounts[gg.gameplay.spawnCountIndex] < gg.gameplay.maxSpawn) {
            gg.gameplay.spawnCounts[gg.gameplay.spawnCountIndex]++;
        }

        gg.gameplay.spawnCountIndex ^= 1;

        if (gg.gameplay.goal < gg.gameplay.maxGoal) {
            gg.gameplay.goal += gg.gameplay.stage === 2 ? 3 : 2;
        }

        cc.director.runScene(new cc.TransitionFade(1.0, new TransitionScene()));
    },

    levelFailed: function() {
        cc.director.runScene(new cc.TransitionFade(1.0, new ResultsScene()));
    },

    update: function(dt) {
        // Timer
        if (this.dayTimer < gg.gameplay.day.full) {
            if (!gg.useNinjaPositioningTool)
                this.dayTimer += dt;
            if (!this.nearEndReached &&
                this.dayTimer >= gg.gameplay.day.nearEnd &&
                this.counter < gg.gameplay.goal) {
                this.nearEndReached = true;
                g_action.character.nag();
                g_hud.nag();
            }
            g_hud.updateTimer();
        } else {
            this.endDay();
        }

        // Action Layer
        g_action.update(dt);
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------