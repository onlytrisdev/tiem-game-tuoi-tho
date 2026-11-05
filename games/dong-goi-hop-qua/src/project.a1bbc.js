window.__require = function e(t, o, n) {
    function i(c, s) {
        if (!o[c]) {
            if (!t[c]) {
                var l = c.split("/");
                if (l = l[l.length - 1], !t[l]) {
                    var r = "function" == typeof __require && __require;
                    if (!s && r) return r(l, !0);
                    if (a) return a(l, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = l
            }
            var h = o[c] = {
                exports: {}
            };
            t[c][0].call(h.exports, function(e) {
                return i(t[c][1][e] || e)
            }, h, h.exports, e, t, o, n)
        }
        return o[c].exports
    }
    for (var a = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
    return i
}({
    AgeLimit: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d6a97foHP5Ds5TTmOdr6CWj", "AgeLimit"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.hw ? this.node.active = !1 : this.node.active = !0
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    AudioSourceScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "41a7a0flIVBG4Y5q1JkSRXU", "AudioSourceScript"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {},
            start: function() {
                this.gameBj = null
            },
            init: function() {
                cc.audioEngine.setMusicVolume(.6), cc.audioEngine.setEffectsVolume(1), this.gameBj = null, this.playingSoundData = {}
            },
            onPlayBjM: function() {
                this.onStopBjM();
                var e = this.onGetAudioClips("bgm_game");
                e && cc.audioEngine.playMusic(e, !0)
            },
            onPlayGameEffect: function(e, t) {
                t || (t = !1);
                var o = this.onGetAudioClips(e);
                if (o) {
                    var n;
                    return n = cc.audioEngine.playEffect(o, t), this.playingSoundData[e] = n, n
                }
            },
            onPlayBtnEffect: function() {
                this.onPlayGameEffect("buttonClick", !1)
            },
            onStopBjM: function() {
                cc.audioEngine.stopMusic()
            },
            onStopGameEffect: function(e) {
                if (this.playingSoundData[e]) {
                    var t = this.playingSoundData[e];
                    t && cc.audioEngine.stopEffect(t), this.playingSoundData[e] = null
                }
            },
            pauseAll: function() {
                cc.audioEngine.pauseAll()
            },
            resumeAll: function() {
                cc.audioEngine.resumeAll()
            },
            onGetAudioClips: function(e) {
                var t = cc.Audios[e];
                return t || (console.log("\u672a\u627e\u5230\u8be5\u58f0\u97f3\u6587\u4ef6:", e), null)
            }
        }), cc._RF.pop()
    }, {}],
    ChangeImageAnimationScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7340fcmEgtJ+K4tcDgLxNGq", "ChangeImageAnimationScript"), cc.Class({
            extends: cc.Component,
            properties: {
                imageSprite: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "\u56fe\u6807"
                },
                imageSpriteFrame: {
                    default: [],
                    type: cc.SpriteFrame,
                    displayName: "\u7eb9\u7406"
                },
                changeTime: {
                    default: .2,
                    displayName: "\u6539\u53d8\u7684\u65f6\u95f4(\u79d2)"
                },
                playTimes: {
                    default: 0,
                    displayName: "\u52a8\u753b\u64ad\u653e\u6b21\u6570(0\u4e3a\u65e0\u9650\u5faa\u73af)"
                },
                initialIndex: {
                    default: 0,
                    displayName: "\u521d\u59cb\u64ad\u653e\u7684\u5e27\u6570(-1\u4e3a\u968f\u673a\u521d\u59cb\u5e27)"
                }
            },
            onLoad: function() {
                this.imageSprite || (this.imageSprite = this.node.getComponent(cc.Sprite)), this.nowPlayTimes = 0, this.time = 0, this.frameIndex = 0, this.initialIndex >= 0 ? this.frameIndex = this.initialIndex : -1 == this.initialIndex && (this.frameIndex = Math.round(Math.random() * (this.imageSpriteFrame.length - 1 - 0) + 0)), this.onChangeFrame()
            },
            start: function() {},
            onChangeFrame: function() {
                this.imageSprite && (this.imageSpriteFrame.length <= 0 || this.imageSprite && (this.imageSprite.spriteFrame = this.imageSpriteFrame[this.frameIndex]))
            },
            update: function(e) {
                if (this.imageSprite && this.imageSpriteFrame.length > 0 && (this.time += e, this.time > this.changeTime && this.changeTime > 0)) {
                    if (this.time = 0, this.frameIndex++, this.frameIndex > this.imageSpriteFrame.length - 1 && (this.frameIndex = 0, this.nowPlayTimes += 1, this.nowPlayTimes >= this.playTimes && this.playTimes > 0)) return void(this.changeTime = 0);
                    this.onChangeFrame()
                }
            }
        }), cc._RF.pop()
    }, {}],
    ChooseLevel_big: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d1d93007dJHr437K7qHSO86", "ChooseLevel_big"), cc.Class({
            extends: cc.Component,
            properties: {
                contentNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5bb9\u5668\u8282\u70b9"
                }
            },
            onLoad: function() {
                if (this.scrollView = this.node.getChildByName("ScrollView").getComponent(cc.ScrollView), cc.global.nowChoseBigIndex = -1, window.GameConfig.openNumber && window.GameConfig.openNumber > 0) {
                    for (var e = 0; e < this.contentNode.children.length; e++) e < window.GameConfig.openNumber ? cc.playerData.p_BigLevel[e] = 1 : cc.playerData.p_BigLevel[e] = 0;
                    cc.playerConfig.savePlayerData(), window.GameConfig.openNumber = 0
                }
            },
            start: function() {
                if (this.InitData(), window.oppo) {
                    this.btn_next;
                    adUtils.executeShowSpecialBanner({
                        isCustom: !0,
                        customName: "oppo-mutual-btn-look",
                        bottom: 280,
                        customHandle: function() {
                            if (window.oppo) {
                                var e = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                                e && (100 * Math.random() < window.GameConfig.randomWaive && e.getComponent("oppo-SpecialBanner").executeTouch(), e.removeFromParent(!0))
                            }
                        },
                        recoverHandle: function() {}
                    }, {
                        height: 320
                    }, function() {})
                } else cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial()
            },
            InitData: function() {
                for (var e = 0; e < 6; e++) {
                    var t = this.contentNode.children[e];
                    t || ((t = cc.instantiate(this.contentNode.children[0])).parent = this.contentNode), t.levelIndex = e, t.getChildByName("model_on").getComponent("LoadShowImgScript").onShowImg_locality("package/texture/window/level/big/model" + (e + 1) + "_on"), t.getChildByName("model_off").getComponent("LoadShowImgScript").onShowImg_locality("package/texture/window/level/big/model" + (e + 1) + "_off"), t.getChildByName("modelText").getComponent("LoadShowImgScript").onShowImg_locality("package/texture/window/level/big/modelText" + (e + 1));
                    var o = 0;
                    if (cc.playerData.p_BigLevel[e] > 0) {
                        t.getChildByName("model_on").active = !0, t.getChildByName("model_off").active = !1;
                        for (var n = 0; n < window.GameData.levelData[e].length; n++) cc.playerData.p_SmallLevel[e][n] > 1 && (o += 1)
                    } else t.getChildByName("model_on").active = !1, t.getChildByName("model_off").active = !0, o = 0;
                    o > 10 && (o = 10), t.getChildByName("jinDuLabel").getComponent(cc.Label).string = o + "/10"
                }
            },
            onSettingPosition: function() {
                this.scrollView.scrollToOffset(cc.v2(0, 0), .1)
            },
            onBtnChooseItem: function(e) {
                var t = this,
                    o = e.target.levelIndex;
                (!o || o < 0) && (o = 0);
                cc.playerData.p_BigLevel[o] > 0 && (cc.global.nowChoseBigIndex = o, console.log("\u5927\u5173\u5361\u9009\u62e9\u5b8c\u6bd5:", o), cc.global.LoadPrefabData("prefabs/UI/chooseLevel_small"), t.node.destroy())
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "closeButton":
                        this.node.destroy(), "GameScene" == cc.director.getScene().name && cc.global.onSwitchScene("GameHome");
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            }
        }), cc._RF.pop()
    }, {}],
    ClearManageScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "39785veVOlExZxzPQTYkbQb", "ClearManageScript"), cc.Class({
            extends: cc.Component,
            properties: {
                touchTablet: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u89e6\u6478\u677f"
                },
                clearToolNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u64e6\u9664\u5de5\u5177\u8282\u70b9"
                },
                clearItems: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u6e05\u7406\u5355\u5143"
                },
                isNeedPen: !1,
                eventNode_over: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7ed3\u675f\u4e8b\u4ef6\u8282\u70b9"
                },
                isDirectWin: {
                    default: !1,
                    displayName: "\u662f\u5426\u76f4\u63a5\u80dc\u5229"
                },
                offsetPos: {
                    default: cc.v2(0, 0),
                    displayName: "\u504f\u79fb\u503c"
                }
            },
            onLoad: function() {
                cc.global.clearManage = this, this.clearToolNode || (this.clearToolNode = window.GameManage.toolContainer.getChildByName("erasureTool")), this.lineWidth = this.clearToolNode.width, this.index_clear = 0, this.touchTablet || (this.touchTablet = this.node), this.nowClearNum = 0, this.needClearNum = 0, this.isClearMistake = !1, this.isGameWin = !1, this.clearItems = [];
                for (var e = 0; e < this.node.children.length; e++) "maskNode_yes" != this.node.children[e].name && "maskNode_no" != this.node.children[e].name || this.clearItems.push(this.node.children[e]);
                this.clearItemScripts = [];
                for (var t = 0; t < this.clearItems.length; t++) this.clearItems[t].getComponent("clearItemScript")._clearManage = this, 1 == this.clearItems[t].getComponent("clearItemScript").isNeedClear && this.needClearNum++, this.clearItemScripts.push(this.clearItems[t].getComponent("clearItemScript"));
                this.lastTouchPos = null, this.newTouchPos = null, this._getId = null, this.node.hintEvent = this.onOpenHint.bind(this), this.offsetPos = cc.v2(-60, 60)
            },
            start: function() {
                this.clearToolStartPos = this.clearToolNode.position, this.touchTablet.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.touchTablet.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.touchTablet.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.touchTablet.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.clearToolNode.getChildByName("eraser") && (this.clearToolNode.getChildByName("eraser").active = !1)
            },
            init: function(e) {
                this.funCall = e
            },
            onTouchStart: function(e) {
                var t = this.touchTablet.convertToNodeSpaceAR(e.getLocation()),
                    o = cc.global.onTransitionPosition(this.touchTablet, this.clearToolNode.parent, t);
                if (o = o.add(this.offsetPos), null == this._getId) {
                    this._getId = e.getID();
                    this.clearToolNode.position = o, this.clearToolNode.getChildByName("eraser") && (this.clearToolNode.getChildByName("eraser").active = !0), this.clearMask(o), cc.global.Source.onPlayGameEffect("rub"), this.isClearMistake = !1, this.onCloseHint(), this.newTouchPos = t, this.lastTouchPos = t, this.onPlayPenEffect()
                }
            },
            onTouchEnd: function(e) {
                if (e.getID() == this._getId && null != this._getId) {
                    this._getId = null;
                    var t = this.touchTablet.convertToNodeSpaceAR(e.getLocation()),
                        o = cc.global.onTransitionPosition(this.touchTablet, this.clearToolNode.parent, t);
                    o = o.add(this.offsetPos), this.clearToolNode.position = this.clearToolStartPos, this.clearToolNode.getChildByName("eraser") && (this.clearToolNode.getChildByName("eraser").active = !1);
                    for (var n = 0; n < this.clearItems.length; n++) 1 == this.clearItems[n].active && this.clearItemScripts[n].onClearOver();
                    this.scheduleOnce(function() {
                        1 == this.isGameWin || (window.GameManage.onMistake(), window.GameManage.onCuoChaEffect(this.node.parent.convertToWorldSpaceAR(this.node.position.clone())))
                    }.bind(this), .3), this.newTouchPos = o, this.onClosePenEffect()
                }
            },
            onTouchMove: function(e) {
                if (e.getID() == this._getId) {
                    var t = this.touchTablet.convertToNodeSpaceAR(e.getLocation()),
                        o = cc.global.onTransitionPosition(this.touchTablet, this.clearToolNode.parent, t);
                    o = o.add(this.offsetPos), this.clearToolNode.position = o, this.clearMask(o), this.newTouchPos = o
                }
            },
            clearMask: function(e) {
                var t = this.detectionPosIndex(e);
                if (null != t && t.length > 0)
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o],
                            i = cc.global.onTransitionPosition(this.touchTablet, this.clearItems[n], e);
                        this.clearItemScripts[n].clearMask(i)
                    }
            },
            onClearComplete: function(e) {
                this.nowClearNum++, this.scheduleOnce(function() {
                    if (1 != this.isGameWin)
                        if (console.log("isClearMistake=", this.isClearMistake), 0 == this.isClearMistake && (e.isClearAccomplish = !0), this.nowClearNum >= this.needClearNum && 0 == this.isClearMistake) {
                            for (var t = 0; t < this.clearItems.length; t++) 1 == this.clearItemScripts[t].isNeedClear && this.clearItemScripts[t].onClearComplete();
                            this.onGameWin(), this.isGameWin = !0
                        } else
                            for (var o = 0; o < this.clearItems.length; o++) 1 == this.clearItemScripts[o].isNeedClear && 0 == this.clearItemScripts[o].isClearAccomplish && (this.clearItems[o].active = !0, this.clearItemScripts[o].reset())
                }.bind(this), .1)
            },
            onClearMistake: function() {
                this.isClearMistake = !0, this.onResetContent(), console.log("isClearMistake0=", this.isClearMistake)
            },
            onGameWin: function() {
                1 == this.isDirectWin && window.GameManage.onGameWin(), this.isGameWin = !0, this.eventNode_over && this.eventNode_over.switchEvent && this.eventNode_over.switchEvent()
            },
            onResetContent: function() {
                for (var e = 0; e < this.clearItems.length; e++) 1 == this.clearItems[e].active && this.clearItemScripts[e].reset()
            },
            detectionPosIndex: function(e) {
                for (var t = [], o = 0; o < this.clearItems.length; o++) {
                    var n = cc.global.onTransitionPosition(this.touchTablet, this.clearItems[o].parent, e);
                    1 == this.clearItems[o].getBoundingBox().contains(n) && 1 == this.clearItems[o].active && t.push(o)
                }
                return t.length > 0 ? t : null
            },
            onOpenHint: function() {
                for (var e = 0; e < this.clearItemScripts.length; e++) 1 == this.clearItemScripts[e].isNeedClear && 1 == this.clearItems[e].active && this.clearItemScripts[e].onOpenHint()
            },
            onCloseHint: function() {
                for (var e = 0; e < this.clearItemScripts.length; e++) 1 == this.clearItemScripts[e].isNeedClear && 1 == this.clearItems[e].active && this.clearItemScripts[e].onCloseHint()
            },
            onPlayPenEffect: function() {
                cc.global.Source.onPlayGameEffect("pen", !0)
            },
            onClosePenEffect: function() {
                cc.global.Source.onStopGameEffect("pen")
            },
            update: function(e) {}
        }), cc._RF.pop()
    }, {}],
    ClickManage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3f03agmH29L866xU207j1Tc", "ClickManage"), cc.Class({
            extends: cc.Component,
            properties: {
                needTargetNum: {
                    default: 1,
                    displayName: "\u9700\u8981\u70b9\u51fb\u7684\u6b21\u6570"
                },
                eventNodes: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u4e8b\u4ef6\u8282\u70b9\u5217\u8868"
                },
                eventNode_over: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7ed3\u675f\u4e8b\u4ef6\u8282\u70b9"
                },
                isMistake: {
                    default: !1,
                    displayName: "\u662f\u5426\u662f\u9519\u8bef\u70b9\u51fb"
                },
                eventNode_mistake: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u9519\u8bef\u4e8b\u4ef6\u8282\u70b9"
                },
                isVibrate: {
                    default: !1,
                    displayName: "\u662f\u5426\u9707\u52a8"
                },
                isShowCheck: {
                    default: !0,
                    displayName: "\u662f\u5426\u663e\u793a\u5bf9\u52fe"
                }
            },
            onLoad: function() {
                this.switchEvent = null, this.nowTargetNum = 0
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
            },
            onTouchStart: function(e) {
                e.target;
                if (this.isTouch = !0, 1 == this.isMistake) {
                    if (console.log("\u9519\u8bef\u70b9\u51fb:"), 1 == window.GameManage.isGameOver) return;
                    return this.eventNode_mistake && this.eventNode_mistake.switchEvent(), window.GameManage.onMistake(), void window.GameManage.onCuoChaEffect(e.getLocation())
                }
                this.nowTargetNum++, console.log("\u70b9\u51fb\u4e86:", this.nowTargetNum, this.needTargetNum), this.eventNodes[this.nowTargetNum - 1] && this.eventNodes[this.nowTargetNum - 1].switchEvent(), this.nowTargetNum >= this.needTargetNum && (this.eventNode_over && this.eventNode_over.switchEvent(), 1 == this.isShowCheck && window.GameManage.onDuiHaoEffect(this.node)), this.isVibrate
            },
            onTouchEnd: function(e) {
                e.target;
                this.isTouch = !1
            },
            onTouchMove: function(e) {
                e.target;
                this.isTouch = !0
            }
        }), cc._RF.pop()
    }, {}],
    CollisionManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "65b8dX/+wFCcZUpQZ//rn30", "CollisionManager"), cc.Class({
            extends: cc.Component,
            properties: {
                isEnable: {
                    default: !1,
                    displayName: "\u662f\u5426\u6fc0\u6d3b"
                },
                isDebugDrawFlags: {
                    default: !1,
                    displayName: "\u662f\u5426\u5f00\u542f\u7ed8\u5236"
                }
            },
            onLoad: function() {
                var e = cc.director.getCollisionManager();
                1 == this.isEnable && (e.enabled = !0), 1 == this.isDebugDrawFlags && (e.enabledDebugDraw = !0, e.enabledDrawBoundingBox = !0)
            }
        }), cc._RF.pop()
    }, {}],
    CrazyClickScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "37c5e4q7KBNi5NOIQVe2BbI", "CrazyClickScript"), cc.Class({
            extends: cc.Component,
            properties: {
                progressBar: {
                    default: null,
                    type: cc.ProgressBar,
                    displayName: "\u8fdb\u5ea6\u6761"
                },
                openBoxNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5f00\u542f\u5b9d\u7bb1\u7684\u8282\u70b9"
                }
            },
            onLoad: function() {
                this.isTrigger = !1, this.downSpeed = .4, this.clickSpeed = .12, this.progressBar.progress = 0, this.openBoxNode.active = !1, cc.PlatformTools.executeHideBanner()
            },
            start: function() {},
            initData: function(e, t) {
                e && (this.nextFunc = e), t && (this.getFunc = t)
            },
            openBox: function() {
                this.progressBar.node.active = !1, this.openBoxNode.active = !0, this.openBoxNode.getChildByName("btn_next").active = !1, this.scheduleOnce(function() {
                    this.getFunc && this.getFunc(), this.openBoxNode.getChildByName("btn_next").active = !0
                }.bind(this), 1.8)
            },
            onCrazyClick: function(e) {
                var t = 200;
                100 * Math.random() < window.GameConfig.box[2] && (t = Math.round(30 * Math.random() + 50)), this.progressBar.progress += this.clickSpeed, this.progressBar.progress > .95 ? (this.isTrigger = !0, this.progressBar.progress = 1, e.target.active = !1, this.openBox()) : this.progressBar.progress > t / 100 && 0 == this.isTrigger && (this.isTrigger = !0, cc.PlatformTools.executeShowBanner(), this.scheduleOnce(function() {
                    cc.PlatformTools.executeHideBanner()
                }.bind(this), 1))
            },
            onButtonClick: function(e) {
                switch (e.target.name) {
                    case "btn_touch":
                        this.onCrazyClick(e);
                        break;
                    case "btn_next":
                        this.node.destroy(), this.nextFunc && this.nextFunc();
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            },
            update: function(e) {
                this.progressBar.progress > 0 && (this.progressBar.progress -= this.downSpeed * e, this.progressBar.progress <= 0 && (this.progressBar.progress = 0))
            }
        }), cc._RF.pop()
    }, {}],
    DialogEffectScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "009eahpmy1MW5xt+RM+xzp3", "DialogEffectScript"), cc.Class({
            extends: cc.Component,
            properties: {
                content: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5185\u5bb9\u8282\u70b9"
                }
            },
            onLoad: function() {
                this.content.scale = .2, this.onAction()
            },
            start: function() {},
            onAction: function() {
                cc.tween(this.content).to(.2, {
                    scale: 1
                }, {
                    easing: "backOut"
                }).start()
            }
        }), cc._RF.pop()
    }, {}],
    DoubleClickScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c5e3aloH1hPQoBegnuYEmJo", "DoubleClickScript"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
            },
            start: function() {
                this.time = 0, this.intervalTime = 1, this.touchNum = 0, this.lastTimestamp = 0
            },
            init: function() {},
            onReceiveFunCall: function(e) {
                this.DoubleClickFunCall = e
            },
            onDoubleClick: function() {
                this.DoubleClickFunCall && this.DoubleClickFunCall()
            },
            onTouchStart: function(e) {
                var t = (new Date).getTime();
                t - this.lastTimestamp < 1e3 * this.intervalTime ? this.touchNum++ : this.touchNum = 1, 2 == this.touchNum ? (console.log("\u53cc\u51fb"), this.onDoubleClick()) : this.touchNum, this.lastTimestamp = t
            },
            onTouchEnd: function(e) {},
            onTouchMove: function(e) {},
            update: function(e) {}
        }), cc._RF.pop()
    }, {}],
    DragItemScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "56da8ZdoMpBdo5U+5veUC3B", "DragItemScript"), cc.Class({
            extends: cc.Component,
            properties: {
                touchTablet: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u89e6\u6478\u677f"
                },
                targetNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u653e\u7f6e\u76ee\u6807\u8282\u70b9"
                },
                isNeedRestore: {
                    default: !0,
                    displayName: "\u662f\u5426\u9700\u8981\u6062\u590d"
                },
                eventNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u4e8b\u4ef6\u8282\u70b9"
                },
                targetFrame: {
                    default: null,
                    type: cc.SpriteFrame,
                    displayName: "\u76ee\u6807\u7eb9\u7406"
                },
                isMove_x: {
                    default: !0,
                    displayName: "\u5728x\u5468\u4e0a\u662f\u5426\u53ef\u4ee5\u79fb\u52a8"
                },
                isMove_y: {
                    default: !0,
                    displayName: "\u5728y\u5468\u4e0a\u662f\u5426\u53ef\u4ee5\u79fb\u52a8"
                },
                isPriorityShow: {
                    default: !1,
                    displayName: "\u662f\u5426\u4f18\u5148\u663e\u793a"
                },
                isLimitPos: {
                    default: !1,
                    displayName: "\u662f\u5426\u5f00\u542f\u79fb\u52a8\u9650\u5236"
                },
                leftLimit: {
                    default: 0,
                    displayName: "\u5de6\u9650"
                },
                rightLimit: {
                    default: 0,
                    displayName: "\u53f3\u9650"
                },
                upLimit: {
                    default: 0,
                    displayName: "\u4e0a\u9650"
                },
                downLimit: {
                    default: 0,
                    displayName: "\u4e0b\u9650"
                },
                isEnableBorder: {
                    default: !1,
                    displayName: "\u662f\u5426\u542f\u7528\u8fb9\u754c\u68c0\u6d4b"
                },
                leftWin: {
                    default: 0,
                    displayName: "\u5de6\u8fb9\u754c"
                },
                rightWin: {
                    default: 0,
                    displayName: "\u53f3\u8fb9\u754c"
                },
                upWin: {
                    default: 0,
                    displayName: "\u4e0a\u8fb9\u754c"
                },
                downWin: {
                    default: 0,
                    displayName: "\u4e0b\u8fb9\u754c"
                }
            },
            onLoad: function() {
                this.isFinish = !1
            },
            start: function() {
                this.nodeStartPos = this.node.position, this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.targetNode && (this.targetScript = this.targetNode.getComponent("DragTargetScript"))
            },
            onTouchStart: function(e) {
                if (1 != this.isFinish) {
                    this.node.getComponent("FlutterEffect") && this.node.getComponent("FlutterEffect").onCloseEffect();
                    var t = this.node.convertToNodeSpaceAR(e.getLocation());
                    t = cc.global.onTransitionPosition(this.node, this.node.parent, t);
                    var o = e.getDelta(),
                        n = this.node.position.clone().add(o);
                    if (0 == this.isMove_x && (n.x = this.nodeStartPos.x), 0 == this.isMove_y && (n.y = this.nodeStartPos.y), 1 == this.isLimitPos && (n.x < this.leftLimit && 0 != this.leftLimit && (n.x = this.leftLimit), n.x > this.rightLimit && 0 != this.rightLimit && (n.x = this.rightLimit), n.y > this.upLimit && 0 != this.upLimit && (n.y = this.upLimit), n.y < this.downLimit && 0 != this.downLimit && (n.y = this.downLimit)), this.node.position = n, 1 == this.isPriorityShow) {
                        var i = this.node.parent.children[this.node.parent.children.length - 1].zIndex;
                        this.node.zIndex = i + 1, console.log("\u76ee\u524d\u6700\u9ad8\u5c42\u7ea7:", i)
                    }
                }
            },
            onTouchEnd: function(e) {
                if (1 != this.isFinish && 0 == this.isFinish) {
                    if (1 == this.isEnableBorder && (this.node.x <= this.leftWin && 0 != this.leftWin && (this.isFinish = !0), this.node.x >= this.rightWin && 0 != this.rightWin && (this.isFinish = !0), this.node.y >= this.upWin && 0 != this.upWin && (this.isFinish = !0), this.node.y <= this.downWin && 0 != this.downWin && (this.isFinish = !0)), this.targetNode) {
                        var t = this.node.convertToNodeSpaceAR(e.getLocation());
                        t = cc.global.onTransitionPosition(this.node, this.node.parent, t);
                        var o = e.getDelta(),
                            n = this.node.position.clone().add(o),
                            i = cc.global.onTransitionPosition(this.node.parent, this.targetNode.parent, n);
                        1 == this.targetNode.getBoundingBox().contains(i) ? (this.targetFrame && (this.node.getComponent(cc.Sprite).spriteFrame = this.targetFrame), this.isFinish = !0, this.targetScript.onReceiveNewNode(this.node), cc.global.Source.onPlayGameEffect("chose")) : window.GameManage.onMistake()
                    }
                    1 == this.isFinish ? this.eventNode && this.eventNode.switchEvent && this.eventNode.switchEvent() : 1 == this.isNeedRestore && (this.node.position = this.nodeStartPos, window.GameManage.onMistake())
                }
            },
            onTouchMove: function(e) {
                if (1 != this.isFinish) {
                    var t = this.node.convertToNodeSpaceAR(e.getLocation());
                    t = cc.global.onTransitionPosition(this.node, this.node.parent, t);
                    var o = e.getDelta(),
                        n = this.node.position.clone().add(o);
                    0 == this.isMove_x && (n.x = this.nodeStartPos.x), 0 == this.isMove_y && (n.y = this.nodeStartPos.y), 1 == this.isLimitPos && (n.x < this.leftLimit && 0 != this.leftLimit && (n.x = this.leftLimit), n.x > this.rightLimit && 0 != this.rightLimit && (n.x = this.rightLimit), n.y > this.upLimit && 0 != this.upLimit && (n.y = this.upLimit), n.y < this.downLimit && 0 != this.downLimit && (n.y = this.downLimit)), this.node.position = n
                }
            }
        }), cc._RF.pop()
    }, {}],
    DragScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "13c4efOjsNG0YUNDZY1jOvE", "DragScript"), cc.Class({
            extends: cc.Component,
            properties: {
                isMove_x: {
                    default: !0,
                    displayName: "\u662f\u5426\u53ef\u4ee5\u5728x\u5468\u4e0a\u79fb\u52a8"
                },
                isMove_y: {
                    default: !0,
                    displayName: "\u662f\u5426\u53ef\u4ee5\u5728y\u5468\u4e0a\u79fb\u52a8"
                },
                isNeedRestore: {
                    default: !1,
                    displayName: "\u662f\u5426\u9700\u8981\u6062\u590d"
                },
                isPriorityShow: {
                    default: !1,
                    displayName: "\u662f\u5426\u4f18\u5148\u663e\u793a"
                },
                eventNode_over: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u4e8b\u4ef6\u8282\u70b9"
                },
                isLimitPos: {
                    default: !1,
                    displayName: "\u662f\u5426\u5f00\u542f\u79fb\u52a8\u9650\u5236"
                },
                leftLimit: {
                    default: 0,
                    displayName: "\u5de6\u9650"
                },
                rightLimit: {
                    default: 0,
                    displayName: "\u53f3\u9650"
                },
                upLimit: {
                    default: 0,
                    displayName: "\u4e0a\u9650"
                },
                downLimit: {
                    default: 0,
                    displayName: "\u4e0b\u9650"
                },
                isEnableBorder: {
                    default: !1,
                    displayName: "\u662f\u5426\u542f\u7528\u8fb9\u754c\u68c0\u6d4b"
                },
                leftWin: {
                    default: 0,
                    displayName: "\u5de6\u8fb9\u754c"
                },
                rightWin: {
                    default: 0,
                    displayName: "\u53f3\u8fb9\u754c"
                },
                upWin: {
                    default: 0,
                    displayName: "\u4e0a\u8fb9\u754c"
                },
                downWin: {
                    default: 0,
                    displayName: "\u4e0b\u8fb9\u754c"
                }
            },
            onLoad: function() {
                this.isGameWin = !1
            },
            start: function() {
                this.nodeStartPos = this.node.position, this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
            },
            onTouchStart: function(e) {
                if (1 != this.isClassify) {
                    this.node.getComponent("FlutterEffect") && this.node.getComponent("FlutterEffect").onCloseEffect(), this.node.stopAllActions();
                    var t = e.getDelta(),
                        o = this.node.position.clone().add(t);
                    if (0 == this.isMove_x && (o.x = this.nodeStartPos.x), 0 == this.isMove_y && (o.y = this.nodeStartPos.y), 1 == this.isLimitPos && (o.x < this.leftLimit && 0 != this.leftLimit && (o.x = this.leftLimit), o.x > this.rightLimit && 0 != this.rightLimit && (o.x = this.rightLimit), o.y > this.upLimit && 0 != this.upLimit && (o.y = this.upLimit), o.y < this.downLimit && 0 != this.downLimit && (o.y = this.downLimit)), this.node.position = o, 1 == this.isPriorityShow) {
                        var n = this.node.parent.children[this.node.parent.children.length - 1].zIndex;
                        this.node.zIndex = n + 1, console.log("\u76ee\u524d\u6700\u9ad8\u5c42\u7ea7:", n)
                    }
                }
            },
            onTouchEnd: function(e) {
                0 == this.isGameWin && (1 == this.isEnableBorder && (this.node.x <= this.leftWin && 0 != this.leftWin && (this.isGameWin = !0), this.node.x >= this.rightWin && 0 != this.rightWin && (this.isGameWin = !0), this.node.y >= this.upWin && 0 != this.upWin && (this.isGameWin = !0), this.node.y <= this.downWin && 0 != this.downWin && (this.isGameWin = !0)), 1 == this.isGameWin && this.eventNode_over && this.eventNode_over.switchEvent()), 1 == this.isNeedRestore && (this.node.position = this.nodeStartPos)
            },
            onTouchMove: function(e) {
                if (1 != this.isClassify) {
                    var t = e.getDelta(),
                        o = this.node.position.clone().add(t);
                    0 == this.isMove_x && (o.x = this.nodeStartPos.x), 0 == this.isMove_y && (o.y = this.nodeStartPos.y), 1 == this.isLimitPos && (o.x < this.leftLimit && 0 != this.leftLimit && (o.x = this.leftLimit), o.x > this.rightLimit && 0 != this.rightLimit && (o.x = this.rightLimit), o.y > this.upLimit && 0 != this.upLimit && (o.y = this.upLimit), o.y < this.downLimit && 0 != this.downLimit && (o.y = this.downLimit)), this.node.position = o
                }
            }
        }), cc._RF.pop()
    }, {}],
    DragTargetScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "eb983sNrvxOQaHZrxjHd6qk", "DragTargetScript"), cc.Class({
            extends: cc.Component,
            properties: {
                nullSiteNode: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u4f4d\u7f6e\u8282\u70b9"
                },
                isPlaceMore: {
                    default: !1,
                    displayName: "\u662f\u5426\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u4f4d\u7f6e\u653e\u7f6e\u591a\u4e2a"
                },
                isPlaceInside: {
                    default: !1,
                    displayName: "\u662f\u5426\u9700\u8981\u653e\u7f6e\u5728\u5185\u6d4b"
                }
            },
            onLoad: function() {},
            start: function() {},
            onReceiveNewNode: function(e) {
                var t = !1;
                if (this.nullSiteNode.length > 0) {
                    for (var o = 0; o < this.nullSiteNode.length; o++)
                        if (!this.nullSiteNode[o].isHaveItem) {
                            0 == this.isPlaceMore && (this.nullSiteNode[o].isHaveItem = !0), e.parent = this.nullSiteNode[o], e.position = cc.v2(0, 0), e.angle = 0, t = !0;
                            break
                        }
                } else 0 == this.nullSiteNode.length && (e.parent = this.node, e.position = cc.v2(0, 0), e.angle = 0, t = !0);
                0 == t && (this.nullSiteNode.length > 0 ? (this.nullSiteNode[0].isHaveItem = !0, e.parent = this.nullSiteNode[0]) : 0 == this.nullSiteNode.length && (e.parent = this.node), e.position = cc.v2(0, 0), e.angle = 0, t = !0), 1 == this.isPlaceInside && this.onPlaceInsideEffect(e)
            },
            onPlaceInsideEffect: function(e) {
                e.stopAllActions(), cc.tween(e).to(.6, {
                    angle: 1028,
                    scaleX: 0,
                    scaleY: 0
                }).call(function() {}).start()
            }
        }), cc._RF.pop()
    }, {}],
    DrawManage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5663dgByp5CIYiFE92MIGpb", "DrawManage"), cc.Class(function(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        }({
            extends: cc.Component,
            properties: {
                juli: 600,
                showNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5c55\u793a\u8282\u70b9"
                },
                resultNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7ed3\u679c\u8282\u70b9"
                },
                strokeNumber: {
                    default: 1,
                    displayName: "\u9700\u8981\u7684\u7b14\u753b\u4e2a\u6570"
                },
                isHideShowNode: {
                    default: !0,
                    displayName: "\u9690\u85cf\u5c55\u793a\u8282\u70b9"
                }
            },
            onLoad: function() {
                GameConfig.GAME_DRAW = this, this.resultNode && (this.resultNode.active = !1), "GameScene" == cc.director.getScene().name && (this.node.hintEvent = this.showTiShi.bind(this), this.handNode = window.GameManage.toolContainer.getChildByName("hand"), this.gs = window.GameManage.toolContainer.getChildByName("drawPanel").getComponent(cc.Graphics), this.huabiNode = window.GameManage.toolContainer.getChildByName("huabi"), this.tishiNode = this.node.getChildByName("tishiNode"), this.handNode.active = !1, this._getId = null, this.handNode.stopAllActions(), this.handNode.active = !1, this.PointArray = [], this.DrawArray = [], this.isWin = !1, this.startPos = cc.v2(0, 0), this.endPos = cc.v2(0, 0), window.DrawManage = this, this.lastTouchPos = null, this.newTouchPos = null, this.nowDrawNum = 0, this.isMoveLose = !1, this.faultTolerance = 20, this.centrePos = cc.v2((.5 - this.tishiNode.anchorX) * this.tishiNode.width, (.5 - this.tishiNode.anchorY) * this.tishiNode.height), this.boundary_maxX = this.tishiNode.width / 2 + this.faultTolerance + this.centrePos.x, this.boundary_minX = -1 * (this.tishiNode.width / 2 + this.faultTolerance) + this.centrePos.x, this.boundary_maxY = this.tishiNode.height / 2 + this.faultTolerance + this.centrePos.y, this.boundary_minY = -1 * (this.tishiNode.height / 2 + this.faultTolerance) + this.centrePos.y)
            },
            start: function() {
                this.touchTablet || (this.touchTablet = this.node), "GameScene" == cc.director.getScene().name && (this.touchTablet.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.touchTablet.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.touchTablet.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.touchTablet.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.setPenStyle())
            },
            onTouchStart: function(e) {
                if (null == this._getId) {
                    this._getId = e.getID();
                    var t = this.touchTablet.convertToNodeSpaceAR(e.getLocation()),
                        o = e.getLocation();
                    o = this.node.convertToNodeSpaceAR(o), this.startPos = o, this.gs.moveTo(this.startPos.x, this.startPos.y), this.huabiNode.active = !0, this.huabiNode.position = o, this.newTouchPos = t, this.lastTouchPos = t, this.onPlayPenEffect()
                }
            },
            onTouchEnd: function(e) {
                var t = this.touchTablet.convertToNodeSpaceAR(e.getLocation());
                e.getID() == this._getId && null != this._getId && (this._getId = null, this.newTouchPos = t, this.huabiNode.active = !1, this.onClosePenEffect(), this.nowDrawNum += 1, this.nowDrawNum >= this.strokeNumber && (this.getGameResult(), this.clearAll()))
            },
            onTouchMove: function(t) {
                if (t.getID() == this._getId) {
                    var o = this.touchTablet.convertToNodeSpaceAR(t.getLocation()),
                        n = t.getLocation();
                    n = this.node.convertToNodeSpaceAR(n), this.endPos = n, this.gs.lineTo(this.endPos.x, this.endPos.y), this.gs.stroke(), this.startPos = n, this.DrawArray.push(this.startPos), this.huabiNode.position = n;
                    for (var i = 0; i < this.PointArray.length; i++) {
                        var a = this.PointArray[i].getComponent(e("PointNode"));
                        n.sub(a.node.position).mag() < 20 && !a.isTouch && (a.isTouch = !0)
                    }
                    o.x > this.boundary_maxX && (0 == this.isMoveLose && console.log("\u53f3\u8fb9\u8d85\u754c"), this.isMoveLose = !0), o.x < this.boundary_minX && (0 == this.isMoveLose && console.log("\u5de6\u8fb9\u8d85\u754c"), this.isMoveLose = !0), o.y > this.boundary_maxY && (0 == this.isMoveLose && console.log("\u4e0a\u8fb9\u8d85\u754c"), this.isMoveLose = !0), o.y < this.boundary_minY && (0 == this.isMoveLose && console.log("\u4e0b\u8fb9\u8d85\u754c"), this.isMoveLose = !0), this.newTouchPos = o
                }
            },
            showNodeAnim: function(e) {
                this.resultNode && (this.resultNode.active = !0), 1 == this.isHideShowNode && this.showNode && (this.showNode.active = !1)
            },
            showHandTiShi: function(t) {
                this.handNode.active = !0, t >= this.PointArray.length - 1 && (t = 0);
                var o = this.PointArray[t].getComponent(e("PointNode")),
                    n = this.PointArray[t + 1].getComponent(e("PointNode"));
                this.handNode.position = o.node.position;
                var i = cc.callFunc(function(e) {
                        this.showHandTiShi(t + 1)
                    }.bind(this), this.handNode),
                    a = cc.sequence(cc.moveTo(.2, n.node.x, n.node.y), i);
                this.handNode.runAction(a)
            },
            update: function(e) {},
            initPenData: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, function(e) {}.bind(this), this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {}.bind(this), this), this.node.on(cc.Node.EventType.TOUCH_END, function(e) {}.bind(this), this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {}.bind(this), this)
            },
            isLost: function() {
                for (var e = 0; e < this.DrawArray.length; e++)
                    for (var t = 0; t < this.PointArray.length; t++)
                        if (this.DrawArray[e].sub(this.showNode.position).mag() > this.juli) return console.log("\u6709\u8ddd\u79bb\u8fdc\u7684\u70b9 \u5224\u65ad\u5931\u8d25", this.DrawArray[e].sub(this.showNode.position).mag(), this.juli), !1;
                return !0
            },
            getGameResult: function() {
                if (1 != this.isWin) {
                    this.isMoveLose;
                    for (var t = 0, o = 0; o < this.PointArray.length; o++) {
                        this.PointArray[o].getComponent(e("PointNode")).isTouch && (t += 1)
                    }
                    if (1 == this.isLost()) {
                        var n = t / this.PointArray.length;
                        n >= .7 ? this.DrawArray.length <= 800 ? (this.showNodeAnim(n), console.log("is game win"), this.isWin = !0, this.onGameWin(n)) : (console.log("\u7ed8\u5236\u7684\u70b9\u592a\u591a\u4e86\uff0c\u5224\u65ad\u5931\u8d25", t, this.PointArray.length, this.DrawArray.length), this.onGameLose()) : this.onGameLose()
                    } else this.onGameLose()
                }
            },
            onGameWin: function(e) {
                this.handNode.stopAllActions(), this.handNode.active = !1, window.GameManage.onDuiHaoEffect(this.node), window.GameManage.onGameWin(e)
            },
            onGameLose: function() {
                window.GameManage.onMistake(), window.GameManage.onCuoChaEffect(this.node.parent.convertToWorldSpaceAR(this.node.position.clone())), this.nowDrawNum = 0
            },
            setPenStyle: function() {
                if (this.gs) {
                    var e = 0;
                    e += 1;
                    cc.Color.WHITE;
                    var t = cc.Color.WHITE.fromHEX("#000000");
                    cc.Color.WHITE.fromHEX("#ff0000"), cc.Color.WHITE.fromHEX("#0000FF"), cc.Color.WHITE.fromHEX("#ff00ff"), cc.Color.WHITE.fromHEX("#ffff00"), cc.Color.WHITE.fromHEX("#fa6400"), cc.Color.WHITE.fromHEX("#00fa00"), cc.Color.WHITE.fromHEX("#1f1f1f"), cc.Color.WHITE.fromHEX("#65331a"), cc.Color.WHITE.fromHEX("#f67239"), cc.Color.WHITE.fromHEX("#292c2c"), cc.Color.WHITE.fromHEX("#b3ff4e"), cc.Color.WHITE.fromHEX("#e2a087"), cc.Color.WHITE.fromHEX("#ff911c"), cc.Color.WHITE.fromHEX("#e50503"), cc.Color.WHITE.fromHEX("#1f324b"), cc.Color.WHITE.fromHEX("#d67300"), cc.Color.WHITE.fromHEX("#ff426f"), cc.Color.WHITE.fromHEX("#905008");
                    this.gs.lineWidth = 10, this.gs.strokeColor = t, console.log("nowPenIndex=", e)
                }
            },
            clearAll: function() {
                if (this.gs.clear(), this.DrawArray = [], !this.IsTishi || this.isWin) {
                    this.handNode.stopAllActions(), this.handNode.active = !1;
                    for (var t = 0; t < this.PointArray.length; t++) {
                        var o = this.PointArray[t].getComponent(e("PointNode"));
                        o.isTouch = !1, o.HidePointNode()
                    }
                } else if (this.IsTishi)
                    for (var n = 0; n < this.PointArray.length; n++) {
                        this.PointArray[n].getComponent(e("PointNode")).isTouch = !1
                    }
                this.isMoveLose = !1
            },
            showTiShi: function() {
                this.IsTishi = !0;
                for (var t = 0; t < this.PointArray.length; t++) {
                    this.PointArray[t].getComponent(e("PointNode")).showPointNode()
                }
                this.handNode.stopAllActions(), this.showHandTiShi(0)
            },
            onPlayPenEffect: function() {
                this.audio_pen = cc.global.Source.onPlayGameEffect("pen", !0)
            },
            onClosePenEffect: function() {
                this.audio_pen && (cc.audioEngine.stopEffect(this.audio_pen), this.audio_pen = null)
            }
        }, "update", function(e) {})), cc._RF.pop()
    }, {
        PointNode: "PointNode"
    }],
    Favorite: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ca8b7ITkERIWoihfhChKaik", "Favorite"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                if (window.tt ? this.node.active = !0 : (window.ks, this.node.active = !1), window.tt) {
                    if (!window.tt.openAwemeUserProfile) return console.log("\u5f53\u524d\u7248\u672c\u6682\u4e0d\u652f\u6301\u5173\u6ce8"), void(this.node.active = !1);
                    var e = window.tt.getSystemInfoSync().appName;
                    console.log("appName=", e), "Douyin" == e || (this.node.active = !1), this.favoritedSuccessCallBack = null, this.favoritedFailureCallBack = null
                } else window.ks;
                0 == window.GameConfig.openConcerns && (this.node.active = !1)
            },
            start: function() {
                var e = this;
                window.tt && window.tt.onShow(function() {
                    console.log("\u5207\u5230\u524d\u5929"), e.favoritedSuccess()
                })
            },
            executeOpenAwemeUserProfile: function(e, t) {
                this.favoritedSuccessCallBack = e, this.favoritedFailureCallBack = t, window.tt.openAwemeUserProfile()
            },
            favoritedSuccess: function() {
                null != this.favoritedSuccessCallBack && (this.favoritedSuccessCallBack(), this.favoritedSuccessCallBack = null)
            },
            favoritedFailure: function() {
                null != this.favoritedFailureCallBack && (this.favoritedFailureCallBack(), this.favoritedFailureCallBack = null)
            },
            onButtonClick: function(e) {
                switch (e.target.name) {
                    case "btn_favorited":
                        console.log("\u70b9\u51fb\u4e86\u5173\u6ce8"), this.executeOpenAwemeUserProfile(function() {
                            console.log("\u5173\u6ce8\u6210\u529f")
                        }, function() {
                            console.log("\u5173\u6ce8\u5931\u8d25")
                        });
                        break;
                    case "":
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            }
        }), cc._RF.pop()
    }, {}],
    FlutterEffect: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6e202EN9BtBw7fTLn8/gA5t", "FlutterEffect"), cc.Class({
            extends: cc.Component,
            properties: {
                scope: {
                    default: 10,
                    displayName: "\u98d8\u52a8\u5e45\u5ea6"
                },
                moveTime: {
                    default: .8,
                    displayName: "\u98d8\u52a8\u65f6\u95f4"
                },
                delayTime: {
                    default: 0,
                    displayName: "\u5ef6\u8fdf\u65f6\u95f4"
                }
            },
            start: function() {
                this.flutterEffect()
            },
            flutterEffect: function() {
                var e = this.scope,
                    t = this.node;
                e || (e = 10);
                var o = t.position.clone(),
                    n = cc.v2(o.x, o.y);
                t.stopAllActions(), cc.tween(t).repeatForever(cc.tween().delay(this.delayTime).call(function() {
                    n.x = o.x + Math.round(Math.random() * (e + e) - e), n.y = o.y + Math.round(Math.random() * (e + e) - e)
                }).to(this.moveTime, {
                    position: n
                }).call(function() {}).start()).start()
            },
            onCloseEffect: function() {
                this.node.stopAllActions()
            }
        }), cc._RF.pop()
    }, {}],
    FollowScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e6755B+/OZHL6t1zHAgzEWy", "FollowScript"), cc.Class({
            extends: cc.Component,
            properties: {
                targetNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u76ee\u6807\u8282\u70b9"
                },
                isFollow_x: {
                    default: !0,
                    displayName: "\u662f\u5426\u53ef\u4ee5\u5728x\u5468\u4e0a\u8ddf\u968f"
                },
                isFollow_y: {
                    default: !0,
                    displayName: "\u662f\u5426\u53ef\u4ee5\u5728y\u5468\u4e0a\u8ddf\u968f"
                },
                isAngleFollow: {
                    default: !1,
                    displayName: "\u662f\u5426\u89d2\u5ea6\u8ddf\u968f"
                }
            },
            onLoad: function() {
                if (this.targetNode) {
                    var e = this.targetNode.position.clone(),
                        t = cc.global.onTransitionPosition(this.targetNode.parent, this.node.parent, e),
                        o = this.node.position.clone();
                    1 == this.isFollow_x && (o.x = t.x), 1 == this.isFollow_y && (o.y = t.y), this.node.position = o, 1 == this.isAngleFollow && (this.node.angle = this.targetNode.angle)
                }
            },
            start: function() {},
            update: function(e) {
                if (this.targetNode) {
                    var t = this.targetNode.position.clone(),
                        o = cc.global.onTransitionPosition(this.targetNode.parent, this.node.parent, t),
                        n = this.node.position.clone();
                    1 == this.isFollow_x && (n.x = o.x), 1 == this.isFollow_y && (n.y = o.y), this.node.position = n, 1 == this.isAngleFollow && (this.node.angle = this.targetNode.angle)
                }
            }
        }), cc._RF.pop()
    }, {}],
    GameCheatScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1270dSzr0hIM7glEjgdwdHn", "GameCheatScript"), cc.Class({
            extends: cc.Component,
            properties: {},
            init: function() {
                cc.cheat = this, cc.cheat.banner_wuDianTime_0 = 2, cc.cheat.banner_wuDianTime_1 = 2.8 - 2, cc.cheat.banner_wuDianTime_2 = 4.5 - 2.8, window.vivo ? window.GameConfig && (window.GameConfig.isLine = !0, window.GameConfig.allowBanner = !0, window.GameConfig.allowInterstitial = !0, window.GameConfig.showModal = !0, window.GameConfig.tryPushLevelNum = 0, window.GameConfig.isShowHand = !1, window.GameConfig.tangBing = !0) : window.oppo ? window.GameConfig.isShowHand = 0 : window.h5api && (window.GameConfig.isShowHand = 0)
            },
            onUse: function() {},
            onBannerWuDianEvent: function(e, t) {},
            onRandomVideoADEvent: function(e, t) {
                100 * Math.random() < window.GameConfig.randomVideo ? (console.log("\u968f\u673a\u89c6\u9891-------"), cc.PlatformTools.executeShowAwardVideo(e, t)) : t && t()
            },
            executeShareEvent: function(e) {
                (window.tt || window.wx || window.qq) && 100 * Math.random() < window.GameConfig.randomShare ? cc.PlatformTools.executeShareRecorderVideo(e, e) : e && e()
            },
            onStartVideo: function() {
                if (window.tt) {
                    if (window.tt.getLaunchOptionsSync) {
                        var e = window.tt.getLaunchOptionsSync().scene;
                        if (console.log("\u573a\u666f\u503c=", e), -1 == ["013002", "013003", "013004", "013007", "023001", "023002", "026002"].indexOf(e)) return;
                        100 * Math.random() < window.GameConfig.startVideo && (console.log("\u89e6\u53d1\u5f00\u5c4f"), cc.PlatformTools.executeShowAwardVideo(function(e) {}.bind(this), null))
                    }
                } else if (window.ks) {
                    if (window.ks.getLaunchOptionsSync) {
                        var t = window.ks.getLaunchOptionsSync().from;
                        if (console.log("\u573a\u666f\u503c=", t), -1 == ["detail_link", "detail_tag"].indexOf(t)) return;
                        100 * Math.random() < window.GameConfig.startVideo && (console.log("\u89e6\u53d1\u5f00\u5c4f"), cc.PlatformTools.executeShowAwardVideo(function(e) {}.bind(this), null))
                    }
                } else window.qq ? window.qqUtil.sceneTrue() && 100 * Math.random() < window.GameConfig.startVideo && (console.log("\u89e6\u53d1\u5f00\u5c4f"), cc.PlatformTools.executeShowAwardVideo(function(e) {}.bind(this), null)) : 100 * Math.random() < window.GameConfig.startVideo && (console.log("\u89e6\u53d1\u5f00\u5c4f"), cc.PlatformTools.executeShowAwardVideo(function(e) {}.bind(this), null))
            },
            onRandomPush: function(e) {
                window.qg ? 100 * Math.random() < window.GameConfig.sendDesk && cc.PlatformTools.sendToDesktop() : window.swan && 100 * Math.random() < window.GameConfig.randomPush && cc.PlatformTools.executeShowPushBox()
            }
        }), cc._RF.pop()
    }, {}],
    GameIconShow_tt: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "64ebdq7XlJPvpzoPvgyhv84", "GameIconShow_tt"), cc.Class({
            extends: cc.Component,
            properties: {
                iconShowList: {
                    default: [],
                    type: cc.Node,
                    displayName: "icon\u663e\u793a\u5217\u8868"
                }
            },
            onLoad: function() {
                this.levelIndexSumNum = 84;
                for (var e = 0; e < this.iconShowList.length; e++) this.iconShowList[e].getComponent(cc.Sprite).spriteFrame = null, this.iconShowList[e].on(cc.Node.EventType.TOUCH_START, this.onChooseItem, this)
            },
            start: function() {
                window.tt || (this.node.active = !1), this.onShowGameIcon()
            },
            onShowGameIcon: function() {
                for (var e = 0; e < this.iconShowList.length; e++) {
                    this.iconShowList[e].getComponent(cc.Sprite).spriteFrame = null;
                    var t = "gameIcon/gameIcon" + (this.onGetGameIconIndex() + 1);
                    this.iconShowList[e].getComponent("ShowImgScript").onShowImg_locality(t)
                }
            },
            onChooseItem: function() {
                window.tt && ("ios" === window.tt.getSystemInfoSync().platform && window.tt.showToast({
                    title: " iOS\u4e0d\u652f\u6301\u6b64\u529f\u80fd"
                }), window.tt.showMoreGamesModal({
                    appLaunchOptions: [{
                        appId: "",
                        query: "foo=bar&baz=qux",
                        extraData: {}
                    }],
                    success: function(e) {},
                    fail: function(e) {}
                }))
            },
            onButtonClick: function(e) {
                switch (cc.gameSound.onPlayBtnEffect(), e.target.name) {
                    case "":
                        this.node.destroy();
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            },
            onGetGameIconIndex: function() {
                if (!cc.global.gameIconShowIndex_tt || 0 == cc.global.gameIconShowIndex_tt.length) {
                    cc.global.gameIconShowIndex_tt = [];
                    for (var e = 0; e < this.levelIndexSumNum; e++) cc.global.gameIconShowIndex_tt.push(e)
                }
                var t = Math.round(Math.random() * (cc.global.gameIconShowIndex_tt.length - 1)),
                    o = cc.global.gameIconShowIndex_tt[t];
                return cc.global.gameIconShowIndex_tt.splice(t, 1), o
            }
        }), cc._RF.pop()
    }, {}],
    GameListScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "777a4w/92VJ6a7Wq1lmjEN3", "GameListScript"), cc.Class({
            extends: cc.Component,
            properties: {
                moveSpeed: 100,
                gameList: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6e38\u620f"
                },
                nameBj: {
                    default: [],
                    type: cc.SpriteFrame,
                    displayName: "\u6e38\u620f\u540d\u5b57\u80cc\u666f"
                },
                isHorizontal: !1
            },
            onLoad: function() {
                this.node.getComponent(cc.Widget) && this.node.getComponent(cc.Widget).updateAlignment(), this.gameList || (this.gameList = this.node), this.gameNameBjIndex = 0, this.moveSpeed = 80, this.isGoUp = !0, this.isMayMove = !0, this.showID = 0, this.changeTime = 0, (window.qg || window.swan || window.tt) && window.GameConfig.iconList && window.GameConfig.packageList ? window.GameConfig.packageList.length <= 0 || window.GameConfig.packageList.length <= 0 ? this.node.active = !1 : this.showIcon() : this.node.active = !1
            },
            start: function() {},
            showIcon: function() {
                for (var e = 0; e < window.GameConfig.iconList.length; e++) {
                    var t = this.gameList.getChildByName("contentNode").children[e];
                    console.log(), t || ((t = cc.instantiate(this.gameList.getChildByName("contentNode").children[0])).parent = this.gameList.getChildByName("contentNode")), t.showID = e;
                    var o = t.getChildByName("icon");
                    if (window.tt) o.getComponent("ShowImgScript").onShowImg_bendi(window.GameConfig.iconList[e]);
                    else if ((window.qg || window.swan) && (o.getComponent("ShowImgScript").onShowImg_server(window.GameConfig.iconList[e]), window.swan)) {
                        var n = t.getChildByName("nameLabel");
                        n && (n.getComponent(cc.Label).string = "", window.GameConfig.gameName && window.GameConfig.gameName[e] && (n.getComponent(cc.Label).string = window.GameConfig.gameName[e]));
                        var i = t.getChildByName("nameBj");
                        i && (i.getComponent(cc.Sprite).spriteFrame = null, this.nameBj.length > 0 && (i.getComponent(cc.Sprite).spriteFrame = this.nameBj[this.gameNameBjIndex], this.gameNameBjIndex++, this.gameNameBjIndex >= this.nameBj.length && (this.gameNameBjIndex = 0)));
                        var a = t.getChildByName("numLabel");
                        if (a) {
                            a.getComponent(cc.Label).string = "";
                            var c = Math.round(46 * Math.random() + 52);
                            a.getComponent(cc.Label).string = c / 10 + "W\u4eba\u5728\u73a9"
                        }
                    }
                }
                this.gameList.getChildByName("contentNode").getComponent(cc.Layout).updateLayout(), this.contentNode = this.gameList.getChildByName("contentNode"), this.maxX = 0, this.minX = -1 * (this.contentNode.width - this.gameList.width), this.maxY = this.contentNode.height - this.gameList.height, this.minY = 0, this.contentNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.contentNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.contentNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.contentNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
            },
            onMove: function() {},
            touchIconCallBack: function(e) {
                var t = parseInt(e.target.showID);
                if (console.log("showID=", t), window.tt) {
                    "ios" === window.tt.getSystemInfoSync().platform && window.tt.showToast({
                        title: " iOS\u4e0d\u652f\u6301\u6b64\u529f\u80fd"
                    });
                    for (var o = [], n = 0; n < window.GameConfig.packageList.length; n++) {
                        var i;
                        i = {
                            appId: window.GameConfig.packageList[n],
                            query: "foo=bar&baz=qux",
                            extraData: {}
                        }, o.push(i)
                    }
                    window.tt.showMoreGamesModal({
                        appLaunchOptions: [{
                            appId: "",
                            query: "foo=bar&baz=qux",
                            extraData: {}
                        }],
                        success: function(e) {},
                        fail: function(e) {}
                    })
                } else window.qg ? window.qg.navigateToMiniGame({
                    pkgName: window.GameConfig.packageList[t],
                    path: "?page=pageB",
                    extraData: {
                        from: "\u8111\u6d1e\u4fa6\u63a2"
                    },
                    success: function() {},
                    fail: function(e) {
                        console.log(JSON.stringify(e))
                    }
                }) : window.swan && window.swan.navigateToMiniProgram({
                    appKey: window.GameConfig.packageList[t],
                    path: "/path/page/0",
                    extraData: {
                        from: "\u8111\u6d1e\u4fa6\u63a2"
                    },
                    success: function() {},
                    fail: function(e) {
                        console.log(JSON.stringify(e))
                    }
                })
            },
            onJumpToOtherGame: function(e) {
                e || (e = 0), window.swan && window.swan.navigateToMiniProgram({
                    appKey: window.GameConfig.packageList[e],
                    path: "/path/page/0",
                    extraData: {
                        from: "\u62a2\u6ee9\u593a\u5c9b\u6218"
                    },
                    success: function() {},
                    fail: function(e) {
                        console.log(JSON.stringify(e))
                    }
                })
            },
            onButtonClick: function(e) {
                switch (e.target.name) {
                    case "btn_close":
                        this.node.removeFromParent()
                }
            },
            onTouchStart: function(e) {
                this.isMayMove = !1, this.firstTouchPoint = this.contentNode.convertToNodeSpaceAR(e.getLocation())
            },
            onTouchMove: function(e) {
                if (1 != this.isMayMove) {
                    var t = e.getDelta().x,
                        o = e.getDelta().y;
                    1 == this.isHorizontal ? (this.contentNode.x += t, this.contentNode.x <= this.minX && (this.contentNode.x = this.minX), this.contentNode.x >= this.maxX && (this.contentNode.x = this.maxX)) : (this.contentNode.y += o, this.contentNode.y <= this.minY && (this.contentNode.y = this.minY), this.contentNode.y >= this.maxY && (this.contentNode.y = this.maxY))
                }
            },
            onTouchEnd: function(e) {
                if (!this.isMayMove) {
                    this.isMayMove = !0;
                    var t = this.contentNode.convertToNodeSpaceAR(e.getLocation());
                    if (this.firstTouchPoint.sub(t).mag() < 10)
                        for (var o = this.contentNode.children, n = 0; n < o.length; n++) {
                            var i = o[n];
                            if (i.getBoundingBox().contains(t)) {
                                var a = i.showID;
                                this.onJumpToOtherGame(a);
                                break
                            }
                        }
                }
            },
            update: function(e) {
                this.isMayMove && (1 == this.isHorizontal ? 1 == this.isGoUp ? (this.contentNode.x += this.moveSpeed * e, this.contentNode.x >= this.maxX && (this.contentNode.x = this.maxX, this.isGoUp = !1)) : (this.contentNode.x -= this.moveSpeed * e, this.contentNode.x <= this.minX && (this.contentNode.x = this.minX, this.isGoUp = !0)) : 1 == this.isGoUp ? (this.contentNode.y += this.moveSpeed * e, this.contentNode.y >= this.maxY && (this.contentNode.y = this.maxY, this.isGoUp = !1)) : (this.contentNode.y -= this.moveSpeed * e, this.contentNode.y <= this.minY && (this.contentNode.y = this.minY, this.isGoUp = !0)))
            }
        }), cc._RF.pop()
    }, {}],
    GameManage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1b398xrXk9HOID0AxabuPZM", "GameManage"), cc.Class({
            extends: cc.Component,
            properties: {
                contentNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5185\u5bb9\u8282\u70b9"
                },
                toolContainer: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6e38\u620f\u5de5\u5177\u5b58\u653e\u5bb9\u5668"
                },
                effectNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7279\u6548\u8282\u70b9"
                }
            },
            onLoad: function() {
                window.GameManage = this, this.isGameOver = !1
            },
            start: function() {
                this.onCreateLevel(), this.duihaoNode = this.toolContainer.getChildByName("duigou"), this.cuochaNode = this.toolContainer.getChildByName("cuocha"), this.quanquan = this.toolContainer.getChildByName("quanquan")
            },
            onCreateLevel: function() {
                window.ArcadeTool.startRound();
                cc.global.nowChoseSmallIndex >= window.GameData.levelData[cc.global.nowChoseBigIndex].length && (cc.global.nowChoseSmallIndex = 0, cc.global.nowChoseBigIndex += 1), cc.global.nowChoseBigIndex >= window.GameData.levelData.length && (cc.global.nowChoseBigIndex = 0);
                var e = cc.global.nowChoseBigIndex + 1,
                    t = cc.global.nowChoseSmallIndex + 1;
                this.contentNode.removeAllChildren();
                var o = "prefabs/level/level_" + (10 * (e - 1) + t);
                cc.loader.loadRes(o, function(e, t) {
                    if (!e && t instanceof cc.Prefab) {
                        var o = cc.instantiate(t);
                        o.parent = this.contentNode, o.setPosition(cc.v2(0, 0)), this.levelNode = o
                    }
                }.bind(this)), window.UIManage && (window.UIManage.btn_destroy.active = !1, window.UIManage.btn_hint_coin.interactable = !0, window.UIManage.btn_hint.interactable = !0), this.mistakeNum = 0, this.isGameOver = !1, this.onGamePush(), window.UIManage.onResetUI(), cc.audioEngine.stopAllEffects(), this.toolContainer.getChildByName("hand") && (this.toolContainer.getChildByName("hand").stopAllActions(), this.toolContainer.getChildByName("hand").active = !1), cc.PlatformTools.executeVideoRecorder()
            },
            addCoin: function(e, t) {
                t || (t = window.UIManage.coinNumLabel.node), e || (e = 1);
                var o = cc.global.onTransitionPosition(t.parent, this.effectNode, t.position.clone());
                cc.loader.loadRes("prefabs/effect/addCoinEffect", function(t, n) {
                    if (!t && n instanceof cc.Prefab) {
                        var i = cc.instantiate(n);
                        i.getComponent("AddCoinEffect").coinShowNum = e, i.parent = this.effectNode, i.position = o
                    }
                }.bind(this))
            },
            onGameWin: function() {
                if (!window.ArcadeTool.endRound(true)) return;
                this.isGameOver = !0, this.scheduleOnce(function() {
                    this.crazyClick(function() {
                        cc.global.LoadPrefabData("prefabs/UI/winWindow")
                    }, function() {
                        cc.playerData.coin += 52, cc.playerConfig.savePlayerData(), cc.global.onPlayGetCoinEffect()
                    })
                }.bind(this), 3.5)
            },
            onGameLose: function() {
                if (!window.ArcadeTool.endRound(false)) return;
                this.isGameOver = !0, this.scheduleOnce(function() {
                    cc.global.LoadPrefabData("prefabs/UI/loseWindow", function() {}.bind(this))
                }.bind(this), 1)
            },
            crazyClick: function(e, t) {
                window.timeNum_kuangDian || (window.timeNum_kuangDian = 0), window.levelNum_kuangDian || (window.levelNum_kuangDian = 0);
                var o = !1;
                window.levelNum_kuangDian += 1, window.GameConfig.box && window.levelNum_kuangDian >= window.GameConfig.box[0] && (window.timeNum_kuangDian += 1, window.levelNum_kuangDian = 0, window.timeNum_kuangDian <= window.GameConfig.box[1] && (o = !0)), 1 == o ? (console.log("\u8fdb\u5165\u72c2\u70b9\u6a21\u5f0f"), cc.loader.loadRes("box/crazyClick", function(o, n) {
                    if (o) e();
                    else {
                        var i = cc.instantiate(n);
                        i.parent = cc.director.getScene(), i.getComponent("CrazyClickScript").initData(e, t)
                    }
                })) : e()
            },
            onGamePush: function() {
                cc.global.pushWaitNum || (cc.global.pushWaitNum = 0), cc.global.pushWaitNum++, cc.global.pushWaitNum >= window.GameConfig.tryPushLevelNum && window.GameConfig.tryPushLevelNum > 0 ? (cc.global.pushWaitNum = 0, cc.global.LoadPrefabData("prefabs/UI/levelPushWindow")) : (cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial("inGame"))
            },
            onDuiHaoEffect: function(e) {
                var t = this;
                if (this.duihaoNode) {
                    var o = cc.v2(0, 0);
                    e && e.parent && (o = cc.global.onTransitionPosition(e.parent, this.duihaoNode.parent, e.position.clone()), this.duihaoNode.position = o), this.duihaoNode.scale = 0, this.duihaoNode.stopAllActions(), cc.tween(this.duihaoNode).to(.1, {
                        scale: 1,
                        easing: "elasticOut"
                    }).delay(1.2).call(function() {
                        t.duihaoNode.scale = 0
                    }).start(), cc.global.Source.onPlayGameEffect("correct")
                } else console.log("\u672a\u627e\u5230\u5bf9\u53f7\u8282\u70b9")
            },
            onCuoChaEffect: function(e) {
                var t = this;
                if (e || (e = this.cuochaNode.parent.parent.convertToWorldSpaceAR(this.cuochaNode.parent.position.clone())), this.cuochaNode) {
                    var o = this.cuochaNode.parent.convertToNodeSpaceAR(e);
                    this.cuochaNode.position = o, this.cuochaNode.scale = 0, this.cuochaNode.stopAllActions(), cc.tween(this.cuochaNode).to(.2, {
                        scale: 1.2,
                        easing: "elasticOut"
                    }).delay(1.2).call(function() {
                        t.cuochaNode.scale = 0
                    }).start(), cc.global.Source.onPlayGameEffect("mistake")
                } else console.log("\u672a\u627e\u5230\u9519\u53c9\u8282\u70b9")
            },
            onQuanQuanEffect: function(e) {
                if (this.quanquan) {
                    var t = cc.instantiate(this.quanquan),
                        o = cc.global.onTransitionPosition(e.parent, t.parent, e.position);
                    t.setPosition(o), this.cuochaNode.stopAllActions(), t.getComponent(cc.ProgressBar).progress = 0, cc.tween(t.getComponent(cc.ProgressBar)).to(.2, {
                        progress: 1
                    }).call(function() {}).start(), cc.global.Source.onPlayGameEffect("quan")
                } else console.log("\u672a\u627e\u5230\u5708\u5708\u8282\u70b9")
            },
            onMistake: function() {
                0 != window.UIManage.btn_hint_coin.interactable && 0 != window.UIManage.btn_hint.interactable && (this.mistakeNum || (this.mistakeNum = 0), this.mistakeNum++, window.GameConfig.errorCount && this.mistakeNum >= window.GameConfig.errorCount && (this.mistakeNum = 0, cc.global.LoadPrefabData("prefabs/UI/HintPushWindow")))
            },
            update: function(e) {}
        }), cc._RF.pop()
    }, {}],
    GetCoinEffect: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5fc02nMDMFPu5c4CbpSQb/V", "GetCoinEffect"), cc.Class({
            extends: cc.Component,
            properties: {
                coinNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u91d1\u5e01\u8282\u70b9"
                }
            },
            onLoad: function() {
                this.coinNode.active = !1
            },
            start: function() {
                this.onAction()
            },
            onAction: function(e, t) {
                var o = this,
                    n = null;
                e ? n = cc.global.onTransitionPosition(e.parent, this.node, e.position.clone()) : ("GameHome" == cc.director.getScene().name && window.HomeManage && (e = window.HomeManage.node.getChildByName("btn_coin").getChildByName("coin")), "GameScene" == cc.director.getScene().name && window.UIManage && (e = window.UIManage.node.getChildByName("btn_coin").getChildByName("coin"))), n = e ? cc.global.onTransitionPosition(e.parent, this.node, e.position.clone()) : cc.v2(0, 1600);
                var i = null;
                i = t ? cc.global.onTransitionPosition(t.parent, this.node, t.position.clone()) : cc.v2(0, 80), this.points = this.getCirclePoints(100, i, 8, 60), this.goldNodeList = [];
                for (var a = 0; a < this.points.length; a++) {
                    var c = cc.instantiate(this.coinNode);
                    c.parent = this.node, c.setPosition(i), c.active = !0, c.startPoint = this.points[a], c.endPoint = n, c.dis = c.startPoint.sub(c.endPoint).mag(), this.goldNodeList.push(c)
                }
                this.goldNodeList.sort(function(e, t) {
                    return e.dis - t.dis
                });
                this.goldNodeList.forEach(function(e, t) {
                    cc.tween(e).to(.3, {
                        position: o.goldNodeList[t].startPoint
                    }).delay(.1 * t + .2).call(function() {
                        var n = [cc.v2(0, cc.view.getVisibleSize().height / 2), cc.v2(0, -cc.view.getVisibleSize().height / 2), o.goldNodeList[t].endPoint],
                            i = cc.bezierTo(.6, n);
                        e.runAction(i)
                    }).delay(.6).call(function() {
                        e.active = !1, t == o.goldNodeList.length - 1 && o.node.destroy()
                    }).start()
                }), cc.global.Source.onPlayGameEffect("getMoney")
            },
            getCirclePoints: function(e, t, o, n) {
                for (var i = [], a = Math.PI / 180 * Math.round(360 / o), c = 0; c < o; c++) {
                    var s = t.x + e * Math.sin(a * c),
                        l = t.y + e * Math.cos(a * c);
                    i.unshift(cc.v3(s + 60 * Math.random(), l + 60 * Math.random(), 0))
                }
                return i
            }
        }), cc._RF.pop()
    }, {}],
    GetCoinScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0673edcWxFIKIyQ4rukmB0S", "GetCoinScript"), cc.Class({
            extends: cc.Component,
            properties: {
                _UIManage: null,
                button_no: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u62d2\u7edd\u6309\u94ae"
                }
            },
            onLoad: function() {
                this.callBack = null, this.node.callBack && (this.callBack = this.node.callBack)
            },
            start: function() {
                var e = this;
                if (window.oppo) {
                    var t = this.button_no;
                    adUtils.executeShowSpecialBanner({
                        isCustom: !0,
                        customName: "oppo-mutual-btn-waive",
                        bottom: 330,
                        customHandle: function() {
                            if (window.oppo) {
                                var t = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                                t && (100 * Math.random() < window.GameConfig.randomWaive && t.getComponent("oppo-SpecialBanner").executeTouch(), t.removeFromParent(!0))
                            }
                            e.node.destroy()
                        },
                        recoverHandle: function() {
                            t.getComponent(cc.Sprite).enabled = !0, t.getChildByName("seeAd") && t.getChildByName("seeAd").destroy(), t.getComponent("scaleEffect") && (t.removeComponent("scaleEffect"), t.scale = 1)
                        }
                    }, {
                        height: 330
                    }, function() {
                        t.getComponent(cc.Sprite).enabled = !1;
                        var o = new cc.Node;
                        o.name = "seeAd", o.parent = t, o.addComponent(cc.Sprite), o.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
                        cc.loader.loadRes("Platform/Native/Texture/seeAd", function(e, n) {
                            var i = this;
                            o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n), t.addComponent("ScaleChangeScript"), o.on(cc.Node.EventType.TOUCH_START, function() {
                                var e = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                                e && (100 * Math.random() < window.GameConfig.randomWaive && e.getComponent("oppo-SpecialBanner").executeTouch(), e.removeFromParent(!0)), i.node.destroy()
                            }, this)
                        }.bind(e))
                    })
                } else cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial()
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "yesButton":
                        cc.PlatformTools.executeShowAwardVideo(function(e) {
                            cc.playerData.coin += 52, cc.playerConfig.savePlayerData(), cc.global.onPlayGetCoinEffect(), this.node.destroy(), this.callBack && this.callBack()
                        }.bind(this), function(e) {
                            this.node.destroy()
                        }.bind(this));
                        break;
                    case "noButton":
                        cc.cheat.onRandomVideoADEvent(function() {
                            cc.playerData.coin += 52, cc.playerConfig.savePlayerData(), cc.global.onPlayGetCoinEffect(), this.node.destroy(), this.callBack && this.callBack()
                        }.bind(this), function() {
                            this.node.destroy()
                        }.bind(this));
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            },
            onDisable: function() {
                window.UIManage && window.UIManage.showAdEvent(), window.HomeManage && window.HomeManage.showAdEvent()
            }
        }), cc._RF.pop()
    }, {}],
    GetShowScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "dc83ec/HG9Ezr3af/naseSP", "GetShowScript"), cc.Class({
            extends: cc.Component,
            properties: {
                iconShow: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "\u56fe\u6807\u5c55\u793a"
                },
                numLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u6570\u91cf"
                }
            },
            onLoad: function() {
                this.obj = this.node.callBack, this.type = -1, this.frame = null, this.num = 0, this.obj && (this.obj.type && (this.type = this.obj.type), this.obj.frame && (this.frame = this.obj.frame), this.obj.num && (this.num = this.obj.num)), 0 == this.num || 1 == this.num ? this.numLabel.node && (this.numLabel.node.active = !1) : this.numLabel.string = "X" + this.num, this.frame && this.iconShow && (this.iconShow.spriteFrame = this.frame), console.log("obj=", this.obj)
            },
            start: function() {
                cc.global.Source.onPlayGameEffect("getWindow"), window.oppo ? cc.PlatformTools.executeShowBanner() : (cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial())
            },
            onButtonClick: function(e) {
                cc.global.Source.onPlayBtnEffect();
                var t = e.target.name;
                switch (t) {
                    case "btn_close":
                        cc.global.onPlayGetCoinEffect(), this.node.destroy();
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", t)
                }
            },
            update: function(e) {}
        }), cc._RF.pop()
    }, {}],
    GlobalVariable: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "62004aGmeNKOamf5R1Uqef7", "GlobalVariable"), cc.Class({
            extends: cc.Component,
            properties: {},
            init: function() {
                cc.global = this, cc.global.score = 0, cc.global.allBallInfo = {}, cc.global.isMayShake = !0, cc.global.firstGame = !0, cc.global.firstToHome = !0, cc.global.guidance = 0, cc.global.pushWaitNum = 0, cc.global.nowChoseBigIndex = 0, cc.global.nowChoseSmallIndex = 0, cc.global.nowDegree = 0
            },
            onTransitionPosition: function(e, t, o) {
                var n = e.convertToWorldSpaceAR(o);
                return t.convertToNodeSpaceAR(n)
            },
            LoadPrefabData: function(e, t) {
                cc.loader.loadRes(e, function(o, n) {
                    if (!o && n instanceof cc.Prefab) {
                        var i = "",
                            a = e.split("/");
                        i = a.length <= 0 ? e : a[a.length - 1];
                        var c = cc.director.getScene().getChildByName(i);
                        if (c) {
                            if (1 == c.active) return;
                            c.destroy()
                        }
                        var s = cc.instantiate(n);
                        s.callBack = t, s.parent = cc.director.getScene(), s.zIndex = 1
                    }
                })
            },
            sceneEventOn: function(e, t, o) {
                cc.director.getScene().on(e, function(t, o) {
                    console.log("\u76d1\u542c\u573a\u666f\u4e8b\u4ef6", e, t, o)
                })
            },
            sceneEventEmit: function(e, t, o) {
                cc.director.getScene().emit(e, function(t, o) {
                    console.log("\u53d1\u9001\u573a\u666f\u4e8b\u4ef6", e, t, o)
                })
            },
            onVibrateLong: function() {
                0 != cc.global.isMayShake && (window.qq ? window.qq.vibrateShort({
                    success: function(e) {}
                }) : window.tt ? window.tt.vibrateShort({
                    success: function(e) {}
                }) : window.ks ? window.ks.vibrateShort({
                    success: function(e) {}
                }) : window.swan ? window.swan.vibrateShort({
                    success: function(e) {}
                }) : window.qg ? window.qg.vibrateShort({
                    success: function(e) {}
                }) : window.wx ? window.wx.vibrateShort({
                    success: function(e) {}
                }) : window.navigator && window.navigator.vibrate && window.navigator.vibrate(200))
            },
            onVibrateEvent: function(e) {
                if (0 != cc.global.isMayShake) {
                    var t = null;
                    t = window.swan ? window.swan : window.tt ? null : window.ks ? window.ks : window.qq ? window.qq : window.wx ? window.wx : window.qg ? window.qg : null, "da" == e ? t && t.vibrateLong ? t.vibrateLong() : window.navigator && window.navigator.vibrate && window.navigator.vibrate(200) : "xiao" == e && (t && t.vibrateShort ? t.vibrateShort() : window.navigator && window.navigator.vibrate && window.navigator.vibrate(100))
                }
            },
            timeFormat: function(e) {
                return e *= 1e3, Math.floor(e / 1e3 / 60 / 60 / 24), Math.floor(e / 1e3 / 60 / 60 % 24), Math.floor(e / 1e3 / 60 % 60) + ":" + Math.floor(e / 1e3 % 60)
            },
            onSwitchScene: function(e) {
                cc.global.loadingWindow.active = !0, cc.director.preloadScene(e, null, function() {
                    cc.global.loadingWindow.active = !1, cc.director.loadScene(e)
                }.bind(this))
            },
            getTwoVectorDegree: function(e, t) {
                var o = t.x - e.x,
                    n = t.y - e.y,
                    i = Math.atan2(n, o);
                return cc.misc.radiansToDegrees(i) - 90
            },
            getMoveVector: function(e, t) {
                var o = cc.misc.degreesToRadians(e),
                    n = cc.v2();
                return n.x = -Math.sin(o) * t, n.y = Math.cos(o) * t, n
            },
            randomArray: function(e) {
                e.sort(function(e, t) {
                    return Math.random() > .5 ? -1 : 1
                })
            },
            isAllEqual: function(e) {
                return !(e.length > 0) || !e.some(function(t, o) {
                    return t !== e[0]
                })
            },
            isInteger: function(e) {
                return "number" == typeof e && e % 1 == 0
            },
            onDetectionSmallScreen: function() {
                return !(cc.view.getVisibleSize().height / cc.view.getVisibleSize().width >= 2)
            },
            onPlayGetCoinEffect: function() {
                cc.loader.loadRes("prefabs/UI/other/getCoinEffect", function(e, t) {
                    if (!e && t instanceof cc.Prefab) {
                        var o = cc.instantiate(t);
                        o.parent = cc.director.getScene();
                        var n = cc.view.getVisibleSize().height,
                            i = cc.view.getVisibleSize().width;
                        o.setPosition(cc.v2(i / 2, n / 2)), o.zIndex = 9
                    }
                }.bind(this))
            },
            getExtensionName: function(e) {
                var t = e.lastIndexOf(".");
                return e.substr(t + 1)
            }
        }), cc._RF.pop()
    }, {}],
    HintPushScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bada5v88+hIuqYRFoQ/lhHG", "HintPushScript"), cc.Class({
            extends: cc.Component,
            properties: {
                closeButton: cc.Node
            },
            onLoad: function() {},
            start: function() {
                var e = this;
                if (window.oppo) {
                    var t = this.closeButton;
                    adUtils.executeShowSpecialBanner({
                        isCustom: !0,
                        customName: "oppo-mutual-btn-waive",
                        bottom: 460,
                        customHandle: function() {
                            if (window.oppo) {
                                var t = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                                t && (100 * Math.random() < window.GameConfig.randomWaive && t.getComponent("oppo-SpecialBanner").executeTouch(), t.removeFromParent(!0))
                            }
                            e.node.destroy()
                        },
                        recoverHandle: function() {
                            t.getComponent(cc.Sprite).enabled = !0, t.getChildByName("seeAd") && t.getChildByName("seeAd").destroy(), t.getComponent("scaleEffect") && (t.removeComponent("scaleEffect"), t.scale = 1)
                        }
                    }, {
                        height: 460
                    }, function() {
                        t.getComponent(cc.Sprite).enabled = !1;
                        var o = new cc.Node;
                        o.name = "seeAd", o.parent = t, o.addComponent(cc.Sprite), o.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
                        cc.loader.loadRes("Platform/Native/Texture/seeAd", function(e, n) {
                            var i = this;
                            o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n), t.addComponent("ScaleChangeScript"), o.on(cc.Node.EventType.TOUCH_START, function() {
                                var e = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                                e && (100 * Math.random() < window.GameConfig.randomWaive && e.getComponent("oppo-SpecialBanner").executeTouch(), e.removeFromParent(!0)), i.node.destroy()
                            }, this)
                        }.bind(e))
                    })
                } else cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial()
            },
            onButtonClick: function(e) {
                switch (e.target.name) {
                    case "hintPushImg":
                        if (0 == window.GameConfig.randomVideo) return;
                        window.UIManage && window.UIManage.onGetHintEvent(), this.node.destroy();
                        break;
                    case "btn_yes":
                        cc.PlatformTools.executeShowAwardVideo(function() {
                            window.UIManage && window.UIManage.onGetHintEvent(), this.node.destroy()
                        }.bind(this));
                        break;
                    case "btn_no":
                        cc.cheat.onRandomVideoADEvent(function() {
                            window.UIManage && window.UIManage.onGetHintEvent(), this.node.destroy()
                        }.bind(this), function() {
                            this.node.destroy()
                        }.bind(this));
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            },
            onDisable: function() {
                window.UIManage && window.UIManage.showAdEvent(), window.HomeManage && window.HomeManage.showAdEvent()
            }
        }), cc._RF.pop()
    }, {}],
    HintWindowScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ab984LQWfNMI7a8yKp9RPHP", "HintWindowScript"), cc.Class({
            extends: cc.Component,
            properties: {
                label_hintText: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u63d0\u793a\u6587\u672c"
                }
            },
            onLoad: function() {},
            start: function() {},
            init: function() {},
            onShowHintText: function(e, t) {
                this.funCall = t || null, this.label_hintText.string = e, this.node && (this.node.active = !0), cc.global.Source.onPlayBtnEffect(), cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial()
            },
            typingAni: function(e, t, o) {
                this.work ? (this.work = !0, this.unschedule(this.func, this)) : this.work = !0;
                var n = "",
                    i = t.split(""),
                    a = i.length,
                    c = 0;
                this.func = function() {
                    n += i[c], e.string = n, ++c == a && (this.unschedule(this.func, this), o && o(), this.work = !1), cc.global.Source.onPlayGameEffect("typewriting")
                }.bind(this), this.schedule(this.func, .08, cc.macro.REPEAT_FOREVER, 0)
            },
            onCloseUI: function() {
                this.funCall && this.funCall(), this.node && (this.node.active = !1), cc.global.Source.onPlayBtnEffect()
            }
        }), cc._RF.pop()
    }, {}],
    HomeManage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5a999q7KO9M95lGXEssyB/g", "HomeManage"), cc.Class({
            extends: cc.Component,
            properties: {
                coinNumLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u91d1\u5e01\u7684\u663e\u793a"
                },
                gemNumLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u94bb\u77f3\u7684\u663e\u793a"
                },
                powerNumLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u4f53\u529b\u7684\u663e\u793a"
                }
            },
            onLoad: function() {
                window.HomeManage = this, window.ArcadeTool.syncResetButton()
            },
            onDisable: function() {
                window.ArcadeTool.setResetButtonVisible(false)
            },
            start: function() {
                !0 !== cc.audioEngine.isMusicPlaying() && cc.global.Source.onPlayBjM(), 1 == cc.global.firstGame && (cc.global.firstGame = !1), 1 == cc.global.firstToHome ? (cc.global.firstToHome = !1, this.showAdEvent()) : (1 == cc.playerData.signInfo.allow ? cc.global.LoadPrefabData("prefabs/UI/signWindow") : this.showAdEvent(), 1 == cc.global.isGuidance && (cc.global.isGuidance = !1)), this.refreshGameShow(), cc.audioEngine.stopAllEffects(), window.qq && cc.PlatformTools.executeBlockAdShow(1), this.onLoadScene_game()
            },
            showAdEvent: function() {
                window.oppo ? cc.PlatformTools.executeShowBanner() : (cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial())
            },
            onStartGame: function(e) {
                window.ArcadeTool.setResetButtonVisible(false);
                cc.global.loadingWindow && (cc.global.loadingWindow.active = !0), cc.director.preloadScene("GameScene", null, function() {
                    cc.global.loadingWindow && (cc.global.loadingWindow.active = !1), cc.director.loadScene("GameScene")
                }.bind(this))
            },
            refreshGameShow: function() {},
            onLoadScene_game: function() {
                cc.director.preloadScene("GameScene", function(e, t, o) {}.bind(this), function() {}.bind(this))
            },
            onShowPlayerData: function() {
                this.coinNumLabel.string = cc.playerData.coin
            },
            savePlayerData: function() {
                cc.playerConfig.savePlayerData()
            },
            onCancelBanner: function() {
                cc.PlatformTools.executeHideBanner()
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "btn_sign":
                        cc.global.LoadPrefabData("prefabs/UI/signWindow");
                        break;
                    case "btn_shop":
                        cc.global.LoadPrefabData("prefabs/UI/shopWindow");
                        break;
                    case "btn_start":
                        for (var t = -1, o = -1, n = 0; n < window.GameData.levelData.length; n++) {
                            for (var i = 0; i < window.GameData.levelData[n].length; i++)
                                if (0 == cc.playerData.p_SmallLevel[n][i] || !cc.playerData.p_SmallLevel[n][i]) {
                                    t = n, o = i - 1;
                                    break
                                } if (t >= 0) break
                        }
                        t >= 0 && o >= 0 ? (cc.global.nowChoseBigIndex = t, cc.global.nowChoseSmallIndex = o) : (cc.global.nowChoseBigIndex = 0, cc.global.nowChoseSmallIndex = 0), this.onStartGame();
                        break;
                    case "btn_coin":
                        cc.global.LoadPrefabData("prefabs/UI/getCoinWindow");
                        break;
                    case "btn_chooseLevel":
                        cc.global.LoadPrefabData("prefabs/UI/chooseLevel_big");
                        break;
                    case "otherModel":
                    case "":
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            },
            update: function(e) {
                this.onShowPlayerData(), window.ArcadeTool.syncResetButton()
            }
        }), cc._RF.pop()
    }, {}],
    IconShowScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1edfeCv0spHE7+i9z6q6a5d", "IconShowScript"), cc.Class({
            extends: cc.Component,
            properties: {
                videoIcon_tt: {
                    default: null,
                    type: cc.SpriteFrame,
                    displayName: "\u5934\u6761\u4e13\u7528"
                },
                videoIcon_hw: {
                    default: null,
                    type: cc.SpriteFrame,
                    displayName: "\u534e\u4e3a\u4e13\u7528"
                },
                videoIcon_oppo: {
                    default: null,
                    type: cc.SpriteFrame,
                    displayName: "oppo\u4e13\u7528"
                },
                videoIcon_vivo: {
                    default: null,
                    type: cc.SpriteFrame,
                    displayName: "vivo\u4e13\u7528"
                },
                videoIcon_other: {
                    default: null,
                    type: cc.SpriteFrame,
                    displayName: "\u5176\u4ed6"
                }
            },
            onLoad: function() {
                window.tt ? this.videoIcon_tt && (this.node.getComponent(cc.Sprite).spriteFrame = this.videoIcon_tt) : window.hw ? this.videoIcon_hw && (this.node.getComponent(cc.Sprite).spriteFrame = this.videoIcon_hw) : window.oppo ? this.videoIcon_oppo && (this.node.getComponent(cc.Sprite).spriteFrame = this.videoIcon_oppo) : window.vivo ? this.videoIcon_vivo && (this.node.getComponent(cc.Sprite).spriteFrame = this.videoIcon_vivo) : this.videoIcon_other && (this.node.getComponent(cc.Sprite).spriteFrame = this.videoIcon_other)
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    InitialScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "35f10HjYItGSbZpqNODZhfu", "InitialScript"), cc.Class({
            extends: cc.Component,
            properties: {
                showImg: cc.Node
            },
            start: function() {
                var e = this;
                window.initial = this, this.showImg.opacity = 255, cc.tween(this.showImg).delay(2).to(.1, {
                    opacity: 0
                }).call(function() {
                    e.node.opacity = 0
                }).delay(.1).call(function() {
                    e.node.destroy(), window.initial = null
                }).start()
            }
        }), cc._RF.pop()
    }, {}],
    IntersectionItem: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8761d7MLrdO54q7tHmnXzFx", "IntersectionItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.isOk = !1, this.carrier = null, this.isInCarrier = !1, this.contactItemList = [], this.comeKuang = [], this.targetPos = null, this.manageScript = null, this.node.children[0] && (this.targetPos = cc.global.onTransitionPosition(this.node, this.node.parent, this.node.children[0].position.clone()), this.node.children[0].active = !1), this.node.scale = .1
            },
            start: function() {},
            init: function() {},
            onCollisionEnter: function(e, t) {
                var o = e.node.name;
                e.node.parent;
                "kuang" == o ? this.comeKuang.push(e.node) : this.contactItemList.push(e.node)
            },
            onCollisionStay: function(e, t) {
                var o = e.node.name;
                e.node.parent;
                if ("kuang" == o) {
                    for (var n = t.world.points, i = e.world.points, a = !0, c = 0; c < n.length && 0 != (a = cc.Intersection.pointInPolygon(n[c], i)); c++);
                    this.isInCarrier = a, 1 == a && (this.carrier = e.node)
                }
            },
            onCollisionExit: function(e, t) {
                if ("kuang" == e.node.name) {
                    var o = this.comeKuang.indexOf(e.node);
                    this.comeKuang.splice(o, 1), 0 == this.comeKuang.length && (this.carrier = null)
                } else {
                    var n = this.contactItemList.indexOf(e.node);
                    this.contactItemList.splice(n, 1)
                }
            },
            onGoToHome: function() {
                var e = this;
                if (this.manageScript.posHintNode && this.manageScript.posHintNode.getChildByName(this.node.name)) {
                    var t = this.manageScript.posHintNode.getChildByName(this.node.name);
                    this.targetPos = cc.global.onTransitionPosition(t.parent, this.node.parent, t.position.clone())
                }
                this.targetPos && (this.node.stopAllActions(), cc.tween(this.node).to(.6, {
                    position: this.targetPos
                }).call(function() {
                    e.node.zIndex = 0
                }).start())
            },
            onPack: function() {
                if (this.carrier) {
                    var e = this.carrier.parent.getChildByName("content"),
                        t = cc.global.onTransitionPosition(this.node.parent, e, this.node.position.clone()),
                        o = this.node.angle - e.parent.angle;
                    this.node.parent = e, this.node.setPosition(t), this.node.angle = o
                }
            },
            update: function(e) {
                0 == this.contactItemList.length && 1 == this.isInCarrier ? this.isOk = !0 : this.isOk = !1, this.comeKuang.length > 0 ? this.contactItemList.length > 0 || 0 == this.isInCarrier ? this.node.color = cc.Color.RED : this.manageScript && this.manageScript.isTouchItem == this.node ? this.node.color = cc.Color.GREEN : this.node.color = cc.Color.WHITE : this.manageScript && 1 == this.manageScript.btn_destroy.active && 1 == this.manageScript.btn_destroy.getBoundingBox().contains(cc.global.onTransitionPosition(this.node.parent, this.manageScript.btn_destroy.parent, this.node.position.clone())) ? this.node.color = cc.Color.GRAY : this.node.color = cc.Color.WHITE
            }
        }), cc._RF.pop()
    }, {}],
    IntersectionScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1f2ffj070FOQZOzvsT4gdbn", "IntersectionScript"), cc.Class({
            extends: cc.Component,
            properties: {
                container: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5bb9\u5668\u603b\u8282\u70b9"
                },
                itemNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6240\u6709\u5143\u7d20\u603b\u8282\u70b9"
                },
                posHintNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u4f4d\u7f6e\u63d0\u793a\u8282\u70b9"
                }
            },
            onLoad: function() {
                this.isTouchItem = null, this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
                for (var e = 0; e < this.container.children.length; e++)
                    for (var t = this.container.children[e], o = 0; o < t.children.length; o++) "gai" == t.children[o].name ? t.children[o].active = !1 : "kuang" == t.children[o].name && (t.children[o].opacity = 0);
                if (this.posHintNode)
                    for (var n = 0; n < this.posHintNode.children.length; n++) this.posHintNode.children[n].active = !1;
                this.btn_destroy = null, window.UIManage && (this.btn_destroy = window.UIManage.btn_destroy, this.newPropNode = window.UIManage.newPropNode), this.node.hintEvent = this.hintEvent.bind(this)
            },
            start: function() {
                for (var e = 0; e < this.itemNode.children.length; e++) {
                    this.itemNode.children[e].getComponent("IntersectionItem").manageScript = this, 1 == this.itemNode.children[e].active && this.onPropShowEvent(this.itemNode.children[e])
                }
                for (var t = 0; t < this.container.children.length; t++)
                    for (var o = 0; o < this.container.children[t].getChildByName("content").children.length; o++) this.onPropShowEvent(this.container.children[t].getChildByName("content").children[o])
            },
            onPropShowEvent: function(e) {
                e.active = !0, e.stopAllActions(), e.scale = .1, cc.tween(e).delay(.1).to(.3, {
                    scale: 1
                }, {
                    easing: "backOut"
                }).start()
            },
            onTouchStart: function(e) {
                e.target;
                if (!this.isTouchItem && 1 != window.GameManage.isGameOver) {
                    var t = this.node.convertToNodeSpaceAR(e.getLocation()),
                        o = this.onGetTouchResult(t);
                    o && (this.isTouchItem = o, this.isTouchItem.setSiblingIndex(99), this.btn_destroy && (this.btn_destroy.active = !0, this.btn_destroy.stopAllActions(), this.btn_destroy.scale = .1, cc.tween(this.btn_destroy).to(.2, {
                        scale: 1
                    }).start()), cc.global.Source.onPlayGameEffect("touch")), this.node.getChildByName("xiaoshou") && this.node.getChildByName("xiaoshou").destroy()
                }
            },
            onTouchEnd: function(e) {
                e.target;
                if (this.isTouchItem && 1 != window.GameManage.isGameOver) {
                    var t = this.node.convertToNodeSpaceAR(e.getLocation());
                    if (1 == this.btn_destroy.getBoundingBox().contains(cc.global.onTransitionPosition(this.node, this.btn_destroy.parent, t))) this.onDestroyItem(this.isTouchItem);
                    else {
                        var o = this.isTouchItem.getComponent("IntersectionItem");
                        console.log("isOk=", o.isOk), 1 == o.isOk ? this.detectionResult() : o.comeKuang.length > 0 && (o.contactItemList.length > 0 || 0 == o.isInCarrier) && window.GameManage && window.GameManage.onMistake()
                    }
                    this.isTouchItem = null, this.btn_destroy && (this.btn_destroy.active = !1)
                }
            },
            onTouchMove: function(e) {
                e.target;
                if (this.isTouchItem && 1 != window.GameManage.isGameOver) {
                    var t = e.getDelta();
                    t = t.mul(1 / this.node.scale);
                    var o = this.isTouchItem.position.clone().add(t);
                    this.isTouchItem.setPosition(o)
                }
            },
            onShowNewProp: function(e) {
                var t = this;
                this.newPropNode.active = !0;
                var o = this.newPropNode.getChildByName("img");
                o.getComponent(cc.Sprite).spriteFrame = e.getComponent(cc.Sprite).spriteFrame, o.stopAllActions(), o.scale = .1, cc.tween(o).to(.3, {
                    scale: 2
                }, {
                    easing: "backOut"
                }).delay(.6).call(function() {
                    t.newPropNode.active = !1, t.onPropShowEvent(e)
                }).start()
            },
            onGetTouchResult: function(e) {
                for (var t = [], o = cc.global.onTransitionPosition(this.node, this.itemNode, e), n = 0; n < this.itemNode.children.length; n++) {
                    1 == this.itemNode.children[n].getBoundingBox().contains(o) && t.push(this.itemNode.children[n])
                }
                return t.length <= 0 ? null : t[t.length - 1]
            },
            detectionResult: function() {
                for (var e = !0, t = [], o = 0; o < this.itemNode.children.length; o++) {
                    if (1 == this.itemNode.children[o].active) 1 == this.itemNode.children[o].getComponent("IntersectionItem").isOk || (e = !1);
                    else t.push(this.itemNode.children[o])
                }
                if (1 == e) {
                    if (t.length > 0) return void this.onShowNewProp(t[0]);
                    window.GameManage && (window.GameManage.onDuiHaoEffect(this.node), window.GameManage.onGameWin()), this.scheduleOnce(function() {
                        this.onLevelOver()
                    }.bind(this), .1)
                }
            },
            hintEvent: function() {
                if (1 == this.itemNode.children.length) this.itemNode.children[0].getComponent("IntersectionItem").onGoToHome();
                else
                    for (var e = 0; e < this.itemNode.children.length; e++) 0 != e && 1 == this.itemNode.children[e].active && this.itemNode.children[e].getComponent("IntersectionItem").onGoToHome();
                this.scheduleOnce(function() {
                    this.detectionResult()
                }.bind(this), 1), this.node.getChildByName("xiaoshou") && this.node.getChildByName("xiaoshou").destroy()
            },
            onDestroyItem: function(e) {
                var t = this;
                cc.PlatformTools.executeShowAwardVideo(function() {
                    e ? e.destroy() : console.log("\u672a\u627e\u5230\u8981\u9500\u6bc1\u7684\u5143\u7d20", e), t.scheduleOnce(function() {
                        this.detectionResult()
                    }.bind(t), .2)
                })
            },
            onLevelOver: function() {
                for (var e = this, t = [], o = 0; o < this.itemNode.children.length; o++) t.push(this.itemNode.children[o]);
                for (var n = 0; n < t.length; n++) t[n].getComponent("IntersectionItem").onPack();
                if (1 == this.container.children.length) {
                    var i = this.container.children[0];
                    i.stopAllActions(), cc.tween(i).by(.2, {
                        scale: .1
                    }).by(.1, {
                        scale: -.1
                    }).to(.6, {
                        position: cc.v2(0, 0)
                    }).delay(.2).by(.12, {
                        angle: 10
                    }).by(.12, {
                        angle: -10
                    }).by(.12, {
                        angle: -10
                    }).by(.12, {
                        angle: 10
                    }).by(.12, {
                        angle: 10
                    }).by(.12, {
                        angle: -10
                    }).by(.12, {
                        angle: -10
                    }).by(.12, {
                        angle: 10
                    }).delay(.2).call(function() {
                        var e = i.getChildByName("gai");
                        e.active = !0, e.scale = 3, cc.tween(e).to(.2, {
                            scale: 1
                        }).start()
                    }).delay(.5).by(.6, {
                        x: 900
                    }).start()
                } else
                    for (var a = function(t) {
                            var o = e.container.children[t];
                            o.stopAllActions(), cc.tween(o).by(.2, {
                                scale: .1
                            }).by(.1, {
                                scale: -.1
                            }).delay(.2).by(.12, {
                                angle: 10
                            }).by(.12, {
                                angle: -10
                            }).by(.12, {
                                angle: -10
                            }).by(.12, {
                                angle: 10
                            }).by(.12, {
                                angle: 10
                            }).by(.12, {
                                angle: -10
                            }).by(.12, {
                                angle: -10
                            }).by(.12, {
                                angle: 10
                            }).delay(.2).call(function() {
                                var e = o.getChildByName("gai");
                                e.active = !0, e.scale = 3, cc.tween(e).to(.2, {
                                    scale: 1
                                }).start()
                            }).delay(.5).by(.6, {
                                x: 900
                            }).start()
                        }, c = 0; c < this.container.children.length; c++) a(c);
                if (window.UIManage) {
                    window.UIManage.levelShow.active = !0;
                    var s = window.UIManage.levelShow.getChildByName("jinDu").getComponent(cc.ProgressBar).progress + .1;
                    s > 1 && (s = 1), cc.tween(window.UIManage.levelShow.getChildByName("jinDu").getComponent(cc.ProgressBar)).delay(.8).to(.8, {
                        progress: s
                    }).delay(1.2).call(function() {
                        window.UIManage.levelShow.active = !1
                    }).start()
                }
            }
        }), cc._RF.pop()
    }, {}],
    LandscapeBanner: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "82046+MDCZGrIRvf6wAqX1P", "LandscapeBanner"), cc.Class({
            extends: cc.Component,
            properties: {
                MaskNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u53ef\u89c6\u8282\u70b9"
                },
                ItemContent: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5355\u5143\u5bb9\u5668"
                },
                ItemPrefab: {
                    default: null,
                    type: cc.Prefab,
                    displayName: "\u5355\u5143\u9884\u5236\u4f53"
                }
            },
            onLoad: function() {
                this.allowRoll = !1, this.rollDirection = 0, this.moveSpeed = 30, this.ItemContent.removeAllChildren(!0)
            },
            start: function() {
                this.ItemContent.getComponent(cc.Layout).updateLayout();
                var e = this.ItemContent.getContentSize().width,
                    t = this.MaskNode.getContentSize().width;
                this.minX = this.ItemContent.x, this.maxX = this.minX - (e - t), this.ItemContent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.ItemContent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.ItemContent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.ItemContent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.allowRoll = !0, this.node.active = !1
            },
            instantiation: function(e, t, o) {
                for (var n = 0; n < t.length; n++) {
                    var i = cc.instantiate(this.ItemPrefab);
                    this.ItemContent.addChild(i), i.getComponent("SmallItem").setDisplayInformation({
                        url: e[n],
                        name: t[n],
                        packageList: o[n]
                    })
                }
            },
            update: function(e) {
                if (this.allowRoll)
                    if (0 === this.rollDirection) {
                        if (this.ItemContent.x += this.moveSpeed * e, this.ItemContent.x >= this.minX) return this.ItemContent.x = this.minX, void(this.rollDirection = 1)
                    } else if (1 === this.rollDirection && (this.ItemContent.x -= this.moveSpeed * e, this.ItemContent.x <= this.maxX)) return this.ItemContent.x = this.maxX, void(this.rollDirection = 0)
            },
            onTouchStart: function(e) {
                this.allowRoll = !1, this.firstTouchPoint = this.ItemContent.convertToNodeSpaceAR(e.getLocation())
            },
            onTouchMove: function(e) {
                if (!this.allowRoll) {
                    var t = e.getDelta().x;
                    this.ItemContent.x += t, this.ItemContent.x >= this.minX && (this.ItemContent.x = this.minX), this.ItemContent.x <= this.maxX && (this.ItemContent.x = this.maxX)
                }
            },
            onTouchEnd: function(e) {
                if (!this.allowRoll) {
                    this.allowRoll = !0;
                    var t = this.ItemContent.convertToNodeSpaceAR(e.getLocation());
                    if (this.firstTouchPoint.sub(t).mag() < 10)
                        for (var o = this.ItemContent.children, n = 0; n < o.length; n++) {
                            var i = o[n];
                            if (i.getBoundingBox().contains(t)) {
                                console.log("\u70b9\u51fb\u4e86", i, i.getComponent("SmallItem")), i.getComponent("SmallItem").touchIconCallBack();
                                break
                            }
                        }
                }
            }
        }), cc._RF.pop()
    }, {}],
    LargenGesture: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f8d16G3detLCod4ypninlPE", "LargenGesture"), cc.Class({
            extends: cc.Component,
            properties: {
                maskNode: cc.Node,
                picNode: cc.Node,
                maxScale: 3,
                minScale: 1
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.controlEndCallBack, this), this.GAME_ISTEACH = !1, this.maskNode || (this.maskNode = this.node)
            },
            start: function() {},
            update: function(e) {
                this.picNode.scale
            },
            controlEndCallBack: function(e) {},
            onTouchStart: function(e) {
                if (!this.GAME_ISTEACH) {
                    this.IS_MOVEBJ = !1;
                    var t = e.getTouches();
                    1 == t.length || 2 == t.length && (this.startPos1 = this.node.convertToNodeSpaceAR(t[0].getLocation()), this.startPos2 = this.node.convertToNodeSpaceAR(t[1].getLocation()), this.pointsDis = this.startPos1.sub(this.startPos2).mag())
                }
            },
            onTouchMove: function(e) {
                if (!this.GAME_ISTEACH) {
                    var t = e.getTouches();
                    if (1 == t.length) {
                        var o = e.getDelta();
                        this.picNode.setPosition(this.picNode.position.add(o)), (Math.abs(e.getDelta().x) > 5 || Math.abs(e.getDelta().y > 5)) && (this.IS_MOVEBJ = !0), this.restrictPic()
                    } else if (2 == t.length) {
                        var n = this.node.convertToNodeSpaceAR(t[0].getLocation()),
                            i = this.node.convertToNodeSpaceAR(t[1].getLocation()),
                            a = n.sub(i).mag();
                        if (this.pointsDis || (this.pointsDis = 0), a > this.pointsDis) this.IS_MOVEBJ = !0, this.pointsDis = a, this.picNode.scale += .05, this.picNode.scale >= this.maxScale && (this.picNode.scale = this.maxScale);
                        else if (a < this.pointsDis) {
                            if (this.IS_MOVEBJ = !0, this.picNode.scale <= this.minScale) return void(this.picNode.scale = this.minScale);
                            this.pointsDis = a, this.picNode.scale -= .05
                        }
                        this.restrictPic()
                    }
                }
            },
            restrictPic: function() {
                var e = this.picNode.getBoundingBox().width,
                    t = this.picNode.getBoundingBox().height;
                this.picNode.x > 0 && this.picNode.x - 0 > e / 2 - this.maskNode.width / 2 && (this.picNode.x = e / 2 - this.maskNode.width / 2), this.picNode.x < 0 && this.picNode.x - 0 < this.maskNode.width / 2 - e / 2 && (this.picNode.x = this.maskNode.width / 2 - e / 2), this.picNode.y > 0 && this.picNode.y - 0 > t / 2 - this.maskNode.height / 2 && (this.picNode.y = t / 2 - this.maskNode.height / 2), this.picNode.y < 0 && this.picNode.y - 0 < this.maskNode.height / 2 - t / 2 && (this.picNode.y = this.maskNode.height / 2 - t / 2)
            }
        }), cc._RF.pop()
    }, {}],
    LevelData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d1731Z5hX5D4JzTxhsl/ayN", "LevelData"), window.GameData = {
            levelData: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            ]
        }, cc._RF.pop()
    }, {}],
    LevelItemScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bbd71qvo+lP+5zo6Pf+C8Rv", "LevelItemScript"), cc.Class({
            extends: cc.Component,
            properties: {
                _parentScript: null,
                levelItem: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5173\u5361\u5143\u7d20"
                },
                levelLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u5173\u5361\u5e8f\u53f7"
                },
                levelNow: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5f53\u524d\u5173\u5361"
                },
                levelNot: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5173\u5361\u672a\u89e3\u9501"
                },
                levelNot_video: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u89c6\u9891\u89e3\u9501"
                },
                levelNot_coin: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u91d1\u5e01\u89e3\u9501"
                }
            },
            start: function() {},
            onRegister: function(e) {
                this._parentScript = e
            },
            init: function(e, t) {
                this.index = t, this.levelLabel.string = t + 1 + "";
                window.GameData.levelData[t];
                this.isLock = !0, this.levelItem.active = !1, this.levelNot.active = !1, this.levelNow.active = !1;
                this._parentScript.priceList[t];
                cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][t] && cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][t] > 0 ? 1 == cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][t] ? this.levelNow.active = !0 : this.levelItem.active = !0 : this.levelNot.active = !0
            },
            onButtonEvevt: function() {
                cc.global.Source.onPlayGameEffect("buttonClick"), -1 != this.index && this._parentScript.onCheckeLevel(this.index)
            }
        }), cc._RF.pop()
    }, {}],
    LevelPushScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "46d96P8y8JMtpPkjHUepK/5", "LevelPushScript"), cc.Class({
            extends: cc.Component,
            properties: {
                button_no: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u62d2\u7edd\u6309\u94ae"
                },
                levelShow: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "\u5173\u5361\u5c55\u793a\u8282\u70b9"
                }
            },
            onLoad: function() {
                this.node.callBack && (this.callBack = this.node.callBack)
            },
            start: function() {
                this.onShowWindow()
            },
            onShowWindow: function() {
                for (var e = [], t = [], o = 0; o < 8; o++) e.push(o);
                for (var n = 0; n < 10; n++) t.push(n);
                e.splice(cc.global.nowChoseBigIndex, 1), this.levelIndex_big = e[Math.round(6 * Math.random())], this.levelIndex = t[Math.round(9 * Math.random())], this.levelShow.spriteFrame = null;
                var i = "package2/pinTu/" + cc.global.typeNames[this.levelIndex_big] + "/" + cc.global.typeNames[this.levelIndex_big] + (this.levelIndex + 1);
                cc.loader.loadRes(i, function(e, t) {
                    e || (this.levelShow.spriteFrame = new cc.SpriteFrame(t))
                }.bind(this))
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "yesButton":
                        cc.PlatformTools.executeShowAwardVideo(function(e) {
                            cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] <= 0 && (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 1), cc.playerData.p_BigLevel[cc.global.nowChoseBigIndex] <= 0 && (cc.playerData.p_BigLevel[cc.global.nowChoseBigIndex] = 1), cc.playerConfig.savePlayerData(), cc.global.nowChoseBigIndex = this.levelIndex_big, cc.global.nowChoseSmallIndex = this.levelIndex, window.GameManage && window.GameManage.onCreateLevel(), this.node.destroy()
                        }.bind(this));
                        break;
                    case "noButton":
                        cc.cheat.onRandomVideoADEvent(function() {
                            cc.playerData.p_SmallLevel[this.nowChoseBigIndex][this.nowChoseSmallIndex] <= 0 && (cc.playerData.p_SmallLevel[this.nowChoseBigIndex][this.nowChoseSmallIndex] = 1), cc.playerData.p_BigLevel[cc.global.nowChoseBigIndex] <= 0 && (cc.playerData.p_BigLevel[cc.global.nowChoseBigIndex] = 1), cc.playerConfig.savePlayerData(), cc.global.nowChoseBigIndex = this.levelIndex_big, cc.global.nowChoseSmallIndex = this.levelIndex, window.GameManage && window.GameManage.onCreateLevel(), this.node.destroy()
                        }.bind(this), function() {
                            this.callBack && (this.callBack(), this.callBack = null), this.node.destroy()
                        }.bind(this));
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            }
        }), cc._RF.pop()
    }, {}],
    LevelWindowScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c72f8VGamxFXLJsF1/rmAxH", "LevelWindowScript"), cc.Class({
            extends: cc.Component,
            properties: {
                contentNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5185\u5bb9\u8282\u70b9"
                },
                coinNumLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u91d1\u5e01\u7684\u663e\u793a"
                },
                aim: {
                    default: null,
                    type: dragonBones.ArmatureDisplay,
                    displayName: "\u52a8\u753b"
                }
            },
            onLoad: function() {
                cc.global.nowChoseBigIndex || (cc.global.nowChoseBigIndex = 0), cc.global.nowChoseSmallIndex = -1, this.scrollView = this.node.getChildByName("ScrollView").getComponent(cc.ScrollView), this.priceList = [0, 100, 0, 120, 0, 140, 0, 160, 0, 180, 0, 200, 0, 220, 0, 240], this.aimName = ["xz_jia", "xz_aoda", "xz_riben", "xz_akadika", "xz_yida", "xz_xiang"], this.aim.playAnimation(this.aimName[cc.global.nowChoseBigIndex], 0), this.onRefreshLevleList()
            },
            start: function() {
                if (window.oppo) {
                    this.btn_next;
                    adUtils.executeShowSpecialBanner({
                        isCustom: !0,
                        customName: "oppo-mutual-btn-look",
                        bottom: 280,
                        customHandle: function() {
                            if (window.oppo) {
                                var e = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                                e && (100 * Math.random() < window.GameConfig.randomWaive && e.getComponent("oppo-SpecialBanner").executeTouch(), e.removeFromParent(!0))
                            }
                        },
                        recoverHandle: function() {}
                    }, {
                        height: 320
                    }, function() {})
                } else cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial()
            },
            onRefreshLevleList: function() {
                var e = window.GameData.levelData[cc.global.nowChoseBigIndex],
                    t = this.contentNode.children;
                if (t.length >= e.length)
                    for (var o = 0; o < t.length; o++) o < e.length ? t[o].active = !0 : t[o].active = !1;
                for (var n = 0; n < e.length; n++)
                    if (n < t.length) t[n].getComponent("LevelItemScript").onRegister(this), t[n].getComponent("LevelItemScript").init(e[n], n);
                    else {
                        var i = cc.instantiate(t[0]);
                        i.getComponent("LevelItemScript").onRegister(this), i.getComponent("LevelItemScript").init(e[n], n), this.contentNode.addChild(i)
                    } this.scheduleOnce(function() {
                    this.onSettingScroll()
                }.bind(this), .1)
            },
            onCheckeLevel: function(e) {
                console.log("index=", e), cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][e] && cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][e] > 0 && (cc.global.nowChoseSmallIndex = e, window.HomeManage.onStartGame())
            },
            onSettingScroll: function() {
                for (var e = 0, t = 0; t < cc.playerData.p_SmallLevel[0].length; t++) cc.playerData.p_SmallLevel[0][t] && 1 == cc.playerData.p_SmallLevel[0][t] && (e = t);
                console.log("\u5f53\u524d\u5173\u5361\u5e8f\u53f7\u4e3a:", e);
                var o = parseInt(e / 3);
                console.log("\u6392\u6570=", o);
                var n = 230 * o + 0;
                console.log("\u9ad8\u5ea6\u4e3a:", n);
                var i = this.scrollView.getMaxScrollOffset();
                this.scrollView.scrollToOffset(cc.v2(i.x / 2, n), .6)
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "closeButton":
                        this.node.destroy();
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:")
                }
            },
            update: function(e) {
                this.coinNumLabel.string = cc.playerData.coin
            }
        }), cc._RF.pop()
    }, {}],
    LoadShowImgScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "05428h4NjdHoLX5MpWyn1QW", "LoadShowImgScript"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            onShowImg_locality: function(e) {
                this.node.getComponent(cc.Sprite) && (this.node.getComponent(cc.Sprite).spriteFrame = null, cc.loader.loadRes(e, function(e, t) {
                    e || (this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
                }.bind(this)))
            },
            onShowImg_server: function(e) {
                this.node.getComponent(cc.Sprite) && (this.node.getComponent(cc.Sprite).spriteFrame = null, cc.loader.load(e, function(e, t) {
                    e || (this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
                }.bind(this)))
            }
        }), cc._RF.pop()
    }, {}],
    LoseWindowScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e73b6Ju94dKtZVFxh+4Auda", "LoseWindowScript"), cc.Class({
            extends: cc.Component,
            properties: {
                btn_share: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5206\u4eab\u6309\u94ae"
                },
                coinNumLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u83b7\u5f97\u91d1\u5e01\u6570\u91cf"
                }
            },
            onLoad: function() {},
            start: function() {
                this.onShowWindow()
            },
            onShowWindow: function() {
                window.tt || window.wx || window.qq || window.ks ? (this.btn_share && (this.btn_share.active = !0), 100 * Math.random() < window.GameConfig.randomShare && this.scheduleOnce(function() {
                    cc.global.LoadPrefabData("prefabs/UI/sharePushWindow")
                }.bind(this), 1)) : this.btn_share && (this.btn_share.active = !1), this.coinAward = Math.round(2 * Math.random() + 3), this.coinNumLabel.string = "/" + this.coinAward, cc.playerData.coin += this.coinAward, cc.playerConfig.savePlayerData(), cc.global.Source.onPlayGameEffect("gameLose"), cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial("endGame"), cc.PlatformTools.executeStopVideoRecorder(), 100 * Math.random() < window.GameConfig.sendDesk && window.qg && cc.PlatformTools.sendToDesktop(), window.qq && (cc.PlatformTools.executeBlockAdShow(1), window.qqUtil.zhuomian(), window.qqUtil.lostCount += 1, window.qqUtil.lostCount >= window.GameConfig.lostVideo && window.GameConfig.lostVideo > 0 && qqUtil.sceneTrue() && (window.qqUtil.lostCount = 0, cc.PlatformTools.executeShowAwardVideo(null, null)));
                window.ArcadeTool.showResult()
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "btn_share":
                        cc.PlatformTools.executeShareRecorderVideo(), this.btn_share.active = !1;
                        break;
                    case "yesButton":
                        cc.PlatformTools.executeShowAwardVideo(function(e) {
                            cc.playerData.coin += 2 * this.coinAward, cc.playerConfig.savePlayerData(), cc.global.onPlayGetCoinEffect();
                            var t = function() {
                                cc.playerData.power -= 0, cc.global.nowChoseSmallIndex += 1, cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] || (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 1), cc.playerConfig.savePlayerData(), window.GameManage && window.GameManage.onCreateLevel(), this.node.destroy()
                            }.bind(this);
                            console.log("\u9700\u8981\u7684\u4f53\u529b\u548c\u603b\u4f53\u529b:", 0, cc.playerData.power), cc.playerData.power >= 0 ? t() : cc.global.LoadPrefabData("prefabs/UI/getPowerWindow", t)
                        }.bind(this));
                        break;
                    case "noButton":
                        cc.cheat.onRandomVideoADEvent(function() {
                            cc.playerData.coin += 2 * this.coinAward, cc.playerConfig.savePlayerData(), cc.global.onPlayGetCoinEffect();
                            var e = function() {
                                cc.playerData.power -= 0, cc.global.nowChoseSmallIndex += 1, cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] || (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 1), cc.playerConfig.savePlayerData(), window.GameManage && window.GameManage.onCreateLevel(), this.node.destroy()
                            }.bind(this);
                            console.log("\u9700\u8981\u7684\u4f53\u529b\u548c\u603b\u4f53\u529b:", 0, cc.playerData.power), cc.playerData.power >= 0 ? e() : cc.global.LoadPrefabData("prefabs/UI/getPowerWindow", e)
                        }.bind(this), function() {
                            cc.playerData.coin += this.coinAward, cc.playerConfig.savePlayerData(), cc.global.onPlayGetCoinEffect();
                            var e = function() {
                                cc.playerData.power -= 0, cc.global.nowChoseSmallIndex += 1, cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] || (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 1), cc.playerConfig.savePlayerData(), window.GameManage && window.GameManage.onCreateLevel(), this.node.destroy()
                            }.bind(this);
                            console.log("\u9700\u8981\u7684\u4f53\u529b\u548c\u603b\u4f53\u529b:", 0, cc.playerData.power), cc.playerData.power >= 0 ? e() : cc.global.LoadPrefabData("prefabs/UI/getPowerWindow", e)
                        }.bind(this));
                        break;
                    case "btn_again":
                        window.GameManage && window.GameManage.onCreateLevel(), this.node.destroy();
                        break;
                    case "btn_return":
                        window.UIManage.onReturnStartScene();
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            },
            update: function(e) {}
        }), cc._RF.pop()
    }, {}],
    MoreGame: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a58d6qJsmxBPpqmaYImCais", "MoreGame"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.oppo ? this.node.active = !0 : window.vivo ? this.node.active = !1 : window.qq ? this.node.active = !0 : this.node.active = !1
            },
            touchEventCallBack: function() {
                window.qg ? cc.PlatformTools.executeShowPushBox() : window.qq && cc.PlatformTools.executeShowPushBox()
            }
        }), cc._RF.pop()
    }, {}],
    MoveByScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "cdeeagqjylBqYijwA1hCmhL", "MoveByScript"), cc.Class({
            extends: cc.Component,
            properties: {
                isEnable: !0,
                orientation: "down",
                scope_x: 0,
                scope_y: 0,
                moveSumTime: 1,
                pauseSumTime: 1,
                isVeer: !1
            },
            onLoad: function() {
                this.pauseTime = 0, this.moveTime = this.moveSumTime, this.moveSpeed_x = this.scope_x / this.moveSumTime, this.moveSpeed_y = this.scope_y / this.moveSumTime, "movePlatform" != this.node.name && "movePlatform2" != this.node.name || (this.isEnable = !1)
            },
            start: function() {},
            update: function(e) {
                if (e > .1 && (e = .02), 0 != this.isEnable) {
                    if (this.pauseTime > 0) return this.pauseTime -= e, void(this.pauseTime <= 0 && 1 == this.isVeer && ("left" == this.orientation || "right" == this.orientation ? this.node.scaleX = -this.node.scaleX : "up" != this.orientation && "down" != this.orientation || (this.node.scaleY = -this.node.scaleY)));
                    if (this.moveTime > 0) {
                        this.moveTime -= e;
                        var t = this.moveSpeed_x * e,
                            o = this.moveSpeed_y * e,
                            n = this.node.position.clone();
                        n.x += t, n.y += o, this.node.position = n, this.moveTime < 0 && (this.moveTime = this.moveSumTime, this.pauseTime = this.pauseSumTime, this.moveSpeed_x = -this.moveSpeed_x, this.moveSpeed_y = -this.moveSpeed_y)
                    }
                }
            }
        }), cc._RF.pop()
    }, {}],
    MoveToTarget: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "fa6c2npXXRPMrOC+w+NepDf", "MoveToTarget"), cc.Class({
            extends: cc.Component,
            properties: {
                isEnable: !0,
                moveSumTime: 1,
                returnSumTime: 1,
                pauseSumTime: 1,
                sourceNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6e90\u8282\u70b9(\u8d77\u59cb\u8282\u70b9)"
                },
                targetNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u76ee\u6807\u8282\u70b9"
                }
            },
            onLoad: function() {
                this.targetPos = null, this.targetNode || (this.targetNode = this.node, this.targetPos = this.node.position.clone()), this.sourcePos = null, this.sourceNode || (this.sourceNode = this.node, this.sourcePos = this.node.position.clone()), this.isFront = !0
            },
            start: function() {
                if (this.isEnable) {
                    var e = cc.global.onTransitionPosition(this.sourceNode.parent, this.node.parent, this.sourceNode.position.clone());
                    this.node.setPosition(e), this.onGetNextPos()
                }
            },
            onMoveEvent: function(e, t) {
                var o = this;
                cc.tween(this.node).to(t, {
                    position: e
                }).delay(this.pauseSumTime).call(function() {
                    o.onGetNextPos()
                }).start()
            },
            onGetNextPos: function() {
                var e = null,
                    t = 0;
                1 == this.isFront ? (e = this.targetPos ? this.targetPos : cc.global.onTransitionPosition(this.targetNode.parent, this.node.parent, this.targetNode.position.clone()), t = this.moveSumTime) : (e = this.sourcePos ? this.sourcePos : cc.global.onTransitionPosition(this.sourceNode.parent, this.node.parent, this.sourceNode.position.clone()), t = this.returnSumTime), this.isFront = !this.isFront, this.onMoveEvent(e, t)
            },
            update: function(e) {
                if (this.isEnable && this.sourceNode) {
                    var t;
                    (t = ("pointToNode" == this.sourceNode.name ? this.sourceNode.parent : this.sourceNode).getComponent("DragItemScript")) && 1 == t.isFinish && (this.node.active = !1)
                }
            }
        }), cc._RF.pop()
    }, {}],
    MoveTo_voluntarily: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "64562qqoJZIpbiVN2uZo0sr", "MoveTo_voluntarily"), cc.Class({
            extends: cc.Component,
            properties: {
                posValue: {
                    default: cc.v2,
                    displayName: "\u8981\u79fb\u52a8\u5230\u7684\u76ee\u6807\u4f4d\u7f6e"
                },
                isChangeAngle: {
                    default: !0,
                    displayName: "\u662f\u5426\u6539\u53d8\u89d2\u5ea6"
                },
                angleValue: {
                    default: 0,
                    displayName: "\u76ee\u6807\u89d2\u5ea6"
                },
                isChangeScale: {
                    default: !0,
                    displayName: "\u662f\u5426\u6539\u53d8\u7f29\u653e"
                },
                scaleValue: {
                    default: cc.v2(1, 1),
                    displayName: "\u76ee\u6807\u7f29\u653e"
                },
                moveTime: {
                    default: .6,
                    displayName: "\u79fb\u52a8\u9700\u8981\u7684\u65f6\u95f4"
                },
                startDelayTime: {
                    default: 0,
                    displayName: "\u8d77\u59cb\u5ef6\u8fdf\u7684\u65f6\u95f4"
                }
            },
            start: function() {
                this.onMove()
            },
            onMove: function() {
                var e = 0;
                e = 1 == this.isChangeAngle ? this.angleValue : this.node.angle;
                var t = cc.v2(1, 1);
                t = 1 == this.isChangeScale ? this.scaleValue : cc.v2(1, 1), cc.tween(this.node).delay(this.startDelayTime).to(this.moveTime, {
                    position: this.posValue,
                    angle: e,
                    scaleX: t.x,
                    scaleY: t.y
                }).call(function() {}).start()
            }
        }), cc._RF.pop()
    }, {}],
    Move_circulationScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9d131nMrk9BLIuWle7quX03", "Move_circulationScript"), cc.Class({
            extends: cc.Component,
            properties: {
                moveSpee_y: {
                    default: 0,
                    displayName: "\u7eb5\u5411\u79fb\u52a8\u901f\u5ea6"
                },
                moveSpee_x: {
                    default: 10,
                    displayName: "\u79fb\u52a8\u901f\u5ea6"
                }
            },
            onLoad: function() {
                if (0 != this.moveSpee_x) {
                    this.distance = this.node.children[0].width;
                    for (var e = 0; e < this.node.children.length; e++) this.node.children[e].x = this.distance * e
                } else if (0 != this.moveSpee_y) {
                    this.distance = this.node.children[0].height;
                    for (var t = 0; t < this.node.children.length; t++) this.node.children[t].y = this.distance * t
                }
            },
            start: function() {},
            update: function(e) {
                for (var t = 0; t < this.node.children.length; t++) {
                    var o = this.node.children[t].position.clone();
                    0 != this.moveSpee_x ? (o.x += e * this.moveSpee_x, this.moveSpee_x < 0 && o.x < -1 * this.distance && (o.x += 2 * this.distance), this.moveSpee_x > 0 && o.x > 1 * this.distance && (o.x += -2 * this.distance)) : 0 != this.moveSpee_y && (o.y += e * this.moveSpee_y, this.moveSpee_y < 0 && o.y < -1 * this.distance && (o.y += 2 * this.distance), this.moveSpee_y > 0 && o.y > 1 * this.distance && (o.y += -2 * this.distance)), this.node.children[t].position = o
                }
            }
        }), cc._RF.pop()
    }, {}],
    NativeBanner: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bdcfcJuLXhAS6QUyTe2QNUI", "NativeBanner"), cc.Class({
            extends: cc.Component,
            properties: {
                adImg: cc.Sprite,
                btn_close: cc.Node,
                label_biaoTi: cc.Label,
                label_laiYuan: cc.Label
            },
            onLoad: function() {
                this.node.active = !1
            },
            executeRefresh: function(e, t, o) {
                var n = this;
                if (this.touchCallBack = t, this.closeCallBack = o, e) {
                    var i = e.adList[0];
                    this.imgPath = i.imgUrlList[0];
                    var a = i.title,
                        c = i.source,
                        s = this.getExtensionName(this.imgPath);
                    "png" !== s && "jpg" !== s && (s = "png"), this.adImg.spriteFrame = null, cc.loader.load({
                        url: this.imgPath,
                        type: s
                    }, function(e, t) {
                        e ? console.log("\u5e7f\u544a\u56fe\u7247\u52a0\u8f7d\u5931\u8d25", n.imgPath) : (n.adImg.spriteFrame = new cc.SpriteFrame(t), console.log("\u5e7f\u544a\u56fe\u7247\u52a0\u8f7d\u6210\u529f", n.imgPath))
                    }), this.label_biaoTi && window.hw && (this.label_biaoTi.string = a || ""), this.label_laiYuan && window.hw && (this.label_laiYuan.string = c || ""), this.node.active = !0;
                    var l = this.btn_close.getChildByName("closeButton").getContentSize();
                    this.btn_close.setContentSize(cc.size(l.width * window.GameConfig.closeScale, l.height * window.GameConfig.closeScale)), "NativeInterstitial" == this.node.name && (window.hw && (1 == window.GameConfig.isLine ? this.btn_close.setPosition(cc.v2(-269, 137)) : this.btn_close.setPosition(cc.v2(-269, 210))), window.vivo && this.node.getChildByName("seeAd") && (this.node.getChildByName("seeAd").active = !1))
                }
            },
            onTouchEvent: function() {
                this.touchCallBack && this.touchCallBack(), this.onCloseEvent()
            },
            onCloseEvent: function() {
                this.closeCallBack && this.closeCallBack(), this.node.active = !1
            },
            getExtensionName: function(e) {
                var t = e.lastIndexOf(".");
                return e.substr(t + 1)
            }
        }), cc._RF.pop()
    }, {}],
    NativeInterstitial_huawei: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4b6c0z87BVJxL/opwAZpOZ+", "NativeInterstitial_huawei"), cc.Class({
            extends: cc.Component,
            properties: {
                bj: cc.Sprite,
                btn_close: cc.Node,
                label_biaoTi: cc.Label,
                sourceLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u6765\u6e90"
                }
            },
            onLoad: function() {
                this.bj.spriteFrame = null, this.node.active = !1
            },
            executeRefresh: function(e, t) {
                if (t) {
                    var o = t.adList[0];
                    console.log("detail=", JSON.stringify(o)), this.banner = e, this.imgPath = o.imgUrlList[0], this.bannerCode = o.adId, this.title = o.title, this.source = o.source, cc.loader.load(this.imgPath, function(e, t) {
                        e ? console.log("\u5e7f\u544a\u56fe\u7247\u52a0\u8f7d\u5931\u8d25", this.node.name) : (this.bj.spriteFrame = new cc.SpriteFrame(t), this.node.active = !0, console.log("\u5e7f\u544a\u56fe\u7247\u52a0\u8f7d\u6210\u529f", this.node.name))
                    }.bind(this)), this.label_biaoTi && (this.title ? this.label_biaoTi.string = this.title : this.label_biaoTi.string = ""), this.sourceLabel && (this.source ? this.sourceLabel.string = this.source : this.sourceLabel.string = ""), this.onShangBao(), this.onShowCloseButton()
                }
            },
            executeDisplay: function() {
                this.banner && (this.node.active || (this.node.active = !0), this.onShowCloseButton())
            },
            onShangBao: function() {
                console.log("\u8c03\u7528\u4e0a\u62a5"), this.banner ? (console.log("\u5e7f\u544a\u66dd\u5149\u4e0a\u62a5:", this.bannerCode), this.banner.reportAdShow({
                    adId: this.bannerCode
                })) : console.log("\u4e0d\u7b26\u5408\u4e0a\u62a5\u6761\u4ef6")
            },
            touchBannerCallBack: function() {
                console.log("\u70b9\u4e2d\u4e86\u539f\u751f\u63d2\u5c4f0"), this.banner.reportAdClick({
                    adId: this.bannerCode
                }), this.exitTouchCallBack()
            },
            exitTouchCallBack: function() {
                console.log("\u5173\u95ed\u539f\u751f"), this.node.active = !1
            },
            onShowCloseButton: function() {
                1 == window.GameConfig.isLine ? this.btn_close.setPosition(cc.v2(320, 160)) : this.btn_close.setPosition(cc.v2(320, 240));
                var e = this.btn_close.getChildByName("closeButton").getContentSize();
                this.btn_close.setContentSize(cc.size(e.width * window.GameConfig.closeScale, e.height * window.GameConfig.closeScale))
            }
        }), cc._RF.pop()
    }, {}],
    NativeInterstitial: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "cb241gGu9RJeLp4nBKOPaab", "NativeInterstitial"), cc.Class({
            extends: cc.Component,
            properties: {
                bj: cc.Sprite
            },
            InitData: function(e, t, o) {
                e && cc.loader.load(e, function(e, t) {
                    this.bj.spriteFrame = new cc.SpriteFrame(t)
                }.bind(this)), this.exitCallBack = t, this.touchCallBack = o
            },
            touchBannerCallBack: function() {
                this.touchCallBack && this.touchCallBack()
            },
            exitTouchCallBack: function() {
                this.exitCallBack && this.exitCallBack()
            }
        }), cc._RF.pop()
    }, {}],
    Numerical: [function(e, t, o) {
        "use strict";

        function n(e) {
            this.arr = [], this.len = 0, void 0 == e && (e = "0"), this.base = e, this.init()
        }
        cc._RF.push(t, "902a6afyUhDdqNXcjDdEyg0", "Numerical"), n.prototype.init = function() {
            var e = this.base.slice(-1);
            if (e.charCodeAt() > 57) {
                for (var t = {
                        K: 3,
                        M: 6,
                        B: 9,
                        T: 12,
                        P: 15,
                        E: 18,
                        Z: 21,
                        Y: 24,
                        N: 27,
                        D: 30,
                        S: 33,
                        U: 36,
                        Q: 39
                    } [e], o = this.base.slice(0, this.base.length - 1).split("."), n = 0; n < t - 1; n++) this.arr.push(0);
                if (o.length > 1) {
                    var i = parseInt(o[1]);
                    i = Math.floor(i / Math.pow(10, o[1].length - 1)), this.arr.push(i)
                } else this.arr.push(0);
                for (var a = o[0].split(""), c = a.length - 1; c >= 0; c--) this.arr.push(parseInt(a[c]))
            } else
                for (var s = this.base.split(""), l = s.length - 1; l >= 0; l--) this.arr.push(parseInt(s[l]));
            this.len = this.arr.length, this.base = this.getShortString()
        }, n.prototype.alterationBase = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0";
            this.arr = [], this.len = 0, this.base = e, this.init()
        }, n.prototype.plus = function(e) {
            for (var t = [], o = Math.max(e.len, this.len), n = !1, i = 0; i < o; i++)
                if (void 0 !== e.arr[i] && void 0 !== this.arr[i]) {
                    var a = e.arr[i] + this.arr[i];
                    n && (a += 1, n = !1), a >= 10 ? (n = !0, t[i] = a % 10) : t[i] = a
                } else {
                    var c = void 0 !== e.arr[i] ? e.arr[i] : this.arr[i];
                    n && (c += 1, n = !1), c >= 10 ? (n = !0, t[i] = c % 10) : t[i] = c % 10
                } n && t.push(1), this.arr = t, this.len = this.arr.length, this.base = this.getShortString()
        }, n.prototype.minus = function(e) {
            var t = [];
            if (e.len > this.len || e.len == this.len && this.arr[this.len - 1] < e.arr[this.len - 1]) t.push(0);
            else {
                for (var o = 0, n = this.len, i = 0, a = 0; a < n && (i = this.arr[a], i -= o, a < e.len && (i -= e.arr[a]), i < 0 ? (o = 1, i += 10) : o = 0, !(i < 0)); a++) t.push(i);
                0 != o && (t = [0])
            }
            a = this.len = t.length;
            for (var c = -1; a-- && 0 == t[a];) c = Math.max(1, a);
            return c >= 0 && t.splice(c, this.len - c), this.arr = t, this.len = this.arr.length, this.base = this.getShortString()
        }, n.prototype.mult = function(e) {
            for (var t = [], o = 0, n = e + "", i = Math.max(this.len, n.length), a = 0; a <= i && (void 0 != this.arr[a] || 0 != o); a++) {
                var c = 0;
                void 0 !== this.arr[a] && (c = this.arr[a] * e), o > 0 && (c += o, o = 0), c > 9 && (o = Math.floor(c / 10)), c %= 10, t[a] = c
            }
            if (o > 0)
                if (o > 9) {
                    var s = Math.floor(o / 10);
                    o %= 10, t.push(o), t.push(s)
                } else t.push(o);
            return "10" == this.arr[0] || this.arr[1], this.arr = t, this.len = this.arr.length, this.getShortString(), this
        }, n.prototype.mult2 = function(e) {
            for (var t = (e += "").split(""), o = 0, i = new n, a = t.length - 1; a >= 0; a--) {
                var c = (new n).copy(this);
                c.mult(parseInt(e.charAt(a))), c.mult10(o), o++, i.plus(c)
            }
            return this.copy(i), this
        }, n.prototype.mult10 = function(e) {
            for (void 0 === e && (e = 1); e--;) this.arr.unshift(0);
            return this.len = this.arr.length, this
        }, n.prototype.div = function(e) {
            for (var t = !1, o = [], n = 0, i = 0, a = this.len, c = 0; a--;) c = 10 * n + this.arr[a], i = Math.floor(c / e), (t || i > 0) && (o.push(i), t = !0), n = c % e;
            return this.len = o.length, 0 == this.len ? (this.arr = [1], this.len = 1) : (this.arr = o, this.arr.reverse()), "10" == this.arr[0] || this.arr[1], this.getShortString(), this
        }, n.prototype.getShortString = function() {
            var e = 0,
                t = 0,
                o = "",
                n = 0;
            if (1 == (e = this.len) && 0 == this.arr[0]) return "0";
            for (t = e % 3, n = Math.floor(e / 3), 0 == t && (t = 3, n--), t = e - t; e-- > t;) o += this.arr[e];
            return n > 0 && this.arr[e] > 0 && (o += "." + this.arr[e]), o + ["", "K", "M", "B", "T", "P", "E", "Z", "Y", "N", "D", "S", "U", "Q"][n]
        }, n.prototype.getAnyNumStr = function() {
            for (var e = "", t = this.len - 1; t >= 0; t--) e += this.arr[t];
            return e
        }, n.prototype.bigger = function(e) {
            if (this.len > e.len) return !0;
            if (this.len < e.len) return !1;
            for (var t = this.len; t--;) {
                if (this.arr[t] > e.arr[t]) return !0;
                if (this.arr[t] < e.arr[t]) return !1
            }
            return !1
        }, n.prototype.biggerIncludeEqual = function(e) {
            if (this.len > e.len) return !0;
            if (this.len < e.len) return !1;
            for (var t = this.len; t--;) {
                if (this.arr[t] > e.arr[t]) return !0;
                if (this.arr[t] < e.arr[t]) return !1
            }
            return !0
        }, n.prototype.bigger2 = function(e) {
            if (this.len > e.len) return !0;
            if (this.len < e.len) return !1;
            for (var t = this.len; t--;) {
                if (this.arr[t] > e.arr[t]) return !0;
                if (this.arr[t] < e.arr[t]) return !1
            }
            return !0
        }, n.prototype.copy = function(e) {
            return this.arr = e.arr.concat(), this.len = e.len, this.base = e.base, this.getShortString(), this
        }, n.prototype.zero = function(e) {
            this.arr = [], this.len = 0, this.base = "0"
        }, n.prototype.isZero = function(e) {
            return !(0 != this.len && 1 != this.len || 0 != this.arr.length && 0 != this.arr[0])
        }, n.prototype.isOne = function(e) {
            return 1 != this.len || 1 != this.arr[0]
        }, n.prototype.noZero = function() {
            this.isZero() && (this.arr = [1], this.len = 1, this.base = "1")
        }, n.prototype.div10 = function(e) {
            void 0 == e && (e = 1);
            for (; e > 0; e--) this.arr.shift();
            return this.len = this.arr.length, this.len <= 0 && this.zero(), this.getShortString(), this
        }, n.prototype.divPresent = function(e) {
            var t = this.len - e.len;
            if (t >= 3) return 0;
            if (t < -3) return 10;
            var o = Math.max(this.len, e.len),
                n = "",
                i = "";
            for (t = Math.min(3, o); t--;) --o < this.len && (n += this.arr[o]), o < e.len && (i += e.arr[o]);
            return this.getShortString(), parseFloat(i) / parseFloat(n)
        }, n.prototype.present100 = function(e) {
            return 0 == e ? this : e <= 1e3 ? this.mult(e).div10(2) : e <= 1e4 ? (e = Math.floor(e / 10), this.mult(e).div10(1)) : e <= 1e5 ? (e = Math.floor(e / 100), this.mult(e)) : this.mult(e).div10(2)
        }, n.prototype.getDetails = function() {
            return {
                display: this.getShortString(),
                real: this.getAnyNumStr()
            }
        }, t.exports = n, cc._RF.pop()
    }, {}],
    OnlyLineShowScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e45e6j385VKrLEro0Lp3bdN", "OnlyLineShowScript"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                1 == window.GameConfig.isLine ? this.node.active = !0 : this.node.active = !1
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    OpacityChangeScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0afc1NCrpJNYKSnzNwknNYx", "OpacityChangeScript"), cc.Class({
            extends: cc.Component,
            properties: {
                showSumTime: .5,
                vanishSumTime: .1,
                toShowSumTime: .3,
                toVanishSumTime: .3,
                isRandomTime: !1
            },
            onLoad: function() {
                1 == this.isRandomTime && (this.showSumTime = 1 * Math.random(), this.vanishSumTime = 1 * Math.random(), this.toShowSumTime = 1 * Math.random(), this.toVanishSumTime = 1 * Math.random(), this.showSumTime = this.showSumTime / 2, this.toShowSumTime = this.toShowSumTime / 2), this.showTime = this.showSumTime, this.vanishTime = 0, this.toShowSpeed = 255 / this.toShowSumTime, this.toVanishSpeed = 255 / this.toVanishSumTime, this.isNeedShow = !0
            },
            start: function() {},
            update: function(e) {
                if (this.showTime >= 0) this.showTime -= e, this.showTime < 0 && (this.isNeedShow = !1);
                else if (this.vanishTime >= 0) this.vanishTime -= e, this.vanishTime < 0 && (this.isNeedShow = !0);
                else {
                    var t = this.node.opacity;
                    1 == this.isNeedShow ? ((t += this.toShowSpeed * e) > 255 && (t = 255, this.showTime = this.showSumTime), this.node.opacity = t) : (t -= this.toVanishSpeed * e) < 0 && (t = 0, this.vanishTime = this.vanishSumTime), this.node.opacity = t
                }
            }
        }), cc._RF.pop()
    }, {}],
    Photoscope: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "719e5nYz1tJXo7HHb/xoiGf", "Photoscope"), cc.Class({
            extends: cc.Component,
            properties: {
                targetList: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u76ee\u6807\u8282\u70b9\u5217\u8868"
                },
                maskNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u955c\u5934\u8282\u70b9"
                },
                eventList: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u4e8b\u4ef6\u8282\u70b9"
                },
                eventNode_over: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7ed3\u675f\u4e8b\u4ef6\u8282\u70b9"
                },
                isNeedPriorityShow: {
                    default: !1,
                    displayName: "\u662f\u5426\u9700\u8981\u4f18\u5148\u663e\u793a\u7ed3\u679c"
                },
                offsetPos: {
                    default: cc.v2(0, 0),
                    displayName: "\u504f\u79fb\u503c"
                }
            },
            onLoad: function() {
                this.targetIndex = 0
            },
            start: function() {
                this.touchNode || (console.log("\u672a\u627e\u5230\u70b9\u51fb\u8282\u70b9"), this.touchNode = this.node), this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.isTouch = !1
            },
            onTouchStart: function(e) {
                e.target;
                this.isTouch = !0;
                var t = this.touchNode.convertToNodeSpaceAR(e.getLocation());
                if (t = cc.global.onTransitionPosition(this.touchNode, this.touchNode.parent, t), 0 == this.offsetPos.x && 0 == this.offsetPos.y);
                else {
                    var o = t.add(this.offsetPos);
                    this.node.position = o
                }
            },
            onTouchEnd: function(e) {
                if (this.isTouch)
                    if (this.targetIndex >= this.targetList.length) console.log("\u6ca1\u6709\u76ee\u6807");
                    else {
                        this.isTouch = !1;
                        var t = this.onDetectionEvent();
                        console.log("\u641c\u5bfb\u7ed3\u679c", t), t > -1 && (1 == this.isNeedPriorityShow && (this.targetList[t].zIndex = this.node.zIndex + 1), this.eventList[t] && this.eventList[t].switchEvent(), this.targetIndex++, this.targetIndex >= this.targetList.length && (this.eventNode_over && this.eventNode_over.switchEvent(), this.maskNode.getComponent(cc.Mask).enabled = !1, this.node.getChildByName("mirrorImg") && (this.node.getChildByName("mirrorImg").active = !1), this.node.active = !1))
                    }
            },
            onTouchMove: function(e) {
                if (this.isTouch) {
                    var t = e.getDelta(),
                        o = this.node.position.clone().add(t);
                    this.node.position = o
                }
            },
            onDetectionEvent: function() {
                for (var e = -1, t = 0; t < this.targetList.length; t++) {
                    var o = cc.global.onTransitionPosition(this.maskNode.parent, this.targetList[t].parent, this.maskNode.position.clone());
                    if (1 == this.targetList[t].getBoundingBox().contains(o)) {
                        e = t;
                        break
                    }
                }
                if (-1 == e)
                    for (var n = 0; n < this.targetList.length; n++) {
                        o = cc.global.onTransitionPosition(this.targetList[n].parent, this.maskNode.parent, this.targetList[n].position.clone());
                        if (1 == this.maskNode.getBoundingBox().contains(o)) {
                            e = n;
                            break
                        }
                    }
                return e
            },
            update: function(e) {}
        }), cc._RF.pop()
    }, {}],
    Platform: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "9bfb8+FAYJMCbNNB2FVzQj2", "Platform"), cc.sys.platform == cc.sys.HUAWEI_GAME ? window.hw = window.qg : cc.sys.platform == cc.sys.OPPO_GAME ? window.oppo = window.qg : cc.sys.platform == cc.sys.VIVO_GAME ? window.vivo = window.qg : cc.sys.platform == cc.sys.XIAOMI_GAME ? window.xiaoMi = window.qg : window.mz_jsb && (window.meiZu = window.qg), window.qg && console.log("getProvider=", window.qg.getProvider());
        var c = function() {
            function t() {
                if (n(this, t), this.VideoSuccessCallBack = null, this.VideoFailureCallBack = null, this.PlatformTool = null, window.tt) console.log("\u52a0\u8f7d\u5934\u6761\u4fe1\u606f, \u5e76\u521d\u59cb\u5316"), this.PlatformTool = e("./toutiao.js"), this.PlatformTool.doInitialize();
                else if (window.hw) console.log("\u52a0\u8f7d\u534e\u4e3a\u4fe1\u606f, \u5e76\u521d\u59cb\u5316...."), this.PlatformTool = e("./huawei.js"), this.PlatformTool.doInitialize();
                else if (window.oppo) console.log("\u52a0\u8f7dOPPO\u4fe1\u606f, \u5e76\u521d\u59cb\u5316...."), this.PlatformTool = e("./oppo.js"), this.PlatformTool.doInitialize();
                else if (window.swan) {
                    console.log("\u52a0\u8f7d\u767e\u5ea6\u4fe1\u606f, \u5e76\u521d\u59cb\u5316");
                    var o = e("./baidu.js");
                    this.PlatformTool = new o, this.PlatformTool.doInitialize()
                } else if (window.qq) {
                    console.log("\u52a0\u8f7dqq\u5e73\u53f0, \u5e76\u521d\u59cb\u5316");
                    var i = e("./qq.js");
                    this.PlatformTool = new i, this.PlatformTool.doInitialize()
                } else window.vivo ? (console.log("\u52a0\u8f7dvivo\u4fe1\u606f, \u5e76\u521d\u59cb\u5316...."), this.PlatformTool = e("./vivo.js"), this.PlatformTool.doInitialize()) : window.meiZu ? (console.log("\u52a0\u8f7d\u9b45\u65cf\u4fe1\u606f"), this.PlatformTool = e("./meiZu.js")) : window.uc ? (console.log("\u52a0\u8f7dvivo\u4fe1\u606f, \u5e76\u521d\u59cb\u5316...."), this.PlatformTool = e("./h5_uc.js"), this.PlatformTool.doInitialize()) : window.h5api ? (console.log("\u52a0\u8f7d4399\u4fe1\u606f, \u5e76\u521d\u59cb\u5316"), this.PlatformTool = e("./h5_4399.js")) : console.log("\u65e0\u5e73\u53f0\u4fe1\u606f, \u65e0\u9700\u521d\u59cb\u5316")
            }
            return a(t, [{
                key: "executeShowBanner",
                value: function() {
                    console.log("\u8c03\u7528banner\u5e7f\u544a____________"), this.PlatformTool && window.GameConfig.allowBanner && this.PlatformTool.executeShowBanner()
                }
            }, {
                key: "executeHideBanner",
                value: function() {
                    this.PlatformTool && this.PlatformTool.executeHideBanner()
                }
            }, {
                key: "executeShowInterstitial",
                value: function(e) {
                    console.log("\u8c03\u7528\u63d2\u5c4f\u5e7f\u544a____________"), this.PlatformTool && window.GameConfig.allowInterstitial && this.PlatformTool.executeShowInterstitial(e)
                }
            }, {
                key: "executeVideoRecorder",
                value: function() {
                    this.PlatformTool && this.PlatformTool.executeRecorder && this.PlatformTool.executeRecorder()
                }
            }, {
                key: "executeStopVideoRecorder",
                value: function() {
                    this.PlatformTool && this.PlatformTool.stopRecorder && this.PlatformTool.stopRecorder()
                }
            }, {
                key: "executeShareRecorderVideo",
                value: function(e, t) {
                    this.PlatformTool ? this.PlatformTool.executeShareRecorder && this.PlatformTool.executeShareRecorder(e, t) : e && e()
                }
            }, {
                key: "executeShowAwardVideo",
                value: function(e, t) {
                    window.ArcadeTool.reward(e, t)
                }
            }, {
                key: "executeShowPushBox",
                value: function() {
                    this.PlatformTool && this.PlatformTool.executeShowPushBox()
                }
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    this.PlatformTool && this.PlatformTool.sendToDesktop(e)
                }
            }, {
                key: "executeBlockAdShow",
                value: function(e) {
                    this.PlatformTool && this.PlatformTool.executeBlockAdShow && this.PlatformTool.executeBlockAdShow(e)
                }
            }, {
                key: "executeAddColorSign",
                value: function() {
                    this.PlatformTool && this.PlatformTool.executeAddColorSign && this.PlatformTool.executeAddColorSign()
                }
            }, {
                key: "executeShowBanner2",
                value: function() {
                    this.PlatformTool && this.PlatformTool.executeShowBanner2 && this.PlatformTool.executeShowBanner2()
                }
            }, {
                key: "executeOpenAwemeUserProfile",
                value: function(e, t) {
                    this.PlatformTool && this.PlatformTool.executeOpenAwemeUserProfile && this.PlatformTool.executeOpenAwemeUserProfile(e, t)
                }
            }, {
                key: "executeShowSpecialBanner",
                value: function(e, t, o) {
                    100 * Math.random() < window.GameConfig.otherUIAD && (console.log("executeShowSpecialBanner"), this.PlatformTool.showSpecialBanner && this.PlatformTool.showSpecialBanner(e, t, o))
                }
            }, {
                key: "executeShowBoxWindow",
                value: function(e) {
                    100 * Math.random() < window.GameConfig.endGameAD && (console.log("executeShowSpecialBanner"), this.PlatformTool.showBoxWindow && this.PlatformTool.showBoxWindow(e))
                }
            }]), t
        }();
        t.exports = c, cc._RF.pop()
    }, {
        "./baidu.js": "baidu",
        "./h5_4399.js": "h5_4399",
        "./h5_uc.js": "h5_uc",
        "./huawei.js": "huawei",
        "./meiZu.js": "meiZu",
        "./oppo.js": "oppo",
        "./qq.js": "qq",
        "./toutiao.js": "toutiao",
        "./vivo.js": "vivo"
    }],
    PlayerConfig: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "c421bUfFmxBUI+XLdHcbKA+", "PlayerConfig");
        var c = function() {
            function e() {
                n(this, e), this.isResetTask = !1
            }
            return a(e, [{
                key: "init",
                value: function() {
                    this.getPlayerData(), this.onUpdateTimeInfo()
                }
            }, {
                key: "savePlayerData",
                value: function() {
                    window.ArcadeTool.savePlayer(cc.playerData)
                }
            }, {
                key: "getPlayerData",
                value: function(e) {
                    cc.playerData = window.ArcadeTool.getPlayer();
                    console.log("playerData=", cc.playerData), e && e()
                }
            }, {
                key: "onUpdateTimeInfo",
                value: function() {
                    var e = this.onGetTimeInfo(cc.playerData.lastOnLineTime);
                    console.log("timeInfo=", e);
                    var t = e.isSameWeek,
                        o = e.isSameDay,
                        n = cc.playerData.signInfo.days,
                        i = cc.playerData.signInfo.allow;
                    1 == t ? 1 == o || (i = !0, this.isResetTask = !0) : (n = 0, i = !0, this.isResetTask = !0);
                    var a = {
                        days: n,
                        allow: i
                    };
                    cc.playerData.signInfo = a, cc.playerData.lastOnLineTime = (new Date).getTime(), this.savePlayerData()
                }
            }, {
                key: "onGetTimeInfo",
                value: function(e) {
                    e > 0 || (e = parseInt(e));
                    var t = (new Date).getTime(),
                        o = new Date(e),
                        n = new Date(t),
                        i = o.getDay(),
                        a = n.getDay();
                    0 == a && (a = 7), 0 == i && (i = 7);
                    var c = !1,
                        s = !1,
                        l = parseInt((t - e) / 1e3);
                    return i < a ? t - e < 6048e5 && (c = !0) : i == a && t - e < 864e5 && (c = !0, s = !0), {
                        isSameWeek: c,
                        isSameDay: s,
                        intervalTime: l
                    }
                }
            }]), e
        }();
        t.exports = c, cc._RF.pop()
    }, {}],
    PointNode: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3b419HKSW1Nu7VmfBi7SWpt", "PointNode"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.isTouch = !1, this.node.opacity = 0, "GameScene" == cc.director.getScene().name && GameConfig.GAME_DRAW.PointArray.push(this)
            },
            start: function() {},
            showPointNode: function() {
                this.node.opacity = 255
            },
            HidePointNode: function() {
                this.node.opacity = 0
            },
            update: function(e) {
                "GameScene" == cc.director.getScene().name && (this.isTouch ? this.node.color = new cc.Color(0, 0, 0) : this.node.color = new cc.Color(255, 255, 255))
            }
        }), cc._RF.pop()
    }, {}],
    PointToChangeScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4b205cim8tFmrjhj9/m12Eg", "PointToChangeScript"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.sunTime = 1, this.moveSpeed = 80
            },
            start: function() {},
            onShow: function(e) {
                this.minY = e.y, this.maxY = this.minY + 40, this.node.position = e, this.moveAdd = !1, this.node.active = !0, this.isEnable = !0
            },
            onClose: function() {
                this.isEnable = !1, this.node.active = !1
            },
            update: function(e) {
                if (e > .1 && (e = .02), 1 == this.isEnable) {
                    this.node.y;
                    this.node.y < this.minY ? this.moveAdd = !0 : this.node.y > this.maxY && (this.moveAdd = !1), 1 == this.moveAdd ? this.node.y = this.node.y + e * this.moveSpeed : this.node.y = this.node.y - e * this.moveSpeed
                } else this.node.y = this.minY
            }
        }), cc._RF.pop()
    }, {}],
    PortraitPush: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3657bF7C49AnrBiFMT8nHfk", "PortraitPush"), cc.Class({
            extends: cc.Component,
            properties: {
                MaskNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u53ef\u89c6\u8282\u70b9"
                },
                ItemContent: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5355\u5143\u5bb9\u5668"
                },
                ItemPrefab: {
                    default: null,
                    type: cc.Prefab,
                    displayName: "\u5355\u5143\u9884\u5236\u4f53"
                }
            },
            onLoad: function() {
                this.allowRoll = !1, this.rollDirection = 0, this.moveSpeed = 30, this.ItemContent.removeAllChildren(!0)
            },
            start: function() {
                this.ItemContent.getComponent(cc.Layout).updateLayout();
                var e = this.ItemContent.getContentSize().height,
                    t = this.MaskNode.getContentSize().height;
                this.minY = 0, this.maxY = e - t, this.ItemContent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.ItemContent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.ItemContent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.ItemContent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.allowRoll = !0, this.node && (this.node.active = !1)
            },
            instantiation: function(e, t, o) {
                for (var n = 0; n < t.length; n++) {
                    var i = cc.instantiate(this.ItemPrefab);
                    this.ItemContent.addChild(i), i.getComponent("SmallItem").setDisplayInformation({
                        url: e[n],
                        name: t[n],
                        packageList: o[n]
                    })
                }
            },
            update: function(e) {
                if (this.allowRoll)
                    if (1 === this.rollDirection) {
                        if (this.ItemContent.y += this.moveSpeed * e, this.ItemContent.y >= this.maxY) return this.ItemContent.y = this.maxY, void(this.rollDirection = 0)
                    } else if (0 === this.rollDirection && (this.ItemContent.y -= this.moveSpeed * e, this.ItemContent.y <= this.minY)) return this.ItemContent.y = this.minY, void(this.rollDirection = 1)
            },
            onTouchStart: function(e) {
                this.allowRoll = !1, this.firstTouchPoint = this.ItemContent.convertToNodeSpaceAR(e.getLocation())
            },
            onTouchMove: function(e) {
                if (!this.allowRoll) {
                    var t = e.getDelta().y;
                    this.ItemContent.y += t, this.ItemContent.y >= this.maxY && (this.ItemContent.y = this.maxY), this.ItemContent.y <= this.minY && (this.ItemContent.y = this.minY)
                }
            },
            onTouchEnd: function(e) {
                if (!this.allowRoll) {
                    this.allowRoll = !0;
                    var t = this.ItemContent.convertToNodeSpaceAR(e.getLocation());
                    if (this.firstTouchPoint.sub(t).mag() < 10)
                        for (var o = this.ItemContent.children, n = 0; n < o.length; n++) {
                            var i = o[n];
                            if (i.getBoundingBox().contains(t)) {
                                i.getComponent("SmallItem").touchIconCallBack();
                                break
                            }
                        }
                }
            },
            onButtonClick: function(e) {
                switch (e.target.name) {
                    case "btn_close":
                        this.node.active = !1
                }
            }
        }), cc._RF.pop()
    }, {}],
    PrivacyButton: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e74d63dRwRBB7cK4sAZVU8Z", "PrivacyButton"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.oppo || window.vivo || window.qq ? (this.node.active = !0, console.log("\u663e\u793a\u9690\u79c1\u534f\u8bae\u6309\u94ae")) : this.node.active = !1
            },
            start: function() {},
            onShowPrivacy: function() {
                cc.loader.loadRes("Platform/Native/Prefab/privacy/Privacy_home", function(e, t) {
                    e || (cc.instantiate(t).parent = cc.director.getScene())
                }), cc.PlatformTools && cc.PlatformTools.executeHideBanner()
            }
        }), cc._RF.pop()
    }, {}],
    PrivacyScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e508cOs4IJFu5K8VGQrSWJu", "PrivacyScript"), cc.Class({
            extends: cc.Component,
            properties: {
                gameInfo_hw: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6e38\u620f\u4fe1\u606f_\u534e\u4e3a"
                },
                gameInfo_vivo: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6e38\u620f\u4fe1\u606f_vivo"
                },
                gameInfo_qq: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6e38\u620f\u4fe1\u606f_qq"
                }
            },
            onLoad: function() {
                window.initial && window.initial.node ? (window.initial.node.zIndex = 10, this.node.zIndex = window.initial.node.zIndex - 1) : this.node.zIndex = 10, this.node.callBack && (this.callBack = this.node.callBack), this.gameInfo_hw && (this.gameInfo_hw.active = !1), this.gameInfo_vivo && (this.gameInfo_vivo.active = !1), this.gameInfo_qq && (this.gameInfo_qq.active = !1), window.hw ? this.gameInfo_hw && (this.gameInfo_hw.active = !0) : window.vivo ? this.gameInfo_vivo && (this.gameInfo_vivo.active = !0) : window.qq && this.gameInfo_qq && (this.gameInfo_qq.active = !0)
            },
            start: function() {},
            onButtonClick: function(e) {
                switch (e.target.name) {
                    case "btn_yes":
                        this.callBack && this.callBack(), this.node.destroy();
                        break;
                    case "btn_no":
                        window.vivo ? window.qg.exitApplication() : window.qq ? window.qq.exitMiniProgram() : cc.game.end();
                        break;
                    case "btn_close":
                        this.node.destroy();
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            }
        }), cc._RF.pop()
    }, {}],
    PropPushScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3c049HtXPJNiJL7E4qOQO5N", "PropPushScript"), cc.Class({
            extends: cc.Component,
            properties: {
                propShowNode: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u9053\u5177\u5c55\u793a\u8282\u70b9"
                },
                button_no: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u62d2\u7edd\u6309\u94ae"
                }
            },
            onLoad: function() {
                this.propType = 0
            },
            start: function() {
                this.onShowWindow()
            },
            onShowWindow: function() {
                cc.cheat.onBannerWuDianEvent(this, this.button_no), console.log("\u63a8\u9053\u5177")
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "yesButton":
                        cc.PlatformTools.executeShowAwardVideo(function(e) {
                            1 == this.propType ? (cc.playerData.prop_powerful += 3, cc.playerData.prop_eliminate += 3) : 2 == this.propType && (cc.playerData.prop_bomb += 3), window.UIManage && window.UIManage.onRefreshUI(), this.node.destroy()
                        }.bind(this));
                        break;
                    case "noButton":
                        cc.cheat.onRandomVideoADEvent(function() {
                            1 == this.propType ? (cc.playerData.prop_powerful += 3, cc.playerData.prop_eliminate += 3) : 2 == this.propType && (cc.playerData.prop_bomb += 3), window.UIManage && window.UIManage.onRefreshUI(), this.node.destroy()
                        }.bind(this), function() {
                            this.node.destroy()
                        }.bind(this));
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            }
        }), cc._RF.pop()
    }, {}],
    RankingScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7c968foCONOYKRRD7Tm1qHF", "RankingScript"), cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                oneselfScoreLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u81ea\u5df1\u7684\u5206\u6570"
                }
            },
            onLoad: function() {
                this.rankingData = [{
                    name: "\u4f26\u6566\u7684\u661f\u5149\u4e0d\u6563\u573a"
                }, {
                    name: "\u2570\u2547\u83aa\u256e\u535f\u30b8\u914d\u256e"
                }, {
                    name: "Dounp ||\u56de\u5fc6\u3002"
                }, {
                    name: "\u6211\u6ca1\u53d8\u3001\u53ea\u662f\u4f60\u538c\u5026\u4e86"
                }, {
                    name: "(_\u848d\u7962\u8b8a\u4e56\ue7ee"
                }, {
                    name: "\u5c0b\u627e\u90a3\u4efd\u60c5"
                }, {
                    name: "`\u7231\u53ef\u5e73\u5c71\u6cb3"
                }, {
                    name: "\u5927\u9f20\u9f20\u256e"
                }, {
                    name: "<\u5a73\u5f71>"
                }, {
                    name: "\u56de\u5fc6\u706c\u3118\u3013\u5979"
                }], this.scoreList = null
            },
            start: function() {
                this.onRefreshWindow(), this.oneselfScoreLabel.string = parseInt(cc.playerData.maxScore_model1), cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial()
            },
            onRefreshWindow: function() {
                var e = this.rankingData;
                this.scoreList = this.onGetScore_rank(e.length), this.onRefreshList(e)
            },
            onRefreshList: function(e) {
                var t = this.content.children;
                if (t.length >= e.length)
                    for (var o = 0; o < t.length; o++) o < e.length ? t[o].active = !0 : t[o].active = !1;
                for (var n = 0; n < e.length; n++)
                    if (n < t.length) t[n].getChildByName("indexLabel").getComponent(cc.Label).string = n + 1, t[n].getChildByName("nameLabel").getComponent(cc.Label).string = e[n].name, t[n].getChildByName("scoreLabel").getComponent(cc.Label).string = this.scoreList[n];
                    else {
                        var i = cc.instantiate(t[0]);
                        i.getChildByName("indexLabel").getComponent(cc.Label).string = n + 1, i.getChildByName("nameLabel").getComponent(cc.Label).string = e[n].name, i.getChildByName("scoreLabel").getComponent(cc.Label).string = this.scoreList[n], this.content.addChild(i)
                    }
            },
            onGetScore_rank: function(e) {
                for (var t = [], o = 0; o < e; o++) t.push(Math.round(3e5 * Math.random() + 6e5));
                return t.sort(function(e, t) {
                    return e > t ? -1 : 1
                }), t
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "btn_close":
                        this.node.destroy();
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            }
        }), cc._RF.pop()
    }, {}],
    ReferralsGame: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b512c5vjiVFL6uj6t4XZ9tE", "ReferralsGame"), cc.Class({
            extends: cc.Component,
            properties: {
                showPic: cc.Sprite
            },
            onLoad: function() {
                this.showID = 0, this.changeTime = 0, (window.qg || window.swan || window.tt) && window.GameConfig.iconList && window.GameConfig.packageList ? window.GameConfig.packageList.length <= 0 || window.GameConfig.packageList.length <= 0 ? this.node.active = !1 : this.showIcon() : this.node.active = !1
            },
            showIcon: function() {
                (window.qg || window.swan || window.tt) && cc.loader.load(window.GameConfig.iconList[this.showID], function(e, t) {
                    e || (this.showPic.spriteFrame = new cc.SpriteFrame(t))
                }.bind(this))
            },
            touchIconCallBack: function() {
                if (window.tt) {
                    "ios" === window.tt.getSystemInfoSync().platform && window.tt.showToast({
                        title: " iOS\u4e0d\u652f\u6301\u6b64\u529f\u80fd"
                    });
                    for (var e = [], t = 0; t < window.GameConfig.packageList.length; t++) {
                        var o;
                        o = {
                            appId: window.GameConfig.packageList[t],
                            query: "foo=bar&baz=qux",
                            extraData: {}
                        }, e.push(o)
                    }
                    window.tt.showMoreGamesModal({
                        appLaunchOptions: [{
                            appId: "",
                            query: "foo=bar&baz=qux",
                            extraData: {}
                        }],
                        success: function(e) {},
                        fail: function(e) {}
                    })
                } else window.qg ? window.qg.navigateToMiniGame({
                    pkgName: window.GameConfig.packageList[this.showID],
                    path: "?page=pageB",
                    extraData: {
                        from: "\u8111\u6d1e\u4fa6\u63a2"
                    },
                    success: function() {},
                    fail: function(e) {
                        console.log(JSON.stringify(e))
                    }
                }) : window.swan && window.swan.navigateToMiniProgram({
                    appKey: window.GameConfig.packageList[this.showID],
                    path: "/path/page/0",
                    extraData: {
                        from: "\u8111\u6d1e\u4fa6\u63a2"
                    },
                    success: function() {},
                    fail: function(e) {
                        console.log(JSON.stringify(e))
                    }
                })
            },
            update: function(e) {
                this.changeTime += e, this.changeTime >= 3 && (this.changeTime = 0, this.showID += 1, this.showID >= window.GameConfig.iconList.length && (this.showID = 0), this.showIcon())
            }
        }), cc._RF.pop()
    }, {}],
    RotationScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "37fd3dsThVLKI23dM4s2RaZ", "RotationScript"), cc.Class({
            extends: cc.Component,
            properties: {
                rotateSpeed: 100
            },
            start: function() {
                this.rotateSpeed || (this.rotateSpeed = 100)
            },
            update: function(e) {
                e > .1 && (e = .02), this.node.angle -= this.rotateSpeed * e
            }
        }), cc._RF.pop()
    }, {}],
    ScaleChangeScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ff798zto3FF1aQTH5D80KZU", "ScaleChangeScript"), cc.Class({
            extends: cc.Component,
            properties: {
                extent_max: {
                    default: 1.1,
                    displayName: "\u6700\u5927\u500d\u6570\u7f29\u653e"
                },
                extent_min: {
                    default: .9,
                    displayName: "\u6700\u5c0f\u500d\u6570\u7f29\u653e"
                },
                time_toBig: {
                    default: .8,
                    displayName: "\u53d8\u5927\u65f6\u95f4"
                },
                time_toSmall: {
                    default: .8,
                    displayName: "\u7f29\u5c0f\u65f6\u95f4"
                }
            },
            onLoad: function() {
                var e = this.node.scale;
                this.scaleMin = this.extent_min * e, this.scaleMax = this.extent_max * e
            },
            start: function() {
                this.onActionEvent()
            },
            onActionEvent: function() {
                this.node.scale = this.scaleMin, cc.tween(this.node).repeatForever(cc.tween().to(this.time_toBig, {
                    scale: this.scaleMax
                }).to(this.time_toSmall, {
                    scale: this.scaleMin
                }).start()).start()
            },
            update: function(e) {}
        }), cc._RF.pop()
    }, {}],
    SharePushScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bba25aeoYFL8beTbWbFsgDx", "SharePushScript"), cc.Class({
            extends: cc.Component,
            properties: {
                closeBtn: cc.Node
            },
            onLoad: function() {},
            start: function() {
                var e = this.closeBtn.getChildByName("closeButton").getContentSize();
                this.closeBtn.setContentSize(cc.size(e.width * window.GameConfig.closeScale, e.height * window.GameConfig.closeScale))
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "shareImg":
                        if (0 == window.GameConfig.randomShare) return;
                        cc.PlatformTools.executeShareRecorderVideo(function() {
                            this.node.destroy()
                        }.bind(this), function() {
                            this.node.destroy()
                        }.bind(this)), window.winWindow && window.winWindow.btn_share && (window.winWindow.btn_share.active = !1);
                        break;
                    case "button_share":
                        cc.PlatformTools.executeShareRecorderVideo(function() {
                            this.node.destroy()
                        }.bind(this), function() {
                            this.node.destroy()
                        }.bind(this)), window.winWindow && window.winWindow.btn_share && (window.winWindow.btn_share.active = !1);
                        break;
                    case "close":
                        this.node.destroy();
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            }
        }), cc._RF.pop()
    }, {}],
    Shortcut: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5797doKrChOWJzfPykyyvog", "Shortcut"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                var e = this;
                if (window.qg) {
                    if (window.qg.getSystemInfoSync().platformVersionCode < 1076) return void(this.node.active = !1);
                    window.qg.hasShortcutInstalled({
                        success: function(e) {
                            e ? this.node.active = !1 : console.log("\u4e0d\u5b58\u5728\u684c\u9762\u56fe\u6807")
                        }.bind(this),
                        fail: function(e) {
                            this.node.active = !1
                        }.bind(this),
                        complete: function() {}.bind(this)
                    })
                } else {
                    if (!window.ks) return void(this.node.active = !1);
                    window.ks.getAPKShortcutInstallStatus(function(t) {
                        -10005 === t.code ? (e.node.active = !1, console.log("\u6682\u4e0d\u652f\u6301\u8be5\u6dfb\u52a0\u684c\u9762\u529f\u80fd", t)) : 1 === t.code ? t.installed ? console.log("\u8be5\u6e38\u620f\u5df2\u6dfb\u52a0\u5230\u684c\u9762", t.installed) : e.node.active = !0 : (e.node.active = !1, console.log("\u83b7\u53d6\u684c\u9762\u56fe\u6807\u5931\u8d25", t))
                    })
                }
            },
            touchEventCallBack: function(e) {
                var t = this;
                window.qg.installShortcut({
                    success: function() {
                        t.node.active = !1
                    },
                    fail: function(e) {},
                    complete: function() {}
                })
            }
        }), cc._RF.pop()
    }, {}],
    ShowControlScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5cfdbxx0TBGYb/IB/kHqIZZ", "ShowControlScript"), cc.Class({
            extends: cc.Component,
            properties: {
                isShow_wx: {
                    default: !0,
                    displayName: "\u5fae\u4fe1\u5e73\u53f0\u662f\u5426\u663e\u793a"
                },
                isShow_tt: {
                    default: !0,
                    displayName: "\u5934\u6761\u5e73\u53f0\u662f\u5426\u663e\u793a"
                },
                isShow_swan: {
                    default: !0,
                    displayName: "\u767e\u5ea6\u5e73\u53f0\u662f\u5426\u663e\u793a"
                },
                isShow_hw: {
                    default: !0,
                    displayName: "\u534e\u4e3a\u5e73\u53f0\u662f\u5426\u663e\u793a"
                },
                isShow_qg: {
                    default: !0,
                    displayName: "oppo\u5e73\u53f0\u662f\u5426\u663e\u793a"
                },
                isShow_qq: {
                    default: !0,
                    displayName: "qq\u5e73\u53f0\u662f\u5426\u663e\u793a"
                }
            },
            onLoad: function() {},
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    ShowImgScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0dd02gw4/1DC6M7rTdCHmQf", "ShowImgScript"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            onShowImg_locality: function(e) {
                this.node.getComponent(cc.Sprite).spriteFrame = null, cc.loader.loadRes(e, function(e, t) {
                    e || (this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
                }.bind(this))
            },
            onShowImg_server: function(e) {
                this.node.getComponent(cc.Sprite).spriteFrame = null, cc.loader.load(e, function(e, t) {
                    e || (this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
                }.bind(this))
            }
        }), cc._RF.pop()
    }, {}],
    SignScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b86d8AWfCxDtLBXfKKrbJow", "SignScript"), cc.Class({
            extends: cc.Component,
            properties: {
                spriteIconFrame: {
                    default: [],
                    type: cc.SpriteFrame,
                    displayName: "\u56fe\u6807\u7eb9\u7406"
                },
                contentNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7b7e\u5230\u5185\u5bb9\u8282\u70b9"
                },
                getNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u9886\u53d6\u6309\u94ae\u8282\u70b9"
                },
                closeButton: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5173\u95ed\u6309\u94ae\u8282\u70b9"
                }
            },
            onLoad: function() {},
            start: function() {
                this.onRefreshButtonShow(), this.onShowWindow()
            },
            init: function() {},
            getSignData: function() {
                return [{
                    kind0: 200
                }, {
                    kind0: 300
                }, {
                    kind0: 400
                }, {
                    kind0: 500
                }, {
                    kind0: 600
                }, {
                    kind0: 700
                }, {
                    kind0: 1e3
                }]
            },
            onRefreshButtonShow: function() {
                var e = this;
                cc.playerData.signInfo.days;
                if (1 == cc.playerData.signInfo.allow)
                    if (this.getNode && (this.getNode.active = !0), this.closeButton && (this.closeButton.active = !1), window.oppo) {
                        var t = this.getNode.getChildByName("getButton");
                        adUtils.executeShowSpecialBanner({
                            isCustom: !0,
                            customName: "oppo-mutual-btn-puTongLingQu",
                            bottom: 380,
                            customHandle: function() {
                                if (window.oppo) {
                                    var t = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                                    t && (100 * Math.random() < window.GameConfig.randomWaive && t.getComponent("oppo-SpecialBanner").executeTouch(), t.removeFromParent(!0))
                                }
                                e.onSignSucceedEvent(1)
                            },
                            recoverHandle: function() {
                                t.getComponent(cc.Sprite).enabled = !0, t.getChildByName("seeAd") && t.getChildByName("seeAd").destroy(), t.getComponent("scaleEffect") && (t.removeComponent("scaleEffect"), t.scale = 1)
                            }
                        }, {
                            height: 380
                        }, function() {
                            t.getComponent(cc.Sprite).enabled = !1;
                            var o = new cc.Node;
                            o.name = "seeAd", o.parent = t, o.addComponent(cc.Sprite), o.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
                            cc.loader.loadRes("Platform/Native/Texture/seeAd", function(e, n) {
                                var i = this;
                                o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n), t.addComponent("ScaleChangeScript"), o.on(cc.Node.EventType.TOUCH_START, function() {
                                    var e = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                                    e && (100 * Math.random() < window.GameConfig.randomWaive && e.getComponent("oppo-SpecialBanner").executeTouch(), e.removeFromParent(!0)), i.onSignSucceedEvent(1)
                                }, this)
                            }.bind(e))
                        })
                    } else cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial();
                else this.getNode && (this.getNode.active = !1), this.closeButton && (this.closeButton.active = !0), window.oppo ? cc.PlatformTools.executeShowBanner() : (cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial())
            },
            onShowWindow: function() {
                this.dayNode = this.contentNode.children;
                var e = this.getSignData();
                e.length != this.dayNode.length && console.log("\u7b7e\u5230\u6570\u636e\u5f02\u5e38");
                for (var t = cc.playerData.signInfo.days, o = cc.playerData.signInfo.allow, n = 0; n < this.dayNode.length; n++) {
                    this.dayNode[n].getChildByName("icon").getComponent(cc.Sprite);
                    var i = this.dayNode[n].getChildByName("numLabel").getComponent(cc.Label),
                        a = this.dayNode[n].getChildByName("overBack"),
                        c = this.dayNode[n].getChildByName("mayGet"),
                        s = this.dayNode[n].getChildByName("noGet"),
                        l = this.dayNode[n].getChildByName("daysLabel");
                    a.active = !1, c.active = !1, s.active = !1, l.getComponent(cc.Label).string = "" + (n + 1);
                    var r = e[n].kind0;
                    i.string = r, n < t ? a.active = !0 : n == t && 1 == o ? c && (c.active = !0) : s.active = !0
                }
            },
            onSignSucceedEvent: function(e) {
                var t = cc.playerData.signInfo.days;
                if (0 == cc.playerData.signInfo.allow) return console.log("\u4eca\u65e5\u5df2\u7b7e\u5230"), void cc.global.hintText.onShowHintText("\u4eca\u65e5\u5df2\u7b7e\u5230\n\u65e0\u6cd5\u91cd\u590d\u7b7e\u5230");
                var o = this.getSignData();
                if (o[t])
                    for (var n in o[t]) {
                        var i = parseInt(n.substring(4)),
                            a = o[t][n];
                        0 == i ? (cc.playerData.coin += a * e, cc.global.LoadPrefabData("prefabs/UI/getShowWindow", {
                            frame: this.dayNode[t].getChildByName("icon").getComponent(cc.Sprite).spriteFrame,
                            num: a
                        })) : 1 == i && this.onRandomOpenModel(a * e)
                    }
                cc.playerData.signInfo.allow = !1, cc.playerData.signInfo.days++, cc.playerConfig.savePlayerData(), this.onRefreshButtonShow(), this.onCloseUI()
            },
            onRandomOpenModel: function(e) {
                for (var t = "", o = [], n = 0; n < window.gameData.levelDataList.length && 1 != cc.playerData.isVip; n++) cc.playerData.p_SmallLevel[n] ? 0 == cc.playerData.p_SmallLevel[n] && o.push(n) : o.push(n);
                if (0 == o.length) t = "\u6240\u6709\u73a9\u6cd5\u5df2\u7ecf\u5168\u90e8\u89e3\u9501";
                else {
                    for (var i = 0; i < e && !(o.length <= 0); i++) {
                        var a = Math.round(Math.random() * (o.length - 1)),
                            c = o[a];
                        t += window.gameData.levelDataList[c].name + "\u3001", cc.playerData.p_SmallLevel[c] = 1, cc.playerConfig.savePlayerData(), o.splice(a, 1)
                    }
                    o.length <= 0 ? t = "\u6240\u6709\u73a9\u6cd5\u5df2\u7ecf\u5168\u90e8\u89e3\u9501" : t += "\u7b49\u73a9\u6cd5\u5df2\u7ecf\u89e3\u9501"
                }
                cc.global.hintText.onShowHintText(t)
            },
            onCloseUI: function() {
                this.node.destroy(), cc.global.Source.onPlayBtnEffect()
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "getButton":
                        cc.cheat.onRandomVideoADEvent(function() {
                            this.onSignSucceedEvent(2)
                        }.bind(this), function() {
                            this.onSignSucceedEvent(1)
                        }.bind(this));
                        break;
                    case "getButton2":
                        cc.PlatformTools.executeShowAwardVideo(function(e) {
                            this.onSignSucceedEvent(2)
                        }.bind(this));
                        break;
                    case "closeButton":
                        this.node.destroy();
                        var t = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                        t && t.removeFromParent(!0);
                        break;
                    case "signDay_1":
                    case "":
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:")
                }
            },
            onDisable: function() {
                window.UIManage && window.UIManage.showAdEvent(), window.HomeManage && window.HomeManage.showAdEvent()
            }
        }), cc._RF.pop()
    }, {}],
    SmallItem: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bd132IEundNS50VuKiQAZVw", "SmallItem"), cc.Class({
            extends: cc.Component,
            properties: {
                Img: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "\u56fe"
                },
                NameLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u6e38\u620f\u540d"
                },
                playerNum: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u7528\u6237\u6570\u91cf"
                }
            },
            onLoad: function() {
                this.Img.spriteFrame = null, this.NameLabel.string = "", this.playerNum && (this.playerNum.string = ""), this.packageList = null
            },
            setDisplayInformation: function(e) {
                var t = this;
                if (cc.loader.load(e.url, function(e, o) {
                        t.Img.spriteFrame = new cc.SpriteFrame(o)
                    }), this.NameLabel.string = e.name, this.gameName = e.name, this.packageList = e.packageList, this.playerNum) {
                    var o = Math.round(46 * Math.random() + 52);
                    o /= 10, this.playerNum.string = o + "\u4e07\u4eba\u5728\u73a9"
                }
            },
            touchIconCallBack: function() {
                window.swan && window.swan.navigateToMiniProgram({
                    appKey: this.packageList,
                    path: "/path/page/0",
                    extraData: {
                        from: "\u62a2\u5360\u72d9\u51fb\u624b"
                    },
                    success: function() {},
                    fail: function(e) {
                        console.log(JSON.stringify(e))
                    }
                })
            }
        }), cc._RF.pop()
    }, {}],
    Toggle_get: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5b20f0wQqNFnKAeGJgdDX2J", "Toggle_get"), cc.Class({
            extends: cc.Component,
            properties: {
                videoGetNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6b63\u5e38\u7684\u9886\u53d6\u6309\u94ae"
                }
            },
            onLoad: function() {
                window.meiZu && 1 == window.GameConfig.isLine ? (this.videoGetNode.active = !1, this.node.active = !0, this.Toggle = this.node.getComponent(cc.Toggle), 100 * Math.random() < window.GameConfig.randomCheckBox ? this.Toggle.isChecked = !0 : this.Toggle.isChecked = !1) : (this.videoGetNode.active = !0, this.node.active = !1)
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    ToolScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c4597/Q5utFvaGxH5QGFEQs", "ToolScript"), cc.Class({
            extends: cc.Component,
            properties: {
                destroyTime: {
                    default: 0,
                    displayName: "\u81ea\u52a8\u9500\u6bc1\u65f6\u95f4,0\u4e3a\u4e0d\u9500\u6bc1"
                }
            },
            onLoad: function() {
                this.nowDestroyTime = this.destroyTime
            },
            start: function() {},
            onCloseNowNode: function() {
                this.node && (this.node.active = !1)
            },
            onDestroyNowNode: function() {
                this.node.destroy()
            },
            update: function(e) {
                this.nowDestroyTime > 0 && (this.nowDestroyTime -= e, this.nowDestroyTime <= 0 && this.node.destroy())
            }
        }), cc._RF.pop()
    }, {}],
    TortScript_text: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bcc2btyznhGU460f03MAS2a", "TortScript_text"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                1 == window.GameConfig.biaoti ? this.node.active = !0 : this.node.active = !1
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    TortScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ab4c8r025xBEq/VyExErxLn", "TortScript"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                1 == window.GameConfig.isTort ? this.node.active = !0 : this.node.active = !1
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    TouchScreenEffect: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "18785Dr3OJAk49K5c6KtFj8", "TouchScreenEffect"), cc.Class({
            extends: cc.Component,
            properties: {
                particleEffect: {
                    default: null,
                    type: cc.ParticleSystem,
                    displayName: "\u7c92\u5b50\u7279\u6548"
                }
            },
            onLoad: function() {
                this.particleEffect && (this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node._touchListener.setSwallowTouches(!1), this.particleEffect.stopSystem(), cc.game.addPersistRootNode(this.node), this.node.zIndex = 666)
            },
            start: function() {},
            onTouchStart: function(e) {
                var t = this.node.convertToNodeSpaceAR(e.getLocation());
                this.particleEffect.node.setPosition(t), this.particleEffect.resetSystem()
            },
            onTouchMove: function(e) {
                var t = this.node.convertToNodeSpaceAR(e.getLocation());
                this.particleEffect.node.setPosition(t)
            },
            onTouchEnd: function(e) {
                this.particleEffect.stopSystem()
            }
        }), cc._RF.pop()
    }, {}],
    TweenEffect_diffusion: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "48633b8jVBNvrRztjWt4GTS", "TweenEffect_diffusion"), cc.Class({
            extends: cc.Component,
            properties: {
                actionTime: {
                    default: 1,
                    displayName: "\u884c\u52a8\u65f6\u95f4"
                },
                intervalTime: {
                    default: 2,
                    displayName: "\u95f4\u9694\u65f6\u95f4_\u884c\u52a8\u5468\u671f"
                },
                scaleRange: {
                    default: 1.5,
                    displayName: "\u7f29\u653e\u5e45\u5ea6"
                }
            },
            start: function() {
                this.onActionEvent()
            },
            onActionEvent: function() {
                cc.tween(this.node).repeatForever(cc.tween().to(0, {
                    scale: 1,
                    opacity: 255
                }).to(this.actionTime, {
                    scale: this.scaleRange,
                    opacity: 0
                }).delay(this.intervalTime).start()).start()
            }
        }), cc._RF.pop()
    }, {}],
    TweenEffect_skew: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7a7e6c5QQ9CwrC5x81Gxl+7", "TweenEffect_skew"), cc.Class({
            extends: cc.Component,
            properties: {
                range: {
                    default: 2,
                    displayName: "\u8303\u56f4\u503c"
                },
                actionTime: {
                    default: .5,
                    displayName: "\u884c\u52a8\u65f6\u95f4"
                },
                intervalTime: {
                    default: 0,
                    displayName: "\u95f4\u9694\u65f6\u95f4_\u884c\u52a8\u5468\u671f"
                }
            },
            onLoad: function() {
                var e = !1;
                this.node.parent && ("contentNode" == this.node.parent.name && (e = !0), this.node.parent.parent && ("contentNode" == this.node.parent.parent.name && (e = !0), this.node.parent.parent.parent && ("contentNode" == this.node.parent.parent.parent.name && (e = !0), this.node.parent.parent.parent.parent && ("contentNode" == this.node.parent.parent.parent.parent.name && (e = !0), this.node.parent.parent.parent.parent.parent && "contentNode" == this.node.parent.parent.parent.parent.parent.name && (e = !0))))), 1 == e && (this.range = 1, this.actionTime = .8)
            },
            start: function() {
                this.onWaggleEvent()
            },
            onWaggleEvent: function() {
                var e = this.range;
                cc.tween(this.node).repeatForever(cc.tween().to(this.actionTime, {
                    skewX: e / 2,
                    skewY: e / 2
                }).to(2 * this.actionTime, {
                    skewX: -e / 2,
                    skewY: -e / 2
                }).to(this.actionTime, {
                    skewX: 0,
                    skewY: 0
                }).to(this.actionTime, {
                    skewX: -e / 2,
                    skewY: e / 2
                }).to(2 * this.actionTime, {
                    skewX: e / 2,
                    skewY: -e / 2
                }).to(this.actionTime, {
                    skewX: 0,
                    skewY: 0
                }).delay(this.intervalTime).start()).start()
            }
        }), cc._RF.pop()
    }, {}],
    UIManage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e35a7Cnq9xCrrDJ2Woln3Q6", "UIManage"), cc.Class({
            extends: cc.Component,
            properties: {
                bjShowNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u80cc\u666f\u5c55\u793a\u8282\u70b9"
                },
                coinNumLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u91d1\u5e01\u7684\u663e\u793a"
                },
                levelNumLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u5173\u5361\u6570\u7684\u663e\u793a"
                },
                btn_destroy: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u9500\u6237\u6309\u94ae\u8282\u70b9"
                },
                levelShow: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5173\u5361\u5c55\u793a\u8282\u70b9"
                },
                newPropNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u663e\u793a\u65b0\u9053\u5177"
                },
                btn_hint_coin: {
                    default: null,
                    type: cc.Button,
                    displayName: "\u91d1\u5e01\u63d0\u793a"
                },
                btn_hint: {
                    default: null,
                    type: cc.Button,
                    displayName: "\u89c6\u9891\u63d0\u793a"
                }
            },
            onLoad: function() {
                window.ArcadeTool.setResetButtonVisible(false), window.UIManage = this, this.levelNumLabel.string = "", this.onShowPlayerData(), this.btn_destroy.active = !1, this.newPropNode.active = !1
            },
            start: function() {
                this.showAdEvent()
            },
            showAdEvent: function() {
                window.oppo ? cc.PlatformTools.executeShowBanner() : (cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial())
            },
            onResetUI: function() {
                this.levelNumLabel.string = "" + (10 * cc.global.nowChoseBigIndex + cc.global.nowChoseSmallIndex + 1);
                var e = cc.global.nowChoseBigIndex,
                    t = cc.global.nowChoseSmallIndex;
                console.log("\u5237\u65b0\u8fdb\u5ea6:", e, t), this.levelShow.getComponent(cc.Sprite).spriteFrame = null;
                var o = "package2/levelShowImg/img" + (e + 1);
                cc.loader.loadRes(o, function(e, t) {
                    e || (this.levelShow.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
                }.bind(this));
                var n = (t + 1 - 1) / 10;
                n > this.levelShow.getChildByName("jinDu").getComponent(cc.ProgressBar).progress ? cc.tween(this.levelShow.getChildByName("jinDu").getComponent(cc.ProgressBar)).to(.3, {
                    progress: n
                }).start() : this.levelShow.getChildByName("jinDu").getComponent(cc.ProgressBar).progress = n, this.levelShow.active = !1
            },
            onRefreshUI: function() {},
            onTouchStart: function(e) {
                window.GameManage.addCoin(1), cc.playerData.coin += 1, cc.playerConfig.savePlayerData()
            },
            onShowPlayerData: function() {
                this.coinNumLabel.string = cc.playerData.coin
            },
            onReturnStartScene: function() {
                cc.global.loadingWindow.active = !0, cc.director.preloadScene("GameHome", null, function() {
                    cc.global.loadingWindow.active = !1, cc.director.loadScene("GameHome")
                }.bind(this)), cc.audioEngine.stopAllEffects()
            },
            onGetHintEvent: function() {
                var e = window.GameManage.levelNode;
                e && e.hintEvent && e.hintEvent(), this.btn_hint_coin.interactable = !1, this.btn_hint.interactable = !1
            },
            onButtonClick: function(e) {
                cc.global.Source.onPlayBtnEffect();
                var t = e.target.name;
                switch (t) {
                    case "btn_hint_coin":
                        if (window.GameManage && 1 == window.GameManage.isGameOver) return;
                        cc.playerData.coin >= 50 ? (cc.playerData.coin -= 50, cc.playerConfig.savePlayerData(), this.onGetHintEvent()) : cc.global.LoadPrefabData("prefabs/UI/getCoinWindow");
                        break;
                    case "btn_hint":
                        if (window.GameManage && 1 == window.GameManage.isGameOver) return;
                        cc.PlatformTools.executeShowAwardVideo(function(e) {
                            this.onGetHintEvent()
                        }.bind(this));
                        break;
                    case "btn_next_video":
                        if (window.GameManage && 1 == window.GameManage.isGameOver) return;
                        var o = function() {
                            cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] <= 1 && (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 2), cc.global.nowChoseSmallIndex += 1, cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] || (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 1), cc.global.nowChoseSmallIndex >= window.GameData.levelData[cc.global.nowChoseBigIndex].length && (cc.global.nowChoseBigIndex += 1, cc.global.nowChoseSmallIndex = 0, cc.playerData.p_BigLevel[cc.global.nowChoseBigIndex] = 1), cc.playerConfig.savePlayerData(), cc.PlatformTools.executeStopVideoRecorder(), window.GameManage && window.GameManage.onCreateLevel()
                        };
                        cc.PlatformTools.executeShowAwardVideo(function(e) {
                            o && o()
                        }.bind(this));
                        break;
                    case "btn_coin":
                        cc.global.LoadPrefabData("prefabs/UI/getCoinWindow");
                        break;
                    case "btn_return":
                        if (window.GameManage && 1 == window.GameManage.isGameOver) return;
                        cc.PlatformTools.executeStopVideoRecorder(), this.onReturnStartScene();
                        break;
                    case "btn_again":
                        if (window.GameManage && 1 == window.GameManage.isGameOver) return;
                        cc.PlatformTools.executeStopVideoRecorder(), window.GameManage && window.GameManage.onCreateLevel();
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", t)
                }
            },
            update: function(e) {
                e > .1 && (e = .02), this.onShowPlayerData()
            }
        }), cc._RF.pop()
    }, {}],
    Utils: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "22792Hsax5JR745+q9EO8Jk", "Utils");
        var c = function() {
                function e() {
                    n(this, e), this.activateVoice = !0, this.activateMusic = !0, this.volume = 0, this.activateMusic = !0, this.activateEffect = !0, this.volume = 0
                }
                return a(e, [{
                    key: "playMusic",
                    value: function(e) {
                        if (this.activateMusic) {
                            var t = cc.Utils.AssetMgr.getAudioByName(e);
                            this.SoundIndex = cc.audioEngine.playMusic(t, !0)
                        }
                    }
                }, {
                    key: "stopMusic",
                    value: function() {
                        this.SoundIndex = -1, cc.audioEngine.stopMusic()
                    }
                }, {
                    key: "playEffect",
                    value: function(e) {
                        if (this.activateEffect) {
                            var t = cc.Utils.AssetMgr.getAudioByName(e);
                            cc.audioEngine.playEffect(t, !1)
                        }
                    }
                }]), e
            }(),
            s = function() {
                function e() {
                    n(this, e)
                }
                return a(e, [{
                    key: "randomArray",
                    value: function(e) {
                        e.sort(function(e, t) {
                            return Math.random() > .5 ? -1 : 1
                        })
                    }
                }]), e
            }(),
            l = function() {
                function e() {
                    n(this, e)
                }
                return a(e, [{
                    key: "getCountDays",
                    value: function() {
                        var e = new Date;
                        return Math.floor(e / 864e5)
                    }
                }]), e
            }(),
            r = function() {
                function e() {
                    n(this, e)
                }
                return a(e, [{
                    key: "getRandomNum",
                    value: function(e, t) {
                        var o = t - e,
                            n = Math.random();
                        return e + Math.round(n * o)
                    }
                }, {
                    key: "getFloatRandomNum",
                    value: function(e, t) {
                        var o = t - e;
                        return e + Math.random() * o
                    }
                }, {
                    key: "getTwoVectorDegree",
                    value: function(e, t) {
                        var o = t.x - e.x,
                            n = t.y - e.y,
                            i = Math.atan2(n, o);
                        return cc.misc.radiansToDegrees(i) - 90
                    }
                }, {
                    key: "getMoveVector",
                    value: function(e, t) {
                        var o = cc.misc.degreesToRadians(e),
                            n = cc.v2();
                        return n.x = -Math.sin(o) * t, n.y = Math.cos(o) * t, n
                    }
                }, {
                    key: "getCenterVector",
                    value: function(e, t) {
                        var o = t.sub(e).normalize(),
                            n = e.sub(t).mag() / 2;
                        return o.mul(n).add(e)
                    }
                }]), e
            }(),
            h = function() {
                function e() {
                    n(this, e)
                }
                return a(e, [{
                    key: "getSpriteFrameByName",
                    value: function(e) {
                        for (var t in cc.SpriteFrames) {
                            var o = cc.SpriteFrames[t];
                            if (o.name === e) return o
                        }
                        return null
                    }
                }, {
                    key: "getAudioByName",
                    value: function(e) {
                        for (var t in cc.Audios) {
                            var o = cc.Audios[t];
                            if (e === o.name) return o
                        }
                        return null
                    }
                }, {
                    key: "getPrefabByName",
                    value: function(e) {
                        for (var t in cc.Prefabs) {
                            var o = cc.Prefabs[t];
                            if (o.name === e) return o
                        }
                        return null
                    }
                }, {
                    key: "showMessage",
                    value: function(e) {
                        cc.view.getVisibleSize();
                        var t = cc.instantiate(this.getPrefabByName("Message")),
                            o = cc.v2(cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height / 2);
                        t.position = o, cc.director.getScene().addChild(t), t.getComponent("Message").setMessage(e)
                    }
                }, {
                    key: "generateCurrency",
                    value: function(e, t, o, n, i) {
                        for (var a = 0; a < o; a++) {
                            var c = cc.instantiate(this.getPrefabByName("CurrencyItem"));
                            e.addChild(c), c.getComponent("CurrencyItem").setDisplayInformation(t, n, i)
                        }
                    }
                }]), e
            }();
        t.exports = {
            SoundMgr: new c,
            StringMgr: new function e() {
                n(this, e)
            },
            ArrayMgr: new s,
            TimeMgr: new l,
            MathMgr: new r,
            NumberMgr: new function e() {
                n(this, e)
            },
            AssetMgr: new h
        }, cc._RF.pop()
    }, {}],
    VideoHandScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f7624wPRyxPTZ4jhV25Fxjq", "VideoHandScript"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.qq ? window.qqUtil.sceneTrue() && 100 * Math.random() < window.GameConfig.isShowHand ? this.node && (this.node.active = !0) : this.node && (this.node.active = !1) : 100 * Math.random() < window.GameConfig.isShowHand ? this.node && (this.node.active = !0) : this.node && (this.node.active = !1)
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    VideoIconShowScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "335d5WyCORBcrFZJrDiv8eZ", "VideoIconShowScript"), cc.Class({
            extends: cc.Component,
            properties: {
                videoIcon_tt: {
                    default: null,
                    type: cc.SpriteFrame,
                    displayName: "\u5934\u6761\u4e13\u7528"
                },
                videoIcon_ad: {
                    default: null,
                    type: cc.SpriteFrame,
                    displayName: "ad\u6807"
                },
                videoIcon_other: {
                    default: null,
                    type: cc.SpriteFrame,
                    displayName: "\u5176\u4ed6"
                }
            },
            onLoad: function() {
                this.node.getComponent(cc.Sprite) && (window.tt || window.qq ? this.videoIcon_tt && (this.node.getComponent(cc.Sprite).spriteFrame = this.videoIcon_tt) : (this.videoIcon_ad && (this.node.getComponent(cc.Sprite).spriteFrame = this.videoIcon_ad), this.videoIcon_other && (this.node.getComponent(cc.Sprite).spriteFrame = this.videoIcon_other)))
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    VideoIconSwitch_dragonBones: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d2932WObRVIBK1gaA9n4GBN", "VideoIconSwitch_dragonBones"), cc.Class({
            extends: cc.Component,
            properties: {
                aimName_tt: {
                    default: "",
                    displayName: "\u5934\u6761"
                },
                aimName_ad: {
                    default: "",
                    displayName: "ad\u6807"
                }
            },
            onLoad: function() {
                this.node.getComponent(dragonBones.ArmatureDisplay) && (window.tt || window.qq ? this.aimName_tt && this.node.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aimName_tt, 0) : this.aimName_ad && this.node.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aimName_ad, 0))
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    Waggle_angleScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e2be7dUIXxNYpaOKE0bM7fS", "Waggle_angleScript"), cc.Class({
            extends: cc.Component,
            properties: {
                angleValue: {
                    default: 5,
                    displayName: "\u6643\u52a8\u89d2\u5ea6"
                },
                waggleTime: {
                    default: .1,
                    displayName: "\u7f13\u52a8\u65f6\u95f4_\u6700\u5927\u8ddd\u79bb"
                },
                intervalTime: {
                    default: 1,
                    displayName: "\u95f4\u9694\u65f6\u95f4"
                }
            },
            start: function() {
                this.onWaggleEvent()
            },
            onWaggleEvent: function() {
                var e = this.node.angle,
                    t = e + this.angleValue,
                    o = e - this.angleValue;
                cc.tween(this.node).repeatForever(cc.tween().to(this.waggleTime / 2, {
                    angle: t
                }).to(this.waggleTime, {
                    angle: o
                }).to(this.waggleTime, {
                    angle: t
                }).to(this.waggleTime, {
                    angle: o
                }).to(this.waggleTime / 2, {
                    angle: e
                }).delay(this.intervalTime).start()).start()
            }
        }), cc._RF.pop()
    }, {}],
    Waggle_posScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a9988reQNZIyY27r6SYlBs/", "Waggle_posScript"), cc.Class({
            extends: cc.Component,
            properties: {
                posValue: {
                    default: cc.v2(10, 0),
                    displayName: "\u6643\u52a8\u65b9\u5411"
                },
                waggleTime: {
                    default: .1,
                    displayName: "\u7f13\u52a8\u65f6\u95f4_\u6700\u5927\u8ddd\u79bb"
                },
                intervalTime: {
                    default: 1,
                    displayName: "\u95f4\u9694\u65f6\u95f4"
                }
            },
            start: function() {
                this.onWaggleEvent()
            },
            onWaggleEvent: function() {
                var e = this.node.position.clone(),
                    t = e.add(this.posValue),
                    o = e.add(this.posValue.mul(-1));
                cc.tween(this.node).repeatForever(cc.tween().to(this.waggleTime / 2, {
                    position: t
                }).to(this.waggleTime, {
                    position: o
                }).to(this.waggleTime, {
                    position: t
                }).to(this.waggleTime, {
                    position: o
                }).to(this.waggleTime / 2, {
                    position: e
                }).delay(this.intervalTime).start()).start()
            }
        }), cc._RF.pop()
    }, {}],
    WinWindowScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b8eddhNQxlAZqGnNMZ+X1re", "WinWindowScript"), cc.Class({
            extends: cc.Component,
            properties: {
                btn_share: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5206\u4eab\u6309\u94ae"
                },
                coinNumLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u83b7\u5f97\u91d1\u5e01\u6570\u91cf"
                },
                btn_next: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7ee7\u7eed\u6309\u94ae"
                }
            },
            onLoad: function() {},
            start: function() {
                this.onShowWindow()
            },
            onShowWindow: function() {
                window.tt || window.wx || window.qq || window.ks ? (this.btn_share.active = !0, 100 * Math.random() < window.GameConfig.randomShare && this.scheduleOnce(function() {
                    cc.global.LoadPrefabData("prefabs/UI/sharePushWindow")
                }.bind(this), 1)) : this.btn_share.active = !1, 1 == cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] && (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 2), cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex + 1] || (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex + 1] = 1), this.coinAward = Math.round(10 * Math.random() + 20), this.coinNumLabel.string = "/" + this.coinAward, cc.playerConfig.savePlayerData(), cc.global.Source.onPlayGameEffect("gameWin"), cc.PlatformTools.executeStopVideoRecorder(), this.showAdEvent();
                window.ArcadeTool.showResult()
            },
            showAdEvent: function() {
                var e = this;
                if (window.oppo) {
                    adUtils.executeShowBoxWindow(function() {
                        if (window.oppo) {
                            var t = e.btn_next;
                            adUtils.executeShowSpecialBanner({
                                isCustom: !0,
                                customName: "oppo-mutual-btn-next",
                                bottom: 380,
                                customHandle: function() {
                                    if (window.oppo) {
                                        var t = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                                        t && (100 * Math.random() < window.GameConfig.randomWaive && t.getComponent("oppo-SpecialBanner").executeTouch(), t.removeFromParent(!0))
                                    }
                                    e.executeNext()
                                },
                                recoverHandle: function() {
                                    t.getComponent(cc.Sprite).enabled = !0, t.getChildByName("seeAd") && t.getChildByName("seeAd").destroy(), t.getComponent("scaleEffect") && (t.removeComponent("scaleEffect"), t.scale = 1)
                                }
                            }, {
                                height: 380
                            }, function() {
                                t.getComponent(cc.Sprite).enabled = !1;
                                var o = new cc.Node;
                                o.name = "seeAd", o.parent = t, o.addComponent(cc.Sprite), o.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED, cc.loader.loadRes("Platform/Native/Texture/seeAd", function(e, n) {
                                    var i = this;
                                    o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n), t.addComponent("ScaleChangeScript"), o.on(cc.Node.EventType.TOUCH_START, function() {
                                        var e = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                                        e && (100 * Math.random() < window.GameConfig.randomWaive && e.getComponent("oppo-SpecialBanner").executeTouch(), e.removeFromParent(!0)), i.executeNext()
                                    }, this)
                                }.bind(e))
                            })
                        }
                    })
                } else window.qq ? (cc.PlatformTools.executeBlockAdShow(1), window.qqUtil.zhuomian(), window.qqUtil.winCount += 1, console.log("\u80dc\u5229\u89c6\u9891", window.qqUtil.winCount, window.qqUtil.winVideo), window.qqUtil.winCount >= window.GameConfig.winVideo && window.GameConfig.winVideo > 0 && qqUtil.sceneTrue() && (window.qqUtil.winCount = 0, cc.PlatformTools.executeShowAwardVideo(null, null)), cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial("endGame")) : (cc.PlatformTools.executeShowBanner(), cc.PlatformTools.executeShowInterstitial("endGame"))
            },
            executeNext: function() {
                cc.playerData.coin += this.coinAward, cc.playerConfig.savePlayerData(), cc.global.onPlayGetCoinEffect();
                var e = function() {
                    cc.playerData.power -= 0, cc.global.nowChoseSmallIndex += 1, cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] || (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 1), cc.global.nowChoseSmallIndex >= window.GameData.levelData[cc.global.nowChoseBigIndex].length && (cc.global.nowChoseBigIndex += 1, cc.global.nowChoseSmallIndex = 0, cc.playerData.p_BigLevel[cc.global.nowChoseBigIndex] = 1), cc.playerConfig.savePlayerData(), window.GameManage && window.GameManage.onCreateLevel(), this.node.destroy()
                }.bind(this);
                console.log("\u9700\u8981\u7684\u4f53\u529b\u548c\u603b\u4f53\u529b:", 0, cc.playerData.power), cc.playerData.power >= 0 ? e() : cc.global.LoadPrefabData("prefabs/UI/getPowerWindow", e)
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "btn_share":
                        cc.PlatformTools.executeShareRecorderVideo(), this.btn_share.active = !1;
                        break;
                    case "yesButton":
                        cc.PlatformTools.executeShowAwardVideo(function(e) {
                            cc.playerData.coin += 2 * this.coinAward, cc.playerConfig.savePlayerData(), cc.global.onPlayGetCoinEffect();
                            var t = function() {
                                cc.playerData.power -= 0, cc.global.nowChoseSmallIndex += 1, cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] || (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 1), cc.global.nowChoseSmallIndex >= window.GameData.levelData[cc.global.nowChoseBigIndex].length && (cc.global.nowChoseBigIndex += 1, cc.global.nowChoseSmallIndex = 0, cc.playerData.p_BigLevel[cc.global.nowChoseBigIndex] = 1), cc.playerConfig.savePlayerData(), window.GameManage && window.GameManage.onCreateLevel(), this.node.destroy()
                            }.bind(this);
                            console.log("\u9700\u8981\u7684\u4f53\u529b\u548c\u603b\u4f53\u529b:", 0, cc.playerData.power), cc.playerData.power >= 0 ? t() : cc.global.LoadPrefabData("prefabs/UI/getPowerWindow", t)
                        }.bind(this));
                        break;
                    case "noButton":
                        cc.cheat.onRandomVideoADEvent(function() {
                            cc.playerData.coin += 2 * this.coinAward, cc.playerConfig.savePlayerData(), cc.global.onPlayGetCoinEffect();
                            var e = function() {
                                cc.playerData.power -= 0, cc.global.nowChoseSmallIndex += 1, cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] || (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 1), cc.global.nowChoseSmallIndex >= window.GameData.levelData[cc.global.nowChoseBigIndex].length && (cc.global.nowChoseBigIndex += 1, cc.global.nowChoseSmallIndex = 0, cc.playerData.p_BigLevel[cc.global.nowChoseBigIndex] = 1), cc.playerConfig.savePlayerData(), window.GameManage && window.GameManage.onCreateLevel(), this.node.destroy()
                            }.bind(this);
                            console.log("\u9700\u8981\u7684\u4f53\u529b\u548c\u603b\u4f53\u529b:", 0, cc.playerData.power), cc.playerData.power >= 0 ? e() : cc.global.LoadPrefabData("prefabs/UI/getPowerWindow", e)
                        }.bind(this), function() {
                            cc.playerData.coin += this.coinAward, cc.playerConfig.savePlayerData(), cc.global.onPlayGetCoinEffect();
                            var e = function() {
                                cc.playerData.power -= 0, cc.global.nowChoseSmallIndex += 1, cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] || (cc.playerData.p_SmallLevel[cc.global.nowChoseBigIndex][cc.global.nowChoseSmallIndex] = 1), cc.global.nowChoseSmallIndex >= window.GameData.levelData[cc.global.nowChoseBigIndex].length && (cc.global.nowChoseBigIndex += 1, cc.global.nowChoseSmallIndex = 0, cc.playerData.p_BigLevel[cc.global.nowChoseBigIndex] = 1), cc.playerConfig.savePlayerData(), window.GameManage && window.GameManage.onCreateLevel(), this.node.destroy()
                            }.bind(this);
                            console.log("\u9700\u8981\u7684\u4f53\u529b\u548c\u603b\u4f53\u529b:", 0, cc.playerData.power), cc.playerData.power >= 0 ? e() : cc.global.LoadPrefabData("prefabs/UI/getPowerWindow", e)
                        }.bind(this));
                        break;
                    case "btn_return":
                        window.UIManage.onReturnStartScene();
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            },
            update: function(e) {}
        }), cc._RF.pop()
    }, {}],
    activeEventNode: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0723cphELVA453y+380dgTg", "activeEventNode"), cc.Class({
            extends: cc.Component,
            properties: {
                startType: {
                    default: !1,
                    displayName: "\u521d\u59cb\u72b6\u6001"
                },
                startTime: {
                    default: 0,
                    displayName: "\u8d77\u59cb\u5ef6\u8fdf\u65f6\u95f4"
                },
                returnDelayTime: {
                    default: -1,
                    displayName: "\u8fd4\u56de\u5ef6\u8fdf\u7684\u65f6\u95f4,\u8d1f\u6570\u4e3a\u4e0d\u8fd4\u56de"
                },
                eventNode_over: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7ed3\u675f\u4e8b\u4ef6\u8282\u70b9"
                }
            },
            start: function() {
                this.node.switchEvent = this.switchEvent.bind(this), this.node.active = this.startType
            },
            switchEvent: function() {
                var e = this;
                0 == this.startTime ? (this.eventNode_over && this.eventNode_over.switchEvent && this.eventNode_over.switchEvent(), this.node.active = !this.startType) : cc.tween(this.node).delay(this.startTime).call(function() {
                    e.eventNode_over && e.eventNode_over.switchEvent && e.eventNode_over.switchEvent(), e.node.active = !e.startType
                }).start()
            },
            returnStartPos: function() {},
            restoreEvent: function() {}
        }), cc._RF.pop()
    }, {}],
    againEventNode: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d5a53mR6elPnogUyinacq6T", "againEventNode"), cc.Class({
            extends: cc.Component,
            properties: {
                startDelayTime: {
                    default: 0,
                    displayName: "\u8d77\u59cb\u5ef6\u8fdf\u7684\u65f6\u95f4"
                }
            },
            onLoad: function() {
                this.node.switchEvent = this.switchEvent.bind(this)
            },
            start: function() {},
            switchEvent: function() {
                this.isGameWin = !0, this.node.stopAllActions(), cc.tween(this.node).delay(this.startDelayTime).call(function() {
                    1 != cc.global._gameManage.isGameWin && cc.global._gameManage.onCreateLevel()
                }).start()
            }
        }), cc._RF.pop()
    }, {}],
    baidu: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "b0cfcXCKidOmKayaNt2m1W5", "baidu");
        var c = function() {
            function e() {
                n(this, e), this.SystemInformation = null, this.AppSidCode = "e8b06dc6", this.VideoCode = "7405072", this.BannerInstance = null, this.GamePush = null, this.preClickTime = 0, this.VideoInstance = null, this.VideoSuccessCallBack = null, this.VideoFailureCallBack = null
            }
            return a(e, [{
                key: "doInitialize",
                value: function() {
                    var e = this,
                        t = this;
                    this.SystemInformation = window.swan.getSystemInfoSync(), this.VideoInstance = window.swan.createRewardedVideoAd({
                        adUnitId: this.VideoCode,
                        appSid: this.AppSidCode
                    }), this.VideoInstance.onClose(function(o) {
                        o.isEnded ? (console.log("\u6fc0\u52b1\u89c6\u9891\u5b8c\u6574\u64ad\u653e\u540e\u5173\u95ed"), cc.audioEngine.resumeAll(), cc.director.resume(), e.videoDisplaySuccessCallBack()) : (console.log("\u6fc0\u52b1\u89c6\u9891\u4e2d\u9014\u88ab\u5173\u95ed"), cc.audioEngine.resumeAll(), cc.director.resume(), window.GameConfig.showModal ? window.swan.showModal({
                            title: "\u672a\u89c2\u770b\u5b8c\u89c6\u9891",
                            content: "\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6",
                            success: function(e) {
                                e.confirm ? t.VideoInstance.show().then(function() {
                                    return console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a")
                                }).catch(function() {
                                    t.VideoInstance.load().then(function() {
                                        return t.VideoInstance.show()
                                    }).catch(function(e) {
                                        console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25"), window.swan.showToast({
                                            title: "\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01",
                                            icon: "none",
                                            duration: 1e3,
                                            success: function(e) {
                                                console.log(e)
                                            },
                                            fail: function(e) {
                                                console.log("showToast \u8c03\u7528\u5931\u8d25")
                                            }
                                        })
                                    })
                                }) : e.cancel ? (console.log("\u53d6\u6d88"), t.videoDisplayFailureCallBack(), window.swan.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })) : (t.videoDisplayFailureCallBack(), window.swan.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                }))
                            },
                            fail: function(e) {
                                console.log("showModal\u8c03\u7528\u5931\u8d25"), t.videoDisplayFailureCallBack(), window.swan.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })
                            }
                        }) : (t.videoDisplayFailureCallBack(), window.swan.showToast({
                            title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                            icon: "none",
                            duration: 1e3,
                            success: function(e) {
                                console.log("".concat(e))
                            },
                            fail: function(e) {
                                console.log("showToast\u8c03\u7528\u5931\u8d25")
                            }
                        })))
                    })
                }
            }, {
                key: "executeShowInterstitial",
                value: function() {
                    console.log("\u767e\u5ea6\u5e73\u53f0\u65e0\u63d2\u5c4f\u529f\u80fd")
                }
            }, {
                key: "executeHideBanner",
                value: function() {
                    var e = cc.director.getScene().getChildByName("gameList_banner");
                    e && e.removeFromParent()
                }
            }, {
                key: "executeShowBanner",
                value: function() {
                    (console.log("\u767e\u5ea6\u5e73\u53f0\u65e0Banner\u529f\u80fd"), window.GameConfig.isLine) && (window.GameConfig.iconList && window.GameConfig.packageList && (window.GameConfig.packageList.length <= 0 || window.GameConfig.packageList.length <= 0 || cc.director.getScene().getChildByName("gameList_banner") || cc.loader.loadRes("Platform/Native/Prefab/gamePush_yu/gameList_banner", function(e, t) {
                        if (e) console.log("\u8f7d\u5165\u9884\u5236\u8d44\u6e90\u5931\u8d25, \u539f\u56e0:" + e);
                        else if (t instanceof cc.Prefab) {
                            var o = cc.instantiate(t);
                            o.parent = cc.director.getScene(), o.zIndex = 9999, o.name = "gameList_banner"
                        } else console.log("\u4f60\u8f7d\u5165\u7684\u4e0d\u662f\u9884\u5236\u8d44\u6e90!")
                    }.bind(this))))
                }
            }, {
                key: "executeShowAwardVideo",
                value: function(e, t) {
                    var o = this;
                    (new Date).getTime() - this.preClickTime <= 2e3 || (console.log("\u89e6\u53d1Baidu\u6fc0\u52b1\u89c6\u9891"), this.VideoSuccessCallBack = e, this.VideoFailureCallBack = t, cc.audioEngine.pauseAll(), cc.director.pause(), this.VideoInstance.load().then(function() {
                        console.log("\u5e7f\u544a\u52a0\u8f7d\u6210\u529f, \u5f00\u59cb\u663e\u793a\u5e7f\u544a"), o.VideoInstance.show().catch(function(e) {
                            o.VideoInstance.load().then(function() {
                                return o.VideoInstance.show()
                            })
                        })
                    }).catch(function(e) {
                        console.log("\u767e\u5ea6\u89c6\u9891onload\u5931\u8d25:", e), cc.audioEngine.resumeAll(), cc.director.resume()
                    }))
                }
            }, {
                key: "videoDisplaySuccessCallBack",
                value: function() {
                    this.VideoSuccessCallBack && this.VideoSuccessCallBack()
                }
            }, {
                key: "videoDisplayFailureCallBack",
                value: function() {
                    cc.director.resume(), this.VideoFailureCallBack && this.VideoFailureCallBack()
                }
            }, {
                key: "executeExtractMoreGame",
                value: function(e) {}
            }, {
                key: "executeShowPushBox",
                value: function() {
                    window.GameConfig.isLine && (window.GameConfig.iconList && window.GameConfig.packageList && (window.GameConfig.packageList.length <= 0 || window.GameConfig.packageList.length <= 0 || cc.director.getScene().getChildByName("gameList_push") || cc.loader.loadRes("Platform/Native/Prefab/gamePush_yu/gameList_push", function(e, t) {
                        if (e) console.log("\u8f7d\u5165\u9884\u5236\u8d44\u6e90\u5931\u8d25, \u539f\u56e0:" + e);
                        else if (t instanceof cc.Prefab) {
                            var o = cc.instantiate(t);
                            o.parent = cc.director.getScene(), o.zIndex = 9e3, o.name = "gameList_push"
                        } else console.log("\u4f60\u8f7d\u5165\u7684\u4e0d\u662f\u9884\u5236\u8d44\u6e90!")
                    }.bind(this))))
                }
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    console.log(this.SystemInformation)
                }
            }, {
                key: "executeRecorder",
                value: function() {
                    console.log("\u767e\u5ea6\u5e73\u53f0\u6682\u65e0\u89c6\u9891\u5f55\u5236\u529f\u80fd....")
                }
            }, {
                key: "stopRecorder",
                value: function() {
                    console.log("\u767e\u5ea6\u5e73\u53f0\u6682\u65e0\u89c6\u9891\u5f55\u5236\u529f\u80fd....")
                }
            }, {
                key: "executeShareRecorder",
                value: function(e, t) {
                    console.log("\u767e\u5ea6\u5e73\u53f0\u6682\u65e0\u89c6\u9891\u5f55\u5236\u529f\u80fd....")
                }
            }]), e
        }();
        t.exports = c, cc._RF.pop()
    }, {}],
    changeEventNode: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a4c55Ct/j5H47LTd68xOuqf", "changeEventNode"), cc.Class({
            extends: cc.Component,
            properties: {
                isChangePos: {
                    default: !0,
                    displayName: "\u662f\u5426\u6539\u53d8\u4f4d\u7f6e"
                },
                posValue: {
                    default: cc.v2,
                    displayName: "\u8981\u79fb\u52a8\u5230\u7684\u76ee\u6807\u4f4d\u7f6e"
                },
                isChangeAngle: {
                    default: !0,
                    displayName: "\u662f\u5426\u6539\u53d8\u89d2\u5ea6"
                },
                angleValue: {
                    default: 0,
                    displayName: "\u76ee\u6807\u89d2\u5ea6"
                },
                isChangeScale: {
                    default: !0,
                    displayName: "\u662f\u5426\u6539\u53d8\u7f29\u653e"
                },
                scaleValue: {
                    default: cc.v2(1, 1),
                    displayName: "\u76ee\u6807\u7f29\u653e"
                },
                isChangeOpacity: {
                    default: !0,
                    displayName: "\u662f\u5426\u6539\u53d8\u900f\u660e\u5ea6"
                },
                opacityValue: {
                    default: 255,
                    displayName: "\u76ee\u6807\u900f\u660e\u5ea6"
                },
                moveTime: {
                    default: .6,
                    displayName: "\u79fb\u52a8\u9700\u8981\u7684\u65f6\u95f4"
                },
                startDelayTime: {
                    default: 0,
                    displayName: "\u8d77\u59cb\u5ef6\u8fdf\u7684\u65f6\u95f4"
                },
                returnDelayTime: {
                    default: -1,
                    displayName: "\u8fd4\u56de\u5ef6\u8fdf\u7684\u65f6\u95f4,\u8d1f\u6570\u4e3a\u4e0d\u8fd4\u56de"
                },
                returnMoveTime: {
                    default: .2,
                    displayName: "\u8fd4\u56de\u79fb\u52a8\u65f6\u95f4,\u6709\u8fd4\u56de\u5ef6\u8fdf\u65f6\u542f\u7528"
                },
                tagerEventNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u76ee\u6807\u4e8b\u4ef6\u8282\u70b9"
                }
            },
            onLoad: function() {
                this.node.switchEvent = this.switchEvent.bind(this), this.startPos = this.node.position.clone(), this.startAngle = this.node.angle, this.startScale = cc.v2(this.node.scaleX, this.node.scaleY)
            },
            start: function() {},
            switchEvent: function() {
                var e = this;
                0 == this.node.active && (this.node.active = !0);
                var t = cc.v2(0, 0);
                t = 1 == this.isChangePos ? this.posValue : this.node.position.clone();
                var o = 0;
                o = 1 == this.isChangeAngle ? this.angleValue : this.node.angle;
                var n = cc.v2(0, 0);
                n = 1 == this.isChangeScale ? this.scaleValue : this.startScale;
                var i = this.node.opacity;
                i = 1 == this.isChangeOpacity ? this.opacityValue : this.node.opacity, this.node.stopAllActions(), cc.tween(this.node).delay(this.startDelayTime).to(this.moveTime, {
                    position: t,
                    angle: o,
                    scaleX: n.x,
                    scaleY: n.y,
                    opacity: i
                }).call(function() {
                    e.tagerEventNode && e.tagerEventNode.switchEvent(), e.returnEvent()
                }).start()
            },
            returnEvent: function() {
                if (!(this.returnDelayTime < 0)) {
                    var e = 0;
                    e = 1 == this.isChangeAngle ? this.startAngle : this.node.angle;
                    var t = cc.v2(1, 1);
                    t = 1 == this.isChangeScale ? this.startScale : cc.v2(this.node.scaleX, this.node.scaleY), this.node.stopAllActions(), cc.tween(this.node).delay(this.returnDelayTime).to(this.returnMoveTime, {
                        position: this.startPos,
                        angle: e,
                        scaleX: t.x,
                        scaleY: t.y
                    }).start()
                }
            }
        }), cc._RF.pop()
    }, {}],
    clearItemScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7a12em7q6JOPZpyPKTbTIkb", "clearItemScript"), cc.Class({
            extends: cc.Component,
            properties: {
                _clearManage: null,
                needClearDegree: {
                    default: .7,
                    displayName: "\u6e05\u7406\u7a0b\u5ea6\u9700\u6c42"
                },
                isNeedClear: {
                    default: !1,
                    displayName: "\u662f\u5426\u9700\u8981\u6e05\u7406"
                },
                mistakeStandard: {
                    default: .2,
                    displayName: "\u6e05\u7406\u9519\u8bef\u7684\u68c0\u6d4b\u6807\u51c6"
                },
                isOnlyStepControl: {
                    default: !1,
                    displayName: "\u662f\u5426\u53ea\u63a7\u5236\u4e00\u6b65\u64cd\u4f5c"
                },
                needShowNode: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u9700\u8981\u663e\u793a\u7684\u8282\u70b9"
                },
                needHideNode: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u9700\u8981\u9690\u85cf\u7684\u8282\u70b9"
                },
                eventNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u4e8b\u4ef6\u8282\u70b9"
                }
            },
            onLoad: function() {
                "GameScene" == cc.director.getScene().name && (this.lineWidth = this._clearManage.lineWidth, this.maskNode = this.node, this.maskNode.getComponent(cc.Mask).inverted = !0, this.isClearAccomplish = !1, this.duiYingGuanXi = [1, 10, 11, 13, 16, 19, 22, 23, 26, 27, 29, 117, 33, 36, 48, 49, 57, 60, 65, 67, 71, 73, 79, 82, 83])
            },
            start: function() {
                for (var e = 0; e < this.needShowNode.length; e++) this.needShowNode[e] && (this.needShowNode[e].active = !1);
                for (var t = 0; t < this.needHideNode.length; t++) this.needHideNode[t] && (this.needHideNode[t].active = !0);
                "GameScene" == cc.director.getScene().name && this.reset(this.maskNode)
            },
            clearMask: function(e) {
                var t = this.maskNode.getComponent(cc.Mask)._graphics,
                    o = this.tempDrawPoints.length;
                if (this.tempDrawPoints.push(e), o <= 1) t.circle(e.x, e.y, this.lineWidth / 2), t.fill(), this.polygonPointsList.forEach(function(t) {
                    if (!t.isHit) {
                        var o = e.x > t.rect.x && e.x < t.rect.x + t.rect.width,
                            n = e.y > t.rect.y && e.y < t.rect.y + t.rect.height;
                        o && n && (t.isHit = !0)
                    }
                });
                else {
                    var n = this.tempDrawPoints[o - 2],
                        i = this.tempDrawPoints[o - 1];
                    t.moveTo(n.x, n.y), t.lineTo(i.x, i.y), t.lineWidth = this.lineWidth, t.lineCap = cc.Graphics.LineCap.ROUND, t.lineJoin = cc.Graphics.LineJoin.ROUND, t.strokeColor = cc.color(255, 255, 255, 255), t.stroke(), this.polygonPointsList.forEach(function(e) {
                        e.isHit = e.isHit || cc.Intersection.lineRect(n, i, e.rect)
                    })
                }
            },
            onClearOver: function() {
                if (this.polygonPointsList) {
                    this.tempDrawPoints = [];
                    var e = [];
                    this.polygonPointsList.forEach(function(t) {
                        1 == t.isHit && e.push(t)
                    });
                    var t = e.length / this.polygonPointsList.length;
                    this.needClearDegree;
                    .6;
                    var o = this.mistakeStandard;
                    o || (o = 2), 1 == this.isNeedClear ? t >= .6 ? 1 == this.node.active && (console.log("\u6e05\u7406\u6b63\u786e"), this._clearManage.onClearComplete(this), 1 == this.isOnlyStepControl && this.onClearComplete(), this.node.active = !1) : (console.log("\u6e05\u7406\u672a\u5b8c\u6210", t), this.reset(this.maskNode)) : (t >= o && (console.log("\u6e05\u7406\u4e86\u4e0d\u8be5\u6e05\u7406\u7684"), this._clearManage.onClearMistake()), this.reset(this.maskNode))
                }
            },
            onClearComplete: function() {
                this.eventNode && this.eventNode.switchEvent();
                for (var e = 0; e < this.needShowNode.length; e++) this.needShowNode[e].active = !0;
                for (var t = 0; t < this.needHideNode.length; t++) this.needHideNode[t].active = !1;
                1 == this.node.active && (this.node.active = !1), window.GameManage.onDuiHaoEffect(this.node);
                var o = window.GameData.levelData[cc.global.nowChoseSmallIndex],
                    n = o.levelType,
                    i = o.pathIndex;
                if ("xiangPiCa" == n) {
                    var a = "lv" + this.duiYingGuanXi[i - 1];
                    cc.global.Source.onPlayGameEffect(a)
                }
            },
            onConfirmCorrect: function() {},
            onPlayeClearAnimation: function() {},
            reset: function(e) {
                e || (e = this.maskNode), this.maskNode.getComponent(cc.Mask)._graphics.clear(), this.tempDrawPoints = [], this.polygonPointsList = [];
                for (var t = 0; t < e.width; t += this.lineWidth)
                    for (var o = 0; o < e.height; o += this.lineWidth) this.polygonPointsList.push({
                        rect: cc.rect(t - e.width / 2, o - e.height / 2, this.lineWidth, this.lineWidth),
                        isHit: !1
                    })
            },
            onOpenHint: function() {
                this.eraser_hint ? this.eraser_hint.active = !0 : window.GameManage.toolContainer.getChildByName("eraser_hint") && (this.eraser_hint = cc.instantiate(window.GameManage.toolContainer.getChildByName("eraser_hint")), this.eraser_hint.parent = this.node.parent, this.eraser_hint.position = this.node.position.clone(), this.eraser_hint.getComponent("eraser_hintScript").clearTarget = this.node, this.eraser_hint.active = !0)
            },
            onCloseHint: function() {
                this.eraser_hint && (this.eraser_hint.active = !1)
            }
        }), cc._RF.pop()
    }, {}],
    coinValueSwitch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8d7efU6vohA5pI43aInHDFV", "coinValueSwitch"), cc.Class({
            extends: cc.Component,
            properties: {
                switchValue: {
                    default: 500,
                    displayName: "\u5f00\u5173\u503c"
                },
                node_coin: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u91d1\u5e01\u8282\u70b9"
                },
                node_video: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u89c6\u9891\u8282\u70b9"
                }
            },
            start: function() {},
            update: function(e) {
                cc.playerData && (cc.playerData.coin >= this.switchValue ? (this.node_coin.active = !0, this.node_video.active = !1) : (this.node_coin.active = !1, this.node_video.active = !0))
            }
        }), cc._RF.pop()
    }, {}],
    config: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1dce8VFAhJKXb1yT8Py5GH2", "config"), window.GameConfig = {
            isLine: !1,
            startVideo: !1,
            allowBanner: !1,
            randomVideo: 0,
            allowInterstitial: !1,
            randomShare: 0,
            faultBanner: 0,
            randomPush: 0,
            showModal: !1,
            randomCheckBox: 0,
            bannerShowTime: 0,
            tryPush: 0,
            tryPushLevelNum: 200,
            closeScale: 1,
            isShowHand: 0,
            openConcerns: !1,
            isTort: !0,
            sendDesk: !1,
            inGameAD: 0,
            otherUIAD: 0,
            endGameAD: 0,
            quitShow: 0,
            box: [0, 0, 0],
            isHaveVideoAD: !0,
            pushTime: 30,
            type: 1,
            tangBing: !1,
            randomWaive: 0,
            randomNext: 0,
            locationList: []
        }, window.GameConfig.iconList = [], window.GameConfig.packageList = [], window.GameConfig.gameName = [], cc._RF.pop()
    }, {}],
    eraser_hintScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a6108ih2KhJUbAI3zRJqaz8", "eraser_hintScript"), cc.Class({
            extends: cc.Component,
            properties: {
                clearTarget: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6e05\u7406\u76ee\u6807"
                },
                showNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5c55\u793a\u8282\u70b9(\u6a61\u76ae)"
                }
            },
            onLoad: function() {
                this.showNode || (this.showNode = this.node)
            },
            start: function() {
                this.onAction()
            },
            onAction: function() {
                var e = this.clearTarget.width,
                    t = this.clearTarget.height,
                    o = this.showNode.width,
                    n = this.showNode.height,
                    i = cc.v2(-1 * (e / 2 - o / 2), t / 2 - n / 2).add(this.clearTarget.position.clone()),
                    a = cc.v2(-1 * (e / 2 - o / 2), -1 * (t / 2 - n / 2)).add(this.clearTarget.position.clone()),
                    c = cc.v2(e / 2 - o / 2, t / 2 - n / 2).add(this.clearTarget.position.clone()),
                    s = cc.v2(e / 2 - o / 2, -1 * (t / 2 - n / 2)).add(this.clearTarget.position.clone()),
                    l = (c.x - i.x) / 200,
                    r = (i.y - a.y) / 200;
                l <= 0 && (l = .1), r <= 0 && (r = .1), this.node.position = c, cc.tween(this.node).repeatForever(cc.tween().to(l, {
                    position: i
                }).to(r, {
                    position: a
                }).to(l, {
                    position: s
                }).to(r, {
                    position: c
                }).start()).start()
            }
        }), cc._RF.pop()
    }, {}],
    eventMergeEventNode: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "dc2e34SpS1BtqGqggLsToMq", "eventMergeEventNode"), cc.Class({
            extends: cc.Component,
            properties: {
                needMergeEventNodes: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u9700\u8981\u5408\u5e76\u7684\u4e8b\u4ef6\u8282\u70b9"
                },
                startDelayTime: {
                    default: 0,
                    displayName: "\u8d77\u59cb\u5ef6\u8fdf\u7684\u65f6\u95f4"
                },
                isAutomatic: {
                    default: !1,
                    displayName: "\u662f\u5426\u81ea\u52a8\u89e6\u53d1"
                }
            },
            onLoad: function() {
                this.node.switchEvent = this.switchEvent.bind(this)
            },
            start: function() {
                1 == this.isAutomatic && this.switchEvent()
            },
            switchEvent: function() {
                var e = this;
                this.node.stopAllActions(), cc.tween(this.node).delay(this.startDelayTime).call(function() {
                    for (var t = 0; t < e.needMergeEventNodes.length; t++) e.needMergeEventNodes[t] && e.needMergeEventNodes[t].switchEvent()
                }).start()
            }
        }), cc._RF.pop()
    }, {}],
    gameLoad: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "904a6ZLuxNFIJBQt9gBxGEk", "gameLoad"), cc.Class({
            extends: cc.Component,
            properties: {
                Progress: {
                    default: null,
                    type: cc.ProgressBar
                },
                ProgressText: {
                    default: null,
                    type: cc.Label
                },
                showText: {
                    default: null,
                    type: cc.Label
                }
            },
            onLoad: function() {
                this.Progress.progress = 0, this.lodeNum = 0, this.isResetTask = !1, this.ProgressText.string = "", window.GameLoad = this, this.needLoadNum = 5, this.slider = this.Progress.node.getChildByName("Slider").getComponent(cc.Slider)
            },
            start: function() {
                this.executeLoadSubpackage()
            },
            onToGame: function(e) {
                this.lodeNum++, this.lodeNum >= 5 && (cc.cheat.onStartVideo(), cc.director.loadScene("GameHome")), console.log("onToGame=", this.lodeNum, e)
            },
            onLoadScene: function() {
                cc.director.preloadScene("GameHome", function(e, t, o) {
                    this.Progress.progress = e / t, this.ProgressText.string = Math.round(e / t * 100 * 10) / 10 + "%", this.slider.progress = e / t
                }.bind(this), function() {
                    cc.loader.onProgress = null, this.onToGame("home\u573a\u666f\u52a0\u8f7d\u5b8c\u6210")
                }.bind(this))
            },
            loadAudioPath: function() {
                cc.Audios = {}, cc.loader.loadResDir("package/sounds/", function(e, t, o) {}.bind(this), function(e, t) {
                    null == e ? t.forEach(function(e) {
                        cc.Audios[e.name] = e
                    }) : console.error("\u58f0\u97f31\u52a0\u8f7d\u51fa\u9519", e), this.onToGame("\u58f0\u97f3\u5168\u90e8\u8f7d\u5165\u5b8c\u6210")
                }.bind(this))
            },
            onLoadFunClass: function() {
                (new(e("GlobalVariable"))).init(), cc.cheat = new(e("GameCheatScript")), cc.cheat.init(), cc.global.Source = new(e("AudioSourceScript")), cc.global.Source.init(), cc.global.hintText = null, cc.Utils = e("Utils");
                var t = cc.director.getScene().getChildByName("hintWindow");
                cc.game.addPersistRootNode(t), t.zIndex = 111, cc.global.hintText = t.getComponent("HintWindowScript");
                var o = cc.director.getScene().getChildByName("loadingWindow");
                cc.game.addPersistRootNode(o), cc.global.loadingWindow = o, this.onToGame("\u529f\u80fd\u7c7b\u8f7d\u5165\u5b8c\u6210")
            },
            getLocalStorage: function() {
                cc.global.firstGame = window.ArcadeTool.isFirstGame(), cc.global.isGuidance = cc.global.firstGame;
                cc.playerConfig = new(e("PlayerConfig")), cc.playerConfig.init(), this.onToGame("Arcade player data ready")
            },
            executeLoadSubpackage: function() {
                console.log("\u5f00\u59cb\u52a0\u8f7d\u5206\u5305");
                var e = null;
                if ((e = window.swan ? window.swan : window.tt ? window.tt : window.ks ? window.ks : window.qq ? window.qq : window.wx ? window.wx : window.oppo ? window.oppo : window.vivo ? window.vivo : null) && e.loadSubpackage) {
                    e.showLoading({
                        title: "\u52a0\u8f7d\u6570\u636e\u4e2d\uff0c\u8bf7\u7a0d\u7b49...",
                        mask: !0,
                        success: function() {
                            return console.log("loading\xa0\u63d0\u793a\u6846\u663e\u793a\u6210\u529f")
                        }
                    });
                    var t = function(t, o) {
                        console.log("\u5f53\u524d\u52a0\u8f7d\u5206\u5305\u5305\u540d:", t), e.loadSubpackage({
                            name: t,
                            success: function(e) {
                                console.log("\u52a0\u8f7d\u5206\u5305\xa0success"), o()
                            },
                            fail: function(e) {
                                console.log("\u52a0\u8f7d\u5206\u5305\xa0fail")
                            }
                        }).onProgressUpdate(function(e) {
                            console.log("\u4e0b\u8f7d\u8fdb\u5ea6", e.progress), console.log("\u5df2\u7ecf\u4e0b\u8f7d\u7684\u6570\u636e\u957f\u5ea6", e.totalBytesWritten), console.log("\u9884\u671f\u9700\u8981\u4e0b\u8f7d\u7684\u6570\u636e\u603b\u957f\u5ea6", e.totalBytesExpectedToWrite)
                        })
                    };
                    (function(e, o) {
                        var n = 0;
                        t(e[n], function i() {
                            ++n >= e.length ? o() : t(e[n], i)
                        })
                    })(["fenbao1", "fenbao2"], function() {
                        e.hideLoading({}), this.startLoadApplication()
                    }.bind(this))
                } else this.startLoadApplication()
            },
            startLoadApplication: function() {
                var t = this;
                console.log("\u914d\u7f6e\u4fe1\u606f:", window.GameConfig);
                var o = function() {
                    var t = e("../../resources/Platform/Platform.js");
                    cc.PlatformTools = new t, window.adUtils = cc.PlatformTools, this.onToGame("\u5e73\u53f0\u4fe1\u606f\u52a0\u8f7d\u5b8c\u6210"), cc.sys.localStorage.setItem("isPrivacy", "true")
                }.bind(this);
                this.onLoadFunClass(), this.loadAudioPath(), this.getLocalStorage(), this.onLoadScene(), this.getPrivacyAgreement(function() {
                    t.executeGameLogin(o)
                })
            },
            getPrivacyAgreement: function(e) {
                window.isPrivacy = cc.sys.localStorage.getItem("isPrivacy"), console.log("\u9690\u79c1\u534f\u8bae\u6807\u8bc6:", window.isPrivacy), window.hw ? (cc.loader.loadRes("Platform/Native/Prefab/huawei/Initial", function(e, t) {
                    e || (cc.instantiate(t).parent = cc.director.getScene())
                }), window.isPrivacy ? (e(), console.log("\u534e\u4e3a\u4e0d\u9700\u8981\u6253\u5f00\u9690\u79c1\u534f\u8bae")) : (console.log("\u534e\u4e3a\u9700\u8981\u6253\u5f00\u9690\u79c1\u534f\u8bae"), cc.loader.loadRes("Platform/Native/Prefab/privacy/Privacy", function(t, o) {
                    if (!t) {
                        var n = cc.instantiate(o);
                        n.callBack = e, n.parent = cc.director.getScene()
                    }
                }))) : window.oppo || window.vivo || window.qq ? window.isPrivacy ? (e(), console.log("oppo\u4e0d\u9700\u8981\u6253\u5f00\u9690\u79c1\u534f\u8bae")) : (console.log("oppo\u9700\u8981\u6253\u5f00\u9690\u79c1\u534f\u8bae"), cc.loader.loadRes("Platform/Native/Prefab/privacy/Privacy", function(t, o) {
                    if (!t) {
                        var n = cc.instantiate(o);
                        n.callBack = e, n.parent = cc.director.getScene()
                    }
                })) : (e(), console.log("\u4e0d\u9700\u8981\u5c55\u793a\u9690\u79c1\u534f\u8bae"))
            },
            executeGameLogin: function(e) {
                var t = this;
                if (this.nextFunc_login || (this.nextFunc_login = e), window.hw) {
                    if (!1 === window.GameConfig.allowLogin) return console.log("\u534e\u4e3a\u4e0d\u9700\u8981\u767b\u9646"), void(this.nextFunc_login && this.nextFunc_login());
                    window.qg.gameLogin({
                        forceLogin: 1,
                        appid: window.HuaWeiTools.AppID,
                        success: function(e) {
                            qg.savePlayerInfo({
                                appid: window.HuaWeiTools.AppID,
                                area: "cn",
                                success: function(e) {
                                    console.log("\u534e\u4e3a\u4fdd\u5b58\u7528\u6237\u4fe1\u606f\u6210\u529f")
                                },
                                fail: function(e, t) {
                                    console.log("\u534e\u4e3a\u4fdd\u5b58\u7528\u6237\u4fe1\u606f\u5931\u8d25")
                                }
                            }), console.log("\u534e\u4e3a\u767b\u9646\u6210\u529f"), t.nextFunc_login && t.nextFunc_login()
                        },
                        fail: function(e, o) {
                            cc.director.getScene().getChildByName("loginWindow") || cc.loader.loadRes("Platform/Native/Prefab/huawei/loginWindow", function(e, t) {
                                if (!e) {
                                    var o = cc.instantiate(t);
                                    o.parent = cc.director.getScene(), o.on(cc.Node.EventType.TOUCH_START, this.executeGameLogin, this)
                                }
                            }.bind(t)), console.log("\u534e\u4e3a\u767b\u9646\u5931\u8d25")
                        }
                    })
                } else console.log("\u5176\u4ed6\u5e73\u53f0\u4e0d\u9700\u8981\u767b\u9646"), this.nextFunc_login && this.nextFunc_login()
            }
        }), cc._RF.pop()
    }, {
        "../../resources/Platform/Platform.js": "Platform",
        AudioSourceScript: "AudioSourceScript",
        GameCheatScript: "GameCheatScript",
        GlobalVariable: "GlobalVariable",
        PlayerConfig: "PlayerConfig",
        Utils: "Utils"
    }],
    gravitySensor: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "631ee6mxx5LYq+2Am7gWzfJ", "gravitySensor"), cc.Class({
            extends: cc.Component,
            properties: {
                isEnable: {
                    default: !0,
                    displayName: "\u662f\u5426\u6fc0\u6d3b"
                }
            },
            onLoad: function() {
                1 == this.isEnable && (cc.systemEvent.setAccelerometerEnabled(!0), cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.DeviceMotion, this)), window.GravitySensorManage = this
            },
            start: function() {},
            onReceiveMobileWaggle: function(e) {
                e && (this.mobileWaggleFunCall = e, cc.global.onVibrateLong())
            },
            DeviceMotion: function(e) {
                this.accelEvent = e;
                var t = e.acc.x,
                    o = e.acc.y,
                    n = e.acc.z;
                this.mobileDirection = {
                    isUp: !1,
                    isDown: !1,
                    isLeft: !1,
                    isRight: !1
                };
                this.mobileDirection.isUp = o < -.6, this.mobileDirection.isDown = o > .6, this.mobileDirection.isLeft = t < -.6, this.mobileDirection.isRight = t > .6;
                Math.abs(t) >= .6 && Math.abs(o) >= .6 && Math.abs(n) >= .6 && (console.log("\u6643\u52a8\u624b\u673a"), this.mobileWaggleFunCall && (this.mobileWaggleFunCall(), this.mobileWaggleFunCall = null))
            }
        }), cc._RF.pop()
    }, {}],
    h5_4399: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "a1966zTwiFD3JrxbUfEXVLd", "h5_4399");
        var c = function() {
            function e() {
                n(this, e)
            }
            return a(e, [{
                key: "sendToDesktop",
                value: function(e) {
                    e.active = !1
                }
            }, {
                key: "executeShowBanner",
                value: function() {}
            }, {
                key: "executeHideBanner",
                value: function() {}
            }, {
                key: "executeShowInterstitial",
                value: function() {}
            }, {
                key: "executeShowAwardVideo",
                value: function(e, t) {
                    cc.game.pause(), window.h5api.playAd(function(o) {
                        1e4 === o.code ? console.log("\u5f00\u59cb\u64ad\u653e") : 10001 === o.code ? (e && e(), e = null, cc.game.resume()) : (console.log("\u5e7f\u544a\u5f02\u5e38"), t && t(), t = null, cc.game.resume())
                    })
                }
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    e.active = !1
                }
            }, {
                key: "executeRecorder",
                value: function() {}
            }, {
                key: "stopRecorder",
                value: function() {}
            }, {
                key: "executeShareRecorder",
                value: function(e, t) {}
            }]), e
        }();
        t.exports = new c, cc._RF.pop()
    }, {}],
    h5_uc: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "c5763LGw51B1a3x70/Me98F", "h5_uc");
        var c = function() {
            function e() {
                n(this, e), this.AppId = "e598a50093d44e7e99987a078e811768", this.successCallBack = null, this.failureCallBack = null
            }
            return a(e, [{
                key: "doInitialize",
                value: function() {
                    var e = this;
                    if (this.device = window.uc.getSystemInfoSync(), "string" == typeof this.device) try {
                        this.device = JSON.parse(this.device)
                    } catch (e) {}
                    this.Video = window.uc.createRewardVideoAd(), this.Video.load().then(function() {
                        console.log("UC \u89c6\u9891\u7ec4\u4ef6\u52a0\u8f7d\u6210\u529f")
                    }).catch(function(t) {
                        console.log("UC \u89c6\u9891\u52a0\u8f7d\u5931\u8d25:", t), e.Video = null
                    }), this.Video.onClose(function(t) {
                        t && t.isEnded ? (console.log("\u89c6\u9891\u6b63\u5e38\u64ad\u653e\u5b8c\u6bd5"), e.executeSuccessHandle()) : (window.GameConfig.isLine && window.GameConfig.showModal ? window.uc.showModal({
                            title: "\u672a\u89c2\u770b\u5b8c\u89c6\u9891",
                            content: "\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6\uff1f",
                            success: function(t) {
                                t.confirm ? e.Video.show().then(function() {
                                    console.log("UC \u89c6\u9891\u7ec4\u4ef6\u663e\u793a\u6210\u529f")
                                }).catch(function(t) {
                                    console.error("UC \u89c6\u9891\u7ec4\u4ef6\u663e\u793a\u5931\u8d25:", t), e.executeFailureHandle()
                                }) : t.cancel && (console.log("\u70b9\u51fb\u4e86\u53d6\u6d88"), e.executeFailureHandle())
                            },
                            fail: function(e) {
                                console.log("\u6a21\u6001\u5bf9\u8bdd\u6846\u663e\u793a\u5931\u8d25: ", e)
                            }
                        }) : e.executeFailureHandle(), console.log("\u89c6\u9891\u4e2d\u9014\u9000\u51fa"))
                    });
                    var t = {
                        style: {
                            width: this.device.windowWidth,
                            height: 200,
                            gravity: 7
                        }
                    };
                    this.Banner = window.uc.createBannerAd(t), this.Banner.onLoad(function() {
                        console.log("UC Banner\u7ec4\u4ef6\u521d\u59cb\u5316\u6210\u529f")
                    }), this.Interstitial = window.uc.createInterstitialAd(), this.Interstitial.load().then(function() {
                        console.log("UC Interstitial\u7ec4\u4ef6\u521d\u59cb\u5316\u6210\u529f")
                    }).catch(function(t) {
                        console.log("UC Interstitial\u7ec4\u4ef6\u521d\u59cb\u5316\u5931\u8d25"), e.Interstitial = null
                    })
                }
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    e.active = !1
                }
            }, {
                key: "executeShowBanner",
                value: function() {
                    window.GameConfig.isLine && this.Banner && window.GameConfig.allowBanner ? (this.executeHideBanner(), console.log("\u663e\u793aBanner"), this.Banner.show()) : console.log("\u7981\u6b62\u663e\u793aBanner")
                }
            }, {
                key: "executeHideBanner",
                value: function() {
                    window.GameConfig.isLine && this.Banner && window.GameConfig.allowBanner && this.Banner.hide()
                }
            }, {
                key: "executeShowInterstitial",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        window.GameConfig.isLine && e.Interstitial && window.GameConfig.allowInterstitial ? e.Interstitial.show().then(function() {
                            console.log("UC Interstitial\u7ec4\u4ef6\u663e\u793a\u6210\u529f")
                        }).catch(function(e) {
                            console.error("UC Interstitial\u7ec4\u4ef6\u663e\u793a\u5931\u8d25:", e)
                        }) : console.log("\u7981\u6b62\u663e\u793aInterstitial")
                    }, 1e3)
                }
            }, {
                key: "executeShowAwardVideo",
                value: function(e, t) {
                    var o = this;
                    if (!this.Video) return console.log("\u7ebf\u4e0b\u7248\u672c\u6216\u89c6\u9891\u7ec4\u4ef6\u5f02\u5e38"), void(e && e());
                    this.successCallBack = e, this.failureCallBack = t, cc.audioEngine.pauseAll(), cc.director.pause(), this.Video.show().then(function() {
                        console.log("UC \u89c6\u9891\u7ec4\u4ef6\u663e\u793a\u6210\u529f")
                    }).catch(function(e) {
                        console.error("UC \u89c6\u9891\u7ec4\u4ef6\u663e\u793a\u5931\u8d25:", e), o.executeFailureHandle()
                    })
                }
            }, {
                key: "executeSuccessHandle",
                value: function() {
                    cc.audioEngine.resumeAll(), cc.director.resume(), this.successCallBack && this.successCallBack(), this.successCallBack = null
                }
            }, {
                key: "executeFailureHandle",
                value: function() {
                    cc.audioEngine.resumeAll(), cc.director.resume(), this.failureCallBack && this.failureCallBack(), this.failureCallBack = null
                }
            }, {
                key: "executeExtractPushInformation",
                value: function(e) {}
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    e.active = !1
                }
            }, {
                key: "executeRecorder",
                value: function() {}
            }, {
                key: "stopRecorder",
                value: function() {}
            }, {
                key: "executeShareRecorder",
                value: function(e, t) {
                    window.uc.shareAppMessage({
                        query: "",
                        target: "wechat",
                        success: function(t) {
                            console.log("UC \u5206\u4eab\u6210\u529f"), e && e()
                        },
                        fail: function(e) {
                            console.log("UC \u5206\u4eab\u5931\u8d25:", e), t && t()
                        }
                    })
                }
            }]), e
        }();
        t.exports = new c, cc._RF.pop()
    }, {}],
    huawei: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "38361gXZFtCh76NbWdWIFAK", "huawei");
        var c = function() {
            function e() {
                n(this, e), this.PackageName = "com.cx.fxsbknd", this.AppID = "104198789", this.BannerCode = "", this.VideoCode = "", this.InterstitialCode = "", this.BannerCode_default = "w0z4zs0i4h", this.VideoCode_default = "h7vft8vr5l", this.InterstitialCode_default = "", this.NativeCode_default = "c34lllt3rw", this.BannerInstance = null, this.InterstitialInstance = null, this.NativeInstance = null, this.VideoInstance = null, this.VideoSuccessCallBack = null, this.VideoFailureCallBack = null, this.GameBoxCode = "", this.GamePushBox = null, this.InitializeTime = null, this.videoTime = null, this.lastBannerShowTime = null, this.adId = null, this.winBannerShowNum = 0, this.haveVideoAD = !0, window.HuaWeiTools = this
            }
            return a(e, [{
                key: "doInitialize",
                value: function() {
                    var e = this;
                    1 == window.GameConfig.isLine ? (this.BannerCode = window.GameConfig.BannerCode_zhengshi, this.VideoCode = window.GameConfig.VideoCode_zhengshi, this.InterstitialCode = window.GameConfig.InterstitialCode_zhengshi, this.NativeCode = window.GameConfig.NativeCode_zhengshi) : (this.BannerCode = window.GameConfig.BannerCode_ceshi, this.VideoCode = window.GameConfig.VideoCode_ceshi, this.InterstitialCode = window.GameConfig.InterstitialCode_ceshi, this.NativeCode = window.GameConfig.NativeCode_ceshi), this.BannerCode && this.VideoCode || (this.BannerCode = this.BannerCode_default, this.VideoCode = this.VideoCode_default, this.InterstitialCode = this.InterstitialCode_default, this.NativeCode = this.NativeCode_default), cc.loader.loadRes("Platform/Native/Prefab/NativeInterstitial", function(t, o) {
                        t || (e.NativeInterstitial = cc.instantiate(o), e.NativeInterstitial.zIndex = 999, cc.game.addPersistRootNode(e.NativeInterstitial), cc.PlatformTools.NativeInterstitial = e.NativeInterstitial, console.log("NativeInterstitial\u521b\u5efa\u6210\u529f"))
                    }), this.Device = window.qg.getSystemInfoSync(), this.BannerAd = window.qg.createBannerAd({
                        adUnitId: this.BannerCode,
                        adIntervals: 60,
                        style: {
                            top: this.Device.safeArea.height - 57,
                            left: this.Device.safeArea.width / 2 - 180,
                            height: 57,
                            width: 360
                        }
                    }), this.BannerAd.onError(function(e) {
                        console.log("bannerAd \u5e7f\u544a\u52a0\u8f7d\u51fa\u9519", JSON.stringify(e))
                    }), this.BannerAd.onLoad(function() {
                        console.log("bannerAd \u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
                    }), this.BannerAd.onClose(function() {
                        console.log("bannerAd \u5e7f\u544a\u5173\u95ed")
                    }), this.VideoInstance = window.qg.createRewardedVideoAd({
                        adUnitId: this.VideoCode,
                        success: function(t) {
                            console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd: success"), e.VideoInstance.onLoad(function() {
                                e.haveVideoAD = !0
                            }), e.VideoInstance.onError(function(t) {
                                e.haveVideoAD = !1
                            }), e.VideoInstance.onClose(function(t) {
                                1 == t.isEnded ? e.videoDisplaySuccessCallBack() : e.videoDisplayFailureCallBack(), e.VideoInstance.load()
                            }), e.VideoInstance.load()
                        },
                        fail: function(t, o) {
                            console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd fail: " + t + "," + o), e.VideoInstance = null
                        },
                        complete: function() {
                            console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd complete")
                        }
                    }), window.qg.onShow(function() {
                        console.log("\u5207\u5230\u524d\u53f0", e.shangBao_zhanShi), e.shangBao_zhanShi && e.shangBao_zhanShi()
                    }), console.log("\u521d\u59cb\u5316\u534e\u4e3a"), this.InitializeTime = (new Date).getTime()
                }
            }, {
                key: "executeShowInterstitial",
                value: function(e) {
                    this.executeHideBanner(), console.log("\u8c03\u7528\u63d2\u5c4f\u529f\u80fd", e), this.NativeInterstitial && 100 * Math.random() < window.GameConfig.randomPush && this.onGetNativeAD(this.NativeInterstitial)
                }
            }, {
                key: "executeHideBanner",
                value: function() {
                    console.log("\u9690\u85cfBanner...."), this.BannerInstance && (this.BannerInstance.active = !1), this.BannerAd && this.BannerAd.hide()
                }
            }, {
                key: "executeShowBanner",
                value: function() {
                    console.log("\u62c9\u53d6Banner...."), window.GameConfig.allowInterstitial && 0 != window.GameConfig.allowInterstitial || this.systemBanner()
                }
            }, {
                key: "executeShowAwardVideo",
                value: function(e, t) {
                    if (this.haveVideoAD) {
                        this.VideoSuccessCallBack = e, this.VideoFailureCallBack = t;
                        var o = (new Date).getTime();
                        this.videoTime && o - this.videoTime < 1e3 ? console.log("\u89c6\u9891\u70b9\u51fb\u592a\u5feb--", (o - this.videoTime) / 1e3) : (this.videoTime = o, this.VideoInstance.show())
                    } else window.qg.showToast({
                        title: "\u6682\u65e0\u89c6\u9891\u5e7f\u544a",
                        icon: "",
                        duration: 1500
                    })
                }
            }, {
                key: "videoDisplaySuccessCallBack",
                value: function() {
                    null != this.VideoSuccessCallBack && (this.VideoSuccessCallBack(), this.VideoSuccessCallBack = null)
                }
            }, {
                key: "videoDisplayFailureCallBack",
                value: function() {
                    null != this.VideoFailureCallBack && (this.VideoFailureCallBack(), this.VideoFailureCallBack = null)
                }
            }, {
                key: "executeExtractMoreGame",
                value: function(e) {}
            }, {
                key: "executeShowPushBox",
                value: function() {
                    window.qg.hasShortcutInstalled({
                        success: function(e) {
                            e ? console.log("\u684c\u9762\u6709\u56fe\u6807:", e) : (console.log("\u684c\u9762\u65e0\u56fe\u6807:", e), cc.PlatformTools.sendToDesktop())
                        }.bind(this),
                        fail: function(e) {}.bind(this),
                        complete: function() {}.bind(this)
                    })
                }
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    window.qg.installShortcut({
                        success: function() {
                            e && (e.active = !1)
                        },
                        fail: function(e) {},
                        complete: function() {}
                    })
                }
            }, {
                key: "onGetNativeAD",
                value: function(e) {
                    var t = this;
                    console.log("\u5f00\u59cb\u521b\u5efa\u539f\u751f\u5e7f\u544a:", this.NativeCode);
                    var o = this.NativeCode,
                        n = window.qg.createNativeAd({
                            adUnitId: o,
                            success: function(i) {
                                n.onError(function(e) {
                                    t.systemBanner(), console.error("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25" + JSON.stringify(e), ";\u5e7f\u544aid=", o), n.offError(), n.offLoad()
                                }), n.onLoad(function(o) {
                                    console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f" + JSON.stringify(o));
                                    var i = o.adList[0].adId;
                                    t.shangBao_zhanShi = function() {
                                        console.log("\u539f\u751f\u5e7f\u544a\u5c55\u793a\u4e0a\u62a5:", i), n.reportAdShow({
                                            adId: i
                                        })
                                    }, t.shangBao_zhanShi();
                                    e.getComponent("NativeBanner").executeRefresh(o, function() {
                                        console.log("\u539f\u751f\u5e7f\u544a\u70b9\u51fb\u4e0a\u62a5:", i), n.reportAdClick({
                                            adId: i
                                        })
                                    }, function() {
                                        "NativeInterstitial" == e.name && t.systemBanner(), t.shangBao_zhanShi = null
                                    }), n.offError(), n.offLoad()
                                }), n.load()
                            },
                            fail: function(e, o) {
                                console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25: " + e + "," + o), t.systemBanner()
                            },
                            complete: function() {}
                        })
                }
            }, {
                key: "systemBanner",
                value: function() {
                    this.executeHideBanner(), this.BannerAd && this.BannerAd.show()
                }
            }]), e
        }();
        t.exports = new c, cc._RF.pop()
    }, {}],
    jigsawEvent: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4f676KjRGZC+JnAIpQjVgHX", "jigsawEvent"), cc.Class({
            extends: cc.Component,
            properties: {
                posNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u4f4d\u7f6e\u8282\u70b9"
                },
                partNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u96f6\u4ef6\u8282\u70b9"
                },
                intactNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5b8c\u6574\u8282\u70b9"
                },
                eventNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u4e8b\u4ef6\u8282\u70b9"
                }
            },
            onLoad: function() {
                this.jointNum = 0, this.checkingPartNode = null, this.zIndex_reality = 0, this.jointEffect = this.node.getChildByName("jointEffect"), this.jointEffect && (this.jointEffect.active = !1), this.node.hintEvent = this.onHint.bind(this), this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
            },
            start: function() {
                if (this.intactNode && (this.intactNode.active = !1), "blackNode" != this.posNode.name)
                    for (var e = 0; e < this.posNode.children.length; e++) this.posNode.children[e].active = !1;
                for (var t = 0; t < this.partNode.children.length; t++) this.partNode.children[t].isHoming = !1
            },
            onJointEvent: function() {
                this.jointNum++, this.jointNum >= this.partNode.children.length && (console.log("\u5b8c\u6210\u51f6\u5668\u62fc\u56fe"), this.onCompleteEvent(), this.onShowFullEvent())
            },
            onCompleteEvent: function() {
                this.eventNode && this.eventNode.switchEvent && this.eventNode.switchEvent()
            },
            onTouchStart: function(e) {
                e.target;
                var t = this.node.convertToNodeSpaceAR(e.getLocation()),
                    o = this.onGetPartNode(t);
                o && (this.checkingPartNode = o, this.checkingPartNode.getComponent("FlutterEffect") && this.checkingPartNode.getComponent("FlutterEffect").onCloseEffect(), this.zIndex_reality = this.checkingPartNode.zIndex, this.checkingPartNode.zIndex = 99, this.onHide())
            },
            onTouchEnd: function(e) {
                if (this.checkingPartNode) {
                    this.checkingPartNode.zIndex = this.zIndex_reality;
                    var t = this.onGetPosNode(this.checkingPartNode);
                    t && (this.checkingPartNode.position = t.position.clone(), this.checkingPartNode.angle = 0, this.checkingPartNode.isHoming = !0, this.onAccomplishEffect(this.checkingPartNode), this.onJointEvent(), this.checkingPartNode.zIndex = -1), this.checkingPartNode = null
                }
            },
            onTouchMove: function(e) {
                e.target;
                var t = e.getDelta();
                if (this.checkingPartNode) {
                    var o = this.checkingPartNode.position.clone().add(t);
                    o.x < -360 && (o.x = -360), o.x > 360 && (o.x = 360), o.y < -600 && (o.y = -600), o.y > 600 && (o.y = 600), this.checkingPartNode.position = o
                }
            },
            onGetPartNode: function(e) {
                for (var t = [], o = cc.global.onTransitionPosition(this.node, this.partNode, e), n = 0; n < this.partNode.children.length; n++) {
                    1 == this.partNode.children[n].getBoundingBox().contains(o) && 0 == this.partNode.children[n].isHoming && t.push(this.partNode.children[n])
                }
                return t.length <= 0 ? null : t[t.length - 1]
            },
            onGetPosNode: function(e) {
                for (var t = cc.global.onTransitionPosition(e.parent, this.posNode, e.position.clone()), o = 0; o < this.posNode.children.length; o++) {
                    if (1 == this.posNode.children[o].getBoundingBox().contains(t) && e.name == this.posNode.children[o].name) return this.posNode.children[o]
                }
                return null
            },
            onAccomplishEffect: function(e) {
                var t = this;
                if (cc.tween(e).to(.2, {
                        scale: 1.1
                    }).to(.2, {
                        scale: 1
                    }).call(function() {}).start(), this.jointEffect) {
                    var o = cc.global.onTransitionPosition(e.parent, this.jointEffect.parent, e.position.clone());
                    this.jointEffect.position = o, this.jointEffect.scale = 1, this.jointEffect.active = !0, cc.tween(this.jointEffect).to(.3, {
                        scale: 2
                    }).call(function() {
                        t.jointEffect.active = !1
                    }).start()
                }
                cc.global.onVibrateShort(), cc.global.Source.onPlayGameEffect("correct")
            },
            onShowFullEvent: function() {
                this.intactNode && (this.partNode.active = !1, this.posNode.active = !1, this.intactNode.active = !0, this.onAccomplishEffect(this.intactNode))
            },
            onHint: function() {
                this.intactNode.stopAllActions(), this.intactNode.active = !0, this.intactNode.opacity = 255, cc.tween(this.intactNode).repeatForever(cc.tween().delay(.2).to(.6, {
                    opacity: 0
                }).to(.6, {
                    opacity: 255
                }).start()).start()
            },
            onHide: function() {
                this.intactNode.stopAllActions(), this.intactNode.active = !1, this.intactNode.opacity = 255
            }
        }), cc._RF.pop()
    }, {}],
    levelHintEvent: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "305fdG8FUBCY6xncvneujPL", "levelHintEvent"), cc.Class({
            extends: cc.Component,
            properties: {
                tagerNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u9700\u8981\u6dfb\u52a0\u63d0\u793a\u7684\u76ee\u6807\u8282\u70b9"
                },
                hintEventList: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u63d0\u793a\u8282\u70b9\u5217\u8868(\u7528\u6765\u663e\u793a\u591a\u4e2a\u8282\u70b9)"
                }
            },
            onLoad: function() {
                if (this.tagerNode || (this.tagerNode = this.node.parent), this.tagerNode.hintEvent || (this.tagerNode.hintEvent = this.hintEvent.bind(this)), this.hintEventList.length > 0)
                    for (var e = 0; e < this.hintEventList.length; e++) this.hintEventList[e] && (this.hintEventList[e].active = !1);
                this.node.active = !1
            },
            start: function() {},
            hintEvent: function() {
                if (this.node.active = !0, this.hintEventList.length > 0)
                    for (var e = 0; e < this.hintEventList.length; e++) this.hintEventList[e] && (this.hintEventList[e].active = !0)
            }
        }), cc._RF.pop()
    }, {}],
    logoShow_4399: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e2f6bxt66NDDIkXq6irJx3j", "logoShow_4399"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.h5api || (this.node.active = !1)
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    meiZu: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "76836GOk+1AzKow1t2bGZMd", "meiZu");
        var c = function() {
            function e() {
                n(this, e), this.packageName = "com.cx.wjdmt.vivominigame", this.AppID = "", this.NativeIndex = 0, this.BannerCode = "3735bc0cc4134b469f81c450c879a1a9", this.InterstitialCode = "fba5540a4265469199cd8c3bf4583db5", this.VideoCode = "64c177806ba34698ae4ab207908ab690", this.NativeCode = "", this.NativeListCode = ["ff50301c3ed54bc5b7a324c88a7f19ba", "b3cc5bb5c8c14ad28558d3d6cabb4b2f", "4cd06839a2b44b89b498647283c3a26a"], this.BannerInstance = null, this.NativeInstance = null, this.VideoInstance = null, this.VideoSuccessCallBack = null, this.VideoFailureCallBack = null, this.GameBoxCode = "07629c97f3b244c488dd11a5c1e8f633", this.GamePushBox = null, this.videoTime = null, this.lastBannerShowTime = null, window.VIVOTools = this
            }
            return a(e, [{
                key: "doInitialize",
                value: function() {
                    var e = this,
                        t = function() {
                            e.lastBannerShowTime = 0, cc.loader.loadRes("Platform/Native/Prefab/NativeBanner", function(t, o) {
                                t || (e.BannerInstance = cc.instantiate(o), e.BannerInstance.zIndex = 998, cc.game.addPersistRootNode(e.BannerInstance)), console.log("NativeBanner\u521b\u5efa\u6210\u529f")
                            }), cc.loader.loadRes("Platform/Native/Prefab/NativeInterstitial", function(t, o) {
                                t || (e.NativeInterstitial = cc.instantiate(o), e.NativeInterstitial.zIndex = 999, cc.game.addPersistRootNode(e.NativeInterstitial), cc.PlatformTools.NativeInterstitial = e.NativeInterstitial), console.log("NativeInterstitial\u521b\u5efa\u6210\u529f")
                            }), e.BannerAd = window.qg.createBannerAd({
                                adUnitId: e.BannerCode
                            }), e.BannerAd.onError(function(e) {
                                console.log(e)
                            })
                        };
                    if (console.log("\u521d\u59cb\u5316vivo"), t && t(), window.GameConfig.type || (window.GameConfig.type = 1), window.GameConfig.pushTime || (window.GameConfig.pushTime = 30), 2 == window.GameConfig.type) {
                        cc.tween({}).repeatForever(cc.tween().delay(window.GameConfig.pushTime).call(function() {
                            e.executeHideBanner(), e.onGetNativeAD(e.NativeInterstitial)
                        }).start()).start()
                    }
                }
            }, {
                key: "executeShowInterstitial",
                value: function(e) {
                    1 == window.GameConfig.type && (console.log("vivo\u539f\u751f\u63d2\u5c4f", e), this.executeHideBanner(), "inGame" == e ? 100 * Math.random() < window.GameConfig.inGameAD && this.onGetNativeAD(this.NativeInterstitial) : "endGame" == e ? 0 == window.GameConfig.endGameAD ? 100 * Math.random() < 50 ? this.systemInterstitial() : this.onGetNativeAD(this.NativeInterstitial) : 100 * Math.random() < window.GameConfig.endGameAD && this.onGetNativeAD(this.NativeInterstitial) : 0 == window.GameConfig.otherUIAD ? 100 * Math.random() < 50 ? this.systemBanner() : this.onGetNativeAD(this.BannerInstance) : 100 * Math.random() < window.GameConfig.otherUIAD && this.onGetNativeAD(this.NativeInterstitial))
                }
            }, {
                key: "executeHideBanner",
                value: function() {
                    console.log("\u9690\u85cfbanner"), this.NativeInterstitial && (this.NativeInterstitial.active = !1), this.BannerInstance && (this.BannerInstance.active = !1), this.BannerAd && this.BannerAd.hide()
                }
            }, {
                key: "executeShowBanner",
                value: function(e) {}
            }, {
                key: "executeShowAwardVideo",
                value: function(e, t) {
                    var o = this,
                        n = this,
                        i = (new Date).getTime();
                    this.videoTime && i - this.videoTime < 2e3 ? console.log("\u89c6\u9891\u70b9\u51fb\u592a\u5feb--", (i - this.videoTime) / 1e3) : (this.videoTime = i, this.VideoInstance && (this.VideoInstance.destroy(), this.VideoInstance = null), this.VideoInstance = window.qg.createRewardedVideoAd({
                        adUnitId: this.VideoCode
                    }), this.VideoInstance.onLoad(function() {
                        o.VideoInstance.show()
                    }), this.VideoInstance.onError(function(e) {
                        console.log("\u89c6\u9891\u5e7f\u544a\u5931\u8d25=", e)
                    }), this.VideoInstance.onRewarded(function() {
                        o.isReward = !0
                    }), this.VideoInstance.onClose(function(i) {
                        1 == o.isReward ? o.scheduleOnce(function() {
                            e && e(), e = null
                        }.bind(o), .5) : window.GameConfig.showModal ? window.qg.showModal({
                            title: "\u672a\u89c2\u770b\u5b8c\u89c6\u9891",
                            content: "\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6!",
                            success: function(o) {
                                o.confirm ? (n.videoTime = 0, n.executeShowAwardVideo(e, t)) : o.cancel ? (console.log("\u53d6\u6d88"), this.scheduleOnce(function() {
                                    t && t(), t = null
                                }.bind(this), .5), window.qg.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })) : (this.scheduleOnce(function() {
                                    t && t(), t = null
                                }.bind(this), .5), window.qg.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                }))
                            },
                            fail: function(e) {
                                console.log("showModal\u8c03\u7528\u5931\u8d25"), this.scheduleOnce(function() {
                                    t && t(), t = null
                                }.bind(this), .5), window.qg.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })
                            }
                        }) : o.scheduleOnce(function() {
                            t && t(), t = null
                        }.bind(o), .5)
                    }), this.VideoInstance.load())
                }
            }, {
                key: "executeShowPushBox",
                value: function() {}
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    window.qg.installShortcut({
                        success: function() {
                            e && (e.active = !1)
                        },
                        fail: function(e) {},
                        complete: function() {}
                    })
                }
            }, {
                key: "executeShowBanner2",
                value: function() {
                    console.log("\u8c03\u7528\u5173\u95ed\u63d2\u5c4f\u540e\u7684banner"), this.executeHideBanner(), this.onGetNativeAD(this.BannerInstance)
                }
            }, {
                key: "onGetNativeAD",
                value: function(e) {
                    var t = this;
                    if (qg.createNativeAd) {
                        this.NativeIndex++, this.NativeIndex >= this.NativeListCode.length && (this.NativeIndex = 0);
                        var o = this.NativeListCode[this.NativeIndex],
                            n = window.qg.createNativeAd({
                                adUnitId: o
                            });
                        n.onLoad(function(o) {
                            console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210-onload\u89e6\u53d1", JSON.stringify(o));
                            var i = o.adList[0].adId;
                            console.log("\u539f\u751f\u5e7f\u544a\u66dd\u5149\u4e0a\u62a5:", i), n.reportAdShow({
                                adId: i
                            });
                            e.getComponent("NativeBanner").executeRefresh(o, function() {
                                console.log("\u539f\u751f\u5e7f\u544a\u70b9\u51fb\u4e0a\u62a5:", i), n.reportAdClick({
                                    adId: i
                                })
                            }, function() {
                                "NativeInterstitial" == e.name && 100 * Math.random() < window.GameConfig.quitShow && t.onGetNativeAD(t.BannerInstance)
                            })
                        }), n.onError(function(o) {
                            console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5f02\u5e38", o), 100 * Math.random() < window.GameConfig.quitShow && ("NativeInterstitial" == e.name ? t.systemInterstitial() : t.systemBanner())
                        })
                    } else console.log("\u5f53\u524d\u7248\u672c\u6682\u4e0d\u652f\u6301\u539f\u751f")
                }
            }, {
                key: "systemBanner",
                value: function() {
                    console.log("\u5c55\u793a\u7cfb\u7edfbanner"), this.executeHideBanner(), this.BannerAd.show()
                }
            }, {
                key: "systemInterstitial",
                value: function() {
                    var e = this;
                    console.log("\u7cfb\u7edf\u63d2\u5c4f\u5e7f\u544a"), this.executeHideBanner();
                    var t = qg.createInsertAd({
                        adUnitId: this.InterstitialCode
                    });
                    t.onError(function(t) {
                        100 * Math.random() < window.GameConfig.quitShow && e.onGetNativeAD(e.BannerInstance)
                    }), t.onClose(function() {
                        t.offClose(), 100 * Math.random() < window.GameConfig.quitShow && this.onGetNativeAD(this.BannerInstance)
                    }), t.onError(function(e) {
                        console.log("\u8c03\u7528\u63d2\u5c4f\u5931\u8d25", e)
                    }), t.show()
                }
            }]), e
        }();
        t.exports = new c, cc._RF.pop()
    }, {}],
    mobileWaggleEvent: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "25385N2y4lC4b9mPHVTItbo", "mobileWaggleEvent"), cc.Class({
            extends: cc.Component,
            properties: {
                eventNodeList: {
                    default: [],
                    type: cc.Node,
                    displayName: "\u7ed3\u675f\u4e8b\u4ef6\u8282\u70b9"
                },
                eventNode_over: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7ed3\u675f\u4e8b\u4ef6\u8282\u70b9"
                },
                activateStartTime: {
                    default: -1,
                    displayName: "\u8d77\u59cb\u6fc0\u6d3b\u65f6\u95f4,-1\u4e3a\u4e0d\u4e3b\u52a8\u673a\u4f1a"
                }
            },
            start: function() {
                this.node.switchEvent = this.switchEvent.bind(this), this.nowIndex = -1, this.activateStartTime >= 0 && this.scheduleOnce(function() {
                    this.switchEvent()
                }.bind(this), this.activateStartTime)
            },
            switchEvent: function() {
                var e = this;
                cc.global._gameManage.onReceiveMobileWaggle(function() {
                    e.eventNodeList.length > 0 || e.eventNode_over && e.eventNode_over.switchEvent()
                })
            }
        }), cc._RF.pop()
    }, {}],
    onLineGiftButton: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a9273dJrtBJVo1Nq1npQcIT", "onLineGiftButton"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.gift = this.node.getChildByName("btn_gift"), this.lingqu = this.gift.getChildByName("lingqu"), this.label = this.node.getChildByName("Label"), cc.global.onLineAwardTime >= 0 || !cc.global.onLineAwardTime && 0 != cc.global.onLineAwardTime ? this.node.active = !0 : this.node.active = !1
            },
            start: function() {
                this.onBtnShowEffect(this.gift), console.log("\u5728\u7ebf\u793c\u5305")
            },
            onButtonClick: function(e) {
                switch (cc.global.Source.onPlayBtnEffect(), e.target.name) {
                    case "btn_gift":
                        0 == cc.global.onLineAwardTime ? (cc.global.onLineAwardTime = -1, cc.playerData.coin += 300, cc.playerConfig.savePlayerData(), cc.global.LoadPrefabData("prefabs/UI/getShowWindow", {
                            frame: null,
                            num: 300
                        }), this.node.active = !1) : console.log("\u65f6\u95f4\u6ca1\u5230\u5462");
                        break;
                    default:
                        console.log("\u70b9\u51fb\u4e86\u5176\u4ed6\u6309\u94ae:", e)
                }
            },
            timeFormat: function(e) {
                var t, o;
                return e *= 1e3, Math.floor(e / 1e3 / 60 / 60 / 24), Math.floor(e / 1e3 / 60 / 60 % 24), t = Math.floor(e / 1e3 / 60 % 60), o = Math.floor(e / 1e3 % 60), this.gw_now_addzero(t) + "/" + this.gw_now_addzero(o)
            },
            gw_now_addzero: function(e) {
                return e < 10 ? "0" + e : e
            },
            onBtnShowEffect: function(e) {
                var t = this.node.angle,
                    o = t + 5,
                    n = t - 5;
                cc.tween(e).repeatForever(cc.tween().to(.05, {
                    angle: o
                }).to(.1, {
                    angle: n
                }).to(.1, {
                    angle: o
                }).to(.1, {
                    angle: n
                }).to(.05, {
                    angle: t
                }).delay(1).start()).start()
            },
            update: function(e) {
                cc.global.onLineAwardTime > 0 ? (this.label.getComponent(cc.Label).string = this.timeFormat(cc.global.onLineAwardTime), this.label.active = !0, this.lingqu.active = !1) : 0 == cc.global.onLineAwardTime ? (this.label.active = !1, this.lingqu.active = !0) : cc.global.onLineAwardTime < 0 && (this.node.active = !1)
            }
        }), cc._RF.pop()
    }, {}],
    onLineGiftUpdate: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f9ab7Xwdm9OO4HfsSZT1yZ9", "onLineGiftUpdate"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.global.onLineAwardTime = 180, cc.game.addPersistRootNode(this.node)
            },
            start: function() {},
            update: function(e) {
                cc.global.onLineAwardTime > 0 && (cc.global.onLineAwardTime -= e, cc.global.onLineAwardTime < 0 && (cc.global.onLineAwardTime = 0))
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-BoxItem": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8def6a2ojxDX412iLibqZjW", "oppo-BoxItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.button = this.node.getComponent(cc.Button), this.node.isOpen = !1, this.img = this.node.getComponent(cc.Sprite), this.award = this.node.getChildByName("num").getComponent(cc.Label), this.boxImg = this.node.getChildByName("New Node").getChildByName("box"), this.boxImg.active = !0;
                var e = this.node.getChildByName("halo");
                e.scale = .8, cc.tween(e).repeatForever(cc.tween().by(.1, {
                    angle: 15
                })).start();
                var t = function(e) {
                        var t = cc.scaleTo(e.time, e.scale_x, e.scale_y),
                            o = cc.fadeIn(e.time);
                        return cc.spawn(t, o)
                    },
                    o = t({
                        time: .18,
                        scale_x: .63,
                        scale_y: 1.3,
                        scale_z: 1
                    }),
                    n = t({
                        time: .36,
                        scale_x: 1.1,
                        scale_y: .7,
                        scale_z: 1
                    }),
                    i = t({
                        time: .07 * 3,
                        scale_x: .8,
                        scale_y: 1.1,
                        scale_z: 1
                    }),
                    a = t({
                        time: .07 * 3,
                        scale_x: 1.1,
                        scale_: .95,
                        scale_z: 1
                    }),
                    c = t({
                        time: .07 * 3,
                        scale_x: 1,
                        scale_y: 1,
                        scale_z: 1
                    }),
                    s = cc.tween().sequence(o, n, i, a, c);
                cc.tween(this.boxImg).repeatForever(s).start(), this.flag = this.node.getChildByName("New Node").getChildByName("flag"), this.flag.active = !1
            },
            doOpen: function(e) {
                var t = this;
                console.log("doOpen=", e), this.button.enabled = !1, this.node.isOpen = !0, cc.playerData.coin += e, cc.playerConfig.savePlayerData(), cc.loader.loadRes("Platform/Textures/oppo/oppo-mutual-gold", cc.SpriteFrame, function(e, o) {
                    cc.Tween.stopAllByTarget(t.boxImg), t.boxImg.parent.position = cc.v2(0, 20), t.boxImg.getComponent(cc.Sprite).spriteFrame = o, t.boxImg.scale = 1
                }), cc.loader.loadRes("Platform/Textures/oppo/oppo-mutual-item-2", cc.SpriteFrame, function(o, n) {
                    t.flag.active = !1, t.img.spriteFrame = n, t.award.string = e
                })
            },
            showVideoFlag: function() {
                this.node.isOpen || (this.flag.active = !0)
            },
            registerTouchEvent: function(e) {
                console.log("registerTouchEvent---"), this.touch_handle = e
            },
            buttonTouchEventCallBack: function(e) {
                console.log("\u70b9\u51fb\u4e86\u7bb1\u5b50", this.node.isOpen, this.touch_handle), this.node.isOpen || this.touch_handle && this.touch_handle(this)
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-NativeBanner": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4b37bsDAMBOk7YawZ9lfsL7", "oppo-NativeBanner"), cc.Class({
            extends: cc.Component,
            properties: {
                NativeImg: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "\u5e95\u56fe"
                },
                CloseButton: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "\u5173\u95ed\u6309\u94ae"
                }
            },
            onLoad: function() {
                ServerConfig.closeScale && (this.CloseButton.width = 38 * ServerConfig.closeScale, this.CloseButton.height = 38 * ServerConfig.closeScale)
            },
            initialize: function(e, t, o) {
                var n = this;
                this.touch_handle = t, this.close_handle = o;
                var i = StringMgr.getExtensionName(e);
                "png" !== i && "jpg" !== i && (i = "png"), cc.loader.load({
                    url: e,
                    type: i
                }, function(e, t) {
                    e ? n.node.removeFromParent(!0) : n.NativeImg.spriteFrame = new cc.SpriteFrame(t)
                })
            },
            executeClose: function() {
                this.close_handle && this.close_handle(), this.node.removeFromParent(!0)
            },
            executeTouch: function() {
                this.touch_handle && this.touch_handle(), this.node.removeFromParent(!0)
            },
            buttonTouchEventCallBack: function(e) {
                switch (e.target.name) {
                    case "oppo-NativeBanner":
                        this.executeTouch();
                        break;
                    case "closeButton":
                        this.executeClose()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-NativeInterstitial": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c9363PUOmRA64+gC++L45Xk", "oppo-NativeInterstitial"), cc.Class({
            extends: cc.Component,
            properties: {
                NativeImg: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "\u539f\u751f\u56fe"
                },
                CloseButton: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5173\u95ed\u6309\u94ae"
                }
            },
            onLoad: function() {
                ServerConfig.closeScale && (this.CloseButton.width = 38 * ServerConfig.closeScale, this.CloseButton.height = 38 * ServerConfig.closeScale)
            },
            initialize: function(e, t, o) {
                var n = this;
                this.touch_handle = t, this.close_handle = o;
                var i = StringMgr.getExtensionName(e);
                "png" !== i && "jpg" !== i && (i = "png"), cc.loader.load({
                    url: e,
                    type: i
                }, function(e, t) {
                    e ? n.node.removeFromParent(!0) : n.NativeImg.spriteFrame = new cc.SpriteFrame(t)
                })
            },
            executeClose: function() {
                this.close_handle && this.close_handle()
            },
            executeTouch: function() {
                this.touch_handle && this.touch_handle()
            },
            buttonTouchEventCallBack: function(e) {
                switch (e.target.name) {
                    case "closeButton":
                        this.executeClose();
                        break;
                    case "nativeButton":
                    case "window":
                        this.executeTouch()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-PopupWindow": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2e5c4UBUvtE+ro4TlF8nFBv", "oppo-PopupWindow"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                console.log("onLoad_oppo-PopupWindow");
                var e = this.node.getChildByName("native").getChildByName("closeButton");
                window.GameConfig.closeScale && (e.width = 39 * window.GameConfig.closeScale, e.width = 40 * window.GameConfig.closeScale), this.nImg = this.node.getChildByName("native").getChildByName("img").getComponent(cc.Sprite), this.nImg.spriteFrame = null, this.awardList = [50, 75, 100, 150, 200, 250, 300, 500, 1e3], this.openCount = 0;
                var t = this.node.getChildByName("body"),
                    o = t.getChildByName("window").getChildByName("content").children;
                this.boxList = [], console.log("content.children=", o.length);
                for (var n = 0; n < o.length; n++) {
                    var i = o[n].getComponent("oppo-BoxItem");
                    console.log("oppo-BoxItem=", i), i.registerTouchEvent(this.openBoxHandle.bind(this)), this.boxList.push(o[n])
                }
                this.lookButton = t.getChildByName("below").getChildByName("button").getChildByName("lookButton"), this.openButton = t.getChildByName("below").getChildByName("button").getChildByName("openButton"), this.waiveButton = t.getChildByName("below").getChildByName("waiveButton"), this.openButton.active = !1, this.waiveButton.active = !1
            },
            initialize: function(e, t, o, n) {
                var i = this;
                this.waive_handle = t, this.touch_handle = o, this.close_handle = n;
                var a = this.getExtensionName(e);
                "png" !== a && "jpg" !== a && (a = "png"), cc.loader.load({
                    url: e,
                    type: a
                }, function(e, t) {
                    e ? i.node.getChildByName("native").removeFromParent(!0) : i.nImg.spriteFrame = new cc.SpriteFrame(t)
                })
            },
            openBoxHandle: function(e) {
                var t = this;
                console.log("openBoxHandle---");
                var o = function() {
                    if (e.doOpen(t.awardList[t.openCount]), t.openCount++, t.openCount >= 3 && !t.openButton.active) {
                        t.openButton.active = !0, t.waiveButton.active = !0;
                        for (var o = 0; o < t.boxList.length; o++) {
                            t.boxList[o].getComponent("oppo-BoxItem").showVideoFlag()
                        }
                    }
                    t.openCount >= 9 && (t.lookButton.active = !1, t.scheduleOnce(function() {
                        t.node.removeFromParent(!0)
                    }, .5))
                };
                this.openCount >= 3 ? adUtils.executeShowAwardVideo(o) : o()
            },
            executeOpen: function() {
                var e = this;
                console.log("executeOpen---");
                adUtils.executeShowAwardVideo(function() {
                    for (var t = [], o = 0; o < e.boxList.length; o++) {
                        var n = e.boxList[o];
                        n.isOpen || t.push(n)
                    }
                    if (!(t.length <= 0)) {
                        for (var i = t.slice(0, 3), a = 0; a < i.length; a++) i[a].getComponent("oppo-BoxItem").doOpen(e.awardList[e.openCount]), e.openCount++;
                        e.openCount >= 9 && (e.lookButton.active = !1, e.scheduleOnce(function() {
                            e.node.removeFromParent(!0)
                        }, .5))
                    }
                })
            },
            buttonTouchEventCallBack: function(e) {
                switch (e.target.name) {
                    case "closeButton":
                        console.log("closeButton"), this.lookButton.active = !1, this.waiveButton.active = !0, this.close_handle && this.close_handle(this.node.getChildByName("native"));
                        break;
                    case "lookButton":
                    case "native":
                        console.log("lookButton"), this.lookButton.active = !1, this.waiveButton.active = !0, this.touch_handle && this.touch_handle(this.node.getChildByName("native"));
                        break;
                    case "openButton":
                        this.executeOpen();
                        break;
                    case "waiveButton":
                        this.waive_handle && this.waive_handle(this.node)
                }
            },
            getExtensionName: function(e) {
                var t = e.lastIndexOf(".");
                return e.substr(t + 1)
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-SpecialBanner": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "16cb4G3mIVGvZ/g30ULyEp2", "oppo-SpecialBanner"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.customButton = this.node.getChildByName("customButton");
                var e = this.node.getChildByName("content");
                this.closeButton = e.getChildByName("closeButton"), window.GameConfig.closeScale && (this.closeButton.width = 39 * window.GameConfig.closeScale, this.closeButton.height = 40 * window.GameConfig.closeScale), this.NativeImg = e.getChildByName("img").getComponent(cc.Sprite), this.NativeImg.spriteFrame = null
            },
            initialize: function(e, t, o, n, i) {
                var a = this;
                console.log("-initialize-"), console.log(t), console.log(o), this.tHandle = n, this.cHandle = i;
                var c = this.getExtensionName(e);
                if ("png" !== c && "jpg" !== c && (c = "png"), cc.loader.load({
                        url: e,
                        type: c
                    }, function(e, t) {
                        e ? a.node.removeFromParent(!0) : a.NativeImg.spriteFrame = new cc.SpriteFrame(t)
                    }), this.customDetail = t, t.isCustom) {
                    console.log("555555");
                    var s = this.customButton.getComponent(cc.Sprite);
                    cc.loader.loadRes("Platform/Textures/oppo/".concat(t.customName), cc.SpriteFrame, function(e, o) {
                        s.spriteFrame = o;
                        var n = a.customButton.getComponent(cc.Widget);
                        n.bottom = t.bottom, n.updateAlignment(), "oppo-mutual-btn-look" == t.customName && a.customButton.addComponent("ScaleChangeScript")
                    })
                } else this.customButton.active = !1;
                var l = this.node.getChildByName("content").getComponent(cc.Widget);
                this.node.getChildByName("content").height = o.height, l.right = 0, l.bottom = 0, l.left = 0, l.updateAlignment()
            },
            executeTouch: function() {
                this.tHandle && this.tHandle()
            },
            buttonTouchEventCallBack: function(e) {
                switch (e.target.name) {
                    case "img":
                        this.executeTouch();
                        break;
                    case "closeButton":
                        this.cHandle && this.cHandle();
                        break;
                    case "customButton":
                        this.customDetail.customHandle && this.customDetail.customHandle()
                }
            },
            getExtensionName: function(e) {
                var t = e.lastIndexOf(".");
                return e.substr(t + 1)
            }
        }), cc._RF.pop()
    }, {}],
    oppo: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "101c8An9BpJIZNDZZB0xyEh", "oppo");
        var c = function() {
            function e() {
                n(this, e), this.packageName = "com.cx.zktfn.nearme.gamecenter", this.AppID = "30772773", this.NativeIndex = 0, this.BannerCode = "491631", this.InterstitialCode = "", this.VideoCode = "491633", this.NativeCode = "", this.NativeListCode = ["491635", "491636", "491637"], this.gameBannerCode = "489999", this.BannerInstance = null, this.NativeInstance = null, this.VideoInstance = null, this.VideoSuccessCallBack = null, this.VideoFailureCallBack = null, this.GameBoxCode = "492520", this.GamePushBox = null, this.InitializeTime = null, this.videoTime = null, this.gameBanner = null, window.OPPOTools = this
            }
            return a(e, [{
                key: "doInitialize",
                value: function() {
                    var e = this,
                        t = function() {
                            cc.loader.loadRes("Platform/Native/Prefab/NativeBanner", function(t, o) {
                                t || (e.BannerInstance = cc.instantiate(o), e.BannerInstance.zIndex = 998, cc.game.addPersistRootNode(e.BannerInstance)), console.log("NativeBanner\u521b\u5efa\u6210\u529f")
                            }), cc.loader.loadRes("Platform/Native/Prefab/NativeInterstitial", function(t, o) {
                                t || (e.NativeInterstitial = cc.instantiate(o), e.NativeInterstitial.zIndex = 999, cc.game.addPersistRootNode(e.NativeInterstitial), cc.PlatformTools.NativeInterstitial = e.NativeInterstitial), console.log("NativeInterstitial\u521b\u5efa\u6210\u529f")
                            }), e.BannerAd = window.qg.createBannerAd({
                                posId: e.BannerCode
                            }), e.BannerAd.onError(function(e) {
                                console.log("oppo banner onError= ", e)
                            }), e.gameBanner = window.qg.createGameBannerAd({
                                adUnitId: e.gameBannerCode
                            }), e.gameBanner.onShow(function() {
                                console.log("\u4e92\u63a8\u76d2\u5b50\u6a2a\u5e45\u5e7f\u544a\u663e\u793a")
                            }), e.gameBanner.onLoad(function() {
                                console.log("\u4e92\u63a8\u76d2\u5b50\u6a2a\u5e45\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
                            }), e.gameBanner.onError(function(e) {
                                console.log("\u4e92\u63a8\u76d2\u5b50\u6a2a\u5e45\u5e7f\u544a\u9519\u8bef", e), this.systemBanner()
                            })
                        };
                    console.log("\u521d\u59cb\u5316OPPO"), window.qg.initAdService({
                        appId: this.AppID,
                        isDebug: !0,
                        success: function(e) {
                            console.log("initAdService success"), t && t()
                        },
                        fail: function(e) {
                            console.log("initAdService fail:", e.code, e.msg)
                        },
                        complete: function(e) {
                            console.log("initAdService complete")
                        }
                    }), this.InitializeTime = (new Date).getTime()
                }
            }, {
                key: "executeShowInterstitial",
                value: function(e) {
                    console.log("OPPO\u539f\u751f\u63d2\u5c4f", e), "chaPing" == e && this.onGetNativeAD(this.NativeInterstitial)
                }
            }, {
                key: "executeHideBanner",
                value: function() {
                    this.NativeInterstitial && (this.NativeInterstitial.active = !1), this.BannerInstance && (this.BannerInstance.active = !1), this.gameBanner && this.gameBanner.hide(), this.BannerAd && this.BannerAd.hide();
                    var e = cc.director.getScene().getChildByName("oppo-SpecialBanner");
                    e && e.removeFromParent(!0);
                    var t = cc.director.getScene().getChildByName("oppo-PopupWindow");
                    t && t.removeFromParent(!0)
                }
            }, {
                key: "executeShowBanner",
                value: function(e) {
                    this.onGameBannerAd()
                }
            }, {
                key: "executeShowAwardVideo",
                value: function(e, t) {
                    var o = this,
                        n = this,
                        i = (new Date).getTime();
                    this.videoTime && i - this.videoTime < 2e3 ? console.log("\u89c6\u9891\u70b9\u51fb\u592a\u5feb--", (i - this.videoTime) / 1e3) : (this.videoTime = i, this.VideoInstance && (this.VideoInstance.destroy(), this.VideoInstance = null), this.VideoInstance = window.qg.createRewardedVideoAd({
                        posId: this.VideoCode
                    }), this.VideoInstance.onLoad(function() {
                        o.VideoInstance.show()
                    }), this.VideoInstance.onError(function(e) {
                        console.log("\u89c6\u9891\u5e7f\u544a\u5931\u8d25=", e)
                    }), this.VideoInstance.onClose(function(o) {
                        1 == o.isEnded ? (e && e(), e = null) : window.GameConfig.showModal ? window.qg.showModal({
                            title: "\u672a\u89c2\u770b\u5b8c\u89c6\u9891",
                            content: "\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6!",
                            success: function(o) {
                                o.confirm ? (n.videoTime = 0, n.executeShowAwardVideo(e, t)) : o.cancel ? (console.log("\u53d6\u6d88"), t && t(), t = null, window.qg.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })) : (t && t(), t = null, window.qg.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                }))
                            },
                            fail: function(e) {
                                console.log("showModal\u8c03\u7528\u5931\u8d25"), t && t(), t = null, window.qg.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })
                            }
                        }) : (t && t(), t = null)
                    }), this.VideoInstance.load())
                }
            }, {
                key: "videoDisplaySuccessCallBack",
                value: function() {}
            }, {
                key: "videoDisplayFailureCallBack",
                value: function() {}
            }, {
                key: "executeExtractMoreGame",
                value: function(e) {}
            }, {
                key: "executeShowPushBox",
                value: function() {
                    if (this.executeHideBanner(), !(window.qg.getSystemInfoSync().platformVersionCode < 1076)) {
                        var e = window.qg.createGamePortalAd({
                            adUnitId: this.GameBoxCode
                        });
                        e.onLoad(function() {
                            e.show().then(function() {}).catch(function(e) {})
                        }.bind(this)), e.onClose(function() {
                            e.destroy().then(function() {}).catch(function(e) {})
                        }.bind(this)), e.load().then(function() {}).catch(function(e) {
                            window.qg.showToast({
                                title: "\u6682\u65e0\u66f4\u65b0\u6e38\u620f,\u8bf7\u7a0d\u540e\u518d\u8bd5!",
                                icon: "none",
                                duration: 1e3
                            }), console.log("load fail with:" + e.errCode + "," + e.errMsg)
                        })
                    }
                }
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    window.qg.installShortcut({
                        success: function() {
                            e && (e.active = !1)
                        },
                        fail: function(e) {},
                        complete: function() {}
                    })
                }
            }, {
                key: "executeShowBanner2",
                value: function() {
                    console.log("\u8c03\u7528\u5173\u95ed\u63d2\u5c4f\u540e\u7684banner")
                }
            }, {
                key: "onGetNativeAD",
                value: function(e) {
                    var t = this;
                    this.NativeIndex++, this.NativeIndex >= this.NativeListCode.length && (this.NativeIndex = 0);
                    var o = this.NativeListCode[this.NativeIndex];
                    console.log("\u5f00\u59cb\u83b7\u53d6\u539f\u751f\u5e7f\u544a:", o);
                    var n = window.qg.createNativeAd({
                        posId: o
                    });
                    n.load().then(function(o) {
                        console.log("\u539f\u751f:", o);
                        var i = o.adList[0].adId;
                        console.log("\u539f\u751f\u5e7f\u544a\u66dd\u5149\u4e0a\u62a5:", i), n.reportAdShow({
                            adId: i
                        });
                        e.getComponent("NativeBanner").executeRefresh(o, function() {
                            console.log("\u539f\u751f\u5e7f\u544a\u70b9\u51fb\u4e0a\u62a5:", i), n.reportAdClick({
                                adId: i
                            })
                        }, function() {
                            "NativeInterstitial" == e.name && 100 * Math.random() < window.GameConfig.quitShow && t.onGetNativeAD(t.BannerInstance)
                        })
                    }).catch(function(n) {
                        console.log("native\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", o, n), 100 * Math.random() < window.GameConfig.quitShow && ("NativeInterstitial" == e.name ? t.onGetNativeAD(t.BannerInstance) : window.GameConfig.isShowGameBanner && t.onGameBannerAd())
                    })
                }
            }, {
                key: "systemBanner",
                value: function() {
                    console.log("\u7cfb\u7edfbanner"), this.executeHideBanner(), this.BannerAd.show()
                }
            }, {
                key: "systemInterstitial",
                value: function() {
                    console.log("\u6682\u65e0\u7cfb\u7edf\u63d2\u5c4f\u5e7f\u544a")
                }
            }, {
                key: "onGameBannerAd",
                value: function() {
                    if (this.executeHideBanner(), console.log("\u5f00\u59cb\u8c03\u7528\u4e92\u63a8\u76d2\u5b50\u6a2a\u5e45\u5e7f\u544a"), this.gameBanner) return window.qg.createGameBannerAd ? void this.gameBanner.show().then(function() {
                        console.log("show success")
                    }).catch(function(e) {
                        console.log("show fail with:" + e.errCode + "," + e.errMsg)
                    }) : (console.log("\u5f53\u524d\u8bbe\u5907\u4e0d\u652f\u6301\u6e38\u620f\u4e92\u63a8banner"), void this.systemBanner());
                    this.systemBanner()
                }
            }, {
                key: "showSpecialBanner",
                value: function(e, t, o) {
                    this.executeHideBanner(), console.log("showSpecialBanner"), this.NativeIndex++, this.NativeIndex >= this.NativeListCode.length && (this.NativeIndex = 0);
                    var n = this.NativeListCode[this.NativeIndex],
                        i = qg.createNativeAd({
                            adUnitId: n
                        });
                    i.load().then(function(n) {
                        if (n.adList) {
                            o && o();
                            var a = n.adList.pop(),
                                c = a.adId,
                                s = a.imgUrlList.pop();
                            i.reportAdShow({
                                adId: c
                            }), cc.loader.loadRes("Platform/Prefabs/oppo/oppo-SpecialBanner", cc.Prefab, function(o, n) {
                                var a = cc.instantiate(n);
                                cc.director.getScene().addChild(a), a.zIndex = 998, a.getComponent("oppo-SpecialBanner").initialize(s, e, t, function() {
                                    a && a.removeFromParent(!0), e.recoverHandle && e.recoverHandle(), i && (i.reportAdClick({
                                        adId: c
                                    }), i.destroy())
                                }, function() {
                                    a && a.removeFromParent(!0), e.recoverHandle && e.recoverHandle(), i && i.destroy()
                                })
                            })
                        }
                    }).catch(function(e) {
                        console.log("load error = ", e), i && i.destroy()
                    })
                }
            }, {
                key: "showBoxWindow",
                value: function(e) {
                    this.executeHideBanner(), console.log("\u663e\u793a\u539f\u751f\u5b9d\u7bb1\u5f39\u7a97"), this.NativeIndex++, this.NativeIndex >= this.NativeListCode.length && (this.NativeIndex = 0);
                    var t = this.NativeListCode[this.NativeIndex],
                        o = qg.createNativeAd({
                            adUnitId: t
                        });
                    o.load().then(function(t) {
                        if (t.adList) {
                            var n = t.adList.pop(),
                                i = n.adId,
                                a = n.imgUrlList.pop();
                            o.reportAdShow({
                                adId: i
                            }), cc.loader.loadRes("Platform/Prefabs/oppo/oppo-PopupWindow", function(t, n) {
                                if (t) console.warn("\u521b\u5efa\u63d2\u5c4f\u9884\u5236\u4f53\u65f6\u53d1\u751f\u9519\u8bef:", t);
                                else if (n instanceof cc.Prefab) {
                                    var c = cc.instantiate(n);
                                    cc.director.getScene().addChild(c), c.zIndex = 999, c.getComponent("oppo-PopupWindow").initialize(a, function() {
                                        c.removeFromParent(!0), 100 * Math.random() < window.GameConfig.randomWaive && o && o.reportAdClick({
                                            adId: i
                                        }), o && o.destroy(), e && e()
                                    }, function(e) {
                                        e.removeFromParent(!0), o.reportAdClick({
                                            adId: i
                                        }), o && o.destroy()
                                    }, function(e) {
                                        e.removeFromParent(!0), o && o.destroy()
                                    })
                                } else console.warn("\u4f60\u8f7d\u5165\u7684\u4e0d\u662f\u63d2\u5c4f\u9884\u5236\u8d44\u6e90!")
                            })
                        }
                    }).catch(function(t) {
                        console.log("load error = ", t), e && e(), o && o.destroy()
                    })
                }
            }]), e
        }();
        t.exports = new c, cc._RF.pop()
    }, {}],
    physicsEngine: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3dc0a7TKmFOvJoeouiyAMCp", "physicsEngine"), cc.Class({
            extends: cc.Component,
            properties: {
                isEnable: {
                    default: !1,
                    displayName: "\u662f\u5426\u6fc0\u6d3b"
                },
                gravity: {
                    default: cc.v2(0, 0),
                    displayName: "\u91cd\u529b"
                },
                isDebugDrawFlags: {
                    default: !1,
                    displayName: "\u662f\u5426\u5f00\u542f\u7ed8\u5236"
                }
            },
            onLoad: function() {
                var e = cc.director.getPhysicsManager();
                1 == this.isEnable && (e.enabled = !0), this.gravity && (e.gravity = this.gravity), this.isDebugDrawFlags && (cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit, cc.PhysicsManager.DrawBits.e_pairBit, cc.PhysicsManager.DrawBits.e_centerOfMassBit, cc.PhysicsManager.DrawBits.e_jointBit, cc.PhysicsManager.DrawBits.e_shapeBit)
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    progressEvent: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b75da7o4LNPyb4KzB9mqBkt", "progressEvent"), cc.Class({
            extends: cc.Component,
            properties: {
                eventNode_over: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7ed3\u675f\u4e8b\u4ef6\u8282\u70b9"
                },
                targetProgress: {
                    default: 2,
                    displayName: "\u603b\u8fdb\u5ea6"
                }
            },
            onLoad: function() {
                this.nowProgress = 0, this.node.switchEvent = this.switchEvent.bind(this)
            },
            start: function() {},
            switchEvent: function() {
                this.nowProgress++, this.nowProgress >= this.targetProgress && this.eventNode_over && this.eventNode_over.switchEvent(), console.log("\u5f53\u524d\u8fdb\u5ea6:", this.nowProgress)
            }
        }), cc._RF.pop()
    }, {}],
    qq: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "42e0dIFIiJB9IgV2J6hUDs/", "qq");
        var c = function() {
            function e() {
                n(this, e), this.SystemInformation = null, this.AppId = "1112094957", this.BannerCode = "88d96ff3f6fad9a71c57b655bde3cfaa", this.VideoCode = "41781e3c52c75a3273cbd20af312cd42", this.InterstitialCode = "64bdb7fdeb13657d2d766e111f717361", this.GameBoxCode = "48aac886de26049fef817437892facb1", this.BlockCode = "a05aa1d2b65283c58a97c0371f19d0b3", this.shareText = "", this.shareImgUrl = "shareImg.jpg"
            }
            return a(e, [{
                key: "doInitialize",
                value: function() {
                    console.log("\u521d\u59cb\u5316qq"), window.qqUtil.qq_bannerID = this.BannerCode, window.qqUtil.qq_videoID = this.VideoCode, window.qqUtil.qq_chapingID = this.InterstitialCode, window.qqUtil.qq_heziID = this.GameBoxCode, window.qqUtil.qq_jimuID = this.BlockCode, qqUtil.initQQShow()
                }
            }, {
                key: "executeShowBanner",
                value: function() {
                    window.qqUtil.showBanner()
                }
            }, {
                key: "executeHideBanner",
                value: function() {
                    window.qqUtil.hideBanner()
                }
            }, {
                key: "executeShowInterstitial",
                value: function() {
                    window.qqUtil.showChaPing()
                }
            }, {
                key: "executeShowAwardVideo",
                value: function(e, t) {
                    1 == window.GameConfig.isVideoToShare ? window.qqShareUtil.shareTo(e, t) : window.qqUtil.getVideoAd(e, t)
                }
            }, {
                key: "executeShowPushBox",
                value: function() {
                    window.qqUtil.gengduoyouxi()
                }
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    e && (e.active = !1), window.qqUtil.sendDesk()
                }
            }, {
                key: "executeBlockAdShow",
                value: function(e) {
                    e && 0 != e ? window.qqUtil.showGrid() : window.qqUtil.hideGrid()
                }
            }, {
                key: "executeRecorder",
                value: function() {}
            }, {
                key: "stopRecorder",
                value: function() {}
            }, {
                key: "executeShareRecorder",
                value: function(e, t) {
                    window.qqShareUtil.shareTo(e, t), console.log("\u5206\u4eab---")
                }
            }, {
                key: "onShowCallBack",
                value: function() {
                    console.log("\u8fd4\u56de\u4e86\u524d\u53f0"), this.isOpenShare && (this.shareSuccessHandle && this.shareSuccessHandle(), this.shareSuccessHandle = null)
                }
            }, {
                key: "onHideCallBack",
                value: function() {
                    console.log("\u5207\u5165\u4e86\u540e\u53f0"), this.isOpenShare && (this.triggerTime = (new Date).getTime())
                }
            }]), e
        }();
        t.exports = c, cc._RF.pop()
    }, {}],
    skeleton_overSwitch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "154201/8oFForvEOVX26bUU", "skeleton_overSwitch");
        var n = cc.Class({
            name: "dongHua",
            properties: {
                overAimName: {
                    default: "",
                    displayName: "\u52a8\u753b\u7ed3\u675f\u540d\u79f0"
                },
                playAimName: {
                    default: "",
                    displayName: "\u52a8\u753b\u64ad\u653e\u540d\u79f0"
                },
                playTimes: {
                    default: 0,
                    displayName: "\u64ad\u653e\u6b21\u6570"
                }
            }
        });
        cc.Class({
            extends: cc.Component,
            properties: {
                eventList: {
                    default: [],
                    type: n,
                    displayName: "\u4e8b\u4ef6\u76d1\u542c\u5217\u8868"
                }
            },
            onLoad: function() {
                this.skeleton = this.node.getComponent(sp.Skeleton), this.skeleton.setCompleteListener(this.onAimOver.bind(this))
            },
            start: function() {},
            onAimOver: function(e) {
                var t = e.animation.name;
                if (0 == e.loop) {
                    var o = this.onDetectionSwitch(t);
                    if (o) {
                        var n = !1;
                        n = 0 == o.playTimes, this.skeleton.setAnimation(0, o.playAimName, n), console.log("\u64ad\u653e\u52a8\u753b=", o.playAimName)
                    }
                }
            },
            onDetectionSwitch: function(e) {
                for (var t = 0; t < this.eventList.length; t++)
                    if (this.eventList[t].overAimName == e) return this.eventList[t];
                return null
            }
        }), cc._RF.pop()
    }, {}],
    tallyEvent: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e7cd9Kq+JBG2azsMtrVEkQ6", "tallyEvent"), cc.Class({
            extends: cc.Component,
            properties: {
                startNum: {
                    default: 0,
                    displayName: "\u8d77\u59cb\u6570\u5b57"
                },
                overNum: {
                    default: 10,
                    displayName: "\u7ed3\u675f\u6570\u5b57"
                },
                actionTime: {
                    default: 1,
                    displayName: "\u6d3b\u52a8\u65f6\u95f4(\u79d2)"
                },
                showLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u663e\u793a\u6587\u672c"
                },
                eventNode: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u4e8b\u4ef6\u8282\u70b9"
                },
                startDelay: {
                    default: 0,
                    displayName: "\u8d77\u59cb\u5ef6\u8fdf"
                },
                overDelay: {
                    default: 0,
                    displayName: "\u7ed3\u675f\u5ef6\u8fdf"
                }
            },
            onLoad: function() {
                this.node.switchEvent = this.switchEvent.bind(this), this.node.tallyNum = this.startNum
            },
            start: function() {},
            switchEvent: function() {
                var e = this;
                console.log("\u89e6\u53d1\u8ba1\u6570\u5668\u673a\u5173\u4e8b\u4ef6"), this.node.stopAllActions(), cc.tween(this.node).delay(this.startDelay).to(this.actionTime, {
                    tallyNum: parseInt(this.overNum)
                }).delay(this.overDelay).call(function() {
                    e.eventNode.switchEvent && e.eventNode.switchEvent()
                }).start()
            },
            update: function(e) {
                this.showLabel.string = parseInt(this.node.tallyNum)
            }
        }), cc._RF.pop()
    }, {}],
    toutiao: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "d7c49tx+NhHg6tSp9U0NerW", "toutiao");
        var c = function() {
            function e() {
                n(this, e), this.SystemInformation = null, this.AppId = "ttc740b1fd58795cdd02", this.BannerCode = "153e4fj682j85h5obg", this.VideoCode = "421w6jlv8lrc8rrcai", this.InterstitialCode = "a5k6670k0hb35h5g5l", this.BannerInstance = null, this.RecorderInstance = null, this.OverVideo = !1, this.RecorderPath = "", this.StartRecorderTime = null, this.EndRecorderTime = null, this.VideoInstance = null, this.VideoSuccessCallBack = null, this.VideoFailureCallBack = null, this.InterstitialInstance = null, this.InterstitialTimer = null, window.shareSucceedNum = 0
            }
            return a(e, [{
                key: "doInitialize",
                value: function() {
                    var e = this;
                    console.log("\u5b9e\u4f8b\u5316\u5934\u6761\u7ec4\u4ef6");
                    var t = this;
                    t.SystemInformation = window.tt.getSystemInfoSync(), t.RecorderInstance = window.tt.getGameRecorderManager(), t.RecorderInstance.onStop(function(t) {
                        console.log("\u5f55\u5c4f\u7ed3\u675f\uff1a" + t.videoPath), e.RecorderPath = t.videoPath, e.OverVideo = !0, e.EndRecorderTime, e.StartRecorderTime
                    });
                    var o = tt.getSystemInfoSync(),
                        n = o.windowWidth,
                        i = o.windowHeight;
                    t.BannerInstance = window.tt.createBannerAd({
                        adUnitId: t.BannerCode,
                        style: {
                            left: (n - 200) / 2,
                            top: i - 200,
                            width: 200,
                            adIntervals: 30
                        }
                    }), t.BannerInstance.onResize(function(e) {
                        0 != e.width && 0 != e.height && (console.log("size=", e), t.BannerInstance.style.top = i - e.height, t.BannerInstance.style.left = (n - e.width) / 2)
                    }), t.BannerInstance.onError(function(e) {
                        console.log("toutiao banner onError= ", e)
                    }), window.tt.createRewardedVideoAd && (t.VideoInstance = window.tt.createRewardedVideoAd({
                        adUnitId: t.VideoCode
                    }), t.VideoInstance.load(), t.VideoInstance.onClose(function(e) {
                        1 == e.isEnded ? t.videoDisplaySuccessCallBack() : window.GameConfig.showModal ? window.tt.showModal({
                            title: "\u672a\u89c2\u770b\u5b8c\u89c6\u9891",
                            content: "\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6",
                            success: function(e) {
                                var o = this;
                                e.confirm ? t.VideoInstance.show().then(function() {
                                    return console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a")
                                }).catch(function() {
                                    t.VideoInstance.load().then(function() {
                                        return t.VideoInstance.show()
                                    }).catch(function(e) {
                                        console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25,\u5e7f\u544aid=", o.VideoCode), window.tt.showToast({
                                            title: "\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01",
                                            icon: "none",
                                            duration: 1e3,
                                            success: function(e) {},
                                            fail: function(e) {}
                                        })
                                    })
                                }) : e.cancel ? (console.log("\u53d6\u6d88"), t.videoDisplayFailureCallBack(), window.tt.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {},
                                    fail: function(e) {}
                                })) : (t.videoDisplayFailureCallBack(), window.tt.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {},
                                    fail: function(e) {}
                                }))
                            },
                            fail: function(e) {
                                console.log("showModal\u8c03\u7528\u5931\u8d25"), t.videoDisplayFailureCallBack(), window.tt.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })
                            }
                        }) : (t.videoDisplayFailureCallBack(), window.tt.showToast({
                            title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                            icon: "none",
                            duration: 1e3,
                            success: function(e) {
                                console.log("".concat(e))
                            },
                            fail: function(e) {
                                console.log("showToast\u8c03\u7528\u5931\u8d25")
                            }
                        }))
                    })), tt.showFavoriteGuide({
                        type: "bar",
                        content: "\u4e00\u952e\u6dfb\u52a0\u5230\u300c\u6211\u7684\u5c0f\u7a0b\u5e8f\u300d",
                        position: "bottom",
                        success: function(e) {
                            console.log("\u5f15\u5bfc\u7ec4\u4ef6\u5c55\u793a\u6210\u529f", e)
                        },
                        fail: function(e) {
                            console.log("\u5f15\u5bfc\u7ec4\u4ef6\u5c55\u793a\u5931\u8d25", e)
                        }
                    })
                }
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    e.active = !1
                }
            }, {
                key: "executeShowBanner",
                value: function() {
                    this.BannerInstance.show()
                }
            }, {
                key: "executeHideBanner",
                value: function() {
                    this.BannerInstance.hide()
                }
            }, {
                key: "executeShowInterstitial",
                value: function() {
                    this.InterstitialTimer && (clearTimeout(this.InterstitialTimer), this.InterstitialTimer = null), this.InterstitialTimer = setTimeout(function() {
                        var e = this;
                        this.InterstitialInstance, this.InterstitialInstance = window.tt.createInterstitialAd({
                            adUnitId: this.InterstitialCode
                        }), this.InterstitialInstance.load().then(function() {
                            e.InterstitialInstance.show().then(function() {
                                console.log("TT \u5c55\u793a\u63d2\u5c4f\u5e7f\u544a\u6210\u529f\uff01")
                            }).catch(function(e) {
                                console.error("TT \u5c55\u793a\u63d2\u5c4f\u5e7f\u544a\u5931\u8d25\uff01err =", e)
                            })
                        }).catch(function(e) {
                            console.error("TT \u52a0\u8f7d\u63d2\u5c4f\u5e7f\u544a\u5931\u8d25,err =", e)
                        }), this.InterstitialInstance.onClose(function() {
                            console.error("TT \u63d2\u5c4f\u5e7f\u544a\u5173\u95ed"), clearTimeout(e.InterstitialTimer), e.InterstitialTimer = null, e.InterstitialInstance = null
                        })
                    }.bind(this), 2800)
                }
            }, {
                key: "executeShowAwardVideo",
                value: function(e, t) {
                    var o = this;
                    this.VideoSuccessCallBack = e, this.VideoFailureCallBack = t, console.log("\u521b\u5efa\u89c6\u9891\u5e7f\u544a"), this.VideoInstance.show().then(function() {
                        return console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a")
                    }).catch(function() {
                        o.VideoInstance.load().then(function() {
                            return o.VideoInstance.show()
                        }).catch(function(e) {
                            console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25,\u5e7f\u544aid=", o.VideoCode), window.tt.showToast({
                                title: "\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01",
                                icon: "none",
                                duration: 1e3,
                                success: function(e) {},
                                fail: function(e) {}
                            })
                        })
                    })
                }
            }, {
                key: "videoDisplaySuccessCallBack",
                value: function() {
                    null != this.VideoSuccessCallBack && (this.VideoSuccessCallBack(), this.VideoSuccessCallBack = null)
                }
            }, {
                key: "videoDisplayFailureCallBack",
                value: function() {
                    null != this.VideoFailureCallBack && (this.VideoFailureCallBack(), this.VideoFailureCallBack = null)
                }
            }, {
                key: "executeExtractPushInformation",
                value: function(e) {
                    window.tt.showMoreGamesModal({
                        appLaunchOptions: [{
                            appId: "",
                            query: "foo=bar&baz=qux",
                            extraData: {}
                        }],
                        success: function(e) {
                            console.log("success", e.errMsg)
                        },
                        fail: function(e) {
                            console.log("fail", e.errMsg)
                        }
                    })
                }
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    e.active = !1
                }
            }, {
                key: "executeRecorder",
                value: function() {
                    var e = this;
                    this.OverVideo = !1, this.RecorderInstance.stop(), window.tt.onShow(function(t) {
                        e.RecorderInstance.resume()
                    }), window.tt.onHide(function() {
                        e.RecorderInstance.pause()
                    }), this.RecorderInstance.onStart(function(e) {});
                    setTimeout(function() {
                        this.RecorderInstance.start({
                            duration: 60
                        }), this.StartRecorderTime = (new Date).getTime()
                    }.bind(this), 300)
                }
            }, {
                key: "stopRecorder",
                value: function() {
                    window.tt.offShow(function() {}), window.tt.offHide(function() {}), this.EndRecorderTime = (new Date).getTime(), this.RecorderInstance.stop()
                }
            }, {
                key: "executeShareRecorder",
                value: function(e, t) {
                    if (this.EndRecorderTime - this.StartRecorderTime <= 3500) window.tt.showToast({
                        title: "\u5f55\u5c4f\u65f6\u95f4\u5c11\u4e8e3\u79d2",
                        icon: "none",
                        duration: 1e3,
                        success: function(e) {
                            console.log("".concat(e))
                        },
                        fail: function(e) {
                            console.log("showToast\u8c03\u7528\u5931\u8d25")
                        }
                    });
                    else {
                        var o = "";
                        if (window.GameConfig.bgm && 0 !== window.GameConfig.bgm.length) {
                            var n = Math.floor(100 * Math.random()) % window.GameConfig.bgm.length;
                            o = window.GameConfig.bgm[n]
                        } else o = "";
                        console.log("\u5f00\u59cb\u5206\u4eab", this.RecorderPath, o), window.tt.shareAppMessage({
                            channel: "video",
                            title: "\u70b9\u51fb\u8fd9\u91cc\uff0c\u5f00\u59cb\u6e38\u620f",
                            extra: {
                                videoPath: this.RecorderPath,
                                videoTopics: ["\u5929\u5929\u6765\u62fc\u56fe", "\u5c0f\u6e38\u620f"],
                                defaultBgm: o
                            },
                            success: function(t) {
                                console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f", t), e && e(), window.shareSucceedNum += 1
                            },
                            fail: function(e) {
                                console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25", e), t && t(), e.errNo && 21105 == parseInt(e.errNo) ? window.tt.showToast({
                                    title: "\u5f55\u5c4f\u65f6\u95f4\u592a\u77ed,\u65e0\u6cd5\u5206\u4eab",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                }) : window.tt.showToast({
                                    title: "\u5f55\u5c4f\u5206\u4eab\u5931\u8d25",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })
                            }
                        })
                    }
                }
            }]), e
        }();
        t.exports = new c, cc._RF.pop()
    }, {}],
    use_reversed_rotateTo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "456faQ0cEBIDYGd6FMiO0n9", "use_reversed_rotateTo"), cc.RotateTo._reverse = !0, cc._RF.pop()
    }, {}],
    "use_v2.1-2.2.1_cc.Toggle_event": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e80e2G35vZIYb8JsK0BpB7B", "use_v2.1-2.2.1_cc.Toggle_event"), cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0), cc._RF.pop()
    }, {}],
    vivo: [function(e, t, o) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function a(e, t, o) {
            return t && i(e.prototype, t), o && i(e, o), e
        }
        cc._RF.push(t, "c5f1ehre+tLeZSIjjNcQ7Tm", "vivo");
        var c = function() {
            function e() {
                n(this, e), this.packageName = "com.ky.zktfn.vivominigame", this.AppID = "", this.NativeIndex = 0, this.BannerCode = "6a58f62c0ad94adda0dbd5c4210976c3", this.InterstitialCode = "2f9441a84e5b4631823481b9733eeb5b", this.VideoCode = "a8b05f728072462e98d032771d58af94", this.NativeCode = "", this.NativeListCode = ["a54dbdd3187b4451bd4b91b61541f85f", "37b231157e3347019db31c27a1160ea3", "3d89b3602ebd470b8d470a5bc080d8d9"], this.BannerInstance = null, this.NativeInstance = null, this.VideoInstance = null, this.VideoSuccessCallBack = null, this.VideoFailureCallBack = null, this.GameBoxCode = "bf1b95ae88c14324ac72a10e64a0f6b6", this.GamePushBox = null, this.videoTime = null, this.lastBannerShowTime = null, window.VIVOTools = this
            }
            return a(e, [{
                key: "doInitialize",
                value: function() {
                    var e = this,
                        t = function() {
                            if (e.lastBannerShowTime = 0, cc.loader.loadRes("Platform/Native/Prefab/NativeBanner", function(t, o) {
                                    t || (e.BannerInstance = cc.instantiate(o), e.BannerInstance.zIndex = 998, cc.game.addPersistRootNode(e.BannerInstance)), console.log("NativeBanner\u521b\u5efa\u6210\u529f")
                                }), cc.loader.loadRes("Platform/Native/Prefab/NativeInterstitial", function(t, o) {
                                    t || (e.NativeInterstitial = cc.instantiate(o), e.NativeInterstitial.zIndex = 999, cc.game.addPersistRootNode(e.NativeInterstitial), cc.PlatformTools.NativeInterstitial = e.NativeInterstitial), console.log("NativeInterstitial\u521b\u5efa\u6210\u529f")
                                }), qg.createBoxPortalAd) {
                                var t = cc.url.raw("resources/Platform/Native/Texture/more_game.png"),
                                    o = qg.createBoxPortalAd({
                                        posId: e.GameBoxCode,
                                        image: t,
                                        marginTop: 500
                                    });
                                o.onError(function(e) {
                                    console.log("\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", e)
                                }), o.onClose(function() {
                                    console.log("close"), o.isDestroyed || o.show()
                                }), o.onLoad(function() {
                                    console.log("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), o.show()
                                }), o.onShow(function(e) {
                                    console.log("onShow=", e)
                                })
                            } else console.log("\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API");
                            e.BannerAd = window.qg.createBannerAd({
                                posId: e.BannerCode
                            }), e.BannerAd.onError(function(e) {
                                console.log(e)
                            }), window.qg.getSystemInfo({
                                success: function(t) {
                                    e.device = t
                                }
                            })
                        };
                    if (console.log("\u521d\u59cb\u5316vivo"), t && t(), window.GameConfig.type || (window.GameConfig.type = 1), window.GameConfig.pushTime || (window.GameConfig.pushTime = 30), 2 == window.GameConfig.type) {
                        cc.tween({}).repeatForever(cc.tween().delay(window.GameConfig.pushTime).call(function() {
                            e.executeHideBanner(), e.onGetNativeAD(e.NativeInterstitial)
                        }).start()).start()
                    }
                }
            }, {
                key: "executeShowInterstitial",
                value: function(e) {
                    1 == window.GameConfig.type && (console.log("vivo\u539f\u751f\u63d2\u5c4f", e), this.executeHideBanner(), "inGame" == e ? 100 * Math.random() < window.GameConfig.inGameAD && this.onGetNativeAD(this.NativeInterstitial) : "endGame" == e ? 0 == window.GameConfig.endGameAD ? 100 * Math.random() < 50 ? this.systemInterstitial() : this.onGetNativeAD(this.NativeInterstitial) : 100 * Math.random() < window.GameConfig.endGameAD && this.onGetNativeAD(this.NativeInterstitial) : 0 == window.GameConfig.otherUIAD ? 100 * Math.random() < 50 ? this.systemBanner() : this.onGetNativeAD(this.BannerInstance) : 100 * Math.random() < window.GameConfig.otherUIAD && this.onGetNativeAD(this.NativeInterstitial))
                }
            }, {
                key: "executeHideBanner",
                value: function() {
                    console.log("\u9690\u85cfbanner"), this.NativeInterstitial && (this.NativeInterstitial.active = !1), this.BannerInstance && (this.BannerInstance.active = !1), this.BannerAd && this.BannerAd.hide()
                }
            }, {
                key: "executeShowBanner",
                value: function(e) {}
            }, {
                key: "executeShowAwardVideo",
                value: function(e, t) {
                    var o = this,
                        n = this,
                        i = (new Date).getTime();
                    this.videoTime && i - this.videoTime < 2e3 ? console.log("\u89c6\u9891\u70b9\u51fb\u592a\u5feb--", (i - this.videoTime) / 1e3) : (this.videoTime = i, this.VideoInstance && (this.VideoInstance.destroy(), this.VideoInstance = null), this.VideoInstance = window.qg.createRewardedVideoAd({
                        posId: this.VideoCode
                    }), this.VideoInstance.onLoad(function() {
                        o.VideoInstance.show()
                    }), this.VideoInstance.onError(function(e) {
                        console.log("\u89c6\u9891\u5e7f\u544a\u5931\u8d25=", e)
                    }), this.VideoInstance.onClose(function(o) {
                        1 == o.isEnded ? (e && e(), e = null) : window.GameConfig.showModal ? window.qg.showModal({
                            title: "\u672a\u89c2\u770b\u5b8c\u89c6\u9891",
                            content: "\u89c2\u770b\u5b8c\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6!",
                            success: function(o) {
                                o.confirm ? (n.videoTime = 0, n.executeShowAwardVideo(e, t)) : o.cancel ? (console.log("\u53d6\u6d88"), t && t(), t = null, window.qg.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })) : (t && t(), t = null, window.qg.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                }))
                            },
                            fail: function(e) {
                                console.log("showModal\u8c03\u7528\u5931\u8d25"), t && t(), t = null, window.qg.showToast({
                                    title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
                                    icon: "none",
                                    duration: 1e3,
                                    success: function(e) {
                                        console.log("".concat(e))
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })
                            }
                        }) : (t && t(), t = null)
                    }), this.VideoInstance.load())
                }
            }, {
                key: "executeShowPushBox",
                value: function() {}
            }, {
                key: "sendToDesktop",
                value: function(e) {
                    window.qg.installShortcut({
                        success: function() {
                            e && (e.active = !1)
                        },
                        fail: function(e) {},
                        complete: function() {}
                    })
                }
            }, {
                key: "executeShowBanner2",
                value: function() {
                    console.log("\u8c03\u7528\u5173\u95ed\u63d2\u5c4f\u540e\u7684banner"), this.executeHideBanner(), this.onGetNativeAD(this.BannerInstance)
                }
            }, {
                key: "onGetNativeAD",
                value: function(e) {
                    e && "NativeInterstitial" == e.name ? this.showCustomAd() : this.systemBanner()
                }
            }, {
                key: "systemBanner",
                value: function() {
                    console.log("\u5c55\u793a\u7cfb\u7edfbanner"), this.executeHideBanner(), this.BannerAd.show()
                }
            }, {
                key: "systemInterstitial",
                value: function() {
                    var e = this;
                    console.log("\u7cfb\u7edf\u63d2\u5c4f\u5e7f\u544a"), this.executeHideBanner();
                    var t = qg.createInterstitialAd({
                        posId: this.InterstitialCode
                    });
                    t.onError(function(t) {
                        100 * Math.random() < window.GameConfig.quitShow && e.onGetNativeAD(e.BannerInstance)
                    }), t.onClose(function() {
                        t.offClose(), 100 * Math.random() < window.GameConfig.quitShow && this.onGetNativeAD(this.BannerInstance)
                    }), t.show()
                }
            }, {
                key: "showCustomAd",
                value: function() {
                    var e = this;
                    if (!window.qg.createCustomAd) return console.log("\u5f53\u524d\u4e0d\u652f\u6301\u539f\u751f\u6a21\u677f\u5e7f\u544a"), void this.systemBanner();
                    this.customAd && (this.customAd.destroy(), this.customAd = null), this.executeHideBanner(), this.NativeIndex++, this.NativeIndex >= this.NativeListCode.length && (this.NativeIndex = 0);
                    var t = this.NativeListCode[this.NativeIndex],
                        o = qg.getSystemInfoSync().windowWidth,
                        n = qg.getSystemInfoSync().windowHeight;
                    this.customAd = qg.createCustomAd({
                        posId: t,
                        style: {
                            left: o / 2 - n / 2,
                            top: n / 2 - (o < n ? o : n) * (525 / 720) / 2
                        }
                    }), this.customAd.onError(function(t) {
                        console.log("\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", t), e.customAd.offError(), e.customAd.offClose(), e.customAd.destroy(), e.customAd = null, 100 * Math.random() < window.GameConfig.quitShow && e.systemBanner()
                    }), this.customAd.onClose(function() {
                        console.log("\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5173\u95ed"), e.customAd.offError(), e.customAd.offClose(), e.customAd.destroy(), e.customAd = null, 100 * Math.random() < window.GameConfig.quitShow && e.systemBanner()
                    }), this.customAd.show().then(function() {
                        console.log("\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5b8c\u6210")
                    }).catch(function(e) {
                        console.log("\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5931\u8d25", JSON.stringify(e))
                    })
                }
            }]), e
        }();
        t.exports = new c, cc._RF.pop()
    }, {}],
    winEventNode: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "19cb4h9+ChD8abzHa0fjTth", "winEventNode"), cc.Class({
            extends: cc.Component,
            properties: {
                startDelayTime: {
                    default: 0,
                    displayName: "\u8d77\u59cb\u5ef6\u8fdf\u7684\u65f6\u95f4"
                }
            },
            onLoad: function() {
                this.isGameWin = !1, this.node.switchEvent = this.switchEvent.bind(this)
            },
            start: function() {},
            switchEvent: function() {
                1 != this.isGameWin && (this.isGameWin = !0, this.node.stopAllActions(), cc.tween(this.node).delay(this.startDelayTime).call(function() {
                    window.GameManage.onGameWin()
                }).start(), window.GameManage && (window.GameManage.isGameOver = !0))
            }
        }), cc._RF.pop()
    }, {}]
}, {}, ["use_reversed_rotateTo", "use_v2.1-2.2.1_cc.Toggle_event", "AgeLimit", "MoreGame", "NativeBanner", "NativeInterstitial", "ReferralsGame", "Shortcut", "ShowImgScript", "GameListScript", "LandscapeBanner", "PortraitPush", "SmallItem", "InitialScript", "NativeInterstitial_huawei", "logoShow_4399", "PrivacyButton", "PrivacyScript", "Favorite", "GameIconShow_tt", "Platform", "oppo-BoxItem", "oppo-NativeBanner", "oppo-NativeInterstitial", "oppo-PopupWindow", "oppo-SpecialBanner", "baidu", "config", "h5_4399", "h5_uc", "huawei", "meiZu", "oppo", "qq", "toutiao", "vivo", "CrazyClickScript", "AudioSourceScript", "GameCheatScript", "GlobalVariable", "HintWindowScript", "LevelData", "Numerical", "PlayerConfig", "Utils", "HomeManage", "onLineGiftButton", "onLineGiftUpdate", "gameLoad", "GameManage", "UIManage", "IntersectionItem", "IntersectionScript", "Photoscope", "ClearManageScript", "clearItemScript", "eraser_hintScript", "ClickManage", "activeEventNode", "againEventNode", "changeEventNode", "DragItemScript", "DragScript", "DragTargetScript", "eventMergeEventNode", "jigsawEvent", "levelHintEvent", "mobileWaggleEvent", "progressEvent", "tallyEvent", "winEventNode", "DrawManage", "PointNode", "skeleton_overSwitch", "GetCoinEffect", "ChangeImageAnimationScript", "DialogEffectScript", "DoubleClickScript", "FlutterEffect", "FollowScript", "LargenGesture", "LoadShowImgScript", "MoveByScript", "MoveToTarget", "MoveTo_voluntarily", "Move_circulationScript", "OpacityChangeScript", "PointToChangeScript", "RotationScript", "ScaleChangeScript", "ToolScript", "TouchScreenEffect", "TweenEffect_diffusion", "TweenEffect_skew", "Waggle_angleScript", "Waggle_posScript", "CollisionManager", "gravitySensor", "physicsEngine", "coinValueSwitch", "IconShowScript", "OnlyLineShowScript", "ShowControlScript", "Toggle_get", "TortScript", "TortScript_text", "VideoHandScript", "VideoIconShowScript", "VideoIconSwitch_dragonBones", "GetCoinScript", "GetShowScript", "HintPushScript", "LevelPushScript", "LoseWindowScript", "PropPushScript", "RankingScript", "SharePushScript", "SignScript", "WinWindowScript", "ChooseLevel_big", "LevelItemScript", "LevelWindowScript"]);
