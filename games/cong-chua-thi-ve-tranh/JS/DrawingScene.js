var DrawingScene = cc.Scene.extend(
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

        this.bg = cc.Sprite.create(res_drawing.bg);
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.addChild(this.bg);

        this.bg_white = cc.Sprite.create(res_comman.bg_white);
        this.bg_white.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg_white.setOpacity(0);
        this.addChild(this.bg_white,199);

        this.drawingPage = cc.Sprite.create(res_drawing.Page);
        this.drawingPage.setPosition(cc.p(320,400));
        this.addChild(this.drawingPage,1);

        this.picture = cc.Sprite.create("RES/DRAW/Drawing_"+comman.selectedPicture+".png");
        this.picture.setPosition(this.drawingPage.getPosition());
        this.addChild(this.picture,3);

        // create a render texture
        this.textureWidth = this.drawingPage.getContentSize().width-19;
        this.textureHeight = this.drawingPage.getContentSize().height-19;
        this._target = new cc.RenderTexture(this.textureWidth,this.textureHeight);
        this._target.setPosition(this.drawingPage.getPosition());
        this.addChild(this._target,2);
        this._target.clear(255,255,255,255);

        this.isDrawingEnable = true;
        this._selectedColor = 0;
        this._lastLocation = cc.p(252,425);
        this.selectedBrushSize = 0;

        this.isTouchOn=false;

        this.scheduleOnce(function(){this.setTouchEnable();},1.0,"setTouchEnable");

        this.createColorPanel();

        this.createMainMenu();

        this.color_code = [];

        this.color_code[0]=cc.color(244,212,52);
        this.color_code[1]=cc.color(244,58,53);
        this.color_code[2]=cc.color(244,55,207);
        this.color_code[3]=cc.color(141,54,243);
        this.color_code[4]=cc.color(54,124,244);
        this.color_code[5]=cc.color(55,242,223);
        this.color_code[6]=cc.color(130,70,40);
        this.color_code[7]=cc.color(150,150,150);
        this.color_code[8]=cc.color(25,25,25);
        this.color_code[9]=cc.color(255,255,255);

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle,250);
    },
    createColorPanel:function()
    {
        this.colorIcons=[];

        for (var i = 0; i < 10; i++)
        {
            this.colorIcons[i] = cc.MenuItemImage.create("RES/DRAW/Color_"+(i+1)+".png","RES/DRAW/Color_"+(i+1)+".png",this.onColorIconsClick,this);
            this.colorIcons[i].setScale(1.0);
            this.colorIcons[i].setRotation(90);
            this.colorIcons[i].setTag(i);
            this.colorIcons[i].setPosition(cc.p(this.colorIcons[i].getContentSize().width*-1.0,this.colorIcons[i].getContentSize().height*4.25+this.colorIcons[i].getContentSize().height*0.65*(5-i)));
            this.colorIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.1+(i*0.1)),cc.EaseBackOut.create(cc.MoveTo.create(0.3,cc.p(this.colorIcons[i].getPositionX()*-1.0,this.colorIcons[i].getPositionY())))));
        }        
        this.colorIcons[this._selectedColor].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.ScaleTo.create(0.01,1.2)));//setScale(1.25);

        this.btn_done = cc.MenuItemImage.create(res_panel_com.btn_done,res_panel_com.btn_done,this.onDoneClick,this);
        this.btn_done.setScale(1.0);
        this.btn_done.setTag(100);
        this.btn_done.setPosition(cc.p(comman.winSize().width-this.btn_done.getContentSize().width*-1.5,this.btn_done.getContentSize().height*0.6));
        this.btn_done.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.25,cc.p(comman.winSize().width-this.btn_done.getContentSize().width*0.6,this.btn_done.getPositionY()))));

        this.btn_reset = cc.MenuItemImage.create(res_panel_com.btn_reset,res_panel_com.btn_reset,this.onResetClick,this);
        this.btn_reset.setScale(1.0);
        this.btn_reset.setPosition(cc.p(comman.winSize().width*0.5,this.btn_reset.getContentSize().height*-1.5));
        this.btn_reset.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.25,cc.p(this.btn_reset.getPositionX(),this.btn_reset.getContentSize().height*0.6))));

        this.btn_back = cc.MenuItemImage.create(res_panel_com.btn_back,res_panel_com.btn_back,this.onBackClick,this);
        this.btn_back.setScale(1.0);
        this.btn_back.setPosition(cc.p(this.btn_back.getContentSize().width*-1.5,this.btn_back.getContentSize().height*0.6));
        this.btn_back.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.25,cc.p(this.btn_back.getContentSize().width*0.6,this.btn_back.getPositionY()))));

        this.iconMenu = cc.Menu.create(this.colorIcons[0],this.colorIcons[1],this.colorIcons[2],this.colorIcons[3],this.colorIcons[4],this.colorIcons[5],this.colorIcons[6],this.colorIcons[7],this.colorIcons[8],this.colorIcons[9],this.btn_done,this.btn_back,this.btn_reset);
        this.iconMenu.setPosition(cc.p(0,0));
        this.addChild(this.iconMenu,10);

		this.brush_panel = cc.Sprite.create(res_drawing.Brush_Pannel);
		this.brush_panel.setPosition(cc.p(252,710+150));
		this.brush_panel.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackOut.create(cc.MoveTo.create(0.25,cc.p(252,715)))));
		this.addChild(this.brush_panel,50);

		this.brushIcons=[];

        for (var i = 0; i < 6; i++)
        {
            this.brushIcons[i] = cc.MenuItemImage.create("RES/DRAW/Brush_"+i+".png","RES/DRAW/Brush_"+(i)+".png",this.onBrushIconsClick,this);
            this.brushIcons[i].setScale(1.0);
            this.brushIcons[i].setRotation(90);
            this.brushIcons[i].setTag(i);
            this.brushIcons[i].setPosition(cc.p(30+(60*i),this.brush_panel.getContentSize().height*0.5-1));
        } 
        this.onBrushIconsClick(this.brushIcons[0]);

        this.brushMenu = cc.Menu.create(this.brushIcons[0],this.brushIcons[1],this.brushIcons[2],this.brushIcons[3],this.brushIcons[4],this.brushIcons[5]);
        this.brushMenu.setPosition(cc.p(0,0));
        this.brush_panel.addChild(this.brushMenu,10);

    },
    onBrushIconsClick:function(sender)
    {
    	this.brushIcons[this.selectedBrushSize].setNormalSpriteFrame("RES/DRAW/Brush_"+this.selectedBrushSize+".png");
    	this.brushIcons[this.selectedBrushSize].setSelectedSpriteFrame("RES/DRAW/Brush_"+this.selectedBrushSize+".png");
        this.selectedBrushSize = sender.getTag();
        this.brushIcons[this.selectedBrushSize].setNormalSpriteFrame("RES/DRAW/Brush_"+this.selectedBrushSize+"_1.png");
    	this.brushIcons[this.selectedBrushSize].setSelectedSpriteFrame("RES/DRAW/Brush_"+this.selectedBrushSize+"_1.png");
    },
    onColorIconsClick:function(sender)
    {
        this.colorIcons[this._selectedColor].setScale(1.0);
        this._selectedColor= sender.getTag();
        this.colorIcons[this._selectedColor].setScale(1.2);
    },
    onDoneClick:function(sender)
    {
        this.iconMenu.setEnabled(false);
        sender.stopAllActions();
        sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));

        this.picture.setPosition(this.textureWidth*0.5,this.textureHeight*0.5);
        this._target.begin();
        this.picture.visit();
        this._target.end();
        _drawingTexture = this._target.getSprite().texture;

        this.picture.setLocalZOrder(-2);
		this._target.setLocalZOrder(-2);
		
        for (var i = 0; i < this.colorIcons.length; i++)
        {
        	this.colorIcons[i].setScale(1.0);
			this.colorIcons[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.1+(i*0.1)),cc.EaseBackOut.create(cc.MoveTo.create(0.3,cc.p(this.colorIcons[i].getPositionX()*-1.0,this.colorIcons[i].getPositionY())))));
		}
		this.btn_done.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.25,cc.p(comman.winSize().width+this.btn_done.getContentSize().width*0.6,this.btn_done.getPositionY()))));
		this.btn_reset.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.25,cc.p(this.btn_reset.getPositionX(),this.btn_reset.getContentSize().height*-0.6))));
		this.btn_back.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.MoveTo.create(0.25,cc.p(this.btn_back.getContentSize().width*-0.6,this.btn_back.getPositionY()))));
		this.brush_panel.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.MoveTo.create(0.25,cc.p(252,715+150)))));

		this.drawingPage.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.MoveTo.create(0.5,cc.p(252,475))));

		this.texture = cc.Sprite.create(_drawingTexture);
        this.texture.setPosition(this.drawingPage.getContentSize().width*0.5,this.drawingPage.getContentSize().height*0.5);
        this.texture.setScale(1.0);
        this.drawingPage.addChild(this.texture);


		this.btn_tryAnother = cc.MenuItemImage.create(res_drawing.btn_tryAnother,res_drawing.btn_tryAnother,this.onTryAnotherClick,this);
        this.btn_tryAnother.setScale(1.0);
        this.btn_tryAnother.setPosition(cc.p(this.btn_tryAnother.getContentSize().width*-0.6,this.btn_tryAnother.getContentSize().height*2.1));
        this.btn_tryAnother.runAction(cc.Sequence.create(cc.DelayTime.create(1.0),cc.MoveTo.create(0.25,cc.p(comman.winSize().width*0.5,this.btn_tryAnother.getPositionY()))));

		this.btn_usePicture = cc.MenuItemImage.create(res_drawing.btn_useThisPic,res_drawing.btn_useThisPic,this.onUsePictureClick,this);
        this.btn_usePicture.setScale(1.0);
        this.btn_usePicture.setPosition(cc.p(comman.winSize().width+this.btn_usePicture.getContentSize().width*0.6,this.btn_usePicture.getContentSize().height*0.9));
        this.btn_usePicture.runAction(cc.Sequence.create(cc.DelayTime.create(1.0),cc.MoveTo.create(0.25,cc.p(comman.winSize().width*0.5,this.btn_usePicture.getPositionY()))));

        this.lastMenu = cc.Menu.create(this.btn_tryAnother,this.btn_usePicture);
        this.lastMenu.setPosition(cc.p(0,0));
        this.addChild(this.lastMenu,10);
    },
    onUsePictureClick:function(sender)
    {
        this.lastMenu.setEnabled(false);
        sender.stopAllActions();
        sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));
        this.scheduleOnce(function(){this.onNextScene()},0.6,"onNextScene");
    },
    onTryAnotherClick:function(sender)
    {
        this.lastMenu.setEnabled(false);
        sender.stopAllActions();
        sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));
        this.scheduleOnce(function(){this.onBackScene()},0.6,"onBackScene");
    },
    onBackClick:function(sender)
    {
        this.iconMenu.setEnabled(false);
        sender.stopAllActions();
        sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));
        this.scheduleOnce(function(){this.onBackScene()},0.6,"onBackScene");
    },
    onResetClick:function(sender)
    {
        sender.stopAllActions();
        sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.1,0.9),cc.ScaleTo.create(0.1,1.0)));
        this._target.clear(255,255,255,255);
    },
    onBackScene:function()
    {
        cc.director.runScene(DrawingSelectionScene.scene());
    },
    onTouchBegan:function(touch, event)
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();

        if (self.isDrawingEnable) 
        {
            self._lastLocation = tp;
            return true;
        }

        return true;
    },
    onTouchMoved:function(touch, event) 
    {
        var location = touch.getLocation();
        var self = event.getCurrentTarget();

        // self.dc_item[self.itemTAG].setPosition(tp);
        // console.log('this.dc_item['+self.itemTAG+'].setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');
        // console.log('setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');

        var distance = cc.pDistance(location, self._lastLocation);

        if (distance > 1) {
            var locLastLocation = self._lastLocation;
            self._target.begin();
            //self._brushs = [];
            var node = new cc.DrawNode();
            /*
				var node = new cc.DrawNode();
				node.drawCircle(center, radius, ...other params);
				//workaround to fill the circle
				var lastElement = node._buffer[node._buffer.length - 1];
				lastElement.isFill = true;
				lastElement.fillColor = cc.color.WHITE;
            */
            for(var i = 0; i < distance; i=i+(1+(self.selectedBrushSize>=4?0:0))) {
                var diffX = locLastLocation.x - location.x;
                var diffY = locLastLocation.y - location.y;
                var delta = i / distance;
                // var sprite = new cc.Sprite("RES/DRAW/Brush_"+self.selectedBrushSize+".png");
                // sprite.attr({
                //     x: (location.x + diffX * delta)-self._target.getPositionX()+self.textureWidth*0.5,
                //     y: (location.y + diffY * delta)-self._target.getPositionY()+self.textureHeight*0.5,
                //     rotation: Math.random() * 360,
                //     color: self.color_code[self._selectedColor],
                //     scale: (self.selectedBrushSize==0?0.2:0.5)
                // });
                // sprite.retain();
                // self._brushs.push(sprite);
                //
                node.drawDot(cc.p((location.x + diffX * delta)-self._target.getPositionX()+self.textureWidth*0.5,(location.y + diffY * delta)-self._target.getPositionY()+self.textureHeight*0.5),0.75+(3*self.selectedBrushSize));
				//workaround to fill the circle
				var lastElement = node._buffer[node._buffer.length - 1];
				lastElement.isFill = true;
				lastElement.fillColor = self.color_code[self._selectedColor];
				node.visit();
            }
            // for (var i = 0; i < self._brushs.length; i++) {
            // 		self._brushs[i].visit();
            // }
            self._target.end();
        }
        self._lastLocation = location;       
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
    },
    onMoreApp:function(sender)
    {
        //if (this.isTouchOn==false){return;}
        if (sender.getTag()==101)
    	{
            CreateLinksInGame(comman.GameId,'DrawingScene','more');
        }
        else
        {
            CreateLinksInGame(comman.GameId,'DrawingScene','logo');
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
    setTouchEnable:function()
    {

        this.isTouchOn=true;
    },
    onNextScene:function(dt)
    {
        cc.director.runScene(DressUpScene.scene());
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
DrawingScene.scene = function() {
    var scene = new cc.Scene();
    var layer = new DrawingScene();
    scene.addChild(layer);
    return scene;
}