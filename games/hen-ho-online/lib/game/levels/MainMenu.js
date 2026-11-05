ig.module( 
	'game.levels.MainMenu' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.input',
	'plugins.ggglogo',
	'plugins.button'
	
)

.defines(function(){

	PreloaderWin = ig.Game.extend({
		
		// Load a font
		font: new ig.Font( '', 28, null, null, '#FFF','center', 2, true),
		x: 50,
		y: 50,
		init: function() {
			
			ig.resources = [];
			ig.ready = false;

			dummyImages=[

				new ig.Image("media/bgpreloader.png")

			];
			// activate the mouse input
	  		ig.input.initMouse();
	  		ig.input.bind( ig.KEY.MOUSE1, 'click');	

	  		ig.ready = true;
			this.loader = new IntermediateLoader2( null, ig.resources );
			this.loader.load();
	  		
			
	  		bg = ig.game.spawnEntity( 
			ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(700), y:ig.getY(527)},
				zIndex: 1,
				animSheet: new ig.AnimationSheet( 'media/bgpreloader.png', ig.getX(700), ig.getY(526)),
				init: function( x, y, settings ) {
		    		this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function()
				{
					ig.system.setGame(MainMenuWin);
				}

			}), ig.getX(0), ig.getY(0));
			
		},
		
		update: function() {
			this.parent();
			bg.fireMouseDown();
		},
		
		draw: function() {
			if (this.loader==null)
			{
				this.parent();
				this.font.draw("Nhấn để chơi", ig.getX(320), ig.getY(280), ig.Font.ALIGN.CENTER);
			}
			
			// Draw all entities and backgroundMaps
		}

	});

	
	MainMenuWin = ig.Game.extend({
		
		// Load a font
		font: new ig.Font( '', 20, null, null, '#FFF','center', 2, true),
		font_pink: new ig.Font( '', 20, null, null, '#C13','center', 2, true),
		font_biru: new ig.Font( '', 20, null, null, '#158','center', 2, true),
		font_hijau: new ig.Font( '', 20, null, null, '#470','center', 2, true),
		x: 50,
		y: 50,
		init: function() {
			
			ig.resources = [];
			ig.ready = false;

			dummyImages=[

				new ig.Image("media/bg.png"), 
				new ig.Image("media/btnplaygame.png"),
				new ig.Image("media/btnmoregame.png"),
				new ig.Image("media/btncredits.png"),
				new ig.Image("media/sound_on.png"), 
				new ig.Image("media/sound_off.png"), 
				new ig.Image("media/credits/ggg_new.png"), 

			];
			// activate the mouse input
	  		ig.input.initMouse();
	  		ig.input.bind( ig.KEY.MOUSE1, 'click');	

	  		ig.ready = true;
			this.loader = new IntermediateLoader( null, ig.resources );
			this.loader.load();
	  		
			// background
			bg = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: 0, y:0},
				zIndex: 1,
				animSheet: new ig.AnimationSheet( 'media/bg.png', 700, 526),
				init: function( x, y, settings ) {
	    			this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				}
				
			}), ig.getX(0), ig.getY(0));	
			
			btnStart = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(212), y:ig.getY(50)},
				zIndex: 2,
				animSheet: new ig.AnimationSheet( 'media/btnplaygame.png', ig.getX(212), ig.getY(50)),

				init: function( x, y, settings ) {
	    			this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function(){
					//ig.global.ScoreLevel_1 = 0;
					//ig.global.ScoreLevel_2 = 0;
					//ig.global.ScoreLevel_3 = 0;
					//ig.global.JenisCowo = 1;
					//ig.global.LevelSekarang = 1;

					//ig.system.setGame(LevelWin);

					//ig.system.setGame(ShopWin);

					//ig.system.setGame(GameOverWin);
					//ig.system.setGame(NextLevelWin);
					//ig.system.setGame(GameEndWin);

					ig.system.setGame(SelectCharacterWin);
					//GameAPI.GameBreak.request(ig.game.fnPause, ig.game.fnResume);
				}
				
			}), ig.getX(150), ig.getY(315));	
			

		/*	btnMoreGame = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: 212, y:50},
				zIndex: 3,
				animSheet: new ig.AnimationSheet( 'media/btnmoregame.png', ig.getX(212), ig.getY(50)),
				init: function( x, y, settings ) {
	    			this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function(){
					ig.global.openLink(ig.global.gggLink);
				}
			}), ig.getX(150), ig.getY(385));	

			btnCredits = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(212), y:ig.getY(50)},
				zIndex: 2,
				animSheet: new ig.AnimationSheet( 'media/btncredits.png', ig.getX(212), ig.getY(50)),

				init: function( x, y, settings ) {
	    			this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function(){
					ig.system.setGame(CreditsWin);
				}
				
			}), ig.getX(150), ig.getY(455));	*/
			
 
			btnSound = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(37), y:ig.getY(37)},
				zIndex: 103,
				
				init: function( x, y, settings ) {
					this.animSheet = new ig.AnimationSheet( 'media/sound_on.png', ig.getX(37), ig.getY(37));
	    			this.addAnim( 'On', 1, [0] );
	    			this.animSheet = new ig.AnimationSheet( 'media/sound_off.png', ig.getX(37), ig.getY(37));
	    			this.addAnim( 'Off', 1, [0] );
	    			this.parent( x, y, settings );
	    			if (ig.global.SOUND==false)
	    			{
						this.currentAnim = this.anims.Off;
	    			}
	    			else
	    			if (ig.global.SOUND)
	    			{
	    				this.currentAnim = this.anims.On;
	    			}
				},
				onMouseDown:function(){
					if (ig.global.SOUND)
					{
						this.currentAnim = this.anims.Off;	
						ig.global.MySound.pause();
						ig.global.SOUND = false;
					}
					else
					if (ig.global.SOUND == false)
					{
						this.currentAnim = this.anims.On;	
						ig.global.MySound.play();
						ig.global.SOUND = true;
					}
				}
			}), ig.getX(657), ig.getY(8));	
	
			/*
			btnLogo = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(158), y:ig.getY(65)},
				zIndex: 8,
				logo:new ig.Image(ig.global.gggLogoURL),
				//animSheet: new ig.AnimationSheet( 'media/credits/ggg_new.png', ig.getX(115), ig.getY(71)),

				init: function( x, y, settings ) {
	    			//this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function(){
					ig.global.openLink(ig.global.gggLink);
				},

				draw:function() {
					this.parent();
					this.logo.draw(10, 5);
				}

			}), ig.getX(10), ig.getY(5));
			*/
			
			btnLogo = this.spawnEntity( GGGLogo.extend({
				zIndex: 8

			}), ig.getX(10), ig.getY(5));

			this.sortEntitiesDeferred();
			ig.global.SudahInit=false;
			
		},

		fnPause:function() {
			//.log("game paused for ads")
		},

		fnResume:function() {
			//console.log("game resumed after ads")
			ig.system.setGame(SelectCharacterWin);
		},
		
		update: function() {
			// Update all entities and backgroundMaps
			this.parent();
			btnSound.fireMouseDown();
			btnStart.fireMouseDown();
			
		//	btnMoreGame.fireMouseDown();
		//	btnCredits.fireMouseDown();
			btnLogo.fireMouseDown();
			//btnContinue.fireMouseDown();
		},
		
		draw: function() {
			if (this.loader==null){
				this.parent();
				/*
				this.font_pink.draw("Play Game", ig.getX(580), ig.getY(350), ig.Font.ALIGN.CENTER);
				if (ig.global.StageTerakhir > 0)
					this.font_biru.draw("Continue", ig.getX(580), ig.getY(470), ig.Font.ALIGN.CENTER);
				this.font_hijau.draw("More Games", ig.getX(580), ig.getY(410), ig.Font.ALIGN.CENTER);
				*/
			}
			
		}

	});


});
