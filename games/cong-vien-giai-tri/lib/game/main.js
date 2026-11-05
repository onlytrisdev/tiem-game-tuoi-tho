ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	'game.MainMenuWin',
	"game.entities.objek",
	"game.entities.objek2",
	"game.entities.objek3",
	"game.entities.tiles",
	'game.EndingWin',
	'game.GameWin',
	'game.GameWin2',
	'game.GameWin3',
	'game.GameWin4',
	'game.GameWin5',
	'game.GameWin6',
	'game.GameWin7',
	'game.GameWin8',
	'game.DecorWin',
	'plugins.myfont',
	'plugins.branding',
	'plugins.mysound',
	'plugins.preloader',
	'plugins.myentity',
	'plugins.splash',
	'plugins.mytogglebutton',
	//"impact.debug.debug",
	'plugins.myinput',

	'plugins.empika.game_utilities',
	'plugins.empika.entity_utilities'
)

.defines(function(){

	ig.global.ORI_WIDTH = 1024;
	ig.global.ORI_HEIGHT = 680;
	
	ig.global.CUR_WIDTH = 1024;
	ig.global.CUR_HEIGHT = 680;

	ig.global.sound_game = 1;
	ig.global.BGM = new MySound( 'media/sound/moment-of-happiness-ag-music.mp3', 1, 22, 0);
	ig.global.SOUND = true;
	//ig.global.BGM.play();

	ig.global.level=1;
	ig.global.money=0;

	//jenis stand
	ig.global.eskrim=false;
	ig.global.ramal=true;
	ig.global.hotdog=false;
	ig.global.balon=false;

	///jenis tiles
	ig.global.tiletype=1;
	ig.global.grasstype=1;

	// jumlah stand
	ig.global.stand12qty=1;
	ig.global.stand11qty=0;
	ig.global.stand21qty=0;
	ig.global.stand22qty=0;

	//quests!!!
	ig.global.quest1=[false,false];
	ig.global.quest2=[false,false];
	ig.global.quest3=[false,false];
	ig.global.quest4=[false,false];
	ig.global.quest5=[false,false];
	ig.global.quest6=[false,false];

	ig.global.decorBought=0,
	ig.global.noPeopleMad=true,
	ig.global.repairCount=0,

	//harga decor
	ig.global.stand11=2000;
	ig.global.stand12=1500;
	ig.global.stand21=3000;
	ig.global.stand22=3000;
	ig.global.decor11=200;
	ig.global.decor12=400;
	ig.global.decor13=500;
	ig.global.decor21=200;
	ig.global.decor22=400;
	ig.global.decor23=500;
	ig.global.decor31=200;
	ig.global.decor32=400;
	ig.global.decor33=500;
	/*ig.global.decor41=100;
	ig.global.decor42=200;
	ig.global.decor43=300;*/
	ig.global.others11=1000;
	ig.global.others12=2000;
	ig.global.others13=3000;
	ig.global.others21=1000;
	ig.global.others22=2000;
	ig.global.others23=3000;

	ig.global.objectArr=[];

	MyGame = ig.Game.extend({
		
		// Load a font
		font: new ig.Font( 'media/04b03.font.png' ),

		///img: new ig.Image( 'player.png' ),

		keple:5,
		gx:10,
		gy:10,

		namaFungsi:function(tx, ty) {
			//this.nama = "";

			// if (typeof tx != "undefined") {
			// 	this.gx = tx;
			// } else {
			// 	this.gx = this.gx;
			// }

			// this.gx = typeof tx != "undefined" ? tx : this.gx;
			// this.gx = tx;
			// this.gx = this.gx;
			//this.gy = ty;
		},
/*

		entut: function(x, y) {
			//var namaVarLokal = ;
			//for (var i = 0; i <= ) {

			//}
		},*/

		init: function() {
			// Initialize your game here; bind keys etc.
			//this.arrayku = [this.nama, 50, "adasda"];
			// var s = "a";
			// s = s + "bc"; // "abc"
			// console.log("");
			//this.img.draw(10, 10);
			// anims = [];
			  this.addAnim( 'idle', 0.1, [0,1,2] ); // anims = [idle];
        	this.addAnim( 'jump', 0.1, [3,4,5] ); // anims = [idle, jump];
		},
		
		update: function() {
			// Update all entities and backgroundMaps
			this.parent();

			// Add your own, additional update code here
		},
		
		draw: function() {
			// Draw all entities and backgroundMaps
			this.parent();
			
			// Add your own drawing code here
			var x = ig.system.width/2,
				y = ig.system.height/2;a
			
			this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
			this.entut();
			font = null;
		},
	});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', SplashWin, 60, 700, 525, 1, Preloader );

});
