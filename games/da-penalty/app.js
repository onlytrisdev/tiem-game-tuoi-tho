var Utils;
(function (Utils) {
    var AssetLoader = (function () {
        function AssetLoader(_lang, _aFileData, _ctx, _canvasWidth, _canvasHeight, _showBar) {
            if (typeof _showBar === "undefined") { _showBar = true; }
            this.oAssetData = {
            };
            this.assetsLoaded = 0;
            this.textData = {
            };
            this.spinnerRot = 0;
            this.jsonData = new Utils.JSONData();
            this.totalAssets = _aFileData.length;
            this.showBar = _showBar;
            this.textData.langText = this.jsonData.textData;
            for(var i = 0; i < _aFileData.length; i++) {
                if(_aFileData[i].file.indexOf(".json") != -1) {
                    this.loadJSON(_aFileData[i]);
                } else {
                    this.loadImage(_aFileData[i]);
                }
            }
            if(_showBar) {
                this.oLoaderImgData = preAssetLib.getData("loader");
            }
        }
        AssetLoader.prototype.render = function () {
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            var tempScale = Math.min(Math.min(canvas.width / 900, 1), canvas.height / 800);
            var bX = this.oLoaderImgData.oData.oAtlasData[oImageIds.preloaderLogo].x;
            var bY = this.oLoaderImgData.oData.oAtlasData[oImageIds.preloaderLogo].y;
            var bWidth = this.oLoaderImgData.oData.oAtlasData[oImageIds.preloaderLogo].width;
            var bHeight = this.oLoaderImgData.oData.oAtlasData[oImageIds.preloaderLogo].height;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 - 70 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
            var bX = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].x;
            var bY = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].y;
            var bWidth = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].width;
            var bHeight = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].height;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, Math.max((bWidth / this.totalAssets) * this.assetsLoaded, 1), bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 + 110 - (bHeight / 2) * tempScale, Math.max((bWidth / this.totalAssets) * this.assetsLoaded, 1) * tempScale, bHeight * tempScale);
            var bX = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].x;
            var bY = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].y;
            var bWidth = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].width;
            var bHeight = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].height;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 + 110 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
        };
        AssetLoader.prototype.displayNumbers = function () {
            ctx.textAlign = "left";
            ctx.font = "bold 40px arial";
            ctx.fillStyle = "#ffffff";
            ctx.fillText(Math.round((this.assetsLoaded / this.totalAssets) * 100) + "%", canvas.width / 2 + 0, canvas.height / 2 + 51 + 50);
        };
        AssetLoader.prototype.loadExtraAssets = function (_callback, _aFileData) {
            this.showBar = false;
            this.totalAssets = _aFileData.length;
            this.assetsLoaded = 0;
            this.loadedCallback = _callback;
            for(var i = 0; i < _aFileData.length; i++) {
                if(_aFileData[i].file.indexOf(".json") != -1) {
                    this.loadJSON(_aFileData[i]);
                } else {
                    this.loadImage(_aFileData[i]);
                }
            }
        };
        AssetLoader.prototype.loadJSON = function (_oData) {
            var _this = this;
            var xobj = new XMLHttpRequest();
            xobj.open('GET', _oData.file, true);
            xobj.onreadystatechange = function () {
                if(xobj.readyState == 4 && xobj.status == 200) {
                    _this.textData[_oData.id] = JSON.parse(xobj.responseText);
                    ++_this.assetsLoaded;
                    _this.checkLoadComplete();
                }
            };
            xobj.send(null);
        };
        AssetLoader.prototype.loadImage = function (_oData) {
            var _this = this;
            var img = new Image();
            img.onload = function () {
                _this.oAssetData[_oData.id] = {
                };
                _this.oAssetData[_oData.id].img = img;
                _this.oAssetData[_oData.id].oData = {
                };
                var aSpriteSize = _this.getSpriteSize(_oData.file);
                if(aSpriteSize[0] != 0) {
                    _this.oAssetData[_oData.id].oData.spriteWidth = aSpriteSize[0];
                    _this.oAssetData[_oData.id].oData.spriteHeight = aSpriteSize[1];
                } else {
                    _this.oAssetData[_oData.id].oData.spriteWidth = _this.oAssetData[_oData.id].img.width;
                    _this.oAssetData[_oData.id].oData.spriteHeight = _this.oAssetData[_oData.id].img.height;
                }
                if(_oData.oAnims) {
                    _this.oAssetData[_oData.id].oData.oAnims = _oData.oAnims;
                }
                if(_oData.oAtlasData) {
                    _this.oAssetData[_oData.id].oData.oAtlasData = _oData.oAtlasData;
                } else {
                    _this.oAssetData[_oData.id].oData.oAtlasData = {
                        none: {
                            x: 0,
                            y: 0,
                            width: _this.oAssetData[_oData.id].oData.spriteWidth,
                            height: _this.oAssetData[_oData.id].oData.spriteHeight
                        }
                    };
                }
                ++_this.assetsLoaded;
                _this.checkLoadComplete();
            };
            img.src = _oData.file;
        };
        AssetLoader.prototype.getSpriteSize = function (_file) {
            var aNew = new Array();
            var sizeY = "";
            var sizeX = "";
            var stage = 0;
            var inc = _file.lastIndexOf(".");
            var canCont = true;
            while(canCont) {
                inc--;
                if(stage == 0 && this.isNumber(_file.charAt(inc))) {
                    sizeY = _file.charAt(inc) + sizeY;
                } else if(stage == 0 && sizeY.length > 0 && _file.charAt(inc) == "x") {
                    inc--;
                    stage = 1;
                    sizeX = _file.charAt(inc) + sizeX;
                } else if(stage == 1 && this.isNumber(_file.charAt(inc))) {
                    sizeX = _file.charAt(inc) + sizeX;
                } else if(stage == 1 && sizeX.length > 0 && _file.charAt(inc) == "_") {
                    canCont = false;
                    aNew = [
                        parseInt(sizeX), 
                        parseInt(sizeY)
                    ];
                } else {
                    canCont = false;
                    aNew = [
                        0, 
                        0
                    ];
                }
            }
            return aNew;
        };
        AssetLoader.prototype.isNumber = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        AssetLoader.prototype.checkLoadComplete = function () {
            if(this.assetsLoaded == this.totalAssets) {
                this.loadedCallback();
            }
        };
        AssetLoader.prototype.onReady = function (_func) {
            this.loadedCallback = _func;
        };
        AssetLoader.prototype.getImg = function (_id) {
            return this.oAssetData[_id].img;
        };
        AssetLoader.prototype.getData = function (_id) {
            return this.oAssetData[_id];
        };
        return AssetLoader;
    })();
    Utils.AssetLoader = AssetLoader;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var AnimSprite = (function () {
        function AnimSprite(_oImgData, _fps, _radius, _animId) {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.frameInc = 0;
            this.animType = "loop";
            this.offsetX = 0;
            this.offsetY = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.alpha = 1;
            this.oImgData = _oImgData;
            this.oAnims = this.oImgData.oData.oAnims;
            this.fps = _fps;
            this.radius = _radius;
            this.animId = _animId;
            this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2);
            this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2);
        }
        AnimSprite.prototype.updateAnimation = function (_delta) {
            this.frameInc += this.fps * _delta;
        };
        AnimSprite.prototype.changeImgData = function (_newImgData, _animId) {
            this.oImgData = _newImgData;
            this.oAnims = this.oImgData.oData.oAnims;
            this.animId = _animId;
            this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2);
            this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2);
            this.resetAnim();
        };
        AnimSprite.prototype.resetAnim = function () {
            this.frameInc = 0;
        };
        AnimSprite.prototype.setFrame = function (_frameNum) {
            this.fixedFrame = _frameNum;
        };
        AnimSprite.prototype.setAnimType = function (_type, _animId, _reset) {
            if (typeof _reset === "undefined") { _reset = true; }
            this.animId = _animId;
            this.animType = _type;
            if(_reset) {
                this.resetAnim();
            }
            switch(_type) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1;
                    break;
            }
        };
        AnimSprite.prototype.render = function (_ctx) {
            _ctx.save();
            _ctx.translate(this.x, this.y);
            _ctx.rotate(this.rotation);
            _ctx.scale(this.scaleX, this.scaleY);
            _ctx.globalAlpha = this.alpha;
            if(this.animId != null) {
                var max = this.oAnims[this.animId].length;
                var idx = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][idx % max];
                var imgX = (this.curFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if(this.animType == "once") {
                    if(idx > this.maxIdx) {
                        this.fixedFrame = this.oAnims[this.animId][max - 1];
                        this.animId = null;
                        if(this.animEndedFunc != null) {
                            this.animEndedFunc();
                        }
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            } else {
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            _ctx.restore();
        };
        AnimSprite.prototype.renderSimple = function (_ctx) {
            if(this.animId != null) {
                var max = this.oAnims[this.animId].length;
                var idx = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][idx % max];
                var imgX = (this.curFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if(this.animType == "once") {
                    if(idx > this.maxIdx) {
                        this.fixedFrame = this.oAnims[this.animId][max - 1];
                        this.animId = null;
                        if(this.animEndedFunc != null) {
                            this.animEndedFunc();
                        }
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            } else {
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - (this.centreX - this.offsetX) * this.scaleX, this.y - (this.centreY - this.offsetY) * this.scaleY, this.oImgData.oData.spriteWidth * this.scaleX, this.oImgData.oData.spriteHeight * this.scaleY);
        };
        return AnimSprite;
    })();
    Utils.AnimSprite = AnimSprite;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var BasicSprite = (function () {
        function BasicSprite(_oImgData, _radius, _frame) {
            if (typeof _frame === "undefined") { _frame = 0; }
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.offsetX = 0;
            this.offsetY = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.oImgData = _oImgData;
            this.radius = _radius;
            this.setFrame(_frame);
        }
        BasicSprite.prototype.setFrame = function (_frameNum) {
            this.frameNum = _frameNum;
        };
        BasicSprite.prototype.render = function (_ctx) {
            _ctx.save();
            _ctx.translate(this.x, this.y);
            _ctx.rotate(this.rotation);
            _ctx.scale(this.scaleX, this.scaleY);
            var imgX = (this.frameNum * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
            var imgY = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            _ctx.restore();
        };
        return BasicSprite;
    })();
    Utils.BasicSprite = BasicSprite;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var UserInput = (function () {
        function UserInput(_canvas, _isBugBrowser) {
            var _this = this;
            this.prevHitTime = 0;
            this.pauseIsOn = false;
            this.isDown = false;
            this.isBugBrowser = _isBugBrowser;
            this.keyDownEvtFunc = function (e) {
                _this.keyDown(e);
            };
            this.keyUpEvtFunc = function (e) {
                _this.keyUp(e);
            };
            _canvas.addEventListener('contextmenu', function (event) {
                return event.preventDefault();
            });
            _canvas.addEventListener("touchstart", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitDown(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchend", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitUp(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchcancel", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitCancel(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchmove", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.move(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier, true);
                }
            }, false);
            _canvas.addEventListener("mousedown", function (e) {
                if(e.button == 2) {
                    return;
                }
                _this.isDown = true;
                _this.hitDown(e, e.pageX, e.pageY, 1);
            }, false);
            _canvas.addEventListener("mouseup", function (e) {
                if(e.button == 2) {
                    return;
                }
                _this.isDown = false;
                _this.hitUp(e, e.pageX, e.pageY, 1);
            }, false);
            _canvas.addEventListener("mousemove", function (e) {
                if(e.button == 2) {
                    return;
                }
                _this.move(e, e.pageX, e.pageY, 1, _this.isDown);
            }, false);
            _canvas.addEventListener("mouseout", function (e) {
                if(e.button == 2) {
                    return;
                }
                clearButtonOvers();
                _this.isDown = false;
                _this.hitUp(e, userInput.mouseX / canvasScale, userInput.mouseY / canvasScale, 1);
            }, false);
            this.aHitAreas = new Array();
            this.aKeys = new Array();
        }
        UserInput.prototype.hitDown = function (e, _posX, _posY, _identifer) {
            e.preventDefault();
            e.stopPropagation();
            if(!hasFocus) {
                visibleResume();
            }
            if(this.pauseIsOn) {
                return;
            }
            var curHitTime = new Date().getTime();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].rect) {
                    var aX = getSafeWidth(canvas.width * this.aHitAreas[i].align[0]);
                    var aY = getSafeHeight(canvas.height * this.aHitAreas[i].align[1]);
                    if(_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                        this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                        this.aHitAreas[i].oData.hasLeft = false;
                        if(!this.aHitAreas[i].oData.isDown) {
                            this.aHitAreas[i].oData.isDown = true;
                            this.aHitAreas[i].oData.x = _posX;
                            this.aHitAreas[i].oData.y = _posY;
                            if((curHitTime - this.prevHitTime < 500 && (gameState != "game" || this.aHitAreas[i].id == "pause")) && isBugBrowser) {
                                return;
                            }
                            this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                        }
                        break;
                    }
                } else {
                }
            }
            this.prevHitTime = curHitTime;
        };
        UserInput.prototype.hitUp = function (e, _posX, _posY, _identifer) {
            if(!ios9FirstTouch) {
                playSound("silence");
                ios9FirstTouch = true;
            }
            if(this.pauseIsOn) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].rect) {
                    var aX = getSafeWidth(canvas.width * this.aHitAreas[i].align[0]);
                    var aY = getSafeHeight(canvas.height * this.aHitAreas[i].align[1]);
                    if(_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                        for(var j = 0; j < this.aHitAreas[i].aTouchIdentifiers.length; j++) {
                            if(this.aHitAreas[i].aTouchIdentifiers[j] == _identifer) {
                                this.aHitAreas[i].aTouchIdentifiers.splice(j, 1);
                                j -= 1;
                            }
                        }
                        if(this.aHitAreas[i].aTouchIdentifiers.length == 0) {
                            this.aHitAreas[i].oData.isDown = false;
                            if(this.aHitAreas[i].oData.multiTouch) {
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                            }
                        }
                        break;
                    }
                } else {
                }
            }
        };
        UserInput.prototype.hitCancel = function (e, _posX, _posY, _identifer) {
            e.preventDefault();
            e.stopPropagation();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].oData.isDown) {
                    this.aHitAreas[i].oData.isDown = false;
                    this.aHitAreas[i].aTouchIdentifiers = new Array();
                    if(this.aHitAreas[i].oData.multiTouch) {
                        this.aHitAreas[i].oData.x = _posX;
                        this.aHitAreas[i].oData.y = _posY;
                        this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                    }
                }
            }
        };
        UserInput.prototype.move = function (e, _posX, _posY, _identifer, _isDown) {
            _posX *= canvasScale;
            _posY *= canvasScale;
            this.mouseX = _posX;
            this.mouseY = _posY;
            if(this.pauseIsOn) {
                return;
            }
            if(_isDown) {
                for(var i = 0; i < this.aHitAreas.length; i++) {
                    if(this.aHitAreas[i].rect) {
                        var aX = getSafeWidth(canvas.width * this.aHitAreas[i].align[0]);
                        var aY = getSafeHeight(canvas.height * this.aHitAreas[i].align[1]);
                        if(_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                            this.aHitAreas[i].oData.hasLeft = false;
                            if(this.aHitAreas[i].oData.isDraggable && !this.aHitAreas[i].oData.isDown) {
                                this.aHitAreas[i].oData.isDown = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                                if(this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                            if(this.aHitAreas[i] && this.aHitAreas[i].oData.isDraggable) {
                                this.aHitAreas[i].oData.isBeingDragged = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                if(this.aHitAreas[i]) {
                                    this.aHitAreas[i].oData.isBeingDragged = false;
                                }
                            }
                        } else if(this.aHitAreas[i].oData.isDown && !this.aHitAreas[i].oData.hasLeft) {
                            for(var j = 0; j < this.aHitAreas[i].aTouchIdentifiers.length; j++) {
                                if(this.aHitAreas[i].aTouchIdentifiers[j] == _identifer) {
                                    this.aHitAreas[i].aTouchIdentifiers.splice(j, 1);
                                    j -= 1;
                                }
                            }
                            if(this.aHitAreas[i].aTouchIdentifiers.length == 0) {
                                this.aHitAreas[i].oData.hasLeft = true;
                                if(!this.aHitAreas[i].oData.isBeingDragged) {
                                    this.aHitAreas[i].oData.isDown = false;
                                }
                                if(this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                        }
                    }
                }
            }
        };
        UserInput.prototype.keyDown = function (e) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(e.keyCode == this.aKeys[i].keyCode) {
                    e.preventDefault();
                    this.aKeys[i].oData.isDown = true;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        UserInput.prototype.keyUp = function (e) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(e.keyCode == this.aKeys[i].keyCode) {
                    e.preventDefault();
                    this.aKeys[i].oData.isDown = false;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        UserInput.prototype.checkKeyFocus = function () {
            window.focus();
            if(this.aKeys.length > 0) {
                window.removeEventListener('keydown', this.keyDownEvtFunc, false);
                window.removeEventListener('keyup', this.keyUpEvtFunc, false);
                window.addEventListener('keydown', this.keyDownEvtFunc, false);
                window.addEventListener('keyup', this.keyUpEvtFunc, false);
            }
        };
        UserInput.prototype.addKey = function (_id, _callback, _oCallbackData, _keyCode) {
            if(_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            this.aKeys.push({
                id: _id,
                callback: _callback,
                oData: _oCallbackData,
                keyCode: _keyCode
            });
            this.checkKeyFocus();
        };
        UserInput.prototype.removeKey = function (_id) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(this.aKeys[i].id == _id) {
                    this.aKeys.splice(i, 1);
                    i -= 1;
                }
            }
        };
        UserInput.prototype.addHitArea = function (_id, _callback, _oCallbackData, _type, _oAreaData, _isUnique) {
            if (typeof _isUnique === "undefined") { _isUnique = false; }
            if(_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            if(_isUnique) {
                this.removeHitArea(_id);
            }
            if(!_oAreaData.scale) {
                _oAreaData.scale = 1;
            }
            if(!_oAreaData.align) {
                _oAreaData.align = [
                    0, 
                    0
                ];
            }
            var aTouchIdentifiers = new Array();
            switch(_type) {
                case "image":
                    var aRect;
                    aRect = new Array(_oAreaData.aPos[0] - (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].width / 2) * _oAreaData.scale, _oAreaData.aPos[1] - (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].height / 2) * _oAreaData.scale, _oAreaData.aPos[0] + (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].width / 2) * _oAreaData.scale, _oAreaData.aPos[1] + (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].height / 2) * _oAreaData.scale);
                    this.aHitAreas.push({
                        id: _id,
                        aTouchIdentifiers: aTouchIdentifiers,
                        callback: _callback,
                        oData: _oCallbackData,
                        rect: true,
                        area: aRect,
                        align: _oAreaData.align
                    });
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: _id,
                        aTouchIdentifiers: aTouchIdentifiers,
                        callback: _callback,
                        oData: _oCallbackData,
                        rect: true,
                        area: _oAreaData.aRect,
                        align: _oAreaData.align
                    });
                    break;
            }
        };
        UserInput.prototype.removeHitArea = function (_id) {
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].id == _id) {
                    this.aHitAreas.splice(i, 1);
                    i -= 1;
                }
            }
        };
        UserInput.prototype.resetAll = function () {
            for(var i = 0; i < this.aHitAreas.length; i++) {
                this.aHitAreas[i].oData.isDown = false;
                this.aHitAreas[i].oData.isBeingDragged = false;
                this.aHitAreas[i].aTouchIdentifiers = new Array();
            }
            this.isDown = false;
        };
        return UserInput;
    })();
    Utils.UserInput = UserInput;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var FpsMeter = (function () {
        function FpsMeter(_canvasHeight) {
            this.updateFreq = 10;
            this.updateInc = 0;
            this.frameAverage = 0;
            this.display = 1;
            this.log = "";
            this.render = function (_ctx) {
                this.frameAverage += this.delta / this.updateFreq;
                if(++this.updateInc >= this.updateFreq) {
                    this.updateInc = 0;
                    this.display = this.frameAverage;
                    this.frameAverage = 0;
                }
                _ctx.textAlign = "left";
                ctx.font = "10px Helvetica";
                _ctx.fillStyle = "#333333";
                _ctx.beginPath();
                _ctx.rect(0, this.canvasHeight - 15, 40, 15);
                _ctx.closePath();
                _ctx.fill();
                _ctx.fillStyle = "#ffffff";
                _ctx.fillText(Math.round(1000 / (this.display * 1000)) + " fps " + this.log, 5, this.canvasHeight - 5);
            };
            this.canvasHeight = _canvasHeight;
        }
        FpsMeter.prototype.update = function (_delta) {
            this.delta = _delta;
        };
        return FpsMeter;
    })();
    Utils.FpsMeter = FpsMeter;    
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Background = (function () {
        function Background() {
            this.x = 0;
            this.y = 0;
            this.targY = 0;
            this.incY = 0;
            this.renderState = null;
            if(gameState == "start") {
                this.oImgData = assetLib.getData("titleBg");
            }
        }
        Background.prototype.render = function () {
            if(canvas.width > canvas.height) {
                ctx.drawImage(this.oImgData.img, 0, ((1 - canvas.height / canvas.width) / 2) * this.oImgData.img.height, this.oImgData.img.width, (canvas.height / canvas.width) * this.oImgData.img.height, 0, 0, canvas.width, canvas.height);
            } else {
                ctx.drawImage(this.oImgData.img, ((1 - canvas.width / canvas.height) / 2) * this.oImgData.img.width, 0, (canvas.width / canvas.height) * this.oImgData.img.width, this.oImgData.img.width, 0, 0, canvas.width, canvas.height);
            }
        };
        return Background;
    })();
    Elements.Background = Background;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Panel = (function () {
        function Panel(_aButs) {
            this.timer = .3;
            this.endTime = 0;
            this.posY = 0;
            this.posX = 0;
            this.numberSpace = 17;
            this.incY = 0;
            this.flareRot = 0;
            this.scrollX = 0;
            this.posBounceX = 0;
            this.aHeroCharPos = new Array({
                x: -30,
                y: 50
            }, {
                x: -30,
                y: 50
            }, {
                x: -20,
                y: 100
            }, {
                x: -20,
                y: 70
            }, {
                x: 0,
                y: 50
            });
            this.aEnemyCharPos = new Array({
                x: 50,
                y: 50
            }, {
                x: 40,
                y: 20
            }, {
                x: 0,
                y: 70
            }, {
                x: 40,
                y: 50
            }, {
                x: 30,
                y: 80
            });
            this.scoreNumberSpace = 48;
            this.loserX = 0;
            this.evolved = false;
            this.evolveTimer = 0;
            this.evolveAlpha = 0;
            this.evolveEffectScale = 0;
            this.aFlashes = new Array();
            this.jiggleY0 = 0;
            this.jiggleY1 = 0;
            this.congratsState = 0;
            if(gameState == "goalkeepingComplete" && curProgress == 4 && oGameData.heroScore > oGameData.enemyScore) {
                this.oBgImgData = assetLib.getData("tournWinBg");
            } else {
                this.oBgImgData = assetLib.getData("titleBg");
            }
            this.oTitleLogoImgData = assetLib.getData("titleLogo");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.aButs = _aButs;
            this.oIntroElementsImgData = assetLib.getData("introElements");
            this.oScoreNumbersImgData = assetLib.getData("scoreNumbers");
            this.aConfetti = new Array();
            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.confetti].height;
            this.aConfetti.push({
                x: .2,
                y: -bHeight,
                rot: Math.random() * 2 - 1
            });
            this.aConfetti.push({
                x: .5,
                y: -bHeight,
                rot: Math.random() * 2 - 1
            });
            this.aConfetti.push({
                x: .8,
                y: -bHeight,
                rot: Math.random() * 2 - 1
            });
            this.aConfetti.push({
                x: .2,
                y: bHeight * .3,
                rot: Math.random() * 2 - 1
            });
            this.aConfetti.push({
                x: .5,
                y: bHeight * .3,
                rot: Math.random() * 2 - 1
            });
            this.aConfetti.push({
                x: .8,
                y: bHeight * .3,
                rot: Math.random() * 2 - 1
            });
        }
        Panel.prototype.update = function () {
            this.incY += 10 * delta;
        };
        Panel.prototype.startTween1 = function () {
            this.congratsState = 0;
            this.butsY = 500;
            TweenLite.to(this, .5, {
                butsY: 0,
                ease: "Cubic.easeOut"
            });
            this.posX = 100;
            TweenLite.to(this, .5, {
                posX: 0,
                ease: "Cubic.easeOut"
            });
            this.posBounceX = 50;
            TweenLite.to(this, 1, {
                posBounceX: 0,
                ease: "Bounce.easeOut"
            });
        };
        Panel.prototype.triggerCongrats = function () {
            this.congratsState = 1;
        };
        Panel.prototype.triggerStriker = function () {
            if(this.strikerTween) {
                this.strikerTween.kill();
            }
            this.strikerX = 500;
            this.strikerTween = TweenLite.to(this, .5, {
                strikerX: 0,
                ease: "Cubic.easeOut"
            });
        };
        Panel.prototype.triggerGoalie = function () {
            if(this.goalieTween) {
                this.goalieTween.kill();
            }
            this.goalieX = 500;
            this.goalieTween = TweenLite.to(this, .5, {
                goalieX: 0,
                ease: "Cubic.easeOut"
            });
        };
        Panel.prototype.startEvolveTween = function () {
            this.butsY = 500;
            TweenLite.to(this, .5, {
                butsY: 0,
                ease: "Cubic.easeOut"
            });
            this.posX = 50;
            TweenLite.to(this, 1, {
                posX: 0,
                ease: "Cubic.easeOut"
            });
            this.posBounceX = 50;
            TweenLite.to(this, 1, {
                delay: 2,
                posBounceX: 0,
                ease: "Bounce.easeOut"
            });
        };
        Panel.prototype.shootingCompleteTween = function () {
            this.butsY = 500;
            TweenLite.to(this, .5, {
                butsY: 0,
                ease: "Cubic.easeOut"
            });
            this.posX = 50;
            TweenLite.to(this, 1, {
                posX: 0,
                ease: "Quad.easeOut"
            });
            this.posBounceX = 50;
            TweenLite.to(this, 1, {
                posBounceX: 0,
                ease: "Bounce.easeOut"
            });
            setTimeout(function () {
                wipe.trigger(initGoalkeeping);
            }, 1500);
        };
        Panel.prototype.startScreenTween = function () {
            this.butsY = 500;
            TweenLite.to(this, .5, {
                butsY: 0,
                delay: .5,
                ease: "Cubic.easeOut"
            });
            this.oStartPosData = {
                grizzlyX: 500,
                gumballX: -1000,
                wonderWomanX: -1000,
                maoMaoX: -1000,
                appleX: -1000,
                ravenX: -1000,
                rainbowScale: 0,
                titleX: -1000,
                ballX: -1000,
                logoX: -1000
            };
            TweenLite.to(this.oStartPosData, .5, {
                grizzlyX: 0,
                delay: 0,
                ease: "Quad.easeOut"
            });
            TweenLite.to(this.oStartPosData, 1, {
                ravenX: 0,
                delay: .1,
                ease: "Quad.easeOut"
            });
            TweenLite.to(this.oStartPosData, 1, {
                ballX: 0,
                delay: .1,
                ease: "Quad.easeOut"
            });
            TweenLite.to(this.oStartPosData, .5, {
                gumballX: 0,
                delay: .2,
                ease: "Back.easeOut"
            });
            TweenLite.to(this.oStartPosData, .5, {
                wonderWomanX: 0,
                delay: .3,
                ease: "Back.easeOut"
            });
            TweenLite.to(this.oStartPosData, .5, {
                maoMaoX: 0,
                delay: .4,
                ease: "Back.easeOut"
            });
            TweenLite.to(this.oStartPosData, .5, {
                appleX: 0,
                delay: .5,
                ease: "Back.easeOut"
            });
            TweenLite.to(this.oStartPosData, .5, {
                titleX: 0,
                logoX: 0,
                rainbowScale: 1,
                delay: .6,
                ease: "Quad.easeOut"
            });
        };
        Panel.prototype.updateConfetti = function () {
            if(Math.random() < .1) {
                addFlash(0, Math.random() * canvas.width, canvas.height / 2 - (Math.random() * 144 + 42), Math.random() * .2 + .2, this.aFlashes);
            }
            for(var i = 0; i < this.aFlashes.length; i++) {
                this.aFlashes[i].update();
                this.aFlashes[i].render(ctx);
                if(this.aFlashes[i].removeMe) {
                    this.aFlashes.splice(i, 1);
                    i -= 1;
                }
            }
            for(var i = 0; i < this.aConfetti.length; i++) {
                ctx.save();
                ctx.translate(this.aConfetti[i].x * canvas.width, this.aConfetti[i].y);
                ctx.rotate((this.incY * .03) * this.aConfetti[i].rot);
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.confetti].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.confetti].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.confetti].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.confetti].height;
                this.aConfetti[i].y += delta * 100;
                if(this.aConfetti[i].y > canvas.height + bHeight / 2) {
                    this.aConfetti[i].y = -bHeight / 2;
                    this.aConfetti[i].rot = Math.random() * 2 - 1;
                }
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                ctx.restore();
            }
        };
        Panel.prototype.switchBut = function (_id0, _id1, _id1Over, _aNewAPos, _aNewAlign) {
            if (typeof _aNewAPos === "undefined") { _aNewAPos = null; }
            if (typeof _aNewAlign === "undefined") { _aNewAlign = null; }
            var oButData = null;
            for(var i = 0; i < this.aButs.length; i++) {
                if(this.aButs[i].id == _id0) {
                    this.aButs[i].id = _id1;
                    this.aButs[i].idOver = _id1Over;
                    oButData = this.aButs[i];
                    if(_aNewAPos) {
                        this.aButs[i].aPos = _aNewAPos;
                    }
                    if(_aNewAlign) {
                        this.aButs[i].align = _aNewAlign;
                    }
                }
            }
            return oButData;
        };
        Panel.prototype.introTween = function () {
            this.oIntro = {
                inc0: 1,
                inc1: -300,
                inc2: 1,
                inc3: -200,
                inc4: -300,
                inc5: 1,
                inc6: 0,
                inc7: 0,
                inc8: 400
            };
            TweenLite.to(this.oIntro, 2, {
                delay: .5,
                inc0: 0,
                ease: "Quad.easeOut"
            });
            TweenLite.to(this.oIntro, .5, {
                delay: .5,
                inc1: 0,
                ease: "Quint.easeOut"
            });
            TweenLite.to(this.oIntro, 2, {
                delay: 1,
                inc2: 0,
                ease: "Quad.easeOut"
            });
            TweenLite.to(this.oIntro, 1, {
                delay: 1.5,
                inc3: 0,
                ease: "Back.easeOut"
            });
            TweenLite.to(this.oIntro, 1, {
                delay: 2.4,
                inc4: 0,
                ease: "Elastic.easeOut"
            });
            TweenLite.to(this.oIntro, 1, {
                delay: 3,
                inc5: 0,
                ease: "Quad.easeOut"
            });
            TweenLite.to(this.oIntro, 1, {
                delay: 4,
                inc6: 1,
                ease: "Bounce.easeOut"
            });
            TweenLite.to(this.oIntro, 1, {
                delay: 5,
                inc7: 1,
                ease: "Elastic.easeOut"
            });
            TweenLite.to(this.oIntro, 1, {
                delay: 5.4,
                inc8: 0,
                ease: "Back.easeOut"
            });
        };
        Panel.prototype.outroTween = function () {
            this.oIntro = {
                inc0: 1,
                inc1: 0,
                inc2: 1,
                inc3: -300,
                inc4: 1,
                inc5: 0
            };
            TweenLite.to(this.oIntro, 1, {
                delay: .5,
                inc0: 0,
                ease: "Quad.easeOut"
            });
            TweenLite.to(this.oIntro, 1, {
                delay: .8,
                inc1: 1,
                ease: "Elastic.easeIn"
            });
            TweenLite.to(this.oIntro, 2, {
                delay: 2.2,
                inc2: 0,
                ease: "Quad.easeOut"
            });
            TweenLite.to(this.oIntro, .5, {
                delay: 2.4,
                inc3: 0,
                ease: "Back.easeOut"
            });
            TweenLite.to(this.oIntro, 2, {
                delay: 3.45,
                inc4: 0,
                ease: "Quad.easeOut"
            });
            TweenLite.to(this.oIntro, 2, {
                delay: 4.45,
                inc5: 1,
                ease: "Quad.easeOut"
            });
        };
        Panel.prototype.render = function (_butsOnTop) {
            if (typeof _butsOnTop === "undefined") { _butsOnTop = true; }
            if(!_butsOnTop) {
                this.addButs(ctx);
            }
            switch(gameState) {
                case "start":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, Math.max(150, canvas.height * .33) + 25 - (bHeight / 2) * this.oStartPosData.rainbowScale, canvas.width, bHeight * this.oStartPosData.rainbowScale);
                    var tempHoverX = Math.sin(this.incY / 6) * 3;
                    var tempHoverY = Math.cos(this.incY / 6) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 + 150 + this.oStartPosData.ravenX + tempHoverX, Math.max(150, canvas.height * .33) - 95 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRaven].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRaven].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRaven].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRaven].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                    ctx.restore();
                    ctx.drawImage(this.oTitleLogoImgData.img, 0, 0, this.oTitleLogoImgData.img.width, this.oTitleLogoImgData.img.height, canvas.width / 2 - this.oTitleLogoImgData.img.width / 2 + this.oStartPosData.titleX, Math.max(140, canvas.height * .33) - this.oTitleLogoImgData.img.height / 2, this.oTitleLogoImgData.img.width, this.oTitleLogoImgData.img.height);
                    var tempHoverX = Math.sin(this.incY / 5) * 3;
                    var tempHoverY = Math.cos(this.incY / 5) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 + 330 + this.oStartPosData.grizzlyX + tempHoverX, getSafeHeight(canvas.height) + 70 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleGrizzly].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleGrizzly].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleGrizzly].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleGrizzly].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 1) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 1) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 - 65 + this.oStartPosData.wonderWomanX + tempHoverX, getSafeHeight(canvas.height) + 65 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleWonderWoman].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleWonderWoman].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleWonderWoman].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleWonderWoman].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 2) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 2) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 + 95 + this.oStartPosData.gumballX + tempHoverX, getSafeHeight(canvas.height) + 15 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleGumball].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleGumball].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleGumball].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleGumball].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 3) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 3) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 - 350 + this.oStartPosData.appleX + tempHoverX, getSafeHeight(canvas.height) - 60 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleApple].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleApple].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleApple].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleApple].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 4) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 4) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 - 190 + this.oStartPosData.maoMaoX + tempHoverX, getSafeHeight(canvas.height) + 45 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMaoMao].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMaoMao].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMaoMao].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMaoMao].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 5) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 5) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 + 50 + this.oStartPosData.ballX + tempHoverX, getSafeHeight(canvas.height) - 120 + tempHoverY);
                    ctx.rotate(this.oStartPosData.ballX * .005);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    if(hasEndGameLink) {
                        ctx.fillStyle = "rgba(0, 0, 85, .5)";
                        ctx.fillRect(getSafeWidth(0) + 10, getSafeHeight(canvas.height) - 50 + this.butsY, 200, 40);
                        addText(0, 25, 190, "center", getSafeWidth(0) + 110, getSafeHeight(canvas.height) - 22 + this.butsY, "extBut", "#FFFFFF");
                    }
                    break;
                case "credits":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    ctx.fillStyle = "rgba(0, 0, 85, .75)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var tempImgData = assetLib.getData("info");
                    ctx.drawImage(tempImgData.img, 0, 0, tempImgData.img.width, tempImgData.img.height, canvas.width / 2 - tempImgData.img.width / 2 - this.posY, canvas.height / 2 - tempImgData.img.height / 2, tempImgData.img.width, tempImgData.img.height);
                    addText(0, 20, 1000, "center", canvas.width / 2 - this.posY, canvas.height / 2 - 170, "producedFor", "#FFFFFF");
                    addText(0, 20, 1000, "center", canvas.width / 2 - this.posY, canvas.height / 2 + 83, "createdBy", "#FFFFFF");
                    break;
                case "charSelect":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 150 + this.posX, canvas.width, bHeight);
                    if(userStrikerId != null && userGoalieId != null) {
                        this.flareRot += delta;
                        ctx.save();
                        ctx.translate(canvas.width / 2, canvas.height - 70);
                        ctx.scale(Math.min(this.flareRot * 10, 2.5), Math.min(this.flareRot * 10, 2.5));
                        ctx.rotate(this.flareRot);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                        ctx.restore();
                    }
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "selectTeam", "#000055");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth - 10 - this.posX, canvas.height * .13, bWidth, bHeight);
                    addText(1, 30, 320, "center", canvas.width / 2 - 185, canvas.height * .13 + 30, "strikers", "#FFD40D");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + 10 + this.posX, canvas.height * .13, bWidth, bHeight);
                    addText(1, 30, 320, "center", canvas.width / 2 + 185, canvas.height * .13 + 30, "goalkeepers", "#FFD40D");
                    if(this.strikerX < 500) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                        var tempY = Math.max(canvas.height - bHeight, canvas.height * .13 + 240 + aStrikerData[userStrikerId].offsetY);
                        if(canvas.height - (canvas.height * .14 + 230) > bHeight) {
                            tempY = Math.max(tempY - ((canvas.height - (canvas.height * .14 + 230)) - bHeight), canvas.height - this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height - 2 - bHeight);
                        }
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, canvas.height - tempY - 10, canvas.width / 2 - bWidth / 2 + aStrikerData[userStrikerId].offsetX - this.strikerX + Math.sin(this.incY * .5) * 5, tempY + this.strikerX, bWidth, canvas.height - tempY - 10);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - 155 - this.strikerX * 2, canvas.height - bHeight - 5, bWidth, bHeight);
                        addText(1, 30, 200, "center", canvas.width / 2 - bWidth / 2 - 20 - this.strikerX * 2, canvas.height - bHeight + 25, "striker" + userStrikerId, "#FFFFFF");
                    }
                    if(this.goalieX < 500) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].height;
                        var tempY = Math.max(canvas.height - bHeight, canvas.height * .13 + 240 + aGoalieData[userGoalieId].offsetY);
                        if(canvas.height - (canvas.height * .14 + 230) > bHeight) {
                            tempY = Math.max(tempY - ((canvas.height - (canvas.height * .14 + 230)) - bHeight), canvas.height - this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height - 2 - bHeight);
                        }
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, canvas.height - tempY - 10, canvas.width / 2 - bWidth / 2 + aGoalieData[userGoalieId].offsetX + this.goalieX - Math.sin(this.incY * .5) * 5, tempY + this.goalieX, bWidth, canvas.height - tempY - 10);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + 155 + this.goalieX * 2, canvas.height - bHeight - 5, bWidth, bHeight);
                        addText(1, 30, 200, "center", canvas.width / 2 - bWidth / 2 + 300 + this.goalieX * 2, canvas.height - bHeight + 25, "goalie" + userGoalieId, "#FFFFFF");
                    }
                    break;
                case "progress":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 150 + this.posX, canvas.width, bHeight);
                    tempHoverX = Math.sin(this.incY / 5 + 5) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 5) * 3;
                    ctx.save();
                    ctx.translate(canvas.width * .6 + tempHoverX + this.posX, canvas.height / 2 + tempHoverY);
                    ctx.rotate(-60 * radian);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                    ctx.restore();
                    var tempScale = .7;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 190 - bWidth / 2, canvas.height - bHeight * tempScale + this.posX, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 330 - bWidth / 2, canvas.height - bHeight * tempScale + this.posX, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "tournamentProgress", "#000055");
                    for(var i = 0; i < 5; i++) {
                        var tempPanelId = 1;
                        var tempCol = "#F29A51";
                        if(i <= curProgress) {
                            tempPanelId = 0;
                            if(i == curProgress) {
                                tempCol = "#FFFFFF";
                            } else {
                                tempCol = "#71BCFF";
                            }
                        }
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["progressPanel" + tempPanelId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["progressPanel" + tempPanelId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["progressPanel" + tempPanelId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["progressPanel" + tempPanelId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + i * 140 - 370 - this.posX, canvas.height / 2 + i * 50 - 42, bWidth, bHeight);
                        addText(1, 25, 170, "center", canvas.width / 2 + i * 140 - 280 - this.posX, canvas.height / 2 + i * 50 - 14, "round" + i, tempCol);
                    }
                    break;
                case "shootingIntro":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "shootingIntro" + curProgress, "#000055");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - 180 - bWidth / 2 - this.posX, canvas.height * .77 + 2 - bHeight + this.posX, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - 180 - bWidth / 2 - this.posX, canvas.height * .77 + this.posX, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 - 180 - this.posX, canvas.height * .77 + 30 + this.posX, "striker" + userStrikerId, "#FFFFFF");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 + 180 + this.posX - bWidth / 2, canvas.height * .77 + 2 + this.posX - bHeight, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 + 180 - bWidth / 2 + this.posX, canvas.height * .77 + this.posX, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 + 180 + this.posX, canvas.height * .77 + 30 + this.posX, "goalie" + aEnemyData[curProgress].goalieId, "#FFFFFF");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - bWidth / 2, canvas.height * .77 - 110 - bHeight / 2 - this.posX, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - bWidth / 2, canvas.height * .5 - 117 - bHeight / 2 - this.posX, bWidth, bHeight);
                    addText(0, 30, 625, "center", canvas.width * .5, canvas.height * .5 - 125 - this.posX, "strikerChat" + userStrikerId + "_" + aEnemyData[curProgress].goalieId, "#E65D6A");
                    break;
                case "goalkeepingIntro":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "goalkeepingIntro", "#000055");
                    ctx.save();
                    ctx.translate(canvas.width * .5 - 180 - this.posX, canvas.height * .77 + 2 + this.posX);
                    ctx.scale(-1, 1);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - 180 - bWidth / 2 - this.posX, canvas.height * .77 + this.posX, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 - 180 - this.posX, canvas.height * .77 + 30 + this.posX, "goalie" + userGoalieId, "#FFFFFF");
                    ctx.save();
                    ctx.translate(canvas.width * .5 + 180 + this.posX, canvas.height * .77 + 2 + this.posX);
                    ctx.scale(-1, 1);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 + 180 - bWidth / 2 + this.posX, canvas.height * .77 + this.posX, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 + 180 + this.posX, canvas.height * .77 + 30 + this.posX, "striker" + aEnemyData[curProgress].strikerId, "#FFFFFF");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - bWidth / 2, canvas.height * .77 - 110 - bHeight / 2 - this.posX, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - bWidth / 2, canvas.height * .5 - 117 - bHeight / 2 - this.posX, bWidth, bHeight);
                    addText(0, 30, 625, "center", canvas.width * .5, canvas.height * .5 - 125 - this.posX, "goalieChat" + userGoalieId + "_" + aEnemyData[curProgress].strikerId, "#E65D6A");
                    break;
                case "goalkeepingComplete":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    if(oGameData.heroScore > oGameData.enemyScore && curProgress == 4) {
                        var tempX = canvas.width / 2;
                        var tempY = canvas.height / 2 - 10;
                        var tempScale = .6;
                        if(this.congratsState == 1) {
                            tempX = canvas.width / 2 + 100;
                            tempY = canvas.height / 2 + 50;
                            tempScale = 1;
                        }
                        ctx.save();
                        ctx.translate(tempX, tempY);
                        ctx.rotate(Math.sin(this.incY * .2) * .2);
                        ctx.scale(tempScale, tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winCup].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winCup].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winCup].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winCup].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                        ctx.restore();
                    }
                    if(this.congratsState == 0) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    } else {
                        addText(1, 80, canvas.width - 200, "center", canvas.width / 2 - 1, canvas.height * .2 - 1, "congrats", "#71BCFF");
                        addText(1, 80, canvas.width - 200, "center", canvas.width / 2 + 2, canvas.height * .2 + 2, "congrats", "#000055");
                        addText(1, 80, canvas.width - 200, "center", canvas.width / 2, canvas.height * .2, "congrats", "#ffffff");
                    }
                    var tempScale = .8;
                    var tempY = .72;
                    this.jiggleY0 = 0;
                    this.jiggleY1 = 0;
                    if(oGameData.heroScore > oGameData.enemyScore) {
                        this.jiggleY0 = 10 - Math.abs(Math.sin(this.incY * .5) * 10);
                        this.jiggleY1 = 10 - Math.abs((Math.sin(this.incY * .5 + 1)) * 10);
                    }
                    if(userStrikerId != 5) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY0, canvas.width * .5 - 220 - Math.min(bWidth * tempScale, 280 / 2) - this.posX, canvas.height * tempY + 2 - (bHeight - this.jiggleY0) * tempScale + this.posX, bWidth * tempScale, (bHeight - this.jiggleY0) * tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY1, canvas.width * .5 - 220 + Math.min(bWidth * tempScale, 280 / 2) - (bWidth) * tempScale - this.posX, canvas.height * tempY + 2 - (bHeight - this.jiggleY1) * tempScale + this.posX, bWidth * tempScale, (bHeight - this.jiggleY1) * tempScale);
                    } else {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY1, canvas.width * .5 - 220 + Math.min(bWidth * tempScale, 280 / 2) - (bWidth) * tempScale - this.posX, canvas.height * tempY + 2 - (bHeight - this.jiggleY1) * tempScale + this.posX, bWidth * tempScale, (bHeight - this.jiggleY1) * tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY0, canvas.width * .5 - 220 - Math.min(bWidth * tempScale, 280 / 2) - this.posX, canvas.height * tempY + 2 - (bHeight - this.jiggleY0) * tempScale + this.posX, bWidth * tempScale, (bHeight - this.jiggleY0) * tempScale);
                    }
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - 220 - bWidth / 2 - this.posX, canvas.height * tempY + this.posX, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 - 220 - this.posX, canvas.height * tempY + 30 + this.posX, "striker" + userStrikerId, "#FFFFFF");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - 220 - bWidth / 2 - this.posX, canvas.height * tempY + this.posX + 50, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 - 220 - this.posX, canvas.height * tempY + 30 + this.posX + 50, "goalie" + userGoalieId, "#FFFFFF");
                    if(this.congratsState == 0) {
                        this.jiggleY0 = 0;
                        this.jiggleY1 = 0;
                        if(oGameData.heroScore < oGameData.enemyScore) {
                            this.jiggleY0 = 10 - Math.abs(Math.sin(this.incY * .5) * 10);
                            this.jiggleY1 = 10 - Math.abs((Math.sin(this.incY * .5 + 1)) * 10);
                        }
                        if(aEnemyData[curProgress].strikerId != 5) {
                            ctx.save();
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].height;
                            ctx.translate(canvas.width * .5 + 220 + this.posX + Math.min(bWidth * tempScale, 280 / 2), canvas.height * tempY + 2 + this.posX + this.jiggleY0);
                            ctx.scale(-1 * tempScale, 1 * tempScale);
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY0, 0, -bHeight, bWidth, bHeight - this.jiggleY0);
                            ctx.restore();
                            ctx.save();
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].height;
                            ctx.translate(canvas.width * .5 + 220 + this.posX - Math.min(bWidth * tempScale, 280 / 2), canvas.height * tempY + 2 + this.posX + this.jiggleY1);
                            ctx.scale(-1 * tempScale, 1 * tempScale);
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY1, -bWidth, -bHeight, bWidth, bHeight - this.jiggleY1);
                            ctx.restore();
                        } else {
                            ctx.save();
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].height;
                            ctx.translate(canvas.width * .5 + 220 + this.posX - Math.min(bWidth * tempScale, 280 / 2), canvas.height * tempY + 2 + this.posX + this.jiggleY1);
                            ctx.scale(-1 * tempScale, 1 * tempScale);
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY1, -bWidth, -bHeight, bWidth, bHeight - this.jiggleY1);
                            ctx.restore();
                            ctx.save();
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].height;
                            ctx.translate(canvas.width * .5 + 220 + this.posX + Math.min(bWidth * tempScale, 280 / 2), canvas.height * tempY + 2 + this.posX + this.jiggleY0);
                            ctx.scale(-1 * tempScale, 1 * tempScale);
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY0, 0, -bHeight, bWidth, bHeight - this.jiggleY0);
                            ctx.restore();
                        }
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 + 220 - bWidth / 2 + this.posX, canvas.height * tempY + this.posX, bWidth, bHeight);
                        addText(1, 30, 200, "center", canvas.width * .5 + 220 + this.posX, canvas.height * tempY + 30 + this.posX, "striker" + aEnemyData[curProgress].strikerId, "#FFFFFF");
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 + 220 - bWidth / 2 + this.posX, canvas.height * tempY + this.posX + 50, bWidth, bHeight);
                        addText(1, 30, 200, "center", canvas.width * .5 + 220 + this.posX, canvas.height * tempY + 30 + this.posX + 50, "goalie" + aEnemyData[curProgress].goalieId, "#FFFFFF");
                        tempScale = .8 + this.posBounceX / 40;
                        tempY = canvas.height * .72 - 100;
                        var tempScore = oGameData.heroScore.toString();
                        for(var i = 0; i < tempScore.length; i++) {
                            var id = parseFloat(tempScore.charAt(i));
                            var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                            var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width / 2 + i * (this.scoreNumberSpace * tempScale) - 30 * tempScale - tempScore.length * (this.scoreNumberSpace * tempScale), tempY - (this.oScoreNumbersImgData.oData.spriteHeight / 2) * tempScale, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                        }
                        var id = 10;
                        var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                        var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width / 2 - 30 * tempScale, tempY - (this.oScoreNumbersImgData.oData.spriteHeight / 2) * tempScale, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                        var tempScore = oGameData.enemyScore.toString();
                        for(var i = 0; i < tempScore.length; i++) {
                            var id = parseFloat(tempScore.charAt(i));
                            var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                            var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width / 2 + i * (this.scoreNumberSpace * tempScale) + 15 * tempScale, tempY - (this.oScoreNumbersImgData.oData.spriteHeight / 2) * tempScale, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                        }
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel0].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel0].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel0].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel0].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - bWidth / 2, canvas.height * .5 - 117 - bHeight / 2 - this.posX, bWidth, bHeight);
                        if(oGameData.heroScore > oGameData.enemyScore) {
                            var tempText = "matchWon";
                            var tempText2 = "youWon0";
                            if(curProgress == 4) {
                                tempText = "tournamentWon";
                                tempText2 = "youWon1";
                            }
                            addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, tempText2, "#000055");
                            addText(0, 30, 625, "center", canvas.width * .5, canvas.height * .5 - 125 - this.posX, tempText + aEnemyData[curProgress].strikerId, "#E65D6A");
                        } else if(oGameData.heroScore < oGameData.enemyScore) {
                            addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "youLost", "#000055");
                            addText(0, 30, 625, "center", canvas.width * .5, canvas.height * .5 - 125 - this.posX, "matchLost" + aEnemyData[curProgress].strikerId, "#E65D6A");
                        } else {
                            addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "draw", "#000055");
                            addText(0, 30, 625, "center", canvas.width * .5, canvas.height * .5 - 125 - this.posX, "matchDraw" + aEnemyData[curProgress].strikerId, "#E65D6A");
                        }
                    }
                    break;
                case "shootingComplete":
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    this.scrollX += delta * 2000;
                    var oWipeImgData = assetLib.getData("wipe0");
                    var cropWidth = oWipeImgData.img.width;
                    ctx.drawImage(oWipeImgData.img, 0, 0, Math.min(Math.max(canvas.width / 2, canvas.width / 2 + this.scrollX % cropWidth), oWipeImgData.img.width), oWipeImgData.img.height, -this.scrollX % cropWidth, 0, Math.min(Math.max(canvas.width / 2, canvas.width / 2 + this.scrollX % cropWidth), oWipeImgData.img.width), canvas.height);
                    ctx.drawImage(oWipeImgData.img, 0, 0, Math.max(this.scrollX % cropWidth - (cropWidth - canvas.width / 2), .1), oWipeImgData.img.height, cropWidth - this.scrollX % cropWidth, 0, Math.max(this.scrollX % cropWidth - (cropWidth - canvas.width / 2), .1), canvas.height);
                    var oWipeImgData = assetLib.getData("wipe1");
                    ctx.drawImage(oWipeImgData.img, Math.max((cropWidth - canvas.width / 2) - this.scrollX % cropWidth, 0), 0, cropWidth, oWipeImgData.img.height, canvas.width / 2 + Math.max((this.scrollX % cropWidth) - (cropWidth - canvas.width / 2), 0), 0, cropWidth, canvas.height);
                    ctx.drawImage(oWipeImgData.img, Math.min(cropWidth + (cropWidth - canvas.width / 2) - this.scrollX % cropWidth, cropWidth - .1), 0, cropWidth, oWipeImgData.img.height, canvas.width / 2, 0, cropWidth, canvas.height);
                    var oCharImgData = assetLib.getData("char0" + heroId);
                    ctx.drawImage(oCharImgData.img, 0, 0, oCharImgData.img.width, oCharImgData.img.height, canvas.width / 2 - oCharImgData.img.width + this.aHeroCharPos[heroId].x, canvas.height / 2 - oCharImgData.img.height / 2 + Math.sin(this.incY / 2) * 5 + this.aHeroCharPos[heroId].y, oCharImgData.img.width, oCharImgData.img.height);
                    var oCharImgData = assetLib.getData("char1" + enemyStrikerId);
                    ctx.drawImage(oCharImgData.img, 0, 0, oCharImgData.img.width, oCharImgData.img.height, canvas.width / 2 + this.aEnemyCharPos[enemyStrikerId].x, canvas.height / 2 - oCharImgData.img.height / 2 - Math.sin(this.incY / 2) * 5 + this.aEnemyCharPos[enemyStrikerId].y, oCharImgData.img.width, oCharImgData.img.height);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth * .5, (this.scrollX / 4) % canvas.height, bWidth, canvas.height * 2);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth * .5, (this.scrollX / 4) % canvas.height - canvas.height, bWidth, canvas.height * 2);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameTop].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameTop].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameTop].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameTop].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 0 - this.posX, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameBottom].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameBottom].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameBottom].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameBottom].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - bHeight + this.posX, canvas.width, bHeight);
                    var temp = 1;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["textPanel" + temp]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["textPanel" + temp]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["textPanel" + temp]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["textPanel" + temp]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 10 + this.posBounceX * 3, bWidth, bHeight);
                    addText(0, 40, 330, "center", canvas.width / 2, 61 + this.posBounceX * 3, "goalkeepingTime");
                    break;
                case "shooting":
                    if(showingTut) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                        addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "howToShoot", "#000055");
                    }
                    break;
                case "goalkeeping":
                    if(showingTut) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                        addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "howToSave", "#000055");
                    }
                    break;
                case "pause":
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    ctx.fillStyle = "rgba(0, 0, 85, .75)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "paused", "#000055");
                    addText(0, 25, 160, "center", canvas.width / 2 - 85, canvas.height / 2 + 90 - this.butsY, "continue", "#FFFFFF");
                    addText(0, 25, 160, "center", canvas.width / 2 + 85, canvas.height / 2 + 90 - this.butsY, "quitGame", "#FFFFFF");
                    if(hasEndGameLink) {
                        addText(0, 25, 190, "center", 110, canvas.height - 22 + this.butsY, "extBut", "#FFFFFF");
                    }
                    break;
                case "quitConfirm":
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    ctx.fillStyle = "rgba(0, 0, 85, .75)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var tempScale = 1;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(canvas.width * .15 - bWidth / 2), getSafeHeight(canvas.height) - bHeight * tempScale + this.posX, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(canvas.width * .15 + 250 - bWidth / 2), getSafeHeight(canvas.height) - 275 - bHeight / 2 - this.posX, bWidth, bHeight);
                    addText(0, 30, 625, "center", getSafeWidth(canvas.width * .15 + 250 - bWidth / 2) + bWidth / 2, getSafeHeight(canvas.height) - 275 - 8 - this.posX, "quitGameQuestion", "#E65D6A");
                    addText(0, 25, 160, "center", canvas.width / 2 - 85, getSafeHeight(canvas.height) - 150 + 90 + this.butsY, "quit", "#FFFFFF");
                    addText(0, 25, 160, "center", canvas.width / 2 + 85, getSafeHeight(canvas.height) - 150 + 90 + this.butsY, "cancel", "#FFFFFF");
                    break;
                case "rotated":
                    var oRotateIconImgData = assetLib.getData("rotateIcon");
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(oRotateIconImgData.img, canvas.width / 2 - oRotateIconImgData.img.width / 2, canvas.height / 2 - oRotateIconImgData.img.height / 2);
                    break;
            }
            if(_butsOnTop) {
                this.addButs(ctx);
            }
        };
        Panel.prototype.renderCrowns = function () {
            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.crown].x;
            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.crown].y;
            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.crown].width;
            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.crown].height;
            if(saveDataHandler.getCurEnemy(0) == 5) {
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .43 - 214 + 50 + this.posY, canvas.height * .5 - 70 - 80, bWidth, bHeight);
            }
            if(saveDataHandler.getCurEnemy(1) == 5) {
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .43 + 50 + this.posY, canvas.height * .5 - 70 - 80, bWidth, bHeight);
            }
            if(saveDataHandler.getCurEnemy(2) == 5) {
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .43 + 214 + 50 + this.posY, canvas.height * .5 - 70 - 80, bWidth, bHeight);
            }
            if(saveDataHandler.getCurEnemy(3) == 5) {
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .43 - 107 + 50 + this.posY, canvas.height * .5 + 105 - 80, bWidth, bHeight);
            }
            if(saveDataHandler.getCurEnemy(4) == 5) {
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .43 + 107 + 50 + this.posY, canvas.height * .5 + 105 - 80, bWidth, bHeight);
            }
        };
        Panel.prototype.removeBut = function (_id) {
            for(var i = 0; i < this.aButs.length; i++) {
                if(this.aButs[i].id == _id) {
                    this.aButs.splice(i, 1);
                    i -= 1;
                }
            }
        };
        Panel.prototype.addButs = function (ctx) {
            var aButOver = false;
            for(var i = 0; i < this.aButs.length; i++) {
                if(this.aButs[i].isOver) {
                    aButOver = true;
                }
            }
            for(var i = 0; i < this.aButs.length; i++) {
                var offsetPosY;
                var floatY = 0;
                if(this.incY != 0 && this.aButs[i].flash) {
                    if(this.aButs[i].isOver) {
                        floatY = Math.sin((this.incY + i) * 2) * 3;
                    } else {
                        floatY = Math.sin(this.incY + i) * 3;
                    }
                }
                if(i % 2 == 0) {
                }
                if(!this.aButs[i].scale) {
                    this.aButs[i].scale = 1;
                }
                var bX;
                var bY;
                var bWidth;
                var bHeight;
                bX = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].x;
                bY = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].y;
                bWidth = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].width;
                bHeight = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].height;
                var aX;
                var aY;
                if(this.aButs[i].freeFloat) {
                    aX = canvas.width * this.aButs[i].align[0];
                    aY = canvas.height * this.aButs[i].align[1];
                } else {
                    aX = getSafeWidth(canvas.width * this.aButs[i].align[0]);
                    aY = getSafeHeight(canvas.height * this.aButs[i].align[1]);
                }
                if(aY + this.aButs[i].aPos[1] > canvas.height / 2) {
                    offsetPosY = this.butsY;
                } else {
                    offsetPosY = -this.butsY;
                }
                this.aButs[i].aOverData = new Array(aX + this.aButs[i].aPos[0] - (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] - (bHeight / 2) * (this.aButs[i].scale) + offsetPosY + floatY / 2, aX + this.aButs[i].aPos[0] + (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] + (bHeight / 2) * (this.aButs[i].scale) + offsetPosY + floatY / 2);
                if(this.aButs[i].isOver && this.aButs[i].flash) {
                    ctx.save();
                    ctx.translate(aX + this.aButs[i].aPos[0], aY + this.aButs[i].aPos[1]);
                    ctx.rotate(this.incY / 30);
                    ctx.scale(1 + Math.sin(this.incY) / 10, 1 + Math.sin(this.incY + 1) / 10);
                    ctx.globalAlpha = 1;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                    ctx.restore();
                }
                ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aOverData[0], this.aButs[i].aOverData[1], bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);
                if(this.aButs[i].isOver || this.aButs[i].flash) {
                    ctx.save();
                    if(this.aButs[i].isOver) {
                        ctx.globalAlpha = 1;
                    } else {
                        if(aButOver) {
                            ctx.globalAlpha = Math.max(Math.sin(this.incY / 2), 0) / 2;
                        } else {
                            ctx.globalAlpha = Math.max(Math.sin(this.incY / 2), 0);
                        }
                    }
                    bX = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].x;
                    bY = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].y;
                    bWidth = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].width;
                    bHeight = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].height;
                    ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aOverData[0], this.aButs[i].aOverData[1], bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);
                    ctx.restore();
                }
            }
        };
        return Panel;
    })();
    Elements.Panel = Panel;    
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var TextDisplay = (function () {
        function TextDisplay() {
            this.oTextData = {
            };
            this.inc = 0;
            this.createTextObjects();
        }
        TextDisplay.prototype.createTextObjects = function () {
            var cnt = 0;
            for(var i in assetLib.textData.langText.text[curLang]) {
                this.oTextData[i] = {
                };
                this.oTextData[i].aLineData = this.getCharData(assetLib.textData.langText.text[curLang][i]["@text"], assetLib.textData.langText.text[curLang][i]["@fontId"]);
                this.oTextData[i].aLineWidths = this.getLineWidths(this.oTextData[i].aLineData);
                this.oTextData[i].blockWidth = this.getBlockWidth(this.oTextData[i].aLineData);
                this.oTextData[i].blockHeight = this.getBlockHeight(this.oTextData[i].aLineData, assetLib.textData.langText.text[curLang][i]["@fontId"]);
                this.oTextData[i].lineHeight = parseInt(assetLib.textData["fontData" + assetLib.textData.langText.text[curLang][i]["@fontId"]].text.common["@lineHeight"]);
                this.oTextData[i].oFontImgData = assetLib.getData("font" + assetLib.textData.langText.text[curLang][i]["@fontId"]);
            }
        };
        TextDisplay.prototype.getLineWidths = function (_aCharData) {
            var lineLength;
            var aLineWidths = new Array();
            for(var i = 0; i < _aCharData.length; i++) {
                lineLength = 0;
                for(var j = 0; j < _aCharData[i].length; j++) {
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]);
                    if(j == 0) {
                        lineLength -= parseInt(_aCharData[i][j]["@xoffset"]);
                    } else if(j == _aCharData[i].length - 1) {
                        lineLength += parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                }
                aLineWidths.push(lineLength);
            }
            return aLineWidths;
        };
        TextDisplay.prototype.getBlockWidth = function (_aCharData) {
            var lineLength;
            var longestLineLength = 0;
            for(var i = 0; i < _aCharData.length; i++) {
                lineLength = 0;
                for(var j = 0; j < _aCharData[i].length; j++) {
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]);
                    if(j == 0) {
                        lineLength -= parseInt(_aCharData[i][j]["@xoffset"]);
                    } else if(j == _aCharData[i].length - 1) {
                        lineLength += parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                }
                if(lineLength > longestLineLength) {
                    longestLineLength = lineLength;
                }
            }
            return longestLineLength;
        };
        TextDisplay.prototype.getBlockHeight = function (_aCharData, _fontId) {
            return _aCharData.length * parseInt(assetLib.textData["fontData" + _fontId].text.common["@lineHeight"]);
        };
        TextDisplay.prototype.getCharData = function (_aLines, _fontId) {
            var aCharData = new Array();
            for(var k = 0; k < _aLines.length; k++) {
                aCharData[k] = new Array();
                for(var i = 0; i < _aLines[k].length; i++) {
                    for(var j = 0; j < assetLib.textData["fontData" + _fontId].text.chars.char.length; j++) {
                        if(_aLines[k][i].charCodeAt() == assetLib.textData["fontData" + _fontId].text.chars.char[j]["@id"]) {
                            aCharData[k].push(assetLib.textData["fontData" + _fontId].text.chars.char[j]);
                        }
                    }
                }
            }
            return aCharData;
        };
        TextDisplay.prototype.renderText = function (_oTextDisplayData) {
            var aLinesToRender = this.oTextData[_oTextDisplayData.text].aLineData;
            var oFontImgData = this.oTextData[_oTextDisplayData.text].oFontImgData;
            var shiftX;
            var offsetX = 0;
            var offsetY = 0;
            var lineOffsetY = 0;
            var manualScale = 1;
            var animY = 0;
            if(_oTextDisplayData.lineOffsetY) {
                lineOffsetY = _oTextDisplayData.lineOffsetY;
            }
            if(_oTextDisplayData.scale) {
                manualScale = _oTextDisplayData.scale;
            }
            var textScale = 1 * manualScale;
            if(_oTextDisplayData.maxWidth && this.oTextData[_oTextDisplayData.text].blockWidth * manualScale > _oTextDisplayData.maxWidth) {
                textScale = _oTextDisplayData.maxWidth / this.oTextData[_oTextDisplayData.text].blockWidth;
            }
            if(_oTextDisplayData.anim) {
                this.inc += delta * 7;
            }
            for(var i = 0; i < aLinesToRender.length; i++) {
                shiftX = 0;
                if(_oTextDisplayData.alignX == "centre") {
                    offsetX = this.oTextData[_oTextDisplayData.text].aLineWidths[i] / 2;
                }
                if(_oTextDisplayData.alignY == "centre") {
                    offsetY = this.oTextData[_oTextDisplayData.text].blockHeight / 2 + (lineOffsetY * (aLinesToRender.length - 1)) / 2;
                }
                for(var j = 0; j < aLinesToRender[i].length; j++) {
                    var bX = aLinesToRender[i][j]["@x"];
                    var bY = aLinesToRender[i][j]["@y"];
                    var bWidth = aLinesToRender[i][j]["@width"];
                    var bHeight = aLinesToRender[i][j]["@height"];
                    if(_oTextDisplayData.anim) {
                        animY = Math.sin(this.inc + j / 2) * ((bHeight / 15) * textScale);
                    }
                    ctx.drawImage(oFontImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x + (shiftX + parseInt(aLinesToRender[i][j]["@xoffset"]) - offsetX) * textScale, _oTextDisplayData.y + (parseInt(aLinesToRender[i][j]["@yoffset"]) + (i * this.oTextData[_oTextDisplayData.text].lineHeight) + (i * lineOffsetY) - offsetY) * textScale + animY, bWidth * textScale, bHeight * textScale);
                    shiftX += parseInt(aLinesToRender[i][j]["@xadvance"]);
                }
            }
        };
        return TextDisplay;
    })();
    Utils.TextDisplay = TextDisplay;    
})(Utils || (Utils = {}));
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Elements;
(function (Elements) {
    var Firework = (function (_super) {
        __extends(Firework, _super);
        function Firework(_oImgData, _animId, _shouldFall, _frameRate) {
            if (typeof _frameRate === "undefined") { _frameRate = 25; }
                _super.call(this, _oImgData, _frameRate, 45, _animId);
            this.setAnimType("once", _animId);
            this.shouldFall = _shouldFall;
            this.animEndedFunc = function () {
                this.removeMe = true;
            };
        }
        Firework.prototype.moveSideways = function (_dir) {
            if(_dir == "left") {
                TweenLite.to(this, (1 / this.fps) * this.oAnims[this.animId].length, {
                    x: this.x + 70 * this.scaleX,
                    ease: "Quad.easeOut"
                });
            } else if(_dir == "right") {
                TweenLite.to(this, (1 / this.fps) * this.oAnims[this.animId].length, {
                    x: this.x - 70 * this.scaleX,
                    ease: "Quad.easeOut"
                });
            }
        };
        Firework.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            if(this.shouldFall) {
                this.y += 100 * delta;
            }
        };
        Firework.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return Firework;
    })(Utils.AnimSprite);
    Elements.Firework = Firework;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Ball = (function () {
        function Ball() {
            this.rot = 0;
            this.height = 0;
            this.scale = 1;
            this.power = 0;
            this.maxSwipeLength = 30;
            this.shootState = 0;
            this.maxStartY = 560;
            this.minStartY = 360;
            this.leftPostX = -248;
            this.rightPostX = 248;
            this.crossBarY = -155;
            this.crossBarHeight = 191;
            this.bannerHeight = 41;
            this.fixedBallRadius = 80;
            this.ballScale = 1;
            this.powerAreaFrame = 0;
            this.powerAreaFrameInc = 0;
            this.powerRadius = 40;
            this.isGoldBall = false;
            this.showPowerArea = false;
            this.isSaved = false;
            this.hideMe = false;
            this.shownMissFar = false;
            this.shownSaved = false;
            this.curlXTarg = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oPowerAreaImgData = assetLib.getData("powerArea");
            this.oBallImgData = assetLib.getData("ball");
            this.oGoldBallImgData = assetLib.getData("goldBall");
            if(isMobile) {
                this.platformMultiplier = 1.0;
            } else {
                this.platformMultiplier = 1.0;
            }
            this.reset();
            this.setPowerArea();
        }
        Ball.prototype.killTweens = function () {
            if(this.jiggleTween) {
                this.jiggleTween.kill();
            }
            if(this.curlTween) {
                this.curlTween.kill();
            }
            if(this.ricochetTween) {
                this.ricochetTween.kill();
            }
            if(this.rollTween) {
                this.rollTween.kill();
            }
        };
        Ball.prototype.pause = function (_isOn) {
            if(_isOn) {
                if(this.jiggleTween && this.jiggleTween.isActive()) {
                    this.jiggleTween.pause();
                }
                if(this.curlTween && this.curlTween.isActive()) {
                    this.curlTween.pause();
                }
                if(this.ricochetTween && this.ricochetTween.isActive()) {
                    this.ricochetTween.pause();
                }
                if(this.rollTween && this.rollTween.isActive()) {
                    this.rollTween.pause();
                }
            } else {
                if(this.jiggleTween && this.jiggleTween.paused()) {
                    this.jiggleTween.resume();
                }
                if(this.curlTween && this.curlTween.paused()) {
                    this.curlTween.resume();
                }
                if(this.ricochetTween && this.ricochetTween.paused()) {
                    this.ricochetTween.resume();
                }
                if(this.rollTween && this.rollTween.paused()) {
                    this.rollTween.resume();
                }
            }
        };
        Ball.prototype.reset = function () {
            if(this.jiggleTween) {
                this.jiggleTween.kill();
            }
            if(this.curlTween) {
                this.curlTween.kill();
            }
            if(this.ricochetTween) {
                this.ricochetTween.kill();
            }
            if(this.rollTween) {
                this.rollTween.kill();
            }
            this.hideMe = false;
            this.shootState = 0;
            this.power = 0;
            this.scale = 1;
            this.shadowAlpha = 0;
            this.height = 0;
            this.aTouchData = new Array();
            this.hitLeftPost = false;
            this.hitRightPost = false;
            this.hitCrossBar = false;
            this.inGoal = false;
            wipe.inGoal = false;
            this.hitBackOfNet = false;
            this.hitSideOfNet = false;
            this.trailInc = 0;
            this.aTrail = new Array();
            this.ballFrame = 0;
            this.rot = 0;
            this.initialRot = 0;
            this.incX = 0;
            this.incY = 0;
            this.ballScale = 1;
            this.ballFrameTarg = 0;
            this.powerAreaFrame = 0;
            this.powerAreaFrameInc = 0;
            this.isSaved = false;
            this.hasHitPowerArea = false;
            oGameData.ballInPlay = false;
            if(Math.random() > .75) {
                this.showPowerArea = true;
                this.setPowerArea();
            } else {
                if(this.showPowerArea) {
                    this.hidePowerArea();
                }
            }
            if(hud.powerMaxxed) {
                this.isGoldBall = true;
                hud.powerMaxxed = false;
            } else {
                this.isGoldBall = false;
            }
            this.ballRollX = -500;
            this.rollTween = TweenLite.to(this, .7, {
                ballRollX: 0,
                ease: "Cubic.easeOut"
            });
        };
        Ball.prototype.setPowerArea = function () {
            this.powerAreaScale = 0;
            TweenLite.to(this, 2, {
                powerAreaScale: 1,
                ease: "Elastic.easeOut"
            });
            var temp = Math.random() * 3;
            if(temp > 2) {
                this.powerAreaX = -203;
                this.powerAreaY = Math.random() * 105 + 10;
            } else if(temp > 1) {
                this.powerAreaX = 203;
                this.powerAreaY = Math.random() * 105 + 10;
            } else {
                this.powerAreaX = Math.random() * 406 - 203;
                this.powerAreaY = 115;
            }
            this.hasHitPowerArea = false;
        };
        Ball.prototype.hidePowerArea = function () {
            var _this = this;
            TweenLite.to(this, .5, {
                powerAreaScale: 0,
                ease: "Back.easeIn",
                onComplete: function () {
                    _this.showPowerArea = false;
                }
            });
        };
        Ball.prototype.ballJiggle = function (_inc) {
            if(this.jiggleTween) {
                this.jiggleTween.kill();
            }
            this.initialRot = 0;
            this.ballScale = _inc;
            this.jiggleTween = TweenLite.to(this, 1, {
                ballScale: 1,
                ease: "Elastic.easeOut"
            });
        };
        Ball.prototype.ballKickStretch = function () {
            if(this.jiggleTween) {
                this.jiggleTween.kill();
            }
            this.ballScale = .5;
            this.jiggleTween = TweenLite.to(this, .3, {
                ballScale: 1,
                ease: "Quad.easeOut"
            });
        };
        Ball.prototype.isForwardKick = function () {
            var b = 0;
            for(var i = 0; i < this.aTouchData.length - 1; i++) {
                b += this.aTouchData[i + 1].y - this.aTouchData[i].y;
            }
            if(b < 0) {
                return true;
            } else {
                return false;
            }
        };
        Ball.prototype.shootPrep = function () {
            var a;
            var b;
            for(var i = 0; i < this.aTouchData.length - 1; i++) {
                a = this.aTouchData[i + 1].x - this.aTouchData[i].x;
                b = this.aTouchData[i + 1].y - this.aTouchData[i].y;
                this.power += Math.sqrt(a * a + b * b);
            }
            this.power = this.power / ((oGameData.swipeTime / this.aTouchData.length) * 100) * 1.4;
            a = this.aTouchData[0].x - this.aTouchData[Math.min(Math.round(this.maxSwipeLength / 2), this.aTouchData.length - 1)].x;
            b = this.aTouchData[0].y - this.aTouchData[Math.min(Math.round(this.maxSwipeLength / 2), this.aTouchData.length - 1)].y;
            this.shootAngle = Math.atan2(b, a);
            this.power *= (this.maxSwipeLength / this.aTouchData.length);
            this.power = Math.min(this.power + 1200, 4000) * this.platformMultiplier;
            if(this.isGoldBall) {
                this.power = 4000;
                playSound("powerKick");
            } else {
                playSound("kick" + Math.floor(Math.random() * 3));
            }
            this.incX = Math.cos(this.shootAngle) * -this.power;
            this.incY = (Math.sin(this.shootAngle) * -this.power) * Math.min(((this.startY - canvas.height / 2) / (this.maxStartY - canvas.height / 2)), 1);
            oGameData.ballInPlay = true;
            hud.heroKick.takeShot(Math.cos(this.shootAngle), this.incY);
        };
        Ball.prototype.shoot = function () {
            if(this.rollTween) {
                this.rollTween.kill();
                this.ballRollX = 0;
                this.x = canvas.width / 2 + this.ballRollX;
            }
            this.initialRot = (this.shootAngle - (90 * radian)) / 2;
            this.ballKickStretch();
            this.incHeight = Math.max((this.power - 500) * 1.2, Math.random() * 200 + 800) * (.5 + ((90 - (Math.abs((this.shootAngle / radian) - 90))) / 90) / 2);
            if(this.isGoldBall) {
                this.incHeight = 2000;
            }
            if(this.incHeight > 2100) {
            }
            var a = this.aTouchData[Math.min(Math.round(this.aTouchData.length / 2), this.aTouchData.length - 1)].x - this.aTouchData[this.aTouchData.length - 1].x;
            var b = this.aTouchData[Math.min(Math.round(this.aTouchData.length / 2), this.aTouchData.length - 1)].y - this.aTouchData[this.aTouchData.length - 1].y;
            var tempCurl = Math.atan2(b, a) - this.shootAngle;
            if(tempCurl > 180 * radian) {
                tempCurl -= 360 * radian;
            } else if(tempCurl < -180 * radian) {
                tempCurl += 360 * radian;
            }
            tempCurl *= (Math.max(this.incHeight - 700, 0));
            if(this.curlTween) {
                this.curlTween.kill();
            }
            this.curlX = 0;
            this.curlXTarg = Math.max(Math.min(tempCurl, 1200), -1200);
            this.curlTween = TweenLite.to(this, .3, {
                delay: .1,
                curlX: this.curlXTarg,
                ease: "Quad.easeIn"
            });
            this.shootState = 1;
            this.aTrail.push({
                x: this.x,
                y: this.y,
                scale: this.scale
            });
            screenShake(10);
            addExplosion(0, this.x, this.y - this.height * this.scale, 3);
            if(this.isGoldBall) {
                addSpray("left", canvas.width / 2 + 160, canvas.height - 46, 2);
                addSpray("right", canvas.width / 2 - 160, canvas.height - 46, 2);
            }
        };
        Ball.prototype.update = function () {
            var _this = this;
            if(this.shootState == 0) {
                this.x = canvas.width / 2 + this.ballRollX;
                this.y = this.startY = getSafeHeight(canvas.height) - 50;
                this.ballRadius = this.fixedBallRadius * this.scale;
                this.ballScale = 1;
            } else if(this.shootState == 1) {
                this.x += (this.incX * this.scale * this.scale) * delta;
                this.y += (this.incY * this.scale * this.scale) * delta;
                this.x += (this.curlX * this.scale) * delta;
                if(!this.isGoldBall || (this.isGoldBall && this.y < canvas.height / 2 + 35)) {
                    this.incHeight -= 4000 * delta;
                }
                this.height += this.incHeight * delta;
                if(this.height <= 0) {
                    this.height = 0;
                    this.incHeight *= -.6;
                    var temp = 1 - this.incHeight / 7000;
                    if(this.incHeight > 200) {
                        playSound("bounce" + Math.floor(Math.random() * 5));
                    }
                    if(temp < .95) {
                        this.ballJiggle(temp);
                    }
                }
                this.scale = (this.y - (canvas.height / 2 + 25)) / (this.startY - (canvas.height / 2 + 25)) * .75 + .25;
                this.trailInc += delta;
                if(this.trailInc > .05) {
                    if(this.aTrail.length > 10) {
                        this.aTrail.shift();
                    }
                    this.aTrail.push({
                        x: this.x,
                        y: this.y - this.height * this.scale,
                        scale: this.scale
                    });
                    this.trailInc = 0;
                }
                this.shadowAlpha = Math.floor(Math.min((this.height) / 500, .9) * 10);
                this.ballRadius = this.fixedBallRadius * this.scale;
                if(!this.hitLeftPost && !this.isSaved && !wipe.canDisplay && this.y < canvas.height / 2 + 35 - this.ballRadius && this.y > canvas.height / 2 + 30 - this.ballRadius && this.height * this.scale + this.ballRadius < this.crossBarHeight && this.x > canvas.width / 2 + this.leftPostX - (this.ballRadius + 5) && this.x < canvas.width / 2 + this.leftPostX + (this.ballRadius + 5)) {
                    playSound("hitBar");
                    var reboundAngle = (((canvas.width / 2 + this.leftPostX) - this.x) / (this.ballRadius + 5) + .5) * 180 - (90 - this.shootAngle / radian) / 10;
                    addFirework(0, canvas.width / 2 + this.leftPostX - (((canvas.width / 2 + this.leftPostX) - this.x) / (this.ballRadius + 5)) * 10, this.y - this.height * this.scale + this.ballRadius, .3, false);
                    this.incX = (this.power * Math.cos(reboundAngle * radian)) * 4;
                    this.incY = (this.power * Math.sin(reboundAngle * radian));
                    if(this.incY > 0) {
                        this.incY *= .1;
                    } else {
                        this.incY *= .6;
                    }
                    this.x += (this.incX * this.scale * this.scale) * delta;
                    this.y += (this.incY * this.scale * this.scale) * delta;
                    this.hitLeftPost = true;
                    if(this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    this.isGoldBall = false;
                    this.ricochetTween = TweenLite.to(this, 2, {
                        incX: this.incX * .25,
                        incY: this.incY * .25,
                        curlX: 0,
                        ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if(!this.hitRightPost && !this.isSaved && !wipe.canDisplay && this.y < canvas.height / 2 + 35 - this.ballRadius && this.y > canvas.height / 2 + 30 - this.ballRadius && this.height * this.scale + this.ballRadius < this.crossBarHeight && this.x > canvas.width / 2 + this.rightPostX - (this.ballRadius + 5) && this.x < canvas.width / 2 + this.rightPostX + (this.ballRadius + 5)) {
                    playSound("hitBar");
                    var reboundAngle = (((canvas.width / 2 + this.rightPostX) - this.x) / (this.ballRadius + 5) + .5) * 180 - (90 - this.shootAngle / radian) / 10;
                    addFirework(0, canvas.width / 2 + this.rightPostX - (((canvas.width / 2 + this.rightPostX) - this.x) / (this.ballRadius + 5)) * 10, this.y - this.height * this.scale + this.ballRadius, .3, false);
                    this.incX = (this.power * Math.cos(reboundAngle * radian)) * 4;
                    this.incY = (this.power * Math.sin(reboundAngle * radian));
                    if(this.incY > 0) {
                        this.incY *= .1;
                    } else {
                        this.incY *= .6;
                    }
                    this.x += (this.incX * this.scale * this.scale) * delta;
                    this.y += (this.incY * this.scale * this.scale) * delta;
                    this.hitRightPost = true;
                    if(this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    this.isGoldBall = false;
                    this.ricochetTween = TweenLite.to(this, 2, {
                        incX: this.incX * .25,
                        incY: this.incY * .25,
                        curlX: 0,
                        ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if(!this.isSaved && !this.inGoal && !wipe.canDisplay && this.y < canvas.height / 2 + 32 - this.ballRadius && this.y > canvas.height / 2 + 26 - this.ballRadius && this.height * this.scale + this.ballRadius < this.crossBarHeight - this.ballRadius && this.x > canvas.width / 2 + this.leftPostX + (this.ballRadius) && this.x < canvas.width / 2 + this.rightPostX - (this.ballRadius)) {
                    addGoalMarker(0, this.x, this.y - this.height * this.scale, this.scale);
                    this.inGoal = true;
                    wipe.inGoal = true;
                    playSound("heroScore");
                    playSound("crowdGood" + Math.floor(Math.random() * 3));
                    if(this.x > (canvas.width / 2 + this.powerAreaX) - 38 && this.x < (canvas.width / 2 + this.powerAreaX) + 38 && (this.y - this.height * this.scale) > (canvas.height / 2 - this.powerAreaY) - 38 && (this.y - this.height * this.scale) < (canvas.height / 2 - this.powerAreaY) + 38 && this.showPowerArea) {
                        this.hasHitPowerArea = true;
                        TweenLite.to(this, .5, {
                            powerAreaX: -canvas.width / 2 + 50,
                            powerAreaY: canvas.height / 2 - 30,
                            powerAreaScale: .5,
                            ease: "Back.easeIn",
                            onComplete: function () {
                                _this.powerAreaScale = 0;
                                oGameData.curTime += 500;
                                addFirework(0, 50, 30, 1);
                                hud.jiggleTimer();
                            }
                        });
                    }
                    userScored();
                    this.isGoldBall = false;
                }
                if(!this.hitLeftPost && !this.hitRightPost && !this.isSaved && !this.inGoal && !wipe.canDisplay && this.y < canvas.height / 2 + 35 - this.ballRadius && this.y > canvas.height / 2 + 30 - this.ballRadius && this.height * this.scale + this.ballRadius < this.crossBarHeight - this.ballRadius && this.x > canvas.width / 2 + this.leftPostX + (this.ballRadius) && this.x < canvas.width / 2 + this.rightPostX - (this.ballRadius) && enemySave.checkBallHit(this.x, this.y - this.height * this.scale)) {
                    playSound("enemySave");
                    playSound("crowdBad" + Math.floor(Math.random() * 2));
                    this.isSaved = true;
                    addExplosion(0, this.x, this.y - this.height * this.scale + this.ballRadius, 1);
                    this.incY = -this.incY / 5;
                    this.incX *= 5;
                    this.isGoldBall = false;
                    if(this.x > (canvas.width / 2 + this.powerAreaX) - 38 && this.x < (canvas.width / 2 + this.powerAreaX) + 38 && (this.y - this.height * this.scale) > (canvas.height / 2 - this.powerAreaY) - 38 && (this.y - this.height * this.scale) < (canvas.height / 2 - this.powerAreaY) + 38 && this.showPowerArea) {
                        this.hasHitPowerArea = true;
                        TweenLite.to(this, .5, {
                            powerAreaX: -canvas.width / 2 + 50,
                            powerAreaY: canvas.height / 2 - 30,
                            powerAreaScale: .5,
                            ease: "Back.easeIn",
                            onComplete: function () {
                                _this.powerAreaScale = 0;
                                oGameData.curTime += 500;
                                addFirework(0, 50, 30, 1);
                                hud.jiggleTimer();
                            }
                        });
                    }
                    if(this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    if(this.hasHitPowerArea) {
                        hud.showTextEvent("bonusTime");
                    } else if(!this.shownSaved) {
                        hud.showTextEvent("shotSaved");
                        this.shownSaved = true;
                    }
                    if(!this.hideMe) {
                        this.ricochetTween = TweenLite.to(this, 1.5, {
                            incY: this.incY * .25,
                            curlX: 0,
                            ease: "Quad.easeIn",
                            onComplete: function () {
                                wipe.trigger(resetShooting);
                                return;
                            }
                        });
                    } else {
                        this.ricochetTween = TweenLite.to(this, 1, {
                            incY: this.incY * .25,
                            curlX: 0,
                            ease: "Quad.easeIn",
                            onComplete: function () {
                                if(!_this.shownSaved) {
                                    hud.showTextEvent("shotSaved");
                                    _this.shownSaved = true;
                                }
                                wipe.trigger(resetShooting);
                                return;
                            }
                        });
                    }
                }
                if(!this.hitBackOfNet && !wipe.canDisplay && this.inGoal && this.y < (canvas.height / 2 + 18) - this.ballRadius) {
                    this.hitBackOfNet = true;
                    this.incY = 0;
                    this.incHeight = 0;
                    if(this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    if(this.curlTween) {
                        this.curlTween.kill();
                    }
                    this.curlX = 0;
                    this.isGoldBall = false;
                    this.ricochetTween = TweenLite.to(this, 1, {
                        incX: this.incX * .25,
                        curlX: 0,
                        ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if(!this.hitSideOfNet && !wipe.canDisplay && this.inGoal && this.x < canvas.width / 2 + this.leftPostX + 36) {
                    this.hitSideOfNet = true;
                    if(this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    this.incX = Math.abs(this.incX);
                    this.y += (this.incY * this.scale * this.scale) * delta;
                    if(this.curlTween) {
                        this.curlTween.kill();
                    }
                    this.curlX = 0;
                    this.isGoldBall = false;
                    this.ricochetTween = TweenLite.to(this, 1, {
                        incX: this.incX * .25,
                        curlX: 0,
                        ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if(!this.hitSideOfNet && !wipe.canDisplay && this.inGoal && this.x > canvas.width / 2 + this.rightPostX - 36) {
                    this.hitSideOfNet = true;
                    if(this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    this.incX = Math.abs(this.incX) * -1;
                    this.x += (this.incX * this.scale * this.scale) * delta;
                    if(this.curlTween) {
                        this.curlTween.kill();
                    }
                    this.curlX = 0;
                    this.isGoldBall = false;
                    this.ricochetTween = TweenLite.to(this, 1, {
                        incX: this.incX * .25,
                        curlX: 0,
                        ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if(!this.hitCrossBar && !this.isSaved && !wipe.canDisplay && this.y < canvas.height / 2 + 35 - this.ballRadius && this.y > canvas.height / 2 + 30 - this.ballRadius && this.height * this.scale + this.ballRadius > this.crossBarHeight - (this.ballRadius + 5) && this.height * this.scale + this.ballRadius < this.crossBarHeight + (this.ballRadius + 5) && this.x > canvas.width / 2 + this.leftPostX && this.x < canvas.width / 2 + this.rightPostX) {
                    this.hitCrossBar = true;
                    playSound("hitBar");
                    var reboundAngle = ((this.crossBarHeight) - (this.height * this.scale + this.ballRadius)) / (this.ballRadius + 5);
                    addFirework(0, this.x, canvas.height / 2 + this.crossBarY + reboundAngle * 10, .3, false);
                    this.isGoldBall = false;
                    if(Math.abs(reboundAngle) > .5) {
                        this.incY *= ((Math.abs(reboundAngle) - .5) / .5) * .6 + .1;
                        if(reboundAngle > 0) {
                            this.incHeight += ((.5 - reboundAngle) + .5 + .1) * -8000;
                        } else {
                            this.incHeight += (.5 + (reboundAngle + .5) + .1) * 5000;
                        }
                    } else {
                        this.incY *= -(1 - (Math.abs(reboundAngle)) / .5) * .1 - .1;
                        if(reboundAngle > 0) {
                            this.incHeight += ((reboundAngle) - .1) * -8000;
                        } else {
                            this.incHeight += (reboundAngle - .1) * 5000;
                        }
                    }
                    this.y += (this.incY * this.scale * this.scale) * delta;
                    if(this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    this.ricochetTween = TweenLite.to(this, 2, {
                        incY: this.incY * .25,
                        curlX: 0,
                        ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if(this.inGoal && this.height * this.scale + this.ballRadius > this.crossBarHeight - this.ballRadius) {
                    this.incHeight *= -1;
                }
                if(!this.inGoal && !this.isSaved && !wipe.canDisplay && ((this.y < canvas.height / 2 - this.ballRadius + 10 && this.height * this.scale < this.bannerHeight) || this.x > canvas.width + 100 || this.x < -100)) {
                    playSound("missShotWipe");
                    wipe.trigger(resetShooting);
                    return;
                }
            }
        };
        Ball.prototype.render = function () {
            if(!this.inGoal && this.y < canvas.height / 2 + 30 - this.ballRadius) {
                this.renderBall();
                this.renderGoal();
                enemySave.render();
                this.renderPowerArea();
            } else {
                if(this.y < canvas.height / 2 + 30 - this.ballRadius) {
                    this.renderGoal();
                    this.renderBall();
                    enemySave.render();
                    this.renderPowerArea();
                } else {
                    this.renderGoal();
                    enemySave.render();
                    this.renderPowerArea();
                    this.renderBall();
                }
            }
            var tempRot0;
            var tempRot1;
            var temp90 = 90 * radian;
            var hyp0;
            var hyp1;
            var a;
            var b;
            if(this.aTouchData.length > 1) {
                for(var i = 0; i < this.aTouchData.length - 1; i++) {
                    if(this.aTouchData[i].alpha > 0) {
                        a = this.aTouchData[i + 1].x - this.aTouchData[i].x;
                        b = this.aTouchData[i + 1].y - this.aTouchData[i].y;
                        tempRot0 = Math.atan2(b, a);
                        hyp0 = Math.sin(((i / this.aTouchData.length) * 180) * radian) * (80 * this.aTouchData[i].alpha);
                        if(i < this.aTouchData.length - 2) {
                            a = this.aTouchData[i + 2].x - this.aTouchData[i + 1].x;
                            b = this.aTouchData[i + 2].y - this.aTouchData[i + 1].y;
                            tempRot1 = Math.atan2(b, a);
                            hyp1 = Math.sin((((i + 1) / this.aTouchData.length) * 180) * radian) * (80 * this.aTouchData[i + 1].alpha);
                        } else {
                            tempRot1 = tempRot0;
                            hyp1 = 0;
                        }
                        ctx.fillStyle = "rgba(0, 0, 0, " + this.aTouchData[i].alpha + ")";
                        ctx.beginPath();
                        hyp1 = hyp0 = 20;
                        ctx.moveTo(this.aTouchData[i].x - hyp0, this.aTouchData[i].y + shakeY);
                        ctx.lineTo(this.aTouchData[i + 1].x - hyp1, this.aTouchData[i + 1].y + shakeY);
                        ctx.lineTo(this.aTouchData[i + 1].x + hyp1, this.aTouchData[i + 1].y + shakeY);
                        ctx.lineTo(this.aTouchData[i].x + hyp0, this.aTouchData[i].y + shakeY);
                        ctx.lineTo(this.aTouchData[i].x - hyp0, this.aTouchData[i].y + shakeY);
                        ctx.closePath();
                        ctx.fill();
                        this.aTouchData[i].alpha -= delta * .5;
                    }
                }
            }
        };
        Ball.prototype.renderBall = function () {
            if(!this.hideMe) {
                if(this.aTrail.length > 1) {
                    var tempRot0;
                    var tempRot1;
                    var temp90 = 90 * radian;
                    var hyp0;
                    var hyp1;
                    var a;
                    var b;
                    for(var i = 0; i < this.aTrail.length - 1; i++) {
                        a = this.aTrail[i + 1].x - this.aTrail[i].x;
                        b = this.aTrail[i + 1].y - this.aTrail[i].y;
                        tempRot0 = Math.atan2(b, a);
                        hyp0 = this.aTrail[i].scale * 80;
                        if(i < this.aTrail.length - 2) {
                            a = this.aTrail[i + 2].x - this.aTrail[i + 1].x;
                            b = this.aTrail[i + 2].y - this.aTrail[i + 1].y;
                            tempRot1 = Math.atan2(b, a);
                        } else {
                            tempRot1 = tempRot0;
                        }
                        hyp1 = this.aTrail[i + 1].scale * 80;
                        if(!this.isGoldBall) {
                            ctx.fillStyle = "rgba(255, 255, 255, " + i / this.aTrail.length + ")";
                        } else {
                            var tempAlpha = 1;
                            if(i < this.aTrail.length / 2) {
                                tempAlpha = (i / this.aTrail.length) * 2;
                            }
                            ctx.fillStyle = "rgba(255, 238, 0, " + tempAlpha + ")";
                        }
                        ctx.beginPath();
                        ctx.moveTo(this.aTrail[i].x - hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y - hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                        ctx.lineTo(this.aTrail[i + 1].x - hyp1 * Math.cos(tempRot1 + temp90), this.aTrail[i + 1].y - hyp1 * Math.sin(tempRot1 + temp90) + shakeY);
                        ctx.lineTo(this.aTrail[i + 1].x + hyp1 * Math.cos(tempRot1 + temp90), this.aTrail[i + 1].y + hyp1 * Math.sin(tempRot1 + temp90) + shakeY);
                        ctx.lineTo(this.aTrail[i].x + hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y + hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                        ctx.lineTo(this.aTrail[i].x - hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y - hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
                if(this.y > canvas.height / 2) {
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2) * this.scale, this.y - (bHeight / 2) * this.scale + this.ballRadius + shakeY, bWidth * this.scale, bHeight * this.scale);
                }
                this.ballFrameTarg = this.ballFrameTarg - Math.max(Math.min((this.incY / 1000), 1), -1);
                this.ballFrame = Math.round(this.ballFrameTarg);
                if(this.ballFrame > 7) {
                    this.ballFrame -= 8;
                    this.ballFrameTarg -= 8;
                } else if(this.ballFrame < 0) {
                    this.ballFrame += 8;
                    this.ballFrameTarg += 8;
                }
                this.rot = (this.x - canvas.width / 2) / (10 + this.scale * 100);
                var curBallType = this.oBallImgData;
                if(this.isGoldBall) {
                    curBallType = this.oGoldBallImgData;
                }
                ctx.save();
                ctx.translate(this.x, this.y - this.height * this.scale);
                ctx.rotate(this.initialRot);
                ctx.scale(this.ballScale, (1 + (1 - this.ballScale)));
                ctx.rotate(this.rot);
                var imgX = (this.ballFrame * curBallType.oData.spriteWidth) % curBallType.img.width;
                var imgY = Math.floor(this.ballFrame / (curBallType.img.width / curBallType.oData.spriteWidth)) * curBallType.oData.spriteHeight;
                ctx.drawImage(curBallType.img, imgX, imgY, curBallType.oData.spriteWidth, curBallType.oData.spriteHeight, -(curBallType.oData.spriteWidth / 2) * this.scale, -(curBallType.oData.spriteHeight / 2) * this.scale + shakeY, curBallType.oData.spriteWidth * this.scale, curBallType.oData.spriteHeight * this.scale);
                ctx.restore();
                if(!this.isGoldBall) {
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2) * this.scale, this.y - (bHeight / 2 - 2) * this.scale - this.height * this.scale + shakeY, bWidth * this.scale, bHeight * this.scale);
                } else {
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goldBallUnderShadow].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goldBallUnderShadow].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goldBallUnderShadow].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goldBallUnderShadow].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2) * this.scale, this.y - (bHeight / 2) * this.scale - this.height * this.scale + shakeY, bWidth * this.scale, bHeight * this.scale);
                }
            }
        };
        Ball.prototype.renderPowerArea = function () {
            if(this.showPowerArea) {
                this.powerAreaFrameInc += delta * 15;
                var tempScale = Math.sin(this.powerAreaFrameInc) / 20 + 1;
                this.powerAreaFrame = Math.floor(this.powerAreaFrameInc) % 9;
                var imgX = (this.powerAreaFrame * this.oPowerAreaImgData.oData.spriteWidth) % this.oPowerAreaImgData.img.width;
                var imgY = Math.floor(this.powerAreaFrame / (this.oPowerAreaImgData.img.width / this.oPowerAreaImgData.oData.spriteWidth)) * this.oPowerAreaImgData.oData.spriteHeight;
                ctx.drawImage(this.oPowerAreaImgData.img, imgX, imgY, this.oPowerAreaImgData.oData.spriteWidth, this.oPowerAreaImgData.oData.spriteHeight, canvas.width / 2 + this.powerAreaX - (this.oPowerAreaImgData.oData.spriteWidth / 2) * tempScale * this.powerAreaScale, canvas.height / 2 - this.powerAreaY - (this.oPowerAreaImgData.oData.spriteHeight / 2) * (1 + (1 - tempScale)) * this.powerAreaScale + shakeY, this.oPowerAreaImgData.oData.spriteWidth * tempScale * this.powerAreaScale, this.oPowerAreaImgData.oData.spriteHeight * (1 + (1 - tempScale)) * this.powerAreaScale);
            }
        };
        Ball.prototype.renderGoal = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.shootingGoal].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.shootingGoal].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.shootingGoal].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.shootingGoal].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height / 2 - bHeight + 46 + shakeY, bWidth, bHeight);
        };
        return Ball;
    })();
    Elements.Ball = Ball;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Hud = (function () {
        function Hud() {
            this.scoreNumberSpace = 48;
            this.userScoreY = 0;
            this.enemyScoreY = 0;
            this.prevSecs = 0;
            this.timerNumberSpace = 38;
            this.beepTimeTarg = 600;
            this.powerBarY = 0;
            this.timerY = 0;
            this.powerMaxxed = false;
            this.textResultX = -1000;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oScoreNumbersImgData = assetLib.getData("scoreNumbers");
            this.oTimeNumbersImgData = assetLib.getData("timeNumbers");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.heroKick = new Elements.HeroKick(assetLib.getData("heroKick" + userStrikerId));
            if(firstRun) {
                this.tutorial = new Elements.Tutorial(assetLib.getData("tut0"), 0);
            }
            if(levelNum == 0) {
                this.powerInc = .25;
            } else if(levelNum == 1) {
                this.powerInc = .20;
            } else {
                this.powerInc = .15;
            }
        }
        Hud.prototype.update = function () {
        };
        Hud.prototype.jiggleUserScore = function () {
            var _this = this;
            if(this.scoreTween) {
                this.scoreTween.kill();
            }
            this.scoreTween = TweenLite.to(this, .1, {
                userScoreY: -50,
                ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.scoreTween = TweenLite.to(_this, 1, {
                        userScoreY: 0,
                        ease: "Elastic.easeOut",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        Hud.prototype.showTextEvent = function (_eventText) {
            var _this = this;
            if(this.textResultTween) {
                this.textResultTween.kill();
            }
            this.eventText = _eventText;
            this.textResultX = -300;
            this.textResultTween = TweenLite.to(this, .3, {
                delay: .5,
                textResultX: 0,
                ease: "Back.easeOut",
                onComplete: function () {
                    _this.textResultTween = TweenLite.to(_this, .3, {
                        delay: 1.5,
                        textResultX: -300,
                        ease: "Back.easeIn",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        Hud.prototype.jiggleTimer = function () {
            var _this = this;
            if(this.scoreTween) {
                this.scoreTween.kill();
            }
            playSound("bonusTime");
            this.scoreTween = TweenLite.to(this, .1, {
                timerY: -50,
                ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.scoreTween = TweenLite.to(_this, 1, {
                        timerY: 0,
                        ease: "Elastic.easeOut",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        Hud.prototype.increasePowerBar = function () {
            var _this = this;
            this.powerBarY = -10;
            TweenLite.to(this, .5, {
                powerBarY: 0,
                ease: "Elastic.easeOut"
            });
            if(oGameData.power >= 1 - this.powerInc) {
                this.powerMaxxed = true;
                playSound("powerBarFull");
            } else {
                playSound("powerBarUp");
            }
            TweenLite.to(oGameData, .5, {
                power: Math.min(oGameData.power + this.powerInc, 1),
                ease: "Bounce.easeOut",
                onComplete: function () {
                    if(oGameData.power >= 1) {
                        _this.powerBarY = -100;
                        for(var i = 0; i < 5; i++) {
                            addFirework(0, canvas.width / 2 - 100 + i * (200 / 4), Math.random() * 100 - 30, Math.random() * .5 + 1);
                        }
                        oGameData.power = 0;
                        TweenLite.to(_this, 1, {
                            delay: .5,
                            powerBarY: 0,
                            ease: "Back.easeOut"
                        });
                    }
                }
            });
        };
        Hud.prototype.render = function () {
            if(oGameData.curTime > 500 || Math.round(oGameData.curTime / 25) % 2 == 0) {
                if(oGameData.curTime <= this.beepTimeTarg) {
                    playSound("beep");
                    this.beepTimeTarg -= 100;
                }
                var id;
                var mins = Math.floor(oGameData.curTime / 6000).toString();
                var tempX = getSafeWidth(0) + 6;
                var tempY = getSafeHeight(0) + 6 + this.timerY;
                var secs = Math.floor((oGameData.curTime - Math.floor(oGameData.curTime / 6000) * 6000) / 100).toString();
                if(secs.length < 2) {
                    secs = "0" + secs;
                }
                var tenths = oGameData.curTime.toString().charAt(oGameData.curTime.toString().length - 2) + oGameData.curTime.toString().charAt(oGameData.curTime.toString().length - 1);
                if(tenths.length < 2) {
                    tenths = "0" + tenths;
                }
                for(var i = 0; i < 2; i++) {
                    id = parseFloat(mins.charAt(i));
                    if(mins.length < 2) {
                        if(i == 0) {
                            continue;
                        } else {
                            id = parseFloat(mins.charAt(0));
                        }
                    }
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                }
                id = 10;
                var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 30, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                for(var i = 0; i < 2; i++) {
                    id = parseFloat(secs.charAt(i));
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 59 + i * this.timerNumberSpace, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                }
                for(var i = 0; i < 2; i++) {
                    id = parseFloat(tenths.charAt(i));
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 140 + i * this.timerNumberSpace * .6, tempY, this.oTimeNumbersImgData.oData.spriteWidth * .6, this.oTimeNumbersImgData.oData.spriteHeight * .6);
                }
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + userStrikerId]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + userStrikerId]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + userStrikerId]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + userStrikerId]].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0) + 50 - bWidth / 2 - this.userScoreY + aStrikerHeadIconOffsets[userStrikerId].x, getSafeHeight(canvas.height) - 75 - bHeight / 2 + this.userScoreY + aStrikerHeadIconOffsets[userStrikerId].y, bWidth, bHeight);
            var tempScore = oGameData.heroScore.toString();
            var tempScale = 1;
            for(var i = 0; i < tempScore.length; i++) {
                var id = parseFloat(tempScore.charAt(i));
                var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, getSafeWidth(0) + 120 + i * (this.scoreNumberSpace * tempScale) - this.userScoreY + aStrikerHeadIconOffsets[userStrikerId].x, getSafeHeight(canvas.height) - 100 + this.userScoreY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + enemyGoalieId]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + enemyGoalieId]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + enemyGoalieId]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + enemyGoalieId]].height;
            ctx.save();
            ctx.translate(getSafeWidth(canvas.width) - 50 + this.enemyScoreY + aGoalieHeadIconOffsets[enemyGoalieId].x, getSafeHeight(canvas.height) - 75 + this.enemyScoreY + aGoalieHeadIconOffsets[enemyGoalieId].y);
            ctx.scale(-1, 1);
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
            ctx.restore();
            tempScore = oGameData.enemyScore.toString();
            tempScale = 1;
            for(var i = 0; i < tempScore.length; i++) {
                var id = parseFloat(tempScore.charAt(i));
                var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, getSafeWidth(canvas.width) - 120 + i * (this.scoreNumberSpace * tempScale) - ((tempScore.length + .5) * this.scoreNumberSpace) + aGoalieHeadIconOffsets[enemyGoalieId].x, getSafeHeight(canvas.height) - 100 + this.enemyScoreY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarBg].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarBg].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarBg].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarBg].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, getSafeHeight(0) + 32 - bHeight / 2 + this.powerBarY, bWidth, bHeight);
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBar].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBar].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBar].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBar].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth * oGameData.power + 1, bHeight, canvas.width / 2 - 125, getSafeHeight(0) + 29 - bHeight / 2 + 1 + this.powerBarY, bWidth * oGameData.power, bHeight);
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarTip].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarTip].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarTip].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarTip].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - 125 + this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBar].width * oGameData.power + 1 - bWidth / 2, getSafeHeight(0) + 30 - bHeight / 2 + this.powerBarY, bWidth, bHeight);
            if(this.textResultX > -300) {
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -350 + this.textResultX, 60, bWidth, bHeight);
                addText(0, 30, 380, "left", 20 + this.textResultX, 97, this.eventText, "#000055");
            }
            if(this.heroKick.showKick) {
                this.heroKick.update();
                this.heroKick.render();
            }
            if(showingTut) {
                this.tutorial.update();
                this.tutorial.render();
            }
        };
        return Hud;
    })();
    Elements.Hud = Hud;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var GoalMarker = (function (_super) {
        __extends(GoalMarker, _super);
        function GoalMarker(_oImgData, _animId) {
            var _this = this;
                _super.call(this, _oImgData, 25, 45, _animId);
            this.setAnimType("loop", _animId);
            if(gameState == "shooting") {
                TweenLite.to(this, .5, {
                    scaleX: 2,
                    scaleY: 2,
                    ease: "Elastic.easeOut",
                    onComplete: function () {
                        TweenLite.to(_this, .5, {
                            x: canvas.width / 2 + 85,
                            y: 30,
                            scaleX: .2,
                            scaleY: .2,
                            ease: "Back.easeIn",
                            onComplete: function () {
                                _this.removeMe = true;
                                addFirework(0, canvas.width / 2 + 85, 30, 1);
                                hud.increasePowerBar();
                            }
                        });
                    }
                });
            } else {
                TweenLite.to(this, .5, {
                    scaleX: 2,
                    scaleY: 2,
                    ease: "Elastic.easeOut",
                    onComplete: function () {
                        TweenLite.to(_this, .5, {
                            scaleX: .2,
                            scaleY: .2,
                            ease: "Back.easeIn",
                            onComplete: function () {
                                _this.removeMe = true;
                                addFirework(0, _this.x, _this.y, 1);
                            }
                        });
                    }
                });
            }
        }
        GoalMarker.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
        };
        GoalMarker.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return GoalMarker;
    })(Utils.AnimSprite);
    Elements.GoalMarker = GoalMarker;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Crowd = (function () {
        function Crowd() {
            this.segs = 8;
            this.inc = 0;
            this.wildFactor = 3;
            this.oBgImgData = assetLib.getData("shootingBg");
        }
        Crowd.prototype.update = function () {
            this.inc += (3 + this.wildFactor / 3) * delta;
        };
        Crowd.prototype.goWild = function () {
            var _this = this;
            if(this.wildTween) {
                this.wildTween.kill();
            }
            this.wildTween = TweenLite.to(this, .1, {
                wildFactor: 10,
                ease: "Quad.easeIn",
                onComplete: function () {
                    _this.wildTween = TweenLite.to(_this, 1, {
                        delay: 3,
                        wildFactor: 3,
                        ease: "Cubic.easeOut",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        Crowd.prototype.render = function () {
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2 + shakeY, this.oBgImgData.img.width, this.oBgImgData.img.height);
            for(var i = 0; i < this.segs; i++) {
                var temp = -Math.abs(Math.sin(this.inc + i / 8) * this.wildFactor);
                ctx.drawImage(this.oBgImgData.img, 0, i * (317 / this.segs), this.oBgImgData.img.width, 317 / this.segs, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2 + i * (317 / this.segs) + temp + this.wildFactor + shakeY, this.oBgImgData.img.width, 317 / this.segs);
            }
            ctx.drawImage(this.oBgImgData.img, 0, 317, this.oBgImgData.img.width, this.oBgImgData.img.height - 317, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2 + 317 + shakeY, this.oBgImgData.img.width, this.oBgImgData.img.height - 317);
            addText(1, 28, 180, "center", canvas.width / 2 - 344, canvas.height / 2 - 2 + shakeY, "hoarding", "#fde9c8");
            addText(1, 28, 180, "center", canvas.width / 2 + 50, canvas.height / 2 - 2 + shakeY, "hoarding", "#fde9c8");
            addText(1, 28, 180, "center", canvas.width / 2 + 424, canvas.height / 2 - 2 + shakeY, "hoarding", "#fde9c8");
        };
        return Crowd;
    })();
    Elements.Crowd = Crowd;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemyBall = (function () {
        function EnemyBall() {
            this.rot = 0;
            this.height = 0;
            this.scale = 1;
            this.maxSwipeLength = 30;
            this.ballScale = 1;
            this.fixedBallRadius = 80;
            this.incXMultiplier = 0;
            this.incNetMultiplier = 0;
            this.goalSegs = 15;
            this.goalJiggleInc = 0;
            this.saveCount = 0;
            this.powerLevel = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oBallImgData = assetLib.getData("ball");
            this.reset();
        }
        EnemyBall.prototype.reset = function () {
            if(this.kickTween) {
                this.kickTween.kill();
            }
            if(this.jiggleTween) {
                this.jiggleTween.kill();
            }
            if(this.shootTweenX) {
                this.shootTweenX.kill();
            }
            if(this.shootTweenY) {
                this.shootTweenY.kill();
            }
            if(this.ricochetTween) {
                this.ricochetTween.kill();
            }
            this.isSaved = false;
            this.shootState = 0;
            this.shadowAlpha = 0;
            this.height = 200;
            this.trailInc = 0;
            this.aTrail = new Array();
            this.ballFrame = 0;
            this.rot = 0;
            this.initialRot = 0;
            this.incX = 0;
            this.incY = 0;
            this.ballScale = 1;
            this.ballFrameTarg = 0;
            this.shootTweenComplete = false;
            this.rotInc = 0;
            this.spinInc = 0;
            this.x = 115;
            this.y = 15;
            this.prevX = this.x;
            this.prevY = this.y;
            this.inGoal = false;
            this.aTouchData = new Array();
            this.incXMultiplier = 1;
            oGameData.ballInPlay = false;
            enemyKick.reset();
            if(!showingTut) {
                this.startKickTween();
            }
        };
        EnemyBall.prototype.startKickTween = function () {
            this.kickTween = TweenLite.to(this, .5, {
                height: 0,
                ease: "Bounce.easeOut",
                onComplete: function () {
                    oGameData.ballInPlay = true;
                    enemyKick.takeShot();
                }
            });
        };
        EnemyBall.prototype.ballJiggle = function (_inc) {
            if(this.jiggleTween) {
                this.jiggleTween.kill();
            }
            this.initialRot = 0;
            this.ballScale = _inc;
            this.jiggleTween = TweenLite.to(this, 1, {
                ballScale: 1,
                ease: "Elastic.easeOut"
            });
        };
        EnemyBall.prototype.killTweens = function () {
            if(this.kickTween) {
                this.kickTween.kill();
            }
            if(this.jiggleTween) {
                this.jiggleTween.kill();
            }
            if(this.shootTweenX) {
                this.shootTweenX.kill();
            }
            if(this.shootTweenY) {
                this.shootTweenY.kill();
            }
            if(this.ricochetTween) {
                this.ricochetTween.kill();
            }
        };
        EnemyBall.prototype.pause = function (_isOn) {
            if(_isOn) {
                if(this.kickTween && this.kickTween.isActive()) {
                    this.kickTween.pause();
                }
                if(this.shootTweenX && this.shootTweenX.isActive()) {
                    this.shootTweenX.pause();
                }
                if(this.shootTweenY && this.shootTweenY.isActive()) {
                    this.shootTweenY.pause();
                }
                if(this.ricochetTween && this.ricochetTween.isActive()) {
                    this.ricochetTween.pause();
                }
                if(this.jiggleTween && this.jiggleTween.isActive()) {
                    this.jiggleTween.pause();
                }
            } else {
                if(this.kickTween && this.kickTween.paused()) {
                    this.kickTween.resume();
                }
                if(this.shootTweenX && this.shootTweenX.paused()) {
                    this.shootTweenX.resume();
                }
                if(this.shootTweenY && this.shootTweenY.paused()) {
                    this.shootTweenY.resume();
                }
                if(this.ricochetTween && this.ricochetTween.paused()) {
                    this.ricochetTween.resume();
                }
                if(this.jiggleTween && this.jiggleTween.paused()) {
                    this.jiggleTween.resume();
                }
            }
        };
        EnemyBall.prototype.shoot = function () {
            var _this = this;
            this.shootState = 1;
            playSound("kick" + Math.floor(Math.random() * 3));
            if(heroGoal.saveState == 2) {
                heroGoal.makeSave();
            }
            if(this.shootTweenX) {
                this.shootTweenX.kill();
            }
            if(this.shootTweenY) {
                this.shootTweenY.kill();
            }
            this.spinInc = -.5;
            var tempTime = 1.1 - Math.random() * (curProgress / 10);
            if(firstFail) {
                tempTime += .1;
            }
            var tempRan = Math.random();
            var tempEase = "Sine.easeIn";
            if(tempRan > .8) {
                tempEase = "Linear.easeNone";
            } else if(tempRan > .6) {
                tempEase = "Cubic.easeIn";
            } else if(tempRan > .4 && levelNum > 1) {
                tempEase = "Back.easeIn";
            }
            var ranX = Math.random() * 150 + 208;
            if(Math.random() > .5) {
                ranX = -(Math.random() * 150 + 208);
            }
            this.shootTweenX = TweenLite.to(this, tempTime, {
                x: ranX,
                ease: tempEase
            });
            this.shootTweenY = TweenLite.to(this, tempTime, {
                y: 158,
                ease: "Sine.easeIn",
                onComplete: function () {
                    _this.shootTweenComplete = true;
                    _this.incXMultiplier = 1;
                    _this.incNetMultiplier = 1;
                    screenShake(10);
                    _this.shootTweenY = TweenLite.to(_this, 2, {
                        incNetMultiplier: 0,
                        incXMultiplier: 0,
                        y: _this.y - 10,
                        ease: "Quad.easeOut",
                        onComplete: function () {
                            wipe.inGoal = false;
                            wipe.trigger(resetGoalkeeping);
                        }
                    });
                }
            });
            this.incHeight = (Math.random() * 1100 + 1200) * (.7 + tempTime * .3);
            this.aTrail.push({
                x: canvas.width / 2 + this.x,
                y: canvas.height / 2 + this.y,
                scale: this.scale
            });
            addExplosion(0, canvas.width / 2 + this.x, canvas.height / 2 + this.y, .4);
        };
        EnemyBall.prototype.saveBall = function () {
            if(this.shootTweenX) {
                this.shootTweenX.kill();
            }
            if(this.shootTweenY) {
                this.shootTweenY.kill();
            }
            this.incHeight += Math.random() * 2000 + 1000;
            this.incXMultiplier = 1;
            this.shootTweenY = TweenLite.to(this, 2, {
                incXMultiplier: 0,
                ease: "Quad.easeOut",
                onComplete: function () {
                    wipe.inGoal = true;
                    wipe.trigger(resetGoalkeeping);
                }
            });
            this.spinInc = .5;
            addExplosion(0, canvas.width / 2 + this.x, canvas.height / 2 + this.y - (this.height + this.incHeight * delta) * this.scale, 2);
            userSaved();
            this.saveCount++;
        };
        EnemyBall.prototype.update = function () {
            if(this.shootState == 0) {
                this.x = 115;
                this.y = 15;
                this.ballRadius = this.fixedBallRadius * this.scale;
                this.ballScale = 1;
            } else if(this.shootState == 1) {
                this.incHeight -= (5000 * (this.scale + .5)) * delta;
                this.height += this.incHeight * delta;
                if(this.height <= 0) {
                    this.height = 0;
                    this.incHeight *= -.6;
                    if(this.incHeight > 200) {
                        playSound("bounce" + Math.floor(Math.random() * 5));
                    }
                    var temp = 1 - this.incHeight / 7000;
                    if(!this.isSaved) {
                        this.spinInc *= .5;
                    }
                    if(temp < .95) {
                        this.ballJiggle(temp);
                    }
                }
                if(!this.isSaved) {
                    if(!this.shootTweenComplete) {
                        this.incX = this.x - this.prevX;
                        this.prevX = this.x;
                        this.incY = this.y - this.prevY;
                        this.prevY = this.y;
                        this.rot += this.incX * delta / 2;
                    } else {
                        this.x += (this.incX * delta * 50) * this.incXMultiplier;
                        this.rot += this.incX * (delta / 1) * this.incXMultiplier;
                        if(this.x < -400) {
                            this.x = -400;
                            this.incX *= -.2;
                        } else if(this.x > 355) {
                            this.x = 355;
                            this.incX *= -.2;
                        }
                    }
                } else {
                    this.x += (this.incX * delta * 10) * this.incXMultiplier;
                    this.y -= (this.incY * delta * 20) * this.incXMultiplier;
                    this.rot += this.incX * (delta / 1) * this.incXMultiplier;
                }
                if(!this.isSaved && canvas.height / 2 + this.y + this.ballRadius > canvas.height / 2 + 127 && canvas.height / 2 + this.y + this.ballRadius < canvas.height / 2 + 144 && heroGoal.checkSave(canvas.width / 2 + this.x, canvas.height / 2 + this.y - this.height * this.scale)) {
                    this.isSaved = true;
                    this.saveBall();
                    playSound("crowdGood" + Math.floor(Math.random() * 3));
                    playSound("heroSave");
                    playSound("kick" + Math.floor(Math.random() * 3));
                }
                if(!this.inGoal && canvas.height / 2 + this.y + this.ballRadius > canvas.height / 2 + 144) {
                    this.inGoal = true;
                    addGoalMarker(1, canvas.width / 2 + this.x, canvas.height / 2 + this.y - this.height * this.scale, .5);
                    enemyScored();
                    playSound("crowdBad" + Math.floor(Math.random() * 2));
                    playSound("enemyScore");
                }
                this.trailInc += delta;
                if(this.trailInc > .05) {
                    if(this.aTrail.length > 10) {
                        this.aTrail.shift();
                    }
                    this.aTrail.push({
                        x: canvas.width / 2 + this.x,
                        y: canvas.height / 2 + this.y - this.height * this.scale,
                        scale: this.scale
                    });
                    this.trailInc = 0;
                }
                this.shadowAlpha = Math.floor(Math.min((this.height) / 500, .9) * 10);
                this.ballRadius = this.fixedBallRadius * this.scale;
            }
            this.scale = (this.y - 15) / 143 * .25 + .1;
        };
        EnemyBall.prototype.render = function () {
            if(!this.inGoal) {
                this.renderBall();
                heroGoal.render();
                this.renderGoalFront();
            } else {
                heroGoal.render();
                this.renderGoalFront();
                this.renderBall();
            }
            this.goalJiggleInc += delta * 5;
            var tempY;
            for(var i = 0; i < this.goalSegs; i++) {
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalBack].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalBack].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalBack].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalBack].height;
                tempY = ((Math.sin(this.goalJiggleInc + i / 2) * 10) * (this.goalSegs / 2 - Math.abs(i - this.goalSegs / 2)) / 5) * this.incNetMultiplier;
                ctx.drawImage(this.oGameElementsImgData.img, bX + i * (bWidth / this.goalSegs), bY, (bWidth / this.goalSegs), bHeight, canvas.width / 2 - bWidth / 2 - 46 + i * (bWidth / this.goalSegs) + tempY, canvas.height / 2 - bHeight + 186 + shakeY, (bWidth / this.goalSegs), bHeight);
            }
        };
        EnemyBall.prototype.renderGoalFront = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalFront].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalFront].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalFront].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalFront].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - 39, canvas.height / 2 - bHeight + 182 + shakeY, bWidth, bHeight);
        };
        EnemyBall.prototype.renderBall = function () {
            if(this.aTrail.length > 1) {
                var tempRot0;
                var tempRot1;
                var temp90 = 90 * radian;
                var hyp0;
                var hyp1;
                var a;
                var b;
                for(var i = 0; i < this.aTrail.length - 1; i++) {
                    a = this.aTrail[i + 1].x - this.aTrail[i].x;
                    b = this.aTrail[i + 1].y - this.aTrail[i].y;
                    tempRot0 = Math.atan2(b, a);
                    hyp0 = this.aTrail[i].scale * 80;
                    if(i < this.aTrail.length - 2) {
                        a = this.aTrail[i + 2].x - this.aTrail[i + 1].x;
                        b = this.aTrail[i + 2].y - this.aTrail[i + 1].y;
                        tempRot1 = Math.atan2(b, a);
                    } else {
                        tempRot1 = tempRot0;
                    }
                    hyp1 = this.aTrail[i + 1].scale * 80;
                    ctx.fillStyle = "rgba(255, 255, 255, " + i / this.aTrail.length + ")";
                    ctx.beginPath();
                    ctx.moveTo(this.aTrail[i].x - hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y - hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                    ctx.lineTo(this.aTrail[i + 1].x - hyp1 * Math.cos(tempRot1 + temp90), this.aTrail[i + 1].y - hyp1 * Math.sin(tempRot1 + temp90) + shakeY);
                    ctx.lineTo(this.aTrail[i + 1].x + hyp1 * Math.cos(tempRot1 + temp90), this.aTrail[i + 1].y + hyp1 * Math.sin(tempRot1 + temp90) + shakeY);
                    ctx.lineTo(this.aTrail[i].x + hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y + hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                    ctx.lineTo(this.aTrail[i].x - hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y - hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                    ctx.closePath();
                    ctx.fill();
                }
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + this.x - (bWidth / 2) * this.scale, canvas.height / 2 + this.y - (bHeight / 2) * this.scale + this.ballRadius + shakeY, bWidth * this.scale, bHeight * this.scale);
            this.ballFrameTarg += this.spinInc * this.incXMultiplier;
            this.ballFrame = Math.round(this.ballFrameTarg);
            if(this.ballFrame > 7) {
                this.ballFrame -= 8;
                this.ballFrameTarg -= 8;
            } else if(this.ballFrame < 0) {
                this.ballFrame += 8;
                this.ballFrameTarg += 8;
            }
            var curBallType = this.oBallImgData;
            ctx.save();
            ctx.translate(canvas.width / 2 + this.x, canvas.height / 2 + this.y - this.height * this.scale);
            ctx.rotate(this.initialRot);
            ctx.scale(this.ballScale, (1 + (1 - this.ballScale)));
            ctx.rotate(this.rot);
            var imgX = (this.ballFrame * curBallType.oData.spriteWidth) % curBallType.img.width;
            var imgY = Math.floor(this.ballFrame / (curBallType.img.width / curBallType.oData.spriteWidth)) * curBallType.oData.spriteHeight;
            ctx.drawImage(curBallType.img, imgX, imgY, curBallType.oData.spriteWidth, curBallType.oData.spriteHeight, -(curBallType.oData.spriteWidth / 2) * this.scale, -(curBallType.oData.spriteHeight / 2) * this.scale + shakeY, curBallType.oData.spriteWidth * this.scale, curBallType.oData.spriteHeight * this.scale);
            ctx.restore();
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + this.x - (bWidth / 2) * this.scale, canvas.height / 2 + this.y - (bHeight / 2 - 2) * this.scale - this.height * this.scale + shakeY, bWidth * this.scale, bHeight * this.scale);
        };
        return EnemyBall;
    })();
    Elements.EnemyBall = EnemyBall;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemyCrowd = (function () {
        function EnemyCrowd() {
            this.inc = 0;
            this.wildFactor = 0;
            this.oBgImgData = assetLib.getData("goalkeepingBg");
            this.oGameElementsImgData = assetLib.getData("gameElements");
        }
        EnemyCrowd.prototype.update = function () {
            this.inc += (0 + this.wildFactor) * delta;
        };
        EnemyCrowd.prototype.goWild = function () {
            var _this = this;
            if(this.wildTween) {
                this.wildTween.kill();
            }
            this.wildTween = TweenLite.to(this, .1, {
                wildFactor: 7,
                ease: "Quad.easeIn",
                onComplete: function () {
                    _this.wildTween = TweenLite.to(_this, 1, {
                        delay: 3,
                        wildFactor: 0,
                        ease: "Cubic.easeOut",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        EnemyCrowd.prototype.render = function () {
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2 + shakeY, this.oBgImgData.img.width, this.oBgImgData.img.height);
            var temp = -Math.abs(Math.sin(this.inc) * 2);
            ctx.drawImage(this.oBgImgData.img, 0, 155, this.oBgImgData.img.width, 156, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - 195 + shakeY, this.oBgImgData.img.width, 156 + temp);
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tinyGoal].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tinyGoal].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tinyGoal].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tinyGoal].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + 105, canvas.height / 2 - 75 + shakeY, bWidth, bHeight);
        };
        return EnemyCrowd;
    })();
    Elements.EnemyCrowd = EnemyCrowd;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemyHud = (function () {
        function EnemyHud() {
            this.scoreNumberSpace = 48;
            this.userScoreY = 0;
            this.enemyScoreY = 0;
            this.prevSecs = 0;
            this.timerNumberSpace = 38;
            this.beepTimeTarg = 600;
            this.powerBarY = 0;
            this.timerY = 0;
            this.powerMaxxed = false;
            this.textResultX = -1000;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oScoreNumbersImgData = assetLib.getData("scoreNumbers");
            this.oTimeNumbersImgData = assetLib.getData("timeNumbers");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            if(firstRun) {
                this.tutorial = new Elements.Tutorial(assetLib.getData("tut1"), 1);
            }
        }
        EnemyHud.prototype.showTextEvent = function (_eventText) {
            var _this = this;
            if(this.textResultTween) {
                this.textResultTween.kill();
            }
            this.eventText = _eventText;
            this.textResultX = -300;
            this.textResultTween = TweenLite.to(this, .3, {
                delay: .5,
                textResultX: 0,
                ease: "Back.easeOut",
                onComplete: function () {
                    _this.textResultTween = TweenLite.to(_this, .3, {
                        delay: 1.5,
                        textResultX: -300,
                        ease: "Back.easeIn",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        EnemyHud.prototype.update = function () {
        };
        EnemyHud.prototype.jiggleEnemyScore = function () {
            var _this = this;
            if(this.scoreTween) {
                this.scoreTween.kill();
            }
            this.scoreTween = TweenLite.to(this, .1, {
                enemyScoreY: -50,
                ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.scoreTween = TweenLite.to(_this, 1, {
                        enemyScoreY: 0,
                        ease: "Elastic.easeOut",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        EnemyHud.prototype.render = function () {
            if(oGameData.curTime > 500 || Math.round(oGameData.curTime / 25) % 2 == 0) {
                if(oGameData.curTime <= this.beepTimeTarg) {
                    playSound("beep");
                    this.beepTimeTarg -= 100;
                }
                var id;
                var mins = Math.floor(oGameData.curTime / 6000).toString();
                var tempX = getSafeWidth(0) + 6;
                var tempY = getSafeHeight(0) + 6 + this.timerY;
                var secs = Math.floor((oGameData.curTime - Math.floor(oGameData.curTime / 6000) * 6000) / 100).toString();
                if(secs.length < 2) {
                    secs = "0" + secs;
                }
                var tenths = oGameData.curTime.toString().charAt(oGameData.curTime.toString().length - 2) + oGameData.curTime.toString().charAt(oGameData.curTime.toString().length - 1);
                if(tenths.length < 2) {
                    tenths = "0" + tenths;
                }
                for(var i = 0; i < 2; i++) {
                    id = parseFloat(mins.charAt(i));
                    if(mins.length < 2) {
                        if(i == 0) {
                            continue;
                        } else {
                            id = parseFloat(mins.charAt(0));
                        }
                    }
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                }
                id = 10;
                var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 30, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                for(var i = 0; i < 2; i++) {
                    id = parseFloat(secs.charAt(i));
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 59 + i * this.timerNumberSpace, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                }
                for(var i = 0; i < 2; i++) {
                    id = parseFloat(tenths.charAt(i));
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 140 + i * this.timerNumberSpace * .6, tempY, this.oTimeNumbersImgData.oData.spriteWidth * .6, this.oTimeNumbersImgData.oData.spriteHeight * .6);
                }
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + userGoalieId]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + userGoalieId]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + userGoalieId]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + userGoalieId]].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0) + 50 - bWidth / 2 - this.userScoreY - aGoalieHeadIconOffsets[userGoalieId].x, getSafeHeight(canvas.height) - 75 - bHeight / 2 + this.userScoreY + aGoalieHeadIconOffsets[userGoalieId].y, bWidth, bHeight);
            var tempScore = oGameData.heroScore.toString();
            var tempScale = 1;
            for(var i = 0; i < tempScore.length; i++) {
                var id = parseFloat(tempScore.charAt(i));
                var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, getSafeWidth(0) + 120 + i * (this.scoreNumberSpace * tempScale) - this.userScoreY - aGoalieHeadIconOffsets[userGoalieId].x, getSafeHeight(canvas.height) - 100 + this.userScoreY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + enemyStrikerId]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + enemyStrikerId]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + enemyStrikerId]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + enemyStrikerId]].height;
            ctx.save();
            ctx.translate(getSafeWidth(canvas.width) - 50 + this.enemyScoreY - aStrikerHeadIconOffsets[enemyStrikerId].x, getSafeHeight(canvas.height) - 75 + this.enemyScoreY + aStrikerHeadIconOffsets[enemyStrikerId].y);
            ctx.scale(-1, 1);
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
            ctx.restore();
            tempScore = oGameData.enemyScore.toString();
            tempScale = 1;
            for(var i = 0; i < tempScore.length; i++) {
                var id = parseFloat(tempScore.charAt(i));
                var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, getSafeWidth(canvas.width) - 120 + i * (this.scoreNumberSpace * tempScale) - ((tempScore.length + .5) * this.scoreNumberSpace) + this.enemyScoreY - aStrikerHeadIconOffsets[enemyGoalieId].x, getSafeHeight(canvas.height) - 100 + this.enemyScoreY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
            }
            if(this.textResultX > -300) {
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -350 + this.textResultX, 60, bWidth, bHeight);
                addText(0, 30, 380, "left", 20 + this.textResultX, 97, this.eventText, "#000055");
            }
            if(showingTut) {
                this.tutorial.update();
                this.tutorial.render();
            }
        };
        return EnemyHud;
    })();
    Elements.EnemyHud = EnemyHud;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal0 = (function (_super) {
        __extends(HeroGoal0, _super);
        function HeroGoal0(_oImgData) {
                _super.call(this, _oImgData, 18, 45, "ambient");
            this.hitRadius = 110;
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.scaleX = this.scaleY = 1;
            this.reset();
        }
        HeroGoal0.prototype.reset = function () {
            if(this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if(this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.moveX = 0;
            this.moveY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.hasSprayed = false;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal0.prototype.checkSave = function (_x, _y) {
            if(_x > this.x - 120 + this.hitOffsetX && _x < this.x + 120 + this.hitOffsetX && _y > this.y - 40 && _y < this.y + 110) {
                return true;
            } else {
                return false;
            }
        };
        HeroGoal0.prototype.makeSave = function () {
            var _this = this;
            if(enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveJump" + Math.floor(Math.random() * 3));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for(var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 275);
            if(this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if(this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.saveTweenX = TweenLite.to(this, 1.5, {
                driftX: (Math.cos(tempAngle) * -tempPower) / 2,
                ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
            this.saveTweenY = TweenLite.to(this, .4, {
                moveX: Math.cos(tempAngle) * -tempPower,
                moveY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 0), -150),
                ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.saveTweenY = TweenLite.to(_this, .4, {
                        moveY: 0,
                        ease: "Cubic.easeIn",
                        onComplete: function () {
                            playSound("saveLand");
                            _this.setAnimType("once", _this.saveSide + "Land");
                        }
                    });
                }
            });
            if(a > 0) {
                addSpray("left", this.x + 50, canvas.height / 2 + 120, 1);
            } else {
                addSpray("right", this.x - 50, canvas.height / 2 + 120, 1);
            }
            var tempRad = tempAngle / radian;
            if(tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 50;
            } else {
                this.saveSide = "left";
                this.hitOffsetX = -50;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal0.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.moveX + this.driftX;
            this.y = canvas.height / 2 + 48 + this.moveY;
            if(this.moveY > -5 && this.saveState == 3 && !this.hasSprayed) {
                addSpray("left", this.x + 120, canvas.height / 2 + 120, 1);
                addSpray("right", this.x - 120, canvas.height / 2 + 120, 1);
                this.hasSprayed = true;
            }
            this.incX = this.x - this.prevX;
            this.prevX = this.x;
        };
        HeroGoal0.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal0;
    })(Utils.AnimSprite);
    Elements.HeroGoal0 = HeroGoal0;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal1 = (function (_super) {
        __extends(HeroGoal1, _super);
        function HeroGoal1(_oImgData) {
                _super.call(this, _oImgData, 18, 45, "ambient");
            this.hitRadius = 110;
            this.hoverInc = 0;
            this.saveSide = "left";
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.scaleX = this.scaleY = 1;
            this.reset();
        }
        HeroGoal1.prototype.reset = function () {
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal1.prototype.checkSave = function (_x, _y) {
            for(var i = 0; i < this.aPosCapture.length; i++) {
                if(_x > this.aPosCapture[i].x - 100 + this.hitOffsetX && _x < this.aPosCapture[i].x + 100 + this.hitOffsetX && _y > this.aPosCapture[i].y - 80 && _y < this.aPosCapture[i].y + 110) {
                    return true;
                }
            }
            return false;
        };
        HeroGoal1.prototype.makeSave = function () {
            var _this = this;
            if(enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            for(var i = 0; i < 5; i++) {
                setTimeout(function () {
                    addFirework(0, _this.x + Math.random() * 20 - 10, _this.y - 25 + Math.random() * 20 - 10, 1.3, false);
                }, i * 50);
            }
            playSound("saveFly" + Math.floor(Math.random() * 2));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for(var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 300);
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, .3, {
                targX: Math.cos(tempAngle) * -tempPower,
                targY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 50), -120),
                ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.setAnimType("once", _this.saveSide + "Stop");
                    _this.animEndedFunc = _this.smallAmbientAnim;
                }
            });
            var tempRad = tempAngle / radian;
            if(tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 0;
            } else {
                this.saveSide = "left";
                this.hitOffsetX = 0;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal1.prototype.tweenToBallPos = function () {
            var _this = this;
            if(this.animId == "ambient") {
                return;
            }
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, .4, {
                targX: enemyBall.x,
                targY: enemyBall.y - enemyBall.height * enemyBall.scale - 45,
                ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.saveState = 3;
                    if(_this.animId != "smallAmbient") {
                        _this.setAnimType("once", _this.saveSide + "Stop");
                        _this.animEndedFunc = _this.smallAmbientAnim;
                    }
                    _this.tweenToRanPos();
                }
            });
        };
        HeroGoal1.prototype.tweenToRanPos = function () {
            var _this = this;
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, .5, {
                targX: this.targX + Math.random() * 80 - 40,
                targY: Math.min(this.targY + Math.random() * 80 - 40, 75),
                ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.tweenToRanPos();
                }
            });
        };
        HeroGoal1.prototype.smallAmbientAnim = function () {
            this.setAnimType("loop", "smallAmbient");
        };
        HeroGoal1.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
        };
        HeroGoal1.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            if(this.animId == "ambient") {
                this.hoverInc = 0;
            } else {
                this.hoverInc += delta;
            }
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + 45 + Math.sin(this.hoverInc * 10) * 5;
            this.aPosCapture.push({
                x: this.x,
                y: this.y
            });
            if(this.aPosCapture.length > 10) {
                this.aPosCapture.shift();
            }
        };
        HeroGoal1.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal1;
    })(Utils.AnimSprite);
    Elements.HeroGoal1 = HeroGoal1;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal2 = (function (_super) {
        __extends(HeroGoal2, _super);
        function HeroGoal2(_oImgData) {
                _super.call(this, _oImgData, 18, 45, "ambient");
            this.hitRadius = 110;
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.scaleX = this.scaleY = 1;
            this.reset();
        }
        HeroGoal2.prototype.reset = function () {
            if(this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if(this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.moveX = 0;
            this.moveY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.hasSprayed = false;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal2.prototype.checkSave = function (_x, _y) {
            if(_x > this.x - 100 + this.hitOffsetX && _x < this.x + 100 + this.hitOffsetX && _y > this.y - 40 && _y < this.y + 110) {
                return true;
            } else {
                return false;
            }
        };
        HeroGoal2.prototype.makeSave = function () {
            var _this = this;
            if(enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveJump" + Math.floor(Math.random() * 3));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for(var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 275);
            if(this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if(this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.saveTweenX = TweenLite.to(this, 1.5, {
                driftX: (Math.cos(tempAngle) * -tempPower) / 2,
                ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
            this.saveTweenY = TweenLite.to(this, .4, {
                moveX: Math.cos(tempAngle) * -tempPower,
                moveY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 0), -150),
                ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.saveTweenY = TweenLite.to(_this, .4, {
                        moveY: 0,
                        ease: "Cubic.easeIn",
                        onComplete: function () {
                            playSound("saveLand");
                            _this.setAnimType("once", _this.saveSide + "Land");
                        }
                    });
                }
            });
            if(a > 0) {
                addSpray("left", this.x + 50, canvas.height / 2 + 120, 1);
            } else {
                addSpray("right", this.x - 50, canvas.height / 2 + 120, 1);
            }
            var tempRad = tempAngle / radian;
            if(tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 15;
            } else {
                this.saveSide = "left";
                this.hitOffsetX = -15;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal2.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.moveX + this.driftX;
            this.y = canvas.height / 2 + 37 + this.moveY;
            if(this.moveY > -5 && this.saveState == 3 && !this.hasSprayed) {
                addSpray("left", this.x + 120, canvas.height / 2 + 120, 1);
                addSpray("right", this.x - 120, canvas.height / 2 + 120, 1);
                this.hasSprayed = true;
            }
            this.incX = this.x - this.prevX;
            this.prevX = this.x;
        };
        HeroGoal2.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal2;
    })(Utils.AnimSprite);
    Elements.HeroGoal2 = HeroGoal2;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal3 = (function (_super) {
        __extends(HeroGoal3, _super);
        function HeroGoal3(_oImgData) {
                _super.call(this, _oImgData, 18, 45, "ambient");
            this.hitRadius = 110;
            this.hoverInc = 0;
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.scaleX = this.scaleY = 1;
            this.reset();
        }
        HeroGoal3.prototype.reset = function () {
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal3.prototype.checkSave = function (_x, _y) {
            for(var i = 0; i < this.aPosCapture.length; i++) {
                if(_x > this.aPosCapture[i].x - 100 + this.hitOffsetX && _x < this.aPosCapture[i].x + 100 + this.hitOffsetX && _y > this.aPosCapture[i].y - 80 && _y < this.aPosCapture[i].y + 110) {
                    return true;
                }
            }
            return false;
        };
        HeroGoal3.prototype.makeSave = function () {
            var _this = this;
            if(enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveFly" + Math.floor(Math.random() * 2));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for(var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 300);
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, .5, {
                targX: Math.cos(tempAngle) * -tempPower,
                targY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 90), -120),
                ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.setAnimType("once", _this.saveSide + "Stop");
                    _this.animEndedFunc = _this.ambientAnim;
                }
            });
            var tempRad = tempAngle / radian;
            if(tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 0;
            } else {
                this.saveSide = "left";
                this.hitOffsetX = 0;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal3.prototype.tweenToBallPos = function () {
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.saveState = 3;
            if(!this.saveSide || this.saveSide == undefined) {
                this.saveSide = "left";
            }
            this.setAnimType("once", this.saveSide + "Stop");
            this.animEndedFunc = this.ambientAnim;
            this.tweenToRanPos();
        };
        HeroGoal3.prototype.tweenToRanPos = function () {
            var _this = this;
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, 2, {
                targX: Math.random() * 200 - 100,
                targY: Math.random() * 150 - 75,
                ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.tweenToRanPos();
                }
            });
        };
        HeroGoal3.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
        };
        HeroGoal3.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.hoverInc += delta;
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + Math.sin(this.hoverInc * 10) * 5;
            this.aPosCapture.push({
                x: this.x,
                y: this.y
            });
            if(this.aPosCapture.length > 10) {
                this.aPosCapture.shift();
            }
        };
        HeroGoal3.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal3;
    })(Utils.AnimSprite);
    Elements.HeroGoal3 = HeroGoal3;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal4 = (function (_super) {
        __extends(HeroGoal4, _super);
        function HeroGoal4(_oImgData) {
                _super.call(this, _oImgData, 18, 45, "ambient");
            this.hitRadius = 110;
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.scaleX = this.scaleY = 1;
            this.reset();
        }
        HeroGoal4.prototype.reset = function () {
            if(this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if(this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.moveX = 0;
            this.moveY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.hasSprayed = false;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal4.prototype.checkSave = function (_x, _y) {
            if(_x > this.x - 110 + this.hitOffsetX && _x < this.x + 110 + this.hitOffsetX && _y > this.y - 25 && _y < this.y + 125) {
                return true;
            } else {
                return false;
            }
        };
        HeroGoal4.prototype.makeSave = function () {
            var _this = this;
            if(enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveJump" + Math.floor(Math.random() * 3));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for(var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 275);
            if(this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if(this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.saveTweenX = TweenLite.to(this, 1.5, {
                driftX: (Math.cos(tempAngle) * -tempPower) / 2,
                ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
            this.saveTweenY = TweenLite.to(this, .5, {
                moveX: Math.cos(tempAngle) * -tempPower,
                moveY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 0), -150),
                ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.saveTweenY = TweenLite.to(_this, .4, {
                        moveY: 0,
                        ease: "Cubic.easeIn",
                        onComplete: function () {
                            playSound("saveLand");
                            _this.setAnimType("once", _this.saveSide + "Land");
                        }
                    });
                }
            });
            if(a > 0) {
                addSpray("left", this.x + 50, canvas.height / 2 + 120, 1);
            } else {
                addSpray("right", this.x - 50, canvas.height / 2 + 120, 1);
            }
            var tempRad = tempAngle / radian;
            if(tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 15;
            } else {
                this.saveSide = "left";
                this.hitOffsetX = -15;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal4.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.moveX + this.driftX;
            this.y = canvas.height / 2 + 25 + this.moveY;
            if(this.moveY > -5 && this.saveState == 3 && !this.hasSprayed) {
                addSpray("left", this.x + 120, canvas.height / 2 + 120, 1);
                addSpray("right", this.x - 120, canvas.height / 2 + 120, 1);
                this.hasSprayed = true;
            }
            this.incX = this.x - this.prevX;
            this.prevX = this.x;
        };
        HeroGoal4.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal4;
    })(Utils.AnimSprite);
    Elements.HeroGoal4 = HeroGoal4;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal5 = (function (_super) {
        __extends(HeroGoal5, _super);
        function HeroGoal5(_oImgData) {
                _super.call(this, _oImgData, 18, 45, "ambient");
            this.hitRadius = 110;
            this.hoverInc = 0;
            this.saveSide = "left";
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.scaleX = this.scaleY = 1;
            this.reset();
        }
        HeroGoal5.prototype.reset = function () {
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal5.prototype.checkSave = function (_x, _y) {
            for(var i = 0; i < this.aPosCapture.length; i++) {
                if(_x > this.aPosCapture[i].x - 100 + this.hitOffsetX && _x < this.aPosCapture[i].x + 100 + this.hitOffsetX && _y > this.aPosCapture[i].y - 80 && _y < this.aPosCapture[i].y + 110) {
                    return true;
                }
            }
            return false;
        };
        HeroGoal5.prototype.makeSave = function () {
            var _this = this;
            if(enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveFly" + Math.floor(Math.random() * 2));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for(var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 300);
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, .5, {
                targX: Math.cos(tempAngle) * -tempPower,
                targY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 80), -120),
                ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.setAnimType("once", _this.saveSide + "Stop");
                    _this.animEndedFunc = null;
                }
            });
            var tempRad = tempAngle / radian;
            if(tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 0;
            } else {
                this.saveSide = "left";
                this.hitOffsetX = 0;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal5.prototype.tweenToBallPos = function () {
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.saveState = 3;
            this.setAnimType("once", this.saveSide + "Stop");
            this.animEndedFunc = null;
            this.tweenToRanPos();
        };
        HeroGoal5.prototype.tweenToRanPos = function () {
            var _this = this;
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, 2, {
                targX: Math.random() * 200 - 100,
                targY: Math.random() * 150 - 75,
                ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.tweenToRanPos();
                }
            });
        };
        HeroGoal5.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
        };
        HeroGoal5.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.hoverInc += delta;
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + Math.sin(this.hoverInc * 3) * 5;
            this.aPosCapture.push({
                x: this.x,
                y: this.y
            });
            if(this.aPosCapture.length > 10) {
                this.aPosCapture.shift();
            }
        };
        HeroGoal5.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal5;
    })(Utils.AnimSprite);
    Elements.HeroGoal5 = HeroGoal5;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemyKick = (function (_super) {
        __extends(EnemyKick, _super);
        function EnemyKick(_oImgData) {
                _super.call(this, _oImgData, 20, 45, "ambient");
            this.aOffsets = new Array({
                x: 150,
                y: -23
            }, {
                x: 175,
                y: -27
            }, {
                x: 177,
                y: -37
            }, {
                x: 176,
                y: -28
            }, {
                x: 180,
                y: -26
            }, {
                x: 180,
                y: -30
            });
            if(enemyStrikerId == 3) {
                this.fps = 15;
            }
            this.reset();
        }
        EnemyKick.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            allowUserSaveSwipe = false;
        };
        EnemyKick.prototype.takeShot = function () {
            allowUserSaveSwipe = true;
            this.setAnimType("once", "kick0");
            this.animEndedFunc = this.endKick;
        };
        EnemyKick.prototype.celebrate = function () {
            if(enemyStrikerId == 3) {
                this.setAnimType("loop", "celebrate");
            } else {
                this.setAnimType("once", "celebrate");
            }
            this.animEndedFunc = null;
        };
        EnemyKick.prototype.sad = function () {
            if(enemyStrikerId == 3) {
                this.setAnimType("loop", "sad");
            } else {
                this.setAnimType("once", "sad");
            }
            this.animEndedFunc = null;
        };
        EnemyKick.prototype.endKick = function () {
            this.setAnimType("once", "kick1");
            enemyBall.shoot();
            this.animEndedFunc = null;
        };
        EnemyKick.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.aOffsets[enemyStrikerId].x;
            this.y = canvas.height / 2 + this.aOffsets[enemyStrikerId].y;
        };
        EnemyKick.prototype.render = function () {
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemyKick;
    })(Utils.AnimSprite);
    Elements.EnemyKick = EnemyKick;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroKick = (function (_super) {
        __extends(HeroKick, _super);
        function HeroKick(_oImgData) {
                _super.call(this, _oImgData, 20, 45, "ambient");
            this.aOffsets = new Array({
                x: 0,
                y: 217 / 2 - 1,
                scale: 1.3
            }, {
                x: 0,
                y: 222 / 2 - 1,
                scale: 1.3
            }, {
                x: 0,
                y: 217 / 2 - 1,
                scale: 1.3
            }, {
                x: 0,
                y: 220 / 2 - 1,
                scale: 1.3
            }, {
                x: 0,
                y: 213 / 2 - 1,
                scale: 1.3
            }, {
                x: 0,
                y: 232 / 2 - 1,
                scale: 1.3
            });
            this.showKick = false;
            this.slideX = 0;
            this.scaleX = this.scaleY = this.aOffsets[userStrikerId].scale;
        }
        HeroKick.prototype.takeShot = function (_ballXInc, _ballYInc) {
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            this.showKick = true;
            this.setAnimType("once", "kick0");
            this.slideX = 0;
            TweenLite.to(this, .5, {
                slideX: this.ballXInc / 8,
                ease: "Quad.easeOut"
            });
            this.animEndedFunc = this.midKick;
        };
        HeroKick.prototype.midKick = function () {
            this.setAnimType("once", "kick1");
            ball.shoot();
            enemySave.makeSave(this.ballXInc - ball.curlXTarg / 2000, this.ballYInc);
            this.animEndedFunc = this.endKick;
        };
        HeroKick.prototype.endKick = function () {
            this.showKick = false;
        };
        HeroKick.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.aOffsets[userStrikerId].x + this.slideX;
            this.y = canvas.height - this.aOffsets[userStrikerId].y * this.aOffsets[userStrikerId].scale;
        };
        HeroKick.prototype.render = function () {
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroKick;
    })(Utils.AnimSprite);
    Elements.HeroKick = HeroKick;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave0 = (function (_super) {
        __extends(EnemySave0, _super);
        function EnemySave0(_oImgData) {
                _super.call(this, _oImgData, 18, 45, "ambient");
            this.targX = 0;
            this.targY = 0;
            this.hitOffsetX = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.offsetY = -this.oImgData.oData.spriteHeight / 2 + 40;
            this.reset();
        }
        EnemySave0.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            if(this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if(this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.jumpHeight = 0;
            this.hasLanded = false;
            this.hitOffsetX = 0;
            this.trueSave = true;
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave0.prototype.checkBallHit = function (_bx, _by) {
            if(_bx > this.x - 70 + this.hitOffsetX && _bx < this.x + 70 + this.hitOffsetX && _by > this.y - 50 && _by < this.y + 50) {
                return true;
            } else {
                return false;
            }
        };
        EnemySave0.prototype.makeSave = function (_ballXInc, _ballYInc) {
            playSound("saveJump" + Math.floor(Math.random() * 3));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            this.saveSide = "right";
            this.hitOffsetX = 25;
            if(ball.isGoldBall) {
                if(this.ballXInc < 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
                this.trueSave = false;
            } else if(!this.trueSave) {
                if(Math.random() > .5) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            } else {
                if(this.ballXInc > 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            this.setAnimType("once", this.saveSide + "Jump");
            this.animEndedFunc = this.endJump;
        };
        EnemySave0.prototype.endJump = function () {
            if(!this.trueSave) {
                var tempX = Math.random() * 210 + 40;
                if(this.saveSide == "left") {
                    tempX *= -1;
                }
                this.targY = -(Math.random() * 600 + 100);
                this.saveTweenX = TweenLite.to(this, 1, {
                    targX: tempX,
                    ease: "Cubic.easeOut"
                });
                this.saveTweenY = TweenLite.to(this, .5, {
                    targY: 500,
                    ease: "Linear.easeNone"
                });
            } else {
                var tempX = Math.min(Math.max(-this.ballXInc * 300, -275), 275) * this.accuracyScale;
                this.targY = Math.max((this.ballYInc + 500) / 1.5, -850) * this.accuracyScale;
                this.saveTweenX = TweenLite.to(this, .4, {
                    targX: tempX,
                    ease: "Cubic.easeOut"
                });
                this.saveTweenY = TweenLite.to(this, .5, {
                    targY: 500,
                    ease: "Linear.easeNone"
                });
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        EnemySave0.prototype.land = function () {
            this.hasLanded = true;
            this.setAnimType("once", this.saveSide + "Land");
            this.animEndedFunc = null;
            playSound("saveLand");
            if(this.saveSide == "left") {
                addSpray("left", this.x + 50, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 140, canvas.height / 2 + 21, .6);
            } else {
                addSpray("left", this.x + 140, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 50, canvas.height / 2 + 21, .6);
            }
        };
        EnemySave0.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.targX;
            this.jumpHeight += this.targY * delta;
            this.y = canvas.height / 2 + this.jumpHeight;
            if(this.y > canvas.height / 2) {
                this.y = canvas.height / 2;
                if(!this.hasLanded) {
                    this.land();
                }
            }
        };
        EnemySave0.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave0;
    })(Utils.AnimSprite);
    Elements.EnemySave0 = EnemySave0;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave2 = (function (_super) {
        __extends(EnemySave2, _super);
        function EnemySave2(_oImgData) {
                _super.call(this, _oImgData, 20, 45, "ambient");
            this.targX = 0;
            this.targY = 0;
            this.hitOffsetX = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.offsetY = -this.oImgData.oData.spriteHeight / 2 + 40;
            this.reset();
        }
        EnemySave2.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            if(this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if(this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.jumpHeight = 0;
            this.hasLanded = false;
            this.hitOffsetX = 0;
            this.trueSave = true;
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave2.prototype.checkBallHit = function (_bx, _by) {
            if(_bx > this.x - 80 + this.hitOffsetX && _bx < this.x + 80 + this.hitOffsetX && _by > this.y - 60 && _by < this.y + 50) {
                return true;
            } else {
                return false;
            }
        };
        EnemySave2.prototype.makeSave = function (_ballXInc, _ballYInc) {
            playSound("saveJump" + Math.floor(Math.random() * 3));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            this.saveSide = "right";
            this.hitOffsetX = 25;
            if(ball.isGoldBall) {
                if(_ballXInc < 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
                this.trueSave = false;
            } else if(!this.trueSave) {
                if(Math.random() > .5) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            } else {
                if(_ballXInc > 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            this.setAnimType("once", this.saveSide + "Jump");
            this.animEndedFunc = this.endJump;
        };
        EnemySave2.prototype.endJump = function () {
            if(!this.trueSave) {
                var tempX = Math.random() * 210 + 40;
                if(this.saveSide == "left") {
                    tempX *= -1;
                }
                this.targY = -(Math.random() * 600 + 100);
                this.saveTweenX = TweenLite.to(this, 1, {
                    targX: tempX,
                    ease: "Cubic.easeOut"
                });
                this.saveTweenY = TweenLite.to(this, .5, {
                    targY: 500,
                    ease: "Linear.easeNone"
                });
            } else {
                var tempX = Math.min(Math.max(-this.ballXInc * 300, -275), 275) * this.accuracyScale;
                this.targY = Math.max((this.ballYInc + 500) / 1.5, -850) * this.accuracyScale;
                this.saveTweenX = TweenLite.to(this, .4, {
                    targX: tempX,
                    ease: "Cubic.easeOut"
                });
                this.saveTweenY = TweenLite.to(this, .5, {
                    targY: 500,
                    ease: "Linear.easeNone"
                });
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        EnemySave2.prototype.land = function () {
            this.hasLanded = true;
            this.setAnimType("once", this.saveSide + "Land");
            this.animEndedFunc = null;
            playSound("saveLand");
            if(this.saveSide == "left") {
                addSpray("left", this.x + 50, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 140, canvas.height / 2 + 21, .6);
            } else {
                addSpray("left", this.x + 140, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 50, canvas.height / 2 + 21, .6);
            }
        };
        EnemySave2.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.targX;
            this.jumpHeight += this.targY * delta;
            this.y = canvas.height / 2 + this.jumpHeight;
            if(this.y > canvas.height / 2) {
                this.y = canvas.height / 2;
                if(!this.hasLanded) {
                    this.land();
                }
            }
        };
        EnemySave2.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave2;
    })(Utils.AnimSprite);
    Elements.EnemySave2 = EnemySave2;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave3 = (function (_super) {
        __extends(EnemySave3, _super);
        function EnemySave3(_oImgData) {
                _super.call(this, _oImgData, 18, 45, "ambient");
            this.targX = 0;
            this.targY = 0;
            this.hoverInc = 0;
            this.isMovingRandomly = false;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.offsetY = -this.oImgData.oData.spriteHeight / 2 + 20;
            this.targX = 0;
            this.targY = 0;
            this.reset();
        }
        EnemySave3.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            this.accuracyScale = getAccuracyScale();
            if(!this.isMovingRandomly) {
                this.tweenRandomPos();
            }
        };
        EnemySave3.prototype.tweenRandomPos = function () {
            var _this = this;
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = true;
            this.saveTween = TweenLite.to(this, 3, {
                targX: Math.random() * 400 - 200,
                targY: Math.random() * 60 - 50,
                ease: "Quad.easeInOut",
                onComplete: function () {
                    _this.tweenRandomPos();
                }
            });
        };
        EnemySave3.prototype.checkBallHit = function (_bx, _by) {
            if(_bx > this.x - 55 && _bx < this.x + 55 && _by > this.y - 85 && _by < this.y + 25) {
                return true;
            } else {
                return false;
            }
        };
        EnemySave3.prototype.makeSave = function (_ballXInc, _ballYInc) {
            playSound("saveFly" + Math.floor(Math.random() * 2));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            if(ball.isGoldBall) {
                this.accuracyScale = .2;
            }
            this.saveSide = "right";
            if(this.ballXInc * 300 > canvas.width / 2 - this.x) {
                this.saveSide = "left";
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = this.stopAnim;
            var tempX = Math.min(Math.max(-this.ballXInc * 300, -275), 275);
            var tempY = Math.min(Math.max((this.ballYInc + 1200) / 15, -90), 15);
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = false;
            this.saveTween = TweenLite.to(this, .5 + (1 - (this.accuracyScale * 1)), {
                targX: tempX,
                targY: tempY,
                ease: "Cubic.easeInOut",
                onComplete: function () {
                }
            });
        };
        EnemySave3.prototype.stopAnim = function () {
            this.setAnimType("once", this.saveSide + "Stop");
            this.animEndedFunc = this.ambientAnim;
        };
        EnemySave3.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
            this.tweenRandomPos();
        };
        EnemySave3.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.hoverInc += delta;
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + Math.sin(this.hoverInc * 10) * 7;
        };
        EnemySave3.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave3;
    })(Utils.AnimSprite);
    Elements.EnemySave3 = EnemySave3;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave1 = (function (_super) {
        __extends(EnemySave1, _super);
        function EnemySave1(_oImgData) {
                _super.call(this, _oImgData, 18, 45, "ambient");
            this.targX = 0;
            this.targY = 0;
            this.hoverInc = 0;
            this.isMovingRandomly = false;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.offsetY = -this.oImgData.oData.spriteHeight / 2 + 35;
            this.reset();
        }
        EnemySave1.prototype.reset = function () {
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = false;
            this.targX = 0;
            this.targY = 0;
            this.setAnimType("loop", "ambient");
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave1.prototype.checkBallHit = function (_bx, _by) {
            if(_bx > this.x - 40 && _bx < this.x + 40 && _by > this.y - 80 && _by < this.y) {
                return true;
            } else {
                return false;
            }
        };
        EnemySave1.prototype.makeSave = function (_ballXInc, _ballYInc) {
            var _this = this;
            playSound("saveFly" + Math.floor(Math.random() * 2));
            for(var i = 0; i < 5; i++) {
                setTimeout(function () {
                    addFirework(0, _this.x + Math.random() * 20 - 10, _this.y - 25 + Math.random() * 20 - 10, 1, false);
                }, i * 50);
            }
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            if(ball.isGoldBall) {
                this.accuracyScale = .2;
            }
            this.saveSide = "right";
            if(this.ballXInc * 300 > canvas.width / 2 - this.x) {
                this.saveSide = "left";
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = this.stopAnim;
            var tempX = Math.min(Math.max(-this.ballXInc * 300, -275), 275);
            var tempY = Math.min(Math.max((this.ballYInc + 1200) / 1, -90), 20);
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = false;
            this.saveTween = TweenLite.to(this, .5 + (1 - (this.accuracyScale * 1)), {
                targX: tempX,
                targY: tempY,
                ease: "Cubic.easeInOut",
                onComplete: function () {
                }
            });
        };
        EnemySave1.prototype.stopAnim = function () {
            this.setAnimType("once", this.saveSide + "Stop");
            this.animEndedFunc = this.smallAmbientAnim;
        };
        EnemySave1.prototype.smallAmbientAnim = function () {
            this.setAnimType("loop", "smallAmbient");
            this.tweenRandomPos();
        };
        EnemySave1.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
            this.tweenRandomPos();
        };
        EnemySave1.prototype.tweenRandomPos = function () {
            var _this = this;
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = true;
            this.saveTween = TweenLite.to(this, 1, {
                targX: Math.random() * 400 - 200,
                targY: Math.random() * 60 - 50,
                ease: "Quad.easeInOut",
                onComplete: function () {
                    _this.tweenRandomPos();
                }
            });
        };
        EnemySave1.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            if(this.animId == "ambient") {
                this.hoverInc = 0;
            } else {
                this.hoverInc += delta;
            }
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + Math.sin(this.hoverInc * 10) * 5;
        };
        EnemySave1.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave1;
    })(Utils.AnimSprite);
    Elements.EnemySave1 = EnemySave1;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave4 = (function (_super) {
        __extends(EnemySave4, _super);
        function EnemySave4(_oImgData) {
                _super.call(this, _oImgData, 22, 45, "ambient");
            this.targX = 0;
            this.targY = 0;
            this.hitOffsetX = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.offsetY = -this.oImgData.oData.spriteHeight / 2 + 40;
            this.reset();
        }
        EnemySave4.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            if(this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if(this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.jumpHeight = 0;
            this.hasLanded = false;
            this.hitOffsetX = 0;
            this.trueSave = true;
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave4.prototype.checkBallHit = function (_bx, _by) {
            if(_bx > this.x - 85 + this.hitOffsetX && _bx < this.x + 85 + this.hitOffsetX && _by > this.y - 60 && _by < this.y + 60) {
                return true;
            } else {
                return false;
            }
        };
        EnemySave4.prototype.makeSave = function (_ballXInc, _ballYInc) {
            playSound("saveJump" + Math.floor(Math.random() * 3));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            this.saveSide = "right";
            this.hitOffsetX = 25;
            if(ball.isGoldBall) {
                if(_ballXInc < 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
                this.trueSave = false;
            } else if(!this.trueSave) {
                if(Math.random() > .5) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            } else {
                if(_ballXInc > 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            this.setAnimType("once", this.saveSide + "Jump");
            this.animEndedFunc = this.endJump;
        };
        EnemySave4.prototype.endJump = function () {
            if(!this.trueSave) {
                var tempX = Math.random() * 210 + 40;
                if(this.saveSide == "left") {
                    tempX *= -1;
                }
                this.targY = -(Math.random() * 600 + 100);
                this.saveTweenX = TweenLite.to(this, 1, {
                    targX: tempX,
                    ease: "Cubic.easeOut"
                });
                this.saveTweenY = TweenLite.to(this, .5, {
                    targY: 500,
                    ease: "Linear.easeNone"
                });
            } else {
                var tempX = Math.min(Math.max(-this.ballXInc * 300, -275), 275) * this.accuracyScale;
                this.targY = Math.max((this.ballYInc + 500) / 1.5, -850) * this.accuracyScale;
                this.saveTweenX = TweenLite.to(this, .4, {
                    targX: tempX,
                    ease: "Cubic.easeOut"
                });
                this.saveTweenY = TweenLite.to(this, .5, {
                    targY: 500,
                    ease: "Linear.easeNone"
                });
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        EnemySave4.prototype.land = function () {
            this.hasLanded = true;
            this.setAnimType("once", this.saveSide + "Land");
            this.animEndedFunc = null;
            playSound("saveLand");
            if(this.saveSide == "left") {
                addSpray("left", this.x + 50, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 140, canvas.height / 2 + 21, .6);
            } else {
                addSpray("left", this.x + 140, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 50, canvas.height / 2 + 21, .6);
            }
        };
        EnemySave4.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.targX;
            this.jumpHeight += this.targY * delta;
            this.y = canvas.height / 2 + this.jumpHeight;
            if(this.y > canvas.height / 2) {
                this.y = canvas.height / 2;
                if(!this.hasLanded) {
                    this.land();
                }
            }
        };
        EnemySave4.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave4;
    })(Utils.AnimSprite);
    Elements.EnemySave4 = EnemySave4;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave5 = (function (_super) {
        __extends(EnemySave5, _super);
        function EnemySave5(_oImgData) {
                _super.call(this, _oImgData, 18, 45, "ambient");
            this.targX = 0;
            this.targY = 0;
            this.hoverInc = 0;
            this.isMovingRandomly = false;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.offsetY = -this.oImgData.oData.spriteHeight / 2 + 0;
            this.reset();
        }
        EnemySave5.prototype.reset = function () {
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = false;
            this.targX = 0;
            this.targY = 0;
            this.setAnimType("loop", "ambient");
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave5.prototype.checkBallHit = function (_bx, _by) {
            if(_bx > this.x - 40 && _bx < this.x + 40 && _by > this.y - 120 && _by < this.y - 10) {
                return true;
            } else {
                return false;
            }
        };
        EnemySave5.prototype.makeSave = function (_ballXInc, _ballYInc) {
            var _this = this;
            playSound("saveFly" + Math.floor(Math.random() * 2));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            if(ball.isGoldBall) {
                this.accuracyScale = .2;
            }
            this.saveSide = "right";
            if(this.ballXInc * 300 > canvas.width / 2 - this.x) {
                this.saveSide = "left";
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = this.stopAnim;
            var tempX = Math.min(Math.max(-this.ballXInc * 300, -275), 275);
            var tempY = Math.min(Math.max((this.ballYInc + 1500) / 15, -90), 50);
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = false;
            this.saveTween = TweenLite.to(this, .5 + (1 - (this.accuracyScale * 1)), {
                targX: tempX,
                targY: tempY,
                ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.animEndedFunc = _this.tweenRandomPos();
                }
            });
        };
        EnemySave5.prototype.stopAnim = function () {
            this.setAnimType("once", this.saveSide + "Stop");
            this.animEndedFunc = null;
        };
        EnemySave5.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
            this.tweenRandomPos();
        };
        EnemySave5.prototype.tweenRandomPos = function () {
            var _this = this;
            if(this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = true;
            this.saveTween = TweenLite.to(this, 2, {
                targX: 0,
                targY: 0,
                ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.tweenRandomPos();
                }
            });
        };
        EnemySave5.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.hoverInc += delta;
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + Math.sin(this.hoverInc * 5) * 5;
        };
        EnemySave5.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave5;
    })(Utils.AnimSprite);
    Elements.EnemySave5 = EnemySave5;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Wipe = (function () {
        function Wipe() {
            this.canDisplay = false;
            this.inGoal = false;
            this.stackedFunc = null;
        }
        Wipe.prototype.trigger = function (_func, _midFunc) {
            if (typeof _midFunc === "undefined") { _midFunc = null; }
            var _this = this;
            if(this.wipeTween && this.wipeTween.isActive()) {
                this.stackedFunc = _func;
                return;
            }
            if(oGameData.curTime <= 0 && !oGameData.timesUp) {
                oGameData.timesUp = true;
                if(gameState == "shooting") {
                    _func = initGoalkeepingIntro;
                    playSound("endWhistle");
                } else {
                    _func = initGoalkeepingComplete;
                    playSound("endWhistle");
                }
            }
            this.oWipeImgData = assetLib.getData("wipe0");
            this.x = -canvas.width * 2;
            this.canDisplay = true;
            if(this.wipeTween) {
                this.wipeTween.kill();
            }
            this.wipeTween = TweenLite.to(this, .2, {
                x: -canvas.width / 2,
                ease: "Linear.easeNone",
                onComplete: function () {
                    if(_midFunc) {
                        _midFunc();
                    }
                    _func();
                    _this.wipeTween = TweenLite.to(_this, .2, {
                        x: canvas.width,
                        ease: "Linear.easeNone",
                        onComplete: function () {
                            _this.canDisplay = false;
                            resizeCanvas();
                            if(_this.stackedFunc != null) {
                                _this.trigger(_this.stackedFunc);
                                _this.stackedFunc = null;
                            }
                        }
                    });
                }
            });
        };
        Wipe.prototype.render = function () {
            if(this.canDisplay) {
                ctx.drawImage(this.oWipeImgData.img, 0, 0, this.oWipeImgData.img.width, this.oWipeImgData.img.height, this.x, 0, canvas.width * 2, canvas.height);
            }
        };
        return Wipe;
    })();
    Elements.Wipe = Wipe;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Tutorial = (function (_super) {
        __extends(Tutorial, _super);
        function Tutorial(_oImgData, _tutBg) {
                _super.call(this, _oImgData, 16, 45, "anim");
            this.tutBg = 0;
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.tutBg = _tutBg;
            this.setAnimType("loop", "anim");
        }
        Tutorial.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            if(this.tutBg == 0) {
                this.x = canvas.width / 2 + 100;
                this.y = canvas.height / 2 + 37;
            } else {
                this.x = canvas.width / 2 - 25;
                this.y = canvas.height / 2 + 45;
            }
        };
        Tutorial.prototype.render = function () {
            ctx.fillStyle = "rgba(0, 0, 85, 0.75)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].x;
            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].y;
            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].width;
            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].height;
            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height / 2 - bHeight / 2, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return Tutorial;
    })(Utils.AnimSprite);
    Elements.Tutorial = Tutorial;    
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var JSONData = (function () {
        function JSONData() {
            this.textData = {
                "font0": {
                    "en": "Mouse Memoirs",
                    "fr": "Mouse Memoirs",
                    "it": "Mouse Memoirs",
                    "es": "Mouse Memoirs",
                    "de": "Mouse Memoirs",
                    "pt": "Mouse Memoirs",
                    "hu": "Mouse Memoirs",
                    "ro": "BenchNine ",
                    "pl": "Mouse Memoirs",
                    "ru": "PT Sans Narrow",
                    "nl": "Mouse Memoirs",
                    "no": "Mouse Memoirs",
                    "da": "Mouse Memoirs",
                    "ar": "Mada",
                    "tr": "Mouse Memoirs",
                    "bg": "PT Sans Narrow",
                    "es-419": "Mouse Memoirs",
                    "pt-br": "Mouse Memoirs",
                    "cs": "Mouse Memoirs",
                    "sv": "Mouse Memoirs"
                },
                "font1": {
                    "en": "Bangers",
                    "fr": "Bangers",
                    "it": "Bangers",
                    "es": "Bangers",
                    "de": "Bangers",
                    "pt": "Bangers",
                    "hu": "Bangers",
                    "ro": "Bangers",
                    "pl": "Bangers",
                    "ru": "Russo One",
                    "nl": "Bangers",
                    "no": "Bangers",
                    "da": "Bangers",
                    "ar": "Mada",
                    "tr": "Bangers",
                    "bg": "Russo One",
                    "cs": "Bangers",
                    "sv": "Bangers"
                },
                "congrats": {
                    "en": "XIN CHÚC MỪNG!",
                    "fr": "FÉLICITATIONS !",
                    "it": "COMPLIMENTI!",
                    "es": "¡ENHORABUENA!",
                    "de": "GLÜCKWUNSCH!",
                    "pt": "PARABÉNS!",
                    "hu": "MEGCSINÁLTAD!",
                    "ro": "FELICITĂRI!",
                    "pl": "GRATULACJE!",
                    "ru": "ПОЗДРАВЛЯЕМ!",
                    "nl": "GEFELICITEERD!",
                    "cs": "GRATULUJEME!",
                    "no": "GRATULERER!",
                    "sv": "GRATTIS!",
                    "da": "TILLYKKE!",
                    "ar": "مبروك!",
                    "tr": "TEBRİKLER!",
                    "bg": "ПОЗДРАВЛЕНИЯ!"
                },
                "hoarding": {
                    "en": "TOON CUP 2020",
                    "es": "COPA TOON 2020",
                    "de": "TOON CUP 2020",
                    "pt": "LIGA TOON 2020",
                    "hu": "CARTOON KUPA 2020",
                    "ro": "CUPA CARTOON 2020",
                    "pl": "PUCHAR CARTOONA 2020",
                    "bg": "TOON CUP 2020",
                    "ru": "КУБОК МУЛЬТОВ 2020",
                    "nl": "TOON CUP 2020",
                    "cs": "TOON CUP 2020",
                    "no": "TOON CUP 2020",
                    "sv": "TOON CUP 2020",
                    "da": "TOON CUP 2020",
                    "ar": "كأس تون 2020",
                    "tr": "TOON KUPASI 2020",
                    "fr": "TOON CUP 2020",
                    "it": "TOON CUP 2020"
                },
                "extBut": {
                    "en": "localhost",
                    "es": "Jugar a Copa Toon",
                    "de": "Toon Cup spielen",
                    "pt": "Jogar Liga Toon",
                    "hu": "Toon kupa indítása",
                    "ro": "Joacă Cupa Cartoon",
                    "pl": "Zagraj w Puchar Cartoona",
                    "bg": "Играй Toon Cup ",
                    "ru": "Сыграй в «Кубок мультов»",
                    "nl": "Speel Toon Cup",
                    "cs": "Zahraj si Toon Cup",
                    "no": "Spill Toon Cup",
                    "sv": "Spela Toon Cup",
                    "da": "Spil Toon Cup",
                    "ar": "العب كأس تون",
                    "tr": "Toon Kupası Oyna",
                    "fr": "Joue à Toon Cup",
                    "it": "Gioca a Cartoon Cup"
                },
                "continue": {
                    "en": "Chơi tiếp",
                    "es": "Continuar",
                    "de": "Weiter",
                    "pt": "Continuar",
                    "hu": "Folytatás",
                    "ro": "Continuă",
                    "pl": "Kontynuuj",
                    "bg": "Продължи",
                    "ru": "Продолжить",
                    "nl": "Verder",
                    "cs": "Pokračovat",
                    "no": "Fortsett",
                    "sv": "Fortsätt",
                    "da": "Fortsæt",
                    "ar": "متابعة",
                    "tr": "Devam",
                    "fr": "Continuer",
                    "it": "Continua"
                },
                "quitGame": {
                    "en": "Thoát",
                    "es": "Salir de la partida actual",
                    "de": "Aktuelles Spiel beenden",
                    "pt": "Desistir do jogo atual",
                    "hu": "Kilépés a jelenlegi játékból",
                    "ro": "Renunță la jocul actual",
                    "pl": "Zakończ grę",
                    "bg": "Излез от играта",
                    "ru": "Выйти из игры",
                    "nl": "Stoppen met dit spel",
                    "cs": "Ukončit tuto hru",
                    "no": "Avslutt pågående spill",
                    "sv": "Avsluta pågående match",
                    "da": "Afslut nuværende spil",
                    "ar": "إنهاء اللعبة الحالية",
                    "tr": "Bu Oyundan Çık",
                    "fr": "Quitter la partie en cours",
                    "it": "Esci dal gioco"
                },
                "quitGameQuestion": {
                    "en": "Bạn muốn thoát khỏi trò chơi?",
                    "es": "¿Seguro que quieres salir de la partida?",
                    "de": "Spiel wirklich beenden?",
                    "pt": "Queres realmente desistir do jogo atual?",
                    "hu": "Biztosan kilépsz a jelenlegi játékból?",
                    "ro": "Renunță la jocul actual - ești sigur?",
                    "pl": "Czy na pewno chcesz zakończyć grę?",
                    "bg": "Сигурен ли си, че искаш да излезеш от играта? ",
                    "ru": "Хочешь выйти из игры?",
                    "nl": "Wil je stoppen met dit spel?",
                    "cs": "Opravdu chceš ukončit hru?",
                    "no": "Er du sikker på at du vil avslutte pågående spill?",
                    "sv": "Vill du verkligen avsluta den pågående matchen?",
                    "da": "Afslutte nuværende spil - er du sikker?",
                    "ar": "مغادرة اللعبة الحالية - هل أنت متأكد؟",
                    "tr": "Bu oyundan çıkmak istediğine emin misin? ",
                    "fr": "Veux-tu vraiment quitter la partie en cours ?",
                    "it": "Vuoi proprio uscire dal gioco?"
                },
                "quit": {
                    "en": "Có",
                    "es": "Salir",
                    "de": "Beenden",
                    "pt": "Desistir",
                    "hu": "Kilépés",
                    "ro": "Renunță",
                    "pl": "Zakończ",
                    "bg": "Излез",
                    "ru": "Выйти",
                    "nl": "Stoppen",
                    "cs": "Odejít",
                    "no": "Avslutt",
                    "sv": "Avsluta",
                    "da": "Afslut",
                    "ar": "مغادرة",
                    "tr": "Çıkış",
                    "fr": "Quitter",
                    "it": "Esci"
                },
                "cancel": {
                    "en": "Không",
                    "es": "Cancelar",
                    "de": "Abbrechen",
                    "pt": "Cancelar",
                    "hu": "Mégse",
                    "ro": "IEŞI",
                    "pl": "Anuluj",
                    "bg": "ОТКАЗ",
                    "ru": "Отмена",
                    "nl": "Annuleren",
                    "cs": "Zrušit",
                    "no": "Avbryt",
                    "sv": "Avbryt",
                    "da": "Annuller",
                    "ar": "إلغاء",
                    "tr": "İptal",
                    "fr": "Annuler",
                    "it": "Annulla"
                },
                "youWon1": {
                    "en": "Bạn đã đánh bại tất cả các đội!",
                    "es": "¡Has vencido a todos!",
                    "de": "Du hast alle besiegt!",
                    "pt": "Venceste toda a gente!",
                    "hu": "Mindenkit legyőztél!",
                    "ro": "Îi bați pe toți!",
                    "pl": "Pokonałeś wszystkich!",
                    "bg": "Ти победи всички!",
                    "ru": "Все соперники побеждены!",
                    "nl": "Je hebt iedereen verslagen!",
                    "cs": "Ty porazíš každého!",
                    "no": "Du slo alle!",
                    "sv": "Du slog alla!",
                    "da": "Du slog alle!",
                    "ar": "لقد فزت على الجميع!",
                    "tr": "Herkesi yendin!",
                    "fr": "Tu as battu tout le monde !",
                    "it": "Hai battuto tutti!"
                },
                "youWon0": {
                    "en": "Bạn thắng!",
                    "es": "¡Has ganado!",
                    "de": "Gewonnen!",
                    "pt": "Ganhaste!",
                    "hu": "Nyertél!",
                    "ro": "Ai câştigat!",
                    "pl": "Wygrywasz!",
                    "bg": "Ти победи!",
                    "ru": "Победа!",
                    "nl": "Je hebt gewonnen!",
                    "cs": "Výhra!",
                    "no": "Du vant!",
                    "sv": "Du vann!",
                    "da": "Du vandt!",
                    "ar": "لقد فزت!",
                    "tr": "Kazandın!",
                    "fr": "Tu as gagné ! ",
                    "it": "Hai vinto!"
                },
                "youLost": {
                    "en": "Bạn thua!",
                    "es": "¡Has perdido!",
                    "de": "Verloren!",
                    "pt": "Perdeste!",
                    "hu": "Vesztettél!",
                    "ro": "Ai pierdut!",
                    "pl": "Przegrałeś!",
                    "bg": "Ти изгуби!",
                    "ru": "Поражение!",
                    "nl": "Je hebt verloren!",
                    "cs": "Prohra!",
                    "no": "Du tapte!",
                    "sv": "Du förlorade!",
                    "da": "Du tabte!",
                    "ar": "لقد خسرت!",
                    "tr": "Kaybettin!",
                    "fr": "Tu as perdu !",
                    "it": "Hai perso!"
                },
                "draw": {
                    "en": "Kết quả hòa!",
                    "es": "¡Empate!",
                    "de": "Unentschieden!",
                    "pt": "Empate!",
                    "hu": "Döntetlen!",
                    "ro": "E remiză!",
                    "pl": "Remis!",
                    "bg": "Равенство!",
                    "ru": "Ничья!",
                    "nl": "Gelijkspel!",
                    "cs": "Remíza!",
                    "no": "Det ble uavgjort!",
                    "sv": "Oavgjort!",
                    "da": "Det blev uafgjort!",
                    "ar": "تعادل!",
                    "tr": "Berabere!",
                    "fr": "Égalité !",
                    "it": "Pareggio!"
                },
                "matchWon0": {
                    "en": "Chúng ta đã chơi tốt nhưng không gặp may!",
                    "es": "Bien hecho, ¡pero aún no se ha acabado!",
                    "de": "Gut gemacht, aber es ist noch nicht vorbei!",
                    "pt": "Bem jogado, mas ainda não terminou!",
                    "hu": "Szép volt, de még nincs vége!",
                    "ro": "Bravo, dar încă nu s-a terminat!",
                    "pl": "Dobra robota, ale to jeszcze nie koniec!",
                    "bg": "Браво, но още нищо не е приключило!",
                    "ru": "Неплохо, но мы еще себя покажем!",
                    "nl": "Goed gedaan, maar het is nog niet voorbij!",
                    "cs": "Dobrá práce, ale ještě nekončíme!",
                    "no": "Bra jobbet, men det er ikke over ennå!",
                    "sv": "Bra jobbat, men det är inte över än!",
                    "da": "Godt klaret, men det er ikke overstået endnu!",
                    "ar": "أحسنت اللعب، لكن الأمر لم ينتهِ بعد!",
                    "tr": "İyi oyundu ama daha bitmedi!",
                    "fr": "Bien joué, mais ce n'est pas fini !",
                    "it": "Gran bel gioco, ma non è ancora finita!"
                },
                "matchWon1": {
                    "en": "Chúng ta đã cố gắng hết sức rồi.",
                    "es": "Los guerreros deben saber perder con dignidad.",
                    "de": "Krieger müssen wissen, wie man würdevoll verliert.",
                    "pt": "Os guerreiros devem saber perder com dignidade.",
                    "hu": "Egy harcosnak tudnia kell emelt fővel veszíteni.",
                    "ro": "Războinicii trebuie să știe cum să piardă cu demnitate.",
                    "pl": "Wojownicy wiedzą, jak przegrywać z godnością.",
                    "bg": "Воините трябва да могат да губят с чест.",
                    "ru": "Воины должны уметь проигрывать достойно.",
                    "nl": "Een krijger moet ook bij een nederlaag nederigheid tonen.",
                    "cs": "Válečníci musí umět prohrát se ctí.",
                    "no": "Krigere må vite hvordan man taper med verdighet.",
                    "sv": "Krigare måste kunna förlora med värdighet.",
                    "da": "En kriger skal vide, hvordan man taber ærefuldt.",
                    "ar": "على الأبطال تقبل الخسارة برحابة صدر.",
                    "tr": "Savaşçı dediğin edebiyle kaybetmeyi bilir.",
                    "fr": "Les guerriers doivent savoir perdre en restant dignes.",
                    "it": "I veri guerrieri sanno come perdere con dignità."
                },
                "matchWon2": {
                    "en": "Chúng tôi sẽ phục thù ở trận sau!",
                    "es": "¡Maldición! ¡Ya ganaremos la próxima vez!",
                    "de": "Verflucht. Nächstes Mal gewinnen wir!",
                    "pt": "Caramba... mas vamos vencer da próxima vez!",
                    "hu": "Nem baj, legközelebb mi nyerünk!",
                    "ro": "Fir-ar, dar vom câștiga data viitoare!",
                    "pl": "Niech to, wygramy następnym razem!",
                    "bg": "Кофти, но следващия път ще спечелим!",
                    "ru": "Эх! Ну, в следующий раз победим.",
                    "nl": "Drommels! Volgende keer winnen we wel!",
                    "cs": "Zatraceně. Ale příště vyhrajeme my!",
                    "no": "Søren også, men vi kommer til å vinne neste gang!",
                    "sv": "Attans, men vi vinner nästa gång!",
                    "da": "Æv, men vi vinder næste gang!",
                    "ar": "أكره الخسارة، لكن سأفوز في المرة المقبلة!",
                    "tr": "Hay aksi! Bir dahaki sefere biz kazanacağız.",
                    "fr": "Mince, mais nous gagnerons la prochaine fois !",
                    "it": "Mannaggia! Ma la prossima vinciamo noi!"
                },
                "matchWon3": {
                    "en": "Chúng tôi đã thua trên tư thế ngẩng cao đầu!",
                    "es": "Hemos perdido, ¡pero perdimos como héroes!",
                    "de": "Wir haben verloren, aber heldenhaft!",
                    "pt": "Podemos ter perdido, mas caímos como heróis!",
                    "hu": "Lehet, hogy vesztettünk, de legalább hősiesen!",
                    "ro": "Om fi pierdut noi, dar am făcut-o eroic.",
                    "pl": "Przegraliśmy, ale za to w jakim stylu!",
                    "bg": "Загубихме, но го направихме като герои!",
                    "ru": "Мы, конечно, проиграли... но проиграли героически!",
                    "nl": "We hebben verloren. Op heldhaftige wijze, weliswaar!",
                    "cs": "Sice jsme prohráli, ale jako hrdinové!",
                    "no": "Selv om vi tapte, gjorde vi det på heroisk vis!",
                    "sv": "Vi må ha förlorat, men vi gjorde det hjältemodigt!",
                    "da": "Vi tabte måske, men vi gjorde det heroisk!",
                    "ar": "حتى عندما نخسر، نخسر بشرف!",
                    "tr": "Yenildiysek de kahramanca yenildik!",
                    "fr": "Certes, nous avons perdu, mais héroïquement !",
                    "it": "Avremo anche perso, ma da grandi!"
                },
                "matchWon4": {
                    "en": "Xin chúc mừng đội các bạn.",
                    "es": "El equipo de Polar está avergonzado.",
                    "de": "Eisbärs Team spürt die Schande.",
                    "pt": "A equipa do Polar está com vergonha.",
                    "hu": "Jeges csapata elsüllyed szégyenében.",
                    "ro": "Echipa Ursului Polar se simte rușinată.",
                    "pl": "Drużynie Lodomira jest wstyd.",
                    "bg": "Отборът на Белия се срамува.",
                    "ru": "Команде Белого стыдно.",
                    "nl": "Het team van IJsbeer schaamt zich.",
                    "cs": "Leďákův tým se stydí.",
                    "no": "Laget til Isbjørn skammer seg.",
                    "sv": "Isbjörns lag skäms.",
                    "da": "Isbjørns hold skammer sig.",
                    "ar": "يشعر فريق قطبي بحرج شديد.",
                    "tr": "Kutup Ayısı'nın takımı utanç içinde.",
                    "fr": "L'équipe de Polaire ressent de la honte.",
                    "it": "La squadra di Orso Bianco è umiliata."
                },
                "matchWon5": {
                    "en": "Chúng ta đã mắc phải quá nhiều sai lầm!",
                    "es": "¡Jooo, ya sabía yo que tendríamos que haber usado más tecnología!",
                    "de": "Maaaann, ich hätte mehr Gadgets einsetzen sollen!",
                    "pt": "Meu, eu sabia que devia ter usado mais gadgets!",
                    "hu": "Tudtam, hogy több kütyüt kellett volna bevetnem!",
                    "ro": "Știam eu că trebuia să fi folosit mai multe dispozitive!",
                    "pl": "Rany, wiedziałem, że trzeba było użyć więcej gadżetów!",
                    "bg": "Човечееее, знаех си, че трябваше да използвам повече джаджи!",
                    "ru": "Ну вот! Нужно было использовать больше гаджетов!",
                    "nl": "Argh, ik had meer gadgets moeten gebruiken!",
                    "cs": "Do háje, já věděl, že mám použít víc vychytávek!",
                    "no": "Jeg visste vi burde brukt flere dingser!",
                    "sv": "Typiskt, jag visste att vi skulle ha använt fler prylar!",
                    "da": "Argh, jeg vidste at jeg skulle have brugt flere gadgets!",
                    "ar": "يا خسارة! كان علي استخدام المزيد من الأدوات!",
                    "tr": "Aman! Keşke daha çok alet kullansaydım.",
                    "fr": "Si seulement j'avais utilisé plus de gadgets !",
                    "it": "Madddaaai! Lo sapevo! Avremmo dovuto usare più gadget!"
                },
                "matchLost0": {
                    "en": "Chúng ta là những nhà vô địch!",
                    "es": "¡Victoria! ¡Todos Darwineamos!",
                    "de": "Ja! So sehen Sieger aus!",
                    "pt": "Sim! Somos todos Vencedarwins!",
                    "hu": "Igen! Végre dia-hal-maskodtunk!",
                    "ro": "Da! Suntem Dar-campioni!",
                    "pl": "Tak! Zwyciężyliśmy darwinistycznie!",
                    "bg": "Да! Ние Дар-винаги печелим! ",
                    "ru": "Ура! Команда Дарвина в ударе!",
                    "nl": "Ja! Wij zijn allemaal Dar-winnaars!",
                    "cs": "Jo! Všichni jsme Dar-vítězové!",
                    "no": "Ja! Vi er alle Dar-vinnere!",
                    "sv": "Ja! Vi är alla Dar-vinnare!",
                    "da": "Ja! Vi er alle Dar-vindere!",
                    "ar": "أجل! لقد فزنا!",
                    "tr": "Yaşasın! Darwin hep kazanır!",
                    "fr": "Oui ! Nous sommes tous des Dar-winners !",
                    "it": "Evvaiii! Siamo tutti Dar-vincenti!"
                },
                "matchLost1": {
                    "en": "Chúng tôi sẽ mở tiệc ăn mừng ở Sweet Justice!",
                    "es": "¡Celebremos la victoria en Dulcejusticia!",
                    "de": "Feiern wir unseren Sieg im Sweet Justice!",
                    "pt": "Vamos celebrar a nossa vitória em Sweet Justice!",
                    "hu": "Ünnepeljük győzelmünket a Sweet Justice-nál!",
                    "ro": "Haideți să sărbătorim victoria la Sweet Justice!",
                    "pl": "Chodźmy świętować zwycięstwo do Słodkiej Sprawiedliwości!",
                    "bg": "Хайде да отпразнуваме победата в сладкарница!",
                    "ru": "Пора отметить победу мороженым!",
                    "nl": "Kom, we vieren onze overwinning bij Sweet Justice!",
                    "cs": "Oslavme vítězství ve Sweet Justice!",
                    "no": "La oss feire seieren vår på Søt hevn!",
                    "sv": "Låt oss fira vår seger på Sweet Justice!",
                    "da": "Lad os fejre vores sejr på Sweet Justice!",
                    "ar": "لنذهب إلى سويت جستس ونحتفل بالنصر الكبير!",
                    "tr": "Zaferimizi Sweet Justice'da kutlayalım!",
                    "fr": "Allons fêter cette victoire ensemble au Bar des Justiciers !",
                    "it": "Andiamo a festeggiare la vittoria da Sweet Justice!"
                },
                "matchLost2": {
                    "en": "Chúng tôi thắng hoàn toàn xứng đáng!",
                    "es": "¿A que nuestra victoria escuece en los ojos?",
                    "de": "Wir sind die Herren der Lauchringe!",
                    "pt": "Acho que te deixámos com lágrimas nos olhos, não foi!",
                    "hu": "Készítsétek elő a papírzsepiket!",
                    "ro": "Cred că te-am făcut să lăcrimezi!",
                    "pl": "Zrobiliśmy Cię na Szczypiora!",
                    "bg": "Усещам, че Луки ще ви накара да ридаете!",
                    "ru": "Не связывайтесь с Луком, если не хотите рыдать!",
                    "nl": "Ja, van zo'n Uitje moet je huilen, hè?",
                    "cs": "Zdá se, že jsme tě rozsekali jako cibuli!",
                    "no": "Vi sprang løkringer rundt deg denne gangen!",
                    "sv": "Det är lätt att gråta när man får stryk av en lök!",
                    "da": "Man skulle tro det var LØGn, så let vi vandt!",
                    "ar": "البطل أيها السادة هو البصل كالعادة!",
                    "tr": "Bu Soğan gözlerinizi yaşarttı!",
                    "fr": "Je dirais que l'Oignon fait la force !",
                    "it": "Ti abbiamo fatto lacrimare il giusto, eh?"
                },
                "matchLost3": {
                    "en": "Chúng tôi mới là những nhà vô địch thực sự!",
                    "es": "Somos héroes de verdad, no teníais ninguna posibilidad.",
                    "de": "Wir sind wahre Helden! Du hattest nie eine Chance!",
                    "pt": "Somos autênticos heróis, vocês nunca tiveram hipóteses!",
                    "hu": "Igazi hősök vagyunk, soha nem volt esélyetek!",
                    "ro": "Suntem eroi adevărați, n-a avut nicio șansă!",
                    "pl": "Jesteśmy prawdziwymi bohaterami, nie miałeś szans!",
                    "bg": "Ние сме истински герои и вие нямате шанс!",
                    "ru": "Мы — настоящие герои! Нам суждено было победить.",
                    "nl": "Wij zijn echte helden. Je maakte vanaf het begin al geen kans!",
                    "cs": "Jsme skuteční hrdinové, neměl jsi šanci!",
                    "no": "Vi er ekte helter, du hadde aldri en sjanse!",
                    "sv": "Vi är sanna hjältar. Ni hade aldrig en chans!",
                    "da": "Vi er ægte helte, I havde aldrig en chance!",
                    "ar": "أنا من سلالة الأبطال الحقيقيين، لذا فإن فرصتك بالفوز معدومة!",
                    "tr": "Gerçek kahramanlar biziz, sizin hiç şansınız yoktu!",
                    "fr": "Nous sommes de vrais héros - tu n'avais aucune chance de gagner !",
                    "it": "I veri eroi siamo noi. Non potevate scamparla."
                },
                "matchLost4": {
                    "en": "Xin chia sẻ nỗi buồn thua trận với các bạn.",
                    "es": "Nos inclinamos ante ti por perder con tan malos modos.",
                    "de": "Wir verneigen uns vor der Würdelosigkeit deiner Niederlage.",
                    "pt": "Fazemos uma vénia a quem perde de forma tão miserável.",
                    "hu": "Meghajolunk előttetek, hogy így kikaptatok.",
                    "ro": "Ne aplecăm în fața ta că ai pierdut atât de rușinos.",
                    "pl": "Oddajemy Ci pokłon za honorową porażkę.",
                    "bg": "Поклон, че загубихте с такъв финес.",
                    "ru": "Ваша неумелая игра поистине впечатляет.",
                    "nl": "Wie zo walgelijk hard kan verliezen, heeft ons respect.",
                    "cs": "Klaníme se ti, že jsi dokázal tak hanebně prohrát.",
                    "no": "Vi bøyer oss i støvet for at du tapte på så skammelig vis.",
                    "sv": "Vi bugar oss inför er ärelösa förlust.",
                    "da": "Vi bukker for jeres skammelige nederlag.",
                    "ar": "أنحني احترامًا لخسارتك المذلة.",
                    "tr": "Bu kadar efendice yenildiğiniz için önünüzde eğiliyoruz.",
                    "fr": "Nous nous inclinons devant toi pour avoir perdu si honteusement.",
                    "it": "Ci inchiniamo di fronte a perdenti tanto penosi!"
                },
                "matchLost5": {
                    "en": "Giờ là lúc chúng ta nên ăn mừng!",
                    "es": "¡Vamos a poner la musiquita de la victoria!",
                    "de": "Zeit für das Sieger-Mixtape!",
                    "pt": "É o momento de ouvir a playlist da vitória!",
                    "hu": "Most már lejátszhatom a győzelmi indulót!",
                    "ro": "E timpul să sărbătorim victoria!",
                    "pl": "Czas włączyć składankę zwycięzców!",
                    "bg": "Време е за победоносен химн!",
                    "ru": "Пора включить победную музыку!",
                    "nl": "Tijd om onze winnaarsmuziek op te zetten!",
                    "cs": "Přišel čas pustit vítěznou fanfáru!",
                    "no": "På tide å sette i kassetten med seiersmusikk!",
                    "sv": "Dags att sätta på segerlåtarna!",
                    "da": "Så er det tid til sejrsmusikken!",
                    "ar": "حان وقت سماع موسيقى النصر!",
                    "tr": "Zafer üzerine bir karışık kaset dinlemenin tam zamanı!",
                    "fr": "C'est le moment d'écouter notre hymne de la victoire !",
                    "it": "Ora di mettere l'audiocassetta con i mix della vittoria!"
                },
                "tournamentWon0": {
                    "en": "Năm sau chúng tôi sẽ trả thù…",
                    "es": "Pero si teníamos que haber Darwineado…",
                    "de": "Aber so sehen doch Sieger aus …",
                    "pt": "Mas nós devíamos ser Vencedarwins…",
                    "hu": "De nekünk kellett volna dia-hal-maskodnunk!",
                    "ro": "Dar trebuia să fim Dar-câștigători...",
                    "pl": "Przecież mieliśmy darwinistycznie wygrać...",
                    "bg": "Но нали трябваше Дар-винаги да печелим...",
                    "ru": "Что ж, команда Дарвина сегодня не в ударе...",
                    "nl": "Maar … Wij zijn toch de Dar-winnaars?",
                    "cs": "Ale vždyť jsme měli být Dar-vítězové...",
                    "no": "Men vi skulle jo være Dar-vinnere …",
                    "sv": "Men vi ska ju föreställa Dar-vinnare…",
                    "da": "Men vi skulle jo have været Dar-vindere...",
                    "ar": "ولكن كان يجب أن نفوز…",
                    "tr": "Ama Darwin hep kazanırdı...",
                    "fr": "Mais nous étions censés être les Dar-winners...",
                    "it": "Ma... non dovevamo essere Dar-vincenti?"
                },
                "tournamentWon1": {
                    "en": "Chúng ta cần luyện tập thêm nữa.",
                    "es": "Está claro que tenemos que entrenar más.",
                    "de": "Wir müssen eindeutig mehr trainieren.",
                    "pt": "É óbvio que precisamos de mais treino.",
                    "hu": "Nincs mese! Többet kell edzenünk.",
                    "ro": "Clar avem nevoie de mai mult antrenament.",
                    "pl": "Musimy jeszcze trochę potrenować.",
                    "bg": "Май трябва да тренираме повече.",
                    "ru": "Нам нужно больше тренироваться.",
                    "nl": "We moeten meer trainen, dat is wel duidelijk.",
                    "cs": "Očividně musíme víc trénovat.",
                    "no": "Vi trenger helt klart mer trening.",
                    "sv": "Vi behöver uppenbarligen öva mer.",
                    "da": "Vi har tydeligvis brug for at træne mere.",
                    "ar": "من الواضح أننا بحاجة إلى المزيد من التدريب.",
                    "tr": "Daha çok antrenmana ihtiyacımız olduğu kesin.",
                    "fr": "Clairement, nous avons encore besoin d'entraînement.",
                    "it": "Sicuramente dobbiamo allenarci di più."
                },
                "tournamentWon2": {
                    "en": "Honestly I'm not surprised but I am disappointed.",
                    "es": "La verdad es que no me sorprende, pero me decepciona igual.",
                    "de": "Ich bin nicht überrascht, nur enttäuscht.",
                    "pt": "Honestamente, não estou surpreendido, mas estou desiludido.",
                    "hu": "Őszintén: nem lepett meg, de csalódott vagyok.",
                    "ro": "Sincer, nu sunt surprins, dar sunt dezamăgit.",
                    "pl": "Nie dziwi mnie to, ale jestem rozczarowany.",
                    "bg": "Честно казано не съм изненадан, но съм разочарован.",
                    "ru": "Если честно, я не удивлен, хоть и разочарован.",
                    "nl": "Weet je, ik ben niet echt verrast maar wel teleurgesteld.",
                    "cs": "Upřímně, nepřekvapuje mě to, ale jsem zklamaný.",
                    "no": "For å være helt ærlig så er jeg ikke overrasket, men jeg er skuffet.",
                    "sv": "Ärligt talat är jag inte förvånad, men jag är besviken.",
                    "da": "Jeg er helt ærligt ikke overrasket, men jeg er skuffet.",
                    "ar": "بصراحة أنا لست متفاجئًا ولكنني خائب الظن.",
                    "tr": "Açıkçası şaşırmadım ama hüsrana uğradım.",
                    "fr": "Honnêtement, je ne suis pas surpris, mais je suis déçu.",
                    "it": "Non posso dire di essere sorpreso. Deluso, però, sì."
                },
                "tournamentWon3": {
                    "en": "Chúng ta đã mắc nhiều sai lầm hơn đội bạn.",
                    "es": "Es culpa de todos menos yo.",
                    "de": "Daran sind alle außer mir schuld.",
                    "pt": "É uma falha de todos, menos minha.",
                    "hu": "A vereség mindenki más hibája, nem az enyém.",
                    "ro": "E doar vina mea.",
                    "pl": "To winna innych, nie moja!",
                    "bg": "Всички сте виновни без мен.",
                    "ru": "Я виню всех, кроме себя.",
                    "nl": "Het ligt niet aan mij, maar aan de rest!",
                    "cs": "Za tohle můžou všichni kromě mě.",
                    "no": "Dette er alle andre sin feil, ikke min.",
                    "sv": "Detta är allas fel utom mitt.",
                    "da": "Dette er alle andres fejl end min.",
                    "ar": "هذا خطأ الجميع لكن ليس خطأي.",
                    "tr": "Bu ben hariç herkesin suçu.",
                    "fr": "Tout le monde est fautif, sauf moi.",
                    "it": "La colpa è di qualcun altro, non mia di certo."
                },
                "tournamentWon4": {
                    "en": "Các bạn giành cúp hoàn toàn thuyết phục.",
                    "es": "Polar reconoce que tus habilidades son superiores.",
                    "de": "Eisbär verneigt sich vor deinen überlegenen Fähigkeiten.",
                    "pt": "O Polar reconhece as tuas capacidades superiores.",
                    "hu": "Jeges elismeri kivételes képességeidet.",
                    "ro": "Ursul Polar îți recunoaște abilitățile superioare.",
                    "pl": "Lodomir uznaje Twoją wyższość na murawie.",
                    "bg": "Белия признава върховните ви умения.",
                    "ru": "Белый восторгается вашим мастерством.",
                    "nl": "IJsbeer ziet in dat je de betere speler bent.",
                    "cs": "Leďák uznává tvoje úžasné schopnosti.",
                    "no": "Isbjørn erkjenner at dine ferdigheter er overlegne.",
                    "sv": "Isbjörn erkänner er överlägsna förmåga.",
                    "da": "Isbjørn anerkender jeres overlegne evner.",
                    "ar": "قطبي يعترف بمهاراتك الخارقة.",
                    "tr": "Kutup Ayısı sizin üstünlüğünüzü kabul ediyor.",
                    "fr": "Polaire reconnaît la supériorité de ton jeu.",
                    "it": "Orso Bianco riconosce la tua superiorità di gioco."
                },
                "tournamentWon5": {
                    "en": "Dù sao cũng chúc mừng đội các bạn.",
                    "es": "Estoy casi seguro de que has hecho trampas.",
                    "de": "Du hast doch bestimmt gemogelt.",
                    "pt": "Estou convencido de que deves ter feito batota.",
                    "hu": "Meg vagyok róla győződve, hogy csaltatok.",
                    "ro": "Sunt sigur că ai trișat.",
                    "pl": "Coś mi się zdaje, że oszukiwałeś.",
                    "bg": "Почти съм убеден, че измамихте.",
                    "ru": "Даже не сомневаюсь, что вы жульничали.",
                    "nl": "Volgens mij heb je gewoon valsgespeeld!",
                    "cs": "Jsem si jistý, že to byl podvod.",
                    "no": "Jeg er ganske overbevist om at du må ha jukset.",
                    "sv": "Jag är rätt säker på att ni måste ha fuskat.",
                    "da": "Jeg er ret sikker på, at I må have snydt!",
                    "ar": "أنا متأكد أنك غششت.",
                    "tr": "Kesin hile yaptınız, buna eminim.",
                    "fr": "Je suis quasiment sûr que tu as triché.",
                    "it": "Sono quasi sicuro che devi aver barato."
                },
                "matchDraw0": {
                    "en": "Cơ hội vẫn chia đều cho cả 2 đội...",
                    "es": "¿Empate? ¡Viva, eso quiere decir que todos ganamos! O todos perdemos…",
                    "de": "Ein Unentschieden? Yaaay, dann haben ja beide Seiten gewonnen! Oder verloren ...",
                    "pt": "Empate? Isso significa que ambos ganhamos! Ou perdemos...",
                    "hu": "Döntetlen? Akkor mindkét csapat nyert! Vagy veszített…",
                    "ro": "Egalitate? Înseamnă că am câștigat amândoi! Sau am pierdut...",
                    "pl": "Remis? Czyli wszyscy wygrywamy! Albo przegrywamy…",
                    "bg": "Равенство? Ура, това означава, че всички печелим! Или губим...",
                    "ru": "Ничья? Ура-а, значит, мы оба выиграли! Или проиграли...",
                    "nl": "Gelijkspel? Jaaa, dan hebben we allebei gewonnen! Of … verloren?",
                    "cs": "Remíza? Ty jo, takže jsme oba vyhráli! Nebo prohráli…",
                    "no": "Uavgjort? Jippi, det betyr at vi begge vant! Eller tapte …",
                    "sv": "Oavgjort! Hurra, då vann vi alla! Eller förlorade…",
                    "da": "Uafgjort? Jaaah, så vinder begge hold! Eller taber...",
                    "ar": "تعادل؟ هذا يعني أن كلينا قد فاز! أو خسر...",
                    "tr": "Berabere mi? Yaşasın, bu iki tarafın da kazanması demek! Veya kaybetmesi...",
                    "fr": "Égalité ? Youpi, ça veut dire qu'on a tous gagné ! Ou perdu...",
                    "it": "Un pareggio? Allora abbiamo vinto tutti e due... O perso..."
                },
                "matchDraw1": {
                    "en": "Trình độ của 2 đội ngang ngửa song cuối cùng vẫn sẽ chỉ có 1 đội đi tiếp.",
                    "es": "Estamos igualados en el campo de batalla, pero solo puede haber un ganador.",
                    "de": "Wir sind einander auf dem Schlachtfeld ebenbürtig! Aber es kann nur einen Sieger geben.",
                    "pt": "Estamos claramente empatados no campo de batalha! Mas só pode haver um vencedor.",
                    "hu": "Kiegyenlítetten küzdöttünk a csatamezőn, de csak egy győztes lehet.",
                    "ro": "Clar suntem la egalitate pe câmpul de luptă! Însă doar unul poate fi victorios.",
                    "pl": "Najwyraźniej na polu walki jesteśmy sobie równi. Ale zwycięzca może być tylko jeden.",
                    "bg": "Очевидно сме равни на бойното поле! Но победителят е само един.",
                    "ru": "Похоже, мы равны друг другу в бою! Но победитель может быть только один.",
                    "nl": "Wij zijn duidelijk elkaars gelijken in de strijd om de overwinning. Maar er kan er toch echt maar één de beste zijn.",
                    "cs": "Naše schopnosti na bitevním poli jsou očividně vyrovnané! Ale vítěz může být jen jeden.",
                    "no": "Vi er helt klart like gode der ute på banen! Men kun én av oss kan gå seirende ut av oppgjøret.",
                    "sv": "Vi är tydligen jämna på slagfältet! Men det kan bara finnas en segrare.",
                    "da": "Vi er tydeligvis lige stærke på slagmarken. Men der kan kun være én vinder.",
                    "ar": "من الواضح أن المعركة بيننا متكافئة! لكن في النهاية سيكون الفوز من نصيب شخص واحد.",
                    "tr": "Sahada güçlerimizin eşit olduğu ortada! Ama sadece bir taraf kazanabilir.",
                    "fr": "Nous jouons clairement à armes égales sur le terrain ! Mais il ne peut y avoir qu'un gagnant.",
                    "it": "È chiaro che in campo siamo pari. Peccato però che può vincere solo una squadra."
                },
                "matchDraw2": {
                    "en": "Chúng ta sẽ thi đấu thêm 1 trận nữa ư? Tốt thôi...",
                    "es": "¡Ole, un empate! ­¿Lo intentamos de nuevo? Vale…",
                    "de": "Hurra, ein Unentschieden! Oh, du willst es noch mal versuchen? Gut ...",
                    "pt": "Uau, um empate! Ah, queres tentar novamente? Muito bem...",
                    "hu": "Hurrá! Döntetlen! Mit szólnál még egy meccshez? Rendben...",
                    "ro": "O egalitate! Vrei să încerci din nou? Bine...",
                    "pl": "Hurra, remis! O, chcesz grać jeszcze raz? No dobra...",
                    "bg": "Ура, равенство! О, искате да опитате пак? Хубаво...",
                    "ru": "Класс, ничья! Ах, ты хочешь сыграть еще? Ладно...",
                    "nl": "Hoera, gelijkspel! Wil je nog een keer? Oké …",
                    "cs": "Hurá, remíza! Ale, ty to chceš zkusit znovu? Fajn…",
                    "no": "Hussa, uavgjort! Å, du vil prøve igjen? Greit …",
                    "sv": "Hurra! Oavgjort! Jaså, du vill köra igen? Visst…",
                    "da": "Hurra, uafgjort! Nå, vil du prøve igen? Okay...",
                    "ar": "يا له من تعادل! هل ترغب في المحاولة مجددًا؟ لما لا...",
                    "tr": "Yaşasın, beraberlik! Aa, bir daha denemek mi istiyorsun? Peki...",
                    "fr": "Égalité ? C'est génial ! Quoi, tu veux... rejouer ? Bon, si tu veux.",
                    "it": "Abbiamo pareggiato, evviva! Ah, vuoi riprovarci? Occhei..."
                },
                "matchDraw3": {
                    "en": "Kết quả hòa chưa nói lên được điều gì và chúng ta sẽ còn gặp lại nhau.",
                    "es": "Un empate significa que los dos equipos perdemos. A por la revancha.",
                    "de": "Unentschieden bedeutet nur, dass beide Seiten Verlierer sind. Spiel noch mal.",
                    "pt": "Um empate só significa que somos ambos perdedores. Joga novamente.",
                    "hu": "A döntetlen azt jelenti, hogy mind lúzerek vagyunk. Játsszunk újra!",
                    "ro": "Egalitate înseamnă că am pierdut amândoi. Joacă din nou.",
                    "pl": "Remis oznacza, że oboje przegraliśmy. Zagraj jeszcze raz.",
                    "bg": "Равенство означава, че всички губим. Да играем отново.",
                    "ru": "Ничья означает, что мы оба проиграли. Давай еще разок.",
                    "nl": "Gelijkspel betekent dat je allebei hebt verloren. Kom, we gaan nog een keer.",
                    "cs": "Remíza prostě znamená, že jsme oba prohráli. Hrajeme znovu.",
                    "no": "Uavgjort betyr bare at vi begge er tapere. Spill på nytt.",
                    "sv": "Oavgjort betyder bara att vi båda förlorade. Kör igen.",
                    "da": "Uafgjort betyder bare, at vi alle er tabere. Spil igen.",
                    "ar": "التعادل يعني أن كلينا خاسر. لنلعب مجددًا.",
                    "tr": "Berabere kalmak ikimizin de kaybettiği anlamına geliyor. Bir daha oyna.",
                    "fr": "\"Égalité\", cela veut juste dire que nous sommes tous deux des losers. Il faut rejouer.",
                    "it": "Un pareggio vuol dire che abbiamo perso tutti e due. Si rigioca."
                },
                "matchDraw4": {
                    "en": "Chúng ta sẽ còn gặp lại nhau.",
                    "es": "Polar exige la revancha.",
                    "de": "Eisbär verlangt eine Revanche.",
                    "pt": "O Polar solicita um jogo de desempate.",
                    "hu": "Jeges visszavágót követel.",
                    "ro": "Ursul Polar cere o revanșă.",
                    "pl": "Lodomir domaga się rewanżu.",
                    "bg": "Белия иска реванш.",
                    "ru": "Белый требует сыграть еще.",
                    "nl": "IJsbeer eist revanche.",
                    "cs": "Leďák požaduje odvetu.",
                    "no": "Isbjørn krever omkamp.",
                    "sv": "Isbjörn kräver en returmatch.",
                    "da": "Isbjørn kræver en omkamp.",
                    "ar": "قطبي يطالب بإعادة لعب المباراة.",
                    "tr": "Kutup Ayısı rövanş istiyor.",
                    "fr": "Polaire exige sa revanche.",
                    "it": "Orso Bianco chiede di rigiocare la partita."
                },
                "matchDraw5": {
                    "en": "Chúng ta cần 1 trận nữa để phân tài cao thấp.",
                    "es": "¿Empate? De eso nada, tío. Volvemos a jugar AHORA MISMO.",
                    "de": "Unentschieden? Nichts da, wir spielen SOFORT noch eine Runde.",
                    "pt": "Um empate! Nem pensar, meu. Vamos desempatar isto, AGORA MESMO.",
                    "hu": "Döntetlen? Ne már, tesó. MOST AZONNAL új mérkőzést akarok!",
                    "ro": "Egalitate? Nu se poate, frate, mai jucăm o rundă CHIAR ACUM.",
                    "pl": "Remis? Nie ma mowy, stary, gramy jeszcze raz. TERAZ.",
                    "bg": "Равни? Няма начин, братле, ще играем пак СЕГА.",
                    "ru": "Ничья? Ну уж нет, дружище, нам нужно НЕМЕДЛЕННО переиграть!",
                    "nl": "Gelijkspel? Echt niet gast, we gaan NU nog een keer!",
                    "cs": "Remíza? Tak to zapomeň, brácho, zahrajeme si znovu HNED TEĎ.",
                    "no": "Uavgjort? Ikke snakk om, vi fyrer løs en ny runde MED ÉN GANG.",
                    "sv": "Oavgjort? Aldrig kompis. Vi kör igen, OMGÅENDE!",
                    "da": "Uafgjort? Glem det. Vi tager en omgang mere LIGE NU.",
                    "ar": "تعادل؟ مستحيل يا أخي! علينا اللعب مجددًا الآن.",
                    "tr": "Beraberlik mi? Hayatta olmaz. HEMEN ŞİMDİ bir tur daha oynuyoruz.",
                    "fr": "Égalité ? Pas question, mon pote, on rejoue ça TOUT DE SUITE.",
                    "it": "Siamo pari? Ennò, amico, si rigioca. E SUBITO!"
                },
                "strikerChat0_0": {
                    "en": "Xin lỗi trước nếu tôi vượt qua bạn nhé.",
                    "es": "¡Oye, Gumball! Siento que estés a punto de perder de paliza.",
                    "de": "Hey Gumball! Tut mir leid, dass du jetzt so krass verlierst.",
                    "pt": "Ei Gumball! Lamento estares prestes a perder de forma impressionante.",
                    "hu": "Hé, Gumball! Most nagyon csúnyán kikapsz!",
                    "ro": "Gumball! Îmi pare rău că ești pe cale să pierzi atât de rău.",
                    "pl": "Hej, Gumball! Szkoda, że zaraz przegrasz z kretesem.",
                    "bg": "Хей, Гъмбол! Извинявай, но ще загубиш.",
                    "ru": "Привет, Гамбол! Прости, но я разнесу тебя в пух и прах.",
                    "nl": "Hoi Gumball! Sorry alvast, maar ik ga je zo keihard inmaken!",
                    "cs": "Hej, Gumballe! Je mi líto, že tě teď na hlavu porazím.",
                    "no": "Hei Gumball, beklager at du kommer til å stortape!",
                    "sv": "Hej Gumball! Stackars dig som kommer att förlora så hårt.",
                    "da": "Hej Gumball! Beklager at du kommer til at tabe om lidt.",
                    "ar": "أهلا غامبول! أعتذر منك ولكنك على وشك الخسارة.",
                    "tr": "Gumball, baksana! Bu kadar kötü yenilecek olmana üzgünüm.",
                    "fr": "Salut Gumball ! Désolé, mais tu vas te faire écraser.",
                    "it": "Ehi, Gumball! Spiacente, ma stai per essere strabattuto!"
                },
                "strikerChat0_1": {
                    "en": "Tôi cược rằng bạn sẽ không thể vượt qua được tôi đâu.",
                    "es": "Los peces no tienen problema en zamparse bichos. Así acabará este partido.",
                    "de": "Fische fressen Insekten einfach auf! Und so wird auch dieses Match laufen.",
                    "pt": "Os peixes estão sempre a comer insetos! E é assim que este jogo vai ser.",
                    "hu": "A halak folyton bogarakat esznek. Élve felfallak!",
                    "ro": "Peștii mănâncă mereu gângănii! Așa va fi meciul ăsta.",
                    "pl": "Ryby ciągle jedzą robaki! Tak właśnie będzie wyglądał ten mecz.",
                    "bg": "Рибите постоянно се хранят с буболечки! И сега ще е така.",
                    "ru": "Рыбы постоянно едят насекомых! И этот матч — не исключение.",
                    "nl": "Vissen verslinden heel graag insecten! En dat is precies wat er nu gaat gebeuren!",
                    "cs": "Ryby prostě jedí brouky! A tak dopadne i tenhle zápas.",
                    "no": "Fisker spiser insekter hele tiden! Det kommer også denne kampen til å være et bevis på.",
                    "sv": "Fiskar äter insekter dagar i ända. Så blir det i den här matchen.",
                    "da": "Fisk spiser insekter til morgenmad. Sådan bliver denne kamp også.",
                    "ar": "السمك يأكل الحشرات! وهذا ما سيحدث في هذه المباراة.",
                    "tr": "Balıklar sürekli böcek yer! Bu maç da öyle olacak.",
                    "fr": "Les poissons mangent des insectes tout le temps ! Et ce match ne sera pas différent.",
                    "it": "I pesci gli insetti se li pappano in un boccone, e questa partita non sarà molto diversa."
                },
                "strikerChat0_2": {
                    "en": "Bạn chính là đối thủ ưa thích của tôi!",
                    "es": "¡Las manzanas son mi aperitivo favorito!",
                    "de": "Äpfel verspeise ich am liebsten!",
                    "pt": "As maçãs são o meu snack preferido!",
                    "hu": "Az alma a kedvenc ropogtatnivalóm.",
                    "ro": "Merele sunt gustarea mea favorită!",
                    "pl": "Jabłka to moja ulubiona przekąska!",
                    "bg": "Обичам да хапвам ябълки!",
                    "ru": "Яблоки — моя любимая еда!",
                    "nl": "Ik ben dol op appels! Als tussendoortje!",
                    "cs": "Jablka jsou moje oblíbená svačina!",
                    "no": "Epler er favorittsnacksen min!",
                    "sv": "Äpplen är mitt favoritfika!",
                    "da": "Æbler er min yndlingssnack!",
                    "ar": "التفاح لذيذ جداً وأحب أكله!",
                    "tr": "Elma en sevdiğim atıştırmalıktır!",
                    "fr": "Une pomme ! C'est mon goûter préféré !",
                    "it": "Sai, Apple, le mele sono il mio spuntino preferito!"
                },
                "strikerChat0_3": {
                    "en": "Trông bạn mới dễ thương làm sao…",
                    "es": "¡Ay, pero qué MONADA eres! Tengo que apartar la mirada y centrarme…",
                    "de": "Meine Güte! Du bist SO niedlich! Ich muss weggucken und mich konzentrieren …",
                    "pt": "Ó, pá! És TÃO querido! Tenho de olhar para o lado e concentrar-me…",
                    "hu": "Jaj, olyan édi vagy! Nem szabad, hogy nézzelek, hagyj koncentrálni…",
                    "ro": "Doamne! Ești ATÂT de drăguț! Trebuie să mă uit în altă parte și să mă concentrez...",
                    "pl": "Ojejciu! Jesteś taka UROCZA! Nie mogę się tak gapić, muszę się skupić…",
                    "bg": "О, леле! Такава сладост! Но сега, по-добре да се концентрирам...",
                    "ru": "Ой, мамочки! Какая же ты милашка! Так, ладно, нужно сосредоточиться...",
                    "nl": "Ach gossie, jij bent zoooo schattig! Ik moet echt wegkijken om me te kunnen concentreren!",
                    "cs": "Propána! Ty jsi TAK roztomilá! Nesmím se na tebe dívat, musím se soustředit...",
                    "no": "Ååå, du er SÅ søt! Må se en annen vei og fokusere …",
                    "sv": "Herrejistanes vad söt du är! Jag måste titta bort och fokusera…",
                    "da": "Åh hvor er du nuttet! Jeg MÅ kigge væk og fokusere...",
                    "ar": "يا إلهي ما ألطفك! يجب أن أنظر بعيدًا وأركز على اللعب لأهزمك…",
                    "tr": "Aman tanrım! ÇOK şirinsin! Dikkatim dağılmasın diye başka tarafa bakmam gerekecek.",
                    "fr": "Oh mon dieu ! Tu es TROP mignonne ! Vite, je dois regarder ailleurs pour rester concentré ...",
                    "it": "Oh, ma sei TROOOPPO caruccia! Meglio che guardi da un'altra parte e mi concentri..."
                },
                "strikerChat0_4": {
                    "en": "Hãy chờ xem tôi đánh bại bạn thế nào nhé!",
                    "es": "¡Un oso polar no va a poder con este pez!",
                    "de": "Dieser Fisch hier wird dem Grizzlybären trotzen!",
                    "pt": "Este peixe não se vai deixar vencer por um urso Polar!",
                    "hu": "Ezt a halat nem győzheti le egy grizzly!",
                    "ro": "Ăsta e un pește care nu va fi mâncat de un urs Grizzly!",
                    "pl": "Tej ryby nie zje żaden misiek!",
                    "bg": "Аз съм риба, но мечка Гризли няма да ме победи!",
                    "ru": "Я знаю, что гризли любят рыбу, но тебе меня не одолеть!",
                    "nl": "Deze vis laat zich niet beetnemen door een grizzlybeer!",
                    "cs": "Na téhle rybě si žádný medvěd Grizzly nepochutná!",
                    "no": "Denne fisken skal ikke falle i klørne på en grizzlybjørn, nei!",
                    "sv": "Här är en fisk som inte kommer besegras av en grizzlybjörn!",
                    "da": "Den her fisk lader sig ikke skræmme af nogen bjørn!",
                    "ar": "الفوز اليوم من نصيب السمكة فالهزيمة تليق بالدببة!",
                    "tr": "Bir boz ayının alt edemediği ilk balık ben olacağım!",
                    "fr": "Les grizzlis ont mangé suffisamment de poissons comme ça, je ne me laisserai pas faire !",
                    "it": "'Sto Grizzly non riuscirà a papparsi questo pesciolino!"
                },
                "strikerChat0_5": {
                    "en": "Tôi rất thích phong thái của bạn nhưng điều đó chưa đủ để thắng đâu…",
                    "es": "¡Me encanta ese aspecto terrorífico! Pero no te va a bastar para ganar…",
                    "de": "Toll, dein gruseliger Look! Gewinnen lasse ich dich deswegen aber nicht …",
                    "pt": "Adoro o teu estilo assustador! No entanto, não é suficiente para eu te deixar vencer…",
                    "hu": "Tetszik az ijesztő külsőd. No nem annyira, hogy nyerni hagyjalak…",
                    "ro": "Îmi place aspectul tău înfricoșător! Dar nu destul cât să te las să câștigi...",
                    "pl": "Podoba mi się, jak groźnie wyglądasz. Ale to Ci nie pomoże wygrać…",
                    "bg": "Харесвам страховития ти вид! Но той не стига да победиш...",
                    "ru": "Мне нравится твой жуткий костюмчик! Но не настолько, чтобы тебе поддаваться...",
                    "nl": "Wat leuk joh, die geestige look van jou! Maar ik ga je mooi niet laten winnen!",
                    "cs": "Líbí se mi, jak jsi strašidelný! Ale ne zas tak moc, abych tě nechal vyhrát...",
                    "no": "Jeg digger det skumle utseendet ditt! Men ikke nok til å la deg vinne …",
                    "sv": "Jag gillar din läskiga stil! Men inte så pass att jag låter dig vinna…",
                    "da": "Jeg elsker dit spooky tøj! Men ikke nok til at lade dig vinde...",
                    "ar": "شكلك المخيف يعجبني! لكن هذا لا يعني أنك سوف تغلبني…",
                    "tr": "Ürkütücü görünüşüne bayıldım! Ama kazanmana izin verecek kadar bayılmadım.",
                    "fr": "Je suis fan de ton look gothique ! Mais pas assez pour te laisser gagner...",
                    "it": "Inquietante, il tuo stile. Mi piace. Ma non così tanto da lasciarti vincere..."
                },
                "strikerChat1_0": {
                    "en": "Cats are noble creatures, you should be on a pedestal not guarding a goal!",
                    "es": "Los gatos son criaturas nobles. ¡Deberías estar en un pedestal, no haciendo de guardameta!",
                    "de": "Katzen sind edle Wesen. Du solltest auf einem Podest stehen, nicht im Tor!",
                    "pt": "Os gatos são criaturas nobres. Tu devias estar num pedestal, não numa baliza!",
                    "hu": "A macskák előkelő teremtmények. Piedesztálon kellene állnod, nem egy kapuban!",
                    "ro": "Pisicile sunt creaturi nobile, ar trebuie să fii pe un piedestal, nu să aperi poarta!",
                    "pl": "Koty to szlachetne zwierzęta, powinieneś stać na piedestale, a nie na bramce!",
                    "bg": "Котките са благородни създания, трябва да си на пиедестал, а не да пазиш вратата!",
                    "ru": "Кошки — благородные создания. Ты должен быть на пьедестале, а не на воротах!",
                    "nl": "De kat is een edel dier. Jij hoort op een voetstuk, niet op het veld!",
                    "cs": "Kočky jsou vznešená stvoření, měla bys být na piedestalu, ne stát v bráně!",
                    "no": "Katter er edle dyr. Du burde stå på pidestall, ikke i mål!",
                    "sv": "Katter är ädla djur. Du borde stå på en piedestal och inte i mål! ",
                    "da": "Katte er noble dyr. Du burde have et kradsebræt, ikke et fodboldmål.",
                    "ar": "القطط حيوانات مدللة ونبيلة، فلما لا تذهب لتستلقي وترتاح عوضًا عن التصدي للأهداف!",
                    "tr": "Kediler asil yaratıklardır. Sen kale bekçiliği yapmak yerine el üstünde tutulmalısın!",
                    "fr": "Les chats sont de nobles créatures, tu es fait pour trôner sur un piedestal, pas pour garder une cage !",
                    "it": "I gatti sono creature nobili, certo non tipi da stare in porta!"
                },
                "strikerChat1_1": {
                    "en": "Hãy về luyện tập thêm rồi năm sau gặp lại nhé!",
                    "es": "Recuerda tu entrenamiento, Bumblebee. ¡No pienso contenerme!",
                    "de": "Denk an dein Training, Bumblebee - ich halte mich nicht zurück!",
                    "pt": "Lembras-te do teu treino Bumblebee? Não estou a brincar!",
                    "hu": "Emlékezz, mit tanultál, Dongó, mert én nem fogom vissza magam!",
                    "ro": "Amintește-ți antrenamentul, Bumblebee - Voi da tot ce pot!",
                    "pl": "Przypomnij sobie szkolenie Bumblebee, bo nie będę się hamować!",
                    "bg": "Дано да си тренирала здраво, Бъмбълбий! Няма да ти се дам!",
                    "ru": "Надеюсь, твои тренировки не прошли даром, Бамблби. Я не буду поддаваться!",
                    "nl": "Denk aan je training, Bumblebee! Ik ga me niet inhouden!",
                    "cs": "Vzpomeň si na svůj výcvik, Bumblebee – nebudu na tebe hodná!",
                    "no": "Husk treningen din, Bumblebee. Jeg sparer ikke på kruttet!",
                    "sv": "Kom ihåg din träning Bumblebee – jag kommer inte hålla tillbaka!",
                    "da": "Husk din træning, Humlebi - jeg holder ikke igen!",
                    "ar": "تذكري جميع التدريبات يا بامبلبي - فلن أرحمكِ!",
                    "tr": "Öğrendiklerini aklında iyi tut Bumblebee; elimden geleni ardıma koymayacağım!",
                    "fr": "Souviens-toi de notre entraînement, Bumblebee - je ne te ferai pas de cadeau !",
                    "it": "Ti sei allenata per bene Bumblebee? No, perché io non scherzo per niente!"
                },
                "strikerChat1_2": {
                    "en": "Tôi sẽ đánh bại bạn chỉ bằng một phần tài năng của tôi…",
                    "es": "Basta con una manzana podrida para estropear a las demás. A ver qué tal eres tú…",
                    "de": "Ein schlechter Apfel reicht, um alle zu verderben! Mal sehen, ob du schlecht bist …",
                    "pt": "Basta uma maçã estragada para dar cabo de todo o grupo! Vamos ver como é que tu estás…",
                    "hu": "Elég egy rohadt alma a kosárban, hogy a többi is megposhadjon. Lássuk, te milyen vagy…",
                    "ro": "Un singur măr putred le strică pe cele bune! Să vedem dacă ești putred...",
                    "pl": "Jedno robaczywe jabłko może zatruć cały kosz! Sprawdźmy, czy jesteś zepsuty…",
                    "bg": "Една гнила ябълка стига да развали всички! Да видим дали си гнил...",
                    "ru": "Говорят, яблочко от яблони недалеко падает. Посмотрим, далеко ли оно падает от мяча...",
                    "nl": "Die ene rotte appel verpest het voor de rest! Eens kijken hoe dat met jou zit …",
                    "cs": "Jedno shnilé jablko zkazí celý sud! Tak se mrkneme, jak jsi na tom…",
                    "no": "Ett eneste råttent eple kan ødelegge alle eplene i kurven! La oss se om du er det eplet …",
                    "sv": "Det krävs bara ett surt äpple för att förstöra festen! Låt se om det är du…",
                    "da": "Et enkelt dårligt æble kan spolere hele kurven. Lad os se om du er dårlig...",
                    "ar": "تفاحة فاسدة واحدة تكفي لإفساد بقية التفاح! لنرى إن كنت من التفاح الفاسد…",
                    "tr": "Tek çürük elma bütün elmaları çürütür! Bakalım o çürük elma sen misin.",
                    "fr": "Il suffit d'une mauvaise pomme pour pourrir tout le lot ! On va voir si tu es une mauvaise pomme...",
                    "it": "Sai che basta una mala mela per rovinarle tutte. Vediamo un po' quanto sei scadente..."
                },
                "strikerChat1_3": {
                    "en": "Chúng ta rất xứng làm đối thủ của nhau đó!",
                    "es": "Veo que tienes un corazón de héroe. ¡Enfrentémonos en el campo de batalla del partido!",
                    "de": "Ich sehe, du hast das Herz eines Helden. Treten wir einander auf dem Fußballfeld entgegen!",
                    "pt": "Consigo ver que tens o coração de um herói. Vamos enfrentar-nos no campo de batalha do futebol!",
                    "hu": "Látom, benned egy hős szíve dobog. Mérkőzzünk meg egymással a csatamezőn!",
                    "ro": "Văd că ai inima unui erou. Să ne întâlnim pe câmpul de luptă al fotbalului!",
                    "pl": "Widzę, że masz serce bohaterki. Zmierzmy się na murawie!",
                    "bg": "Виждам, че имаш сърце на герой. Да се срещнем на футболното бойно поле!",
                    "ru": "Судя по всему, у тебя сердце истинного героя! Сойдемся же в футбольной битве!",
                    "nl": "Ik zie dat jij het hart van een krijger hebt. Laten we de strijd met elkaar aanbinden op het voetbalveld!",
                    "cs": "Vidím, že máš srdce hrdiny. Potkáme se na fotbalovém bitevním poli!",
                    "no": "Jeg kan se at du har hjertet til en helt. La oss møtes til kamp på fotballbanen!",
                    "sv": "Jag ser att du har ett hjältemodigt hjärta. Låt oss mötas i strid på fotbollsplanen!",
                    "da": "Jeg kan se, at du har heltemod. Lad os mødes på fodboldens slagmark.",
                    "ar": "أعلم أن لديكِ قلب شجاع. لنرى إن كانت لديك نفس الشجاعة في كرة القدم!",
                    "tr": "Görüyorum ki kahraman yürekli birisin. Sahada kozlarımızı paylaşalım! ",
                    "fr": "Je vois que tu as le cœur d'un héros. Affrontons-nous sur le terrain, et que la meilleure gagne !",
                    "it": "Lo vedo, l'eroe che è in te. E allora, affrontiamoci sul campo di calcio!"
                },
                "strikerChat1_4": {
                    "en": "Đừng buồn nếu tôi vượt qua bạn nha.",
                    "es": "¡Otro poderoso guerrero! Salve, futuro perdedor.",
                    "de": "Noch ein mächtiger Krieger! Freut mich, zukünftiger Verlierer!",
                    "pt": "Outro grande guerreiro! Cumprimentos, futuro perdedor.",
                    "hu": "Még egy nagy harcos. Soha jobbkor, leendő lúzer.",
                    "ro": "Alt războinic măreț! Îmi pare bine de cunoștință, viitor pierzător.",
                    "pl": "Kolejny wojownik! Nieźle się dobraliśmy, zaraz przegrasz.",
                    "bg": "Още един могъщ воин! Добре заварил, бъдещи губещ.",
                    "ru": "Еще один могучий воин! Я с удовольствием тебя одолею!",
                    "nl": "Nog een grote krijger! Gegroet, verliezer in de dop.",
                    "cs": "Další mocný válečník! Těší mě, budoucí poražený.",
                    "no": "Enda en mektig kriger! Vær hilset, fremtidige taper.",
                    "sv": "Ännu en mäktig krigare! Väl mött, framtida förlorare.",
                    "da": "Endnu en mægtig kriger! Vel mødt, fremtidige taber.",
                    "ar": "محارب خارق آخر! أهلا بك في عالم الهزيمة.",
                    "tr": "İşte kudretli bir savaşçı! Hoş geldin ama yenileceksin.",
                    "fr": "Un autre noble guerrier ! Contente de te rencontrer, futur perdant.",
                    "it": "Un altro possente guerriero! Salve, futuro perdente!"
                },
                "strikerChat1_5": {
                    "en": "Bạn sẽ không còn cơ hội lọt vào tứ kết đâu!",
                    "es": "¡No esperes piedad, demonia!",
                    "de": "Hör zu, Dämon, ich schone dich nicht!",
                    "pt": "Ouve demónio, não te vou dar trégua!",
                    "hu": "Halld szavam, démon, nem kegyelmezek neked!",
                    "ro": "Demon Hark, nu-ți voi arăta milă!",
                    "pl": "Szykuj się, demonie, nie okażę Ci łaski!",
                    "bg": "Стой, демон. Няма да получиш милост!",
                    "ru": "Ого, да это же демон! Не жди от меня пощады!",
                    "nl": "Luister en huiver, demon, want gratie verleen ik jou niet!",
                    "cs": "Poslyš, démonko, budu k tobě nemilosrdná!",
                    "no": "Hør på meg, demon. Jeg kommer ikke til å vise nåde!",
                    "sv": "Pass dig demon! Jag visar ingen nåd!",
                    "da": "Giv agt, dæmon, jeg viser dig ingen nåde!",
                    "ar": "أيها الشرير اللعين! سوف أدمرك!",
                    "tr": "Hey sen, gözünün yaşına bakmayacağım!",
                    "fr": "Je te préviens, Démon, je ne ferai pas de quartier !",
                    "it": "Ascoltami bene, Demone, perché non avrò alcuna pietà per te!"
                },
                "strikerChat2_0": {
                    "en": "Tôi tin là đội chúng tôi sẽ vô địch!",
                    "es": "¡Vamos a ganar seguro! ¡Creo!",
                    "de": "Wir siegen auf jeden Fall! Vielleicht!",
                    "pt": "Vamos vencer, sem qualquer dúvida! Talvez!",
                    "hu": "Biztosan nyerni fogunk! Talán.",
                    "ro": "Sigur vom câștiga! Poate!",
                    "pl": "Z całą pewnością wygramy! Może.",
                    "bg": "Със сигурност ще спечелим. Може би!",
                    "ru": "Мы обязательно победим! Наверное...",
                    "nl": "We gaan sowieso winnen! So-wie-so … Denk ik!",
                    "cs": "My rozhodně vyhrajeme! Možná!",
                    "no": "Vi kommer definitivt til å vinne! Kanskje!",
                    "sv": "Vi kommer definitivt att vinna! Kanske!",
                    "da": "Vi vinder helt sikkert! Måske!",
                    "ar": "سوف أفوز بالتأكيد! ربما!",
                    "tr": "Kesinlikle kazanacağız! Belki!",
                    "fr": "Je suis sûr que nous allons gagner ! Peut-être !",
                    "it": "Vinciamo di sicuro! Forse..."
                },
                "strikerChat2_1": {
                    "en": "Tôi chưa từng thất bại khi phải đối đầu với bạn, phải vậy không?",
                    "es": "¿Es un mal momento para mencionar mi horrible fobia a las abejas?",
                    "de": "Schlechter Zeitpunkt, meine Riesenangst vor Bienen zu erwähnen, nicht wahr?",
                    "pt": "Este é um mau momento para referir a minha incrível fobia a abelhas, não é?",
                    "hu": "Nem most kellene szólnom, de irtózom a méhektől!",
                    "ro": "E un moment prost să menționez că am frică de albine, nu?",
                    "pl": "To zły moment, żeby wspomnieć, że boję się pszczół, prawda?",
                    "bg": "Може да не е подходящия момент да спомена, че имам фобия от пчели, нали?",
                    "ru": "Наверное, не стоит тебе рассказывать, что я ужасно боюсь пчел?",
                    "nl": "Ik kan het nu beter even niet hebben over mijn enorme angst voor bijen, denk ik?",
                    "cs": "Teď není ideální chvíle, abych zmínil svou fobii ze včel, že?",
                    "no": "Dette er kanskje ikke rette tidspunktet å nevne at jeg er livredd for bier, eller hva?",
                    "sv": "Det här är inget bra tillfälle att påpeka att jag är livrädd för bin, va?",
                    "da": "Måske er det et dårligt tidspunkt at nævne min store skræk for bier?",
                    "ar": "لا أعتقد أن هذا هو الوقت المناسب لإعلان إصابتي برهاب النحل. أليس كذلك؟",
                    "tr": "Arı fobim olduğundan bahsetmek için kötü bir zaman, değil mi?",
                    "fr": "Ce n'est pas le moment de te parler de mon énorme phobie des abeiles, hein ?",
                    "it": "Forse non è proprio il momento giusto per dire che ho una mega fobia per le api, eh!"
                },
                "strikerChat2_2": {
                    "en": "Bạn hãy nhận thua sớm đi?",
                    "es": "¡Manzana! ¿Qué haces aquí? ¿Me vas a dejar ganar?",
                    "de": "Apfel! Was machst du denn hier? Und lässt du mich gewinnen?",
                    "pt": "Maçã! O que é que estás aqui a fazer? E vais-me deixar ganhar?",
                    "hu": "Alma! Te mit keresel itt? Lécci, hagyj nyerni!",
                    "ro": "Măr! Ce facem aici? Mă lași să câștig?",
                    "pl": "Jabłko! Co ty tu robisz? Dasz mi wygrać?",
                    "bg": "Ябълко! Какво правиш тук? Не искаш да се предадеш?",
                    "ru": "Яблоко! Что ты тут делаешь? Не хочешь мне поддаться?",
                    "nl": "Appel! Wat doe jij hier? Ga je me laten winnen?",
                    "cs": "Jablko! Co tady děláš? A necháš mě vyhrát?",
                    "no": "Eplet! Hva gjør du her? Og kan du la meg vinne?",
                    "sv": "Vad gör du här Apple? Tänker du låta mig vinna?",
                    "da": "Apple! Hvad laver du her? Og vil du lade mig vinde?",
                    "ar": "ما الذي تفعله هنا يا آبل؟ هل ستسمح لي بالفوز؟",
                    "tr": "Elma! Burada ne işin var? Ve kazanmama izin verir misin?",
                    "fr": "Pomme ? Que fais-tu ici ? Et tu veux bien me laisser gagner ?",
                    "it": "Apple! Che ci fai da 'ste parti? Che dici, mi fai vincere?"
                },
                "strikerChat2_3": {
                    "en": "Lêu lêu, đồ con dơi! Tôi sẽ sút vào tất cả cho mà xem!",
                    "es": "¡Aaaaaay, un murciélago! ¡Toma balonazos!",
                    "de": "Aaaaah! Eine Fledermaus! Verschwinde! Ich schieße mit all diesen Fußbällen nach dir!",
                    "pt": "Ahhhh! Um morcego! Sai daqui! Vou chutar estas bolas todas contra ti!",
                    "hu": "Ahhhhh! Egy denevér! Hess innen! Az összes labdával eltalállak!",
                    "ro": "Un liliac! Pleacă! Voi șuta toate mingile de fotbal spre tine!",
                    "pl": "Aaa, nietoperz! Idź sobie! Wszystkie piłki w Ciebie wystrzelam!",
                    "bg": "Аааа! Прилеп! Махай се! Ще те целя с всички тези топки!",
                    "ru": "Ой! Летучая мышь! Держись от меня подальше! Я буду отбиваться футбольными мячами!",
                    "nl": "Argh! Een vleermuis! Ga weg! Ik ga al deze voetballen op je afvuren!",
                    "cs": "Ááá! Netopýr! Běž pryč! Vykopnu na tebe všechny tyhle fotbalové míče!",
                    "no": "Hjelp, en flaggermus! Kom deg vekk, ellers sparker jeg alle disse ballene mot deg!",
                    "sv": "Aaaaah! En fladdermus! Bort med dig! Jag tänker sparka alla de här fotbollarna på dig!",
                    "da": "Ahhhhh! En flagermus! Væk! Jeg sparker alle fodboldene efter dig!",
                    "ar": "اااااه! خفاش! ابتعد عني! سوف أسدد جميع الكرات باتجاهك!",
                    "tr": "Aaaaa! Yarasa! Uzak dur! Bu topların hepsini sana fırlatacağım!",
                    "fr": "Aaaah ! Une chauve-souris ! Va-t'en ! Je vais tirer directement sur toi !",
                    "it": "Aiuto, un pipistrello! Sciò, sciò, o ti sparo pallonate a raffica!"
                },
                "strikerChat2_4": {
                    "en": "Bạn phải cảm thấy may mắn vì được đối đầu với tôi.",
                    "es": "Por una vez me gustaría poder jugar al fútbol contra un animal que no sea terrorífico.",
                    "de": "Könnte ich doch nur einmal Fußball gegen ein Tier spielen, das nicht schrecklich ist.",
                    "pt": "Por uma só vez, gostaria de jogar futebol contra um animal não assustador.",
                    "hu": "Csak egyszer szeretnék egy nem félelmetes állat ellen játszani.",
                    "ro": "Măcar o dată aș vrea să joc fotbal împotriva unui animal care nu e înfricoșător.",
                    "pl": "Chociaż raz chciałbym grać przeciwko zwierzakowi, którego się nie boję.",
                    "bg": "Поне веднъж искам да играя футбол срещу животно, което не е страшно.",
                    "ru": "Почему мне постоянно приходится играть со всякими грозными животными...",
                    "nl": "Ik zou zo graag gewoon 'ns een keer een potje voetbal willen spelen tegen een dier dat niet doodeng is.",
                    "cs": "Aspoň jednou bych chtěl hrát proti někomu, kdo není děsivé zvíře.",
                    "no": "Jeg skulle ønske at jeg bare for en gangs skyld kunne spille mot et dyr som ikke skremmer livet av meg.",
                    "sv": "Tänk om jag för en gångs skull kunde får spela fotboll mot en oläskigt djur.",
                    "da": "Bare for en gangs skyld ville jeg gerne spille mod et dyr, der ikke var rædselsvækkende.",
                    "ar": "كم أتمنى اللعب ضد حيوان غير مرعب ولو لمرة واحدة.",
                    "tr": "Bir kez olsun korkunç olmayan bir hayvana karşı futbol oynayayım yahu.",
                    "fr": "Juste une fois, j'aimerais jouer au foot contre un animal qui ne soit pas terrifiant !",
                    "it": "Almeno una volta mi piacerebbe giocare a calcio contro un animale meno terrificante."
                },
                "strikerChat2_5": {
                    "en": "Tôi đang muốn xem bạn tài năng đến đâu.",
                    "es": "Hum, hola. Bueno, tú no eres terrorífico. Sí que das algo de miedo, eso sí.",
                    "de": "Äh ... hallo. Nun, du bist kein schreckliches Tier. Nur etwas unheimlich.",
                    "pt": "Umm, olá! Mas tu não és um animal assustador. Mas, mesmo assim, assustas.",
                    "hu": "Hmmm. Szia! Te nem vagy félelmetes, de valahogy mégis megrémítesz.",
                    "ro": "Bună! Nu ești un animal groaznic. Poate puțin înfricoșător.",
                    "pl": "Hmm, cześć. Nie jesteś strasznym zwierzakiem, ale i tak się Ciebie boję.",
                    "bg": "Хмм, здравей. Е, ти не си страшно животно. Но пак си плашещ.",
                    "ru": "Что ж, ты не похожа на грозное животное. Но я тебя все равно боюсь.",
                    "nl": "Uh, hallo. Nou, jij bent niet doodeng. Wel eng.",
                    "cs": "Ehm, ahoj. Tak ty nejsi děsivé zvíře. Ale strašidelná jsi.",
                    "no": "Øh, hei. Vel, du er ikke skrekkinngytende. Men likevel skummel.",
                    "sv": "Hmm, hej. Du är i alla fall inte ett läskigt djur. Men läskig ändå.",
                    "da": "Øhhh, hej! Du er ikke et rædselsvækkende dyr. Men stadig uhyggelig.",
                    "ar": "أحممم، مرحبًا. أنت لست حيوانًا مرعبًا. ولكنك مخيف قليلاً.",
                    "tr": "Merhaba. Sen korkunç bir hayvan değilmişsin. Ama yine de ürktüm.",
                    "fr": "Hum, bonjour. Bon, tu n'es pas un animal terrifiant. Tu restes quand même effrayante.",
                    "it": "Sa-salve... Be', tu non sarai terrificante, però fai paura lo stesso..."
                },
                "strikerChat3_0": {
                    "en": "Xin lỗi anh quá đen đủi, vì tôi chính là 1 tay săn bàn đẳng cấp!",
                    "es": "Un héroe siempre da en la diana, ya sea con el balón o con la espada.",
                    "de": "Ein Held trifft immer, ob mit Fußball oder Schwert!",
                    "pt": "Um herói acerta sempre. Seja com o futebol ou com a espada!",
                    "hu": "Egy hős mindig beviszi a találatot, mindegy, hogy focizik vagy kardozik!",
                    "ro": "Un erou mereu lovește ținta, la fotbal sau cu sabia!",
                    "pl": "Bohater zawsze uderza z sercem, czy to w piłkę, czy mieczem.",
                    "bg": "Героят винаги уцелва точно, независимо дали с топка или с меч!",
                    "ru": "Герой всегда попадает в цель — и неважно, меч у него или мяч!",
                    "nl": "Een held raakt altijd het doel, of het nu om voetbal of zwaardvechten gaat!",
                    "cs": "Hrdina vždycky útočí bez slitování, balónem i mečem!",
                    "no": "En helt skjærer alltid gjennom, enten det er med fotball eller sverd!",
                    "sv": "En hjälte träffar alltid. Oavsett om det är med en fotboll eller ett svärd!",
                    "da": "En helt rammer altid rent, hvad enten det er med fodbold eller sværd!",
                    "ar": "البطل يبقى بطلاً، سواء كان ذلك بالسيف أو بكرة القدم!",
                    "tr": "Kahramanlar her zaman hedefi vurur. Gerek kılıçla, gerek futbol topuyla!",
                    "fr": "Un héros vise toujours au bon endroit, que ce soit avec un ballon ou avec son épée !",
                    "it": "Col pallone o con la spada, un eroe che si rispetti va sempre a segno!"
                },
                "strikerChat3_1": {
                    "en": "Các bạn sẽ là đối thủ tiếp theo bị chúng tôi đánh bại!",
                    "es": "¡Ja! ¡Te chafaré como un vulgar bichejo!",
                    "de": "Hah! Ich werde dich beiseitefegen wie das Insekt, nach dem du dich so leichtsinnig benannt hast!",
                    "pt": "Ah! Vou-te esmagar como se fosses o inseto com cujo nome te identificas!",
                    "hu": "Ha! Agyoncsaplak, mint a rovart, amelyről elnevezted magad!",
                    "ro": "Te voi termina ca pe gândacul al cărui nume prostesc îl porți!",
                    "pl": "Zmiotę Cię jak tego robaka, na którego cześć przyjęłaś przydomek!",
                    "bg": "Ха! Ще те отнеса като буболечката, чието име носиш!",
                    "ru": "Ха! Я раздавлю тебя как насекомое, на которое похож твой глупый костюм!",
                    "nl": "Ha! Ik verpletter je net zo hard als een gewone bij!",
                    "cs": "Ha! Zaplácnu tě jako ten hmyz, po kterém se tak hloupě jmenuješ!",
                    "no": "Ha! Som det insektet du er, kommer jeg til å gi deg en skikkelig smekk!",
                    "sv": "Ha! Jag ska smälla dig som den insekt du var dum nog att uppkalla dig själv efter!",
                    "da": "Ha! Jeg klasker dig som det insekt, du så fjollet er opkaldt efter!",
                    "ar": "ها! ربما يجب علي استخدام قاتل الحشرات لهزيمتك يا حشرة!",
                    "tr": "Ha! Kendine adını taktığın böcek gibi ezip yeneceğim seni!",
                    "fr": "Ah ! Prépare-toi à être écrasée comme l'insecte qui porte ton nom !",
                    "it": "Ha! Ti anniento come l'insettucolo che hai scelto per nome!"
                },
                "strikerChat3_2": {
                    "en": "Hình như trước đây chúng ta chưa từng đối đầu nhau thì phải!",
                    "es": "Las manzanas yo las uso para cortarlas en rodajas… ¡A ver si no he perdido el toque!",
                    "de": "Ich habe für meine Kampfübungen immer Äpfel genommen … Mal sehen, ob ich es noch drauf habe!",
                    "pt": "Eu costumava usar maçãs para treinar a minha arte de cortar fatias... vamos ver se ainda tenho prática!",
                    "hu": "Régen almával gyakoroltam a miszlikbe aprítást. Lássuk, mire emlékszem!",
                    "ro": "Obișnuiam să mă antrenez la spintecat pe mere... Să vedem dacă încă mă mai descurc!",
                    "pl": "Kiedyś kroiłem jabłko w ramach treningu. Zobaczymy, czy wciąż to potrafię.",
                    "bg": "Обичах да използвам ябълки, за да тренирам как да режа... Да видим дали още го мога!",
                    "ru": "Люблю оттачивать на яблоках свои фехтовальные навыки... а теперь и футбольные тоже!",
                    "nl": "Ha, met jou heb ik nog wel even een … Appeltje … te schillen!",
                    "cs": "Dřív jsem na jablkách trénoval krájení… Třeba si to ještě pamatuju!",
                    "no": "Jeg pleide å gi epler en skikkelig skrell … La oss se om jeg fremdeles kan kunsten!",
                    "sv": "Jag brukade använda äpplen till huggträning… låt se om det sitter kvar!",
                    "da": "Jeg bruger æbler, når jeg øver mig med mit sværd ... lad os se om jeg stadig kan!",
                    "ar": "لطالما استخدمتُ التفاح للتدريب على مهارة التقطيع… لنرى إن تمكنتُ من الحفاظ على موهبتي!",
                    "tr": "Eskiden elma dilimleyerek kılıç antrenmanı yapardım. Bakalım hâlâ yapabiliyor muyum!",
                    "fr": "Dans ma jeunesse, je m'entraînais à couper les pommes à l'épée... D'après toi, est-ce que j'ai perdu la main ?",
                    "it": "Le mele le usavo per esercitarmi nei colpi di taglio! Vediamo se ho ancora la mano..."
                },
                "strikerChat3_3": {
                    "en": "Xin chào Adorabat! Tôi không nghĩ sẽ chạm trán anh sớm thế này?",
                    "es": "¿Adorabat juega para el enemigo? Esto no es NADA HEROICO.",
                    "de": "Adorabat? Du spielst für den Gegner?! Das ist NICHT. HELDENHAFT.",
                    "pt": "Adorabat!? A jogar pelo inimigo? Isso NÃO É HERÓICO.",
                    "hu": "Édinevér!? Lepaktáltál az ellenséggel? Ez NEM túl HŐSIES.",
                    "ro": "Adorabat? Joci pentru inamic? Asta NU este EROIC.",
                    "pl": "Nietoperka?! W drużynie wroga? Co za DYSHONOR!",
                    "bg": "Адорабат!? Играеш за врага? ГЕРОИТЕ не правят така.",
                    "ru": "Симпамышь?! Ты играешь за врагов? Герои так не поступают!",
                    "nl": "Vledermuis?! Heul jij met de vijand?! Dat is NIET HELDHAFTIG!",
                    "cs": "Něžnopýrka? A hraje za soupeře? Tohle NENÍ. HRDINSKÉ.",
                    "no": "Adorabat!? Spiller du for fienden? Dette er IKKE. HEROISK.",
                    "sv": "Adorabat!? Spelar du för fienden? Det är INTE. HEROISKT.",
                    "da": "Flagerpus!? Spiller du på fjendens hold? Det er IKKE. HEROISK.",
                    "ar": "أدورابات؟ لما أنت في فريق الأعداء؟ هذا ليس من شيم الأبطال.",
                    "tr": "Adorabat?! Düşmanın yanında mı saf tutuyorsun? Bu HİÇ KAHRAMANSI DEĞİL.",
                    "fr": "Chauve-sourire ? Tu es dans le camp ennemi, maintenant ? Ceci n'a RIEN d'héroïque !",
                    "it": "Adorabat? Gioca contro di noi? PER. NIENTE. EROICO."
                },
                "strikerChat3_4": {
                    "en": "Tôi muốn nói rằng tôi ở đây để giành chiến thắng.",
                    "es": "Señor, he venido a informarle de que estoy a punto de ganar… HEROICAMENTE.",
                    "de": "Herr, ich will verkünden, dass ich hier bin, um zu siegen – HELDENHAFT.",
                    "pt": "Senhor, estou aqui para o informar que vou vencer... HEROICAMENTE.",
                    "hu": "Uram, csak szeretném tájékoztatni, hogy HŐSIESEN legyőzöm.",
                    "ro": "Dle, sunt aici să vă informez că vom câștiga - EROIC.",
                    "pl": "Panie, pragnę Cię poinformować, że zaraz BOHATERSKO wygram.",
                    "bg": "Сър, тук съм да ви предупредя, че ще спечеля КАТО ГЕРОЙ.",
                    "ru": "Предупреждаю: я собираюсь одержать ГЕРОИЧЕСКУЮ победу!",
                    "nl": "M'neer, ik wil u bij dezen informeren dat de overwinning mijn deel zal zijn. OP HELDHAFTIGE WIJZE, JA!?",
                    "cs": "Pane, přišel jsem vás informovat, že vyhraju – HRDINSKY.",
                    "no": "Min gode mann, jeg er her for å informere deg om at jeg har tenkt å vinne – PÅ HEROISK VIS.",
                    "sv": "Jag vill informera dig om att jag kommer att vinna – HEROISKT.",
                    "da": "Jeg er her for at informere om, at jeg snart vinder - HEROISK.",
                    "ar": "سيد شهاب، أريد أن أخبرك أنني على وشك الفوز عليك - بطريقة أسطورية.",
                    "tr": "Beyefendi, az sonra kazanacağımı bilginize sunarım. Hem de KAHRAMANLAR GİBİ!",
                    "fr": "Monsieur, je viens vous annoncer que je compte gagner - HÉROÏQUEMENT.",
                    "it": "Signore, sono qui per informarla che sto per vincere... DA EROE!"
                },
                "strikerChat3_5": {
                    "en": "Các bạn sẽ không cản được chúng tôi vô địch đâu!",
                    "es": "Ah, y yo que pensaba que eras un pájaro. ¡Pero eso no me impedirá vencerte!",
                    "de": "Oh, ich dachte, du wärst ein Vogel. Ich werde dich trotzdem besiegen!",
                    "pt": "Ah, eu pensava que eras um pássaro. Isso não me vai impedir de te derrotar!",
                    "hu": "Ó, tudtam, hogy madár vagy. De ettől még legyőzlek!",
                    "ro": "Am crezut că vei fi o pasăre. Asta nu mă va opri să te înfrâng!",
                    "pl": "Myślałem, że jesteś ptakiem. I tak Cię pokonam!",
                    "bg": "О, очаквах да си птица. Това няма да ме спре да те победя!",
                    "ru": "Настоящие герои не боятся сил тьмы!",
                    "nl": "O, ik dacht dat jij een vogel was. Nou ja, ik maak je nog steeds in.",
                    "cs": "Aha, myslel jsem, že jsi pták. To mi nezabrání tě porazit!",
                    "no": "Å, jeg trodde du var en fugl. Men det vil ikke forhindre at jeg beseirer deg!",
                    "sv": "Jag trodde att du skulle vara en fågel. Det hindrar mig inte från att besegra dig!",
                    "da": "Hov, jeg troede du var en fugl. Men det skal ikke afholde mig fra at vinde!",
                    "ar": "أوه، ظننتك عصفورًا. ولكن هذا لن يمنعني من إلحاق الهزيمة بك!",
                    "tr": "Aa, senin kuş olduğunu unutmuşum. Bu seni yenmeme engel olamaz!",
                    "fr": "Ah, en lisant ton nom j'ai cru que tu serais un corbeau. Ça ne m'empêchera pas de te vaincre !",
                    "it": "Oh, pensavo fossi un uccello. Il che non mi impedisce di sconfiggerti!"
                },
                "strikerChat4_0": {
                    "en": "Bạn mau sớm rút lui đi.",
                    "es": "Polar ataca sin dudar.",
                    "de": "Eisbär schlägt zu, ohne zu zögern.",
                    "pt": "O Polar dispara sem hesitar.",
                    "hu": "Jeges habozás nélkül lő.",
                    "ro": "Ursul Polar lovește fără ezitare.",
                    "pl": "Lodomir uderza bez wahania.",
                    "bg": "Белия рита без колебание.",
                    "ru": "Белый бьет по мячу без колебаний.",
                    "nl": "IJsbeer schiet doelgericht.",
                    "cs": "Leďák udeří bez váhání.",
                    "no": "Isbjørn sparker alltid godt fra seg.",
                    "sv": "Isbjörn slår till utan tvekan.",
                    "da": "Isbjørn slår til uden tøven.",
                    "ar": "قطبي يضرب ولا يرحم.",
                    "tr": "Kutup Ayısı duraksamadan saldırır.",
                    "fr": "Polaire attaque sans la moindre hésistation.",
                    "it": "Orso Bianco colpisce senza esitare."
                },
                "strikerChat4_1": {
                    "en": "Tôi ra sân để giành chiến thắng.",
                    "es": "Polar es inmune a las picaduras de abeja.",
                    "de": "Eisbär ist immun gegen Bienenstiche.",
                    "pt": "O Polar é imune a picadas de abelha.",
                    "hu": "Jeges immunis a méhcsípésre.",
                    "ro": "Ursul Polar e imun la înțepăturile albinelor.",
                    "pl": "Lodomir jest odporny na użądlenia.",
                    "bg": "Белия не се бои от жилото на пчели.",
                    "ru": "Белый не боится пчелиного жала.",
                    "nl": "IJsbeer kan niet door bijen worden gestoken.",
                    "cs": "Leďák je imunní vůči žihadlům.",
                    "no": "Isbjørn er immun mot bistikk.",
                    "sv": "Isbjörn är immun mot bistick.",
                    "da": "Isbjørn er immun over for bistik.",
                    "ar": "لدى قطبي مناعة ضد لسعات النحل.",
                    "tr": "Kutup Ayısı'nın arı sokmasına karşı bağışıklığı güçlüdür.",
                    "fr": "Polaire est immunisé contre les piqûres d'abeille.",
                    "it": "A Orso Bianco le punture delle api fanno un baffo."
                },
                "strikerChat4_2": {
                    "en": "Hãy chuẩn bị đỡ những cú sút trái phá của tôi nhé.",
                    "es": "Polar te atacará con tal fuerza que acabarás como ensalada de frutas.",
                    "de": "Eisbär macht Obstsalat aus dir.",
                    "pt": "O Polar vai rematar com tanta força que serás transformado em salada de fruta.",
                    "hu": "Jeges olyan erővel rúg labdába, hogy gyümölcssali lesz belőled.",
                    "ro": "Ursul Polar va lovi atât de puternic, că vei deveni salată de fructe.",
                    "pl": "Lodomir tak Ci przywali, że zrobi z Ciebie sałatkę.",
                    "bg": "Белия ще те срита толкова силно, че ще станеш на плодова салата.",
                    "ru": "Белый превратит тебя во фруктовый салат.",
                    "nl": "IJsbeer maakt een fruitsalade van je.",
                    "cs": "Leďák udeří tak tvrdě, že z tebe nadělá ovocný salát.",
                    "no": "Isbjørn skyter så hardt at du vil bli til fruktsalat.",
                    "sv": "Isbjörn skjuter så hårt att du blir till fruktsallad.",
                    "da": "Isbjørn sparker så hårdt, at du bliver til frugtsalat.",
                    "ar": "سيقوم قطبي بتحويلك إلى سلطة فواكه.",
                    "tr": "Kutup Ayısı seni o kadar fena yenecek ki meyve püresi olacaksın.",
                    "fr": "Polaire va te transformer en salade de fruits.",
                    "it": "Orso Bianco colpirà così forte che presto non sarai che macedonia."
                },
                "strikerChat4_3": {
                    "en": "Tôi rất thương bạn nhưng sẽ không nương tay đâu.",
                    "es": "Polar será bueno con el murciélago bonito, pero Polar ganará de todos modos.",
                    "de": "Eisbär ist lieb zur niedlichen Fledermaus, siegt aber trotzdem.",
                    "pt": "O Polar será simpático para o morcego giro, mas, mesmo assim, o Polar vai vencer.",
                    "hu": "Jeges kedvesen fog bánni a cuki denevérrel, de attól még győzni fog.",
                    "ro": "Ursul Polar se va purta frumos cu liliacul drăguț, dar Ursul Polar tot va câștiga.",
                    "pl": "Lodomir będzie miły dla słodkiego nietoperka, ale i tak wygra.",
                    "bg": "Белия ще бъде мил със сладкия прилеп, но Белия все пак ще победи.",
                    "ru": "Белому нравится милая летучая мышь, но он все равно победит.",
                    "nl": "IJsbeer behandelt de leuke vleermuis met respect, maar gaat alsnog wel winnen.",
                    "cs": "Leďák bude na roztomilého netopýra hodný, ale i tak vyhraje.",
                    "no": "Isbjørn skal være snill mot den søte flaggermusen, men Isbjørn kommer fortsatt til å vinne.",
                    "sv": "Isbjörn kommer vara snäll mot den söta fladdermusen, men Isbjörn kommer fortfarande att vinna.",
                    "da": "Isbjørn vil være sød ved den nuttede flagermus, men Isbjørn vil stadig vinde.",
                    "ar": "سيتعامل قطبي بلطف مع الخفاش الصغير ولكن الفوز سيكون من نصيب قطبي.",
                    "tr": "Kutup Ayısı sevimli yarasaya iyi davranacak ama Kutup Ayısı gene de kazanacak.",
                    "fr": "Polaire sera gentil envers la jolie chauve-souris, mais Polaire gagnera quand même.",
                    "it": "Orso Bianco ci andrà piano con il pipistrellino, ma vincerà comunque."
                },
                "strikerChat4_4": {
                    "en": "Tôi biết bạn đang run sợ. Hãy chuẩn bị chịu trận đi",
                    "es": "Polar sabe que estás en baja forma. Polar va a ganar.",
                    "de": "Eisbär weiß, dass du nicht in Form bist. Eisbär wird siegen.",
                    "pt": "O Polar sabe que estás fora de forma. O Polar vai vencer.",
                    "hu": "Jeges tudja, hogy nem vagy formában. Jeges győzni fog!",
                    "ro": "Ursul Polar știe că nu mai ești în formă. Ursul Polar va câștiga.",
                    "pl": "Lodomir wie, że nie jesteś w formie. Lodomir wygra.",
                    "bg": "Белия знае, че не си във форма. Белия ще спечели.",
                    "ru": "Белый знает, что ты не в форме. Белый тебя одолеет.",
                    "nl": "IJsbeer weet dat je niet in topvorm bent. IJsbeer gaat winnen.",
                    "cs": "Leďák ví, že nejsi v kondici. Leďák vyhraje.",
                    "no": "Isbjørn vet at du er ute av form. Isbjørn kommer til å vinne.",
                    "sv": "Isbjörn vet att du är ur form. Isbjörn kommer att vinna.",
                    "da": "Isbjørn ved, at du er ude af form. Isbjørn kommer til at vinde.",
                    "ar": "يعلم قطبي أن لياقتك البدنية ضعيفة. لذا سوف يفوز قطبي.",
                    "tr": "Kutup Ayısı senin formda olmadığını biliyor. Kutup Ayısı kazanacak.",
                    "fr": "Polaire sait que tu n'es pas en forme. Polaire gagnera.",
                    "it": "Orso Bianco sa che sei fuori forma. Orso Bianco vincerà."
                },
                "strikerChat4_5": {
                    "en": "Tôi tôn trọng bạn song không sợ bạn đâu.",
                    "es": "Polar no tiene piedad con los demonios, pero Polar los respeta.",
                    "de": "Eisbär kennt keine Gnade bei Dämonen, aber Eisbär respektiert sie.",
                    "pt": "O Polar não tem piedade de demónios, mas o Polar respeita-os.",
                    "hu": "Jeges nem kegyelmez a démonoknak, de tiszteli őket.",
                    "ro": "Ursul Polar nu are milă pentru demoni, dar Ursul Polar îi respectă.",
                    "pl": "Lodomir nie ma litości dla demonów, ale je szanuje.",
                    "bg": "Белия няма милост за демони, но Белия ги уважава.",
                    "ru": "Белый не щадит демонов, но Белый их уважает.",
                    "nl": "IJsbeer kent geen genade voor demonen, maar respecteert ze wel.",
                    "cs": "Leďák nemá s démony slitování, ale respektuje je.",
                    "no": "Isbjørn viser ingen nåde for demoner, men Isbjørn respekterer dem.",
                    "sv": "Isbjörn visar inte demoner någon nåd, men Isbjörn respekterar dem.",
                    "da": "Isbjørn viser ikke dæmoner nogen nåde, men Isbjørn respekterer dem.",
                    "ar": "قطبي لا يرحم الأشرار، لكن يكن قطبي لهم كل الاحترام.",
                    "tr": "Kutup Ayısı'nın kötülere acıması yoktur ama Kutup Ayısı onlara saygı duyar.",
                    "fr": "Polaire n'a aucune pitié pour les démons, mais Polaire les respecte.",
                    "it": "Orso Bianco non ha pietà per i demoni, ma Orso Bianco li rispetta."
                },
                "strikerChat5_0": {
                    "en": "Chào Beast Boy, bạn chính là chú mèo dễ thương nhất mà tôi từng biết!",
                    "es": "¿Chico Bestia? ¿Eres tú? ¡Nunca te habías convertido en un gato tan feo!",
                    "de": "Beast Boy? Bist du das? Das ist die unniedlichste Katze, in die du dich je verwandelt hast!",
                    "pt": "Beast Boy? És tu? Esse é o gato menos querido em que alguma vez te transformaste!",
                    "hu": "Gézengúz! Te vagy az? Sikerült a legbénább macskává átváltoznod!",
                    "ro": "Beast Boy? Tu ești? Asta e cea mai drăguță pisică în care te-ai transformat!",
                    "pl": "Bestio, to Ty? To najbrzydszy kot, w jakiego się przemieniłeś.",
                    "bg": "Зверче? Това ти ли си? Това е най-грозната котка, в която си се превръщал!",
                    "ru": "Бистбой? Это ты? Мог бы превратиться в котика посимпатичнее!",
                    "nl": "Beast Boy? Ben jij dat? Je bent nog nooit zo'n niet-schattige kat geweest!",
                    "cs": "Beast Boy? Jsi to ty? Tohle je nejmíň roztomilá kočka, v jakou ses kdy proměnil!",
                    "no": "Beast Boy, er det deg? Dette er den minst søte katten du noen gang har forvandlet deg til!",
                    "sv": "Beast Boy? Är det du? Det där är den minst söta katt du någonsin förvandlat dig till!",
                    "da": "Beast Boy? Er det dig? Det er den mindst søde kat, du har lavet dig om til.",
                    "ar": "بيست بوي؟ هل هذا أنت؟ هذا أبشع قط تتحول إليه!",
                    "tr": "Beast Boy? Bu sen misin? Bu şimdiye kadar dönüştüğün kediler arasında en az şirin olanı!",
                    "fr": "Changelin ? C'est toi ? C'est le chat le plus laid que tu aies jamais incarné !",
                    "it": "Ma... Non dirmi che sei Bibi! Devo dire che come gatto-trasformazione è la meno riuscita!"
                },
                "strikerChat5_1": {
                    "en": "Bạn đang phải đối đầu với 1 tay săn bàn thực thụ!",
                    "es": "¡Esta máquina está lista para disparar!",
                    "de": "Diese Maschine ist schussbereit!",
                    "pt": "Esta máquina está pronta para rematar esta bola!",
                    "hu": "Ez a gép készen áll a nagy rúgásra!",
                    "ro": "Mașinăria asta e gata să șuteze bine!",
                    "pl": "Ta maszyna jest gotowa do strzału!",
                    "bg": "Машината е готова за стрелба!",
                    "ru": "Приготовься к встрече с беспощадной футбольной машиной!",
                    "nl": "Deze machine is klaar voor zijn schot!",
                    "cs": "Tenhle stroj je připravený začít střílet!",
                    "no": "Denne maskinen er klar til å fyre av!",
                    "sv": "Den här maskinen är redo att skjuta!",
                    "da": "Maskinen er klar til at skyde!",
                    "ar": "هذه الآلة على استعداد لإطلاق التسديدات!",
                    "tr": "Bu makine, atışını yapmaya hazır!",
                    "fr": "Tu ne peux rien contre ma carcasse de métal !",
                    "it": "Questa macchina è pronta a tirare la sua bordata!"
                },
                "strikerChat5_2": {
                    "en": "Cú sút của tôi sẽ biến bạn thành nước ép táo!",
                    "es": "¡Colega, mis disparos te van a dejar hecho zumo de manzana!",
                    "de": "Meine Schüsse machen Apfelmus aus dir, Kumpel!",
                    "pt": "Meu, os meus remates vão fazer de ti compota de maçã!",
                    "hu": "Haver, a lövéseim almapéppé zúznak!",
                    "ro": "Amice, șuturile mele te vor face sos de mere!",
                    "pl": "Kolego, moje strzały zrobią z Ciebie sos jabłkowy.",
                    "bg": "Приятелю, ще те направя на ябълково пюре!",
                    "ru": "Дружище, да я же из тебя все соки выжму!",
                    "nl": "Kerel, ik maak appelmoes van je!",
                    "cs": "Kámo, moje střely z tebe udělají jablečnou přesnídávku!",
                    "no": "Kamerat, skudde mine kommer til å mose deg!",
                    "sv": "Kompis, mina skott kommer göra äppelmos av dig!",
                    "da": "Mine skud laver dig om til æblegrød, kammerat!",
                    "ar": "سوف تنهال عليك تسديداتي وتجعل منك عصير تفاح يا صديقي!",
                    "tr": "Dostum, benim şutlarım seni elma püresine çevirecek!",
                    "fr": "Mon pote, mes tirs vont te changer en compote !",
                    "it": "Caro il mio Apple, con la mia cannonata ti riduco in purè!"
                },
                "strikerChat5_3": {
                    "en": "Hãy chuẩn bị tinh thần chiến đấu đi.",
                    "es": "Estate… quieto… intento… apuntar…",
                    "de": "Halt. Still. Ich. Versuche. Zu. Zielen.",
                    "pt": "Espera. Aguenta. Estou. Tentar. Apontar.",
                    "hu": "Maradj. Nyugton. Célozni. Próbálok.",
                    "ro": "Așteaptă. Încă. Încerc. Să. Șutez",
                    "pl": "Nie. Ruszaj. Się. Próbuję. Wycelować.",
                    "bg": "Стой. Мирно. Опитвам. Се. Да. Целя.",
                    "ru": "Да не шевелись ты! Я пытаюсь прицелиться.",
                    "nl": "Sta. Stil. Ik. Probeer. Te. Richten.",
                    "cs": "Nehýbej. Se. Snažím. Se. Zamířit.",
                    "no": "Stå. I. Ro. Jeg. Forsøker. Å. Sikte.",
                    "sv": "Var stilla. Jag. Försöker. Sikta.",
                    "da": "Stå. Stille. Jeg. Prøver. At. Sigte.",
                    "ar": "توقفي عن الحركة. أحاول التصويب.",
                    "tr": "Kıpırdama. Nişan almaya çalışıyorum.",
                    "fr": "Ne bouge pas. J'essaie. De. Viser.",
                    "it": "Fermo. Lì. Sto. Cercando. Di. Prendere. La. Mira."
                },
                "strikerChat5_4": {
                    "en": "Không ngờ chúng ta lại đụng độ sớm như vậy!",
                    "es": "¡No te enfades si mis disparos resultan dolor-OSOS!",
                    "de": "Ich weiß, meine Schüsse sind üBÄRirdisch!",
                    "pt": "Não fiques chateado se mal conseguires segURSAr os meus remates!",
                    "hu": "Előre is BOCS-esz, de nincs esélyed ellenem!",
                    "ro": "Nu te supăra dacă abia poți opri șuturile URSULUI!",
                    "pl": "Tylko się nie denerwuj, jeśli przepuś-miś moje strzały!",
                    "bg": "Не се ядосвай, че не МЕЧОжеш да ме спреш!",
                    "ru": "Пора оказать тебе медвежью услугу!",
                    "nl": "Niet gaan huilen omdat ik zo beregoed ben, oké?",
                    "cs": "Nenaštvi se, když se ti nepodaří změdvědit moje střely!",
                    "no": "Ikke bli sint når jeg skyter ballen i BJØRN-et!",
                    "sv": "Lika bra att du går i ide direkt! Här har du inget att hämta.",
                    "da": "Mine fodboldevner er ikke for b(j)ørn!",
                    "ar": "لا تحزن إن لم تتمكن كالدب من التصدي لتسديداتي!",
                    "tr": "Şutlarıma engel olamazsan sakın kızma!",
                    "fr": "N'appelle pas au sec-OURS si tu n'arrives pas à arrêter mes tirs !",
                    "it": "Non ti inalberare se non riesci a bloccare le mie bordate!"
                },
                "strikerChat5_5": {
                    "en": "Hãy chờ đợi để chuẩn bị vào lưới nhặt bóng nhé?",
                    "es": "Yo no usaré mis aparatos si tú no usas tu magia. ¿Vale?",
                    "de": "Ich setze meine Gadgets nicht ein, du deine Magie nicht. Abgemacht?",
                    "pt": "Eu não uso os meus gadgets se tu não usares a tua magia, combinado?",
                    "hu": "Nem használok kütyüket, ha te sem varázsolsz. Áll az alku?",
                    "ro": "Nu-mi folosesc dispozitivele dacă nu-ți folosești magia - s-a făcut?",
                    "pl": "Ja nie użyję gadżetów, jeśli Ty nie użyjesz magii, stoi?",
                    "bg": "Няма да използвам джаджите си, ако не използваш магията си. Става ли?",
                    "ru": "Я не буду использовать гаджеты, если ты обойдешься без магии, по рукам?",
                    "nl": "Als ik mijn gadgets niet inzet, mag jij je magie niet gebruiken. Oké?",
                    "cs": "Nepoužiju svoje vychytávky, když ty nepoužiješ magii – platí?",
                    "no": "Jeg bruker ikke dingsene mine hvis du ikke bruker magien din – avtale?",
                    "sv": "Jag använde inte mina prylar om du inte använder din magi – vad sägs?",
                    "da": "Jeg bruger ikke mine gadgets, hvis du ikke bruger magi. Aftale?",
                    "ar": "أعدك بعدم استخدام الأدوات إن امتنعتي عن استخدام السحر- اتفقنا؟",
                    "tr": "Sen büyü kullanmazsan ben de araçlarımı kullanmam. Anlaştık mı?",
                    "fr": "Je n'utilise pas mes gadgets et tu n'utilises pas ta magie. Ça marche ?",
                    "it": "Facciamo così: io non uso le mie dotazioni e tu non usi i tuoi trucchetti. Occhei?"
                },
                "goalieChat0_0": {
                    "en": "Tài năng của bạn chưa đủ để đánh bại tôi đâu!",
                    "es": "No me vas a colar ni una, Darwin… ¡Sé cómo piensas!",
                    "de": "An mir kommst du nicht vorbei, Darwin – ich weiß, wie du tickst!",
                    "pt": "Não vais ter hipótese contra mim, Darwin... eu sei aquilo em que tu estás a pensar!",
                    "hu": "Nincs esélyed gólt rúgni, Darwin! Ismerem a taktikád!",
                    "ro": "Niciun șut de-al tău nu va trece de mine, Darwin - știu cum gândești!",
                    "pl": "Nie strzelisz mi gola, Darwin, znam Twój sposób myślenia!",
                    "bg": "Няма да вкараш гол, Дарвин, аз чета мислите ти!",
                    "ru": "Ты не сможешь мне забить, Дарвин. Я же тебя насквозь вижу!",
                    "nl": "Darwin, je komt niet langs mij. Ik weet hoe jij denkt!",
                    "cs": "Mě neprostřelíš, Darwine – vím, jak přemýšlíš!",
                    "no": "Du får ikke ballen forbi meg, Darwin – jeg vet hvordan du tenker!",
                    "sv": "Det blir inga mål här Darwin, jag vet hur du tänker!",
                    "da": "Du får ikke et eneste skud forbi mig, Darwin. Jeg kender dig for godt.",
                    "ar": "لن تتمكن من تسجيل الأهداف يا داروين - فأنا أعلم كيف تفكر!",
                    "tr": "Benden sayı alamazsın Darwin. Ben senin aklını okuyorum!",
                    "fr": "Aucun de tes tirs ne finira au fond de mes filets, Darwin. Je connais tous tes réflexes !",
                    "it": "Non riuscirai ad andare in rete, Darwin, perché ti leggo nel pensiero!"
                },
                "goalieChat0_1": {
                    "en": "Bạn nghĩ rằng sẽ thắng được tôi ư? Tỉnh lại đi…",
                    "es": "¿No deberías estar salvando el mundo? Esto parece poca cosa para ti.",
                    "de": "Solltest du nicht gerade die Welt retten? Hier steht doch gar nichts auf dem Spiel …",
                    "pt": "Não deverias estar a salvar o mundo? Isto parece uma coisa menor para ti…",
                    "hu": "Neked nem a világ megmentésén kellene ügyködnöd? Ez nem kihívás számodra…",
                    "ro": "N-ar trebui să salvezi lumea? Asta pare o miză mică pentru tine...",
                    "pl": "Nie powinnaś ratować świata? Zajmujesz się takim błahym meczem...",
                    "bg": "Не трябваше ли да спасяваш света? А ти си станал ритнитопковец...",
                    "ru": "Я думал, ты спасаешь мир, а ты тут в футбол играешь...",
                    "nl": "Moet jij niet de wereld redden, of zo? Zo'n voetbaltoernooi lijkt me nogal nietig voor jou!",
                    "cs": "Neměla bys radši zachraňovat svět? Tohle je pod tvou úroveň…",
                    "no": "Burde ikke du vært ute og reddet verden? Dette virker litt for uviktig for deg …",
                    "sv": "Borde inte du rädda världen? Det här verkar lite småskaligt för dig?",
                    "da": "Burde du ikke redde verden? Det her virker som småtingsafdelingen for dig.",
                    "ar": "أليس من المفترض أن تقومي بإنقاذ العالم؟ هذه المباراة أدنى من مستواكِ…",
                    "tr": "Senin dünyayı kurtarman gerekmiyor mu? Böyle boş işlerle uğraşmazsın sanıyordum.",
                    "fr": "Tu n'es pas censée sauver le monde ? L'enjeu de ce match semble un peu faible, pour toi...",
                    "it": "Per una abituata a salvare il mondo mi pare che la posta in gioco qui sia bassina..."
                },
                "goalieChat0_2": {
                    "en": "Bạn nhớ đừng khóc nhè nếu thua đấy!",
                    "es": "¡Tío, tus habilidades me hacen llorar más que cortar cebollas!",
                    "de": "Mann, bei deinen Künsten kommen mir schlimmer die Tränen als beim Lauchschneiden!",
                    "pt": "Meu, as tuas habilidades estão a deixar mais lágrimas nos meus olhos do que descascar uma cebola!",
                    "hu": "Haver, a bénázásod jobban megríkat, mint a könnyeztető hatásod!",
                    "ro": "Amice, tehnica ta mă face să plâng mai tare decât ceapa!",
                    "pl": "Stary, od Twoich umiejętności oczy mi łzawią bardziej niż od oparów z cebuli!",
                    "bg": "От играта ти ми се доплаква повече отколкото от лук! ",
                    "ru": "От твоей неумелой игры у меня слезы на глаза наворачиваются!",
                    "nl": "Gast, je speelt zo slecht dat ik nog harder moet huilen dan wanneer ik uitjes snipper!",
                    "cs": "Kámo, z tebe mi oči slzí víc než z nakrájené cibule!",
                    "no": "Kamerat, ferdighetene dine får meg til å grine mer enn løkduften din!",
                    "sv": "Din brist på talang får mina ögon att vattnas värre än en lök!",
                    "da": "Dine fodboldevner får mine øjne til at løbe i vand - værre end løg!",
                    "ar": "مهاراتك المضحكة تجعل عيناي تدمع أكثر من انبعاثاتك البصلية!",
                    "tr": "Birader, o kadar yeteneklisin ki gözlerim soğan doğramışım gibi yaşardı!",
                    "fr": "La médiocrité de ton jeu me fait pleurer plus que les oignons de la cuisine de ma maman !",
                    "it": "Amico, il tuo gioco mi fa lacrimare gli occhi peggio di un aerosol alla cipolla!"
                },
                "goalieChat0_3": {
                    "en": "Trông bạn có vẻ hơi căng thẳng quá rồi đấy.",
                    "es": "Pero tío, te das DEMASIADA importancia.",
                    "de": "Wow, Kumpel, du nimmst dich VIEL zu wichtig.",
                    "pt": "Uau, meu, tu levas-te DEMASIADO a sério.",
                    "hu": "Hű! Haver, túlságosan sokat képzelsz magadról!",
                    "ro": "Amice, ești PREA serios.",
                    "pl": "Rety, stary, musisz trochę spuścić z tonu.",
                    "bg": "Леле, много сериозно се взимаш.",
                    "ru": "Приятель, у тебя явно завышена самооценка.",
                    "nl": "Zeg hé, jij neemt jezelf wel héél serieus!",
                    "cs": "Ty jo, kámo, bereš se až MOC vážně.",
                    "no": "Slapp av, mann, du tar deg selv ALTFOR seriøst.",
                    "sv": "Wow, du tar dig själv på ALLDELES för stort allvar.",
                    "da": "Wow, du tager dig selv ALT for alvorligt.",
                    "ar": "يا للعجب يا صديقي! تبدو واثقًا من نفسك كثيرًا.",
                    "tr": "Vay canına. Sen kendini FAZLA ciddiye alıyorsun.",
                    "fr": "Wow, mec, tu te prends BEAUCOUP trop au sérieux.",
                    "it": "Wow, ti prendi un po' troppo sul serio, amico..."
                },
                "goalieChat0_4": {
                    "en": "Trình độ của bạn vẫn dưới tôi 1 bậc, bạn hiểu chứ?",
                    "es": "Tu habilidad es vergonzOSA… ¿Lo has pillado? ¿Lo pillas?",
                    "de": "Deine Künste sind nicht üBÄRmäßig ... verstehst du? Verstehst du?",
                    "pt": "As tuas habilidades são tão embarURSOçosas... Percebeste? Apanhaste esta?",
                    "hu": "MegBOCSáthatatlan, amit a labdával művelsz? Érted? Érteeed?",
                    "ro": "Tehnicile tale sunt JENANTE... Ai înțeles? Da?",
                    "pl": "Twoje umiejętności są ko-miś-ne. Czaisz?",
                    "bg": "Уменията ти са просто уМЕЧОпомрачителни...Схвана ли? Схвана ли го?",
                    "ru": "Слушай, это же футбольные ворота, а не берлога... Понял? Смешно, правда?",
                    "nl": "Jouw spel is zo slecht, dat doet gewoon BEER aan m'n ogen! Snap je 'm?",
                    "cs": "Tvoje schopnosti jsou hromMEDVĚDsky špatné… Chápeš? Pochopils to?",
                    "no": "Jeg tror du er litt forBJAMSEt … Tok du den? Tok du den?",
                    "sv": "Det känns som att du skjuter BJÖRN-bär på mig… Fattar du?",
                    "da": "Du spiller på bjørnehaveniveau! Fik du den? Det var en vits.",
                    "ar": "حتى الدببة تشعر بالإحراج من ضعف مهاراتك… أيرضيك هذا؟",
                    "tr": "Beceriksizliğini AYIplıyorum. Çaktın mı espriyi? Anladın mı?",
                    "fr": "Ne viens pas pleurer comme un petit ourson si tu perds !",
                    "it": "Per essere un plantigrado, le tue zampate non sono granché."
                },
                "goalieChat0_5": {
                    "en": "Anh chỉ là một chân sút hữu danh vô thực mà thôi.",
                    "es": "Para mí, tener un cañón por brazo es trampa, pero soy así de anticuado.",
                    "de": "Ich finde, eine Kanone am Arm ist gegen die Regeln, aber vielleicht bin ich nur altmodisch.",
                    "pt": "Acho que ter um canhão como braço é fazer batota, mas eu sou um tipo antiquado.",
                    "hu": "Szerintem ágyúkarral játszani csalás, bár én elég régimódi vagyok.",
                    "ro": "Consider că dacă am un tun în loc de braț înseamnă că trișez, dar sunt de modă veche.",
                    "pl": "Jak dla mnie wyrzutnia zamiast ręki to oszukiwanie, ale jestem staromodny.",
                    "bg": "Смятам, че да имаш оръдие вместо ръка е измама, но аз съм старомоден.",
                    "ru": "Подозреваю, что пушка вместо руки — это жульничество, но до конца не уверен.",
                    "nl": "Volgens mij is het valsspelen als je een kanon als arm hebt, maar oké. Ik ben van de oude stempel.",
                    "cs": "Mám pocit, že kanón místo ruky je podvod, ale jsem staromódní.",
                    "no": "Jeg mener at det å ha en kanon til arm er å jukse, men jeg er kanskje gammeldags.",
                    "sv": "Jag tycker nog att en kanonarm är fusk, men jag är lite gammalmodig.",
                    "da": "Jeg synes jo, at en kanon som arm er snyd. Måske er jeg bare gammeldags.",
                    "ar": "أعتقد أن امتلاك ذراع على هيئة مدفع يعتبر غشًا باللعب. ولكن ما أدراني! فأنا شخص تقليدي.",
                    "tr": "Bir kolunun yerine gülle olması hile yapmak gibi geliyor ama benim eski kafalılığımdan herhâlde.",
                    "fr": "À mon avis, avoir un canon à la place du bras, c'est de la triche. Mais je suis old shool.",
                    "it": "Sarò anche all'antica, ma secondo me avere un braccio a cannone è barare."
                },
                "goalieChat1_0": {
                    "en": "Bạn sẽ không sút nổi 1 quả vào lưới của tôi đâu!",
                    "es": "¡No me vas a colar ni uno!",
                    "de": "An mir kriegst du keinen Schuss vorbei!",
                    "pt": "Não vai conseguir fazer passar uma bola por mim!",
                    "hu": "Minden próbálkozásod kivédem!",
                    "ro": "Niciun șut de-ale tale nu va trece de mine!",
                    "pl": "Nie przepuszczę ani jednego gola!",
                    "bg": "Няма да вкараш и един гол!",
                    "ru": "Я не пропущу ни одного мяча!",
                    "nl": "Er komt geen schot langs mij!",
                    "cs": "Já nepustím jedinou střelu!",
                    "no": "Du kommer ikke til å få et eneste skudd fordi meg!",
                    "sv": "Jag tänker inte släppa för-bi ett endaste skott!",
                    "da": "Du får ikke et eneste skud forbi mig!",
                    "ar": "لن تتمكن من تسجيل أي هدف!",
                    "tr": "Benden tek bir sayı bile alamazsın!",
                    "fr": "Aucun de tes ballons ne rentrera dans ma cage !",
                    "it": "Non riuscirai a farmela manco una volta!"
                },
                "goalieChat1_1": {
                    "en": "Đừng làm tôi phải thất vọng nhé người đẹp!",
                    "es": "¡No te decepcionaré, Diana! ¡No me ganarás!",
                    "de": "Ich enttäusche dich nicht, Diana, ich werde siegen!",
                    "pt": "Não te vou deixar ficar mal Diana, não me vais vencer!",
                    "hu": "Nem fogsz bennem csalódni! Nem győzhetsz ellenem!",
                    "ro": "Nu te voi dezamăgi, Diana, nu mă vei bate!",
                    "pl": "Nie zawiodę Cię, Diano, nie pokonasz mnie!",
                    "bg": "Няма да те разочаровам, Даяна, няма да ме победиш!",
                    "ru": "Я тебя не подведу, Диана! Тебе меня не одолеть!",
                    "nl": "Diana, ik stel je niet teleur! Ik laat me niet verslaan!",
                    "cs": "Nezklamu tě, Diano. Mě neporazíš!",
                    "no": "Jeg skal ikke skuffe deg, Diana, du kommer ikke til å vinne!",
                    "sv": "Jag tänker inte göra dig besviken Diana, du kommer inte att vinna!",
                    "da": "Jeg vil ikke svigte, Diana. Jeg skal nok vinde over dig!",
                    "ar": "لن أخيب ظنك يا ديانا، سوف أتغلب عليك!",
                    "tr": "Seni hayal kırıklığına uğratmayacağım Diana, beni yenemeyeceksin!",
                    "fr": "Compte sur moi, Diana, et prépare-toi à perdre !",
                    "it": "Non ti deluderò, Diana, e puoi scordarti di riuscire a battermi!"
                },
                "goalieChat1_2": {
                    "en": "Tôi tin rằng tôi sẽ đánh bại được bạn!",
                    "es": "¡Si creo en mí misma, podré hacer cualquier cosa!",
                    "de": "Ich muss nur an mich glauben, dann schaffe ich alles!",
                    "pt": "Só tenho de acreditar em mim e eu consigo fazer qualquer coisa!",
                    "hu": "Csak hinnem kell magamban, és bármire képes leszek!",
                    "ro": "Trebuie doar să cred în mine și pot face orice!",
                    "pl": "Muszę w siebie uwierzyć i dam radę ze wszystkim!",
                    "bg": "Просто трябва да вярвам в себе си и ще постигна всичко!",
                    "ru": "Если я поверю в себя, то обязательно добьюсь успеха!",
                    "nl": "Als ik maar in mezelf geloof, dan kan ik alles!",
                    "cs": "Stačí, když si budu věřit, a dokážu cokoliv!",
                    "no": "Hvis jeg bare har troen på meg selv, er ingenting umulig!",
                    "sv": "Tror jag bara på mig själv klarar jag allt!",
                    "da": "Jeg behøver bare at tro på mig selv, så kan jeg hvad som helst!",
                    "ar": "يجب أن أكون واثقًا بنفسي وعندها كل شيء يصبح ممكنًا!",
                    "tr": "Kendime inanırsam başaramayacağım şey yok!",
                    "fr": "Si je crois en moi, je peux tout accomplir !",
                    "it": "Niente è impossibile se credo in me stessa!"
                },
                "goalieChat1_3": {
                    "en": "Eeep! A sword!? Doesn't that count as a foul?",
                    "es": "¿Qué, una espada? ¿Eso no es falta?",
                    "de": "Eeek! Ein Schwert?! Zählt das nicht als Foul?",
                    "pt": "Ui! Uma espada? Isso não conta como falta?",
                    "hu": "Na, ne! Egy kard? Szerintem ez szabályellenes.",
                    "ro": "O sabie? Se consideră fault?",
                    "pl": "Ojej! Miecz? To chyba będzie faul?",
                    "bg": "Леле! Меч? Това не е ли нарушение?",
                    "ru": "Что?! Меч?! Разве это не считается нарушением?",
                    "nl": "Oef, een zwaard?! Is dat niet een overtreding?",
                    "cs": "Sakra! Meč? Není to náhodou faul?",
                    "no": "Hjelpe meg, et sverd? Er ikke det gult kort?",
                    "sv": "Hjälp! Ett svärd? Det är väl ändå straffbart?",
                    "da": "Hvad! Et sværd!? Giver det ikke gult kort?",
                    "ar": "ماذا! سيف؟ ألا يعتبر هذا مخالفةً للقوانين؟",
                    "tr": "Nee? Kılıç mı?! Bu faul sayılmaz mı?",
                    "fr": "Hein ! Une épée ? Ça vaut pas un carton, ça ?",
                    "it": "Cheee? Una spada? Irregolare, mi pare. No?"
                },
                "goalieChat1_4": {
                    "en": "Tôi rất quý bạn nhưng tôi sẽ không để bạn thắng…",
                    "es": "¡Me encantan los osos polares! Qué pena que no te puedo dejar ganar…",
                    "de": "Ich liebe Eisbären! Tut mir leid, dass ich dich nicht gewinnen lassen kann …",
                    "pt": "Adoro ursos polares! Que pena não te poder deixar vencer…",
                    "hu": "Imádom a jegesmacikat, de bocsesz, nem hagyhatlak nyerni…",
                    "ro": "Iubesc urșii polari! Îmi pare rău că nu vă pot lăsa să câștigați...",
                    "pl": "Kocham misie polarne! Szkoda, że nie mogę dać Ci wygrać...",
                    "bg": "Обичам полярни мечки! Съжалявам, че не мога да те оставя да спечелиш...",
                    "ru": "Люблю белых медведей! Но я все равно тебя одолею, прости...",
                    "nl": "Ik ben dol op ijsberen! Ik kan je alleen niet laten winnen … Sorry!",
                    "cs": "Miluju lední medvědy! Ale promiň, nemůžu tě nechat vyhrát…",
                    "no": "Jeg elsker isbjørner! Beklager at jeg ikke kan la deg vinne …",
                    "sv": "Jag älskar isbjörnar! Men tyvärr kan jag inte låta dig vinna…",
                    "da": "Jeg elsker isbjørne! Desværre kan jeg ikke lade dig vinde...",
                    "ar": "أحب الدببة القطبية! ولكن هذا لا يعني أنك ستفوز…",
                    "tr": "Kutup ayılarına bayılırım! Ama kusura bakma, kazanmana izin veremem.",
                    "fr": "J'adore les ours polaires ! Mais désolé, je ne peux pas te laisser gagner...",
                    "it": "Adoro gli orsi polari, ma proprio non posso lasciarti vincere. Spiacente."
                },
                "goalieChat1_5": {
                    "en": "Bạn chuẩn bị trở thành kẻ chiến bại tiếp theo đê?",
                    "es": "El perdedor invita a burritos, ¿vale?",
                    "de": "Wer verliert, gibt einen Burrito aus – abgemacht?",
                    "pt": "O perdedor paga o próximo burrito, combinado?",
                    "hu": "Kössünk egyezséget: a vesztes veszi a következő burritót.",
                    "ro": "Pierzătorii fac cinste cu următorul burrito - s-a făcut?",
                    "pl": "Przegrany stawia następne burrito, stoi?",
                    "bg": "Победеният черпи с бурито. Става ли?",
                    "ru": "Проигравший покупает всем буррито, договорились?",
                    "nl": "Wie verliest, betaalt de volgende burrito. Afgesproken?",
                    "cs": "Ten, kdo prohraje, koupí další burrito – platí?",
                    "no": "Taperen kjøper den neste burritoen. Avtale?",
                    "sv": "Förloraren köper nästa burrito – okej?",
                    "da": "Taberen giver den næste burrito - er det en aftale?",
                    "ar": "الخاسر في المباراة يشتري البوريتو - اتفقنا؟",
                    "tr": "Kaybeden dürüm ısmarlar. Anlaştık mı?",
                    "fr": "Le perdant paie le prochain burrito, d'accord ?",
                    "it": "Chi perde compra il prossimo burrito. Occhei?"
                },
                "goalieChat2_0": {
                    "en": "Có tôi trong khung gỗ thì đừng mơ đến chức vô địch!",
                    "es": "No puedes ganar, ¡soy imparable!",
                    "de": "Gegen mich wirst du APFELut nicht gewinnen!",
                    "pt": "Não podes vencer, eu sou iMAÇÃtivel!",
                    "hu": "HatALMAs vereségre számíthatsz!",
                    "ro": "Nu poți câștiga, sunt de neOPRIT!",
                    "pl": "Nie wygrasz, jestem niepokonany!",
                    "bg": "Не можеш да спечелиш, не можеш да ме спреш!",
                    "ru": "Это яблоко тебе не по зубам!",
                    "nl": "Je kunt me niet verslaan! En dat is geen grap-pel! Ha!",
                    "cs": "Nevyhraješ, jablka jsou nezastavitelná!",
                    "no": "Du kan ikke vinne, jeg lager EPLEmos av deg!",
                    "sv": "Du kan inte vinna, jag är FRUKTansvärt bra!",
                    "da": "Du kan ikke vinde - mine evner er formidÆBLE!",
                    "ar": "لا يمكنك الفوز، فأنا أستطيع صد القنـ(آبل)!",
                    "tr": "Kazanamazsın, ben Elma'yım!",
                    "fr": "Tu ne peux pas gagner, la victoire est pour ma POMME !",
                    "it": "Non ce la puoi fare. Nessuno ce la fa. Nessuno ME-LA fa!"
                },
                "goalieChat2_1": {
                    "en": "Trông bạn rất xinh đẹp nhưng tôi rất tiếc!",
                    "es": "Vaya, ¡tienes un aspecto alucinante! ¿Me enseñarías trucos con el lazo?",
                    "de": "Mann, du siehst TOLL aus! Bringst du mir Tricks mit dem Lasso bei?",
                    "pt": "Uau, estás com um aspeto INCRÍVEL! Podes ensinar-me alguns truques com o laço?",
                    "hu": "Hű, CSODÁSAN nézel ki! Megtanítasz néhány trükkre a lasszóddal?",
                    "ro": "Arăți NEMAIPOMENIT! Mă poți învăța trucuri cu lasoul?",
                    "pl": "O kurczę, wyglądasz FANTASTYCZNIE! Nauczysz mnie sztuczek z lassem?",
                    "bg": "Леле, изглеждаш НЕВЕРОЯТНО! Можеш ли да ме научиш на номера с ласо?",
                    "ru": "Какая ты КРУТАЯ! Научишь меня обращаться с лассо?",
                    "nl": "Wauw, wat zie jij er gaaf uit! Kun je me wat lassolesjes geven?",
                    "cs": "Wow, vypadáš ÚCHVATNĚ! Naučíš mě triky s lasem?",
                    "no": "Jøss, du ser FANTASTISK ut! Kan du lære meg noen lassotriks?",
                    "sv": "Wow, du ser grym ut! Kan du lära mig använda ett lasso?",
                    "da": "Wow, du er FANTASTISK! Kan du lære mig nogle lassotricks?",
                    "ar": "تبدين بغاية الروعة! هل يمكنكِ تعليمي كيفية التحكم بالحبال؟",
                    "tr": "Vay canına, MÜTHİŞ görünüyorsun! Bana kırbaç numaraları öğretebilir misin?",
                    "fr": "Wow, tu es super impressionnante ! Tu peux m'apprendre à utiliser le lasso ?",
                    "it": "Wow, FA-VO-LO-SA! Mi dai due dritte su come usare il lazo?"
                },
                "goalieChat2_2": {
                    "en": "Hãy nghĩ các cách sút để lừa được tôi nhé.",
                    "es": "¡Hola, Cebolleta! Prometo no ganarte por demasiado margen.",
                    "de": "Hallo Lauch! Ich schlage dich nicht zu hoch, versprochen.",
                    "pt": "Olá Cebolinha! Prometo não ganhar por muito.",
                    "hu": "Szia, Hagyma! Ígérem, nem kapsz ki nagyon.",
                    "ro": "Bună, Ceapă! Promit să nu câștig la difereță mare.",
                    "pl": "Cześć, Szczypior! Obiecuję, że nie pokonam Cię dużą przewagą!",
                    "bg": "Здравей, Луки! Обещавам, че няма да те бия с много.",
                    "ru": "Привет, Лук! Постараюсь победить тебя не с очень разгромным счетом.",
                    "nl": "Dag, Uitje! Ik zal je niet te hard inmaken!",
                    "cs": "Ahoj, Cibule! Slibuju, že nevyhraju o moc bodů.",
                    "no": "Hei, Løken! Jeg lover at jeg ikke skal vinne med for mye.",
                    "sv": "Hej Onion! Jag lovar att inte vinna för överlägset.",
                    "da": "Hej Løgdreng! Jeg lover ikke at vinde med for meget.",
                    "ar": "أهلا أونيون! أعدك بأن أتغلب عليك برأفة.",
                    "tr": "Merhaba Soğan! Sana söz, fazla fark atmayacağım.",
                    "fr": "Bonjour Oignon ! Je promets de ne pas trop gagner.",
                    "it": "Ciao, Onion! Cercherò di non stravincere, promesso!"
                },
                "goalieChat2_3": {
                    "en": "Tôi sẽ sớm tiễn đội bạn về nhà thôi",
                    "es": "Ooooh, un gatito. ¿Te has perdido? ¿Te ayudo a encontrar a tu dueño?",
                    "de": "Oooh, eine Katze! Hast du dich verlaufen? Soll ich dir helfen, dein Herrchen zu finden?",
                    "pt": "Oooh, um gato! Estás perdido? Queres ajuda para encontrar o teu dono?",
                    "hu": "Nini, egy macska! Eltévedtél? Segítsek megkeresni a gazdid?",
                    "ro": "O pisică! Te-ai pierdut? Te voi ajuta să-ți găsești proprietarul.",
                    "pl": "Ojej, kotek! Zgubiłeś się? Pomóc Ci znaleźć Twojego pana?",
                    "bg": "Ооо, котка! Изгуби ли се? Да ти помогна ли да намериш стопанина си?",
                    "ru": "Ой, котик! Ты что, заблудился? Отвести тебя к хозяину?",
                    "nl": "Oeh, een kat! Ben je verdwaald? Zal ik je helpen je baasje te zoeken?",
                    "cs": "Jé, kočička? Ztratila ses? Chceš pomoct najít páníčka?",
                    "no": "Åååå, en katt! Har du gått deg bort? Kan jeg hjelpe deg med å finne eieren din?",
                    "sv": "Ååååh, en katt! Har du tappat bort dig? Kan jag hjälpa dig att hitta din ägare?",
                    "da": "Uuuuh en lille kat! Er du faret vild? Skal jeg hjælpe dig med at finde din ejer?",
                    "ar": "أيها القط الحزين! هل ضللت الطريق؟ يمكنني مساعدتك في العثور على صاحبك؟",
                    "tr": "Aa, bir kedi! Kayıp mı oldun kedicik? Sahibini bulmana yardım edeyim mi?",
                    "fr": "Oh, un chat ! Est-ce que tu es perdu ? Tu veux que je t'aide à retrouver ton maître ?",
                    "it": "To', un gatto! Ti sei perso? Vuoi una mano a trovare il tuo padrone?"
                },
                "goalieChat2_4": {
                    "en": "Tôi sẽ không để bạn sút vào quả nào đâu?",
                    "es": "Un momento, ¿ahora jugamos contra osos? ¿Qué clase de liga es esta?",
                    "de": "Moment, jetzt ist ein Bär der Gegner? In welcher Liga spielen wir hier?",
                    "pt": "Espera, agora estamos a jogar contra um urso? Que campeonato é este?",
                    "hu": "Várjunk csak! Most egy medve ellen játszunk? Milyen ligában vagyok?",
                    "ro": "Stați, vom juca împotriva unui urs? Ce ligă e asta?",
                    "pl": "Chwila, teraz mam grać z niedźwiedziem? Co to za liga?",
                    "bg": "Чакай, сега играем срещу мечка? Що за лига е това?",
                    "ru": "Теперь мне нужно играть с медведем?! Что это за лига такая?",
                    "nl": "Wacht even, moeten we nou tegen een beer spelen? Wat is dit voor een verknipt toernooi?!",
                    "cs": "Tak moment, my hrajeme proti medvědovi? To je tohle za ligu?",
                    "no": "Hold an, spiller vi mot en bjørn nå? Hvilken liga er dette?",
                    "sv": "Vänta lite! Ska jag spela mot en björn nu? Vad är det här för en liga?",
                    "da": "Vent, spiller vi nu mod en bjørn? Hvilken division er det her?",
                    "ar": "مهلاً، هل علينا اللعب ضد دب؟ أي نوع من البطولات هذه؟",
                    "tr": "Ne yani, şimdi de ayıya karşı mı oynuyoruz? Pardon, bu lig ne ligi?",
                    "fr": "Attends, maintenant on joue contre un ours ? C'est quoi ce tournoi de fou ?",
                    "it": "Come sarebbe... Giochiamo contro un orso? Scusa, ma che categoria sarebbe questa?"
                },
                "goalieChat2_5": {
                    "en": "TÔI ĐÃ CHỜ ĐỢI SO TÀI VỚI ANH TỪ LÂU LẮM RỒI! CYBORG!",
                    "es": "¡ME ENCANTARÍA SER UN CÍBORG! ¡ENSEÑAME!",
                    "de": "ICH WILL AUCH EIN CYBORG SEIN! BRING ES MIR BEI!",
                    "pt": "EU GOSTAVA DE SER UM CYBORG! ENSINA-ME!",
                    "hu": "HADD LEGYEK ÉN IS KIBORG! TANÍTSD MEG, HOGYAN KELL!",
                    "ro": "MI-AȘ DORI SĂ FIU CYBORG! ÎNVAȚĂ-MĂ!",
                    "pl": "TEŻ CHCĘ BYĆ CYBORGIEM! NAUCZ MNIE!",
                    "bg": "ИСКАМ ДА СЪМ КИБОРГ! НАУЧИ МЕ!",
                    "ru": "ТОЖЕ ХОЧУ БЫТЬ КИБОРГОМ! НАУЧИ МЕНЯ!",
                    "nl": "IK WIL EEN CYBORG ZIJN! HOE? LEER HET ME!",
                    "cs": "JÁ CHCI BÝT KYBORG! NAUČ MĚ TO!",
                    "no": "JEG SKULLE ØNSKE JEG VAR EN KYBORG! VIS MEG HVA SOM MÅ TIL!",
                    "sv": "JAG VILL OCKSÅ BLI EN CYBORG! VISA MIG HUR!",
                    "da": "JEG VIL OGSÅ VÆRE EN CYBORG! LÆR MIG DET!",
                    "ar": "أتمنى لو كنت مثلك! علمني كيف!",
                    "tr": "KEŞKE BEN DE ROBOT OLABİLSEM! ÖĞRET BANA!",
                    "fr": "JE RÊVE DE DEVENIR UN CYBORG ! APPRENDS-MOI !",
                    "it": "MAGARI FOSSI UN CYBORG! COME SI FA? MI INSEGNI?"
                },
                "goalieChat3_0": {
                    "en": "Cá và Dơi - 1 trận đấu kinh điển!",
                    "es": "Ah, murciélago contra pez: la clásica batalla ancestral.",
                    "de": "Aaah, Fledermaus gegen Fisch – der zeitlose Klassiker!",
                    "pt": "Ahh! Morcego contra Peixe, um combate clássico para a posteridade!",
                    "hu": "Denevér a hal ellen: klasszikus párharc lesz!",
                    "ro": "Liliac vs Pește - clasica bătălie a veacurilor!",
                    "pl": "O, nietoperz kontra ryba – klasyczna walka wszechczasów!",
                    "bg": "Аааа, прилеп срещу риба. Това ще е битката на века!",
                    "ru": "Летучая мышь против рыбы — об этой битве сложат легенды!",
                    "nl": "Ah, de strijd van de vleermuis en de vis. Een echte klassieker.",
                    "cs": "Páni, netopýr versus ryba – klasická památná bitva!",
                    "no": "Flaggermus mot katt, en skikkelig klassiker!",
                    "sv": "Fladdermus mot fisk – en av de klassiska tvekamperna!",
                    "da": "Ah ja, flagermus mod fisk - det klassiske opgør!",
                    "ar": "الخفافيش في مواجهة الأسماك - يا لها من معركة أسطورية!",
                    "tr": "Yarasa, balığa karşı. Yılların bitmek bilmeyen savaşı!",
                    "fr": "Ahh, le combat ancestral entre la chauve-souris et le poisson.. un grand classique !",
                    "it": "Ahhh, pipistrello-pesce: un classico calcistico!"
                },
                "goalieChat3_1": {
                    "en": "Tôi rất ngưỡng mộ tài năng của bạn!",
                    "es": "¡Me encanta tu lazo! ¡Pareces una heroína de verdad!",
                    "de": "Dein Lasso gefällt mir! Du siehst wie ein wahrer Held aus!",
                    "pt": "Gosto do teu laço! Pareces uma verdadeira heroína!",
                    "hu": "Tetszik a lasszód. Valódi hősnek látszol!",
                    "ro": "Îmi place lasoul tău! Arăți ca o eroină adevărată!",
                    "pl": "Fajne lasso! Wyglądasz jak prawdziwa bohaterka!",
                    "bg": "Харесва ми ласото ти! Изглеждаш като истински герой!",
                    "ru": "Мне нравится твое лассо! Ты похожа на настоящую героиню!",
                    "nl": "Leuk, die lasso! Je lijkt zo wel een echte held!",
                    "cs": "Líbí se mi tvoje laso! Vypadáš jako skutečný hrdina!",
                    "no": "Jeg liker lassoen din! Du ser ut som en ekte helt!",
                    "sv": "Jag gillar ditt lasso! Du ser ut som en äkta hjälte!",
                    "da": "Jeg er vild med din lasso! Du ligner en ægte helt!",
                    "ar": "أحب رؤية مهارتك في التحكم بالحبال! تبدين كبطلة خارقة!",
                    "tr": "Kırbacını beğendim! Gerçek bir kahraman gibi görünüyorsun!",
                    "fr": "J'aime ton lasso, tu ressembles à une vraie héroïne !",
                    "it": "Mi piace il tuo lazo! Ti dà proprio un'aria da vera eroina!"
                },
                "goalieChat3_2": {
                    "en": "Tôi xin lỗi trước nếu tôi cản phá được nhiều cú sút của bạn nhé!",
                    "es": "Mmm, me encantan los aros de cebolla… Perdón, me he distraído por un momento.",
                    "de": "Mmmmh, ich liebe Lauchringe … Oh, tut mir leid, ich habe mich ablenken lassen!",
                    "pt": "Mmmmm, adoro aros de cebola... desculpa, distraí-me!",
                    "hu": "Nyamiii! A hagymakarika a kedvenc eledelem… Bocs, egy kicsit elkalandoztam!",
                    "ro": "Inelele de ceapă sunt favoritele mele. Scuze, am fost distras!",
                    "pl": "Mmmm, uwielbiam grzanki ze szczypiorkiem… Aż się rozmarzyłam.",
                    "bg": "Мммм, лучените кръгчета са ми любими...Извинявай, разсеях се!",
                    "ru": "М-м-м-м, обожаю луковые колечки... Ой, что-то я отвлеклась.",
                    "nl": "Mmm, ik ben dol op uitjes. Lekker, op een harinkje … O, sorry, ik dwaalde even af!",
                    "cs": "Mmm, cibulové kroužky miluju… promiň, nesoustředila jsem se!",
                    "no": "Naaaammm, løkringer er favoritten min … Beklager, ble litt distrahert der.",
                    "sv": "Mmmm, jag älskar lökringar… Förlåt jag blev lite distraherad där!",
                    "da": "Mmmmmm jeg elsker løgringe ... undskyld, jeg blev lige distraheret!",
                    "ar": "كم أعشق حلقات البصل المقلية… عذرًا فقد تشتت انتباهي!",
                    "tr": "Mmmmm, soğan halkalarına bayılırım. Affedersin, aklım başka yere gitti!",
                    "fr": "Miam, j'adore les oignons frits... Désolée, je me suis déconcentrée toute seule !",
                    "it": "Gnamgnam! Frittura di cipolle... Il mio piatto preferito... Scusa, Onion, mi sono distratto un attimo..."
                },
                "goalieChat3_3": {
                    "en": "Nhớ ngắm cho kỹ rồi sút bóng nhé!",
                    "es": "Muy bien, Mao Mao, ¡prepárate para una adorabat-alla!",
                    "de": "Also gut, Mao Mao, mach dich auf ein Adorabattle gefasst!",
                    "pt": "Muito bem Mao Mao, prepara-te para uma adorabatalha!",
                    "hu": "És most, Mao Mao, készülj az édes bosszúra!",
                    "ro": "Bine, Mao Mao, fii gata de o adorabătălie!",
                    "pl": "No dobra, Mao Mao, gotowy na batalię?",
                    "bg": "Добре, Мао Мао, приготви се за Адора-битка!",
                    "ru": "Итак, Мао-Мао, приготовься к героической битве!",
                    "nl": "Oké, Mao Mao, bereid je voor op de strijd met deze schattige vleermuismeid!",
                    "cs": "Tak jo, Mao Mao, připrav se na něžnobitvu!",
                    "no": "OK, Mao Mao, gjør deg klar til å gå i flaggermusefella!",
                    "sv": "Okej Mao Mao, förbered dig på inbördeskrig!",
                    "da": "Okay Mao Mao, gør dig klar til at blive flagermost!",
                    "ar": "حسنًا يا ماو ماو! استعد لمواجهة أدورابات!",
                    "tr": "Pekâlâ Mao Mao, bir yarasaya yenilmeye hazırlan!",
                    "fr": "Allez, Mao Mao, prépare-toi à affronter ta disciple !",
                    "it": "Ci siamo, Mao Mao. Preparati per un'Adorabat-taglia!"
                },
                "goalieChat3_4": {
                    "en": "Tôi nghĩ là tôi đã biết được bạn sẽ sút về hướng nào!",
                    "es": "¡Guau, por un momento creía que eras Ojotejón!",
                    "de": "Huch! Kurz dachte ich, du wärst Robo-Dachs!",
                    "pt": "Uau, por um momento pensei que fosses o Texugão!",
                    "hu": "Hű! Egy pillanatra összekevertelek Borzoklopsszal!",
                    "ro": "Pentru o secundă, am crezut că sunteți Badgerclops!",
                    "pl": "O rety! Już myślałam, że jesteś Borsukowatym!",
                    "bg": "Леле, за момент помислих, че си Баджърклопс!",
                    "ru": "Ой, мне на секунду показалось, что ты — Барсуклоп!",
                    "nl": "Wauw, ik dacht even dat je Dascycloop was!",
                    "cs": "Ty jo, na vteřinu jsem si myslela, že jsi Jezeklops!",
                    "no": "Jøsses, jeg trodde du var Grevlingklop et lite øyeblikk!",
                    "sv": "Oj, jag trodde först att du var Klabbe Grävling!",
                    "da": "Wow, jeg troede et øjeblik at du var Grævlingbot!",
                    "ar": "عجبًا! للحظة ظننت أنك بادجركلوبس!",
                    "tr": "Yok artık, seni bir anlığına Badgercops sandım!",
                    "fr": "Wow, l'espace d'une seconde j'ai cru que tu étais Blaireau Borgne.",
                    "it": "Wow! Per un attimo pensavo fossi Cybertasso!"
                },
                "goalieChat3_5": {
                    "en": "Hãy cho tôi thấy khả năng nã đạn của bạn thôi nào?",
                    "es": "¿Es que ahora todo el mundo lleva cañones láser en los brazos?",
                    "de": "Heutzutage hat aber auch jeder Laserkanonenarme, was?",
                    "pt": "Uau, hoje em dia toda a gente tem um canhão em vez de braço, não é?",
                    "hu": "Manapság mindenki lézerágyús karral rohangászik?",
                    "ro": "Toți au brațe cu tunuri cu laser acum, nu?",
                    "pl": "Rety, teraz wszyscy mają lasso albo wyrzutnię, co?",
                    "bg": "Леле, в днешно време всеки има лазерно оръдие вместо ръка, а?",
                    "ru": "Судя по всему, лазерные пушки вместо рук входят в моду?",
                    "nl": "Zo joh, iedereen loopt tegenwoordig rond met laserkanonnen als armen, hm?",
                    "cs": "Wow, dneska má každý místo ruky laserový kanón, co?",
                    "no": "Wow, alle har laserarmkanoner i disse dager, ha?",
                    "sv": "Oj, har alla laserarm-kanoner nu för tiden?",
                    "da": "Alle har laserkanoner på armen nu om dage, hva?!",
                    "ar": "يبدو أن امتلاك مدافع ليزرية أصبح أمرًا سهلاً هذه الأيام، أليس كذلك؟",
                    "tr": "Vay canına, bugünlerde de herkeste lazerli kol güllesi var, değil mi?",
                    "fr": "Tiens, tout le monde a des canons à la place des bras en ce moment, hein ?",
                    "it": "Wow! A quanto pare oggi tutti hanno cannoni laser per braccia, eh!"
                },
                "goalieChat4_0": {
                    "en": "Tôi sẽ thắng còn bạn sẽ thua.",
                    "es": "Primero te gano. Luego me echo la siesta.",
                    "de": "Erstens: Ich siege. Zweitens: Ich mache ein Nickerchen.",
                    "pt": "Primeiro: eu ganho. Depois: eu faço a sesta.",
                    "hu": "Először nyerek, utána pihenek.",
                    "ro": "Prima dată: câștig. Apoi: dorm.",
                    "pl": "Najpierw wygrana, potem drzemka.",
                    "bg": "Първо: печеля. После: поспивам.",
                    "ru": "Первый пункт плана: выиграть. Второй пункт: поспать.",
                    "nl": "Eerst: winnen. Dan: een tukje.",
                    "cs": "Nejdřív: výhra. Potom: spánek.",
                    "no": "Først: Bjørnen vinner. Så: Bjørnen sover.",
                    "sv": "Först: seger. Sen: sova.",
                    "da": "Først: Vinde i fodbold. Så: Middagslur.",
                    "ar": "المهمة الأولى الفوز ومن ثم النوم.",
                    "tr": "Önce seni yeneceğim, sonra bir güzel şekerleme yapacağım.",
                    "fr": "Pour commencer, je gagne. Ensuite, je fais la sieste.",
                    "it": "Prima, vinco. Poi, nannina."
                },
                "goalieChat4_1": {
                    "en": "Đừng phí công vô ích, các bạn sẽ là bên bại trận.",
                    "es": "¡Intenta colarme un balón! Pista: vas a perder.",
                    "de": "Versuch doch, einen Schuss an mir vorbeizukriegen! Hinweis: Vergiss es.",
                    "pt": "Tenta fazer a bola passar por mim! Uma dica: vais falhar.",
                    "hu": "Csak próbálj meg gólt szerezni! Segítek: nem fogsz.",
                    "ro": "Încearcă să vezi dacă va trece un șut de mine! Pont: nu vei reuși.",
                    "pl": "No spróbuj strzelić obok mnie. Podpowiem: spudłujesz.",
                    "bg": "Само пробвай да вкараш гол! Ще ти подскажа: ще загубиш.",
                    "ru": "Ну давай, попробуй мне забить! Спорим, не получится?",
                    "nl": "Probeer maar eens te scoren! Plottwist: lukt je nooit!",
                    "cs": "Jenom mě zkus prostřelit! Nápověda: nepodaří se ti to.",
                    "no": "Bare prøv å snike et skudd forbi meg! Hint: Kommer aldri til å skje.",
                    "sv": "Försök du få bollen i mål! Tips: du kommer att misslyckas.",
                    "da": "Bare prøv om du kan få et skud forbi mig! Hint: det sker ikke.",
                    "ar": "سددي ما شئتي من الكرات! لن تستطيعي تسجيل الأهداف.",
                    "tr": "Hadi bana gol atmayı dene! İpucu: Başaramayacaksın.",
                    "fr": "Je te défie de faire entrer un but dans mes filets ! Je te préviens, c'est impossible.",
                    "it": "Tira, tira pure. Tanto non ce la fai."
                },
                "goalieChat4_2": {
                    "en": "Tôi là một thủ môn bắt penalty rất cừ, bạn biết chứ?",
                    "es": "La voy a liar parda, no vas a marcar ni un punto.",
                    "de": "Ich bin der Master of Grizzaster, und du wirst nicht einen Punkt nach Hause tragen.",
                    "pt": "Eu sou o Mestre do Pardomónio! Não vais conseguir fazer um único ponto.",
                    "hu": "Itt ma nincs esélyed! Brummisztikus formában vagyok!",
                    "ro": "Sunt Maestrul Grizz - nu vei lua niciun punct.",
                    "pl": "Czeka Cię grizzastrofa – nie zdobędziesz ani punktu!",
                    "bg": "Аз съм майстор-гризастор - няма да спечелиш и една точка",
                    "ru": "Я — грозный медведь гризли! Ты не забьешь ни одного мяча!",
                    "nl": "Ik ben een grizz-elig goede speler! Je scoort geen punt, let maar op!",
                    "cs": "Jsem Mistr Grizzák – nezískáš jediný bod.",
                    "no": "Du kommer til å gå på et brakar-tap – du får ikke et eneste poeng!",
                    "sv": "Passa dig så du inte får en björnkram - här blir det inga mål.",
                    "da": "Jeg er en bjørn i et mål - du har ikke en chance.",
                    "ar": "أنا الدب البطل وأنت مجرد بصل - لن تتمكن من تسجيل أي هدف.",
                    "tr": "Ben Usta Boz'um. Tek bir gol bile atamayacaksın.",
                    "fr": "Je suis Griz, le roi du stade, tu ne mettras aucun but !",
                    "it": "Sono l'asso della parata, e se pensi di segnare puoi levartelo dalla testa!"
                },
                "goalieChat4_3": {
                    "en": "Chạm trán mèo đen quả là đen đủi nhưng tôi vẫn sẽ thắng",
                    "es": "Los gatos negros dan mala suerte. ¿no? ¿Entonces tú siempre pierdes?",
                    "de": "Schwarze Katzen bedeuten Pech, oder? Heißt das, dass du immer verlierst?",
                    "pt": "Os gatos pretos dão azar, não é? Isso significa que vais perder sempre.",
                    "hu": "A fekete macska balszerencsét hoz. Ez azt jelenti, hogy mindig veszítesz?",
                    "ro": "Pisicile rele aduc ghinion, nu? Asta înseamnă că pierzi mereu.",
                    "pl": "Czarne koty przynoszą pecha. Czy to znaczy, że zawsze przegrywasz?",
                    "bg": "Черните котки носят лош късмет, това означава ли, че винаги губиш",
                    "ru": "Черные кошки приносят беду, верно? Ты, похоже, всегда проигрываешь?",
                    "nl": "Zwarte katten brengen ongeluk, toch? Betekent dat dan dat jij altijd verliest?",
                    "cs": "Černé kočky nosí smůlu, že? Znamená to, že vždycky prohraješ?",
                    "no": "Svarte katter betyr ulykke, så taper du hver gang?",
                    "sv": "Svarta katter betyder otur, eller hur? Betyder det att du alltid förlorar?",
                    "da": "Sorte katte betyder uheld, ikke? Så betyder det, at du altid taber?",
                    "ar": "سمعت أن القطط السوداء نذير شؤم، هل يعني هذا أنك تخسر باستمرار؟",
                    "tr": "Kara kedi uğursuzluktur derler, değil mi? Bu senin hep yenildiğin anlamına mı geliyor?",
                    "fr": "Les chats noirs portent malchance, hein ? Donc, tu perds tout le temps, c'est ça ?",
                    "it": "I gatti neri portano sfortuna, giusto? Significa che perdi sempre?"
                },
                "goalieChat4_4": {
                    "en": "Đừng mơ tôi sẽ thả cho bạn thắng nhé!",
                    "es": "¡Colega, no esperes que te lo ponga fácil!",
                    "de": "Hey Kumpel! Erwarte keine Milde von mir!",
                    "pt": "Ei, mano! Não esperes que eu te facilite as coisas!",
                    "hu": "Hé, tesó! Ne hidd, hogy hagylak nyerni!",
                    "ro": "Salut, frate! Nu te aștepta să te iau cu ușurelul!",
                    "pl": "Stary, nie oczekuj, że dam Ci fory!",
                    "bg": "Хей, братле! Не очаквай да ти се дам лесно!",
                    "ru": "Привет, братишка! Даже не думай, я не поддамся.",
                    "nl": "Hé, gast! Denk maar niet dat ik het je makkelijk ga maken!",
                    "cs": "Hele, brácho! Nečekej, že na tebe budu hodný!",
                    "no": "Hei bror! Du må ikke forvente at jeg tar det rolig mot deg!",
                    "sv": "Tro inte att jag tänker vara snäll mot dig brorsan!",
                    "da": "Hey makker! Du skal ikke regne med, at jeg gør det nemt for dig!",
                    "ar": "أخي وحبيبي! لكن لن أتساهل معك على الإطلاق!",
                    "tr": "Kardeş! Sana kıyak geçmemi bekleme!",
                    "fr": "Hé, mon frère ! Ne t'attends pas à ce que je te fasse une fleur !",
                    "it": "Ehi, amico! Scordati che ci andrò giù morbido con te!"
                },
                "goalieChat4_5": {
                    "en": "Đừng tỏ ra run sợ nhé anh bạn, Cyborg",
                    "es": "No dejes que ese cíborg te ponga nervioso, Pardo, tú puedes.",
                    "de": "Keine Bange vor dem bösen Cyborgmann, Grizz, du schaffst das!",
                    "pt": "Não deixes que o cyborg assustador te meta medo, Pardo. Tu consegues!",
                    "hu": "Ne hagyd, hogy az ijesztő kiborgember kibabráljon veled, Grizz! Sikerülni fog!",
                    "ro": "Nu-l lăsa pe cyborgul înfricoșător să te sperie, Griz! Te vei descurca!",
                    "pl": "Ten straszny cyborg Cię nie przestraszy, Grizz, dasz radę",
                    "bg": "Не позволявай на страшния киборг да те изплаши, Гриз, можеш го!",
                    "ru": "Страшному киборгу тебя не испугать, Гриз! Ты справишься...",
                    "nl": "Grizz, laat je niet intimideren door die enge robotman. Dit kun jij!",
                    "cs": "Nenech se tím bláznivým Kyborgem rozhodit, Grizzi, to zvládneš.",
                    "no": "Ikke la den skumle kyborgmannen ryste deg, Griz, dette klarer du!",
                    "sv": "Låt inte den läskiga cyborgen skrämma dig Grizz, du fixar det här.",
                    "da": "Ikke være bange for den grumme cyborgmand, Grizzly. Du kan gøre det!",
                    "ar": "لا تدع رجلاً آليًا مثله يخيف دبًا بحجمك يا شهاب! عليك به.",
                    "tr": "Korkunç robot adamın seni titretmesine izin verme Boz. Başaracaksın.",
                    "fr": "Ne te laisse pas impressionner par le cyborg, Griz, tu vas gagner.",
                    "it": "Non lasciarti impressionare dal cyborg-umanoide, Griz. Ce la puoi fare!"
                },
                "goalieChat5_0": {
                    "en": "Too bad you're a goldfish and not a goalfish. Maybe then you'd win!",
                    "es": "Qué pena que seas un pececillo y no un tiburón. A lo mejor así ganarías",
                    "de": "Dumm, dass du als Fisch nicht im Netz bist! Vielleicht hättest du dann gewonnen!",
                    "pt": "Que pena seres um peixinho dourado e não um peixinho guarda-redes. Talvez assim conseguisses vencer!",
                    "hu": "Csak egy aranyhal vagy, nem aranylábú. Azzal talán lenne esélyed!",
                    "ro": "Păcat că ești un peștișor de aur și nu unul de goluri. Poate așa ați fi câștigat!",
                    "pl": "Szkoda, że jesteś złotą rybką, a nie złotą piłką, może wtedy byś wygrał!",
                    "bg": "Жалко, че играем на земята, а не във водата. Може би тогава би победил!",
                    "ru": "Жаль, что мы играем на поле, а не в воде. Может, тогда бы ты победил!",
                    "nl": "Je bent dan wel een goudvis, maar goud ga je niet winnen. Want dat ga ik al doen!",
                    "cs": "Škoda, že jsi jenom zlatá rybka. S rukama bys možná vyhrál!",
                    "no": "Synd du bare er en gullfisk, ikke en kald fisk. Da kunne du kanskje ha vunnet!",
                    "sv": "Synd att du är en guldfisk och inte en vinna guld-fisk! Då kanske det hade gått bättre för dig.",
                    "da": "Ærgerligt at du er en guldfisk og ikke en målfisk. Så vandt du måske!",
                    "ar": "من المؤسف أنك مجرد سمكة صغيرة. كان بإمكانك الفوز لو كنت حوتًا!",
                    "tr": "Ne yazık ki Brezilya balığı değil, Japon balığısın. Öyle olsan belki kazanırdın!",
                    "fr": "Dommage que tu sois un poisson rouge et pas un poisson gardien. Parce que ce serait ta seule chance de gagner !",
                    "it": "Da pesce, sarai anche abituato a finire nella rete. Ma qui te lo puoi scordare!"
                },
                "goalieChat5_1": {
                    "en": "Nhận thua đi người đẹp!",
                    "es": "¡Ganaré esta ronda por los AUTÉNTICOS superhéroes adolescentes!",
                    "de": "Ich werde diese Runde für die WAHREN Teen-Superhelden gewinnen! ",
                    "pt": "Vou ganhar esta ronda em nome dos VERDADEIROS super-heróis!",
                    "hu": "Megnyerem ezt a párharcot az IGAZI tini szuperhősökért!",
                    "ro": "Voi câștiga runda asta pentru ADEVĂRAȚII tineri superoi!",
                    "pl": "Wygram tę rundę dla PRAWDZIWEJ nastoletniej drużyny superbohaterów!",
                    "bg": "Ще спечеля този кръг в името на ИСТИНСКИТЕ супергерои - титаните!",
                    "ru": "Приготовься к встрече с НАСТОЯЩЕЙ супергероиней!",
                    "nl": "Deze keer win ik, als eerbetoon aan de ECHTE tienersuperhelden!",
                    "cs": "Tohle kolo vyhraju ve jménu PRAVÝCH mladých superhrdinů!",
                    "no": "Jeg skal vinne denne runden for de EKTE tenårings-superheltene!",
                    "sv": "Jag kommer att vinna detta för de SANNA tonårssuperhjältarna!",
                    "da": "Jeg vil vinde denne runde for alle ÆGTE teenage-superhelte!",
                    "ar": "سوف أهدي فوزي بهذه المباراة إلى جميع المعجبين الحقيقين بالأبطال الخارقين!",
                    "tr": "Bu raundu GERÇEK genç süper kahramanlar için kazanacağım!",
                    "fr": "Je vais gagner ce match pour les VRAIS super héros adolescents !",
                    "it": "Vincerò il torneo per i giovani supereroi. I VERI supereroi!"
                },
                "goalieChat5_2": {
                    "en": "Với tôi đứng trong khung gỗ thì bạn sẽ không có bất cứ cơ hội nào đâu…",
                    "es": "A lo mejor debería abrir un portal a la otra dimensión justo delante de la portería…",
                    "de": "Vielleicht sollte ich vor dem Tor einfach ein Portal in die Dämonenwelt öffnen …",
                    "pt": "Talvez devesse simplesmente abrir um portal para o reino diabólico diante da baliza…",
                    "hu": "Lehet, hogy csak meg kellene nyitnom a portált a kapu előtt a démonok világába…",
                    "ro": "Poate ar trebui să deschid un portal către tărâmul demonilor în fața porții...",
                    "pl": "Może po prostu otworzę portal do świata demonów przed strzelcem..",
                    "bg": "Може би трябва просто да отворя порта към света на демоните пред вратата...",
                    "ru": "Может, мне стоит открыть портал в мир демонов прямо перед воротами?",
                    "nl": "Zal ik anders gewoon een demonisch portaal openen, pal voor het doel?",
                    "cs": "Možná bych měla před brankou otevřít portál do říše démonů…",
                    "no": "Kanskje jeg bare skulle åpne en portal til demonriket rett foran mål …",
                    "sv": "Jag kanske helt enkelt skulle öppna en portal till demonriket framför målet…",
                    "da": "Måske skulle jeg bare åbne en portal til dæmonverdenen foran målet...",
                    "ar": "لربما كل ما علي فعله هو فتح بوابة مملكة الظلام أمام المرمى…",
                    "tr": "Belki de tam kalenin önüne, kötüler âlemine giden bir boyut kapısı açmalıyım.",
                    "fr": "Peut-être que je devrais juste créer un portail ouvert sur le royaume démoniaque devant la cage...",
                    "it": "Magari potrei aprire un portale per il regno dei demoni giusto davanti alla rete..."
                },
                "goalieChat5_3": {
                    "en": "Bạn nói bạn là 1 sát thủ nhưng tôi thấy bạn chỉ là 1 cầu thủ tầm thường",
                    "es": "Dices que eres un héroe, pero no veo más que a un perdedor.",
                    "de": "Du nennst dich Held, aber ich sehe nur einen Verlierer!",
                    "pt": "Dizes que és um herói, mas eu só vejo um perdedor.",
                    "hu": "Hősnek mondod magad, de én csak egy nagy vesztest látok.",
                    "ro": "Zici că ești un erou, dar eu văd doar un pierzător.",
                    "pl": "Nazywasz się bohaterem, a ja tu widzę przegrywa.",
                    "bg": "Казваш, че си герой, но аз виждам само един губещ.",
                    "ru": "Ты называешь себя героем, но я вижу только неудачника.",
                    "nl": "Jij noemt jezelf een held, maar ik zie vooral een sufsok.",
                    "cs": "Tvrdíš, že jsi hrdina, ale já vidím jenom úplnou nulu.",
                    "no": "Du sier at du er en helt, men alt jeg ser er en taper.",
                    "sv": "Du påstår att du är en hjälte, men jag kan bara se en förlorare!",
                    "da": "Du kalder dig selv for en helt, men jeg ser bare en taber!",
                    "ar": "تقول أنك بطل باسل، ولا أرى أمامي سوى قط فاشل",
                    "tr": "Kahraman olduğunu söylüyorsun ama benim tek gördüğüm kaybetmeye mahkum biri.",
                    "fr": "Tu dis être un héros, mais tout ce que je vois est un loser.",
                    "it": "Ti definisci un eroe? Bah, io vedo solo un perdente!"
                },
                "goalieChat5_4": {
                    "en": "Tôi biết những cú sút của bạn rất căng nhưng chưa đủ đánh bại tôi đâu.",
                    "es": "Qué bien que seas un oso polar, porque esta derrota te va a dejar HELADO.",
                    "de": "Gut, dass du ein Eisbär bist, denn ich werde dich EISKALT besiegen.",
                    "pt": "Uma coisa boa de seres um urso polar é que esta derrota te vai deixar GELADO.",
                    "hu": "Szerencséd, hogy jegesmedve vagy, mert a vereség úgyis JÉGRE tesz.",
                    "ro": "Bine că ești un urs polar, înfrângerea asta tenis va lăsa RECE.",
                    "pl": "Dobrze, że jesteś misiem polarnym, bo ta porażka Cię ZMROZI.",
                    "bg": "Добре, че си полярна мечка, защото тази загуба ще те ОХЛАДИ.",
                    "ru": "Повезло тебе, что ты белый медведь, потому что я окажу тебе ХОЛОДНЫЙ прием!",
                    "nl": "Het is maar goed dat je een ijsbeer bent, want ik ga je ijskoud inmaken!",
                    "cs": "Ještě že jsi lední medvěd, moje vítězství tě totiž ZCHLADÍ.",
                    "no": "Bra du er en isbjørn, for dette tapet kommer til å gi deg FRYSNINGER.",
                    "sv": "Tur att du är en isbjörn, jag är så väldigt kall när det gäller att skjuta straffar.",
                    "da": "Det er godt, du er en isbjørn, for nu ryger du ud i kulden!",
                    "ar": "من الجيد أنك دبي قطبي، لأن الأجواء ستصبح عاصفة بعد تعرضك للهزيمة.",
                    "tr": "İyi ki kutup ayısısın çünkü zaferim BUZ GİBİ olacak.",
                    "fr": "Heureusement pour toi que tu es un ours polaire - prépare-toi pour la douche FROIDE !",
                    "it": "Ti va bene che sei un orso polare, perché la tua sconfitta ti darà i BRRRIVIDI!"
                },
                "goalieChat5_5": {
                    "en": "Đừng nghĩ rằng tôi sẽ dễ dàng tha cho bạn!",
                    "es": "No pienses ni un instante que te lo voy a poner fácil.",
                    "de": "Glaub ja nicht, dass ich es dir leichter mache!",
                    "pt": "Nem penses por um momento que eu te vou facilitar as coisas!",
                    "hu": "Ne hidd, hogy visszafogom magam!",
                    "ro": "Să nu crezi o secundă că te voi lua cu ușurelul!",
                    "pl": "Tylko sobie nie myśl, że Ci odpuszczę!",
                    "bg": "Дори и не си помисляй, че ще ти се дам!",
                    "ru": "Даже не жди от меня поблажек!",
                    "nl": "Denk maar niet dat ik me ga inhouden!",
                    "cs": "Rozhodně si nemysli, že tě budu šetřit!",
                    "no": "Du må for all del ikke tro at jeg kommer til å ta det rolig mot deg!",
                    "sv": "Tro inte för en sekund att jag kommer göra det lätt för dig!",
                    "da": "Du må ikke tro, at jeg giver dig en chance!",
                    "ar": "لا تظن لوهلة أن المباراة ستكون سهلة!",
                    "tr": "Sana kıyak geçeceğimi bir an için bile düşünme!",
                    "fr": "Ne t'inquiète pas, je ne te ferai aucune fleur, pas de quartier !",
                    "it": "Andarci piano con uno come te? Scordatelo!"
                },
                "shootingIntro0": {
                    "en": "Sẵn sàng để sút bóng",
                    "es": "¡A jugar! Prepárate para lanzar.",
                    "de": "Auf geht's! Mach dich schussbereit",
                    "pt": "Vamos jogar! Prepara-te para rematar!",
                    "hu": "Játsszunk! Készülj fel a lövésre!",
                    "ro": "Să jucăm! Fii gata să șutezi!",
                    "pl": "Zagrajmy! Przygotuj się do strzału",
                    "bg": "Да играем! Приготви се да стреляш",
                    "ru": "Сыграем! Приготовься забивать",
                    "nl": "Klaar om te schieten?",
                    "cs": "Pojďme hrát! Připrav se.",
                    "no": "La oss spille! Gjør deg klar til å skyte.",
                    "sv": "Nu kör vi! Gör dig redo att skjuta.",
                    "da": "Lad os spille! Gør dig klar til at skyde",
                    "ar": "هيا نلعب! استعد للتسديد",
                    "tr": "Hadi oynayalım! Topa vurmaya hazırlan.",
                    "fr": "C'est parti ! Prépare-toi à tirer.",
                    "it": "Dài, giochiamo! Preparati a tirare!"
                },
                "shootingIntro1": {
                    "en": "Vòng 2 - Tiếp tục phát huy!",
                    "es": "Segunda ronda - ¡Sigue así!\n",
                    "de": "Zweite Runde – weiter so!",
                    "pt": "Segunda ronda! Continua assim!",
                    "hu": "Második kör: csak így tovább!",
                    "ro": "Runda a doua - Ține-o tot așa!",
                    "pl": "Druga runda – Do boju!",
                    "bg": "Втори кръг - продължавай!",
                    "ru": "Второй раунд — так держать!",
                    "nl": "Tweede ronde. Ga zo door!",
                    "cs": "Druhé kolo – jen tak dál!",
                    "no": "Andre runde – Fortsett slik!",
                    "sv": "Andra omgången – Jobba på!",
                    "da": "Anden runde - Bliv ved!",
                    "ar": "الجولة الثانية - واصل اللعب الجميل!",
                    "tr": "İkinci Tur - Aynen devam!",
                    "fr": "Second tour - continue comme ça !",
                    "it": "Secondo girone. Vai così!"
                },
                "shootingIntro2": {
                    "en": "Tứ kết - Thẳng tiến nào!",
                    "es": "Cuartos de final - ¡Vamos allá!",
                    "de": "Viertelfinale – das packst du!",
                    "pt": "Quartos de final. Vamos a isto!",
                    "hu": "Negyeddöntő: vágjunk bele!",
                    "ro": "Sfert de finală - Hai s-o facem!",
                    "pl": "Ćwierćfinał – Do dzieła!",
                    "bg": "Четвъртфинал - да го направим!",
                    "ru": "Четвертьфинал — вперед!",
                    "nl": "De kwartfinale! Je kunt het!",
                    "cs": "Čtvrtfinále – jdeme na to!",
                    "no": "Kvartfinale – Kom igjen!",
                    "sv": "Kvartsfinal – Vi fixar det!",
                    "da": "Kvartfinale - Lad os vise dem!",
                    "ar": "ربع النهائي - لنفز بالبطولة!",
                    "tr": "Çeyrek Final - Hadi bakalım!",
                    "fr": "Quart de finale - ce n'est pas le moment de se relâcher !",
                    "it": "Quarti di finale. Diamoci sotto!"
                },
                "shootingIntro3": {
                    "en": "Bán kết - Gần tới đích rồi!",
                    "es": "Semifinal - ¡Tú puedes!",
                    "de": "Halbfinale – du kannst es schaffen!",
                    "pt": "Semifinais. Tu consegues!",
                    "hu": "Elődöntő: gyerünk, menni fog!",
                    "ro": "Semifinală - Vei reuși!",
                    "pl": "Półfinał – Dasz radę!",
                    "bg": "Полуфинал - можеш го!",
                    "ru": "Полуфинал — ты справишься!",
                    "nl": "De halve finale! Ga zo door!",
                    "cs": "Semifinále – to dáš!",
                    "no": "Semifinale – Dette klarer du!",
                    "sv": "Semifinal – Du kan göra det!",
                    "da": "Semifinale - Du kan gøre det!",
                    "ar": "نصف النهائي - النصر على بُعد خطوة!",
                    "tr": "Yarı Final - Başarabilirsin!",
                    "fr": "Demi-finale - tout est possible !",
                    "it": "Semifinale. Ce la puoi fare!"
                },
                "shootingIntro4": {
                    "en": "Chung kết - Đích đến cuối cùng!",
                    "es": "Final - ¡Es el momento!",
                    "de": "Finale – der große Moment!",
                    "pt": "Final. Este é o momento!",
                    "hu": "Döntő: sikerülni fog!",
                    "ro": "Finală - Asta e!",
                    "pl": "Finał – O to chodzi!",
                    "bg": "Финалът - това е!",
                    "ru": "Финал — почти у цели!",
                    "nl": "De finale! Doe je best!",
                    "cs": "Finále – to je ono!",
                    "no": "Finalen – Kampen over alle kamper!",
                    "sv": "Final – Nu gäller det!",
                    "da": "Finalen - Så er det nu!",
                    "ar": "النهائي - المباراة الحاسمة!",
                    "tr": "Final - Büyük an geldi!",
                    "fr": "Finale - c'est le moment que tu attendais !",
                    "it": "Finale. Incredibile!"
                },
                "goalkeepingIntro": {
                    "en": "Đổi sân!",
                    "es": "¡Hora de meter gol!",
                    "de": "Zeit, ins Tor zu gehen!",
                    "pt": "Chegou a hora de marcar um golo!",
                    "hu": "Ideje beállni a kapuba!",
                    "ro": "E timpul să treci în poartă.",
                    "pl": "Czas strzelić gola!",
                    "bg": "Време е да пазиш вратата!",
                    "ru": "Пора на ворота!",
                    "nl": "Tijd om in het doel te staan!",
                    "cs": "Čas dát gól!",
                    "no": "På tide å stå i mål!",
                    "sv": "Dags att stå i mål!",
                    "da": "Tid til at stå på mål!",
                    "ar": "حان وقت حراسة المرمى!",
                    "tr": "Hedefi tutturma zamanı!",
                    "fr": "C'est le moment de rejoindre ta cage !",
                    "it": "Ora di andare a rete!"
                },
                "striker0": {
                    "en": "DARWIN",
                    "es": "DARWIN",
                    "de": "DARWIN",
                    "pt": "DARWIN",
                    "hu": "DARWIN",
                    "ro": "DARWIN",
                    "pl": "DARWIN",
                    "bg": "ДАРВИН",
                    "ru": "ДАРВИН",
                    "nl": "DARWIN",
                    "cs": "DARWIN",
                    "no": "DARWIN",
                    "sv": "DARWIN",
                    "da": "DARWIN",
                    "ar": "داروين",
                    "tr": "DARWIN",
                    "fr": "DARWIN",
                    "it": "DARWIN"
                },
                "striker1": {
                    "en": "WONDER WOMAN",
                    "es": "WONDER WOMAN",
                    "de": "WONDER WOMAN",
                    "pt": "WONDER WOMAN",
                    "hu": "WONDER WOMAN",
                    "ro": "WONDER WOMAN",
                    "pl": "WONDER WOMAN",
                    "bg": "УОНДЪР УОМЪН",
                    "ru": "ВАНДЕР ВУМЭН",
                    "nl": "WONDER WOMAN",
                    "cs": "WONDER WOMAN",
                    "no": "WONDER WOMAN",
                    "sv": "WONDER WOMAN",
                    "da": "WONDER WOMAN",
                    "ar": "ووندر وومان",
                    "tr": "WONDER WOMAN",
                    "fr": "WONDER WOMAN",
                    "it": "WONDER WOMAN"
                },
                "striker2": {
                    "en": "ONION",
                    "es": "CEBOLLETA",
                    "de": "LAUCH",
                    "pt": "CEBOLINHA",
                    "hu": "HAGYMA",
                    "ro": "CEAPĂ",
                    "pl": "SZCZYPIOR",
                    "bg": "ЛУКИ",
                    "ru": "ЛУК",
                    "nl": "UITJE",
                    "cs": "CIBULE",
                    "no": "LØKEN",
                    "sv": "ONION",
                    "da": "LØGDRENG",
                    "ar": "أنيون",
                    "tr": "SOĞAN",
                    "fr": "OIGNON",
                    "it": "ONION"
                },
                "striker3": {
                    "en": "MAO MAO",
                    "es": "MAO MAO",
                    "de": "MAO MAO",
                    "pt": "MAO MAO",
                    "hu": "MAO MAO",
                    "ro": "MAO MAO",
                    "pl": "MAO MAO",
                    "bg": "МАО МАО",
                    "ru": "МАО-МАО",
                    "nl": "MAO MAO",
                    "cs": "MAO MAO",
                    "no": "MAO MAO",
                    "sv": "MAO MAO",
                    "da": "MAO MAO",
                    "ar": "ماو ماو",
                    "tr": "MAO MAO",
                    "fr": "MAO MAO",
                    "it": "MAO MAO"
                },
                "striker4": {
                    "en": "ICE BEAR",
                    "es": "POLAR",
                    "de": "EISBÄR",
                    "pt": "POLAR",
                    "hu": "JEGES",
                    "ro": "URSUL POLAR",
                    "pl": "LODOMIR",
                    "bg": "БЕЛИЯ",
                    "ru": "БЕЛЫЙ",
                    "nl": "IJSBEER",
                    "cs": "LEĎÁK",
                    "no": "ISBJØRN",
                    "sv": "ISBJÖRN",
                    "da": "ISBJØRN",
                    "ar": "قطبي",
                    "tr": "KUTUP AYISI",
                    "fr": "POLAIRE",
                    "it": "ORSO BIANCO"
                },
                "striker5": {
                    "en": "CYBORG",
                    "es": "CYBORG",
                    "de": "CYBORG",
                    "pt": "CYBORG",
                    "hu": "CYBORG",
                    "ro": "CYBORG",
                    "pl": "CYBORG",
                    "bg": "КИБОРГ",
                    "ru": "КИБОРГ",
                    "nl": "CYBORG",
                    "cs": "KYBORG",
                    "no": "CYBORG",
                    "sv": "CYBORG",
                    "da": "CYBORG",
                    "ar": "سايبورغ",
                    "tr": "CYBORG",
                    "fr": "CYBORG",
                    "it": "CYBORG"
                },
                "goalie0": {
                    "en": "GUMBALL",
                    "es": "GUMBALL",
                    "de": "GUMBALL",
                    "pt": "GUMBALL",
                    "hu": "GUMBALL",
                    "ro": "GUMBALL",
                    "pl": "GUMBALL",
                    "bg": "ГЪМБОЛ",
                    "ru": "ГАМБОЛ",
                    "nl": "GUMBALL",
                    "cs": "GUMBALL",
                    "no": "GUMBALL",
                    "sv": "GUMBALL",
                    "da": "GUMBALL",
                    "ar": "غامبول",
                    "tr": "GUMBALL",
                    "fr": "GUMBALL",
                    "it": "GUMBALL"
                },
                "goalie1": {
                    "en": "BUMBLEBEE",
                    "es": "BUMBLEBEE",
                    "de": "BUMBLEBEE",
                    "pt": "BUMBLEBEE",
                    "hu": "BUMBLEBEE",
                    "ro": "BUMBLEBEE",
                    "pl": "BUMBLEBEE",
                    "bg": "БЪМБЪЛБИЙ",
                    "ru": "БАМБЛБИ",
                    "nl": "BUMBLEBEE",
                    "cs": "BUMBLEBEE",
                    "no": "BUMBLEBEE",
                    "sv": "BUMBLEBEE",
                    "da": "HUMLEBI",
                    "ar": "بامبلبي",
                    "tr": "BUMBLEBEE",
                    "fr": "BUMBLEBEE",
                    "it": "BUMBLEBEE"
                },
                "goalie2": {
                    "en": "APPLE",
                    "es": "MANZANA",
                    "de": "APFEL",
                    "pt": "MAÇÃ",
                    "hu": "ALMA",
                    "ro": "MĂR",
                    "pl": "JABŁKO",
                    "bg": "ЯБЪЛКО",
                    "ru": "ЯБЛОКО",
                    "nl": "APPEL",
                    "cs": "JABLKO",
                    "no": "EPLET",
                    "sv": "APPLE",
                    "da": "APPLE",
                    "ar": "آبل",
                    "tr": "ELMA",
                    "fr": "POMME",
                    "it": "APPLE"
                },
                "goalie3": {
                    "en": "ADORABAT",
                    "es": "ADORABAT",
                    "de": "ADORABAT",
                    "pt": "ADORABAT",
                    "hu": "ÉDINEVÉR",
                    "ro": "ADORABAT",
                    "pl": "NIETOPERKA",
                    "bg": "АДОРАБАТ",
                    "ru": "СИМПАМЫШЬ",
                    "nl": "VLEDERMUIS",
                    "cs": "NĚŽNOPÝRKA",
                    "no": "ADORABAT",
                    "sv": "ADORABAT",
                    "da": "FLAGERPUS",
                    "ar": "أدورابات",
                    "tr": "ADORABAT",
                    "fr": "CHAUVE-SOURIRE",
                    "it": "ADORABAT"
                },
                "goalie4": {
                    "en": "GRIZZLY",
                    "es": "PARDO",
                    "de": "GRIZZLY",
                    "pt": "PARDO",
                    "hu": "GRIZZ",
                    "ro": "GRIZZLY",
                    "pl": "GRIZZ",
                    "bg": "ГРИЗЛИ",
                    "ru": "ГРИЗЛИ",
                    "nl": "GRIZZ",
                    "cs": "GRIZZLY",
                    "no": "GRIZZLY",
                    "sv": "GRIZZLY",
                    "da": "GRIZZLY",
                    "ar": "شهاب",
                    "tr": "BOZ AYI",
                    "fr": "GRIZZLY",
                    "it": "GRIZZLY"
                },
                "goalie5": {
                    "en": "RAVEN",
                    "es": "RAVEN",
                    "de": "RAVEN",
                    "pt": "RAVEN",
                    "hu": "RAVEN",
                    "ro": "RAVEN",
                    "pl": "RAVEN",
                    "bg": "РЕЙВЪН",
                    "ru": "РЭЙВЕН",
                    "nl": "RAVEN",
                    "cs": "RAVEN",
                    "no": "RAVEN",
                    "sv": "RAVEN",
                    "da": "RAVEN",
                    "ar": "رايفن",
                    "tr": "RAVEN",
                    "fr": "RAVEN",
                    "it": "CORVINA"
                },
                "strikers": {
                    "en": "ĐỘI TRƯỞNG",
                    "es": "CAPITANES",
                    "de": "KAPITÄNE",
                    "pt": "CAPITÃES",
                    "hu": "CSAPATKAPITÁNYOK",
                    "ro": "CĂPITANI",
                    "pl": "KAPITANOWIE",
                    "bg": "КАПИТАНИ",
                    "ru": "КАПИТАНЫ",
                    "nl": "AANVOERDERS",
                    "cs": "KAPITÁNI",
                    "no": "KAPTEINER",
                    "sv": "KAPTENER",
                    "da": "ANFØRERE",
                    "ar": "قادة الفرق",
                    "tr": "KAPTANLAR",
                    "fr": "CAPITAINES",
                    "it": "CAPITANI"
                },
                "goalkeepers": {
                    "en": "THỦ MÔN",
                    "es": "PORTEROS",
                    "de": "TORWARTE",
                    "pt": "GUARDA-REDES",
                    "hu": "KAPUSOK",
                    "ro": "PORTARI",
                    "pl": "BRAMKARZE",
                    "bg": "ВРАТАРИ",
                    "ru": "ВРАТАРИ",
                    "nl": "KEEPERS",
                    "cs": "BRANKÁŘI",
                    "no": "MÅLVAKTER",
                    "sv": "MÅLVAKTER",
                    "da": "MÅLVOGTERE",
                    "ar": "الحراس",
                    "tr": "KALECİLER",
                    "fr": "GARDIENS DE BUT",
                    "it": "PORTIERI"
                },
                "round0": {
                    "en": "VÒNG 1",
                    "es": "PRIMERA RONDA",
                    "de": "ERSTE RUNDE",
                    "pt": "PRIMEIRA RONDA",
                    "hu": "ELSŐ KÖR",
                    "ro": "RUNDA ÎNTÂI",
                    "pl": "PIERWSZA RUNDA",
                    "bg": "ПЪРВИ КРЪГ",
                    "ru": "ПЕРВЫЙ РАУНД",
                    "nl": "EERSTE RONDE",
                    "cs": "PRVNÍ KOLO",
                    "no": "FØRSTE RUNDE",
                    "sv": "FÖRSTA OMGÅNGEN",
                    "da": "FØRSTE RUNDE",
                    "ar": "الجولة الأولى",
                    "tr": "İLK TUR",
                    "fr": "PREMIER TOUR",
                    "it": "PRIMO GIRONE"
                },
                "round1": {
                    "en": "VÒNG 2",
                    "es": "SEGUNDA RONDA",
                    "de": "ZWEITE RUNDE",
                    "pt": "SEGUNDA RONDA",
                    "hu": "MÁSODIK KÖR",
                    "ro": "RUNDA A DOUA",
                    "pl": "DRUGA RUNDA",
                    "bg": "ВТОРИ КРЪГ",
                    "ru": "ВТОРОЙ РАУНД",
                    "nl": "TWEEDE RONDE",
                    "cs": "DRUHÉ KOLO",
                    "no": "ANDRE RUNDE",
                    "sv": "ANDRA OMGÅNGEN",
                    "da": "ANDEN RUNDE",
                    "ar": "الجولة الثانية",
                    "tr": "İKİNCİ TUR",
                    "fr": "SECOND TOUR",
                    "it": "SECONDO GIRONE"
                },
                "round2": {
                    "en": "TỨ KẾT",
                    "es": "CUARTOS DE FINAL",
                    "de": "VIERTELFINALE",
                    "pt": "QUARTOS DE FINAL",
                    "hu": "NEGYEDDÖNTŐ",
                    "ro": "SFERT DE FINALĂ",
                    "pl": "ĆWIERĆFINAŁ",
                    "bg": "ЧЕТВЪРТФИНАЛ",
                    "ru": "ЧЕТВЕРТЬФИНАЛ",
                    "nl": "KWARTFINALE",
                    "cs": "ČTVRTFINÁLE",
                    "no": "KVARTFINALE",
                    "sv": "KVARTSFINAL",
                    "da": "KVARTFINALE",
                    "ar": "ربع النهائي",
                    "tr": "ÇEYREK FİNAL",
                    "fr": "QUART DE FINALE",
                    "it": "QUARTO DI FINALE"
                },
                "round3": {
                    "en": "BÁN KẾT",
                    "es": "SEMIFINAL",
                    "de": "HALBFINALE",
                    "pt": "SEMIFINAIS",
                    "hu": "ELŐDÖNTŐ",
                    "ro": "SEMIFINALĂ",
                    "pl": "PÓŁFINAŁ",
                    "bg": "ПОЛУФИНАЛ",
                    "ru": "ПОЛУФИНАЛ",
                    "nl": "HALVE FINALE",
                    "cs": "SEMIFINÁLE",
                    "no": "SEMIFINALE",
                    "sv": "SEMIFINAL",
                    "da": "SEMIFINALE",
                    "ar": "نصف النهائي",
                    "tr": "YARI FİNAL",
                    "fr": "DEMI-FINALE",
                    "it": "SEMIFINALE"
                },
                "round4": {
                    "en": "CHUNG KẾT",
                    "es": "FINAL",
                    "de": "FINALE",
                    "pt": "FINAL",
                    "hu": "DÖNTŐ",
                    "ro": "FINALĂ",
                    "pl": "FINAŁ",
                    "bg": "ФИНАЛ",
                    "ru": "ФИНАЛ",
                    "nl": "FINALE",
                    "cs": "FINÁLE",
                    "no": "FINALE",
                    "sv": "FINAL",
                    "da": "FINALE",
                    "ar": "النهائي",
                    "tr": "FİNAL",
                    "fr": "FINALE",
                    "it": "FINALE"
                },
                "tournamentProgress": {
                    "en": "Lịch thi đấu",
                    "es": "Progreso en el torneo",
                    "de": "Turnierfortschritt",
                    "pt": "Progresso no torneio",
                    "hu": "Bajnokság állása",
                    "ro": "Progresul turneului",
                    "pl": "Etap turnieju",
                    "bg": "Развитие на турнира",
                    "ru": "Прогресс турнира",
                    "nl": "Voortgang toernooi",
                    "cs": "Postup v turnaji",
                    "no": "Turneringsfremgang",
                    "sv": "Turneringen",
                    "da": "Turneringsrunde",
                    "ar": "مشوار البطولة",
                    "tr": "Turnuva İlerlemesi",
                    "fr": "Progression dans le tournoi",
                    "it": "Avanzamento torneo"
                },
                "selectTeam": {
                    "en": "Chọn 1 đội trưởng và 1 thủ môn để thi đấu...",
                    "es": "Escoge capitán y portero para crear tu equipo…",
                    "de": "Wähle einen Kapitän und einen Torwart aus, um dein Team aufzustellen ...",
                    "pt": "Escolhe um capitão e um guarda-redes para criares a tua equipa...",
                    "hu": "Válassz csapatkapitányt és kapust, hogy összeálljon a csapatod…",
                    "ro": "Alege un căpitan și un portar pentru a-ți crea echipa...",
                    "pl": "Wybierz kapitana i bramkarza, aby stworzyć drużynę...",
                    "bg": "Избери капитан и вратар за своя отбор...",
                    "ru": "Выбери капитана и вратаря, чтобы создать команду...",
                    "nl": "Stel je team samen: kies een aanvoerder en een keeper",
                    "cs": "Vyber si kapitána a brankáře a vytvoř si svůj tým…",
                    "no": "Velg en kaptein og en målvakt for å sette sammen laget ditt …",
                    "sv": "Välj en kapten och en målvakt till ditt lag…",
                    "da": "Vælg en anfører og en målvogter for at sætte dit hold...",
                    "ar": "اختر قائد الفريق وحارس المرمى وشكل فريقك...",
                    "tr": "Takımını oluşturmak için bir kaptan ve bir kaleci seç.",
                    "fr": "Choisis un capitaine et un gardien de but pour composer ton équipe...",
                    "it": "Scegli un capitano e un portiere e forma la tua squadra."
                },
                "howToShoot": {
                    "en": "Cách sút bóng",
                    "es": "Cómo chutar",
                    "de": "SO WIRD GESCHOSSEN",
                    "pt": "Como rematar",
                    "hu": "Így kell lőni",
                    "ro": "Cum se trage",
                    "pl": "STRZAŁY",
                    "bg": "КАК ДА СТРЕЛЯШ",
                    "ru": "КАК СДЕЛАТЬ УДАР",
                    "nl": "Zo kun je schieten",
                    "cs": "Jak střílet",
                    "no": "Slik skyter du",
                    "sv": "Skjut så här",
                    "da": "Sådan skyder du",
                    "ar": "كيفية التسديد",
                    "tr": "Nasıl şut çekilir?",
                    "fr": "Comment tirer",
                    "it": "Come tirare"
                },
                "howToSave": {
                    "en": "Cách làm thủ môn",
                    "es": "Cómo parar",
                    "de": "SO WIRD GEHALTEN",
                    "pt": "Como defender",
                    "hu": "Így kell védeni",
                    "ro": "Cum se salvează",
                    "pl": "OBRONA",
                    "bg": "КАК ДА СПАСЯВАШ",
                    "ru": "КАК ОТБИТЬ МЯЧ",
                    "nl": "Zo kun je keepen",
                    "cs": "Jak chytat",
                    "no": "Slik redder du",
                    "sv": "Rädda så här",
                    "da": "Sådan redder du",
                    "ar": "كيفية التصدي",
                    "tr": "Nasıl top kurtarılır?",
                    "fr": "Comment faire un arrêt",
                    "it": "Come parare"
                },
                "goal0": {
                    "en": "QUÁ ĐẸP!",
                    "es": "¡GOLAZO!",
                    "de": "SUPERTOR!",
                    "pt": "GRANDE GOLO!",
                    "hu": "MESÉS GÓL!",
                    "ro": "UN GOL EXCELENT!",
                    "pl": "ŚWIETNA BRAMKA!",
                    "bg": "СТРАХОТЕН ГОЛ!",
                    "ru": "ОТЛИЧНЫЙ ГОЛ!",
                    "nl": "MOOI DOELPUNT!",
                    "cs": "PARÁDNÍ GÓL!",
                    "no": "FLOTT MÅL!",
                    "sv": "VILKET MÅL!",
                    "da": "FÆNOMENALT MÅL!",
                    "ar": "هدف رائع!",
                    "tr": "HARİKA GOL!",
                    "fr": "QUEL BUT !",
                    "it": "GRAN GOL!"
                },
                "goal1": {
                    "en": "SIÊU PHẨM!",
                    "es": "¡MENUDO TIRO!",
                    "de": "SUPERSCHUSS!",
                    "pt": "ÓTIMO REMATE!",
                    "hu": "SZÉP LÖVÉS!",
                    "ro": "SUPER ȘUT!",
                    "pl": "ZNAKOMITY STRZAŁ!",
                    "bg": "НЕВЕРОЯТЕН ИЗСТРЕЛ!",
                    "ru": "ПРЕКРАСНЫЙ УДАР!",
                    "nl": "SUPERSCHOT!",
                    "cs": "SKVĚLÝ VÝSTŘEL!",
                    "no": "KJEMPESKUDD!",
                    "sv": "SUPERSKOTT!",
                    "da": "SUPERSKUD!",
                    "ar": "تسديدة صاروخية!",
                    "tr": "SÜPER ŞUT!",
                    "fr": "SUPER TIR !",
                    "it": "CHE BORDATA!"
                },
                "goal2": {
                    "en": "HAY TUYỆT!",
                    "es": "¡ALUCINANTE!",
                    "de": "FANTASTISCH!",
                    "pt": "FANTÁSTICO!",
                    "hu": "FANTASZTIKUS!",
                    "ro": "FANTASTIC!",
                    "pl": "FANTASTYCZNIE!",
                    "bg": "ФАНТАСТИЧНО!",
                    "ru": "ФАНТАСТИКА!",
                    "nl": "FANTASTISCH!",
                    "cs": "ÚŽASNÉ!",
                    "no": "FANTASTISK!",
                    "sv": "FANTASTISKT!",
                    "da": "FANTASTISK!",
                    "ar": "روعة!",
                    "tr": "MUHTEŞEM!",
                    "fr": "FANTASTIQUE !",
                    "it": "FANTASTICO!"
                },
                "goal3": {
                    "en": "CHÍNH XÁC!",
                    "es": "¡BUEN DISPARO!",
                    "de": "SAUBERER SCHUSS!",
                    "pt": "BOM REMATE!",
                    "hu": "NAGYSZERŰ!",
                    "ro": "UN ȘUT GROZAV!",
                    "pl": "ŁADNY STRZAŁ!",
                    "bg": "ДОБЪР ИЗСТРЕЛ!",
                    "ru": "ПРЕВОСХОДНЫЙ УДАР!",
                    "nl": "PRIMA SCHOT!",
                    "cs": "PĚKNÁ STŘELA!",
                    "no": "FINT SKUDD!",
                    "sv": "BRA SKOTT!",
                    "da": "FLOT SKUD!",
                    "ar": "تسديدة مذهلة!",
                    "tr": "GÜZEL VURUŞTU!",
                    "fr": "BELLE FRAPPE !",
                    "it": "BEL TIRO!"
                },
                "goal4": {
                    "en": "QUÁ KHÓ!",
                    "es": "¡MUY BUENO!",
                    "de": "GUT GEMACHT!",
                    "pt": "BOA!",
                    "hu": "CSODÁS LÖVÉS!",
                    "ro": "BRAVO!",
                    "pl": "NIEŹLE!",
                    "bg": "ДОБРЕ!",
                    "ru": "ВЕЛИКОЛЕПНО!",
                    "nl": "MOOI!",
                    "cs": "SUPER!",
                    "no": "BRA!",
                    "sv": "HÖJDARE!",
                    "da": "GODT GÅET!",
                    "ar": "محاولة جيدة!",
                    "tr": "İYİYDİ!",
                    "fr": "BRAVO !",
                    "it": "BELLA GIOCATA!"
                },
                "row3": {
                    "en": "3 QUẢ LIÊN TIẾP!",
                    "es": "¡RACHA DE 3!",
                    "de": "3 NACHEINANDER!",
                    "pt": "3 SEGUIDOS!",
                    "hu": "ZSINÓRBAN 3!",
                    "ro": "3 LA RÂND!",
                    "pl": "3 Z RZĘDU!",
                    "bg": "3 ПОСЛЕДОВАТЕЛНИ!",
                    "ru": "3 ПОДРЯД!",
                    "nl": "3 OP RIJ!",
                    "cs": "POTŘETÍ V ŘADĚ!",
                    "no": "3 PÅ RAD!",
                    "sv": "3 PÅ RAKEN!",
                    "da": "3 I TRÆK!",
                    "ar": "3 على التوالي!",
                    "tr": "ÜST ÜSTE 3 TANE!",
                    "fr": "3 D'AFFILÉE !",
                    "it": "3 DI SEGUITO!"
                },
                "row6": {
                    "en": "6 QUẢ LIÊN TIẾP!",
                    "es": "¡RACHA DE 6!",
                    "de": "6 NACHEINANDER!",
                    "pt": "6 SEGUIDOS!",
                    "hu": "ZSINÓRBAN 6!",
                    "ro": "6 LA RÂND!",
                    "pl": "6 Z RZĘDU!",
                    "bg": "6 ПОСЛЕДОВАТЕЛНИ!",
                    "ru": "6 ПОДРЯД!",
                    "nl": "6 OP RIJ!",
                    "cs": "POŠESTÉ V ŘADĚ!",
                    "no": "6 PÅ RAD!",
                    "sv": "6 PÅ RAKEN!",
                    "da": "6 I TRÆK!",
                    "ar": "6 على التوالي!",
                    "tr": "ÜST ÜSTE 6 TANE!",
                    "fr": "6 D'AFFILÉE !",
                    "it": "6 DI SEGUITO!"
                },
                "row9": {
                    "en": "9 QUẢ LIÊN TIẾP!",
                    "es": "¡RACHA DE 9!",
                    "de": "9 NACHEINANDER!",
                    "pt": "9 SEGUIDOS!",
                    "hu": "ZSINÓRBAN 9!",
                    "ro": "9 LA RÂND!",
                    "pl": "9 Z RZĘDU!",
                    "bg": "9 ПОСЛЕДОВАТЕЛНИ!",
                    "ru": "9 ПОДРЯД!",
                    "nl": "9 OP RIJ!",
                    "cs": "PODEVÁTÉ V ŘADĚ!",
                    "no": "9 PÅ RAD!",
                    "sv": "9 PÅ RAKEN!",
                    "da": "9 I TRÆK!",
                    "ar": "9 على التوالي!",
                    "tr": "ÜST ÜSTE 9 TANE!",
                    "fr": "9 D'AFFILÉE !",
                    "it": "9 DI SEGUITO!"
                },
                "row12": {
                    "en": "12 QUẢ LIÊN TIẾP!",
                    "es": "¡RACHA DE 12!",
                    "de": "12 NACHEINANDER!",
                    "pt": "12 SEGUIDOS!",
                    "hu": "ZSINÓRBAN 12!",
                    "ro": "12 LA RÂND!",
                    "pl": "12 Z RZĘDU!",
                    "bg": "12 ПОСЛЕДОВАТЕЛНИ!",
                    "ru": "12 ПОДРЯД!",
                    "nl": "12 OP RIJ!",
                    "cs": "PODVANÁCTÉ V ŘADĚ!",
                    "no": "12 PÅ RAD!",
                    "sv": "12 PÅ RAKEN!",
                    "da": "12 I TRÆK!",
                    "ar": "12 على التوالي!",
                    "tr": "ÜST ÜSTE 12 TANE!",
                    "fr": "12 D'AFFILÉE !",
                    "it": "12 DI SEGUITO!"
                },
                "row15": {
                    "en": "15 QUẢ LIÊN TIẾP!",
                    "es": "¡RACHA DE 15!",
                    "de": "15 NACHEINANDER!",
                    "pt": "15 SEGUIDOS!",
                    "hu": "ZSINÓRBAN 15!",
                    "ro": "15 LA RÂND!",
                    "pl": "15 Z RZĘDU!",
                    "bg": "15 ПОСЛЕДОВАТЕЛНИ!",
                    "ru": "15 ПОДРЯД!",
                    "nl": "15 OP RIJ!",
                    "cs": "POPATNÁCTÉ V ŘADĚ!",
                    "no": "15 PÅ RAD!",
                    "sv": "15 PÅ RAKEN!",
                    "da": "15 I TRÆK!",
                    "ar": "15 على التوالي!",
                    "tr": "ÜST ÜSTE 15 TANE!",
                    "fr": "15 D'AFFILÉE !",
                    "it": "15 DI SEGUITO!"
                },
                "row18": {
                    "en": "18 QUẢ LIÊN TIẾP!",
                    "es": "¡RACHA DE 18!",
                    "de": "18 NACHEINANDER!",
                    "pt": "18 SEGUIDOS!",
                    "hu": "ZSINÓRBAN 18!",
                    "ro": "18 LA RÂND!",
                    "pl": "18 Z RZĘDU!",
                    "bg": "18 ПОСЛЕДОВАТЕЛНИ!",
                    "ru": "18 ПОДРЯД!",
                    "nl": "18 OP RIJ!",
                    "cs": "POOSMNÁCTÉ V ŘADĚ!",
                    "no": "18 PÅ RAD!",
                    "sv": "18 PÅ RAKEN!",
                    "da": "18 I TRÆK!",
                    "ar": "18 على التوالي!",
                    "tr": "ÜST ÜSTE 18 TANE!",
                    "fr": "18 D'AFFILÉE !",
                    "it": "18 DI SEGUITO!"
                },
                "row21": {
                    "en": "21 QUẢ LIÊN TIẾP!",
                    "es": "¡RACHA DE 21!",
                    "de": "21 NACHEINANDER!",
                    "pt": "21 SEGUIDOS!",
                    "hu": "ZSINÓRBAN 21!",
                    "ro": "21 LA RÂND!",
                    "pl": "21 Z RZĘDU!",
                    "bg": "21 ПОСЛЕДОВАТЕЛНИ!",
                    "ru": "21 ПОДРЯД!",
                    "nl": "21 OP RIJ!",
                    "cs": "POJEDENADVACÁTÉ V ŘADĚ!",
                    "no": "21 PÅ RAD!",
                    "sv": "21 PÅ RAKEN!",
                    "da": "21 I TRÆK!",
                    "ar": "21 على التوالي!",
                    "tr": "ÜST ÜSTE 21 TANE!",
                    "fr": "21 D'AFFILÉE !",
                    "it": "21 DI SEGUITO!"
                },
                "bonusTime": {
                    "en": "THÊM THỜI GIAN!",
                    "es": "TIEMPO EXTRA",
                    "de": "BONUSZEIT!",
                    "pt": "BÓNUS DE TEMPO!",
                    "hu": "BÓNUSZIDŐ",
                    "ro": "BONUS TIMP!",
                    "pl": "PREMIA!",
                    "bg": "БОНУС ВРЕМЕ!",
                    "ru": "БОНУСНОЕ ВРЕМЯ!",
                    "nl": "EXTRA TIJD!",
                    "cs": "BONUSOVÝ ČAS!",
                    "no": "BONUSTID!",
                    "sv": "BONUSTID!",
                    "da": "BONUSTID!",
                    "ar": "وقت المكافأة!",
                    "tr": "BONUS SÜRE!",
                    "fr": "BONUS DE TEMPS !",
                    "it": "TEMPO EXTRA!"
                },
                "shotSaved": {
                    "en": "KHÔNG VÀO!",
                    "es": "¡DISPARO PARADO!",
                    "de": "SCHUSS GEHALTEN!",
                    "pt": "REMATE DEFENDIDO!",
                    "hu": "KIVÉDVE!",
                    "ro": "ȘUT SALVAT!",
                    "pl": "STRZAŁ OBRONIONY!",
                    "bg": "СПАСЕН УДАР!",
                    "ru": "МЯЧ ОТБИТ!",
                    "nl": "BAL TEGENGEHOUDEN!",
                    "cs": "STŘELA ZACHYCENA!",
                    "no": "SKUDD REDDET!",
                    "sv": "SKOTT RÄDDAT!",
                    "da": "SKUD REDDET!",
                    "ar": "تم التصدي للتسديدة!",
                    "tr": "ŞUT KURTARILDI!",
                    "fr": "BALLON SAUVÉ !",
                    "it": "TIRO PARATO!"
                },
                "save0": {
                    "en": "QUÁ HAY!",
                    "es": "¡VAYA PARADA!",
                    "de": "SUPER GEMACHT!",
                    "pt": "GRANDE DEFESA!",
                    "hu": "MESÉS VÉDÉS!",
                    "ro": "SALVAT EXCELENT!",
                    "pl": "ŚWIETNA OBRONA!",
                    "bg": "СТРАХОТНО СПАСЯВАНЕ!",
                    "ru": "ОТЛИЧНО!",
                    "nl": "MOOIE REDDING!",
                    "cs": "SKVĚLÝ ZÁKROK!",
                    "no": "FLOTT REDNING!",
                    "sv": "VILKEN RÄDDNING!",
                    "da": "FANTASTISK REDNING!",
                    "ar": "تصدي رائع!",
                    "tr": "HARİKA KURTARIŞ!",
                    "fr": "MAGNIFIQUE ARRÊT !",
                    "it": "GRAN BELLA PARATA!"
                },
                "save1": {
                    "en": "XUẤT SẮC!",
                    "es": "¡BUENOS REFLEJOS!",
                    "de": "KLASSE REAKTIONSZEIT!",
                    "pt": "BONS REFLEXOS!",
                    "hu": "BÁMULATOS REFLEXEK!",
                    "ro": "REACȚII BUNE!",
                    "pl": "DOBRY REFLEKS!",
                    "bg": "ДОБРИ РЕФЛЕКСИ!",
                    "ru": "ПРЕКРАСНАЯ РЕАКЦИЯ!",
                    "nl": "WAT EEN REACTIE!",
                    "cs": "DOBRÉ REAKCE!",
                    "no": "GOD REAKSJONSEVNE!",
                    "sv": "GRYMMA REFLEXER!",
                    "da": "GOD REAKTIONSEVNE!",
                    "ar": "ردة فعل جيدة!",
                    "tr": "REFLEKSLER SAĞLAM!",
                    "fr": "BONS RÉFLEXES !",
                    "it": "OTTIMI RIFLESSI!"
                },
                "save2": {
                    "en": "XUẤT THẦN!",
                    "es": "¡PARADÓN!",
                    "de": "SUPERB GEHALTEN!",
                    "pt": "INCRÍVEL DEFESA!",
                    "hu": "BRAVÚROS VÉDÉS!",
                    "ro": "SALVAT SUPERB!",
                    "pl": "ZNAKOMITA OBRONA!",
                    "bg": "НЕВЕРОЯТНО СПАСЯВАНЕ!",
                    "ru": "НЕВЕРОЯТНО!",
                    "nl": "PERFECT GEDAAN!",
                    "cs": "ÚŽASNÝ ZÁKROK!",
                    "no": "FANTASTISK REDNING!",
                    "sv": "SUPERRÄDDNING!",
                    "da": "SUPERREDNING",
                    "ar": "تصدي مذهل!",
                    "tr": "MÜKEMMEL KURTARIŞ!",
                    "fr": "SUPERBE ARRÊT !",
                    "it": "PARATONA!"
                },
                "save3": {
                    "en": "TUYỆT VỜI!",
                    "es": "¡MAGNÍFICO!",
                    "de": "HERVORRAGEND!",
                    "pt": "INCRÍVEL!",
                    "hu": "MESTERI VETŐDÉS!",
                    "ro": "EXCEPȚIONAL!",
                    "pl": "WSPANIALE!",
                    "bg": "ИЗКЛЮЧИТЕЛНО!",
                    "ru": "ЗАМЕЧАТЕЛЬНО!",
                    "nl": "UITSTEKEND!",
                    "cs": "PARÁDNÍ!",
                    "no": "FREMRAGENDE!",
                    "sv": "OTROLIGT!",
                    "da": "FREMRAGENDE!",
                    "ar": "أسطوري!",
                    "tr": "MÜTHİŞ!",
                    "fr": "EXCEPTIONNEL !",
                    "it": "GRANDIOSO!"
                },
                "save4": {
                    "en": "VI DIỆU!",
                    "es": "¡EXCELENTE!",
                    "de": "EXZELLENT!",
                    "pt": "EXCELENTE!",
                    "hu": "KIVÁLÓ!",
                    "ro": "EXCELENT!",
                    "pl": "DOSKONALE!",
                    "bg": "ОТЛИЧНО!",
                    "ru": "ПРЕВОСХОДНО!",
                    "nl": "GEWELDIG!",
                    "cs": "SKVĚLÉ!",
                    "no": "STRÅLENDE!",
                    "sv": "UTMÄRKT!",
                    "da": "FÆNOMENALT!",
                    "ar": "ممتاز!",
                    "tr": "EFSANE!",
                    "fr": "EXCELLENT !",
                    "it": "ECCELLENTE!"
                },
                "paused": {
                    "en": "Dừng chơi",
                    "es": "En pausa",
                    "de": "PAUSE",
                    "pt": "EM PAUSA",
                    "hu": "Szünet",
                    "ro": "Joc suspendat",
                    "pl": "PAUZA",
                    "bg": "ПАУЗА",
                    "ru": "ПАУЗА",
                    "nl": "GEPAUZEERD",
                    "cs": "Přerušeno",
                    "no": "PAUSE",
                    "sv": "Pausat",
                    "da": "På pause",
                    "ar": "إيقاف مؤقت",
                    "tr": "Duraklatıldı",
                    "fr": "En pause",
                    "it": "In pausa"
                },
                "producedFor": {
                    "en": "",
                    "es": "Producido para",
                    "de": "Produziert für",
                    "pt": "Produzido para",
                    "hu": "Megbízó:",
                    "ro": "Produs pentru",
                    "pl": "Wyprodukowano dla",
                    "bg": "Създадена за:",
                    "ru": "Специально для",
                    "nl": "Gemaakt voor",
                    "cs": "Vytvořeno pro",
                    "no": "Produsert for",
                    "sv": "Producerat för",
                    "da": "Produceret for",
                    "ar": "تم الإنتاج لصالح",
                    "tr": "Yaptıran:",
                    "fr": "Produit pour",
                    "it": "Prodotto per"
                },
                "createdBy": {
                    "en": "",
                    "es": "Creado por",
                    "de": "Erstellt von",
                    "pt": "Criado por",
                    "hu": "Alkotó:",
                    "ro": "Creat de",
                    "pl": "Twórcy",
                    "bg": "Създадена от:",
                    "ru": "Разработчик",
                    "nl": "Gemaakt door",
                    "cs": "Vytvořil",
                    "no": "Laget av",
                    "sv": "Skapat av",
                    "da": "Skabt af",
                    "ar": "تصميم",
                    "tr": "Hazırlayan:",
                    "fr": "Créé par",
                    "it": "Ideato da"
                },
                "goalkeepingTime": {
                    "en": "GOALKEEPING TIME!",
                    "es": "¡TURNO DE PORTERÍA!",
                    "de": "TORWARTZEIT!",
                    "pt": "HORA DE DEFENDER!",
                    "hu": "MOST TE VÉDESZ!",
                    "ro": "E TIMPUL PORTARULUI!",
                    "pl": "CZAS POBAWIĆ SIĘ W BRAMKARZA!",
                    "bg": "ВРЕМЕ Е ДА ЗАСТАНЕШ НА ВРАТАТА!",
                    "ru": "ПОРА НА ВОРОТА!",
                    "nl": "TIJD OM TE KEEPEN!",
                    "cs": "ČAS POSTAVIT SE DO BRANKY!",
                    "no": "MÅLVAKTTID!",
                    "sv": "DAGS ATT STÅ I MÅL!",
                    "da": "MÅLMANDSTID!",
                    "ar": "حان وقت الحراسة!",
                    "tr": "KALECİLİK ZAMANI!",
                    "fr": "À TOI D'ARRÊTER LES TIRS !",
                    "it": "TURNO IN PORTA!"
                },
                "result2": {
                    "en": "YOU WIN!",
                    "es": "¡GANASTE!",
                    "de": "GEWONNEN!",
                    "pt": "GANHASTE!",
                    "hu": "GYŐZTÉL!",
                    "ro": "AI CÂŞTIGAT!",
                    "pl": "WYGRYWASZ!",
                    "bg": "ТИ СПЕЧЕЛИ!",
                    "ru": "ПОБЕДА!",
                    "nl": "GEWONNEN!",
                    "cs": "VYHRÁVÁŠ!",
                    "no": "DU VANT!",
                    "sv": "DU VANN!",
                    "da": "DU VANDT!",
                    "ar": "لقد فزت!",
                    "tr": "KAZANDIN!",
                    "fr": "TU AS GAGNÉ !",
                    "it": "HAI VINTO!"
                },
                "result0": {
                    "en": "YOU LOSE!",
                    "es": "¡HAS PERDIDO!",
                    "de": "VERLOREN!",
                    "pt": "PERDESTE!",
                    "hu": "VESZTETTÉL!",
                    "ro": "AI PIERDUT!",
                    "pl": "PRZEGRYWASZ!",
                    "bg": "ТИ ИЗГУБИ!",
                    "ru": "ПОРАЖЕНИЕ!",
                    "nl": "JE HEBT VERLOREN!",
                    "cs": "PROHRÁVÁŠ!",
                    "no": "DU TAPTE!",
                    "sv": "DU FÖRLORADE!",
                    "da": "DU TABTE!",
                    "ar": "لقد خسرت!",
                    "tr": "KAYBETTİN!",
                    "fr": "TU AS PERDU !",
                    "it": "HAI PERSO!"
                },
                "result1": {
                    "en": "IT'S A DRAW!",
                    "es": "¡EMPATE!",
                    "de": "UNENTSCHIEDEN!",
                    "pt": "EMPATE!",
                    "hu": "DÖNTETLEN!",
                    "ro": "E REMIZĂ!",
                    "pl": "REMIS!",
                    "bg": "РАВЕНСТВО!",
                    "ru": "НИЧЬЯ!",
                    "nl": "GELIJKSPEL!",
                    "cs": "REMÍZA!",
                    "no": "DET BLE UAVGJORT!",
                    "sv": "OAVGJORT!",
                    "da": "DET BLEV UAFGJORT!",
                    "ar": "تعادل!",
                    "tr": "BERABERE!",
                    "fr": "ÉGALITÉ !",
                    "it": "SIETE PARI!"
                }
            };
        }
        return JSONData;
    })();
    Utils.JSONData = JSONData;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var SaveDataHandler = (function () {
        function SaveDataHandler(_saveDataId) {
            this.dataGroupNum = 2;
            this.saveDataId = _saveDataId;
            var testKey = 'test';
            var storage;
            var lc = false;
            try  {
                storage = window.localStorage;
                lc = true;
            } catch (e) {
                console.log("local storage denied");
                lc = false;
                this.canStore = false;
            }
            if(lc) {
                try  {
                    storage.setItem(testKey, '1');
                    storage.removeItem(testKey);
                    this.canStore = true;
                } catch (error) {
                    this.canStore = false;
                }
            }
            this.clearData();
            this.setInitialData();
        }
        SaveDataHandler.prototype.isFirstRun = function () {
            var temp = true;
            for(var i = 0; i < this.aLevelStore.length; i++) {
                if(this.aLevelStore[i] > 0) {
                    temp = false;
                    break;
                }
            }
            return temp;
        };
        SaveDataHandler.prototype.clearData = function () {
            this.aLevelStore = new Array();
            for(var i = 0; i < 5; i++) {
                this.aLevelStore.push(0);
            }
        };
        SaveDataHandler.prototype.resetData = function () {
            this.clearData();
            this.saveData();
        };
        SaveDataHandler.prototype.setInitialData = function () {
            if(this.canStore && typeof (Storage) !== "undefined") {
                if(localStorage.getItem(this.saveDataId) != null && localStorage.getItem(this.saveDataId) != "") {
                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");
                    for(var a in this.aLevelStore) {
                        this.aLevelStore[a] = parseInt(this.aLevelStore[a]);
                    }
                } else {
                    this.saveData();
                }
            }
        };
        SaveDataHandler.prototype.setData = function (_heroId, _enemyDefeated) {
            this.aLevelStore[_heroId] = _enemyDefeated;
        };
        SaveDataHandler.prototype.getCurEnemy = function (_heroId) {
            return this.aLevelStore[_heroId];
        };
        SaveDataHandler.prototype.saveData = function () {
            if(this.canStore && typeof (Storage) !== "undefined") {
                var str = "";
                for(var i = 0; i < this.aLevelStore.length; i++) {
                    str += this.aLevelStore[i];
                    if(i < this.aLevelStore.length - 1) {
                        str += ",";
                    }
                }
                localStorage.setItem(this.saveDataId, str);
            }
        };
        return SaveDataHandler;
    })();
    Utils.SaveDataHandler = SaveDataHandler;    
})(Utils || (Utils = {}));
var requestAnimFrame = (function () {
    return window.requestAnimationFrame || (window).webkitRequestAnimationFrame || (window).mozRequestAnimationFrame || (window).oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60, new Date().getTime());
    };
})();
var previousTime;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var minWidth = 750;
var minHeight = 450;
var maxWidth = 850;
var maxHeight = 550;
var maxSafeWidth = 1050;
var maxSafeHeight = 660;
var canvasX;
var canvasY;
var canvasScale;
var div = document.getElementById('canvas-wrapper');
var sound;
var music;
var audioType = 0;
var muted = false;
var splashTimer = 0;
var assetLib;
var preAssetLib;
var isMobile = false;
var gameState = "loading";
var curLang = "";
var isBugBrowser = false;
var isIE10 = false;
var delta;
var radian = Math.PI / 180;
var ios9FirstTouch = false;
var hasFocus = true;
var saveDataHandler = new Utils.SaveDataHandler("footballfaceoffv3");
var isRotated = false;
if(navigator.userAgent.match(/MSIE\s([\d]+)/)) {
    isIE10 = true;
}
var deviceAgent = navigator.userAgent.toLowerCase();
if(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) {
    isMobile = true;
    if(deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent)) {
        isBugBrowser = true;
    }
}
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas();
window.onresize = function () {
    setTimeout(function () {
        resizeCanvas();
    }, 1);
};
function visibleResume() {
    if(!hasFocus) {
        if(userInput) {
            userInput.checkKeyFocus();
        }
        if(!muted && gameState != "pause" && gameState != "splash" && gameState != "loading") {
            Howler.mute(false);
            playMusic();
        }
    }
    hasFocus = true;
}
function visiblePause() {
    hasFocus = false;
    Howler.mute(true);
    music.pause();
}
(window).onpageshow = function () {
    if(!hasFocus) {
        if(userInput) {
            userInput.checkKeyFocus();
        }
        if(!muted && gameState != "pause" && gameState != "splash" && gameState != "loading") {
            Howler.mute(false);
            playMusic();
        }
    }
    hasFocus = true;
};
(window).onpagehide = function () {
    hasFocus = false;
    Howler.mute(true);
    music.pause();
};
function playMusic() {
    if(!music.playing()) {
        music.play();
    }
}
window.addEventListener("load", function () {
    setTimeout(function () {
        resizeCanvas();
    }, 0);
    window.addEventListener("orientationchange", function () {
        setTimeout(function () {
            resizeCanvas();
        }, 500);
        setTimeout(function () {
            resizeCanvas();
        }, 2000);
    }, false);
});
function isStock() {
    var matches = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return matches && parseFloat(matches[1]) < 537;
}
var ua = navigator.userAgent;
var isSharpStock = ((/SHL24|SH-01F/i).test(ua)) && isStock();
var isXperiaAStock = ((/SO-04E/i).test(ua)) && isStock();
var isFujitsuStock = ((/F-01F/i).test(ua)) && isStock();
if(!isIE10 && !isSharpStock && !isXperiaAStock && !isFujitsuStock && (typeof (window).AudioContext !== 'undefined' || typeof (window).webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1)) {
    audioType = 1;
    sound = new Howl({
        src: [
            'audio/sound.mp3'
        ],
        sprite: {
            locked: [
                0, 
                1000
            ],
            powerBarUp: [
                4000, 
                1200
            ],
            click: [
                5500, 
                600
            ],
            powerBarFull: [
                6500, 
                1700
            ],
            bonusTime: [
                8500, 
                1600
            ],
            matchWin: [
                10500, 
                2500
            ],
            matchLose: [
                15000, 
                2000
            ],
            chooseChar: [
                18000, 
                600
            ],
            progress: [
                20000, 
                1000
            ],
            nextMatch: [
                18000, 
                3000
            ],
            startWhistle: [
                21500, 
                600
            ],
            endWhistle: [
                22500, 
                2000
            ],
            kick0: [
                24500, 
                1000
            ],
            kick1: [
                26000, 
                1000
            ],
            kick2: [
                27500, 
                1000
            ],
            bounce0: [
                29000, 
                300
            ],
            bounce1: [
                29500, 
                300
            ],
            bounce2: [
                30000, 
                300
            ],
            bounce3: [
                30500, 
                300
            ],
            bounce4: [
                31000, 
                300
            ],
            missShotWipe: [
                31500, 
                800
            ],
            hitBar: [
                32500, 
                800
            ],
            powerKick: [
                33500, 
                2000
            ],
            crowdBad0: [
                36000, 
                3200
            ],
            crowdGood0: [
                39500, 
                4600
            ],
            crowdBad1: [
                44500, 
                1950
            ],
            crowdGood1: [
                46500, 
                5500
            ],
            crowdGood2: [
                52500, 
                5500
            ],
            saveLand: [
                58500, 
                800
            ],
            saveFly0: [
                59500, 
                1000
            ],
            saveFly1: [
                61000, 
                1500
            ],
            saveJump0: [
                63000, 
                400
            ],
            saveJump1: [
                63500, 
                400
            ],
            saveJump2: [
                64000, 
                400
            ],
            changeEnds: [
                64500, 
                2200
            ],
            heroScore: [
                67000, 
                1500
            ],
            enemyScore: [
                69000, 
                1500
            ],
            heroSave: [
                71000, 
                1500
            ],
            enemySave: [
                73000, 
                1500
            ],
            congrats: [
                75500, 
                5000
            ]
        }
    });
    music = new Howl({
        src: [
            'audio/music.mp3'
        ],
        volume: 0,
        loop: true,
        html5: false,
        mobileAutoEnable: true
    });
} else {
    audioType = 0;
}
var panel;
var background;
var totalScore = 0;
var levelScore = 0;
var levelNum = 0;
var panelFrame;
var oLogoData = {
};
var oLogoBut;
var musicTween;
var oImageIds = {
};
var prevGameState;
var aFireworks;
var ball;
var touchState;
var touchX;
var touchY;
var curTouches;
var crowd;
var heroId;
var hud;
var oGameData;
var flashRate = .02;
var enemyHud;
var enemyBall;
var enemyCrowd;
var heroGoal;
var shakeY = 0;
var shakeTween;
var fireworkTimer;
var fireworkNum;
var enemyKick;
var enemySave;
var aStrikerHeadIconOffsets = new Array({
    x: 35,
    y: 10
}, {
    x: 40,
    y: 0
}, {
    x: 20,
    y: -5
}, {
    x: 30,
    y: 0
}, {
    x: 25,
    y: 5
}, {
    x: 25,
    y: 5
});
var aGoalieHeadIconOffsets = new Array({
    x: -20,
    y: 6
}, {
    x: -17,
    y: -10
}, {
    x: -25,
    y: -10
}, {
    x: -22,
    y: 0
}, {
    x: -20,
    y: 5
}, {
    x: -26,
    y: 3
});
var wipe;
var prePauseGameState;
var hasSaved = false;
var textInc = 0;
var firstRun = true;
var showingTut = false;
var allowUserSaveSwipe = false;
var firstFail = false;
var userStrikerId;
var userGoalieId;
var enemyStrikerId;
var enemyGoalieId;
var aStrikerData = new Array({
    id: 0,
    offsetX: -140,
    offsetY: -10
}, {
    id: 1,
    offsetX: -130,
    offsetY: -20
}, {
    id: 2,
    offsetX: -105,
    offsetY: -40
}, {
    id: 3,
    offsetX: -115,
    offsetY: -30
}, {
    id: 4,
    offsetX: -130,
    offsetY: -10
}, {
    id: 5,
    offsetX: -110,
    offsetY: -10
});
var aGoalieData = new Array({
    id: 0,
    offsetX: 130,
    offsetY: -20
}, {
    id: 1,
    offsetX: 130,
    offsetY: -70
}, {
    id: 2,
    offsetX: 120,
    offsetY: -30
}, {
    id: 3,
    offsetX: 130,
    offsetY: -30
}, {
    id: 4,
    offsetX: 120,
    offsetY: -10
}, {
    id: 5,
    offsetX: 110,
    offsetY: -20
});
var aEnemyData = new Array();
var curProgress = 0;
var hasEndGameLink = false;
var externalUrl = "";
var goalTouchIsOn = false;
function loadLang(_lang) {
    curLang = _lang;
    loadPreAssets();
}
function initSplash() {
    if(curLang == "ar") {
        document.body.style.direction = "rtl";
    }
    gameState = "splash";
    if(audioType == 1 && !muted) {
        playMusic();
        if(!hasFocus) {
            music.pause();
        }
    }
    wipe = new Elements.Wipe();
    initStartScreen();
    resizeCanvas();
}
function initOutroScreen() {
    gameState = "outro";
    if(audioType == 1) {
        music.fade(music.volume(), .5, 500);
    }
    var oPlayBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -60, 
            -44
        ],
        align: [
            1, 
            1
        ],
        id: oImageIds.nextBut,
        idOver: oImageIds.nextButOver,
        flash: true
    };
    userInput.addHitArea("playOnOutroScreen", butEventHandler, null, "image", oPlayBut);
    var aButs = new Array(oPlayBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    resetGameData();
    panel = new Elements.Panel(aButs);
    panel.outroTween();
    previousTime = new Date().getTime();
    updateOutroScreenEvent();
}
function initStartScreen() {
    gameState = "start";
    userInput.removeHitArea("moreGames");
    firstRun = saveDataHandler.isFirstRun();
    if(audioType == 1) {
        music.fade(music.volume(), .25, 500);
    }
    var oPlayBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -90, 
            -90
        ],
        align: [
            1, 
            1
        ],
        id: oImageIds.playBut,
        idOver: oImageIds.playButOver,
        flash: true
    };
    var oCreditsBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            42, 
            41
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.infoBut,
        idOver: oImageIds.infoButOver
    };
    userInput.addHitArea("playOnStartScreen", butEventHandler, null, "image", oPlayBut);
    userInput.addHitArea("credits", butEventHandler, null, "image", oCreditsBut);
    var aButs = new Array(oPlayBut, oCreditsBut);
    if(hasEndGameLink) {
        var oExtBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                115, 
                -92
            ],
            align: [
                0, 
                1
            ],
            id: oImageIds.extBut,
            idOver: oImageIds.extButOver
        };
        userInput.addHitArea("extFromStart", butEventHandler, null, "image", oExtBut);
        aButs.push(oExtBut);
    }
    addMuteBut(aButs);
    aFireworks = new Array();
    resetGameData();
    curProgress = 0;
    panel = new Elements.Panel(aButs);
    panel.startScreenTween();
    previousTime = new Date().getTime();
    updateStartScreenEvent();
}
function resetGameData() {
    oGameData = {
        timesUp: false,
        curTime: 4500,
        heroScore: 0,
        enemyScore: 0,
        power: 0,
        swipeTime: 0,
        ballInPlay: false,
        goalsInRow: 0
    };
}
function addMuteBut(_aButs) {
    if(audioType == 1) {
        var mb = oImageIds.muteBut0;
        var mbOver = oImageIds.muteBut0Over;
        if(muted) {
            mb = oImageIds.muteBut1;
            mbOver = oImageIds.muteBut1Over;
        }
        var oMuteBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -42, 
                41
            ],
            align: [
                1, 
                0
            ],
            id: mb,
            idOver: mbOver
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
        for(var i = 0; i < _aButs.length; i++) {
            if(_aButs[i].id == oImageIds.muteBut0 || _aButs[i].id == oImageIds.muteBut1) {
                return;
            }
        }
        _aButs.push(oMuteBut);
    }
}
function initCreditsScreen() {
    gameState = "credits";
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            42, 
            -44
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver,
        flash: false
    };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oBackBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateCreditsScreenEvent();
}
function initCharSelectScreen() {
    gameState = "charSelect";
    if(audioType == 1) {
        music.fade(music.volume(), .25, 500);
    }
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            42, 
            -44
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver,
        flash: false
    };
    userInput.addHitArea("backFromCharSelect", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oBackBut);
    for(var i = 0; i < 6; i++) {
        var oCharBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                (i % 3) * 100 - 280, 
                82 + Math.floor(i / 3) * 100
            ],
            align: [
                .5, 
                .14
            ],
            scale: .9,
            id: oImageIds["strikerCharBut" + i],
            idOver: oImageIds["strikerCharBut" + i + "Over"],
            flash: true,
            freeFloat: true
        };
        userInput.addHitArea("chooseChar", butEventHandler, {
            id: i
        }, "image", oCharBut);
        aButs.push(oCharBut);
    }
    for(var i = 0; i < 6; i++) {
        var oCharBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                (i % 3) * 100 + 68, 
                82 + Math.floor(i / 3) * 100
            ],
            align: [
                .5, 
                .14
            ],
            scale: .9,
            id: oImageIds["goalieCharBut" + i],
            idOver: oImageIds["goalieCharBut" + i + "Over"],
            flash: true
        };
        userInput.addHitArea("chooseChar", butEventHandler, {
            id: i + 6
        }, "image", oCharBut);
        aButs.push(oCharBut);
    }
    aFireworks = new Array();
    userStrikerId = null;
    userGoalieId = null;
    addMuteBut(aButs);
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateCharSelectScreenEvent();
}
function initProgressScreen() {
    gameState = "progress";
    playSound("progress");
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            42, 
            -44
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver,
        flash: false
    };
    userInput.addHitArea("backFromProgress", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oBackBut);
    for(var i = 0; i < 5; i++) {
        if(i == curProgress) {
            var oPlayBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    i * 140 - 274, 
                    i * 50 - 100
                ],
                align: [
                    .5, 
                    .5
                ],
                scale: 1,
                id: oImageIds.nextBut,
                idOver: oImageIds.nextButOver,
                flash: true,
                freeFloat: true
            };
            userInput.addHitArea("playFromProgress", butEventHandler, {
                id: true
            }, "image", oPlayBut);
        } else if(i < curProgress) {
            var oPlayBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    i * 140 - 274, 
                    i * 50 - 100
                ],
                align: [
                    .5, 
                    .5
                ],
                scale: 1,
                id: oImageIds.tickBut,
                idOver: oImageIds.tickBut,
                freeFloat: true
            };
            userInput.addHitArea("playFromProgress", butEventHandler, {
                id: false
            }, "image", oPlayBut);
        } else {
            var oPlayBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    i * 140 - 274, 
                    i * 50 - 100
                ],
                align: [
                    .5, 
                    .5
                ],
                scale: 1,
                id: oImageIds.lockedBut,
                idOver: oImageIds.lockedBut,
                freeFloat: true
            };
            userInput.addHitArea("playFromProgress", butEventHandler, {
                id: false
            }, "image", oPlayBut);
        }
        aButs.push(oPlayBut);
    }
    aFireworks = new Array();
    addMuteBut(aButs);
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateProgressScreenEvent();
}
function initShootingIntro() {
    gameState = "shootingIntro";
    playSound("crowdGood" + Math.floor(Math.random() * 3));
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            42, 
            -44
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver,
        flash: false
    };
    userInput.addHitArea("backFromShootingIntro", butEventHandler, null, "image", oBackBut);
    var oPlayBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0, 
            15
        ],
        align: [
            .5, 
            .77
        ],
        scale: 1,
        id: oImageIds.nextBut,
        idOver: oImageIds.nextButOver,
        flash: true,
        freeFloat: true
    };
    userInput.addHitArea("playFromShootingIntro", butEventHandler, null, "image", oPlayBut);
    var aButs = new Array(oBackBut, oPlayBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    resetGameData();
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateShootingIntroEvent();
}
function initGoalkeepingIntro() {
    gameState = "goalkeepingIntro";
    playSound("crowdGood" + Math.floor(Math.random() * 3));
    userInput.removeHitArea("pause");
    userInput.removeHitArea("shootingGameTouch");
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            42, 
            -44
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver,
        flash: false
    };
    userInput.addHitArea("backFromGoalkeepingingIntro", butEventHandler, null, "image", oBackBut);
    var oPlayBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0, 
            15
        ],
        align: [
            .5, 
            .77
        ],
        scale: 1,
        id: oImageIds.nextBut,
        idOver: oImageIds.nextButOver,
        flash: true,
        freeFloat: true
    };
    userInput.addHitArea("playFromGoalkeepingingIntro", butEventHandler, null, "image", oPlayBut);
    var aButs = new Array(oBackBut, oPlayBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateGoalkeepingIntroEvent();
}
function initGoalkeepingComplete() {
    gameState = "goalkeepingComplete";
    if(audioType == 1) {
        music.fade(music.volume(), .25, 500);
    }
    userInput.removeHitArea("pause");
    userInput.removeHitArea("goalkeepingGameTouch");
    var aButs = new Array();
    if(curProgress == 4 && oGameData.heroScore > oGameData.enemyScore) {
    } else {
        var oBackBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                42, 
                -44
            ],
            align: [
                0, 
                1
            ],
            id: oImageIds.backBut,
            idOver: oImageIds.backButOver,
            flash: false
        };
        userInput.addHitArea("backFromGoalkeepingingComplete", butEventHandler, null, "image", oBackBut);
        aButs.push(oBackBut);
    }
    if(oGameData.heroScore > oGameData.enemyScore) {
        playSound("matchWin");
        playSound("crowdGood" + Math.floor(Math.random() * 3));
        var oPlayBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                0, 
                40
            ],
            align: [
                .5, 
                .72
            ],
            scale: 1,
            id: oImageIds.nextBut,
            idOver: oImageIds.nextButOver,
            flash: true,
            freeFloat: true
        };
        userInput.addHitArea("playFromGoalkeepingingComplete", butEventHandler, {
            id: 0
        }, "image", oPlayBut);
    } else {
        playSound("matchLose");
        playSound("crowdBad" + Math.floor(Math.random() * 2));
        var oPlayBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                0, 
                40
            ],
            align: [
                .5, 
                .72
            ],
            scale: 1,
            id: oImageIds.replayBut,
            idOver: oImageIds.replayButOver,
            flash: true,
            freeFloat: true
        };
        userInput.addHitArea("playFromGoalkeepingingComplete", butEventHandler, {
            id: 1
        }, "image", oPlayBut);
    }
    aButs.push(oPlayBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateGoalkeepingComplete();
}
function initVersusScreen(_resetState) {
    if (typeof _resetState === "undefined") { _resetState = 3; }
    gameState = "versusScreen";
    if(_resetState == 2) {
        if(levelNum < 4) {
            levelNum++;
        }
    }
    if(levelNum > 0 || this.evolved) {
        if(audioType == 1) {
            music.fade(music.volume(), .25, 500);
        }
    } else {
        if(audioType == 1) {
            music.fade(music.volume(), 0, 10);
        }
    }
    var oPlayBut;
    var aButs = new Array();
    if(_resetState == 0 || _resetState == 1) {
        oPlayBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -90, 
                -75
            ],
            align: [
                1, 
                1
            ],
            id: oImageIds.replayBut,
            idOver: oImageIds.replayButOver,
            flash: true
        };
        userInput.addHitArea("playOnVersusScreen", butEventHandler, null, "image", oPlayBut);
        aButs.push(oPlayBut);
    } else if(levelNum > 0 || panel.evolved) {
        oPlayBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -90, 
                -75
            ],
            align: [
                1, 
                1
            ],
            id: oImageIds.playBut,
            idOver: oImageIds.playButOver,
            flash: true
        };
        userInput.addHitArea("playOnVersusScreen", butEventHandler, null, "image", oPlayBut);
        aButs.push(oPlayBut);
    }
    panel = new Elements.Panel(aButs);
    if(_resetState == 0 || _resetState == 1) {
        panel.evolved = true;
    }
    panel.resetState = _resetState;
    if(levelNum > 0 || panel.evolved) {
        var oBackBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                60, 
                -44
            ],
            align: [
                0, 
                1
            ],
            id: oImageIds.backBut,
            idOver: oImageIds.backButOver,
            flash: false
        };
        userInput.addHitArea("backFromVersusScreen", butEventHandler, null, "image", oBackBut);
        aButs.push(oBackBut);
    }
    addMuteBut(aButs);
    aFireworks = new Array();
    resetGameData();
    if(levelNum == 0 && !panel.evolved) {
        panel.startEvolveTween();
    } else {
        panel.startTween1();
    }
    previousTime = new Date().getTime();
    updateVersusScreenEvent();
}
function addVersusButs() {
    var oPlayBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -90, 
            -75
        ],
        align: [
            1, 
            1
        ],
        id: oImageIds.playBut,
        idOver: oImageIds.playButOver,
        flash: true
    };
    userInput.addHitArea("playOnVersusScreen", butEventHandler, null, "image", oPlayBut);
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            60, 
            -44
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver,
        flash: false
    };
    userInput.addHitArea("backFromVersusScreen", butEventHandler, null, "image", oBackBut);
    panel.aButs.push(oPlayBut, oBackBut);
    panel.posY = 500;
    TweenLite.to(panel, .5, {
        posY: 0,
        ease: "Back.easeOut"
    });
}
function initShooting() {
    playSound("startWhistle");
    gameState = "shooting";
    if(audioType == 1) {
        music.fade(music.volume(), .40, 1000);
    }
    var aButs = new Array();
    addMuteBut(aButs);
    if(firstRun) {
        var oTutDoneBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -90, 
                -90
            ],
            align: [
                1, 
                1
            ],
            id: oImageIds.playBut,
            idOver: oImageIds.playButOver,
            flash: true
        };
        userInput.addHitArea("playOnTut0Screen", butEventHandler, null, "image", oTutDoneBut);
        aButs.push(oTutDoneBut);
        showingTut = true;
    } else {
        var oPauseBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -110, 
                41
            ],
            align: [
                1, 
                0
            ],
            id: oImageIds.pauseBut,
            idOver: oImageIds.pauseButOver
        };
        userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
        aButs.push(oPauseBut);
        userInput.addHitArea("shootingGameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                65, 
                canvas.width, 
                canvas.height
            ]
        }, false);
        userInput.addHitArea("shootingGameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width - 140, 
                65
            ]
        }, false);
        showingTut = false;
    }
    enemyGoalieId = aEnemyData[curProgress].goalieId;
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    touchState = 0;
    curTouches = 0;
    oGameData.curTime = 4500;
    oGameData.ballInPlay = false;
    oGameData.timesUp = false;
    oGameData.goalsInRow = 0;
    crowd = new Elements.Crowd();
    hud = new Elements.Hud();
    enemySave = new Elements["EnemySave" + enemyGoalieId](assetLib.getData("enemySave" + enemyGoalieId));
    aFireworks = new Array();
    ball = new Elements.Ball();
    previousTime = new Date().getTime();
    updateShootingEvent();
}
function blockUI(_block) {
    if(_block) {
        userInput.removeHitArea("pause");
        userInput.removeHitArea("mute");
    } else {
        var oPauseBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -110, 
                41
            ],
            align: [
                1, 
                0
            ],
            id: oImageIds.pauseBut,
            idOver: oImageIds.pauseButOver
        };
        userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
        addMuteBut(panel.aButs);
    }
}
function initGoalkeeping() {
    gameState = "goalkeeping";
    playSound("startWhistle");
    if(audioType == 1) {
        music.fade(music.volume(), .40, 1000);
    }
    var aButs = new Array();
    addMuteBut(aButs);
    if(firstRun) {
        var oTutDoneBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -90, 
                -90
            ],
            align: [
                1, 
                1
            ],
            id: oImageIds.playBut,
            idOver: oImageIds.playButOver,
            flash: true
        };
        userInput.addHitArea("playOnTut1Screen", butEventHandler, null, "image", oTutDoneBut);
        aButs.push(oTutDoneBut);
        showingTut = true;
    } else {
        var oPauseBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -110, 
                41
            ],
            align: [
                1, 
                0
            ],
            id: oImageIds.pauseBut,
            idOver: oImageIds.pauseButOver
        };
        userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
        userInput.addHitArea("goalkeepingGameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                65, 
                canvas.width, 
                canvas.height
            ]
        }, false);
        userInput.addHitArea("goalkeepingGameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width - 140, 
                65
            ]
        }, false);
        aButs.push(oPauseBut);
        showingTut = false;
    }
    enemyStrikerId = aEnemyData[curProgress].strikerId;
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    touchState = 0;
    enemyKick = new Elements.EnemyKick(assetLib.getData("enemyKick" + enemyStrikerId));
    enemyCrowd = new Elements.EnemyCrowd();
    enemyHud = new Elements.EnemyHud();
    heroGoal = new Elements["HeroGoal" + userGoalieId](assetLib.getData("heroGoal" + userGoalieId));
    oGameData.curTime = 4500;
    oGameData.ballInPlay = false;
    oGameData.timesUp = false;
    aFireworks = new Array();
    enemyBall = new Elements.EnemyBall();
    previousTime = new Date().getTime();
    updateGoalkeepingEvent();
}
function initQuitConfirm() {
    gameState = "quitConfirm";
    var oTickBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -85, 
            -150
        ],
        align: [
            .5, 
            1
        ],
        id: oImageIds.tickConfirmBut,
        idOver: oImageIds.tickConfirmButOver
    };
    var oCancelBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            85, 
            -150
        ],
        align: [
            .5, 
            1
        ],
        id: oImageIds.quitBut,
        idOver: oImageIds.quitButOver
    };
    userInput.addHitArea("quitFromQuitConfirm", butEventHandler, {
        gameState: gameState
    }, "image", oTickBut);
    userInput.addHitArea("cancelFromQuitConfirm", butEventHandler, {
        gameState: gameState
    }, "image", oCancelBut);
    var aButs = new Array(oTickBut, oCancelBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateQuitConfirmEvent();
}
function initPause() {
    gameState = "pause";
    var oPlayBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -85, 
            0
        ],
        align: [
            .5, 
            .5
        ],
        id: oImageIds.nextBut,
        idOver: oImageIds.nextButOver
    };
    var oQuitBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            85, 
            0
        ],
        align: [
            .5, 
            .5
        ],
        id: oImageIds.quitBut,
        idOver: oImageIds.quitButOver
    };
    userInput.addHitArea("resumeGameFromPause", butEventHandler, {
        gameState: gameState
    }, "image", oPlayBut);
    userInput.addHitArea("quitGameFromPause", butEventHandler, {
        gameState: gameState
    }, "image", oQuitBut);
    var aButs = new Array(oPlayBut, oQuitBut);
    if(hasEndGameLink) {
        var oExtBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                115, 
                -92
            ],
            align: [
                0, 
                1
            ],
            id: oImageIds.extBut,
            idOver: oImageIds.extButOver
        };
        userInput.addHitArea("extFromStart", butEventHandler, null, "image", oExtBut);
        aButs.push(oExtBut);
    }
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updatePauseEvent();
}
function resumeShooting() {
    gameState = "shooting";
    var oPauseBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -110, 
            41
        ],
        align: [
            1, 
            0
        ],
        id: oImageIds.pauseBut,
        idOver: oImageIds.pauseButOver
    };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    var aButs = new Array(oPauseBut);
    addMuteBut(aButs);
    if(!oGameData.ballInPlay) {
        userInput.addHitArea("shootingGameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                65, 
                canvas.width, 
                canvas.height
            ]
        }, false);
        userInput.addHitArea("shootingGameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width - 140, 
                65
            ]
        }, false);
    }
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateShootingEvent();
}
function resumeGoalkeeping() {
    gameState = "goalkeeping";
    var oPauseBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -110, 
            41
        ],
        align: [
            1, 
            0
        ],
        id: oImageIds.pauseBut,
        idOver: oImageIds.pauseButOver
    };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    var aButs = new Array(oPauseBut);
    addMuteBut(aButs);
    if(!hasSaved) {
        userInput.addHitArea("goalkeepingGameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                65, 
                canvas.width, 
                canvas.height
            ]
        }, false);
        userInput.addHitArea("goalkeepingGameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width - 140, 
                65
            ]
        }, false);
    }
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateGoalkeepingEvent();
}
function setCurGoalTouch() {
    goalTouchIsOn = false;
    for(var i = 0; i < userInput.aHitAreas.length; i++) {
        if(userInput.aHitAreas[i].id == "goalkeepingGameTouch") {
            this.goalTouchIsOn = true;
        }
    }
}
function butEventHandler(_id, _oData) {
    if(isRotated) {
        return;
    }
    switch(_id) {
        case "langSelect":
            break;
        case "playOnIntroScreen":
            playSound("click");
            userInput.removeHitArea("playOnIntroScreen");
            wipe.trigger(initStartScreen);
            break;
        case "playOnOutroScreen":
            playSound("click");
            userInput.removeHitArea("playOnOutroScreen");
            wipe.trigger(initCharSelectScreen);
            break;
        case "credits":
            playSound("click");
            userInput.removeHitArea("playOnStartScreen");
            userInput.removeHitArea("credits");
            userInput.removeHitArea("extFromStart");
            userInput.removeHitArea("mute");
            wipe.trigger(initCreditsScreen);
            break;
        case "extFromStart":
            playSound("click");
            var open = window.open(externalUrl);
            if(open == null || typeof (open) == 'undefined') {
                location.href = externalUrl;
            }
            break;
        case "backFromCredits":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetData");
            userInput.removeHitArea("mute");
            wipe.trigger(initStartScreen);
            break;
        case "resetData":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetData");
            userInput.removeHitArea("mute");
            saveDataHandler.resetData();
            wipe.trigger(initStartScreen);
            break;
        case "playOnStartScreen":
            playSound("click");
            userInput.removeHitArea("playOnStartScreen");
            userInput.removeHitArea("extFromStart");
            userInput.removeHitArea("credits");
            userInput.removeHitArea("mute");
            wipe.trigger(initCharSelectScreen);
            break;
        case "chooseChar":
            playSound("click");
            playSound("chooseChar");
            var tempCanAdd = false;
            if(userStrikerId == null || userGoalieId == null) {
                tempCanAdd = true;
            }
            if(_oData.id < 6) {
                userStrikerId = _oData.id;
                panel.triggerStriker();
                addFirework(1, canvas.width * .3, canvas.height - 50, 3);
            } else {
                userGoalieId = _oData.id - 6;
                panel.triggerGoalie();
                addFirework(1, canvas.width * .7, canvas.height - 50, 3);
            }
            if(userStrikerId != null && userGoalieId != null && tempCanAdd) {
                var oPlayBut = {
                    oImgData: assetLib.getData("uiButs"),
                    aPos: [
                        0, 
                        -65
                    ],
                    align: [
                        .5, 
                        1
                    ],
                    id: oImageIds.nextBut,
                    idOver: oImageIds.nextButOver,
                    flash: true
                };
                userInput.addHitArea("playFromCharSelect", butEventHandler, null, "image", oPlayBut);
                panel.aButs.push(oPlayBut);
            }
            break;
        case "playFromCharSelect":
            playSound("click");
            userInput.removeHitArea("chooseChar");
            userInput.removeHitArea("playFromCharSelect");
            userInput.removeHitArea("backFromCharSelect");
            userInput.removeHitArea("mute");
            var aTempS = new Array();
            var aTempG = new Array();
            for(var i = 0; i < 6; i++) {
                if(aStrikerData[i].id != userStrikerId) {
                    aTempS.push(aStrikerData[i].id);
                }
            }
            for(var i = 0; i < 6; i++) {
                if(aGoalieData[i].id != userGoalieId) {
                    aTempG.push(aGoalieData[i].id);
                }
            }
            randomiseArray(aTempS);
            randomiseArray(aTempG);
            aEnemyData = new Array();
            for(var i = 0; i < aTempS.length; i++) {
                aEnemyData.push({
                    strikerId: aTempS[i],
                    goalieId: aTempG[i]
                });
            }
            wipe.trigger(initProgressScreen);
            break;
        case "backFromCharSelect":
            playSound("click");
            userInput.removeHitArea("chooseChar");
            userInput.removeHitArea("playFromCharSelect");
            userInput.removeHitArea("backFromCharSelect");
            userInput.removeHitArea("mute");
            wipe.trigger(initStartScreen);
            break;
        case "backFromProgress":
            playSound("click");
            userInput.removeHitArea("backFromProgress");
            userInput.removeHitArea("playFromProgress");
            userInput.removeHitArea("mute");
            wipe.trigger(initCharSelectScreen);
            break;
        case "playFromProgress":
            if(_oData.id) {
                playSound("click");
                userInput.removeHitArea("backFromProgress");
                userInput.removeHitArea("playFromProgress");
                userInput.removeHitArea("mute");
                wipe.trigger(initShootingIntro);
            } else {
                playSound("locked");
            }
            break;
        case "backFromShootingIntro":
            playSound("click");
            userInput.removeHitArea("backFromShootingIntro");
            userInput.removeHitArea("playFromShootingIntro");
            userInput.removeHitArea("mute");
            prevGameState = gameState;
            if(curProgress == 0) {
                wipe.trigger(initProgressScreen);
            } else {
                wipe.trigger(initQuitConfirm);
            }
            break;
        case "playFromShootingIntro":
            playSound("click");
            userInput.removeHitArea("backFromShootingIntro");
            userInput.removeHitArea("playFromShootingIntro");
            userInput.removeHitArea("mute");
            wipe.trigger(initShooting);
            break;
        case "playFromGoalkeepingingIntro":
            playSound("click");
            userInput.removeHitArea("playFromGoalkeepingingIntro");
            userInput.removeHitArea("backFromGoalkeepingingIntro");
            userInput.removeHitArea("mute");
            wipe.trigger(initGoalkeeping);
            break;
        case "backFromGoalkeepingingIntro":
            playSound("click");
            userInput.removeHitArea("backFromGoalkeepingingIntro");
            userInput.removeHitArea("playFromGoalkeepingingIntro");
            userInput.removeHitArea("mute");
            prevGameState = gameState;
            wipe.trigger(initQuitConfirm);
            break;
        case "playOnVersusScreen":
            playSound("click");
            userInput.removeHitArea("playOnVersusScreen");
            userInput.removeHitArea("backFromVersusScreen");
            userInput.removeHitArea("mute");
            wipe.trigger(initShooting);
            break;
        case "backFromVersusScreen":
            playSound("click");
            userInput.removeHitArea("playOnVersusScreen");
            userInput.removeHitArea("backFromVersusScreen");
            userInput.removeHitArea("mute");
            wipe.trigger(initCharSelectScreen);
            break;
        case "playOnTut0Screen":
            playSound("click");
            userInput.removeHitArea("playOnTut0Screen");
            userInput.removeHitArea("mute");
            showingTut = false;
            var oPauseBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    -110, 
                    41
                ],
                align: [
                    1, 
                    0
                ],
                id: oImageIds.pauseBut,
                idOver: oImageIds.pauseButOver
            };
            userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
            panel.aButs = new Array(oPauseBut);
            setTimeout(function () {
                userInput.addHitArea("shootingGameTouch", butEventHandler, {
                    isDraggable: true,
                    multiTouch: true
                }, "rect", {
                    aRect: [
                        0, 
                        65, 
                        canvas.width, 
                        canvas.height
                    ]
                }, false);
                userInput.addHitArea("shootingGameTouch", butEventHandler, {
                    isDraggable: true,
                    multiTouch: true
                }, "rect", {
                    aRect: [
                        0, 
                        0, 
                        canvas.width - 140, 
                        65
                    ]
                }, false);
            }, 500);
            addMuteBut(panel.aButs);
            break;
        case "playOnTut1Screen":
            playSound("click");
            userInput.removeHitArea("playOnTut1Screen");
            userInput.removeHitArea("mute");
            showingTut = false;
            firstRun = false;
            var oPauseBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    -110, 
                    41
                ],
                align: [
                    1, 
                    0
                ],
                id: oImageIds.pauseBut,
                idOver: oImageIds.pauseButOver
            };
            userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
            setTimeout(function () {
                userInput.addHitArea("goalkeepingGameTouch", butEventHandler, {
                    isDraggable: true,
                    multiTouch: true
                }, "rect", {
                    aRect: [
                        0, 
                        65, 
                        canvas.width, 
                        canvas.height
                    ]
                }, false);
                userInput.addHitArea("goalkeepingGameTouch", butEventHandler, {
                    isDraggable: true,
                    multiTouch: true
                }, "rect", {
                    aRect: [
                        0, 
                        0, 
                        canvas.width - 140, 
                        65
                    ]
                }, false);
            }, 500);
            enemyBall.startKickTween();
            panel.aButs = new Array(oPauseBut);
            addMuteBut(panel.aButs);
            break;
        case "shootingGameTouch":
            if(_oData.isDown && curTouches < 2) {
                if(touchState != 2) {
                    if(touchState == 0) {
                        ball.aTouchData = new Array();
                        touchState = 1;
                        blockUI(true);
                        oGameData.swipeTime = 0;
                    }
                    ball.aTouchData.push({
                        x: _oData.x,
                        y: _oData.y,
                        alpha: .25
                    });
                    if(ball.aTouchData.length > ball.maxSwipeLength && ball.isForwardKick()) {
                        touchState = 0;
                        blockUI(false);
                        ball.shootPrep();
                        userInput.removeHitArea("shootingGameTouch");
                    }
                }
            } else {
                touchState = 0;
                if(ball.aTouchData.length > 2 && ball.isForwardKick()) {
                    blockUI(false);
                    ball.shootPrep();
                    userInput.removeHitArea("shootingGameTouch");
                }
            }
            break;
        case "goalkeepingGameTouch":
            if(!allowUserSaveSwipe) {
                break;
            }
            if(_oData.isDown && curTouches < 2) {
                if(touchState != 2) {
                    if(touchState == 0) {
                        enemyBall.aTouchData = new Array();
                        blockUI(true);
                        touchState = 1;
                    }
                    enemyBall.aTouchData.push({
                        x: _oData.x,
                        y: _oData.y,
                        alpha: .25
                    });
                    if(enemyBall.aTouchData.length > enemyBall.maxSwipeLength) {
                        heroGoal.makeSave();
                        blockUI(false);
                        touchState = 0;
                        hasSaved = true;
                    }
                }
            } else {
                touchState = 0;
                if(enemyBall.aTouchData.length > 2) {
                    heroGoal.makeSave();
                    blockUI(false);
                    hasSaved = true;
                }
            }
            break;
        case "playFromGoalkeepingingComplete":
            playSound("click");
            userInput.removeHitArea("playFromGoalkeepingingComplete");
            userInput.removeHitArea("backFromGoalkeepingingComplete");
            if(_oData.id == 0) {
                if(curProgress + 1 >= 5) {
                    panel.removeBut(oImageIds.nextBut);
                    if(audioType == 1) {
                        music.fade(music.volume(), 0, 50);
                    }
                    playSound("crowdGood" + Math.floor(Math.random() * 3));
                    playSound("congrats");
                    wipe.trigger(function () {
                        panel.triggerCongrats();
                    });
                    setTimeout(function () {
                        wipe.trigger(initStartScreen);
                    }, 4000);
                } else {
                    wipe.trigger(initProgressScreen, function () {
                        curProgress++;
                    });
                    userInput.removeHitArea("mute");
                }
            } else {
                userInput.removeHitArea("mute");
                oGameData.heroScore = 0;
                oGameData.enemyScore = 0;
                oGameData.power = 0;
                wipe.trigger(initShooting);
            }
            break;
        case "backFromGoalkeepingingComplete":
            playSound("click");
            userInput.removeHitArea("playFromGoalkeepingingComplete");
            userInput.removeHitArea("backFromGoalkeepingingComplete");
            userInput.removeHitArea("mute");
            prevGameState = gameState;
            wipe.trigger(initQuitConfirm);
            break;
        case "retryFromEnd":
            playSound("click");
            userInput.removeHitArea("retryFromEnd");
            userInput.removeHitArea("quitFromEnd");
            levelScore = 0;
            wipe.trigger(initShooting);
            break;
        case "quitFromEnd":
            playSound("click");
            userInput.removeHitArea("retryFromEnd");
            userInput.removeHitArea("quitFromEnd");
            wipe.trigger(initStartScreen);
            break;
        case "mute":
            playSound("click");
            toggleMute();
            if(muted) {
                panel.switchBut(oImageIds.muteBut0, oImageIds.muteBut1, oImageIds.muteBut1Over);
            } else {
                panel.switchBut(oImageIds.muteBut1, oImageIds.muteBut0, oImageIds.muteBut0Over);
            }
            break;
        case "pause":
            if(wipe.wipeTween && wipe.wipeTween.isActive()) {
                break;
            }
            playSound("click");
            if(audioType == 1) {
                Howler.mute(true);
                music.pause();
            } else if(audioType == 2) {
                music.pause();
            }
            userInput.removeHitArea("pause");
            userInput.removeHitArea("shootingGameTouch");
            setCurGoalTouch();
            userInput.removeHitArea("goalkeepingGameTouch");
            userInput.removeHitArea("mute");
            prePauseGameState = gameState;
            if(prePauseGameState == "shooting") {
                ball.pause(true);
            } else {
                enemyBall.pause(true);
            }
            initPause();
            break;
        case "resumeGameFromPause":
            playSound("click");
            if(audioType == 1) {
                if(!muted) {
                    Howler.mute(false);
                    playMusic();
                }
            } else if(audioType == 2) {
                if(!muted) {
                    playMusic();
                }
            }
            userInput.removeHitArea("quitGameFromPause");
            userInput.removeHitArea("resumeGameFromPause");
            userInput.removeHitArea("mute");
            if(prePauseGameState == "shooting") {
                ball.pause(false);
                wipe.trigger(resumeShooting);
            } else {
                enemyBall.pause(false);
                wipe.trigger(resumeGoalkeeping);
            }
            break;
        case "quitGameFromPause":
            playSound("click");
            if(audioType == 1) {
                if(!muted) {
                    Howler.mute(false);
                    playMusic();
                }
            } else if(audioType == 2) {
                if(!muted) {
                    playMusic();
                }
            }
            userInput.removeHitArea("quitGameFromPause");
            userInput.removeHitArea("resumeGameFromPause");
            userInput.removeHitArea("mute");
            levelScore = 0;
            totalScore = 0;
            wipe.trigger(initStartScreen);
            break;
        case "quitFromQuitConfirm":
            playSound("click");
            userInput.removeHitArea("quitFromQuitConfirm");
            userInput.removeHitArea("cancelFromQuitConfirm");
            userInput.removeHitArea("mute");
            wipe.trigger(initStartScreen);
            break;
        case "cancelFromQuitConfirm":
            playSound("click");
            userInput.removeHitArea("quitFromQuitConfirm");
            userInput.removeHitArea("cancelFromQuitConfirm");
            userInput.removeHitArea("mute");
            if(prevGameState == "shootingIntro") {
                wipe.trigger(initShootingIntro);
            } else if(prevGameState == "goalkeepingIntro") {
                wipe.trigger(initGoalkeepingIntro);
            } else if(prevGameState == "goalkeepingComplete") {
                wipe.trigger(initGoalkeepingComplete);
            }
            break;
    }
}
function randomiseArray(_array) {
    var currentIndex = _array.length;
    var temporaryValue, randomIndex;
    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = _array[currentIndex];
        _array[currentIndex] = _array[randomIndex];
        _array[randomIndex] = temporaryValue;
    }
    return _array;
}
;
function addText(_font, _size, _width, _align, _x, _y, _str, _col) {
    if (typeof _col === "undefined") { _col = "#202020"; }
    ctx.fillStyle = _col;
    ctx.textAlign = _align;
    if(_width < getTextWidth(_font, _size, _str)) {
        var breakCount = 0;
        _size--;
        while(_width < getTextWidth(_font, _size, _str)) {
            _size--;
            if(breakCount > 100) {
                break;
            }
        }
    }
    if(curLang == "ar") {
        _y -= _size / 15;
    }
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    ctx.fillText(getText(_str), _x, _y);
}
function getText(_str) {
    var tempText = assetLib.textData.langText[_str][curLang];
    if(curLang == "de") {
    }
    return tempText;
}
function getTextWidth(_font, _size, _str) {
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
function getCorrectedTextWidth(_font, _size, _width, _str) {
    if(_width < getTextWidth(_font, _size, _str)) {
        var breakCount = 0;
        _size--;
        while(_width < getTextWidth(_font, _size, _str)) {
            _size--;
            if(breakCount > 100) {
                break;
            }
        }
    }
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
function getTrueSave() {
    if(Math.random() > .9) {
        return false;
    } else {
        return true;
    }
}
function getAccuracyScale() {
    var temp = 1 / ((oGameData.heroScore) * (.4 + .1 * (curProgress + 1)) + 1);
    temp = Math.random() * temp + (1 - temp);
    return temp;
}
function screenShake(_num) {
    shakeY = -_num;
    if(shakeTween) {
        shakeTween.kill();
    }
    shakeTween = TweenLite.to(this, .2, {
        shakeY: 0,
        ease: "Back.easeOut"
    });
}
function userScored() {
    crowd.goWild();
    oGameData.heroScore = Math.min(oGameData.heroScore + 1, 99);
    hud.jiggleUserScore();
    flashRate = 1;
    addFirework(1, canvas.width / 8, 10, 2);
    addFirework(1, (canvas.width / 8) * 7, 10, 2);
    TweenLite.to(this, 4, {
        flashRate: .02,
        ease: "Quad.easeOut"
    });
    oGameData.goalsInRow++;
    if(ball.hasHitPowerArea) {
        hud.showTextEvent("bonusTime");
    } else if(oGameData.goalsInRow > 0 && oGameData.goalsInRow % 3 == 0 && oGameData.goalsInRow <= 21) {
        hud.showTextEvent("row" + oGameData.goalsInRow);
    } else if(oGameData.heroScore == 1 || ball.isGoldBall || Math.random() > .7) {
        hud.showTextEvent("goal" + textInc);
        textInc = (textInc + 1) % 5;
    }
}
function userSaved() {
    flashRate = .5;
    enemyCrowd.goWild();
    enemyKick.sad();
    clearInterval(fireworkTimer);
    fireworkNum = 0;
    fireworkTimer = setInterval(celebration1, 100);
    TweenLite.to(this, 4, {
        flashRate: .02,
        ease: "Quad.easeOut"
    });
    if(userGoalieId == 1 || userGoalieId == 3 || userGoalieId == 5) {
        heroGoal.tweenToBallPos();
    }
    if(enemyBall.saveCount == 0 || Math.random() > .7) {
        enemyHud.showTextEvent("save" + textInc);
        textInc = (textInc + 1) % 5;
    }
}
function celebration0() {
    addFirework(0, canvas.width / 5 + fireworkNum * (canvas.width / 5), canvas.height / 2 - 230 + Math.random() * 80 - 40, Math.random() * 1.5 + 1);
    if(++fireworkNum > 3) {
        clearInterval(fireworkTimer);
    }
}
function celebration1() {
    addFirework(1, canvas.width / 5 + (3 - fireworkNum) * (canvas.width / 5), canvas.height / 2 - 230 + Math.random() * 40 - 50, Math.random() * 1.5 + 1);
    if(++fireworkNum > 3) {
        clearInterval(fireworkTimer);
    }
}
function enemyScored() {
    oGameData.enemyScore = Math.min(oGameData.enemyScore + 1, 99);
    enemyHud.jiggleEnemyScore();
    flashRate = .5;
    enemyKick.celebrate();
    TweenLite.to(this, 4, {
        flashRate: .02,
        ease: "Quad.easeOut"
    });
}
function resetShooting() {
    userInput.addHitArea("shootingGameTouch", butEventHandler, {
        isDraggable: true,
        multiTouch: true
    }, "rect", {
        aRect: [
            0, 
            65, 
            canvas.width, 
            canvas.height
        ]
    }, false);
    userInput.addHitArea("shootingGameTouch", butEventHandler, {
        isDraggable: true,
        multiTouch: true
    }, "rect", {
        aRect: [
            0, 
            0, 
            canvas.width - 140, 
            65
        ]
    }, false);
    if(!ball.inGoal) {
        oGameData.goalsInRow = 0;
    }
    ball.reset();
    enemySave.reset();
}
function resetGoalkeeping() {
    userInput.addHitArea("goalkeepingGameTouch", butEventHandler, {
        isDraggable: true,
        multiTouch: true
    }, "rect", {
        aRect: [
            0, 
            65, 
            canvas.width, 
            canvas.height
        ]
    }, false);
    userInput.addHitArea("goalkeepingGameTouch", butEventHandler, {
        isDraggable: true,
        multiTouch: true
    }, "rect", {
        aRect: [
            0, 
            0, 
            canvas.width - 140, 
            65
        ]
    }, false);
    hasSaved = false;
    heroGoal.reset();
    enemyBall.reset();
}
function getSafeWidth(_num) {
    if(canvas.width > maxSafeWidth && (_num < (canvas.width - maxSafeWidth) / 2 || _num > canvas.width - (canvas.width - maxSafeWidth) / 2)) {
        _num = _num * (maxSafeWidth / canvas.width) + (canvas.width - maxSafeWidth) / 2;
    }
    return _num;
}
function getSafeHeight(_num) {
    if(canvas.height > maxSafeHeight && (_num < (canvas.height - maxSafeHeight) / 2 || _num > canvas.height - (canvas.height - maxSafeHeight) / 2)) {
        _num = _num * (maxSafeHeight / canvas.height) + (canvas.height - maxSafeHeight) / 2;
    }
    return _num;
}
function checkButtonsOver() {
    if(isMobile) {
        return;
    }
    for(var i = 0; i < panel.aButs.length; i++) {
        panel.aButs[i].isOver = false;
        if(userInput.mouseX > panel.aButs[i].aOverData[0] && userInput.mouseX < panel.aButs[i].aOverData[2] && userInput.mouseY > panel.aButs[i].aOverData[1] && userInput.mouseY < panel.aButs[i].aOverData[3]) {
            panel.aButs[i].isOver = true;
        }
    }
}
function clearButtonOvers() {
    if(userInput.mouseX > canvas.width - 50) {
        userInput.mouseX = canvas.width - 1;
    } else if(userInput.mouseX < 50) {
        userInput.mouseX = 1;
    }
    if(userInput.mouseY > canvas.height - 50) {
        userInput.mouseY = canvas.height - 1;
    } else if(userInput.mouseY < 50) {
        userInput.mouseY = 1;
    }
}
function addFirework(_id, _x, _y, _scale, _shouldFall) {
    if (typeof _scale === "undefined") { _scale = 1; }
    if (typeof _shouldFall === "undefined") { _shouldFall = true; }
    if(aFireworks.length > 15) {
        return;
    }
    var animId = "explode";
    var firework = new Elements.Firework(assetLib.getData("firework" + _id), animId, _shouldFall);
    firework.x = _x;
    firework.y = _y;
    firework.scaleX = firework.scaleY = _scale;
    aFireworks.push(firework);
}
function addExplosion(_id, _x, _y, _scale, _shouldFall) {
    if (typeof _scale === "undefined") { _scale = 1; }
    if (typeof _shouldFall === "undefined") { _shouldFall = false; }
    if(aFireworks.length > 15) {
        return;
    }
    var animId = "explode";
    var firework = new Elements.Firework(assetLib.getData("explosion" + _id), animId, _shouldFall);
    firework.x = _x;
    firework.y = _y;
    firework.offsetX = -8;
    firework.offsetY = -8;
    firework.scaleX = firework.scaleY = _scale;
    aFireworks.push(firework);
}
function addSpray(_dir, _x, _y, _scale) {
    if (typeof _scale === "undefined") { _scale = 1; }
    if(aFireworks.length > 15) {
        return;
    }
    var firework = new Elements.Firework(assetLib.getData("spray"), _dir, false, 15);
    firework.x = _x;
    firework.y = _y;
    firework.scaleX = firework.scaleY = _scale;
    firework.moveSideways(_dir);
    aFireworks.push(firework);
}
function addFlash(_id, _x, _y, _scale, _forceArray) {
    if (typeof _scale === "undefined") { _scale = 1; }
    if (typeof _forceArray === "undefined") { _forceArray = null; }
    if(aFireworks.length > 15) {
        return;
    }
    var animId = "flash";
    var firework = new Elements.Firework(assetLib.getData("firework" + _id), animId, false);
    firework.x = _x;
    firework.y = _y;
    firework.scaleX = firework.scaleY = _scale;
    if(_forceArray) {
        _forceArray.push(firework);
    } else {
        aFireworks.push(firework);
    }
}
function addGoalMarker(_type, _x, _y, _scale) {
    if (typeof _scale === "undefined") { _scale = 1; }
    var gm = new Elements.GoalMarker(assetLib.getData("goalMarker" + _type), "spin");
    gm.x = _x;
    gm.y = _y;
    gm.scaleX = gm.scaleY = _scale;
    aFireworks.push(gm);
}
function updateScore(_inc) {
    levelScore += _inc;
}
function updateShootingEvent() {
    if(gameState != "shooting") {
        return;
    }
    delta = getDelta();
    if(!showingTut) {
        oGameData.curTime = Math.max(Math.round(oGameData.curTime - (delta * 100)), 0);
        oGameData.swipeTime += delta;
    }
    if(oGameData.curTime <= 0 && !oGameData.timesUp && !oGameData.ballInPlay) {
        ball.killTweens();
        wipe.trigger(initGoalkeepingIntro);
        oGameData.timesUp = true;
        playSound("endWhistle");
    }
    if(!showingTut) {
        if(Math.random() < flashRate) {
            var tempX = Math.random() * canvas.width;
            var tempY = Math.random() * canvas.height / 2 - 33;
            if((tempX > canvas.width / 2 + 75 || tempX < canvas.width / 2 - 75) || tempY < canvas.height / 2 - 180) {
                addFlash(0, tempX, tempY, Math.random() * .2 + .2);
            }
        }
    }
    crowd.update();
    crowd.render();
    ball.update();
    ball.render();
    curTouches = 0;
    for(var i = 0; i < userInput.aHitAreas.length; i++) {
        if(curTouches < userInput.aHitAreas[i].aTouchIdentifiers.length) {
            curTouches = userInput.aHitAreas[i].aTouchIdentifiers.length;
        }
    }
    enemySave.update();
    hud.update();
    hud.render();
    for(var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if(aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateShootingEvent);
}
function updateGoalkeepingEvent() {
    if(gameState != "goalkeeping") {
        return;
    }
    delta = getDelta();
    if(!showingTut) {
        oGameData.curTime = Math.max(Math.round(oGameData.curTime - (delta * 100)), 0);
    }
    if(oGameData.curTime <= 0 && !oGameData.timesUp && !oGameData.ballInPlay) {
        enemyBall.killTweens();
        wipe.trigger(initGoalkeepingComplete);
        oGameData.timesUp = true;
        playSound("endWhistle");
    }
    if(Math.random() < flashRate) {
        addFlash(0, Math.random() * canvas.width, canvas.height / 2 - (Math.random() * 144 + 42), Math.random() * .2 + .2);
    }
    enemyCrowd.update();
    enemyCrowd.render();
    enemyKick.update();
    enemyKick.render();
    for(var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if(aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    heroGoal.update();
    enemyBall.update();
    enemyBall.render();
    curTouches = 0;
    for(var i = 0; i < userInput.aHitAreas.length; i++) {
        if(curTouches < userInput.aHitAreas[i].aTouchIdentifiers.length) {
            curTouches = userInput.aHitAreas[i].aTouchIdentifiers.length;
        }
    }
    enemyHud.update();
    enemyHud.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateGoalkeepingEvent);
}
function updateCreditsScreenEvent() {
    if(gameState != "credits") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    ctx.fillStyle = "#888888";
    ctx.textAlign = "center";
    ctx.font = "15px Arial";
    ctx.fillText("v1.0.6", canvas.width / 2, canvas.height - 10);
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateCreditsScreenEvent);
}
function updateGoalkeepingComplete() {
    if(gameState != "goalkeepingComplete") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    if(Math.random() < .05 && oGameData.heroScore > oGameData.enemyScore) {
        addFirework(1, Math.random() * canvas.width, Math.random() * canvas.height / 2, Math.random() * 1 + 1);
    }
    for(var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if(aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateGoalkeepingComplete);
}
function updateSplashScreenEvent() {
    if(gameState != "splash") {
        return;
    }
    delta = getDelta();
    splashTimer += delta;
    if(splashTimer > 2.5) {
        if(audioType == 1 && !muted) {
            playMusic();
            if(!hasFocus) {
                music.pause();
            }
        }
        initStartScreen();
        return;
    }
    background.render();
    panel.update();
    panel.render();
    requestAnimFrame(updateSplashScreenEvent);
}
function updateIntroScreenEvent() {
    if(gameState != "intro") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateIntroScreenEvent);
}
function updateOutroScreenEvent() {
    if(gameState != "outro") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    if(panel.oIntro.inc2 < 1 && Math.random() < .1) {
        addFirework(Math.round(Math.random() * 2), Math.random() * 360 + panel.introOffsetX, Math.random() * canvas.height / 2 + panel.introOffsetY, Math.random() * 1 + 1);
    }
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateOutroScreenEvent);
}
function updateStartScreenEvent() {
    if(gameState != "start") {
        return;
    }
    if(Math.random() < .1 && panel.oStartPosData.titleY > -50) {
        addFirework(Math.round(Math.random() * 2), Math.random() * canvas.width, Math.random() * canvas.height / 2, Math.random() * 1 + 1);
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateStartScreenEvent);
}
function updateCharSelectScreenEvent() {
    if(gameState != "charSelect") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    for(var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if(aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateCharSelectScreenEvent);
}
function updateProgressScreenEvent() {
    if(gameState != "progress") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    for(var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if(aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateProgressScreenEvent);
}
function updateShootingIntroEvent() {
    if(gameState != "shootingIntro") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    for(var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if(aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateShootingIntroEvent);
}
function updateGoalkeepingIntroEvent() {
    if(gameState != "goalkeepingIntro") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    for(var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if(aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateGoalkeepingIntroEvent);
}
function updateVersusScreenEvent() {
    if(gameState != "versusScreen") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    if(Math.random() < .1) {
    }
    for(var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if(aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateVersusScreenEvent);
}
function updateLoaderEvent() {
    if(gameState != "loading") {
        return;
    }
    delta = getDelta();
    assetLib.render();
    requestAnimFrame(updateLoaderEvent);
}
function updateRotateWarningEvent() {
    if(gameState != "rotated") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render(false);
    requestAnimFrame(updateRotateWarningEvent);
}
function updatePauseEvent() {
    if(gameState != "pause") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updatePauseEvent);
}
function updateQuitConfirmEvent() {
    if(gameState != "quitConfirm") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateQuitConfirmEvent);
}
function getDelta() {
    var currentTime = new Date().getTime();
    var deltaTemp = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    if(deltaTemp > .5) {
        deltaTemp = 0;
    }
    return deltaTemp;
}
function checkSpriteCollision(_s1, _s2) {
    var s1XOffset = _s1.x;
    var s1YOffset = _s1.y;
    var s2XOffset = _s2.x;
    var s2YOffset = _s2.y;
    var distance_squared = (((s1XOffset - s2XOffset) * (s1XOffset - s2XOffset)) + ((s1YOffset - s2YOffset) * (s1YOffset - s2YOffset)));
    var radii_squared = (_s1.radius) * (_s2.radius);
    if(distance_squared < radii_squared) {
        return true;
    } else {
        return false;
    }
}
function getScaleImageToMax(_oImgData, _aLimit) {
    var newScale;
    if(_oImgData.isSpriteSheet) {
        if(_aLimit[0] / _oImgData.oData.spriteWidth < _aLimit[1] / _oImgData.oData.spriteHeight) {
            newScale = Math.min(_aLimit[0] / _oImgData.oData.spriteWidth, 1);
        } else {
            newScale = Math.min(_aLimit[1] / _oImgData.oData.spriteHeight, 1);
        }
    } else {
        if(_aLimit[0] / _oImgData.img.width < _aLimit[1] / _oImgData.img.height) {
            newScale = Math.min(_aLimit[0] / _oImgData.img.width, 1);
        } else {
            newScale = Math.min(_aLimit[1] / _oImgData.img.height, 1);
        }
    }
    return newScale;
}
function getCentreFromTopLeft(_aTopLeft, _oImgData, _imgScale) {
    var aCentre = new Array();
    aCentre.push(_aTopLeft[0] + (_oImgData.oData.spriteWidth / 2) * _imgScale);
    aCentre.push(_aTopLeft[1] + (_oImgData.oData.spriteHeight / 2) * _imgScale);
    return aCentre;
}
function loadPreAssets() {
    preAssetLib = new Utils.AssetLoader(curLang, [
        {
            id: "loader",
            file: "images/preloader.png",
            oAtlasData: {
                id0: {
                    x: 0,
                    y: 0,
                    width: 792,
                    height: 102
                },
                id1: {
                    x: 0,
                    y: 104,
                    width: 778,
                    height: 81
                },
                id2: {
                    x: 0,
                    y: 187,
                    width: 520,
                    height: 335
                }
            }
        }
    ], ctx, canvas.width, canvas.height, false);
    oImageIds.overBar = "id0";
    oImageIds.underBar = "id1";
    oImageIds.preloaderLogo = "id2";
    preAssetLib.onReady(initLoadAssets);
}
function initLoadAssets() {
    loadAssets();
}
function loadAssets() {
    gameState = "loading";
    assetLib = new Utils.AssetLoader(curLang, [
        {
            id: "uiButs",
            file: "images/uiButs.png",
            oAtlasData: {
                id0: {
                    x: 648,
                    y: 312,
                    width: 64,
                    height: 64
                },
                id1: {
                    x: 688,
                    y: 66,
                    width: 64,
                    height: 64
                },
                id10: {
                    x: 154,
                    y: 112,
                    width: 64,
                    height: 64
                },
                id11: {
                    x: 152,
                    y: 422,
                    width: 64,
                    height: 64
                },
                id12: {
                    x: 224,
                    y: 534,
                    width: 110,
                    height: 110
                },
                id13: {
                    x: 152,
                    y: 310,
                    width: 110,
                    height: 110
                },
                id14: {
                    x: 578,
                    y: 0,
                    width: 102,
                    height: 102
                },
                id15: {
                    x: 544,
                    y: 416,
                    width: 102,
                    height: 102
                },
                id16: {
                    x: 576,
                    y: 208,
                    width: 102,
                    height: 102
                },
                id17: {
                    x: 544,
                    y: 312,
                    width: 102,
                    height: 102
                },
                id18: {
                    x: 536,
                    y: 639,
                    width: 102,
                    height: 102
                },
                id19: {
                    x: 536,
                    y: 535,
                    width: 102,
                    height: 102
                },
                id2: {
                    x: 682,
                    y: 0,
                    width: 64,
                    height: 64
                },
                id20: {
                    x: 480,
                    y: 104,
                    width: 102,
                    height: 102
                },
                id21: {
                    x: 472,
                    y: 208,
                    width: 102,
                    height: 102
                },
                id22: {
                    x: 440,
                    y: 431,
                    width: 102,
                    height: 102
                },
                id23: {
                    x: 440,
                    y: 327,
                    width: 102,
                    height: 102
                },
                id24: {
                    x: 432,
                    y: 638,
                    width: 102,
                    height: 102
                },
                id25: {
                    x: 640,
                    y: 520,
                    width: 102,
                    height: 102
                },
                id26: {
                    x: 474,
                    y: 0,
                    width: 102,
                    height: 102
                },
                id27: {
                    x: 376,
                    y: 104,
                    width: 102,
                    height: 102
                },
                id28: {
                    x: 370,
                    y: 0,
                    width: 102,
                    height: 102
                },
                id29: {
                    x: 336,
                    y: 534,
                    width: 102,
                    height: 102
                },
                id3: {
                    x: 680,
                    y: 208,
                    width: 64,
                    height: 64
                },
                id30: {
                    x: 336,
                    y: 430,
                    width: 102,
                    height: 102
                },
                id31: {
                    x: 584,
                    y: 104,
                    width: 102,
                    height: 102
                },
                id32: {
                    x: 328,
                    y: 646,
                    width: 102,
                    height: 101
                },
                id33: {
                    x: 336,
                    y: 327,
                    width: 102,
                    height: 101
                },
                id34: {
                    x: 264,
                    y: 224,
                    width: 102,
                    height: 101
                },
                id35: {
                    x: 224,
                    y: 646,
                    width: 102,
                    height: 101
                },
                id36: {
                    x: 266,
                    y: 0,
                    width: 102,
                    height: 101
                },
                id37: {
                    x: 368,
                    y: 224,
                    width: 102,
                    height: 101
                },
                id38: {
                    x: 640,
                    y: 624,
                    width: 64,
                    height: 64
                },
                id39: {
                    x: 688,
                    y: 132,
                    width: 64,
                    height: 64
                },
                id4: {
                    x: 648,
                    y: 444,
                    width: 64,
                    height: 64
                },
                id40: {
                    x: 264,
                    y: 112,
                    width: 110,
                    height: 110
                },
                id41: {
                    x: 152,
                    y: 198,
                    width: 110,
                    height: 110
                },
                id42: {
                    x: 112,
                    y: 614,
                    width: 110,
                    height: 110
                },
                id43: {
                    x: 154,
                    y: 0,
                    width: 110,
                    height: 110
                },
                id44: {
                    x: 224,
                    y: 422,
                    width: 110,
                    height: 110
                },
                id45: {
                    x: 0,
                    y: 614,
                    width: 110,
                    height: 110
                },
                id46: {
                    x: 0,
                    y: 502,
                    width: 110,
                    height: 110
                },
                id47: {
                    x: 112,
                    y: 502,
                    width: 110,
                    height: 110
                },
                id48: {
                    x: 0,
                    y: 99,
                    width: 152,
                    height: 97
                },
                id49: {
                    x: 0,
                    y: 0,
                    width: 152,
                    height: 97
                },
                id5: {
                    x: 648,
                    y: 378,
                    width: 64,
                    height: 64
                },
                id6: {
                    x: 0,
                    y: 350,
                    width: 150,
                    height: 150
                },
                id7: {
                    x: 0,
                    y: 198,
                    width: 150,
                    height: 150
                },
                id8: {
                    x: 440,
                    y: 535,
                    width: 64,
                    height: 64
                },
                id9: {
                    x: 264,
                    y: 327,
                    width: 64,
                    height: 64
                }
            }
        }, 
        {
            id: "uiElements",
            file: "images/uiElements.png",
            oAtlasData: {
                id0: {
                    x: 1461,
                    y: 1381,
                    width: 144,
                    height: 197
                },
                id1: {
                    x: 991,
                    y: 231,
                    width: 264,
                    height: 402
                },
                id10: {
                    x: 661,
                    y: 250,
                    width: 232,
                    height: 186
                },
                id11: {
                    x: 1039,
                    y: 1390,
                    width: 218,
                    height: 231
                },
                id12: {
                    x: 507,
                    y: 503,
                    width: 120,
                    height: 235
                },
                id13: {
                    x: 1285,
                    y: 1140,
                    width: 178,
                    height: 239
                },
                id14: {
                    x: 1285,
                    y: 906,
                    width: 190,
                    height: 232
                },
                id15: {
                    x: 752,
                    y: 0,
                    width: 278,
                    height: 229
                },
                id16: {
                    x: 1314,
                    y: 499,
                    width: 172,
                    height: 217
                },
                id17: {
                    x: 1039,
                    y: 1112,
                    width: 244,
                    height: 276
                },
                id18: {
                    x: 1459,
                    y: 210,
                    width: 148,
                    height: 211
                },
                id19: {
                    x: 336,
                    y: 1443,
                    width: 139,
                    height: 177
                },
                id2: {
                    x: 1074,
                    y: 906,
                    width: 185,
                    height: 204
                },
                id20: {
                    x: 1259,
                    y: 1390,
                    width: 200,
                    height: 231
                },
                id21: {
                    x: 1436,
                    y: 0,
                    width: 150,
                    height: 208
                },
                id22: {
                    x: 0,
                    y: 1436,
                    width: 281,
                    height: 43
                },
                id23: {
                    x: 0,
                    y: 1481,
                    width: 280,
                    height: 43
                },
                id24: {
                    x: 394,
                    y: 796,
                    width: 342,
                    height: 325
                },
                id25: {
                    x: 647,
                    y: 449,
                    width: 342,
                    height: 325
                },
                id26: {
                    x: 0,
                    y: 796,
                    width: 392,
                    height: 399
                },
                id27: {
                    x: 0,
                    y: 0,
                    width: 750,
                    height: 248
                },
                id28: {
                    x: 0,
                    y: 1526,
                    width: 180,
                    height: 43
                },
                id29: {
                    x: 0,
                    y: 1571,
                    width: 180,
                    height: 43
                },
                id3: {
                    x: 750,
                    y: 1112,
                    width: 287,
                    height: 329
                },
                id30: {
                    x: 0,
                    y: 349,
                    width: 658,
                    height: 98
                },
                id31: {
                    x: 182,
                    y: 1526,
                    width: 152,
                    height: 81
                },
                id32: {
                    x: 477,
                    y: 1443,
                    width: 108,
                    height: 109
                },
                id33: {
                    x: 0,
                    y: 250,
                    width: 659,
                    height: 97
                },
                id34: {
                    x: 738,
                    y: 776,
                    width: 334,
                    height: 334
                },
                id35: {
                    x: 375,
                    y: 1197,
                    width: 373,
                    height: 237
                },
                id36: {
                    x: 0,
                    y: 1197,
                    width: 373,
                    height: 237
                },
                id37: {
                    x: 1257,
                    y: 225,
                    width: 200,
                    height: 272
                },
                id4: {
                    x: 1074,
                    y: 635,
                    width: 238,
                    height: 269
                },
                id5: {
                    x: 1258,
                    y: 0,
                    width: 176,
                    height: 209
                },
                id6: {
                    x: 0,
                    y: 503,
                    width: 505,
                    height: 291
                },
                id7: {
                    x: 394,
                    y: 1123,
                    width: 92,
                    height: 59
                },
                id8: {
                    x: 0,
                    y: 449,
                    width: 645,
                    height: 52
                },
                id9: {
                    x: 1032,
                    y: 0,
                    width: 224,
                    height: 223
                }
            }
        }, 
        {
            id: "rotateIcon",
            file: "images/rotate.png"
        }, 
        {
            id: "titleBg",
            file: "images/titleBg.jpg"
        }, 
        {
            id: "tournWinBg",
            file: "images/tournWinBg.jpg"
        }, 
        {
            id: "titleLogo",
            file: "images/title/title_" + curLang + ".png"
        }, 
        {
            id: "firework0",
            file: "images/firework0_150x150.png",
            oAnims: {
                explode: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15
                ],
                flash: [
                    5, 
                    4, 
                    3, 
                    2, 
                    1, 
                    0
                ]
            }
        }, 
        {
            id: "firework1",
            file: "images/firework1_175x175.png",
            oAnims: {
                explode: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29
                ]
            }
        }, 
        {
            id: "goalMarker0",
            file: "images/goalMarker0_162x167.png",
            oAnims: {
                spin: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8
                ]
            }
        }, 
        {
            id: "goalMarker1",
            file: "images/goalMarker1_162x167.png",
            oAnims: {
                spin: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8
                ]
            }
        }, 
        {
            id: "powerArea",
            file: "images/powerArea_85x85.png",
            oAnims: {
                spin: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9
                ]
            }
        }, 
        {
            id: "timeNumbers",
            file: "images/timeNumbers_48x51.png"
        }, 
        {
            id: "scoreNumbers",
            file: "images/scoreNumbers_63x79.png"
        }, 
        {
            id: "gameElements",
            file: "images/gameElements.png",
            oAtlasData: {
                id0: {
                    x: 0,
                    y: 660,
                    width: 542,
                    height: 228
                },
                id1: {
                    x: 870,
                    y: 340,
                    width: 153,
                    height: 110
                },
                id10: {
                    x: 0,
                    y: 1081,
                    width: 264,
                    height: 59
                },
                id11: {
                    x: 0,
                    y: 953,
                    width: 270,
                    height: 61
                },
                id12: {
                    x: 0,
                    y: 890,
                    width: 276,
                    height: 61
                },
                id13: {
                    x: 756,
                    y: 943,
                    width: 161,
                    height: 159
                },
                id14: {
                    x: 0,
                    y: 1016,
                    width: 268,
                    height: 63
                },
                id15: {
                    x: 270,
                    y: 1036,
                    width: 215,
                    height: 39
                },
                id16: {
                    x: 665,
                    y: 794,
                    width: 18,
                    height: 53
                },
                id17: {
                    x: 765,
                    y: 660,
                    width: 227,
                    height: 229
                },
                id18: {
                    x: 0,
                    y: 0,
                    width: 882,
                    height: 338
                },
                id19: {
                    x: 0,
                    y: 340,
                    width: 868,
                    height: 318
                },
                id2: {
                    x: 544,
                    y: 660,
                    width: 161,
                    height: 132
                },
                id20: {
                    x: 526,
                    y: 994,
                    width: 195,
                    height: 17
                },
                id21: {
                    x: 544,
                    y: 794,
                    width: 119,
                    height: 58
                },
                id22: {
                    x: 1025,
                    y: 163,
                    width: 111,
                    height: 152
                },
                id23: {
                    x: 870,
                    y: 452,
                    width: 142,
                    height: 137
                },
                id24: {
                    x: 994,
                    y: 731,
                    width: 129,
                    height: 125
                },
                id25: {
                    x: 1014,
                    y: 452,
                    width: 127,
                    height: 129
                },
                id26: {
                    x: 884,
                    y: 0,
                    width: 139,
                    height: 128
                },
                id27: {
                    x: 1025,
                    y: 0,
                    width: 126,
                    height: 161
                },
                id28: {
                    x: 884,
                    y: 130,
                    width: 139,
                    height: 163
                },
                id29: {
                    x: 994,
                    y: 591,
                    width: 129,
                    height: 138
                },
                id3: {
                    x: 529,
                    y: 1085,
                    width: 214,
                    height: 45
                },
                id30: {
                    x: 919,
                    y: 1021,
                    width: 131,
                    height: 124
                },
                id31: {
                    x: 919,
                    y: 891,
                    width: 135,
                    height: 128
                },
                id32: {
                    x: 270,
                    y: 1016,
                    width: 258,
                    height: 18
                },
                id4: {
                    x: 529,
                    y: 1036,
                    width: 222,
                    height: 47
                },
                id5: {
                    x: 526,
                    y: 943,
                    width: 228,
                    height: 49
                },
                id6: {
                    x: 526,
                    y: 890,
                    width: 237,
                    height: 51
                },
                id7: {
                    x: 278,
                    y: 890,
                    width: 246,
                    height: 53
                },
                id8: {
                    x: 272,
                    y: 953,
                    width: 252,
                    height: 55
                },
                id9: {
                    x: 266,
                    y: 1081,
                    width: 261,
                    height: 58
                }
            }
        }, 
        {
            id: "shootingBg",
            file: "images/shootingBg.jpg"
        }, 
        {
            id: "goalkeepingBg",
            file: "images/goalkeepingBg.jpg"
        }, 
        {
            id: "ball",
            file: "images/ball_165x165.png"
        }, 
        {
            id: "goldBall",
            file: "images/goldBall_179x179.png"
        }, 
        {
            id: "heroGoal0",
            file: "images/heroGoal0_315x195.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    9, 
                    8, 
                    7, 
                    6, 
                    5, 
                    4, 
                    3, 
                    2, 
                    1
                ],
                rightFly: [
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39, 
                    40, 
                    41, 
                    42
                ],
                rightLand: [
                    43, 
                    44, 
                    45, 
                    46, 
                    47, 
                    48, 
                    49, 
                    50, 
                    51, 
                    52, 
                    53, 
                    54, 
                    55, 
                    56
                ],
                leftFly: [
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19
                ],
                leftLand: [
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31, 
                    32, 
                    33
                ]
            }
        }, 
        {
            id: "heroGoal1",
            file: "images/heroGoal1_165x199.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    10, 
                    9, 
                    8, 
                    7, 
                    6, 
                    5, 
                    4, 
                    3, 
                    2, 
                    1
                ],
                rightFly: [
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18
                ],
                rightStop: [
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26
                ],
                leftFly: [
                    12, 
                    13, 
                    14, 
                    15, 
                    27, 
                    28, 
                    29
                ],
                leftStop: [
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37
                ],
                smallAmbient: [
                    38, 
                    39, 
                    40, 
                    41
                ]
            }
        }, 
        {
            id: "heroGoal2",
            file: "images/heroGoal2_250x230.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    10, 
                    9, 
                    8, 
                    7, 
                    6, 
                    5, 
                    4, 
                    3, 
                    2, 
                    1
                ],
                rightFly: [
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21
                ],
                rightLand: [
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31, 
                    32
                ],
                leftFly: [
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39, 
                    40, 
                    41, 
                    42
                ],
                leftLand: [
                    43, 
                    44, 
                    45, 
                    46, 
                    47, 
                    48, 
                    49, 
                    50, 
                    51, 
                    52, 
                    53
                ]
            }
        }, 
        {
            id: "heroGoal3",
            file: "images/heroGoal3_132x117.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13
                ],
                rightFly: [
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22
                ],
                rightStop: [
                    15, 
                    14
                ],
                leftFly: [
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31
                ],
                leftStop: [
                    24, 
                    23
                ]
            }
        }, 
        {
            id: "heroGoal4",
            file: "images/heroGoal4_328x235.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    12, 
                    11, 
                    10, 
                    9, 
                    8, 
                    7, 
                    6, 
                    5, 
                    4, 
                    3, 
                    2, 
                    1
                ],
                rightFly: [
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23
                ],
                rightLand: [
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37
                ],
                leftFly: [
                    38, 
                    39, 
                    40, 
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    46, 
                    47
                ],
                leftLand: [
                    48, 
                    49, 
                    50, 
                    51, 
                    52, 
                    53, 
                    54, 
                    55, 
                    56, 
                    57, 
                    58, 
                    59, 
                    60, 
                    61
                ]
            }
        }, 
        {
            id: "heroGoal5",
            file: "images/heroGoal5_119x140.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    15, 
                    14, 
                    13, 
                    12, 
                    11, 
                    10, 
                    9, 
                    8, 
                    7, 
                    6, 
                    5, 
                    4, 
                    3, 
                    2, 
                    1
                ],
                rightFly: [
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    45, 
                    45
                ],
                rightStop: [
                    46, 
                    47, 
                    48, 
                    49, 
                    50, 
                    51, 
                    52, 
                    53, 
                    54, 
                    55, 
                    56, 
                    57, 
                    58, 
                    59, 
                    60, 
                    61, 
                    62, 
                    63, 
                    64
                ],
                leftFly: [
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    21, 
                    21
                ],
                leftStop: [
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39, 
                    40
                ]
            }
        }, 
        {
            id: "explosion0",
            file: "images/explosion0_214x199.png",
            oAnims: {
                explode: [
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11
                ]
            }
        }, 
        {
            id: "enemyKick0",
            file: "images/enemyKick0_166x103.png",
            oAnims: {
                ambient: [
                    0
                ],
                kick0: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15
                ],
                kick1: [
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29
                ],
                celebrate: [
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39
                ],
                sad: [
                    40, 
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    46, 
                    47, 
                    48, 
                    49, 
                    50, 
                    51, 
                    52, 
                    53, 
                    54, 
                    55, 
                    56, 
                    57
                ]
            }
        }, 
        {
            id: "enemyKick1",
            file: "images/enemyKick1_174x116.png",
            oAnims: {
                ambient: [
                    0
                ],
                kick0: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15
                ],
                kick1: [
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29
                ],
                celebrate: [
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39
                ],
                sad: [
                    40, 
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    46, 
                    47, 
                    48, 
                    49, 
                    50, 
                    51, 
                    52
                ]
            }
        }, 
        {
            id: "enemyKick2",
            file: "images/enemyKick2_168x137.png",
            oAnims: {
                ambient: [
                    0
                ],
                kick0: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15
                ],
                kick1: [
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29
                ],
                celebrate: [
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37
                ],
                sad: [
                    38, 
                    39, 
                    40, 
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    46, 
                    47, 
                    48, 
                    49, 
                    50
                ]
            }
        }, 
        {
            id: "enemyKick3",
            file: "images/enemyKick3_196x114.png",
            oAnims: {
                ambient: [
                    0
                ],
                kick0: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10
                ],
                kick1: [
                    11, 
                    12, 
                    13, 
                    14
                ],
                celebrate: [
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31
                ],
                sad: [
                    32, 
                    33, 
                    34
                ]
            }
        }, 
        {
            id: "enemyKick4",
            file: "images/enemyKick4_204x113.png",
            oAnims: {
                ambient: [
                    0
                ],
                kick0: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15
                ],
                kick1: [
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29
                ],
                celebrate: [
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39, 
                    40
                ],
                sad: [
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    46, 
                    47, 
                    48, 
                    49, 
                    50, 
                    51, 
                    52, 
                    53, 
                    54, 
                    55, 
                    56, 
                    57, 
                    58, 
                    59, 
                    60, 
                    61
                ]
            }
        }, 
        {
            id: "enemyKick5",
            file: "images/enemyKick5_199x123.png",
            oAnims: {
                ambient: [
                    0
                ],
                kick0: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15
                ],
                kick1: [
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29
                ],
                celebrate: [
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37
                ],
                sad: [
                    38, 
                    39, 
                    40, 
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    46, 
                    47, 
                    48, 
                    49, 
                    50, 
                    51, 
                    52, 
                    53
                ]
            }
        }, 
        {
            id: "heroKick0",
            file: "images/heroKick0_286x217.png",
            oAnims: {
                ambient: [
                    9
                ],
                kick0: [
                    0
                ],
                kick1: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8
                ]
            }
        }, 
        {
            id: "heroKick1",
            file: "images/heroKick1_253x222.png",
            oAnims: {
                ambient: [
                    9
                ],
                kick0: [
                    0
                ],
                kick1: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8
                ]
            }
        }, 
        {
            id: "heroKick2",
            file: "images/heroKick2_289x217.png",
            oAnims: {
                ambient: [
                    9
                ],
                kick0: [
                    0
                ],
                kick1: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8
                ]
            }
        }, 
        {
            id: "heroKick3",
            file: "images/heroKick3_335x220.png",
            oAnims: {
                ambient: [
                    9
                ],
                kick0: [
                    0
                ],
                kick1: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8
                ]
            }
        }, 
        {
            id: "heroKick4",
            file: "images/heroKick4_311x213.png",
            oAnims: {
                ambient: [
                    9
                ],
                kick0: [
                    0
                ],
                kick1: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8
                ]
            }
        }, 
        {
            id: "heroKick5",
            file: "images/heroKick5_330x232.png",
            oAnims: {
                ambient: [
                    9
                ],
                kick0: [
                    0
                ],
                kick1: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8
                ]
            }
        }, 
        {
            id: "enemySave0",
            file: "images/enemySave0_247x152.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    9, 
                    8, 
                    7, 
                    6, 
                    5, 
                    4, 
                    3, 
                    2, 
                    1
                ],
                rightJump: [
                    11, 
                    12, 
                    13, 
                    14, 
                    38, 
                    39
                ],
                rightFly: [
                    40, 
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    46, 
                    47
                ],
                rightLand: [
                    48, 
                    49, 
                    50, 
                    51, 
                    52, 
                    53, 
                    54, 
                    55, 
                    56, 
                    57, 
                    58, 
                    59, 
                    60
                ],
                leftJump: [
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16
                ],
                leftFly: [
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24
                ],
                leftLand: [
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37
                ]
            }
        }, 
        {
            id: "enemySave1",
            file: "images/enemySave1_130x154.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    10, 
                    9, 
                    8, 
                    7, 
                    6, 
                    5, 
                    4, 
                    3, 
                    2, 
                    1
                ],
                rightFly: [
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18
                ],
                rightStop: [
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    38, 
                    39, 
                    40, 
                    41, 
                    38, 
                    39, 
                    40, 
                    41, 
                    38, 
                    39, 
                    40, 
                    41
                ],
                leftFly: [
                    12, 
                    13, 
                    14, 
                    15, 
                    27, 
                    28, 
                    29
                ],
                leftStop: [
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39, 
                    40, 
                    41, 
                    38, 
                    39, 
                    40, 
                    41, 
                    38, 
                    39, 
                    40, 
                    41
                ],
                smallAmbient: [
                    38, 
                    39, 
                    40, 
                    41
                ]
            }
        }, 
        {
            id: "enemySave2",
            file: "images/enemySave2_197x176.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    10, 
                    9, 
                    8, 
                    7, 
                    6, 
                    5, 
                    4, 
                    3, 
                    2, 
                    1
                ],
                rightJump: [
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18
                ],
                rightFly: [
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25
                ],
                rightLand: [
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36
                ],
                leftJump: [
                    12, 
                    13, 
                    14, 
                    15, 
                    37, 
                    38, 
                    39
                ],
                leftFly: [
                    40, 
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    46
                ],
                leftLand: [
                    57, 
                    48, 
                    49, 
                    50, 
                    51, 
                    52, 
                    53, 
                    54, 
                    55, 
                    56, 
                    57
                ]
            }
        }, 
        {
            id: "enemySave3",
            file: "images/enemySave3_98x88.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13
                ],
                leftFly: [
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22
                ],
                leftStop: [
                    15, 
                    14
                ],
                rightFly: [
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31
                ],
                rightStop: [
                    24, 
                    23
                ]
            }
        }, 
        {
            id: "enemySave4",
            file: "images/enemySave4_247x177.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    12, 
                    11, 
                    10, 
                    9, 
                    8, 
                    7, 
                    6, 
                    5, 
                    4, 
                    3, 
                    2, 
                    1
                ],
                rightJump: [
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20
                ],
                rightFly: [
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27
                ],
                rightLand: [
                    28, 
                    29, 
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39, 
                    40, 
                    41
                ],
                leftJump: [
                    14, 
                    15, 
                    16, 
                    17, 
                    42, 
                    43, 
                    44
                ],
                leftFly: [
                    45, 
                    46, 
                    47, 
                    48, 
                    49, 
                    50, 
                    51
                ],
                leftLand: [
                    52, 
                    53, 
                    54, 
                    55, 
                    56, 
                    57, 
                    58, 
                    59, 
                    60, 
                    61, 
                    62, 
                    63, 
                    64, 
                    65
                ]
            }
        }, 
        {
            id: "enemySave5",
            file: "images/enemySave5_99x117.png",
            oAnims: {
                ambient: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    15, 
                    14, 
                    13, 
                    12, 
                    11, 
                    10, 
                    9, 
                    8, 
                    7, 
                    6, 
                    5, 
                    4, 
                    3, 
                    2, 
                    1
                ],
                rightFly: [
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    45, 
                    45
                ],
                rightStop: [
                    46, 
                    47, 
                    48, 
                    49, 
                    50, 
                    51, 
                    52, 
                    53, 
                    54, 
                    55, 
                    56, 
                    57, 
                    58, 
                    59, 
                    60, 
                    61, 
                    62, 
                    62, 
                    63, 
                    63, 
                    64, 
                    64, 
                    64, 
                    64
                ],
                leftFly: [
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    21, 
                    21
                ],
                leftStop: [
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    38, 
                    39, 
                    39, 
                    40, 
                    40, 
                    40, 
                    40
                ]
            }
        }, 
        {
            id: "wipe0",
            file: "images/wipe0.png"
        }, 
        {
            id: "info",
            file: "images/info.png"
        }, 
        {
            id: "tut0",
            file: "images/tut0_276x294.png",
            oAnims: {
                anim: [
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    7, 
                    7, 
                    7, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39, 
                    40, 
                    40, 
                    40, 
                    40, 
                    40, 
                    40, 
                    40, 
                    40, 
                    40, 
                    40
                ]
            }
        }, 
        {
            id: "tut1",
            file: "images/tut1_371x267.png",
            oAnims: {
                anim: [
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    7, 
                    7, 
                    7, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    35, 
                    35, 
                    35, 
                    35, 
                    35, 
                    35, 
                    35, 
                    35, 
                    35
                ]
            }
        }, 
        {
            id: "spray",
            file: "images/spray_160x47.png",
            oAnims: {
                left: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11
                ],
                right: [
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23
                ]
            }
        }
    ], ctx, canvas.width, canvas.height);
    oImageIds.infoBut = "id0";
    oImageIds.infoButOver = "id1";
    oImageIds.muteBut0 = "id2";
    oImageIds.muteBut0Over = "id3";
    oImageIds.muteBut1 = "id4";
    oImageIds.muteBut1Over = "id5";
    oImageIds.playBut = "id6";
    oImageIds.playButOver = "id7";
    oImageIds.pauseBut = "id8";
    oImageIds.pauseButOver = "id9";
    oImageIds.backBut = "id10";
    oImageIds.backButOver = "id11";
    oImageIds.replayBut = "id12";
    oImageIds.replayButOver = "id13";
    oImageIds.strikerCharBut0 = "id14";
    oImageIds.strikerCharBut0Over = "id15";
    oImageIds.strikerCharBut1 = "id16";
    oImageIds.strikerCharBut1Over = "id17";
    oImageIds.strikerCharBut2 = "id18";
    oImageIds.strikerCharBut2Over = "id19";
    oImageIds.strikerCharBut3 = "id20";
    oImageIds.strikerCharBut3Over = "id21";
    oImageIds.strikerCharBut4 = "id22";
    oImageIds.strikerCharBut4Over = "id23";
    oImageIds.strikerCharBut5 = "id24";
    oImageIds.strikerCharBut5Over = "id25";
    oImageIds.goalieCharBut0 = "id26";
    oImageIds.goalieCharBut0Over = "id27";
    oImageIds.goalieCharBut1 = "id28";
    oImageIds.goalieCharBut1Over = "id29";
    oImageIds.goalieCharBut2 = "id30";
    oImageIds.goalieCharBut2Over = "id31";
    oImageIds.goalieCharBut3 = "id32";
    oImageIds.goalieCharBut3Over = "id33";
    oImageIds.goalieCharBut4 = "id34";
    oImageIds.goalieCharBut4Over = "id35";
    oImageIds.goalieCharBut5 = "id36";
    oImageIds.goalieCharBut5Over = "id37";
    oImageIds.resetBut = "id38";
    oImageIds.resetButOver = "id39";
    oImageIds.quitBut = "id40";
    oImageIds.quitButOver = "id41";
    oImageIds.nextBut = "id42";
    oImageIds.nextButOver = "id43";
    oImageIds.tickBut = "id44";
    oImageIds.lockedBut = "id45";
    oImageIds.tickConfirmBut = "id46";
    oImageIds.tickConfirmButOver = "id47";
    oImageIds.extBut = "id48";
    oImageIds.extButOver = "id49";
    oImageIds.titleRaven = "id0";
    oImageIds.titleGrizzly = "id1";
    oImageIds.titleGumball = "id2";
    oImageIds.titleWonderWoman = "id3";
    oImageIds.titleMaoMao = "id4";
    oImageIds.titleApple = "id5";
    oImageIds.titleBall = "id6";
    oImageIds.cnLogo = "id7";
    oImageIds.headerTextPanel = "id8";
    oImageIds.flare0 = "id9";
    oImageIds.strikerChar0 = "id10";
    oImageIds.strikerChar1 = "id11";
    oImageIds.strikerChar2 = "id12";
    oImageIds.strikerChar3 = "id13";
    oImageIds.strikerChar4 = "id14";
    oImageIds.strikerChar5 = "id15";
    oImageIds.goalieChar0 = "id16";
    oImageIds.goalieChar1 = "id17";
    oImageIds.goalieChar2 = "id18";
    oImageIds.goalieChar3 = "id19";
    oImageIds.goalieChar4 = "id20";
    oImageIds.goalieChar5 = "id21";
    oImageIds.namePanel0 = "id22";
    oImageIds.namePanel1 = "id23";
    oImageIds.charSelectBg0 = "id24";
    oImageIds.charSelectBg1 = "id25";
    oImageIds.confetti = "id26";
    oImageIds.rainbow = "id27";
    oImageIds.progressPanel0 = "id28";
    oImageIds.progressPanel1 = "id29";
    oImageIds.speechPanel0 = "id30";
    oImageIds.scorePanel = "id31";
    oImageIds.vsPanel = "id32";
    oImageIds.speechPanel1 = "id33";
    oImageIds.flare1 = "id34";
    oImageIds.tutBg0 = "id35";
    oImageIds.tutBg1 = "id36";
    oImageIds.winCup = "id37";
    oImageIds.shootingGoal = "id0";
    oImageIds.strikerHead0 = "id1";
    oImageIds.strikerHead1 = "id2";
    oImageIds.ballShadow0 = "id3";
    oImageIds.ballShadow1 = "id4";
    oImageIds.ballShadow2 = "id5";
    oImageIds.ballShadow3 = "id6";
    oImageIds.ballShadow4 = "id7";
    oImageIds.ballShadow5 = "id8";
    oImageIds.ballShadow6 = "id9";
    oImageIds.ballShadow7 = "id10";
    oImageIds.ballShadow8 = "id11";
    oImageIds.ballShadow9 = "id12";
    oImageIds.ballUnderShadow = "id13";
    oImageIds.powerBarBg = "id14";
    oImageIds.powerBar = "id15";
    oImageIds.powerBarTip = "id16";
    oImageIds.goldBallUnderShadow = "id17";
    oImageIds.goalkeepingGoalFront = "id18";
    oImageIds.goalkeepingGoalBack = "id19";
    oImageIds.goalkeeperShadow = "id20";
    oImageIds.tinyGoal = "id21";
    oImageIds.strikerHead2 = "id22";
    oImageIds.strikerHead3 = "id23";
    oImageIds.strikerHead4 = "id24";
    oImageIds.strikerHead5 = "id25";
    oImageIds.goalieHead0 = "id26";
    oImageIds.goalieHead1 = "id27";
    oImageIds.goalieHead2 = "id28";
    oImageIds.goalieHead3 = "id29";
    oImageIds.goalieHead4 = "id30";
    oImageIds.goalieHead5 = "id31";
    oImageIds.enemySaveShadow = "id32";
    oImageIds.happyGroup = "id0";
    oImageIds.hex0 = "id1";
    oImageIds.shockedBen = "id2";
    oImageIds.hex1 = "id3";
    oImageIds.dome = "id4";
    oImageIds.greenBg = "id5";
    oImageIds.actionBen = "id6";
    oImageIds.domeGone = "id7";
    oImageIds.benHappy = "id8";
    oImageIds.vilgaxGone = "id9";
    assetLib.onReady(initSplash);
    previousTime = new Date().getTime();
    updateLoaderEvent();
}
function resizeCanvas() {
    if(wipe && wipe.canDisplay) {
        return;
    }
    var tempInnerWidth = window.innerWidth;
    var tempInnerHeight = window.innerHeight;
    canvas.height = tempInnerHeight;
    canvas.width = tempInnerWidth;
    canvas.style.width = tempInnerWidth + "px";
    canvas.style.height = tempInnerHeight + "px";
    var maxW;
    var maxH;
    var minW;
    var minH;
    canvasScale = 1;
    if(tempInnerWidth > tempInnerHeight) {
        if(isRotated) {
            if(gameState != "loading") {
                initBackFromRotate();
            }
        }
        maxW = maxWidth;
        maxH = maxHeight;
        minW = minWidth;
        minH = minHeight;
    } else {
        if(!isRotated) {
            if(gameState != "loading") {
                initRotateWarning();
            }
        }
        maxW = maxHeight;
        maxH = maxWidth;
        minW = minHeight;
        minH = minWidth;
    }
    if(canvas.width < maxW || canvas.height < maxH) {
        if(canvas.height < minH) {
            canvas.height = minH;
            canvas.width = minH * (tempInnerWidth / tempInnerHeight);
            canvasScale = minH / tempInnerHeight;
        }
        if(canvas.width < minW) {
            canvas.width = minW;
            canvas.height = minW * (tempInnerHeight / tempInnerWidth);
            canvasScale = minW / tempInnerWidth;
        }
    } else {
        if(canvas.height - maxH < canvas.width - maxW) {
            if(canvas.height < maxH) {
                canvasScale = 1;
            } else {
                canvas.height = maxH;
                canvas.width = maxH * (tempInnerWidth / tempInnerHeight);
                canvasScale = maxH / tempInnerHeight;
            }
        } else {
            if(canvas.width < maxW) {
                canvasScale = 1;
            } else {
                canvas.width = maxW;
                canvas.height = maxW * (tempInnerHeight / tempInnerWidth);
                canvasScale = maxW / tempInnerWidth;
            }
        }
    }
    if(gameState == "shooting") {
        if(!oGameData.ballInPlay && !showingTut) {
            userInput.addHitArea("shootingGameTouch", butEventHandler, {
                isDraggable: true,
                multiTouch: true
            }, "rect", {
                aRect: [
                    0, 
                    65, 
                    canvas.width, 
                    canvas.height
                ]
            }, false);
            userInput.addHitArea("shootingGameTouch", butEventHandler, {
                isDraggable: true,
                multiTouch: true
            }, "rect", {
                aRect: [
                    0, 
                    0, 
                    canvas.width - 140, 
                    65
                ]
            }, false);
        }
    } else if(gameState == "goalkeeping") {
        if(this.goalTouchIsOn && !showingTut) {
            userInput.addHitArea("goalkeepingGameTouch", butEventHandler, {
                isDraggable: true,
                multiTouch: true
            }, "rect", {
                aRect: [
                    0, 
                    65, 
                    canvas.width, 
                    canvas.height
                ]
            }, false);
            userInput.addHitArea("goalkeepingGameTouch", butEventHandler, {
                isDraggable: true,
                multiTouch: true
            }, "rect", {
                aRect: [
                    0, 
                    0, 
                    canvas.width - 140, 
                    65
                ]
            }, false);
        }
    }
    window.scrollTo(0, 0);
}
function initRotateWarning() {
    isRotated = true;
    if(gameState == "shooting") {
        ball.pause(true);
    } else if(gameState == "goalkeeping") {
        enemyBall.pause(true);
    }
    prevGameState = gameState;
    gameState = "rotated";
    background = new Elements.Background();
    previousTime = new Date().getTime();
    updateRotateWarningEvent();
}
function initBackFromRotate() {
    isRotated = false;
    switch(prevGameState) {
        case "start":
            gameState = "start";
            previousTime = new Date().getTime();
            updateStartScreenEvent();
            break;
        case "credits":
            gameState = "credits";
            previousTime = new Date().getTime();
            updateCreditsScreenEvent();
            break;
        case "progress":
            gameState = "progress";
            previousTime = new Date().getTime();
            updateProgressScreenEvent();
            break;
        case "shooting":
            gameState = "shooting";
            ball.pause(false);
            previousTime = new Date().getTime();
            updateShootingEvent();
            break;
        case "goalkeeping":
            gameState = "goalkeeping";
            enemyBall.pause(false);
            previousTime = new Date().getTime();
            updateGoalkeepingEvent();
            break;
        case "charSelect":
            gameState = "charSelect";
            previousTime = new Date().getTime();
            updateCharSelectScreenEvent();
            break;
        case "shootingIntro":
            gameState = "shootingIntro";
            previousTime = new Date().getTime();
            updateShootingIntroEvent();
            break;
        case "goalkeepingIntro":
            gameState = "goalkeepingIntro";
            previousTime = new Date().getTime();
            updateGoalkeepingIntroEvent();
            break;
        case "goalkeepingComplete":
            gameState = "goalkeepingComplete";
            previousTime = new Date().getTime();
            updateGoalkeepingComplete();
            break;
        case "versusScreen":
            gameState = "versusScreen";
            previousTime = new Date().getTime();
            updateVersusScreenEvent();
            break;
        case "pause":
            gameState = "pause";
            previousTime = new Date().getTime();
            updatePauseEvent();
            break;
        case "quitConfirm":
            gameState = "quitConfirm";
            previousTime = new Date().getTime();
            updateQuitConfirmEvent();
            break;
        case "intro":
            gameState = "intro";
            previousTime = new Date().getTime();
            updateIntroScreenEvent();
            break;
        case "outro":
            gameState = "outro";
            previousTime = new Date().getTime();
            updateOutroScreenEvent();
            break;
    }
}
function playSound(_id) {
    if(audioType == 1) {
        sound.play(_id);
    }
}
function toggleMute() {
    muted = !muted;
    if(audioType == 1) {
        if(muted) {
            Howler.mute(true);
            music.pause();
        } else {
            Howler.mute(false);
            playMusic();
            if(gameState == "shooting" || gameState == "goalkeeping") {
                music.volume(.4);
            } else {
                music.volume(.25);
            }
        }
    } else if(audioType == 2) {
        if(muted) {
            music.pause();
        } else {
            playMusic();
        }
    }
}
