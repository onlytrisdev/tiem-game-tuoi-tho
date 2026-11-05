////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	var gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas");
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tick);	
}

var guide = false;
var canvasContainer, mainContainer, gameContainer, confirmContainer, resultContainer, ballsContainer;
var guideline, bg, logo, buttonStart, buttonContinue, buttonFacebook, buttonTwitter, buttonGoogle, buttonFullscreen, buttonSoundOn, buttonSoundOff;

$.stats = {};
$.team = {};
$.player = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	var _frameW = 25;
	var _frameH = 45;
	
	var _frame = {"regX": 12, "regY": 35, "height": _frameH, "count": 26, "width": _frameW};
	var _animations = {down:{frames: [0], speed:1},
					downrun:{frames: [1,2], speed:.3, next:'downrun'},
					downkick:{frames: [3], speed:.3},
					downtackle:{frames: [4], speed:.3},
					up:{frames: [5], speed:1},
					uprun:{frames: [6,7], speed:.3, next:'uprun'},
					upkick:{frames: [8], speed:.3},
					uptackle:{frames: [9], speed:.3},
					left:{frames: [10], speed:1},
					leftrun:{frames: [11,12], speed:.3, next:'leftrun'},
					leftkick:{frames: [13], speed:.3},
					lefttackle:{frames: [14], speed:.3},
					right:{frames: [15], speed:1},
					rightrun:{frames: [16,17], speed:.3, next:'rightrun'},
					rightkick:{frames: [18], speed:.3},
					righttackle:{frames: [19], speed:.3},
					homesave:{frames: [20], speed:.3},
					homesaveup:{frames: [21], speed:.3},
					homesavedown:{frames: [22], speed:.3},
					awaysave:{frames: [23], speed:.3},
					awaysaveup:{frames: [24], speed:.3},
					awaysavedown:{frames: [25], speed:.3}};
					
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	gamePlayContainer = new createjs.Container();
	selectContainer = new createjs.Container();
	instructionContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	
	scoreContainer = new createjs.Container();
	scorePenaltyContainer = new createjs.Container();
	ballContainer = new createjs.Container();
	fieldContainer = new createjs.Container();
	fieldGuideContainer = new createjs.Container();
	shadowContainer = new createjs.Container();
	playersContainer = new createjs.Container();
	optionsContainer = new createjs.Container();
	statusContainer = new createjs.Container();
	iconContainer = new createjs.Container();
	
	confirmContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	statsContainer = new createjs.Container();
	
	bg = new createjs.Bitmap(loader.getResult('background'));
	logo = new createjs.Bitmap(loader.getResult('logo'));
	
	buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
	centerReg(buttonStart);
	buttonStart.x = canvasW/2;
	buttonStart.y = canvasH/100 * 77;
	
	buttonSideHome = new createjs.Bitmap(loader.getResult('buttonSideHome'));
	centerReg(buttonSideHome);
	buttonSideAway = new createjs.Bitmap(loader.getResult('buttonSideAway'));
	centerReg(buttonSideAway);
	
	itemGameplay = new createjs.Bitmap(loader.getResult('itemGameplay'));
	
	var spacing = 80;
	buttonQuickMatch = new createjs.Bitmap(loader.getResult('buttonQuickMatch'));
	centerReg(buttonQuickMatch);
	buttonQuickMatch.x = canvasW/2;
	buttonQuickMatch.y = canvasH/100 * 45;
	
	// buttonChampionship = new createjs.Bitmap(loader.getResult('buttonChampionship'));
	// centerReg(buttonChampionship);
	// buttonChampionship.x = canvasW/2;
	// buttonChampionship.y = buttonQuickMatch.y + spacing;
	
	buttonPenaltykick = new createjs.Bitmap(loader.getResult('buttonPenaltykick'));
	centerReg(buttonPenaltykick);
	buttonPenaltykick.x = canvasW/2;
	buttonPenaltykick.y = buttonQuickMatch.y + spacing;
	
	buttonInstructions = new createjs.Bitmap(loader.getResult('buttonInstructions'));
	centerReg(buttonInstructions);
	buttonInstructions.x = canvasW/2;
	buttonInstructions.y = buttonPenaltykick.y + spacing;
	
	//instruction
	itemInstruction = new createjs.Bitmap(loader.getResult('itemInstruction'));
	itemInstructionMobile = new createjs.Bitmap(loader.getResult('itemInstructionMobile'));
	itemInstructionDesktop = new createjs.Bitmap(loader.getResult('itemInstructionDesktop'));
	
	buttonOk = new createjs.Bitmap(loader.getResult('buttonOk'));
	centerReg(buttonOk);
	buttonOk.x = canvasW/2;
	buttonOk.y = canvasH/100 * 80;
	
	//select
	itemSelect = new createjs.Bitmap(loader.getResult('itemSelect'));
	
	itemTeamSelect = new createjs.Bitmap(loader.getResult('itemTeamSelect'));
	centerReg(itemTeamSelect);
	itemTeamSelect.x = -200;
	
	buttonTeamContinue = new createjs.Bitmap(loader.getResult('buttonContinue'));
	centerReg(buttonTeamContinue);
	createHitarea(buttonTeamContinue);
	buttonTeamContinue.x = canvasW/2;
	buttonTeamContinue.y = canvasH/100 * 81;
	
	selectContainer.addChild(itemSelect, itemTeamSelect, buttonTeamContinue, buttonSideHome, buttonSideAway);
	
	var teamStartX = 370;
	var teamStartY = 290;
	var teamX = teamStartX;
	var teamY = teamStartY;
	var teamSpaceX = 110;
	var teamSpaceY = 100;
	var teamColumnCount = 0;
	var teamRowCount = 0;
	
	var labelW = 120;
	var labelH = 30;
	for(var n=0; n<team_arr.length; n++){
		$.team[n] = new createjs.Bitmap(loader.getResult('team'+n));
		centerReg($.team[n]);
		
		$.team[n].x = teamX;
		$.team[n].y = teamY;
		$.team[n].clickNum = n;
		
		var teamLabelBg = new createjs.Shape();
		teamLabelBg.graphics.beginFill('#0f3848').drawRect(-(labelW/2), -(labelH/2), labelW, labelH);
		teamLabelBg.x = teamX;
		teamLabelBg.y = teamY+33;
		
		var teamLabelTxt = new createjs.Text();
		teamLabelTxt.font = "22px kroftsmannregular";
		teamLabelTxt.color = "#fff";
		teamLabelTxt.textAlign = "center";
		teamLabelTxt.textBaseline='alphabetic';
		teamLabelTxt.text = team_arr[n].name;
		teamLabelTxt.lineHeight = 40;
		teamLabelTxt.x = teamLabelBg.x;
		teamLabelTxt.y = teamLabelBg.y+8;
		
		$.team[n].labelBg = teamLabelBg;
		$.team[n].labelTxt = teamLabelTxt;
		
		$.team[n].labelBg.visible = $.team[n].labelTxt.visible = false;
		
		teamX += teamSpaceX;
		teamColumnCount++;
		if(teamColumnCount > 5){
			teamColumnCount = 0;
			teamX = teamStartX;
			teamY += teamSpaceY;
			teamRowCount++;
			if(teamRowCount > 1){
				teamX += teamSpaceX;	
			}
		}
		
		selectContainer.addChild($.team[n], teamLabelBg, teamLabelTxt);
		
		//				
		var playerAnimateData = new createjs.SpriteSheet({
			"images": [loader.getResult('player'+n).src],
			"frames": _frame,
			"animations": _animations
		});
		
		$.player[n] = new createjs.Sprite(playerAnimateData, "rightrun");
		$.player[n].framerate = 20;
		$.player[n].x = $.team[n].x;
		$.player[n].y = $.team[n].y+11;
		$.player[n].visible = false;
		
		selectContainer.addChild($.player[n]);
	}
	
	//game
	itemBall = new createjs.Bitmap(loader.getResult('itemBall'));
	centerReg(itemBall);
	
	itemBallTo = new createjs.Bitmap(loader.getResult('itemBall'));
	centerReg(itemBallTo);
	itemBallTo.alpha = 1;
	
	itemBallShadow = new createjs.Bitmap(loader.getResult('itemBallShadow'));
	centerReg(itemBallShadow);
	
	itemBallDepth = new createjs.Bitmap(loader.getResult('itemBall'));
	centerReg(itemBallDepth);
	itemBallDepth.visible = false;
	
	itemGuideDirection = new createjs.Bitmap(loader.getResult('itemGuideDirection'));
	centerReg(itemGuideDirection);
	
	itemShot = new createjs.Bitmap(loader.getResult('itemShot'));
	
	itemField = new createjs.Bitmap(loader.getResult('itemField'));
	
	itemScoreboard = new createjs.Bitmap(loader.getResult('itemScoreboard'));
	centerReg(itemScoreboard);
	
	itemGoalpost = new createjs.Bitmap(loader.getResult('itemGoalpost'));
	
	itemStatusBar1 = new createjs.Bitmap(loader.getResult('itemStatusBar1'));
	centerReg(itemStatusBar1);
	itemStatusBar2 = new createjs.Bitmap(loader.getResult('itemStatusBar2'));
	centerReg(itemStatusBar2);
	itemStatusKickoff = new createjs.Bitmap(loader.getResult('itemStatusKickoff'));
	centerReg(itemStatusKickoff);
	itemStatusGoal = new createjs.Bitmap(loader.getResult('itemStatusGoal'));
	centerReg(itemStatusGoal);
	itemStatusFulltime = new createjs.Bitmap(loader.getResult('itemStatusFulltime'));
	centerReg(itemStatusFulltime);
	itemStatusMisses = new createjs.Bitmap(loader.getResult('itemStatusMisses'));
	centerReg(itemStatusMisses);
	itemStatusPenalty = new createjs.Bitmap(loader.getResult('itemStatusPenalty'));
	centerReg(itemStatusPenalty);
	itemStatusKickoff.visible = itemStatusGoal.visible = itemStatusFulltime.visible = itemStatusMisses.visible = itemStatusPenalty.visible = false;
	statusContainer.addChild(itemStatusBar1, itemStatusBar2, itemStatusKickoff, itemStatusGoal, itemStatusFulltime, itemStatusMisses, itemStatusPenalty);
	
	itemIconTackle = new createjs.Bitmap(loader.getResult('itemIconTackle'));
	centerReg(itemIconTackle);
	itemIconTackle.visible = false;
	
	itemIconSafe = new createjs.Bitmap(loader.getResult('itemIconSafe'));
	centerReg(itemIconSafe);
	itemIconSafe.visible = false;
	
	gameScoreTxt = new createjs.Text();
	gameScoreTxt.font = "30px kroftsmannregular";
	gameScoreTxt.color = "#fff";
	gameScoreTxt.textAlign = "center";
	gameScoreTxt.textBaseline='alphabetic';
	gameScoreTxt.text = '1 - 3';
	gameScoreTxt.lineHeight = 40;
	gameScoreTxt.y = -5;
	
	gameTeamHomeTxt = new createjs.Text();
	gameTeamHomeTxt.font = "30px kroftsmannregular";
	gameTeamHomeTxt.color = "#000";
	gameTeamHomeTxt.textAlign = "right";
	gameTeamHomeTxt.textBaseline='alphabetic';
	gameTeamHomeTxt.text = 'BLU';
	gameTeamHomeTxt.lineHeight = 40;
	gameTeamHomeTxt.x = -53;
	gameTeamHomeTxt.y = -5;
	
	gameTeamAwayTxt = new createjs.Text();
	gameTeamAwayTxt.font = "30px kroftsmannregular";
	gameTeamAwayTxt.color = "#000";
	gameTeamAwayTxt.textAlign = "left";
	gameTeamAwayTxt.textBaseline='alphabetic';
	gameTeamAwayTxt.text = 'RED';
	gameTeamAwayTxt.lineHeight = 40;
	gameTeamAwayTxt.x = 53;
	gameTeamAwayTxt.y = -5;
	
	gameTimeTxt = new createjs.Text();
	gameTimeTxt.font = "24px kroftsmannregular";
	gameTimeTxt.color = "#fff";
	gameTimeTxt.textAlign = "center";
	gameTimeTxt.textBaseline='alphabetic';
	gameTimeTxt.text = '00:00';
	gameTimeTxt.y = 29;
	
	teamHomeLogo = $.team[0].clone();
	teamAwayLogo = $.team[0].clone();
	
	itemScoreboardPenalty = new createjs.Bitmap(loader.getResult('itemScoreboardPenalty'));
	centerReg(itemScoreboardPenalty);
	
	homePenaltyScoreTxt = new createjs.Text();
	homePenaltyScoreTxt.font = "22px kroftsmannregular";
	homePenaltyScoreTxt.color = "#000";
	homePenaltyScoreTxt.textAlign = "right";
	homePenaltyScoreTxt.textBaseline='alphabetic';
	homePenaltyScoreTxt.text = '0';
	homePenaltyScoreTxt.lineHeight = 22;
	homePenaltyScoreTxt.x = -160;
	homePenaltyScoreTxt.y = 5;
	
	awayPenaltyScoreTxt = new createjs.Text();
	awayPenaltyScoreTxt.font = "22px kroftsmannregular";
	awayPenaltyScoreTxt.color = "#000";
	awayPenaltyScoreTxt.textAlign = "left";
	awayPenaltyScoreTxt.textBaseline='alphabetic';
	awayPenaltyScoreTxt.text = '0';
	awayPenaltyScoreTxt.lineHeight = 22;
	awayPenaltyScoreTxt.x = 160;
	awayPenaltyScoreTxt.y = 5;
	
	scorePenaltyContainer.addChild(itemScoreboardPenalty, homePenaltyScoreTxt, awayPenaltyScoreTxt);
	
	var startX = 62;
	var bulletRadius = 7;
	for(var n=0; n<5;n++){
		$.stats['penaltyHomeBg'+n] = new createjs.Shape();
		$.stats['penaltyHomeBg'+n].graphics.beginFill(playerPenaltyData.bgColor).drawCircle(0,0,bulletRadius);
		$.stats['penaltyHomeScore'+n] = new createjs.Shape();
		$.stats['penaltyHomeScore'+n].graphics.beginFill(playerPenaltyData.scoreColor).drawCircle(0,0,bulletRadius);
		$.stats['penaltyHomeMiss'+n] = new createjs.Shape();
		$.stats['penaltyHomeMiss'+n].graphics.beginFill(playerPenaltyData.missColor).drawCircle(0,0,bulletRadius);
		
		$.stats['penaltyAwayBg'+n] = new createjs.Shape();
		$.stats['penaltyAwayBg'+n].graphics.beginFill(playerPenaltyData.bgColor).drawCircle(0,0,bulletRadius);
		$.stats['penaltyAwayScore'+n] = new createjs.Shape();
		$.stats['penaltyAwayScore'+n].graphics.beginFill(playerPenaltyData.scoreColor).drawCircle(0,0,bulletRadius);
		$.stats['penaltyAwayMiss'+n] = new createjs.Shape();
		$.stats['penaltyAwayMiss'+n].graphics.beginFill(playerPenaltyData.missColor).drawCircle(0,0,bulletRadius);
		
		$.stats['penaltyHomeBg'+n].x = $.stats['penaltyHomeScore'+n].x = $.stats['penaltyHomeMiss'+n].x = -(startX);
		$.stats['penaltyAwayBg'+n].x = $.stats['penaltyAwayScore'+n].x = $.stats['penaltyAwayMiss'+n].x = (startX);
		
		startX += 17;
		$.stats['penaltyHomeBg'+n].y = $.stats['penaltyAwayBg'+n].y = $.stats['penaltyHomeScore'+n].y = $.stats['penaltyAwayScore'+n].y = $.stats['penaltyHomeMiss'+n].y = $.stats['penaltyAwayMiss'+n].y = -2;
		
		scorePenaltyContainer.addChild($.stats['penaltyHomeBg'+n], $.stats['penaltyAwayBg'+n], $.stats['penaltyHomeScore'+n], $.stats['penaltyAwayScore'+n], $.stats['penaltyHomeMiss'+n], $.stats['penaltyAwayMiss'+n]);
	}
	
	scorePenaltyContainer.y = 22;
	scoreContainer.addChild(scorePenaltyContainer, itemScoreboard, gameScoreTxt, gameTeamHomeTxt, gameTeamAwayTxt, gameTimeTxt, teamHomeLogo, teamAwayLogo);
	
	//goalkeeper
	playerAnimateData = new createjs.SpriteSheet({
		"images": [loader.getResult('itemPlayerAGoalkeeper').src],
		"frames": _frame,
		"animations": _animations
	});
	
	playerAnimateAGoalkeeper = new createjs.Sprite(playerAnimateData, "animate");
	playerAnimateAGoalkeeper.framerate = 20;
	playerAnimateAGoalkeeper.x = -200;
	
	playerAnimateData = new createjs.SpriteSheet({
		"images": [loader.getResult('itemPlayerBGoalkeeper').src],
		"frames": _frame,
		"animations": _animations
	});
	
	playerAnimateBGoalkeeper = new createjs.Sprite(playerAnimateData, "animate");
	playerAnimateBGoalkeeper.framerate = 20;
	playerAnimateBGoalkeeper.x = -200;
	
	
	//result
	itemResult = new createjs.Bitmap(loader.getResult('itemResult'));
	
	itemResultTitleGame = new createjs.Bitmap(loader.getResult('itemResultTitleGame'));
	centerReg(itemResultTitleGame);
	itemResultTitleGame.x = canvasW/2;
	itemResultTitleGame.y = canvasH/100 * 20;
	
	itemResultTitlePenalty = new createjs.Bitmap(loader.getResult('itemResultTitlePenalty'));
	centerReg(itemResultTitlePenalty);
	itemResultTitlePenalty.x = canvasW/2;
	itemResultTitlePenalty.y = canvasH/100 * 20;
	
	resultTitleTxt = new createjs.Text();
	resultTitleTxt.font = "50px kroftsmannregular";
	resultTitleTxt.color = "#666";
	resultTitleTxt.textAlign = "center";
	resultTitleTxt.textBaseline='alphabetic';
	resultTitleTxt.text = '';
	resultTitleTxt.x = canvasW/2;
	resultTitleTxt.y = canvasH/100 * 48;
	
	resultShareTxt = new createjs.Text();
	resultShareTxt.font = "23px kroftsmannregular";
	resultShareTxt.color = "#999";
	resultShareTxt.textAlign = "center";
	resultShareTxt.textBaseline='alphabetic';
	resultShareTxt.text = shareText;
	resultShareTxt.x = canvasW/2;
	resultShareTxt.y = canvasH/100 * 61;
	
	resultScoreTxt = new createjs.Text();
	resultScoreTxt.font = "57px kroftsmannregular";
	resultScoreTxt.color = "#fff";
	resultScoreTxt.textAlign = "center";
	resultScoreTxt.textBaseline='alphabetic';
	resultScoreTxt.text = '1 - 3';
	resultScoreTxt.x = canvasW/2;
	resultScoreTxt.y = canvasH/100 * 34;
	
	resultHomeTeamTxt = new createjs.Text();
	resultHomeTeamTxt.font = "57px kroftsmannregular";
	resultHomeTeamTxt.color = "#000";
	resultHomeTeamTxt.textAlign = "right";
	resultHomeTeamTxt.textBaseline='alphabetic';
	resultHomeTeamTxt.text = 'BLU';
	resultHomeTeamTxt.x = (canvasW/2) - 100;
	resultHomeTeamTxt.y = canvasH/100 * 34;
	
	resultAwayTeamTxt = new createjs.Text();
	resultAwayTeamTxt.font = "57px kroftsmannregular";
	resultAwayTeamTxt.color = "#000";
	resultAwayTeamTxt.textAlign = "left";
	resultAwayTeamTxt.textBaseline='alphabetic';
	resultAwayTeamTxt.text = 'RED';
	resultAwayTeamTxt.x = (canvasW/2) + 100;
	resultAwayTeamTxt.y = canvasH/100 * 34;
	
	buttonFacebook = new createjs.Bitmap(loader.getResult('buttonFacebook'));
	buttonTwitter = new createjs.Bitmap(loader.getResult('buttonTwitter'));
	buttonGoogle = new createjs.Bitmap(loader.getResult('buttonGoogle'));
	centerReg(buttonFacebook);
	createHitarea(buttonFacebook);
	centerReg(buttonTwitter);
	createHitarea(buttonTwitter);
	centerReg(buttonGoogle);
	createHitarea(buttonGoogle);
	buttonFacebook.x = canvasW/100 * 46;
	buttonTwitter.x = canvasW/2;
	buttonGoogle.x = canvasW/100 * 54;
	buttonFacebook.y = buttonTwitter.y = buttonGoogle.y = canvasH/100*65;
	
	buttonNext = new createjs.Bitmap(loader.getResult('buttonNext'));
	centerReg(buttonNext);
	createHitarea(buttonNext);
	buttonNext.x = canvasW/2;
	buttonNext.y = canvasH/100 * 79;
	
	buttonStatistic = new createjs.Bitmap(loader.getResult('buttonStatistic'));
	centerReg(buttonStatistic);
	createHitarea(buttonStatistic);
	buttonStatistic.x = canvasW/100 * 42;
	buttonStatistic.y = canvasH/100 * 79;
	
	buttonPenalty = new createjs.Bitmap(loader.getResult('buttonPenalty'));
	centerReg(buttonPenalty);
	createHitarea(buttonPenalty);
	buttonPenalty.x = canvasW/100 * 42;
	buttonPenalty.y = canvasH/100 * 79;
	
	buttonContinue = new createjs.Bitmap(loader.getResult('buttonContinue'));
	centerReg(buttonContinue);
	createHitarea(buttonContinue);
	buttonContinue.x = canvasW/100 * 58;
	buttonContinue.y = canvasH/100 * 79;
	
	itemStatistic = new createjs.Bitmap(loader.getResult('itemStatistic'));
	itemStatistic.x = 427;
	itemStatistic.y = 305;
	statsContainer.addChild(itemStatistic);
	
	var rangeNum = 140;
	var startY = 358;
	var spaceY = 30.5;
	for(var n = 0; n < 7; n++){
		$.stats[n+'Left'] = new createjs.Text();
		$.stats[n+'Left'].font = "20px kroftsmannregular";
		$.stats[n+'Left'].color = "#fff";
		$.stats[n+'Left'].textAlign = "center";
		$.stats[n+'Left'].textBaseline='alphabetic';
		$.stats[n+'Left'].text = '50 %';
		$.stats[n+'Left'].x = (canvasW/2) - rangeNum;
		$.stats[n+'Left'].y = startY;
		
		$.stats[n+'Right'] = new createjs.Text();
		$.stats[n+'Right'].font = "20px kroftsmannregular";
		$.stats[n+'Right'].color = "#fff";
		$.stats[n+'Right'].textAlign = "center";
		$.stats[n+'Right'].textBaseline='alphabetic';
		$.stats[n+'Right'].text = '50 %';
		$.stats[n+'Right'].x = (canvasW/2) + rangeNum;
		$.stats[n+'Right'].y = startY;	
		
		startY += spaceY;
		statsContainer.addChild($.stats[n+'Left'], $.stats[n+'Right']);
	}
	
	teamHomeLogoResult = $.team[0].clone();
	teamAwayLogoResult = $.team[0].clone();
	
	//option
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonOption = new createjs.Bitmap(loader.getResult('buttonOption'));
	centerReg(buttonOption);
	
	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonExit);
	createHitarea(buttonOption);
	
	//exit
	itemExit = new createjs.Bitmap(loader.getResult('itemExit'));
	
	buttonConfirm = new createjs.Bitmap(loader.getResult('buttonConfirm'));
	centerReg(buttonConfirm);
	buttonConfirm.x = canvasW/100* 42;
	buttonConfirm.y = canvasH/100 * 67;
	
	buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
	centerReg(buttonCancel);
	buttonCancel.x = canvasW/100 * 58;
	buttonCancel.y = canvasH/100 * 67;
	
	confirmMessageTxt = new createjs.Text();
	confirmMessageTxt.font = "35px kroftsmannregular";
	confirmMessageTxt.color = "#fff";
	confirmMessageTxt.textAlign = "center";
	confirmMessageTxt.textBaseline='alphabetic';
	confirmMessageTxt.text = '';
	confirmMessageTxt.lineHeight = 40;
	confirmMessageTxt.x = canvasW/2;
	confirmMessageTxt.y = canvasH/100 *47;
	
	confirmContainer.addChild(itemExit, buttonConfirm, buttonCancel, confirmMessageTxt);
	confirmContainer.visible = false;
	
	if(guide){
		guideline = new createjs.Shape();
		guideline.graphics.setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
	}
	
	mainContainer.addChild(logo, buttonStart);
	gamePlayContainer.addChild(itemGameplay, buttonQuickMatch, buttonPenaltykick, buttonInstructions);
	instructionContainer.addChild(itemInstruction, itemInstructionDesktop, itemInstructionMobile, buttonOk);
	playersContainer.addChild(ballContainer);
	shadowContainer.addChild(itemBallShadow);
	fieldContainer.addChild(itemField, fieldGuideContainer, shadowContainer, itemGuideDirection, playersContainer, itemShot, iconContainer, itemGoalpost);
	gameContainer.addChild(itemIconTackle, itemIconSafe, playerAnimateAGoalkeeper, playerAnimateBGoalkeeper, itemBallDepth, scoreContainer, statusContainer);
	resultContainer.addChild(itemResult, itemResultTitleGame, itemResultTitlePenalty, resultTitleTxt, resultScoreTxt, resultHomeTeamTxt, resultAwayTeamTxt, teamHomeLogoResult, teamAwayLogoResult, statsContainer, buttonStatistic, buttonPenalty, buttonNext, buttonContinue);
	
	if(shareEnable){
		resultContainer.addChild(resultShareTxt, buttonFacebook, buttonTwitter, buttonGoogle);
	}
	
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit);
	optionsContainer.visible = false;
	canvasContainer.addChild(bg, fieldContainer, mainContainer, gamePlayContainer, selectContainer, instructionContainer, gameContainer, resultContainer, confirmContainer, buttonOption, optionsContainer, guideline);
	stage.addChild(canvasContainer);
	
	resizeCanvas();
}


/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		scoreContainer.x = canvasW/2;
		scoreContainer.y = offset.y + 55;
		
		buttonOption.x = (canvasW - offset.x) - 40;
		buttonOption.y = offset.y + 35;
		
		var spaceNum = 50;
		if(curPage == 'game'){
			buttonExit.visible = true;
			buttonSoundOn.x = buttonSoundOff.x = buttonOption.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonOption.y + spaceNum + 5;
			
			buttonFullscreen.x = buttonOption.x;
			buttonFullscreen.y = buttonSoundOn.y + spaceNum;	
			
			buttonExit.x = buttonOption.x;
			buttonExit.y = buttonFullscreen.y + spaceNum;
		}else{
			buttonExit.visible = false;
			buttonSoundOn.x = buttonSoundOff.x = buttonOption.x;
			buttonSoundOn.y = buttonSoundOff.y = offset.y;
			buttonSoundOn.y = buttonSoundOff.y = buttonOption.y + spaceNum + 5;
			
			buttonFullscreen.x = buttonOption.x;
			buttonFullscreen.y = buttonSoundOn.y + spaceNum;
		}
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame();
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));
}