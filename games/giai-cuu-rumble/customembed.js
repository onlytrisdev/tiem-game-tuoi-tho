/**
 * ...
 * @author me
 */

(

function() {
	

	var limeloaded = function(){
		
		lime.embed ("embedtarget", 960, 560, "000000");
	};
	
	var newStyle = document.createElement('style');
	
		/*html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
		#embedtarget { background: #000000; width: 100%; height: 100%; }\*/
		
		/*html,body { margin: 0; padding: 0; width: 960px; height: 560px;  overflow: hidden; }\*/
		
		/*html,body { left:50%; top:50%; transform:translate(-50%,-50%); -webkit-transform:translate(-50%,-50%); position:absolute;  width: 960px; height: 560px;  overflow: hidden; }\
		#embedtarget { background: #000000; width: 960px; height: 560px; }\*/
		
		
		/* LATEST -html,body { left:50%; top:50%; transform:translate(-50%,-50%); -webkit-transform:translate(-50%,-50%); position:absolute;  width: 960px; height: 560px;  overflow: hidden; }\
		#embedtarget { background: #000000; width: 960px; height: 560px; }\*/
		
	if(window.navigator.isCocoonJS){
		//alert("isCocoonJS");
		newStyle.innerHTML = "\
			html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
			#embedtarget{ background: #000000; width: 100%; height: 100%; }\
			@font-face {\
				font-family: 'Helsinki';\
				src: url('"+jsembed.baseUrl() +"media/fonts/helsinki.ttf');\
				font-weight: normal;\
				font-style: normal;\
			}\
			@font-face {\
				font-family: 'Troika Regular';\
				src: url('"+jsembed.baseUrl() +"media/fonts/troika-webfont.ttf');\
				font-weight: normal;\
				font-style: normal;\
			}\
		";
	}else{
		//alert("NOT CocoonJS");
		/*window.addEventListener ("touchmove", function (event) { event.preventDefault (); }, false);
		if (typeof window.devicePixelRatio != 'undefined' && window.devicePixelRatio > 2) {
			var meta = document.getElementById ("viewport");
			meta.setAttribute ('content', 'width=device-width, initial-scale=' + (2 / window.devicePixelRatio) + ', user-scalable=no');
		}*/
		
			/*html,body { left:50%; top:50%; transform:translate(-50%,-50%); -webkit-transform:translate(-50%,-50%); position:absolute;  width: 960px; height: 560px;  overflow: hidden; }\
			#embedtarget { background: #000000; width: 960px; height: 560px; }\*/
			/*html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
			#embedtarget{ background: #000000; width: 100%; height: 100%; }\*/
		newStyle.innerHTML = "\
			html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
			#embedtarget{ background: #000000; width: 100%; height: 100%; }\
			@font-face {\
				font-family: 'Helsinki Regular';\
				src: url('"+jsembed.baseUrl() +"media/fonts/helsinki.eot');\
				src: url('"+jsembed.baseUrl() +"media/fonts/helsinki.eot?#iefix') format('embedded-opentype'),\
				url('"+jsembed.baseUrl() +"media/fonts/helsinki.svg#my-font-family') format('svg'),\
				url('"+jsembed.baseUrl() +"media/fonts/helsinki.woff') format('woff'),\
				url('"+jsembed.baseUrl() +"media/fonts/helsinki.ttf') format('truetype');\
				font-weight: normal;\
				font-style: normal;\
			}\
			@font-face {\
				font-family: 'Troika Regular';\
				src: url('"+jsembed.baseUrl() +"media/fonts/troika-webfont.eot');\
				src: url('"+jsembed.baseUrl() +"media/fonts/troika-webfont.eot?#iefix') format('embedded-opentype'),\
				url('"+jsembed.baseUrl() +"media/fonts/troika-webfont.svg#my-font-family') format('svg'),\
				url('"+jsembed.baseUrl() +"media/fonts/troika-webfont.woff') format('woff'),\
				url('"+jsembed.baseUrl() +"media/fonts/troika-webfont.ttf') format('truetype');\
				font-weight: normal;\
				font-style: normal;\
			}\
		";
		
		var newspan1 = document.createElement('span');
		newspan1.setAttribute('style', 'font-family:Helsinki');
		
		var newspan2 = document.createElement('span');
		newspan2.setAttribute('style', 'font-family:Troika');
		
		//var ebt = document.getElementById('embedtarget');
		var ebt = document.body;
		ebt.appendChild(newspan1);
		ebt.appendChild(newspan2);
	}
	
	document.head.appendChild(newStyle);
	
	var soundjs = document.createElement("SCRIPT"); 
	soundjs.src = jsembed.baseUrl() +"lib/soundjs.min.js";
	
	document.head.appendChild(soundjs);
	
	var gamejs = document.createElement("SCRIPT"); 
	gamejs.src = jsembed.baseUrl() +"game.js";
	
	document.head.appendChild(gamejs);
	
	//var newStyle2 = document.createElement('SCRIPT');
	//newStyle2.innerHTML = "\
	//<!-- Disable arrow keys from moving browser window-->\
	//<!-- Disable default of backspace and delete functions-->\
	//window.addEventListener('keydown', function(e) {\
	//<!-- arrow keys, backspace, alt ,delete-->\
	//if([37, 38, 39, 40, 8, 46 ].indexOf(e.keyCode) > -1) { e.preventDefault(); }\
	//}, false);\
	//";
	//document.head.appendChild(newStyle2);
	
		function launchIntoFullscreen () {
		
		if ( document.documentElement.requestFullscreen ) document.documentElement.requestFullscreen();
		else if ( document.documentElement.mozRequestFullScreen ) document.documentElement.mozRequestFullScreen();
		else if ( document.documentElement.webkitRequestFullscreen ) document.documentElement.webkitRequestFullscreen();
		else if ( document.documentElement.msRequestFullscreen ) document.documentElement.msRequestFullscreen();
	}
	
	function isIOS_7 () {
		
		var device = false;
		var osVer = false;
		if (navigator.userAgent.indexOf('iPod') != -1
		|| navigator.userAgent.indexOf('iPhone') != -1
		|| navigator.userAgent.indexOf('iPad') != -1)
		device = true;
		
		var regex = /OS 7_\d+/;
		if ( regex.test(navigator.userAgent)) {
			osVer = true;
		}
		
		if (device && osVer) return true;
		
		return false;
	}
	
	// Launch to full screen on touch start
	window.addEventListener ( 'touchstart', function ( e ) { 
		
		// Call fullscreen method
		launchIntoFullscreen();
		
		// Focus window
		window.focus();
		
	}, false );
	
	// Normal script (OpenFL)
	window.addEventListener ( 'touchmove', function ( e ) { e.preventDefault (); }, false );
	
	if ( typeof window.devicePixelRatio != 'undefined' && window.devicePixelRatio > 2 ) {
		var meta = document.getElementById( 'viewport' );
		if ( meta != null ) meta.setAttribute( 'content', 'minimal-ui, width=device-width, initial-scale=' + ( 2 / window.devicePixelRatio) + ', user-scalable=no' );
	}
	
	// Disable arrow keys from moving browser window
	// And disable default of backspace and delete functions
	window.addEventListener( 'keydown', function( e ) {
		
		// arrow keys, backspace, delete
		if( [ 37, 38, 39, 40, 8, 46 ].indexOf( e.keyCode ) > -1 ) { e.preventDefault(); }
		
	}, false );
	
	// On resize
	window.onresize =  function () {
		
		// If not ios7
		if( !isIOS_7() ){
			
			var a = document.getElementById( 'embedtarget' );
			a.style.height = window.innerHeight + 'px';
			a.style.width = window.innerWidth + 'px';
			scrollTo( 0,0 );
		}
	};
	
	// On orientation change
	window.onorientationchange = function () { scrollTo( 0, 0 ); }
	
	// Prevent console.log crashes in IE
	if ( !window.console || !window.console.log ) console = { log: function() {}, error: function() {} };
	
	
	
	
	gamejs.onload = limeloaded;
	

}

)();