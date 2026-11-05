ig.module( 
	'game.levels.NextLevel' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.input',
	'plugins.button'
	
)

.defines(function(){

	NextLevelWin = ig.Game.extend({
		
		// Load a font
		font: new ig.Font( '', 24, null, null, '#FFF','center', 2, true),
		
		x: 50,
		y: 50,
		textrespon : '',
		init: function() {
			
			ig.resources = [];
			ig.ready = false;

			dummyImages=[
				new ig.Image("media/bgnextlevel.png"),
				new ig.Image("media/btnnextlevel.png"),
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
	  		
			
	  		bg = ig.game.spawnEntity( 
			ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(0), y:ig.getY(0)},
				zIndex: 6,
				animSheet: new ig.AnimationSheet( 'media/bgnextlevel.png', ig.getX(701), ig.getY(526)),
				init: function( x, y, settings ) {
		    		this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
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
			}), ig.getX(10), ig.getY(5));


			btnNextLevel = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(212), y:ig.getY(50)},
				zIndex: 7,
				animSheet: new ig.AnimationSheet( 'media/btnnextlevel.png', ig.getX(212), ig.getY(50)),

				init: function( x, y, settings ) {
	    			this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function(){
					ig.global.LevelSekarang += 1;
					log(ig.global.LevelSekarang);
					if (ig.global.LevelSekarang < 4)
						ig.system.setGame(LevelWin);
					else
						ig.system.setGame(GameEndWin);
					
					//ig.system.setGame(ShopWin);
					
				}
			}), ig.getX(240), ig.getY(230));	

			/*btnMoreGame = this.spawnEntity( ig.Entity.extend({
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
			}), ig.getX(240), ig.getY(295));	*/
			
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
					ig.global.LevelSekarang = 1;
					
					ig.system.setGame(MainMenuWin);
				}
				
			}), ig.getX(240), ig.getY(360));	
			
			ig.game.CalculateHasil();
			this.sortEntitiesDeferred();
		},

		CalculateHasil:function()
		{
			switch (ig.global.LevelSekarang)
			{
				case 1 : 
					if (ig.global.ScoreLevel_1 <= 3)
						ig.game.textrespon = 'Hmm... Tôi nghĩ cô ấy khá tuyệt';
					if (ig.global.ScoreLevel_1 == 4)
						ig.game.textrespon = 'Tôi khá là thích thú với cô ấy';
					if (ig.global.ScoreLevel_1 == 5)
						ig.game.textrespon = 'Cô ấy thật đặc biệt, tôi rất thích cô ấy';
					break;
				case 2 : 
					if (ig.global.ScoreLevel_2 <= 3)
						ig.game.textrespon = 'Hmm... Tôi nghĩ cô ấy khá tuyệt';
					if (ig.global.ScoreLevel_2 == 4)
						ig.game.textrespon = 'Tôi khá là thích thú với cô ấy';
					if (ig.global.ScoreLevel_2 == 5)
						ig.game.textrespon = 'Cô ấy thật đặc biệt, tôi rất thích cô ấy';
					break;
				case 3 : 
					if (ig.global.ScoreLevel_3 <= 3)
						ig.game.textrespon = 'Hmm... Tôi nghĩ cô ấy khá tuyệt';
					if (ig.global.ScoreLevel_3 == 4)
						ig.game.textrespon = 'Tôi khá là thích thú với cô ấy';
					if (ig.global.ScoreLevel_3 == 5)
						ig.game.textrespon = 'Cô ấy thật đặc biệt, tôi rất thích cô ấy';
					break;
			}
		},
		
		update: function() {
			this.parent();
			btnNextLevel.fireMouseDown();
			//btnMoreGame.fireMouseDown();
			btnMainMenu.fireMouseDown();
			btnLogo.fireMouseDown();
		},
		
		draw: function() {
			if (this.loader==null)
			{
				this.parent();
				this.font.draw(ig.game.textrespon, ig.getX(350), ig.getY(200), ig.Font.ALIGN.CENTER);
			}
			
			// Draw all entities and backgroundMaps
		}

	});



});
