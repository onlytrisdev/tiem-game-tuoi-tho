Preloader = cc.Scene.extend({
init : function(){
        var self = this;
        var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(0, 84, 124, 255));
        self.addChild(bgLayer, 0);

        cc.loader.load(['RES/COM/play.png','RES/COM/bb_icon_200x150.png',"RES/COM/bg_white.png"],
        function (result, count, loadedCount) 
        {
            // console.log('result : ' +result.src+ ' count : ' +count + ' loadedCount: ' +loadedCount);
            isCrossOrigin : false
        },function () 
        {
            self._initStage(cc.p(252,500));
        });
        return true;
    },
    _initStage: function (centerPos) {
        var self = this;
        
        var label = self._label = new cc.LabelTTF("LOADING : 0%", "Arial Black", 25);
        label.setPosition(cc.p(252,350));
        label.setColor(cc.color(255, 255, 255));
        label.setScale(1.0);
        self._bgLayer.addChild(this._label, 10);

        var logo = self._logo = cc.MenuItemImage.create("RES/COM/bb_icon_200x150.png","RES/COM/bb_icon_200x150.png",this.onLogoClick,this);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;

        self._logoMenu = cc.Menu.create(self._logo);
        self._logoMenu.setPosition(cc.p(0,0));
        self._bgLayer.addChild(self._logoMenu,10);

        var play = self._play = cc.MenuItemImage.create("RES/COM/play.png","RES/COM/play.png",this.onPlayClick,this);
        play.setScale(cc.contentScaleFactor());
        play.x = 252;
        play.y = 350;
        play.scale = 0;

        var playMenu = cc.Menu.create(self._play);
        playMenu.setPosition(cc.p(0,0));
        self._bgLayer.addChild(playMenu,10);

    },
    onLogoClick:function(sender)
    {
        CreateLinksInGame(comman.GameId,'loadingscreen','logo');
    },
    onPlayClick:function(sender)
    {
        var self = this;
        if (self.cb)
        {
            comman.playMusic(res_comman.sound_bg_mp3,!0,!0);
            self.cb.call(self.target);
        }
    },
    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);
    },
    onExit: function () {
        cc.Node.prototype.onExit.call(this);
        var tmpStr = "Loading... 0%";
        this._label.setString(tmpStr);
    },
    initWithResources: function (resources, cb, target) {
        if(cc.isString(resources))
            resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
        this.target = target;
    },
    _startLoading: function () {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,
            function (result, count, loadedCount) {
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                if (self._label)
                {
                    self._label.setString("LOADING : " + percent + "%");
                }
            }, function () {

                // self._logo.setScale(0.0);
                if (self._play)
                {
                    self._play.setScale(0.75);
                }
                else
                {
                    self._play = cc.MenuItemImage.create("RES/COM/play.png","RES/COM/play.png",this.onPlayClick,this);
                    self._play.setScale(cc.contentScaleFactor());
                    self._play.x = 252;
                    self._play.y = 350;
                    self._play.scale = 0.75;

                    var playMenu = cc.Menu.create(self._play);
                    playMenu.setPosition(cc.p(0,0));
                    self._bgLayer.addChild(playMenu,10);
                }
                self._label.setString("");

                self._play.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.DelayTime.create(0.25),cc.ScaleTo.create(0.3,0.8),cc.DelayTime.create(0.2),cc.ScaleTo.create(0.3,0.75))));
            });
    },
    _updateTransform: function(){
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        this._bgLayer._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        this._label._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        this._logo._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    }
});
Preloader.preload = function(a, b, c) {
    this._miaPreloader || (this._miaPreloader = new Preloader, this._miaPreloader.init());
    this._miaPreloader.initWithResources(a, b);
    cc.director.runScene(this._miaPreloader);
    return this._miaPreloader
};