//--------------------------------------------------------------------------------------------------------------------------------------------------------

var EasterEgg = cc.Sprite.extend({
    active: null,
    collideRect: null,

    ctor: function(spriteName) {
        this._super(spriteName);
        this.active = true;
    },

    updateCollideRect: function() {
        this.collideRect = this.getBoundingBox();
    },

    reset: function() {
        this.active = true;
    }
});

var Horn = EasterEgg.extend({
    animation: null,

    ctor: function() {
        this._super("#gobj_trumpet_0.png");
        this.init();
    },

    init: function() {
        this.animation = cc.sequence(
            Tools.createFrameAnim("gobj_trumpet", 12),
            cc.callFunc(this.reset, this)
        );
    },

    trigger: function() {
        this.active = false;

        this.runAction(this.animation);

        this.playSfx();
    },

    reset: function() {
        this.active = true;

        this.setSpriteFrame("gobj_trumpet_0.png");
    },

    updateCollideRect: function() {
        this.collideRect = this.getBoundingBox();

        this.collideRect.height -= 80;
        this.collideRect.x += 30;
        this.collideRect.width -= 30;
    },

    playSfx: function() {
        cc.audioEngine.playEffect("res/sfx/SFX_bg_Trumpet.mp3");
    }
});

var Stand = EasterEgg.extend({
    animation: null,

    ctor: function() {
        this._super("#gobj_musicStand_3.png");
        this.init();
    },

    init: function() {
        this.animation = cc.sequence(
            Tools.createFrameAnim("gobj_musicStand", 12, 4, 11),
            Tools.createFrameAnim("gobj_musicStand", 12, 0, 3),
            cc.callFunc(this.reset, this)
        );
    },

    trigger: function() {
        this.active = false;

        this.runAction(this.animation);

        this.playSfx();
    },

    updateCollideRect: function() {
        this.collideRect = this.getBoundingBox();

        this.collideRect.x += 90;
        this.collideRect.width -= 180;
        this.collideRect.y += 170;
        this.collideRect.height -= 180;
    },

    playSfx: function() {
        cc.audioEngine.playEffect("res/sfx/SFX_BG_MusicStand.mp3");
    }
});

var Leaves = EasterEgg.extend({
    animation: null,

    ctor: function() {
        this._super("#gobj_leaves_0.png");
        this.init();
    },

    init: function() {
        this.animation = cc.sequence(
            Tools.createFrameAnim("gobj_leaves", 12),
            cc.callFunc(this.reset, this)
        );
    },

    trigger: function() {
        this.active = false;

        this.runAction(this.animation);

        this.playSfx();
    },

    updateCollideRect: function() {
        this.collideRect = this.getBoundingBox();
    },

    reset: function() {
        this.active = true;

        this.setSpriteFrame("gobj_leaves_0.png");
    },

    playSfx: function() {
        cc.audioEngine.playEffect("res/sfx/SFX_BG_Leaves.mp3");
    }
});

var Mushroom = EasterEgg.extend({
    animation: null,

    ctor: function() {
        this._super("#gobj_mushroom_0.png");
        this.init();
    },

    init: function() {
        this.animation = cc.sequence(
            Tools.createFrameAnim("gobj_mushroom", 12, 8, 11),
            Tools.createFrameAnim("gobj_mushroom", 12, 0, 7),
            cc.callFunc(this.reset, this)
        );
    },

    trigger: function() {
        this.active = false;

        this.runAction(this.animation);

        this.playSfx();
    },

    reset: function() {
        this.active = true;

        this.setSpriteFrame("gobj_mushroom_0.png");
    },

    playSfx: function() {
        cc.audioEngine.playEffect("res/sfx/SFX_BG_Mushroom.mp3");
    }
});

var PaintBucket = EasterEgg.extend({
    animation: null,

    ctor: function() {
        this._super("#gobj_paintBucket_0.png");
        this.init();
    },

    init: function() {
        this.animation = cc.sequence(
            Tools.createFrameAnim("gobj_paintBucket", 12),
            cc.callFunc(this.reset, this)
        );
    },

    trigger: function() {
        this.active = false;

        this.runAction(this.animation);

        this.playSfx();
    },

    reset: function() {
        this.active = true;

        this.setSpriteFrame("gobj_paintBucket_0.png");
    },

    playSfx: function() {
        cc.audioEngine.playEffect("res/sfx/SFX_BG_PaintBucket.mp3");
    }
});

var PaintTube = EasterEgg.extend({
    animation: null,

    ctor: function() {
        this._super("#gobj_paintTube_0.png");
        this.init();
    },

    init: function() {
        this.animation = cc.sequence(
            Tools.createFrameAnim("gobj_paintTube", 12),
            cc.callFunc(this.reset, this)
        );
    },

    trigger: function() {
        this.active = false;

        this.runAction(this.animation);

        this.playSfx();
    },

    reset: function() {
        this.active = true;

        this.setSpriteFrame("gobj_paintTube_0.png");
    },

    playSfx: function() {
        cc.audioEngine.playEffect("res/sfx/SFX_BG_PaintTube.mp3");
    }
});