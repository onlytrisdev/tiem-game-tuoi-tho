var StoryScene = cc.Scene.extend(
{
    ctor:function() 
    {
        this._super();
        this.init();
    },
    init:function () 
    {
        this._super();

        this.bg_1 = cc.Sprite.create("RES/ST/bg_1.png");
        this.bg_1.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg_1.setScale(1.0);
        this.addChild(this.bg_1);

        this.bg_2 = cc.Sprite.create("RES/ST/bg_2.png");
        this.bg_2.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg_2.setScale(0.0);
        this.addChild(this.bg_2);

        this.bg_3 = cc.Sprite.create("RES/ST/bg_3.png");
        this.bg_3.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg_3.setScale(0.0);
        this.addChild(this.bg_3);
      

        this.img_char=[];
        this.img_msg=[];

        for (var i = 1; i <=2; i++) 
        {
            this.img_char[i]=cc.Sprite.create("RES/ST/char_1_"+i+".png");
            this.img_char[i].setScale(0.0);
            this.img_char[i].setPosition(cc.p(252,400));
            this.addChild(this.img_char[i],5);

            this.img_msg[i]=cc.Sprite.create("RES/ST/msg_"+i+".png");
            this.img_msg[i].setAnchorPoint(cc.p(0.5,0.0));
            this.img_msg[i].setScale(0.0);
            this.addChild(this.img_msg[i],5);
         // this.img_msg[i].runAction(cc.Sequence.create(cc.DelayTime.create((5.5*(i-1)+1.25)),cc.EaseBackOut.create(cc.ScaleTo.create(0.5,1.0)),cc.DelayTime.create(4.5),cc.EaseBackIn.create(cc.ScaleTo.create(0.5,0.0))));
           
        }
        this.img_char[1].setScale(1.0);
        this.img_char[1].runAction(cc.Sequence.create(cc.DelayTime.create(3.0),cc.ScaleTo.create(0.0,0.0)));
        this.img_char[2].runAction(cc.Sequence.create(cc.DelayTime.create(3.0),cc.ScaleTo.create(0.0,1.0),cc.DelayTime.create(2.0),cc.ScaleTo.create(0.0,0.0)));

        this.bg_1.runAction(cc.Sequence.create(cc.DelayTime.create(5.0),cc.ScaleTo.create(0.0,0.0)));
        this.bg_2.runAction(cc.Sequence.create(cc.DelayTime.create(5.0),cc.ScaleTo.create(0.0,1.0)));
        this.bg_3.runAction(cc.Sequence.create(cc.DelayTime.create(5.0),cc.ScaleTo.create(0.0,1.0)));
        
        this.img_msg[1].setPosition(cc.p(205,565));
        this.img_msg[2].setPosition(cc.p(265,110));

        this.img_msg[1].runAction(cc.Sequence.create(cc.DelayTime.create(5.1),cc.EaseBackOut.create(cc.ScaleTo.create(0.5,1.0)),cc.DelayTime.create(5.0),cc.EaseBackIn.create(cc.ScaleTo.create(0.5,0.0))));
        this.img_msg[2].runAction(cc.Sequence.create(cc.DelayTime.create(11.1),cc.EaseBackOut.create(cc.ScaleTo.create(0.5,1.0)),cc.DelayTime.create(5.0),cc.EaseBackIn.create(cc.ScaleTo.create(0.5,0.0))));
      
        this.btn_bb_icon = cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);
        this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));
        this.btn_bb_icon.setScale(0.8);
        this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));

        this.btn_more = cc.MenuItemImage.create(res_mainScene.btn_more,res_mainScene.btn_more,this.onMoreApp,this);
        this.btn_more.setScale(1.0);
        this.btn_more.setTag(101);
        this.btn_more.setPosition(cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*-1.6));
        this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*0.6))));

        this.btn_play = cc.MenuItemImage.create(res_mainScene.btn_play,res_mainScene.btn_play,this.onPlayButton,this);
        this.btn_play.setScale(1.0);
        this.btn_play.setPosition(cc.p(comman.winSize().width-this.btn_play.getContentSize().width*0.6,this.btn_play.getContentSize().height*-1.6));
        this.btn_play.runAction(cc.Sequence.create(cc.DelayTime.create(17.0),cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_play.getContentSize().width*0.6,this.btn_play.getContentSize().height*0.6))));

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

        this.MainMenu = cc.Menu.create(this.btn_bb_icon,this.btn_more,this.btn_music,this.btn_play);
        this.MainMenu.setPosition(cc.p(0,0));
        this.addChild(this.MainMenu,200);

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle,500);
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

        // self.img_msg[4].setPosition(tp);
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
        //console.log('onMouseMove:' + tp.x.toFixed(2) + ','  + tp.y.toFixed(2));
        if(cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp)  && self.btn_more.getScale()==1.0 && self.btn_more.getNumberOfRunningActions()==0)
        {
        	self.prt_Sparkle.setPosition(self.btn_more.getPosition());
        	self.prt_Sparkle.resetSystem();
            self.btn_more.setScale(1.1);
        }
        else if(self.btn_more.getScale()==1.1 && !cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp) && self.btn_more.getNumberOfRunningActions()==0)
        {
            self.btn_more.setScale(1.0);
        }
        else if(cc.rectContainsPoint(self.btn_play.getBoundingBox(),tp)  && self.btn_play.getScale()==1.0 && self.btn_play.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.btn_play.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_play.setScale(1.1);
        }
        else if(self.btn_play.getScale()==1.1 && !cc.rectContainsPoint(self.btn_play.getBoundingBox(),tp) && self.btn_play.getNumberOfRunningActions()==0)
        {
            self.btn_play.setScale(1.0);
        }
    },
    onPlayButton:function(sender)
    {
        if (sender.getNumberOfRunningActions()==0)
        {
            sender.setEnabled(false);

            // for (var i = 1; i <=4; i++) 
            // {
            //     this.img_msg[i].stopAllActions();
            //     this.img_msg[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackIn.create(cc.ScaleTo.create(0.5,0.0))));
            // }
            // this.img_char[1].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(150,200+800))));
            // this.img_char[2].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(404+250,-20))));
            // this.img_char[3].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(252,-20-500))));
            // this.img_char[4].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(100-250,-20))));

            this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*-1.6))));
            this.btn_play.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_play.getContentSize().width*0.6,this.btn_play.getContentSize().height*-1.6))));
            this.scheduleOnce(function(){this.onNextScene()},0.1)
        }
    },
    onMoreApp:function(sender)
    {
    	if (sender.getTag()==101)
    	{
    		CreateLinksInGame(comman.GameId,'storyscene','more');
        }
        else
        {
        	CreateLinksInGame(comman.GameId,'storyscene','logo');
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
    onNextScene:function(dt)
    {
        cc.director.runScene(ChooseScene.scene());
    }    
});
StoryScene.scene = function() 
{
    var scene = new cc.Scene();
    var layer = new StoryScene();
    scene.addChild(layer);
    return scene;
}