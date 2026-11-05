cc.game.onStart = function() {
    if (!cc.sys.isNative && document.getElementById("cocosLoading")) {
        document.body.removeChild(document.getElementById("cocosLoading"));
    }

    cc.view.enableRetina(false);
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(1366, 768, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    Preloader.preload(
        g_resources,
        function() {
            var titleScene = new TitleScene();
            cc.director.runScene(new cc.TransitionFade(1.0, titleScene));
        },
        this);
};
cc.game.run();