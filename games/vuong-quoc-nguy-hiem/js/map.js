function Map(level,data)
{this.level=level;this.game=level.game;this.app=level.game.app;this.audio=level.game.audio;this.debug=this.level.debug;this.display=FT.create(data.json,data.img);var i;var mapItems;var displayItem;var item;mapItems=AppUtils.getChildrenRecursive(this.display);for(i=0;i<mapItems.length;i++)
{displayItem=mapItems[i];if(displayItem.name.indexOf("Waterfall_Water")==0)
{item=new Waterfall(displayItem,this,this.app.loader.getResult("Waterfall_Tex.png"));}
else if(displayItem.name.indexOf("fog_anim_H")==0)
{item=new Animator(displayItem,this,{x:-0.04,y:0,maxX:-2400,maxY:0});}
else if(displayItem.name.indexOf("Fog_Anim_Level_2")==0)
{item=new Animator(displayItem,this,{x:-0.08,y:0,maxX:-3600,maxY:0});}
else if(displayItem.name.indexOf("Waterfall_Container")==0)
{this.audio.create("Waterfall.ogg");var audiodata={x:displayItem.x,y:displayItem.y,min:1000,max:5000,id:"Waterfall.ogg"};if(displayItem.parent.name=="_MBG")audiodata.x/=0.65;item=new AudioSource(displayItem,this,audiodata);}
else if(displayItem.name.indexOf("Rope_Anim")==0)
{item=new RopeAnim(displayItem,this);}
else if(displayItem.name.indexOf("WavingGrass")==0)
{item=new WavingGrass(displayItem,this);}}
mapItems=this.display.children.slice();for(i=0;i<mapItems.length;i++)
{displayItem=mapItems[i];if(displayItem.name.indexOf("CameraSetting")==0)
{item=new CameraSetting(displayItem,this,data.json);this.level.cameraSettings.push(item);this.display.removeChild(displayItem);}}
mapItems=this.display._MG.children.slice();for(i=0;i<mapItems.length;i++)
{displayItem=mapItems[i];if(displayItem.name.indexOf("Static")==0)
{item=new Static(displayItem,this);item.groundAudio=this.getGroundAudio(item);}
else if(displayItem.name.indexOf("Dynamic_Branch")==0)
{item=new Dynamic_Branch(displayItem,this);}
else if(displayItem.name.indexOf("Dynamic_Log")==0)
{item=new Dynamic_Log(displayItem,this);item.groundAudio=this.getGroundAudio(item);}
else if(displayItem.name.indexOf("Pushable")==0)
{item=new Pushable(displayItem,this);}
else if(displayItem.name.indexOf("Dynamic")==0)
{item=new Dynamic(displayItem,this);}
else if(displayItem.name.indexOf("Enemy")==0)
{if(displayItem.name.indexOf("Enemy_Rat_Richie")==0)
{item=new Enemy(displayItem,this,{json:App.loader.getResult("Enemy_Rat_Richie.json"),img:App.loader.getResult("Enemy_Rat_Richie.png")});}
else if(displayItem.name.indexOf("Enemy_Rat_Hausner")==0)
{item=new Enemy(displayItem,this,{json:App.loader.getResult("Enemy_Rat_Hausner.json"),img:App.loader.getResult("Enemy_Rat_Hausner.png")});}
else if(displayItem.name.indexOf("Enemy_Jetpack")==0)
{item=new Enemy_Jetpack(displayItem,this,{json:App.loader.getResult("Enemy_Jetpack.json"),img:App.loader.getResult("Enemy_Jetpack.png")});item.bullets[0].display.setParent(this.display._MG);item.bullets[1].display.setParent(this.display._MG);for(var a=0;a<item.particles.length;a++)
{this.display._MFG.addChild(item.particles[a]);item.particles[a].visible=false;}}
else if(displayItem.name.indexOf("Enemy_Rat_")==0)
{item=new Enemy(displayItem,this,{json:App.loader.getResult("Enemy_Rat_Richie.json"),img:App.loader.getResult("Enemy_Rat_Richie.png")});}
item.display.setParent(this.display._MG);this.display._MG.removeChild(displayItem);}
else if(displayItem.name.indexOf("Ninja")==0)
{if(displayItem.name.indexOf("Cole")!=-1)
{item=new Ninja(displayItem,this,{json:App.loader.getResult("Cole.json"),img:App.loader.getResult("Cole.png")});}
else if(displayItem.name.indexOf("Kai")!=-1)
{item=new Ninja(displayItem,this,{json:App.loader.getResult("Kai.json"),img:App.loader.getResult("Kai.png")});}
displayItem.parent.addChild(item.display);displayItem.parent.removeChild(displayItem);}
else if(displayItem.name.indexOf("Samurai")==0)
{item=new Samurai(displayItem,this,{json:App.loader.getResult("Samurai.json"),img:App.loader.getResult("Samurai.png")});displayItem.parent.addChild(item.display);displayItem.parent.removeChild(displayItem);}
else if(displayItem.name.indexOf("ArcadeMachine")==0)
{item=new ArcadeMachine(displayItem,this);}
else if(displayItem.name.indexOf("Rockfall")==0)
{item=new Rockfall(displayItem,this);}
else if(displayItem.name.indexOf("Bridge")==0)
{item=new Sensor_Trap(displayItem,this);}
else if(displayItem.name.indexOf("Slippery")==0)
{item=new SlipperyGround(displayItem,this);}
else if(displayItem.name.indexOf("PassFromBottom")==0)
{item=new PassFromBottom(displayItem,this);item.groundAudio=this.getGroundAudio(item);}
else if(displayItem.name.indexOf("Deadzone")==0)
{item=new Deadzone(displayItem,this);}
else if(displayItem.name.indexOf("InstantDeath")==0)
{item=new InstantDeath(displayItem,this);}
else if(displayItem.name.indexOf("Waypoint")==0)
{item=new Waypoint(displayItem,this,data.json);}
else if(displayItem.name.indexOf("DeadlyBoulder")==0)
{item=new DeadlyBoulder(displayItem,this,data.json);}
else if(displayItem.name.indexOf("Stonefall")==0)
{item=new Stonefall(displayItem,this);}
else if(displayItem.name.indexOf("Collect_Weapons")==0)
{item=new MapItem(displayItem,this);this.level.addItem(item);}
else if(displayItem.name.indexOf("Underwood")==0)
{item=new Underwood(displayItem,this);}}}
Map.prototype.onUpdate=function(time,deltaTime)
{this.display.x=this.level.halfW;this.display.y=this.level.halfH;this.display.scale.x=this.display.scale.y=this.level.scale;this.display._BG.x=this.level.camera.pos.x*0.5;this.display._MBG.x=this.level.camera.pos.x*0.65;this.display._MG.x=this.level.camera.pos.x;this.display._MFG.x=this.level.camera.pos.x;this.display._FG.x=this.level.camera.pos.x*1.25;this.display._BG.y=this.display._MBG.y=this.display._MG.y=this.display._MFG.y=this.display._FG.y=this.level.camera.pos.y;this.display._BG.scale.x=this.display._MBG.scale.x=this.display._MG.scale.x=this.display._MFG.scale.x=this.display._FG.scale.x=this.level.camera.scale;this.display._BG.scale.y=this.display._MBG.scale.y=this.display._MG.scale.y=this.display._MFG.scale.y=this.display._FG.scale.y=this.level.camera.scale;}
Map.prototype.getGroundAudio=function(item)
{if(item.name.indexOf("_Gravel")!=-1)
{var audio="Footsteps_Gravel.ogg";this.game.audio.create(audio);return audio;}
else if(item.name.indexOf("_Grass")!=-1)
{var audio="Footsteps_Grass.ogg";this.game.audio.create(audio);return audio;}
else if(item.name.indexOf("_Stone")!=-1)
{var audio="Footsteps_Stone.ogg";this.game.audio.create(audio);return audio;}
else if(item.name.indexOf("_Wood")!=-1)
{var audio="Footsteps_Wood.ogg";this.game.audio.create(audio);return audio;}}
Map.prototype.destroy=function()
{FT.remove(this.display);if(this.app)this.app=null;if(this.game)this.game=null;}