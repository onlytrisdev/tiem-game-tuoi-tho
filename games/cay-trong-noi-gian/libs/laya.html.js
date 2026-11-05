! function(window, document, Laya) {
    Laya.un, Laya.uns;
    var __static = Laya.static,
        __class = Laya.class,
        __getset = Laya.getset,
        Browser = (Laya.__newvec, laya.utils.Browser),
        ClassUtils = laya.utils.ClassUtils,
        HTMLChar = (laya.resource.Context, laya.events.Event, laya.display.Graphics, laya.utils.HTMLChar),
        Handler = laya.utils.Handler,
        Loader = laya.net.Loader,
        Pool = laya.utils.Pool,
        Rectangle = laya.maths.Rectangle,
        Sprite = laya.display.Sprite,
        Text = laya.display.Text,
        Texture = laya.resource.Texture,
        URL = laya.net.URL,
        Utils = laya.utils.Utils;
    Laya.interface("laya.html.utils.ILayout");
    var HTMLHitRect = function() {
            function HTMLHitRect() {
                this.rec = new Rectangle, this.reset()
            }
            __class(HTMLHitRect, "laya.html.dom.HTMLHitRect");
            var __proto = HTMLHitRect.prototype;
            return __proto.reset = function() {
                return this.rec.reset(), this.href = null, this
            }, __proto.recover = function() {
                Pool.recover("HTMLHitRect", this.reset())
            }, HTMLHitRect.create = function() {
                return Pool.getItemByClass("HTMLHitRect", HTMLHitRect)
            }, HTMLHitRect
        }(),
        LayoutLine = function() {
            function LayoutLine() {
                this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.wordStartIndex = 0, this.minTextHeight = 99999, this.mWidth = 0, this.elements = new Array
            }
            return __class(LayoutLine, "laya.html.utils.LayoutLine"), LayoutLine.prototype.updatePos = function(left, width, lineNum, dy, align, valign, lineHeight) {
                var one, w = 0;
                this.elements.length > 0 && (w = (one = this.elements[this.elements.length - 1]).x + one.width - this.elements[0].x), lineHeight = lineHeight || this.h;
                var dx = 0,
                    ddy = NaN;
                "center" === align && (dx = (width - w) / 2), "right" === align && (dx = width - w);
                for (var i = 0, n = this.elements.length; i < n; i++) {
                    var tCSSStyle = (one = this.elements[i])._getCSSStyle();
                    switch (0 !== dx && (one.x += dx), tCSSStyle.valign) {
                        case "top":
                            one.y = dy;
                            break;
                        case "middle":
                            var tMinTextHeight = 0;
                            99999 != this.minTextHeight && (tMinTextHeight = this.minTextHeight);
                            var tBottomLineY = (tMinTextHeight + lineHeight) / 2;
                            tBottomLineY = Math.max(tBottomLineY, this.h), ddy = (laya.html.dom.HTMLImageElement, dy + tBottomLineY - one.height), one.y = ddy;
                            break;
                        case "bottom":
                            one.y = dy + (lineHeight - one.height)
                    }
                }
            }, LayoutLine
        }(),
        HTMLDocument = function() {
            function HTMLDocument() {
                this.all = new Array, this.styleSheets = HTMLStyle.styleSheets
            }
            __class(HTMLDocument, "laya.html.dom.HTMLDocument");
            var __proto = HTMLDocument.prototype;
            return __proto.getElementById = function(id) {
                return this.all[id]
            }, __proto.setElementById = function(id, e) {
                this.all[id] = e
            }, __static(HTMLDocument, ["document", function() {
                return this.document = new HTMLDocument
            }]), HTMLDocument
        }(),
        Layout = function() {
            function Layout() {}
            return __class(Layout, "laya.html.utils.Layout"), Layout.later = function(element) {
                null == Layout._will && (Layout._will = [], Laya.stage.frameLoop(1, null, function() {
                    if (!(Layout._will.length < 1)) {
                        for (var i = 0; i < Layout._will.length; i++) laya.html.utils.Layout.layout(Layout._will[i]);
                        Layout._will.length = 0
                    }
                })), Layout._will.push(element)
            }, Layout.layout = function(element) {
                return element && element._style ? 0 == (512 & element._style._type) ? null : (element.style._type &= -513, Layout._multiLineLayout(element)) : null
            }, Layout._multiLineLayout = function(element) {
                var elements = new Array;
                element._addChildsToLayout(elements);
                var oneLayout, curStyle, curPadding, htmlWord, sprite, i = 0,
                    n = elements.length,
                    style = element._getCSSStyle(),
                    letterSpacing = style.letterSpacing,
                    leading = style.leading,
                    lineHeight = style.lineHeight,
                    widthAuto = style._widthAuto() || !style.wordWrap,
                    width = widthAuto ? 999999 : element.width,
                    maxWidth = (element.height, 0),
                    exWidth = style.italic ? style.fontSize / 3 : 0,
                    align = style.align,
                    valign = style.valign,
                    endAdjust = "top" !== valign || "left" !== align || 0 != lineHeight,
                    x = 0,
                    y = 0,
                    w = 0,
                    h = 0,
                    lines = new Array,
                    curLine = lines[0] = new LayoutLine,
                    newLine = !1,
                    nextNewline = !1;
                curLine.h = 0, style.italic && (width -= style.fontSize / 3);
                var tWordWidth = 0,
                    tLineFirstKey = !0;

                function addLine() {
                    curLine.y = y, y += curLine.h + leading, curLine.mWidth = tWordWidth, tWordWidth = 0, curLine = new LayoutLine, lines.push(curLine), curLine.h = 0, x = 0, tLineFirstKey = !0, newLine = !1
                }
                for (i = 0; i < n; i++)
                    if (null != (oneLayout = elements[i]))
                        if (tLineFirstKey = !1, oneLayout instanceof laya.html.dom.HTMLBrElement) addLine(), curLine.y = y, curLine.h = lineHeight;
                        else {
                            if (oneLayout._isChar()) {
                                if ((htmlWord = oneLayout).isWord) newLine = nextNewline || "\n" === htmlWord.char, curLine.wordStartIndex = curLine.elements.length;
                                else {
                                    if (lines.length > 0 && x + w > width && curLine.wordStartIndex > 0) {
                                        var tLineWord;
                                        tLineWord = curLine.elements.length - curLine.wordStartIndex + 1, curLine.elements.length = curLine.wordStartIndex, i -= tLineWord, addLine();
                                        continue
                                    }
                                    newLine = !1, tWordWidth += htmlWord.width
                                }
                                w = htmlWord.width + htmlWord.style.letterSpacing, h = htmlWord.height, nextNewline = !1, (newLine = newLine || x + w > width) && addLine(), curLine.minTextHeight = Math.min(curLine.minTextHeight, oneLayout.height)
                            } else curStyle = oneLayout._getCSSStyle(), sprite = oneLayout, curPadding = curStyle.padding, newLine = nextNewline || curStyle.getLineElement(), w = sprite.width + curPadding[1] + curPadding[3] + curStyle.letterSpacing, h = sprite.height + curPadding[0] + curPadding[2], nextNewline = curStyle.getLineElement(), (newLine = newLine || x + w > width && curStyle.wordWrap) && addLine();
                            curLine.elements.push(oneLayout), curLine.h = Math.max(curLine.h, h), oneLayout.x = x, oneLayout.y = y, x += w, curLine.w = x - letterSpacing, curLine.y = y, maxWidth = Math.max(x + exWidth, maxWidth)
                        }
                else tLineFirstKey || (x += Layout.DIV_ELEMENT_PADDING), curLine.wordStartIndex = curLine.elements.length;
                if (y = curLine.y + curLine.h, endAdjust) {
                    var tY = 0,
                        tWidth = width;
                    for (widthAuto && element.width > 0 && (tWidth = element.width), i = 0, n = lines.length; i < n; i++) lines[i].updatePos(0, tWidth, i, tY, align, valign, lineHeight), tY += Math.max(lineHeight, lines[i].h + leading);
                    y = tY
                }
                return widthAuto && (element.width = maxWidth), y > element.height && (element.height = y), [maxWidth, y]
            }, Layout.DIV_ELEMENT_PADDING = 0, Layout._will = null, Layout
        }(),
        HTMLStyle = (function() {
            function HTMLBrElement() {}
            __class(HTMLBrElement, "laya.html.dom.HTMLBrElement");
            var __proto = HTMLBrElement.prototype;
            __proto._addToLayout = function(out) {
                out.push(this)
            }, __proto.reset = function() {
                return this
            }, __proto.destroy = function() {
                Pool.recover(HTMLElement.getClassName(this), this.reset())
            }, __proto._setParent = function(value) {}, __proto._getCSSStyle = function() {
                return HTMLBrElement.brStyle || (HTMLBrElement.brStyle = new HTMLStyle, HTMLBrElement.brStyle.setLineElement(!0), HTMLBrElement.brStyle.block = !0), HTMLBrElement.brStyle
            }, __proto.renderSelfToGraphic = function(graphic, gX, gY, recList) {}, __getset(0, __proto, "URI", null, function(value) {}), __getset(0, __proto, "parent", null, function(value) {}), __getset(0, __proto, "href", null, function(value) {}), HTMLBrElement.brStyle = null
        }(), function() {
            function HTMLStyle() {
                this.padding = HTMLStyle._PADDING, this.reset()
            }
            __class(HTMLStyle, "laya.html.utils.HTMLStyle");
            var __proto = HTMLStyle.prototype;
            return __proto._getExtendStyle = function() {
                return this._extendStyle === HTMLExtendStyle.EMPTY && (this._extendStyle = HTMLExtendStyle.create()), this._extendStyle
            }, __proto.reset = function() {
                return this.ower = null, this._type = 0, this.wordWrap = !0, this.fontSize = Text.defaultFontSize, this.family = Text.defaultFont, this.color = "#000000", this.valign = "top", this.padding = HTMLStyle._PADDING, this.bold = !1, this.italic = !1, this.align = "left", this.textDecoration = null, this.bgColor = null, this.borderColor = null, this._extendStyle && this._extendStyle.recover(), this._extendStyle = HTMLExtendStyle.EMPTY, this
            }, __proto.recover = function() {
                Pool.recover("HTMLStyle", this.reset())
            }, __proto.inherit = function(src) {
                var len, props, key, i = 0;
                for (len = (props = HTMLStyle._inheritProps).length, i = 0; i < len; i++) this[key = props[i]] = src[key]
            }, __proto._widthAuto = function() {
                return 0 != (262144 & this._type)
            }, __proto.widthed = function(sprite) {
                return 0 != (8 & this._type)
            }, __proto._calculation = function(type, value) {
                return !1
            }, __proto.heighted = function(sprite) {
                return 0 != (8192 & this._type)
            }, __proto.size = function(w, h) {
                var ower = this.ower,
                    resize = !1; - 1 !== w && w != ower.width && (this._type |= 8, ower.width = w, resize = !0), -1 !== h && h != ower.height && (this._type |= 8192, ower.height = h, resize = !0), resize && ower._layoutLater()
            }, __proto.getLineElement = function() {
                return 0 != (65536 & this._type)
            }, __proto.setLineElement = function(value) {
                value ? this._type |= 65536 : this._type &= -65537
            }, __proto._enableLayout = function() {
                return 0 == (2 & this._type) && 0 == (4 & this._type)
            }, __proto.cssText = function(text) {
                this.attrs(HTMLStyle.parseOneCSS(text, ";"))
            }, __proto.attrs = function(attrs) {
                if (attrs)
                    for (var i = 0, n = attrs.length; i < n; i++) {
                        var attr = attrs[i];
                        this[attr[0]] = attr[1]
                    }
            }, __getset(0, __proto, "font", function() {
                return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (Browser.onIPhone && Text.fontFamilyMap[this.family] || this.family)
            }, function(value) {
                for (var strs = value.split(" "), i = 0, n = strs.length; i < n; i++) {
                    var str = strs[i];
                    switch (str) {
                        case "italic":
                            this.italic = !0;
                            continue;
                        case "bold":
                            this.bold = !0;
                            continue
                    }
                    str.indexOf("px") > 0 && (this.fontSize = parseInt(str), this.family = strs[i + 1], i++)
                }
            }), __getset(0, __proto, "href", function() {
                return this._extendStyle.href
            }, function(value) {
                value !== this._extendStyle.href && (this._getExtendStyle().href = value)
            }), __getset(0, __proto, "lineHeight", function() {
                return this._extendStyle.lineHeight
            }, function(value) {
                this._extendStyle.lineHeight !== value && (this._getExtendStyle().lineHeight = value)
            }), __getset(0, __proto, "strokeColor", function() {
                return this._extendStyle.strokeColor
            }, function(value) {
                this._extendStyle.strokeColor !== value && (this._getExtendStyle().strokeColor = value)
            }), __getset(0, __proto, "stroke", function() {
                return this._extendStyle.stroke
            }, function(value) {
                this._extendStyle.stroke !== value && (this._getExtendStyle().stroke = value)
            }), __getset(0, __proto, "leading", function() {
                return this._extendStyle.leading
            }, function(value) {
                this._extendStyle.leading !== value && (this._getExtendStyle().leading = value)
            }), __getset(0, __proto, "align", function() {
                var v = 48 & this._type;
                return HTMLStyle.align_Value[v]
            }, function(v) {
                v in HTMLStyle.alignVDic && (this._type &= -49, this._type |= HTMLStyle.alignVDic[v])
            }), __getset(0, __proto, "valign", function() {
                var v = 192 & this._type;
                return HTMLStyle.vAlign_Value[v]
            }, function(v) {
                v in HTMLStyle.alignVDic && (this._type &= -193, this._type |= HTMLStyle.alignVDic[v])
            }), __getset(0, __proto, "block", function() {
                return 0 != (1 & this._type)
            }, function(value) {
                value ? this._type |= 1 : this._type &= -2
            }), __getset(0, __proto, "wordWrap", function() {
                return 0 == (131072 & this._type)
            }, function(value) {
                value ? this._type &= -131073 : this._type |= 131072
            }), __getset(0, __proto, "bold", function() {
                return 0 != (1024 & this._type)
            }, function(value) {
                value ? this._type |= 1024 : this._type &= -1025
            }), __getset(0, __proto, "italic", function() {
                return 0 != (2048 & this._type)
            }, function(value) {
                value ? this._type |= 2048 : this._type &= -2049
            }), __getset(0, __proto, "whiteSpace", function() {
                return 131072 & this._type ? "nowrap" : ""
            }, function(type) {
                "nowrap" === type && (this._type |= 131072), "none" === type && (this._type &= -131073)
            }), __getset(0, __proto, "width", null, function(w) {
                if (this._type |= 8, "string" == typeof w) {
                    var offset = w.indexOf("auto");
                    if (offset >= 0 && (this._type |= 262144, w = w.substr(0, offset)), this._calculation("width", w)) return;
                    w = parseInt(w)
                }
                this.size(w, -1)
            }), __getset(0, __proto, "height", null, function(h) {
                if (this._type |= 8192, "string" == typeof h) {
                    if (this._calculation("height", h)) return;
                    h = parseInt(h)
                }
                this.size(-1, h)
            }), __getset(0, __proto, "letterSpacing", function() {
                return this._extendStyle.letterSpacing
            }, function(d) {
                "string" == typeof d && (d = parseInt(d + "")), d != this._extendStyle.letterSpacing && (this._getExtendStyle().letterSpacing = d)
            }), __getset(0, __proto, "position", function() {
                return 4 & this._type ? "absolute" : ""
            }, function(value) {
                "absolute" === value ? this._type |= 4 : this._type &= -5
            }), __getset(0, __proto, "absolute", function() {
                return 0 != (4 & this._type)
            }), __getset(0, __proto, "paddingLeft", function() {
                return this.padding[3]
            }), __getset(0, __proto, "paddingTop", function() {
                return this.padding[0]
            }), HTMLStyle.create = function() {
                return Pool.getItemByClass("HTMLStyle", HTMLStyle)
            }, HTMLStyle.parseOneCSS = function(text, clipWord) {
                for (var valueArray, out = [], attrs = text.split(clipWord), i = 0, n = attrs.length; i < n; i++) {
                    var attr = attrs[i],
                        ofs = attr.indexOf(":"),
                        name = attr.substr(0, ofs).replace(/^\s+|\s+$/g, "");
                    if (0 !== name.length) {
                        var value = attr.substr(ofs + 1).replace(/^\s+|\s+$/g, ""),
                            one = [name, value];
                        switch (name) {
                            case "italic":
                            case "bold":
                                one[1] = "true" == value;
                                break;
                            case "font-weight":
                                "bold" == value && (one[1] = !0, one[0] = "bold");
                                break;
                            case "line-height":
                                one[0] = "lineHeight", one[1] = parseInt(value);
                                break;
                            case "font-size":
                                one[0] = "fontSize", one[1] = parseInt(value);
                                break;
                            case "stroke":
                                one[0] = "stroke", one[1] = parseInt(value);
                                break;
                            case "padding":
                                (valueArray = value.split(" ")).length > 1 || (valueArray[1] = valueArray[2] = valueArray[3] = valueArray[0]), one[1] = [parseInt(valueArray[0]), parseInt(valueArray[1]), parseInt(valueArray[2]), parseInt(valueArray[3])];
                                break;
                            default:
                                (one[0] = HTMLStyle._CSSTOVALUE[name]) || (one[0] = name)
                        }
                        out.push(one)
                    }
                }
                return out
            }, HTMLStyle.parseCSS = function(text, uri) {
                for (var one; null != (one = HTMLStyle._parseCSSRegExp.exec(text));) HTMLStyle.styleSheets[one[1]] = HTMLStyle.parseOneCSS(one[2], ";")
            }, HTMLStyle._CSSTOVALUE = {
                "letter-spacing": "letterSpacing",
                "white-space": "whiteSpace",
                "line-height": "lineHeight",
                "font-family": "family",
                "vertical-align": "valign",
                "text-decoration": "textDecoration",
                "background-color": "bgColor",
                "border-color": "borderColor"
            }, HTMLStyle._parseCSSRegExp = new RegExp("([.#]\\w+)\\s*{([\\s\\S]*?)}", "g"), HTMLStyle.ALIGN_LEFT = "left", HTMLStyle.ALIGN_CENTER = "center", HTMLStyle.ALIGN_RIGHT = "right", HTMLStyle.VALIGN_TOP = "top", HTMLStyle.VALIGN_MIDDLE = "middle", HTMLStyle.VALIGN_BOTTOM = "bottom", HTMLStyle.styleSheets = {}, HTMLStyle.ADDLAYOUTED = 512, HTMLStyle._PADDING = [0, 0, 0, 0], HTMLStyle._HEIGHT_SET = 8192, HTMLStyle._LINE_ELEMENT = 65536, HTMLStyle._NOWARP = 131072, HTMLStyle._WIDTHAUTO = 262144, HTMLStyle._BOLD = 1024, HTMLStyle._ITALIC = 2048, HTMLStyle._CSS_BLOCK = 1, HTMLStyle._DISPLAY_NONE = 2, HTMLStyle._ABSOLUTE = 4, HTMLStyle._WIDTH_SET = 8, HTMLStyle._ALIGN = 48, HTMLStyle._VALIGN = 192, __static(HTMLStyle, ["_inheritProps", function() {
                return this._inheritProps = ["italic", "align", "valign", "leading", "stroke", "strokeColor", "bold", "fontSize", "lineHeight", "wordWrap", "color"]
            }, "alignVDic", function() {
                return this.alignVDic = {
                    left: 0,
                    center: 16,
                    right: 32,
                    top: 0,
                    middle: 64,
                    bottom: 128
                }
            }, "align_Value", function() {
                return this.align_Value = {
                    0: "left",
                    16: "center",
                    32: "right"
                }
            }, "vAlign_Value", function() {
                return this.vAlign_Value = {
                    0: "top",
                    64: "middle",
                    128: "bottom"
                }
            }]), HTMLStyle
        }()),
        HTMLExtendStyle = function() {
            function HTMLExtendStyle() {
                this.reset()
            }
            __class(HTMLExtendStyle, "laya.html.utils.HTMLExtendStyle");
            var __proto = HTMLExtendStyle.prototype;
            return __proto.reset = function() {
                return this.stroke = 0, this.strokeColor = "#000000", this.leading = 0, this.lineHeight = 0, this.letterSpacing = 0, this.href = null, this
            }, __proto.recover = function() {
                this != HTMLExtendStyle.EMPTY && Pool.recover("HTMLExtendStyle", this.reset())
            }, HTMLExtendStyle.create = function() {
                return Pool.getItemByClass("HTMLExtendStyle", HTMLExtendStyle)
            }, HTMLExtendStyle.EMPTY = new HTMLExtendStyle, HTMLExtendStyle
        }(),
        HTMLElement = function() {
            function HTMLElement() {
                this._creates(), this.reset()
            }
            __class(HTMLElement, "laya.html.dom.HTMLElement");
            var __proto = HTMLElement.prototype;
            return __proto._creates = function() {
                this._style = HTMLStyle.create()
            }, __proto.reset = function() {
                if (this.URI = null, this.parent = null, this._style.reset(), this._style.ower = this, this._style.valign = "middle", this._text && this._text.words) {
                    var len, tChar, words = this._text.words,
                        i = 0;
                    for (len = words.length, i = 0; i < len; i++)(tChar = words[i]) && tChar.recover()
                }
                return this._text = HTMLElement._EMPTYTEXT, this._children && (this._children.length = 0), this._x = this._y = this._width = this._height = 0, this
            }, __proto._getCSSStyle = function() {
                return this._style
            }, __proto._addChildsToLayout = function(out) {
                var words = this._getWords();
                if (null == words && (!this._children || 0 == this._children.length)) return !1;
                if (words)
                    for (var i = 0, n = words.length; i < n; i++) out.push(words[i]);
                return this._children && this._children.forEach(function(o, index, array) {
                    var _style = o._style;
                    _style._enableLayout && _style._enableLayout() && o._addToLayout(out)
                }), !0
            }, __proto._addToLayout = function(out) {
                if (this._style) {
                    var style = this._style;
                    style.absolute || (style.block ? out.push(this) : this._addChildsToLayout(out) && (this.x = this.y = 0))
                }
            }, __proto.repaint = function(recreate) {
                void 0 === recreate && (recreate = !1), this.parentRepaint(recreate)
            }, __proto.parentRepaint = function(recreate) {
                void 0 === recreate && (recreate = !1), this.parent && this.parent.repaint(recreate)
            }, __proto._setParent = function(value) {
                if (value instanceof laya.html.dom.HTMLElement) {
                    var p = value;
                    this.URI || (this.URI = p.URI), this.style && this.style.inherit(p.style)
                }
            }, __proto.appendChild = function(c) {
                return this.addChild(c)
            }, __proto.addChild = function(c) {
                return c.parent && c.parent.removeChild(c), this._children || (this._children = []), this._children.push(c), c.parent = this, c._setParent(this), this.repaint(), c
            }, __proto.removeChild = function(c) {
                if (!this._children) return null;
                var len, i = 0;
                for (len = this._children.length, i = 0; i < len; i++)
                    if (this._children[i] == c) return this._children.splice(i, 1), c;
                return null
            }, __proto.destroy = function() {
                this._children && (this.destroyChildren(), this._children.length = 0), Pool.recover(HTMLElement.getClassName(this), this.reset())
            }, __proto.destroyChildren = function() {
                if (this._children) {
                    for (var i = this._children.length - 1; i > -1; i--) this._children[i].destroy();
                    this._children.length = 0
                }
            }, __proto._getWords = function() {
                if (!this._text) return null;
                var txt = this._text.text;
                if (!txt || 0 === txt.length) return null;
                var size, words = this._text.words;
                if (words && words.length === txt.length) return words;
                null === words && (this._text.words = words = []), words.length = txt.length;
                for (var style = this.style, fontStr = style.font, i = 0, n = txt.length; i < n; i++) size = Utils.measureText(txt.charAt(i), fontStr), words[i] = HTMLChar.create().setData(txt.charAt(i), size.width, size.height || style.fontSize, style);
                return words
            }, __proto._isChar = function() {
                return !1
            }, __proto._layoutLater = function() {
                var style = this.style;
                512 & style._type || (style.widthed(this) && (this._children && this._children.length > 0 || null != this._getWords()) && style.block ? (Layout.later(this), style._type |= 512) : this.parent && this.parent._layoutLater())
            }, __proto._setAttributes = function(name, value) {
                switch (name) {
                    case "style":
                        this.style.cssText(value);
                        break;
                    case "class":
                        this.className = value;
                        break;
                    case "x":
                        this.x = parseFloat(value);
                        break;
                    case "y":
                        this.y = parseFloat(value);
                        break;
                    case "width":
                        this.width = parseFloat(value);
                        break;
                    case "height":
                        this.height = parseFloat(value);
                        break;
                    default:
                        this[name] = value
                }
            }, __proto.formatURL = function(url) {
                return this.URI ? HTMLElement.formatURL1(url, this.URI ? this.URI.path : null) : url
            }, __proto.drawToGraphic = function(graphic, gX, gY, recList) {
                gX += this.x, gY += this.y;
                var cssStyle = this.style;
                cssStyle.paddingLeft && (gX += cssStyle.paddingLeft), cssStyle.paddingTop && (gY += cssStyle.paddingTop), (null != cssStyle.bgColor || cssStyle.borderColor) && graphic.drawRect(gX, gY, this.width, this.height, cssStyle.bgColor, cssStyle.borderColor, 1), this.renderSelfToGraphic(graphic, gX, gY, recList);
                var tChild, i = 0,
                    len = 0;
                if (this._children && this._children.length > 0)
                    for (len = this._children.length, i = 0; i < len; i++) null != (tChild = this._children[i]).drawToGraphic && tChild.drawToGraphic(graphic, gX, gY, recList)
            }, __proto.renderSelfToGraphic = function(graphic, gX, gY, recList) {
                var cssStyle = this.style,
                    words = this._getWords();
                if (words && (words.length, cssStyle)) {
                    var font = cssStyle.font,
                        color = cssStyle.color;
                    if (cssStyle.stroke) {
                        var stroke = cssStyle.stroke;
                        stroke = parseInt(stroke);
                        var strokeColor = cssStyle.strokeColor;
                        graphic.fillBorderWords(words, gX, gY, font, color, strokeColor, stroke)
                    } else graphic.fillWords(words, gX, gY, font, color);
                    if (this.href) {
                        var lastWords = words[words.length - 1],
                            lineY = lastWords.y + lastWords.height;
                        if (lastWords.y == words[0].y) {
                            "none" != cssStyle.textDecoration && graphic.drawLine(words[0].x, lineY, lastWords.x + lastWords.width, lineY, color, 1);
                            var hitRec = HTMLHitRect.create();
                            hitRec.rec.setTo(words[0].x, lastWords.y, lastWords.x + lastWords.width - words[0].x, lastWords.height), hitRec.href = this.href, recList.push(hitRec)
                        } else this.workLines(words, graphic, recList)
                    }
                }
            }, __proto.workLines = function(wordList, g, recList) {
                var hasLine;
                hasLine = "none" != this.style.textDecoration;
                var len, tStartWord, tEndWord, i = 0;
                if (len = wordList.length, tEndWord = tStartWord = wordList[i], tStartWord) {
                    var tword;
                    for (i = 1; i < len; i++)(tword = wordList[i]).y != tStartWord.y ? (this.createOneLine(tStartWord, tEndWord, hasLine, g, recList), tStartWord = tword, tEndWord = tword) : tEndWord = tword;
                    this.createOneLine(tStartWord, tEndWord, hasLine, g, recList)
                }
            }, __proto.createOneLine = function(startWord, lastWords, hasLine, graphic, recList) {
                var lineY = lastWords.y + lastWords.height;
                hasLine && graphic.drawLine(startWord.x, lineY, lastWords.x + lastWords.width, lineY, this.color, 1);
                var hitRec = HTMLHitRect.create();
                hitRec.rec.setTo(startWord.x, lastWords.y, lastWords.x + lastWords.width - startWord.x, lastWords.height), hitRec.href = this.href, recList.push(hitRec)
            }, __getset(0, __proto, "href", function() {
                return this._style ? this._style.href : null
            }, function(url) {
                this._style && url != this._style.href && (this._style.href = url, this.repaint())
            }), __getset(0, __proto, "color", null, function(value) {
                this.style.color = value
            }), __getset(0, __proto, "id", null, function(value) {
                HTMLDocument.document.setElementById(value, this)
            }), __getset(0, __proto, "innerTEXT", function() {
                return this._text.text
            }, function(value) {
                this._text === HTMLElement._EMPTYTEXT ? this._text = {
                    text: value,
                    words: null
                } : (this._text.text = value, this._text.words && (this._text.words.length = 0)), this.repaint()
            }), __getset(0, __proto, "style", function() {
                return this._style
            }), __getset(0, __proto, "width", function() {
                return this._width
            }, function(value) {
                this._width !== value && (this._width = value, this.repaint())
            }), __getset(0, __proto, "x", function() {
                return this._x
            }, function(v) {
                this._x != v && (this._x = v, this.parentRepaint())
            }), __getset(0, __proto, "y", function() {
                return this._y
            }, function(v) {
                this._y != v && (this._y = v, this.parentRepaint())
            }), __getset(0, __proto, "height", function() {
                return this._height
            }, function(value) {
                this._height !== value && (this._height = value, this.repaint())
            }), __getset(0, __proto, "className", null, function(value) {
                this.style.attrs(HTMLDocument.document.styleSheets["." + value])
            }), HTMLElement.formatURL1 = function(url, basePath) {
                if (!url) return "null path";
                if (basePath || (basePath = URL.basePath), url.indexOf(":") > 0) return url;
                if (null != URL.customFormat && (url = URL.customFormat(url)), url.indexOf(":") > 0) return url;
                var char1 = url.charAt(0);
                if ("." === char1) return URL._formatRelativePath(basePath + url);
                if ("~" === char1) return URL.rootPath + url.substring(1);
                if ("d" === char1) {
                    if (0 === url.indexOf("data:image")) return url
                } else if ("/" === char1) return url;
                return basePath + url
            }, HTMLElement.getClassName = function(tar) {
                return "function" == typeof tar ? tar.name : tar.constructor.name
            }, HTMLElement._EMPTYTEXT = {
                text: null,
                words: null
            }, HTMLElement
        }(),
        HTMLParse = function() {
            function HTMLParse() {}
            return __class(HTMLParse, "laya.html.utils.HTMLParse"), HTMLParse.getInstance = function(type) {
                var rst = Pool.getItem(HTMLParse._htmlClassMapShort[type]);
                return rst || (rst = ClassUtils.getInstance(type)), rst
            }, HTMLParse.parse = function(ower, xmlString, url) {
                xmlString = (xmlString = "<root>" + (xmlString = xmlString.replace(/<br>/g, "<br/>")) + "</root>").replace(HTMLParse.spacePattern, HTMLParse.char255);
                var xml = Utils.parseXMLFromString(xmlString);
                HTMLParse._parseXML(ower, xml.childNodes[0].childNodes, url)
            }, HTMLParse._parseXML = function(parent, xml, url, href) {
                var i = 0,
                    n = 0;
                if (xml.join || xml.item)
                    for (i = 0, n = xml.length; i < n; ++i) HTMLParse._parseXML(parent, xml[i], url, href);
                else {
                    var node, nodeName, txt;
                    if (3 == xml.nodeType) return void(parent instanceof laya.html.dom.HTMLDivParser ? (null == xml.nodeName && (xml.nodeName = "#text"), nodeName = xml.nodeName.toLowerCase(), (txt = xml.textContent.replace(/^\s+|\s+$/g, "")).length > 0 && (node = HTMLParse.getInstance(nodeName)) && (parent.addChild(node), node.innerTEXT = txt.replace(HTMLParse.char255AndOneSpacePattern, " "))) : (txt = xml.textContent.replace(/^\s+|\s+$/g, "")).length > 0 && (parent.innerTEXT = txt.replace(HTMLParse.char255AndOneSpacePattern, " ")));
                    if ("#comment" == (nodeName = xml.nodeName.toLowerCase())) return;
                    if (node = HTMLParse.getInstance(nodeName)) {
                        "p" == nodeName ? (parent.addChild(HTMLParse.getInstance("br")), node = parent.addChild(node), parent.addChild(HTMLParse.getInstance("br"))) : node = parent.addChild(node), node.URI = url, node.href = href;
                        var attributes = xml.attributes;
                        if (attributes && attributes.length > 0)
                            for (i = 0, n = attributes.length; i < n; ++i) {
                                var attribute = attributes[i],
                                    attrName = attribute.nodeName,
                                    value = attribute.value;
                                node._setAttributes(attrName, value)
                            }
                        HTMLParse._parseXML(node, xml.childNodes, url, node.href)
                    } else HTMLParse._parseXML(parent, xml.childNodes, url, href)
                }
            }, HTMLParse.char255 = String.fromCharCode(255), HTMLParse.spacePattern = /&nbsp;|&#160;/g, HTMLParse.char255AndOneSpacePattern = new RegExp(String.fromCharCode(255) + "|(\\s+)", "g"), HTMLParse._htmlClassMapShort = {
                div: "HTMLDivParser",
                p: "HTMLElement",
                img: "HTMLImageElement",
                span: "HTMLElement",
                br: "HTMLBrElement",
                style: "HTMLStyleElement",
                font: "HTMLElement",
                a: "HTMLElement",
                "#text": "HTMLElement",
                link: "HTMLLinkElement"
            }, HTMLParse
        }(),
        HTMLDivParser = (function(_super) {
            function HTMLImageElement() {
                HTMLImageElement.__super.call(this)
            }
            __class(HTMLImageElement, "laya.html.dom.HTMLImageElement", _super);
            var __proto = HTMLImageElement.prototype;
            __proto.reset = function() {
                return _super.prototype.reset.call(this), this._tex && this._tex.off("loaded", this, this.onloaded), this._tex = null, this._url = null, this
            }, __proto.onloaded = function() {
                if (this._style) {
                    var style = this._style;
                    style.widthed(this) || this._tex.width, style.heighted(this) || this._tex.height;
                    style.widthed(this) || this._width == this._tex.width || (this.width = this._tex.width, this.parent && this.parent._layoutLater()), style.heighted(this) || this._height == this._tex.height || (this.height = this._tex.height, this.parent && this.parent._layoutLater()), this.repaint()
                }
            }, __proto._addToLayout = function(out) {
                !this._style.absolute && out.push(this)
            }, __proto.renderSelfToGraphic = function(graphic, gX, gY, recList) {
                this._tex && graphic.drawImage(this._tex, gX, gY, this.width || this._tex.width, this.height || this._tex.height)
            }, __getset(0, __proto, "src", null, function(url) {
                if (url = this.formatURL(url), this._url !== url) {
                    this._url = url;
                    var tex = this._tex = Loader.getRes(url);
                    tex || (this._tex = tex = new Texture, tex.load(url), Loader.cacheRes(url, tex)), tex.getIsReady() ? this.onloaded() : tex.once("ready", this, this.onloaded)
                }
            })
        }(HTMLElement), function(_super) {
            function HTMLDivParser() {
                this.contextHeight = NaN, this.contextWidth = NaN, this._htmlBounds = null, this._boundsRec = null, this.repaintHandler = null, HTMLDivParser.__super.call(this)
            }
            __class(HTMLDivParser, "laya.html.dom.HTMLDivParser", _super);
            var __proto = HTMLDivParser.prototype;
            return __proto.reset = function() {
                return _super.prototype.reset.call(this), this._style.block = !0, this._style.setLineElement(!0), this._style.width = 200, this._style.height = 200, this.repaintHandler = null, this.contextHeight = 0, this.contextWidth = 0, this
            }, __proto.appendHTML = function(text) {
                HTMLParse.parse(this, text, this.URI), this.layout()
            }, __proto._addChildsToLayout = function(out) {
                var words = this._getWords();
                if (null == words && (!this._children || 0 == this._children.length)) return !1;
                words && words.forEach(function(o) {
                    out.push(o)
                });
                for (var tFirstKey = !0, i = 0, len = this._children.length; i < len; i++) {
                    var o = this._children[i];
                    tFirstKey ? tFirstKey = !1 : out.push(null), o._addToLayout(out)
                }
                return !0
            }, __proto._addToLayout = function(out) {
                this.layout(), !this.style.absolute && out.push(this)
            }, __proto.getBounds = function() {
                return this._htmlBounds ? (this._boundsRec || (this._boundsRec = Rectangle.create()), this._boundsRec.copyFrom(this._htmlBounds)) : null
            }, __proto.parentRepaint = function(recreate) {
                void 0 === recreate && (recreate = !1), _super.prototype.parentRepaint.call(this), this.repaintHandler && this.repaintHandler.runWith(recreate)
            }, __proto.layout = function() {
                this.style._type |= 512;
                var tArray = Layout.layout(this);
                if (tArray) {
                    this._htmlBounds || (this._htmlBounds = Rectangle.create());
                    var tRectangle = this._htmlBounds;
                    tRectangle.x = tRectangle.y = 0, tRectangle.width = this.contextWidth = tArray[0], tRectangle.height = this.contextHeight = tArray[1]
                }
            }, __getset(0, __proto, "height", function() {
                return this._height ? this._height : this.contextHeight
            }, _super.prototype._$set_height), __getset(0, __proto, "innerHTML", null, function(text) {
                this.destroyChildren(), this.appendHTML(text)
            }), __getset(0, __proto, "width", function() {
                return this._width ? this._width : this.contextWidth
            }, function(value) {
                var changed = !1;
                changed = 0 === value ? value != this._width : value != this.width, Laya.superSet(HTMLElement, this, "width", value), changed && this.layout()
            }), HTMLDivParser
        }(HTMLElement)),
        HTMLDivElement = (function(_super) {
            function HTMLLinkElement() {
                HTMLLinkElement.__super.call(this)
            }
            __class(HTMLLinkElement, "laya.html.dom.HTMLLinkElement", _super);
            var __proto = HTMLLinkElement.prototype;
            __proto._creates = function() {}, __proto.drawToGraphic = function(graphic, gX, gY, recList) {}, __proto.reset = function() {
                return this._loader && this._loader.off("complete", this, this._onload), this._loader = null, this
            }, __proto._onload = function(data) {
                switch (this._loader && (this._loader = null), this.type) {
                    case "text/css":
                        HTMLStyle.parseCSS(data, this.URI)
                }
                this.repaint(!0)
            }, __getset(0, __proto, "href", _super.prototype._$get_href, function(url) {
                url && (url = this.formatURL(url), this.URI = new URL(url), this._loader && this._loader.off("complete", this, this._onload), Loader.getRes(url) ? "text/css" == this.type && HTMLStyle.parseCSS(Loader.getRes(url), this.URI) : (this._loader = new Loader, this._loader.once("complete", this, this._onload), this._loader.load(url, "text")))
            }), HTMLLinkElement._cuttingStyle = new RegExp("((@keyframes[\\s\\t]+|)(.+))[\\t\\n\\r\\s]*{", "g")
        }(HTMLElement), function(_super) {
            function HTMLStyleElement() {
                HTMLStyleElement.__super.call(this)
            }
            __class(HTMLStyleElement, "laya.html.dom.HTMLStyleElement", _super);
            var __proto = HTMLStyleElement.prototype;
            __proto._creates = function() {}, __proto.drawToGraphic = function(graphic, gX, gY, recList) {}, __proto.reset = function() {
                return this
            }, __getset(0, __proto, "innerTEXT", _super.prototype._$get_innerTEXT, function(value) {
                HTMLStyle.parseCSS(value, null)
            })
        }(HTMLElement), function(_super) {
            function HTMLDivElement() {
                this._element = null, this._recList = [], this._innerHTML = null, this._repaintState = 0, HTMLDivElement.__super.call(this), this._element = new HTMLDivParser, this._element.repaintHandler = new Handler(this, this._htmlDivRepaint), this.mouseEnabled = !0, this.on("click", this, this._onMouseClick)
            }
            __class(HTMLDivElement, "laya.html.dom.HTMLDivElement", _super);
            var __proto = HTMLDivElement.prototype;
            return __proto.destroy = function(destroyChild) {
                void 0 === destroyChild && (destroyChild = !0), this._element && this._element.reset(), this._element = null, this._doClears(), _super.prototype.destroy.call(this, destroyChild)
            }, __proto._htmlDivRepaint = function(recreate) {
                void 0 === recreate && (recreate = !1), recreate ? this._repaintState < 2 && (this._repaintState = 2) : this._repaintState < 1 && (this._repaintState = 1), this._repaintState > 0 && this._setGraphicDirty()
            }, __proto._updateGraphicWork = function() {
                switch (this._repaintState) {
                    case 1:
                        this._updateGraphic();
                        break;
                    case 2:
                        this._refresh()
                }
            }, __proto._setGraphicDirty = function() {
                this.callLater(this._updateGraphicWork)
            }, __proto._doClears = function() {
                if (this._recList) {
                    var i = 0,
                        len = this._recList.length;
                    for (i = 0; i < len; i++) this._recList[i].recover();
                    this._recList.length = 0
                }
            }, __proto._updateGraphic = function() {
                this._doClears(), this.graphics.clear(!0), this._repaintState = 0, this._element.drawToGraphic(this.graphics, -this._element.x, -this._element.y, this._recList);
                var bounds = this._element.getBounds();
                bounds && this.setSelfBounds(bounds), this.size(bounds.width, bounds.height)
            }, __proto._refresh = function() {
                this._repaintState = 1, this._innerHTML && (this._element.innerHTML = this._innerHTML), this._setGraphicDirty()
            }, __proto._onMouseClick = function() {
                var len, tHit, tX = this.mouseX,
                    tY = this.mouseY,
                    i = 0;
                for (len = this._recList.length, i = 0; i < len; i++)(tHit = this._recList[i]).rec.contains(tX, tY) && this._eventLink(tHit.href)
            }, __proto._eventLink = function(href) {
                this.event("link", [href])
            }, __getset(0, __proto, "style", function() {
                return this._element.style
            }), __getset(0, __proto, "innerHTML", null, function(text) {
                this._innerHTML != text && (this._repaintState = 1, this._innerHTML = text, this._element.innerHTML = text, this._setGraphicDirty())
            }), __getset(0, __proto, "contextWidth", function() {
                return this._element.contextWidth
            }), __getset(0, __proto, "contextHeight", function() {
                return this._element.contextHeight
            }), HTMLDivElement
        }(Sprite));
    ! function(_super) {
        function HTMLIframeElement() {
            HTMLIframeElement.__super.call(this), this._element._getCSSStyle().valign = "middle"
        }
        __class(HTMLIframeElement, "laya.html.dom.HTMLIframeElement", HTMLDivElement);
        var __proto = HTMLIframeElement.prototype;
        __getset(0, __proto, "href", null, function(url) {
            var _$this = this;
            url = this._element.formatURL(url);
            var l = new Loader;
            l.once("complete", null, function(data) {
                var pre = _$this._element.URI;
                _$this._element.URI = new URL(url), _$this.innerHTML = data, !pre || (_$this._element.URI = pre)
            }), l.load(url, "text")
        })
    }()
}(window, document, Laya);