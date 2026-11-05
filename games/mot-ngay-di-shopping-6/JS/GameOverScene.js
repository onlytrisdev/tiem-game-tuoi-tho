var GameOverScene = cc.Scene.extend(
{
    
    ctor:function() {
        this._super();
        this.init();
    },
    init:function () 
    {
        this._super();

        this.bg = cc.Sprite.create(res_elsa_dressup.gameover_bg_img);
        this.bg.setPosition(cc.p(comman.winSize().width/2,comman.winSize().height/2));
        this.addChild(this.bg);

        this.createMainMenu();
        this.ElsasetUpChar();

        this.scheduleOnce(function(){this.onDoneScreen()},0.5,"onDoneScreen");

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle,11);
    },
 
    ElsasetUpChar:function()
    {
        this.Layer_char = [];
        this.ch_item = [];
        this.char_body=[];
        this.prt_ch = [];
        this.char_face=[];

        for (var k =1; k <=2; k++) 
        {
            this.Layer_char[k] = cc.Layer.create();
            this.Layer_char[k].setPosition(cc.p(-504,0));
            this.Layer_char[k].setScale(1.0);
            this.addChild(this.Layer_char[k]);

            this.char_body[k] = cc.Sprite.create("RES/DS/C"+k+"/body.png");
            this.char_body[k].setPosition(252,400);
            this.Layer_char[k].addChild(this.char_body[k],1);

            // this.char_face[k] = cc.Sprite.create("RES/DS/C"+k+"/face.png");
            // this.char_face[k].setPosition(252,400);
            // this.Layer_char[k].addChild(this.char_face[k],1);

            this.ch_item[k]=[];

            for (var i = 1; i <=4; i++) 
            {

                this.ch_item[k][i] = cc.Sprite.create(k==1?SelctedElsaItem[i][dress_code[k][i]]:SelctedAnnaItem[i][dress_code[k][i]]);
                // console.log('this.ch_item['+i+']['+j+'] ='+ SelctedElsaItem[i][0]);              
                this.Layer_char[k].addChild(this.ch_item[k][i]);
                this.ch_item[k][i].setPosition(cc.p(252,400));
                
        
                if(i==1)
                {
                    this.ch_item[k][i].setLocalZOrder(2);
                }
                if(i==2)
                {
                    this.ch_item[k][i].setLocalZOrder(2);
                }
                if(i==3)
                {
                    this.ch_item[k][i].setLocalZOrder(2);
                }
                if(i==4)
                {
                    this.ch_item[k][i].setLocalZOrder(1);
                }
            }
        }
        // this.runningChar=1;
        this.Layer_char[1].stopAllActions();
        this.Layer_char[1].setScale(0.8);
        this.Layer_char[1].setPosition(cc.p(-120,0));
        this.Layer_char[1].setLocalZOrder(4);

        this.Layer_char[2].stopAllActions();
        this.Layer_char[2].setScale(0.8);
        this.Layer_char[2].setPosition(cc.p(110,10));
        this.Layer_char[2].setLocalZOrder(4);
        // this.itemTAG=1;
    },

    onDoneScreen:function()
    {
        this.btn_replay.stopAllActions();
        this.btn_more.stopAllActions();
        this.btn_relatedGames.stopAllActions();
        this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,80)))));
        this.btn_replay.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_replay.getContentSize().width*0.6,80)))));
        this.btn_relatedGames.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width*0.5,80)))));
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
        // self.sentence.setPosition(tp.x,tp.y);
        // console.log('this.char_injury['+self.movingTool+'].setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');
    },
    onTouchEnded:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
    },
    onNextScene:function()
    {
        var dress_code = [];
        for (var i=0;i<=3;i++) 
        {
            var temp_code1 = [];
            for (var j=0;j<=6;j++)
            {
                temp_code1.push(0);
            }
            dress_code.push(temp_code1);
        }

        // Elsa Variable. . .
        RunningElsaCharItem = 1 ;

        Elsa_item_1_counter = 0;
        Elsa_item_2_counter = 0;
        Elsa_item_3_counter = 0;
        Elsa_item_4_counter = 0;

        Elsa_Total_dress_Price_value=0;
        Elsa_Total_hair_Price_value=0;
        Elsa_Total_headdecoration_Price_value=0;
        Elsa_Total_shoes_Price_value=0;

        var Complete_Elsa_Sub_Level = [];

        var SelctedElsaItem = [];
        for(var i=0;i<=6;i++)
        {
            SelctedElsaItem[i] = [];
        }

        // Anna Variable. . .
        RunningAnnaCharItem = 1 ;

        Anna_item_1_counter = 0;
        Anna_item_2_counter = 0;
        Anna_item_3_counter = 0;
        Anna_item_4_counter = 0;

        Anna_Total_dress_Price_value=0;
        Anna_Total_hair_Price_value=0;
        Anna_Total_headdecoration_Price_value=0;
        Anna_Total_shoes_Price_value=0;

        var Complete_Anna_Sub_Level = [];

        var SelctedAnnaItem = [];
        for(var i=0;i<=6;i++)
        {
            SelctedAnnaItem[i] = [];
        }

        Complete_Level[1]=true;
        Complete_Level[2]=false;

        Complete_Elsa_Sub_Level[1]=true;
        Complete_Elsa_Sub_Level[2]=true;
        Complete_Elsa_Sub_Level[3]=true;
        Complete_Elsa_Sub_Level[4]=true;

        Complete_Anna_Sub_Level[1]=true;
        Complete_Anna_Sub_Level[2]=true;
        Complete_Anna_Sub_Level[3]=true;
        Complete_Anna_Sub_Level[4]=true;

        cc.director.runScene(ChooseScene.scene());
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
        else if(cc.rectContainsPoint(self.btn_replay.getBoundingBox(),tp)  && self.btn_replay.getScale()==1.0 && self.btn_replay.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.btn_replay.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_replay.setScale(1.1);
        }
        else if(self.btn_replay.getScale()==1.1 && !cc.rectContainsPoint(self.btn_replay.getBoundingBox(),tp) && self.btn_replay.getNumberOfRunningActions()==0)
        {
            self.btn_replay.setScale(1.0);
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
        this.btn_more.setPosition(cc.p(this.btn_more.getContentSize().width*0.5,this.btn_more.getContentSize().height*-1.0));

        this.btn_replay = cc.MenuItemImage.create(res_mainScene.btn_replay,res_mainScene.btn_replay,this.onReplayButton,this);
        this.btn_replay.setScale(1.0);
        this.btn_replay.setPosition(cc.p(comman.winSize().width-this.btn_replay.getContentSize().width*0.5,this.btn_replay.getContentSize().height*-1.0));

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
        this.btn_relatedGames.setPosition(cc.p(comman.winSize().width*0.5,this.btn_relatedGames.getContentSize().height*-1.0));

        this.relatedGames_Img=cc.Sprite.create(res_resource[res_resource.length-RelatedGames.length+relatedTag]);
        this.relatedGames_Img.setScaleX((this.btn_relatedGames.getContentSize().width-10)/this.relatedGames_Img.getContentSize().width);
        this.relatedGames_Img.setScaleY((this.btn_relatedGames.getContentSize().height-10)/this.relatedGames_Img.getContentSize().width);
        this.relatedGames_Img.setPosition(this.btn_relatedGames.getContentSize().width/2,this.btn_relatedGames.getContentSize().height/2);
        this.btn_relatedGames.addChild(this.relatedGames_Img);

        this.MainMenu = cc.Menu.create(this.btn_bb_icon,this.btn_more,this.btn_replay,this.btn_music,this.btn_relatedGames);
        this.MainMenu.setPosition(cc.p(0,0));
        this.addChild(this.MainMenu,10);
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