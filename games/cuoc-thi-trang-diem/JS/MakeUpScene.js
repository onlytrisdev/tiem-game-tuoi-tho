var MakeUpScene=cc.Scene.extend({ctor:function()
{this._super();this.init();},onEnter:function()
{this._super();cc.eventManager.addListener({event:cc.EventListener.TOUCH_ONE_BY_ONE,swallowTouches:true,onTouchBegan:this.onTouchBegan,onTouchMoved:this.onTouchMoved,onTouchEnded:this.onTouchEnded},this);if('mouse'in cc.sys.capabilities)
{cc.eventManager.addListener({event:cc.EventListener.MOUSE,onMouseMove:this.onMouseMove},this);}},init:function()
{this._super();this.bg=cc.Sprite.create("RES/MK/bg_"+selectedMakeupLevel+".png");this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);this.bg.setScale(1.0);this.addChild(this.bg);this.runningChar=selectedMakeupLevel;this.isTouchOn=false;this.scheduleOnce(function(){this.setTouchEnable();},1.0,"setTouchEnable");this.createMainMenu();this.setUpChar();this.createPanel();this.prt_Sparkle=cc.ParticleSystem.create(res_comman.sparkle_1_plist);this.prt_Sparkle.setScale(1.0);this.prt_Sparkle.stopSystem();this.addChild(this.prt_Sparkle,250);},createPanel:function()
{this.panel=cc.Sprite.create("RES/MK/PNL/panel.png");this.panel.setPosition(comman.winSize().width/2,0);this.panel.setAnchorPoint(0.5,0.0);this.addChild(this.panel,9);this.mainIcons=[];for(var i=0;i<6;i++)
{this.mainIcons[i]=cc.MenuItemImage.create("RES/MK/PNL/icon_1_"+(i+1)+".png","RES/MK/PNL/icon_1_"+(i+1)+".png",this.onIconsClick,this);this.mainIcons[i].setScale(0.0);this.mainIcons[i].setTag(101+i);this.mainIcons[i].setAnchorPoint(cc.p(0.5,0.0));this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));}
var ey=65;this.mainIcons[0].setPosition(cc.p(46,85-ey));this.mainIcons[1].setPosition(cc.p(127,85-ey));this.mainIcons[2].setPosition(cc.p(209,85-ey));this.mainIcons[3].setPosition(cc.p(291,85-ey));this.mainIcons[4].setPosition(cc.p(373,85-ey));this.mainIcons[5].setPosition(cc.p(455,85-ey));this.iconMenu=cc.Menu.create(this.mainIcons);this.iconMenu.setPosition(cc.p(0,0));this.addChild(this.iconMenu,10);this.btn_done=cc.MenuItemImage.create(res_panel_com.btn_done,res_panel_com.btn_done,this.onDoneClick,this);this.btn_done.setScale(0.0);this.btn_done.setTag(100);this.btn_done.setPosition(cc.p(465,140));this.btn_done.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));this.btn_reset=cc.MenuItemImage.create(res_panel_com.btn_reset,res_panel_com.btn_reset,this.onResetClick,this);this.btn_reset.setScale(0.0);this.btn_reset.setPosition(cc.p(395,140));this.btn_reset.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));this.btnMenu=cc.Menu.create(this.btn_done,this.btn_reset);this.btnMenu.setPosition(cc.p(0,0));this.addChild(this.btnMenu,15);},onIconsClick:function(sender)
{if(this.isTouchOn==false){return;}
var i=sender.getTag()-100;if(i>0)
{makeup_code[this.runningChar][i]++;if(makeup_code[this.runningChar][i]>=5)
{makeup_code[this.runningChar][i]=1;}
this.mk_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/MK/C"+this.runningChar+"/U/"+i+"_"+makeup_code[this.runningChar][i]+".png"));}
this.prt_mk[this.runningChar].setPosition(this.mk_item[this.runningChar][i].getPosition());this.prt_mk[this.runningChar].resetSystem();},onDoneClick:function(sender)
{if(this.isTouchOn==false){return;}
if(this.runningChar==selectedMakeupLevel)
{this.isTouchOn=false;this.unschedule(this.setTouchEnable);this.scheduleOnce(function(){this.setTouchEnable();},2.5,"setTouchEnable");this.Layer_makeup[this.runningChar].stopAllActions();this.Layer_makeup[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackIn.create(cc.MoveTo.create(0.5,cc.p(700,this.Layer_makeup[this.runningChar].getPositionY())))));for(var i=0;i<this.mainIcons.length;i++)
{this.mainIcons[i].stopAllActions();this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackIn.create(cc.ScaleTo.create(0.3,0.0))));}
this.btn_done.stopAllActions();this.btn_done.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));this.btn_reset.stopAllActions();this.btn_reset.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));this.scheduleOnce(function(){this.onNextScene()},0.5,"onNextScene");}},setTouchEnable:function()
{this.isTouchOn=true;},onResetClick:function(sender)
{if(this.isTouchOn==false){return;}
this.resetMakeUpCode();for(var i=1;i<=6;i++)
{this.mk_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/MK/C"+this.runningChar+"/U/"+i+"_"+makeup_code[this.runningChar][i]+".png"));}},setUpChar:function()
{this.Layer_makeup=[];this.mk_item=[];this.mk_body=[];this.mk_back_hair=[];this.mk_hair=[];this.prt_mk=[];for(var i=this.runningChar;i<=this.runningChar;i++)
{this.mk_item[i]=[];this.Layer_makeup[i]=cc.Layer.create();this.Layer_makeup[i].setPosition(cc.p(-504,0));this.Layer_makeup[i].setScale(1.0);this.addChild(this.Layer_makeup[i]);this.mk_back_hair[i]=cc.Sprite.create("RES/MK/C"+i+"/hair_1.png");this.mk_back_hair[i].setPosition(252,400);this.mk_back_hair[i].setScale(1.0);this.Layer_makeup[i].addChild(this.mk_back_hair[i],0);this.mk_body[i]=cc.Sprite.create("RES/MK/C"+i+"/body.png");this.mk_body[i].setPosition(252,400);this.mk_body[i].setAnchorPoint(0.5,0.5);this.Layer_makeup[i].addChild(this.mk_body[i],0);var makeupZorder=[5,4,5,4,3,2];for(var j=1;j<=6;j++)
{makeup_code[i][j]=0;this.mk_item[i][j]=cc.Sprite.create("RES/MK/C"+i+"/U/"+j+"_"+makeup_code[i][j]+".png");this.Layer_makeup[i].addChild(this.mk_item[i][j],makeupZorder[j]);this.mk_item[i][j].setPosition(cc.p(252,400));}
this.mk_hair[i]=cc.Sprite.create("RES/MK/C"+i+"/hair.png");this.mk_hair[i].setPosition(252,400);this.mk_hair[i].setAnchorPoint(0.5,0.5);this.Layer_makeup[i].addChild(this.mk_hair[i],7);this.prt_mk[i]=cc.ParticleSystem.create(res_comman.sparkle_2_plist);this.prt_mk[i].stopSystem();this.Layer_makeup[i].addChild(this.prt_mk[i],50);}
this.Layer_makeup[this.runningChar].setPosition(cc.p(-650,0));this.Layer_makeup[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(0,this.Layer_makeup[this.runningChar].getPositionY())))));this.itemTAG=0;},resetMakeUpCode:function()
{makeup_code[this.runningChar][1]=0;makeup_code[this.runningChar][2]=0;makeup_code[this.runningChar][3]=0;makeup_code[this.runningChar][4]=0;makeup_code[this.runningChar][5]=0;makeup_code[this.runningChar][6]=0;},onTouchBegan:function(touch,event)
{var tp=touch.getLocation();var self=event.getCurrentTarget();return true;},onTouchMoved:function(touch,event)
{var tp=touch.getLocation();var self=event.getCurrentTarget();if(self.itemTAG)
{self.mk_item[self.runningChar][self.itemTAG].setPosition(tp);}},onTouchEnded:function(touch,event)
{var tp=touch.getLocation();var self=event.getCurrentTarget();},onMouseMove:function(event)
{var tp=event.getLocation();var self=event.getCurrentTarget();if(self.btn_reset&&cc.rectContainsPoint(self.btn_reset.getBoundingBox(),tp)&&self.btn_reset.getScale()==1.0&&self.btn_reset.getNumberOfRunningActions()==0)
{self.prt_Sparkle.setPosition(self.btn_reset.getPosition());self.prt_Sparkle.resetSystem();self.btn_reset.setScale(1.1);return;}
else if(self.btn_reset&&self.btn_reset.getScale()==1.1&&!cc.rectContainsPoint(self.btn_reset.getBoundingBox(),tp)&&self.btn_reset.getNumberOfRunningActions()==0)
{self.btn_reset.setScale(1.0);return;}
else if(self.btn_done&&cc.rectContainsPoint(self.btn_done.getBoundingBox(),tp)&&self.btn_done.getScale()==1.0&&self.btn_done.getNumberOfRunningActions()==0)
{self.prt_Sparkle.setPosition(self.btn_done.getPosition());self.prt_Sparkle.resetSystem();self.btn_done.setScale(1.1);return;}
else if(self.btn_done&&self.btn_done.getScale()==1.1&&!cc.rectContainsPoint(self.btn_done.getBoundingBox(),tp)&&self.btn_done.getNumberOfRunningActions()==0)
{self.btn_done.setScale(1.0);return;}
else if(self.btn_more&&cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp)&&self.btn_more.getScale()==1.0&&self.btn_more.getNumberOfRunningActions()==0)
{self.prt_Sparkle.setPosition(self.btn_more.getPosition());self.prt_Sparkle.resetSystem();self.btn_more.setScale(1.1);return;}
else if(self.btn_more&&self.btn_more.getScale()==1.1&&!cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp)&&self.btn_more.getNumberOfRunningActions()==0)
{self.btn_more.setScale(1.0);return;}
else if(self.mainIcons)
{for(var i=self.mainIcons.length-1;i>=0;i--)
{if(cc.rectContainsPoint(self.mainIcons[i].getBoundingBox(),tp)&&self.mainIcons[i].getScale()==1.0&&self.mainIcons[i].getNumberOfRunningActions()==0)
{self.prt_Sparkle.setPosition(cc.p(self.mainIcons[i].getPositionX(),self.mainIcons[i].getPositionY()+60));self.prt_Sparkle.resetSystem();self.mainIcons[i].setScale(1.03);return;}
else if(self.mainIcons[i].getScale()==1.03&&!cc.rectContainsPoint(self.mainIcons[i].getBoundingBox(),tp)&&self.mainIcons[i].getNumberOfRunningActions()==0)
{self.mainIcons[i].setScale(1.0);return;}}}},onMoreApp:function(sender)
{if(sender.getTag()==101)
{CreateLinksInGame(comman.GameId,'MakeUpScene','more');}
else
{CreateLinksInGame(comman.GameId,'MakeUpScene','logo');}},onMusicButton:function(sender)
{if(sender.getNumberOfRunningActions()==0)
{sender.stopAllActions();sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.0,1.0),cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));if(comman.isMusicEnable)
{sender.setNormalSpriteFrame(res_mainScene.btn_soundOff);sender.setSelectedSpriteFrame(res_mainScene.btn_soundOff);comman.setSoundEnabled(false);}
else if(!comman.isMusicEnable)
{sender.setNormalSpriteFrame(res_mainScene.btn_soundOn);sender.setSelectedSpriteFrame(res_mainScene.btn_soundOn);comman.setSoundEnabled(true);}}},onNextScene:function(dt)
{cc.director.runScene(DressUpScene.scene());},createMainMenu:function()
{this.btn_bb_icon=cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));this.btn_bb_icon.setScale(0.8);this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));this.btn_more=cc.MenuItemImage.create(res_panel_com.btn_more,res_panel_com.btn_more,this.onMoreApp,this);this.btn_more.setScale(0.0);this.btn_more.setTag(101);this.btn_more.setPosition(cc.p(40,140));this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));this.btn_music=cc.MenuItemImage.create(res_mainScene.btn_soundOn,res_mainScene.btn_soundOn,this.onMusicButton,this);this.btn_music.setScale(1.0);this.btn_music.setPosition(cc.p(comman.winSize().width-this.btn_music.getContentSize().width*0.5,comman.winSize().height-this.btn_music.getContentSize().height*0.5));if(!comman.isMusicEnable)
{this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOff);this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOff);}
else if(comman.isMusicEnable)
{this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOn);this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOn);}
this.MainMenu=cc.Menu.create(this.btn_bb_icon,this.btn_music,this.btn_more);this.MainMenu.setPosition(cc.p(0,0));this.addChild(this.MainMenu,250);},getRandomInt:function(min,max)
{return Math.floor(Math.random()*(max-min+1))+min;}});MakeUpScene.scene=function(){var scene=new cc.Scene();var layer=new MakeUpScene();scene.addChild(layer);return scene;}