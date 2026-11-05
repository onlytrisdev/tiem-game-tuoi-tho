var casual = {
    version: "0.1.3",
    trace: function() {
        for (var b = [], a = 0; a < arguments.length; a++) b.push(arguments[a]);
        typeof console != "undefined" && typeof console.log != "undefined" && console.log(b.join(" "))
    },
    inherit: function(b, a) {
        var c = function() {};
        c.prototype = a.prototype;
        b.superClass = a.prototype;
        b.prototype = new c;
        b.prototype.constructor = b
    },
    delegate: function(b, a, c) {
        var d = a || window;
        if (arguments.length > 2) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var a = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(a, e);
                return b.apply(d, a)
            }
        } else return function() {
            return b.apply(d, arguments)
        }
    }
};
casual.copy = function(b, a, c) {
    if (typeof b !== "object") return b;
    var d = b.valueOf();
    if (b != d) return new b.constructor(d);
    if (b instanceof b.constructor && b.constructor !== Object) {
        var d = a ? new a : casual.clone(b.constructor.prototype),
            e;
        for (e in b)
            if (a || b.hasOwnProperty(e)) d[e] = b[e]
    } else
        for (e in d = {}, b) d[e] = b[e];
    if (c)
        for (e in c) d[e] = c[e];
    return d
};
casual.clone = function(b) {
    casual.__cloneFunc.prototype = b;
    return new casual.__cloneFunc
};
casual.__cloneFunc = function() {};
casual.getDOM = function(b) {
    return document.getElementById(b)
};
casual.createDOM = function(b, a) {
    var c = document.createElement(b),
        d;
    for (d in a) {
        var e = a[d];
        if (d == "style")
            for (var f in e) c.style[f] = e[f];
        else c[d] = e
    }
    return c
};
casual.detectBrowser = function() {
    var b = navigator.userAgent.toLowerCase();
    casual.isMobile = /android|webos|iphone|ipad|ipod|blackberry|mobile|sony/i.test(b);
    casual.supportStorage = "localStorage" in window;
    casual.supportOrientation = "orientation" in window;
    casual.supportTouch = "ontouchstart" in window
};
(function() {
    var b = function(a, c, b, e, f, h) {
        this.a = a != void 0 ? a : 1;
        this.b = c != void 0 ? c : 0;
        this.c = b != void 0 ? b : 0;
        this.d = e != void 0 ? e : 1;
        this.tx = f != void 0 ? f : 0;
        this.ty = h != void 0 ? h : 0
    };
    casual.Matrix = b;
    b.prototype.concat = function(a) {
        var c = this.a,
            b = this.c,
            e = this.tx;
        this.a = c * a.a + this.b * a.c;
        this.b = c * a.b + this.b * a.d;
        this.c = b * a.a + this.d * a.c;
        this.d = b * a.b + this.d * a.d;
        this.tx = e * a.a + this.ty * a.c + a.tx;
        this.ty = e * a.b + this.ty * a.d + a.ty
    };
    b.prototype.concatTransform = function(a, c, d, e, f, h, g) {
        var i = 1,
            j = 0;
        f % 360 && (f = f * Math.PI / 180, i = Math.cos(f),
            j = Math.sin(f));
        h != 0 && (this.tx -= h);
        g != 0 && (this.ty -= g);
        this.concat(new b(i * d, j * d, -j * e, i * e, a, c))
    };
    b.prototype.rotate = function(a) {
        var c = Math.cos(a),
            a = Math.sin(a),
            b = this.a,
            e = this.c,
            f = this.tx;
        this.a = b * c - this.b * a;
        this.b = b * a + this.b * c;
        this.c = e * c - this.d * a;
        this.d = e * a + this.d * c;
        this.tx = f * c - this.ty * a;
        this.ty = f * a + this.ty * c
    };
    b.prototype.scale = function(a, c) {
        this.a *= a;
        this.d *= c;
        this.tx *= a;
        this.ty *= c
    };
    b.prototype.translate = function(a, c) {
        this.tx += a;
        this.ty += c
    };
    b.prototype.identity = function() {
        this.a = this.d = 1;
        this.b = this.c =
            this.tx = this.ty = 0
    };
    b.prototype.invert = function() {
        var a = this.a,
            c = this.b,
            b = this.c,
            e = this.d,
            f = this.tx,
            h = a * e - c * b;
        this.a = e / h;
        this.b = -c / h;
        this.c = -b / h;
        this.d = a / h;
        this.tx = (b * this.ty - e * f) / h;
        this.ty = -(a * this.ty - c * f) / h
    };
    b.prototype.clone = function() {
        return new b(this.a, this.b, this.c, this.d, this.tx, this.ty)
    };
    b.prototype.toString = function() {
        return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")"
    }
})();
(function() {
    var b = function(a, c) {
        this.x = a;
        this.y = c
    };
    casual.Point = b;
    b.prototype.clone = function() {
        return new b(this.x, this.y)
    };
    b.prototype.toString = function() {
        return "(x=" + this.x + ", y=" + this.y + ")"
    }
})();
(function() {
    var b = function(a, c, b, e) {
        this.x = a != void 0 ? a : 0;
        this.y = c != void 0 ? c : 0;
        this.width = b != void 0 ? b : 0;
        this.height = e != void 0 ? e : 0
    };
    casual.Rectangle = b;
    b.prototype.intersects = function(a) {
        return this.x <= a.x + a.width && a.x <= this.x + this.width && this.y <= a.y + a.height && a.y <= this.y + this.height
    };
    b.prototype.intersection = function(a) {
        var c = Math.max(this.x, a.x),
            d = Math.min(this.x + this.width, a.x + a.width);
        if (c <= d) {
            var e = Math.max(this.y, a.y),
                a = Math.min(this.y + this.height, a.y + a.height);
            if (e <= a) return new b(c, e, d - c, a - e)
        }
        return null
    };
    b.prototype.containsPoint = function(a, c) {
        return this.x <= a && a <= this.x + this.width && this.y <= c && c <= this.y + this.height
    };
    b.prototype.clone = function() {
        return new b(this.x, this.y, this.width, this.height)
    };
    b.prototype.toString = function() {
        return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")"
    }
})();
(function() {
    var b = {
        _counter: 0
    };
    casual.NameUtil = b;
    b.getUID = function() {
        return b._counter++
    };
    b.createUniqueName = function(a) {
        var c = a.charCodeAt(a.length - 1);
        c >= 48 && c <= 57 && (a += "_");
        return a + b.getUID()
    };
    b.displayObjectToString = function(a) {
        for (var c; a != null; a = a.parent) {
            var b = a.id != null ? a.id : a.name;
            c = c == null ? b : b + "." + c;
            if (a == a.parent || a.parent instanceof Stage) break
        }
        return c
    }
})();
(function() {
    var b = function(a, c, b) {
        this.type = a;
        this.params = this.currentTarget = this.target = null;
        this.bubbles = c != void 0 ? c : !1;
        this.cancelable = b != void 0 ? b : !1
    };
    casual.EventBase = b;
    b.prototype.stopPropagation = function() {};
    b.prototype.preventDefault = function() {};
    b.prototype.clone = function() {
        return casual.copy(this)
    };
    b.prototype.dispose = function() {
        delete this.type;
        delete this.target;
        delete this.currentTarget;
        delete this.params
    };
    b.prototype.toString = function() {
        return "[EventBase type=" + this.type + "]"
    }
})();
(function() {
    var b = function(a, c, b) {
        casual.EventBase.call(this, a, c, b);
        this.mouseY = this.mouseX = 0
    };
    casual.inherit(b, casual.EventBase);
    casual.StageEvent = b;
    b.ENTER_FRAME = "enterframe";
    b.MOUSE_DOWN = "mousedown";
    b.MOUSE_UP = "mouseup";
    b.MOUSE_MOVE = "mousemove";
    b.MOUSE_OVER = "mouseover";
    b.MOUSE_OUT = "mouseout";
    b.supportTouch = function() {
        return "ontouchstart" in document
    };
    b.prototype.toString = function() {
        return "[StageEvent type=" + this.type + ", mouseX=" + this.mouseX + ", mouseY=" + this.mouseY + "]"
    }
})();
(function() {
    function b(a, c) {
        var b = !1,
            d;
        for (d in c.map)
            if (d != "src") {
                b = !0;
                break
            }
        return !b ? (a.splice(c.index, 1), !0) : !1
    }

    function a(a, c, b) {
        for (var d = 0; d < a.length; d++) {
            var i = a[d];
            if (i.src === c) return {
                map: i,
                index: d
            }
        }
        return b ? (i = {
            src: c
        }, a.push(i), {
            map: i,
            index: a.length - 1
        }) : null
    }

    function c(a, c, b) {
        return a.hasOwnProperty(c) ? a[c] : b ? a[c] = [] : null
    }
    var d = casual.EventManager = {
        _maps: []
    };
    d.addEventListener = function(b, d, h) {
        b = a(this._maps, b, !0);
        d = c(b.map, d, !0);
        return d.indexOf(h) == -1 ? (d.push(h), !0) : !1
    };
    d.removeEventListener =
        function(d, f, h) {
            d = a(this._maps, d, !1);
            if (d == null) return !1;
            var g = c(d.map, f, !1);
            if (g == null) return !1;
            for (var i = 0; i < g.length; i++)
                if (g[i] === h) return g.splice(i, 1), g.length == 0 && (delete d.map[f], b(this._maps, d)), !0;
            return !1
        };
    d.removeEventListenerByType = function(c, d) {
        var h = a(this._maps, c, !1);
        return h && h.map.hasOwnProperty(d) ? (delete h.map[d], b(this._maps, h), !0) : !1
    };
    d.removeAllEventListeners = function(a) {
        for (var c = 0; c < this._maps.length; c++)
            if (this._maps[c].src === a) return this._maps.splice(c, 1), !0;
        return !1
    };
    d.dispatchEvent = function(b, d) {
        var h = a(this._maps, b, !1);
        if (h == null) return !1;
        h = c(h.map, d.type, !1);
        if (h == null) return !1;
        if (!d.target) d.target = b;
        for (var g = 0; g < h.length; g++) {
            var i = h[g];
            typeof i == "function" && i.call(b, d)
        }
        return !0
    };
    d.hasEventListener = function(b, d) {
        var h = a(this._maps, b, !1);
        return h == null ? !1 : (h = c(h.map, d, !1)) && h.length > 0
    }
})();
(function() {
    var b = casual.EventDispatcher = function() {};
    b.prototype.addEventListener = function(a, c) {
        return casual.EventManager.addEventListener(this, a, c)
    };
    b.prototype.removeEventListener = function(a, c) {
        return c ? casual.EventManager.removeEventListener(this, a, c) : casual.EventManager.removeEventListenerByType(this, a)
    };
    b.prototype.removeAllEventListeners = function() {
        return casual.EventManager.removeAllEventListeners(this)
    };
    b.prototype.dispatchEvent = function(a) {
        return casual.EventManager.dispatchEvent(this,
            a)
    };
    b.prototype.hasEventListener = function(a) {
        return casual.EventManager.hasEventListener(this, a)
    }
})();
(function() {
    var b = function() {
        casual.EventDispatcher.call(this);
        this.name = NameUtil.createUniqueName("DisplayObject");
        this.id = null;
        this.height = this.width = this.y = this.x = 0;
        this.scaleY = this.scaleX = this.alpha = 1;
        this.regY = this.regX = this.rotation = 0;
        this.mouseEnabled = this.visible = !0;
        this.useHandCursor = !1;
        this.stage = this.parent = null;
        this.toolTip = ""
    };
    casual.inherit(b, casual.EventDispatcher);
    casual.DisplayObject = b;
    var a = document.createElement("canvas");
    a.width = a.height = 1;
    b.__hitTestContext = a.getContext("2d");
    b.__hitTestTolerance = 100;
    b.prototype.getCurrentWidth = function() {
        return Math.abs(this.width * this.scaleX)
    };
    b.prototype.getCurrentHeight = function() {
        return Math.abs(this.height * this.scaleY)
    };
    b.prototype.getStage = function() {
        if (this.stage) return this.stage;
        for (var a = this; a.parent;) a = a.parent;
        return a instanceof casual.Stage ? this.stage = a : null
    };
    b.prototype.localToGlobal = function(a, b) {
        var e = this.getConcatenatedMatrix();
        if (e == null) return {
            x: 0,
            y: 0
        };
        var f = new casual.Matrix(1, 0, 0, 1, a, b);
        f.concat(e);
        return {
            x: f.tx,
            y: f.ty
        }
    };
    b.prototype.globalToLocal = function(a, b) {
        var e = this.getConcatenatedMatrix();
        if (e == null) return {
            x: 0,
            y: 0
        };
        e.invert();
        var f = new casual.Matrix(1, 0, 0, 1, a, b);
        f.concat(e);
        return {
            x: f.tx,
            y: f.ty
        }
    };
    b.prototype.localToTarget = function(a, b, e) {
        a = this.localToGlobal(a, b);
        return e.globalToLocal(a.x, a.y)
    };
    b.prototype.getConcatenatedMatrix = function() {
        for (var a = new casual.Matrix, b = this; b != null; b = b.parent)
            if (a.concatTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.regX, b.regY), b instanceof casual.Stage) break;
        return a
    };
    b.prototype._transform = function(a, b) {
        if (b) {
            var e = this.localToGlobal(0, 0);
            (e.x != 0 || e.y != 0) && a.translate(e.x, e.y)
        } else a.translate(this.x, this.y);
        this.rotation % 360 > 0 && a.rotate(this.rotation % 360 / 180 * Math.PI);
        (this.scaleX != 1 || this.scaleY != 1) && a.scale(this.scaleX, this.scaleY);
        b || a.translate(-this.regX, -this.regY);
        a.globalAlpha *= this.alpha
    };
    b.prototype._render = function(a, b, e) {
        this.visible && !(this.alpha <= 0) && (a.save(), b || this._transform(a.context, e), this.render(a), a.restore())
    };
    b.prototype.render = function() {};
    b.prototype.hitTestPoint = function(a, d, e, f) {
        if (!e) return f = this.globalToLocal(a, d), f.x >= 0 && f.x <= this.getCurrentWidth() && f.y >= 0 && f.y <= this.getCurrentHeight();
        e = b.__hitTestContext;
        e.setTransform(1, 0, 0, 1, -a, -d);
        this._render(e, !1, !0);
        f = f || b.__hitTestTolerance;
        a = !1;
        try {
            e.getImageData(0, 0, 1, 1).data[3] >= f && (a = !0)
        } catch (h) {
            trace("hitTestPoint:", this, h)
        }
        e.canvas.width = 0;
        e.canvas.width = 1;
        return a
    };
    b.prototype.hitTestObject = function(a, d, e) {
        var f = this.getRect(this.getStage()),
            h = a.getRect(this.getStage());
        if (!d) return f.intersects(h);
        f = f.intersection(h);
        e = e || b.__hitTestTolerance;
        if (f && f.width > 0 && f.height > 0) {
            d = !1;
            try {
                var g = b.__hitTestContext;
                g.canvas.width = f.width;
                g.canvas.height = f.height;
                g.setTransform(1, 0, 0, 1, -f.x, -f.y);
                this._render(g, !1, !0);
                var i = g.getImageData(0, 0, f.width, f.height).data;
                g.canvas.width = 0;
                g.canvas.width = f.width;
                g.setTransform(1, 0, 0, 1, -f.x, -f.y);
                a._render(g, !1, !0);
                for (var j = g.getImageData(0, 0, f.width, f.height).data, a = 0; a < i.length;) {
                    if ((i[a] > 0 || i[a + 1] > 0 || i[a + 2] > 0 || i[a + 3] >= e) && (j[a] > 0 || j[a + 1] > 0 || j[a + 2] > 0 || j[a + 3] >=
                            e)) {
                        d = !0;
                        break
                    }
                    a += 4
                }
            } catch (l) {}
            g.canvas.width = 0;
            g.canvas.width = g.canvas.height = 1;
            return d
        }
        return !1
    };
    b.prototype.getRect = function(a) {
        a = this.localToTarget(0, 0, a);
        return new Rectangle(a.x, a.y, this.getCurrentWidth(), this.getCurrentHeight())
    };
    b.prototype.onMouseEvent = null;
    b.prototype.toString = function() {
        return NameUtil.displayObjectToString(this)
    }
})();
(function() {
    var b = function() {
        casual.DisplayObject.call(this);
        this.children = [];
        this.mouseChildren = !0
    };
    casual.inherit(b, casual.DisplayObject);
    casual.DisplayObjectContainer = b;
    b.prototype.addChildAt = function(a, c) {
        if (c < 0) c = 0;
        else if (c > this.children.length) c = this.children.length;
        var b = this.getChildIndex(a);
        if (b != -1) {
            if (b == c) return a;
            this.children.splice(b, 1)
        } else a.parent && a.parent.removeChild(a);
        this.children.splice(c, 0, a);
        a.parent = this;
        return a
    };
    b.prototype.addChild = function(a) {
        return this.addChildAt(a,
            this.children.length)
    };
    b.prototype.removeChildAt = function(a) {
        if (a < 0 || a >= this.children.length) return !1;
        var c = this.children[a];
        if (c != null) c.parent = null, c.stage = null;
        this.children.splice(a, 1);
        return !0
    };
    b.prototype.removeChild = function(a) {
        return this.removeChildAt(this.children.indexOf(a))
    };
    b.prototype.removeChildByName = function(a) {
        for (var c = 0, b = this.children.length; c < b; c++)
            if (this.children[c].name == a) return this.removeChildAt(c);
        return null
    };
    b.prototype.removeAllChildren = function() {
        for (; this.children.length >
            0;) this.removeChildAt(0)
    };
    b.prototype.getChildByName = function(a) {
        for (var c = 0, b = this.children.length; c < b; c++) {
            var e = this.children[c];
            if (e.name == a) return e
        }
        return null
    };
    b.prototype.getChildAt = function(a) {
        return a < 0 || a >= this.children.length ? null : this.children[a]
    };
    b.prototype.getChildIndex = function(a) {
        return this.children.indexOf(a)
    };
    b.prototype.setChildIndex = function(a, c) {
        if (a.parent == this) {
            var b = this.children.indexOf(a);
            c != b && (this.children.splice(b, 1), this.children.splice(c, 0, a))
        }
    };
    b.prototype.swap =
        function(a, c, b) {
            this.children.splice(a - 1, 1, b);
            this.children.splice(a, 1, c)
        };
    b.prototype.contains = function(a) {
        return this.getChildIndex(a) != -1
    };
    b.prototype.getNumChildren = function() {
        return this.children.length
    };
    b.prototype.getObjectUnderPoint = function(a, c, d, e, f) {
        if (f) var h = [];
        for (var g = this.children.length - 1; g >= 0; g--) {
            var i = this.children[g];
            if (!(i == null || !i.mouseEnabled || !i.visible || i.alpha <= 0))
                if (i instanceof b && i.mouseChildren && i.getNumChildren() > 0) {
                    var j = i.getObjectUnderPoint(a, c, d, e, f);
                    if (j)
                        if (f) j.length >
                            0 && (h = h.concat(j));
                        else return j;
                    else if (i.hitTestPoint(a, c, d, e))
                        if (f) h.push(i);
                        else return i
                } else if (i.hitTestPoint(a, c, d, e))
                if (f) h.push(i);
                else return i
        }
        return f ? h : null
    };
    b.prototype.render = function(a) {
        for (var c = 0, b = this.children.length; c < b; c++) this.children[c]._render(a)
    }
})();
(function() {
    var b = function(a) {
        if (a == null) throw Error("Context can't be null!");
        casual.DisplayObjectContainer.call(this);
        this.name = NameUtil.createUniqueName("Stage");
        this.context = this.gp = new casual.JGraphics(a);
        this.canvas = a.canvas;
        this.mouseY = this.mouseX = 0;
        this.traceMouseTarget = !0;
        this.usePixelTrace = !1;
        this.dragTarget = this.mouseTarget = null;
        this._frameRate = this._dragMouseY = this._dragMouseX = 0;
        this._pauseInNextFrame = this._paused = !1;
        this.__intervalID = null;
        this.setFrameRate(20);
        casual.StageEvent.supportTouch() ?
            (this.canvas.addEventListener("touchstart", casual.delegate(this.__touchHandler, this), !1), this.canvas.addEventListener("touchmove", casual.delegate(this.__touchHandler, this), !1), this.canvas.addEventListener("touchend", casual.delegate(this.__touchHandler, this), !1)) : (this.canvas.addEventListener("mousedown", casual.delegate(this.__mouseHandler, this), !1), this.canvas.addEventListener("mousemove", casual.delegate(this.__mouseHandler, this), !1), this.canvas.addEventListener("mouseup", casual.delegate(this.__mouseHandler,
                this), !1))
    };
    casual.inherit(b, casual.DisplayObjectContainer);
    casual.Stage = b;
    b.prototype.setPaused = function(a, c) {
        if (this._paused != a) this._paused = a, this._pauseInNextFrame = c || !1
    };
    b.prototype.getPaused = function() {
        return this._paused
    };
    b.prototype.getFrameRate = function() {
        return this._frameRate
    };
    b.prototype.setFrameRate = function(a) {
        if (this._frameRate != a) this._frameRate = a, this.__intervalID != null && clearInterval(this.__intervalID), this.__intervalID = setInterval(casual.delegate(this.__enterFrame, this), 1E3 / this._frameRate)
    };
    b.prototype.__touchHandler = function(a) {
        var c = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        if (c) {
            var b = c.pageY || c.clientY || c.screenY;
            this.mouseX = ((c.pageX || c.clientX || c.screenX) - this.canvas.offsetLeft) / (this.canvas.offsetWidth / casual.game.width);
            this.mouseY = (b - this.canvas.offsetTop) / (this.canvas.offsetHeight / casual.game.height)
        }
        this.traceMouseTarget && this.__getMouseTarget(a);
        c = {
            target: this.mouseTarget || this,
            mouseX: this.mouseX,
            mouseY: this.mouseY,
            button: 0
        };
        switch (a.type) {
            case "touchstart":
                c.type = "mousedown";
                break;
            case "touchmove":
                c.type = "mousemove";
                break;
            case "touchend":
                c.type = "mouseup"
        }
        c = casual.copy(a, casual.StageEvent, c);
        if (this.mouseTarget && this.mouseTarget.onMouseEvent && (this.mouseTarget.onMouseEvent(c), c.type == "mouseup")) this.mouseTarget.onMouseEvent(casual.copy(a, casual.StageEvent, {
            type: "mouseout"
        }));
        this.dispatchEvent(c)
    };
    b.prototype.__mouseHandler = function(a) {
        this.mouseX = (a.pageX - this.canvas.offsetLeft) / (this.canvas.offsetWidth / casual.game.width);
        this.mouseY = (a.pageY - this.canvas.offsetTop) / (this.canvas.offsetHeight / casual.game.height);
        this.traceMouseTarget && a.type == "mousemove" && this.__getMouseTarget(a);
        var c = casual.copy(a, casual.StageEvent);
        c.target = c.currentTarget = this.mouseTarget || this;
        c.mouseX = this.mouseX;
        c.mouseY = this.mouseY;
        if (this.mouseTarget && this.mouseTarget.onMouseEvent) this.mouseTarget.onMouseEvent(c);
        this.setCursor(this.mouseTarget && this.mouseTarget.useHandCursor ? "pointer" : "");
        this.dispatchEvent(c);
        a.stopPropagation()
    };
    b.prototype.removeAllChildren =
        function() {
            for (; this.children.length > 0;) this.removeChildAt(0)
        };
    b.prototype.__getMouseTarget = function(a) {
        var c = this.getObjectUnderPoint(this.mouseX, this.mouseY, this.usePixelTrace),
            b = this.mouseTarget;
        this.mouseTarget = c;
        if (b && b.onMouseEvent && b != c) a = casual.copy(a, casual.StageEvent), a.type = "mouseout", a.target = a.currentTarget = b, a.mouseX = this.mouseX, a.mouseY = this.mouseY, b.onMouseEvent(a)
    };
    b.prototype.__enterFrame = function() {
        if (!this._paused || this._pauseInNextFrame)
            if (this.dispatchEvent(new StageEvent(StageEvent.ENTER_FRAME)), (!this._paused || this._pauseInNextFrame) && this._render(this.context, !0), this._frameRate <= 0) clearInterval(this.__intervalID), this.__intervalID = null
    };
    b.prototype.render = function(a, c) {
        if (!a) a = this.context;
        c ? this.clear(c.x, c.y, c.width, c.height) : this.clear();
        b.superClass.render.call(this, a);
        if (this._pauseInNextFrame) this._paused = !0, this._pauseInNextFrame = !1
    };
    b.prototype.startDrag = function(a) {
        this.dragTarget = a;
        a = this.dragTarget.globalToLocal(this.mouseX, this.mouseY);
        this._dragMouseX = a.x;
        this._dragMouseY =
            a.y
    };
    b.prototype.stopDrag = function() {
        this.dragTarget = null
    };
    b.prototype.setCursor = function(a) {
        this.canvas.style.cursor = a
    };
    b.prototype.clear = function(a, c, b, e) {
        this.gp.clear(a, c, b, e)
    };
    b.prototype.getStageWidth = function() {
        return this.canvas.width
    };
    b.prototype.getStageHeight = function() {
        return this.canvas.height
    }
})();
(function() {
    var b = function(a, c) {
        casual.DisplayObject.call(this);
        this.name = NameUtil.createUniqueName("Bitmap");
        this.mouseEnabled = !1;
        this.image = a;
        this.frame = c ? c : [0, 0, a.width, a.height];
        this.width = this.frame[2];
        this.height = this.frame[3];
        this.regX = this.frame[4] || 0;
        this.regY = this.frame[5] || 0
    };
    casual.inherit(b, casual.DisplayObject);
    casual.Bitmap = b;
    b.prototype.render = function(a) {
        a.drawImage(this.image, this.frame[0], this.frame[1], this.frame[2], this.frame[3], 0, 0, this.width, this.height)
    }
})();
(function() {
    var b = function() {
        casual.DisplayObjectContainer.call(this);
        this.name = NameUtil.createUniqueName("Sprite")
    };
    casual.inherit(b, casual.DisplayObjectContainer);
    casual.Sprite = b
})();
(function() {
    var b = function(a, c, b, e, f) {
        this.disObj = a;
        this.label = c || null;
        this.gotoFrame = b || 0;
        this.pauseFrames = e || 0;
        this.stop = f || !1
    };
    casual.Frame = b;
    b.prototype.render = function(a, c, b) {
        if (c != void 0) this.disObj.x = c;
        if (b != void 0) this.disObj.y = b;
        this.disObj._render(a, !1, !1)
    }
})();
(function() {
    var b = function(a) {
        casual.Sprite.call(this);
        this.name = NameUtil.createUniqueName("MovieClip");
        this._frameLables = {};
        this._frames = [];
        a && this.addFrame(a);
        this.currentFrame = 1;
        this._frameDisObj = null;
        this._pauseFrames = 0;
        this._paused = !1;
        this.iTimeTick = this.interval = 0
    };
    casual.inherit(b, casual.Sprite);
    casual.MovieClip = b;
    b.prototype.addFrame = function(a) {
        if (a[0] instanceof casual.Frame || a[0] instanceof Array)
            for (var c in a) this.addFrame(a[c]);
        else this.setFrame(this._frames.length + 1, a);
        return this
    };
    b.prototype.setInterval = function(a) {
        this.iTimeTick = this.interval = a
    };
    b.prototype.addFrameAt = function(a, c) {
        this._frames.splice(c, 0, null);
        this.setFrame(c + 1, a)
    };
    b.prototype.setFrame = function(a, c) {
        var b;
        b = c instanceof casual.Frame ? c : new casual.Frame(c);
        this._frames[a - 1] = b;
        b.label && (this._frameLables[b.label] = b);
        if (a == 1) this._frameDisObj = b.disObj, this.width = Math.max(this.width, this._frameDisObj.width), this.height = Math.max(this.height, this._frameDisObj.height)
    };
    b.prototype.getFrameNumber = function(a) {
        if (typeof a ==
            "number") return a;
        var c = a;
        typeof c == "string" && (c = this._frameLables[a]);
        for (a = 0; a < this._frames.length; a++)
            if (c == this._frames[a]) return a + 1;
        return -1
    };
    b.prototype.getFrame = function(a) {
        return typeof a == "number" ? this._frames[a - 1] : this._frameLables[a]
    };
    b.prototype.removeFrame = function(a) {
        var c = this.getFrame(a);
        c.label && (a = this.getFrameNumber(c), delete this._frameLables[c.label]);
        this._frames.splice(a - 1, 1)
    };
    b.prototype.getTotalFrames = function() {
        return this._frames.length
    };
    b.prototype.nextFrame = function() {
        var a =
            this.getFrame(this.currentFrame);
        if (a.pauseFrames) a.pauseFrames > this._pauseFrames ? this._pauseFrames++ : this._pauseFrames = 0;
        return a.gotoFrame && (this._pauseFrames == 0 || !a.pauseFrames) ? this.currentFrame = this.getFrameNumber(a.gotoFrame) : a.pauseFrames && this._pauseFrames > 0 ? this.currentFrame : this.currentFrame >= this._frames.length ? this.currentFrame = 1 : ++this.currentFrame
    };
    b.prototype.play = function() {
        this._paused = !1
    };
    b.prototype.stop = function() {
        this._paused = !0
    };
    b.prototype.gotoAndStop = function(a) {
        this.currentFrame =
            this.getFrameNumber(a);
        this._paused = !0
    };
    b.prototype.gotoAndPlay = function(a) {
        this.currentFrame = this.getFrameNumber(a);
        this._paused = !1
    };
    b.prototype.render = function(a) {
        var c = this.getFrame(this.currentFrame);
        this._frameDisObj && this._frameDisObj != c.disObj && this.removeChild(this._frameDisObj);
        this.addChildAt(c.disObj, 0);
        this._frameDisObj = c.disObj;
        this.width = Math.max(this.width, this._frameDisObj.width);
        this.height = Math.max(this.height, this._frameDisObj.height);
        c.stop && this.stop();
        b.superClass.render.call(this,
            a);
        if (!this._paused && (this.iTimeTick--, this.iTimeTick < 0)) this.nextFrame(), this.iTimeTick = this.interval
    }
})();
(function() {
    var b = function() {
        this.name = NameUtil.createUniqueName("Graphics");
        var a = document.createElement("canvas");
        a.width = 1E3;
        a.height = 1E3;
        this._context = a.getContext("2d");
        b._init(this, this._context)
    };
    casual.Graphics = b;
    b.TOP = 16;
    b.LEFT = 4;
    b.RIGHT = 8;
    b.BOTTOM = 32;
    b.HCENTER = 1;
    b.VCENTER = 2;
    b.prototype._proxy = function(a, c, b) {
        this[c] = function() {
            return a[c].apply(a, arguments) || this
        };
        b && (this[b] = this[c])
    };
    b._init = function(a, c) {
        a._proxy(c, "beginPath");
        a._proxy(c, "closePath");
        a._proxy(c, "stroke");
        a._proxy(c,
            "fill");
        a._proxy(c, "moveTo");
        a._proxy(c, "lineTo");
        a._proxy(c, "arcTo");
        a._proxy(c, "arc");
        a._proxy(c, "quadraticCurveTo", "curveTo");
        a._proxy(c, "bezierCurveTo");
        a._proxy(c, "rect");
        a._proxy(c, "createLinearGradient");
        a._proxy(c, "createRadialGradient");
        a._proxy(c, "createPattern");
        a.fillStyle = null;
        a.strokeStyle = null;
        a.fillAlpha = 1;
        a.lineAlpha = 1;
        a.lineWidth = 1
    };
    b.prototype.lineStyle = function(a, c, b, e, f, h) {
        this.lineWidth = this._context.lineWidth = a || 1;
        this.strokeStyle = this._context.strokeStyle = c || "0";
        this.lineAlpha =
            b || 1;
        if (e != void 0) this._context.lineCap = e;
        if (f != void 0) this._context.lineJoin = f;
        if (h != void 0) this._context.miterLimit = h;
        return this
    };
    b.prototype.beginLinearGradientFill = function(a, c, b, e, f, h) {
        a = this.createLinearGradient(a, c, b, e);
        c = 0;
        for (b = f.length; c < b; c++) a.addColorStop(h[c], f[c]);
        this.fillStyle = a;
        return this
    };
    b.prototype.beginRadialGradientFill = function(a, c, b, e, f, h, g, i) {
        a = this.createRadialGradient(a, c, b, e, f, h);
        c = 0;
        for (b = g.length; c < b; c++) a.addColorStop(i[c], g[c]);
        this.fillStyle = a;
        return this
    };
    b.prototype.beginBitmapFill =
        function(a, c) {
            this.fillStyle = this.createPattern(a, c || "");
            return this
        };
    b.prototype.beginFill = function(a, c) {
        if (a) this.fillStyle = this._context.fillStyle = a;
        this.fillAlpha = c || 1;
        return this
    };
    b.prototype.endFill = function() {
        if (this.strokeStyle) this._context.strokeStyle = this.strokeStyle, this._context.globalAlpha = this.lineAlpha, this._context.stroke();
        if (this.fillStyle) this._context.fillStyle = this.fillStyle, this._context.globalAlpha = this.fillAlpha, this._context.fill();
        return this
    };
    b.prototype.drawRect = function(a,
        c, b, e) {
        this.beginPath();
        this.rect(a, c, b, e);
        this.closePath();
        this.endFill();
        return this
    };
    b.prototype.drawRoundRect = function(a, c, b, e, f) {
        return this.drawRoundRectComplex(a, c, b, e, f, f, f, f)
    };
    b.prototype.drawRoundRectComplex = function(a, c, b, e, f, h, g, i) {
        this.beginPath();
        this.moveTo(a + f, c);
        this.lineTo(a + b - h, c);
        this.arc(a + b - h, c + h, h, -Math.PI / 2, 0, !1);
        this.lineTo(a + b, c + e - g);
        this.arc(a + b - g, c + e - g, g, 0, Math.PI / 2, !1);
        this.lineTo(a + i, c + e);
        this.arc(a + i, c + e - i, i, Math.PI / 2, Math.PI, !1);
        this.lineTo(a, c + f);
        this.arc(a + f, c + f,
            f, Math.PI, Math.PI * 3 / 2, !1);
        this.closePath();
        this.endFill();
        return this
    };
    b.prototype.drawCircle = function(a, c, b) {
        this.beginPath();
        this.arc(a + b, c + b, b, 0, Math.PI * 2, 0);
        this.closePath();
        this.endFill();
        return this
    };
    b.prototype.drawEllipse = function(a, c, b, e) {
        if (b == e) return this.drawCircle(a, c, b);
        b /= 2;
        e /= 2;
        var f = 0.5522847498307933 * b,
            h = 0.5522847498307933 * e;
        a += b;
        c += e;
        this.beginPath();
        this.moveTo(a + b, c);
        this.bezierCurveTo(a + b, c - h, a + f, c - e, a, c - e);
        this.bezierCurveTo(a - f, c - e, a - b, c - h, a - b, c);
        this.bezierCurveTo(a - b, c +
            h, a - f, c + e, a, c + e);
        this.bezierCurveTo(a + f, c + e, a + b, c + h, a + b, c);
        this.closePath();
        this.endFill();
        return this
    };
    b.prototype.get = function() {
        return this._context.canvas
    };
    b.prototype.setSize = function(a, c) {
        this._context.save();
        if (a != void 0) this._context.canvas.width = a;
        if (c != void 0) this._context.canvas.height = c;
        this._context.restore();
        return this
    };
    b.prototype.clear = function() {
        this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
        this._context.restore();
        return this
    }
})();
(function() {
    var b = function(a) {
        casual.DisplayObject.call(this);
        this.name = NameUtil.createUniqueName("Shape");
        this.mouseEnabled = !1;
        this.graphics = a || new casual.Graphics
    };
    casual.inherit(b, casual.DisplayObject);
    casual.Shape = b;
    b.prototype.render = function(a) {
        a.drawImage(this.graphics.get(), 0, 0)
    }
})();
(function() {
    var b = function(a, c, b) {
        casual.DisplayObject.call(this);
        this.name = NameUtil.createUniqueName("Text");
        this.text = a;
        this.color = c || "#000";
        this.font = b || "12px Arial";
        this.align = "start";
        this.baseline = "alphabetic";
        this.maxWidth = null;
        this.outline = !1
    };
    casual.inherit(b, casual.DisplayObject);
    casual.Text = b;
    b.prototype.render = function(a) {
        if (this.text && this.text.length != 0) this.outline ? a.strokeStyle = this.color : a.fillStyle = this.color, a.font = this.font, a.textAlign = this.align, a.textBaseline = this.baseline, this.outline ?
            a.strokeText(this.text, 0, 0) : a.fillText(this.text, 0, 0)
    };
    b.prototype.getWidth = function(a) {
        return !this.text || this.text.length == 0 ? 0 : a.measureText(this.text).width
    }
})();
(function() {
    var b = function(a, c, d, e) {
        casual.MovieClip.call(this);
        this.name = NameUtil.createUniqueName("Button");
        a && this.setUpState(a);
        c && this.setOverState(c);
        d && this.setDownState(d);
        e && this.setDisabledState(e);
        this.state = b.state.UP;
        this.enabled = !0;
        this.mouseChildren = !1;
        this.useHandCursor = !0;
        this.stop()
    };
    casual.inherit(b, casual.MovieClip);
    casual.Button = b;
    b.state = {
        UP: "up",
        OVER: "over",
        DOWN: "down",
        DISABLED: "disabled"
    };
    b.prototype.setUpState = function(a) {
        this.addFrameAt(new casual.Frame(a, b.state.UP), 0);
        this.upState = a;
        return this
    };
    b.prototype.setOverState = function(a) {
        this.addFrameAt(new casual.Frame(a, b.state.OVER), 1);
        this.overState = a;
        return this
    };
    b.prototype.setDownState = function(a) {
        this.addFrameAt(new casual.Frame(a, b.state.DOWN), 2);
        this.downState = a;
        return this
    };
    b.prototype.setDisabledState = function(a) {
        this.addFrameAt(new casual.Frame(a, b.state.DISABLED), 3);
        this.disabledState = a;
        return this
    };
    b.prototype.setEnabled = function(a) {
        if (this.enabled == a) return this;
        (this.mouseEnabled = this.enabled = a) ? this.currentFrame ==
            4 && this.gotoAndStop(b.state.UP): this.disabledState ? this.gotoAndStop(b.state.DISABLED) : this.gotoAndStop(b.state.UP);
        return this
    };
    b.prototype.setState = function(a) {
        if (this.state != a) switch (this.state = a, a) {
            case b.state.OVER:
            case b.state.DOWN:
            case b.state.UP:
                if (!this.enabled) this.mouseEnabled = this.enabled = !0;
                this.gotoAndStop(a);
                break;
            case b.state.DISABLED:
                this.setEnabled(!1)
        }
    };
    b.prototype.onMouseEvent = function(a) {
        if (this.enabled) switch (a.type) {
            case "mousemove":
                if (this.onMouseOver && this.state != b.state.OVER) a.type =
                    "mouseover", this.onMouseOver(a);
                else if (this.onMouseMove && this.state == b.state.OVER) this.onMouseMove(a);
                this.overState && this.state == b.state.UP && this.setState(b.state.OVER);
                break;
            case "mouseout":
                this.upState && this.setState(b.state.UP);
                if (this.onMouseOut) a.type = "mouseout", this.onMouseOut(a);
                break;
            case "mousedown":
                this.downState && this.setState(b.state.DOWN);
                if (this.onMouseDown) this.onMouseDown(a);
                break;
            case "mouseup":
                if (this.overState ? this.setState(b.state.OVER) : this.setState(b.state.UP), this.onMouseUp) this.onMouseUp(a)
        }
    };
    b.prototype.onMouseMove = null;
    b.prototype.onMouseOver = null;
    b.prototype.onMouseOut = null;
    b.prototype.onMouseDown = null;
    b.prototype.onMouseUp = null
})();
(function() {
    var b = function(a, c, b) {
        this._playing = this._loaded = !1;
        this._autoPlay = c;
        this._loop = b || !1;
        try {
            this._element = document.createElement("audio"), this._element.preload = !0, this._element.loop = b || !1, this._element.type = "audio/mpeg", this._element.src = a, this._element.load(), this._element.addEventListener("ended", casual.delegate(this._endHandler, this), !1)
        } catch (e) {}
    };
    casual.Audio = b;
    b.prototype._loadHandler = function() {
        if (this._element.readyState > 2) this._loaded = !0, clearTimeout(this._loadInterval), this._loadInterval =
            null, this._autoPlay && this.play();
        if (this._element.error) clearTimeout(this._loadInterval), this._loadInterval = null
    };
    b.prototype._endHandler = function() {
        this._loop ? (this._playing = !1, this.play(!0)) : this._playing = !1
    };
    b.prototype.play = function(a) {
        this._loop = a;
        if (!this._playing) this._element.play(), this._playing = !0
    };
    b.prototype.stop = function() {
        if (this.isPlaying()) this._element.pause(), this._playing = !1
    };
    b.prototype.isLoaded = function() {
        return this._loaded
    };
    b.prototype.isPlaying = function() {
        return this._playing
    }
})();
(function() {
    function b(b, e) {
        window[b] != void 0 && (a[b] = window[b]);
        c[b] = window[b] = (e || casual)[b]
    }
    var a = {},
        c = {};
    casual.noConflict = function() {
        for (var b in c) a[b] != void 0 ? window[b] = a[b] : delete window[b]
    };
    b("trace");
    b("EventBase");
    b("StageEvent");
    b("EventDispatcher");
    b("Matrix");
    b("Point");
    b("Rectangle");
    b("NameUtil");
    b("DisplayObject");
    b("DisplayObjectContainer");
    b("Graphics");
    b("Shape");
    b("Bitmap");
    b("Sprite");
    b("Frame");
    b("MovieClip");
    b("Stage");
    b("Text");
    b("Button");
    b("Audio")
})();
(function() {
    var b = function(a) {
        casual.EventDispatcher.call(this);
        this.name = NameUtil.createUniqueName("ImageLoader");
        this.loading = !1;
        this._index = -1;
        this._loaded = 0;
        this._images = {};
        this._totalSize = 0;
        this._loadHandler = casual.delegate(this._loadHandler, this);
        this._addSource(a)
    };
    casual.inherit(b, casual.EventDispatcher);
    casual.ImageLoader = b;
    b.prototype.load = function(a) {
        this._addSource(a);
        this.loading || this._loadNext()
    };
    b.prototype._addSource = function(a) {
        if (a) {
            for (var a = a instanceof Array ? a : [a], c = 0; c < a.length; c++) this._totalSize +=
                a[c].size || 0;
            this._source = this._source ? this._source.concat(a) : a
        }
    };
    b.prototype._loadNext = function() {
        this._index++;
        if (this._index >= this._source.length) this.dispatchEvent({
            type: "complete",
            target: this,
            images: this._images
        }), this._source = [], this.loading = !1, this._index = -1;
        else {
            var a = new Image;
            a.onload = this._loadHandler;
            a.src = this._source[this._index].src;
            this.loading = !0
        }
    };
    b.prototype._loadHandler = function(a) {
        this._loaded++;
        var c = this._source[this._index];
        c.image = a.target;
        this._images[c.id || c.src] = c;
        this.dispatchEvent({
            type: "loaded",
            target: this,
            image: c
        });
        this._loadNext()
    };
    b.prototype.getLoaded = function() {
        return this._loaded
    };
    b.prototype.getTotal = function() {
        return this._source.length
    };
    b.prototype.getLoadedSize = function() {
        var a = 0,
            c;
        for (c in this._images) a += this._images[c].size || 0;
        return a
    };
    b.prototype.getTotalSize = function() {
        return this._totalSize
    }
})();
var Tea = function(b) {
    Tea.S = Array(4);
    Tea.SUGAR = -1640531527;
    Tea.MIN_VALUE = -2147483648;
    Tea.MAX_VALUE = 2147483647;
    Tea.CUPS = 32;
    Tea.UNSUGAR = -957401312;
    for (var b = Tea.StringToBytes(b), a = 0, c = 0; c < 4; c++) Tea.S[c] = b[a++] & 255 | (b[a++] & 255) << 8 | (b[a++] & 255) << 16 | (b[a++] & 255) << 24
};
Tea.readUTF8String = function(b) {
    var a = 0;
    b.slice(0, 3) == "\u00ef\u00bb\u00bf" && (a = 3);
    for (var c = ""; a < b.length; a++) {
        var d = b[a];
        if (d < 128) c += String.fromCharCode(d);
        else if (d >= 194 && d < 224) {
            var e = b[++a];
            c += String.fromCharCode(((d & 31) << 6) + (e & 63))
        } else if (d >= 224 && d < 240) {
            var e = b[++a],
                f = b[++a];
            c += String.fromCharCode(((d & 255) << 12) + ((e & 63) << 6) + (f & 63))
        } else if (d >= 240 && d < 245) {
            var e = b[++a],
                f = b[++a],
                h = b[++a],
                d = ((d & 7) << 18) + ((e & 63) << 12) + ((f & 63) << 6) + (h & 63);
            d -= 65536;
            c += String.fromCharCode((d >> 10) + 55296, (d & 1023) + 56320)
        }
    }
    return c
};
Tea.StringToBytes = function(b) {
    for (var a = [], c, d = 0, e = b.length; d < e; d++) c = b.charCodeAt(d), a.push(c >> 0 & 255 | c >> 8 & 255 | c >> 16 & 255 | c >> 24 & 255);
    return a
};
Tea.encrypt = function(b) {
    if (b == void 0) return "";
    var b = Tea.StringToBytes(b),
        a = Array((Math.floor(b.length / 8) + (b.length % 8 == 0 ? 0 : 1)) * 2 + 1);
    a[0] = b.length;
    for (var c = 1; c < a.length; c++) a[c] = 0;
    Tea.pack(b, a, 1);
    Tea.brew(a);
    return Base64.beginEncode(Tea.unpack(a, 0, a.length * 4), !1)
};
Tea.decrypt = function(b) {
    var b = Base64.decode(b),
        a = Array(Math.floor(b.length / 4));
    Tea.pack(b, a, 0);
    Tea.unbrew(a);
    return Tea.readUTF8String(Tea.unpack(a, 1, a[0]))
};
Tea.pack = function(b, a, c) {
    var d = 0,
        e = 24;
    for (a[c] = 0; d < b.length;) a[c] |= (b[d] & 255) << e, e == 0 ? (e = 24, c++, c < a.length && (a[c] = 0)) : e -= 8, d++
};
Tea.brew = function(b) {
    var a, c, d, e, f;
    for (a = 1; a < b.length;) {
        f = Tea.CUPS;
        c = b[a];
        d = b[a + 1];
        for (e = 0; f-- > 0;) e += Tea.SUGAR, c += ((d << 4) + Tea.S[0] ^ d) + (e ^ d >>> 5) + Tea.S[1], d += ((c << 4) + Tea.S[2] ^ c) + (e ^ c >>> 5) + Tea.S[3];
        b[a] = c;
        b[a + 1] = d;
        a += 2
    }
};
Tea.unbrew = function(b) {
    var a, c, d, e, f;
    for (a = 1; a < b.length;) {
        f = Tea.CUPS;
        c = b[a];
        d = b[a + 1];
        for (e = Tea.UNSUGAR; f-- > 0;) d -= ((c << 4) + Tea.S[2] ^ c) + (e ^ c >>> 5) + Tea.S[3], d = Tea.changeInt(d), c -= ((d << 4) + Tea.S[0] ^ d) + (e ^ d >>> 5) + Tea.S[1], c = Tea.changeInt(c), e -= Tea.SUGAR, e = Tea.changeInt(e);
        b[a] = c;
        b[a + 1] = d;
        a += 2
    }
};
Tea.changeInt = function(b) {
    return b > Tea.MAX_VALUE ? Tea.MIN_VALUE + (b - Tea.MAX_VALUE - 1) : b < Tea.MIN_VALUE ? Tea.MAX_VALUE - (Math.abs(b) + Tea.MIN_VALUE - 1) : b
};
Tea.unpack = function(b, a, c) {
    for (var d = Array(Math.floor(c)), e = 0, f = 0; f < c; f++) d[f] = b[a] >> 24 - 8 * e & 255, e++, e == 4 && (e = 0, a++);
    return d
};
var Base64 = {
    cTable: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"],
    dTable: [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 62, -2, -2, -2, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -2, -2, -2, -1, -2, -2, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -2, -2, -2, -2, -2, -2, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -2, -2, -2, -2, -2
    ]
};
Base64.encode = function(b, a, c) {
    var d, e = 0,
        f = a + c - 2,
        h = Array(4 * Math.floor((c + 2) / 3));
    for (d = a; d < f; d += 3) h[e++] = Base64.cTable[b[d] >> 2 & 63], h[e++] = Base64.cTable[(b[d] & 3) << 4 | b[d + 1] >> 4 & 15], h[e++] = Base64.cTable[(b[d + 1] & 15) << 2 | b[d + 2] >> 6 & 3], h[e++] = Base64.cTable[b[d + 2] & 63];
    d - a < c && (h[e] = Base64.cTable[b[d] >> 2 & 63], h[e + 3] = "=", c + a - d == 1 ? (h[e + 1] = Base64.cTable[(b[d] & 3) << 4], h[e + 2] = "=") : (h[e + 1] = Base64.cTable[(b[d] & 3) << 4 | b[d + 1] >> 4 & 15], h[e + 2] = Base64.cTable[(b[d + 1] & 15) << 2]));
    return h.join("")
};
Base64.beginEncode = function(b) {
    return Base64.encode(b, 0, b.length)
};
Base64.value = function(b) {
    return b > 127 ? -2 : Base64.dTable[b]
};
Base64.decode = function(b) {
    var a, c = 0,
        d = 0,
        e, f = [0, 0, 0, 0],
        h;
    for (a = 0; a < b.length; a++)
        if ((h = Base64.value(b.charCodeAt(a))) > -2) switch (c++, c) {
            case 1:
            case 2:
                h < 0 && (c = 0);
                break;
            case 3:
                h < 0 && (c = 0, d++);
                break;
            case 4:
                d += h < 0 ? 2 : 3, c = 0
        }
        e = Array(d);
    for (a = d = c = 0; a < b.length; a++)
        if ((h = Base64.value(b.charCodeAt(a))) > -2) switch (f[c] = h, c++, c) {
            case 1:
            case 2:
                h < 0 && (c = 0);
                break;
            case 3:
                h < 0 && (c = 0, e[d++] = Base64.changeByte(f[0] << 2 | f[1] >> 4 & 3));
                break;
            case 4:
                e[d++] = Base64.changeByte(f[0] << 2 | f[1] >> 4 & 3), e[d++] = Base64.changeByte((f[1] & 15) << 4 |
                    f[2] >> 2), h > -1 && (e[d++] = Base64.changeByte((f[2] & 3) << 6 | h)), c = 0
        }
        return e
};
Base64.changeByte = function(b) {
    return b > 127 ? -128 + (b - 127 - 1) : b < -128 ? 127 - (Math.abs(b) - 128 - 1) : b
};
(function() {
    var b = function(a) {
        this.name = NameUtil.createUniqueName("Timer");
        this.interval = a || 50;
        this.paused = !1;
        this.info = {
            lastTime: 0,
            currentTime: 0,
            deltaTime: 0,
            realDeltaTime: 0
        };
        this._startTime = 0;
        this._intervalID = null;
        this._listeners = []
    };
    casual.Timer = b;
    b.prototype.start = function() {
        if (this._intervalID == null) {
            this._startTime = this.info.lastTime = this.info.currentTime = Date.now();
            var a = this,
                c = function() {
                    a._intervalID = setTimeout(c, a.interval);
                    a._run()
                };
            c()
        }
    };
    b.prototype.stop = function() {
        clearTimeout(this._intervalID);
        this._intervalID = null;
        this._startTime = 0
    };
    b.prototype.pause = function() {
        this.paused = !0
    };
    b.prototype.resume = function() {
        this.paused = !1
    };
    b.prototype._run = function() {
        if (!this.paused) {
            var a = this.info,
                c = a.currentTime = Date.now();
            a.deltaTime = a.realDeltaTime = c - a.lastTime;
            for (var b = 0, e = this._listeners.length, f, h; b < e; b++) f = this._listeners[b], h = f.__runTime || 0, h == 0 ? f.step(this.info) : c > h && (f.step(this.info), this._listeners.splice(b, 1), b--, e--);
            a.lastTime = c
        }
    };
    b.prototype.delay = function(a, c) {
        this.addListener({
            step: a,
            __runTime: Date.now() + c
        })
    };
    b.prototype.addListener = function(a) {
        if (a == null || typeof a.step != "function") throw "Timer Error: The listener object must implement a step() method!";
        this._listeners.push(a)
    };
    b.prototype.removeListener = function(a) {
        a = this._listeners.indexOf(a);
        a > -1 && this._listeners.splice(a, 1)
    }
})();
(function() {
    var b = function(c, b, e) {
        this.name = NameUtil.createUniqueName("Tween");
        this.target = c;
        this.delay = this.time = 0;
        this.reverse = this.loop = this.paused = !1;
        this.interval = 0;
        this.ease = a.Linear.EaseNone;
        this.onComplete = this.onUpdate = this.onStart = this.next = null;
        this._oldProps = {};
        this._newProps = {};
        this._deltaProps = {};
        this._pausedStartTime = this._pausedTime = this._lastTime = this._startTime = 0;
        this._reverseFlag = 1;
        this._frameCount = this._frameTotal = 0;
        for (var f in b) {
            var h = c[f],
                g = b[f];
            h !== void 0 && typeof h == "number" &&
                typeof g == "number" && (this._oldProps[f] = h, this._newProps[f] = g, this._deltaProps[f] = g - h)
        }
        for (f in e) this[f] = e[f]
    };
    casual.Tween = b;
    b.prototype.setProps = function(a, b) {
        for (var e in a) this.target[e] = this._oldProps[e] = a[e];
        for (e in b) this._newProps[e] = b[e], this._deltaProps[e] = b[e] - this.target[e]
    };
    b.prototype._init = function() {
        this._startTime = Date.now() + this.delay;
        this._pausedTime = 0;
        if (this.interval > 0) this._frameTotal = Math.round(this.time / this.interval);
        b.add(this)
    };
    b.prototype.start = function() {
        this._init();
        this.paused = !1
    };
    b.prototype.stop = function() {
        b.remove(this)
    };
    b.prototype.pause = function() {
        this.paused = !0;
        this._pausedStartTime = Date.now()
    };
    b.prototype.resume = function() {
        this.paused = !1;
        this._pausedTime += Date.now() - this._pausedStartTime
    };
    b.prototype._update = function() {
        if (!this.paused) {
            var a = Date.now(),
                d = a - this._startTime - this._pausedTime;
            if (!(d < 0)) {
                if (this._lastTime == 0 && this.onStart != null) this.onStart(this);
                this._lastTime = a;
                a = this._frameTotal > 0 ? ++this._frameCount / this._frameTotal : d / this.time;
                a > 1 && (a =
                    1);
                var d = this.ease(a),
                    e;
                for (e in this._oldProps) this.target[e] = this._oldProps[e] + this._deltaProps[e] * this._reverseFlag * d;
                if (this.onUpdate != null) this.onUpdate(this, d);
                if (a >= 1) {
                    if (this.reverse) {
                        if (e = this._oldProps, this._oldProps = this._newProps, this._newProps = e, this._startTime = Date.now(), this._frameCount = 0, this._reverseFlag *= -1, !this.loop) this.reverse = !1
                    } else if (this.loop) {
                        for (e in this._oldProps) this.target[e] = this._oldProps[e];
                        this._startTime = Date.now();
                        this._frameCount = 0
                    } else if (b.remove(this), e =
                        this.next, e != null && (e instanceof b ? (a = e, e = null) : a = e.shift(), a != null)) a.next = e, a.start();
                    if (this.onComplete != null) this.onComplete(this)
                }
            }
        }
    };
    b._tweens = [];
    b.step = function() {
        for (var a = this._tweens, b = a.length; --b >= 0;) a[b]._update()
    };
    b.add = function(a) {
        this._tweens.indexOf(a) == -1 && this._tweens.push(a);
        return this
    };
    b.remove = function(a) {
        var b = this._tweens,
            a = b.indexOf(a);
        a > -1 && b.splice(a, 1);
        return this
    };
    b.to = function(a, d, e) {
        a = new b(a, d, e);
        a._init();
        return a
    };
    b.from = function(a, d, e) {
        d = new b(a, d, e);
        e = d._oldProps;
        d._oldProps = d._newProps;
        d._newProps = e;
        d._reverseFlag = -1;
        for (var f in d._oldProps) a[f] = d._oldProps[f];
        d._init();
        return d
    };
    var a = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    a.Linear.EaseNone = function(a) {
        return a
    };
    a.Quadratic.EaseIn = function(a) {
        return a * a
    };
    a.Quadratic.EaseOut = function(a) {
        return -a * (a - 2)
    };
    a.Quadratic.EaseInOut = function(a) {
        return (a *= 2) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
    };
    a.Cubic.EaseIn = function(a) {
        return a * a * a
    };
    a.Cubic.EaseOut = function(a) {
        return --a * a * a + 1
    };
    a.Cubic.EaseInOut = function(a) {
        return (a *= 2) < 1 ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2)
    };
    a.Quartic.EaseIn = function(a) {
        return a * a * a * a
    };
    a.Quartic.EaseOut = function(a) {
        return -(--a * a * a * a - 1)
    };
    a.Quartic.EaseInOut = function(a) {
        return (a *= 2) < 1 ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
    };
    a.Quintic.EaseIn = function(a) {
        return a * a * a * a * a
    };
    a.Quintic.EaseOut = function(a) {
        return (a -= 1) * a * a * a * a + 1
    };
    a.Quintic.EaseInOut = function(a) {
        return (a *= 2) < 1 ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2)
    };
    a.Sinusoidal.EaseIn =
        function(a) {
            return -Math.cos(a * Math.PI / 2) + 1
        };
    a.Sinusoidal.EaseOut = function(a) {
        return Math.sin(a * Math.PI / 2)
    };
    a.Sinusoidal.EaseInOut = function(a) {
        return -0.5 * (Math.cos(Math.PI * a) - 1)
    };
    a.Exponential.EaseIn = function(a) {
        return a == 0 ? 0 : Math.pow(2, 10 * (a - 1))
    };
    a.Exponential.EaseOut = function(a) {
        return a == 1 ? 1 : -Math.pow(2, -10 * a) + 1
    };
    a.Exponential.EaseInOut = function(a) {
        return a == 0 ? 0 : a == 1 ? 1 : (a *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2)
    };
    a.Circular.EaseIn = function(a) {
        return -(Math.sqrt(1 - a * a) - 1)
    };
    a.Circular.EaseOut =
        function(a) {
            return Math.sqrt(1 - --a * a)
        };
    a.Circular.EaseInOut = function(a) {
        return (a /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
    };
    a.Elastic.EaseIn = function(a) {
        var b, e = 0.1,
            f = 0.4;
        if (a == 0) return 0;
        else if (a == 1) return 1;
        else f || (f = 0.3);
        !e || e < 1 ? (e = 1, b = f / 4) : b = f / (2 * Math.PI) * Math.asin(1 / e);
        return -(e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * 2 * Math.PI / f))
    };
    a.Elastic.EaseOut = function(a) {
        var b, e = 0.1,
            f = 0.4;
        if (a == 0) return 0;
        else if (a == 1) return 1;
        else f || (f = 0.3);
        !e || e < 1 ? (e = 1, b = f / 4) : b = f / (2 * Math.PI) *
            Math.asin(1 / e);
        return e * Math.pow(2, -10 * a) * Math.sin((a - b) * 2 * Math.PI / f) + 1
    };
    a.Elastic.EaseInOut = function(a) {
        var b, e = 0.1,
            f = 0.4;
        if (a == 0) return 0;
        else if (a == 1) return 1;
        else f || (f = 0.3);
        !e || e < 1 ? (e = 1, b = f / 4) : b = f / (2 * Math.PI) * Math.asin(1 / e);
        return (a *= 2) < 1 ? -0.5 * e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * 2 * Math.PI / f) : e * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - b) * 2 * Math.PI / f) * 0.5 + 1
    };
    a.Back.EaseIn = function(a) {
        return a * a * (2.70158 * a - 1.70158)
    };
    a.Back.EaseOut = function(a) {
        return (a -= 1) * a * (2.70158 * a + 1.70158) + 1
    };
    a.Back.EaseInOut =
        function(a) {
            return (a *= 2) < 1 ? 0.5 * a * a * (3.5949095 * a - 2.5949095) : 0.5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2)
        };
    a.Bounce.EaseIn = function(b) {
        return 1 - a.Bounce.EaseOut(1 - b)
    };
    a.Bounce.EaseOut = function(a) {
        return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
    };
    a.Bounce.EaseInOut = function(b) {
        return b < 0.5 ? a.Bounce.EaseIn(b * 2) * 0.5 : a.Bounce.EaseOut(b * 2 - 1) * 0.5 + 0.5
    }
})();
(function() {
    var b = function(a) {
        casual.Text.call(this);
        this.name = NameUtil.createUniqueName("wrapperText");
        this.text = a.text;
        this.baseline = "top";
        this.lineHeight = a.lineHeight;
        this.fitWidth = a.fitWidth
    };
    casual.inherit(b, casual.Text);
    casual.wrapperText = b;
    b.prototype.render = function(a) {
        if (this.text && this.text.length != 0)
            if (this.outline ? a.strokeStyle = this.color : a.fillStyle = this.color, a.font = this.font, a.textAlign = this.align, a.textBaseline = this.baseline, this.fitWidth <= 0) a.fillText(this.text, 0, 0);
            else {
                for (var b =
                        this.text.split(" "), d = 0, e = 1; b.length > 0 && e <= b.length;) {
                    var f = b.slice(0, e).join(" ");
                    a.measureText(f).width > this.fitWidth ? (e == 1 && (e = 2), a.fillText(b.slice(0, e - 1).join(" "), 0, this.lineHeight * d), d++, b = b.splice(e - 1), e = 1) : e++
                }
                e > 0 && a.fillText(b.join(" "), 0, this.lineHeight * d)
            }
    }
})();
(function() {
    var b = function(a) {
        this.name = NameUtil.createUniqueName("JGraphics");
        this.context = a;
        this.canvas = a.canvas
    };
    b.TOP = 16;
    b.LEFT = 4;
    b.RIGHT = 8;
    b.BOTTOM = 32;
    b.HCENTER = 1;
    b.VCENTER = 2;
    b.TRANS_MIRROR = 2;
    b.TRANS_MIRROR_ROT180 = 1;
    b.TRANS_MIRROR_ROT270 = 4;
    b.TRANS_MIRROR_ROT90 = 7;
    b.TRANS_NONE = 0;
    b.TRANS_ROT180 = 3;
    b.TRANS_ROT270 = 6;
    b.TRANS_ROT90 = 5;
    casual.JGraphics = b;
    b.prototype.save = function() {
        this.context.save()
    };
    b.prototype.drawLine = function(a, b, d, e, f) {
        this.context.strokeStyle = f;
        this.context.beginPath();
        this.context.moveTo(a,
            b);
        this.context.lineTo(d, e);
        this.context.stroke()
    };
    b.prototype.restore = function() {
        this.context.restore()
    };
    b.prototype.clear = function(a, b, d, e) {
        arguments.length >= 4 ? this.context.clearRect(a, b, d, e) : this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    };
    b.prototype.fillRect = function(a, b, d, e, f) {
        this.context.fillStyle = f;
        this.context.fillRect(a, b, d, e)
    };
    b.prototype.fillArc = function(a, b, d, e, f, h) {
        this.context.beginPath();
        this.context.arc(a, b, d, e * Math.PI / 180, f * Math.PI / 180, !1);
        this.context.fillStyle =
            h;
        this.context.fill()
    };
    b.prototype.strokeArc = function(a, b, d, e, f, h, g) {
        this.context.beginPath();
        this.context.arc(a, b, d, e * Math.PI / 180, f * Math.PI / 180, !1);
        this.context.strokeStyle = h;
        this.context.lineWidth = g;
        this.context.stroke()
    };
    b.prototype.fillCircle = function(a, b, d, e, f) {
        this.strokeArc(a, b, d, 0, 360, e, f)
    };
    b.prototype.strokeCircle = function(a, b, d, e) {
        this.fillArc(a, b, d, 0, 360, e)
    };
    b.prototype.strokeRect = function(a, b, d, e, f) {
        this.context.strokeStyle = f;
        this.context.strokeRect(a, b, d, e)
    };
    b.prototype.setClip = function(a,
        b, d, e) {
        this.context.save();
        this.context.beginPath();
        this.context.rect(a, b, d, e);
        this.context.clip()
    };
    b.prototype.resetClip = function() {
        this.context.restore()
    };
    b.prototype.drawStringLeft = function(a, b, d, e) {
        if (a && a.length != 0) this.context.fillStyle = e, this.context.font = "15px Arial", this.context.textAlign = "left", this.context.textBaseline = "top", this.context.fillText(a, b, d)
    };
    b.prototype.drawString = function(a, b, d, e, f, h) {
        if (a && a.length != 0)
            if (this.context.fillStyle = e, this.context.font = "15px Arial", this.context.textAlign =
                "center", this.context.textBaseline = "top", f <= 0) this.context.fillText(a, b, d);
            else {
                for (var a = a.split(" "), e = 0, g = 1; a.length > 0 && g <= a.length;) this.context.measureText(a.slice(0, g).join(" ")).width > f ? (g == 1 && (g = 2), this.context.fillText(a.slice(0, g - 1).join(" "), b, d + h * e), e++, a = a.splice(g - 1), g = 1) : g++;
                g > 0 && this.context.fillText(a.join(" "), b, d + h * e);
                return h * e
            }
    };
    b.prototype.drawImage = function(a, c, d, e) {
        e == 0 && (e = b.TOP | b.LEFT);
        (e & b.RIGHT) == b.RIGHT ? c -= a.width : (e & b.HCENTER) == b.HCENTER && (c -= a.width >> 1);
        (e & b.BOTTOM) !=
        0 ? d -= a.height : (e & b.VCENTER) == b.VCENTER && (d -= a.height >> 1);
        this.context.drawImage(a, c, d)
    };
    b.prototype.drawRegion = function(a, c, d, e, f, h, g, i, j) {
        if (!(c + e > a.width || d + f > a.height || e < 0 || f < 0 || c < 0 || d < 0)) {
            j == 0 && (j = b.TOP | b.LEFT);
            var l = (e - f) / 2,
                m = -l,
                k = -l;
            (j & b.RIGHT) == b.RIGHT ? (g -= e, m = l) : (j & b.HCENTER) == b.HCENTER && (g -= e >> 1, m = 0);
            (j & b.BOTTOM) == b.BOTTOM ? (i -= f, k = l) : (j & b.VCENTER) == b.VCENTER && (i -= f >> 1, k = 0);
            if (h != b.TRANS_NONE) switch (this.context.save(), h) {
                case b.TRANS_MIRROR:
                    this.context.translate(g + (e >> 1), i + (f >> 1));
                    this.context.scale(-1,
                        1);
                    this.context.translate(-(g + (e >> 1)), -(i + (f >> 1)));
                    break;
                case b.TRANS_MIRROR_ROT90:
                    this.context.translate(g + (e >> 1), i + (f >> 1));
                    this.context.scale(1, -1);
                    this.context.rotate(Math.PI / 180 * 90);
                    this.context.translate(-(g + (e >> 1) + k), -(i + (f >> 1) - m));
                    break;
                case b.TRANS_MIRROR_ROT180:
                    this.context.translate(g + (e >> 1), i + (f >> 1));
                    this.context.scale(-1, 1);
                    this.context.rotate(Math.PI / 180 * 180);
                    this.context.translate(-(g + (e >> 1)), -(i + (f >> 1)));
                    break;
                case b.TRANS_MIRROR_ROT270:
                    this.context.translate(g + (e >> 1), i + (f >> 1));
                    this.context.scale(1, -1);
                    this.context.rotate(Math.PI / 180 * 270);
                    this.context.translate(-(g + (e >> 1) - k), -(i + (f >> 1) + m));
                    break;
                case b.TRANS_ROT90:
                    this.context.translate(g + (e >> 1), i + (f >> 1));
                    this.context.rotate(Math.PI / 180 * 90);
                    this.context.translate(-(g + (e >> 1) + k), -(i + (f >> 1) + m));
                    break;
                case b.TRANS_ROT180:
                    this.context.translate(g + (e >> 1), i + (f >> 1));
                    this.context.rotate(Math.PI / 180 * 180);
                    this.context.translate(-(g + (e >> 1)), -(i + (f >> 1)));
                    break;
                case b.TRANS_ROT270:
                    this.context.translate(g + (e >> 1), i + (f >> 1)), this.context.rotate(Math.PI / 180 *
                        270), this.context.translate(-(g + (e >> 1) - k), -(i + (f >> 1) - m))
            }
            h != b.TRANS_NONE ? (this.context.drawImage(a, c, d, e, f, g, i, e, f), this.context.restore()) : this.context.drawImage(a, c, d, e, f, g, i, e, f)
        }
    }
})();
(function() {
    casual.GameInfo = {
        version: "1.0",
        name: "MARIO_BOOM",
        ID_GAME: "-1",
        UUID: "name_of_dev.-1",
        PLAYER_NAME: ""
    }
})();
(function() {
    var b = {
        HOST: "/MyTV/Default.aspx"
    };
    casual.CMD = b;
    b.load = function() {
        if (casual.supportStorage) {
            try {
                var a = localStorage.getItem("uuid");
                a == null ? (casual.GameInfo.UUID = b.generateUUID(), localStorage.setItem("uuid", casual.GameInfo.UUID)) : casual.GameInfo.UUID = a
            } catch (c) {
                casual.GameInfo.UUID = b.generateUUID(), localStorage.setItem("uuid", casual.GameInfo.UUID)
            }
            casual.GameInfo.PLAYER_NAME = b.getName()
        }
    };
    b.showUnsignedString = function(a) {
        return a.replace(RegExp("[\u00e0\u1ea3\u00e3\u00e1\u1ea1\u0103\u1eb1\u1eb3\u1eb5\u1eaf\u1eb7\u00e2\u1ea7\u1ea9\u1eab\u1ea5\u1ead\u0111\u00e8\u1ebb\u1ebd\u00e9\u1eb9\u00ea\u1ec1\u1ec3\u1ec5\u1ebf\u1ec7\u00ec\u1ec9\u0129\u00ed\u1ecb\u00f2\u1ecf\u00f5\u00f3\u1ecd\u00f4\u1ed3\u1ed5\u1ed7\u1ed1\u1ed9\u01a1\u1edd\u1edf\u1ee1\u1edb\u1ee3\u00f9\u1ee7\u0169\u00fa\u1ee5\u01b0\u1eeb\u1eed\u1eef\u1ee9\u1ef1\u1ef3\u1ef7\u1ef9\u00fd\u1ef5\u00c0\u1ea2\u00c3\u00c1\u1ea0\u0102\u1eb0\u1eb2\u1eb4\u1eae\u1eb6\u00c2\u1ea6\u1ea8\u1eaa\u1ea4\u1eac\u0110\u00c8\u1eba\u1ebc\u00c9\u1eb8\u00ca\u1ec0\u1ec2\u1ec4\u1ebe\u1ec6\u00cc\u1ec8\u0128\u00cd\u1eca\u00d2\u1ece\u00d5\u00d3\u1ecc\u00d4\u1ed2\u1ed4\u1ed6\u1ed0\u1ed8\u01a0\u1edc\u1ede\u1ee0\u1eda\u1ee2\u00d9\u1ee6\u0168\u00da\u1ee4\u01af\u1eea\u1eec\u1eee\u1ee8\u1ef0\u1ef2\u1ef6\u1ef8\u00dd\u1ef4]",
            "g"), function(a) {
            return "aaaaaaaaaaaaaaaaadeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAADEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYY".charAt("\u00e0\u1ea3\u00e3\u00e1\u1ea1\u0103\u1eb1\u1eb3\u1eb5\u1eaf\u1eb7\u00e2\u1ea7\u1ea9\u1eab\u1ea5\u1ead\u0111\u00e8\u1ebb\u1ebd\u00e9\u1eb9\u00ea\u1ec1\u1ec3\u1ec5\u1ebf\u1ec7\u00ec\u1ec9\u0129\u00ed\u1ecb\u00f2\u1ecf\u00f5\u00f3\u1ecd\u00f4\u1ed3\u1ed5\u1ed7\u1ed1\u1ed9\u01a1\u1edd\u1edf\u1ee1\u1edb\u1ee3\u00f9\u1ee7\u0169\u00fa\u1ee5\u01b0\u1eeb\u1eed\u1eef\u1ee9\u1ef1\u1ef3\u1ef7\u1ef9\u00fd\u1ef5\u00c0\u1ea2\u00c3\u00c1\u1ea0\u0102\u1eb0\u1eb2\u1eb4\u1eae\u1eb6\u00c2\u1ea6\u1ea8\u1eaa\u1ea4\u1eac\u0110\u00c8\u1eba\u1ebc\u00c9\u1eb8\u00ca\u1ec0\u1ec2\u1ec4\u1ebe\u1ec6\u00cc\u1ec8\u0128\u00cd\u1eca\u00d2\u1ece\u00d5\u00d3\u1ecc\u00d4\u1ed2\u1ed4\u1ed6\u1ed0\u1ed8\u01a0\u1edc\u1ede\u1ee0\u1eda\u1ee2\u00d9\u1ee6\u0168\u00da\u1ee4\u01af\u1eea\u1eec\u1eee\u1ee8\u1ef0\u1ef2\u1ef6\u1ef8\u00dd\u1ef4".indexOf(a))
        }).replace(/[^\w\s]/gi,
            "")
    };
    b.sendMessage = function(a) {
        return !1
    };
    b.hashCode = function(a) {
        for (var b = 0, d = 0, e = a.length; d < e; d++) b = 31 * b + a.charCodeAt(d) << 0;
        return b
    };
    b.generateUUID = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            return (a == "x" ? b : b & 3 | 8).toString(16)
        })
    };
    b.saveScore = function(a, c) {
        return b.sendMessage("?n=3&id=" +
            casual.GameInfo.UUID + "&c=" + a + "," + c + "&g=" + casual.GameInfo.ID_GAME)
    };
    b.getName = function() {
        return b.sendMessage("?n=9&id=" + casual.GameInfo.UUID + "&c=get&g=" + casual.GameInfo.ID_GAME)
    };
    b.saveName = function(a) {
        return b.sendMessage("?n=8&id=" + casual.GameInfo.UUID + "&c=" + a + "&g=" + casual.GameInfo.ID_GAME)
    };
    b.getHighscoreTopPlayer = function() {
        var a = b.sendMessage("?n=3&id=" + casual.GameInfo.UUID + "&c=check&g=" + casual.GameInfo.ID_GAME);
        if (a.length > 0) {
            for (var a = a.split("|"), c = Array(a.length), d = 0; d < a.length; d++) c[d] =
                a[d].split(",");
            return c
        }
        return null
    };
    b.getHighscoreCurPlayer = function() {
        var a = b.sendMessage("?n=3&id=" + casual.GameInfo.UUID + "&c=check2&g=" + casual.GameInfo.ID_GAME);
        if (a.length > 0) {
            for (var a = a.split("|"), c = Array(a.length), d = 0; d < a.length; d++) c[d] = a[d].split(",");
            return c
        }
        return null
    }
})();
(function() {
    casual.IDTouch = {
        HOME: -10,
        IN_MENU: -11,
        NONE_KH: 3,
        KH: 4,
        LEFT: -12,
        RIGHT: -13,
        LUU_DIEM: -14
    }
})();
(function() {
    casual.IDSound = {
        stSoundPath: "sounds/",
        soundURLs: ["background.mp3", "confirm.mp3", "lumdo.mp3", "attack.mp3", "trungdon.mp3", "bansung.mp3"],
        BKG_MAIN: 0,
        SFX_CONFIRM: 1,
        COUNT: 6
    }
})();
(function() {
    var b = {
        NOTHING: -1,
        IDcurr: -1,
        Dprev: -1,
        IDdown: -1,
        isPressed: !1,
        holdTime: 0,
        x: 0,
        y: 0,
        xDown: 0,
        xUp: 0,
        yDown: 0,
        yUp: 0,
        vec: [],
        Area: function(a, b, d, e, f) {
            this.ID = a;
            this.x = b;
            this.y = d;
            this.w = e;
            this.h = f
        }
    };
    casual.Touch = b;
    b.resetPos = function() {
        this.holdTime = this.x = this.y = this.xDown = this.xUp = this.yDown = this.yUp = 0
    };
    b.addTouchArea = function(a, c, d, e, f) {
        this.vec.push(new b.Area(a, c, d, e, f))
    };
    b.checkTouch = function(a, b) {
        for (var d = 0; d < this.vec.length; d++) {
            var e = this.vec[d];
            if (a >= e.x && a <= e.x + e.w && b >= e.y && b <= e.y + e.h) return !0
        }
        return !1
    };
    b.click = function() {
        for (var a = 0; a < this.vec.length; a++) {
            var c = this.vec[a];
            if (this.x >= c.x && this.x <= c.x + c.w && this.y >= c.y && this.y <= c.y + c.h) return c.ID
        }
        return b.NOTHING
    };
    b.releaseTouchArea = function() {
        this.vec.splice(0, this.vec.length)
    };
    b.getTouchLocationByID = function(a) {
        for (var b, d = 0; d < this.vec.length; d++)
            if (this.vec[d].ID == a) {
                b = new Point(this.vec[d].x, this.vec[d].y);
                break
            }
        return b
    };
    b.removeTouchID = function(a) {
        for (var b = 0; b < this.vec.length; b++)
            if (this.vec[b].ID == a) {
                this.vec.splice(b, 1);
                break
            }
    };
    b.debugTouch =
        function(a) {
            for (var b = 0; b < this.vec.length; b++) {
                var d = this.vec[b];
                a.drawString(d.ID + "", d.x + (d.w >> 1), d.y + (d.h >> 1), "#ff0000", 100, 30);
                a.strokeRect(d.x, d.y, d.w, d.h, "#00ff00")
            }
        }
})();
(function() {
    var b = {
        SPLASH_SCREEN: 0,
        MAIN_MENU: 2,
        INBODY_MENU: 3,
        BODY: 4,
        THEEND: 12,
        LOADING_GAME: 14,
        BODY_NEW: 5,
        BODY_CONTINUE: 6,
        SAVESCORE: 7,
        HIGHSCORE: 8,
        HELP: 10,
        CHOOSE_LEVEL: 11,
        THE_FISRT_SCREEN_PAGE_OF_APP: 0,
        INBODY_MESS: 23,
        BODY_CHOOSE: 24
    };
    casual.State = b;
    b.Loading = function(a) {
        var c = null;
        switch (a) {
            case b.SPLASH_SCREEN:
                c = new casual.SplashScreen;
                break;
            case b.MAIN_MENU:
                c = new casual.MainMenu;
                break;
            case b.INBODY_MENU:
                c = new casual.InMenu;
                break;
            case b.BODY_NEW:
            case b.BODY_CONTINUE:
            case b.BODY:
                c = new casual.CGame;
                break;
            case b.THEEND:
                c = new casual.InOver;
                break;
            case b.SAVESCORE:
                c = new casual.EndGame;
                break;
            case b.HELP:
                c = new casual.Help;
                break;
            case b.LOADING_GAME:
                c = new casual.LoadingGame;
                break;
            case b.HIGHSCORE:
                c = new casual.HighScore;
                break;
            case b.CHOOSE_LEVEL:
                c = new casual.ChooseLevel
        }
        c != null && (c.init(), this.preInit(c), casual.game.gameContainer.addChild(c));
        return c
    };
    b.preInit = function() {}
})();
(function() {
    var b = function() {
        casual.DisplayObject.call(this);
        this.name = NameUtil.createUniqueName("Slide");
        this.x = this.y = this.id = 0;
        this.width = casual.game.width;
        this.height = casual.game.height;
        this.scaleX = casual.game.scrWidth / casual.game.width;
        this.scaleY = casual.game.scrHeight / casual.game.height;
        casual.game.debugText = casual.game.scrWidth + "," + casual.game.scrHeight
    };
    casual.Slide = b;
    casual.inherit(b, casual.DisplayObject);
    b.prototype.getImage = function(a) {
        return casual.game.getImage(a)
    };
    b.prototype.init = function() {};
    b.prototype.render = function() {};
    b.prototype.registerTouch = function() {};
    b.prototype.touchDrag = function() {};
    b.prototype.touchDown = function() {};
    b.prototype.touchUp = function() {};
    b.prototype.Click = function() {};
    b.prototype.update = function() {};
    b.prototype.destroy = function() {};
    b.prototype.changeState = function(a, b) {
        casual.game.setState(a, b)
    };
    b.prototype.changeSubState = function(a) {
        this.subSlide = casual.State.Loading(a);
        casual.Touch.releaseTouchArea();
        casual.KEY.resetKeys();
        this.subSlide.registerTouch()
    };
    b.prototype.backSlide =
        function() {
            if (this.subSlide != null) this.subSlide.destroy(), casual.game.gameContainer.removeChild(this.subSlide), this.subSlide = null, casual.Touch.releaseTouchArea(), casual.KEY.resetKeys(), casual.game.currSlide.registerTouch()
        }
})();
(function() {
    var b = {
        LEFT_SOFTKEY: 0,
        RIGHT_SOFTKEY: 1,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        FIRE: 32,
        Keys: []
    };
    casual.KEY = b;
    b.isPressed = function(a) {
        return this.Keys[a] > 0
    };
    b.LoopCount = function(a) {
        return Keys[a]
    };
    b.resetKeys = function() {
        this.Keys[b.LEFT_SOFTKEY] = 0;
        this.Keys[b.RIGHT_SOFTKEY] = 0;
        this.Keys[b.LEFT] = 0;
        this.Keys[b.RIGHT] = 0;
        this.Keys[b.UP] = 0;
        this.Keys[b.DOWN] = 0;
        this.Keys[b.FIRE] = 0
    };
    b.resetKey = function(a) {
        this.Keys[a] = 0
    };
    b.pressKey = function(a) {
        a >= 0 && this.Keys[a] == 0 && (this.Keys[a] = 1)
    }
})();
(function() {
    var b = {};
    casual.Static = b;
    b.init = function() {
        this.imgNumber = casual.game.getImage("so.png");
        this.NUM_HEIGHT = this.imgNumber.height;
        this.NUM_WIDTH = this.imgNumber.width / 10
    };
    b.drawNumber = function(a, b, d, e, f, h) {
        b < 0 && (b = 0);
        var g = b + (h ? "$" : ""),
            i = d,
            j = e;
        f == 0 && (f = casual.JGraphics.LEFT | casual.JGraphics.TOP);
        (f & casual.JGraphics.LEFT) == casual.JGraphics.LEFT && (i = d);
        (f & casual.JGraphics.RIGHT) == casual.JGraphics.RIGHT && (i = d - g.length * this.NUM_WIDTH);
        (f & casual.JGraphics.TOP) == casual.JGraphics.TOP && (j = e);
        (f & casual.JGraphics.BOTTOM) ==
        casual.JGraphics.BOTTOM && (j = e - this.NUM_HEIGHT);
        (f & casual.JGraphics.HCENTER) == casual.JGraphics.HCENTER && (i = d - g.length * this.NUM_WIDTH / 2);
        (f & casual.JGraphics.VCENTER) == casual.JGraphics.VCENTER && (j = e - this.NUM_HEIGHT / 2);
        b < 0 && a.drawRegion(this.imgNumber, 12 * this.NUM_WIDTH, 0, this.NUM_WIDTH, this.NUM_HEIGHT, 0, i, j, casual.JGraphics.TOP | casual.JGraphics.LEFT);
        d = g.length - (h ? 1 : 0);
        for (b = b < 0 ? 1 : 0; b < d; b++) a.drawRegion(this.imgNumber, parseInt(g.charAt(b)) * this.NUM_WIDTH, 0, this.NUM_WIDTH, this.NUM_HEIGHT, 0, i + this.NUM_WIDTH *
            b, j, casual.JGraphics.TOP | casual.JGraphics.LEFT);
        h && a.drawRegion(this.imgNumber, 10 * this.NUM_WIDTH, 0, this.NUM_WIDTH, this.NUM_HEIGHT, 0, i + this.NUM_WIDTH * (g.length - 1), j, casual.JGraphics.TOP | casual.JGraphics.LEFT)
    };
    b.getVyA = function(a, b, d, e, f) {
        return (f - d) * a / (e - b)
    };
    b.isColCenter = function(a, b, d, e, f, h, g, i) {
        return (f > a ? f - a : a - f) <= g + d >> 1 && (h > b ? h - b : b - h) <= i + e >> 1
    };
    b.isColLeftTop = function(a, b, d, e, f, h, g, i) {
        return a <= f + g && a + d >= f && b <= h + i && b + e >= h
    }
})();
(function() {
    var b = function(a, b) {
        this.y = this.x = 0;
        this.id = a;
        this.animFrame = b;
        this.iAnim = 0;
        this.curFrame = b[this.iAnim]
    };
    casual.CAnim = b;
    b.prototype.reset = function() {
        this.iAnim = 0;
        for (var a = this.animFrame.length; --a >= 0;) this.animFrame[a].reset();
        this.curFrame = this.animFrame[this.iAnim]
    };
    b.prototype.tick = function() {
        if (this.curFrame.tick()) {
            if (++this.iAnim >= this.animFrame.length) return this.iAnim = 0, this.curFrame = this.animFrame[this.iAnim], !0;
            this.curFrame = this.animFrame[this.iAnim]
        }
        return !1
    };
    b.prototype.render =
        function(a, b, d) {
            this.curFrame.render(a, b, d)
        };
    b.prototype.daoHinh = function(a) {
        this.curFrame.flag = a ? casual.CSpriteManager.FLAG_NONE : casual.CSpriteManager.FLAG_FLIP_X
    };
    b.prototype.clone = function() {
        for (var a = Array(this.animFrame.length), b = 0; b < a.length; b++) a[b] = this.animFrame[b].clone();
        b = new casual.CAnim(this.id, a);
        b.x = this.x;
        b.y = this.y;
        b.iAnim = this.iAnim;
        b.curFrame = a[0];
        return b
    }
})();
(function() {
    var b = function(a, b, d, e, f) {
        this.time = b;
        this.ox = d;
        this.oy = e;
        this.flag = f;
        if (a != null) this.frameModules = a.frameModules, this.totalFM = a.frameModules.length;
        this.tickZ = 0
    };
    casual.CAnimFrame = b;
    b.prototype.tick = function() {
        return ++this.tickZ > this.time ? (this.tickZ = 0, !0) : !1
    };
    b.prototype.render = function(a, b, d) {
        for (var e = 0; e < this.totalFM; e++) this.frameModules[e].render(a, b, this.ox, this.oy, this.flag, d)
    };
    b.prototype.renderMirror = function(a, b, d) {
        for (var e = this.flag ^ casual.CSpriteManager.FLAG_FLIP_X, f = 0; f <
            this.totalFM; f++) this.frameModules[f].render(a, b, -this.ox, this.oy, e, d)
    };
    b.prototype.reset = function() {
        this.tickZ = 0
    };
    b.prototype.clone = function() {
        var a = new casual.CAnimFrame;
        a.flag = this.flag;
        a.frameModules = this.frameModules;
        a.ox = this.ox;
        a.oy = this.oy;
        a.tickZ = this.tickZ;
        a.time = this.time;
        a.totalFM = this.totalFM;
        return a
    }
})();
(function() {
    casual.CFrame = function(b, a) {
        this.id = b;
        this.frameModules = a
    }
})();
(function() {
    var b = function(a, b, d, e) {
        this.ox = b;
        this.oy = d;
        this.flag = e;
        this.img = a.img;
        this.w = a.w;
        this.h = a.h;
        this.xF = a.x;
        this.yF = a.y
    };
    casual.CFrameModule = b;
    b.prototype.render = function(a, b, d, e, f, h) {
        var g = 0,
            i = 0;
        switch (f) {
            case casual.CSpriteManager.FLAG_NONE:
                g = a + this.ox + d;
                i = b + this.oy + e;
                break;
            case casual.CSpriteManager.FLAG_FLIP_X:
                g = a - this.ox + d - this.w, i = b + this.oy + e
        }
        switch (this.flag ^ f) {
            case casual.CSpriteManager.FLAG_NONE:
                h.drawRegion(this.img, this.xF, this.yF, this.w, this.h, casual.JGraphics.TRANS_NONE, g, i,
                    casual.JGraphics.LEFT | casual.JGraphics.TOP);
                break;
            case casual.CSpriteManager.FLAG_FLIP_X:
                h.drawRegion(this.img, this.xF, this.yF, this.w, this.h, casual.JGraphics.TRANS_MIRROR, g, i, casual.JGraphics.LEFT | casual.JGraphics.TOP)
        }
    }
})();
(function() {
    casual.CImageData = function(b, a, c) {
        this.index = b;
        this.transp = c;
        this.img = new Image;
        this.img.src = a
    }
})();
(function() {
    casual.CModule = function(b, a, c, d, e, f) {
        this.id = b;
        this.img = a.img;
        this.x = c;
        this.y = d;
        this.w = e;
        this.h = f
    }
})();
(function() {
    var b = function() {
        this.anims = null
    };
    b.FLAG_NONE = 0;
    b.FLAG_FLIP_X = 1;
    b.FLAG_FLIP_Y = 2;
    b.FLAG_ROT_90 = 4;
    casual.CSpriteManager = b;
    b.prototype.init = function(a) {
        this.anims = casual.game.cacheSprite[a];
        if (this.anims != null) return !1;
        var c = [],
            d = [],
            e = [],
            f = null,
            f = [];
        if (AJAX = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")) {
            AJAX.open("GET", a, !1);
            AJAX.send();
            allText = AJAX.responseText;
            lines = allText.split("\n");
            for (var h = 0; h < lines.length; h++) {
                var g = lines[h];
                if (g.indexOf("IMAGE 0x") !=
                    -1) {
                    g = g.replace(/\s{2,}/g, "");
                    arrLine = g.split(" ");
                    var i, j;
                    i = parseInt(arrLine[1].substring(3), 16);
                    g = arrLine[2].substring(arrLine[2].indexOf("\\") + 1, arrLine[2].indexOf(".png") + 4);
                    g = a.substring(0, a.lastIndexOf("/") + 1) + g;
                    j = parseInt(arrLine[4].substring(2), 16);
                    g = new casual.CImageData(i, g, j);
                    c[i] = g
                } else if (g.indexOf("MODULES") != -1) {
                    do
                        if (h++, g = lines[h], g.indexOf("MD\t0x1") != -1) {
                            g = g.replace(/\s{2,}/g, "");
                            arrLine = g.split("\t");
                            var l, m, k;
                            i = arrLine[1];
                            g = parseInt(arrLine[3]);
                            j = parseInt(arrLine[4]);
                            l = parseInt(arrLine[5]);
                            m = parseInt(arrLine[6]);
                            k = parseInt(arrLine[7]);
                            g = new casual.CModule(null, c[g], j, l, m, k);
                            d[i] = g
                        } else if (g.indexOf("}") != -1) break; while (1);
                    c.splice(0, c.length)
                } else if (g.indexOf("FRAME") != -1) {
                    i = null;
                    j = [];
                    do
                        if (h++, g = lines[h], g.indexOf("0x2") != -1) i = g = g.replace(/\s{2,}/g, "");
                        else if (g.indexOf("FM\t0x1") != -1) {
                        g = g.replace(/\s{2,}/g, "");
                        arrLine = g.split("\t");
                        var n = arrLine[1];
                        l = parseInt(arrLine[2]);
                        m = parseInt(arrLine[3]);
                        k = b.FLAG_NONE;
                        for (g = 4; g < arrLine.length; g++) arrLine[g].indexOf("FLIP_X") != -1 ? k |= b.FLAG_FLIP_X :
                            arrLine[g].indexOf("FLIP_Y") != -1 ? k |= b.FLAG_FLIP_Y : arrLine[g].indexOf("ROT_90") != -1 && (k |= b.FLAG_ROT_90);
                        g = new casual.CFrameModule(d[n], l, m, k);
                        j.push(g)
                    } else if (g.indexOf("}") != -1) break;
                    while (1);
                    l = Array(j.length);
                    for (g = l.length; --g >= 0;) l[g] = j[g];
                    g = new casual.CFrame(null, l);
                    e[i] = g
                } else if (g.indexOf("ANIM") != -1) {
                    j = [];
                    do
                        if (h++, g = lines[h], g.indexOf("0x3") != -1) g.replace(/\s{2,}/g, "");
                        else if (g.indexOf("AF\t0x2") != -1) {
                        g = g.replace(/\s{2,}/g, "");
                        arrLine = g.split("\t");
                        i = arrLine[1];
                        n = parseInt(arrLine[2]);
                        l =
                            parseInt(arrLine[3]);
                        m = parseInt(arrLine[4]);
                        k = casual.CSpriteManager.FLAG_NONE;
                        for (g = 5; g < arrLine.length; g++) arrLine[g].indexOf("FLIP_X") != -1 ? k |= casual.CSpriteManager.FLAG_FLIP_X : arrLine[g].indexOf("FLIP_Y") != -1 ? k |= casual.CSpriteManager.FLAG_FLIP_Y : arrLine[g].indexOf("ROT_90") != -1 && (k |= casual.CSpriteManager.FLAG_ROT_90);
                        i = new casual.CAnimFrame(e[i], n, l, m, k);
                        j.push(i)
                    } else if (g.indexOf("}") != -1) break;
                    while (1);
                    i = Array(j.length);
                    for (g = i.length; --g >= 0;) i[g] = j[g];
                    i = new casual.CAnim(null, i);
                    f.push(i)
                }
            }
            d.splice(0,
                d.length);
            e.splice(0, e.length);
            c = f.length;
            this.anims = Array(c);
            for (g = 0; g < c; g++) this.anims[g] = f[g];
            f.splice(0, f.length);
            casual.game.cacheSprite[a] = this.anims
        }
        return !1
    }
})();
(function() {
    var b = function() {
        casual.Slide.call(this);
        this.name = NameUtil.createUniqueName("SplashScreen");
        this.iStep = 0;
        this.imglogo = null;
        this.iTime = 0
    };
    casual.SplashScreen = b;
    casual.inherit(b, casual.Slide);
    b.prototype.init = function() {
        casual.CMD.load();
        this.imglogo = this.getImage("imglogo");
        this.iTime = (new Date).getTime()
    };
    b.prototype.render = function(a) {
        a.fillRect(0, 0, this.width, this.height, "#000000");
        a.drawImage(this.imglogo, this.width >> 1, this.height >> 1, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
    };
    b.prototype.update = function() {
        this.iStep == 0 ? (new Date).getTime() - this.iTime > 1E3 && this.iStep++ : this.changeState(casual.State.MAIN_MENU)
    }
})();
(function() {
    var b = function() {
        casual.Slide.call(this);
        this.name = NameUtil.createUniqueName("MainMenu");
        this.state = 0;
        this.hasChoiTiep = !1
    };
    casual.inherit(b, casual.Slide);
    casual.MainMenu = b;
    b.prototype.init = function() {
        casual.game.playSound(casual.IDSound.BKG_MAIN, !0);
        this.index = this.state == 1 ? this.hasChoiTiep ? 0 : 1 : 0;
        this.imgBg = this.getImage("menu");
        this.imgChooseMode = this.getImage("choose_mode");
        this.imgfocus = this.getImage("choose_focus");
        this.imgMenu = Array(6);
        for (var a = 0; a < this.imgMenu.length; a++) this.imgMenu[a] =
            this.getImage("menu/m_" + a + ".png");
        this.imgMenuFocus = this.getImage("menu/menu_focus.png");
        this.imgSound = Array(2);
        this.imgSound[0] = this.getImage("on");
        this.imgSound[1] = this.getImage("off")
    };
    b.prototype.processChageState = function() {
        this.index = this.state == 1 ? this.hasChoiTiep ? 0 : 1 : 0
    };
    b.prototype.render = function(a) {
        a.drawImage(this.imgBg, 0, 0, casual.JGraphics.TOP | casual.JGraphics.LEFT);
        if (this.state == 0) a.drawImage(this.imgChooseMode, 220, 375, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER), a.drawImage(this.imgfocus,
            220, 330 + 40 * this.index, casual.JGraphics.VCENTER | casual.JGraphics.HCENTER);
        else if (this.state == 1) {
            for (var b = 0; b < this.imgMenu.length; b++) b < 3 ? (b != 0 || this.hasChoiTiep) && a.drawImage(this.imgMenu[b], 70, 330 + b * 50, casual.JGraphics.VCENTER | casual.JGraphics.LEFT) : a.drawImage(this.imgMenu[b], 250, 230 + b * 50, casual.JGraphics.VCENTER | casual.JGraphics.LEFT);
            this.index < 3 ? a.drawImage(this.imgMenuFocus, 45, 330 + this.index * 50, casual.JGraphics.VCENTER | casual.JGraphics.LEFT) : a.drawImage(this.imgMenuFocus, 225, 230 + this.index *
                50, casual.JGraphics.VCENTER | casual.JGraphics.LEFT);
            a.drawImage(this.imgSound[casual.game.soundEnable ? 0 : 1], 395, 380, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
        }
    };
    b.prototype.update = function() {};
    b.prototype.registerTouch = function() {
        var a = casual.Touch;
        a.releaseTouchArea();
        if (this.state == 0)
            for (var b = 0; b < 3; b++) a.addTouchArea(b, 88, 310 + b * 40, 261, 40);
        else if (this.state == 1)
            for (b = 0; b < this.imgMenu.length; b++) b < 3 ? (b != 0 || this.hasChoiTiep) && a.addTouchArea(b, 45, 303 + b * 50, 180, 54) : a.addTouchArea(b, 225, 203 + b * 50,
                180, 54)
    };
    b.prototype.touchDown = function(a) {
        if (a >= 0) a != this.index ? this.index = a : this.doAction()
    };
    b.prototype.onkeyDown = function(a) {
        if (this.state == 0) switch (a) {
            case casual.KEY.DOWN:
                if (++this.index >= 3) this.index = 0;
                casual.KEY.resetKey(casual.KEY.DOWN);
                break;
            case casual.KEY.UP:
                if (--this.index < 0) this.index = 2;
                casual.KEY.resetKey(casual.KEY.UP);
                break;
            case casual.KEY.FIRE:
                casual.KEY.resetKey(casual.KEY.FIRE), this.doAction()
        } else if (this.state == 1) switch (a) {
            case casual.KEY.DOWN:
                if (++this.index > 5) this.index = this.hasChoiTiep ?
                    0 : 1;
                casual.KEY.resetKey(casual.KEY.DOWN);
                break;
            case casual.KEY.UP:
                if (--this.index < (this.hasChoiTiep ? 0 : 1)) this.index = 5;
                casual.KEY.resetKey(casual.KEY.UP);
                break;
            case casual.KEY.FIRE:
                casual.KEY.resetKey(casual.KEY.FIRE), this.doAction()
        }
    };
    b.prototype.doAction = function() {
        if (this.state == 0) switch (this.index) {
            case 0:
                this.state = 1;
                this.index = this.hasChoiTiep ? 0 : 1;
                this.registerTouch();
                break;
            case 1:
                void 0
                break;
            case 2:
                window.history.back()
        } else if (this.state == 1) switch (this.index) {
            case 1:
                casual.State.preInit =
                    function(a) {
                        a.startLoading(casual.State.CHOOSE_LEVEL)
                    };
                this.changeState(casual.State.LOADING_GAME);
                break;
            case 2:
                casual.State.preInit = function() {};
                this.changeSubState(casual.State.HELP);
                break;
            case 3:
                casual.game.soundEnable = !casual.game.soundEnable;
                casual.game.soundEnable ? casual.game.playSound(casual.IDSound.BKG_MAIN, !0) : casual.game.stopSound(casual.IDSound.BKG_MAIN);
                break;
            case 4:
                casual.State.preInit = function() {};
                this.changeSubState(casual.State.HIGHSCORE);
                break;
            case 5:
                this.index = this.state = 0, this.registerTouch()
        }
    }
})();
(function() {
    var b = function() {
        casual.Slide.call(this);
        this.name = NameUtil.createUniqueName("ChooseLevel");
        this.iIndex = 0
    };
    casual.ChooseLevel = b;
    casual.inherit(b, casual.Slide);
    b.prototype.init = function() {
        this.imgClose = this.getImage("close.png");
        this.imgBg = this.getImage("bg_choice_lv.jpg");
        this.imgLevel = Array(6);
        for (var a = 0; a < this.imgLevel.length; a++) this.imgLevel[a] = this.getImage("l" + a + ".png");
        this.imgAvatar = Array(7);
        for (a = 0; a < this.imgAvatar.length; a++) this.imgAvatar[a] = this.getImage("ava" + a + ".jpg");
        this.imgFocus =
            this.getImage("focusLevel.png")
    };
    b.prototype.registerTouch = function() {
        var a = casual.Touch;
        a.releaseTouchArea();
        for (var b = 0; b < 6; b++) b < 3 ? a.addTouchArea(b, 103 + b * 170, 160, 94, 80) : a.addTouchArea(b, 103 + (b - 3) * 170, 310, 94, 80);
        a.addTouchArea(casual.IDTouch.HOME, this.width - 55, 20, 35, 35)
    };
    b.prototype.render = function(a) {
        a.drawImage(this.imgBg, 0, 0, casual.JGraphics.LEFT | casual.JGraphics.TOP);
        a.drawImage(this.imgClose, this.width - 20, 20, casual.JGraphics.RIGHT | casual.JGraphics.TOP);
        for (var b = 0; b < 6; b++) b < 3 ? (a.drawImage(this.imgAvatar[b +
            1], 150 + b * 170, 200, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER), a.drawImage(this.imgLevel[b], 150 + b * 170, 270, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)) : (a.drawImage(this.imgAvatar[b + 1], 150 + (b - 3) * 170, 350, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER), a.drawImage(this.imgLevel[b], 150 + (b - 3) * 170, 420, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER));
        this.iIndex < 3 ? a.drawImage(this.imgFocus, 150 + this.iIndex * 170, 200, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER) : a.drawImage(this.imgFocus,
            150 + (this.iIndex - 3) * 170, 350, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
    };
    b.prototype.onkeyDown = function(a) {
        switch (a) {
            case casual.KEY.FIRE:
                this.doAction();
                break;
            case casual.KEY.LEFT:
                this.iIndex > 0 && this.iIndex--;
                break;
            case casual.KEY.RIGHT:
                this.iIndex < 5 && this.iIndex++;
                break;
            case casual.KEY.UP:
                this.iIndex > 2 && (this.iIndex -= 3);
                break;
            case casual.KEY.DOWN:
                this.iIndex < 3 && (this.iIndex += 3)
        }
    };
    b.prototype.touchDown = function(a) {
        if (a >= 0) this.iIndex != a ? this.iIndex = a : this.doAction();
        else if (a == casual.IDTouch.HOME) casual.State.preInit =
            function(a) {
                a.state = 1;
                a.processChageState()
            }, this.changeState(casual.State.MAIN_MENU)
    };
    b.prototype.doAction = function() {
        var a = this;
        casual.State.preInit = function(b) {
            b.level = a.iIndex + 1;
            b.afterInit()
        };
        this.changeState(casual.State.BODY)
    }
})();
(function() {
    var b = function() {
        casual.Slide.call(this);
        this.name = NameUtil.createUniqueName("Help")
    };
    casual.Help = b;
    casual.inherit(b, casual.Slide);
    b.prototype.init = function() {
        this.imgBg = this.getImage("help")
    };
    b.prototype.render = function(a) {
        a.drawImage(this.imgBg, 0, 0, casual.JGraphics.LEFT | casual.JGraphics.TOP)
    };
    b.prototype.onkeyDown = function(a) {
        switch (a) {
            case casual.KEY.FIRE:
                this.doAction()
        }
    };
    b.prototype.touchDown = function() {
        this.doAction()
    };
    b.prototype.doAction = function() {
        casual.game.currSlide.backSlide()
    }
})();
(function() {
    var b = function() {
        casual.Slide.call(this);
        this.name = NameUtil.createUniqueName("HighScore");
        this.xLocation = 70;
        this.yLocation = 130;
        this.dy = 30;
        this.dx = 230;
        this.xLocationDif = 381;
        this.dxDif = 200
    };
    casual.HighScore = b;
    casual.inherit(b, casual.Slide);
    b.prototype.init = function() {
        this.imgBg = this.getImage("bg_highscore");
        this.result = casual.CMD.getHighscoreTopPlayer();
        this.playerResult = casual.CMD.getHighscoreCurPlayer()
    };
    b.prototype.registerTouch = function() {
        casual.Touch.addTouchArea(casual.IDTouch.HOME,
            this.width - 222, this.height - 50, 172, 30)
    };
    b.prototype.render = function(a) {
        a.drawImage(this.imgBg, 0, 0, casual.JGraphics.LEFT | casual.JGraphics.TOP);
        var b = this.result.length;
        b > 11 && (b = 11);
        for (var d = 0; d < b; d++) a.drawStringLeft(this.result[d][0], this.xLocation, this.yLocation + d * this.dy, "#00ffff"), casual.Static.drawNumber(a, this.result[d][1], this.xLocation + this.dx, this.yLocation + d * this.dy, casual.JGraphics.RIGHT | casual.JGraphics.TOP, !1);
        if (this.playerResult != null) {
            b = this.playerResult.length;
            b > 11 && (b = 11);
            for (d = 0; d <
                b; d++) a.drawStringLeft(this.playerResult[d][0], this.xLocationDif, this.yLocation + d * this.dy, "#00ffff"), casual.Static.drawNumber(a, this.playerResult[d][1], this.xLocationDif + this.dxDif, this.yLocation + d * this.dy, casual.JGraphics.RIGHT | casual.JGraphics.TOP, !1)
        }
    };
    b.prototype.touchDown = function(a) {
        if (a == casual.IDTouch.HOME) this.onkeyDown(casual.KEY.RIGHT_SOFTKEY)
    };
    b.prototype.onkeyDown = function(a) {
        switch (a) {
            case casual.KEY.RIGHT_SOFTKEY:
                casual.State.preInit = function(a) {
                    a.state = 1;
                    a.processChageState()
                }, this.changeState(casual.State.MAIN_MENU)
        }
    };
    b.prototype.destroy = function() {
        this.playerResult = this.result = this.imgBg = null
    }
})();
(function() {
    var b = function() {
        casual.Slide.call(this);
        this.name = NameUtil.createUniqueName("LoadingGame");
        this.strLoading = "\u0110ang t\u1ea3i games.....";
        this.lvlChose = this.countStart = this.isStart = this.state = 0
    };
    casual.LoadingGame = b;
    casual.inherit(b, casual.Slide);
    b.prototype.init = function() {
        this.isStart = !1
    };
    b.prototype.render = function(a) {
        a.fillRect(0, 0, this.width, this.height, "#000000");
        a.drawString(this.strLoading, this.width >> 1, this.height >> 1, "#FFFFFF", 200, 24)
    };
    b.prototype.update = function() {
        if (this.isStart &&
            --this.countStart <= 0) this.isStart = !1, casual.State.preInit = function() {}, this.changeState(this.state, this.lvlChose)
    };
    b.prototype.startLoading = function(a, b) {
        this.state = a;
        this.isStart = !0;
        this.countStart = 5;
        this.lvlChose = b || 1
    }
})();
(function() {
    var b = function() {
        casual.Slide.call(this);
        this.name = NameUtil.createUniqueName("InMenu")
    };
    casual.InMenu = b;
    casual.inherit(b, casual.Slide);
    b.prototype.init = function() {
        this.index = 0;
        this.imgBack = this.getImage("gamebg.jpg");
        this.imgFocus = this.getImage("menu/menu_focus.png");
        this.imgPause = Array(3);
        this.imgPause[0] = this.getImage("menu/m_0.png");
        this.imgPause[1] = this.getImage("menu/m_3.png");
        this.imgPause[2] = this.getImage("menu/m_5.png");
        this.imgsouOn = this.getImage("on");
        this.imgsouOff = this.getImage("off")
    };
    b.prototype.registerTouch = function() {
        var a = casual.Touch;
        a.releaseTouchArea();
        for (var b = 0; b < 3; b++) a.addTouchArea(b, 226, 173 + b * 60, 186, 54)
    };
    b.prototype.touchDown = function(a) {
        if (a >= 0) a != this.index ? this.index = a : this.doAction()
    };
    b.prototype.render = function(a) {
        a.drawImage(this.imgBack, 0, 0, casual.JGraphics.TOP | casual.JGraphics.LEFT);
        for (var b = 0; b < 3; b++) a.drawImage(this.imgPause[b], this.width >> 1, 200 + b * 60, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        a.drawImage(casual.game.soundEnable ? this.imgsouOn : this.imgsouOff,
            395, 263, casual.JGraphics.LEFT | casual.JGraphics.VCENTER);
        a.drawImage(this.imgFocus, this.width >> 1, 200 + this.index * 60, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
    };
    b.prototype.update = function() {};
    b.prototype.onkeyDown = function(a) {
        switch (a) {
            case casual.KEY.DOWN:
                if (++this.index >= 3) this.index = 2;
                casual.KEY.resetKey(casual.KEY.DOWN);
                break;
            case casual.KEY.UP:
                if (--this.index < 0) this.index = 0;
                casual.KEY.resetKey(casual.KEY.UP);
                break;
            case casual.KEY.FIRE:
                this.doAction()
        }
    };
    b.prototype.doAction = function() {
        switch (this.index) {
            case 0:
                casual.game.currSlide.backSlide();
                casual.game.currSlide._pause = !1;
                casual.game.playSound(casual.IDSound.BKG_MAIN, !0);
                break;
            case 1:
                casual.game.soundEnable = !casual.game.soundEnable;
                casual.game.playSound(casual.IDSound.SFX_CONFIRM);
                break;
            case 2:
                casual.State.preInit = function(a) {
                    a.state = 1;
                    a.processChageState()
                }, this.changeState(casual.State.MAIN_MENU)
        }
    };
    b.prototype.destroy = function() {}
})();
(function() {
    var b = function() {
        casual.Slide.call(this);
        this.name = NameUtil.createUniqueName("InOver");
        this.score = 0
    };
    casual.InOver = b;
    casual.inherit(b, casual.Slide);
    b.prototype.setContent = function(a, b) 
    {
		//new GV().saveScore(b);
    };
    b.prototype.init = function() {
        this.index = 0;
        this.imgOver = Array(3);
        this.imgOver[0] = this.getImage("menu/m_6.png");
        this.imgOver[1] = this.getImage("menu/m_7.png");
        this.imgOver[2] = this.getImage("menu/m_8.png");
        this.imgFocus = this.getImage("menu/menu_focus.png")
    };
    b.prototype.registerTouch = function() {
        var a = casual.Touch;
        a.releaseTouchArea();
        for (var b = 0; b < 3; b++) a.addTouchArea(b, 226, 173 + b * 60, 186, 54)
    };
    b.prototype.touchDown = function(a) {
        if (a >= 0) a != this.index ? this.index = a : this.doAction()
    };
    b.prototype.render = function(a) {
        for (var b = 0; b < 3; b++) a.drawImage(this.imgOver[b], this.width >> 1, 200 + b * 60, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        a.drawImage(this.imgStatus, this.width >> 1, (this.height >> 1) - 130, casual.JGraphics.HCENTER |
            casual.JGraphics.VCENTER);
        a.drawImage(this.imgFocus, this.width >> 1, 200 + this.index * 60, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
    };
    b.prototype.update = function() {};
    b.prototype.onkeyDown = function(a) {
        switch (a) {
            case casual.KEY.DOWN:
                if (++this.index > 2) this.index = 2;
                casual.KEY.resetKey(casual.KEY.DOWN);
                break;
            case casual.KEY.UP:
                if (--this.index < 0) this.index = 0;
                casual.KEY.resetKey(casual.KEY.UP);
                break;
            case casual.KEY.FIRE:
                this.doAction()
        }
    };
    b.prototype.doAction = function() {
        switch (this.index) {
            case 0:
                casual.State.preInit =
                    function(a) {
                        a.startLoading(casual.State.BODY_CONTINUE)
                    };
                this.changeState(casual.State.LOADING_GAME);
                break;
            case 1:
                void 0
                break;
            case 2:
                casual.State.preInit = function(a) {
                    a.state = 1;
                    a.processChageState()
                }, this.changeState(casual.State.MAIN_MENU)
        }
    };
    b.prototype.destroy = function() {
        this.imgStatus = this.imgBg = null;
        imgFocus[0] = null;
        imgFocus[1] = null;
        imgFocus = imgFocus[2] = null
    }
})();
(function() {
    var b = function() {
        casual.Slide.call(this);
        this.name = NameUtil.createUniqueName("EndGame")
    };
    casual.EndGame = b;
    casual.inherit(b, casual.Slide);
    b.prototype.setContent = function(a) {
        this.score = a
    };
    b.prototype.init = function() 
    {
        this.imgSave = this.getImage("save");
        this.imgBack = this.getImage("turn");
        this.imgTB = this.getImage("tab");
        var a = document.createElement("div");
        a.style.position = "relative";
        a.style.textAlign = "center";
        a.style.border = "0px";
        a.style.left = ((this.width >> 1) - (this.imgTB.width >> 1) + 5) * this.scaleX +
            "px";
        a.style.top = 105 * this.scaleY + "px";
        a.style.width = (this.imgTB.width - 15) * this.scaleX + "px";
        a.style.height = (this.imgTB.height - 10) * this.scaleY + "px";
        casual.game.container.appendChild(a);
        a.innerHTML = "<input id='txt_name' placeholder='Nh\u1eadp V\u00e0o T\u00ean' type=text style='width:100%;height:100%;border:0px'>";
        this.namediv = a
    };
    b.prototype.registerTouch = function() {
        var a = casual.Touch;
        a.addTouchArea(casual.IDTouch.LUU_DIEM, 0, this.height - 40, 70, 40);
        a.addTouchArea(casual.IDTouch.LUU_DIEM, (this.width >> 1) +
            100, 100, 70, 40);
        a.addTouchArea(casual.IDTouch.HOME, this.width - 70, this.height - 40, 70, 40)
    };
    b.prototype.touchDown = function(a) {
        switch (a) {
            case casual.IDTouch.LUU_DIEM:
                if ($("#txt_name").val() != "")
                    if (a = $("#txt_name").val(), a.length > 4 && a.length < 15) {
                        var a = casual.CMD.showUnsignedString(a),
                            b = casual.CMD.saveName(a),
                            b = b.split(":");
                        b[0] == "0" ? (casual.GameInfo.PLAYER_NAME = a, b = casual.CMD.saveScore(casual.GameInfo.PLAYER_NAME, this.score), b = b.split(":"), b[0] == "0" ? (alert("L\u01b0u \u0110i\u1ec3m Th\u00e0nh C\u00f4ng."),
                            casual.game.container.removeChild(this.namediv), casual.State.preInit = function() {}, this.changeState(casual.State.HIGHSCORE), casual.game.canvas.focus()) : alert(b[1])) : alert(b[1])
                    } else alert("T\u00ean t\u1eeb 4-14 k\u00ed t\u1ef1 v\u00e0 kh\u00f4ng bao g\u1ed3m k\u00ed t\u1ef1 \u0111\u1eb7t bi\u1ec7t.");
                else alert("Nh\u1eadp v\u00e0o t\u00ean \u0111\u1ec3 l\u01b0u \u0111i\u1ec3m.");
                break;
            case casual.IDTouch.HOME:
                casual.State.preInit = function() {}, casual.game.container.removeChild(this.namediv), this.changeState(casual.State.MAIN_MENU),
                    casual.game.canvas.focus()
        }
    };
    b.prototype.render = function(a) {
        a.fillRect(0, 0, this.width, this.height, "#ffffff");
        a.drawImage(this.imgTB, this.width >> 1, 100, casual.JGraphics.TOP | casual.JGraphics.HCENTER);
        a.drawImage(this.imgSave, 0, this.height, casual.JGraphics.LEFT | casual.JGraphics.BOTTOM);
        a.drawImage(this.imgSave, (this.width >> 1) + 120, 105, casual.JGraphics.LEFT | casual.JGraphics.TOP);
        a.drawImage(this.imgBack, this.width, this.height, casual.JGraphics.RIGHT | casual.JGraphics.BOTTOM)
    }
})();
(function() {
    var b = {
        listImageOQuan: null,
        NUM_IMG_O_QUAN: 7,
        imgOQuanMix1: null,
        imgOQuanMix2: null,
        listImgOQuanBig: null,
        listImgHieuUng: null,
        NUM_HIEU_UNG: 2,
        NUM_IMG_O_QUAN_BIG: 2,
        listImageHandChooseQuan: null,
        NUM_IMG_HAND_CHOOSE: 2,
        listImageHandMove: null,
        NUM_IMG_HAND_MOVE: 2,
        listImageHandEat: null,
        NUM_IMG_HAND_EAT: 2,
        listPointOfMoveOQuan_Me: [
            ["168,216", "156,256", "146,291", "133,338", "130,405"],
            ["245,209", "225,235", "193,271", "174,300", "153,340", "135,404"],
            ["314,216", "284,250", "248,282", "222,311", "180,349", "126,414"],
            ["390,214", "363,247", "317,280", "276,308", "236,334", "206,360", "160,384", "126,409"],
            ["465,214", "412,248", "358,282", "301,314", "232,356", "177,388", "135,418"],
            ["523,281", "448,308", "386,329", "327,350", "266,373", "208,394", "160,408", "135,420"],
            ["470,300", "405,320", "347,343", "305,357", "248,378", "188,400", "140,420"],
            ["392,304", "351,323", "295,346", "238,371", "182,397", "140,417"],
            ["318,304", "278,324", "242,346", "205,368", "170,387", "145,408"],
            ["246,301", "209,332", "176,358", "144,383", "130,413"],
            ["171,304", "150,346",
                "132,381", "130,416"
            ],
            ["101,260", "105,302", "110,343", "116,386", "130,420"]
        ],
        listNumberPoint_Me: [5, 6, 6, 8, 7, 8, 7, 6, 6, 5, 4, 5],
        listPointOfMoveOQuan_Comp: [
            ["171,211", "207,200", "246,182", "283,171", "319,156", "357,142", "392,128", "432,116", "467,104"],
            ["248,218", "290,198", "324,182", "357,164", "395,145", "462,107"],
            ["317,217", "356,183", "393,156", "437,128", "481,104"],
            ["388,219", "411,191", "439,157", "478,107"],
            ["471,223", "472,186", "477,147", "473,105"],
            ["538,258", "525,218", "511,184", "498,146", "475,111"],
            ["467,303", "470,264",
                "472,225", "473,186", "475,147", "474,109"
            ],
            ["390,306", "408,264", "424,231", "439,195", "457,162", "475,117"],
            ["323,306", "353,266", "381,236", "403,207", "427,177", "452,147", "476,109"],
            ["246,309", "287,276", "314,252", "345,225", "376,199", "406,175", "437,150", "477,106"],
            ["173,311", "214,285", "245,263", "278,240", "311,217", "340,197", "374,176", "406,154", "469,111"],
            ["107,242", "148,228", "184,214", "222,201", "259,186", "297,170", "333,158", "370,141", "407,129", "445,113", "474,105"]
        ],
        listNumberPoint_Comp: [9, 6, 5, 4, 4, 5, 6, 6, 7,
            8, 9, 11
        ]
    };
    casual.Constant = b;
    b.createImageHand = function() {
        b.listImageHandChooseQuan = Array(b.NUM_IMG_HAND_CHOOSE);
        b.listImageHandMove = Array(b.NUM_IMG_HAND_MOVE);
        b.listImageHandEat = Array(b.NUM_IMG_HAND_EAT);
        b.listImageHandChooseQuan[0] = casual.game.getImage("h0.png");
        b.listImageHandChooseQuan[1] = casual.game.getImage("h1.png");
        b.listImageHandMove[0] = casual.game.getImage("h1.png");
        b.listImageHandMove[1] = casual.game.getImage("h2.png");
        b.listImageHandEat[0] = casual.game.getImage("h0.png");
        b.listImageHandEat[1] =
            casual.game.getImage("h3.png")
    };
    b.createImageOQuan = function() {
        b.listImageOQuan = Array(b.NUM_IMG_O_QUAN);
        for (var a = 0; a < b.NUM_IMG_O_QUAN; a++) b.listImageOQuan[a] = casual.game.getImage("o" + a + ".png");
        b.listImgHieuUng = Array(b.NUM_HIEU_UNG);
        for (a = 0; a < b.NUM_HIEU_UNG; a++) b.listImgHieuUng[a] = casual.game.getImage("hu" + a + ".png");
        b.listImgOQuanBig = Array(b.NUM_IMG_O_QUAN_BIG);
        for (a = 0; a < b.NUM_IMG_O_QUAN_BIG; a++) b.listImgOQuanBig[a] = casual.game.getImage("oquanBig" + a + ".png");
        b.imgOQuanMix1 = casual.game.getImage("oquanMix1.png");
        b.imgOQuanMix2 = casual.game.getImage("oquanMix2.png")
    }
})();
(function() {
    casual.DirectComp = function(b, a, c) {
        this.id = b;
        this.direct = a;
        this.numberCanEat = c
    }
})();
(function() {
    var b = function(a, c, d, e, f, h, g, i) {
        b.listPointOfOQuanNormal = ["38,15", "60,58", "15,58", "15,30", "60,30", "35,65", "35,40"];
        b.listPointOfOQuanBigLeft = ["24,55", "45,51", "17,79", "59,58", "20,117", "37,130", "55,119", "65,103"];
        this.xOQuan = a;
        this.yOQuan = c;
        this.widthOQuan = d;
        this.heightOQuan = e;
        this.quality = f;
        this.kindOfOQuan = h;
        this.indexOQuanBig = g;
        this.qualityToFindDirect = i;
        this.QUAN = 10
    };
    casual.OQuan = b;
    b.prototype.paint = function(a) {
        if (this.kindOfOQuan == 0 || this.kindOfOQuan == 2)
            if (this.quality <= 7)
                if (this.kindOfOQuan ==
                    0)
                    for (var c = 0; c < this.quality; c++) a.drawImage(casual.Constant.listImageOQuan[c], this.xOQuan + parseInt(b.listPointOfOQuanNormal[c].split(",")[0]), this.yOQuan + parseInt(b.listPointOfOQuanNormal[c].split(",")[1]), casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
                else
                    for (c = 0; c < this.quality; c++) a.drawImage(casual.Constant.listImageOQuan[c], this.xOQuan + parseInt(b.listPointOfOQuanBigLeft[c].split(",")[0]), this.yOQuan + parseInt(b.listPointOfOQuanBigLeft[c].split(",")[1]), casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        else this.quality > 7 && this.quality <= 10 ? a.drawImage(casual.Constant.imgOQuanMix1, this.xOQuan + this.widthOQuan / 2, this.yOQuan + this.heightOQuan / 2, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER) : a.drawImage(casual.Constant.imgOQuanMix2, this.xOQuan + this.widthOQuan / 2, this.yOQuan + this.heightOQuan / 2, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        else if (this.kindOfOQuan == 1)
            if (this.quality < this.QUAN)
                for (c = 0; c < this.quality; c++) a.drawImage(casual.Constant.listImageOQuan[c], this.xOQuan + parseInt(b.listPointOfOQuanBigLeft[c].split(",")[0]),
                    this.yOQuan + parseInt(b.listPointOfOQuanBigLeft[c].split(",")[1]), casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
            else if (this.quality >= this.QUAN && this.quality < 18) {
            for (c = this.QUAN; c < this.quality; c++) a.drawImage(casual.Constant.listImageOQuan[c - this.QUAN], this.xOQuan + parseInt(b.listPointOfOQuanBigLeft[c - this.QUAN].split(",")[0]), this.yOQuan + parseInt(b.listPointOfOQuanBigLeft[c - this.QUAN].split(",")[1]), casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
            a.drawImage(casual.Constant.listImgOQuanBig[this.indexOQuanBig],
                this.xOQuan + this.widthOQuan / 2, this.yOQuan + this.heightOQuan / 2, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
        } else a.drawImage(casual.Constant.imgOQuanMix2, this.xOQuan + this.widthOQuan / 2, this.yOQuan + this.heightOQuan / 2 - 10, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER), a.drawImage(casual.Constant.listImgOQuanBig[this.indexOQuanBig], this.xOQuan + this.widthOQuan / 2, this.yOQuan + this.heightOQuan / 2 + 10, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
    }
})();
(function() {
    var b = function() {
        casual.Slide.call(this);
        this.name = NameUtil.createUniqueName("CGame");
        this.isGameWin = this.isGameOver = this.isFinishGame = !1;
        this.timeOfPass = this.vxOfPass = this.iStepPass = this.timePassLevel = 0;
        this.k_iTimePassLevel = 3;
        this.imgScore = this.imgPassLevel = this.imgLevel = this.imgItem = this.imgmenu = null;
        this.isPassLevel = !1;
        this.MAX_LEVEL = 6;
        this.score = 0;
        this.level = 1;
        this.listOQuan = null;
        this.NUM_O_QUAN = 12;
        this.indexOQuan = 6;
        this.imgDraw = this.imgWin = this.imgIncreaseLevel = this.imgLose = this.imgRaiSoi =
            this.imgLeftRight = this.imgFocus = null;
        this.flagOK = !1;
        this.indexHand = 0;
        this.flagEatQuan = this.flagBeatOQuan = this.flagMoveQuanRight = this.flagMoveQuanLeft = !1;
        this.timeChangeIndexMove = 2;
        this.directMove = "";
        this.time_in_OneTime = 15;
        this.indexFly = this.yOQuanFly = this.xOQuanFly = 0;
        this.chooseOQuanRight = this.chooseOQuanLeft = !1;
        this.numOQuanChoose = 0;
        this.flagCompGo = this.flagMeGo = !1;
        this.tempSecond = this.tempIndex = this.numberOQuanCompEat = this.numberOQuanIEat = 0;
        this.flagMoveTheSecond = !1;
        this.listPointCompEat = null;
        this.NUM_COMP_EAT = 60;
        this.listPointMeEat = null;
        this.NUM_ME_EAT = 60;
        b.TIME_OF_LEVEL = [10, 10, 20, 40, 80, 120];
        this.timeToFindDirectComp = 0;
        this.listDirectComp = null;
        this.NUMBER_DIRECT_COMP = 10;
        this.timeGoOfComp = this.index_Direct_Comp = 0;
        this.flagTime = !1;
        this.timeWait = 10;
        this.flagRaiSoi = !1;
        this.timeToDisplayImageBanner = 20;
        this.timeEndGame = 10;
        this.timeTick = this.indexHieuUng = 0;
        this.firstTimeGo = !0
    };
    casual.CGame = b;
    casual.inherit(b, casual.Slide);
    b.prototype.init = function() {
        this.imgIngame = this.getImage("in");
        this.imgBg =
            this.getImage("gamebg.jpg");
        this.imgPlayerAvatar = this.getImage("ava0.jpg");
        this.imgFocus = this.getImage("focusOquan.png");
        this.imgLeftRight = this.getImage("leftRight.png");
        this.imgRaiSoi = this.getImage("raisoi.png");
        casual.Constant.createImageOQuan();
        casual.Constant.createImageHand();
        this.chageGameLevel()
    };
    b.prototype.chageGameLevel = function() {
        this.afterInit();
        this.resetInfomation();
        this.initListOQuan();
        this.listPointCompEat = Array(this.NUM_COMP_EAT);
        this.listPointMeEat = Array(this.NUM_ME_EAT);
        this.listDirectComp =
            Array(this.NUMBER_DIRECT_COMP)
    };
    b.prototype.resetInfomation = function() {
        this.firstTimeGo = !0;
        this.numberOQuanIEat = this.numberOQuanCompEat = 0;
        this.flagRaiSoi = !1;
        this.timeToDisplayImageBanner = 20;
        this.timeWait = 10;
        this.timeGoOfComp = this.score = 0;
        this.flagOK = this.isPause = !1;
        this.indexHand = 0;
        this.flagEatQuan = this.flagMoveQuanRight = this.flagMoveQuanLeft = !1;
        this.numOQuanChoose = 0;
        this.flagMeGo = !0;
        this.flagCompGo = !1;
        this.indexOQuan = 6;
        this.timeChangeIndexMove = 2;
        this.flagMoveTheSecond = this.flagBeatOQuan = !1;
        this.directMove =
            "";
        this.time_in_OneTime = 15;
        this.isGameDraw = this.flagTime = !1;
        this.index_Direct_Comp = 0;
        this.listDirectComp = Array(this.NUMBER_DIRECT_COMP);
        this.chooseOQuanRight = this.chooseOQuanLeft = !1
    };
    b.prototype.initListOQuan = function() {
        this.listOQuan = Array(this.NUM_O_QUAN);
        for (var a = 0; a < 5; a++) {
            var b = new casual.OQuan(132 + a * 74, 175, 74, 82, 5, 0, 0, 5);
            this.listOQuan[a] = b
        }
        for (a = 6; a < 11; a++) b = new casual.OQuan(428 - (a - 6) * 74, 265, 74, 82, 5, 0, 0, 5), this.listOQuan[a] = b;
        a = Math.floor(Math.random() * 2);
        this.listOQuan[5] = new casual.OQuan(495,
            173, 75, 176, 10, 1, a, 10);
        this.listOQuan[11] = new casual.OQuan(64, 173, 75, 176, 10, 1, 1 - a, 10)
    };
    b.prototype.afterInit = function() {
        this.imgComputerAvatar = this.getImage("ava" + this.level + ".jpg");
        this.imgLevelInfo = this.getImage("l" + (this.level - 1) + ".png")
    };
    b.prototype.registerTouch = function() {
        var a = casual.Touch;
        a.releaseTouchArea();
        a.addTouchArea(casual.IDTouch.IN_MENU, this.width - 50, this.height - 50, 50, 50);
        for (var b = 6; b < 11; b++) a.addTouchArea(16 - b, 138 + (b - 6) * 73, 255, 73, 93)
    };
    b.prototype.paintOQuan = function(a) {
        for (var b =
                0; b < this.NUM_O_QUAN; b++) this.listOQuan[b] != null && (this.listOQuan[b].paint(a), b != 11 ? casual.Static.drawNumber(a, this.listOQuan[b].quality, this.listOQuan[b].xOQuan + 10, this.listOQuan[b].yOQuan + this.listOQuan[b].heightOQuan - 15, 0) : casual.Static.drawNumber(a, this.listOQuan[b].quality, this.listOQuan[b].xOQuan + 50, this.listOQuan[b].yOQuan + 10, 0))
    };
    b.prototype.paintHandChoose = function(a) {
        this.indexOQuan - 6 >= 0 ? (a.drawImage(casual.Constant.listImgHieuUng[this.indexHand], 465 - (this.indexOQuan - 6) * 74, 300, casual.JGraphics.HCENTER |
            casual.JGraphics.VCENTER), a.drawImage(casual.Constant.listImageHandChooseQuan[this.indexHand], 465 - (this.indexOQuan - 6) * 74, 300, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)) : (a.drawImage(casual.Constant.listImgHieuUng[this.indexHand], 170 + this.indexOQuan * 74, 216, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER), a.drawImage(casual.Constant.listImageHandChooseQuan[this.indexHand], 170 + this.indexOQuan * 74, 216, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER))
    };
    b.prototype.paintHandMove = function(a) {
        a.drawImage(casual.Constant.listImageHandMove[this.indexHand],
            this.listOQuan[this.indexOQuan].xOQuan + 37, this.listOQuan[this.indexOQuan].yOQuan + 41, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        this.timeChangeIndexMove--
    };
    b.prototype.paintBeatHand = function(a) {
        a.drawImage(casual.Constant.listImgHieuUng[this.indexHand], this.listOQuan[this.indexOQuan].xOQuan + 37, this.listOQuan[this.indexOQuan].yOQuan + 41, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        a.drawImage(casual.Constant.listImageHandEat[this.indexHand], this.listOQuan[this.indexOQuan].xOQuan + 37, this.listOQuan[this.indexOQuan].yOQuan +
            41, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        this.timeChangeIndexMove--
    };
    b.prototype.paintEatOQuan = function(a) {
        a.drawImage(casual.Constant.listImageOQuan[0], this.xOQuanFly, this.yOQuanFly, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        this.indexOQuan - 6 < 0 && a.drawImage(this.imgFocus, 170 + this.indexOQuan * 74, 216, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
    };
    b.prototype.paintFocus = function(a) {
        !this.flagBeatOQuan && !this.flagMoveQuanLeft && !this.flagMoveQuanRight && !this.chooseOQuanLeft &&
            !this.chooseOQuanRight && (this.indexOQuan - 6 >= 0 ? a.drawImage(this.imgFocus, 465 - (this.indexOQuan - 6) * 74, 300, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER) : a.drawImage(this.imgFocus, 170 + this.indexOQuan * 74, 216, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER));
        this.flagOK && a.drawImage(this.imgLeftRight, 465 - (this.indexOQuan - 6) * 74, 300, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
    };
    b.prototype.paintResult = function(a) {
        casual.Static.drawNumber(a, this.numberOQuanIEat, 176, 469, 0);
        casual.Static.drawNumber(a,
            this.numberOQuanCompEat, 540, 137, 0);
        if (this.numberOQuanCompEat > 7 && this.numberOQuanCompEat <= 10) {
            var b = this.listPointCompEat[0].split(",");
            a.drawImage(casual.Constant.imgOQuanMix1, 475, 105, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
        } else if (this.numberOQuanCompEat <= 7)
            for (var d = 0; d < this.numberOQuanCompEat; d++) this.listPointCompEat[d] != null && (b = this.listPointCompEat[d].split(","), a.drawImage(casual.Constant.listImageOQuan[parseInt(b[2])], parseInt(b[0]), parseInt(b[1]), casual.JGraphics.HCENTER | casual.JGraphics.VCENTER));
        else this.listPointCompEat[0].split(","), a.drawImage(casual.Constant.imgOQuanMix2, 475, 105, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        if (this.numberOQuanIEat > 7 && this.numberOQuanIEat <= 10) a.drawImage(casual.Constant.imgOQuanMix1, 150, 420, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        else if (this.numberOQuanIEat <= 7)
            for (d = 0; d < this.numberOQuanIEat; d++) this.listPointMeEat[d] != null && (b = this.listPointMeEat[d].split(","), a.drawImage(casual.Constant.listImageOQuan[parseInt(b[2])], parseInt(b[0]),
                parseInt(b[1]), casual.JGraphics.HCENTER | casual.JGraphics.VCENTER));
        else this.listPointMeEat[0].split(","), a.drawImage(casual.Constant.imgOQuanMix2, 150, 420, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER)
    };
    b.prototype.paintTime = function(a) {
        if (this.flagMeGo && (casual.Static.drawNumber(a, this.time_in_OneTime, 428, 450, 0), this.timeTick % 20 == 0 && this.time_in_OneTime >= 0 && !this.flagBeatOQuan && !this.flagMoveQuanLeft && !this.flagMoveQuanRight && !this.flagMoveTheSecond && !this.flagEatQuan && !this.chooseOQuanLeft &&
                !this.chooseOQuanRight && (this.timeTick = 0, this.time_in_OneTime--, this.time_in_OneTime <= 0))) this.flagOK ? (Math.floor(Math.random() * 2) == 0 ? (this.chooseOQuanLeft = !0, this.chooseOQuanRight = !1) : (this.chooseOQuanLeft = !1, this.chooseOQuanRight = !0), this.flagOK = !1) : this.randomPosisionCompGo("me")
    };
    b.prototype.paintRaiSoi = function(a) {
        this.timeToDisplayImageBanner--;
        this.timeToDisplayImageBanner > 0 ? a.drawImage(this.imgRaiSoi, this.width / 2, this.height / 2, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER) : (this.flagRaiSoi = !1, this.timeToDisplayImageBanner = 10)
    };
    b.prototype.render = function(a) {
        a.fillRect(0, 0, this.width, this.height, "#ffffff");
        a.drawImage(this.imgBg, this.width >> 1, this.height >> 1, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        a.drawImage(this.imgPlayerAvatar, 325, 450, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        a.drawImage(this.imgComputerAvatar, 325, 75, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER);
        a.drawImage(this.imgLevelInfo, 95, 120, casual.JGraphics.TOP | casual.JGraphics.LEFT);
        this.paintOQuan(a);
        (this.chooseOQuanLeft || this.chooseOQuanRight) && this.paintHandChoose(a);
        this.flagMoveQuanLeft || this.flagMoveQuanRight ? this.paintHandMove(a) : this.flagBeatOQuan ? this.paintBeatHand(a) : this.flagEatQuan && this.paintEatOQuan(a);
        this.paintFocus(a);
        this.paintResult(a);
        this.paintTime(a);
        this.flagRaiSoi && this.paintRaiSoi(a);
        a.drawImage(this.imgIngame, this.width, this.height, casual.JGraphics.RIGHT | casual.JGraphics.BOTTOM);
        this.isGameWin && this.timePassLevel > 0 && this.paintPassLevel(a)
    };
    b.prototype.tuDongRaiSoi = function(a) {
        this.timeToDisplayImageBanner =
            20;
        if (a == "me" && !this.isGameDraw && !this.isGameOver && !this.isGameWin)
            if (this.numberOQuanIEat > 0) {
                if (this.numberOQuanIEat < 5) {
                    for (a = 0; a < this.numberOQuanIEat; a++) this.listOQuan[a + 6].quality = 1;
                    this.numberOQuanIEat = 0
                } else {
                    this.numberOQuanIEat -= 5;
                    for (a = 0; a < 5; a++) this.listOQuan[a + 6].quality = 1
                }
                this.flagRaiSoi = !0
            } else this.isGameOver = !0, this.timeEndGame = 10, this.flagRaiSoi = !1;
        else if (!this.isGameDraw && !this.isGameOver && !this.isGameWin)
            if (this.numberOQuanCompEat > 0) {
                if (this.numberOQuanCompEat < 5) {
                    for (a = 0; a < this.numberOQuanCompEat; a++) this.listOQuan[a].quality =
                        1;
                    this.numberOQuanCompEat = 0
                } else {
                    this.numberOQuanCompEat -= 5;
                    for (a = 0; a < 5; a++) this.listOQuan[a].quality = 1
                }
                this.flagRaiSoi = !0
            } else this.timeEndGame = 10, this.isGameWin = !0, this.flagRaiSoi = !1
    };
    b.prototype.randomPosisionCompGo = function(a) {
        var b = "";
        if (a == "comp")
            for (var d = 0; d < 5; d++) this.listOQuan[d] != null && this.listOQuan[d].quality > 0 && (b += d + ",");
        else
            for (d = 6; d < 11; d++) this.listOQuan[d] != null && this.listOQuan[d].quality > 0 && (b += d + ",");
        b = b.split(",");
        b.length <= 1 ? (this.tuDongRaiSoi(a), this.indexOQuan = Math.floor(Math.random() *
            4)) : this.indexOQuan = parseInt(b[Math.floor(Math.random() * (b.length - 1))]);
        Math.floor(Math.random() * 2) == 0 ? (this.chooseOQuanLeft = !0, this.chooseOQuanRight = !1) : (this.chooseOQuanLeft = !1, this.chooseOQuanRight = !0)
    };
    b.prototype.setUpBelongToLevel = function() {
        this.index_Direct_Comp = 0;
        this.listDirectComp = Array(this.NUMBER_DIRECT_COMP);
        switch (this.level) {
            case 1:
                this.randomPosisionCompGo("comp");
                break;
            case 2:
                this.timeGoOfComp == 5 ? (this.timeGoOfComp = 0, this.chooseCompGo()) : this.randomPosisionCompGo("comp");
                break;
            case 3:
                if (this.timeGoOfComp >
                    3) {
                    if (this.timeGoOfComp >= 5) this.timeGoOfComp = 0;
                    this.chooseCompGo()
                } else this.randomPosisionCompGo("comp");
                break;
            case 4:
                if (this.timeGoOfComp > 2) {
                    if (this.timeGoOfComp >= 5) this.timeGoOfComp = 0;
                    this.chooseCompGo()
                } else this.randomPosisionCompGo("comp");
                break;
            case 5:
                if (this.timeGoOfComp > 1) {
                    if (this.timeGoOfComp >= 5) this.timeGoOfComp = 0;
                    this.chooseCompGo()
                } else this.randomPosisionCompGo("comp");
                break;
            case 6:
                this.chooseCompGo()
        }
    };
    b.prototype.chooseCompGo = function() {
        for (var a = 0; a < 5; a++) this.ThietLapDanhSachDuongDi(a);
        var b = this.listDirectComp[0];
        if (b != null)
            for (a = 0; a < this.NUMBER_DIRECT_COMP; a++) this.listDirectComp[a] != null && b.numberCanEat < this.listDirectComp[a].numberCanEat && (b = this.listDirectComp[a]);
        b != null ? (this.indexOQuan = b.id, !b.direct == "left" ? (this.chooseOQuanLeft = !0, this.chooseOQuanRight = !1) : (this.chooseOQuanLeft = !1, this.chooseOQuanRight = !0)) : this.randomPosisionCompGo("comp")
    };
    b.prototype.ThietLapDanhSachDuongDi = function(a) {
        if (this.listOQuan[a].quality > 0) {
            var b = this.kiemTraHuongDi(a, "left"),
                d = this.kiemTraHuongDi(a,
                    "right");
            this.listDirectComp[this.index_Direct_Comp] = new casual.DirectComp(a, "left", b);
            this.index_Direct_Comp++;
            this.listDirectComp[this.index_Direct_Comp] = new casual.DirectComp(a, "right", d);
            this.index_Direct_Comp++;
            if (this.index_Direct_Comp > this.NUMBER_DIRECT_COMP - 1) this.index_Direct_Comp = this.NUMBER_DIRECT_COMP - 1
        }
    };
    b.prototype.updateChooseQuan = function() {
        if (this.chooseOQuanLeft) {
            if (this.numOQuanChoose = this.listOQuan[this.indexOQuan].quality, this.indexHand++, this.indexHand > casual.Constant.NUM_IMG_HAND_CHOOSE -
                1) this.indexHand = 0, this.flagMoveQuanLeft = !0, this.flagMoveQuanRight = this.chooseOQuanLeft = !1, this.listOQuan[this.indexOQuan].quality = 0, this.listOQuan[this.indexOQuan].qualityToFindDirect = 0
        } else if (this.chooseOQuanRight && (this.numOQuanChoose = this.listOQuan[this.indexOQuan].quality, this.indexHand++, this.indexHand > casual.Constant.NUM_IMG_HAND_CHOOSE - 1)) this.indexHand = 0, this.flagMoveQuanRight = !0, this.flagMoveQuanLeft = this.chooseOQuanRight = !1, this.listOQuan[this.indexOQuan].quality = 0, this.listOQuan[this.indexOQuan].qualityToFindDirect =
            0
    };
    b.prototype.moveLeft = function() {
        if (this.timeChangeIndexMove <= 0) {
            this.indexHand++;
            if (this.indexHand > casual.Constant.NUM_IMG_HAND_MOVE - 1)
                if (this.numOQuanChoose--, this.indexHand = 0, this.numOQuanChoose < 0) {
                    this.flagMoveQuanLeft = !1;
                    this.timeChangeIndexMove = 2;
                    this.flagMoveQuanRight = !1;
                    var a = this.checkAnSoi("left");
                    this.directMove = "left";
                    if (a != "stop")
                        if (a == "go" && !this.flagMoveTheSecond) this.chooseOQuanRight = !1, this.chooseOQuanLeft = !0, this.indexHand = 0;
                        else {
                            if (a == "eat") this.flagBeatOQuan = !0, this.flagMoveQuanRight =
                                this.flagMoveQuanLeft = this.flagEatQuan = !1, this.indexHand = 0
                        } else this.flagMeGo ? (this.flagMeGo = !1, this.flagCompGo = !0, this.time_in_OneTime = 15, this.flagTime = !1, this.timeGoOfComp++, this.kiemTraHetSoi("comp") && this.tuDongRaiSoi("comp")) : (this.flagMeGo = !0, this.flagCompGo = !1, this.time_in_OneTime = 15, this.flagTime = !1, this.kiemTraHetSoi("me") && this.tuDongRaiSoi("me"))
                } else {
                    this.indexOQuan++;
                    if (this.indexOQuan > this.NUM_O_QUAN - 1) this.indexOQuan = 0;
                    this.listOQuan[this.indexOQuan].quality += 1;
                    this.listOQuan[this.indexOQuan].qualityToFindDirect =
                        this.listOQuan[this.indexOQuan].quality
                }
            this.timeChangeIndexMove = 2
        }
    };
    b.prototype.moveRight = function() {
        if (this.timeChangeIndexMove <= 0) {
            this.indexHand++;
            if (this.indexHand > casual.Constant.NUM_IMG_HAND_MOVE - 1)
                if (this.numOQuanChoose--, this.indexHand = 0, this.numOQuanChoose < 0) {
                    this.flagMoveQuanLeft = !1;
                    this.timeChangeIndexMove = 2;
                    this.flagMoveQuanRight = !1;
                    var a = this.checkAnSoi("right");
                    this.directMove = "right";
                    if (a != "stop")
                        if (a == "go") this.chooseOQuanRight = !0, this.chooseOQuanLeft = !1, this.indexHand = 0;
                        else {
                            if (a ==
                                "eat") this.flagBeatOQuan = !0, this.flagMoveQuanRight = this.flagMoveQuanLeft = this.flagEatQuan = !1, this.indexHand = 0
                        } else this.flagMeGo ? (this.flagMeGo = !1, this.flagCompGo = !0, this.timeGoOfComp++, this.time_in_OneTime = 15, this.flagTime = !1, this.kiemTraHetSoi("comp") && this.tuDongRaiSoi("comp")) : (this.flagMeGo = !0, this.flagCompGo = !1, this.time_in_OneTime = 15, this.flagTime = !1, this.kiemTraHetSoi("me") && this.tuDongRaiSoi("me"))
                } else {
                    this.indexOQuan--;
                    if (this.indexOQuan < 0) this.indexOQuan = this.NUM_O_QUAN - 1;
                    this.listOQuan[this.indexOQuan].quality +=
                        1;
                    this.listOQuan[this.indexOQuan].qualityToFindDirect = this.listOQuan[this.indexOQuan].quality
                }
            this.timeChangeIndexMove = 2
        }
    };
    b.prototype.updateBeatOQuan = function() {
        if (this.timeChangeIndexMove <= 0) {
            this.indexHand++;
            if (this.indexHand > casual.Constant.NUM_IMG_HAND_EAT - 1) this.indexHand = 0, this.flagBeatOQuan = !1, this.flagEatQuan = !0, this.indexOQuan = this.tempSecond, this.timeChangeIndexMove = 2;
            this.timeChangeIndexMove = 2
        }
    };
    b.prototype.updateEatOQuan = function() {
        this.thayDoiViTriOQuanBiAn(this.tempSecond)
    };
    b.prototype.thayDoiViTriOQuanBiAn =
        function(a) {
            var b, d;
            this.flagCompGo ? (b = casual.Constant.listPointOfMoveOQuan_Comp[a], d = casual.Constant.listNumberPoint_Comp[a]) : (b = casual.Constant.listPointOfMoveOQuan_Me[a], d = casual.Constant.listNumberPoint_Me[a]);
            this.xOQuanFly = parseInt(b[this.indexFly].split(",")[0]);
            this.yOQuanFly = parseInt(b[this.indexFly].split(",")[1]);
            this.indexFly++;
            if (this.indexFly > d - 1) {
                if (a == 11 || a == 5) this.listOQuan[a].kindOfOQuan = 2;
                this.indexFly = 0;
                if (this.flagCompGo) {
                    b = Math.floor(Math.random() * 60) + 440;
                    d = Math.floor(Math.random() *
                        40) + 85;
                    var e = Math.floor(Math.random() * 7);
                    this.numberOQuanCompEat < this.NUM_COMP_EAT - 1 && (this.listPointCompEat[this.numberOQuanCompEat] = b + "," + d + "," + e);
                    this.numberOQuanIEat < 60 && (this.numberOQuanCompEat += 1)
                } else b = Math.floor(Math.random() * 70) + 110, d = Math.floor(Math.random() * 40) + 402, e = Math.floor(Math.random() * 7), this.numberOQuanIEat < this.NUM_ME_EAT - 1 && (this.listPointMeEat[this.numberOQuanIEat] = b + "," + d + "," + e), this.numberOQuanIEat < 60 && (this.numberOQuanIEat += 1);
                this.listOQuan[a].quality--;
                this.listOQuan[a].qualityToFindDirect =
                    this.listOQuan[a].quality;
                if (this.listOQuan[a].quality <= 0) this.directMove == "left" ? (this.flagMoveQuanLeft = !0, this.flagMoveQuanRight = !1) : (this.flagMoveQuanLeft = !1, this.flagMoveQuanRight = !0), this.indexOQuan = a, this.flagMoveTheSecond = !0, this.flagEatQuan = !1
            }
        };
    b.prototype.update = function() {
        if (this.subSlide == null) {
            this.timeTick++;
            if (this.flagCompGo && !this.flagTime && !this.flagRaiSoi && !this.isGameDraw && !this.isGameOver && !this.isGameWin) this.timeWait < 0 ? (this.setUpBelongToLevel(), this.flagTime = !0, this.timeWait =
                10) : this.timeWait--;
            this.updateChooseQuan();
            this.flagMoveQuanLeft ? this.moveLeft() : this.flagMoveQuanRight && this.moveRight();
            this.flagBeatOQuan ? this.updateBeatOQuan() : this.flagEatQuan && this.updateEatOQuan();
            if (this.isGameOver || this.isFinishGame || this.isGameDraw) 
            {
                var a = this;
                casual.State.preInit = function(b) {
                    a.isGameOver ? b.setContent(0, a.score) : a.isFinishGame ? b.setContent(1, a.score) : a.isGameDraw && b.setContent(2, a.score)
                };
                this.changeSubState(casual.State.THEEND);
                casual.KEY.resetKeys()
            } else if (this.isGameWin) {
                if (casual.KEY.isPressed(casual.KEY.OK) &&
                    this.timePassLevel > 0) this.timePassLevel = 0;
                if (this.level == this.MAX_LEVEL) this.isFinishGame = !0;
                else if (this.isPassLevel) {
                    if (this.timePassLevel <= 0) this.IncreaseLevelGame(), this.isGameWin = !1, this.imgPassLevel = null, this.isPassLevel = !1
                } else this.isPassLevel = !0, this.timePassLevel = this.k_iTimePassLevel, this.initPassLevel();
                casual.KEY.resetKeys()
            }
        }
    };
    b.prototype.checkAnSoi = function(a) {
        var b = "";
        if (a == "left") this.indexOQuan != 10 && this.indexOQuan != 4 ? (this.tempIndex = this.indexOQuan + 1 > this.NUM_O_QUAN - 1 ? 0 : this.indexOQuan +
            1, this.listOQuan[this.tempIndex].quality > 0 ? this.flagMoveTheSecond ? (this.firstTimeGo = !1, b = "stop", this.flagMoveTheSecond = !1, this.checkOQuanLon()) : (b = "go", this.indexOQuan = this.tempIndex, this.tempSecond = this.tempIndex = 0, this.flagMoveTheSecond = !1) : (this.tempSecond = this.indexOQuan + 2 > this.NUM_O_QUAN - 1 ? 1 : this.indexOQuan + 2, this.listOQuan[this.tempSecond].quality <= 0 ? (this.firstTimeGo = !1, this.tempSecond = this.tempIndex = 0, b = "stop", this.flagMoveTheSecond = !1, this.checkOQuanLon()) : this.firstTimeGo && this.tempSecond ==
                11 ? (this.firstTimeGo = !1, this.tempSecond = this.tempIndex = 0, b = "stop", this.flagMoveTheSecond = !1, this.checkOQuanLon()) : (b = "eat", this.indexOQuan = this.tempIndex, this.xOQuanFly = parseInt(casual.Constant.listPointOfMoveOQuan_Comp[this.tempSecond][0].split(",")[0]), this.yOQuanFly = parseInt(casual.Constant.listPointOfMoveOQuan_Comp[this.tempSecond][0].split(",")[1])))) : (this.firstTimeGo = !1, b = "stop", this.flagMoveTheSecond = !1, this.checkOQuanLon());
        else if (a == "right") this.indexOQuan != 0 && this.indexOQuan != 6 ? (this.tempIndex =
            this.indexOQuan - 1, this.listOQuan[this.tempIndex].quality > 0 ? this.flagMoveTheSecond ? (this.firstTimeGo = !1, b = "stop", this.flagMoveTheSecond = !1, this.checkOQuanLon()) : (b = "go", this.indexOQuan = this.tempIndex, this.tempSecond = this.tempIndex = 0, this.flagMoveTheSecond = !1) : (this.tempSecond = this.indexOQuan - 2 < 0 ? this.NUM_O_QUAN - 1 : this.indexOQuan - 2, this.listOQuan[this.tempSecond].quality <= 0 ? (this.firstTimeGo = !1, this.tempSecond = vtempIndex = 0, b = "stop", this.flagMoveTheSecond = !1, this.checkOQuanLon()) : this.firstTimeGo && this.tempSecond ==
                5 ? (this.tempSecond = vtempIndex = 0, this.firstTimeGo = !1, b = "stop", this.flagMoveTheSecond = !1, this.checkOQuanLon()) : (b = "eat", this.indexOQuan = this.tempIndex, this.xOQuanFly = parseInt(casual.Constant.listPointOfMoveOQuan_Comp[this.tempSecond][0].split(",")[0]), this.yOQuanFly = parseInt(casual.Constant.listPointOfMoveOQuan_Comp[this.tempSecond][0].split(",")[1])))) : (this.firstTimeGo = !1, b = "stop", this.flagMoveTheSecond = !1, this.checkOQuanLon());
        return b
    };
    b.prototype.checkOQuanLon = function() {
        if (this.listOQuan[5].quality >
            0 || this.listOQuan[11].quality > 0) return !0;
        else {
            for (var a = 6; a < 11; a++) this.numberOQuanIEat += this.listOQuan[a].quality;
            for (a = 0; a < 5; a++) this.numberOQuanCompEat += this.listOQuan[a].quality;
            this.numberOQuanIEat > this.numberOQuanCompEat ? (this.isGameWin = !0, this.isFinishGame = this.flagRaiSoi = this.isGameDraw = this.isGameOver = !1, this.score = this.numberOQuanIEat) : this.numberOQuanCompEat == this.numberOQuanIEat ? (this.isFinishGame = this.isGameOver = this.isGameWin = !1, this.isGameDraw = !0, this.score = this.numberOQuanIEat, this.flagRaiSoi = !1) : (this.isFinishGame = this.isGameWin = !1, this.isGameOver = !0, this.flagRaiSoi = this.isGameDraw = !1, this.score = this.numberOQuanIEat);
            return !1
        }
    };
    b.prototype.kiemTraHetSoi = function(a) {
        return a == "me" ? this.listOQuan[6].quality <= 0 && this.listOQuan[7].quality <= 0 && this.listOQuan[8].quality <= 0 && this.listOQuan[9].quality <= 0 && this.listOQuan[10].quality <= 0 ? !0 : !1 : this.listOQuan[0].quality <= 0 && this.listOQuan[1].quality <= 0 && this.listOQuan[2].quality <= 0 && this.listOQuan[3].quality <= 0 && this.listOQuan[4].quality <= 0 ? !0 : !1
    };
    b.prototype.kiemTraHuongDi = function(a, b) {
        return this.moveFindDirectLeft(this.listOQuan[a].quality, a, b)
    };
    b.prototype.moveFindDirectLeft = function(a, b, d) {
        for (var e = 0, f = "", h = 0, h = 0, g = !1, h = this.listOQuan[b].qualityToFindDirect = 0; h < this.NUM_O_QUAN; h++) this.listOQuan[h].qualityToFindDirect = this.listOQuan[h].quality;
        if (d == "right")
            for (; !f == "stop";) a--, a < 0 ? b != 10 && b != 4 ? (h = b + 1 > this.NUM_O_QUAN - 1 ? 0 : b + 1, this.listOQuan[h].qualityToFindDirect > 0 ? (g ? f = "stop" : g ? f = "stop" : (f = "go", a = this.listOQuan[h].qualityToFindDirect,
                this.listOQuan[h].qualityToFindDirect = 0, b = h), g = !1) : (h = b + 2 > this.NUM_O_QUAN - 1 ? 1 : b + 2, this.listOQuan[h].qualityToFindDirect <= 0 ? (f = "stop", g = !1) : (f = "eat", b = h, g = !0, e += this.listOQuan[h].qualityToFindDirect))) : (f = "stop", g = !1) : (b++, b > this.NUM_O_QUAN - 1 && (b = 0), this.listOQuan[b].qualityToFindDirect += 1);
        else if (d == "left")
            for (; !f == "stop";) a--, a < 0 ? b != 0 && b != 6 ? (h = b - 1, this.listOQuan[h].qualityToFindDirect > 0 ? (g ? f = "stop" : (f = "go", a = this.listOQuan[h].qualityToFindDirect, this.listOQuan[h].qualityToFindDirect = 0, b = h), g = !1) :
                (h = b - 2 < 0 ? this.NUM_O_QUAN - 1 : b - 2, this.listOQuan[h].qualityToFindDirect <= 0 ? (f = "stop", g = !1) : (f = "eat", b = h, g = !0, e += this.listOQuan[h].qualityToFindDirect))) : (f = "stop", g = !1) : (b--, b < 0 && (b = this.NUM_O_QUAN - 1), this.listOQuan[b].qualityToFindDirect += 1);
        return e
    };
    b.prototype.touchDown = function(a, b, d) {
        if (a < 0) a == casual.IDTouch.IN_MENU ? this.showIGM() : this.choosePoint != null && this.flagOK && (b < this.choosePoint.x + 10 && b > this.choosePoint.x + 10 - 50 && d > this.choosePoint.y && d < this.choosePoint.y + 90 ? this.processKeyLeft() : b > this.choosePoint.x +
            60 && b < this.choosePoint.x + 60 + 50 && d > this.choosePoint.y && d < this.choosePoint.y + 90 && this.processKeyRight());
        else if (!this.chooseOQuanRight && !this.chooseOQuanLeft && !this.flagMoveQuanLeft && !this.flagMoveQuanRight && !this.flagEatQuan && this.flagMeGo && !this.flagRaiSoi && !this.isGameDraw && !this.isGameOver && !this.isGameWin) this.flagOK ? a == this.indexOQuan ? (this.processKeyFire(), this.choosePoint = null) : this.choosePoint != null && (b < this.choosePoint.x + 10 && b > this.choosePoint.x + 10 - 50 && d > this.choosePoint.y && d < this.choosePoint.y +
            90 ? this.processKeyLeft() : b > this.choosePoint.x + 60 && b < this.choosePoint.x + 60 + 50 && d > this.choosePoint.y && d < this.choosePoint.y + 90 && this.processKeyRight()) : a != this.indexOQuan ? this.indexOQuan = a : (this.processKeyFire(), this.choosePoint = casual.Touch.getTouchLocationByID(a))
    };
    b.prototype.showIGM = function() {
        casual.game.sound[casual.IDSound.BKG_MAIN].stop();
        this._pause = !0;
        casual.State.preInit = function() {};
        this.changeSubState(casual.State.INBODY_MENU)
    };
    b.prototype.paintPassLevel = function(a) {
        if (this.imgPassLevel !=
            null && (a.drawImage(this.imgPassLevel, this.width >> 1, this.y + this.iStepPass, casual.JGraphics.HCENTER | casual.JGraphics.VCENTER), this.iStepPass += this.vxOfPass, this.vxOfPass += 3, this.iStepPass >= this.height >> 1 && (this.iStepPass = this.height >> 1, this.timeOfPass++, this.timeOfPass > 6))) this.timePassLevel = 0
    };
    b.prototype.processKeyLeft = function() {
        if (!this.chooseOQuanLeft && !this.flagMoveQuanLeft && !this.flagMoveQuanRight && !this.flagEatQuan && this.flagMeGo && !this.flagRaiSoi && !this.isGameDraw && !this.isGameOver && !this.isGameWin)
            if (this.flagOK) this.chooseOQuanLeft = !0, this.flagOK = !1;
            else if (this.indexOQuan <= 5 || this.indexOQuan >= 11) this.indexOQuan = 10;
        else if (this.indexOQuan++, this.indexOQuan > this.NUM_O_QUAN - 2) this.indexOQuan = 6
    };
    b.prototype.processKeyRight = function() {
        if (!this.chooseOQuanRight && !this.flagMoveQuanLeft && !this.flagMoveQuanRight && !this.flagEatQuan && this.flagMeGo && !this.flagRaiSoi && !this.isGameDraw && !this.isGameOver && !this.isGameWin)
            if (this.flagOK) this.chooseOQuanRight = !0, this.flagOK = !1;
            else if (this.indexOQuan <= 5 || this.indexOQuan >= 11) this.indexOQuan =
            6;
        else if (this.indexOQuan--, this.indexOQuan < 6) this.indexOQuan = this.NUM_O_QUAN - 2
    };
    b.prototype.processKeyFire = function() {
        if (!this.flagMoveTheSecond && !this.flagOK && !this.chooseOQuanRight && !this.chooseOQuanLeft && this.listOQuan[this.indexOQuan].quality > 0 && this.indexOQuan >= 6 && this.indexOQuan <= 10 && this.flagMeGo && !this.flagRaiSoi && !this.isGameDraw && !this.isGameOver && !this.isGameWin) this.flagOK = !0, this.index_Direct_Comp = 0, this.listDirectComp = Array(this.NUMBER_DIRECT_COMP);
        else if (!this.flagMoveTheSecond &&
            this.flagOK && !this.chooseOQuanRight && !this.chooseOQuanLeft && this.listOQuan[this.indexOQuan].quality > 0 && this.indexOQuan >= 6 && this.indexOQuan <= 10 && this.flagMeGo && !this.flagRaiSoi && !this.isGameDraw && !this.isGameOver && !this.isGameWin) this.flagOK = !1, this.index_Direct_Comp = 0, this.listDirectComp = Array(this.NUMBER_DIRECT_COMP)
    };
    b.prototype.onkeyDown = function(a) {
        switch (a) {
            case casual.KEY.LEFT:
                this.processKeyLeft();
                break;
            case casual.KEY.RIGHT:
                this.processKeyRight();
                break;
            case casual.KEY.FIRE:
                this.processKeyFire()
        }
    };
    b.prototype.IncreaseLevelGame = function() {
        this.level++;
        this.level > this.MAX_LEVEL ? (this.isFinishGame = !0, this.timeEndGame = 40) : this.initChangeLevel()
    };
    b.prototype.initChangeLevel = function() {
        this.isGameWin = this.isGameOver = this.isFinishGame = !1;
        this.timeTick = 0;
        this.isPassLevel = !1;
        this.chageGameLevel();
        this.registerTouch()
    };
    b.prototype.initPassLevel = function() {
        this.iStepPass = 0;
        this.vxOfPass = 3;
        this.timeOfPass = 0;
        if (this.imgPassLevel == null) this.imgPassLevel = this.getImage("passLevel")
    }
})();
(function() {
    window.onload = function() {
        b.init()
    };
    var b = {
        res: [{
            id: "imglogo",
            size: 1,
            src: "img/logo.png"
        }, {
            id: "menu",
            size: 1,
            src: "img/menu.jpg"
        }, {
            id: "on",
            size: 1,
            src: "img/on.png"
        }, {
            id: "off",
            size: 1,
            src: "img/off.png"
        }, {
            id: "choose_focus",
            size: 1,
            src: "img/choose_focus.png"
        }, {
            id: "choose_mode",
            size: 1,
            src: "img/choose_mode.png"
        }, {
            id: "menu/m_0.png",
            size: 1,
            src: "img/menu/m_0.png"
        }, {
            id: "menu/m_1.png",
            size: 1,
            src: "img/menu/m_1.png"
        }, {
            id: "menu/m_2.png",
            size: 1,
            src: "img/menu/m_2.png"
        }, {
            id: "menu/m_3.png",
            size: 1,
            src: "img/menu/m_3.png"
        }, {
            id: "menu/m_4.png",
            size: 1,
            src: "img/menu/m_4.png"
        }, {
            id: "menu/m_5.png",
            size: 1,
            src: "img/menu/m_5.png"
        }, {
            id: "menu/m_6.png",
            size: 1,
            src: "img/menu/m_6.png"
        }, {
            id: "menu/m_7.png",
            size: 1,
            src: "img/menu/m_7.png"
        }, {
            id: "menu/m_8.png",
            size: 1,
            src: "img/menu/m_8.png"
        }, {
            id: "close.png",
            size: 1,
            src: "img/close.png"
        }, {
            id: "menu/menu_focus.png",
            size: 1,
            src: "img/menu/menu_focus.png"
        }, {
            id: "bg_choice_lv.jpg",
            size: 1,
            src: "img/bg_choice_lv.jpg"
        }, {
            id: "ava0.jpg",
            size: 1,
            src: "img/ava0.jpg"
        }, {
            id: "ava1.jpg",
            size: 1,
            src: "img/ava1.jpg"
        }, {
            id: "ava2.jpg",
            size: 1,
            src: "img/ava2.jpg"
        }, {
            id: "ava3.jpg",
            size: 1,
            src: "img/ava3.jpg"
        }, {
            id: "ava4.jpg",
            size: 1,
            src: "img/ava4.jpg"
        }, {
            id: "ava5.jpg",
            size: 1,
            src: "img/ava5.jpg"
        }, {
            id: "ava6.jpg",
            size: 1,
            src: "img/ava6.jpg"
        }, {
            id: "l0.png",
            size: 1,
            src: "img/l0.png"
        }, {
            id: "l1.png",
            size: 1,
            src: "img/l1.png"
        }, {
            id: "l2.png",
            size: 1,
            src: "img/l2.png"
        }, {
            id: "l3.png",
            size: 1,
            src: "img/l3.png"
        }, {
            id: "l4.png",
            size: 1,
            src: "img/l4.png"
        }, {
            id: "l5.png",
            size: 1,
            src: "img/l5.png"
        }, {
            id: "h0.png",
            size: 1,
            src: "img/h0.png"
        }, {
            id: "h1.png",
            size: 1,
            src: "img/h1.png"
        }, {
            id: "h2.png",
            size: 1,
            src: "img/h2.png"
        }, {
            id: "h3.png",
            size: 1,
            src: "img/h3.png"
        }, {
            id: "o0.png",
            size: 1,
            src: "img/o0.png"
        }, {
            id: "o1.png",
            size: 1,
            src: "img/o1.png"
        }, {
            id: "o2.png",
            size: 1,
            src: "img/o2.png"
        }, {
            id: "o3.png",
            size: 1,
            src: "img/o3.png"
        }, {
            id: "o4.png",
            size: 1,
            src: "img/o4.png"
        }, {
            id: "o5.png",
            size: 1,
            src: "img/o5.png"
        }, {
            id: "o6.png",
            size: 1,
            src: "img/o6.png"
        }, {
            id: "hu0.png",
            size: 1,
            src: "img/hu0.png"
        }, {
            id: "hu1.png",
            size: 1,
            src: "img/hu1.png"
        }, {
            id: "oquanBig0.png",
            size: 1,
            src: "img/oquanBig0.png"
        }, {
            id: "oquanBig1.png",
            size: 1,
            src: "img/oquanBig1.png"
        }, {
            id: "oquanMix1.png",
            size: 1,
            src: "img/oquanMix1.png"
        }, {
            id: "oquanMix2.png",
            size: 1,
            src: "img/oquanMix2.png"
        }, {
            id: "focusLevel.png",
            size: 1,
            src: "img/focusLevel.png"
        }, {
            id: "focusOquan.png",
            size: 1,
            src: "img/focusOquan.png"
        }, {
            id: "leftRight.png",
            size: 1,
            src: "img/leftRight.png"
        }, {
            id: "raisoi.png",
            size: 1,
            src: "img/raisoi.png"
        }, {
            id: "help",
            size: 1,
            src: "img/help.jpg"
        }, {
            id: "bg_highscore",
            size: 1,
            src: "img/bg_highscore.jpg"
        }, {
            id: "back",
            size: 1,
            src: "img/back.png"
        }, {
            id: "so.png",
            size: 1,
            src: "img/so.png"
        }, {
            id: "gamebg.jpg",
            size: 1,
            src: "img/gamebg.jpg"
        }, {
            id: "in",
            size: 1,
            src: "img/in.png"
        }, {
            id: "inPause",
            size: 1,
            src: "img/inPause.png"
        }, {
            id: "focusWL1",
            size: 1,
            src: "img/focusWL1.png"
        }, {
            id: "focusWL2",
            size: 1,
            src: "img/focusWL2.png"
        }, {
            id: "focusWL3",
            size: 1,
            src: "img/focusWL3.png"
        }, {
            id: "cap",
            size: 1,
            src: "img/cap.png"
        }, {
            id: "score",
            size: 1,
            src: "img/score.png"
        }, {
            id: "passLevel",
            size: 1,
            src: "img/passLevel.png"
        }, {
            id: "lose",
            size: 1,
            src: "img/lose.png"
        }, {
            id: "win",
            size: 1,
            src: "img/win.png"
        }, {
            id: "draw",
            size: 1,
            src: "img/draw.png"
        }, {
            id: "over",
            size: 1,
            src: "img/over.png"
        }, {
            id: "save",
            size: 1,
            src: "img/save.png"
        }, {
            id: "turn",
            size: 1,
            src: "img/turn.png"
        }, {
            id: "tab",
            size: 1,
            src: "img/tab.png"
        }],
        container: null,
        width: 0,
        height: 0,
        frames: 0,
        fps: 20,
        timer: null,
        eventTarget: null,
        gameContainer: null,
        ultilContainer: null,
        currSlide: null,
        isFrozen: !1,
        cacheSprite: [],
        soundEnable: !1,
        sound: null,
        level: 1,
        MAX_LEVEL: 9,
        score: 0,
        ONLINE_LINK: "jssocket.htm?game=oanquan"
    };
    casual.game = b;
    b.init = function() {
        casual.detectBrowser();
        var a = casual.getDOM("container"),
            c = document.createElement("div");
        c.style.position =
            "relative";
        c.style.width = a.clientWidth + "px";
        c.style.left = "0px";
        c.style.top = (a.clientHeight >> 1) + "px";
        c.style.textAlign = "center";
        c.style.color = "#fff";
        c.style.font = "bold 16px";
        c.style.textShadow = "0 2px 2px #ccc";
        a.appendChild(c);
        this.loader = c;
        b.hideNavBar();
        if (casual.supportOrientation) window.onorientationchange = function() {
            b.hideNavBar()
        };
        a = new casual.ImageLoader;
        a.addEventListener("loaded", casual.delegate(this.onLoadLoaded, this));
        a.addEventListener("complete", casual.delegate(this.onLoadComplete, this));
        a.load(this.res)
    };
    b.hideNavBar = function() {
        window.scrollTo(0, 1)
    };
    b.onLoadLoaded = function(a) {
        this.loader.innerHTML = "\u0110ang Load H\u00ecnh...<br>";
        a = Math.round(a.target.getLoadedSize() / a.target.getTotalSize() * 100);
        this.loader.innerHTML += '<progress value="' + a + '" max="100"></progress><br>';
        this.loader.innerHTML += "(" + a + "%)"
    };
    b.onLoadComplete = function(a) {
        a.target.removeAllEventListeners();
        document.getElementById("container").removeChild(this.loader);
        this.loader = null;
        this.images = a.images;
        this.startup()
    };
    b.showFPS = function() {
        var a = this,
            b = casual.getDOM("fps");
        setInterval(function() {
            b.innerHTML = "FPS:" + a.frames + " <<Debug>> " + a.debugText;
            a.frames = 0
        }, 1E3)
    };
    b.getImage = function(a) {
        return this.images[a].image
    };
    b.startup = function() {
        jQuery.support.cors = !0;
        this.container = casual.getDOM("container");
        var a = $(window).width(),
            c = $(window).height();
        if (a >= 640 && c >= 526)
            if (casual.isMobile)
                if (a > c) {
                    if (this.scrWidth = 640 * c / 526, this.scrHeight = c, this.scrWidth > a) this.scrWidth = a, this.scrHeight = 526 * a / 640
                } else {
                    if (this.scrWidth =
                        a, this.scrHeight = 526 * a / 640, this.scrHeight > c) this.scrWidth = 640 * c / 526, this.scrHeight = c
                } else this.scrWidth = 640, this.scrHeight = 526;
        else if (a > c) {
            if (this.scrWidth = 640 * c / 526, this.scrHeight = c, this.scrWidth > a) this.scrWidth = a, this.scrHeight = 526 * a / 640
        } else if (this.scrWidth = a, this.scrHeight = 526 * a / 640, this.scrHeight > c) this.scrWidth = 640 * c / 526, this.scrHeight = c;
        this.scrWidth = 640;
        this.scrHeight = 526;
        this.width = 640;
        this.height = 526;
        this.container.style.width = this.scrWidth + "px";
        this.container.style.height = this.scrHeight +
            "px";
        a = casual.createDOM("canvas", {
            id: "canvas",
            width: this.scrWidth,
            height: this.scrHeight,
            style: {
                position: "absolute"
            }
        });
        this.container.appendChild(a);
        this.context = a.getContext("2d");
        this.canvas = a;
        a.setAttribute("tabindex", "1");
        a.focus();
        this.stage = new Stage(this.context);
        this.stage.setFrameRate(this.fps);
        casual.Static.init();
        this.gameContainer = new DisplayObjectContainer;
        this.ultilContainer = new DisplayObjectContainer;
        this.stage.addChild(this.gameContainer);
        this.stage.addChild(this.ultilContainer);
        this.stage.addEventListener(StageEvent.ENTER_FRAME,
            casual.delegate(this.enterFrameHandler, this));
        this.stage.addEventListener(StageEvent.MOUSE_DOWN, casual.delegate(this.touchDown, this));
        this.stage.addEventListener(StageEvent.MOUSE_MOVE, casual.delegate(this.touchDrag, this));
        this.stage.addEventListener(StageEvent.MOUSE_UP, casual.delegate(this.touchUp, this));
        a.focus();
        a.addEventListener("keyup", casual.delegate(this.keyUp, this));
        a.addEventListener("keydown", casual.delegate(this.keyDown, this));
        this.sound = Array(casual.IDSound.COUNT);
        for (a = 0; a < this.sound.length; a++) this.sound[a] =
            new Audio(casual.IDSound.stSoundPath + casual.IDSound.soundURLs[a], !1, !1);
        b.showSplashScreen()
    };
    b.playSound = function(a, b) {
        var d;
        this.soundEnable && this.sound[a].play(b || !1)
    };
    b.stopSound = function(a) {
        this.sound[a].stop()
    };
    b.keyDown = function(a) {
        if (a.keyCode == 37)
            if (casual.KEY.pressKey(casual.KEY.LEFT), this.currSlide.subSlide != null) this.currSlide.subSlide.onkeyDown(casual.KEY.LEFT);
            else this.currSlide.onkeyDown(casual.KEY.LEFT);
        else if (a.keyCode == 38)
            if (casual.KEY.pressKey(casual.KEY.UP), this.currSlide.subSlide !=
                null) this.currSlide.subSlide.onkeyDown(casual.KEY.UP);
            else this.currSlide.onkeyDown(casual.KEY.UP);
        else if (a.keyCode == 39)
            if (casual.KEY.pressKey(casual.KEY.RIGHT), this.currSlide.subSlide != null) this.currSlide.subSlide.onkeyDown(casual.KEY.RIGHT);
            else this.currSlide.onkeyDown(casual.KEY.RIGHT);
        else if (a.keyCode == 40)
            if (casual.KEY.pressKey(casual.KEY.DOWN), this.currSlide.subSlide != null) this.currSlide.subSlide.onkeyDown(casual.KEY.DOWN);
            else this.currSlide.onkeyDown(casual.KEY.DOWN);
        else if (a.keyCode ==
            32 || a.keyCode == 13)
            if (casual.KEY.pressKey(casual.KEY.FIRE), this.currSlide.subSlide != null) this.currSlide.subSlide.onkeyDown(casual.KEY.FIRE);
            else this.currSlide.onkeyDown(casual.KEY.FIRE);
        a.preventDefault();
        a.stopPropagation()
    };
    b.keyUp = function(a) {
        a.keyCode == 37 ? casual.KEY.resetKey(casual.KEY.LEFT) : a.keyCode == 38 ? casual.KEY.resetKey(casual.KEY.UP) : a.keyCode == 39 ? casual.KEY.resetKey(casual.KEY.RIGHT) : a.keyCode == 40 ? casual.KEY.resetKey(casual.KEY.DOWN) : (a.keyCode == 32 || a.keyCode == 13) && casual.KEY.resetKey(casual.KEY.FIRE);
        a.preventDefault();
        a.stopPropagation()
    };
    b.touchDown = function(a) {
        var c = casual.Touch,
            d = a.mouseX,
            a = a.mouseY;
        c.isPressed = !0;
        b.IDlinkSlide = this.currSlide.id;
        b.ltimeStart = (new Date).getTime();
        c.x = c.xDown = d;
        c.y = c.yDown = a;
        c.IDdown = c.click(d, a);
        this.currSlide.subSlide != null ? this.currSlide.subSlide.touchDown(c.IDdown, d, a) : this.currSlide.touchDown(c.IDdown, d, a)
    };
    b.touchDrag = function(a) {
        var b = casual.Touch,
            d = a.mouseX,
            a = a.mouseY;
        this.canvas.style.cursor = casual.Touch.checkTouch(d, a) ? "pointer" : "";
        if (this.IDlinkSlide ==
            this.currSlide.id) b.x = d, b.y = a, this.currSlide.subSlide != null ? this.currSlide.subSlide.touchDrag(d, a) : this.currSlide.touchDrag(d, a)
    };
    b.touchUp = function(a) {
        var b = casual.Touch,
            d = a.mouseX,
            a = a.mouseY;
        b.isPressed = !1;
        b.x = b.xUp = d;
        b.y = b.yUp = a;
        if (this.IDlinkSlide == this.currSlide.id) {
            b.IDcurr = b.click(d, a);
            var e = d - b.xDown;
            e < 0 && (e = -e);
            var f = a - b.yDown;
            f < 0 && (f = -f);
            b.holdTime = (new Date).getTime() - this.ltimeStart;
            if (b.IDcurr == b.IDdown && (b.IDcurr != b.NOTHING || b.IDcurr == b.NOTHING && e <= 1 && f <= 1)) this.currSlide.Click(b.IDcurr,
                d, a), this.currSlide.subSlide != null && this.currSlide.subSlide.Click(b.IDcurr, d, a), b.IDprev = b.IDcurr;
            else if (e > 1 || f > 1) this.currSlide.touchUp(b.IDcurr, d, a, b.holdTime, b.xDown, b.yDown), this.currSlide.subSlide != null && this.currSlide.subSlide.touchUp(b.IDcurr, d, a, b.holdTime, b.xDown, b.yDown);
            this.currSlide.touchUp(b.IDcurr, d, a);
            this.currSlide.subSlide != null && this.currSlide.subSlide.touchUp(b.IDcurr, d, a, b.holdTime, b.xDown, b.yDown)
        }
    };
    b.showSplashScreen = function() {
        b.setState(casual.State.THE_FISRT_SCREEN_PAGE_OF_APP)
    };
    b.Loading = function(a, b) {
        this.currSlide = casual.State.Loading(a, b)
    };
    b.setState = function(a, c) {
        this.isFrozen = !0;
        this.currSlide != null && this.currSlide.destroy();
        b.gameContainer.removeAllChildren();
        this.currSlide = null;
        casual.delegate(b.Loading(a, c));
        if (this.currSlide != null) this.currSlide.id = a, casual.Touch.releaseTouchArea(), casual.KEY.resetKeys(), this.currSlide.registerTouch(), this.isFrozen = !1
    };
    b.showMainMenu = function() {
        this.state = STATE.MAIN
    };
    b.enterFrameHandler = function() {
        this.frames++;
        !this.isFrozen &&
            this.currSlide != null && (this.currSlide.update(), this.currSlide.subSlide != null && this.currSlide.subSlide.update())
    }
})();