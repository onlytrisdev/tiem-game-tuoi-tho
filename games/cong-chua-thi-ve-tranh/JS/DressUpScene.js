var DressUpScene = cc.Scene.extend(
{
    ctor:function() 
    {
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
        this.bg = cc.Sprite.create(res_dressUp.bg);
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg.setScale(1.0);
        this.addChild(this.bg);

        this.bg_white = cc.Sprite.create(res_comman.bg_white);
        this.bg_white.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg_white.setOpacity(0);
        this.addChild(this.bg_white,199);
        
        for (var i=0;i<=2;i++)
        {
            for (var j=0;j<=5;j++)
            {
                dress_code[i][j]=0;
            }
        }
        this.runningChar=1;
        this.isTouchOn=false;

        this.scheduleOnce(function(){this.setTouchEnable();},1.0,"setTouchEnable");

        this.createMainMenu();

        this.setUpChar();

        this.createPanel();

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle,250);
    },
    createPanel:function()
    {
        this.mainIcons=[];

        for (var i = 0; i < 4; i++)
        {
            this.mainIcons[i] = cc.MenuItemImage.create("RES/DS/PNL/icon_1_"+(i+1)+".png","RES/DS/PNL/icon_1_"+(i+1)+".png",this.onIconsClick,this);
            this.mainIcons[i].setScale(1.0);
            this.mainIcons[i].setTag(101+i);
            this.mainIcons[i].setPosition(cc.p(this.mainIcons[i].getContentSize().width*-0.55,this.mainIcons[i].getContentSize().height*1.0+this.mainIcons[i].getContentSize().height*1.1*(3-i)));
            this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.1+(i*0.1)),cc.EaseBackOut.create(cc.MoveTo.create(0.3,cc.p(this.mainIcons[i].getPositionX()*-1.0,this.mainIcons[i].getPositionY())))));
        }        
        
        this.btn_done = cc.MenuItemImage.create(res_panel_com.btn_done,res_panel_com.btn_done,this.onDoneClick,this);
        this.btn_done.setScale(1.0);
        this.btn_done.setTag(100);
        this.btn_done.setPosition(cc.p(comman.winSize().width-this.btn_done.getContentSize().width*-1.5,this.btn_done.getContentSize().height*1.0));
        this.btn_done.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_done.getContentSize().width*0.6,this.btn_done.getPositionY()))));

        this.btn_reset = cc.MenuItemImage.create(res_panel_com.btn_reset,res_panel_com.btn_reset,this.onResetClick,this);
        this.btn_reset.setScale(1.0);
        this.btn_reset.setPosition(cc.p(comman.winSize().width-this.btn_reset.getContentSize().width*-1.5,this.btn_reset.getContentSize().height*2.1));
        this.btn_reset.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_reset.getContentSize().width*0.6,this.btn_reset.getPositionY()))));

        this.iconMenu = cc.Menu.create(this.mainIcons[0],this.mainIcons[1],this.mainIcons[2],this.mainIcons[3],this.btn_done,this.btn_reset);
        this.iconMenu.setPosition(cc.p(0,0));
        this.addChild(this.iconMenu,10);
    },
    onIconsClick:function(sender)
    {
        if (this.isTouchOn==false){return;}

        var i=sender.getTag()-100;
        if(i>0)
        {
            dress_code[this.runningChar][i]++;
            if(dress_code[this.runningChar][i]>=5)
            {
                dress_code[this.runningChar][i]=1;
            }
            this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+".png"));
        }
        this.prt_ch[this.runningChar].setPosition(this.ch_item[this.runningChar][i].getPosition());
        this.prt_ch[this.runningChar].resetSystem();
    },
    onDoneClick:function(sender)
    {
        if (this.isTouchOn==false){return;}
        if(this.runningChar==1)
        {
            this.isTouchOn=false;
            this.unschedule(this.setTouchEnable);
            this.scheduleOnce(function(){this.setTouchEnable();},2.5,"setTouchEnable");
            this.Layer_char[this.runningChar].stopAllActions();
            this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackIn.create(cc.MoveTo.create(0.5,cc.p(504,this.Layer_char[this.runningChar].getPositionY())))));
            for (var i = 0; i < this.mainIcons.length; i++) 
            {
                this.mainIcons[i].stopAllActions();
                this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.1+(i*0.1)),cc.EaseBackIn.create(cc.MoveTo.create(0.3,cc.p(this.mainIcons[i].getPositionX()*-1.0,this.mainIcons[i].getPositionY())))));
            } 
            this.btn_done.stopAllActions();
            this.btn_reset.stopAllActions();
            this.btn_done.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackIn.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width+this.btn_done.getContentSize().width,this.btn_done.getPositionY())))));
            this.btn_reset.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackIn.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width+this.btn_reset.getContentSize().width,this.btn_reset.getPositionY())))));
            this.runningChar=2;

            comman.levelCompleted=3;
            this.scheduleOnce(function(){this.onNextScene()},1.5,"onNextScene");
        }
    },
    setTouchEnable:function()
    {

        this.isTouchOn=true;
    },
    onResetClick:function(sender)
    {
        if (this.isTouchOn==false){return;}
        for (var i = 0; i <=5; i++) 
        {
            dress_code[this.runningChar][i]=0;
        }
        this.ch_item[this.runningChar][1].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/1_0.png"));
        this.ch_item[this.runningChar][2].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/2_0.png"));
        this.ch_item[this.runningChar][3].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/3_0.png"));
        this.ch_item[this.runningChar][4].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/4_0.png"));
    },
    setUpChar:function()
    {
        this.Layer_char = [];
        this.ch_item = [];
        this.char_body=[];
        this.prt_ch = [];

        for (var i = 1; i <= 1; i++)
        {
            this.ch_item[i]=[];

            this.Layer_char[i] = cc.Layer.create();
            this.Layer_char[i].setPosition(cc.p(-504,0));
            this.addChild(this.Layer_char[i]);

            this.char_body[i] = cc.Sprite.create("RES/DS/C"+i+"/body.png");
            this.char_body[i].setPosition(252,0);
            this.char_body[i].setAnchorPoint(0.5,0.0);
            this.Layer_char[i].addChild(this.char_body[i],0);

            for (var j = 1; j <= 4; j++) 
            {
                this.ch_item[i][j] = cc.Sprite.create("RES/DS/C"+i+"/U/"+j+"_"+dress_code[i][j]+".png");
                this.Layer_char[i].addChild(this.ch_item[i][j],1+j);
                if(j==4) 
                {
                    this.ch_item[i][j].setLocalZOrder(1);
                }
                if(j==3) 
                {
                    this.ch_item[i][j].setLocalZOrder(2);
                }
            }
            this.prt_ch[i] = cc.ParticleSystem.create(res_comman.sparkle_2_plist);
            this.prt_ch[i].stopSystem();
            this.Layer_char[1].addChild(this.prt_ch[i],50);
        }
        // this.runningChar=1;

        this.Layer_char[1].setPosition(cc.p(-504,50));
        this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(0,this.Layer_char[this.runningChar].getPositionY())))));
        
        //CHAR 1
        this.ch_item[1][1].setPosition(cc.p(260,318));
        this.ch_item[1][2].setPosition(cc.p(268,569));
        this.ch_item[1][3].setPosition(cc.p(264,512));
        this.ch_item[1][4].setPosition(cc.p(270,52));

        // this.itemTAG=4;
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

        // self.ch_item[self.runningChar][self.itemTAG].setPosition(tp);
        // console.log('this.ch_item['+self.runningChar+']['+self.itemTAG+'].setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');
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
        if(self.btn_reset && cc.rectContainsPoint(self.btn_reset.getBoundingBox(),tp)  && self.btn_reset.getScale()==1.0 && self.btn_reset.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.btn_reset.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_reset.setScale(1.1);
            return;
        }
        else if(self.btn_reset && self.btn_reset.getScale()==1.1 && !cc.rectContainsPoint(self.btn_reset.getBoundingBox(),tp) && self.btn_reset.getNumberOfRunningActions()==0)
        {
            self.btn_reset.setScale(1.0);
            return;
        }
        else if(self.btn_done && cc.rectContainsPoint(self.btn_done.getBoundingBox(),tp)  && self.btn_done.getScale()==1.0 && self.btn_done.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.btn_done.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_done.setScale(1.1);
            return;
        }
        else if(self.btn_done && self.btn_done.getScale()==1.1 && !cc.rectContainsPoint(self.btn_done.getBoundingBox(),tp) && self.btn_done.getNumberOfRunningActions()==0)
        {
            self.btn_done.setScale(1.0);
            return;
        }
        else if (self.mainIcons)
        {
            for (var i = self.mainIcons.length - 1; i >= 0; i--) 
            {
                if(cc.rectContainsPoint(self.mainIcons[i].getBoundingBox(),tp)  && self.mainIcons[i].getScale()==1.0 && self.mainIcons[i].getNumberOfRunningActions()==0)
                {
                    self.prt_Sparkle.setPosition(self.mainIcons[i].getPosition());
                    self.prt_Sparkle.resetSystem();
                    self.mainIcons[i].setScale(1.1);
                    return;
                }
                else if(self.mainIcons[i].getScale()==1.1 && !cc.rectContainsPoint(self.mainIcons[i].getBoundingBox(),tp) && self.mainIcons[i].getNumberOfRunningActions()==0)
                {
                    self.mainIcons[i].setScale(1.0);
                    return;
                }
            }
        }
    },
    onMoreApp:function(sender)
    {
        //if (this.isTouchOn==false){return;}
        if (sender.getTag()==101)
        {
            CreateLinksInGame(comman.GameId,'DressupScene','more');
        }
        else
        {
            CreateLinksInGame(comman.GameId,'DressupScene','logo');
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

        cc.director.runScene(GameOverScene.scene());
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
DressUpScene.scene = function() {
    var scene = new cc.Scene();
    var layer = new DressUpScene();
    scene.addChild(layer);
    return scene;
}