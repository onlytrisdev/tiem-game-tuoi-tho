function LoadComplete() {
	if (!audioFallback){
	stepSound.setBuffer(sounds["enemyjump"]);
	stepSound.setLoop(false);
	}

	links_block.style.visibility = "visible";
	document.getElementById("headingText").style.visibility = "hidden";
	// Set text from JSON
	//setFieldText("Title", "titleGameName");
	//setFieldText("Description", "titleDescription");
	//setFieldText("Action_Button", "Action_Button");
	//setFieldText("Description", "titleDescription");
	//setFieldText("HitResponse", "hitResponseText");
	//setFieldText("End_Play_Again", "playAgainButton");
	//date
	$('.mydate').html($(XML).find('center').find('releasedate').text());
	//title   
	$('#titleGameName').html($(XML).find('center').find('titlehome').text());
	//desc
	$('#titleDescription').html($(XML).find('center').find('titlemsg').text());
	$('#playAgainButton').html($(XML).find('center').find('playagain').text());
	//$('#playAgainButton').css('font-size',$(XML).find('center').find('playagain').attr('size')+'px');
	//setFieldText("End_More", "moreGamesButton");
	$('#moreGamesButton').html($(XML).find('center').find('moregames').text());
	//play button
	$('#titlePlayText').html($(XML).find('center').find('play').text());  
	$('#titlePlayText').css('font-size',$(XML).find('center').find('play').attr('size')+'px');
	
	/*setFieldText("StartDate", "ninjaLogoText");
	setFieldText("StartDate", "ninjaLogoText2");
	setFieldText("StartDate", "ninjaLogoText3");
	setFieldText("StartDate", "ninjaLogoText4");*/
	//setFieldText("WebLinkPrompt", "siteLinkText");
	//setFieldText("WebLinkPrompt", "siteLinkText2");
	
	//setFieldText("Pause_Menu_Heading", "pauseGameHeadingText");
	/*setFieldText("Pause_Menu_Continue", "pauseGameOptions1");
	setFieldText("Pause_Menu_Start_Over", "pauseGameOptions2");
	setFieldText("Pause_Menu_More_Games", "pauseGameOptions3");
	setFieldText("Pause_Menu_Official_Site", "pauseGameOptions4");*/
	if (oCONFIG.hideOfficialSite==1) {
		document.getElementById("pauseGameOptions4").style.visibility="hidden";
		document.getElementById("pauseGameOptions4").style.display="none";
	}
	
	//setFieldText("WebLinkPrompt", "siteLinkText3");
	if (isMobile) {
		setFieldText("IntroPrompt_Mobile", "titleInstructions");
		document.getElementById("titleInstructionsImage_PC").style.visibility = "hidden";
	} else {
		setFieldText("IntroPrompt_PC", "titleInstructions");
		document.getElementById("titleInstructionsImage").style.visibility = "hidden";
	}
	bkgroup = new THREE.Group();
	var plane0 = makePlane([0, 1 - 12, -3], "background0", materials["Background0"], [20, 12], [1, 1], false);
	var plane1 = makePlane([0, 1, -3], "background1", materials["Background1"], [20, 12], [1, 1], false);
	var plane2 = makePlane([0, 1 + 12, -3], "background2", materials["Background2"], [20, 12], [1, 1], false);
	var plane3 = makePlane([0, 1 + 24, -3], "background3", materials["Background3"], [20, 12], [1, 1], false);
	var plane4 = makePlane([0, 1 + 36, -3], "background4", materials["Background4"], [20, 12], [1, 1], false);
	var plane5 = makePlane([0, 1+48, -3], "background5", materials["Background1"], [20, 12], [1, 1], false);

	bkgroup.add(plane0);
	bkgroup.add(plane1);
	bkgroup.add(plane2);
	bkgroup.add(plane3);
	bkgroup.add(plane4);
	bkgroup.add(plane5);

	scene.add(bkgroup);
	bkgroup.position.set(0, 0, 0);
	//alert("len="+models.NyaFBX.children[0].toJSON().stringify().length);
	//document.getElementById("json").innerHTML=(models["NyaFBX"].children[0].toJSON().stringify());
	// Generate Player Model
	playerObj = new player();
	var pad = models["NyaFBX"];
	playerObj.obj = pad;
	scene.add(pad);
	//pad.castShadow=true;
	pad.rotation.set(Math.PI / 2, 0, 0);
	pad.position.set(0, -.5, 0);
	if (pad.children[0].mixer === undefined) {
		pad.children[0].mixer = new THREE.AnimationMixer(pad.children[0]);
		pad.children[0].mixer.timeScale = playerAnimationTimeScale;
	}

	pad.scale.set = new THREE.Vector3(0.5, 0.5, 0.5);

	playerObj.obj = pad;
	playerObj.basePos = pad.position;

	lightSpotObj = makeSprite([-100, -0.5, 0], "LightSpot", materials["LightSpot"], [2, 2], [1.7, 1.7, 1.7]);


	heartBar = new hearts();
	for (var idx = 0; idx < 3; idx++) {
		//heartBar.objs.push(makeSprite([-cameraWidth * .9 + idx * 1.1, 4.5, 0.1], "hearts", materials["heartFull"], [1, 1], [1.2, 1.2]));
		heartBar.objs.push(makeSprite([-cameraWidth * .9 + idx * 1.1, 3, 0.1], "hearts", materials["heartFull"], [1, 1], [1.2, 1.2]));
		var aSlash = makeSprite([-100,0,0], "hearts", materials["heartSlashes"], [1, 1], [1.2, 1.2]);//[-cameraWidth * .9 + idx * 1.1, 3, 0.3]
		heartBar.slashes.push(aSlash);//
	}
	powerupObj = new powerup();
	powerupObj.objs.push(makePlane([7.5, -3., 0.9], "powerupbase", RadialMask(materials["PowerupBase"].map, 1.0), [1.1, 1.25], [2.75, 2.75, 2.75], true));
	var meterObj = makePlane([7.5, -2.95, 1.1], "powerup", RadialMask(materials["PowerupMeter"].map, 0.0), [1.4, 1.4], [3.25, 3.25, 3.25], true);
	powerupObj.setMeter(meterObj);

	levelMeterObj = new levelMeter(); //
	//levelMeterObj.objs.push(makePlane([6.5, 4, .9], "levelMeter", LinearMask(materials["LevelMeter"].map, 1.0, 0.0), [7, 3], [1, 1], true));
	//levelMeterObj.objs.push(makePlane([6.5, 4, .9], "levelMeterFill", LinearMask(materials["LevelMeterFill"].map, 1.0, 1.0), [7, 3], [1, 1], true));
	levelMeterObj.objs.push(makePlane([6.5, 2.5, .9], "levelMeter", LinearMask(materials["LevelMeter"].map, 1.0, 0.0), [7, 3], [1, 1], true));
	levelMeterObj.objs.push(makePlane([6.5, 2.5, .9], "levelMeterFill", LinearMask(materials["LevelMeterFill"].map, 1.0, 1.0), [7, 3], [1, 1], true));
	levelMeterObj.setMeter(levelMeterObj.objs[1], levelMeterObj.objs[0]);
	levelMeterObj.chargeLevel = 1;

	generateEnemies();
	changeGameState(0);
	gameState = 1;
	changeGameState(1);
	roundScores = [0, 0, 0, 0, 0, 0, 0, 0];
	animate();
	setCanvasSize();
	revealTitleScreen();
	fitGameUI();
	orientLegal();
}
function swapMeters() {
	levelMeterObj.objs[0].material = LinearMask(materials["GarmadonMeter"].map, 1.0, 0.0);
	levelMeterObj.objs[1].material = LinearMask(materials["GarmadonMeterFill"].map, 1.0, 1.0);
	levelMeterObj.setMeter(levelMeterObj.objs[1], levelMeterObj.objs[0]);
}
function unswapMeters() {
	levelMeterObj.objs[0].material = LinearMask(materials["LevelMeter"].map, 1.0, 0.0);
	levelMeterObj.objs[1].material = LinearMask(materials["LevelMeterFill"].map, 1.0, 1.0);
	levelMeterObj.setMeter(levelMeterObj.objs[1], levelMeterObj.objs[0]);
}

resetGame = function (showTitle) {

	bkgroup.position.set(0, 0, 0);
	lightSpotObj.position.set(-100, 0, 0);
	lightspot = -1;
	isPaused=false;
	roundScores= [0,0,0,0,0,0,0];
	gameStarted = false;
	gameOver = false;
	showBoss = false;
	curScore = 0;
	gameTime = 0;
	levelNum = 0;
	for (var idx=0; idx<enemyList.length; idx++) {
		scene.remove(enemyList[idx].obj);
	}
	celebrating=false;
	enemyList = [];
	clock = new THREE.Clock();
	setAnim("NyaFBX_idle", playerObj.obj);
	powerupObj.chargeLevel=0;
	heartBar.setHearts(3);
	levelMeterObj.chargeLevel=1;
	if (garmadonObj) {
		scene.remove(garmadonObj.obj);
		garmadonObj=undefined;
	}
	loadLevel( 1 );
	generateEnemies();
	camera.position.set(0, -5, 10);
	unswapMeters();
	lastUpdate = Date.now();
	animationsTiming = Date.now() + 1500;
	if (!showTitle) {
		changeGameState(2);
	}
}

generateEnemies = function () {
	heartBar.targetHearts = 3;
	levelMeterObj.chargeLevel = 1;
	//document.getElementById("headingText").style.visibility="hidden";
	//setFieldText("Level_Up_"+levelNum, "headingText");
	gameTime = 0;
	lastUpdate = Date.now();
	mixers = [];
	mixers.push(playerObj.obj.children[0].mixer);
	enemyPrototypes = [];
	enemyList = [];
	nextSpawnTime = 0;
	celebrating = false;
	//console.log("generateEnemies:" + baseEnemyName);
	enemyPrototypes.push(models[baseEnemyName]);
	for (var idx = 0; idx < 4; idx++) {
		enemyPrototypes.push(makeClone(baseEnemyName));
	}
	for (var idx = 0; idx < 5; idx++) {
		//enemyPrototypes[idx].children[0].renderOrder = 2;
		if (enemyPrototypes[idx].children[0].mixer === undefined) {
			enemyPrototypes[idx].children[0].mixer = new THREE.AnimationMixer(enemyPrototypes[idx].children[0]);
			enemyPrototypes[idx].children[0].mixer.timeScale = enemyAnimationTimeScale;
		}
		mixers.push(enemyPrototypes[idx].children[0].mixer);
	}

	if (showBoss) {
		//For wave 4 and 5 enemyPatternadon stands far enough from player to not be hit.  Will trigger animations gesturing for more enemies
		if (garmadonObj === undefined) {
			garmadonObj = new garmadon();
			garmadonPrototype = models["GarmadonFBX"];
			if (garmadonPrototype.children[0].mixer === undefined) {
				garmadonPrototype.children[0].mixer = new THREE.AnimationMixer(garmadonPrototype.children[0]);
				garmadonPrototype.children[0].mixer.timeScale = enemyAnimationTimeScale;
			}
			scene.add(garmadonPrototype);
			garmadonPrototype.rotation.set((Math.PI / 2)-0.4, jitter(0), 0);
			mixers.push(garmadonPrototype.children[0].mixer);
			garmadonObj.obj = garmadonPrototype;
		}
		setAnim("GarmadonFBX_jump",garmadonObj.obj);
		garmadonObj.obj.position.set(-0.25, 7 - levelNum*1.2, 2);
		garmadonObj.obj.rotation.set((Math.PI / 2) - .4, jitter(0), 0);
	}


}

function makeClone(objStr) {
	var object = parseFBX(objStr);

	object.updateMatrix();
	return object;
}

function hitPlayer() {
	celebrating = true;
	//console.log("hitPlayer");

	playerObj.obj.rotation.set(Math.PI / 2, 0, 0);
	//setAnim("NyaFBX_hit", playerObj.obj);
	if (levelNum<6) enemyCount+=enemyList.length;
	for (var i = 0; i < enemyList.length; i++) {
		if (enemyList[i].obj.playingAnimation !== baseEnemyName + "_celebrate") setAnim(baseEnemyName + "_celebrate", enemyList[i].obj);
		enemyList[i].obj.rotation.set(Math.PI / 2, 0, 0);
	}
	heartBar.targetHearts--;
	playSound("Nya_loselife_VO");
	//setFieldText("HitResponse", "hitResponseText");
	$('#hitResponseText').html($(XML).find('center').find('nevergive').text());
	if (heartBar.targetHearts > 0) {
		showHitResponse();
	} else {
		if (levelNum>5)levelNum=5;
		triggerGameOver();
	}

}
// Nya_Awesome_VO
function endCelebration() {
	if (celebrating) {
		playerObj.obj.rotation.set(Math.PI / 2, 0, 0);
		celebrating = false;
		lastUpdate = Date.now();
		for (var idx = 0; idx < enemyList.length; idx++) {
			if (enemyList[idx].obj !== undefined) {
				if (enemyList[idx].obj.rotation !== undefined) {
					enemyList[idx].obj.rotation.set(Math.PI / 2, Lerp(enemyList[idx].obj.rotation.y, 0, 0.2), 0);
				}
			}
		}
	}
}

setTimeout(startUpLoaderUI,100);
function startUpLoaderUI(){
	if (startPlayingMenuMusic==0){
		setTimeout(startUpLoaderUI,100);
	}
	if (startPlayingMenuMusic==1){
		playSound("MenuLoop");
		startPlayingMenuMusic = 2;
	} 
}

function animate() {
	var deltaTime = clock.getDelta();
	window.requestAnimationFrame(animate);
	if (isPaused) {
		renderer.render(scene, camera);
		return;
	}
	if (deltaTime > 0) {
		if (mixers.length > 0) {
			for (var i = 0; i < mixers.length; i++) {
				mixers[i].update(deltaTime);
			}
		}
	}
	if (particleSystem !== undefined) {
		particleSystem.update(deltaTime);
	}
	render();
}

var animationsTiming = 0;

function render() {
	var yScroll = window.scrollY==undefined?window.pageYOffset:window.scrollY;
	if (yScroll!=0) { //|| window.scrollY
		trace("force Scroll:"+yScroll);
		window.scrollTo(0, 0);
	}
	switch (gameState) {
		case 1:
			//bkgroup.position.Set(0,bkgroup.position.y+0.0001,0);
			curScore = 0;
			break;

		case 2:

			if (celebrating) {
				for (var idx = 0; idx < enemyList.length; idx++) {
					enemyList[idx].update(gameTime);
				}
			} else {
				var d = Date.now();
				var elapsed = (d - lastUpdate) / 1000.0;
				if (elapsed > 0.1) {
					elapsed = 0.1;
				}
				lastUpdate = d;
				gameTime += elapsed;

				// Kill any expired enemies before processing them.
				for (var idx = enemyList.length - 1; idx >= 0; idx--) {
					if ((enemyList[idx].deathTime > -1 && Date.now() > enemyList[idx].deathTime)) {
						//mixers.remove(enemyList[idx].obj.mixer);
						//setAnim("SharkFBX_hit",enemyList[idx].obj);
						//enemyList[idx].obj.children[0].mixer.addEventListener( 'finished', enemyRemoveListener );
						enemyList[idx].startTime = -1;
					}
					if (enemyList[idx].startTime === -1) {
						scene.remove(enemyList[idx].obj);
						enemyList.splice(idx, 1);
					}
				}


				if (gameTime > nextSpawnTime && (enemyCount > 0 )) { //|| levelNum >= 6)) {
					if (!isMuted) {
						if ( !audioFallback ) {
							stepSound.play();
						} else {
							sounds["enemyjump"].play();
						}
					}
					var direction = parseInt(enemyPattern[patternIndex]) - 1;
					patternIndex++;
					if (levelNum >= 6 && patternIndex >= enemyPattern.length) {
						patternIndex = 0;
					}
					if (direction > -1) {
						if (levelNum < 6) {
							enemyCount--;
							levelMeterObj.chargeLevel = enemyCount / totalEnemies;
						}
						if (showBoss) {

							garmadonObj.obj.rotation.set((Math.PI / 2)-0.4, jitter(0), 0);
							if (garmadonObj.obj.currentAnimation!=="GarmadonFBX_hit") {
								switch (direction) {
									case 2:
										setAnim("GarmadonFBX_directR", garmadonObj.obj);
										break;
									case 4:
										setAnim("GarmadonFBX_directL", garmadonObj.obj);
										break;
									default:
										setAnim("GarmadonFBX_direct" + ((rnd(2) == 1) ? "R" : "L"), garmadonObj.obj);
										break;
								}
							}
						}
						//levelMeterObj.chargeLevel = enemyCount / totalEnemies;
						nextSpawnTime = gameTime + (spawnFrequency / 1000.0);
						var index = enemyFreq[rnd(enemyFreq.length)];

						var object = enemyPrototypes[levelObjectNum];
						object.children[0].mixer.stopAllAction();

						var temp = new nyaEnemy(direction, index, object, gameTime);
						//var tSprite = makeSprite([ gridScale.cX+gridScale.sX*temp.startX,0.01,gridScale.cY+gridScale.sY*temp.startY],"grid",materials["Bad"+temp.id+"1"],[1,1],[gridScale.sX,gridScale.sY]);

						levelObjectNum++;
						if (levelObjectNum >= enemyPrototypes.length) {
							levelObjectNum = 0;
						}
						//var object = new THREE.Group();
						//object.add(clone1);
						object.rotation.set(Math.PI / 2, (-temp.direction) * Math.PI / 2, 0);
						temp.update(gameTime);
						scene.add(object);
						//temp.obj = object;
						//setAnim("SharkFBX_jump",object);

						enemyList.push(temp);

						if (showBoss) {
							//if 
						}
					} else {
						nextSpawnTime = gameTime + (spawnFrequency / 1000.0);
						if (showBoss) {
							setAnim("GarmadonFBX_celebrate", garmadonObj.obj);
						}
					}
				}

				for (var idx = 0; idx < enemyList.length; idx++) {
					enemyList[idx].update(gameTime);
				}

			}
			if (lightSpot > -1) {
				switch (lightSpot) {
					case 1:
						lightSpotObj.position.set(1.45+(-0.075*Math.min(3,levelNum-1)), -0.69, 0);
						break;
					case 2:
						lightSpotObj.position.set(-0.19+(-0.075*Math.min(3,levelNum-1)), -2.4, 0);
						break;
					case 3:
						lightSpotObj.position.set(-1.74+(-0.075*Math.min(3,levelNum-1)), -0.69, 0);
						break;
					default:
						lightSpotObj.position.set(-0.19+(-0.075*Math.min(3,levelNum-1)), 0.94, 0);
						break;
				}
			} else {
				lightSpotObj.position.set(-100, 0, 0);
			}
			if (playerObj !== undefined) {
				playerObj.updatePlayer();
			}

			if (enemyCount <= 0 && enemyList.length <= 0 && !celebrating) {
				// Start Level Ending sequences

				gameState = 3;
				if (levelNum<6) {
					document.getElementById("headingText").style.visibility = "visible";
					//setFieldText("Level_Up_" + levelNum, "headingText");
					if(levelNum == 1)
					{
						$('#headingText').html($(XML).find('center').find('levelup').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					if(levelNum == 2)
					{
						$('#headingText').html($(XML).find('center').find('level2').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					if(levelNum == 3)
					{
						$('#headingText').html($(XML).find('center').find('level3and4').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					if(levelNum == 4)
					{
						$('#headingText').html($(XML).find('center').find('level3and4').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					if(levelNum == 5)
					{
						$('#headingText').html($(XML).find('center').find('level5and6').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					if(levelNum == 6)
					{
						$('#headingText').html($(XML).find('center').find('level5and6').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					playSound("Nya_LevelUp_VO");
				} else {
					playSound("Nya_Awesome_VO");
					if(levelNum == 1)
					{
						$('#headingText').html($(XML).find('center').find('levelup').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					if(levelNum == 2)
					{
						$('#headingText').html($(XML).find('center').find('level2').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					if(levelNum == 3)
					{
						$('#headingText').html($(XML).find('center').find('level3and4').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					if(levelNum == 4)
					{
						$('#headingText').html($(XML).find('center').find('level3and4').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					if(levelNum == 5)
					{
						$('#headingText').html($(XML).find('center').find('level5and6').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
					if(levelNum == 6)
					{
						$('#headingText').html($(XML).find('center').find('level5and6').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
				}
				playerObj.obj.rotation.set(Math.PI / 2, 0, 0);
				changeGameState(3);
				setAnim("NyaFBX_celebrate", playerObj.obj);
				animationsTiming = Date.now() - 3000; // duration;
				if (showBoss) {
					//garmadonObj.obj.rotation.set((Math.PI / 2)-0.4, jitter(), 0);
					if (levelNum < 6) {
						//setAnim("GarmadonFBX_jump", garmadonObj.obj);
					} else {
						setAnim("GarmadonFBX_defeated", garmadonObj.obj);
					}
				}

				playSound("winlevel");
			}

			if (powerupObj !== undefined) {
				powerupObj.update();
			}
			break;
		case 3:

			var dTime = (Date.now() - animationsTiming) / 1000.0;
			
			if (dTime > 1) {
				if (playerObj.obj.currentAnimation == "NyaFBX_celebrate" && !showBoss) {
					
					if (levelNum <= 3) {
						bkgroup.position.set(0, (levelNum -1) * -12.1, 0);
					}
					animationsTiming = Date.now();
					dTime=0;
					if (levelNum+1>levelLoadedNumber) {
						if (!betweenLevelPreloading) {
							clearTimeout(clearTimeoutRef);
							clearTimeoutRef = setTimeout(loadSequence,600);
							setFieldText("LoadingNextLevel", "hitResponseText");
							$('#hitResponseText').html($(XML).find('center').find('loadinglevel').text());
							//document.getElementById("hitResponseText").innerHTML += " "+ (levelNum+1)+"<br/>"; 
							if(levelNum == 1)
						{
						$('#hitResponseText').html($(XML).find('center').find('levelup').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						if(levelNum == 2)
						{
						$('#hitResponseText').html($(XML).find('center').find('level2').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						if(levelNum == 3)
						{
						$('#hitResponseText').html($(XML).find('center').find('level3and4').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						if(levelNum == 4)
						{
						$('#hitResponseText').html($(XML).find('center').find('level3and4').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						if(levelNum == 5)
						{
						$('#hitResponseText').html($(XML).find('center').find('level5and6').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						if(levelNum == 6)
						{
						$('#hitResponseText').html($(XML).find('center').find('level5and6').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}	
							
							
							
							
						}
						clearTimeout(animationTimeout);
					} else {
						setAnim("NyaFBX_run", playerObj.obj);
						playerObj.obj.rotation.set(Math.PI / 2, Math.PI, 0);
						if (!betweenLevelPreloading) {
							document.getElementById("hitResponseText").innerHTML = "";
						}
					}
					if (!betweenLevelPreloading) {
						betweenLevelPreloading= true;
						showHitResponse();
						resizeIteration = 5;
						//document.getElementById("hitResponseText").innerHTML += getLocalizedText("Level_Up_" + levelNum);
						if(levelNum == 1)
						{
						$('#hitResponseText').html($(XML).find('center').find('levelup').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						if(levelNum == 2)
						{
						$('#hitResponseText').html($(XML).find('center').find('level2').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						if(levelNum == 3)
						{
						$('#hitResponseText').html($(XML).find('center').find('level3and4').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						if(levelNum == 4)
						{
						$('#hitResponseText').html($(XML).find('center').find('level3and4').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						if(levelNum == 5)
						{
						$('#hitResponseText').html($(XML).find('center').find('level5and6').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						if(levelNum == 6)
						{
						$('#hitResponseText').html($(XML).find('center').find('level5and6').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
						}
						
						
					}
				} else {
					
					if (levelNum <= 3) {
						bkgroup.position.set(0, (levelNum) * -12.1, 0);
					}
					setAnim("NyaFBX_idle", playerObj.obj)
					//console.log("End of Level Up");
					playerObj.obj.rotation.set(Math.PI / 2, 0, 0);
					dTime = 1;
					changeGameState(4);
					gameState = 4;
					levelNum++;
					if (levelNum==6){
						swapMeters();
					}
					if (levelNum > 6) {
						levelNum = 6;
						playSound("Nya_Awesome_VO");
						triggerGameOver();
					} else {
						loadLevel(levelNum);
						generateEnemies();
						lastUpdate = Date.now();
						levelMeterObj.chargeLevel = 1;
						animationsTiming = Date.now() + 1500;
					}
					if (betweenLevelPreloading) {
						hideHitResponse();
					}
					betweenLevelPreloading = false;
				}
			}
			if (playerObj.obj.currentAnimation == "NyaFBX_run") {
				if (dTime >= 0) {
					dTime = Math.min(1, Math.max(0, dTime));
					dTime = 0.5 - 0.5*Math.cos(dTime*Math.PI);
					bkgroup.position.set(0, (levelNum - 1 + dTime) * -12.1, 0);
				}
			}
			break;
		case 4:
			if (Date.now() > animationsTiming) {
				advanceGameState();
			}
			break;
		case 10: // Player hit sequenceDi
		case 11:
		case 12:
			var dTime = (Date.now() - powerUpTiming) / 2000.0;
			if (dTime) {
				if (dTime < 1) {
					// Enemy hitting player
					
				} else {
					switch (gameState) {
						case 10: // Enemy hit, show animation for 1 second then advance to 
							hitPlayer();
							lightSpot = -1;
							gameState++;
							powerUpTiming = Date.now();
							break;
						case 11: // Display 
							changeGameState(11);
							clearEnemies();
							document.getElementById("headingText").visibility = "visible";
							if (isMobile) {
								setFieldText("ActionPrompt_Mobile", "headingText");
							} else {
								setFieldText("ActionPrompt_PC", "headingText");
							}
							powerUpTiming = Date.now() - 1000;

							setAnim("NyaFBX_idle", playerObj.obj);
							gameState++;
							break;
						case 12: // 
							celebrating = false;

							changeGameState(2);
							break;
					}
				}
			}
			break;
	}
	if (heartBar !== undefined) {
		heartBar.update();
	}
	if (levelMeterObj !== undefined) {
		levelMeterObj.update();
	}
	renderer.render(scene, camera);
}
function enemyRemoveListener(e) {
	e.target.removeEventListener('finished', enemyRemoveListener);

	scene.remove(e.target);
}
window.addEventListener("orientationchange", resizeSequence, false);

window.addEventListener("resize", resizeSequence, false);
