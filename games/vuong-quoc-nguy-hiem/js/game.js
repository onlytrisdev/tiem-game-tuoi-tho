'use strict';function Game(app)
{var cnt=0;this.INIT=cnt++;this.SHOW_ENTER=cnt++;this.SHOW_MENU=cnt++;this.LEVEL_LOADING=cnt++;this.LEVEL_RUNNING=cnt++;this.LEVEL_COMPLETE=cnt++;this.state=this.INIT;this.app=app;this.currentLevel=0;this.currentSavepoint=0;this.fullscreenHandler={onResize:function(){}};this.level={onResize:function(){},onUpdate:function(){}};PIXI.settings.WRAP_MODE=PIXI.WRAP_MODES.REPEAT;if(this.app.isIOS)
{PIXI.settings.SCALE_MODE=PIXI.SCALE_MODES.LINEAR;PIXI.settings.PRECISION_FRAGMENT=PIXI.PRECISION.HIGH;}
this.pixi=new PIXI.Application({width:this.stageW,height:this.stageH,antialias:false,transparent:false,resolution:1,autoStart:false,backgroundColor:0x000000});this.app.stage.insertBefore(this.pixi.view,this.app.preloadAnim.display);this.storageHandler=new StorageHandler(this);if(this.storageHandler.savepoint)
{this.currentLevel=this.storageHandler.savepoint.gameData.level;this.currentSavepoint=this.storageHandler.savepoint.gameData.savepoint;}
this.storageHandler.getLegacyData();if(this.storageHandler.legacyLevel)this.currentLevel=this.storageHandler.legacyLevel;this.audio=new AudioHandler(this);this.startscreen=new Startscreen(this);this.pixi.stage.addChild(this.startscreen.display);this.endscreen=new Endscreen(this);}
Game.prototype.init=function()
{this.fullscreenHandler=new FullscreenHandler(this);this.app.fscontainer.appendChild(this.fullscreenHandler.display);this.legal=new Legal(this);this.app.fscontainer.appendChild(this.legal.display);this.fullscreenHandler.onResize();this.state=this.SHOW_ENTER;this.startscreen.init();}
Game.prototype.showMenu=function()
{this.state=this.SHOW_MENU;this.startscreen.showMenu();this.legal.show();}
Game.prototype.loadLevel=function()
{this.state=this.LEVEL_LOADING;console.log("******************************","Game","* Status","* loading level",this.currentLevel);this.app.loader.removeAll();this.app.loader.removeAllEventListeners();this.app.loader=new createjs.LoadQueue();this.app.loader.stopOnError=true;this.app.loader.addEventListener("error",this.app.onLoadFail.bind(this.app));this.app.loader.addEventListener("fileerror",this.app.onLoadFail.bind(this.app));this.app.loader.addEventListener("progress",this.app.onLoadProgress.bind(this.app));this.app.loader.addEventListener("complete",this.onLevelLoaded.bind(this));var manifest=this.app.locale.levelDefaults.concat(this.app.locale.levels[this.currentLevel].preload);this.app.preloadAnim.show();this.app.loader.loadManifest(manifest);this.legal.hide();}
Game.prototype.onLevelLoaded=function()
{console.log("******************************","Game","* Status","* level loading success",this.currentLevel);console.log(FT.timelines.length);this.level=new Level(this);this.level.init();this.pixi.stage.addChildAt(this.level.display,0);this.onResize();this.app.preloadAnim.hide();if(!this.level.debug)
{if(this.currentSavepoint==0)this.level.cinematic.startMusic();this.startscreen.showLevelTitle(this.currentLevel);setTimeout(this.startLevel.bind(this),2000);}
else
{this.level.cinematic.startMusic();this.startscreen.hide();this.startLevel();}}
Game.prototype.startLevel=function()
{this.state=this.LEVEL_RUNNING;if(this.currentSavepoint>0)
{this.level.restoreSavepoint();}
else
{this.level.createSavepoint(0);}
this.startscreen.hide();this.level.start();}
Game.prototype.levelComplete=function()
{this.state=this.LEVEL_COMPLETE;this.level={onResize:function(){},onUpdate:function(){}};this.currentLevel++;if(this.currentLevel<=2)
{this.currentSavepoint=0;this.loadLevel();}
else
{this.showEndscreen();}}
Game.prototype.showEndscreen=function()
{this.pixi.stage.addChild(this.endscreen.display);this.endscreen.show();setTimeout(this.onEndscreenComplete.bind(this),11000);}
Game.prototype.onEndscreenComplete=function()
{this.endscreen.hide();this.endscreen=null;this.currentLevel=2;setTimeout(this.startscreen.showMenu.bind(this.startscreen),1000);}
Game.prototype.deleteAllSavepoints=function()
{this.storageHandler.removeItem();this.currentLevel=0;this.currentSavepoint=0;}
Game.prototype.onUpdate=function(time,deltaTime)
{if(this.state<this.SHOW_ENTER)return;this.startscreen.onUpdate(time,deltaTime);this.level.onUpdate(time,deltaTime);FT.onUpdate(time,deltaTime);this.pixi.renderer.render(this.pixi.stage);}
Game.prototype.onResize=function()
{this.startscreen.onResize();this.level.onResize();this.pixi.renderer.resize(this.app.stageW,this.app.stageH);this.fullscreenHandler.onResize();if(this.video)this.video.onResize();}