var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(e) {
    var t = function() {};
    return t.prototype = e, new t
}, $jscomp.underscoreProtoCanBeSet = function() {
    var e = {};
    try {
        return e.__proto__ = {
            a: !0
        }, e.a
    } catch (e) {}
    return !1
}, $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(e, t) {
    if (e.__proto__ = t, e.__proto__ !== t) throw new TypeError(e + " is not extensible");
    return e
    console.log("flklklklklklklklk");
} : null, $jscomp.inherits = function(e, t) {
    if (e.prototype = $jscomp.objectCreate(t.prototype), e.prototype.constructor = e, $jscomp.setPrototypeOf) {
        var o = $jscomp.setPrototypeOf;
        o(e, t)
    } else
        for (o in t)
            if ("prototype" != o)
                if (Object.defineProperties) {
                    var r = Object.getOwnPropertyDescriptor(t, o);
                    r && Object.defineProperty(e, o, r)
                } else e[o] = t[o];
    e.superClass_ = t.prototype
    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
        sdk.showBanner();
    }
    console.log("az")
};
var last_array = 0,
    best_score = 0,
    game_data = {
        sound: !0
    },
    player_data = {
        drop_mode: 0,
        hint_left: 5,
        shuffle_left: 5,
        score: 0
    };

function load_data() {
    var e = localStorage.getItem("pplayy_number_best");
    e && (best_score = e), (e = localStorage.getItem("pplayy_number_data")) && (player_data = JSON.parse(e)), (e = localStorage.getItem("pplayy_number_array")) && (e = JSON.parse(e), last_array = e.arr, player_data = e.data)
}
load_data();
var Menu = function() {
    return Phaser.Scene.call(this, "menu") || this
};
$jscomp.inherits(Menu, Phaser.Scene), Menu.prototype.create = function() {
    var e = this,
        t = this;
    this.add.sprite(0, 0, "background").setOrigin(0), this.add.sprite(0, config.height, "header").setOrigin(0, 1), this.add.sprite(0, config.height, "footer").setOrigin(0, 1);
    var o = this.add.sprite(360, 320, "game_title");
    this.tweens.add({
        targets: o,
        y: o.y + 30,
        duration: 1300,
        ease: "Sine.easeInOut",
        yoyo: !0,
        repeat: -1
    }), this.add.text(360, 600, "KỶ LỤC:", {
        fontFamily: "PoetsenOne",
        fontSize: 35,
        align: "center",
        color: "#FFFFFF"
    }).setOrigin(.5), this.add.text(360, 650, String(best_score), {
        fontFamily: "PoetsenOne",
        fontSize: 30,
        align: "center",
        color: "#FFFFFF"
    }).setOrigin(.5), draw_button(360, 760, "play", this), this.input.on("gameobjectdown", function(o, r) {
        r.button && (play_sound("click", e), e.tweens.add({
            targets: r,
            scaleX: .9,
            scaleY: .9,
            yoyo: !0,
            ease: "Linear",
            duration: 100,
            onComplete: function() {
                r.name && (t.scene.start("game"))
                console.log("lorrd");
                if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
                    sdk.showBanner();
                }
            }
        }, e))
    }, this), this.add.sprite(360, 980, "logo").setOrigin(0).setOrigin(.5)
};