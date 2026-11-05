function Startscreen(game)
{var cnt=0;this.STARTUP=cnt++;this.MAIN=cnt++;this.OPTIONS=cnt++;this.LEVEL_TITLE=cnt++;this.HIDDEN=cnt++;this.game=game;this.app=game.app;this.audio=game.audio;this.state=this.STARTUP;this.display=new PIXI.Container();this.arcade=FT.create(this.app.loader.getResult("Startscreen.json"),this.app.loader.getResult("Startscreen.png"));var children=AppUtils.getChildrenRecursive(this.arcade,[]);this.screenAnim;this.vortexMask;this.bgRotate;this.vortexElement;this.startButton;this.optionsButton;this.savegameResetButton;for(var i=0;i<children.length;i++)
{if(children[i].name=="Vortex_Mask")this.vortexMask=children[i];if(children[i].name=="Screen_Anim")this.screenAnim=children[i];if(children[i].name=="Bg_Rotate")this.bgRotate=children[i];if(children[i].name=="Vortex_Element")this.vortexElement=children[i];if(children[i].name=="Start_Button")this.startButton=children[i];if(children[i].name=="option_menu_btn")this.optionsButton=children[i];if(children[i].name=="savegames_reset_btn")this.savegameResetButton=children[i];}
this.screenAnim.mask=this.vortexMask;this.display.addChild(this.arcade);this.buttons=AppUtils.createElement("div","buttonHolder");AppUtils.setProps(this.buttons,{width:"0px",height:"0px",visibility:"hidden"});this.btn_startGame=AppUtils.createElement("div","btn_startGame");var btn=AppUtils.createElement("div","btn");AppUtils.setProps(btn,{left:"-200px",top:"-50px",width:"400px",height:"100px",cursor:"pointer"});this.btn_startGame.appendChild(btn);this.buttons.appendChild(this.btn_startGame);this.btn_options=AppUtils.createElement("div","btn_options");var btn=AppUtils.createElement("div","btn");AppUtils.setProps(btn,{left:"-50px",top:"-50px",width:"100px",height:"100px",cursor:"pointer"});this.btn_options.appendChild(btn);this.buttons.appendChild(this.btn_options);this.btn_deleteSavegame=AppUtils.createElement("div","btn_deleteSavegame");var btn=AppUtils.createElement("div","btn");AppUtils.setProps(btn,{left:"-250px",top:"-50px",width:"500px",height:"100px",cursor:"pointer"});this.btn_deleteSavegame.appendChild(btn);this.buttons.appendChild(this.btn_deleteSavegame);this.app.stage.insertBefore(this.buttons,this.app.preloadAnim.display);this.buttons.addEventListener("click",this.onClick.bind(this));if(App.stats)this.setupDebug();this.audio.create("Music_Startscreen.ogg");this.audio.create("Startup_Screen.ogg");}
Startscreen.prototype.init=function()
{this.state=this.STARTUP;this.arcade.enabled=true;this.display.visible=true;this.arcade.gotoAndPlay("ENTER");this.timeline=gsap.timeline({paused:true});this.timeline.set(this.arcade.scale,{ease:Quad.easeInOut,x:1,y:1},0);this.timeline.to(this.arcade.scale,6,{ease:Quad.easeInOut,x:1.3,y:1.3},0.1);this.timeline.play();}
Startscreen.prototype.showMenu=function()
{this.state=this.MAIN;this.display.alpha=1;this.display.visible=true;this.buttons.style.visibility="inherit";this.timeline.kill();this.timeline=gsap.timeline({paused:true});this.timeline.to(this.arcade.scale,3,{ease:Quad.easeInOut,x:2,y:2},0);this.timeline.play();this.audio.play("Music_Startscreen.ogg",true);this.audio.play("Startup_Screen.ogg");if(this.game.currentLevel>0||this.game.currentSavepoint>0)
{this.startButton.gotoAndStop(1);}
else
{this.startButton.gotoAndStop(0);}
this.arcade.enabled=true;this.arcade.gotoAndPlay("STARTUP");}
Startscreen.prototype.selectLevel=function()
{this.buttons.style.visibility="hidden";this.arcade.gotoAndPlay("MAIN_MENU_OUT");this.game.audio.setVolume("Music_Startscreen.ogg",0,1);this.timeline.kill();this.timeline=gsap.timeline({paused:true});this.timeline.to(this.arcade.scale,1,{ease:Quad.easeIn,x:4,y:4},0);this.timeline.call(this.selectLevelComplete.bind(this),null,2);this.timeline.play();}
Startscreen.prototype.selectLevelComplete=function()
{this.arcade.enabled=false;this.game.loadLevel();}
Startscreen.prototype.showOptionsMenu=function()
{this.state=this.OPTIONS;if(this.game.currentLevel>0||this.game.currentSavepoint>0)
{this.savegameResetButton.gotoAndStop(0);}
else
{this.savegameResetButton.gotoAndStop(1);}
this.screenAnim.gotoAndPlay("OPTIONS_IN");}
Startscreen.prototype.hideOptionsMenu=function()
{this.state=this.MAIN;if(this.game.currentLevel>0||this.game.currentSavepoint>0)
{this.startButton.gotoAndStop(1);}
else
{this.startButton.gotoAndStop(0);}
this.screenAnim.gotoAndPlay("OPTIONS_OUT");}
Startscreen.prototype.show=function()
{this.arcade.enabled=true;this.display.visible=true;if(this.alpha<1)gsap.to(this.display,1,{ease:Linear.easeNone,alpha:1});}
Startscreen.prototype.showLevelTitle=function(num)
{this.state=this.LEVEL_TITLE;this.arcade.enabled=true;this.arcade.scale.x=this.arcade.scale.y=1;this.display.alpha=1;this.display.visible=true;this.timeline.kill();if(num==0)
{this.arcade.gotoAndStop("LEVEL_TITLE_0");}
else if(num==1)
{this.arcade.gotoAndStop("LEVEL_TITLE_1");}
else if(num==2)
{this.arcade.gotoAndStop("LEVEL_TITLE_2");}
else if(num==3)
{this.arcade.gotoAndStop("END_SCREEN");}}
Startscreen.prototype.hide=function()
{gsap.to(this.display,1,{ease:Linear.easeNone,alpha:0,onComplete:this.hideComplete.bind(this)});}
Startscreen.prototype.hideComplete=function()
{this.state=this.HIDDEN;this.display.visible=false;this.arcade.enabled=false;}
Startscreen.prototype.onClick=function(event)
{switch(event.target.parentNode)
{case this.btn_startGame:this.selectLevel();break;case this.btn_options:if(this.state==this.MAIN)
{this.showOptionsMenu();}
else
{this.hideOptionsMenu();}
break;case this.btn_deleteSavegame:this.game.deleteAllSavepoints();this.savegameResetButton.gotoAndStop(1);break;case this.button_1:this.game.currentLevel=0;this.game.currentSavepoint=0;this.selectLevel();break;case this.button_2:this.game.currentLevel=1;this.game.currentSavepoint=0;this.selectLevel();break;case this.button_3:this.game.currentLevel=2;this.game.currentSavepoint=0;this.selectLevel();break;}}
Startscreen.prototype.onUpdate=function(time,deltaTime)
{if(this.state==this.HIDDEN)return;this.bgRotate.rotation+=deltaTime*0.0001;var scale=this.vortexElement.scale.x;scale*=1.02;if(scale>1.6)scale*=0.5;this.vortexElement.scale.x=this.vortexElement.scale.y=scale;var tf=this.getButtonTransform(this.startButton);AppUtils.setProps(this.btn_startGame,{left:tf.x+"px",top:tf.y+"px",transform:"scale( "+this.app.scale+" )",visibility:tf.v});tf=this.getButtonTransform(this.optionsButton);AppUtils.setProps(this.btn_options,{left:tf.x+"px",top:tf.y+"px",transform:"scale( "+this.app.scale+" )",visibility:tf.v});tf=this.getButtonTransform(this.savegameResetButton);AppUtils.setProps(this.btn_deleteSavegame,{left:tf.x+"px",top:tf.y+"px",transform:"scale( "+this.app.scale+" )",visibility:tf.v});}
Startscreen.prototype.getButtonTransform=function(display)
{var pos=display.getGlobalPosition();var visible;if(display.visible)
{visible="inherit";}
else
{visible="hidden";}
return{x:pos.x,y:pos.y,v:visible};}
Startscreen.prototype.onResize=function()
{this.display.scale.x=this.display.scale.y=this.app.scale;this.display.x=this.app.stageW*0.5;this.display.y=this.app.stageH*0.5;}
Startscreen.prototype.setupDebug=function()
{this.button_1=AppUtils.createElement("div","button_1");AppUtils.setProps(this.button_1,{left:"100px"});var btn=AppUtils.createElement("div","btn");AppUtils.setProps(btn,{width:"100px",height:"100px",color:"#FFF",fontFamily:"Arial",fontSize:"2em",textAlign:"center",outlineColor:"#FFFFFF",outlineWidth:"5px",cursor:"pointer"});btn.textContent="1";this.button_1.appendChild(btn);this.button_2=AppUtils.createElement("div","button_2");AppUtils.setProps(this.button_2,{left:"200px"});btn=AppUtils.createElement("div","btn");AppUtils.setProps(btn,{width:"100px",height:"100px",color:"#FFF",fontFamily:"Arial",fontSize:"2em",textAlign:"center",outlineColor:"#FFFFFF",outlineWidth:"5px",cursor:"pointer"});btn.textContent="2";this.button_2.appendChild(btn);this.button_3=AppUtils.createElement("div","button_3");AppUtils.setProps(this.button_3,{left:"300px"});btn=AppUtils.createElement("div","btn");AppUtils.setProps(btn,{width:"100px",height:"100px",color:"#FFF",fontFamily:"Arial",fontSize:"2em",textAlign:"center",outlineColor:"#FFFFFF",outlineWidth:"5px",cursor:"pointer"});btn.textContent="3";this.button_3.appendChild(btn);this.buttons.appendChild(this.button_1);this.buttons.appendChild(this.button_2);this.buttons.appendChild(this.button_3);}