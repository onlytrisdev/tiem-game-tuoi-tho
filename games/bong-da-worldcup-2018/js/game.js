////////////////////////////////////////////////////////////
// GAME
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */
 
var soccerGameTime = 180000; //game total time
var gameStartSide = 'home'; //game start side (home / away)

var playerSpeed = {user:2.6, //user speed
					playerTeam:{player:2.5, goalkeeper:2.5}, //user player team speed
					oppositeTeam:{player:2.55, goalkeeper:2.6}, //opposite player team speed
					tackle:5}; //tackle speed

//result title
var resultWinText = 'CHÚC MỪNG!\nBẠN ĐÃ CHIẾN THẮNG!';
var resultDrawText = 'KẾT QUẢ\nHÒA!';
var resultLossText = 'BẠN HÃY CỐ GẮNG\nTHÊM NHÉ!';

//Social share, [SCORE] will replace with game score
var shareEnable = true; //toggle share
var shareText = 'FB.com/localhost'; //social share message
var shareTitle = ' ';//social share score title
var shareMessage = ' '; //social share score message
				
/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */

var gameData = {paused:true, type:'', side:'home', chooseSide:true, teamHomeID:0, teamAwayID:1, teamFlip:false};

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	itemInstructionDesktop.visible = itemInstructionMobile.visible = false
	if($.browser.mobile || isTablet){
		itemInstructionMobile.visible = true
	}else{
		itemInstructionDesktop.visible = true
	}
	
	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('gameplay');
	});
	
	
	buttonQuickMatch.cursor = "pointer";
	buttonQuickMatch.addEventListener("click", function(evt) {
		playSound('soundClick');
		gameData.type = 'quickmatch';
		goPage('select');
	});
	
	/*buttonChampionship.cursor = "pointer";
	buttonChampionship.addEventListener("click", function(evt) {
		playSound('soundClick');
		gameData.type = 'championship';
		goPage('select');
	});*/
	
	buttonPenaltykick.cursor = "pointer";
	buttonPenaltykick.addEventListener("click", function(evt) {
		playSound('soundClick');
		gameData.type = 'penaltykick';
		goPage('select');
	});
	
	buttonInstructions.cursor = "pointer";
	buttonInstructions.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('instruction');
	});
	
	buttonOk.cursor = "pointer";
	buttonOk.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('gameplay');
	});
	
	buttonTeamContinue.cursor = "pointer";
	buttonTeamContinue.addEventListener("click", function(evt) {
		if(gameData.teamHomeID != -1){
			playSound('soundClick');
			goPage('game');
		}
	});
	
	buttonContinue.cursor = "pointer";
	buttonContinue.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('main');
	});
	
	buttonFacebook.cursor = "pointer";
	buttonFacebook.addEventListener("click", function(evt) {
		share('facebook');
	});
	buttonTwitter.cursor = "pointer";
	buttonTwitter.addEventListener("click", function(evt) {
		share('twitter');
	});
	buttonGoogle.cursor = "pointer";
	buttonGoogle.addEventListener("click", function(evt) {
		share('google');
	});
	
	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleGameMute(true);
	});
	
	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleGameMute(false);
	});
	
	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
		toggleOption();
	});
	
	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		toggleConfirm(true);
		toggleOption();
	});
	
	buttonOption.cursor = "pointer";
	buttonOption.addEventListener("click", function(evt) {
		toggleOption();
	});
	
	buttonConfirm.cursor = "pointer";
	buttonConfirm.addEventListener("click", function(evt) {
		toggleConfirm(false);
		stopGame();
		goPage('main');
	});
	
	buttonCancel.cursor = "pointer";
	buttonCancel.addEventListener("click", function(evt) {
		toggleConfirm(false);
	});
	
	buttonNext.cursor = "pointer";
	buttonNext.addEventListener("click", function(evt) {
		toggleResult('share');
	});
	
	buttonStatistic.cursor = "pointer";
	buttonStatistic.addEventListener("click", function(evt) {
		toggleResult('stat');
	});
	
	buttonPenalty.cursor = "pointer";
	buttonPenalty.addEventListener("click", function(evt) {
		playSound('soundClick');
		soccerFieldData.continuePenalty = true;
		goPage('game');
	});
	
	for(var n=0; n<team_arr.length; n++){
		$.team[n].cursor = "pointer";
		$.team[n].addEventListener("click", function(evt) {
			selectTeam(evt.target.clickNum);
		});
	}
	
	buttonSideHome.cursor = "pointer";
	buttonSideHome.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleSide('away');
	});
	
	buttonSideAway.cursor = "pointer";
	buttonSideAway.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleSide('home');
	});
}

function selectTeam(id){
	gameData.teamFlip = false;
	gameData.teamHomeID = id;
	TweenLite.killTweensOf(itemTeamSelect);
	
	for(var n=0; n<team_arr.length; n++){
		$.team[n].visible = true;
		$.player[n].visible = false;
		
		$.team[n].labelBg.visible = $.team[n].labelTxt.visible = false;
		if(id == n){
			$.team[n].labelBg.visible = $.team[n].labelTxt.visible = true;	
			itemTeamSelect.x = $.team[n].x;
			itemTeamSelect.y = $.team[n].y;
			animateTeam(id);
		}
	}	
}

function animateTeam(id){
	TweenMax.to(itemTeamSelect, 1, {overwrite:true, onComplete:function(){
		if(!gameData.teamFlip){
			gameData.teamFlip = true;
			$.team[id].visible = false;	
			$.player[id].visible = true;
		}else{
			gameData.teamFlip = false;	
			$.team[id].visible = true;	
			$.player[id].visible = false;
		}
		
		animateTeam(id);
	}});	
}

function appendFocusFrame(){
	$('#mainHolder').prepend('<div id="focus" style="position:absolute; width:100%; height:100%; z-index:1000;"></div');
	$('#focus').click(function(){
		$('#focus').remove();
	});	
}

/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage=''
function goPage(page){
	curPage=page;
	
	mainContainer.visible = false;
	gamePlayContainer.visible = false;
	selectContainer.visible = false;
	instructionContainer.visible = false;
	gameContainer.visible = false;
	resultContainer.visible = false;
	
	var targetContainer = null;
	switch(page){
		case 'main':
			stopSoundLoop('musicGameEnd');
			playSoundLoop('musicGame');
			targetContainer = mainContainer;
			setMainCamera();
		break;
		
		case 'gameplay':
			targetContainer = gamePlayContainer;
			soccerFieldData.continuePenalty = false;
			soccerFieldData.penalty = false;
		break;
		
		case 'select':
			stopSoundLoop('musicGame');
			targetContainer = selectContainer;
			for(var n=0; n<team_arr.length; n++){
				$.team[n].visible = true;
				$.player[n].visible = false;
				$.team[n].labelBg.visible = $.team[n].labelTxt.visible = false;
			}
			gameData.teamHomeID = -1;
			
			buttonSideHome.visible = false;
			buttonSideAway.visible = false;
			
			buttonTeamContinue.x = canvasW/2;
			if(gameData.chooseSide){
				buttonSideHome.visible = true;
				buttonSideHome.x = canvasW/100 * 42;
				buttonSideHome.y = buttonTeamContinue.y;
				buttonSideAway.x = canvasW/100 * 42;
				buttonSideAway.y = buttonTeamContinue.y;
				buttonTeamContinue.x = canvasW/100 * 58;
				
				toggleSide('home');
			}
		break;
		
		case 'instruction':
			targetContainer = instructionContainer;
		break;
		
		case 'game':
			targetContainer = gameContainer;
			startGame();
		break;
		
		case 'result':
			playSoundLoop('musicGameEnd');
			targetContainer = resultContainer;
			playSound('soundComplete');
			stopGame();
			saveGame(statisticData.home.score);
			
			itemResultTitleGame.visible = false;
			itemResultTitlePenalty.visible = false;
			
			//ad here
			if(typeof prerollStart === 'undefined'){
			console.log('skip ad, prerollStart not found')
			}else{
			//createjs.Sound.setMute(true);	
			/* LaggedAPI.APIAds.show('interstitial','soccer-2018','soccer-2018-game.jpg',function(response) {
			if(response.success) {
			console.log('ad finished');
			//createjs.Sound.setMute(false);
			}else {
			console.log('ad error, continue');
			//createjs.Sound.setMute(false);
			}
			}); */
			}
			
			if(gameData.type == 'penaltykick'){
				itemResultTitlePenalty.visible = true;
				toggleResult('result');
				
				if(statisticData.home.penalty > statisticData.away.penalty){
					resultTitleTxt.text = resultWinText;
				}else if(statisticData.home.penalty == statisticData.away.penalty){
					resultTitleTxt.text = resultDrawText;
				}else{
					resultTitleTxt.text = resultLossText;
				}	
			}else if(gameData.type == 'quickmatch'){
				itemResultTitleGame.visible = true;
				toggleResult('stat');
				
				if(!soccerFieldData.continuePenalty){
					var totalPossesion = statisticData.home.pos+statisticData.away.pos;
					var homePossesion = Math.floor(statisticData.home.pos/totalPossesion * 100)+' %';
					var awayPossesion = Math.floor(statisticData.away.pos/totalPossesion * 100)+' %';
					
					$.stats[0+'Left'].text = statisticData.home.goal;
					$.stats[1+'Left'].text = statisticData.home.shots;
					$.stats[2+'Left'].text = statisticData.home.shotsTarget;
					$.stats[3+'Left'].text = statisticData.home.passes;
					$.stats[4+'Left'].text = statisticData.home.tackles;
					$.stats[5+'Left'].text = homePossesion;
					
					$.stats[0+'Right'].text = statisticData.away.goal;
					$.stats[1+'Right'].text = statisticData.away.shots;
					$.stats[2+'Right'].text = statisticData.away.shotsTarget;
					$.stats[3+'Right'].text = statisticData.away.passes;
					$.stats[4+'Right'].text = statisticData.away.tackles;
					$.stats[5+'Right'].text = awayPossesion;
					
					$.stats[6+'Left'].text = $.stats[6+'Right'].text = '-';
					
					if(statisticData.home.score > statisticData.away.score){
						resultTitleTxt.text = resultWinText;
					}else if(statisticData.home.score == statisticData.away.score){
						resultTitleTxt.text = resultDrawText;
					}else{
						resultTitleTxt.text = resultLossText;
					}
				}else{
					$.stats[6+'Left'].text = statisticData.home.penalty;
					$.stats[6+'Right'].text = statisticData.away.penalty;
					
					if(statisticData.home.penalty > statisticData.away.penalty){
						resultTitleTxt.text = resultWinText;
					}else if(statisticData.home.penalty == statisticData.away.penalty){
						resultTitleTxt.text = resultDrawText;
					}else{
						resultTitleTxt.text = resultLossText;
					}
				}
			}
		break;
	}
	
	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}
	
	resizeCanvas();
}

function toggleSide(con){
	buttonSideHome.visible = false;	
	buttonSideAway.visible = false;	
	
	if(con == 'home'){
		buttonSideHome.visible = true;	
		gameData.side = 'home';
	}else{
		buttonSideAway.visible = true;	
		gameData.side = 'away';	
	}
}

function toggleResult(con){
	resultShareTxt.visible = buttonFacebook.visible = buttonTwitter.visible = buttonGoogle.visible = false;
	resultTitleTxt.visible = false;
	statsContainer.visible = false;
	buttonStatistic.visible = buttonNext.visible = buttonContinue.visible = buttonPenalty.visible = false;
	
	if(con == 'stat'){
		statsContainer.visible = true;
		buttonNext.visible = true;
	}else{
		buttonContinue.visible = true;
		
		resultTitleTxt.visible = true;
		resultShareTxt.visible = buttonFacebook.visible = buttonTwitter.visible = buttonGoogle.visible = true;	
		
		if(gameData.type == 'penaltykick'){
			buttonContinue.x = canvasW/2;
		}else if(gameData.type == 'quickmatch'){
			buttonStatistic.visible = true;
			
			if(statisticData.home.score == statisticData.away.score && !soccerFieldData.continuePenalty){
				buttonPenalty.visible = true;
				
				buttonStatistic.x = canvasW/100 * 35;
				buttonPenalty.x = canvasW/2;
				buttonContinue.x = canvasW/100 * 65;
			}else{
				buttonStatistic.x = canvasW/100 * 42;
				buttonContinue.x = canvasW/100 * 58;	
			}
		}
		
	}
}

function toggleConfirm(con){
	confirmContainer.visible = con;
	
	if(con){
		gameData.paused = true;
		TweenMax.pauseAll(true, true);
	}else{
		gameData.paused = false;
		TweenMax.resumeAll(true, true);
	}
}

function toggleOption(){
	if(optionsContainer.visible){
		optionsContainer.visible = false;
	}else{
		optionsContainer.visible = true;
	}
}

/*!
 * 
 * START GAME - This is the function that runs to start play game
 * 
 */

function startGame(){
	gameData.paused = false;
	resetSoccerGame();
}


 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame(){
	toggleGameTimer(false);
	TweenMax.killAll();
	
	iconContainer.removeAllChildren();
	TweenMax.killTweensOf(playerPenaltyData);
	soccerFieldData.matchEnd = true;
	soccerPlayerData.followMouse = false;
	itemGuideDirection.visible = false;
}

/*!
 * 
 * SAVE GAME - This is the function that runs to save game
 * 
 */
function saveGame(score){
	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}

function setupStageEvents(){
	stage.on("stagemousedown", stageClick);
}

function stageClick(evt) {
	playerAction();
}

 /*!
 * 
 * GAME LOOP - This is the function that runs to loop game
 * 
 */
function updateGame(){
	updateSoccerField();
}


/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleGameMute(con){
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;	
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}


/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function share(action){
	var loc = "https://lagged.com/en/g/soccer-2018";
	
	var title = shareTitle;
	var text = shareMessage;
	
	title = shareTitle.replace("[HOMESCORE]", statisticData.home.score);
	title = title.replace("[AWAYSCORE]", statisticData.away.score);
	
	text = shareMessage.replace("[HOMESCORE]", statisticData.home.score);
	text = text.replace("[AWAYSCORE]", statisticData.away.score);
	
	var shareurl = '';
	
	/* if( action == 'twitter' ) {
		shareurl = 'https://twitter.com/intent/tweet?url='+loc+'&text='+text;
	}else if( action == 'facebook' ){
		shareurl = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(loc+'share.php?desc='+text+'&title='+title+'&url='+loc+'&thumb='+loc+'share.jpg&width=590&height=300');
	}else if( action == 'google' ){
		shareurl = 'https://plus.google.com/share?url='+loc;
	} */
	
	//window.open(shareurl);
}