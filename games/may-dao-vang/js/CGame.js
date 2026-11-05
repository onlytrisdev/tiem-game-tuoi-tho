function CGame(oData){
    var _bUpdate = false;
    var _iState;
    var _oDraggingNugget = null;
    var _iDirHook;
    var _iHookSpeed;
    var _iRopeSpeed;
    var _iSlowDown;
    var _iScore = 0;
    var _iCurLevel = 1;
    var _iCurTargetLevel;
    var _iNuggetToRemove;
    var _iTimeElaps;
    var _aNuggets;
    var _aMalus;
    var _oHook;
    var _oHurt;
    var _oBg;
    var _oHelpPanel;
    var _oButExit;
    var _oButStart;
    var _oEndPanel;
    var _oChangeLevel;
    var _oAudioToggle;
    var _oLevelText;
    var _oTimeText;
    var _oTargetText;
    var _oLevelTextBack;
    var _oTimeTextBack;
    var _oTargetTextBack;
    var _oClockSprite;
    var _oLevelSettings;
    
    this._init = function(){
        this.changeState(STATE_HOOK_ROTATE);
        
        _oLevelSettings = new CLevelSettings();
        
        _oBg = new createjs.Bitmap(s_oSpriteLibrary.getSprite('bg_game'));
         s_oStage.addChild(_oBg);   

        _oLevelTextBack = new createjs.Text(TEXT_LEVEL+" 1","bold 32px Arial", "#000");
        _oLevelTextBack.x = 22;
        _oLevelTextBack.y = CANVAS_HEIGHT - 30;
        _oLevelTextBack.textAlign = "left";
        s_oStage.addChild(_oLevelTextBack);

        _oLevelText = new createjs.Text(TEXT_LEVEL+" 1","bold 32px Arial", "#fff");
        _oLevelText.x = 20;
        _oLevelText.y = CANVAS_HEIGHT - 32;
        _oLevelText.textAlign = "left";
        s_oStage.addChild(_oLevelText);
        
        _oClockSprite = new createjs.Bitmap(s_oSpriteLibrary.getSprite('clock'));
        _oClockSprite.x = 10;
        _oClockSprite.y = 10;
        s_oStage.addChild(_oClockSprite);
        
        _oTimeTextBack = new createjs.Text((LEVEL_TIME/1000),"bold 40px Arial", "#000");
        _oTimeTextBack.x = 92;
        _oTimeTextBack.y = 22;
        _oTimeTextBack.textAlign = "center";
        s_oStage.addChild(_oTimeTextBack);
        
        _oTimeText = new createjs.Text((LEVEL_TIME/1000),"bold 40px Arial", "#fff");
        _oTimeText.x = 90;
        _oTimeText.y = 20;
        _oTimeText.textAlign = "center";
        s_oStage.addChild(_oTimeText);

        _iSlowDown = 0;
        _iRopeSpeed = 0.05;
        _iHookSpeed = HOOK_SPEED;

	_iTimeElaps = LEVEL_TIME;
        _iCurTargetLevel = _oLevelSettings.getLevelTarget(_iCurLevel);
        _iCurTarget = 0;

        _oTargetTextBack = new createjs.Text(_iScore+"$/"+_iCurTargetLevel+"$","bold 40px Arial", "#000");
        _oTargetTextBack.x = 22;
        _oTargetTextBack.y = 82;
        _oTargetTextBack.textAlign = "left";
        s_oStage.addChild(_oTargetTextBack);

        _oTargetText = new createjs.Text(_iScore+"$/"+_iCurTargetLevel+"$","bold 40px Arial", "#fff");
        _oTargetText.x = 20;
        _oTargetText.y = 80;
        _oTargetText.textAlign = "left";
        s_oStage.addChild(_oTargetText);

        var oSpriteHook = s_oSpriteLibrary.getSprite("hook");
        _oHook = new CHook(oSpriteHook);
       
        this._initNuggets();
        
        _oButStart = new createjs.Shape();
        _oButStart.graphics.beginFill("yellow").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oButStart.alpha = 0.01;
        s_oStage.addChild(_oButStart);
        
        var oParent = this;
        _oButStart.on("pressup",function(){oParent._onStartDig()}); 
        
        _oHurt = new createjs.Shape();
        _oHurt.graphics.beginFill("red").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oHurt.alpha = 0.1;
        _oHurt.visible =  false;      
        s_oStage.addChild(_oHurt);
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle = new CToggle(CANVAS_WIDTH - 170,60,s_oSpriteLibrary.getSprite('audio_icon'));
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }
        
         var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _oButExit = new CGfxButton(CANVAS_WIDTH - (oSprite.width/2) - 10,10+ (oSprite.height/2),oSprite,true);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        
        oSprite = s_oSpriteLibrary.getSprite('bg_help');
        _oHelpPanel = new CHelp(oSprite);

        var oSprite = s_oSpriteLibrary.getSprite("msg_box");
        _oChangeLevel = new CChangeLevel(oSprite);
    };
    
    this.unload = function(){
        s_oStage.removeChild(_oBg); 
        s_oStage.removeChild(_oLevelText);
        s_oStage.removeChild(_oTimeText);
        s_oStage.removeChild(_oTargetText);
        s_oStage.removeChild(_oHurt);
	s_oStage.removeChild(_oButStart);
        s_oStage.removeChild(_oClockSprite);
        s_oStage.removeChild(_oLevelTextBack);
        s_oStage.removeChild(_oTimeTextBack);
        s_oStage.removeChild(_oTargetTextBack);
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
	
        _oButExit.unload(); 
        _oButExit = null;
        
		
        for(var j=0;j<_aNuggets.length;j++){
            _aNuggets[j].unload();
        }
		
		for(i=0;i<_aMalus.length;i++){
			_aMalus[i].unload();
		}
    };
    
    this._initNuggets = function(){
        _aNuggets = new Array();
        _aMalus = new Array();
        
        var aPos = _oLevelSettings.getNuggetPosInLevel(_iCurLevel);
        var aInfo = _oLevelSettings.getNuggetInfoInLevel(_iCurLevel);
        for(var k=0;k<aPos.length;k++){
            var oSprite = s_oSpriteLibrary.getSprite('nugget_'+aInfo[k].type);       
            var oNugget = new CNugget(aPos[k].x,aPos[k].y,aInfo[k].scale,oSprite);  
            
            _aNuggets.push(oNugget);
        }

        var oSpriteMalus = s_oSpriteLibrary.getSprite('malus'); 
        var aMalusPos = _oLevelSettings.getMalusPosInLevel(_iCurLevel);
        for(var j=0;j<aMalusPos.length;j++){
            var oMalus = new CMalus(aMalusPos[j].x,aMalusPos[j].y,1,oSpriteMalus);
            _aMalus.push(oMalus);
        }
        
        _iNuggetToRemove = aPos.length;
    };
    
    this.changeLevel = function(){
        for(var i=0;i<_aNuggets.length;i++){
            _aNuggets[i].unload();
        }
        
        for(var t=0;t<_aMalus.length;t++){
            _aMalus[t].unload();
        }
        
        _iSlowDown = 0;
        _iHookSpeed = HOOK_SPEED;
        
        _iRopeSpeed+=0.025;
        _iTimeElaps = LEVEL_TIME;
        
        _aNuggets = new Array();
        var aPos = _oLevelSettings.getNuggetPosInLevel(_iCurLevel);
        var aInfo = _oLevelSettings.getNuggetInfoInLevel(_iCurLevel);
        for(var k=0;k<aPos.length;k++){
            var oSprite = s_oSpriteLibrary.getSprite('nugget_'+aInfo[k].type);       
            var oNugget = new CNugget(aPos[k].x,aPos[k].y,aInfo[k].scale,oSprite);  
            
            _aNuggets.push(oNugget);
        }
        
        _aMalus= new Array();
        var oSpriteMalus = s_oSpriteLibrary.getSprite('malus');
        var aMalusPos = _oLevelSettings.getMalusPosInLevel(_iCurLevel);
        for(var j=0;j<aMalusPos.length;j++){
            var oMalus = new CMalus(aMalusPos[j].x,aMalusPos[j].y,1,oSpriteMalus);
            _aMalus.push(oMalus);
        }
        
        _iNuggetToRemove = aPos.length;
        
	this.changeState(STATE_HOOK_ROTATE);
        _bUpdate = true;
    };
    
    this.changeState = function(iState){
        _iState = iState;
        
        switch(_iState){
            case STATE_HOOK_ROTATE:{
                if(_oDraggingNugget){
                    if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
                        createjs.Sound.play("bonus");
                    }
                    
                    _iScore += _oDraggingNugget.getValue();
                    _oTargetTextBack.text = _iScore + "$/" + _iCurTargetLevel+"$";
                    _oTargetText.text = _iScore + "$/" + _iCurTargetLevel+"$";
                    
                    _oDraggingNugget.hide();
                    _oDraggingNugget = null;
                    
                    _iNuggetToRemove--;

                    if(_iNuggetToRemove === 0){
                        this._endLevel();
                    }
                }else if(_oHook){
                    _oHook.reset();
                }				
                break;
            }
        }
    };
    
    this._checkCollision = function( oHook, oNugget ){
        var vHookPos   = oHook.getPos();
        var vNuggetPos = oNugget.getPos();
        var fNuggetRadius = oNugget.getRadius();
        
        var fDistance =  Math.sqrt( ( (vNuggetPos.x - vHookPos.x)*(vNuggetPos.x - vHookPos.x) ) + 
                                    ( (vNuggetPos.y - vHookPos.y)*(vNuggetPos.y - vHookPos.y) ) );
        
        if ( fDistance < fNuggetRadius ){
            return true;
        }else{
            return false;
        }
    };
    
    this.hookOutOfBounds = function(){
        _iSlowDown = 0;
        this.changeState(STATE_HOOK_MOVE_BACK);
    };
    
    
    this._endLevel = function(){
        _bUpdate = false;
	_iState = -1;
        
        if(_iScore < _iCurTargetLevel){
            this._gameOver();
        }else{
            _iCurLevel++;

            if(_iCurLevel > _oLevelSettings.getNumLevels()){
                this._win();
            }else{
                _iCurTargetLevel = _oLevelSettings.getLevelTarget(_iCurLevel);
                _oLevelText.text = TEXT_LEVEL + " "+_iCurLevel;
                _oLevelTextBack.text = TEXT_LEVEL + " "+_iCurLevel;
                _oTargetText.text = _iScore + "$/"+ _iCurTargetLevel + "$";
                _oTargetTextBack.text = _iScore + "$/" + _iCurTargetLevel+"$";
                
                _oChangeLevel = new CChangeLevel(s_oSpriteLibrary.getSprite("msg_box"));
                _oChangeLevel.show(_iCurLevel,_iCurTargetLevel);
            }
        }
    };
    
    this.showHurt = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            createjs.Sound.play("explosion");
        }
                    
       _oHurt.visible = true;
        var oParent = this;
        
        createjs.Tween.get(_oHurt).to({alpha:0.6 }, 400).call(function() {oParent._resetHurt();});  
    };

    this._resetHurt = function(){
        _oHurt.visible = false;
        _oHurt.alpha = 0.5;
    };
    
    this._gameOver = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            createjs.Sound.play("game_over");
        }
        _oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite('msg_box'));
                                   
        _oEndPanel.show(_iScore,false);
    };
    
    this._win = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            createjs.Sound.play("win");
        }
        _oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite('msg_box'));
        _oEndPanel.show(_iScore,true);
    };
    
    this._onStartDig = function(){
        if(_iState === STATE_HOOK_ROTATE){
            _iDirHook = (_oHook.getRotationDeg()+90)*0.0174532925;

            this.changeState(STATE_HOOK_MOVE);
        }
    };
    
    this.onExitHelp = function(){
        _bUpdate = true;
    };
    
    this._onExit = function(){
        this.unload();
        
        $(s_oMain).trigger("restart");
        s_oMain.gotoMenu();
    };
    
    this._onAudioToggle = function(){
        createjs.Sound.setMute(!s_bAudioActive);
    };
    
    this.update = function(){
        if(_bUpdate === false){
            return;
        }
        
        _iTimeElaps -= s_iTimeElaps;
        var iCurSec = Math.floor(_iTimeElaps/1000);
	_oTimeText.text = ""+ iCurSec;
        _oTimeTextBack.text = ""+ iCurSec;
        
        if(_iTimeElaps < 0){
            _oTimeText.text = "0";
            _oTimeTextBack.text = "0";
            this._endLevel();
        }
        
        switch(_iState){
            case STATE_HOOK_ROTATE:{
                _oHook.updateRotation(_iRopeSpeed);    
                break;
            }
            case STATE_HOOK_MOVE:{
                _oHook.updateMove(); 
               
                for(var i=0;i<_aNuggets.length;i++){
                    if(_aNuggets[i].isActive() && this._checkCollision(_oHook,_aNuggets[i])){ 
                        //console.log("COLLIDE WITH "+_aNuggets[i].getX()+","+_aNuggets[i].getY()+" WIDTH: "+_aNuggets[i].getWidth());
                        
                        _iSlowDown = Math.floor(_aNuggets[i].getRadius()) / 8;
                        _oDraggingNugget = _aNuggets[i];
                        
                        this.changeState(STATE_HOOK_MOVE_BACK);
                        break;
                    }
                }
                
                for(var j=0;j<_aMalus.length;j++){
                    if(this._checkCollision(_oHook,_aMalus[j])){
                        _iSlowDown = 0;
                        this.showHurt();
                        
                        this.changeState(STATE_HOOK_MOVE_BACK);
                        
                        _iScore -= MALUS_SCORE;
                        if(_iScore<0){
                            _iScore = 0;
                        }
                        _oTargetText.text = _iScore + "$/"+ _iCurTargetLevel + "$";
                        _oTargetTextBack.text = _iScore + "$/" + _iCurTargetLevel+"$";
                        
                        _aMalus[j].unload();
                        _aMalus.splice(j,1);
                        break;
                    }
                }
                break;
            }
            case STATE_HOOK_MOVE_BACK:{
                _oHook.updateMoveBack(_iSlowDown);
                if(_oDraggingNugget){
                    _oDraggingNugget.updateMoveBack(_iHookSpeed - _iSlowDown,_iDirHook);
                }
                break;
            }
        }
    };
    
    s_oGame=this;

    MALUS_SCORE = oData.malus_score;
    HOOK_SPEED = oData.hook_speed;
    LEVEL_TIME = oData.level_time;

    this._init();
}

var s_oGame;
