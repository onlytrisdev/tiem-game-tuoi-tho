window.__require = function t(e, o, i) {
    function n(r, s) {
        if (!o[r]) {
            if (!e[r]) {
                var c = r.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (a) return a(c, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
            }
            var h = o[r] = {
                exports: {}
            };
            e[r][0].call(h.exports, function(t) {
                return n(e[r][1][t] || t)
            }, h, h.exports, t, e, o, i)
        }
        return o[r].exports
    }
    for (var a = "function" == typeof __require && __require, r = 0; r < i.length; r++) n(i[r]);
    return n
}({
    AdViewer: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c3c4f/Oh4pH0qRXKIxzuaSN", "AdViewer"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = t("./../../../Script/System/sdk/mySdk"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property;
        (function(t) {
            t[t.BANNER_TOP = 0] = "BANNER_TOP", t[t.BANNER_BOTTOM = 1] = "BANNER_BOTTOM", t[t.FULL_SCREEN = 2] = "FULL_SCREEN"
        })(i || (i = {}));
        var c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.adType = i.BANNER_BOTTOM, e
            }
            var o;
            return __extends(e, t), o = e, e.prototype.onEnable = function() {
                var t = n.mySdk.info.ads;
                switch (this.adType) {
                    case i.BANNER_TOP:
                        if (!t.banner || !0 === t.no_ads) return;
                        n.mySdk.Ads.setBannerPos(0), n.mySdk.Ads.showAds(n.mySdk.AdsType.BANNER);
                        break;
                    case i.BANNER_BOTTOM:
                        if (!t.banner || !0 === t.no_ads) return;
                        n.mySdk.Ads.setBannerPos(2), n.mySdk.Ads.showAds(n.mySdk.AdsType.BANNER);
                        break;
                    case i.FULL_SCREEN:
                        if (o.FullScreenCount++, o.FullScreenCount < 3) return;
                        if (o.FullScreenCount = 0, !t.fullscreen || !0 === t.no_ads) return;
                        n.mySdk.Ads.showAds(n.mySdk.AdsType.FULLSCREEN)
                }
            }, e.prototype.onDisable = function() {
                var t = n.mySdk.info.ads;
                switch (this.adType) {
                    case i.BANNER_TOP:
                    case i.BANNER_BOTTOM:
                        if (!t.banner || !0 === t.no_ads) return;
                        n.mySdk.Ads.hideAds(n.mySdk.AdsType.BANNER)
                }
            }, e.FullScreenCount = 0, __decorate([s({
                type: cc.Enum(i)
            })], e.prototype, "adType", void 0), e = o = __decorate([r], e)
        }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {
        "./../../../Script/System/sdk/mySdk": "mySdk"
    }],
    Base64: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5bbf77C1vVFdrkFZ/occXu/", "Base64"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = /<%= spaceCharacters %>/g;
        o.base64 = {
            encode: function(t) {
                if (t = String(t), /[^\0-\xFF]/.test(t)) return console.error("The string to be encoded contains characters outside of the Latin1 range."), null;
                for (var e, o = t.length % 3, n = "", a = -1, r = t.length - o; ++a < r;) e = (t.charCodeAt(a) << 16) + (t.charCodeAt(++a) << 8) + t.charCodeAt(++a), n += i.charAt(e >> 18 & 63) + i.charAt(e >> 12 & 63) + i.charAt(e >> 6 & 63) + i.charAt(63 & e);
                return 2 == o ? (e = (t.charCodeAt(a) << 8) + t.charCodeAt(++a), n += i.charAt(e >> 10) + i.charAt(e >> 4 & 63) + i.charAt(e << 2 & 63) + "=") : 1 == o && (e = t.charCodeAt(a), n += i.charAt(e >> 2) + i.charAt(e << 4 & 63) + "=="), n
            },
            decode: function(t) {
                var e = (t = String(t).replace(n, "")).length;
                if (e % 4 == 0 && (e = (t = t.replace(/==?$/, "")).length), e % 4 == 1 || /[^+a-zA-Z0-9/]/.test(t)) return console.error("Invalid character: the string to be decoded is not correctly encoded."), null;
                for (var o, a, r = 0, s = "", c = -1; ++c < e;) a = i.indexOf(t.charAt(c)), o = r % 4 ? 64 * o + a : a, r++ % 4 && (s += String.fromCharCode(255 & o >> (-2 * r & 6)));
                return s
            },
            version: "<%= version %>"
        }, cc._RF.pop()
    }, {}],
    BhvAfterImage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fb5d0qicAFKnrzDQa6asp4y", "BhvAfterImage"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.camera = null, e.spriteNew = null, e.spriteOld = null, e.flag = !0, e.showAfterImage = !1, e.oldX = 0, e.oldY = 0, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.texture1 = new cc.RenderTexture, this.texture1.initWithSize(cc.winSize.width, cc.winSize.height), this.texture2 = new cc.RenderTexture, this.texture2.initWithSize(cc.winSize.width, cc.winSize.height), this.camera = cc.Camera.findCamera(cc.find("Canvas/Cameras"))
                }, e.prototype.addShadow = function() {
                    if (null != this.camera) {
                        var t;
                        if (this.flag ? this.camera.targetTexture = this.texture1 : this.camera.targetTexture = this.texture2, this.flag)(t = new cc.SpriteFrame).setTexture(this.texture2), this.spriteOld.spriteFrame = t;
                        else(t = new cc.SpriteFrame).setTexture(this.texture1), this.spriteOld.spriteFrame = t;
                        if (this.spriteOld.node.setPosition(this.camera.node.getPosition()), this.camera.render(this.node.getParent()), this.flag)(t = new cc.SpriteFrame).setTexture(this.texture1), this.spriteNew.spriteFrame = t;
                        else(t = new cc.SpriteFrame).setTexture(this.texture2), this.spriteNew.spriteFrame = t;
                        this.flag = !this.flag
                    }
                }, e.prototype.start = function() {
                    this.schedule(this.addShadow, .1, cc.macro.REPEAT_FOREVER, 0)
                }, __decorate([a(cc.Camera)], e.prototype, "camera", void 0), __decorate([a(cc.Sprite)], e.prototype, "spriteNew", void 0), __decorate([a(cc.Sprite)], e.prototype, "spriteOld", void 0), e = __decorate([n], e)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {}],
    BhvAnimationHelper: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d2d7aAStTlDMZCdYQ1DvuX8", "BhvAnimationHelper"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.requireComponent,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.finishDestroy = !1, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.animation = this.node.getComponent(cc.Animation);
                    var t = this.animation.getClips();
                    this.originClip = t[0], this.animation.addClip(this.originClip, "animation-out"), this.originClip.wrapMode = cc.WrapMode.Normal
                }, e.prototype.onEnable = function() {
                    this.animation.on("play", this.onPlay, this), this.animation.on("finished", this.onFinished, this)
                }, e.prototype.onDisable = function() {
                    this.animation.off("play", this.onPlay), this.animation.off("finished", this.onFinished)
                }, e.prototype.onPlay = function(t, e) {}, e.prototype.onFinished = function(t, e) {
                    "animation-out" === e.name && this.node.destroy()
                }, e.prototype.play = function() {
                    this.originClip.wrapMode = cc.WrapMode.Normal, this.animation.play()
                }, e.prototype.reverse = function() {
                    this.originClip.wrapMode = cc.WrapMode.Reverse, this.animation.play("animation-out")
                }, __decorate([a({
                    tooltip: "\u52a8\u753b\u64ad\u653e\u5b8c\u6210\u540e\uff0c\u662f\u5426\u6d88\u9664\u8be5\u8282\u70b9"
                })], e.prototype, "finishDestroy", void 0), e = __decorate([n, s(cc.Animation), r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Animate/Animation Helper (\u52a8\u753b\u62d3\u5c55)")], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvAreaTransfer: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ca4d1ge68tLMr6z1/nVXsrK", "BhvAreaTransfer"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.disallowMultiple,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.delayTime = 0, e.waitTime = .5, e.waitTimeRandom = 0, e.areaNode = null, e.timer = 0, e.targetTime = 0, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.targetTime = this.delayTime
                }, e.prototype.transPosition = function() {
                    var t = this.areaNode || this.node.getParent();
                    null == t && console.error("Area Transfer \u5bf9\u8c61 \u5fc5\u987b\u6709\u7236\u8282\u70b9");
                    var e = t.getAnchorPoint(),
                        o = t.getBoundingBox(),
                        i = this.waitTime + (2 * Math.random() - 1) * this.waitTimeRandom,
                        n = Math.random() * o.width - o.width * e.x,
                        a = Math.random() * o.height - o.height * e.y;
                    this.node.x = n, this.node.y = a, this.node.runAction(cc.sequence([cc.fadeTo(.2 * i, 255), cc.delayTime(.6 * i), cc.fadeTo(.2 * i, 0)])), this.targetTime = i
                }, e.prototype.start = function() {}, e.prototype.update = function(t) {
                    this.enabled && (this.timer += t, this.timer >= this.targetTime && (this.timer = 0, this.transPosition()))
                }, __decorate([a], e.prototype, "delayTime", void 0), __decorate([a], e.prototype, "waitTime", void 0), __decorate([a], e.prototype, "waitTimeRandom", void 0), __decorate([a({
                    type: cc.Node,
                    tooltip: "\u533a\u57df\u8282\u70b9\u9ed8\u8ba4\u4e3a\u81ea\u8eab\u7236\u5bf9\u8c61\uff0c\u5982\u679c\u9700\u8981\u5f15\u7528\u5176\u4ed6\u8282\u70b9,\u9700\u8981\u6ce8\u610f\u8282\u70b9\u4f4d\u7f6e\u5173\u7cfb"
                })], e.prototype, "areaNode", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Movement/Area Transfer (\u533a\u57df\u968f\u673a)"), s], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvAtlasFrame: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "af1adEWFcBICbGl+PIns8LZ", "BhvAtlasFrame"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.executeInEditMode,
            s = i.requireComponent,
            c = i.menu,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.spriteAtlas = null, e.defaultFrame = null, e.indexMode = !1, e.indexMax = 9, e.atlasNameTemplate = "*", e._index = 0, e._frameName = "", e
                }
                return __extends(e, t), Object.defineProperty(e.prototype, "index", {
                    get: function() {
                        return this._index
                    },
                    set: function(t) {
                        t < 0 && (t = 0), t > this.indexMax && (t = this.indexMax), this._index = t, this.frameName = this.getNameFromTemplate(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "frameName", {
                    get: function() {
                        return this._frameName
                    },
                    set: function(t) {
                        var e = this.spriteAtlas.getSpriteFrame(t);
                        null == e && this.defaultFrame && (t = (e = this.defaultFrame).name), this.getComponent(cc.Sprite).spriteFrame = e, e && (this.node.width = e.getOriginalSize().width, this.node.height = e.getOriginalSize().height), this._frameName = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getNameFromTemplate = function(t) {
                    return this.atlasNameTemplate.replace("*", t.toString())
                }, e.prototype.start = function() {}, __decorate([a(cc.SpriteAtlas)], e.prototype, "spriteAtlas", void 0), __decorate([a({
                    type: cc.SpriteFrame,
                    tooltip: "\u9ed8\u8ba4\u7684\u5e27\u56fe\u540d\u5b57\uff0c\u5982\u679c\u627e\u4e0d\u5230\u5bf9\u5e94\u7684\u540d\u5b57\u5c06\u4f7f\u7528\u8fd9\u4e2a\u5e27\u4ee3\u66ff"
                })], e.prototype, "defaultFrame", void 0), __decorate([a({
                    tooltip: "\u7d22\u5f15\u6a21\u5f0f,\u542f\u7528\u540e\u53ef\u4ee5\u4f7f\u7528\u6a21\u677f\u540d\u5b57\u7b26\u6765\u8bbe\u7f6eindex"
                })], e.prototype, "indexMode", void 0), __decorate([a({
                    type: cc.Integer,
                    tooltip: "\u5e27\u56fe\u7684\u6700\u5927\u53d6\u503c\u8303\u56f4 0 ~ indexMax",
                    visible: function() {
                        return !0 === this.indexMode
                    }
                })], e.prototype, "indexMax", void 0), __decorate([a({
                    tooltip: "name_*_a \u7684\u65b9\u5f0f\u53ef\u4ee5\u52a8\u6001\u7684\u8bbe\u7f6e\u5e27\u56fe\u540d\u548cindex",
                    visible: function() {
                        return !0 === this.indexMode
                    }
                })], e.prototype, "atlasNameTemplate", void 0), __decorate([a], e.prototype, "_index", void 0), __decorate([a({
                    type: cc.Integer,
                    tooltip: "name_{i}_a \u7684\u65b9\u5f0f\u53ef\u4ee5\u52a8\u6001\u7684\u8bbe\u7f6e\u5e27\u56fe\u540d\u548cindex",
                    visible: function() {
                        return !0 === this.indexMode
                    }
                })], e.prototype, "index", null), __decorate([a], e.prototype, "_frameName", void 0), __decorate([a({
                    tooltip: "\u6309\u540d\u5b57\uff0c\u8bbe\u7f6e\u5bf9\u5e94atlas\u56fe\u96c6 \u7684 spriteFrame",
                    visible: function() {
                        return !1 === this.indexMode
                    }
                })], e.prototype, "frameName", null), e = __decorate([n, r, s(cc.Sprite), c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Frame Name(\u5e27\u56fe\u8bbe\u7f6e)")], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BhvAudioSource: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5c4648/2sNKIp6pTn7Rw/99", "BhvAudioSource"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.executionOrder,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._originVolume = 1, e._isFading = !1, e.tag = "", e
                }
                var o;
                return __extends(e, t), o = e, e.SetTagVolume = function(t, e) {
                    void 0 === e && (e = 1), this.VolumeTag[t] = e, this.UpdateVolume()
                }, e.SetDefaultVolume = function(t) {
                    void 0 === t && (t = 1), this.DefaultVolume = t, this.UpdateVolume()
                }, e.GetTagVolume = function(t) {
                    return t in this.VolumeTag ? this.VolumeTag[t] : this.DefaultVolume
                }, e.UpdateVolume = function() {
                    var t = this;
                    this._TempSources.forEach(function(e) {
                        e.source.volume = t.DefaultVolume, e.tag in t.VolumeTag && (e.source.volume = t.VolumeTag[e.tag])
                    })
                }, e.GetAudioByTag = function(t) {
                    return void 0 === t && (t = ""), this._TempSources.filter(function(t) {
                        t.source.tag
                    }).map(function(t) {
                        return t.source
                    })
                }, e.PauseAll = function() {
                    this._TempSources.forEach(function(t) {
                        t.source.pause()
                    })
                }, e.ResumeAll = function() {
                    this._TempSources.forEach(function(t) {
                        t.source.resume()
                    })
                }, e.prototype.onLoad = function() {
                    o._TempSources.push({
                        tag: this.tag,
                        source: this
                    }), t.prototype.onLoad.call(this), this._originVolume = this.volume, this.volume = o.GetTagVolume(this.tag) * this._originVolume
                }, e.prototype.fadeIn = function() {}, e.prototype.fadeOut = function() {
                    this.loop = !1
                }, e.prototype.onEnable = function() {
                    t.prototype.onEnable.call(this)
                }, e.prototype.onDisable = function() {
                    t.prototype.onDisable.call(this)
                }, e.prototype.onDestroy = function() {
                    var e = this,
                        i = o._TempSources.findIndex(function(t) {
                            return t.source === e
                        });
                    o._TempSources.splice(i), t.prototype.onDestroy.call(this)
                }, e._TempSources = [], e.VolumeTag = {}, e.DefaultVolume = 1, __decorate([a({
                    tooltip: "\u8bc6\u522b\u97f3\u4e50\u7c7b\u578b\u7684\u6807\u7b7e\uff0c\u586b\u5199\u540e\u53ef\u4ee5\u7edf\u4e00\u901a\u8fc7\u6807\u7b7e\u5904\u7406"
                })], e.prototype, "tag", void 0), e = o = __decorate([n, r("\u5176\u4ed6\u7ec4\u4ef6/WSS:AudioSource"), s(-1)], e)
            }(cc.AudioSource);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvAutoDestroy: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1c379iha4xNA5QioeLAk4NS", "BhvAutoDestroy"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.disallowMultiple,
            c = n.menu;
        (function(t) {
            t[t.NONE = 0] = "NONE", t[t.SCALE_IN = 1] = "SCALE_IN", t[t.SCALE_OUT = 2] = "SCALE_OUT", t[t.FADE_OUT = 3] = "FADE_OUT", t[t.SCALE_LINE = 4] = "SCALE_LINE"
        })(i || (i = {}));
        var l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.isCheckTimer = !0, e.waitTime = 1, e.isCheckRange = !1, e.outRangeMax = 100, e.startPosition = null, e.isCheckEmit = !1, e.destroyMessage = "auto-destroy", e.destroyAnimation = i.NONE, e.isReadyDestroy = !1, e
            }
            return __extends(e, t), e.prototype.start = function() {
                this.startPosition = this.node.position, this.isCheckTimer && this.scheduleOnce(this.onReadyDestroy, this.waitTime)
            }, e.prototype.onReadyDestroy = function() {
                if (!0 !== this.isReadyDestroy) {
                    switch (this.isReadyDestroy = !0, this.destroyAnimation) {
                        case i.NONE:
                    }
                    this.node.destroy()
                }
            }, e.prototype.update = function(t) {
                if (!0 !== this.isReadyDestroy && this.isCheckRange) {
                    var e = this.node.y - this.startPosition.y,
                        o = this.node.x - this.startPosition.x;
                    Math.sqrt(o * o + e * e) > this.outRangeMax && this.onReadyDestroy()
                }
            }, __decorate([r({
                tooltip: "\u68c0\u67e5\u65f6\u95f4\uff0c\u65f6\u95f4\u5230\u8fbe\u540e\u89e6\u53d1\u9500\u6bc1"
            })], e.prototype, "isCheckTimer", void 0), __decorate([r({
                tooltip: "\u7b49\u5f85\u9500\u6bc1\u7684\u65f6\u95f4",
                visible: function() {
                    return !0 === this.isCheckTimer
                }
            })], e.prototype, "waitTime", void 0), __decorate([r({
                tooltip: "\u68c0\u67e5\u8303\u56f4\uff0c\u8fd0\u52a8\u8d85\u8fc7\u521b\u5efa\u8303\u56f4\u65f6\u89e6\u53d1"
            })], e.prototype, "isCheckRange", void 0), __decorate([r({
                tooltip: "\u8d85\u8fc7\u8ddd\u79bb\u7684\u6700\u5927\u503c",
                visible: function() {
                    return !0 === this.isCheckRange
                }
            })], e.prototype, "outRangeMax", void 0), __decorate([r({
                tooltip: "\u68c0\u67e5\u4fe1\u53f7\u4f20\u9012\uff0c\u5982\u679c\u6536\u5230\u4e86\u6307\u5b9a\u4fe1\u53f7\u5c31\u81ea\u52a8\u9500\u6bc1"
            })], e.prototype, "isCheckEmit", void 0), __decorate([r({
                tooltip: "\u6536\u5230\u8be5\u8282\u70b9\u6d88\u606f\uff0c\u5c06\u4f1a\u81ea\u52a8\u9500\u6bc1\u8282\u70b9",
                visible: function() {
                    return !0 === this.isCheckEmit
                }
            })], e.prototype, "destroyMessage", void 0), __decorate([r({
                tooltip: "\u81ea\u52a8\u9500\u6bc1\u65f6\u64ad\u653e\u52a8\u753b",
                visible: function() {
                    return !1 === this.isCheckEmit && !1 === this.isCheckTimer && !1 === this.isCheckEmit
                }
            })], e.prototype, "destroyAnimation", void 0), e = __decorate([a, c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/AutoDestroy (\u6e10\u9690\u6e10\u663e)"), s], e)
        }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BhvAutoFrame: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ba1040Ean5K7o0vmPCqls+9", "BhvAutoFrame"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.spriteFrames = [], e.duration = .1, e.loop = !1, e.playOnload = !1, e.isPlaying = !1, e.playTime = 0, e.isLoop = !1, e.endFunc = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    var t = this.node.getComponent(cc.Sprite);
                    t || (t = this.node.addComponent(cc.Sprite)), this.sprite = t, this.isPlaying = !1, this.playTime = 0, this.isLoop = !1, this.endFunc = null, this.spriteFrames.length > 0 && (this.sprite.spriteFrame = this.spriteFrames[0]), this.playOnload && (this.loop ? this.playLoop() : this.playOnce(null))
                }, e.prototype.playOnce = function(t) {
                    this.playTime = 0, this.isPlaying = !0, this.isLoop = !1, this.endFunc = t
                }, e.prototype.playLoop = function() {
                    this.playTime = 0, this.isPlaying = !0, this.isLoop = !0
                }, e.prototype.stop = function() {
                    this.playTime = 0, this.isPlaying = !1, this.isLoop = !1
                }, e.prototype.update = function(t) {
                    if (!1 !== this.isPlaying) {
                        this.playTime += t;
                        var e = Math.floor(this.playTime / this.duration);
                        if (!1 === this.isLoop) {
                            if (e >= this.spriteFrames.length) return this.sprite.spriteFrame = this.spriteFrames[this.spriteFrames.length - 1], this.isPlaying = !1, this.playTime = 0, void(this.endFunc && this.endFunc());
                            this.sprite.spriteFrame = this.spriteFrames[e]
                        } else {
                            for (; e >= this.spriteFrames.length;) e -= this.spriteFrames.length, this.playTime -= this.duration * this.spriteFrames.length;
                            this.sprite.spriteFrame = this.spriteFrames[e]
                        }
                    }
                }, __decorate([a({
                    type: [cc.SpriteFrame],
                    tooltip: "\u52a8\u753b\u7684\u5e27"
                })], e.prototype, "spriteFrames", void 0), __decorate([a({
                    tooltip: "\u5e27\u7684\u65f6\u95f4\u95f4\u9694"
                })], e.prototype, "duration", void 0), __decorate([a({
                    tooltip: "\u662f\u5426\u5faa\u73af\u64ad\u653e"
                })], e.prototype, "loop", void 0), __decorate([a({
                    tooltip: "\u662f\u5426\u5728\u7ec4\u4ef6\u52a0\u8f7d\u7684\u65f6\u5019\u64ad\u653e"
                })], e.prototype, "playOnload", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Loop Frame (\u5e27\u5faa\u73af)")], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    BhvAutoSizeFill: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1d565UsLR1FcpPDC/Xyoo4z", "BhvAutoSizeFill"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.target = null, e.offset = cc.v2(0, 0), e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    null == this.target && (this.target = this.node.getParent()), this.onSizeChange()
                }, e.prototype.onEnable = function() {
                    this.target && this.target.on("size-changed", this.onSizeChange, this)
                }, e.prototype.onDisable = function() {
                    this.target && this.target.off("size-changed", this.onSizeChange, this)
                }, e.prototype.onSizeChange = function() {
                    if (this.target) {
                        var t = this.offset.x,
                            e = this.offset.y;
                        this.node.width = this.target.width + t, this.node.height = this.target.height + e
                    }
                }, __decorate([a({
                    type: cc.Node,
                    tooltip: "\u6307\u5b9a\u5f53\u524d\u8282\u70b9\u7684\u586b\u5145\u76ee\u6807,\u53ef\u4ee5\u662f\u4efb\u610f\u8282\u70b9\u3002"
                })], e.prototype, "target", void 0), __decorate([a({
                    tooltip: "\u5bbd\u9ad8\u7684\u504f\u79fb\u503c X Y "
                })], e.prototype, "offset", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Auto Size Fill (\u5185\u5bb9\u9002\u914d)")], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    BhvBoundLayout: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "007dbtxluhJqqkUEQqKuIyX", "BhvBoundLayout"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.wrap = !1, e.outBoundDestroy = !1, e
                }
                return __extends(e, t), e.prototype.update = function(t) {
                    this.node.children.forEach(this.updateCheckRect, this)
                }, e.prototype.updateCheckRect = function(t) {
                    var e = this.node;
                    if (!t.isValid && !1 !== t.active) {
                        var o = t.position,
                            i = e.width * (1 - e.anchorX),
                            n = e.width * -e.anchorX,
                            a = e.height * (1 - e.anchorY),
                            r = e.height * -e.anchorY;
                        o.x > i ? (t.x = this.wrap ? n : i, this.outBoundDestroy && t.destroy()) : o.x < n && (t.x = this.wrap ? i : n, this.outBoundDestroy && t.destroy()), o.y > a ? (t.y = this.wrap ? r : a, this.outBoundDestroy && t.destroy()) : o.y < r && (t.y = this.wrap ? a : r, this.outBoundDestroy && t.destroy())
                    }
                }, __decorate([a({
                    tooltip: "\u4f7f\u7528\u5305\u88c5\u6a21\u5f0f\uff0c\u53ef\u4ee5\u8ba9\u8282\u70b9\u4ece\u4e00\u8fb9\u7a7f\u8d8a\u5230\u53e6\u5916\u4e00\u8fb9"
                })], e.prototype, "wrap", void 0), __decorate([a({
                    tooltip: "\u63a5\u89e6\u5230\u8fb9\u754c\u5c31\u8fdb\u884c\u81ea\u52a8\u9500\u6bc1"
                })], e.prototype, "outBoundDestroy", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Bound Layout(\u8fb9\u754c\u9650\u5236)")], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    BhvBoundary: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e28cf/veuhIQIWmamaHjLLu", "BhvBoundary"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu;
        (function(t) {
            t[t.NODE = 0] = "NODE", t[t.WINDOW = 1] = "WINDOW", t[t.CUSTOM = 2] = "CUSTOM"
        })(i || (i = {})),
        function(t) {
            t[t.CLAMP = 0] = "CLAMP", t[t.WRAP = 1] = "WRAP", t[t.CUSTOM = 2] = "CUSTOM"
        }(n || (n = {}));
        var l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.boundMode = i.NODE, e.wrap = n.CLAMP, e.parent = null, e.customBoundRect = cc.rect(0, 0, 128, 128), e.boundOffset = cc.size(0, 0), e._boundEdit = !1, e.boundLeft = !0, e.boundRight = !0, e.boundTop = !0, e.boundBottom = !0, e.boundEvents = [], e._prePosition = cc.v2(0, 0), e
            }
            return __extends(e, t), Object.defineProperty(e.prototype, "boundEdit", {
                get: function() {
                    return this._boundEdit
                },
                set: function(t) {
                    this._boundEdit = t, !1 === t && (this.boundLeft = !0, this.boundRight = !0, this.boundTop = !0, this.boundBottom = !0)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.start = function() {
                this._prePosition.x = this.node.x, this._prePosition.y = this.node.y
            }, e.prototype.getBoundParent = function() {
                var t;
                switch (this.boundMode) {
                    case i.NODE:
                        t = this.parent || this.node.getParent();
                        break;
                    case i.WINDOW:
                    case i.CUSTOM:
                }
                return t
            }, e.prototype.convertPosition = function(t, e) {
                return this.node.getParent().convertToNodeSpaceAR(t.convertToWorldSpaceAR(e))
            }, e.prototype.update = function(t) {
                this.updateCheckRect(t)
            }, e.prototype.updateCheckCircle = function(t) {}, e.prototype.updateCheckRect = function(t) {
                var e = this.getBoundParent(),
                    o = this.node,
                    i = this.boundOffset,
                    a = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    r = (e.convertToWorldSpaceAR(cc.Vec2.ZERO), e.convertToNodeSpaceAR(a)),
                    s = e.width * (1 - e.anchorX),
                    c = e.width * -e.anchorX,
                    l = e.height * (1 - e.anchorY),
                    h = e.height * -e.anchorY,
                    p = this._prePosition;
                r.x + o.width / 2 - i.width > s && this.boundLeft ? (this.wrap == n.WRAP ? (p = this.convertPosition(e, cc.v2(c + o.width / 2, this.node.y)), this.node.x = p.x) : this.wrap == n.CLAMP && (p = cc.v2(this._prePosition.x, this.node.y), this.node.x = this._prePosition.x), this.onCollideBoundary("left", p)) : r.x - o.width / 2 + i.width < c && this.boundRight && (this.wrap == n.WRAP ? (p = this.convertPosition(e, cc.v2(s - o.width / 2, this.node.y)), this.node.x = p.x) : this.wrap == n.CLAMP && (p = cc.v2(this._prePosition.x, this.node.y), this.node.x = this._prePosition.x), this.onCollideBoundary("right", p)), r.y + o.height / 2 - i.height > l && this.boundTop ? (this.wrap == n.WRAP ? (p = this.convertPosition(e, cc.v2(this.node.x, h + o.height / 2)), this.node.y = p.y, this.onCollideBoundary("top", p)) : this.wrap == n.CLAMP && (p = cc.v2(this.node.x, this._prePosition.y), this.node.y = this._prePosition.y), this.onCollideBoundary("top", p)) : r.y - o.height / 2 + i.height < h && this.boundBottom && (this.wrap == n.WRAP ? (p = this.convertPosition(e, cc.v2(this.node.x, l - o.height / 2)), this.node.y = p.y) : this.wrap == n.CLAMP && (p = cc.v2(this.node.x, this._prePosition.y), this.node.y = this._prePosition.y), this.onCollideBoundary("bottom", p)), this._prePosition.x = this.node.x, this._prePosition.y = this.node.y
            }, e.prototype.onCollideBoundary = function(t, e) {
                this.boundEvents.forEach(function(o) {
                    o.emit([t, e, o.customEventData])
                })
            }, __decorate([s({
                type: cc.Enum(i),
                tooltip: "\u4e0d\u540c\u7684Bound \u6a21\u5f0f"
            })], e.prototype, "boundMode", void 0), __decorate([s({
                type: cc.Enum(n)
            })], e.prototype, "wrap", void 0), __decorate([s({
                type: cc.Node,
                visible: function() {
                    return this.boundMode === i.NODE
                }
            })], e.prototype, "parent", void 0), __decorate([s({
                visible: function() {
                    return this.boundMode === i.CUSTOM
                }
            })], e.prototype, "customBoundRect", void 0), __decorate([s({
                tooltip: "\u504f\u79fb\u503c,\u504f\u79fb\u5750\u6807\u8bbe\u7f6e x,y \u504f\u79fb\u5bbd\u5ea6\u8bbe\u7f6e w,h",
                visible: function() {
                    return this.boundMode !== i.CUSTOM
                }
            })], e.prototype, "boundOffset", void 0), __decorate([s], e.prototype, "_boundEdit", void 0), __decorate([s({
                tooltip: "\u7f16\u8f91\u8fb9\u754c\u7684\u6fc0\u6d3b\u8303\u56f4"
            })], e.prototype, "boundEdit", null), __decorate([s({
                displayName: "+ Left",
                visible: function() {
                    return !0 === this.boundEdit
                }
            })], e.prototype, "boundLeft", void 0), __decorate([s({
                displayName: "+ Right",
                visible: function() {
                    return !0 === this.boundEdit
                }
            })], e.prototype, "boundRight", void 0), __decorate([s({
                displayName: "+ Top",
                visible: function() {
                    return !0 === this.boundEdit
                }
            })], e.prototype, "boundTop", void 0), __decorate([s({
                displayName: "+ Bottom",
                visible: function() {
                    return !0 === this.boundEdit
                }
            })], e.prototype, "boundBottom", void 0), __decorate([s({
                type: [cc.Component.EventHandler],
                tooltip: "\u8fb9\u754c\u89e6\u53d1\u4e8b\u4ef6"
            })], e.prototype, "boundEvents", void 0), e = __decorate([r, c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/Boundary (\u8fb9\u754c)")], e)
        }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BhvBullet: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3482ccq2K1DlK9q12KpkbT9", "BhvBullet"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.disallowMultiple,
            c = function(t, e, o, i) {
                var n = t - o,
                    a = e - i;
                return Math.sqrt(n * n + a * a)
            },
            l = function(t, e, o, i) {
                return cc.misc.radiansToDegrees(Math.atan2(i - e, o - t))
            },
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.speed = 400, e.acceleration = 0, e.gravity = 0, e.bounceOffSolid = !1, e.isLockAngle = !1, e.moveAngle = 0, e.initialState = !0, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    var t = this.speed;
                    this.isLockAngle ? (this.dx = Math.cos(this.moveAngle / 180 * Math.PI) * t, this.dy = Math.sin(this.moveAngle / 180 * Math.PI) * t) : (this.dx = Math.cos(this.node.rotation / 180 * Math.PI) * t, this.dy = Math.sin(this.node.rotation / 180 * Math.PI) * t), this.lastX = this.node.x, this.lastY = this.node.y, this.lastKnownAngle = this.node.rotation, this.travelled = 0, this.enabled = this.initialState
                }, e.prototype.update = function(t) {
                    var e, o;
                    this.enabled && (0 !== t && (this.node.rotation !== this.lastKnownAngle && (this.isLockAngle || (e = c(0, 0, this.dx, this.dy), this.dx = Math.cos(this.node.rotation / 180 * Math.PI) * e, this.dy = Math.sin(this.node.rotation / 180 * Math.PI) * e), this.lastKnownAngle = this.node.rotation), 0 !== this.acceleration && (e = c(0, 0, this.dx, this.dy), o = 0 === this.dx && 0 === this.dy ? this.node.rotation : l(0, 0, this.dx, this.dy) || this.moveAngle, (e += this.acceleration * t) < 0 && (e = 0), this.dx = Math.cos(o / 180 * Math.PI) * e, this.dy = Math.sin(o / 180 * Math.PI) * e), 0 !== this.gravity && (this.dy -= this.gravity * t), this.lastX = this.node.x, this.lastY = this.node.y, 0 === this.dx && 0 === this.dy || (this.node.x += this.dx * t, this.node.y -= this.dy * t, this.travelled += c(0, 0, this.dx * t, this.dy * t), this.isLockAngle || (this.node.rotation = l(0, 0, this.dx, this.dy), this.lastKnownAngle = this.node.rotation))))
                }, e.prototype.setSpeed = function(t) {
                    var e = cc.misc.degreesToRadians(this.moveAngle);
                    this.dx = Math.cos(e) * t, this.dy = Math.sin(e) * t
                }, e.prototype.setMoveAngle = function(t) {
                    this.moveAngle = cc.misc.radiansToDegrees(t);
                    var e = cc.v2(this.dx, this.dy).mag();
                    this.dx = Math.cos(t) * e, this.dy = Math.sin(t) * e
                }, e.prototype.bounce = function() {}, __decorate([a], e.prototype, "speed", void 0), __decorate([a], e.prototype, "acceleration", void 0), __decorate([a], e.prototype, "gravity", void 0), __decorate([a], e.prototype, "bounceOffSolid", void 0), __decorate([a({
                    tooltip: "\u9501\u5b9a\u89d2\u5ea6\u79fb\u52a8\u89d2\u5ea6\uff1f"
                })], e.prototype, "isLockAngle", void 0), __decorate([a], e.prototype, "moveAngle", void 0), __decorate([a], e.prototype, "initialState", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Movement/Bullet (\u5b50\u5f39)"), s], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {}],
    BhvButtonGroup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2709a/Wf21FHKerICQ0P3+4", "BhvButtonGroup"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu;
        (function(t) {
            t[t.CHILDREN_INDEX = 0] = "CHILDREN_INDEX", t[t.CHILDREN_NAME = 1] = "CHILDREN_NAME"
        })(i || (i = {}));
        var c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.transition = cc.Button.Transition.NONE, e.hoverColor = cc.color(255, 255, 255), e.normalColor = cc.color(214, 214, 214), e.pressedColor = cc.color(211, 211, 211), e.disabledColor = cc.color(124, 124, 124), e.normalSprite = null, e.pressedSprite = null, e.hoverSprite = null, e.disabledSprite = null, e.duration = 1, e.zoomScale = 1.1, e.paramType = i.CHILDREN_INDEX, e.touchEvents = [], e
            }
            return __extends(e, t), e.prototype.onLoad = function() {
                var t = this;
                this.node.children.forEach(function(e, o) {
                    var n = e.getComponent(cc.Button);
                    null == n && (n = e.addComponent(cc.Button)), n.target = e, n.transition = t.transition, n.zoomScale = t.zoomScale, n.disabledSprite = t.disabledSprite, n.hoverSprite = t.hoverSprite, n.normalSprite = t.normalSprite, n.pressedSprite = t.pressedSprite, n.hoverColor = t.hoverColor, n.normalColor = t.normalColor, n.pressedColor = t.pressedColor, n.disabledColor = t.disabledColor, t.touchEvents.forEach(function(a) {
                        var r = new cc.Component.EventHandler;
                        r.component = a.component, r.handler = a.handler, r.target = a.target, t.paramType === i.CHILDREN_INDEX ? r.customEventData = o.toString() : r.customEventData = e.name, n.clickEvents.push(r)
                    })
                })
            }, __decorate([r({
                type: cc.Enum(cc.Button.Transition)
            })], e.prototype, "transition", void 0), __decorate([r({
                visible: function() {
                    return this.transition === cc.Button.Transition.COLOR
                }
            })], e.prototype, "hoverColor", void 0), __decorate([r({
                visible: function() {
                    return this.transition === cc.Button.Transition.COLOR
                }
            })], e.prototype, "normalColor", void 0), __decorate([r({
                visible: function() {
                    return this.transition === cc.Button.Transition.COLOR
                }
            })], e.prototype, "pressedColor", void 0), __decorate([r({
                visible: function() {
                    return this.transition === cc.Button.Transition.COLOR
                }
            })], e.prototype, "disabledColor", void 0), __decorate([r({
                type: cc.SpriteFrame,
                visible: function() {
                    return this.transition === cc.Button.Transition.SPRITE
                }
            })], e.prototype, "normalSprite", void 0), __decorate([r({
                type: cc.SpriteFrame,
                visible: function() {
                    return this.transition === cc.Button.Transition.SPRITE
                }
            })], e.prototype, "pressedSprite", void 0), __decorate([r({
                type: cc.SpriteFrame,
                visible: function() {
                    return this.transition === cc.Button.Transition.SPRITE
                }
            })], e.prototype, "hoverSprite", void 0), __decorate([r({
                type: cc.SpriteFrame,
                visible: function() {
                    return this.transition === cc.Button.Transition.SPRITE
                }
            })], e.prototype, "disabledSprite", void 0), __decorate([r({
                visible: function() {
                    return this.transition === cc.Button.Transition.SCALE || this.transition === cc.Button.Transition.COLOR
                }
            })], e.prototype, "duration", void 0), __decorate([r({
                visible: function() {
                    return this.transition === cc.Button.Transition.SCALE
                }
            })], e.prototype, "zoomScale", void 0), __decorate([r({
                type: cc.Enum(i)
            })], e.prototype, "paramType", void 0), __decorate([r([cc.Component.EventHandler])], e.prototype, "touchEvents", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Button Group(\u4e00\u7ec4\u6309\u94ae\u63a7\u5236)")], e)
        }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvCameraExtra: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "73411zN6uFANIYUhdrBPvKv", "BhvCameraExtra"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = a.disallowMultiple,
            h = a.requireComponent,
            p = a.executionOrder;
        (function(t) {
            t[t.LOCK_ON = 0] = "LOCK_ON", t[t.PLATFORM = 1] = "PLATFORM", t[t.TOP_DOWN = 2] = "TOP_DOWN", t[t.TOP_DOWN_TIGHT = 3] = "TOP_DOWN_TIGHT"
        })(i || (i = {})),
        function(t) {
            t[t.SHAKE_BOTH = 0] = "SHAKE_BOTH", t[t.SHAKE_HORIZONTAL = 1] = "SHAKE_HORIZONTAL", t[t.SHAKE_VERTICAL = 2] = "SHAKE_VERTICAL"
        }(n || (n = {}));
        var d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.debug = !0, e.tag = "", e.target = null, e.initFollowType = i.LOCK_ON, e.ENABLE_ROTATE = !1, e.rotateNodes = [], e.ENABLE_FX = !0, e.roundPx = !0, e.camera = null, e._shake = {
                    intensity: 0,
                    duration: 0,
                    horizontal: !1,
                    vertical: !1,
                    shakeBounds: !0,
                    x: 0,
                    y: 0
                }, e._fxConfig = {
                    opacity: 255,
                    color: cc.color(0, 0, 0),
                    duration: 0,
                    type: 0,
                    fixedView: new cc.Rect
                }, e.atLimit = {
                    x: !1,
                    y: !1
                }, e.lerp = cc.v2(1, 1), e._targetPosition = cc.v2(), e._edge = 0, e
            }
            var o;
            return __extends(e, t), o = e, Object.defineProperty(e.prototype, "x", {
                get: function() {
                    return this.view.x
                },
                set: function(t) {
                    this.view.x = t, this.bounds && this.checkBounds()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "y", {
                get: function() {
                    return this.view.y
                },
                set: function(t) {
                    this.view.y = t, this.bounds && this.checkBounds()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "width", {
                get: function() {
                    var t = cc.Canvas.instance;
                    return t ? t.node.getContentSize().width : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "height", {
                get: function() {
                    var t = cc.Canvas.instance;
                    return t ? t.node.getContentSize().height : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shakeIntensity", {
                get: function() {
                    return this._shake.intensity
                },
                set: function(t) {
                    this._shake.intensity = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fixedView", {
                get: function() {
                    return this._fxConfig.fixedView.set(cc.rect(0, 0, this.view.width, this.view.height)), this._fxConfig.fixedView
                },
                enumerable: !0,
                configurable: !0
            }), e.find = function(t) {
                var e = o._cameras.find(function(e) {
                    return e.tag == t
                });
                if (e) return e.comp
            }, e.prototype.onLoad = function() {
                o._cameras.push({
                    tag: this.tag,
                    comp: this
                });
                var t = cc.find("Canvas");
                if (this.view = cc.rect(t.x, t.y, t.width, t.height), this.camera = this.node.getComponent(cc.Camera), this._ctrlNode = new cc.Node("ctrl"), this._ctrlNode.setAnchorPoint(.5, .5), this._ctrlNode.setScale(1), this.node.addChild(this._ctrlNode), 1 == this.ENABLE_FX) {
                    var e = new cc.Node("fx");
                    e.addComponent(cc.Graphics), this.node.addChild(e), this.fx = e.getComponent(cc.Graphics), this.fx.clear()
                }
                if (1 == this.debug) {
                    var i = new cc.Node("fx2");
                    i.addComponent(cc.Graphics), this.node.addChild(i), this._fx_debug = i.getComponent(cc.Graphics)
                }
            }, e.prototype.start = function() {
                this.target && this.follow(this.target, this.initFollowType, .18, .08)
            }, e.prototype.onDestroy = function() {
                var t = this,
                    e = o._cameras.findIndex(function(e) {
                        return e.comp === t
                    }); - 1 !== e && o._cameras.splice(e)
            }, e.prototype.updateDebug = function() {
                if (this.debug) {
                    var t = this._fx_debug,
                        e = this.deadzone,
                        o = this._ctrlNode,
                        i = this.target;
                    if (t.clear(), e && (t.rect(e.x, e.y, e.width, e.height), t.lineWidth = 2, t.strokeColor = cc.color(0, 255, 0, 100), t.stroke()), o && (t.moveTo(-40, 0), t.lineTo(40, 0), t.lineWidth = 2, t.strokeColor = cc.color(0, 255, 0, 100), t.stroke(), t.moveTo(0, 40), t.lineTo(0, -40), t.lineWidth = 2, t.strokeColor = cc.color(0, 255, 0, 100), t.stroke(), t.moveTo(0, 0), t.lineTo(o.x, o.y), t.lineWidth = 8, t.strokeColor = cc.color(0, 255, 0, 50), t.stroke()), i) {
                        var n = cc.v2(this._targetPosition.x, this._targetPosition.y),
                            a = cc.v2();
                        this.camera.getWorldToCameraPoint(n, a), t.moveTo(-40 + a.x, 0 + a.y), t.lineTo(40 + a.x, 0 + a.y), t.lineWidth = 2, t.strokeColor = cc.color(255, 0, 0, 100), t.stroke(), t.moveTo(0 + a.x, 40 + a.y), t.lineTo(0 + a.x, -40 + a.y), t.lineWidth = 2, t.strokeColor = cc.color(255, 0, 0, 100), t.stroke()
                    }
                }
            }, e.prototype._drawRect = function(t, e, o, i) {
                void 0 === o && (o = cc.color(155, 155, 255)), null != e && t && (t.rect(e.x - e.width / 2, e.y - e.height / 2, e.width, e.height), t.fillColor = cc.color(o.getR(), o.getG(), o.getB(), i), t.fill())
            }, e.prototype.update = function(t) {
                if (this._fxConfig.duration > 0 && this.updateFX(t), this._shake.duration > 0 && this.updateShake(t), this.target && this.updateTarget(), this.ENABLE_ROTATE && this.rotateNodes)
                    for (var e = 0; e < this.rotateNodes.length; e++) {
                        var o = this.rotateNodes[e];
                        o.rotation !== this._ctrlNode.rotation && (o.rotation = this._ctrlNode.rotation)
                    }
                this.camera.zoomRatio !== this._ctrlNode.scale && (this.camera.zoomRatio = this._ctrlNode.scale)
            }, e.prototype.lateUpdate = function() {
                this.bounds && this.checkBounds(), this.roundPx && (this.view.x = Math.floor(this.view.x), this.view.y = Math.floor(this.view.y), this.view.width = Math.floor(this.view.width), this.view.height = Math.floor(this.view.height), this._shake.x = Math.floor(this._shake.x), this._shake.y = Math.floor(this._shake.y)), this.node.x = this.view.x + this._shake.x + this._ctrlNode.x, this.node.y = this.view.y + this._shake.y + this._ctrlNode.y, this.debug && this.updateDebug()
            }, e.prototype.updateFX = function(t) {
                if (this.fx.node.scale = 1 / this._ctrlNode.scale, 0 === this._fxConfig.type) this.fx.node.opacity -= t / this._fxConfig.duration * 60, this.fx.node.opacity <= 0 ? (this._fxConfig.duration = 0, this.fx.node.opacity = 0, this.fx.clear()) : (this.fx.clear(), this._drawRect(this.fx, cc.rect(0, 0, this.view.width, this.view.height), this._fxConfig.color, this.fx.node.opacity));
                else {
                    this.fx.node.opacity += t / this._fxConfig.duration * 60;
                    var e = this._fxConfig.opacity;
                    this.fx.node.opacity >= e ? (this._fxConfig.duration = 0, this.fx.node.opacity = e) : (this.fx.clear(), this._drawRect(this.fx, cc.rect(0, 0, this.view.width, this.view.height), this._fxConfig.color, this.fx.node.opacity))
                }
            }, e.prototype.updateShake = function(t) {
                this._shake.duration -= t;
                var e = this._shake.intensity * this.view.width * 2 - this._shake.intensity * this.view.width,
                    o = this._shake.intensity * this.view.height * 2 - this._shake.intensity * this.view.height;
                this._shake.duration <= 0 ? (this._shake.x = 0, this._shake.y = 0) : (this._shake.horizontal && (this._shake.x = e * (Math.random() - .5)), this._shake.vertical && (this._shake.y = o * (Math.random() - .5)))
            }, e.prototype.updateTarget = function() {
                if (this.deadzone) this._targetPosition.x = this.target.x, this._targetPosition.y = this.target.y, this._edge = this._targetPosition.x - this.view.x, this._edge < this.deadzone.xMin ? this.view.x = cc.misc.lerp(this.view.x, this._targetPosition.x - this.deadzone.xMin, this.lerp.x) : this._edge > this.deadzone.xMax && (this.view.x = cc.misc.lerp(this.view.x, this._targetPosition.x - this.deadzone.xMax, this.lerp.x)), this._edge = this._targetPosition.y - this.view.y, this._edge < this.deadzone.yMin ? this.view.y = cc.misc.lerp(this.view.y, this._targetPosition.y - this.deadzone.yMin, this.lerp.y) : this._edge > this.deadzone.yMax && (this.view.y = cc.misc.lerp(this.view.y, this._targetPosition.y - this.deadzone.yMax, this.lerp.y));
                else {
                    var t = this.target.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        e = this.node.getParent().convertToNodeSpaceAR(t);
                    this._targetPosition.x = e.x, this._targetPosition.y = e.y, this.view.x = cc.misc.lerp(this.view.x, this._targetPosition.x, this.lerp.x), this.view.y = cc.misc.lerp(this.view.y, this._targetPosition.y, this.lerp.y)
                }
            }, e.prototype.follow = function(t, e, o, n) {
                var a;
                switch (void 0 === e && (e = i.LOCK_ON), void 0 === o && (o = 1), void 0 === n && (n = 1), this.target = t, this.lerp.set(cc.v2(o, n)), e) {
                    case i.PLATFORM:
                        var r = this.width / 8,
                            s = this.height / 3;
                        this.deadzone = new cc.Rect((this.width - r) / 2, (this.height - s) / 2 - .25 * s, r, s), this.deadzone.x = -this.deadzone.width / 2, this.deadzone.y = -this.deadzone.height / 2;
                        break;
                    case i.TOP_DOWN:
                        a = Math.max(this.width, this.height) / 4, this.deadzone = new cc.Rect((this.width - a) / 2, (this.height - a) / 2, a, a), this.deadzone.x = -this.deadzone.width / 2, this.deadzone.y = -this.deadzone.height / 2;
                        break;
                    case i.TOP_DOWN_TIGHT:
                        a = Math.max(this.width, this.height) / 8, this.deadzone = new cc.Rect((this.width - a) / 2, (this.height - a) / 2, a, a), this.deadzone.x = -this.deadzone.width / 2, this.deadzone.y = -this.deadzone.height / 2;
                        break;
                    case i.LOCK_ON:
                    default:
                        this.deadzone = null
                }
            }, e.prototype.unFollow = function() {
                this.target = null
            }, e.prototype.focusOn = function(t) {
                this.x = Math.round(t.x), this.y = Math.round(t.y)
            }, e.prototype.focusOnXY = function(t) {
                this.x = Math.round(t.x), this.y = Math.round(t.y)
            }, e.prototype.shake = function(t, e, o, i, a) {
                return void 0 === t && (t = .05), void 0 === e && (e = .5), void 0 === o && (o = !0), void 0 === i && (i = n.SHAKE_BOTH), void 0 === a && (a = !0), !(!o && this._shake.duration > 0) && (this._shake.intensity = t, this._shake.duration = e, this._shake.shakeBounds = a, this._shake.x = 0, this._shake.y = 0, this._shake.horizontal = i === n.SHAKE_BOTH || i === n.SHAKE_HORIZONTAL, this._shake.vertical = i === n.SHAKE_BOTH || i === n.SHAKE_VERTICAL, !0)
            }, e.prototype.flash = function(t, e, o, i) {
                return void 0 === t && (t = cc.color(255, 255, 255)), void 0 === e && (e = .5), void 0 === o && (o = !1), void 0 === i && (i = 255), !(!this.fx || !o && this._fxConfig.duration > 0) && (this._fxConfig.color = t, this.fx.clear(), this.fx.rect(this.view.x - this.width / 2, this.view.y - this.view.height / 2, this.view.width, this.view.height + 20), this.fx.fillColor = cc.color(t.getR(), t.getG(), t.getB(), i), this.fx.fill(), this.fx.node.opacity = i, this._fxConfig.opacity = i, this._fxConfig.duration = e, this._fxConfig.type = 0, !0)
            }, e.prototype.fade = function(t, e, o, i) {
                return void 0 === t && (t = cc.color(0, 0, 0, 255)), void 0 === e && (e = .5), void 0 === o && (o = !1), void 0 === i && (i = 255), !(!this.fx || !o && this._fxConfig.duration > 0) && (this._fxConfig.color = t, this.fx.clear(), this.fx.rect(this.view.x - this.width / 2, this.view.y - this.view.height / 2, this.view.width, this.view.height + 20), this.fx.fillColor = cc.color(t.getR(), t.getG(), t.getB(), 0), this.fx.fill(), this.fx.node.opacity = 0, this._fxConfig.opacity = i, this._fxConfig.duration = e, this._fxConfig.type = 1, !0)
            }, e.prototype.run = function(t, e) {
                void 0 === e && (e = !1), t && this._ctrlNode && (!0 === e && this._ctrlNode.stopAllActions(), this._ctrlNode.runAction(t))
            }, e.prototype.checkBounds = function() {
                this.atLimit.x = !1, this.atLimit.y = !1;
                var t = this.view.x + this._shake.x,
                    e = this.view.x + this.view.width + this._shake.x,
                    o = this.view.y + this._shake.y,
                    i = this.view.y + this.view.height + this._shake.y;
                t <= this.bounds.x * this.camera.zoomRatio ? (this.atLimit.x = !0, this.view.x = this.bounds.x * this.camera.zoomRatio, this._shake.shakeBounds || (this._shake.x = 0)) : e >= (this.bounds.x + this.bounds.width) * this.camera.zoomRatio && (this.atLimit.x = !0, this.view.x = (this.bounds.x + this.bounds.width) * this.camera.zoomRatio - this.width, this._shake.shakeBounds || (this._shake.x = 0)), o <= (this.bounds.y + this.bounds.height) * this.camera.zoomRatio ? (this.atLimit.y = !0, this.view.y = (this.bounds.y + this.bounds.height) * this.camera.zoomRatio, this._shake.shakeBounds || (this._shake.y = 0)) : i >= this.bounds.y * this.camera.zoomRatio && (this.atLimit.y = !0, this.view.y = this.bounds.y * this.camera.zoomRatio - this.height, this._shake.shakeBounds || (this._shake.y = 0))
            }, e.prototype.reset = function() {
                this.target = null, this.view.x = 0, this.view.y = 0, this._ctrlNode.x = 0, this._ctrlNode.y = 0, this._ctrlNode.scale = 1, this._ctrlNode.rotation = 1, this._shake.duration = 0, this._shake.x = 0, this._shake.y = 0, this.resetFX()
            }, e.prototype.resetFX = function() {
                this.fx && (this.fx.clear(), this.fx.node.opacity = 0), this._fxConfig.duration = 0
            }, e.FOLLOW_TYPE = i, e.SHAKE_TYPE = n, e._cameras = [], __decorate([s], e.prototype, "debug", void 0), __decorate([s({
                tooltip: "\u7528\u4e8e\u641c\u7d22\u7684\u6807\u7b7e\uff0c\u53ef\u4ee5\u88abBhvCameraExtra \u641c\u7d22\u5230"
            })], e.prototype, "tag", void 0), __decorate([s(cc.Node)], e.prototype, "target", void 0), __decorate([s({
                displayName: "Follow Type",
                tooltip: "\u8ddf\u968f\u7684\u7c7b\u578b,\u4e0d\u540c\u8ddf\u968f\u7c7b\u578b\u7684 deadzone \u4e0d\u540c\n deadzone\u7684\u533a\u57df\u6307\u955c\u5934\u4e0d\u4f1a\u8ddf\u968f\u8303\u56f4",
                type: cc.Enum(i)
            })], e.prototype, "initFollowType", void 0), __decorate([s({
                tooltip: "\u662f\u5426\u6fc0\u6d3b\u76f8\u673a\u7684\u65cb\u8f6c\u529f\u80fd,\n\u975e\u6b63\u5e38\u65b9\u5f0f\uff0c\u975e\u5e38\u6d88\u8017\u6027\u80fd"
            })], e.prototype, "ENABLE_ROTATE", void 0), __decorate([s({
                visible: function() {
                    return this.ENABLE_ROTATE
                },
                tooltip: "\u63a7\u5236\u9700\u8981\u65cb\u8f6c\u7684\u8282\u70b9\uff0c\u8fdb\u884c\u65cb\u8f6c\uff0c\u901a\u5e38\u662f\u6e38\u620f\u56fe\u5c42\u3002\u5c3d\u91cf\u4fdd\u6301\u8f83\u5c11\u8282\u70b9\u65cb\u8f6c",
                type: [cc.Node]
            })], e.prototype, "rotateNodes", void 0), __decorate([s], e.prototype, "ENABLE_FX", void 0), __decorate([s], e.prototype, "roundPx", void 0), e = o = __decorate([r, c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Helper/Camera Extra (\u76f8\u673a\u62d3\u5c55)"), l, h(cc.Camera), p(-1)], e)
        }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {}],
    BhvCar: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f0a4cZMYJpA77oJVJ53YPEs", "BhvCar"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = a.disallowMultiple,
            h = function(t) {
                return (t %= 2 * Math.PI) < 0 && (t += 2 * Math.PI), t
            },
            p = function(t, e) {
                var o = Math.sin(t);
                return Math.cos(t) * Math.sin(e) - o * Math.cos(e) <= 0
            },
            d = function(t, e) {
                if (t === e) return 0;
                var o = Math.sin(t),
                    i = Math.cos(t),
                    n = o * Math.sin(e) + i * Math.cos(e);
                return n >= 1 ? 0 : n <= -1 ? Math.PI : Math.acos(n)
            };
        (function(t) {
            t[t.NONE = 0] = "NONE", t[t.ANGLE_45 = 1] = "ANGLE_45", t[t.ANGLE_90 = 2] = "ANGLE_90"
        })(i || (i = {})),
        function(t) {
            t[t.LEFT = 0] = "LEFT", t[t.RIGHT = 1] = "RIGHT", t[t.UP = 2] = "UP", t[t.DOWN = 3] = "DOWN"
        }(n || (n = {}));
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.maxSpeed = 350, e.accel = 200, e.decel = 300, e.startSteerSpeed = 255, e.startDriftRecover = 185, e.friction = .4, e.isLockAngle = !1, e.defaultControls = !1, e.initialState = !0, e.limitAngleType = i.NONE, e.limitPower = .15, e.s = 0, e.a = 0, e.m = 0, e.isCollideObject = !1, e.lastCollideAngle = 0, e._speedUpState = 0, e._speedUpDuration = 0, e._speedUpValue = 0, e._speedUpLerp = .1, e.lastSteerDir = n.LEFT, e
            }
            return __extends(e, t), Object.defineProperty(e.prototype, "steerSpeed", {
                get: function() {
                    return cc.misc.radiansToDegrees(this._steerSpeed)
                },
                set: function(t) {
                    this._steerSpeed = cc.misc.degreesToRadians(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "driftRecover", {
                get: function() {
                    return cc.misc.radiansToDegrees(this._driftRecover)
                },
                set: function(t) {
                    this._driftRecover = cc.misc.degreesToRadians(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "speed", {
                get: function() {
                    return this.s
                },
                set: function(t) {
                    var e = this.maxSpeed + this._speedUpValue;
                    t < -e && (t = -e), t > e && (t = e), this.s = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "angle", {
                get: function() {
                    return cc.misc.radiansToDegrees(this.a)
                },
                set: function(t) {
                    this.a = cc.misc.degreesToRadians(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "vector", {
                get: function() {
                    var t = Math.cos(this.m) * this.s,
                        e = Math.sin(this.m) * this.s;
                    return cc.v2(t, e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isSpeedUp", {
                get: function() {
                    return this._speedUpDuration > 0
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function(t) {
                void 0 === t && (t = {}), t.maxSpeed && (this.maxSpeed = t.maxSpeed), t.accel && (this.accel = t.accel), t.decel && (this.decel = t.decel), t.steerSpeed && (this.startSteerSpeed = t.steerSpeed), t.driftRecover && (this.startDriftRecover = t.driftRecover), t.friction && (this.friction = t.friction), this.start()
            }, e.prototype.start = function() {
                this.driftRecover = this.startDriftRecover, this.steerSpeed = this.startSteerSpeed, this.upKey = !1, this.downKey = !1, this.leftKey = !1, this.rightKey = !1, this.ignoreInput = !1, this.simUp = !1, this.simDown = !1, this.simLeft = !1, this.simRight = !1, this.s = 0, this.a = cc.misc.degreesToRadians(this.node.rotation), this.m = cc.misc.degreesToRadians(this.node.rotation), this.enabled = this.initialState, this.lastX = this.node.x, this.lastY = this.node.y, this.lastRotation = this.node.rotation
            }, e.prototype.onEnable = function() {
                var t = this;
                this.defaultControls && (cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this), cc.game.on(cc.game.EVENT_HIDE, this.onWindowBlur, this), cc.sys.isBrowser && (this._onBlurCallback = null, this._onBlurCallback = function() {
                    t.onWindowBlur()
                }, cc.game.canvas.addEventListener("blur", this._onBlurCallback)))
            }, e.prototype.onDisable = function() {
                this.defaultControls && (cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this), this._onBlurCallback && cc.sys.isBrowser && cc.game.canvas.removeEventListener("blur", this._onBlurCallback))
            }, e.prototype.onKeyDown = function(t) {
                var e = t.keyCode,
                    o = cc.macro.KEY;
                switch (e) {
                    case o.left:
                        this.leftKey = !0;
                        break;
                    case o.up:
                        this.upKey = !0;
                        break;
                    case o.right:
                        this.rightKey = !0;
                        break;
                    case o.down:
                        this.downKey = !0
                }
            }, e.prototype.onKeyUp = function(t) {
                var e = t.keyCode,
                    o = cc.macro.KEY;
                switch (e) {
                    case o.left:
                        this.leftKey = !1;
                        break;
                    case o.up:
                        this.upKey = !1;
                        break;
                    case o.right:
                        this.rightKey = !1;
                        break;
                    case o.down:
                        this.downKey = !1
                }
            }, e.prototype.onWindowBlur = function() {
                this.upKey = !1, this.downKey = !1, this.leftKey = !1, this.rightKey = !1
            }, e.prototype.simulate = function(t) {
                switch (t) {
                    case n.LEFT:
                        this.simLeft = !0;
                        break;
                    case n.RIGHT:
                        this.simRight = !0;
                        break;
                    case n.UP:
                        this.simUp = !0;
                        break;
                    case n.DOWN:
                        this.simDown = !0
                }
            }, Object.defineProperty(e.prototype, "isMoving", {
                get: function() {
                    return 0 !== this.speed
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isSteering", {
                get: function() {
                    return this.leftKey || this.simLeft || this.rightKey || this.simRight
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isDrifting", {
                get: function() {
                    return this._isDrift
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.stop = function() {
                this.speed = 0, this.leftKey = !1, this.rightKey = !1, this.upKey = !1, this.downKey = !1
            }, e.prototype.setIgnoreInput = function(t) {
                this.ignoreInput = t
            }, e.prototype.updateLimitCheck = function() {
                if (this.limitAngleType != i.NONE) {
                    var t = 0,
                        e = cc.misc.radiansToDegrees(this.a),
                        o = 0,
                        n = this.limitPower;
                    switch (this.limitAngleType) {
                        case i.ANGLE_45:
                            o = (t = 45) / 2 * .8;
                            break;
                        case i.ANGLE_90:
                            o = (t = 90) / 2 * .8
                    }
                    e % t <= .01 || (e % t > t - o ? this.a = cc.misc.lerp(this.a, this.a + cc.misc.degreesToRadians(t - e % t), n) : e % t < o && (this.a = cc.misc.lerp(this.a, this.a - cc.misc.degreesToRadians(e % t), n)))
                }
            }, e.prototype.speedUp = function(t, e, o) {
                void 0 === t && (t = 100), void 0 === e && (e = .01), void 0 === o && (o = .1), this._speedUpValue = t, this._speedUpDuration = e, this._speedUpLerp = o, this.speed = this.maxSpeed
            }, e.prototype._changeMaxSpeed = function(t) {
                if (!(this._speedUpValue <= 0 && this._speedUpDuration <= 0)) {
                    var e = this.maxSpeed + this._speedUpValue,
                        o = this._speedUpLerp;
                    this._speedUpDuration > 0 ? (this._speedUpDuration -= t, this.s < e && (this.s = cc.misc.lerp(this.s, e, .01)), this._speedUpDuration < .01 && (this._speedUpDuration = 0)) : (this._speedUpValue = cc.misc.lerp(this._speedUpValue, 0, o), this._speedUpValue <= 10 && (this._speedUpValue = 0))
                }
            }, e.prototype.update = function(t) {
                if (0 !== t) {
                    this._changeMaxSpeed(t);
                    var e = this.leftKey || this.simLeft,
                        o = this.rightKey || this.simRight,
                        a = this.upKey || this.simUp,
                        r = this.downKey || this.simDown,
                        s = this.maxSpeed + this._speedUpValue;
                    if (this.simLeft = !1, this.simRight = !1, this.simUp = !1, this.simDown = !1, this.enabled) {
                        this.isLockAngle || this.node.rotation === this.lastRotation || (this.a = cc.misc.degreesToRadians(this.node.rotation), this.m = cc.misc.degreesToRadians(this.node.rotation), this.lastRotation = this.node.rotation);
                        if (this.ignoreInput && (e = !1, o = !1, a = !1, r = !1), a && !r && (this.s += this.accel * t, this.s > s && (this.s = s)), r && !a && (this.s -= this.decel * t, this.s < -s && (this.s = -s)), r === a && (this.s > 0 ? (this.s -= this.decel * t * .1, this.s < 0 && (this.s = 0)) : this.s < 0 && (this.s += this.decel * t * .1, this.s > 0 && (this.s = 0))), this.s < 0) {
                            var c = e;
                            e = o, o = c
                        }
                        e && !o && (this.a = h(this.a - this._steerSpeed * t * (Math.abs(this.s) / s)), this.lastSteerDir = n.LEFT), o && !e && (this.a = h(this.a + this._steerSpeed * t * (Math.abs(this.s) / s)), this.lastSteerDir = n.RIGHT), o == e && this.limitAngleType !== i.NONE && this.updateLimitCheck();
                        var l = this._driftRecover * t,
                            u = d(this.a, this.m);
                        if (u > cc.misc.degreesToRadians(90) && (l += u - cc.misc.degreesToRadians(90)), u <= l ? (this.m = h(this.a), this._isDrift = !1) : p(this.a, this.m) ? (this.m = h(this.m + l), this._isDrift = !0) : (this.m = h(this.m - l), this._isDrift = !0), this.lastX = this.node.x, this.lastY = this.node.y, 0 !== this.s && 0 !== t) this.node.x += Math.cos(this.m) * this.s * t, this.node.y -= Math.sin(this.m) * this.s * t, this.isLockAngle || (this.node.rotation = cc.misc.radiansToDegrees(this.a), this.lastRotation = this.node.rotation), this.isCollideObject && (this.s = Math.abs(this.s), this.m = this.lastCollideAngle, this.node.x += Math.cos(this.m) * this.s * t, this.node.y -= Math.sin(this.m) * this.s * t, this.s *= 1 - this.friction);
                        else this.isLockAngle || this.node.rotation === cc.misc.radiansToDegrees(this.a) || (this.node.rotation = cc.misc.radiansToDegrees(this.a), this.lastRotation = this.node.rotation)
                    }
                }
            }, e.LIMIT_TYPE = i, e.DIRECTION = n, __decorate([s({
                tooltip: "\u6700\u5927\u79fb\u52a8\u901f\u5ea6"
            })], e.prototype, "maxSpeed", void 0), __decorate([s({
                tooltip: "\u52a0\u901f\u5ea6"
            })], e.prototype, "accel", void 0), __decorate([s({
                tooltip: "\u51cf\u901f\u5ea6"
            })], e.prototype, "decel", void 0), __decorate([s({
                tooltip: "\u521d\u59cb\u8f6c\u5411\u901f\u5ea6\u8bbe\u7f6e, angle/s",
                visible: !0,
                displayName: "Steer Speed"
            })], e.prototype, "startSteerSpeed", void 0), __decorate([s({
                tooltip: "\u521d\u59cb\u6f02\u79fb\u6062\u590d\u901f\u5ea6\u8bbe\u7f6e,angle/s",
                displayName: "Drift Recover"
            })], e.prototype, "startDriftRecover", void 0), __decorate([s({
                tooltip: "\u6469\u64e6\u7cfb\u6570"
            })], e.prototype, "friction", void 0), __decorate([s({
                tooltip: "\u662f\u5426\u9501\u5b9a\u8fd0\u52a8\u89d2\u5ea6"
            })], e.prototype, "isLockAngle", void 0), __decorate([s({
                tooltip: "\u662f\u5426\u4f7f\u7528\u9ed8\u8ba4\u63a7\u5236\u5668"
            })], e.prototype, "defaultControls", void 0), __decorate([s({
                tooltip: "\u9ed8\u8ba4\u662f\u5426\u542f\u7528\u8be5\u884c\u4e3a"
            })], e.prototype, "initialState", void 0), __decorate([s({
                tooltip: "\u8f6c\u5411\u540e\u81ea\u52a8\u5c06\u8f66\u8f86\u8f6c\u5411\u89d2\u5ea6 \u77eb\u6b63",
                type: cc.Enum(i)
            })], e.prototype, "limitAngleType", void 0), __decorate([s({
                tooltip: "\u7ea6\u675f\u5f3a\u5ea6\u8bbe\u5b9a,0~1",
                max: 1,
                min: 0,
                step: .01,
                visible: function() {
                    return this.limitAngleType != i.NONE
                }
            })], e.prototype, "limitPower", void 0), e = __decorate([r, c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Movement/Car (\u8f66\u8fd0\u52a8)"), l], e)
        }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {}],
    BhvChains: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d2165rBFZNIJ5KflUNmlkTx", "BhvChains"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.maxCount = 3, e
                }
                return __extends(e, t), e.prototype.start = function() {}, __decorate([a(cc.Label)], e.prototype, "label", void 0), __decorate([a], e.prototype, "maxCount", void 0), e = __decorate([n], e)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {}],
    BhvCircle: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4e97dVK/59C2LG0BJzAFCQk", "BhvCircle"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.disallowMultiple,
            c = function(t) {
                return (t %= 360) < 0 && (t += 360), t
            },
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.initialState = !0, e.speed = 360, e.accel = 0, e.angle = 50, e.radius = cc.v2(50, 50), e.originPos = cc.v2(0, 0), e
                }
                return __extends(e, t), e.prototype.start = function() {
                    var t = cc.misc.degreesToRadians(this.angle);
                    this.originPos.x = this.node.x - Math.cos(t) * this.radius.x, this.originPos.y = this.node.y + Math.sin(t) * this.radius.y, this.enabled = this.initialState
                }, e.prototype.update = function(t) {
                    if (this.enabled && 0 !== t && (0 !== this.accel && (this.speed += this.accel * t), 0 !== this.speed)) {
                        this.angle = c(this.angle + this.speed * t);
                        var e = cc.misc.degreesToRadians(this.angle);
                        this.node.x = Math.cos(e) * this.radius.x + this.originPos.x, this.node.y = -Math.sin(e) * this.radius.y + this.originPos.y
                    }
                }, e.prototype.setRadius = function(t) {
                    this.radius = cc.v2(t)
                }, __decorate([a], e.prototype, "initialState", void 0), __decorate([a({
                    tooltip: "\u5706\u8fd0\u52a8\u901f\u5ea6"
                })], e.prototype, "speed", void 0), __decorate([a({
                    tooltip: "\u52a0\u901f\u5ea6"
                })], e.prototype, "accel", void 0), __decorate([a({
                    tooltip: "\u8fd0\u52a8\u8d77\u59cb\u89d2\u5ea6"
                })], e.prototype, "angle", void 0), __decorate([a({
                    tooltip: "\u5706\u5468\u534a\u5f84"
                })], e.prototype, "radius", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Movement/Circle (\u5706\u5468\u8fd0\u52a8)"), s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BhvColorIndex: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ef718sW/7pOKrUq42k/27U0", "BhvColorIndex"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.executeInEditMode,
            s = i.menu,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.colors = [cc.color(255, 255, 255)], e.transitionColor = !1, e.transitionTime = .3, e._index = 0, e
                }
                return __extends(e, t), Object.defineProperty(e.prototype, "index", {
                    get: function() {
                        return this._index
                    },
                    set: function(t) {
                        t < 0 || (this._index = t % this.colors.length, this.changeColor(this._index))
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.changeColor = function(t) {
                    var e = this.colors[t];
                    e && (this.transitionColor ? this.node.runAction(cc.tintTo(this.transitionTime, e.getR(), e.getG(), e.getB())) : this.node.color = e)
                }, __decorate([a([cc.Color])], e.prototype, "colors", void 0), __decorate([a], e.prototype, "transitionColor", void 0), __decorate([a({
                    visible: function() {
                        return !0 === this.transitionColor
                    }
                })], e.prototype, "transitionTime", void 0), __decorate([a({
                    tooltip: "\u5f53\u524d\u663e\u793a\u7684\u989c\u8272",
                    type: cc.Integer
                })], e.prototype, "index", null), __decorate([a], e.prototype, "_index", void 0), e = __decorate([n, r, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Color Index (\u989c\u8272\u5e8f\u53f7)")], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvDirection8: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8176dXsJ6lOxYUNQZZ6H5Q6", "BhvDirection8"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = a.disallowMultiple;
        (function(t) {
            t[t.up_down = 0] = "up_down", t[t.left_light = 1] = "left_light", t[t.direction4 = 2] = "direction4", t[t.direction8 = 3] = "direction8"
        })(i || (i = {})),
        function(t) {
            t[t.no = 0] = "no", t[t.degree45 = 1] = "degree45", t[t.degree90 = 2] = "degree90", t[t.degree360 = 3] = "degree360"
        }(n || (n = {}));
        var h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.maxSpeed = 200, e.accel = 600, e.decel = 500, e.directions = i.direction8, e.defaultControls = !1, e.angleMode = n.degree360, e.initialState = !0, e.DIRECTION = i, e.ANGLE_MODE = n, e
            }
            return __extends(e, t), e.prototype.start = function() {
                this.upKey = !1, this.downKey = !1, this.leftKey = !1, this.rightKey = !1, this.ignoreInput = !1, this.simUp = !1, this.simDown = !1, this.simLeft = !1, this.simRight = !1, this.lastUpTick = -1, this.lastDownTick = -1, this.lastLeftTick = -1, this.lastRightTick = -1, this.dx = 0, this.dy = 0, this._tickCount = 0
            }, e.prototype.onEnable = function() {
                var t = this;
                this.defaultControls && (cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this), cc.game.on(cc.game.EVENT_HIDE, this.onWindowBlur, this), cc.sys.isBrowser && (this._onBlurCallback = null, this._onBlurCallback = function() {
                    t.onWindowBlur()
                }, cc.game.canvas.addEventListener("blur", this._onBlurCallback)))
            }, e.prototype.onDisable = function() {
                this.defaultControls && (cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this), this._onBlurCallback && cc.sys.isBrowser && cc.game.canvas.removeEventListener("blur", this._onBlurCallback))
            }, e.prototype.onKeyDown = function(t) {
                var e = t.keyCode,
                    o = cc.macro.KEY,
                    i = this._tickCount;
                switch (e) {
                    case o.left:
                        this.lastLeftTick < i && (this.leftKey = !0);
                        break;
                    case o.up:
                        this.lastUpTick < i && (this.upKey = !0);
                        break;
                    case o.right:
                        this.lastRightTick < i && (this.rightKey = !0);
                        break;
                    case o.down:
                        this.lastDownTick < i && (this.downKey = !0)
                }
            }, e.prototype.onKeyUp = function(t) {
                var e = t.keyCode,
                    o = cc.macro.KEY,
                    i = this._tickCount;
                switch (e) {
                    case o.left:
                        this.leftKey = !1, this.lastLeftTick = i;
                        break;
                    case o.up:
                        this.upKey = !1, this.lastUpTick = i;
                        break;
                    case o.right:
                        this.rightKey = !1, this.lastRightTick = i;
                        break;
                    case o.down:
                        this.downKey = !1, this.lastDownTick = i
                }
            }, e.prototype.isMoving = function() {
                return 0 !== this.dx || 0 !== this.dy
            }, e.prototype.stop = function() {
                this.dx = 0, this.dy = 0
            }, e.prototype.reverse = function() {
                this.dx *= -1, this.dy *= -1
            }, e.prototype.simulate = function(t) {
                switch (t) {
                    case 2:
                        this.simDown = !0;
                        break;
                    case 4:
                        this.simLeft = !0;
                        break;
                    case 6:
                        this.simRight = !0;
                        break;
                    case 8:
                        this.simUp = !0
                }
            }, e.prototype.update = function(t) {
                this._tickCount++;
                var e, o, a = this.leftKey || this.simLeft,
                    r = this.rightKey || this.simRight,
                    s = this.upKey || this.simUp,
                    c = this.downKey || this.simDown;
                if ((this.simLeft = !1, this.simRight = !1, this.simUp = !1, this.simDown = !1, this.enabled) && (this.ignoreInput && (a = !1, r = !1, s = !1, c = !1), this.directions === i.up_down ? (a = !1, r = !1) : this.directions === i.left_light && (s = !1, c = !1), this.directions === i.direction4 && (s || c) && (a = !1, r = !1), a == r && (this.dx < 0 ? (this.dx += this.decel * t, this.dx > 0 && (this.dx = 0)) : this.dx > 0 && (this.dx -= this.decel * t, this.dx < 0 && (this.dx = 0))), s == c && (this.dy < 0 ? (this.dy += this.decel * t, this.dy > 0 && (this.dy = 0)) : this.dy > 0 && (this.dy -= this.decel * t, this.dy < 0 && (this.dy = 0))), a && !r && (this.dx > 0 ? this.dx -= (this.accel + this.decel) * t : this.dx -= this.accel * t), r && !a && (this.dx < 0 ? this.dx += (this.accel + this.decel) * t : this.dx += this.accel * t), s && !c && (this.dy > 0 ? this.dy -= (this.accel + this.decel) * t : this.dy -= this.accel * t), c && !s && (this.dy < 0 ? this.dy += (this.accel + this.decel) * t : this.dy += this.accel * t), 0 !== this.dx || 0 !== this.dy)) {
                    if (Math.sqrt(this.dx * this.dx + this.dy * this.dy) > this.maxSpeed) {
                        var l = Math.atan2(this.dy, this.dx);
                        this.dx = this.maxSpeed * Math.cos(l), this.dy = this.maxSpeed * Math.sin(l)
                    }
                    var h = this.node.x,
                        p = this.node.y,
                        d = this.node.rotation;
                    this.node.x += this.dx * t, !1 && (this.node.x = h, this.dx = 0), this.node.y -= this.dy * t, !1 && (this.node.y = p, this.dy = 0), e = Math.round(1e6 * this.dx) / 1e6, o = Math.round(1e6 * this.dy) / 1e6, 0 === e && 0 === o || null === this.node.rotation || (this.angleMode === n.degree90 ? this.node.rotation = 90 * Math.round(cc.misc.radiansToDegrees(Math.atan2(o, e)) / 90) : this.angleMode === n.degree45 ? this.node.rotation = 45 * Math.round(cc.misc.radiansToDegrees(Math.atan2(o, e)) / 45) : this.angleMode === n.degree360 && (this.node.rotation = cc.misc.radiansToDegrees(Math.atan2(o, e)))), this.node.rotation != d && !1 && (this.node.rotation = d)
                }
            }, e.prototype.onWindowBlur = function() {
                this.upKey = !1, this.downKey = !1, this.leftKey = !1, this.rightKey = !1
            }, __decorate([s({
                tooltip: "\u6700\u5927\u79fb\u52a8\u901f\u5ea6"
            })], e.prototype, "maxSpeed", void 0), __decorate([s({
                tooltip: "\u52a0\u901f\u5ea6"
            })], e.prototype, "accel", void 0), __decorate([s({
                tooltip: "\u51cf\u901f\u5ea6"
            })], e.prototype, "decel", void 0), __decorate([s({
                type: cc.Enum(i),
                tooltip: "\u89d2\u5ea6\u65b9\u5411"
            })], e.prototype, "directions", void 0), __decorate([s({
                tooltip: "\u4f7f\u7528\u9ed8\u8ba4\u63a7\u5236\u5668"
            })], e.prototype, "defaultControls", void 0), __decorate([s({
                type: cc.Enum(n),
                tooltip: "\u8bbe\u7f6e\u89d2\u5ea6\u5e73\u6ed1"
            })], e.prototype, "angleMode", void 0), __decorate([s({
                tooltip: "\u9ed8\u8ba4\u662f\u5426\u542f\u7528\u8be5\u884c\u4e3a"
            })], e.prototype, "initialState", void 0), e = __decorate([r, c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Movement/Direction8 (\u516b\u65b9\u5411\u79fb\u52a8)"), l], e)
        }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {}],
    BhvDragDrop: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "68d8dIxcqhBL7RCUcBcy0WO", "BhvDragDrop"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = a.disallowMultiple;
        (function(t) {
            t[t.both = 0] = "both", t[t.horizontal = 1] = "horizontal", t[t.vertical = 2] = "vertical"
        })(i || (i = {})),
        function(t) {
            t[t.none = 0] = "none", t[t.scale = 1] = "scale", t[t.color = 2] = "color", t[t.opacity = 3] = "opacity"
        }(n || (n = {}));
        var h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.dragMode = i.both, e.dragEffect = n.none, e.dragScale = cc.v2(.9, .9), e.dragColor = cc.color(255, 0, 0), e.dragOpacity = 200, e.isLimitPosition = !0, e
            }
            return __extends(e, t), e.prototype.start = function() {
                this.isMoving = !1, this.moveDeltaX = 0, this.moveDeltaY = 0
            }, e.prototype.onEnable = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onDragStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDragMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onDragDrop, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onDragDrop, this)
            }, e.prototype.onDisable = function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this.onDragStart, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onDragMove, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onDragDrop, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onDragDrop, this)
            }, e.prototype.onDragStart = function() {
                switch (this._pre_dragColor = this.node.color, this._pre_scale = this.node.scale, this._pre_opacity = this.node.opacity, this._pre_position = this.node.position, this.moveDeltaX = 0, this.moveDeltaY = 0, this.dragEffect) {
                    case n.color:
                        this.node.color = this.dragColor;
                        break;
                    case n.scale:
                        this.node.scaleX = this.dragScale.x, this.node.scaleY = this.dragScale.y;
                        break;
                    case n.opacity:
                        this.node.opacity = this.dragOpacity
                }
            }, e.prototype.onDragMove = function(t) {
                this.isMoving = !0;
                var e = t.touch.getDelta();
                switch (this.dragMode) {
                    case i.both:
                        this.moveDeltaX += e.x, this.moveDeltaY += e.y, this.node.x = this._pre_position.x + this.moveDeltaX, this.node.y = this._pre_position.y + this.moveDeltaY;
                        break;
                    case i.horizontal:
                        this.moveDeltaX += e.x, this.node.x = this._pre_position.x + this.moveDeltaX;
                        break;
                    case i.vertical:
                        this.moveDeltaY += e.y, this.node.y += e.y, this.node.y = this._pre_position.y + this.moveDeltaY
                }
            }, e.prototype.onDragDrop = function() {
                switch (this.isMoving = !1, this.dragEffect) {
                    case n.color:
                        this.node.color = this._pre_dragColor;
                        break;
                    case n.scale:
                        this.node.scale = this._pre_scale;
                        break;
                    case n.opacity:
                        this.node.opacity = this._pre_opacity
                }
            }, e.prototype.update = function() {
                this.isLimitPosition && this.isMoving && (this.node.x = this._pre_position.x + this.moveDeltaX, this.node.y = this._pre_position.y + this.moveDeltaY)
            }, __decorate([s({
                type: cc.Enum(i),
                tooltip: "\u62d6\u62fd\u5bf9\u8c61\u7684\u65b9\u5f0f"
            })], e.prototype, "dragMode", void 0), __decorate([s({
                type: cc.Enum(n),
                tooltip: "\u62d6\u62fd\u5bf9\u8c61,\u5bf9\u8c61\u53d8\u5316\u7684\u6548\u679c"
            })], e.prototype, "dragEffect", void 0), __decorate([s({
                visible: function() {
                    return this.dragEffect == n.scale
                },
                tooltip: "\u62d6\u62fd\u5bf9\u8c61\uff0c\u53d1\u751f\u7f29\u653e\u53d8\u5316\u7684\u503c"
            })], e.prototype, "dragScale", void 0), __decorate([s({
                visible: function() {
                    return this.dragEffect == n.color
                },
                tooltip: "\u62d6\u62fd\u5bf9\u8c61\uff0c\u53d1\u751f\u989c\u8272\u53d8\u5316\u7684\u503c"
            })], e.prototype, "dragColor", void 0), __decorate([s({
                visible: function() {
                    return this.dragEffect == n.opacity
                },
                tooltip: "\u62d6\u62fd\u5bf9\u8c61\uff0c\u53d1\u751f\u4e0d\u900f\u660e\u5ea6\u53d8\u5316\u7684\u503c"
            })], e.prototype, "dragOpacity", void 0), __decorate([s({
                tooltip: "\u662f\u5426\u5728\u62d6\u62fd\u65f6\uff0c\u9501\u5b9a\u8282\u70b9\u5750\u6807\u503c\uff0c\u4e0d\u8ba9\u8282\u70b9\u8fdb\u884c\u79fb\u52a8"
            })], e.prototype, "isLimitPosition", void 0), e = __decorate([r, c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/Drag&Drop (\u62d6\u653e)"), l], e)
        }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {}],
    BhvEaseTween: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6332bN9ES5JfqBsnbWVhmsG", "BhvEaseTween"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a, r = t("./../utils/commonTween"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            h = s.menu;
        (function(t) {
            t[t.ONCE = 0] = "ONCE", t[t.LOOP = 1] = "LOOP", t[t.PING_PONG = 2] = "PING_PONG", t[t.PING_PONG_LOOP = 3] = "PING_PONG_LOOP", t[t.ONCE_DESTROY = 4] = "ONCE_DESTROY"
        })(i || (i = {})),
        function(t) {
            t[t.ROTATION = 0] = "ROTATION", t[t.OPACITY = 1] = "OPACITY", t[t.SCALE = 2] = "SCALE", t[t.POSITION = 3] = "POSITION", t[t.SCALE_XY = 4] = "SCALE_XY", t[t.SKEW_XY = 5] = "SKEW_XY", t[t.COLOR = 6] = "COLOR"
        }(n || (n = {})),
        function(t) {
            t[t.FROM = 0] = "FROM", t[t.TO = 1] = "TO", t[t.CUSTOM = 2] = "CUSTOM"
        }(a || (a = {}));
        var p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.activeOnStart = !1, e.relativeMode = !1, e.tweenOrder = a.TO, e.tweenProperty = n.SCALE, e.easeType = r.EASE_TYPE.SineInOut, e.initial = 0, e.initialPos = cc.v2(100, 100), e.initialColor = cc.color(255, 255, 255), e.target = 0, e.targetPos = cc.v2(100, 100), e.targetColor = cc.color(255, 255, 255), e.duration = 1, e.wait = cc.v2(0, 0), e.playback = i.ONCE, e.actionTag = 0, e.waitEvents = [], e.finishedEvents = [], e
            }
            return __extends(e, t), e.prototype.onLoad = function() {
                this.initValues()
            }, e.prototype.start = function() {
                this.activeOnStart && this.tweenStart()
            }, e.prototype.initValues = function() {
                switch (this.tweenOrder) {
                    case a.CUSTOM:
                        this.saveInitialToNode();
                        break;
                    case a.TO:
                        this.saveNodeToInitial();
                        break;
                    case a.FROM:
                        this.saveNodeToInitial(), this.saveTargetToNode()
                }
            }, e.prototype.saveNodeToInitial = function() {
                var t = this.tweenProperty,
                    e = n,
                    o = this.node;
                switch (t) {
                    case e.COLOR:
                        this.initialColor = o.color;
                        break;
                    case e.OPACITY:
                        this.initial = o.opacity;
                        break;
                    case e.POSITION:
                        this.initialPos.x = o.x, this.initialPos.y = o.y;
                        break;
                    case e.ROTATION:
                        this.initial = o.rotation;
                        break;
                    case e.SCALE:
                        this.initial = o.scale;
                        break;
                    case e.SCALE_XY:
                        this.initialPos.x = o.scaleX, this.initialPos.y = o.scaleY
                }
            }, e.prototype.saveInitialToNode = function() {
                var t = this.tweenProperty,
                    e = n,
                    o = this.node;
                if (this.relativeMode) switch (t) {
                    case e.COLOR:
                        var i = o.color,
                            a = this.initialColor;
                        o.color = cc.color(i.getR() + a.getR(), i.getG() + a.getG(), i.getB() + a.getB());
                        break;
                    case e.OPACITY:
                        o.opacity += this.initial;
                        break;
                    case e.POSITION:
                        o.x += this.initialPos.x, o.y = this.initialPos.y;
                        break;
                    case e.ROTATION:
                        o.rotation += this.initial;
                        break;
                    case e.SCALE:
                        o.scale += this.initial;
                        break;
                    case e.SCALE_XY:
                        o.scaleX += this.initialPos.x, o.scaleY += this.initialPos.y
                } else switch (t) {
                    case e.COLOR:
                        o.color = this.initialColor;
                        break;
                    case e.OPACITY:
                        o.opacity = this.initial;
                        break;
                    case e.POSITION:
                        o.x = this.initialPos.x, o.y = this.initialPos.y;
                        break;
                    case e.ROTATION:
                        o.rotation = this.initial;
                        break;
                    case e.SCALE:
                        o.scale = this.initial;
                        break;
                    case e.SCALE_XY:
                        o.scaleX = this.initialPos.x, o.scaleY = this.initialPos.y
                }
            }, e.prototype.saveTargetToNode = function() {
                var t = this.tweenProperty,
                    e = n,
                    o = this.node;
                if (this.relativeMode) switch (t) {
                    case e.COLOR:
                        var i = o.color,
                            a = this.targetColor;
                        o.color = cc.color(i.getR() + a.getR(), i.getG() + a.getG(), i.getB() + a.getB());
                        break;
                    case e.OPACITY:
                        o.opacity += this.target;
                        break;
                    case e.POSITION:
                        o.x += this.targetPos.x, o.y = this.targetPos.y;
                        break;
                    case e.ROTATION:
                        o.rotation += this.target;
                        break;
                    case e.SCALE:
                        o.scale += this.target;
                        break;
                    case e.SCALE_XY:
                        o.scaleX += this.targetPos.x, o.scaleY += this.targetPos.y
                } else switch (t) {
                    case e.COLOR:
                        o.color = this.targetColor;
                        break;
                    case e.OPACITY:
                        o.opacity = this.target;
                        break;
                    case e.POSITION:
                        o.x = this.targetPos.x, o.y = this.targetPos.y;
                        break;
                    case e.ROTATION:
                        o.rotation = this.target;
                        break;
                    case e.SCALE:
                        o.scale = this.target;
                        break;
                    case e.SCALE_XY:
                        o.scaleX = this.targetPos.x, o.scaleY = this.targetPos.y
                }
            }, e.prototype.getTweenAction = function(t) {
                void 0 === t && (t = !1);
                var e, o, i, a = this.relativeMode,
                    s = r.TweenConfig.getTweenType(this.easeType),
                    c = this.duration,
                    l = this.tweenProperty,
                    h = n,
                    p = t ? -1 : 1;
                switch (l) {
                    case h.COLOR:
                        a ? (i = this.targetColor, e = cc.tintBy(c, i.getR() * p, i.getG() * p, i.getB() * p)) : (i = t ? this.initialColor : this.targetColor, e = cc.tintTo(c, i.getR(), i.getG(), i.getB()));
                        break;
                    case h.OPACITY:
                        e = a ? cc.fadeTo(c, this.node.opacity + this.target * p) : cc.fadeTo(c, t ? this.initial : this.target);
                        break;
                    case h.POSITION:
                        e = a ? cc.moveBy(c, this.targetPos.x * p, this.targetPos.y * p) : cc.moveTo(c, t ? this.initialPos : this.targetPos);
                        break;
                    case h.ROTATION:
                        e = a ? cc.rotateBy(c, this.target * p) : cc.rotateTo(c, t ? this.initial : this.target);
                        break;
                    case h.SCALE:
                        e = a ? cc.scaleBy(c, this.target * p) : cc.scaleTo(c, t ? this.initial : this.target);
                        break;
                    case h.SCALE_XY:
                        a ? (o = this.targetPos, e = cc.scaleBy(c, o.x * p, o.y * p)) : (o = t ? this.initialPos : this.targetPos, e = cc.scaleTo(c, o.x, o.y));
                        break;
                    case h.SKEW_XY:
                        a ? (o = this.targetPos, e = cc.skewBy(c, o.x * p, o.y * p)) : (o = t ? this.initialPos : this.targetPos, e = cc.skewTo(c, o.x, o.y))
                }
                return s && e.easing(s), e
            }, e.prototype.forceStart = function() {
                this.tweenStart(!0)
            }, e.prototype.forceStop = function() {}, e.prototype.tweenStart = function(t) {
                void 0 === t && (t = !1);
                var e, o, n = this.tweenOrder === a.FROM,
                    r = this.getTweenAction(n),
                    s = this.wait,
                    c = this.node.getActionByTag(this.actionTag);
                if (t) this.node.stopActionByTag(this.actionTag);
                else if (c && !c.isDone) return void cc.log("\u52a8\u753b\u672a\u64ad\u653e\u5b8c");
                switch (this.playback) {
                    case i.ONCE:
                        o = cc.sequence([cc.delayTime(s.x), r, cc.callFunc(this.onTweenFinish, this)]);
                        break;
                    case i.PING_PONG:
                        e = this.getTweenAction(!n), o = cc.sequence([cc.delayTime(s.x), r, cc.callFunc(this.onTweenWait, this), cc.delayTime(s.y), e, cc.callFunc(this.onTweenFinish, this)]);
                        break;
                    case i.PING_PONG_LOOP:
                        e = this.getTweenAction(!n), (o = cc.sequence([cc.delayTime(s.x), r, cc.delayTime(s.y), e, cc.callFunc(this.onTweenRepeat, this)])).repeatForever();
                        break;
                    case i.LOOP:
                        (o = this.relativeMode ? cc.sequence([cc.delayTime(s.x), r, cc.delayTime(s.y), cc.callFunc(this.onTweenRepeat, this)]) : cc.sequence([cc.callFunc(this.onResetValue, this), cc.delayTime(s.x), r, cc.delayTime(s.y), cc.callFunc(this.onTweenRepeat, this)])).repeatForever()
                }
                o.setTag(this.actionTag), this.node.runAction(o)
            }, e.prototype.tweenPause = function() {
                this.node.resumeAllActions()
            }, e.prototype.tweenResume = function() {
                this.node.pauseAllActions()
            }, e.prototype.tweenStop = function() {
                this.node.stopActionByTag(this.actionTag)
            }, e.prototype.onResetValue = function() {
                this.tweenOrder === a.FROM ? this.saveTargetToNode() : (this.tweenOrder, a.TO, this.saveInitialToNode())
            }, e.prototype.onTweenWait = function() {
                var t = this;
                this.waitEvents.forEach(function(e) {
                    e.emit([t.actionTag, e.customEventData])
                })
            }, e.prototype.onTweenRepeat = function() {
                var t = this;
                this.finishedEvents.forEach(function(e) {
                    e.emit([t.actionTag, e.customEventData])
                })
            }, e.prototype.onTweenFinish = function() {
                var t = this;
                this.finishedEvents.forEach(function(e) {
                    e.emit([t.actionTag, e.customEventData])
                })
            }, __decorate([l], e.prototype, "activeOnStart", void 0), __decorate([l], e.prototype, "relativeMode", void 0), __decorate([l({
                type: cc.Enum(a),
                tooltip: "FROM:\u4ece\u76ee\u6807\u4f4d\u7f6e\u98de\u8fc7\u6765,TO:\u4ece\u76ee\u6807\u4f4d\u7f6e\u98de\u8fc7\u53bb, CUSTOM:\u5f3a\u5236\u6307\u5b9a\u5750\u6807"
            })], e.prototype, "tweenOrder", void 0), __decorate([l({
                type: cc.Enum(n)
            })], e.prototype, "tweenProperty", void 0), __decorate([l({
                type: cc.Enum(r.EASE_TYPE)
            })], e.prototype, "easeType", void 0), __decorate([l({
                visible: function() {
                    return this.tweenProperty <= 2 && this.tweenOrder === a.CUSTOM
                }
            })], e.prototype, "initial", void 0), __decorate([l({
                visible: function() {
                    return this.tweenProperty >= 3 && this.tweenProperty <= 5 && this.tweenOrder === a.CUSTOM
                }
            })], e.prototype, "initialPos", void 0), __decorate([l({
                visible: function() {
                    return this.tweenProperty === n.COLOR && this.tweenOrder === a.CUSTOM
                }
            })], e.prototype, "initialColor", void 0), __decorate([l({
                visible: function() {
                    return this.tweenProperty <= 2
                }
            })], e.prototype, "target", void 0), __decorate([l({
                visible: function() {
                    return this.tweenProperty >= 3 && this.tweenProperty <= 5
                }
            })], e.prototype, "targetPos", void 0), __decorate([l({
                visible: function() {
                    return this.tweenProperty === n.COLOR
                }
            })], e.prototype, "targetColor", void 0), __decorate([l], e.prototype, "duration", void 0), __decorate([l], e.prototype, "wait", void 0), __decorate([l({
                type: cc.Enum(i)
            })], e.prototype, "playback", void 0), __decorate([l], e.prototype, "actionTag", void 0), __decorate([l({
                type: [cc.Component.EventHandler],
                tooltip: "tween\u4e2d\u95f4\u505c\u987f\u7684\u65f6\u5019\u64ad\u653e\u7684\u4e8b\u4ef6",
                visible: function() {
                    return this.playback === i.PING_PONG || this.playback === i.PING_PONG_LOOP
                }
            })], e.prototype, "waitEvents", void 0), __decorate([l({
                type: [cc.Component.EventHandler],
                tooltip: "tween \u7ed3\u675f\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"
            })], e.prototype, "finishedEvents", void 0), e = __decorate([c, h("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Animate/Ease Tween(\u7f13\u52a8\u52a8\u753b)")], e)
        }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "./../utils/commonTween": "commonTween"
    }],
    BhvEmitter: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "36c72S376JGcY+RBnAGqhcK", "BhvEmitter"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.prefab = null, e.generatorParent = null, e
                }
                return __extends(e, t), e.prototype.onEventEmit = function(t) {
                    this.createNode()
                }, e.prototype.emit = function(t, e) {
                    void 0 === e && (e = 0);
                    var o = this.createNode();
                    o.x = t.x, o.y = t.y, o.rotation = e
                }, e.prototype.createNode = function() {
                    var t = cc.instantiate(this.prefab);
                    return (this.generatorParent || this.node).addChild(t), t
                }, __decorate([a(cc.Prefab)], e.prototype, "prefab", void 0), __decorate([a({
                    type: cc.Node,
                    tooltip: "\u5728\u54ea\u91cc\u751f\u6210\u8be5prefab"
                })], e.prototype, "generatorParent", void 0), e = __decorate([n], e)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {}],
    BhvEventSender: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7b99bSModlF/7Z9ZH6Ajqgr", "BhvEventSender"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu;
        (function(t) {
            t[t.ONE_TARGET = 0] = "ONE_TARGET", t[t.MULTIPLE_TARGET = 1] = "MULTIPLE_TARGET", t[t.CC_DIRECTOR = 2] = "CC_DIRECTOR"
        })(i || (i = {}));
        var c = {
                ON_COLLISION_ENTER: "onCollisionEnter",
                ON_COLLISION_STAY: "onCollisionStay",
                ON_COLLISION_EXIT: "onCollisionExit",
                ON_TOUCH_START: "onTouchStart",
                ON_TOUCH_MOVE: "onTouchMove",
                ON_TOUCH_END: "onTouchEnd",
                ON_TOUCH_CANCEL: "onTouchCancel"
            },
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.receiveNode = null, e.sendMode = i.ONE_TARGET, e.isSendTouchEvent = !0, e.isSendCollisionEvent = !0, e.extraParams = [], e
                }
                return __extends(e, t), e.prototype.onLoad = function() {}, e.prototype.onEnable = function() {
                    !0 === this.isSendTouchEvent && (this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0))
                }, e.prototype.onDisable = function() {
                    !0 === this.isSendTouchEvent && (this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0))
                }, e.prototype.start = function() {}, e.prototype.onTouchStart = function(t) {
                    this.sendEvent(c.ON_TOUCH_START, t)
                }, e.prototype.onTouchMove = function(t) {
                    this.sendEvent(c.ON_TOUCH_MOVE, t)
                }, e.prototype.onTouchEnd = function(t) {
                    this.sendEvent(c.ON_TOUCH_END, t)
                }, e.prototype.onTouchCancel = function(t) {
                    this.sendEvent(c.ON_TOUCH_CANCEL, t)
                }, e.prototype.sendEvent = function(t, e, o, n, a, r) {
                    if ("" != t && t) switch (this.sendMode) {
                        case i.ONE_TARGET:
                            this.receiveNode.emit(t, e, o, n, a, r);
                            break;
                        case i.MULTIPLE_TARGET:
                            var s = new cc.Event.EventCustom(t, !0);
                            s.setUserData(this.extraParams), this.node.dispatchEvent(s);
                            break;
                        case i.CC_DIRECTOR:
                            cc.director.emit(t, e, o, n, a, r)
                    }
                }, e.prototype.sendDirector = function(t, e) {
                    var o = this.extraParams;
                    cc.director.emit(e, o[0], o[1], o[2], o[3], o[4])
                }, e.prototype.onCollisionEnter = function(t, e) {
                    !1 !== this.isSendCollisionEvent && this.receiveNode.emit("onCollisionEnter", t, e)
                }, e.prototype.onCollisionStay = function(t, e) {
                    !1 !== this.isSendCollisionEvent && this.receiveNode.emit("onCollisionStay", t, e)
                }, e.prototype.onCollisionExit = function(t, e) {
                    !1 !== this.isSendCollisionEvent && this.receiveNode.emit("onCollisionExit", t, e)
                }, e.EVENTS = c, __decorate([r({
                    tooltip: "\u63a5\u53d7\u4fe1\u606f\u7684\u8282\u70b9",
                    type: cc.Node,
                    visible: function() {
                        return this.sendMode === i.ONE_TARGET
                    }
                })], e.prototype, "receiveNode", void 0), __decorate([r({
                    tooltip: "ONE_TARGET = \u53d1\u9001\u4fe1\u606f\u7ed9\u4e00\u4e2a\u6307\u5b9a\u8282\u70b9,\nMULTIPLE_TARGET = \u5e7f\u64ad\u7ed9\u7236\u8282\u70b9,\nCC_DIRECTOR =\u4f20\u9012\u7ed9cc.director",
                    type: cc.Enum(i)
                })], e.prototype, "sendMode", void 0), __decorate([r({
                    displayName: "Send TouchEvent",
                    tooltip: "\u662f\u5426\u4f20\u9012 \u70b9\u51fb\u8be5\u5bf9\u8c61\u7684\u76d1\u542c\u4e8b\u4ef6"
                })], e.prototype, "isSendTouchEvent", void 0), __decorate([r({
                    displayName: "Send CollisionEvent",
                    tooltip: "\u662f\u5426\u4f20\u9012\u8be5\u5bf9\u8c61\u7684\u78b0\u649e\u76d1\u542c\u4e8b\u4ef6"
                })], e.prototype, "isSendCollisionEvent", void 0), __decorate([r({
                    type: [cc.String]
                })], e.prototype, "extraParams", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Event Sender(\u4e8b\u4ef6\u8f6c\u53d1\u5668)")], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BhvFade: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "069fdgwl1NLmY/O6E7gNxhk", "BhvFade"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.disallowMultiple,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.activeAtStart = !0, e.fadeInTime = 0, e.waitTime = 0, e.fadeOutTime = 1, e.fadeEvent = [], e.autoDestroy = !0, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.fadeInTime > 0 && (this.node.opacity = 0)
                }, e.prototype.start = function() {
                    this.activeAtStart && this.startFade()
                }, e.prototype.startFade = function() {
                    var t = this.fadeInTime || 0,
                        e = this.waitTime || 0,
                        o = this.fadeOutTime || 0;
                    this.node.stopActionByTag(99999), this.fade(t, e, o)
                }, e.prototype.fade = function(t, e, o) {
                    var i = this,
                        n = [];
                    t > 0 && (this.node.opacity = 0), t > 0 && n.push(cc.fadeIn(t)), e > 0 && n.push(cc.delayTime(e)), o > 0 && n.push(cc.fadeOut(o)), o > 0 && n.push(cc.callFunc(function() {
                        i.onFadeFinish(), i.autoDestroy && i.destroy
                    }, this));
                    var a = cc.sequence(n);
                    a.setTag(99999), this.node.runAction(a)
                }, e.prototype.onFadeFinish = function() {
                    this.fadeEvent.length < 1 || this.fadeEvent.forEach(function(t) {
                        t.emit([t.customEventData])
                    })
                }, __decorate([a({
                    tooltip: "\u4f1a\u5728 start \u65f6\u89e6\u53d1 fade \u6548\u679c"
                })], e.prototype, "activeAtStart", void 0), __decorate([a({
                    tooltip: "\u6e10\u5165\u65f6\u95f4"
                })], e.prototype, "fadeInTime", void 0), __decorate([a({
                    tooltip: "\u7b49\u5f85\u65f6\u95f4"
                })], e.prototype, "waitTime", void 0), __decorate([a({
                    tooltip: "\u6de1\u51fa\u65f6\u95f4"
                })], e.prototype, "fadeOutTime", void 0), __decorate([a({
                    type: [cc.Component.EventHandler]
                })], e.prototype, "fadeEvent", void 0), __decorate([a({
                    tooltip: "\u5b8c\u6210\u540e\u662f\u5426destroy\u8be5\u8282\u70b9"
                })], e.prototype, "autoDestroy", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/Fade (\u6e10\u9690\u6e10\u663e)"), s], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvFrameIndex: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c238ewfJ2VJnZ8Gb8YQs5Ts", "BhvFrameIndex"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.executeInEditMode,
            s = i.requireComponent,
            c = i.menu,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.spriteFrames = [null], e._index = 0, e
                }
                return __extends(e, t), Object.defineProperty(e.prototype, "index", {
                    get: function() {
                        return this._index
                    },
                    set: function(t) {
                        t < 0 || (this._index = t % this.spriteFrames.length, this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[this._index])
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.setName = function(t) {
                    var e = this.spriteFrames.findIndex(function(e) {
                        return e.name == t
                    });
                    e < 0 && cc.error("frameIndex \u8bbe\u7f6e\u4e86\u4e0d\u5b58\u5728\u7684name:", t), this.index = e || 0
                }, e.prototype.random = function(t, e) {
                    if (this.spriteFrames) {
                        var o = this.spriteFrames.length;
                        (null == t || t < 0) && (t = 0), (null == e || e > o) && (e = o), this.index = Math.floor(Math.random() * (e - t) + t)
                    }
                }, e.prototype.next = function() {
                    this.index++
                }, e.prototype.previous = function() {
                    this.index--
                }, __decorate([a({
                    type: [cc.SpriteFrame],
                    tooltip: "sprite\u5c06\u4f1a\u7528\u5230\u5e27\u56fe\u7247"
                })], e.prototype, "spriteFrames", void 0), __decorate([a({
                    tooltip: "\u5f53\u524d\u663e\u793a\u7684\u5e27\u56fe",
                    type: cc.Integer
                })], e.prototype, "index", null), __decorate([a], e.prototype, "_index", void 0), e = __decorate([n, r, s(cc.Sprite), c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Frame Index(\u5e27\u56fe\u6539\u53d8)")], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BhvGroupToggle: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "15c78SZuAFAcI4pD90gIZmv", "BhvGroupToggle"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.executeInEditMode,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._index = 0, e.componentName = "", e.componentProperty = "", e.componentSelectValue = "", e.componentUnSelectValue = "", e
                }
                return __extends(e, t), Object.defineProperty(e.prototype, "index", {
                    get: function() {
                        return this._index
                    },
                    set: function(t) {
                        t < 0 && (t = this.node.childrenCount - 1), this._index = t % this.node.childrenCount, this.setChildrenState(this._index)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.setByName = function(t) {
                    var e = this.node.children.findIndex(function(e) {
                        return e.name == t
                    });
                    e < 0 ? cc.error("frameIndex \u8bbe\u7f6e\u4e86\u4e0d\u5b58\u5728\u7684\u8282\u70b9:", t) : this.index = e || 0
                }, e.prototype.setEventIndex = function(t, e) {
                    this.index = parseInt(e)
                }, e.prototype.setEventName = function(t, e) {
                    this.setByName(e)
                }, e.prototype.next = function() {
                    this.index++
                }, e.prototype.previous = function() {
                    this.index--
                }, e.prototype.setChildrenState = function(t) {
                    var e = this;
                    "" !== this.componentName && "" !== this.componentProperty && this.node.children.forEach(function(o, i) {
                        var n = t === i;
                        if ("cc.Node" === e.componentName) e.componentProperty;
                        else {
                            var a = o.getComponent(e.componentName),
                                r = n ? e.componentSelectValue : e.componentUnSelectValue;
                            if (null == a || e.componentProperty in a == !1) return void(a ? cc.error(e.componentProperty + "is not in" + a.name) : cc.error("cant find comp " + e.componentName + " in " + o.name));
                            switch (typeof a[e.componentProperty]) {
                                case "boolean":
                                    a[e.componentProperty] = 1 == r;
                                    break;
                                case "number":
                                    a[e.componentProperty] = parseFloat(r);
                                    break;
                                case "string":
                                    a[e.componentProperty] = r
                            }
                        }
                    })
                }, __decorate([a], e.prototype, "_index", void 0), __decorate([a({
                    type: cc.Integer
                })], e.prototype, "index", null), __decorate([a], e.prototype, "componentName", void 0), __decorate([a], e.prototype, "componentProperty", void 0), __decorate([a], e.prototype, "componentSelectValue", void 0), __decorate([a], e.prototype, "componentUnSelectValue", void 0), e = __decorate([n, r], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    BhvGroupTween: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2e7fdfblndCDajL9eCXVNo6", "BhvGroupTween"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../utils/commonTween"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.delayTime = 0, e.easeTime = 0, e.delayTimeOffset = 0, e.reverseOrder = !1, e.animationType = i.ANI_ACTION_TYPE.SCALE, e.easeType = i.EASE_TYPE.SineInOut, e.tweenNodes = [], e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.tweenNodes.length <= 0 && (this.tweenNodes = this.tweenNodes.concat(this.node.children))
                }, e.prototype.start = function() {
                    var t = this;
                    this.node.opacity = 0, this.scheduleOnce(function() {
                        t.node.opacity = 255, t.playIn()
                    }, .1)
                }, e.prototype.runTweenAction = function(t, e, o) {
                    void 0 === o && (o = !1);
                    var n = this.reverseOrder ? this.node.children.length - 1 - e : e,
                        a = this.delayTime + this.delayTimeOffset * n,
                        r = {
                            type: this.animationType,
                            time: this.easeTime,
                            isActionOut: o,
                            ease: this.easeType,
                            node: t,
                            width: this.node.width,
                            height: this.node.height,
                            delay: a
                        },
                        s = i.TweenConfig.getAction(r);
                    t.runAction(s)
                }, e.prototype.playIn = function() {
                    var t = this;
                    this.tweenNodes.forEach(function(e, o) {
                        t.runTweenAction(e, o, !1)
                    })
                }, e.prototype.playOut = function() {
                    var t = this;
                    this.tweenNodes.forEach(function(e, o) {
                        t.runTweenAction(e, o, !0)
                    })
                }, __decorate([r({
                    tooltip: "\u5ef6\u8fdf\u51b3\u5b9a\uff0c\u4ec0\u4e48\u65f6\u5019\u64ad\u653etween\u52a8\u753b"
                })], e.prototype, "delayTime", void 0), __decorate([r({
                    tooltip: "\u52a8\u753b\u65f6\u95f4"
                })], e.prototype, "easeTime", void 0), __decorate([r({
                    tooltip: "\u5bf9\u4e8e\u9700\u8981tween\u7684\u8282\u70b9\uff0c\u4e0e\u4e4b\u524d\u4e00\u4e2a\u8282\u70b9\u76f8\u95f4\u9694\u7684\u65f6\u95f4"
                })], e.prototype, "delayTimeOffset", void 0), __decorate([r], e.prototype, "reverseOrder", void 0), __decorate([r({
                    type: cc.Enum(i.ANI_ACTION_TYPE),
                    tooltip: "\u5165\u53e3\u52a8\u753b",
                    displayName: "Animation Type"
                })], e.prototype, "animationType", void 0), __decorate([r({
                    type: cc.Enum(i.EASE_TYPE),
                    tooltip: "\u5165\u53e3\u52a8\u753b \u7684 TWEEN \u7c7b\u578b",
                    displayName: "Animation Tween"
                })], e.prototype, "easeType", void 0), __decorate([r([cc.Node])], e.prototype, "tweenNodes", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Animate/Group Tween (\u7ec4tween)")], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {
        "./../utils/commonTween": "commonTween"
    }],
    BhvIconFlyTo: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "49bedpCxINC44kVrhjcYfpI", "BhvIconFlyTo"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu;
        (function(t) {
            t[t.LIEN_TO = 0] = "LIEN_TO", t[t.JUMP_TO = 1] = "JUMP_TO"
        })(i || (i = {}));
        var c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.texture = null, e.startNode = null, e.emitTarget = null, e.putParent = null, e.custom = !0, e.type = i.LIEN_TO, e.generateTime = .5, e.animationTime = .5, e.jumpCount = 1, e.jumpHeight = 100, e.jumpHeightVar = 100, e.arriveTargetEvent = [], e.pool = new cc.NodePool, e
            }
            return __extends(e, t), e.prototype.createNode = function() {
                var t = this.putParent || cc.find("Canvas"),
                    e = this.pool.get() || new cc.Node,
                    o = e.getComponent(cc.Sprite);
                return null == o && (o = e.addComponent(cc.Sprite)), e.stopAllActions(), o.spriteFrame = this.texture, t.addChild(e), e.position = cc.v2(0, 0), e.zIndex = 1e3, e.opacity = 0, e
            }, e.prototype.moveTo = function(t, e, o) {
                var n = this;
                void 0 === o && (o = 1);
                var a, r = t.getParent().convertToNodeSpaceAR(e);
                a = this.type === i.LIEN_TO ? cc.moveTo(1 * o, r).easing(cc.easeSineInOut()) : cc.jumpTo(1 * o, r, this.jumpHeight + (2 * Math.random() - 1) * this.jumpHeightVar, this.jumpCount).easing(cc.easeSineInOut());
                var s = cc.spawn([a, cc.sequence([cc.fadeIn(.2 * o), cc.delayTime(.6 * o), cc.fadeOut(.2 * o)])]);
                t.runAction(cc.sequence([s, cc.callFunc(function() {
                    n.arriveTargetEvent.forEach(function(t, e) {
                        t.emit([t.customEventData])
                    }), n.pool.put(t)
                })]))
            }, e.prototype.setConfig = function(t) {
                this.type = t.type, this.jumpCount = t.jumpCount, this.jumpHeight = t.jumpHeight, this.jumpHeightVar = t.jumpHeightVar, this.animationTime = t.aniTime, this.generateTime = t.generateTime
            }, e.prototype.create = function(t, e, o) {
                var i = this;
                null == o && this.emitTarget && (o = this.emitTarget.convertToWorldSpaceAR(cc.Vec2.ZERO)), null == e && (e = this.startNode ? this.startNode.convertToWorldSpaceAR(cc.Vec2.ZERO) : this.node.convertToWorldSpaceAR(cc.Vec2.ZERO)), this.schedule(function() {
                    var t = i.createNode();
                    t.position = t.getParent().convertToNodeSpaceAR(e), i.moveTo(t, o, i.animationTime)
                }, this.generateTime / t, t - 1)
            }, e.prototype.onDestroy = function() {
                this.pool.clear(), this.pool = null
            }, __decorate([r(cc.SpriteFrame)], e.prototype, "texture", void 0), __decorate([r({
                tooltip: "\u53d1\u5c04\u8d77\u70b9\u7684\u5750\u6807",
                type: cc.Node
            })], e.prototype, "startNode", void 0), __decorate([r({
                tooltip: "\u9700\u8981\u53d1\u5c04\u5230\u54ea\u4e2a\u5bf9\u8c61\u7684\u4f4d\u7f6e\u4e0a",
                type: cc.Node
            })], e.prototype, "emitTarget", void 0), __decorate([r({
                type: cc.Node,
                tooltip: "\u653e\u7f6e\u5230\u54ea\u4e2aparent\u91cc?\u9ed8\u8ba4\u4e3aCanvas \u8282\u70b9"
            })], e.prototype, "putParent", void 0), __decorate([r({
                tooltip: "\u662f\u5426\u5728\u7f16\u8f91\u5668\u4e2d\u914d\u7f6e\u52a8\u753b\u5c5e\u6027"
            })], e.prototype, "custom", void 0), __decorate([r({
                type: cc.Enum(i),
                visible: function() {
                    return this.custom
                }
            })], e.prototype, "type", void 0), __decorate([r({
                tooltip: "\u4ea7\u751f\u82b1\u8d39\u7684\u65f6\u95f4",
                visible: function() {
                    return this.custom
                }
            })], e.prototype, "generateTime", void 0), __decorate([r({
                tooltip: "\u52a8\u753b\u64ad\u653e\u7684\u65f6\u95f4",
                visible: function() {
                    return this.custom
                }
            })], e.prototype, "animationTime", void 0), __decorate([r({
                type: cc.Integer,
                visible: function() {
                    return this.custom && this.type === i.JUMP_TO
                }
            })], e.prototype, "jumpCount", void 0), __decorate([r({
                type: cc.Integer,
                visible: function() {
                    return this.custom && this.type === i.JUMP_TO
                }
            })], e.prototype, "jumpHeight", void 0), __decorate([r({
                type: cc.Integer,
                visible: function() {
                    return this.custom && this.type === i.JUMP_TO
                }
            })], e.prototype, "jumpHeightVar", void 0), __decorate([r({
                type: [cc.Component.EventHandler],
                tooltip: "\u8fbe\u5230\u76ee\u6807\u70b9\u89e6\u53d1\u4e00\u6b21\u4e8b\u4ef6"
            })], e.prototype, "arriveTargetEvent", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Animate/Icon FlyTo")], e)
        }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvInputArea: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2816dkUBYhEXonoYqNsSEXt", "BhvInputArea"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.disallowMultiple,
            s = i.menu,
            c = i.executionOrder,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tag = "", e.isTouching = !1, e.isOverArea = !1, e.startTouchId = 0, e.duration = 0, e
                }
                var o;
                return __extends(e, t), o = e, e.find = function(t) {
                    var e = this._TempComps.find(function(e) {
                        return e.tag === t
                    });
                    if (e) return e.comp
                }, e.prototype.onLoad = function() {
                    o._TempComps.push({
                        tag: this.tag,
                        comp: this
                    })
                }, e.prototype.onEnable = function() {
                    var t = this.node;
                    t.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0), t.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0), t.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0), t.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0), t.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this), t.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this)
                }, e.prototype.onDisable = function() {
                    var t = this.node;
                    t.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0), t.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0), t.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0), t.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0), t.off(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this, !0), t.off(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this, !0)
                }, e.prototype.onMouseEnter = function(t) {
                    this.isOverArea = !0
                }, e.prototype.onMouseLeave = function(t) {
                    this.isOverArea = !1
                }, e.prototype.onTouchStart = function(t) {
                    this.startTouchId = t.getID(), this.isTouching = !0
                }, e.prototype.onTouchMove = function(t) {
                    t.getID() === this.startTouchId && (this.isTouching = !0)
                }, e.prototype.onTouchEnd = function(t) {
                    t.getID() === this.startTouchId && (this.isTouching = !1)
                }, e.prototype.onTouchCancel = function(t) {
                    t.getID() === this.startTouchId && (this.isTouching = !1)
                }, e.prototype.onDestroy = function() {
                    var t = this,
                        e = o._TempComps.findIndex(function(e) {
                            return e.comp === t
                        });
                    o._TempComps.splice(e)
                }, e.prototype.update = function(t) {
                    this.isTouching && (this.duration += t)
                }, e._TempComps = [], __decorate([a], e.prototype, "tag", void 0), e = o = __decorate([n, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/Input Area (\u8f93\u5165\u533a\u57df)"), r, c(-1)], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BhvKeyboard: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d2ebaLC3k9J7Z2mt2KzQeaw", "BhvKeyboard"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.executionOrder,
            c = {
                KEY_DOWN: "down",
                KEY_UP: "up"
            },
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.debug = !1, e.events = new cc.EventTarget, e._onBlurCallback = null, e.keyMap = new Map, e.keyTimes = new Map, e.triggerKey = 0, e._timer = 0, e.keysToBlockWhenFramed = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44], e
                }
                var o;
                return __extends(e, t), o = e, e.find = function() {
                    return this.Instance
                }, e.prototype.onLoad = function() {
                    this._timer = 0, o.Instance = this
                }, e.prototype.onEnable = function() {
                    var t = this;
                    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this), cc.game.on(cc.game.EVENT_HIDE, this.onWindowBlur, this), cc.sys.isBrowser && (this._onBlurCallback = null, this._onBlurCallback = function() {
                        t.onWindowBlur()
                    }, cc.game.canvas.addEventListener("blur", this._onBlurCallback))
                }, e.prototype.onDisable = function() {
                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this), this._onBlurCallback && cc.sys.isBrowser && cc.game.canvas.removeEventListener("blur", this._onBlurCallback)
                }, e.prototype.onWindowBlur = function() {
                    var t = this;
                    this.keyMap.forEach(function(e, o) {
                        e && (t.keyMap.set(o, !1), t.keyTimes.delete(o), t.triggerKey = o)
                    })
                }, e.prototype.sendEvent = function(t) {
                    var e = new cc.Event.EventCustom(t, !0);
                    this.node.dispatchEvent(e)
                }, e.prototype._keyDown = function(t) {
                    var e;
                    this.keyMap.get(t) || (this.keyMap.set(t, !0), this.keyTimes.get(t) && (e = Math.floor(1e3 * (this._timer - this.keyTimes.get(t))) / 1e3), this.keyTimes.set(t, this._timer), this.triggerKey = t, this.events.emit(c.KEY_DOWN + t, e), this.debug && cc.log("\u6309\u4e0b:", this.getKeyName(t), e))
                }, e.prototype._keyUp = function(t) {
                    this.keyMap.set(t, !1), this.keyTimes.set(t, this._timer);
                    var e = Math.floor(this._timer - 1e3 * this.keyTimes.get(t)) / 1e3;
                    this.triggerKey = t, this.events.emit(c.KEY_UP + t, e), this.debug && cc.log("\u91ca\u653e:", this.getKeyName(t), e)
                }, e.prototype.onKeyDown = function(t) {
                    var e = t.keyCode;
                    cc.macro.KEY;
                    window != window.top && this.keysToBlockWhenFramed.indexOf(e) > -1 && t.stopPropagation(), this._keyDown(e)
                }, e.prototype.onKeyUp = function(t) {
                    var e = t.keyCode;
                    cc.macro.KEY;
                    this._keyUp(e)
                }, e.prototype.getKeyDuration = function(t) {
                    if (!this.keyMap.get(t)) return 0;
                    var e = this.keyTimes.get(t);
                    if (void 0 == e || e > this._timer) return 0;
                    var o = this._timer - e;
                    return o = Math.floor(1e3 * o) / 1e3
                }, e.prototype.IsKeyDown = function(t) {
                    return this.keyMap.get(t)
                }, Object.defineProperty(e.prototype, "lastKey", {
                    get: function() {
                        return this.triggerKey
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "lastKeyName", {
                    get: function() {
                        return this.getKeyName(this.triggerKey)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getKeyName = function(t) {
                    return h(t)
                }, e.prototype.simKeyUp = function(t) {
                    this.keyMap.get(t) || (this.keyMap.set(t, !0), this.triggerKey = t, this._keyUp(t))
                }, e.prototype.simKeyDown = function(t) {
                    this.keyMap.set(t, !1), this.triggerKey = t, this._keyDown(t)
                }, e.prototype.update = function(t) {
                    this._timer += t
                }, e.prototype.onDestroy = function() {
                    o.Instance = null
                }, e.KEY = cc.macro.KEY, e.SIGNAL = c, e.Instance = null, __decorate([a({
                    tooltip: "\u8c03\u8bd5\u6309\u952e\u4fe1\u606f"
                })], e.prototype, "debug", void 0), e = o = __decorate([n, r("\u6dfb\u52a0\u5168\u5c40\u63d2\u4ef6/Input/BhvKeyboard"), s(-1)], e)
            }(cc.Component);

        function h(t) {
            switch (t = Math.floor(t)) {
                case 8:
                    return "backspace";
                case 9:
                    return "tab";
                case 13:
                    return "enter";
                case 16:
                    return "shift";
                case 17:
                    return "control";
                case 18:
                    return "alt";
                case 19:
                    return "pause";
                case 20:
                    return "capslock";
                case 27:
                    return "esc";
                case 33:
                    return "pageup";
                case 34:
                    return "pagedown";
                case 35:
                    return "end";
                case 36:
                    return "home";
                case 37:
                    return "\u2190";
                case 38:
                    return "\u2191";
                case 39:
                    return "\u2192";
                case 40:
                    return "\u2193";
                case 45:
                    return "insert";
                case 46:
                    return "del";
                case 91:
                    return "left window key";
                case 92:
                    return "right window key";
                case 93:
                    return "select";
                case 96:
                    return "numpad 0";
                case 97:
                    return "numpad 1";
                case 98:
                    return "numpad 2";
                case 99:
                    return "numpad 3";
                case 100:
                    return "numpad 4";
                case 101:
                    return "numpad 5";
                case 102:
                    return "numpad 6";
                case 103:
                    return "numpad 7";
                case 104:
                    return "numpad 8";
                case 105:
                    return "numpad 9";
                case 106:
                    return "numpad *";
                case 107:
                    return "numpad +";
                case 109:
                    return "numpad -";
                case 110:
                    return "numpad .";
                case 111:
                    return "numpad /";
                case 112:
                    return "F1";
                case 113:
                    return "F2";
                case 114:
                    return "F3";
                case 115:
                    return "F4";
                case 116:
                    return "F5";
                case 117:
                    return "F6";
                case 118:
                    return "F7";
                case 119:
                    return "F8";
                case 120:
                    return "F9";
                case 121:
                    return "F10";
                case 122:
                    return "F11";
                case 123:
                    return "F12";
                case 144:
                    return "numlock";
                case 145:
                    return "scroll lock";
                case 186:
                    return ";";
                case 187:
                    return "=";
                case 188:
                    return ",";
                case 189:
                    return "-";
                case 190:
                    return ".";
                case 191:
                    return "/";
                case 192:
                    return "'";
                case 219:
                    return "[";
                case 220:
                    return "\\";
                case 221:
                    return "]";
                case 222:
                    return "#";
                case 223:
                    return "`";
                case 1005:
                    return "DPadCenter";
                case 1004:
                    return "DPadDown";
                case 1e3:
                    return "DPadLeft";
                case 1001:
                    return "DPadRight";
                case 1003:
                    return "DPadUp";
                default:
                    return String.fromCharCode(t)
            }
        }
        o.default = l, cc._RF.pop()
    }, {}],
    BhvLayoutCircle: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4b4b1isfWhM6rYICDHzBk+N", "BhvLayoutCircle"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.executeInEditMode,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.radius = cc.v2(32, 32), e.startAngle = 0, e.isUpdateByCountChange = !1, e._preChildCount = 0, e
                }
                return __extends(e, t), e.prototype.start = function() {}, e.prototype.updateContent = function() {
                    for (var t = this.node.children, e = (this.node.position, this.node.childrenCount), o = this.startAngle, i = 360 / e, n = 0; n < t.length; n++) {
                        var a = t[n],
                            r = o + i * n,
                            s = this.radius.x * Math.cos(cc.misc.degreesToRadians(r)),
                            c = this.radius.y * Math.sin(cc.misc.degreesToRadians(r));
                        a.x = s, a.y = c
                    }
                }, e.prototype.update = function(t) {
                    this._preChildCount === this.node.childrenCount && !0 !== this.isUpdateByCountChange || (this._preChildCount = this.node.childrenCount, this.updateContent())
                }, __decorate([a], e.prototype, "radius", void 0), __decorate([a], e.prototype, "startAngle", void 0), __decorate([a({
                    tooltip: "\u662f\u5426\u5f53\u5bb9\u5668\u5185\u6570\u91cf\u53d1\u751f\u53d8\u5316\u65f6\u624d\u66f4\u65b0\u5750\u6807",
                    displayName: "Update When Count Change "
                })], e.prototype, "isUpdateByCountChange", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Layout Circle (\u5706\u5e03\u5c40)"), s], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvLine: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "722ee2ZT2tBgIwkIfM0kqg3", "BhvLine"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.disallowMultiple,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.startNode = null, e.endNode = null, e
                }
                return __extends(e, t), e.prototype.start = function() {
                    this.startNode && this.endNode && this.setLine(this.startNode, this.endNode)
                }, e.prototype.setLine = function(t, e) {
                    this.startNode && this.endNode && (this.node.anchorX = 0, this.node.anchorY = .5, this.startNode = t, this.endNode = e)
                }, e.prototype.update = function() {
                    if (this.startNode && this.endNode) {
                        var t = this.startNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
                            e = this.endNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
                            o = t.sub(e).mag(),
                            i = Math.atan2(e.y - t.y, e.x - t.x);
                        this.node.position = this.node.getParent().convertToNodeSpaceAR(t), this.node.width = o, this.node.rotation = -1 * cc.misc.radiansToDegrees(i)
                    }
                }, __decorate([a(cc.Node)], e.prototype, "startNode", void 0), __decorate([a(cc.Node)], e.prototype, "endNode", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/Line (\u8fde\u7ebf)"), s], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvMoveTo: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "28ebfGgG/tPhYmgRddQDiFH", "BhvMoveTo"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = {
                ON_COMPLETED: "onMoveToFinished"
            },
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu,
            c = n.disallowMultiple,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.targetNode = null, e._target = cc.v2(0, 0), e._isRunning = !0, e.activeAtStart = !1, e.speed = 200, e.speedMax = 200, e.acceleration = 0, e.rotateToTarget = !0, e.closeLimitRange = .001, e.reverseMoving = !1, e
                }
                return __extends(e, t), e.prototype.start = function() {
                    this.activeAtStart && (this._isRunning = !0)
                }, e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {}, e.prototype.setSpeed = function(t, e, o) {
                    void 0 === t && (t = 200), void 0 === e && (e = 500), void 0 === o && (o = 500), this.speed = t, this.speedMax = e, this.acceleration = o
                }, e.prototype.moveToTarget = function(t) {
                    this.targetNode = t, this._isRunning = !0
                }, e.prototype.moveTo = function(t) {
                    this._target = t, this._isRunning = !0
                }, e.prototype.stop = function() {
                    this._isRunning = !1
                }, e.prototype.updateTarget = function() {
                    this.targetNode && (this._target = this.targetNode.position)
                }, e.prototype.update = function(t) {
                    if (this.enabled && this._isRunning) {
                        this.updateTarget();
                        var e = this.closeLimitRange || 1e-4,
                            o = this.node,
                            i = o.x,
                            n = o.y,
                            a = this._target.x,
                            r = this._target.y;
                        if (this.speed += this.acceleration * t, this.speed >= this.speedMax && (this.speed = this.speedMax), this.speed < 0 && (this.speed = 0), Math.abs(i - a) < e && Math.abs(n - r) < e && (this._isRunning = !1, this.onComplete()), 0 !== this.speed && 0 !== t) {
                            var s, c, l = this.speed * t,
                                h = cc.v2(i, n).sub(cc.v2(a, r)).mag();
                            if (l < h) {
                                var p = l / h;
                                s = cc.misc.lerp(i, a, p), c = cc.misc.lerp(n, r, p)
                            } else s = a, c = r;
                            this.node.x = s, this.node.y = c, this.rotateToTarget && (this.node.rotation = cc.misc.radiansToDegrees(Math.atan2(n - c, i - s)))
                        }
                    }
                }, e.prototype.onComplete = function() {
                    this.node.emit(i.ON_COMPLETED)
                }, e.EVENTS = i, __decorate([r({
                    type: cc.Node
                })], e.prototype, "targetNode", void 0), __decorate([r({
                    visible: function() {
                        return null != this.targetNode
                    }
                })], e.prototype, "activeAtStart", void 0), __decorate([r({
                    tooltip: "\u8d77\u59cb\u901f\u5ea6"
                })], e.prototype, "speed", void 0), __decorate([r({
                    tooltip: "\u6700\u5927\u901f\u5ea6"
                })], e.prototype, "speedMax", void 0), __decorate([r({
                    tooltip: "\u52a0\u901f\u5ea6"
                })], e.prototype, "acceleration", void 0), __decorate([r({
                    tooltip: "\u662f\u5426\u5728moveto \u65f6\u7528\u89d2\u5ea6\u671d\u5411\u79fb\u52a8\u65b9\u5411"
                })], e.prototype, "rotateToTarget", void 0), __decorate([r({
                    tooltip: "\u6781\u9650\u8ddd\u79bb\uff0c\u5f53\u5c0f\u4e8e\u8be5\u8ddd\u79bb\u65f6,\u5224\u65ad\u79fb\u52a8\u7ed3\u675f\uff08\u6ce8\u610f\u4e0d\u80fd\u8bbe\u4e3a0\u503c\uff09"
                })], e.prototype, "closeLimitRange", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Movement/MoveTo (\u79fb\u52a8\u5230\u67d0\u5904)"), c], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BhvPin: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "deeddYb+59NI7/yb6p9CZFo", "BhvPin"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu,
            c = n.disallowMultiple,
            l = n.executeInEditMode;
        (function(t) {
            t[t.positionAngle = 0] = "positionAngle", t[t.position = 1] = "position", t[t.angle = 2] = "angle", t[t.rope = 3] = "rope", t[t.bar = 4] = "bar"
        })(i || (i = {}));
        var h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.pinObject = null, e.mode = i.positionAngle, e.PIN_TYPE = i, e
            }
            return __extends(e, t), e.prototype.start = function() {
                this.pinAngle = 0, this.pinDist = 0, this.myStartRotation = 0, this.theirStartRotation = 0, this.lastKnownAngle = 0, this.pinObject && this.pin(this.pinObject)
            }, e.prototype.update = function() {
                var t = 0,
                    e = 0,
                    o = this.node.position,
                    i = this.pinObject.position;
                if (3 === this.mode || 4 === this.mode) {
                    var n = this.distanceTo(o.x, o.y, i.x, i.y);
                    if (n > this.pinDist || 4 === this.mode && n < this.pinDist) {
                        var a = this.angleTo(i.x, i.y, o.x, o.y),
                            r = cc.misc.degreesToRadians(a);
                        t = i.x + Math.cos(r) * this.pinDist, e = i.y - Math.sin(r) * this.pinDist
                    }
                } else {
                    a = this.pinObject.rotation + this.pinAngle, r = cc.misc.degreesToRadians(a);
                    t = i.x + Math.cos(r) * this.pinDist, e = i.y - Math.sin(r) * this.pinDist
                }
                var s = this.myStartRotation + (this.pinObject.rotation - this.theirStartRotation);
                this.lastKnownAngle = s, 0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.node.x === t && this.node.y === e || (this.node.x = t, this.node.y = e), 0 !== this.mode && 2 !== this.mode || this.node.rotation === s || (this.node.rotation = s)
            }, e.prototype.pin = function(t, e) {
                this.pinObject = t, this.pinAngle = this.angleTo(t.x, t.y, this.node.x, this.node.y) - t.rotation, this.pinDist = this.distanceTo(t.x, t.y, this.node.x, this.node.y), this.myStartRotation = this.node.rotation, this.lastKnownAngle = this.node.rotation, this.theirStartRotation = t.rotation, this.mode = e || 0
            }, e.prototype.unpin = function() {
                this.pinObject = null
            }, e.prototype.getNodePos = function(t, e) {
                "string" == typeof t && (t = cc.find(t)), "string" == typeof e && (e = cc.find(e));
                var o = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
                return e.convertToNodeSpaceAR(o)
            }, e.prototype.distanceTo = function(t, e, o, i) {
                var n = t - o,
                    a = e - i;
                return Math.sqrt(n * n + a * a)
            }, e.prototype.angleTo = function(t, e, o, i) {
                return Math.atan2(i - e, o - t)
            }, e.prototype.onDestroy = function() {
                this.pinObject = null
            }, __decorate([r({
                type: cc.Node,
                tooltip: "\u9700\u8981pin\u5728\u7684\u5bf9\u8c61\u4e0a,\u53ef\u4ee5\u65e0\u89c6\u5c42\u7ea7\u7684\u7ed1\u5b9a \u4e24\u4e2a\u8282\u70b9\u7684\u4f4d\u7f6e\u5173\u7cfb"
            })], e.prototype, "pinObject", void 0), __decorate([r({
                type: cc.Enum(i)
            })], e.prototype, "mode", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/Pin (\u56fe\u9489)"), c, l], e)
        }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {}],
    BhvPlatform: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4db05XPPcJB0rYn5Xbsdmdh", "BhvPlatform"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = (i.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.enableCollide = !1, e
                }
                return __extends(e, t), e.prototype.start = function() {}, e = __decorate([n], e)
            }(cc.Component));
        o.default = a, cc._RF.pop()
    }, {}],
    BhvPopAnimate: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "37b27k5GTNJNJjbOURXiZgq", "BhvPopAnimate"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = t("./../utils/commonTween"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = a.disallowMultiple,
            h = n.TweenConfig.getTweenType;
        (function(t) {
            t[t.NONE = 0] = "NONE", t[t.FADE = 1] = "FADE", t[t.SCALE = 2] = "SCALE", t[t.SPREAD = 3] = "SPREAD", t[t.FLIP_WIDTH = 4] = "FLIP_WIDTH", t[t.FLIP_HEIGHT = 5] = "FLIP_HEIGHT", t[t.MOVE_UP = 6] = "MOVE_UP", t[t.MOVE_DOWN = 7] = "MOVE_DOWN", t[t.MOVE_RIGHT = 8] = "MOVE_RIGHT", t[t.MOVE_LEFT = 9] = "MOVE_LEFT"
        })(i || (i = {}));
        var p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.animationPopIn = i.SCALE, e.animationPopOut = i.SCALE, e.easePopIn = n.EASE_TYPE.SineInOut, e.easePopOut = n.EASE_TYPE.SineInOut, e.animateSpeed = 1, e.darkMask = null, e.target = null, e.isFadeoutDestroy = !0, e.isStartAnimate = !0, e.isAutoOutAnimation = !1, e.autoPlayWaitTime = .5, e.isPlaying = !1, e.getTweenType = h, e
            }
            return __extends(e, t), e.prototype.onLoad = function() {
                this.onPlayAnimationIn()
            }, e.prototype.onEnable = function() {
                this.node.on("pop-animate-in", this.onPlayAnimationIn, this), this.node.on("pop-animate-out", this.onPlayAnimationOut, this)
            }, e.prototype.onDisable = function() {
                this.node.off("pop-animate-in", this.onPlayAnimationIn, this), this.node.off("pop-animate-out", this.onPlayAnimationOut, this)
            }, e.prototype.onPlayAnimationIn = function(t) {
                var e = this;
                void 0 === t && (t = 0);
                var o = this.darkMask,
                    i = this.animateSpeed || 1,
                    n = function() {
                        if (e.darkMask) {
                            var t = o.opacity;
                            o.opacity = 0;
                            var n = cc.fadeTo(.2 * i, t).easing(cc.easeSineInOut());
                            o.runAction(n)
                        }
                        null != e.target && e.play(e.target, e.animationPopIn, !1)
                    };
                "number" == typeof t && t > 0 ? this.scheduleOnce(n, t) : n()
            }, e.prototype.onPlayAnimationOut = function(t) {
                var e = this;
                void 0 === t && (t = 0);
                var o = this.darkMask,
                    i = this.animateSpeed || 1;
                if (!this.isPlaying) {
                    var n = function() {
                        if (e.darkMask) {
                            var t = cc.fadeTo(.2 * i, 0).easing(cc.easeSineInOut());
                            o.runAction(t)
                        }
                        null != e.target && e.play(e.target, e.animationPopOut, !0)
                    };
                    "number" == typeof t && t > 0 ? this.scheduleOnce(n, t) : n()
                }
            }, e.prototype.play = function(t, e, o) {
                var n, a = this;
                void 0 === o && (o = !1);
                var r = .2 * this.animateSpeed || 1,
                    s = this.target.x,
                    c = this.target.y,
                    l = cc.winSize,
                    h = cc.easeSineInOut();
                switch (h = o ? this.getTweenType(this.easePopOut) : this.getTweenType(this.easePopIn), e) {
                    case i.SCALE:
                        o ? n = cc.scaleTo(r, 0, 0).easing(h) : (t.setScale(0, 0), n = cc.scaleTo(r, 1, 1).easing(h));
                        break;
                    case i.FADE:
                        o ? n = cc.fadeOut(r).easing(h) : (t.opacity = 0, n = cc.fadeIn(r).easing(h));
                        break;
                    case i.SPREAD:
                        o ? (n = cc.scaleTo(r, 5, 5).easing(h), t.runAction(cc.fadeTo(r, 0).easing(h))) : (t.setScale(5, 5), n = cc.scaleTo(r, 1, 1).easing(h), t.opacity = 0, t.runAction(cc.fadeTo(r, 255).easing(h)));
                        break;
                    case i.FLIP_HEIGHT:
                        o ? n = cc.scaleTo(r, 0, 1).easing(h) : (t.setScale(0, 1), n = cc.scaleTo(r, 1, 1).easing(h));
                        break;
                    case i.FLIP_WIDTH:
                        o ? n = cc.scaleTo(r, 1, 0).easing(h) : (t.setScale(1, 0), n = cc.scaleTo(r, 1, 1).easing(h));
                        break;
                    case i.MOVE_UP:
                        o ? n = cc.moveTo(r, s, c + l.height).easing(h) : (this.target.y = c - l.height, n = cc.moveTo(r, s, c).easing(h));
                        break;
                    case i.MOVE_DOWN:
                        o ? n = cc.moveTo(r, s, c - l.height).easing(h) : (this.target.y = c + l.height, n = cc.moveTo(r, s, c).easing(h));
                        break;
                    case i.MOVE_LEFT:
                        o ? n = cc.moveTo(r, s - l.width, c).easing(h) : (this.target.x = s + l.width, n = cc.moveTo(r, s, c).easing(h));
                        break;
                    case i.MOVE_RIGHT:
                        o ? n = cc.moveTo(r, s + l.width, c).easing(h) : (this.target.x = s - l.width, n = cc.moveTo(r, s, c).easing(h))
                }
                if (this.isPlaying = !0, this.isFadeoutDestroy && o) {
                    var p = cc.sequence([n, cc.callFunc(function() {
                        a.isPlaying = !1, a.node.destroy()
                    })]);
                    t.runAction(p)
                } else {
                    p = cc.sequence([n, cc.callFunc(function() {
                        a.isPlaying = !1, a.isAutoOutAnimation && a.scheduleOnce(function() {
                            a.onPlayAnimationOut()
                        }, a.autoPlayWaitTime)
                    })]);
                    t.runAction(p)
                }
            }, e.prototype.playIn = function(t) {
                void 0 === t && (t = 0), this.onPlayAnimationIn(t)
            }, e.prototype.playOut = function(t) {
                void 0 === t && (t = 0), this.onPlayAnimationOut(t)
            }, __decorate([s({
                type: cc.Enum(i),
                tooltip: "\u5165\u53e3\u52a8\u753b",
                displayName: "Animation In"
            })], e.prototype, "animationPopIn", void 0), __decorate([s({
                type: cc.Enum(i),
                tooltip: "\u5f39\u51fa\u52a8\u753b",
                displayName: "Animation Out"
            })], e.prototype, "animationPopOut", void 0), __decorate([s({
                type: cc.Enum(n.EASE_TYPE),
                tooltip: "\u5165\u53e3\u52a8\u753b \u7684 TWEEN \u7c7b\u578b",
                displayName: "Animation In Ease"
            })], e.prototype, "easePopIn", void 0), __decorate([s({
                type: cc.Enum(n.EASE_TYPE),
                tooltip: "\u5f39\u51fa\u52a8\u753b \u7684 TWEEN \u7c7b\u578b",
                displayName: "Animation Out Ease"
            })], e.prototype, "easePopOut", void 0), __decorate([s({
                tooltip: "\u52a8\u753b\u64ad\u653e\u901f\u5ea6\u500d\u7387(\u57fa\u4e8e\u9ed8\u8ba4\u914d\u7f6e),\u8d8a\u5c0f\u8d8a\u5feb\uff0c\u9ed8\u8ba41"
            })], e.prototype, "animateSpeed", void 0), __decorate([s({
                type: cc.Node,
                tooltip: "\u9ed1\u8272\u906e\u7f69,\u9ed8\u8ba4\u4f1a\u641c\u7d22 \u540d\u4e3a dark \u7684\u8282\u70b9"
            })], e.prototype, "darkMask", void 0), __decorate([s({
                type: cc.Node,
                tooltip: "\u52a8\u753b\u76ee\u6807"
            })], e.prototype, "target", void 0), __decorate([s({
                tooltip: "\u662f\u5426\u5728\u5f39\u51fa\u52a8\u753b\u5b8c\u6210\u540e\uff0c\u81ea\u52a8\u9500\u6bc1\u8be5\u5f39\u7a97",
                displayName: "End Destroy"
            })], e.prototype, "isFadeoutDestroy", void 0), __decorate([s({
                tooltip: "\u662f\u5426\u5728\u5f00\u59cb\u5c31\u81ea\u52a8\u64ad\u653e\u5165",
                displayName: "Auto Start Animation"
            })], e.prototype, "isStartAnimate", void 0), __decorate([s({
                tooltip: "\u662f\u5426\u81ea\u52a8\u64ad\u653e\u79bb\u5f00\u52a8\u753b",
                displayName: "Auto End Animation"
            })], e.prototype, "isAutoOutAnimation", void 0), __decorate([s({
                tooltip: "\u4ece\u5f00\u59cb\u64ad\u653e\u52a8\u753b\uff0c\u5230\u79bb\u5f00\u52a8\u753b\u4e4b\u95f4\u9700\u8981\u591a\u4e45",
                displayName: "Wait Time",
                visible: function() {
                    return this.isAutoOutAnimation
                }
            })], e.prototype, "autoPlayWaitTime", void 0), e = __decorate([r, c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Animate/Pop Animate (\u5f39\u7a97\u52a8\u753b)"), l], e)
        }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "./../utils/commonTween": "commonTween"
    }],
    BhvProgressLimit: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ea0c6BwQktO3bngch6bAvnS", "BhvProgressLimit"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property;
        n.executeInEditMode;
        (function(t) {
            t[t.SCALE = 0] = "SCALE", t[t.SCALE_X = 1] = "SCALE_X", t[t.SCALE_Y = 2] = "SCALE_Y", t[t.X = 3] = "X", t[t.Y = 4] = "Y", t[t.WIDTH = 5] = "WIDTH", t[t.HEIGHT = 6] = "HEIGHT", t[t.OPACITY = 7] = "OPACITY"
        })(i || (i = {}));
        var s = ["scale", "scaleX", "scaleY", "x", "y", "width", "height", "opacity"],
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.target = null, e.valueMin = 0, e.valueMax = 1, e._propType = 0, e._progress = .5, e
                }
                return __extends(e, t), Object.defineProperty(e.prototype, "propType", {
                    get: function() {
                        return this._propType
                    },
                    set: function(t) {
                        this._propType = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "progress", {
                    get: function() {
                        return this._progress
                    },
                    set: function(t) {
                        t < 0 && (t = 0), t > 1 && (t = 1), this._progress = t, this.updateProp(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._editorUpdateConfig = function(t) {
                    switch (t) {
                        case i.SCALE:
                        case i.SCALE_X:
                        case i.SCALE_Y:
                            this.valueMin = 0, this.valueMax = 1;
                            break;
                        case i.X:
                        case i.Y:
                            this.valueMin = 0, this.valueMax = 640;
                            break;
                        case i.WIDTH:
                            this.valueMin = 0, this.valueMax = this.node.width || 100;
                            break;
                        case i.HEIGHT:
                            this.valueMin = 0, this.valueMax = this.node.height || 100;
                            break;
                        case i.OPACITY:
                            this.valueMin = 0, this.valueMax = 255
                    }
                }, e.prototype.updateProp = function(t) {
                    var e = this.propType,
                        o = s[e],
                        i = this.mapValue(t, 0, 1, this.valueMin, this.valueMax),
                        n = this.target || this.node;
                    o in n && (n[o] = i)
                }, e.prototype.mapValue = function(t, e, o, i, n) {
                    return (n - i) * (t - e) / (o - e) + i
                }, e.prototype.start = function() {}, __decorate([r(cc.Node)], e.prototype, "target", void 0), __decorate([r], e.prototype, "valueMin", void 0), __decorate([r], e.prototype, "valueMax", void 0), __decorate([r], e.prototype, "_propType", void 0), __decorate([r({
                    type: cc.Enum(i)
                })], e.prototype, "propType", null), __decorate([r], e.prototype, "_progress", void 0), __decorate([r({
                    range: [0, 1],
                    slide: !0
                })], e.prototype, "progress", null), e = __decorate([a], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvRollCustom: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "71fcfO96g9BeLblMayx5dSU", "BhvRollCustom"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.executeInEditMode,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.componentName = "", e.componentProperty = "", e.value = 0, e._targetValue = 100, e.lerp = .1, e.playAtStart = !0, e.runWaitTimer = 0, e.isScrolling = !1, e._watchComponent = null, e
                }
                return __extends(e, t), Object.defineProperty(e.prototype, "targetValue", {
                    get: function() {
                        return this._targetValue
                    },
                    set: function(t) {
                        this._targetValue = t, this.scroll()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.onLoad = function() {
                    this.checkEditorComponent(), this._watchComponent = this.node.getComponent(this.componentName), this._watchComponent = this.node.getComponent(this.componentName), this.checkComponentState(), this.playAtStart && (this.updateComponent(), this.scroll())
                }, e.prototype.scroll = function() {
                    var t = this;
                    this.isScrolling || (this.runWaitTimer > 0 ? this.scheduleOnce(function() {
                        t.isScrolling = !0
                    }, this.runWaitTimer) : this.isScrolling = !0)
                }, e.prototype.stop = function() {
                    this.value = this.targetValue, this.isScrolling = !1, this.updateComponent()
                }, e.prototype.init = function(t, e, o) {
                    this.targetValue = e || 0, this.value = t || 0, this.lerp = o || .1
                }, e.prototype.scrollTo = function(t) {
                    null !== t && void 0 !== t && (this.targetValue = t)
                }, e.prototype.update = function(t) {
                    if (0 != this.isScrolling) {
                        var e = t / (1 / 60);
                        return this.value = cc.misc.lerp(this.value, this.targetValue, this.lerp * e), this.updateComponent(), Math.abs(this.value - this.targetValue) <= 1e-4 ? (this.value = this.targetValue, this.updateComponent(), void(this.isScrolling = !1)) : void 0
                    }
                }, e.prototype.updateComponent = function() {
                    null != this._watchComponent && this.componentProperty in this._watchComponent != !1 && (this._watchComponent[this.componentProperty] = this.value)
                }, e.prototype.checkEditorComponent = function() {}, e.prototype.checkComponentState = function() {
                    this._watchComponent ? this.componentProperty ? this.componentProperty in this._watchComponent != !1 || console.error("\u9700\u8981\u76d1\u542c\u7684\u7ec4\u4ef6\u7684\u5c5e\u6027\u4e0d\u5b58\u5728") : console.error("\u672a\u8bbe\u7f6e\u9700\u8981\u76d1\u542c\u7684\u7ec4\u4ef6 \u7684\u5c5e\u6027") : console.error("\u672a\u8bbe\u7f6e\u9700\u8981\u76d1\u542c\u7684\u7ec4\u4ef6")
                }, __decorate([a({
                    tooltip: "\u9700\u8981\u7ed1\u5b9a\u7684\u7ec4\u4ef6\u540d\u79f0"
                })], e.prototype, "componentName", void 0), __decorate([a({
                    tooltip: "\u9700\u8981\u7ed1\u5b9a\u7684\u7ec4\u4ef6\u5c5e\u6027\u540d"
                })], e.prototype, "componentProperty", void 0), __decorate([a({
                    tooltip: "\u5f53\u524d\u7684\u6eda\u52a8\u503c(\u5f00\u59cb\u7684\u6eda\u52a8\u503c)"
                })], e.prototype, "value", void 0), __decorate([a({
                    tooltip: "\u6eda\u52a8\u7684\u76ee\u6807\u503c"
                })], e.prototype, "targetValue", null), __decorate([a], e.prototype, "_targetValue", void 0), __decorate([a({
                    tooltip: "\u6eda\u52a8\u7684\u7ebf\u6027\u5dee\u503c",
                    step: .01,
                    max: 1,
                    min: 0
                })], e.prototype, "lerp", void 0), __decorate([a({
                    tooltip: "\u662f\u5426\u5728\u5f00\u59cb\u65f6\u5c31\u64ad\u653e"
                })], e.prototype, "playAtStart", void 0), __decorate([a({
                    tooltip: "\u5728\u6eda\u52a8\u4e4b\u524d\u4f1a\u7b49\u5f85\u51e0\u79d2",
                    step: .1,
                    max: 1,
                    min: 0
                })], e.prototype, "runWaitTimer", void 0), e = __decorate([n, s, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Roll Custom (\u6eda\u52a8\u7ec4\u4ef6\u5c5e\u6027)")], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvRollNumber: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "72d13dwmG9LS4gkJhSuAp3F", "BhvRollNumber"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu;
        (function(t) {
            t[t.INTEGER = 0] = "INTEGER", t[t.FIXED_2 = 1] = "FIXED_2", t[t.TIMER = 2] = "TIMER", t[t.PERCENTAGE = 3] = "PERCENTAGE", t[t.KMBT_FIXED2 = 4] = "KMBT_FIXED2", t[t.THOUSAND_SEPARATOR = 5] = "THOUSAND_SEPARATOR", t[t.CUSTOMER = 6] = "CUSTOMER"
        })(i || (i = {}));
        var c = "{{0}}",
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.value = 0, e.showPlusSymbol = !1, e._targetValue = 100, e.lerp = .1, e.playAtStart = !0, e.runWaitTimer = 0, e.formatTemplate = c, e.valueType = i.INTEGER, e.scrollEvent = new cc.Component.EventHandler, e.isScrolling = !1, e
                }
                var o;
                return __extends(e, t), o = e, Object.defineProperty(e.prototype, "targetValue", {
                    get: function() {
                        return this._targetValue
                    },
                    set: function(t) {
                        this._targetValue = t, this.scroll()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.onLoad = function() {
                    void 0 == this.label && (this.label = this.node.getComponent(cc.Label)), this.playAtStart && (this.updateLabel(), this.scroll())
                }, e.prototype.scroll = function() {
                    var t = this;
                    this.isScrolling || (this.runWaitTimer > 0 ? this.scheduleOnce(function() {
                        t.isScrolling = !0
                    }, this.runWaitTimer) : this.isScrolling = !0)
                }, e.prototype.stop = function() {
                    this.value = this.targetValue, this.isScrolling = !1, this.updateLabel()
                }, e.prototype.init = function(t, e, o) {
                    this.targetValue = e || 0, this.value = t || 0, this.lerp = o || .1
                }, e.prototype.scrollTo = function(t) {
                    null !== t && void 0 !== t && (this.targetValue = t)
                }, e.Format = function(t, e) {
                    var o = "";
                    switch (e) {
                        case i.INTEGER:
                            o = Math.round(t) + "";
                            break;
                        case i.FIXED_2:
                            o = t.toFixed(2);
                            break;
                        case i.TIMER:
                            o = h(t);
                            break;
                        case i.PERCENTAGE:
                            o = Math.round(100 * t) + "%";
                            break;
                        case i.KMBT_FIXED2:
                            o = t >= Number.MAX_VALUE ? "MAX" : t > 1e12 ? (t / 1e12).toFixed(2) + "T" : t > 1e9 ? (t / 1e9).toFixed(2) + "B" : t > 1e6 ? (t / 1e6).toFixed(2) + "M" : t > 1e3 ? (t / 1e3).toFixed(2) + "K" : Math.round(t).toString();
                            break;
                        case i.THOUSAND_SEPARATOR:
                            o = Math.round(t).toString().replace(new RegExp("(\\d)(?=(\\d{3})+$)", "ig"), "$1,")
                    }
                    return o
                }, e.prototype.updateLabel = function() {
                    var t = this.value,
                        e = o.Format(t, this.valueType);
                    if (this.formatTemplate.includes(c) && (e = this.formatTemplate.replace(c, e)), this.showPlusSymbol && (t >= 0 ? e = "+" + e : t < 0 && (e = "-" + e)), this.label && this.valueType !== i.CUSTOMER) {
                        if (e === this.label.string) return;
                        this.label.string = e
                    } else this.scrollEvent.emit([this.label, this.value, this.targetValue, this.scrollEvent.customEventData])
                }, e.prototype.update = function(t) {
                    if (0 != this.isScrolling) {
                        var e = t / (1 / 60);
                        return this.value = cc.misc.lerp(this.value, this.targetValue, this.lerp * e), this.updateLabel(), Math.abs(this.value - this.targetValue) <= 1e-4 ? (this.value = this.targetValue, void(this.isScrolling = !1)) : void 0
                    }
                }, e.VALUE_TYPE = i, __decorate([r({
                    type: cc.Label,
                    tooltip: "\u9700\u8981\u6eda\u52a8\u7684 Label \u7ec4\u4ef6,\u5982\u679c\u4e0d\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5c31\u4f1a\u4ece\u81ea\u5df1\u7684\u8282\u70b9\u81ea\u52a8\u67e5\u627e"
                })], e.prototype, "label", void 0), __decorate([r({
                    tooltip: "\u5f53\u524d\u7684\u6eda\u52a8\u503c(\u5f00\u59cb\u7684\u6eda\u52a8\u503c)"
                })], e.prototype, "value", void 0), __decorate([r({
                    tooltip: "\u662f\u5426\u663e\u793a\u6b63\u8d1f\u7b26\u53f7"
                })], e.prototype, "showPlusSymbol", void 0), __decorate([r({
                    tooltip: "\u6eda\u52a8\u7684\u76ee\u6807\u503c"
                })], e.prototype, "targetValue", null), __decorate([r], e.prototype, "_targetValue", void 0), __decorate([r({
                    tooltip: "\u6eda\u52a8\u7684\u7ebf\u6027\u5dee\u503c",
                    step: .01,
                    max: 1,
                    min: 0
                })], e.prototype, "lerp", void 0), __decorate([r({
                    tooltip: "\u662f\u5426\u5728\u5f00\u59cb\u65f6\u5c31\u64ad\u653e"
                })], e.prototype, "playAtStart", void 0), __decorate([r({
                    tooltip: "\u5728\u6eda\u52a8\u4e4b\u524d\u4f1a\u7b49\u5f85\u51e0\u79d2",
                    step: .1,
                    max: 1,
                    min: 0
                })], e.prototype, "runWaitTimer", void 0), __decorate([r({
                    tooltip: "x {{0}}"
                })], e.prototype, "formatTemplate", void 0), __decorate([r({
                    type: cc.Enum(i),
                    tooltip: "\u662f\u5426\u5728\u5f00\u59cb\u65f6\u5c31\u64ad\u653e"
                })], e.prototype, "valueType", void 0), __decorate([r({
                    type: cc.Component.EventHandler,
                    visible: function() {
                        return this.valueType == i.CUSTOMER
                    }
                })], e.prototype, "scrollEvent", void 0), e = o = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Roll Number (\u6eda\u52a8\u6570\u5b57)")], e)
            }(cc.Component);

        function h(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = !0);
            var o = Math.floor(t),
                i = Math.floor(o / 3600),
                n = Math.floor(o % 3600 / 60),
                a = o % 60,
                r = "" + n,
                s = "" + a;
            return a < 10 && (s = "0" + a), e ? (n < 10 && (r = "0" + n), i + ":" + r + ":" + s) : (r = "" + (n + 60 * i), n < 10 && (r = "0" + n), r + ":" + s)
        }
        o.default = l, cc._RF.pop()
    }, {}],
    BhvRotate: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b6d47L6VU9LaLhBGaAKPUMW", "BhvRotate"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.disallowMultiple,
            c = cc.Enum({
                clockwise: 0,
                antiClockwise: 1
            }),
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.activeInStart = !0, e.direction = c.clockwise, e.speed = 180, e.speedMax = -1, e.accel = 0, e
                }
                return __extends(e, t), e.prototype.start = function() {
                    this.enabled = this.activeInStart
                }, e.prototype.rotate = function(t, e, o) {
                    null != t && (this.direction = t || 0), null != e && (this.speed = e || 0), null != o && (this.speedMax = o || 0), this.enabled = !0
                }, e.prototype.rotateTo = function() {}, e.prototype.stop = function() {
                    this.enabled = !1
                }, e.prototype.update = function(t) {
                    this.enabled && (this.speed += this.accel, -1 !== this.speedMax && this.speed > this.speedMax && (this.speed = this.speedMax), this.direction ? this.node.rotation -= this.speed * t : this.node.rotation += this.speed * t)
                }, __decorate([a], e.prototype, "activeInStart", void 0), __decorate([a({
                    type: c,
                    tooltip: " \u65cb\u8f6c\u65b9\u5411"
                })], e.prototype, "direction", void 0), __decorate([a({
                    tooltip: " \u65cb\u8f6c\u901f\u5ea6,s/px"
                })], e.prototype, "speed", void 0), __decorate([a({
                    tooltip: " \u65cb\u8f6c\u6700\u5927\u901f\u5ea6,s/px,-1\u4e3a\u4e0d\u9650\u5236\u6700\u5927\u901f\u5ea6"
                })], e.prototype, "speedMax", void 0), __decorate([a({
                    tooltip: "\u65cb\u8f6c\u52a0\u901f\u5ea6"
                })], e.prototype, "accel", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Movement/Rotate (\u81ea\u52a8\u65cb\u8f6c)"), s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BhvShake: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "387a70SuqFM245SL83j+hrI", "BhvShake"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.movingMode = !1, e.decayMode = !1, e.damping = .01, e.shakeTime = .5, e.intensity = cc.v2(5, 5), e._intensity = cc.v2(5, 5), e._originPos = cc.v2(0, 0), e._isShaking = !1, e._timer = .5, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this._originPos = this.node.position, this._intensity = this.intensity
                }, e.prototype.onButtonShake = function(t, e) {
                    this.shake(parseFloat(e))
                }, e.prototype.setOriginPos = function(t) {
                    this._originPos = t
                }, e.prototype.shake = function(t, e) {
                    void 0 === t && (t = .5), !1 === this._isShaking && (this.node.position.x = this._originPos.x, this.node.position.y = this._originPos.y), t > 0 && (this._timer = t), e && (this.intensity = e), this._intensity = this.intensity.clone(), this._timer = this.shakeTime, this._isShaking = !0
                }, e.prototype.update = function(t) {
                    if (this._isShaking) {
                        var e, o;
                        if (this._timer -= t, this._timer <= 0 && (this._isShaking = !1, this.node.x = this._originPos.x, this.node.y = this._originPos.y), e = (2 * Math.random() - 1) * this._intensity.x, o = (2 * Math.random() - 1) * this._intensity.y, this.decayMode && (this._intensity.x > .01 ? this._intensity.x -= this._intensity.x * this.damping * t * 60 : this._intensity.x = 0, this._intensity.y > .01 ? this._intensity.y -= this._intensity.y * this.damping * t * 60 : this._intensity.y = 0, this._intensity.y < .01 && this._intensity.x < .01)) return this._intensity.y = 0, this._intensity.x = 0, this.node.x = this._originPos.x, this.node.y = this._originPos.y, void(this._isShaking = !1);
                        this.movingMode ? (this.node.x += e, this.node.y += o) : (this.node.x = this._originPos.x + e, this.node.y = this._originPos.y + o)
                    }
                }, __decorate([a({
                    tooltip: "\u79fb\u52a8\u6a21\u5f0f\uff0c\u79fb\u52a8\u6a21\u5f0f\u4e0d\u4f1a\u8fd8\u539f\u5bf9\u8c61\u7684\u5750\u6807\u56de\u5230 shake \u53d1\u751f\u524d\u7684\u72b6\u6001\uff0c\u9002\u5408\u8fd0\u52a8\u7684\u7269\u4f53"
                })], e.prototype, "movingMode", void 0), __decorate([a({
                    tooltip: "\u8870\u9000\u6a21\u5f0f\uff0c\u4f1a\u968f\u7740\u9707\u52a8\u65f6\u95f4\u5f3a\u5ea6\u9010\u6e10\u8870\u9000"
                })], e.prototype, "decayMode", void 0), __decorate([a({
                    visible: function() {
                        return !0 === this.decayMode
                    },
                    tooltip: "\u963b\u5c3c\uff0c\u9707\u52a8\u65f6\u534a\u5f84\u9010\u6e10\u7f29\u5c0f\u7684\u901f\u7387"
                })], e.prototype, "damping", void 0), __decorate([a({
                    tooltip: "\u9707\u52a8\u65f6\u95f4"
                })], e.prototype, "shakeTime", void 0), __decorate([a({
                    tooltip: "\u9707\u52a8x,y\u7684\u504f\u79fb\u91cf"
                })], e.prototype, "intensity", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Movement/Shake (\u9707\u52a8)")], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    BhvSightSensor: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fb6a6PA3bpGnrHAuAGzwwwN", "BhvSightSensor"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = {
                ENTER_NODE: "BhvSightSensor:Enter",
                EXIT_NODE: "BhvSightSensor:Exit"
            },
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.debug = !1, e.camera = null, e.initialNodes = [], e.checkTime = .5, e.rangeRadius = 256, e.coneOfView = 180, e.isAngleFollow = !1, e.angleOfView = 0, e.searchNodes = new Set, e.watchNodes = new Set, e._timer = 0, e
                }
                return __extends(e, t), e.prototype.start = function() {
                    if (this.debug) {
                        var t = new cc.Node("fx");
                        t.addComponent(cc.Graphics), this.node.addChild(t), this.debugFX = t.getComponent(cc.Graphics), this.debugFX.clear()
                    }
                    for (var e = 0; e < this.initialNodes.length; e++) {
                        var o = this.initialNodes[e];
                        this.searchNodes.add(o)
                    }
                }, e.prototype.debugDraw = function() {
                    var t = this;
                    if (this.debug) {
                        var e = this.debugFX,
                            o = this.isAngleFollow ? 0 : this.angleOfView,
                            i = cc.misc.degreesToRadians(360 - o + this.coneOfView / 2),
                            n = cc.misc.degreesToRadians(360 - o - this.coneOfView / 2);
                        e.clear(), e.moveTo(0, 0), e.lineTo(0, 0), e.arc(0, 0, this.rangeRadius, i, n, !1), e.lineTo(0, 0), e.close(), e.fillColor = cc.color(0, 0, 0, 55), e.strokeColor = cc.color(255, 0, 0, 155), e.lineWidth = 2, e.fill(), e.stroke(), this.watchNodes.forEach(function(o) {
                            var i = o.convertToWorldSpaceAR(cc.Vec2.ZERO),
                                n = t.node.convertToNodeSpaceAR(i);
                            e.circle(n.x, n.y, o.width / 4), e.fill(), e.fillColor = cc.color(255, 0, 0, 55), e.strokeColor = cc.color(255, 0, 0, 155), e.lineWidth = 1, e.fill(), e.stroke()
                        })
                    }
                }, e.prototype.update = function(t) {
                    this._timer -= t, this._timer <= 0 && (this._timer += this.checkTime, this.isAngleFollow && (this.angleOfView = this.node.rotation), this.checkNodes(), this.debug && this.debugDraw())
                }, e.prototype.addTarget = function(t) {
                    this.searchNodes.add(t)
                }, e.prototype.removeTarget = function(t) {
                    return this.searchNodes.delete(t)
                }, e.prototype.hasTarget = function(t) {
                    return this.searchNodes.has(t)
                }, e.prototype.getTargets = function() {
                    return this.searchNodes
                }, e.prototype.checkInCamera = function() {}, e.prototype.checkInRange = function(t) {
                    var e = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        o = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        i = cc.Vec2.RIGHT,
                        n = e.sub(o);
                    if (n.mag() > this.rangeRadius) return !1;
                    if (this.coneOfView >= 360) return !0;
                    var a = cc.misc.degreesToRadians(this.coneOfView / 2),
                        r = cc.misc.degreesToRadians(this.angleOfView),
                        s = i.rotate(r),
                        c = i.signAngle(n),
                        l = i.signAngle(s);
                    return c > 0 && (c = Math.PI - c), c < 0 && (c -= Math.PI), cc.log(n.mag()), Math.abs(c - l) <= a || void 0
                }, e.prototype.checkNodes = function() {
                    var t = this;
                    this.searchNodes.forEach(function(e) {
                        var o = t.checkInRange(e);
                        e.active || (o = !1), o ? t.watchNodes.has(e) || (t.watchNodes.add(e), t.node.emit(s.ENTER_NODE, e, e.name)) : t.watchNodes.has(e) && (t.watchNodes.delete(e), t.node.emit(s.EXIT_NODE, e, e.name))
                    })
                }, e.EVENT = s, __decorate([a({
                    tooltip: "\u6d4b\u8bd5\u89c6\u7ebf\u6240\u5728\u533a\u57df"
                })], e.prototype, "debug", void 0), __decorate([a({
                    tooltip: "\u79fb\u52a8\u76f8\u673a\u8282\u70b9, \u8fdb\u884c\u53ef\u89c6\u533a\u57df\u5224\u65ad",
                    type: cc.Node
                })], e.prototype, "camera", void 0), __decorate([a({
                    type: [cc.Node],
                    tooltip: "\u9700\u8981\u68c0\u67e5\u7684\u89c6\u7ebf\u76ee\u6807\u5bf9\u8c61"
                })], e.prototype, "initialNodes", void 0), __decorate([a({
                    tooltip: "\u68c0\u6d4b\u65f6\u95f4,\u6bcf\u9694 x \u79d2\uff0c\u68c0\u67e5\u4e00\u6b21, \u8d8a\u9891\u7e41\u6027\u80fd\u6d88\u8017\u8d8a\u5927"
                })], e.prototype, "checkTime", void 0), __decorate([a({
                    tooltip: "\u4f20\u611f\u5668\u534a\u5f84\u8303\u56f4"
                })], e.prototype, "rangeRadius", void 0), __decorate([a({
                    tooltip: "\u89c6\u91ce\u6247\u5f62\u8303\u56f4"
                })], e.prototype, "coneOfView", void 0), __decorate([a({
                    tooltip: "\u662f\u5426\u89c6\u7ebf\u89d2\u5ea6\u8ddf\u968f\u8282\u70b9\u89d2\u5ea6"
                })], e.prototype, "isAngleFollow", void 0), __decorate([a({
                    tooltip: "\u89c6\u91ce\u6240\u5728\u89d2\u5ea6",
                    visible: function() {
                        return 0 == this.isAngleFollow
                    }
                })], e.prototype, "angleOfView", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/Sight Sensor (\u89c6\u7ebf\u4f20\u611f\u5668)")], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvSine: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d3ea8F5uhlPzZcqg1brCtXl", "BhvSine"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu;
        (function(t) {
            t[t.horizontal = 0] = "horizontal", t[t.vertical = 1] = "vertical", t[t.scale = 2] = "scale", t[t.scaleX = 3] = "scaleX", t[t.scaleY = 4] = "scaleY", t[t.rotation = 5] = "rotation", t[t.opacity = 6] = "opacity", t[t.skewX = 7] = "skewX", t[t.skewY = 8] = "skewY", t[t.forward = 9] = "forward", t[t.value = 10] = "value"
        })(i || (i = {})),
        function(t) {
            t[t.sine = 0] = "sine", t[t.triangle = 1] = "triangle", t[t.sawtooth = 2] = "sawtooth", t[t.reverseSawtooth = 3] = "reverseSawtooth", t[t.square = 4] = "square"
        }(n || (n = {}));
        var l = 2 * Math.PI,
            h = Math.PI / 2,
            p = 3 * Math.PI / 2,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.activeAtStart = !0, e.movement = i.vertical, e.wave = n.sine, e.period = 4, e.periodRandom = 0, e.periodOffset = 0, e.periodOffsetRandom = 0, e.magnitude = 50, e.magnitudeRandom = 0, e.value = 0, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.enabled = this.activeAtStart, 0 === this.period ? this.i = 0 : (this.i = this.periodOffset / this.period * l, this.i += Math.random() * this.periodOffsetRandom / this.period * l), this.mag = this.magnitude, this.mag += Math.random() * this.magnitudeRandom, this.initialValue = 0, this.initialValue2 = 0
                }, e.prototype.start = function() {
                    this.init()
                }, e.prototype.init = function() {
                    switch (this.movement) {
                        case i.horizontal:
                            this.initialValue = this.node.x;
                            break;
                        case i.vertical:
                            this.initialValue = this.node.y;
                            break;
                        case i.scale:
                            this.initialValue = this.node.scale;
                            break;
                        case i.scaleX:
                            this.initialValue = this.node.scaleX;
                            break;
                        case i.scaleY:
                            this.initialValue = this.node.scaleY;
                            break;
                        case i.rotation:
                            this.initialValue = this.node.rotation;
                            break;
                        case i.opacity:
                            this.initialValue = this.node.opacity;
                            break;
                        case i.skewX:
                            this.initialValue = this.node.skewX;
                            break;
                        case i.skewY:
                            this.initialValue = this.node.skewY;
                            break;
                        case i.value:
                            this.initialValue = 0;
                            break;
                        case i.forward:
                            this.initialValue = this.node.x, this.initialValue2 = this.node.y;
                            break;
                        default:
                            cc.warn("Invalid sin movement type")
                    }
                    this.lastKnownValue = this.initialValue, this.lastKnownValue2 = this.initialValue2
                }, e.prototype.setMovement = function(t) {
                    this.movement = t, this.init()
                }, e.prototype.setPhase = function(t) {
                    this.i = t * l % l, this.updateFromPhase()
                }, e.prototype.waveFunc = function(t) {
                    switch (t %= l, this.wave) {
                        case n.sine:
                            return Math.sin(t);
                        case n.triangle:
                            return t <= h ? t / h : t <= p ? 1 - 2 * (t - h) / Math.PI : (t - p) / h - 1;
                        case n.sawtooth:
                            return 2 * t / l - 1;
                        case n.reverseSawtooth:
                            return -2 * t / l + 1;
                        case n.square:
                            return t < Math.PI ? -1 : 1
                    }
                    return 0
                }, e.prototype.update = function(t) {
                    this.enabled && this.node.active && 0 !== t && (0 === this.period ? this.i = 0 : (this.i += t / this.period * l, this.i = this.i % l), this.updateFromPhase())
                }, e.prototype.updateFromPhase = function() {
                    var t = this.waveFunc(this.i) * this.mag;
                    switch (this.value = t, this.movement) {
                        case i.horizontal:
                            this.node.x !== this.lastKnownValue && (this.initialValue += this.node.x - this.lastKnownValue), this.node.x = this.initialValue + t, this.lastKnownValue = this.node.x;
                            break;
                        case i.vertical:
                            this.node.y !== this.lastKnownValue && (this.initialValue += this.node.y - this.lastKnownValue), this.node.y = this.initialValue + t, this.lastKnownValue = this.node.y;
                            break;
                        case i.scale:
                            this.node.scale = this.initialValue + t;
                            break;
                        case i.scaleX:
                            this.node.scaleX = this.initialValue + t;
                            break;
                        case i.scaleY:
                            this.node.scaleY = this.initialValue + t;
                            break;
                        case i.rotation:
                            this.node.rotation !== this.lastKnownValue && (this.initialValue = this.initialValue + (this.node.rotation - this.lastKnownValue)), this.node.rotation = this.initialValue + t, this.lastKnownValue = this.node.rotation;
                            break;
                        case i.opacity:
                            this.node.opacity = this.initialValue + t, this.node.opacity < 0 ? this.node.opacity = 0 : this.node.opacity > 255 && (this.node.opacity = 255);
                            break;
                        case i.skewX:
                            this.node.skewX = this.initialValue + t;
                            break;
                        case i.skewY:
                            this.node.skewY = this.initialValue + t;
                            break;
                        case i.forward:
                            this.node.x !== this.lastKnownValue && (this.initialValue += this.node.x - this.lastKnownValue), this.node.y !== this.lastKnownValue2 && (this.initialValue2 += this.node.y - this.lastKnownValue2), this.node.x = this.initialValue + Math.cos(this.node.rotation / 360 * l) * t, this.node.y = this.initialValue2 + Math.sin(this.node.rotation / 360 * l) * t, this.lastKnownValue = this.node.x, this.lastKnownValue2 = this.node.y
                    }
                }, e.prototype.getCyclePos = function() {
                    return this.i / l
                }, __decorate([s({
                    tooltip: "\u5728 start \u51fd\u6570\u65f6\u89e6\u53d1"
                })], e.prototype, "activeAtStart", void 0), __decorate([s({
                    type: cc.Enum(i),
                    tooltip: "\u4ee5\u4f55\u79cd\u5c5e\u6027\u8fdb\u884csine\u5468\u671f\u8fd0\u52a8"
                })], e.prototype, "movement", void 0), __decorate([s({
                    type: cc.Enum(n),
                    tooltip: "\u6ce2\u5f62"
                })], e.prototype, "wave", void 0), __decorate([s({
                    tooltip: ""
                })], e.prototype, "period", void 0), __decorate([s({
                    tooltip: "\u5468\u671f\u968f\u673a"
                })], e.prototype, "periodRandom", void 0), __decorate([s({
                    tooltip: "\u5468\u671f\u504f\u79fb"
                })], e.prototype, "periodOffset", void 0), __decorate([s({
                    tooltip: "\u5468\u671f\u504f\u79fb\u503c \u968f\u673a"
                })], e.prototype, "periodOffsetRandom", void 0), __decorate([s({
                    tooltip: "\u6ce2\u52a8\u8303\u56f4"
                })], e.prototype, "magnitude", void 0), __decorate([s({
                    tooltip: "\u6ce2\u52a8\u8303\u56f4\u968f\u673a\u503c"
                })], e.prototype, "magnitudeRandom", void 0), e = __decorate([r, c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Movement/Sine (\u51fd\u6570\u8fd0\u52a8)")], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {}],
    BhvSnake: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2af2ckB1DZAYK+d5IXSFR1R", "BhvSnake"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = (i.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.numSegments = 10, e.direction = "right", e.diff = 10, e.xStart = 0, e.yStart = 160, e.xCor = [], e.yCor = [], e
                }
                return __extends(e, t), e.prototype.start = function() {
                    for (var t = 0; t < this.numSegments; t++) this.xCor.push(this.xStart + t * this.diff), this.yCor.push(this.yStart)
                }, e.prototype.line = function(t, e, o, i) {}, e.prototype.updateSnakeCoordinates = function() {
                    for (var t = 0; t < this.numSegments - 1; t++) this.xCor[t] = this.xCor[t + 1], this.yCor[t] = this.yCor[t + 1];
                    switch (this.direction) {
                        case "right":
                            this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] + this.diff, this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
                            break;
                        case "up":
                            this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2], this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] - this.diff;
                            break;
                        case "left":
                            this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] - this.diff, this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
                            break;
                        case "down":
                            this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2], this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] + this.diff
                    }
                }, e.prototype.checkSnakeCollision = function() {
                    for (var t = this.xCor[this.xCor.length - 1], e = this.yCor[this.yCor.length - 1], o = 0; o < this.xCor.length - 1; o++)
                        if (this.xCor[o] === t && this.yCor[o] === e) return !0
                }, e.prototype.keyPressed = function() {}, e.prototype.update = function(t) {
                    for (var e = 0; e < this.numSegments - 1; e++) this.line(this.xCor[e], this.yCor[e], this.xCor[e + 1], this.yCor[e + 1]);
                    this.updateSnakeCoordinates()
                }, e = __decorate([n], e)
            }(cc.Component));
        o.default = a, cc._RF.pop()
    }, {}],
    BhvSwitchPage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b3d083kncpDPqVztMtiq6DO", "BhvSwitchPage"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../utils/commonTween"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.executeInEditMode,
            c = n.menu,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isLoopPage = !1, e._index = 0, e.useAnimation = !1, e.animationType = i.ANI_ACTION_TYPE.SCALE, e.easePopIn = i.EASE_TYPE.SineInOut, e.easePopOut = i.EASE_TYPE.SineInOut, e.easeTime = 1, e.easeInDelayTime = 0, e.switchEvents = [], e.preIndex = 0, e._isChanging = !1, e
                }
                return __extends(e, t), Object.defineProperty(e.prototype, "index", {
                    get: function() {
                        return this._index
                    },
                    set: function(t) {
                        if (!this.isChanging) {
                            t = Math.round(t);
                            var e = this.node.childrenCount - 1;
                            this.isLoopPage ? (t > e && (t = 0), t < 0 && (t = e)) : (t > e && (t = e), t < 0 && (t = 0)), this.preIndex = this._index, this._index = t, this._updatePage(t)
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isChanging", {
                    get: function() {
                        return this._isChanging
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.onLoad = function() {
                    this.preIndex = this.index
                }, e.prototype._updateEditorPage = function(t) {}, e.prototype._updatePage = function(t) {
                    var e = this,
                        o = this.node.children,
                        n = this.preIndex,
                        a = this.index;
                    if (n !== a) {
                        this.switchEvents.forEach(function(t) {
                            t.emit([a, o.length, t.customEventData])
                        });
                        var r = o[n],
                            s = o[a];
                        if (this.animationType === i.ANI_ACTION_TYPE.NONE || !1 === this.useAnimation) return r.active = !1, void(s.active = !0);
                        this._isChanging = !0, s.active = !0;
                        var c = {
                                type: this.animationType,
                                time: this.easeTime / 2,
                                isActionOut: !1,
                                ease: this.easePopIn,
                                node: s,
                                width: this.node.width,
                                height: this.node.height,
                                delay: this.easeInDelayTime
                            },
                            l = {
                                type: this.animationType,
                                time: this.easeTime / 2,
                                isActionOut: !0,
                                ease: this.easePopOut,
                                node: r,
                                width: this.node.width,
                                height: this.node.height
                            },
                            h = i.TweenConfig.getAction(l),
                            p = i.TweenConfig.getAction(c);
                        r.runAction(cc.sequence([h, cc.callFunc(function() {
                            r.active = !1, e._isChanging = !1
                        })])), s.runAction(cc.sequence([p, cc.callFunc(function() {})]))
                    }
                }, e.prototype.next = function() {
                    return !this.isChanging && (this.index++, !0)
                }, e.prototype.previous = function() {
                    return !this.isChanging && (this.index--, !0)
                }, e.prototype.setEventIndex = function(t, e) {
                    return this.index >= 0 && null != this.index && !1 === this.isChanging && (this.index = e, !0)
                }, __decorate([r], e.prototype, "isLoopPage", void 0), __decorate([r], e.prototype, "_index", void 0), __decorate([r({
                    type: cc.Integer
                })], e.prototype, "index", null), __decorate([r({
                    tooltip: "\u662f\u5426\u5728\u5207\u9875\u65f6\u5019\u4f7f\u7528\u52a8\u753b"
                })], e.prototype, "useAnimation", void 0), __decorate([r({
                    type: cc.Enum(i.ANI_ACTION_TYPE),
                    tooltip: "\u5165\u53e3\u52a8\u753b",
                    displayName: "Animation Type",
                    visible: function() {
                        return this.useAnimation
                    }
                })], e.prototype, "animationType", void 0), __decorate([r({
                    type: cc.Enum(i.EASE_TYPE),
                    tooltip: "\u5165\u53e3\u52a8\u753b \u7684 TWEEN \u7c7b\u578b",
                    displayName: "Animation In Ease",
                    visible: function() {
                        return this.useAnimation
                    }
                })], e.prototype, "easePopIn", void 0), __decorate([r({
                    type: cc.Enum(i.EASE_TYPE),
                    tooltip: "\u5f39\u51fa\u52a8\u753b \u7684 TWEEN \u7c7b\u578b",
                    displayName: "Animation Out Ease",
                    visible: function() {
                        return this.useAnimation
                    }
                })], e.prototype, "easePopOut", void 0), __decorate([r({
                    tooltip: "\u5207\u9875\u52a8\u753b\u7684\u64ad\u653e\u65f6\u95f4",
                    visible: function() {
                        return this.useAnimation
                    }
                })], e.prototype, "easeTime", void 0), __decorate([r({
                    tooltip: "\u4e2d\u95f4\u52a8\u753b\u5ef6\u8fdf\u65f6\u95f4",
                    displayName: "EaseIn DelayTime ",
                    visible: function() {
                        return this.useAnimation
                    }
                })], e.prototype, "easeInDelayTime", void 0), __decorate([r([cc.Component.EventHandler])], e.prototype, "switchEvents", void 0), e = __decorate([a, s, c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Switch Page (\u5207\u6362\u9875\u9762)")], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {
        "./../utils/commonTween": "commonTween"
    }],
    BhvTextTimer: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3e49fNMXSBGw63BCLVb82wN", "BhvTextTimer"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu;
        (function(t) {
            t[t.NUMBER = 0] = "NUMBER", t[t.PERCENTAGE = 1] = "PERCENTAGE", t[t.TIMER_MINUTE = 2] = "TIMER_MINUTE", t[t.TIMER_SECOND = 3] = "TIMER_SECOND", t[t.TIMER_MS = 4] = "TIMER_MS"
        })(i || (i = {}));
        var c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.label = null, e.finishLabelString = "Finished!", e.timerType = i.TIMER_SECOND, e.tag = "", e.finishEvents = [], e.timer = 0, e.targetTimer = 0, e.isPaused = !0, e
            }
            return __extends(e, t), e.prototype.start = function() {
                null == this.label && (this.label = this.node.getComponent(cc.Label))
            }, e.prototype.startTimer = function(t, e, o) {
                o && (this.tag = o), e && (this.finishLabelString = e), this.targetTimer = t, this.timer = this.targetTimer, this.isPaused = !1
            }, e.prototype.stopTimer = function(t) {
                void 0 === t && (t = !1), this.isPaused = !0, t && this.timerEmit()
            }, e.prototype.timerEmit = function() {
                var t = this;
                this.label.string = this.finishLabelString, this.finishEvents.forEach(function(e) {
                    e.emit([t.tag, e.customEventData])
                })
            }, e.prototype.getPercentage = function() {
                var t = 1 - this.timer / this.targetTimer;
                return t > 1 && (t = 1), t < 0 && (t = 0), t
            }, e.prototype.update = function(t) {
                !0 !== this.isPaused && (this.timer -= 1e3 * t, this.timer <= 0 ? (this.isPaused = !0, this.timerEmit()) : this.updateText())
            }, e.prototype.updateText = function() {
                if (null != this.label) {
                    var t;
                    switch (this.timerType) {
                        case i.NUMBER:
                            t = this.timer;
                            break;
                        case i.PERCENTAGE:
                            t = Math.floor(100 * this.getPercentage()) + "%";
                            break;
                        case i.TIMER_MINUTE:
                            t = this.parseTimeStamp(this.timer, "min");
                            break;
                        case i.TIMER_SECOND:
                            t = this.parseTimeStamp(this.timer, "sec");
                            break;
                        case i.TIMER_MS:
                            t = this.parseTimeStamp(this.timer, "ms")
                    }
                    this.label.string = t + ""
                }
            }, e.prototype.parseTimeStamp = function(t, e) {
                void 0 === e && (e = "sec");
                var o, i = t,
                    n = Math.floor(i % 1e3),
                    a = Math.floor(i / 1e3 % 60),
                    r = Math.floor(i / 1e3 / 60 % 60),
                    s = Math.floor(i / 1e3 / 60 / 60 % 24);
                switch (n < 100 && (n = "0" + n), a < 10 && (a = "0" + a), r < 10 && (r = "0" + r), s < 10 && (s = "0" + s), e) {
                    case "ms":
                        o = s + ":" + r + ":" + a + ":" + n;
                        break;
                    case "sec":
                        o = s + ":" + r + ":" + a;
                        break;
                    case "min":
                        o = s + ":" + r
                }
                return o
            }, __decorate([r({
                type: cc.Label,
                tooltip: "\u8ba1\u65f6\u5668\u663e\u793a\u6240\u5728\u7684\u6587\u672c\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u5c06\u81ea\u52a8\u6307\u5b9a\u672c\u8282\u70b9\u7ec4\u4ef6\u3002"
            })], e.prototype, "label", void 0), __decorate([r({
                tooltip: "\u8ba1\u65f6\u5668\u5230\u8fbe\u540e\u5c06\u6587\u5b57\u6539\u53d8,\u4e3a\u7a7a\u65f6\u4e0d\u751f\u6548"
            })], e.prototype, "finishLabelString", void 0), __decorate([r({
                type: cc.Enum(i),
                tooltip: "\u663e\u793a\u65f6\u95f4\u7c7b\u578b,NUMBER = \u666e\u901a\uff0cTIMER_MINUTE =\u663e\u793a\u5230\u5206\u949f\uff0cTIMER_SECOND=\u663e\u793a\u5230\u79d2\u949f"
            })], e.prototype, "timerType", void 0), __decorate([r({
                tooltip: "\u4fe1\u53f7\u6807\u7b7e\uff0c\u7528\u4e8e\u6807\u8bb0 TextTimer \u7684\u60c5\u51b5\u3002\u8282\u70b9\u6811\u6709\u591a\u4e2a Text Timer \u884c\u4e3a\u7684\u65f6\u5019\u53ef\u4ee5\u7528\u4e8e\u533a\u5206"
            })], e.prototype, "tag", void 0), __decorate([r({
                type: cc.Component.EventHandler,
                tooltip: "\u5728\u8ba1\u65f6\u5668\u5b8c\u6210\u540e\u4f1a\u56de\u8c03\u8be5\u51fd\u6570"
            })], e.prototype, "finishEvents", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Text Timer (\u6587\u5b57\u5012\u8ba1\u65f6)")], e)
        }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvTextTyping: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "57aa2Ub3mREvb7MlsUQY77C", "BhvTextTyping"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu,
            c = n.disallowMultiple;
        (function(t) {
            t[t.left2right = 0] = "left2right", t[t.right2left = 1] = "right2left", t[t.middle2sides = 2] = "middle2sides", t[t.sides2middle = 3] = "sides2middle"
        })(i || (i = {}));
        var l = function(t) {
                return Array.isArray(t) ? t = t.join("\n") : "number" == typeof t && (t = t.toString()), t
            },
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.typeMode = i.left2right, e.speed = .1, e.delayTime = 0, e.autoStart = !0, e.typeEvents = [], e._hasOnLoad = !1, e._text = "", e
                }
                return __extends(e, t), Object.defineProperty(e.prototype, "isLastChar", {
                    get: function() {
                        return this.typingIdx === this.textLen
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "string", {
                    get: function() {
                        return this._text
                    },
                    set: function(t) {
                        void 0 !== t && null != t && this._hasOnLoad && this._text !== t && (this._text = t, this.run(t))
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.onLoad = function() {
                    var t = this.node.getComponent(cc.Label);
                    t && (this.isTyping = !1, this.paused = !1, this.fLabel = t, this._hasOnLoad = !0, this.autoStart && (this._text = t.string), t.string = "", this.autoStart && this.run(this._text, this.speed))
                }, e.prototype.start = function() {}, e.prototype.run = function(t, e, o) {
                    this.fLabel.string = "", void 0 !== t && this.setTypingContent(t), void 0 !== e && (this.speed = e), void 0 === o && (o = 0), this.typingIdx = o + 1, 0 === this.speed ? this.stop(!0) : this.startTimer(this.delayTime)
                }, e.prototype.stop = function(t) {
                    void 0 === t && (t = !1), t && (this.typingIdx = this.textLen, this.setText(this._text)), this.unschedule(this.onTyping)
                }, e.prototype.pause = function() {
                    this.paused = !0
                }, e.prototype.resume = function() {
                    this.paused = !1
                }, e.prototype.appendText = function(t) {
                    var e = this._text.concat(l(t));
                    this.isTyping ? this.setTypingContent(e) : this.run(e, void 0, this.textLen)
                }, e.prototype.setTypingContent = function(t) {
                    this._text = l(t), this.textLen = this.getTextLength(this._text)
                }, e.prototype.onTyping = function() {
                    var t = this;
                    if (1 != this.paused) {
                        var e = this.getTypingString(this._text, this.typingIdx, this.textLen, this.typeMode);
                        this.setText(e), this.isLastChar ? (this.isTyping = !1, this.unschedule(this.onTyping)) : (this.isTyping = !0, this.typingIdx++), this.typeEvents.forEach(function(e) {
                            e.emit([!1 === t.isTyping, e.customEventData])
                        })
                    }
                }, e.prototype.getTypingString = function(t, e, o, n) {
                    var a, r, s, c;
                    if (n === i.left2right) r = 0, s = e, this.insertIdx = s, a = this.getSubString(t, r, s);
                    else if (n === i.right2left) r = (s = o) - e, this.insertIdx = 0, a = this.getSubString(t, r, s);
                    else if (n === i.middle2sides) c = o / 2, s = (r = Math.floor(c - e / 2)) + e, this.insertIdx = e % 2 ? e : 0, a = this.getSubString(t, r, s);
                    else if (n === i.sides2middle) {
                        var l = Math.floor(e / 2),
                            h = void 0;
                        l > 0 ? (r = (s = o) - l, h = this.getSubString(t, r, s)) : h = "";
                        var p = e - l,
                            d = void 0;
                        p > 0 ? (s = (r = 0) + p, this.insertIdx = s, d = this.getSubString(t, r, s)) : (d = "", this.insertIdx = 0), a = d + h
                    }
                    return a
                }, e.prototype.startTimer = function(t) {
                    void 0 === t && (t = 0), this.unschedule(this.onTyping), this.schedule(this.onTyping, this.speed, cc.macro.REPEAT_FOREVER, t)
                }, e.prototype.setText = function(t) {
                    this.fLabel && t && (this.fLabel.string = t)
                }, e.prototype.getTextLength = function(t) {
                    return t.length
                }, e.prototype.getSubString = function(t, e, o) {
                    return t.slice(e, o)
                }, __decorate([r({
                    type: cc.Enum(i),
                    tooltip: "\u6253\u5b57\u6a21\u5f0f"
                })], e.prototype, "typeMode", void 0), __decorate([r({
                    tooltip: "\u6253\u5b57\u901f\u5ea6"
                })], e.prototype, "speed", void 0), __decorate([r({
                    tooltip: "\u5ef6\u8fdf\u6253\u5b57\u7684\u51c6\u5907\u65f6\u95f4"
                })], e.prototype, "delayTime", void 0), __decorate([r({
                    tooltip: "\u662f\u5426\u5728\u4e00\u5f00\u59cb\u5c31\u8fdb\u884c\u6253\u5b57\u6548\u679c"
                })], e.prototype, "autoStart", void 0), __decorate([r([cc.Component.EventHandler])], e.prototype, "typeEvents", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Text Typing (\u6253\u5b57\u673a)"), c], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {}],
    BhvTimer: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0b05eZOL69Hnqe/eKv4Ey4w", "BhvTimer"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu;
        (function(t) {
            t[t.ONCE = 0] = "ONCE", t[t.REPEAT = 1] = "REPEAT", t[t.LOOP = 2] = "LOOP"
        })(i || (i = {}));
        var c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.tag = "", e.activeAtStart = !0, e._type = i.REPEAT, e.curTime = 0, e.endTime = 2, e.targetTime = 2, e.targetTimeRandom = 0, e.loopTime = 0, e.targetLoop = 1, e.events = [], e.isRun = !1, e.paused = !1, e
            }
            return __extends(e, t), Object.defineProperty(e.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(t) {
                    switch (this._type = t, t) {
                        case i.ONCE:
                            this.targetLoop = 0;
                            break;
                        case i.REPEAT:
                            this.targetLoop = 1;
                            break;
                        case i.LOOP:
                            this.targetLoop = cc.macro.REPEAT_FOREVER
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "leftTime", {
                get: function() {
                    return this.endTime - this.curTime
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "progress", {
                get: function() {
                    return this.curTime / this.endTime
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.onLoad = function() {
                this.activeAtStart && this.startTimer()
            }, e.prototype.startTimer = function(t, e, o) {
                this.isRun = !0, "number" == typeof o && (this.targetTimeRandom = o), "number" == typeof o && (this.targetTime = t), "number" == typeof t && (e === cc.macro.REPEAT_FOREVER ? this.targetLoop = cc.macro.REPEAT_FOREVER : this.targetLoop = Math.round(e)), this.endTime = this.targetTime
            }, e.prototype.stopTimer = function() {
                this.isRun = !1
            }, e.prototype.onEventStart = function() {
                this.startTimer()
            }, e.prototype.onEventStop = function() {
                this.stopTimer()
            }, e.prototype.onFinishTimer = function() {
                var t = this;
                this.curTime = 0, this.loopTime += 1, this.events.forEach(function(e) {
                    e.emit([t.loopTime, t.targetLoop, e.customEventData])
                }), this.targetLoop !== cc.macro.REPEAT_FOREVER && this.loopTime >= this.targetLoop ? this.stopTimer() : 0 !== this.targetTimeRandom ? this.endTime = this.targetTime + (2 * Math.random() - 1) * this.targetTimeRandom : this.endTime = this.targetTime
            }, e.prototype.update = function(t) {
                if (!1 !== this.isRun && !0 !== this.paused) {
                    var e = 60 * t / 60;
                    this.curTime += e, this.curTime >= this.endTime && this.onFinishTimer()
                }
            }, e.TYPE = i, __decorate([r({
                tooltip: "\u8ba1\u65f6\u5668\u6807\u7b7e\uff0c\u7528\u4e8e\u8bc6\u522b\u5f53\u524d\u7684\u8ba1\u65f6\u5668"
            })], e.prototype, "tag", void 0), __decorate([r], e.prototype, "activeAtStart", void 0), __decorate([r], e.prototype, "_type", void 0), __decorate([r({
                type: cc.Enum(i)
            })], e.prototype, "type", null), __decorate([r({
                tooltip: "\u76ee\u6807\u7684\u65f6\u95f4",
                displayName: "Time"
            })], e.prototype, "targetTime", void 0), __decorate([r({
                tooltip: "\u76ee\u6807\u65f6\u95f4\u968f\u673a\u504f\u79fb\u503c",
                displayName: "Time Random",
                visible: function() {
                    return this.type !== i.ONCE
                }
            })], e.prototype, "targetTimeRandom", void 0), __decorate([r({
                tooltip: "\u91cd\u590d\u6b21\u6570",
                type: cc.Integer,
                displayName: "Repeat Count",
                visible: function() {
                    return this.type === i.REPEAT
                }
            })], e.prototype, "targetLoop", void 0), __decorate([r(cc.Component.EventHandler)], e.prototype, "events", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/Timer (\u5b9a\u65f6\u5668)")], e)
        }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvUITween: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5d876QDxJ9DKZzPxMH4WpGU", "BhvUITween"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../utils/commonTween"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.animationPopIn = i.ANI_ACTION_TYPE.SCALE, e.animationPopOut = i.ANI_ACTION_TYPE.SCALE, e.easePopIn = i.EASE_TYPE.SineInOut, e.easePopOut = i.EASE_TYPE.SineInOut, e.easeTime = 1, e.easeInDelayTime = 0, e
                }
                return __extends(e, t), e.prototype.start = function() {
                    var t = {
                            type: this.animationPopIn,
                            time: this.easeTime / 2,
                            isActionOut: !1,
                            ease: this.easePopIn,
                            node: this.node,
                            width: this.node.width,
                            height: this.node.height,
                            delay: this.easeInDelayTime
                        },
                        e = {
                            type: this.animationPopOut,
                            time: this.easeTime / 2,
                            isActionOut: !0,
                            ease: this.easePopOut,
                            node: this.node,
                            width: this.node.width,
                            height: this.node.height,
                            delay: this.easeInDelayTime
                        },
                        o = (i.TweenConfig.getAction(e), i.TweenConfig.getAction(t));
                    this.node.runAction(cc.sequence([o, cc.callFunc(function() {
                        cc.log("\u52a8\u753b in  \u5b8c\u6210")
                    })]))
                }, __decorate([r({
                    type: cc.Enum(i.ANI_ACTION_TYPE),
                    tooltip: "\u5165\u53e3\u52a8\u753b",
                    displayName: "Animation In"
                })], e.prototype, "animationPopIn", void 0), __decorate([r({
                    type: cc.Enum(i.ANI_ACTION_TYPE),
                    tooltip: "\u5f39\u51fa\u52a8\u753b",
                    displayName: "Animation Out"
                })], e.prototype, "animationPopOut", void 0), __decorate([r({
                    type: cc.Enum(i.EASE_TYPE),
                    tooltip: "\u5165\u53e3\u52a8\u753b \u7684 TWEEN \u7c7b\u578b",
                    displayName: "Animation In Ease"
                })], e.prototype, "easePopIn", void 0), __decorate([r({
                    type: cc.Enum(i.EASE_TYPE),
                    tooltip: "\u5f39\u51fa\u52a8\u753b \u7684 TWEEN \u7c7b\u578b",
                    displayName: "Animation Out Ease"
                })], e.prototype, "easePopOut", void 0), __decorate([r({
                    tooltip: "\u5207\u9875\u52a8\u753b\u7684\u64ad\u653e\u65f6\u95f4"
                })], e.prototype, "easeTime", void 0), __decorate([r({
                    tooltip: "\u4e2d\u95f4\u52a8\u753b\u5ef6\u8fdf\u65f6\u95f4",
                    displayName: "EaseIn DelayTime "
                })], e.prototype, "easeInDelayTime", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/Animate/UI Tween (UI \u52a8\u753b)")], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {
        "./../utils/commonTween": "commonTween"
    }],
    BhvValueSnyc: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b1a84JixeVKIZLOGW9mPsE0", "BhvValueSnyc"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.menu,
            s = i.executeInEditMode,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.useValueMap = !1, e.useValueClamp = !1, e.inputValueRange = cc.v2(0, 1), e.selfCompName = "", e.selfCompProperty = "", e.selfMapRange = cc.v2(0, 1), e.otherNode = null, e.otherCompName = "", e.otherCompProperty = "", e.otherMapRange = cc.v2(0, 1), e.selfComp = null, e.otherComp = null, e._preValue = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.selfCompName && this.otherCompName && this.otherCompProperty && this.selfCompProperty && (this.selfComp = "cc.Node" == this.selfCompName ? this.node : this.getComponent(this.selfCompName), this.otherComp = "cc.Node" == this.otherCompName ? this.otherNode : this.otherNode.getComponent(this.otherCompName), this.selfCompProperty in this.selfComp == !1 && cc.error("BhvValueSync:", this.selfCompProperty, " \u4e0d\u5728" + this.selfCompName + "\u7ec4\u4ef6\u5185"), this.otherCompProperty in this.otherComp == !1 && cc.error("BhvValueSync:", this.otherCompProperty, "\u4e0d\u5728" + this.selfCompName + "\u7ec4\u4ef6\u5185"))
                }, e.prototype.update = function(t) {
                    if (this.selfComp && this.otherComp) {
                        var e = this.selfComp[this.selfCompProperty];
                        void 0 !== e && null !== e && e !== this._preValue && (this._preValue = e, this.useValueClamp && (e > this.inputValueRange.y && (e = this.inputValueRange.y), e < this.inputValueRange.x && (e = this.inputValueRange.x)), this.useValueMap ? this.otherComp[this.otherCompProperty] = this._map(e, this.selfMapRange, this.otherMapRange) : this.otherComp[this.otherCompProperty] = e)
                    }
                }, e.prototype._map = function(t, e, o) {
                    var i = e.x,
                        n = e.y,
                        a = o.x;
                    return (o.y - a) * (t - i) / (n - i) + a
                }, __decorate([a({
                    tooltip: "\u5c06\u503c\u6620\u5c04\u5230\u53e6\u5916\u4e00\u4e2a\u503c\u4e0a\uff08\u53ef\u4ee5\u9650\u5236\u53d6\u503c\u7684\u8303\u56f4)"
                })], e.prototype, "useValueMap", void 0), __decorate([a({
                    tooltip: "\u533a\u95f4\u503c\u9650\u5236,\u4fdd\u8bc1\u8f93\u5165\u7684\u503c\u4e0d\u4f1a\u8d85\u8fc7\u533a\u95f4\u8303\u56f4"
                })], e.prototype, "useValueClamp", void 0), __decorate([a({
                    visible: function() {
                        return this.useValueClamp
                    },
                    tooltip: "\u9650\u5236\u8f93\u5165\u503c\u7684\u533a\u95f4\uff0cX= \u6700\u5c0f\u503c Y=\u6700\u5927\u503c",
                    displayName: "Value Clamp"
                })], e.prototype, "inputValueRange", void 0), __decorate([a({
                    tooltip: "\u7ec4\u4ef6\u540d,\u53ef\u4ee5\u4e3a\u81ea\u5df1\u7684\u7ec4\u4ef6\u540d(\u7c7b\u540d)\u6216\u8005cc.Node \u6216\u8005cc\u5176\u4ed6\u7ec4\u4ef6\u540d"
                })], e.prototype, "selfCompName", void 0), __decorate([a], e.prototype, "selfCompProperty", void 0), __decorate([a({
                    visible: function() {
                        return this.useValueMap
                    },
                    tooltip: "\u5c06\u503c\u6620\u5c04\u533a\u95f4\uff0cX= \u6700\u5c0f\u503c Y=\u6700\u5927\u503c",
                    displayName: "Map Range"
                })], e.prototype, "selfMapRange", void 0), __decorate([a(cc.Node)], e.prototype, "otherNode", void 0), __decorate([a], e.prototype, "otherCompName", void 0), __decorate([a], e.prototype, "otherCompProperty", void 0), __decorate([a({
                    visible: function() {
                        return this.useValueMap
                    },
                    tooltip: "\u5c06\u503c\u6620\u5c04\u533a\u95f4\uff0cX= \u6700\u5c0f\u503c Y=\u6700\u5927\u503c",
                    displayName: "Map Range"
                })], e.prototype, "otherMapRange", void 0), e = __decorate([n, r("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Value Sync (\u503c\u540c\u6b65)"), s], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    BhvWrap: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ff4e7nrSzxH5oOlfG34n9Xr", "BhvWrap"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu,
            c = n.disallowMultiple;
        (function(t) {
            t[t.parent = 0] = "parent", t[t.canvas = 1] = "canvas", t[t.custom = 2] = "custom"
        })(i || (i = {}));
        var l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.wrapMode = i.parent, e.customNode = null, e
            }
            return __extends(e, t), e.prototype.start = function() {
                var t = this.node,
                    e = t.getBoundingBox(),
                    o = t.getAnchorPoint(),
                    i = new cc.Node("test");
                i.setParent(this.node), i.setPosition(0, 0);
                var n = i.addComponent(cc.Graphics);
                n.rect(-e.width * o.x, -e.height * o.y, e.width, e.height), n.fillColor = cc.color(0, 255, 155, 155), n.fill()
            }, e.prototype.getBBOX = function(t) {
                if (!t) return {};
                var e = t.getBoundingBox(),
                    o = t.getAnchorPoint();
                return {
                    left: e.x - e.width * o.x,
                    right: e.x + e.width * o.x,
                    top: e.y - e.height * o.y,
                    bottom: e.y + e.height * o.y
                }
            }, e.prototype.update = function(t) {
                var e, o = this.getBBOX(this.node),
                    n = cc.find("Canvas").getContentSize(),
                    a = this.node.getParent(),
                    r = 0,
                    s = 0,
                    c = 0,
                    l = 0;
                this.wrapMode === i.canvas ? (s = n.width, l = n.height) : this.wrapMode === i.parent && a ? (r = (e = this.getBBOX(a)).left, s = e.right, c = e.top, l = e.bottom) : this.wrapMode === i.custom && this.customNode && (r = (e = this.getBBOX(this.customNode)).left, s = e.right, c = e.top, l = e.bottom), o.right < r ? this.node.x = s - 1 + (this.node.x - o.left) : o.left > s ? this.node.x = r + 1 - (o.right - this.node.x) : o.bottom < c ? this.node.y = l - 1 + (this.node.y - o.top) : o.top > l && (this.node.y = c + 1 - (o.bottom - this.node.y))
            }, __decorate([r({
                type: cc.Enum(i),
                tooltip: "wrap \u6a21\u5f0f"
            })], e.prototype, "wrapMode", void 0), __decorate([r(cc.Node)], e.prototype, "customNode", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/Wrap (\u5305\u88c5)"), c], e)
        }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BhvZIndex: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fe5f16FCrFB57ieFA33ulDF", "BhvZIndex"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.executeInEditMode,
            s = i.menu,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.zIndex = 0, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.node.zIndex = this.zIndex
                }, e.prototype.update = function(t) {
                    0
                }, __decorate([a({
                    type: cc.Integer
                })], e.prototype, "zIndex", void 0), e = __decorate([n, r, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/UI/Z INDEX (\u5c42\u7ea7\u987a\u5e8f)")], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {}],
    Bomb: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "11f286leUJCY7QNoqDXo3dH", "Bomb"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.timerMax = 1, e.timer = 1, e.hasExploded = !1, e.debugLabel = null, e
                }
                return __extends(e, t), e.prototype.start = function() {
                    this.timer = this.timerMax
                }, e.prototype.explode = function() {
                    this.hasExploded = !0;
                    var t = this.node.getChildByName("bomb_collide"),
                        e = this.node.getChildByName("particle_bomb");
                    this.node.getChildByName("item_bomb").active = !1, e.active = !0, e.getComponent(cc.ParticleSystem).enabled = !0, t.active = !0, i.mg.audio.playSE("boom")
                }, e.prototype.update = function(t) {
                    this.hasExploded || (this.timer -= t, this.debugLabel && (this.debugLabel.string = (Math.floor(100 * this.timer) / 100).toString()), this.timer <= 0 && this.explode())
                }, __decorate([r(cc.Label)], e.prototype, "debugLabel", void 0), e = __decorate([a], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    CellChestItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f436bCJQiNMp5tMAgaSiwDA", "CellChestItem"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Plugin/ui/PlugTableViewCell"),
            a = t("../../../Behavior/ui/BhvFrameIndex"),
            r = t("../../../Behavior/ui/BhvAtlasFrame"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.index = 0, e.icon = null, e.tag = null, e.lock = null, e.box = null, e.unlock = !1, e
                }
                return __extends(e, t), e.prototype.init = function(t, e, o, n) {
                    if (this.index = t, this.data = i.mg.data.config.chest.find(function(e) {
                            return e.id == t
                        }), null == this.data) return this.box.active = !1, this.lock.active = !0, this.unlock = !1, void(this.node.opacity = 0);
                    this.node.opacity = 255;
                    var s = i.mg.data.user.treasure.unlock,
                        c = i.mg.data.user.treasure.watch; - 1 !== s.indexOf(this.index) ? (this.box.active = !0, this.lock.active = !1, this.unlock = !0) : (this.box.active = !1, this.lock.active = !0, this.unlock = !1), -1 === c.indexOf(this.index) ? this.tag.active = !0 : this.tag.active = !1, this.box.getComponent(a.default).index = this.data.rare, this.icon.getComponent(r.default).index = t
                }, e.prototype.clicked = function() {
                    if (!1 !== this.unlock) {
                        var t = cc.sequence([cc.scaleTo(.1, 1.1, .9).easing(cc.easeSineIn()), cc.scaleTo(.2, 1, 1).easing(cc.easeBackInOut())]);
                        this.node.runAction(t), cc.director.emit("CellChestItem:Click", this.index, this.node)
                    }
                }, __decorate([l(cc.Node)], e.prototype, "icon", void 0), __decorate([l(cc.Node)], e.prototype, "tag", void 0), __decorate([l(cc.Node)], e.prototype, "lock", void 0), __decorate([l(cc.Node)], e.prototype, "box", void 0), e = __decorate([c], e)
            }(n.default);
        o.default = h, cc._RF.pop()
    }, {
        "../../../Behavior/ui/BhvAtlasFrame": "BhvAtlasFrame",
        "../../../Behavior/ui/BhvFrameIndex": "BhvFrameIndex",
        "../../../Plugin/ui/PlugTableViewCell": "PlugTableViewCell",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    CellShopShip: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "80a71d+zy1MKrBIRLiZ7cmE", "CellShopShip"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Plugin/ui/PlugTableViewCell"),
            a = t("../../../Behavior/ui/BhvFrameIndex"),
            r = cc._decorator,
            s = r.ccclass,
            c = r.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.selectBox = null, e.equipIcon = null, e.lockIcon = null, e.plusIcon = null, e.icon = null, e.index = 0, e
                }
                return __extends(e, t), e.prototype.init = function(t, e, o, n) {
                    var r = this;
                    this.index = t, this.selectBox.getComponent(a.default).index = 0, this.equipIcon.active = !1, this.lockIcon.active = !0, this.plusIcon.active = !1, i.mg.sprite.set(this.icon, i.mg.PATH.SPRITE.SHIP, this.index), this.data = i.mg.data.config.ship.find(function(t) {
                        return t.id == r.index
                    }), this.selectBox.getComponent(a.default).index = this.index === e.select ? 1 : 0, this.equipIcon.active = e.equip == this.index, i.mg.sprite.set(this.icon, i.mg.PATH.SPRITE.SHIP, this.index);
                    var s = i.mg.data.user.unlockShips.indexOf(this.index);
                    this.lockIcon.active = -1 === s, i.mg.data.user.diamond >= this.data.price && s < 0 ? this.plusIcon.active = !0 : this.plusIcon.active = !1
                }, e.prototype.clicked = function() {
                    var t = cc.sequence([cc.scaleTo(.1, 1.1, .9).easing(cc.easeSineIn()), cc.scaleTo(.2, 1, 1).easing(cc.easeBackInOut())]);
                    this.node.runAction(t), cc.director.emit("CellShopShip:Click", this.index, this.node)
                }, __decorate([c(cc.Node)], e.prototype, "selectBox", void 0), __decorate([c(cc.Node)], e.prototype, "equipIcon", void 0), __decorate([c(cc.Node)], e.prototype, "lockIcon", void 0), __decorate([c(cc.Node)], e.prototype, "plusIcon", void 0), __decorate([c(cc.Node)], e.prototype, "icon", void 0), e = __decorate([s], e)
            }(n.default);
        o.default = l, cc._RF.pop()
    }, {
        "../../../Behavior/ui/BhvFrameIndex": "BhvFrameIndex",
        "../../../Plugin/ui/PlugTableViewCell": "PlugTableViewCell",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    Chest: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e4078AXgD1JpYwVlL8cP0E2", "Chest"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Behavior/ui/BhvFrameIndex"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.noKeyTips = null, e
                }
                return __extends(e, t), e.prototype.start = function() {}, e.prototype.onCollisionEnter = function(t, e) {
                    if ("Ship" === t.node.name) return i.mg.data.global.item.key <= 0 ? (this.noKeyTips.active = !0, this.noKeyTips.opacity = 255, this.noKeyTips.runAction(cc.sequence([cc.fadeIn(.5), cc.delayTime(.5), cc.fadeOut(.5)]).easing(cc.easeSineInOut()).repeat(3)), void i.mg.audio.playSE("chest_lock")) : (i.mg.audio.playSE("chest_unlock"), i.mg.data.global.item.key -= 1, this.getComponent(cc.BoxCollider).enabled = !1, void this.openChest())
                }, e.prototype.openChest = function() {
                    var t = this;
                    i.mg.data.global.collect.chest++, this.getComponent(n.default).index = 1, this.noKeyTips.active = !1, this.node.runAction(cc.sequence([cc.fadeOut(.5), cc.callFunc(function() {
                        t.node.destroy()
                    })])), cc.director.emit("game:onGetChest", i.mg.data.generateChestResult())
                }, __decorate([s(cc.Node)], e.prototype, "noKeyTips", void 0), e = __decorate([r], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {
        "../../../Behavior/ui/BhvFrameIndex": "BhvFrameIndex",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    DataManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "24ec0CcXC1FZ45G0LuPY+f5", "DataManager"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../config/dataClass"),
            n = function() {
                function t(t) {
                    this.TIME_HOUR = 36e5, this.TIME_MINUTE = 6e4, this.isReady = !1, this._saveTag = t, this.user = new i.IUserSaveData, this.global = new i.IGlobalGameData, this.config = new i.IConfigData, this.loadUserData()
                }
                return Object.defineProperty(t.prototype, "TIME_NOW", {
                    get: function() {
                        return (new Date).getTime()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.init = function() {}, t.prototype.loadJsonArray = function(t) {
                    return new Promise(function(e, o) {
                        cc.loader.loadResArray(t, cc.JsonAsset, function(t, i) {
                            t ? o(t) : e(i)
                        })
                    })
                }, t.prototype.loadJson = function(t) {
                    return new Promise(function(e, o) {
                        cc.loader.loadRes(t, cc.JsonAsset, function(t, i) {
                            t && o(t), e(i.json)
                        })
                    })
                }, t.prototype.loadUserData = function() {
                    for (var t in this.user) {
                        var e = this.getLocalStorage("user_" + t);
                        null !== e && void 0 !== e && (t in this.user && ("object" == typeof e ? this.deepCopy(this.user[t], e) : this.user[t] = e))
                    }
                }, t.prototype.saveUserData = function() {
                    for (var t in this.user) {
                        var e = this.user[t];
                        null !== e && void 0 !== e && this.setLocalStorage("user_" + t, e)
                    }
                }, t.prototype.initUserData = function() {
                    this.deepCopy(this.user, new i.IUserSaveData)
                }, t.prototype.getUserData = function() {
                    return this.user
                }, t.prototype.getGlobal = function() {
                    return this.global
                }, t.prototype.setLocalStorage = function(t, e) {
                    cc.sys.localStorage.setItem(t + this._saveTag, JSON.stringify(e))
                }, t.prototype.getLocalStorage = function(t, e) {
                    var o = cc.sys.localStorage.getItem(t + this._saveTag),
                        i = JSON.parse(o);
                    return "{}" != i && "" != i && null != i || (i = e), i
                }, t.prototype.removeLocalStorage = function(t) {
                    cc.sys.localStorage.removeItem(t + this._saveTag)
                }, t.prototype.setDefault = function(t, e) {
                    for (var o in void 0 === e && (e = !1), t)
                        if (null !== t[o] && void 0 !== t[o]) {
                            if (Array.isArray(t)) return void(t[o] = []);
                            switch (typeof t[o]) {
                                case "boolean":
                                    t[o] = !1;
                                    break;
                                case "number":
                                    t[o] = 0;
                                    break;
                                case "string":
                                    t[o] = "";
                                    break;
                                case "object":
                                    Array.isArray(t[o]) ? t[o] = [] : !0 === e && this.setDefault(t[o], e)
                            }
                        }
                }, t.prototype.deepCopy = function(t, e) {
                    if (Array.isArray(t) && Array.isArray(e)) return t.splice(0), void t.push.apply(t, e);
                    for (var o in e) o in t != !1 && ("object" == typeof e[o] ? this.deepCopy(t[o], e[o]) : t[o] = e[o]);
                    return t
                }, t.prototype.parseTimer = function(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = !0);
                    var o = Math.floor(t),
                        i = Math.floor(o / 3600),
                        n = Math.floor(o % 3600 / 60),
                        a = o % 60,
                        r = "" + n,
                        s = "" + a;
                    return a < 10 && (s = "0" + a), e ? (n < 10 && (r = "0" + n), i + ":" + r + ":" + s) : (r = "" + (n + 60 * i), n < 10 && (r = "0" + n), r + ":" + s)
                }, t.prototype.datedDifference = function(t, e) {
                    var o = new Date(t),
                        i = new Date(e),
                        n = i.getTime() - o.getTime(),
                        a = Math.floor(n / 864e5);
                    return o.getDate() === i.getDate() && o.getMonth() === i.getMonth() && o.getFullYear() === i.getFullYear() ? 0 : (a <= 0 && (a = 1), a)
                }, t.prototype.compareTimeNow = function(t, e) {
                    return (new Date).getTime() - t >= e
                }, t
            }();
        o.DataManager = n, cc._RF.pop()
    }, {
        "../config/dataClass": "dataClass"
    }],
    EditorQuickBuild: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "875702mwahGiZqb764IHS8T", "EditorQuickBuild"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property;
        n.menu, n.executeInEditMode;
        (function(t) {
            t[t.CUSTOM = 0] = "CUSTOM", t[t.VM_LABEL = 1] = "VM_LABEL", t[t.TYPE_LABEL = 2] = "TYPE_LABEL"
        })(i || (i = {}));
        var s = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.componentNames = [], e.removeThis = !0, e._build = !1, e._clear = !1, e
            }
            return __extends(e, t), Object.defineProperty(e.prototype, "build", {
                get: function() {
                    return this._build
                },
                set: function(t) {
                    var e = this;
                    this.componentNames.forEach(function(t) {
                        e.node.addComponent(t)
                    }), this.removeThis && this.destroy()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "clear", {
                get: function() {
                    return this._clear
                },
                set: function(t) {
                    var e = this;
                    this.componentNames.forEach(function(t) {
                        var o = e.node.getComponent(t);
                        o && o.destroy()
                    }), this.removeThis && this.destroy()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.start = function() {}, __decorate([r([cc.String])], e.prototype, "componentNames", void 0), __decorate([r({
                tooltip: "\u6267\u884c\u547d\u4ee4\u540e\uff0c\u662f\u5426\u81ea\u6211\u9500\u6bc1\uff1f"
            })], e.prototype, "removeThis", void 0), __decorate([r], e.prototype, "build", null), __decorate([r], e.prototype, "clear", null), e = __decorate([a], e)
        }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    GameCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fe90bPOB2pA8ZmiiNQrzb2p", "GameCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../Script/System/modelView/ViewModel"),
            n = t("./../../Script/System/mgIndex"),
            a = t("./object/Ship"),
            r = t("../../Behavior/general/BhvCameraExtra"),
            s = t("./game_tips/TipsGameState"),
            c = t("./game_tips/TipsGameTarget"),
            l = t("../ui/pop/PopGetChest"),
            h = cc._decorator,
            p = h.ccclass,
            d = h.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.playerNode = null, e.tipsGameState = null, e.TipsGameTarget = null, e.popGetChest = null, e.popTutorial = null, e.player = null, e.camera = null, e.goldCollectState = 0, e.initData = {
                        gold: 100,
                        collect: {
                            chest: 0,
                            diamond: 0,
                            nail: 0,
                            stone: 0
                        }
                    }, e.noFuel = !1, e.gameStart = !1, e.gameFinished = !1, e.gamePaused = !1, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    cc.director.getCollisionManager().enabled = !0, n.mg.pool.create("Stone"), n.mg.pool.create("Piece"), n.mg.pool.create("Item"), this.camera = cc.find("Canvas/Cameras/game_camera").getComponent(r.default), this.global = n.mg.data.global, this.player = this.playerNode.getComponent(a.default)
                }, e.prototype.start = function() {
                    var t = this;
                    if (this.goldCollectState = 0, this.gameFinished = !1, n.mg.audio.playBgm("bgm_game2", .8), 0 == n.mg.data.user.last_level) {
                        this.global.gold = 0, n.mg.data.setDefault(this.global.item), i.VM.get("global").active = !1, this.global.collect.chest = 0, this.global.collect.diamond = 0, this.global.collect.nail = 0, this.global.collect.stone = 0, i.VM.get("global").active = !0;
                        var e = n.mg.data.global.bubble_award.key;
                        e && (this.global.item.key = e), n.mg.data.global.bubble_award.key = 0
                    } else i.VM.get("global").active = !1, n.mg.data.loadGameState(), i.VM.get("global").active = !0, this.global.gold += 1, this.global.gold -= 1;
                    this.initData.gold = this.global.gold, this.initData.collect.chest = this.global.collect.chest, this.initData.collect.diamond = this.global.collect.diamond, this.initData.collect.nail = this.global.collect.nail, this.initData.collect.stone = this.global.collect.stone, n.mg.data.user.last_level += 1, this.global.level = n.mg.data.user.last_level, this.global.gold_target = n.mg.data.generateTargetGold(this.global.level), this.global.gold_next = n.mg.data.generateTargetGold(this.global.level + 1), n.mg.data.user.last_level > n.mg.data.user.high_level && (n.mg.data.user.high_level = n.mg.data.user.last_level), this.global.level = n.mg.data.user.last_level;
                    var o = n.mg.data.user.lastSelectShip;
                    this.player.setSkin(o);
                    var a = n.mg.data.config.ship.find(function(t) {
                            return t.id == o
                        }),
                        r = this.global.item;
                    this.global.ship.dig = a.dig + r.dig, this.global.ship.fuel = a.fuel + r.fuel, this.global.ship.luck = a.luck + r.luck, this.global.ship.skin = o, this.global.fuel = this.global.fuel_max = 100 + 10 * this.global.ship.fuel, this.global.time = this.global.time_max = 60 + 5 * r.timer, this.global.gold_plus = 0;
                    var c = cc.sequence([cc.scaleTo(.05, .1).easing(cc.easeSineInOut()), cc.scaleTo(1.5, 1).easing(cc.easeSineOut())]);
                    this.camera.run(c), this.camera.flash(cc.color(0, 0, 0), .3, !0, 255), this.tipsGameState.init(s.default.TYPE.GAME_START), this.camera.focusOn(this.player.node), this.player.enabled = !1, this.gameStart = !1, this.scheduleOnce(function() {
                        t.player.enabled = !0, t.gameStart = !0, t.checkTutorial()
                    }, 2)
                }, e.prototype.checkTutorial = function() {
                    var t = this;
                    1 !== n.mg.data.user.tutorial.game && (n.mg.data.user.tutorial.game = 1, this.scheduleOnce(function() {
                        t.popTutorial.active = !0
                    }, 1))
                }, e.prototype.onEnable = function() {
                    cc.director.on("game:onGetChest", this.onGetChest, this), cc.director.on("game:onGamePause", this.onGamePause, this), cc.director.on("game:onGameResume", this.onGameResume, this)
                }, e.prototype.onDisable = function() {
                    cc.director.off("game:onGetChest", this.onGetChest, this), cc.director.off("game:onGamePause", this.onGamePause, this), cc.director.off("game:onGameResume", this.onGameResume, this)
                }, e.prototype.onGamePause = function() {
                    this.gamePaused = !0, this.player.enabled = !1
                }, e.prototype.onGameResume = function() {
                    this.gamePaused = !1, this.player.enabled = !0
                }, e.prototype.onGetChest = function(t) {
                    var e = this,
                        o = n.mg.data.config.chest[t],
                        i = n.mg.data.user.treasure.unlock; - 1 === i.indexOf(t) && i.push(t);
                    var a = cc.instantiate(this.popGetChest);
                    cc.find("Canvas/TipsLayer").addChild(a), a.getComponent(l.default).init(o.id, o.name, o.price, o.rare);
                    var r = Math.round(o.price / 20);
                    this.schedule(function() {
                        n.mg.audio.playSE("collect_coin"), e.global.gold += r
                    }, .05, 20, .8)
                }, e.prototype.onUseBomb = function() {
                    console.log("\u7528\u4e86\u70b8\u5f39:", this.global.item.bomb), this.global.item.bomb >= 1 ? (this.global.item.bomb -= 1, this.player.shootBomb(), n.mg.audio.playSE("btn_click")) : n.mg.audio.playSE("btn_error", .3)
                }, e.prototype.onDestroy = function() {
                    n.mg.pool.clearAll()
                }, e.prototype.onGameFinish = function() {
                    n.mg.audio.stopBgm(), this.gameFinished = !0;
                    var t = this.global.gold >= this.global.gold_target;
                    this.player.enabled = !1, n.mg.data.user.collect.gold += this.global.gold - this.initData.gold, n.mg.data.user.collect.chest += this.global.collect.chest - this.initData.collect.chest, n.mg.data.user.collect.diamond += this.global.collect.diamond - this.initData.collect.diamond, n.mg.data.user.collect.nail += this.global.collect.nail - this.initData.collect.nail, n.mg.data.user.collect.stone += this.global.collect.stone + this.initData.collect.stone, n.mg.data.global.item.dig = 0, n.mg.data.global.item.fuel = 0, n.mg.data.global.item.luck = 0, n.mg.data.saveGameState(), t ? this.tipsGameState.init(s.default.TYPE.GAME_FINISH) : (n.mg.data.user.last_level = 0, this.global.time <= 0 ? this.tipsGameState.init(s.default.TYPE.TIME_OUT) : this.tipsGameState.init(s.default.TYPE.NO_FUEL)), t ? n.mg.scene.preload("shop") : n.mg.scene.preload("result"), n.mg.data.saveUserData();
                    var e = cc.find("Canvas/UILayer");
                    e.runAction(cc.spawn([cc.fadeTo(.5, 0).easing(cc.easeSineOut()), cc.callFunc(function() {
                        e.destroy()
                    })])), this.camera.run(cc.scaleTo(2, .2).easing(cc.easeSineInOut())), this.camera.fade(cc.color(0, 0, 0), .6, !0, 255), this.scheduleOnce(function() {
                        t ? n.mg.scene.load("shop", null, "UI") : n.mg.scene.load("result", null, "UI")
                    }, 2)
                }, e.prototype.update = function(t) {
                    var e = this;
                    if (!0 !== this.gameFinished && !1 !== this.gameStart && !0 !== this.gamePaused) switch (this.global.fuel <= 0 && this.player.slowDown(.3), this.global.time > 0 ? (this.global.time -= t, this.global.fuel <= 0 && (this.global.time -= 4 * t), 0 == this.noFuel && this.global.time <= 10 && (this.noFuel = !0, this.camera.run(cc.sequence([cc.scaleTo(1, .95).easing(cc.easeSineInOut()), cc.callFunc(function() {
                        e.camera.flash(cc.color(255, 0, 0), .5, !0, 155)
                    }), cc.scaleTo(1, 1.1).easing(cc.easeSineInOut())]).repeat(5)))) : this.onGameFinish(), this.goldCollectState) {
                        case 0:
                            this.global.gold >= .25 * this.global.gold_target && (this.TipsGameTarget.init(0), this.goldCollectState = 1);
                            break;
                        case 1:
                            this.global.gold >= .5 * this.global.gold_target && (this.goldCollectState = 2, this.TipsGameTarget.init(1));
                            break;
                        case 2:
                            this.global.gold >= .75 * this.global.gold_target && (this.goldCollectState = 3, this.TipsGameTarget.init(2));
                            break;
                        case 3:
                            this.global.gold >= this.global.gold_target && (this.goldCollectState = 4, this.TipsGameTarget.init(3))
                    }
                }, __decorate([d(cc.Node)], e.prototype, "playerNode", void 0), __decorate([d(s.default)], e.prototype, "tipsGameState", void 0), __decorate([d(c.default)], e.prototype, "TipsGameTarget", void 0), __decorate([d(cc.Prefab)], e.prototype, "popGetChest", void 0), __decorate([d(cc.Node)], e.prototype, "popTutorial", void 0), e = __decorate([p], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../../Behavior/general/BhvCameraExtra": "BhvCameraExtra",
        "../ui/pop/PopGetChest": "PopGetChest",
        "./../../Script/System/mgIndex": "mgIndex",
        "./../../Script/System/modelView/ViewModel": "ViewModel",
        "./game_tips/TipsGameState": "TipsGameState",
        "./game_tips/TipsGameTarget": "TipsGameTarget",
        "./object/Ship": "Ship"
    }],
    GodModeMenu: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6c2930P2d5MKoILYGGsAJNf", "GodModeMenu"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../Script/System/mgIndex"),
            n = cc._decorator,
            a = n.ccclass,
            r = (n.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {}, e.prototype.start = function() {
                    console.log("I AM IN!")
                }, e.prototype.onButtonDown = function(t, e) {
                    var o = i.mg.data.user;
                    switch (e) {
                        case "init_tutorial":
                            o.tutorial.bubble = 0, o.tutorial.game = 0, o.tutorial.shop = 0;
                            break;
                        case "init_data":
                            i.mg.data.initUserData();
                            break;
                        case "add_diamond":
                            o.diamond += 100;
                            break;
                        case "add_diamond_mult":
                            o.diamond *= 10;
                            break;
                        case "add_gold":
                            i.mg.data.user.collect.gold += 1e3;
                            break;
                        case "add_gold_mult":
                            i.mg.data.user.collect.gold *= 10;
                            break;
                        case "ship_unlock":
                            i.mg.data.user.unlockShips = [];
                            for (var n = i.mg.data.config.ship, a = 0; a < n.length; a++) i.mg.data.user.unlockShips.push(a);
                            break;
                        case "ship_lock":
                            i.mg.data.user.unlockShips = [0];
                            break;
                        case "level_init":
                            i.mg.data.global.level = 1, i.mg.data.global.gold_target = i.mg.data.generateTargetGold(i.mg.data.global.level);
                            break;
                        case "level_next":
                            i.mg.data.global.level += 1, i.mg.data.global.gold = i.mg.data.generateTargetGold(i.mg.data.global.level - 1), i.mg.data.global.gold_target = i.mg.data.generateTargetGold(i.mg.data.global.level);
                            break;
                        case "add_item":
                            for (var r in i.mg.data.global.item) i.mg.data.global.item[r] += 1;
                            break;
                        case "init_item":
                            for (var r in i.mg.data.global.item) i.mg.data.global.item[r] = 0;
                            break;
                        case "free_gift":
                            i.mg.data.user.free_gift.active = !1, i.mg.data.user.free_gift.timer = (new Date).getTime() - i.mg.data.TIME_HOUR * i.mg.data.config.free_gift_timer_hour + .5 * i.mg.data.TIME_MINUTE, i.mg.data.saveUserData(), console.log(Math.floor((i.mg.data.TIME_NOW - i.mg.data.user.free_gift.timer) / i.mg.data.TIME_MINUTE))
                    }
                }, e = __decorate([a], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {
        "./../../Script/System/mgIndex": "mgIndex"
    }],
    I18nFont: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "03140G20U9OHJ3IDflDNrt1", "I18nFont"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../Script/System/mgIndex"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu,
            c = n.disallowMultiple,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.defaultFontSize = 20, e.fontArray = ["en,20"], e.ignoreDefaultLanguage = !0, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    if (this.enabled) {
                        var t = this.node.getComponent(cc.Label),
                            e = i.mg.i18n.language;
                        if (!this.ignoreDefaultLanguage || !i.mg.i18n.isDefaultLanguage) {
                            t.isSystemFontUsed = !0, t.font = null;
                            var o = this.fontArray.map(function(t) {
                                return t.split(",")
                            }).find(function(t) {
                                return t[0] == e
                            });
                            o ? (o[2] && (t.fontFamily = o[2]), t.fontSize = parseInt(o[1])) : t.fontSize = this.defaultFontSize
                        }
                    }
                }, e.prototype.start = function() {}, __decorate([r], e.prototype, "defaultFontSize", void 0), __decorate([r({
                    type: [cc.String],
                    tooltip: '\u6587\u672c\u683c\u5f0f: "lang,size,font-family",'
                })], e.prototype, "fontArray", void 0), __decorate([r], e.prototype, "ignoreDefaultLanguage", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/I18N/Font (I18N \u5b57\u4f53)"), c], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {
        "./../../Script/System/mgIndex": "mgIndex"
    }],
    I18nLabel: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d9c7b5gtTdOyqjBipwRV+o6", "I18nLabel"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../Script/System/mgIndex"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.menu,
            c = n.disallowMultiple,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.i18Path = "", e.staticMode = !1, e.textArray = ["en,text"], e._tempArray = [], e.defaultText = "", e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.defaultText = this.getComponent(cc.Label).string, this._tempArray = this.textArray.map(function(t) {
                        var e = t.split(",");
                        if (!(t.length <= 2)) return [e[0] || "?", e.slice(1).join("") || "?"]
                    }), this.updateText()
                }, e.prototype.updateText = function() {
                    var t = this.node.getComponent(cc.Label),
                        e = i.mg.i18n.language;
                    if (this.staticMode) {
                        var o = this._tempArray.find(function(t) {
                            return t[0] === e
                        });
                        t.string = null == o ? this.defaultText : o[1]
                    } else t.string = i.mg.i18n.t(this.i18Path)
                }, e.prototype.onEnable = function() {
                    cc.director.on("I18N:CHANGE_LANGUAGE", this.changeLanguage, this)
                }, e.prototype.onDisable = function() {
                    cc.director.off("I18N:CHANGE_LANGUAGE", this.changeLanguage, this)
                }, e.prototype.changeLanguage = function() {
                    this.updateText()
                }, __decorate([r({
                    tooltip: "\u9ed8\u8ba4\u4f7f\u7528\u8282\u70b9\u540d\u4f5c\u4e3a\u8def\u5f84,\u4f60\u4e5f\u53ef\u4ee5\u586b\u5199\u76f4\u63a5\u8def\u5f84\u6765\u6307\u5b9a",
                    visible: function() {
                        return !1 === this.staticMode
                    }
                })], e.prototype, "i18Path", void 0), __decorate([r], e.prototype, "staticMode", void 0), __decorate([r({
                    type: [cc.String],
                    tooltip: '\u6587\u672c\u683c\u5f0f: "lang,text",',
                    visible: function() {
                        return !0 === this.staticMode
                    }
                })], e.prototype, "textArray", void 0), e = __decorate([a, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/I18N/Label (I18N \u6587\u672c)"), c], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {
        "./../../Script/System/mgIndex": "mgIndex"
    }],
    I18nManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bd1e3NUIG9FJoehYc8kBKW8", "I18nManager"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../config/loadPath"),
            n = i.CONFIG_SYSTEM.I18N_DEFAULT_LANGUAGE || "en",
            a = (i.CONFIG_SYSTEM.I18N_DEBUG_LANGUAGE, ["en", "zh"]),
            r = function() {
                function t() {
                    this.language = "en", this.defaultLanguage = n, this._isDefaultLanguage = !1, this._langData = {}, this.isReady = !1, this.language = this.getLanguage()
                }
                return Object.defineProperty(t.prototype, "isDefaultLanguage", {
                    get: function() {
                        return this.language === n
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.init = function(t) {
                    return __awaiter(this, void 0, Promise, function() {
                        var t;
                        return __generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    if (t = this.getLangDataPath(), !0 === this.isReady) return [2, !0];
                                    e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, , 4]), [4, this.loadLanguageData(t)];
                                case 2:
                                    return e.sent(), this.isReady = !0, [3, 4];
                                case 3:
                                    throw e.sent();
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.setLanguage = function(t) {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, o;
                        return __generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (t == this.language) return [2];
                                    e = this.language, this.language = t, o = this.getLangDataPath(), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, this.loadLanguageData(o)];
                                case 2:
                                    return i.sent(), cc.director.emit("I18N:CHANGE_LANGUAGE", this.language), [3, 4];
                                case 3:
                                    return i.sent(), this.language = e, [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.filterText = function(t) {
                    var e = /\{(.+?)\}/g.exec(t);
                    return e.length > 1 ? e[1] : t
                }, t.prototype.searchObjectNode = function(t, e) {
                    for (var o = e.split("."), i = t, n = 0; n < o.length; n++) {
                        var a = i[o[n]];
                        if (null == a) {
                            i = null;
                            break
                        }
                        i = a
                    }
                    return i
                }, t.prototype.getLanguage = function() {
                    var t = cc.sys.language;
                    return t = t.toLocaleLowerCase().substr(0, 2), -1 === a.indexOf(t) && (t = n), t
                }, t.prototype.loadLanguageData = function(t) {
                    var e = this;
                    return new Promise(function(o, i) {
                        cc.loader.loadRes(t, cc.JsonAsset, function(t, n) {
                            t ? i(t) : (e._langData = n.json, o(e._langData))
                        })
                    })
                }, t.prototype.t = function(t, e) {
                    var o = t.trim(),
                        i = this.searchObjectNode(this._langData, o);
                    return null == i && (i = e), i
                }, t.prototype.getLangDataPath = function() {
                    var t = this.language || "en",
                        e = i.CONFIG_LOAD_PATH.LANGUAGE.DATA + t.toLowerCase();
                    return null == e && (e = i.CONFIG_LOAD_PATH.LANGUAGE.DATA + "en"), e
                }, t.prototype.getLangPath = function(t) {
                    return void 0 === t && (t = ""), i.CONFIG_LOAD_PATH.LANGUAGE[this.language] + t
                }, t
            }();
        o.default = r, cc._RF.pop()
    }, {
        "./../config/loadPath": "loadPath"
    }],
    I18nSprite: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "99ba8INvDVMWrpSYhvnKbuA", "I18nSprite"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../Script/System/mgIndex"),
            n = t("../ui/BhvFrameIndex"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = a.disallowMultiple,
            h = a.executeInEditMode,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.i18Path = "", e.multMode = !1, e.changeAnimation = !0, e.defaultSpriteFrame = null, e.defaultSpriteFrames = [], e
                }
                return __extends(e, t), e.prototype.onRestore = function() {
                    this.checkMultMode()
                }, e.prototype.onLoad = function() {
                    if (this.checkMultMode(), this.multMode) {
                        var t = this.node.getComponent(n.default);
                        t.spriteFrames;
                        this.defaultSpriteFrames = t.spriteFrames
                    } else {
                        var e = this.node.getComponent(cc.Sprite).spriteFrame;
                        this.defaultSpriteFrame = e, "" == this.i18Path && (this.i18Path = e ? e.name : this.node.name)
                    }
                    this.updateLanguage()
                }, e.prototype.start = function() {}, e.prototype.onEnable = function() {
                    cc.director.on("I18N:CHANGE_LANGUAGE", this.updateLanguage, this)
                }, e.prototype.onDisable = function() {
                    cc.director.off("I18N:CHANGE_LANGUAGE", this.updateLanguage, this)
                }, e.prototype.checkMultMode = function() {
                    var t = this.node.getComponent(n.default);
                    this.multMode = !!t
                }, e.prototype.updateLanguage = function() {
                    var t = i.mg.i18n.isDefaultLanguage;
                    if (this.multMode) {
                        var e = this.node.getComponent(n.default);
                        if (t) e.spriteFrames = this.defaultSpriteFrames;
                        else {
                            var o = e.spriteFrames.map(function(t) {
                                return t.name
                            });
                            i.mg.sprite.getFrames(i.mg.i18n.getLangPath(), o, function(t) {
                                t && (e.spriteFrames = t, e.index = e.index)
                            })
                        }
                    } else {
                        var a = this.node.getComponent(cc.Sprite);
                        t ? a.spriteFrame = this.defaultSpriteFrame : (this.changeAnimation && (this.node.opacity = 0, this.node.runAction(cc.fadeIn(.5))), i.mg.sprite.set(this.node, i.mg.i18n.getLangPath(), this.i18Path))
                    }
                }, __decorate([s({
                    tooltip: "\u9ed8\u8ba4\u4f7f\u7528\u56fe\u7247\u7684\u5e27\u540d\u4f5c\u4e3a\u8def\u5f84,\u4f60\u4e5f\u53ef\u4ee5\u586b\u5199\u76f4\u63a5\u8def\u5f84\u6765\u6307\u5b9a",
                    visible: function() {
                        return !1 === this.multMode
                    }
                })], e.prototype, "i18Path", void 0), __decorate([s({
                    tooltip: "\u591a\u56fe\u6a21\u5f0f\uff0c\u7528\u4e8e\u4e00\u7ec4\u9700\u8981\u5207\u6362\u7684 spriteFrames",
                    readonly: !0
                })], e.prototype, "multMode", void 0), __decorate([s({
                    tooltip: "\u589e\u52a0\u5207\u6362\u56fe\u7247\u65f6\u7684\u8fc7\u6e21\u52a8\u753b?"
                })], e.prototype, "changeAnimation", void 0), e = __decorate([r, c("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/I18N/Sprite (I18N \u7cbe\u7075)"), l, h], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../ui/BhvFrameIndex": "BhvFrameIndex",
        "./../../Script/System/mgIndex": "mgIndex"
    }],
    InitManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "034e8pJGNBFroNcxIR2mQ56", "InitManager"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t) {
                this.progress = 0, this.isReady = !1, this.plugins = t
            }
            return t.prototype.init = function(t) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (this.isReady) return console.error("\u5df2\u7ecf\u5b8c\u6210\u521d\u59cb\u5316"), [2];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 5, , 6]), [4, this.plugins.i18n.init()];
                            case 2:
                                return e.sent(), t(1, 3), [4, this.plugins.data.init()];
                            case 3:
                                return e.sent(), t(2, 3), [4, this.plugins.scene.init()];
                            case 4:
                                return e.sent(), t(3, 3), this.isReady = !0, [3, 6];
                            case 5:
                                throw e.sent();
                            case 6:
                                return [2]
                        }
                    })
                })
            }, t
        }();
        o.default = i, cc._RF.pop()
    }, {}],
    ItemCardCell: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6ccb5ZxFaBG3ajQa3emGi83", "ItemCardCell"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../../Script/System/modelView/VMParent"),
            n = cc._decorator,
            a = n.ccclass,
            r = (n.property, n.executionOrder, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.data = {
                        icon: 0,
                        level: 1,
                        price: 125,
                        buy: 0
                    }, e
                }
                return __extends(e, t), e.prototype.init = function(t) {
                    this.data.icon = t.icon, this.data.level = t.level, this.data.price = t.price, this.data.buy = t.buy
                }, e.prototype.setBuyState = function(t) {
                    this.data.buy = t
                }, e = __decorate([a], e)
            }(i.default));
        o.default = r, cc._RF.pop()
    }, {
        "../../../Script/System/modelView/VMParent": "VMParent"
    }],
    Item: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bffe42vj1hH0qs9SoyzbA7p", "Item"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Behavior/ui/BhvFrameIndex"),
            a = cc._decorator,
            r = a.ccclass,
            s = (a.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.index = 0, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.init()
                }, e.prototype.init = function() {
                    var t = i.mg.rnd.choose([0, 1, 2, 3, 4, 5], [.1, .1, .1, .1, .3, .3]);
                    this.index = t, this.node.getChildByName("icon").getComponent(n.default).index = t
                }, e.prototype.onCollisionEnter = function(t, e) {
                    var o = this;
                    if ("Ship" == t.node.name) {
                        i.mg.audio.playSE("bubble_unlock"), i.mg.audio.playSE("get_item");
                        var n = i.mg.data.global;
                        switch (this.index) {
                            case 0:
                                n.ship.dig++;
                                break;
                            case 1:
                                n.ship.fuel++, i.mg.math.maxAdd(n.fuel, .1 * n.fuel_max, n.fuel_max);
                                break;
                            case 2:
                                n.ship.luck++;
                                break;
                            case 3:
                                n.item.nail++, n.collect.nail++;
                                break;
                            case 4:
                                n.item.key++;
                                break;
                            case 5:
                                n.item.bomb++
                        }
                        this.getComponent(cc.CircleCollider).enabled = !1, this.node.runAction(cc.sequence([cc.spawn([cc.fadeTo(1, 0), cc.scaleTo(1, 4).easing(cc.easeSineInOut())]), cc.callFunc(function() {
                            i.mg.pool.find("Item").put(o.node), o.unscheduleAllCallbacks()
                        })]))
                    }
                }, e = __decorate([r], e)
            }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {
        "../../../Behavior/ui/BhvFrameIndex": "BhvFrameIndex",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    JsonOb: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "000b00Lx19Ke4hAFc9/Qlnh", "JsonOb"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = Object.prototype,
            n = {
                obj: "[object Object]",
                array: "[object Array]"
            },
            a = ["push", "pop", "shift", "unshift", "short", "reverse", "splice"],
            r = function() {
                function t(t, e) {
                    i.toString.call(t) !== n.obj && i.toString.call(t) !== n.array && console.error("\u8bf7\u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u6216\u6570\u7ec4"), this._callback = e, this.observe(t)
                }
                return t.prototype.observe = function(t, e) {
                    var o = this;
                    i.toString.call(t) === n.array && this.overrideArrayProto(t, e), Object.keys(t).forEach(function(a) {
                        var r = o,
                            s = t[a],
                            c = e && e.slice();
                        c ? c.push(a) : c = [a], Object.defineProperty(t, a, {
                            get: function() {
                                return s
                            },
                            set: function(t) {
                                s !== t && ("[object Object]" === i.toString.call(t) && r.observe(t, c), r._callback(t, s, c), s = t)
                            }
                        }), i.toString.call(t[a]) !== n.obj && i.toString.call(t[a]) !== n.array || o.observe(t[a], c)
                    }, this)
                }, t.prototype.overrideArrayProto = function(t, e) {
                    var o, i = Array.prototype,
                        n = Object.create(Array.prototype),
                        r = this;
                    a.forEach(function(t) {
                        Object.defineProperty(n, t, {
                            value: function() {
                                var n = this.slice();
                                return o = i[t].apply(this, arguments), r.observe(this, e), r._callback(this, n, e), o
                            }
                        })
                    }), t.__proto__ = n
                }, t
            }();
        o.JsonOb = r, cc._RF.pop()
    }, {}],
    LCGenerator: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a7021YI/7NHP6KM9ll9IWbj", "LCGenerator"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {
                this.m = 4294967296, this.a = 1664525, this.c = 1013904223
            }
            return t.prototype.setSeed = function(t) {
                this.z = this.seed = (null == t ? Math.random() * this.m : t) >>> 0
            }, t.prototype.getSeed = function() {
                return this.seed
            }, t.prototype.rand = function() {
                return this.z = (this.a * this.z + this.c) % this.m, this.z / this.m
            }, t
        }();
        o.LCGenerator = i, cc._RF.pop()
    }, {}],
    LoadingCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "24f8fRUwgBGDJJeG5RglLm3", "LoadingCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.loadingLabel = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    var t = this;
                    this.loadingLabel.node.active = !1, this.node.opacity = 0, this.node.runAction(cc.sequence([cc.fadeTo(.5, 255), cc.delayTime(1), cc.fadeTo(.5, 0)])), i.mg.initial.init(function(e, o) {
                        t.loadingLabel.string = "\u521d\u59cb\u5316\u6e38\u620f\u914d\u7f6e (" + e + "/" + o + ")"
                    }).then(function() {
                        t.loadingLabel.node.runAction(cc.fadeTo(.5, 0)), i.mg.scene.preload("home"), t.scheduleOnce(function() {
                            i.mg.scene.load("home")
                        }, 2)
                    }).catch(function(e) {
                        console.error("\u5931\u8d25:", e), t.loadingLabel.node.active = !0, t.loadingLabel.node.color = cc.color(255, 0, 0), t.loadingLabel.string = "\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5"
                    })
                }, e.prototype.start = function() {}, __decorate([r(cc.Label)], e.prototype, "loadingLabel", void 0), e = __decorate([a], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    MapGenerator: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6ccc2UqJ5lJNJ28nfXZYRlY", "MapGenerator"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../Script/System/mgIndex"),
            n = t("../../Behavior/general/BhvCameraExtra"),
            a = t("./MapStone"),
            r = t("./object/Stone"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.prefabMap = null, e.stonePutJson = null, e.prefabStone = null, e.prefabItem = null, e.prefabChest = null, e.loadMask = null, e.loadLabel = null, e.debug = !0, e._caches = {
                        createMapStone: [],
                        createChest: [],
                        createItem: [],
                        createMapElement: []
                    }, e.skinName = "brown", e.propData = {
                        stone: {
                            normal: .8,
                            mixed: .1,
                            mine: .1
                        },
                        mixedPurity: [1, 2, 3, 4, 5, 4, 3, 2, 1],
                        mine: {
                            gold: .7,
                            crystal: .15,
                            diamond: .05
                        },
                        item: {
                            chest: .1,
                            key: .1,
                            bomb: .1
                        }
                    }, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.layerMapStone = cc.find("Canvas/MapLayer/stone"), this.layerMapPool = cc.find("Canvas/MapLayer/pool"), this.layerStone = cc.find("Canvas/StoneLayer"), this.layerGame = cc.find("Canvas/GameLayer"), this.layerMap = cc.find("Canvas/MapLayer"), this.layerFront = cc.find("Canvas/FrontLayer"), this.layerMine = cc.find("Canvas/MineLayer")
                }, e.prototype.start = function() {
                    var t = i.mg.rnd.choose([0, 1, 2, 3, 4]);
                    i.mg.data.global.map_skin = t, this.skinName = ["brown", "green", "red", "sand", "blue"][t], this.generate(), this.debug && this.scheduleOnce(function() {
                        n.default.find("player").run(cc.scaleTo(.5, .1), !0)
                    }, 1)
                }, e.prototype.generate = function() {
                    var t = this,
                        e = this.layerMap,
                        o = this.layerFront;
                    e.width = 4400, e.height = 4400, o.width = 4400, o.height = 4400;
                    var n = i.mg.rnd.circlePacking;
                    n.setGridSize(100, 100), n.setPutCircle(1, 5);
                    var a = n.fillRect(.02, 1, 5),
                        r = n.fillRect(.02, 1.5, 5),
                        s = n.fillRect(.02, 1, 5),
                        c = [];
                    a.forEach(function(e, o) {
                        t._caches.createMapElement.push([0, 40 * e.x - 2e3, 40 * e.y - 2e3, e.r / 5])
                    }), r.forEach(function(e, o) {
                        e.r > .5 && t._caches.createMapElement.push([1, 40 * e.x - 2e3, 40 * e.y - 2e3, e.r / 5])
                    });
                    var l = 2,
                        h = 2;
                    s.forEach(function(e, o) {
                        var n = e.r / 5;
                        if (n > .8) c.push(e);
                        else if (n > .05) {
                            var a = i.mg.rnd.random();
                            a > .9 && l >= 0 ? (l--, t._caches.createChest.push([o, 40 * e.x - 2e3, 40 * e.y - 2e3])) : a > .8 && h >= 0 ? (h--, t._caches.createChest.push([o, 40 * e.x - 2e3, 40 * e.y - 2e3])) : t._caches.createMapStone.push([i.mg.rnd.choose([0, 0, 1, 2]), 40 * e.x - 2e3, 40 * e.y - 2e3, n])
                        }
                    }), c.forEach(function(e, o) {
                        var a = e.r / 5,
                            r = 40 * e.x - 2e3,
                            s = 40 * e.y - 2e3;
                        switch (i.mg.rnd.weightIndex([.2, .2, .3, .05])) {
                            case 0:
                                n.setGridSize(10, 10), n.fillCircle(.3, .5, 4).forEach(function(e) {
                                    var o = i.mg.math.map(e.x, 0, 10, -200, 200),
                                        n = i.mg.math.map(e.y, 0, 10, -200, 200),
                                        c = i.mg.math.map(e.r, 0, 5, 0, .5);
                                    c * a > 0 && t._caches.createMapStone.push([i.mg.rnd.choose([0, 0, 1, 2]), r + o, s + n, c * a])
                                });
                                break;
                            case 1:
                                t._caches.createMapStone.push([i.mg.rnd.choose([0, 1, 2]), r, s, a]);
                                break;
                            case 2:
                                t.createStoneFromJson(r, s, a)
                        }
                    });
                    this._caches.createMapElement.sort(function(t, e) {
                        var o = t[1],
                            i = t[2],
                            n = e[1],
                            a = e[2];
                        return o * o + i * i - (n * n + a * a)
                    }), this._caches.createMapStone.sort(function(t, e) {
                        var o = t[1],
                            i = t[2],
                            n = e[1],
                            a = e[2];
                        return o * o + i * i - (n * n + a * a)
                    });
                    new Promise(function(e, o) {
                        cc.log(".\u6267\u884c0");
                        var i = 0,
                            n = t._caches.createMapStone.length + t._caches.createMapElement.length - 2;
                        t._caches.createMapStone.forEach(function(o, a, r) {
                            setTimeout(function() {
                                i++, t.createMapStone.apply(t, o), t.loadLabel.string = "\u8d44\u6e90\u641c\u7d22\u4e2d:" + i + "/" + n, i >= n && e()
                            }, 10 * a)
                        }), t._caches.createMapElement.forEach(function(o, a, r) {
                            setTimeout(function() {
                                i++, t.createMapElement.apply(t, o), t.loadLabel.string = "\u8d44\u6e90\u641c\u7d22\u4e2d:" + i + "/" + n, i >= n && e()
                            }, 20 * a)
                        })
                    }).then(function() {
                        return new Promise(function(e, o) {
                            t._caches.createItem.length <= 0 ? e() : t._caches.createItem.forEach(function(o, i, n) {
                                setTimeout(function() {
                                    t.createItem.apply(t, o), t.loadLabel.string = "\u521b\u5efa\u9053\u5177" + i + "/" + n.length, i >= n.length - 1 && e()
                                }, 10 * i)
                            })
                        })
                    }).then(function() {
                        return new Promise(function(e, o) {
                            t._caches.createChest.length <= 0 ? e() : t._caches.createChest.forEach(function(o, i, n) {
                                setTimeout(function() {
                                    t.createChest.apply(t, o), t.loadLabel.string = "\u521b\u5efa\u5b9d\u7bb1" + i + "/" + n.length, i >= n.length - 1 && (cc.log("resolve"), e())
                                }, 10 * i)
                            })
                        })
                    }).then(function() {
                        t.loadLabel.string = "\u5730\u56fe\u751f\u6210\u5b8c\u6bd5", t.loadMask.runAction(cc.sequence([cc.fadeTo(.5, 0), cc.callFunc(function() {
                            t.loadMask.active = !1
                        })]))
                    })
                }, e.prototype.createStoneFromJson = function(t, e, o) {
                    for (var n = this.stonePutJson.json[i.mg.rnd.rangeInt(0, 19)], a = 0; a < n.length; a++) {
                        var r = n[a];
                        if (null == r) throw "create stone not data from json!";
                        var s = o * r[0] + t,
                            c = o * r[1] + e,
                            l = r[2],
                            h = r[3],
                            p = o * r[4];
                        0 !== a ? i.mg.rnd.random() <= .9 && this._caches.createMapStone.push([l, s, c, p, h]) : this._caches.createMapStone.push([l, s, c, p, h])
                    }
                }, e.prototype.createMapStone = function(t, e, o, n, a) {
                    if (!(Math.abs(e) < 100 || Math.abs(o) < 100)) {
                        var s = this.layerStone,
                            c = this.layerMine,
                            l = cc.instantiate(this.prefabStone),
                            h = l.getComponent(r.default),
                            p = r.default.SKIN[this.skinName];
                        null == t && (t = i.mg.rnd.choose([0, 0, 1, 2]));
                        var d, u, f = r.default.TYPE[i.mg.rnd.choose(["stone", "gold", "crystal", "diamond"], [.5, .3, .15, .05])],
                            _ = 10 * n,
                            y = [1.2, 1, 1.5, 2, 3];
                        switch (f) {
                            case r.default.TYPE.stone:
                                Math.random() > .5 ? (d = r.default.TYPE[i.mg.rnd.choose(["gold", "crystal", "diamond"], [.7, .15, .05])], u = i.mg.rnd.choose([.1, .2, .3, .4, .5, .6, .7, .8, .9], [.1, .2, .3, .4, .5, .4, .3, .2, .1]), _ *= y[0]) : (u = 0, _ *= y[1]);
                                break;
                            case r.default.TYPE.gold:
                                u = 1, _ *= y[2], s = c;
                                break;
                            case r.default.TYPE.crystal:
                                u = 1, _ *= y[3], s = c;
                                break;
                            case r.default.TYPE.diamond:
                                u = .11, _ *= y[4], s = c
                        }
                        l.rotation = 360 * Math.random(), h.init({
                            skin: p,
                            type: f,
                            mineMixType: d,
                            originScale: n,
                            shape: t,
                            maxHp: _,
                            minePurity: u
                        }), l.x = e, l.y = o, s.addChild(l)
                    }
                }, e.prototype.createChest = function(t, e, o) {
                    var i = this.layerGame,
                        n = cc.instantiate(this.prefabChest);
                    i.addChild(n), n.x = e, n.y = o
                }, e.prototype.createItem = function(t, e, o) {
                    var i = this.layerGame,
                        n = cc.instantiate(this.prefabItem);
                    i.addChild(n), n.x = e, n.y = o
                }, e.prototype.createMapElement = function(t, e, o, n) {
                    var r = 0 === t ? this.layerMapStone : this.layerMapPool,
                        s = cc.instantiate(this.prefabMap),
                        c = s.getComponent(a.default),
                        l = this.skinName,
                        h = {
                            brown: ["deep", "rift", "hole"],
                            green: ["deep", "stone", "net"],
                            red: ["deep", "laya", "hole"],
                            blue: ["deep", "pool", "hole"],
                            sand: ["deep", "bone", "crack"]
                        } [l];
                    switch (s.x = e, s.y = o, s.scale = n, s.rotation = 360 * Math.random(), t) {
                        case 0:
                            s.scale = n, s.rotation = 360 * Math.random(), c.setSkin(l, "map_" + l + "_" + h[0] + i.mg.rnd.choose([0, 1, 2, 3], [.4, .4, .1, .1]));
                            break;
                        case 1:
                            Math.random() > .9 ? (s.scale = n, c.setSkin(l, "map_" + l + "_" + h[1] + i.mg.rnd.choose([0, 1, 2, 3], [.1, .1, .4, .3]))) : (s.scale = n, c.setSkin(l, "map_" + l + "_" + h[2] + i.mg.rnd.choose([0, 1, 2, 3], [.4, .4, .1, .1])))
                    }
                    r.addChild(s)
                }, __decorate([l(cc.Prefab)], e.prototype, "prefabMap", void 0), __decorate([l(cc.JsonAsset)], e.prototype, "stonePutJson", void 0), __decorate([l(cc.Prefab)], e.prototype, "prefabStone", void 0), __decorate([l(cc.Prefab)], e.prototype, "prefabItem", void 0), __decorate([l(cc.Prefab)], e.prototype, "prefabChest", void 0), __decorate([l(cc.Node)], e.prototype, "loadMask", void 0), __decorate([l(cc.Label)], e.prototype, "loadLabel", void 0), __decorate([l], e.prototype, "debug", void 0), e = __decorate([c], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../../Behavior/general/BhvCameraExtra": "BhvCameraExtra",
        "./../../Script/System/mgIndex": "mgIndex",
        "./MapStone": "MapStone",
        "./object/Stone": "Stone"
    }],
    MapStone: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7b685mK9sFIYIQJDP8tR1Fo", "MapStone"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.atlasArray = [], e
                }
                return __extends(e, t), e.prototype.start = function() {}, e.prototype.setSkin = function(t, e) {
                    var o = 0;
                    switch (t) {
                        case "brown":
                            o = 0;
                            break;
                        case "red":
                            o = 1;
                            break;
                        case "blue":
                            o = 2;
                            break;
                        case "sand":
                            o = 3;
                            break;
                        case "green":
                            o = 4
                    }
                    var i = this.atlasArray[o],
                        n = i.getSpriteFrame(e);
                    if (null == n) throw "Can find Sprite Frame " + e + " in " + i.name;
                    this.getComponent(cc.Sprite).spriteFrame = n
                }, __decorate([a({
                    type: [cc.SpriteAtlas],
                    tooltip: "\u76ae\u80a4\u987a\u5e8f\uff1a0-brown\n 1-red\n 2-blue\n 3-sand \n-4-green"
                })], e.prototype, "atlasArray", void 0), e = __decorate([n], e)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {}],
    MathTool: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "56cdbL96wRNfYZRwrqv/5wa", "MathTool"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {}
            return t.prototype.map = function(t, e, o, i, n) {
                return (n - i) * (t - e) / (o - e) + i
            }, t.prototype.degToRad = function(e) {
                return e * t.DEG_TO_RAD
            }, t.prototype.radToDeg = function(e) {
                return e * t.RAD_TO_DEG
            }, t.prototype.maxAdd = function(t, e, o) {
                return void 0 === o && (o = 100), Math.min(t + e, o)
            }, t.prototype.minSub = function(t, e, o) {
                return void 0 === o && (o = 0), Math.max(t - e, o)
            }, t.prototype.clamp = function(t, e, o) {
                return t < e ? e : o < t ? o : t
            }, t.prototype.percent = function(t, e) {
                return t > e ? 1 : t < 0 ? 0 : t / e
            }, t.prototype.fuzzyEqual = function(t, e, o) {
                return void 0 === o && (o = 1e-4), Math.abs(t - e) < o
            }, t.prototype.average = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var o = 0, i = t.length, n = 0; n < i; n++) o += +t[n];
                return o / i
            }, t.DEG_TO_RAD = Math.PI / 180, t.RAD_TO_DEG = 180 / Math.PI, t
        }();
        o.default = i, cc._RF.pop()
    }, {}],
    MotionBrakeMark: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "06fe2TwHnpE4bn1yrrBswh5", "MotionBrakeMark"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.followNode = null, e.ctx = null, e.lastPos = cc.v2(0, 0), e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.ctx = this.getComponent(cc.Graphics)
                }, e.prototype.onDisable = function() {
                    this.clearAll()
                }, e.prototype.update = function(t) {
                    var e = this.followNode.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        o = this.node.getParent().convertToNodeSpaceAR(e);
                    o.sub(this.lastPos).mag() < 1 || (this.drawCircle(this.ctx, o), this.lastPos = o)
                }, e.prototype.drawCircle = function(t, e) {
                    t.circle(e.x, e.y, 40), t.fillColor = cc.color(10, 10, 10, 255), t.fill()
                }, e.prototype.clearAll = function() {
                    this.ctx.clear()
                }, __decorate([a(cc.Node)], e.prototype, "followNode", void 0), e = __decorate([n], e)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {}],
    NativeDebug: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3b837bhLZVC/azOD8CTcZ/m", "NativeDebug"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../Script/System/sdk/mySdk"),
            n = cc._decorator,
            a = n.ccclass,
            r = (n.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.lastNode = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    0 != this.enabled && (this.lastNode || (this.lastNode = this.node, cc.game.addPersistRootNode(this.node), this.label = this.getComponent(cc.Label)))
                }, e.prototype.onEnable = function() {
                    cc.director.on("sdk-ads-emit", this.onAdsResult, this), cc.director.on("sdk-social-emit", this.onSocialsResult, this), cc.director.on("sdk-native-emit", this.onNativeResult, this), cc.director.on("sdk-function-call", this.onSdkCall, this)
                }, e.prototype.onDisable = function() {
                    cc.director.off("sdk-ads-emit", this.onAdsResult, this), cc.director.off("sdk-social-emit", this.onSocialsResult, this), cc.director.off("sdk-native-emit", this.onNativeResult, this), cc.director.off("sdk-function-call", this.onSdkCall, this)
                }, e.prototype.onSdkCall = function(t, e, o) {
                    this.label.string = t + e + ">" + o
                }, e.prototype.onAdsResult = function(t, e) {
                    this.label.string = i.mySdk.AdsResultCode[t] + " msg:" + e
                }, e.prototype.onSocialsResult = function(t, e) {
                    this.label.string = i.mySdk.SocialResultCode[t] + " msg:" + e
                }, e.prototype.onNativeResult = function(t, e) {
                    this.label.string = i.mySdk.NativeResultCode[t] + " msg:" + e
                }, e.prototype.update = function(t) {}, e = __decorate([a], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {
        "./../../Script/System/sdk/mySdk": "mySdk"
    }],
    NodeFactory: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e6f4fPytG9COKWtMn/nQ0dA", "NodeFactory"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {}
            return t.prototype.node = function(t) {
                return new cc.Node(t)
            }, t.prototype.sprite = function(t) {
                return this.node(t)
            }, t.prototype.label = function(t) {
                return this.node(t)
            }, t
        }();
        o.default = i, cc._RF.pop()
    }, {}],
    PerlinNoise: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a7fbacoJExM9raZBsnSS8lv", "PerlinNoise"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./LCGenerator"),
            n = function() {
                function t() {
                    this.perlin_octaves = 4, this.perlin_amp_falloff = .5
                }
                return t.prototype.scaled_cosine = function(t) {
                    return .5 * (1 - Math.cos(t * Math.PI))
                }, t.prototype.noise = function(t, e, o) {
                    if (e = e || 0, o = o || 0, null == this.perlin) {
                        this.perlin = new Array(4096);
                        for (var i = 0; i < 4096; i++) this.perlin[i] = Math.random()
                    }
                    t < 0 && (t = -t), e < 0 && (e = -e), o < 0 && (o = -o);
                    for (var n, a, r, s, c, l = Math.floor(t), h = Math.floor(e), p = Math.floor(o), d = t - l, u = e - h, f = o - p, _ = 0, y = .5, m = 0; m < this.perlin_octaves; m++) {
                        var g = l + (h << 4) + (p << 8);
                        n = this.scaled_cosine(d), a = this.scaled_cosine(u), r = this.perlin[4095 & g], r += n * (this.perlin[g + 1 & 4095] - r), s = this.perlin[g + 16 & 4095], r += a * ((s += n * (this.perlin[g + 16 + 1 & 4095] - s)) - r), g += 256, s = this.perlin[4095 & g], s += n * (this.perlin[g + 1 & 4095] - s), c = this.perlin[g + 16 & 4095], s += a * ((c += n * (this.perlin[g + 16 + 1 & 4095] - c)) - s), _ += (r += this.scaled_cosine(f) * (s - r)) * y, y *= this.perlin_amp_falloff, l <<= 1, h <<= 1, u *= 2, p <<= 1, f *= 2, (d *= 2) >= 1 && (l++, d--), u >= 1 && (h++, u--), f >= 1 && (p++, f--)
                    }
                    return _
                }, t.prototype.noiseDetail = function(t, e) {
                    t > 0 && (this.perlin_octaves = t), e > 0 && (this.perlin_amp_falloff = e)
                }, t.prototype.setSeed = function(t) {
                    if (null != t) {
                        var e = new i.LCGenerator;
                        e.setSeed(t), this.perlin = new Array(4096);
                        for (var o = 0; o < 4096; o++) this.perlin[o] = e.rand()
                    } else this.perlin
                }, t.prototype.getSeed = function() {}, t
            }();
        o.PerlinNoise = n, cc._RF.pop()
    }, {
        "./LCGenerator": "LCGenerator"
    }],
    Piece: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "58c8fJxktVL3I/La/gda7Qw", "Piece"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Behavior/movement/BhvMoveTo"),
            a = t("../../../Behavior/ui/BhvFrameIndex"),
            r = cc._decorator,
            s = r.ccclass,
            c = (r.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.activeTimer = .5, e.timer = 0, e.collideClosed = !1, e.type = "gold", e
                }
                return __extends(e, t), e.prototype.init = function(t, e, o) {
                    void 0 === e && (e = 0), void 0 === o && (o = 1);
                    var n = i.mg.rnd.choose([.2, .25, .3, .3, .5, .6]) * (1 - (1 - o) / 2);
                    n <= .2 && (n = .2), this.timer = 0, this.activeTimer = .5, this.collideClosed = !0, this.node.scale = n, this.node.opacity = 255, this.node.rotation = i.mg.rnd.range(0, 360), this.type = t;
                    var r = this.node.getComponent(a.default);
                    "gold" == t ? r.index = i.mg.rnd.rangeInt(0, 3) : "crystal" == t ? r.index = i.mg.rnd.rangeInt(3, 5) : "diamond" == t && (r.index = 6, this.node.rotation = 0, this.node.scale = 1), this.unFollow()
                }, e.prototype.startFollow = function(t) {
                    var e = this;
                    void 0 === t && (t = 100);
                    var o = i.mg.rnd.range(10, 100),
                        n = i.mg.rnd.range(.3, .5),
                        a = cc.moveBy(n, i.mg.rnd.circle().mul(o)).easing(cc.easeSineInOut());
                    this.node.runAction(a), this.scheduleOnce(function() {
                        e.collideClosed = !1, e.followTo(cc.find("Canvas/GameLayer/Ship"))
                    }, n + .5)
                }, e.prototype.onCollisionEnter = function(t, e) {}, e.prototype.onCollisionStay = function(t, e) {
                    this.collideClosed || "Ship" == t.node.name && this.timer >= this.activeTimer && this.checkDestroy()
                }, e.prototype.onCollisionExit = function(t, e) {}, e.prototype.update = function(t) {
                    this.timer += t
                }, e.prototype.checkDestroy = function() {
                    var t = this;
                    this.collideClosed = !0;
                    var e = i.mg.data.global,
                        o = 10 * i.mg.data.getGoldValue(i.mg.data.config.goldValue),
                        n = 10 * i.mg.data.getGoldValue(i.mg.data.config.crystalValue);
                    "gold" == this.type && (e.gold += Math.floor(this.node.scale * o), e.gold_plus += Math.floor(this.node.scale * o), i.mg.audio.playSE("collect_coin")), "crystal" == this.type ? (e.gold += Math.floor(this.node.scale * n), e.gold_plus += Math.floor(this.node.scale * n), i.mg.audio.playSE("collect_crystal", .5)) : "diamond" == this.type && (i.mg.data.user.diamond += 1, i.mg.data.global.collect.diamond += 1, i.mg.audio.playSE("collect_diamond", 1)), this.scheduleOnce(function() {
                        i.mg.pool.find("Piece").put(t.node), t.unscheduleAllCallbacks()
                    }, .3)
                }, e.prototype.followTo = function(t) {
                    var e = this.node.getComponent(n.default);
                    e && t && (e.setSpeed(i.mg.rnd.range(100, 200), 9999, 500), e.moveToTarget(t))
                }, e.prototype.unFollow = function() {
                    var t = this.node.getComponent(n.default);
                    t && t.stop()
                }, e = __decorate([s], e)
            }(cc.Component));
        o.default = c, cc._RF.pop()
    }, {
        "../../../Behavior/movement/BhvMoveTo": "BhvMoveTo",
        "../../../Behavior/ui/BhvFrameIndex": "BhvFrameIndex",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    PlugNodePool: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ef5974/v7pCOIKeYtJJCQse", "PlugNodePool"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = cc.Class({
                properties: {
                    name: {
                        default: "default",
                        tooltip: "\u6570\u91cf\u4e0a\u9650"
                    },
                    count: {
                        default: 100,
                        type: cc.Integer,
                        tooltip: "\u5bf9\u8c61\u6c60\u5bb9\u91cf\u4e0a\u9650"
                    }
                }
            }),
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.debug = !1, e.pools = [], e._pools = [], e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    for (var t = 0; t < this.pools.length; t++) {
                        this.pools[t];
                        this._pools[t] = new cc.NodePool
                    }
                }, e.prototype.start = function() {
                    this.pools.forEach(function(t) {
                        cc.log(t.name, t.count)
                    })
                }, e.prototype.getPool = function(t) {
                    var e;
                    return (e = this._pools.findIndex(function(e) {
                        return e.poolHandlerComp == t
                    })) >= 0 ? this._pools[e] : null
                }, e.prototype.onDestroy = function() {
                    this._pools.forEach(function(t) {
                        t.clear()
                    }), this._pools = [], this.pools = []
                }, __decorate([a({
                    tooltip: "\u8c03\u8bd5\u6a21\u5f0f\uff0c\u6253\u5f00\u5c06\u663e\u793a\u5bf9\u8c61\u6c60\u7684\u64cd\u4f5c\u60c5\u51b5"
                })], e.prototype, "debug", void 0), __decorate([a({
                    type: [r],
                    serializable: !1,
                    tooltip: "\u5bf9\u8c61\u6c60\uff0c\u63d0\u524d\u521b\u5efa\u9700\u8981\u7684\u5bf9\u8c61\u6c60\u548c\u540d\u5b57"
                })], e.prototype, "pools", void 0), e = __decorate([n], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    PlugPreloader: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "76301pD5UtEk7ZEv1ux43Hg", "PlugPreloader"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.progressLabel = null, e.progressBar = null, e.loadingLabel = null, e.directorEvent = "Preloader:Progress", e.finishedClose = !0, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {}, e.prototype.onEnable = function() {
                    cc.director.on(this.directorEvent, this.onProgress, this)
                }, e.prototype.onDisable = function() {
                    cc.director.off(this.directorEvent, this.onProgress, this)
                }, e.prototype.onProgress = function(t, e, o) {
                    !0 === o && this.destroy(), this.progressLabel && (this.progressLabel.string = Math.floor(t / e * 100).toString() + "%"), this.progressBar && (this.progressBar.progress = o ? 1 : t / e)
                }, __decorate([a(cc.Label)], e.prototype, "progressLabel", void 0), __decorate([a(cc.ProgressBar)], e.prototype, "progressBar", void 0), __decorate([a(cc.Label)], e.prototype, "loadingLabel", void 0), __decorate([a], e.prototype, "directorEvent", void 0), __decorate([a({
                    tooltip: "\u52a0\u8f7d\u6761\u5b8c\u6210\u662f\u5426\u81ea\u52a8\u5173\u95ed\uff1f"
                })], e.prototype, "finishedClose", void 0), e = __decorate([n], e)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {}],
    PlugProgressBar: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f517dx+a/hOBor6j3rhioDX", "PlugProgressBar"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = i.executeInEditMode,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.backBarSprite = null, e.lerp = .1, e.percentColor = [cc.color(0, 255, 0, 255), cc.color(255, 100, 0, 255), cc.color(255, 255, 0, 255), cc.color(255, 0, 0, 255)], e._progress = 0, e
                }
                return __extends(e, t), e.prototype.checkPercentColor = function() {
                    if (this.percentColor) {
                        var t = this.percentColor.length,
                            e = Math.floor(t * (1 - this.progress));
                        this.barSprite.node.color = this.percentColor[e]
                    }
                }, e.prototype.update = function(t) {
                    if (this.progress != this._progress && this.checkPercentColor(), this.backBarSprite) {
                        var e = this.totalLength * this.progress;
                        switch (this.mode) {
                            case cc.ProgressBar.Mode.HORIZONTAL:
                                this.backBarSprite.width = cc.misc.lerp(this.backBarSprite.width, e, this.lerp);
                                break;
                            case cc.ProgressBar.Mode.VERTICAL:
                                this.backBarSprite.height = cc.misc.lerp(this.backBarSprite.height, e, this.lerp);
                                break;
                            case cc.ProgressBar.Mode.FILLED:
                                this.backBarSprite.width = cc.misc.lerp(this.backBarSprite.width, e, this.lerp), this.backBarSprite.height = cc.misc.lerp(this.backBarSprite.height, e, this.lerp)
                        }
                    }
                    this._progress = this.progress
                }, __decorate([a(cc.Node)], e.prototype, "backBarSprite", void 0), __decorate([a({
                    tooltip: "\u7ebf\u6027\u5dee\u503c"
                })], e.prototype, "lerp", void 0), __decorate([a({
                    type: [cc.Color],
                    tooltip: "\u767e\u5206\u6bd4\u6539\u53d8\u989c\u8272,\u7531\u4e0a\u5230\u4e0b\u6539\u53d8\u989c\u8272\u767e\u5206\u6bd4,progress\u8d8a\u5c11,\u989c\u8272\u8d8a\u5c11"
                })], e.prototype, "percentColor", void 0), e = __decorate([n, r], e)
            }(cc.ProgressBar);
        o.default = s, cc._RF.pop()
    }, {}],
    PlugTableViewCell: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a6bbaEOhFRAPr8iH2Z7UzOh", "PlugTableViewCell"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tableView = null, e._isCellInit_ = !1, e._longClicked_ = !1, e
                }
                return __extends(e, t), e.prototype._cellAddMethodToNode_ = function() {
                    this.node.clicked = this.clicked.bind(this)
                }, e.prototype._cellAddTouch_ = function() {
                    this.node.on(cc.Node.EventType.TOUCH_START, function(t) {
                        !0 === this.node.active && 0 !== this.node.opacity && (this._longClicked_ || (this._longClicked_ = !0, this.scheduleOnce(this._longClicked, 1.5)))
                    }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function() {
                        this._longClicked_ && (this._longClicked_ = !1, this.unschedule(this._longClicked))
                    }, this), this.node.on(cc.Node.EventType.TOUCH_END, function() {
                        this.clicked(), this._longClicked_ && (this._longClicked_ = !1, this.unschedule(this._longClicked))
                    }, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
                        this._longClicked_ && (this._longClicked_ = !1, this.unschedule(this._longClicked))
                    }, this)
                }, e.prototype._cellInit_ = function(t) {
                    this.tableView = t, this._isCellInit_ || (this._cellAddMethodToNode_(), this._cellAddTouch_(), this._isCellInit_ = !0)
                }, e.prototype._longClicked = function() {
                    this._longClicked_ = !1, this.node.emit(cc.Node.EventType.TOUCH_CANCEL), this.longClicked()
                }, e.prototype.longClicked = function() {}, e.prototype.clicked = function() {}, e.prototype.init = function(t, e, o, i) {}, __decorate([a({
                    visible: !1
                })], e.prototype, "tableView", void 0), __decorate([a], e.prototype, "_isCellInit_", void 0), __decorate([a], e.prototype, "_longClicked_", void 0), e = __decorate([n], e)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {}],
    PlugTableView: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0e194akJ8tLN6pTZX6NE4lB", "PlugTableView"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a, r, s = t("./PlugTableViewCell"),
            c = cc._decorator,
            l = c.ccclass,
            h = c.property,
            p = c.help,
            d = c.menu;
        (function(t) {
            t[t.Horizontal = 0] = "Horizontal", t[t.Vertical = 1] = "Vertical"
        })(i || (i = {})),
        function(t) {
            t[t.None = 0] = "None", t[t.Up = 1] = "Up", t[t.Down = 2] = "Down", t[t.Left = 3] = "Left", t[t.Right = 4] = "Right"
        }(n || (n = {})),
        function(t) {
            t[t.LEFT_TO_RIGHT__TOP_TO_BOTTOM = 0] = "LEFT_TO_RIGHT__TOP_TO_BOTTOM", t[t.TOP_TO_BOTTOM__LEFT_TO_RIGHT = 1] = "TOP_TO_BOTTOM__LEFT_TO_RIGHT"
        }(a || (a = {})),
        function(t) {
            t[t.Scroll = 0] = "Scroll", t[t.Flip = 1] = "Flip"
        }(r || (r = {}));
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.horizontal = !1, e.vertical = !0, e._data = null, e._minCellIndex = 0, e._maxCellIndex = 0, e._paramCount = 0, e._count = 0, e._cellCount = 0, e._showCellCount = 0, e._groupCellCount = null, e._scrollDirection = null, e._cellPool = null, e.__view = null, e._page = 0, e._pageTotal = 0, e._lastOffset = cc.v2(0, 0), e._cellSize = cc.size(64, 64), e._touchMoved = !1, e.cell = null, e._ScrollModel = i.Horizontal, e._ViewType = r.Scroll, e.isFill = !1, e.Direction = a.LEFT_TO_RIGHT__TOP_TO_BOTTOM, e.pageChangeEvents = [], e.cellClickedEvents = [], e.cellLongClickedEvents = [], e
            }
            var o;
            return __extends(e, t), o = e, Object.defineProperty(e.prototype, "ScrollModel", {
                get: function() {
                    return this._ScrollModel
                },
                set: function(t) {
                    t === i.Horizontal ? (this.horizontal = !0, this.vertical = !1, this.verticalScrollBar = null) : (this.vertical = !0, this.horizontal = !1, this.horizontalScrollBar = null), this._ScrollModel = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ViewType", {
                get: function() {
                    return this._ViewType
                },
                set: function(t) {
                    this._ViewType === r.Flip ? this.inertia = !1 : this.inertia = !0, this._ViewType = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.onLoad = function() {
                var t = this;
                o._tableView.push(this);
                var e = this.node.destroy;
                this.node.destroy = function() {
                    return t.clear(), e.call(t.node)
                };
                var i = this.node._onPreDestroy;
                this.node._onPreDestroy = function() {
                    t.clear(), i.call(t.node)
                }
            }, e.prototype.onDestroy = function() {
                for (var t in o._tableView)
                    if (o._tableView[t] === this) return void o._tableView.splice(parseInt(t))
            }, e.prototype._initCell = function(t, e) {
                if (this.ScrollModel === i.Horizontal && this.Direction === a.TOP_TO_BOTTOM__LEFT_TO_RIGHT || this.ScrollModel === i.Vertical && this.Direction === a.LEFT_TO_RIGHT__TOP_TO_BOTTOM)
                    for (var o = t._cellIndex * t.childrenCount, n = 0; n < t.childrenCount; ++n) {
                        (l = t.children[n].getComponent(s.default)) && (l._cellInit_(this), l.init(o + n, this._data, e, [t._cellIndex, n]))
                    } else if (this.ViewType === r.Flip) {
                        var c = (o = Math.floor(t._cellIndex / this._showCellCount)) * this._showCellCount * t.childrenCount;
                        for (n = 0; n < t.childrenCount; ++n) {
                            (l = t.children[n].getComponent(s.default)) && (l._cellInit_(this), l.init(this._showCellCount * n + t._cellIndex % this._showCellCount + c, this._data, e, [n + o * t.childrenCount, n]))
                        }
                    } else
                        for (n = 0; n < t.childrenCount; ++n) {
                            var l;
                            (l = t.children[n].getComponent(s.default)) && (l._cellInit_(this), l.init(n * this._count + t._cellIndex, this._data, e, [n, n]))
                        }
            }, e.prototype._setCellPosition = function(t, e) {
                this.ScrollModel === i.Horizontal ? (t.x = 0 === e ? -this.content.width * this.content.anchorX + t.width * t.anchorX : y(this.content, e - 1).x + t.width, t.y = (t.anchorY - this.content.anchorY) * t.height) : (t.y = 0 === e ? this.content.height * (1 - this.content.anchorY) - t.height * (1 - t.anchorY) : y(this.content, e - 1).y - t.height, t.x = (t.anchorX - this.content.anchorX) * t.width)
            }, e.prototype._addCell = function(t) {
                var e = this._getCell();
                this._setCellAttr(e, t), this._setCellPosition(e, t), e.setParent(this.content), this._initCell(e)
            }, e.prototype._setCellAttr = function(t, e) {
                t.setSiblingIndex(e >= t._cellIndex ? this._cellCount : 0), t._cellIndex = e
            }, e.prototype._addCellsToView = function() {
                for (var t = 0; t <= this._maxCellIndex; ++t) this._addCell(t)
            }, e.prototype._getCell = function() {
                if (0 === this._cellPool.size()) {
                    var t = cc.instantiate(this.cell),
                        e = new cc.Node;
                    e.anchorX = .5, e.anchorY = .5;
                    var o = 0;
                    if (this.ScrollModel === i.Horizontal) {
                        e.width = t.width;
                        var n = t.height || 64,
                            a = Math.floor(this.content.height / n);
                        e.height = this.content.height;
                        for (var r = 0; r < a; ++r) t || (t = cc.instantiate(this.cell)), t.x = (t.anchorX - .5) * t.width, t.y = e.height / 2 - t.height * (1 - t.anchorY) - o, o += t.height, t.setParent(e), t = null
                    } else {
                        e.height = t.height;
                        var s = t.width || 64;
                        a = Math.floor(this.content.width / s);
                        e.width = this.content.width;
                        for (r = 0; r < a; ++r) t || (t = cc.instantiate(this.cell)), t.y = (t.anchorY - .5) * t.height, t.x = -e.width / 2 + t.width * t.anchorX + o, o += t.width, t.setParent(e), t = null
                    }
                    this._cellPool.put(e)
                }
                return this._cellPool.get()
            }, e.prototype._getCellSize = function() {
                var t = this._getCell(),
                    e = t.getContentSize();
                return this._cellPool.put(t), e
            }, e.prototype._getGroupCellCount = function() {
                var t = this._getCell(),
                    e = t.childrenCount;
                return this._cellPool.put(t), e
            }, e.prototype.clear = function() {
                for (var t = this.content.childrenCount - 1; t >= 0; --t) this._cellPool.put(this.content.children[t]);
                this._cellCount = 0, this._showCellCount = 0
            }, e.prototype.reload = function(t) {
                void 0 !== t && (this._data = t);
                for (var e = this.content.childrenCount - 1; e >= 0; --e) this._initCell(this.content.children[e], !0)
            }, e.prototype._getCellPoolCacheName = function() {
                return this.ScrollModel === i.Horizontal ? this.cell.name + "h" + this.content.height : this.cell.name + "w" + this.content.width
            }, e.prototype._initTableView = function() {
                this._cellPool && this.clear();
                var t = this._getCellPoolCacheName();
                o._cellPoolCache[t] || (o._cellPoolCache[t] = new cc.NodePool(s.default)), this._cellPool = o._cellPoolCache[t], this._cellSize = this._getCellSize(), this._groupCellCount = this._getGroupCellCount(), this._count = Math.ceil(this._paramCount / this._groupCellCount), this.ScrollModel === i.Horizontal ? (this.__view.width = this.node.width, this.__view.x = (this.__view.anchorX - this.node.anchorX) * this.__view.width, this._cellCount = Math.ceil(this.__view.width / this._cellSize.width) + 1, this.ViewType === r.Flip ? this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this.__view.width / this._cellSize.width) : this._cellCount = this._count, this._showCellCount = this._cellCount, this._pageTotal = 1) : (this._pageTotal = Math.ceil(this._count / (this._cellCount - 1)), this._count = this._pageTotal * (this._cellCount - 1), this._showCellCount = this._cellCount - 1) : this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this.__view.width / this._cellSize.width) : this._cellCount = this._count, this._showCellCount = this._cellCount) : this._showCellCount = this._cellCount - 1, this.content.width = this._count * this._cellSize.width, this.stopAutoScroll(), this.scrollToLeft()) : (this.__view.height = this.node.height, this.__view.y = (this.__view.anchorY - this.node.anchorY) * this.__view.height, this._cellCount = Math.ceil(this.__view.height / this._cellSize.height) + 1, this.ViewType === r.Flip ? this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this.__view.height / this._cellSize.height) : this._cellCount = this._count, this._showCellCount = this._cellCount, this._pageTotal = 1) : (this._pageTotal = Math.ceil(this._count / (this._cellCount - 1)), this._count = this._pageTotal * (this._cellCount - 1), this._showCellCount = this._cellCount - 1) : this._cellCount > this._count ? (this.isFill ? this._cellCount = Math.floor(this.__view.height / this._cellSize.height) : this._cellCount = this._count, this._showCellCount = this._cellCount) : this._showCellCount = this._cellCount - 1, this.content.height = this._count * this._cellSize.height, this.stopAutoScroll(), this.scrollToTop()), this._changePageNum(1 - this._page), this._lastOffset = this.getScrollOffset(), this._minCellIndex = 0, this._maxCellIndex = this._cellCount - 1, this._addCellsToView()
            }, e.prototype.initTableView = function(t, e) {
                this._paramCount = t, this._data = e, this.ScrollModel === i.Horizontal ? (this.horizontal = !0, this.vertical = !1) : (this.vertical = !0, this.horizontal = !1), this.__view = this.content.getParent(), this.verticalScrollBar && this.verticalScrollBar.node.on("size-changed", function() {
                    this._updateScrollBar(this._getHowMuchOutOfBoundary())
                }, this), this.horizontalScrollBar && this.horizontalScrollBar.node.on("size-changed", function() {
                    this._updateScrollBar(this._getHowMuchOutOfBoundary())
                }, this), this.node.getComponent(cc.Widget) && this.node.getComponent(cc.Widget).updateAlignment(), this._initTableView()
            }, e.prototype._onTouchBegan = function(e, o) {
                t.prototype._onTouchBegan.call(this, e, o), this._touchstart(e)
            }, e.prototype._onTouchMoved = function(t, e) {
                if (this.enabledInHierarchy && !this._hasNestedViewGroup(t, e)) {
                    var o = t.touch;
                    if (this.content && this._handleMoveLogic(o), this.cancelInnerEvents) {
                        if (f(o.getLocation(), o.getStartLocation()).mag() > 7 && !this._touchMoved && t.target !== this.node) {
                            var i = new cc.Event.EventTouch(t.getTouches(), t.bubbles);
                            i.type = cc.Node.EventType.TOUCH_CANCEL, i.touch = t.touch, t.target.emit(cc.Node.EventType.TOUCH_CANCEL, i), this._touchMoved = !0
                        }
                        this._stopPropagationIfTargetIsMe(t), this._touchmove(t)
                    }
                }
            }, e.prototype._onTouchEnded = function(e, o) {
                t.prototype._onTouchEnded.call(this, e, o), this._touchend(e)
            }, e.prototype._onTouchCancelled = function(e, o) {
                t.prototype._onTouchCancelled.call(this, e, o), this._touchend(e)
            }, e.prototype.stopAutoScroll = function() {
                this._scrollDirection = n.None, t.prototype.stopAutoScroll.call(this)
            }, e.prototype.scrollToBottom = function(e, o) {
                this._scrollDirection = n.Up, t.prototype.scrollToBottom.call(this, e, o)
            }, e.prototype.scrollToTop = function(e, o) {
                this._scrollDirection = n.Down, t.prototype.scrollToTop.call(this, e, o)
            }, e.prototype.scrollToLeft = function(e, o) {
                this._scrollDirection = n.Right, t.prototype.scrollToLeft.call(this, e, o)
            }, e.prototype.scrollToRight = function(e, o) {
                this._scrollDirection = n.Left, t.prototype.scrollToRight.call(this, e, o)
            }, e.prototype.scrollToOffset = function(e, o, a) {
                var r = f(e, this.getScrollOffset());
                this.ScrollModel === i.Horizontal ? r.x > 0 ? this._scrollDirection = n.Left : r.x < 0 && (this._scrollDirection = n.Right) : r.y > 0 ? this._scrollDirection = n.Up : r.y < 0 && (this._scrollDirection = n.Down), t.prototype.scrollToOffset.call(this, e, o, a)
            }, e.prototype.addScrollEvent = function(t, e, o) {
                var i = new cc.Component.EventHandler;
                i.target = t, i.component = e, i.handler = o, this.scrollEvents.push(i)
            }, e.prototype.removeScrollEvent = function(t) {
                for (var e in this.scrollEvents) {
                    if (this.scrollEvents[e].target === t) return void this.scrollEvents.splice(parseInt(e), 1)
                }
            }, e.prototype.clearScrollEvent = function() {
                this.scrollEvents = []
            }, e.prototype.addPageEvent = function(t, e, o) {
                var i = new cc.Component.EventHandler;
                i.target = t, i.component = e, i.handler = o, this.pageChangeEvents.push(i)
            }, e.prototype.removePageEvent = function(t) {
                for (var e = 0; e < this.pageChangeEvents.length; e++) {
                    if (this.pageChangeEvents[e].target === t) return void this.pageChangeEvents.splice(e, 1)
                }
            }, e.prototype.clearPageEvent = function() {
                this.pageChangeEvents = []
            }, e.prototype.scrollToNextPage = function() {
                this.scrollToPage(this._page + 1)
            }, e.prototype.scrollToLastPage = function() {
                this.scrollToPage(this._page - 1)
            }, e.prototype.scrollToPage = function(t) {
                if (this.ViewType === r.Flip && t !== this._page && !(t < 1 || t > this._pageTotal)) {
                    var e = .3 * Math.abs(t - this._page);
                    this._changePageNum(t - this._page);
                    var o = this.__view.width,
                        i = this.__view.height;
                    o = (this._page - 1) * o, i = (this._page - 1) * i, this.scrollToOffset({
                        x: o,
                        y: i
                    }, e)
                }
            }, e.prototype.getCells = function(t) {
                var e = [],
                    o = _(this.content.children, function(t, e) {
                        return t._cellIndex < e._cellIndex
                    });
                for (var i in o) {
                    var n = o[i];
                    for (var a in n.children) e.push(n.children[a])
                }
                t(e)
            }, e.prototype.getData = function() {
                return this._data
            }, e.prototype.getGroupsRange = function(t) {
                for (var e = [], o = this._minCellIndex; o <= this._maxCellIndex; o++) e.push(o);
                t(e)
            }, e.prototype._changePageNum = function(t) {
                this._page += t, this._page <= 0 ? this._page = 1 : this._page > this._pageTotal && (this._page = this._pageTotal);
                for (var e = 0; e < this.pageChangeEvents.length; e++) {
                    this.pageChangeEvents[e].emit([this._page, this._pageTotal])
                }
            }, e.prototype._touchstart = function(t) {
                this.ScrollModel === i.Horizontal ? this.horizontal = !1 : this.vertical = !1
            }, e.prototype._touchmove = function(t) {
                if (this.horizontal === this.vertical) {
                    var e = t.getStartLocation(),
                        o = t.getLocation();
                    if (this.ScrollModel === i.Horizontal) {
                        if (Math.abs(o.x - e.x) <= 7) return
                    } else if (Math.abs(o.y - e.y) <= 7) return;
                    this.ScrollModel === i.Horizontal ? this.horizontal = !0 : this.vertical = !0
                }
            }, e.prototype._touchend = function(t) {
                this.ScrollModel === i.Horizontal ? this.horizontal = !0 : this.vertical = !0, this.ViewType === r.Flip && this._pageTotal > 1 && this._pageMove(t)
            }, e.prototype._pageMove = function(t) {
                var e = this.__view.width,
                    o = this.__view.height;
                if (this.ViewType === r.Flip) {
                    var a = this.getScrollOffset(),
                        s = this.getMaxScrollOffset();
                    if (this.ScrollModel === i.Horizontal) {
                        if (a.x >= 0 || a.x <= -s.x) return;
                        if (o = 0, Math.abs(t.getLocation().x - t.getStartLocation().x) > this.__view.width / 4)
                            if (this._scrollDirection === n.Left) {
                                if (!(this._page < this._pageTotal)) return;
                                this._changePageNum(1)
                            } else if (this._scrollDirection === n.Right) {
                            if (!(this._page > 1)) return;
                            this._changePageNum(-1)
                        }
                    } else {
                        if (a.y >= s.y || a.y <= 0) return;
                        if (e = 0, Math.abs(t.getLocation().y - t.getStartLocation().y) > this.__view.height / 4)
                            if (this._scrollDirection === n.Up) {
                                if (!(this._page < this._pageTotal)) return;
                                this._changePageNum(1)
                            } else if (this._scrollDirection === n.Down) {
                            if (!(this._page > 1)) return;
                            this._changePageNum(-1)
                        }
                    }
                    e = (this._page - 1) * e, o = (this._page - 1) * o, this.scrollToOffset({
                        x: e,
                        y: o
                    }, .3)
                }
            }, e.prototype._getBoundingBoxToWorld = function(t) {
                var e = t.convertToWorldSpace(cc.v2(0, 0));
                return cc.rect(e.x, e.y, t.width, t.height)
            }, e.prototype._updateCells = function() {
                if (this.ScrollModel === i.Horizontal) {
                    if (this._scrollDirection === n.Left) {
                        if (this._maxCellIndex < this._count - 1) {
                            var t = this._getBoundingBoxToWorld(this.__view);
                            do {
                                var e = y(this.content, this._minCellIndex);
                                if (!((o = this._getBoundingBoxToWorld(e)).xMax <= t.xMin)) break;
                                e.x = y(this.content, this._maxCellIndex).x + e.width, this._minCellIndex++, this._maxCellIndex++, o.xMax + (this._maxCellIndex - this._minCellIndex + 1) * e.width > t.xMin && (this._setCellAttr(e, this._maxCellIndex), this._initCell(e))
                            } while (this._maxCellIndex !== this._count - 1)
                        }
                    } else if (this._scrollDirection === n.Right && this._minCellIndex > 0) {
                        t = this._getBoundingBoxToWorld(this.__view);
                        do {
                            e = y(this.content, this._maxCellIndex);
                            if (!((o = this._getBoundingBoxToWorld(e)).xMin >= t.xMax)) break;
                            e.x = y(this.content, this._minCellIndex).x - e.width, this._minCellIndex--, this._maxCellIndex--, o.xMin - (this._maxCellIndex - this._minCellIndex + 1) * e.width < t.xMax && (this._setCellAttr(e, this._minCellIndex), this._initCell(e))
                        } while (0 !== this._minCellIndex)
                    }
                } else if (this._scrollDirection === n.Up) {
                    if (this._maxCellIndex < this._count - 1) {
                        t = this._getBoundingBoxToWorld(this.__view);
                        do {
                            e = y(this.content, this._minCellIndex);
                            if (!((o = this._getBoundingBoxToWorld(e)).yMin >= t.yMax)) break;
                            e.y = y(this.content, this._maxCellIndex).y - e.height, this._minCellIndex++, this._maxCellIndex++, o.yMin - (this._maxCellIndex - this._minCellIndex + 1) * e.height < t.yMax && (this._setCellAttr(e, this._maxCellIndex), this._initCell(e))
                        } while (this._maxCellIndex !== this._count - 1)
                    }
                } else if (this._scrollDirection === n.Down && this._minCellIndex > 0) {
                    t = this._getBoundingBoxToWorld(this.__view);
                    do {
                        var o;
                        e = y(this.content, this._maxCellIndex);
                        if (!((o = this._getBoundingBoxToWorld(e)).yMax <= t.yMin)) break;
                        e.y = y(this.content, this._minCellIndex).y + e.height, this._minCellIndex--, this._maxCellIndex--, o.yMax + (this._maxCellIndex - this._minCellIndex + 1) * e.width > t.yMin && (this._setCellAttr(e, this._minCellIndex), this._initCell(e))
                    } while (0 !== this._minCellIndex)
                }
            }, e.prototype._getScrollDirection = function() {
                var t = this.getScrollOffset(),
                    e = this._lastOffset;
                this._lastOffset = t, t = f(t, e), this.ScrollModel === i.Horizontal ? t.x > 0 ? this._scrollDirection = n.Right : t.x < 0 ? this._scrollDirection = n.Left : this._scrollDirection = n.None : t.y < 0 ? this._scrollDirection = n.Down : t.y > 0 ? this._scrollDirection = n.Up : this._scrollDirection = n.None
            }, e.prototype.update = function(e) {
                t.prototype.update.call(this, e), this._cellCount !== this._showCellCount && 1 !== this._pageTotal && (this._getScrollDirection(), this._updateCells())
            }, e.reload = function() {
                for (var t in o._tableView) o._tableView[t].reload()
            }, e.clear = function() {
                for (var t in o._tableView) o._tableView[t].clear()
            }, e._cellPoolCache = {}, e._tableView = [], __decorate([h({
                override: !0,
                visible: !1
            })], e.prototype, "horizontal", void 0), __decorate([h({
                override: !0,
                visible: !1
            })], e.prototype, "vertical", void 0), __decorate([h({
                type: cc.Prefab
            })], e.prototype, "cell", void 0), __decorate([h({
                type: cc.Enum(i),
                tooltip: "\u6a2a\u5411\u7eb5\u5411\u6ed1\u52a8, Horizontal - \u6c34\u5e73, Vertical- \u5782\u76f4 "
            })], e.prototype, "ScrollModel", null), __decorate([h()], e.prototype, "_ScrollModel", void 0), __decorate([h({
                type: cc.Enum(r),
                tooltip: "\u4e3aScroll\u65f6,\u4e0d\u505a\u89e3\u91ca\n\u4e3a Flipw \u65f6\uff0c\u5728Scroll\u7684\u57fa\u7840\u4e0a\u589e\u52a0\u7ffb\u9875\u7684\u884c\u4e3a"
            })], e.prototype, "ViewType", null), __decorate([h()], e.prototype, "_ViewType", void 0), __decorate([h({
                tooltip: "\u5f53\u8282\u70b9\u4e0d\u80fd\u94fa\u6ee1\u4e00\u9875\u65f6\uff0c\u9009\u62e9 isFill \u4e3a true \u4f1a\u586b\u5145\u8282\u70b9\u94fa\u6ee1\u6574\u4e2a view"
            })], e.prototype, "isFill", void 0), __decorate([h({
                type: cc.Enum(a),
                tooltip: "\u89c4\u5b9acell\u7684\u6392\u5217\u65b9\u5411"
            })], e.prototype, "Direction", void 0), __decorate([h({
                type: [cc.Component.EventHandler],
                tooltip: "\u4ec5\u5f53ViewType\u4e3apageView\u65f6\u6709\u6548\uff0c\u521d\u59cb\u5316\u6216\u7ffb\u9875\u65f6\u89e6\u53d1\u56de\u8c03\uff0c\u5411\u56de\u8c03\u4f20\u5165\u4e24\u4e2a\u53c2\u6570\uff0c\u53c2\u6570\u4e00\u4e3a\u5f53\u524d\u5904\u4e8e\u54ea\u4e00\u9875\uff0c\u53c2\u6570\u4e8c\u4e3a\u4e00\u5171\u591a\u5c11\u9875"
            })], e.prototype, "pageChangeEvents", void 0), __decorate([h({
                type: [cc.Component.EventHandler]
            })], e.prototype, "cellClickedEvents", void 0), __decorate([h({
                type: [cc.Component.EventHandler]
            })], e.prototype, "cellLongClickedEvents", void 0), e = o = __decorate([l, d("\u6dfb\u52a0 UI \u7ec4\u4ef6/tableView(\u81ea\u5b9a\u4e49)"), p("https://github.com/a1076559139/creator_tableView")], e)
        }(cc.ScrollView);

        function f(t, e) {
            return cc.v2(t.x - e.x, t.y - e.y)
        }

        function _(t, e) {
            if (t.length <= 1) return t;
            for (var o = Math.floor(t.length / 2), i = t[o], n = [], a = [], r = 0; r < t.length; r++) r !== o && (e ? e(t[r], i) ? n.push(t[r]) : a.push(t[r]) : t[r] <= i ? n.push(t[r]) : a.push(t[r]));
            return _(n, e).concat([i], _(a, e))
        }

        function y(t, e) {
            for (var o = 0, i = t.children, n = i.length; o < n; o++)
                if (i[o]._cellIndex === e) return i[o];
            return null
        }
        o.default = u, cc._RF.pop()
    }, {
        "./PlugTableViewCell": "PlugTableViewCell"
    }],
    PlugTouch: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1a4c8f5GdFBJ7VK+gwrlDFO", "PlugTouch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = a.disallowMultiple;
        (function(t) {
            t[t.NONE = 0] = "NONE", t[t.LEFT_DOWN = 1] = "LEFT_DOWN", t[t.DOWN = 2] = "DOWN", t[t.RIGHT_DOWN = 3] = "RIGHT_DOWN", t[t.LEFT = 4] = "LEFT", t[t.CENTER = 5] = "CENTER", t[t.RIGHT = 6] = "RIGHT", t[t.LEFT_UP = 7] = "LEFT_UP", t[t.UP = 8] = "UP", t[t.RIGHT_UP = 9] = "RIGHT_UP"
        })(i || (i = {})),
        function(t) {
            t[t.LEFT_RIGHT = 0] = "LEFT_RIGHT", t[t.LEFT_MIDDLE_RIGHT = 1] = "LEFT_MIDDLE_RIGHT", t[t.UP_DOWN = 2] = "UP_DOWN", t[t.UP_MIDDLE_DOWN = 3] = "UP_MIDDLE_DOWN"
        }(n || (n = {}));
        var h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.listenNode = null, e.allowHold = !1, e.debug = !1, e.pressure = 0, e.DIRECTION = i, e.ctrl = {
                    left: !1,
                    right: !1,
                    up: !1,
                    down: !1,
                    middle: !1
                }, e.timer = 0, e.touchArray = [], e
            }
            return __extends(e, t), e.prototype.onLoad = function() {
                for (var t = this.touchArray, e = 0; e < 10; e++) t.push({
                    triggeredHold: !1,
                    isTouch: !1,
                    startTime: 0,
                    curTime: 0,
                    lastTapTime: -1e3,
                    lastTapPos: cc.v2(-1e3, -1e3)
                })
            }, e.prototype.start = function() {}, e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {
                this.unbindNode()
            }, Object.defineProperty(e.prototype, "isInTouch", {
                get: function() {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "touchSpeed", {
                get: function() {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getAngleDirection4 = function(t) {
                return t = (t + 360) % 360, Math.abs(t - 270) < 45 ? i.UP : Math.abs(t - 180) < 45 ? i.LEFT : Math.abs(t - 90) < 45 ? i.DOWN : i.RIGHT
            }, e.prototype.getAngleDirection8 = function(t) {
                return t = (t + 360) % 360, Math.abs(t - 315) < 22.5 ? i.RIGHT_UP : Math.abs(t - 270) < 22.5 ? i.UP : Math.abs(t - 225) < 22.5 ? i.LEFT_UP : Math.abs(t - 180) < 22.5 ? i.LEFT : Math.abs(t - 135) < 22.5 ? i.LEFT_DOWN : Math.abs(t - 90) < 22.5 ? i.DOWN : Math.abs(t - 45) < 22.5 ? i.RIGHT_DOWN : i.RIGHT
            }, e.prototype.bindNode = function(t) {
                var e = this;
                null != t && (this.listenNode && this.unbindNode(), this.listenNode = t, t.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0), t.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0), t.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0), t.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0), cc.view.setResizeCallback(function() {
                    e.node.width = cc.view.getCanvasSize().width, e.node.height = cc.view.getCanvasSize().height
                }))
            }, e.prototype.unbindNode = function() {
                var t = this.listenNode;
                t.isValid && (t.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), t.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), t.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), t.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this))
            }, e.prototype.checkTriggerHold = function(t, e) {
                var o = this.touchArray[t];
                o.triggeredHold || e >= .5 && (cc.log("\u89e6\u53d1 \u957f\u6309\uff01"), o.triggeredHold = !0)
            }, e.prototype.checkTriggerTap = function(t, e) {
                var o = t.getID(),
                    i = this.touchArray[o];
                if (!i.triggeredHold) {
                    var n = e,
                        a = t.getStartLocation().sub(t.getLocation()).mag();
                    if (n <= .333 && a < 15) {
                        var r = i.lastTapPos.sub(t.getLocation()).mag();
                        if (n <= .666 && r < 25) {
                            cc.log("\u53cc\u51fb\u8f7b\u89e6 \u4e8b\u4ef6\uff01", t.getID());
                            var s = new cc.Event.EventCustom("double-tap-gesture", !0);
                            this.node.dispatchEvent(s), i.lastTapPos = cc.v2(-1e3, -1e3), i.lastTapTime = -1e4
                        } else {
                            cc.log("\u8f7b\u89e6\uff01\u4e8b\u4ef6", t.getID());
                            s = new cc.Event.EventCustom("tap-gesture", !0);
                            this.node.dispatchEvent(s), i.lastTapPos = t.getLocation(), i.lastTapTime = this.timer
                        }
                    }
                }
            }, e.prototype.checkSwipe = function(t, e) {
                var o = t.getID(),
                    i = (this.touchArray[o], t.getStartLocation().sub(t.getLocation())),
                    n = i.mag();
                if (n > 50 && e < .2) {
                    var a = cc.misc.radiansToDegrees(cc.Vec2.RIGHT.signAngle(i.normalize()));
                    a = 180 - a, cc.log("\u6ed1\u52a8\uff01\u4e8b\u4ef6", o, "\u8ddd\u79bb\uff1a", n, "\u89d2\u5ea6\uff1a", this.getAngleDirection8(a))
                }
            }, e.prototype.checkTouchArea = function(t) {}, e.prototype.onTouchStart = function(t) {
                var e = t.getID(),
                    o = this.touchArray[e];
                o && (o.startTime = this.timer, o.curTime = this.timer, o.triggeredHold = !1, o.isTouch = !0)
            }, e.prototype.onTouchMove = function(t) {
                var e = t.getID(),
                    o = this.touchArray[e];
                o && (o.curTime = this.timer)
            }, e.prototype.onTouchEnd = function(t) {
                var e = t.getID(),
                    o = this.touchArray[e];
                if (o) {
                    o.curTime = this.timer;
                    var i = o.curTime - o.startTime;
                    this.checkTriggerTap(t, i), this.checkSwipe(t, i), o.isTouch = !1
                }
            }, e.prototype.onTouchCancel = function(t) {
                var e = t.getID(),
                    o = this.touchArray[e];
                if (o) {
                    o.curTime = this.timer;
                    var i = o.curTime - o.startTime;
                    this.checkSwipe(t, i), o.isTouch = !1
                }
            }, e.prototype.update = function(t) {
                var e = this;
                (this.timer += t, this.allowHold) && this.touchArray.forEach(function(t, o) {
                    1 == t.isTouch && e.checkTriggerHold(o, e.timer - t.startTime)
                })
            }, __decorate([s({
                tooltip: "\u63a5\u53d7\u89e6\u6478\u7684\u8282\u70b9(\u4ece\u5bf9\u5e94\u8282\u70b9\u5bfb\u627e)",
                type: cc.Node
            })], e.prototype, "listenNode", void 0), __decorate([s({
                tooltip: "\u662f\u5426\u5141\u8bb8 \u957f\u6309\u89e6\u53d1\u4e8b\u4ef6 (\u7565\u5fae\u6d88\u8017\u6027\u80fd)"
            })], e.prototype, "allowHold", void 0), __decorate([s({
                tooltip: "\u6d4b\u8bd5\u7ed8\u56fe\u6a21\u5f0f, \u53ef\u4ee5\u76d1\u63a7\u89e6\u6478\u70b9\u6240\u5728\u4f4d\u7f6e"
            })], e.prototype, "debug", void 0), e = __decorate([r, c("\u6dfb\u52a0\u5168\u5c40\u63d2\u4ef6/Input/Touch"), l], e)
        }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {}],
    PluginConfig: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4b628oFghlPJbMzXVrbh/8q", "PluginConfig"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        window.atob("aHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPW9yZy5kb2I1LmRpZ19tYXN0ZXI=");
        o.SDK_CONFIG = {
            PLATFORM: "dob5",
            MY_PKG_NAME: "org.dob5.dig_master",
            SHOP_PKG_NAME: "digMaster",
            APP_URL: "https://play.google.com/store/apps/details?id=vn.arcade.android",
            DEBUG: !1,
            Ads: {
                SDK: "sdk_dob5.Ads",
                IDS: {
                    REWARDED_VIDEO_ID: "auto-set"
                }
            }
        }, cc._RF.pop()
    }, {}],
    PluginInfo: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fe3d8sKurlLN6ZDaNON6FdK", "PluginInfo"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.PLUGIN_INFO = {
            social: {
                enable: !1,
                user: {
                    uid: -1,
                    name: "\u6e38\u5ba2"
                },
                login: !1,
                leaderboard: !0,
                achievement: !0
            },
            ads: {
                enable: !1,
                no_ads: !1,
                banner: !0,
                fullscreen: !0,
                reward_video: !0
            },
            share: {
                enable: !1
            },
            IAP: {
                enable: !1
            },
            native: {
                enable: !1,
                platform: "Android",
                ranking: !1
            },
            analytics: {
                enable: !1
            },
            extra: {
                experience: !1
            }
        }, cc._RF.pop()
    }, {}],
    PluginInterface: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1db5antAwFK051p2z7knmUx", "PluginInterface"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    PluginProtocol: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "37085JOo3xBCaGpezVcfqAG", "PluginProtocol"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./PluginConfig"),
            n = function() {
                function t(t, e) {
                    void 0 === e && (e = !1), this.PLUGIN_ACTIVE = !1, this.PLUGIN_TYPE = t, this.PLUGIN_ACTIVE = e
                }
                return t.prototype.getPluginName = function() {
                    return this.callStringFuncWithParam("getPluginName")
                }, t.prototype.getPluginVersion = function() {
                    return this.callStringFuncWithParam("getPluginVersion")
                }, t.prototype.getSDKVersion = function() {
                    return this.callStringFuncWithParam("getSDKVersion")
                }, t.prototype.getParamsType = function(t) {
                    void 0 === t && (t = []);
                    for (var e = "", o = 0; o < t.length; o++) {
                        var i = t[o];
                        switch (typeof i) {
                            case "boolean":
                                e += "Z";
                                break;
                            case "number":
                                e += i % 1 == 0 ? "I" : "F";
                                break;
                            case "string":
                                e += "Ljava/lang/String;";
                                break;
                            default:
                                cc.error("paramType not find")
                        }
                    }
                    return "(" + e + ")"
                }, t.prototype.callWebFunction = function(t, e, o) {
                    void 0 === o && (o = []);
                    for (var i = t.split("."), n = window, a = 0; a < i.length; a++) {
                        var r = i[a];
                        if (r in n == !1) return null;
                        n = n[r]
                    }
                    return n[e] && "function" == typeof n[e] ? n[e].apply(n, o) : null
                }, t.prototype.callFuncBase = function(t, e, o) {
                    if (this.PLUGIN_TYPE && this.PLUGIN_ACTIVE) {
                        var n = i.SDK_CONFIG[this.PLUGIN_TYPE].SDK;
                        return this.callWebFunction(n, t, o)
                    }
                }, t.prototype.callFuncWithParam = function(t, e) {
                    this.callFuncBase(t, "V", e)
                }, t.prototype.callStringFuncWithParam = function(t, e) {
                    return this.callFuncBase(t, "Ljava/lang/String;", e)
                }, t.prototype.callIntFuncWithParam = function(t, e) {
                    return this.callFuncBase(t, "I", e)
                }, t.prototype.callBoolFuncWithParam = function(t, e) {
                    return this.callFuncBase(t, "T", e)
                }, t.prototype.callFloatFuncWithParam = function(t, e) {
                    return this.callFuncBase(t, "F", e)
                }, t
            }();
        o.PluginProtocol = n, cc._RF.pop()
    }, {
        "./PluginConfig": "PluginConfig"
    }],
    PoolManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "cf23d21w9xDyYkX2J69drOD", "PoolManager"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {
                this._pools = []
            }
            return t.prototype.find = function(t) {
                var e = 0;
                return t && (e = this._pools.findIndex(function(e) {
                    return e.poolHandlerComp == t
                })), this._pools[e]
            }, t.prototype.create = function(t) {
                this._pools.push(new cc.NodePool(t))
            }, t.prototype.clearAll = function() {
                this._pools.forEach(function(t) {
                    t.clear()
                })
            }, t
        }();
        o.default = i, cc._RF.pop()
    }, {}],
    PopGetBubble: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "267768Vf9RLXrHXXd4mjQ9D", "PopGetBubble"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/sdk/mySdk"),
            n = t("./../../../Script/System/mgIndex"),
            a = t("../../../Behavior/ui/BhvFrameIndex"),
            r = t("../../../Behavior/ui/BhvAnimationHelper"),
            s = t("../../../Behavior/general/BhvEmitter"),
            c = t("../../../Behavior/ui/BhvIconFlyTo"),
            l = cc._decorator,
            h = l.ccclass,
            p = l.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bubbleData = new Array(16), e.bubbleTouch = new Array(16).fill(0), e.giftArray = [{
                        type: 0,
                        count: 1,
                        w: .5
                    }, {
                        type: 0,
                        count: 5,
                        w: .3
                    }, {
                        type: 0,
                        count: 20,
                        w: .2
                    }, {
                        type: 0,
                        count: 50,
                        w: .1
                    }, {
                        type: 0,
                        count: 100,
                        w: .05
                    }, {
                        type: 1,
                        count: 1,
                        w: .3
                    }, {
                        type: 1,
                        count: 2,
                        w: .1
                    }, {
                        type: 1,
                        count: 3,
                        w: .05
                    }, {
                        type: 2,
                        count: 1,
                        w: .3
                    }, {
                        type: 2,
                        count: 2,
                        w: .1
                    }, {
                        type: 2,
                        count: 3,
                        w: .05
                    }, {
                        type: 3,
                        count: 10,
                        w: .3
                    }, {
                        type: 3,
                        count: 50,
                        w: .2
                    }, {
                        type: 3,
                        count: 99,
                        w: .1
                    }], e.bubbleBoardNode = null, e.emitter = null, e.hasPlayAd = !1, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    n.mg.data.global.item.nail <= 0 && (n.mg.data.global.item.nail = 1), this.createBubbleResult(), this.bubbleBoardNode.children.forEach(function(t) {
                        var e = t,
                            o = e.getChildByName("top"),
                            i = e.getChildByName("icon");
                        o.active = !0, i.active = !1
                    })
                }, e.prototype.createBubbleResult = function() {
                    for (var t = this.giftArray.map(function(t) {
                            return t.w
                        }), e = n.mg.rnd.rangeInt(4, 9), o = 0; o < 16; o++) this.bubbleData[o] = o < e ? n.mg.rnd.choose(this.giftArray, t) : {
                        type: -1,
                        count: 0
                    };
                    n.mg.rnd.shuffle(this.bubbleData)
                }, e.prototype.onButtonDown = function(t, e) {
                    if ("play_ad" === e) {
                        this.hasPlayAd = !0;
                        var o = t.currentTarget;
                        o.getComponent(cc.Button).interactable = !1, o.getChildByName("tips").active = !1, o.opacity = 180, o.color = cc.color(180, 180, 180), n.mg.audio.playSE("btn_click"), i.mySdk.Ads.showAds(i.mySdk.AdsType.REWARDED_VIDEO)
                    } else "cancel" === e && (n.mg.audio.playSE("btn_next"), this.getComponent(r.default).reverse(), this.node.getParent().getChildByName("ui_result").active = !0)
                }, e.prototype.onEnable = function() {
                    cc.director.on("PopGetBubble:Touch", this.onTouchBubble, this), cc.director.on("sdk-ads-emit", this.onAdResult, this)
                }, e.prototype.onDisable = function() {
                    cc.director.off("PopGetBubble:Touch", this.onTouchBubble, this), cc.director.off("sdk-ads-emit", this.onAdResult, this)
                }, e.prototype.onAdResult = function(t, e) {
                    var o = n.mg.data.global;
                    switch (t) {
                        case i.mySdk.AdsResultCode.RewardedVideoWithReward:
                            this.getComponentInChildren(c.default).create(3), this.schedule(function() {
                                o.item.nail += 1
                            }, .5 / 3, 2, 1)
                    }
                }, e.prototype.onTouchBubble = function(t, e) {
                    if (1 !== this.bubbleTouch[e])
                        if (n.mg.data.global.item.nail < 1) n.mg.audio.playSE("bubble_normal");
                        else {
                            n.mg.data.global.item.nail -= 1, this.bubbleTouch[e] = 1;
                            var o = this.showOneNode(e, !0);
                            this.emitter.emit(t.target.position), !0 === o ? n.mg.audio.playSE("bubble_award") : n.mg.audio.playSE("bubble_unlock"), -1 === this.bubbleTouch.indexOf(0) && (n.mg.data.global.item.nail = 0), n.mg.data.global.item.nail <= 0 && this.hasPlayAd && this.showAllNode()
                        }
                    else n.mg.audio.playSE("bubble_normal")
                }, e.prototype.showOneNode = function(t, e) {
                    void 0 === e && (e = !0);
                    var o = this.bubbleBoardNode.children[t],
                        i = o.getChildByName("top"),
                        r = o.getChildByName("icon"),
                        s = r.getChildByName("label"),
                        c = r.getChildByName("right");
                    i.active = !1;
                    var l = this.bubbleData[t];
                    if (null == l || -1 === l.type) return s.active = !1, c.active = !1, r.active = !1, !1;
                    if (r.active = !0, s.active = !0, c.active = !0, r.getComponent(a.default).index = l.type, s.getComponent(cc.Label).string = "x" + l.count, !0 === e) {
                        switch (l.type) {
                            case 0:
                                n.mg.data.user.diamond += l.count;
                                break;
                            case 1:
                                n.mg.data.global.bubble_award.key += l.count;
                                break;
                            case 2:
                                n.mg.data.global.item.nail += l.count;
                                break;
                            case 3:
                                n.mg.data.global.bubble_award.exp += l.count
                        }
                        return !0
                    }
                }, e.prototype.showAllNode = function() {
                    for (var t = 0; t < this.bubbleTouch.length; t++) {
                        if (1 !== this.bubbleTouch[t]) {
                            this.bubbleTouch[t] = 1;
                            var e = this.bubbleBoardNode.children[t].getChildByName("icon").getChildByName("right");
                            this.showOneNode(t, !1), e.active = !1
                        }
                    }
                }, e.prototype.start = function() {}, __decorate([p(cc.Node)], e.prototype, "bubbleBoardNode", void 0), __decorate([p(s.default)], e.prototype, "emitter", void 0), e = __decorate([h], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../../../Behavior/general/BhvEmitter": "BhvEmitter",
        "../../../Behavior/ui/BhvAnimationHelper": "BhvAnimationHelper",
        "../../../Behavior/ui/BhvFrameIndex": "BhvFrameIndex",
        "../../../Behavior/ui/BhvIconFlyTo": "BhvIconFlyTo",
        "./../../../Script/System/mgIndex": "mgIndex",
        "./../../../Script/System/sdk/mySdk": "mySdk"
    }],
    PopGetChest: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6ea37SAgihCZ41bwKeCc00T", "PopGetChest"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Script/System/modelView/VMParent"),
            a = cc._decorator,
            r = a.ccclass,
            s = (a.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.data = {
                        icon: 0,
                        name: "TREASURE NAME",
                        price: 12500,
                        rare: 0
                    }, e
                }
                return __extends(e, t), e.prototype.init = function(t, e, o, n) {
                    this.data.icon = t || 0, this.data.name = i.mg.i18n.t("chest." + t + ".name"), this.data.price = o, this.data.rare = n, i.mg.audio.playME("open_treasure", .8)
                }, e.prototype.onEnable = function() {
                    cc.director.emit("game:onGamePause")
                }, e.prototype.onDisable = function() {
                    cc.director.emit("game:onGameResume")
                }, e = __decorate([r], e)
            }(n.default));
        o.default = s, cc._RF.pop()
    }, {
        "../../../Script/System/modelView/VMParent": "VMParent",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    PopLevelUp: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "46e29FWwKdO0pEhlY+z7iNt", "PopLevelUp"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Script/System/modelView/VMParent"),
            a = cc._decorator,
            r = a.ccclass,
            s = (a.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.data = {
                        level: 0,
                        diamond: 0
                    }, e
                }
                return __extends(e, t), e.prototype.init = function(t, e) {
                    var o = this;
                    this.data.level = t, this.schedule(function() {
                        i.mg.audio.playSE("collect_diamond"), o.data.diamond += e / 20
                    }, .05, 19, .5)
                }, e = __decorate([r], e)
            }(n.default));
        o.default = s, cc._RF.pop()
    }, {
        "../../../Script/System/modelView/VMParent": "VMParent",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    PopModalBox: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "38cb8IfwZJJ9Kz9Xn+BdNbl", "PopModalBox"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.titleLabel = null, e.contentLabel = null, e.cancelButton = null, e.confirmButton = null, e.config = null, e
                }
                return __extends(e, t), e.prototype.init = function(t, e, o) {
                    void 0 === o && (o = {}), this.config = o, null === t ? this.titleLabel.node.active = !1 : this.titleLabel.string = t, null === e ? this.contentLabel.node.active = !1 : this.contentLabel.string = e, this.cancelButton.node.active = o.showCancel;
                    var i = this.cancelButton.node.getComponentInChildren(cc.Label);
                    o.cancelText && (i.string = o.cancelText), o.cancelColor && (i.node.color = o.cancelColor);
                    var n = this.confirmButton.node.getComponentInChildren(cc.Label);
                    o.confirmText && (n.string = o.confirmText), o.confirmColor && (n.node.color = o.confirmColor)
                }, e.prototype.onButtonDown = function(t, e) {
                    switch (e) {
                        case "cancel":
                            this.config.cancelCallback && this.config.cancelCallback();
                            break;
                        case "confirm":
                            this.config.confirmCallback && this.config.confirmCallback()
                    }
                }, __decorate([a(cc.Label)], e.prototype, "titleLabel", void 0), __decorate([a(cc.Label)], e.prototype, "contentLabel", void 0), __decorate([a(cc.Button)], e.prototype, "cancelButton", void 0), __decorate([a(cc.Button)], e.prototype, "confirmButton", void 0), e = __decorate([n], e)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {}],
    PopShopItemInfo: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "312d7bJVtJHZI5GDDzYfnww", "PopShopItemInfo"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Behavior/ui/BhvPopAnimate"),
            a = t("../../../Script/System/modelView/VMParent"),
            r = cc._decorator,
            s = r.ccclass,
            c = (r.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.data = {
                        index: 0,
                        item: {
                            icon: 0,
                            level: 1,
                            price: 0
                        },
                        name: "AS",
                        info: "ASS WE CAN",
                        has_buy: !1,
                        can_buy: !0
                    }, e
                }
                return __extends(e, t), e.prototype.init = function(t, e, o) {
                    this.data.index = t, this.data.item.icon = e.icon, this.data.item.level = e.level, this.data.item.price = e.price, this.data.name = i.mg.i18n.t("item." + e.icon + ".name", "???"), this.data.info = i.mg.i18n.t("item." + e.icon + ".info", "???").replace("{{0}}", e.level), this.data.has_buy = 1 === e.buy, this.data.can_buy = o
                }, e.prototype.start = function() {}, e.prototype.onButtonDown = function(t, e) {
                    switch (e) {
                        case "buy":
                            if (!0 === this.data.has_buy || !1 === this.data.can_buy) return void i.mg.audio.playSE("btn_error");
                            cc.director.emit("PopShopItemInfo:Buy", this.data.index), this.node.getComponent(n.default).playOut();
                            break;
                        case "cancel":
                            i.mg.audio.playSE("btn_next"), this.node.getComponent(n.default).playOut()
                    }
                }, e = __decorate([s], e)
            }(a.default));
        o.default = c, cc._RF.pop()
    }, {
        "../../../Behavior/ui/BhvPopAnimate": "BhvPopAnimate",
        "../../../Script/System/modelView/VMParent": "VMParent",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    PopTipsTutorial: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bad17vGRExJ2rUJOXtuwFko", "PopTipsTutorial"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../game/GameCtrl"),
            n = cc._decorator,
            a = n.ccclass,
            r = (n.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.game = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    var t = this,
                        e = cc.find("Canvas");
                    this.game = e.getComponent(i.default), cc.director.emit("game:onGamePause"), this.scheduleOnce(function() {
                        t.getComponent(cc.Button).interactable = !0
                    }, 4)
                }, e.prototype.onDestroy = function() {
                    cc.director.emit("game:onGameResume")
                }, e = __decorate([a], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {
        "../../game/GameCtrl": "GameCtrl"
    }],
    PopTreasureInfo: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4d962wkTtRMrYstp/FDqlhE", "PopTreasureInfo"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../cell/CellChestItem"),
            a = t("../../../Script/System/modelView/VMParent"),
            r = cc._decorator,
            s = r.ccclass,
            c = r.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.cellChestItem = null, e.iconIndex = 0, e.data = {
                        name: "CHEST",
                        info: "\u4ecb\u7ecd\u6587\u672c\u7684\u989d\u4fe1\u606f",
                        price: 1500
                    }, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    var e = this;
                    t.prototype.onLoad.call(this);
                    var o = i.mg.data.config.chest.find(function(t) {
                        return t.id == e.iconIndex
                    });
                    this.data.name = i.mg.i18n.t("chest." + this.iconIndex + ".name", "???"), this.data.info = i.mg.i18n.t("chest." + this.iconIndex + ".info", "???"), this.data.price = o.price, this.cellChestItem.getComponent(n.default).init(this.iconIndex);
                    var a = i.mg.data.user.treasure.watch; - 1 === a.indexOf(this.iconIndex) && a.push(this.iconIndex)
                }, e.prototype.start = function() {}, __decorate([c(cc.Node)], e.prototype, "cellChestItem", void 0), e = __decorate([s], e)
            }(a.default);
        o.default = l, cc._RF.pop()
    }, {
        "../../../Script/System/modelView/VMParent": "VMParent",
        "../cell/CellChestItem": "CellChestItem",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    ProtocolAds: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "afb498yHO9KzZzOY7+xbF1z", "ProtocolAds"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a = t("./../mgIndex"),
            r = t("./PluginConfig"),
            s = t("./PluginProtocol"),
            c = t("./PluginInfo"),
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.hideAds = function(t) {
                    var e = "";
                    switch (t) {
                        case i.BANNER:
                            e = r.SDK_CONFIG.Ads.IDS.BANNER_ID;
                            break;
                        case i.FULLSCREEN:
                            e = r.SDK_CONFIG.Ads.IDS.FULLSCREEN_ID;
                            break;
                        case i.REWARDED_VIDEO:
                            e = r.SDK_CONFIG.Ads.IDS.REWARDED_VIDEO_ID
                    }
                    this.callFuncWithParam("hideAds", [t, e])
                }, e.prototype.showAds = function(t) {
                    var e = "";
                    switch (t) {
                        case i.BANNER:
                            if (!1 === c.PLUGIN_INFO.ads.banner) return;
                            e = r.SDK_CONFIG.Ads.IDS.BANNER_ID;
                            break;
                        case i.FULLSCREEN:
                            if (!1 === c.PLUGIN_INFO.ads.fullscreen) return;
                            e = r.SDK_CONFIG.Ads.IDS.FULLSCREEN_ID;
                            break;
                        case i.REWARDED_VIDEO:
                            if (!1 === c.PLUGIN_INFO.ads.reward_video) return;
                            e = r.SDK_CONFIG.Ads.IDS.REWARDED_VIDEO_ID
                    }
                    this.callFuncWithParam("showAds", [t, e])
                }, e.prototype.setBannerPos = function(t, e) {
                    void 0 === t && (t = 2), void 0 === e && (e = 0), this.callFuncWithParam("setBannerPos", [t, e])
                }, e.prototype.preloadAds = function(t) {
                    var e = "";
                    switch (t) {
                        case i.BANNER:
                            e = r.SDK_CONFIG.Ads.IDS.BANNER_ID;
                            break;
                        case i.FULLSCREEN:
                            e = r.SDK_CONFIG.Ads.IDS.FULLSCREEN_ID;
                            break;
                        case i.REWARDED_VIDEO:
                            e = r.SDK_CONFIG.Ads.IDS.REWARDED_VIDEO_ID
                    }
                    this.callFuncWithParam("preloadAds", [t, e])
                }, e.prototype.isAdTypeSupported = function(t) {
                    return this.callBoolFuncWithParam("isAdTypeSupported", [t])
                }, e.prototype.onAdsResult = function(t, e) {
                    switch (t) {
                        case n.AdsShown:
                            "RewardedVideoAd" != e && "FullscreenAd" != e || a.mg.audio.pauseAll();
                            break;
                        case n.AdsClose:
                            "RewardedVideoAd" != e && "FullscreenAd" != e || a.mg.audio.resumeAll();
                            break;
                        case n.AdsReceived:
                            break;
                        case n.AdsFillSucceed:
                            "RewardedVideoAd" == e && (c.PLUGIN_INFO.ads.reward_video = !0);
                            break;
                        case n.AdsFillFailed:
                            "RewardedVideoAd" == e && (c.PLUGIN_INFO.ads.reward_video = !1)
                    }
                    cc.director.emit("sdk-ads-emit", t, e)
                }, e
            }(s.PluginProtocol);
        o.ProtocolAds = l,
            function(t) {
                t[t.BANNER = 0] = "BANNER", t[t.FULLSCREEN = 1] = "FULLSCREEN", t[t.REWARDED_VIDEO = 2] = "REWARDED_VIDEO"
            }(i = o.AdsType || (o.AdsType = {})),
            function(t) {
                t[t.TOP = 0] = "TOP", t[t.CENTER = 1] = "CENTER", t[t.BOTTOM = 2] = "BOTTOM"
            }(o.AdsPos || (o.AdsPos = {})),
            function(t) {
                t[t.AdsReceived = 0] = "AdsReceived", t[t.AdsShown = 1] = "AdsShown", t[t.AdsClose = 2] = "AdsClose", t[t.AdsDismissed = 3] = "AdsDismissed", t[t.NetworkError = 4] = "NetworkError", t[t.UnknownError = 5] = "UnknownError", t[t.RewardedVideoWithReward = 6] = "RewardedVideoWithReward", t[t.AdsClicked = 7] = "AdsClicked", t[t.AdsExtension = 8] = "AdsExtension", t[t.AdsFillSucceed = 9] = "AdsFillSucceed", t[t.AdsFillFailed = 10] = "AdsFillFailed"
            }(n = o.AdsResultCode || (o.AdsResultCode = {})), cc._RF.pop()
    }, {
        "./../mgIndex": "mgIndex",
        "./PluginConfig": "PluginConfig",
        "./PluginInfo": "PluginInfo",
        "./PluginProtocol": "PluginProtocol"
    }],
    ProtocolAnalytics: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "87af7AFAPBG8ppURZ7QnVuu", "ProtocolAnalytics"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return __extends(e, t), e.prototype.startSession = function() {}, e.prototype.stopSession = function() {}, e.prototype.setSessionContinueMillis = function(t) {}, e.prototype.logError = function(t, e) {}, e.prototype.logEvent = function(t) {
                for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o]
            }, e.prototype.logTimedEventBegin = function(t) {}, e.prototype.logTimedEventEnd = function(t) {}, e.prototype.setCaptureUncaughtException = function(t) {}, e.prototype.setAccount = function(t) {}, e.prototype.onChargeRequest = function(t) {}, e.prototype.onChargeSuccess = function(t) {}, e.prototype.onChargeFail = function(t) {}, e.prototype.onChargeOnlySuccess = function(t) {}, e.prototype.onPurchase = function(t) {}, e.prototype.onUse = function(t) {}, e.prototype.onReward = function(t) {}, e.prototype.startLevel = function(t) {}, e.prototype.finishLevel = function(t) {}, e.prototype.failLevel = function(t) {}, e.prototype.startTask = function(t) {}, e.prototype.finishTask = function(t) {}, e.prototype.failTask = function(t) {}, e.prototype.onAnalyticsResult = function() {}, e
        }(t("./PluginProtocol").PluginProtocol);
        o.ProtocolAnalytics = i, cc._RF.pop()
    }, {
        "./PluginProtocol": "PluginProtocol"
    }],
    ProtocolIAP: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "34731Sm2aNFuaP6I0TEGjC4", "ProtocolIAP"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return __extends(e, t), e.prototype.payForProduct = function(t) {}, e.prototype.getOrderId = function() {
                return ""
            }, e.resetPayState = function() {}, e.prototype.getPluginId = function() {
                return ""
            }, e.prototype.onIAPResult = function(t, e) {
                cc.director.emit("sdk-iap-emit", t, e)
            }, e
        }(t("./PluginProtocol").PluginProtocol);
        o.ProtocolIAP = i,
            function(t) {
                t[t.PaySuccess = 0] = "PaySuccess", t[t.PayFail = 1] = "PayFail", t[t.PayCancel = 2] = "PayCancel", t[t.PayNetworkError = 3] = "PayNetworkError", t[t.PayProductionInfoIncomplete = 4] = "PayProductionInfoIncomplete", t[t.PayInitSuccess = 5] = "PayInitSuccess", t[t.PayInitFail = 6] = "PayInitFail", t[t.PayNowPaying = 7] = "PayNowPaying", t[t.PayReStringgeSuccess = 8] = "PayReStringgeSuccess", t[t.PayExtension = 9] = "PayExtension", t[t.PayNeedLoginAgain = 10] = "PayNeedLoginAgain", t[t.RequestSuccess = 11] = "RequestSuccess", t[t.RequestFail = 12] = "RequestFail"
            }(o.PayResultCode || (o.PayResultCode = {})), cc._RF.pop()
    }, {
        "./PluginProtocol": "PluginProtocol"
    }],
    ProtocolNative: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b8c7dtS3ZJOnbv3KNPyKP3/", "ProtocolNative"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./PluginProtocol"),
            n = t("./PluginConfig"),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.showAlertDialog = function(t, e, o, i, n, a) {
                    void 0 === i && (i = "Yes"), void 0 === n && (n = "No"), void 0 === a && (a = "Close"), this.callFuncWithParam("showAlertDialog", [t, e, o, i, n, a])
                }, e.prototype.showToastDialog = function(t, e) {
                    this.callFuncWithParam("showToastDialog", [t, e])
                }, e.prototype.showNotification = function(t, e, o) {
                    this.callFuncWithParam("showNotification", [t, e, o])
                }, e.prototype.share = function(t, e) {
                    this.callFuncWithParam("share", [t, e])
                }, e.prototype.vibrate = function(t) {
                    this.callFuncWithParam("vibrate", [t])
                }, e.prototype.openUrl = function(t) {
                    this.callFuncWithParam("openUrl", [t])
                }, e.prototype.goAppShop = function(t, e) {
                    null !== t && void 0 !== t || (t = n.SDK_CONFIG.MY_PKG_NAME), null !== e && void 0 !== e || (e = n.SDK_CONFIG.SHOP_PKG_NAME), this.callFuncWithParam("goAppShop", [t, e])
                }, e.prototype.onNativeResult = function(t, e) {
                    cc.director.emit("sdk-native-emit", t, e)
                }, e
            }(i.PluginProtocol);
        o.ProtocolNative = a,
            function(t) {
                t[t.AlertDialogButtonPositive = 0] = "AlertDialogButtonPositive", t[t.AlertDialogButtonNegative = 1] = "AlertDialogButtonNegative", t[t.AlertDialogButtonNeutral = 2] = "AlertDialogButtonNeutral", t[t.NativeShare = 3] = "NativeShare", t[t.OpenMarketSucceed = 4] = "OpenMarketSucceed", t[t.OpenMarketFailed = 5] = "OpenMarketFailed"
            }(o.NativeResultCode || (o.NativeResultCode = {})), cc._RF.pop()
    }, {
        "./PluginConfig": "PluginConfig",
        "./PluginProtocol": "PluginProtocol"
    }],
    ProtocolShare: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c70a1rY9vNBY7d+Ufwu1B2Q", "ProtocolShare"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return __extends(e, t), e.prototype.share = function(t) {}, e.prototype.onShareResult = function(t, e) {
                cc.director.emit("sdk-share-emit", t, e)
            }, e
        }(t("./PluginProtocol").PluginProtocol);
        o.ProtocolShare = i,
            function(t) {
                t[t.ShareSuccess = 0] = "ShareSuccess", t[t.ShareFail = 1] = "ShareFail", t[t.ShareCancel = 2] = "ShareCancel", t[t.ShareNetworkError = 3] = "ShareNetworkError", t[t.ShareExtension = 4] = "ShareExtension"
            }(o.ShareResultCode || (o.ShareResultCode = {})), cc._RF.pop()
    }, {
        "./PluginProtocol": "PluginProtocol"
    }],
    ProtocolSocial: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c7c59UiqsJB4J0sBeinKm95", "ProtocolSocial"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = t("./PluginProtocol"),
            a = t("./PluginInfo"),
            r = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.signIn = function() {
                    this.callFuncWithParam("signIn")
                }, e.prototype.signOut = function() {
                    this.callFuncWithParam("signOut")
                }, e.prototype.submitScore = function(t, e, o) {
                    void 0 === t && (t = ""), void 0 === e && (e = 0), void 0 === o && (o = ""), this.callFuncWithParam("submitScore", [t, e, o])
                }, e.prototype.showLeaderBoard = function(t) {
                    void 0 === t && (t = ""), this.callFuncWithParam("showLeaderBoard", [t])
                }, e.prototype.showLeaderBoards = function() {
                    this.callFuncWithParam("showLeaderBoards")
                }, e.prototype.getLeaderBoardMetaData = function(t, e, o, i, n) {
                    return void 0 === t && (t = ""), void 0 === e && (e = ""), void 0 === o && (o = 15), void 0 === i && (i = "scores"), void 0 === n && (n = !1), this.callStringFuncWithParam("getLeaderBoardMetaData", [t, e, o, i, n])
                }, e.prototype.showAchievements = function() {
                    this.callFuncWithParam("showAchievements")
                }, e.prototype.unlockAchievement = function(t) {
                    void 0 === t && (t = ""), this.callFuncWithParam("unlockAchievement", [t])
                }, e.prototype.revealAchievement = function(t) {
                    void 0 === t && (t = ""), this.callFuncWithParam("unlockAchievement", [t])
                }, e.prototype.getUserInfo = function() {
                    return this.callStringFuncWithParam("getUserInfo")
                }, e.prototype.getFriendsInfo = function() {
                    return this.callStringFuncWithParam("getFriendsInfo")
                }, e.prototype.onSocialResult = function(t, e) {
                    switch (t) {
                        case i.SocialSignInSucceed:
                            a.PLUGIN_INFO.social.login = !0;
                            break;
                        case i.SocialSignOutSucceed:
                            a.PLUGIN_INFO.social.login = !1
                    }
                    cc.director.emit("sdk-social-emit", t, e)
                }, e
            }(n.PluginProtocol);
        o.ProtocolSocial = r,
            function(t) {
                t[t.ScoreSubmitSucceed = 0] = "ScoreSubmitSucceed", t[t.ScoreSubmitFail = 1] = "ScoreSubmitFail", t[t.HighScoresGetSucceed = 2] = "HighScoresGetSucceed", t[t.HighScoresGetFail = 3] = "HighScoresGetFail", t[t.LeaderBoardShowSucceed = 4] = "LeaderBoardShowSucceed", t[t.LeaderBoardShowFail = 5] = "LeaderBoardShowFail", t[t.AchShowSucceed = 6] = "AchShowSucceed", t[t.AchShowFail = 7] = "AchShowFail", t[t.AchUnlockSucceed = 8] = "AchUnlockSucceed", t[t.AchUnlockFail = 9] = "AchUnlockFail", t[t.AchGetSucceed = 10] = "AchGetSucceed", t[t.AchGetFail = 11] = "AchGetFail", t[t.AchModifySucceed = 12] = "AchModifySucceed", t[t.AchModifyFail = 13] = "AchModifyFail", t[t.SocialSignInSucceed = 14] = "SocialSignInSucceed", t[t.SocialSignInFail = 15] = "SocialSignInFail", t[t.SocialSignOutSucceed = 16] = "SocialSignOutSucceed", t[t.SocialSignOutFail = 17] = "SocialSignOutFail", t[t.SocialGetUserInfoSucceed = 18] = "SocialGetUserInfoSucceed", t[t.SocialGetUserInfoFail = 19] = "SocialGetUserInfoFail", t[t.SocialGetGameFriends = 20] = "SocialGetGameFriends", t[t.SocialGetFriendsInfoSuccess = 21] = "SocialGetFriendsInfoSuccess", t[t.SocialGetFriendsInfoFail = 22] = "SocialGetFriendsInfoFail", t[t.SocialAlreadySubscription = 23] = "SocialAlreadySubscription", t[t.SocialNoSubscription = 24] = "SocialNoSubscription", t[t.SocialSubscriptionFail = 25] = "SocialSubscriptionFail", t[t.SocialExtensionCode = 26] = "SocialExtensionCode"
            }(i = o.SocialResultCode || (o.SocialResultCode = {})), cc._RF.pop()
    }, {
        "./PluginInfo": "PluginInfo",
        "./PluginProtocol": "PluginProtocol"
    }],
    RandomGenerator: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e9b307F6KFHyLxzfCgsveZs", "RandomGenerator"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./algorithm/UnequalCirclesPacking"),
            n = t("./algorithm/LCGenerator"),
            a = t("./algorithm/PerlinNoise"),
            r = function() {
                function t() {
                    this.seed = 0, this.seedMode = !1, this.previous = !1, this.lcg = new n.LCGenerator, this.perlin = null, this.circlePacking = null, this.perlin = new a.PerlinNoise, this.circlePacking = new i.UnequalCirclePacking
                }
                return t.prototype.randomSeed = function(t) {
                    this.lcg.setSeed(t), this.seedMode = !0, this.previous = !1
                }, t.prototype.random = function() {
                    return 1 == this.seedMode ? this.lcg.rand() : Math.random()
                }, t.prototype.weightIndex = function(t) {
                    for (var e = this.random(), o = t.reduce(function(t, e) {
                            return t + e
                        }), i = 0, n = 0, a = 0; a < t.length; a++) {
                        if (e < (n += t[a] / o)) {
                            i = a;
                            break
                        }
                    }
                    return i
                }, t.prototype.choose = function(t, e) {
                    var o = t.length;
                    return t[e ? this.weightIndex(e) : Math.floor(this.random() * o)]
                }, t.prototype.fakeShuffle = function(t) {
                    var e = this;
                    return t.sort(function() {
                        return .5 - e.random()
                    })
                }, t.prototype.shuffle = function(t) {
                    for (var e, o, i = t.length; i;) i--, o = t[e = Math.floor(this.random() * i)], t[e] = t[i], t[i] = o;
                    return t
                }, t.prototype.range = function(t, e) {
                    var o, i;
                    return null !== t && null !== e ? (i = t || 0, o = e || 1) : (i = 0, o = t || 1), i + this.random() * (o - i)
                }, t.prototype.rangeInt = function(t, e) {
                    return Math.floor(this.range(t, e))
                }, t.prototype.rect = function(t, e) {
                    void 0 === t && (t = 1), null == e && (e = t);
                    var o = this.random() * t,
                        i = this.random() * e;
                    return cc.v2(o, i)
                }, t.prototype.circle = function(t) {
                    void 0 === t && (t = 1);
                    var e = this.random() * Math.PI * 2,
                        o = Math.cos(e) * t,
                        i = Math.sin(e) * t;
                    return cc.v2(o, i)
                }, t.prototype.circleFillRect = function(t, e, o, n, a) {
                    return void 0 === t && (t = 100), void 0 === e && (e = 100), void 0 === o && (o = .5), void 0 === n && (n = 10), void 0 === a && (a = .1), i.unequalCirclePacking(t, e, o, n, a)
                }, t.prototype.circleFillCircle = function() {}, t.prototype.whiteNoise = function(t, e) {
                    for (var o = [], i = 0; i < t; i++) o[i] = new Array(e);
                    for (i = 0; i < t; i++)
                        for (var n = 0; n < e; n++) o[i][n] = this.random() % 1;
                    return o
                }, t.prototype.gaussian = function(t, e) {
                    var o, i, n, a;
                    void 0 === t && (t = 0), void 0 === e && (e = 1);
                    var r = this._gaussianY2;
                    if (this.previous) o = r, this.previous = !1;
                    else {
                        do {
                            a = (i = 2 * this.random() - 1) * i + (n = 2 * this.random() - 1) * n
                        } while (a >= 1);
                        o = i * (a = Math.sqrt(-2 * Math.log(a) / a)), r = n * a, this._gaussianY2 = r, this.previous = !0
                    }
                    return o * e + t
                }, t.prototype.gaussianCircle = function(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = 1);
                    var o = this.gaussian(t, e),
                        i = this.range(0, 360),
                        n = Math.cos(i) * o,
                        a = Math.sin(i) * o;
                    return cc.v2(n, a)
                }, t.prototype.gaussianRect = function(t, e) {
                    void 0 === t && (t = 1), void 0 === e && (e = 1);
                    var o = this.gaussian(0, 1) * t,
                        i = this.gaussian(0, 1) * e;
                    return cc.v2(o, i)
                }, t
            }();
        o.default = r, cc._RF.pop()
    }, {
        "./algorithm/LCGenerator": "LCGenerator",
        "./algorithm/PerlinNoise": "PerlinNoise",
        "./algorithm/UnequalCirclesPacking": "UnequalCirclesPacking"
    }],
    RelaxShopCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bbe92ZWWPhEmqVMh3yka2wK", "RelaxShopCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("./../../../Script/System/sdk/mySdk"),
            a = t("../cell/ItemCardCell"),
            r = t("../pop/PopShopItemInfo"),
            s = t("../../../Script/System/modelView/VMParent"),
            c = cc._decorator,
            l = c.ccclass,
            h = c.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.data = {
                        award: {
                            icon: 0,
                            level: 0,
                            buy: 0
                        },
                        level: 0,
                        next_level: 1,
                        gold: 0,
                        gold_target: 0
                    }, e.itemData = [], e.itemLayout = null, e.freeItem = null, e.popWindow = null, e._touchNode = null, e
                }
                return __extends(e, t), e.prototype.start = function() {
                    for (var t = this, e = [
                            [0, .5, .3, .1],
                            [0, .5, .4, .3],
                            [0, .5, .4, .3, .2],
                            [0, .5, .4, .3, .2, .1, .1],
                            [0, .5, .4, .3, .2, .1, .1],
                            [0, .5, .5, .3, .2, .1, .1],
                            [0, .6, .5, .5, .4, .3, .2, .1, .05, .01]
                        ][Math.floor(i.mg.data.global.level / 5)], o = function(t) {
                            var o = i.mg.rnd.weightIndex([.2, .2, .2, .1, .1, .1]),
                                a = i.mg.data.config.item.find(function(e) {
                                    return e.id === t
                                }),
                                r = i.mg.rnd.weightIndex(e);
                            o >= 3 && r >= 3 && (r = 3);
                            var s = i.mg.data.global.gold_target / 1e3,
                                c = a.price * s * r,
                                l = {
                                    icon: o,
                                    level: r,
                                    price: c = Math.floor(c),
                                    buy: 0
                                };
                            n.itemData.push(l)
                        }, n = this, r = 0; r < 4; r++) o(r);
                    this.data.award.icon = this.itemData[3].icon, this.data.award.level = this.itemData[3].level, this.data.level = i.mg.data.global.level, this.data.next_level = i.mg.data.global.level + 1, this.itemLayout.children.forEach(function(e, o) {
                        e.getComponent(a.default).init(t.itemData[o])
                    }), i.mg.data.global.gold_target = i.mg.data.generateTargetGold(i.mg.data.global.level + 1), i.mg.data.updateHighScoreLevel()
                }, e.prototype.onEnable = function() {
                    cc.director.on("PopShopItemInfo:Buy", this.onBuyItem, this), cc.director.on("sdk-ads-emit", this.onAdResult, this)
                }, e.prototype.onDisable = function() {
                    cc.director.off("PopShopItemInfo:Buy", this.onBuyItem, this), cc.director.off("sdk-ads-emit", this.onAdResult, this)
                }, e.prototype.onBuyItem = function(t) {
                    var e = this.itemData[t],
                        o = i.mg.data.config.item.find(function(t) {
                            return t.id === e.icon
                        });
                    !o || i.mg.data.global.gold < e.price ? i.mg.audio.playSE("btn_error") : (e.buy = 1, t <= 2 && (this.itemLayout.children[t].getComponent(a.default).setBuyState(1), i.mg.data.global.gold -= e.price), i.mg.audio.playSE("btn_buy"), i.mg.data.global.item[o.type] += e.level, i.mg.data.saveGameState())
                }, e.prototype.onTouchAd = function(t) {
                    1 !== this.itemData[3].buy && (this._touchNode = t.target, n.mySdk.Ads.showAds(n.mySdk.AdsType.REWARDED_VIDEO))
                }, e.prototype.onAdResult = function(t, e) {
                    switch (t) {
                        case n.mySdk.AdsResultCode.RewardedVideoWithReward:
                            this._touchNode && this._touchNode.runAction(cc.fadeTo(.5, 0)), this.data.award.buy = this.itemData[3].buy = 1, this.itemData[3].price = 0, this.onBuyItem(3)
                    }
                }, e.prototype.onTouchCard = function(t, e) {
                    var o = this.itemData[e];
                    if (o) {
                        var n = i.mg.data.global.gold >= o.price && 1 !== o.buy,
                            a = cc.find("Canvas"),
                            s = cc.instantiate(this.popWindow);
                        a.addChild(s), i.mg.audio.playSE("popup_open"), s.getComponent(r.default).init(e, o, n)
                    }
                }, e.prototype.onButtonDown = function(t, e) {
                    switch (e) {
                        case "home":
                            i.mg.scene.load("home");
                            break;
                        case "next":
                            i.mg.scene.load("game")
                    }
                }, e.prototype.onDestroy = function() {
                    this._touchNode = null
                }, __decorate([h(cc.Node)], e.prototype, "itemLayout", void 0), __decorate([h(cc.Node)], e.prototype, "freeItem", void 0), __decorate([h(cc.Prefab)], e.prototype, "popWindow", void 0), e = __decorate([l], e)
            }(s.default);
        o.default = p, cc._RF.pop()
    }, {
        "../../../Script/System/modelView/VMParent": "VMParent",
        "../cell/ItemCardCell": "ItemCardCell",
        "../pop/PopShopItemInfo": "PopShopItemInfo",
        "./../../../Script/System/mgIndex": "mgIndex",
        "./../../../Script/System/sdk/mySdk": "mySdk"
    }],
    SceneManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "18bb1y4JY9J6qTibfb030ad", "SceneManager"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = {
                HOME: "home",
                GAME: "game",
                LOADING: "loading",
                DEMO: "demo",
                RESULT: "result",
                SHOP: "shop"
            },
            n = function() {
                function t() {
                    this.isLoading = !1, this.preloadNode = null, this.preloadInfo = {
                        name: null,
                        progress: 0,
                        completedCount: 0,
                        totalCount: 0
                    }, this.SCENES = i, this.isMgReady = !1
                }
                return t.prototype.init = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var t = this;
                        return __generator(this, function(e) {
                            return [2, new Promise(function(e, o) {
                                t.isMgReady && e(), cc.loader.loadRes("prefab/WindowPreload", cc.Prefab, function(i, n) {
                                    i ? o(i) : (e(), t.isMgReady = !0)
                                })
                            })]
                        })
                    })
                }, t.prototype.loadScene = function(t) {
                    cc.director.loadScene(t)
                }, t.prototype.preload = function(t, e) {
                    var o = this;
                    if (void 0 === e && (e = !1), this.isLoading) console.error(t, "is loading");
                    else {
                        this.preloadInfo.name = t, this.isLoading = !0;
                        cc.director.preloadScene(t, function(t, e, i) {
                            o.preloadInfo.progress = t / e, o.preloadInfo.completedCount = t, o.preloadInfo.totalCount = e, cc.director.emit("Preloader:Progress", t, e, !1), 0
                        }, function(i) {
                            o.preloadInfo.progress = 1, cc.director.emit("Preloader:Progress", 1, 1, !0), o.isLoading = !1, e && o.loadScene(t)
                        })
                    }
                }, t.prototype.load = function(t, e, o) {
                    if (this.preloadInfo.name === t) {
                        if (this.preloadInfo.progress > .9) return void this.loadScene(t)
                    } else this.preload(t);
                    this.preloadWindowOpen(e, o), this.loadScene(t)
                }, t.prototype.preloadWindowOpen = function(t, e) {
                    var o = this;
                    cc.loader.loadRes("prefab/WindowPreload", cc.Prefab, function(i, n) {
                        if (0 != o.isLoading) {
                            var a = t || cc.find("Canvas"),
                                r = cc.instantiate(n);
                            e && (r.group = e), a.addChild(r), o.preloadNode = r
                        }
                    })
                }, t.prototype.preloadWindowClose = function() {
                    this.preloadNode.runAction(cc.fadeTo(.1, 0))
                }, t
            }();
        o.SceneManager = n, cc._RF.pop()
    }, {}],
    SettingsBox: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fabab1IOKZJsZULLSnhzdrY", "SettingsBox"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = cc._decorator,
            a = n.ccclass,
            r = (n.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.start = function() {}, e.prototype.onUpdateSetting = function(t, e, o) {
                    i.mg.data.user.setting;
                    switch (o.join(".")) {
                        case "user.setting.bgm":
                            i.mg.audio.bgmVolume = t;
                            break;
                        case "user.setting.se":
                            i.mg.audio.defaultVolume = t
                    }
                }, e.prototype.onDisable = function() {
                    i.mg.data.saveUserData()
                }, e = __decorate([a], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    Ship: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b97c3ULZ71AR6Y/D6lxA76b", "Ship"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Behavior/movement/BhvCar"),
            a = t("../../../Behavior/general/BhvCameraExtra"),
            r = t("../../../Behavior/ui/BhvEventSender"),
            s = t("../../../Behavior/input/BhvInputArea"),
            c = t("../../../Behavior/input/BhvKeyboard"),
            l = cc._decorator,
            h = l.ccclass,
            p = l.property,
            d = (l.executeInEditMode, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._skinId = 0, e.bombPrefab = null, e.digTime = 0, e.digStartFlag = !1, e.autoSteer = "none", e.spriteAtlas = null, e.particleAtlas = null, e
                }
                return __extends(e, t), Object.defineProperty(e.prototype, "skinId", {
                    get: function() {
                        return this._skinId
                    },
                    set: function(t) {
                        this._skinId = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.onLoad = function() {
                    this.setSkin(this._skinId), this.car = this.node.getComponent(n.default), this.camera = a.default.find("player"), this.touchLeft = s.default.find("touch_left"), this.touchRight = s.default.find("touch_right"), this.keyboard = c.default.find()
                }, e.prototype.start = function() {
                    this.setDigParticles(0), this.setDigParticlesColor()
                }, e.prototype.setSkin = function(t) {
                    var e = this.node.getChildByName("top"),
                        o = this.node.getChildByName("body"),
                        i = this.node.getChildByName("particle"),
                        n = e.getChildByName("particle_fire"),
                        a = e.getChildByName("particle_stone"),
                        r = e.getChildByName("dig_collide"),
                        s = u[t];
                    if (this.particleAtlas) {
                        var c = this.particleAtlas.getSpriteFrame("particle" + t);
                        i.getComponent(cc.ParticleSystem).spriteFrame = c, i.x = s[3]
                    }
                    if (this.spriteAtlas) {
                        var l = this.spriteAtlas.getSpriteFrame("ship_top" + t),
                            h = this.spriteAtlas.getSpriteFrame("ship_body" + t);
                        e.getComponent(cc.Sprite).spriteFrame = l, o.getComponent(cc.Sprite).spriteFrame = h, o.x = s[0], e.x = s[1], o.y = 7 == t ? 8.9 : 0
                    }
                    n.y = e.height - 5, a.y = e.height - 5, r.y = e.height - 5, !0 === s[2] ? (i.zIndex = 0, e.zIndex = 2, o.zIndex = 1) : (i.zIndex = 0, e.zIndex = 1, o.zIndex = 2)
                }, e.prototype.setDigParticlesColor = function() {
                    var t = this.node.getChildByName("top").getChildByName("particle_stone").getComponent(cc.ParticleSystem),
                        e = [
                            [52, 30, 6],
                            [27, 41, 25],
                            [68, 15, 21],
                            [107, 86, 71],
                            [16, 29, 64]
                        ][i.mg.data.global.map_skin];
                    t.startColor.setR(e[0]), t.startColor.setG(e[1]), t.startColor.setB(e[2]), t.endColor.setR(e[0] + 80), t.endColor.setG(e[1] + 80), t.endColor.setB(e[2] + 80)
                }, e.prototype.setDigParticles = function(t, e) {
                    var o = this.node.getChildByName("top"),
                        i = o.getChildByName("particle_fire"),
                        n = o.getChildByName("particle_stone"),
                        a = i.getComponent(cc.ParticleSystem);
                    n.getComponent(cc.ParticleSystem);
                    0 == t ? (a.stopSystem(), a.node.active = !1) : (a.resetSystem(), a.emissionRate = 20 * t, a.node.active = !0)
                }, e.prototype.onEnable = function() {
                    var t = this;
                    this.car.enabled = !0, this.node.on(r.default.EVENTS.ON_COLLISION_ENTER, this.onDigCollideEnter, this), this.node.on(r.default.EVENTS.ON_COLLISION_STAY, this.onDigCollideStay, this), this.node.on(r.default.EVENTS.ON_COLLISION_EXIT, this.onDigCollideExit, this), this.keyboard.events.on("down" + cc.macro.KEY.space, function() {
                        i.mg.data.global.item.bomb > 0 && (i.mg.data.global.item.bomb--, t.shootBomb())
                    }, this)
                }, e.prototype.onDisable = function() {
                    i.mg.audio.stop("ship_dig"), this.car.enabled = !1, this.node.off(r.default.EVENTS.ON_COLLISION_ENTER, this.onDigCollideEnter, this), this.node.off(r.default.EVENTS.ON_COLLISION_STAY, this.onDigCollideStay, this), this.node.off(r.default.EVENTS.ON_COLLISION_EXIT, this.onDigCollideExit, this), this.keyboard.events.targetOff(this)
                }, e.prototype.onDigCollideEnter = function(t, e) {
                    "Stone" == t.node.name && (this.setDigParticles(10), this.camera.shake(.01, .1), i.mg.data.global.fuel <= 10 && this.camera.flash(cc.color(255, 0, 0), .2, !1, 155))
                }, e.prototype.onDigCollideStay = function(t, e) {
                    if ("Stone" == t.node.name) {
                        var o = cc.director.getDeltaTime() / (1 / 60);
                        this.car.speed = this.car.speed * (1 - .2 * o);
                        var n = i.mg.data.global;
                        n.fuel = i.mg.math.minSub(n.fuel, i.mg.data.config.costFuel * o, 0), this.digTime += o, this.digTime >= 10 && 0 == this.digStartFlag && (this.digStartFlag = !0, i.mg.audio.play(i.mg.PATH.AUDIO.SE, "dig_loop", "ship_dig", !0, .2))
                    }
                }, e.prototype.onDigCollideExit = function(t, e) {
                    "Stone" == t.node.name && (this.setDigParticles(0), this.camera.shake(.01, .1), this.digStartFlag = !1, i.mg.audio.stop("ship_dig"), this.digTime >= 20 && i.mg.audio.playSE("dig_end", .7), this.digTime = 0, this.digStartFlag = !1)
                }, e.prototype.shootBomb = function() {
                    var t = this.node.getParent(),
                        e = cc.instantiate(this.bombPrefab);
                    e.x = this.node.x, e.y = this.node.y, t.addChild(e);
                    var o = cc.misc.degreesToRadians(this.node.rotation),
                        i = 200 * Math.cos(o),
                        n = -1 * Math.sin(o) * 200,
                        a = cc.jumpBy(.5, cc.v2(i, n), 100, 2).easing(cc.easeSineInOut());
                    e.runAction(a), cc.log("shoot")
                }, e.prototype.speedUp = function(t, e) {
                    void 0 === t && (t = 500), void 0 === e && (e = .5), this.car.speedUp(t, e, .1)
                }, e.prototype.slowDown = function(t) {
                    void 0 === t && (t = .3), this.car.speed = this.car.maxSpeed * t
                }, e.prototype.update = function(t) {
                    "left" === this.autoSteer || this.touchLeft.isTouching || this.keyboard.IsKeyDown(cc.macro.KEY.left) ? this.car.simulate(n.default.DIRECTION.LEFT) : ("right" === this.autoSteer || this.touchRight.isTouching || this.keyboard.IsKeyDown(cc.macro.KEY.right)) && this.car.simulate(n.default.DIRECTION.RIGHT), this.car.simulate(n.default.DIRECTION.UP)
                }, e.prototype.onWrapNode = function(t, e) {
                    var o = this.camera;
                    switch (t) {
                        case "left":
                            o.focusOnXY(e.sub(cc.v2(120, 0)));
                            break;
                        case "right":
                            o.focusOnXY(e.sub(cc.v2(-120, 0)));
                            break;
                        case "top":
                            o.focusOnXY(e.sub(cc.v2(0, 240)));
                            break;
                        case "bottom":
                            o.focusOnXY(e.sub(cc.v2(0, -240)))
                    }
                }, __decorate([p({
                    type: cc.Integer,
                    tooltip: "\u7f16\u8f91\u5668\u6d4b\u8bd5\u76ae\u80a4id,\u8fd0\u884c\u65f6\u4e0d\u53d7\u5f71\u54cd"
                })], e.prototype, "skinId", null), __decorate([p], e.prototype, "_skinId", void 0), __decorate([p(cc.Prefab)], e.prototype, "bombPrefab", void 0), __decorate([p({
                    type: cc.SpriteAtlas
                })], e.prototype, "spriteAtlas", void 0), __decorate([p({
                    type: cc.SpriteAtlas
                })], e.prototype, "particleAtlas", void 0), e = __decorate([h], e)
            }(cc.Component));
        o.default = d;
        var u = {
            0: [0, 0, !0, -74],
            1: [0, -2, !0, -72],
            2: [0, -12, !1, -69],
            3: [0, -2, !1, -78],
            4: [0, -2, !1, -99],
            5: [0, -2, !0, -73.6],
            6: [0, -5.2, !1, -68],
            7: [11.5, -6, !0, 20],
            8: [0, -11.5, !1, -64],
            9: [0, -11.5, !1, -66.9],
            10: [0, -40.7, !1, -94.8],
            11: [0, -9.4, !1, -51.3],
            12: [0, -6.6, !1, -64],
            13: [0, -3.8, !1, -64],
            14: [0, -3.8, !1, -51.4],
            15: [0, -5.1, !1, -60.5],
            16: [0, -12.6, !1, -114.5],
            17: [0, -12, !1, -74],
            18: [0, -49.5, !1, -74],
            19: [0, -22.7, !1, -54.8],
            20: [0, -22.7, !1, -59.2],
            21: [0, -22.7, !1, -59.2]
        };
        cc._RF.pop()
    }, {
        "../../../Behavior/general/BhvCameraExtra": "BhvCameraExtra",
        "../../../Behavior/input/BhvInputArea": "BhvInputArea",
        "../../../Behavior/input/BhvKeyboard": "BhvKeyboard",
        "../../../Behavior/movement/BhvCar": "BhvCar",
        "../../../Behavior/ui/BhvEventSender": "BhvEventSender",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    SoundManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "334a4GLdYBDIqnXmFleIdD6", "SoundManager"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../config/loadPath"),
            n = t("../../../Behavior/general/BhvAudioSource"),
            a = i.CONFIG_LOAD_PATH.AUDIO,
            r = function() {
                function t(t) {
                    this.audioTags = [], this._bgmVolume = 1, this._defaultVolume = 1, this.bgmAudioId = -1, this._path = t
                }
                return Object.defineProperty(t.prototype, "bgmVolume", {
                    get: function() {
                        return this._bgmVolume
                    },
                    set: function(t) {
                        this._bgmVolume = t, n.default.SetTagVolume("bgm", t), -1 !== this.bgmAudioId && cc.audioEngine.setVolume(this.bgmAudioId, t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "defaultVolume", {
                    get: function() {
                        return this._defaultVolume
                    },
                    set: function(t) {
                        this._defaultVolume = t, n.default.SetDefaultVolume(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.preload = function(t, e, o) {
                    cc.audioEngine.preload(t + e, o)
                }, t.prototype.play = function(t, e, o, i, n) {
                    var a = this;
                    void 0 === i && (i = !1), cc.loader.loadRes(t + e, cc.AudioClip, function(e, r) {
                        var s = a.getDefaultVolume(t, n),
                            c = cc.audioEngine.play(r, i, s);
                        o && a.audioTags.push({
                            tag: o,
                            id: c,
                            loop: i
                        })
                    })
                }, t.prototype.playBgm = function(t, e) {
                    var o = this,
                        n = i.CONFIG_LOAD_PATH.AUDIO.BGM;
                    cc.loader.loadRes(n + t, cc.AudioClip, function(t, i) {
                        var a = o.getDefaultVolume(n, e);
                        o.bgmAudioId = cc.audioEngine.playMusic(i, !0), cc.audioEngine.setMusicVolume(a)
                    })
                }, t.prototype.pauseBgm = function() {
                    cc.audioEngine.pauseMusic()
                }, t.prototype.resumeBgm = function() {
                    cc.audioEngine.resumeMusic()
                }, t.prototype.stopBgm = function() {
                    cc.audioEngine.stopMusic(), this.bgmAudioId = -1
                }, t.prototype.playSE = function(t, e) {
                    this.play(a.SE, t, null, !1, e)
                }, t.prototype.playME = function(t, e) {
                    this.play(a.ME, t, null, !1, e)
                }, t.prototype.pause = function(t) {
                    this.audioTags.forEach(function(e, o, i) {
                        e.tag === t && cc.audioEngine.pause(e.id)
                    })
                }, t.prototype.pauseAll = function() {
                    cc.audioEngine.pauseAll(), n.default.PauseAll()
                }, t.prototype.resumeAll = function() {
                    cc.audioEngine.resumeAll(), n.default.ResumeAll()
                }, t.prototype.getCurrentTime = function(t) {
                    return cc.audioEngine.getCurrentTime(this.getAudioId(t))
                }, t.prototype.setCurrentTime = function(t, e) {
                    cc.audioEngine.setCurrentTime(this.getAudioId(t), e)
                }, t.prototype.getDuration = function(t) {
                    return cc.audioEngine.getDuration(this.getAudioId(t))
                }, t.prototype.getDefaultVolume = function(t, e) {
                    return t === a.BGM ? null == e ? this._bgmVolume : e * this._bgmVolume : null == e ? this._defaultVolume : this._defaultVolume * e
                }, t.prototype.stop = function(t) {
                    for (var e = 0; e < this.audioTags.length; e++) {
                        var o = this.audioTags[e];
                        o.tag === t && (cc.audioEngine.stop(o.id), this.audioTags.splice(e, 1), e -= 1)
                    }
                }, t.prototype.setVolume = function(t, e) {
                    this.audioTags.forEach(function(o, i, n) {
                        o.tag === t && cc.audioEngine.setVolume(o.id, e)
                    })
                }, t.prototype.getVolume = function(t) {
                    return cc.audioEngine.getVolume(this.getAudioId(t))
                }, t.prototype.getAudioId = function(t) {
                    for (var e = 0; e < this.audioTags.length; e++) {
                        var o = this.audioTags[e];
                        if (o.tag === t) return o.id
                    }
                }, t
            }();
        o.SoundManager = r, cc._RF.pop()
    }, {
        "../../../Behavior/general/BhvAudioSource": "BhvAudioSource",
        "../config/loadPath": "loadPath"
    }],
    SpriteManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "82d9cDqrSFCZIedcWshLx8d", "SpriteManager"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t) {
                this._path = t
            }
            return t.prototype.set = function(t, e, o, i) {
                void 0 === e && (e = ""), void 0 === o && (o = ""), void 0 === i && (i = !1);
                var n = t.getComponent(cc.Sprite);
                n || console.error(t.getParent().name + "." + t.name, "\u8282\u70b9\u672a\u6302\u8f7d cc.Sprite \u7ec4\u4ef6");
                var a = cc.size(t.width, t.height);
                cc.loader.loadRes(e + o, function(e, o) {
                    if (e) console.error(e);
                    else {
                        var r = new cc.SpriteFrame(o);
                        n.spriteFrame = r, i && (t.width = a.width, t.height = a.height)
                    }
                })
            }, t.prototype.get = function(t, e, o) {
                void 0 === t && (t = ""), void 0 === e && (e = ""), cc.loader.loadRes(t + e, cc.SpriteFrame, function(t, e) {
                    t && console.error(t), o(e)
                })
            }, t.prototype.getFrames = function(t, e, o) {
                void 0 === t && (t = "");
                var i = e.map(function(e) {
                    return t + e
                });
                cc.loader.loadResArray(i, cc.SpriteFrame, function(t, e) {
                    t ? (console.error(t), o(null)) : o(e)
                })
            }, t
        }();
        o.SpriteManager = i, cc._RF.pop()
    }, {}],
    StateMachine: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0d00b8GDIVDmaurN6+zwn9t", "StateMachine"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = new cc.EventTarget,
            n = function() {
                function t() {
                    this._states = {}, this.parentStates = [], this.path = []
                }
                return t.prototype.emit = function(t, e, o, n, a, r) {
                    i.emit(t, e, o, n, a, r)
                }, t.prototype.on = function(t, e, o) {
                    i.on(t, e, o)
                }, t.prototype.off = function(t, e, o) {
                    i.off(t, e, o)
                }, t.prototype.hasState = function(t) {
                    return -1 !== Object.keys(this._states).indexOf(t)
                }, t.prototype.addState = function(t, e) {
                    void 0 === e && (e = {}), this.hasState(t) && cc.log("[StateMachine] \u8986\u76d6\u5df2\u5b58\u5728\u7684\u72b6\u6001: " + t), this._states[t] = new a(t, e.from, e.enter, e.exit, this._states[e.parent])
                }, Object.defineProperty(t.prototype, "initialState", {
                    set: function(t) {
                        if (void 0 === this._state && this.hasState(t)) {
                            if (this._state = t, void 0 !== this._states[this._state].root && null !== this._states[this._state].root)
                                for (var e = 0, o = this._states[this._state].parents; e < o.length; e++) {
                                    var i = o[e];
                                    null !== i.enter && "function" == typeof i.enter && i.enter.call(this, {
                                        toState: t
                                    })
                                }
                            null !== this._states[this._state].enter && "function" == typeof this._states[this._state].enter && this._states[this._state].enter.call(this, {
                                currentState: this._state
                            }), this.emit("transition_complete", {
                                toState: t
                            })
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "state", {
                    get: function() {
                        return this._states[this._state]
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "states", {
                    get: function() {
                        return this._states
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getStateByName = function(t) {
                    for (var e in this._states) {
                        var o = this._states[e];
                        if (o.name === t) return o
                    }
                    return null
                }, t.prototype.canChangeStateTo = function(t) {
                    return t !== this._state && -1 !== this._states[t].from.indexOf(this._state) || "*" === this._states[t].from
                }, t.prototype.findPath = function(t, e) {
                    for (var o = this._states[t], i = 0, n = 0; o;) {
                        n = 0;
                        for (var a = this._states[e]; a;) {
                            if (o == a) return [i, n];
                            n++, a = a.parent
                        }
                        i++, o = o.parent
                    }
                    return [i, n]
                }, t.prototype.changeState = function(t) {
                    if (this.hasState(t)) {
                        if (!this.canChangeStateTo(t)) return console.warn("[StateMachine] \u5207\u6362\u72b6\u6001 " + t + " \u88ab\u62d2\u7edd"), void this.emit("transition_denied", {
                            from: this._state,
                            to: t,
                            allowed: this._states[t].from
                        });
                        var e = this.findPath(this._state, t);
                        if (e[0] > 0) {
                            null !== this._states[this._state].exit && "function" == typeof this._states[this._state].exit && this._states[this._state].exit.call(null, {
                                currentState: this._state
                            });
                            for (var o = this._states[this._state], i = 0; i < e[0] - 1; i++) null !== (o = o.parent).exit && "function" == typeof o.exit && o.exit.call(null, {
                                currentState: o.name
                            })
                        }
                        var n = this._state;
                        if (this._state = t, e[1] > 0) {
                            if (void 0 !== this._states[t].root && null !== this._states[t].root)
                                for (var a = this._states[t].parents, r = e[1] - 2; r >= 0; r--) void 0 !== a[r] && null !== a[r] && null !== a[r].enter && "function" == typeof a[r].enter && a[r].enter.call(null, {
                                    currentState: a[r].name
                                });
                            null !== this._states[this._state].enter && "function" == typeof this._states[this._state].enter && this._states[this._state].enter.call(null, {
                                currentState: this._state
                            })
                        }
                        cc.log("[StateMachine] \u72b6\u6001\u5207\u6362\u81f3" + this._state), this.emit("transition_complete", {
                            fromState: n,
                            toState: t
                        })
                    } else console.warn("[StateMachine] \u4e0d\u80fd\u5207\u6362\u72b6\u6001, " + t + "\u672a\u627e\u5230")
                }, t.prototype.destroy = function() {
                    this._states = null, this.parentStates = null, this.path = null, this.parentState = null
                }, t
            }();
        o.default = n;
        var a = function() {
            function t(t, e, o, i, n) {
                this.name = t, this.from = e || "*", this.enter = o, this.exit = i, this.children = [], void 0 !== n && null !== n && (this._parent = n, this._parent.children.push(this))
            }
            return Object.defineProperty(t.prototype, "parent", {
                get: function() {
                    return this._parent
                },
                set: function(t) {
                    this._parent = t, this._parent.children.push(this)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "root", {
                get: function() {
                    var t = this._parent;
                    if (void 0 !== t && null !== t)
                        for (; t.parent;) t = t.parent;
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "parents", {
                get: function() {
                    var t = [],
                        e = this._parent;
                    if (void 0 !== e && null !== e)
                        for (t.push(e); e.parent;) e = e.parent, t.push(e);
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
        cc._RF.pop()
    }, {}],
    StoneGenerateEditor: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f8053veI65ADawPKXJL3+uo", "StoneGenerateEditor"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = t("../../Behavior/ui/BhvFrameIndex"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property;
        (function(t) {
            t[t.EDITOR = 0] = "EDITOR", t[t.TEST = 1] = "TEST"
        })(i || (i = {}));
        var c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.selectType = i.EDITOR, e.stoneFake = null, e._logInfo = 0, e
            }
            return __extends(e, t), Object.defineProperty(e.prototype, "logInfo", {
                get: function() {
                    return this._logInfo
                },
                set: function(t) {
                    this._logInfo = t, this.logNodes()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.updateNodes = function() {}, e.prototype.logNodes = function() {
                for (var t = "{\n", e = this.node, o = 0; o < e.children.length; o++) {
                    t = t.concat('"' + o + '":[');
                    for (var i = 0; i < e.children[o].children.length; i++) {
                        var a = e.children[o].children[i],
                            r = a.getComponent(n.default).index;
                        t = t.concat("[" + Math.floor(a.x) + "," + Math.floor(a.y) + "," + r + "," + Math.floor(a.rotation) + "," + Math.floor(100 * a.scale) / 100 + "]"), i != e.children[o].children.length - 1 && (t = t.concat(","))
                    }
                    t = t.concat("]"), o != e.children.length - 1 && (t = t.concat(",\n"))
                }
                t = t.concat("\n}"), cc.log(t)
            }, __decorate([s({
                type: cc.Enum(i)
            })], e.prototype, "selectType", void 0), __decorate([s(cc.Prefab)], e.prototype, "stoneFake", void 0), __decorate([s({
                visible: function() {
                    return this.selectType === i.EDITOR
                },
                tooltip: "\u6539\u53d8\u6570\u503c\u540e\uff0c\u4f1a\u8c03\u7528\u5237\u65b0\u65b9\u6cd5"
            })], e.prototype, "logInfo", null), e = __decorate([r], e)
        }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {
        "../../Behavior/ui/BhvFrameIndex": "BhvFrameIndex"
    }],
    Stone: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "41d6bXxydlM96XN0M5MTxfo", "Stone"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a = t("./../../../Script/System/mgIndex"),
            r = t("./Piece"),
            s = t("./Item"),
            c = cc._decorator,
            l = c.ccclass,
            h = c.property,
            p = c.executeInEditMode;
        (function(t) {
            t[t.brown = 0] = "brown", t[t.blue = 1] = "blue", t[t.red = 2] = "red", t[t.sand = 3] = "sand", t[t.green = 4] = "green"
        })(i || (i = {})),
        function(t) {
            t[t.stone = 0] = "stone", t[t.gold = 1] = "gold", t[t.crystal = 2] = "crystal", t[t.diamond = 3] = "diamond"
        }(n || (n = {}));
        var d = [
                [cc.v2(-10.5, 123), cc.v2(-102.5, 34), cc.v2(-83.5, -123), cc.v2(69.5, -105), cc.v2(102.5, 36), cc.v2(71.5, 107)],
                [cc.v2(46.5, 121.5), cc.v2(-122.5, 71.5), cc.v2(-122.5, -80.5), cc.v2(-11.5, -121.5), cc.v2(54.5, -72.5), cc.v2(122.5, -48.5), cc.v2(122.5, 48.5)],
                [cc.v2(-19.5, 121), cc.v2(-127.5, 40), cc.v2(-95.5, -107), cc.v2(31.5, -121), cc.v2(109.5, -64), cc.v2(127.5, -37), cc.v2(122.5, 90)]
            ],
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mhp = 10, e._type = n.stone, e._skin = i.brown, e._shapeIndex = 0, e._preShapeIndex = 0, e._mineMixType = n.stone, e._minePurity = .1, e.originScale = 1, e.atlasColorSkin = [], e.atlasMineSkin = null, e.piecePrefab = null, e.itemPrefab = null, e.minOriginScaleRatio = .6, e.canBreakIt = !0, e.digCount = 0, e._hp = 0, e
                }
                var o;
                return __extends(e, t), o = e, Object.defineProperty(e.prototype, "type", {
                    get: function() {
                        return this._type
                    },
                    set: function(t) {
                        this._type = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "skin", {
                    get: function() {
                        return this._skin
                    },
                    set: function(t) {
                        this._skin = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "shapeIndex", {
                    get: function() {
                        return this._shapeIndex
                    },
                    set: function(t) {
                        this._shapeIndex = t, this._shapeIndex !== this._preShapeIndex && (this._preShapeIndex = this._shapeIndex, this.updateCollideBox()), this.updateSkin()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "mineMixType", {
                    get: function() {
                        return this._mineMixType
                    },
                    set: function(t) {
                        this._mineMixType = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "minePurity", {
                    get: function() {
                        return this._minePurity
                    },
                    set: function(t) {
                        this._minePurity = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "hp", {
                    get: function() {
                        return this._hp
                    },
                    set: function(t) {
                        this._hp = t, this._hp > this.mhp && (this._hp = this.mhp), this._hp < 0 && (this._hp = 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.onLoad = function() {
                    this.hp = this.mhp
                }, e.prototype.start = function() {}, e.prototype.generatePieceType = function() {
                    var t;
                    this.type == n.stone ? t = 1 == a.mg.rnd.random() <= this.minePurity ? this.mineMixType : n.stone : t = this.type;
                    return t
                }, e.prototype.init = function(t) {
                    this.canBreakIt = !0, this.digCount = 0, this.originScale = t.originScale || 1, this.mhp = t.maxHp || 10, this.hp = this.mhp, this.type = t.type || 0, this.shapeIndex = t.shape || 0, this.skin = t.skin || 0, this.mineMixType = t.mineMixType || n.stone, this.minePurity = t.minePurity || 0, this.type !== n.stone && (this.minePurity = 1), this.updateSize(), this.updateSkin(), this.updateCollideBox()
                }, e.prototype.updateSize = function() {
                    var t = this.hp / this.mhp,
                        e = this.originScale * t,
                        o = this.minOriginScaleRatio * this.originScale;
                    e < o && (e = o), this.node.scale = e
                }, e.prototype.updateSkin = function() {
                    var t, e, o, i = this.shapeIndex;
                    switch (this.type) {
                        case n.stone:
                            var r = Math.round(a.mg.math.map(this.minePurity, 0, 1, 0, 4)),
                                s = ["brown", "blue", "red", "sand", "green"][this.skin],
                                c = [null, "gold", "gem", "diamond"][this.mineMixType];
                            t = this.atlasColorSkin[this.skin], o = c ? "diamond" == c ? s + i + "_diamond" : s + i + "_" + c + r : s + i;
                            break;
                        case n.gold:
                            t = this.atlasMineSkin, o = "mine" + i + "_gold";
                            break;
                        case n.diamond:
                            t = this.atlasMineSkin, o = "mine" + i + "_diamond";
                            break;
                        case n.crystal:
                            t = this.atlasMineSkin, o = "mine" + i + "_gem"
                    }(e = t.getSpriteFrame(o)) && (this.node.getComponent(cc.Sprite).spriteFrame = e)
                }, e.prototype.updateCollideBox = function() {
                    var t = this.node.getComponent(cc.PolygonCollider),
                        e = d[this.shapeIndex];
                    e && (t.points = e)
                }, e.prototype.onCollisionEnter = function(t, e) {
                    "bomb_collide" == t.node.name && (this.hp = 0, this.checkAfterCollide())
                }, e.prototype.onCollisionStay = function(t, e) {
                    if (0 != this.canBreakIt && "dig_collide" == t.node.name) {
                        var o = cc.director.getDeltaTime() / (1 / 60);
                        this.hp -= a.mg.data.getShipGameDig() * o, this.checkAfterCollide()
                    }
                }, e.prototype.onCollisionExit = function(t, e) {}, e.prototype.checkDestroy = function() {
                    a.mg.data.global.collect.stone += 1, this.type === n.stone && !0 === a.mg.data.getItemProperty(this.originScale) && this.spawnItem(this.node.position), this.canBreakIt = !1, this.checkDigResult(), a.mg.pool.find("Stone").put(this.node), a.mg.audio.playSE(a.mg.rnd.choose(["stone_break", "stone_break2"]), .2)
                }, e.prototype.checkAfterCollide = function() {
                    this.updateSize(), (this.hp <= 0 || this.node.scale <= .15) && (this.originScale > .5 && this.node.scale >= .15 && this.divideStone(), this.checkDestroy())
                }, e.prototype.spawnStone = function(t) {
                    var e = this.skin,
                        i = cc.v2(100 * (2 * Math.random() - 1), 100 * (2 * Math.random() - 1)),
                        r = cc.rotateTo(.5, 360 + 180 * Math.random()).easing(cc.easeSineOut()),
                        s = cc.moveBy(.3, i).easing(cc.easeSineOut()),
                        c = a.mg.pool.find("Stone").get() || cc.instantiate(this.node),
                        l = .2 * Math.random() - .1 + 1;
                    c.x = this.node.x, c.y = this.node.y;
                    var h = n[a.mg.rnd.choose(["stone", "gold", "crystal", "diamond"])];
                    t < .25 && (h = n.stone), c.getComponent(o).init({
                        originScale: t * l,
                        maxHp: this.mhp * t,
                        type: this.type,
                        mineMixType: h,
                        skin: e,
                        minePurity: this.minePurity
                    }), c.runAction(cc.spawn([r, s])), this.node.getParent().addChild(c)
                }, e.prototype.spawnPiece = function(t, e, o, i, n) {
                    void 0 === i && (i = 100), void 0 === n && (n = 1), null == t && (t = a.mg.rnd.choose(["gold", "crystal"])), null == e && (e = a.mg.rnd.range(-180, 180));
                    var s = a.mg.pool.find("Piece").get() || cc.instantiate(this.piecePrefab),
                        c = s.getComponent(r.default);
                    this.node.getParent().addChild(s), s.x = o.x, s.y = o.y, c.init(t, e + a.mg.rnd.range(-45, 45), n), c.startFollow(i)
                }, e.prototype.spawnItem = function(t) {
                    var e = a.mg.pool.find("Item").get() || cc.instantiate(this.itemPrefab),
                        o = e.getComponent(s.default);
                    this.node.getParent().addChild(e), e.x = t.x, e.y = t.y, o.init()
                }, e.prototype.checkDigResult = function() {
                    var t = Math.floor(8 * this.originScale) + 2,
                        e = [null, "gold", "crystal", "diamond"][this.generatePieceType()];
                    if (e) {
                        "diamond" === e && (t = Math.floor(t / 2) + 1);
                        for (var o = 0; o < t; o++) this.spawnPiece(e, a.mg.rnd.range(0, 360), this.node.position, this.node.width, this.originScale)
                    }
                }, e.prototype.divideStone = function() {
                    var t = a.mg.rnd.choose([
                        [.6, .3, .3],
                        [.5, .3, .2, .2],
                        [.2, .2, .3, .4, .5],
                        [.5, .5, .6]
                    ]);
                    a.mg.audio.playSE(a.mg.rnd.choose(["stone_break", "stone_break2"]));
                    for (var e = 0; e < t.length; e++) {
                        var o = t[e],
                            i = this.node.scale * o;
                        this.spawnStone(i)
                    }
                    this.checkDigResult()
                }, e.TYPE = n, e.SKIN = i, __decorate([h({
                    tooltip: "\u77f3\u5934\u8840\u91cf\u4e0a\u9650"
                })], e.prototype, "mhp", void 0), __decorate([h({
                    type: cc.Enum(n),
                    tooltip: "\u77f3\u5934\u7684\u7c7b\u578b"
                })], e.prototype, "type", null), __decorate([h], e.prototype, "_type", void 0), __decorate([h({
                    type: cc.Enum(i),
                    tooltip: "\u77f3\u5934\u7684\u76ae\u80a4",
                    visible: function() {
                        return this.type === n.stone
                    }
                })], e.prototype, "skin", null), __decorate([h], e.prototype, "_skin", void 0), __decorate([h({
                    type: cc.Integer,
                    range: [0, 2],
                    tooltip: "\u77f3\u5934\u7684\u5f62\u72b6\u7c7b\u578b"
                })], e.prototype, "shapeIndex", null), __decorate([h], e.prototype, "_shapeIndex", void 0), __decorate([h], e.prototype, "_preShapeIndex", void 0), __decorate([h({
                    type: cc.Enum(n),
                    tooltip: "\u77f3\u5934\u4e2d\u542b\u6709\u7684\u77ff\u7269\u7c7b\u578b(\u5f71\u54cd\u6316\u6398\u7269\u548c\u663e\u793a\u76ae\u80a4)",
                    visible: function() {
                        return this.type === n.stone
                    }
                })], e.prototype, "mineMixType", null), __decorate([h], e.prototype, "_mineMixType", void 0), __decorate([h({
                    range: [0, 1],
                    step: .01,
                    slide: !0,
                    tooltip: "\u77ff\u77f3\u7eaf\u5ea6\uff0c\u5f71\u54cd\u77ff\u77f3\u4ea7\u751f\u77ff\u77f3\u788e\u7247\u7684\u6982\u7387(\u77f3\u5934\u7c7b\u578b\u624d\u751f\u6548)",
                    visible: function() {
                        return this.type === n.stone && this.mineMixType !== n.stone
                    }
                })], e.prototype, "minePurity", null), __decorate([h], e.prototype, "_minePurity", void 0), __decorate([h({
                    tooltip: "\u8fd9\u4e2a\u77f3\u5934\u7684\u539f\u59cb\u7f29\u653e\u6bd4\u7387"
                })], e.prototype, "originScale", void 0), __decorate([h({
                    type: [cc.SpriteAtlas],
                    tooltip: "\u4f7f\u7528\u7684\u666e\u901a\u77f3\u5934\u989c\u8272\u56fe\u96c6: brown,blue,red,sand,green"
                })], e.prototype, "atlasColorSkin", void 0), __decorate([h({
                    type: cc.SpriteAtlas,
                    tooltip: "\u4f7f\u7528\u7684\u7279\u6b8a\u77ff\u77f3\u56fe\u96c6"
                })], e.prototype, "atlasMineSkin", void 0), __decorate([h({
                    type: cc.Prefab
                })], e.prototype, "piecePrefab", void 0), __decorate([h({
                    type: cc.Prefab
                })], e.prototype, "itemPrefab", void 0), e = o = __decorate([l, p], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "./../../../Script/System/mgIndex": "mgIndex",
        "./Item": "Item",
        "./Piece": "Piece"
    }],
    StringFormat: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "85fe8Gc6h5Ava+JsdbBs8cR", "StringFormat"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {}
            return t.prototype.deal = function(t, e) {
                if ("" === e) return t;
                var o, i = (e = e.toLowerCase().trim()).match(/^[a-z|A-Z]+/gi),
                    n = e.match(/\d+$/gi),
                    a = "",
                    r = "";
                if (i && (a = i[0]), n && (o = parseInt(n[0])), "number" == typeof t) switch (a) {
                    case "int":
                        r = this.int(t);
                        break;
                    case "fix":
                        r = this.fix(t, o);
                        break;
                    case "kmbt":
                        r = this.KMBT(t);
                        break;
                    case "per":
                        r = this.per(t, o);
                        break;
                    case "sep":
                        r = this.sep(t)
                } else {
                    switch (a) {
                        case "limit":
                            r = this.limit(t, o)
                    }
                    r = t
                }
                return r
            }, t.prototype.sep = function(t) {
                return Math.round(t).toString().replace(new RegExp("(\\d)(?=(\\d{3})+$)", "ig"), "$1,")
            }, t.prototype.time_m = function(t) {}, t.prototype.time_s = function(t) {}, t.prototype.time_ms = function(t) {}, t.prototype.timeStamp = function(t) {
                return new Date(t).toString()
            }, t.prototype.per = function(t, e) {
                return Math.round(100 * t).toFixed(e)
            }, t.prototype.int = function(t) {
                return Math.round(t)
            }, t.prototype.fix = function(t, e) {
                return t.toFixed(e)
            }, t.prototype.limit = function(t, e) {
                return t.substring(0, e)
            }, t.prototype.KMBT = function(t, e) {
                void 0 === e && (e = "en");
                switch (e) {
                    case "zh":
                }
                return this.compressUnit(t, [1e3, 1e6, 1e9, 1e12], ["", "K", "M", "B", "T"], 2)
            }, t.prototype.compressUnit = function(t, e, o, i) {
                void 0 === i && (i = 2);
                var n, a, r = e,
                    s = o;
                for (a = 0; a < r.length; a++) {
                    if (t < r[a]) {
                        n = a > 0 ? (t / r[a - 1]).toFixed(i) : t.toFixed(0);
                        break
                    }
                }
                return n + s[a]
            }, t
        }();
        o.StringFormatFunction = new i, cc._RF.pop()
    }, {}],
    TestCell: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b25ddLftrRELaUFqxH84UUS", "TestCell"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./PlugTableViewCell"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.index = null, e.group = null, e
                }
                return __extends(e, t), e.prototype.init = function(t, e, o, i) {
                    if (t >= e.array.length) return this.index.string = "\u8d8a\u754c", void(this.group.string = i.toString());
                    this._target = e.target, this._data = e.array[t], this.index.string = t, this.group.string = i.toString()
                }, e.prototype.clicked = function() {
                    this._target.show("\u4e0b\u6807:" + this.index.string + ",\u7ec4:" + this.group.string)
                }, __decorate([r(cc.Label)], e.prototype, "index", void 0), __decorate([r(cc.Label)], e.prototype, "group", void 0), e = __decorate([a], e)
            }(i.default);
        o.default = s, cc._RF.pop()
    }, {
        "./PlugTableViewCell": "PlugTableViewCell"
    }],
    TestMenu: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "68092fgwXVIMrlm8PuX1A0Y", "TestMenu"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./PlugTableView"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tableView = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {}, e.prototype.show = function(t) {
                    cc.log(t)
                }, e.prototype._getdata = function(t) {
                    for (var e = [], o = 0; o < t; ++o) {
                        var i = {};
                        i.name = "a" + o, e.push(i)
                    }
                    return e
                }, e.prototype.initView = function() {
                    var t = this._getdata(50);
                    this.tableView.getComponent(i.default).initTableView(t.length, {
                        array: t,
                        target: this
                    })
                }, e.prototype.nextPage = function() {
                    this.tableView.getComponent(i.default).scrollToNextPage()
                }, e.prototype.lastPage = function() {
                    this.tableView.getComponent(i.default).scrollToLastPage()
                }, __decorate([r(i.default)], e.prototype, "tableView", void 0), e = __decorate([a], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./PlugTableView": "PlugTableView"
    }],
    TipsGameState: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "da0e0+TwK1BjrNYDcUpFQJK", "TipsGameState"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = t("./../../../Script/System/mgIndex"),
            a = t("../../../Behavior/ui/BhvFrameIndex"),
            r = cc._decorator,
            s = r.ccclass,
            c = r.property;
        (function(t) {
            t[t.GAME_START = 0] = "GAME_START", t[t.GAME_FINISH = 1] = "GAME_FINISH", t[t.TIME_OUT = 2] = "TIME_OUT", t[t.NO_FUEL = 3] = "NO_FUEL"
        })(i || (i = {}));
        var l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.barFrame1 = null, e.barFrame2 = null, e.textFrame = null, e.animation = null, e
            }
            return __extends(e, t), e.prototype.init = function(t) {
                var e = this,
                    o = 0,
                    a = 0;
                switch (this.node.active = !0, t) {
                    case i.GAME_START:
                        o = 0, a = 0;
                        break;
                    case i.GAME_FINISH:
                        o = 0, a = 1, n.mg.audio.playME("level_pass");
                        break;
                    case i.TIME_OUT:
                        o = 1, a = 2, n.mg.audio.playME("game_over");
                        break;
                    case i.NO_FUEL:
                        o = 1, a = 3, n.mg.audio.playME("game_over")
                }
                this.barFrame1.index = o, this.barFrame2.index = o, this.textFrame.index = a, this.animation.once(cc.Animation.EventType.FINISHED, function() {
                    e.node.active = !1
                }), this.animation.play()
            }, e.TYPE = i, __decorate([c(a.default)], e.prototype, "barFrame1", void 0), __decorate([c(a.default)], e.prototype, "barFrame2", void 0), __decorate([c(a.default)], e.prototype, "textFrame", void 0), __decorate([c(cc.Animation)], e.prototype, "animation", void 0), e = __decorate([s], e)
        }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {
        "../../../Behavior/ui/BhvFrameIndex": "BhvFrameIndex",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    TipsGameTarget: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fa08bHvLilBGJAB7ZUe5bc2", "TipsGameTarget"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = t("../../../Behavior/ui/BhvFrameIndex"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property;
        (function(t) {
            t[t.PERCENTAGE_25 = 0] = "PERCENTAGE_25", t[t.PERCENTAGE_50 = 1] = "PERCENTAGE_50", t[t.PERCENTAGE_75 = 2] = "PERCENTAGE_75", t[t.PERCENTAGE_100 = 3] = "PERCENTAGE_100"
        })(i || (i = {}));
        var c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.animation = null, e.percentageFrame = null, e
            }
            return __extends(e, t), e.prototype.init = function(t) {
                var e = this;
                this.percentageFrame.index = t, this.node.active = !0, this.animation.once(cc.Animation.EventType.FINISHED, function() {
                    e.node.active = !1
                }), this.animation.play()
            }, e.TYPE = i, __decorate([s(cc.Animation)], e.prototype, "animation", void 0), __decorate([s(n.default)], e.prototype, "percentageFrame", void 0), e = __decorate([r], e)
        }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {
        "../../../Behavior/ui/BhvFrameIndex": "BhvFrameIndex"
    }],
    UICommonAction: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "47d518Gv5JCIpVEbnOp+54C", "UICommonAction"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/sdk/mySdk"),
            n = t("../../../Script/System/mgIndex"),
            a = cc._decorator,
            r = a.ccclass,
            s = (a.property, a.menu),
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.goAppShopTag = !1, e
                }
                return __extends(e, t), e.prototype.start = function() {}, e.prototype.onEnable = function() {
                    cc.director.on("sdk-native-emit", this._onNativeResult, this)
                }, e.prototype.onDisable = function() {
                    cc.director.off("sdk-native-emit", this._onNativeResult, this)
                }, e.prototype._onNativeResult = function(t, e) {
                    switch (t) {
                        case i.mySdk.NativeResultCode.OpenMarketSucceed:
                        case i.mySdk.NativeResultCode.OpenMarketFailed:
                            this.goAppShopTag && (this.goAppShopTag = !1), t === i.mySdk.NativeResultCode.OpenMarketFailed && i.mySdk.Native.openUrl(i.mySdk.APP_URL)
                    }
                }, e.prototype.onGooglePlay = function() {
                    var t = i.mySdk.APP_URL,
                        e = document.createElement("a");
                    e.target = "_blank", e.href = t, document.body.appendChild(e), e.click()
                }, e.prototype.onGoToShop = function() {
                    this.goAppShopTag = !0, i.mySdk.Native.goAppShop()
                }, e.prototype.onShare = function() {
                    var t = "",
                        e = "";
                    switch (n.mg.i18n.language) {
                        case "zh":
                            t = "\u5206\u4eab\u6316\u6398\u5927\u5e08", e = "" + i.mySdk.APP_URL;
                            break;
                        default:
                            t = "Share DIG MASTER", e = "" + i.mySdk.APP_URL
                    }
                    i.mySdk.Native.share(t, e)
                }, e.prototype.onPlayVideoAd = function() {
                    i.mySdk.Ads.showAds(i.mySdk.AdsType.REWARDED_VIDEO)
                }, e.prototype.onShowRank = function() {
                    i.mySdk.Social.showLeaderBoards()
                }, e = __decorate([r, s("\u6dfb\u52a0\u7279\u6b8a\u884c\u4e3a/General/UI\u901a\u7528\u547d\u4ee4")], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {
        "../../../Script/System/mgIndex": "mgIndex",
        "./../../../Script/System/sdk/mySdk": "mySdk"
    }],
    UIResultCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a2ef6bpaptJVoDaLftSiq7o", "UIResultCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Script/System/modelView/VMParent"),
            a = t("../../../Behavior/ui/BhvAnimationHelper"),
            r = t("../pop/PopLevelUp"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.data = {
                        rank: 3,
                        new_record: !1,
                        gold: 12e3,
                        exp: 100,
                        exp_plus: 0,
                        exp_max: 200
                    }, e.popLevelUp = null, e
                }
                return __extends(e, t), e.prototype.start = function() {
                    this.data.rank = i.mg.data.generateResultRank();
                    var t = 10 * i.mg.data.global.level + [1, 5, 15, 30, 50, 70, 100][this.data.rank];
                    t += i.mg.data.global.bubble_award.exp, i.mg.data.global.bubble_award.exp = 0, this.checkLevelUp(t), this.data.gold = i.mg.data.global.gold, this.data.gold > i.mg.data.user.high_gold && (i.mg.data.user.high_gold = this.data.gold, this.data.new_record = !0), i.mg.data.updateHighScoreLevel()
                }, e.prototype.checkLevelUp = function(t) {
                    var e = this,
                        o = 0,
                        n = !1,
                        a = 0;
                    this.data.exp = i.mg.data.user.exp, this.data.exp_max = i.mg.data.user.exp_max, this.schedule(function() {
                        if (o++, e.data.exp_plus += t / 50, e.data.exp += t / 50, i.mg.audio.playSE("text_type"), e.data.exp > e.data.exp_max) {
                            i.mg.data.user.level += 1, i.mg.data.user.exp = e.data.exp = 0, i.mg.data.user.exp_max = e.data.exp_max = i.mg.data.getNextExp(i.mg.data.user.level);
                            var s = i.mg.data.getLevelUpDiamond(i.mg.data.user.level);
                            n = !0, a += s, i.mg.data.user.diamond += s, i.mg.audio.playSE("level_up")
                        }
                        if (o >= 50 && n) {
                            i.mg.data.user.exp_next = i.mg.data.user.exp_max - i.mg.data.user.exp;
                            var c = e.node.getParent(),
                                l = cc.instantiate(e.popLevelUp);
                            l.getComponent(r.default).init(i.mg.data.user.level, a), c.addChild(l)
                        }
                    }, .02, 49, 1)
                }, e.prototype.onButtonDown = function(t, e) {
                    switch (e) {
                        case "replay":
                            this.getComponent(a.default).reverse(), i.mg.scene.load("game");
                            break;
                        case "home":
                            this.getComponent(a.default).reverse(), i.mg.scene.load("home")
                    }
                }, __decorate([l(cc.Prefab)], e.prototype, "popLevelUp", void 0), e = __decorate([c], e)
            }(n.default);
        o.default = h, cc._RF.pop()
    }, {
        "../../../Behavior/ui/BhvAnimationHelper": "BhvAnimationHelper",
        "../../../Script/System/modelView/VMParent": "VMParent",
        "../pop/PopLevelUp": "PopLevelUp",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    UITutorial: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a7000PZwRhPu4H10/Q/tEO8", "UITutorial"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Behavior/ui/BhvTextTyping"),
            a = {
                bubble: [
                    [cc.v2(1.1, 1.1), cc.v2(130, 114), cc.v2(0, -165), {
                        zh: "\u9009\u62e9\u4e00\u4e2a\u6ce1\u6ce1,\n\u624e\u7834\u5b83\u5f97\u610f\u5916\u5956\u52b1\uff01",
                        en: "Popping One Bubble.\nGet A Surprise"
                    }, .1]
                ],
                shop: [
                    [cc.v2(1.2, 1.2), cc.v2(66, -475), cc.v2(0, -137), {
                        zh: "\u94bb\u77f3\u591f\u5566\uff01\n\u53bb\u5546\u5e97\u5347\u7ea7\u4e00\u4e2a\u65b0\u7684\u94bb\u63a2\u673a\u5427\uff01",
                        en: "You can buy a new rig! Go to the store."
                    }, .1],
                    [cc.v2(1.2, 1.8), cc.v2(-80, -210), cc.v2(0, 140), {
                        zh: "\u9009\u62e9\u8981\u8d2d\u4e70\u7684\u94bb\u63a2\u673a\u3002",
                        en: "Choose the rig you want to buy"
                    }, .1],
                    [cc.v2(3, 1.2), cc.v2(0, 0), cc.v2(0, -285), {
                        zh: "\u70b9\u51fb\u6309\u94ae\uff0c\u8d2d\u4e70\u5e76\u4e14\u88c5\u5907\u5427\u3002",
                        en: "Click on the button, buy and equip it."
                    }, .1]
                ]
            },
            r = cc._decorator,
            s = r.ccclass,
            c = r.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.circle = null, e.touch = null, e.finger = null, e.tutorialTag = "", e.step = 0, e.stepMax = 1, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.circle = this.node.getChildByName("circle"), this.touch = this.node.getChildByName("touch"), this.finger = this.node.getChildByName("finger"), this.textTyping = this.node.getChildByName("label").getComponent(n.default)
                }, e.prototype.onEnable = function() {
                    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchArea, this)
                }, e.prototype.onDisable = function() {
                    this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchArea, this)
                }, e.prototype.start = function() {
                    this.onStepPreload()
                }, e.prototype.onTouchArea = function(t) {}, e.prototype.onCreateTips = function(t, e, o, n, a) {
                    var r = this;
                    void 0 === a && (a = .1), this.circle.scale = 2;
                    var s = i.mg.i18n.language;
                    null == n[s] && (s = i.mg.i18n.defaultLanguage);
                    var c = i.mg.i18n.t("tutorial." + this.tutorialTag + "." + this.step, "null");
                    "zh" !== s && (a /= 10), this.touch.active = !1, this.circle.runAction(cc.sequence([cc.spawn([cc.fadeTo(.5, 255), cc.scaleTo(1, t.x, t.y).easing(cc.easeBackInOut()), cc.moveTo(1, e.x, e.y).easing(cc.easeSineInOut())]), cc.delayTime(.5), cc.callFunc(function() {
                        r.touch.active = !0, r.touch.x = e.x, r.touch.y = e.y, r.touch.scaleX = t.x, r.touch.scaleY = t.y
                    })])), this.textTyping.node.x = o.x, this.textTyping.node.y = o.y, this.textTyping.run(c, a), this.textTyping.node.runAction(cc.fadeTo(.5, 255)), this.finger.x = e.x - 20, this.finger.y = e.y + 120, this.finger.opacity = 0, this.finger.runAction(cc.sequence([cc.delayTime(1), cc.fadeTo(.5, 255).easing(cc.easeSineInOut())]))
                }, e.prototype.onStepPreload = function() {
                    var t = a[this.tutorialTag][this.step];
                    this.onCreateTips.apply(this, t)
                }, e.prototype.onStepTouch = function(t) {
                    if (console.log("touch"), "bubble" === this.tutorialTag && cc.director.emit("PopGetBubble:Touch", t, 3), "shop" === this.tutorialTag) switch (this.step, this.step) {
                        case 0:
                            cc.director.emit("Home:SwitchPage", t, 2);
                            break;
                        case 1:
                            cc.director.emit("CellShopShip:Click", 1);
                            break;
                        case 2:
                            cc.director.emit("CellShopShip:Button", t, "buy")
                    }
                    this.step++, this.step >= this.stepMax ? this.onFinished(t) : (this.circle.opacity = 0, this.textTyping.node.opacity = 0, this.finger.opacity = 0, this.onStepPreload())
                }, e.prototype.onFinished = function(t) {
                    var e = this;
                    this.node.runAction(cc.sequence([cc.fadeTo(.5, 0), cc.callFunc(function() {
                        var t = i.mg.data.user.tutorial;
                        e.tutorialTag in t && (t[e.tutorialTag] = e.step, i.mg.data.saveUserData()), e.node.destroy()
                    })]))
                }, __decorate([c], e.prototype, "tutorialTag", void 0), __decorate([c({
                    type: cc.Integer
                })], e.prototype, "step", void 0), __decorate([c({
                    type: cc.Integer
                })], e.prototype, "stepMax", void 0), e = __decorate([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {
        "../../../Behavior/ui/BhvTextTyping": "BhvTextTyping",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    UnequalCirclesPacking: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d8de81Xi+RMRaVCjc0NNn5J", "UnequalCirclesPacking"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.unequalCirclePacking = function(t, e, o, i, n, a) {
            void 0 === t && (t = 100), void 0 === e && (e = 100), void 0 === o && (o = .5), void 0 === i && (i = 10), void 0 === n && (n = .1);
            var r = a || Math.random,
                s = [],
                c = Math.floor(t * e * n),
                l = Math.floor(i),
                h = [];
            (l > t || l > e) && (l = Math.min(t, e, l));
            for (var p = 0; p < t; p++) s[p] = new Array(e);
            for (p = 0; p < t; p++)
                for (var d = 0; d < e; d++) {
                    var u = !1,
                        f = p,
                        _ = d,
                        y = t / 2,
                        m = e / 2;
                    Math.sqrt((f - y) * (f - y) + (_ - m) * (_ - m)) >= y && (u = !0), s[p][d] = {
                        radius: 0,
                        isPlanted: u
                    }
                }
            for (p = 0; p < c; p++) {
                var g = Math.floor(r() * t),
                    v = Math.floor(r() * e);
                if (1 != s[g][v].isPlanted) {
                    var b = l * r();
                    b = Math.max(o, b), s[g][v].radius = b, s[g][v].isPlanted = !0;
                    for (var T = Math.max(g - Math.ceil(b) - l, 0), C = Math.max(v - Math.ceil(b) - l, 0), S = Math.min(g + Math.ceil(b) + l, t - 1), P = Math.min(v + Math.ceil(b) + l, e - 1), E = T; E <= S; E++)
                        for (var x = C; x <= P; x++) g == E && v == x || 1 != s[E][x].isPlanted || (g - E) * (g - E) + (v - x) * (v - x) < (s[E][x].radius + b) * (s[E][x].radius + b) && (s[g][v].radius = 0, s[g][v].isPlanted = !0);
                    1 == s[g][v].isPlanted && h.push({
                        x: g,
                        y: v,
                        r: 2 * s[g][v].radius
                    })
                }
            }
            return h
        };
        var i = function() {
            function t() {
                this.width = 100, this.height = 100, this.rMin = .5, this.rMax = 10, this.density = .1, this._seed = null, this.debug = !1
            }
            return t.prototype._checkInCircle = function(t, e, o, i, n) {
                return Math.sqrt((t - o) * (t - o) + (e - i) * (e - i)) >= o
            }, t.prototype._debugPut = function(t) {
                for (var e = "\u7ed3\u679c:\n", o = 0; o < t.length; o++) {
                    for (var i = 0; i < t[o].length; i++) e = t[o][i].isPlanted ? e.concat("\u25a0") : e.concat("\u25a1");
                    e = e.concat("\n")
                }
                cc.log(e)
            }, t.prototype._fill = function(t) {
                void 0 === t && (t = !1);
                var e = Math.random,
                    o = [],
                    i = this.width,
                    n = this.height,
                    a = this.density,
                    r = this.rMax,
                    s = this.rMin,
                    c = Math.floor(i * n * a),
                    l = Math.floor(r),
                    h = [];
                (l > i || l > n) && (l = Math.min(i, n, l));
                for (var p = 0; p < i; p++) o[p] = new Array(n);
                for (p = 0; p < i; p++)
                    for (var d = 0; d < n; d++) {
                        var u = !1;
                        !0 === t && (u = this._checkInCircle(p, d, i / 2, n / 2, i / 2)), o[p][d] = {
                            radius: 0,
                            isPlanted: u
                        }
                    }
                for (p = 0; p < c; p++) {
                    var f = Math.floor(e() * i),
                        _ = Math.floor(e() * n);
                    if (1 != o[f][_].isPlanted) {
                        var y = l * e();
                        y = Math.max(s, y), o[f][_].radius = y, o[f][_].isPlanted = !0;
                        for (var m = Math.max(f - Math.ceil(y) - l, 0), g = Math.max(_ - Math.ceil(y) - l, 0), v = Math.min(f + Math.ceil(y) + l, i - 1), b = Math.min(_ + Math.ceil(y) + l, n - 1), T = m; T <= v; T++)
                            for (var C = g; C <= b; C++) {
                                if ((f != T || _ != C) && 1 == o[T][C].isPlanted)(f - T) * (f - T) + (_ - C) * (_ - C) < (o[T][C].radius + y) * (o[T][C].radius + y) && (o[f][_].radius = 0, o[f][_].isPlanted = !0)
                            }
                        1 == o[f][_].isPlanted && h.push({
                            x: f,
                            y: _,
                            r: 2 * o[f][_].radius
                        })
                    }
                }
                return this.debug && this._debugPut(o), h
            }, t.prototype.setSeed = function(t) {
                this._seed = t
            }, t.prototype.getSeed = function() {}, t.prototype.setGridSize = function(t, e) {
                this.width = t, this.height = e || t
            }, t.prototype.setPutCircle = function(t, e) {
                this.rMin = t, this.rMax = e
            }, t.prototype.fillRect = function(t, e, o) {
                return null != e && (this.rMin = e), null != o && (this.rMax = o), this.density = t, this._fill(!1)
            }, t.prototype.fillCircle = function(t, e, o) {
                return null != e && (this.rMin = e), null != o && (this.rMax = o), this.density = t, this._fill(!0)
            }, t
        }();
        o.UnequalCirclePacking = i, cc._RF.pop()
    }, {}],
    VMBase: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2f6f36IvUdPO7xynnVTPgzb", "VMBase"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./ViewModel"),
            n = cc._decorator,
            a = n.ccclass,
            r = (n.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.watchPath = "", e.watchPathArr = [], e.templateMode = !1, e.templateValueArr = [], e.VM = i.VM, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    var t = this;
                    for (var e = this.watchPath.split("."), o = 1; o < e.length; o++) {
                        if ("*" == e[o]) {
                            (r = this.node.getParent().children.findIndex(function(e) {
                                return e === t.node
                            })) <= 0 && (r = 0), e[o] = r.toString();
                            break
                        }
                    }
                    this.watchPath = e.join(".");
                    var i = this.watchPathArr;
                    if (i.length >= 1)
                        for (o = 0; o < i.length; o++) {
                            for (var n = i[o].split("."), a = 1; a < n.length; a++) {
                                if ("*" == n[a]) {
                                    var r;
                                    (r = this.node.getParent().children.findIndex(function(e) {
                                        return e === t.node
                                    })) <= 0 && (r = 0), n[a] = r.toString();
                                    break
                                }
                            }
                            this.watchPathArr[o] = n.join(".")
                        }
                    "" == this.watchPath && "" == this.watchPathArr.join("") && cc.log("\u53ef\u80fd\u672a\u8bbe\u7f6e\u8def\u5f84\u7684\u8282\u70b9:", this.node.getParent().name + "." + this.node.name)
                }, e.prototype.onEnable = function() {
                    this.templateMode ? this.setMultPathEvent(!0) : "" != this.watchPath && this.VM.bindPath(this.watchPath, this.onValueChanged, this), this.onValueInit()
                }, e.prototype.onDisable = function() {
                    this.templateMode ? this.setMultPathEvent(!1) : "" != this.watchPath && this.VM.unbindPath(this.watchPath, this.onValueChanged, this)
                }, e.prototype.setMultPathEvent = function(t) {
                    void 0 === t && (t = !0);
                    for (var e = this.watchPathArr, o = 0; o < e.length; o++) {
                        var i = e[o];
                        t ? this.VM.bindPath(i, this.onValueChanged, this) : this.VM.unbindPath(i, this.onValueChanged, this)
                    }
                }, e.prototype.onValueInit = function() {}, e.prototype.onValueChanged = function(t, e, o) {}, e = __decorate([a], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {
        "./ViewModel": "ViewModel"
    }],
    VMButtonGroup: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "feffa4lRRJAIKNEO5nPP9cp", "VMButtonGroup"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = t("./VMModify"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu;
        (function(t) {
            t[t.CHILDREN_INDEX = 0] = "CHILDREN_INDEX", t[t.CHILDREN_NAME = 1] = "CHILDREN_NAME"
        })(i || (i = {}));
        var l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.touchEvents = [], e.paramType = i.CHILDREN_INDEX, e
            }
            return __extends(e, t), e.prototype.onLoad = function() {
                var e = this;
                t.prototype.onLoad.call(this), this.node.children.forEach(function(t) {
                    if (t.getComponent(cc.Button)) {
                        var o = t.getComponent(cc.Button);
                        e.touchEvents.forEach(function(n, a) {
                            var r = new cc.Component.EventHandler;
                            r.component = n.component, r.handler = n.handler, r.target = n.target, e.paramType === i.CHILDREN_INDEX ? r.customEventData = a.toString() : r.customEventData = t.name, o.clickEvents.push(r)
                        }), cc.log(o)
                    }
                })
            }, e.prototype.start = function() {}, __decorate([s([cc.Component.EventHandler])], e.prototype, "touchEvents", void 0), e = __decorate([r, c("ModelViewer/VM-ButtonGroup(\u6309\u94ae\u7ec4)")], e)
        }(n.default);
        o.default = l, cc._RF.pop()
    }, {
        "./VMModify": "VMModify"
    }],
    VMCompsEdit: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2359eFXKF5HFYS74K7Y17/U", "VMCompsEdit"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.executeInEditMode,
            c = n.menu;
        (function(t) {
            t[t.SEARCH_COMPONENT = 0] = "SEARCH_COMPONENT", t[t.REPLACE_WATCH_PATH = 1] = "REPLACE_WATCH_PATH", t[t.DELETE_COMPONENT = 2] = "DELETE_COMPONENT"
        })(i || (i = {}));
        var l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.findList = ["VMBase", "VMParent"], e.allowDelete = !1, e
            }
            return __extends(e, t), Object.defineProperty(e.prototype, "findTrigger", {
                get: function() {
                    return !1
                },
                set: function(t) {
                    this.setComponents(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "enableTrigger", {
                get: function() {
                    return !1
                },
                set: function(t) {
                    this.setComponents(1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "disableTrigger", {
                get: function() {
                    return !1
                },
                set: function(t) {
                    this.setComponents(2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "deleteTrigger", {
                get: function() {
                    return !1
                },
                set: function(t) {
                    this.setComponents(3)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.onLoad = function() {
                var t = this.getNodePath(this.node);
                console.error("you forget delete MVEditFinder,[path]", t)
            }, e.prototype.setComponents = function(t) {
                var e = this,
                    o = this.findList,
                    i = "\u641c\u7d22\u5230\u5f53\u524d\u8282\u70b9\u4e0b\u9762\u7684\u7ec4\u4ef6";
                switch (t) {
                    case 0:
                        i = "\u641c\u7d22\u5230\u5f53\u524d\u8282\u70b9\u4e0b\u9762\u7684\u7ec4\u4ef6";
                        break;
                    case 1:
                        i = "\u6fc0\u6d3b\u4ee5\u4e0b\u8282\u70b9\u7684\u7ec4\u4ef6";
                        break;
                    case 2:
                        i = "\u5173\u95ed\u4ee5\u4e0b\u8282\u70b9\u7684\u7ec4\u4ef6";
                        break;
                    case 3:
                        i = "\u5220\u9664\u4ee5\u4e0b\u8282\u70b9\u7684\u7ec4\u4ef6";
                        break;
                    case 4:
                        i = "\u66ff\u6362\u4ee5\u4e0b\u8282\u70b9\u7684\u7ec4\u4ef6"
                }
                cc.log(i), cc.log("______________________"), o.forEach(function(o) {
                    e.searchComponent(o, t)
                }), cc.log("______________________")
            }, e.prototype.searchComponent = function(t, e) {
                var o = this;
                void 0 === e && (e = 0);
                var i = this.node.getComponentsInChildren(t);
                null == i || i.length < 1 || (cc.log("[" + t + "]:"), i.forEach(function(t) {
                    var i = t.watchPath ? ":[Path:" + t.watchPath + "]" : "";
                    switch (cc.log(o.getNodePath(t.node) + i), e) {
                        case 0:
                            break;
                        case 1:
                            t.enabled = !0;
                            break;
                        case 2:
                            t.enabled = !1;
                            break;
                        case 3:
                            t.node.removeComponent(t)
                    }
                }))
            }, e.prototype.getNodePath = function(t) {
                for (var e = t, o = []; e;) {
                    var i = e.getParent();
                    if (!i) break;
                    o.push(e.name), e = i
                }
                return o.reverse().join("/")
            }, e.prototype.onEnable = function() {}, e.prototype.start = function() {}, __decorate([r({
                type: [cc.String]
            })], e.prototype, "findList", void 0), __decorate([r({
                tooltip: "\u52fe\u9009\u540e,\u4f1a\u81ea\u52a8\u67e5\u627e find list \u4e2d\u586b\u5199\u7684\u7ec4\u4ef6"
            })], e.prototype, "findTrigger", null), __decorate([r({
                tooltip: "\u52fe\u9009\u540e,\u4f1a\u6279\u91cf\u6fc0\u6d3b find list \u4e2d\u586b\u5199\u7684\u7ec4\u4ef6"
            })], e.prototype, "enableTrigger", null), __decorate([r({
                tooltip: "\u52fe\u9009\u540e,\u4f1a\u6279\u91cf\u5173\u95ed find list \u4e2d\u586b\u5199\u7684\u7ec4\u4ef6"
            })], e.prototype, "disableTrigger", null), __decorate([r({
                tooltip: "\u5141\u8bb8\u5220\u9664\u8282\u70b9\u7684\u7ec4\u4ef6,\u786e\u5b9a\u9700\u8981\u79fb\u9664\u8bf7\u52fe\u9009,\u9632\u6b62\u8bef\u64cd\u4f5c"
            })], e.prototype, "allowDelete", void 0), __decorate([r({
                tooltip: "\u52fe\u9009\u540e,\u4f1a\u6279\u91cf\u5220\u9664 find list \u4e2d\u586b\u5199\u7684\u7ec4\u4ef6",
                displayName: "[ X DELETE X ]",
                visible: function() {
                    return this.allowDelete
                }
            })], e.prototype, "deleteTrigger", null), e = __decorate([a, s, c("ModelViewer/Edit-Comps (\u5feb\u901f\u7ec4\u4ef6\u64cd\u4f5c)")], e)
        }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    VMCustom: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ce662fwsSVPLKpmHx+KocFu", "VMCustom"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./VMBase"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = n.executeInEditMode,
            c = n.menu,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.controller = !1, e.watchPath = "", e.componentName = "", e.componentProperty = "", e.refreshRate = .1, e._timer = 0, e._watchComponent = null, e._canWatchComponent = !1, e._oldValue = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.checkEditorComponent(), this._watchComponent = this.node.getComponent(this.componentName), this.checkComponentState()
                }, e.prototype.onRestore = function() {
                    this.checkEditorComponent()
                }, e.prototype.start = function() {
                    this.onValueInit()
                }, e.prototype.checkEditorComponent = function() {}, e.prototype.checkComponentState = function() {
                    this._canWatchComponent = !1, this._watchComponent ? this.componentProperty ? this.componentProperty in this._watchComponent != !1 ? this._canWatchComponent = !0 : console.error("\u9700\u8981\u76d1\u542c\u7684\u7ec4\u4ef6\u7684\u5c5e\u6027\u4e0d\u5b58\u5728") : console.error("\u672a\u8bbe\u7f6e\u9700\u8981\u76d1\u542c\u7684\u7ec4\u4ef6 \u7684\u5c5e\u6027") : console.error("\u672a\u8bbe\u7f6e\u9700\u8981\u76d1\u542c\u7684\u7ec4\u4ef6")
                }, e.prototype.getComponentValue = function() {
                    return this._watchComponent[this.componentProperty]
                }, e.prototype.setComponentValue = function(t) {
                    null !== t && void 0 !== t && ("cc.Toggle" == this.componentName ? (1 == t && this.node.getComponent(cc.Toggle).check(), 0 == t && this.node.getComponent(cc.Toggle).uncheck()) : this._watchComponent[this.componentProperty] = t)
                }, e.prototype.onValueInit = function() {
                    this.setComponentValue(this.VM.getValue(this.watchPath))
                }, e.prototype.onValueController = function(t, e) {
                    this.VM.setValue(this.watchPath, t)
                }, e.prototype.onValueChanged = function(t, e, o) {
                    this.setComponentValue(t)
                }, e.prototype.update = function(t) {
                    if (this.controller && this._canWatchComponent && !1 !== this._watchComponent.enabled && (this._timer += t, !(this._timer < this.refreshRate))) {
                        this._timer = 0;
                        var e = this._oldValue,
                            o = this.getComponentValue();
                        this._oldValue !== o && (this._oldValue = this.getComponentValue(), this.onValueController(o, e))
                    }
                }, __decorate([r({
                    tooltip: "\u6fc0\u6d3bcontroller,\u4ee5\u5f00\u542f\u53cc\u5411\u7ed1\u5b9a\uff0c\u5426\u5219\u53ea\u80fd\u63a5\u6536\u6d88\u606f"
                })], e.prototype, "controller", void 0), __decorate([r], e.prototype, "watchPath", void 0), __decorate([r({
                    tooltip: "\u7ed1\u5b9a\u7ec4\u4ef6\u7684\u540d\u5b57"
                })], e.prototype, "componentName", void 0), __decorate([r({
                    tooltip: "\u7ec4\u4ef6\u4e0a\u9700\u8981\u76d1\u542c\u7684\u5c5e\u6027"
                })], e.prototype, "componentProperty", void 0), __decorate([r({
                    tooltip: "\u5237\u65b0\u95f4\u9694\u9891\u7387(\u53ea\u5f71\u54cd\u810f\u68c0\u67e5\u7684\u9891\u7387)",
                    step: .01,
                    range: [0, 1],
                    visible: function() {
                        return !0 === this.controller
                    }
                })], e.prototype, "refreshRate", void 0), e = __decorate([a, s, c("ModelViewer/VM-Custom (\u81ea\u5b9a\u4e49VM)")], e)
            }(i.default);
        o.default = l, cc._RF.pop()
    }, {
        "./VMBase": "VMBase"
    }],
    VMEvent: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a9ce7kf8XZJeLPlT2iWn2zD", "VMEvent"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = t("./VMBase"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.executeInEditMode,
            l = a.menu;
        (function(t) {
            t[t.none = 0] = "none", t[t["=="] = 1] = "==", t[t["!="] = 2] = "!=", t[t[">"] = 3] = ">", t[t[">="] = 4] = ">=", t[t["<"] = 5] = "<", t[t["<="] = 6] = "<="
        })(i || (i = {}));
        var h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.templateMode = !1, e.watchPath = "", e.triggerOnce = !1, e.watchPathArr = [], e.filterMode = i.none, e.compareValue = "", e.changeEvents = [], e
            }
            return __extends(e, t), e.prototype.onValueInit = function() {}, e.prototype.onValueChanged = function(t, e, o) {
                this.conditionCheck(t, this.compareValue) && (Array.isArray(this.changeEvents) && this.changeEvents.forEach(function(i) {
                    i.emit([t, e, o])
                }), !0 === this.triggerOnce && (this.enabled = !1))
            }, e.prototype.conditionCheck = function(t, e) {
                var o = i;
                switch (this.filterMode) {
                    case o.none:
                        return !0;
                    case o["=="]:
                        if (t == e) return !0;
                        break;
                    case o["!="]:
                        if (t != e) return !0;
                        break;
                    case o["<"]:
                        if (t < e) return !0;
                        break;
                    case o[">"]:
                        if (t > e) return !0;
                        break;
                    case o[">="]:
                        if (t >= e) return !0;
                        break;
                    case o["<"]:
                        if (t < e) return !0;
                        break;
                    case o["<="]:
                        if (t <= e) return !0
                }
                return !1
            }, __decorate([s({
                tooltip: "\u4f7f\u7528\u6a21\u677f\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u8def\u5f84\u76d1\u542c"
            })], e.prototype, "templateMode", void 0), __decorate([s({
                tooltip: "\u76d1\u542c\u83b7\u53d6\u503c\u7684\u8def\u5f84",
                visible: function() {
                    return !1 === this.templateMode
                }
            })], e.prototype, "watchPath", void 0), __decorate([s({
                tooltip: "\u89e6\u53d1\u4e00\u6b21\u540e\u4f1a\u81ea\u52a8\u5173\u95ed\u8be5\u4e8b\u4ef6"
            })], e.prototype, "triggerOnce", void 0), __decorate([s({
                tooltip: "\u76d1\u542c\u83b7\u53d6\u503c\u7684\u591a\u6761\u8def\u5f84,\u8fd9\u4e9b\u503c\u7684\u6539\u53d8\u90fd\u4f1a\u901a\u8fc7\u8fd9\u4e2a\u51fd\u6570\u56de\u8c03,\u8bf7\u4f7f\u7528 pathArr \u533a\u5206\u83b7\u53d6\u7684\u503c ",
                type: [cc.String],
                visible: function() {
                    return !0 === this.templateMode
                }
            })], e.prototype, "watchPathArr", void 0), __decorate([s({
                tooltip: "\u8fc7\u6ee4\u6a21\u5f0f\uff0c\u4f1a\u6839\u636e\u6761\u4ef6\u8fc7\u6ee4\u6389\u65f6\u95f4\u7684\u89e6\u53d1",
                type: cc.Enum(i)
            })], e.prototype, "filterMode", void 0), __decorate([s({
                visible: function() {
                    return this.filterMode !== i.none
                }
            })], e.prototype, "compareValue", void 0), __decorate([s([cc.Component.EventHandler])], e.prototype, "changeEvents", void 0), e = __decorate([r, c, l("ModelViewer/VM-EventCall(\u8c03\u7528\u51fd\u6570)")], e)
        }(n.default);
        o.default = h, cc._RF.pop()
    }, {
        "./VMBase": "VMBase"
    }],
    VMLabel: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "545c05XsG9GDJispEGWKvYv", "VMLabel"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./VMBase"),
            n = t("./StringFormat"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = a.executeInEditMode,
            h = {
                CC_LABEL: "cc.Label",
                CC_RICH_TEXT: "cc.RichText",
                CC_EDIT_BOX: "cc.EditBox"
            },
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.watchPath = "", e.labelType = h.CC_LABEL, e.templateMode = !1, e.watchPathArr = [], e.templateValueArr = [], e.templateFormatArr = [], e.originText = null, e
                }
                return __extends(e, t), e.prototype.onRestore = function() {
                    this.checkLabel()
                }, e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.checkLabel(), this.templateMode && (this.originText = this.getLabelValue(), this.parseTemplate()), this.onValueInit()
                }, e.prototype.parseTemplate = function() {
                    var t = /\{\{(.+?)\}\}/,
                        e = this.originText.match(/\{\{(.+?)\}\}/g);
                    if (null != e)
                        for (var o = 0; o < e.length; o++) {
                            var i = e[o].match(t)[1].split(":")[1] || "";
                            this.templateFormatArr[o] = i
                        }
                }, e.prototype.getReplaceText = function() {
                    var t = /\{\{(.+?)\}\}/,
                        e = this.originText.match(/\{\{(.+?)\}\}/g);
                    if (null == e) return "";
                    for (var o = this.originText, i = 0; i < e.length; i++) {
                        var n, a = e[i],
                            r = a.match(t),
                            s = parseInt(r[1] || "0") || 0,
                            c = this.templateFormatArr[i];
                        n = this.templateValueArr[s], o = o.replace(a, this.getValueFromFormat(n, c))
                    }
                    return o
                }, e.prototype.getValueFromFormat = function(t, e) {
                    return n.StringFormatFunction.deal(t, e)
                }, e.prototype.onValueInit = function() {
                    if (!1 === this.templateMode) this.setLabelValue(this.VM.getValue(this.watchPath));
                    else {
                        for (var t = this.watchPathArr.length, e = 0; e < t; e++) this.templateValueArr[e] = this.VM.getValue(this.watchPathArr[e], "?");
                        this.setLabelValue(this.getReplaceText())
                    }
                }, e.prototype.onValueChanged = function(t, e, o) {
                    if (!1 === this.templateMode) this.setLabelValue(t);
                    else {
                        var i = o.join("."),
                            n = this.watchPathArr.findIndex(function(t) {
                                return t === i
                            });
                        n >= 0 && (this.templateValueArr[n] = t, this.setLabelValue(this.getReplaceText()))
                    }
                }, e.prototype.setLabelValue = function(t) {
                    this.getComponent(this.labelType).string = t + ""
                }, e.prototype.getLabelValue = function() {
                    return this.getComponent(this.labelType).string
                }, e.prototype.checkLabel = function() {
                    for (var t = ["cc.Label", "cc.RichText", "cc.EditBox"], e = 0; e < t.length; e++) {
                        var o = t[e];
                        if (this.node.getComponent(o)) return this.labelType = o, !0
                    }
                    return cc.error("\u6ca1\u6709\u6302\u8f7d\u4efb\u4f55label\u7ec4\u4ef6"), !1
                }, __decorate([s({
                    visible: function() {
                        return !1 === this.templateMode
                    }
                })], e.prototype, "watchPath", void 0), __decorate([s({
                    readonly: !0
                })], e.prototype, "labelType", void 0), __decorate([s({
                    tooltip: "\u662f\u5426\u542f\u7528\u6a21\u677f\u4ee3\u7801,\u53ea\u80fd\u5728\u8fd0\u884c\u65f6\u4e4b\u524d\u8bbe\u7f6e,\n\u5c06\u4f1a\u52a8\u6001\u89e3\u6790\u6a21\u677f\u8bed\u6cd5 {{0}},\u5e76\u4e14\u81ea\u52a8\u8bbe\u7f6e\u76d1\u542c\u7684\u8def\u5f84"
                })], e.prototype, "templateMode", void 0), __decorate([s({
                    type: [cc.String],
                    visible: function() {
                        return !0 === this.templateMode
                    }
                })], e.prototype, "watchPathArr", void 0), e = __decorate([r, l, c("ModelViewer/VM-Label(\u6587\u672cVM)")], e)
            }(i.default);
        o.default = p, cc._RF.pop()
    }, {
        "./StringFormat": "StringFormat",
        "./VMBase": "VMBase"
    }],
    VMModify: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7d2a4voaOJJGJZRWFPG6Bk7", "VMModify"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n = t("./VMBase"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu;
        (function(t) {
            t[t.MIN = 0] = "MIN", t[t.MAX = 1] = "MAX", t[t.MIN_MAX = 2] = "MIN_MAX"
        })(i || (i = {}));
        var l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.watchPath = "", e.valueClamp = !1, e.valueClampMode = i.MIN_MAX, e.valueMin = 0, e.valueMax = 1, e
            }
            return __extends(e, t), e.prototype.start = function() {}, e.prototype.clampValue = function(t) {
                var e = this.valueMin,
                    o = this.valueMax;
                if (0 == this.valueClamp) return t;
                switch (this.valueClampMode) {
                    case i.MIN_MAX:
                        t > o && (t = o), t < e && (t = e);
                        break;
                    case i.MIN:
                        t < e && (t = e);
                        break;
                    case i.MAX:
                        t > o && (t = o)
                }
                return t
            }, e.prototype.vAddInt = function(t, e) {
                this.vAdd(t, e, !0)
            }, e.prototype.vSubInt = function(t, e) {
                this.vSub(t, e, !0)
            }, e.prototype.vMulInt = function(t, e) {
                this.vMul(t, e, !0)
            }, e.prototype.vDivInt = function(t, e) {
                this.vDiv(t, e, !0)
            }, e.prototype.vAdd = function(t, e, o) {
                void 0 === o && (o = !1);
                var i = parseFloat(e),
                    n = this.VM.getValue(this.watchPath, 0) + i;
                o && (n = Math.round(n)), this.VM.setValue(this.watchPath, this.clampValue(n))
            }, e.prototype.vSub = function(t, e, o) {
                void 0 === o && (o = !1);
                var i = parseFloat(e),
                    n = this.VM.getValue(this.watchPath, 0) - i;
                o && (n = Math.round(n)), this.VM.setValue(this.watchPath, this.clampValue(n))
            }, e.prototype.vMul = function(t, e, o) {
                void 0 === o && (o = !1);
                var i = parseFloat(e),
                    n = this.VM.getValue(this.watchPath, 0) * i;
                o && (n = Math.round(n)), this.VM.setValue(this.watchPath, this.clampValue(n))
            }, e.prototype.vDiv = function(t, e, o) {
                void 0 === o && (o = !1);
                var i = parseFloat(e),
                    n = this.VM.getValue(this.watchPath, 0) / i;
                o && (n = Math.round(n)), this.VM.setValue(this.watchPath, this.clampValue(n))
            }, e.prototype.vString = function(t, e) {
                var o = e;
                this.VM.setValue(this.watchPath, o)
            }, e.prototype.vNumberInt = function(t, e) {
                this.vNumber(t, e, !0)
            }, e.prototype.vNumber = function(t, e, o) {
                void 0 === o && (o = !1);
                var i = parseFloat(e);
                o && (i = Math.round(i)), this.VM.setValue(this.watchPath, this.clampValue(i))
            }, __decorate([s], e.prototype, "watchPath", void 0), __decorate([s()], e.prototype, "valueClamp", void 0), __decorate([s({
                type: cc.Enum(i),
                visible: function() {
                    return !0 === this.valueClamp
                }
            })], e.prototype, "valueClampMode", void 0), __decorate([s({
                visible: function() {
                    return !0 === this.valueClamp && this.valueClampMode !== i.MAX
                }
            })], e.prototype, "valueMin", void 0), __decorate([s({
                visible: function() {
                    return !0 === this.valueClamp && this.valueClampMode !== i.MIN
                }
            })], e.prototype, "valueMax", void 0), e = __decorate([r, c("ModelViewer/VM-Modify(\u4fee\u6539Model)")], e)
        }(n.default);
        o.default = l, cc._RF.pop()
    }, {
        "./VMBase": "VMBase"
    }],
    VMParent: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "15ccciO+ZRH476sPKD/LvB7", "VMParent"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./ViewModel"),
            n = cc._decorator,
            a = n.ccclass,
            r = (n.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tag = "_temp", e.data = {}, e.VM = i.VM, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    if (null != this.data) {
                        this.tag = "_temp<" + this.node.uuid.replace(".", "") + ">", i.VM.add(this.data, this.tag);
                        for (var t = this.getVMComponents(), e = 0; e < t.length; e++) {
                            var o = t[e];
                            this.replaceVMPath(o, this.tag)
                        }
                        this.onBind()
                    }
                }, e.prototype.onBind = function() {}, e.prototype.replaceVMPath = function(t, e) {
                    var o = t.watchPath;
                    if (1 == t.templateMode) {
                        var i = t.watchPathArr;
                        if (i)
                            for (var n = 0; n < i.length; n++) {
                                var a = i[n];
                                i[n] = a.replace("*", e)
                            }
                    } else "*" === o.split(".")[0] && (t.watchPath = o.replace("*", e))
                }, e.prototype.getVMComponents = function() {
                    var t = this,
                        e = this.node.getComponentsInChildren("VMBase"),
                        o = [];
                    return this.node.getComponentsInChildren("VMParent").filter(function(e) {
                        return e.uuid !== t.uuid
                    }).forEach(function(t) {
                        o = o.concat(t.getComponentsInChildren("VMBase"))
                    }), e = e.filter(function(t) {
                        return o.indexOf(t) < 0
                    })
                }, e.prototype.onDestroy = function() {
                    i.VM.remove(this.tag), this.data = null
                }, e = __decorate([a], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {
        "./ViewModel": "ViewModel"
    }],
    VMProgress: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2a50eqI7JZNV5Sh0y/Qd9C6", "VMProgress"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./VMCustom"),
            n = t("./StringFormat"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = a.menu,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.watchPath = "", e.watchPathArr = ["[min]", "[max]"], e.templateMode = !0, e.stringFormat = "", e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    (this.watchPathArr.length < 2 || "[min]" == this.watchPathArr[0] || "[max]" == this.watchPathArr[1]) && console.error("VMProgress must have two values!"), t.prototype.onLoad.call(this)
                }, e.prototype.start = function() {
                    this.onValueInit()
                }, e.prototype.onValueInit = function() {
                    for (var t = this.watchPathArr.length, e = 0; e < t; e++) this.templateValueArr[e] = this.VM.getValue(this.watchPathArr[e]);
                    var o = this.templateValueArr[0] / this.templateValueArr[1];
                    this.setComponentValue(o)
                }, e.prototype.setComponentValue = function(e) {
                    if ("" !== this.stringFormat) {
                        var o = n.StringFormatFunction.deal(e, this.stringFormat);
                        t.prototype.setComponentValue.call(this, o)
                    } else t.prototype.setComponentValue.call(this, e)
                }, e.prototype.onValueController = function(t, e) {
                    var o = Math.round(t * this.templateValueArr[1]);
                    Number.isNaN(o) && (o = 0), this.VM.setValue(this.watchPathArr[0], o)
                }, e.prototype.onValueChanged = function(t, e, o) {
                    if (!1 !== this.templateMode) {
                        var i = o.join("."),
                            n = this.watchPathArr.findIndex(function(t) {
                                return t === i
                            });
                        n >= 0 && (this.templateValueArr[n] = t);
                        var a = this.templateValueArr[0] / this.templateValueArr[1];
                        a > 1 && (a = 1), (a < 0 || Number.isNaN(a)) && (a = 0), this.setComponentValue(a)
                    }
                }, __decorate([s({
                    visible: !1,
                    override: !0
                })], e.prototype, "watchPath", void 0), __decorate([s({
                    type: [cc.String],
                    tooltip: "\u7b2c\u4e00\u4e2a\u503c\u662fmin \u503c\uff0c\u7b2c\u4e8c\u4e2a\u503c \u662f max \u503c\uff0c\u4f1a\u8ba1\u7b97\u51fa\u4e24\u8005\u7684\u6bd4\u4f8b"
                })], e.prototype, "watchPathArr", void 0), __decorate([s({
                    visible: function() {
                        return "string" === this.componentProperty
                    },
                    tooltip: "\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\uff0c\u548c VMLabel \u7684\u5b57\u6bb5\u4e00\u6837\uff0c\u9700\u8981\u586b\u5165\u5bf9\u5e94\u7684\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"
                })], e.prototype, "stringFormat", void 0), e = __decorate([r, c("ModelViewer/VM-Progress (VM-\u8fdb\u5ea6\u6761)")], e)
            }(i.default);
        o.default = l, cc._RF.pop()
    }, {
        "./StringFormat": "StringFormat",
        "./VMCustom": "VMCustom"
    }],
    VMState: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "47052uw/Y5O1LXaLObj4ARx", "VMState"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i, n, a, r = t("./ViewModel"),
            s = t("./VMBase"),
            c = cc._decorator,
            l = c.ccclass,
            h = c.property,
            p = c.menu;
        (function(t) {
            t[t["=="] = 0] = "==", t[t["!="] = 1] = "!=", t[t[">"] = 2] = ">", t[t[">="] = 3] = ">=", t[t["<"] = 4] = "<", t[t["<="] = 5] = "<=", t[t.range = 6] = "range"
        })(i || (i = {})),
        function(t) {
            t[t.NODE_ACTIVE = 0] = "NODE_ACTIVE", t[t.NODE_VISIBLE = 1] = "NODE_VISIBLE", t[t.NODE_OPACITY = 2] = "NODE_OPACITY", t[t.NODE_COLOR = 3] = "NODE_COLOR", t[t.COMPONENT_CUSTOM = 4] = "COMPONENT_CUSTOM"
        }(n || (n = {})),
        function(t) {
            t[t.NODE_INDEX = 0] = "NODE_INDEX", t[t.NODE_NAME = 1] = "NODE_NAME"
        }(a || (a = {}));
        var d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.watchPath = "", e.foreachChildMode = !1, e.condition = i["=="], e.foreachChildType = a.NODE_INDEX, e.valueA = 0, e.valueB = 0, e.valueAction = n.NODE_ACTIVE, e.valueActionOpacity = 0, e.valueActionColor = cc.color(155, 155, 155), e.valueComponentName = "", e.valueComponentProperty = "", e.valueComponentDefaultValue = "", e.valueComponentActionValue = "", e.watchNodes = [], e
            }
            return __extends(e, t), e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this), 0 == this.watchNodes.length && (this.valueAction !== n.NODE_ACTIVE && !1 === this.foreachChildMode && this.watchNodes.push(this.node), this.watchNodes = this.watchNodes.concat(this.node.children)), this.enabled && this.onValueInit()
            }, e.prototype.start = function() {}, e.prototype.onValueInit = function() {
                var t = r.VM.getValue(this.watchPath);
                this.checkNodeFromValue(t)
            }, e.prototype.onValueChanged = function(t, e, o) {
                this.checkNodeFromValue(t)
            }, e.prototype.checkNodeFromValue = function(t) {
                var e = this;
                if (this.foreachChildMode) this.watchNodes.forEach(function(o, i) {
                    var n = e.foreachChildType === a.NODE_INDEX ? i : o.name,
                        r = e.conditionCheck(t, n);
                    e.setNodeState(o, r)
                });
                else {
                    var o = this.conditionCheck(t, this.valueA, this.valueB);
                    this.setNodesStates(o)
                }
            }, e.prototype.setNodesStates = function(t) {
                var e = this,
                    o = t;
                this.watchNodes.forEach(function(t) {
                    e.setNodeState(t, o)
                })
            }, e.prototype.setNodeState = function(t, e) {
                var o = this.valueAction,
                    i = e,
                    a = n;
                switch (o) {
                    case a.NODE_ACTIVE:
                        t.active = !!i;
                        break;
                    case a.NODE_VISIBLE:
                        t.opacity = i ? 255 : 0;
                        break;
                    case a.NODE_COLOR:
                        t.color = i ? this.valueActionColor : cc.color(255, 255, 255);
                        break;
                    case a.NODE_OPACITY:
                        t.opacity = i ? this.valueActionOpacity : 255;
                        break;
                    case a.COMPONENT_CUSTOM:
                        var r = t.getComponent(this.valueComponentName);
                        if (null == r) return;
                        this.valueComponentProperty in r && (r[this.valueComponentProperty] = i ? this.valueComponentActionValue : this.valueComponentDefaultValue)
                }
            }, e.prototype.conditionCheck = function(t, e, o) {
                var n = i;
                switch (this.condition) {
                    case n["=="]:
                        if (t == e) return !0;
                        break;
                    case n["!="]:
                        if (t != e) return !0;
                        break;
                    case n["<"]:
                        if (t < e) return !0;
                        break;
                    case n[">"]:
                        if (t > e) return !0;
                        break;
                    case n[">="]:
                        if (t >= e) return !0;
                        break;
                    case n["<"]:
                        if (t < e) return !0;
                        break;
                    case n["<="]:
                        if (t <= e) return !0;
                        break;
                    case n.range:
                        if (t >= e && t <= o) return !0
                }
                return !1
            }, __decorate([h], e.prototype, "watchPath", void 0), __decorate([h({
                tooltip: "\u904d\u5386\u5b50\u8282\u70b9,\u6839\u636e\u5b50\u8282\u70b9\u7684\u540d\u5b57\u6216\u540d\u5b57\u8f6c\u6362\u4e3a\u503c\uff0c\u5224\u65ad\u503c\u6ee1\u8db3\u6761\u4ef6 \u6765\u6fc0\u6d3b"
            })], e.prototype, "foreachChildMode", void 0), __decorate([h({
                type: cc.Enum(i)
            })], e.prototype, "condition", void 0), __decorate([h({
                type: cc.Enum(a),
                tooltip: "\u904d\u5386\u5b50\u8282\u70b9,\u6839\u636e\u5b50\u8282\u70b9\u7684\u540d\u5b57\u8f6c\u6362\u4e3a\u503c\uff0c\u5224\u65ad\u503c\u6ee1\u8db3\u6761\u4ef6 \u6765\u6fc0\u6d3b",
                visible: function() {
                    return !0 === this.foreachChildMode
                }
            })], e.prototype, "foreachChildType", void 0), __decorate([h({
                displayName: "Value: a",
                visible: function() {
                    return !1 === this.foreachChildMode
                }
            })], e.prototype, "valueA", void 0), __decorate([h({
                displayName: "Value: b",
                visible: function() {
                    return !1 === this.foreachChildMode && this.condition === i.range
                }
            })], e.prototype, "valueB", void 0), __decorate([h({
                type: cc.Enum(n),
                tooltip: "\u4e00\u65e6\u6ee1\u8db3\u6761\u4ef6\u5c31\u5bf9\u8282\u70b9\u6267\u884c\u64cd\u4f5c"
            })], e.prototype, "valueAction", void 0), __decorate([h({
                visible: function() {
                    return this.valueAction === n.NODE_OPACITY
                },
                range: [0, 255],
                type: cc.Integer,
                displayName: "Action Opacity"
            })], e.prototype, "valueActionOpacity", void 0), __decorate([h({
                visible: function() {
                    return this.valueAction === n.NODE_COLOR
                },
                displayName: "Action Color"
            })], e.prototype, "valueActionColor", void 0), __decorate([h({
                visible: function() {
                    return this.valueAction === n.COMPONENT_CUSTOM
                },
                displayName: "Component Name"
            })], e.prototype, "valueComponentName", void 0), __decorate([h({
                visible: function() {
                    return this.valueAction === n.COMPONENT_CUSTOM
                },
                displayName: "Component Property"
            })], e.prototype, "valueComponentProperty", void 0), __decorate([h({
                visible: function() {
                    return this.valueAction === n.COMPONENT_CUSTOM
                },
                displayName: "Default Value"
            })], e.prototype, "valueComponentDefaultValue", void 0), __decorate([h({
                visible: function() {
                    return this.valueAction === n.COMPONENT_CUSTOM
                },
                displayName: "Action Value"
            })], e.prototype, "valueComponentActionValue", void 0), __decorate([h({
                type: [cc.Node],
                tooltip: "\u9700\u8981\u6267\u884c\u6761\u4ef6\u7684\u8282\u70b9\uff0c\u5982\u679c\u4e0d\u586b\u5199\u5219\u9ed8\u8ba4\u4f1a\u6267\u884c\u672c\u8282\u70b9\u4ee5\u53ca\u672c\u8282\u70b9\u7684\u6240\u6709\u5b50\u8282\u70b9 \u7684\u72b6\u6001"
            })], e.prototype, "watchNodes", void 0), e = __decorate([l, p("ModelViewer/VM-State (VM\u72b6\u6001\u63a7\u5236)")], e)
        }(s.default);
        o.default = d, cc._RF.pop()
    }, {
        "./VMBase": "VMBase",
        "./ViewModel": "ViewModel"
    }],
    ViewModel: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "54f75k4X+RP0qaXOzrfZysL", "ViewModel"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./JsonOb"),
            n = "VC:";

        function a(t, e, o, i) {
            void 0 === i && (i = "");
            for (var n = e.split("."), a = 0; a < n.length; a++) {
                var r = n[a];
                if (r in t == !1) {
                    console.error("[" + r + "] not find in " + i + "." + e);
                    break
                }
                a == n.length - 1 ? t[r] = o : t = t[r]
            }
        }

        function r(t, e, o, i) {
            void 0 === i && (i = "");
            for (var n = e.split("."), a = 0; a < n.length; a++) {
                var r = n[a];
                if (r in t == !1) return console.error("[" + r + "] not find in " + i + "." + e), o;
                t = t[r]
            }
            return null !== t && void 0 !== t || (t = o), t
        }
        var s = function() {
                function t(t, e) {
                    this._tag = null, this.active = !0, this.emitToRootPath = !1, new i.JsonOb(t, this._callback.bind(this)), this.$data = t, this._tag = e
                }
                return t.prototype._callback = function(t, e, o) {
                    if (1 == this.active) {
                        var i = n + this._tag + "." + o.join(".");
                        if (cc.director.emit(i, t, e, [this._tag].concat(o)), this.emitToRootPath && cc.director.emit(n + this._tag, t, e, o), o.length >= 2)
                            for (var a = 0; a < o.length - 1; a++) o[a]
                    }
                }, t.prototype.setValue = function(t, e) {
                    a(this.$data, t, e, this._tag)
                }, t.prototype.getValue = function(t, e) {
                    return r(this.$data, t, e, this._tag)
                }, t
            }(),
            c = function() {
                function t() {
                    this._mvs = [], this.EMIT_HEAD = n, this.setObjValue = a, this.getObjValue = r
                }
                return t.prototype.add = function(t, e, o) {
                    void 0 === e && (e = "global"), void 0 === o && (o = !1);
                    var i = new s(t, e),
                        n = this._mvs.find(function(t) {
                            return t.tag === e
                        });
                    e.includes(".") ? console.error("cant write . in tag:", e) : n ? console.error("already set VM tag:" + e) : (i.emitToRootPath = o, this._mvs.push({
                        tag: e,
                        vm: i
                    }))
                }, t.prototype.remove = function(t) {
                    var e = this._mvs.findIndex(function(e) {
                        return e.tag === t
                    });
                    e >= 0 && this._mvs.splice(e, 1)
                }, t.prototype.get = function(t) {
                    var e = this._mvs.find(function(e) {
                        return e.tag === t
                    });
                    if (null != e) return e.vm;
                    console.error("cant find VM from:", t)
                }, t.prototype.addValue = function(t, e) {
                    var o = (t = t.trim()).split(".");
                    o.length < 2 && console.error("Cant find path:" + t);
                    var i = this.get(o[0]);
                    if (i) {
                        var n = o.slice(1).join(".");
                        i.setValue(n, i.getValue(n) + e)
                    } else console.error("Cant Set VM:" + o[0])
                }, t.prototype.getValue = function(t, e) {
                    var o = (t = t.trim()).split(".");
                    if (o.length < 2) console.error("Get Value Cant find path:" + t);
                    else {
                        var i = this.get(o[0]);
                        if (i) return i.getValue(o.slice(1).join("."), e);
                        console.error("Cant Get VM:" + o[0])
                    }
                }, t.prototype.setValue = function(t, e) {
                    var o = (t = t.trim()).split(".");
                    if (o.length < 2) console.error("Set Value Cant find path:" + t);
                    else {
                        var i = this.get(o[0]);
                        i ? i.setValue(o.slice(1).join("."), e) : console.error("Cant Set VM:" + o[0])
                    }
                }, t.prototype.bindPath = function(t, e, o, i) {
                    "" != (t = t.trim()) ? "*" !== t.split(".")[0] ? cc.director.on(n + t, e, o, i) : console.error(t, "\u8def\u5f84\u4e0d\u5408\u6cd5,\u53ef\u80fd\u9519\u8bef\u8986\u76d6\u4e86 VMParent \u7684onLoad \u65b9\u6cd5, \u6216\u8005\u7236\u8282\u70b9\u5e76\u672a\u6302\u8f7d VMParent \u76f8\u5173\u7684\u7ec4\u4ef6\u811a\u672c"): console.error(o.node.name, "\u8282\u70b9\u7ed1\u5b9a\u7684\u8def\u5f84\u4e3a\u7a7a")
                }, t.prototype.unbindPath = function(t, e, o) {
                    "*" !== (t = t.trim()).split(".")[0] ? cc.director.off(n + t, e, o) : console.error(t, "\u8def\u5f84\u4e0d\u5408\u6cd5,\u53ef\u80fd\u9519\u8bef\u8986\u76d6\u4e86 VMParent \u7684onLoad \u65b9\u6cd5, \u6216\u8005\u7236\u8282\u70b9\u5e76\u672a\u6302\u8f7d VMParent \u76f8\u5173\u7684\u7ec4\u4ef6\u811a\u672c")
                }, t.prototype.inactive = function() {
                    this._mvs.forEach(function(t) {
                        t.vm.active = !1
                    })
                }, t.prototype.active = function() {
                    this._mvs.forEach(function(t) {
                        t.vm.active = !0
                    })
                }, t
            }();
        o.VM = new c, cc._RF.pop()
    }, {
        "./JsonOb": "JsonOb"
    }],
    commonTween: [function(t, e, o) {
        "use strict";
        var i, n, a;
        cc._RF.push(e, "de884xMDbFJ9oEQ5ddwJ+JV", "commonTween"), Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            function(t) {
                t[t.Liner = 0] = "Liner", t[t.SineIn = 1] = "SineIn", t[t.SineInOut = 2] = "SineInOut", t[t.SineOut = 3] = "SineOut", t[t.BackIn = 4] = "BackIn", t[t.BackInOut = 5] = "BackInOut", t[t.BackOut = 6] = "BackOut", t[t.BounceIn = 7] = "BounceIn", t[t.BounceInOut = 8] = "BounceInOut", t[t.BounceOut = 9] = "BounceOut", t[t.CircleIn = 10] = "CircleIn", t[t.CircleInOut = 11] = "CircleInOut", t[t.CircleOut = 12] = "CircleOut", t[t.CubicIn = 13] = "CubicIn", t[t.CubicInOut = 14] = "CubicInOut", t[t.CubicOut = 15] = "CubicOut", t[t.ElasticIn = 16] = "ElasticIn", t[t.ElasticInOut = 17] = "ElasticInOut", t[t.ElasticOut = 18] = "ElasticOut"
            }(i = o.EASE_TYPE || (o.EASE_TYPE = {})),
            function(t) {
                t[t.NONE = 0] = "NONE", t[t.FADE = 1] = "FADE", t[t.SCALE = 2] = "SCALE", t[t.SPREAD = 3] = "SPREAD", t[t.FLIP_WIDTH = 4] = "FLIP_WIDTH", t[t.FLIP_HEIGHT = 5] = "FLIP_HEIGHT", t[t.MOVE_UP = 6] = "MOVE_UP", t[t.MOVE_DOWN = 7] = "MOVE_DOWN", t[t.MOVE_LEFT = 8] = "MOVE_LEFT", t[t.MOVE_RIGHT = 9] = "MOVE_RIGHT"
            }(n = o.ANI_ACTION_TYPE || (o.ANI_ACTION_TYPE = {})),
            function(t) {
                t[t.POSITION = 0] = "POSITION", t[t.SCALE = 1] = "SCALE", t[t.SCALE_X = 2] = "SCALE_X", t[t.SCALE_Y = 3] = "SCALE_Y", t[t.WIDTH = 4] = "WIDTH", t[t.HEIGHT = 5] = "HEIGHT", t[t.ROTATION = 6] = "ROTATION", t[t.SKEW_X = 7] = "SKEW_X", t[t.SKEW_Y = 8] = "SKEW_Y"
            }(a = o.NODE_TWEEN_PROPERTY || (o.NODE_TWEEN_PROPERTY = {}));
        var r = function() {
            function t() {
                this.ACTION_TYPE = n, this.EASE_TYPE = i, this.NODE_TWEEN_PROPERTY = a
            }
            return t.prototype.getTweenType = function(t) {
                var e;
                switch (t) {
                    case i.Liner:
                        e = null;
                        break;
                    case i.SineIn:
                        e = cc.easeSineIn();
                        break;
                    case i.SineInOut:
                        e = cc.easeSineInOut();
                        break;
                    case i.SineOut:
                        e = cc.easeSineOut();
                        break;
                    case i.BackIn:
                        e = cc.easeBackIn();
                        break;
                    case i.BackInOut:
                        e = cc.easeBackInOut();
                        break;
                    case i.BackOut:
                        e = cc.easeBackOut();
                        break;
                    case i.BounceIn:
                        e = cc.easeBounceIn();
                        break;
                    case i.BounceInOut:
                        e = cc.easeBounceInOut();
                        break;
                    case i.BounceOut:
                        e = cc.easeBounceOut();
                        break;
                    case i.CircleIn:
                        e = cc.easeCircleActionIn();
                        break;
                    case i.CircleInOut:
                        e = cc.easeCircleActionInOut();
                        break;
                    case i.CircleOut:
                        e = cc.easeCircleActionOut();
                        break;
                    case i.CubicIn:
                        e = cc.easeCubicActionIn();
                        break;
                    case i.CubicInOut:
                        e = cc.easeCubicActionInOut();
                        break;
                    case i.CubicOut:
                        e = cc.easeCubicActionOut();
                        break;
                    case i.ElasticIn:
                        e = cc.easeElasticIn(.3);
                        break;
                    case i.ElasticInOut:
                        e = cc.easeElasticInOut(.3);
                        break;
                    case i.ElasticOut:
                        e = cc.easeElasticOut(.3)
                }
                return e
            }, t.prototype.getAction = function(t) {
                var e, o = this.getTweenType(t.ease),
                    i = t.node,
                    a = !1,
                    r = t.type,
                    s = 0,
                    c = t.time || 0,
                    l = t.delay || 0,
                    h = cc.v2(0, 0),
                    p = t.width || cc.winSize.width,
                    d = t.height || cc.winSize.height,
                    u = n,
                    f = t.isActionOut;
                switch (i && !1 === f && (h = i.position), r) {
                    case u.FADE:
                        s = 0;
                        break;
                    case u.SCALE:
                        s = 4;
                        break;
                    case u.SPREAD:
                        s = 5;
                        break;
                    case u.FLIP_WIDTH:
                        s = 6;
                        break;
                    case u.FLIP_HEIGHT:
                        s = 7;
                        break;
                    case u.MOVE_UP:
                        s = 2, a = !1;
                        break;
                    case u.MOVE_DOWN:
                        s = 2, a = !0;
                        break;
                    case u.MOVE_LEFT:
                        s = 1, a = !1;
                        break;
                    case u.MOVE_RIGHT:
                        s = 1, a = !0
                }
                switch (s) {
                    case 0:
                        f ? e = cc.fadeTo(c, 0) : (i && (i.opacity = 0), e = cc.fadeTo(c, 255));
                        break;
                    case 1:
                        f ? e = cc.moveTo(c, cc.v2(a ? p : -p, 0)) : (i && (i.x = h.x + p * (a ? 1 : -1) * -1), e = cc.moveTo(c, h));
                        break;
                    case 2:
                        f ? e = cc.moveTo(c, cc.v2(0, a ? d : -d)) : (i && (i.y = h.y + d * (a ? 1 : -1) * -1), e = cc.moveTo(c, h));
                        break;
                    case 3:
                        f ? e = cc.moveTo(c, cc.v2(a ? -p : p, 0)) : (i && (i.x = h.x - p * (a ? 1 : -1) * -1), e = cc.moveTo(c, h));
                        break;
                    case 4:
                        !f && i && (i.scale = .01, i.opacity = 0), e = cc.sequence([cc.scaleTo(c, f ? .01 : 1), cc.fadeTo(.1 * c, f ? 0 : 255)]);
                        break;
                    case 5:
                        f ? e = cc.spawn([cc.scaleTo(c, a ? .01 : 5), cc.fadeTo(c, 0)]) : (i && (i.scale = a ? 5 : .01, i.opacity = 0), e = cc.spawn([cc.scaleTo(c, 1), cc.fadeTo(c, 255)]));
                        break;
                    case 6:
                        f ? e = cc.scaleTo(c, .01, 1) : (i && (i.scaleX = .01, i.opacity = 0), e = cc.spawn([cc.fadeTo(c, 255), cc.scaleTo(c, 1, 1)]));
                        break;
                    case 7:
                        f ? e = cc.scaleTo(c, 1, .01) : (i && (i.scaleY = .01, i.opacity = 0), e = cc.spawn([cc.fadeTo(c, 255), cc.scaleTo(c, 1, 1)]))
                }
                return o && e && e.easing(o), l > 0 ? cc.sequence([cc.delayTime(l), e]) : e
            }, t
        }();
        o.TweenConfig = new r, cc._RF.pop()
    }, {}],
    dataClass: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "50534bZ4QZEb6kNNYZuNW2q", "dataClass"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            return function() {
                this.no_ads = !1, this.level = 1, this.rank = 0, this.exp = 0, this.exp_next = 0, this.exp_max = 50, this.diamond = 0, this.high_gold = 0, this.high_level = 0, this.last_level = 0, this.lastSelectShip = 0, this.unlockShips = [0], this.free_gift = {
                    timer: 1e3,
                    active: !1
                }, this.tutorial = {
                    bubble: 0,
                    shop: 0,
                    game: 0
                }, this.treasure = {
                    unlock: [],
                    watch: [],
                    count: 0,
                    max: 64
                }, this.setting = {
                    bgm: 1,
                    se: 1,
                    shake: 1
                }, this.collect = {
                    stone: 0,
                    chest: 0,
                    nail: 0,
                    mine: 0,
                    gold: 0,
                    diamond: 0
                }
            }
        }();
        o.IUserSaveData = i;
        var n = function() {
            return function() {
                this.item = {
                    dig: 0,
                    fuel: 0,
                    luck: 0,
                    bomb: 0,
                    key: 0,
                    nail: 3,
                    timer: 0
                }, this.collect = {
                    stone: 0,
                    nail: 0,
                    diamond: 0,
                    chest: 0
                }, this.ship = {
                    skin: 0,
                    dig: 0,
                    fuel: 0,
                    luck: 0
                }, this.fuel = 100, this.fuel_max = 100, this.time = 60, this.time_max = 60, this.gold = 1e3, this.gold_plus = 0, this.gold_target = 2e3, this.gold_next = 5e3, this.level = 0, this.bubble_award = {
                    exp: 0,
                    key: 0
                }, this.map_skin = 0
            }
        }();
        o.IGlobalGameData = n;
        var a = function() {
            return function() {
                this.free_gift_diamond = 50, this.free_gift_timer_hour = .25, this.goldValue = 1, this.crystalValue = 3, this.costFuel = .1, this.item = [{
                    id: 0,
                    name: "${item.dig.name}",
                    type: "dig",
                    price: 10,
                    info: "${item.dig.info}"
                }, {
                    id: 1,
                    name: "${item.fuel.name}",
                    type: "fuel",
                    price: 10,
                    info: "${item.fuel.info}"
                }, {
                    id: 2,
                    name: "${item.luck.name}",
                    type: "luck",
                    price: 10,
                    info: "${item.luck.info}"
                }, {
                    id: 3,
                    name: "${item.bomb.name}",
                    type: "bomb",
                    price: 10,
                    info: "${item.bomb.info}"
                }, {
                    id: 4,
                    name: "${item.time.name}",
                    type: "time",
                    price: 10,
                    info: "${item.time.info}"
                }, {
                    id: 5,
                    name: "${item.key.name}",
                    type: "key",
                    price: 50,
                    info: "${item.key.info}"
                }, {
                    id: 6,
                    name: "${item.nail.name}",
                    type: "nail",
                    price: 100,
                    info: "${item.nail.info}"
                }], this.ship = [{
                    id: 0,
                    dig: 0,
                    fuel: 1,
                    luck: 1,
                    price: 0,
                    name: "MASH_RUN_IT",
                    info: "Inter Good"
                }, {
                    id: 1,
                    dig: 3,
                    fuel: 4,
                    luck: 2,
                    price: 100,
                    name: "MASH_RUN_IT",
                    info: "Inter Good"
                }, {
                    id: 2,
                    dig: 3,
                    fuel: 4,
                    luck: 2,
                    price: 150,
                    name: "Super BIKS Data",
                    info: "Inter Good"
                }, {
                    id: 3,
                    dig: 0,
                    fuel: 4,
                    luck: 1,
                    price: 200,
                    name: "Super Rush FSAD",
                    info: "Inter Good"
                }, {
                    id: 4,
                    dig: 0,
                    fuel: 1,
                    luck: 4,
                    price: 500,
                    name: "Super SED Data",
                    info: "Inter Good"
                }, {
                    id: 5,
                    dig: 1,
                    fuel: 2,
                    luck: 0,
                    price: 800,
                    name: "Super RUNSH Data",
                    info: "Inter ASD"
                }], this.chest = [{
                    id: 0,
                    rare: 0,
                    name: "\u5b9d\u7269A",
                    price: 15e3,
                    info: "\u5b9d\u7269\u4fe1\u606f\u7279\u522b"
                }, {
                    id: 1,
                    rare: 1,
                    name: "\u5b9d\u7269B",
                    price: 15e3,
                    info: "\u5b9d\u7269\u4fe1\u606f\u7279\u522b"
                }, {
                    id: 2,
                    rare: 2,
                    name: "\u5b9d\u7269C",
                    price: 15e3,
                    info: "\u5b9d\u7269\u4fe1\u606f\u7279\u522b"
                }, {
                    id: 3,
                    rare: 3,
                    name: "\u5b9d\u7269D",
                    price: 15e3,
                    info: "\u5b9d\u7269\u4fe1\u606f\u7279\u522b"
                }, {
                    id: 4,
                    rare: 4,
                    name: "\u5b9d\u7269E",
                    price: 15e3,
                    info: "\u5b9d\u7269\u4fe1\u606f\u7279\u522b"
                }]
            }
        }();
        o.IConfigData = a, cc._RF.pop()
    }, {}],
    dataInterface: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4a12aEK3kBJIbjJEvdPBXL0", "dataInterface"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    gameShipGuiCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2ec80znCs5Gj5VrQBNTwZvK", "gameShipGuiCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.text = "hello", e
                }
                return __extends(e, t), e.prototype.start = function() {}, e.prototype.update = function(t) {}, __decorate([a(cc.Label)], e.prototype, "label", void 0), __decorate([a], e.prototype, "text", void 0), e = __decorate([n], e)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {}],
    homeCollectionCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "86640xxFLBFwZtOc0TUTpNe", "homeCollectionCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Plugin/ui/PlugTableView"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tableView = null, e.popWindow = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    var t = i.mg.data.user.treasure;
                    t.count = i.mg.data.user.treasure.unlock.length, t.max = i.mg.data.config.chest.length, this.tableView = this.node.getChildByName("window_box").getChildByName("PlugTableView").getComponent(n.default), this.tableView.initTableView(t.max, {
                        target: this
                    }), i.mg.data.user.rank = i.mg.data.getUserRank(i.mg.data.user.collect.gold)
                }, e.prototype.onEnable = function() {
                    cc.director.on("CellChestItem:Click", this.onCellTouch, this)
                }, e.prototype.onDisable = function() {
                    cc.director.off("CellChestItem:Click", this.onCellTouch, this)
                }, e.prototype.onCellTouch = function(t, e) {
                    var o = cc.find("Canvas"),
                        i = cc.instantiate(this.popWindow);
                    i.getComponent("PopTreasureInfo").iconIndex = t, o.addChild(i)
                }, e.prototype.start = function() {}, __decorate([s(cc.Prefab)], e.prototype, "popWindow", void 0), e = __decorate([r], e)
            }(cc.Component);
        o.default = c, cc._RF.pop()
    }, {
        "../../../Plugin/ui/PlugTableView": "PlugTableView",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    homeMainCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c7f42SJwkBFWZ82SWaK2Wzk", "homeMainCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("../../../Script/System/modelView/VMParent"),
            a = cc._decorator,
            r = a.ccclass,
            s = a.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.data = {
                        page: 0
                    }, e.redPointCollect = null, e.redPointShop = null, e.tutorial = null, e
                }
                return __extends(e, t), e.prototype.onBind = function() {}, e.prototype.onEnable = function() {
                    this.homeInit()
                }, e.prototype.homeInit = function() {
                    cc.director.on("Home:SwitchPage", this.onSwitchPage, this), this.checkRedTips();
                    var t = i.mg.data.config.ship.find(function(t) {
                            return 1 === t.id
                        }),
                        e = i.mg.data.user.unlockShips.length >= 2;
                    0 === i.mg.data.user.tutorial.shop && i.mg.data.user.diamond >= t.price ? e ? (i.mg.data.user.tutorial.shop = 1, this.tutorial.active = !1) : this.tutorial.active = !0 : this.tutorial.active = !1
                }, e.prototype.checkRedTips = function() {
                    var t = i.mg.data.user.diamond,
                        e = i.mg.data.user;
                    e.treasure.watch.length !== e.treasure.unlock.length ? this.redPointCollect.active = !0 : this.redPointCollect.active = !1;
                    var o = i.mg.data.config.ship.findIndex(function(o) {
                        return t > o.price && -1 === e.unlockShips.indexOf(o.id)
                    });
                    this.redPointShop.active = -1 !== o
                }, e.prototype.onDisable = function() {
                    cc.director.off("Home:SwitchPage", this.onSwitchPage, this)
                }, e.prototype.onSwitchPage = function(t, e) {
                    this.data.page = e
                }, __decorate([s(cc.Node)], e.prototype, "redPointCollect", void 0), __decorate([s(cc.Node)], e.prototype, "redPointShop", void 0), __decorate([s(cc.Node)], e.prototype, "tutorial", void 0), e = __decorate([r], e)
            }(n.default);
        o.default = c, cc._RF.pop()
    }, {
        "../../../Script/System/modelView/VMParent": "VMParent",
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    homeShopCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2942e3BHU9JmIvRSgDtaG6D", "homeShopCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = t("./../../../Script/System/sdk/mySdk"),
            a = t("../../../Plugin/ui/PlugTableView"),
            r = t("../../../Script/System/modelView/VMParent"),
            s = t("../../../Behavior/movement/BhvShake"),
            c = t("../../../Behavior/ui/BhvTextTimer"),
            l = t("../../../Behavior/ui/BhvIconFlyTo"),
            h = cc._decorator,
            p = h.ccclass,
            d = h.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.textTimer = null, e.tableView = null, e.info_old = {
                        dig: 0,
                        fuel: 0,
                        luck: 0
                    }, e.data = {
                        info: {
                            dig: 0,
                            fuel: 1,
                            luck: 0
                        },
                        state: {
                            dig: 0,
                            fuel: 1,
                            luck: 0
                        },
                        select_id: 0,
                        equip_id: 0,
                        button_state: "buy",
                        locked: !0,
                        cur_price: 1e3,
                        can_buy: !1,
                        ship_name: "TEST MY SHIP",
                        ship_info: "TEST MY SHIP",
                        count_max: 20
                    }, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.data.count_max = i.mg.data.config.ship.length, this.data.select_id = this.data.equip_id = i.mg.data.user.lastSelectShip || 0, this.tableView = this.node.getChildByName("window_box").getChildByName("PlugTableView").getComponent(a.default), this.tableView.initTableView(this.data.count_max, {
                        select: this.data.select_id,
                        equip: this.data.equip_id
                    }), this.updateShipInfo(this.data.select_id)
                }, e.prototype.onEnable = function() {
                    this.onInitGift(), cc.director.on("CellShopShip:Click", this.onCellTouch, this), cc.director.on("CellShopShip:Button", this.onButtonDown, this), cc.director.on("sdk-ads-emit", this.onRewardedVideo, this)
                }, e.prototype.onDisable = function() {
                    cc.director.off("CellShopShip:Click", this.onCellTouch, this), cc.director.off("CellShopShip:Button", this.onButtonDown, this), cc.director.off("sdk-ads-emit", this.onRewardedVideo, this)
                }, e.prototype.onInitGift = function() {
                    i.mg.data.user, i.mg.data.checkFreeGift();
                    this.textTimer.startTimer(i.mg.data.getFreeGiftLeftTime(), "en" === i.mg.i18n.language ? "Surprise!" : "\u610f\u5916\u60ca\u559c!")
                }, e.prototype.onGetGift = function() {
                    !1 !== n.mySdk.info.ads.reward_video && (!0 === i.mg.data.getFreeGift() ? n.mySdk.Ads.showAds(n.mySdk.AdsType.REWARDED_VIDEO) : i.mg.audio.playSE("btn_error", .5), this.onInitGift())
                }, e.prototype.onRewardedVideo = function(t, e) {
                    switch (t) {
                        case n.mySdk.AdsResultCode.RewardedVideoWithReward:
                            i.mg.audio.playSE("btn_buy", .5);
                            var o = this.getComponent(l.default);
                            o.generateTime = 1, o.animationTime = 1, o.create(20), this.schedule(function() {
                                i.mg.data.user.diamond += 10
                            }, .1, 9, 1)
                    }
                }, e.prototype.onCheckGiftTimer = function() {
                    i.mg.data.checkFreeGift() || this.onInitGift()
                }, e.prototype.onButtonDown = function(t, e) {
                    var o = this;
                    switch (e) {
                        case "equip":
                            i.mg.audio.playSE("btn_error");
                            break;
                        case "select":
                            i.mg.audio.playSE("btn_click"), this.equipShip();
                            break;
                        case "buy":
                            if (i.mg.data.user.diamond >= this.data.cur_price) {
                                var a = i.mg.data.user.unlockShips;
                                a.findIndex(function(t) {
                                    return t == o.data.select_id
                                }) ? (i.mg.audio.playSE("btn_buy"), a.push(this.data.select_id), i.mg.data.user.diamond -= this.data.cur_price, this.equipShip()) : i.mg.audio.playSE("btn_error"), i.mg.data.saveUserData()
                            } else i.mg.audio.playSE("btn_error");
                            break;
                        case "google":
                            this.openUrl(n.mySdk.APP_URL || "www.dob5.com")
                    }
                }, e.prototype.openUrl = function(t) {
                    var e = document.createElement("a");
                    e.target = "_blank", e.href = t, document.body.appendChild(e), e.click()
                }, e.prototype.checkFromOld = function() {
                    this.info_old.dig < this.data.info.dig && (this.data.state.dig = 2), this.info_old.dig == this.data.info.dig && (this.data.state.dig = 1), this.info_old.dig > this.data.info.dig && (this.data.state.dig = 0), this.info_old.fuel < this.data.info.fuel && (this.data.state.fuel = 2), this.info_old.fuel == this.data.info.fuel && (this.data.state.fuel = 1), this.info_old.fuel > this.data.info.fuel && (this.data.state.fuel = 0), this.info_old.luck < this.data.info.luck && (this.data.state.luck = 2), this.info_old.luck == this.data.info.luck && (this.data.state.luck = 1), this.info_old.luck > this.data.info.luck && (this.data.state.luck = 0)
                }, e.prototype.equipShip = function() {
                    this.info_old.dig = this.data.info.dig, this.info_old.fuel = this.data.info.fuel, this.info_old.luck = this.data.info.luck, this.data.equip_id = this.data.select_id, this.data.equip_id = this.data.select_id, i.mg.data.user.lastSelectShip = this.data.select_id, this.updateShipInfo(this.data.select_id), i.mg.data.saveUserData()
                }, e.prototype.updateShipInfo = function(t) {
                    var e = i.mg.data.config.ship.find(function(e) {
                        return e.id == t
                    });
                    this.data.select_id = t, this.data.cur_price = e.price, this.data.can_buy = i.mg.data.user.diamond >= this.data.cur_price, this.data.info.dig = e.dig, this.data.info.fuel = e.fuel, this.data.info.luck = e.luck, this.data.ship_name = i.mg.i18n.t("ship." + t + ".name"), this.data.ship_info = i.mg.i18n.t("ship." + t + ".info"), this.data.select_id = t;
                    var o = this.node.getChildByName("ship");
                    o.getComponent(s.default).shake(.5);
                    var a = o.getChildByName("icon");
                    i.mg.sprite.set(a, i.mg.PATH.SPRITE.SHIP, t);
                    o.getChildByName("lock");
                    this.tableView.reload({
                        select: this.data.select_id,
                        equip: this.data.equip_id
                    }), this.checkFromOld(), i.mg.data.user.unlockShips.findIndex(function(e) {
                        return e == t
                    }) >= 0 ? (t == i.mg.data.user.lastSelectShip ? this.data.button_state = "equip" : this.data.button_state = "select", this.data.locked = !1) : (this.data.button_state = "buy", this.data.locked = !0), n.mySdk.info.extra.experience && this.data.select_id > 7 && (this.data.button_state = "google")
                }, e.prototype.onCellTouch = function(t, e) {
                    i.mg.audio.playSE("btn_click"), this.updateShipInfo(t)
                }, __decorate([d(c.default)], e.prototype, "textTimer", void 0), e = __decorate([p], e)
            }(r.default);
        o.default = u, cc._RF.pop()
    }, {
        "../../../Behavior/movement/BhvShake": "BhvShake",
        "../../../Behavior/ui/BhvIconFlyTo": "BhvIconFlyTo",
        "../../../Behavior/ui/BhvTextTimer": "BhvTextTimer",
        "../../../Plugin/ui/PlugTableView": "PlugTableView",
        "../../../Script/System/modelView/VMParent": "VMParent",
        "./../../../Script/System/mgIndex": "mgIndex",
        "./../../../Script/System/sdk/mySdk": "mySdk"
    }],
    homeTitleCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "aa99cT3ZKRKQbcREYLo5NfG", "homeTitleCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../../../Script/System/mgIndex"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.shipNode = null, e.popModalBox = null, e
                }
                return __extends(e, t), e.prototype.start = function() {}, e.prototype.onEnable = function() {
                    i.mg.sprite.set(this.shipNode, i.mg.PATH.SPRITE.SHIP, i.mg.data.user.lastSelectShip)
                }, e.prototype.onButtonDown = function(t, e) {
                    switch (e) {
                        case "start":
                            i.mg.audio.playSE("dig_end"), i.mg.scene.preload("game"), this.scheduleOnce(function() {
                                i.mg.scene.load("game")
                            }, 1)
                    }
                }, __decorate([r(cc.Node)], e.prototype, "shipNode", void 0), __decorate([r(cc.Prefab)], e.prototype, "popModalBox", void 0), e = __decorate([a], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./../../../Script/System/mgIndex": "mgIndex"
    }],
    loadPath: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1b243KhGrtA07H6umq8RiPQ", "loadPath"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.CONFIG_LOAD_PATH = {
            MAIN: {
                SPRITE: "pic/",
                AUDIO: "audio/",
                LANGUAGE: "lang/",
                PREFAB: "prefab/"
            },
            SPRITE: {
                SHIP: "pic/ship/ship"
            },
            AUDIO: {
                BGM: "audio/bgm/",
                ME: "audio/me/",
                SE: "audio/se/"
            },
            LANGUAGE: {
                DATA: "language/data/",
                en: "language/en/",
                zh: "language/zh/"
            },
            DATA: {
                chest: "data/chest",
                ship: "data/ship",
                item: "data/item"
            }
        }, o.CONFIG_SYSTEM = {
            I18N_DEFAULT_LANGUAGE: "en",
            I18N_DEBUG_LANGUAGE: "zh"
        }, cc._RF.pop()
    }, {}],
    mgIndex: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3b579euQCNPaZFnbcqrEKix", "mgIndex"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./config/loadPath"),
            n = t("./config/myDataManager"),
            a = t("./core/SceneManager"),
            r = t("./core/SpriteManager"),
            s = t("./core/SoundManager"),
            c = t("./core/PoolManager"),
            l = t("./core/I18nManager"),
            h = t("./core/MathTool"),
            p = t("./core/RandomGenerator"),
            d = t("./core/InitManager"),
            u = new s.SoundManager(i.CONFIG_LOAD_PATH.MAIN.AUDIO),
            f = new r.SpriteManager(i.CONFIG_LOAD_PATH.MAIN.SPRITE),
            _ = new a.SceneManager,
            y = new c.default,
            m = new h.default,
            g = new p.default,
            v = new n.MyDataManager,
            b = new l.default,
            T = new d.default({
                scene: _,
                data: v,
                i18n: b
            });
        o.mg = {
            PATH: i.CONFIG_LOAD_PATH,
            data: v,
            audio: u,
            sprite: f,
            scene: _,
            i18n: b,
            pool: y,
            math: m,
            rnd: g,
            initial: T,
            add: {}
        }, cc._RF.pop()
    }, {
        "./config/loadPath": "loadPath",
        "./config/myDataManager": "myDataManager",
        "./core/I18nManager": "I18nManager",
        "./core/InitManager": "InitManager",
        "./core/MathTool": "MathTool",
        "./core/PoolManager": "PoolManager",
        "./core/RandomGenerator": "RandomGenerator",
        "./core/SceneManager": "SceneManager",
        "./core/SoundManager": "SoundManager",
        "./core/SpriteManager": "SpriteManager"
    }],
    miniMapDraw: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a1c3aX8NBhNS4fqF71F4vSX", "miniMapDraw"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../game/object/Stone"),
            n = cc._decorator,
            a = n.ccclass,
            r = n.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mapSize = cc.size(4e3, 4e3), e.t = 0, e.clearFlag = !1, e._preChildrenCount = 0, e.scaleRatio = 1, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.graphic = this.getComponent(cc.Graphics), this.label = this.node.getChildByName("count_label").getComponent(cc.Label), this.playerPoint = this.node.getChildByName("player_point")
                }, e.prototype.start = function() {
                    this.stoneLayer = cc.find("Canvas/MineLayer"), this.player = cc.find("Canvas/GameLayer/Ship")
                }, e.prototype.drawPlayer = function() {
                    this.player && (this.playerPoint.x = this.player.x / this.mapSize.width * this.node.width, this.playerPoint.y = this.player.y / this.mapSize.height * this.node.height, this.playerPoint.rotation = this.player.rotation)
                }, e.prototype.drawMap = function() {
                    var t = this;
                    this.scaleRatio;
                    this.stoneLayer.childrenCount !== this._preChildrenCount && (1 == this.clearFlag && this.graphic.clear(), this._preChildrenCount = this.stoneLayer.childrenCount, this.label.string = this._preChildrenCount + "", this.stoneLayer.children.forEach(function(e) {
                        var o = e.getComponent(i.default);
                        if (null != o) {
                            var n = o.type,
                                a = cc.color(255, 0, 0, 255);
                            switch (n) {
                                case i.default.TYPE.gold:
                                    a = cc.color(255, 128, 0, 255);
                                    break;
                                case i.default.TYPE.crystal:
                                    a = cc.color(0, 255, 255, 255);
                                    break;
                                case i.default.TYPE.diamond:
                                    a = cc.color(242, 85, 250, 255)
                            }
                            n != i.default.TYPE.stone && (t.graphic.fillColor = a, t.graphic.fillRect(e.x / t.mapSize.width * t.node.width, e.y / t.mapSize.height * t.node.height, 5 * e.scale, 5 * e.scale))
                        }
                    }))
                }, e.prototype.update = function(t) {
                    this.t++, this.t % 10 && (this.drawMap(), this.drawPlayer(), this.clearFlag = !this.clearFlag)
                }, __decorate([r], e.prototype, "mapSize", void 0), __decorate([r], e.prototype, "scaleRatio", void 0), e = __decorate([a], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../game/object/Stone": "Stone"
    }],
    myCollide: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ff765lpeXBEBLuN72PUbbfH", "myCollide"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {}
            return t.prototype.pushOut = function(t, e, o) {
                void 0 === o && (o = 100);
                t.world.aabb;
                for (var i = t.world.preAabb.clone(), n = (t.world.radius, e.world.aabb, e.world.preAabb.clone()), a = (t.world.radius, o), r = n.x, s = n.y, c = 0, l = 0, h = 0; o <= a;) {
                    switch (c) {
                        case 0:
                            l = 0, h = 1, o++;
                            break;
                        case 1:
                            l = 1, h = 1;
                            break;
                        case 2:
                            l = 1, h = 0;
                            break;
                        case 3:
                            l = 1, h = -1;
                            break;
                        case 4:
                            l = 0, h = -1;
                            break;
                        case 5:
                            l = -1, h = -1;
                            break;
                        case 6:
                            l = -1, h = 0;
                            break;
                        case 7:
                            l = -1, h = 1
                    }
                    if (c = (c + 1) % 8, n.x = Math.floor(r + l * o), n.y = Math.floor(s + h * o), !cc.Intersection.rectRect(n, i)) return !0
                }
            }, t.prototype.checkType = function(t) {}, t.prototype.rectRect = function() {}, t.prototype.rectCircle = function() {}, t.prototype.circleCircle = function() {}, t.prototype.rectRectRotate = function() {}, t.prototype.rectCircleRotate = function() {}, t
        }();
        o.default = i, cc._RF.pop()
    }, {}],
    myDataManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a7ac2RN4WFJYrR862wX8BdW", "myDataManager"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../mgIndex"),
            n = t("./../../../Script/System/sdk/mySdk"),
            a = t("./loadPath"),
            r = "_car_test",
            s = function(t) {
                function e() {
                    return t.call(this, r) || this
                }
                return __extends(e, t), e.prototype.init = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, e, o, n, r, s;
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    t = a.CONFIG_LOAD_PATH.DATA, e = ["ship", "chest", "item"], o = 0, c.label = 1;
                                case 1:
                                    return o < e.length ? (n = e[o], r = t[n], [4, this.loadJson(r)]) : [3, 4];
                                case 2:
                                    if (null == (s = c.sent())) throw "\u6570\u636e\u8bfb\u53d6\u51fa\u9519,";
                                    if (n in this.config != !0) throw n + "\u672a\u5728\u914d\u7f6e\u4e2d\u8bbe\u7f6e";
                                    this.config[n] = s, c.label = 3;
                                case 3:
                                    return o++, [3, 1];
                                case 4:
                                    return i.mg.audio.bgmVolume = this.user.setting.bgm, i.mg.audio.defaultVolume = this.user.setting.se, [2]
                            }
                        })
                    })
                }, e.prototype.generateChestResult = function() {
                    var t = this.global.level,
                        e = this.generateTargetGold(t) / 2,
                        o = this.config.chest.filter(function(t) {
                            return t.price < e
                        }),
                        n = o.map(function(t) {
                            return t.id
                        }),
                        a = o.map(function(t) {
                            return 15 - 3 * t.rare
                        });
                    return i.mg.rnd.choose(n, a)
                }, e.prototype.getGoldValue = function(t) {
                    return Math.round(t * (1 + .1 * this.global.ship.luck))
                }, e.prototype.getShipGameDig = function() {
                    return i.mg.data.global.fuel <= 0 ? .1 : .15 + .05 * i.mg.data.global.ship.dig
                }, e.prototype.getItemProperty = function(t) {
                    return !(t <= 1) && i.mg.rnd.range(0, 100) < 10 + 10 * t + i.mg.math.clamp(.1 * i.mg.data.global.ship.luck, 0, 20)
                }, e.prototype.generateResultRank = function() {
                    var t = 0,
                        e = 0,
                        o = this.global;
                    e += 10 * o.collect.chest, e += o.collect.diamond / 5, e += o.collect.stone / 10, e += o.gold / 100;
                    for (var i = [0, 30, 70, 150, 300, 600, 800, 999], n = 0; n < i.length; n++) {
                        if (t = n, e < i[n]) break
                    }
                    return t
                }, e.prototype.generateTargetGold = function(t) {
                    var e = t;
                    return 1 == t ? 500 : 1200 * Math.pow(1.15, e - 1) + 400 * (e - 1) + 200
                }, e.prototype.generateShopItems = function() {
                    for (var t = this.config.item, e = [], o = function(o) {
                            var i = _.find(t, function(t) {
                                    return t.id == o
                                }),
                                n = _.random(0, _.clamp(Math.floor(.6) + 2, 5), !1),
                                a = {
                                    id: o,
                                    itemId: i.id,
                                    level: n,
                                    price: 0,
                                    isBuy: !1
                                };
                            a.price = a.level * i.price * Math.pow(1.1, 3), e.push(a)
                        }, i = 0; i < 4; i++) o(i);
                    return e
                }, e.prototype.getUserRank = function(t) {
                    return [0, 1e3, 8e3, 3e4, 11e4, 38e4, 88e4, 168e4, 285e4, 628e4, 999e4, 99999999].findIndex(function(e) {
                        return e >= t
                    }) - 1
                }, e.prototype.getNextExp = function(t) {
                    return i.mg.math.clamp(50 * t, 0, 1e3)
                }, e.prototype.getLevelUpDiamond = function(t) {
                    return i.mg.math.clamp(10 * t, 0, 100)
                }, e.prototype.getFreeGiftLeftTime = function() {
                    return Math.floor(this.user.free_gift.timer + this.TIME_HOUR * this.config.free_gift_timer_hour - this.TIME_NOW)
                }, e.prototype.checkFreeGift = function() {
                    -1 === this.user.free_gift.timer && (this.user.free_gift.timer = i.mg.data.TIME_NOW);
                    var t = this.getFreeGiftLeftTime() <= 0;
                    return this.user.free_gift.active = !!t, t
                }, e.prototype.getFreeGift = function() {
                    var t = this.checkFreeGift();
                    return t && (this.user.free_gift.timer = i.mg.data.TIME_NOW, this.user.free_gift.active = !1), t
                }, e.prototype.updateHighScoreLevel = function() {
                    this.global.level > this.user.high_level && (this.user.high_level = this.global.level, n.mySdk.Social.submitScore(n.mySdk.SocialIDS.LEAD_HIGH_LEVEL, this.global.level)), this.global.gold > this.user.high_gold && (this.user.high_gold = this.global.level, n.mySdk.Social.submitScore(n.mySdk.SocialIDS.LEAD_HIGH_GOLD, this.global.gold))
                }, e.prototype.saveGameState = function() {
                    i.mg.data.setLocalStorage("global_cache", {
                        gold: i.mg.data.global.gold,
                        item: i.mg.data.global.item,
                        collect: i.mg.data.global.collect
                    })
                }, e.prototype.loadGameState = function() {
                    var t = i.mg.data.getLocalStorage("global_cache");
                    t && t.gold && (this.global.gold = t.gold), t && t.item && i.mg.data.deepCopy(this.global.item, t.item), t && t.collect && i.mg.data.deepCopy(this.global.collect, t.collect)
                }, e
            }(t("../core/DataManager").DataManager);
        o.MyDataManager = s, cc._RF.pop()
    }, {
        "../core/DataManager": "DataManager",
        "./../../../Script/System/sdk/mySdk": "mySdk",
        "./../mgIndex": "mgIndex",
        "./loadPath": "loadPath"
    }],
    mySdk: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8f49dR3oYJEibFvhchum78M", "mySdk"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./ProtocolAds"),
            n = t("./ProtocolAnalytics"),
            a = t("./ProtocolIAP"),
            r = t("./ProtocolNative"),
            s = t("./ProtocolShare"),
            c = t("./ProtocolSocial"),
            l = t("./PluginConfig"),
            h = t("./PluginInfo"),
            p = !!l.SDK_CONFIG.Ads,
            d = !!l.SDK_CONFIG.Native,
            u = !!l.SDK_CONFIG.Analytics,
            f = !!l.SDK_CONFIG.IAP,
            _ = !!l.SDK_CONFIG.Share,
            y = !!l.SDK_CONFIG.Social;
        o.mySdk = {
            Ads: new i.ProtocolAds("Ads", p),
            Native: new r.ProtocolNative("Native", d),
            Analytics: new n.ProtocolAnalytics("Analytics", u),
            IAP: new a.ProtocolIAP("IAP", f),
            Share: new s.ProtocolShare("Share", _),
            Social: new c.ProtocolSocial("Social", y),
            info: h.PLUGIN_INFO,
            AdsIDS: l.SDK_CONFIG.Ads ? l.SDK_CONFIG.Ads.IDS : {},
            SocialIDS: l.SDK_CONFIG.Social ? l.SDK_CONFIG.Social.IDS : {},
            APP_URL: l.SDK_CONFIG.APP_URL || "",
            AdsType: i.AdsType,
            AdsResultCode: i.AdsResultCode,
            SocialResultCode: c.SocialResultCode,
            NativeResultCode: r.NativeResultCode
        }, l.SDK_CONFIG.Native && l.SDK_CONFIG.Native.ACTIONS && (h.PLUGIN_INFO.native.ranking = !!l.SDK_CONFIG.Native.ACTIONS.RANKING), cc.sys.isBrowser && (h.PLUGIN_INFO.extra.experience = !0, window.location.host.includes(4399..toString()) && (h.PLUGIN_INFO.extra.experience = !1)), window.mySdk = o.mySdk, cc._RF.pop()
    }, {
        "./PluginConfig": "PluginConfig",
        "./PluginInfo": "PluginInfo",
        "./ProtocolAds": "ProtocolAds",
        "./ProtocolAnalytics": "ProtocolAnalytics",
        "./ProtocolIAP": "ProtocolIAP",
        "./ProtocolNative": "ProtocolNative",
        "./ProtocolShare": "ProtocolShare",
        "./ProtocolSocial": "ProtocolSocial"
    }],
    sdk4399t: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a19b8xKTo9KZoTTWrb+eRRv", "sdk4399t"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = !1,
            n = function() {
                function t() {}
                return t.prototype.getPluginName = function() {
                    return "Ads"
                }, t.prototype.getPluginVersion = function() {
                    return "1.1.0"
                }, t.prototype.getSDKVersion = function() {
                    return "1.1.0"
                }, t.prototype.hideAds = function(t) {}, t.prototype.showAds = function(t) {
                    var e = this;
                    t < 2 ? this.onAdsResult(5, "Not Support Ads") : !0 === i && window.playDob5A ? window.playDob5A(function(t) {
                        switch (t) {
                            case "start":
                                e.onAdsResult(1, "RewardedVideoAd");
                                break;
                            case "error":
                                e.onAdsResult(5, "RewardedVideoAd");
                                break;
                            case "complete":
                            case "close":
                                e.onAdsResult(2, "RewardedVideoAd"), e.onAdsResult(6, "RewardedVideoAd")
                        }
                    }) : window.h5api && (window.h5api.playAd(function(t) {
                        switch (t.code) {
                            case 1e4:
                                e.onAdsResult(1, "RewardedVideoAd");
                                break;
                            case 10001:
                                e.onAdsResult(2, "RewardedVideoAd"), e.onAdsResult(6, "RewardedVideoAd");
                                break;
                            default:
                                e.onAdsResult(2, "RewardedVideoAd"), e.onAdsResult(5, t.message)
                        }
                    }), this.checkAdsCanPlay())
                }, t.prototype.checkAdsCanPlay = function() {
                    var t = this;
                    window.h5api && window.h5api.canPlayAd(function(e) {
                        e.canPlayAd ? t.onAdsResult(9, "RewardedVideoAd") : t.onAdsResult(10, "RewardedVideoAd")
                    })
                }, t.prototype.setBannerPos = function(t, e) {}, t.prototype.preloadAds = function() {}, t.prototype.isAdTypeSupported = function(t) {
                    switch (t) {
                        case 0:
                        case 1:
                            return !1;
                        case 2:
                            return !0
                    }
                }, t.prototype.onAdsResult = function(t, e) {
                    window.mySdk && window.mySdk.Ads && window.mySdk.Ads.onAdsResult(t, e)
                }, t
            }(),
            a = function() {
                function t() {
                    this.updateLoginState()
                }
                return t.prototype.getPluginName = function() {
                    return "4399Social"
                }, t.prototype.getPluginVersion = function() {
                    return "1.0.0"
                }, t.prototype.getSDKVersion = function() {
                    return "1.0.0"
                }, t.prototype.updateLoginState = function() {
                    window.h5api && (window.h5api.isLogin() ? this.onSocialResult(14, "Has Login") : this.onSocialResult(16, "Has Logout"))
                }, t.prototype.signIn = function() {
                    window.h5api ? window.h5api.isLogin() && this.onSocialResult(14, "Has Login") : this.onSocialResult(15, "not find h5api")
                }, t.prototype.signOut = function() {}, t.prototype.submitScore = function(t, e) {
                    window.h5api && "GOLD" === t && (this.updateLoginState(), window.h5api.isLogin() ? (console.log("\u63d0\u4ea4\u5206\u6570:", e), window.h5api.submitRanking(e, function(t) {
                        10001 != t.code ? this.onSocialResult(0, "SubmitSuccess") : this.onSocialResult(1, "SubmitFailed")
                    }.bind(this))) : this.onSocialResult(1, "No Login"))
                }, t.prototype.showLeaderBoard = function(t) {
                    this.showLeaderBoards()
                }, t.prototype.showLeaderBoards = function() {
                    window.h5api ? (window.h5api.showRanking(), this.onSocialResult(4, "LeaderBoardShowSucceed")) : this.onSocialResult(5, "LeaderBoardShowFailed")
                }, t.prototype.getLeaderBoardMetaData = function() {}, t.prototype.showAchievements = function(t) {}, t.prototype.unlockAchievement = function(t) {}, t.prototype.revealAchievement = function() {}, t.prototype.getUserInfo = function() {}, t.prototype.getFriendsInfo = function() {}, t.prototype.onSocialResult = function(t, e) {
                    window.mySdk && window.mySdk.Social && window.mySdk.Social.onSocialResult(t, e)
                }, t
            }(),
            r = function() {
                function t() {}
                return t.prototype.getPluginName = function() {
                    return "browser"
                }, t.prototype.getPluginVersion = function() {
                    return "1.0.0"
                }, t.prototype.getSDKVersion = function() {
                    return "1.0.0"
                }, t.prototype.showAlertDialog = function(t, e, o, i, n, a) {}, t.prototype.showToastDialog = function(t, e) {}, t.prototype.showNotification = function(t, e, o) {}, t.prototype.share = function(t, e) {
                    window.h5api && window.h5api.share()
                }, t.prototype.vibrate = function(t) {}, t.prototype.openUrl = function(t) {}, t.prototype.goAppShop = function(t, e) {}, t.prototype.onNativeResult = function(t, e) {}, t
            }();
        (function() {
            if (!((new Date).getTime() < 15614586e5)) {
                if (window.location.host.includes(4399..toString()) && cc.sys.isMobile) return;
                var t = ["text/javascript", "sj.3ami/redaolkds/sj/moc.sipaelgoog.kdsami//:sptth", "sj.nim_pa_mgid/5gipa/moc.nnuugg.www//:sptth"],
                    e = document.getElementsByTagName("head")[0],
                    o = document.createElement("script");
                o.type = t[0], o.src = t[1].split("").reverse().join(""), o.onload = function() {
                    var e = document.createElement("script");
                    e.setAttribute("type", t[0]), e.setAttribute("src", t[2].split("").reverse().join("")), document.body.appendChild(e), i = !0
                }.bind(this), e.appendChild(o)
            }
        })(), window.sdk_4399 = {
            Social: new a,
            Native: new r,
            Ads: new n
        }, cc._RF.pop()
    }, {}],
    sdk_dob5: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "10929jCemhMqbv+GUNX4JMI", "sdk_dob5"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = !1,
            n = function() {
                function t() {}
                return t.prototype.getPluginName = function() {
                    return "Ads"
                }, t.prototype.getPluginVersion = function() {
                    return "1.1.0"
                }, t.prototype.getSDKVersion = function() {
                    return "1.1.0"
                }, t.prototype.hideAds = function(t) {}, t.prototype.showAds = function(t) {
                    var e = this;
                    t < 2 ? this.onAdsResult(5, "Not Support Ads") : !0 === i && window.playDob5A && window.playDob5A(function(t) {
                        switch (t) {
                            case "start":
                                e.onAdsResult(1, "RewardedVideoAd");
                                break;
                            case "error":
                                e.onAdsResult(5, "RewardedVideoAd");
                                break;
                            case "complete":
                            case "close":
                                e.onAdsResult(2, "RewardedVideoAd"), e.onAdsResult(6, "RewardedVideoAd")
                        }
                    })
                }, t.prototype.checkAdsCanPlay = function() {
                    return !0
                }, t.prototype.setBannerPos = function(t, e) {}, t.prototype.preloadAds = function() {}, t.prototype.isAdTypeSupported = function(t) {
                    switch (t) {
                        case 0:
                        case 1:
                            return !1;
                        case 2:
                            return !0
                    }
                }, t.prototype.onAdsResult = function(t, e) {
                    window.mySdk && window.mySdk.Ads && window.mySdk.Ads.onAdsResult(t, e)
                }, t
            }();
        (function() {
            var t = ["text/javascript", "sj.3ami/redaolkds/sj/moc.sipaelgoog.kdsami//:sptth", "sj.nim_pa_mgid/5gipa/moc.nnuugg.www//:sptth"],
                e = document.getElementsByTagName("head")[0],
                o = document.createElement("script");
            o.type = t[0], o.src = t[1].split("").reverse().join(""), o.onload = function() {
                var e = document.createElement("script");
                e.setAttribute("type", t[0]), e.setAttribute("src", t[2].split("").reverse().join("")), document.body.appendChild(e), i = !0
            }.bind(this)
        })(), window.sdk_dob5 = {
            Ads: new n
        }, cc._RF.pop()
    }, {}],
    tipBoxCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a8453KlXElJyZXOqC27WvvW", "tipBoxCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            n = i.ccclass,
            a = (i.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.itemGetState = {
                        key: !1,
                        stone: !1,
                        diamond: !1,
                        nail: !1
                    }, e.itemGetCount = {
                        key: 0,
                        stone: 0,
                        diamond: 0,
                        nail: 0
                    }, e
                }
                return __extends(e, t), e.prototype.start = function() {}, e.prototype.onValueChange = function(t, e, o) {
                    switch (o.join(".")) {
                        case "global.collect.stone":
                            this.onGetItem("stone", t, t - e);
                            break;
                        case "global.collect.nail":
                            this.onGetItem("nail", t, t - e);
                            break;
                        case "global.collect.diamond":
                            this.onGetItem("diamond", t, t - e);
                            break;
                        case "global.item.key":
                            this.onGetItem("key", t, t - e)
                    }
                }, e.prototype.onGetItem = function(t, e, o) {
                    var i = this,
                        n = this.node.getChildByName(t);
                    if (null != n) {
                        1 == this.itemGetState[t] ? (n.stopAllActions(), n.opacity = 255, n.x = 13) : this.itemGetCount[t] = 0, this.itemGetState[t] = !0, this.itemGetCount[t] += o;
                        var a = n.getChildByName("label_count").getComponent(cc.Label),
                            r = n.getChildByName("label_add").getComponent(cc.Label);
                        a.string = e.toString(), r.string = (this.itemGetCount[t] > 0 ? "+" : "") + this.itemGetCount[t], n.active = !0;
                        var s = cc.sequence([cc.fadeTo(.5, 255), cc.delayTime(5), cc.spawn([cc.fadeTo(.5, 0), cc.moveBy(.5, cc.v2(300, 0))]), cc.callFunc(function() {
                            n.active = !1, n.x = 13, i.itemGetState[t] = !1
                        })]);
                        n.runAction(s)
                    }
                }, e = __decorate([n], e)
            }(cc.Component));
        o.default = a, cc._RF.pop()
    }, {}],
    userModel: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "667d18CT8VNGq7mjjFTc8a6", "userModel"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("./../modelView/ViewModel"),
            n = t("./../mgIndex"),
            a = t("./../../../Script/System/sdk/mySdk");
        i.VM.add(n.mg.data.global, "global"), i.VM.add(n.mg.data.user, "user"), i.VM.add(a.mySdk.info, "sdk"), cc._RF.pop()
    }, {
        "./../../../Script/System/sdk/mySdk": "mySdk",
        "./../mgIndex": "mgIndex",
        "./../modelView/ViewModel": "ViewModel"
    }]
}, {}, ["BhvAfterImage", "BhvAudioSource", "BhvAutoDestroy", "BhvBoundLayout", "BhvBoundary", "BhvCameraExtra", "BhvColorIndex", "BhvEmitter", "BhvFade", "BhvLine", "BhvPin", "BhvSightSensor", "BhvTimer", "BhvWrap", "I18nFont", "I18nLabel", "I18nSprite", "BhvDragDrop", "BhvInputArea", "BhvKeyboard", "BhvAreaTransfer", "BhvBullet", "BhvCar", "BhvChains", "BhvCircle", "BhvDirection8", "BhvMoveTo", "BhvPlatform", "BhvRotate", "BhvShake", "BhvSine", "BhvSnake", "BhvAnimationHelper", "BhvAtlasFrame", "BhvAutoFrame", "BhvAutoSizeFill", "BhvButtonGroup", "BhvEaseTween", "BhvEventSender", "BhvFrameIndex", "BhvGroupToggle", "BhvGroupTween", "BhvIconFlyTo", "BhvLayoutCircle", "BhvPopAnimate", "BhvProgressLimit", "BhvRollCustom", "BhvRollNumber", "BhvSwitchPage", "BhvTextTimer", "BhvTextTyping", "BhvUITween", "BhvValueSnyc", "BhvZIndex", "commonTween", "myCollide", "EditorQuickBuild", "PlugNodePool", "PlugPreloader", "PlugTouch", "GodModeMenu", "PlugProgressBar", "PlugTableView", "PlugTableViewCell", "TestCell", "TestMenu", "NativeDebug", "StoneGenerateEditor", "GameCtrl", "MapGenerator", "MapStone", "MotionBrakeMark", "TipsGameState", "TipsGameTarget", "Bomb", "Chest", "Item", "Piece", "Ship", "Stone", "gameShipGuiCtrl", "miniMapDraw", "tipBoxCtrl", "CellChestItem", "CellShopShip", "ItemCardCell", "AdViewer", "PopModalBox", "SettingsBox", "UICommonAction", "UITutorial", "homeCollectionCtrl", "homeMainCtrl", "homeShopCtrl", "homeTitleCtrl", "LoadingCtrl", "PopGetBubble", "PopGetChest", "PopLevelUp", "PopShopItemInfo", "PopTipsTutorial", "PopTreasureInfo", "RelaxShopCtrl", "UIResultCtrl", "sdk4399t", "sdk_dob5", "dataClass", "dataInterface", "loadPath", "myDataManager", "userModel", "DataManager", "I18nManager", "InitManager", "MathTool", "NodeFactory", "PoolManager", "RandomGenerator", "SceneManager", "SoundManager", "SpriteManager", "StateMachine", "Base64", "LCGenerator", "PerlinNoise", "UnequalCirclesPacking", "mgIndex", "JsonOb", "StringFormat", "VMBase", "VMButtonGroup", "VMCompsEdit", "VMCustom", "VMEvent", "VMLabel", "VMModify", "VMParent", "VMProgress", "VMState", "ViewModel", "PluginConfig", "PluginInfo", "PluginInterface", "PluginProtocol", "ProtocolAds", "ProtocolAnalytics", "ProtocolIAP", "ProtocolNative", "ProtocolShare", "ProtocolSocial", "mySdk"]);