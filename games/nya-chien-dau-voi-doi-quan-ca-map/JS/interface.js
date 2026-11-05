// Set up scene, canvas, and camera
//"levelMessageBackground",

var wideMin = 1.1;
var portMax = .565;
var tallScaleMax = .660;
var tallMax = .7;
var squareMax = 1.20;
var tenEighty = 1.7777;

var XML;
var readCSSIds = ["BR:titlePlayText","BR:playAgainButton", "BR:moreGamesButton","TR:siteLinkText","BL:siteLinkText2","BR:playButton","BR:playAgain", "BR:moreGames",
	"BL:levelMessageCharacter", "S:loadingScreen", "S:titleScreen", "S:levelMessage", "C:loadingMessage",
	"S:levelBackground", "TR:levelMarker1", "TR:levelMarker2", "TR:levelMarker3", "TR:levelMarker4",
	"TR:levelMarker1_Off", "TR:levelMarker2_Off", "TR:levelMarker3_Off", "TR:levelMarker4_Off","TR:exitButton2", "TR:soundButton2","TR:soundButton2off","BL:soundButton3","BL:soundButton3off",
	"TR:level1Text", "TR:level2Text", "TR:level3Text", "TR:level4Text", "C:headingText", 
	"C:loadingBackground", "BL:loadingCharacter", "C:loadingGraphic","TR:endGameText",
	"C:loadingRing", "C:loadingRingCenter1", "C:loadingRingCenter2", "C:loadingRingCenter3", "C:loadingRingCenter4", "C:loadingRingCenter5", "C:loadingRingCenter6",
	"C:loadbarBackground","BR:loadbarBackground2", 
	"S:titleBackground", "TR:titleGameName", "TR:titleDescription", "BR:titleInstructions", "BR:titleInstructionsImage", "BR:titleInstructionsImage_PC", "BL:titleCharacter",
	"TR:exitButton", "BL:pauseButton", "TR:soundButton","TR:soundButtonoff", "BL:levelMessage1", "BL:levelMessage2", "BL:levelMessage3",
	"BC:hitResponseCharacterGlow", "BC:hitResponseCharacter", "BC:hitResponseText",
	"TL:ninjagoLogo", "TL:ninjagoLogo2","BL:ninjagoLogo3","BL:ninjagoLogo4","TL:ninjaLogoText","TL:ninjaLogoText2","BL:ninjaLogoText3","BL:ninjaLogoText4",
	"TR:siteLink", "BL:siteLink2"//,
	//"C:pauseGameHeadingText", "C:pauseGameOptions1", "C:pauseGameOptions2", "C:pauseGameOptions3", "C:pauseGameOptions4"
];
/*"loadingMessage","loadingPrompt",*/
var locationsInited = false;

var gridOff = 3;
var gridScale = {
	cX: -0.2,
	cY: 0.2,
	sX: 1.5,
	sY: 1.2
};
var stageWide = {
	id:"wide",
	portrait: false,
	wide: true,
	cameraWidth: 10,
	gameUIWidth:10,
	gameUIHeight: 5,
	width: 1920 / 2,
	height: 1080 / 2,
	particleScale: 0.6,
	ratio: 1080.0 / 1920,
	invRatio: 1920.0 / 1080
};
var stageDesktop = {
	id:"desktop",
	portrait: false,
	wide: false,
	cameraWidth: 8,
	gameUIWidth:8,
	gameUIHeight: 6,
	width: 960,
	height: 720,
	particleScale: 0.5,
	ratio: 720.0 / 960,
	invRatio: 960.0 / 720
};
var stageSquare = {
	id:"square",
	portrait: true,
	wide: false,
	cameraWidth: 6,
	gameUIWidth: 6,
	gameUIHeight: 6,
	width: 800,
	height: 800,
	particleScale: 0.3,
	ratio: 1,
	invRatio: 1
};
var stageTall = {
	id:"tall",
	portrait: true,
	wide: false,
	cameraWidth: 6,
	gameUIWidth: 6,
	gameUIHeight: 6,
	width: 700,
	height: 800,
	particleScale: 0.3,
	ratio: 1.0,
	invRatio: 1.0
};
var stagePortrait = {
	id:"portrait",
	portrait: true,
	wide: false,
	cameraWidth: 6,
	gameUIWidth: 6,
	gameUIHeight: 9,
	width: 600, 	//1200/2,
	height: 800,	//1920/2,
	particleScale: 0.3,
	ratio: 1.25,	//1920 / 1200,
	invRatio: 0.75 	//1200 / 1920
};

if (isMobile) {
	stageWide.particleScale=0.3;
	stageDesktop.particleScale=0.3;
	stagePortrait.particleScale=0.3;
	stageSquare.particleScale=0.3;
	stageTall.particleScale=0.3;
}
//Animation status
var animationTimeout = 0;
var animatorTimeout = 0;
var currentAnimation = {};


$.ajax({
	
	
	
			type: "GET",
			url: "indexNinjagoMovieGame.xml",
			dataType: "xml",
			error: function(){ alert("ajax failed"); },
			success: function(xml) {
				XML = xml;
				
							
				
	 }
});
setStage();
//if (window.innerHeight*1.0/window.innerWidth>=.75) 
//	stage = stageDesktop;//{width:1920/2,height:1080/2,ratio:1080.0/1920,invRatio:1920.0/1080};
//else


var canvas = document.getElementById("c");
canvas.style.position = "absolute";
canvas.width = stage.width;
canvas.height = stage.height;
var scene = new THREE.Scene();
var cameraWidth = 10;


//camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera = new THREE.OrthographicCamera(-stage.cameraWidth, stage.cameraWidth, stage.cameraWidth * stage.ratio, -stage.cameraWidth * stage.ratio, 0.1, 1000);

if (!audioFallback){
	camera.add( listener );
}
camera.position.set(0, -5, 10);
//camera.position.set(0,0,10);

// Point the camera at a given coordinate
camera.lookAt(new THREE.Vector3(0, 1, -3.5)); //camera.rotation.set(.5,0,0);

var renderer = new THREE.WebGLRenderer();
//renderer.shadowMap.enabled = true;
//renderer.shadowMap.type = THREE.PCFShadowMap;// THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var light2 = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.0);
light2.position.set(0, 1, 1);
scene.add(light2);

var light = new THREE.DirectionalLight(0xffffff, 1.0 );//,100);
light.position.set(0.3, 1, 1);
//light.castShadow = true;

//var helper = new THREE.CameraHelper( light.shadow.camera );
//scene.add( helper );
scene.add(light);

//light.shadow.mapSize.width = 512;  // default
//light.shadow.mapSize.height = 512; // default
//light.shadow.camera.near = 0.5;       // default
//light.shadow.camera.far = 50      // default



var lastUpdate = Date.now();
var celebrating = false;
var resizeIteration = 0;
// Generate Hearts, all open
function hearts() {
	this.objs = [];
	this.slashes = [];
	this.curHearts = 2;
	this.targetHearts = 3;
	this.timing = -1;
	this.setHearts = function (num) {
		this.targetHearts = 3;
	}

	this.update = function () {
		if (this.targetHearts != this.curHearts) {
			var cTime = Date.now() / 1000;
			if (this.timing == -1) {
				this.timing = cTime;
			} else {
				var dTime = cTime - this.timing;
				var losing = this.targetHearts < this.curHearts;
				var targetheart = (losing ? this.curHearts - 1 : this.curHearts);
				if (dTime > 1) {
					this.objs[targetheart].scale.set(1.2, 1.2, 1.2);
					this.slashes[targetheart].scale.set(1.2, 1.2, 1.2);
					if (this.targetHearts < this.curHearts) {
						this.curHearts--;
						if (this.curHearts<=0) {
							//triggerGameOver();
						}
					} else {
						this.curHearts++;
					}
					this.timing = -1;
					for (var idx = 0; idx < 3; idx++) {
						if (idx + 1 <= this.curHearts) {
							this.objs[idx].material = materials["heartFull"];
							this.slashes[idx].position.set(-100,0,0);
						} else {
							this.objs[idx].material = materials["heartEmpty"];
							//this.slashes[idx].position.set(-stage.cameraWidth * .9 + idx * 1.1, 3, 0.3);
							this.slashes[idx].position.set(-stage.gameUIWidth * 0.9 + idx * 1.1, camera.top-1, 0.3);
						}
					}
				} else {
					var tScale = 1 + 0.3 * Math.sin(dTime * Math.PI);
					this.objs[targetheart].scale.set(tScale, tScale, tScale);
					if (losing) {
						//this.slashes[targetheart].material.opacity = dTime;
						
						this.slashes[targetheart].position.set(-stage.gameUIWidth * 0.9 + targetheart * 1.1, camera.top-1, 0.3);
						this.slashes[targetheart].scale.set((1/tScale)+0.2, (1/tScale)+0.2, (1/tScale)+0.2);
					}
				}
			}
		}
	}
}

function powerup() {
	this.objs = [];
	this.meterObj = undefined;
	this.chargeLevel = 0;
	this.meterShader = undefined;
	this.lastUpdate = 0;
	this.setMeter = function (obj) {
		this.meterObj = obj;
		this.meterShader = this.meterObj.material;
	}
	this.update = function () {
		if (!celebrating) {
			var dTime = Math.min(0.005,(Date.now()-this.lastUpdate)/20000.0);
			this.lastUpdate=Date.now();
			this.chargeLevel += dTime;//.001;
			if (this.chargeLevel > 1) this.chargeLevel = 1;
			this.meterShader.uniforms.tLevel.value = this.chargeLevel;
			this.meterShader.needsupdate = true;
		}
		if (this.chargeLevel===1){
			var pulseTime = 3.25+Math.sin(Date.now()/300.0)*.25;
			this.meterObj.scale.set(pulseTime,pulseTime,pulseTime);
			
		}
	}
}

function levelMeter() {
	this.objs = [];
	this.meterObj = undefined;
	this.chargeLevel = 0;
	this.currentLevel = 0;
	this.meterShader = undefined;
	this.meterShader2 = undefined;
	this.setMeter = function (obj, obj2) {
		meterObj = obj;
		this.meterShader = meterObj.material;
		this.meterShader2 = obj2.material;
	}
	this.update = function () {
		var dif = this.currentLevel - this.chargeLevel;
		if (dif !== 0) {
			if (Math.abs(dif) < .02) {
				this.currentLevel = this.chargeLevel;
			} else {
				this.currentLevel -= .02 * dif / Math.abs(dif);
			}
		}
		var tLevel = .05 + .6 * (1 - this.currentLevel);
		if (tLevel > 0.95) tLevel = 1;
		this.meterShader.uniforms.tLevel.value = tLevel;
		this.meterShader2.uniforms.tLevel.value = tLevel;
		this.meterShader.needsupdate = true;
		this.meterShader2.needsupdate = true;
	}
}

function setMessage(msgId) {
	//Look up text in gameLoadData, set values and this display the Message Dialog

}



function norm(val, min, max) {
	return (val-min)/(max-min);
}
function storeLerp( src, dest, val) {
	src.top = src.top*(1-val) + dest.top*val;
	src.left = src.left*(1-val) + dest.left*val;
	src.width = src.width*(1-val) + dest.width*val;
	src.height = src.height*(1-val) + dest.height*val;
	src.fontSize = src.fontSize*(1-val) + dest.fontSize*val;
	return src;
}

function overlay (src, merge) {
	
}

function setStage() {
	var winRatio = window.innerWidth/window.innerHeight;
	var oldStage = (stage!==undefined?stage.id:"Start");

	if (winRatio>wideMin) {
		stage = stageWide;
	} else if (winRatio<=portMax) {
		stage = stagePortrait;
	} else if (winRatio<=tallMax) {
		stage = stageTall;
	} else if (winRatio<=squareMax) { //
		stage = stageSquare;
	}else {
		stage = stageDesktop;
	}
	if (stage.id!==oldStage) { 
		//console.log(oldStage+"->"+stage.id);
	}
	var tDiv;
	
	if (storedLocations===undefined) {
		storedLocations=getGoodlocs();
		if (queryVal===undefined) shiftAudioButtons();
	}
	if ( storedLocations!==undefined) {
		storedLocations.titleCharacter.anchor="BL";
		storedLocations.levelMessageCharacter.anchor="BL";
		
		storedLocations.siteLink={"top":isMobile?430:460,"left":0,"width":186,"height":50,"fontSize":16,"anchor":"BL"};
		storedLocations.siteLinkText={textScale:storedLocations.siteLinkText.textScale,"top":isMobile?444:474,"left":-10,"width":210,"height":592,"fontSize":20,"anchor":"BL"};
		switch (stage.id) {
			case ("square"): 				
				var n = norm(winRatio,tallMax,squareMax);
					
				var tnr = 0.5476;

				var store = storeLerp({"top":-200,"left":425,"width":400,"height":203,"fontSize":12,"anchor":"BC"},{"top":139,"left":486,"width":378,"height":192,"fontSize":12,"anchor":"BC"},n);
				storedLocations.titleInstructionsImage= store;
				storedLocations.titleInstructionsImage_PC =store;
				
				document.getElementById("titleGameName").style.textAlign = "center";
				document.getElementById("endGameText").style.textAlign = "center";
				document.getElementById("titleDescription").style.textAlign = "center";
				storedLocations.titleGameName = {textScale:storedLocations.titleGameName.textScale,top:100,left:50,width:860,height:135,fontSize:48, "anchor":"TCS"};
				storedLocations.titleDescription = {textScale:storedLocations.titleDescription.textScale,top:155,left:50,width:860,height:135,fontSize:20, "anchor":"TCS"};
				
				storedLocations.endGameText={textScale:storedLocations.endGameText.textScale,"top":92,"left":370,"width":520,"height":90,"fontSize":40,"anchor":"TR"};
				storedLocations.levelMarker1={"top":150,"left":430,"width":100,"height":150,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker2={"top":175,"left":556,"width":112,"height":137,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker3={"top":160,"left":690,"width":100,"height":140,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker4={"top":150,"left":815,"width":113,"height":150,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker1_Off={"top":150,"left":430,"width":100,"height":150,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker2_Off={"top":175,"left":556,"width":112,"height":137,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker3_Off={"top":160,"left":690,"width":100,"height":140,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker4_Off={"top":150,"left":815,"width":113,"height":150,"fontSize":16,"anchor":"TR"};
				storedLocations.level1Text={"top":337,"left":460,"width":50,"height":50,"fontSize":32,"anchor":"TR"};
				storedLocations.level2Text={"top":337,"left":591,"width":50,"height":50,"fontSize":32,"anchor":"TR"};
				storedLocations.level3Text={"top":337,"left":715,"width":50,"height":50,"fontSize":32,"anchor":"TR"};
				storedLocations.level4Text={"top":337,"left":851,"width":50,"height":50,"fontSize":32,"anchor":"TR"};
				
				storedLocations.pauseButton={"top":470,"left":890,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				storedLocations.soundButton3={"top":470,"left":810,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				storedLocations.soundButton3off={"top":470,"left":810,"width":64,"height":64,"fontSize":16,"anchor":"BR"};

			break;
			case ("tall"): 
				var n = Math.max(0,norm(winRatio,tallScaleMax,tallMax)); 
				var tnr = 0.5476;
				var store = storeLerp({"top":-220,"left":250,"width":460,"height":251,"fontSize":12,"anchor":"BC"},{"top":-200,"left":275,"width":400,"height":203,"fontSize":12,"anchor":"BC"},n);//{"top":-140,"left":420+80,"width":320,"height":320*tnr,"fontSize":12,"anchor":"BC"},n);
				storedLocations.titleInstructionsImage= store;
				storedLocations.titleInstructionsImage_PC =store;
				document.getElementById("titleGameName").style.textAlign = "center";
				document.getElementById("endGameText").style.textAlign = "center";
				document.getElementById("titleDescription").style.textAlign = "center";
				storedLocations.titleGameName = {textScale:storedLocations.titleGameName.textScale,top:100,left:50,width:860,height:135,fontSize:44, "anchor":"TCS"};
				storedLocations.titleDescription = {textScale:storedLocations.titleDescription.textScale,top:165,left:50,width:860,height:135,fontSize:18, "anchor":"TCS"};
				
				storedLocations.endGameText={textScale:storedLocations.endGameText.textScale,"top":200,"left":50,"width":860,"height":90,"fontSize":40,"anchor":"TCS"};
				storedLocations.levelMarker1={"top":250,"left":200,"width":100,"height":150,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker2={"top":275,"left":326,"width":112,"height":137,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker3={"top":260,"left":460,"width":100,"height":140,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker4={"top":250,"left":585,"width":113,"height":150,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker1_Off={"top":250,"left":200,"width":100,"height":150,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker2_Off={"top":275,"left":326,"width":112,"height":137,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker3_Off={"top":260,"left":460,"width":100,"height":140,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker4_Off={"top":250,"left":585,"width":113,"height":150,"fontSize":16,"anchor":"TC"};
				storedLocations.level1Text={"top":437,"left":200,"width":100,"height":50,"fontSize":32,"anchor":"TC"};
				storedLocations.level2Text={"top":437,"left":326,"width":112,"height":50,"fontSize":32,"anchor":"TC"};
				storedLocations.level3Text={"top":437,"left":460,"width":100,"height":50,"fontSize":32,"anchor":"TC"};
				storedLocations.level4Text={"top":437,"left":585,"width":113,"height":50,"fontSize":32,"anchor":"TC"};
				
				
				storedLocations.pauseButton={"top":440,"left":890,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				storedLocations.soundButton3={"top":440,"left":810,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				storedLocations.soundButton3off={"top":440,"left":810,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				
			break;
			case ("portrait"):
				storedLocations.titleInstructionsImage= {"top":-190,"left":270,"width":420,"height":230,"fontSize":12,"anchor":"BC"};
				storedLocations.titleInstructionsImage_PC ={"top":-190,"left":270,"width":420,"height":230,"fontSize":12,"anchor":"BC"};
				document.getElementById("titleGameName").style.textAlign = "center";
				document.getElementById("endGameText").style.textAlign = "center";
				document.getElementById("titleDescription").style.textAlign = "center";
				storedLocations.titleGameName = {textScale:storedLocations.titleGameName.textScale,top:100,left:50,width:860,height:135,fontSize:48, "anchor":"TCS"};
				storedLocations.titleDescription = {textScale:storedLocations.titleDescription.textScale,top:225,left:50,width:860,height:135,fontSize:18, "anchor":"TCS"};
				
				storedLocations.endGameText={textScale:storedLocations.endGameText.textScale,"top":200,"left":50,"width":860,"height":90,"fontSize":40,"anchor":"TCS"};
				storedLocations.levelMarker1={"top":250,"left":220,"width":100,"height":150,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker2={"top":275,"left":346,"width":112,"height":137,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker3={"top":260,"left":480,"width":100,"height":140,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker4={"top":250,"left":605,"width":113,"height":150,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker1_Off={"top":250,"left":220,"width":100,"height":150,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker2_Off={"top":275,"left":346,"width":112,"height":137,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker3_Off={"top":260,"left":480,"width":100,"height":140,"fontSize":16,"anchor":"TC"};
				storedLocations.levelMarker4_Off={"top":250,"left":605,"width":113,"height":150,"fontSize":16,"anchor":"TC"};
				storedLocations.level1Text={"top":437,"left":220,"width":100,"height":50,"fontSize":32,"anchor":"TC"};
				storedLocations.level2Text={"top":437,"left":346,"width":112,"height":50,"fontSize":32,"anchor":"TC"};
				storedLocations.level3Text={"top":437,"left":480,"width":100,"height":50,"fontSize":32,"anchor":"TC"};
				storedLocations.level4Text={"top":437,"left":605,"width":113,"height":50,"fontSize":32,"anchor":"TC"};
				
				storedLocations.pauseButton={"top":440,"left":890,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				storedLocations.soundButton3={"top":440,"left":810,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				storedLocations.soundButton3off={"top":440,"left":810,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				
				storedLocations.siteLink={"top":370,"left":0,"width":186,"height":50,"fontSize":16,"anchor":"BL"};
				storedLocations.siteLinkText={"top":384,"left":-10,"width":210,"height":592,"fontSize":20,"anchor":"BL"};
				
			break;	
		default:
				var ttfontsize = $(XML).find('center').find('titlehome').attr('size'); 
				var descfontsize = $(XML).find('center').find('titlemsg').attr('size'); 
				//alert(ttfontsize);
				var n = Math.min(1,norm(winRatio,squareMax,tenEighty));
				var store = storeLerp({textScale:storedLocations.titleGameName.textScale,top:12,left:250,width:640,height:135,"fontSize":48, "anchor":"TR"},{textScale:storedLocations.titleGameName.textScale,top:12,left:375,width:500,height:135,"fontSize":ttfontsize, "anchor":"TR"},n);
				storedLocations.titleGameName = store;
				storedLocations.titleDescription = storeLerp({textScale:storedLocations.titleDescription.textScale,top:62,left:250,width:640,height:135,"fontSize":20, "anchor":"TR"},{textScale:storedLocations.titleDescription.textScale,top:62,left:375,width:520,height:135,"fontSize":descfontsize, "anchor":"TR"},n);
				
				store = storeLerp({"top":59,"left":463,"width":480,"height":261,"fontSize":12,"anchor":"BR"},{"top":179,"left":463,"width":420,"height":229,"fontSize":12,"anchor":"BR"},n);
				storedLocations.titleInstructionsImage= store;
				storedLocations.titleInstructionsImage_PC =store;
				
				document.getElementById("titleGameName").style.textAlign = "left";
				document.getElementById("endGameText").style.textAlign = "left";
				document.getElementById("titleDescription").style.textAlign = "left";
				
				storedLocations.endGameText={textScale:storedLocations.endGameText.textScale,"top":92,"left":370,"width":520,"height":90,"fontSize":40,"anchor":"TR"};
				storedLocations.levelMarker1={"top":150,"left":430,"width":100,"height":150,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker2={"top":175,"left":556,"width":112,"height":137,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker3={"top":160,"left":690,"width":100,"height":140,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker4={"top":150,"left":815,"width":113,"height":150,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker1_Off={"top":150,"left":430,"width":100,"height":150,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker2_Off={"top":175,"left":556,"width":112,"height":137,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker3_Off={"top":160,"left":690,"width":100,"height":140,"fontSize":16,"anchor":"TR"};
				storedLocations.levelMarker4_Off={"top":150,"left":815,"width":113,"height":150,"fontSize":16,"anchor":"TR"};
				storedLocations.level1Text={"top":302,"left":460,"width":50,"height":50,"fontSize":32,"anchor":"TR"};
				storedLocations.level2Text={"top":302,"left":591,"width":50,"height":50,"fontSize":32,"anchor":"TR"};
				storedLocations.level3Text={"top":302,"left":715,"width":50,"height":50,"fontSize":32,"anchor":"TR"};
				storedLocations.level4Text={"top":302,"left":851,"width":50,"height":50,"fontSize":32,"anchor":"TR"};
				
				storedLocations.pauseButton={"top":470,"left":890,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				storedLocations.soundButton3={"top":470,"left":810,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				storedLocations.soundButton3off={"top":470,"left":810,"width":64,"height":64,"fontSize":16,"anchor":"BR"};
				
				storedLocations.titleCharacter.anchor="BC";
				storedLocations.levelMessageCharacter.anchor="BC";
			break;
		}
		if (oCONFIG.hideOfficialSite==1) {
			storedLocations.siteLink.top=-10000;
			storedLocations.siteLink2.top=-10000;
			storedLocations.siteLinkText.top=-10000;
			storedLocations.siteLinkText2.top=-10000;
		}
		document.getElementById("blocker").style.visibility="hidden";
	}
	
}

// Listen for resize changes
function resizeSequence() {
	if (isMobile) {
		//document.getElementById("blocker").style.visibility="visible";
	}
	resizeIteration = 0;
	setCanvasSize();
	
	fitGameUI();
}
var forceFastPlay = false;
function setCanvasSize() {
	window.scrollTo(0, 0);

	// Get screen size (inner/outerWidth, inner/outerHei)
	
	setStage();

	var renderScale=(window.devicePixelRatio) ? window.devicePixelRatio : 1;
	if (isAndroid) renderScale=1;
	canvas.width = (1.0 * window.innerWidth) + "px";
	canvas.height = window.innerHeight + "px";//(stage.ratio * window.innerWidth) + "px";
	camera.left = -stage.cameraWidth;
	camera.right = stage.cameraWidth;
	camera.top = stage.cameraWidth * window.innerHeight/window.innerWidth;
	camera.bottom = -stage.cameraWidth * window.innerHeight/window.innerWidth;
	renderer.setSize(window.innerWidth,window.innerHeight);
	renderer.setViewport( 0, 0, window.innerWidth*renderScale, window.innerHeight*renderScale );	
	renderer.setPixelRatio(renderScale);
	
	camera.updateProjectionMatrix();
	if (gameState>1) fitGameUI();
	setCSSRElative(); //interface.js

}
setCanvasSize();
function fitGameUI() {
	if (gameState==0) return;
	var cWidth = stage.gameUIWidth;
	var cHeight = stage.gameUIHeight;
	for (var idx = 0; idx < 3; idx++) {
		heartBar.objs[idx].position.set(-cWidth * 0.9 + idx * 1.1, camera.top-1, 0.1);
		if (heartBar.slashes[idx].position.x>-90) heartBar.slashes[idx].position.set(-cWidth * 0.9 + idx * 1.1, camera.top-1, 0.3);
	}
	if (stage.ratio>.7){
		powerupObj.objs[0].position.set(cWidth-1.75,camera.bottom+2,0.9);
		powerupObj.meterObj.position.set(cWidth-1.75,camera.bottom+2,1.1);
	} else {
		powerupObj.objs[0].position.set(cWidth-5,camera.bottom+0.8,0.9);
		powerupObj.meterObj.position.set(cWidth-5,camera.bottom+0.8,1.1);
	}

	var tS = 1;
	var tP = 4;
	if (stage.id==="portrait"||stage.id==="square"||stage.id==="tall"){
		tS = 0.7;
		tP = 3;
	}
	levelMeterObj.objs[0].position.set(cWidth-tP, camera.top-1.7, 0.9);
	levelMeterObj.objs[1].position.set(cWidth-tP, camera.top-1.7, 0.9);
	levelMeterObj.objs[0].scale.set(tS,tS,tS);
	levelMeterObj.objs[1].scale.set(tS,tS,tS);
	
}
//recordCSSPositions();
function recordCSSPositions() {
	if (!locationsInited) {
		var tObjs = getGoodlocs();
		var goodData = false;
		if (tObjs!=undefined) {
			storedLocations=tObjs;
			if (queryVal===undefined) shiftAudioButtons();
			goodData=true;
		}
		
		for (var idx = 0; idx < readCSSIds.length; idx++) {
			var def = readCSSIds[idx];
			var offset = def.indexOf(":");
			var anchor = "";
			if (offset>-1){
				anchor = def.substr(0,offset);
				def = def.substr(offset+1);
			}
			var tObj = document.getElementById(def);
			if (tObj==undefined) {
				return;
			}
			if (anchor!="F") tObj.style.position ="fixed";
			var storage = getCoords(tObj);
			storage.anchor = anchor;
			if (!goodData) storedLocations[def] = storage;
			readCSSIds[idx] = def;
		}
		locationsInited = true;
	}
}

function setCSSRElative() {
	
	resizeIteration++;
	var winRatio = window.innerWidth/window.innerHeight;
	var leftShift = 0;
	var ratio = 1;

	ratio = (1.0 * window.innerWidth) / (1.0 * stage.width);

	var ratio2 = 1.0*window.innerHeight/ 1.0*stage.height;
	if ( ratio2<ratio) ratio = ratio2;
	var winTangent = 1;
	if (winRatio>1+winTangent) ratio = (1/(winRatio-winTangent)) * ratio;//(ratio+(1/(winRatio-.777)) * ratio)/2;// * 1.1; 
	//if (winRatio<0.6) ratio = ratio * (winRatio*1.4);
	if (!locationsInited) {
		recordCSSPositions();
	}

	var animationEnded = true;
	var topOffset = (isMobile?-25:0);
	if (locationsInited) {
		var hScale = window.innerWidth/960.0;
		var vScale = window.innerHeight/540.0;
		for (var idx = 0; idx < readCSSIds.length; idx++) {
			var def = readCSSIds[idx];
			var tObj = document.getElementById(def);
			var storage = storedLocations[def];
			var tTop = storage.top;
			
				if (oCONFIG.fontBaselineShift!=0 && idx<5){
					tTop-= oCONFIG.fontBaselineShift*ratio;
				}
			
			tTop-=topOffset
			var tLeft = storage.left;
			if (animationStartTime > -1) {
				var animDef = currentAnimation[readCSSIds[idx]];
				if (animDef !== undefined) {
					var dTime = (Date.now() - (animationStartTime + animDef.startTime)) / (animDef.endTime - animDef.startTime);
					dTime = Math.max(0, Math.min(1, dTime));
					if (dTime < 1) {
						animationEnded = false;
					}
					if (animDef.hide === true) {
						if (dTime > 0) {
							tObj.style.visibility = "visible";
							animDef.hide = false;
						}
					}
					if (animDef.fade === undefined) {
						if (dTime<1) {
							dTime = (dTime) * 1.3;
							if (dTime > 1) {
								dTime = 1 - 0.075 * Math.sin(Math.PI * 3 * (dTime - 1));
							} else {
								dTime *= dTime;
							}
						}
						tTop += animDef.sY * (1 - dTime) + animDef.dY * dTime;
						tLeft += animDef.sX * (1 - dTime) + animDef.dX * dTime;
					} else {
						if (animDef.fade > 0) {
							tObj.style.opacity = animDef.fade*dTime;
						} else {
							tObj.style.opacity = 1 - dTime;
						}

					}
				}
			}
			
			// New fun and games
			if (isMobile) {//} && storage.anchor.indexOf("B")>-1) {
				tTop-=20;
			}
					
			var setSize = true;
			switch (storage.anchor) {
				case "S":
					var tRatio = (window.innerHeight/window.innerWidth)*(storage.width/storage.height);
					if (tRatio<1){
						tObj.style.left = "0px";
						tObj.style.top = -(((window.innerWidth*storage.height/storage.width) - window.innerHeight)/2)+"px";
						tObj.style.width = window.innerWidth+"px";
						tObj.style.height = (window.innerWidth*storage.height/storage.width)+"px";
					}else{
						tObj.style.left = -(((window.innerHeight*storage.width/storage.height) - window.innerWidth)/2)+"px";
						tObj.style.top = "0px";
						tObj.style.width = (window.innerHeight*storage.width/storage.height)+"px";//Math.max(window.innerWidth,(window.innerHeight*storage.width/storage.height))+"px";
						tObj.style.height = window.innerHeight+"px";
					}
					setSize=false;
					break;
				case "L":
					tObj.style.left = "0px";
					tObj.style.top =  Math.floor(window.innerHeight/2+(((tTop + storage.height/2)-270)*ratio)-(storage.height*ratio/2))+ "px";
					break;
				case "C": // Centered
					tObj.style.left = Math.floor(window.innerWidth/2+(((tLeft + storage.width/2)-480)*ratio)-(storage.width*ratio/2))+ "px";
					tObj.style.top =  Math.floor(window.innerHeight/2+(((tTop + storage.height/2)-270)*ratio)-(storage.height*ratio/2))+ "px";

					break;
				case "TC":
					tObj.style.left =  Math.floor(window.innerWidth/2+(((tLeft + storage.width/2)-480)*ratio)-(storage.width*ratio/2))+ "px";
					tObj.style.top = (tTop * ratio) + "px";
					break;
				case "TCS":
					tObj.style.width = Math.floor(window.innerWidth-50)+"px";
					tObj.style.left = (25+tLeft-storage.left)+"px";
					tObj.style.top = (tTop * ratio) + "px";
					
					tObj.style.height = (storage.height * ratio) + "px";
					setSize=false;
					break;
				case "TL": // Top Left
					tObj.style.left = (tLeft * ratio) + "px";
					tObj.style.top = (tTop * ratio) + "px";
					break;
				case "TR": // Top Right
					tObj.style.left = (window.innerWidth-(((960-(tLeft+storage.width)) * ratio)+(storage.width*ratio))) + "px";
					tObj.style.top = (tTop * ratio) + "px";
					break;
				case "BL": //Bottom Left
					tObj.style.left = (tLeft * ratio) + "px";
					tObj.style.top = (window.innerHeight-(((540-(tTop+storage.height)) * ratio)+(storage.height*ratio))) + "px";//+(storage.height*ratio))
					break;
				case "BC": // Bottom Center
					tObj.style.left =  Math.floor(window.innerWidth/2+(((tLeft + storage.width/2)-480)*ratio)-(storage.width*ratio/2))+ "px";
					tObj.style.top = (window.innerHeight-(((540-(tTop+storage.height)) * ratio)+(storage.height*ratio))) + "px";
					break;	
				case "BR": // Bottom Right
					tObj.style.left = (window.innerWidth-(((960-(tLeft+storage.width)) * ratio)+(storage.width*ratio))) + "px";
					tObj.style.top = (window.innerHeight-(((540-(tTop+storage.height)) * ratio)+(storage.height*ratio))) + "px";
					
					break;
				case "SC": // Stretch vertical, center horizontal
					
					break;
				case "F":
					setSize=false;
					break;
				default:
					tObj.style.top = (tTop * ratio) + "px";
					tObj.style.left = (tLeft * ratio) + "px";
					break;
			}
			if (setSize) {
				tObj.style.width = (storage.width * ratio) + "px";
				tObj.style.height = (storage.height * ratio) + "px";
				tObj.style.backgroundSize = (storage.width * ratio) + "px " + (storage.height * ratio) + "px";
				tObj.style.backgroundRepeat = "no-repeat";
			}

			if (storage.fontSize !== undefined) {
				var relScale = (storage.textScale!=undefined)?storage.textScale:1;
				
				if (storage.fontOverride!=undefined) {
					tObj.style.fontSize = (storage.fontOverride * ratio*relScale) + "px";
				} else {
					tObj.style.fontSize = (storage.fontSize * ratio*relScale) + "px";
				}
				var shiftBaseline = 0.5*storage.fontSize*(1-relScale);
				tObj.style.paddingTop = (shiftBaseline)+"px";
			}
		}
	}
	var character = document.getElementById("levelMessageCharacter");

	//var bottomMask = document.getElementById("bottomMask");
	//bottomMask.style.top = stage.height * ratio + "px";
	//bottomMask.style.height = window.innerHeight + "px";

	orientLegal();
	if (animationStartTime > -1 || resizeIteration<5) {
		if (resizeIteration>3) {
		}
		if (animatorTimeout != -1) {
			clearTimeout(animatorTimeout);
		}
		if (animationEnded ) {
			animationStartTime = -1; 
			currentAnimation = {};
		} 
		if (!animationEnded ||  resizeIteration<5) {
			animatorTimeout = setTimeout(setCSSRElative, 25);
		}
	} else {
		animatorTimeout = -1;
	}
	//document.getElementById("blocker").style.visibility="hidden";
}
setCSSRElative();
document.getElementById("hitResponse").style.visibility = "hidden";

function hideHitResponse() {
	if (animationTimeout != -1) {
		clearTimeout(animationTimeout);
		animationTimeout = -1;
	}
	animationStartTime = Date.now();
	currentAnimation = {};
	currentAnimation.hitResponseCharacter = {
		"startTime": 0,
		"endTime": 333,
		sX: 0,
		sY: 0,
		dX: 0,
		dY: 540
	};
	currentAnimation.hitResponseCharacterGlow = {
		"startTime": 0,
		"endTime": 333,
		sX: 0,
		sY: 0,
		dX: 0,
		dY: 540
	};
	currentAnimation.hitResponseText = {
		"startTime": 0,
		"endTime": 333,
		sX: 0,
		sY: 0,
		dX: 0,
		dY: 540
	};
	animationTimeout = setTimeout(endHitAnimation, 500);
	setCSSRElative();
}

function showHitResponse() {
	document.getElementById("hitResponse").style.visibility = "visible";
	if (animationTimeout != -1) {
		clearTimeout(animationTimeout);
		animationTimeout = -1;
	}
	animationStartTime = Date.now();
	currentAnimation = {};
	currentAnimation.hitResponseCharacter = {
		"startTime": 0,
		"endTime": 333,
		sX: 0,
		sY: 540,
		dX: 0,
		dY: 0
	};
	currentAnimation.hitResponseCharacterGlow = {
		"startTime": 0,
		"endTime": 333,
		sX: 0,
		sY: 540,
		dX: 0,
		dY: 0
	};
	currentAnimation.hitResponseText = {
		"startTime": 0,
		"endTime": 333,
		sX: 0,
		sY: 540,
		dX: 0,
		dY: 0
	};
	animationTimeout = setTimeout(hideHitResponse, 1500);
	setCSSRElative();
}

function endHitAnimation() {
	document.getElementById("hitResponse").style.visibility = "hidden";
}

function revealTitleScreen() {

	if (animationTimeout != -1) {
		clearTimeout(animationTimeout);
		animationTimeout = -1;
	}
	document.getElementById("levelMessage1").style.visibility = "hidden";
	document.getElementById("levelMessage2").style.visibility = "hidden";
	document.getElementById("levelMessage3").style.visibility = "hidden";
	animationStartTime = Date.now();
	currentAnimation = {};
	currentAnimation.titleBackground = {
		"startTime": 0,
		"endTime": 500,
		fade: 1
	};
	currentAnimation.ninjagoLogo = {
		"startTime": 500,
		"endTime": 1000,
		sX: 0,
		sY: -700,
		dX: 0,
		dY: 0
	};
	currentAnimation.ninjaLogoText = {
		"startTime": 500,
		"endTime": 1000,
		sX: 0,
		sY: -700,
		dX: 0,
		dY: 0
	};
	currentAnimation.titleCharacter = {
		"startTime": 500,
		"endTime": 1000,
		sX: 0,
		sY: 540,
		dX: 0,
		dY: 0
	};
	currentAnimation.levelMessage1 = {
		"startTime": 900,
		"endTime": 1400,
		sX: 200,
		sY: 0,
		dX: 0,
		dY: 0,
		hide: true
	};
	currentAnimation.levelMessage2 = {
		"startTime": 1100,
		"endTime": 1600,
		sX: 200,
		sY: 0,
		dX: 0,
		dY: 0,
		hide: true
	};
	currentAnimation.levelMessage3 = {
		"startTime": 1300,
		"endTime": 1800,
		sX: 200,
		sY: 0,
		dX: 0,
		dY: 0,
		hide: true
	};
	currentAnimation.titleGameName = {
		"startTime": 1500,
		"endTime": 2000,
		sX: 1000,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.titleDescription = {
		"startTime": 1500,
		"endTime": 2000,
		sX: 1000,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.exitButton = {
		"startTime": 1500,
		"endTime": 2000,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.titleInstructions = {
		"startTime": 1500,
		"endTime": 2000,
		fade: 1
	};
	currentAnimation.titleInstructionsImage = {
		"startTime": 1500,
		"endTime": 2000,
		fade: 1
	};
	currentAnimation.titleInstructionsImage_PC = {
		"startTime": 1500,
		"endTime": 2000,
		fade: 1
	};
	currentAnimation.playButton = {
		"startTime": 2000,
		"endTime": 2500,
		sX: 0,
		sY: 150,
		dX: 0,
		dY: 0
	};
	currentAnimation.titlePlayText = {
		"startTime": 2000,
		"endTime": 2500,
		sX: 0,
		sY: 150,
		dX: 0,
		dY: 0
	};
	currentAnimation.siteLink2 = {
		"startTime": 2250,
		"endTime": 2750,
		sX: -200,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.siteLinkText2 = {
		"startTime": 2250,
		"endTime": 2750,
		sX: -200,
		sY: 0,
		dX: 0,
		dY: 0
	};
	setCSSRElative();

}

/*
Handling animation with CSS scaling system
Requires a currentAnimation status object. 
setCSSRElative() is called repeatedly while an animation is active.
This carries out it's normal positioning, but also looks up offset values in relativeOffset
If it detects that an animation is ongoing it sets up a setTimeout() to repeat calls to the function until animation consitions have ended
all coordinates are relative to the base positions of each element

currentAnimation = [{id:"divName",startTime:1000,endTime:2000,sX:0,sY:0,dX:0,dY:0}];

*/

function pixelMultiply(strPx, ratio) {
	var num = parseFloat(strPx.substr(0, strPx.length - 2));
	return (num * ratio) + "px";
}

function getCoords(elem) { // crossbrowser version
	var box = elem.getBoundingClientRect();

	var body = document.body;
	var docEl = document.documentElement;

	var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

	var clientTop = docEl.clientTop || body.clientTop || 0;
	var clientLeft = docEl.clientLeft || body.clientLeft || 0;

	var top = box.top + scrollTop - clientTop;
	var left = box.left + scrollLeft - clientLeft;
	var style = window.getComputedStyle(elem, null).getPropertyValue('font-size');
	var curFontSize = parseFloat(style);
	if (curFontSize === NaN) {
		curFontSize = 48;
	}

	return {
		top: Math.round(top),
		left: Math.round(left),
		width: Math.round(box.width),
		height: Math.round(box.height),
		fontSize: curFontSize
	};
}

function triggerGameOver() {
	setCanvasSize();
	changeGameState(5);
	if (animationTimeout != -1) {
		clearTimeout(animationTimeout);
		animationTimeout = -1;
	}
	animationStartTime = Date.now();
	currentAnimation = {};	
	currentAnimation.levelBackground = {
		"startTime": 0,
		"endTime": 500,
		fade: 1
	};
	currentAnimation.ninjagoLogo2 = {
		"startTime": 500,
		"endTime": 1000,
		sX: 0,
		sY: -700,
		dX: 0,
		dY: 0
	};
	currentAnimation.ninjaLogoText2 = {
		"startTime": 500,
		"endTime": 1000,
		sX: 0,
		sY: -700,
		dX: 0,
		dY: 0
	};
	currentAnimation.levelMessageCharacter = {
		"startTime": 500,
		"endTime": 1000,
		sX: 0,
		sY: 540,
		dX: 0,
		dY: 0
	};
	currentAnimation.levelMarker1 = {
		"startTime": 800,
		"endTime": 1300,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.levelMarker1_Off = {
		"startTime": 800,
		"endTime": 1300,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.level1Text = {
		"startTime": 800,
		"endTime": 1300,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.levelMarker2 = {
		"startTime": 1000,
		"endTime": 1500,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.levelMarker2_Off = {
		"startTime": 1000,
		"endTime": 1500,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.level2Text = {
		"startTime": 1000,
		"endTime": 1500,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.levelMarker3 = {
		"startTime": 1200,
		"endTime": 1700,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.levelMarker3_Off = {
		"startTime": 1200,
		"endTime": 1700,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.level3Text = {
		"startTime": 1200,
		"endTime": 1700,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.levelMarker4 = {
		"startTime": 1400,
		"endTime": 1900,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.levelMarker4_Off = {
		"startTime": 1400,
		"endTime": 1900,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.level4Text = {
		"startTime": 1400,
		"endTime": 1900,
		sX: 600,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.endGameText = {
		"startTime": 1600,
		"endTime": 2100,
		fade: true
	};
	currentAnimation.playAgainButton = {
		"startTime": 2000,
		"endTime": 2500,
		sX: 0,
		sY: 150,
		dX: 0,
		dY: 0
	};
	currentAnimation.playAgain = {
		"startTime": 2000,
		"endTime": 2500,
		sX: 0,
		sY: 150,
		dX: 0,
		dY: 0
	};
	currentAnimation.moreGamesButton = {
		"startTime": 2000,
		"endTime": 2500,
		sX: 0,
		sY: 150,
		dX: 0,
		dY: 0
	};
	currentAnimation.moreGames = {
		"startTime": 2000,
		"endTime": 2500,
		sX: 0,
		sY: 150,
		dX: 0,
		dY: 0
	};
	currentAnimation.siteLink = {
		"startTime": 2250,
		"endTime": 2750,
		sX: -200,
		sY: 0,
		dX: 0,
		dY: 0
	};
	currentAnimation.siteLinkText = {
		"startTime": 2250,
		"endTime": 2750,
		sX: -200,
		sY: 0,
		dX: 0,
		dY: 0
	};
	setCSSRElative();
}
var fadeoutLoaderTime = -1;
function fadeoutLoader(progress) {
	if (progress==1) fadeoutLoaderTime=Date.now();
	progress = Math.max(0,Math.min(0.99, 1-(Date.now()-fadeoutLoaderTime)/1000.0));
	loadingScreen.style.opacity= progress;
	if (progress>0) {
		setTimeout(fadeoutLoader,25,progress);
	} else {
		loadingScreen.style.visibility= "hidden";
		loadingScreen.style.display = "none";	
	}
}
changeGameState = function (tState) {
	var tDiv;
	lastUpdate = Date.now();
	gameState = tState;
	var msgBox = document.getElementById("levelMessage");
	switch (gameState) {
		case 0: // LoadingScreen
			fadeoutLoader(1);
			tDiv = document.getElementById("pauseGameWindow").style;
			tDiv.visibility = "hidden";
			//tDiv.display = "none";
			
			tDiv = document.getElementById("inGameElements").style;
			tDiv.visibility = "hidden";
			tDiv.display = "none";
			
			tDiv = document.getElementById("levelMessage").style;
			tDiv.visibility = "hidden";
			tDiv.display = "none";

			tDiv = document.getElementById("titleScreen").style;
			tDiv.visibility = "visible";
			tDiv.display = "inline";
			break;
		case 1: //Title Screen
			if (!music.isReallyPlaying) playMusic("MenuLoop");
			curScore = 0;
			
			break;
		case 2:
			playSound("SwordHit_01");
			if (levelNum<4) {
				playMusic("LevelLoop");
			} else {
				playMusic("BossLoop");
			}
			
			tDiv = document.getElementById("pauseGameWindow").style;
			tDiv.visibility = "hidden";
			//tDiv.display = "none";
			tDiv = document.getElementById("inGameElements").style;
			tDiv.visibility = "visible";
			tDiv.display = "inline";
			tDiv = document.getElementById("loadingScreen").style;
			tDiv.visibility = "hidden";
			tDiv.display = "none";
			tDiv = document.getElementById("titleScreen").style;
			tDiv.visibility = "hidden";
			tDiv.display = "none";
			tDiv = document.getElementById("levelMessage").style;
			tDiv.visibility = "hidden";
			tDiv.display = "none";

			break;
		case 3: // Transition to next level
			break;
		case 4:
			lastUpdate=Date.now();
			
			break;
		case 5: // Game End screen
			
			tDiv = document.getElementById("pauseGameWindow").style;
			tDiv.visibility = "hidden";
			//tDiv.display = "none";
			tDiv = document.getElementById("inGameElements").style;
			tDiv.visibility = "hidden";
			tDiv.display = "none";
			
			playMusic("EndLoop");
			
			roundScores[3] = levelNum<6?0:1;//roundScores[3]>0?1:0;
			document.getElementById("levelMessage").style.visibility = "visible";
			document.getElementById("levelMessage").style.display = "inline";
			//setFieldText("End_Message_" + (levelNum-1), "endGameText");
			//alert(levelNum);// if 3 print 2
			if(levelNum == 1)
					{
						$('#endGameText').html($(XML).find('center').find('endmsg0').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
			if(levelNum == 2)
					{
						$('#endGameText').html($(XML).find('center').find('endmsg1').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
			if(levelNum == 3)
					{
						$('#endGameText').html($(XML).find('center').find('endmsg2').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
			if(levelNum == 4)
					{
						$('#endGameText').html($(XML).find('center').find('endmsg4').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
			if(levelNum == 5)
					{
						$('#endGameText').html($(XML).find('center').find('endmsg4').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
			if(levelNum == 6)
					{
						$('#endGameText').html($(XML).find('center').find('endmsg5and6').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
			if(levelNum == 7)
					{
						$('#endGameText').html($(XML).find('center').find('endmsg5and6').text());
						//$('#headingText').css('font-size',$(XML).find('center').find('levelup').attr('size')+'px');
					}
			for (var idx = 0; idx < 4; idx++) {
				var levText = document.getElementById("level" + (idx + 1) + "Text");
				levText.innerHTML = (roundScores[idx] > 0 ? ("" + roundScores[idx]) : "");
				if (roundScores[idx]>0) {
					document.getElementById("levelMarker"+(idx+1)+"_Off").style.visibility="hidden";
					document.getElementById("levelMarker"+(idx+1)).style.visibility="visible";
				} else {
					document.getElementById("levelMarker"+(idx+1)).style.visibility="hidden";
					document.getElementById("levelMarker"+(idx+1)+"_Off").style.visibility="visible";
				}
			}
			break;
		case 11:

			break;
	}
}


function advanceGameState() {
	document.getElementById("headingText").style.visibility="hidden";
	switch (gameState) {
		case 1:
			playSound("NyaHit_B");
			changeGameState(2);
			break;
		case 4: // Running to next level
			changeGameState(2);
			gameState = 2;
			changeGameState(2);
			lastUpdate = Date.now();
			break;

	}
	return (gameState==2);
}

function startPowerupSequence() {
	lastActionTime = Date.now();
	if (powerupObj.chargeLevel >= 1) {
		enemyCount-=enemyList.length;
		roundScores[scoreIndex%3]+=enemyList.length;
		playSound("NyaHit_R");
		particleSystem.makeBIGParticle(new THREE.Vector3(0,0,2),new THREE.Vector3(0,0,0));

		powerupObj.chargeLevel = 0;
		setAnim("NyaFBX_attack_P", playerObj.obj);
		for (var idx = enemyList.length - 1; idx >= 0; idx--) {
			setAnim(baseEnemyName+"_hit",enemyList[idx].obj);
			enemyList[idx].deathTime = Date.now() + 500;
			particleSystem.makeParticle(enemyList[idx], new THREE.Vector3(0, 0, 0));
		}
		//celebrating=true;
		setTimeout(endPowerUp,500);
	}
	
}
function endPowerUp() {
	celebrating=false;
	for (var idx = enemyList.length - 1; idx >= 0; idx--) {
		scene.remove(enemyList[idx].obj);
		enemyList.splice(idx, 1);
			
	}
}
var particleSystem = new particleFX();
function clearEnemies() {
	lastActionTime = Date.now();
	for (var idx = enemyList.length - 1; idx >= 0; idx--) {
		//particleSystem.makeParticle(enemyList[idx].obj.position,new THREE.Vector3(0,0,0));
		scene.remove(enemyList[idx].obj);
		enemyList.splice(idx, 1);

	}
}



function particleFX() {
	this.tick = 0;
	this.particleSystem = new THREE.GPUParticleSystem({maxParticles: 5000});
	scene.add(this.particleSystem);
	this.makeBIGParticle = function (position, direction) {
		BIGfxParams.size = BIGfxParams.sizeBase * stage.particleScale;
		BIGfxParams.position = position;
		BIGfxParams.velocity.x = direction.x * BIGfxSpawn.horizontalSpeed;// * stage.ratio;
		BIGfxParams.velocity.y = direction.y * BIGfxSpawn.verticalSpeed;//* stage.ratio;
		for (var idx=0; idx<BIGfxSpawn.spawnRate; idx++ ){
			this.particleSystem.spawnParticle(BIGfxParams);
		}
	}
	this.makeENEMYParticle = function (position, direction) {
		ENEMYfxParams.size = ENEMYfxParams.sizeBase * stage.particleScale;
		ENEMYfxParams.position = position;
		ENEMYfxParams.velocity.x = direction.x * ENEMYfxSpawn.horizontalSpeed;//* stage.ratio;
		ENEMYfxParams.velocity.y = direction.y * ENEMYfxSpawn.verticalSpeed;//* stage.ratio;
		for (var idx=0; idx<ENEMYfxSpawn.spawnRate; idx++ ){
			this.particleSystem.spawnParticle(ENEMYfxParams);
		}
	}
	this.makeParticle = function (position, direction) {
		fxParams.size = fxParams.sizeBase * stage.particleScale;
		fxParams.position = position;
		fxParams.velocity.x = direction.x * fxSpawn.horizontalSpeed;// * stage.ratio;
		fxParams.velocity.y = direction.y * fxSpawn.verticalSpeed;// * stage.ratio;
		for (var idx=0; idx<fxSpawn.spawnRate; idx++ ){
			this.particleSystem.spawnParticle(fxParams);
		}
	}
	this.update = function(delta){
		this.tick += delta*fxSpawn.timeScale;
		if (this.tick<0) this.tick=0;
		this.particleSystem.update(this.tick);
	}
}


 
var soundButtons = ["soundButton","soundButtonoff","soundButton2","soundButton2off","soundButton3","soundButton3off"];

var tData = localSaver.doGetData("mute");
if (tData!==null) {
	//isMuted = !tData.mute;
	//muteToggle(true);
}

function muteToggle(dontPlay) {
	
	
	isMuted = !isMuted;
	// hide all of the different mute buttons out there by just changing the opacity?
	var idskip = isMuted?1:0;
	for (var idx = 0; idx<3; idx++) {
		var tObj = document.getElementById(soundButtons[idx*2+idskip]);
		tObj.style.visiblity = "visible";
		tObj.style.opacity = 1;
		tObj = document.getElementById(soundButtons[idx*2+(1-idskip)])
		tObj.style.visiblity = "hidden";
		tObj.style.opacity = 0;
	}
	if (dontPlay) {return;}
	if (music!==undefined){
		if (audioFallback) {
			if (isMuted) {
				if (music.isReallyPlaying && sounds[lastMusicPlay]) sounds[lastMusicPlay].pause();
				music.isReallyPlaying = false;
			} else {
				if (!music.isReallyPlaying) {
					playMusic(lastMusicPlay);
					music.isReallyPlaying = true;
				}
			}
		} else {
			if (isMuted) {
				if (music.isReallyPlaying) music.stop();
				music.isReallyPlaying = false;
			} else {
				if (!music.isReallyPlaying) {
					playMusic(lastMusicPlay);
					music.isReallyPlaying = true;
				}
			}
		}
	}
	//saveState();
	
}

setInterval(watchFocus, 100);
var document_blurred = false;
function watchFocus() {
	if (document_blurred) {
		if (document.hasFocus()) {
			onFocusAction();
			document_blurred = false;
		}
	} else {
		
		if (!document.hasFocus()) {
			pauseButtonAction(1);
			document_blurred = true;
		}
	}
}

var resumeMusic = false;
var document_blurred = false;
function pauseButtonAction(event) {
	
	//trace("pauseButtonAction:"+event+"  "+lastMusicPlay+" focus="+document.hasFocus());
	if (document.hasFocus() && event!=-1) return;
	
	if (gameState>1 && gameState!==5 && gameState!==6){
		var tDiv = document.getElementById("pauseGameWindow");
		tDiv.style.visibility = "visible";
		isPaused = true;
	}
	doCloseLegal(true);
	if (event!=-1) resizeSequence();
	if ( lastMusicPlay!="") {
		resumeMusic=true;
		stopMusic();
	}
}

function onFocusAction() {
	
	resizeSequence();
	if (resumeMusic && !isPaused) {
		resumeMusic=false;
		trace("resumeMusic:"+lastMusicPlay);
		playMusic(lastMusicPlay);
	}
};

function pauseButtonButton(buttonIndex) {
	switch (buttonIndex) {
		case 1:
			isPaused = false;
			var tDiv = document.getElementById("pauseGameWindow");
			tDiv.style.visibility = "hidden";
		
			if (resumeMusic) {
				resumeMusic=false;
				playMusic(lastMusicPlay);
			}
			
			break;
		case 2:
			playAgainButtonAction(true);
			
			break;
		case 3:
			//location.assign(oCONFIG.more_url);
			moreGamesButtonAction();
			break;
		case 4:
			//location.assign(oCONFIG.movie_url);
			siteButtonAction();
			break;
	}
}



