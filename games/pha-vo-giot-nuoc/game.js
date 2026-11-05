var BlobGame = BlobGame || {};

	var levelBlobCount = 20;
	var lastStageBlobs = 7;
	var scaleBlobNum = 0;
	
	var brandingButton;
	var lang;
	var curLangArray;
	
	var orientationLock = 0;
	var orientationLockImg;
	var orientationLockBack;
	
    var playerBet;
    var computerBet;
    var ball;
	
	var delayTapTween;
	var delayTapState=0;
	
	var SndResTween;
	
	var animLayer;
	var nextLevelNull;
	
	var dropCount;
	var dropMove2;
	var spNull2;
	var spNull3;
	var spTweenC;
	
	var dropToPlus;
	var dropToPlus2;
	var dropToFly;
	var dropCapOld;
	
	var achivCount = 21;
	var firstDropLevel = 0;
	var dropsOnLevel = 0;
	
	var c5chain;
	var c15chain;
	var c20chain;
	
	var bWatchTutorial;
	var watchTutorial;

	var anim1;
	var pop0;
	var cellsArray;
	var blobsArray;
	var blobsFrames;
	var popsArray;
	var dropArray;
	
	var timeDelta = 250;
	var moveState;
	var timeNextTween;
	
	var cellH = 79;
	var cellW = 79;
	var cellOffsetX = 70;
	var cellOffsetY = 100;
	var fieldW = 6;
	var fieldH = 6;
	
	var fps_txt;
	var spNull;
	
	var tick = 0;
	var tweenMove;
	
	
	var levelBack;
	var scoreBack;
	var dropsBack;
	var levelText;
	var scoreText;
	var scoreTextAbout;
	var scoreTextHeader;
	var dropsText;
	var dropsIcon;
	
	var frLeft;
	var frRight;
	var frTop;
	var frBottom;
	
	var movesDrops;
	
	
	var mainLogo;
	var bOpt;
	var greyBack;

	var sndOn = 1;
	var musicOn = 1;
	
	var bSnd;
	var bMusic;
	var bMainMenu;
	var bPlay;
	var bRestart;
	var bMore;
	
	var emotionImg;
	
	var gamePaused;
	var pausedMenuOpen;
	
	var dropCap;
	var scores;
	var levelNum;
	var dropCapStart = 10;
	
	var combo = 0;
	var bestCombo = 0;
	
	var comboMultiFrames; 
	var comboSingleFrames; 
	
	var comboSingleEmotion;
	var comboTextHeader;
	var comboTextValue;
	var comboDropsText;
	var comboScoresText;
	var comboDropIcon;
	var comboBack;
	var comboParent;
	
	var comboDropArray;
	
	
	var comboTween;
	var comboMoveTime = 200;
	var comboViewTime = 1000;
	
	
	var achivLevelBack;
	var nextLevelBack;
	var nextLevelParent;
	var nextLevelText;
	var nextLevelDropsText;
	var nextLevelDropIcon;
	
	var nextLevelTween;
	var nextLevelBackTween;
	var nextLevelMoveTime = 200;
	var nextLevelViewTime = 1000;
	
	var ResTween;
	
	var bResMain;
	var bResRestart;
	var bResAchiv;
	var bResMore;
	
	var ResBack;
	var ResTextHeader;
	var ResTextN1;
	var ResTextN2;
	var ResTextN3;
	var ResStar1;
	var ResStar2;
	var ResStar3;
	var ResStar1B;
	var ResStar2B;
	var ResStar3B;
	
	var bMainPlay;
	var bMainOpt;
	var bMainSnd;
	var bMainMusic;
	var bMainAchiv;
	var bMainMore;
	var MainEmotion;
	var MainAchivText;
	var MainHeader;
	
	var bAchivMain;
	var bAchivLeft;
	var bAchivRight;
	var AchivHeader;
	var AchivTween;
		
	var achivIconsArray;
	var achivStateArray;
	var achivLimitArray;
	
	var achivAllCount;
	var achivCurrentCount;
	var achivAllPageCount;
	var achivCurrentPageCount;
	var achivParent;
	var achivPageMove;
	var achivHeaderText;
	var achivAboutText;
	
	var wndAchivParent;
	var wndAchivTween;
	var wndAchivBackTween;
	var wndAchivBack;
	var wndAchivText;
	var wndAchivTitle;
	var wndAchivIcon;
	var wndAchivEmotion;
	
	var sndClick;
	var sndPop;
	var sndCombo;
	var sndResult;
	var sndDropOut;
	var sndAchiv;
	var sndDropMove;
	var sndCombo1;
	var sndCombo2;
	var sndCombo3;
	var sndBegin;
	var sndStar;
	
	var music1;
	
	var mainMenuBack;
	
	var isTutorial = 0;
	var comboTutorial = 0;
	var isAchiv1 = 0;
	var isAchiv2 = 0;
	var isAchiv3 = 0;
	var tutorialTarget;	
	var tutorialStepData;
	var tutorialCells;
	var levelCells;

	
	var tutorialSkip;
	var tutorialPad;
	var tutorialText;
	var tutorialTextsArray;
	var tutorialMascot;
	var tutorialSay;
	var tutorialArrow;
	var tutorialArrow1;
	var tutorialArrow2;
	var tutorialArrow3;
	var tutorialArrow4;
	var tutorialTapText;
	var tutorialWelcomeText;
	
	var tutorialOk;
	var tutorialTween;
	var tutorialTweenStart;
	var tutorialTweenStartFinished;
	var tutorialTweenEnd;
	var tutorialTweenArrowStart;
	var tutorialTweenArrowEnd;
	var tutorialTweenArrowLoop;
	var tutorialHeader;
	
	var wndArray;
	var wndCurrent;
	
	var keySkip;
	var keyReset;
	var game;

	var loadLayer;
	var mainLayer;
	var backLayer;
	var cellLayer;
	var blobLayer;
	var popsLayer;
	var grayLayer;
	var wndLayer;
	var flyLayer;	
	
	
	var w2 = 480;
	var h2 = 320;
	
BlobGame.game = new Phaser.Game(960,640, Phaser.AUTO, '');

	
BlobGame.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
BlobGame.Boot.prototype = {
  preload: function() {
	
  	
	 this.load.image('mmbackground', 'assets/mmback.png');
     this.load.image('preloadelement', 'assets/preloader1.png');
     this.load.image('preloadbar', 'assets/preloader.png');
	 this.load.image('logo', 'assets/logo-game.png');
	 this.load.image('mainlogo', 'assets/softgames/SF_logo_small.png');
	 
  },
  create: function() {
  	//loading screen will have a white background
   BlobGame.game.stage.backgroundColor = '#ffffff';
	//setScale();	 
	//alert(BlobGame.game.device.desktop);
	
	var uuu = window.location.hostname;
	
	if (uuu.indexOf("rubilon.com")>-1)
	{
		BlobGame.game.state.start('Preload');	  
	}
	else
	{
		BlobGame.game.state.start('Preload');	
		//alert("This site doesn't own license for this game. Please contact gamebalance@gmail.com or wins.dynpic@gmail.com for details");
	}
    
  }
};


function hideAddressBar(){
  
  setTimeout(window.scrollTo(0,1),0);
}

function resizeGame()
{

	hideAddressBar();
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	if (mainMenuBack != null) 
	{
			
	
		var sx =1;
		var sy=1;
		

	
	if (w/w2>h/h2)
	{
		sx = h/((h2/w2)*w);
	
	}
	else
	{
		sy = (h2/w2)*w/h;
	}
	
		//mainMenuBack.x = w2;
			//	mainMenuBack.y =h2;
				//mainMenuBack.anchor.setTo(0.5,0.5);
		var r = sx/sy;

		if (r>1) r =1/r;
				
	console.log(sx+" "+sy);
	mainMenuBack.scale.setTo(sx/r,sy/r);
	
	if (wndLayer != null)
	{
		ScaleLayer(sx,sy);
	}
	
	if (loadLayer != null)
	{
			
		loadLayer.x = 80*sx+w2*(1-sx);
		loadLayer.y = h2*(1-sy);
		loadLayer.scale.setTo(sx,sy);
	
	}
	
		if (loadLayer == null)
		if (window.innerWidth<window.innerHeight && BlobGame.game.device.desktop == false)
		{
			if (orientationLock == 0)
			{
				orientationLock = 1;
			
				 orientationLockBack = game.add.graphics(0, 0);
				orientationLockBack.beginFill(0x000000, 0.9);
				orientationLockBack.drawRect(0, 0, w2*2, h2*2);
				orientationLockBack.endFill();
				orientationLockBack.inputEnabled = true;
				
				orientationLockImg = game.add.sprite(w2,h2,'orient');
				orientationLockImg.anchor.setTo(0.5,0.5);
				orientationLockImg.scale.setTo(1.5*sx,1.5*sy);
			
			}
			else
			{
				orientationLockImg.x = w2;
				orientationLockImg.y = h2;
				orientationLockImg.scale.setTo(1.5*sx,1.5*sy);
			}
		}
		else
		{
			if (orientationLock == 1)
			{
				orientationLock = 0;
				orientationLockBack.destroy();
				orientationLockImg.kill();
			}
		}
	
	}
		
	
}

BlobGame.Preload = function(){};

BlobGame.Preload.prototype = {
  preload: function() {
  	//show loading screen
	
	window.addEventListener('resize', resizeGame, false); 
  
	mainMenuBack =  BlobGame.game.add.sprite(0, 0,'mmbackground');
	loadLayer = BlobGame.game.add.sprite(0,0,null);
	  this.logo = BlobGame.game.add.sprite(400,220, 'logo');
	  
	  this.logo.anchor.setTo(0.5,0.5);
    this.preloadFrame = BlobGame.game.add.sprite(220,300, 'preloadbar');
	this.preloadBar = BlobGame.game.add.sprite(233,313, 'preloadelement');
	this.more = BlobGame.game.add.button(400, 450, 'mainlogo', ClickLoadMore, this);
		this.more.anchor.setTo(0.5, 0.5);	
	loadLayer.addChild(this.logo);
	loadLayer.addChild(this.preloadFrame);
	loadLayer.addChild(this.preloadBar);
	loadLayer.addChild(this.more);
  	//load game assets
     setScale();
	 
		 this.load.image('side1', 'assets/side-drop1.png');
		 this.load.image('side2', 'assets/side-drop2.png');
		 this.load.image('pointer', 'assets/pointer.png');
		 this.load.image('orient', 'assets/turn-device-icon.png');
		  
		this.load.atlasJSONHash('blob', 'assets/blobs.png', 'assets/blobs.json'); 
		this.load.atlasJSONHash('drops', 'assets/drops.png', 'assets/drops.json'); 
		this.load.atlasJSONHash('pops', 'assets/droppop.png', 'assets/droppop.json'); 
		this.load.atlasJSONHash('bAchiv', 'assets/bAchiv.png', 'assets/bAchiv.json'); 

		this.load.bitmapFont('janda', 'assets/janda.png', 'assets/janda.xml');
		this.load.bitmapFont('russian', 'assets/russian.png', 'assets/russian.xml');
				
		 this.load.audio('sndClick', ['assets/sound/click_button.mp3', 'assets/sound/click_button.ogg']);
		 this.load.audio('sndPop', ['assets/sound/pop1.mp3', 'assets/sound/pop1.ogg']);
		  this.load.audio('sndStar', ['assets/sound/star.mp3', 'assets/sound/star.ogg']);
		 this.load.audio('sndBegin', ['assets/sound/begin.mp3', 'assets/sound/begin.ogg']);
		 this.load.audio('sndDropOut', ['assets/sound/dropout.mp3', 'assets/sound/dropout.ogg']);
		 this.load.audio('sndDropMove', ['assets/sound/dropmove.mp3', 'assets/sound/dropmove.ogg']);
		 this.load.audio('sndAchiv', ['assets/sound/ach.mp3', 'assets/sound/ach.ogg']);
		 this.load.audio('sndCombo1', ['assets/sound/combo1.mp3', 'assets/sound/combo1.ogg']);
		 this.load.audio('sndCombo1b', ['assets/sound/combo1b.mp3', 'assets/sound/combo1b.ogg']);
		 this.load.audio('sndCombo1c', ['assets/sound/combo1c.mp3', 'assets/sound/combo1c.ogg']);
		 this.load.audio('sndCombo2', ['assets/sound/combo2.mp3', 'assets/sound/combo2.ogg']);
		 this.load.audio('sndCombo2b', ['assets/sound/combo2b.mp3', 'assets/sound/combo2b.ogg']);
		 this.load.audio('sndCombo2c', ['assets/sound/combo2c.mp3', 'assets/sound/combo2c.ogg']);
		 this.load.audio('sndCombo3', ['assets/sound/combo3.mp3', 'assets/sound/combo3.ogg']);
		this.load.audio('sndCombo3b', ['assets/sound/combo3b.mp3', 'assets/sound/combo3b.ogg']);
		this.load.audio('sndCombo3c', ['assets/sound/combo3c.mp3', 'assets/sound/combo3c.ogg']);
		this.load.audio('sndResult', ['assets/sound/results.mp3', 'assets/sound/results.ogg']);
		this.load.audio('track1', ['assets/sound/track1.mp3', 'assets/sound/track1.ogg']);
		 
  },
  create: function() {
  		
	 this.preloadFrame.kill();
	this.preloadBar.kill();	 
	loadLayer.kill();
	loadLayer = null;
	
		createGame();	  
	
  },
  
  update: function()
  {
	update();
  },
  	
 loadUpdate: function() {
  
  this.preloadBar.scale.x = this.load.progress*3.46;
  
}
 
}; 

   

BlobGame.game.state.add('Boot', BlobGame.Boot);
BlobGame.game.state.add('Preload', BlobGame.Preload);

BlobGame.game.state.start('Boot');


function SetBitmapText(x,y,text,size)
	{
		var fnt0 = "janda";
		var koef = 1;
		if (lang == "ru") { fnt0 = "russian"; koef = 0.75;};
		//if (lang == "th") { fnt0 = "thai"; koef = 0.9;}
		var tmp = game.add.bitmapText(x, y,fnt0,text,size*koef);
			tmp.align = "center";
		return tmp;
	}

	function CreateEffects()
	{
			comboBack = game.add.sprite(400,300,'blob');
		comboBack.frameName = "flash-combo.png";
		comboBack.anchor.setTo(0.5,0.5);
		comboBack.scale.setTo(1.5,1.5);
		comboBack.visible = false;
		
		comboSingleEmotion = game.add.sprite(299,286,'blob');
		comboSingleEmotion.visible = false;
			comboSingleEmotion.anchor.setTo(0.5,0.5);
			
				comboDropIcon = game.add.sprite(465,360,'blob');
			comboDropIcon.frameName = "drop.png";
			comboDropIcon.anchor.setTo(0.5,0.5);
			comboDropIcon.visible = false;
			
					
		comboDropsText =SetBitmapText(380, 320,"+", 57);
		comboDropsText.align = "right";
		comboDropsText.visible = false;
		
		comboScoresText = SetBitmapText(450, 265, "", 57);
		comboScoresText.align = "left";
		comboScoresText.visible = false;
		
		
		
			nextLevelBack = game.add.sprite(-400,300,'blob');
		nextLevelBack.frameName = "flash-achievement.png";
		nextLevelBack.anchor.setTo(0.5,0.5);
		nextLevelBack.scale.setTo(0.6,1.3);
		nextLevelBack.rotation = 3.1415/2;
		nextLevelBack.visible = false;
		
			achivLevelBack = game.add.sprite(-400,300,'blob');
		achivLevelBack.frameName = "flash-achievement.png";
		achivLevelBack.anchor.setTo(0.5,0.5);
		achivLevelBack.visible = false;
		
		nextLevelParent =  game.add.sprite(800,0,null);
		
		nextLevelText = SetBitmapText(320,250,curLangArray[1]+" ", 78);
		nextLevelText.visible = false;
			
		nextLevelDropIcon = game.add.sprite(460,360,'blob');
			nextLevelDropIcon.frameName = "drop.png";
			nextLevelDropIcon.anchor.setTo(0.5,0.5);
			nextLevelDropIcon.visible = false;
			
		
			nextLevelDropsText = SetBitmapText(370,315, "+",  78);
			nextLevelDropsText.align ="right";
			nextLevelDropsText.visible = false;
			
			
				
		
		wndAchivText = SetBitmapText(400, 150, "", 78);
		wndAchivText.visible = false;
		
		wndAchivTitle = SetBitmapText(400, 105, curLangArray[2], 39);
		wndAchivTitle.x -= wndAchivTitle.width/2;
		
		wndAchivTitle.visible = false;
		
		wndAchivIcon = game.add.sprite(400,320,'bAchiv');
		wndAchivIcon.frameName = "a0.png";
		wndAchivIcon.anchor.setTo(0.5,0.5);
		
		wndAchivIcon.visible = false;
		
		wndAchivEmotion = game.add.sprite(400,460,'blob');
		wndAchivEmotion.frameName = "blob-achievement.png";
		wndAchivEmotion.anchor.setTo(0.5,0.5);
		wndAchivEmotion.visible = false;
		
		comboDropArray = [];
		
		for (var i=0;i<13;i++)
		{
			comboDropArray[i] = game.add.sprite(0,0,'blob');
			
			comboDropArray[i].visible = false;
			comboDropArray[i].frameName = "drop.png";
			comboDropArray[i].anchor.setTo(0.5,0.5);
			comboDropArray[i].spNull = game.add.sprite(0,0,null);
			comboDropArray[i].spNull.i = i;
			flyLayer.addChild(comboDropArray[i]);
			
		}
		
		
		
	}
	
	function CreateField()
	{
			for (var k=0; k<fieldH*fieldW; k++)
		 {
			 i = ~~(k / fieldW);
			 j = k % fieldW;
			  cellsArray[k] = game.add.sprite(cellOffsetX+i*cellW, cellOffsetY+j*cellH, 'blob');
			  cellsArray[k].frameName = "cell.png";
			  cellsArray[k].anchor.setTo(0.5, 0.5);
			  cellsArray[k].visible = false;
			cellLayer.addChild(cellsArray[k]);
			
		}		
		
		levelBack = game.add.sprite(716,74,'blob');
		levelBack.frameName = "pad-level-number.png";
		levelBack.anchor.setTo(0.5,0.5);
		
			dropsBack = game.add.sprite(716,236,'blob');
			dropsBack.frameName = "pad-scores-drops.png";
			dropsBack.anchor.setTo(0.5,0.5);
			
			scoreBack = game.add.sprite(716,149,'blob');
			scoreBack.frameName = "pad-scores-drops.png";
			scoreBack.anchor.setTo(0.5,0.5);
			
			dropIcon = game.add.sprite(650,236,'blob');
			dropIcon.frameName = "drop.png";
			dropIcon.anchor.setTo(0.5,0.5);
			
			var size = 50;
			if (lang == "tr" || lang == "pt") size = 40;
			
			levelText = SetBitmapText(690,49,curLangArray[1]+" 1",size);
			levelText.x-=levelText.width/2;
			if ( lang == "pt") levelText.y+=6;
			
			scoreText = SetBitmapText(690,133,"0",50);
			scoreText.x =690 - scoreText.width/2;
			var size =30;
			if (lang == "pt") size = 25;
			scoreTextAbout = SetBitmapText(690,113,curLangArray[3],size);
			if (lang == "pt") scoreTextAbout.y+=4;
			scoreTextAbout.x -= scoreTextAbout.width/2;
			dropsText = SetBitmapText(685,210,"x1",50);
			dropsText.align = "left";
			emotionImg = game.add.sprite(666,386,'blob');
			emotionImg.frameName = comboMultiFrames[0];
			emotionImg.anchor.setTo(0.5,0.5);
			
			cellLayer.addChild(levelBack);
			cellLayer.addChild(dropsBack);
			cellLayer.addChild(scoreBack);
			cellLayer.addChild(dropIcon);
			cellLayer.addChild(levelText);
			cellLayer.addChild(scoreText);
			cellLayer.addChild(scoreTextAbout);
			cellLayer.addChild(dropsText);
			cellLayer.addChild(emotionImg);
			
			levelBack.visible = false;
			dropsBack.visible = false;
			scoreBack.visible = false;
			levelText.visible = false;
			scoreText.visible = false;
			scoreTextAbout.visible =  false;
			dropsText.visible = false;
			emotionImg.visible = false;
			dropIcon.visible = false;
			
	

	
	AddOptionsButton();
		bOpt.visible = false;
		
		frTop = game.add.sprite(267,54,'blob');
		frTop.frameName = "frame-top.png";
		frTop.anchor.setTo(0.5,0.5);
		frTop.rotation = 0*3.1415/2;
		
		cellLayer.addChild(frTop);
		frTop.visible = false;
			
		frBottom = game.add.sprite(267,551,'blob');
		frBottom.frameName = "frame-bottom.png";
		frBottom.anchor.setTo(0.5,0.5);
		frBottom.rotation = 0*3.1415/2;
		
		cellLayer.addChild(frBottom);
		frBottom.visible = false;
		
			frLeft = game.add.sprite(21.5,298,'blob');
		frLeft.frameName = "frame-left.png";
		frLeft.anchor.setTo(0.5,0.5);
		frLeft.rotation = 0*3.1415/2;
		
		cellLayer.addChild(frLeft);
		frLeft.visible = false;
		
		frRight = game.add.sprite(512.5,298,'blob');
		frRight.frameName = "frame-right.png";
		frRight.anchor.setTo(0.5,0.5);
		frRight.rotation = 0*3.1415/2;
		
		cellLayer.addChild(frRight);
		frRight.visible = false;
		
	
		
	moveState = 0;
	
	
	popsArray = [];
		
		for (var k=0; k<fieldH*fieldW; k++)
		{
		 i = ~~(k / fieldW);
		 j = k % fieldW;
		 
		 popsArray[k] = game.add.sprite(cellOffsetX+i*cellW, cellOffsetY+j*cellH, 'pops');
		popsArray[k].anchor.setTo(0.5, 0.5);
			popsArray[k].anim1 = popsArray[k].animations.add('pops'); 
			popsArray[k].anim1.onComplete.add(EndPop,this);
			popsLayer.addChild(popsArray[k]);
			popsArray[k].visible = false;
		}
		
	dropArray = [];

		for (var k=0; k<20; k++)
		{
		 
		 dropArray[k] = game.add.sprite(0, 0, 'side1');
		dropArray[k].anchor.setTo(0.5, 0.5);
			//popsLayer.addChild(dropArray[k]);
			dropArray[k].visible = false;
		}

		
		
	
	}
	
	function AddToDropArray()
	{
		var tmp ={};
		dropArray.push(tmp);
		var k = dropArray.length-1;
		dropArray[k] = game.add.sprite(0, 0, 'side1');
		dropArray[k].anchor.setTo(0.5, 0.5);
		//popsLayer.addChild(dropArray[k]);
		dropArray[k].visible = false;
		
		return dropArray[k];
	}

    function createGame() {

	
		SG_Hooks.setOrientationHandler(resizeGame); 

	SG_Hooks.setResizeHandler(resizeGame);

	lang = SG.lang; //SG_Hooks.getLanguage(['en','es','de','fr','it','pt','tr','ru']); 

		
		if (lang == "en")
		curLangArray = enLang;
		
		if (lang == "de")
		curLangArray = deLang;
		
		if (lang == "fr")
		curLangArray = frLang;
		
		if (lang == "es")
		curLangArray = esLang;
		
		if (lang == "it")
		curLangArray = itLang;
		
		if (lang == "pt")
		curLangArray = ptLang;
		
			if (lang == "tr")
		curLangArray = trLang;

		
			if (lang == "ru")
		curLangArray = ruLang;
		
			
		
		//lang = "de";
			
		//uncaught exception: Softgames - getLanguage: Do not call getLanguage before document is fully loaded. use window.onload to start your game
		
		
		game = BlobGame.game;
	
		//keySkip = game.input.keyboard.addKey(Phaser.Keyboard.S);
		  //keySkip.onDown.add(kSkip, this); 
		  
		  //var keyOut = game.input.keyboard.addKey(Phaser.Keyboard.E);
		  //keyOut.onDown.add(SetDropsOne, this); 
	
		//keyReset = game.input.keyboard.addKey(Phaser.Keyboard.R);
		  //keyReset.onDown.add(kReset, this); 
	
	achivStateArray = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
	achivLimitArray = [20,1000,3000,100000,250000,500000,11,21,31,10,25,30,15,25,35,1,4,8,3,3,3];
	
	isTutorial = 1;
	comboTutorial = 0;
	watchTutorial = 0;
	isAchiv1 = 0;
	isAchiv2 = 0;
	isAchiv3 = 0;

	LoadData();
	
	var s=""; 
	for (var i=0;i<achivCount;i++) { if (i % 3==0 && i>0) s=s+" "; s=s+","+achivStateArray[i]; }
	
	movesDrops = [];
	cellsArray = [];
	tutorialCells = [];
	blobsArray = [];
	levelCells = [];
	
	wndArray = [];
	
	tutorialTextsArray = [curLangArray[13],curLangArray[14],curLangArray[15],curLangArray[16],"5",curLangArray[17],curLangArray[18]];

		//alert(curLangArray[64]);
	
	blobsFrames = ["drop-animation0001.png","drop-animation0007.png","drop-animation0013.png","drop-animation0019.png"];
	comboMultiFrames = [ "blobs-emotions0001.png", "blobs-emotions0002.png", "blobs-emotions0003.png", "blobs-emotions0004.png"];
	comboSingleFrames = ["blob-combo1.png","blob-combo2.png","blob-combo3.png" ];
	
	achivHeaderText = [curLangArray[19],curLangArray[20],curLangArray[21],curLangArray[22],curLangArray[23],curLangArray[24],curLangArray[25],curLangArray[26],curLangArray[27],curLangArray[28],curLangArray[29],curLangArray[30],curLangArray[31],curLangArray[32],curLangArray[33],curLangArray[34],curLangArray[35],curLangArray[36],curLangArray[37],curLangArray[38],curLangArray[39]];
	achivAboutText = [curLangArray[40],curLangArray[41],curLangArray[42],curLangArray[43],curLangArray[44],curLangArray[45],curLangArray[46],curLangArray[47],curLangArray[48],curLangArray[49],curLangArray[50],curLangArray[51],curLangArray[52],curLangArray[53],curLangArray[54],curLangArray[55],curLangArray[56],curLangArray[57],curLangArray[58],curLangArray[59],curLangArray[60]];
	
	
	backLayer = game.add.sprite(0,0,null);
		mainLayer =game.add.sprite(0,0,null);
		
		
		cellLayer = game.add.sprite(0,0,null);
		blobLayer =game.add.sprite(0,0,null);
		popsLayer =game.add.sprite(0,0,null);
		
			grayLayer = game.add.sprite(0,0,null);
		wndLayer = game.add.sprite(0,0,null);
		flyLayer = game.add.sprite(0,0,null);

		mainLayer.anchor.setTo(0.5,0.5);
		//mainLayer.x=400;
		//mainLayer.y=300;
		
		cellLayer.anchor.setTo(0.5,0.5);
		//cellLayer.x=400;
		//cellLayer.y=300;
				
		
		//mainLayer.scale.setTo(0.5,0.5);
		//cellLayer.scale.setTo(0.5,0.5);
		//blobLayer.scale.setTo(0.5,0.5);
		//popsLayer.scale.setTo(0.5,0.5);
		//wndLayer.scale.setTo(0.5,0.5);
		//flyLayer.scale.setTo(0.5,0.5);
	
	CreateField();
	CreateEffects();
	LoadSnd();
	NewMainMenu();
		
    //fps_txt = game.add.text(game.world.centerX-300, 0, "", { font: "32px Arial", fill: "#ff0044", align: "center" });
	BlobGame.game.time.advancedTiming = true;
		setScale();
		//game.stage.scale.refresh();
		
		
		
		
    }

	function ScaleLayer(sx,sy)
	{
		
		//console.log("s "+sx+" "+sy+" - "+window.innerWidth+" "+window.innerHeight);
		
		
		mainLayer.x = 80*sx+w2*(1-sx);
		mainLayer.y = h2*(1-sy);
		
		
			mainLayer.scale.setTo(sx,sy);
		
		
		cellLayer.scale.setTo(sx,sy);
		blobLayer.scale.setTo(sx,sy);
		popsLayer.scale.setTo(sx,sy);
		wndLayer.scale.setTo(sx,sy);
		flyLayer.scale.setTo(sx,sy);
		
		cellLayer.x = blobLayer.x = popsLayer.x = wndLayer.x = flyLayer.x = mainLayer.x;
		cellLayer.y = blobLayer.y = popsLayer.y = wndLayer.y = flyLayer.y = mainLayer.y;
		
	}	
	
	function AddTapEvent()
	{
		
		game.input.onDown.add(TapOnScreen, this);
	
	}
	
	function DelTapEvent()
	{
			
		game.input.onDown.remove(TapOnScreen, this);
	
	}
	
	function StopFlyDrops()
	{
		for (var i=0;i<comboDropArray.length;i++)
		{
			if (comboDropArray[i].visible == true)
			{
			//flyLayer.removeChild(comboDropArray[i]);
			comboDropArray[i].visible = false;
			}
			
			if (comboDropArray[i].tween != null)
			comboDropArray[i].tween.stop();
			
			if (comboDropArray[i].tween2 != null)
			comboDropArray[i].tween2.stop();
			
		}
	
	}
	
	function TapOnScreen(e)
	{
		
		if (wndCurrent !=null && delayTapState == 0)
			{
	
				if (wndCurrent.num == -2)
				{
					delayTapState = 1;

					if (dropToPlus>0)	
					for (var ii=0;ii<dropToPlus;ii++)	
					{
						dropCap ++;
					}
							
					SetDropCount(dropCap);
					dropToPlus = 0;
					StopFlyDrops();
					
					ComboMoveEnd();
					
					if (spTweenC != null)
					{
						spTweenC.stop();
					  spTweenC._manager.remove(spTweenC); spTweenC = null;  
					}
					
					if (spNull2 != null)
					{
						if (spNull2.tween != null) { spNull2.tween._manager.remove(spNull2.tween); spNull2.tween = null; } 
						spNull2.kill();
						spNull2 = null;
					}
					
					
				
					
						spNull2 = game.add.sprite(0,0,null);
					
					delayTapTween = game.add.tween(spNull2).to({x:0,y:0}, 100, Phaser.Easing.Linear.None);
					delayTapTween.onComplete.add(OnDelayOk,this);
					delayTapTween.start();
				
					PauseGame();
					
				}
				else
				if (wndCurrent.num == -1)
				{
					delayTapState = 1;
				
					
					if (spNull2 != null)
					{
						if (spNull2.tween != null) { spNull2.tween._manager.remove(spNull2.tween); spNull2.tween = null; } 
					
						if (spNull2.comboTween2 != null) { spNull2.comboTween2.stop(); spNull2.comboTween2._manager.remove(spNull2.comboTween2); spNull2.comboTween2 = null; } 
						spNull2.kill();
						spNull2 = null;
					}
					
					if (dropToPlus2>0)
					{
						dropCap ++;
					}
						
									
					SetDropCount(dropCap);
					dropToPlus2 = 0;
					StopFlyDrops();
					NextLevelMoveEnd(nextLevelNull);
					
					
						spNull3 = game.add.sprite(0,0,null);
					delayTapTween = game.add.tween(spNull3).to({x:0,y:0}, 50, Phaser.Easing.Linear.None);
					delayTapTween.onComplete.add(OnDelayOk,this);
					delayTapTween.start();
					PauseGame();
				
				}
			}
			
		
		
	}
	
	function OnDelayOk()
	{
		
		if (delayTapTween!=null)
		{
			delayTapTween.stop();
			delayTapTween._manager.remove(delayTapTween);
			delayTapTween = null;
		}
		
		spNull3 = null;
		ResumeGame();
		delayTapState = 0;
		moveState == 0;
		NextWnd();
		
	}
	
	function kSkip()
	{
	
		if (comboTutorial == 0)
			{
				combo = 0;
				KillOldGame();
				levelNum++;
				AddWnd(-1,AddNextLevelWindow);
						
			}
	}
	
	function kReset()
	{
		ClearData();
	}
	
	
	function FirstRun()
	{
		NewTutorialCells();
		NewGame();
			
		tutorialSkip = game.add.button(677, 500, 'bAchiv', OnTutorialSkip, this,"button-skip-tutorial.png","button-skip-tutorial.png","button-skip-tutorial.png");
		tutorialSkip.anchor.setTo(0.5, 0.5);	
		tutorialSkip.size = 40;
		if (lang == "de") tutorialSkip.size=25;	
		if (lang == "ru") tutorialSkip.size=30;	
		if (lang == "pt") tutorialSkip.size=35;	
		tutorialSkip.text = SetBitmapText(0,0,curLangArray[65],tutorialSkip.size);
		tutorialSkip.text.x=-tutorialSkip.text.width/2;
		tutorialSkip.text.y=-tutorialSkip.text.height/2;
		tutorialSkip.addChild(tutorialSkip.text);
		wndLayer.addChild(tutorialSkip);	
		emotionImg.visible = false;
	
		StartTutorialStep();	
		
	}
	
	function AddWnd(num,func)
	{
	
		var tmp = {};
		
		tmp.OnStart = func;
		tmp.num = num;
		
		wndArray.push(tmp);
		wndCurrent = wndArray[0];
			
		if (wndArray.length == 1)
		{
			StartWnd();
		}
		
			
	}
	
	function StartWnd()
	{
	
		if (wndArray.length>0)
			{
				wndCurrent = wndArray[0];
			
					if (wndCurrent.num>=-1)
					{
						wndCurrent.OnStart(wndCurrent.num);
					}
						else
					{
						wndCurrent.OnStart();
					}
				
			}
			else
			{
				wndCurrent = null;
				//greyBack.visible = false;
			}
		
	}
	
	function NextWnd()
	{
		if (wndArray.length>0)
			{
				wndArray[0] = null;
				wndArray.splice(0,1);
				
			}
			
		wndCurrent = null;
		StartWnd();
	}
	
	
	function ShowField()
	{
		
		levelBack.visible = true;
		dropsBack.visible = true;
		scoreBack.visible = true;
		levelText.visible = true;
		scoreText.visible = true;
		scoreTextAbout.visible =  true;
		dropsText.visible = true;
		emotionImg.visible = true;
		emotionImg.frameName = comboMultiFrames[0];
		dropIcon.visible = true;
			
		for (var k=0; k<fieldH*fieldW; k++)
		{
		  cellsArray[k].visible = true;
		}
			
		frTop.visible = true;
		frBottom.visible = true;
		frLeft.visible = true;
		frRight.visible = true;
		bOpt.visible = true;
			
		scores = 0;
		dropCap = dropCapStart;	
	  SetDropCount(dropCap);
	  SetScores();
			
	}
	
	function NewGame()
	{
			
		delayTapState = 0;
		gamePaused = 0;
		pausedMenuOpen = 0;
		levelNum = 1;
		firstDropLevel = 0;
		c5chain = 0;
		c15chain = 0;
		c20chain = 0;
		
		
		SG_Hooks.start(); 
		
		if (musicOn==1) PlayMusic();
		
		var i;
		var j;
		var sp;
		
		ShowField();	
	
		if (isTutorial == 0)
		{
			
			AddWnd(-1,AddNextLevelWindow);
		}
		else
		{
			NewField();
		}
		
		
	}
	
	
	function NewTutorialCells()
	{
	
	var val;
	for (var k=0; k<fieldH*fieldW; k++)
		 {
			 i = ~~(k / fieldW);
			 j = k % fieldW;
			 
			val = -1;
			
			if (k==3 || k==12 || k==17 || k==18 || k==23  || k==33)
			{
			val = 2;
			}
			
			if (k == 14)
			{
			 val =1;
			}
			
			if (k == 2 || k == 21 ||  k==12 || k==17 || k==32)
			{
			 val = 3;
			}
			
			tutorialCells[k] = val; 
		}
		
		
	}
	
	
	function LoadSnd()
	{
		sndClick =   game.add.audio('sndClick');
		sndAchiv = game.add.audio('sndAchiv');
		sndPop = game.add.audio('sndPop');
		sndResult = game.add.audio('sndResult');
		sndCombo1 = game.add.audio('sndCombo1');
		sndCombo2 = game.add.audio('sndCombo2');
		sndCombo3 = game.add.audio('sndCombo3');
		sndCombo1b = game.add.audio('sndCombo1b');
		sndCombo2b = game.add.audio('sndCombo2b');
		sndCombo3b = game.add.audio('sndCombo3b');
		sndCombo1c = game.add.audio('sndCombo1c');
		sndCombo2c = game.add.audio('sndCombo2c');
		sndCombo3c = game.add.audio('sndCombo3c');;
		
		
		sndStar = game.add.audio('sndStar');
		sndBegin = game.add.audio('sndBegin');
		sndDropMove = game.add.audio('sndDropMove');
		sndDropOut = game.add.audio('sndDropOut');
		music1 = game.add.audio('track1');
		
	}
	
	function PlayMusic()
	{
			if (music1 != null) { music1.play('',0,1,true); }
	}
	
	function StopMusic()
	{
		if (music1 != null) music1.stop();
	
	}
	
	function SndClick()
	{
		if (sndOn == 1)
		{
			sndClick.play(); 
		}
	}
	function SndStar()
	{
		if (sndOn == 1)
		{
			sndStar.play(); 
		}
	}
	
	function SndPop()
	{
		if (sndOn == 1)
		{
			sndPop.play(); 
		}
	}
	
	function SndCombo1()
	{
		if (sndOn == 1)
		{
		var r = GetSndRnd();

		if (r==0)
		sndCombo1.play(); 
		if (r==1)
		sndCombo1b.play(); 
		if (r==2)
		sndCombo1c.play(); 
		}
	}
	
	function SndCombo2()
	{
		if (sndOn == 1)
		{
		var r = GetSndRnd();
		
		
		if (r==0)
		sndCombo2.play(); 
		if (r==1)
		sndCombo2b.play(); 
		if (r==2)
		sndCombo2c.play(); 
		}
	}
	
	function SndCombo3()
	{
		if (sndOn == 1)
		{
		var r = GetSndRnd();
		
		if (r==0)
		sndCombo3.play(); 
		if (r==1)
		sndCombo3b.play(); 
		if (r==2)
		sndCombo3c.play(); 
		}
	}
	
	function SndDropMove()
	{
		if (sndOn == 1) sndDropMove.play(); 
	}
	
		function SndDropOut()
	{
		if (sndOn == 1) sndDropOut.play(); 
	}
	
		function SndResult()
	{
		if (sndOn == 1) sndResult.play(); 
	}
	
		function SndAchiv()
	{
		if (sndOn == 1) sndAchiv.play(); 
	}
	
	function SndBegin()
	{
		if (sndOn == 1) sndBegin.play(); 
	}
	
	function HideTutorialAchiv()
	{
		if (tutorialPad != null) tutorialPad.kill();
		if (tutorialArrow != null) tutorialArrow.kill();
		if (tutorialSay != null) tutorialSay.kill();
		if (tutorialOk != null) tutorialOk.kill();
		if (tutorialMascot != null) tutorialMascot.kill();
		if (tutorialText != null) tutorialText.destroy();
		if (tutorialTapText != null) tutorialTapText.destroy();
		 
		if (isAchiv1 == 1) { isAchiv1 = 2; SaveData(); }
		if (isAchiv2 == 1) { isAchiv2 = 2;SaveData(); }
		if (isAchiv3 == 1) { isAchiv3 = 2;SaveData(); }
	}

	function HideTutorial()
	{
		tutorialTarget = {i:-1,j:-1};
		
		if (tutorialHeader != null) tutorialHeader.kill();
		if (tutorialWelcomeText != null) tutorialWelcomeText.destroy();
	
		if (tutorialPad != null) tutorialPad.kill();
		//if (tutorialArrow != null) tutorialArrow.kill();
		if (tutorialOk != null) tutorialOk.kill();
		if (tutorialSay != null) tutorialSay.kill();
		//if (tutorialMascot != null) tutorialMascot.kill();
		if (tutorialText != null) tutorialText.destroy();
		if (tutorialTapText != null) tutorialTapText.destroy();
		
		if (tutorialArrow1 != null) tutorialArrow1.kill();
		if (tutorialArrow2 != null) tutorialArrow2.kill();
		if (tutorialArrow3 != null) tutorialArrow3.kill();
		if (tutorialArrow4 != null) tutorialArrow4.kill();
		
		OnEndTutorialStep();
		//tutorialTween.start();
	}
	
	
	function EndTutorialStepTween()
	{
	

	if (tutorialArrow != null) tutorialArrow.kill();
	if (tutorialMascot != null) tutorialMascot.kill();
	if (tutorialHeader != null) tutorialHeader.kill();
		if (tutorialWelcomeText != null) tutorialWelcomeText.destroy();
	
		if (tutorialPad != null) tutorialPad.kill();
		//if (tutorialArrow != null) tutorialArrow.kill();
		if (tutorialOk != null) tutorialOk.kill();
		if (tutorialSay != null) tutorialSay.kill();
		//if (tutorialMascot != null) tutorialMascot.kill();
		if (tutorialText != null) tutorialText.destroy();
		if (tutorialTapText != null) tutorialTapText.destroy();
		
		if (tutorialArrow1 != null) tutorialArrow1.kill();
		if (tutorialArrow2 != null) tutorialArrow2.kill();
		if (tutorialArrow3 != null) tutorialArrow3.kill();
		if (tutorialArrow4 != null) tutorialArrow4.kill();
		if (isTutorial >0)
		{
		
			if (isTutorial <5)
			{
			isTutorial++;
			StartTutorialStep();
			}
			else
			{
			comboTutorial = 1;
			isTutorial = 0;
			//emotionImg.visible = true;
			//bOpt.visible = true;
			}
		}	
	
	}
	
	function OnTutorialTweenStartFinish()
	{
		tutorialTweenStartFinished = 1;
				
		if (tutorialOk != null) tutorialOk.visible = true;	
		tutorialPad.visible = true;
		tutorialText.visible =1;
		tutorialSay.visible =1;

				
	}
	
	function OnTutorialAchivTweenFinish()
	{
		tutorialTweenStartFinished = 1;			
		if (tutorialOk != null) tutorialOk.visible = true;	
		tutorialPad.visible = true;
		tutorialText.visible =1;
		tutorialSay.visible =1;

				
	}
	
	function OnArrowEndGrow()
	{
		if (tutorialArrow != null)
		{
			tutorialTweenArrowStart.stop();
			if (tutorialArrow.pulse == true)
			{
				tutorialTweenArrowLoop = game.add.tween(tutorialArrow.scale).to({x:0.95, y:0.95},1000,Phaser.Easing.Linear.None, true, 0, 500, true);
			}
		}
	}
	
	function OnEndTutorialStep()
	{
		var mx;
		
		if (isTutorial == 1) mx = tutorialMascot.x + 800;
		if (isTutorial == 2) mx = tutorialMascot.x - 800;
		if (isTutorial == 3) mx = tutorialMascot.x - 800;
		if (isTutorial == 4) mx = tutorialMascot.x + 800;
	
		tutorialTweenEnd = game.add.tween(tutorialMascot).to({x:mx, y:tutorialMascot.y},500);
			
		tutorialTweenEnd.onComplete.add(EndTutorialStepTween,this);
		tutorialTweenEnd.start();
		
		if (tutorialArrow != null)
		{
			if (tutorialTweenArrowLoop  != null)
				tutorialTweenArrowLoop.stop();
			tutorialTweenArrowEnd = game.add.tween(tutorialArrow.scale).to({x:0, y:0},500);
			tutorialTweenArrowEnd.start();
		}
			
	}
	
	function ClickTutorial()
	{
		if (tutorialTweenStartFinished == 1)
		{
			ResumeGame();
			HideTutorial();
		}
		
	}
	
	
	function NewArrow(x,y,show,left,anim)
	{
		tutorialArrow =  game.add.sprite(x, y,'bAchiv');
			tutorialArrow.frameName = "arrow-tutorial.png";
			tutorialArrow.anchor.setTo(0.5,0.5);
			tutorialArrow.rotation = -3.1415/4;
			tutorialArrow.scale.setTo(0.0,0.0);
			
				tutorialArrow.pulse = anim;
				wndLayer.addChild(tutorialArrow);
				
				if (anim == true)
				{
					tutorialTweenArrowStart = game.add.tween(tutorialArrow.scale).to({x:1.05, y:1.05},500);
				
				}
				else
				{
					tutorialTweenArrowStart = game.add.tween(tutorialArrow.scale).to({x:0.5, y:0.5},500);
				}
				
				tutorialTweenArrowStart.onComplete.add(OnArrowEndGrow,this);
				
			
			if (left == false)
			{
		
			}
			else
			{
			tutorialArrow.rotation = 3.1415/4;
		
			}
			
			tutorialTweenArrowStart.start();
			
			if (show == true)
			{
				tutorialTapText =  SetBitmapText(tutorialArrow.x-80, tutorialArrow.y, curLangArray[4],  40);
					wndLayer.addChild(tutorialTapText);
			}
	}
	
	
	function NewTutorialPad(x,y,ok,right,text)
	{
			tutorialPad = game.add.sprite(0, 0,'bAchiv');
			tutorialPad.frameName = "comic-frame.png";
			wndLayer.addChild(tutorialPad);
			tutorialPad.anchor.setTo(0.5,0.5);
			tutorialPad.x = x;
			tutorialPad.y = y;
			var size = 40;
			if (text=="")
			{
				
				if (isTutorial == 4 && (lang == "de" || lang == "fr"  || lang == "it"  || lang == "tr" || lang == "th" )) size = 30;
				tutorialText =SetBitmapText(tutorialPad.x-185, tutorialPad.y-40, tutorialTextsArray[isTutorial-1], size);
				wndLayer.addChild(tutorialText);
			}
			else
			{
			
				if (text==curLangArray[61] && lang == "fr") size =28;
				tutorialText =SetBitmapText(tutorialPad.x-185, tutorialPad.y-40, text, size);
				wndLayer.addChild(tutorialText);
			}
			if (right == false)
			{
			
			tutorialMascot = game.add.sprite(tutorialPad.x-110, tutorialPad.y+155,'bAchiv');
				wndLayer.addChild(tutorialMascot);
			tutorialMascot.frameName = "pet-tutorial.png";
			tutorialMascot.anchor.setTo(0.5,0.5);
			
			tutorialSay = game.add.sprite(tutorialPad.x-120, tutorialPad.y+70,'pointer');
			wndLayer.addChild(tutorialSay);
			tutorialSay.anchor.setTo(0.5,0.5);
			tutorialSay.scale.setTo(-1,1);
			}
			else
			{
				tutorialMascot = game.add.sprite(tutorialPad.x+100, tutorialPad.y+155,'bAchiv');
				wndLayer.addChild(tutorialMascot);
			tutorialMascot.frameName = "pet-tutorial.png";
			tutorialMascot.anchor.setTo(0.5,0.5);
			tutorialMascot.scale.setTo(-1,1);
			
			tutorialSay = game.add.sprite(tutorialPad.x+60, tutorialPad.y+70,'pointer');
			wndLayer.addChild(tutorialSay);
			//tutorialSay.frameName = "comic-pointer.png";
			tutorialSay.anchor.setTo(0.5,0.5);
			tutorialSay.scale.setTo(-1,1);
			
			}
			
			if (tutorialText != null) 
			{
				tutorialText.x = x - tutorialText.width/2;
			
			}
	
			
			if (ok == true)
			{
			
				tutorialOk =  game.add.button(tutorialPad.x+150, tutorialPad.y+70, 'bAchiv', ClickTutorial, this,"button-ok-tutorial.png","button-ok-tutorial.png","button-ok-tutorial.png");
			tutorialOk.anchor.setTo(0.5, 0.5);	
			
			tutorialOk.visible = false;
			wndLayer.addChild(tutorialOk);
			}
			else
			{
				tutorialOk = null;
			}
			tutorialPad.visible = false;
			tutorialSay.visible = false;
			tutorialText.visible = false;
			
	}
	
	function StartTutorialAchiv1()
	{
		
			isAchiv1 = 1;
			StartTutorialAchiv(1);
		
	}
	
	function StartTutorialAchiv(n)
	{
		
			if (n==1)
			{
			NewTutorialPad(405-70,328,false,false,curLangArray[61]);
			tutorialMascot.x +=400;
		
			tutorialTweenStartFinished = 0;
			tutorialMascot.n = n;
			
			tutorialArrow =  game.add.sprite(617-70, 423	,'bAchiv');
			wndLayer.addChild(tutorialArrow);
			tutorialArrow.frameName = "arrow-tutorial.png";
			tutorialArrow.anchor.setTo(0.5,0.5);
			tutorialArrow.rotation = -3*3.1415/4;
			tutorialArrow.scale.setTo(0.0,0.0);
			tutorialArrow.pulse = true;
			tutorialTweenArrowStart = game.add.tween(tutorialArrow.scale).to({x:1.05, y:1.05},500);
			tutorialTweenArrowStart.onComplete.add(OnArrowEndGrow,this);
			tutorialTweenArrowStart.start();
			
			tutorialTapText =  SetBitmapText(552-70, 440, curLangArray[4],  40);
			if (lang == "tr") tutorialTapText.x+=10;
				tutorialTapText.x-=tutorialTapText.width/2;
				tutorialTapText.x-=tutorialTapText.height/2;
			
			
			wndLayer.addChild(tutorialTapText);
			tutorialTweenStart = game.add.tween(tutorialMascot).to({x:tutorialPad.x-81, y:tutorialPad.y+144},500);
			tutorialTweenStart.onComplete.add(OnTutorialAchivTweenFinish,this);
			tutorialTweenStart.start();
			
			
			}
			
			if (n==2)
			{
				NewTutorialPad(400,195,false,false,curLangArray[62]);
				tutorialMascot.x +=400;
			
				tutorialTweenStartFinished = 0;
				tutorialMascot.n = n;
				tutorialArrow =  game.add.sprite(665, 137	,'bAchiv');
				tutorialArrow.frameName = "arrow-tutorial.png";
				tutorialArrow.anchor.setTo(0.5,0.5);
				tutorialArrow.rotation = 3.1415/4;
				tutorialArrow.scale.setTo(0.0,0.0);
				tutorialArrow.pulse = true;
				wndLayer.addChild(tutorialArrow);
				
				tutorialTweenArrowStart = game.add.tween(tutorialArrow.scale).to({x:1.05, y:1.05},500);
				tutorialTweenArrowStart.onComplete.add(OnArrowEndGrow,this);
				tutorialTweenArrowStart.start();
				tutorialTapText =  SetBitmapText(tutorialArrow.x+50, tutorialArrow.y, curLangArray[4],  40);
				
				wndLayer.addChild(tutorialTapText);
				tutorialTweenStart = game.add.tween(tutorialMascot).to({x:tutorialPad.x-81, y:tutorialPad.y+144},500);
				tutorialTweenStart.onComplete.add(OnTutorialAchivTweenFinish,this);
				tutorialTweenStart.start();
			}
			
			if (n==3)
			{
				NewTutorialPad(400,195,true,true,curLangArray[63]);
				tutorialMascot.x +=400;
			
				tutorialTweenStartFinished = 0;
				tutorialMascot.n = n;
				tutorialOk =  game.add.button(tutorialPad.x+150, tutorialPad.y+70, 'bAchiv', ClickTutorialAchiv, this,"button-ok-tutorial.png","button-ok-tutorial.png","button-ok-tutorial.png");
				tutorialOk.anchor.setTo(0.5, 0.5);	
				tutorialOk.visible = false;
				wndLayer.addChild(tutorialOk);
				tutorialTweenStart = game.add.tween(tutorialMascot).to({x:tutorialPad.x+52, y:tutorialPad.y+144},500);
				tutorialTweenStart.onComplete.add(OnTutorialAchivTweenFinish,this);
				tutorialTweenStart.start();
			}
	
	}
	
	function DelTutorialAchiv(e)
	{
			
	}
	
	function ClickTutorialAchiv()
	{
		HideTutorialAchiv();
	
	}
	
	function StartTutorialStep()
	{
		if (isTutorial == 1)
		{	
			emotionImg.visible = false;
			SetLevel();
			bOpt.visible = false;
			dropCap = 4;
			SetDropCount();
			
			tutorialTarget = {i:3,j:3};
			NewTutorialPad(300,220,false,false,"");
			
			tutorialMascot.x -=800;
			
			NewArrow(370,380,true,false,true);
			
			tutorialHeader =  game.add.sprite(300, 120,'logo');
			//tutorialHeader.frameName = "logo-game.png";
			tutorialHeader.anchor.setTo(0.5,0.5);
			tutorialHeader.scale.setTo(0.75,0.75);
				wndLayer.addChild(tutorialHeader);
			
			tutorialWelcomeText =SetBitmapText(220, 30,curLangArray[5], 40);
			tutorialWelcomeText.x = tutorialHeader.x - tutorialWelcomeText.width/2;
				wndLayer.addChild(tutorialWelcomeText);
					
			tutorialTween = game.add.tween(tutorialPad).to({x:tutorialPad.x,y:tutorialPad.y},1000);
			tutorialTween.onComplete.add(OnEndTutorialStep,this);
			
			tutorialTweenStartFinished = 0;
			tutorialTweenStart = game.add.tween(tutorialMascot).to({x:tutorialPad.x-110, y:tutorialPad.y+155},500);
			
				tutorialTweenStart.onComplete.add(OnTutorialTweenStartFinish,this);
					//		tutorialTweenStart.onComplete.add(OnTutorialAchivTweenFinish,this);
					tutorialTweenStart.start();
		}
		
		if (isTutorial == 2)
		{
			PauseGame();
			
			tutorialTarget = {i:-1,j:-1};
			NewTutorialPad(580,150,true,true,"");
			
			tutorialMascot.x +=400;
			
			tutorialArrow1 =  game.add.sprite(405, 340,'bAchiv');
			tutorialArrow1.frameName = "arrow-tutorial.png";
			tutorialArrow1.anchor.setTo(0.5,0.5);
			tutorialArrow1.scale.setTo(0.5,0.5);
			tutorialArrow1.rotation = 3.1415/2;
			wndLayer.addChild(tutorialArrow1);
			
			
			tutorialArrow2 =  game.add.sprite(130, 340,'bAchiv');
			tutorialArrow2.frameName = "arrow-tutorial.png";
			tutorialArrow2.anchor.setTo(0.5,0.5);
			tutorialArrow2.scale.setTo(0.5,0.5);
			tutorialArrow2.rotation = -3.1415/2;
			wndLayer.addChild(tutorialArrow2);
			
			tutorialArrow3 =  game.add.sprite(310, 160,'bAchiv');
			tutorialArrow3.frameName = "arrow-tutorial.png";
			tutorialArrow3.anchor.setTo(0.5,0.5);
			tutorialArrow3.scale.setTo(0.5,0.5);
			tutorialArrow3.rotation = 0;
			wndLayer.addChild(tutorialArrow3);
			
			tutorialArrow4 =  game.add.sprite(310, 430,'bAchiv');
			tutorialArrow4.frameName = "arrow-tutorial.png";
			tutorialArrow4.anchor.setTo(0.5,0.5);
			tutorialArrow4.scale.setTo(0.5,0.5);
			tutorialArrow4.rotation =  -3.1415;
			wndLayer.addChild(tutorialArrow4);
	
			tutorialTween = game.add.tween(tutorialPad).to({x:tutorialPad.x,y:tutorialPad.y},1000);
			tutorialTween.onComplete.add(OnEndTutorialStep,this);
			
			tutorialTweenStart = game.add.tween(tutorialMascot).to({x:tutorialPad.x+110, y:tutorialPad.y+155},500);
			tutorialTweenStart.onComplete.add(OnTutorialTweenStartFinish,this);
			tutorialTweenStart.start();
				
		}
		
		if (isTutorial == 3)
		{
		
			tutorialTarget = {i:2,j:2};
			NewTutorialPad(600,150,false,true,"");
			
				tutorialMascot.x +=400;
			NewArrow(290,300,true,false,true);
					
			tutorialTween = game.add.tween(tutorialPad).to({x:tutorialPad.x,y:tutorialPad.y},1000);
			tutorialTween.onComplete.add(OnEndTutorialStep,this);
			
				tutorialTweenStart = game.add.tween(tutorialMascot).to({x:tutorialPad.x+110, y:tutorialPad.y+155},500);
				tutorialTweenStart.onComplete.add(OnTutorialTweenStartFinish,this);
			tutorialTweenStart.start();
		
		}
		
		if (isTutorial == 4)
		{
			PauseGame();
			tutorialTarget = {i:-1,j:-1};
			NewTutorialPad(410,150,true,false,"");
			tutorialMascot.x -=800;
			NewArrow(690,280,false,false,false);
					
			tutorialTween = game.add.tween(tutorialPad).to({x:tutorialPad.x,y:tutorialPad.y},500);
			tutorialTween.onComplete.add(OnEndTutorialStep,this);
			
				tutorialTweenStart = game.add.tween(tutorialMascot).to({x:tutorialPad.x-110, y:tutorialPad.y+155},500);
				tutorialTweenStart.onComplete.add(OnTutorialTweenStartFinish,this);
			tutorialTweenStart.start();
		}
		
		if (isTutorial == 5)
		{
			tutorialTarget = {i:2,j:2};
						
			NewArrow(290,300,true,false,true);
					
			tutorialTween = game.add.tween(tutorialPad).to({x:tutorialPad.x,y:tutorialPad.y},500);
			tutorialTween.onComplete.add(OnEndTutorialStep,this);
		}
	}
	
		
	function CloseGame()
	{
		if (watchTutorial == 1)
		{
			isTutorial = 0;
			comboTutorial = 0;
		}
	
		DelOptionsButton();
		SaveData();
		KillOldGame();
		StopMusic();
			
		for (var k=fieldH*fieldW-1; k>=0; k--)
		{
			cellsArray[k].visible = false;
		}
		
		if (frLeft != null) frLeft.visible = false;
		if (frRight != null) frRight.visible = false;
		if (frTop != null) frTop.visible = false;
		if (frBottom != null) frBottom.visible = false;
		 
			emotionImg.visible = false;
			
			levelText.visible = false;
			scoreTextAbout.visible = false;
			scoreText.visible = false;
			dropsText.visible = false;
			dropIcon.visible = false;
			levelBack.visible = false;
			scoreBack.visible = false;
			dropsBack.visible = false;
			
	}
	
	function KillOldGame()
	{
		if (tweenMove != null) tweenMove.stop();

			if (movesDrops.length >0 )
				for (var i = movesDrops.length - 1; i > -1; i--) 
				{
				
					DrpEnd(movesDrops[i]);
					//movesDrops[i] = null;
					movesDrops.splice(i, 1);
					
				}
				
		for (var k=fieldH*fieldW-1; k>=0; k--)
		 {
		  
		
			blobsArray[k].visible = false;
			  
		  }
			
		
		//blobsArray = [];	
		
		
	}
	
	function SetDropsOne()
	{
		dropCap = 1;
		SetDropCount();
	}
	
	function GetSndRnd()
	{
		var v=game.rnd.integerInRange(0, 60);
		
		if (v<20) return 0;
		if (v<40) return 1;
		
		return 2;
		
	}
	
	function NewLevelCells()
	{
		levelCells = [];
			
		for (var k=0; k<fieldH*fieldW; k++)
		 {
			levelCells[k]=-1;
		 }
		
		
		var levelBlobSumm = 35;
		
		var rndK = 0;
		var lastK = -1;
		var tmp = 0;
		var vert = 0;
		var i;
		var j;
		var k=0;
		var tempCells = [];
		var blobMass = [];
		var currMassArray = [];
		var mass;
		var blobCount;
		var currMass;
		var currBlobMass;
		var i0;
		var j0;
		
		var lastStageArrayPosTmp = [];
		var lastStageArrayPosRes = [];
		var stagesCount = [];
		var minBlobStage;
		
		if (levelNum<=levels.length)
		{
			levelBlobCount = levels[levelNum-1].drops;
			mass = (levels[levelNum-1].coefficient-1)*levelBlobCount;
			lastStageBlobs = levels[levelNum-1].last;
			minBlobStage = levels[levelNum-1].min;
			
						
		}
		else
		{
			levelBlobCount = levels[levels.length-1].drops;
			mass = (levels[levels.length-1].coefficient-1)*levelBlobCount;
			lastStageBlobs = levels[levels.length-1].last;
			minBlobStage = levels[levels.length-1].min;
		}
		
		if (minBlobStage>=1 && minBlobStage<=3)
		{
		
		}
		else
		{
			minBlobStage =1;
		}
		
		minBlobStage--;
		
		
		for (var i=0;i<levelBlobCount;i++) currMassArray[i] = 0;
		
		if (lastStageBlobs<2) lastStageBlobs = 2;
		
		mass -= lastStageBlobs*3;
		var oldLastStageBlobs = lastStageBlobs;
		blobCount = levelBlobCount - oldLastStageBlobs;
		
		//Ã±Ã²Ã Ã¢Ã¨Ã¬ Ã¯Ã¥Ã°Ã¢Ã®Ã© Ã¨ Ã¯Ã®Ã±Ã«Ã¥Ã¤Ã­Ã¥Ã© ÃªÃ Ã¯Ã«Ã¨ Ã¢ Ã°Ã¿Ã¤Ã³ Ã¬Ã ÃªÃ±. Ã±Ã²Ã Ã¤Ã¨Ã¾
		lastStageBlobs -= 2;
		currMassArray[0] =3;
		currMassArray[levelBlobCount-1] =3;
		
		lastStageArrayPosRes.push(0);
		lastStageArrayPosRes.push(levelBlobCount-1);
		
		//for (var ii=0;ii<levelBlobCount;ii++)
		var ii = 0;
			typeBlobCount = lastStageBlobs;
			
		for (var k = 1;k<levelBlobCount-1; k++)
		{
			lastStageArrayPosTmp[k-1] = k;
			
		}

			//Ã¯Ã°Ã®Ã¡Ã¥Ã£Ã Ã¥Ã¬ Ã¬Ã Ã±Ã±Ã¨Ã¢ Ã¨Ã§ Ã¨Ã­Ã¤Ã¥ÃªÃ±Ã®Ã¢, ÃªÃ Ã¦Ã¤Ã»Ã© Ã°Ã Ã§ Ã¢Ã»Ã¡Ã¨Ã°Ã Ã¿ Ã¯Ã® Ã­Ã¥Ã¬Ã³ Ã¯Ã® Ã®Ã¤Ã­Ã®Ã¬Ã³ Ã¨Ã­Ã¤Ã¥ÃªÃ±Ã³ Ã¨ Ã¢Ã»ÃªÃ¨Ã¤Ã»Ã¢Ã Ã¿ Ã¥Ã£Ã®, Ã±Ã­Ã Ã·Ã Ã«Ã  Ã¤Ã«Ã¿ 4Ã© Ã±Ã²Ã Ã¤Ã¨Ã¨
			while (typeBlobCount>0)
			{
				var diap = lastStageArrayPosTmp.length;
				var num = ~~game.rnd.integerInRange(0, diap-2);
				
				currMassArray[lastStageArrayPosTmp[num]] = 3;
				lastStageArrayPosTmp.splice(num,1);
				lastStageArrayPosRes.push(lastStageArrayPosTmp[num]);
				typeBlobCount--;
			
			}
			
				//Ã³Ã¦Ã¥ Ã±Ã·Ã¨Ã²Ã Ã¥Ã¬ Ã·Ã²Ã® 1Ã¿ Ã¨ Ã¯Ã®Ã±Ã«Ã¥Ã¤Ã­Ã¿Ã¿ Ã¿Ã·Ã¥Ã©ÃªÃ  Ã¢ Ã¬Ã Ã±Ã±Ã¨Ã¢Ã¥ Ã¯Ã®Ã¬Ã¥Ã·Ã¥Ã­Ã» ÃªÃ Ãª Ã³Ã°Ã®Ã¢Ã¥Ã­Ã¼ = 4
		for (var k = 1;k<levelBlobCount-1; k++)
		{
			if (currMassArray[k]<minBlobStage)
			{
			currMassArray[k]=minBlobStage;
			mass -= minBlobStage;
		
			}
		}
	
		
		
		
		var kf = mass/blobCount;
		
		var diap;
		var num;
		diap = lastStageArrayPosTmp.length;
		
		var x=0;
		
		//Ã°Ã Ã±Ã¯Ã°Ã¥Ã¤Ã¥Ã«Ã¿Ã¥Ã¬ Ã®Ã±Ã²Ã Ã¢Ã¸Ã¨Ã¥Ã±Ã¿ ÃªÃ Ã¯Ã«Ã¨ (Ã¬Ã Ã±Ã±Ã³) Ã±Ã«Ã³Ã·Ã Ã©Ã­Ã»Ã¬ Ã®Ã¡Ã°Ã Ã§Ã®Ã¬
		while (x<mass && lastStageArrayPosTmp.length>0)
		{
			diap = lastStageArrayPosTmp.length;
			num = ~~game.rnd.integerInRange(0, diap-1);
			if (currMassArray[lastStageArrayPosTmp[num]]<3)
			{
				currMassArray[lastStageArrayPosTmp[num]]++;
				x++;
			}
			else
			{
				//Ã¥Ã±Ã«Ã¨ ÃªÃ Ã¯Ã«Ã¿ Ã³Ã¦Ã¥ Ã¢ Ã¯Ã®Ã±Ã«Ã¥Ã¤Ã­Ã¥Ã© Ã±Ã²Ã Ã¤Ã¨Ã¨ - Ã³Ã¡Ã¨Ã°Ã Ã¥Ã¬ Ã½Ã²Ã³ Ã¿Ã·Ã¥Ã©ÃªÃ³ Ã¨Ã§ Ã¬Ã Ã±Ã±Ã¨Ã¢Ã  Ã°Ã Ã±Ã¯Ã°Ã¥Ã¤Ã¥Ã«Ã¥Ã­Ã¨Ã¿
				lastStageArrayPosTmp.splice(num,1);
			}
		}
		
		var s=":";
		for (var ll = 0;ll<currMassArray.length;ll++) s=s+" "+currMassArray[ll];
		
		ii=0;
		lastK = -1;
		blobMass = [];
		
		while (ii<levelBlobCount)
		{
		
			currBlobMass = currMassArray[ii];
				
			if (lastK<0)
			{
				rndK =  game.rnd.integerInRange(0, fieldH*fieldW-1);
				
				while (levelCells[rndK]>=0) 
				{
					rndK =  game.rnd.integerInRange(0, fieldH*fieldW-1);
				}
				
				levelCells[rndK] = 	currBlobMass;
				
				i = ~~(rndK / fieldW);
				j = rndK % fieldW;
				lastK = rndK;
				
				var e = {mass:currBlobMass,i:i,j:j};
				blobMass[ii] = e;
				ii++;
				
				
			}
			else
			{
				 tempCells = [];
				 tempCells.length = 0;
				
					if (ii == levelBlobCount - 1)
					{
						var jj = 0;
						
					
						
						while (jj < ii)
						{
							i0 = blobMass[jj].i;
							j0 = blobMass[jj].j;
						
							if (levelCells[i*fieldW+j0]<0) 
							{
								tempCells.push(i*fieldW+j0);
								break;
							}
							if (levelCells[i0*fieldW+j]<0)
							{
								tempCells.push(i0*fieldW+j);
								break;
							}
							
							jj++;
						}
						
					}	
					
						if (tempCells.length == 0)
						{
							for (k=0;k<fieldH;k++)
							{
								if (levelCells[k+fieldW*i]<0) tempCells.push(k+fieldW*i);
							}
					
							for (k=0;k<fieldW;k++)
							{
								if (levelCells[k*fieldW+j]<0)  tempCells.push( k*fieldW+j);
							}
						}
				
					
				if (tempCells.length>0)
				{
					var pz = game.rnd.integerInRange(0, tempCells.length-1);
					rndK = tempCells[pz];
					i = ~~(rndK / fieldW);
					j = rndK % fieldW;
					levelCells[rndK] = currBlobMass;
					lastK = rndK;
					var e = {mass:currBlobMass,i:i,j:j};
					blobMass[ii] = e;
					ii++;
					
				}
				else
				{
					lastK = -1;
				}
				
			}
			
		}
	}
	
	function NewField()
	{

		if (spTweenC != null)
		{
			spTweenC._manager.remove(spTweenC);
			spTweenC = null;
		}
	
		dropsOnLevel = 0;
	
		
		if (spNull2 != null)
		{
			if (spNull2.tween != null) { spNull2.tween._manager.remove(spNull2.tween); spNull2.tween = null; } 
			spNull2.kill();
			spNull2 = null;
		}
		
		SetLevel();
		SetDropCount();
		SetScores();
		
		scaleBlobNum = 0;
		
		if (isTutorial == 0)
			NewLevelCells();
			
			
			
		if (blobsArray.length ==0) 	
		for (var k=0; k<fieldH*fieldW; k++)
		 {
		 i = ~~(k / fieldW);
		 j = k % fieldW;	
		  blobsArray[k] =   game.add.sprite(cellOffsetX+i*cellW-2, cellOffsetY+j*cellH+2, 'drops');
		blobsArray[k].anchor.setTo(0.5, 0.5);
			blobsArray[k].inputEnabled=true;
			blobsArray[k].events.onInputDown.add(ClickListener,this);
				blobsArray[k].i = i;	
			blobsArray[k].j = j;
		blobLayer.addChild(blobsArray[k]);
		
		}
		
		var val = 0;
	
		for (var k=0; k<fieldH*fieldW; k++)
		 {
		 i = ~~(k / fieldW);
		 j = k % fieldW;
		 
 
		 if (isTutorial == 0)
		 {
			val = levelCells[k];
		  }
		  else
		  {
			val = tutorialCells[k];
		  }
		  
		  if (popsArray[k]!=null)
			{
				popsArray[k].visible = false;
			}
			
		
		if (val>=0)
		  {
			 blobsArray[k].frameName = blobsFrames[val];
			blobsArray[k].visible = true;
			
		  }
		  else
		  {
			blobsArray[k].frameName = blobsFrames[0];
			blobsArray[k].visible = false;
		   }
		
			blobsArray[k].state = val;
			
			if (isTutorial == 0)
			{
				blobsArray[k].scale.setTo(0,0);
			}
			else
			{
				
				blobsArray[k].scale.setTo(1,1);
			}
			
			
			if (isTutorial == 0)
			{
				blobsArray[k].tween1 = game.add.tween(blobsArray[k].scale).to({x:1,y:1},160, Phaser.Easing.Linear.None,true,scaleBlobNum*16);
				blobsArray[k].tween1.onComplete.add(ScaleBlob,this);
				
			}
			scaleBlobNum++;
		
		}
		
	
	}
	
	function ScaleBlob(e)
	{
		if (e.tween1 != null) { e.tween1._manager.remove(e.tween1); e.tween1 = null;}
	}
	
	function AddGray()
	{
		if (greyBack == null)
		{
		 greyBack = game.add.graphics(0, 0);
		greyBack.beginFill(0x000000, 0.5);
		greyBack.drawRect(0, 0, w2*2, h2*2);
		greyBack.endFill();
		
			if (grayLayer != null)
			{
				grayLayer.addChild(greyBack);
			}
		}
		else
		{
			greyBack.visible = true;
		}
	}
	
	function AddComboWindow()
	{
	
		//console.log("cmb "+combo+" "+wndCurrent);
		if (comboTutorial != 1)
		{
			//AddTapEvent();	
		}
		AddGray();
		
		comboParent =  game.add.sprite(-600,0,null);
		wndLayer.addChild(comboParent);
		comboBack.visible = true;
		comboBack.x=400;
		comboBack.y = 300;
		
		wndLayer.addChild(comboParent);
		
		
		if (combo<12)
		{
			comboSingleEmotion.x = 299;
			comboSingleEmotion.y = 286;
			comboSingleEmotion.frameName = comboSingleFrames[0];
			SndCombo1();
		}
		else 
		if (combo < 18)
		{
				comboSingleEmotion.x = 306;
			comboSingleEmotion.y = 288;
			comboSingleEmotion.frameName = comboSingleFrames[1];
			SndCombo2();
		}
		else
		{
				comboSingleEmotion.x = 305;
			comboSingleEmotion.y = 285;
			comboSingleEmotion.frameName = comboSingleFrames[2];
			SndCombo3();
		}
		
		
	
		comboSingleEmotion.visible = true;
		
		comboTextValue = SetBitmapText(400, 200, curLangArray[6]+" x"+combo,  78);
					
	
		comboDropIcon.visible = true;

			dropCapOld = dropCap;
			dropCount= ~~(combo/3);
			
			dropToPlus = dropCount;
			
			dropToFly = 0;
			var scoresCount = 0;
			
			var tmp=0;
			
			for (var i=1;i<=combo;i++)
			{
				if (i>2)
				tmp = i*100;
				
				if (i>9)
				tmp = 1000;
				
				scoresCount += tmp;
			}
			
			
			AddScore(scoresCount);
			
		
		comboDropsText.text = "+"+dropCount;
		comboDropsText.visible = true;
		comboScoresText.text = ""+scoresCount;
		comboScoresText.visible = true;
			
		comboParent.addChild(comboBack);
		comboParent.addChild(comboSingleEmotion);
		comboParent.addChild(comboTextValue);
		comboParent.addChild(comboDropIcon);
		comboParent.addChild(comboDropsText);
		comboParent.addChild(comboScoresText);
		
			
			var spNull2 = game.add.sprite(0,0,null);
			
		var comboTween2 =  game.add.tween(spNull2).to({x:0,y:0}, 100, Phaser.Easing.Linear.None);
			comboTween2.onComplete.add(DropCircle,this);
			comboTween2.start();	
		
		if (comboTutorial == 1)
		{
			comboTween =  game.add.tween(comboParent).to({x:0,y:0}, comboMoveTime, Phaser.Easing.Linear.None);
			comboTween.onComplete.add(OnTutorialComboShow,this);
			comboTween.start();			
		}	
		else
		{
			AddTapEvent();
			comboTween =  game.add.tween(comboParent).to({x:0,y:0}, comboMoveTime, Phaser.Easing.Linear.None).to({x:0,y:0}, comboViewTime, Phaser.Easing.Linear.None).to({x:600,y:0}, comboMoveTime, Phaser.Easing.Linear.None);
			comboTween.start();
			var comboNull =  game.add.sprite(0,0,null);
			var timeTween = game.add.tween(comboNull).to({x:0,y:0},comboMoveTime*2+comboViewTime);
			timeTween.onComplete.add(ComboMoveEnd,this);
			comboParent.tween1 = timeTween;
			timeTween.start();
		}
		
	}
	
	function OnDropToGUIEnd(e)
	{
		if (e != null)
		if (comboDropArray[e.i]!=null)
		{ 
		
		if (comboDropArray[e.i].tween != null) { comboDropArray[e.i].tween.stop(); comboDropArray[e.i].tween._manager.remove(comboDropArray[e.i].tween); }
		if (comboDropArray[e.i].tween2 != null) {comboDropArray[e.i].tween2.stop(); comboDropArray[e.i].tween2._manager.remove(comboDropArray[e.i].tween2);}
		
		
		/*
		if (e.sprite != null) e.sprite.kill();
		 	e.kill();
			e = null;
		*/
		
		if (comboDropArray[e.i].visible == true)
		{
			//flyLayer.removeChild(comboDropArray[e.i]);
			comboDropArray[e.i].visible = false;
		}
		
			
			//if (dropCap<dropCapOld+dropCount)
			if (dropToPlus>0 || dropToPlus2>0)
			{
				if (dropToPlus > 0) dropToPlus--;
				if (dropToPlus2 > 0) dropToPlus2--;
				//console.log("pp "+dropToPlus+" "+dropCount+" "+dropToPlus2);
				dropCap++;
				SndDropMove();
				SetDropCount();	
			}
		}		
	}
	
	function DropCircle()
	{
	
		spNull2 = game.add.sprite(0,0,null);
		spTweenC = game.add.tween(spNull2).to({}, 166, Phaser.Easing.Cubic.In,false,0,dropCount);
		spTweenC.onLoop.add(NewDropCircle,this);
		spNull2.tween = spTweenC;
		spNull2.tween.start();
		
	}
	
	function NewDropCircle()
	{
		
		NewDropRound(465,360);
		
	}
	
	function NewDropCircle2()
	{
		
		NewDropRound(460,360);
		
	}
	
	function NewDropRound(x,y)
	{
	
		
		comboDropArray[dropToFly].x=x;
		comboDropArray[dropToFly].y=y;
		comboDropArray[dropToFly].tween = game.add.tween(comboDropArray[dropToFly]).to({x:650,y:236}, 500, Phaser.Easing.Cubic.In).to({x:650,y:236}, 50, Phaser.Easing.Linear.None);
		
			comboDropArray[dropToFly].tween2 = game.add.tween(comboDropArray[dropToFly].spNull).to({x:0,y:0}, 530, Phaser.Easing.Cubic.In);
			comboDropArray[dropToFly].tween2.onComplete.add(OnDropToGUIEnd,this);
			comboDropArray[dropToFly].tween.start();			
		comboDropArray[dropToFly].tween2.start();
		
		if (comboDropArray[dropToFly].visible == false)
		{
			flyLayer.addChild(comboDropArray[i]);
		}
		
		comboDropArray[dropToFly].visible = true;
			
		dropToFly++;	
		
	
	}
	
	function AddEndTutorialWindow()
	{
			if (tutorialSkip != null) tutorialSkip.visible = true;
	
			AddGray();	
			
			scores = 0;
			SetScores();
			
			dropCap = dropCapStart;
			SetDropCount();
			levelNum = 1;
			SetLevel();
			
			tutorialPad = game.add.sprite(0, 0,'bAchiv');
			tutorialPad.frameName = "comic-frame.png";
			tutorialPad.anchor.setTo(0.5,0.5);
			wndLayer.addChild(tutorialPad);
			tutorialPad.x = 400;
			tutorialPad.y = 250;
			tutorialText = SetBitmapText(tutorialPad.x-130, tutorialPad.y-40,tutorialTextsArray[6],  40);
			tutorialText.x = tutorialPad.x - tutorialText.width/2;
			wndLayer.addChild(tutorialText);
			
			tutorialMascot = game.add.sprite(tutorialPad.x, tutorialPad.y+200,'blob');
			tutorialMascot.frameName = "blob-achievement.png";
			tutorialMascot.anchor.setTo(0.5,0.5);
			wndLayer.addChild(tutorialMascot);
			
			tutorialSay = game.add.sprite(tutorialPad.x, tutorialPad.y+70,'pointer');
			//tutorialSay.frameName = "comic-pointer.png";
			tutorialSay.anchor.setTo(0.5,0.5);
			tutorialSay.scale.setTo(-1,1);
			wndLayer.addChild(tutorialSay);
		
				tutorialOk =  game.add.button(tutorialPad.x+150, tutorialPad.y+70, 'bAchiv', OnTutorialEnd, this,"button-ok-tutorial.png","button-ok-tutorial.png","button-ok-tutorial.png");
			tutorialOk.anchor.setTo(0.5, 0.5);	
			
			wndLayer.addChild(tutorialOk);
			tutorialOk.visible = false;
				tutorialPad.visible = false;
			tutorialSay.visible = false;
			tutorialText.visible = false;
			
			tutorialMascot.y +=400;
			
			tutorialTweenStartFinished = 0;
			tutorialTweenStart = game.add.tween(tutorialMascot).to({x:tutorialPad.x, y:tutorialPad.y+200},500);
			tutorialTweenStart.onComplete.add(OnTutorialTweenStartFinish,this);
			tutorialTweenStart.start();
			
		
	}
	
	
	function HideCombo()
	{
		
		comboDropIcon.visible = false;
		comboBack.visible = false;
		
		if (comboDropsText!=null)
		comboDropsText.visible = false;
		
		if (comboTextValue!=null)
		comboTextValue.visible = false;
	
		if (comboScoresText!=null)
		comboScoresText.visible = false;
		
		comboSingleEmotion.visible = false;
		
	
	}
	
	function AddNextLevelWindow()
	{
		//console.log("level "+levelNum);
		if(levelNum!=1)	{
			if( musicOn ) {
				music1.stop();
				musicFlag = true;
			} else {
				musicFlag = false; 
			}
			SG_Hooks.levelUp(levelNum, scores, function() { if( musicFlag ) music1.play('',0,1,true); });
		}
		
		HideCombo();
		NewField();
		AddTapEvent();
		emotionImg.frameName = comboMultiFrames[0];
		AddGray();
		
		
		nextLevelParent =  game.add.sprite(800,0,null);
		wndLayer.addChild(nextLevelParent);
		nextLevelBack.visible = true;
		nextLevelBack.x = -400;
		nextLevelBack.y = 300;
		nextLevelBack.rotation = 3.1415/2;
		nextLevelBack.scale.setTo(0.6,1.3);
		nextLevelDropIcon.visible = true;
		
		nextLevelText.text =curLangArray[1]+" "+levelNum;
		nextLevelText.visible = true;
			var addDrop = 1;
			dropCapOld = dropCap;
			dropCount =1;
			dropToFly = 0;
			
			nextLevelDropsText.text =  "+"+addDrop;
			
		 nextLevelParent.addChild(nextLevelBack);
		 
		if (levelNum == 1)
		{
			nextLevelDropsText.visible = false;
			nextLevelDropIcon.visible = false;
			dropToPlus2 = 0;
		}
		else
		{
			dropToPlus2 = 1;
			nextLevelDropsText.visible = true;
			nextLevelDropIcon.visible = true;
		}
		
		nextLevelParent.addChild(nextLevelText);
		nextLevelParent.addChild(nextLevelDropsText);
		nextLevelParent.addChild(nextLevelDropIcon);
		
		nextLevelTween =  game.add.tween(nextLevelParent).to({x:0,y:0}, nextLevelMoveTime, Phaser.Easing.Linear.None).to({x:0,y:0}, nextLevelViewTime, Phaser.Easing.Linear.None).to({x:-400,y:0}, nextLevelMoveTime, Phaser.Easing.Linear.None);
		nextLevelTween.start();
		
		nextLevelBackTween =  game.add.tween(nextLevelBack).to({x:385,y:300}, nextLevelMoveTime, Phaser.Easing.Linear.None).to({x:415,y:300}, nextLevelViewTime, Phaser.Easing.Linear.None).to({x:1200,y:300}, nextLevelMoveTime, Phaser.Easing.Linear.None);
		nextLevelBackTween.start();
		
		nextLevelNull =  game.add.sprite(0,0,null);
		
					
			timeNextTween = game.add.tween(nextLevelNull).to({x:0,y:0},nextLevelMoveTime*2+nextLevelViewTime);
			timeNextTween.onComplete.add(NextLevelMoveEnd,this);
			nextLevelParent.tween1 = timeNextTween;
			nextLevelParent.tween1.start();
			
			SndBegin();
			
			if (levelNum>1)
			{
			
			spNull2 = game.add.sprite(0,0,null);
			
		spNull2.comboTween2 =  game.add.tween(spNull2).to({x:0,y:0}, 500, Phaser.Easing.Linear.None);
			spNull2.comboTween2.onComplete.add(NewDropCircle2,this);
			spNull2.comboTween2.start();	

				
			}
	}
	
		function AddAchivWindow(achivNum)
	{
		PauseGame();
		AddGray();
		SndAchiv();
	
	
		achivLevelBack.x = 400;
		achivLevelBack.y = -300;
		achivLevelBack.rotation = 0;
		achivLevelBack.scale.setTo(1,1);
		achivLevelBack.visible = true;
		wndLayer.addChild(achivLevelBack);
		
			
		wndAchivParent =   game.add.sprite(0,800,null);
		wndLayer.addChild(wndAchivParent);

		
		
		wndAchivText = SetBitmapText(400, 150,achivHeaderText[achivNum], 78);
		
		wndAchivText.x =400 - wndAchivText.width/2;
		
		wndAchivIcon.frameName = "a"+(achivNum)+".png";
		wndAchivIcon.anchor.setTo(0.5,0.5);
		
		wndAchivParent.addChild(wndAchivText);
		wndAchivParent.addChild(wndAchivEmotion);
		wndAchivParent.addChild(wndAchivIcon);
		wndAchivParent.addChild(wndAchivTitle);
		
				
		wndAchivText.visible = true;
		wndAchivEmotion.visible = true;
		wndAchivIcon.visible = true;
		wndAchivTitle.visible = true;
		
		wndAchivTween =  game.add.tween(wndAchivParent).to({x:0,y:0}, 2*nextLevelMoveTime, Phaser.Easing.Linear.None).to({x:0,y:0}, 2*nextLevelViewTime, Phaser.Easing.Linear.None).to({x:0,y:-800}, 2*nextLevelMoveTime, Phaser.Easing.Linear.None);
		wndAchivTween.start();
		
		wndAchivBackTween =  game.add.tween(achivLevelBack).to({x:400,y:285}, 2*nextLevelMoveTime, Phaser.Easing.Linear.None).to({x:400,y:315}, 2*nextLevelViewTime, Phaser.Easing.Linear.None).to({x:400,y:900}, 2*nextLevelMoveTime, Phaser.Easing.Linear.None);
		wndAchivBackTween.start();
		
		var wndAchivNull =  game.add.sprite(0,0,null);
		
			wndAchivParent.tween1 = game.add.tween(wndAchivNull).to({x:0,y:0},nextLevelMoveTime*4+2*nextLevelViewTime);
			wndAchivParent.tween1.onComplete.add(WndAchivMoveEnd,this);
			wndAchivParent.tween1.start();
			
		
	}
	
	function WndAchivMoveEnd(e)
	{
		e = null;
		DelAchivWindow();
		if (pausedMenuOpen == 0)
		greyBack.visible = false;
		ResumeGame();
		NextWnd();
	}
	
	function DelAchivWindow()
	{
	
				
		achivLevelBack.visible  =false;
		
		wndLayer.removeChild(achivLevelBack);
		wndLayer.removeChild(wndAchivParent);
		
		wndAchivParent.removeChild(wndAchivEmotion);
		wndAchivEmotion.visible = false;
		
		wndAchivParent.removeChild(wndAchivIcon);
		wndAchivIcon.visible =  false;
		wndAchivParent.removeChild(wndAchivText);
		wndAchivText.visible = false;
		
		wndAchivParent.removeChild(wndAchivTitle);
		wndAchivTitle.visible =  false;
		
		wndAchivParent.removeChild(wndAchivText);
		wndAchivText.visible =  false;
	
		
		if (wndAchivParent.tween1 != null)
		{
			wndAchivParent.tween1._manager.remove(wndAchivParent.tween1);
			wndAchivParent.tween1 = null;
		}
		
		wndAchivParent.kill();
		wndAchivParent = null;
		
		
	}
	
	function ComboMoveEnd()
	{
		combo = 0;
		SetComboEmotion();
		DelComboWindow();
		if (pausedMenuOpen == 0)
		greyBack.visible = false;
		
		if (delayTapState == 0)
		{
			ResumeGame();
			NextWnd();
		
		}
	}
	
	function NextLevelMoveEnd(e)
	{
		DelNextLevelWindow(e);
		moveState = 0;
		SaveData();
		if (pausedMenuOpen == 0)
		greyBack.visible = false;
		if (delayTapState == 0)
		{
			NextWnd();
			
		}
	}
	
	function DelComboWindow()
	{
	StopFlyDrops();
			if (dropToPlus>0)	
					for (var ii=0;ii<dropToPlus;ii++)	
					{
						dropCap ++;
					}
					
				SetDropCount(dropCap);
		
		if (comboParent != null)
		{
			wndLayer.removeChild(comboParent);
			
		if (comboParent.tween1 != null) 
		{
			comboParent.tween1.stop();
			comboParent.tween1._manager.remove(comboParent.tween1);
			comboParent.tween1 = null;
		}
		
		comboBack.visible = false;
		
		comboParent.removeChild(comboBack);
		comboParent.removeChild(comboDropIcon);
		comboParent.removeChild(comboDropsText);
		comboParent.removeChild(comboScoresText);
		comboParent.removeChild(comboSingleEmotion);
			comboParent.kill();
		comboParent = null;
		}
		wndLayer.removeChild(comboParent);
		
		
		comboDropIcon.visible = false;
	
		comboDropsText.visible = false;
		
		comboTextValue.visible = false;
	
		comboScoresText.visible = false;
		
		comboSingleEmotion.visible = false;
		
			if (comboTween != null)
			{
				comboTween._manager.remove(comboTween);
				comboTween = null;
			}
		
		
		DelTapEvent();
	}
	
	function DelNextLevelWindow(e)
	{
	
		DelTapEvent();	
		if (dropMove2 != null) dropMove2.kill();
		if (e != null)
		if (e.tween1 != null ) { e.tween1._manager.remove(e.tween1); e.tween1 = null; }
	
		
		if (nextLevelParent != null)
			{
			nextLevelParent.removeChild(nextLevelBack);
			wndLayer.removeChild(nextLevelParent);
			}
		nextLevelBack.visible = false;
		
		if (nextLevelParent != null)	
			nextLevelParent.removeChild(nextLevelText);
			nextLevelText.visible = false;
		
			if (nextLevelParent != null)		
				nextLevelParent.removeChild(nextLevelDropsText);
		
		if (nextLevelParent != null)	
			nextLevelParent.removeChild(nextLevelDropIcon);
		
		nextLevelDropIcon.visible = false;
		nextLevelDropsText.visible = false;
		
		if (nextLevelBackTween !=null)
		{
			nextLevelBackTween.stop();
			nextLevelBackTween._manager.remove(nextLevelBackTween);
			nextLevelBackTween = null;
		}
		
		if (nextLevelParent != null)	
		{
			nextLevelParent.kill();
			nextLevelParent = null;
		}
		
		e = null;
	
	}
	
	function AddPauseMenu()
	{
		SaveData();	
		pausedMenuOpen = 1;
	
		AddGray();
		
		DelOptionsButton();
		AddOptionsButton();
	
		//bPlay = game.add.button(540, 280, 'blob', ClickPlay, this, "button-play.png","button-play.png","button-play.png");
		bPlay = game.add.button(470, 280, 'blob', ClickPlay, this, "button-play.png","button-play.png","button-play.png");
		bPlay.anchor.setTo(0.5, 0.5);
		
		wndLayer.addChild(bPlay);
		
		//bRestart = game.add.button(400, 280, 'blob', ClickRestart, this, "button-restart.png","button-restart.png","button-restart.png");
		bRestart = game.add.button(330, 280, 'blob', ClickRestart, this, "button-restart.png","button-restart.png","button-restart.png");
		bRestart.anchor.setTo(0.5, 0.5);	
		wndLayer.addChild(bRestart);
		
		//bMainMenu = game.add.button(260, 280, 'blob', ClickMainMenu, this, "button-exit.png","button-exit.png","button-exit.png");
		bMainMenu = game.add.button(190, 280, 'blob', ClickMainMenu, this, "button-exit.png","button-exit.png","button-exit.png");
		bMainMenu.anchor.setTo(0.5, 0.5);	
		wndLayer.addChild(bMainMenu);
		
		bMore = game.add.button(610, 280, 'blob', ClickMainMore, this,  "more-games-icon.png", "more-games-icon.png", "more-games-icon.png");
		bMore.anchor.setTo(0.5, 0.5);	
		//bMore.text = SetBitmapText(0,0,curLangArray[66],40);
			//bMore.text.x=-bMore.text.width/2;
			//bMore.text.y=-bMore.text.height/2;
			//bMore.addChild(bMore.text);
		
		wndLayer.addChild(bMore);
		
		
		
		
		SetSnd();	
		SetMusic();		
	}
	
	function SetSnd()
	{
		if (bSnd != null) { wndLayer.removeChild(bSnd); bSnd.kill(); }
	
		if (sndOn == 1)
			{
				bSnd  = game.add.button(460, 440, 'blob', ClickSnd, this, "button-sound-on.png","button-sound-on.png","button-sound-on.png");
			}	
			else
			{
				bSnd  = game.add.button(460, 440, 'blob', ClickSnd, this, "button-sound-off.png","button-sound-off.png","button-sound-off.png");
			}
				
			bSnd.anchor.setTo(0.5, 0.5);
			wndLayer.addChild(bSnd);
	}
	
		function SetMusic()
	{
	
		if (bMusic != null) { wndLayer.removeChild(bMusic); bMusic.kill(); }
		
		if (musicOn == 1)
			{
				bMusic  = game.add.button(340, 440, 'blob', ClickMusic, this, "button-music-on.png","button-music-on.png","button-music-on.png");
			}	
			else
			{
				bMusic  = game.add.button(340, 440, 'blob', ClickMusic, this, "button-music-off.png","button-music-off.png","button-music-off.png");
			}
				
			bMusic.anchor.setTo(0.5, 0.5);
			wndLayer.addChild(bMusic);
	}
	
	function SetMainSnd()
	{
		if (bMainSnd != null) { mainLayer.removeChild(bMainSnd); bMainSnd.kill(); }
	
		if (sndOn == 1)
			{
				bMainSnd  = game.add.button(170, 540, 'blob', ClickMainSnd, this, "button-sound-on.png","button-sound-on.png","button-sound-on.png");
			}	
			else
			{
				bMainSnd  = game.add.button(170, 540, 'blob', ClickMainSnd, this, "button-sound-off.png","button-sound-off.png","button-sound-off.png");
			}
				
			bMainSnd.anchor.setTo(0.5, 0.5);
			mainLayer.addChild(bMainSnd);
	}
	
		function SetMainMusic()
	{
	
		if (bMainMusic != null) { mainLayer.removeChild(bMainMusic); bMainMusic.kill(); }
		
		if (musicOn == 1)
			{
				bMainMusic  = game.add.button(60, 540, 'blob', ClickMainMusic, this, "button-music-on.png","button-music-on.png","button-music-on.png");
			}	
			else
			{
				bMainMusic  = game.add.button(60, 540, 'blob', ClickMainMusic, this, "button-music-off.png","button-music-off.png","button-music-off.png");
			}
				
			bMainMusic.anchor.setTo(0.5, 0.5);
			mainLayer.addChild(bMainMusic);
	}
	
	function ShowDropOut()
	{
		AddGray();
		StopMusic();
		SndDropOut();
		
		if( musicOn ) {
			music1.stop();
			musicFlag = true;
		} else {
			musicFlag = false;
		}	
		SG_Hooks.gameOver(levelNum, scores, function() { if( musicFlag ) music1.play('',0,1,true); });	
			
		dropOutText = SetBitmapText(-200, 250, curLangArray[7], 50);
		wndLayer.addChild(dropOutText);
		
		
		ResTween = game.add.tween(dropOutText).to({x:300,y:250}, comboMoveTime, Phaser.Easing.Linear.None).to({x:300,y:250}, comboViewTime, Phaser.Easing.Linear.None).to({x:1000,y:250}, comboMoveTime, Phaser.Easing.Linear.None);
		ResTween.start();
		
		var dropOutNull =  game.add.sprite(0,0,null);
			var timeTween = game.add.tween(dropOutNull).to({x:0,y:0},comboMoveTime*2+comboViewTime);
			timeTween.onComplete.add(DropOutEnd,this);
			dropOutText.tween1 = timeTween;
			timeTween.start();
		
	}
	
	function DropOutEnd()
	{
		dropOutText.destroy();
		
		AddResultMenu();
	}
	
	function OnTutorialSkip()
	{
		moveState = 0;
		isTutorial = 0;
		comboTutorial = 0;
		
		gamePaused = 0;
		dropCap = dropCapStart;
		SetDropCount(dropCap);
		scores = 0;
		SetScores(scores);
		bestCombo = 0;
		levelNum = 1;
		SetLevel();
		
		
		
		if (tutorialTapText != null) tutorialTapText.destroy();
		if (tutorialHeader != null) tutorialHeader.kill();
		if (tutorialWelcomeText != null) tutorialWelcomeText.destroy();
		KillOldGame();
		OnTutorialEnd();
		
		
	}
	
	function OnTutorialEnd()
	{
	
		if (tutorialPad != null) tutorialPad.kill();
		if (tutorialOk != null) tutorialOk.kill();
		if (tutorialSay != null) tutorialSay.kill();
		if (tutorialMascot != null) tutorialMascot.kill();
		if (tutorialText != null) tutorialText.destroy();
		if (tutorialSkip != null) tutorialSkip.kill();
		if (tutorialArrow != null) tutorialArrow.kill();
		if (tutorialArrow1 != null) tutorialArrow1.kill();
		if (tutorialArrow2 != null) tutorialArrow2.kill();
		if (tutorialArrow3 != null) tutorialArrow3.kill();
		if (tutorialArrow4 != null) tutorialArrow4.kill();
	
		emotionImg.visible = true;
		
		bOpt.visible = true;
		comboTutorial = 0;
		
		SaveData();
	
		
		if (tutorialTweenStart != null)
		{
			tutorialTweenStart._manager.remove(tutorialTweenStart);
		}
		
		if (tutorialTweenEnd != null)
		{
			tutorialTweenEnd._manager.remove(tutorialTweenEnd);
			
		}
		
		AddWnd(-1,AddNextLevelWindow);
		NextWnd();
		
					
	}
	
	function OnTutorialComboShow()
	{
			//if (tutorialSkip != null) tutorialSkip.visible = false;
			
			tutorialPad = game.add.sprite(0, 0,'bAchiv');
			tutorialPad.frameName = "comic-frame.png";
			tutorialPad.anchor.setTo(0.5,0.5);
			tutorialPad.x = 400;
			tutorialPad.y = 100;
			wndLayer.addChild(tutorialPad);
			var size =40;
			if (lang == "de" || lang == "es" || lang == "fr"  || lang == "it" || lang == "pt" || lang == "tr" || lang == "th" ) size = 30;
			if (lang == "ru") size = 35;
			tutorialText = SetBitmapText(tutorialPad.x-170, tutorialPad.y-40, tutorialTextsArray[5], size);
			wndLayer.addChild(tutorialText);
			
			if (tutorialText != null) 
			{
				tutorialText.x = tutorialPad.x - tutorialText.width/2;
			
			}
			
			tutorialSay = game.add.sprite(tutorialPad.x-100, tutorialPad.y+70,'pointer');
			wndLayer.addChild(tutorialSay);
			//tutorialSay.frameName = "comic-pointer.png";
			tutorialSay.anchor.setTo(0.5,0.5);
			tutorialSay.scale.setTo(-1,1);
			
			NewArrow(410,410,false,true,false);
			
				tutorialOk =  game.add.button(tutorialPad.x+150, tutorialPad.y+70, 'bAchiv', OnTutorialComboEnd, this,"button-ok-tutorial.png","button-ok-tutorial.png","button-ok-tutorial.png");
				wndLayer.addChild(tutorialOk);
			tutorialOk.anchor.setTo(0.5, 0.5);	
		
	}
	
	function OnTutorialComboEnd()
	{
		if (tutorialPad != null) tutorialPad.kill();
		if (tutorialOk != null) tutorialOk.kill();
		if (tutorialSay != null) tutorialSay.kill();
		if (tutorialText != null) tutorialText.destroy();
		if (tutorialArrow != null) tutorialArrow.kill();
		
		comboTween =  game.add.tween(comboParent).to({x:600,y:0}, comboMoveTime, Phaser.Easing.Linear.None);
		comboTween.onComplete.add(ComboMoveEnd,this);
		comboTween.start();
		
		
	}
	
	function AddResTween(e,time,delay,isSound)
	{
		
		wndLayer.addChild(e);
	
		if (isSound == true) 
		{ 
		//SndStar();
	
		e.scale.setTo(2,2);
		e.visible = false;
	
		if (delay>0)
			{
				e.tween1 = game.add.tween(e.scale).to({x:1,y:1}, time*1000/60, Phaser.Easing.Linear.None,true,delay*1000/60);
			}
			else
			{
				e.tween1 = game.add.tween(e.scale).to({x:1,y:1}, time*1000/60, Phaser.Easing.Linear.None);
			}
			
			
			oldRot = e.rotation;
			e.rotation = -3.14;
			e.tween1.onStart.add(function(){SndStar(); e.visible = true;},this);
			
			e.tween2 = game.add.tween(e).to({rotation:oldRot}, time*1000/60, Phaser.Easing.Linear.None,true,delay*1000/60);
			
			delete oldRot;
			e.tween2.start();
		}
		else
		{
			e.scale.setTo(0,0);
			
			if (delay>0)
			{
				e.tween1 = game.add.tween(e.scale).to({x:1,y:1}, time*1000/60, Phaser.Easing.Linear.None,true,delay*1000/60);
			}
			else
			{
				e.tween1 = game.add.tween(e.scale).to({x:1,y:1}, time*1000/60, Phaser.Easing.Linear.None);
			}
		
		}
		
		e.tween1.start();
	}
	
	function AddResultMenu()
	{
		
		bOpt.visible = false;
		
		if (levelNum>10) resTime = 1000;
		if (levelNum>20) resTime = 1600;
		if (levelNum>30) resTime = 2200;
		if (levelNum<=10) resTime = 600;
		
		SndResTween = game.add.sprite(0,0,null);
		SndResTween.tween = game.add.tween(SndResTween).to({x:0,y:0}, resTime, Phaser.Easing.Linear.None);
		SndResTween.tween.onComplete.add(function(e){ SndResult();},this);
		SndResTween.tween.start();
		
		
		ResBack = game.add.sprite(400,300,'blob');
		ResBack.frameName = "window-results.png";
		ResBack.anchor.setTo(0.5,0.5);	
		
		AddResTween(ResBack,23,0);
	
		bResAchiv = game.add.button(540-70, 501, 'blob', ClickResAchiv, this, "button-achievements.png","button-achievements.png","button-achievements.png");
		bResAchiv.anchor.setTo(0.5, 0.5);
		AddResTween(bResAchiv,21,6);

		bResMore = game.add.button(680-70, 500, 'blob', ClickMainMore, this,  "more-games-icon.png", "more-games-icon.png", "more-games-icon.png");
			bResMore.anchor.setTo(0.5, 0.5);
			//bResMore.text = SetBitmapText(0,0,curLangArray[66],40);
			//	bResMore.text.x=-bResMore.text.width/2;
			//	bResMore.text.y=-bResMore.text.height/2;
			//	bResMore.addChild(bResMore.text);
			AddResTween(bResMore,21,8);
		
		
		bResRestart = game.add.button(400-70, 501, 'blob', ClickResRestart, this, "button-restart.png","button-restart.png","button-restart.png");
		bResRestart.anchor.setTo(0.5, 0.5);	
		AddResTween(bResRestart,21,4);
		
		bResMain = game.add.button(260-70, 501, 'blob', ClickResMainMenu, this, "button-exit.png","button-exit.png","button-exit.png");
		bResMain.anchor.setTo(0.5, 0.5);	
		AddResTween(bResMain,23,0);
		
		var size = 65;
		
		if (lang == "tr") size = 55;
		
		ResTextHeader = SetBitmapText(400, 70, curLangArray[8], size);
		ResTextHeader.x -= ResTextHeader.width/2;
		AddResTween(ResTextHeader,15,8);
				
		ResTextN1 = SetBitmapText(270+130, 273,(levelNum-1) + " "+curLangArray[9], 50);
		ResTextN1.x -= ResTextN1.width/2;
		AddResTween(ResTextN1,13,13);
	
		
		ResTextN2 =SetBitmapText(270+130, 323,curLangArray[10]+": x"+bestCombo, 50);
		ResTextN2.x -= ResTextN2.width/2;
		AddResTween(ResTextN2,13,18);
		
		ResTextN3 = SetBitmapText(270+130, 373,curLangArray[11]+": "+scores, 50);
		ResTextN3.x -= ResTextN3.width/2;
		
		AddResTween(ResTextN3,13,23);
		
		ResStar1B = game.add.sprite(271,202,'blob');
		ResStar1B.frameName = "star1-slot.png";
		ResStar1B.anchor.setTo(0.5,0.5);
		ResStar1B.rotation = -3.1415*5/180;
		AddResTween(ResStar1B,10,13,false);
		
		ResStar1 = game.add.sprite(271,201,'blob');
		ResStar1.frameName = "star1.png";
		ResStar1.anchor.setTo(0.5,0.5);
		ResStar1.rotation = -3.1415*5/180;
		
		if (levelNum>10)
		{
			AddResTween(ResStar1,25,18,true);
		}
		else
		{
			ResStar1.visible = false;
		}
		
		ResStar2B = game.add.sprite(400,197,'blob');
		ResStar2B.frameName = "star1-slot.png";
		ResStar2B.anchor.setTo(0.5,0.5);
		AddResTween(ResStar2B,10,16,false);
		
		ResStar2 = game.add.sprite(400,196,'blob');
		ResStar2.frameName = "star1.png";
		ResStar2.anchor.setTo(0.5,0.5);
		
		if (levelNum>20)
		{
			AddResTween(ResStar2,25,50,true);
		}
		else
		{
			ResStar2.visible = false;
		}
		
		
		ResStar3B = game.add.sprite(530,202,'blob');
		ResStar3B.frameName = "star1-slot.png";
		ResStar3B.anchor.setTo(0.5,0.5);
		ResStar3B.rotation = 3.1415*5/180;
		AddResTween(ResStar3B,10,19,false);
		
		ResStar3 = game.add.sprite(530,201,'blob');
		ResStar3.frameName = "star1.png";
		ResStar3.anchor.setTo(0.5,0.5);
		ResStar3.rotation = 3.1415*5/180;
		
		if (levelNum>30)
		{
			AddResTween(ResStar3,25,82,true);
		}
		else
		{
			ResStar3.visible = false;
		}
		
		
		
		if (isAchiv1 == 0) 
		{ 
			isAchiv1 = 1;
			var spNull2 = game.add.sprite(0,0,null);
			var timeAchiv = 500;
			
			if (levelNum>=10) timeAchiv = 700;
			if (levelNum>=20) timeAchiv = 900;
			if (levelNum>=30) timeAchiv = 1100;
			
			var tweenAchivStart = game.add.tween(spNull2).to({x:0,y:0},timeAchiv, Phaser.Easing.Linear.None);
			tweenAchivStart.onComplete.add(StartTutorialAchiv1,this);
			tweenAchivStart.start();
		}
	}
	
	function DelResTween(e)
	{
		if (e.tween1 != null)
		{
			e.tween1._manager.remove(e.tween1);
		}
	}
	
	function DelResultMenu()
	{
		
		greyBack.visible = false;
		
		ResBack.kill();
		DelResTween(ResBack);
		
		bResAchiv.kill();
		DelResTween(bResAchiv);
		
		bResMain.kill();
		DelResTween(bResMain);
		bResRestart.kill();
		DelResTween(bResMore);
		bResMore.kill();
		
		DelResTween(bResRestart);
		ResTextHeader.destroy();
		DelResTween(ResTextHeader);
		ResTextN1.destroy();
		DelResTween(ResTextN1);
		ResTextN2.destroy();
		DelResTween(ResTextN2);
		ResTextN3.destroy();
		DelResTween(ResTextN3);
		
		DelResTween(ResStar1);
		ResStar1.kill();
		DelResTween(ResStar2);
		ResStar2.kill();
		DelResTween(ResStar3);
		ResStar3.kill();
		
		DelResTween(ResStar1B);
		ResStar1B.kill();
		DelResTween(ResStar2B);
		ResStar2B.kill();
		DelResTween(ResStar3B);
		ResStar3B.kill();
		
	}
	
	function DelPauseMenu()
	{
	
		pausedMenuOpen = 0;
		greyBack.visible = false;
		
		wndLayer.removeChild(bPlay);
		bPlay.kill();
		
		wndLayer.removeChild(bRestart);
		bRestart.kill();
		
		wndLayer.removeChild(bMainMenu);
		bMainMenu.kill();
		
		wndLayer.removeChild(bMore);
		bMore.kill();
		
		wndLayer.removeChild(bSnd);
		bSnd.kill();
		
		bMusic.visible = false;
		wndLayer.removeChild(bMusic);
		bMusic.kill();
		bMusic = null;
	
	
	}
	
	function ClickSnd()
	{
		SndClick();
		
		sndOn = 1 - sndOn;
		SetSnd();
		
		
	}
	
	function ClickMainSnd()
	{
		SndClick();
		sndOn = 1 - sndOn;
		SetMainSnd();
	}
	
	function ClickMusic()
	{
		SndClick();
		musicOn = 1 - musicOn;
		SetMusic();
		
		if (musicOn == 1) 
		{
			PlayMusic(); 
		} 
		else 
		{
			StopMusic();
		}
	}
	
	function ClickMainMusic()
	{
		SndClick();
		musicOn = 1 - musicOn;
		SetMainMusic();
	}
	
	function ClickMainTutorial()
	{
		SndClick();
		DelMainMenu();
		isTutorial = 1;
		comboTutorial = 0;
		watchTutorial = 1;
		FirstRun();
	}
	
	function ClickMainPlay()
	{
		SndClick();
		DelMainMenu();
	
		
		if (isTutorial >0 )
		{
			FirstRun();
		}
		else
		{
			NewGame();
		}
	
		
	}
	
	function ClickPlay()
	{
		SndClick();
		DelPauseMenu();
		ResumeGame();
	}
	
	function ClickRestart()
	{
		SndClick();
		DelPauseMenu();
		RestartGame();
	}
	
	function ClickMainMenu()
	{
		SndClick();
		DelPauseMenu();
		CloseGame();
		NewMainMenu();
	}
	
	function ClickResRestart()
	{
		if (isAchiv1 == 2)
		{
			SndClick();
			DelResultMenu();
			RestartGame();
		}
	}
	
	function ClickResMainMenu()
	{
		if (isAchiv1 == 2)
		{
			SndClick();
			DelResultMenu();
			CloseGame();
			NewMainMenu();
		}
	}
	
	function ClickResAchiv()
	{
		if (isAchiv1 == 2 || (isAchiv1 == 1 && tutorialTweenStartFinished == 1))
		{
			if (isAchiv1 == 1)  { HideTutorialAchiv(); isAchiv2 = 1; isAchiv3 = 0; }
			
			SndClick();
			DelResultMenu();
			CloseGame();
			NewAchivMenu();
		}
	}
	
	function ClickMainAchiv()
	{
		SndClick();
		DelMainMenu();
		NewAchivMenu();
		
	}
	
	function ClickMainMore()
	{
		SndClick();
		OpenSGPage();
	}
	
	function OpenSGPage()
	{
			//location.href="http://m.softgames.de";
			//window.open("http://m.softgames.de");
			SG.redirectToPortal();
	}
	
	function ClickLoadMore()
	{
		//OpenSGPage();
	}
	
	
	function ClickAchivMain()
	{
		
	
		if (isAchiv2 != 1 && isAchiv3 !=1)
		{
			SndClick();
			DelAchivMenu();
			NewMainMenu();
		}
	}
	
	function ClickAchivLeft()
	{
		
		if (isAchiv2 != 1 && isAchiv3 != 1)
		{
			if (achivCurrentPageCount > 0 && achivPageMove == 0)
			{
				SndClick();
				achivCurrentPageCount--;
				AchivSetNewPage(achivCurrentPageCount);
			}
		}
	}
	
	function ClickAchivRight()
	{
		
		if ((isAchiv2 != 1 || (isAchiv2 ==1 && tutorialTweenStartFinished == 1)) && isAchiv3 != 1 )
		{
			if (isAchiv2 == 1) { HideTutorialAchiv(); isAchiv3 = 1;}
			
			
			
			if (achivCurrentPageCount < achivAllPageCount-1 && achivPageMove == 0)
			{
				SndClick();
				achivCurrentPageCount++;
				AchivSetNewPage(achivCurrentPageCount);
			}
		}
		
	}
	
	function AchivSetNewPage(page)
	{
		if (page == 0)
		{
			bAchivLeft.visible = false;
		}
		else
		{
			bAchivLeft.visible = true;
		}
		
		if (page == achivAllPageCount - 1)
		{
			bAchivRight.visible = false;
		}
		else
		{
			bAchivRight.visible = true;
		}
		
		achivPageMove = 1;
		
		AchivTween = game.add.tween(achivParent).to({x:-page*3000,y:0},300);
		AchivTween.onComplete.add(OnAchivPageMoveEnd,this);
		AchivTween.start();	
	}
	
	
	function OnAchivPageMoveEnd()
	{
		achivPageMove =0;
		
		if (isAchiv3 == 1) 
		{
			StartTutorialAchiv(3);
		}
	}
	
	
	
	function NewMainMenu()
	{
		
		/*
		if (mainLogo == null)
		{
			mainLogo =  BlobGame.game.add.button(673, 278, 'mainlogo', ClickLoadMore, this);
			mainLogo.anchor.setTo(0.5,0.5);
			mainLayer.addChild(mainLogo);
		
		}
		else
		{
			mainLogo.visible = true;
		}
		*/
		
		SetMainSnd();	
		SetMainMusic();
		
		if (MainEmotion == null)
		{
			MainEmotion = game.add.sprite(400,405,'bAchiv');
			MainEmotion.frameName ="blobs-title-screen.png";
			MainEmotion.anchor.setTo(0.5,0.5);
			mainLayer.addChild(MainEmotion);
		}
		else
		{
			MainEmotion.visible = true;
		}
		
		if (MainHeader == null)
		{
			MainHeader = game.add.sprite(400,103,'logo');
			//MainHeader.frameName ="logo-game.png";
			MainHeader.anchor.setTo(0.5,0.5);
			mainLayer.addChild(MainHeader);
		}
		else
		{
			MainHeader.visible = true;
		}
		
		if (bMainPlay == null)
		{
			bMainPlay = game.add.button(400, 240, 'blob', ClickMainPlay, this, "button-play.png","button-play.png","button-play.png");
			bMainPlay.anchor.setTo(0.5, 0.5);
			mainLayer.addChild(bMainPlay);
		}
		else
		{
			bMainPlay.visible = true;
		}
		
		if (bMainMore == null)
		{
			bMainMore = game.add.button(715, 380, 'blob', ClickMainMore, this,  "more-games-icon.png", "more-games-icon.png", "more-games-icon.png");
			bMainMore.anchor.setTo(0.5, 0.5);
			//bMainMore.text = SetBitmapText(0,0,curLangArray[66],40);
			//	bMainMore.text.x=-bMainMore.text.width/2;
			//	bMainMore.text.y=-bMainMore.text.height/2;
			//	bMainMore.addChild(bMainMore.text);
			mainLayer.addChild(bMainMore);
		}
		else
		{
			bMainMore.visible = true;
		}
		
		if (bMainAchiv == null)
		{
			bMainAchiv = game.add.button(715, 510, 'blob', ClickMainAchiv, this, "button-achievements.png","button-achievements.png","button-achievements.png");
			bMainAchiv.anchor.setTo(0.5, 0.5);
			mainLayer.addChild(bMainAchiv);
		}
		else
		{
			bMainAchiv.visible = true;
		}
		
		
		if (isTutorial == 0)
		{
			if (bWatchTutorial == null)
			{
				bWatchTutorial = game.add.button(435, 540, 'bAchiv', ClickMainTutorial, this, "button-watch-tutorial.png","button-watch-tutorial.png","button-watch-tutorial.png");
				bWatchTutorial.anchor.setTo(0.5,0.5);
				var size = 40;
				if (lang == "ru" || lang == "th") size = 35;
				bWatchTutorial.text = SetBitmapText(0,0,curLangArray[64],size);
				bWatchTutorial.text.x=-bWatchTutorial.text.width/2;
				bWatchTutorial.text.y=-bWatchTutorial.text.height/2;
					
				bWatchTutorial.addChild(bWatchTutorial.text);
				mainLayer.addChild(bWatchTutorial);
			}
			else
			{
				bWatchTutorial.visible = true;
			}
		}
		

			
	}
	
	function DelMainMenu()
	{
		
		MainEmotion.visible = false;
		MainHeader.visible = false;
		bMainMusic.visible = false;
		bMainSnd.visible = false;
		bMainPlay.visible = false;
		bMainAchiv.visible = false;
		bMainMore.visible = false;
		//if (mainLogo != null) mainLogo.visible = false;
		
		if (bWatchTutorial != null) bWatchTutorial.visible = false;
	}
	
	function NewAchivMenu()
	{
			
		AddGray();
		
		AchivHeader =  SetBitmapText(250, 30, curLangArray[12], 57);
	
		wndLayer.addChild(AchivHeader);	
		achivParent = game.add.sprite(0,0,null);
		achivPageMove = 0;

		//bAchivLeft = game.add.button(590, 73, 'bAchiv', ClickAchivLeft, this, "achi-arrow-left.png ","achi-arrow-left.png ","achi-arrow-left.png ");
		bAchivLeft = game.add.button(590, 73, 'bAchiv', ClickAchivLeft, this,  "achi-arrow-right.png","achi-arrow-right.png","achi-arrow-right.png");
		bAchivLeft.anchor.setTo(0.5, 0.5);	
		bAchivLeft.scale.setTo(-1,1);
		wndLayer.addChild(bAchivLeft);
		
		bAchivRight = game.add.button(730, 73, 'bAchiv', ClickAchivRight, this, "achi-arrow-right.png","achi-arrow-right.png","achi-arrow-right.png");
		bAchivRight.anchor.setTo(0.5, 0.5);	
		wndLayer.addChild(bAchivRight);
		
		bAchivMain = game.add.button(60, 73, 'blob', ClickAchivMain, this, "button-exit.png","button-exit.png","button-exit.png");
		bAchivMain.scale.setTo(0.8,0.8);
		bAchivMain.anchor.setTo(0.5, 0.5);	
		wndLayer.addChild(bAchivMain);
		
	
		
		var posX;
		var posY;
		
		achivAllCount = achivCount;
		achivAllPageCount = 4;
		achivCurrentPageCount = 0;
		
		bAchivLeft.visible = false;
		
		achivIconsArray = [];
		
		var tempAchivIcon;
		var tempAchivHeader;
		var tempAchivAbout;
		
		for (var i=1;i<=achivAllCount;i++)
		{
			posX = ~~(((i-1) % 6)/3)*420+3000*~~((i-1)/6)+35;
			posY = ((i-1) % 3)*140+216;
			
			achivIconsArray[i] = game.add.sprite(0,0,null);
			
			tempAchivIcon = game.add.sprite(posX,posY,'bAchiv');
			
			
			var i2 = i-1;	
			
			if (achivStateArray[i-1] == -1)
			{
				tempAchivIcon.frameName = "a"+i2+".png";
			}
			else
			{
				tempAchivIcon.frameName = "achi-pic-none.png";
			}
			tempAchivIcon.anchor.setTo(0.5,0.5);
			var size = 40;
			//if (lang == "de" || lang =="es") size = 30;
			if (lang == "it") size = 30;
			tempAchivHeader = SetBitmapText(posX+90, posY-60,achivHeaderText[i-1], size);
			tempAchivHeader.align = "left";
			
			size = 30;
			if (lang == "it" ) size = 25;
			//if (lang == "es") size = 28;
			//if (lang == "fr") size = 20;
			
			tempAchivAbout =SetBitmapText(posX+90, posY+17, achivAboutText[i-1],  size);
			tempAchivAbout.y-=tempAchivAbout.height/2;
			tempAchivAbout.align = "left";
		
			achivIconsArray[i].addChild(tempAchivIcon);
			achivIconsArray[i].addChild(tempAchivHeader);
			achivIconsArray[i].addChild(tempAchivAbout);
			achivIconsArray[i].icon0 = tempAchivIcon;
			achivIconsArray[i].header0 = tempAchivHeader;
			achivIconsArray[i].about0 = tempAchivAbout;
			
			achivParent.addChild(achivIconsArray[i]);
			
		}
		
		wndLayer.addChild(achivParent);
		
		if (isAchiv2 == 1)
		{
			StartTutorialAchiv(2);
		
		}
		
		
	}
	
	function DelAchivMenu()
	{
		
		
		greyBack.visible = false;
		
		wndLayer.removeChild(bAchivLeft);
		wndLayer.removeChild(bAchivRight);
		wndLayer.removeChild(bAchivMain);
		wndLayer.removeChild(achivParent);
		wndLayer.removeChild(AchivHeader);
		
		AchivHeader.destroy();
		bAchivMain.kill();
		bAchivLeft.kill();
		bAchivRight.kill();
		
		for (var i=1;i<=achivAllCount;i++)
		{
		
			achivIconsArray[i].icon0.kill();
			achivIconsArray[i].header0.destroy();
			achivIconsArray[i].about0.destroy();
			achivIconsArray[i].kill();
			achivIconsArray[i] =  null;
		}
		
		achivParent.kill();
	}
	
	
	
	function RestartGame()
	{
		KillOldGame();
		
		//alert(sndOn+" "+musicOn);
		if (bOpt != null) bOpt.visible = true;
		
		if (musicOn==1) PlayMusic();	
		firstDropLevel = 0;
		c5chain = 0;
		c15chain = 0;
		c20chain = 0;
		gamePaused = 0;
		moveState = 0;
		dropCap = dropCapStart;
		SetDropCount(dropCap);
		scores = 0;
		SetScores(scores);
		bestCombo = 0;
		levelNum = 1;
		SetLevel();
		AddWnd(-1,AddNextLevelWindow);
					
	}
	
	function PauseGame()
	{
		gamePaused = 1;
		if (tweenMove != null)
			tweenMove.pause();
		
			if (movesDrops.length>0)
			for (var i = movesDrops.length - 1; i > -1; i--) 
			{
			 if (movesDrops[i].tween1 != null) movesDrops[i].tween1.pause();
			}
			
	}
	
	function ResumeGame()
	{
		gamePaused = 0;
		
		if (tweenMove != null)
			tweenMove.resume();
		
		if (movesDrops.length>0)
			for (var i = movesDrops.length - 1; i > -1; i--) 
			{
			 if (movesDrops[i].tween1 != null) movesDrops[i].tween1.resume();
			}
	}

		function NewStep(i,j)
		{
		
		  tick = 0;
		  spNull = game.add.sprite(0, 0, null);
		  
		  if (isTutorial>0)
		  {
			HideTutorial();
		  }
		  
		  if (i>=0 && i<fieldW && j>=0 && j<fieldH)
		  {
		
			if (blobsArray[i*fieldW+j].state>=0 && blobsArray[i*fieldW+j].state<4)
			{
				var newState = blobsArray[i*fieldW+j].state + 1;
				SetCellState(i,j,newState);
						
				if (newState == 4)
				{
					moveState = 1;
					dropsOnLevel++;
					tweenMove = game.add.tween(spNull).to({x:100,y:0}, timeDelta, Phaser.Easing.Linear.None,false,0,10000);
			    	tweenMove.onLoop.add(EndStep,this);
					tweenMove.start();
					AddPop(blobsArray[i*fieldW+j]);
					RemoveBlob(i,j);
					AddScore(100);
					combo = 0;
					combo++;
					var e = {i:i,j:j};
					AddDropTo(e,"up");
					AddDropTo(e,"down");
					AddDropTo(e,"left");
					AddDropTo(e,"right");
					
				}
				else
				{
					if (dropCap == 0) ShowDropOut();
				}
			}
		  
		   }	
		}
		
		function AddToBlob(i)
		{
			if (blobsArray[i].state>=0)
			{
				var newState = blobsArray[i].state + 1;
				SetCellState(~~(i/fieldW),i % fieldW,newState);
				if (newState == 4)
				{
					AddPop(blobsArray[i]);
					AddScore(100);
					RemoveBlob(~~(i/fieldW),i % fieldW);
					var e = {i:~~(i/fieldW),j:i % fieldW};
					AddDropTo(e,"up");
					AddDropTo(e,"down");
					AddDropTo(e,"left");
					AddDropTo(e,"right");
					combo++;
					SetComboEmotion();
				}
			
			}
		}
		
		function SetComboEmotion()
		{
			if (combo == 0) 	emotionImg.frameName = comboMultiFrames[0];
			if (combo >= 3) 	emotionImg.frameName = comboMultiFrames[1];
			if (combo >= 12) 	emotionImg.frameName = comboMultiFrames[2];
			if (combo >= 18) 	emotionImg.frameName = comboMultiFrames[3];
		}
			
		function RemoveBlob(i,j)
		{
				
		  blobsArray[i*fieldW+j].state = -1;
		 	  
		  if (blobsArray[i*fieldW+j].anim1 != null) blobsArray[i*fieldW+j].anim1.stop();
		    blobsArray[i*fieldW+j].visible = false;
		  
		}
	
		function EndStep()
		{
		tick++;
			var tmp = {};
			tmp.i = tick % 6;	
			tmp.j = ~~(tick / 6);
		
			for (var i = movesDrops.length - 1; i > -1; i--) {
			
				if (movesDrops[i].i>=0 && movesDrops[i].i<fieldW && movesDrops[i].j>=0 && movesDrops[i].j<fieldH)
				{
			
						if (blobsArray[movesDrops[i].i*fieldW+movesDrops[i].j].state >= 0)
						{
							AddToBlob(movesDrops[i].i*fieldW+movesDrops[i].j);
							DrpEnd(movesDrops[i]);
							movesDrops.splice(i, 1);
						}
						else
						{
							
								ContinueDrop(movesDrops[i]);
							
						}
					
				}
				else
				{
					
					DrpEnd(movesDrops[i]);
					movesDrops.splice(i, 1);
				}
			
			}

			
			
			if (movesDrops.length == 0)	
			{
				tweenMove.stop();
				moveState = 0;
				SetCombo();
			}
		
		}
		
		function SetCombo()
		{
		
			var combo1 = combo;
			
			
			
			CheckAchiv();
		
			if (combo > 2)
			{
				PauseGame();
				if (combo>bestCombo) bestCombo = combo;
				
				if (combo>=5) { c5chain++; } else { c5chain = 0;}
				if (combo>=15) { c15chain++; } else {c15chain = 0;}
				if (combo>=20) { c20chain++; } else {c20chain = 0;}
			
				
				AddWnd(-2,AddComboWindow);
				
				
			}
			else
			{
				c5chain = 0;
				c15chain = 0;
				c20chain = 0;
			}
			
			ComboAchiv(combo1);
			ComboChainAchiv();
			
			CheckLevelEnd(combo1);
		}
		
		function SaveTutorialAchivData()
		{
		
		
		}
		
		function SaveData()
		{
		
			for (var i=0;i<achivCount;i++)
			{
				
				localStorage.setItem("a"+i,achivStateArray[i]);
			}
		
			if (watchTutorial == 0)
			{
				localStorage.setItem("tutor",isTutorial);
				localStorage.setItem("combotutor",comboTutorial);
			}
			else
			{
				localStorage.setItem("tutor",0);
				localStorage.setItem("combotutor",0);
			}
			
			localStorage.setItem("a1tutor",isAchiv1);
			localStorage.setItem("a2tutor",isAchiv2);
			localStorage.setItem("a3tutor",isAchiv3);
			
			
		}
		
		function ClearData()
		{
			for (var i=0;i<achivCount;i++) 	achivStateArray[i] = 0;
			
			isTutorial = 1;
			comboTutorial = 0;
			isAchiv1 = 0;
			isAchiv2 = 0;
			isAchiv3 = 0;
			
			SaveData();
		}
		
		function LoadData()
		{
			var firstRun = false;
			
			for (var i=0;i<achivCount;i++)
			{
				if (localStorage.getItem("a"+i)!= null && localStorage.getItem("a"+i)!= undefined)
				{
					achivStateArray[i] = localStorage["a"+i];
				
				}
				else
				{
					achivStateArray[i] = 0;
					firstRun = true;
				}
				
			}
			
			if (localStorage.getItem("tutor")!= null && localStorage.getItem("tutor")!= undefined)
			{
				isTutorial =  localStorage["tutor"];
			}
			
			if (localStorage.getItem("combotutor")!= null && localStorage.getItem("combotutor")!= undefined)
			{
				comboTutorial =  localStorage["combotutor"];
			}
			
			if (localStorage.getItem("a1tutor")!= null && localStorage.getItem("a1tutor")!= undefined)
			{
				isAchiv1 =  localStorage["a1tutor"];
			}
			
			if (localStorage.getItem("a2tutor")!= null && localStorage.getItem("a2tutor")!= undefined)
			{
				isAchiv2 =  localStorage["a2tutor"];
			}
			
			if (localStorage.getItem("a3tutor")!= null && localStorage.getItem("a3tutor")!= undefined)
			{
				isAchiv3 =  localStorage["a3tutor"];
			}
			
			if (firstRun == true) SaveData();
		}
		
		function AddPopAchiv()
		{
			if (isTutorial == 0 && comboTutorial == 0)
			{
				if (achivStateArray[0] >-1) achivStateArray[0]++;
				if (achivStateArray[1] >-1) achivStateArray[1]++;
				if (achivStateArray[2] >-1) achivStateArray[2]++;
			}
			//CheckAchiv();
		
		}
		
		function AddScoreAchiv()
		{
			if (isTutorial == 0 && comboTutorial == 0 )
			{
				if (achivStateArray[3] >-1) achivStateArray[3]=scores;
				if (achivStateArray[4] >-1) achivStateArray[4]=scores;
				if (achivStateArray[5] >-1) achivStateArray[5]=scores;
			}
			//CheckAchiv();
		}
		
		function DropCountAchiv()
		{
			if (isTutorial == 0 && comboTutorial == 0)
			{
				if (achivStateArray[12] >-1) achivStateArray[12] = dropCap;
				if (achivStateArray[13] >-1) achivStateArray[13] = dropCap;
				if (achivStateArray[14] >-1) achivStateArray[14] = dropCap;
				
				CheckAchiv();
			}
		}
		
		function LevelAchiv()
		{
			if (isTutorial == 0 && comboTutorial == 0)
			{
				if (achivStateArray[6] >-1) achivStateArray[6] = levelNum;
				if (achivStateArray[7] >-1) achivStateArray[7] = levelNum;
				if (achivStateArray[8] >-1) achivStateArray[8] = levelNum;
				
				CheckAchiv();
			}
		}
		
		function FirstDropAchiv()
		{
			if (firstDropLevel>=1 && isTutorial == 0 && comboTutorial == 0)
			{
				if (achivStateArray[15] >-1) achivStateArray[15] = firstDropLevel;
				if (achivStateArray[16] >-1) achivStateArray[16] = firstDropLevel;
				if (achivStateArray[17] >-1) achivStateArray[17] = firstDropLevel;
			
				CheckAchiv();
			}
		}
		
		function ComboAchiv(combo1)
		{
			if (isTutorial == 0 && comboTutorial == 0)
			{
				if (achivStateArray[9] >-1) achivStateArray[9] = combo1;
				if (achivStateArray[10] >-1) achivStateArray[10] = combo1;
				if (achivStateArray[11] >-1) achivStateArray[11] = combo1;
				
				CheckAchiv();
			}
		}
		
		function ComboChainAchiv()
		{
			if (isTutorial == 0 && comboTutorial == 0)
			{
				if (achivStateArray[18] >-1) achivStateArray[18] = c5chain;
				if (achivStateArray[19] >-1) achivStateArray[19] = c15chain;
				if (achivStateArray[20] >-1) achivStateArray[20] = c20chain;
				
				CheckAchiv();
			}
		}
		
		function CheckAchiv()
		{
			if (isTutorial == 0 && comboTutorial == 0)
			{
				for (var i=0;i<achivCount;i++)
				{
					if (achivStateArray[i]  >= achivLimitArray[i]) 
					{
						achivStateArray[i] = -1;
						SaveData();
						AddWnd(i,AddAchivWindow);
					}
				}
				
			}
		
		}
		
		function OnEndAchivWindow()
		{
		
		}
		
		function CheckLevelEnd(combo1)
		{
			var endLevel = 0;
			
			if (dropCap >= 0 )
			{
				
				for (var k=0; k<fieldH*fieldW; k++)
				{
					if (blobsArray[k].state>=0 && blobsArray[k].state<4) 
					{
						endLevel = 1;
						break;
					}
				}
				
				if (endLevel == 0)
				{
					if (comboTutorial == 0)
					{
						levelNum++;
					
						if (dropsOnLevel == 1 && firstDropLevel >-1)
						{
							firstDropLevel++;
						}
						
						
							AddWnd(-1,AddNextLevelWindow);
				
						
					}
					else
					{
						AddWnd(-3,AddEndTutorialWindow);
					}
				}
				else
				{	
					if (dropCap == 0 && combo1<3)
					{
						ShowDropOut();
					}
				}
				
				
			}
			else
			{
				if (combo1<3)
				{
					ShowDropOut();
				}
			}
		}
		
		function DropLoop(e)
		{
			
		}
		
		function SetCellState(i,j,state)
		{
		
		if (state<4 && state >=0)
		{
			if (state==0)
			{
			blobsArray[i*fieldW+j].frameName = blobsFrames[state];
			
		  }
		  
		  else
		  {
		  
		  if (blobsArray[i*fieldW+j].anim1 != null ) blobsArray[i*fieldW+j].anim1.stop();
		  
		  if (state == 1) blobsArray[i*fieldW+j].anim1 = blobsArray[i*fieldW+j].animations.add('w1',[1,2,3,4,5,6]); 
		  if (state == 2) blobsArray[i*fieldW+j].anim1= blobsArray[i*fieldW+j].animations.add('w2',[7,8,9,10,11,12]);
		  if (state == 3) blobsArray[i*fieldW+j].anim1 = blobsArray[i*fieldW+j].animations.add('w3',[13,14,15,16,17,18]);		  
			
			blobsArray[i*fieldW+j].anim1.play(60,false);
			blobsArray[i*fieldW+j].tween1 = game.add.tween(blobsArray[i*fieldW+j]).to({x:blobsArray[i*fieldW+j].x,y:blobsArray[i*fieldW+j].y}, 100, Phaser.Easing.Linear.None);
			blobsArray[i*fieldW+j].tween1.onComplete.add(BlobEnd,this);
			blobsArray[i*fieldW+j].tween1.start();
		  }
		  
		   blobsArray[i*fieldW+j].state = state;
		  }
		 
		}
		
		
		
		function AddOptionsButton()
		{
			if (bOpt == null)
			{
				bOpt = game.add.button(760, 560, 'blob', ClickOpt, this, "button-options.png","button-options.png","button-options.png");
				bOpt.anchor.setTo(0.5, 0.5);
				cellLayer.addChild(bOpt);
			}
			else
			{
				bOpt.visible = true;
			}
		}
		
		function DelOptionsButton()
		{
			bOpt.visible = false;
		}
		
		function ClickOpt()
		{
			if (wndArray.length == 0)
			{
		
				SndClick();
				
				if (gamePaused == 0)
				{
					AddPauseMenu();
					PauseGame();
				}
				else
				if (gamePaused == 1 && pausedMenuOpen == 1)
				{
					DelPauseMenu();
					ResumeGame();
				}
			}
			
		}
		
		
		function GetCellState(i,j)
		{
			GetCellState = blobsArray[i*fieldW+j].state;
		}
	
		function ClickListener(e)
		{
			
			if (moveState == 0 && gamePaused == 0 && dropCap >0 )
				{
					if (isTutorial == 0 || (isTutorial > 0 && tutorialTarget.i == e.i && tutorialTarget.j == e.j && tutorialTweenStartFinished == 1))
					{
					 dropCap--;
					 SetDropCount(dropCap);
					 NewStep(e.i,e.j);
					}
				}
		
		}
		
		function SetDropCount(val)
		{
			if (dropsText != null)
			{
				dropsText.setText("x"+dropCap);
				DropCountAchiv();
			}
		}
		
		function AddScore(val)
		{
			scores += val;
			AddScoreAchiv();
			SetScores(scores);
		}
		
		function SetScores()
		{
			if (scoreText != null)
			{
				scoreText.setText(""+scores);
				scoreText.x = 690-scoreText.width/2;
			}
		}
		
		function SetLevel()
		{
			if (levelText != null)
			{
				if (isTutorial == 0)
				{
				levelText.setText(curLangArray[1]+" "+levelNum);
				levelText.x = 690 - levelText.width/2;
				LevelAchiv();
				FirstDropAchiv();
				}
				else
				{
					levelText.setText(curLangArray[0]);
					levelText.x = 690 - levelText.width/2;
				}
			}
		}
		
		function AddPop(e1)
		{
			SndPop();
					
			if (popsArray[e1.j+fieldW*e1.i] != null)
			{
				popsArray[e1.j+fieldW*e1.i].visible = true;
				popsArray[e1.j+fieldW*e1.i].anim1.play(60,false);
				
			
			}
			
			
			AddPopAchiv();
			
		}
		
		function EndPop(e)
		{
			//alert(e);
			e.visible = false;
			//e.kill();
			//e = null;
		}
				
		function ContinueDrop(drp)
		{
			drp.e1 = {i:drp.i,j:drp.j};
				
			if (drp.dir == "up") drp.j = drp.j - 1;
			if (drp.dir == "down") drp.j = drp.j + 1;
			if (drp.dir == "left") drp.i = drp.i - 1;
			if (drp.dir == "right") drp.i = drp.i + 1;
			
			
			
		}
		
		function AddDropTo(e1,dir)
		{
			var tmp = CellToWorld(e1);
			var e2 = {i:e1.i,j:e1.j};
			var e3 = {i:e1.i,j:e1.j};
			e2.i = e1.i;
			e2.j = e1.j;
		
			if (dir == "up") { e2.j = e1.j - 1; e3.j = e1.j - 10; }
			if (dir == "down") { e2.j = e1.j + 1; e3.j = e1.j + 10; }
			if (dir == "left") { e2.i = e1.i - 1; e3.i = e1.i - 10; }
			if (dir == "right") { e2.i = e1.i + 1; e3.i = e1.i + 10; }
	
			var drp;

			//drp= game.add.sprite(tmp.x,tmp.y, 'blob');
			/*	
			if (e1.i != e2.i)
			{
			//drp.frameName = "side-drop1.png";
			drp = game.add.sprite(tmp.x,tmp.y, 'side1');
			}
			else
			{
			//drp.frameName = "side-drop2.png";
			//drp = game.add.sprite(tmp.x,tmp.y, 'side2');
			drp = game.add.sprite(tmp.x,tmp.y, 'side1');
			drp.rotation = 3.1415/2;
			}
			
			 drp.anchor.setTo(0.5, 0.5);
			 
			 */
			 
			 var foundDrop = false;
			 
			 for (var k=0;k<dropArray.length;k++)
			 {
				if (dropArray[k].visible == false)
				{
					
					drp = dropArray[k];
					drp.k = k;
					foundDrop = true;
					break;
						
				}
			 
			 }
			 
			 if (foundDrop == false) 
			 {
				drp = AddToDropArray();
				drp.k = dropArray.length-1;
			 }
			 
			 if (e1.i != e2.i)
			{
				drp.rotation = 0;
			}
			else
			{
				drp.rotation = 3.1415/2;
			}
			 
			drp.x =tmp.x;
			drp.y = tmp.y; 
			 
			 drp.visible = true;
			 
			 drp.i = e2.i;
			 drp.j = e2.j;
			 drp.e1 = e1;
			 drp.dir = dir;
			 movesDrops.push(drp);
			 popsLayer.addChild(movesDrops[movesDrops.length-1]);
			 movesDrops[movesDrops.length-1].tween1 = game.add.tween(movesDrops[movesDrops.length-1]).to(CellToWorld(e3), timeDelta*10, Phaser.Easing.Linear.None);
			movesDrops[movesDrops.length-1].tween1.start();
			
		}
   
		function DrpEnd(e)
		{
			if (e.tween1 != null)
			{
				e.tween1.stop();
				e.tween1._manager.remove(e.tween1);
				e.tween1 = null;
				
			}
		
			popsLayer.removeChild(e);
			//e.kill();
			//e = null;
			e.visible = false;
		}		
		
		function BlobEnd(e)
		{
			if (e.tween1 != null)
			{
				e.tween1._manager.remove(e.tween1);
				e.tween1 = null;
			}
			
			if (e.anim1 != null) e.anim1.stop();
			e.anim1 = null;
		
			
			e.frameName = blobsFrames[e.state];
		}		
	
		function CellToWorld(e)
		{
			var tmp = {};
			tmp.x = e.i*cellW+cellOffsetX;
			tmp.y = e.j*cellH+cellOffsetY;
			
			return tmp;
		}

    function update () 
	{
	
		//if (fps_txt != null) fps_txt.setText(game.time.fps);
	
		
	 }
	
	function render()
	{
	
	}
		

    function setScale() {
     
	 BlobGame.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		resizeGame();
			
	  
		BlobGame.game.scale.refresh();
		
    }

  
var levels = [

//ÃŒÃ¨Ã­Ã¨Ã¬Ã³Ã¬ 3ÃªÃ¨
{ num:1,
drops:12,
last:1,
coefficient:3.2,
min:3
},

{ num:2,
drops:12,
last:1,
coefficient:3.2,
min:3
},

{ num:3,
drops:12,
last:1,
coefficient:3.1,
min:3
},
//ÃŒÃ¨Ã­Ã¨Ã¬Ã³Ã¬ Ã¤Ã¢Ã®Ã©ÃªÃ¨
{ num:4,
drops:20,
last:1,
coefficient:2.9,
min:2
},

{ num:5,
drops:20,
last:1,
coefficient:2.9,
min:2
},

{ num:6,
drops:20,
last:1,
coefficient:2.85,
min:2
},


//ÃÃ®Ã«Ã­Ã»Ã© Ã­Ã Ã¡Ã®Ã°
{ num:7,
drops:30,
last:3,
coefficient:2.4,
},

{ num:8,
drops:30,
last:3,
coefficient:2.4,
},

{ num:9,
drops:30,
last:3,
coefficient:2.4,
},



//Ã¤Ã¢Ã®Ã©ÃªÃ¨
{ num:10,
drops:20,
last:8,
coefficient:2,
min:2
},

{ num:11,
drops:20,
last:8,
coefficient:2,
min:2
},

{ num:12,
drops:20,
last:8,
coefficient:2,
min:2
},


//ÃÃ®Ã«Ã­Ã»Ã© Ã­Ã Ã¡Ã®Ã°
{ num:13,
drops:30,
last:3,
coefficient:2.36
},

{ num:14,
drops:30,
last:3,
coefficient:2.36
},

{ num:15,
drops:30,
last:3,
coefficient:2.36
},



//Ã¡Ã®Ã«Ã¼Ã¸Ã¨Ã¥+Ã¬Ã¥Ã«ÃªÃ¨Ã¥
{ num:16,
drops:30,
last:14,
coefficient:2.3
},

{ num:17,
drops:30,
last:14,
coefficient:2.3
},

{ num:18,
drops:30,
last:13,
coefficient:2.3
},

//18 ÃªÃ Ã¯Ã¥Ã«Ã¼
{ num:19,
drops:15,
last:1,
coefficient:2.88,

},

{ num:20,
drops:15,
last:1,
coefficient:2.88,

},

//Ã¤Ã¢Ã®Ã©ÃªÃ¨
{ num:21,
drops:24,
last:7,
coefficient:2,
min:2
},

{ num:22,
drops:24,
last:7,
coefficient:2,
min:2
},

//ÃÃ®Ã«Ã­Ã»Ã© Ã­Ã Ã¡Ã®Ã°

{ num:23,
drops:30,
last:4,
coefficient:2.26,
},

{ num:24,
drops:30,
last:4,
coefficient:2.26,
},


//ÃÃŽÃ«Ã¼Ã¸Ã¨Ã¥+Ã¬Ã¥Ã«ÃªÃ¨Ã¥
{ num:25,
drops:30,
last:13,
coefficient:2.3
},

{ num:26,
drops:30,
last:13,
coefficient:2.3
},

//Ã¦Ã¥Ã±Ã²ÃªÃ¨Ã¥ Ã¤Ã¢Ã®Ã©ÃªÃ¨ 
{ num:27,
drops:24,
last:5,
coefficient:2,
min:2
},

{ num:28,
drops:24,
last:5,
coefficient:2,
min:2
},

//ÃÃ®Ã«Ã­Ã»Ã© Ã­Ã Ã¡Ã®Ã°

{ num:29,
drops:29,
last:4,
coefficient:2.24,
},

{ num:30,
drops:29,
last:4,
coefficient:2.24,
},

//ÃÃŽÃ«Ã¼Ã¸Ã¨Ã¥+Ã¬Ã¥Ã«ÃªÃ¨Ã¥
{ num:31,
drops:30,
last:13,
coefficient:2.3
},

{ num:32,
drops:30,
last:13,
coefficient:2.3
},

{ num:33,
drops:30,
last:13,
coefficient:2.3
},

//ÃÃ®Ã«Ã­Ã»Ã© Ã­Ã Ã¡Ã®Ã°

{ num:34,
drops:29,
last:4,
coefficient:2.2,
},

{ num:35,
drops:29,
last:4,
coefficient:2.2,
},

{ num:36,
drops:29,
last:4,
coefficient:2.2,
},

//ÃÃŽÃ«Ã¼Ã¸Ã¨Ã¥+Ã¬Ã¥Ã«ÃªÃ¨Ã¥
{ num:37,
drops:30,
last:13,
coefficient:2.3
},

{ num:38,
drops:30,
last:13,
coefficient:2.3
},

{ num:39,
drops:30,
last:13,
coefficient:2.3
},
//ÃÃ®Ã«Ã­Ã»Ã© Ã­Ã Ã¡Ã®Ã°
{ num:40,
drops:29,
last:4,
coefficient:2.2,
},

];