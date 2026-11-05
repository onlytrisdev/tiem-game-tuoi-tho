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
        this.bg = cc.Sprite.create("RES/DS/bg_1.png");
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg.setScale(1.0);
        this.addChild(this.bg);
        
        this.runningChar=selectedLevel;
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

        for (var i = 0; i < 5; i++)
        {
            this.mainIcons[i] = cc.MenuItemImage.create("RES/DS/PNL/icon_1_"+(i+1)+".png","RES/DS/PNL/icon_1_"+(i+1)+".png",this.onIconsClick,this);
            this.mainIcons[i].setScale(0.0);
            this.mainIcons[i].setTag(101+i);
            this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));
            // this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.1+(i*0.1)),cc.EaseBackOut.create(cc.MoveTo.create(0.3,cc.p(comman.winSize().width-this.mainIcons[i].getContentSize().width*0.55,this.mainIcons[i].getPositionY())))));
        } 
        // var posY0 = this.mainIcons[0].getPositionY();
        this.mainIcons[0].setPosition(cc.p(425,480));
        this.mainIcons[1].setPosition(cc.p(425,390));
        this.mainIcons[2].setPosition(cc.p(425,300));
        this.mainIcons[3].setPosition(cc.p(425,210));
        this.mainIcons[4].setPosition(cc.p(425,120));

        this.iconMenu = cc.Menu.create(this.mainIcons);
        this.iconMenu.setPosition(cc.p(0,0));
        this.addChild(this.iconMenu,10);

        this.btn_done = cc.MenuItemImage.create(res_panel_com.btn_done,res_panel_com.btn_done,this.onDoneClick,this);
        this.btn_done.setScale(0.0);
        this.btn_done.setTag(100);
        this.btn_done.setPosition(cc.p(460,35));
        this.btn_done.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));

        this.btn_reset = cc.MenuItemImage.create(res_panel_com.btn_reset,res_panel_com.btn_reset,this.onResetClick,this);
        this.btn_reset.setScale(0.0);
        this.btn_reset.setPosition(cc.p(390,35));
        this.btn_reset.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));
        
        this.btnMenu = cc.Menu.create(this.btn_done,this.btn_reset);
        this.btnMenu.setPosition(cc.p(0,0));
        this.addChild(this.btnMenu,15);
    },
    onIconsClick:function(sender)
    {
        if (this.isTouchOn==false){return;}

        var i=sender.getTag()-100;
        if(i>0)
        {
            if(i==1)
            {
                dress_code[this.runningChar][i]++;
                if(dress_code[this.runningChar][i]>=9)
                {
                    dress_code[this.runningChar][i]=1;
                }
                this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+".png"));
            }
            if(i==2)
            {
                dress_code[this.runningChar][i]++;
                if(dress_code[this.runningChar][i]>=6)
                {
                    dress_code[this.runningChar][i]=1;
                }
                this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+".png"));
                this.ch_item[this.runningChar][i+4].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+"_f.png"));
            }
            if(i==3 || i==4 || i==5)
            {
                dress_code[this.runningChar][i]++;
                if(dress_code[this.runningChar][i]>=6)
                {
                    dress_code[this.runningChar][i]=1;
                }
                this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+".png"));
            }
        }
        this.prt_ch[this.runningChar].setPosition(this.ch_item[this.runningChar][i].getPosition());
        this.prt_ch[this.runningChar].resetSystem();
    },
    onDoneClick:function(sender)
    {
        if (this.isTouchOn==false){return;}
        if(this.runningChar==selectedLevel)
        {
            this._target = new cc.RenderTexture(504,800);
            this._target.setPosition(252,400);
            this.addChild(this._target);
            this._target.begin();
            this.Layer_char[this.runningChar].visit();
            this._target.end();
            char_texture[this.runningChar] = this._target.getSprite().texture;

            this._target.setScale(0);
            this.removeChild(this._target);

            this.isTouchOn=false;
            this.unschedule(this.setTouchEnable);
            this.scheduleOnce(function(){this.setTouchEnable();},2.5,"setTouchEnable");

            this.Layer_char[this.runningChar].stopAllActions();
            this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackIn.create(cc.MoveTo.create(0.5,cc.p(700,this.Layer_char[this.runningChar].getPositionY())))));
            for (var i = 0; i < this.mainIcons.length; i++) 
            {
                this.mainIcons[i].stopAllActions();
                this.mainIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackIn.create(cc.ScaleTo.create(0.3,0.0))));
            }  
            this.btn_done.stopAllActions();
            this.btn_reset.stopAllActions();
            
            this.btn_done.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(-this.btn_done.getContentSize().width*0.57*this.btn_done.getScale(),this.btn_done.getPositionY()))));
            this.btn_reset.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.5,cc.p(-this.btn_reset.getContentSize().width*0.57*this.btn_reset.getScale(),this.btn_done.getPositionY()))));

            // comman.levelCompleted=comman.levelCompleted+1;
            this.scheduleOnce(function(){this.onNextScene()},0.3,"onNextScene");
        }
    },
    setTouchEnable:function()
    {
        this.isTouchOn=true;
    },
    onResetClick:function(sender)
    {
        if (this.isTouchOn==false){return;}
        for (var i = 1; i <= 6; i++) 
        {
            dress_code[this.runningChar][i]=0;
            if(i<=5)
            {
                this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+i+"_"+dress_code[this.runningChar][i]+".png"));
            }
            if(i==6)
            {
                this.ch_item[this.runningChar][i].setTexture(cc.textureCache.addImage("RES/DS/C"+this.runningChar+"/U/"+(i-4)+"_"+dress_code[this.runningChar][i-4]+"_f.png"));
            }
        }
    },
    setUpChar:function()
    {
        this.Layer_char = [];
        this.ch_item = [];
        this.char_body=[];
        this.prt_ch = [];

        for (var i = this.runningChar; i <= this.runningChar; i++) 
        {
            this.ch_item[i]=[];

            this.Layer_char[i] = cc.Layer.create();
            this.Layer_char[i].setPosition(cc.p(0,0));
            this.Layer_char[i].setScale(1.0);
            this.addChild(this.Layer_char[i]);

            this.char_body[i] = cc.Sprite.create("RES/DS/C"+i+"/body.png");
            this.char_body[i].setPosition(252,400);
            this.char_body[i].setAnchorPoint(0.5,0.5);
            this.Layer_char[i].addChild(this.char_body[i],2);

            for (var j = 1; j <= 6; j++) 
            {
                dress_code[i][j]=0;  

                if(j<=5)
                {
                    this.ch_item[i][j] = cc.Sprite.create("RES/DS/C"+i+"/U/"+j+"_"+dress_code[i][j]+".png");
                }  
                if(j==6)
                {
                    this.ch_item[i][j] = cc.Sprite.create("RES/DS/C"+i+"/U/"+(j-4)+"_"+dress_code[i][j-4]+"_f.png");
                }           
                
                this.Layer_char[i].addChild(this.ch_item[i][j]);
                this.ch_item[i][j].setPosition(cc.p(252,400));

                if(j==1)
                {
                    this.ch_item[i][j].setLocalZOrder(3);
                }
                else if(j==2) 
                {
                    this.ch_item[i][j].setLocalZOrder(2);
                }
                else if(j==3) 
                {
                    this.ch_item[i][j].setLocalZOrder(2);
                }
                else if(j==4) 
                {
                    this.ch_item[i][j].setLocalZOrder(3);
                }
                else if(j==5) 
                {
                    this.ch_item[i][j].setLocalZOrder(4);
                }
                else if(j==6) 
                {
                    this.ch_item[i][j].setLocalZOrder(5);
                }
            }

            this.prt_ch[i] = cc.ParticleSystem.create(res_comman.sparkle_2_plist);
            this.prt_ch[i].stopSystem();
            this.Layer_char[i].addChild(this.prt_ch[i],50);
        }

        // if(this.runningChar==1)
        // {
        //     this.Layer_char[this.runningChar].setPosition(cc.p(-504,0));
        //     this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.1),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(0,this.Layer_char[this.runningChar].getPositionY())))));
        // }
        // if(this.runningChar==2)
        // {
        //     // console.log('come');
        //     this.Layer_char[this.runningChar].setPosition(cc.p(-504,0));
        //     this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.1),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(0,this.Layer_char[this.runningChar].getPositionY())))));
        // }
        // if(this.runningChar==3)
        // {
        //     this.Layer_char[this.runningChar].setPosition(cc.p(-504,0));
        //     this.Layer_char[this.runningChar].runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(0,this.Layer_char[this.runningChar].getPositionY())))));
        // }
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

        // self.char_face[self.runningChar].setPosition(tp);
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
        else if(self.btn_reset && cc.rectContainsPoint(self.btn_reset.getBoundingBox(),tp)  && self.btn_reset.getScale()==1.0 && self.btn_reset.getNumberOfRunningActions()==0)
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
        // selectedLevel=selectedLevel+1;
        // if(selectedLevel==4) 
        // {
        //     cc.director.runScene(GameOverScene.scene());
        // }     
        // else 
        // {
        //     cc.director.runScene(DressUpScene.scene());
        // }  
        cc.director.runScene(GameOverScene.scene());
    },
    createMainMenu:function()
    {
        this.btn_bb_icon = cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);
        this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));
        this.btn_bb_icon.setScale(0.8);
        this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));

        this.btn_more = cc.MenuItemImage.create(res_panel_com.btn_more,res_panel_com.btn_more,this.onMoreApp,this);
        this.btn_more.setScale(0.0);
        this.btn_more.setTag(101);
        this.btn_more.setPosition(cc.p(40,35));
        this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.2,1.0))));

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
DressUpScene.scene = function() {
    var scene = new cc.Scene();
    var layer = new DressUpScene();
    scene.addChild(layer);
    return scene;
}