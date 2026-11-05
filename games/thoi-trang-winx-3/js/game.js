(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) {
          return a(o, !0);
        }
        if (i) {
          return i(o, !0);
        }
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o] = {exports:{}};
      t[o][0].call(l.exports, function(e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0;o < r.length;o++) {
    s(r[o]);
  }
  return s;
})({1:[function(require, module, exports) {
  var CharPool = require("../pools/charpool");
  var CharComponent = require("../components/charcomponent");
  function BaseChar(params) {
    this.cc = new CharComponent;
    this.reset(params);
  }
  var p = BaseChar.prototype;
  p.reset = function(params) {
    params.owner = this;
    this.params = params;
    this.cc.reset(params);
    this.cc.setVisByTypeName();
    this.cc.updateVisPosition();
    this.cc.updateVisScale();
    this.cc.parent.addChild(this.cc.vis);
  };
  p.hide = function() {
    this.cc.vis.visible = false;
    this.cc.additVision.visible = false;
  };
  p.show = function() {
    this.cc.vis.visible = true;
    this.cc.additVision.visible = true;
  };
  p.collidedWith = function(collider) {
  };
  p.updateLogic = function() {
  };
  p.render = function() {
    this.cc.render();
  };
  p.dispose = function() {
    this.cc.dispose();
  };
  BaseChar.pool = new CharPool;
  module.exports = BaseChar;
}, {"../components/charcomponent":4, "../pools/charpool":30}], 2:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var bgManager;
  function BgChar(bgName, x, y, localB, parent, scaleX, scaleY, isIngameBg) {
    this.vis = utils.createBitmapFromFile(bgName, 0, 0, 1, null);
    bgManager = game.bgMan;
    if (!this.localB) {
      this.localB = localB.clone();
      this.localB.setValues(this.localB.x, this.localB.y, this.localB.width * scaleX, this.localB.height * scaleY);
    }
    this.vis.scaleX = scaleX;
    this.vis.scaleY = scaleY;
    utils.setSpritePosAndAngle(this.vis, x, y, 0);
    if (!this.worldB) {
      this.worldB = new game.Rectangle;
    }
    this.calculateWorldBounds();
    bgManager.addToAllBgs(this);
    this.parent = parent;
  }
  var p = BgChar.prototype;
  p.addToParent = function() {
    utils.addToParent(this.vis, this.parent);
  };
  p.removeFromParent = function() {
    utils.removeFromParent(this.vis);
  };
  p.calculateWorldBounds = function() {
    var local = this.localB;
    this.worldB.setValues(local.x + this.vis.x, local.y + this.vis.y, local.width, local.height);
  };
  p.render = function() {
  };
  module.exports = BgChar;
}, {"../utils/utils":36}], 3:[function(require, module, exports) {
  var CharPool = require("../pools/charpool");
  var EffectComponent = require("../components/effectcomponent");
  var WAIT = 1;
  var SHOW = 2;
  var DISPOSED = 3;
  function EffectChar(params) {
    this.cc = new EffectComponent;
    this.reset(params);
  }
  var p = EffectChar.prototype;
  p.reset = function(params) {
    params.owner = this;
    this.params = params;
    this.cc.reset(params);
    this.cc.updateVisPosition();
    this.cc.updateVisScale();
    this.cc.vis.gotoAndStop(params.frameName);
    game.utils.setNextAnimation(this.cc.vis, "");
    game.utils.addToArray(game.allEffects.entities, this);
    this.state = WAIT;
    this.timer = -1;
    this.framesBeforeHide = 0;
  };
  p.setStartParams = function(waitTime, framesBeforeHide) {
    this.timer = waitTime;
    this.framesBeforeHide = framesBeforeHide;
  };
  p.updateLogic = function() {
    if (this.state === DISPOSED) {
      return;
    }
    if (this.cc.objToAddMarginFrom) {
      this.cc.updateVisPosition();
    }
    if (this.timer === 0 && this.state === WAIT) {
      this.state = SHOW;
      this.timer = this.framesBeforeHide;
      this.cc.parent.addChild(this.cc.vis);
      this.cc.vis.play();
    }
    if (this.timer === 0 && this.state === SHOW) {
      this.dispose();
      this.state = DISPOSED;
    }
    this.timer--;
  };
  p.dispose = function() {
    this.cc.dispose();
  };
  EffectChar.pool = new CharPool;
  module.exports = EffectChar;
}, {"../components/effectcomponent":5, "../pools/charpool":30}], 4:[function(require, module, exports) {
  var RECT_BOUNDS_TYPE = 0;
  var paramIndex = 0;
  var additName = "";
  var utils;
  function CharComponent(spriteSheet) {
    utils = game.utils;
    var bmpAnimation = new createjs.Sprite(spriteSheet ? spriteSheet : game.zoeSS);
    bmpAnimation.baseBlock = this;
    this.vis = bmpAnimation;
    bmpAnimation = new createjs.Sprite(spriteSheet ? spriteSheet : game.zoeSS);
    bmpAnimation.baseBlock = this;
    this.additVision = bmpAnimation;
    this.reset({});
  }
  var p = CharComponent.prototype;
  p.reset = function(params) {
    this.typeId = params.typeId;
    this.pool = params.pool;
    this.type = window[params.typeId];
    createjs.Tween.removeTweens(this.vis);
    createjs.Tween.removeTweens(this.additVision);
    if (!this.localB) {
      this.localB = new game.Rectangle;
    }
    if (!this.worldB) {
      this.worldB = new game.Rectangle;
    }
    this.posX = params.posX;
    this.posY = params.posY;
    this.marginX = 0;
    this.marginY = 0;
    this.skinId = "";
    this.parent = params.parent;
    this.isNeedDispose = false;
    this.scaleX = params.scaleX;
    this.scaleY = params.scaleY;
    this.rotation = params.rotation;
    this.loadAllAdditParams(params);
    this.vis.alpha = 1;
    this.vis.visible = true;
    this.vis.regX = 0;
    this.vis.regY = 0;
    this.additVision.regY = 0;
    this.additVision.regY = 0;
    this.additVision.alpha = 1;
    this.additVision.visible = true;
    this.additVisRotationMargin = 0;
    this.vis.mouseEnabled = false;
    this.additVision.mouseEnabled = true;
    this.vis.rotation = 0;
    this.vis.cursor = null;
    this.isAutoPosUpdate = false;
    this.speedX = 0;
    this.speedY = 0;
    this.accX = 0;
    this.accY = 0;
    this.isAutoCopyParamsFromChar = false;
    this.charToCopyFrom = null;
    this.owner = params.owner;
    this.label = "";
  };
  p.loadAllAdditParams = function(params) {
    if (params["additParams"]) {
      this.additParams = params.additParams[0].split("_");
    } else {
      this.additParams = [];
    }
  };
  p.getAdditParams = function(index) {
    if (this.additParams.length > index) {
      return this.additParams[index];
    } else {
      return null;
    }
  };
  p.hasAdditParams = function(paramName) {
    for (var i = this.additParams.length;i >= 0;i--) {
      if (this.additParams[i] === paramName) {
        return true;
      }
    }
    return false;
  };
  p.getAdditParamIndex = function(paramName) {
    for (var i = this.additParams.length;i >= 0;i--) {
      if (this.additParams[i] === paramName) {
        return i;
      }
    }
    return null;
  };
  p.updateVisScale = function() {
    this.vis.scaleX = this.scaleX;
    this.vis.scaleY = this.scaleY;
    this.additVision.scaleX = this.vis.scaleX;
    this.additVision.scaleY = this.vis.scaleY;
  };
  p.render = function() {
    if (this.isNeedDispose) {
      game.poolMan.addToPoolDisposed(this.pool, this.owner);
      return;
    }
    if (this.isAutoPosUpdate) {
      this.updateVisPosition();
    }
    if (this.isAutoCopyParamsFromChar) {
      this.copyParams();
    }
  };
  p.setVisByTypeName = function() {
    additName = "";
    paramIndex = this.getAdditParamIndex("SKIN");
    if (paramIndex != null) {
      this.skinId = this.getAdditParams(paramIndex + 1);
      additName = "_SKIN_" + this.skinId;
    }
    this.vis.gotoAndStop(this.typeId + additName);
  };
  p.updateVisPosition = function() {
    this.vis.x = this.additVision.x = this.posX + this.marginX;
    this.vis.y = this.additVision.y = this.posY + this.marginY;
    this.vis.rotation = this.rotation;
    this.additVision.rotation = this.vis.rotation + this.additVisRotationMargin;
  };
  p.dispose = function() {
    game.poolMan.addToPoolDisposed(this.pool, this.owner);
    utils.removeFromArray(game.allChars.entities, this.owner);
    this.vis.removeAllEventListeners();
    this.additVision.removeAllEventListeners();
    this.vis.stop();
    utils.removeFromParent(this.vis);
    utils.removeFromParent(this.additVision);
  };
  p.setPivotPointByChar = function(char) {
    var dx = char.cc.vis.x - this.posX;
    var dy = char.cc.vis.y - this.posY;
    this.setPivotPoint(dx, dy);
  };
  p.setPivotPoint = function(x, y) {
    this.vis.regX = x;
    this.vis.regY = y;
    this.vis.x = this.posX + x * this.scaleX;
    this.vis.y = this.posY + y * this.scaleX;
  };
  p.copyParams = function() {
    var ch = this.charToCopyFrom.cc.vis;
    this.vis.x = ch.x;
    this.vis.y = ch.y;
    this.vis.regX = ch.regX;
    this.vis.regY = ch.regY;
    this.vis.scaleX = ch.scaleX;
    this.vis.scaleY = ch.scaleY;
    this.vis.rotation = ch.rotation;
  };
  module.exports = CharComponent;
  game.CharComponent = CharComponent;
}, {}], 5:[function(require, module, exports) {
  var RECT_BOUNDS_TYPE = 0;
  var paramIndex = 0;
  var utils;
  function EffectComponent(spriteSheet) {
    utils = game.utils;
    var bmpAnimation = new createjs.Sprite(spriteSheet ? spriteSheet : game.zoeSS);
    bmpAnimation.baseBlock = this;
    this.vis = bmpAnimation;
    this.reset({});
  }
  var p = EffectComponent.prototype;
  p.reset = function(params) {
    this.pool = params.pool;
    createjs.Tween.removeTweens(this.vis);
    this.posX = params.posX;
    this.posY = params.posY;
    this.parent = params.parent;
    this.scaleX = params.scaleX;
    this.scaleY = params.scaleY;
    this.objToAddMarginFrom = params.objToAddMarginFrom;
    this.vis.rotation = this.rotation = params.rotation;
    this.vis.alpha = 1;
    this.vis.visible = true;
    this.vis.regX = 0;
    this.vis.regY = 0;
    this.vis.mouseEnabled = true;
    this.vis.rotation = 0;
    this.isAutoCopyParamsFromChar = false;
    this.charToCopyFrom = null;
    this.owner = params.owner;
  };
  p.updateVisScale = function() {
    this.vis.scaleX = this.scaleX;
    this.vis.scaleY = this.scaleY;
  };
  p.render = function() {
    if (this.isAutoCopyParamsFromChar) {
      this.copyParams();
    }
  };
  p.updateVisPosition = function() {
    this.vis.x = this.posX + (this.objToAddMarginFrom ? this.objToAddMarginFrom.x : 0);
    this.vis.y = this.posY + (this.objToAddMarginFrom ? this.objToAddMarginFrom.y : 0);
    this.vis.rotation = this.rotation;
  };
  p.dispose = function() {
    game.poolMan.addToPoolDisposed(this.pool, this.owner);
    this.vis.removeAllEventListeners();
    this.vis.stop();
    utils.removeFromParent(this.vis);
  };
  p.copyParams = function() {
    var ch = this.charToCopyFrom.cc.vis;
    this.vis.x = ch.x;
    this.vis.y = ch.y;
    this.vis.regX = ch.regX;
    this.vis.regY = ch.regY;
    this.vis.scaleX = ch.scaleX;
    this.vis.scaleY = ch.scaleY;
    this.vis.rotation = ch.rotation;
  };
  module.exports = EffectComponent;
  game.EffectComponent = EffectComponent;
}, {}], 6:[function(require, module, exports) {
  (function(global) {
    var InterfaceManager = require("./managers/interfacemanager"), ResizeManager = require("./managers/resizemanager"), PreloaderManager = require("./managers/preloadermanager"), InputManager = require("./managers/inputmanager"), BgManager = require("./managers/bgmanager"), SoundManager = require("./managers/soundmanager"), LevelManager = require("./managers/levelmanager"), StorageManager = require("./managers/storagemanager"), PoolManager = require("./pools/poolmanager"), SponsorManager = require("./managers/sponsormanager"),
    TutorialManger = require("./managers/tutorialmanager"), EffectsManger = require("./managers/effectsmanager"), GirlsManager = require("./managers/girlsmanager"), FPSMeter = require("./utils/fpsmeter"), Rectangle = require("./primitives/rectangle"), utils = require("./utils/utils"), textHelper = require("./texts/texthelper");
    function Game() {
      azerionIntegrationSDK.createSplashloader();
      global.game.inst = this;
      game.defaultDelta = 1E3 / game.LOGIC_FPS;
      game.isGameInited = false;
      game.isGamePaused = true;
      game.isLevelCompleted = false;
      game.isNeedTutorial = false;
      game.Rectangle = Rectangle;
      this.init();
      log("game init!");
    }
    var stage, container;
    var p = Game.prototype;
    p.init = function() {
      game.utils.addIsArrayFunction();
      game.utils.checkForLogEnablingFromURL();
      game.utils.addBoundingBoxToDO();
      utils.detectBrowser();
      game.images = {};
      game.files = {};
      game.canvas = document.getElementById("canvas");
      stage = game.stage = new createjs.Stage("canvas");
      if (isLevelEditor && game.isNeedDebugGui) {
        var DebugGUI = require("./utils/interactivegui");
        this.debugGui = new DebugGUI;
        this.debugGui.initDebugGui();
      }
      this.initManagers();
      this.initContainers();
      utils.initVisibilityChanger();
      createjs.Touch.enable(stage, true);
      if (utils.isDesktop()) {
        stage.enableMouseOver(20);
      }
      stage.mouseMoveOutside = true;
      azerionIntegrationSDK.loadLibraries();
      if (utils.isDesktop()) {
        var gamediv = document.getElementById("gamediv");
        if (gamediv && gamediv.parentNode) {
          gamediv.parentNode.removeChild(gamediv);
        }
      }
      game.preloadMan.startLoaders();
      this.startTicker();
      game.resizeMan.onGameResize();
      stage.update();
      game.sponsorMan.init();
      game.sponsorMan.initGamifiveApi();
      game.sponsorMan.initKIMApi();
    };
    p.initManagers = function() {
      game.resizeMan = new ResizeManager;
      game.inputMan = new InputManager;
      game.bgMan = new BgManager;
      game.preloadMan = new PreloaderManager;
      game.levelMan = new LevelManager;
      game.soundMan = new SoundManager;
      game.storageMan = new StorageManager;
      game.intMan = new InterfaceManager;
      game.poolMan = new PoolManager;
      game.sponsorMan = new SponsorManager;
      game.tutorMan = new TutorialManger;
      game.effectsMan = new EffectsManger;
      game.girlsMan = new GirlsManager;
    };
    p.initContainers = function() {
      container = game.container = new createjs.Container;
      container.isRoot = true;
      container.width = game.resizeMan.minW;
      container.height = game.resizeMan.minH;
      stage.addChild(container);
      var fieldContainer = game.fieldContainer = utils.createAutoAlignedCointainer(0, 0, 1, null, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, 1);
      game.resizeMan.startResizeHandling();
    };
    p.startGame = function() {
      if (game.isGameInited) {
        return;
      }
      game.preloadMan.removeLoaderBar();
      this.configureSpritesheets();
      game.bgMan.createBG();
      game.storageMan.loadSaves();
      game.levelMan.init();
      if (isNeedFpsMeter && isLevelEditor) {
        game.fpsMeter = new FPSMeter;
      }
      game.intMan.init();
      game.inputMan.init();
      game.sponsorMan.init();
      game.girlsMan.init();
      game.tutorMan.init();
      game.isGameInited = true;
      game.resizeMan.onGameResize();
      if (game.TYPE === game.KIM_TYPE) {
        game.sponsorMan.setKIMLang();
        game.sponsorMan.setKIMMusicHandler();
      } else {
        textHelper.setLang(game.LANG);
      }
      this.logicTimer = setInterval(this.logicTick, 1E3 / game.LOGIC_FPS);
      game.resizeMan.onGameResize();
      stage.update();
      this.initEditorHandlers();
      game.soundMan.onGameStarted();
      if (isSkipMainMenu && isLevelEditor) {
        if (isGalleryShow) {
          game.intMan.galleryScreen.show();
        } else {
          if (!isLevelSelectShow) {
            game.levelMan.loadLevel(autoLevelToLoad);
          }
        }
      }
      if (game.isNeedDebugGui) {
        if (isLevelSelectShow) {
          game.inst.debugGui.createLevelsBtnDebugGUI();
        }
      }
      if (utils.isDesktop()) {
        game.soundMan.startBgMusic();
      }
      game.sponsorMan.showWinxLogo();
      game.girlsMan.updateCacheWithCounter();
    };
    p.initEditorHandlers = function() {
      if (!isLevelEditor) {
        return;
      }
      keyboardJS.bind("s", function(e) {
        game.girlsMan.toggleShadows();
      });
      var bgs = ["bg2Config", "bg3Config"];
      var currentBgIndex = 1;
      keyboardJS.bind("b", function(e) {
        game.bgMan.setBgByConfig(game.bgMan[bgs[currentBgIndex]]);
        currentBgIndex++;
        currentBgIndex = currentBgIndex % bgs.length;
      });
      keyboardJS.bind("n", function(e) {
        game.levelMan.loadLevel(game.levelMan.currentLevel + 1);
      });
    };
    p.configureSpritesheets = function() {
      if (isLoadAnimFromJSON) {
        game.zoeCFG = eval(game.files["anim_json"]);
        game.dressCFG = eval(game.files["dress_json"]);
        game.girlsCFG = eval(game.files["girls_json"]);
      }
      game.zoeSS = new createjs.SpriteSheet(game.zoeCFG);
      game.dressSS = new createjs.SpriteSheet(game.dressCFG);
      game.girlsSS = new createjs.SpriteSheet(game.girlsCFG);
      game.interfaceSS = game.zoeSS;
    };
    p.startTicker = function() {
      createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
      if (utils.isDefaultAndroid() || utils.isSamsungS3DefaultBrowser()) {
        isLowGfx = true;
        createjs.Ticker.timingMode = createjs.Ticker.TIMEOUT;
      }
      createjs.Ticker.setFPS(game.FPS);
      createjs.Ticker.addEventListener("tick", this.tick);
    };
    p.tick = function(event) {
      if (!game.isGameInited) {
        stage.update();
        return;
      }
      animTicker++;
      if (game.fpsMeter) {
        game.fpsMeter.update();
      }
      stage.update();
    };
    p.logicTick = function() {
      if (!game.isGameInited) {
        return;
      }
      game.levelMan.update();
      game.intMan.update();
      game.soundMan.update();
      game.tutorMan.update();
      game.effectsMan.update();
    };
    module.exports = Game;
  }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
}, {"./managers/bgmanager":18, "./managers/effectsmanager":19, "./managers/girlsmanager":20, "./managers/inputmanager":21, "./managers/interfacemanager":22, "./managers/levelmanager":23, "./managers/preloadermanager":24, "./managers/resizemanager":25, "./managers/soundmanager":26, "./managers/sponsormanager":27, "./managers/storagemanager":28, "./managers/tutorialmanager":29, "./pools/poolmanager":31, "./primitives/rectangle":32, "./texts/texthelper":34, "./utils/fpsmeter":35, "./utils/interactivegui":undefined,
"./utils/utils":36}], 7:[function(require, module, exports) {
  (function(global) {
    global.game = global.game || {};
    var Game = require("./game");
    game.Game = Game;
    window.onload = function() {
      new game.Game;
    };
  }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
}, {"./game":6}], 8:[function(require, module, exports) {
  var utils, gameContainer, cont, blinkSprite;
  var STANDARD_SPRITE = "blinkbg";
  function BlinkScreen() {
    this.init();
  }
  var p = BlinkScreen.prototype;
  p.init = function() {
    utils = game.utils;
    gameContainer = game.container;
    cont = new createjs.Container;
    blinkSprite = utils.createButton(0, 0, 6.4, STANDARD_SPRITE, null, cont);
    game.intMan.allMenus.push(this);
  };
  p.show = function(time, blinkFrame) {
    time = time ? time : 700;
    blinkSprite.gotoAndStop(blinkFrame ? blinkFrame : STANDARD_SPRITE);
    utils.addToParent(cont, gameContainer);
    createjs.Tween.removeTweens(cont);
    cont.alpha = 1;
    createjs.Tween.get(cont).to({alpha:0}, time, createjs.Ease.quadOut).call(utils.removeChildOnTweenComplete);
  };
  p.hide = function() {
    utils.removeFromParent(cont);
  };
  p.updatePosition = function() {
  };
  p.update = function() {
  };
  module.exports = BlinkScreen;
}, {}], 9:[function(require, module, exports) {
  var LocalizableTextField = require("../texts/localizabletextfield");
  var utils, gameContainer, cont;
  function CreditsScreen() {
    this.init();
  }
  var p = CreditsScreen.prototype;
  var creditsAnd, creditsPorubov, backBtn;
  p.init = function() {
    utils = game.utils;
    gameContainer = game.container;
    cont = new createjs.Container;
    creditsAnd = utils.createButton(game.resizeMan.minW / 2, 100, .8, "credits2", null, cont);
    creditsPorubov = utils.createButton(game.resizeMan.minW / 2, 193, .8, "credits3", null, cont);
    utils.createButton(100, 432, .7, "rbwLogo", null, cont, null, OBJ_LEFT_POS, OBJ_VERTICAL_ANY_POS, 1);
    new LocalizableTextField("Copyright", game.resizeMan.minW / 2, 260, 1, cont, null, null, 1, true);
    backBtn = utils.createButton(game.resizeMan.minW / 2, 435, .9, "quitbtn", utils.onPressStandartHandler, cont, this.onCreditsQuitUp);
    game.intMan.allMenus.push(this);
  };
  p.show = function() {
    utils.addToParent(cont, gameContainer);
    game.bgMan.setBgByConfig(game.bgMan.bg2Config);
    utils.animateButtonShow(backBtn, 600, true);
    game.sponsorMan.showWinxLogo();
  };
  p.onCreditsQuitUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.fadeScreen.show(function() {
      game.intMan.creditsScreen.hide();
      game.intMan.mainMenu.show();
    });
    game.soundMan.playClickSound();
  };
  p.hide = function() {
    utils.removeFromParent(cont);
  };
  p.updatePosition = function() {
    cont.x = (game.resizeMan.viewportW - game.resizeMan.minW) / 2;
  };
  p.update = function() {
  };
  module.exports = CreditsScreen;
}, {"../texts/localizabletextfield":33}], 10:[function(require, module, exports) {
  var utils, fieldContainer, cont;
  function DressUpInterface() {
    this.init();
  }
  var p = DressUpInterface.prototype;
  p.init = function() {
    utils = game.utils;
    fieldContainer = game.fieldContainer;
    cont = new createjs.Container;
    cont.x = 440;
    cont.y = 150;
    this.createBtn("wingsBtn", 1, 2, this.onWingsBtnUp);
    this.createBtn("tightsBtn", 2, 0, this.onTightsBtnUp);
    this.createBtn("shoesBtn", 2, 1, this.onShoesBtnUp);
    this.createBtn("skirtsBtn", 1, 0, this.onSkirtsBtnUp);
    this.createBtn("dressBtn", 0, 0, this.onDressBtnUp);
    this.createBtn("neckBtn", 0, 1, this.onNecksBtnUp);
    this.createBtn("accessoriesBtn", 1, 1, this.onAccessoriesBtnUp);
    game.intMan.allMenus.push(this);
  };
  p.createBtn = function(spriteName, cell, row, btnUpHandler) {
    var posX = cell * 113;
    var posY = row * 113;
    var btn = utils.createButton(posX, posY, .82, spriteName, utils.onPressStandartHandler, cont, btnUpHandler);
  };
  p.onWingsBtnUp = function(e) {
    utils.onOutScale(e.target);
    game.girlsMan.loadNextWings();
    game.soundMan.playDressBtnSound();
  };
  p.onTightsBtnUp = function(e) {
    utils.onOutScale(e.target);
    game.girlsMan.loadNextTight();
    game.soundMan.playDressBtnSound();
  };
  p.onShoesBtnUp = function(e) {
    utils.onOutScale(e.target);
    game.girlsMan.loadNextShoes();
    game.soundMan.playDressBtnSound();
  };
  p.onSkirtsBtnUp = function(e) {
    utils.onOutScale(e.target);
    game.girlsMan.loadNextSkirt();
    game.soundMan.playDressBtnSound();
  };
  p.onDressBtnUp = function(e) {
    utils.onOutScale(e.target);
    game.girlsMan.loadNextDress();
    game.soundMan.playDressBtnSound();
  };
  p.onNecksBtnUp = function(e) {
    utils.onOutScale(e.target);
    game.girlsMan.loadNextNeck();
    game.soundMan.playDressBtnSound();
  };
  p.onAccessoriesBtnUp = function(e) {
    utils.onOutScale(e.target);
    game.girlsMan.loadNextAccessories();
    game.soundMan.playDressBtnSound();
  };
  p.show = function() {
    azerionIntegrationSDK.sendScreenview(`dressup_interface`);
    azerionIntegrationSDK.sendDesignEvent(`WinxDressUp:PickOutfit`);
    utils.addToParent(cont, fieldContainer);
  };
  p.hide = function() {
    utils.removeFromParent(cont);
  };
  p.updatePosition = function() {
  };
  p.update = function() {
  };
  module.exports = DressUpInterface;
}, {}], 11:[function(require, module, exports) {
  var utils, gameContainer, cont;
  function FadeScreen() {
    this.init();
  }
  var p = FadeScreen.prototype;
  p.init = function() {
    utils = game.utils;
    gameContainer = game.container;
    cont = new createjs.Container;
    utils.createButton(0, 0, 6.2, "blinkbg", utils.doNothing, cont);
    game.intMan.allMenus.push(this);
  };
  p.show = function(functionToCall, showTime, hideTime) {
    showTime = showTime ? showTime : 200;
    hideTime = hideTime ? hideTime : 700;
    utils.addToParent(cont, gameContainer);
    cont.mouseEnabled = true;
    createjs.Tween.removeTweens(cont);
    cont.alpha = 0;
    createjs.Tween.get(cont).to({alpha:1}, showTime).call(functionToCall).call(function() {
      utils.addToParent(cont, gameContainer);
      cont.mouseEnabled = false;
    }).to({alpha:0}, hideTime, createjs.Ease.quadOut).call(utils.removeChildOnTweenComplete);
  };
  p.hide = function() {
    utils.removeFromParent(cont);
  };
  p.updatePosition = function() {
  };
  p.update = function() {
  };
  module.exports = FadeScreen;
}, {}], 12:[function(require, module, exports) {
  var utils, gameContainer, cont, photoFrame, prevBtn, nextBtn, removeBtn;
  function GalleryScreen() {
    this.init();
  }
  var p = GalleryScreen.prototype;
  var quitBtn;
  p.init = function() {
    utils = game.utils;
    gameContainer = game.container;
    cont = new createjs.Container;
    photoFrame = utils.createBitmapFromFile("galleryFrame", -96, 0, 1, cont);
    var marginX = 54;
    var marginY = game.resizeMan.minH - 54;
    quitBtn = utils.createButton(marginX, marginY, .72, "quitbtn", utils.onPressStandartHandler, cont, this.onQuitUp, OBJ_LEFT_POS, OBJ_VERTICAL_ANY_POS, 1);
    removeBtn = utils.createButton(game.resizeMan.minW - marginX, marginY, .72, "removebtn", utils.onPressStandartHandler, cont, this.onRemoveUp, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, 1);
    marginX = 80;
    prevBtn = utils.createButton(marginX, 256, .75, "prevphotobtn", utils.onPressStandartHandler, cont, this.onPreviousPhotoUp, OBJ_LEFT_POS, OBJ_VERTICAL_ANY_POS, 1);
    nextBtn = utils.createButton(game.resizeMan.minW - marginX, 256, .8, "nextphotobtn", utils.onPressStandartHandler, cont, this.onNextPhotoUp, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, 1);
    game.intMan.allMenus.push(this);
    this.currentPhotoIndex = 0;
  };
  p.show = function(isLoadLastPhoto) {
    azerionIntegrationSDK.sendScreenview(`gallery`);
    game.bgMan.setBgByConfig(game.bgMan.bg4Config);
    utils.animateButtonShow(quitBtn, 300, true);
    utils.animateButtonShow(removeBtn, 300, true);
    utils.animateButtonShow(nextBtn, 600, true);
    utils.animateButtonShow(prevBtn, 600, true);
    if (game.storageMan.getPhotosCount() > 0 && isLoadLastPhoto) {
      this.currentPhotoIndex = game.storageMan.getPhotosCount() - 1;
    }
    this.updatePhoto();
    utils.addToParent(cont, gameContainer);
    game.sponsorMan.showWinxLogo();
  };
  p.updateNavigateButtons = function() {
    removeBtn.visible = game.storageMan.getPhotosCount() > 0;
    prevBtn.visible = this.currentPhotoIndex > 0;
    nextBtn.visible = this.currentPhotoIndex < game.storageMan.getPhotosCount() - 1;
  };
  p.onNextPhotoUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.galleryScreen.currentPhotoIndex++;
    game.intMan.galleryScreen.updatePhoto();
    game.intMan.blinkScreen.show();
    game.soundMan.playClickSound();
  };
  p.onPreviousPhotoUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.galleryScreen.currentPhotoIndex--;
    game.intMan.galleryScreen.updatePhoto();
    game.intMan.blinkScreen.show();
    game.soundMan.playClickSound();
  };
  p.updatePhoto = function() {
    this.currentPhotoIndex = Math.max(this.currentPhotoIndex, 0);
    this.currentPhotoIndex = Math.min(this.currentPhotoIndex, game.storageMan.getPhotosCount() - 1);
    if (game.storageMan.getPhotosCount() > 0) {
      var config = game.storageMan.getPhoto(this.currentPhotoIndex);
      game.girlsMan.loadGirlPhoto(config);
    } else {
      game.levelMan.dispose();
    }
    game.intMan.galleryScreen.updateNavigateButtons();
  };
  p.onRemoveUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.galleryScreen.removeCurrentPhoto();
    game.intMan.blinkScreen.show();
    game.soundMan.playClickSound();
  };
  p.removeCurrentPhoto = function() {
    game.storageMan.removePhoto(this.currentPhotoIndex);
    this.currentPhotoIndex--;
    this.updatePhoto();
  };
  p.onQuitUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.fadeScreen.show(function() {
      game.intMan.galleryScreen.hide();
      game.isGamePaused = true;
      azerionIntegrationSDK.showAd('exit_gallery', () => {
        game.soundMan.setMutedByAds(true)
      }, () => {
        game.soundMan.setMutedByAds(false)
        game.levelMan.dispose();
        game.intMan.mainMenu.show();
      });
    });
    game.soundMan.playClickSound();
  };
  p.hide = function() {
    utils.removeFromParent(cont);
  };
  p.updatePosition = function() {
    cont.x = (game.resizeMan.viewportW - game.resizeMan.minW) / 2;
  };
  p.update = function() {
  };
  module.exports = GalleryScreen;
}, {}], 13:[function(require, module, exports) {
  var LocalizableTextField = require("../texts/localizabletextfield");
  var utils, gameContainer, cont;
  function IngameInterface() {
    this.init();
  }
  var p = IngameInterface.prototype;
  p.init = function() {
    utils = game.utils;
    gameContainer = game.container;
    this.cont = cont = new createjs.Container;
    this.quitToMainMenuBtn = utils.createButton(722, 43, .7, "quitbtn", utils.onPressStandartHandler, cont, this.onQuitToMainMenuUp, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, .5);
    this.muteBtn = utils.createButton(640, 43, .7, "musiconbtn", utils.onPressStandartHandler, cont, this.onMuteUp, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, .5);
    this.finishBtn = utils.createButton(710, 455, .7, "finishDressBtn", utils.onPressStandartHandler, cont, this.onFinishUp, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, .5);
    game.intMan.allMenus.push(this);
    this.tutorCont = new createjs.Container;
    this.tutorCont.mouseEnabled = false;
    utils.addToParent(this.tutorCont, cont);
  };
  p.show = function() {
    utils.updateMusicIconFrame(this.muteBtn);
    this.muteBtn.mouseEnabled = this.quitToMainMenuBtn.mouseEnabled = true;
    utils.restoreButtonState(this.muteBtn);
    utils.restoreButtonState(this.quitToMainMenuBtn);
    utils.addToParent(this.muteBtn, cont);
    utils.addToParent(this.quitToMainMenuBtn, cont);
    this.muteBtn.visible = game.soundMan.isAudioSupported;
    utils.addToParent(cont, gameContainer);
    game.sponsorMan.showWinxLogo();
  };
  p.hide = function() {
    utils.removeFromParent(cont);
  };
  p.hideHomeAndSoundBtn = function() {
    this.muteBtn.mouseEnabled = this.quitToMainMenuBtn.mouseEnabled = false;
    utils.animateButtonHide(this.muteBtn, 0, true);
    utils.animateButtonHide(this.quitToMainMenuBtn, 200, true);
  };
  p.updatePosition = function() {
  };
  p.update = function() {
  };
  p.onQuitToMainMenuUp = function(e) {
    utils.onOutScale(e.target);
    game.isGamePaused = true;
    azerionIntegrationSDK.sendOrangeTagEvent('levelCompletion');
    azerionIntegrationSDK.showAd('exit_dressup_interface', () => {
      game.soundMan.setMutedByAds(true)
    }, () => {
      game.soundMan.setMutedByAds(false)
      game.levelMan.dispose();
      game.intMan.mainMenu.show();
      game.intMan.blinkScreen.show();
      game.soundMan.playClickSound();
      game.sponsorMan.endGamifiveSession();
    });
  };
  p.onMuteUp = function(event) {
    utils.onOutScale(event.target);
    game.soundMan.toggleMute();
    utils.updateMusicIconFrame(event.target);
  };
  p.onFinishUp = function(event) {
    utils.onOutScale(event.target);
    if (game.isLevelCompleted || game.isGamePaused) {
      return;
    }
    azerionIntegrationSDK.showAd('complete_outfit_selection', () => {
      game.soundMan.setMutedByAds(true)
    }, () => {
      game.soundMan.setMutedByAds(false);
      game.isGamePaused = true;
      game.isLevelCompleted = true;
      game.girlsMan.saveGirlPhoto();
      game.intMan.galleryScreen.show(true);
      game.intMan.blinkScreen.show(undefined, "blinkbgwhite");
      game.soundMan.playPhotoSound();
      game.soundMan.playCompleteSound();
      game.sponsorMan.endGamifiveSession();
    });
  };
  module.exports = IngameInterface;
}, {"../texts/localizabletextfield":33}], 14:[function(require, module, exports) {
  var utils, gameContainer, cont, menuEase, bg;
  var LEVELS_ON_PAGE = 6;
  function LevelSelectScreen() {
    this.init();
  }
  var p = LevelSelectScreen.prototype;
  var allLevelBtns = [];
  var levelsScreen1;
  p.init = function() {
    utils = game.utils;
    gameContainer = game.container;
    cont = utils.createAutoAlignedCointainer(0, 0, 1, null, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, 1);
    menuEase = createjs.Ease.getElasticOut(1, .35);
    levelsScreen1 = new createjs.Container;
    levelsScreen1.name = "levelsScreen1";
    this.quitBtn = utils.createButton(game.resizeMan.minW / 2, 462, .8, "quitbtn", utils.onPressStandartHandler, cont, this.onQuitUp);
    this.createLevelsButtons();
    game.intMan.allMenus.push(this);
  };
  p.levelsBtnCreateParams = {left:{val:85, min:0, max:200}, spaceX:{val:119, min:0, max:200}, top:{val:250, min:200, max:400}, scale:{val:.85, min:0, max:3}, spaceY:{val:115, min:0, max:200}, txtScale:{val:.88, min:0, max:3}, openedLevels:{val:game.DEBUG_OPENED_LEVELS, min:0, max:game.LEVELS_NUM}};
  var levelsIconsMap = [0, 4, 1, 3, 2, 5];
  p.createLevelsButtons = function() {
    for (var i = 0;i < game.LEVELS_NUM;i++) {
      var p = this.levelsBtnCreateParams;
      var cell = i;
      var btnCont = new createjs.Container;
      utils.addToParent(btnCont, levelsScreen1);
      btnCont.x = p.left.val + cell * p.spaceX.val;
      btnCont.y = p.top.val;
      var btn = utils.createButton(0, 0, p.scale.val, "charSelectIcons", this.onLevelBtnPress, btnCont, this.onLevelBtnUp);
      btn.currentAnimationFrame = i;
      btnCont.btnSprite = btn;
      btn.levelNum = levelsIconsMap[i];
      btn.cont = btnCont;
      allLevelBtns.push(btnCont);
      utils.rememberDefaultParames(btnCont);
    }
  };
  p.deleteLevelsBtn = function() {
    while (allLevelBtns.length > 0) {
      var lb = allLevelBtns.pop();
      utils.removeFromParent(lb);
    }
  };
  p.updateLevelsButtons = function() {
  };
  p.animateLevelsButtons = function(startIndex) {
    for (var i = startIndex;i < startIndex + LEVELS_ON_PAGE;i++) {
      var btn = allLevelBtns[i];
      var onPageIndex = i - startIndex;
      utils.animateButtonShow4(btn.btnSprite, onPageIndex * 100 + 200);
    }
  };
  p.onLevelBtnPress = function(event) {
    utils.onHoverScale(event.target.cont, 1.05);
    var b = event.target;
  };
  p.onLevelBtnUp = function(event) {
    utils.onOutScale(event.target.cont);
    var b = event.target;
    azerionIntegrationSDK.sendOrangeTagEvent('levelStart');
    game.intMan.fadeScreen.show(function() {
      game.intMan.levelSelectScreen.hide();
      game.levelMan.loadLevel(b.levelNum);
      game.sponsorMan.startGamifiveSession();
    });
    game.soundMan.playClickSound();
  };
  p.onQuitUp = function(event) {
    utils.onOutScale(event.target);
    azerionIntegrationSDK.showAd('exit_level_select', () => {
      game.soundMan.setMutedByAds(true)
    }, () => {
      game.soundMan.setMutedByAds(false);
      game.intMan.levelSelectScreen.quitToMainMenu();
    });
    game.soundMan.playClickSound();
  };
  p.show = function() {
    azerionIntegrationSDK.sendScreenview(`level_select`);
    game.isGamePaused = true;
    utils.addToParent(cont, gameContainer);
    game.ingameInt.hide();
    game.intMan.levelWinScren.hide();
    game.bgMan.setBgByConfig(game.bgMan.bg2Config);
    this.updateLevelsButtons();
    this.animateLevelsButtons(0);
    if (!levelsScreen1.parent) {
      cont.addChild(levelsScreen1);
    }
    levelsScreen1.x = 0;
    levelsScreen1.alpha = 1;
    game.soundMan.startCongrats();
  };
  p.quitToMainMenu = function() {
    this.hide();
    game.intMan.mainMenu.show();
    game.intMan.blinkScreen.show();
  };
  p.hide = function() {
    utils.removeFromParent(cont);
  };
  p.updatePosition = function() {
  };
  p.update = function() {
  };
  module.exports = LevelSelectScreen;
}, {}], 15:[function(require, module, exports) {
  var utils, gameContainer, cont, animCont, menuEase, star1, star2, star3, bg;
  var starsNum = 0;
  function LevelWinScreen() {
    this.init();
  }
  var p = LevelWinScreen.prototype;
  p.init = function() {
    utils = game.utils;
    gameContainer = game.container;
    cont = utils.createAutoAlignedCointainer(game.resizeMan.minW / 2, game.resizeMan.minH / 2, 1, null, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, 1);
    menuEase = createjs.Ease.getElasticOut(1, .35);
    animCont = new createjs.Container;
    utils.addToParent(animCont, cont);
    bg = utils.createButton(0, 30, .8, "lvlCompleteBg", null, animCont);
    star1 = utils.createButton(bg.x - 90, bg.y - 153, 1, "completestar");
    star1.rotation = -28;
    star2 = utils.createButton(bg.x - 3, bg.y - 171, 1, "completestar");
    star3 = utils.createButton(bg.x + 84, bg.y - 154, 1, "completestar");
    star3.rotation = 28;
    this.nextBtn = utils.createButton(77, 180, .75, "nextbtn", utils.onPressStandartHandler, animCont, this.onNextUp);
    this.quitBtn = utils.createButton(-88, 180, .72, "quitbtn", utils.onPressStandartHandler, animCont, this.onQuitUp);
    game.intMan.allMenus.push(this);
  };
  p.onNextUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.levelWinScren.loadNextLevel();
    game.soundMan.playClickSound();
  };
  p.onQuitUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.levelWinScren.quitToMainMenu();
    game.soundMan.playClickSound();
  };
  p.show = function(stars) {
    azerionIntegrationSDK.sendOrangeTagEvent('levelCompletion');
    azerionIntegrationSDK.sendScreenview(`level_win`);
    azerionIntegrationSDK.sendDesignEvent(`WinxDressUp:CompleteOutfit`);
    utils.addToParent(cont, gameContainer);
    game.ingameInt.hideHomeAndSoundBtn();
    starsNum = stars;
    utils.removeFromParent(star1);
    utils.removeFromParent(star2);
    utils.removeFromParent(star3);
    var fieldHideWaitTime = 700;
    game.intMan.animatedHideGameField(fieldHideWaitTime);
    createjs.Tween.removeTweens(animCont);
    var containerShowTime = 1300;
    animCont.y = 500;
    createjs.Tween.get(animCont).wait(fieldHideWaitTime + 400).to({y:0}, containerShowTime, menuEase).call(this.showStars, [], this);
    utils.animateButtonShow(this.nextBtn, containerShowTime + 300);
    utils.animateButtonShow(this.quitBtn, containerShowTime + 600);
    game.soundMan.startCongrats();
  };
  p.showStars = function(event) {
    animateStar(star1, 20, 1, "star1");
    if (starsNum >= 2) {
      animateStar(star2, 800, 1, "star2");
    }
    if (starsNum >= 3) {
      animateStar(star3, 1600, 1, "star3");
    }
  };
  function animateStar(star, delay, scale, soundName) {
    utils.addToParent(star, animCont);
    star.alpha = 0;
    star.scaleX = star.scaleY = 2;
    createjs.Tween.get(star, {override:true}).wait(delay).to({alpha:1, scaleX:scale, scaleY:scale}, 700, createjs.Ease.bounceOut).call(function() {
      var posX = star.x;
      var posY = star.y + 3;
      if (star === star1) {
        posX += 5;
      } else {
        if (star === star2) {
          posX += 2;
        } else {
        }
      }
      game.effectsMan.launchEffect("effect1", posX, posY, 1.4, 0, star.parent, null, 0, 18);
    });
    createjs.Tween.get({x:100}).wait(delay + 200).call(function() {
      if (game.isLevelCompleted) {
        game.soundMan.playSound(soundName);
      }
    });
  }
  p.loadNextLevel = function() {
    this.hide();
    game.levelMan.currentLevel++;
    if (game.levelMan.currentLevel >= game.LEVELS_NUM || game.IS_ALL_LEVELS_OPENED && game.levelMan.currentLevel >= game.DEBUG_OPENED_LEVELS) {
      game.intMan.mainMenu.show();
      game.intMan.blinkScreen.show();
      return;
    }
    game.intMan.blinkScreen.show(500);
    game.levelMan.loadLevel(game.levelMan.currentLevel);
  };
  p.quitToMainMenu = function() {
    this.hide();
    game.levelMan.dispose();
    game.intMan.mainMenu.show();
    game.intMan.blinkScreen.show();
  };
  p.hide = function() {
    utils.removeFromParent(cont);
    createjs.Tween.removeTweens(star1);
    createjs.Tween.removeTweens(star2);
    createjs.Tween.removeTweens(star3);
    createjs.Tween.removeTweens(animCont);
  };
  p.updatePosition = function() {
  };
  p.update = function() {
  };
  module.exports = LevelWinScreen;
}, {}], 16:[function(require, module, exports) {
  var LocalizableTextField = require("../texts/localizabletextfield");
  var utils, gameContainer;
  var cont;
  var isNeedMoreGames = true;
  function MainMenu() {
    gameContainer = game.container;
    this.init();
  }
  var p = MainMenu.prototype;
  p.init = function() {
    utils = game.utils;
    cont = new createjs.Container;
    this.startCont = new createjs.Container;
    var logoCont = this.logoCont = new createjs.Container;
    utils.setSpritePosAndAngle(logoCont, 504, 0);
    utils.rememberDefaultParames(logoCont, OBJ_HORIZ_ANY_POS, OBJ_VERTICAL_ANY_POS, 1);
    utils.addToParent(logoCont, cont);
    var margin = 0;
    var logoTextField = new LocalizableTextField("LogoTitle", 0, 120 + margin, 1, logoCont);
    new LocalizableTextField("LogoAdditional", 0, 188 + margin, 1, logoCont);
    isNeedMoreGames = game.TYPE === game.B_TYPE;
    this.playBtn = utils.createButton(504, 330, .8, "playbtnup", utils.onPressStandartHandler, this.startCont, this.onPlayUp);
    this.moreGamesBtn = utils.createButton(640, 330, .8, "moregamesbtn", utils.onPressStandartHandler, this.startCont, this.onMoreGamesUp);
    this.galleryBtn = utils.createButton(368, 330, .8, "galleryBtn", utils.onPressStandartHandler, this.startCont, this.onGalleryUp);
    this.musicBtn = utils.createButton(722, 43, .72, "musiconbtn", utils.onPressStandartHandler, this.startCont, this.onMainMenuMuteUp, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, 1);
    if (isNeedMoreGames) {
      this.creditsBtn = utils.createButton(722, 467, .72, "creditsbtn", utils.onPressStandartHandler, this.startCont, this.onCreditsUp, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, 1);
    } else {
      this.creditsBtn = utils.createButton(640, 330, .8, "creditsbtn", utils.onPressStandartHandler, this.startCont, this.onCreditsUp);
    }
    this.langSelectBtn = utils.createButton(43, 467, .72, "langSelectBtn", utils.onPressStandartHandler, this.startCont, this.onLangSelectPressUp, OBJ_LEFT_POS, OBJ_VERTICAL_ANY_POS, 1);
    if (!game.soundMan.isAudioSupported) {
      this.musicBtn.visible = false;
    }
    game.intMan.allMenus.push(this);
    this.createMainMenuTweens();
  };
  p.onLangSelectPressUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.selectLangMenu.showSelectLangWin();
    game.soundMan.startBgMusic();
    game.soundMan.playClickSound();
  };
  p.show = function() {
    azerionIntegrationSDK.sendScreenview(`main_menu`);
    game.isGamePaused = true;
    utils.addToParent(cont, gameContainer);
    utils.addToParent(this.startCont, cont);
    game.ingameInt.hide();
    game.intMan.levelWinScren.hide();
    game.bgMan.setBgByConfig(game.bgMan.menuBgConfig);
    utils.updateMusicIconFrame(this.musicBtn);
    this.musicBtn.visible = game.soundMan.isAudioSupported;
    this.moreGamesBtn.visible = isNeedMoreGames;
    this.langSelectBtn.visible = game.TYPE === game.B_TYPE && game.isLangSelectBtnVisible;
    var additWait = 0;
    if (isNeedMoreGames) {
      utils.animateButtonShow(this.creditsBtn, 300 + additWait, true);
      utils.animateButtonShow(this.musicBtn, 500 + additWait, true);
      utils.animateButtonShow(this.langSelectBtn, 700 + additWait, true);
      utils.animateButtonShow(this.galleryBtn, 900 + additWait, true);
      utils.animateButtonShow(this.moreGamesBtn, 900 + additWait, true);
    } else {
      utils.animateButtonShow(this.musicBtn, 300 + additWait, true);
      utils.animateButtonShow(this.langSelectBtn, 300 + additWait, true);
      utils.animateButtonShow(this.creditsBtn, 700 + additWait, true);
      utils.animateButtonShow(this.galleryBtn, 700 + additWait, true);
    }
    game.sponsorMan.showWinxLogo();
  };
  p.createMainMenuTweens = function() {
    var ease = createjs.Ease.sineInOut;
    createjs.Tween.removeTweens(this.playBtn);
    this.playBtn.scaleX = .85;
    this.playBtn.scaleY = .95;
    createjs.Tween.get(this.playBtn, {override:true, loop:true}).to({scaleX:.95, scaleY:.85}, 700, ease).to({scaleX:.85, scaleY:.95}, 1E3, ease);
  };
  p.onPlayUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.fadeScreen.show(function() {
      game.intMan.levelSelectScreen.show();
      game.intMan.mainMenu.hide();
    });
    game.soundMan.startBgMusic();
    game.soundMan.playClickSound();
  };
  p.onCreditsUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.fadeScreen.show(function() {
      game.intMan.mainMenu.hide();
      game.intMan.creditsScreen.show();
    });
    game.soundMan.startBgMusic();
    game.soundMan.playClickSound();
  };
  p.onGalleryUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.fadeScreen.show(function() {
      game.intMan.mainMenu.hide();
      game.intMan.galleryScreen.show();
    });
    game.soundMan.startBgMusic();
    game.soundMan.playClickSound();
  };
  p.onMoreGamesUp = function(event) {
    utils.onOutScale(event.target);
    game.sponsorMan.onGamifiveMoreGamesClick(event);
    game.soundMan.playClickSound();
  };
  p.onContinueUp = function(event) {
    utils.onOutScale(event.target);
  };
  p.onMainMenuMuteUp = function(event) {
    utils.onOutScale(event.target);
    game.soundMan.toggleMute();
    utils.updateMusicIconFrame(event.target);
  };
  p.hide = function() {
    utils.removeFromParent(cont);
  };
  p.updatePosition = function() {
    cont.x = (game.resizeMan.viewportW - game.resizeMan.minW) / 2;
  };
  p.update = function() {
  };
  module.exports = MainMenu;
}, {"../texts/localizabletextfield":33}], 17:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var textHelper = require("../texts/texthelper");
  var selectCont, galleryBackBtn, galleryNextBtn, galleryQuitBtn, pagesField;
  var allFlags = [];
  function SelectLanguageMenu() {
    this.init();
  }
  var p = SelectLanguageMenu.prototype;
  p.init = function() {
    var cont = selectCont = utils.createAutoAlignedCointainer(game.resizeMan.minW / 2, 0, 1, null, OBJ_RIGHT_POS, OBJ_VERTICAL_ANY_POS, 1);
    var tintBg = utils.createButton(-(game.resizeMan.maxW - game.resizeMan.minW) / 2 - game.resizeMan.minW / 2, 0, 6.5, "blackBg", utils.doNothing, cont, null);
    tintBg.cursor = null;
    tintBg.alpha = .5;
    var langBg = utils.createButton(0, game.resizeMan.minH / 2, 1.07, "langSelectBg", utils.doNothing, cont, null);
    galleryQuitBtn = utils.createButton(0, 370, 1, "backBtn2", utils.onPressStandartHandler, cont, this.onQuitUp);
    this.createLangSelectBtn("en", 0, 0);
    this.createLangSelectBtn("es", 1, 0);
    this.createLangSelectBtn("fr", 2, 0);
    this.createLangSelectBtn("pt", 3, 0);
    this.createLangSelectBtn("it", 0, 1);
    this.createLangSelectBtn("de", 1, 1);
    this.createLangSelectBtn("tr", 2, 1);
    this.createLangSelectBtn("ru", 3, 1);
  };
  p.createLangSelectBtn = function(lang, xIndex, yIndex) {
    var marginX = 120;
    var posX = -180 + xIndex * marginX;
    var btn = utils.createButton(posX, 140 + yIndex * 110, .9, "flag_" + lang, this.onFlagDown, selectCont, this.onFlagUp);
    btn.lang = lang;
    utils.addToArray(allFlags, btn);
  };
  p.onFlagDown = function(event) {
    utils.onHoverScale(event.target, 1.05);
  };
  p.onFlagUp = function(event) {
    utils.onOutScale(event.target);
    var lang = event.target.lang;
    textHelper.setLang(lang);
    game.intMan.selectLangMenu.hideWin();
    game.intMan.blinkScreen.show();
    game.soundMan.playClickSound();
  };
  p.onQuitUp = function(event) {
    utils.onOutScale(event.target);
    game.intMan.selectLangMenu.hideWin();
    game.soundMan.playClickSound();
  };
  p.showSelectLangWin = function(waitTime) {
    utils.addToParent(selectCont, game.container);
    selectCont.alpha = 0;
    utils.animateAlpha(selectCont, 1, 150, true);
    for (var i = 0;i < allFlags.length;i++) {
      this.animateBtn(allFlags[i], i);
    }
    utils.animateButtonShow(galleryQuitBtn, 900, true);
  };
  p.animateBtn = function(btn, index) {
    utils.animateButtonShow2(btn, 100 + 100 * index, false);
  };
  p.hideWin = function() {
    createjs.Tween.get(selectCont).to({alpha:0}, 150).call(utils.removeChildOnTweenComplete);
  };
  module.exports = SelectLanguageMenu;
}, {"../texts/texthelper":34, "../utils/utils":36}], 18:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var BgChar = require("../characters/bgchar");
  var allBgs = [];
  var allInGameBgs = [];
  var allBgContainer;
  var BG_SCALE = 1;
  function BgManager() {
    this.menuBgConfig = {entities:[]};
    this.bg2Config = {entities:[]};
    this.bg3Config = {entities:[]};
    this.bg4Config = {entities:[]};
  }
  var p = BgManager.prototype;
  p.addBgsToManifest = function() {
    game.preloadMan.addToManifest({src:HD_QUALITY_IMG_PATH + ".png", id:"zoespritesheet"});
    game.preloadMan.addToManifest({src:HD_DRESS_IMG_PATH + ".png", id:"dressspritesheet"});
    game.preloadMan.addToManifest({src:HD_GIRLS_IMG_PATH + ".png", id:"girlsspritesheet"});
    game.preloadMan.addToManifest({src:"bg1.jpg", id:"bg1"});
    game.preloadMan.addToManifest({src:"bg2.jpg", id:"bg2"});
    game.preloadMan.addToManifest({src:"bg3.jpg", id:"bg3"});
    game.preloadMan.addToManifest({src:"gallerybg.png", id:"galleryFrame"});
    game.preloadMan.addToManifest({src:HD_QUALITY_IMG_PATH + ".json", id:"anim_json"});
    game.preloadMan.addToManifest({src:HD_DRESS_IMG_PATH + ".json", id:"dress_json"});
    game.preloadMan.addToManifest({src:HD_GIRLS_IMG_PATH + ".json", id:"girls_json"});
  };
  var skyBB, defaultBB, holm2BB, mountainsBB;
  p.createBG = function() {
    allBgContainer = new createjs.Container;
    skyBB = new game.Rectangle(0, 0, 853, 375);
    defaultBB = new game.Rectangle(0, 0, 378, 265);
    holm2BB = new game.Rectangle(0, 0, 237, 166);
    mountainsBB = new game.Rectangle(0, 0, 745, 375);
    createBgForLevel1();
    this.menuBgConfig.entities.push(new BgChar("bg1", 0, 0, defaultBB, allBgContainer, 1, 1, false));
    this.bg2Config.entities.push(new BgChar("bg2", 0, 0, defaultBB, allBgContainer, 1, 1, false));
    this.bg3Config.entities.push(new BgChar("bg3", 0, 0, defaultBB, allBgContainer, 1, 1, false));
    this.bg4Config.entities.push(new BgChar("bg3", 210, 42, defaultBB, allBgContainer, .83, .83, false));
    allBgContainer.mouseEnabled = false;
    allBgContainer.mouseChildren = false;
    game.container.addChild(allBgContainer);
  };
  p.addToAllBgs = function(bg) {
  };
  function createBgForLevel1() {
    var levelConfig = {entities:[]};
    levelConfig.entities.push(new BgChar("bg2", 0, 0, skyBB, allBgContainer, 1.25, 1.25, true));
    allBgsConfigs.push(levelConfig);
  }
  p.removeAllBgs = function() {
    allBgContainer.removeAllChildren();
  };
  var allBgsConfigs = [];
  p.setBgByConfig = function(configObj) {
    this.removeAllBgs();
    var levelConfig = configObj;
    var len = levelConfig.entities.length;
    for (var i = 0;i < len;i++) {
      levelConfig.entities[i].addToParent();
    }
  };
  p.updateBgPositions = function() {
    allBgContainer.x = (game.resizeMan.viewportW - game.resizeMan.maxW) / 2;
  };
  module.exports = BgManager;
}, {"../characters/bgchar":2, "../utils/utils":36}], 19:[function(require, module, exports) {
  var utils;
  var allEffects;
  var currentChar = null;
  function EffectsManager() {
    this.init();
  }
  var p = EffectsManager.prototype;
  p.init = function() {
    utils = game.utils;
    allEffects = game.allEffects = {entities:[]};
  };
  p.launchEffect = function(frameName, x, y, scale, rotation, parent, objToAddMarginFrom, waitFrames, framesBeforeHide) {
    var e = game.poolMan.createEffectChar(frameName, parent ? parent : game.container, objToAddMarginFrom, x, y, scale, scale, rotation);
    e.setStartParams(waitFrames, framesBeforeHide);
    return e;
  };
  p.update = function() {
    for (var i = allEffects.entities.length - 1;i >= 0;--i) {
      currentChar = allEffects.entities[i];
      currentChar.updateLogic();
    }
  };
  module.exports = EffectsManager;
}, {}], 20:[function(require, module, exports) {
  var girlCont, utils, spriteNames, wavesNumRandomizer, waitWavesRandomizer;
  var DEFAULT_GIRL_SCALE = .82;
  var PHOTO_GIRL_SCALE = .67;
  var DEFAULT_GIRL_CONT_X = 215;
  var DEFAULT_GIRL_CONT_Y = 501;
  var PHOTO_GIRL_CONT_X = 372;
  var PHOTO_GIRL_CONT_Y = 452;
  function GirlsManager() {
  }
  var p = GirlsManager.prototype;
  p.init = function() {
    utils = game.utils;
    this.createSpriteNamesConfig();
    this.parseSprites(game.dressCFG);
    this.parseSprites(game.girlsCFG);
    wavesNumRandomizer = new Chance;
    waitWavesRandomizer = new Chance;
    this.cacheCounter = 0;
    girlCont = this.girlCont = new createjs.Container;
    this.ticks = 0;
    this.contScale = DEFAULT_GIRL_SCALE;
    girlCont.regX = 140 / DEFAULT_GIRL_SCALE;
    girlCont.regY = 510 / DEFAULT_GIRL_SCALE;
    this.wingsCont = new createjs.Container;
    this.wingSprite1 = this.createLayer(game.girlsSS);
    this.wingSprite2 = this.createLayer(game.girlsSS);
    var wingsScale = 1;
    this.wingSprite1.scaleX = this.wingSprite1.scaleY = wingsScale;
    this.wingSprite2.scaleX = -wingsScale;
    this.wingSprite2.scaleY = wingsScale;
    this.wingSprite2.x = 373;
    utils.addToParent(this.wingSprite1, this.wingsCont);
    utils.addToParent(this.wingSprite2, this.wingsCont);
    utils.addToParent(this.wingsCont, this.girlCont);
    this.wingsCont.regX = 186;
    this.wingsCont.x = 186;
    this.bodySprite = this.createLayer(game.girlsSS);
    this.tightSprite = this.createLayer();
    this.shoesSprite = this.createLayer();
    this.dressBottomSprite = this.createLayer();
    this.skirtSprite = this.createLayer();
    this.dressTopSprite = this.createLayer();
    this.neckSprite = this.createLayer();
    this.uniqueSprite = this.createLayer();
    this.frontSprite = this.createLayer();
    this.bodyIndex = 0;
    this.resetIndexes();
    this.waitTimer = 0;
    this.isPhotoState = false;
    this.uniqueConfig = {};
    this.allDresses = {entities:[]};
    var self = this;
    spriteNames.dressBottom.sprites.forEach(function(name) {
      self.allDresses.entities.push({name:name, isBottom:true});
    });
    spriteNames.dressTop.sprites.forEach(function(name) {
      self.allDresses.entities.push({name:name, isBottom:false});
    });
  };
  p.createLayer = function(ss) {
    return utils.createButton(0, 0, 1, "", null, girlCont, null, undefined, undefined, undefined, ss ? ss : game.dressSS);
  };
  p.resetIndexes = function() {
    this.wingsIndex = 0;
    this.tightIndex = 0;
    this.shoesIndex = 0;
    this.dressIndex = 0;
    this.skirtIndex = 0;
    this.neckIndex = 0;
    this.uniqueIndex = 0;
  };
  p.loadGirl = function(girlIndex) {
    this.contScale = DEFAULT_GIRL_SCALE;
    this.girlContX = DEFAULT_GIRL_CONT_X;
    this.girlContY = DEFAULT_GIRL_CONT_Y;
    this.updateGirlCont();
    this.frontSprite.visible = false;
    this.resetIndexes();
    switch(girlIndex) {
      case game.BLOOM:
        this.bodyIndex = 0;
        this.uniqueConfig = spriteNames.bloomUnique;
        break;
      case game.STELLA:
        this.bodyIndex = 4;
        this.uniqueConfig = spriteNames.stellaUnique;
        break;
      case game.AISHA:
        this.bodyIndex = 3;
        this.uniqueConfig = spriteNames.aishaUnique;
        break;
      case game.MUSA:
        this.bodyIndex = 2;
        this.uniqueConfig = spriteNames.musaUnique;
        break;
      case game.FLORA:
        this.bodyIndex = 1;
        this.uniqueConfig = spriteNames.floraUnique;
        break;
      case game.TECHNA:
        this.frontSprite.visible = true;
        this.frontSprite.gotoAndStop(spriteNames.front.sprites[0]);
        this.bodyIndex = 5;
        this.uniqueConfig = spriteNames.technaUnique;
        break;
    }
    this.updateWings();
    this.updateBody();
    this.updateTight();
    this.updateShoes();
    this.updateDress();
    this.updateSkirt();
    this.updateNeck();
    this.updateUnique();
    utils.addToParent(girlCont, game.fieldContainer);
    if (!this.isPhotoState) {
      this.restartWingsAnimation();
    }
    game.sponsorMan.showWinxLogo();
    this.updateCache();
  };
  p.toggleShadows = function() {
    if (this.bodySprite.shadow) {
      this.bodySprite.shadow = this.wingSprite1.shadow = this.wingSprite2.shadow = null;
    } else {
      this.bodySprite.shadow = new createjs.Shadow("#222", 0, 0, 2);
      this.wingSprite1.shadow = this.wingSprite2.shadow = new createjs.Shadow("#000", 0, 0, 5);
    }
    this.updateCache();
  };
  p.updateCache = function() {
    if (girlCont.cacheID) {
      girlCont.updateCache();
    }
  };
  p.updateCacheWithCounter = function() {
    this.cacheCounter = 10;
  };
  p.updateBody = function() {
    this.bodySprite.gotoAndStop(spriteNames.bodies.sprites[this.bodyIndex]);
  };
  p.updateWings = function() {
    if (this.wingsIndex > spriteNames.wings.sprites.length) {
      this.wingsIndex = 0;
    }
    this.wingSprite1.visible = this.wingsIndex !== 0;
    this.wingSprite2.visible = this.wingsIndex !== 0;
    if (this.wingsIndex === 0) {
      return;
    }
    this.wingSprite1.gotoAndStop(spriteNames.wings.sprites[this.wingsIndex - 1]);
    this.wingSprite2.gotoAndStop(spriteNames.wings.sprites[this.wingsIndex - 1]);
  };
  p.updateTight = function() {
    if (this.tightIndex > spriteNames.tights.sprites.length) {
      this.tightIndex = 0;
    }
    this.tightSprite.visible = this.tightIndex !== 0;
    if (this.tightIndex === 0) {
      return;
    }
    this.tightSprite.gotoAndStop(spriteNames.tights.sprites[this.tightIndex - 1]);
  };
  p.updateSkirt = function() {
    if (this.skirtIndex > spriteNames.skirts.sprites.length) {
      this.skirtIndex = 0;
    }
    this.skirtSprite.visible = this.skirtIndex !== 0;
    if (this.skirtIndex === 0) {
      return;
    }
    this.skirtSprite.gotoAndStop(spriteNames.skirts.sprites[this.skirtIndex - 1]);
  };
  p.updateNeck = function() {
    if (this.neckIndex > spriteNames.neck.sprites.length) {
      this.neckIndex = 0;
    }
    this.neckSprite.visible = this.neckIndex !== 0;
    if (this.neckIndex === 0) {
      return;
    }
    this.neckSprite.gotoAndStop(spriteNames.neck.sprites[this.neckIndex - 1]);
  };
  p.updateShoes = function() {
    if (this.shoesIndex > spriteNames.shoes.sprites.length) {
      this.shoesIndex = 0;
    }
    this.shoesSprite.visible = this.shoesIndex !== 0;
    if (this.shoesIndex === 0) {
      return;
    }
    this.shoesSprite.gotoAndStop(spriteNames.shoes.sprites[this.shoesIndex - 1]);
  };
  p.updateDress = function() {
    if (this.dressIndex > this.allDresses.entities.length) {
      this.dressIndex = 0;
    }
    if (this.dressIndex === 0) {
      this.dressBottomSprite.visible = false;
      this.dressTopSprite.visible = false;
      return;
    }
    var dressConf = this.allDresses.entities[this.dressIndex - 1];
    this.dressBottomSprite.visible = dressConf.isBottom;
    this.dressTopSprite.visible = !dressConf.isBottom;
    this.dressBottomSprite.gotoAndStop(dressConf.name);
    this.dressTopSprite.gotoAndStop(dressConf.name);
  };
  p.updateUnique = function() {
    if (this.uniqueIndex > this.uniqueConfig.sprites.length) {
      this.uniqueIndex = 0;
    }
    this.uniqueSprite.visible = this.uniqueIndex !== 0;
    if (this.uniqueIndex === 0) {
      return;
    }
    this.uniqueSprite.gotoAndStop(this.uniqueConfig.sprites[this.uniqueIndex - 1]);
  };
  p.loadNextShoes = function() {
    this.shoesIndex++;
    this.updateShoes();
    this.updateCache();
  };
  p.loadNextTight = function() {
    this.tightIndex++;
    this.updateTight();
    this.updateCache();
  };
  p.loadNextWings = function() {
    this.wingsIndex++;
    this.updateWings();
    this.updateCache();
  };
  p.loadNextSkirt = function() {
    this.skirtIndex++;
    this.updateSkirt();
    this.updateCache();
  };
  p.loadNextDress = function() {
    this.dressIndex++;
    this.updateDress();
    this.updateCache();
  };
  p.loadNextNeck = function() {
    this.neckIndex++;
    this.updateNeck();
    this.updateCache();
  };
  p.loadNextAccessories = function() {
    this.uniqueIndex++;
    this.updateUnique();
    this.updateCache();
  };
  p.createSpriteNamesConfig = function() {
    spriteNames = game.girlsSpriteNames = {front:{prefix:"0000s", sprites:[]}, musaUnique:{prefix:"0001s", sprites:[]}, floraUnique:{prefix:"0002s", sprites:[]}, bloomUnique:{prefix:"0003s", sprites:[]}, aishaUnique:{prefix:"0004s", sprites:[]}, stellaUnique:{prefix:"0005s", sprites:[]}, technaUnique:{prefix:"0006s", sprites:[]}, neck:{prefix:"0007s", sprites:[]}, shoes:{prefix:"0008s", sprites:[]}, tights:{prefix:"0009s", sprites:[]}, dressTop:{prefix:"0010s", sprites:[]}, skirts:{prefix:"0011s",
    sprites:[]}, belt:{prefix:"0012s", sprites:[]}, dressBottom:{prefix:"0013s", sprites:[]}, bodies:{prefix:"0014s", sprites:[]}, wings:{prefix:"0015s", sprites:[]}};
  };
  p.parseSprites = function(cfg) {
    var namesConfig = game.girlsSpriteNames;
    var name;
    for (name in cfg.animations) {
      if (!name) {
        continue;
      }
      if (!name || !cfg.animations.hasOwnProperty(name)) {
        continue;
      }
      var splittedNames = name.split("_");
      var prefix = splittedNames[1];
      var collection;
      for (collection in namesConfig) {
        if (!collection || !namesConfig.hasOwnProperty(collection)) {
          continue;
        }
        var collPrefix = namesConfig[collection].prefix;
        if (prefix === collPrefix) {
          namesConfig[collection].sprites.push(name);
        }
      }
    }
    for (collection in namesConfig) {
      if (!collection || !namesConfig.hasOwnProperty(collection)) {
        continue;
      }
      namesConfig[collection].sprites.sort(function(a, b) {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      });
    }
  };
  p.saveGirlPhoto = function() {
    var girlConfig = [game.levelMan.currentLevel, this.wingsIndex, this.tightIndex, this.shoesIndex, this.dressIndex, this.skirtIndex, this.neckIndex, this.uniqueIndex];
    game.storageMan.addNewPhoto(girlConfig);
  };
  p.loadGirlPhoto = function(girlConfig) {
    this.isPhotoState = true;
    var level = girlConfig[0];
    game.levelMan.loadLevelForPhoto(level);
    this.wingsIndex = girlConfig[1];
    this.tightIndex = girlConfig[2];
    this.shoesIndex = girlConfig[3];
    this.dressIndex = girlConfig[4];
    this.skirtIndex = girlConfig[5];
    this.neckIndex = girlConfig[6];
    this.uniqueIndex = girlConfig[7];
    this.updateWings();
    this.updateBody();
    this.updateTight();
    this.updateShoes();
    this.updateDress();
    this.updateSkirt();
    this.updateNeck();
    this.updateUnique();
    this.contScale = PHOTO_GIRL_SCALE;
    this.girlContX = PHOTO_GIRL_CONT_X;
    this.girlContY = PHOTO_GIRL_CONT_Y;
    this.updateGirlCont();
    this.resetWings();
  };
  p.updateGirlCont = function() {
    utils.setSpriteScale(girlCont, this.contScale);
    this.girlCont.x = this.girlContX;
    this.girlCont.y = this.girlContY;
  };
  var ONE_WAVE_TIME = 120;
  var WINGS_WAVE_SCALE = .5;
  var WINGS_MAX_TOP = -20;
  p.update = function() {
    this.cacheCounter--;
    if (this.cacheCounter >= 0) {
      this.updateCache();
    }
  };
  p.restartWingsAnimation = function() {
    this.resetWings();
    var totalWaves = wavesNumRandomizer.integer({min:2, max:3});
    this.waitTimer = 3300 + waitWavesRandomizer.integer({min:0, max:2900});
    this.startWingsWaves(totalWaves);
  };
  p.resetWings = function() {
    createjs.Tween.removeTweens(this.wingsCont);
    this.wingsCont.y = 0;
    this.wingsCont.scaleX = 1;
  };
  p.startWingsWaves = function(totalWaves) {
    createjs.Tween.removeTweens(this.wingsCont);
    if (this.isPhotoState) {
      return;
    }
    if (totalWaves === 3) {
      createjs.Tween.get(this.wingsCont).to({scaleX:WINGS_WAVE_SCALE, y:WINGS_MAX_TOP}, ONE_WAVE_TIME).to({scaleX:1, y:0}, ONE_WAVE_TIME).to({scaleX:WINGS_WAVE_SCALE, y:WINGS_MAX_TOP}, ONE_WAVE_TIME).to({scaleX:1, y:0}, ONE_WAVE_TIME).to({scaleX:WINGS_WAVE_SCALE, y:WINGS_MAX_TOP}, ONE_WAVE_TIME).to({scaleX:1, y:0}, ONE_WAVE_TIME).wait(this.waitTimer).call(function() {
        game.girlsMan.restartWingsAnimation();
      });
    } else {
      createjs.Tween.get(this.wingsCont).to({scaleX:WINGS_WAVE_SCALE, y:WINGS_MAX_TOP}, ONE_WAVE_TIME).to({scaleX:1, y:0}, ONE_WAVE_TIME).to({scaleX:WINGS_WAVE_SCALE, y:WINGS_MAX_TOP}, ONE_WAVE_TIME).to({scaleX:1, y:0}, ONE_WAVE_TIME).wait(this.waitTimer).call(function() {
        game.girlsMan.restartWingsAnimation();
      });
    }
  };
  module.exports = GirlsManager;
}, {}], 21:[function(require, module, exports) {
  game.isMouseDown = false;
  game.MOUSE_DOWN_EVENT = 1;
  game.MOUSE_MOVE_EVENT = 2;
  game.MOUSE_UP_EVENT = 3;
  function InputManager() {
  }
  var p = InputManager.prototype;
  p.init = function() {
    game.stage.addEventListener("stagemousedown", onStageMouseDown);
    game.stage.addEventListener("stagemousemove", onStageMouseMove);
    game.stage.addEventListener("stagemouseup", onStageMouseUp);
    if (game.utils.isDefaultAndroid()) {
      game.stage.enableDOMEvents(false);
    }
  };
  function onStageMouseDown(event) {
    if (game.isGamePaused) {
      return;
    }
    var posX = event.stageX * game.resizeMan.zoomFactor;
    var posY = event.stageY * game.resizeMan.zoomFactor;
  }
  function onStageMouseMove(event) {
    var posX = event.stageX * game.resizeMan.zoomFactor;
    var posY = event.stageY * game.resizeMan.zoomFactor;
  }
  function onStageMouseUp(event) {
    game.isMouseDown = false;
    var posX = event.stageX * game.resizeMan.zoomFactor;
    var posY = event.stageY * game.resizeMan.zoomFactor;
  }
  module.exports = InputManager;
}, {}], 22:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var MainMenu = require("../interfaces/mainmenu");
  var BlinkScreen = require("../interfaces/blinkscreen");
  var FadeScreen = require("../interfaces/fadescreen");
  var LevelWinScreen = require("../interfaces/levelwinscreen");
  var IngameInterface = require("../interfaces/ingameinterface");
  var SelectLanguageMenu = require("../interfaces/selectlangmenu");
  var LevelSelectScreen = require("../interfaces/levelselectscreen");
  var CreditsScreen = require("../interfaces/creditsscreen");
  var DressUpInterface = require("../interfaces/dressupinterface");
  var GalleryScreen = require("../interfaces/galleryscreen");
  var container;
  function InterfaceManager() {
    this.allMenus = [];
    this.allUpdatable = [];
  }
  var p = InterfaceManager.prototype;
  p.init = function() {
    container = game.container;
    this.mainMenu = new MainMenu(this);
    this.blinkScreen = new BlinkScreen(this);
    this.fadeScreen = new FadeScreen(this);
    this.levelWinScren = new LevelWinScreen(this);
    this.selectLangMenu = new SelectLanguageMenu;
    this.levelSelectScreen = new LevelSelectScreen;
    this.creditsScreen = new CreditsScreen;
    this.galleryScreen = new GalleryScreen;
    this.dressUpInterface = new DressUpInterface;
    game.ingameInt = this.ingameInt = new IngameInterface(this);
    if (isSkipMainMenu) {
      if (isLevelSelectShow) {
        this.levelSelectScreen.show();
      }
    } else {
      this.mainMenu.show();
      if (isLangSelectShow) {
        this.selectLangMenu.showSelectLangWin();
      }
    }
  };
  p.update = function() {
    this.allMenus.forEach(function(m) {
      m.update();
    });
    this.allUpdatable.forEach(function(m) {
      m.update();
    });
  };
  p.updateInterfacePositions = function() {
    this.allMenus.forEach(function(m) {
      m.updatePosition();
    });
    utils.updateAutoAlign();
    game.bgMan.updateBgPositions();
    if (game.fpsMeter) {
      game.fpsMeter.updatePosition();
      game.fpsMeter.setToTop();
    }
    if (isLevelEditor && game.isNeedDebugGui) {
      if (game.debugGui) {
        game.debugGui.updateDebugGui();
      }
    }
  };
  p.animatedHideGameField = function(wait) {
    var cont = game.fieldContainer;
    cont.alpha = 1;
    createjs.Tween.get(cont).wait(wait).to({alpha:0}, 300).call(utils.removeChildOnTweenComplete);
  };
  p.showGameField = function(wait) {
    var cont = game.fieldContainer;
    createjs.Tween.removeTweens(cont);
    cont.alpha = 1;
    utils.addToParent(game.fieldContainer, game.container);
  };
  module.exports = InterfaceManager;
}, {"../interfaces/blinkscreen":8, "../interfaces/creditsscreen":9, "../interfaces/dressupinterface":10, "../interfaces/fadescreen":11, "../interfaces/galleryscreen":12, "../interfaces/ingameinterface":13, "../interfaces/levelselectscreen":14, "../interfaces/levelwinscreen":15, "../interfaces/mainmenu":16, "../interfaces/selectlangmenu":17, "../utils/utils":36}], 23:[function(require, module, exports) {
  var allChars, utils;
  var currentChar = null;
  function LevelManager() {
    this.currentLevel = 0;
    game.allChars = {entities:[]};
    allChars = game.allChars;
  }
  var p = LevelManager.prototype;
  p.init = function() {
    utils = game.utils;
  };
  p.loadLevel = function(index) {
    this.currentLevel = index;
    var totalLevels = game.LEVELS_NUM;
    if (this.currentLevel >= totalLevels) {
      this.currentLevel = this.currentLevel % totalLevels;
    }
    this.dispose();
    game.tutorMan.loadTutorial(this.currentLevel);
    game.ingameInt.show();
    game.bgMan.setBgByConfig(game.bgMan.bg3Config);
    game.girlsMan.isPhotoState = false;
    game.girlsMan.loadGirl(this.currentLevel);
    game.intMan.dressUpInterface.show();
    game.intMan.showGameField();
    game.tutorMan.onLevelLoaded();
    game.isGamePaused = false;
    game.isLevelCompleted = false;
    game.isNeedTutorial = false;
    game.soundMan.onLevelStart();
    game.sponsorMan.showWinxLogo();
  };
  p.loadLevelForPhoto = function(index) {
    this.currentLevel = index;
    this.dispose();
    game.girlsMan.loadGirl(this.currentLevel);
    game.intMan.showGameField();
    game.isGamePaused = true;
    game.isNeedTutorial = false;
    game.sponsorMan.showWinxLogo();
  };
  p.dispose = function() {
    game.isGamePaused = true;
    game.ingameInt.hide();
    game.intMan.dressUpInterface.hide();
    utils.removeFromParent(game.fieldContainer);
    game.tutorMan.remove();
    var length = allChars.entities.length;
    var i;
    for (i = 0;i < length;i++) {
      var ch = allChars.entities.pop();
      ch.dispose();
    }
  };
  p.update = function() {
    if (game.isGamePaused) {
      return;
    }
    for (var i = allChars.entities.length - 1;i >= 0;--i) {
      currentChar = allChars.entities[i];
      currentChar.updateLogic();
    }
    game.girlsMan.update();
  };
  module.exports = LevelManager;
}, {}], 24:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var BgManager = require("../managers/bgmanager");
  var loaderBar, preloaderSponsorCont;
  var gameQuever, preloadQuever, preloaderSpinner;
  var manifest = [];
  var preloaderManifest = [{src:"preloaderline.png", id:"preloaderline"}, {src:"preloaderlinebg.png", id:"preloaderlinebg"}, {src:"preloaderbg.jpg", id:"preloaderbg"}];
  function PreloaderManager() {
    this.isAllFilesLoaded = false;
  }
  var p = PreloaderManager.prototype;
  p.startLoaders = function() {
    this.loaderBar = loaderBar = new createjs.Container;
    preloaderSponsorCont = new createjs.Container;
    var bgColor = "#C1304C";
    var bg = new createjs.Shape;
    bg.graphics.beginFill(bgColor).drawRect(-(game.resizeMan.maxW - game.resizeMan.minW) / 2, -game.resizeMan.maxH / 2, game.resizeMan.maxW, game.resizeMan.maxH).endFill();
    loaderBar.addChild(bg);
    loaderBar.addChild(preloaderSponsorCont);
    game.container.addChild(loaderBar);
    var isXHRLoading = !(utils.isIPhone4() || game.utils.isSamsungS3DefaultBrowser());
    preloadQuever = new createjs.LoadQueue(isXHRLoading, "assets/", true);
    preloadQuever.on("fileload", handleFileLoad);
    preloadQuever.loadManifest(preloaderManifest);
    gameQuever = new createjs.LoadQueue(isXHRLoading, "assets/", true);
    gameQuever.installPlugin(createjs.Sound);
    gameQuever.on("progress", handleOverallProgress);
    gameQuever.on("complete", handleComplete);
    gameQuever.on("fileload", handleFileLoad);
    game.bgMan.addBgsToManifest();
  };
  p.removeLoaderBar = function() {
    utils.removeFromParent(loaderBar);
    loaderBar = null;
    preloaderSpinner = null;
    preloaderLine = null;
  };
  p.addToManifest = function(obj) {
    manifest.push(obj);
  };
  function handleOverallProgress(event) {
    if (event.total != 0) {
      var progress = event.loaded / event.total;
      if (loaderBar && preloaderLine) {
        setPreloaderPercent(progress);
      }
      azerionIntegrationSDK.loadProgress(progress);
    }
  }
  var preloaderLine, preloaderLineBg;
  var isPreloaderReady = false;
  function handleFileLoad(event) {
    if (event.item.type == "image") {
      game.images[event.item.id] = event.result;
    }
    game.files[event.item.id] = event.result;
    if (!isPreloaderReady && game.files["preloaderline"] && game.files["preloaderbg"] && game.files["preloaderlinebg"]) {
      isPreloaderReady = true;
      var loader = document.getElementById("loader");
      if (loader && loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
      if (loaderBar) {
        var yPos = 198;
        var ch = utils.createBitmapFromFile("preloaderbg", -(game.resizeMan.maxW - game.resizeMan.minW) / 2, -game.resizeMan.minH / 2, 1.25, loaderBar);
        ch = preloaderLineBg = utils.createBitmapFromFile("preloaderlinebg", 0, -83, 1, loaderBar);
        ch.x = (game.resizeMan.minW - game.files["preloaderlinebg"].width) / 2;
        ch = preloaderLine = utils.createBitmapFromFile("preloaderline", 0, preloaderLineBg.y + 59.5, 1, loaderBar);
        ch.x = (game.resizeMan.minW - game.files["preloaderline"].width) / 2 - 1;
        preloaderLine.scaleX = .975;
        ch.sourceRect = new createjs.Rectangle(0, 0, 1, 53);
        setPreloaderPercent(0);
        utils.addToParent(preloaderSponsorCont, loaderBar);
        gameQuever.loadManifest(manifest);
      }
    }
  }
  var PRELOADER_FILLER_SIZE = 365;
  function setPreloaderPercent(perc) {
    perc = Math.min(1, Math.max(0, perc));
    var clippedWidth = Math.floor(PRELOADER_FILLER_SIZE * perc);
    preloaderLine.visible = perc > 0;
    preloaderLine.sourceRect.width = Math.max(1, clippedWidth);
  }
  function handleComplete(event) {
    if (game.preloadMan.isAllFilesLoaded) {
      return;
    }
    game.preloadMan.isAllFilesLoaded = true;
    azerionIntegrationSDK.loadComplete(()=> {
      game.soundMan.setMutedByGame(true)
    }, () => {
      game.soundMan.setMutedByGame(false)
      game.inst.startGame();
    });
  }
  module.exports = PreloaderManager;
}, {"../managers/bgmanager":18, "../utils/utils":36}], 25:[function(require, module, exports) {
  function ResizeManager() {
    this.minW = 768;
    this.minH = 512;
    this.ow = this.minW;
    this.oh = this.minH;
    this.maxW = 960;
    this.maxH = this.minH;
    this.viewportW = this.minW;
    this.viewportH = this.minH;
    this.stageLeft = 0;
    this.stageTop = 0;
    this.isHighDPI = false;
    this.winWidth = 0;
    this.winHeight = 0;
    this.scaleFactor = 1;
    this.styleScaleFactor = 1;
    this.zoomFactor = 1;
    this.isPreventScroll = true;
  }
  var p = ResizeManager.prototype;
  p.startResizeHandling = function() {
    this.isHighDPI = this.checkForHiDPI();
    game.stage.addEventListener("stagemousedown", focusWin);
    if (game.utils.isSamsungDefaultBrowser()) {
      this.isHighDPI = false;
    }
    this.setCorrectViewPort();
    this.addPreventScrollHandlers();
    window.addEventListener("resize", onWindowResize);
    document.addEventListener("touchstart", PreventScrollTouch, {passive: false});
    window.onorientationchange = orientChange;
    this.onGameResize();
    setTimeout(scrollWinToTop, 100);
    window.addEventListener("scroll", function() {
      if (document.activeElement === document.body && window.scrollY > 0) {
        document.body.scrollTop = 0;
      }
    }, true);
    window.scrollTo(0, 0);
    if (game.utils.isDesktop()) {
      var gamediv = document.getElementById("gamediv");
      if (gamediv && gamediv.parentNode) {
        gamediv.parentNode.removeChild(gamediv);
      }
    }
  };
  function focusWin() {
    if (window.focus) {
      window.focus();
    }
  }
  p.disableKeyboard = function() {
    if (window.addEventListener) {
      document.addEventListener("keydown", this.keyDisableEvent, false);
      document.addEventListener("keyup", this.keyDisableEvent, false);
      document.addEventListener("keypress", this.keyDisableEvent, false);
      document.addEventListener("keydown", this.keyDisableEvent, true);
      document.addEventListener("keyup", this.keyDisableEvent, true);
      document.addEventListener("keypress", this.keyDisableEvent, true);
      window.addEventListener("keydown", this.keyDisableEvent, false);
      window.addEventListener("keyup", this.keyDisableEvent, false);
      window.addEventListener("keypress", this.keyDisableEvent, false);
      window.addEventListener("keydown", this.keyDisableEvent, true);
      window.addEventListener("keyup", this.keyDisableEvent, true);
      window.addEventListener("keypress", this.keyDisableEvent, true);
    } else {
      if (window.attachEvent) {
        document.attachEvent("onkeydown", this.keyDisableEvent);
        document.attachEvent("onkeyup", this.keyDisableEvent);
        document.attachEvent("onkeypress", this.keyDisableEvent);
        window.attachEvent("onkeydown", this.keyDisableEvent);
        window.attachEvent("onkeyup", this.keyDisableEvent);
        window.attachEvent("onkeypress", this.keyDisableEvent);
      }
    }
  };
  p.keyDisableEvent = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  };
  p.onGameResize = function() {
    var container = game.container, canvas = game.canvas, stage = game.stage;
    scrollWinToTop();
    var w = window.innerWidth;
    var h = window.innerHeight;
    this.winHeight = h;
    this.zoomFactor = 1;
    if (game.utils.isDesktop()) {
      this.zoomFactor = .7;
    }
    if (isLowGfx) {
      this.zoomFactor = 1.5;
    }
    w = w / this.zoomFactor;
    h = h / this.zoomFactor;
    var scaleCommand = "scale(" + this.zoomFactor + "," + this.zoomFactor + ")";
    canvas.style["transform"] = scaleCommand;
    canvas.style["msTransform"] = scaleCommand;
    canvas.style["MozTransform"] = scaleCommand;
    canvas.style["WebkitTransform"] = scaleCommand;
    canvas.style["OTransform"] = scaleCommand;
    this.styleScaleFactor = Math.min(w / this.minW, h / this.minH);
    var newW = Math.min(w, this.maxW * this.styleScaleFactor);
    var newH = Math.min(h, this.maxH * this.styleScaleFactor);
    var diffH = newH / this.styleScaleFactor - this.maxH;
    stage.canvas.height = this.maxH + diffH;
    var diffW = newW / this.styleScaleFactor - this.maxW;
    stage.canvas.width = this.maxW + diffW;
    stage.canvas.width /= this.zoomFactor;
    stage.canvas.height /= this.zoomFactor;
    container.scaleX = container.scaleY = 1 / this.zoomFactor;
    scaleFactor = this.scaleFactor = 1 / this.zoomFactor;
    stage.canvas.style.width = newW + "px";
    stage.canvas.style.height = newH + "px";
    stage.canvas.style.marginTop = "0px";
    stage.canvas.style.marginLeft = "0px";
    this.stageLeft = Math.floor((w * this.zoomFactor - newW) / 2);
    stage.canvas.style.left = this.stageLeft + "px";
    this.stageTop = Math.floor((h * this.zoomFactor - newH) / 2);
    stage.canvas.style.top = this.stageTop + "px";
    this.viewportH = newH / this.styleScaleFactor;
    this.viewportW = newW / this.styleScaleFactor;
    stage.autoClear = false;
    container.x = container.y = 0;
    this.winWidth = w;
    this.winHeight = h;
    timer = null;
    if (game.preloadMan && game.preloadMan.loaderBar) {
      game.preloadMan.loaderBar.y = this.minH / 2;
      game.preloadMan.loaderBar.x = (this.viewportW - this.minW) / 2;
      if (game.preloadMan.loaderBar.parent) {
        stage.autoClear = true;
      }
    }
    if (game.preloadMan.isAllFilesLoaded && game.isGameInited) {
      game.intMan.updateInterfacePositions();
    }
    stage.update();
  };
  p.addPreventScrollHandlers = function() {
    document.ontouchmove = function(event) {
      if (game.resizeMan.isPreventScroll) {
        // event.preventDefault();
      }
    };
    document.addEventListener("touchstart", touchPreventHandler, {passive: false});
    document.addEventListener("touchmove", touchPreventHandler, {passive: false});
    document.addEventListener("touchend", touchPreventHandler, {passive: false});
    document.body.addEventListener("touchstart", touchPreventHandler, {passive: false});
    document.body.addEventListener("touchmove", touchPreventHandler, {passive: false});
    document.body.addEventListener("touchend", touchPreventHandler, {passive: false});
  };
  p.setCorrectViewPort = function() {
    if (game.utils.isDefaultAndroid()) {
      return;
    }
    var metas = document.getElementsByTagName("meta");
    for (var i = 0;i < metas.length;i++) {
      if (metas[i].getAttribute("name") && metas[i].getAttribute("name") == "viewport") {
        metas[i].parentNode.removeChild(metas[i]);
      }
    }
    var meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0";
    document.getElementsByTagName("head")[0].appendChild(meta);
  };
  p.checkForHiDPI = function() {
    if (window.hasOwnProperty("devicePixelRatio")) {
      if (window.devicePixelRatio >= 2) {
        return true;
      }
    }
    return false;
  };
  p.deltaForVTop = function() {
    return -(this.viewportH - this.oh);
  };
  p.deltaForHLeft = function() {
    return -(this.viewportW - this.minW) / 2;
  };
  p.deltaForHorizScale = function() {
    return this.viewportW / this.minW;
  };
  p.getMaxLeft = function() {
    return -(this.maxW - this.ow) / 2;
  };
  function touchPreventHandler(e) {
    if (game.resizeMan.isPreventScroll) {
      // e.preventDefault();
      // return false;
    }
  }
  function PreventScrollTouch(e) {
    window.scrollTo(0, 0);
    if (window.innerHeight != game.resizeMan.winHeight) {
      onWindowResize();
    }
    // e.preventDefault();
    // e.stopPropagation();
    // e.cancelBubble = true;
    // e.returnValue = false;
    return false;
  }
  function scrollWinToTop() {
    window.scrollTo(0, 0);
  }
  var timer;
  function onWindowResize(event) {
    setTimeout(scrollWinToTop, 1);
    clearTimeout(timer);
    setTimeout(function() {
      game.resizeMan.onGameResize();
    }, 100);
    setTimeout(function() {
      game.resizeMan.onGameResize();
    }, 500);
    setTimeout(function() {
      game.resizeMan.onGameResize();
    }, 1E3);
  }
  function orientChange(event) {
    setTimeout(scrollWinToTop, 50);
    onWindowResize();
  }
  module.exports = ResizeManager;
}, {}], 26:[function(require, module, exports) {
  var utils;
  function SoundManager() {
    utils = game.utils;
    this.isAudioSupported = false;
    this.isMutedByPlayer = false;
    this.isMutedByGame = false;
    this.isMutedByAds = false;
    this.bgMusic = null;
    this.bgMusicIndex = 0;
    if (!utils.isDesktop()) {
      createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
    }
    if (utils.isSamsungDefaultBrowser()) {
      this.isAudioSupported = false;
    } else {
      this.isAudioSupported = createjs.Sound.initializeDefaultPlugins();
      createjs.Sound.alternateExtensions = ["m4a"];
    }
    if (this.isAudioSupported) {
      var soundPath = "sound/";
      game.preloadMan.addToManifest({src:soundPath + "gameplay.ogg", id:"bgMusic0", data:1});
      game.preloadMan.addToManifest({src:soundPath + "bonuspick.ogg", id:"clickSound", data:1});
      game.preloadMan.addToManifest({src:soundPath + "levelcomplete.ogg", id:"levelcompleteSound", data:1});
      game.preloadMan.addToManifest({src:soundPath + "bubble_pop.ogg", id:"cardDismatch", data:1});
      game.preloadMan.addToManifest({src:soundPath + "photo.ogg", id:"photo", data:1});
    }
  }
  var p = SoundManager.prototype;
  p.playSound = function(soundLabel, isLooped, loops) {
    if (this.isMutedByPlayer || !this.isAudioSupported || this.isMutedByGame || this.isMutedByAds) {
      return;
    }
    var loopNum = 0;
    if (isLooped) {
      loopNum = loops ? loops : -1;
    }
    return createjs.Sound.play(soundLabel, {interrupt:createjs.Sound.INTERRUPT_EARLY, loop:loopNum});
  };
  p.toggleMute = function() {
    this.isMutedByPlayer = !this.isMutedByPlayer;
    if (!this.isMutedByPlayer) {
      game.soundMan.playClickSound();
    }
    this.updateSoundState();
    game.storageMan.saveMuteState();
  };
  p.updateSoundState = function() {
    if (!this.isAudioSupported) {
      return;
    }
    if (this.isMutedByPlayer || this.isMutedByGame || this.isMutedByAds) {
      if (this.bgMusic) {
        this.bgMusic.paused = true;
      }
      createjs.Sound.muted = true;
      return;
    }
    createjs.Sound.muted = false;
    if (this.bgMusic) {
      if (game.TYPE === game.KIM_TYPE && !KIM.isMusicOn()) {
      } else {
        this.bgMusic.paused = false;
      }
    } else {
      this.bgMusicIndex = 0;
      this.startBgMusic(this.bgMusicIndex);
    }
  };
  p.onGameStarted = function() {
    if (!this.isAudioSupported) {
      return;
    }
    this.updateSoundState();
  };
  p.startBgMusic = function(index) {
    this.bgMusicIndex = index;
    if (this.isMutedByPlayer || !this.isAudioSupported || this.isMutedByGame || this.isMutedByAds) {
      return;
    }
    if (game.TYPE === game.KIM_TYPE && !KIM.isMusicOn()) {
      return;
    }
    if (!this.bgMusic) {
      this.bgMusic = this.playSound("bgMusic" + index, true);
    }
  };
  p.setMutedByGame = function(isMuted) {
    this.isMutedByGame = isMuted;
    if (game.isGameInited) {
      this.updateSoundState();
    }
  };
  p.setMutedByAds = function(isMuted) {
    this.isMutedByAds = isMuted;
    if (game.isGameInited) {
      this.updateSoundState();
    }
  };
  p.stopBgMusic = function() {
    if (!this.isAudioSupported) {
      return;
    }
    if (this.bgMusic) {
      this.bgMusic.paused = true;
    }
  };
  var congrats;
  p.startCongrats = function() {
    if (congrats) {
      return;
    }
    congrats = this.playSound("congrats");
  };
  p.stopCongrats = function() {
    if (!congrats) {
      return;
    }
    congrats.stop();
    congrats = null;
  };
  p.onLevelReset = function() {
  };
  p.onLevelStart = function() {
  };
  p.update = function() {
    if (game.isLevelCompleted || game.isGamePaused || !game.isGameInited) {
      return;
    }
  };
  p.playClickSound = function() {
    this.playSound("clickSound", false, 0, 1);
  };
  p.playDressBtnSound = function() {
    this.playSound("cardDismatch", false, 0, 1);
  };
  p.playPhotoSound = function() {
    this.playSound("photo", false, 0, 1);
  };
  p.playCompleteSound = function() {
    createjs.Tween.get({x:0}).wait(200).call(function() {
      game.soundMan.playSound("levelcompleteSound", false, 0, 1);
    });
  };
  module.exports = SoundManager;
}, {}], 27:[function(require, module, exports) {
  var utils, gameContainer;
  var textHelper = require("../texts/texthelper");
  function SponsorManager() {
  }
  var p = SponsorManager.prototype;
  var winxLogo;
  p.init = function() {
    utils = game.utils;
    gameContainer = game.container;
  };
  p.showWinxLogo = function() {
    if (game.TYPE === game.B_TYPE) {
      return;
    }
    if (!winxLogo) {
      winxLogo = utils.createButton(80, 50, .45, "winxLogo", null, null, null);
    }
    game.utils.addToParent(winxLogo, game.container);
  };
  p.initGamifiveApi = function() {
    if (game.TYPE !== game.B_TYPE) {
      return;
    }
    GamifiveSDK.init({lite:true, debug:isGamifiveDebug, moreGamesButtonStyle:{"left":"0%", "margin-left":"0px", "margin-top":"0px", "top":"0"}});
  };
  p.startGamifiveSession = function() {
    if (game.TYPE !== game.B_TYPE) {
      return;
    }
    GamifiveSDK.startSession();
  };
  p.endGamifiveSession = function() {
    if (game.TYPE !== game.B_TYPE) {
      return;
    }
    GamifiveSDK.endSession({});
  };
  p.initKIMApi = function() {
    if (game.TYPE !== game.KIM_TYPE) {
      return;
    }
    if (!window["KIM"]) {
      window["KIM"] = {getLanguage:function() {
        return "en";
      }, isMusicOn:function() {
        return true;
      }};
    }
  };
  p.onGamifiveMoreGamesClick = function(event) {
    if (game.TYPE !== game.B_TYPE) {
      return;
    }
    GamifiveSDK.goToHome();
  };
  p.setKIMLang = function() {
    textHelper.setLang("" + KIM.getLanguage());
  };
  p.setKIMMusicHandler = function() {
    KIM.onToggleBGM = function(state) {
      if (KIM.isMusicOn()) {
        game.soundMan.updateSoundState();
      } else {
        game.soundMan.stopBgMusic();
      }
    };
  };
  module.exports = SponsorManager;
}, {"../texts/texthelper":34}], 28:[function(require, module, exports) {
  var isStorageSupported = false;
  var savesConfig = {lastOpenedLvl:0, isMutedByPlayer:false, lang:"en", photos:[]};
  var SAVES_CONFIG_NAME = "_savesconfig";
  function StorageManager() {
  }
  var p = StorageManager.prototype;
  p.loadSaves = function() {
    if (game.TYPE === game.B_TYPE) {
      this.loadGamifiveSaves();
    } else {
      this.loadLocalstorageSaves();
    }
  };
  p.loadLocalstorageSaves = function() {
    isStorageSupported = isSupportsHtml5storage();
    if (!isStorageSupported) {
      log("storage not supported");
      return;
    }
    var stored = localStorage[STORAGE_PREFIX + SAVES_CONFIG_NAME];
    if (stored) {
      log("saves exists!");
      var parsed = JSON.parse(localStorage[STORAGE_PREFIX + SAVES_CONFIG_NAME]);
      if (parsed) {
        savesConfig = parsed;
        if (game.TYPE === game.KIM_TYPE) {
          game.soundMan.isMutedByPlayer = false;
        } else {
          game.soundMan.isMutedByPlayer = savesConfig.isMutedByPlayer;
        }
        if (game.TYPE === game.B_TYPE) {
          game.LANG = savesConfig.lang ? savesConfig.lang : game.LANG;
        }
      }
    } else {
      log("saves not found!");
      writeSaves();
    }
  };
  p.loadGamifiveSaves = function() {
    GamifiveSDK.loadUserData(function(userProgress) {
      if (!userProgress) {
        console.log("userProgress isn't Object!", userProgress);
        return;
      }
      if (Object.keys(userProgress).length === 0) {
        log("saves not found");
      } else {
        log("saves found");
        log(userProgress);
        if (userProgress.isMutedByPlayer) {
          savesConfig.isMutedByPlayer = userProgress.isMutedByPlayer;
          game.soundMan.isMutedByPlayer = savesConfig.isMutedByPlayer;
        }
        if (userProgress.photos) {
          if (Array.isArray(userProgress.photos)) {
            savesConfig.photos = userProgress.photos;
          } else {
          }
        }
        if (userProgress.lang) {
          game.LANG = userProgress.lang;
        }
      }
    });
  };
  p.saveMuteState = function() {
    savesConfig.isMutedByPlayer = game.soundMan.isMutedByPlayer;
    writeSaves();
  };
  p.writeLangSaves = function(isNotWriteToUserData) {
    savesConfig.lang = game.LANG;
    writeSaves();
  };
  p.addNewPhoto = function(girlConfig) {
    savesConfig.photos.push(girlConfig);
    writeSaves();
  };
  p.getSavesConfig = function() {
    return savesConfig;
  };
  p.getPhoto = function(index) {
    return savesConfig.photos[index];
  };
  p.getPhotosCount = function() {
    return savesConfig.photos.length;
  };
  p.removePhoto = function(index) {
    if (index < 0 || index >= savesConfig.photos.length) {
      return;
    }
    savesConfig.photos.splice(index, 1);
    writeSaves();
  };
  function writeSaves() {
    if (game.TYPE === game.B_TYPE) {
      GamifiveSDK.saveUserData(savesConfig);
    } else {
      if (!isStorageSupported) {
        return;
      }
      localStorage[STORAGE_PREFIX + SAVES_CONFIG_NAME] = JSON.stringify(savesConfig);
    }
  }
  function isSupportsHtml5storage() {
    try {
      var isSupported = "localStorage" in window && window["localStorage"] !== null;
      if (isSupported) {
        localStorage.setItem("storage", "");
        localStorage.removeItem("storage");
      }
      return isSupported;
    } catch (e) {
      return false;
    }
  }
  module.exports = StorageManager;
}, {}], 29:[function(require, module, exports) {
  var utils;
  function TutorialManager() {
    game.TUTORIAL_HIDDEN = 0;
    game.TUTORIAL_LEVEL1_WAITED_1 = 1;
    game.TUTORIAL_LEVEL1_SHOWED_1 = 2;
    game.TUTORIAL_LEVEL1_ONE_CARD_CLICKED = 3;
    game.TUTORIAL_LEVEL1_TWO_CARD_CLICKED = 4;
  }
  var p = TutorialManager.prototype;
  p.init = function() {
    utils = game.utils;
    this.allHelps = [];
    this.hand = utils.createButton(360, 250, 1, "helpHand");
    this.allHelps.push(this.hand);
    this.hand2 = utils.createButton(360, 250, 1, "helpHand");
    this.allHelps.push(this.hand2);
    this.waitTimer = 0;
    this.currentLevel = 0;
    this.state = game.TUTORIAL_HIDDEN;
  };
  p.loadTutorial = function(currentLevel) {
    this.remove();
    this.currentLevel = currentLevel;
  };
  p.onLevelLoaded = function() {
    if (this.state === game.TUTORIAL_LEVEL1_WAITED_1) {
      this.state = game.TUTORIAL_LEVEL1_SHOWED_1;
      this.setupHand(280, 350, this.hand, true);
      this.showTutor(this.hand, 1300, this.addHandToFieldContainer);
    }
  };
  p.onCardClick = function(card) {
    if (this.state === game.TUTORIAL_HIDDEN) {
      return;
    }
    if (this.state === game.TUTORIAL_LEVEL1_SHOWED_1) {
      this.state = game.TUTORIAL_LEVEL1_ONE_CARD_CLICKED;
      this.setupHand(540, 350, this.hand);
      this.showTutor(this.hand, 350, this.addHandToFieldContainer);
    } else {
      if (this.state === game.TUTORIAL_LEVEL1_ONE_CARD_CLICKED) {
        this.hideHand(this.hand);
        this.state = game.TUTORIAL_LEVEL1_TWO_CARD_CLICKED;
      }
    }
  };
  p.addHandToFieldContainer = function(e) {
    e.target.currentAnimationFrame = 0;
    utils.addToParent(e.target, game.fieldContainer);
  };
  p.hideTutor = function(tutorChar) {
    createjs.Tween.get(tutorChar).to({alpha:0}, 1E3).call(utils.removeChildOnTweenComplete);
  };
  p.showTutor = function(tutorChar, waitTime, func) {
    createjs.Tween.removeTweens(tutorChar);
    tutorChar.alpha = 0;
    var funcToCall = func ? func : utils.doNothing;
    createjs.Tween.get(tutorChar).wait(waitTime ? waitTime : 0).call(funcToCall).to({alpha:1}, 700);
  };
  p.hideHand = function(hand) {
    var h = hand ? hand : this.hand;
    createjs.Tween.removeTweens(h);
    utils.removeFromParent(h);
  };
  p.setupHand = function(x, y, hand, isHidden) {
    var h = hand ? hand : this.hand;
    createjs.Tween.removeTweens(h);
    h.alpha = isHidden ? 0 : 1;
    h.x = x;
    h.y = y;
    h.currentAnimationFrame = 0;
    h.play();
  };
  p.update = function() {
    if (this.state === game.TUTORIAL_HIDDEN) {
      return;
    }
    if (this.currentLevel === 0) {
      this.updateTutorial1();
    } else {
      if (this.currentLevel === 1) {
        this.updateTutorial2();
      }
    }
  };
  p.updateTutorial1 = function() {
  };
  p.updateTutorial2 = function() {
  };
  p.remove = function() {
    this.state = game.TUTORIAL_HIDDEN;
    this.allHelps.forEach(function(h) {
      utils.removeFromParent(h);
      createjs.Tween.removeTweens(h);
      h.alpha = 1;
    });
  };
  module.exports = TutorialManager;
}, {}], 30:[function(require, module, exports) {
  function CharPool(name) {
    this.name = name || "NO NAME POOL";
    this.disposedChars = [];
  }
  var p = CharPool.prototype;
  module.exports = CharPool;
}, {}], 31:[function(require, module, exports) {
  var BaseChar = require("../characters/basechar");
  var EffectChar = require("../characters/effectchar");
  var utils = require("../utils/utils");
  function PoolManager() {
  }
  var p = PoolManager.prototype;
  function getSettingsByType(typeId) {
    return {objClass:BaseChar};
  }
  p.createChar = function(typeId, parent, x, y, scaleX, scaleY, rotation, additParams) {
    var bon = this.getCharFromPool(typeId, parent, scaleX, scaleY, x, y, rotation, additParams);
    if (!utils.isArrayContains(game.allChars.entities, bon)) {
      game.allChars.entities.push(bon);
    }
    return bon;
  };
  p.addToPoolDisposed = function(pool, ch) {
    if (!utils.isArrayContains(pool.disposedChars, ch)) {
      pool.disposedChars.push(ch);
    }
  };
  p.getCharFromPool = function(typeId, parent, scaleX, scaleY, x, y, rotation, additParams) {
    var creationSettings = getSettingsByType(typeId);
    var pool = creationSettings.objClass.pool;
    var params = {pool:pool, typeId:typeId, parent:parent, scaleX:scaleX, scaleY:scaleY, posX:x, posY:y, rotation:rotation, additParams:additParams};
    if (pool.disposedChars.length > 0) {
      var dispCh = pool.disposedChars.pop();
      dispCh.reset(params);
      return dispCh;
    } else {
      return new creationSettings.objClass(params);
    }
  };
  p.createEffectChar = function(frameName, parent, objToAddMarginFrom, x, y, scaleX, scaleY, rotation, additParams) {
    var bon = this.getEffectFromPool(frameName, parent, objToAddMarginFrom, scaleX, scaleY, x, y, rotation, additParams);
    if (!utils.isArrayContains(game.allEffects.entities, bon)) {
      game.allEffects.entities.push(bon);
    }
    return bon;
  };
  p.getEffectFromPool = function(frameName, parent, objToAddMarginFrom, scaleX, scaleY, x, y, rotation, additParams) {
    var pool = EffectChar.pool;
    var params = {pool:pool, frameName:frameName, objToAddMarginFrom:objToAddMarginFrom, parent:parent, scaleX:scaleX, scaleY:scaleY, posX:x, posY:y, rotation:rotation, additParams:additParams};
    if (pool.disposedChars.length > 0) {
      var dispCh = pool.disposedChars.pop();
      dispCh.reset(params);
      return dispCh;
    } else {
      return new EffectChar(params);
    }
  };
  module.exports = PoolManager;
}, {"../characters/basechar":1, "../characters/effectchar":3, "../utils/utils":36}], 32:[function(require, module, exports) {
  function Rectangle(x, y, width, height) {
    this.setValues(x, y, width, height);
  }
  var p = Rectangle.prototype;
  p.setValues = function(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.halfWidth = width / 2 || 0;
    this.halfHeight = height / 2 || 0;
    this.midX = this.halfWidth + this.x;
    this.midY = this.halfHeight + this.y;
    this.right = x + width;
    this.bottom = y + height;
    return this;
  };
  p.extend = function(x, y, width, height) {
    width = width || 0;
    height = height || 0;
    if (x + width > this.x + this.width) {
      this.width = x + width - this.x;
    }
    if (y + height > this.y + this.height) {
      this.height = y + height - this.y;
    }
    if (x < this.x) {
      this.width += this.x - x;
      this.x = x;
    }
    if (y < this.y) {
      this.height += this.y - y;
      this.y = y;
    }
    return this;
  };
  p.pad = function(top, left, bottom, right) {
    this.x -= left;
    this.y -= top;
    this.width += left + right;
    this.height += top + bottom;
    return this;
  };
  p.copy = function(rectangle) {
    return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  p.contains = function(x, y, width, height) {
    width = width || 0;
    height = height || 0;
    return x >= this.x && x + width <= this.x + this.width && y >= this.y && y + height <= this.y + this.height;
  };
  p.union = function(rect) {
    return this.clone().extend(rect.x, rect.y, rect.width, rect.height);
  };
  p.intersection = function(rect) {
    var x1 = rect.x, y1 = rect.y, x2 = x1 + rect.width, y2 = y1 + rect.height;
    if (this.x > x1) {
      x1 = this.x;
    }
    if (this.y > y1) {
      y1 = this.y;
    }
    if (this.x + this.width < x2) {
      x2 = this.x + this.width;
    }
    if (this.y + this.height < y2) {
      y2 = this.y + this.height;
    }
    return x2 <= x1 || y2 <= y1 ? null : new Rectangle(x1, y1, x2 - x1, y2 - y1);
  };
  p.intersects = function(rect) {
    return rect.x <= this.x + this.width && this.x <= rect.x + rect.width && rect.y <= this.y + this.height && this.y <= rect.y + rect.height;
  };
  p.isEmpty = function() {
    return this.width <= 0 || this.height <= 0;
  };
  p.clone = function() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  };
  p.toString = function() {
    return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]";
  };
  module.exports = Rectangle;
}, {}], 33:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var textHelper = require("./texthelper");
  function LocalizableTextField(textId, x, y, scale, parent, autoAlignX, autoAlignY, autoAlignDevisor, isNotNeedLocalize) {
    this.textId = textId;
    this.x = x;
    this.y = y;
    this.scaleX = scale;
    this.scaleY = scale;
    this.textVars = null;
    this.autoAlignX = autoAlignX;
    this.autoAlignY = autoAlignY;
    this.autoAlignDevisor = autoAlignDevisor;
    this.isUpperCase = false;
    this.isNotNeedLocalize = isNotNeedLocalize || false;
    this.textField = new createjs.Text;
    this.textField.mouseEnabled = false;
    this.updateByParams();
    this.parent = parent;
    this.addToParent(this.parent);
    if (this.autoAlignX !== undefined) {
      utils.addAutoAlignToObj(this.textField);
    }
    textHelper.addToLocalizedFields(this);
  }
  var p = LocalizableTextField.prototype;
  p.getTextParams = function() {
    var lang = this.isNotNeedLocalize ? "notLocalizeble" : textHelper.getTextConfigByLang();
    return game.ALL_TEXTS[lang][this.textId];
  };
  p.updateByParams = function() {
    this.params = this.getTextParams();
    var text = this.getResultText();
    this.textField.text = this.isUpperCase ? text.toUpperCase() : text;
    this.textField.font = this.params.font;
    this.textField.color = this.params.color;
    this.textField.x = this.x + this.params.marginX * this.scaleX;
    this.textField.y = this.y + this.params.marginY * this.scaleY;
    this.textField.textBaseline = this.params.baseline;
    this.textField.textAlign = this.params.align;
    if (this.params.shadowColor) {
      this.textField.shadowColor = this.params.shadowColor;
      this.textField.shadowOffsetX = this.params.shadowOffsetX;
      this.textField.shadowOffsetY = this.params.shadowOffsetY;
      this.textField.shadowBlur = this.params.shadowBlur;
    } else {
      this.textField.shadowColor = null;
    }
    if (this.params.lineHeight) {
      this.textField.lineHeight = this.params.lineHeight;
    } else {
      this.textField.lineHeight = 0;
    }
    if (this.params.outline) {
      this.textField.additionalOutline = this.params.outline;
      this.textField.outlineColor = this.params.outlineColor;
    } else {
      this.textField.additionalOutline = null;
    }
    utils.setSpriteScale(this.textField, this.scaleX, this.scaleY);
    this.textField.defaultParams = {x:this.textField.x, y:this.textField.y, parent:null, scaleX:this.scaleX, scaleY:this.scaleY, rotation:0, horizAlign:this.autoAlignX, vertAlign:this.autoAlignY, alignDevisor:this.autoAlignDevisor};
    utils.updateObjectPos(this.textField);
  };
  p.setTextId = function(textId, textVars) {
    this.textId = textId;
    this.textVars = textVars ? textVars : null;
    this.updateByParams();
  };
  p.setTextVars = function(textVars) {
    this.textVars = textVars ? textVars : null;
    this.updateByParams();
  };
  p.getResultText = function() {
    if (!this.textVars) {
      return this.params.text;
    }
    var result = this.params.text;
    for (var i = 0;i < this.textVars.length;i++) {
      result = result.replace("{" + i + "}", this.textVars[i]);
    }
    return result;
  };
  p.addToParent = function(parent) {
    if (parent) {
      utils.addToParent(this.textField, parent);
    }
  };
  p.removeFromParent = function() {
    removeFromParent(this.textField);
  };
  module.exports = LocalizableTextField;
}, {"../utils/utils":36, "./texthelper":34}], 34:[function(require, module, exports) {
  var utils = require("../utils/utils");
  module.exports.getTextConfigByLang = function() {
    return game.LANG;
  };
  var allLocalizedFields = [];
  module.exports.addToLocalizedFields = function(field) {
    utils.addToArray(allLocalizedFields, field);
  };
  module.exports.setLang = function(newLang) {
    game.LANG = newLang;
    module.exports.updateAllLocalizedFields();
    game.storageMan.writeLangSaves();
  };
  module.exports.updateAllLocalizedFields = function() {
    allLocalizedFields.forEach(function(f) {
      f.updateByParams();
    });
  };
}, {"../utils/utils":36}], 35:[function(require, module, exports) {
  var fpsText, counter = 0;
  function FPSMeter() {
    fpsText = new createjs.BitmapText("1", game.interfaceSS);
    fpsText.scaleX = fpsText.scaleY = .5;
    fpsText.letterSpacing = -7;
    fpsText.x = game.resizeMan.ow - 27;
    game.container.addChild(fpsText);
  }
  var p = FPSMeter.prototype;
  p.update = function() {
    if (!isNeedFpsMeter) {
      return;
    }
    counter++;
    if (counter % game.FPS == 0) {
      fpsText.text = Math.floor(createjs.Ticker.getMeasuredFPS()).toString();
    }
  };
  p.setToTop = function() {
    game.container.addChild(fpsText);
  };
  p.updatePosition = function() {
    fpsText.x = 0;
    fpsText.y = 0;
  };
  module.exports = FPSMeter;
}, {}], 36:[function(require, module, exports) {
  (function(global) {
    exports.isDesktop = function() {
      return isDesktopBrowser;
    };
    exports.detectBrowser = function() {
      isDesktopBrowser = !isMobileDetected(navigator.userAgent || navigator.vendor || window.opera);
      var isMobileParam = this.getURLParameter("mobile");
      if (isMobileParam) {
        if (parseInt(isMobileParam) == 1) {
          isDesktopBrowser = false;
        }
      } else {
      }
    };
    exports.getURLParameter = function(name) {
      return decodeURIComponent(((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)")).exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null;
    };
    exports.isSamsungDefaultBrowser = function() {
      var nua = navigator.userAgent;
      return nua.toLowerCase().indexOf("samsung") > -1 && nua.indexOf("Android ") > -1;
    };
    exports.isSamsungS3DefaultBrowser = function() {
      var nua = navigator.userAgent;
      var lowerNua = nua.toLowerCase();
      return lowerNua.indexOf("samsung") > -1 && nua.indexOf("Android ") > -1 && (nua.indexOf("SGH-T999") > -1 || nua.indexOf("GT-I9300") > -1 || nua.indexOf("SHV-E210") > -1 || nua.indexOf("SGH-I747") > -1 || nua.indexOf("SGH-N064") > -1 || nua.indexOf("SCH-R530") > -1 || nua.indexOf("SCH-I535") > -1 || nua.indexOf("SPH-L710") > -1 || nua.indexOf("GT-I9305") > -1 || nua.indexOf("GT-I9308") > -1);
    };
    exports.addBoundingBoxToDO = function() {
      var p = createjs.DisplayObject.prototype;
      p.isRoot = false;
      p.bounding_box = null;
      p.setBoundingBox = function(x, y, w, h) {
        this.bounding_box = new createjs.Rectangle(x, y, w, h);
        return this.bounding_box;
      };
      p.isPointInBoundingBox = function(x, y) {
        if (!this.bounding_box) {
          return false;
        }
        var bb = this.bounding_box;
        return (this.x + bb.x) * scaleFactor <= x && x < scaleFactor * (this.x + bb.x + bb.width) && ((this.y + bb.y) * scaleFactor <= y && y < scaleFactor * (this.y + bb.y + bb.height));
      };
      p.isOnlyBoundsCheck = false;
    };
    exports.checkForLogEnablingFromURL = function() {
      var hash = location.hash;
      if (hash.indexOf("#log") != -1) {
        isLogsEnabled = true;
      }
    };
    exports.isDefaultAndroid = function() {
      var nua = navigator.userAgent;
      return nua.indexOf("Mozilla/5.0") > -1 && nua.indexOf("Android ") > -1 && nua.indexOf("AppleWebKit") > -1 && !(nua.indexOf("Chrome") > -1);
    };
    var visibilityState;
    var isHidden = false;
    exports.initVisibilityChanger = function() {
      var hidden = "hidden";
      if (hidden in document) {
        document.addEventListener("visibilitychange", onchange);
      } else {
        if ((hidden = "mozHidden") in document) {
          document.addEventListener("mozvisibilitychange", onchange);
        } else {
          if ((hidden = "webkitHidden") in document) {
            document.addEventListener("webkitvisibilitychange", onchange);
          } else {
            if ((hidden = "msHidden") in document) {
              document.addEventListener("msvisibilitychange", onchange);
            } else {
              if ("onfocusin" in document) {
                document.onfocusin = document.onfocusout = onchange;
              } else {
                window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;
              }
            }
          }
        }
      }
      function onchange(evt) {
        var v = "visible", h = "hidden", evtMap = {focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h};
        evt = evt || window.event;
        if (evt.type in evtMap) {
          visibilityState = evtMap[evt.type];
        } else {
          visibilityState = this[hidden] ? "hidden" : "visible";
        }
        if (visibilityState == h) {
          isHidden = true;
          if (game.soundMan) {
            game.soundMan.setMutedByGame(true);
          }
        } else {
          isHidden = false;
          if (game.soundMan) {
            game.soundMan.setMutedByGame(false);
          }
        }
      }
    };
    exports.isIPhone4 = function() {
      try {
        if (screen) {
          if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
            if (screen.width == 320 && screen.height == 480) {
              return true;
            }
          }
        }
      } catch (e) {
        return false;
      }
      return false;
    };
    exports.createBitmapFromFile = function(fileName, x, y, scale, parent) {
      var btm = new createjs.Bitmap(game.files[fileName]);
      btm.x = x;
      btm.y = y;
      this.setSpriteScale(btm, scale);
      this.addToParent(btm, parent);
      return btm;
    };
    exports.setSpriteScale = function(obj, scale) {
      obj.scaleX = obj.scaleY = scale;
    };
    exports.removeFromParent = function(obj) {
      if (obj && obj.parent) {
        obj.parent.removeChild(obj);
      }
    };
    exports.addToParent = function(obj, parent) {
      this.removeFromParent(obj);
      if (parent) {
        parent.addChild(obj);
      }
    };
    exports.addToParentWithIndex = function(obj, parent, index) {
      this.removeFromParent(obj);
      if (parent) {
        parent.addChildAt(obj, index);
      }
    };
    exports.setSpritePosAndAngle = function(obj, x, y, rotation) {
      obj.x = x;
      obj.y = y;
      if (rotation !== undefined && rotation !== null) {
        obj.rotation = rotation;
      }
    };
    exports.isArrayContains = function(arr, obj) {
      return arr.indexOf(obj) > -1;
    };
    exports.addToArray = function(arr, obj) {
      if (!this.isArrayContains(arr, obj)) {
        arr.push(obj);
      }
    };
    exports.removeFromArray = function(arr, obj) {
      if (this.isArrayContains(arr, obj)) {
        arr.splice(arr.indexOf(obj, 0), 1);
      }
    };
    exports.createButton = function(x, y, scale, visionLabel, mouseDownFunc, parent, mouseUpFunc, objHorizAlign, objVertAlign, alignDevisor, spritesheet) {
      var ss = spritesheet ? spritesheet : game.interfaceSS;
      var b = new createjs.Sprite(ss);
      b.snapToPixel = true;
      b.x = x;
      b.y = y;
      b.scaleX = b.scaleY = scale;
      b.gotoAndStop(visionLabel);
      b.defaultScale = scale;
      b.defaultParams = {x:x, y:y, parent:parent, scaleX:scale, scaleY:scale, rotation:0, horizAlign:objHorizAlign, vertAlign:objVertAlign, alignDevisor:alignDevisor};
      if (mouseUpFunc) {
        b.addEventListener("pressup", mouseUpFunc, false);
      }
      if (mouseDownFunc) {
        b.addEventListener("mousedown", mouseDownFunc, false);
      }
      if (mouseDownFunc || mouseUpFunc) {
        b.cursor = "pointer";
        var data = ss.getAnimation(visionLabel);
        if (data && data.frames && data.frames.length > 0) {
          var rect = ss.getFrameBounds(data.frames[0]);
          b.setBoundingBox(rect.x * scale, rect.y * scale, rect.width * scale, rect.height * scale);
        }
      } else {
        b.mouseEnabled = false;
      }
      if (objHorizAlign) {
        this.addAutoAlignToObj(b);
      }
      if (parent) {
        parent.addChild(b);
      }
      return b;
    };
    exports.setTextAndCenter = function(x, y, text, field) {
      if (field.text == text) {
        return;
      }
      field.text = text;
      var bounds = field.getBounds();
      field.x = x - (bounds.width >> 1) * field.scaleX;
      if (y) {
        field.y = y - (bounds.height >> 1) * field.scaleY;
      }
    };
    var allAutoAligned = [];
    exports.addAutoAlignToObj = function(obj) {
      allAutoAligned.push(obj);
    };
    exports.updateAutoAlign = function() {
      var obj;
      for (var i = allAutoAligned.length - 1;i >= 0;i--) {
        obj = allAutoAligned[i];
        this.updateObjectPos(obj);
      }
    };
    exports.updateObjectPos = function(obj) {
      if (!obj) {
        return;
      }
      if (!this.isArrayContains(allAutoAligned, obj)) {
        return;
      }
      obj.x = obj.defaultParams.x;
      obj.y = obj.defaultParams.y;
      var alignDevisor = obj.defaultParams.alignDevisor;
      var vertAlign = obj.defaultParams.vertAlign;
      var horizAlign = obj.defaultParams.horizAlign;
      if (horizAlign === OBJ_LEFT_POS) {
        obj.x += game.resizeMan.deltaForHLeft() / alignDevisor;
      } else {
        if (horizAlign === OBJ_RIGHT_POS) {
          obj.x -= game.resizeMan.deltaForHLeft() / alignDevisor;
        }
      }
      if (vertAlign === OBJ_TOP_POS) {
        obj.y += game.resizeMan.deltaForVTop() / alignDevisor;
      } else {
        if (vertAlign === OBJ_BOTTOM_POS) {
          obj.y -= game.resizeMan.deltaForVTop() / alignDevisor;
        }
      }
    };
    exports.onPressStandartHandler = function(event) {
      exports.onHoverScale(event.target);
    };
    exports.onHoverScale = function(target, scale) {
      target.scaleX = target.scaleY = (scale ? scale : 1.1) * (target.defaultScale ? target.defaultScale : 1);
    };
    exports.onOutScale = function(target) {
      target.scaleX = target.scaleY = target.defaultScale ? target.defaultScale : 1;
    };
    exports.removeChildOnTweenComplete = function(event) {
      var screen = event.target;
      if (screen.parent) {
        screen.parent.removeChild(screen);
      }
    };
    exports.setAnimationSpeed = function(vision, speed) {
      vision._animation.speed = speed;
    };
    exports.setNextAnimation = function(vision, nextFrame) {
      vision._animation.next = nextFrame;
    };
    exports.addIsArrayFunction = function() {
      if (!Array.isArray) {
        Array.isArray = function(arg) {
          return Object.prototype.toString.call(arg) === "[object Array]";
        };
      }
    };
    var MUTED_FRAME = "musicoffbtn";
    var UNMUTED_FRAME = "musiconbtn";
    exports.updateMusicIconFrame = function(musicBtn) {
      var frame = game.soundMan.isMutedByPlayer ? MUTED_FRAME : UNMUTED_FRAME;
      musicBtn.gotoAndStop(frame);
    };
    exports.isRoomWithLever = function(roomId) {
      return roomId === game.ROOM_3 || roomId === game.ROOM_4 || roomId === game.ROOM_5 || roomId === game.ROOM_6 || roomId === game.ROOM_7 || roomId === game.ROOM_9;
    };
    exports.rememberDefaultParames = function(obj, objHorizAlign, objVertAlign, alignDevisor) {
      obj.defaultParams = {x:obj.x, y:obj.y, parent:obj.parent, scaleX:obj.scaleX, scaleY:obj.scaleY, rotation:obj.rotation, horizAlign:objHorizAlign, vertAlign:objVertAlign, alignDevisor:alignDevisor};
    };
    exports.doNothing = function() {
    };
    exports.createAutoAlignedCointainer = function(x, y, scale, parent, objHorizAlign, objVertAlign, alignDevisor) {
      var obj = new createjs.Container;
      obj.defaultParams = {x:x, y:y, parent:parent, scaleX:scale, scaleY:scale, rotation:0, horizAlign:objHorizAlign, vertAlign:objVertAlign, alignDevisor:alignDevisor};
      this.setSpriteScale(obj, scale);
      this.addAutoAlignToObj(obj);
      if (parent) {
        this.addToParent(obj, parent);
      }
      return obj;
    };
    exports.animateAlpha = function(obj, targetAlpha, time, override) {
      createjs.Tween.get(obj, {override:override}).to({alpha:targetAlpha}, time, createjs.Ease.sineOut);
    };
    exports.animateButtonHide = function(b, waitTime, isUpdateAlign) {
      this.setSpritePosAndAngle(b, b.defaultParams.x, b.defaultParams.y, 0);
      if (isUpdateAlign) {
        this.updateObjectPos(b);
      }
      this.setSpriteScale(b, b.defaultParams.scaleX);
      createjs.Tween.get(b, {override:true}).wait(waitTime).to({scaleX:0, scaleY:0, rotation:-90}, 400).call(this.removeChildOnTweenComplete);
    };
    exports.restoreButtonState = function(b, waitTime) {
      this.setSpritePosAndAngle(b, b.defaultParams.x, b.defaultParams.y, 0);
      this.updateObjectPos(b);
      this.setSpriteScale(b, b.defaultParams.scaleX);
    };
    exports.animateButtonShow = function(b, waitTime, isUpdateAlign) {
      this.setSpritePosAndAngle(b, b.defaultParams.x, b.defaultParams.y, -90);
      if (isUpdateAlign) {
        this.updateObjectPos(b);
      }
      this.setSpriteScale(b, 0);
      createjs.Tween.get(b, {override:true}).wait(waitTime).to({scaleX:b.defaultParams.scaleX, scaleY:b.defaultParams.scaleY, rotation:0}, 1E3, createjs.Ease.elasticOut);
    };
    exports.animateButtonShow2 = function(b, waitTime, isUpdateAlign) {
      if (isUpdateAlign) {
        this.updateObjectPos(b);
      }
      this.setSpriteScale(b, b.defaultParams.scaleX * 1.2);
      b.alpha = 0;
      createjs.Tween.get(b, {override:true}).wait(waitTime).to({scaleX:b.defaultParams.scaleX, scaleY:b.defaultParams.scaleY, alpha:1}, 100);
    };
    exports.animateButtonShow4 = function(b, waitTime, isUpdateAlign) {
      if (isUpdateAlign) {
        this.updateObjectPos(b);
      }
      this.setSpriteScale(b, b.defaultParams.scaleX * 1.3);
      b.alpha = 0;
      createjs.Tween.get(b, {override:true}).wait(waitTime).to({scaleX:b.defaultParams.scaleX, scaleY:b.defaultParams.scaleY, alpha:1}, 200, createjs.Ease.sineOut);
    };
    exports.animateButtonShow3 = function(b, waitTime, isUpdateAlign) {
      this.setSpritePosAndAngle(b, b.defaultParams.x, b.defaultParams.y, 90);
      if (isUpdateAlign) {
        this.updateObjectPos(b);
      }
      this.setSpriteScale(b, 0);
      createjs.Tween.get(b, {override:true}).wait(waitTime).to({scaleX:b.defaultParams.scaleX, scaleY:b.defaultParams.scaleY, rotation:0}, 1E3, createjs.Ease.elasticOut);
    };
    exports.animateButtonShowX = function(b, waitTime, startX, time, override) {
      this.updateObjectPos(b);
      var target = b.x;
      b.x += startX;
      createjs.Tween.get(b, {override:override}).wait(waitTime).to({x:target}, time, createjs.Ease.elasticOut);
    };
    exports.animateButtonShowY = function(b, waitTime, start, time, override, ease) {
      this.updateObjectPos(b);
      var target = b.y;
      b.y += start;
      createjs.Tween.get(b, {override:override}).wait(waitTime).to({y:target}, time, ease ? ease : createjs.Ease.sineOut);
    };
    exports.animateCardHide = function(b, waitTime, startScale) {
      createjs.Tween.get(b.baseBlock).wait(waitTime).call(function() {
        game.utils.setSpriteScale(b, startScale);
        createjs.Tween.get(b, {override:true}).wait(waitTime).to({scaleX:0, scaleY:0, rotation:-90}, 400).call(game.utils.removeChildOnTweenComplete);
      });
    };
    global.game.utils = exports;
  }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
}, {}]}, {}, [7]);

