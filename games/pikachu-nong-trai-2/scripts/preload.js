var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(t) {
    var o = function() {};
    return o.prototype = t, new o
}, $jscomp.underscoreProtoCanBeSet = function() {
    var t = {};
    try {
        return t.__proto__ = {
            a: !0
        }, t.a
    } catch (t) {}
    return !1
}, $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(t, o) {
    if (t.__proto__ = o, t.__proto__ !== o) throw new TypeError(t + " is not extensible");
    return t
} : null, $jscomp.inherits = function(t, o) {
    if (t.prototype = $jscomp.objectCreate(o.prototype), t.prototype.constructor = t, $jscomp.setPrototypeOf) {
        var e = $jscomp.setPrototypeOf;
        e(t, o)
    } else
        for (e in o)
            if ("prototype" != e)
                if (Object.defineProperties) {
                    var i = Object.getOwnPropertyDescriptor(o, e);
                    i && Object.defineProperty(t, e, i)
                } else t[e] = o[e];
    t.superClass_ = o.prototype
};
var Load = function() {
    return Phaser.Scene.call(this, "load") || this
};
$jscomp.inherits(Load, Phaser.Scene), Load.prototype.preload = function() {
    var t = this;
    this.add.sprite(360, 540, "background"), this.add.sprite(360, 380, "game_title"), this.add.sprite(360, 980, "logo");
    var o = this.add.rectangle(config.width / 2, 600, 600, 20);
    o.setStrokeStyle(4, 16777215), o.alpha = .7;
    var e = this.add.rectangle(config.width / 2, 600, 590, 10, 16777215);
    e.alpha = .8, this.load.on("progress", function(t) {
        e.width = 590 * t
    }), this.load.on("complete", function() {
        o.destroy(), e.destroy();
        var i = draw_button(360, 700, "start", t);
        t.tweens.add({
            targets: i,
            alpha: .5,
            yoyo: !0,
            duration: 300,
            loop: -1
        })
    }, this), this.input.on("gameobjectdown", function() {
        t.scene.start("menu")
    }, this), this.load.image("shadow", "img/shadow.png"), this.load.image("sign", "img/sign.png"), this.load.image("header", "img/header.png"), this.load.image("footer", "img/footer.png"), this.load.image("btn_home", "img/btn_home.png"), this.load.image("btn_shuffle", "img/btn_shuffle.png"), this.load.image("btn_hint", "img/btn_hint.png"), this.load.image("btn_play", "img/btn_play.png"), this.load.image("btn_next", "img/btn_next.png"), this.load.image("btn_sound_on", "img/btn_sound_on.png"), this.load.image("btn_sound_off", "img/btn_sound_off.png"), this.load.image("btn_restart", "img/btn_restart.png"), this.load.image("btn_menu", "img/btn_menu.png"), this.load.image("btn_start", "img/btn_start.png"), this.load.image("circle", "img/circle.png"), this.load.image("arrow", "img/arrow.png"), this.load.image("shuffle_icon", "img/shuffle_icon.png"), this.load.image("hint_icon", "img/hint_icon.png"), this.load.image("score_bar", "img/score_bar.png"), this.load.spritesheet("lines", "img/lines.png", {
        frameWidth: 90,
        frameHeight: 90
    });
    for (var i = 1; 22 >= i; i++) this.load.image("obj" + i, "img/obj" + i + ".png");
    this.load.audio("click", "audio/click.mp3"), this.load.audio("connected", "audio/connected.mp3"), this.load.audio("itemclick", "audio/itemclick.mp3"), this.load.audio("gameover", "audio/gameover.mp3"), this.load.audio("nomatch", "audio/nomatch.mp3"), this.load.audio("completed", "audio/completed.mp3"), this.load.audio("hint", "audio/hint.mp3"), this.load.audio("shuffle", "audio/shuffle.mp3")
}, Load.prototype.create = function() {};