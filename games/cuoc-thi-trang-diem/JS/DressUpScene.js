var DressUpScene=cc.Scene.extend({ctor:function()
{this._super();this.init();},onEnter:function()
{this._super();cc.eventManager.addListener({event:cc.EventListener.TOUCH_ONE_BY_ONE,swallowTouches:true,onTouchBegan:this.onTouchBegan,onTouchMoved:this.onTouchMoved,onTouchEnded:this.onTouchEnded},this);if('mouse'in cc.sys.capabilities)
{cc.eventManager.addListener({event:cc.EventListener.MOUSE,onMouseMove:this.onMouseMove},this);}},init:function()
{this._super();this.bg=cc.Sprite.create("RES/DS/bg_"+selectedMakeupLevel+".png");this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);this.bg.setScale(1.0);this.addChild(this.bg);this.runningChar=selectedMakeupLevel;this.isTouchOn=false;this.scheduleOnce(function(){this.setTouchEnable();},1.0,"setTouchEnable");this.createMainMenu();this.createPanel();this.setUpScore();this.setUpChar();this.setUpDisplayScore();if((selectedMakeupLevel==1||selectedMakeupLevel==2)&&Complete_Level[1]==true)
{this.Score_layer.setScale(1.0);for(var i=0;i<3;i++)
{this.btn_score[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));}}
else if((selectedMakeupLevel==1||selectedMakeupLevel==2)&&Complete_Level[1]==false)
{for(var i=0;i<4;i++)
{this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));}
this.btn_done.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));this.btn_reset.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));}
this.prt_Sparkle=cc.ParticleSystem.create(res_comman.sparkle_1_plist);this.prt_Sparkle.setScale(1.0);this.prt_Sparkle.stopSystem();this.addChild(this.prt_Sparkle,250);},setUpDisplayScore:function()
{this.bg_1=cc.Sprite.create("RES/SE/score_bg_1.png");this.bg_1.setPosition(comman.winSize().width/2,comman.winSize().height/2);this.bg_1.setScale(0.0);this.addChild(this.bg_1);this.Layer_char_1=[];this.ch_item_1=[];this.mk_item_1=[];this.char_body_1=[];for(var i=1;i<=2;i++)
{this.ch_item_1[i]=[];this.mk_item_1[i]=[];this.Layer_char_1[i]=cc.Layer.create();this.Layer_char_1[i].setPosition(cc.p(-504,0));this.Layer_char_1[i].setScale(0.0);this.addChild(this.Layer_char_1[i]);this.char_body_1[i]=cc.Sprite.create("RES/DS/C"+i+"/body.png");this.char_body_1[i].setPosition(252,400);this.Layer_char_1[i].addChild(this.char_body_1[i],2);for(var j=1;j<=6;j++)
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
this.Layer_char_1[1].stopAllActions();this.Layer_char_1[1].setScale(0);this.Layer_char_1[1].setPosition(cc.p(130,-25));this.Layer_char_1[2].stopAllActions();this.Layer_char_1[2].setScale(0);this.Layer_char_1[2].setPosition(cc.p(-135,-50));this.score=[];this.Score_disp_label=[];for(var i=0;i<2;i++)
{this.score[i]=cc.Sprite.create("RES/SE/score.png");this.score[i].setScale(0.0);this.addChild(this.score[i]);this.Score_disp_label[i]=cc.LabelTTF.create('',"COOPERBLACKSTD_ITALIC",55);this.Score_disp_label[i].setColor(cc.color(223,0,100));this.score[i].addChild(this.Score_disp_label[i],3);}
this.score[0].setPosition(cc.p(130,660));this.score[1].setPosition(cc.p(375,660));this.Score_disp_label[0].setPosition(cc.p(50,30));this.Score_disp_label[1].setPosition(cc.p(50,30));},ScoreDisplay:function()
{if(selectedMakeupLevel==2&&Complete_Level[1]==true)
{this.bg_1.setTexture("RES/SE/score_bg_1.png");this.Score_disp_label[0].setString(ArielMakeupScore);this.Score_disp_label[1].setString(ElsaMakeupScore);this.bg_1.setScale(1.0);}
else if(selectedMakeupLevel==2&&Complete_Level[2]==true)
{this.bg_1.setTexture("RES/SE/score_bg_2.png");this.Score_disp_label[0].setString(ArielDressupScore);this.Score_disp_label[1].setString(ElsaDressupScore);for(var i=1;i<=2;i++)
{for(var j=1;j<=6;j++)
{if(j<=4)
{this.ch_item_1[i][j].setTexture("RES/DS/C"+i+"/U/"+j+"_"+dress_code[i][j]+".png");}
if(j==5)
{this.ch_item_1[i][j].setTexture("RES/DS/C"+i+"/U/"+j+"_"+dress_code[i][j-1]+".png");}
if(j==6)
{this.ch_item_1[i][j].setTexture("RES/DS/C"+i+"/U/"+(j-4)+"_"+dress_code[i][j-4]+"_f.png");}
if(j<=6)
{this.mk_item_1[i][j].setTexture("RES/DS/C"+i+"/MK/"+j+"_"+makeup_code[i][j]+".png");}}}
Complete_Level[1]=false;Complete_Level[2]=false;}
this.bg_1.setScale(1.0);this.judge.setScale(0.0);this.Layer_char_1[1].setScaleX(-0.8);this.Layer_char_1[1].setScaleY(0.8);this.Layer_char_1[2].setScaleX(-0.8);this.Layer_char_1[2].setScaleY(0.8);for(var i=0;i<2;i++)
{this.score[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,0.9))));}
this.btn_next_1.stopAllActions();this.btn_next_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));},setUpScore:function()
{this.Score_layer=cc.Layer.create();this.Score_layer.setPosition(0,0);this.Score_layer.setScale(0.0);this.addChild(this.Score_layer);this.score_bg=cc.Sprite.create("RES/SE/score_bg.png");this.score_bg.setPosition(cc.p(252,400));this.score_bg.setScale(1.0);this.Score_layer.addChild(this.score_bg);this.judge=cc.Sprite.create("RES/SE/judge.png");this.judge.setPosition(cc.p(252,400));this.judge.setScale(1.0);this.addChild(this.judge);this.judge.setLocalZOrder(5);this.btn_score=[];this.Score_label=[];for(var i=0;i<3;i++)
{this.btn_score[i]=cc.MenuItemImage.create("RES/SE/btn_score.png","RES/SE/btn_score.png",this.ScoreButoonClick,this);this.btn_score[i].setScale(0.0);this.btn_score[i].setTag((100+(i+1)));this.Score_label[i]=cc.LabelTTF.create(((i+1)*10)+20,"COOPERBLACKSTD_ITALIC",40);this.Score_label[i].setColor(cc.color(223,0,100));this.btn_score[i].addChild(this.Score_label[i],10);}
this.btn_score[0].setPosition(cc.p(105,235));this.btn_score[1].setPosition(cc.p(255,245));this.btn_score[2].setPosition(cc.p(395,235));this.Score_label[0].setPosition(cc.p(35,25));this.Score_label[1].setPosition(cc.p(35,25));this.Score_label[2].setPosition(cc.p(35,25));this.ScoreMenu=cc.Menu.create(this.btn_score);this.ScoreMenu.setPosition(cc.p(0,0));this.addChild(this.ScoreMenu,10);},ScoreButoonClick:function(sender)
{if(this.isTouchOn==false){return;}
var i=sender.getTag()-100;if(i>0&&this.btn_next.getScale()==0.0&&sender.getNumberOfRunningActions()==0)
{sender.stopAllActions();sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.0,1.0),cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));if(selectedMakeupLevel==1&&Complete_Level[1]==true)
{ElsaMakeupScore=this.Score_label[i-1].getString();}
else if(selectedMakeupLevel==2&&Complete_Level[1]==true)
{ArielMakeupScore=this.Score_label[i-1].getString();}
else if(selectedMakeupLevel==1&&Complete_Level[2]==true)
{ElsaDressupScore=this.Score_label[i-1].getString();}
else if(selectedMakeupLevel==2&&Complete_Level[2]==true)
{ArielDressupScore=this.Score_label[i-1].getString();}
this.btn_next.stopAllActions();this.btn_next.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));}},createPanel:function()
{this.mainIcons=[];for(var i=0;i<4;i++)
{this.mainIcons[i]=cc.MenuItemImage.create("RES/DS/PNL/icon_1_"+(i+1)+".png","RES/DS/PNL/icon_1_"+(i+1)+".png",this.onIconsClick,this);this.mainIcons[i].setScale(0.0);this.mainIcons[i].setTag(101+i);}
this.mainIcons[0].setPosition(cc.p(430,420));this.mainIcons[1].setPosition(cc.p(430,320));this.mainIcons[2].setPosition(cc.p(430,220));this.mainIcons[3].setPosition(cc.p(430,120));this.iconMenu=cc.Menu.create(this.mainIcons);this.iconMenu.setPosition(cc.p(0,0));this.addChild(this.iconMenu,10);this.btn_done=cc.MenuItemImage.create(res_panel_com.btn_done,res_panel_com.btn_done,this.onDoneClick,this);this.btn_done.setScale(0.0);this.btn_done.setTag(100);this.btn_done.setPosition(cc.p(465,40));this.btn_reset=cc.MenuItemImage.create(res_panel_com.btn_reset,res_panel_com.btn_reset,this.onResetClick,this);this.btn_reset.setScale(0.0);this.btn_reset.setPosition(cc.p(395,40));this.btn_next=cc.MenuItemImage.create(res_panel_com.btn_next,res_panel_com.btn_next,this.onNextClick,this);this.btn_next.setScale(0.0);this.btn_next.setTag(101);this.btn_next.setPosition(cc.p(465,40));this.btn_next_1=cc.MenuItemImage.create(res_panel_com.btn_next,res_panel_com.btn_next,this.onNext1Click,this);this.btn_next_1.setScale(0.0);this.btn_next_1.setTag(101);this.btn_next_1.setPosition(cc.p(465,40));this.btnMenu=cc.Menu.create(this.btn_done,this.btn_reset,this.btn_next,this.btn_next_1);this.btnMenu.setPosition(cc.p(0,0));this.addChild(this.btnMenu,15);},onNext1Click:function(sender)
{if(this.isTouchOn==false){return;}
this.bg_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,0.0))));this.Layer_char_1[1].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,0.0))));this.Layer_char_1[2].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,0.0))));for(var i=0;i<2;i++)
{this.score[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,0.0))));}
this.btn_next.stopAllActions();this.btn_next.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,0.0))));this.scheduleOnce(function(){this.onNextScene();},0.1,"onNextScene");},onNextClick:function(sender)
{if(this.isTouchOn==false){return;}
this.Score_layer.setPosition(0,0);for(var i=0;i<3;i++)
{this.btn_score[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,0.0))));}
this.btn_next.stopAllActions();this.btn_next.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,0.0))));if(selectedMakeupLevel==2&&Complete_Level[1]==true)
{this.scheduleOnce(function(){this.ScoreDisplay();},0.1,"ScoreDisplay");}
else if(selectedMakeupLevel==2&&Complete_Level[2]==true)
{this.scheduleOnce(function(){this.ScoreDisplay();},0.1,"ScoreDisplay");}
else
{this.scheduleOnce(function(){this.onNextScene();},0.1,"onNextScene");}},onIconsClick:function(sender)
{if(this.isTouchOn==false){return;}
var i=sender.getTag()-100;if(i>0)
{dress_code[this.runningChar][i]++;if(dress_code[this.runningChar][i]>=7)
{dress_code[this.runningChar][i]=1;}
if(i==1||i==3)
{this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+".png"));}
if(i==2)
{this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+".png"));this.ch_item[this.runningChar][i+4].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+"_f.png"));}
if(i==4)
{this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+".png"));this.ch_item[this.runningChar][i+1].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+(i+1)+"_"+dress_code[this.runningChar][i]+".png"));}}
this.prt_ch[this.runningChar].setPosition(this.ch_item[this.runningChar][i].getPosition());this.prt_ch[this.runningChar].resetSystem();},onDoneClick:function(sender)
{if(this.isTouchOn==false){return;}
if(this.runningChar==selectedMakeupLevel)
{this._target=new cc.RenderTexture(504,800);this._target.setPosition(252,400);this.addChild(this._target);this._target.begin();this.Layer_char[this.runningChar].visit();this._target.end();char_texture[this.runningChar]=this._target.getSprite().texture;this._target.setScale(0);this.removeChild(this._target);this.isTouchOn=false;this.unschedule(this.setTouchEnable);this.scheduleOnce(function(){this.setTouchEnable();},1.0,"setTouchEnable");this.Score_layer.setScale(1.0);this.judge.setScale(1.0);for(var i=0;i<3;i++)
{this.btn_score[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));}
this.Layer_char[this.runningChar].stopAllActions();this.Layer_char[this.runningChar].setScale(0.8);if(selectedMakeupLevel==1)
{this.Layer_char[this.runningChar].setPosition(cc.p(-650,60));}
if(selectedMakeupLevel==2)
{this.Layer_char[this.runningChar].setPosition(cc.p(-650,40));}
this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(0,this.Layer_char[this.runningChar].getPositionY())))));for(var i=0;i<this.mainIcons.length;i++)
{this.mainIcons[i].stopAllActions();this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.1),cc.EaseBackIn.create(cc.ScaleTo.create(0.2,0.0))));}
this.btn_done.stopAllActions();this.btn_done.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackIn.create(cc.ScaleTo.create(0.3,0.0))));this.btn_reset.stopAllActions();this.btn_reset.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackIn.create(cc.ScaleTo.create(0.3,0.0))));}},setTouchEnable:function()
{this.isTouchOn=true;},onResetClick:function(sender)
{if(this.isTouchOn==false){return;}
for(var i=1;i<=6;i++)
{dress_code[this.runningChar][i]=0;if(i<=4)
{this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+".png"));}
if(i==5)
{this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i-1]+".png"));}
if(i==6)
{this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+(i-4)+"_"+dress_code[this.runningChar][i-4]+"_f.png"));}}},setUpChar:function()
{this.Layer_char=[];this.ch_item=[];this.mk_item=[];this.char_body=[];this.char_body_up=[];this.prt_ch=[];for(var i=this.runningChar;i<=this.runningChar;i++)
{this.ch_item[i]=[];this.mk_item[i]=[];this.Layer_char[i]=cc.Layer.create();this.Layer_char[i].setPosition(cc.p(-504,0));this.Layer_char[i].setScale(1.0);this.addChild(this.Layer_char[i]);this.char_body[i]=cc.Sprite.create("RES/DS/C"+i+"/body.png");this.char_body[i].setPosition(252,400);this.Layer_char[i].addChild(this.char_body[i],2);for(var j=1;j<=6;j++)
{dress_code[i][j]=0;if(j<=4)
{this.ch_item[i][j]=cc.Sprite.create("RES/DS/C"+i+"/U/"+j+"_"+dress_code[i][j]+".png");}
if(j==5)
{this.ch_item[i][j]=cc.Sprite.create("RES/DS/C"+i+"/U/"+j+"_"+dress_code[i][j-1]+".png");}
if(j==6)
{this.ch_item[i][j]=cc.Sprite.create("RES/DS/C"+i+"/U/"+(j-4)+"_"+dress_code[i][j-4]+"_f.png");}
this.Layer_char[i].addChild(this.ch_item[i][j]);this.ch_item[i][j].setPosition(cc.p(252,400));if(j==1)
{this.ch_item[i][j].setLocalZOrder(3);}
else if(j==2)
{this.ch_item[i][j].setLocalZOrder(5);}
else if(j==3)
{this.ch_item[i][j].setLocalZOrder(2);}
else if(j==4)
{this.ch_item[i][j].setLocalZOrder(3);}
else if(j==5)
{this.ch_item[i][j].setLocalZOrder(6);}
else if(j==6)
{this.ch_item[i][j].setLocalZOrder(1);}
this.mk_item[i][j]=cc.Sprite.create("RES/DS/C"+i+"/MK/"+j+"_"+makeup_code[i][j]+".png");this.Layer_char[i].addChild(this.mk_item[i][j]);this.mk_item[i][j].setPosition(cc.p(252,400));if(j==1)
{this.mk_item[i][j].setLocalZOrder(5);}
else if(j==2)
{this.mk_item[i][j].setLocalZOrder(4);}
else if(j==3)
{this.mk_item[i][j].setLocalZOrder(5);}
else if(j==4)
{this.mk_item[i][j].setLocalZOrder(4);}
else if(j==5)
{this.mk_item[i][j].setLocalZOrder(3);}
else if(j==6)
{this.mk_item[i][j].setLocalZOrder(2);}}
this.prt_ch[i]=cc.ParticleSystem.create(res_comman.sparkle_2_plist);this.prt_ch[i].stopSystem();this.Layer_char[i].addChild(this.prt_ch[i],50);}
if(Complete_Level[1]==true)
{this.judge.setScale(1.0);this.Layer_char[this.runningChar].stopAllActions();this.Layer_char[this.runningChar].setScale(0.8);if(selectedMakeupLevel==1)
{this.Layer_char[this.runningChar].setPosition(cc.p(-650,60));}
if(selectedMakeupLevel==2)
{this.Layer_char[this.runningChar].setPosition(cc.p(-650,40));}
this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(0,this.Layer_char[this.runningChar].getPositionY())))));}
else if(Complete_Level[2]==true)
{this.judge.setScale(0.0);this.Layer_char[this.runningChar].stopAllActions();this.Layer_char[this.runningChar].setScale(1.0);this.Layer_char[this.runningChar].setPosition(cc.p(-650,0));this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(0,this.Layer_char[this.runningChar].getPositionY())))));}},onTouchBegan:function(touch,event)
{var tp=touch.getLocation();var self=event.getCurrentTarget();return true;},onTouchMoved:function(touch,event)
{var tp=touch.getLocation();var self=event.getCurrentTarget();},onTouchEnded:function(touch,event)
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
else if(self.btn_next&&cc.rectContainsPoint(self.btn_next.getBoundingBox(),tp)&&self.btn_next.getScale()==1.0&&self.btn_next.getNumberOfRunningActions()==0)
{self.prt_Sparkle.setPosition(self.btn_next.getPosition());self.prt_Sparkle.resetSystem();self.btn_next.setScale(1.1);return;}
else if(self.btn_next&&self.btn_next.getScale()==1.1&&!cc.rectContainsPoint(self.btn_next.getBoundingBox(),tp)&&self.btn_next.getNumberOfRunningActions()==0)
{self.btn_next.setScale(1.0);return;}
else if(self.btn_next_1&&cc.rectContainsPoint(self.btn_next_1.getBoundingBox(),tp)&&self.btn_next_1.getScale()==1.0&&self.btn_next_1.getNumberOfRunningActions()==0)
{self.prt_Sparkle.setPosition(self.btn_next_1.getPosition());self.prt_Sparkle.resetSystem();self.btn_next_1.setScale(1.1);return;}
else if(self.btn_next_1&&self.btn_next_1.getScale()==1.1&&!cc.rectContainsPoint(self.btn_next_1.getBoundingBox(),tp)&&self.btn_next_1.getNumberOfRunningActions()==0)
{self.btn_next_1.setScale(1.0);return;}
else if(self.mainIcons)
{for(var i=self.mainIcons.length-1;i>=0;i--)
{if(cc.rectContainsPoint(self.mainIcons[i].getBoundingBox(),tp)&&self.mainIcons[i].getScale()==1.0&&self.mainIcons[i].getNumberOfRunningActions()==0)
{self.prt_Sparkle.setPosition(self.mainIcons[i].getPosition());self.prt_Sparkle.resetSystem();self.mainIcons[i].setScale(1.1);return;}
else if(self.mainIcons[i].getScale()==1.1&&!cc.rectContainsPoint(self.mainIcons[i].getBoundingBox(),tp)&&self.mainIcons[i].getNumberOfRunningActions()==0)
{self.mainIcons[i].setScale(1.0);return;}}}},onMoreApp:function(sender)
{if(sender.getTag()==101)
{CreateLinksInGame(comman.GameId,'DressUpScene','more');}
else
{CreateLinksInGame(comman.GameId,'DressUpScene','logo');}},onMusicButton:function(sender)
{if(sender.getNumberOfRunningActions()==0)
{sender.stopAllActions();sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.0,1.0),cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));if(comman.isMusicEnable)
{sender.setNormalSpriteFrame(res_mainScene.btn_soundOff);sender.setSelectedSpriteFrame(res_mainScene.btn_soundOff);comman.setSoundEnabled(false);}
else if(!comman.isMusicEnable)
{sender.setNormalSpriteFrame(res_mainScene.btn_soundOn);sender.setSelectedSpriteFrame(res_mainScene.btn_soundOn);comman.setSoundEnabled(true);}}},onNextScene:function(dt)
{if(selectedMakeupLevel==1&&Complete_Level[1]==true)
{selectedMakeupLevel=selectedMakeupLevel+1;cc.director.runScene(MakeUpScene.scene());}
else if(selectedMakeupLevel==2&&Complete_Level[1]==true)
{cc.director.runScene(ChooseScene.scene());Complete_Level[2]=true;Complete_Level[1]=false;}
else if(selectedMakeupLevel==1&&Complete_Level[2]==true)
{selectedMakeupLevel=selectedMakeupLevel+1;cc.director.runScene(DressUpScene.scene());}
else if(Complete_Level[1]==false&&Complete_Level[2]==false)
{cc.director.runScene(GameOverScene.scene());}},createMainMenu:function()
{this.btn_bb_icon=cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));this.btn_bb_icon.setScale(0.8);this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));this.btn_more=cc.MenuItemImage.create(res_panel_com.btn_more,res_panel_com.btn_more,this.onMoreApp,this);this.btn_more.setScale(0.0);this.btn_more.setTag(101);this.btn_more.setPosition(cc.p(40,40));this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));this.btn_music=cc.MenuItemImage.create(res_mainScene.btn_soundOn,res_mainScene.btn_soundOn,this.onMusicButton,this);this.btn_music.setScale(1.0);this.btn_music.setPosition(cc.p(comman.winSize().width-this.btn_music.getContentSize().width*0.5,comman.winSize().height-this.btn_music.getContentSize().height*0.5));if(!comman.isMusicEnable)
{this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOff);this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOff);}
else if(comman.isMusicEnable)
{this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOn);this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOn);}
this.MainMenu=cc.Menu.create(this.btn_bb_icon,this.btn_music,this.btn_more);this.MainMenu.setPosition(cc.p(0,0));this.addChild(this.MainMenu,250);},getRandomInt:function(min,max)
{return Math.floor(Math.random()*(max-min+1))+min;}});DressUpScene.scene=function(){var scene=new cc.Scene();var layer=new DressUpScene();scene.addChild(layer);return scene;}