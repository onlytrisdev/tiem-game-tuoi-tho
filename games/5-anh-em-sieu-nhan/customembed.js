/**
 * ...
 * @author me
 */
(

function() {
	
	var limeloaded = function(){
		if (window.navigator.userAgent.indexOf('iPad') != -1)
			lime.embed ( "embedtarget", 0, 0, "000000" );
		else
			lime.embed ( "embedtarget", 960, 560, "000000" );
	}
	
	var newStyle = document.createElement('style');
	
	var isCocoonJS = window.navigator.isCocoonJS;
	
	if ( !isCocoonJS ) {
		newStyle.innerHTML = "\
			html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
			#embedtarget { background: #000000; width: 100%; height: 100%; }\
			\
			@font-face {\
				font-family: 'Aarcover Regular';\
				src: url('"+jsembed.baseUrl()+"assets/font_en/aarcover-regular.eot');\
				src: url('"+jsembed.baseUrl()+"assets/font_en/aarcover-regular.eot?#iefix') format('embedded-opentype'),\
				url('"+jsembed.baseUrl()+"assets/font_en/aarcover-regular.svg#my-font-family') format('svg'),\
				url('"+jsembed.baseUrl()+"assets/font_en/aarcover-regular.woff') format('woff'),\
				url('"+jsembed.baseUrl()+"assets/font_en/aarcover-regular.ttf') format('truetype');\
				font-weight: normal;\
				font-style: normal;\
			}\
			@font-face {\
				font-family: 'Orbitron Bold';\
				src: url('"+jsembed.baseUrl()+"assets/font_en/orbitron-bold.eot');\
				src: url('"+jsembed.baseUrl()+"assets/font_en/orbitron-bold.eot?#iefix') format('embedded-opentype'),\
				url('"+jsembed.baseUrl()+"assets/font_en/orbitron-bold.svg#my-font-family') format('svg'),\
				url('"+jsembed.baseUrl()+"assets/font_en/orbitron-bold.woff') format('woff'),\
				url('"+jsembed.baseUrl()+"assets/font_en/orbitron-bold.ttf') format('truetype');\
				font-weight: normal;\
				font-style: normal;\
			}\
			";
	}
	else {
		newStyle.innerHTML = "\
			html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
			#embedtarget { background: #000000; width: 100%; height: 100%; }\
			\
			@font-face {\
				font-family: 'Aarcover Regular';\
				src: url('"+jsembed.baseUrl()+"assets/font_en/aarcover-regular.ttf');\
				font-weight: normal;\
				font-style: normal;\
			}\
			@font-face {\
				font-family: 'Orbitron Bold';\
				src: url('"+jsembed.baseUrl()+"assets/font_en/orbitron-bold.ttf');\
				font-weight: normal;\
				font-style: normal;\
			}\
			";
	}
	
	document.head.appendChild(newStyle);
	
	var newScript = document.createElement("SCRIPT"); 
	
	newScript.innerHTML = "\
		\
		function launchIntoFullscreen() {\
			\
			if(document.documentElement.requestFullscreen) {\
				document.documentElement.requestFullscreen();\
			} else if(document.documentElement.mozRequestFullScreen) {\
				document.documentElement.mozRequestFullScreen();\
			} else if(document.documentElement.webkitRequestFullscreen) {\
				document.documentElement.webkitRequestFullscreen();\
			} else if(document.documentElement.msRequestFullscreen) {\
				document.documentElement.msRequestFullscreen();\
			}\
		}\
		\
		function isIOS_7 () {\
			var device = false;\
			var osVer = false;\
			if (navigator.userAgent.indexOf('iPod') != -1\
			|| navigator.userAgent.indexOf('iPhone') != -1\
			|| navigator.userAgent.indexOf('iPad') != -1)\
			device = true;\
			\
			var regex = /OS 7_\d+/;\
			if ( regex.test(navigator.userAgent)) {\
				osVer = true;\
			}\
			\
			if (device && osVer) return true;\
			\
			return false;\
		}\
		<!-- Launch to full screen on touch start -->\
		window.addEventListener ('touchstart', function (event) { \
			launchIntoFullscreen();\
			window.focus();\
		}, false);\
		<!-- Normal script-->\
		window.addEventListener ('touchmove', function (e) { e.preventDefault (); }, false);\
		if (typeof window.devicePixelRatio != 'undefined' && window.devicePixelRatio > 2) {\
			var meta = document.getElementById ('viewport');\
			meta.setAttribute ('content', 'minimal-ui, width=device-width, initial-scale=' + (2 / window.devicePixelRatio) + ', user-scalable=no');\
		}\
		<!-- Disable arrow keys from moving browser window-->\
		<!-- Disable default of backspace and delete functions-->\
		window.addEventListener('keydown', function(e) {\
			<!-- arrow keys, backspace, delete-->\
			if([37, 38, 39, 40, 8, 46 ].indexOf(e.keyCode) > -1) { e.preventDefault(); }\
		}, false);\
		<!-- On Resize-->\
		window.onresize =  function () {\
			<!-- If not ios7-->\
			if( !isIOS_7() ){\
				var a = document.getElementById('embedtarget');\
				a.style.height = window.innerHeight + 'px';\
				a.style.width = window.innerWidth + 'px';\
				scrollTo(0,0);\
			}\
		};\
		window.onorientationchange = function (){ scrollTo(0,0); }\
		\
		<!-- Prevent console.log crashes in IE! -->\
		if (!window.console || !window.console.log) console = {log: function() {}, error: function() {}};\
	";
	
	document.head.appendChild(newScript);
	
	var soundjs = document.createElement("SCRIPT"); 
	soundjs.src = jsembed.baseUrl() +"lib/soundjs.min.js";
	document.head.appendChild(soundjs);
	
	var gamejs = document.createElement("SCRIPT"); 
	gamejs.src = jsembed.baseUrl() +"game.js";
	document.head.appendChild(gamejs);
	
	gamejs.onload = limeloaded;
}


)();