// Make sure you have something like this in your CSS files
// canvas {
//     width: 100%;
//     height: 100%;
// }

// The only things you have to change:
// width
// height
// orientation angle when the game can't be played
var canvasX = 0;
var ratioX;
var ratioY;
var canvasY = 0;

var scaleGame = function (exports){
    var width = 960;
    var height = 640;
    exports.scaleX = window.innerWidth / width;
    exports.scaleY = window.innerHeight / height;
    var cacheInnerHeight = window.innerHeight;
    var canvases = [].slice.call(document.getElementsByTagName('canvas'));
    var iOS = ( navigator.userAgent.match(/(iPhone|iPod)/i) ? true : false );
    
    var rotationImg = document.getElementById('rotate');
    var lastHeight = window.innerHeight;
	var lastWidth = window.innerWidth;
    var deviceOrientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';

    var resize = function (){
        exports.scaleX = window.innerWidth / width;
        exports.scaleY = window.innerHeight / height;
        if(iOS){
            setTimeout( function(){ window.scrollTo(0, 1);}, 50 );
            if(window.scrollY >= 1){
                canvases.forEach(function (canvas){
                    canvas.style.height = (window.innerHeight + 1) + 'px';
                });
                rotationImg.style.height = window.innerHeight + 1 + 'px';
            }
            else {
                canvases.forEach(function (canvas){
                    canvas.style.height = window.innerHeight + 61 + 'px';
                });
                rotationImg.style.height = window.innerHeight + 61 + 'px';
            }
            setTimeout(function (){
                checkIfFullscreen(window.innerHeight);
            }, 100);
        }
		
		canvases.forEach(function (canvas){
			//added by tom
			var ch = window.innerHeight;
			var cw = window.innerWidth;
			
									
			if (ch * 1.5 > cw) {
				//the canvas would be too long in width
				var ratio = cw / (ch * 1.5);
				ch *= ratio;
			} else {
				//it is to broad (width)
				var ratio = ch / (cw * 0.6666);
				cw *= ratio;
			}
			canvas.style.width = cw +"px";
			canvas.style.height = ch +"px";
			
			ratioX = cw / window.innerWidth;
			ratioY = ch / window.innerHeight;
			
			canvasX = (window.innerWidth - cw) * 0.5;
			canvasY = (window.innerHeight - ch) * 0.5;
			
			//end added by tom
		});
    };

    var checkIfFullscreen = function (height){
        // alert(height + ', ' + outerHeight + ', ' + scrollY);
        if(window.outerHeight - height <= 65){
            setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
            canvases.forEach(function (canvas){
                canvas.style.height = (window.innerHeight + 1) + 'px';
            });
            rotationImg.style.height = window.innerHeight + 1 + 'px';
        }
    };

    var orientationCall = function (firstCall){
		
        deviceOrientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
        if(deviceOrientation === 'portrait' && isMobile()){ // Change these to the orientations you want to disallow
            rotationImg.style.display = 'block';
            rotationImg.style.height = window.innerHeight + 'px';
            exports.paused = true;
        }
        else {
            rotationImg.style.display = 'none';
            exports.paused = false;
            if(!firstCall && exports.loaded === true){
                exports.draw();
                exports.logic();
            }
        }
    };
    orientationCall(true);
    window.addEventListener('orientationchange', function (){
        setTimeout(orientationCall, 250);
    }, false);
    
    if(iOS){
        canvases.forEach(function (canvas){
            canvas.style.height = (window.innerHeight + 61) + 'px';
        });
        exports.scaleY = (window.innerHeight + 61) / height;
        rotationImg.style.height = (window.innerHeight + 61) + 'px';
    }
    setTimeout(function (){
        window.scrollTo(0, 1);
        if(iOS && cacheInnerHeight >= window.innerHeight){
            canvases.forEach(function (canvas){
                canvas.style.height = window.innerHeight + 'px';
            });
            rotationImg.style.height = (window.innerHeight + 1) + 'px';
        }
    }, 50);

    SG_Hooks.setOrientationHandler(orientationCall);
    SG_Hooks.setResizeHandler(resize);
    resize();
    window.addEventListener('resize', function (){
        if(lastHeight !== window.innerHeight || lastWidth !== window.innerWidth){
            resize();
            lastHeight = window.innerHeight;
			lastWidth = window.innerWidth;
        }
    }, false);

    document.body.addEventListener('touchmove', function (e){
        e.preventDefault();
    }, false);
    document.body.addEventListener('touchstart', function (){
        setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
    }, false);
};

function isMobile() {
	if (navigator.appName == "Microsoft Internet Explorer") return true;
	var ori = window.orientation;
	return (ori == null || ori == undefined) ? false : true;
}
