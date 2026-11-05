//--------------------------------------------------------------------------------------------------------------------------------------------------------

//SKIN NOTE:
//	0 - Camo
//	1 - Hide/Peek
//	2 - Teleporting
//	3 - Running

var Lizard = cc.Sprite.extend({
    active: null,
    skin: null,
    colliderSize: null,
    idleAnim: null,
    hitAnim: null,
    index: null,

    ctor: function(skin, index) {

        this.index = index;
        this.skin = skin;
        switch (skin) {
            case 0:
                this._super("#anim_ninjaCamo_0.png");
                this.idleAnim = Tools.createFrameAnim("anim_ninjaCamo", 18);
                this.hitAnim = Tools.createFrameAnim("anim_ninjaHit", 24);
                break;
            case 1:
                this._super("#anim_ninjaHide_0.png");
                this.idleAnim = Tools.createFrameAnim("anim_ninjaHide", 12);
                this.hitAnim = Tools.createFrameAnim("anim_ninjaHideHit", 24);
                break;
            case 2:
                this._super("#anim_ninjaTele_0.png");
                this.idleAnim = Tools.createFrameAnim("anim_ninjaTele", 15, 0, 12);
                this.hitAnim = Tools.createFrameAnim("anim_ninjaTeleHit", 24);
                break;
            case 3:
                this._super("#anim_ninjaRun_0.png");
                this.idleAnim = Tools.createFrameAnim("anim_ninjaRun", 24);
                this.hitAnim = Tools.createFrameAnim("anim_ninjaRunHit", 24);
                break;
        }
    },

    hitAnimation: function() {
        this.stopAllActions();
        this.active = false;
        this.runAction(cc.sequence(this.hitAnim, cc.callFunc(this.hide, this)));
    },

    hide: function() {
        this.stopAllActions();
        this.active = false;
        this.visible = false;
    },

    collideRect: function() {
        return cc.rect(this.x - (this.colliderSize.width / 2), this.y - (this.colliderSize.height / 2), this.colliderSize.width, this.colliderSize.height);
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

//used for teleporting, camo and peeking ninjas
var Holezard = function(data, index) {
    Lizard.call(this, data.skin, index);
    this.direction = data.direction;
    this.smokeFX = null;

    if (data.skin == 1) {
        this.setPosition(data.pos[0]);
    } else {
        this.setPosition(data.pos);
    }

    if (data.skin == 2) {
        this.smokeFX = cc.Sprite.create("#fx_smokeScreen_0.png");
        this.smokeFX.setPosition(this.x, this.y);
        g_action.addChild(this.smokeFX, 10);
        this.smokeFX.visible = false;
    }

    if (data.flipX != undefined && data.flipX)
        this.setFlippedX(true);
    else
        this.setFlippedX(data.direction.x < 0);

    if (data.flipY != undefined && data.flipY)
        this.setFlippedY(true);

    if (this.direction.y != 0) {
        var angleR = Tools.getAngle(cc.p(0, 0), this.direction);
        var angleD = Tools.degrees(angleR);

        this.setRotation(angleD);
    }

    this.colliderSize = cc.size(this.width * this.scaleX, this.height * this.scaleY);
};
Holezard.prototype = Object.create(Lizard.prototype);
Holezard.prototype.constructor = Holezard;
Holezard.prototype.spawn = function() {
    this.active = true;

    this.stopAllActions();
    if (this.skin == 1) {
        this.setPosition(sd[gg.gameplay.stage].lizards[this.index].pos[0]);
        this.runAction(this.idleAnim.repeatForever());
    } else if (this.skin == 2) {
        this.playSmokeAnimation();
        cc.audioEngine.playEffect("res/sfx/SFX_Ninja_Poof.mp3");
    }
    this.idle();

    cc.audioEngine.playEffect("res/sfx/SFx_Ninja_appear.mp3");
};

Holezard.prototype.stopSFX = function() {};

Holezard.prototype.idle = function() {
    if (this.skin == 1) {
        this.show();
        this.runAction(cc.sequence(
            cc.moveTo(0.2, sd[gg.gameplay.stage].lizards[this.index].pos[1].x, sd[gg.gameplay.stage].lizards[this.index].pos[1].y),
            cc.delayTime(0.65),
            cc.moveTo(0.2, sd[gg.gameplay.stage].lizards[this.index].pos[0].x, sd[gg.gameplay.stage].lizards[this.index].pos[0].y),
            cc.callFunc(this.despawn, this)
        ));
    } else {
        this.stopAllActions();
        this.runAction(cc.sequence(cc.delayTime(0.25), cc.callFunc(this.show, this), this.idleAnim, cc.callFunc(this.despawn, this)));
    }
};
Holezard.prototype.despawn = function() {
    this.stopAllActions();
    if (this.skin == 2) {
        this.playSmokeAnimation();
        cc.audioEngine.playEffect("res/sfx/SFX_Ninja_Poof.mp3");
    }
    this.hide();
    cc.audioEngine.playEffect("res/sfx/SFx_Ninja_appear.mp3");
};

Holezard.prototype.show = function() {
    this.visible = true;
};

Holezard.prototype.playSmokeAnimation = function() {
    var smokeFX = this.smokeFX;
    smokeFX.visible = true;
    smokeFX.setSpriteFrame("fx_smokeScreen_0.png");
    smokeFX.runAction(cc.sequence(
        Tools.createFrameAnim("fx_smokeScreen", 24),
        cc.callFunc(function() {
            smokeFX.visible = false;
        })
    ));
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

//used for running ninja
var Groundzard = function(data, index) {
    Lizard.call(this, data.skin);
    this.pos = data.pos;
    this.speed = 450;
    this.direction = null;
    this.distance = cc.pDistance(data.pos[0], data.pos[1]);
    this.distanceTraveled = 0;


    //this.idleAnim.speed(2);

    this.colliderSize = cc.size(this.width * this.scaleX, this.height * this.scaleY);
};
Groundzard.prototype = Object.create(Lizard.prototype);
Groundzard.prototype.constructor = Groundzard;
Groundzard.prototype.spawn = function() {
    var random = Tools.random(0, 1);

    this.setPosition(this.pos[random]);
    this.setFlippedX(random);
    this.direction = 1 - (2 * random);

    this.distanceTraveled = 0;

    this.active = true;
    this.visible = true;

    this.runAction(this.idleAnim.repeatForever());

    this.sfxID = cc.audioEngine.playEffect("res/sfx/SFX_Ninja_Jump3.mp3");
};
Groundzard.prototype.update = function(dt) {
    this.x += dt * this.speed * this.direction * this.scale;
    if (this.distanceTraveled < this.distance) {
        this.distanceTraveled += dt * this.speed * this.scale;
    } else {
        this.hide();
    }
};

Groundzard.prototype.stopSFX = function() {
    cc.audioEngine.stopEffect(this.sfxID);
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------