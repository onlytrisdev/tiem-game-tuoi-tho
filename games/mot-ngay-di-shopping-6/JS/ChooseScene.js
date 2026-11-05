
var ChooseScene = cc.Scene.extend(
{
    ctor:function() {
        this._super();
        this.init();
    },
    onEnter:function() 
    {
        this._super();  
        cc.eventManager.addListener(
        {
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
        if( 'mouse' in cc.sys.capabilities )
        {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseMove:this.onMouseMove
            }, this);
        }
    },
    init:function () 
    {
        this._super();

        this.isTouchOn=false;
        this.scheduleOnce(function(){this.setTouchEnable();},1.0,"setTouchEnable");

        this.processCounter=0;

        Complete_Elsa_Sub_Level[1]=true;
        Complete_Elsa_Sub_Level[2]=true;
        Complete_Elsa_Sub_Level[3]=true;
        Complete_Elsa_Sub_Level[4]=true;

        Complete_Anna_Sub_Level[1]=true;
        Complete_Anna_Sub_Level[2]=true;
        Complete_Anna_Sub_Level[3]=true;
        Complete_Anna_Sub_Level[4]=true;

        this.bg = cc.Sprite.create(res_selction.selction_bg_img);
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg.setScale(1.0);
        this.addChild(this.bg);

        //btn_1...
        this.btn_1 = cc.MenuItemImage.create(
            res_selction.btn_1,
            res_selction.btn_1,
            this.ChooseButtonClick,this);
        this.btn_1.setScale(1.0);
        this.btn_1.setTag(101);
        this.btn_1.setPosition(cc.p(comman.winSize().width-this.btn_1.getContentSize().width*-0.5,this.btn_1.getContentSize().height*2.1));
        this.btn_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.10),cc.MoveTo.create(0.3,cc.p(comman.winSize().width-this.btn_1.getContentSize().width*0.8,this.btn_1.getContentSize().height*2.1))));
       

        if(Complete_Level[1]==false)
        {
            this.btn_1.setOpacity(235);
            this.btn_1.setEnabled(false);
        }
        else if(Complete_Level[1]==true)
        {
            this.btn_1.setOpacity(255);
            this.btn_1.setEnabled(true);
        }

        //btn_2...
        this.btn_2 = cc.MenuItemImage.create(
            res_selction.btn_2,
            res_selction.btn_2,
            this.ChooseButtonClick,this);
        this.btn_2.setScale(1.0);
        this.btn_2.setTag(102);
        this.btn_2.setPosition(cc.p(comman.winSize().width-this.btn_2.getContentSize().width*+2.5,this.btn_2.getContentSize().height*0.8));
        this.btn_2.runAction(cc.Sequence.create(cc.DelayTime.create(0.4),cc.MoveTo.create(0.3,cc.p(comman.winSize().width-this.btn_2.getContentSize().width*0.8,this.btn_2.getContentSize().height*0.8))));
      
        if(Complete_Level[2]==false)
        {
            this.btn_2.setOpacity(235);
            this.btn_2.setEnabled(false);
        }
        else if(Complete_Level[2]==true)
        {
            this.btn_2.setOpacity(255);
            this.btn_2.setEnabled(true);
        }

        this.Choose_Scene_btn = cc.Menu.create(this.btn_1,this.btn_2);
        this.Choose_Scene_btn.setPosition(cc.p(0,0));
        this.addChild(this.Choose_Scene_btn); 

        this.btn_bb_icon = cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);
        this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));
        this.btn_bb_icon.setScale(0.8);
        this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));

        this.btn_more = cc.MenuItemImage.create(
            res_common_button.btn_more,
            res_common_button.btn_more,
            this.onMoreApp,this);
        this.btn_more.setScale(1.0);
        this.btn_more.setTag(101);
        this.btn_more.setPosition(cc.p(this.btn_more.getContentSize().width*0.5,this.btn_more.getContentSize().height*-1.6));
        this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*0.6))));

        this.btn_music = cc.MenuItemImage.create(res_mainScene.btn_soundOn,res_mainScene.btn_soundOn,this.onMusicButton,this);
        this.btn_music.setScale(1.0);
        this.btn_music.setPosition(cc.p(comman.winSize().width-this.btn_music.getContentSize().width*0.5,comman.winSize().height-this.btn_music.getContentSize().height*0.5));
       
        if (!comman.isMusicEnable) 
        {
            this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOff);
            this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOff);
        }
        else if (comman.isMusicEnable) 
        {
            this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOn);
            this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOn);
        }

        this.MainMenu = cc.Menu.create(this.btn_bb_icon,this.btn_more,this.btn_music);
        this.MainMenu.setPosition(cc.p(0,0));
        this.addChild(this.MainMenu);
     
        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.5);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle);
        this.prt_Sparkle.setLocalZOrder(500);
    },
    ChooseButtonClick:function(sender)
    {
        if (this.isTouchOn==false){return;}

      
        if(sender.getTag()==101 && sender.getNumberOfRunningActions()==0 && sender.getOpacity()==255) 
        {
            sender.stopAllActions();
            sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.0,1.0),cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));

            this.scheduleOnce(function(){this.onNextScene1();},0.1,"onNextScene1"); 
        }
        else if(sender.getTag()==102 && sender.getNumberOfRunningActions()==0 && sender.getOpacity()==255) 
        {
            sender.stopAllActions();
            sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.0,1.0),cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));

            this.scheduleOnce(function(){this.onNextScene2();},0.1,"onNextScene2"); 
        }
    },
    onNextScene1:function(dt)
    {
        cc.director.runScene(ElsaShppoingScene.scene());
    },
    onNextScene2:function(dt)
    {
        cc.director.runScene(AnnaShppoingScene.scene());
    },
    setTouchEnable:function()
    {
        this.isTouchOn=true;
    },
    onTouchBegan:function(touch, event)
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
        return true;
    },
    onTouchMoved:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
        // self.decoration_item[4].setPosition(tp);
        // console.log('setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');
    },
    onTouchEnded:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
    },
    onMouseMove:function(event)
    {
        var tp = event.getLocation();
        var self = event.getCurrentTarget();
        // var tpItemPanel = self.Sidepanel.convertToNodeSpace(tp);
        // console.log('onMouseMove:' + tp.x.toFixed(2) + ','  + tp.y.toFixed(2));

        
        //Choose_button...
        if(cc.rectContainsPoint(self.btn_1.getBoundingBox(),tp)  && self.btn_1.getScale()==1.0 && self.btn_1.getNumberOfRunningActions()==0 && self.btn_1.getOpacity()==255)
        {
            self.prt_Sparkle.setPosition(self.btn_1.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_1.setScale(1.03);
            return;
        }
        else if(self.btn_1.getScale()==1.03 && !cc.rectContainsPoint(self.btn_1.getBoundingBox(),tp) && self.btn_1.getNumberOfRunningActions()==0 && self.btn_1.getOpacity()==255)
        {
            self.btn_1.setScale(1.0);
            return;
        }
        else if(cc.rectContainsPoint(self.btn_2.getBoundingBox(),tp)  && self.btn_2.getScale()==1.0 && self.btn_2.getNumberOfRunningActions()==0 && self.btn_2.getOpacity()==255)
        {
            self.prt_Sparkle.setPosition(self.btn_2.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_2.setScale(1.03);
            return;
        }
        else if(self.btn_2.getScale()==1.03 && !cc.rectContainsPoint(self.btn_2.getBoundingBox(),tp) && self.btn_2.getNumberOfRunningActions()==0 && self.btn_2.getOpacity()==255)
        {
            self.btn_2.setScale(1.0);
            return;
        }
        else if(cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp)  && self.btn_more.getScale()==1.0 && self.btn_more.getNumberOfRunningActions()==0 && self.btn_more.getOpacity()==255)
        {
            self.prt_Sparkle.setPosition(self.btn_more.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_more.setScale(1.03);
            return;
        }
        else if(self.btn_more.getScale()==1.03 && !cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp) && self.btn_more.getNumberOfRunningActions()==0 && self.btn_more.getOpacity()==255)
        {
            self.btn_more.setScale(1.0);
            return;
        }
    },
    onMoreApp:function(sender)
    {
        //if (this.isTouchOn==false){return;}
         if (sender.getTag()==101)
        {
            CreateLinksInGame(comman.GameId,'ChooseScene','more');
        }
        else
        {
            CreateLinksInGame(comman.GameId,'ChooseScene','logo');
        }
    },
    onMusicButton:function(sender)
    {
        if (sender.getNumberOfRunningActions()==0)
        {
            sender.stopAllActions();
            sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.0,1.0),cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));
            if (comman.isMusicEnable) 
            {
                sender.setNormalSpriteFrame(res_mainScene.btn_soundOff);
                sender.setSelectedSpriteFrame(res_mainScene.btn_soundOff);
                comman.setSoundEnabled(false);
            }
            else if (!comman.isMusicEnable) 
            {
                sender.setNormalSpriteFrame(res_mainScene.btn_soundOn);
                sender.setSelectedSpriteFrame(res_mainScene.btn_soundOn);
                comman.setSoundEnabled(true);
            }
        }
    },
    createMainMenu:function()
    {
        this.btn_bb_icon = cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);
        this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));
        this.btn_bb_icon.setScale(0.8);
        this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));

        this.btn_music = cc.MenuItemImage.create(res_mainScene.btn_soundOn,res_mainScene.btn_soundOn,this.onMusicButton,this);
        this.btn_music.setScale(1.0);
        this.btn_music.setPosition(cc.p(comman.winSize().width-this.btn_music.getContentSize().width*0.5,comman.winSize().height-this.btn_music.getContentSize().height*0.5));

        if (!comman.isMusicEnable) 
        {
            this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOff);
            this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOff);
        }
        else if (comman.isMusicEnable) 
        {
            this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOn);
            this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOn);
        }

        this.MainMenu = cc.Menu.create(this.btn_bb_icon,this.btn_music);
        this.MainMenu.setPosition(cc.p(0,0));
        this.addChild(this.MainMenu,200);
    },
});
ChooseScene.scene = function() {
    var scene = new cc.Scene();
    var layer = new ChooseScene();
    scene.addChild(layer);
    return scene;
}