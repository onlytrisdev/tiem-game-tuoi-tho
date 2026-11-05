OrientationChecker = function(container, startCallback) {
    this.startCallback = startCallback;
    this.incorrectOrientation = false;
    this.resumeOnCorrectOrientation = false;

    var style = document.createElement("style");
    style.innerHTML = "#rotate-screen {\n" +
    "    position: absolute;\n" +
    "    width: 100%;\n" +
    "    height: 100%;\n" +
    "    top: 0;\n" +
    "    left: 0;\n" +
    "    z-index: 2147483647;\n" +
    "    background-color: #000000;\n" +
    "    background-image: url('assets/rotate.png');\n" +
    "    background-repeat: no-repeat;\n" +
    "    background-size: contain;\n" +
    "    background-position: center;\n" +
    "}";
    document.head.appendChild(style);

    var rotate = document.createElement("div");
    rotate.id = "rotate-screen";
    rotate.style.display = "none";
    var element = container ? document.getElementById(container) : document.body;
    element.appendChild(rotate);
    this.rotate = rotate;

    var ua = navigator.userAgent;
    this.desktop = !/Mobi|Android|iP[ao]d|iPhone/i.test(ua) && (!/Mac/.test(ua) || !navigator.maxTouchPoints || navigator.maxTouchPoints <= 1);

    this._onResize = this.OnResize.bind(this);
    window.addEventListener("resize", this._onResize);
    this.OnResize();
};

OrientationChecker.prototype.constructor = OrientationChecker;

OrientationChecker.prototype.OnResize = function() {
    var orientation = getScreenOrientation() || "portrait-primary";
    if (this.desktop || (orientation == "portrait-primary" || orientation == "portrait-secondary")) {
        this.LeaveIncorrectOrientation();
        if (this.startCallback) {
            window.scrollTo(0, 0);
            this.startCallback.call();
            delete this.startCallback;
        }
    }
    else {
        this.EnterIncorrectOrientation();
    }
};

OrientationChecker.prototype.SetGame = function(game) {
    this.game = game;
}

OrientationChecker.prototype.Pause = function() {
    // A&O specific
    //if (!audio_manager.muted) {
    //  audio_manager.muteAll();
    //}
    if (!this.game) { return; }

    this.game.pause();

    //this.game.input.enabled = false;
    //if (!this.game.paused){
    //    this.resumeOnCorrectOrientation = true;
    //    this.game.paused = true;
    //}
    //else{
    //    this.resumeOnCorrectOrientation = false;
    //}
};

OrientationChecker.prototype.Resume = function() {
    // A&O specific
    //if (audio_manager.muted) {
    //  audio_manager.unMuteAll();
    //}
    if (!this.game) { return;}
    this.game.resume();
    //if (!this.game) { return; }
    //this.game.input.enabled = true;
    //
    //if (this.resumeOnCorrectOrientation) {
    //    this.game.paused = false;
    //    this.resumeOnCorrectOrientation = false;
    //}
};

OrientationChecker.prototype.EnterIncorrectOrientation = function() {
    this.ShowIncorrectOrientationMessage();
    this.Pause();
};

OrientationChecker.prototype.LeaveIncorrectOrientation = function() {
    this.HideIncorrectOrientationMessage();
    this.Resume();
};

OrientationChecker.prototype.ShowIncorrectOrientationMessage = function() {
   this.incorrectOrientation = true;
   this.rotate.style.display = "initial";
};

OrientationChecker.prototype.HideIncorrectOrientationMessage = function() {
    this.incorrectOrientation = false;
    this.rotate.style.display = "none";
};

// Non-Phaser frameworks
getScreenOrientation = function(primaryFallback) {

    var screen = window.screen;
    var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;

    if (orientation && typeof orientation.type === 'string')
    {
        // Screen Orientation API specification
        return orientation.type;
    }
    else if (typeof orientation === 'string')
    {
        // moz/ms-orientation are strings
        return orientation;
    }

    var PORTRAIT = 'portrait-primary';
    var LANDSCAPE = 'landscape-primary';

    if (primaryFallback === 'screen')
    {
        return (screen.height > screen.width) ? PORTRAIT : LANDSCAPE;
    }
    else if (primaryFallback === 'viewport')
    {
        return (this.visualBounds.height > this.visualBounds.width) ? PORTRAIT : LANDSCAPE;
    }
    else if (primaryFallback === 'window.orientation' && typeof window.orientation === 'number')
    {
        // This may change by device based on "natural" orientation.
        return (window.orientation === 0 || window.orientation === 180) ? PORTRAIT : LANDSCAPE;
    }
    else if (window.matchMedia)
    {
        if (window.matchMedia('(orientation: portrait)').matches)
        {
            return PORTRAIT;
        }
        else if (window.matchMedia('(orientation: landscape)').matches)
        {
            return LANDSCAPE;
        }
    }

    return (this.visualBounds.height > this.visualBounds.width) ? PORTRAIT : LANDSCAPE;
};
