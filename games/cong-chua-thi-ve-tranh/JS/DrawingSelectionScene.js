var DrawingSelectionScene = cc.Scene.extend(
{
    //DrawingSelectionScene
    ctor:function() {
        this._super();
        this.init();
    },
    init:function () 
    {
        this._super();

        this.bg_white = cc.Sprite.create(res_comman.bg_white);
        this.bg_white.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg_white.setOpacity(0);
        this.addChild(this.bg_white,199);

        this.bg = cc.Sprite.create(res_story_1.bg_2);
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.addChild(this.bg);

        this.createMainMenu();

        this.createDrawingMenu();

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle,50);
    },
    createDrawingMenu:function()
    {
        this.drawingIcons=[];

        for (var i = 0; i < 4; i++)
        {
            this.drawingIcons[i] = cc.MenuItemImage.create("RES/ST1/Drawing_"+(i+1)+".png","RES/ST1/Drawing_"+(i+1)+".png",this.onClickDrawingButton,this);
            this.drawingIcons[i].setScale(1.0);
            this.drawingIcons[i].setTag(1+i);
            if(i<2) 
            {
                this.drawingIcons[i].setPosition(cc.p(this.drawingIcons[i].getContentSize().width*-0.53,this.drawingIcons[i].getContentSize().height*0.7+this.drawingIcons[i].getContentSize().height*1.1*i));
                this.drawingIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.1+(i*0.1)),cc.EaseBackOut.create(cc.MoveTo.create(0.3,cc.p(this.drawingIcons[i].getPositionX()*-1,this.drawingIcons[i].getPositionY())))));
            }
            else
            {
                this.drawingIcons[i].setPosition(cc.p(comman.winSize().width+this.drawingIcons[i].getContentSize().width*0.53,this.drawingIcons[i].getContentSize().height*0.7+this.drawingIcons[i].getContentSize().height*1.1*(i-2)));
                this.drawingIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.1+((i-2)*0.1)),cc.EaseBackOut.create(cc.MoveTo.create(0.3,cc.p(comman.winSize().width-this.drawingIcons[i].getContentSize().width*0.53,this.drawingIcons[i].getPositionY())))));
            }
        }        
        this.drawingMenu = cc.Menu.create(this.drawingIcons[0],this.drawingIcons[1],this.drawingIcons[2],this.drawingIcons[3]);
        this.drawingMenu.setPosition(cc.p(0,0));
        this.addChild(this.drawingMenu,15);
    },
    onClickDrawingButton:function(sender)
    {
        this.drawingMenu.setEnabled(false);
        this.prt_Sparkle.setPosition(sender.getPosition());
        this.prt_Sparkle.resetSystem();
        sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));
        comman.selectedPicture = sender.getTag();
        for (var i = 0; i < 4; i++)
        {
            if(i<2) 
            {
                this.drawingIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.5+(i*0.1)),cc.EaseBackIn.create(cc.MoveTo.create(0.3,cc.p(this.drawingIcons[i].getPositionX()*-1,this.drawingIcons[i].getPositionY())))));
            }
            else
            {
                this.drawingIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.5+((i-2)*0.1)),cc.EaseBackIn.create(cc.MoveTo.create(0.3,cc.p(comman.winSize().width+this.drawingIcons[i].getContentSize().width*0.67,this.drawingIcons[i].getPositionY())))));
            }
        }
        this.scheduleOnce(function(){this.onNextScene()},1.0,"onNextScene");
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
        // self.char_injury[14].setPosition(tp.x,tp.y);
        // console.log('this.char_injury['+self.movingTool+'].setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');
    },
    onTouchEnded:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
    },
    onNextScene:function()
    {

        cc.director.runScene(DrawingScene.scene());
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
    },
    onMoreApp:function(sender)
    {
        //if (this.isTouchOn==false){return;}
        if (sender.getTag()==101)
        {
            CreateLinksInGame(comman.GameId,'DrawingSelectionScene','more');
        }
        else
        {
            CreateLinksInGame(comman.GameId,'DrawingSelectionScene','logo');
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
        this.addChild(this.MainMenu,250);
    },
    getRandomInt:function(min, max) 
    {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
DrawingSelectionScene.scene = function() {
    var scene = new cc.Scene();
    var layer = new DrawingSelectionScene();
    scene.addChild(layer);
    return scene;
}