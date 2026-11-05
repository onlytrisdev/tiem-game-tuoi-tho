function CMenu(){
    var _oBg;
    var _oButPlay;
    var _oFade;
    var _oAudioToggle;
    var _oButCredits;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosAudio;
    var _pStartPosCredits;
    var _pStartPosFullscreen;
    
    var _oLeaderboardBtn;
    var _pLeaderboardBtn;
    var _pLoginBtn;
    var _oLoginBtn
    
    this._init = function(){
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);

        var oSprite = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -160,oSprite);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10}; 
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);          
        }
        
        void("g_menulogo", 320, CANVAS_HEIGHT-80)
       
        var oSprite = s_oSpriteLibrary.getSprite('but_credits');
        _pStartPosCredits = {x:(oSprite.height/2)+ 10, y:(oSprite.height/2) + 10};
        _oButCredits = new CGfxButton(_pStartPosCredits.x, _pStartPosCredits.y, oSprite, s_oStage);
        _oButCredits.addEventListener(ON_MOUSE_UP, this._onButCreditRelease, this);
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && inIframe() === false){
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x:_pStartPosCredits.x + oSprite.width/2 + 10,y:_pStartPosCredits.y};

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        
        s_oStage.addChild(_oFade);
        
        createjs.Tween.get(_oFade).to({alpha:0}, 1000).call(function(){_oFade.visible = false;}); 
        
        _loginText = new createjs.Text("","bold 20px "+PRIMARY_FONT, "#FFFFFF");
        _loginText.shadow = new createjs.Shadow("#000000", 3, 3, 3);
        _loginText.x =  CANVAS_WIDTH/2;
        _loginText.y =  CANVAS_HEIGHT/2-200;
        _loginText.textBaseline = "alphabetic";
        _loginText.lineWidth = 500;
        _loginText.text = "Chào mừng bạn đến với trò chơi";
        _loginText.textAlign = 'center';
        _textGroup = new createjs.Container();
        _textGroup.alpha = 1;
        _textGroup.visible=true;        
        _textGroup.addChild(_loginText);
        s_oStage.addChild(_textGroup);
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        _oButCredits.setPosition(_pStartPosCredits.x + s_iOffsetX, s_iOffsetY + _pStartPosCredits.y);
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
        
        if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX,_pStartPosFullscreen.y + s_iOffsetY);
        }
    };
    
    this.unload = function(){
        _oButPlay.unload(); 
        _oButPlay = null;
        _oButCredits.unload();
        s_oMain.removeY8Logo()
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.unload();
        }
        
        s_oStage.removeChild(_oBg);
        _oBg = null;
        
        s_oMenu = null;
    };
    
    this.getUserName = function () {
        if(s_isLogin===true){
            _loginText.text = 'Chào mừng '+s_userName;
        }else{
            _loginText.text = "Chào mừng bạn đến với trò chơi";
        }
    };
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onButPlayRelease = function(){
        this.unload();
        
        if (isIOS() && s_oSoundTrack === null) {
            s_oSoundTrack = playSound("soundtrack",1,-1);
        }

        s_oMain.goToModeMenu();
        if(isFirstAdPlayed === false)
        {
            isFirstAdPlayed = true
            try {
            console.log('Showing Ads')
            playAds()
            }
            catch (e) {
                console.log(e + ' Error Showing Ads')
                showMessage()
            }
        }
        $(s_oMain).trigger("start_session");
    };
	
    this._onButCreditRelease = function(){
        new CCreditsPanel();
    };
    
    this._onFullscreenRelease = function(){
        if(s_bFullscreen) { 
            _fCancelFullScreen.call(window.document);
            s_bFullscreen = false;
        }else{
            _fRequestFullScreen.call(window.document.documentElement);
            s_bFullscreen = true;
        }
        
        sizeHandler();
    };
    
    s_oMenu = this;
        
    this._init();
}

var s_oMenu = null; 