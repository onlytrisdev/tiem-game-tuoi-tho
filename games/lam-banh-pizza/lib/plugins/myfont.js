ig.module(
	'plugins.myfont'
)

.requires(
	'impact.font'
)

.defines(function() {
	
	// wordwrap berdasarkan WORDS, untuk berdasarkan CHAR uncomment fungsi dibawah fungsi ini
	/*
	wrap2 = function( context , text, x, y, lineHeight, fitWidth, stroked)
	{
		fitWidth = fitWidth || 0;
		
		if (fitWidth <= 0)
		{
			context.fillText( text, x, y );
			if (stroked)
				context.strokeText( text, x, y );
			return;
		}
		var words = text.split(' ');
		var currentLine = 0;
		var idx = 1;
		while (words.length > 0 && idx <= words.length)
		{
			var str = words.slice(0,idx).join(' ');
			var w = context.measureText(str).width;
			//console.log("w "+ w + " - fitwidth " + fitWidth)
			if ( w > fitWidth )
			{
				if (idx==1)
				{
					idx=2;
				}
				context.fillText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );
				if (stroked)
					context.strokeText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );
				currentLine++;
				words = words.splice(idx-1);
				idx = 1;
			}
			else
			{idx++;}
		}
		if  (idx > 0) {
			context.fillText( words.join(' '), x, y + (lineHeight*currentLine) );
			if (stroked)
				context.strokeText( words.join(' '), x, y + (lineHeight*currentLine) );
		}
	};
	*/

	// wordwrap berdasarkan CHARS, untuk berdasarkan WORDS uncomment fungsi diatas fungsi ini
	wrap2 = function( context , text, x, y, lineHeight, fitWidth, stroked)
	{
		fitWidth = fitWidth || 0;
		
		if (fitWidth <= 0)
		{
			context.fillText( text, x, y );
			if (stroked)
				context.strokeText( text, x, y );
			return;
		}
		var words = text;//.split(' ');
		var currentLine = 0;
		var idx = 1;
		while (words.length > 0 && idx <= words.length)
		{
			var str = words.substring(0,idx);
			var w = context.measureText(str).width;
			//console.log("w "+ w + " - fitwidth " + fitWidth + " - str "  + str + " - idx "  + idx + " - lineHeight " + lineHeight)
			if ( w > fitWidth )
			{
				if (idx==1)
				{
					idx=2;
				}
				context.fillText( words.substring(0,idx-1), x, y + (lineHeight*currentLine) );
				if (stroked)
					context.strokeText( words.substring(0,idx-1), x, y + (lineHeight*currentLine) );
				currentLine++;
				words = words.substring(idx-1, words.length);
				idx = 1;
			}
			else
			{idx++;}
		}
		if  (idx > 0) {
			context.fillText( words, x, y + (lineHeight*currentLine) );
			if (stroked)
				context.strokeText( words, x, y + (lineHeight*currentLine) );
		}
	};
	
	CLocalize = ig.Class.extend({
		 
		language: "EN",
		
		// default US translation
		strings: {
			
		},
			
		// will hold all images
		files: {
		},
		
		init:function() {
			
		},
			
		string:function(s){
		
			// check s for string or object
			if(typeof s === "object"){
				//log("sapi a");
				// merge strings        
				for (var translation in localize.strings) { 
					//log("A : " + translation + " - s : " + s[translation]);
					this.strings[translation] = s[translation] || this.strings[translation]; 
				}
		
			}else{
				//log("s : " + s);
				// link s agains object
				return this.strings[s] || s; 
			}
		},
		
		changeLang:function(lang) {
			//log("changeLang : " + lang);
			
			 // create empty object for translations
			var strings = {};
			
			// <language>/LOC.js
			// Note: that storing localized strings in different files  
			// only make sense with lot's of strings and different translations
			
			var loadStrings = document.createElement('script');
			loadStrings.src = "lang/"+lang+'/loc.js';
			loadStrings.onload = function(){
				
				// store returned strings
				if(typeof getLocalizedStrings === "function"){
					strings = getLocalizedStrings();
				}
				
				// overwrite strings with defaults from the game
				localize.string(strings); 
				
			};
			loadStrings.type = 'text/javascript';

			if(document.getElementsByTagName('head').length > 0){
				document.getElementsByTagName('head')[0].appendChild(loadStrings);
			}
			
			// update global language setting
			this.language = lang;
				
			// change images
			//for (var file in localize.files) { 
				//localize.files[file] = (function() {
					//var image = new Image();
					//image.name = localize.files[file].name; 
					//image.src = localize.file(image.name);
					//image.onerror = function () {
					  //this.src = image.name; // default image in root
					//};
					//return image; 
				//})();
			//}
			ig.game._firstTime = true;
		},
		
		file:function(f){
			
			// get file
			var file = localize.language+"/" + f;
			return file;
		}
	});
	
	// instance of localize
	localize = new CLocalize();
	ig.global.localize = localize;
	
	ig.Font.inject({
		
		mFontNames: [
			"sans-serif", // 0
			"Arial", // 1
			"Georgia", // 2
			"Trebuchet MS", // 3
			"Verdana", // 4
			"Courier" // 5
			
		],
		
		mSize:24,
		mFont:3,
		mColor:"#fff",
		mBold:" ",
		mDrawMode:1,
		mTextWidth:9999,
		mTextHeight:15,
		mAlign:"left",
		mStroked:false,
		mStrokeColor:"#FF0000",
		mStrokeLine:1,
		ct:0,
		
		init: function(path, size, textWidth, textHeight, color, align, font, bold, stroked, strokeColor, strokeLine) {
			//log("flag a path " + path);
			if (path != "" && path != undefined) {
				//log("flag a22");
				this.parent(path);
				this.mDrawMode = 0;
			}
			
			//log("flag b");
			this.mSize = typeof size !== "undefined" ? size : this.mSize; 
			this.mAlign = typeof align !== "undefined" ? align : this.mAlign; 
			this.mColor = typeof color !== "undefined" ? color : this.mColor; 
			this.mTextWidth = typeof textWidth !== "undefined" ? textWidth : this.mTextWidth; 
			this.mTextHeight = typeof textHeight !== "undefined" ? textHeight : this.mTextHeight; 
			this.mFont = this.mFontNames[typeof font !== "undefined" ? font : this.mFont]; 
			this.mBold = (typeof bold !== "undefined" ? bold : false) ? "bold " : "";

			this.mStroked = typeof stroked !== "undefined" ? stroked : false;
			this.mStrokeColor = typeof strokeColor !== "undefined" ? strokeColor : "#FF0000";
			this.mStrokeLine = typeof strokeLine !== "undefined" ? strokeLine : 1;
			
			//log("font : " + this.mFont);
		},
		
		draw: function( text, x, y, align ) {
			
			//if (this.ct <= 10)
				//log(text + " - align : " + align + " - x : " + x + ", y : " + y);
			this.ct++;
			if (this.mDrawMode == 0) {
				this.parent(text, x, y, align);
			} else {
				//log("aa : " + localize.language);
				if( typeof(text) != 'string' ) {
					text = text.toString();
				}
				
				var ctx = ig.system.context;
				ctx.fillStyle = this.mColor;

				if (this.mStroked) {
					ctx.lineWidth = this.mStrokeLine;
					ctx.strokeStyle = this.mStrokeColor;
					// ctx.shadowOffsetX = 0;
					// ctx.shadowOffsetY = 0;
					// ctx.shadowBlur = 0;
					// ctx.shadowColor = "rgba(0,0,0,1)";
				}

				ctx.font = this.mBold + this.mSize + "px " + this.mFont;
				
				
				if (align == 'undefined')
					align = this.mAlign;
					
				if (align == undefined) {
					ctx.textAlign = 'left';
				} else {
				
					if (align == ig.Font.ALIGN.CENTER ) {
						ctx.textAlign = 'center';
					} else if (align == ig.Font.ALIGN.RIGHT ) {
						ctx.textAlign = 'right';
					} else if (align == ig.Font.ALIGN.LEFT ) {
						ctx.textAlign = 'left';
					}
				}
					
				if (this.mTextWidth >= 9999) {
					ctx.fillText(localize.string(text), x, y);
					if (this.mStroked)
						ctx.strokeText(localize.string(text), x, y);
				}
				else
					wrap2(ctx, localize.string(text), x, y, this.mTextHeight, this.mTextWidth, this.mStroked);
				
				ig.Image.drawCount += text.length;
			}
		},
	});

});

