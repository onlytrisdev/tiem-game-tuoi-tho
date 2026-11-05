(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var AdPlatformType;
    (function (AdPlatformType) {
        AdPlatformType[AdPlatformType["en_ADBREAK"] = 0] = "en_ADBREAK";
        AdPlatformType[AdPlatformType["en_GAMEDISTRIBUTION"] = 1] = "en_GAMEDISTRIBUTION";
        AdPlatformType[AdPlatformType["en_GAMEMONETIZE"] = 2] = "en_GAMEMONETIZE";
        AdPlatformType[AdPlatformType["en_H4399"] = 3] = "en_H4399";
    })(AdPlatformType || (AdPlatformType = {}));

    var ChannelType;
    (function (ChannelType) {
        ChannelType[ChannelType["en_YAD"] = 0] = "en_YAD";
        ChannelType[ChannelType["en_YIV"] = 1] = "en_YIV";
        ChannelType[ChannelType["en_BABYGAMES"] = 2] = "en_BABYGAMES";
        ChannelType[ChannelType["en_BESTGAMES"] = 3] = "en_BESTGAMES";
        ChannelType[ChannelType["en_CARGAMES"] = 4] = "en_CARGAMES";
    })(ChannelType || (ChannelType = {}));

    var ConfigType;
    (function (ConfigType) {
        ConfigType[ConfigType["en_CHANNEL"] = 0] = "en_CHANNEL";
        ConfigType[ConfigType["en_APPNAME"] = 1] = "en_APPNAME";
        ConfigType[ConfigType["en_ADCHANNELID"] = 2] = "en_ADCHANNELID";
        ConfigType[ConfigType["en_CHANNELNAME"] = 3] = "en_CHANNELNAME";
        ConfigType[ConfigType["en_WEBSITEADDRESS"] = 4] = "en_WEBSITEADDRESS";
        ConfigType[ConfigType["en_DEBUGOPEN"] = 5] = "en_DEBUGOPEN";
        ConfigType[ConfigType["en_ADPLATFORM"] = 6] = "en_ADPLATFORM";
        ConfigType[ConfigType["en_GAMEDISTRIBUTIONID"] = 7] = "en_GAMEDISTRIBUTIONID";
        ConfigType[ConfigType["en_GAMEMONETIZEID"] = 8] = "en_GAMEMONETIZEID";
    })(ConfigType || (ConfigType = {}));

    class Entity {
        constructor() {
            ++Entity.ID;
            this._myID = Entity.ID;
        }
        getMyID() {
            return this._myID;
        }
    }
    Entity.ID = 0;

    class Logger extends Entity {
        constructor() {
            super();
            const iframe = document.createElement("iframe");
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            this.consoleInstance = iframe.contentWindow["console"];
        }
        static getInstance() {
            if (!this._gInstance) {
                this._gInstance = new Logger();
            }
            return this._gInstance;
        }
        trace(...msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            this.consoleInstance.log.apply(this, [
                "%c %c %c YYGGAMES:",
                "background: #fb8cb3",
                "background: #d44a52",
                "color: #ffffff; background: #871905;", arguments[0]
            ].concat(optionalParams));
        }
    }

    class StringUtils {
        static format(ofmt, ...a) {
            var regex = [
                '([^%]*)',
                '%',
                '([\'\\-+ #0]*?)',
                '([1-9]\\d*)?',
                '(\\.([1-9]\\d*))?',
                '[lhjztL]*?',
                '([diouxXfFeEgGaAcCsSp%jr])'
            ].join('');
            var re = new RegExp(regex);
            var args = Array.prototype.slice.call(arguments, 1);
            var fmt = ofmt;
            var flags, width, precision, conversion;
            var left, pad, sign, arg, match;
            var ret = '';
            var argn = 1;
            var posn = 0;
            var convposn;
            var curconv;
            while ((match = re.exec(fmt)) !== null) {
                ret += match[1];
                fmt = fmt.substring(match[0].length);
                curconv = match[0].substring(match[1].length);
                convposn = posn + match[1].length + 1;
                posn += match[0].length;
                flags = match[2] || '';
                width = match[3] || 0;
                precision = match[4] || '';
                conversion = match[6];
                left = false;
                sign = false;
                pad = ' ';
                if (conversion == '%') {
                    ret += '%';
                    continue;
                }
                arg = args.shift();
                argn++;
                if (flags.match(/-/))
                    left = true;
                if (flags.match(/0/))
                    pad = '0';
                if (flags.match(/\+/))
                    sign = true;
                switch (conversion) {
                    case 's':
                        ret += this.doPad(pad, width, left, arg.toString());
                        break;
                    case 'd':
                        arg = Math.floor(arg);
                    case 'f':
                        sign = sign && arg > 0 ? '+' : '';
                        ret += sign + this.doPad(pad, width, left, arg.toString());
                        break;
                    case 'x':
                        ret += this.doPad(pad, width, left, arg.toString(16));
                        break;
                    default:
                        throw ("is not supported");
                }
            }
            ret += fmt;
            return (ret);
        }
        static doPad(chr, width, left, str) {
            var ret = str;
            while (ret.length < width) {
                if (left)
                    ret += chr;
                else
                    ret = chr + ret;
            }
            return (ret);
        }
    }

    class LoadingLayer extends Entity {
        constructor() {
            super();
            const body = document.body || document.getElementsByTagName("body")[0];
            const style = document.createElement("style");
            const spriteId = StringUtils.format("LoadingLayer%d", this.getMyID());
            const styleAttribute = `
            .${spriteId},.${spriteId}:before,.${spriteId}:after
            {  
                border-radius: 50%;
                width: 2.0em;
                height: 2.0em; 
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
                -webkit-animation: load7 1.8s infinite ease-in-out;
                animation: load7 1.8s infinite ease-in-out;
            }
            .${spriteId} {
                color: #ffffff;
                font-size: 10px;
                margin: 0px auto;
                position: relative;
                text-indent: -9999em;
                -webkit-transform: translateZ(0);
                -ms-transform: translateZ(0);
                transform: translateZ(0);
                -webkit-animation-delay: -0.16s;
                animation-delay: -0.16s;
            }
            .${spriteId}:before,.${spriteId}:after
            {
                content: '';
                position: absolute;top: 0;
            }
            .${spriteId}:before{
                left: -3.5em;
                -webkit-animation-delay: -0.32s;
                animation-delay: -0.32s;
            }
            .${spriteId}:after{
                left: 3.5em;
            }
            @-webkit-keyframes load7
            {
                0%,80%,100% {
                    box-shadow: 0 2.5em 0 -1.3em;
                }
                40% {
                    box-shadow: 0 2.5em 0 0;
                }
            }
            @keyframes load7
            {
                0%,80%,100% {
                    box-shadow: 0 2.5em 0 -1.3em;
                }
                40% {
                    box-shadow: 0 2.5em 0 0;
                }
            }
        `;
            style.textContent += styleAttribute;
            body.appendChild(style);
            this.background = document.createElement("div");
            this.background.style.position = "fixed";
            this.background.style.zIndex = "0";
            this.background.style.top = "0";
            this.background.style.left = "0";
            this.background.style.width = "100%";
            this.background.style.height = "100%";
            this.background.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            this.background.style.backgroundColor = "rgba(0, 0, 0, 0)";
            this.background.style.display = "none";
        }
        static getInstance() {
            if (!this._gInstance) {
                this._gInstance = new LoadingLayer();
            }
            return this._gInstance;
        }
        showLoading() {
            this.background.style.zIndex = "1000";
            this.background.style.display = "block";
        }
        hideLoading() {
            this.background.style.zIndex = "0";
            this.background.style.display = "none";
        }
    }

    class TipMessageLayer extends Entity {
        constructor() {
            super();
            const body = document.body || document.getElementsByTagName("body")[0];
            const style = document.createElement("style");
            const messageAttributeId = StringUtils.format("TipMessageLayer1_%d", this.getMyID());
            const backgroundAttributeId = StringUtils.format("TipMessageLayer2_%d", this.getMyID());
            const titleAttributeId = StringUtils.format("TipMessageLayer3_%d", this.getMyID());
            const msgAttributeId = StringUtils.format("TipMessageLayer4_%d", this.getMyID());
            const boxAttributeId = StringUtils.format("TipMessageLayer5_%d", this.getMyID());
            const closeAttributeId = StringUtils.format("TipMessageLayer6_%d", this.getMyID());
            const buttonAttributeId = StringUtils.format("TipMessageLayer7_%d", this.getMyID());
            const messageAttribute = `
            #${messageAttributeId} {position: fixed;z-index: 1050;width:100%;height:100%;}
        `;
            const backgroundAttribute = `
            #${backgroundAttributeId} {
                padding: 4px 10px 4px 10px;
                position: fixed;
                z-index: 1051;
                font-family:Verdana;
                min-width: 300px;
                max-width:430px;
                width:80%;
                min-height:160px;
                color: #00335e;
                -moz-border-radius: 6px;
                -webkit-border-radius: 6px;
                border-radius: 6px;
                -moz-box-shadow: 0px 0px 11px #000000;
                -webkit-box-shadow: 0px 0px 11px #000000;
                box-shadow: 0px 0px 11px #000000;
                left: 50%;
                top:50%;
                transform: translate(-50%, -50%);
                opacity: 1;
                background-color:#bcbcbc;
            }
        `;
            const titleAttribute = `
            #${titleAttributeId} {
                padding:5px 0 5px 0;
                font-variant:small-caps;
                font-size:16pt;
                font-weight:lighter;
                color:#00335e;
                width:100%;
                border-bottom : 1px solid #002c5f;
            }
        `;
            const msgAttribute = `
            #${msgAttributeId} {line-height: 18px;padding: 10px 0 0 0;}
        `;
            const closeAttribute = `
            #${closeAttributeId}{
                position: absolute;
                right: -15px;
                top: -15px;
                width: 30px;
                height: 30px;
                border-radius: 25px;
                box-shadow: 2px 2px 5px 0px black;
                background: red;
                cursor: pointer;
            }
            #${closeAttributeId}:hover{background: red;}
            #${closeAttributeId}:before{
                position: absolute;
                content: '';
                width: 4px;
                height:20px;
                background: white;
                transform: rotate(45deg);
                top: 5px;
                left: 13px;
            }
            #${closeAttributeId}:after{
                position: absolute;
                content: '';
                width: 4px;
                height:20px;
                background: white;
                transform: rotate(-45deg);
                top: 5px;
                left: 13px;
            }
        `;
            const buttonAttribute = `
            #${buttonAttributeId}{
                display:inline-block;
                width:100%;
                text-align:right;
            }
            #${buttonAttributeId} input[type='button']{
                cursor:pointer;
                margin:2px;
                height:35px;
                border:1px solid #AFAFAF;
                background-color:#004076;
                color:#FFFFFF;
                -moz-border-radius: 6px;
                -webkit-border-radius: 6px;
                border-radius: 6px;
                outline: none;
            }
            #${buttonAttributeId} input[type='button']:hover{
                background-color:#00549c;
                color:White;
            }
            #${buttonAttributeId} input[type='button']:active{
                background-color:#AAAAAA;
                color:White;
            }
            #${buttonAttributeId} input[type='button']:focus{
                outline: none;
                border: solid 2px #FFCC66;
                -o-transform:rotate(0);
            }
            #${buttonAttributeId} input[type='button']::-moz-focus-inner{
                outline: none;
                border: none;
            }
        `;
            const otherAttribute = `
            @media screen and (min-width: 280px){#${boxAttributeId}{line-height: 22px;}}
            @media screen and (min-width: 523px) {
                #${boxAttributeId} {
                    line-height: 22px;
                    font-size: 15px;
                }
            }
        `;
            style.textContent += messageAttribute;
            style.textContent += backgroundAttribute;
            style.textContent += titleAttribute;
            style.textContent += msgAttribute;
            style.textContent += otherAttribute;
            style.textContent += closeAttribute;
            style.textContent += buttonAttribute;
            body.appendChild(style);
            this.message = document.createElement("div");
            this.message.id = messageAttributeId;
            body.appendChild(this.message);
            this.background = document.createElement("div");
            this.background.id = backgroundAttributeId;
            this.message.appendChild(this.background);
            this.title = document.createElement("div");
            this.title.id = titleAttributeId;
            this.title.textContent = "";
            this.background.appendChild(this.title);
            this.btnClose = document.createElement("div");
            this.btnClose.id = closeAttributeId;
            this.btnClose.onclick = this.onbtnClose.bind(this);
            this.background.appendChild(this.btnClose);
            let div = document.createElement("div");
            this.background.appendChild(div);
            let box = document.createElement("div");
            box.id = boxAttributeId;
            div.appendChild(box);
            let p = document.createElement("p");
            this.msg = document.createElement("span");
            p.appendChild(this.msg);
            this.msg.textContent = "Without ads, we will not survive. Please disable adblock on our site and then click refresh button, thank you!";
            box.appendChild(p);
            let button = document.createElement("div");
            button.id = buttonAttributeId;
            div.appendChild(button);
            this.inputButton = document.createElement("input");
            this.inputButton.type = "button";
            this.inputButton.onclick = this.onInputButton.bind(this);
            this.inputButton.value = "Refresh";
            button.appendChild(this.inputButton);
            this.message.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); }, false);
        }
        static getInstance() {
            if (!this._gInstance) {
                this._gInstance = new TipMessageLayer();
            }
            return this._gInstance;
        }
        onbtnClose() {
            if (this.options && this.options.cancel) {
                this.options.cancel();
                this.options.cancel = null;
            }
        }
        onInputButton() {
            if (this.options && this.options.confirm) {
                this.options.confirm();
                this.options.confirm = null;
            }
        }
        showMsg(options) {
            this.options = options || {};
            if (this.options.msg) {
                this.msg.textContent = this.options.msg;
            }
            this.options.showCancel = (this.options.showCancel == void 0) ? true : this.options.showCancel;
            if (this.options.showCancel) {
                this.btnClose.style.display = "show";
            }
            else {
                this.btnClose.style.display = "none";
            }
            this.message.style.display = "show";
        }
        hideMsg() {
            this.options = null;
            this.message.style.display = "none";
        }
    }

    class utilities {
        static showLoading() {
            LoadingLayer.getInstance().showLoading();
        }
        static hideLoading() {
            LoadingLayer.getInstance().hideLoading();
        }
        static readDataSync(path) {
            console.log("===== path:"+path);
            if( path == "https://cargames.com/forgame/games.json"  || path == "https://www.bestgames.com/forgame/games.json" || path == "https://www.yad.com/forgame/games.json"){
              path = "./games.json";
            } 


            return new Promise((resolve, reject) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", path, true);
                xhr.onerror = xhr.onabort = function (e) { reject(); };
                xhr.onload = function (e) {
                    var status = xhr.status !== undefined ? xhr.status : 200;
                    if (status === 200 || status === 204 || status === 0) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else {
                        reject();
                    }
                };
                xhr.send();
            });
        }
        static trace(...msg) {
            Logger.getInstance().trace(...msg);
        }
        static showMsg(options) {
            TipMessageLayer.getInstance().showMsg(options);
        }
        static hideMsg() {
            TipMessageLayer.getInstance().hideMsg();
        }
    }

    class ConfigManager {
        constructor() {
            this.configs = new Map();
        }
        static getInstance() {
            if (!this._gInstance) {
                this._gInstance = new ConfigManager();
            }
            return this._gInstance;
        }
        get(name) {
            return this.configs.get(name);
        }
        set(name, value) {
            this.configs.set(name, value);
        }
    }

    class AdBreakManager {
        constructor() {
            this.showInterstitialCount = 0;
        }
        static getInstance() {
            if (!this._gInstance) {
                this._gInstance = new AdBreakManager();
            }
            return this._gInstance;
        }
        startup() {
            return new Promise((resolve, reject) => {
                var script = document.createElement("script");
                script.async = true;
                script.setAttribute("data-ad-client", "ca-pub-8878716159434368");
                script.setAttribute("data-ad-channel", ConfigManager.getInstance().get(ConfigType.en_ADCHANNELID));
                script.setAttribute("data-ad-frequency-hint", "10s");
                if (ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN)) {
                    script.setAttribute("data-adbreak-test", "on");
                }
                // script.onload = () => {
                    this.checkRewardInterval = 
                    setInterval(this.checkReward.bind(this), 1e3);
                    resolve(true);
                // };
                // script.onerror = function () { reject(); };
                // script.src = "./adsbygoogle.js";
                // document.head.appendChild(script);
                // window["adsbygoogle"] = window["adsbygoogle"] || [];
                // this.adBreak = function (o) {
                //     window["adsbygoogle"].push(o);
                // };
            });
        }
        showInterstitial(options) {
            utilities.showLoading();
            setTimeout(utilities.hideLoading, 2e3);
            let typename = "next";
            if (this.showInterstitialCount == 0) {
                typename = "start";
            }
            this.adBreak({
                type: typename,
                name: "game",
                beforeBreak: () => {
                    utilities.trace("beforeShowAd");
                    options.beforeShowAd && options.beforeShowAd();
                    options.beforeShowAd = null;
                },
                afterBreak: () => {
                    utilities.trace("afterShowAd");
                    utilities.hideLoading();
                    options.afterShowAd && options.afterShowAd();
                    options.afterShowAd = null;
                }
            });
            return true;
        }
        canShowReward() {
            if (this.showAdFn) {
                return true;
            }
            else {
                return false;
            }
        }
        showReward(options) {
            if (!this.canShowReward()) {
                return false;
            }
            this.rewardOptions = options;
            this.showAdFn();
            this.showAdFn = null;
            return true;
        }
        checkReward() {
            // if (this.showAdFn)
                return;
            this.adBreak({
                type: "reward",
                name: "reward",
                beforeBreak: this.onRewardBeforeBreak.bind(this),
                afterBreak: this.onRewardAfterBreak.bind(this),
                beforeReward: this.onBeforeReward.bind(this),
                adDismissed: this.onRewardDismissed.bind(this),
                adComplete: this.onRewardComplete.bind(this),
            });
        }
        onBeforeReward(showAdFn) {
            const debugOpen = ConfigManager.getInstance().get(ConfigType.en_DEBUGOPEN);
            if (debugOpen) {
                utilities.trace("onBeforeReward");
            }
            this.showAdFn = showAdFn;
        }
        onRewardBeforeBreak() {
            console.log("onRewardBeforeBreak");
            this.rewardOptions.beforeShowAd && this.rewardOptions.beforeShowAd();
            this.rewardOptions.beforeShowAd = null;
        }
        onRewardAfterBreak() {
            console.log("onRewardAfterBreak");
            this.rewardOptions.afterShowAd && this.rewardOptions.afterShowAd();
            this.rewardOptions.afterShowAd = null;
            this.showAdFn = null;
            this.checkReward();
        }
        onRewardDismissed() {
            console.log("onRewardDismissed");
            this.rewardOptions.rewardDismissed && this.rewardOptions.rewardDismissed();
            this.rewardOptions.rewardDismissed = null;
        }
        onRewardComplete() {
            console.log("onRewardComplete");
            this.rewardOptions.rewardComplete && this.rewardOptions.rewardComplete();
            this.rewardOptions.rewardComplete = null;
        }
    }

    class GamedistributionManager {
        constructor() {
            this.isReward = false;
        }
        static getInstance() {
            if (!this._gInstance) {
                this._gInstance = new GamedistributionManager();
            }
            return this._gInstance;
        }
        startup() {
            return new Promise((resolve, reject) => {
                this.startupComplete = resolve;
                this.startupError = reject;
                window["GD_OPTIONS"] = {
                    gameId: ConfigManager.getInstance().get(ConfigType.en_GAMEDISTRIBUTIONID),
                    onEvent: this.onEvent.bind(this)
                };
                var script = document.createElement("script");
                script.onload = function () { };
                script.onerror = function () {
                    reject();
                };
                script.src = "./main.min.js";
                document.head.appendChild(script);
            });
        }
        onEvent(event) {
            utilities.trace(event);
            switch (event.name) {
                case "SDK_ERROR":
                    if (this.startupError) {
                        this.startupError();
                        this.startupError = null;
                    }
                    break;
                case "AD_ERROR":
                    utilities.hideLoading();
                    break;
                case "SDK_GAME_START":
                    if (this.isReward) {
                        this.isReward = false;
                        this.preloadReward();
                    }
                    if (this.options && this.options.afterShowAd) {
                        this.options.afterShowAd();
                        this.options.afterShowAd = null;
                    }
                    utilities.hideLoading();
                    break;
                case "SDK_GAME_PAUSE":
                    if (this.options && this.options.beforeShowAd) {
                        this.options.beforeShowAd();
                        this.options.beforeShowAd = null;
                    }
                    utilities.hideLoading();
                    break;
                case "LOADED":
                    break;
                case "AD_SDK_FINISHED":
                case "CONTENT_RESUME_REQUESTED":
                    break;
                case "SDK_READY":
                    if (this.startupComplete) {
                        this.startupComplete(true);
                    }
                    this.startupComplete = null;
                    this.preloadReward();
                    break;
                case "AD_SDK_CANCELED":
                case "AD_CANCELED":
                case "SKIPPED":
                    utilities.hideLoading();
                    if (this.options && this.options.rewardDismissed) {
                        this.options.rewardDismissed();
                    }
                    if (this.options && this.options.afterShowAd) {
                        this.options.afterShowAd();
                    }
                    if (this.options) {
                        this.options.rewardComplete = null;
                        this.options.rewardDismissed = null;
                        this.options.afterShowAd = null;
                    }
                    break;
                case "COMPLETE":
                    if (this.options && this.options.rewardComplete) {
                        this.options.rewardComplete();
                        this.options.rewardComplete = null;
                    }
                    break;
                case "ALL_ADS_COMPLETED":
                    if (this.options && this.options.rewardComplete) {
                        this.options.rewardComplete();
                        this.options.rewardComplete = null;
                    }
                    utilities.hideLoading();
                    break;
                default:
                    break;
            }
        }
        showInterstitial(options) {
            utilities.showLoading();
            this.options = options;
            this.isReward = false;
            window["gdsdk"].showAd();
            return true;
        }
        showReward(options) {
            utilities.showLoading();
            this.options = options;
            this.isReward = true;
            window["gdsdk"].showAd("rewarded");
        }
        preloadReward() {
            setTimeout(function () {
                // window["gdsdk"].preloadAd('rewarded').then(function (response) { }).catch(function (error) { });
            }, 0.2e3);
        }
    }

    class GamemonetizeManager {
        constructor() {
            this.isReward = false;
            this.canReward = false;
        }
        static getInstance() {
            if (!this._gInstance) {
                this._gInstance = new GamemonetizeManager();
            }
            return this._gInstance;
        }
        startup() {
            return new Promise((resolve, reject) => {
                this.startupComplete = resolve;
                this.startupError = reject;
                window["SDK_OPTIONS"] = {
                    gameId: ConfigManager.getInstance().get(ConfigType.en_GAMEMONETIZEID),
                    onEvent: this.onEvent.bind(this)
                };
                var script = document.createElement("script");
                script.onload = function () { };
                script.onerror = function () {
                    reject();
                };
                script.src = "";
                document.head.appendChild(script);
            });
        }
        onEvent(event) {
            utilities.trace(event);
            switch (event.name) {
                case "SDK_ERROR":
                    if (this.startupError) {
                        this.startupError();
                        this.startupError = null;
                    }
                    break;
                case "AD_ERROR":
                    utilities.hideLoading();
                    break;
                case "SDK_GAME_START":
                    if (this.isReward) {
                        if (this.canReward) {
                            if (this.options && this.options.rewardComplete) {
                                this.options.rewardComplete();
                                this.options.rewardComplete = null;
                            }
                        }
                        else {
                            if (this.options && this.options.rewardDismissed) {
                                this.options.rewardDismissed();
                                this.options.rewardDismissed = null;
                            }
                        }
                    }
                    if (this.options && this.options.afterShowAd) {
                        this.options.afterShowAd();
                        this.options.afterShowAd = null;
                    }
                    utilities.hideLoading();
                    break;
                case "SDK_GAME_PAUSE":
                    if (this.options && this.options.beforeShowAd) {
                        this.options.beforeShowAd();
                        this.options.beforeShowAd = null;
                    }
                    if (this.isReward) {
                        this.canReward = true;
                    }
                    utilities.hideLoading();
                    break;
                case "LOADED":
                    break;
                case "AD_SDK_FINISHED":
                case "CONTENT_RESUME_REQUESTED":
                    break;
                case "SDK_READY":
                    if (this.startupComplete) {
                        this.startupComplete(true);
                    }
                    this.startupComplete = null;
                    break;
                case "AD_SDK_CANCELED":
                case "AD_CANCELED":
                case "SKIPPED":
                    break;
                case "COMPLETE":
                    break;
                case "AD_SDK_FINISHED":
                    utilities.hideLoading();
                    break;
                default:
                    break;
            }
        }
        showInterstitial(options) {
            utilities.showLoading();
            this.options = options;
            this.isReward = false;
            window["sdk"].showBanner();
            return true;
        }
        showReward(options) {
            utilities.showLoading();
            this.options = options;
            this.isReward = true;
            this.canReward = false;
            window["sdk"].showBanner("rewarded");
        }
    }

    class h5api {
        static playAd(callback) { }
    }
    class H4399Manager {
        static getInstance() {
            if (!this._gInstance) {
                this._gInstance = new H4399Manager();
            }
            return this._gInstance;
        }
        startup() {
            return new Promise((resolve, reject) => {
                this.startupComplete = resolve;
                this.startupError = reject;
                var script = document.createElement("script");
                script.onload = this.onScriptLoaded.bind(this);
                script.onerror = function () {
                    reject();
                };
                script.src = "";
                document.head.appendChild(script);
            });
        }
        onScriptLoaded() {
            if (this.startupComplete) {
                this.startupComplete(true);
            }
            this.startupComplete = null;
        }
        showInterstitial(options) {
            return true;
        }
        showReward(options) {
            utilities.showLoading();
            this.options = options;
            utilities.trace("平台:en_H4399,类型:激励广告 ");
            h5api.playAd(this.onRewardComplete.bind(this));
        }
        onRewardComplete(obj) {
            if (obj.code === 10000) {
                if (this.options) {
                    if (this.options.beforeShowAd) {
                        this.options.beforeShowAd();
                    }
                    this.options.beforeShowAd = null;
                }
                console.log('开始播放');
            }
            else if (obj.code === 10001) {
                console.log('播放结束');
                if (this.options) {
                    if (this.options.rewardComplete) {
                        this.options.rewardComplete();
                    }
                    if (this.options.afterShowAd) {
                        this.options.afterShowAd();
                    }
                    this.options.rewardComplete = null;
                    this.options.rewardDismissed = null;
                    this.options.afterShowAd = null;
                }
            }
            else {
                if (this.options) {
                    if (this.options.rewardDismissed) {
                        this.options.rewardDismissed();
                    }
                    if (this.options.afterShowAd) {
                        this.options.afterShowAd();
                    }
                    this.options.rewardComplete = null;
                    this.options.rewardDismissed = null;
                    this.options.afterShowAd = null;
                }
                console.log('广告异常');
            }
        }
    }

    class YYGGames {
        constructor() {
            this.version = "1.0.7";
            this.isStartuped = false;
        }
        static create() {
            return new YYGGames();
        }
        startupByYad(options) {
            return __awaiter(this, void 0, void 0, function* () {
                options.channel = ChannelType.en_YAD;
                return this.startup(options);
            });
        }
        startupByCargames(options) {
            return __awaiter(this, void 0, void 0, function* () {
                options.channel = ChannelType.en_CARGAMES;
                return this.startup(options);
            });
        }
        startupByBestGames(options) {
            return __awaiter(this, void 0, void 0, function* () {
                options.channel = ChannelType.en_BESTGAMES;
                return this.startup(options);
            });
        }
        startupByBabyGames(options) {
            return __awaiter(this, void 0, void 0, function* () {
                options.channel = ChannelType.en_BABYGAMES;
                return this.startup(options);
            });
        }
        startupByYiv(options) {
            return __awaiter(this, void 0, void 0, function* () {
                options.channel = ChannelType.en_YIV;
                return this.startup(options);
            });
        }
        getForgames(channel) {
            return __awaiter(this, void 0, void 0, function* () {
                const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
                switch (en_AdPlatform) {
                    case AdPlatformType.en_ADBREAK:
                        break;
                    case AdPlatformType.en_GAMEDISTRIBUTION:
                        this.forgames = [];
                        return this.forgames;
                    case AdPlatformType.en_GAMEMONETIZE:
                        break;
                    case AdPlatformType.en_H4399:
                        this.forgames = [];
                        return this.forgames;
                    default:
                        break;
                }
                let websiteAddress = "";
                if (!this.forgames) {
                    var configChannel = ConfigManager.getInstance().get(ConfigType.en_CHANNEL);
                    var appName = ConfigManager.getInstance().get(ConfigType.en_APPNAME);
                    if (!configChannel) {
                        configChannel = channel;
                    }
                    switch (configChannel) {
                        case ChannelType.en_YAD:
                            websiteAddress = "https://www.yad.com/";
                            break;
                        case ChannelType.en_YIV:
                            websiteAddress = "https://www.yiv.com/";
                            break;
                        case ChannelType.en_BABYGAMES:
                            websiteAddress = "https://www.babygames.com/";
                            break;
                        case ChannelType.en_BESTGAMES:
                            websiteAddress = "https://www.bestgames.com/";
                            break;
                        case ChannelType.en_CARGAMES:
                            websiteAddress = "https://cargames.com/";
                            break;
                        default:
                            this.forgames = [];
                            return this.forgames;
                    }
                    const data = yield utilities.readDataSync(websiteAddress + "forgame/games.json").catch(() => { return []; });
                    this.forgames = [];
                    for (const iter of data) {
                        const thumb = iter.thumb;
                        iter.appName = thumb.replace(websiteAddress + "thumb/", "").replace(".jpg", "");
                        if (iter.appName !== appName) {
                            this.forgames.push(iter);
                        }
                    }
                }
                return this.forgames;
            });
        }
        startup(options) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.isStartuped)
                    return;
                let channel = options.channel;
                let appName = options.appName;
                if (appName == void 0 && options.config) {
                    appName = options.config.appName;
                }
                let websiteAddress = "";
                let channelName = "";
                let adChannelId = 0;
                // switch (channel) {
                //     case ChannelType.en_YAD:
                //         websiteAddress = "https://www.yad.com/";
                //         channelName = "YAD.Com";
                //         adChannelId = 4967854051;
                //         break;
                //     case ChannelType.en_YIV:
                //         websiteAddress = "https://www.yiv.com/";
                //         channelName = "YIV.Com";
                //         adChannelId = 2341690715;
                //         break;
                //     case ChannelType.en_BABYGAMES:
                //         websiteAddress = "https://www.babygames.com/";
                //         channelName = "BabyGames.Com";
                //         adChannelId = 8743447538;
                //         break;
                //     case ChannelType.en_BESTGAMES:
                //         websiteAddress = "https://www.bestgames.com/";
                //         channelName = "BestGames.Com";
                //         adChannelId = 4804202528;
                //         break;
                //     case ChannelType.en_CARGAMES:
                //         websiteAddress = "https://cargames.com/";
                //         channelName = "CarGames.Com";
                //         adChannelId = 1220180734;
                //         break;
                //     default:
                //         break;
                // }
                if (options.debugOpen == void 0 && options.config) {
                    options.debugOpen = options.config.debugOpen;
                }
                let debugOpen = options.debugOpen ? true : true;
                ConfigManager.getInstance().set(ConfigType.en_CHANNEL, channel);
                ConfigManager.getInstance().set(ConfigType.en_APPNAME, appName);
                ConfigManager.getInstance().set(ConfigType.en_CHANNELNAME, channelName);
                ConfigManager.getInstance().set(ConfigType.en_ADCHANNELID, adChannelId);
                ConfigManager.getInstance().set(ConfigType.en_DEBUGOPEN, debugOpen);
                ConfigManager.getInstance().set(ConfigType.en_WEBSITEADDRESS, websiteAddress);
                let isGamedistribution = false, isGamemonetize = false, isH4399 = false;
                if (options.config) {
                    isGamedistribution = options.config.gamedistributionId && options.config.gamedistributionId.length > 5;
                    isGamemonetize = options.config.gamemonetizeId && options.config.gamemonetizeId.length > 5;
                    isH4399 = options.config.h4399Id && options.config.h4399Id.length > 5;
                }
                if (isGamedistribution) {
                    let gamedistributionId = options.config.gamedistributionId.trim();
                    ConfigManager.getInstance().set(ConfigType.en_GAMEDISTRIBUTIONID, gamedistributionId);
                    ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_GAMEDISTRIBUTION);
                    yield GamedistributionManager.getInstance().startup().catch(e => {
                        // utilities.showMsg({
                        //     showCancel: false,
                        //     confirm: function () {
                        //         location.reload();
                        //     }
                        // });
                    });
                }
                else if (isGamemonetize) {
                    let gamemonetizeId = options.config.gamemonetizeId.trim();
                    ConfigManager.getInstance().set(ConfigType.en_GAMEMONETIZEID, gamemonetizeId);
                    ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_GAMEMONETIZE);
                    yield GamemonetizeManager.getInstance().startup().catch(e => {
                        // utilities.showMsg({
                        //     showCancel: false,
                        //     confirm: function () {
                        //         location.reload();
                        //     }
                        // });
                    });
                }
                else if (isH4399) {
                    ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_H4399);
                    yield H4399Manager.getInstance().startup().catch(e => {
                        // utilities.showMsg({
                        //     showCancel: false,
                        //     confirm: function () {
                        //         location.reload();
                        //     }
                        // });
                    });
                }
                else {
                    ConfigManager.getInstance().set(ConfigType.en_ADPLATFORM, AdPlatformType.en_ADBREAK);
                    yield AdBreakManager.getInstance().startup().catch(e => {
                        // utilities.showMsg({
                        //     showCancel: false,
                        //     confirm: function () {
                        //         location.reload();
                        //     }
                        // });
                    });
                }
                yield this.getForgames(channel);
                if (options.complete) {
                    options.complete();
                    options.complete = null;
                }
                this.isStartuped = true;
                utilities.trace(this.version, "-", channelName, "-", AdPlatformType[ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM)]);
                return true;
            });
        }
        getAdPlatformType() {
            return ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
        }
        showInterstitial(options) {
            // return __awaiter(this, void 0, void 0, function* () {
            //     const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
            //     switch (en_AdPlatform) {
            //         case AdPlatformType.en_ADBREAK:
            //             return AdBreakManager.getInstance().showInterstitial(options);
            //         case AdPlatformType.en_GAMEDISTRIBUTION:
            //             return GamedistributionManager.getInstance().showInterstitial(options);
            //         case AdPlatformType.en_GAMEMONETIZE:
            //             return GamemonetizeManager.getInstance().showInterstitial(options);
            //         case AdPlatformType.en_H4399:
            //             return H4399Manager.getInstance().showInterstitial(options);
            //         default:
            //             break;
            //     }
                return false;
            // });
        }
        showReward(options) {
            // return __awaiter(this, void 0, void 0, function* () {
            //     const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
            //     switch (en_AdPlatform) {
            //         case AdPlatformType.en_ADBREAK:
            //             return AdBreakManager.getInstance().showReward(options);
            //         case AdPlatformType.en_GAMEDISTRIBUTION:
            //             return GamedistributionManager.getInstance().showReward(options);
            //         case AdPlatformType.en_GAMEMONETIZE:
            //             return GamemonetizeManager.getInstance().showReward(options);
            //         case AdPlatformType.en_H4399:
            //             return H4399Manager.getInstance().showReward(options);
            //         default:
            //             break;
            //     }
                return false;
            // });
        }
        canShowReward() {
            // const en_AdPlatform = ConfigManager.getInstance().get(ConfigType.en_ADPLATFORM);
            // switch (en_AdPlatform) {
            //     case AdPlatformType.en_ADBREAK:
            //         return AdBreakManager.getInstance().canShowReward();
            //     default:
            //         return true;
            // }
            return  false;
        }
        navigate(screenName, buttonName, gameId) { 
        }
        ;
    }
    const sYYGGames = YYGGames.create();
    window["YYGGames"] = sYYGGames;

}());
