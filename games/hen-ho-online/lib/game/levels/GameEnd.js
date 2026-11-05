ig.module( 
	'game.levels.GameEnd' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.input',
	'plugins.button'
	
)

.defines(function(){


		GameEndWin = ig.Game.extend({
		
		// Load a font
		font: new ig.Font( '', 48, null, null, '#FFF','center', 2, true),		
		font_pink: new ig.Font( '', 24, null, null, '#C13','center', 2, true),
		font_biru: new ig.Font( '', 24, null, null, '#158','center', 2, true),
		font_hijau: new ig.Font( '', 24, null, null, '#470','center', 2, true),
		font_putih: new ig.Font( '', 10, null, null, '#FFF','center', 2, true),	

		x: 50,
		y: 50,
		init: function() {
			
			ig.resources = [];
			ig.ready = false;

			dummyImages=[
				new ig.Image("media/bggameend_1.png"),
				new ig.Image("media/bggameend_2.png"),
				new ig.Image("media/bggameend_3.png"),
				new ig.Image("media/bggameend_4.png"),
				new ig.Image("media/btnplayagain.png"),
				new ig.Image("media/btnmainmenu.png"),
				new ig.Image("media/btnmoregame.png"),
				new ig.Image("media/credits/ggg_new.png"), 
			];
			// activate the mouse input
	  		ig.input.initMouse();
	  		ig.input.bind( ig.KEY.MOUSE1, 'click');	

	  		ig.ready = true;
			this.loader = new IntermediateLoader( null, ig.resources );
			this.loader.load();
			

	  		ig.game.bg = ig.game.spawnEntity( 
			ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(1), y:ig.getY(1)},
				zIndex: 6,
				init: function( x, y, settings ) {
	    			this.animSheet =  new ig.AnimationSheet( 'media/bggameend_1.png', ig.getX(702), ig.getY(531));
	    			this.addAnim( 'cowo_1', 1, [0] );
	    			this.animSheet =  new ig.AnimationSheet( 'media/bggameend_2.png', ig.getX(702), ig.getY(531));
	    			this.addAnim( 'cowo_2', 1, [0] );
	    			this.animSheet =  new ig.AnimationSheet( 'media/bggameend_3.png', ig.getX(702), ig.getY(531));
	    			this.addAnim( 'cowo_3', 1, [0] );
	    			this.animSheet =  new ig.AnimationSheet( 'media/bggameend_4.png', ig.getX(702), ig.getY(531));
	    			this.addAnim( 'cowo_4', 1, [0] );
	    			this.parent( x, y, settings );
	    			this.currentAnim = this.anims.cowo_4;
				}
			}), ig.getX(0), ig.getY(0));

			btnLogo = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(115), y:ig.getY(71)},
				zIndex: 255,
				animSheet: new ig.AnimationSheet( 'media/credits/ggg_new.png', ig.getX(115), ig.getY(71)),

				init: function( x, y, settings ) {
	    			this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function(){
					ig.global.openLink("http://www.girlsgogames.com");
				}
			}), ig.getX(580), ig.getY(0));


			btnPlayAgain = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(212), y:ig.getY(50)},
				zIndex: 7,
				animSheet: new ig.AnimationSheet( 'media/btnplayagain.png', ig.getX(212), ig.getY(50)),

				init: function( x, y, settings ) {
	    			this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function(){
					ig.global.LevelSekarang = 1;
					ig.system.setGame(LevelWin);
				}
			}), ig.getX(40), ig.getY(325));	

		/*	btnMoreGame = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(212), y:ig.getY(50)},
				zIndex: 7,
				animSheet: new ig.AnimationSheet( 'media/btnmoregame.png', ig.getX(212), ig.getY(50)),

				init: function( x, y, settings ) {
	    			this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function(){
					ig.global.openLink('http://www.girlsgogames.com/');
				}
			}), ig.getX(40), ig.getY(385));	*/
			
			btnMainMenu = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(212), y:ig.getY(50)},
				zIndex: 7,
				animSheet: new ig.AnimationSheet( 'media/btnmainmenu.png', ig.getX(212), ig.getY(50)),

				init: function( x, y, settings ) {
	    			this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function(){
					ig.global.LevelTerakhir = 1;
					ig.global.Upgrade_1 = false;
					ig.global.Upgrade_2 = false;
					ig.global.Upgrade_3 = false;
					ig.global.Upgrade_4 = false;
					ig.global.Upgrade_5 = false;
					ig.global.Upgrade_6 = false;
					ig.global.Upgrade_7 = false;
					ig.global.Upgrade_8 = false;
					ig.system.setGame(MainMenuWin);
				}
				
			}), ig.getX(40), ig.getY(445));	

			ig.game.CalculateHasil();
			this.sortEntitiesDeferred();
		},

		CalculateHasil:function()
		{
			ig.global.ScoreAkhir = ig.global.ScoreLevel_1 + ig.global.ScoreLevel_2 + ig.global.ScoreLevel_3;
			if (ig.global.ScoreAkhir > 8)
			{
				switch (ig.global.JenisCowo)
				{
					case 1 : ig.game.bg.currentAnim = ig.game.bg.anims.cowo_1;	break;
					case 2 : ig.game.bg.currentAnim = ig.game.bg.anims.cowo_2;	break;
					case 3 : ig.game.bg.currentAnim = ig.game.bg.anims.cowo_3;	break;
				}
			}
			else
				ig.game.bg.currentAnim = ig.game.bg.anims.cowo_4;

		},
		
		update: function() {
			this.parent();
			btnPlayAgain.fireMouseDown();
			btnMainMenu.fireMouseDown();
		//	btnMoreGame.fireMouseDown();
			btnLogo.fireMouseDown();
		},
		
		draw: function() {
			if (this.loader==null)
			{
				this.parent();
			}
		}

	});

	

	
});
