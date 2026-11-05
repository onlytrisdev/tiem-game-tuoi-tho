function Level(game)
{var cnt=0;this.INIT=cnt++;this.RESET=cnt++;this.COMPLETE=cnt++;this.RUNNING=cnt++;this.state=this.INIT;this.id=0;this.game=game;this.app=game.app;this.stageW=0;this.stageH=0;this.scale=1;this.inverseScale=1;this.itemCount=0;this.items=[];this.updatables=[];this.begincontacts=[];this.endcontacts=[];this.audiosources=[];this.shaders=[];this.textures=[];this.debug=this.app.locale.levelDebug;}
Level.prototype.init=function()
{this.state=this.INIT;this.display=new PIXI.Container();this.textures["fxmap"]=new PIXI.BaseTexture(this.app.loader.getResult("FxMap.png"));this.input=new InputHandler(this);this.physics=new PhysicsEngine(this);this.cameraSettings=[];this.map=new Map(this,{json:this.app.loader.getResult("Map.json"),img:this.app.loader.getResult("Map.png")});var playerData={json:this.app.loader.getResult("Jay.json"),img:this.app.loader.getResult("Jay.png"),spawnPoint:[this.app.locale.levels[this.game.currentLevel].savepoints[0][0],this.app.locale.levels[this.game.currentLevel].savepoints[0][1]]}
this.player=new Player(this,playerData);this.player.setStateMachine({state:this.player.IDLE});this.map.display._MG.addChild(this.player.display);this.map.display._MFG.addChild(this.player.spinjitzuFX.display);this.map.display._MFG.addChild(this.player.spinjitzuFX.particleDisplay);this.hud=new HUD(this);this.particles=new Particles(this);this.map.display._MFG.addChild(this.particles.display);this.deathAnim=new DeathAnim(this);this.map.display._MFG.addChild(this.deathAnim.display);this.cinematic=new Cinematic(this);this.camera=new Camera(this);this.camera.cameraSettings=this.cameraSettings;this.camera.setViewport(this.map.display._MG);this.camera.setTarget(this.player);this.fader=new Fader(this);if(this.debug)this.logLevelStats();this.display.addChild(this.map.display);this.display.addChild(this.hud.display);this.display.addChild(this.cinematic.display);this.display.addChild(this.fader.display);if(this.debug)this.setupDebug();this.onBeginContact=this.onBeginContact.bind(this);this.onEndContact=this.onEndContact.bind(this);this.physics.addEventListener("beginContact",this.onBeginContact);this.physics.addEventListener("endContact",this.onEndContact);}
Level.prototype.start=function()
{this.state=this.RUNNING;this.cinematic.init();}
Level.prototype.playerIsDead=function()
{this.fader.show();this.cinematic.stop();gsap.to(this.player.display,1,{ease:Linear.easeNone,alpha:0});this.deathAnim.start({x:this.player.display.x,y:this.player.display.y+100},this.deathAnim.DISSOLVE);this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=false;setTimeout(this.reset.bind(this),1000);}
Level.prototype.reset=function()
{this.restoreSavepoint();setTimeout(this.restart.bind(this),1000);}
Level.prototype.restart=function()
{this.fader.hide();}
Level.prototype.levelComplete=function()
{this.fader.show();setTimeout(this.destroy.bind(this),1000);}
Level.prototype.destroy=function()
{this.state=this.COMPLETE;this.updatables=[];this.begincontacts=[];this.endcontacts=[];this.audiosources=[];this.physics.removeEventListener("beginContact",this.onBeginContact);this.physics.removeEventListener("endContact",this.onEndContact);var item;for(var i=0;i<this.items.length;i++)
{item=this.items[i];if(item.destroy)item.destroy();if(item.app)item.app=null;if(item.game)item.game=null;if(item.level)item.level=null;if(item.audio)item.audio=null;}
this.textures["fxmap"].destroy();this.input.destroy();this.physics.destroy();this.map.destroy();this.player.destroy();this.hud.destroy();this.particles.destroy();this.deathAnim.destroy();this.cinematic.destroy();this.camera.destroy();this.game.audio.destroyTemporaries();this.game.pixi.stage.removeChild(this.display);this.game.pixi.renderer.textureGC.unload(this.display);if(this.debug)this.destroyDebug();this.game.levelComplete();if(this.app)this.app=null;if(this.game)this.game=null;}
Level.prototype.logLevelStats=function()
{console.log("******************************","Map","* Status","* init complete");console.log("******************************",this.items.length," items");console.log("******************************",this.updatables.length," updatables");console.log("******************************",this.begincontacts.length," begincontacts");console.log("******************************",this.endcontacts.length," endcontacts");console.log("******************************",this.physics.world.bodies.length," p2 bodies");}
Level.prototype.addItem=function(item)
{item.id=this.itemCount;this.itemCount++;if(!item.enabled)return;this.items.push(item);if(item.body)this.physics.world.addBody(item.body);if(item.constraint)this.physics.world.addConstraint(item.constraint);if(item.spring)this.physics.world.addSpring(item.spring);if(item.update)this.updatables.push(item);if(item.begincontact)this.begincontacts.push(item);if(item.endcontact)this.endcontacts.push(item);if(item.audiosource)
{this.game.audio.play(item.audiodata.id,true,0);this.audiosources.push(item);}
if(this.debug)console.log(item.id,item.name)}
Level.prototype.removeItemListeners=function(item)
{this.removeItemUpdate(item);this.removeItemBeginContact(item);this.removeItemEndContact(item);}
Level.prototype.removeItemUpdate=function(item)
{for(var i=0;i<this.updatables.length;i++)
{if(this.updatables[i]==item)
{this.updatables.splice(i,1);item.update=false;break;}}}
Level.prototype.removeItemBeginContact=function(item)
{for(var i=0;i<this.begincontacts.length;i++)
{if(this.begincontacts[i]==item)
{this.begincontacts.splice(i,1);item.begincontact=false;break;}}}
Level.prototype.removeItemEndContact=function(item)
{for(var i=0;i<this.endcontacts.length;i++)
{if(this.endcontacts[i]==item)
{this.endcontacts.splice(i,1);item.endcontact=false;break;}}}
Level.prototype.removeItemAudioSource=function(item)
{for(var i=0;i<this.audiosources.length;i++)
{if(this.audiosources[i]==item)
{this.audiosources.splice(i,1);item.audiosource=false;break;}}}
Level.prototype.removeItem=function(item)
{if(item.body)this.physics.world.removeBody(item.body);if(item.constraint)this.physics.world.removeConstraint(item.constraint);if(item.spring)this.physics.world.removeSpring(item.spring);this.removeItemUpdate(item);this.removeItemBeginContact(item);this.removeItemEndContact(item);this.removeItemAudioSource(item);}
Level.prototype.getItemByName=function(name)
{for(var i=0;i<this.items.length;i++)
{if(this.items[i].name==name)
{return this.items[i];break;}}}
Level.prototype.onUpdate=function(time,deltaTime)
{if(this.state<this.RUNNING)return;var i;var item;var updCnt=0;this.input.onUpdate();this.physics.onUpdate(time,deltaTime);this.cinematic.onUpdate(time,deltaTime);for(i=0;i<this.updatables.length;i++)
{item=this.updatables[i];if(!item.enabled||!item.display.visible)continue;updCnt++;item.onUpdate(time,deltaTime);}
for(i=0;i<this.audiosources.length;i++)
{this.audiosources[i].updateAudio(this.player.body.position);}
this.deathAnim.onUpdate(time,deltaTime);this.camera.onUpdate(time,deltaTime);this.map.onUpdate(time,deltaTime);this.particles.onUpdate(time,deltaTime);if(this.debug)this.debugDisplay.innerHTML="updates:</br>"+updCnt;}
Level.prototype.onBeginContact=function(event)
{var e;var eq;var i;var item;var updCnt=0;for(e=0;e<event.contactEquations.length;e++)
{eq=event.contactEquations[e];for(i=0;i<this.begincontacts.length;i++)
{item=this.begincontacts[i];if(!item.enabled||!item.display.visible)continue;updCnt++;if(item.body===eq.bodyA)
{item.onBeginContact
({self:item,other:eq.bodyB.item,eq:eq,normal:eq.normalA});}
else if(item.body===eq.bodyB)
{var normal=[eq.normalA[0]* -1,eq.normalA[1]* -1];item.onBeginContact
({self:item,other:eq.bodyA.item,eq:eq,normal:normal});}}}
if(this.debug)this.debugDisplay2.innerHTML="contacts:</br>"+updCnt;}
Level.prototype.onEndContact=function(event)
{var i;var item;for(i=0;i<this.endcontacts.length;i++)
{item=this.endcontacts[i];if(!item.enabled||!item.display.visible)continue;if(item.body===event.bodyA)
{item.onEndContact
({other:event.bodyB.item});}
else if(item.body===event.bodyB)
{item.onEndContact
({other:event.bodyA.item});}}}
Level.prototype.createSavepointDebug=function()
{this.createSavepoint(0);}
Level.prototype.createSavepoint=function(spid)
{if(!spid)var spid=0;var savepoint={gameData:{level:this.game.currentLevel,savepoint:spid},inputData:{moveEnabled:this.input.moveEnabled,jumpEnabled:this.input.jumpEnabled,actionEnabled:this.input.actionEnabled,specialEnabled:this.input.specialEnabled},playerData:{direction:this.player.direction,spinjitzuPower:this.player.spinjitzuPower.valueOf()},cameraData:{offset:{x:this.camera.offset.x,y:this.camera.offset.y},zoom:this.camera.zoom},itemData:[]};var i;var item;var bodyData;var itemData;for(i=0;i<this.items.length;i++)
{item=this.items[i];if(item.body)
{bodyData={type:item.body.type.valueOf(),mass:item.body.mass.valueOf(),damping:item.body.damping.valueOf(),angularDamping:item.body.angularDamping.valueOf(),gravityScale:item.body.gravityScale.valueOf(),collisionResponse:item.body.collisionResponse.valueOf(),position:[item.body.position[0],item.body.position[1]],angle:item.body.angle.valueOf()}}
else
{bodyData=null;}
itemData={name:item.name,id:item.id,type:item.type,enabled:item.enabled,update:item.update,begincontact:item.begincontact,endcontact:item.endcontact,audiosource:item.audiosource,bodyData:bodyData}
if(item instanceof Ninja)
{if(item.currentTarget==this.player)
{itemData.follow={dist_Min:item.dist_Min,dist_Action:item.dist_Action,dist_Max:item.dist_Max}}}
savepoint.itemData.push(itemData);}
this.game.storageHandler.setItem(savepoint);console.log("------------------------------","Map","* Status","* savepoint created");}
Level.prototype.restoreSavepoint=function()
{this.state=this.RESET;this.updatables=[];this.begincontacts=[];this.endcontacts=[];var savepoint=this.game.storageHandler.getItem();var i;var item;var bodyData;var itemData;for(i=0;i<savepoint.itemData.length;i++)
{itemData=savepoint.itemData[i];item=this.items[i];item.enabled=itemData.enabled;item.type=itemData.type;item.update=itemData.update;item.begincontact=itemData.begincontact;item.endcontact=itemData.endcontact;item.audiosource=itemData.audiosource;if(itemData.enabled)
{if(itemData.bodyData)
{bodyData=itemData.bodyData;item.body.type=bodyData.type.valueOf();item.body.mass=bodyData.mass.valueOf();item.body.damping=bodyData.damping.valueOf();item.body.angularDamping=bodyData.angularDamping.valueOf();item.body.gravityScale=bodyData.gravityScale.valueOf();item.body.collisionResponse=bodyData.collisionResponse.valueOf();item.body.position=[bodyData.position[0],bodyData.position[1]],item.body.angle=bodyData.angle.valueOf();item.body.velocity=[0,0];item.body.angularVelocity=0;item.body.updateMassProperties();}
if(item.body)this.physics.world.addBody(item.body);if(item.constraint)this.physics.world.addConstraint(item.constraint);if(item.spring)this.physics.world.addSpring(item.spring);if(item.update)this.updatables.push(item);if(item.begincontact)this.begincontacts.push(item);if(item.endcontact)this.endcontacts.push(item);}
if(item.reset)item.reset.call(item);if(itemData.follow)
{item.follow(this.player,{dist_Min:itemData.follow.dist_Min,dist_Action:itemData.follow.dist_Action,dist_Max:itemData.follow.dist_Max});}}
this.cinematic.reset();this.camera.offset=savepoint.cameraData.offset;this.camera.zoom=savepoint.cameraData.zoom;this.camera.resetViewport(this.player.body.position);this.input.moveEnabled=savepoint.inputData.moveEnabled;this.input.jumpEnabled=savepoint.inputData.jumpEnabled;this.input.actionEnabled=savepoint.inputData.actionEnabled;this.input.specialEnabled=savepoint.inputData.specialEnabled;gsap.killTweensOf(this.player.display);this.player.display.alpha=1;this.player.direction=savepoint.playerData.direction;this.player.spinjitzuPower=savepoint.playerData.spinjitzuPower;this.player.setStateMachine({state:this.player.IDLE_START,isArmed:0});this.player.jumpCount=this.player.bottomContactFix=0;this.player.energy=5;this.player.updateEnergy();this.player.updateSpinjitzuPower();console.log("------------------------------","Map","* Status","* savepoint restored");if(this.debug)this.logLevelStats();this.state=this.RUNNING;}
Level.prototype.onResize=function()
{this.stageW=this.app.stageW;this.stageH=this.app.stageH;this.halfW=this.stageW*0.5;this.halfH=this.stageH*0.5;this.scale=this.app.scale;this.input.onResize();this.hud.onResize();this.fader.onResize();}
Level.prototype.setupDebug=function()
{this.debugCreateSavepoint=AppUtils.createElement("div","debugCreateSavepoint");AppUtils.setProps(this.debugCreateSavepoint,{top:"100px",width:"90px",height:"40px",paddingLeft:"5px",paddingTop:"5px",backgroundColor:"#090",color:"#FFF",fontFamily:"Arial",fontSize:"1em",cursor:"pointer"});this.debugCreateSavepoint.textContent="Create SP";this.createSavepointDebug=this.createSavepointDebug.bind(this);this.debugCreateSavepoint.addEventListener("click",this.createSavepointDebug);App.stage.appendChild(this.debugCreateSavepoint);this.debugResetSavepoint=AppUtils.createElement("div","debugResetSavepoint");AppUtils.setProps(this.debugResetSavepoint,{top:"140px",width:"90px",height:"40px",paddingLeft:"5px",paddingTop:"5px",backgroundColor:"#900",color:"#FFF",fontFamily:"Arial",fontSize:"1em",cursor:"pointer"});this.debugResetSavepoint.textContent="Reset SP";this.restoreSavepoint=this.restoreSavepoint.bind(this);this.debugResetSavepoint.addEventListener("click",this.restoreSavepoint);App.stage.appendChild(this.debugResetSavepoint);this.debugDisplay=AppUtils.createElement("div","debugDisplay");AppUtils.setProps(this.debugDisplay,{top:"190px",width:"90px",height:"40px",paddingLeft:"5px",paddingTop:"5px",backgroundColor:"#660",color:"#FFF",fontFamily:"Arial",fontSize:"1em",cursor:"pointer"});App.stage.appendChild(this.debugDisplay);this.debugDisplay2=AppUtils.createElement("div","debugDisplay2");AppUtils.setProps(this.debugDisplay2,{top:"240px",width:"90px",height:"40px",paddingLeft:"5px",paddingTop:"5px",backgroundColor:"#660",color:"#FFF",fontFamily:"Arial",fontSize:"1em",cursor:"pointer"});App.stage.appendChild(this.debugDisplay2);}
Level.prototype.destroyDebug=function()
{this.debugCreateSavepoint.removeEventListener("click",this.createSavepointDebug);this.debugResetSavepoint.removeEventListener("click",this.restoreSavepoint);App.stage.removeChild(this.debugCreateSavepoint);App.stage.removeChild(this.debugResetSavepoint);App.stage.removeChild(this.debugDisplay);App.stage.removeChild(this.debugDisplay2);}