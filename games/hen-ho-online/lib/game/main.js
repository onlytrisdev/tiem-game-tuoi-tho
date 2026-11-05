ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.input',
	//'impact.debug.debug',
	'plugins.button',
	'plugins.button2state',
	'plugins.myinput',
	'plugins.myfont',
	'plugins.preloader',
	'plugins.mysound',
	'game.levels.MainMenu' ,
	'game.levels.Level' ,
	'game.levels.GameEnd',
	'game.levels.SelectCharacter',
	'game.levels.NextLevel',
	'game.levels.credits',
	'plugins.empika.game_utilities',
	'plugins.empika.entity_utilities',
	'plugins.splash',
	'plugins.ggglogo',
	'game.entities.interactiveObject'
)

.defines(function(){
	//document.getElementById("result").innerHTML = Math.floor(ig.input.mouse.x) + ':' + Math.floor(ig.input.mouse.y);
	//ig.global.sound = new MySound("media/Bgm.mp3",1,19,0);
	//ig.global.SOUND = true;
	//ig.global.sound.play();

	ig.global.MySound = new MySound('media/bgm.mp3',1,80,0);
	//ig.global.MySound = new MySound('media/star_dust.mp3',1,60,0);
	ig.global.SOUND = true;
	//ig.global.MySound.play();

	ig.global.ORI_WIDTH = 700;
	ig.global.ORI_HEIGHT = 525;
	
	ig.global.CUR_WIDTH = 700;
	ig.global.CUR_HEIGHT = 525;

	ig.global.score = 1;
	ig.global.SudahInit = false;
	ig.global.CounterInit=0;

	ig.global.LevelTerakhir = 1;
	
	ig.global.Upgrade_1 = false;
	ig.global.Upgrade_2 = false;
	ig.global.Upgrade_3 = false;
	ig.global.Upgrade_4 = false;
	ig.global.Upgrade_5 = false;
	ig.global.Upgrade_6 = false;
	ig.global.Upgrade_7 = false;

	ig.global.LevelSekarang = 0;
	ig.global.ScoreLevel_1 = 0;
	ig.global.ScoreLevel_2 = 0;
	ig.global.ScoreLevel_3 = 0;
	ig.global.ScoreAkhir = 0;
	ig.global.JenisCowo = 0;

	ig.global.refocus = function()
	{
		if (ig.game && ig.game.drawFlag!=null)
		{
			ig.game.drawFlag = false;
		}
	};

	ig.global.openLink = function(href) { 
		 if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i))
            {
                var link = document.createElement('a');
                link.setAttribute('href', href);
                link.setAttribute('target','_blank');
                var clickevent = document.createEvent('Event');
                clickevent.initEvent('click', true, false);
                link.dispatchEvent(clickevent);
                return false;
            }
            else {
                window.open('http://localhost','_blank');
            }
	};

	ig.main( '#canvas', SplashWin, 20, ig.getX(700), ig.getY(525), 1, Preloader);

});
