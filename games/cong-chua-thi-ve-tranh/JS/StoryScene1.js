var StoryScene1 = cc.Scene.extend(
{
    ctor:function() 
    {
        this._super();
        this.init();
    },
    init:function () 
    {
        this._super();

        this.bg = cc.Sprite.create(res_story_1.bg);
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg.setScale(1.0);
        this.addChild(this.bg);

        this.bg_white = cc.Sprite.create(res_comman.bg_white);
        this.bg_white.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg_white.setOpacity(0);
        this.addChild(this.bg_white,199);
        
        this.elsa = cc.Sprite.create(res_story_1.elsa);
        this.elsa.setAnchorPoint(cc.p(0.5,0.0));
        this.elsa.setPosition(cc.p(-200,0));
        this.addChild(this.elsa,1);

        this.msg_elsa=cc.Sprite.create("RES/ST1/msg_1.png");
        this.msg_elsa.setAnchorPoint(cc.p(1.0,0.8));
        this.msg_elsa.setScale(0.0);
        this.msg_elsa.setPosition(cc.p(125,580));
        this.elsa.addChild(this.msg_elsa,1);

        this.scheduleOnce(function(){this.process_1()},0.25,"process_1");

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
        this.addChild(this.MainMenu,197);

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle,198);
    },
    process_1:function()
    {
        this.elsa.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.75,cc.p(350,this.elsa.getPositionY())))));
        this.msg_elsa.runAction(cc.Sequence.create(cc.DelayTime.create(0.75),cc.EaseBackOut.create(cc.ScaleTo.create(0.5,1.0)),cc.DelayTime.create(4.0),cc.EaseBackIn.create(cc.ScaleTo.create(0.5,0.0))));
        this.scheduleOnce(function(){this.process_2()},6.5,"process_2");
    },
    process_2:function()
    {
        this.msg_elsa.setTexture(cc.textureCache.addImage("RES/ST1/msg_2.png"));
        this.msg_elsa.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.5,1.0)),cc.DelayTime.create(4.0),cc.EaseBackIn.create(cc.ScaleTo.create(0.5,0.0))));
        this.scheduleOnce(function(){this.process_3()},6.5,"process_3");
    },
    process_3:function()
    {
        this.msg_elsa.setTexture(cc.textureCache.addImage("RES/ST1/msg_3.png"));
        this.msg_elsa.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.5,1.0)),cc.DelayTime.create(4.0),cc.EaseBackIn.create(cc.ScaleTo.create(0.5,1.0))));
        this.btn_play.runAction(cc.Sequence.create(cc.DelayTime.create(3.0),cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_play.getContentSize().width*0.6,this.btn_play.getContentSize().height*0.6))));
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

        // self.witch_ugly_m.setPosition(tp);
        // console.log('this.witch_ugly_m.setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');
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
            this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*-1.6))));
            this.btn_play.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_play.getContentSize().width*0.6,this.btn_play.getContentSize().height*-1.6))));
            this.scheduleOnce(function(){this.onNextScene()},0.6)
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
        cc.director.runScene(DrawingSelectionScene.scene());
    }    
});
StoryScene1.scene = function() 
{
    var scene = new cc.Scene();
    var layer = new StoryScene1();
    scene.addChild(layer);
    return scene;
}