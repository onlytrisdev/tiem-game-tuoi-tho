var GameOverScene = cc.Scene.extend(
{
    
    ctor:function() {
        this._super();
        this.init();
    },
    init:function () 
    {
        this._super();

        this.bg = cc.Sprite.create(res_GameOver.bg);
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg.setScale(1.0);
        this.addChild(this.bg);

        this.bg_white = cc.Sprite.create(res_comman.bg_white);
        this.bg_white.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg_white.setOpacity(255);
        this.addChild(this.bg_white,199);
        this.bg_white.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.FadeTo.create(0.5,0)));

        this.createMainMenu();

        this.setUpCharactor();

        this.scheduleOnce(function(){this.onDoneScreen()},2.0,"onDoneScreen");
    },
    setUpCharactor:function()
    {
        this.Layer_char = [];
        this.ch_item = [];
        this.char_body=[];
        this.char_body_up=[];

        for (var i = 1; i <= 1; i++) 
        {
            this.ch_item[i]=[];

            this.Layer_char[i] = cc.Layer.create();
            this.Layer_char[i].setPosition(cc.p(-504,0));
            this.Layer_char[i].setScale(0.75);
            this.addChild(this.Layer_char[i],3);

            this.char_body[i] = cc.Sprite.create("RES/GO/body.png");
            this.char_body[i].setPosition(252,0);
            this.char_body[i].setAnchorPoint(0.5,0.0);
            this.Layer_char[i].addChild(this.char_body[i],0);

            this.char_body_up[i] = cc.Sprite.create(res_GameOver.body_hand);
            this.char_body_up[i].setPosition(262,-50);
            this.char_body_up[i].setScale(1.0);
            this.char_body_up[i].setAnchorPoint(0.5,0.0);
            this.Layer_char[i].addChild(this.char_body_up[i],10);

            for (var j = 1; j <= 4; j++) 
            {
                this.ch_item[i][j] = cc.Sprite.create("RES/DS/C"+i+"/U/"+j+"_"+dress_code[i][j]+".png");
                this.Layer_char[i].addChild(this.ch_item[i][j],1+j);
                if(j==4) 
                {
                    this.ch_item[i][j].setLocalZOrder(1);
                }
            }
        }
        this.Layer_char[1].setPosition(cc.p(0,-90));

        this.drawingPage = cc.Sprite.create(res_drawing.Page);
        this.drawingPage.setPosition(cc.p(264,400));
        this.drawingPage.setScale(0.5);
        this.drawingPage.setRotation(0);
        this.Layer_char[1].addChild(this.drawingPage,9);

        this.texture = cc.Sprite.create(_drawingTexture);
        this.texture.setPosition(this.drawingPage.getContentSize().width*0.5,this.drawingPage.getContentSize().height*0.5);
        this.texture.setScale(1.0);
        this.drawingPage.addChild(this.texture,9);

        this.other_char_1 = cc.Sprite.create(res_GameOver.char_1);
        this.other_char_1.setPosition(130,130);
        this.other_char_1.setScale(0.75);
        this.other_char_1.setAnchorPoint(cc.p(0.5,0.0));
        this.addChild(this.other_char_1);

        this.other_char_2 = cc.Sprite.create(res_GameOver.char_2);
        this.other_char_2.setPosition(370,130);
        this.other_char_2.setScale(1.0);
        this.other_char_2.setAnchorPoint(cc.p(0.5,0.0));
        this.addChild(this.other_char_2);
        
        //CHAR 1
        this.ch_item[1][1].setPosition(cc.p(260,318));
        this.ch_item[1][2].setPosition(cc.p(268,569));
        this.ch_item[1][3].setPosition(cc.p(264,512));
        this.ch_item[1][4].setPosition(cc.p(270,52));
    },
    onDoneScreen:function()
    {
        this.btn_replay.stopAllActions();
        this.btn_more.stopAllActions();
        this.btn_relatedGames.stopAllActions();
        this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,670)))));
        this.btn_replay.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_replay.getContentSize().width*0.6,670)))));
        this.btn_relatedGames.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width*0.5,670)))));
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
        // self.drawingPage.setPosition(tp.x,tp.y);
        // console.log('setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');
    },
    onTouchEnded:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
    },
    onNextScene:function()
    {

        cc.director.runScene(StoryScene1.scene());
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
            CreateLinksInGame(comman.GameId,'GameOverScene','more');
        }
        else
        {
            CreateLinksInGame(comman.GameId,'GameOverScene','logo');
        }
    },
    onRelatedGames:function(sender)
    {
        CreateLinksInGame(comman.GameId,'gameover','relatedgames',RelatedGames[sender.getTag()]['id']);
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
        this.btn_more.setPosition(cc.p(this.btn_more.getContentSize().width*0.5,this.btn_more.getContentSize().height+800));

        this.btn_replay = cc.MenuItemImage.create(res_mainScene.btn_replay,res_mainScene.btn_replay,this.onReplayButton,this);
        this.btn_replay.setScale(1.0);
        this.btn_replay.setPosition(cc.p(comman.winSize().width-this.btn_replay.getContentSize().width*0.5,this.btn_replay.getContentSize().height+800));

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
        this.btn_relatedGames.setPosition(cc.p(comman.winSize().width*0.5,this.btn_relatedGames.getContentSize().height+800));

        this.relatedGames_Img=cc.Sprite.create(res_resource[res_resource.length-RelatedGames.length+relatedTag]);
        this.relatedGames_Img.setScale(175/this.relatedGames_Img.getContentSize().width);
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