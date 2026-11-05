ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	'game.MainMenuWin',
	"game.entities.objek",
	'game.GameWin',
	"game.Game2",
	"game.Game3",
	"game.FinalWin",
	"game.NameWin",
	'plugins.myfont',
	'plugins.branding',
	'plugins.mysound',
	'plugins.preloader',
	'plugins.myentity',
	'plugins.mytogglebutton',
	'plugins.myinput',
	//"impact.debug.debug",

	'plugins.empika.game_utilities',
	'plugins.empika.entity_utilities'
)

.defines(function(){

	ig.global.ORI_WIDTH = 1024;
	ig.global.ORI_HEIGHT = 680;
	
	ig.global.CUR_WIDTH = 1024;
	ig.global.CUR_HEIGHT = 680;

	ig.global.sound_game = 1;

	ig.global.name1="",
	ig.global.name2="",
	ig.global.score=0
	ig.global.BGM = new MySound( 'media/sound/happy-stroll_(geoff_harvey).mp3', 1, 22, 0);
	ig.global.SOUND = false;
	//ig.global.BGM.play();

	//ig.global.firstTime=true,

	ig.global.refocus=function()
	{
		if (ig.game && ig.game.drawFlag!=null)
		 {
		 	
		 	ig.game.drawFlag=false
		 }	
	}

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
ig.main( '#canvas', MainMenuWin, 60, 1024, 768, 1, Preloader );

});
