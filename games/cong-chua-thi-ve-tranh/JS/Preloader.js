Preloader = cc.Scene.extend({
init : function(){
        var self = this;
        var logoWidth = 160;
        var logoHeight = 200;
        var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(169, 24, 102, 255));
        self.addChild(bgLayer, 0);
        var fontSize = 25, lblHeight =  -logoHeight + 100;
        //if(res.bb_icon_4)
        {
            cc.loader.loadImg("RES/COM/bb_icon_200x150.png", {isCrossOrigin : false }, function(err, img){
                logoWidth = img.width;
                logoHeight = img.height;
                self._initStage(img, cc.p(252,500));
            });
            fontSize = 25;
            lblHeight = -logoHeight - 10;
        }
        var label = self._label = new cc.LabelTTF("LODING : 0%", "Arial Black", fontSize);
        label.setPosition(cc.p(252,350));
        label.setColor(cc.color(255, 255, 255));
        label.setScale(1.0);
        bgLayer.addChild(this._label, 10);
        return true;
    },
    _initStage: function (img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D();
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = new cc.Sprite(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },
    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);
        cc.eventManager.addListener(
        {
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function(touch, event)
		    {
		        var tp = touch.getLocation();
		        var target = event.getCurrentTarget();
		        if(cc.rectContainsPoint(target._logo.getBoundingBox(),tp))
		        {
		            CreateLinksInGame(comman.GameId,'loadingscreen','logo');
		        }
		        return true;
		    }
        }, this);
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
                self._label.setString("LOADING : " + percent + "%");
            }, function () {
                if (self.cb)
                    self.cb.call(self.target);
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