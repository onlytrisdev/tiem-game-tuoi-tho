//> GameInput constructor
function GameInput () {

	// Listen to mouse and keyboard events (desktop)
	/*
	document.onmousemove = (e) => {this.onMouseMove(e);};
	document.onmousedown = (e) => {this.onMouseDown(e);};
	document.onmouseup   = (e) => {this.onMouseUp(e);};
	document.onkeydown   = (e) => {this.onKeyDown(e);};
	*/
	document.addEventListener('mousemove',  (e) => {this.onMouseMove(e);});
	document.addEventListener('mousedown',  (e) => {this.onMouseDown(e);});
	document.addEventListener('mouseup',    (e) => {this.onMouseUp(e);});
	document.addEventListener('keydown',    (e) => {this.onKeyDown(e);});

	// Listen to touch events
	document.addEventListener('touchstart',  (e) => {this.onTouchStart(e);});
	document.addEventListener('touchmove',   (e) => {this.onTouchMove(e);});
	document.addEventListener('touchend',    (e) => {this.onTouchEnd(e);});
	document.addEventListener('touchcancel', (e) => {this.onTouchCancel(e);});
	
} // Constructor


//> GameInput.onMouseDown
GameInput.prototype.onMouseDown = function(e) {

	e.preventDefault();
	GAME.onInputDown(0, e.clientX, e.clientY);
	
};


//> GameInput.onMouseMove
GameInput.prototype.onMouseMove = function(e) {

	e.preventDefault();
	GAME.onInputMove(0, e.clientX, e.clientY);
	
};


//> GameInput.onMouseUp
GameInput.prototype.onMouseUp = function(e) {

	e.preventDefault();
	GAME.onInputUp(0, e.clientX, e.clientY);
	
};


//> GameInput.onKeyDown
GameInput.prototype.onKeyDown = function(e) {

	GAME.OnKeyDown(e.key);
	
};


//> GameInput.onTouchStart
GameInput.prototype.onTouchStart = function(e) {

	// Prevent browser default behavior
	e.preventDefault();
	
	// Touches
	let touch;
	for (let i=0; i<e.changedTouches.length; i++) {

		touch = e.changedTouches[i];
		GAME.onInputDown(touch.identifier, touch.clientX, touch.clientY);
		
	}
	
}; // onTouchStart


//> GameInput.onTouchMove
GameInput.prototype.onTouchMove = function(e) {

	// Prevent browser default behavior
	e.preventDefault();
	
	// Touches
	let touch;
	for (let i=0; i<e.changedTouches.length; i++) {

		touch = e.changedTouches[i];
		GAME.onInputMove(touch.identifier, touch.clientX, touch.clientY);
		
	}
	
};


//> GameInput.onTouchEnd
GameInput.prototype.onTouchEnd = function(e) {

	// Prevent browser default behavior
	e.preventDefault();
	
	// Touches
	let touch;
	for (let i=0; i<e.changedTouches.length; i++) {

		touch = e.changedTouches[i];
		GAME.onInputUp(touch.identifier, touch.clientX, touch.clientY);

	}
	
};


//> GameInput.onTouchCancel
GameInput.prototype.onTouchCancel = function(e) {

	// Prevent browser default behavior
	e.preventDefault();

	// Touches
	let touch;
	for (let i=0; i<e.changedTouches.length; i++) {

		touch = e.changedTouches[i];
		GAME.onInputUp(touch.identifier, touch.clientX, touch.clientY);

	}

	GAME.OnInputCancelled();

};