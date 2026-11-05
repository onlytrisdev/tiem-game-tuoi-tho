// JavaScript Document
var tAudioContext = window.AudioContext || window.webkitAudioContext;
var audioFallback = false;
if (tAudioContext===undefined) {
	audioPlanB = document.createElement("AUDIO");
	audioFallback=true;
}
// JavaScript Document
var gameLoadData = {};
setTimeout(loadJSON,100);
function loadJSON() {
	if (!prepComplete) {
		setTimeout(loadJSON,100);
		return;
	}
	
	setLocalizedImage("ninjagoLogo","ninjago_logo");
	setLocalizedImage("ninjagoLogo2","ninjago_logo");
	setLocalizedImage("ninjagoLogo3","ninjago_logo");
	setLocalizedImage("ninjagoLogo4","ninjago_logo");
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var txt = this.responseText.replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,"");
			//console.log(txt);
			myArr = JSON.parse(txt);
			gameLoadData = mergeLocalizedAudio(myArr);
			loadProgressAmount=0;
			loadTotal = gameLoadData.length;
			loadSequence();

		}
	};
	xmlhttp.open("GET", "data/nyagame.json", true);
	xmlhttp.send();
	
}

function mergeLocalizedAudio(sourceArray) {
	// two step process merging localized audio with fixed game audio
	// if the id in fixed audio matches the id of a localizaed definition, replace it.
	for (var idx = 0; idx<sourceArray.length; idx++) {
		var tId = sourceArray[idx].id;
		var merge = localSounds[tId];
		if (merge!=undefined) {
			//trace("Merged:"+localSounds[tId].value);
			sourceArray[idx].value = localSounds[tId].value;
			localSounds[tId] = undefined;
		}
	}
	// for any local sound which isn't in the fixed source Array, prepend it (so it gets loaded first)
	for  (var item in localSounds) { 
		if (localSounds[item]!=undefined) {
			//trace("Prepended:"+localSounds[item]);
			sourceArray.splice(0,0,localSounds[item]);
		}
	}
	return sourceArray;
}

function setLocalizedImage ( elementId, imageId ) {
	var elm = document.getElementById(elementId).style.backgroundImage="url("+oLANG[imageId]+")";
}
function getLocalizedText( textId ) {
	if (textAssets[textId].data) {
		return textAssets[textId].data.replace("![CDATA[","").replace("]]","");
	}
	return textAssets[textId].value.replace("![CDATA[","").replace("]]","");
}

function makePlane( pos, name, material, size, scale, faceCamera ) {
	var plane = new THREE.PlaneGeometry(size[0],size[1],16,8);
	//console.log("makePlane:"+material);
	
	var sprite = new THREE.Mesh( plane , material );
	//sprite.renderOrder = 4;
	sprite.name = name; 
	sprite.position.set(pos[0],pos[1],pos[2]);
	sprite.scale.set( scale[0],scale[1],1);
	//if (faceCamera) sprite.setFromVector3(camera.position);
	scene.add(sprite);
	return sprite;
}

function makeSprite( pos, name, material, size, scale ) {
	var sprite = new THREE.Sprite( material );
	//sprite.renderOrder = 4;
	sprite.position.set(pos[0],pos[1],pos[2]);
	sprite.scale.set( scale[0],scale[1],1);
	scene.add(sprite);
	return sprite;
}

// model
var manager = new THREE.LoadingManager();
manager.onProgress = function( item, loaded, total ) {
	//console.log( item, loaded, total );
};

var onProgress = function( xhr ) {

	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		//console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
	}
};

var onError = function( xhr ) {
	console.error( xhr );
	gameLoadData.splice(loaderIndex,0,currentLoadingTexture);
	loadProgressAmount--;
	loadSequence();
};

var materials = {};
var models = {};
var mixers = [];
var sounds = [];
// load a resource
var currentLoadingTexture;

var loader = new THREE.TextureLoader();
var loaderIndex = 0;
var globalLastLoad = "";
var levelLoadedNumber = 0;

function restartLoadSequence(){
	loaderIndex = 0;
	loadSequence();
}
var clearTimeoutRef = -1;
function nextLoad() {
	clearTimeoutRef = setTimeout("loadSequence()",0.0001);
}

var startPlayingMenuMusic = 0;
function loadSequence() {
	clearTimeout(clearTimeoutRef);
	if (animationStartTime>-1 || (gameState>1 && !betweenLevelPreloading) ){
		clearTimeoutRef = setTimeout(loadSequence,250);
		return;
	}
	currentLoadingTexture = gameLoadData[0];
	/*
	if (currentLoadingTexture.level!=undefined && currentLoadingTexture.level!=levelNum ) {
		loaderIndex++;
		if (gameLoadData.length>loaderIndex) {
			nextLoad();
		} else {
			LoadComplete();
		}
		return;
	}*/
	gameLoadData.splice(loaderIndex,1);
	loadProgressAmount++;
	switch (currentLoadingTexture.type) {
		case "Command":
			switch (currentLoadingTexture.id) {	
				case "DisplayLoadText":
					
					setLegalText();// StartDate
					
					setFieldText("StartDate","ninjaLogoText");
					setFieldText("StartDate","ninjaLogoText2");
					setFieldText("StartDate","ninjaLogoText3");
					setFieldText("StartDate","ninjaLogoText4");
					//setFieldText("Loading_Bar","loadingMessage");
					setFieldText("Title","titleGameName");
					setFieldText("Description","titleDescription");
					setFieldText("Action_Button","titlePlayText");
					if (isMobile) {
						//setFieldText("Loading_Mobile","loadingPrompt");
						//setFieldText("IntroPrompt_Mobile","titleInstructions");
					} else {
						//setFieldText("Loading_PC","loadingPrompt");
						//setFieldText("IntroPrompt_PC","titleInstructions");
					}
					
					document.getElementById("blocker").style.visibility="hidden";
					break;
				case "StartGame":
					createLegalBlock();
					loadingPhase=1;
					levelLoadedNumber = 1;
					LoadComplete();
					break;
				case "StartGameDemo":
					document.getElementById("loadbarBackground2").style.visibility = "hidden";
					document.getElementById("loadbar2").style.visibility = "hidden";
					loadingPhase=2;
					break;
				case "LevelLoaded":
					levelLoadedNumber = currentLoadingTexture.value;
					break;
				case "HubUrl":
					hubMenu = currentLoadingTexture.value;
					break;
			}
			if (gameLoadData.length>loaderIndex) {
				loadSequence();
			}
			break;
		case "audio":
			
			if (audioFallback){
				//trace("audioFallback:"+currentLoadingTexture.id);
				music.isReallyPlaying=false;
				var aud = document.createElement("audio");
				aud.src = currentLoadingTexture.value;	
				aud.loop = (currentLoadingTexture.loop=="1");
				
				sounds[currentLoadingTexture.id]=aud;
				if (currentLoadingTexture.id=="MenuLoop") {
					aud.addEventListener('loadeddata', function() {
						if (this.readyState>=2) {
							this.loop=true;
							playMusic("MenuLoop");
						}
					});
				}
				if (gameLoadData.length>loaderIndex) {
					loadSequence();
				}
			}else{
				var audioLoader = new THREE.AudioLoader();

				//Load a sound and set it as the Audio object's buffer
				audioLoader.load( currentLoadingTexture.value, function( buffer ) {	
					sounds[currentLoadingTexture.id] = buffer;
					//console.log(buffer);
					if (currentLoadingTexture.id==="MenuLoop") {
						//setTimeout(	playMusic,500,currentLoadingTexture.id);
					}

					if (gameLoadData.length>loaderIndex) {
						loadSequence(); 
					}
				});
			}
			break;
		case "fbx":
			var fbxLoader = new THREE.FBXLoader(manager);
			fbxLoader.loadzip( 
				currentLoadingTexture.value,
				function( object ) {

					//object.mixer = new THREE.AnimationMixer( object );
					//mixers.push( object.mixer );

					//var action = object.mixer.clipAction( object.animations[ 0 ] );
					//console.log("animation[0]:"+currentLoadingTexture.id+":"+THREE.AnimationClip.toJSON(object.animations[ 0 ]));
					//action.setLoop( currentLoadingTexture.loop?THREE.LoopRepeat:THREE.LoopOnce,1);

					var container = new THREE.Group();
					container.add(object);
					//object.animations[0].trim().optimize();
					object.animations[0].loop = currentLoadingTexture.loop;
					object.animations[0].name=currentLoadingTexture.id;
					if (currentLoadingTexture.root!="") {
						//console.log("Add anim:"+currentLoadingTexture.id+" to "+currentLoadingTexture.root+":"+models[currentLoadingTexture.root]);
						models[currentLoadingTexture.root].children[0].animations.push(object.animations[0]);
					}else{
						object.lastLoad = fbxLoader.lastLoad;
						globalLastLoad = fbxLoader.lastLoad;
						object.lastResPath = fbxLoader.lastResPath; 
						models[currentLoadingTexture.id]=container;
					}
					if (gameLoadData.length>loaderIndex) {
						loadSequence();
					} 

				}, // Function called when download progresses
				onProgress,
				// Function called when download errors		
				onError);
			break;
		case "fbxJSON":
			var fbxLoader = new THREE.FBXLoader();
			fbxLoader.load(
				// resource URL
				currentLoadingTexture.value,
				function ( model ) {
					models[currentLoadingTexture.id] = model;
					scene.add(model);
					if (gameLoadData.length>loaderIndex) {
						loadSequence();
					} 
				},
				// Function called when download progresses
				function ( xhr ) {
					//console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
				},
				// Function called when download errors
				function ( xhr ) {
					onError();
					console.log( 'An error happened:'+currentLoadingTexture.value );
				}
			);
			break;
		case "json":
			var fbxLoader = new THREE.JSONLoader();
			fbxLoader.load(
			
				// resource URL
				currentLoadingTexture.value,
				function ( geometry, materials ) {
					models[currentLoadingTexture.id] = model;
					var model = new THREE.Mesh(geometry,materials[0]);
					//materials[currentLoadingTexture.id] = material[0];
					model.scale.set(5,5,5);
					model.position.set(0,0,0);
					scene.add(model);
					if (gameLoadData.length>loaderIndex) {
						loadSequence();
					} 
				},
				// Function called when download progresses
				function ( xhr ) {
					//console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
				},
				// Function called when download errors
				function ( xhr ) {
					onError();
					console.log( 'An error happened:'+currentLoadingTexture.value );
				}
			);
			break;
		case "image":
		case "plane":
			loader.load(
				// resource URL
				currentLoadingTexture.value,
				// Function when resource is loaded
				function ( texture ) {
					// do something with the texture
					//texture.generateMipmaps = false;
					//texture.magFilter = THREE.LinearFilter;
					//texture.minFilter = THREE.LinearFilter;
					
					var material;
					if (currentLoadingTexture.type==="plane") {
						material = new THREE.MeshBasicMaterial({transparent:true, map:texture, color: 0xffffff});
						//material.alphaTest = 0.01;
					} else {
						material = new THREE.SpriteMaterial( {
						color: 0xffffff,
						map: texture
					 });
					}
					material.srcInfo = currentLoadingTexture;
					materials[currentLoadingTexture.id] = material;
					if (gameLoadData.length>loaderIndex) {
						loadSequence();
					}
				},
				// Function called when download progresses
				function ( xhr ) {
					//console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
				},
				// Function called when download errors
				function ( xhr ) {
					onError();
					console.log( 'An error happened:'+currentLoadingTexture.value );
				}
			);
		break;
		default:
			//if (currentLoadingTexture.type=="Text"){ 
				textAssets[currentLoadingTexture.id] = currentLoadingTexture;
			//}
			if (currentLoadingTexture.id==="Title") {
				var pageTitle = currentLoadingTexture.data;
				pageTitle = pageTitle.replace("![CDATA[","").replace("]]","");
				document.title = pageTitle;
			}
			// definition specify's localization information
			if (gameLoadData.length>loaderIndex) {
				loadSequence();
			}
		break;
	}
}
function getLocalizedText( textId ) {
	if (textAssets[textId].data) {
		return textAssets[textId].data.replace("![CDATA[","").replace("]]","");
	}
	return textAssets[textId].value.replace("![CDATA[","").replace("]]","");
}

//loadJSON();

setAnim = function (tId, destObj) {
	destObj.currentAnimation = tId;
	if (destObj.children[0].mixer === undefined) {
		destObj.children[0].mixer = new THREE.AnimationMixer( destObj.children[0] );
		destObj.children[0].mixer.timeScale = enemyAnimationTimeScale;
		mixers.push( destObj.children[0].mixer );
	} else {
		destObj.children[0].mixer.stopAllAction ();
		if (destObj.playingAnimation!==tId) {
			var timeScale = destObj.children[0].mixer.timeScale;
			mixers.splice(mixers.lastIndexOf(destObj.children[0].mixer),1);
			destObj.children[0].mixer = new THREE.AnimationMixer( destObj.children[0] );
			mixers.push(destObj.children[0].mixer);
			
		destObj.children[0].mixer.timeScale = enemyAnimationTimeScale;
		}
	}
	
	var action = destObj.children[0].mixer.clipAction( tId );
	action.reset();
	var myClip = action.getClip();
	var loopval = myClip.loop?THREE.LoopRepeat:THREE.LoopOnce;
	var loopNum = myClip.loop?100:1;
	
	action.clampWhenFinished = !myClip.loop;
	action.timeScale = destObj.children[0].mixer.timeScale;
	action.setLoop(loopval,loopNum);
	destObj.playingAnimation = tId;
		
	action.play().fadeIn(0.1);
	switch (tId) {
		case "NyaFBX_hit":
			playSound("enemyhit");
			break;
		case "NyaFBX_attack_B":
			playSound("NyaHit_B");
			break;
		case "NyaFBX_attack_F":
			playSound("NyaHit_F");
			break;
		case "NyaFBX_attack_P":
			break;
		case "NyaFBX_attack_L":
			playSound("NyaHit_L");
			break;
		case "NyaFBX_attack_R":
			playSound("NyaHit_R");
			break;
		case baseEnemyName+"_jump":
			//playSound("enemyjump");
			break;
		case baseEnemyName+"_hit":
			if (Math.random()<.5) {
				if (Math.random()<.6) {
					playSound("Nyahit");
				} else {
					playSound("NyaHit_Alt"+(rnd(3)+1));
				}	
			}
			break;
		case baseEnemyName+"_attack":
			//
			break;
			
	}
} 

function parseFBX(tName) {
	if ( models[tName] !=undefined ) {
		
		var srcObj = models[tName].children[0];
		var fbxLoader = new THREE.FBXLoader(manager);
		var object = fbxLoader.parse(srcObj.lastLoad,srcObj.lastResPath);
		
		object.animations = srcObj.animations;
		object.mixer = new THREE.AnimationMixer( object );
		mixers.push( object.mixer ); 
		//console.log("parseFBX:"+object.animations.length);
		var action = object.mixer.clipAction( object.animations[ 0 ] );
		action.reset();
		//action.play();
		var container = new THREE.Group();
		container.add(object);
		
		return container;
	}
}


function setFieldText( sourceName, fieldName) {
	var tAsset = textAssets[sourceName];
	var tField;
	if (fieldName!=""){
		tField = document.getElementById(fieldName);
	} else {
		tField = document.getElementById(tAsset.target);
	}
	if (tField !== undefined && tAsset !== undefined) {
		//tField.style.visibility="visible";
		var itemText = tAsset.data;
		if (itemText!==undefined) {
			itemText = itemText.replace("![CDATA[","").replace("]]","");//![CDATA[Tap Anywhere to Start]]
			tField.innerHTML = itemText;
			tAsset.value = itemText;
			__utils.doHTMLText(tField,tAsset);
			if (tAsset.style) {
				if (tAsset.style!=""){
					tField.setAttribute("style",tAsset.style); 
					if (tAsset.style.indexOf("font-size:")>-1||tAsset.style.indexOf("fontSize:")>-1){
						var tFontSize=tAsset.style.substr(1+tAsset.style.indexOf(":",Math.max(tAsset.style.indexOf("font-size"),tAsset.style.indexOf("fontSize"))));
						tFontSize = tFontSize.substr(0,tFontSize.indexOf("px;"));
						storedLocations[fieldName].fontOverride = parseInt(tFontSize);
					}
				}
			}
			
			if (tAsset.size && storedLocations!==undefined){
				if (storedLocations[fieldName]) {
					storedLocations[fieldName].textScale=tAsset.size;
				}
			}
		}
	}
}

function shiftAudioButtons() {
	//storedLocations.soundButton2=storedLocations.exitButton2;
	//storedLocations.soundButton2off==storedLocations.exitButton2;
	//storedLocations.soundButton=storedLocations.exitButton;
	//storedLocations.soundButtonoff==storedLocations.exitButton;
}

function getGoodlocs(){
	var baseLocs = JSON.parse('{"titleGameName":{"top":12,"left":375,"width":560,"height":135,"fontSize":32,"anchor":"TR"},'+
	'"titleDescription":{"top":62,"left":375,"width":450,"height":135,"fontSize":18,"anchor":"TR"},'+
	'"playButton":{"top":407,"left":708,"width":193,"height":133,"fontSize":16,"anchor":"BR"},'+
	'"titlePlayText":{"top":437,"left":708,"width":193,"height":85,"fontSize":42,"anchor":"BR"},'+
	'"playAgain":{"top":407,"left":465,"width":210,"height":133,"fontSize":16,"anchor":"BR"},'+
	'"moreGames":{"top":407,"left":710,"width":210,"height":133,"fontSize":16,"anchor":"BR"},'+
	'"playAgainButton":{"top":427,"left":465,"width":210,"height":85,"fontSize":24,"anchor":"BR"},'+
	'"moreGamesButton":{"top":427,"left":710,"width":210,"height":85,"fontSize":24,"anchor":"BR"},'+
	'"levelMessageCharacter":{"top":30,"left":0,"width":440,"height":510,"fontSize":16,"anchor":"BL"},'+
	'"loadingScreen":{"top":0,"left":0,"width":923,"height":508,"fontSize":16,"anchor":"S"},'+
	'"titleScreen":{"top":0,"left":0,"width":923,"height":508,"fontSize":16,"anchor":"S"},'+
	'"levelMessage":{"top":0,"left":0,"width":923,"height":508,"fontSize":16,"anchor":"S"},'+
	'"loadingMessage":{"top":400,"left":100,"width":760,"height":0,"fontSize":24,"anchor":"C"},'+
	'"levelBackground":{"top":0,"left":0,"width":960,"height":540,"fontSize":16,"anchor":"S"},'+
	'"levelMarker1":{"top":150,"left":430,"width":100,"height":150,"fontSize":16,"anchor":"TR"},'+
	'"levelMarker2":{"top":175,"left":556,"width":112,"height":137,"fontSize":16,"anchor":"TR"},'+
	'"levelMarker3":{"top":160,"left":690,"width":100,"height":140,"fontSize":16,"anchor":"TR"},'+
	'"levelMarker4":{"top":150,"left":815,"width":113,"height":150,"fontSize":16,"anchor":"TR"},'+
	'"levelMarker1_Off":{"top":150,"left":430,"width":100,"height":150,"fontSize":16,"anchor":"TR"},'+
	'"levelMarker2_Off":{"top":175,"left":556,"width":112,"height":137,"fontSize":16,"anchor":"TR"},'+
	'"levelMarker3_Off":{"top":160,"left":690,"width":100,"height":140,"fontSize":16,"anchor":"TR"},'+
	'"levelMarker4_Off":{"top":150,"left":815,"width":113,"height":150,"fontSize":16,"anchor":"TR"},'+
	'"exitButton2":{"top":7,"left":890,"width":48,"height":48,"fontSize":16,"anchor":"TR"},'+
	'"soundButton2":{"top":5,"left":843,"width":48,"height":48,"fontSize":16,"anchor":"TR"},'+
	'"soundButton2off":{"top":5,"left":843,"width":48,"height":48,"fontSize":16,"anchor":"TR"},'+
	'"soundButton3":{"top":446,"left":236,"width":48,"height":48,"fontSize":16,"anchor":"BL"},'+
	'"soundButton3off":{"top":446,"left":236,"width":48,"height":48,"fontSize":16,"anchor":"BL"},'+
	'"level1Text":{"top":337,"left":460,"width":50,"height":50,"fontSize":32,"anchor":"TR"},'+
	'"level2Text":{"top":337,"left":591,"width":50,"height":50,"fontSize":32,"anchor":"TR"},'+
	'"level3Text":{"top":337,"left":715,"width":50,"height":50,"fontSize":32,"anchor":"TR"},'+
	'"level4Text":{"top":337,"left":851,"width":50,"height":50,"fontSize":32,"anchor":"TR"},'+
	'"headingText":{"top":92,"left":320,"width":320,"height":90,"fontSize":40,"anchor":"C"},'+
	'"loadingBackground":{"top":0,"left":0,"width":960,"height":540,"fontSize":16,"anchor":"C"},'+
	'"loadingCharacter":{"top":0,"left":0,"width":0,"height":0,"fontSize":16,"anchor":"BL"},'+
	'"loadingGraphic":{"top":230,"left":0,"width":960,"height":67,"fontSize":16,"anchor":"C"},'+
	'"endGameText":{"top":92,"left":370,"width":520,"height":90,"fontSize":40,"anchor":"TR"},'+
	'"loadingRing":{"top":175,"left":385,"width":190,"height":190,"fontSize":16,"anchor":"C"},'+
	'"loadingRingCenter1":{"top":250,"left":460,"width":40,"height":40,"fontSize":16,"anchor":"C"},'+
	'"loadingRingCenter2":{"top":250,"left":460,"width":40,"height":40,"fontSize":16,"anchor":"C"},'+
	'"loadingRingCenter3":{"top":250,"left":460,"width":40,"height":40,"fontSize":16,"anchor":"C"},'+
	'"loadingRingCenter4":{"top":250,"left":460,"width":40,"height":40,"fontSize":16,"anchor":"C"},'+
	'"loadingRingCenter5":{"top":250,"left":460,"width":40,"height":40,"fontSize":16,"anchor":"C"},'+
	'"loadingRingCenter6":{"top":250,"left":460,"width":40,"height":40,"fontSize":16,"anchor":"C"},'+
	'"loadbarBackground":{"top":400,"left":400,"width":160,"height":16,"fontSize":16,"anchor":"C"},'+
	'"loadbarBackground2":{"top":400,"left":720,"width":160,"height":12,"fontSize":16,"anchor":"BR"},'+
	'"titleBackground":{"top":0,"left":0,"width":960,"height":540,"fontSize":16,"anchor":"S"},'+
	'"titleInstructions":{"top":390,"left":523,"width":420,"height":55,"fontSize":10,"anchor":"BR"},'+
	'"titleInstructionsImage":{"top":164,"left":523,"width":420,"height":229,"fontSize":12,"anchor":"BR"},'+
	'"titleInstructionsImage_PC":{"top":164,"left":523,"width":420,"height":229,"fontSize":12,"anchor":"BR"},'+
	'"titleCharacter":{"top":40,"left":82,"width":435,"height":500,"fontSize":16,"anchor":"BL"},'+
	'"exitButton":{"top":7,"left":890,"width":48,"height":48,"fontSize":16,"anchor":"TR"},'+
	'"pauseButton":{"top":446,"left":305,"width":64,"height":64,"fontSize":16,"anchor":"BL"},'+
	'"soundButton":{"top":5,"left":843,"width":48,"height":48,"fontSize":16,"anchor":"TR"},'+
	'"soundButtonoff":{"top":5,"left":843,"width":48,"height":48,"fontSize":16,"anchor":"TR"},'+
	'"levelMessage1":{"top":90,"left":0,"width":158,"height":167,"fontSize":16,"anchor":"BL"},'+
	'"levelMessage2":{"top":195,"left":0,"width":144,"height":188,"fontSize":16,"anchor":"BL"},'+
	'"levelMessage3":{"top":280,"left":40,"width":191,"height":292,"fontSize":16,"anchor":"BL"},'+
	'"hitResponseCharacterGlow":{"top":-270,"left":60,"width":840,"height":840,"fontSize":16,"anchor":"BC"},'+
	'"hitResponseCharacter":{"top":30,"left":260,"width":440,"height":510,"fontSize":16,"anchor":"BC"},'+
	'"hitResponseText":{"top":417,"left":330,"width":300,"height":135,"fontSize":32,"anchor":"BC"},'+
	'"ninjagoLogo":{"top":17,"left":11,"width":215,"height":48,"fontSize":16,"anchor":"TL"},'+
	'"ninjagoLogo2":{"top":17,"left":11,"width":215,"height":48,"fontSize":16,"anchor":"TL"},'+
	'"ninjagoLogo3":{"top":415,"left":11,"width":215,"height":48,"fontSize":16,"anchor":"BL"},'+
	'"ninjaLogoText":{"top":66,"left":11,"width":215,"height":25,"fontSize":10.3,"anchor":"TL"},'+
	'"ninjaLogoText2":{"top":66,"left":11,"width":215,"height":25,"fontSize":10.3,"anchor":"TL"},'+
	'"ninjaLogoText3":{"top":467,"left":2,"width":233,"height":25,"fontSize":10.3,"anchor":"BL"},'+
	'"ninjagoLogo4":{"top":20,"left":372,"width":215,"height":48,"fontSize":16,"anchor":"TC"},'+
	'"ninjaLogoText4":{"top":70,"left":372,"width":215,"height":25,"fontSize":7,"anchor":"TC"},'+
	'"siteLink":{"top":460,"left":0,"width":186,"height":50,"fontSize":16,"anchor":"BL"},'+
	'"siteLinkText":{"top":474,"left":-10,"width":210,"height":592,"fontSize":20,"anchor":"BL"},'+
	'"siteLink2":{"top":460,"left":0,"width":186,"height":50,"fontSize":16,"anchor":"BL"},'+
	'"siteLinkText2":{"top":474,"left":-10,"width":210,"height":592,"fontSize":20,"anchor":"BL"}}'); 
	
	var vShift = oCONFIG.legalVShift*5;
	if (isMobile) {
		vShift += 30;
	}
	baseLocs.siteLink.top-=vShift;
	baseLocs.siteLink2.top-=vShift;
	baseLocs.siteLinkText.top-=vShift;
	baseLocs.siteLinkText2.top-=vShift;
	
	
	return baseLocs;
	
}
if (!audioFallback){
	var listener = new THREE.AudioListener();
	var soundChanNum = 0;
	var soundList = [];//
	for (var idx= 0; idx<4; idx++) {
		soundList.push(new THREE.Audio( listener ));
	}
	var stepSound = new THREE.Audio( listener );


	music = new THREE.Audio( listener );
	music.hasPlaybackControl = true;
}

function playSound(sndId) {
	if (isMuted) return false;

	if (audioFallback) {
		if (sounds[sndId]) {
			sounds[sndId].currentTime=0;
			sounds[sndId].play();
		} else {
			//trace("can't Play:"+sndId);
			return true;
		}
		return false;
	}
	var sound = soundList[soundChanNum];
	if (sound!=undefined) {
		var tBuf = sounds[sndId];
		if (tBuf!==undefined){
			//if (sound.isPlaying) {
			//	sound.stop();
				//setTimeout(playSound,10,sndId);
				//return false;
			//}
				sound = new THREE.Audio( listener );
			soundChanNum++;
			if (soundChanNum>=soundList.length) soundChanNum=0;
			sound.setBuffer( tBuf );
			sound.setLoop(false);
			sound.play();
		} else {
			return true;
		}
	}
	return false;
}

var lastMusicPlay = "";
var firstEvent = 0;
function playMusic(sndId) {
	
	if (isMuted) {
		
		lastMusicPlay = sndId;
		return false;
	}
	if (isMobile && !firstEvent) {
		//return false;
	}
	if (audioFallback) {
		if (lastMusicPlay!=""&& lastMusicPlay!=undefined && sounds[lastMusicPlay]) sounds[lastMusicPlay].pause();
		if (sounds[sndId]) {
			lastMusicPlay = sndId;
			sounds[sndId].paused = false;
			sounds[sndId].loop=true;
			sounds[sndId].play();
			if (sounds[sndId].readyState>3){
				sounds[sndId].currentTime = 0;
			}
			music.isReallyPlaying = true;
			
		} else {
			return true;
		}
		return false;
	} 
	if (music===undefined){
		//console.log("Music is dead!");
	}
	if (music.isReallyPlaying ) {
		music.stop();
		music.isReallyPlaying = false;
		setTimeout(playMusic,25,sndId);
		music = new THREE.Audio( listener );
		return;
	}
	var tBuf = sounds[sndId];
	if (tBuf!==undefined){
		music.setBuffer( tBuf );
		music.setLoop(true);
		music.setVolume(0.5);
		music.play(); 
		//trace(music);
		music.isReallyPlaying = true;
	} else {
		return true;
	}
	
	lastMusicPlay = sndId;
	return false;
}

function stopMusic() {
	if (isMuted) {
		return;
	}
	if (audioFallback) {
		if ( lastMusicPlay!="" && sounds[lastMusicPlay] ) {
			sounds[lastMusicPlay].pause();
		}
	} else {
		if (music.isReallyPlaying ) {
			music.stop();
			music.isReallyPlaying=false;
		}
	}
}














