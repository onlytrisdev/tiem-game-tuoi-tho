var GameOverScene = cc.Scene.extend(
{
    ctor:function() {
        this._super();
        this.init();
    },
    init:function () 
    {
        this._super();

        this.bg = cc.Sprite.create("RES/GO/bg_1.png");
        this.bg.setPosition(cc.p(252,400));
        this.bg.setScale(1.0);
        this.addChild(this.bg);

        this.ch_1 = cc.Sprite.create("RES/GO/ch_1.png");
        this.ch_1.setPosition(cc.p(252,400));
        this.ch_1.setScale(1.0);
        this.addChild(this.ch_1,2);

        this.msg_1 = cc.Sprite.create("RES/GO/msg_1.png");
        this.msg_1.setPosition(cc.p(320,720));
        this.msg_1.setScale(0.0);
        this.addChild(this.msg_1,2);
        this.msg_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackOut.create(cc.ScaleTo.create(0.5,1.0)),cc.DelayTime.create(5.0),cc.EaseBackIn.create(cc.ScaleTo.create(0.5,0.0))));
       
        this.createMainMenu();

        this.setUpChar();

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle,250);

        this.scheduleOnce(function(){this.onDoneScreen()},0.5,"onDoneScreen");
    },
    setUpChar:function()
    {
        this.char_image=[];
        for(var i=1 ; i<=1 ; i++)
        {
            this.char_image[i] = cc.Sprite.create(char_texture[i]);
            // this.char_image[i].setPosition(cc.p(252,460));
            this.char_image[i].setScale(0.0);
            this.addChild(this.char_image[i]); 
        }
        this.char_image[1].setLocalZOrder(3);
        this.char_image[1].setScale(0.9);
        this.char_image[1].setPosition(cc.p(180,400));

        // this.char_image[2].setLocalZOrder(2);
        // this.char_image[2].setScale(0.85);
        // this.char_image[2].setPosition(cc.p(255,430));

        // this.char_image[3].setLocalZOrder(3);
        // this.char_image[3].setScale(0.85);
        // this.char_image[3].setPosition(cc.p(460,430));

    },
    onDoneScreen:function()
    {
        this.btn_replay.stopAllActions();
        this.btn_more.stopAllActions();
        this.btn_relatedGames.stopAllActions();
        this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,75)))));
        this.btn_replay.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_replay.getContentSize().width*0.6,75)))));
        this.btn_relatedGames.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width*0.5,75)))));
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
        // self.Score_disp_label[0].setPosition(tp.x,tp.y);
        // console.log('setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');
    },
    onTouchEnded:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
    },
    onNextScene:function()
    {
        selectedLevel=1;

        char_texture = [];

        dress_code = [];
        for (i=0;i<=4;i++) 
        {
            var temp_code1 = [];
            for (var j=0;j<=7;j++)
            {
                temp_code1.push(0);
            }
            dress_code.push(temp_code1);
        }

        Complete_Level[0]=true;
        Complete_Level[1]=false;
        
        cc.director.runScene(StoryScene.scene());
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

        if(self.btn_next && cc.rectContainsPoint(self.btn_next.getBoundingBox(),tp)  && self.btn_next.getScale()==1.0 && self.btn_next.getNumberOfRunningActions()==0 && self.btn_next.getOpacity()==255)
        {
            self.prt_Sparkle.setPosition(self.btn_next.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_next.setScale(1.1);
            return;
        }
        else if(self.btn_next && self.btn_next.getScale()==1.1 && !cc.rectContainsPoint(self.btn_next.getBoundingBox(),tp) && self.btn_next.getNumberOfRunningActions()==0 && self.btn_next.getOpacity()==255)
        {
            self.btn_next.setScale(1.0);
            return;
        }
        else if(self.btn_prev && cc.rectContainsPoint(self.btn_prev.getBoundingBox(),tp)  && self.btn_prev.getScale()==1.0 && self.btn_prev.getNumberOfRunningActions()==0 && self.btn_prev.getOpacity()==255)
        {
            self.prt_Sparkle.setPosition(self.btn_prev.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_prev.setScale(1.1);
            return;
        }
        else if(self.btn_prev && self.btn_prev.getScale()==1.1 && !cc.rectContainsPoint(self.btn_prev.getBoundingBox(),tp) && self.btn_prev.getNumberOfRunningActions()==0 && self.btn_prev.getOpacity()==255)
        {
            self.btn_prev.setScale(1.0);
            return;
        }
        else if(self.btn_more && cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp)  && self.btn_more.getScale()==1.0 && self.btn_more.getNumberOfRunningActions()==0 )
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
        else if(self.btn_replay && cc.rectContainsPoint(self.btn_replay.getBoundingBox(),tp)  && self.btn_replay.getScale()==1.0 && self.btn_replay.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.btn_replay.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_replay.setScale(1.1);
            return;
        }
        else if(self.btn_replay && self.btn_replay.getScale()==1.1 && !cc.rectContainsPoint(self.btn_replay.getBoundingBox(),tp) && self.btn_replay.getNumberOfRunningActions()==0)
        {
            self.btn_replay.setScale(1.0);
            return;
        }
    },
    onMoreApp:function(sender)
    {
        //if (this.isTouchOn==false){return;}
        if (sender.getTag()==101)
        {
            CreateLinksInGame(comman.GameId,'GameOverScene','more');
        }
        else
        {
            CreateLinksInGame(comman.GameId,'GameOverScene','logo');
        }
    },
    onRelatedGames:function(sender)
    {
        CreateLinksInGame(comman.GameId,'GameOverScene','relatedgames',RelatedGames[sender.getTag()]['id']);
    },
    onReplayButton:function(sender)
    {
        if (this.isTouchOn==false){return;}
        if (sender.getNumberOfRunningActions()==0)
        {
            sender.setEnabled(false);
            this.scheduleOnce(function(){this.onNextScene()},0.1,"onNextScene");
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

        this.btn_more = cc.MenuItemImage.create(res_mainScene.btn_more,res_mainScene.btn_more,this.onMoreApp,this);
        this.btn_more.setScale(1.0);
        this.btn_more.setTag(101);
        this.btn_more.setPosition(cc.p(this.btn_more.getContentSize().width*0.5,-80));

        this.btn_replay = cc.MenuItemImage.create(res_mainScene.btn_replay,res_mainScene.btn_replay,this.onReplayButton,this);
        this.btn_replay.setScale(1.0);
        this.btn_replay.setPosition(cc.p(comman.winSize().width-this.btn_replay.getContentSize().width*0.5,-80));

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

        var relatedTag=this.getRandomInt(0,RelatedGames.length-1);
        //console.log("relat : "+relatedTag + res_resource[res_resource.length-RelatedGames.length+relatedTag]);
        this.btn_relatedGames = cc.MenuItemImage.create(res_comman.logo_bg,res_comman.logo_bg,this.onRelatedGames,this);
        this.btn_relatedGames.setScale(1.0);
        this.btn_relatedGames.setTag(relatedTag);
        this.btn_relatedGames.setPosition(cc.p(comman.winSize().width*0.5,-80));

        this.relatedGames_Img=cc.Sprite.create(res_resource[res_resource.length-RelatedGames.length+relatedTag]);
        this.relatedGames_Img.setScaleX((this.btn_relatedGames.getContentSize().width-10)/this.relatedGames_Img.getContentSize().width);
        this.relatedGames_Img.setScaleY((this.btn_relatedGames.getContentSize().height-10)/this.relatedGames_Img.getContentSize().width);
        this.relatedGames_Img.setPosition(this.btn_relatedGames.getContentSize().width/2,this.btn_relatedGames.getContentSize().height/2);
        this.btn_relatedGames.addChild(this.relatedGames_Img);

        this.MainMenu = cc.Menu.create(this.btn_bb_icon,this.btn_more,this.btn_replay,this.btn_music,this.btn_relatedGames);
        this.MainMenu.setPosition(cc.p(0,0));
        this.addChild(this.MainMenu,250);
    },
    getRandomInt:function(min, max) 
    {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
GameOverScene.scene = function() {
    var scene = new cc.Scene();
    var layer = new GameOverScene();
    scene.addChild(layer);
    return scene;
}