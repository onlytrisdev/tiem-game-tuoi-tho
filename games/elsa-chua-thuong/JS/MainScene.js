var MainScene = cc.Scene.extend(
{
    ctor:function() {
        this._super();
        this.init();
    },
    init:function () 
    {
        this._super();
        this.bg = cc.Sprite.create(res_mainScene.bg);
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg.setScale(1.0);
        this.addChild(this.bg);

        this.main_title = cc.Sprite.create("RES/MS/main_title_1.png");
        this.main_title.setPosition(comman.winSize().width/2,comman.winSize().height*1.2);
        this.main_title.setScale(1.0);
        this.addChild(this.main_title);
        this.main_title.runAction(cc.EaseBackOut.create(cc.MoveTo.create(0.75,cc.p(comman.winSize().width*0.5,comman.winSize().height*0.86))));

        this.main_title_animation = cc.Animation.create();
        this.main_title_animation.addSpriteFrameWithFile("RES/MS/main_title_2.png");
        this.main_title_animation.addSpriteFrameWithFile("RES/MS/main_title_1.png");
        this.main_title_animation.setDelayPerUnit(0.3);
        this.main_title.runAction(cc.RepeatForever.create(cc.Animate.create(this.main_title_animation)));

        this.main_char = [];
        for (var i = 0; i < 1; i++)
        {
            this.main_char[i] = cc.Sprite.create("RES/MS/main_char_"+(i+1)+".png");
            this.main_char[i].setPosition(comman.winSize().width*0.5,comman.winSize().height*-1.0);
            this.main_char[i].setScale(1.0);
            this.main_char[i].setAnchorPoint(cc.p(0.5,0.0));
            this.addChild(this.main_char[i]);
        }
        this.main_char[0].setPosition(cc.p(240,-20));


        this.btn_bb_icon = cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);
        this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));
        this.btn_bb_icon.setScale(0.8);
        this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));

        this.btn_more = cc.MenuItemImage.create(res_mainScene.btn_more,res_mainScene.btn_more,this.onMoreApp,this);
        this.btn_more.setScale(1.0);
        this.btn_more.setTag(101);
        this.btn_more.setPosition(cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*-1.5));
        this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*0.6))));

        this.btn_play = cc.MenuItemImage.create(res_mainScene.btn_play,res_mainScene.btn_play,this.onPlayButton,this);
        this.btn_play.setScale(1.0);
        this.btn_play.setPosition(cc.p(comman.winSize().width-this.btn_play.getContentSize().width*0.6,this.btn_play.getContentSize().height*-1.5));
        this.btn_play.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_play.getContentSize().width*0.6,this.btn_play.getContentSize().height*0.6))));

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

        this.MainMenu = cc.Menu.create(this.btn_bb_icon,this.btn_more,this.btn_play,this.btn_music);
        this.MainMenu.setPosition(cc.p(0,0));
        this.addChild(this.MainMenu,5);

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle,5);
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
    onMouseMove:function(event)
    {
        var tp = event.getLocation();
        var self = event.getCurrentTarget();
        //console.log('onMouseMove:' + tp.x.toFixed(2) + ','  + tp.y.toFixed(2));
        if(cc.rectContainsPoint(self.main_title.getBoundingBox(),tp)  && self.main_title.getScale()==1.0)
        {
            self.main_title.setScale(1.01);
        }
        else if(self.main_title.getScale()==1.01 && !cc.rectContainsPoint(self.main_title.getBoundingBox(),tp))
        {
            self.main_title.setScale(1.0);
        }
        else if(cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp)  && self.btn_more.getScale()==1.0 && self.btn_more.getNumberOfRunningActions()==0)
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
    onTouchBegan:function(touch, event)
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
        self.startLocation = tp;
        //console.log('onTouchBegan:' + tp.x.toFixed(2) + ','  + tp.y.toFixed(2));
        return true;
    },
    onTouchMoved:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
        // self.char_eb_G.setPosition(tp.x,tp.y);
        // console.log('onTouchMoved:' + tp.x.toFixed(2) + ','  + tp.y.toFixed(2));
    },
    onTouchEnded:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
    },
    onMoreApp:function(sender)
    {
    	if (sender.getTag()==101)
    	{
    		CreateLinksInGame(comman.GameId,'mainscreen','more');
        }
        else
        {
        	CreateLinksInGame(comman.GameId,'mainscreen','logo');
        }
    },
    onPlayButton:function(sender)
    {
        this.scheduleOnce(function(){this.onNextScene();},0.1,"onNextScene");
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
    onNextScene:function()
    {
        cc.director.runScene(StoryScene.scene());
    },
    getRandomInt:function(min, max) 
    {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
MainScene.scene = function() {
    var scene = new cc.Scene();
    var layer = new MainScene();
    scene.addChild(layer);
    return scene;
}