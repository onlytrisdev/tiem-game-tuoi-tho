ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	//'impact.debug.debug',
	'game.gamecredit',
	'game.gameend',
	'game.gameplay1',
	'game.gameplay2',
	'game.gameplay3',
	'game.gameplay4',
	'game.mainmenuwin',
	'plugins.myfont',
	'plugins.branding',
	'plugins.mysound',
	'plugins.preloader',
	'plugins.myentity',
	'plugins.mytogglebutton',
	'plugins.myinput',
	'plugins.splash',
	'plugins.ggglogo',
	'plugins.gggmore',
	'plugins.scale'
	//'plugins.perpixel',
	//'plugins.empika.game_utilities',
	//'plugins.empika.entity_utilities'
)

.defines(function(){
	ig.global.ORI_WIDTH = 700;
	ig.global.ORI_HEIGHT = 525;
	
	ig.global.CUR_WIDTH = 700;
	ig.global.CUR_HEIGHT = 525;

	ig.global.sound_game = 1;
	ig.global.BGM = new MySound( 'media/sound/bgm.mp3', 1, 22, 0);
	ig.global.status_sound= 1;
	ig.global.SOUND= 0;
	ig.global.iOSVersion= function() {
		if (
		 navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		) {
			var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
				version = [
					parseInt(match[1], 10),
					parseInt(match[2], 10),
					parseInt(match[3] || 0, 10)
				];			 
			return parseFloat(version.join('.'));
		}
	};

	ig.global.openLink = function(href) { 
		var isIos = false;
		var iOSVersion = -1;
		if( navigator.userAgent.match(/iPhone/i)
			|| navigator.userAgent.match(/iPad/i)
			|| navigator.userAgent.match(/iPod/i))
		{
			isIos = true;
			iOSVersion = ig.global.iOSVersion();
		}

		if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| (isIos && iOSVersion < 7))
		{
			var link = document.createElement('a');
			link.setAttribute('href', href);
			link.setAttribute('target','_blank');
			var clickevent = document.createEvent('Event');
			clickevent.initEvent('click', true, false);
			link.dispatchEvent(clickevent);
			return false;
		}
		else {window.open(href,'_blank');}
	};

	//Variabel
	ig.global.drawFlag= true;
	ig.global.drawCtr= 30;

	ig.global.stickers=[];
	ig.global.posisiX=[];
	ig.global.posisiY=[];
	//
	MyGame = ig.Game.extend({
		// Load a font
		font: new ig.Font( 'media/04b03.font.png' ),
		init: function() {},
		
		update: function() {this.parent();},
		
		draw: function() {
			// Draw all entities and backgroundMaps
			this.parent();
		}
	});

	// Start the Game with 60fps, a resolution of 320x240, scaled
	// up by a factor of 2
	ig.main( '#canvas', SplashWin, 60, 700, 525, 1, Preloader );
});
