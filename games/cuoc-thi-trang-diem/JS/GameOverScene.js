var GameOverScene=cc.Scene.extend({ctor:function(){this._super();this.init();},init:function()
{this._super();this.bg=cc.Sprite.create("RES/GO/bg.png");this.bg.setPosition(cc.p(comman.winSize().width/2,comman.winSize().height/2));this.addChild(this.bg);this.createMainMenu();this.setUpChar();this.scheduleOnce(function(){this.onDoneScreen()},1.5,"onDoneScreen");},setUpChar:function()
{ElsaTotalScore=parseInt(ElsaMakeupScore)+parseInt(ElsaDressupScore);ArielTotalScore=parseInt(ArielMakeupScore)+parseInt(ArielDressupScore);this.Layer_char_1=[];this.ch_item_1=[];this.mk_item_1=[];this.char_body_1=[];for(var i=1;i<=2;i++)
{this.ch_item_1[i]=[];this.mk_item_1[i]=[];this.Layer_char_1[i]=cc.Layer.create();this.Layer_char_1[i].setPosition(cc.p(-504,0));this.Layer_char_1[i].setScale(1.0);this.addChild(this.Layer_char_1[i]);this.char_body_1[i]=cc.Sprite.create("RES/DS/C"+i+"/body.png");this.char_body_1[i].setPosition(252,400);this.Layer_char_1[i].addChild(this.char_body_1[i],2);for(var j=1;j<=6;j++)
{if(j<=4)
{this.ch_item_1[i][j]=cc.Sprite.create("RES/DS/C"+i+"/U/"+j+"_"+dress_code[i][j]+".png");}
if(j==5)
{this.ch_item_1[i][j]=cc.Sprite.create("RES/DS/C"+i+"/U/"+j+"_"+dress_code[i][j-1]+".png");}
if(j==6)
{this.ch_item_1[i][j]=cc.Sprite.create("RES/DS/C"+i+"/U/"+(j-4)+"_"+dress_code[i][j-4]+"_f.png");}
this.Layer_char_1[i].addChild(this.ch_item_1[i][j]);this.ch_item_1[i][j].setPosition(cc.p(252,400));if(j==1)
{this.ch_item_1[i][j].setLocalZOrder(3);}
else if(j==2)
{this.ch_item_1[i][j].setLocalZOrder(5);}
else if(j==3)
{this.ch_item_1[i][j].setLocalZOrder(2);}
else if(j==4)
{this.ch_item_1[i][j].setLocalZOrder(3);}
else if(j==5)
{this.ch_item_1[i][j].setLocalZOrder(6);}
else if(j==6)
{this.ch_item_1[i][j].setLocalZOrder(1);}
if(j<=2)
{this.mk_item_1[i][j]=cc.Sprite.create("RES/DS/C"+i+"/MK/"+j+"_"+makeup_code[i][j]+".png");}
if(j==3)
{if(ElsaTotalScore>ArielTotalScore)
{if(i==1)
{this.mk_item_1[i][j]=cc.Sprite.create("RES/GO/C"+i+"/"+j+"_"+makeup_code[i][j]+"_h.png");}
if(i==2)
{this.mk_item_1[i][j]=cc.Sprite.create("RES/GO/C"+i+"/"+j+"_"+makeup_code[i][j]+"_s.png");}}
else if(ElsaTotalScore<ArielTotalScore)
{if(i==1)
{this.mk_item_1[i][j]=cc.Sprite.create("RES/GO/C"+i+"/"+j+"_"+makeup_code[i][j]+"_s.png");}
if(i==2)
{this.mk_item_1[i][j]=cc.Sprite.create("RES/GO/C"+i+"/"+j+"_"+makeup_code[i][j]+"_h.png");}}
else if(ElsaTotalScore==ArielTotalScore)
{this.mk_item_1[i][j]=cc.Sprite.create("RES/DS/C"+i+"/MK/"+j+"_"+makeup_code[i][j]+".png");}}
if(j==4||j==5||j==6)
{this.mk_item_1[i][j]=cc.Sprite.create("RES/DS/C"+i+"/MK/"+j+"_"+makeup_code[i][j]+".png");}
this.Layer_char_1[i].addChild(this.mk_item_1[i][j]);this.mk_item_1[i][j].setPosition(cc.p(252,400));if(j==1)
{this.mk_item_1[i][j].setLocalZOrder(5);}
else if(j==2)
{this.mk_item_1[i][j].setLocalZOrder(4);}
else if(j==3)
{this.mk_item_1[i][j].setLocalZOrder(5);}
else if(j==4)
{this.mk_item_1[i][j].setLocalZOrder(4);}
else if(j==5)
{this.mk_item_1[i][j].setLocalZOrder(3);}
else if(j==6)
{this.mk_item_1[i][j].setLocalZOrder(2);}}}
if(ElsaTotalScore>ArielTotalScore)
{this.Layer_char_1[1].stopAllActions();this.Layer_char_1[1].setScaleX(-0.95);this.Layer_char_1[1].setScaleY(0.95);this.Layer_char_1[1].setPosition(cc.p(140,0));this.Layer_char_1[2].stopAllActions();this.Layer_char_1[2].setScaleX(-0.85);this.Layer_char_1[2].setScaleY(0.85);this.Layer_char_1[2].setPosition(cc.p(-110,100));}
else if(ElsaTotalScore<ArielTotalScore)
{this.Layer_char_1[1].stopAllActions();this.Layer_char_1[1].setScaleX(-0.85);this.Layer_char_1[1].setScaleY(0.85);this.Layer_char_1[1].setPosition(cc.p(115,115));this.Layer_char_1[2].stopAllActions();this.Layer_char_1[2].setScaleX(-0.95);this.Layer_char_1[2].setScaleY(0.95);this.Layer_char_1[2].setPosition(cc.p(-150,-70));}
else if(ElsaTotalScore==ArielTotalScore)
{this.Layer_char_1[1].stopAllActions();this.Layer_char_1[1].setScaleX(-0.8);this.Layer_char_1[1].setScaleY(0.8);this.Layer_char_1[1].setPosition(cc.p(160,60));this.Layer_char_1[2].stopAllActions();this.Layer_char_1[2].setScaleX(-0.8);this.Layer_char_1[2].setScaleY(0.8);this.Layer_char_1[2].setPosition(cc.p(-180,30));}
this.score=[];this.Score_disp_label=[];for(var i=0;i<2;i++)
{this.score[i]=cc.Sprite.create("RES/GO/board_"+(i+1)+".png");this.score[i].setScale(1.0);this.addChild(this.score[i]);this.Score_disp_label[i]=cc.LabelTTF.create('',"FRAHV",45);this.Score_disp_label[i].setColor(cc.color(0,0,0));this.addChild(this.Score_disp_label[i],3);if(ElsaTotalScore==100||ArielTotalScore==100)
{this.Score_disp_label[i].setScaleX(1.0);this.Score_disp_label[i].setScaleY(1.6);}
else
{this.Score_disp_label[i].setScaleX(1.0);this.Score_disp_label[i].setScaleY(1.6);}}
this.Score_disp_label[1].setString(ArielTotalScore);this.Score_disp_label[0].setString(ElsaTotalScore);if(ElsaTotalScore>ArielTotalScore)
{this.score[0].setPosition(cc.p(280,525));this.score[1].setPosition(cc.p(280,645));this.Score_disp_label[0].setPosition(cc.p(283,520));this.Score_disp_label[1].setPosition(cc.p(283,640));}
else if(ElsaTotalScore<ArielTotalScore)
{this.score[0].setPosition(cc.p(245,650));this.score[1].setPosition(cc.p(245,490));this.Score_disp_label[0].setPosition(cc.p(247,647));this.Score_disp_label[1].setPosition(cc.p(247,485));}
else if(ElsaTotalScore==ArielTotalScore)
{this.score[0].setPosition(cc.p(300,585));this.score[1].setPosition(cc.p(210,585));this.Score_disp_label[0].setPosition(cc.p(303,582));this.Score_disp_label[1].setPosition(cc.p(212,582));}},onDoneScreen:function()
{this.btn_replay.stopAllActions();this.btn_more.stopAllActions();this.btn_relatedGames.stopAllActions();this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,75)))));this.btn_replay.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_replay.getContentSize().width*0.6,75)))));this.btn_relatedGames.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width*0.5,75)))));},onTouchBegan:function(touch,event)
{var tp=touch.getLocation();var self=event.getCurrentTarget();return true;},onTouchMoved:function(touch,event)
{var tp=touch.getLocation();var self=event.getCurrentTarget();},onTouchEnded:function(touch,event)
{var tp=touch.getLocation();var self=event.getCurrentTarget();},onNextScene:function()
{selectedMakeupLevel=1;char_texture=[];ElsaMakeupScore=0;ElsaDressupScore=0;ArielMakeupScore=0;ArielDressupScore=0;ElsaTotalScore=0;ArielTotalScore=0;makeup_code=[];for(var i=0;i<=4;i++)
{temp_code2=[];for(var j=0;j<=7;j++)
{temp_code2.push(1);}
makeup_code.push(temp_code2);}
dress_code=[];for(var i=0;i<=4;i++)
{temp_code1=[];for(var j=0;j<=7;j++)
{temp_code1.push(0);}
dress_code.push(temp_code1);}
Complete_Level[1]=true;Complete_Level[2]=false;cc.director.runScene(StoryScene.scene());},onEnter:function()
{this._super();cc.eventManager.addListener({event:cc.EventListener.TOUCH_ONE_BY_ONE,swallowTouches:true,onTouchBegan:this.onTouchBegan,onTouchMoved:this.onTouchMoved,onTouchEnded:this.onTouchEnded},this);if('mouse'in cc.sys.capabilities)
{cc.eventManager.addListener({event:cc.EventListener.MOUSE,onMouseMove:this.onMouseMove},this);}},onMouseMove:function(event)
{var tp=event.getLocation();var self=event.getCurrentTarget();},onMoreApp:function(sender)
{if(sender.getTag()==101)
{CreateLinksInGame(comman.GameId,'GameOverScene','more');}
else
{CreateLinksInGame(comman.GameId,'GameOverScene','logo');}},onRelatedGames:function(sender)
{CreateLinksInGame(comman.GameId,'GameOverScene','relatedgames',RelatedGames[sender.getTag()]['id']);},onReplayButton:function(sender)
{if(this.isTouchOn==false){return;}
if(sender.getNumberOfRunningActions()==0)
{sender.setEnabled(false);this.scheduleOnce(function(){this.onNextScene()},0.1,"onNextScene");}},onMusicButton:function(sender)
{if(sender.getNumberOfRunningActions()==0)
{sender.stopAllActions();sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.0,1.0),cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));if(comman.isMusicEnable)
{sender.setNormalSpriteFrame(res_mainScene.btn_soundOff);sender.setSelectedSpriteFrame(res_mainScene.btn_soundOff);comman.setSoundEnabled(false);}
else if(!comman.isMusicEnable)
{sender.setNormalSpriteFrame(res_mainScene.btn_soundOn);sender.setSelectedSpriteFrame(res_mainScene.btn_soundOn);comman.setSoundEnabled(true);}}},createMainMenu:function()
{this.btn_bb_icon=cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));this.btn_bb_icon.setScale(0.8);this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));this.btn_more=cc.MenuItemImage.create(res_mainScene.btn_more,res_mainScene.btn_more,this.onMoreApp,this);this.btn_more.setScale(1.0);this.btn_more.setTag(101);this.btn_more.setPosition(cc.p(this.btn_more.getContentSize().width*0.5,-80));this.btn_replay=cc.MenuItemImage.create(res_mainScene.btn_replay,res_mainScene.btn_replay,this.onReplayButton,this);this.btn_replay.setScale(1.0);this.btn_replay.setPosition(cc.p(comman.winSize().width-this.btn_replay.getContentSize().width*0.5,-80));this.btn_music=cc.MenuItemImage.create(res_mainScene.btn_soundOn,res_mainScene.btn_soundOn,this.onMusicButton,this);this.btn_music.setScale(1.0);this.btn_music.setPosition(cc.p(comman.winSize().width-this.btn_music.getContentSize().width*0.5,comman.winSize().height-this.btn_music.getContentSize().height*0.5));if(!comman.isMusicEnable)
{this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOff);this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOff);}
else if(comman.isMusicEnable)
{this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOn);this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOn);}
var relatedTag=this.getRandomInt(0,RelatedGames.length-1);this.btn_relatedGames=cc.MenuItemImage.create(res_comman.logo_bg,res_comman.logo_bg,this.onRelatedGames,this);this.btn_relatedGames.setScale(1.0);this.btn_relatedGames.setTag(relatedTag);this.btn_relatedGames.setPosition(cc.p(comman.winSize().width*0.5,-80));this.relatedGames_Img=cc.Sprite.create(res_resource[res_resource.length-RelatedGames.length+relatedTag]);this.relatedGames_Img.setScaleX((this.btn_relatedGames.getContentSize().width-10)/this.relatedGames_Img.getContentSize().width);this.relatedGames_Img.setScaleY((this.btn_relatedGames.getContentSize().height-10)/this.relatedGames_Img.getContentSize().width);this.relatedGames_Img.setPosition(this.btn_relatedGames.getContentSize().width/2,this.btn_relatedGames.getContentSize().height/2);this.btn_relatedGames.addChild(this.relatedGames_Img);this.MainMenu=cc.Menu.create(this.btn_bb_icon,this.btn_more,this.btn_replay,this.btn_music,this.btn_relatedGames);this.MainMenu.setPosition(cc.p(0,0));this.addChild(this.MainMenu,250);},getRandomInt:function(min,max)
{return Math.floor(Math.random()*(max-min+1))+min;}});GameOverScene.scene=function(){var scene=new cc.Scene();var layer=new GameOverScene();scene.addChild(layer);return scene;}