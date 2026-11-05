var ChooseScene = cc.Scene.extend(
{
    ctor:function() 
    {
        this._super();
        this.init();
    },
    init:function () 
    {
        this._super();

        this.bg = cc.Sprite.create("RES/SC/bg.png");
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg.setScale(1.0);
        this.addChild(this.bg);

        this.scheduleOnce(function(){this.createSelectionMenu()},0.1,"createSelectionMenu");

        this.btn_bb_icon = cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);
        this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));
        this.btn_bb_icon.setScale(0.8);
        this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));

        this.btn_more = cc.MenuItemImage.create(res_panel_com.btn_more,res_panel_com.btn_more,this.onMoreApp,this);
        this.btn_more.setScale(1.0);
        this.btn_more.setTag(101);
        this.btn_more.setPosition(cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*-1.6));
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
        this.addChild(this.MainMenu,200);

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle,500);
    },
    createSelectionMenu:function()
    {
        this.levelIcons=[];

        for (var i = 0; i <= 1; i++)
        {
            this.levelIcons[i] = cc.MenuItemImage.create("RES/SC/btn_"+(i+1)+".png","RES/SC/btn_"+(i+1)+".png",this.onLevelIconsClick,this);
            this.levelIcons[i].setScale(0.0);
            this.levelIcons[i].setTag(i);

            if(Complete_Level[i]==false)
            {
                this.levelIcons[i].setOpacity(150);
                this.levelIcons[i].setEnabled(false);
            }
            this.levelIcons[i].setTag(i+1);
            this.levelIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(i*0.3),cc.EaseBackOut.create(cc.ScaleTo.create(0.5,1.0))));
        }
        this.levelIcons[0].setPosition(cc.p(252,580));
        this.levelIcons[1].setPosition(cc.p(252,230));
      
        this.levelMenu = cc.Menu.create(this.levelIcons[0],this.levelIcons[1]);
        this.levelMenu.setPosition(cc.p(0,0));
        this.addChild(this.levelMenu,10);
    },
    onLevelIconsClick:function(sender)
    {
        if (sender.getOpacity()<250) 
        {
            return;
        }
        sender.stopAllActions();
        sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.2,0.92),cc.ScaleTo.create(0.2,1.0)));
        
        this.levelMenu.setEnabled(false);

        if(sender.getTag()==1)
        {
            this.scheduleOnce(function(){cc.director.pushScene(SurgeryScene.scene());},0.1,"SurgeryScene");
        }
        else if(sender.getTag()==2)
        {
            selectedLevel=1;
            this.scheduleOnce(function(){cc.director.pushScene(DressUpScene.scene());},0.1,"DressUpScene");
        }
        // console.log(selectedLevel);
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
        else if (self.levelIcons)
        {
            for (var i = self.levelIcons.length - 1; i >= 0; i--) 
            {
                if(cc.rectContainsPoint(self.levelIcons[i].getBoundingBox(),tp)  && self.levelIcons[i].getScale()==1.0 && self.levelIcons[i].getNumberOfRunningActions()==0 && self.levelIcons[i].getOpacity()==255)
                {
                    self.prt_Sparkle.setPosition(self.levelIcons[i].getPosition());
                    self.prt_Sparkle.resetSystem();
                    self.levelIcons[i].setScale(1.1);
                    return;
                }
                else if(self.levelIcons[i].getScale()==1.1 && !cc.rectContainsPoint(self.levelIcons[i].getBoundingBox(),tp) && self.levelIcons[i].getNumberOfRunningActions()==0 && self.levelIcons[i].getOpacity()==255)
                {
                    self.levelIcons[i].setScale(1.0);
                    return;
                }
            }
        }
    },
    onMoreApp:function(sender)
    {
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
    onNextScene:function(dt)
    {
        if(selectedMakeupLevel==1)
        {
            this.scheduleOnce(function(){cc.director.pushScene(MakeUpScene.scene());},0.1,"MakeUpScene");
        }
        else if(selectedDressuppLevel==1)
        {
            this.scheduleOnce(function(){cc.director.pushScene(DressUpScene.scene());},0.1,"DressUpScene");
        }
        
    }
});
ChooseScene.scene = function()
{
    var scene = new cc.Scene();
    var layer = new ChooseScene();
    scene.addChild(layer);
    return scene;
}