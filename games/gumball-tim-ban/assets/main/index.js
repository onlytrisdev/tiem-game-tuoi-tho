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
    Anais: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "774a8m6iYhEvZZunF/KnPwV", "Anais"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../managers/GameManager"),
            i = e("../common/PausableComponent"),
            a = e("../audios/AudioManager"),
            r = e("../audios/AudioConfig"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = s.menu,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.idleAnim = null, t.notificationAnim = null, t.actionAnim = null, t.idleFrames = [], t
                }
                return __extends(t, e), t.prototype.doNotificationAnim = function() {
                    var e = this;
                    this.notificationAnim.node.active = !0, this.notificationAnim.play("IN_notification"), this.notificationAnim.once(cc.Animation.EventType.FINISHED, function() {
                        e.notificationAnim.play("LOOP_notification")
                    }), a.default.instance.playSfx(r.SFXKey.anais_warning)
                }, t.prototype.doNotificationOutAnim = function() {
                    this.notificationAnim.play("OUT_notification"), this.notificationAnim.once(cc.Animation.EventType.FINISHED, this.setupWait, this)
                }, t.prototype.doTalk = function() {
                    this.idleAnim.node.active = !1, this.actionAnim.node.active = !0, this.actionAnim.play("LOOP_talking")
                }, t.prototype.doYell = function() {
                    this.idleAnim.node.active = !1, this.actionAnim.node.active = !0, this.actionAnim.play("LOOP_yelling")
                }, t.prototype.doHit = function() {
                    this.idleAnim.node.active = !1, this.actionAnim.node.active = !0, this.actionAnim.play("LOOP_hitting")
                }, t.prototype.doIdle = function() {
                    this.idleAnim.node.active = !0, this.actionAnim.node.active = !1, this.chooseRandomIdleFrame()
                }, t.prototype.faceNode = function(e) {
                    var t = e.convertToWorldSpaceAR(cc.v2(0, 0)),
                        n = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    this.node.scaleX = t.x < n.x ? -1 : 1
                }, t.prototype.setupWait = function() {
                    cc.tween(this.node).delay(o.default.instance.state.campsState.tent.time).call(this.doNotificationAnim.bind(this)).start(), this.notificationAnim.node.active = !1
                }, t.prototype.chooseRandomIdleFrame = function() {
                    var e = Math.round(Math.random() * (this.idleFrames.length - 1));
                    this.idleAnim.getComponentInChildren(cc.Sprite).spriteFrame = this.idleFrames[e]
                }, t.prototype.onLoad = function() {
                    var t = o.default.instance.state;
                    t.campsState.tent ? 0 === t.campsState.tent.stage ? this.doNotificationAnim() : this.setupWait() : this.notificationAnim.node.active = !1, this.actionAnim.node.active = !1, this.chooseRandomIdleFrame(), e.prototype.onLoad.call(this)
                }, t.prototype.onEnable = function() {
                    this.idleAnim.resume(), this.notificationAnim.resume(), this.actionAnim.resume()
                }, t.prototype.onDisable = function() {
                    this.idleAnim.pause(), this.notificationAnim.pause(), this.actionAnim.pause()
                }, __decorate([l(cc.Animation)], t.prototype, "idleAnim", void 0), __decorate([l(cc.Animation)], t.prototype, "notificationAnim", void 0), __decorate([l(cc.Animation)], t.prototype, "actionAnim", void 0), __decorate([l([cc.SpriteFrame])], t.prototype, "idleFrames", void 0), __decorate([c, u("Gameplay Component/Anais")], t)
            }(i.default);
        n.default = p, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager",
        "../common/PausableComponent": "PausableComponent",
        "../managers/GameManager": "GameManager"
    }],
    AudioConfig: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "74859b/h2dFX5AK0aWNL+CK", "AudioConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.SFXKey = n.HowlsKey = void 0;
        var o, i = e("./AudioManager"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property;
        (function(e) {
            e[e.audiosprite = 0] = "audiosprite", e[e.music_menu = 1] = "music_menu", e[e.music_comic1 = 2] = "music_comic1", e[e.music_comic2 = 3] = "music_comic2", e[e.ambience_corridor = 4] = "ambience_corridor", e[e.ambience_room1 = 5] = "ambience_room1", e[e.ambience_room2 = 6] = "ambience_room2", e[e.ambience_rooftop = 7] = "ambience_rooftop", e[e.music_win = 8] = "music_win"
        })(o = n.HowlsKey || (n.HowlsKey = {})),
        function(e) {
            e[e.button_general = 0] = "button_general", e[e.button_back = 1] = "button_back", e[e.transition_in = 2] = "transition_in", e[e.transition_out = 3] = "transition_out", e[e.popup_open = 4] = "popup_open", e[e.popup_close = 5] = "popup_close", e[e.door_interaction = 6] = "door_interaction", e[e.item_drop = 7] = "item_drop", e[e.item_dropped1 = 8] = "item_dropped1", e[e.item_dropped2 = 9] = "item_dropped2", e[e.gumball_doubt = 10] = "gumball_doubt", e[e.item_collected1 = 11] = "item_collected1", e[e.item_collected2 = 12] = "item_collected2", e[e.item_collected3 = 13] = "item_collected3", e[e.tutorial_in1 = 14] = "tutorial_in1", e[e.tutorial_in2 = 15] = "tutorial_in2", e[e.tutorial_in3 = 16] = "tutorial_in3", e[e.bubble_item = 17] = "bubble_item", e[e.mission_new = 18] = "mission_new", e[e.gumball_notes = 19] = "gumball_notes", e[e.mission_completed = 20] = "mission_completed", e[e.hint_in = 21] = "hint_in", e[e.hint_out = 22] = "hint_out", e[e.banner_crafted_item = 23] = "banner_crafted_item", e[e.banner_air_duct = 24] = "banner_air_duct", e[e.banner_out = 25] = "banner_out", e[e.mowdown_leaves = 26] = "mowdown_leaves", e[e.padlock_miss = 27] = "padlock_miss", e[e.padlock_open1 = 28] = "padlock_open1", e[e.padlock_open2 = 29] = "padlock_open2", e[e.padlock_door = 30] = "padlock_door", e[e.chalkboard_numbers = 31] = "chalkboard_numbers", e[e.padlock_numbers = 32] = "padlock_numbers", e[e.padlock_numbers_open = 33] = "padlock_numbers_open", e[e.padlock_numbers_wrong = 34] = "padlock_numbers_wrong", e[e.metalbox_open = 35] = "metalbox_open", e[e.lights_on = 36] = "lights_on", e[e.paint_wall1 = 37] = "paint_wall1", e[e.paint_wall2 = 38] = "paint_wall2", e[e.paint_wall3 = 39] = "paint_wall3", e[e.tobias_blocker = 40] = "tobias_blocker", e[e.screen_repair = 41] = "screen_repair", e[e.screen_on_trash = 42] = "screen_on_trash", e[e.alan_pop = 43] = "alan_pop", e[e.tap_piece = 44] = "tap_piece", e[e.drop_piece = 45] = "drop_piece", e[e.jigsaw_completed = 46] = "jigsaw_completed", e[e.banner_extinguisher1 = 47] = "banner_extinguisher1", e[e.banner_extinguisher2 = 48] = "banner_extinguisher2", e[e.banner_final_bell1 = 49] = "banner_final_bell1", e[e.banner_final_bell2 = 50] = "banner_final_bell2", e[e.banner_final_bell3 = 51] = "banner_final_bell3", e[e.gym_barriers = 52] = "gym_barriers", e[e.final_comic_in = 53] = "final_comic_in", e[e.tv_broked = 54] = "tv_broked", e[e.computer_login = 55] = "computer_login", e[e.banner_blowgun_in = 56] = "banner_blowgun_in", e[e.banner_eraser_in = 57] = "banner_eraser_in", e[e.minigame_in = 58] = "minigame_in", e[e.mission_completed_penny1 = 59] = "mission_completed_penny1", e[e.mission_completed_penny2 = 60] = "mission_completed_penny2", e[e.mission_completed_tobias = 61] = "mission_completed_tobias", e[e.mission_completed_bobert = 62] = "mission_completed_bobert", e[e.paint_after_fade = 63] = "paint_after_fade", e[e.vending_machine = 64] = "vending_machine"
        }(n.SFXKey || (n.SFXKey = {}));
        var c = function() {
                function e() {
                    this.id = o.audiosprite, this.nameFile = "", this.isAudioSprite = !1, this.jsonAudioSprite = null
                }
                return __decorate([s({
                    type: cc.Enum(o)
                })], e.prototype, "id", void 0), __decorate([s(cc.String)], e.prototype, "nameFile", void 0), __decorate([s(cc.Boolean)], e.prototype, "isAudioSprite", void 0), __decorate([s(cc.JsonAsset)], e.prototype, "jsonAudioSprite", void 0), __decorate([r("AudioResource")], e)
            }(),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.playInPreview = !0, t.pathAudio = "audios/", t.formats = ["m4a", "mp3", "ogg"], t.audioResources = [], t.isAllLoaded = !1, t.fileLoaded = 0, t
                }
                var n;
                return __extends(t, e), n = t, t.prototype.start = function() {
                    this.init()
                }, t.prototype.init = function() {
                    this.node.emit(n.KEY_ON_INIT), this.isAllLoaded = !1, this.playInPreview, this.initLoadAudio()
                }, t.prototype.initLoadAudio = function() {
                    this.fileLoaded = 0, this.totalFiles = this.audioResources.length, this.loadHowl()
                }, t.prototype.loadHowl = function() {
                    var e;
                    i.default.instance.on(i.default.KEY_END_LOADED, this.onLoadedHowl, this);
                    for (var t = 0, n = this.audioResources.length; t < n; t++) {
                        e = [];
                        for (var o = 0, a = this.formats.length; o < a; o++) e.push(this.pathAudio + this.audioResources[t].nameFile + "." + this.formats[o]);
                        this.audioResources[t].isAudioSprite ? i.default.instance.loadAudioSprite(e, this.audioResources[t].jsonAudioSprite.json.sprite) : i.default.instance.loadMusic(this.audioResources[t].id, e)
                    }
                }, t.prototype.onLoadedHowl = function() {
                    var e;
                    this.fileLoaded++, e = this.fileLoaded / this.totalFiles, this.node.emit(n.KEY_ON_PROGRESS, e), this.checkOnCompletedLoad()
                }, t.prototype.checkOnCompletedLoad = function() {
                    this.fileLoaded >= this.totalFiles && (this.node.emit(n.KEY_ON_COMPLETED), this.isAllLoaded = !0)
                }, t.KEY_ON_INIT = "AudioConfig_init", t.KEY_ON_COMPLETED = "AudioConfig_loaded", t.KEY_ON_PROGRESS = "AudioConfig_progress", __decorate([s(cc.Boolean)], t.prototype, "playInPreview", void 0), __decorate([s(cc.String)], t.prototype, "pathAudio", void 0), __decorate([s([cc.String])], t.prototype, "formats", void 0), __decorate([s([c])], t.prototype, "audioResources", void 0), n = __decorate([r], t)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "./AudioManager": "AudioManager"
    }],
    AudioManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3d7eba/fXdEdaKRA8xp76ai", "AudioManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./AudioConfig"),
            i = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.lockSfxPlayback = !1, t.currentMusic = null, t.singleSFXPlayingList = {}, t.musicId = null, t._musicVolume = 1, t.music = [], t.audioSprite = null, t.enableAudio = !0, t.isChain = !1, t
                }
                return __extends(t, e), Object.defineProperty(t, "instance", {
                    get: function() {
                        return null === t._instance && (t._instance = new t), t._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.init = function() {
                    return t.instance
                }, t.prototype.loadMusic = function(e, t) {
                    this.music[e] = new Howl({
                        src: t,
                        onload: this.onEndLoad.bind(this)
                    })
                }, t.prototype.loadAudioSprite = function(e, t) {
                    this.audioSprite = new Howl({
                        src: e,
                        onload: this.onEndLoad.bind(this),
                        sprite: t
                    })
                }, t.prototype.onEndLoad = function() {
                    this.emit(t.KEY_END_LOADED)
                }, t.prototype.playMusic = function(e, t, n) {
                    void 0 === t && (t = 0), void 0 === n && (n = !0), this.isChain = !1, this._playMusic(e, t, n)
                }, t.prototype.playMusicChain = function(e, t) {
                    this.isChain = !0, this.currentChain = [e, t];
                    var n = this.music[e],
                        o = this.music[t];
                    n && o && n !== this.currentMusic && o !== this.currentMusic && (this._playMusic(e, 0, !1), this.currentMusic.on("end", this._playMusic.bind(this, t, 0, !0)))
                }, t.prototype._playMusic = function(e, t, n) {
                    void 0 === t && (t = 0), void 0 === n && (n = !0);
                    var o = this.music[e];
                    if (o && o !== this.currentMusic && (this.currentMusic && this.currentMusic.stop(), this.currentMusic = o, this.enableAudio)) {
                        var i = this.currentMusic.play();
                        this.musicId = i, this.currentMusic.loop(!!n, i), t > 0 && this.currentMusic.fade(0, this.musicVolume, t, i)
                    }
                }, t.prototype.pause = function() {
                    this.currentMusic && this.currentMusic.pause(), this.audioSprite && this.audioSprite.pause()
                }, t.prototype.resume = function() {
                    !Howler.ctx || "suspended" !== Howler.ctx.state && "interrupted" !== Howler.ctx.state || Howler.ctx.resume(), this.currentMusic && this.unpause(this.currentMusic), this.audioSprite && this.unpause(this.audioSprite)
                }, t.prototype.enableAll = function() {
                    this.enableAudio = !0, this.currentMusic && (this.isChain ? (this.currentMusic = null, this.playMusicChain(this.currentChain[0], this.currentChain[1])) : this.currentMusic.play())
                }, t.prototype.disableAll = function() {
                    this.enableAudio = !1, this.currentMusic && this.currentMusic.stop(), this.audioSprite && this.audioSprite.stop()
                }, Object.defineProperty(t.prototype, "musicVolume", {
                    get: function() {
                        return this._musicVolume
                    },
                    set: function(e) {
                        this._musicVolume = e, this.currentMusic && this.currentMusic.volume(e, this.musicId)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.stopMusic = function() {
                    this.currentMusic && this.currentMusic.stop(), this.currentMusic = null
                }, t.prototype.playRandomSfx = function(e) {
                    var t = Math.round(Math.random() * (e.length - 1));
                    return this.playSfx(e[t])
                }, t.prototype.playRandomSingleSfx = function(e) {
                    var t = Math.round(Math.random() * (e.length - 1));
                    return this.playSingleSfx(e[t])
                }, t.prototype.playSfx = function(e) {
                    if (this.audioSprite && !this.lockSfxPlayback && this.enableAudio) {
                        var t = this.audioSprite.play(o.SFXKey[e]);
                        return null === t && console.warn("El audiosprite no tiene: " + o.SFXKey[e]), t
                    }
                }, t.prototype.playSingleSfx = function(e) {
                    var t = this;
                    if (this.audioSprite && !this.singleSFXPlayingList[o.SFXKey[e]]) {
                        var n = this.playSfx(e);
                        null !== n && (this.singleSFXPlayingList[o.SFXKey[e]] = !0, this.audioSprite.once("end", function() {
                            t.singleSFXPlayingList[o.SFXKey[e]] = !1
                        }, n))
                    }
                }, t.prototype.stopSfx = function(e) {
                    this.audioSprite && null !== e && this.enableAudio && this.audioSprite.stop(e)
                }, t.prototype.pauseSfx = function(e) {
                    this.audioSprite && null !== e && this.enableAudio && this.audioSprite.pause(e)
                }, t.prototype.resumeSfx = function(e) {
                    this.audioSprite && null !== e && this.enableAudio && this.audioSprite.play(e)
                }, t.prototype.loopSfx = function(e, t) {
                    void 0 === t && (t = !0), this.audioSprite && null !== e && this.enableAudio && this.audioSprite.loop(t, e)
                }, t.prototype.doOnceSfxFinish = function(e, t) {
                    this.audioSprite && this.audioSprite.once("end", t, e)
                }, t.prototype.mute = function(e) {
                    Howler.mute(e)
                }, t.prototype.unpause = function(e) {
                    for (var t, n = 0; n < e._sounds.length; n++) e._sounds[n]._paused && !e._sounds[n]._ended && (t = e._sounds[n]._id, e.play(t))
                }, t.KEY_END_LOADED = "AudioManager_loaded", t._instance = null, t
            }(cc.Node);
        n.default = i, cc._RF.pop()
    }, {
        "./AudioConfig": "AudioConfig"
    }],
    BalloonFixer: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2c6a7r0DFdDsZU8Y8G+yx3H", "BalloonFixer"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.menu,
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = this;
                    this.node.parent.on(cc.Node.EventType.SCALE_CHANGED, function() {
                        e.node.scaleX = Math.sign(e.node.parent.scaleX) * Math.min(1 / Math.abs(e.node.parent.scaleX), 1.2), e.node.scaleY = Math.abs(e.node.scaleX)
                    })
                }, __decorate([i, a("Gameplay Component/BalloonFixer")], t)
            }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    BaseEnvironmentProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e6146Y4l7ZCtrPjTD/kuUZr", "BaseEnvironmentProp"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./WorldInfo"),
            i = cc._decorator,
            a = i.ccclass,
            r = i.property,
            s = cc.Enum(o.EnvironmentFlags),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.envFlag = o.EnvironmentFlags.GymHallPanelOpen, t.envFlagValue = !0, t
                }
                return __extends(t, e), __decorate([r({
                    type: s
                })], t.prototype, "envFlag", void 0), __decorate([r], t.prototype, "envFlagValue", void 0), __decorate([a], t)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {
        "./WorldInfo": "WorldInfo"
    }],
    BaseInfoTutorial: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c215aQQxwhK6bVh+stx+APC", "BaseInfoTutorial"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../audios/AudioConfig"),
            i = e("../../../audios/AudioManager"),
            a = e("../../../config/InputConfig"),
            r = e("../../../managers/DataManager"),
            s = e("../../../managers/GameManager"),
            c = e("../PauseUI"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = function() {
                function e() {
                    this.node = null, this.overlay = null, this.btnAnim = null, this.skipNode = null
                }
                return e.prototype.enable = function(e) {
                    this.node.active = e, this.overlay.active = e, this.btnAnim.node.active = e, this.skipNode.active = e
                }, __decorate([p(cc.Node)], e.prototype, "node", void 0), __decorate([p(cc.Node)], e.prototype, "overlay", void 0), __decorate([p(cc.Animation)], e.prototype, "btnAnim", void 0), __decorate([p(cc.Node)], e.prototype, "skipNode", void 0), __decorate([u("BaseInfoTutorialPopup")], e)
            }(),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.popup = new d, t.skipCheck = null, t
                }
                return __extends(t, e), t.prototype.switchSkipCheck = function() {
                    this.skipCheck.active = !this.skipCheck.active, i.default.instance.playSfx(o.SFXKey.button_general)
                }, t.prototype.progressInTutorial = function() {}, t.prototype.enablePopup = function() {
                    var e = this;
                    this.popup.enable(!0), this.node.setSiblingIndex(this.hud.getSiblingIndex() + 1), this.hud.active = !1, c.default.enabled = !1, s.default.instance.emit("gameplay-pause"), this.node.opacity = 0, cc.tween(this.node).to(.25, {
                        opacity: 255
                    }).call(function() {
                        e.popup.btnAnim.play("IN_button"), e.popup.btnAnim.setCurrentTime(0)
                    }).start(), this.popup.btnAnim.play("IN_button"), this.popup.btnAnim.setCurrentTime(0), this.popup.btnAnim.stop(), a.uiActions.tutorialNext.on("triggered", this.progressInTutorial, this), r.default.instance.isFirstTime() && (this.popup.skipNode.active = !1)
                }, t.prototype.disablePopup = function() {
                    var e = this;
                    this.node.opacity = 255, this.popup.btnAnim.play("OUT_button"), this.popup.btnAnim.setCurrentTime(0), this.popup.btnAnim.once(cc.Animation.EventType.FINISHED, function() {
                        cc.tween(e.node).to(.25, {
                            opacity: 0
                        }).call(function() {
                            e.popup.enable(!1), e.hud.active = !0, s.default.instance.emit("gameplay-resume"), c.default.enabled = !0, e.node.opacity = 255, e.tutorialCleanup()
                        }).start()
                    }), a.uiActions.tutorialNext.off("triggered", this.progressInTutorial, this)
                }, t.prototype.tutorialCleanup = function() {
                    s.default.instance, this.node.emit("tutorial-ended"), this.node.destroy()
                }, __decorate([p(d)], t.prototype, "popup", void 0), __decorate([p(cc.Node)], t.prototype, "skipCheck", void 0), __decorate([u], t)
            }(cc.Component);
        n.default = h, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager",
        "../../../config/InputConfig": "InputConfig",
        "../../../managers/DataManager": "DataManager",
        "../../../managers/GameManager": "GameManager",
        "../PauseUI": "PauseUI"
    }],
    BaseMinigame: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "26851N4q5ZGgrT8E2LUrsFb", "BaseMinigame"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.MinigameInput = void 0;
        var o, i = e("../../audios/AudioConfig"),
            a = e("../../audios/AudioManager"),
            r = e("../../config/InputConfig"),
            s = e("../../managers/GameManager"),
            c = e("../../ui/gameplay/PauseUI"),
            l = e("../GameState");
        (function(e) {
            e[e.Disabled = 0] = "Disabled", e[e.Popup = 1] = "Popup", e[e.Game = 2] = "Game", e[e.AllEnabled = 3] = "AllEnabled"
        })(o = n.MinigameInput || (n.MinigameInput = {}));
        var u = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.show = function() {
                this.node.active = !0, c.default.enabled = !1, s.default.instance.emit("gameplay-pause"), l.default.get().world.currentRoom.resetTime(), this.inputFlags = o.Disabled, a.default.instance.playSfx(i.SFXKey.minigame_in)
            }, t.prototype.hide = function() {
                this.inputFlags = o.Disabled
            }, t.prototype.onHid = function() {
                l.default.get().world.currentRoom.addElapsedTime(), s.default.instance.emit("gameplay-resume"), c.default.enabled = !0, this.node.emit("hid"), this.node.active = !1
            }, t.prototype.onLoad = function() {
                this.node.active = !1, this.inputFlags = o.Disabled
            }, t.prototype.onEnable = function() {
                r.uiActions.cancel.on("triggered", this.onClose, this)
            }, t.prototype.onDisable = function() {
                r.uiActions.cancel.off("triggered", this.onClose, this)
            }, t
        }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../config/InputConfig": "InputConfig",
        "../../managers/GameManager": "GameManager",
        "../../ui/gameplay/PauseUI": "PauseUI",
        "../GameState": "GameState"
    }],
    BellPanelAudio: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4fbf1j/h11OVaWTT3aAjI0O", "BellPanelAudio"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../audios/AudioConfig"),
            i = e("../../../audios/AudioManager"),
            a = cc._decorator.ccclass,
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = this.getComponent(cc.Animation);
                    e.on("sfx1", function() {
                        i.default.instance.playSfx(o.SFXKey.banner_final_bell2)
                    }), e.on("sfx2", function() {
                        i.default.instance.playSfx(o.SFXKey.banner_final_bell3)
                    }), i.default.instance.playSfx(o.SFXKey.banner_final_bell1)
                }, __decorate([a], t)
            }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager"
    }],
    BlurEffect: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "65555gTWIJGTaJOvhiWqh/J", "BlurEffect"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../utilities/Utils"),
            i = e("./RenderTextureTarget"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.targetTexture = null, t
                }
                return __extends(t, e), t.prototype.updateTargetTextures = function(e) {
                    for (var t = 0, n = cc.director.getScene().getComponentsInChildren(cc.Camera); t < n.length; t++) {
                        var o = n[t];
                        o.node.groupIndex !== this.node.groupIndex && (o.targetTexture = e)
                    }
                }, t.prototype.onLoad = function() {
                    o.default.isMobile() && (this.enabled = !1, this.targetTexture.node.active = !1)
                }, t.prototype.onEnable = function() {
                    this.updateTargetTextures(this.targetTexture.texture), this.targetTexture.node.on("texture-resize", this.updateTargetTextures, this)
                }, t.prototype.onDisable = function() {
                    this.updateTargetTextures(void 0), this.targetTexture.node.off("texture-resize", this.updateTargetTextures, this)
                }, __decorate([s(i.default)], t.prototype, "targetTexture", void 0), __decorate([r, c("Common Component/Post Processing/BlurEffect")], t)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../../utilities/Utils": "Utils",
        "./RenderTextureTarget": "RenderTextureTarget"
    }],
    BootController: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "162d294zXtPPb0UjmuY5pSq", "BootController"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../loaders/SceneLoader"),
            i = e("../managers/DataManager"),
            a = e("../audios/AudioConfig"),
            r = e("../localization/LocalizationManager"),
            s = e("../managers/GameManager"),
            c = e("../audios/AudioManager"),
            l = e("../gameplay/quests/QuestSystem"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.nodeButton = null, t.progressBar = null, t.initScene = "", t.progressScenes = 0, t.progressAudios = 0, t.progressLocalization = 0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.nodeButton.active = !1, this.progressBar.node.active = !0, this.progressBar.progress = 0, i.default.init(), s.default.init(), r.default.instance.loadLocalizationJson(), this.node.on(o.default.KEY_ON_PROGRESS, this.onProgressScenes, this), this.node.once(o.default.KEY_ON_COMPLETED, this.onLoadedScenes, this), this.node.on(a.default.KEY_ON_PROGRESS, this.onProgressAudios, this), this.node.once(a.default.KEY_ON_COMPLETED, this.onLoadedAudios, this), r.default.instance.on(r.default.KEY_ON_DATA_LOADED, this.onLoadedLocalization, this)
                }, t.prototype.onProgressScenes = function(e) {
                    this.progressScenes = e, this.updateProgress()
                }, t.prototype.onLoadedScenes = function() {
                    this.progressScenes = 1, this.updateProgress(), this.checkCompleted()
                }, t.prototype.onProgressAudios = function(e) {
                    this.progressAudios = e, this.updateProgress()
                }, t.prototype.onLoadedAudios = function() {
                    this.progressAudios = 1, this.updateProgress(), this.checkCompleted()
                }, t.prototype.onLoadedLocalization = function() {
                    this.progressLocalization = 1, this.updateProgress(), this.checkCompleted()
                }, t.prototype.updateProgress = function() {
                    this.progressBar.progress = (this.progressScenes + this.progressAudios + this.progressLocalization) / 3
                }, t.prototype.checkCompleted = function() {
                    var e = this;
                    this.progressScenes + this.progressAudios + this.progressLocalization === 3 && cc.tween(this.progressBar.node).to(1, {
                        opacity: 0
                    }).call(function() {
                        e.progressBar.node.active = !1, e.nodeButton.active = !0, e.nodeButton.opacity = 0, cc.tween(e.nodeButton).to(1, {
                            opacity: 255
                        }).start()
                    }).start()
                }, t.prototype.isiPad3OrLower = function() {
                    if (-1 !== navigator.userAgent.indexOf("iPad")) {
                        if (1 === window.devicePixelRatio) return !0;
                        var e = cc.renderer.device._gl,
                            t = e.getExtension("WEBGL_debug_renderer_info");
                        if (t && "PowerVR SGX 543" === e.getParameter(t.UNMASKED_RENDERER_WEBGL)) return !0
                    }
                    return !1
                }, t.prototype.changeScene = function() {
                    255 === this.nodeButton.opacity && ((cc.sys.browserType === cc.sys.BROWSER_TYPE_IE || this.isiPad3OrLower()) && cc.assetManager.loadAny({
                        uuid: "ac79545d-7595-46b6-a91d-88b6f9e2ac86"
                    }, function(e, t) {
                        var n = t._effectAsset.shaders[0],
                            o = cc.renderer._forward._programLib._templates["sprite-gaussian-blur-v1|vs|fs"],
                            i = "const float size = floor(1.5 * 6.0 + 1.0);",
                            a = "const float halfSize = floor(size / 2.0);";
                        n.glsl1.frag = n.glsl1.frag.replace(i, "const float size = 10.0;").replace(a, "const float halfSize = 5.0;"), n.glsl3.frag = n.glsl3.frag.replace(i, "const float size = 10.0;").replace(a, "const float halfSize = 5.0;"), o.frag = o.frag.replace(i, "const float size = 10.0;").replace(a, "const float halfSize = 5.0;")
                    }), c.default.instance.mute(!i.default.instance.isAudioEnabled()), l.default.init(), cc.director.loadScene(this.initScene))
                }, __decorate([d(cc.Node)], t.prototype, "nodeButton", void 0), __decorate([d(cc.ProgressBar)], t.prototype, "progressBar", void 0), __decorate([d], t.prototype, "initScene", void 0), __decorate([p], t)
            }(cc.Component);
        n.default = h, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager",
        "../gameplay/quests/QuestSystem": "QuestSystem",
        "../loaders/SceneLoader": "SceneLoader",
        "../localization/LocalizationManager": "LocalizationManager",
        "../managers/DataManager": "DataManager",
        "../managers/GameManager": "GameManager"
    }],
    Character: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b71d9Rd/VJDdqhfUAJ8jEcR", "Character"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./interactive/InteractiveEntity"),
            i = e("../common/PausableComponent"),
            a = e("../managers/InteractBallonManager"),
            r = e("./interactive/Door"),
            s = e("../audios/AudioConfig"),
            c = e("../audios/AudioManager"),
            l = e("./GameState"),
            u = e("./interactive/InteractiveProp"),
            p = e("./interactive/NPC"),
            d = cc._decorator,
            h = d.ccclass,
            m = d.property,
            f = d.menu,
            y = d.requireComponent,
            g = ["hit", "hit2"],
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.actionableStack = [], t.velocity = cc.v2(0, 0), t.spine = null, t.attackHitAnim = null, t.balloonParent = null, t.speed = 120, t.actionableStackLowPriorityIndex = -1, t.locked = !1, t._showInteractionBallons = !0, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "showInteractionBallons", {
                    get: function() {
                        return this._showInteractionBallons
                    },
                    set: function(e) {
                        this._showInteractionBallons = e;
                        var t = this.getCurrentActionIndex();
                        if (-1 !== t) {
                            var n = this.actionableStack[t],
                                o = this.isPropOrDoor(n);
                            e ? (o && n.hasOwnBallooon ? n.showBalloon() : this.showBalloon(o ? n.balloonFrame : n instanceof p.default ? n.balloonFrameFromChar() : a.BalloonFrame.PointingDown), l.default.get().ui.instance.hideMarker(n)) : (o && n.hasOwnBallooon ? n.hideBalloon() : this.hideBalloon(), l.default.get().ui.instance.showMarker())
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isAttacking", {
                    get: function() {
                        return -1 !== g.indexOf(this.spine.animation)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isDoingAnAction", {
                    get: function() {
                        var e = this.spine.animation;
                        return "idle" !== e && "run" !== e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isLocked", {
                    get: function() {
                        return this.locked
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.doDeathAnimation = function(e) {
                    var t = this;
                    this.node.emit("lock"), this.spine.setAnimation(0, "death", !1), this.spine.setCompleteListener(function() {
                        t.spine.setCompleteListener(null), e && e()
                    })
                }, t.prototype.doFaintAnimation = function(e) {
                    var t = this;
                    this.node.emit("lock"), this.spine.setAnimation(0, "faint", !1), this.spine.setCompleteListener(function() {
                        t.spine.setCompleteListener(null), e && e()
                    })
                }, t.prototype.doStolenAnimation = function(e) {
                    var t = this;
                    this.spine.setAnimation(0, "stolen", !1), this.spine.setCompleteListener(function() {
                        t.spine.setAnimation(0, "idle", !0), t.spine.setCompleteListener(null), e && e(), t.node.emit("unlock")
                    })
                }, t.prototype.doBuildAnimation = function(e) {
                    var t = this;
                    this.node.emit("lock"), this.spine.setAnimation(0, "building", !1), this.spine.setCompleteListener(function() {
                        t.spine.setAnimation(0, "idle", !0), t.spine.setCompleteListener(null), t.enabled = !0, t.move(cc.v2(-.5, 0)), t.scheduleOnce(function() {
                            t.move(cc.v2(1, 0)), t.move(cc.v2(0, 0)), t.node.emit("unlock")
                        }, 1)
                    }), e && cc.tween(this.node).delay(1.8).call(e).start()
                }, t.prototype.doTalkAnimation = function() {
                    this.node.emit("lock"), this.spine.setAnimation(0, "talk", !0)
                }, t.prototype.doScareAnimation = function() {
                    this.node.emit("lock"), this.spine.setAnimation(0, "scared", !0)
                }, t.prototype.doDefendAnimation = function() {
                    this.node.emit("lock"), this.spine.setAnimation(0, "defend", !0)
                }, t.prototype.doIdleAnimation = function() {
                    this.spine.setAnimation(0, "idle", !0), this.node.emit("unlock")
                }, t.prototype.doEatingAnimation = function() {
                    var e = this;
                    this.node.emit("lock"), this.spine.setAnimation(0, "eat", !1), this.spine.setCompleteListener(function() {
                        e.spine.setAnimation(0, "idle", !0), e.spine.setCompleteListener(null), e.node.emit("unlock")
                    })
                }, t.prototype.doShrugAnimation = function() {
                    var e = this;
                    this.locked = !0, this.spine.setAnimation(0, "shrug", !1), this.spine.setCompleteListener(function() {
                        var t = 0 !== e.velocity.magSqr() ? "run" : "idle";
                        e.spine.setAnimation(0, t, !0), e.spine.setCompleteListener(null), e.locked = !1
                    }), c.default.instance.playSfx(s.SFXKey.gumball_doubt)
                }, t.prototype.doNoteAnimation = function() {
                    var e = this;
                    this.locked = !0, this.spine.setAnimation(0, "note", !1), this.spine.setCompleteListener(function() {
                        var t = 0 !== e.velocity.magSqr() ? "run" : "idle";
                        e.spine.setAnimation(0, t, !0), e.spine.setCompleteListener(null), e.locked = !1
                    }), this.scheduleOnce(function() {
                        c.default.instance.playSfx(s.SFXKey.gumball_notes)
                    }, .5)
                }, t.prototype.doWinAnimation = function(e) {
                    var t = this;
                    this.node.emit("lock"), this.spine.setAnimation(0, "win", !0), this.spine.setCompleteListener(function() {
                        t.spine.setCompleteListener(null), e && e()
                    }), c.default.instance.stopMusic()
                }, t.prototype.showBalloon = function(e) {
                    var t = this.balloonParent.children[0];
                    t ? a.default.changeBalloonBackFrame(t, e) : ((t = a.default.getBalloon(e)).parent = this.balloonParent, t.x = 0, t.y = 0);
                    var n = t.getComponent(cc.Animation);
                    n.off(cc.Animation.EventType.FINISHED), n.play("IN_baloon"), n.setCurrentTime(0), n.once(cc.Animation.EventType.FINISHED, function() {
                        n.play("LOOP_baloon")
                    }), -1 === a.silentBalloons.indexOf(e) && c.default.instance.playSfx(s.SFXKey.bubble_item)
                }, t.prototype.hideBalloon = function(e) {
                    void 0 === e && (e = !1);
                    var t = this.balloonParent.children[0];
                    if (t) {
                        var n = t.getComponent(cc.Animation);
                        if (n.off(cc.Animation.EventType.FINISHED), e) a.default.returnBalloon(t);
                        else {
                            var o = n.currentClip;
                            o && "OUT_baloon" === o.name || (n.play("OUT_baloon"), n.setCurrentTime(0)), n.once(cc.Animation.EventType.FINISHED, function() {
                                a.default.returnBalloon(t), l.default.get().ui.instance.showMarker()
                            })
                        }
                    }
                }, t.prototype.move = function(e) {
                    var t = this;
                    this.isAttacking || this.locked ? this.spine.setCompleteListener(function() {
                        t.spine.setAnimation(0, "idle", !0), t.spine.setCompleteListener(null), t.locked = !1, t.move(e)
                    }) : (e.magSqr() > 1 && e.normalizeSelf(), this.velocity = e.mul(this.speed), !this.paused && this.enabled && (0 === e.x && 0 === e.y ? (this.spine.setAnimation(0, "idle", !0), this.spine.timeScale = 1) : (e.x > 0 ? this.spine.node.scaleX = 1 : e.x < 0 && (this.spine.node.scaleX = -1), "run" !== this.spine.animation && this.spine.setAnimation(0, "run", !0), this.spine.timeScale = .5 * e.mag() + .5)))
                }, t.prototype.setFacingDirection = function(e) {
                    this.spine.node.scaleX = e
                }, t.prototype.doAction = function() {
                    if (!(this.paused || this.isDoingAnAction || this.locked)) {
                        var e = this.getCurrentActionIndex(); - 1 !== e && (this.actionableStack[e].doAction(this.node) || this.doShrugAnimation())
                    }
                }, t.prototype.attack = function() {
                    var e = this;
                    if (!this.isAttacking) {
                        var t = cc.director.getPhysicsManager(),
                            n = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                            o = this.attackRange.offset.clone();
                        o.x *= this.spine.node.scaleX;
                        for (var i = n.add(o), a = this.attackRange.size, r = 0, s = t.testAABB(cc.rect(i.x - .5 * a.width, i.y - .5 * a.height, a.width, a.height)); r < s.length; r++) {
                            var c = s[r];
                            c.node !== this.node && 0 === c.tag && c.sensor && (c.node.emit("hit"), this.attackHitAnim.play())
                        }
                        var l = this.velocity.normalize();
                        this.move(cc.v2(0, 0));
                        var u = Math.round(Math.random());
                        this.spine.setAnimation(0, g[u], !1), this.spine.setCompleteListener(function() {
                            e.spine.setAnimation(0, "idle", !0), e.spine.setCompleteListener(null), e.move(l)
                        })
                    }
                }, t.prototype.getCurrentActionIndex = function() {
                    return this.actionableStack.length - 1
                }, t.prototype.isPropOrDoor = function(e) {
                    return e instanceof u.InteractiveProp || e instanceof r.default
                }, t.prototype.cleanActionableStack = function() {
                    for (var e, t, n = this.actionableStack.length - 1; n > this.actionableStackLowPriorityIndex; --n)
                        if (this.actionableStack[n].isActive()) {
                            if (!this.actionableStack[n].canPerformAction()) {
                                var o = this.actionableStackLowPriorityIndex;
                                e = [this.actionableStack[o + 1], this.actionableStack[n]], this.actionableStack[n] = e[0], this.actionableStack[o + 1] = e[1], ++this.actionableStackLowPriorityIndex
                            }
                        } else this.actionableStack.splice(n, 1);
                    for (; n >= 0; --n) this.actionableStack[n].isActive() ? this.actionableStack[n].canPerformAction() && (o = this.actionableStackLowPriorityIndex, t = [this.actionableStack[o], this.actionableStack[n]], this.actionableStack[n] = t[0], this.actionableStack[o] = t[1], --this.actionableStackLowPriorityIndex) : this.actionableStack.splice(n, 1)
                }, t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this.body = this.getComponent(cc.RigidBody), this.attackRange = this.getComponent(cc.BoxCollider), l.default.get().player.character = this
                }, t.prototype.start = function() {
                    this.spine.setAnimation(0, "idle", !0)
                }, t.prototype.onEnable = function() {
                    this.move(this.velocity.div(this.speed))
                }, t.prototype.onDisable = function() {
                    this.body.linearVelocity = cc.v2(0, 0), this.resumed && this.spine.setAnimation(0, "idle", !0)
                }, t.prototype.onDestroy = function() {
                    var e = l.default.get();
                    e.player.character === this && (e.player.character = void 0)
                }, t.prototype.onResume = function() {
                    e.prototype.onResume.call(this), this.spine.paused = !1, this.move(this.velocity.div(this.speed))
                }, t.prototype.onPause = function() {
                    e.prototype.onPause.call(this), this.spine.paused = !0, this.body.linearVelocity = cc.v2(0, 0)
                }, t.prototype.update = function() {
                    this.body.linearVelocity = this.locked ? cc.v2(0, 0) : this.velocity.mul(this.spine.node.scaleY)
                }, t.prototype.onBeginContact = function(e, t, n) {
                    if (0 === t.tag && n.sensor) {
                        this.cleanActionableStack();
                        var i = n.node.getComponents(o.default).find(function(e) {
                            return e.isActive()
                        });
                        if (i && -1 === this.actionableStack.indexOf(i)) {
                            if (!i.canPerformAction() && (++this.actionableStackLowPriorityIndex, this.actionableStackLowPriorityIndex <= this.getCurrentActionIndex())) return void this.actionableStack.splice(this.actionableStackLowPriorityIndex, 0, i);
                            var r;
                            if (this._showInteractionBallons)
                                if (this.isPropOrDoor(i) && i.hasOwnBallooon) {
                                    if (i.showBalloon(), -1 !== (r = this.getCurrentActionIndex())) {
                                        var s = this.actionableStack[r];
                                        this.isPropOrDoor(s) && s.hasOwnBallooon ? s.hideBalloon() : this.hideBalloon()
                                    }
                                } else -1 === (r = this.getCurrentActionIndex()) ? (this.showBalloon(this.isPropOrDoor(i) ? i.balloonFrame : i instanceof p.default ? i.balloonFrameFromChar() : a.BalloonFrame.PointingDown), l.default.get().ui.instance.hideMarker(i)) : (s = this.actionableStack[r], this.isPropOrDoor(s) && s.hasOwnBallooon ? (s.hideBalloon(), this.showBalloon(i.balloonFrame), l.default.get().ui.instance.hideMarker(i)) : a.default.changeBalloonBackFrame(this.balloonParent.children[0], this.isPropOrDoor(i) ? i.balloonFrame : i instanceof p.default ? i.balloonFrameFromChar() : a.BalloonFrame.PointingDown));
                            this.actionableStack.push(i)
                        }
                    }
                }, t.prototype.onEndContact = function(e, t, n) {
                    if (0 === t.tag && n.sensor) {
                        this.cleanActionableStack();
                        var i = n.node.getComponents(o.default).find(function(e) {
                            return e.isActive()
                        });
                        if (i) {
                            var r = this.actionableStack.indexOf(i);
                            if (-1 !== r) {
                                var s = this.getCurrentActionIndex();
                                if (this.actionableStack.splice(r, 1), r === s) {
                                    var c = this.getCurrentActionIndex();
                                    if (this.isPropOrDoor(i) && i.hasOwnBallooon) {
                                        if (i.hideBalloon(), -1 !== c) {
                                            var u = this.actionableStack[c];
                                            this.isPropOrDoor(u) ? u.hasOwnBallooon ? u.showBalloon() : (this.showBalloon(u.balloonFrame), l.default.get().ui.instance.hideMarker(u)) : (this.showBalloon(a.BalloonFrame.PointingDown), l.default.get().ui.instance.hideMarker(u))
                                        }
                                    } else -1 === c ? this.hideBalloon() : (u = this.actionableStack[c], this.isPropOrDoor(u) ? u.hasOwnBallooon ? (u.showBalloon(), this.hideBalloon()) : (this.showBalloon(u.balloonFrame), l.default.get().ui.instance.hideMarker(u)) : (this.showBalloon(a.BalloonFrame.PointingDown), l.default.get().ui.instance.hideMarker(u)))
                                }
                                r <= this.actionableStackLowPriorityIndex && --this.actionableStackLowPriorityIndex
                            }
                        }
                    }
                }, __decorate([m(sp.Skeleton)], t.prototype, "spine", void 0), __decorate([m(cc.Animation)], t.prototype, "attackHitAnim", void 0), __decorate([m(cc.Node)], t.prototype, "balloonParent", void 0), __decorate([m({
                    tooltip: "In px/s"
                })], t.prototype, "speed", void 0), __decorate([h, y(cc.RigidBody), f("Gameplay Component/Character")], t)
            }(i.default);
        n.default = v, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager",
        "../common/PausableComponent": "PausableComponent",
        "../managers/InteractBallonManager": "InteractBallonManager",
        "./GameState": "GameState",
        "./interactive/Door": "Door",
        "./interactive/InteractiveEntity": "InteractiveEntity",
        "./interactive/InteractiveProp": "InteractiveProp",
        "./interactive/NPC": "NPC"
    }],
    CheatUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cc016YJqSJGaalrx0GwkyAj", "CheatUI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../managers/GameManager"),
            r = cc._decorator,
            s = r.ccclass,
            c = r.property,
            l = r.menu,
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.infoLabel = null, t.cheatsController = null, t
                }
                var n;
                return __extends(t, e), n = t, Object.defineProperty(t, "enabled", {
                    get: function() {
                        return 0 === this.disablerCounter
                    },
                    set: function(e) {
                        e ? this.disablerCounter > 0 && --this.disablerCounter : (++this.disablerCounter, this.current && this.current.node && this.current.node.active && (this.current.node.active = !1)), console.log("Pause counter: " + this.disablerCounter)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t, "isUIActive", {
                    get: function() {
                        return this.current && this.current.node && this.current.node.active
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.forceEnable = function() {
                    this.disablerCounter = 0
                }, t.prototype.show = function() {
                    n.enabled && !this.node.active && (this.node.active = !0, this.interactive = !0, this.infoLabel.string = "", i.default.instance.playSfx(o.SFXKey.button_general), i.default.instance.playSfx(o.SFXKey.popup_open))
                }, t.prototype.hide = function() {
                    this.interactive && (this.interactive = !1, this.node.emit("hid"), this.node.active = !1, i.default.instance.playSfx(o.SFXKey.button_back), i.default.instance.playSfx(o.SFXKey.popup_close))
                }, t.prototype.onResume = function() {
                    this.interactive && (a.default.instance.emit("gameplay-resume-c"), i.default.instance.playSfx(o.SFXKey.button_general))
                }, t.prototype.onSavePressed = function(e, t) {
                    this.cheatsController.saveState(t), this.infoLabel.string = "Game saved on slot: " + t
                }, t.prototype.onLoadPressed = function(e, t) {
                    var n = this.cheatsController.loadState(t);
                    n ? this.infoLabel.string = n : this.onResume()
                }, t.prototype.onCompleteGamePressed = function() {
                    this.onResume(), this.cheatsController.goToFinal()
                }, t.prototype.onNewGamePressed = function() {
                    this.onResume(), this.cheatsController.reloadState()
                }, t.prototype.onGraphicPressed = function() {
                    var e = this.cheatsController.toggleColliders();
                    this.infoLabel.string = e
                }, t.prototype.onLoad = function() {
                    a.default.cheatsEnabled ? (n.current = this, this.cheatsController = a.default.instance.cheatsController, this.node.active = !1, a.default.instance.on("gameplay-pause-c", this.show, this), a.default.instance.on("gameplay-resume-c", this.hide, this), this.node.zIndex = 255) : this.node.destroy()
                }, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {}, t.prototype.onDestroy = function() {
                    console.log("destroy"), a.default.instance.off("gameplay-pause-c", this.show, this), a.default.instance.off("gameplay-resume-c", this.hide, this)
                }, t.current = null, t.disablerCounter = 0, __decorate([c(cc.Label)], t.prototype, "infoLabel", void 0), n = __decorate([s, l("Gameplay Component/UI/Cheat")], t)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../managers/GameManager": "GameManager"
    }],
    CheatsController: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1534docglxDWb3srRq+pTZc", "CheatsController"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = e("../managers/DataManager"),
            a = e("../managers/GameManager"),
            r = e("../gameplay/GameState"),
            s = e("../ui/gameplay/Transition"),
            c = e("../gameplay/quests/QuestSystem"),
            l = e("../ui/gameplay/PauseUI"),
            u = e("../gameplay/SurvivalMode"),
            p = {
                0: 48,
                1: 49,
                2: 50,
                3: 51,
                4: 52,
                5: 53,
                6: 54,
                7: 55,
                8: 56,
                9: 57,
                48: 0,
                49: 1,
                50: 2,
                51: 3,
                52: 4,
                53: 5,
                54: 6,
                55: 7,
                56: 8,
                57: 9
            };
        (function(e) {
            e[e.ControlMod = 1024] = "ControlMod", e[e.PhysicsDebugDraw = 2048] = "PhysicsDebugDraw", e[e.GameComplete = 4096] = "GameComplete"
        })(o || (o = {}));
        var d = function() {
            function e() {
                this.cheatInputFlags = 0, this._infiniteItems = !1, this._noRandomMovesInTicTacToe = !1, console.log("initializing Cheats controller"), a.default.cheatsEnabled ? (console.log("cheats are enabled: initializing key bindings"), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDownCheat, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUpCheat, this)) : console.log("cheats are disabled")
            }
            return Object.defineProperty(e.prototype, "infiniteItems", {
                get: function() {
                    return this._infiniteItems
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "noRandomMovesInTicTacToe", {
                get: function() {
                    return this._noRandomMovesInTicTacToe
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.onKeyDownCheat = function(e) {
                if (p[0] <= e.keyCode && e.keyCode <= p[9]) {
                    var t = 1 << p[e.keyCode];
                    if (0 != (this.cheatInputFlags & t)) return;
                    if (this.cheatInputFlags & o.ControlMod) p[0] !== e.keyCode && this.saveState(p[e.keyCode]);
                    else {
                        if (void 0 === r.default.get().world.currentRoom || !l.default.enabled) return;
                        p[0] === e.keyCode ? this.reloadState() : this.loadState(p[e.keyCode])
                    }
                } else switch (e.keyCode) {
                    case cc.macro.KEY.ctrl:
                        this.cheatInputFlags |= o.ControlMod;
                        break;
                    case cc.macro.KEY.tab:
                        if (0 != (this.cheatInputFlags & o.PhysicsDebugDraw)) return;
                        this.toggleColliders(), this.cheatInputFlags |= o.PhysicsDebugDraw;
                        break;
                    case cc.macro.KEY.c:
                        if (0 != (this.cheatInputFlags & o.GameComplete)) return;
                        this.cheatInputFlags & o.ControlMod && this.goToFinal(), this.cheatInputFlags |= o.GameComplete
                }
            }, e.prototype.onKeyUpCheat = function(e) {
                switch (e.keyCode) {
                    case cc.macro.KEY.ctrl:
                        this.cheatInputFlags &= ~o.ControlMod;
                        break;
                    case cc.macro.KEY.tab:
                        this.cheatInputFlags &= ~o.PhysicsDebugDraw;
                        break;
                    case cc.macro.KEY.c:
                        this.cheatInputFlags &= ~o.GameComplete
                }
            }, e.prototype.saveState = function(e) {
                var t = i.default.instance,
                    n = r.default.get();
                console.log("Saving game state in slot " + e), console.log(n.serialize()), n.world.currentRoom.addElapsedTime(), n.world.currentRoom.resetTime(), t.setStateData(n.serialize()), t.saveDataToSlot(e)
            }, e.prototype.loadState = function(e) {
                var t = i.default.instance,
                    n = r.default.get();
                if (void 0 !== n.world.currentRoom && l.default.enabled) {
                    var o;
                    if (!t.loadDataFromSlot(e)) return console.log("Game state slot " + e + " doesn't exists"), "Game state slot " + e + " doesn't exists";
                    console.log("Loading game state from slot " + e), console.log(t.getStateData().player.room), o = function() {
                        var e = n.world.currentRoom;
                        n.reset(), e.loadData(), cc.director.loadScene(t.getStateData().player.room)
                    }, this.toGameplay(o, n)
                }
            }, e.prototype.reloadState = function() {
                var e, t = r.default.get();
                console.log("Starting a new game from the beginning"), e = function() {
                    cc.director.loadScene("hw1_entrance")
                }, t.reset(), this.toGameplay(e, t, !1)
            }, e.prototype.goToFinal = function() {
                console.log("Cheat: Game complete"), a.default.instance.mode.gameOverReason = u.GameOverReason.GameCompleted, cc.director.loadScene("comics")
            }, e.prototype.toggleColliders = function() {
                var e = cc.director.getPhysicsManager();
                if (e.enabled) return e.debugDrawFlags ^= 65535, "Debug colliders " + (0 === e.debugDrawFlags ? "disabled" : "enabled")
            }, e.prototype.toGameplay = function(e, t, n) {
                void 0 === n && (n = !0), t.player.controlEnabled = !1, s.default.get().in().once("in-done", function() {
                    t.player.controlEnabled = !0, e();
                    var o = i.default.instance.getStateData().player.position;
                    cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {
                        cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function() {
                            c.default.start(), n && (r.default.get().player.character.node.x = o.x, r.default.get().player.character.node.y = o.y)
                        })
                    })
                })
            }, e
        }();
        n.default = d, cc._RF.pop()
    }, {
        "../gameplay/GameState": "GameState",
        "../gameplay/SurvivalMode": "SurvivalMode",
        "../gameplay/quests/QuestSystem": "QuestSystem",
        "../managers/DataManager": "DataManager",
        "../managers/GameManager": "GameManager",
        "../ui/gameplay/PauseUI": "PauseUI",
        "../ui/gameplay/Transition": "Transition"
    }],
    CombinationLockProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bb3ecxDzj5JgrNH5uMFTB+L", "CombinationLockProp"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../common/Resources"),
            i = e("../../config/GameConfig"),
            a = e("../../managers/InteractBallonManager"),
            r = e("../GameState"),
            s = e("../inventory/Item"),
            c = e("../WorldInfo"),
            l = e("./InteractiveProp"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = u.menu,
            m = cc.Enum(c.EnvironmentFlags),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.request = s.ItemType.None, t.enablerEnvFlag = c.EnvironmentFlags.BlackboardNumberWritten, t.enablerEnvFlagValue = !0, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "balloonFrame", {
                    get: function() {
                        return this.request !== s.ItemType.None && r.default.get().player.inventory.getItemsByType(this.request).length > 0 ? a.default.itemTypeToFrame(this.info.request) : a.BalloonFrame.PointingDown
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.doAction = function() {
                    var e = this;
                    this.node.emit("action-done", this);
                    var t = r.default.get();
                    return (t.world.environmentFlags & this.enablerEnvFlag) === this.enablerEnvFlag ? (t.player.character.node.emit("minigame-started", o.ResourceID.CombLockMinigame, this.name, function() {
                        e.info.active = !1, e.setActive(!1), e.animation.play(e.clip.name), e.animation.on(cc.Animation.EventType.FINISHED, e.performAction, e), cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, e.performAction, e), e.node.emit("fulfilling-request-started", e)
                    }), !0) : (this.hasOwnBallooon ? (this.unscheduleAllCallbacks(), this.showBalloon(), this.scheduleOnce(function() {
                        return e.hideBalloon()
                    }, i.bubbleDuration)) : t.player.character.showBalloon(this.customBalloonFrame), this.balloonFrame !== a.BalloonFrame.NegationDown && this.balloonFrame !== a.BalloonFrame.NegationRight && this.balloonFrame !== a.BalloonFrame.NegationUp)
                }, t.prototype.performAction = function() {
                    this.animation.off(cc.Animation.EventType.FINISHED, this.performAction, this), cc.director.off(cc.Director.EVENT_BEFORE_SCENE_LOADING, this.performAction, this), this.clip && this.animation.setCurrentTime(this.clip.duration), this.onRequestFulfilled(), this.node.emit("minigame-done", this)
                }, __decorate([d({
                    readonly: !0,
                    override: !0
                })], t.prototype, "request", void 0), __decorate([d({
                    type: m
                })], t.prototype, "enablerEnvFlag", void 0), __decorate([d], t.prototype, "enablerEnvFlagValue", void 0), __decorate([p, h("Gameplay Component/Interactive/Combination Lock")], t)
            }(l.InteractiveProp);
        n.default = f, cc._RF.pop()
    }, {
        "../../common/Resources": "Resources",
        "../../config/GameConfig": "GameConfig",
        "../../managers/InteractBallonManager": "InteractBallonManager",
        "../GameState": "GameState",
        "../WorldInfo": "WorldInfo",
        "../inventory/Item": "Item",
        "./InteractiveProp": "InteractiveProp"
    }],
    CombinationLock: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "863ccgoSsNHkaocV/aRuA/S", "CombinationLock"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../config/GameConfig"),
            r = e("../../config/InputConfig"),
            s = e("../GameState"),
            c = e("../WorldInfo"),
            l = e("./BaseMinigame"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.numberLabels = [], t.shapes = [], t.shapeFrames = [], t.arrowButtons = [], t.closeButtonAnim = null, t.correctCombination = [], t
                }
                return __extends(t, e), t.prototype.show = function(t) {
                    var n = this;
                    e.prototype.show.call(this, t);
                    for (var o = 0; o < this.numberLabels.length; o++) this.setLabelColor(this.numberLabels[o].node, a.combinationConfig.combLocks[t].digits[o].color.base, a.combinationConfig.combLocks[t].digits[o].color.outline), this.setShape(this.shapes[o], a.combinationConfig.combLocks[t].digits[o].shape), this.numberLabels[o].string = "0", this.correctCombination.push(a.combinationConfig.combLocks[t].digits[o].number);
                    this.closeButtonAnim.play("IN_button"), this.animation.play("IN_lock"), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        n.inputFlags = l.MinigameInput.AllEnabled
                    }), r.uiActions.accept.on("triggered", this.pressCheck, this), r.uiActions.cancel.on("triggered", this.onClose, this)
                }, t.prototype.setLabelColor = function(e, t, n) {
                    e.color = e.color.fromHEX(t), e.getComponent(cc.LabelOutline).color = e.color.fromHEX(n)
                }, t.prototype.setShape = function(e, t) {
                    var n = this.shapeFrames.find(function(e) {
                        return e.name === t
                    });
                    n ? e.spriteFrame = n : e.enabled = !1
                }, t.prototype.pressUp = function(e, t) {
                    if ((this.inputFlags & l.MinigameInput.Game) !== l.MinigameInput.Disabled) {
                        var n, a = this.numberLabels[t],
                            r = parseInt(a.string);
                        n = r >= 0 && r < 9 ? r + 1 : 0, a.string = n.toString(), i.default.instance.playSfx(o.SFXKey.padlock_numbers)
                    }
                }, t.prototype.pressDown = function(e, t) {
                    if ((this.inputFlags & l.MinigameInput.Game) !== l.MinigameInput.Disabled) {
                        var n, a = this.numberLabels[t],
                            r = parseInt(a.string);
                        n = r <= 9 && r > 0 ? r - 1 : 9, a.string = n.toString(), i.default.instance.playSfx(o.SFXKey.padlock_numbers)
                    }
                }, t.prototype.pressCheck = function() {
                    if ((this.inputFlags & l.MinigameInput.Game) !== l.MinigameInput.Disabled)
                        if (s.default.get().world.environmentFlags & c.EnvironmentFlags.BlackboardNumberWritten) {
                            for (var e = !0, t = 0; t < this.numberLabels.length; t++)
                                if (parseInt(this.numberLabels[t].string) !== this.correctCombination[t]) {
                                    e = !1;
                                    break
                                }
                            e ? this.win() : this.shake(), i.default.instance.playSfx(o.SFXKey.button_general)
                        } else this.shake()
                }, t.prototype.win = function() {
                    var e = this;
                    this.animation.play("PLAY_unlock"), this.blockInput(), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.hide(), e.node.once("hid", function() {
                            e.node.emit("done")
                        })
                    }), i.default.instance.playSfx(o.SFXKey.padlock_numbers_open)
                }, t.prototype.shake = function() {
                    var e = this;
                    this.animation.play("PLAY_lock_wrong"), this.blockInput(), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.unblockInput(), e.hide()
                    }), i.default.instance.playSfx(o.SFXKey.padlock_numbers_wrong)
                }, t.prototype.blockInput = function() {
                    this.inputFlags &= ~l.MinigameInput.Game, this.arrowButtons.forEach(function(e) {
                        e.interactable = !1
                    })
                }, t.prototype.unblockInput = function() {
                    this.inputFlags |= l.MinigameInput.Game, this.arrowButtons.forEach(function(e) {
                        e.interactable = !0
                    })
                }, t.prototype.hide = function() {
                    e.prototype.hide.call(this), this.tween && (this.tween.stop(), this.tween = null), this.closeButtonAnim.play("OUT_button"), this.animation.play("OUT_lock"), this.animation.once(cc.Animation.EventType.FINISHED, this.onHid, this), r.uiActions.accept.off("triggered", this.pressCheck, this), r.uiActions.cancel.off("triggered", this.onClose, this)
                }, t.prototype.onClose = function() {
                    (this.inputFlags & l.MinigameInput.Popup) !== l.MinigameInput.Disabled && (this.hide(), i.default.instance.playSfx(o.SFXKey.button_back))
                }, t.prototype.onLoad = function() {
                    this.animation = this.getComponent(cc.Animation), e.prototype.onLoad.call(this)
                }, __decorate([d([cc.Label])], t.prototype, "numberLabels", void 0), __decorate([d([cc.Sprite])], t.prototype, "shapes", void 0), __decorate([d([cc.SpriteFrame])], t.prototype, "shapeFrames", void 0), __decorate([d([cc.Button])], t.prototype, "arrowButtons", void 0), __decorate([d(cc.Animation)], t.prototype, "closeButtonAnim", void 0), __decorate([p], t)
            }(l.default);
        n.default = h, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../config/GameConfig": "GameConfig",
        "../../config/InputConfig": "InputConfig",
        "../GameState": "GameState",
        "../WorldInfo": "WorldInfo",
        "./BaseMinigame": "BaseMinigame"
    }],
    ComicScreen: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bcb0eQBx+JKEqsuh3o6i7vD", "ComicScreen"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../audios/AudioConfig"),
            i = e("../audios/AudioManager"),
            a = e("../gameplay/GameState"),
            r = e("../gameplay/SurvivalMode"),
            s = e("../managers/DataManager"),
            c = e("../managers/GameManager"),
            l = e("./gameplay/PauseUI"),
            u = e("./LoadingScreen"),
            p = cc._decorator,
            d = p.ccclass,
            h = p.property,
            m = p.menu,
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.panelAnims = [], t.buttonAnim = null, t.buttonComp = null, t.blackScreen = null, t.step = 0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    if (this.blackScreen.active = !1, this.step = 0, c.default.instance.mode.gameOverReason === r.GameOverReason.GameIsNotOver) {
                        for (var e = 0; e < this.panelAnims.length; e++) this.panelAnims[e].node.active = !1;
                        this.currentPanel = this.panelAnims[0]
                    } else this.panelAnims[0].node.active = !1, this.currentPanel = this.panelAnims[1], this.buttonComp.interactable = !1, this.currentPanel.once("start-music", function() {
                        i.default.instance.playMusic(o.HowlsKey.music_comic2)
                    });
                    this.buttonAnim.node.active = !1, this.currentPanel.node.active = !1, this.currentPanel.once("IN_button", this.playInNextButton, this)
                }, t.prototype.start = function() {
                    var e = this;
                    u.default.get().out().once("out-done", function() {
                        e.scheduleOnce(e.progressComic.bind(e), 1), c.default.instance.mode.gameOverReason !== r.GameOverReason.GameIsNotOver ? i.default.instance.playSfx(o.SFXKey.final_comic_in) : i.default.instance.playMusic(o.HowlsKey.music_comic1)
                    })
                }, t.prototype.playInNextButton = function() {
                    var e = this;
                    this.buttonAnim.node.active = !0, this.buttonAnim.play("IN_button"), this.buttonAnim.setCurrentTime(0), this.buttonAnim.once(cc.Animation.EventType.FINISHED, function() {
                        e.buttonComp.interactable = !0
                    })
                }, t.prototype.onNext = function() {
                    var e = this;
                    i.default.instance.playSfx(o.SFXKey.button_general), this.buttonComp.interactable = !1, this.buttonAnim.play("OUT_button"), this.buttonAnim.setCurrentTime(0), this.buttonAnim.once(cc.Animation.EventType.FINISHED, function() {
                        e.panelAnims[0].node.active ? e.progressComic() : (e.blackScreen.opacity = 0, e.blackScreen.active = !0, cc.tween(e.blackScreen).to(1, {
                            opacity: 255
                        }).call(function() {
                            cc.director.loadScene("gamecomplete")
                        }).start())
                    })
                }, t.prototype.progressComic = function() {
                    var e = this.currentPanel.node,
                        t = this.currentPanel.getClips();
                    if (e.active || (e.active = !0), this.step < t.length) {
                        var n = t[this.step].name;
                        this.currentPanel.play(n), this.currentPanel.setCurrentTime(0), -1 === n.indexOf("LOOP") && this.currentPanel.once(cc.Animation.EventType.FINISHED, this.progressComic, this)
                    } else s.default.instance.firstTime(!1), u.default.get().in().once("in-done", this.goToGame, this);
                    this.step += 1
                }, t.prototype.goToGame = function() {
                    var e = a.default.get(),
                        t = e.player;
                    e.reset(), t.inventory.clear(), l.default.forceEnable(), c.default.instance.mode.gameOverReason = r.GameOverReason.GameIsNotOver, s.default.instance.gameDataExists() ? cc.director.loadScene(s.default.instance.getStateData().player.room) : cc.director.loadScene("hw1_entrance")
                }, __decorate([h([cc.Animation])], t.prototype, "panelAnims", void 0), __decorate([h(cc.Animation)], t.prototype, "buttonAnim", void 0), __decorate([h(cc.Button)], t.prototype, "buttonComp", void 0), __decorate([h(cc.Node)], t.prototype, "blackScreen", void 0), __decorate([d, m("Frontend Component/ComicScreen")], t)
            }(cc.Component);
        n.default = f, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager",
        "../gameplay/GameState": "GameState",
        "../gameplay/SurvivalMode": "SurvivalMode",
        "../managers/DataManager": "DataManager",
        "../managers/GameManager": "GameManager",
        "./LoadingScreen": "LoadingScreen",
        "./gameplay/PauseUI": "PauseUI"
    }],
    CounterComponent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e1398nO9klAp6nHUmrLxclL", "CounterComponent"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = o.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.counterLabel = null, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "current", {
                    get: function() {
                        var e = this.counterLabel.string.indexOf("/");
                        return ~~this.counterLabel.string.substring(0, e)
                    },
                    set: function(e) {
                        var t = this.counterLabel.string.indexOf("/"),
                            n = this.counterLabel.string.substr(t);
                        this.counterLabel.string = "" + e + n
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "target", {
                    get: function() {
                        var e = this.counterLabel.string.indexOf("/");
                        return ~~this.counterLabel.string.substr(e + 1)
                    },
                    set: function(e) {
                        var t = this.counterLabel.string.indexOf("/"),
                            n = this.counterLabel.string.substring(0, t + 1);
                        this.counterLabel.string = "" + n + e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onLoad = function() {
                    this.counterLabel.string = "0/0"
                }, __decorate([a(cc.Label)], t.prototype, "counterLabel", void 0), __decorate([i, r("Common Component/UI/CounterComponent")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    CriticalHealthEffect: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8a2f3B8+2NL84ImV+05DhxZ", "CriticalHealthEffect"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../managers/GameManager"),
            r = cc._decorator,
            s = r.ccclass,
            c = r.property,
            l = r.menu,
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.animation = null, t.shouldBeActive = !1, t.sfx = void 0, t
                }
                return __extends(t, e), t.prototype.init = function(e) {
                    this.shouldBeActive = e, this.shouldBeActive && (this.node.active = !0, this.animation.play("LOOP_red_screen"))
                }, t.prototype.show = function() {
                    this.shouldBeActive = !0, this.node.active || (this.node.active = !0, this.startAnimation())
                }, t.prototype.hide = function() {
                    if (this.shouldBeActive = !1, this.node.active) {
                        var e = this.animation.currentClip,
                            t = e && this.animation.getAnimationState(e.name);
                        t && "LOOP_red_screen" === t.name && this.endAnimation()
                    }
                }, t.prototype.startAnimation = function() {
                    var e = this;
                    this.animation.play("PLAY_red_screen"), this.animation.setCurrentTime(0);
                    var t = cc.Animation.EventType.FINISHED;
                    this.animation.off(t), this.animation.once(t, function() {
                        e.shouldBeActive ? e.animation.play("LOOP_red_screen") : e.endAnimation()
                    })
                }, t.prototype.endAnimation = function() {
                    var e = this;
                    this.animation.play("OUT_red_screen"), this.animation.setCurrentTime(0);
                    var t = cc.Animation.EventType.FINISHED;
                    this.animation.off(t), this.animation.once(t, function() {
                        e.shouldBeActive ? e.startAnimation() : e.node.active = !1
                    }), void 0 !== this.sfx && i.default.instance.stopSfx(this.sfx)
                }, t.prototype.onPause = function() {
                    this.animation.pause(), void 0 !== this.sfx && i.default.instance.pauseSfx(this.sfx)
                }, t.prototype.onResume = function() {
                    this.animation.resume(), void 0 !== this.sfx && i.default.instance.resumeSfx(this.sfx)
                }, t.prototype.onLoad = function() {
                    var e = this;
                    this.node.active = !1, this.animation.on("started", function() {
                        e.sfx = i.default.instance.playSfx(o.SFXKey.low_life)
                    }), a.default.instance.on("gameplay-pause", this.onPause, this), a.default.instance.on("gameplay-resume", this.onResume, this)
                }, t.prototype.onDestroy = function() {
                    a.default.instance.off("gameplay-pause", this.onPause, this), a.default.instance.off("gameplay-resume", this.onResume, this)
                }, __decorate([c(cc.Animation)], t.prototype, "animation", void 0), __decorate([s, l("Gameplay Component/UI/CriticalHealthEffect")], t)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../managers/GameManager": "GameManager"
    }],
    DataManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b07a4EYhABJBJtgLCa8QjAk", "DataManager"), Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.LocalDataKey = void 0,
            function(e) {
                e[e.dataSeccion = 0] = "dataSeccion"
            }(n.LocalDataKey || (n.LocalDataKey = {}));
        var o = function(e) {
            function t() {
                var n = e.call(this) || this;
                return n.localData = {}, n.storageKey = "cicn-gumball-puzzle", n.version = "0.5.12", t._instance = n, cc.game.addPersistRootNode(n), n.loadData(), n
            }
            return __extends(t, e), Object.defineProperty(t, "instance", {
                get: function() {
                    return this._instance || (this._instance = new t), this._instance
                },
                enumerable: !1,
                configurable: !0
            }), t.init = function() {
                return t.instance
            }, t.prototype.initData = function() {
                var e;
                e = {
                    game: void 0,
                    audioEnabled: !0,
                    firstTime: !0,
                    version: this.version
                }, this.storageData = e, this.saveData()
            }, t.prototype.loadData = function() {
                var e = cc.sys.localStorage.getItem(this.storageKey);
                this.storageData = JSON.parse(e), null !== e && this.storageData.version === this.version || this.initData()
            }, t.prototype.saveData = function() {
                cc.sys.localStorage.setItem(this.storageKey, JSON.stringify(this.storageData))
            }, t.prototype.loadDataFromSlot = function(e) {
                var t = cc.sys.localStorage.getItem(this.storageKey + "-" + e),
                    n = JSON.parse(t);
                return null !== n && n.version === this.version && (this.storageData = n, !0)
            }, t.prototype.saveDataToSlot = function(e) {
                cc.sys.localStorage.setItem(this.storageKey + "-" + e, JSON.stringify(this.storageData))
            }, t.prototype.getLocalKey = function(e) {
                return void 0 !== this.localData[e] ? this.localData[e] : null
            }, t.prototype.setLocalKey = function(e, t) {
                this.localData[e] = t
            }, t.prototype.clearAllLocalKey = function() {
                for (var e in this.localData) this.localData[e] && delete this.localData[e]
            }, t.prototype.getRoomData = function() {
                return this.storageData.game && this.storageData.game.room
            }, t.prototype.setRoomData = function(e) {
                this.storageData.game ? this.storageData.game.room = e : this.storageData.game = {
                    room: e,
                    state: void 0
                }, this.saveData()
            }, t.prototype.getStateData = function() {
                return this.storageData.game && this.storageData.game.state
            }, t.prototype.setStateData = function(e) {
                this.storageData.game ? this.storageData.game.state = e : this.storageData.game = {
                    room: void 0,
                    state: e
                }, this.saveData()
            }, t.prototype.setGameData = function(e, t) {
                this.storageData.game ? (this.storageData.game.room = e, this.storageData.game.state = t) : this.storageData.game = {
                    room: e,
                    state: t
                }, this.saveData()
            }, t.prototype.gameDataExists = function() {
                return !!this.storageData.game
            }, t.prototype.clearGameData = function() {
                this.storageData.game = void 0, this.saveData()
            }, t.prototype.isAudioEnabled = function() {
                return this.storageData.audioEnabled
            }, t.prototype.audioEnabled = function(e) {
                this.storageData.audioEnabled = e, this.saveData()
            }, t.prototype.isFirstTime = function() {
                return this.storageData.firstTime
            }, t.prototype.firstTime = function(e) {
                this.storageData.firstTime = e, this.saveData()
            }, t._instance = null, t
        }(cc.Node);
        n.default = o, o.init(), cc._RF.pop()
    }, {}],
    DepthFixer: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8385eyPzZ5PuLwjmTS7AxiG", "DepthFixer"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.menu,
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.lateUpdate = function() {
                    this.node.zIndex = -this.node.y
                }, __decorate([i, a("Gameplay Component/DepthFixer")], t)
            }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    DisableAfterMethodCall: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9c450zby6tLv4nplHVGIyx+", "DisableAfterMethodCall"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = o.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.targetNode = null, t.compName = "", t.methodName = "", t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "target", {
                    get: function() {
                        return this.targetNode
                    },
                    set: function(e) {
                        this.enabled || (this.targetNode = e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "comp", {
                    get: function() {
                        return this.compName
                    },
                    set: function(e) {
                        this.enabled || (this.compName = e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "method", {
                    get: function() {
                        return this.methodName
                    },
                    set: function(e) {
                        this.enabled || (this.methodName = e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.forceLink = function() {
                    if (this.targetNode)
                        if (this.targetNode) {
                            var e = this.targetNode.getComponent(this.compName),
                                t = e && e[this.methodName];
                            if (t) {
                                var n = this;
                                this.ogMethod = t, e[this.methodName] = function() {
                                    for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                                    var a = t.bind(e).apply(void 0, o);
                                    return n.node.active = !1, a
                                }
                            }
                        } else this.enabled = !1;
                    else this.enabled = !1
                }, t.prototype.onEnable = function() {
                    this.forceLink()
                }, t.prototype.onDisable = function() {
                    if (this.targetNode) {
                        var e = this.targetNode.getComponent(this.compName);
                        e && e[this.methodName] && this.ogMethod && (e[this.methodName] = this.ogMethod, this.ogMethod = null), this.node.emit("disabled")
                    }
                }, __decorate([a(cc.Node)], t.prototype, "targetNode", void 0), __decorate([a], t.prototype, "compName", void 0), __decorate([a], t.prototype, "methodName", void 0), __decorate([i, r("Gameplay Component/UI/Tutorial/DisableAfterMethodCall")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    Door: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2bb58S6XEtAjop/VsMDHY/y", "Door"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./InteractiveEntity"),
            i = e("../../managers/InteractBallonManager"),
            a = e("../../audios/AudioManager"),
            r = e("../../audios/AudioConfig"),
            s = e("../../ui/gameplay/Transition"),
            c = e("../GameState"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = l.menu,
            h = cc.Enum(i.BalloonFrame),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.targetRoom = "", t.doorId = "", t._balloonFrame = i.BalloonFrame.PointingDown, t.lockedBalloonFrame = i.BalloonFrame.None, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "balloonFrame", {
                    get: function() {
                        return this.canPerformAction() ? this._balloonFrame !== i.BalloonFrame.None ? this._balloonFrame : i.BalloonFrame.PointingDown : this.lockedBalloonFrame
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.doAction = function() {
                    if (!this.enabled) return !1;
                    if (!this.canPerformAction()) return !1;
                    var e = c.default.get().world,
                        t = e.doors[this.doorId],
                        n = e.currentRoom.getName() === t.roomA ? t.roomB : t.roomA;
                    return s.default.get().in().once("in-done", function() {
                        cc.director.loadScene(n)
                    }), this.enabled = !1, a.default.instance.playSfx(r.SFXKey.door_interaction), !0
                }, t.prototype.canPerformAction = function() {
                    return !c.default.get().world.doors[this.doorId].locked
                }, t.prototype.enableContactListener = function() {
                    var e = this.getComponent(cc.RigidBody);
                    e && (e.enabledContactListener = !0)
                }, t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this.lockedBalloonFrame !== i.BalloonFrame.None ? this.setActive(!0) : this.setActive(!c.default.get().world.doors[this.doorId].locked)
                }, __decorate([p], t.prototype, "targetRoom", void 0), __decorate([p], t.prototype, "doorId", void 0), __decorate([p({
                    type: h,
                    visible: !0,
                    displayName: "Balloon Frame"
                })], t.prototype, "_balloonFrame", void 0), __decorate([p({
                    type: h
                })], t.prototype, "lockedBalloonFrame", void 0), __decorate([u, d("Gameplay Component/Props/Door")], t)
            }(o.default);
        n.default = m, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../managers/InteractBallonManager": "InteractBallonManager",
        "../../ui/gameplay/Transition": "Transition",
        "../GameState": "GameState",
        "./InteractiveEntity": "InteractiveEntity"
    }],
    EnemyConfig: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "192ebiG37hAVpySQGwwrrSr", "EnemyConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.enemyConfig = void 0, n.enemyConfig = {
            roomChangeTime: 60,
            aimTime: 6.5,
            crosshairDelayMultiplier: .55,
            noItemsDamage: 2,
            enemyDisabledTime: 180
        }, cc._RF.pop()
    }, {}],
    Enumerators: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "137bdVS/uNH/Yv6Ry9VmZhs", "Enumerators"), Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Direction = void 0,
            function(e) {
                e[e.Down = 0] = "Down", e[e.Up = 1] = "Up", e[e.Left = 2] = "Left", e[e.Right = 3] = "Right"
            }(n.Direction || (n.Direction = {})), cc._RF.pop()
    }, {}],
    EnvironmentFrame: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "43858/XbpZFHLHkeY1P+8PU", "EnvironmentFrame"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./BaseEnvironmentProp"),
            i = e("./GameState"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.frame = null, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "active", {
                    get: function() {
                        return !!(i.default.get().world.environmentFlags & this.envFlag) === this.envFlagValue
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.updateProp = function() {
                    if (this.active) {
                        var e = this.getComponent(cc.Sprite);
                        e && (e.spriteFrame = this.frame)
                    }
                }, t.prototype.onLoad = function() {
                    this.updateProp()
                }, __decorate([s(cc.SpriteFrame)], t.prototype, "frame", void 0), __decorate([r, c("Gameplay Component/Environment Frame")], t)
            }(o.default);
        n.default = l, cc._RF.pop()
    }, {
        "./BaseEnvironmentProp": "BaseEnvironmentProp",
        "./GameState": "GameState"
    }],
    EnvironmentFx: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4e737DxwHhOFI8p062VZaDh", "EnvironmentFx"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../common/PausableComponent"),
            i = e("./interactive/InteractiveProp"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.animation = null, t.relatedProp = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var t = this;
                    e.prototype.onLoad.call(this), this.relatedProp.node.on("prop-loaded", this.setState, this), this.relatedProp.node.on("state-changed", this.setState, this), this.relatedProp.node.on("request-fulfilled", function() {
                        t.node.active = !1
                    }, this)
                }, t.prototype.setState = function() {
                    this.relatedProp.info && this.relatedProp.info.active ? this.node.active = !0 : this.node.active = !1
                }, t.prototype.onResume = function() {
                    this.animation.resume()
                }, t.prototype.onPause = function() {
                    this.animation.pause()
                }, t.prototype.onDestroy = function() {
                    e.prototype.onDestroy.call(this), this.relatedProp.node.off("prop-loaded"), this.relatedProp.node.off("state-changed"), this.relatedProp.node.off("request-fulfilled")
                }, __decorate([s(cc.Animation)], t.prototype, "animation", void 0), __decorate([s(i.InteractiveProp)], t.prototype, "relatedProp", void 0), __decorate([r, c("Gameplay Component/Environment Prop")], t)
            }(o.default);
        n.default = l, cc._RF.pop()
    }, {
        "../common/PausableComponent": "PausableComponent",
        "./interactive/InteractiveProp": "InteractiveProp"
    }],
    EnvironmentProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "49589fwlDNKe7Obq3Vej+pN", "EnvironmentProp"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./BaseEnvironmentProp"),
            i = e("./GameState"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.playAnimationOnActivation = !0, t
                }
                return __extends(t, e), t.prototype.updateProp = function() {
                    var e, t = this.node.active;
                    this.setActiveStatus(), this.node.active && !1 === t && this.playAnimationOnActivation && (null === (e = this.getComponent(cc.Animation)) || void 0 === e || e.play())
                }, t.prototype.setActiveStatus = function() {
                    this.node.active = !!(i.default.get().world.environmentFlags & this.envFlag) === this.envFlagValue
                }, t.prototype.onLoad = function() {
                    this.setActiveStatus()
                }, __decorate([s], t.prototype, "playAnimationOnActivation", void 0), __decorate([r, c("Gameplay Component/Environment Prop")], t)
            }(o.default);
        n.default = l, cc._RF.pop()
    }, {
        "./BaseEnvironmentProp": "BaseEnvironmentProp",
        "./GameState": "GameState"
    }],
    EventPanelPropListener: [function(e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "fa235YQBeRNY4CLVnrRSphB", "EventPanelPropListener"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, a = e("../../common/Resources"),
            r = e("../../ui/gameplay/panels/EventPanel"),
            s = e("../../ui/gameplay/panels/HintEventPanel"),
            c = e("../GameState"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property;
        (function(e) {
            e[e.Default = 0] = "Default", e[e.FireExtinguisher = 1] = "FireExtinguisher", e[e.Bell = 2] = "Bell", e[e.Hint = 3] = "Hint", e[e.PCVideoHint = 4] = "PCVideoHint"
        })(i || (i = {}));
        var d = cc.Enum(i),
            h = cc.Enum(r.EventImage),
            m = cc.Enum(s.HintEventImage),
            f = ((o = {})[i.Default] = a.ResourceID.EventPanel, o[i.FireExtinguisher] = a.ResourceID.FireExtinguisherEventPanel, o[i.Bell] = a.ResourceID.BellEventPanel, o[i.Hint] = a.ResourceID.HintPanel, o[i.PCVideoHint] = a.ResourceID.PCVideoHintPanel, o),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.panelType = i.Default, t.eventImage = r.EventImage.GumStick, t.hintImage = s.HintEventImage.Headband, t.showOnRequestFulfilled = !0, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "image", {
                    get: function() {
                        return this.panelType === i.Default ? this.eventImage : this.panelType === i.Hint ? this.hintImage : void 0
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onActionDone = function(e) {
                    var t = this;
                    this.showOnRequestFulfilled === e.canPerformAction() && (cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function() {
                        c.default.get().ui.instance.showCustomEventPanel(f[t.panelType], t.image), c.default.get().player.hideBalloonWhenControlDisabled = !0
                    }), c.default.get().player.hideBalloonWhenControlDisabled = !1)
                }, t.prototype.onLoad = function() {
                    this.node.on("action-done", this.onActionDone, this)
                }, __decorate([p({
                    type: d
                })], t.prototype, "panelType", void 0), __decorate([p({
                    type: h,
                    visible: function() {
                        return this.panelType === i.Default
                    }
                })], t.prototype, "eventImage", void 0), __decorate([p({
                    type: m,
                    visible: function() {
                        return this.panelType === i.Hint
                    }
                })], t.prototype, "hintImage", void 0), __decorate([p], t.prototype, "showOnRequestFulfilled", void 0), __decorate([u], t)
            }(cc.Component);
        n.default = y, cc._RF.pop()
    }, {
        "../../common/Resources": "Resources",
        "../../ui/gameplay/panels/EventPanel": "EventPanel",
        "../../ui/gameplay/panels/HintEventPanel": "HintEventPanel",
        "../GameState": "GameState"
    }],
    EventPanel: [function(e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "525bcE1e7dINqCydeOmdoix", "EventPanel"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.EventImage = void 0;
        var i, a = e("../../../audios/AudioConfig"),
            r = e("../../../audios/AudioManager"),
            s = e("../../../common/Resources"),
            c = e("../../../config/InputConfig"),
            l = e("./Panel"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property;
        (function(e) {
            e[e.GumStick = 0] = "GumStick", e[e.Blackboard = 1] = "Blackboard", e[e.Vent = 2] = "Vent", e[e.Alan = 3] = "Alan", e[e.Pointer = 4] = "Pointer"
        })(i = n.EventImage || (n.EventImage = {}));
        var h = ((o = {})[i.GumStick] = s.ResourceID.EventGumStick, o[i.Blackboard] = s.ResourceID.EventBlackboard, o[i.Vent] = s.ResourceID.EventVent, o[i.Alan] = s.ResourceID.EventAlan, o[i.Pointer] = s.ResourceID.EventPointer, o),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.okButton = null, t.image = null, t.interactive = !1, t
                }
                return __extends(t, e), t.prototype.show = function() {
                    var t = this;
                    e.prototype.show.call(this), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        c.uiActions.accept.on("triggered", t.onOk, t)
                    }), this.okButton.play("IN_button"), this.okButton.setCurrentTime(0), this.okButton.stop(), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        t.okButton.play("IN_button"), t.okButton.once(cc.Animation.EventType.FINISHED, function() {
                            t.interactive = !0
                        })
                    })
                }, t.prototype.hide = function() {
                    e.prototype.hide.call(this), this.okButton.play("OUT_button"), this.interactive = !1, r.default.instance.playSfx(a.SFXKey.banner_out), this.image.spriteFrame === s.default.get(h[i.Blackboard]) && this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        r.default.instance.playSfx(a.SFXKey.chalkboard_numbers)
                    })
                }, t.prototype.onOk = function() {
                    this.interactive && (this.hide(), r.default.instance.playSfx(a.SFXKey.button_general))
                }, t.prototype.hideOkButton = function() {
                    this.okButton.node.active = !1
                }, t.prototype.skipInAnimation = function() {
                    var e = this.animation.currentClip;
                    e && this.animation.getAnimationState(e.name).isPlaying && this.animation.setCurrentTime(e.duration)
                }, t.prototype.setImage = function(e) {
                    this.image.spriteFrame = s.default.get(h[e]), e === i.GumStick || e === i.Pointer ? r.default.instance.playSfx(a.SFXKey.banner_crafted_item) : e === i.Blackboard ? r.default.instance.playSfx(a.SFXKey.banner_eraser_in) : e === i.Alan && r.default.instance.playSfx(a.SFXKey.banner_blowgun_in)
                }, __decorate([d(cc.Animation)], t.prototype, "okButton", void 0), __decorate([d(cc.Sprite)], t.prototype, "image", void 0), __decorate([p], t)
            }(l.default);
        n.default = m, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager",
        "../../../common/Resources": "Resources",
        "../../../config/InputConfig": "InputConfig",
        "./Panel": "Panel"
    }],
    Fade: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c991dh0FClKmLfv3hPqUETa", "Fade"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.Fade = void 0;
        var o = e("../../common/PausableComponent"),
            i = e("../../gameplay/GameState"),
            a = cc._decorator.ccclass,
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.in = function(e) {
                    var t = this;
                    this.node.active = !0, this.node.opacity = 0, this.playerControl = i.default.get().player.controlEnabled, i.default.get().player.controlEnabled = !1, cc.tween(this.node).to(e, {
                        opacity: 255
                    }).call(function() {
                        t.node.emit("in-done")
                    }).start()
                }, t.prototype.out = function(e) {
                    var t = this;
                    this.node.active = !0, this.node.opacity = 255, cc.tween(this.node).to(e, {
                        opacity: 0
                    }).call(function() {
                        t.node.emit("out-done"), t.node.active = !1, i.default.get().player.controlEnabled = t.playerControl
                    }).start()
                }, __decorate([a], t)
            }(o.default);
        n.Fade = r, cc._RF.pop()
    }, {
        "../../common/PausableComponent": "PausableComponent",
        "../../gameplay/GameState": "GameState"
    }],
    FireExtinguisherPanelAudio: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "55f0aEPsilBYYkSZTaDmYxp", "FireExtinguisherPanelAudio"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../audios/AudioConfig"),
            i = e("../../../audios/AudioManager"),
            a = cc._decorator.ccclass,
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.getComponent(cc.Animation).on("sfx1", function() {
                        i.default.instance.playSfx(o.SFXKey.banner_extinguisher2)
                    }), i.default.instance.playSfx(o.SFXKey.banner_extinguisher1)
                }, __decorate([a], t)
            }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager"
    }],
    FocusManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "90f609OyBhJqoSQjM7tWriZ", "FocusManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                var n = e.call(this) || this;
                return n._isFocus = !0, t._instance = n, cc.game.addPersistRootNode(n), cc.game.on(cc.game.EVENT_HIDE, n.onBlur, n), cc.game.on(cc.game.EVENT_SHOW, n.onFocus, n), window.onfocus = n.onFocus.bind(n), window.onblur = n.onBlur.bind(n), n
            }
            return __extends(t, e), Object.defineProperty(t, "instance", {
                get: function() {
                    return this._instance || (this._instance = new t), this._instance
                },
                enumerable: !1,
                configurable: !0
            }), t.init = function() {
                return t.instance
            }, Object.defineProperty(t.prototype, "isFocus", {
                get: function() {
                    return this._isFocus
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.onFocus = function() {
                this._isFocus = !0, this.emit(t.KEY_FOCUS)
            }, t.prototype.onBlur = function() {
                this._isFocus = !1, this.emit(t.KEY_BLUR)
            }, t.KEY_FOCUS = "FocusManager_focus", t.KEY_BLUR = "FocusManager_blur", t._instance = null, t
        }(cc.Node);
        n.default = o, cc._RF.pop()
    }, {}],
    Follower: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "df37fhgoSdHgqyLP7z0+gnj", "Follower"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = o.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._target = null, t.bounds = null, t.boundsMultiplier = 1, t.offset = cc.v2(0, 0), t.ratio = .075, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "target", {
                    get: function() {
                        return this._target
                    },
                    set: function(e) {
                        this._target = e, e || (this.enabled = !1)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.getTargetPosition = function() {
                    var e, t = this._target.convertToWorldSpaceAR(cc.v2(0, 0));
                    return this.bounds ? (e = t, e = this.fitIntoBounds(e), 0 === this.offset.x && 0 === this.offset.y || (e.addSelf(this.offset), e = this.fitIntoBounds(e))) : e = t.add(this.offset), this.node.parent.convertToNodeSpaceAR(e, e), e
                }, t.prototype.fitIntoBounds = function(e) {
                    var t = cc.view.getViewportRect(),
                        n = t.width / cc.view.getScaleX() / this.boundsMultiplier,
                        o = t.height / cc.view.getScaleY() / this.boundsMultiplier,
                        i = this.bounds.convertToWorldSpaceAR(cc.v2(0, 0));
                    if (n <= this.bounds.width && o <= this.bounds.height) {
                        var a = cc.v2(-this.bounds.width * this.bounds.anchorX + i.x, -this.bounds.height * this.bounds.anchorY + i.y),
                            r = cc.v2(this.bounds.width * (1 - this.bounds.anchorX) + i.x, this.bounds.height * (1 - this.bounds.anchorY) + i.y),
                            s = n / 2,
                            c = o / 2;
                        e.x - s < a.x ? e.x = a.x + s : e.x + s > r.x && (e.x = r.x - s), e.y - c < a.y ? e.y = a.y + c : e.y + c > r.y && (e.y = r.y - c)
                    } else e.x = i.x + this.bounds.width * (.5 - this.bounds.anchorX), e.y = i.y + this.bounds.height * (.5 - this.bounds.anchorY);
                    return e
                }, t.prototype.lateUpdate = function() {
                    var e = this.getTargetPosition();
                    this.node.position.lerp(e, this.ratio, e), this.node.x = e.x, this.node.y = e.y
                }, t.prototype.start = function() {
                    if (this._target) {
                        var e = this.getTargetPosition();
                        this.node.x = e.x, this.node.y = e.y
                    }
                }, t.prototype.onEnable = function() {
                    this._target || (this.enabled = !1)
                }, __decorate([a({
                    type: cc.Node,
                    visible: !0
                })], t.prototype, "_target", void 0), __decorate([a(cc.Node)], t.prototype, "bounds", void 0), __decorate([a], t.prototype, "boundsMultiplier", void 0), __decorate([i, r("Gameplay Component/Follower")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    FoodItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "75f43t5dTZLsawPafBQkt2G", "FoodItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t(t, n, o, i, a) {
                void 0 === o && (o = 0), void 0 === i && (i = 0);
                var r = e.call(this, t) || this;
                return r.hungerPoints = n, r.satietyPoints = o, r.funPoints = i, a && (r.healthPoints = a), r
            }
            return __extends(t, e), t
        }(e("./Item").default);
        n.default = o, cc._RF.pop()
    }, {
        "./Item": "Item"
    }],
    FoodTutorial: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "70af4dZwiRCOK8nu254d4Fp", "FoodTutorial"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../controllers/player/PlayerController"),
            i = e("../../../localization/LocalizationRichTextComponent"),
            a = e("../../../utilities/Utils"),
            r = e("./BaseInfoTutorial"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = s.menu,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.text = null, t
                }
                return __extends(t, e), t.prototype.onInventoryChange = function() {}, t.prototype.setupPopupTrigger = function() {
                    cc.director.getScene().getComponentInChildren(o.default).node.on("inventory-change", this.onInventoryChange, this)
                }, t.prototype.onLoad = function() {
                    this.popup.enable(!1), this.setupPopupTrigger(), a.default.isMobile() && this.text.setKey("tutorial_eat_mobile", "[EAT_INPUT]", "<img src='eat_btn' />")
                }, t.prototype.onDestroy = function() {
                    var e = cc.director.getScene();
                    e && e.getComponentInChildren(o.default).node.off("inventory-change", this.onInventoryChange, this)
                }, __decorate([l(i.default)], t.prototype, "text", void 0), __decorate([c, u("Gameplay Component/UI/Tutorial/FoodTutorial")], t)
            }(r.default);
        n.default = p, cc._RF.pop()
    }, {
        "../../../controllers/player/PlayerController": "PlayerController",
        "../../../localization/LocalizationRichTextComponent": "LocalizationRichTextComponent",
        "../../../utilities/Utils": "Utils",
        "./BaseInfoTutorial": "BaseInfoTutorial"
    }],
    GameConfig: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a74d2bqWAhNH5+tA8aV3c4C", "GameConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.timeRankConfig = n.postItConfig = n.combinationConfig = n.padlockConfig = n.bubbleDuration = n.doorsInfo = void 0, n.doorsInfo = {
            hw1: {
                roomA: "hw1_entrance",
                roomB: "hw2_gym",
                locked: !1
            },
            hw2: {
                roomA: "hw2_gym",
                roomB: "hw3_stairs",
                locked: !1
            },
            hw3: {
                roomA: "hw3_stairs",
                roomB: "hw4_classroom",
                locked: !1
            },
            hw4: {
                roomA: "hw4_classroom",
                roomB: "hw5_artroom",
                locked: !1
            },
            hw5: {
                roomA: "hw8_stairs",
                roomB: "hw9_library",
                locked: !1
            },
            hw6: {
                roomA: "hw8_stairs",
                roomB: "hw7_roof",
                locked: !1
            },
            hw7: {
                roomA: "hw7_roof",
                roomB: "hw6_nurse",
                locked: !1
            },
            stairs: {
                roomA: "hw3_stairs",
                roomB: "hw8_stairs",
                locked: !0
            },
            roof: {
                roomA: "hw7_roof",
                roomB: "rooftop",
                locked: !1
            },
            artroom: {
                roomA: "hw5_artroom",
                roomB: "artroom",
                locked: !0
            },
            classroom: {
                roomA: "hw4_classroom",
                roomB: "classroom",
                locked: !0
            },
            nurse: {
                roomA: "hw6_nurse",
                roomB: "nursing",
                locked: !0
            },
            library1: {
                roomA: "hw9_library",
                roomB: "library_1",
                locked: !0
            },
            library2: {
                roomA: "library_1",
                roomB: "library_2",
                locked: !1
            },
            vent: {
                roomA: "rooftop",
                roomB: "nursing",
                locked: !1
            }
        }, n.bubbleDuration = 3, n.padlockConfig = {
            bonusThreshold: 9,
            halfDistance: 135,
            locks: {
                hw5_artroom_door_lock_0: {
                    pinHoleWidth: 60,
                    time: 1.5
                },
                hw3_stairs_locker_1_0: {
                    pinHoleWidth: 60,
                    time: 1.5
                },
                hw3_stairs_generator_1: {
                    pinHoleWidth: 60,
                    time: 1.5
                },
                hw7_roof_locker_1_0: {
                    pinHoleWidth: 60,
                    time: 1.5
                },
                nursing_door_lock_3_0: {
                    pinHoleWidth: 60,
                    time: 1.5
                },
                hw2_gym_generator_1: {
                    pinHoleWidth: 60,
                    time: 1.5
                }
            }
        };
        var o = {
                red: {
                    base: "#D12E2F",
                    outline: "#782929"
                },
                blue: {
                    base: "#3BA7FF",
                    outline: "#003E76"
                },
                green: {
                    base: "#ACE345",
                    outline: "#364E06"
                },
                white: {
                    base: "#FFFFFF",
                    outline: "#FFFFFF"
                }
            },
            i = {
                combLocks: {
                    hw5_artroom_locker_2_0: {
                        digits: [{
                            number: 3,
                            color: o.white,
                            shape: "none"
                        }, {
                            number: 0,
                            color: o.white,
                            shape: "none"
                        }, {
                            number: 2,
                            color: o.white,
                            shape: "none"
                        }]
                    },
                    nursing_cabinet_0: {
                        digits: [{
                            number: 5,
                            color: o.white,
                            shape: "none"
                        }, {
                            number: 5,
                            color: o.white,
                            shape: "none"
                        }, {
                            number: 6,
                            color: o.white,
                            shape: "none"
                        }]
                    },
                    hw2_gym_barrier_0: {
                        digits: [{
                            number: 3,
                            color: o.green,
                            shape: "triangle"
                        }, {
                            number: 4,
                            color: o.red,
                            shape: "square"
                        }, {
                            number: 5,
                            color: o.blue,
                            shape: "circle"
                        }]
                    },
                    hw9_library_door_lock_2_0: {
                        digits: [{
                            number: 4,
                            color: o.red,
                            shape: "square"
                        }, {
                            number: 5,
                            color: o.blue,
                            shape: "circle"
                        }, {
                            number: 3,
                            color: o.green,
                            shape: "triangle"
                        }]
                    }
                }
            };
        n.combinationConfig = i, n.postItConfig = {
            delay: 250,
            offset: {
                x: 10,
                y: 10
            },
            maxPositionDifference: 50,
            postItSpeed: 200,
            minCorrectDistance: 50,
            postIts: {
                hw9_library_note_0: {
                    initialPositions: [{
                        x: 373,
                        y: -129
                    }, {
                        x: 343,
                        y: 58
                    }, {
                        x: -217,
                        y: 47
                    }, {
                        x: -343,
                        y: -47
                    }, {
                        x: 283,
                        y: 181
                    }, {
                        x: -281,
                        y: 231
                    }, {
                        x: -286,
                        y: -238
                    }, {
                        x: 165,
                        y: -240
                    }, {
                        x: 269,
                        y: -82
                    }]
                }
            }
        }, n.timeRankConfig = {
            3: 25,
            2: 30,
            1: 35
        }, cc._RF.pop()
    }, {}],
    GameManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b0b9cPmusdACLDMzDLXj80p", "GameManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./FocusManager"),
            i = e("./RotateScreenManager"),
            a = e("../audios/AudioManager"),
            r = e("../gameplay/SurvivalMode"),
            s = e("../controllers/CheatsController"),
            c = cc._decorator.ccclass,
            l = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t._isPause = !1, n._instance = t, cc.game.addPersistRootNode(t), o.default.instance.on(o.default.KEY_BLUR, t.pauseGame, t), o.default.instance.on(o.default.KEY_FOCUS, t.resumeGame, t), i.default.instance.on(i.default.KEY_INCORRECT_ORIENTATION, t.pauseGame, t), i.default.instance.on(i.default.KEY_CORRECT_ORIENTATION, t.resumeGame, t), t._mode = new r.default, n.cheatsEnabled && (t._cheatsController = new s.default), t
                }
                var n;
                return __extends(t, e), n = t, Object.defineProperty(t, "instance", {
                    get: function() {
                        return this._instance || (this._instance = new n), this._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.init = function() {
                    return n.instance
                }, Object.defineProperty(t.prototype, "mode", {
                    get: function() {
                        return this._mode
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "cheatsController", {
                    get: function() {
                        return this._cheatsController
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPause", {
                    get: function() {
                        return this._isPause
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.pauseGame = function() {
                    this._isPause || (this._isPause = !0, a.default.instance.pause(), cc.game.pause(), this.emit(n.KEY_PAUSE_GAME))
                }, t.prototype.resumeGame = function() {
                    this._isPause && i.default.instance.isCorrectOrientation && o.default.instance.isFocus && (this._isPause = !1, a.default.instance.resume(), cc.game.resume(), this.emit(n.KEY_RESUME_GAME))
                }, t.KEY_PAUSE_GAME = "GameManager_pause", t.KEY_RESUME_GAME = "GameManager_resume", t.cheatsEnabled = !1, t._instance = null, n = __decorate([c], t)
            }(cc.Node);
        n.default = l, cc._RF.pop()
    }, {
        "../audios/AudioManager": "AudioManager",
        "../controllers/CheatsController": "CheatsController",
        "../gameplay/SurvivalMode": "SurvivalMode",
        "./FocusManager": "FocusManager",
        "./RotateScreenManager": "RotateScreenManager"
    }],
    GameOverScreen: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a8e54NKl0lHibGSvDyIhs/D", "GameOverScreen"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = e("../audios/AudioConfig"),
            a = e("../audios/AudioManager"),
            r = e("../config/GameConfig"),
            s = e("../gameplay/GameState"),
            c = e("../managers/DataManager"),
            l = e("./LoadingScreen"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = u.menu;
        (function(e) {
            e[e.NoStars = 0] = "NoStars", e[e.OneStar = 1] = "OneStar", e[e.TwoStars = 2] = "TwoStars", e[e.ThreeStars = 3] = "ThreeStars"
        })(o || (o = {}));
        var m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.finishScreen = null, t.playButtonAnim = null, t.sparklesAnim = null, t.stars = [], t.starOnFrame = null, t.starOffFrame = null, t.timeLabel = null, t.finishAnimation = null, t.starsState = [], t
            }
            return __extends(t, e), t.prototype.onLoad = function() {
                this.finishAnimation = this.finishScreen.getComponent(cc.Animation);
                for (var e = 0; e < this.stars.length; e++) this.stars[e].active = !1;
                this.scheduleOnce(this.animateWin.bind(this), 1), this.setupWin(), this.finishScreen.active = !1, this.playButtonAnim.node.active = !1
            }, t.prototype.start = function() {
                var e = c.default.instance;
                s.default.get().reset(), e.clearGameData(), e.isFirstTime() && e.firstTime(!1), a.default.instance.playMusic(i.HowlsKey.music_win)
            }, t.prototype.setupWin = function() {
                for (var e = s.default.get(), t = Math.ceil(e.getTimeTaken() / 10), n = t / 100, o = n / 60, i = o <= r.timeRankConfig[3] ? 3 : o <= r.timeRankConfig[2] ? 2 : o <= r.timeRankConfig[1] ? 1 : 0, a = 0; a < this.stars.length; ++a) a < i ? this.starsState.push(!0) : this.starsState.push(!1);
                var c = ("" + ~~o).padStart(2, "0"),
                    l = ("" + ~~(n % 60)).padStart(2, "0"),
                    u = ("" + Math.ceil(t % 100)).padStart(2, "0");
                this.timeLabel.string = c + ":" + l + "." + u
            }, t.prototype.animateWin = function() {
                var e = this;
                this.finishScreen.active = !0, this.finishAnimation.play("IN_finish"), this.finishAnimation.setCurrentTime(0), this.finishAnimation.once(cc.Animation.EventType.FINISHED, function() {
                    e.finishAnimation.play("LOOP_finish"), e.showStars()
                }, this)
            }, t.prototype.showStars = function() {
                for (var e = 0; e < this.stars.length; e++) this.scheduleOnce(this.showStar.bind(this, e, this.starsState[e]), .5 * (e + 1))
            }, t.prototype.showStar = function(e, t) {
                var n = this,
                    o = this.stars[e],
                    i = o.getComponent(cc.Animation),
                    a = o.getComponent(cc.Sprite);
                t && a.spriteFrame !== this.starOnFrame ? a.spriteFrame = this.starOnFrame : t || a.spriteFrame === this.starOffFrame || (a.spriteFrame = this.starOffFrame), i.play("IN_star"), i.setCurrentTime(0), o.active = !0, i.once(cc.Animation.EventType.FINISHED, function() {
                    n.onStarResult(e + 1)
                }, this)
            }, t.prototype.onStarResult = function(e) {
                e === this.stars.length && (this.starsState.filter(function(e) {
                    return e
                }).length === this.stars.length ? (this.sparklesAnim.play("PLAY_shine"), this.sparklesAnim.setCurrentTime(0), this.sparklesAnim.on(cc.Animation.EventType.FINISHED, this.showPlayButton, this)) : this.showPlayButton())
            }, t.prototype.showPlayButton = function() {
                this.playButtonAnim.node.active = !0, this.playButtonAnim.play("IN_play_button"), this.playButtonAnim.setCurrentTime(0)
            }, t.prototype._goToTitleScreen = function() {
                cc.director.loadScene("mainmenu")
            }, t.prototype.goToTitleScreen = function() {
                l.default.get().in().once("in-done", this._goToTitleScreen, this), a.default.instance.playSfx(i.SFXKey.button_general)
            }, __decorate([d(cc.Node)], t.prototype, "finishScreen", void 0), __decorate([d(cc.Animation)], t.prototype, "playButtonAnim", void 0), __decorate([d(cc.Animation)], t.prototype, "sparklesAnim", void 0), __decorate([d([cc.Node])], t.prototype, "stars", void 0), __decorate([d(cc.SpriteFrame)], t.prototype, "starOnFrame", void 0), __decorate([d(cc.SpriteFrame)], t.prototype, "starOffFrame", void 0), __decorate([d(cc.Label)], t.prototype, "timeLabel", void 0), __decorate([p, h("Frontend Component/GameOverScreen")], t)
        }(cc.Component);
        n.default = m, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager",
        "../config/GameConfig": "GameConfig",
        "../gameplay/GameState": "GameState",
        "../managers/DataManager": "DataManager",
        "./LoadingScreen": "LoadingScreen"
    }],
    GameState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1b232dqcoZKxK7ltKfqM4lW", "GameState"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./PlayerInfo"),
            i = e("./inventory/Item"),
            a = e("./interactive/NPC"),
            r = e("../config/GameConfig"),
            s = e("./quests/QuestSystem"),
            c = function() {
                function e() {
                    var e;
                    this.itemsInRoom = {}, this.player = new o.default, this.npc = ((e = {})[a.NPCType.Penny] = {
                        instance: void 0,
                        position: null,
                        idleClipName: "",
                        request: null
                    }, e[a.NPCType.Tobias] = {
                        instance: void 0,
                        position: null,
                        idleClipName: "",
                        request: null
                    }, e[a.NPCType.Bobert] = {
                        instance: void 0,
                        position: null,
                        idleClipName: "",
                        request: null
                    }, e[a.NPCType.Alan] = {
                        instance: void 0,
                        position: null,
                        idleClipName: "",
                        request: null
                    }, e[a.NPCType.Mowdown] = {
                        instance: void 0,
                        position: null,
                        idleClipName: "",
                        request: null
                    }, e), this.props = {}, this.world = {
                        currentRoom: void 0,
                        questRoom: void 0,
                        environmentFlags: 0,
                        doors: JSON.parse(JSON.stringify(r.doorsInfo)),
                        propBlocker: null
                    }, this.ui = {
                        instance: void 0,
                        questText: "",
                        forcedQuestRoom: null,
                        showDirections: !1
                    }, this.timeTaken = 0
                }
                return e.get = function() {
                    return this.instance || (this.instance = new e)
                }, e.prototype.getItemsInRoom = function(e) {
                    return this.itemsInRoom[e] || []
                }, e.prototype.getItemInRoom = function(e, t) {
                    return this.getItemsInRoom(e).find(function(e) {
                        return e.item.id === t
                    })
                }, e.prototype.addItemToRoom = function(e, t) {
                    this.itemsInRoom[e] ? this.itemsInRoom[e].push(t) : this.itemsInRoom[e] = [t]
                }, e.prototype.removeItemFromRoom = function(e, t) {
                    if (this.itemsInRoom[e]) {
                        var n = this.itemsInRoom[e].indexOf(t); - 1 !== n && this.itemsInRoom[e].splice(n, 1)
                    }
                }, e.prototype.getItemAmountInInventories = function(e) {
                    return this.player.inventory.getItemTypeCount(e)
                }, e.prototype.takeItemFromInventories = function(e, t) {
                    t = this.player.inventory.removeItemsByType(e, t)
                }, e.prototype.addTime = function(e) {
                    this.timeTaken += e
                }, e.prototype.getTimeTaken = function() {
                    return this.timeTaken
                }, e.prototype.reset = function() {
                    for (var e in this.player.inventory.clear(), this.npc) this.npc[e].instance = void 0, this.npc[e].position = null, this.npc[e].idleClipName = "", this.npc[e].request = null;
                    for (var e in this.props) this.props[e] && delete this.props[e];
                    for (var t in this.itemsInRoom) this.itemsInRoom[t] && delete this.itemsInRoom[t];
                    this.world.currentRoom = void 0, this.world.environmentFlags = 0, this.world.doors = JSON.parse(JSON.stringify(r.doorsInfo)), this.world.propBlocker = null, this.ui.forcedQuestRoom = null, this.ui.showDirections = !1, this.timeTaken = 0, s.default.setFibersState([{
                        id: 0,
                        ip: 0
                    }])
                }, e.prototype.serialize = function() {
                    var e = {
                        player: this.player.serialize(),
                        quests: s.default.getFibersState(),
                        npc: this.serializeNPC(),
                        props: this.serializeProps(),
                        world: this.serializeWorld(),
                        itemsInRoom: {},
                        questText: this.ui.questText,
                        forcedQuestRoom: this.ui.forcedQuestRoom,
                        timeTaken: this.timeTaken
                    };
                    for (var t in this.itemsInRoom)
                        if (this.itemsInRoom[t]) {
                            e.itemsInRoom[t] = [];
                            for (var n = 0, o = this.itemsInRoom[t]; n < o.length; n++) {
                                var i = o[n];
                                e.itemsInRoom[t].push({
                                    item: i.item.id,
                                    pos: {
                                        x: i.position.x,
                                        y: i.position.y
                                    }
                                })
                            }
                        }
                    return e
                }, e.prototype.deserialize = function(e) {
                    this.loadInventoryData(this.player.inventory, e.player.inventory), s.default.setFibersState(e.quests);
                    for (var t = 0, n = e.npc; t < n.length; t++) {
                        var o = n[t],
                            a = this.npc[o.type];
                        a.position = o.position, a.idleClipName = o.idleClipName, a.request = o.request, o.scaleX && (a.scaleX = o.scaleX)
                    }
                    for (var r = 0, c = e.props; r < c.length; r++) {
                        var l = c[r];
                        (y = this.props[l.id]) ? (y.active = l.active, y.request = l.request) : this.props[l.id] = {
                            active: l.active,
                            request: l.request,
                            instance: void 0,
                            room: void 0
                        }
                    }
                    for (var u = 0, p = e.world.doors; u < p.length; u++) {
                        var d = p[u];
                        this.world.doors[d.id].locked = d.locked
                    }
                    if (this.world.environmentFlags = e.world.environmentFlags, e.world.propBlocker) {
                        for (var h = [], m = 0, f = e.world.propBlocker.blacklist; m < f.length; m++) {
                            var y = f[m];
                            h.push(y)
                        }
                        this.world.propBlocker = {
                            npc: e.world.propBlocker.npc,
                            blacklist: h
                        }
                    }
                    for (var g in this.itemsInRoom) delete this.itemsInRoom[g];
                    for (var v in e.itemsInRoom)
                        if (e.itemsInRoom[v])
                            for (var _ = 0, b = e.itemsInRoom[v]; _ < b.length; _++) {
                                var I = b[_];
                                this.addItemToRoom(v, {
                                    item: new i.default(I.item),
                                    position: cc.v2(I.pos.x, I.pos.y),
                                    instance: void 0
                                })
                            }
                    this.ui.questText = e.questText, this.ui.forcedQuestRoom = e.forcedQuestRoom, this.timeTaken = e.timeTaken
                }, e.prototype.serializeNPC = function() {
                    var e = [];
                    for (var t in this.npc) {
                        var n = this.npc[t],
                            o = {
                                type: +t,
                                position: n.position,
                                idleClipName: n.idleClipName,
                                request: n.request
                            };
                        n.scaleX && (o.scaleX = n.scaleX), e.push(o)
                    }
                    return e
                }, e.prototype.serializeProps = function() {
                    var e = [];
                    for (var t in this.props) {
                        var n = this.props[t];
                        e.push({
                            id: t,
                            active: n.active,
                            request: n.request
                        })
                    }
                    return e
                }, e.prototype.serializeWorld = function() {
                    var e = [];
                    for (var t in this.world.doors) e.push({
                        id: t,
                        locked: this.world.doors[t].locked
                    });
                    if (this.world.propBlocker) {
                        for (var n = [], o = 0, i = this.world.propBlocker.blacklist; o < i.length; o++) {
                            var a = i[o];
                            n.push(a)
                        }
                        return {
                            environmentFlags: this.world.environmentFlags,
                            doors: e,
                            propBlocker: {
                                npc: this.world.propBlocker.npc,
                                blacklist: n
                            }
                        }
                    }
                    return {
                        environmentFlags: this.world.environmentFlags,
                        doors: e,
                        propBlocker: null
                    }
                }, e.prototype.loadInventoryData = function(e, t) {
                    e.clear();
                    for (var n = 0; n < t.slots.length; ++n) void 0 !== t.slots[n].item && e.setItemInSlot(new i.default(t.slots[n].item), n)
                }, e
            }();
        n.default = c, cc._RF.pop()
    }, {
        "../config/GameConfig": "GameConfig",
        "./PlayerInfo": "PlayerInfo",
        "./interactive/NPC": "NPC",
        "./inventory/Item": "Item",
        "./quests/QuestSystem": "QuestSystem"
    }],
    GameUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d3f98Lu4e9HO5wkEV0LyAGj", "GameUI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../managers/GameManager"),
            i = e("../../gameplay/Room"),
            a = e("./PauseUI"),
            r = e("./Map"),
            s = e("../../managers/FocusManager"),
            c = e("../LoadingScreen"),
            l = e("../../config/InputConfig"),
            u = e("./HUD"),
            p = e("../../common/Resources"),
            d = e("../../gameplay/GameState"),
            h = e("./Fade"),
            m = e("../../gameplay/minigames/BaseMinigame"),
            f = e("./panels/EventPanel"),
            y = e("./panels/HintEventPanel"),
            g = e("../../gameplay/interactive/InteractiveEntity"),
            v = e("../../utilities/Enumerators"),
            _ = e("./CheatUI"),
            b = e("../../managers/InteractBallonManager"),
            I = e("../../gameplay/inventory/components/ItemComponent"),
            A = e("../../utilities/Utils"),
            C = cc._decorator,
            P = C.ccclass,
            S = C.property,
            k = C.menu,
            F = {
                move: p.ResourceID.MoveTutorial,
                objective: p.ResourceID.ObjectiveTutorial,
                room: p.ResourceID.RoomTutorial,
                clues: p.ResourceID.CluesTutorial,
                gym: p.ResourceID.GymTutorial,
                final: p.ResourceID.FinalTutorial
            },
            E = {
                hw1_entrance: [{
                    name: "hw2_gym",
                    direction: v.Direction.Right
                }],
                hw2_gym: [{
                    name: "hw1_entrance",
                    direction: v.Direction.Left
                }, {
                    name: "hw3_stairs",
                    direction: v.Direction.Right
                }],
                hw3_stairs: [{
                    name: "hw2_gym",
                    direction: v.Direction.Left
                }, {
                    name: "hw4_classroom",
                    direction: v.Direction.Right
                }],
                hw4_classroom: [{
                    name: "hw3_stairs",
                    direction: v.Direction.Left
                }, {
                    name: "hw5_artroom",
                    direction: v.Direction.Right
                }],
                hw5_artroom: [{
                    name: "hw4_classroom",
                    direction: v.Direction.Left
                }]
            };

        function x(e) {
            var t = e.getComponent(cc.Animation);
            e.active = !0, t.play(), t.setCurrentTime(0)
        }
        var T = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.playerNode = null, t.roomNode = null, t.markerRight = null, t.markerLeft = null, t
            }
            return __extends(t, e), t.prototype.updateQuestText = function() {
                this.hud.queueQuestText(d.default.get().ui.questText)
            }, t.prototype.queueQuestTextIcon = function(e) {
                this.hud.queueQuestAnimation(e)
            }, t.prototype.playMapButtonAnimation = function() {
                this.hud.playMapButtonAnimation()
            }, t.prototype.showTutorial = function(e) {
                if (void 0 === F[e]) return null;
                var t = cc.instantiate(p.default.get(F[e]));
                return t.parent = this.node, t.x = 0, t.y = 0, this.hideHUD(), t.on("hid", this.showHUD, this), t
            }, t.prototype.createMarker = function(e) {
                var t = this;
                if (d.default.get().world.currentRoom.getName() !== d.default.get().world.questRoom) return null;
                this.markerNode && this.destroyMarker(this.markerNode.parent, this.markerNode.uuid);
                var n = cc.instantiate(p.default.get(p.ResourceID.MarkerPrefab));
                n.parent = e;
                var o = e.getComponent(g.default);
                return o && !cc.Vec2.equals(o.markerOffset, cc.Vec2.ZERO) ? (n.x = o.markerOffset.x, n.y = o.markerOffset.y, o.markerDirection === v.Direction.Right ? n.rotation = 270 : o.markerDirection === v.Direction.Up ? n.rotation = 180 : o.markerDirection === v.Direction.Left && (n.rotation = 90)) : (n.x = 0, n.y = e.getBoundingBox().height + 70), n.scaleX += 1 - Math.abs(e.scaleX), n.scaleY += 1 - Math.abs(e.scaleY), this.markerNode = n, x(this.markerNode), e.getComponent(I.default) && (this.markerNode.opacity = 0, this.scheduleOnce(function() {
                    t.markerNode && t.markerNode.parent === e && (t.markerNode.opacity = 255)
                }, 3)), this.showDirectionalMarkers(), n.uuid
            }, t.prototype.destroyMarker = function(e, t) {
                e.getChildByUuid(t).destroy(), this.markerNode = null, this.showDirectionalMarkers()
            }, t.prototype.showMarker = function() {
                if (this.markerNode) {
                    if (!this.hud.node.active) return;
                    this.markerNode.active || x(this.markerNode)
                } else 0 === this.markerLeft.opacity ? x(this.markerLeft) : 0 === this.markerRight.opacity ? x(this.markerRight) : d.default.get().ui.showDirections && this.showDirectionalMarkers()
            }, t.prototype.hideMarker = function(e) {
                this.markerNode ? e.node.getChildByName("marker") ? this.markerNode.active = !1 : this.markerNode.active = !0 : e.balloonFrame === b.BalloonFrame.PointingLeft ? this.markerLeft.active = !1 : e.balloonFrame === b.BalloonFrame.PointingRight && (this.markerRight.active = !1)
            }, t.prototype.showEventPanel = function(e) {
                var t = cc.instantiate(p.default.get(p.ResourceID.EventPanel));
                return t.parent = this.node, t.x = 0, t.y = 0, t.zIndex = 128, this.hideHUD(), t.on("hid", this.showHUD, this), t.getComponent(f.default).setImage(e), t
            }, t.prototype.showCustomEventPanel = function(e, t) {
                var n = cc.instantiate(p.default.get(e));
                return n.parent = this.node, n.x = 0, n.y = 0, n.zIndex = 128, this.hideHUD(), n.on("hid", this.showHUD, this), e === p.ResourceID.EventPanel ? n.getComponent(f.default).setImage(t) : e === p.ResourceID.HintPanel && n.getComponent(y.default).setImage(t), n
            }, t.prototype.onPaused = function() {
                var e = this;
                a.default.enabled && !a.default.isUIActive && ((this.pauseUI || (this.pauseUI = this.getNewPauseUI())).node.once("hid", function() {
                    l.uiActions.pause.on("triggered", e.onPaused, e), e.showHUD()
                }), this.hideHUD(), o.default.instance.emit("gameplay-pause"), l.uiActions.pause.off("triggered", this.onPaused, this))
            }, t.prototype.onCheat = function() {
                _.default.enabled && !_.default.isUIActive && ((this.cheatUI || (this.cheatUI = this.getNewCheatUI())).node.once("hid", this.showHUD, this), this.hideHUD(), o.default.instance.emit("gameplay-pause-c"))
            }, t.prototype.onMapOut = function() {
                var e = this;
                if (a.default.enabled && !a.default.isUIActive) {
                    var t = this.map || (this.map = this.getNewMap());
                    t.node.once("hid", function() {
                        l.uiActions.map.on("triggered", e.onMapOut, e), e.showHUD()
                    }), this.hideHUD(), t.show(), l.uiActions.map.off("triggered", this.onMapOut, this)
                }
            }, t.prototype.onMinigameStarted = function(e, t, n) {
                var o = this.minigames[e] || (this.minigames[e] = this.getNewMinigame(e));
                o.node.off("done"), o.node.on("done", n), o.show(t), this.hideHUD()
            }, t.prototype.showHUD = function() {
                this.hud.node.active = !0, this.markerNode && (this.markerNode.active = 0 === this.markerNode.opacity, this.markerNode.opacity = 255), this.fade && (this.fade.node.parent = this.hud.node, this.fade.node.setSiblingIndex(1), this.fade.node.zIndex = 0)
            }, t.prototype.hideHUD = function() {
                this.hud.node.active = !1, this.markerNode && this.markerNode.active && (this.markerNode.opacity = 0, this.markerNode.active = !1), this.fade && (this.fade.node.parent = this.node, this.fade.node.zIndex = 64)
            }, t.prototype.fadeIn = function(e, t) {
                var n = this.fade || (this.fade = this.getFade());
                n.in(e), n.node.once("in-done", t)
            }, t.prototype.fadeOut = function(e, t) {
                var n = this.fade || (this.fade = this.getFade());
                n.out(e), n.node.once("out-done", t)
            }, t.prototype.getNewPauseUI = function() {
                var e = cc.instantiate(p.default.get(p.ResourceID.PausePrefab));
                return e.parent = this.node, e.x = 0, e.y = 0, e.on("quitted", this.onExitGame, this), e.getComponent(a.default)
            }, t.prototype.getNewMap = function() {
                var e = cc.instantiate(p.default.get(p.ResourceID.MapPrefab));
                return e.parent = this.node, e.x = 0, e.y = 0, e.getComponent(r.default)
            }, t.prototype.getNewCheatUI = function() {
                var e = cc.instantiate(p.default.get(p.ResourceID.CheatPrefab));
                return e.parent = this.node, e.x = 0, e.y = 0, e.getComponent(_.default)
            }, t.prototype.getNewMinigame = function(e) {
                var t = cc.instantiate(p.default.get(e));
                return t.parent = this.node, t.x = 0, t.y = 0, t.on("hid", this.showHUD, this), t.getComponent(m.default)
            }, t.prototype.getFade = function() {
                var e = cc.instantiate(p.default.get(p.ResourceID.FadePrefab));
                return this.hud.node.active ? (e.parent = this.hud.node, e.setSiblingIndex(1)) : (e.parent = this.node, e.zIndex = 64), e.x = 0, e.y = 0, e.getComponent(h.Fade)
            }, t.prototype.focusNode = function(e, t) {
                var n = function(e, t) {
                    e.group = t;
                    for (var o = 0, i = e.children; o < i.length; o++) {
                        var a = i[o];
                        n(a, t)
                    }
                };
                n(e, t ? "focused" : "ui")
            }, t.prototype.onExitGame = function() {
                c.default.get().in().once("in-done", function() {
                    cc.director.loadScene("mainmenu")
                }), this.roomNode.getComponent(i.default).onQuittingGame()
            }, t.prototype.onLoad = function() {
                var e = cc.instantiate(p.default.get(p.ResourceID.HUDPrefab));
                if (e.parent = this.node, e.x = 0, e.y = 0, A.default.isMobile()) {
                    var t = cc.instantiate(p.default.get(p.ResourceID.MobileInputPrefab));
                    t.parent = e, t.x = 0, t.y = 0
                }
                this.hud = e.getComponent(u.default), this.hud.node.on("paused", this.onPaused, this), this.hud.node.on("map-out", this.onMapOut, this), o.default.cheatsEnabled && this.hud.node.on("cheat", this.onCheat, this), this.playerNode.on("minigame-started", this.onMinigameStarted, this), this.playerNode.on("special-event-happened", this.showEventPanel, this), this.minigames = {}, this.markerRight = this.hud.node.getChildByName("arrow_right"), this.markerLeft = this.hud.node.getChildByName("arrow_left"), l.uiActions.pause.on("triggered", this.onPaused, this), l.uiActions.map.on("triggered", this.onMapOut, this), d.default.get().ui.instance = this
            }, t.prototype.start = function() {
                this.updateQuestText(), d.default.get().ui.showDirections ? this.showDirectionalMarkers(!0) : (this.markerRight.active = !1, this.markerLeft.active = !1), s.default.instance.on(s.default.KEY_BLUR, this.onPaused, this)
            }, t.prototype.onEnable = function() {
                l.uiActions.pause.on("triggered", this.onPaused, this)
            }, t.prototype.onDisable = function() {
                l.uiActions.pause.off("triggered", this.onPaused, this)
            }, t.prototype.onDestroy = function() {
                d.default.get().ui.instance === this && (d.default.get().ui.instance = void 0), s.default.instance.off(s.default.KEY_BLUR, this.onPaused, this), l.uiActions.pause.off("triggered", this.onPaused, this), l.uiActions.map.off("triggered", this.onMapOut, this)
            }, t.prototype.updateQuestRoom = function(e, t) {
                var n = d.default.get();
                n.world.questRoom = e, t ? this.showDirectionalMarkers() : n.ui.showDirections = !1
            }, t.prototype.showDirectionalMarkers = function(e) {
                void 0 === e && (e = !1);
                var t = d.default.get().world.currentRoom.getName(),
                    n = d.default.get().world.questRoom;
                if (void 0 === t || void 0 === n || t === n) return this.markerLeft.active = !1, void(this.markerRight.active = !1);
                var o = this.searchRoom(t, n, v.Direction.Right);
                o || (o = this.searchRoom(t, n, v.Direction.Left)), o === v.Direction.Right ? (!e && this.markerRight.active || x(this.markerRight), this.markerLeft.active = !1) : o === v.Direction.Left && (!e && this.markerLeft.active || x(this.markerLeft), this.markerRight.active = !1), d.default.get().ui.showDirections = !0
            }, t.prototype.searchRoom = function(e, t, n) {
                var o = E[e];
                if (e && 0 !== o.length) {
                    if (e === t) return n;
                    var i = o.find(function(e) {
                        return e.direction === n
                    });
                    return i ? this.searchRoom(i.name, t, n) : null
                }
                return null
            }, t.prototype.update = function() {
                if (this.markerNode && null !== this.markerNode.parent) {
                    var e = cc.Camera.main.node.position.x,
                        t = this.node.width / 2 + e,
                        n = this.markerNode.parent.position.x + this.markerNode.x;
                    n < e && (t = this.node.width / 2 - e, Math.abs(n) < t ? this.markerLeft.active = !1 : (this.markerRight.active = !1, this.markerLeft.active || x(this.markerLeft))), n > e && (n < t ? this.markerRight.active = !1 : (this.markerLeft.active = !1, this.markerRight.active || x(this.markerRight)))
                }
            }, __decorate([S(cc.Node)], t.prototype, "playerNode", void 0), __decorate([S(cc.Node)], t.prototype, "roomNode", void 0), __decorate([P, k("Gameplay Component/UI/GameUI")], t)
        }(cc.Component);
        n.default = T, cc._RF.pop()
    }, {
        "../../common/Resources": "Resources",
        "../../config/InputConfig": "InputConfig",
        "../../gameplay/GameState": "GameState",
        "../../gameplay/Room": "Room",
        "../../gameplay/interactive/InteractiveEntity": "InteractiveEntity",
        "../../gameplay/inventory/components/ItemComponent": "ItemComponent",
        "../../gameplay/minigames/BaseMinigame": "BaseMinigame",
        "../../managers/FocusManager": "FocusManager",
        "../../managers/GameManager": "GameManager",
        "../../managers/InteractBallonManager": "InteractBallonManager",
        "../../utilities/Enumerators": "Enumerators",
        "../../utilities/Utils": "Utils",
        "../LoadingScreen": "LoadingScreen",
        "./CheatUI": "CheatUI",
        "./Fade": "Fade",
        "./HUD": "HUD",
        "./Map": "Map",
        "./PauseUI": "PauseUI",
        "./panels/EventPanel": "EventPanel",
        "./panels/HintEventPanel": "HintEventPanel"
    }],
    GameplayController: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "98d349YqYJCBZlWVLeLxU1l", "GameplayController"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../audios/AudioManager"),
            i = e("../audios/AudioConfig"),
            a = cc._decorator.ccclass,
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.goToMainmenu = function() {
                    o.default.instance.playSfx(i.SFXKey.button_generic), cc.director.loadScene("mainmenu")
                }, __decorate([a], t)
            }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager"
    }],
    GymDoorProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c73abn0xhdGTq5x5KbfmhXK", "GymDoorProp"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../managers/GameManager"),
            i = e("../../ui/LoadingScreen"),
            a = e("../GameState"),
            r = e("../inventory/Item"),
            s = e("../SurvivalMode"),
            c = e("./InteractiveProp"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = l.menu,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.request = r.ItemType.None, t
                }
                return __extends(t, e), t.prototype.doAction = function() {
                    return this.node.emit("action-done", this), i.default.get().in().once("in-done", function() {
                        a.default.get().world.currentRoom.onQuittingGame(), o.default.instance.mode.gameOverReason = s.GameOverReason.GameCompleted, cc.director.loadScene("comics")
                    }), !0
                }, __decorate([p({
                    readonly: !0,
                    override: !0
                })], t.prototype, "request", void 0), __decorate([u, d("Gameplay Component/Interactive/GymDoorProp")], t)
            }(c.InteractiveProp);
        n.default = h, cc._RF.pop()
    }, {
        "../../managers/GameManager": "GameManager",
        "../../ui/LoadingScreen": "LoadingScreen",
        "../GameState": "GameState",
        "../SurvivalMode": "SurvivalMode",
        "../inventory/Item": "Item",
        "./InteractiveProp": "InteractiveProp"
    }],
    HTMLLoader: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c5859SJSJRFpo7d5KtA5+fm", "HTMLLoader"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = o.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.htmlLoadingIconId = "", t
                }
                return __extends(t, e), t.prototype.setElementTransform = function() {
                    var e = this.htmlElement,
                        t = cc.view.getCanvasSize(),
                        n = cc.view.getDevicePixelRatio(),
                        o = this.getComponent(cc.Widget);
                    if (o) {
                        var i = "";
                        o.isAlignLeft ? (e.style.left = o.left / n + "px", i += "left") : o.isAlignRight && (e.style.right = o.right / n + "px", i += "right"), o.isAlignBottom ? (e.style.bottom = o.bottom / n + "px", i += "" !== i ? " bottom" : "bottom") : o.isAlignTop && (e.style.top = o.top / n + "px", i += "" !== i ? " top" : "top"), "" !== i && (e.style.transformOrigin = i)
                    } else {
                        var a = cc.Camera.main.getWorldToScreenPoint(this.node.convertToWorldSpaceAR(cc.v2(0, 0))),
                            r = (a.x - .5 * this.node.width) / (t.width / n) * 100,
                            s = (a.y - .5 * this.node.height) / (t.height / n) * 100;
                        r > 50 ? e.style.right = 100 - r + "%" : e.style.left = r + "%", s > 50 ? e.style.top = 100 - s + "%" : e.style.bottom = s + "%"
                    }
                    var c = this.node.scaleX,
                        l = this.node.scaleY,
                        u = this.node.angle;
                    e.style.position = "absolute", e.style.transform = "rotate(" + u + "deg) scale(" + c + ", " + l + ")"
                }, t.prototype.onEnable = function() {
                    this.htmlElement.style.display = "block"
                }, t.prototype.onDisable = function() {
                    this.htmlElement.style.display = "none"
                }, t.prototype.onLoad = function() {
                    this.htmlElement = document.getElementById(this.htmlLoadingIconId)
                }, t.prototype.start = function() {
                    this.setElementTransform()
                }, t.prototype.onDestroy = function() {
                    this.htmlElement.style.display = "none"
                }, __decorate([a], t.prototype, "htmlLoadingIconId", void 0), __decorate([i, r("Common Component/HTMLLoader")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    HUD: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "015caUwDAdFkaFThgiQOA3D", "HUD"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../common/PausableComponent"),
            r = e("../../localization/LocalizationLabelComponent"),
            s = e("./InventoryHUD"),
            c = e("../../managers/GameManager"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = l.menu,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.questLabel = null, t.bigQuestLabel = null, t.questAnimation = null, t.bigQuestAnimation = null, t.cheatsButton = null, t._inventory = null, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "inventory", {
                    get: function() {
                        return this._inventory
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "currentQuestAnimation", {
                    get: function() {
                        return this.questAnimation.node.active ? this.questAnimation : this.bigQuestAnimation
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.setQuestText = function(e) {
                    this.bigQuestAnimation.node.active = !1, this.questAnimation.node.active = !0, this.questLabel.setKey(e), this.questLabel.labelComponent.actualFontSize < .8 * this.questLabel.labelComponent.fontSize && (this.bigQuestAnimation.node.active = !0, this.questAnimation.node.active = !1, this.bigQuestLabel.setKey(e))
                }, t.prototype.queueQuestText = function(e) {
                    var t = this;
                    0 === this.questActionQueue.length ? this.setQuestText(e) : this.questActionQueue.push(function() {
                        t.setQuestText(e), t.questActionQueue.splice(0, 1), t.questActionQueue[0] && t.questActionQueue[0]()
                    })
                }, t.prototype.queueQuestAnimation = function(e) {
                    var t = this;
                    switch (e) {
                        case "new":
                            this.questActionQueue.push(function() {
                                var e, n = t.currentQuestAnimation;
                                "OUT_mission" === (null === (e = n.currentClip) || void 0 === e ? void 0 : e.name) ? n.play("IN_newmission"): n.play("PLAY_mision"), i.default.instance.playSfx(o.SFXKey.mission_new)
                            });
                            break;
                        case "tick":
                            this.questActionQueue.push(function() {
                                t.currentQuestAnimation.play("IN_ticket"), i.default.instance.playSfx(o.SFXKey.mission_completed)
                            }), this.questActionQueue.push(function() {
                                t.currentQuestAnimation.play("OUT_mission")
                            });
                            break;
                        case "tick-keep":
                            this.questActionQueue.push(function() {
                                t.currentQuestAnimation.play("IN_ticket"), i.default.instance.playSfx(o.SFXKey.mission_completed)
                            });
                            break;
                        case "tick-hide":
                            this.questActionQueue.push(function() {
                                t.currentQuestAnimation.play("OUT_mission")
                            })
                    }
                    var n = this.currentQuestAnimation;
                    n.currentClip && n.getAnimationState(n.currentClip.name).isPlaying || this.questActionQueue[0]()
                }, t.prototype.onPausePressed = function() {
                    i.default.instance.playSfx(o.SFXKey.button_general), this.node.emit("paused")
                }, t.prototype.onCheatPressed = function() {
                    i.default.instance.playSfx(o.SFXKey.button_general), this.node.emit("cheat")
                }, t.prototype.onMapPressed = function() {
                    i.default.instance.playSfx(o.SFXKey.button_general), this.node.emit("map-out")
                }, t.prototype.playMapButtonAnimation = function() {
                    var e, t;
                    null === (t = null === (e = cc.find("map", this.node)) || void 0 === e ? void 0 : e.getComponent(cc.Animation)) || void 0 === t || t.play()
                }, t.prototype.onQuestAnimationFinished = function() {
                    this.questActionQueue.splice(0, 1), this.questActionQueue[0] && this.questActionQueue[0]()
                }, t.prototype.onLoad = function() {
                    this.questActionQueue = [], this.questAnimation.on(cc.Animation.EventType.FINISHED, this.onQuestAnimationFinished, this), this.bigQuestAnimation.on(cc.Animation.EventType.FINISHED, this.onQuestAnimationFinished, this), c.default.cheatsEnabled || (this.cheatsButton.active = !1)
                }, __decorate([p(r.default)], t.prototype, "questLabel", void 0), __decorate([p(r.default)], t.prototype, "bigQuestLabel", void 0), __decorate([p(cc.Animation)], t.prototype, "questAnimation", void 0), __decorate([p(cc.Animation)], t.prototype, "bigQuestAnimation", void 0), __decorate([p(cc.Node)], t.prototype, "cheatsButton", void 0), __decorate([p({
                    type: s.default,
                    visible: !0
                })], t.prototype, "_inventory", void 0), __decorate([u, d("Gameplay Component/UI/HUD/HUD")], t)
            }(a.default);
        n.default = h, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../common/PausableComponent": "PausableComponent",
        "../../localization/LocalizationLabelComponent": "LocalizationLabelComponent",
        "../../managers/GameManager": "GameManager",
        "./InventoryHUD": "InventoryHUD"
    }],
    HintEventPanel: [function(e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "a01eccOKmhPn5vWoB74ghPs", "HintEventPanel"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.HintEventImage = void 0;
        var i, a = e("../../../audios/AudioConfig"),
            r = e("../../../audios/AudioManager"),
            s = e("../../../common/Resources"),
            c = e("../../../config/InputConfig"),
            l = e("./Panel"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property;
        (function(e) {
            e[e.Headband = 0] = "Headband", e[e.Blackboard = 1] = "Blackboard", e[e.Poster = 2] = "Poster", e[e.Screen = 3] = "Screen"
        })(i = n.HintEventImage || (n.HintEventImage = {}));
        var h = ((o = {})[i.Headband] = s.ResourceID.HintEventHeadband, o[i.Blackboard] = s.ResourceID.HintEventBlackboard, o[i.Poster] = s.ResourceID.HintEventPoster, o[i.Screen] = s.ResourceID.HintEventScreen, o),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.closeButton = null, t.hintImage = null, t.interactive = !1, t
                }
                return __extends(t, e), t.prototype.show = function() {
                    var t = this;
                    e.prototype.show.call(this), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        c.uiActions.accept.on("triggered", t.hide, t)
                    }), this.closeButton.play("IN_button"), this.closeButton.setCurrentTime(0), this.closeButton.stop(), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        t.closeButton.play("IN_button"), t.closeButton.once(cc.Animation.EventType.FINISHED, function() {
                            t.interactive = !0
                        })
                    }), r.default.instance.playSfx(a.SFXKey.hint_in)
                }, t.prototype.hide = function() {
                    e.prototype.hide.call(this), this.closeButton.play("OUT_button"), this.interactive = !1, r.default.instance.playSfx(a.SFXKey.hint_out), c.uiActions.accept.off("triggered", this.hide, this)
                }, t.prototype.onClose = function() {
                    this.interactive && (this.hide(), r.default.instance.playSfx(a.SFXKey.button_back))
                }, t.prototype.setImage = function(e) {
                    this.hintImage.spriteFrame = s.default.get(h[e])
                }, __decorate([d(cc.Animation)], t.prototype, "closeButton", void 0), __decorate([d(cc.Sprite)], t.prototype, "hintImage", void 0), __decorate([p], t)
            }(l.default);
        n.default = m, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager",
        "../../../common/Resources": "Resources",
        "../../../config/InputConfig": "InputConfig",
        "./Panel": "Panel"
    }],
    HowToPopup: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0f7dcknE3lNnroWsGe8cBaW", "HowToPopup"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../audios/AudioConfig"),
            i = e("../audios/AudioManager"),
            a = e("../config/InputConfig"),
            r = e("../localization/LocalizationRichTextComponent"),
            s = e("../utilities/Utils"),
            c = cc._decorator,
            l = c.ccclass,
            u = c.property,
            p = {
                "[MOVEMENT_INPUT]": "<img src='dpad_base' />",
                "[ACTION_INPUT]": "<img src='action_btn' />"
            },
            d = function() {
                function e() {
                    this.node = null, this.desktopText = "", this.mobileText = ""
                }
                return __decorate([u(cc.Node)], e.prototype, "node", void 0), __decorate([u()], e.prototype, "desktopText", void 0), __decorate([u()], e.prototype, "mobileText", void 0), __decorate([l("HowToPopupPage")], e)
            }(),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.pageLabel = null, t.carouselIndicatorsParent = null, t.pageOnFrame = null, t.pageOffFrame = null, t.leftButton = null, t.rightButton = null, t.closeButton = null, t.pages = [], t.interactive = !1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.animation = this.getComponent(cc.Animation), this.node.active = !1, this.currentPage = 0, this.leftButton.opacity = 128
                }, t.prototype.onEnable = function() {
                    a.uiActions.cancel.on("triggered", this.onClose, this), a.uiActions.select.on("value-changed", this.onInputMove, this)
                }, t.prototype.onDisable = function() {
                    a.uiActions.cancel.off("triggered", this.onClose, this), a.uiActions.select.off("value-changed", this.onInputMove, this)
                }, t.prototype.show = function() {
                    var e = this;
                    this.node.active = !0, this.animation.play("IN_popup"), this.animation.setCurrentTime(0), this.closeButton.play("IN_button"), this.closeButton.setCurrentTime(0), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.animation.play("LOOP_object"), e.interactive = !0
                    }), this.updatePage(this.currentPage), i.default.instance.playSfx(o.SFXKey.popup_open)
                }, t.prototype.hide = function() {
                    var e = this;
                    this.interactive && (this.animation.play("OUT_popup"), this.animation.setCurrentTime(0), this.closeButton.play("OUT_button"), this.closeButton.setCurrentTime(0), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.node.emit("hid"), e.node.active = !1
                    }), this.interactive = !1, i.default.instance.playSfx(o.SFXKey.popup_close))
                }, t.prototype.onInputMove = function(e) {
                    var t = e.getUserData();
                    t.x > 0 ? this.cycleRight() : t.x < 0 && this.cycleLeft()
                }, t.prototype.onClose = function() {
                    this.hide(), i.default.instance.playSfx(o.SFXKey.button_back)
                }, t.prototype.cycleLeft = function() {
                    0 !== this.currentPage && (this.updatePage(this.currentPage - 1), this.leftButton.opacity = 0 === this.currentPage ? 128 : 255, this.rightButton.opacity = 255, i.default.instance.playSfx(o.SFXKey.button_general))
                }, t.prototype.cycleRight = function() {
                    var e = this.pages.length - 1;
                    this.currentPage !== e && (this.updatePage(this.currentPage + 1), this.rightButton.opacity = this.currentPage === e ? 128 : 255, this.leftButton.opacity = 255, i.default.instance.playSfx(o.SFXKey.button_general))
                }, t.prototype.updatePage = function(e) {
                    var t = this.currentPage,
                        n = this.pages[e];
                    if (n) {
                        var o = this.carouselIndicatorsParent.children[t].getComponent(cc.Sprite),
                            i = this.carouselIndicatorsParent.children[e].getComponent(cc.Sprite);
                        o.spriteFrame = this.pageOffFrame, i.spriteFrame = this.pageOnFrame, this.pages[t].node.active = !1, n.node.active = !0, s.default.isMobile() ? this.pageLabel.setKey(n.mobileText, p) : this.pageLabel.setKey(n.desktopText)
                    }
                    this.currentPage = e
                }, __decorate([u(r.default)], t.prototype, "pageLabel", void 0), __decorate([u(cc.Node)], t.prototype, "carouselIndicatorsParent", void 0), __decorate([u(cc.SpriteFrame)], t.prototype, "pageOnFrame", void 0), __decorate([u(cc.SpriteFrame)], t.prototype, "pageOffFrame", void 0), __decorate([u(cc.Node)], t.prototype, "leftButton", void 0), __decorate([u(cc.Node)], t.prototype, "rightButton", void 0), __decorate([u(cc.Animation)], t.prototype, "closeButton", void 0), __decorate([u([d])], t.prototype, "pages", void 0), __decorate([l], t)
            }(cc.Component);
        n.default = h, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager",
        "../config/InputConfig": "InputConfig",
        "../localization/LocalizationRichTextComponent": "LocalizationRichTextComponent",
        "../utilities/Utils": "Utils"
    }],
    IdleAnimEventPanel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "173ebOBbGpBkbVtn7EpPs90", "IdleAnimEventPanel"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../audios/AudioConfig"),
            i = e("../../../audios/AudioManager"),
            a = e("../../../config/InputConfig"),
            r = e("./Panel"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.okButton = null, t.interactive = !1, t
                }
                return __extends(t, e), t.prototype.show = function() {
                    var t = this;
                    e.prototype.show.call(this), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        a.uiActions.accept.on("triggered", t.onOk, t)
                    }), this.okButton.play("IN_button"), this.okButton.setCurrentTime(0), this.okButton.stop(), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        t.okButton.play("IN_button"), t.okButton.once(cc.Animation.EventType.FINISHED, function() {
                            t.interactive = !0
                        }), t.animation.play(t.animation.getClips()[2].name)
                    })
                }, t.prototype.hide = function() {
                    e.prototype.hide.call(this), this.okButton.play("OUT_button"), this.interactive = !1, i.default.instance.playSfx(o.SFXKey.banner_out)
                }, t.prototype.onOk = function() {
                    this.interactive && (this.hide(), i.default.instance.playSfx(o.SFXKey.button_general))
                }, __decorate([l(cc.Animation)], t.prototype, "okButton", void 0), __decorate([c], t)
            }(r.default);
        n.default = u, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager",
        "../../../config/InputConfig": "InputConfig",
        "./Panel": "Panel"
    }],
    InfoPanel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9024fpO/vxGi6clLFb1+wvg", "InfoPanel"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../audios/AudioConfig"),
            i = e("../../../audios/AudioManager"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.iconSprite = null, t.iconFrame = null, t.closeFrame = null, t
                }
                return __extends(t, e), t.prototype.show = function() {
                    var e = this.getComponent(cc.Animation),
                        t = e && e.currentClip,
                        n = t && e.getAnimationState(t.name);
                    t && n.isPlaying || (this.node.active = !0, e.play("IN_info"), this.iconSprite.spriteFrame = this.closeFrame, i.default.instance.playSfx(o.SFXKey.popup_open))
                }, t.prototype.hide = function(e) {
                    var t = this,
                        n = this.getComponent(cc.Animation),
                        a = n && n.currentClip,
                        r = a && n.getAnimationState(a.name);
                    !this.node.active || a && r.isPlaying || (n.play("OUT_info"), n.once(cc.Animation.EventType.FINISHED, function() {
                        t.node.active = !1, e && e()
                    }), this.iconSprite.spriteFrame = this.iconFrame, i.default.instance.playSfx(o.SFXKey.popup_close))
                }, t.prototype.showOrHide = function() {
                    this.node.active ? this.hide() : this.show(), i.default.instance.playSfx(o.SFXKey.button_general)
                }, t.prototype.syncIcon = function() {
                    this.node.active ? this.iconSprite.spriteFrame = this.closeFrame : this.iconSprite.spriteFrame = this.iconFrame
                }, t.prototype.onLoad = function() {
                    this.node.active = !1
                }, __decorate([s(cc.Sprite)], t.prototype, "iconSprite", void 0), __decorate([s(cc.SpriteFrame)], t.prototype, "iconFrame", void 0), __decorate([s(cc.SpriteFrame)], t.prototype, "closeFrame", void 0), __decorate([r, c("Gameplay Component/UI/Tutorial/InfoPanel")], t)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager"
    }],
    InputAction: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5f06a5G0gFJr7A9H8s9hh8o", "InputAction"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.InputActionMap = n.InputActionDoubleAxisMenu = n.InputActionDoubleAxis = n.InputActionTrigger = n.InputAction = void 0;
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return null
                },
                enumerable: !1,
                configurable: !0
            }), t
        }(cc.EventTarget);
        n.InputAction = o;
        var i = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.bindings = t, n
            }
            return __extends(t, e), t.prototype.connect = function(e) {
                this.devices = e;
                for (var t = {
                        pressed: {
                            cb: this.onTriggered,
                            ctx: this
                        }
                    }, n = 0, o = e; n < o.length; n++) o[n].addCallbacks(t)
            }, t.prototype.disconnect = function() {
                for (var e = {
                        pressed: {
                            cb: this.onTriggered,
                            ctx: this
                        }
                    }, t = 0, n = this.devices; t < n.length; t++) n[t].removeCallbacks(e);
                this.devices = null
            }, t.prototype.onTriggered = function(e) {
                if (e instanceof cc.Event.EventKeyboard && this.bindings.keyboard) {
                    var t = e; - 1 !== this.bindings.keyboard.indexOf(t.keyCode) && ((o = new cc.Event.EventCustom("triggered", !1)).setUserData(t.keyCode), this.dispatchEvent(o))
                } else {
                    var n = e;
                    if (this.bindings.virtualId === n.getUserData().id) {
                        var o = new cc.Event.EventCustom("triggered", !1);
                        this.dispatchEvent(o)
                    }
                }
            }, t
        }(o);
        n.InputActionTrigger = i;
        var a = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.bindings = t, n._value = cc.v2(0, 0), n
            }
            return __extends(t, e), Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this._value
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.connect = function(e) {
                this.devices = e;
                for (var t = {
                        pressed: {
                            cb: this.onPressed,
                            ctx: this
                        },
                        released: {
                            cb: this.onRelease,
                            ctx: this
                        },
                        "analog-stick-moved": {
                            cb: this.onAnalogStickMoved,
                            ctx: this
                        }
                    }, n = 0, o = e; n < o.length; n++) o[n].addCallbacks(t);
                if (this.devices[1]) {
                    var i = this.devices[1].getControlValue("analog-stick-moved");
                    i && (this._value.x = i.x, this._value.y = i.y, this.emitValue())
                } else {
                    var a = this.devices[0],
                        r = this.bindings.keyboard;
                    this._value.x = a.isKeyPressed.apply(a, r.right) ? 1 : a.isKeyPressed.apply(a, r.left) ? -1 : 0, this._value.y = a.isKeyPressed.apply(a, r.up) ? 1 : a.isKeyPressed.apply(a, r.up) ? -1 : 0, this.emitValue()
                }
            }, t.prototype.disconnect = function() {
                for (var e = {
                        pressed: {
                            cb: this.onPressed,
                            ctx: this
                        },
                        released: {
                            cb: this.onRelease,
                            ctx: this
                        },
                        "analog-stick-moved": {
                            cb: this.onAnalogStickMoved,
                            ctx: this
                        }
                    }, t = 0, n = this.devices; t < n.length; t++) n[t].removeCallbacks(e);
                this.devices = null
            }, t.prototype.onPressed = function(e) {
                var t = e.keyCode,
                    n = this.bindings.keyboard; - 1 !== n.up.indexOf(t) ? (this._value.y = 1, this.emitValue()) : -1 !== n.down.indexOf(t) ? (this._value.y = -1, this.emitValue()) : -1 !== n.left.indexOf(t) ? (this._value.x = -1, this.emitValue()) : -1 !== n.right.indexOf(t) ? (this._value.x = 1, this.emitValue()) : n.upleft && -1 !== n.upleft.indexOf(t) ? (this._value.x = -1, this._value.y = 1, this.emitValue()) : n.upright && -1 !== n.upright.indexOf(t) ? (this._value.x = 1, this._value.y = 1, this.emitValue()) : n.downleft && -1 !== n.downleft.indexOf(t) ? (this._value.x = -1, this._value.y = -1, this.emitValue()) : n.downright && -1 !== n.downright.indexOf(t) && (this._value.x = 1, this._value.y = -1, this.emitValue())
            }, t.prototype.onRelease = function(e) {
                var t = e.keyCode,
                    n = this.bindings.keyboard,
                    o = this.devices[0]; - 1 !== n.up.indexOf(t) ? (this._value.y = o.isKeyPressed.apply(o, n.down) ? -1 : 0, this.emitValue()) : -1 !== n.down.indexOf(t) ? (this._value.y = o.isKeyPressed.apply(o, n.up) ? 1 : 0, this.emitValue()) : -1 !== n.left.indexOf(t) ? (this._value.x = o.isKeyPressed.apply(o, n.right) ? 1 : 0, this.emitValue()) : -1 !== n.right.indexOf(t) ? (this._value.x = o.isKeyPressed.apply(o, n.left) ? -1 : 0, this.emitValue()) : n.upleft && -1 !== n.upleft.indexOf(t) ? (this._value.x = o.isKeyPressed.apply(o, n.right) ? 1 : 0, this._value.y = o.isKeyPressed.apply(o, n.down) ? -1 : 0, this.emitValue()) : n.upright && -1 !== n.upright.indexOf(t) ? (this._value.x = o.isKeyPressed.apply(o, n.left) ? -1 : 0, this._value.y = o.isKeyPressed.apply(o, n.down) ? -1 : 0, this.emitValue()) : n.downleft && -1 !== n.downleft.indexOf(t) ? (this._value.x = o.isKeyPressed.apply(o, n.right) ? 1 : 0, this._value.y = o.isKeyPressed.apply(o, n.up) ? 1 : 0, this.emitValue()) : n.downright && -1 !== n.downright.indexOf(t) && (this._value.x = o.isKeyPressed.apply(o, n.left) ? -1 : 0, this._value.y = o.isKeyPressed.apply(o, n.up) ? 1 : 0, this.emitValue())
            }, t.prototype.onAnalogStickMoved = function(e) {
                var t = e.getUserData();
                this._value.x = t.x, this._value.y = t.y, this.emitValue()
            }, t.prototype.emitValue = function() {
                var e = new cc.Event.EventCustom("value-changed", !1);
                e.setUserData(this._value.magSqr() > 1 ? this._value.normalize() : this._value), this.dispatchEvent(e)
            }, t
        }(o);
        n.InputActionDoubleAxis = a;
        var r = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return __extends(t, e), t.prototype.connect = function(t) {
                e.prototype.connect.call(this, t);
                for (var n = {
                        "text-repeat": {
                            cb: this.onPressed,
                            ctx: this
                        }
                    }, o = 0, i = t; o < i.length; o++) i[o].addCallbacks(n)
            }, t.prototype.disconnect = function() {
                for (var t = {
                        "text-repeat": {
                            cb: this.onPressed,
                            ctx: this
                        }
                    }, n = 0, o = this.devices; n < o.length; n++) o[n].removeCallbacks(t);
                e.prototype.disconnect.call(this)
            }, t.prototype.emitValue = function() {
                var e = new cc.Event.EventCustom("value-changed", !1);
                e.setUserData(this.value), this.dispatchEvent(e)
            }, t
        }(a);
        n.InputActionDoubleAxisMenu = r;
        n.InputActionMap = function() {}, cc._RF.pop()
    }, {}],
    InputBindings: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4b164sm5YdAEKDq9pe+i9uD", "InputBindings"), Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.InputBindingDeviceType = void 0,
            function(e) {
                e[e.Keyboard = 0] = "Keyboard"
            }(n.InputBindingDeviceType || (n.InputBindingDeviceType = {})), cc._RF.pop()
    }, {}],
    InputConfig: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "79e71tQjuRPAauo2LssGX8J", "InputConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.moveBindings = n.uiActions = n.playerActions = void 0;
        var o = e("../common/input/InputAction"),
            i = e("../common/input/InputSystem"),
            a = cc.macro.KEY,
            r = {
                keyboard: {
                    up: [a.up, a.w],
                    down: [a.down, a.s],
                    left: [a.left, a.a],
                    right: [a.right, a.d]
                }
            };
        n.moveBindings = r;
        var s = {
                keyboard: [a.e, a.space],
                virtualId: "action"
            },
            c = {
                keyboard: [a.x, a.z],
                virtualId: "eat"
            },
            l = {
                keyboard: {
                    up: [a.up, a.w],
                    down: [a.down, a.s],
                    left: [a.left, a.a],
                    right: [a.right, a.d]
                }
            },
            u = {
                keyboard: [a.e, a.space, a.enter]
            },
            p = {
                keyboard: [a.backspace, a.escape]
            },
            d = {
                keyboard: [a.p, a.escape]
            },
            h = {
                keyboard: [a.m, a.tab]
            },
            m = {
                move: new o.InputActionDoubleAxis(r),
                action: new o.InputActionTrigger(s),
                eat: new o.InputActionTrigger(c),
                dropItem: new o.InputActionTrigger({
                    keyboard: [49, 50, 51, 52, 53, 54]
                })
            };
        n.playerActions = m;
        var f = {
            select: new o.InputActionDoubleAxisMenu(l),
            accept: new o.InputActionTrigger(u),
            cancel: new o.InputActionTrigger(p),
            pause: new o.InputActionTrigger(d),
            map: new o.InputActionTrigger(h)
        };
        n.uiActions = f, i.default.registerActionMap(f), cc._RF.pop()
    }, {
        "../common/input/InputAction": "InputAction",
        "../common/input/InputSystem": "InputSystem"
    }],
    InputDevice: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b9c42/oXaRNhrUEnvrEMrUY", "InputDevice"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.addCallbacks = function(e) {
                for (var t in e) - 1 !== this.events.indexOf(t) && e[t] && this.on(t, e[t].cb, e[t].ctx)
            }, t.prototype.removeCallbacks = function(e) {
                for (var t in e) - 1 !== this.events.indexOf(t) && e[t] && this.off(t, e[t].cb, e[t].ctx)
            }, t
        }(cc.EventTarget);
        n.default = o, cc._RF.pop()
    }, {}],
    InputKeyboardDevice: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f1274DxHKBA3ai8PVGQ9+fs", "InputKeyboardDevice"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.events = ["pressed", "text-repeat", "released"], t.flags = [0, 0, 0, 0, 0, 0, 0, 0], t
            }
            return __extends(t, e), t.prototype.isKeyPressed = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = 0, o = e; n < o.length; n++) {
                    var i = o[n],
                        a = i / 32,
                        r = i - 32 * a;
                    if (this.flags[a] & 1 << r) return !0
                }
                return !1
            }, t.prototype.onKeyDown = function(e) {
                var t = e.keyCode,
                    n = t / 32,
                    o = t - 32 * n;
                this.flags[n] & 1 << o ? e.type = "text-repeat" : (this.flags[n] |= 1 << o, e.type = "pressed"), this.dispatchEvent(e)
            }, t.prototype.onKeyUp = function(e) {
                var t = e.keyCode,
                    n = t / 32,
                    o = t - 32 * n;
                this.flags[n] &= ~(1 << o), e.type = "released", this.dispatchEvent(e)
            }, t.prototype.onRegisterDevice = function() {
                this.onRemoveDevice(), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
            }, t.prototype.onRemoveDevice = function() {
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
            }, t
        }(e("./InputDevice").default);
        n.default = o, cc._RF.pop()
    }, {
        "./InputDevice": "InputDevice"
    }],
    InputSystem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0b3a4wUKVlLqIFPinejU/HK", "InputSystem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../utilities/Utils"),
            i = e("./InputKeyboardDevice"),
            a = e("./InputVirtualDevice"),
            r = function() {
                function e() {
                    this.actionMaps = [], this.devices = [], this.addDevice(new i.default), o.default.isMobile() && this.addDevice(new a.default)
                }
                return Object.defineProperty(e, "is", {
                    get: function() {
                        return this._is || (this._is = new e), this._is
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.addDevice = function(e) {
                    -1 === this.devices.indexOf(e) && (this.devices.push(e), e.onRegisterDevice())
                }, e.prototype.removeDevice = function(e) {
                    var t = this.devices.indexOf(e); - 1 !== t && (e.onRemoveDevice(), this.devices.splice(t, 1))
                }, e.prototype.registerActionMap = function(e) {
                    if (-1 === this.actionMaps.indexOf(e)) {
                        this.actionMaps.push(e);
                        for (var t = 0, n = Object.getOwnPropertyNames(e); t < n.length; t++) {
                            var o = n[t];
                            e[o] && e[o].connect(this.devices)
                        }
                    }
                }, e.prototype.removeActionMap = function(e) {
                    var t = this.actionMaps.indexOf(e);
                    if (-1 !== t) {
                        for (var n = 0, o = Object.getOwnPropertyNames(e); n < o.length; n++) {
                            var i = o[n];
                            e[i] && e[i].disconnect()
                        }
                        this.actionMaps.splice(t, 1)
                    }
                }, e.addDevice = function(e) {
                    this.is.addDevice(e)
                }, e.removeDevice = function(e) {
                    this.is.removeDevice(e)
                }, e.registerActionMap = function(e) {
                    this.is.registerActionMap(e)
                }, e.removeActionMap = function(e) {
                    this.is.removeActionMap(e)
                }, e
            }();
        n.default = r, cc._RF.pop()
    }, {
        "../../utilities/Utils": "Utils",
        "./InputKeyboardDevice": "InputKeyboardDevice",
        "./InputVirtualDevice": "InputVirtualDevice"
    }],
    InputTutorialPanel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "77efbM+YbFKr5MGWXSU9qS8", "InputTutorialPanel"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../localization/LocalizationRichTextComponent"),
            i = e("../../../utilities/Utils"),
            a = e("./TutorialPanel"),
            r = cc._decorator,
            s = r.ccclass,
            c = r.property,
            l = {
                "[MOVEMENT_INPUT]": "<img src='dpad_base' />",
                "[ACTION_INPUT]": "<img src='action_btn' />"
            },
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.label = null, t.desktop = "", t.mobile = "", t
                }
                return __extends(t, e), t.prototype.show = function() {
                    e.prototype.show.call(this), i.default.isMobile() ? this.label.setKey(this.mobile, l) : this.label.setKey(this.desktop)
                }, __decorate([c(o.default)], t.prototype, "label", void 0), __decorate([c], t.prototype, "desktop", void 0), __decorate([c], t.prototype, "mobile", void 0), __decorate([s], t)
            }(a.default);
        n.default = u, cc._RF.pop()
    }, {
        "../../../localization/LocalizationRichTextComponent": "LocalizationRichTextComponent",
        "../../../utilities/Utils": "Utils",
        "./TutorialPanel": "TutorialPanel"
    }],
    InputVirtualDevice: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bf321nRx0pA/qaduO6iFF/U", "InputVirtualDevice"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.events = ["pressed", "repeat", "released", "analog-stick-moved"], t.controls = {}, t
            }
            return __extends(t, e), t.prototype.getControlValue = function(e) {
                return this.controls[e]
            }, t.prototype.onButtonDown = function(e) {
                var t = e.getUserData();
                this.controls[t.id] ? e.type = "repeat" : (this.controls[t.id] = !0, e.type = "pressed"), this.dispatchEvent(e)
            }, t.prototype.onButtonUp = function(e) {
                var t = e.getUserData();
                this.controls[t.id] = !1, e.type = "released", this.dispatchEvent(e)
            }, t.prototype.onAnalogStickMove = function(e) {
                e.type = "analog-stick-moved", this.controls[e.type] = e.getUserData(), this.dispatchEvent(e)
            }, t.prototype.onRegisterDevice = function() {
                this.onRemoveDevice(), cc.systemEvent.on("vhid-buttondown", this.onButtonDown, this), cc.systemEvent.on("vhid-buttonup", this.onButtonUp, this), cc.systemEvent.on("vhid-analogstick", this.onAnalogStickMove, this)
            }, t.prototype.onRemoveDevice = function() {
                cc.systemEvent.on("vhid-buttondown", this.onButtonDown, this), cc.systemEvent.on("vhid-buttonup", this.onButtonUp, this), cc.systemEvent.off("vhid-analogstick", this.onAnalogStickMove, this)
            }, t
        }(e("./InputDevice").default);
        n.default = o, cc._RF.pop()
    }, {
        "./InputDevice": "InputDevice"
    }],
    InteractBallonManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8298894Jd9NzYGrYfljhTcw", "InteractBallonManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.silentBalloons = n.BalloonFrame = void 0;
        var o, i = e("../common/Resources"),
            a = e("../gameplay/GameState"),
            r = e("../gameplay/inventory/Item"),
            s = e("../gameplay/WorldInfo"),
            c = e("../utilities/Utils");
        (function(e) {
            e[e.PointingDown = 0] = "PointingDown", e[e.PointingRight = 1] = "PointingRight", e[e.PointingLeft = 2] = "PointingLeft", e[e.PointingUp = 3] = "PointingUp", e[e.Coin = 4] = "Coin", e[e.Juice = 5] = "Juice", e[e.GumStick = 6] = "GumStick", e[e.Headband = 7] = "Headband", e[e.Lockpick = 8] = "Lockpick", e[e.EraserDown = 9] = "EraserDown", e[e.EraserLeft = 10] = "EraserLeft", e[e.Screwdriver = 11] = "Screwdriver", e[e.Brush = 12] = "Brush", e[e.RedBrush = 13] = "RedBrush", e[e.BlueBrush = 14] = "BlueBrush", e[e.GreenBrush = 15] = "GreenBrush", e[e.FireExtinguisher = 16] = "FireExtinguisher", e[e.Hammer = 17] = "Hammer", e[e.Screen = 18] = "Screen", e[e.Blowgun = 19] = "Blowgun", e[e.ReachExtender = 20] = "ReachExtender", e[e.Blackboard = 21] = "Blackboard", e[e.Desk = 22] = "Desk", e[e.Poster = 23] = "Poster", e[e.NegationDown = 24] = "NegationDown", e[e.NegationUp = 25] = "NegationUp", e[e.NegationRight = 26] = "NegationRight", e[e.Chip = 27] = "Chip", e[e.Note = 28] = "Note", e[e.Padlock = 29] = "Padlock", e[e.PointingFrames = 4] = "PointingFrames", e[e.None = 4294967295] = "None"
        })(o = n.BalloonFrame || (n.BalloonFrame = {})), n.silentBalloons = [o.PointingDown, o.PointingRight, o.PointingLeft, o.PointingUp, o.NegationDown, o.NegationUp, o.NegationRight, o.None];
        var l = function() {
            function e() {
                this.pool = new cc.NodePool
            }
            return e.itemTypeToFrame = function(e) {
                switch (e) {
                    case r.ItemType.Coin:
                        return o.Coin;
                    case r.ItemType.Juice:
                        return o.Juice;
                    case r.ItemType.GumStick:
                        return o.GumStick;
                    case r.ItemType.Headband:
                        return o.Headband;
                    case r.ItemType.Lockpick:
                        return o.Lockpick;
                    case r.ItemType.Eraser:
                        return o.EraserDown;
                    case r.ItemType.Chip:
                        return o.Chip;
                    case r.ItemType.Screwdriver:
                        return o.Screwdriver;
                    case r.ItemType.Brush:
                        return o.Brush;
                    case r.ItemType.RedBrush:
                        return o.RedBrush;
                    case r.ItemType.BlueBrush:
                        return o.BlueBrush;
                    case r.ItemType.GreenBrush:
                        return o.GreenBrush;
                    case r.ItemType.FireExtinguisher:
                        return o.FireExtinguisher;
                    case r.ItemType.Hammer:
                        return o.Hammer;
                    case r.ItemType.Screen:
                        return o.Screen;
                    case r.ItemType.Blowgun:
                        return o.Blowgun;
                    case r.ItemType.Note:
                        return o.Note;
                    case r.ItemType.ReachExtender:
                        return o.ReachExtender;
                    case r.ItemType.Padlock:
                        return o.Padlock;
                    case r.ItemType.PaintedBrush:
                        var t = a.default.get().world.environmentFlags;
                        if (0 == (t & s.EnvironmentFlags.PosterRedPainted)) return o.RedBrush;
                        if (0 == (t & s.EnvironmentFlags.PosterBluePainted)) return o.BlueBrush;
                        if (0 == (t & s.EnvironmentFlags.PosterGreenPainted)) return o.GreenBrush;
                    default:
                        return o.NegationDown
                }
            }, e.getBalloon = function(e) {
                return this.instance.getBalloon(e)
            }, e.changeBalloonBackFrame = function(e, t) {
                this.instance.changeBalloonBackFrame(e, t)
            }, e.returnBalloon = function(e) {
                this.instance.returnBalloon(e)
            }, e.prototype.getBalloon = function(e) {
                var t = this.pool.size() > 0 ? this.pool.get() : cc.instantiate(i.default.get(i.ResourceID.BubblePrefab));
                return this.changeBalloonBackFrame(t, e), t
            }, e.prototype.changeBalloonBackFrame = function(e, t) {
                var n = cc.find("base/baloon", e).getComponent(cc.Sprite);
                if (t < o.PointingFrames) n.spriteFrame = c.default.isMobile() ? i.default.get(i.ResourceID.BubbleMobile0 + t) : i.default.get(i.ResourceID.BubbleDesktop0 + t);
                else {
                    var a = t - o.PointingFrames;
                    n.spriteFrame = i.default.get(i.ResourceID.BubbleCoin + a)
                }
            }, e.prototype.returnBalloon = function(e) {
                e && this.pool.put(e)
            }, e.instance = new e, e
        }();
        n.default = l, cc._RF.pop()
    }, {
        "../common/Resources": "Resources",
        "../gameplay/GameState": "GameState",
        "../gameplay/WorldInfo": "WorldInfo",
        "../gameplay/inventory/Item": "Item",
        "../utilities/Utils": "Utils"
    }],
    InteractiveEntity: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "65355A1hfVDQJQxcRjtAAGY", "InteractiveEntity"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../common/PausableComponent"),
            r = e("../../managers/InteractBallonManager"),
            s = e("../../utilities/Enumerators"),
            c = cc._decorator,
            l = c.ccclass,
            u = c.property,
            p = c.menu,
            d = cc.Enum(s.Direction),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.balloonParent = null, t.markerOffset = cc.Vec2.ZERO, t.markerDirection = s.Direction.Down, t
                }
                var n;
                return __extends(t, e), n = t, Object.defineProperty(t.prototype, "hasOwnBallooon", {
                    get: function() {
                        return null !== this.balloonParent
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.isActive = function() {
                    return this.active
                }, t.prototype.setActive = function(e) {
                    var t = this,
                        o = this.getComponents(cc.PhysicsCollider);
                    if (e) {
                        this.active = e;
                        for (var i = 0, a = o; i < a.length; i++)(c = a[i]).sensor && (c.enabled = !0, c.apply())
                    } else {
                        if (void 0 === this.getComponents(n).find(function(e) {
                                return e !== t && e.isActive()
                            }))
                            for (var r = 0, s = o; r < s.length; r++) {
                                var c;
                                (c = s[r]).sensor && (c.enabled = !1)
                            }
                        this.active = e
                    }
                    this.node.emit("state-changed")
                }, t.prototype.canPerformAction = function() {
                    return !0
                }, t.prototype.showBalloon = function(e) {
                    void 0 === e && (e = this.balloonFrame);
                    var t = this.balloonParent.children[0];
                    t ? r.default.changeBalloonBackFrame(t, e) : ((t = r.default.getBalloon(e)).parent = this.balloonParent, t.x = 0, t.y = 0);
                    var n = t.getComponent(cc.Animation);
                    n.off(cc.Animation.EventType.FINISHED), n.play("IN_baloon"), n.setCurrentTime(0), n.once(cc.Animation.EventType.FINISHED, function() {
                        n.play("LOOP_baloon")
                    }), -1 === r.silentBalloons.indexOf(e) && i.default.instance.playSfx(o.SFXKey.bubble_item)
                }, t.prototype.hideBalloon = function(e) {
                    void 0 === e && (e = !1);
                    var t = this.balloonParent.children[0];
                    if (t) {
                        var n = t.getComponent(cc.Animation);
                        if (n.off(cc.Animation.EventType.FINISHED), e) r.default.returnBalloon(t);
                        else {
                            var o = n.currentClip;
                            o && "OUT_baloon" === o.name || (n.play("OUT_baloon"), n.setCurrentTime(0)), n.once(cc.Animation.EventType.FINISHED, function() {
                                r.default.returnBalloon(t)
                            })
                        }
                    }
                }, t.prototype.pauseBalloon = function() {
                    if (this.balloonParent) {
                        var e = this.balloonParent.children[0],
                            t = e && e.getComponent(cc.Animation);
                        t && t.pause()
                    }
                }, t.prototype.resumeBalloon = function() {
                    if (this.balloonParent) {
                        var e = this.balloonParent.children[0],
                            t = e && e.getComponent(cc.Animation);
                        t && t.resume()
                    }
                }, t.prototype.onResume = function() {
                    e.prototype.onResume.call(this), this.resumeBalloon()
                }, t.prototype.onPause = function() {
                    e.prototype.onPause.call(this), this.pauseBalloon()
                }, __decorate([u(cc.Node)], t.prototype, "balloonParent", void 0), __decorate([u(cc.Vec2)], t.prototype, "markerOffset", void 0), __decorate([u({
                    type: d
                })], t.prototype, "markerDirection", void 0), n = __decorate([l, p("Gameplay Component/Props/InteractiveEntity")], t)
            }(a.default);
        n.default = h, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../common/PausableComponent": "PausableComponent",
        "../../managers/InteractBallonManager": "InteractBallonManager",
        "../../utilities/Enumerators": "Enumerators"
    }],
    InteractivePropAudio: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5e4748RxbxD6p1qn2FkvN85", "InteractivePropAudio"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = {
                0: "action-done",
                1: "request-fulfilled",
                2: "minigame-done",
                3: "fulfilling-request-started"
            },
            l = cc.Enum(o.SFXKey),
            u = cc.Enum({
                ActionDone: 0,
                RequestFulfilled: 1,
                MinigameDone: 2,
                FulfillingRequest: 3
            }),
            p = function() {
                function e() {
                    this.id = 0, this.sfx = o.SFXKey.padlock_door, this.event = 0
                }
                return __decorate([s()], e.prototype, "id", void 0), __decorate([s({
                    type: l
                })], e.prototype, "sfx", void 0), __decorate([s({
                    type: u
                })], e.prototype, "event", void 0), __decorate([r("InteractivePropAudioEventListener")], e)
            }(),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.sfxEvents = [], t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    for (var e = this, t = function(t) {
                            var o = t.id,
                                a = t.sfx;
                            n.node.on(c[t.event], function(t) {
                                t.name === cc.director.getScene().name + "_" + e.node.name + "_" + o && i.default.instance.playSfx(a)
                            })
                        }, n = this, o = 0, a = this.sfxEvents; o < a.length; o++) t(a[o])
                }, __decorate([s([p])], t.prototype, "sfxEvents", void 0), __decorate([r], t)
            }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager"
    }],
    InteractiveProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6d204lzRR1L+49RPK86Sklu", "InteractiveProp"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.InteractiveProp = n.EffectType = void 0;
        var o, i = e("../../audios/AudioConfig"),
            a = e("../../audios/AudioManager"),
            r = e("../../config/GameConfig"),
            s = e("../../managers/InteractBallonManager"),
            c = e("../BaseEnvironmentProp"),
            l = e("../GameState"),
            u = e("../inventory/components/InventoryActions"),
            p = e("../inventory/Item"),
            d = e("../WorldInfo"),
            h = e("./Door"),
            m = e("./InteractiveEntity"),
            f = cc._decorator,
            y = f.ccclass,
            g = f.property,
            v = f.menu,
            _ = cc.Enum(p.ItemType),
            b = cc.Enum(d.EnvironmentFlags),
            I = cc.Enum(s.BalloonFrame),
            A = function() {
                function e() {
                    this.drop = p.ItemType.Coin
                }
                return __decorate([g({
                    type: _
                })], e.prototype, "drop", void 0), __decorate([y("InteractivePropDropEffect")], e)
            }(),
            C = function() {
                function e() {
                    this.room = "", this.name = "", this.id = 0
                }
                return __decorate([g()], e.prototype, "room", void 0), __decorate([g()], e.prototype, "name", void 0), __decorate([g({
                    type: cc.Integer
                })], e.prototype, "id", void 0), __decorate([y("InteractivePropEnableEffect")], e)
            }(),
            P = function() {
                function e() {
                    this.node = null, this.id = 0
                }
                return __decorate([g(cc.Node)], e.prototype, "node", void 0), __decorate([g({
                    type: cc.Integer
                })], e.prototype, "id", void 0), __decorate([y("InteractivePropActionateEffect")], e)
            }(),
            S = function() {
                function e() {
                    this.envFlag = d.EnvironmentFlags.GymHallPanelOpen, this.envFlagValue = !0, this.envProp = null
                }
                return __decorate([g({
                    type: b
                })], e.prototype, "envFlag", void 0), __decorate([g()], e.prototype, "envFlagValue", void 0), __decorate([g({
                    type: c.default
                })], e.prototype, "envProp", void 0), __decorate([y("InteractivePropUpdateEnvironmentEffect")], e)
            }(),
            k = function() {
                function e() {
                    this.door = null, this.doorId = "", this.unlocked = !0
                }
                return __decorate([g({
                    type: h.default
                })], e.prototype, "door", void 0), __decorate([g()], e.prototype, "doorId", void 0), __decorate([g()], e.prototype, "unlocked", void 0), __decorate([y("UnlockDoorEffect")], e)
            }();
        (function(e) {
            e[e.Drop = 0] = "Drop", e[e.Enable = 1] = "Enable", e[e.SequentialEnable = 2] = "SequentialEnable", e[e.UpdateEnvironment = 3] = "UpdateEnvironment", e[e.UnlockDoor = 4] = "UnlockDoor", e[e.ShowEventPanel = 5] = "ShowEventPanel", e[e.Actionate = 6] = "Actionate", e[e.None = 4294967295] = "None"
        })(o = n.EffectType || (n.EffectType = {}));
        var F = cc.Enum(o),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.clip = null, t.dropEffect = new A, t.enableEffect = null, t.envEffect = null, t.unlockDoorEffect = null, t.actionateEffect = null, t.id = 0, t.envFlag = d.EnvironmentFlags.GymHallPanelOpen, t.envFlagValue = !0, t.request = p.ItemType.None, t.customBalloonFrame = s.BalloonFrame.None, t._effectType = o.Drop, t.startActive = !0, t
                }
                var n;
                return __extends(t, e), n = t, Object.defineProperty(t.prototype, "effectType", {
                    get: function() {
                        return this._effectType
                    },
                    set: function(e) {
                        if (e !== this._effectType) {
                            switch (this._effectType) {
                                case o.Drop:
                                    this.dropEffect = null;
                                    break;
                                case o.Enable:
                                    this.enableEffect = null;
                                    break;
                                case o.UpdateEnvironment:
                                    this.envEffect = null;
                                    break;
                                case o.UnlockDoor:
                                    this.unlockDoorEffect = null;
                                    break;
                                case o.Actionate:
                                    this.actionateEffect = null
                            }
                            switch (e) {
                                case o.Drop:
                                    this.dropEffect = new A;
                                    break;
                                case o.Enable:
                                    this.enableEffect = new C;
                                    break;
                                case o.UpdateEnvironment:
                                    this.envEffect = new S;
                                    break;
                                case o.UnlockDoor:
                                    this.unlockDoorEffect = new k;
                                    break;
                                case o.Actionate:
                                    this.actionateEffect = new P
                            }
                        }
                        this._effectType = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "info", {
                    get: function() {
                        return l.default.get().props[this.name]
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "balloonFrame", {
                    get: function() {
                        return this.customBalloonFrame !== s.BalloonFrame.None ? this.customBalloonFrame : this.request !== p.ItemType.None && l.default.get().player.inventory.getItemsByType(this.request).length > 0 ? s.default.itemTypeToFrame(this.info.request) : s.BalloonFrame.PointingDown
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.doAction = function() {
                    var e = this;
                    this.node.emit("action-done", this);
                    var t = l.default.get();
                    if (t.world.propBlocker && -1 === t.world.propBlocker.blacklist.indexOf(this.name) && t.npc[t.world.propBlocker.npc].instance) {
                        this.hasOwnBallooon ? (this.unscheduleAllCallbacks(), this.showBalloon(s.BalloonFrame.NegationDown), this.scheduleOnce(function() {
                            return e.hideBalloon()
                        }, r.bubbleDuration)) : t.player.character.showBalloon(s.BalloonFrame.NegationDown);
                        var n = t.npc[t.world.propBlocker.npc].instance;
                        n.showBalloon(s.BalloonFrame.NegationDown), this.scheduleOnce(function() {
                            return n.hideBalloon()
                        }, r.bubbleDuration);
                        var c = n.getAnimationCurrentClipName();
                        return "PLAY_tobiasangry" !== c && "LOOP_tobiasangry" !== c && (n.playAnimation("PLAY_tobiasangry"), n.node.once("animation-finished", function() {
                            n.playAnimation("LOOP_tobiasangry")
                        })), a.default.instance.playSfx(i.SFXKey.tobias_blocker), !1
                    }
                    if (this.canPerformAction()) return t.player.inventory.removeItemsByType(this.info.request, 1), t.player.character.getComponent(u.default).syncInventory(), this._effectType === o.ShowEventPanel ? (this.node.emit("request-fulfilled", this), !0) : (this._effectType === o.Drop && a.default.instance.playSfx(i.SFXKey.item_drop), this.info.active = !1, this.setActive(!1), this.animation && this.clip ? (this.animation.play(this.clip.name), this.animation.on(cc.Animation.EventType.FINISHED, this.performAction, this), this.node.getChildByName("marker") && (this.node.getChildByName("marker").opacity = 0), cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, this.performAction, this)) : (this.animation && (this.animation.setCurrentTime(0), this.animation.stop()), this.performAction()), this.node.emit("fulfilling-request-started", this), !0);
                    var p = void 0;
                    return this.hasOwnBallooon ? (p = this.customBalloonFrame !== s.BalloonFrame.None ? this.customBalloonFrame : s.default.itemTypeToFrame(this.request), this.unscheduleAllCallbacks(), this.showBalloon(p), this.scheduleOnce(function() {
                        return e.hideBalloon()
                    }, r.bubbleDuration)) : (p = s.default.itemTypeToFrame(this.request), t.player.character.showBalloon(p)), p !== s.BalloonFrame.NegationDown && p !== s.BalloonFrame.NegationRight && p !== s.BalloonFrame.NegationUp
                }, t.prototype.canPerformAction = function() {
                    return this.info && (null === this.info.request || l.default.get().player.inventory.getItemsByType(this.info.request).length > 0)
                }, t.prototype.playItemDroppedSound = function() {
                    a.default.instance.playRandomSfx([i.SFXKey.item_dropped1, i.SFXKey.item_dropped2])
                }, t.prototype.onRequestFulfilled = function() {
                    var e = l.default.get(),
                        t = l.default.get().world;
                    if (this.dropEffect) {
                        var i = this.clip.events.find(function(e) {
                            return "end" === e.func
                        });
                        if (i) {
                            var a = cc.find(i.params[0], this.node),
                                r = a.height * a.anchorY,
                                s = a.convertToWorldSpaceAR(cc.v2(0, -r)),
                                c = e.world.currentRoom.node.convertToNodeSpaceAR(s),
                                u = {
                                    instance: void 0,
                                    item: new p.default(this.dropEffect.drop),
                                    position: c
                                };
                            e.addItemToRoom(cc.director.getScene().name, u), e.world.currentRoom.spawnItem(u), a.active = !1
                        }
                    } else if (this.enableEffect) {
                        var d = this.enableEffect.room + "_" + this.enableEffect.name + "_" + this.enableEffect.id;
                        e.props[d] ? (e.props[d].active = !0, e.props[d].instance && e.props[d].instance.setActive(!0), e.props[d].room = this.enableEffect.room) : e.props[d] = {
                            instance: void 0,
                            request: void 0,
                            active: !0,
                            room: void 0
                        }
                    } else if (this.envEffect) t.environmentFlags = t.environmentFlags & ~this.envEffect.envFlag | 1 + ~this.envEffect.envFlagValue & this.envEffect.envFlag, this.envEffect.envProp.updateProp();
                    else if (this.unlockDoorEffect) this.unlockDoorEffect.door ? (t.doors[this.unlockDoorEffect.door.doorId].locked = !this.unlockDoorEffect.unlocked, this.unlockDoorEffect.door.setActive(this.unlockDoorEffect.unlocked)) : t.doors[this.unlockDoorEffect.doorId].locked = !this.unlockDoorEffect.unlocked;
                    else if (this._effectType === o.SequentialEnable) {
                        for (var h = this.getComponents(n), m = 0; m < h.length && h[m] !== this; ++m);
                        if (h[++m]) {
                            l.default.get().props[h[m].name].active = !0, h[m].setActive(!0);
                            for (var f = 0, y = this.getComponents(cc.PhysicsCollider); f < y.length; f++) {
                                var g = y[f];
                                g.sensor && g.apply()
                            }
                        }
                    } else this.actionateEffect && (d = e.world.currentRoom.getName() + "_" + this.actionateEffect.node.name + "_" + this.actionateEffect.id, e.props[d] && e.props[d].instance && e.props[d].instance.doAction());
                    t.environmentFlags = t.environmentFlags & ~this.envFlag | 1 + ~this.envFlagValue & this.envFlag
                }, t.prototype.performAction = function() {
                    this.animation && this.animation.off(cc.Animation.EventType.FINISHED, this.performAction, this), cc.director.off(cc.Director.EVENT_BEFORE_SCENE_LOADING, this.performAction, this), this.clip && this.animation.setCurrentTime(this.clip.duration), this.onRequestFulfilled(), this.node.emit("request-fulfilled", this)
                }, t.prototype.onResume = function() {
                    e.prototype.onResume.call(this), this.node.resumeAllActions(), this.animation && this.animation.resume()
                }, t.prototype.onPause = function() {
                    e.prototype.onPause.call(this), this.node.pauseAllActions(), this.animation && this.animation.pause()
                }, t.prototype.onLoad = function() {
                    var t = this;
                    e.prototype.onLoad.call(this), this.animation = this.getComponent(cc.Animation), this.name = cc.director.getScene().name + "_" + this.node.name + "_" + this.id;
                    var i = this.info;
                    if (i ? (i.instance = this, void 0 === i.request && (i.request = this.request !== p.ItemType.None ? this.request : null), void 0 === i.active ? (this.setActive(this.startActive), i.active = this.isActive()) : this.setActive(i.active), void 0 === i.room && (i.room = cc.director.getScene().name)) : (this.setActive(this.startActive), l.default.get().props[this.name] = {
                            request: this.request !== p.ItemType.None ? this.request : null,
                            instance: this,
                            active: this.isActive(),
                            room: cc.director.getScene().name
                        }), this._effectType === o.SequentialEnable && this.isActive() && cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function() {
                            for (var e = t.getComponents(n), o = 0; o < e.length && e[o] !== t; ++o);
                            e[++o] && (l.default.get().props[e[o].name].active = !1, e[o].setActive(!1))
                        }), this.animation) {
                        if (!!(l.default.get().world.environmentFlags & this.envFlag) === this.envFlagValue) {
                            if (this.clip ? (this.animation.play(this.clip.name), this.animation.setCurrentTime(this.clip.duration), this.animation.stop()) : (this.animation.setCurrentTime(0), this.animation.stop()), this.dropEffect) {
                                var a = this.clip.events.find(function(e) {
                                    return "end" === e.func
                                });
                                a && (cc.find(a.params[0], this.node).active = !1)
                            }
                        } else this.animation.defaultClip && this.animation.playOnLoad && this.animation.play();
                        this.animation.playOnLoad = !1
                    }
                    this.node.emit("prop-loaded")
                }, t.prototype.onDestroy = function() {
                    e.prototype.onDestroy.call(this), this.info && (this.info.instance = void 0)
                }, __decorate([g(cc.AnimationClip)], t.prototype, "clip", void 0), __decorate([g({
                    type: A,
                    visible: function() {
                        return this._effectType === o.Drop
                    }
                })], t.prototype, "dropEffect", void 0), __decorate([g({
                    type: C,
                    visible: function() {
                        return this._effectType === o.Enable
                    }
                })], t.prototype, "enableEffect", void 0), __decorate([g({
                    type: S,
                    visible: function() {
                        return this._effectType === o.UpdateEnvironment
                    }
                })], t.prototype, "envEffect", void 0), __decorate([g({
                    type: k,
                    visible: function() {
                        return this._effectType === o.UnlockDoor
                    }
                })], t.prototype, "unlockDoorEffect", void 0), __decorate([g({
                    type: P,
                    visible: function() {
                        return this._effectType === o.Actionate
                    }
                })], t.prototype, "actionateEffect", void 0), __decorate([g], t.prototype, "id", void 0), __decorate([g({
                    type: b
                })], t.prototype, "envFlag", void 0), __decorate([g], t.prototype, "envFlagValue", void 0), __decorate([g({
                    type: _
                })], t.prototype, "request", void 0), __decorate([g({
                    type: I
                })], t.prototype, "customBalloonFrame", void 0), __decorate([g({
                    visible: !1
                })], t.prototype, "_effectType", void 0), __decorate([g], t.prototype, "startActive", void 0), __decorate([g({
                    type: F
                })], t.prototype, "effectType", null), n = __decorate([y, v("Gameplay Component/Interactive/Prop")], t)
            }(m.default);
        n.InteractiveProp = E, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../config/GameConfig": "GameConfig",
        "../../managers/InteractBallonManager": "InteractBallonManager",
        "../BaseEnvironmentProp": "BaseEnvironmentProp",
        "../GameState": "GameState",
        "../WorldInfo": "WorldInfo",
        "../inventory/Item": "Item",
        "../inventory/components/InventoryActions": "InventoryActions",
        "./Door": "Door",
        "./InteractiveEntity": "InteractiveEntity"
    }],
    InventoryActions: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "632d3bW35tJ0opKv3OaEK3Q", "InventoryActions"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ItemComponent"),
            i = e("../ItemStack"),
            a = e("../Item"),
            r = e("../SpecialItem"),
            s = e("./SpecialItemTracker"),
            c = e("../../GameState"),
            l = e("../../../config/ItemConfig"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = u.menu,
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.itemPrefab = null, t
                }
                return __extends(t, e), t.prototype.dropItem = function(e) {
                    var t = this.inventory.getItemInSlot(e);
                    if (t) {
                        var n = cc.instantiate(this.itemPrefab),
                            a = n.getComponent(o.default);
                        n.parent = this.node.parent, n.x = this.node.x, n.y = this.node.y, n.zIndex = this.node.zIndex, t instanceof i.default ? (--t.amount, a.item = t.item, t.amount < 1 ? (this.inventory.setItemInSlot(null, e), this.node.emit("inventory-change", null, e)) : this.node.emit("inventory-change", t, e)) : (a.item = t, this.inventory.setItemInSlot(null, e), this.node.emit("inventory-change", null, e));
                        var l = a.spawn();
                        if (t instanceof r.default) {
                            var u = a.node.addComponent(s.default);
                            u.itemData = {
                                item: t,
                                position: l,
                                instance: a
                            }, c.default.get().addItemToRoom(cc.director.getScene().name, u.itemData)
                        }
                    }
                }, t.prototype.removeRandomItem = function() {
                    var e, t;
                    do {
                        t = Math.round(Math.random() * (this.inventory.size - 1)), e = this.inventory.getItemInSlot(t)
                    } while (!e || e instanceof r.default);
                    return this.inventory.setItemInSlot(null, t), this.node.emit("inventory-change", null, t), t
                }, t.prototype.requestItems = function(e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var o = n[t],
                            a = c.default.get().getItemAmountInInventories(o.id);
                        if (!(o instanceof i.default && a >= o.amount || a > 0)) return !1
                    }
                    for (var r = 0, s = e; r < s.length; r++) o = s[r], c.default.get().takeItemFromInventories(o.id, o instanceof i.default ? o.amount : 1);
                    return this.syncInventory(), !0
                }, t.prototype.syncInventory = function() {
                    for (var e = 0; e < this.inventory.size; ++e) {
                        var t = this.inventory.getItemInSlot(e);
                        this.node.emit("inventory-change", t, e)
                    }
                }, t.prototype.addItem = function(e) {
                    var t;
                    if (e.id === a.ItemType.Lockpick) t = this.inventory.size - 1;
                    else {
                        var n = this.inventory.freeSlots;
                        if (n.length > 0) {
                            for (var o = 0, i = this.inventory.getItemsByClassType(a.default); o < i.length; o++)
                                if (i[o] === e) return !1;
                            t = n[0]
                        }
                    }
                    this.inventory.setItemInSlot(e, t);
                    for (var r = !1, s = 0, c = l.recipes; s < c.length; s++) {
                        for (var u = c[s], p = !0, d = 0, h = u.items; d < h.length; d++) {
                            var m = h[d];
                            if (0 === this.inventory.getItemsByType(m).length) {
                                p = !1;
                                break
                            }
                        }
                        if (p) {
                            for (var f = 0, y = u.items; f < y.length; f++) m = y[f], this.inventory.removeItemsByType(m, 1);
                            this.inventory.setItemInSlot(new a.default(u.result), this.inventory.freeSlots[0]), this.node.emit("special-event-happened", u.eventPanel), r = !0;
                            break
                        }
                    }
                    return r ? this.syncInventory() : this.node.emit("inventory-change", e, t), !0
                }, t.prototype.onUnableToPick = function(e) {
                    e.playUnableToPick(), this.node.emit("unable-to-pick-item")
                }, t.prototype.onLoad = function() {
                    var e = c.default.get().player;
                    this.inventory = e.inventory, this.inventory.size = 5
                }, t.prototype.start = function() {
                    this.syncInventory()
                }, t.prototype.onEnable = function() {
                    this.node.on("slot-pressed", this.dropItem, this)
                }, t.prototype.onDisable = function() {
                    this.node.off("slot-pressed", this.dropItem, this)
                }, t.prototype.onBeginContact = function(e, t, n) {
                    if (0 === t.tag) {
                        var i = n.node.getComponent(o.default);
                        i && (this.addItem(i.item) ? i.playPickUp() : this.onUnableToPick(i))
                    }
                }, __decorate([d(cc.Prefab)], t.prototype, "itemPrefab", void 0), __decorate([p, h("Gameplay Component/Inventory/InventoryActions")], t)
            }(cc.Component);
        n.default = m, cc._RF.pop()
    }, {
        "../../../config/ItemConfig": "ItemConfig",
        "../../GameState": "GameState",
        "../Item": "Item",
        "../ItemStack": "ItemStack",
        "../SpecialItem": "SpecialItem",
        "./ItemComponent": "ItemComponent",
        "./SpecialItemTracker": "SpecialItemTracker"
    }],
    InventoryController: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c6ce647rJRByJ/2yRzWaRYN", "InventoryController"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../gameplay/inventory/components/InventoryActions"),
            i = e("../../common/PausableComponent"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.menu,
            c = a.requireComponent,
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this.invAct = this.getComponent(o.default)
                }, __decorate([r, c(o.default), s("Controller Component/Player/InventoryController")], t)
            }(i.default);
        n.default = l, cc._RF.pop()
    }, {
        "../../common/PausableComponent": "PausableComponent",
        "../../gameplay/inventory/components/InventoryActions": "InventoryActions"
    }],
    InventoryHUD: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d919fqFe+RJeobby7NRYOue", "InventoryHUD"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../common/PausableComponent"),
            i = e("../../common/Resources"),
            a = e("../../gameplay/GameState"),
            r = e("../../gameplay/inventory/Item"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.menu,
            u = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.registerEvents = function(e) {
                    e.on("inventory-change", this.onInventoryChange, this), e.on("unable-to-pick-item", this.onUnableToPickItem, this), this.targetNode = e
                }, t.prototype.unregisterEvents = function(e) {
                    e.off("inventory-change", this.onInventoryChange, this), e.off("unable-to-pick-item", this.onUnableToPickItem, this), this.targetNode = null
                }, t.prototype.onSlotPressed = function() {}, t.prototype.onUnableToPickItem = function() {
                    var e = this.getComponent(cc.Animation),
                        t = e.currentClip,
                        n = t && e.getAnimationState(t.name);
                    n && n.isPlaying || e.play("PLAY_no_space")
                }, t.prototype.onSpecialItemAdded = function(e) {
                    var t = this.slots[e];
                    t && t.node.parent.children[1].getComponent(cc.Animation).play()
                }, t.prototype.onInventoryChange = function(e, t) {
                    var n = this.slots[t];
                    if (n)
                        if (e) {
                            n.node.active = !0;
                            var o = i.ResourceID["Icon" + r.ItemType[e.id]];
                            n.sprite.spriteFrame = i.default.get(void 0 !== o ? o : i.ResourceID.IconCoin)
                        } else n.node.active = !1
                }, t.prototype.onPause = function() {
                    e.prototype.onPause.call(this), this.getComponent(cc.Animation).pause()
                }, t.prototype.onResume = function() {
                    e.prototype.onResume.call(this), this.getComponent(cc.Animation).resume()
                }, t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this.slots = [];
                    for (var t = 0, n = this.node.children; t < n.length; t++) {
                        var o = n[t].children[0];
                        this.slots.push({
                            node: o,
                            sprite: o.getComponent(cc.Sprite)
                        })
                    }
                    this.registerEvents(a.default.get().player.character.node)
                }, __decorate([c, l("Gameplay Component/UI/HUD/InventoryHUD")], t)
            }(o.default);
        n.default = u, cc._RF.pop()
    }, {
        "../../common/PausableComponent": "PausableComponent",
        "../../common/Resources": "Resources",
        "../../gameplay/GameState": "GameState",
        "../../gameplay/inventory/Item": "Item"
    }],
    Inventory: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cb16c85LgZLJbKJ+80Q9LyH", "Inventory"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ItemStack"),
            i = e("./SpecialItem"),
            a = function() {
                function e() {
                    this.slots = []
                }
                return Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.slots.length
                    },
                    set: function(e) {
                        this.slots.length = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "freeSlots", {
                    get: function() {
                        for (var e = [], t = 0; t < this.slots.length; ++t) this.slots[t] || e.push(t);
                        return e
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.getItemInSlot = function(e) {
                    return this.slots[e]
                }, e.prototype.setItemInSlot = function(e, t) {
                    if (!(t < 0 || this.slots.length <= t)) {
                        if ("number" != typeof t) {
                            for (t = 0; this.slots[t] || this.slots.length === t;) ++t;
                            if (this.slots.length === t) return
                        }
                        this.slots[t] = e
                    }
                }, e.prototype.getItemsByType = function(e) {
                    for (var t = [], n = 0, i = this.slots; n < i.length; n++) {
                        var a = i[n];
                        (null == a ? void 0 : a.id) === e ? t.push(a) : a instanceof o.default && a.item.id === e && t.push(a)
                    }
                    return t
                }, e.prototype.getItemsByClassType = function(e) {
                    for (var t = [], n = 0, i = this.slots; n < i.length; n++) {
                        var a = i[n];
                        a instanceof e ? t.push(a) : a instanceof o.default && a.item instanceof e && t.push(a)
                    }
                    return t
                }, e.prototype.getItemSlot = function(e) {
                    for (var t = 0; t < this.slots.length; ++t)
                        if (e === this.slots[t]) return t;
                    return -1
                }, e.prototype.isEmpty = function() {
                    for (var e = 0; e < this.slots.length; ++e)
                        if (this.slots[e]) return !1;
                    return !0
                }, e.prototype.hasSpecialItemsOnly = function() {
                    for (var e = 0; e < this.slots.length; ++e)
                        if (this.slots[e] && !(this.slots[e] instanceof i.default)) return !1;
                    return !0
                }, e.prototype.getItemTypeCount = function(e) {
                    for (var t = 0, n = 0, i = this.slots; n < i.length; n++) {
                        var a = i[n];
                        a && a.id === e && (t += a instanceof o.default ? a.amount : 1)
                    }
                    return t
                }, e.prototype.removeItemsByType = function(e, t) {
                    for (var n = this.size, i = 0, a = 0; a < n; ++a) {
                        var r = this.slots[a];
                        if (r && r.id === e)
                            if (r instanceof o.default) {
                                if ((i += r.amount) >= t) {
                                    r.amount = i - t, 0 === r.amount && this.setItemInSlot(null, a);
                                    break
                                }
                                this.setItemInSlot(null, a)
                            } else if (i += 1, this.setItemInSlot(null, a), i === t) break
                    }
                    return t - i
                }, e.prototype.clear = function() {
                    for (var e = 0; e < this.slots.length; ++e) this.slots[e] = null
                }, e.prototype.serialize = function() {
                    for (var e = {
                            slots: []
                        }, t = 0, n = this.slots; t < n.length; t++) {
                        var i = n[t];
                        i ? i instanceof o.default ? e.slots.push({
                            item: i.id,
                            amount: i.amount
                        }) : e.slots.push({
                            item: i.id
                        }) : e.slots.push({
                            item: void 0
                        })
                    }
                    return e
                }, e
            }();
        n.default = a, cc._RF.pop()
    }, {
        "./ItemStack": "ItemStack",
        "./SpecialItem": "SpecialItem"
    }],
    ItemAssetsManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1d7fd2tLUlAF5yIrTHYKUlD", "ItemAssetsManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = o.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.itemFrames = [], t
                }
                var n;
                return __extends(t, e), n = t, Object.defineProperty(t, "itemFrames", {
                    get: function() {
                        return this.instance && this.instance.itemFrames
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onLoad = function() {
                    n.instance ? this.node.destroy() : (n.instance = this, cc.game.addPersistRootNode(this.node))
                }, __decorate([a([cc.SpriteFrame])], t.prototype, "itemFrames", void 0), n = __decorate([i, r("Config Component/ItemAssetsManager")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    ItemComponent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "60b89kP/kpNkai55w0bucaE", "ItemComponent"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../Item"),
            i = e("../../../common/PausableComponent"),
            a = e("../../../audios/AudioConfig"),
            r = e("../../../audios/AudioManager"),
            s = e("../../../common/Resources"),
            c = cc._decorator,
            l = c.ccclass,
            u = c.property,
            p = c.menu,
            d = [a.SFXKey.item_collected1, a.SFXKey.item_collected2, a.SFXKey.item_collected3],
            h = [a.SFXKey.item_dropped1, a.SFXKey.item_dropped2],
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.sprite = null, t.anim = null, t.shadow = null, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "item", {
                    get: function() {
                        return this._item
                    },
                    set: function(e) {
                        this._item = e;
                        var t = s.ResourceID["Frame" + o.ItemType[e.id]];
                        this.sprite.spriteFrame = s.default.get(void 0 !== t ? t : s.ResourceID.FrameCoin)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "info", {
                    get: function() {
                        return this._info
                    },
                    set: function(e) {
                        this._info && (this._info.instance = void 0), this._info = e, e && (e.instance = this, this.item = e.item)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "active", {
                    get: function() {
                        return this.collider.enabled
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.spawn = function() {
                    var e, t, n, o, i, a, s, c, l, u, p = this,
                        d = cc.tween(this.node),
                        m = this.node.y;
                    e: for (;;) {
                        t = .5 * (e = 64 * Math.random() - 32), n = 5 * Math.random() - 2.5, o = 1 - .2 * Math.random(), s = (i = 10 + n) * i, c = (a = i / 2) * a;
                        var f = cc.director.getPhysicsManager(),
                            y = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                        l = Math.random() > .5 ? 1 : -1, u = (s + c) * l;
                        for (var g = cc.v2(y.x + u, y.y + e), v = 0, _ = f.rayCast(y, g, cc.RayCastType.All); v < _.length; v++) {
                            var b = _[v];
                            if ("room" === b.collider.node.name) continue e;
                            if (!b.collider.sensor && "gumball" !== b.collider.node.name && b.collider.getAABB().contains(g)) continue e
                        }
                        break
                    }
                    var I = {
                            translation: i,
                            translationSqr: s,
                            node: this.node,
                            shadow: this.shadow,
                            startGround: m,
                            endGroud: m + t
                        },
                        A = {
                            translation: a,
                            translationSqr: c,
                            node: this.node,
                            shadow: this.shadow,
                            startGround: m + t,
                            endGroud: m + e
                        },
                        C = function(e, t, n, i) {
                            var a = i * this.translationSqr,
                                r = a * a,
                                c = this.translation * a,
                                l = 50 / s,
                                u = (-r / this.translation + c) * l * o;
                            return this.node.y = u + cc.misc.lerp(this.startGround, this.endGroud, i), this.shadow.y = -u, e + (t - e) * i
                        };
                    return d.by(.5, {
                        x: s * l
                    }, {
                        progress: C.bind(I)
                    }).call(function() {
                        p.node.zIndex = -p.node.y, r.default.instance.playRandomSfx(h)
                    }).by(.25, {
                        x: c * l
                    }, {
                        progress: C.bind(A)
                    }).call(function() {
                        p.node.zIndex = -p.node.y, p.collider && (p.collider.enabled = !0)
                    }).start(), cc.v2(this.node.x + u, this.node.y + e)
                }, t.prototype.playPickUp = function() {
                    var e = this;
                    this.collider.enabled = !1, this.anim.play("PLAY_pickup"), this.anim.once(cc.Animation.EventType.FINISHED, function() {
                        e.node.destroy()
                    }), this.node.emit("picked-up"), r.default.instance.playRandomSfx(d)
                }, t.prototype.playUnableToPick = function() {
                    var e = this.anim.currentClip,
                        t = e && this.anim.getAnimationState(e.name);
                    t && t.isPlaying || this.anim.play("PLAY_no_space")
                }, t.prototype.playShine = function() {
                    cc.find("shine", this.node).getComponent(cc.Animation).play("PLAY_specialobj")
                }, t.prototype.onPause = function() {
                    e.prototype.onPause.call(this), cc.director.getActionManager().pauseTarget(this.node), this.anim.pause()
                }, t.prototype.onResume = function() {
                    e.prototype.onResume.call(this), cc.director.getActionManager().resumeTarget(this.node), this.anim.resume()
                }, t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this.collider = this.getComponent(cc.PhysicsCollider)
                }, t.prototype.onDestroy = function() {
                    this.info = null
                }, __decorate([u(cc.Sprite)], t.prototype, "sprite", void 0), __decorate([u(cc.Animation)], t.prototype, "anim", void 0), __decorate([u(cc.Node)], t.prototype, "shadow", void 0), __decorate([l, p("Gameplay Component/Inventory/ItemComponent")], t)
            }(i.default);
        n.default = m, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager",
        "../../../common/PausableComponent": "PausableComponent",
        "../../../common/Resources": "Resources",
        "../Item": "Item"
    }],
    ItemConfig: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "239e7iAVn1K5LxBoZbnJZ7H", "ItemConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.recipes = void 0;
        var o = e("../gameplay/inventory/Item"),
            i = e("../ui/gameplay/panels/EventPanel"),
            a = [{
                items: [o.ItemType.Gum, o.ItemType.SelfieStick],
                result: o.ItemType.GumStick,
                eventPanel: i.EventImage.GumStick
            }, {
                items: [o.ItemType.Broomstick, o.ItemType.Glove],
                result: o.ItemType.ReachExtender,
                eventPanel: i.EventImage.Pointer
            }];
        n.recipes = a, cc._RF.pop()
    }, {
        "../gameplay/inventory/Item": "Item",
        "../ui/gameplay/panels/EventPanel": "EventPanel"
    }],
    ItemStack: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f6f78scl+FCl5+mlIyrE6pd", "ItemStack"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t(t, n) {
                void 0 === n && (n = 1);
                var o = e.call(this, t.id) || this;
                return o.item = t, o.amount = n, o
            }
            return __extends(t, e), t
        }(e("./Item").default);
        n.default = o, cc._RF.pop()
    }, {
        "./Item": "Item"
    }],
    Item: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5c719+vmwNChJehNMfk3VvY", "Item"), Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ItemType = void 0,
            function(e) {
                e[e.Coin = 0] = "Coin", e[e.Juice = 1] = "Juice", e[e.SelfieStick = 2] = "SelfieStick", e[e.Gum = 3] = "Gum", e[e.GumStick = 4] = "GumStick", e[e.Headband = 5] = "Headband", e[e.Lockpick = 6] = "Lockpick", e[e.Chip = 7] = "Chip", e[e.Eraser = 8] = "Eraser", e[e.Screwdriver = 9] = "Screwdriver", e[e.Brush = 10] = "Brush", e[e.RedBrush = 11] = "RedBrush", e[e.BlueBrush = 12] = "BlueBrush", e[e.GreenBrush = 13] = "GreenBrush", e[e.FireExtinguisher = 14] = "FireExtinguisher", e[e.Hammer = 15] = "Hammer", e[e.Screen = 16] = "Screen", e[e.Blowgun = 17] = "Blowgun", e[e.Note = 18] = "Note", e[e.Glove = 19] = "Glove", e[e.Broomstick = 20] = "Broomstick", e[e.ReachExtender = 21] = "ReachExtender", e[e.Padlock = 22] = "Padlock", e[e.PaintedBrush = 23] = "PaintedBrush", e[e.Unavailable = 4294967294] = "Unavailable", e[e.None = 4294967295] = "None"
            }(n.ItemType || (n.ItemType = {}));
        n.default = function(e) {
            this.id = e
        }, cc._RF.pop()
    }, {}],
    LoadingScreen: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d372fdDU7hPbYEEThIDpZFx", "LoadingScreen"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../common/Resources"),
            i = e("../gameplay/GameState"),
            a = e("./gameplay/PauseUI"),
            r = cc._decorator,
            s = r.ccclass,
            c = r.menu,
            l = -1,
            u = 0,
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var n;
                return __extends(t, e), n = t, t.get = function() {
                    return this.current || (cc.instantiate(o.default.get(o.ResourceID.LoadingPrefab)).parent = cc.director.getScene().getChildByName("Canvas")), this.current
                }, t.prototype.in = function() {
                    var e = this;
                    return a.default.enabled = !1, this.node.active = !0, this.node.opacity = 0, cc.tween(this.node).to(.5, {
                        opacity: 255
                    }).call(function() {
                        e.node.emit("in-done"), a.default.enabled = !0
                    }).start(), l = cc.director.getTotalFrames(), i.default.get().player.controlEnabled = !1, this
                }, t.prototype.out = function() {
                    var e = this;
                    a.default.enabled = !1, this.node.active = !0, this.node.opacity = 255;
                    var t = cc.director.getTotalFrames() - l;
                    return -1 === l || t >= 240 ? cc.director.once(cc.Director.EVENT_BEFORE_UPDATE, function() {
                        cc.tween(e.node).to(.5, {
                            opacity: 0
                        }).call(function() {
                            e.node.active = !1, a.default.enabled = !0, i.default.get().player.controlEnabled = !0, e.node.emit("out-done")
                        }).start()
                    }) : this.scheduleOnce(function() {
                        cc.tween(e.node).to(.5, {
                            opacity: 0
                        }).call(function() {
                            e.node.active = !1, a.default.enabled = !0, i.default.get().player.controlEnabled = !0, e.node.emit("out-done")
                        }).start()
                    }, (240 - t) / cc.game.getFrameRate()), i.default.get().player.controlEnabled = !1, this
                }, t.prototype.once = function(e, t, n, o) {
                    return this.node.active ? this.node.once(e, t, n, o) : t.bind(n)(), this
                }, t.prototype.onLoad = function() {
                    n.current = this, this.node.opacity = 0, this.node.zIndex = 999, this.node.active = !1
                }, t.prototype.onEnable = function() {
                    var e = this.getComponentInChildren(cc.Animation);
                    e.play(), e.setCurrentTime(u)
                }, t.prototype.onDisable = function() {
                    var e = this.getComponentInChildren(cc.Animation),
                        t = e && e.getAnimationState(e.currentClip.name);
                    u = t.time
                }, t.prototype.onDestroy = function() {
                    n.current === this && delete n.current
                }, n = __decorate([s, c("Frontend Component/LoadingScreen")], t)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../common/Resources": "Resources",
        "../gameplay/GameState": "GameState",
        "./gameplay/PauseUI": "PauseUI"
    }],
    LocalizationConfig: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2c14864kfJLbJXNuELygFXE", "LocalizationConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./LocalizationManager"),
            i = e("./LocalizationManager"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.localesFonts = [], t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    o.default.instance.setFontLanguage(this.localesFonts)
                }, __decorate([s([i.FontLanguage])], t.prototype, "localesFonts", void 0), __decorate([r], t)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {
        "./LocalizationManager": "LocalizationManager"
    }],
    LocalizationImageComponent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7c3f5Hgf95AUbBfjSV59/Hv", "LocalizationImageComponent"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./LocalizationManager"),
            i = cc._decorator,
            a = i.ccclass,
            r = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.spriteComponent = null, t.key = "", t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.spriteComponent || (this.spriteComponent = this.node.getComponent(cc.Sprite)), this.localizationManager = o.default.instance, this.localizationItem = {
                        key: this.key,
                        target: this.spriteComponent
                    }
                }, t.prototype.onEnable = function() {
                    this.localizationManager.subscribeItem(this.localizationItem)
                }, t.prototype.onDisable = function() {
                    this.localizationManager.unsubscribeItem(this.localizationItem)
                }, __decorate([r(cc.Sprite)], t.prototype, "spriteComponent", void 0), __decorate([r(cc.String)], t.prototype, "key", void 0), __decorate([a], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {
        "./LocalizationManager": "LocalizationManager"
    }],
    LocalizationLabelComponent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c9d2djzoGZC3IpuuA2U916H", "LocalizationLabelComponent"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./LocalizationManager"),
            i = cc._decorator,
            a = i.ccclass,
            r = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.labelComponent = null, t.key = "", t.checkSwapFont = !0, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "currentKey", {
                    get: function() {
                        return this.localizationItem.key
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.setKey = function(e) {
                    var t = this;
                    this.localizationItem ? (this.localizationItem.key = e, this.localizationManager.updateItem(this.localizationItem)) : cc.director.once(cc.Director.EVENT_BEFORE_DRAW, function() {
                        t.setKey(e)
                    })
                }, t.prototype.onLoad = function() {
                    this.labelComponent || (this.labelComponent = this.node.getComponent(cc.Label)), this.originalFont = this.labelComponent.font, this.localizationManager = o.default.instance, this.localizationItem = {
                        key: this.key,
                        target: this.labelComponent
                    }, this.swapFont(), this.customFix()
                }, t.prototype.start = function() {
                    var e = 1.12 * this.labelComponent.fontSize;
                    this.node.height < e && (this.node.height = e)
                }, t.prototype.onEnable = function() {
                    this.localizationManager.subscribeItem(this.localizationItem), this.localizationManager.on(o.default.KEY_ON_CHANGE_LANGUAGE, this.swapFont, this)
                }, t.prototype.onDisable = function() {
                    this.localizationManager.unsubscribeItem(this.localizationItem), this.localizationManager.off(o.default.KEY_ON_CHANGE_LANGUAGE, this.swapFont, this)
                }, t.prototype.swapFont = function() {
                    var e;
                    (e = this.localizationManager.getFont()) && this.checkSwapFont ? this.labelComponent.font = e : this.labelComponent.font = this.originalFont
                }, t.prototype.customFix = function() {
                    "not_enough" === this.key && -1 !== ["ar"].indexOf(o.default.instance.currentLanguage) && (this.labelComponent.node.x += 4), "title_recipes" === this.key && -1 !== ["ar"].indexOf(o.default.instance.currentLanguage) && (this.labelComponent.node.x -= 11), "title_pause" === this.key && -1 !== ["ar"].indexOf(o.default.instance.currentLanguage) && (this.labelComponent.node.x -= 25), "cook_confirm" === this.key && -1 !== ["ar"].indexOf(o.default.instance.currentLanguage) && (this.labelComponent.node.x -= 8), "heal_confirm" === this.key && -1 !== ["ar"].indexOf(o.default.instance.currentLanguage) && (this.labelComponent.node.x += 4), "build_confirm" === this.key && -1 !== ["ar"].indexOf(o.default.instance.currentLanguage) && (this.labelComponent.node.x += 8), "pray_confirm" === this.key && -1 !== ["ar"].indexOf(o.default.instance.currentLanguage) && (this.labelComponent.node.x -= 2), "game_lose" === this.key && -1 !== ["ar"].indexOf(o.default.instance.currentLanguage) && (this.labelComponent.node.x -= 2)
                }, __decorate([r(cc.Label)], t.prototype, "labelComponent", void 0), __decorate([r(cc.String)], t.prototype, "key", void 0), __decorate([r(cc.Boolean)], t.prototype, "checkSwapFont", void 0), __decorate([a], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {
        "./LocalizationManager": "LocalizationManager"
    }],
    LocalizationManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d5b4bzN1u1HAIxKnK+uyMMZ", "LocalizationManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.FontLanguage = void 0;
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = function() {
                function e() {
                    this.font = null, this.languages = []
                }
                return __decorate([a(cc.Font)], e.prototype, "font", void 0), __decorate([a([cc.String])], e.prototype, "languages", void 0), __decorate([i("FontLanguage")], e)
            }();
        n.FontLanguage = r;
        var s = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.defaultLanguage = "en", t.path = "localization/", t.fontLanguages = [], t.localeAssetCache = {}, t.localizationItems = [], t.currentLanguage = "en", t.localizationData = null, t.localizationImageData = null, n._instance = t, cc.game.addPersistRootNode(t), window.localizationCode ? t.currentLanguage = window.localizationCode : t.currentLanguage = t.defaultLanguage, t
            }
            var n;
            return __extends(t, e), n = t, Object.defineProperty(t, "instance", {
                get: function() {
                    return this._instance || (this._instance = new n), this._instance
                },
                enumerable: !1,
                configurable: !0
            }), t.init = function() {
                return n.instance
            }, t.prototype.setFontLanguage = function(e) {
                void 0 === e && (e = []), this.fontLanguages = e
            }, t.prototype.loadLocalizationJson = function() {
                this.emit(n.KEY_ON_INIT), cc.loader.load(this.path + "localization.json", this.onCompletedLoadLocalization.bind(this)), cc.loader.load(this.path + "localizationImage.json", this.onCompletedLoadLocalizationImage.bind(this))
            }, t.prototype.onCompletedLoadLocalization = function(e, t) {
                e ? console.error(e) : (t instanceof cc.JsonAsset ? this.localizationData = t.json : this.localizationData = t, this.checkCompletedLoad())
            }, t.prototype.onCompletedLoadLocalizationImage = function(e, t) {
                e ? console.error(e) : (t instanceof cc.JsonAsset ? this.localizationImageData = t.json : this.localizationImageData = t, this.checkCompletedLoad())
            }, t.prototype.checkCompletedLoad = function() {
                null !== this.localizationData && null !== this.localizationImageData && (this.emit(n.KEY_ON_DATA_LOADED), this.changeLocale())
            }, t.prototype.changeLanguage = function(e) {
                this.currentLanguage = e, null !== this.localizationData && null !== this.localizationImageData && this.changeLocale()
            }, t.prototype.changeLocale = function() {
                this.localeAssetCache = {}, this.imagesLoaded = 0, this.localizationImageData.keys.length > 0 ? this.preloadAssets() : this.checkCompletedLoadAssets()
            }, t.prototype.preloadAssets = function() {
                if (this.localizationImageData)
                    for (var e = 0; e < this.localizationImageData.keys.length; e++) this.loadLocalizationImage(this.localizationImageData.keys[e])
            }, t.prototype.loadLocalizationImage = function(e) {
                this.localeAssetCache[e] || cc.loader.load(this.path + "images/" + this.currentLanguage + "/" + e + ".png", this.onLoadedLocalizationImage.bind(this, e))
            }, t.prototype.onLoadedLocalizationImage = function(e, t, n) {
                if (t) console.error(t);
                else {
                    var o = this.transformSpriteFrame(n);
                    this.localeAssetCache[e] = o, this.imagesLoaded++, this.checkCompletedLoadAssets()
                }
            }, t.prototype.checkCompletedLoadAssets = function() {
                this.imagesLoaded >= this.localizationImageData.keys.length && (this.updateAllItems(), this.emit(n.KEY_ON_CHANGE_LANGUAGE))
            }, t.prototype.transformSpriteFrame = function(e) {
                return e ? (e instanceof HTMLImageElement ? (t = new cc.Texture2D).initWithElement(e) : t = e, new cc.SpriteFrame(t)) : null;
                var t
            }, t.prototype.updateAllItems = function() {
                this.localizationItems.forEach(this.updateItem.bind(this))
            }, t.prototype.processString = function(e) {
                return "ar" === this.currentLanguage ? "\u202e" + e + "\u202c" : e
            }, t.prototype.updateItem = function(e) {
                if (e.target instanceof cc.Sprite) {
                    var t = this.localeAssetCache[e.key];
                    e.target.spriteFrame = t
                } else if (this.localizationData && this.localizationData[e.key]) {
                    var n = this.localizationData[e.key][this.currentLanguage];
                    e.target.string = this.processString(n)
                } else e.target.string = e.key
            }, t.prototype.subscribeItem = function(e) {
                -1 === this.localizationItems.indexOf(e) && (this.localizationItems.push(e), this.updateItem(e))
            }, t.prototype.unsubscribeItem = function(e) {
                var t = this.localizationItems.indexOf(e);
                t >= 0 && this.localizationItems.splice(t, 1)
            }, t.prototype.getFont = function() {
                for (var e = 0; e < this.fontLanguages.length; ++e) {
                    var t = this.fontLanguages[e];
                    if (-1 !== t.languages.indexOf(this.currentLanguage)) return t.font
                }
                return null
            }, t.prototype.getLocalizationString = function(e) {
                return this.localizationData ? this.localizationData[e][this.currentLanguage] : e
            }, t.KEY_ON_INIT = "LocalizationManager_init", t.KEY_ON_DATA_LOADED = "LocalizationManager_loaded", t.KEY_ON_CHANGE_LANGUAGE = "LocalizationManager_change", t._instance = null, n = __decorate([i], t)
        }(cc.Node);
        n.default = s, cc._RF.pop()
    }, {}],
    LocalizationRichTextComponent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fcb31MVdAJMwKtuleQXeKyK", "LocalizationRichTextComponent"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./LocalizationManager"),
            i = cc._decorator,
            a = i.ccclass,
            r = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.labelComponent = null, t.key = "", t.checkSwapFont = !0, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "currentKey", {
                    get: function() {
                        return this.localizationItem.key
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.setKey = function(e, t) {
                    var n = this;
                    if (this.localizationItem) {
                        if (this.localizationItem.key = e, this.localizationManager.updateItem(this.localizationItem), t)
                            for (var o in t) this.labelComponent.string = this.labelComponent.string.replace(o, t[o]);
                        var i = this.labelComponent.node,
                            a = 3 * this.labelComponent.lineHeight;
                        if (i.height > a) {
                            var r = a / i.height;
                            i.scale = r, this.labelComponent.maxWidth = this.defaultMaxWidth / r
                        } else i.scale = 1, this.labelComponent.maxWidth = this.defaultMaxWidth
                    } else cc.director.once(cc.Director.EVENT_BEFORE_DRAW, function() {
                        n.setKey(e, t)
                    })
                }, t.prototype.onLoad = function() {
                    this.labelComponent || (this.labelComponent = this.node.getComponent(cc.RichText)), this.defaultMaxWidth = this.labelComponent.maxWidth, this.originalFont = this.labelComponent.font, this.localizationManager = o.default.instance, this.localizationItem = {
                        key: this.key,
                        target: this.labelComponent
                    }, this.swapFont()
                }, t.prototype.onEnable = function() {
                    this.localizationManager.subscribeItem(this.localizationItem), this.localizationManager.on(o.default.KEY_ON_CHANGE_LANGUAGE, this.swapFont, this)
                }, t.prototype.onDisable = function() {
                    this.localizationManager.unsubscribeItem(this.localizationItem), this.localizationManager.off(o.default.KEY_ON_CHANGE_LANGUAGE, this.swapFont, this)
                }, t.prototype.swapFont = function() {
                    var e;
                    (e = this.localizationManager.getFont()) && this.checkSwapFont ? this.labelComponent.font = e : this.labelComponent.font = this.originalFont
                }, __decorate([r(cc.RichText)], t.prototype, "labelComponent", void 0), __decorate([r(cc.String)], t.prototype, "key", void 0), __decorate([r(cc.Boolean)], t.prototype, "checkSwapFont", void 0), __decorate([a], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {
        "./LocalizationManager": "LocalizationManager"
    }],
    MainmenuController: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "da2ba6Kp3dCd5gtaBsezjvS", "MainmenuController"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../audios/AudioManager"),
            i = e("../audios/AudioConfig"),
            a = cc._decorator.ccclass,
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.start = function() {
                    o.default.instance.playMusic(i.HowlsKey.music_menu)
                }, t.prototype.goToGameplay = function() {
                    o.default.instance.playSfx(i.SFXKey.button_generic), cc.director.loadScene("gameplay")
                }, __decorate([a], t)
            }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager"
    }],
    Map: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b760aLs7fpLlbe/hMiSaFbD", "Map"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../config/InputConfig"),
            r = e("../../config/UIConfig"),
            s = e("../../gameplay/GameState"),
            c = e("../../managers/GameManager"),
            l = e("./PauseUI"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = u.menu,
            m = function() {
                function e() {
                    this.iconPosition = cc.v2(0, 0), this.miniIconPosition = cc.v2(0, 0)
                }
                return __decorate([d(cc.Vec2)], e.prototype, "iconPosition", void 0), __decorate([d(cc.Vec2)], e.prototype, "miniIconPosition", void 0), __decorate([p("MapRoomIconInfo")], e)
            }(),
            f = function() {
                function e() {
                    this.hw1_entrance = new m, this.hw2_gym = new m, this.hw3_stairs = new m, this.hw4_classroom = new m, this.hw5_artroom = new m, this.hw6_nurse = new m, this.hw7_roof = new m, this.hw8_stairs = new m, this.hw9_library = new m, this.classroom = new m, this.artroom = new m, this.rooftop = new m, this.nursing = new m, this.library_1 = new m, this.library_2 = new m
                }
                return __decorate([d(m)], e.prototype, "hw1_entrance", void 0), __decorate([d(m)], e.prototype, "hw2_gym", void 0), __decorate([d(m)], e.prototype, "hw3_stairs", void 0), __decorate([d(m)], e.prototype, "hw4_classroom", void 0), __decorate([d(m)], e.prototype, "hw5_artroom", void 0), __decorate([d(m)], e.prototype, "hw6_nurse", void 0), __decorate([d(m)], e.prototype, "hw7_roof", void 0), __decorate([d(m)], e.prototype, "hw8_stairs", void 0), __decorate([d(m)], e.prototype, "hw9_library", void 0), __decorate([d(m)], e.prototype, "classroom", void 0), __decorate([d(m)], e.prototype, "artroom", void 0), __decorate([d(m)], e.prototype, "rooftop", void 0), __decorate([d(m)], e.prototype, "nursing", void 0), __decorate([d(m)], e.prototype, "library_1", void 0), __decorate([d(m)], e.prototype, "library_2", void 0), __decorate([p("MapMapIconInfo")], e)
            }(),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.playerIcon = null, t.questIcon = null, t.iconInfo = new f, t
                }
                return __extends(t, e), t.prototype.show = function() {
                    this.node.active = !0, l.default.enabled = !1, c.default.instance.emit("gameplay-pause"), this.animation.play("IN_map"), this.animation.setCurrentTime(0);
                    var e = s.default.get(),
                        t = s.default.get().world.currentRoom.getName(),
                        n = e.ui.forcedQuestRoom || e.world.questRoom,
                        o = this.iconInfo[t],
                        i = this.iconInfo[n];
                    i ? (this.questIcon.active = !0, i === o ? (this.questIcon.x = i.miniIconPosition.x, this.questIcon.y = i.miniIconPosition.y, this.questIcon.scale = r.default.mapMiniQuestIconScale) : (this.questIcon.x = i.iconPosition.x, this.questIcon.y = i.iconPosition.y, -1 !== n.indexOf("hw") || "rooftop" === n ? this.questIcon.scale = r.default.mapHallQuestIconScale : this.questIcon.scale = r.default.mapRoomQuestIconScale)) : this.questIcon.active = !1
                }, t.prototype.hide = function() {
                    var e = this;
                    this.animation.play("OUT_map"), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        c.default.instance.emit("gameplay-resume"), l.default.enabled = !0, e.node.active = !1, e.node.emit("hid")
                    })
                }, t.prototype.onClose = function() {
                    var e = this.animation.currentClip;
                    e && this.animation.getAnimationState(e.name).isPlaying || this.hide(), i.default.instance.playSfx(o.SFXKey.button_back)
                }, t.prototype.onLoad = function() {
                    this.animation = this.getComponent(cc.Animation);
                    var e = s.default.get().world.currentRoom.getName(),
                        t = this.iconInfo[e];
                    t ? (this.playerIcon.active = !0, this.playerIcon.x = t.iconPosition.x, this.playerIcon.y = t.iconPosition.y, -1 !== e.indexOf("hw") || "rooftop" === e ? this.playerIcon.scale = r.default.mapHallPlayerIconScale : this.playerIcon.scale = r.default.mapRoomPlayerIconScale) : this.playerIcon.active = !1, this.node.active = !1
                }, t.prototype.onEnable = function() {
                    a.uiActions.map.on("triggered", this.onClose, this), a.uiActions.cancel.on("triggered", this.onClose, this)
                }, t.prototype.onDisable = function() {
                    a.uiActions.map.off("triggered", this.onClose, this), a.uiActions.cancel.off("triggered", this.onClose, this)
                }, __decorate([d(cc.Node)], t.prototype, "playerIcon", void 0), __decorate([d(cc.Node)], t.prototype, "questIcon", void 0), __decorate([d(f)], t.prototype, "iconInfo", void 0), __decorate([p, h("Gameplay Component/UI/Map")], t)
            }(cc.Component);
        n.default = y, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../config/InputConfig": "InputConfig",
        "../../config/UIConfig": "UIConfig",
        "../../gameplay/GameState": "GameState",
        "../../managers/GameManager": "GameManager",
        "./PauseUI": "PauseUI"
    }],
    MobileInput: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "70a69H169hLpLTgX6LqRTu4", "MobileInput"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../utilities/Utils"),
            i = cc._decorator,
            a = i.ccclass,
            r = i.menu,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    o.default.isMobile() || this.node.destroy()
                }, __decorate([a, r("Gameplay Component/UI/MobileInput")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {
        "../../utilities/Utils": "Utils"
    }],
    ModeConfig: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ab267rE2NZKKoKEr+ZA9rzt", "ModeConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.postTutorialCampsSpawnTime = n.parallaxOffset = n.dmgShake = n.hitShake = n.gameOverConfig = n.safeRoom = n.houseRooms = n.survivalModeConfig = void 0, n.survivalModeConfig = {
            timeOfArrival: 20,
            eatingTime: 5,
            enemiesWave: [{
                time: 3,
                count: 1
            }, {
                time: 10,
                count: 2
            }, {
                time: 15,
                count: 3
            }]
        }, n.gameOverConfig = {
            tictactoeTwoStarsMatches: 2,
            tictactoeThreeStarsMatches: 3
        }, n.houseRooms = {
            backyard: ["shed", "living_room"],
            shed: ["backyard"],
            kitchen: ["living_room"],
            living_room: ["backyard", "kitchen", "parentsroom", "hallway"],
            parentsroom: ["living_room"],
            hallway: ["living_room", "kidsroom", "attic", "bathroom"],
            kidsroom: ["hallway"],
            attic: ["hallway"],
            bathroom: ["hallway"]
        }, n.hitShake = {
            minMove: 3,
            maxMove: 6,
            singleShakeTime: .105,
            totalTime: .16
        }, n.dmgShake = {
            minMove: 40,
            maxMove: 80,
            singleShakeTime: .016,
            totalTime: .25
        }, n.parallaxOffset = 50, n.postTutorialCampsSpawnTime = 1, n.safeRoom = "backyard", cc._RF.pop()
    }, {}],
    MultiTextTutorialPanel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d1682em/LNE1YSGw+TNMFoD", "MultiTextTutorialPanel"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../audios/AudioConfig"),
            i = e("../../../audios/AudioManager"),
            a = e("../../../localization/LocalizationLabelComponent"),
            r = e("./TutorialPanel"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.label = null, t.texts = [], t.currentText = 0, t
                }
                return __extends(t, e), t.prototype.show = function() {
                    e.prototype.show.call(this), this.texts[this.currentText] && (this.label.setKey(this.texts[this.currentText]), ++this.currentText)
                }, t.prototype.onOk = function() {
                    var e;
                    "LOOP_button" === (null === (e = this.okButton.currentClip) || void 0 === e ? void 0 : e.name) && (this.texts[this.currentText] ? (this.label.setKey(this.texts[this.currentText]), ++this.currentText) : this.hide(), i.default.instance.playSfx(o.SFXKey.button_general))
                }, __decorate([l(a.default)], t.prototype, "label", void 0), __decorate([l([cc.String])], t.prototype, "texts", void 0), __decorate([c], t)
            }(r.default);
        n.default = u, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager",
        "../../../localization/LocalizationLabelComponent": "LocalizationLabelComponent",
        "./TutorialPanel": "TutorialPanel"
    }],
    NPC: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bcde0Mi6qFOdJzBLOGIKgzU", "NPC"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.getNPCResourceID = n.NPCType = void 0;
        var o, i = e("../../common/Resources"),
            a = e("../GameState"),
            r = e("./InteractiveEntity"),
            s = e("../../managers/InteractBallonManager"),
            c = e("../../config/GameConfig"),
            l = e("../inventory/components/InventoryActions"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = u.menu;
        (function(e) {
            e[e.Penny = 0] = "Penny", e[e.Tobias = 1] = "Tobias", e[e.Bobert = 2] = "Bobert", e[e.Alan = 3] = "Alan", e[e.Mowdown = 4] = "Mowdown"
        })(o = n.NPCType || (n.NPCType = {})), n.getNPCResourceID = function(e) {
            return i.ResourceID.PennyPrefab + e
        };
        var m = cc.Enum(o),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.type = o.Penny, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "info", {
                    get: function() {
                        return a.default.get().npc[this.type]
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "balloonFrame", {
                    get: function() {
                        return this.info.request ? s.default.itemTypeToFrame(this.info.request) : s.BalloonFrame.NegationDown
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.balloonFrameFromChar = function() {
                    return this.info.request && a.default.get().player.inventory.getItemsByType(this.info.request).length > 0 ? s.default.itemTypeToFrame(this.info.request) : s.BalloonFrame.PointingDown
                }, t.prototype.playAnimation = function(e) {
                    this.animation.play(e)
                }, t.prototype.isAnimationClipLooped = function(e) {
                    var t = this.animation.getClips().find(function(t) {
                        return t.name === e
                    });
                    return !!t && t.wrapMode === cc.WrapMode.Loop
                }, t.prototype.getAnimationCurrentClipName = function() {
                    var e;
                    return null === (e = this.animation.currentClip) || void 0 === e ? void 0 : e.name
                }, t.prototype.doAction = function() {
                    var e = this;
                    this.node.emit("action-done");
                    var t = a.default.get();
                    return this.canPerformAction() ? (t.player.inventory.removeItemsByType(this.info.request, 1), t.player.character.getComponent(l.default).syncInventory(), this.info.request = null, this.node.getChildByName("marker") && (this.node.getChildByName("marker").opacity = 0), this.node.emit("request-fulfilled"), !0) : (this.unscheduleAllCallbacks(), this.showBalloon(), t.player.character.hideBalloon(), this.scheduleOnce(function() {
                        return e.hideBalloon()
                    }, c.bubbleDuration), this.balloonFrame !== s.BalloonFrame.NegationDown)
                }, t.prototype.canPerformAction = function() {
                    return a.default.get().player.inventory.getItemsByType(this.info.request).length > 0
                }, t.prototype.onResume = function() {
                    e.prototype.onResume.call(this), this.animation.resume(), this.node.resumeAllActions()
                }, t.prototype.onPause = function() {
                    e.prototype.onPause.call(this), this.animation.pause(), this.node.pauseAllActions()
                }, t.prototype.onLoad = function() {
                    var t = this;
                    e.prototype.onLoad.call(this), this.setActive(!0), this.animation = this.getComponent(cc.Animation), this.animation.on(cc.Animation.EventType.FINISHED, function() {
                        t.node.emit("animation-finished")
                    });
                    var n = this.info.idleClipName;
                    n && this.playAnimation(n), this.info.scaleX && (this.node.scaleX = Math.abs(this.node.scaleX) * this.info.scaleX), this.info.instance = this
                }, t.prototype.onDestroy = function() {
                    e.prototype.onDestroy.call(this), a.default.get().npc[this.type].instance = void 0
                }, __decorate([d({
                    type: m
                })], t.prototype, "type", void 0), __decorate([p, h("Gameplay Component/Interactive/NPC")], t)
            }(r.default);
        n.default = f, cc._RF.pop()
    }, {
        "../../common/Resources": "Resources",
        "../../config/GameConfig": "GameConfig",
        "../../managers/InteractBallonManager": "InteractBallonManager",
        "../GameState": "GameState",
        "../inventory/components/InventoryActions": "InventoryActions",
        "./InteractiveEntity": "InteractiveEntity"
    }],
    NoteProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e8c9e5JshJMeZiKTJs0M6XN", "NoteProp"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../common/Resources"),
            i = e("../../config/GameConfig"),
            a = e("../../managers/InteractBallonManager"),
            r = e("../GameState"),
            s = e("../inventory/Item"),
            c = e("./InteractiveProp"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = l.menu,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.request = s.ItemType.None, t
                }
                return __extends(t, e), t.prototype.doAction = function() {
                    var e = this;
                    this.node.emit("action-done", this);
                    var t = r.default.get();
                    return this.info && this.info.active ? (t.player.character.node.emit("minigame-started", o.ResourceID.NoteMinigame, this.name, function() {
                        e.info.active = !1, e.setActive(!1), e.animation.play(e.clip.name), e.animation.on(cc.Animation.EventType.FINISHED, e.performAction, e), cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, e.performAction, e)
                    }), !0) : (this.hasOwnBallooon && (this.unscheduleAllCallbacks(), this.showBalloon(), this.scheduleOnce(function() {
                        return e.hideBalloon()
                    }, i.bubbleDuration)), this.balloonFrame !== a.BalloonFrame.NegationDown && this.balloonFrame !== a.BalloonFrame.NegationRight && this.balloonFrame !== a.BalloonFrame.NegationUp)
                }, t.prototype.performAction = function() {
                    this.animation.off(cc.Animation.EventType.FINISHED, this.performAction, this), cc.director.off(cc.Director.EVENT_BEFORE_SCENE_LOADING, this.performAction, this), this.clip && this.animation.setCurrentTime(this.clip.duration), this.onRequestFulfilled(), this.node.emit("minigame-done", this)
                }, __decorate([p({
                    readonly: !0,
                    override: !0
                })], t.prototype, "request", void 0), __decorate([u, d("Gameplay Component/Interactive/Note")], t)
            }(c.InteractiveProp);
        n.default = h, cc._RF.pop()
    }, {
        "../../common/Resources": "Resources",
        "../../config/GameConfig": "GameConfig",
        "../../managers/InteractBallonManager": "InteractBallonManager",
        "../GameState": "GameState",
        "../inventory/Item": "Item",
        "./InteractiveProp": "InteractiveProp"
    }],
    PCScreenFrameUpdater: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bf394/wxWhNTJK2A/4andI0", "PCScreenFrameUpdater"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../EnvironmentProp"),
            i = e("../GameState"),
            a = e("../WorldInfo"),
            r = cc._decorator,
            s = r.ccclass,
            c = r.property,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.screen = null, t.loginFrame = null, t.terminalFrame = null, t.videoFrame = null, t.brokenScreen = null, t
                }
                return __extends(t, e), t.prototype.updateScreenFrame = function() {
                    var e = i.default.get().world.environmentFlags;
                    e & a.EnvironmentFlags.ComputerHacked ? (this.screen.spriteFrame = this.videoFrame, this.screen.node.opacity = 255) : e & a.EnvironmentFlags.ComputerFixed ? (this.screen.spriteFrame = this.loginFrame, this.screen.node.opacity = 255) : this.screen.node.opacity = 0, this.brokenScreen.updateProp()
                }, t.prototype.setVideoScreenFrame = function() {
                    this.screen.spriteFrame = this.videoFrame
                }, t.prototype.onLoad = function() {
                    this.node.on("request-fulfilled", this.updateScreenFrame, this), cc.find("video_hint_sensor", this.node).on("request-fulfilled", this.setVideoScreenFrame, this), this.updateScreenFrame()
                }, __decorate([c(cc.Sprite)], t.prototype, "screen", void 0), __decorate([c(cc.SpriteFrame)], t.prototype, "loginFrame", void 0), __decorate([c(cc.SpriteFrame)], t.prototype, "terminalFrame", void 0), __decorate([c(cc.SpriteFrame)], t.prototype, "videoFrame", void 0), __decorate([c(o.default)], t.prototype, "brokenScreen", void 0), __decorate([s], t)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../EnvironmentProp": "EnvironmentProp",
        "../GameState": "GameState",
        "../WorldInfo": "WorldInfo"
    }],
    PCVideoHintEventPanel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6fd77syNt1JPqpBIwkWrQwV", "PCVideoHintEventPanel"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../audios/AudioConfig"),
            i = e("../../../audios/AudioManager"),
            a = e("../../../config/InputConfig"),
            r = e("./Panel"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.closeButton = null, t.interactive = !1, t
                }
                return __extends(t, e), t.prototype.show = function() {
                    var t = this;
                    e.prototype.show.call(this), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        a.uiActions.accept.on("triggered", t.hide, t)
                    }), this.closeButton.play("IN_button"), this.closeButton.setCurrentTime(0), this.closeButton.once(cc.Animation.EventType.FINISHED, function() {
                        t.interactive = !0
                    })
                }, t.prototype.hide = function() {
                    e.prototype.hide.call(this), this.closeButton.play("OUT_button"), this.interactive = !1, a.uiActions.accept.off("triggered", this.hide, this)
                }, t.prototype.onClose = function() {
                    this.interactive && (this.hide(), i.default.instance.playSfx(o.SFXKey.button_back))
                }, __decorate([l(cc.Animation)], t.prototype, "closeButton", void 0), __decorate([c], t)
            }(r.default);
        n.default = u, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager",
        "../../../config/InputConfig": "InputConfig",
        "./Panel": "Panel"
    }],
    PadlockProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cbe884u8M5AB5PYvrBAnAHA", "PadlockProp"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../common/Resources"),
            i = e("../../config/GameConfig"),
            a = e("../../managers/InteractBallonManager"),
            r = e("../GameState"),
            s = e("../inventory/Item"),
            c = e("./InteractiveProp"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = l.menu,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.request = s.ItemType.Lockpick, t
                }
                return __extends(t, e), t.prototype.doAction = function() {
                    var e = this;
                    this.node.emit("action-done", this);
                    var t = r.default.get();
                    return this.info && t.player.inventory.getItemsByType(this.info.request).length > 0 ? (t.player.character.node.emit("minigame-started", o.ResourceID.PadlockMinigame, this.name, function() {
                        e.info.active = !1, e.setActive(!1), e.animation.play(e.clip.name), e.animation.on(cc.Animation.EventType.FINISHED, e.performAction, e), cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, e.performAction, e), e.node.emit("fulfilling-request-started", e)
                    }), !0) : (this.hasOwnBallooon ? (this.unscheduleAllCallbacks(), this.showBalloon(), this.scheduleOnce(function() {
                        return e.hideBalloon()
                    }, i.bubbleDuration)) : t.player.character.showBalloon(a.default.itemTypeToFrame(this.request)), this.balloonFrame !== a.BalloonFrame.NegationDown && this.balloonFrame !== a.BalloonFrame.NegationRight && this.balloonFrame !== a.BalloonFrame.NegationUp)
                }, t.prototype.performAction = function() {
                    this.animation.off(cc.Animation.EventType.FINISHED, this.performAction, this), cc.director.off(cc.Director.EVENT_BEFORE_SCENE_LOADING, this.performAction, this), this.clip && this.animation.setCurrentTime(this.clip.duration), this.onRequestFulfilled(), this.node.emit("minigame-done", this)
                }, __decorate([p({
                    readonly: !0,
                    override: !0
                })], t.prototype, "request", void 0), __decorate([u, d("Gameplay Component/Interactive/Padlock")], t)
            }(c.InteractiveProp);
        n.default = h, cc._RF.pop()
    }, {
        "../../common/Resources": "Resources",
        "../../config/GameConfig": "GameConfig",
        "../../managers/InteractBallonManager": "InteractBallonManager",
        "../GameState": "GameState",
        "../inventory/Item": "Item",
        "./InteractiveProp": "InteractiveProp"
    }],
    Padlock: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a9f44C0DMxLhZlgjj+vmCBf", "Padlock"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../config/GameConfig"),
            r = e("../../config/InputConfig"),
            s = e("../../utilities/Enumerators"),
            c = e("../../utilities/Utils"),
            l = e("./BaseMinigame"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.pinHole = null, t.inputNode = null, t.closeButtonAnim = null, t
                }
                return __extends(t, e), t.prototype.show = function(t) {
                    var n = this;
                    e.prototype.show.call(this, t);
                    var o = a.padlockConfig.halfDistance,
                        i = a.padlockConfig.locks[t].pinHoleWidth,
                        u = .5 * i,
                        p = o - i,
                        d = c.default.randomRange(-p, p);
                    0 === d && (d = 1), this.pinHole.width = i, this.pinHole.x = d + u * Math.sign(d), this.closeButtonAnim.play("IN_button"), this.animation.play("IN_lockpick"), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        n.inputFlags = l.MinigameInput.AllEnabled;
                        var e = a.padlockConfig.locks[t].time,
                            i = 2 * o,
                            r = n.pinHole.x + o,
                            c = o - u,
                            p = (i - r) / i * e;
                        n.tween = cc.tween(n.pinHole).to(p, {
                            x: c
                        }).repeatForever(cc.tween(n.pinHole).call(function() {
                            n.direction = s.Direction.Left
                        }).to(e, {
                            x: -c
                        }).call(function() {
                            n.direction = s.Direction.Right
                        }).to(e, {
                            x: c
                        })), n.tween.start(), n.direction = s.Direction.Right, n.timeHalved = .5 * e
                    }), r.uiActions.accept.on("triggered", this.onInput, this), r.uiActions.cancel.on("triggered", this.onClose, this)
                }, t.prototype.hide = function() {
                    e.prototype.hide.call(this), this.tween && (this.tween.stop(), this.tween = null), this.closeButtonAnim.play("OUT_button"), this.animation.play("OUT_lockpick"), this.animation.once(cc.Animation.EventType.FINISHED, this.onHid, this), r.uiActions.accept.off("triggered", this.onInput, this), r.uiActions.cancel.off("triggered", this.onClose, this)
                }, t.prototype.onClose = function() {
                    (this.inputFlags & l.MinigameInput.Popup) !== l.MinigameInput.Disabled && (this.hide(), i.default.instance.playSfx(o.SFXKey.button_back))
                }, t.prototype.playLockPickAnimation = function() {
                    var e = this;
                    this.animation.play("PLAY_lockpick"), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.hide(), e.node.once("hid", function() {
                            e.node.emit("done")
                        })
                    }), i.default.instance.playSfx(o.SFXKey.padlock_open1), this.animation.once("sfx", function() {
                        i.default.instance.playSfx(o.SFXKey.padlock_open2)
                    })
                }, t.prototype.stopPinHole = function() {
                    this.tween.stop(), this.tween = null
                }, t.prototype.onInput = function() {
                    var e = this;
                    if ((this.inputFlags & l.MinigameInput.Game) !== l.MinigameInput.Disabled) {
                        var t = a.padlockConfig.bonusThreshold,
                            n = Math.max(0, this.pinHole.width - 54) + t,
                            r = this.direction === s.Direction.Right ? -1 : 1,
                            c = n * this.timeHalved * .55 / a.padlockConfig.halfDistance + .1,
                            u = this.pinHole.x * this.timeHalved / a.padlockConfig.halfDistance * r;
                        u < 0 && (u += this.timeHalved), Math.abs(this.pinHole.x) <= n || u < c ? (u > 0 && u < c ? this.scheduleOnce(function() {
                            e.stopPinHole()
                        }, u) : this.stopPinHole(), this.playLockPickAnimation()) : (this.animation.play("PLAY_lockpick_wrong"), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                            e.inputFlags |= l.MinigameInput.Game
                        }), i.default.instance.playSfx(o.SFXKey.padlock_miss)), this.inputFlags &= ~l.MinigameInput.Game
                    }
                }, t.prototype.onLoad = function() {
                    this.animation = this.getComponent(cc.Animation), this.inputNode.on(cc.Node.EventType.TOUCH_START, this.onInput, this), e.prototype.onLoad.call(this)
                }, __decorate([d(cc.Node)], t.prototype, "pinHole", void 0), __decorate([d(cc.Node)], t.prototype, "inputNode", void 0), __decorate([d(cc.Animation)], t.prototype, "closeButtonAnim", void 0), __decorate([p], t)
            }(l.default);
        n.default = h, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../config/GameConfig": "GameConfig",
        "../../config/InputConfig": "InputConfig",
        "../../utilities/Enumerators": "Enumerators",
        "../../utilities/Utils": "Utils",
        "./BaseMinigame": "BaseMinigame"
    }],
    PaintCanProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f767djCzxZG6awy8nKIr7GX", "PaintCanProp"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../GameState"),
            i = e("../inventory/Item"),
            a = e("../WorldInfo"),
            r = e("./InteractiveProp"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = s.menu,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.request = i.ItemType.Brush, t
                }
                return __extends(t, e), t.prototype.setActive = function(t) {
                    e.prototype.setActive.call(this, t), t && (this.info.request = i.ItemType.Brush)
                }, t.prototype.canPerformAction = function() {
                    return this.getBrushFromInventroy() !== i.ItemType.None
                }, t.prototype.onRequestFulfilled = function() {
                    var e = o.default.get();
                    if (this.dropEffect) {
                        var t = this.clip.events.find(function(e) {
                            return "end" === e.func
                        });
                        if (t) {
                            var n = cc.find(t.params[0], this.node),
                                a = n.height * n.anchorY,
                                r = n.convertToWorldSpaceAR(cc.v2(0, -a)),
                                s = e.world.currentRoom.node.convertToNodeSpaceAR(r),
                                c = {
                                    instance: void 0,
                                    item: new i.default(this.dropEffect.drop),
                                    position: s
                                };
                            e.addItemToRoom(cc.director.getScene().name, c), e.world.currentRoom.spawnItem(c), n.active = !1
                        }
                    } else console.warn("Paint cans can only have the drop effect")
                }, t.prototype.getBrushFromInventroy = function() {
                    return o.default.get().player.inventory.getItemsByType(i.ItemType.Brush).length > 0 ? (this.info.request = i.ItemType.Brush, i.ItemType.Brush) : (this.info.request = i.ItemType.Brush, i.ItemType.None)
                }, t.prototype.onLoad = function() {
                    if (e.prototype.onLoad.call(this), this.animation) {
                        if ((o.default.get().world.environmentFlags & a.EnvironmentFlags.PosterPainted) === a.EnvironmentFlags.PosterPainted && (this.animation.setCurrentTime(0), this.animation.stop(), this.dropEffect)) {
                            var t = this.clip.events.find(function(e) {
                                return "end" === e.func
                            });
                            t && (cc.find(t.params[0], this.node).active = !1)
                        }
                        this.animation.playOnLoad = !1
                    }
                }, __decorate([l({
                    readonly: !0,
                    override: !0
                })], t.prototype, "request", void 0), __decorate([c, u("Gameplay Component/Interactive/PaintCan")], t)
            }(r.InteractiveProp);
        n.default = p, cc._RF.pop()
    }, {
        "../GameState": "GameState",
        "../WorldInfo": "WorldInfo",
        "../inventory/Item": "Item",
        "./InteractiveProp": "InteractiveProp"
    }],
    Panel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "85473IYP9hK0b7dIgQAS+Mm", "Panel"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../managers/GameManager"),
            i = e("../PauseUI"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.show = function() {
                    i.default.enabled = !1, o.default.instance.emit("gameplay-pause"), this.animation.play(this.animation.getClips()[0].name), this.animation.setCurrentTime(0)
                }, t.prototype.hide = function() {
                    var e = this;
                    this.animation.play(this.animation.getClips()[1].name), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        o.default.instance.emit("gameplay-resume"), i.default.enabled = !0, e.node.emit("hid"), e.node.destroy()
                    })
                }, t.prototype.onLoad = function() {
                    this.animation = this.getComponent(cc.Animation), this.show()
                }, t
            }(cc.Component);
        n.default = a, cc._RF.pop()
    }, {
        "../../../managers/GameManager": "GameManager",
        "../PauseUI": "PauseUI"
    }],
    Parallax: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "66801nYwZ1DRJeb4h2K+xgn", "Parallax"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = o.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.camera = null, t.parallaxOffset = 50, t
                }
                return __extends(t, e), t.prototype.lateUpdate = function() {
                    var e = cc.view.getViewportRect().width / cc.view.getScaleX() / this.camera.zoomRatio,
                        t = .5 * this.node.parent.width - .5 * e;
                    this.camera.node.x > 0 ? this.node.x = cc.misc.lerp(0, this.parallaxOffset, this.camera.node.x / t) : this.camera.node.x < 0 ? this.node.x = cc.misc.lerp(0, -this.parallaxOffset, this.camera.node.x / -t) : this.node.x = 0
                }, __decorate([a(cc.Camera)], t.prototype, "camera", void 0), __decorate([a], t.prototype, "parallaxOffset", void 0), __decorate([i, r("Gameplay Component/Parallax")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    PassThroughBehaviour: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "34735D0bfJENZaOQ6NC8v4z", "PassThroughBehaviour"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = o.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.animation = null, t
                }
                return __extends(t, e), t.prototype.onBeginContact = function(e, t, n) {
                    if (1 === t.tag && 1 === n.tag) {
                        var o = this.animation.getClips(),
                            i = o[Math.floor(Math.random() * (o.length - 1))].name;
                        this.animation.play(i)
                    }
                }, __decorate([a(cc.Animation)], t.prototype, "animation", void 0), __decorate([i, r("Gameplay Component/Props/PassThroughBehaviour")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    PausableComponent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "109b9k8e7RLsIVGIYmaBi3q", "PausableComponent"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = cc._decorator.ccclass;
        (function(e) {
            e[e.NotPaused = 0] = "NotPaused", e[e.Paused = 1] = "Paused", e[e.Resuming = 2] = "Resuming", e[e.Pausing = 3] = "Pausing", e[e.WasDisabled = 0] = "WasDisabled", e[e.WasEnabled = 4] = "WasEnabled"
        })(o || (o = {}));
        var a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.pausableFlags = 0, t
            }
            return __extends(t, e), Object.defineProperty(t.prototype, "paused", {
                get: function() {
                    var e = this.pausableFlags & o.WasEnabled;
                    return this.pausableFlags === (e | o.Paused)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "pausing", {
                get: function() {
                    return 0 != (this.pausableFlags & o.Pausing)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "resuming", {
                get: function() {
                    return 0 != (this.pausableFlags & o.Resuming)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "resumed", {
                get: function() {
                    var e = this.pausableFlags & o.WasEnabled;
                    return this.pausableFlags === (e | o.NotPaused)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "enabled", {
                get: function() {
                    return Object.getOwnPropertyDescriptor(cc.Component.prototype, "enabled").get.call(this)
                },
                set: function(e) {
                    this.paused ? this.pausableFlags ^= (-~~e ^ this.pausableFlags) & o.WasEnabled : (this.pausableFlags ^= (-~~this.enabled ^ this.pausableFlags) & o.WasEnabled, Object.getOwnPropertyDescriptor(cc.Component.prototype, "enabled").set.call(this, e))
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.onLoad = function() {
                r.default.instance.on("gameplay-pause", this.onPause, this), r.default.instance.on("gameplay-resume", this.onResume, this)
            }, t.prototype.onDestroy = function() {
                r.default.instance.off("gameplay-pause", this.onPause, this), r.default.instance.off("gameplay-resume", this.onResume, this)
            }, t.prototype.onPause = function() {
                this.paused || (this.pausableFlags = this.pausableFlags & o.WasEnabled | o.Pausing, this.enabled = !1, this.pausableFlags = this.pausableFlags & o.WasEnabled | o.Paused, this.node.pauseAllActions())
            }, t.prototype.onResume = function() {
                if (!this.resumed) {
                    var e = this.pausableFlags & o.WasEnabled;
                    this.pausableFlags = e | o.Resuming, this.enabled = e > 0, this.pausableFlags = this.pausableFlags & o.WasEnabled | o.NotPaused, this.node.resumeAllActions()
                }
            }, __decorate([i], t)
        }(cc.Component);
        n.default = a;
        var r = e("../managers/GameManager");
        cc._RF.pop()
    }, {
        "../managers/GameManager": "GameManager"
    }],
    PauseUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5f27a7D6mlMtq50ylsERlXK", "PauseUI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../config/InputConfig"),
            r = e("../../managers/GameManager"),
            s = e("../HowToPopup"),
            c = cc._decorator,
            l = c.ccclass,
            u = c.property,
            p = c.menu,
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.animation = null, t.soundsBtnAnim = null, t
                }
                var n;
                return __extends(t, e), n = t, Object.defineProperty(t, "enabled", {
                    get: function() {
                        return 0 === this.disablerCounter
                    },
                    set: function(e) {
                        e ? this.disablerCounter > 0 && --this.disablerCounter : (++this.disablerCounter, this.current && this.current.node && this.current.node.active && (this.current.node.active = !1))
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t, "isUIActive", {
                    get: function() {
                        return this.current && this.current.node && this.current.node.active
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.forceEnable = function() {
                    this.disablerCounter = 0
                }, t.prototype.show = function() {
                    var e = this;
                    n.enabled && !this.node.active && (this.node.active = !0, this.interactive = !1, this.animation.play("IN_pause"), this.soundsBtnAnim.play("IN_button"), this.animation.off(cc.Animation.EventType.FINISHED), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.animation.play("LOOP_pause"), e.interactive = !0
                    }), i.default.instance.playSfx(o.SFXKey.popup_open))
                }, t.prototype.hide = function() {
                    var e = this;
                    this.interactive && (this.interactive = !1, this.animation.play("OUT_pause"), this.soundsBtnAnim.play("OUT_button"), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.node.emit("hid"), e.node.active = !1
                    }), i.default.instance.playSfx(o.SFXKey.button_general), i.default.instance.playSfx(o.SFXKey.popup_close))
                }, t.prototype.onResume = function() {
                    this.interactive && (r.default.instance.emit("gameplay-resume"), i.default.instance.playSfx(o.SFXKey.button_general))
                }, t.prototype.onQuit = function() {
                    this.interactive && (this.node.emit("quitted"), i.default.instance.playSfx(o.SFXKey.button_general), i.default.instance.stopMusic())
                }, t.prototype.onHowTo = function() {
                    this.interactive && (this.enabled = !1, cc.find("pause_container", this.node).active = !1, this.soundsBtnAnim.node.active = !1, this.howToPopup.show(), i.default.instance.playSfx(o.SFXKey.button_general))
                }, t.prototype.onLoad = function() {
                    var e = this;
                    n.current = this, this.animation = this.getComponent(cc.Animation), this.node.active = !1, r.default.instance.on("gameplay-pause", this.show, this), r.default.instance.on("gameplay-resume", this.hide, this), this.howToPopup.node.active = !0, this.howToPopup.node.on("hid", function() {
                        cc.find("pause_container", e.node).active = !0, e.soundsBtnAnim.node.active = !0, e.enabled = !0, i.default.instance.playSfx(o.SFXKey.popup_open)
                    }), this.node.zIndex = 255
                }, t.prototype.onEnable = function() {
                    a.uiActions.pause.on("triggered", this.onResume, this)
                }, t.prototype.onDisable = function() {
                    a.uiActions.pause.off("triggered", this.onResume, this)
                }, t.prototype.onDestroy = function() {
                    r.default.instance.off("gameplay-pause", this.show, this), r.default.instance.off("gameplay-resume", this.hide, this)
                }, t.current = null, t.disablerCounter = 0, __decorate([u(cc.Animation)], t.prototype, "soundsBtnAnim", void 0), __decorate([u(s.default)], t.prototype, "howToPopup", void 0), n = __decorate([l, p("Gameplay Component/UI/Pause")], t)
            }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../config/InputConfig": "InputConfig",
        "../../managers/GameManager": "GameManager",
        "../HowToPopup": "HowToPopup"
    }],
    PlayerController: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ef8detOYrNJOafe4ibO8Os3", "PlayerController"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../common/input/InputSystem"),
            i = e("../../common/PausableComponent"),
            a = e("../../config/InputConfig"),
            r = e("../../gameplay/Character"),
            s = e("../../gameplay/GameState"),
            c = e("./InventoryController"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.menu,
            d = l.requireComponent,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.lastDirection = cc.v2(0, 0), t
                }
                return __extends(t, e), t.prototype.onMove = function(e) {
                    var t = e.getUserData();
                    this.lastDirection.x = 0 === t.x ? this.lastDirection.x : t.x, this.lastDirection.y = 0 === t.y ? this.lastDirection.y : t.y, this.character.move(t)
                }, t.prototype.onAction = function() {
                    this.character.doAction()
                }, t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this.character = this.getComponent(r.default), this.inventory = this.getComponent(c.default), s.default.get().player.controller = this, s.default.get().player.controlEnabled || (this.enabled = !1)
                }, t.prototype.start = function() {
                    a.playerActions.move.on("value-changed", this.onMove, this), a.playerActions.action.on("triggered", this.onAction, this), this.character.move(a.playerActions.move.value)
                }, t.prototype.onResume = function() {
                    e.prototype.onResume.call(this), this.clearInput()
                }, t.prototype.onPause = function() {
                    e.prototype.onPause.call(this)
                }, t.prototype.onEnable = function() {
                    this.inventory.enabled = !0, this.character.move(a.playerActions.move.value), this.character.showInteractionBallons = !0, o.default.registerActionMap(a.playerActions)
                }, t.prototype.onDisable = function() {
                    this.inventory.enabled = !1, this.character.move(cc.v2(0, 0)), s.default.get().player.hideBalloonWhenControlDisabled && (this.character.showInteractionBallons = !1), o.default.removeActionMap(a.playerActions)
                }, t.prototype.onDestroy = function() {
                    a.playerActions.move.off("value-changed", this.onMove, this), a.playerActions.action.off("triggered", this.onAction, this);
                    var e = s.default.get();
                    e.player.controller === this && (e.player.controller = void 0)
                }, t.prototype.clearInput = function() {
                    if (this.lastDirection) {
                        var e = [];
                        this.lastDirection.x > 0 ? e.push.apply(e, a.moveBindings.keyboard.right) : this.lastDirection.x < 0 && e.push.apply(e, a.moveBindings.keyboard.left), this.lastDirection.y > 0 ? e.push.apply(e, a.moveBindings.keyboard.up) : this.lastDirection.y < 0 && e.push.apply(e, a.moveBindings.keyboard.down), e.length > 0 && e.forEach(function(e) {
                            var t = new cc.Event.EventKeyboard(cc.SystemEvent.EventType.KEY_UP, !1);
                            t.keyCode = e, cc.systemEvent.emit(cc.SystemEvent.EventType.KEY_UP, t)
                        })
                    }
                }, __decorate([u, d(r.default), p("Controller Component/Player/PlayerController")], t)
            }(i.default);
        n.default = h, cc._RF.pop()
    }, {
        "../../common/PausableComponent": "PausableComponent",
        "../../common/input/InputSystem": "InputSystem",
        "../../config/InputConfig": "InputConfig",
        "../../gameplay/Character": "Character",
        "../../gameplay/GameState": "GameState",
        "./InventoryController": "InventoryController"
    }],
    PlayerInfo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fc85cVbJm9Jkb2tmZ70M/ob", "PlayerInfo"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./inventory/Inventory"),
            i = function() {
                function e() {
                    this.inventory = new o.default, this.inventory.size = 5, this.hideBalloonWhenControlDisabled = !0, this._controlEnabled = !0
                }
                return Object.defineProperty(e.prototype, "controlEnabled", {
                    get: function() {
                        return this._controlEnabled
                    },
                    set: function(e) {
                        this._controlEnabled = e, this.controller && this.controller.enabled !== e && (this.controller.enabled = e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.serialize = function() {
                    return {
                        room: cc.director.getScene().name,
                        position: this.character.node.position,
                        inventory: this.inventory.serialize()
                    }
                }, e
            }();
        n.default = i, cc._RF.pop()
    }, {
        "./inventory/Inventory": "Inventory"
    }],
    PlayerStatsConfig: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2074fR7C3NOgLz5SS9MpTFe", "PlayerStatsConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.starsObtained = n.playerStatsConfig = void 0, n.playerStatsConfig = {
            hungerDecreaseTime: 36,
            starvedDecreaseTime: 30,
            boredDecreaseTime: 30,
            funTime: 225
        }, n.starsObtained = {
            quantity: 3
        }, cc._RF.pop()
    }, {}],
    PooledEffectsManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "aeb70btRi1H05HD68/zKoJL", "PooledEffectsManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = o.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.damageEffectPrefab = null, t.damageEffects = [], t
                }
                var n;
                return __extends(t, e), n = t, t.prototype.onLoad = function() {
                    n.instance || (n.instance = this)
                }, __decorate([a(cc.Prefab)], t.prototype, "damageEffectPrefab", void 0), n = __decorate([i, r("Config Component/PooledEffectsManager")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    PostIt: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a231387B1JBgZypg8a1uSaL", "PostIt"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../config/GameConfig"),
            r = e("../../config/InputConfig"),
            s = e("./BaseMinigame"),
            c = cc._decorator,
            l = c.ccclass,
            u = c.property,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.puzzle = null, t.closeButtonAnim = null, t.okButtonAnim = null, t.okButtonNode = null, t.pieces = [], t.piecesInfo = [], t.currentPiece = null, t.inputPos = null, t.correctPosition = [], t.totalPositioned = 0, t
                }
                return __extends(t, e), t.prototype.show = function(t) {
                    var n = this;
                    e.prototype.show.call(this, t), this.piecesInfo = [], this.currentPiece = null, this.inputPos = null, this.totalPositioned = 0;
                    for (var o = 0; o < this.pieces.length; o++) {
                        var i = this.pieces[o];
                        this.piecesInfo[i.name] = {
                            correctPosition: this.correctPosition[i.name],
                            initialPosition: a.postItConfig.postIts[t].initialPositions[o],
                            positioned: !1
                        }, i.x = this.piecesInfo[i.name].initialPosition.x, i.y = this.piecesInfo[i.name].initialPosition.y
                    }
                    this.closeButtonAnim.play("IN_button"), this.animation.play("IN_note"), this.animation.setCurrentTime(0), this.animation.resume(), this.okButtonNode.active = !1, this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        n.inputFlags = s.MinigameInput.AllEnabled
                    })
                }, t.prototype.onTouchStart = function(e) {
                    if ((this.inputFlags & s.MinigameInput.Popup) !== s.MinigameInput.Disabled) {
                        e.stopPropagation();
                        var t = e.target;
                        t.setSiblingIndex(t.parent.childrenCount - 1), this.currentPiece = t, this.piecesInfo[t.name].positioned && (this.totalPositioned -= 1, this.piecesInfo[t.name].positioned = !1), i.default.instance.playSfx(o.SFXKey.tap_piece)
                    }
                }, t.prototype.onTouchEnd = function() {
                    if ((this.inputFlags & s.MinigameInput.Popup) !== s.MinigameInput.Disabled) {
                        var e = this.currentPiece;
                        e && this.piecesInfo[e.name] && this.releasePiece(e), this.currentPiece = null, this.inputPos = null, i.default.instance.playSfx(o.SFXKey.drop_piece)
                    }
                }, t.prototype.releasePiece = function(e) {
                    var t = cc.Vec2.distance(cc.v2(e.x, e.y), this.piecesInfo[e.name].correctPosition),
                        n = this.piecesInfo[e.name].initialPosition.x,
                        o = this.piecesInfo[e.name].initialPosition.y;
                    t <= a.postItConfig.minCorrectDistance && (n = this.piecesInfo[e.name].correctPosition.x, o = this.piecesInfo[e.name].correctPosition.y, this.piecesInfo[e.name].positioned = !0, this.totalPositioned += 1);
                    var i = cc.Vec2.distance(e.position, cc.v2(n, o));
                    cc.tween(e).to(i / 1e3, {
                        x: n,
                        y: o
                    }).start(), this.checkCompleted()
                }, t.prototype.onDrag = function(e) {
                    this.inputPos = e.getLocation(), this.currentPiece
                }, t.prototype.checkCompleted = function() {
                    var e = this;
                    this.totalPositioned < this.pieces.length || (this.inputFlags &= ~s.MinigameInput.Game, this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this), this.pieces.forEach(function(t) {
                        t.off(cc.Node.EventType.TOUCH_START, e.onTouchStart, e)
                    }), this.animation.play("PLAY_postit"), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.inputFlags = s.MinigameInput.AllEnabled, e.okButtonNode.active = !0, r.uiActions.accept.on("triggered", e.pressOk, e), r.uiActions.cancel.on("triggered", e.onClose, e)
                    }), i.default.instance.playSfx(o.SFXKey.jigsaw_completed))
                }, t.prototype.pressOk = function() {
                    var e = this;
                    this.inputFlags !== s.MinigameInput.Disabled && (this.animation.play("OUT_note_inv"), this.animation.once("OUT_button", function() {
                        e.closeButtonAnim.node.active = !1
                    }, this), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.node.once("hid", function() {
                            e.node.emit("done")
                        }), e.hide2()
                    }), this.inputFlags = s.MinigameInput.Disabled, r.uiActions.accept.off("triggered", this.pressOk, this), i.default.instance.playSfx(o.SFXKey.button_general))
                }, t.prototype.onClose = function() {
                    (this.inputFlags & s.MinigameInput.Game) !== s.MinigameInput.Disabled && (this.okButtonNode.active ? this.pressOk() : (this.hide(), i.default.instance.playSfx(o.SFXKey.button_back)))
                }, t.prototype.hide = function() {
                    e.prototype.hide.call(this), this.animation.play("OUT_note"), this.animation.once(cc.Animation.EventType.FINISHED, this.onHid, this), this.closeButtonAnim.play("OUT_button"), r.uiActions.cancel.off("triggered", this.onClose, this)
                }, t.prototype.hide2 = function() {
                    e.prototype.hide.call(this), this.onHid(), this.closeButtonAnim.play("OUT_button")
                }, t.prototype.onLoad = function() {
                    this.animation = this.getComponent(cc.Animation), e.prototype.onLoad.call(this), this.pieces = this.puzzle.children;
                    for (var t = 0; t < this.pieces.length; t++) {
                        var n = this.pieces[t];
                        this.correctPosition[n.name] = cc.v2(n.x, n.y), n.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
                    }
                    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this)
                }, t.prototype.update = function(e) {
                    if (this.currentPiece && this.inputPos) {
                        var t = this.node.convertToNodeSpaceAR(this.inputPos);
                        t.x, a.postItConfig.offset.x, t.y, a.postItConfig.offset.y;
                        var n = Math.abs(this.currentPiece.position.x - t.x),
                            o = Math.abs(this.currentPiece.position.y - t.y);
                        n > 10 && (this.currentPiece.position.x <= t.x ? (this.currentPiece.x += a.postItConfig.postItSpeed * e, n > a.postItConfig.maxPositionDifference && (this.currentPiece.x = t.x - a.postItConfig.maxPositionDifference)) : (this.currentPiece.x -= a.postItConfig.postItSpeed * e, n > a.postItConfig.maxPositionDifference && (this.currentPiece.x = t.x + a.postItConfig.maxPositionDifference))), o > 10 && (this.currentPiece.position.y <= t.y ? (this.currentPiece.y += a.postItConfig.postItSpeed * e, o > a.postItConfig.maxPositionDifference && (this.currentPiece.y = t.y - a.postItConfig.maxPositionDifference)) : (this.currentPiece.y -= a.postItConfig.postItSpeed * e, o > a.postItConfig.maxPositionDifference && (this.currentPiece.y = t.y + a.postItConfig.maxPositionDifference)))
                    }
                }, __decorate([u(cc.Node)], t.prototype, "puzzle", void 0), __decorate([u(cc.Animation)], t.prototype, "closeButtonAnim", void 0), __decorate([u(cc.Animation)], t.prototype, "okButtonAnim", void 0), __decorate([u(cc.Node)], t.prototype, "okButtonNode", void 0), __decorate([l], t)
            }(s.default);
        n.default = p, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../config/GameConfig": "GameConfig",
        "../../config/InputConfig": "InputConfig",
        "./BaseMinigame": "BaseMinigame"
    }],
    PropsConfig: [function(e, t) {
        "use strict";
        cc._RF.push(t, "808e1Q+p21KnprtF9b+zc1j", "PropsConfig"), cc._RF.pop()
    }, {}],
    QuestSystem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fb7b6x24o5CDrNMXyoIqe8W", "QuestSystem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../GameState"),
            i = e("../inventory/Item"),
            a = e("../interactive/NPC"),
            r = e("../WorldInfo"),
            s = e("./WaitListener"),
            c = e("../../common/Resources"),
            l = e("../interactive/Door"),
            u = e("../inventory/components/InventoryActions"),
            p = e("../../managers/DataManager"),
            d = e("../inventory/components/ItemComponent"),
            h = e("../../ui/gameplay/panels/EventPanel"),
            m = e("../../ui/gameplay/panels/HintEventPanel"),
            f = e("../../audios/AudioConfig"),
            y = e("../../audios/AudioManager"),
            g = e("../BaseEnvironmentProp"),
            v = {
                penny: a.NPCType.Penny,
                tobias: a.NPCType.Tobias,
                bobert: a.NPCType.Bobert,
                alan: a.NPCType.Alan,
                mowdown: a.NPCType.Mowdown
            },
            _ = {
                coin: i.ItemType.Coin,
                juice: i.ItemType.Juice,
                selfie_stick: i.ItemType.SelfieStick,
                gum: i.ItemType.Gum,
                gum_stick: i.ItemType.GumStick,
                headband: i.ItemType.Headband,
                lockpick: i.ItemType.Lockpick,
                chip: i.ItemType.Chip,
                eraser: i.ItemType.Eraser,
                screwdriver: i.ItemType.Screwdriver,
                brush: i.ItemType.Brush,
                red_brush: i.ItemType.RedBrush,
                blue_brush: i.ItemType.BlueBrush,
                green_brush: i.ItemType.GreenBrush,
                fire_extinguisher: i.ItemType.FireExtinguisher,
                hammer: i.ItemType.Hammer,
                screen: i.ItemType.Screen,
                blowgun: i.ItemType.Blowgun,
                note: i.ItemType.Note,
                glove: i.ItemType.Glove,
                broomstick: i.ItemType.Broomstick,
                reach_extender: i.ItemType.ReachExtender,
                padlock: i.ItemType.Padlock,
                painted_brush: i.ItemType.PaintedBrush
            },
            b = {
                gym_hall_panel_open: r.EnvironmentFlags.GymHallPanelOpen,
                gym_hall_panel_active: r.EnvironmentFlags.GymHallPanelActive,
                gym_hall_barrier_removed: r.EnvironmentFlags.GymHallBarrierRemoved,
                stairs_hall_panel_open: r.EnvironmentFlags.StairsHallPanelOpen,
                stairs_hall_panel_active: r.EnvironmentFlags.StairsHallPanelActive,
                stairs_hall_locker_open: r.EnvironmentFlags.StairsHallLockerOpen,
                stairs_hall_lights_on: r.EnvironmentFlags.StairsHallLightsOn,
                art_hall_vent_empty: r.EnvironmentFlags.ArtHallVentEmpty,
                art_hall_door_unlocked: r.EnvironmentFlags.ArtHallDoorUnlocked,
                art_hall_juice_bought: r.EnvironmentFlags.ArtHallJuiceBought,
                art_hall_locker_open: r.EnvironmentFlags.ArtHallLockerOpen,
                poster_red_painted: r.EnvironmentFlags.PosterRedPainted,
                poster_blue_painted: r.EnvironmentFlags.PosterBluePainted,
                poster_green_painted: r.EnvironmentFlags.PosterGreenPainted,
                roof_hall_locker_open: r.EnvironmentFlags.RoofHallLockerOpen,
                library_hall_door_unlocked: r.EnvironmentFlags.LibraryHallDoorUnlocked,
                library_hall_note_taken: r.EnvironmentFlags.LibraryHallNoteTaken,
                blackboard_number_written: r.EnvironmentFlags.BlackboardNumberWritten,
                broken_tv_screen: r.EnvironmentFlags.BrokenTVScreen,
                selfie_stick_taken: r.EnvironmentFlags.SelfieStickTaken,
                hammer_taken: r.EnvironmentFlags.HammerTaken,
                library_foamed: r.EnvironmentFlags.LibraryFoamed,
                blowgun_visible: r.EnvironmentFlags.BlowgunVisible,
                blowgun_taken: r.EnvironmentFlags.BlowgunTaken,
                fire_extinguisher_taken: r.EnvironmentFlags.FireExtinguisherTaken,
                computer_fixed: r.EnvironmentFlags.ComputerFixed,
                computer_hacked: r.EnvironmentFlags.ComputerHacked,
                cabinet_open: r.EnvironmentFlags.CabinetOpen,
                nurse_door_unlocked: r.EnvironmentFlags.NurseDoorUnlocked,
                broomstick_taken: r.EnvironmentFlags.BroomstickTaken,
                coin_taken: r.EnvironmentFlags.CoinTaken,
                gum_taken: r.EnvironmentFlags.GumTaken,
                clock_updated: r.EnvironmentFlags.ClockUpdated,
                poster_painted: r.EnvironmentFlags.PosterPainted
            },
            I = {
                default: c.ResourceID.EventPanel,
                fire_extinguisher: c.ResourceID.FireExtinguisherEventPanel,
                bell: c.ResourceID.BellEventPanel,
                hint: c.ResourceID.HintPanel,
                pc_video_hint: c.ResourceID.PCVideoHintPanel
            },
            A = {
                gumstick: h.EventImage.GumStick,
                using_eraser: h.EventImage.Blackboard,
                vent: h.EventImage.Vent,
                popping_alan: h.EventImage.Alan,
                pointer: h.EventImage.Pointer,
                headband: m.HintEventImage.Headband,
                blackboard_marks: m.HintEventImage.Blackboard,
                poster: m.HintEventImage.Poster,
                screen: m.HintEventImage.Screen
            },
            C = function() {
                function e() {}
                return e.init = function() {
                    var e = this;
                    cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {
                        e.compile(), e.fibers = {
                            0: {
                                id: 0,
                                ip: 0
                            }
                        }, cc.director.on(cc.Director.EVENT_AFTER_UPDATE, function() {
                            cc.director.emit("tick-quest")
                        }), cc.director.getPhysicsManager().on("before-step", function() {
                            cc.director.emit("tick-quest")
                        })
                    }), cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {
                        for (var t in e.fibers) {
                            var n = e.fibers[t];
                            n.waitListener instanceof s.WaitListener && (n.waitListener.hasListenBeenCalled = !1)
                        }
                        cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function() {
                            if (void 0 !== o.default.get().world.currentRoom)
                                for (var t in e.fibers) {
                                    var n = e.fibers[t];
                                    n.waitListener instanceof s.WaitListener && !n.waitListener.hasListenBeenCalled && n.waitListener.listen()
                                }
                        })
                    })
                }, e.start = function() {
                    for (var e in this.fibers) this.tick(this.fibers[e])
                }, e.tick = function(e) {
                    var t;
                    if (e || (e = this.fibers[0]), cc.director.getScheduler().enableForTarget(this), e.ip >= this.instructions.length) this.end(e);
                    else
                        do {
                            t = this.instructions[e.ip](e)
                        } while (t && e.ip < this.instructions.length)
                }, e.pause = function() {
                    cc.director.getScheduler().pauseTarget(this)
                }, e.resume = function() {
                    cc.director.getScheduler().resumeTarget(this)
                }, e.getFibersState = function() {
                    var e = [];
                    for (var t in this.fibers) {
                        var n = this.fibers[t],
                            o = n.waitListener,
                            i = o && o.state,
                            a = {
                                id: n.id,
                                ip: n.ip,
                                waitListener: "number" == typeof i ? {
                                    state: i
                                } : void 0
                            };
                        a.waitListener || delete a.waitListener, e.push(a)
                    }
                    return e
                }, e.setFibersState = function(e) {
                    this.fibers = {};
                    for (var t = 0, n = e; t < n.length; t++) {
                        var o = n[t],
                            i = {
                                id: o.id,
                                ip: o.ip
                            };
                        o.waitListener && (i.waitListener = o.waitListener), this.fibers[i.id] = i
                    }
                }, e.compile = function() {
                    for (var e = [], t = jsyaml.load(c.default.get(c.ResourceID.QuestsScript).text), n = t.length, o = 0; o < n; ++o) {
                        var i = t[o].quest;
                        i && e.push.apply(e, this.compileRoutine(i, o, e.length))
                    }
                    this.instructions = e
                }, e.compileRoutine = function(e, t, n) {
                    for (var o = [], i = [], a = [], r = [], s = [], c = [], l = [], u = {}, p = e.map(function(e) {
                            return "string" == typeof e ? e : Object.keys(e)[0]
                        }), d = p.length, h = 0; h < d; ++h) {
                        var m = p[h],
                            y = e[h][m];
                        switch (m) {
                            case "wait":
                                if ("number" == typeof y) o.push(this.wait.bind(this, y));
                                else if (y.character_interaction) {
                                    var g = v[y.character_interaction],
                                        C = y.markers;
                                    o.push(this.waitCharacterInteraction.bind(this, g, C))
                                } else if (y.character_request_fulfillment) {
                                    var P = v[y.character_request_fulfillment],
                                        S = [];
                                    if (y.props_of_interest)
                                        for (var k = 0, F = y.props_of_interest; k < F.length; k++) {
                                            var E = F[k];
                                            S.push({
                                                id: E.room + "_" + E.name + "_" + E.id,
                                                room: E.room
                                            })
                                        }
                                    if ("string" == typeof y.on_first_interaction) {
                                        var x = y.on_first_interaction;
                                        s.push({
                                            instrIdx: h,
                                            label: x,
                                            ip: o.length,
                                            char: P,
                                            propsOfInteres: S,
                                            markers: y.markers
                                        }), o.push(null)
                                    } else C = y.markers, o.push(this.waitCharacterRequestFulfilment.bind(this, P, null, S, C))
                                } else if (y.prop_interaction) {
                                    var T = (B = y.prop_interaction).room + "_" + B.name + "_" + B.id,
                                        w = B.room;
                                    C = y.markers, o.push(this.waitPropInteraction.bind(this, T, w, C))
                                } else if (y.prop_request_fulfillment) {
                                    if (T = (B = y.prop_request_fulfillment).room + "_" + B.name + "_" + B.id, w = B.room, S = [], y.props_of_interest)
                                        for (var R = 0, M = y.props_of_interest; R < M.length; R++) E = M[R], S.push({
                                            id: E.room + "_" + E.name + "_" + E.id,
                                            room: E.room
                                        });
                                    "string" == typeof y.on_first_interaction ? (x = y.on_first_interaction, c.push({
                                        instrIdx: h,
                                        label: x,
                                        ip: o.length,
                                        propId: T,
                                        propRoom: w,
                                        propsOfInteres: S,
                                        markers: y.markers
                                    }), o.push(null)) : (C = y.markers, o.push(this.waitPropRequestFulfilment.bind(this, T, w, null, S, C)))
                                } else if (y.minigame_done) {
                                    T = (B = y.minigame_done).room + "_" + B.name + "_" + B.id, w = B.room, C = y.markers;
                                    var B, D = y.on_first_interaction;
                                    "string" == typeof D ? (l.push({
                                        instrIdx: h,
                                        label: D,
                                        ip: o.length,
                                        propId: T,
                                        propRoom: w,
                                        markers: y.markers
                                    }), o.push(null)) : o.push(this.waitMinigameDone.bind(this, T, w, null, C))
                                } else if (y.item_picked_up) {
                                    var L = _[y.item_picked_up],
                                        N = y.room;
                                    o.push(this.waitItemPickedUp.bind(this, L, N))
                                } else "string" == typeof y.arrival && (N = y.arrival, C = !!y.markers && y.markers, o.push(this.waitArrival.bind(this, N, C)));
                                break;
                            case "label":
                                "string" == typeof y && (void 0 !== u[y] ? console.error('Label "' + y + '" redefined at quest ' + t + ", instruction " + h) : u[y] = n + o.length);
                                break;
                            case "jump":
                                "string" == typeof y && (i.push({
                                    instrIdx: h,
                                    label: y,
                                    ip: o.length
                                }), o.push(null));
                                break;
                            case "print":
                                "string" == typeof y && o.push(this.print.bind(this, y));
                                break;
                            case "start_fiber":
                                var O = y.id,
                                    G = y.entry_point;
                                "string" == typeof O && "string" == typeof G && (a.push({
                                    instrIdx: h,
                                    id: O,
                                    entryPoint: G,
                                    ip: o.length
                                }), o.push(null));
                                break;
                            case "kill_fiber":
                                "string" == typeof y && o.push(this.killFiber.bind(this, "#" + y));
                                break;
                            case "end":
                                o.push(this.end.bind(this));
                                break;
                            case "enable_player_control":
                                "boolean" == typeof y && o.push(this.enablePlayerControl.bind(this, y));
                                break;
                            case "set_player_position":
                                if (void 0 !== y.x && void 0 !== y.y) {
                                    var H = y.direction,
                                        U = "left" === H ? -1 : "right" === H ? 1 : 0;
                                    o.push(this.setPlayerPosition.bind(this, y.x, y.y, U))
                                }
                                break;
                            case "player_look_at_character":
                                if (void 0 !== y.type) {
                                    var K = v[y.type];
                                    o.push(this.playerLookAtNPC.bind(this, K))
                                }
                                break;
                            case "jump_if_player_has_item":
                                "string" == typeof y.label && "string" == typeof y.item && (r.push({
                                    instrIdx: h,
                                    label: y.label,
                                    item: _[y.item],
                                    ip: o.length
                                }), o.push(null));
                                break;
                            case "add_character":
                                if (void 0 !== y.type) {
                                    var q = v[y.type],
                                        z = y.pos;
                                    o.push(this.addCharacter.bind(this, q, z))
                                }
                                break;
                            case "set_character_idle_clip":
                                if (void 0 !== y.type) {
                                    var j = v[y.type],
                                        V = y.clip;
                                    o.push(this.setCharacterIdleClip.bind(this, j, V))
                                }
                                break;
                            case "set_character_request":
                                if (void 0 !== y.type) {
                                    var X = v[y.type];
                                    L = _[y.item], o.push(this.setCharacterRequest.bind(this, X, L))
                                }
                                break;
                            case "play_character_animation":
                                if (void 0 !== y.type && Array.isArray(y.clip_list) && y.clip_list.length > 0) {
                                    var W = v[y.type],
                                        Y = y.clip_list;
                                    o.push(this.playCharacterAnimation.bind(this, W, Y))
                                }
                                break;
                            case "set_character_facing_scale":
                                if (void 0 !== y.type && (1 === y.direction || -1 === y.direction)) {
                                    var Q = v[y.type],
                                        J = y.direction;
                                    o.push(this.setCharacterFacingScale.bind(this, Q, J))
                                }
                                break;
                            case "remove_character":
                                void 0 !== y && o.push(this.removeCharacter.bind(this, v[y]));
                                break;
                            case "enable_prop":
                                if (void 0 !== y.prop) {
                                    T = y.prop.room + "_" + y.prop.name + "_" + y.prop.id;
                                    var Z = void 0 === y.enabled || y.enabled;
                                    o.push(this.enableProp.bind(this, T, Z))
                                }
                                break;
                            case "set_prop_blocker":
                                if (void 0 !== y.npc) {
                                    g = v[y.npc];
                                    var $ = [];
                                    if (y.blacklist)
                                        for (var ee = 0, te = y.blacklist; ee < te.length; ee++) E = te[ee], $.push(E.room + "_" + E.name + "_" + E.id);
                                    o.push(this.setPropBlocker.bind(this, g, $))
                                }
                                break;
                            case "clear_prop_blocker":
                                o.push(this.clearPropBlocker.bind(this));
                                break;
                            case "spawn_item":
                                void 0 !== y.type && (L = _[y.type], z = y.pos, o.push(this.spawnItem.bind(this, L, z)));
                                break;
                            case "give_item":
                                "string" == typeof y && (L = _[y], o.push(this.giveItem.bind(this, L)));
                                break;
                            case "remove_items":
                                if (Array.isArray(y)) {
                                    var ne = y.map(function(e) {
                                        return _[e]
                                    });
                                    o.push(this.removeItems.bind(this, ne))
                                }
                                break;
                            case "set_environment_flag":
                                "string" == typeof y.flag && o.push(this.setEnvironmentFlag.bind(this, b[y.flag], y.enabled));
                                break;
                            case "lock_door":
                                if ("string" == typeof y.door) {
                                    var oe = y.door,
                                        ie = y.locked;
                                    o.push(this.lockDoor.bind(this, oe, ie))
                                }
                                break;
                            case "save_game":
                                o.push(this.saveGame.bind(this));
                                break;
                            case "play_sfx":
                                void 0 !== f.SFXKey[y] && o.push(this.playSFX.bind(this, f.SFXKey[y]));
                                break;
                            case "force_quest_room":
                                "string" != typeof y && null !== y || o.push(this.forceQuestRoom.bind(this, y));
                                break;
                            case "set_quest_text":
                                "string" == typeof y && o.push(this.setQuestText.bind(this, y));
                                break;
                            case "set_quest_text_icon":
                                "string" == typeof y && o.push(this.setQuestTextIcon.bind(this, y));
                                break;
                            case "play_map_button_animation":
                                o.push(this.playMapButtonAnimation.bind(this));
                                break;
                            case "fade_in":
                                "number" == typeof y && o.push(this.fadeIn.bind(this, y));
                                break;
                            case "fade_out":
                                "number" == typeof y && o.push(this.fadeOut.bind(this, y));
                                break;
                            case "show_tutorial":
                                "string" == typeof y && o.push(this.showTutorial.bind(this, y));
                                break;
                            case "show_panel":
                                var ae = y.type,
                                    re = y.image;
                                "string" == typeof ae && o.push(this.showPanel.bind(this, I[ae], A[re]));
                                break;
                            default:
                                console.warn('Instruction "' + m + '" unknown at quest ' + t + ", instruction " + h)
                        }
                    }
                    for (var se = 0, ce = i; se < ce.length; se++) void 0 !== u[(pe = ce[se]).label] ? o[pe.ip] = this.jump.bind(this, u[pe.label]) : console.error("Jump at quest " + t + ", instruction " + pe.instrIdx + " references an undefined label (" + pe.label + ")");
                    for (var le = 0, ue = r; le < ue.length; le++) {
                        var pe;
                        void 0 !== u[(pe = ue[le]).label] ? o[pe.ip] = this.jumpIfPlayerHasItem.bind(this, pe.item, u[pe.label]) : console.error("Jump at quest " + t + ", instruction " + pe.instrIdx + " references an undefined label (" + pe.label + ")")
                    }
                    for (var de = 0, he = a; de < he.length; de++) {
                        var me = he[de];
                        void 0 !== u[me.entryPoint] ? o[me.ip] = this.startFiber.bind(this, "#" + me.id, u[me.entryPoint]) : console.error("Fiber creation entry point at quest " + t + ", instruction " + me.instrIdx + " references an undefined label (" + me.entryPoint + ")")
                    }
                    for (var fe = 0, ye = s; fe < ye.length; fe++) {
                        var ge = ye[fe];
                        void 0 !== u[ge.label] ? o[ge.ip] = this.waitCharacterRequestFulfilment.bind(this, ge.char, u[ge.label], ge.propsOfInteres, ge.markers) : console.error("Jump at quest " + t + ", instruction " + ge.instrIdx + " (wait character_request_fulfillment) references an undefined label (" + ge.label + ")")
                    }
                    for (var ve = 0, _e = c; ve < _e.length; ve++) {
                        var be = _e[ve];
                        void 0 !== u[be.label] ? o[be.ip] = this.waitPropRequestFulfilment.bind(this, be.propId, be.propRoom, u[be.label], be.propsOfInteres, be.markers) : console.error("Jump at quest " + t + ", instruction " + be.instrIdx + " (wait prop_request_fulfillment) references an undefined label (" + be.label + ")")
                    }
                    for (var Ie = 0, Ae = l; Ie < Ae.length; Ie++) {
                        var Ce = Ae[Ie];
                        void 0 !== u[Ce.label] ? o[Ce.ip] = this.waitMinigameDone.bind(this, Ce.propId, Ce.propRoom, u[Ce.label], Ce.markers) : console.error("Jump at quest " + t + ", instruction " + Ce.instrIdx + " (wait minigame_done) references an undefined label (" + Ce.label + ")")
                    }
                    return o
                }, e.wait = function(e, t) {
                    var n = this;
                    return cc.director.getScheduler().schedule(function() {
                        ++t.ip, cc.director.once("tick-quest", function() {
                            n.tick(t)
                        })
                    }, this, 0, 0, e, !1), !1
                }, e.jump = function(e, t) {
                    return t.ip = e, !0
                }, e.print = function(e, t) {
                    return console.log(e), ++t.ip, !0
                }, e.startFiber = function(e, t, n) {
                    var o = this,
                        i = {
                            id: e,
                            ip: t
                        };
                    return this.fibers[e] = i, cc.director.once("tick-quest", function() {
                        o.tick(i)
                    }), ++n.ip, !0
                }, e.killFiber = function(e, t) {
                    return ++t.ip, 0 === e || !this.fibers[e] || (delete this.fibers[e], e !== t.id)
                }, e.end = function(e) {
                    return 0 !== e.id && delete this.fibers[e.id], !1
                }, e.enablePlayerControl = function(e, t) {
                    return o.default.get().player.controlEnabled = e, ++t.ip, !0
                }, e.setPlayerPosition = function(e, t, n, i) {
                    var a = o.default.get(),
                        r = a.player.character.node;
                    return r.x = e, r.y = t, r.getComponent(cc.RigidBody).syncPosition(!0), 0 !== n && a.player.character.setFacingDirection(n), ++i.ip, !0
                }, e.playerLookAtNPC = function(e, t) {
                    var n = o.default.get(),
                        i = n.npc[e].instance.node;
                    if (i) {
                        var a = n.player.character.node,
                            r = i.x - a.x,
                            s = Math.sign(r);
                        Math.abs(r) < 80 && (a.x = i.x - 80 * s, a.getComponent(cc.RigidBody).syncPosition(!0)), n.player.character.setFacingDirection(s)
                    }
                    return ++t.ip, !0
                }, e.giveItem = function(e, t) {
                    return o.default.get().player.character.getComponent(u.default).addItem(new i.default(e)), y.default.instance.playRandomSfx([f.SFXKey.item_collected1, f.SFXKey.item_collected2, f.SFXKey.item_collected3]), ++t.ip, !0
                }, e.removeItems = function(e, t) {
                    for (var n = o.default.get().player, i = 0, a = e; i < a.length; i++) {
                        var r = a[i];
                        n.inventory.removeItemsByType(r, 1)
                    }
                    return n.character.getComponent(u.default).syncInventory(), ++t.ip, !0
                }, e.jumpIfPlayerHasItem = function(e, t, n) {
                    return o.default.get().player.inventory.getItemTypeCount(e) > 0 ? n.ip = t : ++n.ip, !0
                }, e.addCharacter = function(e, t, n) {
                    var i = o.default.get(),
                        a = i.npc[e];
                    if (a.position = {
                            room: t.room,
                            pos: cc.v2(t.x, t.y)
                        }, t.room === i.world.currentRoom.getName())
                        if (a.instance && cc.isValid(a.instance.node, !0)) {
                            var r = a.instance.node;
                            r.x = t.x, r.y = t.y, r.zIndex = -r.y
                        } else i.world.currentRoom.spawnNPC(e, a.position.pos);
                    else a.instance && a.instance.node.destroy();
                    return ++n.ip, !0
                }, e.setCharacterIdleClip = function(e, t, n) {
                    var i = o.default.get().npc[e];
                    return i.idleClipName = t, i.instance && i.instance.playAnimation(t), ++n.ip, !0
                }, e.setCharacterRequest = function(e, t, n) {
                    return o.default.get().npc[e].request = t, ++n.ip, !0
                }, e.playCharacterAnimation = function(e, t, n) {
                    var o = this,
                        i = n.waitListener && n.waitListener.state,
                        a = new s.NPCAnimationListener({
                            onSequenceFinished: function() {
                                delete n.waitListener, ++n.ip, cc.director.once("tick-quest", function() {
                                    o.tick(n)
                                })
                            }
                        }, e, t);
                    return a.state = i || 0, n.waitListener = a, a.listen(), !1
                }, e.setCharacterFacingScale = function(e, t, n) {
                    var i = o.default.get().npc[e];
                    return i.scaleX = t, i.instance && (i.instance.node.scaleX = Math.abs(i.instance.node.scaleX) * t), ++n.ip, !0
                }, e.removeCharacter = function(e, t) {
                    var n = o.default.get().npc[e];
                    return n.position = null, n.idleClipName = "", n.request = null, n.instance && n.instance.node.destroy(), ++t.ip, !0
                }, e.waitCharacterInteraction = function(e, t, n) {
                    var o = this,
                        i = new s.CharacterInteractionListener({
                            onAction: function() {
                                delete n.waitListener, ++n.ip, cc.director.once("tick-quest", function() {
                                    o.tick(n)
                                })
                            }
                        }, e, t);
                    return n.waitListener = i, i.listen(), !1
                }, e.waitCharacterRequestFulfilment = function(e, t, n, o, i) {
                    var a, r = this,
                        c = i.waitListener && i.waitListener.state;
                    a = null === t ? null : function() {
                        var e = {
                            id: Object.keys(r.fibers).length,
                            ip: t
                        };
                        r.fibers[e.id] = e, cc.director.once("tick-quest", function() {
                            r.tick(e)
                        })
                    };
                    var l = new s.CharacterRequestFulfilledListener({
                        onRequestFulfilled: function() {
                            delete i.waitListener, ++i.ip, cc.director.once("tick-quest", function() {
                                r.tick(i)
                            })
                        },
                        onAction: a
                    }, e, n, o);
                    return l.state = c || 0, i.waitListener = l, l.listen(), !1
                }, e.waitPropInteraction = function(e, t, n, o) {
                    var i = this,
                        a = new s.PropInteractionListener({
                            onAction: function() {
                                delete o.waitListener, ++o.ip, cc.director.once("tick-quest", function() {
                                    i.tick(o)
                                })
                            }
                        }, e, t, n);
                    return o.waitListener = a, a.listen(), !1
                }, e.waitPropRequestFulfilment = function(e, t, n, o, i, a) {
                    var r, c = this,
                        l = a.waitListener && a.waitListener.state;
                    r = null === n ? null : function() {
                        var e = {
                            id: Object.keys(c.fibers).length,
                            ip: n
                        };
                        c.fibers[e.id] = e, cc.director.once("tick-quest", function() {
                            c.tick(e)
                        })
                    };
                    var u = new s.PropRequestFulfilledListener({
                        onRequestFulfilled: function() {
                            delete a.waitListener, ++a.ip, cc.director.once("tick-quest", function() {
                                c.tick(a)
                            })
                        },
                        onAction: r
                    }, e, t, o);
                    return u.state = l || 0, a.waitListener = u, u.listen(), !1
                }, e.waitMinigameDone = function(e, t, n, o, i) {
                    var a, r = this,
                        c = i.waitListener && i.waitListener.state;
                    a = null === n ? null : function() {
                        var e = {
                            id: Object.keys(r.fibers).length,
                            ip: n
                        };
                        r.fibers[e.id] = e, cc.director.once("tick-quest", function() {
                            r.tick(e)
                        })
                    };
                    var l = new s.MinigameDoneListener({
                        onMingameDone: function() {
                            delete i.waitListener, ++i.ip, cc.director.once("tick-quest", function() {
                                r.tick(i)
                            })
                        },
                        onAction: a
                    }, e, t, o);
                    return l.state = c || 0, i.waitListener = l, l.listen(), !1
                }, e.waitItemPickedUp = function(e, t, n) {
                    var o = this,
                        i = new s.ItemPickedUpListener({
                            onPickedUp: function() {
                                delete n.waitListener, ++n.ip, cc.director.once("tick-quest", function() {
                                    o.tick(n)
                                })
                            }
                        }, t, e);
                    return n.waitListener = i, i.listen(), !1
                }, e.waitArrival = function(e, t, n) {
                    var o = this,
                        i = new s.ArrivalListener({
                            onArrival: function() {
                                delete n.waitListener, ++n.ip, cc.director.once("tick-quest", function() {
                                    o.tick(n)
                                })
                            }
                        }, e, t);
                    return n.waitListener = i, i.listen(), !1
                }, e.enableProp = function(e, t, n) {
                    var i = o.default.get(),
                        a = i.props[e];
                    return a ? (a.active = t, a.instance && a.instance.setActive(t)) : i.props[e] = {
                        active: t,
                        request: void 0,
                        instance: void 0,
                        room: void 0
                    }, ++n.ip, !0
                }, e.setPropBlocker = function(e, t, n) {
                    return o.default.get().world.propBlocker = {
                        npc: e,
                        blacklist: t
                    }, ++n.ip, !0
                }, e.clearPropBlocker = function(e) {
                    return o.default.get().world.propBlocker = null, ++e.ip, !0
                }, e.spawnItem = function(e, t, n) {
                    var a = o.default.get(),
                        r = {
                            item: new i.default(e),
                            position: cc.v2(t.x, t.y),
                            instance: void 0
                        };
                    if (a.addItemToRoom(t.room, r), t.room === a.world.currentRoom.getName()) {
                        var s = a.world.currentRoom.spawnItem(r).getComponent(d.default);
                        s.scheduleOnce(s.playShine.bind(s), 1), y.default.instance.playSfx(f.SFXKey.item_drop)
                    }
                    return ++n.ip, !0
                }, e.setEnvironmentFlag = function(e, t, n) {
                    var i = o.default.get(),
                        a = i.world.environmentFlags;
                    i.world.environmentFlags = a & ~e | 1 + ~t & e;
                    for (var r = 0, s = o.default.get().world.currentRoom.getComponentsInChildren(g.default); r < s.length; r++) s[r].updateProp();
                    return ++n.ip, !0
                }, e.lockDoor = function(e, t, n) {
                    var i = o.default.get().world,
                        a = i.doors[e],
                        r = i.currentRoom.getName();
                    if (a.locked = t, a.roomA === r || a.roomB === r)
                        for (var s = 0, c = i.currentRoom.getComponentsInChildren(l.default); s < c.length; s++) {
                            var u = c[s];
                            if (u.doorId === e) {
                                u.setActive(!t);
                                break
                            }
                        }
                    return ++n.ip, !0
                }, e.saveGame = function(e) {
                    var t = o.default.get(),
                        n = p.default.instance;
                    return t.world.currentRoom.addElapsedTime(), t.world.currentRoom.resetTime(), n.setStateData(t.serialize()), ++e.ip, !0
                }, e.playSFX = function(e, t) {
                    return y.default.instance.playSfx(e), ++t.ip, !0
                }, e.forceQuestRoom = function(e, t) {
                    return o.default.get().ui.forcedQuestRoom = e, ++t.ip, !0
                }, e.setQuestText = function(e, t) {
                    var n = o.default.get();
                    return n.ui.questText = e, n.ui.instance.updateQuestText(), n.ui.instance.queueQuestTextIcon("new"), n.player.character.doNoteAnimation(), ++t.ip, !0
                }, e.setQuestTextIcon = function(e, t) {
                    return o.default.get().ui.instance.queueQuestTextIcon(e), ++t.ip, !0
                }, e.playMapButtonAnimation = function(e) {
                    return o.default.get().ui.instance.playMapButtonAnimation(), ++e.ip, !0
                }, e.fadeIn = function(e, t) {
                    var n = this;
                    return o.default.get().ui.instance.fadeIn(e, function() {
                        ++t.ip, cc.director.once("tick-quest", function() {
                            n.tick(t)
                        })
                    }), !1
                }, e.fadeOut = function(e, t) {
                    var n = this;
                    return o.default.get().ui.instance.fadeOut(e, function() {
                        ++t.ip, cc.director.once("tick-quest", function() {
                            n.tick(t)
                        })
                    }), !1
                }, e.showTutorial = function(e, t) {
                    var n, i = this;
                    return null === (n = o.default.get().ui.instance.showTutorial(e)) || void 0 === n || n.once("hid", function() {
                        ++t.ip, cc.director.once("tick-quest", function() {
                            i.tick(t)
                        })
                    }), !1
                }, e.showPanel = function(e, t, n) {
                    var i, a = this;
                    return null === (i = o.default.get().ui.instance.showCustomEventPanel(e, t)) || void 0 === i || i.once("hid", function() {
                        ++n.ip, cc.director.once("tick-quest", function() {
                            a.tick(n)
                        })
                    }), !1
                }, e
            }();
        n.default = C, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../common/Resources": "Resources",
        "../../managers/DataManager": "DataManager",
        "../../ui/gameplay/panels/EventPanel": "EventPanel",
        "../../ui/gameplay/panels/HintEventPanel": "HintEventPanel",
        "../BaseEnvironmentProp": "BaseEnvironmentProp",
        "../GameState": "GameState",
        "../WorldInfo": "WorldInfo",
        "../interactive/Door": "Door",
        "../interactive/NPC": "NPC",
        "../inventory/Item": "Item",
        "../inventory/components/InventoryActions": "InventoryActions",
        "../inventory/components/ItemComponent": "ItemComponent",
        "./WaitListener": "WaitListener"
    }],
    RenderTextureTarget: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "05363lQkkNLr7b/tay8uP1Z", "RenderTextureTarget"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.menu,
            r = o.requireComponent,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "texture", {
                    get: function() {
                        return this._texture
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.initSprite = function() {
                    var e = this.getComponent(cc.Sprite),
                        t = new cc.SpriteFrame(this._texture);
                    e.spriteFrame = t
                }, t.prototype._onResize = function() {
                    var e = cc.Canvas.instance.node;
                    this._texture.initWithSize(e.width, e.height, cc.RenderTexture.DepthStencilFormat.RB_FMT_D24S8), this.node.emit("texture-resize", this._texture)
                }, t.prototype.onResize = function() {
                    cc.director.once(cc.Director.EVENT_BEFORE_DRAW, this._onResize, this)
                }, t.prototype.onLoad = function() {
                    this._texture = new cc.RenderTexture, this.resizeCallback = this.onResize.bind(this), this.onResize(), this.initSprite();
                    var e = this.getComponent(cc.Widget);
                    e && e.updateAlignment(), window.addEventListener("resize", this.resizeCallback)
                }, t.prototype.onDestroy = function() {
                    window.removeEventListener("resize", this.resizeCallback)
                }, __decorate([i, r(cc.Sprite), a("Common Component/Post Processing/RenderTextureTarget")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    Resources: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e13f9IHUztPw4mevenQvDa9", "Resources"), Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ResourceID = void 0,
            function(e) {
                e[e.LoadingPrefab = 0] = "LoadingPrefab", e[e.TransitionPrefab = 1] = "TransitionPrefab", e[e.HUDPrefab = 2] = "HUDPrefab", e[e.MobileInputPrefab = 3] = "MobileInputPrefab", e[e.FadePrefab = 4] = "FadePrefab", e[e.PausePrefab = 5] = "PausePrefab", e[e.CheatPrefab = 6] = "CheatPrefab", e[e.MapPrefab = 7] = "MapPrefab", e[e.MoveTutorial = 8] = "MoveTutorial", e[e.ObjectiveTutorial = 9] = "ObjectiveTutorial", e[e.RoomTutorial = 10] = "RoomTutorial", e[e.CluesTutorial = 11] = "CluesTutorial", e[e.GymTutorial = 12] = "GymTutorial", e[e.FinalTutorial = 13] = "FinalTutorial", e[e.EventPanel = 14] = "EventPanel", e[e.FireExtinguisherEventPanel = 15] = "FireExtinguisherEventPanel", e[e.BellEventPanel = 16] = "BellEventPanel", e[e.HintPanel = 17] = "HintPanel", e[e.PCVideoHintPanel = 18] = "PCVideoHintPanel", e[e.VentPanel = 19] = "VentPanel", e[e.PadlockMinigame = 20] = "PadlockMinigame", e[e.CombLockMinigame = 21] = "CombLockMinigame", e[e.NoteMinigame = 22] = "NoteMinigame", e[e.PennyPrefab = 23] = "PennyPrefab", e[e.TobiasPrefab = 24] = "TobiasPrefab", e[e.BobertPrefab = 25] = "BobertPrefab", e[e.AlanPrefab = 26] = "AlanPrefab", e[e.MowdownPrefab = 27] = "MowdownPrefab", e[e.ItemPrefab = 28] = "ItemPrefab", e[e.MarkerPrefab = 29] = "MarkerPrefab", e[e.BubblePrefab = 30] = "BubblePrefab", e[e.BubbleDesktop0 = 31] = "BubbleDesktop0", e[e.BubbleDesktop1 = 32] = "BubbleDesktop1", e[e.BubbleDesktop2 = 33] = "BubbleDesktop2", e[e.BubbleDesktop3 = 34] = "BubbleDesktop3", e[e.BubbleMobile0 = 35] = "BubbleMobile0", e[e.BubbleMobile1 = 36] = "BubbleMobile1", e[e.BubbleMobile2 = 37] = "BubbleMobile2", e[e.BubbleMobile3 = 38] = "BubbleMobile3", e[e.BubbleCoin = 39] = "BubbleCoin", e[e.BubbleJuice = 40] = "BubbleJuice", e[e.BubbleGumStick = 41] = "BubbleGumStick", e[e.BubbleHeadband = 42] = "BubbleHeadband", e[e.BubbleLockpick = 43] = "BubbleLockpick", e[e.BubbleEraser0 = 44] = "BubbleEraser0", e[e.BubbleEraser1 = 45] = "BubbleEraser1", e[e.BubbleScrewdriver = 46] = "BubbleScrewdriver", e[e.BubbleBrush = 47] = "BubbleBrush", e[e.BubbleRedBrush = 48] = "BubbleRedBrush", e[e.BubbleBlueBrush = 49] = "BubbleBlueBrush", e[e.BubbleGreenBrush = 50] = "BubbleGreenBrush", e[e.BubbleFireExtinguisher = 51] = "BubbleFireExtinguisher", e[e.BubbleHammer = 52] = "BubbleHammer", e[e.BubbleScreen = 53] = "BubbleScreen", e[e.BubbleBlowgun = 54] = "BubbleBlowgun", e[e.BubbleReachExtender = 55] = "BubbleReachExtender", e[e.BubbleBlackboard = 56] = "BubbleBlackboard", e[e.BubbleDesk = 57] = "BubbleDesk", e[e.BubblePoster = 58] = "BubblePoster", e[e.BubbleNegation0 = 59] = "BubbleNegation0", e[e.BubbleNegation1 = 60] = "BubbleNegation1", e[e.BubbleNegation2 = 61] = "BubbleNegation2", e[e.BubbleChip = 62] = "BubbleChip", e[e.BubbleNote = 63] = "BubbleNote", e[e.BubblePadlock = 64] = "BubblePadlock", e[e.FrameCoin = 65] = "FrameCoin", e[e.FrameJuice = 66] = "FrameJuice", e[e.FrameSelfieStick = 67] = "FrameSelfieStick", e[e.FrameGum = 68] = "FrameGum", e[e.FrameHeadband = 69] = "FrameHeadband", e[e.FrameLockpick = 70] = "FrameLockpick", e[e.FrameChip = 71] = "FrameChip", e[e.FrameEraser = 72] = "FrameEraser", e[e.FrameScrewdriver = 73] = "FrameScrewdriver", e[e.FrameBrush = 74] = "FrameBrush", e[e.FrameRedBrush = 75] = "FrameRedBrush", e[e.FrameBlueBrush = 76] = "FrameBlueBrush", e[e.FrameGreenBrush = 77] = "FrameGreenBrush", e[e.FrameHammer = 78] = "FrameHammer", e[e.FrameScreen = 79] = "FrameScreen", e[e.FrameBlowgun = 80] = "FrameBlowgun", e[e.FrameNote = 81] = "FrameNote", e[e.FrameGlove = 82] = "FrameGlove", e[e.FrameBroomstick = 83] = "FrameBroomstick", e[e.IconCoin = 84] = "IconCoin", e[e.IconJuice = 85] = "IconJuice", e[e.IconSelfieStick = 86] = "IconSelfieStick", e[e.IconGum = 87] = "IconGum", e[e.IconGumStick = 88] = "IconGumStick", e[e.IconHeadband = 89] = "IconHeadband", e[e.IconLockpick = 90] = "IconLockpick", e[e.IconChip = 91] = "IconChip", e[e.IconEraser = 92] = "IconEraser", e[e.IconScrewdriver = 93] = "IconScrewdriver", e[e.IconBrush = 94] = "IconBrush", e[e.IconRedBrush = 95] = "IconRedBrush", e[e.IconBlueBrush = 96] = "IconBlueBrush", e[e.IconGreenBrush = 97] = "IconGreenBrush", e[e.IconFireExtinguisher = 98] = "IconFireExtinguisher", e[e.IconHammer = 99] = "IconHammer", e[e.IconScreen = 100] = "IconScreen", e[e.IconBlowgun = 101] = "IconBlowgun", e[e.IconNote = 102] = "IconNote", e[e.IconGlove = 103] = "IconGlove", e[e.IconBroomstick = 104] = "IconBroomstick", e[e.IconReachExtender = 105] = "IconReachExtender", e[e.EventGumStick = 106] = "EventGumStick", e[e.EventBlackboard = 107] = "EventBlackboard", e[e.EventVent = 108] = "EventVent", e[e.EventAlan = 109] = "EventAlan", e[e.EventPointer = 110] = "EventPointer", e[e.HintEventHeadband = 111] = "HintEventHeadband", e[e.HintEventBlackboard = 112] = "HintEventBlackboard", e[e.HintEventPoster = 113] = "HintEventPoster", e[e.HintEventScreen = 114] = "HintEventScreen", e[e.QuestsScript = 115] = "QuestsScript"
            }(n.ResourceID || (n.ResourceID = {}));
        var o = function() {
            function e() {}
            return e.init = function(e, t, n) {
                var o;
                this.assets || (this.assets = e, (o = this.assets).push.apply(o, t), this.assets.push(n))
            }, e.get = function(e) {
                return this.assets[e]
            }, e
        }();
        n.default = o;
        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function(e) {
            console.log("Resources initialisation..."), cc.resources.load(["loading", "transition", "hud", "mobile_input", "fade", "popups/pause", "popups/cheats", "map", "howtoplay/move_tutorial", "howtoplay/find_tutorial", "howtoplay/walking_tutorial", "howtoplay/clues_tutorial", "howtoplay/gym_tutorial", "howtoplay/strange_tutorial", "popups/bullets/bullet1", "popups/bullets/bullet3", "popups/bullets/bullet2", "popups/hint", "popups/computer_hint", "popups/bullets/bullet4", "minigames/lock_pick", "minigames/lock_code", "minigames/post_it", "characters/penny", "characters/tobias", "characters/bobert", "characters/alan", "characters/mowdown", "item", "marker", "bubble"], cc.Asset, function(t, n) {
                if (t) return console.warn("Error when loading Resources assets"), void console.error(t.message);
                cc.resources.load(["textures/bubble_action", "textures/bubble_action4", "textures/bubble_action3", "textures/bubble_action2", "textures/bubble_mobile", "textures/bubble_mobile4", "textures/bubble_mobile3", "textures/bubble_mobile2", "textures/bubble_coin", "textures/bubble_juice", "textures/bubble_sticky", "textures/bubble_headband", "textures/bubble_lockpick", "textures/bubble_eraser", "textures/bubble_eraser2", "textures/bubble_screwdriver", "textures/bubble_brush", "textures/bubble_brush_red", "textures/bubble_brush_blue", "textures/bubble_brush_green", "textures/bubble_extinguisher", "textures/bubble_hammer", "textures/bubble_screen", "textures/bubble_blowgun", "textures/bubble_extender", "textures/bubble_board", "textures/bubble_desk", "textures/bubble_poster", "textures/bubble_x", "textures/bubble_x2", "textures/bubble_x3", "textures/bubble_chip", "textures/bubble_note", "textures/bubble_padlock", "textures/items/coin", "textures/items/juice", "textures/items/selfiestick", "textures/items/bubblegum", "textures/items/headband", "textures/items/lockpick", "textures/items/chip", "textures/items/eraser", "textures/items/screwdriver", "textures/items/brush", "textures/items/red_brush", "textures/items/blue_brush", "textures/items/green_brush", "textures/items/hammer", "textures/items/screen", "textures/items/blowgun", "textures/items/note", "textures/items/glove", "textures/items/stick", "textures/items/icons/icon_coin", "textures/items/icons/icon_juice", "textures/items/icons/icon_selfie", "textures/items/icons/icon_bubblegum", "textures/items/icons/icon_sticky", "textures/items/icons/icon_headband", "textures/items/icons/icon_lockpick", "textures/items/icons/icon_chip", "textures/items/icons/icon_eraser", "textures/items/icons/icon_screwdriver", "textures/items/icons/icon_brush", "textures/items/icons/icon_brush_red", "textures/items/icons/icon_brush_blue", "textures/items/icons/icon_brush_green", "textures/items/icons/icon_extinguisher", "textures/items/icons/icon_hammer", "textures/items/icons/icon_screen", "textures/items/icons/icon_blowgun", "textures/items/icons/icon_note", "textures/items/icons/icon_glove", "textures/items/icons/icon_stick", "textures/items/icons/icon_point", "textures/panels/bullet_stick", "textures/panels/bullet_blackboard", "textures/panels/bullet_ventilation", "textures/panels/bullet_allan", "textures/panels/bullet_pointer", "textures/panels/hints/hint_headband", "textures/panels/hints/hint_blackboard", "textures/panels/hints/hint_poster", "textures/panels/hints/hint_screen"], cc.SpriteFrame, function(t, i) {
                    if (t) return console.warn("Error when loading Resources sprite frames"), void console.error(t.message);
                    cc.resources.load("quests/quests", cc.Asset, function(t, a) {
                        if (t) return console.warn("Error when loading Resources quest file"), void console.error(t.message);
                        var r = new cc.TextAsset,
                            s = Object.getOwnPropertyDescriptors(a);
                        for (var c in s) s[c].get || (r[c] = s[c].value);
                        r._uuid = a._uuid, r._nativeUrl = a._nativeUrl, r.text = a._nativeAsset, o.init(n, i, r), console.info("Resources initialised"), e.fn && e.fn()
                    })
                })
            })
        }), cc._RF.pop()
    }, {}],
    RichTextCounter: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0acc1thbfpKFI3ASCvl4BDF", "RichTextCounter"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = o.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.counterText = null, t.notEnoughColor = null, t.enoughColor = null, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "current", {
                    get: function() {
                        return this._current
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "target", {
                    get: function() {
                        return this._target
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.setValues = function(e, t) {
                    this._current = e, this._target = t;
                    var n = e < t ? this.notEnoughColor : this.enoughColor;
                    this.counterText.string = "<outline color=black width=2><color=#" + n.toHEX("#rrggbb") + ">" + e + "</color>/" + t + "</outline>"
                }, t.prototype.onLoad = function() {
                    this.setValues(0, 0)
                }, __decorate([a(cc.RichText)], t.prototype, "counterText", void 0), __decorate([a(cc.Color)], t.prototype, "notEnoughColor", void 0), __decorate([a(cc.Color)], t.prototype, "enoughColor", void 0), __decorate([i, r("Common Component/UI/RichTextCounter")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    Room: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f2563cQ7k5PN7EU6i2sHAmB", "Room"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.RoomScale = void 0;
        var o = e("../config/ModeConfig"),
            i = e("../managers/GameManager"),
            a = e("./GameState"),
            r = e("./inventory/components/ItemComponent"),
            s = e("./inventory/components/SpecialItemTracker"),
            c = e("../managers/DataManager"),
            l = e("./ShakeBehaviour"),
            u = e("../audios/AudioConfig"),
            p = e("../audios/AudioManager"),
            d = e("../ui/gameplay/Transition"),
            h = e("../ui/LoadingScreen"),
            m = e("./quests/QuestSystem"),
            f = e("./interactive/NPC"),
            y = e("../common/Resources"),
            g = e("./inventory/Item"),
            v = e("./interactive/Door"),
            _ = cc._decorator,
            b = _.ccclass,
            I = _.property,
            A = _.menu,
            C = "",
            P = {
                artroom: u.HowlsKey.ambience_room1,
                classroom: u.HowlsKey.ambience_room1,
                nursing: u.HowlsKey.ambience_room1,
                library_1: u.HowlsKey.ambience_room2,
                library_2: u.HowlsKey.ambience_room2,
                rooftop: u.HowlsKey.ambience_rooftop,
                fallback: u.HowlsKey.ambience_corridor
            },
            S = function() {
                function e() {
                    this.position = cc.v3(0, 0, 0), this.originRoom = ""
                }
                return __decorate([I(cc.Vec3)], e.prototype, "position", void 0), __decorate([I(cc.String)], e.prototype, "originRoom", void 0), __decorate([b("RoomPlayerSpawnPoint")], e)
            }(),
            k = function() {
                function e() {
                    this.max = 1, this.min = .5, this.maxY = 0, this.minY = 0
                }
                return __decorate([I(cc.Float)], e.prototype, "max", void 0), __decorate([I(cc.Float)], e.prototype, "min", void 0), __decorate([I(cc.Float)], e.prototype, "maxY", void 0), __decorate([I(cc.Float)], e.prototype, "minY", void 0), __decorate([b("RoomScale")], e)
            }();
        n.RoomScale = k;
        var F = !1,
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.playerNode = null, t.itemPrefab = null, t.scale = new k, t.time = 0, t._playerSpawnPoints = {}, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "playerSpawnPoints", {
                    get: function() {
                        var e = [];
                        for (var t in this._playerSpawnPoints)
                            if (this._playerSpawnPoints[t]) {
                                var n = new S;
                                n.position = this._playerSpawnPoints[t], n.originRoom = t, e.push(n)
                            }
                        return e
                    },
                    set: function(e) {
                        this._playerSpawnPoints = {};
                        for (var t = 0, n = 0, o = e; n < o.length; n++) {
                            var i = o[n],
                                a = "" === i.originRoom ? "room_" + t++ : i.originRoom;
                            i.position.z = -1 === i.position.z ? -1 : 1, this._playerSpawnPoints[a] = i.position
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.getName = function() {
                    return cc.director.getScene().name
                }, t.prototype.onQuittingGame = function() {
                    C = "", F = !1, a.default.get().world.currentRoom = void 0
                }, t.prototype.playMusic = function() {}, t.prototype.spawnNPC = function(e, t) {
                    var n = f.getNPCResourceID(e),
                        o = cc.instantiate(y.default.get(n));
                    return o.parent = this.node, o.x = t.x, o.y = t.y, o.zIndex = -o.y, o
                }, t.prototype.spawnItem = function(e, t) {
                    var n, o = cc.instantiate(y.default.get(y.ResourceID.ItemPrefab));
                    return "object" == typeof e ? (n = e.item, t = e.position) : n = new g.default(e), o.parent = this.node, o.x = t.x, o.y = t.y, o.zIndex = -o.y, "object" == typeof e ? (o.getComponent(r.default).info = e, o.addComponent(s.default).itemData = e) : o.getComponent(r.default).item = n, o
                }, t.prototype.spawnItems = function() {
                    for (var e = 0, t = a.default.get().getItemsInRoom(cc.director.getScene().name); e < t.length; e++) {
                        var n = t[e];
                        this.spawnItem(n)
                    }
                }, t.prototype.spawnSavedItems = function(e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var o = n[t],
                            i = cc.instantiate(this.itemPrefab),
                            a = i.getComponent(r.default),
                            s = i.getComponent(cc.PhysicsCollider);
                        i.parent = this.node, i.x = o.position.x, i.y = o.position.y, i.zIndex = -i.y, a.info = o, s.enabled = !0
                    }
                }, t.prototype.loadData = function() {
                    var e = c.default.instance;
                    if (e.gameDataExists()) {
                        var t = a.default.get(),
                            n = e.getStateData();
                        t.deserialize(n);
                        var o = this.getName(),
                            i = t.getItemsInRoom(o);
                        if (this.spawnSavedItems(i), n.player.room === o) {
                            var r = n.player.position;
                            this.playerNode.x = r.x, this.playerNode.y = r.y
                        }
                        for (var s = 0, l = this.getComponentsInChildren(v.default); s < l.length; s++) {
                            var u = l[s];
                            u.setActive(!t.world.doors[u.doorId].locked)
                        }
                    }
                }, t.prototype.addElapsedTime = function() {
                    a.default.get().addTime(Date.now() - this.time)
                }, t.prototype.resetTime = function() {
                    this.time = Date.now()
                }, t.prototype.onLoad = function() {
                    var e = cc.director.getPhysicsManager();
                    if (e.enabled = !0, e.gravity = cc.v2(0, 0), "" === C) h.default.get().out(), this.loadData();
                    else {
                        a.default.get().world.skipIntroTransition || d.default.get().out();
                        var t = this._playerSpawnPoints[C];
                        t && this.playerNode && (this.playerNode.x = t.x, this.playerNode.y = t.y, this.playerNode.children[0].scaleX = t.z), cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function() {
                            c.default.instance.setStateData(a.default.get().serialize())
                        })
                    }
                    i.default.instance.on("gameplay-pause", this.addElapsedTime, this), i.default.instance.on("gameplay-resume", this.resetTime, this), this.resetTime()
                }, t.prototype.start = function() {
                    for (var e, t = 0, n = this.node.children; t < n.length; t++) {
                        var i = n[t];
                        i.zIndex = -i.y
                    }
                    var r = this.getName();
                    this.spawnItems();
                    var s = cc.Camera.main.getComponent(l.default);
                    this.node.on("prop-hit", function() {
                        s.doShake(o.hitShake)
                    }), this.node.on("player-hit", function() {
                        s.doShake(o.dmgShake)
                    }), this.node.on("camp-exited", this.playMusic, this), p.default.instance.playMusic(P[r] ? P[r] : P.fallback);
                    var c = a.default.get().npc;
                    for (var u in a.default.get().npc)(null === (e = c[u].position) || void 0 === e ? void 0 : e.room) === r && this.spawnNPC(~~u, c[u].position.pos);
                    a.default.get().world.currentRoom = this, "" === C ? (h.default.get().once("out-done", function() {
                        m.default.start(), F = !0
                    }), this.loadData()) : F || (m.default.start(), F = !0), C = r
                }, t.prototype.onDestroy = function() {
                    this.addElapsedTime(), i.default.instance.off("gameplay-pause", this.addElapsedTime, this), i.default.instance.off("gameplay-resume", this.resetTime, this)
                }, __decorate([I(cc.Node)], t.prototype, "playerNode", void 0), __decorate([I(cc.Prefab)], t.prototype, "itemPrefab", void 0), __decorate([I(k)], t.prototype, "scale", void 0), __decorate([I({
                    visible: !1
                })], t.prototype, "_playerSpawnPoints", void 0), __decorate([I(S)], t.prototype, "playerSpawnPoints", null), __decorate([b, A("Gameplay Component/Room")], t)
            }(cc.Component);
        n.default = E, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager",
        "../common/Resources": "Resources",
        "../config/ModeConfig": "ModeConfig",
        "../managers/DataManager": "DataManager",
        "../managers/GameManager": "GameManager",
        "../ui/LoadingScreen": "LoadingScreen",
        "../ui/gameplay/Transition": "Transition",
        "./GameState": "GameState",
        "./ShakeBehaviour": "ShakeBehaviour",
        "./interactive/Door": "Door",
        "./interactive/NPC": "NPC",
        "./inventory/Item": "Item",
        "./inventory/components/ItemComponent": "ItemComponent",
        "./inventory/components/SpecialItemTracker": "SpecialItemTracker",
        "./quests/QuestSystem": "QuestSystem"
    }],
    RotateScreenManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2234btF5IBMzZbtjuXe2x2D", "RotateScreenManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../utilities/Utils"),
            i = function(e) {
                function t() {
                    var n = e.call(this) || this;
                    return n.percentSizeImage = 60, n.landscapeLocked = !0, n.portraitLocked = !1, n.idContainerRotation = "orientation-screen", t._instance = n, cc.game.addPersistRootNode(n), n._correctOrientation = !0, o.default.isMobile() && (n.addCSS(), n.addDiv(), n.initListener()), n
                }
                return __extends(t, e), Object.defineProperty(t, "instance", {
                    get: function() {
                        return this._instance || (this._instance = new t), this._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.init = function() {
                    return t.instance
                }, Object.defineProperty(t.prototype, "isCorrectOrientation", {
                    get: function() {
                        return this._correctOrientation
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.addCSS = function() {
                    var e = document.createElement("style");
                    e.innerHTML = "#orientation-screen {\n            margin: 0 auto;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-image: url(rotate.png);\n            background-repeat: no-repeat;\n            background-position: center;\n            background-color: rgb(0, 0, 0);\n            z-index: 999;\n            display: none;\n        }", document.head.appendChild(e)
                }, t.prototype.addDiv = function() {
                    this.divRotate = document.createElement("Div"), this.divRotate.id = this.idContainerRotation, this.divRotate.style.display = "none", this.landscapeLocked && (this.divRotate.style.backgroundSize = this.percentSizeImage + "vw"), this.portraitLocked && (this.divRotate.style.backgroundSize = this.percentSizeImage + "vh"), document.body.appendChild(this.divRotate)
                }, t.prototype.initListener = function() {
                    window.addEventListener("resize", this.checkOrientation.bind(this)), this.checkOrientation()
                }, t.prototype.checkOrientation = function() {
                    var e = cc.game.frame,
                        t = e.clientWidth,
                        n = e.clientHeight;
                    this.landscapeLocked ? t > n ? this.handleCorrect() : this.handleIncorrect() : this.portraitLocked && (t < n ? this.handleCorrect() : this.handleIncorrect())
                }, t.prototype.handleCorrect = function() {
                    this.divRotate && (this.divRotate.style.display = "none", this._correctOrientation || (this._correctOrientation = !0, this.emit(t.KEY_CORRECT_ORIENTATION)))
                }, t.prototype.handleIncorrect = function() {
                    this.divRotate && (this.divRotate.style.display = "block", this._correctOrientation && (this._correctOrientation = !1, this.emit(t.KEY_INCORRECT_ORIENTATION)))
                }, t.KEY_CORRECT_ORIENTATION = "RotateScreenManager_handleCorrect", t.KEY_INCORRECT_ORIENTATION = "RotateScreenManager_handleIncorrect", t._instance = null, t
            }(cc.Node);
        n.default = i, cc._RF.pop()
    }, {
        "../utilities/Utils": "Utils"
    }],
    ScaleFixer: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "87c70X971hKz7aVIY5d7Kpv", "ScaleFixer"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./Room"),
            i = cc._decorator,
            a = i.ccclass,
            r = i.property,
            s = i.menu,
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.target = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = cc.director.getScene(),
                        t = e && e.getComponentInChildren(o.default);
                    t ? (this.roomScale = t.scale, this.target || (this.target = this.node), this.yDelta = this.roomScale.maxY - this.roomScale.minY) : this.destroy()
                }, t.prototype.lateUpdate = function() {
                    var e;
                    e = this.node.y < this.roomScale.minY ? 0 : this.node.y > this.roomScale.maxY ? this.yDelta : this.node.y - this.roomScale.minY;
                    var t = cc.misc.lerp(this.roomScale.max, this.roomScale.min, e / this.yDelta);
                    this.target.scaleX = this.target.scaleX < 0 ? -t : t, this.target.scaleY = t
                }, __decorate([r(cc.Node)], t.prototype, "target", void 0), __decorate([a, s("Gameplay Component/ScaleFixer")], t)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {
        "./Room": "Room"
    }],
    SceneLoader: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "67d92Uz7XpPGqNAeBR/l61v", "SceneLoader"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.scenesToLoad = [], t.indexSceneLoading = 0, t.percentPerScene = 0, t
                }
                var n;
                return __extends(t, e), n = t, t.prototype.start = function() {
                    this.init()
                }, t.prototype.init = function() {
                    this.node.emit(n.KEY_ON_INIT), this.indexSceneLoading = 0, this.percentPerScene = 1 / this.scenesToLoad.length, this.loadScene(this.scenesToLoad[this.indexSceneLoading])
                }, t.prototype.loadScene = function(e) {
                    cc.director.preloadScene(e, this.onProgressScene.bind(this), this.onLoadedScene.bind(this))
                }, t.prototype.onProgressScene = function(e, t) {
                    var o;
                    o = e / t * this.percentPerScene + this.percentPerScene * this.indexSceneLoading, this.node.emit(n.KEY_ON_PROGRESS, o)
                }, t.prototype.onLoadedScene = function(e, t) {
                    e && console.error("Error " + e.name + " while loading: " + t.name), this.indexSceneLoading + 1 === this.scenesToLoad.length ? this.onLoadAllScenes() : (this.indexSceneLoading++, this.loadScene(this.scenesToLoad[this.indexSceneLoading]))
                }, t.prototype.onLoadAllScenes = function() {
                    this.node.emit(n.KEY_ON_COMPLETED)
                }, t.KEY_ON_INIT = "SceneLoader_init", t.KEY_ON_COMPLETED = "SceneLoader_loaded", t.KEY_ON_PROGRESS = "SceneLoader_progress", __decorate([a([cc.String])], t.prototype, "scenesToLoad", void 0), n = __decorate([i], t)
            }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}],
    ShakeBehaviour: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "04df58LWXZFrZLQhWmv1JLu", "ShakeBehaviour"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./Follower"),
            i = cc._decorator,
            a = i.ccclass,
            r = i.menu,
            s = i.requireComponent,
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.doShake = function(e) {
                    for (var t = cc.tween(this.follower.offset), n = e.singleShakeTime, o = Math.ceil(e.totalTime / e.singleShakeTime) - 1; o-- > 0;) {
                        var i = Math.random() > .5 ? 1 : -1,
                            a = Math.random() > .5 ? 1 : -1,
                            r = cc.misc.lerp(e.minMove, e.maxMove, Math.random()),
                            s = cc.misc.lerp(e.minMove, e.maxMove, Math.random());
                        t.to(n, {
                            x: r * i,
                            y: s * a
                        })
                    }
                    t.to(n, {
                        x: 0,
                        y: 0
                    }).start()
                }, t.prototype.pause = function() {
                    cc.director.getActionManager().pauseTarget(this.follower.offset)
                }, t.prototype.resume = function() {
                    cc.director.getActionManager().resumeTarget(this.follower.offset)
                }, t.prototype.onLoad = function() {
                    this.follower = this.getComponent(o.default)
                }, t.prototype.onDestroy = function() {
                    cc.director.getActionManager().removeAllActionsFromTarget(this.follower.offset, !0)
                }, __decorate([a, s(o.default), r("Gameplay Component/ShakeBehaviour")], t)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {
        "./Follower": "Follower"
    }],
    SimplifiedAudioSettingsController: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7175bAtax1KDoVCKW0G1cha", "SimplifiedAudioSettingsController"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.AudioSettingButtonSprites = void 0;
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../managers/DataManager"),
            r = cc._decorator,
            s = r.ccclass,
            c = r.property,
            l = r.menu,
            u = function() {
                function e() {
                    this.normal = null, this.pressed = null, this.hover = null, this.disabled = null
                }
                return __decorate([c(cc.SpriteFrame)], e.prototype, "normal", void 0), __decorate([c(cc.SpriteFrame)], e.prototype, "pressed", void 0), __decorate([c(cc.SpriteFrame)], e.prototype, "hover", void 0), __decorate([c(cc.SpriteFrame)], e.prototype, "disabled", void 0), __decorate([s("AudioSettingButtonSprites")], e)
            }();
        n.AudioSettingButtonSprites = u;
        var p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.audioButton = null, t.audioEnabledSprites = new u, t.audioDisabledSprites = new u, t
            }
            return __extends(t, e), t.prototype.switchAudioState = function() {
                this.playButtonSound(), this.isEnabled = !this.isEnabled, i.default.instance.mute(!this.isEnabled), a.default.instance.audioEnabled(this.isEnabled), this.setFrames()
            }, t.prototype.playButtonSound = function() {
                i.default.instance.playSfx(o.SFXKey.button_general)
            }, t.prototype.changeButtonSprites = function(e, t) {
                e.normalSprite = t.normal, e.pressedSprite = t.pressed, e.hoverSprite = t.hover, e.disabledSprite = t.disabled
            }, t.prototype.suscribeSwitchBehaviour = function(e, t) {
                var n = new cc.Component.EventHandler;
                n.target = this.node, n.component = "SimplifiedAudioSettingsController", n.handler = t, e.clickEvents.push(n)
            }, t.prototype.setFrames = function() {
                this.isEnabled ? this.changeButtonSprites(this.audioButton, this.audioEnabledSprites) : this.changeButtonSprites(this.audioButton, this.audioDisabledSprites)
            }, t.prototype.onLoad = function() {
                this.isEnabled = a.default.instance.isAudioEnabled(), this.audioEnabledSprites.size = this.audioButton.node.getContentSize(), this.audioDisabledSprites.size = this.audioButton.node.getContentSize(), this.setFrames(), this.suscribeSwitchBehaviour(this.audioButton, "switchAudioState")
            }, __decorate([c(cc.Button)], t.prototype, "audioButton", void 0), __decorate([c(u)], t.prototype, "audioEnabledSprites", void 0), __decorate([c(u)], t.prototype, "audioDisabledSprites", void 0), __decorate([s, l("Frontend Component/Input/SimplifiedAudioSettingsController")], t)
        }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../managers/DataManager": "DataManager"
    }],
    SpecialItemTracker: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c8e9cvupKJEeqNMp1C+rB9O", "SpecialItemTracker"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./ItemComponent"),
            i = e("../../GameState"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.menu,
            c = a.requireComponent,
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onPickedUp = function() {
                    i.default.get().removeItemFromRoom(cc.director.getScene().name, this.itemData)
                }, t.prototype.onLoad = function() {
                    this.node.on("picked-up", this.onPickedUp, this)
                }, __decorate([r, c(o.default), s("Gameplay Component/Inventory/SpecialItemTracker")], t)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../../GameState": "GameState",
        "./ItemComponent": "ItemComponent"
    }],
    SpecialItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f1848TL8clATo9shxM7mR9k", "SpecialItem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return __extends(t, e), t
        }(e("./Item").default);
        n.default = o, cc._RF.pop()
    }, {
        "./Item": "Item"
    }],
    SplitCounter: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "62390gidVhCt5vlB3JTO2Lh", "SplitCounter"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../common/PausableComponent"),
            i = cc._decorator,
            a = i.ccclass,
            r = i.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.warningEnabler = 0, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "maxValue", {
                    get: function() {
                        return this.fragments.length
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "visualValue", {
                    get: function() {
                        for (var e = 0; e < this.maxValue && !this.fragments[e].active; ++e);
                        return this.maxValue - e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "value", {
                    get: function() {
                        return this._value
                    },
                    set: function(e) {
                        e > this.maxValue ? e = this.maxValue : e < 0 && (e = 0);
                        var t = this._value;
                        e > t ? ~~t < ~~e ? (this.stopAnimations(), this._value = e, this.playGaining(t)) : (this._value = e, e - ~~e < this.warningEnabler ? this.playWarning() : this.warningActive && this.stopAnimations()) : ~~t > ~~e || t !== e && 0 === e ? (this.stopAnimations(), this._value = e, this.playLosing(t)) : (this._value = e, e - ~~e < this.warningEnabler ? this.playWarning() : this.warningActive && this.stopAnimations())
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "ratio", {
                    get: function() {
                        return this.value / this.maxValue
                    },
                    set: function(e) {
                        this.value = e * this.maxValue
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "warningActive", {
                    get: function() {
                        var e = ~~((this.maxValue - this._value + 1) / 2 - .5),
                            t = this.fragAnimations[e],
                            n = t && t.currentClip,
                            o = n && t.getAnimationState(n.name);
                        return o && "LOOP_losing_life" === o.name && o.isPlaying
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "playingCounterAnim", {
                    get: function() {
                        var e = this.counterAnim.currentClip,
                            t = e && this.counterAnim.getAnimationState(e.name);
                        return t && t.isPlaying
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.setValueNoAnim = function(e) {
                    e > this.maxValue ? e = this.maxValue : e < 0 && (e = 0), this._value = e, this.syncFragments();
                    var t = e - ~~e;
                    t < this.warningEnabler && t > 0 && this.playWarning()
                }, t.prototype.playIncreaseGroup = function() {
                    this.counterAnim.play(this.counterAnim.getClips()[0].name), this.counterAnim.setCurrentTime(0)
                }, t.prototype.playDecreaseGroup = function() {
                    this.counterAnim.play(this.counterAnim.getClips()[1].name), this.counterAnim.setCurrentTime(0)
                }, t.prototype.playWarning = function() {
                    var e = ~~((this.maxValue - this._value + 1) / 2 - .5),
                        t = this.fragAnimations[e],
                        n = t && t.currentClip,
                        o = n && t.getAnimationState(n.name);
                    !t || o && o.isPlaying || t.play("LOOP_losing_life")
                }, t.prototype.stopAnimations = function() {
                    for (var e = 0, t = this.fragAnimations; e < t.length; e++) {
                        var n = t[e];
                        n.setCurrentTime(0), n.stop(), n.off("value-changed"), n.off(cc.Animation.EventType.FINISHED)
                    }
                    this.syncFragments()
                }, t.prototype.playGaining = function(e) {
                    if (!this.playingCounterAnim) {
                        for (var t = this.maxValue, n = ~~(.5 * (t - (e + 1))), o = ~~(.5 * (t - this._value)), i = n; i >= o; --i) this.fragAnimations[i].play("PLAY_life_up");
                        this.fragAnimations[n].once("value-changed", this.syncFragments, this), this.fragAnimations[n].once(cc.Animation.EventType.FINISHED, this.syncAndWarn, this)
                    }
                }, t.prototype.playLosing = function(e) {
                    if (!this.playingCounterAnim) {
                        for (var t = this.maxValue, n = ~~(.5 * (t - (this._value + 1))), o = ~~(.5 * (t - e)); o <= n; ++o) this.fragAnimations[o].play("PLAY_losing_life");
                        this.fragAnimations[n].once("value-changed", this.syncFragments, this), this.fragAnimations[n].once(cc.Animation.EventType.FINISHED, this.syncAndWarn, this)
                    }
                }, t.prototype.syncFragments = function() {
                    for (var e = this.maxValue, t = e; t > 0; --t) this.fragments[t - 1].active = e - t < this._value
                }, t.prototype.syncAndWarn = function() {
                    this.syncFragments(), this._value - ~~this._value < this.warningEnabler ? this.playWarning() : this.warningActive && this.stopAnimations()
                }, t.prototype.addFragments = function() {
                    for (var e = 0; e < 5; ++e) {
                        var t = this.node.children[e];
                        this.fragAnimations.push(t.getComponent(cc.Animation)), this.fragments.push(t.children[0], t.children[1])
                    }
                }, t.prototype.onPause = function() {
                    e.prototype.onPause.call(this), this.counterAnim.pause();
                    for (var t = 0, n = this.fragAnimations; t < n.length; t++) n[t].pause()
                }, t.prototype.onResume = function() {
                    e.prototype.onResume.call(this), this.counterAnim.resume();
                    for (var t = 0, n = this.fragAnimations; t < n.length; t++) n[t].resume()
                }, t.prototype.onLoad = function() {
                    var t = this;
                    e.prototype.onLoad.call(this), this.fragments = [], this.fragAnimations = [], this.counterAnim = this.getComponent(cc.Animation), this.addFragments(), this.counterAnim.on("value-changed", this.syncFragments, this), this.counterAnim.on(cc.Animation.EventType.FINISHED, function() {
                        var e = t.visualValue;
                        t._value > e ? t.playGaining(e) : t._value < e && t.playLosing(e)
                    })
                }, __decorate([a, r("Gameplay Component/UI/HUD/SplitCounter")], t)
            }(o.default);
        n.default = s, cc._RF.pop()
    }, {
        "../../common/PausableComponent": "PausableComponent"
    }],
    SurvivalMode: [function(e, t, n) {
        "use strict";
        var o;
        cc._RF.push(t, "4bb93nNBAJIG60TKPc7mR+8", "SurvivalMode"), Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.GameOverReason = void 0,
            function(e) {
                e[e.ParentsArrived = 0] = "ParentsArrived", e[e.PlayerKilled = 1] = "PlayerKilled", e[e.PlayerStarved = 2] = "PlayerStarved", e[e.PlayerBored = 4] = "PlayerBored", e[e.PlayerStarvedAndBored = 6] = "PlayerStarvedAndBored", e[e.GameCompleted = 8] = "GameCompleted", e[e.GameIsNotOver = 4294967295] = "GameIsNotOver"
            }(o = n.GameOverReason || (n.GameOverReason = {}));
        n.default = function() {
            this.gameOverReason = o.GameIsNotOver
        }, cc._RF.pop()
    }, {}],
    TaskSuccessfulUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "75cd8M8kJBNB7W52H9/p7ml", "TaskSuccessfulUI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.menu,
            r = o.requireComponent,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.play = function(e) {
                    var t = this,
                        n = this.getComponent(cc.Animation);
                    this.node.active = !0, n.play(), n.setCurrentTime(0), n.once(cc.Animation.EventType.FINISHED, function() {
                        t.node.active = !1, e && e()
                    })
                }, t.prototype.onLoad = function() {
                    this.node.active = !1
                }, __decorate([i, r(cc.Animation), a("Gameplay Component/UI/TaskSuccessfulUI")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    TicTacToe: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e67faGStK5NQpiWaFitKwmn", "TicTacToe"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../managers/GameManager"),
            i = function() {
                function e(e) {
                    e ? this.grid = e.grid : this.restartGame()
                }
                return e.prototype.restartGame = function() {
                    this.grid = 0
                }, e.prototype.hasJustStarted = function() {
                    return 0 === this.grid
                }, e.prototype.hasEmptySpaces = function() {
                    for (var t = 0; t < 9; ++t) {
                        var n = 2 * t;
                        if ((this.grid & 3 << n) >> n === e.Mark.Empty) return !0
                    }
                    return !1
                }, e.prototype.getMarkInSlot = function(e, t) {
                    var n = 2 * (e + 3 * t);
                    return (this.grid & 3 << n) >> n
                }, e.prototype.markSlot = function(t, n, o) {
                    var i = this.getMarkInSlot(n, o),
                        a = 2 * (n + 3 * o);
                    if (t !== e.Mark.Empty) {
                        if (i !== e.Mark.Empty) return !1;
                        this.grid |= t << a
                    } else this.grid ^= i << a;
                    return !0
                }, e.prototype.hasWon = function(e, t, n) {
                    var o = (e << 4 | e << 2 | e) << 6 * n;
                    if ((this.grid & o) === o) return !0;
                    var i = (e << 12 | e << 6 | e) << 2 * t;
                    if ((this.grid & i) === i) return !0;
                    var a = (e << 8 | e << 4 | e) << 4;
                    if ((this.grid & a) === a) return !0;
                    var r = e << 16 | e << 8 | e;
                    return (this.grid & r) === r
                }, e.prototype.getWinInfo = function(t) {
                    for (var n = t << 4 | t << 2 | t, o = 0; o < 3; ++o) {
                        var i = n << 6 * o;
                        if ((this.grid & i) === i) return {
                            type: e.WinInfo.Row,
                            n: o
                        }
                    }
                    var a = t << 12 | t << 6 | t;
                    for (o = 0; o < 3; ++o)
                        if (i = a << 2 * o, (this.grid & i) === i) return {
                            type: e.WinInfo.Column,
                            n: o
                        };
                    var r = (t << 8 | t << 4 | t) << 4;
                    if ((this.grid & r) === r) return {
                        type: e.WinInfo.Diagonal,
                        n: 0
                    };
                    var s = t << 16 | t << 8 | t;
                    return (this.grid & s) === s ? {
                        type: e.WinInfo.Diagonal,
                        n: 1
                    } : void 0
                }, e
            }();
        (function(e) {
            (function(e) {
                e[e.Empty = 0] = "Empty", e[e.O = 1] = "O", e[e.X = 2] = "X"
            })(e.Mark || (e.Mark = {})),
            function(e) {
                e[e.Column = 0] = "Column", e[e.Row = 1] = "Row", e[e.Diagonal = 2] = "Diagonal"
            }(e.WinInfo || (e.WinInfo = {}));
            var t = function() {
                function t(e, t) {
                    this.game = e, this._mark = t
                }
                return Object.defineProperty(t.prototype, "mark", {
                    get: function() {
                        return this._mark
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.doMove = function() {
                    return (o.default.cheatsEnabled && o.default.instance.cheatsController.noRandomMovesInTicTacToe ? 1 : Math.random()) > .5 ? this.doSmartMove() : this.doRandomMove()
                }, t.prototype.doSmartMove = function() {
                    var t, n;
                    if (this.game.hasJustStarted()) {
                        var o = 2 * Math.round(4 * Math.random());
                        t = o % 3, n = ~~(o / 3)
                    } else
                        for (var i = void 0, a = 0; a < 9; ++a) {
                            var r = a % 3,
                                s = ~~(a / 3);
                            if (this.game.getMarkInSlot(r, s) === e.Mark.Empty) {
                                var c = this.generateFollowUpMove(r, s, 1, this._mark);
                                void 0 === i ? (i = c, t = r, n = s) : c > i && (i = c, t = r, n = s)
                            }
                        }
                    return this.game.markSlot(this._mark, t, n), {
                        col: t,
                        row: n
                    }
                }, t.prototype.doRandomMove = function() {
                    for (;;) {
                        var t = Math.round(8 * Math.random()),
                            n = t % 3,
                            o = ~~(t / 3);
                        if (this.game.getMarkInSlot(n, o) === e.Mark.Empty) return this.game.markSlot(this._mark, n, o), {
                            col: n,
                            row: o
                        }
                    }
                }, t.prototype.generateFollowUpMove = function(t, n, o, i) {
                    var a;
                    if (this.game.markSlot(i, t, n), this.game.hasWon(i, t, n)) a = i === this._mark ? 1 + 1 / o : -1 - 1 / o;
                    else if (this.game.hasEmptySpaces())
                        for (var r = i === e.Mark.O ? e.Mark.X : e.Mark.O, s = 0; s < 9; ++s) {
                            var c = s % 3,
                                l = ~~(s / 3);
                            if (this.game.getMarkInSlot(c, l) === e.Mark.Empty) {
                                var u = this.generateFollowUpMove(c, l, o + 1, r);
                                void 0 === a ? a = u : this._mark === i && u < a ? a = u : this._mark !== i && u > a && (a = u)
                            }
                        } else a = 0;
                    return this.game.markSlot(e.Mark.Empty, t, n), a
                }, t
            }();
            e.AI = t
        })(i || (i = {})), n.default = i, cc._RF.pop()
    }, {
        "../managers/GameManager": "GameManager"
    }],
    TitleScreenUI: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b20a4qpHRFI+IF0rkBagvgH", "TitleScreenUI"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../audios/AudioConfig"),
            i = e("../audios/AudioManager"),
            a = e("../config/InputConfig"),
            r = e("../gameplay/GameState"),
            s = e("../gameplay/SurvivalMode"),
            c = e("../managers/DataManager"),
            l = e("../managers/GameManager"),
            u = e("./gameplay/PauseUI"),
            p = e("./LoadingScreen"),
            d = cc._decorator,
            h = d.ccclass,
            m = d.property,
            f = d.menu,
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.charactersAnim = null, t.logoAnim = null, t.audioBtnAnim = null, t.playBtnAnim = null, t.anaisAnim = null, t
                }
                var n;
                return __extends(t, e), n = t, t.prototype.startGame = function() {
                    a.uiActions.accept.off("triggered", this.startGame, this), p.default.get().in().once("in-done", this._startGame, this), i.default.instance.playSfx(o.SFXKey.button_general)
                }, t.prototype._startGame = function() {
                    var e = c.default.instance,
                        t = r.default.get(),
                        n = t.player;
                    t.reset(), n.inventory.clear(), u.default.forceEnable(), l.default.instance.mode.gameOverReason = s.GameOverReason.GameIsNotOver, c.default.instance.isFirstTime() ? cc.director.loadScene("comics") : e.gameDataExists() ? cc.director.loadScene(e.getStateData().player.room) : cc.director.loadScene("hw1_entrance")
                }, t.prototype.setupAnims = function() {
                    this.logoAnim.play("IN_logo"), this.logoAnim.setCurrentTime(0), this.logoAnim.pause(), this.audioBtnAnim.play("IN_button"), this.audioBtnAnim.setCurrentTime(0), this.audioBtnAnim.pause(), this.playBtnAnim.play("IN_play_button"), this.playBtnAnim.setCurrentTime(0), this.playBtnAnim.pause()
                }, t.prototype.doAnimations = function() {
                    var e = this;
                    this.logoAnim.resume(), this.logoAnim.once(cc.Animation.EventType.FINISHED, function() {
                        e.audioBtnAnim.resume()
                    }), this.audioBtnAnim.once(cc.Animation.EventType.FINISHED, function() {
                        e.playBtnAnim.resume()
                    }), this.playBtnAnim.once(cc.Animation.EventType.FINISHED, function() {
                        e.playBtnAnim.play("LOOP_play")
                    }), this.charactersAnim.resume()
                }, t.prototype.onLoad = function() {
                    var e = this;
                    this.setupAnims(), n.fromLoading ? (n.fromLoading = !1, this.doAnimations(), i.default.instance.playMusic(o.HowlsKey.music_menu)) : p.default.get().out().once("out-done", function() {
                        e.doAnimations(), i.default.instance.playMusic(o.HowlsKey.music_menu)
                    }), a.uiActions.accept.on("triggered", this.startGame, this)
                }, t.fromLoading = !0, __decorate([m(cc.Animation)], t.prototype, "charactersAnim", void 0), __decorate([m(cc.Animation)], t.prototype, "logoAnim", void 0), __decorate([m(cc.Animation)], t.prototype, "audioBtnAnim", void 0), __decorate([m(cc.Animation)], t.prototype, "playBtnAnim", void 0), __decorate([m(cc.Animation)], t.prototype, "anaisAnim", void 0), n = __decorate([h, f("Frontend Component/TitleScreenUI")], t)
            }(cc.Component);
        n.default = y, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager",
        "../config/InputConfig": "InputConfig",
        "../gameplay/GameState": "GameState",
        "../gameplay/SurvivalMode": "SurvivalMode",
        "../managers/DataManager": "DataManager",
        "../managers/GameManager": "GameManager",
        "./LoadingScreen": "LoadingScreen",
        "./gameplay/PauseUI": "PauseUI"
    }],
    Transition: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ba3eeIgXwtHwoShhVAk97Kv", "Transition"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../common/Resources"),
            r = e("../../gameplay/GameState"),
            s = e("./PauseUI"),
            c = cc._decorator,
            l = c.ccclass,
            u = c.menu,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.animation = null, t
                }
                var n;
                return __extends(t, e), n = t, t.get = function() {
                    return this.current || (cc.instantiate(a.default.get(a.ResourceID.TransitionPrefab)).parent = cc.director.getScene().getChildByName("Canvas")), this.current
                }, t.prototype.in = function() {
                    var e = this;
                    return this.node.active = !0, s.default.enabled = !1, this.animation.play("IN_transition"), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.node.emit("in-done")
                    }), i.default.instance.playSfx(o.SFXKey.transition_in), r.default.get().player.controlEnabled = !1, this
                }, t.prototype.out = function() {
                    var e = this;
                    return this.node.active = !0, s.default.enabled = !0, e.animation.play("OUT_transition"), e.animation.once(cc.Animation.EventType.FINISHED, function() {
                        e.node.active = !1, r.default.get().player.controlEnabled = !0, e.node.emit("out-done")
                    }), i.default.instance.playSfx(o.SFXKey.transition_out), r.default.get().player.controlEnabled = !1, this
                }, t.prototype.once = function(e, t, n, o) {
                    return this.node.active ? this.node.once(e, t, n, o) : t.bind(n)(), this
                }, t.prototype.updateFrameSize = function() {
                    var e = cc.game.frame,
                        t = e.clientWidth * (this.node.height / Math.max(1, e.clientHeight));
                    if (!(t <= this.node.width)) {
                        var n = this.node.children[1],
                            o = this.node.children[2],
                            i = .5 * t - n.x;
                        n.width = i, o.width = i
                    }
                }, t.prototype.onLoad = function() {
                    n.current = this, this.node.zIndex = 999, this.node.active = !1, this.animation = this.getComponent(cc.Animation)
                }, t.prototype.onDestroy = function() {
                    n.current === this && delete n.current
                }, t.prototype.onEnable = function() {
                    this.resizeFunctionHandle = this.updateFrameSize.bind(this), window.addEventListener("resize", this.resizeFunctionHandle), this.updateFrameSize()
                }, t.prototype.onDisable = function() {
                    window.removeEventListener("resize", this.resizeFunctionHandle), this.resizeFunctionHandle = void 0
                }, n = __decorate([l, u("Gameplay Component/UI/Transition")], t)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../common/Resources": "Resources",
        "../../gameplay/GameState": "GameState",
        "./PauseUI": "PauseUI"
    }],
    TutorialPanel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c9e077rZBJH/bBoRroEl+aa", "TutorialPanel"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../audios/AudioConfig"),
            i = e("../../../audios/AudioManager"),
            a = e("../../../config/InputConfig"),
            r = e("./Panel"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.okButton = null, t
                }
                return __extends(t, e), t.prototype.show = function() {
                    var t = this;
                    e.prototype.show.call(this), this.animation.once(cc.Animation.EventType.FINISHED, function() {
                        a.uiActions.accept.on("triggered", t.onOk, t)
                    }), this.okButton.play("IN_button"), this.okButton.setCurrentTime(0), this.okButton.once(cc.Animation.EventType.FINISHED, function() {
                        t.okButton.play("LOOP_button")
                    }), i.default.instance.playRandomSfx([o.SFXKey.tutorial_in1, o.SFXKey.tutorial_in2, o.SFXKey.tutorial_in3])
                }, t.prototype.hide = function() {
                    e.prototype.hide.call(this), this.okButton.play("OUT_button"), a.uiActions.accept.off("triggered", this.onOk, this)
                }, t.prototype.onOk = function() {
                    var e;
                    "LOOP_button" === (null === (e = this.okButton.currentClip) || void 0 === e ? void 0 : e.name) && (this.hide(), i.default.instance.playSfx(o.SFXKey.button_general))
                }, __decorate([l(cc.Animation)], t.prototype, "okButton", void 0), __decorate([c], t)
            }(r.default);
        n.default = u, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager",
        "../../../config/InputConfig": "InputConfig",
        "./Panel": "Panel"
    }],
    TutorialSummary: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4b086ViY8lGTqcSreZp3sq1", "TutorialSummary"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../audios/AudioConfig"),
            i = e("../audios/AudioManager"),
            a = e("../config/InputConfig"),
            r = e("../localization/LocalizationRichTextComponent"),
            s = e("../utilities/Utils"),
            c = cc._decorator,
            l = c.ccclass,
            u = c.property,
            p = c.menu,
            d = ["tutorial_move_desktop", "tutorial_interact_desktop", "tutorial_eat_desktop", "tutorial_comment2", "tutorial_comment3", "tutorial_comment6", "tutorial_dry_desktop"],
            h = {
                0: {
                    key: "tutorial_move_mobile",
                    search: "[MOVEMENT_INPUT]",
                    replace: "<img src='dpad_base' />"
                },
                1: {
                    key: "tutorial_interact_mobile",
                    search: "[ACTION_INPUT]",
                    replace: "<img src='action_btn' />"
                },
                2: {
                    key: "tutorial_eat_mobile",
                    search: "[EAT_INPUT]",
                    replace: "<img src='eat_btn' />"
                },
                6: {
                    key: "tutorial_dry_mobile",
                    search: "[ACTION_INPUT]",
                    replace: "<img src='action_btn' />"
                }
            },
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.overlay = null, t.popupAnim = null, t.exitBtnAnim = null, t.descrLabel = null, t.pageLabel = null, t.pagesParent = null, t.leftArrow = null, t.rightArrow = null, t.currentPage = 1, t
                }
                return __extends(t, e), Object.defineProperty(t.prototype, "overlayOpacity", {
                    get: function() {
                        return this.overlay.opacity
                    },
                    set: function(e) {
                        this.overlay.opacity = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onNextPage = function() {
                    this.currentPage < 7 && (cc.find("tutorial_" + this.currentPage, this.pagesParent).active = !1, ++this.currentPage, this.updatePage(), 7 === this.currentPage ? this.rightArrow.opacity = 128 : 2 === this.currentPage && (this.leftArrow.opacity = 255), i.default.instance.playSfx(o.SFXKey.campfire_arrow))
                }, t.prototype.onPrevPage = function() {
                    this.currentPage > 1 && (cc.find("tutorial_" + this.currentPage, this.pagesParent).active = !1, --this.currentPage, this.updatePage(), 1 === this.currentPage ? this.leftArrow.opacity = 128 : 6 === this.currentPage && (this.rightArrow.opacity = 255), i.default.instance.playSfx(o.SFXKey.campfire_arrow))
                }, t.prototype.show = function() {
                    var e = this;
                    this.node.active || (this.node.active = !0, 1 !== this.currentPage && (cc.find("tutorial_" + this.currentPage, this.pagesParent).active = !1, this.currentPage = 1, this.leftArrow.opacity = 128, this.rightArrow.opacity = 255), this.updatePage(), this.popupAnim.play("IN_menu"), this.popupAnim.setCurrentTime(0), this.exitBtnAnim.play("IN_button"), this.exitBtnAnim.setCurrentTime(0), this.popupAnim.once(cc.Animation.EventType.FINISHED, function() {
                        e.popupAnim.play("LOOP_build_popup")
                    }), i.default.instance.playSfx(o.SFXKey.popup_open))
                }, t.prototype.hide = function() {
                    var e = this,
                        t = this.popupAnim.currentClip,
                        n = t && this.popupAnim.getAnimationState(t.name);
                    !this.node.active || t && "LOOP_build_popup" !== t.name && n.isPlaying || (this.popupAnim.play("OUT_menu"), this.exitBtnAnim.play("OUT_button"), this.popupAnim.once(cc.Animation.EventType.FINISHED, function() {
                        e.node.emit("hidden"), e.node.active = !1
                    }), i.default.instance.playSfx(o.SFXKey.button_back), i.default.instance.playSfx(o.SFXKey.popup_close))
                }, t.prototype.onMove = function(e) {
                    var t = e.getUserData();
                    t.x > 0 ? this.onNextPage() : t.x < 0 && this.onPrevPage()
                }, t.prototype.updatePage = function() {
                    var e = this.currentPage - 1;
                    s.default.isMobile() && h[e] ? this.descrLabel.setKey(h[e].key, h[e].search, h[e].replace) : this.descrLabel.setKey(d[e]), this.pageLabel.string = this.currentPage + "/7", cc.find("tutorial_" + this.currentPage, this.pagesParent).active = !0
                }, t.prototype.onEnable = function() {
                    a.uiActions.cancel.on("triggered", this.hide, this), a.uiActions.select.on("value-changed", this.onMove, this), a.uiActions.select.on("text-pressed", this.onMove, this)
                }, t.prototype.onDisable = function() {
                    a.uiActions.cancel.off("triggered", this.hide, this), a.uiActions.select.off("value-changed", this.onMove, this), a.uiActions.select.off("text-pressed", this.onMove, this)
                }, __decorate([u(cc.Node)], t.prototype, "overlay", void 0), __decorate([u(cc.Animation)], t.prototype, "popupAnim", void 0), __decorate([u(cc.Animation)], t.prototype, "exitBtnAnim", void 0), __decorate([u(r.default)], t.prototype, "descrLabel", void 0), __decorate([u(cc.Label)], t.prototype, "pageLabel", void 0), __decorate([u(cc.Node)], t.prototype, "pagesParent", void 0), __decorate([u(cc.Node)], t.prototype, "leftArrow", void 0), __decorate([u(cc.Node)], t.prototype, "rightArrow", void 0), __decorate([l, p("Frontend Component/TutorialSummary")], t)
            }(cc.Component);
        n.default = m, cc._RF.pop()
    }, {
        "../audios/AudioConfig": "AudioConfig",
        "../audios/AudioManager": "AudioManager",
        "../config/InputConfig": "InputConfig",
        "../localization/LocalizationRichTextComponent": "LocalizationRichTextComponent",
        "../utilities/Utils": "Utils"
    }],
    UIConfig: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c3dfaPKPNdPdJgBOmKqShE6", "UIConfig"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = {
            mapHallPlayerIconScale: 1,
            mapRoomPlayerIconScale: .7,
            mapHallQuestIconScale: 1.3,
            mapRoomQuestIconScale: .8,
            mapMiniQuestIconScale: .5
        }, cc._RF.pop()
    }, {}],
    Utils: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "98164IBpv1HXLibFQQ1UeXD", "Utils"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.isMobile = function() {
                return (cc.sys.isMobile || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream
            }, e.randomRange = function(e, t) {
                return cc.misc.lerp(e, t, Math.random())
            }, e
        }();
        n.default = o, cc._RF.pop()
    }, {}],
    VentDoor: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ad86esRZLNDFq3zLitdx1+K", "VentDoor"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../audios/AudioConfig"),
            i = e("../../audios/AudioManager"),
            a = e("../../common/Resources"),
            r = e("../../ui/gameplay/PauseUI"),
            s = e("../../ui/gameplay/Transition"),
            c = e("../GameState"),
            l = e("../WorldInfo"),
            u = e("./Door"),
            p = cc._decorator,
            d = p.ccclass,
            h = p.menu,
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.doAction = function() {
                    if (!this.enabled) return !1;
                    if (!this.canPerformAction()) return !1;
                    var e = c.default.get(),
                        t = e.world,
                        n = t.doors[this.doorId],
                        u = t.currentRoom.getName() === n.roomA ? n.roomB : n.roomA;
                    return t.environmentFlags & l.EnvironmentFlags.NurseDoorUnlocked ? s.default.get().in().once("in-done", function() {
                        cc.director.loadScene(u)
                    }) : (e.ui.instance.fadeIn(1, function() {
                        e.ui.instance.showCustomEventPanel(a.ResourceID.VentPanel).once("hid", function() {
                            cc.director.loadScene(u, function() {
                                r.default.forceEnable(), e.ui.instance.fadeOut(1, function() {
                                    cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function() {
                                        e.player.controlEnabled = !0
                                    })
                                }), cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function() {
                                    delete t.skipIntroTransition
                                })
                            })
                        })
                    }), t.skipIntroTransition = !0), this.enabled = !1, i.default.instance.playSfx(o.SFXKey.door_interaction), !0
                }, __decorate([d, h("Gameplay Component/Props/VentDoor")], t)
            }(u.default);
        n.default = m, cc._RF.pop()
    }, {
        "../../audios/AudioConfig": "AudioConfig",
        "../../audios/AudioManager": "AudioManager",
        "../../common/Resources": "Resources",
        "../../ui/gameplay/PauseUI": "PauseUI",
        "../../ui/gameplay/Transition": "Transition",
        "../GameState": "GameState",
        "../WorldInfo": "WorldInfo",
        "./Door": "Door"
    }],
    VentPanelAudio: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4975a+GsoBB/LIr4d6Oh/2b", "VentPanelAudio"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../../audios/AudioConfig"),
            i = e("../../../audios/AudioManager"),
            a = cc._decorator.ccclass,
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    i.default.instance.playSfx(o.SFXKey.banner_air_duct)
                }, __decorate([a], t)
            }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {
        "../../../audios/AudioConfig": "AudioConfig",
        "../../../audios/AudioManager": "AudioManager"
    }],
    VirtualAnalogStick: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a1d8ePnEh5EMZ69/x6qryT7", "VirtualAnalogStick"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../../managers/GameManager"),
            i = e("../gameplay/Transition"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = void 0;

        function u(e) {
            var t = new cc.Event.EventCustom("vhid-analogstick", !1);
            t.setUserData(e), cc.systemEvent.dispatchEvent(t)
        }

        function p() {
            l = void 0, u(cc.v2(0, 0))
        }
        var d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.stickNode = null, t
            }
            return __extends(t, e), t.prototype.setStickPos = function(e) {
                var t = .5 * (this.node.width - this.stickNode.width);
                e.mag() > t && e.normalizeSelf().mulSelf(t), this.stickNode.x = e.x, this.stickNode.y = e.y, u(e.normalizeSelf())
            }, t.prototype.resetStickPos = function() {
                this.setStickPos(cc.v2(0, 0))
            }, t.prototype.onTouchStart = function(e) {
                var t = this.node.convertToNodeSpaceAR(e.getLocation());
                l = e.touch.getID(), this.setStickPos(t)
            }, t.prototype.onTouchMove = function(e) {
                var t = this.node.convertToNodeSpaceAR(e.getLocation());
                this.setStickPos(t)
            }, t.prototype.onTouchEnd = function() {
                this.stickNode.x = 0, this.stickNode.y = 0, p()
            }, t.prototype.onLoad = function() {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
                var t = cc.internal.inputManager,
                    n = t._touchesIntegerDict[l];
                if (void 0 !== n) {
                    var a = l;
                    i.default.get().once("out-done", function() {
                        if (n === t._touchesIntegerDict[a]) {
                            var o = t._touches[n],
                                i = e.node._touchListener,
                                r = cc.internal.eventManager,
                                s = new cc.Event.EventTouch([o]);
                            s._eventCode = 0, s.currentTouch = o, s._propagationStopped = s._propagationImmediateStopped = !1, s.type = cc.Node.EventType.TOUCH_START, s.touch = o, s.bubbles = !0, e.onTouchStart(s), i._claimedTouches.push(o), r._currentTouchListener = i, r._currentTouch = o
                        }
                    })
                }
                p(), o.default.instance.on("gameplay-pause", this.resetStickPos, this)
            }, t.prototype.onDestroy = function() {
                o.default.instance.off("gameplay-pause", this.resetStickPos, this)
            }, __decorate([s(cc.Node)], t.prototype, "stickNode", void 0), __decorate([r, c("Common Component/UI/VirtualAnalogStick")], t)
        }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "../../managers/GameManager": "GameManager",
        "../gameplay/Transition": "Transition"
    }],
    VirtualButton: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1397aFkfTdGmZhHwH6lgePJ", "VirtualButton"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = cc._decorator,
            i = o.ccclass,
            a = o.property,
            r = o.menu,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.id = "", t
                }
                return __extends(t, e), t.prototype.onTouchStart = function() {
                    var e = new cc.Event.EventCustom("vhid-buttondown", !1);
                    e.setUserData({
                        id: this.id
                    }), cc.systemEvent.dispatchEvent(e)
                }, t.prototype.onTouchEnd = function() {
                    var e = new cc.Event.EventCustom("vhid-buttonup", !1);
                    e.setUserData({
                        id: this.id
                    }), cc.systemEvent.dispatchEvent(e)
                }, t.prototype.onLoad = function() {
                    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
                }, __decorate([a], t.prototype, "id", void 0), __decorate([i, r("Common Component/UI/VirtualButton")], t)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    WaitListener: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c7da7tHjLBLVaRHQZP+nSFn", "WaitListener"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.NPCAnimationListener = n.ArrivalListener = n.ItemPickedUpListener = n.MinigameDoneListener = n.PropRequestFulfilledListener = n.CharacterRequestFulfilledListener = n.PropInteractionListener = n.CharacterInteractionListener = n.PropWaitListener = n.CharacterWaitListener = n.WaitListener = void 0;
        var o = e("../GameState"),
            i = e("../interactive/InteractiveProp"),
            a = function(e) {
                this.callbacks = e
            };
        n.WaitListener = a;
        var r = function(e) {
            function t(t, n) {
                var o = e.call(this, t) || this;
                return o.npcType = n, o
            }
            return __extends(t, e), Object.defineProperty(t.prototype, "npcNode", {
                get: function() {
                    var e;
                    return null === (e = o.default.get().npc[this.npcType].instance) || void 0 === e ? void 0 : e.node
                },
                enumerable: !1,
                configurable: !0
            }), t
        }(a);
        n.CharacterWaitListener = r;
        var s = function(e) {
            function t(t, n) {
                var o = e.call(this, t) || this;
                return o.propId = n, o
            }
            return __extends(t, e), Object.defineProperty(t.prototype, "propNode", {
                get: function() {
                    var e, t;
                    return null === (t = null === (e = o.default.get().props[this.propId]) || void 0 === e ? void 0 : e.instance) || void 0 === t ? void 0 : t.node
                },
                enumerable: !1,
                configurable: !0
            }), t
        }(a);
        n.PropWaitListener = s;
        var c = function(e) {
            function t(t, n, i) {
                var a = e.call(this, t, n) || this;
                a.markers = i;
                var r = o.default.get(),
                    s = r.npc[n];
                return r.ui.instance.updateQuestRoom(s.position.room, a.markers), a
            }
            return __extends(t, e), t.prototype.listen = function() {
                var e = this;
                this.hasListenBeenCalled = !0;
                var t = this.npcNode;
                t && (this.markers && (this.markerUuid = o.default.get().ui.instance.createMarker(this.npcNode)), t.once("action-done", function() {
                    e.markers && o.default.get().ui.instance.destroyMarker(e.npcNode, e.markerUuid), e.callbacks.onAction && e.callbacks.onAction()
                }))
            }, t
        }(r);
        n.CharacterInteractionListener = c;
        var l = function(e) {
            function t(t, n, i, a) {
                var r = e.call(this, t, n) || this;
                r.markers = a;
                var s = o.default.get(),
                    c = s.props[n];
                return c ? c.room = i : s.props[n] = {
                    active: void 0,
                    instance: void 0,
                    request: void 0,
                    room: i
                }, s.ui.instance.updateQuestRoom(i, r.markers), r
            }
            return __extends(t, e), t.prototype.listen = function() {
                var e = this;
                this.hasListenBeenCalled = !0;
                var t = this.propNode;
                t && (this.markers && (this.markerUuid = o.default.get().ui.instance.createMarker(this.propNode)), t.once("action-done", function() {
                    e.markers && o.default.get().ui.instance.destroyMarker(e.propNode, e.markerUuid), e.callbacks.onAction && e.callbacks.onAction()
                }))
            }, t
        }(s);
        n.PropInteractionListener = l;
        var u = function(e) {
            function t(t, n, i, a) {
                var r = e.call(this, t, n) || this;
                r.propsOfInterest = i.map(function(e) {
                    return e.id
                }), r.markers = a;
                for (var s = o.default.get(), c = 0; c < i.length; c++) {
                    var l = i[c],
                        u = l.id;
                    s.props[u] || (s.props[u] = {
                        active: void 0,
                        instance: void 0,
                        request: void 0,
                        room: void 0
                    }), s.props[u].room = l.room
                }
                var p = s.npc[n];
                return s.ui.instance.updateQuestRoom(p.position.room, a), r
            }
            return __extends(t, e), t.prototype.listen = function() {
                var e = this;
                this.hasListenBeenCalled = !0;
                var t = this.npcNode;
                t ? (t.once("request-fulfilled", this.callbacks.onRequestFulfilled), this.markers && (this.markerUuid = o.default.get().ui.instance.createMarker(this.npcNode)), 0 == (1 & this.state) ? t.once("action-done", function() {
                    e.state |= 1, e.markers && o.default.get().ui.instance.destroyMarker(e.npcNode, e.markerUuid), e.setupNextPropInSequence(), e.callbacks.onAction && e.callbacks.onAction()
                }) : this.setupNextPropInSequence()) : 1 == (1 & this.state) && this.setupNextPropInSequence()
            }, t.prototype.setupNextPropInSequence = function() {
                var e = this,
                    t = this.state >> 1,
                    n = o.default.get();
                if (t >= this.propsOfInterest.length) {
                    var a = n.npc[this.npcType];
                    n.ui.instance.updateQuestRoom(a.position.room, this.markers)
                } else {
                    var r = n.props[this.propsOfInterest[t]];
                    if (n.ui.instance.updateQuestRoom(r.room, this.markers), r.instance) {
                        var s = r.instance;
                        if (this.markers && !s.node.getChildByUuid(this.markerUuid) && (this.markerUuid = n.ui.instance.createMarker(s.node)), s.effectType === i.EffectType.Drop) {
                            var c = n.world.currentRoom.getName(),
                                l = s.dropEffect.drop,
                                u = n.getItemInRoom(c, l);
                            u && u.instance ? (this.markers && (n.ui.instance.destroyMarker(s.node, this.markerUuid), this.markerUuid = n.ui.instance.createMarker(u.instance.node)), u.instance.node.once("picked-up", function() {
                                e.markers && n.ui.instance.destroyMarker(u.instance.node, e.markerUuid), e.state = t + 1 << 1 | 1 & e.state, e.setupNextPropInSequence()
                            })) : (r.active = !0, s.setActive(!0), s.node.once("request-fulfilled", this.setupNextPropInSequence, this))
                        } else r.active = !0, s.setActive(!0), s.node.once("request-fulfilled", this.setupNextPropInSequence, this)
                    }
                }
            }, t
        }(r);
        n.CharacterRequestFulfilledListener = u;
        var p = function(e) {
            function t(t, n, i, a) {
                var r = e.call(this, t, n) || this;
                r.propsOfInterest = a;
                for (var s = o.default.get(), c = 0, l = a; c < l.length; c++) {
                    var u = l[c],
                        p = u.id;
                    s.props[p] || (s.props[p] = {
                        active: void 0,
                        instance: void 0,
                        request: void 0,
                        room: void 0
                    }), s.props[p].room = u.room
                }
                return s.props[n] ? s.props[n].room = i : s.props[n] = {
                    active: void 0,
                    instance: void 0,
                    request: void 0,
                    room: i
                }, s.ui.instance.updateQuestRoom(i, !1), r
            }
            return __extends(t, e), t.prototype.listen = function() {
                this.hasListenBeenCalled = !0;
                var e = this.propNode;
                e ? (e.on("request-fulfilled", this.onRequestFulfilled, this), 0 == (1 & this.state) ? e.on("action-done", this.onActionDone, this) : this.setupNextPropInSequence()) : 1 == (1 & this.state) && this.setupNextPropInSequence()
            }, t.prototype.onActionDone = function(e) {
                this.propId === e.name && (this.state |= 1, this.setupNextPropInSequence(), this.callbacks.onAction && this.callbacks.onAction(), this.propNode.off("action-done", this.onActionDone, this))
            }, t.prototype.onRequestFulfilled = function(e) {
                this.propId === e.name && (this.callbacks.onRequestFulfilled(), this.propNode.off("request-fulfilled", this.onRequestFulfilled, this))
            }, t.prototype.setupNextPropInSequence = function() {
                var e = this,
                    t = this.state >> 1;
                if (!(t >= this.propsOfInterest.length)) {
                    var n = o.default.get(),
                        a = n.props[this.propsOfInterest[t]];
                    if (a.instance) {
                        var r = a.instance;
                        if (r.effectType === i.EffectType.Drop) {
                            var s = n.world.currentRoom.getName(),
                                c = r.dropEffect.drop,
                                l = n.getItemInRoom(s, c);
                            l && l.instance ? l.instance.node.once("picked-up", function() {
                                e.state = t + 1 << 1 | 1 & e.state, e.setupNextPropInSequence()
                            }) : (a.active = !0, r.setActive(!0), r.node.once("request-fulfilled", this.setupNextPropInSequence, this))
                        } else a.active = !0, r.setActive(!0), r.node.once("request-fulfilled", this.setupNextPropInSequence, this)
                    }
                }
            }, t
        }(s);
        n.PropRequestFulfilledListener = p;
        var d = function(e) {
            function t(t, n, i, a) {
                var r = e.call(this, t, n) || this;
                return r.markers = a, o.default.get().ui.instance.updateQuestRoom(i, a), r
            }
            return __extends(t, e), t.prototype.listen = function() {
                var e = this;
                this.hasListenBeenCalled = !0;
                var t = this.propNode;
                if (t) {
                    t.once("minigame-done", this.callbacks.onMingameDone);
                    var n = o.default.get();
                    this.markers && (this.markerUuid = n.ui.instance.createMarker(this.propNode)), 0 == (1 & this.state) && t.once("action-done", function() {
                        e.state |= 1, e.markers && n.ui.instance.destroyMarker(e.propNode, e.markerUuid), e.callbacks.onAction && e.callbacks.onAction()
                    })
                }
            }, t
        }(s);
        n.MinigameDoneListener = d;
        var h = function(e) {
            function t(t, n, i) {
                var a = e.call(this, t) || this;
                return a.room = n, a.item = i, o.default.get().ui.instance.updateQuestRoom(n), a
            }
            return __extends(t, e), t.prototype.listen = function() {
                this.hasListenBeenCalled = !0;
                var e = o.default.get().getItemInRoom(this.room, this.item);
                e.instance && e.instance.node.once("picked-up", this.callbacks.onPickedUp)
            }, t
        }(a);
        n.ItemPickedUpListener = h;
        var m = function(e) {
            function t(t, n, i) {
                var a = e.call(this, t) || this;
                return a.room = n, o.default.get().ui.instance.updateQuestRoom(n, i), a
            }
            return __extends(t, e), t.prototype.listen = function() {
                this.hasListenBeenCalled = !0, o.default.get().world.currentRoom.getName() === this.room && this.callbacks.onArrival()
            }, t
        }(a);
        n.ArrivalListener = m;
        var f = function(e) {
            function t(t, n, o) {
                var i = e.call(this, t, n) || this;
                return i.clipList = o, i
            }
            return __extends(t, e), t.prototype.listen = function() {
                this.hasListenBeenCalled = !0;
                var e = this.npcNode;
                e && (e.on("animation-finished", this.onAnimationFinished, this), this.playAnimation())
            }, t.prototype.playAnimation = function() {
                if (this.state >= this.clipList.length) this.onSequenceFinished();
                else {
                    var e = this.clipList[this.state];
                    if (!e) return ++this.state, void this.playAnimation();
                    var t = o.default.get().npc[this.npcType].instance;
                    t.isAnimationClipLooped(e) && this.onSequenceFinished(), t.playAnimation(e)
                }
            }, t.prototype.onAnimationFinished = function() {
                ++this.state, this.playAnimation()
            }, t.prototype.onSequenceFinished = function() {
                this.npcNode.off("animation-finished", this.onAnimationFinished, this), this.callbacks.onSequenceFinished()
            }, t
        }(r);
        n.NPCAnimationListener = f, cc._RF.pop()
    }, {
        "../GameState": "GameState",
        "../interactive/InteractiveProp": "InteractiveProp"
    }],
    WorldInfo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a52e0WuO2tHYLYVnefqGZf0", "WorldInfo"), Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.EnvironmentFlags = void 0,
            function(e) {
                e[e.GymHallPanelActive = 1] = "GymHallPanelActive", e[e.GymHallBarrierRemoved = 2] = "GymHallBarrierRemoved", e[e.StairsHallPanelOpen = 4] = "StairsHallPanelOpen", e[e.StairsHallPanelActive = 8] = "StairsHallPanelActive", e[e.StairsHallLockerOpen = 16] = "StairsHallLockerOpen", e[e.ArtHallVentEmpty = 32] = "ArtHallVentEmpty", e[e.ArtHallDoorUnlocked = 64] = "ArtHallDoorUnlocked", e[e.ArtHallJuiceBought = 128] = "ArtHallJuiceBought", e[e.ArtHallLockerOpen = 256] = "ArtHallLockerOpen", e[e.PosterRedPainted = 512] = "PosterRedPainted", e[e.PosterBluePainted = 1024] = "PosterBluePainted", e[e.PosterGreenPainted = 2048] = "PosterGreenPainted", e[e.RoofHallLockerOpen = 4096] = "RoofHallLockerOpen", e[e.LibraryHallDoorUnlocked = 8192] = "LibraryHallDoorUnlocked", e[e.LibraryHallNoteTaken = 16384] = "LibraryHallNoteTaken", e[e.BlackboardNumberWritten = 32768] = "BlackboardNumberWritten", e[e.BrokenTVScreen = 65536] = "BrokenTVScreen", e[e.SelfieStickTaken = 131072] = "SelfieStickTaken", e[e.HammerTaken = 262144] = "HammerTaken", e[e.LibraryFoamed = 524288] = "LibraryFoamed", e[e.BlowgunTaken = 1048576] = "BlowgunTaken", e[e.FireExtinguisherTaken = 2097152] = "FireExtinguisherTaken", e[e.ComputerFixed = 4194304] = "ComputerFixed", e[e.ComputerHacked = 8388608] = "ComputerHacked", e[e.CabinetOpen = 16777216] = "CabinetOpen", e[e.NurseDoorUnlocked = 33554432] = "NurseDoorUnlocked", e[e.BroomstickTaken = 67108864] = "BroomstickTaken", e[e.CoinTaken = 134217728] = "CoinTaken", e[e.GumTaken = 268435456] = "GumTaken", e[e.ClockUpdated = 536870912] = "ClockUpdated", e[e.GymHallPanelOpen = 8388608] = "GymHallPanelOpen", e[e.StairsHallLightsOn = 8] = "StairsHallLightsOn", e[e.PosterPainted = 3584] = "PosterPainted", e[e.BlowgunVisible = 4194304] = "BlowgunVisible", e[e.None = 0] = "None"
            }(n.EnvironmentFlags || (n.EnvironmentFlags = {})), cc._RF.pop()
    }, {}]
}, {}, ["AudioConfig", "AudioManager", "HTMLLoader", "PausableComponent", "Resources", "InputAction", "InputBindings", "InputDevice", "InputKeyboardDevice", "InputSystem", "InputVirtualDevice", "BlurEffect", "RenderTextureTarget", "EnemyConfig", "GameConfig", "InputConfig", "ItemConfig", "ModeConfig", "PlayerStatsConfig", "PropsConfig", "UIConfig", "BootController", "CheatsController", "GameplayController", "MainmenuController", "InventoryController", "PlayerController", "Anais", "BalloonFixer", "BaseEnvironmentProp", "Character", "DepthFixer", "EnvironmentFrame", "EnvironmentFx", "EnvironmentProp", "Follower", "GameState", "Parallax", "PlayerInfo", "Room", "ScaleFixer", "ShakeBehaviour", "SurvivalMode", "TicTacToe", "WorldInfo", "CombinationLockProp", "Door", "EventPanelPropListener", "GymDoorProp", "InteractiveEntity", "InteractiveProp", "InteractivePropAudio", "NPC", "NoteProp", "PCScreenFrameUpdater", "PadlockProp", "PaintCanProp", "PassThroughBehaviour", "VentDoor", "FoodItem", "Inventory", "Item", "ItemStack", "SpecialItem", "InventoryActions", "ItemComponent", "SpecialItemTracker", "BaseMinigame", "CombinationLock", "Padlock", "PostIt", "QuestSystem", "WaitListener", "SceneLoader", "LocalizationConfig", "LocalizationImageComponent", "LocalizationLabelComponent", "LocalizationManager", "LocalizationRichTextComponent", "DataManager", "FocusManager", "GameManager", "InteractBallonManager", "ItemAssetsManager", "PooledEffectsManager", "RotateScreenManager", "ComicScreen", "GameOverScreen", "HowToPopup", "LoadingScreen", "TitleScreenUI", "TutorialSummary", "CheatUI", "CounterComponent", "CriticalHealthEffect", "Fade", "GameUI", "HUD", "InventoryHUD", "Map", "PauseUI", "RichTextCounter", "SplitCounter", "TaskSuccessfulUI", "Transition", "BellPanelAudio", "EventPanel", "FireExtinguisherPanelAudio", "HintEventPanel", "IdleAnimEventPanel", "InputTutorialPanel", "MultiTextTutorialPanel", "PCVideoHintEventPanel", "Panel", "TutorialPanel", "VentPanelAudio", "BaseInfoTutorial", "DisableAfterMethodCall", "FoodTutorial", "InfoPanel", "MobileInput", "SimplifiedAudioSettingsController", "VirtualAnalogStick", "VirtualButton", "Enumerators", "Utils"]);