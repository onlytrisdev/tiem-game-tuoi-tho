!function () {
    function t(t, e) {
        if (!e) return null;
        if ("string" == typeof t) t = t.split("/"); else if (0 === t.length) return e;
        return t[t.length - 1] || t.splice(t.length - 1, 1), 0 === t.length ? e : function t(e, n) {
            if (0 === e.length) return n[0] || null;
            if (1 === e.length) {
                for (var i = e[0], o = 0, r = n.length; o < r; o++) if (n[o].name === i) return n[o];
                return null;
            }
            var a = [];
            for (i = e[0], o = 0, r = n.length; o < r; o++) n[o].name === i && (a = a.concat(n[o]._children));
            return a.length ? t(e.slice(1), a) : null;
        }(t, e._children);
    }
    function e(t, e) {
        return t instanceof RegExp ? t.test(e) : t === e;
    }
    function n(t, n) {
        return n ? e(t, n.name) ? n : function t(n, i) {
            for (var o = [], r = 0; r < i.length; r++) {
                var a = i[r];
                if (e(n, a.name)) return a;
                a.numChildren && (o = o.concat(a._children));
            }
            return o.length ? t(n, o) : null;
        }(t, n._children) : null;
    }
    var i = [];
    function o(t, n) {
        return i.length = 0, n ? (e(t, n.name) && i.push(n), function t(n, o) {
            for (var r = [], a = 0; a < o.length; a++) {
                var s = o[a];
                e(n, s.name) ? i.push(s) : s.numChildren && (r = r.concat(s._children));
            }
            r.length && t(n, r);
        }(t, n._children), i) : i;
    }
    function r(t, n) {
        return n ? e(t, n.name) ? n : function t(n, i) {
            return i ? e(n, i.name) ? i : t(n, i._parent) : null;
        }(t, n._parent) : null;
    }
    function a(t, e) {
        if (!e) return [];
        var n = [];
        return function e(i) {
            if (!i) return null;
            var o = i._components;
            if (o) for (var r = 0; r < o.length; r++) {
                var a = o[r];
                a instanceof t && n.push(a);
            }
            for (r = 0; r < i.numChildren; r++) e(i.getChildAt(r));
        }(e), n;
    }
    function s(t) {
        if (!t) return [];
        var e = [];
        return function t(n) {
            if (!n) return null;
            n.meshRenderer && e.push(n.meshRenderer);
            for (var i = 0; i < n.numChildren; i++) t(n.getChildAt(i));
        }(t), e;
    }
    function d(t, e) {
        if (void 0 === e && (e = 0), t.layer = e, 0 !== t._children.length) for (var n = 0, i = t._children; n < i.length; n++) d(i[n], e);
    }
    var l, h, u = new Laya.Vector3(), c = new Laya.Matrix4x4(), p = function () {
        function t() { }
        return Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.load = function (t, e, n) {
            void 0 === e && (e = null), void 0 === n && (n = null), Laya.loader.create(t, e, n);
        }, t.prototype.getRes = function (t) {
            return Laya.Loader.getRes(t);
        }, t.prototype.create = function (t) {
            var e = this.getRes(t);
            return e ? e.clone() : null;
        }, t.prototype.remove = function (t) {
            t.destroy();
        }, t;
    }(), f = function () {
        function t() { }
        return Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.load = function (t) {
            for (var e = this, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            var o = null, r = null, a = null;
            n[0] instanceof Laya.Handler ? (r = n[0], n[1] instanceof Laya.Handler && (a = n[1])) : (o = n[0] || null,
                n[1] instanceof Laya.Handler && (r = n[1]), n[2] instanceof Laya.Handler && (a = n[2])),
                this.getRes(t) ? r && r.runWith(this.create(t, o)) : Laya.loader.create(t, Laya.Handler.create(this, function (n) {
                    r && r.runWith(e.create(t, o));
                }), a);
        }, t.prototype.getRes = function (t) {
            return Laya.loader.getRes(t);
        }, t.prototype.create = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var i = e[0] || null, o = this.getRes(t);
            return o ? (o = o.clone(), i && ("function" == typeof i ? o.addComponent(i) : Array.isArray(i) && i.forEach(function (t) {
                if ("function" == typeof t) o.addComponent(t); else {
                    var e = findPath(t.path, o);
                    e && ("function" == typeof t.script ? e.addComponent(t.script) : t.script.forEach(function (t) {
                        e.addComponent(t);
                    }));
                }
            })), o) : null;
        }, t.prototype.remove = function (t) {
            t && t.destroy(!0);
        }, t;
    }(), y = (l = function (t, e) {
        return (l = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        l(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n());
    }), g = function (t) {
        function e() {
            return t.call(this) || this;
        }
        return y(e, t), Object.defineProperty(e, "I", {
            get: function () {
                return this._I || (this._I = new e()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.play = function (t) {
            t instanceof Laya.ShuriKenParticle3D && t.particleSystem.play();
            for (var e = 0; e < t._children.length; e++) {
                var n = t._children[e];
                this.play(n);
            }
        }, e.prototype.stop = function (t) {
            t instanceof Laya.ShuriKenParticle3D && t.particleSystem.stop();
            for (var e = 0; e < t._children.length; e++) {
                var n = t._children[e];
                this.stop(n);
            }
        }, e;
    }(f), m = function () {
        function t() { }
        return Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.load = function (t) {
            var tttt = t;
            // console.error(tttt)
            for (var e = this, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            var o = null, r = null, a = null;
            n[0] instanceof Laya.Handler ? (r = n[0], n[1] instanceof Laya.Handler && (a = n[1])) : (o = n[0] || null,
                n[1] instanceof Laya.Handler && (r = n[1]), n[2] instanceof Laya.Handler && (a = n[2])),
                "string" == typeof t ? Laya.loader.create(t, r ? Laya.Handler.create(this, function (t) {

                    e.add(t, o), r.runWith(t);
                }) : null, a, Laya.Scene3D.HIERARCHY, null, null, 1, !1) : (this.add(t, o), r.runWith(t));
        }, t.prototype.add = function (t, e) {
            void 0 === e && (e = null);
            var n = {
                "": [t]
            };
            (function t(e, i) {
                if (void 0 === i && (i = ""), e._children.length) for (var o = 0, r = e._children.length; o < r; o++) void 0 === n[i + e._children[o].name] && (n[i + e._children[o].name] = []),
                    n[i + e._children[o].name].push(e._children[o]), t(e._children[o], i + e._children[o].name + "/");
            })(t), e && ("function" == typeof e ? t.addComponent(e) : Array.isArray(e) && e.forEach(function (e) {
                if ("function" == typeof e) t.addComponent(e); else {
                    var i = [];
                    if (e.path instanceof RegExp) for (var o in n) e.path.test(o) && (i = i.concat(n[o])); else i = n[e.path];
                    if (!i.length) return;
                    for (var r = function (t) {
                        if (!t) return "continue";
                        if ("function" == typeof e.script) {
                            var n = t.getComponent(e.script);
                            if (n || (n = t.addComponent(e.script)), e.data) for (var i in e.data) n[i] = e.data[i];
                        } else e.script.forEach(function (n) {
                            var i = t.getComponent(n);
                            if (i || (i = t.addComponent(n)), e.data) for (var o in e.data) i[o] = e.data[o];
                        });
                    }, a = 0, s = i; a < s.length; a++) r(s[a]);
                }
            }));
        }, t;
    }(), b = function () {
        function t() {
            this._root = null;
        }
        return Object.defineProperty(t.prototype, "root", {
            get: function () {
                return this._root || (this._root = Laya.stage.addChild(new Laya.Sprite()), this._root.name = "Scene3DManager",
                    this._root.zOrder = 1, Laya.Scene.root.zOrder = 2), this._root;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.open = function (t) {
            for (var e = this, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            var o = !0, r = null, a = null, s = null;
            "boolean" == typeof n[0] && (o = n[0], n.shift()), n[0] instanceof Laya.Handler ? (a = n[0],
                n[1] instanceof Laya.Handler && (s = n[1])) : (r = n[0] || null, n[1] instanceof Laya.Handler && (a = n[1]),
                    n[2] instanceof Laya.Handler && (s = n[2])), o && this.closeAll(), m.I.load(t, r, Laya.Handler.create(this, function (t) {
                        e.root.addChild(t), a && a.runWith(t);
                    }), s);
        }, t.prototype.closeAll = function () {
            for (var t = this.root.numChildren - 1; t >= 0; --t) {
                var e = this.root.getChildAt(t);
                e.active = !1, e.destroy(!0), e.removeSelf();
            }
        }, t.prototype.close = function (t) {
            for (var e = this.root.numChildren - 1; e >= 0; --e) {
                var n = this.root.getChildAt(e);
                ("string" == typeof t && n.url === t || t instanceof Laya.Scene3D && n === t) && (n.removeSelf(),
                    n.active = !1, n.destroy(!0));
            }
        }, t.prototype.getActiveScene = function () {
            return this.root.getChildAt(0) || null;
        }, t;
    }(), A = function (t, e) {
        for (var n = 0, i = e.length, o = t.length; n < i; n++, o++) t[o] = e[n];
        return t;
    }, _ = function () {
        function t() { }
        return Object.defineProperty(t, "I", {
            get: function () {
                return t._I || (t._I = new t()), t._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.loadMaterial = function (t, e, n) {
            void 0 === e && (e = null), void 0 === n && (n = null), p.I.load(t, e, n);
        }, t.prototype.getResMaterial = function (t) {
            return p.I.getRes(t);
        }, t.prototype.createMaterial = function (t) {
            return p.I.create(t);
        }, t.prototype.removeMaterial = function (t) {
            p.I.remove(t);
        }, t.prototype.loadSprite3D = function (t) {
            for (var e, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            (e = f.I).load.apply(e, A([t], n));
        }, t.prototype.getResSprite3D = function (t) {
            return f.I.getRes(t);
        }, t.prototype.createSprite3D = function (t) {
            for (var e, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            return (e = f.I).create.apply(e, A([t], n));
        }, t.prototype.removeSprite3D = function (t) {
            f.I.remove(t);
        }, t.prototype.loadScene3D = function (t) {
            for (var e, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            (e = m.I).load.apply(e, A([t], n));
        }, t.prototype.openScene3D = function (t) {
            for (var e, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            (e = b.I).open.apply(e, A([t], n));
        }, t.prototype.closeScene3D = function (t) {
            b.I.close(t);
        }, t.prototype.closeAllScene3D = function () {
            b.I.closeAll();
        }, t.prototype.getActiveScene3D = function () {
            return b.I.getActiveScene();
        }, t.prototype.playParticle3D = function (t) {
            g.I.play(t);
        }, t.prototype.stopParticle3D = function (t) {
            g.I.stop(t);
        }, t.prototype.compileShader = function (t) {
            !function (t) {
                if (t instanceof Laya.ShuriKenParticle3D) for (var e = t.particleRenderer.materials, n = 0; n < e.length; n++) {
                    var i = e[n], o = i._defineDatas, r = Laya.ShaderPass._debugDefineString;
                    if (r || (r = null), Laya.Shader3D._getNamesByDefineData(o, r), !Config3D._config && Config3D._config._multiLighting) {
                        var a = r.indexOf("LEGACYSINGLELIGHTING");
                        -1 !== a && r.splice(a, 1);
                    }
                    var s = i._shader;
                    if (s) {
                        var d = s._subShaders;
                        if (d && d.length > 0) for (var l = 0; l < d.length; l++) {
                            var h = d[n]._passes;
                            if (h && h.length > 0) for (var u = 0; u < h.length; u++) h[n] && Laya.Shader3D.compileShaderByDefineNames(s.name, l, u, r);
                        }
                    }
                }
            }(t);
        }, t.prototype.positionWorld2local = function (t, e) {
            return function (t, e) {
                return e.transform.worldMatrix.invert(c), Laya.Vector3.transformCoordinate(t, c, u),
                    u;
            }(t, e);
        }, t.prototype.quaternion2Vector3 = function (t, e) {
            return void 0 === e && (e = null), function (t, e) {
                void 0 === e && (e = null), e || (e = u), t.getYawPitchRoll(e), Laya.Vector3.scale(e, 180 / Math.PI, e);
                var n = e.x;
                return e.x = e.y, e.y = n, e;
            }(t, e);
        }, t.prototype.tween = function (t, e, n, i, o) {
            void 0 === i && (i = Laya.Ease.linearNone), void 0 === o && (o = null), e.position && Laya.Tween.to(t.transform.position, {
                x: e.position.x,
                y: e.position.y,
                z: e.position.z,
                update: new Laya.Handler(this, function () {
                    t && t.transform && t.transform.position && (t.transform.position = t.transform.position);
                })
            }, n, i), e.rotationEuler && Laya.Tween.to(t.transform.rotationEuler, {
                x: e.rotationEuler.x,
                y: e.rotationEuler.y,
                z: e.rotationEuler.z,
                update: new Laya.Handler(this, function () {
                    t && t.transform && t.transform.rotationEuler && (t.transform.rotationEuler = t.transform.rotationEuler);
                })
            }, n, i), e.localPosition && Laya.Tween.to(t.transform.localPosition, {
                x: e.localPosition.x,
                y: e.localPosition.y,
                z: e.localPosition.z,
                update: new Laya.Handler(this, function () {
                    t && t.transform && t.transform.localPosition && (t.transform.localPosition = t.transform.localPosition);
                })
            }, n, i), e.localRotationEuler && Laya.Tween.to(t.transform.localRotationEuler, {
                x: e.localRotationEuler.x,
                y: e.localRotationEuler.y,
                z: e.localRotationEuler.z,
                update: new Laya.Handler(this, function () {
                    t && t.transform && t.transform.localRotationEuler && (t.transform.localRotationEuler = t.transform.localRotationEuler);
                })
            }, n, i), e.scale && Laya.Tween.to(t.transform.localScale, {
                x: e.scale.x,
                y: e.scale.y,
                z: e.scale.z,
                update: new Laya.Handler(this, function () {
                    t && t.transform && t.transform.localScale && t.transform.setWorldLossyScale(t.transform.localScale);
                })
            }, n, i), o && Laya.timer.once(n, this, function () {
                o.run();
            });
        }, t;
    }();
    !function (t) {
        t.RewardedVideoAdShow = "RewardedVideoAdShow", t.RewardedVideoAdComplete = "RewardedVideoAdComplete",
            t.ReportAnalytics = "ReportAnalytics", t.AppShow = "AppShow", t.AppHide = "AppHide",
            t.AppPause = "AppPause", t.AppResume = "AppResume", t.DialogOpen = "DialogOpen",
            t.DialogOpenFirst = "DialogOpenFirst", t.DialogClose = "DialogClose", t.DialogCloseAll = "DialogCloseAll";
    }(h || (h = {}));
    var v, w, S, I, L = function () {
        function t() {
            var t = this;
            this._status = !0;
            var e = !1;
            pl.onShow(function () {
                vm.emit(h.AppShow), t.isPause = e;
            }), pl.onHide(function () {
                vm.emit(h.AppHide), e = t.isPause, t.isPause = !0;
            });
        }
        return Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "status", {
            get: function () {
                return this._status;
            },
            set: function (t) {
                this._status !== t && (this._status = t, vm.emit(t ? h.AppResume : h.AppPause));
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isPause", {
            get: function () {
                return !this.status;
            },
            set: function (t) {
                this.status = !t;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.onPause = function (t, e) {
            void 0 === e && (e = null), vm.on(h.AppPause, e, t);
        }, t.prototype.offPause = function (t, e) {
            void 0 === t && (t = null), void 0 === e && (e = null), t ? vm.off(h.AppPause, e, t) : vm.offAll(h.AppPause);
        }, t.prototype.onResume = function (t, e) {
            void 0 === e && (e = null), vm.on(h.AppResume, e, t);
        }, t.prototype.offResume = function (t, e) {
            void 0 === t && (t = null), void 0 === e && (e = null), t ? vm.off(h.AppResume, e, t) : vm.offAll(h.AppResume);
        }, t.prototype.onShow = function (t, e) {
            void 0 === e && (e = null), vm.on(h.AppShow, e, t);
        }, t.prototype.offShow = function (t, e) {
            void 0 === t && (t = null), void 0 === e && (e = null), t ? vm.off(h.AppShow, e, t) : vm.offAll(h.AppShow);
        }, t.prototype.onHide = function (t, e) {
            void 0 === e && (e = null), vm.on(h.AppHide, e, t);
        }, t.prototype.offHide = function (t, e) {
            void 0 === t && (t = null), void 0 === e && (e = null), t ? vm.off(h.AppHide, e, t) : vm.offAll(h.AppHide);
        }, t.prototype.restart = function () {
            pl.restart();
        }, t.prototype.exit = function () {
            pl.exit();
        }, t.prototype.pause = function () {
            this.status = !1;
        }, t.prototype.resume = function () {
            this.status = !0;
        }, t;
    }(), C = function () {
        function t() {
            this.status = !1, this.preAppIsPause = !0, this.scale = 1, this.root = null, this.hitArea = null,
                this.interactionArea = null, this.handUpSkin = "", this.handDownSkin = "", this.updateFrameIndex = 0,
                this.updateFrameLength = 40, this.steps = [], this.stepIndex = 0, this.completeCallback = null,
                this.progressCallback = null;
        }
        return Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), t._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.init = function (t) {
            void 0 === t && (t = {}), t.handUpSkin && (this.handUpSkin = t.handUpSkin), t.handDownSkin && (this.handDownSkin = t.handDownSkin),
                this.root = Laya.stage.addChild(new Laya.Box()), this.root.zOrder = 2e3, this.root.width = Laya.stage.width / this.scale,
                this.root.height = Laya.stage.height / this.scale;
            var e = new Laya.Box();
            e.cacheAs = "bitmap", this.root.addChild(e), this.maskArea = new Laya.Sprite(),
                this.maskArea.alpha = .5, this.maskArea.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"),
                e.addChild(this.maskArea), this.interactionArea = new Laya.Sprite(), this.interactionArea.blendMode = "destination-out",
                e.addChild(this.interactionArea), this.hitArea = new Laya.HitArea(), this.hitArea.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"),
                this.root.hitArea = this.hitArea, this.root.mouseEnabled = !0, this.hitGuide = new Laya.Sprite(),
                this.hitGuide.mouseEnabled = !1, this.root.addChild(this.hitGuide), this.tipsTxt = this.root.addChild(new Laya.Label()),
                this.tipsTxt.visible = !1, this.tipsTxt.font = "SimHei", this.tipsTxt.color = "#ffffff",
                this.tipsTxt.italic = !1, this.tipsTxt.bold = !1, this.tipsTxt.fontSize = 35, this.tipsTxt.anchorX = .5,
                this.tipsTxt.anchorY = .5, this.tipsImg = this.root.addChild(new Laya.Image()),
                this.tipsImg.visible = !1, this.tipsImg.anchorX = .5, this.tipsImg.anchorY = .5,
                this.hand = this.root.addChild(new Laya.Image()), this.hand.visible = !1, this.root.visible = !1;
        }, t.prototype.onUpdate = function () {
            if (this.steps[this.stepIndex] && this.steps[this.stepIndex].hitArea) {
                var t = this.steps[this.stepIndex], e = 2 - this.updateFrameIndex % this.updateFrameLength / 20 + 1;
                this.hitGuide.graphics.clear(), "rect" === this.steps[this.stepIndex].hitAreaShape ? this.hitGuide.graphics.drawRect(t.hitAreaX - t.hitAreaWidth * e / 2, t.hitAreaY - t.hitAreaHeight * e / 2, t.hitAreaWidth * e, t.hitAreaHeight * e, null, t.hitGuideLineColor, t.hitGuideLineWidth) : this.hitGuide.graphics.drawCircle(t.hitAreaX, t.hitAreaY, t.hitAreaRadius * e, null, t.hitGuideLineColor, t.hitGuideLineWidth),
                    this.updateFrameIndex++;
            }
        }, t.prototype.onStageClick = function (t) {
            this.status && (this.steps[this.stepIndex] ? null === this.steps[this.stepIndex].condition && (!this.steps[this.stepIndex].hitArea || "rect" === this.steps[this.stepIndex].hitAreaShape && this.steps[this.stepIndex].hitAreaX - this.steps[this.stepIndex].hitAreaWidth / 2 < Laya.stage.mouseX && this.steps[this.stepIndex].hitAreaX + this.steps[this.stepIndex].hitAreaWidth / 2 > Laya.stage.mouseX && this.steps[this.stepIndex].hitAreaY - this.steps[this.stepIndex].hitAreaHeight / 2 < Laya.stage.mouseY && this.steps[this.stepIndex].hitAreaY + this.steps[this.stepIndex].hitAreaHeight / 2 > Laya.stage.mouseY || "circular" === this.steps[this.stepIndex].hitAreaShape && Math.pow(this.steps[this.stepIndex].hitAreaRadius, 2) > Math.pow(Laya.stage.mouseX - this.steps[this.stepIndex].hitAreaX, 2) + Math.pow(Laya.stage.mouseY - this.steps[this.stepIndex].hitAreaY, 2)) && (this.steps[this.stepIndex].onEnd && this.steps[this.stepIndex].onEnd.runWith([this.steps[this.stepIndex].name, (this.stepIndex + 1) / this.steps.length]),
                ++this.stepIndex < this.steps.length ? (this.updateStep(), this.progressCallback && this.progressCallback.runWith([this.steps[this.stepIndex - 1].name, this.stepIndex / this.steps.length])) : (Laya.stage.off(Laya.Event.CLICK, this, this.onStageClick),
                    this.status = !1, L.I.isPause = this.preAppIsPause, this.steps = [], this.root.visible = !1,
                    this.completeCallback && this.completeCallback.run())) : (Laya.stage.off(Laya.Event.CLICK, this, this.onStageClick),
                        this.status = !1, this.steps = [], this.root.visible = !1, Laya.timer.clear(this, this.onUpdate),
                        this.completeCallback && this.completeCallback.run()));
        }, t.prototype.play = function (t, e, n) {
            var i = this;
            void 0 === e && (e = null), void 0 === n && (n = null), this.preAppIsPause = L.I.isPause,
                t.map(function (t, e) {
                    return t.name = t.name || "step_" + e, t.isPause = void 0 !== t.isPause && t.isPause,
                        t.shape = t.shape || "circular", t.isNode = !(!t.path && !t.root), t.path = t.path || "",
                        t.root = t.root || Laya.stage, t.condition = t.condition || null, t.onStart = t.onStart || null,
                        t.onEnd = t.onEnd || null, void 0 === t.mask && (t.mask = !1), t.maskX = t.maskX / i.scale || 0,
                        t.maskY = t.maskY / i.scale || 0, t.maskShape = t.maskShape || "circular", "circular" === t.maskShape ? t.maskRadius = (t.maskRadius || 50) / i.scale : (t.maskWidth = (t.maskWidth || 100) / i.scale,
                            t.maskHeight = (t.maskHeight || 100) / i.scale), void 0 === t.hitArea && (t.hitArea = !0),
                        t.hitAreaX = t.hitAreaX / i.scale || 0, t.hitAreaY = t.hitAreaY / i.scale || 0,
                        t.hitAreaShape = t.hitAreaShape || "circular", "circular" === t.hitAreaShape ? t.hitAreaRadius = (t.hitAreaRadius || 50) / i.scale : (t.hitAreaWidth = (t.hitAreaWidth || 100) / i.scale,
                            t.hitAreaHeight = (t.hitAreaHeight || 100) / i.scale), t.hitGuideLineColor = t.hitGuideLineColor || "#ffffff",
                        t.hitGuideLineWidth = t.hitGuideLineWidth || 5, t.tipsTxtX = t.tipsTxtX / i.scale || 0,
                        t.tipsTxtY = t.tipsTxtY / i.scale || 0, t.tipsTxtBgColor = t.tipsTxtBgColor || "",
                        t.tipsTxtPadding = t.tipsTxtPadding || "", t.tipsImgX = t.tipsImgX / i.scale || 0,
                        t.tipsImgY = t.tipsImgY / i.scale || 0, t.tipsImgWidth = (t.tipsImgWidth || 0) / i.scale,
                        t.tipsImgHeight = (t.tipsImgHeight || 0) / i.scale, t.handX = t.handX / i.scale || 0,
                        t.handY = t.handY / i.scale || 0, t.handToX = t.handToX / i.scale || 0, t.handToY = t.handToY / i.scale || 0,
                        t;
                }), this.steps = [], this.steps = t, this.stepIndex = 0, this.completeCallback = e,
                this.progressCallback = n, this.status = !0, this.updateStep(), this.root.visible = !0,
                Laya.stage.on(Laya.Event.CLICK, this, this.onStageClick), Laya.timer.frameLoop(2, this, this.onUpdate);
        }, t.prototype.updateStep = function () {
            var t = this;
            if (this.steps[this.stepIndex]) {
                this.root.width = Laya.stage.width / this.scale, this.root.height = Laya.stage.height / this.scale,
                    this.updateFrameIndex = 0, this.hitGuide.graphics.clear();
                var e = this.steps[this.stepIndex];
                if (e.isNode) {
                    var n = e.path ? findPath(e.path, e.root) : e.root, i = n.localToGlobal(new Laya.Point(n.width / 2, n.height / 2), !1, Laya.stage), o = n.globalScaleX * n.width, r = n.globalScaleY * n.height;
                    e.maskX = e.hitAreaX = e.handX = e.tipsTxtX = i.x, e.maskY = e.hitAreaY = e.handY = i.y,
                        e.tipsTxtY = i.y - 50, e.maskWidth = e.hitAreaWidth = o, e.maskHeight = e.hitAreaHeight = r,
                        e.maskRadius = e.hitAreaRadius = Math.sqrt(o * o + r * r) / 2, e.maskShape = e.hitAreaShape = e.shape;
                }
                if (L.I.isPause = e.isPause, e.condition) {
                    var a = this;
                    Laya.timer.frameLoop(10, a, function t() {
                        e.condition.run() && (Laya.timer.clear(a, t), e.onEnd && e.onEnd.runWith([e.name, (a.stepIndex + 1) / a.steps.length]),
                            ++a.stepIndex < a.steps.length ? (a.updateStep(), a.progressCallback && a.progressCallback.runWith([a.stepIndex / a.steps.length, a.steps[a.stepIndex - 1].name])) : (Laya.stage.off(Laya.Event.CLICK, a, a.onStageClick),
                                a.status = !1, L.I.isPause = a.preAppIsPause, a.steps = [], a.root.visible = !1,
                                Laya.timer.clear(this, this.onUpdate), a.completeCallback && a.completeCallback.run()));
                    });
                }
                if (e.onStart && e.onStart.runWith([e.name, (this.stepIndex + 1) / this.steps.length]),
                    this.interactionArea.graphics.clear(), this.hitArea.unHit.clear(), e.mask) switch (this.maskArea.visible = !0,
                    this.maskArea.graphics.clear(), this.maskArea.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"),
                    this.steps[this.stepIndex].maskShape) {
                        case "circular":
                            var s = {
                                maskRadius: 750
                            };
                            Laya.Tween.to(s, {
                                maskRadius: e.maskRadius,
                                update: new Laya.Handler(this, function () {
                                    t.interactionArea.graphics.clear(), t.interactionArea.graphics.drawCircle(e.maskX, e.maskY, s.maskRadius, "#ffffff");
                                })
                            }, 300, Laya.Ease.circOut), this.hitArea.unHit.drawCircle(e.maskX, e.maskY, e.maskRadius, "#ffffff");
                            break;

                        case "rect":
                            var d = {
                                maskWidth: Laya.stage.width,
                                maskHeight: Laya.stage.height
                            };
                            Laya.Tween.to(d, {
                                maskWidth: e.maskWidth,
                                maskHeight: e.maskHeight,
                                update: new Laya.Handler(this, function () {
                                    t.interactionArea.graphics.clear(), t.interactionArea.graphics.drawRect(e.maskX - d.maskWidth / 2, e.maskY - d.maskHeight / 2, d.maskWidth, d.maskHeight, "#ffffff");
                                })
                            }, 300, Laya.Ease.circOut), this.hitArea.unHit.drawRect(e.maskX - e.maskWidth / 2, e.maskY - e.maskHeight / 2, e.maskWidth, e.maskHeight, "#ffffff");
                    } else this.maskArea.visible = !1, this.hitArea.unHit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#ffffff");
                if (this.hitArea.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#ffffff"),
                    this.hitArea.unHit.clear(), e.hitArea) switch (this.steps[this.stepIndex].hitAreaShape) {
                        case "circular":
                            this.hitArea.unHit.drawCircle(e.hitAreaX, e.hitAreaY, e.hitAreaRadius, "#ffffff");
                            break;

                        case "rect":
                            this.hitArea.unHit.drawRect(e.hitAreaX - e.hitAreaWidth / 2, e.hitAreaY - e.hitAreaHeight / 2, e.hitAreaWidth, e.hitAreaHeight, "#ffffff");
                    } else this.hitArea.unHit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#ffffff");
                if (e.tipsTxt ? (this.tipsTxt.visible = !0, this.tipsTxt.text = e.tipsTxt, this.tipsTxt.x = e.tipsTxtX,
                    this.tipsTxt.y = e.tipsTxtY, this.tipsTxt.bgColor = e.tipsTxtBgColor, this.tipsTxt.padding = e.tipsTxtPadding) : this.tipsTxt.visible = !1,
                    e.tipsImg ? this.tipsImg.visible = !0 : this.tipsImg.visible = !1, e.hand) switch (this.handTimeLine && this.handTimeLine.total && this.handTimeLine.destroy(),
                    e.hand) {
                        case "click":
                            this.hand.visible = !0, this.hand.pos(e.handX, e.handY), this.hand.skin = this.handUpSkin,
                                this.handTimeLine = new Laya.TimeLine(), this.handTimeLine.to(this.hand, {
                                    scaleX: .8,
                                    scaleY: .8
                                }, 300).to(this.hand, {
                                    scaleX: 1,
                                    scaleY: 1
                                }, 300), this.handTimeLine.play(0, !0);
                            break;

                        case "drag":
                            this.hand.visible = !0, this.hand.pos(e.handX, e.handY), this.hand.skin = this.handUpSkin,
                                this.handTimeLine = new Laya.TimeLine(), this.handTimeLine.to(this.hand, {
                                    x: e.handX,
                                    y: e.handY
                                }, 0).to(this.hand, {
                                    scaleX: .8,
                                    scaleY: .8
                                }, 100).to(this.hand, {
                                    x: e.handToX,
                                    y: e.handToY
                                }, 1e3).to(this.hand, {
                                    scaleX: 1,
                                    scaleY: 1
                                }, 100), this.handTimeLine.play(0, !0);
                            break;

                        case "press":
                            this.hand.visible = !0, this.hand.pos(e.handX, e.handY), this.hand.skin = this.handUpSkin,
                                this.handTimeLine = new Laya.TimeLine(), this.handTimeLine.to(this.hand, {
                                    scaleX: 1,
                                    scaleY: 1
                                }, 0).to(this.hand, {
                                    scaleX: .8,
                                    scaleY: .8
                                }, 200).to(this.hand, {
                                    scaleX: 1,
                                    scaleY: 1
                                }, 200, null, 2e3), this.handTimeLine.play(0, !0);
                            break;

                        default:
                            this.hand.visible = !1, this.handTimeLine && this.handTimeLine.destroy();
                    }
            }
        }, t;
    }();
    !function (t) {
        t.DEBUG = "debug", t.WEB = "web", t.WX = "wx", t.QQ = "qq", t.TT = "tt", t.VIVO = "vivo",
            t.OPPO = "oppo", t.MEIZU = "meizu", t.SWAN = "swan", t.G4399 = "4399";
    }(v || (v = {})), function (t) {
        t[t.API = 0] = "API", t[t.BTN = 1] = "BTN";
    }(w || (w = {})), function (t) {
        t[t.STOP = 0] = "STOP", t[t.RUN = 1] = "RUN";
    }(S || (S = {})), function (t) {
        t[t.None = 0] = "None", t[t.Banner = 1] = "Banner", t[t.Interstitial = 2] = "Interstitial";
    }(I || (I = {}));
    var O, P = {
        width: 675,
        bottom: 0
    };
    function x(t, e) {
        return void 0 === e && (e = ""), Laya.LocalStorage.getItem(t) || e;
    }
    function j(t, e) {
        Laya.LocalStorage.setItem(t, e);
    }
    !function (t) {
        t[t.GuideIndex = 2001] = "GuideIndex", t[t.NativeAdIndex = 2002] = "NativeAdIndex",
            t[t.MsgIndex = 2003] = "MsgIndex", t[t.ComfirmIndex = 2004] = "ComfirmIndex", t[t.LoadingIndex = 2005] = "LoadingIndex";
    }(O || (O = {}));
    var V, E, k, T, R, B, D, U, M, H = function () {
        function t() {
            var t, e;
            this.pl = window, this.adUnitIdList = ((t = {})[I.None] = [], t[I.Banner] = [],
                t[I.Interstitial] = [], t), this.adUnitIdIndex = ((e = {})[I.None] = 0, e[I.Banner] = 0,
                    e[I.Interstitial] = 0, e), this.isEnable = !0, this.isDebug = !1, this._bannerNode = null,
                this._bannerInstance = null, this._bannerAdId = null, this._interstitialNode = null,
                this._interstitialInstance = null;
        }
        return Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.getAdUnitId = function (t) {
            if (void 0 === t && (t = I.None), this.adUnitIdList[t].length || (t = I.None), !this.adUnitIdList[t].length) return "";
            this.adUnitIdList[t][this.adUnitIdIndex[t]++ % this.adUnitIdList[t].length];
        }, Object.defineProperty(t.prototype, "isSupport", {
            get: function () {
                return this.isDebug;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.create = function (t) {
            return void 0 === t && (t = null), this.isDebug ? {
                load: function () { },
                onLoad: function (t) {
                    t({
                        adList: [{
                            adId: "testAdId00",
                            title: "广告标题",
                            desc: "广告描述",
                            icon: "comp/image.png",
                            imgUrlList: ["comp/image.png"],
                            logoUrl: "comp/image.png",
                            clickBtnTxt: "点击按钮",
                            creativeType: 0,
                            interactionType: 0
                        }]
                    });
                },
                offLoad: function (t) { },
                reportAdShow: function (t) {
                    console.log("测试-上报广告曝光");
                },
                reportAdClick: function (t) {
                    console.log("测试-上报广告点击");
                },
                destroy: function () { }
            } : this.isEnable ? this.isSupport ? (t ? t.adUnitId || (t.adUnitId = this.getAdUnitId(I.None)) : t = {
                adUnitId: this.getAdUnitId(I.None)
            }, t.adUnitId ? this._create(t) : null) : (console.warn("平台不支持原生广告"), null) : (console.warn("您的平台配置文件中未开启“原生广告”"),
                null);
        }, t.prototype._create = function (t) {
            return "function" == typeof this.pl.createNativeAd ? this.pl.createNativeAd(t) : null;
        }, t.prototype.showBannerAd = function (t) {
            var e = this;
            void 0 === t && (t = null), t || (t = {}), t.adUnitId || (t.adUnitId = this.getAdUnitId(I.Banner)),
                this.hideBannerAd(), this._bannerInstance = this.create({
                    adUnitId: t.adUnitId
                }), this._bannerInstance && (this._bannerInstance.load(), this._bannerInstance.onLoad(function (n) {
                    var i = n.adList[0].adId;
                    e._bannerAdId = i;
                    var o = n.adList[0].imgUrlList[0];
                    e._bannerInstance.reportAdShow({
                        adId: i
                    });
                    var r = t.style || P, a = r.width || Math.min(Laya.stage.width, Laya.stage.height) / 3 * 2, s = r.height || a / 4, d = Laya.stage.addChild(new Laya.Box());
                    d.zOrder = O.NativeAdIndex, d.width = a, d.height = s, d.bgColor = "#ffffff", void 0 === r.left && void 0 === r.right ? d.centerX = 0 : void 0 === r.left && "number" == typeof r.right ? d.right = r.right : d.left = r.left || 0,
                        "number" == typeof r.top && void 0 === r.bottom ? d.top = 0 : d.bottom = r.bottom || 0;
                    var l = d.addChild(new Laya.Image(o));
                    l.top = l.bottom = l.left = l.right = 0, l.on(Laya.Event.CLICK, l, function () {
                        e._bannerInstance.reportAdClick({
                            adId: i
                        });
                    });
                    var h = d.addChild(new Laya.Label("广告"));
                    h.fontSize = 20, h.bgColor = "#999999", h.color = "#000000", h.padding = "2,2,2,2",
                        h.right = h.bottom = 5, h.color = "#ffffff";
                    var u = d.addChild(new Laya.Label("╳"));
                    u.fontSize = 20, u.bgColor = "#999999", u.color = "#000000", u.padding = "2,2,2,2",
                        u.color = "#ffffff", u.left = u.top = 5, u.width = u.height = 40, u.align = "center",
                        u.valign = "middle", u.on(Laya.Event.CLICK, u, function () {
                            e.hideBannerAd();
                        }), e._bannerNode = d;
                }));
        }, t.prototype.hideBannerAd = function () {
            this._bannerNode && (this._bannerNode.removeSelf(), this._bannerNode = null), this._bannerInstance && (this._bannerInstance.destroy(),
                this._bannerInstance = null);
        }, t.prototype.clickBannerAd = function () {
            this._bannerInstance && this._bannerAdId && this._bannerInstance.reportAdClick({
                adId: this._bannerAdId
            });
        }, t.prototype.showInterstitialAd = function (t) {
            var e = this;
            void 0 === t && (t = null);
            var n = null, i = null;
            "function" == typeof t ? i = t : t && (t.adUnitId && (n = t.adUnitId), "function" == typeof t.close && (i = t.close)),
                n || (n = this.getAdUnitId(I.Interstitial)), this._interstitialInstance && (this._interstitialInstance.destroy(),
                    this._interstitialInstance = null), this._interstitialNode && (this._interstitialNode.destroy(),
                        this._interstitialNode = null), this._interstitialInstance = this.create({
                            adUnitId: n
                        }), this._interstitialInstance && (this._interstitialInstance.load(), this._interstitialInstance.onLoad(function (t) {
                            var n = t.adList[0].adId, o = t.adList[0].imgUrlList[0];
                            e._interstitialInstance.reportAdShow({
                                adId: n
                            });
                            var r = function () {
                                e._interstitialNode.removeSelf(), e._interstitialNode = null, e._interstitialInstance.destroy(),
                                    e._interstitialInstance = null, i && i();
                            }, a = Laya.stage.addChild(new Laya.Box());
                            a.zOrder = O.NativeAdIndex, a.width = Laya.stage.width, a.height = Laya.stage.height;
                            var s = a.addChild(new Laya.Box());
                            s.bgColor = "#000000", s.alpha = .5, s.top = s.bottom = s.left = s.right = 0;
                            var d = a.addChild(new Laya.Box());
                            d.width = Math.min(Laya.stage.width, Laya.stage.height) / 4 * 3, d.height = d.width / 2,
                                d.centerX = 0, d.centerY = -100, d.bgColor = "#ffffff";
                            var l = d.addChild(new Laya.Image(o));
                            l.top = l.bottom = l.left = l.right = 0, l.on(Laya.Event.CLICK, l, function () {
                                e._interstitialInstance.reportAdClick({
                                    adId: n
                                }), r();
                            });
                            var h = d.addChild(new Laya.Label("广告"));
                            h.fontSize = 20, h.bgColor = "#999999", h.color = "#000000", h.padding = "2,2,2,2",
                                h.right = h.bottom = 5, h.color = "#ffffff";
                            var u = d.addChild(new Laya.Label("╳"));
                            u.fontSize = 20, u.bgColor = "#999999", u.color = "#000000", u.padding = "2,2,2,2",
                                u.color = "#ffffff", u.left = u.top = 5, u.width = u.height = 40, u.align = "center",
                                u.valign = "middle", u.on(Laya.Event.CLICK, u, function () {
                                    r();
                                });
                            var c = a.addChild(new Laya.Button("comp/button.png", "点击查看"));
                            c.labelSize = 48, c.labelBold = !0, c.width = 250, c.height = 80, c.centerX = 0,
                                c.centerY = 100, c.labelColors = "#ffffff,#ffffff", c.on(Laya.Event.CLICK, c, function () {
                                    e._interstitialInstance.reportAdClick({
                                        adId: n
                                    }), r();
                                }), new Laya.TimeLine().to(c, {
                                    scaleX: 1.2,
                                    scaleY: 1.2
                                }, 600).to(c, {
                                    scaleX: 1,
                                    scaleY: 1
                                }, 300).play(null, !0);
                            var p = a.addChild(new Laya.Button("comp/button.png", "点击继续"));
                            p.labelSize = 48, p.labelBold = !0, p.width = 250, p.height = 80, p.centerX = 0,
                                p.centerY = 200, p.labelColors = "#ffffff,#ffffff", p.on(Laya.Event.CLICK, p, function () {
                                    r();
                                }), e._interstitialNode = a;
                        }));
        }, t._I = null, t;
    }(), N = function () {
        function t() {
            this.pl = {}, this.systemInfo = {}, this.vibrateSupportStatus = !1, this._vibrateEnableStatus_isInit = !1,
                this._vibrateEnableStatus = !0, this.shareSupportStatus = !1, this.shareEnableStatus = !1,
                this.shareAssetList = [], this.bannerAdIds = [], this.bannerAdIndex = 0, this.bannerAdEnableStatus = !1,
                this.rewardedVideoAdIds = [], this.rewardedVideoAdIndex = 0, this.rewardedVideoAdEnableStatus = !1,
                this.interstitialAdIds = [], this.interstitialAdIndex = 0, this.interstitialAdEnableStatus = !1,
                this.interstitialAdShowStatus = !1, this.interstitialAdDebug = !1, this.boxAdIds = [],
                this.boxAdIndex = 0, this.boxAdEnableStatus = !1, this.boxAdShowStatus = !1, this.boxAdDebug = !1,
                this.blockAdIds = [], this.blockAdIndex = 0, this.blockAdEnableStatus = !1, this.blockAdDebug = !1,
                this.gameBannerAdIds = [], this.gameBannerAdIndex = 0, this.gameBannerAdEnableStatus = !1,
                this.gamePortalAdIds = [], this.gamePortalAdIndex = 0, this.gamePortalAdEnableStatus = !1,
                this.subpackageEnableStatus = !1, this.subpackageRetryNum = 3, this.recorderEnableStatus = !1,
                this.recorderDuration = 300, this.recorderShareMode = w.API, this.recorderRunStatus = S.STOP,
                this.onWx = !1, this.onQQ = !1, this.onTT = !1, this.onSwan = !1, this.onVivo = !1,
                this.onOppo = !1, this.onMi = !1, this.onMgc = !1, this.onWeb = !1, this.onAndroid = !1,
                this.onIos = !1, this.onMobAssist = !1, this.onDebug = !1, this._msgRoot = null;
        }
        return t.prototype.init = function (t) {
            void 0 === t && (t = {}), this.systemInfo = this.getSystemInfoSync(), t.bannerAd && t.bannerAd.enable && t.bannerAd.ids && (this.bannerAdEnableStatus = !0,
                this.bannerAdIds = t.bannerAd.ids, this.initBannerAd()), t.rewardedVideoAd && t.rewardedVideoAd.enable && t.rewardedVideoAd.ids && (this.rewardedVideoAdEnableStatus = !0,
                    this.rewardedVideoAdIds = t.rewardedVideoAd.ids), t.interstitialAd && t.interstitialAd.enable && t.interstitialAd.ids && (this.interstitialAdEnableStatus = !0,
                        this.interstitialAdIds = t.interstitialAd.ids), t.boxAd && t.boxAd.enable && t.boxAd.ids && (this.boxAdEnableStatus = !0,
                            this.boxAdDebug = t.boxAd.debug || !1, this.boxAdIds = t.boxAd.ids), t.blockAd && t.blockAd.enable && t.blockAd.ids && (this.blockAdEnableStatus = !0,
                                this.blockAdDebug = t.blockAd.debug || !1, this.blockAdIds = t.blockAd.ids), t.nativeAd && t.nativeAd.enable && t.nativeAd.ids && (this.nativeAd.isEnable = !0,
                                    this.nativeAd.adUnitIdList = t.nativeAd.ids), t.gameBannerAd && t.gameBannerAd.enable && t.gameBannerAd.ids && (this.gameBannerAdEnableStatus = !0,
                                        this.gameBannerAdIds = t.gameBannerAd.ids), t.gamePortalAd && t.gamePortalAd.enable && t.gamePortalAd.ids && (this.gamePortalAdEnableStatus = !0,
                                            this.gamePortalAdIds = t.gamePortalAd.ids), t.subpackage && t.subpackage.enable && (this.subpackageEnableStatus = !0,
                                                this.subpackageRetryNum = t.subpackage.retryNum || 3), t.share && t.share.enable && t.share.asset && (this.shareEnableStatus = !0,
                                                    this.shareAssetList = t.share.asset, this.initShare()), t.recorder && t.recorder.enable && (this.recorderEnableStatus = !0,
                                                        this.recorderDuration = t.recorder.duration || 300), this._init();
        }, t.prototype._init = function () { }, t.prototype.getSystemInfoSync = function () {
            return "function" == typeof this.pl.getSystemInfoSync ? this.pl.getSystemInfoSync() : {};
        }, t.prototype.getLaunchOptionsSync = function () {
            return "function" == typeof this.pl.getLaunchOptionsSync ? this.pl.getLaunchOptionsSync() : {};
        }, t.prototype.onShow = function (t) {
            "function" == typeof this.pl.onShow && this.pl.onShow(t);
        }, t.prototype.onHide = function (t) {
            "function" == typeof this.pl.onHide && this.pl.onHide(t);
        }, t.prototype.offShow = function (t) {
            "function" == typeof this.pl.offShow && this.pl.offShow(t);
        }, t.prototype.offHide = function (t) {
            "function" == typeof this.pl.offHide && this.pl.offHide(t);
        }, t.prototype.onError = function (t) {
            "function" == typeof this.pl.onError && this.pl.onError(t);
        }, t.prototype.offError = function (t) {
            "function" == typeof this.pl.offError && this.pl.offError(t);
        }, t.prototype.restart = function () { }, t.prototype.exit = function () { }, t.prototype.getStorageItem = function (t, e) {
            return void 0 === e && (e = ""), Laya.LocalStorage.getItem(t) || e;
        }, t.prototype.setStorageItem = function (t, e) {
            Laya.LocalStorage.setItem(t, e);
        }, Object.defineProperty(t.prototype, "vibrateEnableStatus", {
            get: function () {
                return this._vibrateEnableStatus_isInit && (this._vibrateEnableStatus_isInit = !0,
                    this._vibrateEnableStatus = "1" === this.getStorageItem("PL_VIBRATE", "1")), this._vibrateEnableStatus;
            },
            set: function (t) {
                t !== this._vibrateEnableStatus && (this._vibrateEnableStatus = t, this.getStorageItem("PL_VIBRATE", t ? "1" : "0"));
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.vibrateShort = function () {
            this.vibrateSupportStatus && this.vibrateEnableStatus && "function" == typeof this.pl.vibrateShort && this.pl.vibrateShort();
        }, t.prototype.vibrateLong = function () {
            this.vibrateSupportStatus && this.vibrateEnableStatus && "function" == typeof this.pl.vibrateLong && this.pl.vibrateLong();
        }, t.prototype.startVibrate = function () { }, t.prototype.stopVibrate = function () { },
            Object.defineProperty(t.prototype, "shareStatus", {
                get: function () {
                    return this.shareEnableStatus && this.shareSupportStatus;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.getShareAsset = function () {
                return this.shareAssetList.length ? this.shareAssetList[Math.floor(Math.random() * this.shareAssetList.length)] : {};
            }, t.prototype.initShare = function (t) {
                void 0 === t && (t = {});
            }, t.prototype.share = function (t) {
                void 0 === t && (t = {});
            }, Object.defineProperty(t.prototype, "bannerAdId", {
                get: function () {
                    return this.bannerAdIds.length ? this.bannerAdIds[++this.bannerAdIndex % this.bannerAdIds.length] : "";
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "bannerAdSupportStatus", {
                get: function () {
                    return !1;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "bannerAdStatus", {
                get: function () {
                    return this.bannerAdEnableStatus && this.bannerAdSupportStatus;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "bannerAdShowStatus", {
                get: function () {
                    return !1;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.initBannerAd = function () { }, t.prototype.showBannerAd = function (t) {
                void 0 === t && (t = {});
            }, t.prototype.hideBannerAd = function () { }, t.prototype.refreshBannerAd = function () { },
            Object.defineProperty(t.prototype, "rewardedVideoAdId", {
                get: function () {
                    return this.rewardedVideoAdIds.length ? this.rewardedVideoAdIds[++this.rewardedVideoAdIndex % this.rewardedVideoAdIds.length] : "";
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rewardedVideoAdSupportStatus", {
                get: function () {
                    return !1;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rewardedVideoAdStatus", {
                get: function () {
                    return this.rewardedVideoAdEnableStatus && this.rewardedVideoAdSupportStatus;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.showRewardedVideoAd = function (t) {
                void 0 === t && (t = {}), this._debug_showRewardedVideoAd(t);
            }, t.prototype._debug_showRewardedVideoAd = function (t) {
                void 0 === t && (t = {}), this.confirm("模拟看完视频广告？", {}, function () {
                    "function" == typeof t.success && t.success(), "function" == typeof t.complete && t.complete();
                }, function () {
                    "function" == typeof t.fail && t.fail(), "function" == typeof t.complete && t.complete();
                });
            }, Object.defineProperty(t.prototype, "interstitialAdId", {
                get: function () {
                    return this.interstitialAdIds.length ? this.interstitialAdIds[++this.interstitialAdIndex % this.interstitialAdIds.length] : "";
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "interstitialAdSupportStatus", {
                get: function () {
                    return !1;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "interstitialAdStatus", {
                get: function () {
                    return this.interstitialAdEnableStatus && this.interstitialAdSupportStatus;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.showInterstitialAd = function (t) {
                void 0 === t && (t = null), this.interstitialAdStatus && !this.interstitialAdDebug || "function" == typeof t && t();
            }, Object.defineProperty(t.prototype, "nativeAd", {
                get: function () {
                    return H.I;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "boxAdId", {
                get: function () {
                    return this.boxAdIds.length ? this.boxAdIds[++this.boxAdIndex % this.boxAdIds.length] : "";
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "boxAdSupportStatus", {
                get: function () {
                    return !1;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "boxAdStatus", {
                get: function () {
                    return this.boxAdEnableStatus && this.boxAdSupportStatus;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.showBoxAd = function (t) {
                void 0 === t && (t = null), this.boxAdStatus && !this.boxAdDebug || "function" == typeof t && t();
            }, Object.defineProperty(t.prototype, "blockAdId", {
                get: function () {
                    return this.blockAdIds.length ? this.blockAdIds[++this.blockAdIndex % this.blockAdIds.length] : "";
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "blockAdSupportStatus", {
                get: function () {
                    return !1;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "blockAdStatus", {
                get: function () {
                    return this.blockAdEnableStatus && this.blockAdSupportStatus;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.createBlockAd = function (t, e, n, i) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === i && (i = "landscape"),
                    this.blockAdStatus && this.blockAdDebug;
            }, t.prototype.destroyBlockAd = function (t) {
                this.blockAdStatus && this.blockAdDebug;
            }, Object.defineProperty(t.prototype, "gameBannerAdId", {
                get: function () {
                    return this.gameBannerAdIds.length ? this.gameBannerAdIds[++this.gameBannerAdIndex % this.gameBannerAdIds.length] : "";
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gameBannerAdSupportStatus", {
                get: function () {
                    return !1;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gameBannerAdStatus", {
                get: function () {
                    return this.gameBannerAdEnableStatus && this.gameBannerAdSupportStatus;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.showGameBannerAd = function () { }, t.prototype.hideGameBannerAd = function () { },
            Object.defineProperty(t.prototype, "gamePortalAdId", {
                get: function () {
                    return this.gamePortalAdIds.length ? this.gamePortalAdIds[++this.gamePortalAdIndex % this.gamePortalAdIds.length] : "";
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gamePortalAdSupportStatus", {
                get: function () {
                    return !1;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gamePortalAdStatus", {
                get: function () {
                    return this.gamePortalAdEnableStatus && this.gamePortalAdSupportStatus;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.showGamePortalAd = function (t) {
                void 0 === t && (t = null);
            }, Object.defineProperty(t.prototype, "subpackageSupportStatus", {
                get: function () {
                    return "function" == typeof this.pl.loadSubpackage;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "subpackageStatus", {
                get: function () {
                    return this.subpackageEnableStatus && this.subpackageSupportStatus;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.loadSubpackage = function (t, e, n) {
                void 0 === e && (e = null), void 0 === n && (n = null), e && e(!0);
            }, Object.defineProperty(t.prototype, "recorderSupportStatus", {
                get: function () {
                    return !1;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "recorderStatus", {
                get: function () {
                    return this.recorderEnableStatus && this.recorderSupportStatus;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "Recorder", {
                get: function () {
                    return {};
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.shareVideo = function (t) {
                void 0 === t && (t = {});
            }, Object.defineProperty(t.prototype, "msgRoot", {
                get: function () {
                    return this._msgRoot || (this._msgRoot = new Laya.Box(), this._msgRoot.name = "msgRoot",
                        this._msgRoot.zOrder = 3e3, Laya.stage.addChild(this._msgRoot)), this._msgRoot;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.msg = function (t, e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = null);
                var i = new Laya.Label(t);
                i.font = "Arial", i.color = "#ffffff", i.fontSize = 30, i.bgColor = "rgba(0,0,0,0.5)",
                    i.anchorX = i.anchorY = .5, i.padding = "15,15,15,15", i.x = Laya.stage.width / 2,
                    i.y = Laya.stage.height / 2, this.msgRoot.addChild(i), Laya.timer.once(e.time || 1e3, Laya.stage, function () {
                        i.removeSelf(), "function" == typeof n && n();
                    });
            }, t.prototype.confirm = function (t, e, n, i) {
                var o, r, a, s = this.msgRoot.addChild(new Laya.Box()), d = s.addChild(new Laya.Sprite()), l = s.addChild(new Laya.Label()), h = s.addChild(new Laya.Label()), u = s.addChild(new Laya.Label()), c = s.addChild(new Laya.Label());
                h.dataSource = u.dataSource = c.dataSource = l.dataSource = {
                    padding: "20,20,20,20",
                    font: "SimHei",
                    fontSize: 30,
                    width: .6 * Laya.stage.width,
                    color: "#000000",
                    align: "center",
                    x: 0,
                    y: 0,
                    text: "提示",
                    overflow: "hidden"
                }, l.dataSource = {
                    padding: "20,20,40,20",
                    overflow: "",
                    fontSize: 25,
                    wordWrap: !0,
                    text: t,
                    color: e.contentColor || "#5A5A5A",
                    y: h.height
                }, u.dataSource = {
                    text: e.cancelText || "否",
                    width: h.width / 2,
                    y: h.height + l.height
                }, c.dataSource = {
                    text: e.yesText || "是",
                    width: h.width / 2,
                    color: "#169C24",
                    y: h.height + l.height,
                    x: h.width / 2
                }, s.dataSource = {
                    width: .6 * Laya.stage.width,
                    height: h.height + l.height + c.height,
                    x: .2 * Laya.stage.width,
                    y: (Laya.stage.height - h.height - l.height - c.height) / 2
                }, d.graphics.drawPath(0, 0, [["moveTo", 0 + (a = 10), 0], ["lineTo", 0 + (o = s.width) - a, 0], ["arcTo", 0 + o, 0, 0 + o, 10, a], ["lineTo", 0 + o, 0 + (r = s.height) - a], ["arcTo", 0 + o, 0 + r, 0 + o - a, 0 + r, a], ["lineTo", 10, 0 + r], ["arcTo", 0, 0 + r, 0, 0 + r - a, a], ["lineTo", 0, 10], ["arcTo", 0, 0, 10, 0, a], ["closePath"]], {
                    fillStyle: "#FFFFFF"
                }), d.graphics.drawLine(0, h.height + l.height, s.width, h.height + l.height, "#D2D2D2", 1),
                    d.graphics.drawLine(s.width / 2, h.height + l.height, s.width / 2, s.height, "#D2D2D2", 1),
                    u.on(Laya.Event.CLICK, this, function (t) {
                        s.removeSelf(), i && i();
                    }), c.on(Laya.Event.CLICK, this, function (t) {
                        s.removeSelf(), n && n();
                    });
            }, t.prototype.showLoading = function () {
                "function" == typeof this.pl.showLoading && this.pl.showLoading({});
            }, t.prototype.hideLoading = function () {
                "function" == typeof this.pl.hideLoading && this.pl.hideLoading({});
            }, t.prototype.reportAnalytics = function (t, e) {
                void 0 === e && (e = null), "function" == typeof this.pl.reportAnalytics && this.pl.reportAnalytics(t, e),
                    vm.emit(h.ReportAnalytics, [t, e]);
            }, t;
    }(), X = function () {
        function t(t) {
            this.pl = window, this.status = !1, this.showStatus = !1, this.adUnitId = "", this.adIntervals = 30,
                this._style = {
                    centerX: 0,
                    bottom: 0
                }, this.instance = null, this._timer = null, console.log("BaseSingleBanner>constructor", t),
                this.adUnitId = t;
        }
        return t.prototype.init = function () {
            this.create();
        }, t.prototype.create = function () {
            var t = this;
            this._timer && clearTimeout(this._timer), this.instance && this.destroy(), this.instance = this.pl.createBannerAd({
                adUnitId: this.adUnitId,
                adIntervals: this.adIntervals,
                style: this.getStyle()
            }), this.status = !0, this.instance.onError(function (e) {
                console.error("BannerAd:" + t.adUnitId + ",Err:" + JSON.stringify(e)), t.status = !1;
            }), this.instance.onResize(function (e) {
                var n = t.getStyle();
                t.instance.style.left = n.left, t.instance.style.top = n.top;
            });
        }, t.prototype.show = function (t) {
            void 0 === t && (t = {
                centerX: 0,
                bottom: 0
            }), console.log("BannerAd-show", t), this._style = t;
            var e = this.getStyle();
            console.log("style", e), this.instance.style.top = e.top, this.instance.style.left = e.left,
                this.instance.style.width = e.width, this.instance.show(), this.showStatus = !0;
        }, t.prototype.hide = function () {
            console.log("BannerAd-hide"), this.instance.hide(), this.showStatus = !1;
        }, t.prototype.destroy = function () {
            this.instance.destroy(), this.instance = null, this.status = !1;
        }, t.prototype.getStyle = function () {
            var t = this.pl.getSystemInfoSync(), e = t.windowWidth / Laya.stage.width, n = "number" == typeof this._style.width ? this._style.width * e : this.instance ? this.instance.style.width : .8 * t.windowWidth, i = this.instance && n === this.instance.style.width && this.instance.style.height ? this.instance.style.height : n / 3, o = (this._style.top || 0) * e, r = (this._style.left || 0) * e;
            if ("number" == typeof this._style.centerX) {
                var a = this._style.centerX * e;
                r = (t.windowWidth - n) / 2 + a;
            } else if ("number" == typeof this._style.right) {
                var s = this._style.right * e;
                r = t.windowWidth - n - s;
            }
            if ("number" == typeof this._style.centerY) {
                var d = this._style.centerY * e;
                o = (t.windowHeight - i) / 2 + d;
            } else if ("number" == typeof this._style.bottom) {
                var l = this._style.bottom * e;
                o = t.windowHeight - i - l;
            }
            return {
                top: o,
                left: r,
                width: n
            };
        }, t;
    }(), W = (M = function (t, e) {
        return (M = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        M(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n());
    }), Y = function (t) {
        function e(e) {
            void 0 === e && (e = "");
            var n = t.call(this, e) || this;
            return n.pl = window, n;
        }
        return W(e, t), e.prototype.init = function () {
            this.create();
        }, e.prototype.create = function () {
            this._timer && clearTimeout(this._timer), this.instance && this.destroy();
            var t = new Laya.Box();
            t.bgColor = "#999999";
            var e = new Laya.Label("Banner广告");
            e.fontSize = 48, t.addChild(e), e.centerX = e.centerY = 0, t.visible = !1, t.width = Laya.stage.width,
                t.height = t.width / 3, t.zOrder = 3e3, Laya.stage.addChild(t), this.instance = t,
                this.status = !0;
        }, e.prototype.show = function (t) {
            void 0 === t && (t = {
                centerX: 0,
                bottom: 0
            }), console.log("BannerAd-show", t), this._style = t;
            var e = this.getStyle();
            console.log("style", e), this.instance.top = e.top, this.instance.left = e.left,
                this.instance.width = e.width, this.instance.height = e.width / 3, this.instance.visible = !0,
                this.showStatus = !0;
        }, e.prototype.hide = function () {
            console.log("BannerAd-hide"), this.instance.visible = !1, this.showStatus = !1;
        }, e.prototype.destroy = function () {
            this.instance.removeSelf(), this.instance = null, this.status = !1;
        }, e.prototype.getStyle = function () {
            var t = {
                windowWidth: Laya.stage.width,
                windowHeight: Laya.stage.height
            }, e = "number" == typeof this._style.width ? this._style.width : this.instance ? this.instance.width : t.windowWidth, n = this.instance && e === this.instance.width && this.instance.height ? this.instance.height : e / 3, i = this._style.top || 0, o = this._style.left || 0;
            if ("number" == typeof this._style.centerX) {
                var r = this._style.centerX;
                o = (t.windowWidth - e) / 2 + r;
            } else if ("number" == typeof this._style.right) {
                var a = this._style.right;
                o = t.windowWidth - e - a;
            }
            if ("number" == typeof this._style.centerY) {
                var s = this._style.centerY;
                i = (t.windowHeight - n) / 2 + s;
            } else if ("number" == typeof this._style.bottom) {
                var d = this._style.bottom;
                i = t.windowHeight - n - d;
            }
            return {
                top: i,
                left: o,
                width: e
            };
        }, e;
    }(X), G = (U = function (t, e) {
        return (U = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        U(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n());
    }), z = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.bannerAdInstance = null, e;
        }
        return G(e, t), e.prototype._init = function () {
            this.initBannerAd(), this.nativeAd.isDebug = !0;
        }, Object.defineProperty(e.prototype, "bannerAdSupportStatus", {
            get: function () {
                return !0;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "bannerAdStatus", {
            get: function () {
                return this.bannerAdEnableStatus && this.bannerAdSupportStatus;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "bannerAdShowStatus", {
            get: function () {
                return this.bannerAdInstance.showStatus;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.initBannerAd = function () {
            this.bannerAdStatus && this.bannerAdIds.length && (this.bannerAdInstance = new Y(this.bannerAdId));
        }, e.prototype.showBannerAd = function (t) {
            void 0 === t && (t = {}), this.bannerAdInstance && this.bannerAdInstance.show(t.style || {
                centerX: 0,
                bottom: 0
            });
        }, e.prototype.hideBannerAd = function () {
            this.bannerAdInstance && this.bannerAdInstance.hide();
        }, e;
    }(N), F = function () {
        function t(t) {
            this.status = !1, this.adUnitId = "", this.adIntervals = 30, this._style = {
                centerX: 0,
                bottom: 0
            }, this.instance = null, this._timer = null, this.adUnitId = t, this.create();
        }
        return t.prototype.create = function () {
            var t = this;
            this._timer && clearTimeout(this._timer), this.instance && this.destroy(), this.instance = wx.createBannerAd({
                adUnitId: this.adUnitId,
                adIntervals: this.adIntervals,
                style: this.getStyle()
            }), this.status = !0, this.instance.onError(function (e) {
                console.error("BannerAd:" + t.adUnitId + ",Err:" + JSON.stringify(e)), t.status = !1,
                    -1 !== [1e3, 1003, 1004].indexOf(e.errCode) && (t._timer = setTimeout(t.create, 1e3));
            }), this.instance.onResize(function (e) {
                var n = t.getStyle();
                t.instance.style.left = n.left, t.instance.style.top = n.top;
            });
        }, t.prototype.show = function (t) {
            void 0 === t && (t = {
                centerX: 0,
                bottom: 0
            }), this._style = t;
            var e = this.getStyle();
            this.instance.style.top = e.top, this.instance.style.left = e.left, this.instance.style.width = e.width,
                this.instance.show();
        }, t.prototype.hide = function () {
            this.instance.hide();
        }, t.prototype.destroy = function () {
            this.instance.destroy(), this.instance = null;
        }, t.prototype.getStyle = function () {
            var t = wx.getSystemInfoSync(), e = t.windowWidth / Laya.stage.width, n = "number" == typeof this._style.width ? this._style.width * e : this.instance ? this.instance.style.realWidth : .8 * t.windowWidth, i = this.instance && n === this.instance.style.realWidth ? this.instance.style.realHeight : n / 3, o = (this._style.top || 0) * e, r = (this._style.left || 0) * e;
            if ("number" == typeof this._style.centerX) {
                var a = this._style.centerX * e;
                r = (t.windowWidth - n) / 2 + a;
            } else if ("number" == typeof this._style.right) {
                var s = this._style.right * e;
                r = t.windowWidth - n - s;
            }
            if ("number" == typeof this._style.centerY) {
                var d = this._style.centerY * e;
                o = (t.windowHeight - i) / 2 + d;
            } else if ("number" == typeof this._style.bottom) {
                var l = this._style.bottom * e;
                o = t.windowHeight - i - l;
            }
            return {
                top: o,
                left: r,
                width: n
            };
        }, t;
    }(), J = function () {
        function t() {
            this.enableStatus = !1, this.showStatus = !1, this.adUnitIdArr = [], this.adInstanceObj = {},
                this.index = 0, this._timer = null;
        }
        return Object.defineProperty(t.prototype, "status", {
            get: function () {
                for (var t in this.adInstanceObj) if (this.adInstanceObj[t].status) return !0;
                return !1;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.init = function (t) {
            var e = this;
            console.log("conf", JSON.stringify(t)), this.enableStatus = t.enable, this.adUnitIdArr = t.ids || [],
                this.adUnitIdArr.forEach(function (t) {
                    e.adInstanceObj[t] = new F(t);
                });
        }, t.prototype.show = function (t, e) {
            var n = this;
            void 0 === t && (t = {
                centerX: 0,
                bottom: 0
            }), void 0 === e && (e = 30), console.log("---------------------------------------------------------"),
                console.log("WxMultiBanner-show", t), this.enableStatus && (this.hide(), e < 30 ? (this._show(this.nextAdUnitId, t),
                    this._timer = setInterval(function () {
                        n._hide(n.curAdUnitId), n._show(n.nextAdUnitId, t);
                    }, 1e3 * e)) : this._show(this.nextAdUnitId, t), this.showStatus = !0);
        }, t.prototype._show = function (t, e) {
            void 0 === e && (e = {
                centerX: 0,
                bottom: 0
            }), t && this.adInstanceObj[t] && this.adInstanceObj[t].show(e);
        }, t.prototype._hide = function (t) {
            t && this.adInstanceObj[t] && this.adInstanceObj[t].hide();
        }, t.prototype.hide = function () {
            for (var t in this.showStatus = !1, this._timer && (clearInterval(this._timer),
                this._timer = null), this.adInstanceObj) this.adInstanceObj[t].hide();
        }, t.prototype.refresh = function () {
            for (var t in this.adInstanceObj) this.adInstanceObj[t].create();
        }, Object.defineProperty(t.prototype, "curAdUnitId", {
            get: function () {
                return this.adUnitIdArr[this.index];
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "nextAdUnitId", {
            get: function () {
                for (var t = this.index + 1; t <= this.index + this.adUnitIdArr.length; t++) if (this.adInstanceObj[this.adUnitIdArr[t % this.adUnitIdArr.length]].status) return this.index = t % this.adUnitIdArr.length,
                    this.adUnitIdArr[t % this.adUnitIdArr.length];
                return "";
            },
            enumerable: !1,
            configurable: !0
        }), t;
    }(), K = (D = function (t, e) {
        return (D = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        D(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n());
    }), q = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.pl = window.wx, e.vibrateSupportStatus = !0, e._rewardedVideoAd_cache = null,
                e._rewardedVideoAd_close = null, e._rewardedVideoAd_error = null, e._interstitialAd_cache = null,
                e._interstitialAd_close = null, e._interstitialAd_error = null, e.shareSupportStatus = !0,
                e;
        }
        return K(e, t), e.prototype._init = function () { }, e.prototype.startVibrate = function () {
            this.vibrateEnableStatus && this.vibrateShort;
        }, e.prototype.stopVibrate = function () { }, Object.defineProperty(e.prototype, "bannerAdSupportStatus", {
            get: function () {
                return "function" == typeof this.pl.createBannerAd;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "bannerAdStatus", {
            get: function () {
                return this.bannerAdEnableStatus && this.bannerAdSupportStatus && J.I.status;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "bannerAdShowStatus", {
            get: function () {
                return J.I.showStatus;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.initBannerAd = function () {
            J.I.init({
                enable: this.bannerAdEnableStatus,
                ids: this.bannerAdIds
            });
        }, e.prototype.showBannerAd = function (t) {
            void 0 === t && (t = {}), J.I.show(t.style || {
                centerX: 0,
                bottom: 0
            }, t.interval);
        }, e.prototype.hideBannerAd = function () {
            J.I.hide();
        }, e.prototype.refreshBannerAd = function () {
            J.I.refresh();
        }, Object.defineProperty(e.prototype, "rewardedVideoAdSupportStatus", {
            get: function () {
                return !0;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.showRewardedVideoAd = function (t) {
            if (void 0 === t && (t = {}), this.rewardedVideoAdStatus) if ("function" == typeof t.before && t.before(),
                this._rewardedVideoAd_cache) this._showRewardedVideoAd(t); else {
                var e = this;
                this._rewardedVideoAd_cache = this.pl.createRewardedVideoAd({
                    adUnitId: this.rewardedVideoAdId
                }), this._rewardedVideoAd_cache.onError(function (t) {
                    console.log(JSON.stringify(t));
                }), this._rewardedVideoAd_cache.load().then(function () {
                    e._showRewardedVideoAd(t);
                });
            } else "function" == typeof t.error && t.error("暂未开启激励视频广告");
        }, e.prototype._showRewardedVideoAd = function (t) {
            void 0 === t && (t = {}), this._rewardedVideoAd_cache && (this._rewardedVideoAd_close && this._rewardedVideoAd_cache.offClose(this._rewardedVideoAd_close),
                this._rewardedVideoAd_error && this._rewardedVideoAd_cache.offError(this._rewardedVideoAd_error),
                this._rewardedVideoAd_error = function (e) {
                    t.error && t.error(JSON.stringify(e));
                }, this._rewardedVideoAd_close = function (e) {
                    t.complete && t.complete(e.isEnded), e.isEnded ? t.success && t.success() : t.fail && t.fail();
                }, this._rewardedVideoAd_cache.onClose(this._rewardedVideoAd_close), this._rewardedVideoAd_cache.show());
        }, Object.defineProperty(e.prototype, "interstitialAdSupportStatus", {
            get: function () {
                return "function" == typeof this.pl.createInterstitialAd;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.showInterstitialAd = function (e) {
            var n = this;
            void 0 === e && (e = null), t.prototype.showInterstitialAd.call(this, e), this._interstitialAd_cache ? this._showInterstitialAd(e) : (this._interstitialAd_cache = this.pl.createInterstitialAd({
                adUnitId: this.interstitialAdId
            }), this._interstitialAd_cache && this._interstitialAd_cache.onLoad(function () {
                n._showInterstitialAd(e);
            }));
        }, e.prototype._showInterstitialAd = function (t) {
            var e = this;
            void 0 === t && (t = null);
            var n = this;
            this._interstitialAd_cache.onClose(function () {
                t && t(!0), n._interstitialAd_cache.destroy(), n._interstitialAd_cache = e.pl.createInterstitialAd({
                    adUnitId: n.interstitialAdId
                });
            }), this._interstitialAd_cache.onError(function (e) {
                console.log("interstitialAd onError", JSON.stringify(e)), t && t(!1);
            }), this._interstitialAd_cache.show().then(function () {
                console.log("展示成功");
            }).catch(function (e) {
                t && t(!1), console.log("catch", e);
            });
        }, e.prototype.reportAnalytics = function (e, n) {
            void 0 === n && (n = null), t.prototype.reportAnalytics.call(this, e, n), "function" == typeof this.pl.reportEvent && this.pl.reportEvent(e, n),
                window.uma && "function" == typeof window.uma.trackEvent && window.uma.trackEvent(e, n);
        }, e.prototype.msg = function (t, e, n) {
            void 0 === e && (e = {}), void 0 === n && (n = null), this.pl.showToast({
                title: t,
                icon: "none",
                duration: e.time || 1500,
                complete: function () {
                    setTimeout(function () {
                        "function" == typeof n && n();
                    }, e.time || 1500);
                }
            });
        }, e.prototype.confirm = function (t, e, n, i) {
            this.pl.showModal({
                title: "提示",
                content: t,
                cancelText: e.cancelText || "取消",
                cancelColor: e.cancelColor || "#000000",
                confirmText: e.confirmText || "确定",
                confirmColor: e.confirmColor || "#576B95",
                success: function (t) {
                    t.confirm ? n && n() : t.cancel && i && i();
                }
            });
        }, e.prototype.loadSubpackage = function (t, e, n) {
            if (void 0 === e && (e = null), void 0 === n && (n = null), this.subpackageStatus) {
                console.log("开始加载分包", t);
                var i = 0, o = this.subpackageRetryNum, r = this;
                !function a() {
                    var s = r.pl.loadSubpackage({
                        name: t,
                        success: function (n) {
                            console.log("分包“" + t + "”加载成功"), e && e(!0);
                        },
                        fail: function (n) {
                            ++i < o ? (console.log("分包“" + t + "”加载失败" + i + "次"), r.msg("分包“" + t + "”加载失败" + i + "次"),
                                setTimeout(function () {
                                    a();
                                }, 1e3)) : (console.log("分包“" + t + "”加载失败,请检查您的网络"), r.msg("分包“" + t + "”加载失败,请检查您的网络"),
                                    e && e(!1));
                        }
                    });
                    s && "function" == typeof s.onProgressUpdate && s.onProgressUpdate(function (t) {
                        n && n(t.progress);
                    });
                }();
            } else console.log("当前客户端版本过低，无法使用该功能，请升级客户端或关闭后重启更新"), this.msg("当前客户端版本过低，无法使用该功能，请升级客户端或关闭后重启更新。"),
                e && e(!1);
        }, e.prototype.initShare = function () {
            var t = this;
            this.pl.showShareMenu({});
            var e = function () {
                var e = t.getShareAsset();
                return {
                    title: e.title || "您好",
                    imageUrl: e.imageUrl || void 0,
                    imageUrlId: e.imageUrlId || void 0
                };
            };
            window.uma && "function" == typeof window.uma.onShareAppMessage ? window.uma.onShareAppMessage(e) : this.pl.onShareAppMessage(e);
        }, e.prototype.share = function (t) {
            void 0 === t && (t = {});
            var e = this.getShareAsset(), n = {
                title: e.title || "您好",
                imageUrl: e.imageUrl || void 0,
                imageUrlId: e.imageUrlId || void 0
            };
            window.uma && "function" == typeof window.uma.shareAppMessage ? window.uma.shareAppMessage(n) : this.pl.shareAppMessage(n);
        }, e;
    }(N), Q = (B = function (t, e) {
        return (B = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        B(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n());
    }), Z = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.pl = window.qg, e.bannerAdCache = null, e._bannerAdShowStatus = !1, e._rewardedVideoAd_cache = null,
                e._rewardedVideoAd_loadStatus = !0, e._rewardedVideoAd_showStatus = !1, e._rewardedVideoAd_obj = {},
                e.gameBannerAdCache = null, e.gamePortalAdCache = null, e;
        }
        return Q(e, t), e.prototype._init = function () { }, e.prototype.getStorageItem = function (t, e) {
            return void 0 === e && (e = ""), localStorage.getItem(t) || e;
        }, e.prototype.setStorageItem = function (t, e) {
            localStorage.setItem(t, e);
        }, Object.defineProperty(e.prototype, "bannerAdSupportStatus", {
            get: function () {
                return this.systemInfo.platformVersionCode >= 1051;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "bannerAdShowStatus", {
            get: function () {
                return this._bannerAdShowStatus;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.showBannerAd = function (t) {
            return void 0 === t && (t = {}), this.bannerAdEnableStatus ? this.bannerAdSupportStatus ? (this.bannerAdCache = this.pl.createBannerAd({
                adUnitId: this.bannerAdId,
                style: {}
            }), this.bannerAdCache.show(), this.bannerAdCache.onError(function (t) {
                console.log("showBannerAd show", t);
            }), this._bannerAdShowStatus = !0, void console.log("showBannerAd show")) : (console.log("快应用平台版本号低于1051，暂不支持原生广告相关 API"),
                null) : (console.log("您的平台配置文件中未开启“原生广告”"), null);
        }, e.prototype.hideBannerAd = function () {
            this.bannerAdCache && (this.bannerAdCache.hide(), this.bannerAdCache.destroy(),
                this.bannerAdCache = !1), this._bannerAdShowStatus = !1;
        }, Object.defineProperty(e.prototype, "rewardedVideoAdSupportStatus", {
            get: function () {
                return !0;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.showRewardedVideoAd = function (t) {
            var e = this;
            if (void 0 === t && (t = {}), this.rewardedVideoAdStatus) if (this._rewardedVideoAd_obj = t,
                this._rewardedVideoAd_cache) if (this._rewardedVideoAd_loadStatus) this._showRewardedVideoAd(); else {
                    this._rewardedVideoAd_showStatus = !0;
                    var n = this._rewardedVideoAd_cache.load();
                    n && n.catch(function (t) {
                        console.log("OppoRewardedVideoAd 激励广告load失败" + JSON.stringify(t)), e._rewardedVideoAd_obj.error && e._rewardedVideoAd_obj.error();
                    });
                } else this._rewardedVideoAd_showStatus = !0, this._rewardedVideoAd_cache = this.pl.createRewardedVideoAd({
                    adUnitId: this.rewardedVideoAdId
                }), this._rewardedVideoAd_cache.onLoad(function () {
                    e._rewardedVideoAd_loadStatus = !0, e._rewardedVideoAd_showStatus && e._showRewardedVideoAd();
                }), this._rewardedVideoAd_cache.onError(function (t) {
                    switch (t.errCode) {
                        case -3:
                            console.log("激励广告加载失败---调用太频繁", JSON.stringify(t)), e._rewardedVideoAd_obj.empty && e._rewardedVideoAd_obj.empty();
                            break;

                        case -4:
                            console.log("激励广告加载失败--- 一分钟内不能重复加载", JSON.stringify(t)), e._rewardedVideoAd_obj.empty && e._rewardedVideoAd_obj.empty();
                            break;

                        case 30008:
                            console.log("激励广告加载失败--- 当前启动来源不支持激励视频广告，请选择其他激励策略"), e._rewardedVideoAd_obj.error && e._rewardedVideoAd_obj.error();
                            break;

                        default:
                            console.log("激励广告展示失败 default", JSON.stringify(t)), e._rewardedVideoAd_obj.error && e._rewardedVideoAd_obj.error();
                    }
                    e._rewardedVideoAd_cache.offClose();
                }); else t.error && t.error("暂未开启激励视频广告");
        }, e.prototype._showRewardedVideoAd = function () {
            var t = this;
            this._rewardedVideoAd_obj.before && this._rewardedVideoAd_obj.before(), this._rewardedVideoAd_cache.offClose(),
                this._rewardedVideoAd_cache.onClose(function (e) {
                    e && e.isEnded ? (console.log("OppoRewardedVideoAd 正常播放结束，可以下发游戏奖励"), t._rewardedVideoAd_obj.success && t._rewardedVideoAd_obj.success()) : (console.log("OppoRewardedVideoAd 播放中途退出，不下发游戏奖励"),
                        t._rewardedVideoAd_obj.fail && t._rewardedVideoAd_obj.fail()), t._rewardedVideoAd_obj.complete && t._rewardedVideoAd_obj.complete(),
                        t._rewardedVideoAd_cache.offClose();
                });
            var e = this._rewardedVideoAd_cache.show();
            console.log("OppoRewardedVideoAd show 3", e), e && e.catch(function (t) {
                console.log("激励广告展示失败" + JSON.stringify(t));
            }), this._rewardedVideoAd_loadStatus = !1;
        }, Object.defineProperty(e.prototype, "interstitialAdSupportStatus", {
            get: function () {
                return !1;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "gameBannerAdSupportStatus", {
            get: function () {
                return this.systemInfo.platformVersionCode >= 1076;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.showGameBannerAd = function () {
            this.gameBannerAdEnableStatus ? this.gameBannerAdSupportStatus ? (this.gameBannerAdCache && this.hideGameBannerAd(),
                this.gameBannerAdCache = this.pl.createGameBannerAd({
                    adUnitId: this.gameBannerAdId
                }), this.gameBannerAdCache.show().then(function () {
                    console.log("互推盒子横幅广告广告 显示 成功");
                }).catch(function (t) {
                    console.log("互推盒子横幅广告广告 显示 失败 errCode:" + t.errCode + ",errMsg:" + t.errMsg);
                })) : console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API") : console.log("您的平台配置文件中未开启“互推盒子横幅广告”");
        }, e.prototype.hideGameBannerAd = function () {
            this.gameBannerAdCache && (this.gameBannerAdCache.hide(), this.gameBannerAdCache.destroy(),
                this.gameBannerAdCache = null);
        }, Object.defineProperty(e.prototype, "gamePortalAdSupportStatus", {
            get: function () {
                return this.pl.getSystemInfoSync().platformVersionCode >= 1076;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.showGamePortalAd = function (t) {
            var e = this;
            void 0 === t && (t = null), this.gamePortalAdEnableStatus ? this.gamePortalAdSupportStatus ? (this.gamePortalAdCache && this.gamePortalAdCache.destroy(),
                this.gamePortalAdCache = this.pl.createGamePortalAd({
                    adUnitId: this.gamePortalAdId
                }), this.gamePortalAdCache.load().then(function () {
                    console.log("互推盒子九宫格广告 加载 成功"), e.gamePortalAdCache.show().then(function () {
                        console.log("互推盒子九宫格广告 显示 成功"), e.gamePortalAdCache.onClose(function () {
                            console.log("互推盒子九宫格广告 关闭"), "function" == typeof t && t();
                        });
                    }).catch(function (e) {
                        console.log("互推盒子九宫格广告 显示 失败 errCode:" + e.errCode + ",errMsg:" + e.errMsg), "function" == typeof t && t();
                    });
                }).catch(function (e) {
                    console.log("互推盒子九宫格广告 加载 失败 errCode:" + e.errCode + ",errMsg:" + e.errMsg), "function" == typeof t && t();
                })) : console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API") : console.log("您的平台配置文件中未开启“互推盒子九宫格广告”");
        }, e;
    }(q), $ = (R = function (t, e) {
        return (R = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        R(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n());
    }), et = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.pl = window.qq, e;
        }
        return $(e, t), e.prototype._init = function () {
            J.I.init({
                enable: this.bannerAdEnableStatus,
                ids: this.bannerAdIds
            });
        }, Object.defineProperty(e.prototype, "boxAdSupportStatus", {
            get: function () {
                return !0;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.showBoxAd = function (e) {
            var n = this;
            void 0 === e && (e = null), t.prototype.showBoxAd.call(this, e);
            var i = this.pl.createAppBox({
                adUnitId: this.boxAdId
            });
            i.onClose(function () {
                n.boxAdShowStatus = !1, "function" == typeof e && e(), i.destroy();
            }), i.load().then(function () {
                i.show(), n.boxAdShowStatus = !0;
            });
        }, Object.defineProperty(e.prototype, "blockAdSupportStatus", {
            get: function () {
                return !0;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.createBlockAd = function (e, n, i, o) {
            return void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === i && (i = 1),
                void 0 === o && (o = "landscape"), console.log("this.pl.createBlockAd({ adUnitId: this.blockAdId, size, orientation, style: { left, top } })", this.pl.createBlockAd({
                    adUnitId: this.blockAdId,
                    size: i,
                    orientation: o,
                    style: {
                        left: e,
                        top: n
                    }
                })), t.prototype.createBlockAd.call(this, e, n, i, o), -1 === ["landscape", "vertical"].indexOf(o) && (o = "landscape"),
                this.pl.createBlockAd({
                    adUnitId: this.blockAdId,
                    size: i,
                    orientation: o,
                    style: {
                        left: e,
                        top: n
                    }
                });
        }, e.prototype.destroyBlockAd = function (e) {
            t.prototype.destroyBlockAd.call(this, e), e.destroy();
        }, e;
    }(q), nt = (T = function (t, e) {
        return (T = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        T(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n());
    }), it = function (t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.pl = tt, n.init(), n;
        }
        return nt(e, t), e;
    }(X), ot = (k = function (t, e) {
        return (k = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        k(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n());
    }), rt = function () {
        return (rt = Object.assign || function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
        }).apply(this, arguments);
    }, at = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.pl = window.tt, e.bannerAdInstance = null, e.recorderEnableStatus = !0,
                e._recorderStartTime = 0, e._recorderEndTime = 0, e._recorder = null, e._videoPath = "",
                e.recorderShareMode = w.API, e;
        }
        return ot(e, t), e.prototype._init = function () { }, Object.defineProperty(e.prototype, "bannerAdStatus", {
            get: function () {
                return this.bannerAdEnableStatus && this.bannerAdSupportStatus;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "bannerAdShowStatus", {
            get: function () {
                return this.bannerAdInstance.showStatus;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.initBannerAd = function () {
            this.bannerAdStatus && this.bannerAdIds.length && (this.bannerAdInstance = new it(this.bannerAdId));
        }, e.prototype.showBannerAd = function (t) {
            void 0 === t && (t = {}), this.bannerAdInstance && this.bannerAdInstance.show(t.style || {
                centerX: 0,
                bottom: 0
            });
        }, e.prototype.hideBannerAd = function () {
            this.bannerAdInstance && this.bannerAdInstance.hide();
        }, Object.defineProperty(e.prototype, "recorderSupportStatus", {
            get: function () {
                return !!this.pl.getGameRecorderManager;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "recorderStatus", {
            get: function () {
                return console.log("recorderStatus", this.recorderSupportStatus, this.recorderEnableStatus),
                    this.recorderEnableStatus && this.recorderSupportStatus;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Recorder", {
            get: function () {
                var t = this;
                return this.pl.getGameRecorderManager ? (this._recorder || (this._recorder = this.pl.getGameRecorderManager(),
                    this._recorder.onStart(function () {
                        t.recorderRunStatus = S.RUN, t._recorderStartTime = new Date().getTime();
                    }), this._recorder.onPause(function () {
                        t.recorderRunStatus = S.STOP;
                    }), this._recorder.onResume(function () {
                        t.recorderRunStatus = S.RUN;
                    }), this._recorder.onError(function () {
                        t.recorderRunStatus = S.STOP;
                    }), this._recorder.onStop(function (e) {
                        t.recorderRunStatus = S.STOP, t._videoPath = e.videoPath, t._recorderEndTime = new Date().getTime();
                    })), rt(rt({}, this._recorder), {
                        start: function (e) {
                            void 0 === e && (e = {}), t._recorder.start({
                                duration: e.duration || t.recorderDuration
                            });
                        },
                        stop: function () {
                            t._recorder.stop();
                        }
                    })) : {
                        start: function () { },
                        onStart: function () { },
                        pause: function () { },
                        onPause: function () { },
                        resume: function () { },
                        onResume: function () { },
                        stop: function () { },
                        onStop: function () { },
                        onError: function () { }
                    };
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.shareVideo = function (t) {
            if (void 0 === t && (t = {}), this._videoPath) {
                if (this._recorderEndTime - this._recorderStartTime < 3e3) return this.msg("录屏时间太短，无法分享录屏。"),
                    void (t.complete && t.complete());
                var e = this.getShareAsset();
                this.pl.shareAppMessage({
                    channel: "video",
                    templateId: e.templateId || "",
                    desc: e.desc || "",
                    title: e.title || "",
                    imageUrl: e.imageUrl || "",
                    query: e.query || "",
                    extra: {
                        videoPath: this._videoPath,
                        videoTopics: e.topics || ["抖音小游戏", "小游戏"]
                    },
                    success: t.success || void 0,
                    fail: t.fail || void 0,
                    complete: t.complete || void 0
                });
            } else t.fail && t.fail(), t.complete && t.complete();
        }, e;
    }(q), st = (E = function (t, e) {
        return (E = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        E(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n());
    }), dt = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.pl = window.qg, e.bannerAdCache = null, e._bannerAdShowStatus = !1, e._rewardedVideoAd_cache = null,
                e._rewardedVideoAd_loadStatus = !0, e._rewardedVideoAd_showStatus = !1, e._rewardedVideoAd_obj = {},
                e;
        }
        return st(e, t), e.prototype._init = function () { }, e.prototype.getStorageItem = function (t, e) {
            return void 0 === e && (e = ""), localStorage.getItem(t) || e;
        }, e.prototype.setStorageItem = function (t, e) {
            localStorage.setItem(t, e);
        }, Object.defineProperty(e.prototype, "bannerAdSupportStatus", {
            get: function () {
                return this.systemInfo.platformVersionCode >= 1031;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "bannerAdShowStatus", {
            get: function () {
                return this._bannerAdShowStatus;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.showBannerAd = function (t) {
            var e = this;
            void 0 === t && (t = {}), this._bannerAdShowStatus = !0;
            var n = t.interval || 30;
            n < 30 && (n = 30), this.bannerAdCache = this.pl.createBannerAd({
                posId: this.bannerAdId,
                adIntervals: n
            }), this.bannerAdCache.onError(function (n) {
                console.log("banner广告加载失败", JSON.stringify(n)), "function" == typeof t.error && t.error(n),
                    e._bannerAdShowStatus = !1;
            }), this.bannerAdCache.show().then(function () {
                console.log("banner广告展示完成"), "function" == typeof t.success && t.success();
            }).catch(function (n) {
                console.log("banner广告展示失败", JSON.stringify(n)), "function" == typeof t.error && t.error(n),
                    e._bannerAdShowStatus = !1;
            });
        }, e.prototype.hideBannerAd = function () {
            this.bannerAdCache && this.bannerAdCache.hide(), this._bannerAdShowStatus = !1;
        }, Object.defineProperty(e.prototype, "rewardedVideoAdSupportStatus", {
            get: function () {
                return !0;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.showRewardedVideoAd = function (t) {
            var e = this;
            if (void 0 === t && (t = {}), this.rewardedVideoAdStatus) if (this._rewardedVideoAd_obj = t,
                this._rewardedVideoAd_cache) if (this._rewardedVideoAd_loadStatus) this._showRewardedVideoAd(); else {
                    this._rewardedVideoAd_showStatus = !0;
                    var n = this._rewardedVideoAd_cache.load();
                    n && n.catch(function (t) {
                        console.log("OppoRewardedVideoAd 激励广告load失败" + JSON.stringify(t)), e._rewardedVideoAd_obj.error && e._rewardedVideoAd_obj.error();
                    });
                } else this._rewardedVideoAd_showStatus = !0, this._rewardedVideoAd_cache = this.pl.createRewardedVideoAd({
                    adUnitId: this.rewardedVideoAdId
                }), console.log("----------------------------------1111111111111_rewardedVideoAd_cache"),
                    this._rewardedVideoAd_cache.onLoad(function () {
                        console.log("----------------------------------1111111111111_rewardedVideoAd_cache onLoad"),
                            e._rewardedVideoAd_loadStatus = !0, e._rewardedVideoAd_showStatus && e._showRewardedVideoAd();
                    }), this._rewardedVideoAd_cache.onError(function (t) {
                        switch (t.errCode) {
                            case -3:
                                console.log("激励广告加载失败---调用太频繁", JSON.stringify(t)), e._rewardedVideoAd_obj.empty && e._rewardedVideoAd_obj.empty();
                                break;

                            case -4:
                                console.log("激励广告加载失败--- 一分钟内不能重复加载", JSON.stringify(t)), e._rewardedVideoAd_obj.empty && e._rewardedVideoAd_obj.empty();
                                break;

                            case 30008:
                                console.log("激励广告加载失败--- 当前启动来源不支持激励视频广告，请选择其他激励策略"), e._rewardedVideoAd_obj.error && e._rewardedVideoAd_obj.error();
                                break;

                            default:
                                console.log("激励广告展示失败 default", JSON.stringify(t)), e._rewardedVideoAd_obj.error && e._rewardedVideoAd_obj.error();
                        }
                        e._rewardedVideoAd_cache.offClose();
                    }); else t.error && t.error("暂未开启激励视频广告");
        }, e.prototype._showRewardedVideoAd = function () {
            var t = this;
            this._rewardedVideoAd_obj.before && this._rewardedVideoAd_obj.before(), this._rewardedVideoAd_cache.offClose(),
                this._rewardedVideoAd_cache.onClose(function (e) {
                    e && e.isEnded ? (console.log("OppoRewardedVideoAd 正常播放结束，可以下发游戏奖励"), t._rewardedVideoAd_obj.success && t._rewardedVideoAd_obj.success()) : (console.log("OppoRewardedVideoAd 播放中途退出，不下发游戏奖励"),
                        t._rewardedVideoAd_obj.fail && t._rewardedVideoAd_obj.fail()), t._rewardedVideoAd_obj.complete && t._rewardedVideoAd_obj.complete(),
                        t._rewardedVideoAd_cache.offClose(), vm.emit(h.RewardedVideoAdComplete);
                }), this._rewardedVideoAd_cache.show().then(function () {
                    console.log("激励广告展示成功"), vm.emit(h.RewardedVideoAdShow);
                }).catch(function (t) {
                    console.log("激励广告展示失败" + JSON.stringify(t));
                }), this._rewardedVideoAd_loadStatus = !1;
        }, Object.defineProperty(e.prototype, "interstitialAdSupportStatus", {
            get: function () {
                return !1;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.msg = function (t, e, n) {
            void 0 === e && (e = {}), void 0 === n && (n = null), this.pl.showToast({
                message: t,
                duration: e.time || 1500
            }), setTimeout(function () {
                "function" == typeof n && n();
            }, e.time || 1500);
        }, e.prototype.confirm = function (t, e, n, i) {
            this.pl.showDialog({
                title: "提示",
                message: t,
                buttons: [{
                    text: e.cancelText || "取消",
                    color: e.cancelColor || "#000000"
                }, {
                    text: e.confirmText || "确定",
                    color: e.confirmColor || "#576B95"
                }],
                success: function (t) {
                    console.log("showDialog", t), 1 === t.index ? "function" == typeof n && n() : "function" == typeof i && i();
                }
            });
        }, e;
    }(q), lt = function () {
        function t() { }
        return Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.init = function (t, e) {
            var n = null;
            switch (t) {
                case v.WX:
                    (n = new q()).init(e[v.WX]), n.onWx = !0;
                    break;

                case v.QQ:
                    (n = new et()).init(e[v.QQ]), n.onQQ = !0;
                    break;

                case v.TT:
                    (n = new at()).init(e[v.TT]), n.onTT = !0;
                    break;

                case v.VIVO:
                    (n = new dt()).init(e[v.VIVO]), n.onVivo = !0;
                    break;

                case v.OPPO:
                    (n = new Z()).init(e[v.OPPO]), n.onOppo = !0;
                    break;

                default:
                    (n = new z()).init(e[v.DEBUG]);
            }
            window.pl = n, console.log(n);
        }, t;
    }(), ht = (V = function (t, e) {
        return (V = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        V(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n());
    }), ut = function (t) {
        function e() {
            return t.call(this) || this;
        }
        return ht(e, t), Object.defineProperty(e, "I", {
            get: function () {
                return Laya.stage;
            },
            enumerable: !1,
            configurable: !0
        }), e;
    }(Laya.EventDispatcher), ct = function () {
        function t() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this._vm_event_name = "", this._vm_arr = [], this._vm_init_indexArr = [], this._vm_arr = t,
                this._vm_list_init(0, this._vm_arr.length);
        }
        return t.prototype._vm_list_init = function (t, e) {
            for (var n = t; n < e; n++) this._vm_item_init(n);
        }, t.prototype._vm_item_init = function (t) {
            if (-1 === this._vm_init_indexArr.indexOf(t)) {
                this._vm_init_indexArr.push(t);
                var e = this;
                Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return e._vm_arr[t];
                    },
                    set: function (n) {
                        e._vm_arr[t] !== n && (e._vm_arr[t] = n, e._vm_emit());
                    }
                });
            }
        }, t.prototype._vm_emit = function () {
            console.log("this", this), vm.emit(this._vm_event_name, [this._vm_arr]);
        }, Object.defineProperty(t.prototype, "length", {
            get: function () {
                return this._vm_arr.length;
            },
            set: function (t) {
                t !== this._vm_arr.length && (this._vm_arr.length = t, this._vm_emit());
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.concat = function () {
            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return (t = this._vm_arr).concat.apply(t, e);
        }, t.prototype.join = function (t) {
            return void 0 === t && (t = ""), this._vm_arr.join(t);
        }, t.prototype.pop = function () {
            var t = this._vm_arr.pop();
            return this._vm_emit(), t;
        }, t.prototype.push = function () {
            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            var i = this._vm_arr.length, o = (t = this._vm_arr).push.apply(t, e);
            return this._vm_emit(), this._vm_list_init(i, o), o;
        }, t.prototype.reverse = function () {
            return this._vm_arr.reverse(), this._vm_emit(), this._vm_arr;
        }, t.prototype.shift = function () {
            var t = this._vm_arr.shift();
            return this._vm_emit(), t;
        }, t.prototype.slice = function (t, e) {
            return void 0 === e && (e = void 0), this._vm_arr.slice(t, e);
        }, t.prototype.sort = function (t) {
            return void 0 === t && (t = null), this._vm_arr.sort(t), this._vm_emit(), this._vm_arr;
        }, t.prototype.splice = function (t, e) {
            for (var n, i = [], o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
            var r = this._vm_arr.length, a = (n = this._vm_arr).splice.apply(n, function (t, e) {
                for (var n = 0, i = e.length, o = t.length; n < i; n++, o++) t[o] = e[n];
                return t;
            }([t, e], i)), s = this._vm_arr.length;
            return this._vm_emit(), s > r && this._vm_list_init(r, s), a;
        }, t.prototype.toSource = function () {
            return this._vm_arr.toSource();
        }, t.prototype.toString = function () {
            return this._vm_arr.toString();
        }, t.prototype.toLocaleString = function () {
            return this._vm_arr.toLocaleString();
        }, t.prototype.unshift = function () {
            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            var i = this._vm_arr.length, o = (t = this._vm_arr).unshift.apply(t, e);
            return this._vm_emit(), this._vm_list_init(i, o), o;
        }, t.prototype.valueOf = function () {
            return this._vm_arr.valueOf();
        }, t.prototype.indexOf = function (t) {
            return this._vm_arr.indexOf(t);
        }, t.prototype.forEach = function (t) {
            this._vm_arr.forEach(t);
        }, t;
    }(), pt = function () {
        function t() {
            this._vm_event_name = "", this._vm_obj = {};
        }
        return t.prototype._vm_init = function (t) {
            var e = this, n = function (n) {
                Object.defineProperty(e._vm_obj, n, {
                    configurable: !0,
                    enumerable: !0,
                    value: t[n],
                    writable: !0
                }), Object.defineProperty(e, n, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return e._vm_obj[n];
                    },
                    set: function (t) {
                        e._vm_obj[n] !== t && (e._vm_obj[n] = t, e._vm_emit());
                    }
                });
            };
            for (var i in t) n(i);
        }, t.prototype._vm_emit = function () {
            vm.emit(this._vm_event_name, [this._vm_obj]);
        }, t;
    }(), ft = function (t, e) {
        for (var n = 0, i = e.length, o = t.length; n < i; n++, o++) t[o] = e[n];
        return t;
    }, yt = function () {
        function t(t, e) {
            var n = this;
            this._name = "root", this._state = {}, this.state = {}, this.getter = {}, this._getter = {},
                this.setter = {}, this._setter = {};
            var i = this;
            this._name = t, i.state = {}, i._state = {};
            var o = function (t) {
                if (Array.isArray(e.state[t])) e.state[t] = new (ct.bind.apply(ct, ft([void 0], e.state[t])))(),
                    e.state[t]._vm_event_name = r.getEventName(t); else if (e.state[t] instanceof Object && !(e.state[t] instanceof pt)) {
                        var o = new pt();
                        o._vm_event_name = r.getEventName(t), o._vm_init(e.state[t]), e.state[t] = o;
                    }
                Object.defineProperty(i._state, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: e.state[t],
                    writable: !0
                }), Object.defineProperty(i.state, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return i._state[t];
                    },
                    set: function (e) {
                        if (Array.isArray(e)) (e = new (ct.bind.apply(ct, ft([void 0], e)))())._vm_event_name = n.getEventName(t); else if (e instanceof Object && !(e instanceof pt)) {
                            var o = new pt();
                            o._vm_event_name = n.getEventName(t), o._vm_init(e), e = o;
                        }
                        i._state[t] !== e && (i._state[t] = e, i.hasListener(t) && i.emit(t, e));
                    }
                });
            }, r = this;
            for (var a in e.state) o(a);
            if (e.getter) {
                i._getter = e.getter;
                var s = function (t) {
                    "function" == typeof e.getter[t] && (i.getter[t] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        return i._getter[t].apply(null, ft([i.state], e));
                    });
                };
                for (var a in e.getter) s(a);
            }
            if (e.setter) {
                i._setter = e.setter;
                var d = function (t) {
                    "function" == typeof e.setter[t] && (i.setter[t] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        return i._setter[t].apply(null, ft([i.state], e));
                    });
                };
                for (var a in e.setter) d(a);
            }
        }
        return t.prototype.getEventName = function (t) {
            return this._name + "_" + t;
        }, t.prototype.hasListener = function (t) {
            return ut.I.hasListener(this.getEventName(t));
        }, t.prototype.on = function (t, e, n) {
            return void 0 === e && (e = null), ut.I.on(this.getEventName(t), e, n);
        }, t.prototype.once = function (t, e, n) {
            return void 0 === e && (e = null), void 0 === n && (n = null), ut.I.once(this.getEventName(t), e, n);
        }, t.prototype.off = function (t, e, n) {
            return void 0 === e && (e = null), void 0 === n && (n = null), ut.I.off(this.getEventName(t), e, n);
        }, t.prototype.offAll = function (t) {
            return ut.I.offAll(this.getEventName(t));
        }, t.prototype.offAllCaller = function (t) {
            return ut.I.offAllCaller(t);
        }, t.prototype.emit = function (t, e) {
            return void 0 === e && (e = null), ut.I.event(this.getEventName(t), e);
        }, t.prototype.destroy = function () {
            for (var t in this.state) this.offAll(t);
        }, t;
    }(), gt = function () {
        function t() {
            this.state = {}, this.modules = {};
        }
        return Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = window.vm = new t()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.name2moduleAndState = function (t) {
            var e = "root", n = "", i = t.indexOf(".");
            return -1 !== i ? (e = t.slice(0, i), this.modules[e] || (e = "root"), n = t.slice(i += 1)) : n = t,
            {
                moduleName: e,
                stateName: n
            };
        }, t.prototype.onState = function (t, e, n) {
            void 0 === n && (n = null);
            var i = this.name2moduleAndState(t);
            return this.modules[i.moduleName].on(i.stateName, e, n);
        }, t.prototype.onceState = function (t, e, n) {
            var i = this.name2moduleAndState(t);
            return this.modules[i.moduleName].once(i.stateName, e, n);
        }, t.prototype.offState = function (t, e, n) {
            var i = this.name2moduleAndState(t);
            return this.modules[i.moduleName].off(i.stateName, e, n);
        }, t.prototype.hasState = function (t) {
            var e = this.name2moduleAndState(t);
            return void 0 !== this.modules[e.moduleName].state[e.stateName];
        }, t.prototype.getState = function (t) {
            var e = this.name2moduleAndState(t);
            return this.modules[e.moduleName].state[e.stateName];
        }, t.prototype.hasListener = function (t) {
            return ut.I.hasListener(t);
        }, t.prototype.on = function (t, e, n) {
            return void 0 === e && (e = null), ut.I.on(t, e, n);
        }, t.prototype.once = function (t, e, n) {
            return void 0 === e && (e = null), void 0 === n && (n = null), ut.I.once(t, e, n);
        }, t.prototype.off = function (t, e, n) {
            return void 0 === e && (e = null), void 0 === n && (n = null), ut.I.off(t, e, n);
        }, t.prototype.offAll = function (t) {
            return ut.I.offAll(t);
        }, t.prototype.offAllCaller = function (t) {
            return ut.I.offAllCaller(t);
        }, t.prototype.emit = function (t, e) {
            void 0 === e && (e = null), ut.I.event(t, e);
        }, t.prototype.init = function (t) {
            if (this.modules.root = this.initModule("root", t), this.state = this.modules.root.state,
                t.modules) for (var e in t.modules) "root" !== e && t.modules[e] && (this.modules[e] = this.initModule(e, t.modules[e]));
        }, t.prototype.initModule = function (t, e) {
            return this.modules[t] = new yt(t, e), this.modules[t];
        }, t.prototype.destroyModule = function (t) {
            var e, n;
            "string" == typeof t ? (e = t, n = this.modules[e]) : t instanceof yt && (e = (n = t)._name),
                n.destroy(), delete this.modules[e];
        }, t._I = null, t;
    }(), mt = function () {
        function t() {
            this.appPreHideMusicPlayStatus = !1, this.musicPlayStatus = !1, this.Camera = null,
                this.MaxCameraDistance = 50, Laya.Browser.onIOS && (Laya.SoundManager.useAudioMusic = !1);
        }
        return Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), this._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.init = function () {
            var t = this, e = x("SOUND_MUTED", "2");
            e = "1" === e;
            var n = x("MUSIC_MUTED", "2");
            n = "1" === n, Laya.SoundManager.soundMuted = e, Laya.SoundManager.musicMuted = n,
                L.I.onHide(function () {
                    t.appPreHideMusicPlayStatus = t.musicPlayStatus, t.musicPlayStatus && t.pauseMusic();
                }), L.I.onShow(function () {
                    t.appPreHideMusicPlayStatus && t.resumeMusic();
                });
        }, Object.defineProperty(t.prototype, "soundMuted", {
            get: function () {
                return Laya.SoundManager.soundMuted;
            },
            set: function (t) {
                Laya.SoundManager.soundMuted = t, j("SOUND_MUTED", t ? "1" : "2");
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "musicMuted", {
            get: function () {
                return Laya.SoundManager.musicMuted;
            },
            set: function (t) {
                Laya.SoundManager.musicMuted = t, j("MUSIC_MUTED", t ? "1" : "2"), t || this.playDefaultMusic();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "muted", {
            get: function () {
                return Laya.SoundManager.muted;
            },
            set: function (t) {
                Laya.SoundManager.muted = t, j("SOUND_MUTED", t ? "1" : "2"), j("MUSIC_MUTED", t ? "1" : "2");
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.playDefaultMusic = function () {
            this.musicChannel && this.musicChannel.play();
        }, t.prototype.playMusic = function (t, e) {
            // return void 0 === e && (e = 0), this.musicChannel && Laya.SoundManager.removeChannel(this.musicChannel), 
            // Laya.SoundManager.stopMusic(), this.musicChannel = Laya.SoundManager.playMusic(t, e), 
            // this.musicPlayStatus = !0, this.musicChannel;
        }, t.prototype.playSound = function (t, e, n) {

            if (Laya.LocalStorage.getItem("soundsound") == 0
                || Laya.LocalStorage.getItem("soundsound") == null) {

                return void 0 === e && (e = 1), void 0 === n && (n = null), Laya.SoundManager.playSound(t, e, null === n ? null : Laya.Handler.create(this, n));
            }

            return null



        }, t.prototype.stopMusic = function () {
            this.musicChannel && Laya.SoundManager.removeChannel(this.musicChannel), this.musicPlayStatus = !1,
                Laya.SoundManager.stopMusic();
        }, t.prototype.pauseMusic = function () {
            this.musicPlayStatus = !1, this.musicChannel && this.musicChannel.pause();
        }, t.prototype.resumeMusic = function () {
            this.musicPlayStatus = !0, this.musicChannel && this.musicChannel.resume();
        }, t.prototype.stopSound = function (t) {
            Laya.SoundManager.stopSound(t);
        }, t.prototype.stopAll = function () {
            Laya.SoundManager.stopAll(), this.musicPlayStatus = !1, this.musicChannel && Laya.SoundManager.removeChannel(this.musicChannel);
        }, t.prototype.playSoundAtPoint = function (t, e, n, i, o) {
            if (void 0 === n && (n = 1), void 0 === i && (i = null), void 0 === o && (o = null),
                o && (this.Camera = o), this.Camera.destroyed) return null;
            var r = Laya.Vector3.distance(t, this.Camera.transform.position);
            if (r > this.MaxCameraDistance) return null;
            var a = Laya.SoundManager.playSound(e, n, null === i ? null : Laya.Handler.create(this, i));
            return a ? (r > this.MaxCameraDistance / 5 ? a.volume = 1 - r / this.MaxCameraDistance * 4 / 5 : a.volume = 1,
                a) : null;
        }, t;
    }(), bt = function () {
        function t() { }
        return Object.defineProperty(t, "I", {
            get: function () {
                return t._I || (t._I = new t()), t._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.open = function (t, e, n, i, o) {
            void 0 === e && (e = !0), void 0 === n && (n = null), void 0 === i && (i = null),
                void 0 === o && (o = null), Laya.Scene.open(t, e, n, i, o);
        }, t.prototype.close = function (t, e) {
            return void 0 === e && (e = ""), Laya.Scene.close(t, e);
        }, t.prototype.closeAll = function () {
            Laya.Scene.closeAll();
        }, t;
    }(), At = function () {
        function t() { }
        return Object.defineProperty(t, "I", {
            get: function () {
                return t._I || (t._I = new t()), t._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.open = function (t, e, n, i, o, r) {
            var a = this;
            void 0 === e && (e = !0), void 0 === n && (n = null), void 0 === i && (i = null),
                void 0 === o && (o = null), void 0 === r && (r = null);
            var s = !Laya.DialogManager.numChildren;
            Laya.Dialog.open(t, e, n, Laya.Handler.create(this, function (t) {
                "function" == typeof t.onCreated && t.onCreated(n);
                var e = t.getComponents(Laya.Script);
                if (e && e.length) for (var r = 0, d = e.length; r < d; r++) "function" == typeof e[r].onCreated && e[r].onCreated(n);
                vm.emit(h.DialogOpen), s && vm.emit(h.DialogOpenFirst), t.once(Laya.Event.REMOVED, a, function () {
                    i && i.run(), vm.emit(h.DialogClose), !Laya.DialogManager.numChildren && vm.emit(h.DialogCloseAll);
                }), o && o.runWith(t);
            }), r);
        }, t.prototype.queueOpen = function (t) {
            var e = this;
            Array.isArray(t) || (t = [t]);
            var n = new Laya.Handler(this, function () {
                if (t.length) {
                    var i = t.shift();
                    "string" == typeof i && (i = {
                        url: i
                    }), e.open(i.url, i.closeOther || null, i.param || null, Laya.Handler.create(e, function () {
                        i.close && i.close.run(), n.run();
                    }), i.complete || null, i.progress || null);
                }
            });
            n.run();
        }, t.prototype.close = function (t, e) {
            void 0 === e && (e = ""), Laya.Dialog.close(t, e);
        }, t.prototype.closeAll = function () {
            Laya.Dialog.closeAll();
        }, Object.defineProperty(t.prototype, "has", {
            get: function () {
                return !!Laya.Dialog.manager._children.length;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.onOpen = function (t) {
            vm.on(h.DialogOpen, null, t);
        }, t.prototype.offOpen = function (t) {
            void 0 === t && (t = null), t ? vm.off(h.DialogOpen, null, t) : vm.offAll(h.DialogOpen);
        }, t.prototype.onOpenFirst = function (t) {
            vm.on(h.DialogOpenFirst, null, t);
        }, t.prototype.offOpenFirst = function (t) {
            void 0 === t && (t = null), t ? vm.off(h.DialogOpenFirst, null, t) : vm.offAll(h.DialogOpenFirst);
        }, t.prototype.onClose = function (t) {
            vm.on(h.DialogClose, null, t);
        }, t.prototype.offClose = function (t) {
            void 0 === t && (t = null), t ? vm.off(h.DialogClose, null, t) : vm.offAll(h.DialogClose);
        }, t.prototype.onCloseAll = function (t) {
            vm.on(h.DialogCloseAll, null, t);
        }, t.prototype.offCloseAll = function (t) {
            void 0 === t && (t = null), t ? vm.off(h.DialogCloseAll, null, t) : vm.offAll(h.DialogCloseAll);
        }, t;
    }(), _t = function () {
        function t() { }
        return Object.defineProperty(t, "I", {
            get: function () {
                return this._I || (this._I = new t()), t._I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.init = function (t, e, n) {
            void 0 === n && (n = null), this.vm.init(e), lt.I.init(t.name, t.conf), this.Sound.init(),
                this.App;
        }, Object.defineProperty(t.prototype, "Sound", {
            get: function () {
                return mt.I;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Guide", {
            get: function () {
                return C.I;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "D3", {
            get: function () {
                return _.I;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Platform", {
            get: function () {
                return pl;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "state", {
            get: function () {
                return gt.I.state;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "vm", {
            get: function () {
                return gt.I;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.onState = function (t, e, n) {
            return void 0 === n && (n = null), this.vm.onState(t, e, n);
        }, t.prototype.onceState = function (t, e, n) {
            return this.vm.onceState(t, e, n);
        }, t.prototype.offState = function (t, e, n) {
            return this.vm.offState(t, e, n);
        }, t.prototype.hasState = function (t) {
            return this.vm.hasState(t);
        }, t.prototype.getState = function (t) {
            return this.vm.getState(t);
        }, t.prototype.hasListener = function (t) {
            return this.vm.hasListener(t);
        }, t.prototype.on = function (t, e, n) {
            return void 0 === e && (e = null), this.vm.on(t, e, n);
        }, t.prototype.once = function (t, e, n) {
            return void 0 === e && (e = null), void 0 === n && (n = null), this.vm.once(t, e, n);
        }, t.prototype.off = function (t, e, n) {
            return void 0 === e && (e = null), void 0 === n && (n = null), this.vm.off(t, e, n);
        }, t.prototype.offAll = function (t) {
            return this.vm.offAll(t);
        }, t.prototype.offAllCaller = function (t) {
            return this.vm.offAllCaller(t);
        }, t.prototype.emit = function (t, e) {
            void 0 === e && (e = null), this.vm.emit(t, e);
        }, t.prototype.msg = function (t, e, n) {
            this.Platform.msg(t, e, n);
        }, t.prototype.confirm = function (t, e, n, i) {
            this.Platform.confirm(t, e, n, i);
        }, t.prototype.showLoading = function () {
            this.Platform.showLoading();
        }, t.prototype.hideLoading = function () {
            this.Platform.hideLoading();
        }, Object.defineProperty(t.prototype, "App", {
            get: function () {
                return L.I;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Scene", {
            get: function () {
                return bt.I;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Dialog", {
            get: function () {
                return At.I;
            },
            enumerable: !1,
            configurable: !0
        }), t._I = null, t;
    }();
    new (function () {
        function e() {
            this.initEngineExtend(), window.Fw = _t.I;
        }
        return e.prototype.initEngineExtend = function () {
            window.findPath = t, window.findChild = n, window.findAllChild = o, window.findParent = r,
                window.getComponentsInChildren = a, window.getMeshRenderersInChildren = s, window.setLayer = d;
        }, e;
    }())();
}();