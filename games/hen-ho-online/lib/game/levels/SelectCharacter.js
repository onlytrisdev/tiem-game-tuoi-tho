ig.module( 
	'game.levels.SelectCharacter' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.input',
	'plugins.button'
	
)

.defines(function(){

	SelectCharacterWin = ig.Game.extend({
		
		// Load a font
		font: new ig.Font( '', 12, null, null, '#FFF','center', 2, true),
		
		x: 50,
		y: 50,
		textline_1:'',
		textline_2:'',
		textline_3:'',
		init: function() {
			
			ig.resources = [];
			ig.ready = false;

			dummyImages=[
				new ig.Image("media/bgselectcharacter.png"),
				new ig.Image("media/btnstartdating.png"),
				new ig.Image("media/btnmainmenu.png"),
				new ig.Image("media/tv_character_1.png"),
				new ig.Image("media/tv_character_2.png"),
				new ig.Image("media/tv_character_3.png"),
				new ig.Image("media/btncd_1.png"),
				new ig.Image("media/btncd_2.png"),
				new ig.Image("media/btncd_3.png"),
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
				size: {x: ig.getX(702), y:ig.getY(525)},
				zIndex: 6,
				animSheet: new ig.AnimationSheet( 'media/bgselectcharacter.png', ig.getX(701), ig.getY(526)),
				init: function( x, y, settings ) {
		    		this.addAnim( 'idle', 1, [0] );
	    			this.parent( x, y, settings );
				}

			}), ig.getX(0), ig.getY(0));

			ig.game.bgTV_Character = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(1), y:ig.getY(1)},
				zIndex: 7,
				init: function( x, y, settings ) {
	    			this.animSheet =  new ig.AnimationSheet( 'media/tv_character_1.png', ig.getX(457), ig.getY(282));
	    			this.addAnim( 'cowo_1', 1, [0] );
	    			this.animSheet =  new ig.AnimationSheet( 'media/tv_character_2.png', ig.getX(457), ig.getY(282));
	    			this.addAnim( 'cowo_2', 1, [0] );
	    			this.animSheet =  new ig.AnimationSheet( 'media/tv_character_3.png', ig.getX(457), ig.getY(282));
	    			this.addAnim( 'cowo_3', 1, [0] );
	    			this.animSheet =  new ig.AnimationSheet( '', ig.getX(457), ig.getY(282));
	    			this.addAnim( 'cowo_4', 1, [0] );
	    			this.parent( x, y, settings );
	    			this.currentAnim = this.anims.cowo_4;
				}
				
			}), ig.getX(122), ig.getY(35));	

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


			ig.game.btnCD_1 = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(60), y:ig.getY(42)},
				zIndex: 7,
				init: function( x, y, settings ) {
	    			this.animSheet =  new ig.AnimationSheet( 'media/btncd_1.png', ig.getX(60), ig.getY(42));
	    			this.addAnim( 'idle', 1, [0] );
	    			this.animSheet =  new ig.AnimationSheet( '', ig.getX(60), ig.getY(42));
	    			this.addAnim( 'kosong', 1, [0] );
	    			this.parent( x, y, settings );
	    			this.currentAnim = this.anims.idle;
				},
				onMouseDown:function(){
					ig.global.JenisCowo = 1;
					ig.game.RefreshTV();
				}
			}), ig.getX(90), ig.getY(450));	

			ig.game.btnCD_2 = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(60), y:ig.getY(42)},
				zIndex: 7,
				init: function( x, y, settings ) {
	    			this.animSheet =  new ig.AnimationSheet( 'media/btncd_2.png', ig.getX(60), ig.getY(42));
	    			this.addAnim( 'idle', 1, [0] );
	    			this.animSheet =  new ig.AnimationSheet( '', ig.getX(60), ig.getY(42));
	    			this.addAnim( 'kosong', 1, [0] );
	    			this.parent( x, y, settings );
	    			this.currentAnim = this.anims.idle;
				},
				onMouseDown:function(){
					ig.global.JenisCowo = 2;
					ig.game.RefreshTV();
				}
			}), ig.getX(205), ig.getY(450));	

			ig.game.btnCD_3 = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(60), y:ig.getY(42)},
				zIndex: 7,
				init: function( x, y, settings ) {
	    			this.animSheet =  new ig.AnimationSheet( 'media/btncd_1.png', ig.getX(60), ig.getY(42));
	    			this.addAnim( 'idle', 1, [0] );
	    			this.animSheet =  new ig.AnimationSheet( '', ig.getX(60), ig.getY(42));
	    			this.addAnim( 'kosong', 1, [0] );
	    			this.parent( x, y, settings );
	    			this.currentAnim = this.anims.idle;
				},
				onMouseDown:function(){
					ig.global.JenisCowo = 3;
					ig.game.RefreshTV();
				}
			}), ig.getX(325), ig.getY(450));	

			ig.game.btnStartDating = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(212), y:ig.getY(50)},
				zIndex: 7,
				init: function( x, y, settings ) {
	    			this.animSheet =  new ig.AnimationSheet( 'media/btnstartdating.png', ig.getX(212), ig.getY(50));
	    			this.addAnim( 'idle', 1, [0] );
	    			this.animSheet =  new ig.AnimationSheet( '', ig.getX(212), ig.getY(50));
	    			this.addAnim( 'kosong', 1, [0] );
	    			this.parent( x, y, settings );
	    			this.currentAnim = this.anims.kosong;
				},
				onMouseDown:function(){
					if (this.currentAnim == this.anims.idle)
					{
						ig.global.LevelSekarang = 1;
						ig.system.setGame(LevelWin);
					}
						
					//ig.system.setGame(ShopWin);
				}
			}), ig.getX(440), ig.getY(400));	

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
				
			}), ig.getX(440), ig.getY(460));	
			
			
			this.sortEntitiesDeferred();
		},

		RefreshTV:function()
		{
			ig.game.btnCD_1.currentAnim = ig.game.btnCD_1.anims.idle;
			ig.game.btnCD_2.currentAnim = ig.game.btnCD_2.anims.idle;
			ig.game.btnCD_3.currentAnim = ig.game.btnCD_3.anims.idle;
			switch (ig.global.JenisCowo)
			{
				case 1 : 
					ig.game.bgTV_Character.currentAnim = ig.game.bgTV_Character.anims.cowo_1;
					ig.game.btnCD_1.currentAnim = ig.game.btnCD_1.anims.kosong;
					ig.game.btnStartDating.currentAnim = ig.game.btnStartDating.anims.idle;
					ig.game.textline_1 = 'Hi Tôi là James Smith, bạn có thể gọi tôi là James.';
					ig.game.textline_2 = 'Tôi thích thể thao và đặc biệt là bóng đá.';
					ig.game.textline_3 = 'Tôi hi vọng chúng ta sẽ có những buổi hẹn hò tuyệt vời!';
					break;
				case 2 : 
					ig.game.bgTV_Character.currentAnim = ig.game.bgTV_Character.anims.cowo_2;
					ig.game.btnCD_2.currentAnim = ig.game.btnCD_2.anims.kosong;
					ig.game.btnStartDating.currentAnim = ig.game.btnStartDating.anims.idle;
					ig.game.textline_1 = 'Tôi là Patrick Bell. Bạn bè vẫn gọi tôi là Patrick.';
					ig.game.textline_2 = 'Tôi thích đọc sách và du lịch.';
					ig.game.textline_3 = 'Tôi đang tìm kiếm 1 người để yêu.';
					break;
				case 3 : 
					ig.game.bgTV_Character.currentAnim = ig.game.bgTV_Character.anims.cowo_3;
					ig.game.btnCD_3.currentAnim = ig.game.btnCD_3.anims.kosong;
					ig.game.btnStartDating.currentAnim = ig.game.btnStartDating.anims.idle;
					ig.game.textline_1 = 'Tôi là Peter Decker, cứ gọi tôi là Peter.';
					ig.game.textline_2 = 'Tôi thích âm nhạc và phim ảnh. ';
					ig.game.textline_3 = 'Tôi hi vọng chúng ta hợp với nhau.';
					break;
			}
			ig.game.sortEntitiesDeferred();
		},
		
		update: function() {
			this.parent();
			ig.game.btnStartDating.fireMouseDown();
			ig.game.btnCD_1.fireMouseDown();
			ig.game.btnCD_2.fireMouseDown();
			ig.game.btnCD_3.fireMouseDown();
			btnMainMenu.fireMouseDown();
			btnLogo.fireMouseDown();
		},
		
		draw: function() {
			if (this.loader==null)
			{
				this.parent();
				this.font.draw(ig.game.textline_1, ig.getX(350), ig.getY(250), ig.Font.ALIGN.CENTER);
				this.font.draw(ig.game.textline_2, ig.getX(350), ig.getY(269), ig.Font.ALIGN.CENTER);
				this.font.draw(ig.game.textline_3, ig.getX(350), ig.getY(288), ig.Font.ALIGN.CENTER);
			}
			
			// Draw all entities and backgroundMaps
		}

	});



});
