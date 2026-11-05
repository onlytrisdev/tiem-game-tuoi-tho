//--------------------------------------------------------------------------------------------------------------------------------------------------------

var Character = cc.Sprite.extend({
    skin: null,

    idleAnim1: null,
    idleAnim2: null,
    idleAnim: null,
    cheerAnim: null,
    nagAnim: null,

    ctor: function(skin, data) {
        this.skin = skin;
        this._super("#char_bugs" + this.skin + "Idle1_0.png");

        this.setAnchorPoint(0.5, 0);
        this.setPosition(data.pos);

        this.idleAnim1 = Tools.createFrameAnim("char_bugs" + this.skin + "Idle1", 15);
        this.idleAnim2 = Tools.createFrameAnim("char_bugs" + this.skin + "Idle2", 15);
        this.idleAnim = this.idleAnim1;
        this.cheerAnim = cc.sequence(Tools.createFrameAnim("char_bugs" + this.skin + "Collect", 15).repeat(data.cheerLoop), cc.callFunc(this.idle, this));
        this.nagAnim = cc.sequence(Tools.createFrameAnim("char_bugs" + this.skin + "Warn", 15).repeat(data.nagLoop), cc.callFunc(this.idle, this));
    },

    idle: function() {
        this.stopAllActions();
        this.runAction(this.idleAnim.repeatForever());
    },

    cheer: function() {
        this.stopAllActions();
        this.runAction(this.cheerAnim);

        cc.audioEngine.playEffect("res/sfx_character" + this.skin + "_cheer.mp3");
    },

    nag: function() {
        this.idleAnim = this.idleAnim2;

        this.stopAllActions();
        this.runAction(this.nagAnim);

        cc.audioEngine.playEffect("res/sfx_character" + this.skin + "_nag.mp3");
    },

    goalReached: function() {
        this.idleAnim2 = this.idleAnim1;
        this.idleAnim = this.idleAnim1;
        this.cheer();
    },

    show: function() {
        this.setVisible(true);
    },


    hide: function() {
        this.setVisible(false);
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------