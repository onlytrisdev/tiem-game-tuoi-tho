function CEndPanel(oSpriteBg){
    
    var _oBg;
    var _oGroup;
    
    var _oMsgTextBack;
    var _oMsgText;
    var _oScoreTextBack;
    var _oScoreText;
    
    var _pLeaderboardBtn
    var _oLeaderboardBtn1
    var _pLeaderboardBtn
    var _oLeaderboardBtn  
    
    var btnMenu;
    
    this._init = function(oSpriteBg){
        
        _oBg = createBitmap(oSpriteBg);
        
	_oMsgTextBack = new createjs.Text("","60px "+PRIMARY_FONT, "#000");
        _oMsgTextBack.x = CANVAS_WIDTH/2 +1;
        _oMsgTextBack.y = (CANVAS_HEIGHT/2)-160;
        _oMsgTextBack.textAlign = "center";

        _oMsgText = new createjs.Text("","60px "+PRIMARY_FONT, "#ffffff");
        _oMsgText.x = CANVAS_WIDTH/2;
        _oMsgText.y = (CANVAS_HEIGHT/2)-162;
        _oMsgText.textAlign = "center";
        
        _oScoreTextBack = new createjs.Text("","40px "+PRIMARY_FONT, "#000");
        _oScoreTextBack.x = CANVAS_WIDTH/2 +1;
        _oScoreTextBack.y = (CANVAS_HEIGHT/2) - 50
        _oScoreTextBack.textAlign = "center";
        
        _oScoreText = new createjs.Text("","40px "+PRIMARY_FONT, "#ffffff");
        _oScoreText.x = CANVAS_WIDTH/2;
        _oScoreText.y = (CANVAS_HEIGHT/2) - 52;
        _oScoreText.textAlign = "center";

        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        
        _oGroup.addChild(_oBg, _oScoreTextBack,_oScoreText,_oMsgTextBack,_oMsgText);

        s_oStage.addChild(_oGroup);
        
        if(s_isLogin === false)
        {
            this.createSubmitScoreBtn()
        }
        else
        {
            this.createLeaderboardBtn()
        }
        var oSprite = s_oSpriteLibrary.getSprite('Menu_Button');btnMenu
        btnMenu = new CGfxButton(CANVAS_WIDTH / 2 + 100,CANVAS_HEIGHT/2 + 85,oSprite, _oGroup);
       btnMenu.addEventListener(ON_MOUSE_UP, this._onExit, this);
        void("g_menulogo", 140, CANVAS_HEIGHT-160)
    };
    
    this.createSubmitScoreBtn = function()
    {
        var oSprite = s_oSpriteLibrary.getSprite('but_submit_score');
        _pLeaderboardBtn = {x: CANVAS_WIDTH / 2 - 100, y: CANVAS_HEIGHT/2 + 85};            
       _oLeaderboardBtn1 = new CGfxButton(_pLeaderboardBtn.x,_pLeaderboardBtn.y,oSprite, _oGroup);
       _oLeaderboardBtn1.addEventListener(ON_MOUSE_UP, this._showLeaderboard, this);
    }
    this.createLeaderboardBtn = function()
    {
        var oSprite = s_oSpriteLibrary.getSprite('but_leaderboard_End');
        _pLeaderboardBtn = {x: CANVAS_WIDTH / 2 - 100, y: CANVAS_HEIGHT/2 + 85};            
       _oLeaderboardBtn = new CGfxButton(_pLeaderboardBtn.x,_pLeaderboardBtn.y,oSprite, _oGroup);
       _oLeaderboardBtn.addEventListener(ON_MOUSE_UP, this._showLeaderboard, this);
    }
    
    this._showLeaderboard = function()
    {
        console.log('_showLeaderboard ' + leaderboardTable)
        if(s_isLogin === false)
        {
            this._onLoginClicked()
        }
        else
        {
            ID.GameAPI.Leaderboards.list({table:leaderboardTable,highest:false})
        } 
    }
    
    this._onLoginClicked = function () {
            ID.login(this.idCallback);
    };
    
    this.idCallback = function(response){
          if (response) {
          if(response.status === 'ok')
           {
              _oLeaderboardBtn1.unload()
               s_gameOver.createLeaderboardBtn()
              s_oMain.getUserName(response.authResponse.details.nickname, true)
              console.log('idCallback s_iScore ' + s_iScore)
              s_oMain.submitScore(s_iScore)
           }
           else
           {
             ID.login(this.idCallback);
           }
         }
     }
    
    this.unload = function(){
        
       // _oGroup.off("mousedown",this._onExit);
    };
    
    this._initListener = function(){
        //_oGroup.on("mousedown",this._onExit);
    };
    
    this.show = function(iScore){
        playSound("game_over",1,false);
        s_iScore = iScore
        s_oMain.submitScore(s_iScore)
        _oMsgTextBack.text = TEXT_GAMEOVER;
        _oMsgText.text = TEXT_GAMEOVER;
        
        _oScoreTextBack.text = TEXT_SCORE +": "+iScore;
        _oScoreText.text = TEXT_SCORE +": "+iScore;
        
        _oGroup.visible = true;
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {oParent._initListener();});
        
        $(s_oMain).trigger("save_score",[iScore, s_iMode]);        
        $(s_oMain).trigger("end_level",1);
      
        $(s_oMain).trigger("share_event",[iScore]);
        try {
            console.log('Showing Ads')
            showNextAd()
            }
            catch (e) {
                console.log(e + ' Error Showing Ads')
                showMessage()
            }
    };
    
    this._onExit = function(){
        
        $(s_oMain).trigger("show_interlevel_ad");
		$(s_oMain).trigger("end_session",1);
        
        //_oGroup.off("mousedown",this._onExit);
         if(s_isLogin === false)
         {
             _oLeaderboardBtn1.unload()
             _oLeaderboardBtn1 = null
         }
         else
         {
            _oLeaderboardBtn.unload() 
            _oLeaderboardBtn = null
         }
        s_oStage.removeChild(_oGroup);
        
        s_oGame.onExit();
    };
    
   
    
    this._init(oSpriteBg);
    s_gameOver = this;
    return this;
}

var s_gameOver = null;