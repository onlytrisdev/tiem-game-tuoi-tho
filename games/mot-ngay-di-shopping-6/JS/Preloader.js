Preloader = cc.Scene.extend({
init : function(){
        var self = this;
        var logoWidth = 160;
        var logoHeight = 200;
        var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(0, 84, 124, 255));
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
        var label = self._label = new cc.LabelTTF("Đang Tải : 0%", "Arial", fontSize);
        label.setPosition(cc.p(252,350));
        label.setColor(cc.color(255, 255, 255));
        label.setScale(1.0);
        bgLayer.addChild(this._label, 10);
        return true;
    },
    _initStage: function (img, centerPos) {
        var self = this;
        var logo = self._logo = cc.MenuItemImage.create("RES/COM/bb_icon_200x150.png","RES/COM/bb_icon_200x150.png",this.onLogoClick,this);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        logoMenu = cc.Menu.create(self._logo);
        logoMenu.setPosition(cc.p(0,0));
        self._bgLayer.addChild(logoMenu,10);
    },
    onLogoClick:function(sender)
    {
        CreateLinksInGame(comman.GameId,'loadingscreen','logo');
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
                self._label.setString("Đang Tải : " + percent + "%");
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