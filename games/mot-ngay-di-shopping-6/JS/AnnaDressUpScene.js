var AnnaDressUpScene = cc.Scene.extend(
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

        this.bg = cc.Sprite.create(res_elsa_dressup.bg);
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg.setScale(1.0);
        this.addChild(this.bg);

        this.runningChar=2;
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
            this.mainIcons[i] = cc.MenuItemImage.create("RES/DS/icon_1_"+(i+1)+".png","RES/DS/icon_1_"+(i+1)+".png",this.onIconsClick,this);
            this.mainIcons[i].setScale(1.0);
            this.mainIcons[i].setTag(101+i);
            this.mainIcons[i].setOpacity(255);
            this.mainIcons[i].setPosition(cc.p(this.mainIcons[i].getContentSize().width*+6.2,this.mainIcons[i].getContentSize().height*-0.5+this.mainIcons[i].getContentSize().height*1.05*(5-i)));
            this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.1+(i*0.1)),cc.EaseBackOut.create(cc.MoveTo.create(0.3,cc.p(this.mainIcons[i].getPositionX()*0.73,this.mainIcons[i].getPositionY())))));
        }     

        this.btn_next = cc.MenuItemImage.create(res_common_button.btn_next,res_common_button.btn_next,this.onNextClick,this);
        this.btn_next.setScale(1.0);
        this.btn_next.setTag(100);
        this.btn_next.setPosition(cc.p(comman.winSize().width-this.btn_next.getContentSize().width*-1.5,this.btn_next.getContentSize().height*0.6));
                
        this.iconMenu = cc.Menu.create(this.mainIcons[0],this.mainIcons[1],this.mainIcons[2],this.mainIcons[3],this.btn_next);
        this.iconMenu.setPosition(cc.p(0,0));
        this.addChild(this.iconMenu,10);
    },
    onIconsClick:function(sender)
    {
        if (this.isTouchOn==false){return;}

        var i=sender.getTag()-100;
        if(i>0)
        {
            this.mainIcons[i-1].setOpacity(254);
            dress_code[this.runningChar][i]++;
            if(dress_code[this.runningChar][i]>=SelctedAnnaItem[i].length)
            {
                dress_code[this.runningChar][i]=1;
            }
            this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage(SelctedAnnaItem[i][dress_code[this.runningChar][i]]));
        }

        if(this.mainIcons[0].getOpacity()==254 && this.mainIcons[1].getOpacity()==254 && this.mainIcons[2].getOpacity()==254 && this.mainIcons[3].getOpacity()==254 )
        {
            this.btn_next.stopAllActions();
            this.btn_next.runAction(cc.Sequence.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width*0.9,this.btn_next.getPositionY()))));
        }
       
        this.prt_ch[this.runningChar].setPosition(this.ch_item[this.runningChar][i].getPosition());
        this.prt_ch[this.runningChar].resetSystem();
    },
    onNextClick:function(sender)
    {
        if (this.isTouchOn==false){return;}
        if(this.runningChar==2)
        {
            this.isTouchOn=false;
            this.unschedule(this.setTouchEnable);
            this.scheduleOnce(function(){this.setTouchEnable();},2.5,"setTouchEnable");
            this.Layer_char[this.runningChar].stopAllActions();
            this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackIn.create(cc.MoveTo.create(0.5,cc.p(800,this.Layer_char[this.runningChar].getPositionY())))));
            for (var i = 0; i < this.mainIcons.length; i++) 
            {
                this.mainIcons[i].stopAllActions();
                this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.1+(i*0.1)),cc.EaseBackIn.create(cc.MoveTo.create(0.3,cc.p(this.mainIcons[i].getContentSize().width*+6.65,this.mainIcons[i].getPositionY())))));
            } 
            this.btn_next.stopAllActions();
            this.btn_next.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackIn.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width+this.btn_next.getContentSize().width,this.btn_next.getPositionY())))));
            
            // this.runningChar=this.runningChar+1;
            this.scheduleOnce(function(){this.onNextScene()},0.5,"onNextScene");
        }
    },
    setTouchEnable:function()
    {

        this.isTouchOn=true;
    },
    setUpChar:function()
    {
        this.Layer_char = [];
        this.ch_item = [];
        this.char_body=[];
        this.char_face=[];
        this.prt_ch = [];

        this.Layer_char[this.runningChar] = cc.Layer.create();
        this.Layer_char[this.runningChar].setPosition(cc.p(-504,0));
        this.Layer_char[this.runningChar].setScale(1.0);
        this.addChild(this.Layer_char[this.runningChar]);

        this.char_body[this.runningChar] = cc.Sprite.create("RES/DS/C"+this.runningChar+"/body.png");
        this.char_body[this.runningChar].setPosition(252,400);
        this.Layer_char[this.runningChar].addChild(this.char_body[this.runningChar],1);

        // this.char_face[this.runningChar] = cc.Sprite.create("RES/DS/C"+this.runningChar+"/face.png");
        // this.char_face[this.runningChar].setPosition(252,400);
        // this.Layer_char[this.runningChar].addChild(this.char_face[this.runningChar],1);

        this.prt_ch[this.runningChar] = cc.ParticleSystem.create(res_comman.sparkle_2_plist);
        this.prt_ch[this.runningChar].stopSystem();
        this.Layer_char[this.runningChar].addChild(this.prt_ch[this.runningChar],50);

        this.ch_item[this.runningChar]=[];

        for (var i = 1; i <=4; i++) 
        {

            this.ch_item[this.runningChar][i] = cc.Sprite.create(SelctedAnnaItem[i][0]);
            // console.log('this.ch_item['+i+']['+j+'] ='+ SelctedAnnaItem[i][0]);              
            this.Layer_char[this.runningChar].addChild(this.ch_item[this.runningChar][i]);
            this.ch_item[this.runningChar][i].setPosition(cc.p(252,400));
            
            if(i==1)
            {
               this.ch_item[this.runningChar][i].setLocalZOrder(2);
            }
            if(i==2)
            {
                this.ch_item[this.runningChar][i].setLocalZOrder(2);
            }
            if(i==3)
            {
                this.ch_item[this.runningChar][i].setLocalZOrder(2);
            }
            if(i==4)
            {
                this.ch_item[this.runningChar][i].setLocalZOrder(1);
            }
           
        }
        // this.runningChar=1;

        this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.1),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(0,this.Layer_char[this.runningChar].getPositionY())))));

        // this.itemTAG=1;
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

        // self.char_body_up[self.runningChar].setPosition(tp);
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
        if(self.btn_more && cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp)  && self.btn_more.getScale()==1.0 && self.btn_more.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.btn_more.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_more.setScale(1.1);
            return;
        }
        else if(self.btn_more && self.btn_more.getScale()==1.1 && !cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp) && self.btn_more.getNumberOfRunningActions()==0)
        {
            self.btn_more.setScale(1.0);
            return;
        }
        else if(self.btn_next && cc.rectContainsPoint(self.btn_next.getBoundingBox(),tp)  && self.btn_next.getScale()==1.0 && self.btn_next.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.btn_next.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_next.setScale(1.1);
            return;
        }
        else if(self.btn_next && self.btn_next.getScale()==1.1 && !cc.rectContainsPoint(self.btn_next.getBoundingBox(),tp) && self.btn_next.getNumberOfRunningActions()==0)
        {
            self.btn_next.setScale(1.0);
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
            CreateLinksInGame(comman.GameId,'DressUpScene','more');
        }
        else
        {
            CreateLinksInGame(comman.GameId,'DressUpScene','logo');
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

        this.btn_more = cc.MenuItemImage.create(res_common_button.btn_more,res_common_button.btn_more,this.onMoreApp,this);
        this.btn_more.setScale(1.0);
        this.btn_more.setTag(101);
        this.btn_more.setPosition(cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*-1.0));
        this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*0.6)))));
       

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
        this.MainMenu = cc.Menu.create(this.btn_bb_icon,this.btn_music,this.btn_more);
        this.MainMenu.setPosition(cc.p(0,0));
        this.addChild(this.MainMenu,250);
    },
    getRandomInt:function(min, max) 
    {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
AnnaDressUpScene.scene = function() {
    var scene = new cc.Scene();
    var layer = new AnnaDressUpScene();
    scene.addChild(layer);
    return scene;
}