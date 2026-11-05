ig.module( 
	'game.levels.credits' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.input',
	'plugins.button'
	
)

.defines(function(){

	CreditsWin = ig.Game.extend({
		
		// Load a font
		font: new ig.Font( '', 24, null, null, '#C13','center', 2, true),
		x: 50,
		y: 50,
		init: function() {
			
			ig.resources = [];
			ig.ready = false;

			dummyImages=[

				new ig.Image("media/credits/fgg_logo.png"),
				new ig.Image("media/credits/bg_fgg_logo.png"),
				new ig.Image("media/credits/btnclose.png")
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
				size: {x: ig.getX(1022), y:ig.getY(767)},
				zIndex: 1,
				animSheet: new ig.AnimationSheet( 'media/credits/bg_fgg_logo.png', ig.getX(1022), ig.getY(767)),
				init: function( x, y, settings ) {
		    		this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				}
			}), ig.getX(0), ig.getY(0));

			Logo = ig.game.spawnEntity( 
			ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(474), y:ig.getY(317)},
				zIndex: 2,
				animSheet: new ig.AnimationSheet( 'media/credits/fgg_logo.png', ig.getX(474), ig.getY(317)),
				init: function( x, y, settings ) {
		    		this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function()
				{
					//ig.global.openLink("http://www.gir.com");
				}

			}), ig.getX(100), ig.getY(100));

			btnClose = ig.game.spawnEntity( 
			ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(61), y:ig.getY(58)},
				zIndex: 3,
				animSheet: new ig.AnimationSheet( 'media/credits/btnclose.png', ig.getX(61), ig.getY(58)),
				init: function( x, y, settings ) {
		    		this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				},
				onMouseDown:function()
				{
					ig.system.setGame(MainMenuWin);
				}

			}), ig.getX(650), ig.getY(0));
			
		},
		
		update: function() {
			this.parent();
			Logo.fireMouseDown();
			btnClose.fireMouseDown();
		},
		
		draw: function() {
			if (this.loader==null)
			{
				this.parent();
				this.font.draw("Music by Owen Mulcahy", ig.getX(360), ig.getY(488), ig.Font.ALIGN.CENTER);
			}
			
			// Draw all entities and backgroundMaps
		}

	});

});
