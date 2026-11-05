 
 

function AddGame(settings) {
	var gameHTML = '<div id="GameMain">' +
		'<div id="gameInfo">' +
		'<div class="txtFXWhite" id="scoreDisplay"></div>' +
		'<div class="txtFXWhite" id="timeDisplay">00:00</div>' +
		'<div class="gameBtn" id="homeBtn"></div>' +
		'<div class="gameBtn" id="soundBtn"></div>' +
		'</div>' +
		'<div id="gameContent" class="contentSize"></div>' +
		'<div id="screenClose" class="contentSize"></div>' +
		'<div id="gameCover"></div>' +
		'<div id="startBtn"></div>' +
		'<div id="howtoplayBtn"></div>' +
		'<div id="endWindow">' +
		'<div class="endboxContainer">' +
		'<div class="endboxAlign">' +
		'<div class="txtFXWhite endTxtNormal" id="HighScoreText">></div>' +
		'<div class="txtFXWhite endTxtNormal" id="HighScore"></div>' +
		'<div class="txtFXOrange endTxtLarge" id="NewScoreText"></div>' +
		'<div class="txtFXOrange endTxtLarge" id="NewScore"></div>' +
		'<div class="gameBtn" id="RestartBtn"></div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'<div id="HowtoplayWindow">' +
		'<div class="HowtoContainer">' +
		'<div class="HowtoAlign">' +
		'<div class="txtFXOrange HowtoTextHeading"></div>' +
		'<div class="txtFXWhite HowtoText"><div class="HowtoMath1"></div></div>' +
		'<div class="txtFXWhite HowtoText" id="GameComment1"></div>' +
		'<div class="txtFXWhite HowtoText"><div class="HowtoMath2"></div></div>' +
		'<div class="txtFXWhite HowtoText" id="GameComment2"></div>' +
		'<div class="txtFXWhite HowtoText"><div id="HowtoreturnBtn"></div></div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'<div id="GameLoaderMain">' +
		'<div class="LoaderContainer">' +
		'<svg viewbox="0 0 36 36" class="PertangeCircle orange">' +
		'<path class="LoaderCircleEmpty" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>' +
		'<path class="LoaderCircleOrange" stroke-dasharray="0, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>' +
		'<text x="18" y="20.35" id="LoaderPercentageTxt">0%</text>' +
		'</svg>' +
		'</div>' +
		'</div>' +
		'</div>';
	$(settings.add).append(gameHTML);
	var build = [];
	var noMatchArray = [];
	var hTotal = settings.rowCount;
	var vTotal = settings.columnCount;
	var gameSettings = settings.gameSize;
	var boxRatio = settings.boxSize;
	var BonusTimePosition = settings.bonusTimeEndAniPosition;
	var totalTime = settings.totalTime;
	var typeCount = settings.typeCount;
	var interval;
	var currentTime = 0;
	var totalBonusTimeBox = 0;
	var blowSound = [];
	var gameSound;
	var soundPlaying = true;
	var startTween;
	var swipeActive = false;
	var mobileDevice = isMobileFNC();
	var firstPosition;
	var lastPosition;
	var xCalc;
	var yCalc;
	var changeLocation = [];
	var changeLocationCount = [];
	var deleteObject = [];
	var foundTypeGroup = [];
	var timesUp = true;
	var noMatchesFound = false;
	var downEvent = "mousedown";
	var moveEvent = "mousemove";
	var upEvent = "mouseup";
	var clickEvent = "click";
	var delAllEvent = "mousedown mousemove mouseup click";
	var ScoreOBJ = {
		currentScore: 0,
		highScore: 0,
		currentScoreAni: 0,
		totalScoreAni: 0
	};
	var secondAniActive = false;
	var lastAniTween;
	var loaderCount = 0;
	var objBoxSize = {
		width: boxRatio,
		height: boxRatio
	};
	var stageCSS = {
		width: (vTotal * boxRatio),
		height: (hTotal * boxRatio)
	};
	var content = $("#gameContent");
	var screenClose = $("#screenClose");
	var scoreDisplay = $("#scoreDisplay");
	var coverDisplay = $("#gameCover");
	var startDisplay = $("#startBtn");
	var endWindowDisplay = $("#endWindow");
	var timeDisplay = $("#timeDisplay");
	var endGameHighScoreDisplay = $("#HighScore");
	var endGameScoreDisplay = $("#NewScore");
	var endGameRestartDisplay = $("#RestartBtn");
	var homeBtnDisplay = $("#homeBtn");
	var soundBtnDisplay = $("#soundBtn");
	var gameDisplay = $("#GameMain");
	var howtoplayBtnDisplay = $("#howtoplayBtn");
	var HowtoreturnBtn = $("#HowtoreturnBtn");
	$(".HowtoTextHeading").text(settings.howToPlay_TitleText);
	$("#GameComment1").text(settings.howToPlay_Comment1Text);
	$("#GameComment2").text(settings.howToPlay_Comment2Text);
	$("#HighScoreText").text(settings.endWindow_HighScoreText);
	$("#NewScoreText").text(settings.endWindow_NewScoreText);
	gameDisplay.css(gameSettings);
	coverDisplay.css(gameSettings);
	content.css(stageCSS);
	screenClose.css(stageCSS);
	var contentLeftPos = (gameSettings.width - content.outerWidth(true)) / 2;
	content.css({
		left: contentLeftPos
	});
	screenClose.css({
		left: contentLeftPos,
		width: content.outerWidth(true),
		height: content.outerHeight(true)
	});
	HowtoreturnBtn.bind(clickEvent, function() {
		$("#HowtoplayWindow").css("visibility", "hidden");
	});
	howtoplayBtnDisplay.bind(clickEvent, function() {
		$("#HowtoplayWindow").css("visibility", "visible");
	});
	endGameRestartDisplay.bind(clickEvent, function() {
		HomeScreen();
	});
	homeBtnDisplay.bind(clickEvent, function() {
		HomeScreen();
	});
	homeBtnDisplay.bind(clickEvent, function() {
		HomeScreen();
	});
	soundBtnDisplay.bind(clickEvent, function() {
		if (gameSound.playing()) {
			gameSound.stop();
			$(this).addClass("grayscaleAdd").removeClass("grayscaleRemove");
			soundPlaying = false;
		} else {
			gameSound.play();
			$(this).addClass("grayscaleRemove").removeClass("grayscaleAdd");
			soundPlaying = true;
		}
	});
	startDisplay.bind(clickEvent, function() {
		coverDisplay.hide();
		startDisplay.hide();
		howtoplayBtnDisplay.hide();
		if (soundPlaying) {
			gameSound.play();
		}
		startTween.kill();
		objectComeAniFNC(0.5);
	});

	function HomeScreen() {
		coverDisplay.show();
		startDisplay.show();
		clearInterval(interval);
		gameSound.stop();
		startAni();
		totalTime = 25;
		currentTime = 0;
		totalBonusTimeBox = 0;
		timesUp = true;
		build = [];
		ScoreOBJ.currentScore = 0;
		ScoreOBJ.currentScoreAni = 0;
		ScoreOBJ.totalScoreAni = 0;
		endWindowDisplay.css("visibility", "hidden");
		howtoplayBtnDisplay.show();
		content.html("");
		scoreDisplay.text(settings.gameInfo_scoreText + ": " + 0);
		LocalSave(false);
		defaultMatch();
		buildResetFNC();
		addObjectFNC();
	}

	function isMobileFNC() {
		var $ua = navigator.userAgent.toLowerCase();
		var isIphone = $ua.indexOf("iphone") > -1;
		var isIpad = $ua.indexOf("ipad") > -1;
		var isAndroid = $ua.indexOf("android") > -1;
		if (isAndroid || isIpad || isIphone) {
			return true;
		}
	}
	if (isMobileFNC()) {
		downEvent = "touchstart";
		moveEvent = "touchmove";
		upEvent = "touchend";
		delAllEvent = "touchstart touchmove touchend";
	}

	function addRandomBonusTime() {
		var bonusTime = 0;
		var possibility = Math.floor(Math.random() * settings.maxBonusTimeChange);
		if (possibility === 0) {
			bonusTime = Math.floor(Math.random() * settings.maxBonusTimeDuration);
		}
		return bonusTime;
	}

	function buildResetFNC() {
		for (var h = 0; h < hTotal; h++) {
			build[h] = [];
			for (var v = 0; v < vTotal; v++) {
				build[h][v] = null;
			}
		}
	}

	function changeLocationReset() {
		for (var v = 0; v < vTotal; v++) {
			changeLocation[v] = [];
		}
	}

	function defaultMatch() {
		changeLocationReset();
		buildResetFNC();
		for (var i = 0; i < 100; i++) {
			for (var v = 0; v < vTotal; v++) {
				for (var h = 0; h < hTotal; h++) {
					var randomType = Math.floor(Math.random() * typeCount);
					build[h][v] = [null, randomType];
				}
			}
			for (var x = 0; x < typeCount; x++) {
				searchHorizontalObject(x);
				searchVerticalObject(x);
			}
			if (!deleteObject.length) {
				noMatchArray = build.slice();
				noMatchesFound = true;
			}
			deleteObject = [];
			if (noMatchesFound) {
				break;
			}
		}
	}

	function addObjectFNC() {
		var randomType, randomTime, boxNameID, boxBonusTime;
		for (var v = 0; v < vTotal; v++) {
			var gap = hTotal - changeLocation[v].length;
			for (var h = 0; h < hTotal; h++) {
				if (build[h][v] === null) {
					if (noMatchesFound) {
						randomType = noMatchArray[h][v][1];
					} else {
						randomType = Math.floor(Math.random() * typeCount);
					}
					if (totalBonusTimeBox < settings.maxBonusTimeBox) {
						randomTime = addRandomBonusTime();
					} else {
						randomTime = 0;
					}
					boxNameID = ("box_" + h + "_" + v);
					boxBonusTime = null;
					content.append('<div class="objMain" id="' + boxNameID + '"><div class="objImg"></div></div>');
					boxNameID = $("#" + boxNameID);
					var boxPicture = boxNameID.children(".objImg");
					boxPicture.addClass("objImg" + randomType);
					if (randomTime > 0) {
						totalBonusTimeBox++;
						boxNameID.append('<div class="objTime txtFXWhite"><span class="objTimeSpan">+' + randomTime + '</span></div>');
						boxBonusTime = boxNameID.children(".objTime");
					}
					boxNameID.css(objBoxSize);
					boxNameID.css("top", (boxRatio * gap) * -1);
					gap--;
					objAddEvents({
						box: boxNameID,
						type: randomType,
						h: h,
						v: v,
						time: randomTime,
						boxPic: boxPicture,
						boxTime: boxBonusTime
					});
				}
			}
		}
		noMatchesFound = false;
	}

	function objAddEvents(OBJ) {
		build[OBJ.h][OBJ.v] = [OBJ.box, OBJ.type, OBJ.h, OBJ.v, OBJ.time, OBJ.boxPic, OBJ.boxTime];
		OBJ.box.unbind(delAllEvent);
		OBJ.box.bind(downEvent, function(e) {
			mouseDownFNC(e);
		}).bind(moveEvent, function(e) {
			mouseMoveFNC(e, $(this));
		}).data({
			row: OBJ.h,
			column: OBJ.v
		});
	}

	function objectComeAniFNC(time) {
		for (var h = 0; h < hTotal; h++) {
			for (var v = 0; v < vTotal; v++) {
				if (build[h][v] != null) {
					var mc = build[h][v][0];
					mc.css("left", (boxRatio * v));
					TweenMax.to(mc, time, {
						top: (boxRatio * h),
						ease: Back.easeOut
					});
				}
			}
		}
		TweenMax.delayedCall((time + 0.2), timeResume);
	}

	function timeResume() {
		clearInterval(interval);
		interval = setInterval(updateTimer, 100);
		searchMain(true);
	}

	function searchMain(closeScreen) {
		for (var i = 0; i < typeCount; i++) {
			searchHorizontalObject(i);
			searchVerticalObject(i);
		}
		if (deleteObject.length > 1 && timesUp) {
			if (soundPlaying) {
				blowSound[Math.floor(Math.random() * 3)].play();
			}
			screenClose.show();
			objectDelAnimation();
			return true;
		} else {
			if (closeScreen) {
				screenClose.hide();
			}
		}
	}

	function searchHorizontalObject(type) {
		for (var h = 0; h < hTotal; h++) {
			for (var v = 0; v < vTotal; v++) {
				if (build[h][v][1] === type) {
					foundTypeGroup.push(build[h][v]);
				} else {
					if (foundTypeGroup.length) {
						recordSame();
					}
				}
			}
			if (foundTypeGroup.length) {
				recordSame();
			}
		}
	}

	function searchVerticalObject(type) {
		for (var v = 0; v < vTotal; v++) {
			for (var h = 0; h < hTotal; h++) {
				if (build[h][v][1] === type) {
					foundTypeGroup.push(build[h][v]);
				} else {
					if (foundTypeGroup.length) {
						recordSame();
					}
				}
			}
			if (foundTypeGroup.length) {
				recordSame();
			}
		}
	}

	function recordSame() {
		if (foundTypeGroup.length >= 3) {
			for (var i = 0; i < foundTypeGroup.length; i++) {
				deleteObject.push(foundTypeGroup[i]);
			}
		}
		foundTypeGroup = [];
	}

	function objectDelAnimation() {
		var temp3 = [];
		var box, h, v, time, boxPic, boxTime;
		var bonusTime = [];
		clearInterval(interval);
		for (var i = 0; i < deleteObject.length; i++) {
			box = deleteObject[i][0];
			h = deleteObject[i][2];
			v = deleteObject[i][3];
			time = deleteObject[i][4];
			boxPic = deleteObject[i][5];
			boxTime = deleteObject[i][6];
			if (build[h][v] !== null) {
				temp3.push(boxPic);
				if (time > 0) {
					bonusTime.push(time);
					totalBonusTimeBox--;
					var vT = ((h * boxRatio) + BonusTimePosition.top) * -1;
					var hT = ((v * boxRatio) - BonusTimePosition.left) * -1;
					box.css("z-index", 100 + i);
					TweenMax.to(boxTime, 0.5, {
						top: vT,
						left: hT
					});
				}
				build[h][v] = null;
			}
		}
		if (bonusTime.length) {
			content.css("overflow", "visible");
		}
		TweenMax.to(temp3, 0.5, {
			opacity: 0,
			scaleX: 0.2,
			scaleY: 0.2,
			ease: Back.easeIn,
			onComplete: sceneDeleteObject,
			onCompleteParams: [bonusTime, temp3.length]
		});
	}

	function sceneDeleteObject(bonusTime, Score) {
		var tempTotalTime = 0;
		if (bonusTime.length) {
			for (var x = 0; x < bonusTime.length; x++) {
				tempTotalTime += bonusTime[x];
			}
			totalTime += tempTotalTime;
			content.css("overflow", "hidden");
		}
		RemainingTime();
		updateScore(Score);
		for (var i = 0; i < deleteObject.length; i++) {
			deleteObject[i][0].remove();
		}
		changeLocation = [];
		deleteObject = [];
		for (var v = 0; v < vTotal; v++) {
			var remainObject = [];
			for (var h = 0; h < hTotal; h++) {
				if (build[h][v] != null) {
					remainObject.push(build[h][v]);
				}
			}
			changeLocation[v] = remainObject;
		}
		buildResetFNC();
		downFNC();
		addObjectFNC();
		objectComeAniFNC(0.5);
	}

	function downFNC() {
		changeLocationCount = [];
		for (var v = 0; v < vTotal; v++) {
			var gap = hTotal - changeLocation[v].length;
			changeLocationCount[v] = gap;
			for (var h = 0; h < changeLocation[v].length; h++) {
				var newH = (h + gap);
				build[newH][v] = changeLocation[v][h];
				var _boxNameID = ("box_" + newH + "_" + v);
				build[newH][v][0].attr('id', _boxNameID);
				objAddEvents({
					box: build[newH][v][0],
					type: build[newH][v][1],
					h: newH,
					v: v,
					time: build[newH][v][4],
					boxPic: build[newH][v][5],
					boxTime: build[newH][v][6]
				});
			}
		}
	}

	function getPosition(e) {
		var Position = {
			x: 0,
			y: 0
		};
		if (mobileDevice) {
			Position.x = e.originalEvent.touches[0].pageX;
			Position.y = e.originalEvent.touches[0].pageY;
		} else {
			Position.x = e.clientX;
			Position.y = e.clientY;
		}
		return Position;
	}

	function directionAccept(current, target, direction) {
		if (target !== undefined) {
			swipeActive = false;
			screenClose.show();
			xCalc = 0;
			yCalc = 0;
			ChangeAni(current, target, direction);
		}
	}

	function mouseDownFNC(e) {
		firstPosition = getPosition(e);
		swipeActive = true;
		e.preventDefault();
	}

	function mouseMoveFNC(e, obj) {
		if (swipeActive) {
			lastPosition = getPosition(e);
			xCalc = (firstPosition.x - lastPosition.x);
			yCalc = (firstPosition.y - lastPosition.y);
			var row = obj.data().row;
			var column = obj.data().column;
			if (xCalc >= 15) {
				directionAccept(build[row][column], build[row][column - 1], 3);
			} else if (xCalc <= -15) {
				directionAccept(build[row][column], build[row][column + 1], 1);
			} else if (yCalc >= 15) {
				directionAccept(build[row][column], build[row - 1][column], 0);
			} else if (yCalc <= -15) {
				directionAccept(build[row][column], build[row + 1][column], 2);
			}
		}
	}

	function mouseUpFNC() {
		swipeActive = false;
		xCalc = 0;
		yCalc = 0;
	}

	function ChangeAni(Current, Target, Direction) {
		if (Direction === 0 || Direction === 2) {
			TweenMax.to(Current[0], 0.2, {
				top: (Target[2] * boxRatio),
				onComplete: matchObject,
				onCompleteParams: [Current, Target, Direction]
			});
			TweenMax.to(Target[0], 0.2, {
				top: (Current[2] * boxRatio)
			});
		} else if (Direction === 1 || Direction === 3) {
			TweenMax.to(Current[0], 0.2, {
				left: (Target[3] * boxRatio),
				onComplete: matchObject,
				onCompleteParams: [Current, Target, Direction]
			});
			TweenMax.to(Target[0], 0.2, {
				left: (Current[3] * boxRatio)
			});
		}
		transformationArray(Current, Target);
	}

	function matchObject(Current, Target, Direction) {
		if (!searchMain(false)) {
			if (Direction === 0 || Direction === 2) {
				TweenMax.to(Current[0], 0.2, {
					top: (Target[2] * boxRatio)
				});
				TweenMax.to(Target[0], 0.2, {
					top: (Current[2] * boxRatio),
					onComplete: function() {
						screenClose.hide()
					}
				});
			} else if (Direction === 1 || Direction === 3) {
				TweenMax.to(Current[0], 0.2, {
					left: (Target[3] * boxRatio)
				});
				TweenMax.to(Target[0], 0.2, {
					left: (Current[3] * boxRatio),
					onComplete: function() {
						screenClose.hide()
					}
				});
			}
			transformationArray(Current, Target);
		}
	}

	function transformationArray(Current, Target) {
		var CurrentTEMP = Current.slice();
		var TargetTEMP = Target.slice();
		Current[0] = TargetTEMP[0];
		Current[1] = TargetTEMP[1];
		Current[4] = TargetTEMP[4];
		Current[5] = TargetTEMP[5];
		Current[6] = TargetTEMP[6];
		Target[0] = CurrentTEMP[0];
		Target[1] = CurrentTEMP[1];
		Target[4] = CurrentTEMP[4];
		Target[5] = CurrentTEMP[5];
		Target[6] = CurrentTEMP[6];
		var currentNewID = {
			row: Current[2],
			column: Current[3]
		};
		var targetNewID = {
			row: Target[2],
			column: Target[3]
		};
		Current[0].data(currentNewID);
		Target[0].data(targetNewID);
	}
	gameSound = new Howl({
		src: ['assets/sound/bgsound.mp3'],
		onload: function() {
			loaderCount++;
			updateLoader(loaderCount * 25);
		},
		loop: true,
		volume: 0.50,
	});
	blowSound[0] = new Howl({
		src: ['assets/sound/blow0.mp3'],
		onload: function() {
			loaderCount++;
			updateLoader(loaderCount * 25);
		},
		volume: 0.5,
	});
	blowSound[1] = new Howl({
		src: ['assets/sound/blow1.mp3'],
		onload: function() {
			loaderCount++;
			updateLoader(loaderCount * 25);
		},
		volume: 0.5,
	});
	blowSound[2] = new Howl({
		src: ['assets/sound/blow2.mp3'],
		onload: function() {
			loaderCount++;
			updateLoader(loaderCount * 25);
		},
		volume: 0.5,
	});
	screenClose.bind("touchstart touchmove touchend", function(e) {
		e.preventDefault();
	});
	$("body").bind(upEvent, function() {
		mouseUpFNC();
	});
	$(window).resize(function() {
		resizePosition();
	});

	function resizePosition() {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var calc = windowHeight / gameSettings.height;
		TweenMax.to(gameDisplay, 0, {
			scale: calc,
			transformOrigin: "50% 0%"
		});
	}
	resizePosition();

	function digit(x) {
		var mn = zero(parseInt(x / 60));
		var sc = zero(x % 60);
		return mn + ':' + sc;
	}

	function zero(x) {
		if (x < 10) {
			return '0' + x;
		} else {
			return x;
		}
	}

	function updateScore(objCount) {
		ScoreOBJ.currentScore += (objCount * 20);
		TweenMax.to(ScoreOBJ, 0.4, {
			currentScoreAni: ScoreOBJ.currentScore,
			roundProps: "currentScoreAni",
			onUpdate: changeNumber
		});
	}

	function changeNumber() {
		scoreDisplay.text(settings.gameInfo_scoreText + ": " + ScoreOBJ.currentScoreAni);
	}

	function endScoreAni() { 
		TweenMax.to(ScoreOBJ, 1, {
			totalScoreAni: ScoreOBJ.currentScore,
			roundProps: "totalScoreAni",
			onUpdate: updateEndScore
		});
	}

	function updateEndScore() { new GV().saveScore(ScoreOBJ.totalScoreAni)
		endGameScoreDisplay.text(ScoreOBJ.totalScoreAni);
	}

	function startAni() {
		startTween = TweenMax.fromTo(startDisplay, 0.7, {
			scale: 1.0
		}, {
			scale: 1.1,
			repeat: -1,
			yoyo: true
		});
	}

	function secondAniStart() {
		secondAniActive = true;
		timeDisplay.removeClass("txtFXWhite").addClass("txtFXRed");
		lastAniTween = TweenMax.fromTo(content, 0.5, {
			css: {
				borderColor: "rgba(255, 0, 0, 0)"
			}
		}, {
			css: {
				borderColor: "rgba(255, 0, 0, 0.80)"
			},
			repeat: -1,
			yoyo: true
		});
	}

	function secondAniStop() {
		secondAniActive = false;
		lastAniTween.kill();
		content.css("border-color", "rgba(255, 0, 0, 0)");
		timeDisplay.addClass("txtFXWhite").removeClass("txtFXRed");
	}

	function updateTimer() {
		currentTime += 0.1;
		RemainingTime();
	}

	function RemainingTime() {
		var timeCalc = parseInt(totalTime - currentTime);
		timeDisplay.text(digit(timeCalc));
		if (timeCalc > 5 && secondAniActive) {
			secondAniStop();
		} else if (timeCalc === 5 && !secondAniActive) {
			secondAniStart();
		}
		if (timeCalc <= 0) {
			clearInterval(interval);
			secondAniStop();
			timesUp = false;
			endWindowDisplay.css("visibility", "visible");
			 
			endScoreAni();
			secondAniStop();
			var boardinfo = {};
			boardinfo.score = ScoreOBJ.currentScore;
			boardinfo.board = "fruity_lovrsh_hsbrrd";
		 
			/* if (adcnt > 30) {
				if (typeof prerollStart === 'undefined') {
					console.log('skip ad, prerollStart not found')
				} else {
				 
				}
			} */
			LocalSave(true);
		}
	}

	function LocalSave(write) {
		if (typeof(Storage) !== "undefined") {
			var currentScore = localStorage.getItem("HighScore");
			if (currentScore === null) {
				currentScore = 0;
			}
			if (write) {
				if (ScoreOBJ.currentScore > currentScore) {
					localStorage.setItem("HighScore", ScoreOBJ.currentScore);
					ScoreOBJ.highScore = ScoreOBJ.currentScore;
				}
			} else {
				endGameHighScoreDisplay.text(currentScore);
			}
		}
	}
	HomeScreen();
	var GameLoaderMain = $("#GameLoaderMain");
	var LoaderCircleOrange = $(".LoaderCircleOrange");
	var LoaderPercentageTxt = $("#LoaderPercentageTxt");

	function updateLoader(percentage) {
		LoaderCircleOrange.attr("stroke-dasharray", percentage + ",100");
		LoaderPercentageTxt.text(percentage + "%");
		if (percentage === 100) {
			GameLoaderMain.hide();
		}
	}
	updateLoader(5);
}