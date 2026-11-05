// utility classes


//*********************************************************
// GameLocalData constructor
//*********************************************************
function GameLocalData () {
	
	this.Enabled = typeof(Storage) !== "undefined";
	if (this.Enabled) {
		
		try {
			this.Data = window.localStorage;
		} catch(e) {
			console.log("! unable to access window.localStorage");
  			this.Enabled = false;
		}
		
	}
	
}


//*********************************************************
// GameLocalData.set
//*********************************************************
GameLocalData.prototype.set = function(key, value) {
	
	if (!this.Enabled) {return;}
	try {
		this.Data.setItem(key, value);
	} catch(e) {
		console.log("! unable to write value in Storage");
	}
	
};


//*********************************************************
// GameLocalData.get
//*********************************************************
GameLocalData.prototype.get = function(key, defaultvalue) {
	
	if (!this.Enabled) {return defaultvalue;}
	//
	let val = null;
	try {
		val = this.Data.getItem(key);
	} catch(e) {
		console.log("! unable to read value from Storage");
	}
	if (val === null) {
		return defaultvalue;
	} else {
		return val;	
	}
	
};


//*********************************************************
// GameLocalData.getInt
//*********************************************************
GameLocalData.prototype.getInt = function(key, defaultvalue) {
	
	return parseInt(this.get(key, defaultvalue));
	
};


//*********************************************************
// GameClock constructor
//*********************************************************
function GameClock () {
	
	this.Events    = [];
	this.Listeners = [];
	this.CleanTime = 10;
	
}


//*********************************************************
// GameClock.pulse
//*********************************************************
GameClock.prototype.pulse = function(deltatime) {
	
	// Listeners
	let i;
	for (i=0; i<this.Listeners.length; i++) {
		if (this.Listeners[i].Active) {
			this.Listeners[i].Handler.call(this.Listeners[i].Context, deltatime);
		}
	}
	
	// Events
	let c = this.Events.length;
	for (i=0; i<c; i++) {
		this.Events[i].pulse(deltatime);
	}
	
	// Cleanup
	this.CleanTime -= deltatime;
	if (this.CleanTime <= 0) {
		
		// Listeners
		let listeners = [];
		for (i=0; i<this.Listeners.length; i++) {
			if (this.Listeners[i].Active) {
				listeners.push(this.Listeners[i]);
			}
		}
		this.Listeners = listeners;
		
		// Events
		let events = [];
		for (i=0; i<this.Events.length; i++) {
			if (this.Events[i].Active) {
				events.push(this.Events[i]);
			}
		}
		this.Events = events;
		
		// Next cleanup in...
		this.CleanTime = 10;
	}
	
};


//*********************************************************
// GameClock.addListener
//*********************************************************
GameClock.prototype.addListener = function(context, handler) {

	let listener = new ClockListener(context, handler);
	this.Listeners.push(listener);
	return listener;
	
};


//*********************************************************
// GameClock.evt
//*********************************************************
GameClock.prototype.evt = function(delay, context, handler, data) {

	if (this.Events.length > 10000) {
		console.log("Too many events ???");
		return;
	}
	let evt = new GameClockEvent(delay, context, handler, data);
	this.Events.push(evt);
	return evt;
	
};


//*********************************************************
// ClockListener constructor
//*********************************************************
function ClockListener (context, handler) {
	
	this.Active  = true;
	this.Context = context;
	this.Handler = handler;
	
}


//*********************************************************
// ClockListener.cancel
//*********************************************************
ClockListener.prototype.cancel = function() {
	
	this.Active = false;
	
};


//*********************************************************
// GameClockEvent constructor
//*********************************************************
function GameClockEvent (delay, context, handler, data) {
	
	this.Active  = true;
	this.Delay   = delay;
	this.Context = context;
	this.Handler = handler;
	this.Data    = data;
	
}


//*********************************************************
// GameClockEvent.pulse
//*********************************************************
GameClockEvent.prototype.pulse = function(deltatime) {
	
	if (this.Active) {
		this.Delay -= deltatime;
		if (this.Delay <= 0) {
			this.Handler.call(this.Context, this.Data);
			this.Active = false;
		}
	}
	
};


//*********************************************************
// GameClockEvent.cancel
//*********************************************************
GameClockEvent.prototype.cancel = function() {
	
	this.Active = false;
	
};


//> GameEasing constructor
function GameEasing () {
	
	this.CleanTime = 10;
	this.Motions   = [];
	
}


//> GameEasing.pulse
GameEasing.prototype.pulse = function(deltatime) {
	
	// Motions
	let i;
	let c = this.Motions.length;
	for (i=0; i<c; i++) {
		if (this.Motions[i].Active) {
			this.Motions[i].pulse(deltatime);
		}
	}
	
	// Cleanup
	this.CleanTime -= deltatime;
	if (this.CleanTime <= 0) {
		
		// Motions
		let motions = [];
		for (i=0; i<this.Motions.length; i++) {
			if (this.Motions[i].Active) {
				motions.push(this.Motions[i]);
			}
		}
		this.Motions = motions;
		
		// Next cleanup in...
		this.CleanTime = 10;
	}
	
};


//> GameEasing.motion
GameEasing.prototype.motion = function(formula, context, handler, val1, val2, delay, elastiddelta, data) {

	if (!GAME.Focus) {
		console.log("[!] Easing motion while focus is out");
	}

	if (this.Motions.length > 10000) {
		console.log("[!] GameEasing.motion limit reached");
		handler.call(context, val2, true, data);
		return;
	}

	let motion = new GameEasingMotion(formula, context, handler, val1, val2, delay, elastiddelta, data);
	this.Motions.push(motion);
	return motion;
	
};


//*********************************************************
// easing_linear
//*********************************************************
function easing_linear (t, b, c, d) {
	
	return c * t / d + b;
	
}


//*********************************************************
// easing_quad_in
//*********************************************************
function easing_quad_in(t, b, c, d) {
	
	t /= d;
	return c*t*t + b;
	
}


//*********************************************************
// easing_quad_out
//*********************************************************
function easing_quad_out(t, b, c, d) {
	
	t /= d;
	return -c * t*(t-2) + b;
	
}


//*********************************************************
// easing_quad_in_out
//*********************************************************
function easing_quad_in_out(t, b, c, d) {
	
	t /= d/2;
	if (t < 1) {return c/2*t*t + b;}
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
	
}


//> GameEasingMotion constructor
function GameEasingMotion (formula, context, handler, val1, val2, delay, elasticdelta, data) {
	
	if (elasticdelta === undefined) {elasticdelta = 0;}
	//
	this.Active  = true;
	this.Done    = false;
	//
	this.Formula = formula;
	this.Context = context;
	this.Handler = handler;
	this.Data    = data;
	//
	this.Time    = 0;
	this.Delay   = delay;
	this.Val1    = val1;
	this.Val2    = val2;
	this.Delta   = val2 - val1;
	this.eDelta  = elasticdelta;
	//
	
	//
	if (elasticdelta !== 0) {
		let absdelta = Math.abs(elasticdelta);
		if (elasticdelta > 0) {
			this.Delta = this.Delta + absdelta + absdelta;
		} else {
			this.Delta = this.Delta - absdelta - absdelta;
		}
	}
	
}


//> GameEasingMotion.pulse
GameEasingMotion.prototype.pulse = function(deltatime) {

	if (!this.Active) {return;}
	//
	this.Time += deltatime;
	//
	if (this.Time >= this.Delay) {
		this.Time = this.Delay;
		this.Done = true;
		this.Active = false;
	}
	//
	let val = this.Formula(this.Time, this.Val1, this.Delta, this.Delay);
	//
	if (this.eDelta > 0) {
		if (val > this.Val2 + this.eDelta) {
			val = this.Val2 + this.eDelta + this.Val2 + this.eDelta - val;
		}
	}
	//
	if (this.eDelta < 0) {
		if (Math.abs(val - this.Val1) < Math.abs(this.eDelta)) {
			val = this.Val1 - (val - this.Val1);
		} else {
			val = val - this.eDelta - this.eDelta;
		}
	}
	//
	this.Handler.call(this.Context, val, this.Done, this.Data);
	
};


//> GameEasingMotion.cancel
GameEasingMotion.prototype.cancel = function() {
	
	this.Active = false;
	
};


//> UICanvas constructor
function UICanvas (game) {
	
	this.Type    = "Canvas";
	this.Game    = game;
	//
	this.Root = new PIXI.Container();
	PIXIAPP.stage.addChild(this.Root);
	//
	this.Width   = 1136;
	this.Height  = 640;
	//
	this.Widgets = [];
	
}


//> UICanvas.reset
UICanvas.prototype.reset = function(w, h, scale) {
	
	// Height
	this.Width  = w;
	this.Height = h;
	
	// Scale
	this.Root.scale.set(scale, scale);
	
	// Position root in the middle
	this.Root.x = SCREEN.w * 0.5;
	this.Root.y = SCREEN.h * 0.5;
	
	// Reset widgets positions within canvas
	// Fullscreen widgets need to update as well
	for (let i=0; i<this.Widgets.length; i++) {this.Widgets[i].reset();}
	
};


//> UICanvas.onInputDown
UICanvas.prototype.onInputDown = function(touchindex, x, y) {
	
	let hit = false;
	//
	let ws = [];
	let c = this.Widgets.length;
	let i;
	for (i=0; i<c; i++) {ws.push(this.Widgets[i]);}
	//
	c = ws.length;
	for (i=0; i<c; i++) {
		if (ws[i].onInputDown(touchindex, x, y)) {
			hit = true;
		}
	}
	return hit;
	
};


//> UICanvas.onInputMove
UICanvas.prototype.onInputMove = function(touchindex, x, y) {

	let hit = false;
	//
	let ws = [];
	let c = this.Widgets.length;
	let i;
	for (i=0; i<c; i++) {ws.push(this.Widgets[i]);}
	//
	c = ws.length;
	for (i=0; i<c; i++) {
		if (ws[i].onInputMove(touchindex, x, y)) {
			hit = true;
		}
	}
	return hit;
	
};


//> UICanvas.onInputUp
UICanvas.prototype.onInputUp = function(touchindex, x, y) {

	let hit = false;
	//
	let ws = [];
	let c = this.Widgets.length;
	let i;
	for (i=0; i<c; i++) {ws.push(this.Widgets[i]);}
	//
	c = ws.length;
	for (i=0; i<c; i++) {
		if (ws[i].onInputUp(touchindex, x, y)) {
			hit = true;
		}
	}
	return hit;
	
};


//> UICanvas.onSwipe
UICanvas.prototype.onSwipe = function(dx, dy) {

	let ws = [];
	let c = this.Widgets.length;
	let i;
	for (i=0; i<c; i++) {ws.push(this.Widgets[i]);}
	//
	c = ws.length;
	for (i=0; i<c; i++) {ws[i].onSwipe(dx, dy);}
	
};


//> UICanvas.createWidget
UICanvas.prototype.createWidget = function(w, h, x, y, pivotx, pivoty, anchorx, anchory) {

	let widget = new UIWidget(this, w, h, x, y, pivotx, pivoty, anchorx, anchory);
	this.Widgets.push(widget);
	this.Root.addChild(widget.Root);
	return widget;
	
};


// UICanvas.remWidget
UICanvas.prototype.remWidget = function(widget) {

	let i = this.Widgets.indexOf(widget);
	if (i >= 0) {this.Widgets.splice(i,1);}
	//
	this.Root.removeChild(widget.Root);
	
};


//> UIWidget constructor
function UIWidget (parent, w, h, x, y, pivotx, pivoty, anchorx, anchory) {

	// Status
	this.active = true;
	this.hidden = false;

	if (x       === undefined) {x       = 0;}
	if (y       === undefined) {y       = 0;}
	if (pivotx  === undefined) {pivotx  = 0.5;}
	if (pivoty  === undefined) {pivoty  = 0.5;}
	if (anchorx === undefined) {anchorx = 0.5;}
	if (anchory === undefined) {anchory = 0.5;}
	//
	this.Type    = "Widget";
	this.Parent  = parent;                    // UICanvas or UIWidget
	this.Game    = parent.Game;
	this.Root    = new PIXI.Container();
	this.Width   = w;
	this.Height  = h;
	
	this.PivotX  = pivotx;
	this.PivotY  = pivoty;
	this.AnchorX = anchorx;
	this.AnchorY = anchory;
	//
	this.CenterOffsetX = 0;
	this.CenterOffsetY = 0;
	//
	this.Widgets  = [];
	this.Images   = [];
	this.Buttons  = [];
	this.Texts    = [];
	this.Fonts    = [];
	//
	this.IsFullScreen = false;
	//
	this.SwipeContext = null;
	this.SwipeHandler = null;
	//
	this.input_down_hdl = null;
	this.input_down_ctx = null;
	this.input_move_hdl = null;
	this.input_move_ctx = null;
	this.input_up_hdl   = null;
	this.input_up_ctx   = null;
	//
	this.X = x;
	this.Y = y;
	this.setAnchoredPos();
	
} // UIWidget constructor


//> UIWidget.setAnchoredPos
UIWidget.prototype.setAnchoredPos = function(x, y) {
	
	if (x !== undefined) {this.X = x;}
	if (y !== undefined) {this.Y = y;}
	//
	if (this.Parent.Type === "Canvas") {
		this.Root.x = this.X + ((-0.5 + this.AnchorX) * this.Parent.Width)  + ((0.5 - this.PivotX) * this.Width);
		this.Root.y = this.Y + ((-0.5 + this.AnchorY) * this.Parent.Height) + ((0.5 - this.PivotY) * this.Height);
	} else {
		this.Root.x = this.X + ((-0.5 + this.AnchorX) * this.Parent.Width)  + ((0.5 - this.PivotX) * this.Width);
		this.Root.y = this.Y + ((-0.5 + this.AnchorY) * this.Parent.Height) + ((0.5 - this.PivotY) * this.Height);
	}
	
};


//*********************************************************
// UIWidget.setFullScreen
//*********************************************************
UIWidget.prototype.setFullScreen = function() {

	this.IsFullScreen = true;
	this.reset();
	
};


//*********************************************************
// UIWidget.reset
//*********************************************************
UIWidget.prototype.reset = function() {

    if (this.IsFullScreen) {
        this.Width  = GUI.RW;
        this.Height = GUI.RH;
    }

	this.setAnchoredPos();

    let i;
	if (this.IsFullScreen) {
		for (i=0; i<this.Widgets.length;  i++) {this.Widgets[i].setAnchoredPos();}
		for (i=0; i<this.Images.length;   i++) {this.Images[i].setAnchoredPos();}
		for (i=0; i<this.Buttons.length;  i++) {this.Buttons[i].setAnchoredPos();}
		for (i=0; i<this.Texts.length;    i++) {this.Texts[i].setAnchoredPos();}
		for (i=0; i<this.Fonts.length;    i++) {this.Fonts[i].setAnchoredPos();}
	}
	//
	for (i=0; i<this.Texts.length; i++) {this.Texts[i].resetScale();}
	
};


//> UIWidget.SetVisible
UIWidget.prototype.SetVisible = function(visible) {

	this.active = visible;
	this.hidden = !visible;
	this.Root.visible = visible;

};


//*********************************************************
// UIWidget.IsPointWithin
//*********************************************************
UIWidget.prototype.IsPointWithin = function(uiloc) {

	// Anchor offset x,y
	let aox = (-0.5 + this.AnchorX) * this.Parent.Width;
	let aoy = (-0.5 + this.AnchorY) * this.Parent.Height;

	let x1 = aox + this.X + (-this.PivotX * this.Width);
	let x2 = aox + this.X + ((1 - this.PivotX) * this.Width);
	let y1 = aoy + this.Y + (-this.PivotY * this.Height);
	let y2 = aoy + this.Y + ((1 - this.PivotY) * this.Height);

	//
	if (uiloc.x < x1) {return false;}
	if (uiloc.x > x2) {return false;}
	if (uiloc.y < y1) {return false;}
	if (uiloc.y > y2) {return false;}
	//
	return true;

};


//*********************************************************
// UIWidget.onInputDown
//*********************************************************
UIWidget.prototype.onInputDown = function(touchindex, x, y) {

	// Widget is active?
	if (!this.active) {return;}

	x = x - this.Root.x;
	y = y - this.Root.y;
	//
	let hit = false;
	//
	let i;
	let c;
	let ws = [];
	let bs = [];
	let cw = this.Widgets.length;
	for (i=0; i<cw; i++) {ws.push(this.Widgets[i]);}
	let cb = this.Buttons.length;
	for (i=0; i<cb; i++) {bs.push(this.Buttons[i]);}
	//
	for (i=0; i<cw; i++) {
		if (ws[i].onInputDown(touchindex, x, y)) {
			hit = true;
		}
	}
	//
	for (i=0; i<cb; i++) {
		if (bs[i].onInputDown(touchindex, x, y)) {
			hit = true;
		}
	}
	//
	if (this.input_down_hdl != null) {this.input_down_hdl.call(this.input_down_ctx, touchindex, x, y);}
	//
	return hit;
	
};


//*********************************************************
// UIWidget.onInputMove
//*********************************************************
UIWidget.prototype.onInputMove = function(touchindex, x, y) {

	// Widget is active?
	if (!this.active) {return;}

	x = x - this.Root.x;
	y = y - this.Root.y;
	//
	let hit = false;
	//
	let i;
	let c;
	let ws = [];
	let bs = [];
	let cw = this.Widgets.length;
	for (i=0; i<cw; i++) {ws.push(this.Widgets[i]);}
	let cb = this.Buttons.length;
	for (i=0; i<cb; i++) {bs.push(this.Buttons[i]);}
	//
	for (i=0; i<cw; i++) {
		if (ws[i].onInputMove(touchindex, x, y)) {
			hit = true;
		}
	}
	//
	for (let i=0; i<cb; i++) {
		if (bs[i].onInputMove(touchindex, x, y)) {
			hit = true;
		}
	}
	//
	if (this.input_move_hdl != null) {this.input_move_hdl.call(this.input_move_ctx, touchindex, x, y);}
	//
	return hit;
	
};


//*********************************************************
// UIWidget.onInputUp
//*********************************************************
UIWidget.prototype.onInputUp = function(touchindex, x, y) {

	// Widget is active?
	if (!this.active) {return;}

	x = x - this.Root.x;
	y = y - this.Root.y;
	//
	hit = false;
	//
	let i;
	let c;
	let ws = [];
	let bs = [];
	let cw = this.Widgets.length;
	for (i=0; i<cw; i++) {ws.push(this.Widgets[i]);}
	let cb = this.Buttons.length;
	for (i=0; i<cb; i++) {bs.push(this.Buttons[i]);}
	//
	for (i=0; i<cw; i++) {
		if (ws[i].onInputUp(touchindex, x, y)) {
			hit = true;
		}
	}
	//
	for (i=0; i<cb; i++) {
		if (bs[i].onInputUp(touchindex, x, y)) {
			hit = true;
		}
	}
	//
	if (this.input_up_hdl != null) {this.input_up_hdl.call(this.input_up_ctx, touchindex, x, y);}
	//
	return hit;
	
};


//*********************************************************
// UIWidget.onSwipe
//*********************************************************
UIWidget.prototype.onSwipe = function(dx, dy) {

	let c = this.Widgets.length;
	for (let i=0; i<c; i++) {this.Widgets[i].onSwipe(dx, dy);}
	
	// Swipe handler
	if (this.SwipeHandler != null) {
		this.SwipeHandler.call(this.SwipeContext, dx, dy);
	}
	
};


//*********************************************************
// UIWidget.createWidget
//*********************************************************
UIWidget.prototype.createWidget = function(w, h, x, y, pivotx, pivoty, anchorx, anchory) {
	
	// Child widget
	let widget = new UIWidget(this, w, h, x, y, pivotx, pivoty, anchorx, anchory);
	this.Widgets.push(widget);
	this.Root.addChild(widget.Root);
	return widget;
	
};


//*********************************************************
// UIWidget.remWidget
//*********************************************************
UIWidget.prototype.remWidget = function(widget) {

	let i = this.Widgets.indexOf(widget);
	if (i >= 0) {this.Widgets.splice(i,1);}
	//
	this.Root.removeChild(widget.Root);
	
};


//*********************************************************
// UIWidget.createImage
//*********************************************************
UIWidget.prototype.createImage = function(texture, x, y, scale, pivotx, pivoty, anchorx, anchory) {
	
	if (x       === undefined) {x       = 0;}
	if (y       === undefined) {y       = 0;}
	if (scale   === undefined) {scale   = 1;}
	if (pivotx  === undefined) {pivotx  = 0.5;}
	if (pivoty  === undefined) {pivoty  = 0.5;}
	if (anchorx === undefined) {anchorx = 0.5;}
	if (anchory === undefined) {anchory = 0.5;}
	//
	let img = new uiImage(this, texture, x, y, scale, pivotx, pivoty, anchorx, anchory);
	this.Images.push(img);
	this.Root.addChild(img.Sprite);
	//
	return img;
	
};


//*********************************************************
// UIWidget.remImage
//*********************************************************
UIWidget.prototype.remImage = function(img) {

	let i = this.Images.indexOf(img);
	if (i >= 0) {this.Images.splice(i,1);}
	
};


//*********************************************************
// UIWidget.createFont
//*********************************************************
UIWidget.prototype.createFont = function(text, font, x, y, alignh, alignv, anchorx, anchory, scale) {

	let obj = new uiFont(this, text, font, x, y, alignh, alignv, anchorx, anchory, scale);
	this.Fonts.push(obj);
	this.Root.addChild(obj.Root);
	//
	return obj;

};


//> UIWidget.remFont
UIWidget.prototype.remFont = function(font) {

	let i = this.Fonts.indexOf(font);
	if (i >= 0) {this.Fonts.splice(i,1);}

};


//*********************************************************
// UIWidget.createText
//*********************************************************
UIWidget.prototype.createText = function(text, style, x, y, pivotx, pivoty, anchorx, anchory) {
	
	if (x       === undefined) {x       = 0;}
	if (y       === undefined) {y       = 0;}
	if (pivotx  === undefined) {pivotx  = 0.5;}
	if (pivoty  === undefined) {pivoty  = 0.5;}
	if (anchorx === undefined) {anchorx = 0.5;}
	if (anchory === undefined) {anchory = 0.5;}
	//
	let txt = new uiText(this, text, style, x, y, pivotx, pivoty, anchorx, anchory);
	this.Texts.push(txt);
	this.Root.addChild(txt.Field);
	//
	return txt;
	
};


//*********************************************************
// UIWidget.localizedText
//*********************************************************
UIWidget.prototype.localizedText = function(textkey, style, x, y, pivotx, pivoty, anchorx, anchory) {
	
	let txt = this.Game.Lang.fetch(textkey);
	return this.createText(txt, style, x, y, pivotx, pivoty, anchorx, anchory);
	
};


//*********************************************************
// UIWidget.remText
//*********************************************************
UIWidget.prototype.remText = function(txt) {

	let i = this.Texts.indexOf(txt);
	if (i >= 0) {this.Texts.splice(i,1);}
	
};


//> UIWidget.createButton
UIWidget.prototype.createButton = function(context, handler, tex_out, tex_over, tex_down, x, y, scale, pivotx, pivoty, anchorx, anchory) {
	
	if (x       === undefined) {x       = 0;}
	if (y       === undefined) {y       = 0;}
	if (scale   === undefined) {scale   = 1;}
	if (pivotx  === undefined) {pivotx  = 0.5;}
	if (pivoty  === undefined) {pivoty  = 0.5;}
	if (anchorx === undefined) {anchorx = 0.5;}
	if (anchory === undefined) {anchory = 0.5;}
	//
	let btn = new uiButton(this, context, handler, tex_out, tex_over, tex_down, x, y, scale, pivotx, pivoty, anchorx, anchory);
	this.Buttons.push(btn);
	this.Root.addChild(btn.Sprite);
	//
	return btn;
	
};


//> UIWidget.remButton
UIWidget.prototype.remButton = function(img) {

	let i = this.Images.indexOf(img);
	if (i >= 0) {this.Images.splice(i,1);}
	
};


//> UIWidget.popIn
UIWidget.prototype.popIn = function() {

	if (this.Root == null) {return;}
	this.Root.scale.set(0.01, 0.01);
	this.Game.Easing.motion(easing_quad_in_out, this, this.popInSome, 0.01, 1, 0.4, 0.4);
	
};


//> UIWidget.popInSome
UIWidget.prototype.popInSome = function(scale, done) {

	if (this.Root == null) {return;}
	this.Root.scale.set(scale, scale);
	
};


//> UIWidget.popOut
UIWidget.prototype.popOut = function() {

	if (this.Root == null) {return;}
	this.Root.scale.set(1, 1);
	this.Game.Easing.motion(easing_quad_in_out, this, this.popOutSome, 1, 0.1, 0.4, 0);

};


//> UIWidget.popOutSome
UIWidget.prototype.popOutSome = function(scale, done) {

	if (this.Root == null) {return;}
	this.Root.scale.set(scale, scale);
	if (done) {
		this.SetVisible(false);
	}

};


//> UIWidget.destroy
UIWidget.prototype.destroy = function() {

	if (!this.active) {return;}
	this.active = false;

	// Remove self from parent
	this.Parent.remWidget(this);
	
	// Delayed destruction (allow internal phaser events to complete)
	//this.Game.Clock.evt(0.1, this, this.destroyNow);

	// Destroy all child objects
	let i;
	let dump = [];

	for (i=0; i<this.Widgets.length; i++) {dump.push(this.Widgets[i]);}
	for (i=0; i<this.Images.length;  i++) {dump.push(this.Images[i]);}
	for (i=0; i<this.Buttons.length; i++) {dump.push(this.Buttons[i]);}
	for (i=0; i<this.Texts.length;   i++) {dump.push(this.Texts[i]);}
	for (i=0; i<this.Fonts.length;   i++) {dump.push(this.Fonts[i]);}
	//
	this.Widgets = [];
	this.Images  = [];
	this.Buttons = [];
	this.Texts   = [];
	this.Fonts   = [];
	//
	for (i=0; i<dump.length; i++) {dump[i].destroy();}

	// Root
	this.Root.destroy();
	this.Root   = null;
	this.Parent = null;

};


//*********************************************************
// UIWidget.destroyNow
//*********************************************************
UIWidget.prototype.destroyNow = function() {
	

	
};


// uiImage constructor
function uiImage (parent, texture, x, y, scale, pivotx, pivoty, anchorx, anchory) {
	
	if (x       === undefined) {x       = 0;}
	if (y       === undefined) {y       = 0;}
	if (scale   === undefined) {scale   = 1;}
	if (pivotx  === undefined) {pivotx  = 0.5;}
	if (pivoty  === undefined) {pivoty  = 0.5;}
	if (anchorx === undefined) {anchorx = 0.5;}
	if (anchory === undefined) {anchory = 0.5;}
	//
	//
	this.Parent = parent;              // UIWidget
	this.Game   = parent.Game;
	//
	this.Sprite = new PIXI.Sprite(texture);
	//
	this.Sprite.anchor.set(pivotx, pivoty);
	this.Sprite.scale.set(scale,scale);
	this.AnchorX = anchorx;
	this.AnchorY = anchory;
	//
	this.SpinListener = null;
	//
	this.setAnchoredPos(x,y);
	
} // uiImage constructor


//> uiImage.setAnchoredPos
uiImage.prototype.setAnchoredPos = function(x, y) {
	
	if (x !== undefined) {this.X = x;}
	if (y !== undefined) {this.Y = y;}
	if (this.Sprite != null) {
		this.Sprite.x = this.X + ((-0.5 + this.AnchorX) * this.Parent.Width)  + this.Parent.CenterOffsetX;
		this.Sprite.y = this.Y + ((-0.5 + this.AnchorY) * this.Parent.Height) + this.Parent.CenterOffsetY;
	}
	
};


//*********************************************************
// uiImage.IsPointWithin
//*********************************************************
uiImage.prototype.IsPointWithin = function(uiloc) {

	// Anchor offset x,y
	let aox = ((-0.5 + this.AnchorX) * this.Parent.Width) + this.Parent.CenterOffsetX;
	let aoy = ((-0.5 + this.AnchorY) * this.Parent.Height) + this.Parent.CenterOffsetY;

	let x1 = aox + this.X + (-this.Sprite.anchor.x      * this.Sprite.width);
	let x2 = aox + this.X + ((1 - this.Sprite.anchor.x) * this.Sprite.width);
	let y1 = aoy + this.Y + (-this.Sprite.anchor.y      * this.Sprite.height);
	let y2 = aoy + this.Y + ((1 - this.Sprite.anchor.y) * this.Sprite.height);

	//
	if (uiloc.x < x1) {return false;}
	if (uiloc.x > x2) {return false;}
	if (uiloc.y < y1) {return false;}
	if (uiloc.y > y2) {return false;}
	//
	return true;

};


//*********************************************************
// uiImage.spin
// speed : deg / sec
// fps   : how many updates per seconds
//*********************************************************
uiImage.prototype.spin = function(speed) {
	
	this.SpinSpeed    = speed;
	this.SpinListener = this.Game.Clock.addListener(this, this.spinSome);
	
};


//*********************************************************
// uiImage.spinSome [Internal]
//*********************************************************
uiImage.prototype.spinSome = function(deltatime) {
	
	this.Sprite.rotation += this.SpinSpeed * deltatime;
	
};


//*********************************************************
// uiImage.stopSpin
//*********************************************************
uiImage.prototype.stopSpin = function() {
	
	this.SpinListener.Active = false;
	
};


// uiImage.Flash
uiImage.prototype.Flash = function(delay1, delay2) {

	this.FlashDelay1 = delay1;
	this.FlashDelay2 = delay2;
	GAME.Clock.evt(delay1, this, this.FlashSome);

};


// uiImage.FlashSome
uiImage.prototype.FlashSome = function() {

	if (this.Sprite == null) {return;}

	this.Sprite.visible = !this.Sprite.visible;
	if (this.Sprite.visible) {
		GAME.Clock.evt(this.FlashDelay1, this, this.FlashSome);
	} else {
		GAME.Clock.evt(this.FlashDelay2, this, this.FlashSome);
	}

};


//*********************************************************
// uiImage.translateTo
//*********************************************************
uiImage.prototype.translateTo = function(x, y, delay) {
	
	this.SlideFrom   = {x:this.X, y:this.Y};
	this.SlideDelta  = {x:x-this.X, y:y-this.Y};
	this.SlideMotion = this.Game.Easing.motion(easing_linear, this, this.translateSome, 0, 1, delay);
	
};


//*********************************************************
// uiImage.translate
//*********************************************************
uiImage.prototype.translate = function(dx, dy, delay) {
	
	this.SlideFrom   = {x:this.X, y:this.Y};
	this.SlideDelta  = {x:dx, y:dy};
	this.SlideMotion = this.Game.Easing.motion(easing_linear, this, this.translateSome, 0, 1, delay);
	
};


//*********************************************************
// uiImage.translateSome
//*********************************************************
uiImage.prototype.translateSome = function(val, done) {
	
	this.X = this.SlideFrom.x + (this.SlideDelta.x * val);
	this.Y = this.SlideFrom.y + (this.SlideDelta.y * val);
	this.setAnchoredPos();
	
};


//*********************************************************
// uiImage.alphaMotion
//*********************************************************
uiImage.prototype.alphaMotion = function(alpha1, alpha2, delay) {
	
	this.Game.Easing.motion(easing_linear, this, this.alphaMotionSome, alpha1, alpha2, delay);
	
};


//> uiImage.alphaMotionSome
uiImage.prototype.alphaMotionSome = function(alpha, done) {
	
	if (this.Sprite != null) {
		this.Sprite.alpha = alpha;
	}
	
};


//> uiImage.SetTexture
uiImage.prototype.SetTexture = function(tex) {

	if (this.Sprite != null) {
		this.Sprite.texture = tex;
	}

};


//> uiImage.SetVisible
uiImage.prototype.SetVisible = function(visible) {

	if (this.Sprite != null) {
		this.Sprite.visible = visible;
	}

};


//> uiImage.destroy
uiImage.prototype.destroy = function() {
	
	if (this.SpinListener != null) {this.SpinListener.Active = false;}
	this.Parent.remImage(this);
	if (this.Sprite != null) {this.Sprite.destroy();}
	this.Sprite = null;
	
};


//*********************************************************
// uiFont constructor
//*********************************************************
function uiFont (parent, text, font, x, y, alignh, alignv, anchorx, anchory, scale) {

	this.Parent = parent;
	this.Game   = parent.Game;

	// Sprite font container
	this.Root = BFONT.createText(parent.Root, x,y, text, alignh,alignv, font, scale);

	// Anchor
	this.AnchorX = anchorx;
	this.AnchorY = anchory;

	// Position
	this.X = x;
	this.Y = y;
	this.setAnchoredPos();

} // uiFont Constructor


//*********************************************************
// uiFont.setAnchoredPos
//*********************************************************
uiFont.prototype.setAnchoredPos = function(x, y) {

	if (x !== undefined) {this.X = x;}
	if (y !== undefined) {this.Y = y;}
	if (this.Root != null) {
		this.Root.x = this.X + ((-0.5 + this.AnchorX) * this.Parent.Width)  + this.Parent.CenterOffsetX;
		this.Root.y = this.Y + ((-0.5 + this.AnchorY) * this.Parent.Height) + this.Parent.CenterOffsetY;
	}

};


//*********************************************************
// uiFont.destroy
//*********************************************************
uiFont.prototype.destroy = function() {

	this.Parent.remFont(this);
	this.Root.destroy();
	this.Root = null;

};


//> uiText constructor
function uiText (parent, text, style, x, y, pivotx, pivoty, anchorx, anchory) {
	
	if (x       === undefined) {x       = 0;}
	if (y       === undefined) {y       = 0;}
	if (pivotx  === undefined) {pivotx  = 0.5;}
	if (pivoty  === undefined) {pivoty  = 0.5;}
	if (anchorx === undefined) {anchorx = 0.5;}
	if (anchory === undefined) {anchory = 0.5;}
	//
	this.Parent = parent;
	this.Game   = parent.Game;
	//
	this.Field = new PIXI.Text(text, style);
	this.field = this.Field;
	//
	this.Field.anchor.set(pivotx, pivoty);
	//
	this.AnchorX = anchorx;
	this.AnchorY = anchory;
	//
	this.X = x;
	this.Y = y;
	this.setAnchoredPos();
	
} // uiText Constructor


//> uiText.SetStyle
uiText.prototype.SetStyle = function(style) {

	this.Field.style = style;

};


//> uiText.setAnchoredPos
uiText.prototype.setAnchoredPos = function(x, y) {
	
	if (x !== undefined) {this.X = x;}
	if (y !== undefined) {this.Y = y;}
	if (this.Field != null) {
		this.Field.x = this.X + ((-0.5 + this.AnchorX) * this.Parent.Width)  + this.Parent.CenterOffsetX;
		this.Field.y = this.Y + ((-0.5 + this.AnchorY) * this.Parent.Height) + this.Parent.CenterOffsetY;
	}
	
};


//> uiText.resetScale
uiText.prototype.resetScale = function() {
	

	
};


//> uiText.translateTo
uiText.prototype.translateTo = function(x, y, delay) {
	
	this.SlideFrom   = {x:this.X, y:this.Y};
	this.SlideDelta  = {x:x-this.X, y:y-this.Y};
	this.SlideMotion = this.Game.Easing.motion(easing_linear, this, this.translateSome, 0, 1, delay);
	
};


//> uiText.translate
uiText.prototype.translate = function(dx, dy, delay) {
	
	this.SlideFrom   = {x:this.X, y:this.Y};
	this.SlideDelta  = {x:dx, y:dy};
	this.SlideMotion = this.Game.Easing.motion(easing_linear, this, this.translateSome, 0, 1, delay);
	
};


//> uiText.translateSome
uiText.prototype.translateSome = function(val, done) {
	
	this.X = this.SlideFrom.x + (this.SlideDelta.x * val);
	this.Y = this.SlideFrom.y + (this.SlideDelta.y * val);
	this.setAnchoredPos();
	
};


//> uiText.alphaMotion
uiText.prototype.alphaMotion = function(alpha1, alpha2, delay) {
	
	GAME.Easing.motion(easing_linear, this, this.alphaMotionSome, alpha1, alpha2, delay);
	
};


//> uiText.alphaMotionSome
uiText.prototype.alphaMotionSome = function(alpha, done) {
	
	if (this.Field != null) {
		this.Field.alpha = alpha;
	}
	
};


//> uiText.SetVisible
uiText.prototype.SetVisible = function(visible) {

	this.Field.visible = visible;

};


//> uiText.SetText
uiText.prototype.SetText = function(txt) {
	
	this.Field.text = txt;
	
};


//> uiText.localize
uiText.prototype.localize = function(key, xxx, yyy) {
	
	this.Field.text = this.Game.Lang.fetch(key);
	
};


//> uiText.destroy
uiText.prototype.destroy = function() {
	
	this.Parent.remText(this);
	this.Field.destroy();
	this.Field = null;
	
};


//> uiButton constructor
function uiButton (parent, context, handler, tex_out, tex_over, tex_down, x, y, scale, pivotx, pivoty, anchorx, anchory) {

	// Status
	this.active = true;

	if (x       === undefined) {x       = 0;}
	if (y       === undefined) {y       = 0;}
	if (scale   === undefined) {scale   = 1;}
	if (pivotx  === undefined) {pivotx  = 0.5;}
	if (pivoty  === undefined) {pivoty  = 0.5;}
	if (anchorx === undefined) {anchorx = 0.5;}
	if (anchory === undefined) {anchory = 0.5;}
	//
	this.Parent = parent;         // UIWidget
	this.Game   = parent.Game;
	//
	this.Context = context;
	this.Handler = handler;
	//
	this.HandlerData = null;
	//
	this.TexOut  = tex_out;
	this.TexOver = tex_over;
	this.TexDown = tex_down;
	//
	this.Sprite = new PIXI.Sprite(tex_out);
	//
	this.Sprite.anchor.set(pivotx, pivoty);
	this.Sprite.scale.set(scale, scale);
	//
	this.Width  = this.Sprite.width;
	this.Height = this.Sprite.height;
	//
	this.PivotX  = pivotx;
	this.PivotY  = pivoty;
	//
	this.AnchorX = anchorx;
	this.AnchorY = anchory;
	//
	this.X = x;
	this.Y = y;
	this.setAnchoredPos();
	//
	this.CenterOffsetX = (0.5 - pivotx) * this.Width;
	this.CenterOffsetY = (0.5 - pivoty) * this.Height;
	
	// Child components
	this.Images = [];
	this.Texts  = [];
	
	// Status
	this.Over = false;
	this.Down = false;
	this.Move = false;
	
} // Constructor


//> uiButton.SetTextures
uiButton.prototype.SetTextures = function(tex_out, tex_over, tex_down) {
	
	this.Sprite.texture = tex_out;
	//
	this.TexOut  = tex_out;
	this.TexOver = tex_over;
	this.TexDown = tex_down;

}; // SetTextures


//> uiButton.onInputDown
uiButton.prototype.onInputDown = function(touchindex, x, y) {

	// Button is active
	if (!this.active) {return;}

	// Mobile (no prior move event on mobile)
	let hit = false;
	//if (DEVICE.mobile || !this.Move) {this.onInputMove(touchindex, x, y);}
	this.onInputMove(touchindex, x, y);

	if (this.Over) {
		this.Down = true;
		this.Sprite.texture = this.TexDown;
		hit = true;
	}
	return hit;
	
};


//> uiButton.onInputMove
uiButton.prototype.onInputMove = function(touchindex, x, y) {
	
	// Move has been processed
	this.Move = true;
	
	// Within bounds?
	let hit = false;
	if (x >= this.X0 && x <= this.X1 && y >= this.Y0 && y <= this.Y1) {
		
		this.Over = true;
		if (this.Sprite != null) {
			if (this.Down) {
				this.Sprite.texture = this.TexDown;
			} else {
				this.Sprite.texture = this.TexOver;
			}
		}
		hit = true;
		
	} else {
		
		this.Over = false;
		if (this.Sprite != null) {this.Sprite.texture = this.TexOut;}
		
	}
	return hit;
	
};


//> uiButton.onInputUp
uiButton.prototype.onInputUp = function(touchindex, x, y) {

	let hit = x >= this.X0 && x <= this.X1 && y >= this.Y0 && y <= this.Y1;
	if (this.Over && this.Down) {
		
		if (this.active) {
			if (this.Handler != null) {
				this.Handler.call(this.Context, this.HandlerData);
			}
		}
		
	}
	this.Down = false;
	
	// Mobile
	this.Over = false;
	if (this.Sprite != null) {
		this.Sprite.texture = this.TexOut;
	}
	return hit;
	
};


//> uiButton.setAnchoredPos
uiButton.prototype.setAnchoredPos = function(x, y) {
	
	if (x !== undefined) {this.X = x;}
	if (y !== undefined) {this.Y = y;}
	this.Sprite.x = this.X + ((-0.5 + this.AnchorX) * this.Parent.Width)  + this.Parent.CenterOffsetX;
	this.Sprite.y = this.Y + ((-0.5 + this.AnchorY) * this.Parent.Height) + this.Parent.CenterOffsetY;
	
	// Bounds for interaction
	this.X0 = this.Sprite.x - (this.PivotX * this.Width);
	this.X1 = this.Sprite.x + ((1-this.PivotX) * this.Width);
	this.Y0 = this.Sprite.y - (this.PivotY * this.Height);
	this.Y1 = this.Sprite.y + ((1-this.PivotY) * this.Height);

};


//> uiButton.translateTo
uiButton.prototype.translateTo = function(x, y, delay) {
	
	this.SlideFrom   = {x:this.X, y:this.Y};
	this.SlideDelta  = {x:x-this.X, y:y-this.Y};
	this.SlideMotion = this.Game.Easing.motion(easing_linear, this, this.translateSome, 0, 1, delay);
	
};


//> uiButton.translate
uiButton.prototype.translate = function(dx, dy, delay) {
	
	this.SlideFrom   = {x:this.X, y:this.Y};
	this.SlideDelta  = {x:dx, y:dy};
	this.SlideMotion = this.Game.Easing.motion(easing_linear, this, this.translateSome, 0, 1, delay);
	
};


//> uiButton.translateSome
uiButton.prototype.translateSome = function(val, done) {
	
	this.X = this.SlideFrom.x + (this.SlideDelta.x * val);
	this.Y = this.SlideFrom.y + (this.SlideDelta.y * val);
	this.setAnchoredPos();
	
};


//> uiButton.createText
uiButton.prototype.createText = function(text, style, x, y, pivotx, pivoty, anchorx, anchory) {
	
	if (x       === undefined) {x       = 0;}
	if (y       === undefined) {y       = 0;}
	if (pivotx  === undefined) {pivotx  = 0.5;}
	if (pivoty  === undefined) {pivoty  = 0.5;}
	if (anchorx === undefined) {anchorx = 0.5;}
	if (anchory === undefined) {anchory = 0.5;}
	//
	let txt = new uiText(this, text, style, x, y, pivotx, pivoty, anchorx, anchory);
	this.Texts.push(txt);
	this.Sprite.addChild(txt.Field);
	//
	return txt;
	
};


//> uiButton.localizedText
uiButton.prototype.localizedText = function(textkey, style, x, y, pivotx, pivoty, anchorx, anchory) {
	
	let txt = this.Game.Lang.fetch(textkey);
	return this.createText(txt, style, x, y, pivotx, pivoty, anchorx, anchory);
	
};


//> uiButton.remText
uiButton.prototype.remText = function(txt) {
	
	let i = this.Texts.indexOf(txt);
	if (i >= 0) {this.Texts.splice(i,1);}
	
};


//> uiButton.createImage
uiButton.prototype.createImage = function(texture, x, y, scale, pivotx, pivoty, anchorx, anchory) {
	
	if (x       === undefined) {x       = 0;}
	if (y       === undefined) {y       = 0;}
	if (scale   === undefined) {scale   = 1;}
	if (pivotx  === undefined) {pivotx  = 0.5;}
	if (pivoty  === undefined) {pivoty  = 0.5;}
	if (anchorx === undefined) {anchorx = 0.5;}
	if (anchory === undefined) {anchory = 0.5;}
	//
	let img = new uiImage(this, texture, x, y, scale, pivotx, pivoty, anchorx, anchory);
	this.Images.push(img);
	this.Sprite.addChild(img.Sprite);
	//
	return img;
	
};


//> uiButton.remImage
uiButton.prototype.remImage = function(img) {
	
	let i = this.Images.indexOf(img);
	if (i >= 0) {this.Images.splice(i,1);}
	
};


//> uiButton.SetVisible
uiButton.prototype.SetVisible = function(visible) {

	this.active = visible;
	this.Sprite.visible = visible;
	
};


//> uiButton.destroy
uiButton.prototype.destroy = function() {

	let i;
	let dump = [];
	//
	for (i=0; i<this.Images.length; i++) {dump.push(this.Images[i]);}
	for (i=0; i<this.Texts.length;  i++) {dump.push(this.Texts[i]);}
	//
	this.Images = [];
	this.Texts = [];
	//
	for (i=0; i<dump.length; i++) {dump[i].destroy();}
	//
	this.Parent.remButton(this);
	this.Sprite.destroy();
	this.Sprite = null;
	this.Parent = null;

};