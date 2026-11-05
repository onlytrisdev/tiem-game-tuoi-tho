! function(window, document, Laya) {
    Laya.un, Laya.uns;
    var __static = Laya.static,
        __class = Laya.class,
        __getset = Laya.getset,
        Bezier = (Laya.__newvec, laya.maths.Bezier),
        Bitmap = laya.resource.Bitmap,
        Browser = laya.utils.Browser,
        ColorUtils = (laya.filters.ColorFilter, laya.utils.ColorUtils),
        Config = Laya.Config,
        Context = laya.resource.Context,
        Filter = (laya.display.cmd.DrawImageCmd, laya.events.Event, laya.display.cmd.FillTextCmd, laya.filters.Filter),
        FontInfo = laya.utils.FontInfo,
        HTMLCanvas = laya.resource.HTMLCanvas,
        HTMLImage = (laya.utils.HTMLChar, laya.resource.HTMLImage),
        Matrix = (laya.utils.Handler, laya.net.Loader, laya.maths.Matrix),
        Point = laya.maths.Point,
        Rectangle = laya.maths.Rectangle,
        Render = laya.renders.Render,
        RenderSprite = laya.renders.RenderSprite,
        Resource = laya.resource.Resource,
        RunDriver = (laya.display.cmd.RestoreCmd, laya.display.cmd.RotateCmd, laya.utils.RunDriver),
        Sprite = (laya.display.cmd.SaveCmd, laya.display.cmd.ScaleCmd, laya.display.Sprite),
        Stage = (laya.display.SpriteConst, laya.display.css.SpriteStyle, laya.display.Stage),
        Stat = laya.utils.Stat,
        StringKey = laya.utils.StringKey,
        System = laya.system.System,
        Texture = (laya.display.Text, laya.resource.Texture),
        VectorGraphManager = (laya.display.cmd.TransformCmd, laya.display.cmd.TranslateCmd, laya.utils.VectorGraphManager);
    laya.utils.WordText;
    Laya.interface("laya.webgl.submit.ISubmit"), Laya.interface("laya.webgl.canvas.save.ISaveData");
    var SaveBase = function() {
            function SaveBase() {}
            __class(SaveBase, "laya.webgl.canvas.save.SaveBase");
            var __proto = SaveBase.prototype;
            return Laya.imps(__proto, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), __proto.isSaveMark = function() {
                return !1
            }, __proto.restore = function(context) {
                this._dataObj[this._valueName] = this._value, SaveBase.POOL[SaveBase.POOL._length++] = this, this._newSubmit && (context._curSubmit = Submit.RENDERBASE)
            }, SaveBase._createArray = function() {
                var value = [];
                return value._length = 0, value
            }, SaveBase._init = function() {
                var namemap = SaveBase._namemap = {};
                return namemap[1] = "ALPHA", namemap[2] = "fillStyle", namemap[8] = "font", namemap[256] = "lineWidth", namemap[512] = "strokeStyle", namemap[8192] = "_mergeID", namemap[1024] = namemap[2048] = namemap[4096] = [], namemap[16384] = "textBaseline", namemap[32768] = "textAlign", namemap[65536] = "_nBlendType", namemap[1048576] = "shader", namemap[2097152] = "filters", namemap[8388608] = "_colorFiler", namemap
            }, SaveBase.save = function(context, type, dataObj, newSubmit) {
                if ((context._saveMark._saveuse & type) !== type) {
                    context._saveMark._saveuse |= type;
                    var cache = SaveBase.POOL,
                        o = cache._length > 0 ? cache[--cache._length] : new SaveBase;
                    o._value = dataObj[o._valueName = SaveBase._namemap[type]], o._dataObj = dataObj, o._newSubmit = newSubmit;
                    var _save = context._save;
                    _save[_save._length++] = o
                }
            }, SaveBase.POOL = laya.webgl.canvas.save.SaveBase._createArray(), SaveBase._namemap = SaveBase._init(), SaveBase
        }(),
        Value2D = function() {
            function Value2D(mainID, subID) {
                this.size = [0, 0], this.alpha = 1, this.ALPHA = 1, this.subID = 0, this.ref = 1, this._cacheID = 0, this.clipMatDir = [99999999, 0, 0, 99999999], this.clipMatPos = [0, 0], this.clipOff = [0, 0], this.defines = new ShaderDefines2D, this.mainID = mainID, this.subID = subID, this.textureHost = null, this.texture = null, this.color = null, this.colorAdd = null, this.u_mmat2 = null, this._cacheID = mainID | subID, this._inClassCache = Value2D._cache[this._cacheID], mainID > 0 && !this._inClassCache && (this._inClassCache = Value2D._cache[this._cacheID] = [], this._inClassCache._length = 0), this.clear()
            }
            __class(Value2D, "laya.webgl.shader.d2.value.Value2D");
            var __proto = Value2D.prototype;
            return __proto.setValue = function(value) {}, __proto._ShaderWithCompile = function() {
                return Shader.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, Shader2X.create, this._attribLocation)
            }, __proto.upload = function() {
                var renderstate2d = RenderState2D;
                RenderState2D.worldMatrix4 === RenderState2D.TEMPMAT4_ARRAY || this.defines.addInt(128), this.mmat = renderstate2d.worldMatrix4, RenderState2D.matWVP && (this.defines.addInt(2048), this.u_MvpMatrix = RenderState2D.matWVP.elements);
                var sd = Shader.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
                sd._shaderValueWidth !== renderstate2d.width || sd._shaderValueHeight !== renderstate2d.height ? (this.size[0] = renderstate2d.width, this.size[1] = renderstate2d.height, sd._shaderValueWidth = renderstate2d.width, sd._shaderValueHeight = renderstate2d.height, sd.upload(this, null)) : sd.upload(this, sd._params2dQuick2 || sd._make2dQuick2())
            }, __proto.setFilters = function(value) {
                if (this.filters = value, value)
                    for (var f, n = value.length, i = 0; i < n; i++)(f = value[i]) && (this.defines.add(f.type), f.action.setValue(this))
            }, __proto.clear = function() {
                this.defines._value = this.subID + (WebGL.shaderHighPrecision ? 1024 : 0), this.clipOff[0] = 0
            }, __proto.release = function() {
                --this.ref < 1 && (this._inClassCache && (this._inClassCache[this._inClassCache._length++] = this), this.clear(), this.filters = null, this.ref = 1, this.clipOff[0] = 0)
            }, Value2D._initone = function(type, classT) {
                Value2D._typeClass[type] = classT, Value2D._cache[type] = [], Value2D._cache[type]._length = 0
            }, Value2D.__init__ = function() {
                Value2D._initone(4, PrimitiveSV), Value2D._initone(512, SkinSV), Value2D._initone(1, TextureSV), Value2D._initone(9, TextureSV)
            }, Value2D.create = function(mainType, subType) {
                var types = Value2D._cache[mainType | subType];
                return types._length ? types[--types._length] : new Value2D._typeClass[mainType | subType](subType)
            }, Value2D._cache = [], Value2D._typeClass = [], Value2D.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], Value2D
        }(),
        SaveTranslate = function() {
            function SaveTranslate() {
                this._mat = new Matrix
            }
            __class(SaveTranslate, "laya.webgl.canvas.save.SaveTranslate");
            var __proto = SaveTranslate.prototype;
            return Laya.imps(__proto, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), __proto.isSaveMark = function() {
                return !1
            }, __proto.restore = function(context) {
                this._mat.copyTo(context._curMat), SaveTranslate.POOL[SaveTranslate.POOL._length++] = this
            }, SaveTranslate.save = function(context) {
                var no = SaveTranslate.POOL,
                    o = no._length > 0 ? no[--no._length] : new SaveTranslate;
                context._curMat.copyTo(o._mat);
                var _save = context._save;
                _save[_save._length++] = o
            }, SaveTranslate.POOL = SaveBase._createArray(), SaveTranslate
        }(),
        WebGLRTMgr = function() {
            function WebGLRTMgr() {}
            return __class(WebGLRTMgr, "laya.webgl.resource.WebGLRTMgr"), WebGLRTMgr.getRT = function(w, h) {
                h |= 0, (w |= 0) >= 1e4 && console.error("getRT error! w too big");
                var ret, key = 1e4 * h + w,
                    sw = WebGLRTMgr.dict[key];
                return sw && sw.length > 0 ? ((ret = sw.pop())._mgrKey = key, ret) : ((ret = new RenderTexture2D(w, h, 1, -1))._mgrKey = key, ret)
            }, WebGLRTMgr.releaseRT = function(rt) {
                if (!(rt._mgrKey <= 0)) {
                    var sw = WebGLRTMgr.dict[rt._mgrKey];
                    !sw && (sw = [], WebGLRTMgr.dict[rt._mgrKey] = sw), rt._mgrKey = 0, sw.push(rt)
                }
            }, WebGLRTMgr.dict = {}, WebGLRTMgr
        }(),
        Mesh2D = function() {
            function Mesh2D(stride, vballoc, iballoc) {
                this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._vb = null, this._ib = null, this._vao = null, this._attribInfo = null, this._quadNum = 0, this.canReuse = !1, this._stride = stride, this._vb = new VertexBuffer2D(stride, 35048), vballoc ? this._vb._resizeBuffer(vballoc, !1) : Config.webGL2D_MeshAllocMaxMem && this._vb._resizeBuffer(65536 * stride, !1), this._ib = new IndexBuffer2D, iballoc && this._ib._resizeBuffer(iballoc, !1)
            }
            __class(Mesh2D, "laya.webgl.utils.Mesh2D");
            var __proto = Mesh2D.prototype;
            return __proto.cloneWithNewVB = function() {
                var mesh = new Mesh2D(this._stride, 0, 0);
                return mesh._ib = this._ib, mesh._quadNum = this._quadNum, mesh._attribInfo = this._attribInfo, mesh
            }, __proto.cloneWithNewVBIB = function() {
                var mesh = new Mesh2D(this._stride, 0, 0);
                return mesh._attribInfo = this._attribInfo, mesh
            }, __proto.getVBW = function() {
                return this._vb.setNeedUpload(), this._vb
            }, __proto.getVBR = function() {
                return this._vb
            }, __proto.getIBR = function() {
                return this._ib
            }, __proto.getIBW = function() {
                return this._ib.setNeedUpload(), this._ib
            }, __proto.createQuadIB = function(QuadNum) {
                this._quadNum = QuadNum, this._ib._resizeBuffer(6 * QuadNum * 2, !1), this._ib.byteLength = this._ib.bufferLength;
                for (var bd = this._ib.getUint16Array(), idx = 0, curvert = 0, i = 0; i < QuadNum; i++) bd[idx++] = curvert, bd[idx++] = curvert + 2, bd[idx++] = curvert + 1, bd[idx++] = curvert, bd[idx++] = curvert + 3, bd[idx++] = curvert + 2, curvert += 4;
                this._ib.setNeedUpload()
            }, __proto.setAttributes = function(attribs) {
                if (this._attribInfo = attribs, this._attribInfo.length % 3 != 0) throw "Mesh2D setAttributes error!"
            }, __proto.configVAO = function(gl) {
                if (!this._applied) {
                    this._applied = !0, this._vao || (this._vao = new BufferState2D), this._vao.bind(), this._vb._bindForVAO(), this._ib.setNeedUpload(), this._ib._bind_uploadForVAO();
                    for (var attribNum = this._attribInfo.length / 3, idx = 0, i = 0; i < attribNum; i++) {
                        var _size = this._attribInfo[idx + 1],
                            _type = this._attribInfo[idx],
                            _off = this._attribInfo[idx + 2];
                        gl.enableVertexAttribArray(i), gl.vertexAttribPointer(i, _size, _type, !1, this._stride, _off), idx += 3
                    }
                    this._vao.unBind()
                }
            }, __proto.useMesh = function(gl) {
                this._applied || this.configVAO(gl), this._vao.bind(), this._vb.bind(), this._ib._bind_upload() || this._ib.bind(), this._vb._bind_upload() || this._vb.bind()
            }, __proto.getEleNum = function() {
                return this._ib.getBuffer().byteLength / 2
            }, __proto.releaseMesh = function() {}, __proto.destroy = function() {}, __proto.clearVB = function() {
                this._vb.clear()
            }, Mesh2D._gvaoid = 0, Mesh2D
        }(),
        RenderState2D = function() {
            function RenderState2D() {}
            return __class(RenderState2D, "laya.webgl.utils.RenderState2D"), RenderState2D.mat2MatArray = function(mat, matArray) {
                var m = mat,
                    m4 = matArray;
                return m4[0] = m.a, m4[1] = m.b, m4[2] = RenderState2D.EMPTYMAT4_ARRAY[2], m4[3] = RenderState2D.EMPTYMAT4_ARRAY[3], m4[4] = m.c, m4[5] = m.d, m4[6] = RenderState2D.EMPTYMAT4_ARRAY[6], m4[7] = RenderState2D.EMPTYMAT4_ARRAY[7], m4[8] = RenderState2D.EMPTYMAT4_ARRAY[8], m4[9] = RenderState2D.EMPTYMAT4_ARRAY[9], m4[10] = RenderState2D.EMPTYMAT4_ARRAY[10], m4[11] = RenderState2D.EMPTYMAT4_ARRAY[11], m4[12] = m.tx, m4[13] = m.ty, m4[14] = RenderState2D.EMPTYMAT4_ARRAY[14], m4[15] = RenderState2D.EMPTYMAT4_ARRAY[15], matArray
            }, RenderState2D.restoreTempArray = function() {
                RenderState2D.TEMPMAT4_ARRAY[0] = 1, RenderState2D.TEMPMAT4_ARRAY[1] = 0, RenderState2D.TEMPMAT4_ARRAY[4] = 0, RenderState2D.TEMPMAT4_ARRAY[5] = 1, RenderState2D.TEMPMAT4_ARRAY[12] = 0, RenderState2D.TEMPMAT4_ARRAY[13] = 0
            }, RenderState2D.clear = function() {
                RenderState2D.worldScissorTest = !1, RenderState2D.worldAlpha = 1
            }, RenderState2D._MAXSIZE = 99999999, RenderState2D.EMPTYMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], RenderState2D.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], RenderState2D.worldMatrix4 = RenderState2D.TEMPMAT4_ARRAY, RenderState2D.matWVP = null, RenderState2D.worldAlpha = 1, RenderState2D.worldScissorTest = !1, RenderState2D.worldShaderDefines = null, RenderState2D.worldFilters = null, RenderState2D.width = 0, RenderState2D.height = 0, __static(RenderState2D, ["worldMatrix", function() {
                return this.worldMatrix = new Matrix
            }]), RenderState2D
        }(),
        DrawStyle = function() {
            function DrawStyle(value) {
                this._color = null, this.setValue(value)
            }
            __class(DrawStyle, "laya.webgl.canvas.DrawStyle");
            var __proto = DrawStyle.prototype;
            return __proto.setValue = function(value) {
                this._color = value ? value instanceof laya.utils.ColorUtils ? value : ColorUtils.create(value) : ColorUtils.create("#000000")
            }, __proto.reset = function() {
                this._color = ColorUtils.create("#000000")
            }, __proto.toInt = function() {
                return this._color.numColor
            }, __proto.equal = function(value) {
                return "string" == typeof value ? this._color.strColor === value : value instanceof laya.utils.ColorUtils && this._color.numColor === value.numColor
            }, __proto.toColorStr = function() {
                return this._color.strColor
            }, DrawStyle.create = function(value) {
                if (value) {
                    var color = value instanceof laya.utils.ColorUtils ? value : ColorUtils.create(value);
                    return color._drawStyle || (color._drawStyle = new DrawStyle(value))
                }
                return DrawStyle.DEFAULT
            }, __static(DrawStyle, ["DEFAULT", function() {
                return this.DEFAULT = new DrawStyle("#000000")
            }]), DrawStyle
        }(),
        Shader2D = function() {
            function Shader2D() {
                this.ALPHA = 1, this.shaderType = 0, this.defines = new ShaderDefines2D, this.fillStyle = DrawStyle.DEFAULT, this.strokeStyle = DrawStyle.DEFAULT
            }
            return __class(Shader2D, "laya.webgl.shader.d2.Shader2D"), Shader2D.prototype.destroy = function() {
                this.defines = null, this.filters = null
            }, Shader2D.__init__ = function() {
                var vs, ps;
                vs = "/*\n\ttexture和fillrect使用的。\n*/\nattribute vec4 posuv;\nattribute vec4 attribColor;\nattribute vec4 attribFlags;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\nvarying vec2 cliped;\nuniform vec2 size;\nuniform vec2 clipOff;\t\t\t// 使用要把clip偏移。cacheas normal用. 只用了[0]\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\n#ifdef MVP3D\n\tuniform mat4 u_MvpMatrix;\n#endif\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\n\nvoid main() {\n\n\tvec4 pos = vec4(posuv.xy,0.,1.);\n#ifdef WORLDMAT\n\tpos=mmat*pos;\n#endif\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\n#ifdef MVP3D\n\tgl_Position=u_MvpMatrix*pos1;\n#else\n\tgl_Position=pos1;\n#endif\n\tv_texcoordAlpha.xy = posuv.zw;\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\n\tv_color = attribColor/255.0;\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\n\t\n\tv_useTex = attribFlags.r/255.0;\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\t\n\tvec2 clpos = clipMatPos.xy;\n\t#ifdef WORLDMAT\n\t\t// 如果有mmat，需要修改clipMatPos,因为 这是cacheas normal （如果不是就错了）， clipMatPos被去掉了偏移\n\t\tif(clipOff[0]>0.0){\n\t\t\tclpos.x+=mmat[3].x;\t//tx\t最简单处理\n\t\t\tclpos.y+=mmat[3].y;\t//ty\n\t\t}\n\t#endif\n\tvec2 clippos = pos.xy - clpos;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n\n}", ps = "/*\n\ttexture和fillrect使用的。\n*/\n\nprecision mediump float;\n//precision highp float;\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\nuniform sampler2D texture;\nvarying vec2 cliped;\n\n#ifdef BLUR_FILTER\nuniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}\n#endif\n\n#ifdef COLOR_FILTER\nuniform vec4 colorAlpha;\nuniform mat4 colorMat;\n#endif\n\n#ifdef GLOW_FILTER\nuniform vec4 u_color;\nuniform vec4 u_blurInfo1;\nuniform vec4 u_blurInfo2;\n#endif\n\n#ifdef COLOR_ADD\nuniform vec4 colorAdd;\n#endif\n\n#ifdef FILLTEXTURE\t\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\n#endif\nvoid main() {\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n\t\n#ifdef FILLTEXTURE\t\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\n#else\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\n#endif\n\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\n   color.a*=v_color.w;\n   //color.rgb*=v_color.w;\n   color.rgb*=v_color.rgb;\n   gl_FragColor=color;\n   \n   #ifdef COLOR_ADD\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\n\tgl_FragColor.xyz *= colorAdd.a;\n   #endif\n   \n   #ifdef BLUR_FILTER\n\tgl_FragColor =   blur();\n\tgl_FragColor.w*=v_color.w;   \n   #endif\n   \n   #ifdef COLOR_FILTER\n\tmat4 alphaMat =colorMat;\n\n\talphaMat[0][3] *= gl_FragColor.a;\n\talphaMat[1][3] *= gl_FragColor.a;\n\talphaMat[2][3] *= gl_FragColor.a;\n\n\tgl_FragColor = gl_FragColor * alphaMat;\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n   #endif\n   \n   #ifdef GLOW_FILTER\n\tconst float c_IterationTime = 10.0;\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\n\tvec2 vec2Off = vec2(0.0,0.0);\n\tfloat floatOff = c_IterationTime/2.0;\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t\t}\n\t}\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\n\tgl_FragColor.rgb *= gl_FragColor.a;   \n   #endif\n   \n}", Shader.preCompile2D(0, 1, vs, ps, null), vs = "attribute vec4 position;\nattribute vec4 attribColor;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_mmat2;\n//uniform vec2 u_pos;\nuniform vec2 size;\nvarying vec4 color;\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\n//vec4 clip=vec4(100.,30.,300.,600.);\nvarying vec2 cliped;\nvoid main(){\n\t\n#ifdef WORLDMAT\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n#else\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n#endif\t\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n  //pos2d.x = dot(clippos,dirx);\n  color=attribColor/255.;\n}", ps = "precision mediump float;\n//precision mediump float;\nvarying vec4 color;\n//uniform float alpha;\nvarying vec2 cliped;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=color.a;\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n}", Shader.preCompile2D(0, 4, vs, ps, null), vs = "attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}", ps = "precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}", Shader.preCompile2D(0, 512, vs, ps, null)
            }, Shader2D
        }(),
        CommandEncoder = function() {
            function CommandEncoder(layagl, reserveSize, adjustSize, isSyncToRenderThread) {
                this._idata = []
            }
            __class(CommandEncoder, "laya.layagl.CommandEncoder");
            var __proto = CommandEncoder.prototype;
            return __proto.getArrayData = function() {
                return this._idata
            }, __proto.getPtrID = function() {
                return 0
            }, __proto.beginEncoding = function() {}, __proto.endEncoding = function() {}, __proto.clearEncoding = function() {
                this._idata.length = 0
            }, __proto.getCount = function() {
                return this._idata.length
            }, __proto.add_ShaderValue = function(o) {
                this._idata.push(o)
            }, __proto.addShaderUniform = function(one) {
                this.add_ShaderValue(one)
            }, CommandEncoder
        }(),
        SkinMeshBuffer = function() {
            function SkinMeshBuffer() {
                this.ib = null, this.vb = null;
                WebGL.mainContext;
                this.ib = IndexBuffer2D.create(35048), this.vb = VertexBuffer2D.create(8)
            }
            __class(SkinMeshBuffer, "laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");
            var __proto = SkinMeshBuffer.prototype;
            return __proto.addSkinMesh = function(skinMesh) {
                skinMesh.getData2(this.vb, this.ib, this.vb._byteLength / 32)
            }, __proto.reset = function() {
                this.vb.clear(), this.ib.clear()
            }, SkinMeshBuffer.getInstance = function() {
                return SkinMeshBuffer.instance = SkinMeshBuffer.instance || new SkinMeshBuffer
            }, SkinMeshBuffer.instance = null, SkinMeshBuffer
        }(),
        ShaderNode = function() {
            function ShaderNode(includefiles) {
                this.childs = [], this.text = "", this.parent = null, this.name = null, this.noCompile = !1, this.includefiles = null, this.condition = null, this.conditionType = 0, this.useFuns = "", this.z = 0, this.src = null, this.includefiles = includefiles
            }
            __class(ShaderNode, "laya.webgl.utils.ShaderNode");
            var __proto = ShaderNode.prototype;
            return __proto.setParent = function(parent) {
                parent.childs.push(this), this.z = parent.z + 1, this.parent = parent
            }, __proto.setCondition = function(condition, type) {
                condition && (this.conditionType = type, condition = condition.replace(/(\s*$)/g, ""), this.condition = function() {
                    return this[condition]
                }, this.condition.__condition = condition)
            }, __proto.toscript = function(def, out) {
                return this._toscript(def, out, ++ShaderNode.__id)
            }, __proto._toscript = function(def, out, id) {
                if (this.childs.length < 1 && !this.text) return out;
                out.length;
                if (this.condition) {
                    var ifdef = !!this.condition.call(def);
                    if (2 === this.conditionType && (ifdef = !ifdef), !ifdef) return out
                }
                if (this.text && out.push(this.text), this.childs.length > 0 && this.childs.forEach(function(o, index, arr) {
                        o._toscript(def, out, id)
                    }), this.includefiles.length > 0 && this.useFuns.length > 0)
                    for (var funsCode, i = 0, n = this.includefiles.length; i < n; i++) this.includefiles[i].curUseID != id && (funsCode = this.includefiles[i].file.getFunsScript(this.useFuns)).length > 0 && (this.includefiles[i].curUseID = id, out[0] = funsCode + out[0]);
                return out
            }, ShaderNode.__id = 1, ShaderNode
        }(),
        Submit = function() {
            function Submit(renderType) {
                this.clipInfoID = -1, this._mesh = null, this._blendFn = null, this._id = 0, this._renderType = 0, this._parent = null, this._startIdx = 0, this._numEle = 0, this._ref = 1, this.shaderValue = null, this._key = new SubmitKey, void 0 === renderType && (renderType = 1e4), this._renderType = renderType, this._id = ++Submit.ID
            }
            __class(Submit, "laya.webgl.submit.Submit");
            var __proto = Submit.prototype;
            return Laya.imps(__proto, {
                "laya.webgl.submit.ISubmit": !0
            }), __proto.getID = function() {
                return this._id
            }, __proto.releaseRender = function() {
                Submit.RENDERBASE != this && --this._ref < 1 && (Submit.POOL[Submit._poolSize++] = this, this.shaderValue.release(), this.shaderValue = null, this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null))
            }, __proto.getRenderType = function() {
                return this._renderType
            }, __proto.renderSubmit = function() {
                if (0 === this._numEle || !this._mesh || 0 == this._numEle) return 1;
                var _tex = this.shaderValue.textureHost;
                if (_tex) {
                    var source = _tex._getSource();
                    if (!source) return 1;
                    this.shaderValue.texture = source
                }
                var gl = WebGL.mainContext;
                return this._mesh.useMesh(gl), this.shaderValue.upload(), BlendMode.activeBlendFunction !== this._blendFn && (WebGLContext.setBlend(gl, !0), this._blendFn(gl), BlendMode.activeBlendFunction = this._blendFn), gl.drawElements(4, this._numEle, 5123, this._startIdx), Stat.renderBatches++, Stat.trianglesFaces += this._numEle / 3, 1
            }, __proto._cloneInit = function(o, context, mesh, pos) {
                o._ref = 1, o._mesh = mesh, o._id = this._id, o._key.copyFrom(this._key), o._parent = this, o._blendFn = this._blendFn, o._renderType = this._renderType, o._startIdx = pos * CONST3D2D.BYTES_PIDX, o._numEle = this._numEle, o.shaderValue = this.shaderValue, this.shaderValue.ref++, this._ref++
            }, __proto.clone = function(context, mesh, pos) {
                return null
            }, __proto.reUse = function(context, pos) {
                return 0
            }, __proto.toString = function() {
                return "ibindex:" + this._startIdx + " num:" + this._numEle + " key=" + this._key
            }, Submit.__init__ = function() {
                var s = Submit.RENDERBASE = new Submit(-1);
                s.shaderValue = new Value2D(0, 0), s.shaderValue.ALPHA = 1, s._ref = 4294967295
            }, Submit.create = function(context, mesh, sv) {
                var o = Submit._poolSize ? Submit.POOL[--Submit._poolSize] : new Submit;
                o._ref = 1, o._mesh = mesh, o._key.clear(), o._startIdx = mesh.indexNum * CONST3D2D.BYTES_PIDX, o._numEle = 0;
                var blendType = context._nBlendType;
                o._blendFn = context._targets ? BlendMode.targetFns[blendType] : BlendMode.fns[blendType], o.shaderValue = sv, o.shaderValue.setValue(context._shader2D);
                var filters = context._shader2D.filters;
                return filters && o.shaderValue.setFilters(filters), o
            }, Submit.createShape = function(ctx, mesh, numEle, sv) {
                var o = Submit._poolSize ? Submit.POOL[--Submit._poolSize] : new Submit;
                o._mesh = mesh, o._numEle = numEle, o._startIdx = 2 * mesh.indexNum, o._ref = 1, o.shaderValue = sv, o.shaderValue.setValue(ctx._shader2D);
                var blendType = ctx._nBlendType;
                return o._key.blendShader = blendType, o._blendFn = ctx._targets ? BlendMode.targetFns[blendType] : BlendMode.fns[blendType], o
            }, Submit.TYPE_2D = 1e4, Submit.TYPE_CANVAS = 10003, Submit.TYPE_CMDSETRT = 10004, Submit.TYPE_CUSTOM = 10005, Submit.TYPE_BLURRT = 10006, Submit.TYPE_CMDDESTORYPRERT = 10007, Submit.TYPE_DISABLESTENCIL = 10008, Submit.TYPE_OTHERIBVB = 10009, Submit.TYPE_PRIMITIVE = 10010, Submit.TYPE_RT = 10011, Submit.TYPE_BLUR_RT = 10012, Submit.TYPE_TARGET = 10013, Submit.TYPE_CHANGE_VALUE = 10014, Submit.TYPE_SHAPE = 10015, Submit.TYPE_TEXTURE = 10016, Submit.TYPE_FILLTEXTURE = 10017, Submit.KEY_ONCE = -1, Submit.KEY_FILLRECT = 1, Submit.KEY_DRAWTEXTURE = 2, Submit.KEY_VG = 3, Submit.KEY_TRIANGLES = 4, Submit.RENDERBASE = null, Submit.ID = 1, Submit.preRender = null, Submit._poolSize = 0, Submit.POOL = [], Submit
        }(),
        SaveTransform = function() {
            function SaveTransform() {
                this._matrix = new Matrix
            }
            __class(SaveTransform, "laya.webgl.canvas.save.SaveTransform");
            var __proto = SaveTransform.prototype;
            return Laya.imps(__proto, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), __proto.isSaveMark = function() {
                return !1
            }, __proto.restore = function(context) {
                context._curMat = this._savematrix, SaveTransform.POOL[SaveTransform.POOL._length++] = this
            }, SaveTransform.save = function(context) {
                var _saveMark = context._saveMark;
                if (2048 != (2048 & _saveMark._saveuse)) {
                    _saveMark._saveuse |= 2048;
                    var no = SaveTransform.POOL,
                        o = no._length > 0 ? no[--no._length] : new SaveTransform;
                    o._savematrix = context._curMat, context._curMat = context._curMat.copyTo(o._matrix);
                    var _save = context._save;
                    _save[_save._length++] = o
                }
            }, SaveTransform.POOL = SaveBase._createArray(), SaveTransform
        }(),
        BasePoly = function() {
            function BasePoly() {}
            return __class(BasePoly, "laya.webgl.shapes.BasePoly"), BasePoly.createLine2 = function(p, indices, lineWidth, indexBase, outVertex, loop) {
                if (p.length < 4) return null;
                var points = BasePoly.tempData.length > p.length + 2 ? BasePoly.tempData : new Array(p.length + 2);
                points[0] = p[0], points[1] = p[1];
                var newlen = 2,
                    i = 0,
                    length = p.length;
                for (i = 2; i < length; i += 2) Math.abs(p[i] - p[i - 2]) + Math.abs(p[i + 1] - p[i - 1]) > .01 && (points[newlen++] = p[i], points[newlen++] = p[i + 1]);
                loop && Math.abs(p[0] - points[newlen - 2]) + Math.abs(p[1] - points[newlen - 1]) > .01 && (points[newlen++] = p[0], points[newlen++] = p[1]);
                var result = outVertex;
                length = newlen / 2;
                var px, py, p1x, p1y, p2x, p2y, p3x, p3y, perpx, perpy, perp2x, perp2y, a1, b1, c1, a2, b2, c2, denom, dist, w = lineWidth / 2;
                p1x = points[0], p1y = points[1], perpy = p1x - (p2x = points[2]);
                perpx = (perpx = -(p1y - (p2y = points[3]))) / (dist = Math.sqrt(perpx * perpx + perpy * perpy)) * w, perpy = perpy / dist * w;
                for (result.push(p1x - perpx, p1y - perpy, p1x + perpx, p1y + perpy), i = 1; i < length - 1; i++) p1x = points[2 * (i - 1)], p1y = points[2 * (i - 1) + 1], p2x = points[2 * i], p2y = points[2 * i + 1], p3x = points[2 * (i + 1)], p3y = points[2 * (i + 1) + 1], perpy = p1x - p2x, perp2y = p2x - p3x, c1 = (-(perpx = (perpx = -(p1y - p2y)) / (dist = Math.sqrt(perpx * perpx + perpy * perpy)) * w) + p1x) * (-(perpy = perpy / dist * w) + p2y) - (-perpx + p2x) * (-perpy + p1y), c2 = (-(perp2x = (perp2x = -(p2y - p3y)) / (dist = Math.sqrt(perp2x * perp2x + perp2y * perp2y)) * w) + p3x) * (-(perp2y = perp2y / dist * w) + p2y) - (-perp2x + p2x) * (-perp2y + p3y), denom = (a1 = -perpy + p1y - (-perpy + p2y)) * (b2 = -perp2x + p2x - (-perp2x + p3x)) - (a2 = -perp2y + p3y - (-perp2y + p2y)) * (b1 = -perpx + p2x - (-perpx + p1x)), Math.abs(denom) < .1 ? (denom += 10.1, result.push(p2x - perpx, p2y - perpy, p2x + perpx, p2y + perpy)) : (((px = (b1 * c2 - b2 * c1) / denom) - p2x) * (px - p2x) + ((py = (a2 * c1 - a1 * c2) / denom) - p2y) + (py - p2y), result.push(px, py, p2x - (px - p2x), p2y - (py - p2y)));
                for (p1x = points[newlen - 4], p1y = points[newlen - 3], perpy = p1x - (p2x = points[newlen - 2]), perpx = (perpx = -(p1y - (p2y = points[newlen - 1]))) / (dist = Math.sqrt(perpx * perpx + perpy * perpy)) * w, perpy = perpy / dist * w, result.push(p2x - perpx, p2y - perpy, p2x + perpx, p2y + perpy), i = 1; i < length; i++) indices.push(indexBase + 2 * (i - 1), indexBase + 2 * (i - 1) + 1, indexBase + 2 * i + 1, indexBase + 2 * i + 1, indexBase + 2 * i, indexBase + 2 * (i - 1));
                return result
            }, BasePoly.createLineTriangle = function(path, color, width, loop, outvb, vbstride, outib) {
                var points = path.slice(),
                    ptlen = points.length,
                    p1x = points[0],
                    p1y = points[1],
                    p2x = points[2],
                    len = (points[2], 0),
                    rp = 0,
                    dx = 0,
                    dy = 0,
                    pointnum = ptlen / 2;
                if (!(pointnum <= 1) && 2 != pointnum) {
                    for (var tmpData = new Array(4 * pointnum), realPtNum = 0, ci = 0, i = 0; i < pointnum - 1; i++) p1x = points[ci++], p1y = points[ci++], p2x = points[ci++], dy = points[ci++] - p1y, 0 != (dx = p2x - p1x) && 0 != dy && (len = Math.sqrt(dx * dx + dy * dy)) > .001 && (tmpData[rp = 4 * realPtNum] = p1x, tmpData[rp + 1] = p1y, tmpData[rp + 2] = dx / len, tmpData[rp + 3] = dy / len, realPtNum++);
                    for (loop ? (p1x = points[ptlen - 2], p1y = points[ptlen - 1], p2x = points[0], dy = points[1] - p1y, 0 != (dx = p2x - p1x) && 0 != dy && (len = Math.sqrt(dx * dx + dy * dy)) > .001 && (tmpData[rp = 4 * realPtNum] = p1x, tmpData[rp + 1] = p1y, tmpData[rp + 2] = dx / len, tmpData[rp + 3] = dy / len, realPtNum++)) : (tmpData[rp = 4 * realPtNum] = p1x, tmpData[rp + 1] = p1y, tmpData[rp + 2] = dx / len, tmpData[rp + 3] = dy / len, realPtNum++), ci = 0, i = 0; i < pointnum; i++) {
                        p1x = points[ci], p1y = points[ci + 1], p2x = points[ci + 2], points[ci + 3];
                        points[ci + 4], points[ci + 5]
                    }
                }
            }, __static(BasePoly, ["tempData", function() {
                return this.tempData = new Array(256)
            }]), BasePoly
        }(),
        SaveClipRect = function() {
            function SaveClipRect() {
                this._clipInfoID = -1, this._globalClipMatrix = new Matrix, this._clipRect = new Rectangle
            }
            __class(SaveClipRect, "laya.webgl.canvas.save.SaveClipRect");
            var __proto = SaveClipRect.prototype;
            return Laya.imps(__proto, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), __proto.isSaveMark = function() {
                return !1
            }, __proto.restore = function(context) {
                this._globalClipMatrix.copyTo(context._globalClipMatrix), this._clipRect.clone(context._clipRect), context._clipInfoID = this._clipInfoID, SaveClipRect.POOL[SaveClipRect.POOL._length++] = this
            }, SaveClipRect.save = function(context) {
                if (131072 != (131072 & context._saveMark._saveuse)) {
                    context._saveMark._saveuse |= 131072;
                    var cache = SaveClipRect.POOL,
                        o = cache._length > 0 ? cache[--cache._length] : new SaveClipRect;
                    context._globalClipMatrix.copyTo(o._globalClipMatrix), context._clipRect.clone(o._clipRect), o._clipInfoID = context._clipInfoID;
                    var _save = context._save;
                    _save[_save._length++] = o
                }
            }, SaveClipRect.POOL = SaveBase._createArray(), SaveClipRect
        }(),
        ICharRender = function() {
            function ICharRender() {}
            __class(ICharRender, "laya.webgl.resource.ICharRender");
            var __proto = ICharRender.prototype;
            return __proto.getWidth = function(font, str) {
                return 0
            }, __proto.scale = function(sx, sy) {}, __proto.getCharBmp = function(char, font, lineWidth, colStr, strokeColStr, size, margin_left, margin_top, margin_right, margin_bottom, rect) {
                return null
            }, __getset(0, __proto, "canvasWidth", function() {
                return 0
            }, function(w) {}), ICharRender
        }(),
        CharSubmitCache = function() {
            function CharSubmitCache() {
                this._data = [], this._ndata = 0, this._tex = null, this._imgId = 0, this._clipid = -1, this._enbale = !1, this._colorFiler = null, this._clipMatrix = new Matrix
            }
            __class(CharSubmitCache, "laya.webgl.text.CharSubmitCache");
            var __proto = CharSubmitCache.prototype;
            return __proto.clear = function() {
                this._tex = null, this._imgId = -1, this._ndata = 0, this._enbale = !1, this._colorFiler = null
            }, __proto.destroy = function() {
                this.clear(), this._data.length = 0, this._data = null
            }, __proto.add = function(ctx, tex, imgid, pos, uv, color) {
                this._ndata > 0 && (this._tex != tex || this._imgId != imgid || this._clipid >= 0 && this._clipid != ctx._clipInfoID) && this.submit(ctx), this._clipid = ctx._clipInfoID, ctx._globalClipMatrix.copyTo(this._clipMatrix), this._tex = tex, this._imgId = imgid, this._colorFiler = ctx._colorFiler, this._data[this._ndata] = pos, this._data[this._ndata + 1] = uv, this._data[this._ndata + 2] = color, this._ndata += 3
            }, __proto.getPos = function() {
                return 0 == CharSubmitCache.__nPosPool ? new Array(8) : CharSubmitCache.__posPool[--CharSubmitCache.__nPosPool]
            }, __proto.enable = function(value, ctx) {
                value !== this._enbale && (this._enbale = value, this._enbale || this.submit(ctx))
            }, __proto.submit = function(ctx) {
                var n = this._ndata;
                if (n) {
                    var _mesh = ctx._mesh,
                        colorFiler = ctx._colorFiler;
                    ctx._colorFiler = this._colorFiler;
                    var submit = SubmitTexture.create(ctx, _mesh, Value2D.create(1, 0));
                    ctx._submits[ctx._submits._length++] = ctx._curSubmit = submit, submit.shaderValue.textureHost = this._tex, submit._key.other = this._imgId, ctx._colorFiler = colorFiler, ctx._copyClipInfo(submit, this._clipMatrix), submit.clipInfoID = this._clipid;
                    for (var i = 0; i < n; i += 3) _mesh.addQuad(this._data[i], this._data[i + 1], this._data[i + 2], !0), CharSubmitCache.__posPool[CharSubmitCache.__nPosPool++] = this._data[i];
                    n /= 3, submit._numEle += 6 * n, _mesh.indexNum += 6 * n, _mesh.vertNum += 4 * n, ctx._drawCount += n, this._ndata = 0, Stat.loopCount % 100 == 0 && (this._data.length = 0)
                }
            }, CharSubmitCache.__posPool = [], CharSubmitCache.__nPosPool = 0, CharSubmitCache
        }(),
        BufferStateBase = function() {
            function BufferStateBase() {
                this._nativeVertexArrayObject = null, this._bindedIndexBuffer = null, this._nativeVertexArrayObject = LayaGL.instance.createVertexArray()
            }
            __class(BufferStateBase, "laya.webgl.BufferStateBase");
            var __proto = BufferStateBase.prototype;
            return __proto.bind = function() {
                BufferStateBase._curBindedBufferState !== this && (LayaGL.instance.bindVertexArray(this._nativeVertexArrayObject), BufferStateBase._curBindedBufferState = this)
            }, __proto.unBind = function() {
                if (BufferStateBase._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
                LayaGL.instance.bindVertexArray(null), BufferStateBase._curBindedBufferState = null
            }, __proto.bindForNative = function() {
                LayaGL.instance.bindVertexArray(this._nativeVertexArrayObject), BufferStateBase._curBindedBufferState = this
            }, __proto.unBindForNative = function() {
                LayaGL.instance.bindVertexArray(null), BufferStateBase._curBindedBufferState = null
            }, __proto.destroy = function() {
                LayaGL.instance.deleteVertexArray(this._nativeVertexArrayObject)
            }, BufferStateBase._curBindedBufferState = null, BufferStateBase
        }(),
        WebGLContext = (function() {
            function QuickTestTool() {
                this._renderType = 0, this._repaint = 0, this._x = NaN, this._y = NaN
            }
            __class(QuickTestTool, "laya.layagl.QuickTestTool");
            var __proto = QuickTestTool.prototype;
            __proto.render = function(context, x, y) {
                QuickTestTool._addType(this._renderType), QuickTestTool.showRenderTypeInfo(this._renderType), RenderSprite.renders[this._renderType]._fun(this, context, x + this._x, y + this._y), this._repaint = 0
            }, __proto._stageRender = function(context, x, y) {
                QuickTestTool._countStart(), QuickTestTool._PreStageRender.call(Laya.stage, context, x, y), QuickTestTool._countEnd()
            }, QuickTestTool.getMCDName = function(type) {
                return QuickTestTool._typeToNameDic[type]
            }, QuickTestTool.showRenderTypeInfo = function(type, force) {
                if (void 0 === force && (force = !1), force || !QuickTestTool.showedDic[type]) {
                    if (QuickTestTool.showedDic[type] = !0, !QuickTestTool._rendertypeToStrDic[type]) {
                        var arr = [],
                            tType = 0;
                        for (tType = 1; tType <= type;) tType & type && arr.push(QuickTestTool.getMCDName(tType & type)), tType <<= 1;
                        QuickTestTool._rendertypeToStrDic[type] = arr.join(",")
                    }
                    console.log("cmd:", QuickTestTool._rendertypeToStrDic[type])
                }
            }, QuickTestTool.__init__ = function() {
                QuickTestTool._typeToNameDic[1] = "ALPHA", QuickTestTool._typeToNameDic[2] = "TRANSFORM", QuickTestTool._typeToNameDic[256] = "TEXTURE", QuickTestTool._typeToNameDic[512] = "GRAPHICS", QuickTestTool._typeToNameDic[4096] = "ONECHILD", QuickTestTool._typeToNameDic[8192] = "CHILDS", QuickTestTool._typeToNameDic[3] = "TRANSFORM|ALPHA", QuickTestTool._typeToNameDic[8] = "CANVAS", QuickTestTool._typeToNameDic[4] = "BLEND", QuickTestTool._typeToNameDic[16] = "FILTERS", QuickTestTool._typeToNameDic[32] = "MASK", QuickTestTool._typeToNameDic[64] = "CLIP", QuickTestTool._typeToNameDic[1024] = "LAYAGL3D"
            }, QuickTestTool._countStart = function() {
                var key;
                for (key in QuickTestTool._countDic) QuickTestTool._countDic[key] = 0
            }, QuickTestTool._countEnd = function() {
                QuickTestTool._i++, QuickTestTool._i > 60 && (QuickTestTool.showCountInfo(), QuickTestTool._i = 0)
            }, QuickTestTool._addType = function(type) {
                QuickTestTool._countDic[type] ? QuickTestTool._countDic[type] += 1 : QuickTestTool._countDic[type] = 1
            }, QuickTestTool.showCountInfo = function() {
                var key;
                for (key in console.log("==================="), QuickTestTool._countDic) console.log("count:" + QuickTestTool._countDic[key]), QuickTestTool.showRenderTypeInfo(key, !0)
            }, QuickTestTool.enableQuickTest = function() {
                QuickTestTool.__init__(), Sprite.prototype.render = QuickTestTool.prototype.render, QuickTestTool._PreStageRender = Stage.prototype.render, Stage.prototype.render = QuickTestTool.prototype._stageRender
            }, QuickTestTool.showedDic = {}, QuickTestTool._rendertypeToStrDic = {}, QuickTestTool._typeToNameDic = {}, QuickTestTool._PreStageRender = null, QuickTestTool._countDic = {}, QuickTestTool._i = 0
        }(), function() {
            function ArabicReshaper() {}
            __class(ArabicReshaper, "laya.webgl.text.ArabicReshaper");
            var __proto = ArabicReshaper.prototype;
            __proto.characterMapContains = function(c) {
                for (var i = 0; i < ArabicReshaper.charsMap.length; ++i)
                    if (ArabicReshaper.charsMap[i][0] === c) return !0;
                return !1
            }, __proto.getCharRep = function(c) {
                for (var i = 0; i < ArabicReshaper.charsMap.length; ++i)
                    if (ArabicReshaper.charsMap[i][0] === c) return ArabicReshaper.charsMap[i];
                return !1
            }, __proto.getCombCharRep = function(c1, c2) {
                for (var i = 0; i < ArabicReshaper.combCharsMap.length; ++i)
                    if (ArabicReshaper.combCharsMap[i][0][0] === c1 && ArabicReshaper.combCharsMap[i][0][1] === c2) return ArabicReshaper.combCharsMap[i];
                return !1
            }, __proto.isTransparent = function(c) {
                for (var i = 0; i < ArabicReshaper.transChars.length; ++i)
                    if (ArabicReshaper.transChars[i] === c) return !0;
                return !1
            }, __proto.getOriginalCharsFromCode = function(code) {
                var j = 0;
                for (j = 0; j < ArabicReshaper.charsMap.length; ++j)
                    if (ArabicReshaper.charsMap[j].indexOf(code) > -1) return String.fromCharCode(ArabicReshaper.charsMap[j][0]);
                for (j = 0; j < ArabicReshaper.combCharsMap.length; ++j)
                    if (ArabicReshaper.combCharsMap[j].indexOf(code) > -1) return String.fromCharCode(ArabicReshaper.combCharsMap[j][0][0]) + String.fromCharCode(ArabicReshaper.combCharsMap[j][0][1]);
                return String.fromCharCode(code)
            }, __proto.convertArabic = function(normal) {
                for (var crep, combcrep, shaped = "", i = 0; i < normal.length; ++i) {
                    var current = normal.charCodeAt(i);
                    if (this.characterMapContains(current)) {
                        for (var prev = null, next = null, prevID = i - 1, nextID = i + 1; prevID >= 0 && this.isTransparent(normal.charCodeAt(prevID)); --prevID);
                        for ((!(crep = !!(prev = prevID >= 0 ? normal.charCodeAt(prevID) : null) && this.getCharRep(prev)) || null == crep[2] && null == crep[3]) && (prev = null); nextID < normal.length && this.isTransparent(normal.charCodeAt(nextID)); ++nextID);
                        if ((!(crep = !!(next = nextID < normal.length ? normal.charCodeAt(nextID) : null) && this.getCharRep(next)) || null == crep[3] && null == crep[4]) && (next = null), 1604 === current && null != next && (1570 === next || 1571 === next || 1573 === next || 1575 === next)) {
                            combcrep = this.getCombCharRep(current, next), shaped += null != prev ? String.fromCharCode(combcrep[4]) : String.fromCharCode(combcrep[1]), ++i;
                            continue
                        }
                        if (crep = this.getCharRep(current), null != prev && null != next && null != crep[3]) {
                            shaped += String.fromCharCode(crep[3]);
                            continue
                        }
                        if (null != prev && null != crep[4]) {
                            shaped += String.fromCharCode(crep[4]);
                            continue
                        }
                        if (null != next && null != crep[2]) {
                            shaped += String.fromCharCode(crep[2]);
                            continue
                        }
                        shaped += String.fromCharCode(crep[1])
                    } else shaped += String.fromCharCode(current)
                }
                return shaped
            }, __proto.convertArabicBack = function(apfb) {
                var toReturn = "",
                    selectedChar = 0,
                    i = 0;
                for (i = 0; i < apfb.length; ++i) selectedChar = apfb.charCodeAt(i), toReturn += this.getOriginalCharsFromCode(selectedChar);
                return toReturn
            }, __static(ArabicReshaper, ["charsMap", function() {
                return this.charsMap = [
                    [1569, 65152, null, null, null],
                    [1570, 65153, null, null, 65154],
                    [1571, 65155, null, null, 65156],
                    [1572, 65157, null, null, 65158],
                    [1573, 65159, null, null, 65160],
                    [1574, 65161, 65163, 65164, 65162],
                    [1575, 65165, null, null, 65166],
                    [1576, 65167, 65169, 65170, 65168],
                    [1577, 65171, null, null, 65172],
                    [1578, 65173, 65175, 65176, 65174],
                    [1579, 65177, 65179, 65180, 65178],
                    [1580, 65181, 65183, 65184, 65182],
                    [1581, 65185, 65187, 65188, 65186],
                    [1582, 65189, 65191, 65192, 65190],
                    [1583, 65193, null, null, 65194],
                    [1584, 65195, null, null, 65196],
                    [1585, 65197, null, null, 65198],
                    [1586, 65199, null, null, 65200],
                    [1587, 65201, 65203, 65204, 65202],
                    [1588, 65205, 65207, 65208, 65206],
                    [1589, 65209, 65211, 65212, 65210],
                    [1590, 65213, 65215, 65216, 65214],
                    [1591, 65217, 65219, 65220, 65218],
                    [1592, 65221, 65223, 65224, 65222],
                    [1593, 65225, 65227, 65228, 65226],
                    [1594, 65229, 65231, 65232, 65230],
                    [1600, 1600, 1600, 1600, 1600],
                    [1601, 65233, 65235, 65236, 65234],
                    [1602, 65237, 65239, 65240, 65238],
                    [1603, 65241, 65243, 65244, 65242],
                    [1604, 65245, 65247, 65248, 65246],
                    [1605, 65249, 65251, 65252, 65250],
                    [1606, 65253, 65255, 65256, 65254],
                    [1607, 65257, 65259, 65260, 65258],
                    [1608, 65261, null, null, 65262],
                    [1609, 65263, null, null, 65264],
                    [1610, 65265, 65267, 65268, 65266],
                    [1662, 64342, 64344, 64345, 64343],
                    [1740, 64508, 64510, 64511, 64509],
                    [1670, 64378, 64380, 64381, 64379],
                    [1705, 64398, 64400, 64401, 64399],
                    [1711, 64402, 64404, 64405, 64403],
                    [1688, 64394, null, null, 64395]
                ]
            }, "combCharsMap", function() {
                return this.combCharsMap = [
                    [
                        [1604, 1570], 65269, null, null, 65270
                    ],
                    [
                        [1604, 1571], 65271, null, null, 65272
                    ],
                    [
                        [1604, 1573], 65273, null, null, 65274
                    ],
                    [
                        [1604, 1575], 65275, null, null, 65276
                    ]
                ]
            }, "transChars", function() {
                return this.transChars = [1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773]
            }])
        }(), function() {
            function WebGLContext() {}
            __class(WebGLContext, "laya.webgl.WebGLContext");
            var __proto = WebGLContext.prototype;
            return __proto.getContextAttributes = function() {
                return null
            }, __proto.isContextLost = function() {}, __proto.getSupportedExtensions = function() {
                return null
            }, __proto.getExtension = function(name) {
                return null
            }, __proto.activeTexture = function(texture) {}, __proto.attachShader = function(program, shader) {}, __proto.bindAttribLocation = function(program, index, name) {}, __proto.bindBuffer = function(target, buffer) {}, __proto.bindFramebuffer = function(target, framebuffer) {}, __proto.bindRenderbuffer = function(target, renderbuffer) {}, __proto.bindTexture = function(target, texture) {}, __proto.useTexture = function(value) {}, __proto.blendColor = function(red, green, blue, alpha) {}, __proto.blendEquation = function(mode) {}, __proto.blendEquationSeparate = function(modeRGB, modeAlpha) {}, __proto.blendFunc = function(sfactor, dfactor) {}, __proto.blendFuncSeparate = function(srcRGB, dstRGB, srcAlpha, dstAlpha) {}, __proto.bufferData = function(target, size, usage) {}, __proto.bufferSubData = function(target, offset, data) {}, __proto.checkFramebufferStatus = function(target) {
                return null
            }, __proto.clear = function(mask) {}, __proto.clearColor = function(red, green, blue, alpha) {}, __proto.clearDepth = function(depth) {}, __proto.clearStencil = function(s) {}, __proto.colorMask = function(red, green, blue, alpha) {}, __proto.compileShader = function(shader) {}, __proto.copyTexImage2D = function(target, level, internalformat, x, y, width, height, border) {}, __proto.copyTexSubImage2D = function(target, level, xoffset, yoffset, x, y, width, height) {}, __proto.createBuffer = function() {}, __proto.createFramebuffer = function() {}, __proto.createProgram = function() {}, __proto.createRenderbuffer = function() {}, __proto.createShader = function(type) {}, __proto.createTexture = function() {
                return null
            }, __proto.cullFace = function(mode) {}, __proto.deleteBuffer = function(buffer) {}, __proto.deleteFramebuffer = function(framebuffer) {}, __proto.deleteProgram = function(program) {}, __proto.deleteRenderbuffer = function(renderbuffer) {}, __proto.deleteShader = function(shader) {}, __proto.deleteTexture = function(texture) {}, __proto.depthFunc = function(func) {}, __proto.depthMask = function(flag) {}, __proto.depthRange = function(zNear, zFar) {}, __proto.detachShader = function(program, shader) {}, __proto.disable = function(cap) {}, __proto.disableVertexAttribArray = function(index) {}, __proto.drawArrays = function(mode, first, count) {}, __proto.drawElements = function(mode, count, type, offset) {}, __proto.enable = function(cap) {}, __proto.enableVertexAttribArray = function(index) {}, __proto.finish = function() {}, __proto.flush = function() {}, __proto.framebufferRenderbuffer = function(target, attachment, renderbuffertarget, renderbuffer) {}, __proto.framebufferTexture2D = function(target, attachment, textarget, texture, level) {}, __proto.frontFace = function(mode) {
                return null
            }, __proto.generateMipmap = function(target) {
                return null
            }, __proto.getActiveAttrib = function(program, index) {
                return null
            }, __proto.getActiveUniform = function(program, index) {
                return null
            }, __proto.getAttribLocation = function(program, name) {
                return 0
            }, __proto.getParameter = function(pname) {
                return null
            }, __proto.getBufferParameter = function(target, pname) {
                return null
            }, __proto.getError = function() {
                return null
            }, __proto.getFramebufferAttachmentParameter = function(target, attachment, pname) {}, __proto.getProgramParameter = function(program, pname) {
                return 0
            }, __proto.getProgramInfoLog = function(program) {
                return null
            }, __proto.getRenderbufferParameter = function(target, pname) {
                return null
            }, __proto.getShaderPrecisionFormat = function(__arg) {
                return null
            }, __proto.getShaderParameter = function(shader, pname) {}, __proto.getShaderInfoLog = function(shader) {
                return null
            }, __proto.getShaderSource = function(shader) {
                return null
            }, __proto.getTexParameter = function(target, pname) {}, __proto.getUniform = function(program, location) {}, __proto.getUniformLocation = function(program, name) {
                return null
            }, __proto.getVertexAttrib = function(index, pname) {
                return null
            }, __proto.getVertexAttribOffset = function(index, pname) {
                return null
            }, __proto.hint = function(target, mode) {}, __proto.isBuffer = function(buffer) {}, __proto.isEnabled = function(cap) {}, __proto.isFramebuffer = function(framebuffer) {}, __proto.isProgram = function(program) {}, __proto.isRenderbuffer = function(renderbuffer) {}, __proto.isShader = function(shader) {}, __proto.isTexture = function(texture) {}, __proto.lineWidth = function(width) {}, __proto.linkProgram = function(program) {}, __proto.pixelStorei = function(pname, param) {}, __proto.polygonOffset = function(factor, units) {}, __proto.readPixels = function(x, y, width, height, format, type, pixels) {}, __proto.renderbufferStorage = function(target, internalformat, width, height) {}, __proto.sampleCoverage = function(value, invert) {}, __proto.scissor = function(x, y, width, height) {}, __proto.shaderSource = function(shader, source) {}, __proto.stencilFunc = function(func, ref, mask) {}, __proto.stencilFuncSeparate = function(face, func, ref, mask) {}, __proto.stencilMask = function(mask) {}, __proto.stencilMaskSeparate = function(face, mask) {}, __proto.stencilOp = function(fail, zfail, zpass) {}, __proto.stencilOpSeparate = function(face, fail, zfail, zpass) {}, __proto.texImage2D = function(__args) {}, __proto.texParameterf = function(target, pname, param) {}, __proto.texParameteri = function(target, pname, param) {}, __proto.texSubImage2D = function(__args) {}, __proto.uniform1f = function(location, x) {}, __proto.uniform1fv = function(location, v) {}, __proto.uniform1i = function(location, x) {}, __proto.uniform1iv = function(location, v) {}, __proto.uniform2f = function(location, x, y) {}, __proto.uniform2fv = function(location, v) {}, __proto.uniform2i = function(location, x, y) {}, __proto.uniform2iv = function(location, v) {}, __proto.uniform3f = function(location, x, y, z) {}, __proto.uniform3fv = function(location, v) {}, __proto.uniform3i = function(location, x, y, z) {}, __proto.uniform3iv = function(location, v) {}, __proto.uniform4f = function(location, x, y, z, w) {}, __proto.uniform4fv = function(location, v) {}, __proto.uniform4i = function(location, x, y, z, w) {}, __proto.uniform4iv = function(location, v) {}, __proto.uniformMatrix2fv = function(location, transpose, value) {}, __proto.uniformMatrix3fv = function(location, transpose, value) {}, __proto.uniformMatrix4fv = function(location, transpose, value) {}, __proto.useProgram = function(program) {}, __proto.validateProgram = function(program) {}, __proto.vertexAttrib1f = function(indx, x) {}, __proto.vertexAttrib1fv = function(indx, values) {}, __proto.vertexAttrib2f = function(indx, x, y) {}, __proto.vertexAttrib2fv = function(indx, values) {}, __proto.vertexAttrib3f = function(indx, x, y, z) {}, __proto.vertexAttrib3fv = function(indx, values) {}, __proto.vertexAttrib4f = function(indx, x, y, z, w) {}, __proto.vertexAttrib4fv = function(indx, values) {}, __proto.vertexAttribPointer = function(indx, size, type, normalized, stride, offset) {}, __proto.viewport = function(x, y, width, height) {}, __proto.configureBackBuffer = function(width, height, antiAlias, enableDepthAndStencil, wantsBestResolution) {
                void 0 === enableDepthAndStencil && (enableDepthAndStencil = !0), void 0 === wantsBestResolution && (wantsBestResolution = !1)
            }, __proto.compressedTexImage2D = function(__args) {}, __proto.createVertexArray = function() {
                throw "not implemented"
            }, __proto.bindVertexArray = function(vao) {
                throw "not implemented"
            }, __proto.deleteVertexArray = function(vao) {
                throw "not implemented"
            }, __proto.isVertexArray = function(vao) {
                throw "not implemented"
            }, WebGLContext.__init__ = function(gl) {
                if (laya.webgl.WebGLContext._checkExtensions(gl), !WebGL._isWebGL2 && !Render.isConchApp) {
                    window._setupVertexArrayObject && (Browser.onMiniGame && Browser.onIOS || Browser.onBDMiniGame || Browser.onLimixiu ? window._forceSetupVertexArrayObject(gl) : window._setupVertexArrayObject(gl));
                    var ext = (gl.rawgl || gl).getExtension("OES_vertex_array_object");
                    if (ext) {
                        console.log("EXT:webgl support OES_vertex_array_object！");
                        var glContext = gl;
                        glContext.createVertexArray = function() {
                            return ext.createVertexArrayOES()
                        }, glContext.bindVertexArray = function(vao) {
                            ext.bindVertexArrayOES(vao)
                        }, glContext.deleteVertexArray = function(vao) {
                            ext.deleteVertexArrayOES(vao)
                        }, glContext.isVertexArray = function(vao) {
                            ext.isVertexArrayOES(vao)
                        }
                    }
                }
            }, WebGLContext._getExtension = function(gl, name) {
                var prefixes = WebGLContext._extentionVendorPrefixes;
                for (var k in prefixes) {
                    var ext = gl.getExtension(prefixes[k] + name);
                    if (ext) return ext
                }
                return null
            }, WebGLContext._checkExtensions = function(gl) {
                WebGLContext._extTextureFilterAnisotropic = WebGLContext._getExtension(gl, "EXT_texture_filter_anisotropic"), WebGLContext._compressedTextureS3tc = WebGLContext._getExtension(gl, "WEBGL_compressed_texture_s3tc"), WebGLContext._compressedTexturePvrtc = WebGLContext._getExtension(gl, "WEBGL_compressed_texture_pvrtc"), WebGLContext._compressedTextureEtc1 = WebGLContext._getExtension(gl, "WEBGL_compressed_texture_etc1"), WebGLContext._angleInstancedArrays = WebGLContext._getExtension(gl, "ANGLE_instanced_arrays")
            }, WebGLContext.__init_native = function() {
                if (Render.supportWebGLPlusRendering) {
                    var webGLContext = WebGLContext;
                    webGLContext.activeTexture = webGLContext.activeTextureForNative, webGLContext.bindTexture = webGLContext.bindTextureForNative
                }
            }, WebGLContext.useProgram = function(gl, program) {
                return WebGLContext._useProgram !== program && (gl.useProgram(program), WebGLContext._useProgram = program, !0)
            }, WebGLContext.setDepthTest = function(gl, value) {
                value !== WebGLContext._depthTest && (WebGLContext._depthTest = value, value ? gl.enable(2929) : gl.disable(2929))
            }, WebGLContext.setDepthMask = function(gl, value) {
                value !== WebGLContext._depthMask && (WebGLContext._depthMask = value, gl.depthMask(value))
            }, WebGLContext.setDepthFunc = function(gl, value) {
                value !== WebGLContext._depthFunc && (WebGLContext._depthFunc = value, gl.depthFunc(value))
            }, WebGLContext.setBlend = function(gl, value) {
                value !== WebGLContext._blend && (WebGLContext._blend = value, value ? gl.enable(3042) : gl.disable(3042))
            }, WebGLContext.setBlendFunc = function(gl, sFactor, dFactor) {
                (sFactor !== WebGLContext._sFactor || dFactor !== WebGLContext._dFactor) && (WebGLContext._sFactor = WebGLContext._srcAlpha = sFactor, WebGLContext._dFactor = WebGLContext._dstAlpha = dFactor, gl.blendFunc(sFactor, dFactor))
            }, WebGLContext.setBlendFuncSeperate = function(gl, srcRGB, dstRGB, srcAlpha, dstAlpha) {
                srcRGB === WebGLContext._sFactor && dstRGB === WebGLContext._dFactor && srcAlpha === WebGLContext._srcAlpha && dstAlpha === WebGLContext._dstAlpha || (WebGLContext._sFactor = srcRGB, WebGLContext._dFactor = dstRGB, WebGLContext._srcAlpha = srcAlpha, WebGLContext._dstAlpha = dstAlpha, gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha))
            }, WebGLContext.setCullFace = function(gl, value) {
                value !== WebGLContext._cullFace && (WebGLContext._cullFace = value, value ? gl.enable(2884) : gl.disable(2884))
            }, WebGLContext.setFrontFace = function(gl, value) {
                value !== WebGLContext._frontFace && (WebGLContext._frontFace = value, gl.frontFace(value))
            }, WebGLContext.activeTexture = function(gl, textureID) {
                WebGLContext._activedTextureID !== textureID && (gl.activeTexture(textureID), WebGLContext._activedTextureID = textureID)
            }, WebGLContext.bindTexture = function(gl, target, texture) {
                WebGLContext._activeTextures[WebGLContext._activedTextureID - 33984] !== texture && (gl.bindTexture(target, texture), WebGLContext._activeTextures[WebGLContext._activedTextureID - 33984] = texture)
            }, WebGLContext.useProgramForNative = function(gl, program) {
                return gl.useProgram(program), !0
            }, WebGLContext.setDepthTestForNative = function(gl, value) {
                value ? gl.enable(2929) : gl.disable(2929)
            }, WebGLContext.setDepthMaskForNative = function(gl, value) {
                gl.depthMask(value)
            }, WebGLContext.setDepthFuncForNative = function(gl, value) {
                gl.depthFunc(value)
            }, WebGLContext.setBlendForNative = function(gl, value) {
                value ? gl.enable(3042) : gl.disable(3042)
            }, WebGLContext.setBlendFuncForNative = function(gl, sFactor, dFactor) {
                gl.blendFunc(sFactor, dFactor)
            }, WebGLContext.setCullFaceForNative = function(gl, value) {
                value ? gl.enable(2884) : gl.disable(2884)
            }, WebGLContext.setFrontFaceForNative = function(gl, value) {
                gl.frontFace(value)
            }, WebGLContext.activeTextureForNative = function(gl, textureID) {
                gl.activeTexture(textureID)
            }, WebGLContext.bindTextureForNative = function(gl, target, texture) {
                gl.bindTexture(target, texture)
            }, WebGLContext.bindVertexArrayForNative = function(gl, vertexArray) {
                gl.bindVertexArray(vertexArray)
            }, WebGLContext.DEPTH_BUFFER_BIT = 256, WebGLContext.STENCIL_BUFFER_BIT = 1024, WebGLContext.COLOR_BUFFER_BIT = 16384, WebGLContext.POINTS = 0, WebGLContext.LINES = 1, WebGLContext.LINE_LOOP = 2, WebGLContext.LINE_STRIP = 3, WebGLContext.TRIANGLES = 4, WebGLContext.TRIANGLE_STRIP = 5, WebGLContext.TRIANGLE_FAN = 6, WebGLContext.ZERO = 0, WebGLContext.ONE = 1, WebGLContext.SRC_COLOR = 768, WebGLContext.ONE_MINUS_SRC_COLOR = 769, WebGLContext.SRC_ALPHA = 770, WebGLContext.ONE_MINUS_SRC_ALPHA = 771, WebGLContext.DST_ALPHA = 772, WebGLContext.ONE_MINUS_DST_ALPHA = 773, WebGLContext.DST_COLOR = 774, WebGLContext.ONE_MINUS_DST_COLOR = 775, WebGLContext.SRC_ALPHA_SATURATE = 776, WebGLContext.FUNC_ADD = 32774, WebGLContext.BLEND_EQUATION = 32777, WebGLContext.BLEND_EQUATION_RGB = 32777, WebGLContext.BLEND_EQUATION_ALPHA = 34877, WebGLContext.FUNC_SUBTRACT = 32778, WebGLContext.FUNC_REVERSE_SUBTRACT = 32779, WebGLContext.BLEND_DST_RGB = 32968, WebGLContext.BLEND_SRC_RGB = 32969, WebGLContext.BLEND_DST_ALPHA = 32970, WebGLContext.BLEND_SRC_ALPHA = 32971, WebGLContext.CONSTANT_COLOR = 32769, WebGLContext.ONE_MINUS_CONSTANT_COLOR = 32770, WebGLContext.CONSTANT_ALPHA = 32771, WebGLContext.ONE_MINUS_CONSTANT_ALPHA = 32772, WebGLContext.BLEND_COLOR = 32773, WebGLContext.ARRAY_BUFFER = 34962, WebGLContext.ELEMENT_ARRAY_BUFFER = 34963, WebGLContext.ARRAY_BUFFER_BINDING = 34964, WebGLContext.ELEMENT_ARRAY_BUFFER_BINDING = 34965, WebGLContext.STREAM_DRAW = 35040, WebGLContext.STATIC_DRAW = 35044, WebGLContext.DYNAMIC_DRAW = 35048, WebGLContext.BUFFER_SIZE = 34660, WebGLContext.BUFFER_USAGE = 34661, WebGLContext.CURRENT_VERTEX_ATTRIB = 34342, WebGLContext.FRONT = 1028, WebGLContext.BACK = 1029, WebGLContext.CULL_FACE = 2884, WebGLContext.FRONT_AND_BACK = 1032, WebGLContext.BLEND = 3042, WebGLContext.DITHER = 3024, WebGLContext.STENCIL_TEST = 2960, WebGLContext.DEPTH_TEST = 2929, WebGLContext.SCISSOR_TEST = 3089, WebGLContext.POLYGON_OFFSET_FILL = 32823, WebGLContext.SAMPLE_ALPHA_TO_COVERAGE = 32926, WebGLContext.SAMPLE_COVERAGE = 32928, WebGLContext.NO_ERROR = 0, WebGLContext.INVALID_ENUM = 1280, WebGLContext.INVALID_VALUE = 1281, WebGLContext.INVALID_OPERATION = 1282, WebGLContext.OUT_OF_MEMORY = 1285, WebGLContext.CW = 2304, WebGLContext.CCW = 2305, WebGLContext.LINE_WIDTH = 2849, WebGLContext.ALIASED_POINT_SIZE_RANGE = 33901, WebGLContext.ALIASED_LINE_WIDTH_RANGE = 33902, WebGLContext.CULL_FACE_MODE = 2885, WebGLContext.FRONT_FACE = 2886, WebGLContext.DEPTH_RANGE = 2928, WebGLContext.DEPTH_WRITEMASK = 2930, WebGLContext.DEPTH_CLEAR_VALUE = 2931, WebGLContext.DEPTH_FUNC = 2932, WebGLContext.STENCIL_CLEAR_VALUE = 2961, WebGLContext.STENCIL_FUNC = 2962, WebGLContext.STENCIL_FAIL = 2964, WebGLContext.STENCIL_PASS_DEPTH_FAIL = 2965, WebGLContext.STENCIL_PASS_DEPTH_PASS = 2966, WebGLContext.STENCIL_REF = 2967, WebGLContext.STENCIL_VALUE_MASK = 2963, WebGLContext.STENCIL_WRITEMASK = 2968, WebGLContext.STENCIL_BACK_FUNC = 34816, WebGLContext.STENCIL_BACK_FAIL = 34817, WebGLContext.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, WebGLContext.STENCIL_BACK_PASS_DEPTH_PASS = 34819, WebGLContext.STENCIL_BACK_REF = 36003, WebGLContext.STENCIL_BACK_VALUE_MASK = 36004, WebGLContext.STENCIL_BACK_WRITEMASK = 36005, WebGLContext.VIEWPORT = 2978, WebGLContext.SCISSOR_BOX = 3088, WebGLContext.COLOR_CLEAR_VALUE = 3106, WebGLContext.COLOR_WRITEMASK = 3107, WebGLContext.UNPACK_ALIGNMENT = 3317, WebGLContext.PACK_ALIGNMENT = 3333, WebGLContext.MAX_TEXTURE_SIZE = 3379, WebGLContext.MAX_VIEWPORT_DIMS = 3386, WebGLContext.SUBPIXEL_BITS = 3408, WebGLContext.RED_BITS = 3410, WebGLContext.GREEN_BITS = 3411, WebGLContext.BLUE_BITS = 3412, WebGLContext.ALPHA_BITS = 3413, WebGLContext.DEPTH_BITS = 3414, WebGLContext.STENCIL_BITS = 3415, WebGLContext.POLYGON_OFFSET_UNITS = 10752, WebGLContext.POLYGON_OFFSET_FACTOR = 32824, WebGLContext.TEXTURE_BINDING_2D = 32873, WebGLContext.SAMPLE_BUFFERS = 32936, WebGLContext.SAMPLES = 32937, WebGLContext.SAMPLE_COVERAGE_VALUE = 32938, WebGLContext.SAMPLE_COVERAGE_INVERT = 32939, WebGLContext.NUM_COMPRESSED_TEXTURE_FORMATS = 34466, WebGLContext.COMPRESSED_TEXTURE_FORMATS = 34467, WebGLContext.DONT_CARE = 4352, WebGLContext.FASTEST = 4353, WebGLContext.NICEST = 4354, WebGLContext.GENERATE_MIPMAP_HINT = 33170, WebGLContext.BYTE = 5120, WebGLContext.UNSIGNED_BYTE = 5121, WebGLContext.SHORT = 5122, WebGLContext.UNSIGNED_SHORT = 5123, WebGLContext.INT = 5124, WebGLContext.UNSIGNED_INT = 5125, WebGLContext.FLOAT = 5126, WebGLContext.DEPTH_COMPONENT = 6402, WebGLContext.ALPHA = 6406, WebGLContext.RGB = 6407, WebGLContext.RGBA = 6408, WebGLContext.LUMINANCE = 6409, WebGLContext.LUMINANCE_ALPHA = 6410, WebGLContext.UNSIGNED_SHORT_4_4_4_4 = 32819, WebGLContext.UNSIGNED_SHORT_5_5_5_1 = 32820, WebGLContext.UNSIGNED_SHORT_5_6_5 = 33635, WebGLContext.FRAGMENT_SHADER = 35632, WebGLContext.VERTEX_SHADER = 35633, WebGLContext.MAX_VERTEX_ATTRIBS = 34921, WebGLContext.MAX_VERTEX_UNIFORM_VECTORS = 36347, WebGLContext.MAX_VARYING_VECTORS = 36348, WebGLContext.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, WebGLContext.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, WebGLContext.MAX_TEXTURE_IMAGE_UNITS = 34930, WebGLContext.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, WebGLContext.SHADER_TYPE = 35663, WebGLContext.DELETE_STATUS = 35712, WebGLContext.LINK_STATUS = 35714, WebGLContext.VALIDATE_STATUS = 35715, WebGLContext.ATTACHED_SHADERS = 35717, WebGLContext.ACTIVE_UNIFORMS = 35718, WebGLContext.ACTIVE_ATTRIBUTES = 35721, WebGLContext.SHADING_LANGUAGE_VERSION = 35724, WebGLContext.CURRENT_PROGRAM = 35725, WebGLContext.NEVER = 512, WebGLContext.LESS = 513, WebGLContext.EQUAL = 514, WebGLContext.LEQUAL = 515, WebGLContext.GREATER = 516, WebGLContext.NOTEQUAL = 517, WebGLContext.GEQUAL = 518, WebGLContext.ALWAYS = 519, WebGLContext.KEEP = 7680, WebGLContext.REPLACE = 7681, WebGLContext.INCR = 7682, WebGLContext.DECR = 7683, WebGLContext.INVERT = 5386, WebGLContext.INCR_WRAP = 34055, WebGLContext.DECR_WRAP = 34056, WebGLContext.VENDOR = 7936, WebGLContext.RENDERER = 7937, WebGLContext.VERSION = 7938, WebGLContext.NEAREST = 9728, WebGLContext.LINEAR = 9729, WebGLContext.NEAREST_MIPMAP_NEAREST = 9984, WebGLContext.LINEAR_MIPMAP_NEAREST = 9985, WebGLContext.NEAREST_MIPMAP_LINEAR = 9986, WebGLContext.LINEAR_MIPMAP_LINEAR = 9987, WebGLContext.TEXTURE_MAG_FILTER = 10240, WebGLContext.TEXTURE_MIN_FILTER = 10241, WebGLContext.TEXTURE_WRAP_S = 10242, WebGLContext.TEXTURE_WRAP_T = 10243, WebGLContext.TEXTURE_2D = 3553, WebGLContext.TEXTURE_3D = 32879, WebGLContext.TEXTURE = 5890, WebGLContext.TEXTURE_CUBE_MAP = 34067, WebGLContext.TEXTURE_BINDING_CUBE_MAP = 34068, WebGLContext.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, WebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, WebGLContext.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, WebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, WebGLContext.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, WebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, WebGLContext.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, WebGLContext.TEXTURE0 = 33984, WebGLContext.TEXTURE1 = 33985, WebGLContext.TEXTURE2 = 33986, WebGLContext.TEXTURE3 = 33987, WebGLContext.TEXTURE4 = 33988, WebGLContext.TEXTURE5 = 33989, WebGLContext.TEXTURE6 = 33990, WebGLContext.TEXTURE7 = 33991, WebGLContext.TEXTURE8 = 33992, WebGLContext.TEXTURE9 = 33993, WebGLContext.TEXTURE10 = 33994, WebGLContext.TEXTURE11 = 33995, WebGLContext.TEXTURE12 = 33996, WebGLContext.TEXTURE13 = 33997, WebGLContext.TEXTURE14 = 33998, WebGLContext.TEXTURE15 = 33999, WebGLContext.TEXTURE16 = 34e3, WebGLContext.TEXTURE17 = 34001, WebGLContext.TEXTURE18 = 34002, WebGLContext.TEXTURE19 = 34003, WebGLContext.TEXTURE20 = 34004, WebGLContext.TEXTURE21 = 34005, WebGLContext.TEXTURE22 = 34006, WebGLContext.TEXTURE23 = 34007, WebGLContext.TEXTURE24 = 34008, WebGLContext.TEXTURE25 = 34009, WebGLContext.TEXTURE26 = 34010, WebGLContext.TEXTURE27 = 34011, WebGLContext.TEXTURE28 = 34012, WebGLContext.TEXTURE29 = 34013, WebGLContext.TEXTURE30 = 34014, WebGLContext.TEXTURE31 = 34015, WebGLContext.ACTIVE_TEXTURE = 34016, WebGLContext.REPEAT = 10497, WebGLContext.CLAMP_TO_EDGE = 33071, WebGLContext.MIRRORED_REPEAT = 33648, WebGLContext.FLOAT_VEC2 = 35664, WebGLContext.FLOAT_VEC3 = 35665, WebGLContext.FLOAT_VEC4 = 35666, WebGLContext.INT_VEC2 = 35667, WebGLContext.INT_VEC3 = 35668, WebGLContext.INT_VEC4 = 35669, WebGLContext.BOOL = 35670, WebGLContext.BOOL_VEC2 = 35671, WebGLContext.BOOL_VEC3 = 35672, WebGLContext.BOOL_VEC4 = 35673, WebGLContext.FLOAT_MAT2 = 35674, WebGLContext.FLOAT_MAT3 = 35675, WebGLContext.FLOAT_MAT4 = 35676, WebGLContext.SAMPLER_2D = 35678, WebGLContext.SAMPLER_CUBE = 35680, WebGLContext.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, WebGLContext.VERTEX_ATTRIB_ARRAY_SIZE = 34339, WebGLContext.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, WebGLContext.VERTEX_ATTRIB_ARRAY_TYPE = 34341, WebGLContext.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, WebGLContext.VERTEX_ATTRIB_ARRAY_POINTER = 34373, WebGLContext.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, WebGLContext.COMPILE_STATUS = 35713, WebGLContext.LOW_FLOAT = 36336, WebGLContext.MEDIUM_FLOAT = 36337, WebGLContext.HIGH_FLOAT = 36338, WebGLContext.LOW_INT = 36339, WebGLContext.MEDIUM_INT = 36340, WebGLContext.HIGH_INT = 36341, WebGLContext.FRAMEBUFFER = 36160, WebGLContext.RENDERBUFFER = 36161, WebGLContext.RGBA4 = 32854, WebGLContext.RGB5_A1 = 32855, WebGLContext.RGB565 = 36194, WebGLContext.DEPTH_COMPONENT16 = 33189, WebGLContext.STENCIL_INDEX = 6401, WebGLContext.STENCIL_INDEX8 = 36168, WebGLContext.DEPTH_STENCIL = 34041, WebGLContext.RENDERBUFFER_WIDTH = 36162, WebGLContext.RENDERBUFFER_HEIGHT = 36163, WebGLContext.RENDERBUFFER_INTERNAL_FORMAT = 36164, WebGLContext.RENDERBUFFER_RED_SIZE = 36176, WebGLContext.RENDERBUFFER_GREEN_SIZE = 36177, WebGLContext.RENDERBUFFER_BLUE_SIZE = 36178, WebGLContext.RENDERBUFFER_ALPHA_SIZE = 36179, WebGLContext.RENDERBUFFER_DEPTH_SIZE = 36180, WebGLContext.RENDERBUFFER_STENCIL_SIZE = 36181, WebGLContext.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, WebGLContext.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, WebGLContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, WebGLContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, WebGLContext.COLOR_ATTACHMENT0 = 36064, WebGLContext.DEPTH_ATTACHMENT = 36096, WebGLContext.STENCIL_ATTACHMENT = 36128, WebGLContext.DEPTH_STENCIL_ATTACHMENT = 33306, WebGLContext.NONE = 0, WebGLContext.FRAMEBUFFER_COMPLETE = 36053, WebGLContext.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, WebGLContext.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, WebGLContext.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, WebGLContext.FRAMEBUFFER_UNSUPPORTED = 36061, WebGLContext.FRAMEBUFFER_BINDING = 36006, WebGLContext.RENDERBUFFER_BINDING = 36007, WebGLContext.MAX_RENDERBUFFER_SIZE = 34024, WebGLContext.INVALID_FRAMEBUFFER_OPERATION = 1286, WebGLContext.UNPACK_FLIP_Y_WEBGL = 37440, WebGLContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, WebGLContext.CONTEXT_LOST_WEBGL = 37442, WebGLContext.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, WebGLContext.BROWSER_DEFAULT_WEBGL = 37444, WebGLContext._extTextureFilterAnisotropic = null, WebGLContext._compressedTextureS3tc = null, WebGLContext._compressedTexturePvrtc = null, WebGLContext._compressedTextureEtc1 = null, WebGLContext._angleInstancedArrays = null, WebGLContext._glTextureIDs = [33984, 33985, 33986, 33987, 33988, 33989, 33990, 33991], WebGLContext._useProgram = null, WebGLContext._depthTest = !0, WebGLContext._depthMask = !0, WebGLContext._blend = !1, WebGLContext._cullFace = !1, WebGLContext._activedTextureID = 33984, __static(WebGLContext, ["_extentionVendorPrefixes", function() {
                return this._extentionVendorPrefixes = ["", "WEBKIT_", "MOZ_"]
            }, "_activeTextures", function() {
                return this._activeTextures = new Array(8)
            }, "_depthFunc", function() {
                return this._depthFunc = 513
            }, "_sFactor", function() {
                return this._sFactor = 1
            }, "_dFactor", function() {
                return this._dFactor = 0
            }, "_srcAlpha", function() {
                return this._srcAlpha = 1
            }, "_dstAlpha", function() {
                return this._dstAlpha = 0
            }, "_frontFace", function() {
                return this._frontFace = 2305
            }]), WebGLContext
        }()),
        Buffer = function() {
            function Buffer() {
                this._glBuffer = null, this._buffer = null, this._bufferType = 0, this._bufferUsage = 0, this._byteLength = 0, this._glBuffer = LayaGL.instance.createBuffer()
            }
            __class(Buffer, "laya.webgl.utils.Buffer");
            var __proto = Buffer.prototype;
            return __proto._bindForVAO = function() {}, __proto.bind = function() {
                return !1
            }, __proto.destroy = function() {
                this._glBuffer && (LayaGL.instance.deleteBuffer(this._glBuffer), this._glBuffer = null)
            }, __getset(0, __proto, "bufferUsage", function() {
                return this._bufferUsage
            }), Buffer._bindedVertexBuffer = null, Buffer._bindedIndexBuffer = null, Buffer
        }(),
        InlcudeFile = function() {
            function InlcudeFile(txt) {
                this.script = null, this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "", this.script = txt;
                for (var begin = 0, ofs = 0, end = 0; !((begin = txt.indexOf("#begin", begin)) < 0);) {
                    for (end = begin + 5; !((end = txt.indexOf("#end", end)) < 0) && "i" === txt.charAt(end + 4);) end += 5;
                    if (end < 0) throw "add include err,no #end:" + txt;
                    ofs = txt.indexOf("\n", begin);
                    var words = ShaderCompile.splitToWords(txt.substr(begin, ofs - begin), null);
                    "code" == words[1] ? this.codes[words[2]] = txt.substr(ofs + 1, end - ofs - 1) : "function" == words[1] && (ofs = txt.indexOf("function", begin), ofs += "function".length, this.funs[words[3]] = txt.substr(ofs + 1, end - ofs - 1), this.funnames += words[3] + ";"), begin = end + 1
                }
            }
            __class(InlcudeFile, "laya.webgl.utils.InlcudeFile");
            var __proto = InlcudeFile.prototype;
            return __proto.getWith = function(name) {
                var r = name ? this.codes[name] : this.script;
                if (!r) throw "get with error:" + name;
                return r
            }, __proto.getFunsScript = function(funsdef) {
                var r = "";
                for (var i in this.funs) funsdef.indexOf(i + ";") >= 0 && (r += this.funs[i]);
                return r
            }, InlcudeFile
        }(),
        BlendMode = function() {
            function BlendMode() {}
            return __class(BlendMode, "laya.webgl.canvas.BlendMode"), BlendMode._init_ = function(gl) {
                BlendMode.fns = [BlendMode.BlendNormal, BlendMode.BlendAdd, BlendMode.BlendMultiply, BlendMode.BlendScreen, BlendMode.BlendOverlay, BlendMode.BlendLight, BlendMode.BlendMask, BlendMode.BlendDestinationOut], BlendMode.targetFns = [BlendMode.BlendNormalTarget, BlendMode.BlendAddTarget, BlendMode.BlendMultiplyTarget, BlendMode.BlendScreenTarget, BlendMode.BlendOverlayTarget, BlendMode.BlendLightTarget, BlendMode.BlendMask, BlendMode.BlendDestinationOut]
            }, BlendMode.BlendNormal = function(gl) {
                WebGLContext.setBlendFunc(gl, 1, 771)
            }, BlendMode.BlendAdd = function(gl) {
                WebGLContext.setBlendFunc(gl, 1, 772)
            }, BlendMode.BlendMultiply = function(gl) {
                WebGLContext.setBlendFunc(gl, 774, 771)
            }, BlendMode.BlendScreen = function(gl) {
                WebGLContext.setBlendFunc(gl, 1, 1)
            }, BlendMode.BlendOverlay = function(gl) {
                WebGLContext.setBlendFunc(gl, 1, 769)
            }, BlendMode.BlendLight = function(gl) {
                WebGLContext.setBlendFunc(gl, 1, 1)
            }, BlendMode.BlendNormalTarget = function(gl) {
                WebGLContext.setBlendFunc(gl, 1, 771)
            }, BlendMode.BlendAddTarget = function(gl) {
                WebGLContext.setBlendFunc(gl, 1, 772)
            }, BlendMode.BlendMultiplyTarget = function(gl) {
                WebGLContext.setBlendFunc(gl, 774, 771)
            }, BlendMode.BlendScreenTarget = function(gl) {
                WebGLContext.setBlendFunc(gl, 1, 1)
            }, BlendMode.BlendOverlayTarget = function(gl) {
                WebGLContext.setBlendFunc(gl, 1, 769)
            }, BlendMode.BlendLightTarget = function(gl) {
                WebGLContext.setBlendFunc(gl, 1, 1)
            }, BlendMode.BlendMask = function(gl) {
                WebGLContext.setBlendFunc(gl, 0, 770)
            }, BlendMode.BlendDestinationOut = function(gl) {
                WebGLContext.setBlendFunc(gl, 0, 0)
            }, BlendMode.activeBlendFunction = null, BlendMode.NAMES = ["normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out"], BlendMode.TOINT = {
                normal: 0,
                add: 1,
                multiply: 2,
                screen: 3,
                overlay: 4,
                light: 5,
                mask: 6,
                "destination-out": 7,
                lighter: 1
            }, BlendMode.NORMAL = "normal", BlendMode.ADD = "add", BlendMode.MULTIPLY = "multiply", BlendMode.SCREEN = "screen", BlendMode.OVERLAY = "overlay", BlendMode.LIGHT = "light", BlendMode.MASK = "mask", BlendMode.DESTINATIONOUT = "destination-out", BlendMode.LIGHTER = "lighter", BlendMode.fns = [], BlendMode.targetFns = [], BlendMode
        }(),
        WebGL = function() {
            function WebGL() {}
            return __class(WebGL, "laya.webgl.WebGL"), WebGL._uint8ArraySlice = function() {
                for (var sz = this.length, dec = new Uint8Array(this.length), i = 0; i < sz; i++) dec[i] = this[i];
                return dec
            }, WebGL._float32ArraySlice = function() {
                for (var sz = this.length, dec = new Float32Array(this.length), i = 0; i < sz; i++) dec[i] = this[i];
                return dec
            }, WebGL._uint16ArraySlice = function(__arg) {
                var dec, arg = arguments,
                    sz = 0,
                    i = 0;
                if (0 === arg.length)
                    for (sz = this.length, dec = new Uint16Array(sz), i = 0; i < sz; i++) dec[i] = this[i];
                else if (2 === arg.length) {
                    var start = arg[0],
                        end = arg[1];
                    if (end > start)
                        for (sz = end - start, dec = new Uint16Array(sz), i = start; i < end; i++) dec[i - start] = this[i];
                    else dec = new Uint16Array(0)
                }
                return dec
            }, WebGL._nativeRender_enable = function() {
                WebGL.isNativeRender_enable || (WebGL.isNativeRender_enable = !0, HTMLImage.create = function(width, height) {
                    var tex = new Texture2D(width, height, 1, !1, !1);
                    return tex.wrapModeU = 1, tex.wrapModeV = 1, tex
                }, WebGLContext.__init_native(), Shader.prototype.uploadTexture2D = function(value) {
                    var CTX = WebGLContext;
                    CTX.bindTexture(laya.webgl.WebGL.mainContext, CTX.TEXTURE_2D, value)
                }, RenderState2D.width = Browser.window.innerWidth, RenderState2D.height = Browser.window.innerHeight, RunDriver.measureText = function(txt, font) {
                    return window.conchTextCanvas.font = font, window.conchTextCanvas.measureText(txt)
                }, RunDriver.enableNative = function() {
                    Render.supportWebGLPlusRendering && (LayaGLRunner.uploadShaderUniforms = LayaGLRunner.uploadShaderUniformsForNative, CommandEncoder = window.GLCommandEncoder, LayaGL = window.LayaGLContext);
                    var stage = Stage;
                    stage.prototype.render = stage.prototype.renderToNative
                }, RunDriver.clear = function(color) {
                    WebGLContext2D.set2DRenderConfig();
                    var c = ColorUtils.create(color).arrColor,
                        gl = LayaGL.instance;
                    c && gl.clearColor(c[0], c[1], c[2], c[3]), gl.clear(17664), RenderState2D.clear()
                }, RunDriver.drawToCanvas = function(sprite, _renderType, canvasWidth, canvasHeight, offsetX, offsetY) {
                    offsetX -= sprite.x, offsetY -= sprite.y, offsetX |= 0, offsetY |= 0, canvasWidth |= 0, canvasHeight |= 0;
                    var canv = new HTMLCanvas(!1),
                        ctx = canv.getContext("2d");
                    return canv.size(canvasWidth, canvasHeight), ctx.asBitmap = !0, ctx._targets.start(), RenderSprite.renders[_renderType]._fun(sprite, ctx, offsetX, offsetY), ctx.flush(), ctx._targets.end(), ctx._targets.restore(), canv
                }, RenderTexture2D.prototype._uv = RenderTexture2D.flipyuv, Object.defineProperty(RenderTexture2D.prototype, "uv", {
                    get: function() {
                        return this._uv
                    },
                    set: function(v) {
                        this._uv = v
                    }
                }), HTMLCanvas.prototype.getTexture = function() {
                    return this._texture || (this._texture = this.context._targets, this._texture.uv = RenderTexture2D.flipyuv, this._texture.bitmap = this._texture), this._texture
                })
            }, WebGL._webglRender_enable = function() {
                Render.isWebGL || (Render.isWebGL = !0, RunDriver.initRender = function(canvas, w, h) {
                    var gl = LayaGL.instance = laya.webgl.WebGL.mainContext = function(canvas) {
                        var gl, names = ["webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
                        Config.useWebGL2 || names.shift();
                        for (var i = 0; i < names.length; i++) {
                            try {
                                gl = canvas.getContext(names[i], {
                                    stencil: Config.isStencil,
                                    alpha: Config.isAlpha,
                                    antialias: Config.isAntialias,
                                    premultipliedAlpha: Config.premultipliedAlpha,
                                    preserveDrawingBuffer: Config.preserveDrawingBuffer
                                })
                            } catch (e) {}
                            if (gl) return "webgl2" === names[i] && (laya.webgl.WebGL._isWebGL2 = !0), new LayaGL, gl
                        }
                        return null
                    }(Render._mainCanvas.source);
                    if (!gl) return !1;
                    canvas.size(w, h), WebGLContext.__init__(gl), WebGLContext2D.__init__(), Submit.__init__();
                    var ctx = new WebGLContext2D;
                    Render._context = ctx, canvas._setContext(ctx), laya.webgl.WebGL.shaderHighPrecision = !1;
                    try {
                        gl.getShaderPrecisionFormat(35632, 36338).precision ? WebGL.shaderHighPrecision = !0 : WebGL.shaderHighPrecision = !1
                    } catch (e) {}
                    return LayaGL.instance = gl, System.__init__(), ShaderDefines2D.__init__(), Value2D.__init__(), Shader2D.__init__(), Buffer2D.__int__(gl), BlendMode._init_(gl), !0
                }, HTMLImage.create = function(width, height, format) {
                    var tex = new Texture2D(width, height, format, !1, !1);
                    return tex.wrapModeU = 1, tex.wrapModeV = 1, tex
                }, RunDriver.createRenderSprite = function(type, next) {
                    return new RenderSprite3D(type, next)
                }, RunDriver.changeWebGLSize = function(width, height) {
                    laya.webgl.WebGL.onStageResize(width, height)
                }, RunDriver.clear = function(color) {
                    WebGLContext2D.set2DRenderConfig(), RenderState2D.worldScissorTest && laya.webgl.WebGL.mainContext.disable(3089);
                    var ctx = Render.context,
                        c = 0 == ctx._submits._length || Config.preserveDrawingBuffer ? ColorUtils.create(color).arrColor : Laya.stage._wgColor;
                    c ? ctx.clearBG(c[0], c[1], c[2], c[3]) : ctx.clearBG(0, 0, 0, 0), RenderState2D.clear()
                }, RunDriver.drawToCanvas = function(sprite, _renderType, canvasWidth, canvasHeight, offsetX, offsetY) {
                    offsetX -= sprite.x, offsetY -= sprite.y, offsetX |= 0, offsetY |= 0, canvasWidth |= 0, canvasHeight |= 0;
                    var ctx = new WebGLContext2D;
                    ctx.size(canvasWidth, canvasHeight), ctx.asBitmap = !0, ctx._targets.start(), RenderSprite.renders[_renderType]._fun(sprite, ctx, offsetX, offsetY), ctx.flush(), ctx._targets.end(), ctx._targets.restore();
                    var dt = ctx._targets.getData(0, 0, canvasWidth, canvasHeight);
                    ctx.destroy();
                    for (var imgdata = new ImageData(canvasWidth, canvasHeight), lineLen = 4 * canvasWidth, dst = (new Uint8Array(lineLen), imgdata.data), y = canvasHeight - 1, off = y * lineLen, srcoff = 0; y >= 0; y--) dst.set(dt.subarray(srcoff, srcoff + lineLen), off), off -= lineLen, srcoff += lineLen;
                    var canv = new HTMLCanvas(!0);
                    return canv.size(canvasWidth, canvasHeight), canv.getContext("2d").putImageData(imgdata, 0, 0), canv
                }, RunDriver.getTexturePixels = function(value, x, y, width, height) {
                    var st = 0,
                        dst = 0,
                        i = 0,
                        tex2d = value.bitmap,
                        texw = tex2d.width,
                        texh = tex2d.height;
                    if (x + width > texw && (width -= x + width - texw), y + height > texh && (height -= y + height - texh), width <= 0 || height <= 0) return null;
                    var wstride = 4 * width,
                        pix = null;
                    try {
                        pix = tex2d.getPixels()
                    } catch (e) {}
                    if (pix) {
                        if (0 == x && 0 == y && width == texw && height == texh) return pix;
                        var ret = new Uint8Array(width * height * 4);
                        for (st = 4 * x, dst = (y + height - 1) * (wstride = 4 * texw) + 4 * x, i = height - 1; i >= 0; i--) ret.set(dt.slice(dst, dst + 4 * width), st), st += wstride, dst -= wstride;
                        return ret
                    }
                    var ctx = new WebGLContext2D;
                    ctx.size(width, height), ctx.asBitmap = !0;
                    var uv = null;
                    if (0 != x || 0 != y || width != texw || height != texh) {
                        var stu = (uv = value.uv.concat())[0],
                            stv = uv[1],
                            uk = (uv[2] - stu) / texw,
                            vk = (uv[7] - stv) / texh;
                        uv = [stu + x * uk, stv + y * vk, stu + (x + width) * uk, stv + y * vk, stu + (x + width) * uk, stv + (y + height) * vk, stu + x * uk, stv + (y + height) * vk]
                    }
                    ctx._drawTextureM(value, 0, 0, width, height, null, 1, uv), ctx._targets.start(), ctx.flush(), ctx._targets.end(), ctx._targets.restore();
                    var dt = ctx._targets.getData(0, 0, width, height);
                    for (ctx.destroy(), ret = new Uint8Array(width * height * 4), st = 0, dst = (height - 1) * wstride, i = height - 1; i >= 0; i--) ret.set(dt.slice(dst, dst + wstride), st), st += wstride, dst -= wstride;
                    return ret
                }, Filter._filter = function(sprite, context, x, y) {
                    var webglctx = context,
                        next = this._next;
                    if (next) {
                        var filters = sprite.filters,
                            len = filters.length;
                        if (1 == len && 32 == filters[0].type) return context.save(), context.setColorFilter(filters[0]), next._fun.call(next, sprite, context, x, y), void context.restore();
                        var b, svCP = Value2D.create(1, 0),
                            p = Point.TEMP,
                            tMatrix = webglctx._curMat,
                            mat = Matrix.create();
                        tMatrix.copyTo(mat);
                        var tPadding = 0,
                            tHalfPadding = 0,
                            source = null,
                            out = sprite._cacheStyle.filterCache || null;
                        if (out && 0 == sprite.getRepaint()) {
                            if ((sprite._cacheStyle.hasGlowFilter || !1) && (tPadding = 50, tHalfPadding = 25), (b = sprite.getBounds()).width <= 0 || b.height <= 0) return;
                            b.width += tPadding, b.height += tPadding, p.x = b.x * mat.a + b.y * mat.c, p.y = b.y * mat.d + b.x * mat.b, b.x = p.x, b.y = p.y, p.x = b.width * mat.a + b.height * mat.c, p.y = b.height * mat.d + b.width * mat.b, b.width = p.x, b.height = p.y
                        } else {
                            sprite._isHaveGlowFilter() && (tPadding = 50, tHalfPadding = 25), (b = new Rectangle).copyFrom(sprite.getSelfBounds()), b.x += sprite.x, b.y += sprite.y, b.x -= sprite.pivotX + 4, b.y -= sprite.pivotY + 4;
                            var tSX = b.x,
                                tSY = b.y;
                            if (b.width += tPadding + 8, b.height += tPadding + 8, p.x = b.x * mat.a + b.y * mat.c, p.y = b.y * mat.d + b.x * mat.b, b.x = p.x, b.y = p.y, p.x = b.width * mat.a + b.height * mat.c, p.y = b.height * mat.d + b.width * mat.b, b.width = p.x, b.height = p.y, b.width <= 0 || b.height <= 0) return;
                            out && WebGLRTMgr.releaseRT(out), source = WebGLRTMgr.getRT(b.width, b.height);
                            var outRT = out = WebGLRTMgr.getRT(b.width, b.height);
                            sprite._getCacheStyle().filterCache = out, webglctx.pushRT(), webglctx.useRT(source);
                            var tX = sprite.x - tSX + tHalfPadding,
                                tY = sprite.y - tSY + tHalfPadding;
                            next._fun.call(next, sprite, context, tX, tY), webglctx.useRT(outRT);
                            for (var i = 0; i < len; i++) {
                                0 != i && (webglctx.useRT(source), webglctx.drawTarget(outRT, 0, 0, b.width, b.height, Matrix.TEMP.identity(), svCP, null, BlendMode.TOINT.overlay), webglctx.useRT(outRT));
                                var fil = filters[i];
                                switch (fil.type) {
                                    case 16:
                                    case 8:
                                        fil._glRender && fil._glRender.render(source, context, b.width, b.height, fil);
                                        break;
                                    case 32:
                                        webglctx.setColorFilter(fil), webglctx.drawTarget(source, 0, 0, b.width, b.height, Matrix.EMPTY.identity(), Value2D.create(1, 0)), webglctx.setColorFilter(null)
                                }
                            }
                            webglctx.popRT()
                        }
                        if (x = x - tHalfPadding - sprite.x, y = y - tHalfPadding - sprite.y, p.setTo(x, y), mat.transformPoint(p), x = p.x + b.x, y = p.y + b.y, webglctx._drawRenderTexture(out, x, y, b.width, b.height, Matrix.TEMP.identity(), 1, RenderTexture2D.defuv), source) {
                            var submit = SubmitCMD.create([source], function(s) {
                                s.destroy()
                            }, this);
                            source = null, context.addRenderObject(submit)
                        }
                        mat.destroy()
                    }
                }, HTMLCanvas.prototype.getTexture = function() {
                    if (!this._texture) {
                        var bitmap = new Texture2D;
                        bitmap.loadImageSource(this.source), this._texture = new Texture(bitmap)
                    }
                    return this._texture
                }, Float32Array.prototype.slice || (Float32Array.prototype.slice = WebGL._float32ArraySlice), Uint16Array.prototype.slice || (Uint16Array.prototype.slice = WebGL._uint16ArraySlice), Uint8Array.prototype.slice || (Uint8Array.prototype.slice = WebGL._uint8ArraySlice))
            }, WebGL.enable = function() {
                return Browser.__init__(), !!Browser._supportWebGL && (WebGL._webglRender_enable(), Render.isConchApp && WebGL._nativeRender_enable(), !0)
            }, WebGL.onStageResize = function(width, height) {
                null != WebGL.mainContext && (WebGL.mainContext.viewport(0, 0, width, height), RenderState2D.width = width, RenderState2D.height = height)
            }, WebGL.mainContext = null, WebGL.shaderHighPrecision = !1, WebGL._isWebGL2 = !1, WebGL.isNativeRender_enable = !1, WebGL
        }(),
        EarcutNode = function() {
            function EarcutNode(i, x, y) {
                this.i = null, this.x = null, this.y = null, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = null, this.i = i, this.x = x, this.y = y, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }
            return __class(EarcutNode, "laya.webgl.shapes.EarcutNode"), EarcutNode
        }(),
        CharRenderInfo = (function() {
            function WebGLCacheAsNormalCanvas(ctx, sp) {
                this.submitStartPos = 0, this.submitEndPos = 0, this.context = null, this.touches = [], this.submits = [], this.sprite = null, this._mesh = null, this._pathMesh = null, this._triangleMesh = null, this.meshlist = [], this._oldMesh = null, this._oldPathMesh = null, this._oldTriMesh = null, this._oldMeshList = null, this.oldTx = 0, this.oldTy = 0, this.cachedClipInfo = new Matrix, this.invMat = new Matrix, this.context = ctx, this.sprite = sp, ctx._globalClipMatrix.copyTo(this.cachedClipInfo)
            }
            __class(WebGLCacheAsNormalCanvas, "laya.webgl.canvas.WebGLCacheAsNormalCanvas");
            var __proto = WebGLCacheAsNormalCanvas.prototype;
            __proto.startRec = function() {
                this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), this.context._charSubmitCache.enable(!0, this.context)), this.context._incache = !0, this.touches.length = 0, this.context.touches = this.touches, this.context._globalClipMatrix.copyTo(this.cachedClipInfo), this.submits.length = 0, this.submitStartPos = this.context._submits._length;
                for (var i = 0, sz = this.meshlist.length; i < sz; i++) {
                    var curm = this.meshlist[i];
                    curm.canReuse ? curm.releaseMesh() : curm.destroy()
                }
                this.meshlist.length = 0, this._mesh = MeshQuadTexture.getAMesh(), this._pathMesh = MeshVG.getAMesh(), this._triangleMesh = MeshTexture.getAMesh(), this.meshlist.push(this._mesh), this.meshlist.push(this._pathMesh), this.meshlist.push(this._triangleMesh), this.context._curSubmit = Submit.RENDERBASE, this._oldMesh = this.context._mesh, this._oldPathMesh = this.context._pathMesh, this._oldTriMesh = this.context._triangleMesh, this._oldMeshList = this.context.meshlist, this.context._mesh = this._mesh, this.context._pathMesh = this._pathMesh, this.context._triangleMesh = this._triangleMesh, this.context.meshlist = this.meshlist, this.oldTx = this.context._curMat.tx, this.oldTy = this.context._curMat.ty, this.context._curMat.tx = 0, this.context._curMat.ty = 0, this.context._curMat.copyTo(this.invMat), this.invMat.invert()
            }, __proto.endRec = function() {
                this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), this.context._charSubmitCache.enable(!0, this.context));
                var parsubmits = this.context._submits;
                this.submitEndPos = parsubmits._length;
                for (var num = this.submitEndPos - this.submitStartPos, i = 0; i < num; i++) this.submits.push(parsubmits[this.submitStartPos + i]);
                parsubmits._length -= num, this.context._mesh = this._oldMesh, this.context._pathMesh = this._oldPathMesh, this.context._triangleMesh = this._oldTriMesh, this.context.meshlist = this._oldMeshList, this.context._curSubmit = Submit.RENDERBASE, this.context._curMat.tx = this.oldTx, this.context._curMat.ty = this.oldTy, this.context.touches = null, this.context._incache = !1
            }, __proto.isCacheValid = function() {
                var curclip = this.context._globalClipMatrix;
                return curclip.a == this.cachedClipInfo.a && curclip.b == this.cachedClipInfo.b && curclip.c == this.cachedClipInfo.c && curclip.d == this.cachedClipInfo.d && curclip.tx == this.cachedClipInfo.tx && curclip.ty == this.cachedClipInfo.ty
            }, __proto.flushsubmit = function() {
                var curSubmit = Submit.RENDERBASE;
                this.submits.forEach(function(subm) {
                    subm != Submit.RENDERBASE && (Submit.preRender = curSubmit, curSubmit = subm, subm.renderSubmit())
                })
            }, __proto.releaseMem = function() {}, __static(WebGLCacheAsNormalCanvas, ["matI", function() {
                return this.matI = new Matrix
            }])
        }(), function() {
            function CharRenderInfo() {
                this.char = "", this.tex = null, this.deleted = !1, this.pos = 0, this.width = 0, this.height = 0, this.bmpWidth = 0, this.bmpHeight = 0, this.orix = 0, this.oriy = 0, this.touchTick = 0, this.isSpace = !1, this.uv = new Array(8)
            }
            return __class(CharRenderInfo, "laya.webgl.resource.CharRenderInfo"), CharRenderInfo.prototype.touch = function() {
                var curLoop = Stat.loopCount;
                this.touchTick != curLoop && this.tex.touchRect(this, curLoop), this.touchTick = curLoop
            }, CharRenderInfo
        }()),
        ShaderCompile = function() {
            function ShaderCompile(vs, ps, nameMap, defs) {
                this._clearCR = new RegExp("\r", "g");
                var _$this = this;

                function _compile(script) {
                    script = script.replace(_$this._clearCR, "");
                    var includefiles = [],
                        top = new ShaderNode(includefiles);
                    return _$this._compileToTree(top, script.split("\n"), 0, includefiles, defs), top
                }
                var startTime = Browser.now();
                this._VS = _compile(vs), this._PS = _compile(ps), this._nameMap = nameMap, Browser.now() - startTime > 2 && console.log("ShaderCompile use time:" + (Browser.now() - startTime) + "  size:" + vs.length + "/" + ps.length)
            }
            __class(ShaderCompile, "laya.webgl.utils.ShaderCompile");
            var __proto = ShaderCompile.prototype;
            return __proto._compileToTree = function(parent, lines, start, includefiles, defs) {
                var node, preNode, text, name, fname, words, noUseNode, ofs = 0,
                    i = 0,
                    n = 0,
                    j = 0;
                for (i = start; i < lines.length; i++)
                    if (!((text = lines[i]).length < 1) && 0 !== (ofs = text.indexOf("//"))) {
                        if (ofs >= 0 && (text = text.substr(0, ofs)), node = noUseNode || new ShaderNode(includefiles), noUseNode = null, node.text = text, node.noCompile = !0, (ofs = text.indexOf("#")) >= 0) {
                            for (name = "#", j = ofs + 1, n = text.length; j < n; j++) {
                                var c = text.charAt(j);
                                if (" " === c || "\t" === c || "?" === c) break;
                                name += c
                            }
                            switch (node.name = name, name) {
                                case "#ifdef":
                                case "#ifndef":
                                    if (node.src = text, node.noCompile = null != text.match(/[!&|()=<>]/), node.noCompile ? console.log("function():Boolean{return " + text.substr(ofs + node.name.length) + "}") : (words = text.replace(/^\s*/, "").split(/\s+/), node.setCondition(words[1], "#ifdef" === name ? 1 : 2), node.text = "//" + node.text), node.setParent(parent), parent = node, defs)
                                        for (words = text.substr(j).split(ShaderCompile._splitToWordExps3), j = 0; j < words.length; j++)(text = words[j]).length && (defs[text] = !0);
                                    continue;
                                case "#if":
                                    if (node.src = text, node.noCompile = !0, node.setParent(parent), parent = node, defs)
                                        for (words = text.substr(j).split(ShaderCompile._splitToWordExps3), j = 0; j < words.length; j++)(text = words[j]).length && "defined" != text && (defs[text] = !0);
                                    continue;
                                case "#else":
                                    node.src = text, preNode = (parent = parent.parent).childs[parent.childs.length - 1], node.noCompile = preNode.noCompile, node.noCompile || (node.condition = preNode.condition, node.conditionType = 1 == preNode.conditionType ? 2 : 1, node.text = "//" + node.text + " " + preNode.text + " " + node.conditionType), node.setParent(parent), parent = node;
                                    continue;
                                case "#endif":
                                    preNode = (parent = parent.parent).childs[parent.childs.length - 1], node.noCompile = preNode.noCompile, node.noCompile || (node.text = "//" + node.text), node.setParent(parent);
                                    continue;
                                case "#include":
                                    words = ShaderCompile.splitToWords(text, null);
                                    var inlcudeFile = ShaderCompile.includes[words[1]];
                                    if (!inlcudeFile) throw "ShaderCompile error no this include file:" + words[1];
                                    if ((ofs = words[0].indexOf("?")) < 0) {
                                        node.setParent(parent), text = inlcudeFile.getWith("with" == words[2] ? words[3] : null), this._compileToTree(node, text.split("\n"), 0, includefiles, defs), node.text = "";
                                        continue
                                    }
                                    node.setCondition(words[0].substr(ofs + 1), 1), node.text = inlcudeFile.getWith("with" == words[2] ? words[3] : null);
                                    break;
                                case "#import":
                                    fname = (words = ShaderCompile.splitToWords(text, null))[1], includefiles.push({
                                        node: node,
                                        file: ShaderCompile.includes[fname],
                                        ofs: node.text.length
                                    });
                                    continue
                            }
                        } else {
                            if ((preNode = parent.childs[parent.childs.length - 1]) && !preNode.name) {
                                includefiles.length > 0 && ShaderCompile.splitToWords(text, preNode), noUseNode = node, preNode.text += "\n" + text;
                                continue
                            }
                            includefiles.length > 0 && ShaderCompile.splitToWords(text, node)
                        }
                        node.setParent(parent)
                    }
            }, __proto.createShader = function(define, shaderName, createShader, bindAttrib) {
                var defMap = {},
                    defineStr = "";
                if (define)
                    for (var i in define) defineStr += "#define " + i + "\n", defMap[i] = !0;
                var vs = this._VS.toscript(defMap, []),
                    ps = this._PS.toscript(defMap, []);
                return (createShader || Shader.create)(defineStr + vs.join("\n"), defineStr + ps.join("\n"), shaderName, this._nameMap, bindAttrib)
            }, ShaderCompile._parseOne = function(attributes, uniforms, words, i, word, b) {
                var one = {
                    type: ShaderCompile.shaderParamsMap[words[i + 1]],
                    name: words[i + 2],
                    size: isNaN(parseInt(words[i + 3])) ? 1 : parseInt(words[i + 3])
                };
                return b && ("attribute" == word ? attributes.push(one) : uniforms.push(one)), ":" == words[i + 3] && (one.type = words[i + 4], i += 2), i += 2
            }, ShaderCompile.addInclude = function(fileName, txt) {
                if (!txt || 0 === txt.length) throw new Error("add shader include file err:" + fileName);
                if (ShaderCompile.includes[fileName]) throw new Error("add shader include file err, has add:" + fileName);
                ShaderCompile.includes[fileName] = new InlcudeFile(txt)
            }, ShaderCompile.preGetParams = function(vs, ps) {
                var text = [vs, ps],
                    result = {},
                    attributes = [],
                    uniforms = [],
                    definesInfo = {},
                    definesName = [];
                result.attributes = attributes, result.uniforms = uniforms, result.defines = definesInfo;
                for (var i = 0, n = 0, s = 0; s < 2; s++) {
                    text[s] = text[s].replace(ShaderCompile._removeAnnotation, "");
                    var tempelse, words = text[s].match(ShaderCompile._reg);
                    for (i = 0, n = words.length; i < n; i++) {
                        var word = words[i];
                        if ("attribute" == word || "uniform" == word) i = ShaderCompile._parseOne(attributes, uniforms, words, i, word, !0);
                        else {
                            if ("#define" == word) {
                                definesName[word = words[++i]] = 1;
                                continue
                            }
                            if ("#ifdef" == word) {
                                definesInfo[tempelse = words[++i]] = definesInfo[tempelse] || [];
                                for (i++; i < n; i++)
                                    if ("attribute" == (word = words[i]) || "uniform" == word) i = ShaderCompile._parseOne(attributes, uniforms, words, i, word, definesName[tempelse]);
                                    else if ("#else" == word)
                                    for (i++; i < n; i++)
                                        if ("attribute" == (word = words[i]) || "uniform" == word) i = ShaderCompile._parseOne(attributes, uniforms, words, i, word, !definesName[tempelse]);
                                        else if ("#endif" == word) break
                            }
                        }
                    }
                }
                return result
            }, ShaderCompile.splitToWords = function(str, block) {
                for (var c, word, out = [], ofs = -1, i = 0, n = str.length; i < n; i++)
                    if (c = str.charAt(i), " \t=+-*/&%!<>()'\",;".indexOf(c) >= 0) {
                        if (ofs >= 0 && i - ofs > 1 && (word = str.substr(ofs, i - ofs), out.push(word)), '"' == c || "'" == c) {
                            var ofs2 = str.indexOf(c, i + 1);
                            if (ofs2 < 0) throw "Sharder err:" + str;
                            out.push(str.substr(i + 1, ofs2 - i - 1)), i = ofs2, ofs = -1;
                            continue
                        }
                        "(" == c && block && out.length > 0 && (word = out[out.length - 1] + ";", "vec4;main;".indexOf(word) < 0 && (block.useFuns += word)), ofs = -1
                    } else ofs < 0 && (ofs = i);
                return ofs < n && n - ofs > 1 && (word = str.substr(ofs, n - ofs), out.push(word)), out
            }, ShaderCompile.IFDEF_NO = 0, ShaderCompile.IFDEF_YES = 1, ShaderCompile.IFDEF_ELSE = 2, ShaderCompile.IFDEF_PARENT = 3, ShaderCompile._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"), ShaderCompile._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"), ShaderCompile._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"), ShaderCompile.includes = {}, __static(ShaderCompile, ["shaderParamsMap", function() {
                return this.shaderParamsMap = {
                    float: 5126,
                    int: 5124,
                    bool: 35670,
                    vec2: 35664,
                    vec3: 35665,
                    vec4: 35666,
                    ivec2: 35667,
                    ivec3: 35668,
                    ivec4: 35669,
                    bvec2: 35671,
                    bvec3: 35672,
                    bvec4: 35673,
                    mat2: 35674,
                    mat3: 35675,
                    mat4: 35676,
                    sampler2D: 35678,
                    samplerCube: 35680
                }
            }, "_splitToWordExps3", function() {
                return this._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g")
            }]), ShaderCompile
        }(),
        ShaderDefinesBase = function() {
            function ShaderDefinesBase(name2int, int2name, int2nameMap) {
                this._value = 0, this._name2int = name2int, this._int2name = int2name, this._int2nameMap = int2nameMap
            }
            __class(ShaderDefinesBase, "laya.webgl.shader.ShaderDefinesBase");
            var __proto = ShaderDefinesBase.prototype;
            return __proto.add = function(value) {
                return "string" == typeof value && (value = this._name2int[value]), this._value |= value, this._value
            }, __proto.addInt = function(value) {
                return this._value |= value, this._value
            }, __proto.remove = function(value) {
                return "string" == typeof value && (value = this._name2int[value]), this._value &= ~value, this._value
            }, __proto.isDefine = function(def) {
                return (this._value & def) === def
            }, __proto.getValue = function() {
                return this._value
            }, __proto.setValue = function(value) {
                this._value = value
            }, __proto.toNameDic = function() {
                var r = this._int2nameMap[this._value];
                return r || ShaderDefinesBase._toText(this._value, this._int2name, this._int2nameMap)
            }, ShaderDefinesBase._reg = function(name, value, _name2int, _int2name) {
                _name2int[name] = value, _int2name[value] = name
            }, ShaderDefinesBase._toText = function(value, _int2name, _int2nameMap) {
                var r = _int2nameMap[value];
                if (r) return r;
                for (var o = {}, d = 1, i = 0; i < 32 && !((d = 1 << i) > value); i++)
                    if (value & d) {
                        var name = _int2name[d];
                        name && (o[name] = "")
                    } return _int2nameMap[value] = o, o
            }, ShaderDefinesBase._toInt = function(names, _name2int) {
                for (var words = names.split("."), num = 0, i = 0, n = words.length; i < n; i++) {
                    var value = _name2int[words[i]];
                    if (!value) throw new Error("Defines to int err:" + names + "/" + words[i]);
                    num |= value
                }
                return num
            }, ShaderDefinesBase
        }(),
        TextAtlas = function() {
            function TextAtlas() {
                this.texWidth = 1024, this.texHeight = 1024, this.atlasgrid = null, this.protectDist = 1, this.texture = null, this.charMaps = {}, this.texHeight = this.texWidth = TextRender.atlasWidth, this.texture = TextTexture.getTextTexture(this.texWidth, this.texHeight), this.texWidth / TextAtlas.atlasGridW > 256 && (TextAtlas.atlasGridW = Math.ceil(this.texWidth / 256)), this.atlasgrid = new AtlasGrid(this.texWidth / TextAtlas.atlasGridW, this.texHeight / TextAtlas.atlasGridW, this.texture.id)
            }
            __class(TextAtlas, "laya.webgl.text.TextAtlas");
            var __proto = TextAtlas.prototype;
            return __proto.setProtecteDist = function(d) {
                this.protectDist = d
            }, __proto.getAEmpty = function(w, h, pt) {
                var find = this.atlasgrid.addRect(1, Math.ceil(w / TextAtlas.atlasGridW), Math.ceil(h / TextAtlas.atlasGridW), pt);
                return find && (pt.x *= TextAtlas.atlasGridW, pt.y *= TextAtlas.atlasGridW), find
            }, __proto.destroy = function() {
                for (var k in this.charMaps) {
                    this.charMaps[k].deleted = !0
                }
                this.texture.discard()
            }, __proto.printDebugInfo = function() {}, __getset(0, __proto, "usedRate", function() {
                return this.atlasgrid._used
            }), TextAtlas.atlasGridW = 16, TextAtlas
        }(),
        SubmitTarget = function() {
            function SubmitTarget() {
                this._mesh = null, this._startIdx = 0, this._numEle = 0, this.shaderValue = null, this.blendType = 0, this._ref = 1, this.srcRT = null, this._key = new SubmitKey
            }
            __class(SubmitTarget, "laya.webgl.submit.SubmitTarget");
            var __proto = SubmitTarget.prototype;
            return Laya.imps(__proto, {
                "laya.webgl.submit.ISubmit": !0
            }), __proto.renderSubmit = function() {
                var gl = WebGL.mainContext;
                this._mesh.useMesh(gl);
                var target = this.srcRT;
                return target && (this.shaderValue.texture = target._getSource(), this.shaderValue.upload(), this.blend(), Stat.renderBatches++, Stat.trianglesFaces += this._numEle / 3, WebGL.mainContext.drawElements(4, this._numEle, 5123, this._startIdx)), 1
            }, __proto.blend = function() {
                if (BlendMode.activeBlendFunction !== BlendMode.fns[this.blendType]) {
                    var gl = WebGL.mainContext;
                    gl.enable(3042), BlendMode.fns[this.blendType](gl), BlendMode.activeBlendFunction = BlendMode.fns[this.blendType]
                }
            }, __proto.getRenderType = function() {
                return 0
            }, __proto.releaseRender = function() {
                if (--this._ref < 1) {
                    var pool = SubmitTarget.POOL;
                    pool[pool._length++] = this
                }
            }, __proto.reUse = function(context, pos) {
                return this._startIdx = pos, this._ref++, pos
            }, SubmitTarget.create = function(context, mesh, sv, rt) {
                var o = SubmitTarget.POOL._length ? SubmitTarget.POOL[--SubmitTarget.POOL._length] : new SubmitTarget;
                if (o._mesh = mesh, o.srcRT = rt, o._startIdx = mesh.indexNum * CONST3D2D.BYTES_PIDX, o._ref = 1, o._key.clear(), o._numEle = 0, o.blendType = context._nBlendType, o._key.blendShader = o.blendType, o.shaderValue = sv, o.shaderValue.setValue(context._shader2D), context._colorFiler) {
                    var ft = context._colorFiler;
                    sv.defines.add(ft.type), sv.colorMat = ft._mat, sv.colorAlpha = ft._alpha
                }
                return o
            }, SubmitTarget.POOL = (SubmitTarget.POOL = [], SubmitTarget.POOL._length = 0, SubmitTarget.POOL), SubmitTarget
        }(),
        TextRender = function() {
            function TextRender() {
                this.fontSizeInfo = {}, this.charRender = null, this.mapFont = {}, this.fontID = 0, this.mapColor = [], this.colorID = 0, this.fontScaleX = 1, this.fontScaleY = 1, this._curStrPos = 0, this.bmpData32 = null, this.lastFont = null, this.fontSizeW = 0, this.fontSizeH = 0, this.fontSizeOffX = 0, this.fontSizeOffY = 0, this.renderPerChar = !0, this.textureMem = 0, this.fontStr = null, this.textAtlases = [], this.isoTextures = [], this.tmpAtlasPos = new Point;
                var bugIOS = !1,
                    miniadp = Laya.MiniAdpter;
                miniadp && miniadp.systemInfo && miniadp.systemInfo.system && (bugIOS = "ios 10.1.1" === miniadp.systemInfo.system.toLowerCase()), Browser.onMiniGame && !bugIOS && (TextRender.isWan1Wan = !0), Browser.onLimixiu && (TextRender.isWan1Wan = !0), this.charRender = Render.isConchApp ? new CharRender_Native : new CharRender_Canvas(TextRender.atlasWidth, TextRender.atlasWidth, TextRender.scaleFontWithCtx, !TextRender.isWan1Wan, !1), TextRender.textRenderInst = this, Laya.textRender = this, TextRender.atlasWidth2 = TextRender.atlasWidth * TextRender.atlasWidth
            }
            __class(TextRender, "laya.webgl.text.TextRender");
            var __proto = TextRender.prototype;
            return __proto.setFont = function(font) {
                if (this.lastFont != font) {
                    this.lastFont = font;
                    var fontsz = this.getFontSizeInfo(font._family),
                        offx = fontsz >> 24,
                        offy = fontsz >> 16 & 255,
                        fw = fontsz >> 8 & 255,
                        fh = 255 & fontsz,
                        k = font._size / TextRender.standardFontSize;
                    this.fontSizeOffX = Math.ceil(offx * k), this.fontSizeOffY = Math.ceil(offy * k), this.fontSizeW = Math.ceil(fw * k), this.fontSizeH = Math.ceil(fh * k), this.fontStr = font._font.replace("italic", "")
                }
            }, __proto.getNextChar = function(str) {
                var len = str.length,
                    start = this._curStrPos;
                if (start >= len) return null;
                for (var i = start, state = 0; i < len; i++) {
                    var c = str.charCodeAt(i);
                    if (c >>> 11 == 27) {
                        if (1 == state) break;
                        state = 1, i++
                    } else if (65038 === c || 65039 === c);
                    else if (8205 == c) state = 2;
                    else if (0 == state) state = 1;
                    else if (1 == state) break
                }
                return this._curStrPos = i, str.substring(start, i)
            }, __proto.filltext = function(ctx, data, x, y, fontStr, color, strokeColor, lineWidth, textAlign, underLine) {
                if (void 0 === underLine && (underLine = 0), !(data.length <= 0)) {
                    var font = FontInfo.Parse(fontStr),
                        nTextAlign = 0;
                    switch (textAlign) {
                        case "center":
                            nTextAlign = Context.ENUM_TEXTALIGN_CENTER;
                            break;
                        case "right":
                            nTextAlign = Context.ENUM_TEXTALIGN_RIGHT
                    }
                    this._fast_filltext(ctx, data, null, x, y, font, color, strokeColor, lineWidth, nTextAlign, underLine)
                }
            }, __proto.fillWords = function(ctx, data, x, y, fontStr, color, strokeColor, lineWidth) {
                if (data && !(data.length <= 0)) {
                    var font = FontInfo.Parse(fontStr);
                    this._fast_filltext(ctx, null, data, x, y, font, color, strokeColor, lineWidth, 0, 0)
                }
            }, __proto._fast_filltext = function(ctx, data, htmlchars, x, y, font, color, strokeColor, lineWidth, textAlign, underLine) {
                if (void 0 === underLine && (underLine = 0), !(data && data.length < 1 || htmlchars && htmlchars.length < 1)) {
                    if (lineWidth < 0 && (lineWidth = 0), this.setFont(font), this.fontScaleX = this.fontScaleY = 1, !Render.isConchApp && TextRender.scaleFontWithCtx) {
                        var sx = 1,
                            sy = 1;
                        if (Render.isConchApp ? (sx = ctx._curMat.getScaleX(), sy = ctx._curMat.getScaleY()) : (sx = ctx.getMatScaleX(), sy = ctx.getMatScaleY()), sx < 1e-4 || sy < .1) return;
                        sx > 1 && (this.fontScaleX = sx), sy > 1 && (this.fontScaleY = sy)
                    }
                    font._italic && (ctx._italicDeg = 13);
                    var wt = data,
                        isWT = !htmlchars && data instanceof laya.utils.WordText,
                        str = data,
                        isHtmlChar = !!htmlchars,
                        sameTexData = isWT ? wt.pageChars : [],
                        strWidth = 0;
                    switch (isWT ? (str = wt._text, (strWidth = wt.width) < 0 && (strWidth = wt.width = this.charRender.getWidth(this.fontStr, str))) : strWidth = str ? this.charRender.getWidth(this.fontStr, str) : 0, textAlign) {
                        case Context.ENUM_TEXTALIGN_CENTER:
                            x -= strWidth / 2;
                            break;
                        case Context.ENUM_TEXTALIGN_RIGHT:
                            x -= strWidth
                    }
                    wt && sameTexData && this.hasFreedText(sameTexData) && (sameTexData = wt.pageChars = []);
                    var ri = null,
                        splitTex = (isWT || TextRender.forceWholeRender, this.renderPerChar = !isWT || TextRender.forceSplitRender || isHtmlChar || isWT && wt.splitRender);
                    if (!sameTexData || sameTexData.length < 1)
                        if (splitTex) {
                            var curstr, stx = 0,
                                sty = 0;
                            for (this._curStrPos = 0;;) {
                                if (isHtmlChar) {
                                    var chc = htmlchars[this._curStrPos++];
                                    chc ? (curstr = chc.char, stx = chc.x, sty = chc.y) : curstr = null
                                } else curstr = this.getNextChar(str);
                                if (!curstr) break;
                                if (!(ri = this.getCharRenderInfo(curstr, font, color, strokeColor, lineWidth, !1))) break;
                                if (ri.isSpace);
                                else {
                                    var add = sameTexData[ri.tex.id];
                                    add || (sameTexData[ri.tex.id] = add = []), Render.isConchApp ? add.push({
                                        ri: ri,
                                        x: stx,
                                        y: sty,
                                        w: ri.bmpWidth / this.fontScaleX,
                                        h: ri.bmpHeight / this.fontScaleY
                                    }) : add.push({
                                        ri: ri,
                                        x: stx + 1 / this.fontScaleX,
                                        y: sty,
                                        w: (ri.bmpWidth - 2) / this.fontScaleX,
                                        h: (ri.bmpHeight - 1) / this.fontScaleY
                                    }), stx += ri.width
                                }
                            }
                        } else {
                            var isotex = TextRender.noAtlas || strWidth * this.fontScaleX > TextRender.atlasWidth;
                            ri = this.getCharRenderInfo(str, font, color, strokeColor, lineWidth, isotex), Render.isConchApp ? sameTexData[0] = [{
                                ri: ri,
                                x: 0,
                                y: 0,
                                w: ri.bmpWidth / this.fontScaleX,
                                h: ri.bmpHeight / this.fontScaleY
                            }] : sameTexData[0] = [{
                                ri: ri,
                                x: 1 / this.fontScaleX,
                                y: 0 / this.fontScaleY,
                                w: (ri.bmpWidth - 2) / this.fontScaleX,
                                h: (ri.bmpHeight - 1) / this.fontScaleY
                            }]
                        } this._drawResortedWords(ctx, x, y, sameTexData), ctx._italicDeg = 0
                }
            }, __proto._drawResortedWords = function(ctx, startx, starty, samePagesData) {
                var isLastRender = ctx._charSubmitCache && ctx._charSubmitCache._enbale,
                    mat = ctx._curMat;
                for (var id in samePagesData) {
                    var pri = samePagesData[id],
                        pisz = pri.length;
                    if (!(pisz <= 0))
                        for (var j = 0; j < pisz; j++) {
                            var riSaved = pri[j],
                                ri = riSaved.ri;
                            ri.isSpace || (ri.touch(), ctx.drawTexAlign = !0, Render.isConchApp ? ctx._drawTextureM(ri.tex.texture, startx + riSaved.x - ri.orix, starty + riSaved.y - ri.oriy, riSaved.w, riSaved.h, null, 1, ri.uv) : ctx._inner_drawTexture(ri.tex.texture, ri.tex.texture.bitmap.id, startx + riSaved.x - ri.orix, starty + riSaved.y - ri.oriy, riSaved.w, riSaved.h, mat, ri.uv, 1, isLastRender), ctx.touches && ctx.touches.push(ri))
                        }
                }
            }, __proto.hasFreedText = function(txts) {
                for (var i in txts)
                    for (var pri = txts[i], j = 0, pisz = pri.length; j < pisz; j++) {
                        var riSaved = pri[j].ri;
                        if (riSaved.deleted || riSaved.tex.__destroyed) return !0
                    }
                return !1
            }, __proto.getCharRenderInfo = function(str, font, color, strokeColor, lineWidth, isoTexture) {
                void 0 === isoTexture && (isoTexture = !1);
                var fid = this.mapFont[font._family];
                null == fid && (this.mapFont[font._family] = fid = this.fontID++);
                var key = str + "_" + fid + "_" + font._size + "_" + color;
                lineWidth > 0 && (key += "_" + strokeColor + lineWidth), font._bold && (key += "P"), 1 == this.fontScaleX && 1 == this.fontScaleY || (key += (20 * this.fontScaleX | 0) + "_" + (20 * this.fontScaleY | 0));
                var i = 0,
                    sz = this.textAtlases.length,
                    ri = null,
                    atlas = null;
                if (!isoTexture)
                    for (i = 0; i < sz; i++)
                        if (ri = (atlas = this.textAtlases[i]).charMaps[key]) return ri.touch(), ri;
                ri = new CharRenderInfo, this.charRender.scale(this.fontScaleX, this.fontScaleY), ri.char = str, ri.height = font._size;
                var margin = font._size / 3 | 0,
                    imgdt = null,
                    w1 = Math.ceil(this.charRender.getWidth(this.fontStr, str) * this.fontScaleX);
                if (w1 > this.charRender.canvasWidth && (this.charRender.canvasWidth = Math.min(2048, w1 + 2 * margin)), isoTexture) {
                    imgdt = this.charRender.getCharBmp(str, this.fontStr, lineWidth, color, strokeColor, ri, margin, margin, margin, margin, null);
                    var tex = TextTexture.getTextTexture(imgdt.width, imgdt.height);
                    tex.addChar(imgdt, 0, 0, ri.uv), ri.tex = tex, ri.orix = margin, ri.oriy = margin, tex.ri = ri, this.isoTextures.push(tex)
                } else {
                    var len = str.length,
                        lineExt = 1 * lineWidth,
                        fw = Math.ceil((this.fontSizeW + 2 * lineExt) * this.fontScaleX),
                        fh = Math.ceil((this.fontSizeH + 2 * lineExt) * this.fontScaleY);
                    TextRender.imgdtRect[0] = (margin - this.fontSizeOffX - lineExt) * this.fontScaleX | 0, TextRender.imgdtRect[1] = (margin - this.fontSizeOffY - lineExt) * this.fontScaleY | 0, this.renderPerChar || 1 == len ? (TextRender.imgdtRect[2] = Math.max(w1, fw), TextRender.imgdtRect[3] = Math.max(w1, fh)) : (TextRender.imgdtRect[2] = -1, TextRender.imgdtRect[3] = fh), imgdt = this.charRender.getCharBmp(str, this.fontStr, lineWidth, color, strokeColor, ri, margin, margin, margin, margin, TextRender.imgdtRect), atlas = this.addBmpData(imgdt, ri), TextRender.isWan1Wan ? (ri.orix = margin, ri.oriy = margin) : (ri.orix = this.fontSizeOffX + lineExt, ri.oriy = this.fontSizeOffY + lineExt), atlas.charMaps[key] = ri
                }
                return ri
            }, __proto.addBmpData = function(data, ri) {
                for (var w = data.width, h = data.height, sz = this.textAtlases.length, atlas = null, find = !1, i = 0; i < sz && !(find = (atlas = this.textAtlases[i]).getAEmpty(w, h, this.tmpAtlasPos)); i++);
                if (!find) {
                    if (atlas = new TextAtlas, this.textAtlases.push(atlas), !(find = atlas.getAEmpty(w, h, this.tmpAtlasPos))) throw "err1";
                    this.cleanAtlases()
                }
                return find && (atlas.texture.addChar(data, this.tmpAtlasPos.x, this.tmpAtlasPos.y, ri.uv), ri.tex = atlas.texture), atlas
            }, __proto.GC = function(force) {
                for (var i = 0, sz = this.textAtlases.length, destroyDt = TextRender.destroyAtlasDt, totalUsedRateAtlas = 0, maxWasteRateID = -1, maxWasteRate = 0, tex = null, curatlas = null; i < sz; i++) {
                    if (tex = (curatlas = this.textAtlases[i]).texture) {
                        tex.curUsedCovRate, totalUsedRateAtlas += tex.curUsedCovRateAtlas;
                        var waste = curatlas.usedRate - tex.curUsedCovRateAtlas;
                        maxWasteRate < waste && (maxWasteRate = waste, maxWasteRateID = i)
                    }
                    Stat.loopCount - curatlas.texture.lastTouchTm > destroyDt && (TextRender.showLog && console.log(curatlas.texture.id), curatlas.destroy(), this.textAtlases[i] = this.textAtlases[sz - 1], sz--, i--)
                }
                for (this.textAtlases.length = sz, sz = this.isoTextures.length, i = 0; i < sz; i++) tex = this.isoTextures[i], Stat.loopCount - tex.lastTouchTm > TextRender.destroyUnusedTextureDt && (tex.ri.deleted = !0, tex.ri.tex = null, tex.destroy(), this.isoTextures[i] = this.isoTextures[sz - 1], sz--, i--);
                var needGC = this.textAtlases.length > 1 && this.textAtlases.length - totalUsedRateAtlas >= 2;
                (TextRender.atlasWidth * TextRender.atlasWidth * 4 * this.textAtlases.length > TextRender.cleanMem || needGC || TextRender.simClean) && (TextRender.simClean = !1, TextRender.showLog && console.log("清理使用率低的贴图。总使用率:", totalUsedRateAtlas, ":", this.textAtlases.length, "最差贴图:" + maxWasteRateID), maxWasteRateID >= 0 && ((curatlas = this.textAtlases[maxWasteRateID]).destroy(), this.textAtlases[maxWasteRateID] = this.textAtlases[this.textAtlases.length - 1], this.textAtlases.length = this.textAtlases.length - 1)), TextTexture.clean()
            }, __proto.cleanAtlases = function() {}, __proto.getCharBmp = function(c) {}, __proto.checkBmpLine = function(data, l, sx, ex) {
                this.bmpData32.buffer != data.data.buffer && (this.bmpData32 = new Uint32Array(data.data.buffer));
                for (var stpos = data.width * l + sx, x = sx; x < ex; x++)
                    if (0 != this.bmpData32[stpos++]) return !0;
                return !1
            }, __proto.updateBbx = function(data, curbbx, onlyH) {
                void 0 === onlyH && (onlyH = !1);
                var w = data.width,
                    h = data.height,
                    x = 0,
                    sy = curbbx[1],
                    ey = 0,
                    y = sy;
                if (this.checkBmpLine(data, sy, 0, w))
                    for (;;) {
                        if ((y = (sy + ey) / 2 | 0) + 1 >= sy) {
                            curbbx[1] = y;
                            break
                        }
                        this.checkBmpLine(data, y, 0, w) ? sy = y : ey = y
                    }
                if (curbbx[3] > h) curbbx[3] = h;
                else if (y = sy = curbbx[3], ey = h, this.checkBmpLine(data, sy, 0, w))
                    for (;;) {
                        if ((y = (sy + ey) / 2 | 0) - 1 <= sy) {
                            curbbx[3] = y;
                            break
                        }
                        this.checkBmpLine(data, y, 0, w) ? sy = y : ey = y
                    }
                if (!onlyH) {
                    var minx = curbbx[0],
                        stpos = w * curbbx[1];
                    for (y = curbbx[1]; y < curbbx[3]; y++) {
                        for (x = 0; x < minx; x++)
                            if (0 != this.bmpData32[stpos + x]) {
                                minx = x;
                                break
                            } stpos += w
                    }
                    curbbx[0] = minx;
                    var maxx = curbbx[2];
                    for (stpos = w * curbbx[1], y = curbbx[1]; y < curbbx[3]; y++) {
                        for (x = maxx; x < w; x++)
                            if (0 != this.bmpData32[stpos + x]) {
                                maxx = x;
                                break
                            } stpos += w
                    }
                    curbbx[2] = maxx
                }
            }, __proto.getFontSizeInfo = function(font) {
                var finfo = this.fontSizeInfo[font];
                if (null != finfo) return finfo;
                var fontstr = "bold " + TextRender.standardFontSize + "px " + font;
                if (TextRender.isWan1Wan) {
                    this.fontSizeW = 1.5 * this.charRender.getWidth(fontstr, "有"), this.fontSizeH = 1.5 * TextRender.standardFontSize;
                    var szinfo = this.fontSizeW << 8 | this.fontSizeH;
                    return this.fontSizeInfo[font] = szinfo, szinfo
                }
                TextRender.pixelBBX[0] = TextRender.standardFontSize / 2, TextRender.pixelBBX[1] = TextRender.standardFontSize / 2, TextRender.pixelBBX[2] = TextRender.standardFontSize, TextRender.pixelBBX[3] = TextRender.standardFontSize;
                var orix = 16,
                    oriy = 16;
                this.charRender.scale(1, 1), TextRender.tmpRI.height = TextRender.standardFontSize;
                var bmpdt = this.charRender.getCharBmp("g", fontstr, 0, "red", null, TextRender.tmpRI, orix, oriy, 16, 16);
                Render.isConchApp && (bmpdt.data = new Uint8ClampedArray(bmpdt.data)), this.bmpData32 = new Uint32Array(bmpdt.data.buffer), this.updateBbx(bmpdt, TextRender.pixelBBX, !1), bmpdt = this.charRender.getCharBmp("有", fontstr, 0, "red", null, TextRender.tmpRI, oriy, oriy, 16, 16), Render.isConchApp && (bmpdt.data = new Uint8ClampedArray(bmpdt.data)), this.bmpData32 = new Uint32Array(bmpdt.data.buffer), TextRender.pixelBBX[2] < orix + TextRender.tmpRI.width && (TextRender.pixelBBX[2] = orix + TextRender.tmpRI.width), this.updateBbx(bmpdt, TextRender.pixelBBX, !1), Render.isConchApp && (orix = 0, oriy = 0);
                var sizeinfo = Math.max(orix - TextRender.pixelBBX[0], 0) << 24 | Math.max(oriy - TextRender.pixelBBX[1], 0) << 16 | TextRender.pixelBBX[2] - TextRender.pixelBBX[0] << 8 | TextRender.pixelBBX[3] - TextRender.pixelBBX[1];
                return this.fontSizeInfo[font] = sizeinfo, sizeinfo
            }, __proto.printDbgInfo = function() {
                for (var f in console.log("图集个数:" + this.textAtlases.length + ",每个图集大小:" + TextRender.atlasWidth + "x" + TextRender.atlasWidth, " 用canvas:", TextRender.isWan1Wan), console.log("图集占用空间:" + TextRender.atlasWidth * TextRender.atlasWidth * 4 / 1024 / 1024 * this.textAtlases.length + "M"), console.log("缓存用到的字体:"), this.mapFont) {
                    var fontsz = this.getFontSizeInfo(f),
                        offx = fontsz >> 24,
                        offy = fontsz >> 16 & 255,
                        fw = fontsz >> 8 & 255,
                        fh = 255 & fontsz;
                    console.log("    " + f, " off:", offx, offy, " size:", fw, fh)
                }
                var num = 0;
                console.log("缓存数据:");
                var totalUsedRate = 0,
                    totalUsedRateAtlas = 0;
                this.textAtlases.forEach(function(a) {
                    var id = a.texture.id,
                        dt = Stat.loopCount - a.texture.lastTouchTm,
                        dtstr = dt > 0 ? dt + "帧以前" : "当前帧";
                    for (var k in totalUsedRate += a.texture.curUsedCovRate, totalUsedRateAtlas += a.texture.curUsedCovRateAtlas, console.log("--图集(id:" + id + ",当前使用率:" + (1e3 * a.texture.curUsedCovRate | 0) + "‰", "当前图集使用率:", (100 * a.texture.curUsedCovRateAtlas | 0) + "%", "图集使用率:", 100 * a.usedRate | 0, "%, 使用于:" + dtstr + ")--:"), a.charMaps) {
                        var ri = a.charMaps[k];
                        console.log("     off:", ri.orix, ri.oriy, " bmp宽高:", ri.bmpWidth, ri.bmpHeight, "无效:", ri.deleted, "touchdt:", Stat.loopCount - ri.touchTick, "位置:", ri.uv[0] * TextRender.atlasWidth | 0, ri.uv[1] * TextRender.atlasWidth | 0, "字符:", ri.char, "key:", k), num++
                    }
                }), console.log("独立贴图文字(" + this.isoTextures.length + "个):"), this.isoTextures.forEach(function(tex) {
                    console.log("    size:", tex._texW, tex._texH, "touch间隔:", Stat.loopCount - tex.lastTouchTm, "char:", tex.ri.char)
                }), console.log("总缓存:", num, "总使用率:", totalUsedRate, "总当前图集使用率:", totalUsedRateAtlas)
            }, __proto.showAtlas = function(n, bgcolor, x, y, w, h) {
                if (!this.textAtlases[n]) return console.log("没有这个图集"), null;
                var sp = new Sprite,
                    texttex = this.textAtlases[n].texture,
                    texture = {
                        width: TextRender.atlasWidth,
                        height: TextRender.atlasWidth,
                        sourceWidth: TextRender.atlasWidth,
                        sourceHeight: TextRender.atlasWidth,
                        offsetX: 0,
                        offsetY: 0,
                        getIsReady: function() {
                            return !0
                        },
                        _addReference: function() {},
                        _removeReference: function() {},
                        _getSource: function() {
                            return texttex._getSource()
                        },
                        bitmap: {
                            id: texttex.id
                        },
                        _uv: Texture.DEF_UV
                    };
                return sp.size = function(w, h) {
                    return this.width = w, this.height = h, sp.graphics.clear(), sp.graphics.drawRect(0, 0, sp.width, sp.height, bgcolor), sp.graphics.drawTexture(texture, 0, 0, sp.width, sp.height), this
                }, sp.graphics.drawRect(0, 0, w, h, bgcolor), sp.graphics.drawTexture(texture, 0, 0, w, h), sp.pos(x, y), Laya.stage.addChild(sp), sp
            }, __proto.filltext_native = function(ctx, data, htmlchars, x, y, fontStr, color, strokeColor, lineWidth, textAlign, underLine) {
                if (void 0 === underLine && (underLine = 0), !(data && data.length <= 0 || htmlchars && htmlchars.length < 1)) {
                    var font = FontInfo.Parse(fontStr),
                        nTextAlign = 0;
                    switch (textAlign) {
                        case "center":
                            nTextAlign = Context.ENUM_TEXTALIGN_CENTER;
                            break;
                        case "right":
                            nTextAlign = Context.ENUM_TEXTALIGN_RIGHT
                    }
                    return this._fast_filltext(ctx, data, htmlchars, x, y, font, color, strokeColor, lineWidth, nTextAlign, underLine)
                }
            }, TextRender.useOldCharBook = !1, TextRender.atlasWidth = 2048, TextRender.noAtlas = !1, TextRender.forceSplitRender = !1, TextRender.forceWholeRender = !1, TextRender.scaleFontWithCtx = !0, TextRender.standardFontSize = 32, TextRender.destroyAtlasDt = 10, TextRender.checkCleanTextureDt = 2e3, TextRender.destroyUnusedTextureDt = 3e3, TextRender.cleanMem = 104857600, TextRender.isWan1Wan = !1, TextRender.showLog = !1, TextRender.debugUV = !1, TextRender.atlasWidth2 = 4194304, TextRender.textRenderInst = null, TextRender.simClean = !1, __static(TextRender, ["tmpRI", function() {
                return this.tmpRI = new CharRenderInfo
            }, "pixelBBX", function() {
                return this.pixelBBX = [0, 0, 0, 0]
            }, "imgdtRect", function() {
                return this.imgdtRect = [0, 0, 0, 0]
            }]), TextRender
        }(),
        LayaGLRunner = function() {
            function LayaGLRunner() {}
            return __class(LayaGLRunner, "laya.layagl.LayaGLRunner"), LayaGLRunner.uploadShaderUniforms = function(layaGL, commandEncoder, shaderData, uploadUnTexture) {
                for (var data = shaderData._data, shaderUniform = commandEncoder.getArrayData(), shaderCall = 0, i = 0, n = shaderUniform.length; i < n; i++) {
                    var one = shaderUniform[i];
                    if (uploadUnTexture || -1 !== one.textureID) {
                        var value = data[one.dataOffset];
                        null != value && (shaderCall += one.fun.call(one.caller, one, value))
                    }
                }
                return shaderCall
            }, LayaGLRunner.uploadCustomUniform = function(layaGL, custom, index, data) {
                var shaderCall = 0,
                    one = custom[index];
                return one && null != data && (shaderCall += one.fun.call(one.caller, one, data)), shaderCall
            }, LayaGLRunner.uploadShaderUniformsForNative = function(layaGL, commandEncoder, shaderData) {
                var nType = 0;
                shaderData._runtimeCopyValues.length > 0 && (nType = 1);
                var data = shaderData._data;
                return layaGL.uploadShaderUniforms(commandEncoder, data, nType)
            }, LayaGLRunner
        }(),
        AtlasGrid = function() {
            function AtlasGrid(width, height, id) {
                this.atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null, this._cells = null, this._used = 0, void 0 === width && (width = 0), void 0 === height && (height = 0), void 0 === id && (id = 0), this._cells = null, this._rowInfo = null, this.atlasID = id, this._init(width, height)
            }
            __class(AtlasGrid, "laya.webgl.text.AtlasGrid");
            var __proto = AtlasGrid.prototype;
            return __proto.addRect = function(type, width, height, pt) {
                return !!this._get(width, height, pt) && (this._fill(pt.x, pt.y, width, height, type), this._texCount++, !0)
            }, __proto._release = function() {
                this._cells = null, this._rowInfo = null
            }, __proto._init = function(width, height) {
                return this._width = width, this._height = height, this._release(), 0 != this._width && (this._cells = new Uint8Array(this._width * this._height * 3), this._rowInfo = new Uint8Array(this._height), this._used = 0, this._clear(), !0)
            }, __proto._get = function(width, height, pt) {
                if (width > this._width || height > this._height) return !1;
                for (var rx = -1, ry = -1, nWidth = this._width, nHeight = this._height, pCellBox = this._cells, y = 0; y < nHeight; y++)
                    if (!(this._rowInfo[y] < width))
                        for (var x = 0; x < nWidth;) {
                            var tm = 3 * (y * nWidth + x);
                            if (0 != pCellBox[tm] || pCellBox[tm + 1] < width || pCellBox[tm + 2] < height) x += pCellBox[tm + 1];
                            else {
                                rx = x, ry = y;
                                for (var xx = 0; xx < width; xx++)
                                    if (pCellBox[3 * xx + tm + 2] < height) {
                                        rx = -1;
                                        break
                                    } if (!(rx < 0)) return pt.x = rx, pt.y = ry, !0;
                                x += pCellBox[tm + 1]
                            }
                        }
                return !1
            }, __proto._fill = function(x, y, w, h, type) {
                var nWidth = this._width,
                    nHeghit = this._height;
                this._check(x + w <= nWidth && y + h <= nHeghit);
                for (var yy = y; yy < h + y; ++yy) {
                    this._check(this._rowInfo[yy] >= w), this._rowInfo[yy] -= w;
                    for (var xx = 0; xx < w; xx++) {
                        var tm = 3 * (x + yy * nWidth + xx);
                        this._check(0 == this._cells[tm]), this._cells[tm] = type, this._cells[tm + 1] = w, this._cells[tm + 2] = h
                    }
                }
                if (x > 0)
                    for (yy = 0; yy < h; ++yy) {
                        var s = 0;
                        for (xx = x - 1; xx >= 0 && 0 == this._cells[3 * ((y + yy) * nWidth + xx)]; --xx, ++s);
                        for (xx = s; xx > 0; --xx) this._cells[3 * ((y + yy) * nWidth + x - xx) + 1] = xx, this._check(xx > 0)
                    }
                if (y > 0)
                    for (xx = x; xx < x + w; ++xx) {
                        for (s = 0, yy = y - 1; yy >= 0 && 0 == this._cells[3 * (xx + yy * nWidth)]; --yy, s++);
                        for (yy = s; yy > 0; --yy) this._cells[3 * (xx + (y - yy) * nWidth) + 2] = yy, this._check(yy > 0)
                    }
                this._used += w * h / (this._width * this._height)
            }, __proto._check = function(ret) {
                0 == ret && console.log("xtexMerger 错误啦")
            }, __proto._clear = function() {
                this._texCount = 0;
                for (var y = 0; y < this._height; y++) this._rowInfo[y] = this._width;
                for (var i = 0; i < this._height; i++)
                    for (var j = 0; j < this._width; j++) {
                        var tm = 3 * (i * this._width + j);
                        this._cells[tm] = 0, this._cells[tm + 1] = this._width - j, this._cells[tm + 2] = this._width - i
                    }
            }, AtlasGrid
        }(),
        SubmitKey = (function() {
            function ShaderValue() {}
            __class(ShaderValue, "laya.webgl.shader.ShaderValue")
        }(), function() {
            function CharInternalTexture(par) {
                this._par = null, this._loaded = !0, this.bitmap = {}, this.bitmap.id = par.id, this._par = par
            }
            __class(CharInternalTexture, "laya.webgl.resource.CharInternalTexture"), CharInternalTexture.prototype._getSource = function() {
                return this._par._source
            }
        }(), function() {
            function SubmitKey() {
                this.blendShader = 0, this.submitType = 0, this.other = 0, this.clear()
            }
            __class(SubmitKey, "laya.webgl.submit.SubmitKey");
            var __proto = SubmitKey.prototype;
            return __proto.clear = function() {
                this.submitType = -1, this.blendShader = this.other = 0
            }, __proto.copyFrom = function(src) {
                this.other = src.other, this.blendShader = src.blendShader, this.submitType = src.submitType
            }, __proto.copyFrom2 = function(src, submitType, other) {
                this.other = other, this.submitType = submitType
            }, __proto.equal3_2 = function(next, submitType, other) {
                return this.submitType === submitType && this.other === other && this.blendShader === next.blendShader
            }, __proto.equal4_2 = function(next, submitType, other) {
                return this.submitType === submitType && this.other === other && this.blendShader === next.blendShader
            }, __proto.equal_3 = function(next) {
                return this.submitType === next.submitType && this.blendShader === next.blendShader
            }, __proto.equal = function(next) {
                return this.other === next.other && this.submitType === next.submitType && this.blendShader === next.blendShader
            }, SubmitKey
        }()),
        SaveMark = function() {
            function SaveMark() {
                this._saveuse = 0
            }
            __class(SaveMark, "laya.webgl.canvas.save.SaveMark");
            var __proto = SaveMark.prototype;
            return Laya.imps(__proto, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), __proto.isSaveMark = function() {
                return !0
            }, __proto.restore = function(context) {
                context._saveMark = this._preSaveMark, SaveMark.POOL[SaveMark.POOL._length++] = this
            }, SaveMark.Create = function(context) {
                var no = SaveMark.POOL,
                    o = no._length > 0 ? no[--no._length] : new SaveMark;
                return o._saveuse = 0, o._preSaveMark = context._saveMark, context._saveMark = o, o
            }, SaveMark.POOL = SaveBase._createArray(), SaveMark
        }(),
        LayaGL = function() {
            function LayaGL() {}
            __class(LayaGL, "laya.layagl.LayaGL");
            var __proto = LayaGL.prototype;
            return __proto.createCommandEncoder = function(reserveSize, adjustSize, isSyncToRenderThread) {
                return void 0 === reserveSize && (reserveSize = 128), void 0 === adjustSize && (adjustSize = 64), void 0 === isSyncToRenderThread && (isSyncToRenderThread = !1), new CommandEncoder(this, reserveSize, adjustSize, isSyncToRenderThread)
            }, __proto.beginCommandEncoding = function(commandEncoder) {}, __proto.endCommandEncoding = function() {}, __proto.matrix4x4Multiply = function(m1, m2, out) {}, __proto.evaluateClipDatasRealTime = function(nodes, playCurTime, realTimeCurrentFrameIndexs, addtive) {}, LayaGL.getFrameCount = function() {
                return 0
            }, LayaGL.syncBufferToRenderThread = function(value, index) {
                void 0 === index && (index = 0)
            }, LayaGL.createArrayBufferRef = function(arrayBuffer, type, syncRender) {}, LayaGL.createArrayBufferRefs = function(arrayBuffer, type, syncRender, refType) {}, LayaGL.EXECUTE_JS_THREAD_BUFFER = 0, LayaGL.EXECUTE_RENDER_THREAD_BUFFER = 1, LayaGL.EXECUTE_COPY_TO_RENDER = 2, LayaGL.EXECUTE_COPY_TO_RENDER3D = 3, LayaGL.ARRAY_BUFFER_TYPE_DATA = 0, LayaGL.ARRAY_BUFFER_TYPE_CMD = 1, LayaGL.ARRAY_BUFFER_REF_REFERENCE = 0, LayaGL.ARRAY_BUFFER_REF_COPY = 1, LayaGL.UPLOAD_SHADER_UNIFORM_TYPE_ID = 0, LayaGL.UPLOAD_SHADER_UNIFORM_TYPE_DATA = 1, LayaGL.instance = null, LayaGL
        }(),
        Earcut = function() {
            function Earcut() {}
            return __class(Earcut, "laya.webgl.shapes.Earcut"), Earcut.earcut = function(data, holeIndices, dim) {
                dim = dim || 2;
                var minX, minY, maxX, maxY, x, y, invSize, hasHoles = holeIndices && holeIndices.length,
                    outerLen = hasHoles ? holeIndices[0] * dim : data.length,
                    outerNode = Earcut.linkedList(data, 0, outerLen, dim, !0),
                    triangles = [];
                if (!outerNode) return triangles;
                if (hasHoles && (outerNode = Earcut.eliminateHoles(data, holeIndices, outerNode, dim)), data.length > 80 * dim) {
                    minX = maxX = data[0], minY = maxY = data[1];
                    for (var i = dim; i < outerLen; i += dim)(x = data[i]) < minX && (minX = x), (y = data[i + 1]) < minY && (minY = y), x > maxX && (maxX = x), y > maxY && (maxY = y);
                    invSize = 0 !== (invSize = Math.max(maxX - minX, maxY - minY)) ? 1 / invSize : 0
                }
                return Earcut.earcutLinked(outerNode, triangles, dim, minX, minY, invSize), triangles
            }, Earcut.linkedList = function(data, start, end, dim, clockwise) {
                var i, last;
                if (clockwise === Earcut.signedArea(data, start, end, dim) > 0)
                    for (i = start; i < end; i += dim) last = Earcut.insertNode(i, data[i], data[i + 1], last);
                else
                    for (i = end - dim; i >= start; i -= dim) last = Earcut.insertNode(i, data[i], data[i + 1], last);
                return last && Earcut.equals(last, last.next) && (Earcut.removeNode(last), last = last.next), last
            }, Earcut.filterPoints = function(start, end) {
                if (!start) return start;
                end || (end = start);
                var again, p = start;
                do {
                    if (again = !1, p.steiner || !Earcut.equals(p, p.next) && 0 !== Earcut.area(p.prev, p, p.next)) p = p.next;
                    else {
                        if (Earcut.removeNode(p), (p = end = p.prev) === p.next) break;
                        again = !0
                    }
                } while (again || p !== end);
                return end
            }, Earcut.earcutLinked = function(ear, triangles, dim, minX, minY, invSize, pass) {
                if (ear) {
                    !pass && invSize && Earcut.indexCurve(ear, minX, minY, invSize);
                    for (var prev, next, stop = ear; ear.prev !== ear.next;)
                        if (prev = ear.prev, next = ear.next, invSize ? Earcut.isEarHashed(ear, minX, minY, invSize) : Earcut.isEar(ear)) triangles.push(prev.i / dim), triangles.push(ear.i / dim), triangles.push(next.i / dim), Earcut.removeNode(ear), ear = next.next, stop = next.next;
                        else if ((ear = next) === stop) {
                        pass ? 1 === pass ? (ear = Earcut.cureLocalIntersections(ear, triangles, dim), Earcut.earcutLinked(ear, triangles, dim, minX, minY, invSize, 2)) : 2 === pass && Earcut.splitEarcut(ear, triangles, dim, minX, minY, invSize) : Earcut.earcutLinked(Earcut.filterPoints(ear, null), triangles, dim, minX, minY, invSize, 1);
                        break
                    }
                }
            }, Earcut.isEar = function(ear) {
                var a = ear.prev,
                    b = ear,
                    c = ear.next;
                if (Earcut.area(a, b, c) >= 0) return !1;
                for (var p = ear.next.next; p !== ear.prev;) {
                    if (Earcut.pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && Earcut.area(p.prev, p, p.next) >= 0) return !1;
                    p = p.next
                }
                return !0
            }, Earcut.isEarHashed = function(ear, minX, minY, invSize) {
                var a = ear.prev,
                    b = ear,
                    c = ear.next;
                if (Earcut.area(a, b, c) >= 0) return !1;
                for (var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x, minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y, maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x, maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y, minZ = Earcut.zOrder(minTX, minTY, minX, minY, invSize), maxZ = Earcut.zOrder(maxTX, maxTY, minX, minY, invSize), p = ear.nextZ; p && p.z <= maxZ;) {
                    if (p !== ear.prev && p !== ear.next && Earcut.pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && Earcut.area(p.prev, p, p.next) >= 0) return !1;
                    p = p.nextZ
                }
                for (p = ear.prevZ; p && p.z >= minZ;) {
                    if (p !== ear.prev && p !== ear.next && Earcut.pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && Earcut.area(p.prev, p, p.next) >= 0) return !1;
                    p = p.prevZ
                }
                return !0
            }, Earcut.cureLocalIntersections = function(start, triangles, dim) {
                var p = start;
                do {
                    var a = p.prev,
                        b = p.next.next;
                    !Earcut.equals(a, b) && Earcut.intersects(a, p, p.next, b) && Earcut.locallyInside(a, b) && Earcut.locallyInside(b, a) && (triangles.push(a.i / dim), triangles.push(p.i / dim), triangles.push(b.i / dim), Earcut.removeNode(p), Earcut.removeNode(p.next), p = start = b), p = p.next
                } while (p !== start);
                return p
            }, Earcut.splitEarcut = function(start, triangles, dim, minX, minY, invSize) {
                var a = start;
                do {
                    for (var b = a.next.next; b !== a.prev;) {
                        if (a.i !== b.i && Earcut.isValidDiagonal(a, b)) {
                            var c = Earcut.splitPolygon(a, b);
                            return a = Earcut.filterPoints(a, a.next), c = Earcut.filterPoints(c, c.next), Earcut.earcutLinked(a, triangles, dim, minX, minY, invSize), void Earcut.earcutLinked(c, triangles, dim, minX, minY, invSize)
                        }
                        b = b.next
                    }
                    a = a.next
                } while (a !== start)
            }, Earcut.eliminateHoles = function(data, holeIndices, outerNode, dim) {
                var i, len, start, end, list, queue = [];
                for (i = 0, len = holeIndices.length; i < len; i++) start = holeIndices[i] * dim, end = i < len - 1 ? holeIndices[i + 1] * dim : data.length, (list = Earcut.linkedList(data, start, end, dim, !1)) === list.next && (list.steiner = !0), queue.push(Earcut.getLeftmost(list));
                for (queue.sort(Earcut.compareX), i = 0; i < queue.length; i++) Earcut.eliminateHole(queue[i], outerNode), outerNode = Earcut.filterPoints(outerNode, outerNode.next);
                return outerNode
            }, Earcut.compareX = function(a, b) {
                return a.x - b.x
            }, Earcut.eliminateHole = function(hole, outerNode) {
                if (outerNode = Earcut.findHoleBridge(hole, outerNode)) {
                    var b = Earcut.splitPolygon(outerNode, hole);
                    Earcut.filterPoints(b, b.next)
                }
            }, Earcut.findHoleBridge = function(hole, outerNode) {
                var m, p = outerNode,
                    hx = hole.x,
                    hy = hole.y,
                    qx = -1 / 0;
                do {
                    if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
                        var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
                        if (x <= hx && x > qx) {
                            if (qx = x, x === hx) {
                                if (hy === p.y) return p;
                                if (hy === p.next.y) return p.next
                            }
                            m = p.x < p.next.x ? p : p.next
                        }
                    }
                    p = p.next
                } while (p !== outerNode);
                if (!m) return null;
                if (hx === qx) return m.prev;
                var tan, stop = m,
                    mx = m.x,
                    my = m.y,
                    tanMin = 1 / 0;
                for (p = m.next; p !== stop;) hx >= p.x && p.x >= mx && hx !== p.x && Earcut.pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y) && ((tan = Math.abs(hy - p.y) / (hx - p.x)) < tanMin || tan === tanMin && p.x > m.x) && Earcut.locallyInside(p, hole) && (m = p, tanMin = tan), p = p.next;
                return m
            }, Earcut.indexCurve = function(start, minX, minY, invSize) {
                var p = start;
                do {
                    null === p.z && (p.z = Earcut.zOrder(p.x, p.y, minX, minY, invSize)), p.prevZ = p.prev, p.nextZ = p.next, p = p.next
                } while (p !== start);
                p.prevZ.nextZ = null, p.prevZ = null, Earcut.sortLinked(p)
            }, Earcut.sortLinked = function(list) {
                var i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
                do {
                    for (p = list, list = null, tail = null, numMerges = 0; p;) {
                        for (numMerges++, q = p, pSize = 0, i = 0; i < inSize && (pSize++, q = q.nextZ); i++);
                        for (qSize = inSize; pSize > 0 || qSize > 0 && q;) 0 !== pSize && (0 === qSize || !q || p.z <= q.z) ? (e = p, p = p.nextZ, pSize--) : (e = q, q = q.nextZ, qSize--), tail ? tail.nextZ = e : list = e, e.prevZ = tail, tail = e;
                        p = q
                    }
                    tail.nextZ = null, inSize *= 2
                } while (numMerges > 1);
                return list
            }, Earcut.zOrder = function(x, y, minX, minY, invSize) {
                return (x = 1431655765 & ((x = 858993459 & ((x = 252645135 & ((x = 16711935 & ((x = 32767 * (x - minX) * invSize) | x << 8)) | x << 4)) | x << 2)) | x << 1)) | (y = 1431655765 & ((y = 858993459 & ((y = 252645135 & ((y = 16711935 & ((y = 32767 * (y - minY) * invSize) | y << 8)) | y << 4)) | y << 2)) | y << 1)) << 1
            }, Earcut.getLeftmost = function(start) {
                var p = start,
                    leftmost = start;
                do {
                    p.x < leftmost.x && (leftmost = p), p = p.next
                } while (p !== start);
                return leftmost
            }, Earcut.pointInTriangle = function(ax, ay, bx, by, cx, cy, px, py) {
                return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0
            }, Earcut.isValidDiagonal = function(a, b) {
                return a.next.i !== b.i && a.prev.i !== b.i && !Earcut.intersectsPolygon(a, b) && Earcut.locallyInside(a, b) && Earcut.locallyInside(b, a) && Earcut.middleInside(a, b)
            }, Earcut.area = function(p, q, r) {
                return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y)
            }, Earcut.equals = function(p1, p2) {
                return p1.x === p2.x && p1.y === p2.y
            }, Earcut.intersects = function(p1, q1, p2, q2) {
                return !!(Earcut.equals(p1, q1) && Earcut.equals(p2, q2) || Earcut.equals(p1, q2) && Earcut.equals(p2, q1)) || Earcut.area(p1, q1, p2) > 0 != Earcut.area(p1, q1, q2) > 0 && Earcut.area(p2, q2, p1) > 0 != Earcut.area(p2, q2, q1) > 0
            }, Earcut.intersectsPolygon = function(a, b) {
                var p = a;
                do {
                    if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && Earcut.intersects(p, p.next, a, b)) return !0;
                    p = p.next
                } while (p !== a);
                return !1
            }, Earcut.locallyInside = function(a, b) {
                return Earcut.area(a.prev, a, a.next) < 0 ? Earcut.area(a, b, a.next) >= 0 && Earcut.area(a, a.prev, b) >= 0 : Earcut.area(a, b, a.prev) < 0 || Earcut.area(a, a.next, b) < 0
            }, Earcut.middleInside = function(a, b) {
                var p = a,
                    inside = !1,
                    px = (a.x + b.x) / 2,
                    py = (a.y + b.y) / 2;
                do {
                    p.y > py != p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x && (inside = !inside), p = p.next
                } while (p !== a);
                return inside
            }, Earcut.splitPolygon = function(a, b) {
                var a2 = new EarcutNode(a.i, a.x, a.y),
                    b2 = new EarcutNode(b.i, b.x, b.y),
                    an = a.next,
                    bp = b.prev;
                return a.next = b, b.prev = a, a2.next = an, an.prev = a2, b2.next = a2, a2.prev = b2, bp.next = b2, b2.prev = bp, b2
            }, Earcut.insertNode = function(i, x, y, last) {
                var p = new EarcutNode(i, x, y);
                return last ? (p.next = last.next, p.prev = last, last.next.prev = p, last.next = p) : (p.prev = p, p.next = p), p
            }, Earcut.removeNode = function(p) {
                p.next.prev = p.prev, p.prev.next = p.next, p.prevZ && (p.prevZ.nextZ = p.nextZ), p.nextZ && (p.nextZ.prevZ = p.prevZ)
            }, Earcut.signedArea = function(data, start, end, dim) {
                for (var sum = 0, i = start, j = end - dim; i < end; i += dim) sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]), j = i;
                return sum
            }, Earcut
        }(),
        Path = function() {
            var renderPath;

            function Path() {
                this._lastOriX = 0, this._lastOriY = 0, this.paths = [], this._curPath = null
            }
            __class(Path, "laya.webgl.canvas.Path");
            var __proto = Path.prototype;
            return __proto.beginPath = function(convex) {
                this.paths.length = 1, this._curPath = this.paths[0] = new renderPath, this._curPath.convex = convex
            }, __proto.closePath = function() {
                this._curPath.loop = !0
            }, __proto.newPath = function() {
                this._curPath = new renderPath, this.paths.push(this._curPath)
            }, __proto.addPoint = function(pointX, pointY) {
                this._curPath.path.push(pointX, pointY)
            }, __proto.push = function(points, convex) {
                this._curPath ? this._curPath.path.length > 0 && (this._curPath = new renderPath, this.paths.push(this._curPath)) : (this._curPath = new renderPath, this.paths.push(this._curPath));
                var rp = this._curPath;
                rp.path = points.slice(), rp.convex = convex
            }, __proto.reset = function() {
                this.paths.length = 0
            }, Path.__init$ = function() {
                renderPath = function() {
                    function renderPath() {
                        this.path = [], this.loop = !1, this.convex = !1
                    }
                    return __class(renderPath, ""), renderPath
                }()
            }, Path
        }(),
        SubmitCMD = function() {
            function SubmitCMD() {
                this.fun = null, this._this = null, this.args = null, this._ref = 1, this._key = new SubmitKey
            }
            __class(SubmitCMD, "laya.webgl.submit.SubmitCMD");
            var __proto = SubmitCMD.prototype;
            return Laya.imps(__proto, {
                "laya.webgl.submit.ISubmit": !0
            }), __proto.renderSubmit = function() {
                return this.fun.apply(this._this, this.args), 1
            }, __proto.getRenderType = function() {
                return 0
            }, __proto.reUse = function(context, pos) {
                return this._ref++, pos
            }, __proto.releaseRender = function() {
                if (--this._ref < 1) {
                    var pool = SubmitCMD.POOL;
                    pool[pool._length++] = this
                }
            }, __proto.clone = function(context, mesh, pos) {
                return null
            }, SubmitCMD.create = function(args, fun, thisobj) {
                var o = SubmitCMD.POOL._length ? SubmitCMD.POOL[--SubmitCMD.POOL._length] : new SubmitCMD;
                return o.fun = fun, o.args = args, o._this = thisobj, o._ref = 1, o._key.clear(), o
            }, SubmitCMD.POOL = (SubmitCMD.POOL = [], SubmitCMD.POOL._length = 0, SubmitCMD.POOL), SubmitCMD
        }(),
        CONST3D2D = (function() {
            function MatirxArray() {}
            __class(MatirxArray, "laya.webgl.utils.MatirxArray"), MatirxArray.ArrayMul = function(a, b, o) {
                if (a)
                    if (b)
                        for (var ai0 = NaN, ai1 = NaN, ai2 = NaN, ai3 = NaN, i = 0; i < 4; i++) ai0 = a[i], ai1 = a[i + 4], ai2 = a[i + 8], ai3 = a[i + 12], o[i] = ai0 * b[0] + ai1 * b[1] + ai2 * b[2] + ai3 * b[3], o[i + 4] = ai0 * b[4] + ai1 * b[5] + ai2 * b[6] + ai3 * b[7], o[i + 8] = ai0 * b[8] + ai1 * b[9] + ai2 * b[10] + ai3 * b[11], o[i + 12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
                    else MatirxArray.copyArray(a, o);
                else MatirxArray.copyArray(b, o)
            }, MatirxArray.copyArray = function(f, t) {
                if (f && t)
                    for (var i = 0; i < f.length; i++) t[i] = f[i]
            }
        }(), function() {
            function VertexArrayObject() {}
            return __class(VertexArrayObject, "laya.webgl.VertexArrayObject"), VertexArrayObject
        }()(function() {
            var glErrorShadow = {};

            function synthesizeGLError(err, opt_msg) {
                var msg;
                glErrorShadow[err] = !0, void 0 !== opt_msg && (msg = opt_msg, window.console && window.console.error && window.console.error(msg))
            }
            var WebGLVertexArrayObjectOES = function WebGLVertexArrayObjectOES(ext) {
                var gl = ext.gl;
                this.ext = ext, this.isAlive = !0, this.hasBeenBound = !1, this.elementArrayBuffer = null, this.attribs = new Array(ext.maxVertexAttribs);
                for (var n = 0; n < this.attribs.length; n++) {
                    var attrib = new WebGLVertexArrayObjectOES.VertexAttrib(gl);
                    this.attribs[n] = attrib
                }
                this.maxAttrib = 0
            };
            (WebGLVertexArrayObjectOES.VertexAttrib = function(gl) {
                this.enabled = !1, this.buffer = null, this.size = 4, this.type = gl.FLOAT, this.normalized = !1, this.stride = 16, this.offset = 0, this.cached = "", this.recache()
            }).prototype.recache = function() {
                this.cached = [this.size, this.type, this.normalized, this.stride, this.offset].join(":")
            };
            var OESVertexArrayObject = function(gl) {
                var self = this;
                this.gl = gl,
                    function(gl) {
                        var f = gl.getError;
                        gl.getError = function() {
                            do {
                                (err = f.apply(gl)) != gl.NO_ERROR && (glErrorShadow[err] = !0)
                            } while (err != gl.NO_ERROR);
                            for (var err in glErrorShadow)
                                if (glErrorShadow[err]) return delete glErrorShadow[err], parseInt(err);
                            return gl.NO_ERROR
                        }
                    }(gl);
                var original = this.original = {
                    getParameter: gl.getParameter,
                    enableVertexAttribArray: gl.enableVertexAttribArray,
                    disableVertexAttribArray: gl.disableVertexAttribArray,
                    bindBuffer: gl.bindBuffer,
                    getVertexAttrib: gl.getVertexAttrib,
                    vertexAttribPointer: gl.vertexAttribPointer
                };
                gl.getParameter = function(pname) {
                    return pname == self.VERTEX_ARRAY_BINDING_OES ? self.currentVertexArrayObject == self.defaultVertexArrayObject ? null : self.currentVertexArrayObject : original.getParameter.apply(this, arguments)
                }, gl.enableVertexAttribArray = function(index) {
                    var vao = self.currentVertexArrayObject;
                    return vao.maxAttrib = Math.max(vao.maxAttrib, index), vao.attribs[index].enabled = !0, original.enableVertexAttribArray.apply(this, arguments)
                }, gl.disableVertexAttribArray = function(index) {
                    var vao = self.currentVertexArrayObject;
                    return vao.maxAttrib = Math.max(vao.maxAttrib, index), vao.attribs[index].enabled = !1, original.disableVertexAttribArray.apply(this, arguments)
                }, gl.bindBuffer = function(target, buffer) {
                    switch (target) {
                        case gl.ARRAY_BUFFER:
                            self.currentArrayBuffer = buffer;
                            break;
                        case gl.ELEMENT_ARRAY_BUFFER:
                            self.currentVertexArrayObject.elementArrayBuffer = buffer
                    }
                    return original.bindBuffer.apply(this, arguments)
                }, gl.getVertexAttrib = function(index, pname) {
                    var attrib = self.currentVertexArrayObject.attribs[index];
                    switch (pname) {
                        case gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                            return attrib.buffer;
                        case gl.VERTEX_ATTRIB_ARRAY_ENABLED:
                            return attrib.enabled;
                        case gl.VERTEX_ATTRIB_ARRAY_SIZE:
                            return attrib.size;
                        case gl.VERTEX_ATTRIB_ARRAY_STRIDE:
                            return attrib.stride;
                        case gl.VERTEX_ATTRIB_ARRAY_TYPE:
                            return attrib.type;
                        case gl.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                            return attrib.normalized;
                        default:
                            return original.getVertexAttrib.apply(this, arguments)
                    }
                }, gl.vertexAttribPointer = function(indx, size, type, normalized, stride, offset) {
                    var vao = self.currentVertexArrayObject;
                    vao.maxAttrib = Math.max(vao.maxAttrib, indx);
                    var attrib = vao.attribs[indx];
                    return attrib.buffer = self.currentArrayBuffer, attrib.size = size, attrib.type = type, attrib.normalized = normalized, attrib.stride = stride, attrib.offset = offset, attrib.recache(), original.vertexAttribPointer.apply(this, arguments)
                }, gl.instrumentExtension && gl.instrumentExtension(this, "OES_vertex_array_object"), gl.canvas && gl.canvas.addEventListener && gl.canvas.addEventListener("webglcontextrestored", function() {
                    var msg;
                    msg = "OESVertexArrayObject emulation library context restored", window.console && window.console.log && window.console.log(msg), self.reset_()
                }, !0), this.reset_()
            };
            OESVertexArrayObject.prototype.VERTEX_ARRAY_BINDING_OES = 34229, OESVertexArrayObject.prototype.reset_ = function() {
                if (void 0 !== this.vertexArrayObjects)
                    for (var ii = 0; ii < this.vertexArrayObjects.length; ++ii) this.vertexArrayObjects.isAlive = !1;
                var gl = this.gl;
                this.maxVertexAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS), this.defaultVertexArrayObject = new WebGLVertexArrayObjectOES(this), this.currentVertexArrayObject = null, this.currentArrayBuffer = null, this.vertexArrayObjects = [this.defaultVertexArrayObject], this.bindVertexArrayOES(null)
            }, OESVertexArrayObject.prototype.createVertexArrayOES = function() {
                var arrayObject = new WebGLVertexArrayObjectOES(this);
                return this.vertexArrayObjects.push(arrayObject), arrayObject
            }, OESVertexArrayObject.prototype.deleteVertexArrayOES = function(arrayObject) {
                arrayObject.isAlive = !1, this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(arrayObject), 1), this.currentVertexArrayObject == arrayObject && this.bindVertexArrayOES(null)
            }, OESVertexArrayObject.prototype.isVertexArrayOES = function(arrayObject) {
                return !!(arrayObject && arrayObject instanceof WebGLVertexArrayObjectOES && arrayObject.hasBeenBound && arrayObject.ext == this)
            }, OESVertexArrayObject.prototype.bindVertexArrayOES = function(arrayObject) {
                var gl = this.gl;
                if (!arrayObject || arrayObject.isAlive) {
                    var original = this.original,
                        oldVAO = this.currentVertexArrayObject;
                    this.currentVertexArrayObject = arrayObject || this.defaultVertexArrayObject, this.currentVertexArrayObject.hasBeenBound = !0;
                    var newVAO = this.currentVertexArrayObject;
                    if (oldVAO != newVAO) {
                        oldVAO && newVAO.elementArrayBuffer == oldVAO.elementArrayBuffer || original.bindBuffer.call(gl, gl.ELEMENT_ARRAY_BUFFER, newVAO.elementArrayBuffer);
                        for (var currentBinding = this.currentArrayBuffer, maxAttrib = Math.max(oldVAO ? oldVAO.maxAttrib : 0, newVAO.maxAttrib), n = 0; n <= maxAttrib; n++) {
                            var attrib = newVAO.attribs[n],
                                oldAttrib = oldVAO ? oldVAO.attribs[n] : null;
                            if (oldVAO && attrib.enabled == oldAttrib.enabled || (attrib.enabled ? original.enableVertexAttribArray.call(gl, n) : original.disableVertexAttribArray.call(gl, n)), attrib.enabled) {
                                var bufferChanged = !1;
                                oldVAO && attrib.buffer == oldAttrib.buffer || (currentBinding != attrib.buffer && (original.bindBuffer.call(gl, gl.ARRAY_BUFFER, attrib.buffer), currentBinding = attrib.buffer), bufferChanged = !0), (bufferChanged || attrib.cached != oldAttrib.cached) && original.vertexAttribPointer.call(gl, n, attrib.size, attrib.type, attrib.normalized, attrib.stride, attrib.offset)
                            }
                        }
                        this.currentArrayBuffer != currentBinding && original.bindBuffer.call(gl, gl.ARRAY_BUFFER, this.currentArrayBuffer)
                    }
                } else synthesizeGLError(gl.INVALID_OPERATION, "bindVertexArrayOES: attempt to bind deleted arrayObject")
            }, window._setupVertexArrayObject = function(gl) {
                var original_getSupportedExtensions = gl.getSupportedExtensions;
                gl.getSupportedExtensions = function() {
                    var list = original_getSupportedExtensions.call(this) || [];
                    return list.indexOf("OES_vertex_array_object") < 0 && list.push("OES_vertex_array_object"), list
                };
                var original_getExtension = gl.getExtension;
                gl.getExtension = function(name) {
                    var ext = original_getExtension.call(this, name);
                    return ext || ("OES_vertex_array_object" !== name ? null : (this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), this.__OESVertexArrayObject = new OESVertexArrayObject(this)), this.__OESVertexArrayObject))
                }
            }, window._forceSetupVertexArrayObject = function(gl) {
                var original_getSupportedExtensions = gl.getSupportedExtensions;
                gl.getSupportedExtensions = function() {
                    var list = original_getSupportedExtensions.call(this) || [];
                    return list.indexOf("OES_vertex_array_object") < 0 && list.push("OES_vertex_array_object"), list
                };
                var original_getExtension = gl.getExtension;
                gl.getExtension = function(name) {
                    if ("OES_vertex_array_object" === name) return this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), this.__OESVertexArrayObject = new OESVertexArrayObject(this)), this.__OESVertexArrayObject;
                    var ext = original_getExtension.call(this, name);
                    return ext || null
                }
            }
        }()), function() {
            function CONST3D2D() {}
            return __class(CONST3D2D, "laya.webgl.utils.CONST3D2D"), CONST3D2D.BYTES_PE = 4, CONST3D2D.BYTES_PIDX = 2, CONST3D2D.defaultMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], CONST3D2D.defaultMinusYMatrix4 = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], CONST3D2D.uniformMatrix3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], CONST3D2D._TMPARRAY = [], CONST3D2D._OFFSETX = 0, CONST3D2D._OFFSETY = 0, CONST3D2D
        }()),
        RenderSprite3D = function(_super) {
            function RenderSprite3D(type, next) {
                RenderSprite3D.__super.call(this, type, next)
            }
            __class(RenderSprite3D, "laya.webgl.utils.RenderSprite3D", RenderSprite);
            var __proto = RenderSprite3D.prototype;
            return __proto.onCreate = function(type) {
                switch (type) {
                    case 4:
                        return void(this._fun = this._blend)
                }
            }, __proto._mask = function(sprite, context, x, y) {
                var next = this._next,
                    mask = sprite.mask,
                    ctx = context;
                if (mask) {
                    ctx.save();
                    var preBlendMode = ctx.globalCompositeOperation,
                        tRect = new Rectangle;
                    if (tRect.copyFrom(mask.getBounds()), tRect.width = Math.round(tRect.width), tRect.height = Math.round(tRect.height), tRect.x = Math.round(tRect.x), tRect.y = Math.round(tRect.y), tRect.width > 0 && tRect.height > 0) {
                        var w = tRect.width,
                            h = tRect.height,
                            tmpRT = WebGLRTMgr.getRT(w, h);
                        ctx.breakNextMerge(), ctx.pushRT(), ctx.addRenderObject(SubmitCMD.create([ctx, tmpRT, w, h], laya.webgl.utils.RenderSprite3D.tmpTarget, this)), mask.render(ctx, -tRect.x, -tRect.y), ctx.breakNextMerge(), ctx.popRT(), ctx.save(), ctx.clipRect(x + tRect.x - sprite.getStyle().pivotX, y + tRect.y - sprite.getStyle().pivotY, w, h), next._fun.call(next, sprite, ctx, x, y), ctx.restore(), preBlendMode = ctx.globalCompositeOperation, ctx.addRenderObject(SubmitCMD.create(["mask"], laya.webgl.utils.RenderSprite3D.setBlendMode, this));
                        var shaderValue = Value2D.create(1, 0),
                            uv = Texture.INV_UV;
                        ctx.drawTarget(tmpRT, x + tRect.x - sprite.getStyle().pivotX, y + tRect.y - sprite.getStyle().pivotY, w, h, Matrix.TEMP.identity(), shaderValue, uv, 6), ctx.addRenderObject(SubmitCMD.create([tmpRT], laya.webgl.utils.RenderSprite3D.recycleTarget, this)), ctx.addRenderObject(SubmitCMD.create([preBlendMode], laya.webgl.utils.RenderSprite3D.setBlendMode, this))
                    }
                    ctx.restore()
                } else next._fun.call(next, sprite, context, x, y)
            }, __proto._blend = function(sprite, context, x, y) {
                var style = sprite._style,
                    next = this._next;
                style.blendMode ? (context.save(), context.globalCompositeOperation = style.blendMode, next._fun.call(next, sprite, context, x, y), context.restore()) : next._fun.call(next, sprite, context, x, y)
            }, RenderSprite3D.tmpTarget = function(ctx, rt, w, h) {
                rt.start(), rt.clear(0, 0, 0, 0)
            }, RenderSprite3D.recycleTarget = function(rt) {
                WebGLRTMgr.releaseRT(rt)
            }, RenderSprite3D.setBlendMode = function(blendMode) {
                var gl = WebGL.mainContext;
                BlendMode.targetFns[BlendMode.TOINT[blendMode]](gl)
            }, __static(RenderSprite3D, ["tempUV", function() {
                return this.tempUV = new Array(8)
            }]), RenderSprite3D
        }(),
        WebGLContext2D = function(_super) {
            var ContextParams;

            function WebGLContext2D() {
                if (this._drawTriUseAbsMatrix = !1, this._id = ++WebGLContext2D._COUNT, this._other = null, this._renderNextSubmitIndex = 0, this._path = null, this._drawCount = 1, this._renderCount = 0, this._isConvexCmd = !0, this._submits = null, this._curSubmit = null, this._mesh = null, this._pathMesh = null, this._triangleMesh = null, this.meshlist = [], this._clipInCache = !1, this._clipInfoID = 0, this._curMat = null, this._lastMatScaleX = 1, this._lastMatScaleY = 1, this._lastMat_a = 1, this._lastMat_b = 0, this._lastMat_c = 0, this._lastMat_d = 1, this._nBlendType = 0, this._save = null, this._targets = null, this._charSubmitCache = null, this._saveMark = null, this.sprite = null, this._drawTextureUseColor = !1, this._italicDeg = 0, this._lastTex = null, this._fillColor = 0, this._flushCnt = 0, this._colorFiler = null, this.drawTexAlign = !1, this._incache = !1, this.mId = -1, this.mHaveKey = !1, this.mHaveLineKey = !1, WebGLContext2D.__super.call(this), this._tmpMatrix = new Matrix, this._drawTexToDrawTri_Vert = new Float32Array(8), this._drawTexToDrawTri_Index = new Uint16Array([0, 1, 2, 0, 2, 3]), this._tempUV = new Float32Array(8), this._width = 99999999, this._height = 99999999, this._submitKey = new SubmitKey, this._transedPoints = new Array(8), this._temp4Points = new Array(8), this._clipRect = WebGLContext2D.MAXCLIPRECT, this._globalClipMatrix = new Matrix(99999999, 0, 0, 99999999, 0, 0), this._shader2D = new Shader2D, this.mOutPoint, WebGLContext2D._contextcount++, !WebGLContext2D.defTexture) {
                    var defTex2d = new Texture2D(2, 2);
                    defTex2d.setPixels(new Uint8Array(16)), defTex2d.lock = !0, WebGLContext2D.defTexture = new Texture(defTex2d)
                }
                this._lastTex = WebGLContext2D.defTexture, this.clear()
            }
            __class(WebGLContext2D, "laya.webgl.canvas.WebGLContext2D", Context);
            var __proto = WebGLContext2D.prototype;
            return __proto.clearBG = function(r, g, b, a) {
                var gl = WebGL.mainContext;
                gl.clearColor(r, g, b, a), gl.clear(16384)
            }, __proto._getSubmits = function() {
                return this._submits
            }, __proto._releaseMem = function() {
                if (this._submits) {
                    this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(), this._shader2D = null, this._charSubmitCache.clear();
                    for (var i = 0, n = this._submits._length; i < n; i++) this._submits[i].releaseRender();
                    this._submits.length = 0, this._submits._length = 0, this._submits = null, this._curSubmit = null, this._path = null, this._save = null;
                    var sz;
                    for (i = 0, sz = this.meshlist.length; i < sz; i++) {
                        this.meshlist[i].destroy()
                    }
                    this.meshlist.length = 0, this.sprite = null, this._targets && this._targets.destroy(), this._targets = null
                }
            }, __proto.destroy = function() {
                --WebGLContext2D._contextcount, this.sprite = null, this._releaseMem(), this._charSubmitCache.destroy(), this._targets && this._targets.destroy(), this._targets = null, this._mesh.destroy()
            }, __proto.clear = function() {
                this._submits || (this._other = ContextParams.DEFAULT, this._curMat = Matrix.create(), this._charSubmitCache = new CharSubmitCache, this._mesh = MeshQuadTexture.getAMesh(), this.meshlist.push(this._mesh), this._pathMesh = MeshVG.getAMesh(), this.meshlist.push(this._pathMesh), this._triangleMesh = MeshTexture.getAMesh(), this.meshlist.push(this._triangleMesh), this._submits = [], this._save = [SaveMark.Create(this)], this._save.length = 10, this._shader2D = new Shader2D), this._submitKey.clear(), this._mesh.clearVB(), this._renderCount++, this._drawCount = 1, this._other = ContextParams.DEFAULT, this._other.lineWidth = this._shader2D.ALPHA = 1, this._nBlendType = 0, this._clipRect = WebGLContext2D.MAXCLIPRECT, this._curSubmit = Submit.RENDERBASE, Submit.RENDERBASE._ref = 16777215, Submit.RENDERBASE._numEle = 0, this._shader2D.fillStyle = this._shader2D.strokeStyle = DrawStyle.DEFAULT;
                for (var i = 0, n = this._submits._length; i < n; i++) this._submits[i].releaseRender();
                this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0], this._save._length = 1
            }, __proto.size = function(w, h) {
                this._width == w && this._height == h || (this._width = w, this._height = h, this._targets && (this._targets.destroy(), this._targets = new RenderTexture2D(w, h, 1, -1)), Render._context == this && (WebGL.mainContext.viewport(0, 0, w, h), RenderState2D.width = w, RenderState2D.height = h)), 0 === w && 0 === h && this._releaseMem()
            }, __proto.getMatScaleX = function() {
                return this._lastMat_a == this._curMat.a && this._lastMat_b == this._curMat.b ? this._lastMatScaleX : (this._lastMatScaleX = this._curMat.getScaleX(), this._lastMat_a = this._curMat.a, this._lastMat_b = this._curMat.b, this._lastMatScaleX)
            }, __proto.getMatScaleY = function() {
                return this._lastMat_c == this._curMat.c && this._lastMat_d == this._curMat.d ? this._lastMatScaleY : (this._lastMatScaleY = this._curMat.getScaleY(), this._lastMat_c = this._curMat.c, this._lastMat_d = this._curMat.d, this._lastMatScaleY)
            }, __proto.setFillColor = function(color) {
                this._fillColor = color
            }, __proto.getFillColor = function() {
                return this._fillColor
            }, __proto.translate = function(x, y) {
                0 === x && 0 === y || (SaveTranslate.save(this), this._curMat._bTransform ? (SaveTransform.save(this), this._curMat.tx += x * this._curMat.a + y * this._curMat.c, this._curMat.ty += x * this._curMat.b + y * this._curMat.d) : (this._curMat.tx = x, this._curMat.ty = y))
            }, __proto.save = function() {
                this._save[this._save._length++] = SaveMark.Create(this)
            }, __proto.restore = function() {
                var sz = this._save._length,
                    lastBlend = this._nBlendType;
                if (!(sz < 1)) {
                    for (var i = sz - 1; i >= 0; i--) {
                        var o = this._save[i];
                        if (o.restore(this), o.isSaveMark()) return void(this._save._length = i)
                    }
                    lastBlend != this._nBlendType && (this._curSubmit = Submit.RENDERBASE)
                }
            }, __proto.fillText = function(txt, x, y, fontStr, color, align) {
                this._fillText(txt, null, x, y, fontStr, color, null, 0, null)
            }, __proto._fillText = function(txt, words, x, y, fontStr, color, strokeColor, lineWidth, textAlign, underLine) {
                void 0 === underLine && (underLine = 0), txt ? WebGLContext2D._textRender.filltext(this, txt, x, y, fontStr, color, strokeColor, lineWidth, textAlign, underLine) : words && WebGLContext2D._textRender.fillWords(this, words, x, y, fontStr, color, strokeColor, lineWidth)
            }, __proto._fast_filltext = function(data, x, y, fontObj, color, strokeColor, lineWidth, textAlign, underLine) {
                void 0 === underLine && (underLine = 0), WebGLContext2D._textRender._fast_filltext(this, data, null, x, y, fontObj, color, strokeColor, lineWidth, textAlign, underLine)
            }, __proto.fillWords = function(words, x, y, fontStr, color) {
                this._fillText(null, words, x, y, fontStr, color, null, -1, null, 0)
            }, __proto.fillBorderWords = function(words, x, y, font, color, borderColor, lineWidth) {
                this._fillBorderText(null, words, x, y, font, color, borderColor, lineWidth, null)
            }, __proto.drawText = function(text, x, y, font, color, textAlign) {
                this._fillText(text, null, x, y, font, ColorUtils.create(color).strColor, null, -1, textAlign)
            }, __proto.strokeWord = function(text, x, y, font, color, lineWidth, textAlign) {
                this._fillText(text, null, x, y, font, null, ColorUtils.create(color).strColor, lineWidth || 1, textAlign)
            }, __proto.fillBorderText = function(txt, x, y, fontStr, fillColor, borderColor, lineWidth, textAlign) {
                this._fillBorderText(txt, null, x, y, fontStr, ColorUtils.create(fillColor).strColor, ColorUtils.create(borderColor).strColor, lineWidth, textAlign)
            }, __proto._fillBorderText = function(txt, words, x, y, fontStr, fillColor, borderColor, lineWidth, textAlign) {
                this._fillText(txt, words, x, y, fontStr, fillColor, borderColor, lineWidth || 1, textAlign)
            }, __proto._fillRect = function(x, y, width, height, rgba) {
                var submit = this._curSubmit,
                    sameKey = submit && 2 === submit._key.submitType && submit._key.blendShader === this._nBlendType;
                this._mesh.vertNum + 4 > 65535 && (this._mesh = MeshQuadTexture.getAMesh(), this.meshlist.push(this._mesh), sameKey = !1), sameKey && (sameKey = sameKey && this.isSameClipInfo(submit)), this.transformQuad(x, y, width, height, 0, this._curMat, this._transedPoints), this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, Texture.NO_UV, rgba, !1), sameKey || (submit = this._curSubmit = SubmitTexture.create(this, this._mesh, Value2D.create(1, 0)), this._submits[this._submits._length++] = submit, this._copyClipInfo(submit, this._globalClipMatrix), submit.shaderValue.textureHost = this._lastTex, submit._key.other = this._lastTex && this._lastTex.bitmap ? this._lastTex.bitmap.id : -1, submit._renderType = 10016), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4)
            }, __proto.fillRect = function(x, y, width, height, fillStyle) {
                var drawstyle = fillStyle ? DrawStyle.create(fillStyle) : this._shader2D.fillStyle,
                    rgba = this.mixRGBandAlpha(drawstyle.toInt());
                this._fillRect(x, y, width, height, rgba)
            }, __proto.fillTexture = function(texture, x, y, width, height, type, offset, other) {
                texture._getSource() ? this._fillTexture(texture, texture.width, texture.height, texture.uvrect, x, y, width, height, type, offset.x, offset.y) : this.sprite && Laya.systemTimer.callLater(this, this._repaintSprite)
            }, __proto._fillTexture = function(texture, texw, texh, texuvRect, x, y, width, height, type, offsetx, offsety) {
                var submit = this._curSubmit;
                this._mesh.vertNum + 4 > 65535 && (this._mesh = MeshQuadTexture.getAMesh(), this.meshlist.push(this._mesh));
                var repeatx = !0,
                    repeaty = !0;
                switch (type) {
                    case "repeat":
                        break;
                    case "repeat-x":
                        repeaty = !1;
                        break;
                    case "repeat-y":
                        repeatx = !1;
                        break;
                    case "no-repeat":
                        repeatx = repeaty = !1
                }
                var uv = this._temp4Points,
                    stu = 0,
                    stv = 0,
                    stx = 0,
                    sty = 0,
                    edx = 0,
                    edy = 0;
                if (offsetx < 0 ? (stx = x, stu = -offsetx % texw / texw) : stx = x + offsetx, offsety < 0 ? (sty = y, stv = -offsety % texh / texh) : sty = y + offsety, edx = x + width, edy = y + height, !repeatx && (edx = Math.min(edx, x + offsetx + texw)), !repeaty && (edy = Math.min(edy, y + offsety + texh)), !(edx < x || edy < y || stx > edx || sty > edy)) {
                    var edu = (edx - x - offsetx) / texw,
                        edv = (edy - y - offsety) / texh;
                    if (this.transformQuad(stx, sty, edx - stx, edy - sty, 0, this._curMat, this._transedPoints), uv[0] = stu, uv[1] = stv, uv[2] = edu, uv[3] = stv, uv[4] = edu, uv[5] = edv, uv[6] = stu, uv[7] = edv, !this.clipedOff(this._transedPoints)) {
                        var rgba = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA);
                        this._mesh.addQuad(this._transedPoints, uv, rgba, !0);
                        var sv = Value2D.create(1, 0);
                        sv.defines.add(256), sv.u_TexRange = texuvRect, submit = this._curSubmit = SubmitTexture.create(this, this._mesh, sv), this._submits[this._submits._length++] = submit, this._copyClipInfo(submit, this._globalClipMatrix), submit.shaderValue.textureHost = texture, submit._renderType = 10016, this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4
                    }
                    this.breakNextMerge()
                }
            }, __proto.setColorFilter = function(filter) {
                SaveBase.save(this, 8388608, this, !0), this._colorFiler = filter, this._curSubmit = Submit.RENDERBASE
            }, __proto.drawTexture = function(tex, x, y, width, height) {
                this._drawTextureM(tex, x, y, width, height, null, 1, null)
            }, __proto.drawTextures = function(tex, pos, tx, ty) {
                if (tex._getSource())
                    for (var n = pos.length / 2, ipos = 0, bmpid = tex.bitmap.id, i = 0; i < n; i++) this._inner_drawTexture(tex, bmpid, pos[ipos++] + tx, pos[ipos++] + ty, 0, 0, null, null, 1, !1);
                else this.sprite && Laya.systemTimer.callLater(this, this._repaintSprite)
            }, __proto._drawTextureAddSubmit = function(imgid, tex) {
                var submit = null;
                submit = SubmitTexture.create(this, this._mesh, Value2D.create(1, 0)), this._submits[this._submits._length++] = submit, submit.shaderValue.textureHost = tex, submit._key.other = imgid, submit._renderType = 10016, this._curSubmit = submit
            }, __proto._drawTextureM = function(tex, x, y, width, height, m, alpha, uv) {
                return tex._getSource() ? this._inner_drawTexture(tex, tex.bitmap.id, x, y, width, height, m, uv, alpha, !1) : (this.sprite && Laya.systemTimer.callLater(this, this._repaintSprite), !1)
            }, __proto._drawRenderTexture = function(tex, x, y, width, height, m, alpha, uv) {
                return this._inner_drawTexture(tex, -1, x, y, width, height, m, uv, 1, !1)
            }, __proto.submitDebugger = function() {
                this._submits[this._submits._length++] = SubmitCMD.create([], function() {}, this)
            }, __proto._copyClipInfo = function(submit, clipInfo) {
                var cm = submit.shaderValue.clipMatDir;
                cm[0] = clipInfo.a, cm[1] = clipInfo.b, cm[2] = clipInfo.c, cm[3] = clipInfo.d;
                var cmp = submit.shaderValue.clipMatPos;
                cmp[0] = clipInfo.tx, cmp[1] = clipInfo.ty, submit.clipInfoID = this._clipInfoID, this._clipInCache && (submit.shaderValue.clipOff[0] = 1)
            }, __proto.isSameClipInfo = function(submit) {
                return submit.clipInfoID === this._clipInfoID
            }, __proto._useNewTex2DSubmit = function(tex, minVertNum) {
                this._mesh.vertNum + minVertNum > 65535 && (this._mesh = MeshQuadTexture.getAMesh(), this.meshlist.push(this._mesh));
                var submit = SubmitTexture.create(this, this._mesh, Value2D.create(1, 0));
                this._submits[this._submits._length++] = this._curSubmit = submit, submit.shaderValue.textureHost = tex, this._copyClipInfo(submit, this._globalClipMatrix)
            }, __proto._drawTexRect = function(x, y, w, h, uv) {
                this.transformQuad(x, y, w, h, this._italicDeg, this._curMat, this._transedPoints);
                var ops = this._transedPoints;
                ops[0] = ops[0] + .5 | 0, ops[1] = ops[1] + .5 | 0, ops[2] = ops[2] + .5 | 0, ops[3] = ops[3] + .5 | 0, ops[4] = ops[4] + .5 | 0, ops[5] = ops[5] + .5 | 0, ops[6] = ops[6] + .5 | 0, ops[7] = ops[7] + .5 | 0, this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, uv, this._fillColor, !0), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4)
            }, __proto.drawCallOptimize = function(enbale) {
                return this._charSubmitCache.enable(enbale, this), enbale
            }, __proto._inner_drawTexture = function(tex, imgid, x, y, width, height, m, uv, alpha, lastRender) {
                var preKey = this._curSubmit._key;
                if (uv = uv || tex._uv, 4 === preKey.submitType && preKey.other === imgid) {
                    var tv = this._drawTexToDrawTri_Vert;
                    tv[0] = x, tv[1] = y, tv[2] = x + width, tv[3] = y, tv[4] = x + width, tv[5] = y + height, tv[6] = x, tv[7] = y + height, this._drawTriUseAbsMatrix = !0;
                    var tuv = this._tempUV;
                    return tuv[0] = uv[0], tuv[1] = uv[1], tuv[2] = uv[2], tuv[3] = uv[3], tuv[4] = uv[4], tuv[5] = uv[5], tuv[6] = uv[6], tuv[7] = uv[7], this.drawTriangles(tex, 0, 0, tv, tuv, this._drawTexToDrawTri_Index, m, alpha, null, null), this._drawTriUseAbsMatrix = !1, !0
                }
                var mesh = this._mesh,
                    submit = this._curSubmit,
                    ops = lastRender ? this._charSubmitCache.getPos() : this._transedPoints;
                if (this.transformQuad(x, y, width || tex.width, height || tex.height, this._italicDeg, m || this._curMat, ops), this.drawTexAlign) {
                    var round = Math.round;
                    ops[0] = round(ops[0]), ops[1] = round(ops[1]), ops[2] = round(ops[2]), ops[3] = round(ops[3]), ops[4] = round(ops[4]), ops[5] = round(ops[5]), ops[6] = round(ops[6]), ops[7] = round(ops[7]), this.drawTexAlign = !1
                }
                var rgba = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * alpha);
                if (lastRender) return this._charSubmitCache.add(this, tex, imgid, ops, uv, rgba), !0;
                this._drawCount++;
                var sameKey = imgid >= 0 && 2 === preKey.submitType && preKey.other === imgid;
                return sameKey && (sameKey = sameKey && this.isSameClipInfo(submit)), this._lastTex = tex, mesh.vertNum + 4 > 65535 && (mesh = this._mesh = MeshQuadTexture.getAMesh(), this.meshlist.push(mesh), sameKey = !1), mesh.addQuad(ops, uv, rgba, !0), sameKey || (this._submits[this._submits._length++] = this._curSubmit = submit = SubmitTexture.create(this, mesh, Value2D.create(1, 0)), submit.shaderValue.textureHost = tex, submit._key.other = imgid, this._copyClipInfo(submit, this._globalClipMatrix)), submit._numEle += 6, mesh.indexNum += 6, mesh.vertNum += 4, !0
            }, __proto.transform4Points = function(a, m, out) {
                var tx = m.tx,
                    ty = m.ty,
                    ma = m.a,
                    mb = m.b,
                    mc = m.c,
                    md = m.d,
                    a0 = a[0],
                    a1 = a[1],
                    a2 = a[2],
                    a3 = a[3],
                    a4 = a[4],
                    a5 = a[5],
                    a6 = a[6],
                    a7 = a[7];
                m._bTransform ? (out[0] = a0 * ma + a1 * mc + tx, out[1] = a0 * mb + a1 * md + ty, out[2] = a2 * ma + a3 * mc + tx, out[3] = a2 * mb + a3 * md + ty, out[4] = a4 * ma + a5 * mc + tx, out[5] = a4 * mb + a5 * md + ty, out[6] = a6 * ma + a7 * mc + tx, out[7] = a6 * mb + a7 * md + ty) : (out[0] = a0 + tx, out[1] = a1 + ty, out[2] = a2 + tx, out[3] = a3 + ty, out[4] = a4 + tx, out[5] = a5 + ty, out[6] = a6 + tx, out[7] = a7 + ty)
            }, __proto.clipedOff = function(pt) {
                return this._clipRect.width <= 0 || this._clipRect.height <= 0
            }, __proto.transformQuad = function(x, y, w, h, italicDeg, m, out) {
                var xoff = 0;
                0 != italicDeg && (xoff = Math.tan(italicDeg * Math.PI / 180) * h);
                var maxx = x + w,
                    maxy = y + h,
                    tx = m.tx,
                    ty = m.ty,
                    ma = m.a,
                    mb = m.b,
                    mc = m.c,
                    md = m.d,
                    a0 = x + xoff,
                    a1 = y,
                    a2 = maxx + xoff,
                    a3 = y,
                    a4 = maxx,
                    a5 = maxy,
                    a6 = x,
                    a7 = maxy;
                m._bTransform ? (out[0] = a0 * ma + a1 * mc + tx, out[1] = a0 * mb + a1 * md + ty, out[2] = a2 * ma + a3 * mc + tx, out[3] = a2 * mb + a3 * md + ty, out[4] = a4 * ma + a5 * mc + tx, out[5] = a4 * mb + a5 * md + ty, out[6] = a6 * ma + a7 * mc + tx, out[7] = a6 * mb + a7 * md + ty) : (out[0] = a0 + tx, out[1] = a1 + ty, out[2] = a2 + tx, out[3] = a3 + ty, out[4] = a4 + tx, out[5] = a5 + ty, out[6] = a6 + tx, out[7] = a7 + ty)
            }, __proto.pushRT = function() {
                this.addRenderObject(SubmitCMD.create(null, RenderTexture2D.pushRT, this))
            }, __proto.popRT = function() {
                this.addRenderObject(SubmitCMD.create(null, RenderTexture2D.popRT, this)), this.breakNextMerge()
            }, __proto.useRT = function(rt) {
                this.addRenderObject(SubmitCMD.create([rt], function(rt) {
                    if (!rt) throw "error useRT";
                    rt.start(), rt.clear(0, 0, 0, 0)
                }, this)), this.breakNextMerge()
            }, __proto.RTRestore = function(rt) {
                this.addRenderObject(SubmitCMD.create([rt], function(rt) {
                    rt.restore()
                }, this)), this.breakNextMerge()
            }, __proto.breakNextMerge = function() {
                this._curSubmit = Submit.RENDERBASE
            }, __proto._repaintSprite = function() {
                this.sprite && this.sprite.repaint()
            }, __proto.drawTextureWithTransform = function(tex, x, y, width, height, transform, tx, ty, alpha, blendMode, colorfilter) {
                var oldcomp = null,
                    curMat = this._curMat;
                blendMode && (oldcomp = this.globalCompositeOperation, this.globalCompositeOperation = blendMode);
                var oldColorFilter = this._colorFiler;
                if (colorfilter && this.setColorFilter(colorfilter), !transform) return this._drawTextureM(tex, x + tx, y + ty, width, height, curMat, alpha, null), blendMode && (this.globalCompositeOperation = oldcomp), void(colorfilter && this.setColorFilter(oldColorFilter));
                var tmpMat = this._tmpMatrix;
                tmpMat.a = transform.a, tmpMat.b = transform.b, tmpMat.c = transform.c, tmpMat.d = transform.d, tmpMat.tx = transform.tx + tx, tmpMat.ty = transform.ty + ty, tmpMat._bTransform = transform._bTransform, transform && curMat._bTransform ? (Matrix.mul(tmpMat, curMat, tmpMat), (transform = tmpMat)._bTransform = !0) : transform = tmpMat, this._drawTextureM(tex, x, y, width, height, transform, alpha, null), blendMode && (this.globalCompositeOperation = oldcomp), colorfilter && this.setColorFilter(oldColorFilter)
            }, __proto._flushToTarget = function(context, target) {
                RenderState2D.worldScissorTest = !1, WebGL.mainContext.disable(3089);
                var preAlpha = RenderState2D.worldAlpha,
                    preMatrix4 = RenderState2D.worldMatrix4,
                    preMatrix = RenderState2D.worldMatrix;
                RenderState2D.worldShaderDefines;
                RenderState2D.worldMatrix = Matrix.EMPTY, RenderState2D.restoreTempArray(), RenderState2D.worldMatrix4 = RenderState2D.TEMPMAT4_ARRAY, RenderState2D.worldAlpha = 1, BaseShader.activeShader = null, target.start(), context._submits._length > 0 && target.clear(0, 0, 0, 0), context._curSubmit = Submit.RENDERBASE, context.flush(), context.clear(), target.restore(), context._curSubmit = Submit.RENDERBASE, BaseShader.activeShader = null, RenderState2D.worldAlpha = preAlpha, RenderState2D.worldMatrix4 = preMatrix4, RenderState2D.worldMatrix = preMatrix
            }, __proto.drawCanvas = function(canvas, x, y, width, height) {
                if (canvas) {
                    var submit, src = canvas.context;
                    if (src._targets) src._submits._length > 0 && (submit = SubmitCMD.create([src, src._targets], this._flushToTarget, this), this._submits[this._submits._length++] = submit), this._drawRenderTexture(src._targets, x, y, width, height, null, 1, RenderTexture2D.flipyuv), this._curSubmit = Submit.RENDERBASE;
                    else {
                        var canv = canvas;
                        canv.touches && canv.touches.forEach(function(v) {
                            v.touch()
                        }), submit = SubmitCanvas.create(canvas, this._shader2D.ALPHA, this._shader2D.filters), this._submits[this._submits._length++] = submit, submit._key.clear();
                        var mat = submit._matrix;
                        this._curMat.copyTo(mat);
                        var tx = mat.tx,
                            ty = mat.ty;
                        mat.tx = mat.ty = 0, mat.transformPoint(Point.TEMP.setTo(x, y)), mat.translate(Point.TEMP.x + tx, Point.TEMP.y + ty), Matrix.mul(canv.invMat, mat, mat), this._curSubmit = Submit.RENDERBASE
                    }
                }
            }, __proto.drawTarget = function(rt, x, y, width, height, m, shaderValue, uv, blend) {
                void 0 === blend && (blend = -1), this._drawCount++;
                this.mixRGBandAlpha(this._drawTextureUseColor ? this.fillStyle ? this.fillStyle.toInt() : 0 : 4294967295);
                if (this._mesh.vertNum + 4 > 65535 && (this._mesh = MeshQuadTexture.getAMesh(), this.meshlist.push(this._mesh)), this.transformQuad(x, y, width, height, 0, m || this._curMat, this._transedPoints), !this.clipedOff(this._transedPoints)) {
                    this._mesh.addQuad(this._transedPoints, uv || Texture.DEF_UV, 4294967295, !0);
                    var submit = this._curSubmit = SubmitTarget.create(this, this._mesh, shaderValue, rt);
                    return submit.blendType = -1 == blend ? this._nBlendType : blend, this._copyClipInfo(submit, this._globalClipMatrix), submit._numEle = 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, this._submits[this._submits._length++] = submit, this._curSubmit = Submit.RENDERBASE, !0
                }
                return this._curSubmit = Submit.RENDERBASE, !1
            }, __proto.drawTriangles = function(tex, x, y, vertices, uvs, indices, matrix, alpha, color, blendMode) {
                if (tex._getSource()) {
                    this._drawCount++;
                    var tmpMat = this._tmpMatrix,
                        triMesh = this._triangleMesh,
                        oldColorFilter = null,
                        needRestorFilter = !1;
                    color && (oldColorFilter = this._colorFiler, this._colorFiler = color, this._curSubmit = Submit.RENDERBASE, needRestorFilter = oldColorFilter != color);
                    var webGLImg = tex.bitmap,
                        preKey = this._curSubmit._key,
                        sameKey = 4 === preKey.submitType && preKey.other === webGLImg.id && preKey.blendShader == this._nBlendType;
                    if (triMesh.vertNum + vertices.length / 2 > 65535 && (triMesh = this._triangleMesh = MeshTexture.getAMesh(), this.meshlist.push(triMesh), sameKey = !1), !sameKey) {
                        var submit = this._curSubmit = SubmitTexture.create(this, triMesh, Value2D.create(1, 0));
                        submit.shaderValue.textureHost = tex, submit._renderType = 10016, submit._key.submitType = 4, submit._key.other = webGLImg.id, this._copyClipInfo(submit, this._globalClipMatrix), this._submits[this._submits._length++] = submit
                    }
                    var rgba = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * alpha);
                    this._drawTriUseAbsMatrix ? triMesh.addData(vertices, uvs, indices, matrix, rgba) : (matrix ? (tmpMat.a = matrix.a, tmpMat.b = matrix.b, tmpMat.c = matrix.c, tmpMat.d = matrix.d, tmpMat.tx = matrix.tx + x, tmpMat.ty = matrix.ty + y) : (tmpMat.a = 1, tmpMat.b = 0, tmpMat.c = 0, tmpMat.d = 1, tmpMat.tx = x, tmpMat.ty = y), Matrix.mul(tmpMat, this._curMat, tmpMat), triMesh.addData(vertices, uvs, indices, tmpMat, rgba)), this._curSubmit._numEle += indices.length, needRestorFilter && (this._colorFiler = oldColorFilter, this._curSubmit = Submit.RENDERBASE)
                } else this.sprite && Laya.systemTimer.callLater(this, this._repaintSprite)
            }, __proto.transform = function(a, b, c, d, tx, ty) {
                SaveTransform.save(this), Matrix.mul(Matrix.TEMP.setTo(a, b, c, d, tx, ty), this._curMat, this._curMat), this._curMat._checkTransform()
            }, __proto._transformByMatrix = function(matrix, tx, ty) {
                matrix.setTranslate(tx, ty), Matrix.mul(matrix, this._curMat, this._curMat), matrix.setTranslate(0, 0), this._curMat._bTransform = !0
            }, __proto.setTransformByMatrix = function(value) {
                value.copyTo(this._curMat)
            }, __proto.rotate = function(angle) {
                SaveTransform.save(this), this._curMat.rotateEx(angle)
            }, __proto.scale = function(scaleX, scaleY) {
                SaveTransform.save(this), this._curMat.scaleEx(scaleX, scaleY)
            }, __proto.clipRect = function(x, y, width, height) {
                SaveClipRect.save(this), this._clipRect == WebGLContext2D.MAXCLIPRECT ? this._clipRect = new Rectangle(x, y, width, height) : (this._clipRect.width = width, this._clipRect.height = height, this._clipRect.x = x, this._clipRect.y = y), WebGLContext2D._clipID_Gen++, WebGLContext2D._clipID_Gen %= 1e4, this._clipInfoID = WebGLContext2D._clipID_Gen;
                var cm = this._globalClipMatrix,
                    minx = cm.tx,
                    miny = cm.ty,
                    maxx = minx + cm.a,
                    maxy = miny + cm.d;
                if (this._clipRect.width >= 99999999 ? (cm.a = cm.d = 99999999, cm.b = cm.c = cm.tx = cm.ty = 0) : (this._curMat._bTransform ? (cm.tx = this._clipRect.x * this._curMat.a + this._clipRect.y * this._curMat.c + this._curMat.tx, cm.ty = this._clipRect.x * this._curMat.b + this._clipRect.y * this._curMat.d + this._curMat.ty, cm.a = this._clipRect.width * this._curMat.a, cm.b = this._clipRect.width * this._curMat.b, cm.c = this._clipRect.height * this._curMat.c, cm.d = this._clipRect.height * this._curMat.d) : (cm.tx = this._clipRect.x + this._curMat.tx, cm.ty = this._clipRect.y + this._curMat.ty, cm.a = this._clipRect.width, cm.b = cm.c = 0, cm.d = this._clipRect.height), this._incache && (this._clipInCache = !0)), cm.a > 0 && cm.d > 0) {
                    var cmaxx = cm.tx + cm.a,
                        cmaxy = cm.ty + cm.d;
                    cmaxx <= minx || cmaxy <= miny || cm.tx >= maxx || cm.ty >= maxy ? (cm.a = -.1, cm.d = -.1) : (cm.tx < minx && (cm.a -= minx - cm.tx, cm.tx = minx), cmaxx > maxx && (cm.a -= cmaxx - maxx), cm.ty < miny && (cm.d -= miny - cm.ty, cm.ty = miny), cmaxy > maxy && (cm.d -= cmaxy - maxy), cm.a <= 0 && (cm.a = -.1), cm.d <= 0 && (cm.d = -.1))
                }
            }, __proto.drawMesh = function(x, y, ib, vb, numElement, mat, shader, shaderValues, startIndex) {
                void 0 === startIndex && (startIndex = 0)
            }, __proto.addRenderObject = function(o) {
                this._submits[this._submits._length++] = o
            }, __proto.submitElement = function(start, end) {
                Render._context;
                var renderList = this._submits,
                    ret = renderList._length;
                end < 0 && (end = renderList._length);
                for (var submit = Submit.RENDERBASE; start < end;) this._renderNextSubmitIndex = start + 1, renderList[start] !== Submit.RENDERBASE ? (Submit.preRender = submit, start += (submit = renderList[start]).renderSubmit()) : start++;
                return ret
            }, __proto.flush = function() {
                var ret = this.submitElement(0, this._submits._length);
                this._path && this._path.reset(), SkinMeshBuffer.instance && SkinMeshBuffer.getInstance().reset(), this._curSubmit = Submit.RENDERBASE;
                for (var i = 0, sz = this.meshlist.length; i < sz; i++) {
                    var curm = this.meshlist[i];
                    curm.canReuse ? curm.releaseMesh() : curm.destroy()
                }
                if (this.meshlist.length = 0, this._mesh = MeshQuadTexture.getAMesh(), this._pathMesh = MeshVG.getAMesh(), this._triangleMesh = MeshTexture.getAMesh(), this.meshlist.push(this._mesh, this._pathMesh, this._triangleMesh), this._flushCnt++, this._flushCnt % 60 == 0 && Render._context == this) {
                    var texRender = Laya.textRender;
                    texRender && texRender.GC(!1)
                }
                return ret
            }, __proto.setPathId = function(id) {
                if (this.mId = id, -1 != this.mId) {
                    this.mHaveKey = !1;
                    var tVGM = VectorGraphManager.getInstance();
                    tVGM.shapeDic[this.mId] && (this.mHaveKey = !0), this.mHaveLineKey = !1, tVGM.shapeLineDic[this.mId] && (this.mHaveLineKey = !0)
                }
            }, __proto.beginPath = function(convex) {
                void 0 === convex && (convex = !1), this._getPath().beginPath(convex)
            }, __proto.closePath = function() {
                this._path.closePath()
            }, __proto.addPath = function(points, close, convex, dx, dy) {
                for (var ci = 0, i = 0, sz = points.length / 2; i < sz; i++) {
                    var x1 = points[ci] + dx,
                        y1 = points[ci + 1] + dy;
                    points[ci] = x1, points[ci + 1] = y1, ci += 2
                }
                this._getPath().push(points, convex)
            }, __proto.fill = function() {
                var m = this._curMat,
                    tPath = this._getPath(),
                    submit = this._curSubmit,
                    sameKey = 3 === submit._key.submitType && submit._key.blendShader === this._nBlendType;
                sameKey && (sameKey = sameKey && this.isSameClipInfo(submit)), sameKey || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                for (var idx, rgba = this.mixRGBandAlpha(this.fillStyle.toInt()), curEleNum = 0, i = 0, sz = tPath.paths.length; i < sz; i++) {
                    var p = tPath.paths[i],
                        vertNum = p.path.length / 2;
                    if (!(vertNum < 3 || 3 == vertNum && !p.convex)) {
                        var cpath = p.path.concat(),
                            pi = 0,
                            xp = 0,
                            yp = 0,
                            _x = NaN,
                            _y = NaN;
                        if (m._bTransform)
                            for (pi = 0; pi < vertNum; pi++) yp = (xp = pi << 1) + 1, _x = cpath[xp], _y = cpath[yp], cpath[xp] = m.a * _x + m.c * _y + m.tx, cpath[yp] = m.b * _x + m.d * _y + m.ty;
                        else
                            for (pi = 0; pi < vertNum; pi++) yp = (xp = pi << 1) + 1, _x = cpath[xp], _y = cpath[yp], cpath[xp] = _x + m.tx, cpath[yp] = _y + m.ty;
                        this._pathMesh.vertNum + vertNum > 65535 && (this._curSubmit._numEle += curEleNum, curEleNum = 0, this._pathMesh = MeshVG.getAMesh(), this._curSubmit = this.addVGSubmit(this._pathMesh));
                        var curvert = this._pathMesh.vertNum;
                        if (p.convex) {
                            var faceNum = vertNum - 2;
                            idx = new Array(3 * faceNum);
                            for (var idxpos = 0, fi = 0; fi < faceNum; fi++) idx[idxpos++] = curvert, idx[idxpos++] = fi + 1 + curvert, idx[idxpos++] = fi + 2 + curvert
                        } else if (idx = Earcut.earcut(cpath, null, 2), curvert > 0)
                            for (var ii = 0; ii < idx.length; ii++) idx[ii] += curvert;
                        this._pathMesh.addVertAndIBToMesh(this, cpath, rgba, idx), curEleNum += idx.length
                    }
                }
                this._curSubmit._numEle += curEleNum
            }, __proto.addVGSubmit = function(mesh) {
                var submit = Submit.createShape(this, mesh, 0, Value2D.create(4, 0));
                return submit._key.submitType = 3, this._submits[this._submits._length++] = submit, this._copyClipInfo(submit, this._globalClipMatrix), submit
            }, __proto.stroke = function() {
                if (this.lineWidth > 0) {
                    var rgba = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                        tPath = this._getPath(),
                        submit = this._curSubmit,
                        sameKey = 3 === submit._key.submitType && submit._key.blendShader === this._nBlendType;
                    sameKey && (sameKey = sameKey && this.isSameClipInfo(submit)), sameKey || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                    for (var curEleNum = 0, i = 0, sz = tPath.paths.length; i < sz; i++) {
                        var p = tPath.paths[i];
                        if (!(p.path.length <= 0)) {
                            var idx = [],
                                vertex = [],
                                maxVertexNum = 2 * p.path.length;
                            if (!(maxVertexNum < 2)) {
                                this._pathMesh.vertNum + maxVertexNum > 65535 && (this._curSubmit._numEle += curEleNum, curEleNum = 0, this._pathMesh = MeshVG.getAMesh(), this.meshlist.push(this._pathMesh), this._curSubmit = this.addVGSubmit(this._pathMesh)), BasePoly.createLine2(p.path, idx, this.lineWidth, this._pathMesh.vertNum, vertex, p.loop);
                                var ptnum = vertex.length / 2,
                                    m = this._curMat,
                                    pi = 0,
                                    xp = 0,
                                    yp = 0,
                                    _x = NaN,
                                    _y = NaN;
                                if (m._bTransform)
                                    for (pi = 0; pi < ptnum; pi++) yp = (xp = pi << 1) + 1, _x = vertex[xp], _y = vertex[yp], vertex[xp] = m.a * _x + m.c * _y + m.tx, vertex[yp] = m.b * _x + m.d * _y + m.ty;
                                else
                                    for (pi = 0; pi < ptnum; pi++) yp = (xp = pi << 1) + 1, _x = vertex[xp], _y = vertex[yp], vertex[xp] = _x + m.tx, vertex[yp] = _y + m.ty;
                                this._pathMesh.addVertAndIBToMesh(this, vertex, rgba, idx), curEleNum += idx.length
                            }
                        }
                    }
                    this._curSubmit._numEle += curEleNum
                }
            }, __proto.moveTo = function(x, y) {
                var tPath = this._getPath();
                tPath.newPath(), tPath._lastOriX = x, tPath._lastOriY = y, tPath.addPoint(x, y)
            }, __proto.lineTo = function(x, y) {
                var tPath = this._getPath();
                Math.abs(x - tPath._lastOriX) < .001 && Math.abs(y - tPath._lastOriY) < .001 || (tPath._lastOriX = x, tPath._lastOriY = y, tPath.addPoint(x, y))
            }, __proto.arcTo = function(x1, y1, x2, y2, r) {
                var i = 0,
                    x = 0,
                    y = 0,
                    dx = this._path._lastOriX - x1,
                    dy = this._path._lastOriY - y1,
                    len1 = Math.sqrt(dx * dx + dy * dy);
                if (!(len1 <= 1e-6)) {
                    var ndx = dx / len1,
                        ndy = dy / len1,
                        dx2 = x2 - x1,
                        dy2 = y2 - y1,
                        len22 = dx2 * dx2 + dy2 * dy2,
                        len2 = Math.sqrt(len22);
                    if (!(len2 <= 1e-6)) {
                        var ndx2 = dx2 / len2,
                            ndy2 = dy2 / len2,
                            odx = ndx + ndx2,
                            ody = ndy + ndy2,
                            olen = Math.sqrt(odx * odx + ody * ody);
                        if (!(olen <= 1e-6)) {
                            var nOdx = odx / olen,
                                nOdy = ody / olen,
                                alpha = Math.acos(nOdx * ndx + nOdy * ndy),
                                halfAng = Math.PI / 2 - alpha,
                                ptx1 = (len1 = r / Math.tan(halfAng)) * ndx + x1,
                                pty1 = len1 * ndy + y1,
                                orilen = Math.sqrt(len1 * len1 + r * r),
                                orix = x1 + nOdx * orilen,
                                oriy = y1 + nOdy * orilen,
                                sinx = 0,
                                cosx = 0;
                            if (ndx * ndy2 - ndy * ndx2 >= 0) {
                                var fda = 2 * halfAng / WebGLContext2D.SEGNUM;
                                sinx = Math.sin(fda), cosx = Math.cos(fda)
                            } else fda = 2 * -halfAng / WebGLContext2D.SEGNUM, sinx = Math.sin(fda), cosx = Math.cos(fda);
                            var lastx = this._path._lastOriX,
                                lasty = this._path._lastOriY,
                                _x1 = ptx1,
                                _y1 = pty1;
                            (Math.abs(_x1 - this._path._lastOriX) > .1 || Math.abs(_y1 - this._path._lastOriY) > .1) && (x = _x1, y = _y1, lastx = _x1, lasty = _y1, this._path.addPoint(x, y));
                            var cvx = ptx1 - orix,
                                cvy = pty1 - oriy;
                            for (i = 0; i < WebGLContext2D.SEGNUM; i++) {
                                var cx = cvx * cosx + cvy * sinx,
                                    cy = -cvx * sinx + cvy * cosx;
                                x = cx + orix, y = cy + oriy, (Math.abs(lastx - x) > .1 || Math.abs(lasty - y) > .1) && (this._path.addPoint(x, y), lastx = x, lasty = y), cvx = cx, cvy = cy
                            }
                        }
                    }
                }
            }, __proto.arc = function(cx, cy, r, startAngle, endAngle, counterclockwise, b) {
                void 0 === counterclockwise && (counterclockwise = !1), void 0 === b && (b = !0);
                var hda, ndivs, a = 0,
                    da = 0,
                    kappa = 0,
                    dx = 0,
                    x = 0,
                    y = 0,
                    i = 0;
                if (da = endAngle - startAngle, counterclockwise)
                    if (Math.abs(da) >= 2 * Math.PI) da = 2 * -Math.PI;
                    else
                        for (; da > 0;) da -= 2 * Math.PI;
                else if (Math.abs(da) >= 2 * Math.PI) da = 2 * Math.PI;
                else
                    for (; da < 0;) da += 2 * Math.PI;
                var sx = this.getMatScaleX(),
                    sy = this.getMatScaleY(),
                    sr = r * (sx > sy ? sx : sy),
                    cl = 2 * Math.PI * sr;
                hda = da / (ndivs = 0 | Math.max(cl / 10, 10)) / 2, kappa = Math.abs(4 / 3 * (1 - Math.cos(hda)) / Math.sin(hda)), counterclockwise && (kappa = -kappa);
                var tPath = this._getPath();
                for (i = 0; i <= ndivs; i++) a = startAngle + da * (i / ndivs), dx = Math.cos(a), y = cy + Math.sin(a) * r, (x = cx + dx * r) == this._path._lastOriX && y == this._path._lastOriY || tPath.addPoint(x, y);
                dx = Math.cos(endAngle), y = cy + Math.sin(endAngle) * r, (x = cx + dx * r) == this._path._lastOriX && y == this._path._lastOriY || tPath.addPoint(x, y)
            }, __proto.quadraticCurveTo = function(cpx, cpy, x, y) {
                for (var tArray = Bezier.I.getBezierPoints([this._path._lastOriX, this._path._lastOriY, cpx, cpy, x, y], 30, 2), i = 0, n = tArray.length / 2; i < n; i++) this.lineTo(tArray[2 * i], tArray[2 * i + 1]);
                this.lineTo(x, y)
            }, __proto.rect = function(x, y, width, height) {
                this._other = this._other.make(), this._other.path || (this._other.path = new Path), this._other.path.rect(x, y, width, height)
            }, __proto.mixRGBandAlpha = function(color) {
                return this._mixRGBandAlpha(color, this._shader2D.ALPHA)
            }, __proto._mixRGBandAlpha = function(color, alpha) {
                if (alpha >= 1) return color;
                var a = (4278190080 & color) >>> 24;
                return 0 != a ? a *= alpha : a = 255 * alpha, 16777215 & color | a << 24
            }, __proto.strokeRect = function(x, y, width, height, parameterLineWidth) {
                if (this.lineWidth > 0) {
                    var rgba = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                        hw = this.lineWidth / 2;
                    this._fillRect(x - hw, y - hw, width + this.lineWidth, this.lineWidth, rgba), this._fillRect(x - hw, y - hw + height, width + this.lineWidth, this.lineWidth, rgba), this._fillRect(x - hw, y + hw, this.lineWidth, height - this.lineWidth, rgba), this._fillRect(x - hw + width, y + hw, this.lineWidth, height - this.lineWidth, rgba)
                }
            }, __proto.clip = function() {}, __proto.drawParticle = function(x, y, pt) {
                pt.x = x, pt.y = y, this._submits[this._submits._length++] = pt
            }, __proto._getPath = function() {
                return this._path || (this._path = new Path)
            }, __proto._fillTexture_h = function(tex, imgid, uv, oriw, orih, x, y, w) {
                for (var stx = x, num = Math.floor(w / oriw), left = w % oriw, i = 0; i < num; i++) this._inner_drawTexture(tex, imgid, stx, y, oriw, orih, this._curMat, uv, 1, !1), stx += oriw;
                if (left > 0) {
                    var du = uv[2] - uv[0],
                        uvr = uv[0] + du * (left / oriw),
                        tuv = WebGLContext2D.tmpuv1;
                    tuv[0] = uv[0], tuv[1] = uv[1], tuv[2] = uvr, tuv[3] = uv[3], tuv[4] = uvr, tuv[5] = uv[5], tuv[6] = uv[6], tuv[7] = uv[7], this._inner_drawTexture(tex, imgid, stx, y, left, orih, this._curMat, tuv, 1, !1)
                }
            }, __proto._fillTexture_v = function(tex, imgid, uv, oriw, orih, x, y, h) {
                for (var sty = y, num = Math.floor(h / orih), left = h % orih, i = 0; i < num; i++) this._inner_drawTexture(tex, imgid, x, sty, oriw, orih, this._curMat, uv, 1, !1), sty += orih;
                if (left > 0) {
                    var dv = uv[7] - uv[1],
                        uvb = uv[1] + dv * (left / orih),
                        tuv = WebGLContext2D.tmpuv1;
                    tuv[0] = uv[0], tuv[1] = uv[1], tuv[2] = uv[2], tuv[3] = uv[3], tuv[4] = uv[4], tuv[5] = uvb, tuv[6] = uv[6], tuv[7] = uvb, this._inner_drawTexture(tex, imgid, x, sty, oriw, left, this._curMat, tuv, 1, !1)
                }
            }, __proto.drawTextureWithSizeGrid = function(tex, tx, ty, width, height, sizeGrid, gx, gy) {
                if (tex._getSource()) {
                    tx += gx, ty += gy;
                    var uv = tex.uv,
                        w = tex.bitmap._width,
                        h = tex.bitmap._height,
                        top = sizeGrid[0],
                        left = sizeGrid[3],
                        d_top = top / h,
                        d_left = left / w,
                        right = sizeGrid[1],
                        bottom = sizeGrid[2],
                        d_right = right / w,
                        d_bottom = bottom / h,
                        repeat = sizeGrid[4],
                        needClip = !1;
                    if (width == w && (left = right = 0), height == h && (top = bottom = 0), left + right > width) {
                        var clipWidth = width;
                        needClip = !0, width = left + right, this.save(), this.clipRect(0 + tx, 0 + ty, clipWidth, height)
                    }
                    var imgid = tex.bitmap.id,
                        mat = this._curMat,
                        tuv = this._tempUV,
                        uvl = uv[0],
                        uvt = uv[1],
                        uvr = uv[4],
                        uvb = uv[5],
                        uvl_ = uvl,
                        uvt_ = uvt,
                        uvr_ = uvr,
                        uvb_ = uvb;
                    if (left && top && (uvr_ = uvl + d_left, uvb_ = uvt + d_top, tuv[0] = uvl, tuv[1] = uvt, tuv[2] = uvr_, tuv[3] = uvt, tuv[4] = uvr_, tuv[5] = uvb_, tuv[6] = uvl, tuv[7] = uvb_, this._inner_drawTexture(tex, imgid, tx, ty, left, top, mat, tuv, 1, !1)), right && top && (uvl_ = uvr - d_right, uvt_ = uvt, uvr_ = uvr, uvb_ = uvt + d_top, tuv[0] = uvl_, tuv[1] = uvt_, tuv[2] = uvr_, tuv[3] = uvt_, tuv[4] = uvr_, tuv[5] = uvb_, tuv[6] = uvl_, tuv[7] = uvb_, this._inner_drawTexture(tex, imgid, width - right + tx, 0 + ty, right, top, mat, tuv, 1, !1)), left && bottom && (uvl_ = uvl, uvt_ = uvb - d_bottom, uvr_ = uvl + d_left, uvb_ = uvb, tuv[0] = uvl_, tuv[1] = uvt_, tuv[2] = uvr_, tuv[3] = uvt_, tuv[4] = uvr_, tuv[5] = uvb_, tuv[6] = uvl_, tuv[7] = uvb_, this._inner_drawTexture(tex, imgid, 0 + tx, height - bottom + ty, left, bottom, mat, tuv, 1, !1)), right && bottom && (uvl_ = uvr - d_right, uvt_ = uvb - d_bottom, uvr_ = uvr, uvb_ = uvb, tuv[0] = uvl_, tuv[1] = uvt_, tuv[2] = uvr_, tuv[3] = uvt_, tuv[4] = uvr_, tuv[5] = uvb_, tuv[6] = uvl_, tuv[7] = uvb_, this._inner_drawTexture(tex, imgid, width - right + tx, height - bottom + ty, right, bottom, mat, tuv, 1, !1)), top && (uvl_ = uvl + d_left, uvt_ = uvt, uvr_ = uvr - d_right, uvb_ = uvt + d_top, tuv[0] = uvl_, tuv[1] = uvt_, tuv[2] = uvr_, tuv[3] = uvt_, tuv[4] = uvr_, tuv[5] = uvb_, tuv[6] = uvl_, tuv[7] = uvb_, repeat ? this._fillTexture_h(tex, imgid, tuv, tex.width - left - right, top, left + tx, ty, width - left - right) : this._inner_drawTexture(tex, imgid, left + tx, ty, width - left - right, top, mat, tuv, 1, !1)), bottom && (uvl_ = uvl + d_left, uvt_ = uvb - d_bottom, uvr_ = uvr - d_right, uvb_ = uvb, tuv[0] = uvl_, tuv[1] = uvt_, tuv[2] = uvr_, tuv[3] = uvt_, tuv[4] = uvr_, tuv[5] = uvb_, tuv[6] = uvl_, tuv[7] = uvb_, repeat ? this._fillTexture_h(tex, imgid, tuv, tex.width - left - right, bottom, left + tx, height - bottom + ty, width - left - right) : this._inner_drawTexture(tex, imgid, left + tx, height - bottom + ty, width - left - right, bottom, mat, tuv, 1, !1)), left && (uvl_ = uvl, uvt_ = uvt + d_top, uvr_ = uvl + d_left, uvb_ = uvb - d_bottom, tuv[0] = uvl_, tuv[1] = uvt_, tuv[2] = uvr_, tuv[3] = uvt_, tuv[4] = uvr_, tuv[5] = uvb_, tuv[6] = uvl_, tuv[7] = uvb_, repeat ? this._fillTexture_v(tex, imgid, tuv, left, tex.height - top - bottom, tx, top + ty, height - top - bottom) : this._inner_drawTexture(tex, imgid, tx, top + ty, left, height - top - bottom, mat, tuv, 1, !1)), right && (uvl_ = uvr - d_right, uvt_ = uvt + d_top, uvr_ = uvr, uvb_ = uvb - d_bottom, tuv[0] = uvl_, tuv[1] = uvt_, tuv[2] = uvr_, tuv[3] = uvt_, tuv[4] = uvr_, tuv[5] = uvb_, tuv[6] = uvl_, tuv[7] = uvb_, repeat ? this._fillTexture_v(tex, imgid, tuv, right, tex.height - top - bottom, width - right + tx, top + ty, height - top - bottom) : this._inner_drawTexture(tex, imgid, width - right + tx, top + ty, right, height - top - bottom, mat, tuv, 1, !1)), uvl_ = uvl + d_left, uvt_ = uvt + d_top, uvr_ = uvr - d_right, uvb_ = uvb - d_bottom, tuv[0] = uvl_, tuv[1] = uvt_, tuv[2] = uvr_, tuv[3] = uvt_, tuv[4] = uvr_, tuv[5] = uvb_, tuv[6] = uvl_, tuv[7] = uvb_, repeat) {
                        var tuvr = WebGLContext2D.tmpUVRect;
                        tuvr[0] = uvl_, tuvr[1] = uvt_, tuvr[2] = uvr_ - uvl_, tuvr[3] = uvb_ - uvt_, this._fillTexture(tex, tex.width - left - right, tex.height - top - bottom, tuvr, left + tx, top + ty, width - left - right, height - top - bottom, "repeat", 0, 0)
                    } else this._inner_drawTexture(tex, imgid, left + tx, top + ty, width - left - right, height - top - bottom, mat, tuv, 1, !1);
                    needClip && this.restore()
                }
            }, __getset(0, __proto, "globalCompositeOperation", function() {
                return BlendMode.NAMES[this._nBlendType]
            }, function(value) {
                var n = BlendMode.TOINT[value];
                null == n || this._nBlendType === n || (SaveBase.save(this, 65536, this, !0), this._curSubmit = Submit.RENDERBASE, this._nBlendType = n)
            }), __getset(0, __proto, "strokeStyle", function() {
                return this._shader2D.strokeStyle
            }, function(value) {
                this._shader2D.strokeStyle.equal(value) || (SaveBase.save(this, 512, this._shader2D, !1), this._shader2D.strokeStyle = DrawStyle.create(value), this._submitKey.other = -this._shader2D.strokeStyle.toInt())
            }), __getset(0, __proto, "globalAlpha", function() {
                return this._shader2D.ALPHA
            }, function(value) {
                (value = Math.floor(1e3 * value) / 1e3) != this._shader2D.ALPHA && (SaveBase.save(this, 1, this._shader2D, !1), this._shader2D.ALPHA = value)
            }), __getset(0, __proto, "asBitmap", null, function(value) {
                if (value) {
                    if (this._targets || (this._targets = new RenderTexture2D(this._width, this._height, 1, -1)), !this._width || !this._height) throw Error("asBitmap no size!")
                } else this._targets && this._targets.destroy(), this._targets = null
            }), __getset(0, __proto, "fillStyle", function() {
                return this._shader2D.fillStyle
            }, function(value) {
                this._shader2D.fillStyle.equal(value) || (SaveBase.save(this, 2, this._shader2D, !1), this._shader2D.fillStyle = DrawStyle.create(value), this._submitKey.other = -this._shader2D.fillStyle.toInt())
            }), __getset(0, __proto, "textAlign", function() {
                return this._other.textAlign
            }, function(value) {
                this._other.textAlign === value || (this._other = this._other.make(), SaveBase.save(this, 32768, this._other, !1), this._other.textAlign = value)
            }), __getset(0, __proto, "lineWidth", function() {
                return this._other.lineWidth
            }, function(value) {
                this._other.lineWidth === value || (this._other = this._other.make(), SaveBase.save(this, 256, this._other, !1), this._other.lineWidth = value)
            }), __getset(0, __proto, "textBaseline", function() {
                return this._other.textBaseline
            }, function(value) {
                this._other.textBaseline === value || (this._other = this._other.make(), SaveBase.save(this, 16384, this._other, !1), this._other.textBaseline = value)
            }), __getset(0, __proto, "font", null, function(str) {
                this._other = this._other.make(), SaveBase.save(this, 8, this._other, !1)
            }), __getset(0, __proto, "canvas", function() {
                return this._canvas
            }), WebGLContext2D.__init__ = function() {
                ContextParams.DEFAULT = new ContextParams
            }, WebGLContext2D.set2DRenderConfig = function() {
                var gl = LayaGL.instance;
                WebGLContext.setBlend(gl, !0), WebGLContext.setBlendFunc(gl, 1, 771), WebGLContext.setDepthTest(gl, !1), WebGLContext.setCullFace(gl, !1), WebGLContext.setDepthMask(gl, !0), WebGLContext.setFrontFace(gl, 2305), Render.isConchApp || gl.viewport(0, 0, RenderState2D.width, RenderState2D.height)
            }, WebGLContext2D._SUBMITVBSIZE = 32e3, WebGLContext2D._MAXSIZE = 99999999, WebGLContext2D._MAXVERTNUM = 65535, WebGLContext2D.MAXCLIPRECT = new Rectangle(0, 0, 99999999, 99999999), WebGLContext2D._COUNT = 0, WebGLContext2D.SEGNUM = 32, WebGLContext2D._contextcount = 0, WebGLContext2D._clipID_Gen = 0, WebGLContext2D.defTexture = null, __static(WebGLContext2D, ["_textRender", function() {
                return this._textRender = new TextRender
            }, "tmpuv1", function() {
                return this.tmpuv1 = [0, 0, 0, 0, 0, 0, 0, 0]
            }, "tmpUV", function() {
                return this.tmpUV = [0, 0, 0, 0, 0, 0, 0, 0]
            }, "tmpUVRect", function() {
                return this.tmpUVRect = [0, 0, 0, 0]
            }]), WebGLContext2D.__init$ = function() {
                ContextParams = function() {
                    function ContextParams() {
                        this.lineWidth = 1, this.path = null, this.textAlign = null, this.textBaseline = null
                    }
                    __class(ContextParams, "");
                    var __proto = ContextParams.prototype;
                    return __proto.clear = function() {
                        this.lineWidth = 1, this.path && this.path.clear(), this.textAlign = this.textBaseline = null
                    }, __proto.make = function() {
                        return this === ContextParams.DEFAULT ? new ContextParams : this
                    }, ContextParams.DEFAULT = null, ContextParams
                }()
            }, WebGLContext2D
        }(),
        PrimitiveSV = function(_super) {
            function PrimitiveSV(args) {
                PrimitiveSV.__super.call(this, 4, 0), this._attribLocation = ["position", 0, "attribColor", 1]
            }
            return __class(PrimitiveSV, "laya.webgl.shader.d2.value.PrimitiveSV", Value2D), PrimitiveSV
        }(),
        SkinSV = function(_super) {
            function SkinSV(type) {
                this.texcoord = null, this.position = null, this.offsetX = 300, this.offsetY = 0, SkinSV.__super.call(this, 512, 0);
                var _vlen = 8 * CONST3D2D.BYTES_PE;
                this.position = [2, 5126, !1, _vlen, 0], this.texcoord = [2, 5126, !1, _vlen, 2 * CONST3D2D.BYTES_PE], this.color = [4, 5126, !1, _vlen, 4 * CONST3D2D.BYTES_PE]
            }
            return __class(SkinSV, "laya.webgl.shader.d2.skinAnishader.SkinSV", Value2D), SkinSV
        }(),
        TextureSV = function(_super) {
            function TextureSV(subID) {
                this.u_colorMatrix = null, this.strength = 0, this.blurInfo = null, this.colorMat = null, this.colorAlpha = null, void 0 === subID && (subID = 0), TextureSV.__super.call(this, 1, subID), this._attribLocation = ["posuv", 0, "attribColor", 1, "attribFlags", 2]
            }
            return __class(TextureSV, "laya.webgl.shader.d2.value.TextureSV", Value2D), TextureSV.prototype.clear = function() {
                this.texture = null, this.shader = null, this.defines._value = this.subID + (WebGL.shaderHighPrecision ? 1024 : 0)
            }, TextureSV
        }(),
        MeshTexture = function(_super) {
            function MeshTexture() {
                MeshTexture.__super.call(this, 24, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo)
            }
            __class(MeshTexture, "laya.webgl.utils.MeshTexture", Mesh2D);
            var __proto = MeshTexture.prototype;
            return __proto.addData = function(vertices, uvs, idx, matrix, rgba) {
                var vb = this._vb,
                    ib = this._ib,
                    vertsz = vertices.length >> 1,
                    f32pos = vb.needSize(24 * vertsz) >> 2,
                    vbdata = vb._floatArray32 || vb.getFloat32Array(),
                    vbu32Arr = vb._uint32Array,
                    ci = 0,
                    m00 = matrix.a,
                    m01 = matrix.b,
                    m10 = matrix.c,
                    m11 = matrix.d,
                    tx = matrix.tx,
                    ty = matrix.ty,
                    i = 0;
                for (i = 0; i < vertsz; i++) {
                    var x = vertices[ci],
                        y = vertices[ci + 1];
                    vbdata[f32pos] = x * m00 + y * m10 + tx, vbdata[f32pos + 1] = x * m01 + y * m11 + ty, vbdata[f32pos + 2] = uvs[ci], vbdata[f32pos + 3] = uvs[ci + 1], vbu32Arr[f32pos + 4] = rgba, vbu32Arr[f32pos + 5] = 255, f32pos += 6, ci += 2
                }
                vb.setNeedUpload();
                var vertN = this.vertNum,
                    sz = idx.length,
                    stib = ib.needSize(idx.byteLength),
                    cidx = ib.getUint16Array(),
                    stibid = stib >> 1;
                if (vertN > 0) {
                    var end = stibid + sz,
                        si = 0;
                    for (i = stibid; i < end; i++, si++) cidx[i] = idx[si] + vertN
                } else cidx.set(idx, stibid);
                ib.setNeedUpload(), this.vertNum += vertsz, this.indexNum += idx.length
            }, __proto.releaseMesh = function() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshTexture._POOL.push(this)
            }, __proto.destroy = function() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer()
            }, MeshTexture.getAMesh = function() {
                var ret;
                return (ret = laya.webgl.utils.MeshTexture._POOL.length ? laya.webgl.utils.MeshTexture._POOL.pop() : new MeshTexture)._vb._resizeBuffer(1572864, !1), ret
            }, MeshTexture.const_stride = 24, MeshTexture._POOL = [], __static(MeshTexture, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20]
            }]), MeshTexture
        }(),
        MeshVG = function(_super) {
            function MeshVG() {
                MeshVG.__super.call(this, 12, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshVG._fixattriInfo)
            }
            __class(MeshVG, "laya.webgl.utils.MeshVG", Mesh2D);
            var __proto = MeshVG.prototype;
            return __proto.addVertAndIBToMesh = function(ctx, points, rgba, ib) {
                for (var f32pos = this._vb.needSize(points.length / 2 * 12) >> 2, vbdata = this._vb._floatArray32 || this._vb.getFloat32Array(), vbu32Arr = this._vb._uint32Array, ci = 0, sz = points.length / 2, i = 0; i < sz; i++) vbdata[f32pos++] = points[ci], vbdata[f32pos++] = points[ci + 1], ci += 2, vbu32Arr[f32pos++] = rgba;
                this._vb.setNeedUpload(), this._ib.append(new Uint16Array(ib)), this._ib.setNeedUpload(), this.vertNum += sz, this.indexNum += ib.length
            }, __proto.releaseMesh = function() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshVG._POOL.push(this)
            }, __proto.destroy = function() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer()
            }, MeshVG.getAMesh = function() {
                var ret;
                return (ret = laya.webgl.utils.MeshVG._POOL.length ? laya.webgl.utils.MeshVG._POOL.pop() : new MeshVG)._vb._resizeBuffer(786432, !1), ret
            }, MeshVG.const_stride = 12, MeshVG._POOL = [], __static(MeshVG, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 2, 0, 5121, 4, 8]
            }]), MeshVG
        }(),
        SubmitTexture = (function(_super) {
            function MeshParticle2D(maxNum) {
                MeshParticle2D.__super.call(this, 116, 4 * maxNum * 116, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshParticle2D._fixattriInfo), this.createQuadIB(maxNum), this._quadNum = maxNum
            }
            __class(MeshParticle2D, "laya.webgl.utils.MeshParticle2D", Mesh2D);
            var __proto = MeshParticle2D.prototype;
            __proto.setMaxParticleNum = function(maxNum) {
                this._vb._resizeBuffer(4 * maxNum * 116, !1), this.createQuadIB(maxNum)
            }, __proto.releaseMesh = function() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshParticle2D._POOL.push(this)
            }, __proto.destroy = function() {
                this._ib.destroy(), this._vb.destroy(), this._vb.deleteBuffer()
            }, MeshParticle2D.getAMesh = function(maxNum) {
                if (laya.webgl.utils.MeshParticle2D._POOL.length) {
                    var ret = laya.webgl.utils.MeshParticle2D._POOL.pop();
                    return ret.setMaxParticleNum(maxNum), ret
                }
                return new MeshParticle2D(maxNum)
            }, MeshParticle2D.const_stride = 116, MeshParticle2D._POOL = [], __static(MeshParticle2D, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 4, 0, 5126, 3, 16, 5126, 3, 28, 5126, 4, 40, 5126, 4, 56, 5126, 3, 72, 5126, 2, 84, 5126, 4, 92, 5126, 1, 108, 5126, 1, 112]
            }])
        }(), function(_super) {
            function SubmitTexture(renderType) {
                void 0 === renderType && (renderType = 1e4), SubmitTexture.__super.call(this, renderType)
            }
            __class(SubmitTexture, "laya.webgl.submit.SubmitTexture", Submit);
            var __proto = SubmitTexture.prototype;
            return __proto.clone = function(context, mesh, pos) {
                var o = SubmitTexture._poolSize ? SubmitTexture.POOL[--SubmitTexture._poolSize] : new SubmitTexture;
                return this._cloneInit(o, context, mesh, pos), o
            }, __proto.releaseRender = function() {
                --this._ref < 1 && (SubmitTexture.POOL[SubmitTexture._poolSize++] = this, this.shaderValue.release(), this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null))
            }, __proto.renderSubmit = function() {
                if (0 === this._numEle) return 1;
                var tex = this.shaderValue.textureHost;
                if (tex) {
                    var source = tex ? tex._getSource() : null;
                    if (!source) return 1
                }
                var gl = WebGL.mainContext;
                this._mesh.useMesh(gl);
                var lastSubmit = Submit.preRender,
                    prekey = Submit.preRender._key;
                return 0 === this._key.blendShader && this._key.submitType === prekey.submitType && this._key.blendShader === prekey.blendShader && BaseShader.activeShader && Submit.preRender.clipInfoID == this.clipInfoID && lastSubmit.shaderValue.defines._value === this.shaderValue.defines._value && 0 == (this.shaderValue.defines._value & ShaderDefines2D.NOOPTMASK) ? BaseShader.activeShader.uploadTexture2D(source) : (BlendMode.activeBlendFunction !== this._blendFn && (WebGLContext.setBlend(gl, !0), this._blendFn(gl), BlendMode.activeBlendFunction = this._blendFn), this.shaderValue.texture = source, this.shaderValue.upload()), gl.drawElements(4, this._numEle, 5123, this._startIdx), Stat.renderBatches++, Stat.trianglesFaces += this._numEle / 3, 1
            }, SubmitTexture.create = function(context, mesh, sv) {
                var o = SubmitTexture._poolSize ? SubmitTexture.POOL[--SubmitTexture._poolSize] : new SubmitTexture(10016);
                o._mesh = mesh, o._key.clear(), o._key.submitType = 2, o._ref = 1, o._startIdx = mesh.indexNum * CONST3D2D.BYTES_PIDX, o._numEle = 0;
                var blendType = context._nBlendType;
                if (o._key.blendShader = blendType, o._blendFn = context._targets ? BlendMode.targetFns[blendType] : BlendMode.fns[blendType], o.shaderValue = sv, context._colorFiler) {
                    var ft = context._colorFiler;
                    sv.defines.add(ft.type), sv.colorMat = ft._mat, sv.colorAlpha = ft._alpha
                }
                return o
            }, SubmitTexture._poolSize = 0, SubmitTexture.POOL = [], SubmitTexture
        }()),
        MeshQuadTexture = function(_super) {
            function MeshQuadTexture() {
                MeshQuadTexture.__super.call(this, 24, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshQuadTexture._fixattriInfo), laya.webgl.utils.MeshQuadTexture._fixib ? (this._ib = laya.webgl.utils.MeshQuadTexture._fixib, this._quadNum = MeshQuadTexture._maxIB) : (this.createQuadIB(MeshQuadTexture._maxIB), laya.webgl.utils.MeshQuadTexture._fixib = this._ib)
            }
            __class(MeshQuadTexture, "laya.webgl.utils.MeshQuadTexture", Mesh2D);
            var __proto = MeshQuadTexture.prototype;
            return __proto.releaseMesh = function() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshQuadTexture._POOL.push(this)
            }, __proto.destroy = function() {
                this._vb.destroy(), this._vb.deleteBuffer()
            }, __proto.addQuad = function(pos, uv, color, useTex) {
                var vb = this._vb,
                    vpos = vb._byteLength >> 2;
                vb.setByteLength(vpos + 24 << 2);
                var vbdata = vb._floatArray32 || vb.getFloat32Array(),
                    vbu32Arr = vb._uint32Array,
                    cpos = vpos,
                    useTexVal = useTex ? 255 : 0;
                vbdata[cpos++] = pos[0], vbdata[cpos++] = pos[1], vbdata[cpos++] = uv[0], vbdata[cpos++] = uv[1], vbu32Arr[cpos++] = color, vbu32Arr[cpos++] = useTexVal, vbdata[cpos++] = pos[2], vbdata[cpos++] = pos[3], vbdata[cpos++] = uv[2], vbdata[cpos++] = uv[3], vbu32Arr[cpos++] = color, vbu32Arr[cpos++] = useTexVal, vbdata[cpos++] = pos[4], vbdata[cpos++] = pos[5], vbdata[cpos++] = uv[4], vbdata[cpos++] = uv[5], vbu32Arr[cpos++] = color, vbu32Arr[cpos++] = useTexVal, vbdata[cpos++] = pos[6], vbdata[cpos++] = pos[7], vbdata[cpos++] = uv[6], vbdata[cpos++] = uv[7], vbu32Arr[cpos++] = color, vbu32Arr[cpos++] = useTexVal, vb._upload = !0
            }, MeshQuadTexture.getAMesh = function() {
                var ret = null;
                return (ret = laya.webgl.utils.MeshQuadTexture._POOL.length ? laya.webgl.utils.MeshQuadTexture._POOL.pop() : new MeshQuadTexture)._vb._resizeBuffer(1572864, !1), ret
            }, MeshQuadTexture.const_stride = 24, MeshQuadTexture._fixib = null, MeshQuadTexture._maxIB = 16384, MeshQuadTexture._POOL = [], __static(MeshQuadTexture, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20]
            }]), MeshQuadTexture
        }(),
        Buffer2D = function(_super) {
            function Buffer2D() {
                this._maxsize = 0, this._upload = !0, this._uploadSize = 0, this._bufferSize = 0, this._u8Array = null, Buffer2D.__super.call(this)
            }
            __class(Buffer2D, "laya.webgl.utils.Buffer2D", Buffer);
            var __proto = Buffer2D.prototype;
            return __proto.setByteLength = function(value) {
                this._byteLength !== value && (value <= this._bufferSize || this._resizeBuffer(2 * value + 256, !0), this._byteLength = value)
            }, __proto.needSize = function(sz) {
                var old = this._byteLength;
                if (sz) {
                    var needsz = this._byteLength + sz;
                    needsz <= this._bufferSize || this._resizeBuffer(needsz << 1, !0), this._byteLength = needsz
                }
                return old
            }, __proto._bufferData = function() {
                this._maxsize = Math.max(this._maxsize, this._byteLength), Stat.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, LayaGL.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), LayaGL.instance.bufferSubData(this._bufferType, 0, this._buffer)
            }, __proto._bufferSubData = function(offset, dataStart, dataLength) {
                if (void 0 === offset && (offset = 0), void 0 === dataStart && (dataStart = 0), void 0 === dataLength && (dataLength = 0), this._maxsize = Math.max(this._maxsize, this._byteLength), Stat.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, LayaGL.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), dataStart || dataLength) {
                    var subBuffer = this._buffer.slice(dataStart, dataLength);
                    LayaGL.instance.bufferSubData(this._bufferType, offset, subBuffer)
                } else LayaGL.instance.bufferSubData(this._bufferType, offset, this._buffer)
            }, __proto._checkArrayUse = function() {}, __proto._bind_uploadForVAO = function() {
                return !!this._upload && (this._upload = !1, this._bindForVAO(), this._bufferData(), !0)
            }, __proto._bind_upload = function() {
                return !!this._upload && (this._upload = !1, this.bind(), this._bufferData(), !0)
            }, __proto._bind_subUpload = function(offset, dataStart, dataLength) {
                return void 0 === offset && (offset = 0), void 0 === dataStart && (dataStart = 0), void 0 === dataLength && (dataLength = 0), !!this._upload && (this._upload = !1, this.bind(), this._bufferSubData(offset, dataStart, dataLength), !0)
            }, __proto._resizeBuffer = function(nsz, copy) {
                var buff = this._buffer;
                if (nsz <= buff.byteLength) return this;
                var u8buf = this._u8Array;
                if (copy && buff && buff.byteLength > 0) {
                    var newbuffer = new ArrayBuffer(nsz),
                        oldU8Arr = u8buf && u8buf.buffer == buff ? u8buf : new Uint8Array(buff);
                    (u8buf = this._u8Array = new Uint8Array(newbuffer)).set(oldU8Arr, 0), buff = this._buffer = newbuffer
                } else buff = this._buffer = new ArrayBuffer(nsz), this._u8Array = null;
                return this._checkArrayUse(), this._upload = !0, this._bufferSize = buff.byteLength, this
            }, __proto.append = function(data) {
                this._upload = !0;
                var byteLen, n;
                byteLen = data.byteLength, data instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + byteLen, !0), n = new Uint8Array(this._buffer, this._byteLength)) : data instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + byteLen, !0), n = new Uint16Array(this._buffer, this._byteLength)) : data instanceof Float32Array && (this._resizeBuffer(this._byteLength + byteLen, !0), n = new Float32Array(this._buffer, this._byteLength)), n.set(data, 0), this._byteLength += byteLen, this._checkArrayUse()
            }, __proto.appendU16Array = function(data, len) {
                this._resizeBuffer(this._byteLength + 2 * len, !0);
                var u = new Uint16Array(this._buffer, this._byteLength, len);
                if (6 == len) u[0] = data[0], u[1] = data[1], u[2] = data[2], u[3] = data[3], u[4] = data[4], u[5] = data[5];
                else if (len >= 100) u.set(new Uint16Array(data.buffer, 0, len));
                else
                    for (var i = 0; i < len; i++) u[i] = data[i];
                this._byteLength += 2 * len, this._checkArrayUse()
            }, __proto.appendEx = function(data, type) {
                this._upload = !0;
                var byteLen;
                byteLen = data.byteLength, this._resizeBuffer(this._byteLength + byteLen, !0), new type(this._buffer, this._byteLength).set(data, 0), this._byteLength += byteLen, this._checkArrayUse()
            }, __proto.appendEx2 = function(data, type, dataLen, perDataLen) {
                void 0 === perDataLen && (perDataLen = 1), this._upload = !0;
                var byteLen, n;
                byteLen = dataLen * perDataLen, this._resizeBuffer(this._byteLength + byteLen, !0), n = new type(this._buffer, this._byteLength);
                var i = 0;
                for (i = 0; i < dataLen; i++) n[i] = data[i];
                this._byteLength += byteLen, this._checkArrayUse()
            }, __proto.getBuffer = function() {
                return this._buffer
            }, __proto.setNeedUpload = function() {
                this._upload = !0
            }, __proto.getNeedUpload = function() {
                return this._upload
            }, __proto.upload = function() {
                var scuess = this._bind_upload();
                return LayaGL.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (Buffer._bindedVertexBuffer = null), 34963 == this._bufferType && (Buffer._bindedIndexBuffer = null), BaseShader.activeShader = null, scuess
            }, __proto.subUpload = function(offset, dataStart, dataLength) {
                void 0 === offset && (offset = 0), void 0 === dataStart && (dataStart = 0), void 0 === dataLength && (dataLength = 0);
                var scuess = this._bind_subUpload();
                return LayaGL.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (Buffer._bindedVertexBuffer = null), 34963 == this._bufferType && (Buffer._bindedIndexBuffer = null), BaseShader.activeShader = null, scuess
            }, __proto._disposeResource = function() {
                this._upload = !0, this._uploadSize = 0
            }, __proto.clear = function() {
                this._byteLength = 0, this._upload = !0
            }, __getset(0, __proto, "bufferLength", function() {
                return this._buffer.byteLength
            }), __getset(0, __proto, "byteLength", null, function(value) {
                this.setByteLength(value)
            }), Buffer2D.__int__ = function(gl) {}, Buffer2D.FLOAT32 = 4, Buffer2D.SHORT = 2, Buffer2D
        }(),
        SubmitCanvas = function(_super) {
            function SubmitCanvas() {
                this._matrix = new Matrix, this._matrix4 = CONST3D2D.defaultMatrix4.concat(), SubmitCanvas.__super.call(this, 1e4), this.shaderValue = new Value2D(0, 0)
            }
            __class(SubmitCanvas, "laya.webgl.submit.SubmitCanvas", Submit);
            var __proto = SubmitCanvas.prototype;
            return __proto.renderSubmit = function() {
                var preAlpha = RenderState2D.worldAlpha,
                    preMatrix4 = RenderState2D.worldMatrix4,
                    preMatrix = RenderState2D.worldMatrix,
                    preFilters = RenderState2D.worldFilters,
                    preWorldShaderDefines = RenderState2D.worldShaderDefines,
                    v = this.shaderValue,
                    m = this._matrix,
                    m4 = this._matrix4,
                    mout = Matrix.TEMP;
                return Matrix.mul(m, preMatrix, mout), m4[0] = mout.a, m4[1] = mout.b, m4[4] = mout.c, m4[5] = mout.d, m4[12] = mout.tx, m4[13] = mout.ty, RenderState2D.worldMatrix = mout.clone(), RenderState2D.worldMatrix4 = m4, RenderState2D.worldAlpha = RenderState2D.worldAlpha * v.alpha, v.filters && v.filters.length && (RenderState2D.worldFilters = v.filters, RenderState2D.worldShaderDefines = v.defines), this.canv.flushsubmit(), RenderState2D.worldAlpha = preAlpha, RenderState2D.worldMatrix4 = preMatrix4, RenderState2D.worldMatrix.destroy(), RenderState2D.worldMatrix = preMatrix, RenderState2D.worldFilters = preFilters, RenderState2D.worldShaderDefines = preWorldShaderDefines, 1
            }, __proto.releaseRender = function() {
                if (--this._ref < 1) {
                    var cache = SubmitCanvas.POOL;
                    this._mesh = null, cache[cache._length++] = this
                }
            }, __proto.clone = function(context, mesh, pos) {
                return null
            }, __proto.getRenderType = function() {
                return 10003
            }, SubmitCanvas.create = function(canvas, alpha, filters) {
                var o = SubmitCanvas.POOL._length ? SubmitCanvas.POOL[--SubmitCanvas.POOL._length] : new SubmitCanvas;
                o.canv = canvas, o._ref = 1, o._numEle = 0;
                var v = o.shaderValue;
                return v.alpha = alpha, v.defines.setValue(0), filters && filters.length && v.setFilters(filters), o
            }, SubmitCanvas.POOL = (SubmitCanvas.POOL = [], SubmitCanvas.POOL._length = 0, SubmitCanvas.POOL), SubmitCanvas
        }(),
        BufferState2D = function(_super) {
            function BufferState2D() {
                BufferState2D.__super.call(this)
            }
            return __class(BufferState2D, "laya.webgl.BufferState2D", BufferStateBase), BufferState2D
        }(),
        CharRender_Canvas = function(_super) {
            function CharRender_Canvas(maxw, maxh, scalefont, useImageData, showdbg) {
                this.ctx = null, this.lastScaleX = 1, this.lastScaleY = 1, this.needResetScale = !1, this.maxTexW = 0, this.maxTexH = 0, this.scaleFontSize = !0, this.showDbgInfo = !1, this.supportImageData = !0, CharRender_Canvas.__super.call(this), void 0 === scalefont && (scalefont = !0), void 0 === useImageData && (useImageData = !0), void 0 === showdbg && (showdbg = !1), this.maxTexW = maxw, this.maxTexH = maxh, this.scaleFontSize = scalefont, this.supportImageData = useImageData, this.showDbgInfo = showdbg, CharRender_Canvas.canvas || (CharRender_Canvas.canvas = window.document.createElement("canvas"), CharRender_Canvas.canvas.width = 1024, CharRender_Canvas.canvas.height = 512, CharRender_Canvas.canvas.style.left = "-10000px", CharRender_Canvas.canvas.style.position = "absolute", document.body.appendChild(CharRender_Canvas.canvas), this.ctx = CharRender_Canvas.canvas.getContext("2d"))
            }
            __class(CharRender_Canvas, "laya.webgl.resource.CharRender_Canvas", ICharRender);
            var __proto = CharRender_Canvas.prototype;
            return __proto.getWidth = function(font, str) {
                return this.ctx ? (this.ctx._lastFont != font && (this.ctx.font = font, this.ctx._lastFont = font), this.ctx.measureText(str).width) : 0
            }, __proto.scale = function(sx, sy) {
                if (!this.supportImageData) return this.lastScaleX = sx, void(this.lastScaleY = sy);
                this.lastScaleX == sx && this.lastScaleY == sy || (this.ctx.setTransform(sx, 0, 0, sy, 0, 0), this.lastScaleX = sx, this.lastScaleY = sy)
            }, __proto.getCharBmp = function(char, font, lineWidth, colStr, strokeColStr, cri, margin_left, margin_top, margin_right, margin_bottom, rect) {
                if (!this.supportImageData) return this.getCharCanvas(char, font, lineWidth, colStr, strokeColStr, cri, margin_left, margin_top, margin_right, margin_bottom);
                var ctx = this.ctx;
                ctx.font != font && (ctx.font = font, ctx._lastFont = font), cri.width = ctx.measureText(char).width;
                var w = cri.width * this.lastScaleX,
                    h = cri.height * this.lastScaleY;
                w += (margin_left + margin_right) * this.lastScaleX, h += (margin_top + margin_bottom) * this.lastScaleY, w = Math.ceil(w), h = Math.ceil(h);
                var clearW = (w = Math.min(w, laya.webgl.resource.CharRender_Canvas.canvas.width)) + 2 * lineWidth + 1,
                    clearH = (h = Math.min(h, laya.webgl.resource.CharRender_Canvas.canvas.height)) + 2 * lineWidth + 1;
                rect && (clearW = Math.max(clearW, rect[0] + rect[2] + 1), clearH = Math.max(clearH, rect[1] + rect[3] + 1)), ctx.clearRect(0, 0, clearW, clearH), ctx.save(), ctx.textBaseline = "top", lineWidth > 0 && (ctx.strokeStyle = strokeColStr, ctx.lineWidth = lineWidth, ctx.strokeText(char, margin_left, margin_top)), ctx.fillStyle = colStr, ctx.fillText(char, margin_left, margin_top), this.showDbgInfo && (ctx.strokeStyle = "#ff0000", ctx.strokeRect(0, 0, w, h), ctx.strokeStyle = "#00ff00", ctx.strokeRect(margin_left, margin_top, cri.width, cri.height)), rect && -1 == rect[2] && (rect[2] = Math.ceil((cri.width + 2 * lineWidth) * this.lastScaleX));
                var imgdt = rect ? ctx.getImageData(rect[0], rect[1], rect[2], rect[3]) : ctx.getImageData(0, 0, w, h);
                return ctx.restore(), cri.bmpWidth = imgdt.width, cri.bmpHeight = imgdt.height, imgdt
            }, __proto.getCharCanvas = function(char, font, lineWidth, colStr, strokeColStr, cri, margin_left, margin_top, margin_right, margin_bottom) {
                var ctx = this.ctx;
                ctx.font != font && (ctx.font = font, ctx._lastFont = font), cri.width = ctx.measureText(char).width;
                var w = cri.width * this.lastScaleX,
                    h = cri.height * this.lastScaleY;
                return w += (margin_left + margin_right) * this.lastScaleX, h += (margin_top + margin_bottom) * this.lastScaleY + 1, w = Math.min(w, this.maxTexW), h = Math.min(h, this.maxTexH), CharRender_Canvas.canvas.width = Math.min(w + 1, this.maxTexW), CharRender_Canvas.canvas.height = Math.min(h + 1, this.maxTexH), ctx.font = font, ctx.clearRect(0, 0, w + 1 + lineWidth, h + 1 + lineWidth), ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.save(), this.scaleFontSize && ctx.scale(this.lastScaleX, this.lastScaleY), ctx.translate(margin_left, margin_top), ctx.textAlign = "left", ctx.textBaseline = "top", lineWidth > 0 ? (ctx.strokeStyle = strokeColStr, ctx.fillStyle = colStr, ctx.lineWidth = lineWidth, ctx.fillAndStrokeText ? ctx.fillAndStrokeText(char, 0, 0) : (ctx.strokeText(char, 0, 0), ctx.fillText(char, 0, 0))) : (ctx.fillStyle = colStr, ctx.fillText(char, 0, 0)), this.showDbgInfo && (ctx.strokeStyle = "#ff0000", ctx.strokeRect(0, 0, w, h), ctx.strokeStyle = "#00ff00", ctx.strokeRect(0, 0, cri.width, cri.height)), ctx.restore(), cri.bmpWidth = CharRender_Canvas.canvas.width, cri.bmpHeight = CharRender_Canvas.canvas.height, CharRender_Canvas.canvas
            }, __getset(0, __proto, "canvasWidth", function() {
                return CharRender_Canvas.canvas.width
            }, function(w) {
                CharRender_Canvas.canvas.width != w && (CharRender_Canvas.canvas.width = w, w > 2048 && console.warn("画文字设置的宽度太大，超过2048了"), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.scale(this.lastScaleX, this.lastScaleY))
            }), CharRender_Canvas.canvas = null, CharRender_Canvas
        }(),
        CharRender_Native = function(_super) {
            function CharRender_Native() {
                this.lastFont = "", CharRender_Native.__super.call(this)
            }
            __class(CharRender_Native, "laya.webgl.resource.CharRender_Native", ICharRender);
            var __proto = CharRender_Native.prototype;
            return __proto.getWidth = function(font, str) {
                return window.conchTextCanvas ? (window.conchTextCanvas.font = font, this.lastFont = font, window.conchTextCanvas.measureText(str).width) : 0
            }, __proto.scale = function(sx, sy) {}, __proto.getCharBmp = function(char, font, lineWidth, colStr, strokeColStr, size, margin_left, margin_top, margin_right, margin_bottom, rect) {
                if (!window.conchTextCanvas) return null;
                window.conchTextCanvas.font = font, this.lastFont = font;
                size.width = window.conchTextCanvas.measureText(char).width, size.height;
                var nStrokeColor = ColorUtils.create(strokeColStr).numColor,
                    nTextColor = ColorUtils.create(colStr).numColor,
                    textInfo = window.conchTextCanvas.getTextBitmapData(char, nTextColor, lineWidth > 2 ? 2 : lineWidth, nStrokeColor);
                return size.bmpWidth = textInfo.width, size.bmpHeight = textInfo.height, textInfo
            }, CharRender_Native
        }(),
        ShaderDefines2D = function(_super) {
            function ShaderDefines2D() {
                ShaderDefines2D.__super.call(this, ShaderDefines2D.__name2int, ShaderDefines2D.__int2name, ShaderDefines2D.__int2nameMap)
            }
            return __class(ShaderDefines2D, "laya.webgl.shader.d2.ShaderDefines2D", ShaderDefinesBase), ShaderDefines2D.__init__ = function() {
                ShaderDefines2D.reg("TEXTURE2D", 1), ShaderDefines2D.reg("PRIMITIVE", 4), ShaderDefines2D.reg("GLOW_FILTER", 8), ShaderDefines2D.reg("BLUR_FILTER", 16), ShaderDefines2D.reg("COLOR_FILTER", 32), ShaderDefines2D.reg("COLOR_ADD", 64), ShaderDefines2D.reg("WORLDMAT", 128), ShaderDefines2D.reg("FILLTEXTURE", 256), ShaderDefines2D.reg("FSHIGHPRECISION", 1024), ShaderDefines2D.reg("MVP3D", 2048)
            }, ShaderDefines2D.reg = function(name, value) {
                ShaderDefinesBase._reg(name, value, ShaderDefines2D.__name2int, ShaderDefines2D.__int2name)
            }, ShaderDefines2D.toText = function(value, int2name, int2nameMap) {
                return ShaderDefinesBase._toText(value, int2name, int2nameMap)
            }, ShaderDefines2D.toInt = function(names) {
                return ShaderDefinesBase._toInt(names, ShaderDefines2D.__name2int)
            }, ShaderDefines2D.TEXTURE2D = 1, ShaderDefines2D.PRIMITIVE = 4, ShaderDefines2D.FILTERGLOW = 8, ShaderDefines2D.FILTERBLUR = 16, ShaderDefines2D.FILTERCOLOR = 32, ShaderDefines2D.COLORADD = 64, ShaderDefines2D.WORLDMAT = 128, ShaderDefines2D.FILLTEXTURE = 256, ShaderDefines2D.SKINMESH = 512, ShaderDefines2D.SHADERDEFINE_FSHIGHPRECISION = 1024, ShaderDefines2D.MVP3D = 2048, ShaderDefines2D.NOOPTMASK = 312, ShaderDefines2D.__name2int = {}, ShaderDefines2D.__int2name = [], ShaderDefines2D.__int2nameMap = [], ShaderDefines2D
        }(),
        BaseShader = function(_super) {
            function BaseShader() {
                BaseShader.__super.call(this)
            }
            return __class(BaseShader, "laya.webgl.shader.BaseShader", Resource), BaseShader.activeShader = null, BaseShader.bindShader = null, BaseShader
        }(),
        TextTexture = function(_super) {
            function TextTexture(textureW, textureH) {
                this._source = null, this._texW = 0, this._texH = 0, this.__destroyed = !1, this._discardTm = 0, this.genID = 0, this.bitmap = {
                    id: 0,
                    _glTexture: null
                }, this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = 0, this.ri = null, TextTexture.__super.call(this), this._texW = textureW || TextRender.atlasWidth, this._texH = textureH || TextRender.atlasWidth, this.bitmap.id = this.id, this.lock = !0
            }
            __class(TextTexture, "laya.webgl.text.TextTexture", Resource);
            var __proto = TextTexture.prototype;
            return __proto.recreateResource = function() {
                if (!this._source) {
                    var gl = Render.isConchApp ? LayaGL.instance.getDefaultCommandEncoder() : WebGL.mainContext,
                        glTex = this._source = gl.createTexture();
                    this.bitmap._glTexture = glTex, WebGLContext.bindTexture(gl, 3553, glTex), gl.texImage2D(3553, 0, 6408, this._texW, this._texH, 0, 6408, 5121, null), gl.texParameteri(3553, 10241, 9729), gl.texParameteri(3553, 10240, 9729), gl.texParameteri(3553, 10242, 33071), gl.texParameteri(3553, 10243, 33071), TextRender.debugUV && this.fillWhite()
                }
            }, __proto.addChar = function(data, x, y, uv) {
                if (TextRender.isWan1Wan) return this.addCharCanvas(data, x, y, uv);
                !this._source && this.recreateResource();
                var gl = Render.isConchApp ? LayaGL.instance.getDefaultCommandEncoder() : WebGL.mainContext;
                WebGLContext.bindTexture(gl, 3553, this._source), !Render.isConchApp && gl.pixelStorei(37441, !0);
                var dt = data.data;
                data.data instanceof Uint8ClampedArray && (dt = new Uint8Array(dt.buffer)), gl.texSubImage2D(3553, 0, x, y, data.width, data.height, 6408, 5121, dt), !Render.isConchApp && gl.pixelStorei(37441, !1);
                var u0 = NaN,
                    v0 = NaN,
                    u1 = NaN,
                    v1 = NaN;
                return Render.isConchApp ? (u0 = x / this._texW, v0 = y / this._texH, u1 = (x + data.width) / this._texW, v1 = (y + data.height) / this._texH) : (u0 = (x + 1) / this._texW, v0 = y / this._texH, u1 = (x + data.width - 1) / this._texW, v1 = (y + data.height - 1) / this._texH), (uv = uv || new Array(8))[0] = u0, uv[1] = v0, uv[2] = u1, uv[3] = v0, uv[4] = u1, uv[5] = v1, uv[6] = u0, uv[7] = v1, uv
            }, __proto.addCharCanvas = function(canv, x, y, uv) {
                !this._source && this.recreateResource();
                var gl = Render.isConchApp ? LayaGL.instance.getDefaultCommandEncoder() : WebGL.mainContext;
                WebGLContext.bindTexture(gl, 3553, this._source), !Render.isConchApp && gl.pixelStorei(37441, !0), gl.texSubImage2D(3553, 0, x, y, 6408, 5121, canv), !Render.isConchApp && gl.pixelStorei(37441, !1);
                var u0 = NaN,
                    v0 = NaN,
                    u1 = NaN,
                    v1 = NaN;
                return Render.isConchApp ? (u0 = x / this._texW, v0 = y / this._texH, u1 = (x + canv.width) / this._texW, v1 = (y + canv.height) / this._texH) : (u0 = (x + 1) / this._texW, v0 = (y + 1) / this._texH, u1 = (x + canv.width - 1) / this._texW, v1 = (y + canv.height - 1) / this._texH), (uv = uv || new Array(8))[0] = u0, uv[1] = v0, uv[2] = u1, uv[3] = v0, uv[4] = u1, uv[5] = v1, uv[6] = u0, uv[7] = v1, uv
            }, __proto.fillWhite = function() {
                !this._source && this.recreateResource();
                var gl = Render.isConchApp ? LayaGL.instance.getDefaultCommandEncoder() : WebGL.mainContext,
                    dt = new Uint8Array(this._texW * this._texH * 4);
                dt.fill(255), gl.texSubImage2D(3553, 0, 0, 0, this._texW, this._texH, 6408, 5121, dt)
            }, __proto.discard = function() {
                this._texW == TextRender.atlasWidth && this._texH == TextRender.atlasWidth ? (this.genID++, TextTexture.poolLen >= TextTexture.pool.length && (TextTexture.pool = TextTexture.pool.concat(new Array(10))), this._discardTm = Laya.stage.getFrameTm(), TextTexture.pool[TextTexture.poolLen++] = this) : this.destroy()
            }, __proto.destroy = function() {
                console.log("destroy TextTexture"), this.__destroyed = !0;
                var gl = Render.isConchApp ? LayaGL.instance.getDefaultCommandEncoder() : WebGL.mainContext;
                this._source && gl.deleteTexture(this._source), this._source = null
            }, __proto.touchRect = function(ri, curloop) {
                this.lastTouchTm != curloop && (this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = curloop);
                var texw2 = TextRender.atlasWidth * TextRender.atlasWidth,
                    gridw2 = TextAtlas.atlasGridW * TextAtlas.atlasGridW;
                this.curUsedCovRate += ri.bmpWidth * ri.bmpHeight / texw2, this.curUsedCovRateAtlas += Math.ceil(ri.bmpWidth / TextAtlas.atlasGridW) * Math.ceil(ri.bmpHeight / TextAtlas.atlasGridW) / (texw2 / gridw2)
            }, __proto._getSource = function() {
                return this._source
            }, __proto.drawOnScreen = function(x, y) {}, __getset(0, __proto, "texture", function() {
                return this
            }), TextTexture.getTextTexture = function(w, h) {
                if (w != TextRender.atlasWidth || w != TextRender.atlasWidth) return new TextTexture(w, h);
                if (TextTexture.poolLen > 0) {
                    var ret = TextTexture.pool[--TextTexture.poolLen];
                    return TextTexture.poolLen > 0 && TextTexture.clean(), ret
                }
                return new TextTexture(w, h)
            }, TextTexture.clean = function() {
                var curtm = Laya.stage.getFrameTm();
                if (0 === TextTexture.cleanTm && (TextTexture.cleanTm = curtm), curtm - TextTexture.cleanTm >= TextRender.checkCleanTextureDt) {
                    for (var i = 0; i < TextTexture.poolLen; i++) {
                        var p = TextTexture.pool[i];
                        curtm - p._discardTm >= TextRender.destroyUnusedTextureDt && (p.destroy(), TextTexture.pool[i] = TextTexture.pool[TextTexture.poolLen - 1], TextTexture.poolLen--, i--)
                    }
                    TextTexture.cleanTm = curtm
                }
            }, TextTexture.poolLen = 0, TextTexture.cleanTm = 0, __static(TextTexture, ["pool", function() {
                return this.pool = new Array(10)
            }]), TextTexture
        }(),
        VertexBuffer2D = function(_super) {
            function VertexBuffer2D(vertexStride, bufferUsage) {
                this._floatArray32 = null, this._uint32Array = null, this._vertexStride = 0, VertexBuffer2D.__super.call(this), this._vertexStride = vertexStride, this._bufferUsage = bufferUsage, this._bufferType = 34962, this._buffer = new ArrayBuffer(8), this._floatArray32 = new Float32Array(this._buffer), this._uint32Array = new Uint32Array(this._buffer)
            }
            __class(VertexBuffer2D, "laya.webgl.utils.VertexBuffer2D", Buffer2D);
            var __proto = VertexBuffer2D.prototype;
            return __proto.getFloat32Array = function() {
                return this._floatArray32
            }, __proto.appendArray = function(data) {
                var oldoff = this._byteLength >> 2;
                this.setByteLength(this._byteLength + 4 * data.length), this.getFloat32Array().set(data, oldoff), this._upload = !0
            }, __proto._checkArrayUse = function() {
                this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer)), this._uint32Array && (this._uint32Array = new Uint32Array(this._buffer))
            }, __proto.deleteBuffer = function() {
                this._disposeResource()
            }, __proto._bindForVAO = function() {
                LayaGL.instance.bindBuffer(34962, this._glBuffer)
            }, __proto.bind = function() {
                return Buffer._bindedVertexBuffer !== this._glBuffer && (LayaGL.instance.bindBuffer(34962, this._glBuffer), Buffer._bindedVertexBuffer = this._glBuffer, !0)
            }, __proto.destroy = function() {
                laya.webgl.utils.Buffer.prototype.destroy.call(this), this._byteLength = 0, this._upload = !0, this._buffer = null, this._floatArray32 = null
            }, __getset(0, __proto, "vertexStride", function() {
                return this._vertexStride
            }), VertexBuffer2D.create = function(vertexStride, bufferUsage) {
                return void 0 === bufferUsage && (bufferUsage = 35048), new VertexBuffer2D(vertexStride, bufferUsage)
            }, VertexBuffer2D
        }(),
        IndexBuffer2D = function(_super) {
            function IndexBuffer2D(bufferUsage) {
                this._uint16Array = null, void 0 === bufferUsage && (bufferUsage = 35044), IndexBuffer2D.__super.call(this), this._bufferUsage = bufferUsage, this._bufferType = 34963, this._buffer = new ArrayBuffer(8)
            }
            __class(IndexBuffer2D, "laya.webgl.utils.IndexBuffer2D", Buffer2D);
            var __proto = IndexBuffer2D.prototype;
            return __proto._checkArrayUse = function() {
                this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer))
            }, __proto.getUint16Array = function() {
                return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer))
            }, __proto._bindForVAO = function() {
                LayaGL.instance.bindBuffer(34963, this._glBuffer)
            }, __proto.bind = function() {
                return Buffer._bindedIndexBuffer !== this._glBuffer && (LayaGL.instance.bindBuffer(34963, this._glBuffer), Buffer._bindedIndexBuffer = this._glBuffer, !0)
            }, __proto.destory = function() {
                this._uint16Array = null, this._buffer = null
            }, __proto.disposeResource = function() {
                this._disposeResource()
            }, IndexBuffer2D.create = function(bufferUsage) {
                return void 0 === bufferUsage && (bufferUsage = 35044), new IndexBuffer2D(bufferUsage)
            }, IndexBuffer2D
        }(),
        BaseTexture = function(_super) {
            function BaseTexture(format, mipMap) {
                BaseTexture.__super.call(this), this._wrapModeU = 0, this._wrapModeV = 0, this._filterMode = 1, this._readyed = !1, this._width = -1, this._height = -1, this._format = format, this._mipmap = mipMap, this._anisoLevel = 1, this._glTexture = LayaGL.instance.createTexture()
            }
            __class(BaseTexture, "laya.webgl.resource.BaseTexture", Bitmap);
            var __proto = BaseTexture.prototype;
            return __proto._isPot = function(size) {
                return 0 == (size & size - 1)
            }, __proto._getGLFormat = function() {
                var glFormat = 0;
                switch (this._format) {
                    case 0:
                        glFormat = 6407;
                        break;
                    case 1:
                        glFormat = 6408;
                        break;
                    case 2:
                        glFormat = 6406;
                        break;
                    case 3:
                        if (!WebGLContext._compressedTextureS3tc) throw "BaseTexture: not support DXT1 format.";
                        glFormat = WebGLContext._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        break;
                    case 4:
                        if (!WebGLContext._compressedTextureS3tc) throw "BaseTexture: not support DXT5 format.";
                        glFormat = WebGLContext._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                        break;
                    case 5:
                        if (!WebGLContext._compressedTextureEtc1) throw "BaseTexture: not support ETC1RGB format.";
                        glFormat = WebGLContext._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;
                        break;
                    case 9:
                        if (!WebGLContext._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_2BPPV format.";
                        glFormat = WebGLContext._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        break;
                    case 10:
                        if (!WebGLContext._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_2BPPV format.";
                        glFormat = WebGLContext._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                        break;
                    case 11:
                        if (!WebGLContext._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_4BPPV format.";
                        glFormat = WebGLContext._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        break;
                    case 12:
                        if (!WebGLContext._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_4BPPV format.";
                        glFormat = WebGLContext._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        break;
                    default:
                        throw "BaseTexture: unknown texture format."
                }
                return glFormat
            }, __proto._setFilterMode = function(value) {
                var gl = LayaGL.instance;
                switch (WebGLContext.bindTexture(gl, this._glTextureType, this._glTexture), value) {
                    case 0:
                        this._mipmap ? gl.texParameteri(this._glTextureType, 10241, 9984) : gl.texParameteri(this._glTextureType, 10241, 9728), gl.texParameteri(this._glTextureType, 10240, 9728);
                        break;
                    case 1:
                        this._mipmap ? gl.texParameteri(this._glTextureType, 10241, 9985) : gl.texParameteri(this._glTextureType, 10241, 9729), gl.texParameteri(this._glTextureType, 10240, 9729);
                        break;
                    case 2:
                        this._mipmap ? gl.texParameteri(this._glTextureType, 10241, 9987) : gl.texParameteri(this._glTextureType, 10241, 9729), gl.texParameteri(this._glTextureType, 10240, 9729);
                        break;
                    default:
                        throw new Error("BaseTexture:unknown filterMode value.")
                }
            }, __proto._setWarpMode = function(orientation, mode) {
                var gl = LayaGL.instance;
                if (WebGLContext.bindTexture(gl, this._glTextureType, this._glTexture), this._isPot(this._width) && this._isPot(this._height)) switch (mode) {
                    case 0:
                        gl.texParameteri(this._glTextureType, orientation, 10497);
                        break;
                    case 1:
                        gl.texParameteri(this._glTextureType, orientation, 33071)
                } else gl.texParameteri(this._glTextureType, orientation, 33071)
            }, __proto._setAnisotropy = function(value) {
                var anisotropic = WebGLContext._extTextureFilterAnisotropic;
                if (anisotropic && !Browser.onLimixiu) {
                    value = Math.max(value, 1);
                    var gl = LayaGL.instance;
                    WebGLContext.bindTexture(gl, this._glTextureType, this._glTexture), value = Math.min(gl.getParameter(anisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT), value), gl.texParameterf(this._glTextureType, anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, value)
                }
            }, __proto._disposeResource = function() {
                this._glTexture && (LayaGL.instance.deleteTexture(this._glTexture), this._glTexture = null, this._setGPUMemory(0))
            }, __proto._getSource = function() {
                return this._readyed ? this._glTexture : null
            }, __proto.generateMipmap = function() {
                this._isPot(this.width) && this._isPot(this.height) && LayaGL.instance.generateMipmap(this._glTextureType)
            }, __getset(0, __proto, "wrapModeU", function() {
                return this._wrapModeU
            }, function(value) {
                this._wrapModeU !== value && (this._wrapModeU = value, -1 !== this._width && this._setWarpMode(10242, value))
            }), __getset(0, __proto, "mipmap", function() {
                return this._mipmap
            }), __getset(0, __proto, "format", function() {
                return this._format
            }), __getset(0, __proto, "wrapModeV", function() {
                return this._wrapModeV
            }, function(value) {
                this._wrapModeV !== value && (this._wrapModeV = value, -1 !== this._height && this._setWarpMode(10243, value))
            }), __getset(0, __proto, "defaulteTexture", function() {
                throw "BaseTexture:must override it."
            }), __getset(0, __proto, "filterMode", function() {
                return this._filterMode
            }, function(value) {
                value !== this._filterMode && (this._filterMode = value, -1 !== this._width && -1 !== this._height && this._setFilterMode(value))
            }), __getset(0, __proto, "anisoLevel", function() {
                return this._anisoLevel
            }, function(value) {
                value !== this._anisoLevel && (this._anisoLevel = Math.max(1, Math.min(16, value)), -1 !== this._width && -1 !== this._height && this._setAnisotropy(value))
            }), BaseTexture.WARPMODE_REPEAT = 0, BaseTexture.WARPMODE_CLAMP = 1, BaseTexture.FILTERMODE_POINT = 0, BaseTexture.FILTERMODE_BILINEAR = 1, BaseTexture.FILTERMODE_TRILINEAR = 2, BaseTexture.FORMAT_R8G8B8 = 0, BaseTexture.FORMAT_R8G8B8A8 = 1, BaseTexture.FORMAT_ALPHA8 = 2, BaseTexture.FORMAT_DXT1 = 3, BaseTexture.FORMAT_DXT5 = 4, BaseTexture.FORMAT_ETC1RGB = 5, BaseTexture.FORMAT_PVRTCRGB_2BPPV = 9, BaseTexture.FORMAT_PVRTCRGBA_2BPPV = 10, BaseTexture.FORMAT_PVRTCRGB_4BPPV = 11, BaseTexture.FORMAT_PVRTCRGBA_4BPPV = 12, BaseTexture.FORMAT_DEPTH_16 = 0, BaseTexture.FORMAT_STENCIL_8 = 1, BaseTexture.FORMAT_DEPTHSTENCIL_16_8 = 2, BaseTexture.FORMAT_DEPTHSTENCIL_NONE = 3, BaseTexture
        }(),
        Shader = function(_super) {
            function Shader(vs, ps, saveName, nameMap, bindAttrib) {
                if (this._attribInfo = null, this.customCompile = !1, this._curActTexIndex = 0, this.tag = {}, this._program = null, this._params = null, this._paramsMap = {}, Shader.__super.call(this), !vs || !ps) throw "Shader Error";
                this._attribInfo = bindAttrib, this._id = ++Shader._count, this._vs = vs, this._ps = ps, this._nameMap = nameMap || {}, null != saveName && (Shader.sharders[saveName] = this), this.recreateResource(), this.lock = !0
            }
            __class(Shader, "laya.webgl.shader.Shader", BaseShader);
            var __proto = Shader.prototype;
            return __proto.recreateResource = function() {
                this._compile(), this._setGPUMemory(0)
            }, __proto._disposeResource = function() {
                WebGL.mainContext.deleteShader(this._vshader), WebGL.mainContext.deleteShader(this._pshader), WebGL.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null, this._params = null, this._paramsMap = {}, this._setGPUMemory(0), this._curActTexIndex = 0
            }, __proto._compile = function() {
                if (this._vs && this._ps && !this._params) {
                    var result;
                    this._reCompile = !0, this._params = [], this.customCompile && (result = ShaderCompile.preGetParams(this._vs, this._ps));
                    var gl = WebGL.mainContext;
                    this._program = gl.createProgram(), this._vshader = Shader._createShader(gl, this._vs, 35633), this._pshader = Shader._createShader(gl, this._ps, 35632), gl.attachShader(this._program, this._vshader), gl.attachShader(this._program, this._pshader);
                    var one, n, i = 0,
                        attribDescNum = this._attribInfo ? this._attribInfo.length : 0;
                    for (i = 0; i < attribDescNum; i += 2) gl.bindAttribLocation(this._program, this._attribInfo[i + 1], this._attribInfo[i]);
                    if (gl.linkProgram(this._program), !this.customCompile && !gl.getProgramParameter(this._program, 35714)) throw gl.getProgramInfoLog(this._program);
                    var nUniformNum = this.customCompile ? result.uniforms.length : gl.getProgramParameter(this._program, 35718);
                    for (i = 0; i < nUniformNum; i++) {
                        var uniform = this.customCompile ? result.uniforms[i] : gl.getActiveUniform(this._program, i);
                        (one = {
                            vartype: "uniform",
                            glfun: null,
                            ivartype: 1,
                            location: gl.getUniformLocation(this._program, uniform.name),
                            name: uniform.name,
                            type: uniform.type,
                            isArray: !1,
                            isSame: !1,
                            preValue: null,
                            indexOfParams: 0
                        }).name.indexOf("[0]") > 0 && (one.name = one.name.substr(0, one.name.length - 3), one.isArray = !0, one.location = gl.getUniformLocation(this._program, one.name)), this._params.push(one)
                    }
                    for (i = 0, n = this._params.length; i < n; i++) switch ((one = this._params[i]).indexOfParams = i, one.index = 1, one.value = [one.location, null], one.codename = one.name, one.name = this._nameMap[one.codename] ? this._nameMap[one.codename] : one.codename, this._paramsMap[one.name] = one, one._this = this, one.uploadedValue = [], one.type) {
                        case 5124:
                            one.fun = one.isArray ? this._uniform1iv : this._uniform1i;
                            break;
                        case 5126:
                            one.fun = one.isArray ? this._uniform1fv : this._uniform1f;
                            break;
                        case 35664:
                            one.fun = one.isArray ? this._uniform_vec2v : this._uniform_vec2;
                            break;
                        case 35665:
                            one.fun = one.isArray ? this._uniform_vec3v : this._uniform_vec3;
                            break;
                        case 35666:
                            one.fun = one.isArray ? this._uniform_vec4v : this._uniform_vec4;
                            break;
                        case 35678:
                            one.fun = this._uniform_sampler2D;
                            break;
                        case 35680:
                            one.fun = this._uniform_samplerCube;
                            break;
                        case 35676:
                            one.glfun = gl.uniformMatrix4fv, one.fun = this._uniformMatrix4fv;
                            break;
                        case 35670:
                            one.fun = this._uniform1i;
                            break;
                        case 35674:
                        case 35675:
                        default:
                            throw new Error("compile shader err!")
                    }
                }
            }, __proto.getUniform = function(name) {
                return this._paramsMap[name]
            }, __proto._uniform1f = function(one, value) {
                var uploadedValue = one.uploadedValue;
                return uploadedValue[0] !== value ? (WebGL.mainContext.uniform1f(one.location, uploadedValue[0] = value), 1) : 0
            }, __proto._uniform1fv = function(one, value) {
                if (value.length < 4) {
                    var uploadedValue = one.uploadedValue;
                    return uploadedValue[0] !== value[0] || uploadedValue[1] !== value[1] || uploadedValue[2] !== value[2] || uploadedValue[3] !== value[3] ? (WebGL.mainContext.uniform1fv(one.location, value), uploadedValue[0] = value[0], uploadedValue[1] = value[1], uploadedValue[2] = value[2], uploadedValue[3] = value[3], 1) : 0
                }
                return WebGL.mainContext.uniform1fv(one.location, value), 1
            }, __proto._uniform_vec2 = function(one, value) {
                var uploadedValue = one.uploadedValue;
                return uploadedValue[0] !== value[0] || uploadedValue[1] !== value[1] ? (WebGL.mainContext.uniform2f(one.location, uploadedValue[0] = value[0], uploadedValue[1] = value[1]), 1) : 0
            }, __proto._uniform_vec2v = function(one, value) {
                if (value.length < 2) {
                    var uploadedValue = one.uploadedValue;
                    return uploadedValue[0] !== value[0] || uploadedValue[1] !== value[1] || uploadedValue[2] !== value[2] || uploadedValue[3] !== value[3] ? (WebGL.mainContext.uniform2fv(one.location, value), uploadedValue[0] = value[0], uploadedValue[1] = value[1], uploadedValue[2] = value[2], uploadedValue[3] = value[3], 1) : 0
                }
                return WebGL.mainContext.uniform2fv(one.location, value), 1
            }, __proto._uniform_vec3 = function(one, value) {
                var uploadedValue = one.uploadedValue;
                return uploadedValue[0] !== value[0] || uploadedValue[1] !== value[1] || uploadedValue[2] !== value[2] ? (WebGL.mainContext.uniform3f(one.location, uploadedValue[0] = value[0], uploadedValue[1] = value[1], uploadedValue[2] = value[2]), 1) : 0
            }, __proto._uniform_vec3v = function(one, value) {
                return WebGL.mainContext.uniform3fv(one.location, value), 1
            }, __proto._uniform_vec4 = function(one, value) {
                var uploadedValue = one.uploadedValue;
                return uploadedValue[0] !== value[0] || uploadedValue[1] !== value[1] || uploadedValue[2] !== value[2] || uploadedValue[3] !== value[3] ? (WebGL.mainContext.uniform4f(one.location, uploadedValue[0] = value[0], uploadedValue[1] = value[1], uploadedValue[2] = value[2], uploadedValue[3] = value[3]), 1) : 0
            }, __proto._uniform_vec4v = function(one, value) {
                return WebGL.mainContext.uniform4fv(one.location, value), 1
            }, __proto._uniformMatrix2fv = function(one, value) {
                return WebGL.mainContext.uniformMatrix2fv(one.location, !1, value), 1
            }, __proto._uniformMatrix3fv = function(one, value) {
                return WebGL.mainContext.uniformMatrix3fv(one.location, !1, value), 1
            }, __proto._uniformMatrix4fv = function(one, value) {
                return WebGL.mainContext.uniformMatrix4fv(one.location, !1, value), 1
            }, __proto._uniform1i = function(one, value) {
                var uploadedValue = one.uploadedValue;
                return uploadedValue[0] !== value ? (WebGL.mainContext.uniform1i(one.location, uploadedValue[0] = value), 1) : 0
            }, __proto._uniform1iv = function(one, value) {
                return WebGL.mainContext.uniform1iv(one.location, value), 1
            }, __proto._uniform_ivec2 = function(one, value) {
                var uploadedValue = one.uploadedValue;
                return uploadedValue[0] !== value[0] || uploadedValue[1] !== value[1] ? (WebGL.mainContext.uniform2i(one.location, uploadedValue[0] = value[0], uploadedValue[1] = value[1]), 1) : 0
            }, __proto._uniform_ivec2v = function(one, value) {
                return WebGL.mainContext.uniform2iv(one.location, value), 1
            }, __proto._uniform_vec3i = function(one, value) {
                var uploadedValue = one.uploadedValue;
                return uploadedValue[0] !== value[0] || uploadedValue[1] !== value[1] || uploadedValue[2] !== value[2] ? (WebGL.mainContext.uniform3i(one.location, uploadedValue[0] = value[0], uploadedValue[1] = value[1], uploadedValue[2] = value[2]), 1) : 0
            }, __proto._uniform_vec3vi = function(one, value) {
                return WebGL.mainContext.uniform3iv(one.location, value), 1
            }, __proto._uniform_vec4i = function(one, value) {
                var uploadedValue = one.uploadedValue;
                return uploadedValue[0] !== value[0] || uploadedValue[1] !== value[1] || uploadedValue[2] !== value[2] || uploadedValue[3] !== value[3] ? (WebGL.mainContext.uniform4i(one.location, uploadedValue[0] = value[0], uploadedValue[1] = value[1], uploadedValue[2] = value[2], uploadedValue[3] = value[3]), 1) : 0
            }, __proto._uniform_vec4vi = function(one, value) {
                return WebGL.mainContext.uniform4iv(one.location, value), 1
            }, __proto._uniform_sampler2D = function(one, value) {
                var gl = WebGL.mainContext,
                    uploadedValue = one.uploadedValue;
                return null == uploadedValue[0] ? (uploadedValue[0] = this._curActTexIndex, gl.uniform1i(one.location, this._curActTexIndex), WebGLContext.activeTexture(gl, 33984 + this._curActTexIndex), WebGLContext.bindTexture(gl, 3553, value), this._curActTexIndex++, 1) : (WebGLContext.activeTexture(gl, 33984 + uploadedValue[0]), WebGLContext.bindTexture(gl, 3553, value), 0)
            }, __proto._uniform_samplerCube = function(one, value) {
                var gl = WebGL.mainContext,
                    uploadedValue = one.uploadedValue;
                return null == uploadedValue[0] ? (uploadedValue[0] = this._curActTexIndex, gl.uniform1i(one.location, this._curActTexIndex), WebGLContext.activeTexture(gl, 33984 + this._curActTexIndex), WebGLContext.bindTexture(gl, 34067, value), this._curActTexIndex++, 1) : (WebGLContext.activeTexture(gl, 33984 + uploadedValue[0]), WebGLContext.bindTexture(gl, 34067, value), 0)
            }, __proto._noSetValue = function(one) {
                console.log("no....:" + one.name)
            }, __proto.uploadOne = function(name, value) {
                WebGLContext.useProgram(WebGL.mainContext, this._program);
                var one = this._paramsMap[name];
                one.fun.call(this, one, value)
            }, __proto.uploadTexture2D = function(value) {
                var CTX = WebGLContext;
                CTX._activeTextures[0] !== value && (CTX.bindTexture(WebGL.mainContext, CTX.TEXTURE_2D, value), CTX._activeTextures[0] = value)
            }, __proto.upload = function(shaderValue, params) {
                BaseShader.activeShader = BaseShader.bindShader = this;
                var gl = WebGL.mainContext;
                WebGLContext.useProgram(gl, this._program), this._reCompile ? (params = this._params, this._reCompile = !1) : params = params || this._params;
                for (var one, value, n = params.length, shaderCall = 0, i = 0; i < n; i++) null !== (value = shaderValue[(one = params[i]).name]) && (shaderCall += one.fun.call(this, one, value));
                Stat.shaderCall += shaderCall
            }, __proto.uploadArray = function(shaderValue, length, _bufferUsage) {
                BaseShader.activeShader = this, BaseShader.bindShader = this, WebGLContext.useProgram(WebGL.mainContext, this._program);
                this._params;
                for (var value, one, shaderCall = 0, i = length - 2; i >= 0; i -= 2)(one = this._paramsMap[shaderValue[i]]) && null != (value = shaderValue[i + 1]) && (_bufferUsage && _bufferUsage[one.name] && _bufferUsage[one.name].bind(), shaderCall += one.fun.call(this, one, value));
                Stat.shaderCall += shaderCall
            }, __proto.getParams = function() {
                return this._params
            }, __proto.setAttributesLocation = function(attribDesc) {
                this._attribInfo = attribDesc
            }, Shader.getShader = function(name) {
                return Shader.sharders[name]
            }, Shader.create = function(vs, ps, saveName, nameMap, bindAttrib) {
                return new Shader(vs, ps, saveName, nameMap, bindAttrib)
            }, Shader.withCompile = function(nameID, define, shaderName, createShader) {
                if (shaderName && Shader.sharders[shaderName]) return Shader.sharders[shaderName];
                var pre = Shader._preCompileShader[2e-4 * nameID];
                if (!pre) throw new Error("withCompile shader err!" + nameID);
                return pre.createShader(define, shaderName, createShader, null)
            }, Shader.withCompile2D = function(nameID, mainID, define, shaderName, createShader, bindAttrib) {
                if (shaderName && Shader.sharders[shaderName]) return Shader.sharders[shaderName];
                var pre = Shader._preCompileShader[2e-4 * nameID + mainID];
                if (!pre) throw new Error("withCompile shader err!" + nameID + " " + mainID);
                return pre.createShader(define, shaderName, createShader, bindAttrib)
            }, Shader.addInclude = function(fileName, txt) {
                ShaderCompile.addInclude(fileName, txt)
            }, Shader.preCompile = function(nameID, vs, ps, nameMap) {
                var id = 2e-4 * nameID;
                Shader._preCompileShader[id] = new ShaderCompile(vs, ps, nameMap)
            }, Shader.preCompile2D = function(nameID, mainID, vs, ps, nameMap) {
                var id = 2e-4 * nameID + mainID;
                Shader._preCompileShader[id] = new ShaderCompile(vs, ps, nameMap)
            }, Shader._createShader = function(gl, str, type) {
                var shader = gl.createShader(type);
                return gl.shaderSource(shader, str), gl.compileShader(shader), gl.getShaderParameter(shader, 35713) ? shader : (console.log(gl.getShaderInfoLog(shader)), null)
            }, Shader._count = 0, Shader._preCompileShader = {}, Shader.SHADERNAME2ID = 2e-4, Shader.sharders = new Array(32), __static(Shader, ["nameKey", function() {
                return this.nameKey = new StringKey
            }]), Shader
        }(),
        Texture2D = function(_super) {
            function Texture2D(width, height, format, mipmap, canRead) {
                if (void 0 === width && (width = 0), void 0 === height && (height = 0), void 0 === format && (format = 1), void 0 === mipmap && (mipmap = !0), void 0 === canRead && (canRead = !1), Texture2D.__super.call(this, format, mipmap), this._glTextureType = 3553, this._width = width, this._height = height, this._canRead = canRead, this._setWarpMode(10242, this._wrapModeU), this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._mipmap) {
                    this._mipmapCount = Math.max(Math.ceil(Math.log2(width)) + 1, Math.ceil(Math.log2(2)) + 1);
                    for (var i = 0; i < this._mipmapCount; i++) this._setPixels(null, i, Math.max(width >> i, 1), Math.max(height >> i, 1));
                    this._setGPUMemory(width * height * 4 * (1 + 1 / 3))
                } else this._mipmapCount = 1, this._setGPUMemory(width * height * 4)
            }
            __class(Texture2D, "laya.webgl.resource.Texture2D", BaseTexture);
            var __proto = Texture2D.prototype;
            return __proto._getFormatByteCount = function() {
                switch (this._format) {
                    case 0:
                        return 3;
                    case 1:
                        return 4;
                    case 2:
                        return 1;
                    default:
                        throw "Texture2D: unknown format."
                }
            }, __proto._setPixels = function(pixels, miplevel, width, height) {
                var gl = LayaGL.instance,
                    textureType = this._glTextureType,
                    glFormat = this._getGLFormat();
                WebGLContext.bindTexture(gl, textureType, this._glTexture), 0 === this.format ? (gl.pixelStorei(3317, 1), gl.texImage2D(textureType, miplevel, glFormat, width, height, 0, glFormat, 5121, pixels), gl.pixelStorei(3317, 4)) : gl.texImage2D(textureType, miplevel, glFormat, width, height, 0, glFormat, 5121, pixels)
            }, __proto._calcualatesCompressedDataSize = function(format, width, height) {
                switch (format) {
                    case 3:
                    case 5:
                        return (width + 3 >> 2) * (height + 3 >> 2) * 8;
                    case 4:
                        return (width + 3 >> 2) * (height + 3 >> 2) * 16;
                    case 11:
                    case 12:
                        return Math.floor((Math.max(width, 8) * Math.max(height, 8) * 4 + 7) / 8);
                    case 9:
                    case 10:
                        return Math.floor((Math.max(width, 16) * Math.max(height, 8) * 2 + 7) / 8);
                    default:
                        return 0
                }
            }, __proto._pharseDDS = function(arrayBuffer) {
                var header = new Int32Array(arrayBuffer, 0, 31);
                if (542327876 != header[0]) throw "Invalid magic number in DDS header";
                if (!(4 & header[20])) throw "Unsupported format, must contain a FourCC code";
                var compressedFormat = header[21];
                switch (this._format) {
                    case 3:
                        if (827611204 !== compressedFormat) throw "the FourCC code is not same with texture format.";
                        break;
                    case 4:
                        if (894720068 !== compressedFormat) throw "the FourCC code is not same with texture format.";
                        break;
                    default:
                        throw "unknown texture format."
                }
                var mipLevels = 1;
                if (131072 & header[2]) {
                    if (mipLevels = Math.max(1, header[7]), !this._mipmap) throw "the mipmap is not same with Texture2D."
                } else if (this._mipmap) throw "the mipmap is not same with Texture2D.";
                var width = header[4],
                    height = header[3];
                this._width = width, this._height = height;
                var dataOffset = header[1] + 4;
                this._upLoadCompressedTexImage2D(arrayBuffer, width, height, mipLevels, dataOffset, 0)
            }, __proto._pharseKTX = function(arrayBuffer) {
                var id = new Uint8Array(arrayBuffer, 0, 12);
                if (171 != id[0] || 75 != id[1] || 84 != id[2] || 88 != id[3] || 32 != id[4] || 49 != id[5] || 49 != id[6] || 187 != id[7] || 13 != id[8] || 10 != id[9] || 26 != id[10] || 10 != id[11]) throw "Invalid fileIdentifier in KTX header";
                var header = new Int32Array(id.buffer, id.length, 13);
                switch (header[4]) {
                    case WebGLContext._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                        this._format = 5;
                        break;
                    default:
                        throw "unknown texture format."
                }
                var mipLevels = header[11],
                    width = header[6],
                    height = header[7];
                this._width = width, this._height = height;
                var dataOffset = 64 + header[12];
                this._upLoadCompressedTexImage2D(arrayBuffer, width, height, mipLevels, dataOffset, 4)
            }, __proto._pharsePVR = function(arrayBuffer) {
                var header = new Int32Array(arrayBuffer, 0, 13);
                if (55727696 != header[0]) throw "Invalid magic number in PVR header";
                switch (header[2]) {
                    case 0:
                        this._format = 9;
                        break;
                    case 2:
                        this._format = 11;
                        break;
                    case 1:
                        this._format = 10;
                        break;
                    case 3:
                        this._format = 12;
                        break;
                    default:
                        throw "Texture2D:unknown PVR format."
                }
                var mipLevels = header[11],
                    width = header[7],
                    height = header[6];
                this._width = width, this._height = height;
                var dataOffset = header[12] + 52;
                this._upLoadCompressedTexImage2D(arrayBuffer, width, height, mipLevels, dataOffset, 0)
            }, __proto._upLoadCompressedTexImage2D = function(data, width, height, miplevelCount, dataOffset, imageSizeOffset) {
                var gl = LayaGL.instance,
                    textureType = this._glTextureType;
                WebGLContext.bindTexture(gl, textureType, this._glTexture);
                for (var glFormat = this._getGLFormat(), offset = dataOffset, i = 0; i < miplevelCount; i++) {
                    offset += imageSizeOffset;
                    var mipDataSize = this._calcualatesCompressedDataSize(this._format, width, height),
                        mipData = new Uint8Array(data, offset, mipDataSize);
                    gl.compressedTexImage2D(textureType, i, glFormat, width, height, 0, mipData), width = Math.max(width >> 1, 1), height = Math.max(height >> 1, 1), offset += mipDataSize
                }
                var memory = offset;
                this._setGPUMemory(memory), this._readyed = !0, this._activeResource()
            }, __proto.loadImageSource = function(source, premultiplyAlpha) {
                void 0 === premultiplyAlpha && (premultiplyAlpha = !1);
                var width = source.width,
                    height = source.height;
                this._width = width, this._height = height, this._isPot(width) && this._isPot(height) || (this._mipmap = !1), this._setWarpMode(10242, this._wrapModeU), this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode);
                var gl = LayaGL.instance;
                WebGLContext.bindTexture(gl, this._glTextureType, this._glTexture);
                var glFormat = this._getGLFormat();
                Render.isConchApp ? source instanceof laya.resource.HTMLCanvas ? gl.texImage2D(this._glTextureType, 0, 6408, 6408, 5121, source) : (source.setPremultiplyAlpha(premultiplyAlpha), gl.texImage2D(this._glTextureType, 0, 6408, 6408, 5121, source)) : (premultiplyAlpha && gl.pixelStorei(37441, !0), gl.texImage2D(this._glTextureType, 0, glFormat, glFormat, 5121, source), premultiplyAlpha && gl.pixelStorei(37441, !1)), this._mipmap ? (gl.generateMipmap(this._glTextureType), this._setGPUMemory(width * height * 4 * (1 + 1 / 3))) : this._setGPUMemory(width * height * 4), this._canRead && (Render.isConchApp ? this._pixels = new Uint8Array(source._nativeObj.getImageData(0, 0, width, height)) : (Browser.canvas.size(width, height), Browser.canvas.clear(), Browser.context.drawImage(source, 0, 0, width, height), this._pixels = new Uint8Array(Browser.context.getImageData(0, 0, width, height).data.buffer))), this._readyed = !0, this._activeResource()
            }, __proto.setPixels = function(pixels, miplevel) {
                if (void 0 === miplevel && (miplevel = 0), !pixels) throw "Texture2D:pixels can't be null.";
                var width = Math.max(this._width >> miplevel, 1),
                    height = Math.max(this._height >> miplevel, 1),
                    pixelsCount = width * height * this._getFormatByteCount();
                if (pixels.length < pixelsCount) throw "Texture2D:pixels length should at least " + pixelsCount + ".";
                this._setPixels(pixels, miplevel, width, height), this._canRead && (this._pixels = pixels), this._readyed = !0, this._activeResource()
            }, __proto.setSubPixels = function(x, y, width, height, pixels, miplevel) {
                if (void 0 === miplevel && (miplevel = 0), !pixels) throw "Texture2D:pixels can't be null.";
                var gl = LayaGL.instance,
                    textureType = this._glTextureType;
                WebGLContext.bindTexture(gl, textureType, this._glTexture);
                var glFormat = this._getGLFormat();
                0 === this._format ? (gl.pixelStorei(3317, 1), gl.texSubImage2D(textureType, miplevel, x, y, width, height, glFormat, 5121, pixels), gl.pixelStorei(3317, 4)) : gl.texSubImage2D(textureType, miplevel, x, y, width, height, glFormat, 5121, pixels), this._readyed = !0, this._activeResource()
            }, __proto.setCompressData = function(data) {
                switch (this._format) {
                    case 3:
                    case 4:
                        this._pharseDDS(data);
                        break;
                    case 5:
                        this._pharseKTX(data);
                        break;
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        this._pharsePVR(data);
                        break;
                    default:
                        throw "Texture2D:unkonwn format."
                }
            }, __proto._recoverResource = function() {}, __proto.getPixels = function() {
                if (this._canRead) return this._pixels;
                throw new Error("Texture2D: must set texture canRead is true.")
            }, __getset(0, __proto, "mipmapCount", function() {
                return this._mipmapCount
            }), __getset(0, __proto, "defaulteTexture", function() {
                return laya.webgl.resource.Texture2D.grayTexture
            }), Texture2D.__init__ = function() {
                var pixels = new Uint8Array(3);
                pixels[0] = 128, pixels[1] = 128, pixels[2] = 128, Texture2D.grayTexture = new Texture2D(1, 1, 0, !1, !1), Texture2D.grayTexture.setPixels(pixels), Texture2D.grayTexture.lock = !0
            }, Texture2D._parse = function(data, propertyParams, constructParams) {
                var texture = constructParams ? new Texture2D(constructParams[0], constructParams[1], constructParams[2], constructParams[3], constructParams[4]) : new Texture2D(0, 0);
                switch (propertyParams && (texture.wrapModeU = propertyParams.wrapModeU, texture.wrapModeV = propertyParams.wrapModeV, texture.filterMode = propertyParams.filterMode, texture.anisoLevel = propertyParams.anisoLevel), texture._format) {
                    case 0:
                    case 1:
                        texture.loadImageSource(data);
                        break;
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        texture.setCompressData(data);
                        break;
                    default:
                        throw "Texture2D:unkonwn format."
                }
                return texture
            }, Texture2D.load = function(url, complete) {
                Laya.loader.create(url, complete, null, "TEXTURE2D")
            }, Texture2D.grayTexture = null, Texture2D
        }(),
        RenderTexture2D = function(_super) {
            function RenderTexture2D(width, height, format, depthStencilFormat) {
                this._mgrKey = 0, void 0 === format && (format = 0), void 0 === depthStencilFormat && (depthStencilFormat = 0), RenderTexture2D.__super.call(this, format, !1), this._glTextureType = 3553, this._width = width, this._height = height, this._depthStencilFormat = depthStencilFormat, this._create(width, height), this.lock = !0
            }
            __class(RenderTexture2D, "laya.webgl.resource.RenderTexture2D", BaseTexture);
            var __proto = RenderTexture2D.prototype;
            return __proto.getIsReady = function() {
                return !0
            }, __proto._create = function(width, height) {
                var gl = LayaGL.instance;
                this._frameBuffer = gl.createFramebuffer(), WebGLContext.bindTexture(gl, this._glTextureType, this._glTexture);
                var glFormat = this._getGLFormat();
                if (gl.texImage2D(this._glTextureType, 0, glFormat, width, height, 0, glFormat, 5121, null), this._setGPUMemory(width * height * 4), gl.bindFramebuffer(36160, this._frameBuffer), gl.framebufferTexture2D(36160, 36064, 3553, this._glTexture, 0), 3 !== this._depthStencilFormat) switch (this._depthStencilBuffer = gl.createRenderbuffer(), gl.bindRenderbuffer(36161, this._depthStencilBuffer), this._depthStencilFormat) {
                    case 0:
                        gl.renderbufferStorage(36161, 33189, width, height), gl.framebufferRenderbuffer(36160, 36096, 36161, this._depthStencilBuffer);
                        break;
                    case 1:
                        gl.renderbufferStorage(36161, 36168, width, height), gl.framebufferRenderbuffer(36160, 36128, 36161, this._depthStencilBuffer);
                        break;
                    case 2:
                        gl.renderbufferStorage(36161, 34041, width, height), gl.framebufferRenderbuffer(36160, 33306, 36161, this._depthStencilBuffer);
                        break;
                    default:
                        console.log("RenderTexture: unkonw depth format.")
                }
                gl.bindFramebuffer(36160, null), gl.bindRenderbuffer(36161, null), this._setWarpMode(10242, this._wrapModeU), this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._readyed = !0, this._activeResource()
            }, __proto.generateMipmap = function() {
                this._isPot(this.width) && this._isPot(this.height) ? (this._mipmap = !0, LayaGL.instance.generateMipmap(this._glTextureType), this._setFilterMode(this._filterMode), this._setGPUMemory(this.width * this.height * 4 * (1 + 1 / 3))) : (this._mipmap = !1, this._setGPUMemory(this.width * this.height * 4))
            }, __proto.start = function() {
                var gl = LayaGL.instance;
                LayaGL.instance.bindFramebuffer(36160, this._frameBuffer), this._lastRT = RenderTexture2D._currentActive, RenderTexture2D._currentActive = this, this._readyed = !0, gl.viewport(0, 0, this._width, this._height), this._lastWidth = RenderState2D.width, this._lastHeight = RenderState2D.height, RenderState2D.width = this._width, RenderState2D.height = this._height, BaseShader.activeShader = null
            }, __proto.end = function() {
                LayaGL.instance.bindFramebuffer(36160, null), RenderTexture2D._currentActive = null, this._readyed = !0
            }, __proto.restore = function() {
                var gl = LayaGL.instance;
                this._lastRT != RenderTexture2D._currentActive && (LayaGL.instance.bindFramebuffer(36160, this._lastRT ? this._lastRT._frameBuffer : null), RenderTexture2D._currentActive = this._lastRT), this._readyed = !0, gl.viewport(0, 0, this._lastWidth, this._lastHeight), RenderState2D.width = this._lastWidth, RenderState2D.height = this._lastHeight, BaseShader.activeShader = null
            }, __proto.clear = function(r, g, b, a) {
                void 0 === r && (r = 0), void 0 === g && (g = 0), void 0 === b && (b = 0), void 0 === a && (a = 1);
                var gl = LayaGL.instance;
                gl.clearColor(r, g, b, a);
                var clearFlag = 16384;
                switch (this._depthStencilFormat) {
                    case 33189:
                        clearFlag |= 256;
                        break;
                    case 36168:
                        clearFlag |= 1024;
                        break;
                    case 34041:
                        clearFlag |= 256, clearFlag |= 1024
                }
                gl.clear(clearFlag)
            }, __proto.getData = function(x, y, width, height) {
                if (Render.isConchApp && 2 == conchConfig.threadMode) throw "native 2 thread mode use getDataAsync";
                var gl = LayaGL.instance;
                if (gl.bindFramebuffer(36160, this._frameBuffer), !(36053 === gl.checkFramebufferStatus(36160))) return gl.bindFramebuffer(36160, null), null;
                var pixels = new Uint8Array(this._width * this._height * 4),
                    glFormat = this._getGLFormat();
                return gl.readPixels(x, y, width, height, glFormat, 5121, pixels), gl.bindFramebuffer(36160, null), pixels
            }, __proto.getDataAsync = function(x, y, width, height, callBack) {
                var gl = LayaGL.instance;
                gl.bindFramebuffer(36160, this._frameBuffer), gl.readPixelsAsync(x, y, width, height, 6408, 5121, function(data) {
                    callBack(new Uint8Array(data))
                }), gl.bindFramebuffer(36160, null)
            }, __proto.recycle = function() {}, __proto._disposeResource = function() {
                if (this._frameBuffer) {
                    var gl = LayaGL.instance;
                    gl.deleteTexture(this._glTexture), gl.deleteFramebuffer(this._frameBuffer), gl.deleteRenderbuffer(this._depthStencilBuffer), this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null, this._setGPUMemory(0)
                }
            }, __getset(0, __proto, "depthStencilFormat", function() {
                return this._depthStencilFormat
            }), __getset(0, __proto, "defaulteTexture", function() {
                return Texture2D.grayTexture
            }), __getset(0, __proto, "sourceWidth", function() {
                return this._width
            }), __getset(0, __proto, "sourceHeight", function() {
                return this._height
            }), __getset(0, __proto, "offsetX", function() {
                return 0
            }), __getset(0, __proto, "offsetY", function() {
                return 0
            }), __getset(1, RenderTexture2D, "currentActive", function() {
                return RenderTexture2D._currentActive
            }, laya.webgl.resource.BaseTexture._$SET_currentActive), RenderTexture2D.pushRT = function() {
                RenderTexture2D.rtStack.push({
                    rt: RenderTexture2D._currentActive,
                    w: RenderState2D.width,
                    h: RenderState2D.height
                })
            }, RenderTexture2D.popRT = function() {
                var gl = LayaGL.instance,
                    top = RenderTexture2D.rtStack.pop();
                top && (RenderTexture2D._currentActive != top.rt && (LayaGL.instance.bindFramebuffer(36160, top.rt ? top.rt._frameBuffer : null), RenderTexture2D._currentActive = top.rt), gl.viewport(0, 0, top.w, top.h), RenderState2D.width = top.w, RenderState2D.height = top.h)
            }, RenderTexture2D._currentActive = null, RenderTexture2D.rtStack = [], __static(RenderTexture2D, ["defuv", function() {
                return this.defuv = [0, 0, 1, 0, 1, 1, 0, 1]
            }, "flipyuv", function() {
                return this.flipyuv = [0, 1, 1, 1, 1, 0, 0, 0]
            }]), RenderTexture2D
        }(),
        Shader2X = function(_super) {
            function Shader2X(vs, ps, saveName, nameMap, bindAttrib) {
                this._params2dQuick2 = null, this._shaderValueWidth = 0, this._shaderValueHeight = 0, Shader2X.__super.call(this, vs, ps, saveName, nameMap, bindAttrib)
            }
            __class(Shader2X, "laya.webgl.shader.d2.Shader2X", _super);
            var __proto = Shader2X.prototype;
            return __proto._disposeResource = function() {
                _super.prototype._disposeResource.call(this), this._params2dQuick2 = null
            }, __proto.upload2dQuick2 = function(shaderValue) {
                this.upload(shaderValue, this._params2dQuick2 || this._make2dQuick2())
            }, __proto._make2dQuick2 = function() {
                if (!this._params2dQuick2) {
                    this._params2dQuick2 = [];
                    for (var one, params = this._params, i = 0, n = params.length; i < n; i++) "size" !== (one = params[i]).name && this._params2dQuick2.push(one)
                }
                return this._params2dQuick2
            }, Shader2X.create = function(vs, ps, saveName, nameMap, bindAttrib) {
                return new Shader2X(vs, ps, saveName, nameMap, bindAttrib)
            }, Shader2X
        }(Shader);
    Laya.__init([Path, WebGLContext2D])
}(window, document, Laya);