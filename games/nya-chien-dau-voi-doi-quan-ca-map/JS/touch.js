// JavaScript Document
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
//function keyDownEventHandler(event) {
window.addEventListener("keydown", function (event) {
	//console.log("keydown.listener:"+event.key);
	handleKeyEvent(event);
	event.preventDefault();
	return false;
},true);

if (document.attachEvent!==undefined) {
	document.attachEvent("onkeydown", function(event) {
	//console.log("onkeydown.event:"+event.key);
		handleKeyEvent(event);
		return false;
	},true);
}

function handleKeyEvent(event) {
//window.addEventListener("keydown", function (event) {

	//console.log("keydown.listener:"+event.key);
	if (gameState !== 2) {
		//advanceGameState();
		return true;
	} else {
		//document.getElementById("headingText").style.visibility="hidden";
		currentMotion = -1;
		endCelebration();
		var theKey = event.key;
		if (event.keycode==32) theKey=" ";
		switch (theKey) {
			case "Space":
			case "Spacebar":
			case " ":
				startPowerupSequence();
				break;
			case "ArrowDown":
			case "Down":
				currentMotion = 3;
				// code for "down arrow" key press.
				break;
			case "ArrowUp": 
			case "Up":
				currentMotion = 1;
				// code for "up arrow" key press.
				break;
			case "ArrowLeft":
			case "Left":
				currentMotion = 4;
				// code for "left arrow" key press.
				break;
			case "ArrowRight":
			case "Right":
				currentMotion = 2;
				// code for "right arrow" key press.
				break;
			default:
				return; // Quit when this doesn't handle the key event.
		}
		if (currentMotion > -1) {
			lastActionTime = Date.now();
		}
	}
	// Cancel the default action to avoid it being handled twice
	event.preventDefault();

	return false;
}//,true);

document.addEventListener('touchstart', F_event_Touch_onDocument_handle, false);
document.addEventListener('touchend', F_event_Touch_onDocument_handle, false);
window.addEventListener('touchmove', F_event_Touch_onDocument_handle, false);
document.addEventListener('mousedown', F_event_Touch_onDocument_handle, false);
document.addEventListener('mouseup', F_event_Touch_onDocument_handle, false);
window.addEventListener('mousemove', F_event_Touch_onDocument_handle, false);

//===========================================================================================

var thisTouch = {
	x: -1,
	y: -1
};
var LovelyPie = Math.PI * 1.25;
var lastActionTime = -1;

function F_event_Touch_onDocument_handle(evt) {

	if (gameState<2 && lastMusicPlay!="" && isMobile) {
		//console.log("play First Sound Mobile");
		if (firstEvent<3){
			//playSound("Jay_EndOfLevel");
			firstEvent++;
			playMusic(lastMusicPlay);
		}
	}

	//if (gameState>1) evt.preventDefault(); //... this prevents window from sliding about.

	//------------------------------------------------------------------------------------
	//console.log(evt.type);
	if (evt.type.indexOf("touch")>-1){
		if (evt.touches.length > 1) {
			// || (evt.type == "touchend" && evt.touches.length > 0))
		//... if more than 1 touch detected then ignore.
			return;
		}
	}
	
	
	//------------------------------------------------------------------------------------
	//console.log(evt.type);
	var reaction_type = null;
	var touch = null;
	//... see here for event types  http://www.w3schools.com/jsref/dom_obj_event.asp  

	switch (evt.type) {
		case "touchstart":
			touch = evt.changedTouches[0]; //... specify which touch for later extraction of XY position values.
			reaction_type = "onclick";
			break;
		case "touchmove": // I don't use this
			//evt.preventDefault();
			touch = evt.changedTouches[0];
			reaction_type = "mousemove";
			break;
		case "touchend": // I don't use this   
			touch = evt.changedTouches[0];
			reaction_type = "mouseup";
			break;
		case "mousedown":
			reaction_type = "onclick";
			touch = evt;
			break;
		case "mousemove":
			//evt.preventDefault();
			reaction_type = "mousemove";
			touch = evt;
			break;
		case "mouseup":
			touch = evt;
			reaction_type = "mouseup";
			break;
	}

	
	mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
	raycaster.setFromCamera(mouse.clone(), camera);
	var objects;
	if(powerupObj) {
		objects = raycaster.intersectObject(powerupObj.meterObj);
	}
	
	if (reaction_type === "mouseup") {
		if (thisTouch.x > -1) {
			var curTouch = {};
			curTouch.x = ((touch.clientX / window.innerWidth) * 2 - 1) - thisTouch.x;
			curTouch.y = (-(touch.clientY / window.innerHeight) * 2 + 1) - thisTouch.y;
			var angle = Math.floor(2 * (LovelyPie - Math.atan2(curTouch.y, curTouch.x)) / Math.PI);
			if (angle < 1) {angle = 4;}

			//console.log("swipe:"+angle);
			if (gameState>1){
				if (advanceGameState()) {

					if (Math.abs(curTouch.x) + Math.abs(curTouch.y) > 0.1) {
						//document.getElementById("headingText").style.visibility = "hidden";
						currentMotion = angle;
						lastActionTime = Date.now();
						endCelebration();
						playerObj.updatePlayer();
					}
				}
			}
			thisTouch.x = -1;
			//var ratio =
		}
	}

	if (reaction_type === "onclick") {
		thisTouch.x = (touch.clientX / window.innerWidth) * 2 - 1;
		thisTouch.y = -(touch.clientY / window.innerHeight) * 2 + 1;
		if (evt.target.id.indexOf("Button")>-1 || evt.target.id.indexOf("Options")>-1) return;
		if (powerupObj!== undefined) {   
			if (objects) {
				for (var idx=0; idx<objects.length; idx++) {
					if (objects[idx].object.name === "powerup") {
						thisTouch.x = -1;
						startPowerupSequence();
						break;
					}
				}
			}
			
		}

	} // if (reaction_type == "onclick").
	//return false;
	if (reaction_type==="mousemove")evt.preventDefault();
	//if (gameState===2 && reaction_type==="onclick") evt.preventDefault();	
}
//... EOF F_event_Touch_onDocument_handle().

//window.addEventListener("keydown", keyDownEventHandler, true);
//if (document.attachEvent) document.attachEvent("onkeydown", keyDownEventHandler);
//document.addEventListener("keydown", keyDownEventHandler, true);
//=================================================================











