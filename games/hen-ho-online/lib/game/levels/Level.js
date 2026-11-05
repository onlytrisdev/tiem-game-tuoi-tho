ig.module( 
	'game.levels.Level' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.input',
	'plugins.button'
	
)

.defines(function(){
	LevelWin = ig.Game.extend({
		
		// Load a font
		font: new ig.Font( '', 16, null, null, '#FFF','center', 2, true),
		font_time: new ig.Font( '', 24, null, null, '#FFF','center', 2, true),
		
		x: 50,
		y: 50,
		level:1,
		sedang_pause:false,

		countermenit:1,
		counterdetik1:0,
		counterdetik2:0,

		panelaktif:'',
		jumlahdebusudah:0,
		delaytouch:0,
		jumlahprogress:0,
		jumlahmakan:0,
		jumlahrambut:0,
		randomactionbersih_1:0,
		randomactionbersih_2:0,
		randomactionbersih_3:0,
		jumlahactionbersih:0,
		mousepointeractive:false,
		counterpanah:0,
		texttime:'',
		sudahselesai:false,
		counterframe : 0,
		counterdetik1 : 0,
		counterdetik2 : 0,
		countermenit : 0,
		framegoodjob : 0,
		counterlevelprogress:0,		
		counterrandompanel:0,
		randompanel:0,
		sedangpanel:false,
		textday:'',
		handicaplevel:0,
		
		init: function() {
			
			ig.resources = [];
			ig.ready = false;

			dummyImages=[
				new ig.Image("media/level/bartender.png"), 
				new ig.Image("media/level/bglevel.png"), 
				new ig.Image("media/level/bgpause.png"), 
				
				new ig.Image("media/level/bersih_debu_1.png"), 
				new ig.Image("media/level/bersih_debu_2.png"), 
				new ig.Image("media/level/bersih_debu_3.png"), 
				new ig.Image("media/level/bersih_debu_4.png"), 
				new ig.Image("media/level/bersih_debu_5.png"), 
				new ig.Image("media/level/collision.png"), 
				new ig.Image("media/level/cowo_1_idle.png"), 
				new ig.Image("media/level/cowo_1_bedakan.png"), 
				new ig.Image("media/level/cowo_1_benarnodasi.png"), 
				new ig.Image("media/level/cowo_1_bersihinbaju.png"), 
				new ig.Image("media/level/cowo_1_bersihinmulut.png"), 
				new ig.Image("media/level/cowo_1_bersihinpundak.png"), 
				new ig.Image("media/level/cowo_1_kasihmakan_1.png"), 
				new ig.Image("media/level/cowo_1_kasihmakan_2.png"), 
				new ig.Image("media/level/cowo_1_kasihmakan_3.png"), 
				new ig.Image("media/level/cowo_1_kasihmakan_4.png"), 
				new ig.Image("media/level/cowo_1_kasihmakan_5.png"), 
				new ig.Image("media/level/cowo_1_kasihmakan_6.png"), 
				new ig.Image("media/level/cowo_1_lipstickan.png"), 
				new ig.Image("media/level/cowo_1_sisiran.png"), 
				new ig.Image("media/level/cowo_1_tuangwine.png"), 
				new ig.Image("media/level/cowo_2_idle.png"), 
				new ig.Image("media/level/cowo_2_bedakan.png"), 
				new ig.Image("media/level/cowo_2_benarnodasi.png"), 
				new ig.Image("media/level/cowo_2_bersihinbaju.png"), 
				new ig.Image("media/level/cowo_2_bersihinmulut.png"), 
				new ig.Image("media/level/cowo_2_bersihinpundak.png"), 
				new ig.Image("media/level/cowo_2_kasihmakan_1.png"), 
				new ig.Image("media/level/cowo_2_kasihmakan_2.png"), 
				new ig.Image("media/level/cowo_2_kasihmakan_3.png"), 
				new ig.Image("media/level/cowo_2_kasihmakan_4.png"), 
				new ig.Image("media/level/cowo_2_kasihmakan_5.png"), 
				new ig.Image("media/level/cowo_2_kasihmakan_6.png"), 

				new ig.Image("media/level/cowo_2_lipstickan.png"), 
				new ig.Image("media/level/cowo_2_sisiran.png"), 
				new ig.Image("media/level/cowo_2_tuangwine.png"), 
				new ig.Image("media/level/cowo_3_idle.png"), 
				new ig.Image("media/level/cowo_3_bedakan.png"), 
				new ig.Image("media/level/cowo_3_benarnodasi.png"), 
				new ig.Image("media/level/cowo_3_bersihinbaju.png"), 
				new ig.Image("media/level/cowo_3_bersihinmulut.png"), 
				new ig.Image("media/level/cowo_3_bersihinpundak.png"), 
				new ig.Image("media/level/cowo_3_kasihmakan_1.png"), 
				new ig.Image("media/level/cowo_3_kasihmakan_2.png"), 
				new ig.Image("media/level/cowo_3_kasihmakan_3.png"), 
				new ig.Image("media/level/cowo_3_kasihmakan_4.png"), 
				new ig.Image("media/level/cowo_3_kasihmakan_5.png"), 
				new ig.Image("media/level/cowo_3_kasihmakan_6.png"), 
				new ig.Image("media/level/cowo_3_lipstickan.png"), 
				new ig.Image("media/level/cowo_3_sisiran.png"), 
				new ig.Image("media/level/cowo_3_tuangwine.png"), 
				new ig.Image("media/level/guest_1.png"), 
				new ig.Image("media/level/guest_2.png"), 
				new ig.Image("media/level/guest_3.png"), 
				new ig.Image("media/level/kasihmakan_piring_1.png"), 
				new ig.Image("media/level/kasihmakan_piring_2.png"), 
				new ig.Image("media/level/kasihmakan_piring_3.png"), 
				new ig.Image("media/level/kasihmakan_piring_4.png"), 
				new ig.Image("media/level/kasihmakan_piring_5.png"), 
				new ig.Image("media/level/kasihmakan_piring_6.png"), 
				new ig.Image("media/level/lipstickan_mulut_1.png"), 
				new ig.Image("media/level/lipstickan_mulut_2.png"), 
				new ig.Image("media/level/mataguest_2a.png"), 
				new ig.Image("media/level/mataguest_2b.png"), 
				new ig.Image("media/level/mataguest_3.png"), 

				new ig.Image("media/level/panel_bedakan.png"), 
				new ig.Image("media/level/panel_bersih.png"), 
				new ig.Image("media/level/panel_kasihmakan.png"), 
				new ig.Image("media/level/panel_lipstickan.png"), 
				new ig.Image("media/level/panel_sisirrambut.png"), 
				new ig.Image("media/level/panel_trace.png"), 

				new ig.Image("media/level/sisirrambut_1.png"), 
				new ig.Image("media/level/sisirrambut_2.png"), 
				new ig.Image("media/level/sisirrambut_3.png"), 
				new ig.Image("media/level/sisirrambut_4.png"), 
				new ig.Image("media/level/tandaseru.png"), 
				new ig.Image("media/level/text_goodjob.png"), 
				new ig.Image("media/level/trace_arrow_1.png"), 
				new ig.Image("media/level/trace_arrow_2.png"), 
				new ig.Image("media/level/trace_arrow_3.png"), 

				new ig.Image("media/level/progress_0.png"), 
				new ig.Image("media/level/progress_1.png"), 
				new ig.Image("media/level/progress_2.png"), 
				new ig.Image("media/level/progress_3.png"), 
				new ig.Image("media/level/progress_4.png"), 
				new ig.Image("media/level/progress_5.png"), 
				new ig.Image("media/level/progress_6.png"), 
				new ig.Image("media/level/progress_7.png"), 
				new ig.Image("media/level/progress_8.png"), 
				new ig.Image("media/level/progress_9.png"), 
				new ig.Image("media/level/progress_10.png"), 
				new ig.Image("media/level/levelprogress_1.png"), 
				new ig.Image("media/level/levelprogress_2.png"), 
				new ig.Image("media/level/levelprogress_3.png"), 
				new ig.Image("media/level/levelprogress_4.png"), 
				new ig.Image("media/level/levelprogress_5.png"), 

				new ig.Image("media/btnpause.png"), 
				new ig.Image("media/sound_on.png"), 
				new ig.Image("media/sound_off.png"), 
				new ig.Image("media/credits/logo.png"), 
				
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
				zIndex: 2,
				init: function( x, y, settings ) {
	    			this.animSheet =  new ig.AnimationSheet( 'media/level/bglevel.png', ig.getX(701), ig.getY(525));
	    			this.addAnim( 'no_1', 1, [0] );
	    			this.parent( x, y, settings );
				}
			}), ig.getX(0), ig.getY(0));
			
			ig.game.btnLogo = this.spawnEntity( ig.Entity.extend({
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

			ig.game.UI = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 10,
					init: function( x, y, settings ) {
	    				this.animSheet =  new ig.AnimationSheet( 'media/level/ui.png', ig.getX(701), ig.getY(64));
	    				this.addAnim( 'idle', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.idle;
					}
				}), ig.getX(0), ig.getY(463));

			ig.game.UI_Progress = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 10,
					init: function( x, y, settings ) {
	    				this.animSheet =  new ig.AnimationSheet( 'media/level/progress_0.png', ig.getX(219), ig.getY(19));
	    				this.addAnim( '', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.idle;
					}
				}), ig.getX(0), ig.getY(463));

			ig.game.btnSound = this.spawnEntity( ig.Entity.extend({
				type: ig.Entity.TYPE.A,
				size: {x: ig.getX(37), y:ig.getY(37)},
				zIndex: 11,
				
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
			}), ig.getX(50), ig.getY(484));	
			
			ig.game.btnPause = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(37), y:ig.getY(37)},
					zIndex: 11,
					init: function( x, y, settings ) {
	    				this.animSheet =  new ig.AnimationSheet( 'media/btnpause.png', ig.getX(37), ig.getY(37));
	    				this.addAnim( 'idle', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.idle;
					},
					onMouseDown:function()
					{
						ig.game.ShowPause();
					}
				}), ig.getX(10), ig.getY(484));

			Bartender = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 3,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/bartender.png', 62, 79 );
						this.addAnim( 'idle', 0.025, [0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,3,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] );
	    				this.parent( x, y, settings );
		    			
					}
				}), ig.getX(150), ig.getY(121));

			Guest_1 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 4,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/guest_1.png', 70, 189 );
						this.addAnim( 'idle', 0.033, [0,0,0,1,1,1,2,2,2,1,1,1,0,0,0,1,1,1,2,2,2,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3] );
	    				this.parent( x, y, settings );
		    			
					}
				}), ig.getX(108), ig.getY(132));

			Guest_2 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(0)},
					zIndex: 5,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/guest_2.png', 732, 438 );
						this.addAnim( 'idle', 1, [0] );
	    				this.parent( x, y, settings );
		    			
					}
				}), ig.getX(0), ig.getY(56));

			MataGuest_2A = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 6,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/mataguest_2a.png', 26, 26 );
						this.addAnim( 'idle', 0.033, [0,0,0,1,1,1,2,2,2,1,1,1,0,0,0,1,1,1,2,2,2,1,1,1,0,0,0,1,1,1,2,2,2,1,1,1,0,0,0,3,3,3,4,4,5,6,6,6,7,7,7,6,6,6,5,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2] );
	    				this.parent( x, y, settings );
		    			
					}
				}), ig.getX(551), ig.getY(96));

			MataGuest_2b = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 7,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/mataguest_2b.png', 30, 9 );
						this.addAnim( 'idle', 0.033, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] );
	    				this.parent( x, y, settings );
		    			
					}
				}), ig.getX(646), ig.getY(158));

			Guest_3 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(0)},
					zIndex: 10,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/guest_3.png', 259, 274 );
						this.addAnim( 'idle', 1, [0] );
	    				this.parent( x, y, settings );
		    			
					}
				}), ig.getX(-22), ig.getY(204));

			MataGuest_3 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 11,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/mataguest_3.png', 60, 14 );
						this.addAnim( 'idle', 0.033, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,1,1,0,0,1,1,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] );
	    				this.parent( x, y, settings );
					}
				}), ig.getX(31), ig.getY(262));

			//LEVEL PROGRESS
			ig.game.LevelProgress = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(0)},
					zIndex: 11,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/levelprogress_1.png', 468, 22 );
						this.addAnim( 'progress_1', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/levelprogress_2.png', 468, 22 );
						this.addAnim( 'progress_2', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/levelprogress_3.png', 468, 22 );
						this.addAnim( 'progress_3', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/levelprogress_4.png', 468, 22 );
						this.addAnim( 'progress_4', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/levelprogress_5.png', 468, 22 );
						this.addAnim( 'progress_5', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 0,0 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(101), ig.getY(493));

			//GOOD JOB
			ig.game.TextGoodJob = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(0)},
					zIndex: 10,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/text_goodjob.png', 142, 45);
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 0,0 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(270), ig.getY(142));

			//TANDA SERU
			ig.game.TandaSeru = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(0)},
					zIndex: 16,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/tandaseru.png', 72, 34 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] );
						this.animSheet = new ig.AnimationSheet( '', 0,0 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(210), ig.getY(142));

			//COWO 1
			ig.game.Cowo_1_Idle = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(0)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_idle.png', 416, 446 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 0,0 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.ada;
					}
				}), ig.getX(134), ig.getY(142));

			ig.game.Cowo_1_Bedakan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_bedakan.png', 416, 445 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(134), ig.getY(142));

			ig.game.Cowo_1_BersihinBaju = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_bersihinbaju.png', 416, 445 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,2,0,0,0,0,0] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(134), ig.getY(142));

			ig.game.Cowo_1_BersihinMulut = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 9,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_bersihinmulut.png', 416, 444 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_1_BersihinPundak = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_bersihinpundak.png', 416, 445 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,0,0,0,0,0,0] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_1_KasihMakan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_kasihmakan_1.png', 416, 446 );
						this.addAnim( 'kasihmakan_1', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_kasihmakan_2.png', 416, 446 );
						this.addAnim( 'kasihmakan_2', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_kasihmakan_3.png', 416, 446 );
						this.addAnim( 'kasihmakan_3', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_kasihmakan_4.png', 416, 446 );
						this.addAnim( 'kasihmakan_4', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_kasihmakan_5.png', 416, 446 );
						this.addAnim( 'kasihmakan_5', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_kasihmakan_6.png', 416, 446 );
						this.addAnim( 'kasihmakan_6', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(142));

			ig.game.Cowo_1_Lipstickan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_lipstickan.png', 416, 445 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,0,1,1,1,1,1,2,2,2,2,2] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(134), ig.getY(142));

			ig.game.Cowo_1_BenarnoDasi = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_benarnodasi.png', 416, 445 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(134), ig.getY(142));

			ig.game.Cowo_1_Sisiran = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_sisiran.png', 416, 445 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(142));

			ig.game.Cowo_1_TuangWine = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_1_tuangwine.png', 416, 445 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,2] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(134), ig.getY(142));
			////////////////
			//COWO 2
			ig.game.Cowo_2_Idle = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(0)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_idle.png', 416, 437 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 0,0 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(134), ig.getY(142));

			ig.game.Cowo_2_Bedakan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_bedakan.png', 416, 436 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_2_BersihinBaju = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_bersihinbaju.png', 416, 436 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,2,0,0,0,0,0] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_2_BersihinMulut = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 9,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_bersihinmulut.png', 416, 432 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_2_BersihinPundak = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_bersihinpundak.png', 416, 436 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,0,0,0,0,0,0] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_2_KasihMakan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_kasihmakan_1.png', 416, 437 );
						this.addAnim( 'kasihmakan_1', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_kasihmakan_2.png', 416, 437 );
						this.addAnim( 'kasihmakan_2', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_kasihmakan_3.png', 416, 437 );
						this.addAnim( 'kasihmakan_3', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_kasihmakan_4.png', 416, 437 );
						this.addAnim( 'kasihmakan_4', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_kasihmakan_5.png', 416, 437 );
						this.addAnim( 'kasihmakan_5', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_kasihmakan_6.png', 416, 437 );
						this.addAnim( 'kasihmakan_6', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(142));

			ig.game.Cowo_2_Lipstickan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_lipstickan.png', 416, 436 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,0,1,1,1,1,1,2,2,2,2,2] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_2_BenarnoDasi = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_benarnodasi.png', 416, 436 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_2_Sisiran = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_sisiran.png', 416, 436 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_2_TuangWine = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_2_tuangwine.png', 416, 436 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,2] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(142));
			/////
			//COWO 3
			ig.game.Cowo_3_Idle = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(0)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_idle.png', 416, 449 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 0,0 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(134), ig.getY(142));

			ig.game.Cowo_3_Bedakan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_bedakan.png', 416, 448 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(142));

			ig.game.Cowo_3_BersihinBaju = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_bersihinbaju.png', 416, 447 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,2,0,0,0,0,0] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(144));

			ig.game.Cowo_3_BersihinMulut = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 9,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_bersihinmulut.png', 416, 447 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_3_BersihinPundak = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_bersihinpundak.png', 416, 448 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,2,2,2,2,2,3,3,4,4,5,5,6,6,6,6,6,6] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(144));

			ig.game.Cowo_3_KasihMakan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_kasihmakan_1.png', 416, 448 );
						this.addAnim( 'kasihmakan_1', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_kasihmakan_2.png', 416, 448 );
						this.addAnim( 'kasihmakan_2', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_kasihmakan_3.png', 416, 448 );
						this.addAnim( 'kasihmakan_3', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_kasihmakan_4.png', 416, 448 );
						this.addAnim( 'kasihmakan_4', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_kasihmakan_5.png', 416, 448 );
						this.addAnim( 'kasihmakan_5', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_kasihmakan_6.png', 416, 448 );
						this.addAnim( 'kasihmakan_6', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_3_Lipstickan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_lipstickan.png', 416, 448 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,0,1,1,1,1,1,2,2,2,2,2] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_3_BenarnoDasi = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_benarnodasi.png', 416, 446 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(145));

			ig.game.Cowo_3_Sisiran = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_sisiran.png', 416, 448 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));

			ig.game.Cowo_3_TuangWine = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 8,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/cowo_3_tuangwine.png', 416, 448 );
						this.addAnim( 'ada', 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,2] );
						this.animSheet = new ig.AnimationSheet( '', 416, 445 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(135), ig.getY(143));
			//=============

			ig.game.PanelBedakan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(253), y:ig.getY(212)},
					zIndex: 12,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/panel_bedakan.png', 253, 212 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if (ig.game.panelaktif == 'Bedakan')
						{
							if (this.currentAnim == this.anims.ada)
							{
								ig.game.jumlahprogress+=1;
								ig.game.RefreshProgress();
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(450), ig.getY(0));

			ig.game.Progress = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 13,
					init: function( x, y, settings ) {
	    				this.animSheet = new ig.AnimationSheet( 'media/level/progress_0.png', 219, 19 );
						this.addAnim( 'progress_0', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/progress_1.png', 219, 19 );
						this.addAnim( 'progress_1', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/progress_2.png', 219, 19 );
						this.addAnim( 'progress_2', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/progress_3.png', 219, 19 );
						this.addAnim( 'progress_3', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/progress_4.png', 219, 19 );
						this.addAnim( 'progress_4', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/progress_5.png', 219, 19 );
						this.addAnim( 'progress_5', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/progress_6.png', 219, 19 );
						this.addAnim( 'progress_6', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/progress_7.png', 219, 19 );
						this.addAnim( 'progress_7', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/progress_8.png', 219, 19 );
						this.addAnim( 'progress_8', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/progress_9.png', 219, 19 );
						this.addAnim( 'progress_9', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/progress_10.png', 219, 19 );
						this.addAnim( 'progress_10', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
	    				this.parent( x, y, settings );
	    				this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(465), ig.getY(212));

			ig.game.PanelBersih = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 12,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/panel_bersih.png', 253, 212 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(450), ig.getY(0));

			ig.game.BersihDebu_1 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(32), y:ig.getY(27)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/bersih_debu_1.png', 32, 27 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if ((ig.game.panelaktif == 'BersihMulut') || (ig.game.panelaktif == 'BersihBaju'))
						{
							if (this.currentAnim == this.anims.ada)
							{
								this.currentAnim = this.anims.kosong;
								ig.game.jumlahdebusudah += 1;
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(560), ig.getY(100));

			ig.game.BersihDebu_2 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(60), y:ig.getY(46)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/bersih_debu_2.png', 60, 46 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if ((ig.game.panelaktif == 'BersihMulut') || (ig.game.panelaktif == 'BersihBaju'))
						{
							if (this.currentAnim == this.anims.ada)
							{
								this.currentAnim = this.anims.kosong;
								ig.game.jumlahdebusudah += 1;
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(485), ig.getY(45));

			ig.game.BersihDebu_3 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(60), y:ig.getY(43)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/bersih_debu_3.png', 60, 43 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if ((ig.game.panelaktif == 'BersihMulut') || (ig.game.panelaktif == 'BersihBaju'))
						{
							if (this.currentAnim == this.anims.ada)
							{
								this.currentAnim = this.anims.kosong;
								ig.game.jumlahdebusudah += 1;
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(600), ig.getY(45));

			ig.game.BersihDebu_4 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(49), y:ig.getY(42)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/bersih_debu_4.png', 49, 42 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if ((ig.game.panelaktif == 'BersihMulut') || (ig.game.panelaktif == 'BersihBaju'))
						{
							if (this.currentAnim == this.anims.ada)
							{
								this.currentAnim = this.anims.kosong;
								ig.game.jumlahdebusudah += 1;
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(485), ig.getY(145));

			ig.game.BersihDebu_5 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(58), y:ig.getY(47)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/bersih_debu_5.png', 58, 47 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if ((ig.game.panelaktif == 'BersihMulut') || (ig.game.panelaktif == 'BersihBaju'))
						{
							if (this.currentAnim == this.anims.ada)
							{
								this.currentAnim = this.anims.kosong;
								ig.game.jumlahdebusudah += 1;
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(600), ig.getY(145));

			ig.game.PanelSisirRambut = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 12,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/panel_sisirrambut.png', 252, 212 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(450), ig.getY(0));

			ig.game.SisirRambut_1 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(40), y:ig.getY(18)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/sisirrambut_1.png', 40, 18 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if (ig.game.panelaktif == 'SisirRambut') 
						{
							if (this.currentAnim == this.anims.ada)
							{
								this.currentAnim = this.anims.kosong;
								ig.game.jumlahrambut += 1;
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(505), ig.getY(55));

			ig.game.SisirRambut_2 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(26), y:ig.getY(16)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/sisirrambut_2.png', 26, 16 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if (ig.game.panelaktif == 'SisirRambut') 
						{
							if (this.currentAnim == this.anims.ada)
							{
								this.currentAnim = this.anims.kosong;
								ig.game.jumlahrambut += 1;
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(490), ig.getY(115));

			ig.game.SisirRambut_3 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(30), y:ig.getY(13)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/sisirrambut_3.png', 30, 13 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{

						if (ig.game.panelaktif == 'SisirRambut') 
						{
							if (this.currentAnim == this.anims.ada)
							{
								this.currentAnim = this.anims.kosong;
								ig.game.jumlahrambut += 1;
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(550), ig.getY(115));

			ig.game.SisirRambut_4 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(32), y:ig.getY(15)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/sisirrambut_4.png', 32, 15 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if (ig.game.panelaktif == 'SisirRambut') 
						{
							if (this.currentAnim == this.anims.ada)
							{
								this.currentAnim = this.anims.kosong;
								ig.game.jumlahrambut += 1;
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(550), ig.getY(180));


			ig.game.PanelKasihMakan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 12,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/panel_kasihmakan.png', 253, 212 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(450), ig.getY(0));

			ig.game.KasihMakanMulut = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(150), y:ig.getY(27)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/kasihmakan_mulut.png', 150, 27 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if (ig.game.panelaktif == 'KasihMakan') 
						{
							if (this.currentAnim == this.anims.ada)
							{
								ig.game.jumlahmakan += 1;
								ig.game.RefreshKasihMakanCowo();
								ig.game.RefreshKasihMakanPiring();
								ig.game.delaytouch = 5;
								ig.game.CekAction();
							}
						}
					}
				}), ig.getX(500), ig.getY(60));

			ig.game.KasihMakanPiring = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(217), y:ig.getY(82)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/kasihmakan_piring_1.png', 217, 82 );
						this.addAnim( 'piring_1', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/kasihmakan_piring_2.png', 217, 82 );
						this.addAnim( 'piring_2', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/kasihmakan_piring_3.png', 217, 82 );
						this.addAnim( 'piring_3', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/kasihmakan_piring_4.png', 217, 82 );
						this.addAnim( 'piring_4', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/kasihmakan_piring_5.png', 217, 82 );
						this.addAnim( 'piring_5', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/kasihmakan_piring_6.png', 217, 81 );
						this.addAnim( 'piring_6', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(470), ig.getY(100));

			ig.game.PanelLipstickan = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 12,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/panel_lipstickan.png', 253, 212 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(450), ig.getY(0));

			ig.game.LipstickanMulut = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(205), y:ig.getY(62)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/lipstickan_mulut_1.png', 205, 62 );
						this.addAnim( 'mulut_1', 1, [0] );
						this.animSheet = new ig.AnimationSheet( 'media/level/lipstickan_mulut_2.png', 205, 62 );
						this.addAnim( 'mulut_2', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					},
					onMouseDown:function()
					{
						if (ig.game.panelaktif == 'Lipstickan') 
						{
							ig.game.jumlahprogress += 1;
							ig.game.RefreshProgress();
							ig.game.delaytouch = 5;
							ig.game.CekAction();
							
						}
					}
				}), ig.getX(480), ig.getY(80));

			ig.game.PanelTrace = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 12,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/panel_trace.png', 253, 212 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(450), ig.getY(0));

			ig.game.TraceArrow_1 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/trace_arrow_1.png', 161, 151 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(490), ig.getY(50));

			ig.game.TraceArrow_2 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/trace_arrow_2.png', 45, 134 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(550), ig.getY(53));

			ig.game.TraceArrow_3 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(1), y:ig.getY(1)},
					zIndex: 13,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/trace_arrow_3.png', 45, 134 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.kosong;
					}
				}), ig.getX(550), ig.getY(53));

			ig.game.MousePointer = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(37), y:ig.getY(28)},
					zIndex: 1,
					checkAgainst:ig.Entity.TYPE.B,
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/collision.png', 37, 28 );
						this.addAnim( 'ada', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.ada;
					},
					check:function(other)
					{
						if ((ig.game.mousepointeractive) && (ig.game.sedang_pause == false))
						{	
							switch (ig.game.jumlahactionbersih)
							{
								case 0 :
									switch (ig.game.randomactionbersih_1)
									{
										case 1 :
											if (ig.game.counterpanah == 0)
											{
												if (other.name == 'Point_4')
													ig.game.counterpanah = 1;
											}
											else
											if (ig.game.counterpanah == 1)
											{
												if (other.name == 'Point_1')
													ig.game.counterpanah = 2;
											}
											else
											if (ig.game.counterpanah == 2)
											{
												if (other.name == 'Point_2')
													ig.game.counterpanah = 3;
											}
											else
											if (ig.game.counterpanah == 3)
											{
												if (other.name == 'Point_3')
													ig.game.counterpanah = 4;
											}
											else
											if (ig.game.counterpanah == 4)
											{
												if (other.name == 'Point_4')
												{
													ig.game.counterpanah = 0;
													ig.game.jumlahactionbersih += 1;
													ig.game.jumlahprogress+=3;
													ig.game.RefreshProgress();
													ig.game.delaytouch = 5;
													ig.game.CekAction();
													ig.game.RefreshPanelTrace();
													ig.game.sortEntitiesDeferred();
													
												}
											}
											break;
										case 2 :
											if (ig.game.counterpanah == 0)
											{
												if (other.name == 'Point_3')
													ig.game.counterpanah = 1;
											}
											else
											if (ig.game.counterpanah == 1)
											{
												if (other.name == 'Point_1')
												{
													ig.game.counterpanah = 0;
													ig.game.jumlahactionbersih += 1;
													ig.game.jumlahprogress+=3;
													ig.game.RefreshProgress();
													ig.game.delaytouch = 5;
													ig.game.CekAction();
													ig.game.RefreshPanelTrace();
													ig.game.sortEntitiesDeferred();
													
												}
											}
											break;
										case 3 :
											if (ig.game.counterpanah == 0)
											{
												if (other.name == 'Point_1')
													ig.game.counterpanah = 1;
											}
											else
											if (ig.game.counterpanah == 1)
											{
												if (other.name == 'Point_3')
												{
													ig.game.counterpanah = 0;
													ig.game.jumlahactionbersih += 1;
													ig.game.jumlahprogress+=3;
													ig.game.RefreshProgress();
													ig.game.delaytouch = 5;
													ig.game.CekAction();
													ig.game.RefreshPanelTrace();
													ig.game.sortEntitiesDeferred();
													
												}
											}
											break;
									}
									break;

								case 1 :
									switch (ig.game.randomactionbersih_2)
									{
										case 1 :
											if (ig.game.counterpanah == 0)
											{
												if (other.name == 'Point_4')
													ig.game.counterpanah = 1;
											}
											if (ig.game.counterpanah == 1)
											{
												if (other.name == 'Point_1')
													ig.game.counterpanah = 2;
											}
											if (ig.game.counterpanah == 2)
											{
												if (other.name == 'Point_2')
													ig.game.counterpanah = 3;
											}
											if (ig.game.counterpanah == 3)
											{
												if (other.name == 'Point_3')
													ig.game.counterpanah = 4;
											}
											if (ig.game.counterpanah == 4)
											{
												if (other.name == 'Point_4')
												{
													ig.game.counterpanah = 0;
													ig.game.jumlahactionbersih += 1;
													ig.game.jumlahprogress+=3;
													ig.game.RefreshProgress();
													ig.game.delaytouch = 5;
													ig.game.CekAction();
													ig.game.RefreshPanelTrace();
													ig.game.sortEntitiesDeferred();
													
												}
											}
											break;
										case 2 :
											if (ig.game.counterpanah == 0)
											{
												if (other.name == 'Point_3')
													ig.game.counterpanah = 1;
											}
											if (ig.game.counterpanah == 1)
											{
												if (other.name == 'Point_1')
												{
													ig.game.counterpanah = 0;
													ig.game.jumlahactionbersih += 1;
													ig.game.jumlahprogress+=3;
													ig.game.RefreshProgress();
													ig.game.delaytouch = 5;
													ig.game.CekAction();
													ig.game.RefreshPanelTrace();
													ig.game.sortEntitiesDeferred();
													
												}
											}
											break;
										case 3 :
											if (ig.game.counterpanah == 0)
											{
												if (other.name == 'Point_1')
													ig.game.counterpanah = 1;
											}
											if (ig.game.counterpanah == 1)
											{
												if (other.name == 'Point_3')
												{
													ig.game.counterpanah = 0;
													ig.game.jumlahactionbersih += 1;
													ig.game.jumlahprogress+=3;
													ig.game.RefreshProgress();
													ig.game.delaytouch = 5;
													ig.game.CekAction();
													ig.game.RefreshPanelTrace();
													ig.game.sortEntitiesDeferred();
													
												}
											}
											break;
									}
									break;

								case 2 :
									switch (ig.game.randomactionbersih_3)
									{
										case 1 :
											if (ig.game.counterpanah == 0)
											{
												if (other.name == 'Point_4')
													ig.game.counterpanah = 1;
											}
											if (ig.game.counterpanah == 1)
											{
												if (other.name == 'Point_1')
													ig.game.counterpanah = 2;
											}
											if (ig.game.counterpanah == 2)
											{
												if (other.name == 'Point_2')
													ig.game.counterpanah = 3;
											}
											if (ig.game.counterpanah == 3)
											{
												if (other.name == 'Point_3')
													ig.game.counterpanah = 4;
											}
											if (ig.game.counterpanah == 4)
											{
												if (other.name == 'Point_4')
												{
													ig.game.counterpanah = 0;
													ig.game.jumlahactionbersih += 1;
													ig.game.jumlahprogress+=4;
													ig.game.RefreshProgress();
													ig.game.delaytouch = 5;
													ig.game.CekAction();
													ig.game.RefreshPanelTrace();
													ig.game.sortEntitiesDeferred();
													
												}
											}
											break;
										case 2 :
											if (ig.game.counterpanah == 0)
											{
												if (other.name == 'Point_3')
													ig.game.counterpanah = 1;
											}
											if (ig.game.counterpanah == 1)
											{
												if (other.name == 'Point_1')
												{
													ig.game.counterpanah = 0;
													ig.game.jumlahactionbersih += 1;
													ig.game.jumlahprogress+=4;
													ig.game.RefreshProgress();
													ig.game.delaytouch = 5;
													ig.game.CekAction();
													ig.game.RefreshPanelTrace();
													ig.game.sortEntitiesDeferred();
													
												}
											}
											break;
										case 3 :
											if (ig.game.counterpanah == 0)
											{
												if (other.name == 'Point_1')
													ig.game.counterpanah = 1;
											}
											if (ig.game.counterpanah == 1)
											{
												if (other.name == 'Point_3')
												{
													ig.game.counterpanah = 0;
													ig.game.jumlahactionbersih += 1;
													ig.game.jumlahprogress+=4;
													ig.game.RefreshProgress();
													ig.game.delaytouch = 5;
													ig.game.CekAction();
													ig.game.RefreshPanelTrace();
													ig.game.sortEntitiesDeferred();
													
												}
											}
											break;
									}
									break;
							}
							
							
						}
					}
				}), ig.getX(1), ig.getY(1));

			ig.game.CollisionArrow_1 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.B,
					size: {x: ig.getX(37), y:ig.getY(28)},
					zIndex: 1,
					name :'Point_1',
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/collision.png', 37, 28 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.ada;
					}
				}), ig.getX(553), ig.getY(45));

			ig.game.CollisionArrow_2 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.B,
					size: {x: ig.getX(37), y:ig.getY(28)},
					zIndex: 1,
					name :'Point_2',
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/collision.png', 37, 28 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.ada;
					}
				}), ig.getX(620), ig.getY(105));

			ig.game.CollisionArrow_3 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.B,
					size: {x: ig.getX(37), y:ig.getY(28)},
					zIndex: 1,
					name :'Point_3',
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/collision.png', 37, 28 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.ada;
					}
				}), ig.getX(553), ig.getY(155));

			ig.game.CollisionArrow_4 = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.B,
					size: {x: ig.getX(37), y:ig.getY(28)},
					zIndex: 1,
					name :'Point_4',
					init: function( x, y, settings ) {
			    		this.animSheet = new ig.AnimationSheet( 'media/level/collision.png', 37, 28 );
						this.addAnim( 'ada', 1, [0] );
						this.animSheet = new ig.AnimationSheet( '', 1, 1 );
						this.addAnim( 'kosong', 1, [0] );
			    		this.parent( x, y, settings );
			    		this.currentAnim = this.anims.ada;
					}
				}), ig.getX(480), ig.getY(105));
			
			ig.game.bgPause = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(700), y:ig.getY(525)},
					zIndex: 1,
					init: function( x, y, settings ) {
	    				this.animSheet =  new ig.AnimationSheet( 'media/level/bgpause.png', ig.getX(700), ig.getY(525));
	    				this.addAnim( 'idle', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.idle;
					}
				}), ig.getX(0), ig.getY(0));

			ig.game.btnPauseResume = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(212), y:ig.getY(50)},
					zIndex: 1,
					init: function( x, y, settings ) {
	    				this.animSheet =  new ig.AnimationSheet( 'media/level/btnresume.png', ig.getX(212), ig.getY(50));
	    				this.addAnim( 'idle', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.idle;
					},
					onMouseDown:function()
					{
						ig.game.HidePause();
					}
				}), ig.getX(250), ig.getY(210));

			ig.game.btnPauseMainMenu = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(212), y:ig.getY(50)},
					zIndex: 1,
					init: function( x, y, settings ) {
	    				this.animSheet =  new ig.AnimationSheet( 'media/btnmainmenu.png', ig.getX(212), ig.getY(50));
	    				this.addAnim( 'idle', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.idle;
					},
					onMouseDown:function()
					{
						if (ig.game.sedang_pause) {
							ig.global.LevelSekarang = 1;
							ig.system.setGame(MainMenuWin);
						}
					}
				}), ig.getX(250), ig.getY(280));

			ig.game.btnPauseMoreGame = ig.game.spawnEntity( 
				ig.Entity.extend({
					type: ig.Entity.TYPE.A,
					size: {x: ig.getX(212), y:ig.getY(50)},
					zIndex: 1,
					init: function( x, y, settings ) {
	    				this.animSheet =  new ig.AnimationSheet( 'media/btnmoregame.png', ig.getX(212), ig.getY(50));
	    				this.addAnim( 'idle', 1, [0] );
	    				this.parent( x, y, settings );
		    			this.currentAnim = this.anims.idle;
					},
					onMouseDown:function()
					{
						if (ig.game.sedang_pause) {
							ig.global.openLink('http://www.girlsgogames.com/');
						}
					}
				}), ig.getX(250), ig.getY(350));
			
			ig.game.InitLevel();

			//ig.game.ShowPanelBersihinPundak();
			//ig.game.ShowPanelBenarnoDasi();
			//ig.game.ShowPanelTuangWine();
			
			//ig.game.ShowPanelSisirRambut();
			//ig.game.ShowPanelLipstickan();
			//ig.game.ShowPanelKasihMakan();
			//ig.game.ShowPanelBedakan();
			//ig.game.ShowPanelBersihMulut();
			this.sortEntitiesDeferred();
			ig.global.SudahInit=false;


		},

		InitLevel:function()
		{
			ig.game.HideAllPanel();
			ig.game.textday = 'Ngày ' + ig.global.LevelSekarang;
			ig.game.counterlevelprogress = 0;
			switch (ig.global.LevelSekarang)
			{
				case 1 :
					ig.game.counterdetik1 = 1;
					ig.game.counterdetik2 = 5;
					ig.game.countermenit = 1;
					ig.game.handicaplevel = 120;
					ig.game.counterrandompanel = ig.game.handicaplevel - 50;
					break;
				case 2 :
					ig.game.counterdetik1 = 0;
					ig.game.counterdetik2 = 0;
					ig.game.countermenit = 1;
					ig.game.handicaplevel = 100;
					ig.game.counterrandompanel = ig.game.handicaplevel - 50;
					break;
				case 3 :
					ig.game.counterdetik1 = 4;
					ig.game.counterdetik2 = 5;
					ig.game.countermenit = 0;
					ig.game.handicaplevel = 80;
					ig.game.counterrandompanel = ig.game.handicaplevel - 50;
					break;
			}
			ig.game.RefreshAnimasiCowo();
		},

		RefreshKasihMakanPiring:function()
		{
			switch (ig.game.jumlahmakan)
			{
				case 0 : ig.game.KasihMakanPiring.currentAnim = ig.game.KasihMakanPiring.anims.piring_1;	break;
				case 1 : ig.game.KasihMakanPiring.currentAnim = ig.game.KasihMakanPiring.anims.piring_2;	break;
				case 2 : ig.game.KasihMakanPiring.currentAnim = ig.game.KasihMakanPiring.anims.piring_3;	break;
				case 3 : ig.game.KasihMakanPiring.currentAnim = ig.game.KasihMakanPiring.anims.piring_4;	break;
				case 4 : ig.game.KasihMakanPiring.currentAnim = ig.game.KasihMakanPiring.anims.piring_5;	break;
				case 5 : ig.game.KasihMakanPiring.currentAnim = ig.game.KasihMakanPiring.anims.piring_6;	break;
				case 6 : ig.game.KasihMakanPiring.currentAnim = ig.game.KasihMakanPiring.anims.piring_6;	break;
			}
		},

		RefreshProgress:function()
		{
			switch (ig.game.jumlahprogress)
			{
				case 0 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_0;		break;
				case 1 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_1;		break;
				case 2 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_2;		break;
				case 3 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_3;		break;
				case 4 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_4;		break;
				case 5 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_5;		break;
				case 6 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_6;		break;
				case 7 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_7;		break;
				case 8 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_8;		break;
				case 9 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_9;		break;
				case 10 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_10;	
						if (ig.game.panelaktif == 'Lipstickan')
							ig.game.LipstickanMulut.currentAnim = ig.game.LipstickanMulut.anims.mulut_2;
						break;
				case 11 : ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_10;	break;
			}
		},

		RefreshLevelProgress:function()
		{
			switch (ig.game.counterlevelprogress)
			{
				case 1 : 
					ig.game.LevelProgress.currentAnim = ig.game.LevelProgress.anims.progress_1;
					break;
				case 2 : 
					ig.game.LevelProgress.currentAnim = ig.game.LevelProgress.anims.progress_2;
					break;
				case 3 : 
					ig.game.LevelProgress.currentAnim = ig.game.LevelProgress.anims.progress_3;
					break;
				case 4 : 
					ig.game.LevelProgress.currentAnim = ig.game.LevelProgress.anims.progress_4;
					break;
				case 5 : 
					ig.game.LevelProgress.currentAnim = ig.game.LevelProgress.anims.progress_5;
					
					break;
			}
		},

		HideAllPanel:function()
		{
			ig.game.PanelBedakan.zIndex = 1;

			ig.game.PanelBersih.zIndex = 1;
			ig.game.BersihDebu_1.zIndex = 1;
			ig.game.BersihDebu_2.zIndex = 1;
			ig.game.BersihDebu_3.zIndex = 1;
			ig.game.BersihDebu_4.zIndex = 1;
			ig.game.BersihDebu_5.zIndex = 1;

			ig.game.PanelKasihMakan.zIndex = 1;
			ig.game.KasihMakanMulut.zIndex = 1;
			ig.game.KasihMakanPiring.zIndex = 1;

			ig.game.PanelLipstickan.zIndex = 1;
			ig.game.LipstickanMulut.zIndex = 1;

			ig.game.PanelSisirRambut.zIndex = 1;
			ig.game.SisirRambut_1.zIndex = 1;
			ig.game.SisirRambut_2.zIndex = 1;
			ig.game.SisirRambut_3.zIndex = 1;
			ig.game.SisirRambut_4.zIndex = 1;

			ig.game.PanelTrace.zIndex = 1;
			ig.game.TraceArrow_1.zIndex = 1;
			ig.game.TraceArrow_2.zIndex = 1;
			ig.game.TraceArrow_3.zIndex = 1;
			
			ig.game.Progress.zIndex = 1;
			ig.game.sortEntitiesDeferred();
		},

		RefreshPanelTrace:function()
		{
			ig.game.TraceArrow_1.zIndex = 1;
			ig.game.TraceArrow_2.zIndex = 1;
			ig.game.TraceArrow_3.zIndex = 1;
			
			switch (ig.game.jumlahactionbersih)
			{
				case 0 :
					switch (ig.game.randomactionbersih_1)
					{
						case 1 :	ig.game.TraceArrow_1.zIndex = 14;
									ig.game.TraceArrow_1.currentAnim = ig.game.TraceArrow_1.anims.ada;
									break;
						case 2 :	ig.game.TraceArrow_2.zIndex = 14;
									ig.game.TraceArrow_2.currentAnim = ig.game.TraceArrow_2.anims.ada;
									break;
						case 3 :	ig.game.TraceArrow_3.zIndex = 14;
									ig.game.TraceArrow_3.currentAnim = ig.game.TraceArrow_3.anims.ada;
									break;
					}
					
					break;
				case 1 :
					switch (ig.game.randomactionbersih_2)
					{
						case 1 :	ig.game.TraceArrow_1.zIndex = 14;
									ig.game.TraceArrow_1.currentAnim = ig.game.TraceArrow_1.anims.ada;
									break;
						case 2 :	ig.game.TraceArrow_2.zIndex = 14;
									ig.game.TraceArrow_2.currentAnim = ig.game.TraceArrow_2.anims.ada;
									break;
						case 3 :	ig.game.TraceArrow_3.zIndex = 14;
									ig.game.TraceArrow_3.currentAnim = ig.game.TraceArrow_3.anims.ada;
									break;
					}
					
					break;
				case 2 :
					switch (ig.game.randomactionbersih_3)
					{
						case 1 :	ig.game.TraceArrow_1.zIndex = 14;
									ig.game.TraceArrow_1.currentAnim = ig.game.TraceArrow_1.anims.ada;
									break;
						case 2 :	ig.game.TraceArrow_2.zIndex = 14;
									ig.game.TraceArrow_2.currentAnim = ig.game.TraceArrow_2.anims.ada;
									break;
						case 3 :	ig.game.TraceArrow_3.zIndex = 14;
									ig.game.TraceArrow_3.currentAnim = ig.game.TraceArrow_3.anims.ada;
									break;
					}
					break;
				case 3 :
					switch (ig.game.panelaktif)
					{
						case 'BersihinPundak' 	:	
							ig.game.HidePanelBersihinPundak();	
							ig.game.counterlevelprogress += 1;
							ig.game.RefreshLevelProgress();
							break;
						case 'TuangWine' 		:	
							ig.game.HidePanelTuangWine();		
							ig.game.counterlevelprogress += 1;
							ig.game.RefreshLevelProgress();
							break;
						case 'BenarnoDasi'		 :	
							ig.game.HidePanelBenarnoDasi();		
							ig.game.counterlevelprogress += 1;
							ig.game.RefreshLevelProgress();
							break;
					}
					break;
			}

		},

		ShowPanelBersihinPundak:function()
		{
			ig.game.sedangpanel = true;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.ada;
			ig.game.counterpanah = 0;
			ig.game.mousepointeractive = true;
			ig.game.PanelTrace.zIndex = 12;
			ig.game.PanelTrace.currentAnim = ig.game.PanelTrace.anims.ada;
			ig.game.panelaktif = 'BersihinPundak';
			ig.game.randomactionbersih_1 = Math.floor(Math.random() * 3 + 1);
			ig.game.randomactionbersih_2 = Math.floor(Math.random() * 3 + 1);
			ig.game.randomactionbersih_3 = Math.floor(Math.random() * 3 + 1);
			ig.game.jumlahactionbersih = 0;
			ig.game.Progress.zIndex = 13;
			ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_0;
			ig.game.jumlahprogress = 0;
			ig.game.RefreshPanelTrace();
			ig.game.RefreshAnimasiCowo();
			ig.game.sortEntitiesDeferred();
		},

		HidePanelBersihinPundak:function()
		{
			ig.game.sedangpanel=false;
			ig.game.counterrandompanel = 0;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.kosong;
			ig.game.TextGoodJob.currentAnim = ig.game.TextGoodJob.anims.ada;
			ig.game.framegoodjob = 1;
			ig.game.PanelTrace.zIndex = 1;
			ig.game.panelaktif = '';
			ig.game.Progress.zIndex = 1;
			ig.game.jumlahprogress = 0;
			ig.game.sortEntitiesDeferred();
		},

		ShowPanelTuangWine:function()
		{
			ig.game.sedangpanel = true;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.ada;
			ig.game.counterpanah = 0;
			ig.game.mousepointeractive = true;
			ig.game.PanelTrace.zIndex = 12;
			ig.game.PanelTrace.currentAnim = ig.game.PanelTrace.anims.ada;
			ig.game.panelaktif = 'TuangWine';
			ig.game.randomactionbersih_1 = Math.floor(Math.random() * 3 + 1);
			ig.game.randomactionbersih_2 = Math.floor(Math.random() * 3 + 1);
			ig.game.randomactionbersih_3 = Math.floor(Math.random() * 3 + 1);
			ig.game.jumlahactionbersih = 0;
			ig.game.Progress.zIndex = 13;
			ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_0;
			ig.game.jumlahprogress = 0;
			ig.game.RefreshPanelTrace();
			ig.game.RefreshAnimasiCowo();
			ig.game.sortEntitiesDeferred();
		},

		HidePanelTuangWine:function()
		{
			ig.game.sedangpanel=false;
			ig.game.counterrandompanel = 0;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.kosong;
			ig.game.TextGoodJob.currentAnim = ig.game.TextGoodJob.anims.ada;
			ig.game.framegoodjob = 1;
			ig.game.PanelTrace.zIndex = 1;
			ig.game.panelaktif = '';
			ig.game.Progress.zIndex = 1;
			ig.game.jumlahprogress = 0;
			ig.game.sortEntitiesDeferred();
		},

		ShowPanelBenarnoDasi:function()
		{
			ig.game.sedangpanel = true;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.ada;
			ig.game.counterpanah = 0;
			ig.game.mousepointeractive = true;
			ig.game.PanelTrace.zIndex = 12;
			ig.game.PanelTrace.currentAnim = ig.game.PanelTrace.anims.ada;
			ig.game.panelaktif = 'BenarnoDasi';
			ig.game.randomactionbersih_1 = Math.floor(Math.random() * 3 + 1);
			ig.game.randomactionbersih_2 = Math.floor(Math.random() * 3 + 1);
			ig.game.randomactionbersih_3 = Math.floor(Math.random() * 3 + 1);
			ig.game.jumlahactionbersih = 0;
			ig.game.Progress.zIndex = 13;
			ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_0;
			ig.game.jumlahprogress = 0;
			ig.game.RefreshPanelTrace();
			ig.game.RefreshAnimasiCowo();
			ig.game.sortEntitiesDeferred();
		},

		HidePanelBenarnoDasi:function()
		{
			ig.game.sedangpanel=false;
			ig.game.counterrandompanel = 0;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.kosong;
			ig.game.TextGoodJob.currentAnim = ig.game.TextGoodJob.anims.ada;
			ig.game.framegoodjob = 1;
			ig.game.PanelTrace.zIndex = 1;
			ig.game.panelaktif = '';
			ig.game.Progress.zIndex = 1;
			ig.game.jumlahprogress = 0;
			ig.game.sortEntitiesDeferred();
		},

		ShowPanelSisirRambut:function()
		{
			ig.game.sedangpanel = true;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.ada;
			ig.game.PanelSisirRambut.zIndex = 12;
			ig.game.PanelSisirRambut.currentAnim = ig.game.PanelSisirRambut.anims.ada;
			ig.game.SisirRambut_1.zIndex = 14;
			ig.game.SisirRambut_1.currentAnim = ig.game.SisirRambut_1.anims.ada;
			ig.game.SisirRambut_2.zIndex = 15;
			ig.game.SisirRambut_2.currentAnim = ig.game.SisirRambut_2.anims.ada;
			ig.game.SisirRambut_3.zIndex = 16;
			ig.game.SisirRambut_3.currentAnim = ig.game.SisirRambut_3.anims.ada;
			ig.game.SisirRambut_4.zIndex = 17;
			ig.game.SisirRambut_4.currentAnim = ig.game.SisirRambut_4.anims.ada;
			ig.game.jumlahrambut = 0;
			ig.game.panelaktif = 'SisirRambut';
			ig.game.RefreshAnimasiCowo();
			ig.game.sortEntitiesDeferred();
		},

		HidePanelSisirRambut:function()
		{
			ig.game.sedangpanel=false;
			ig.game.counterrandompanel = 0;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.kosong;
			ig.game.TextGoodJob.currentAnim = ig.game.TextGoodJob.anims.ada;
			ig.game.framegoodjob = 1;
			ig.game.PanelSisirRambut.zIndex = 1;
			ig.game.SisirRambut_1.zIndex = 1;
			ig.game.SisirRambut_2.zIndex = 1;
			ig.game.SisirRambut_3.zIndex = 1;
			ig.game.SisirRambut_4.zIndex = 1;
			ig.game.jumlahrambut = 0;
			ig.game.panelaktif = '';
			ig.game.sortEntitiesDeferred();
		},

		ShowPanelLipstickan:function()
		{
			ig.game.sedangpanel = true;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.ada;
			ig.game.PanelLipstickan.zIndex = 12;
			ig.game.PanelLipstickan.currentAnim = ig.game.PanelLipstickan.anims.ada;
			ig.game.LipstickanMulut.zIndex = 13;
			ig.game.LipstickanMulut.currentAnim = ig.game.LipstickanMulut.anims.mulut_1;
			ig.game.Progress.zIndex = 13;
			ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_0;
			ig.game.jumlahprogress = 0;
			ig.game.panelaktif = 'Lipstickan';
			ig.game.RefreshAnimasiCowo();
			ig.game.sortEntitiesDeferred();
		},

		HidePanelLipstickan:function()
		{
			ig.game.sedangpanel=false;
			ig.game.counterrandompanel = 0;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.kosong;
			ig.game.TextGoodJob.currentAnim = ig.game.TextGoodJob.anims.ada;
			ig.game.framegoodjob = 1;
			ig.game.PanelLipstickan.zIndex = 1;
			ig.game.LipstickanMulut.zIndex = 1;
			ig.game.Progress.zIndex = 1;
			ig.game.jumlahprogress = 0;
			ig.game.panelaktif = '';
			ig.game.sortEntitiesDeferred();
		},

		ShowPanelKasihMakan:function()
		{
			ig.game.sedangpanel = true;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.ada;
			ig.game.PanelKasihMakan.zIndex = 12;
			ig.game.PanelKasihMakan.currentAnim = ig.game.PanelKasihMakan.anims.ada;
			ig.game.KasihMakanMulut.zIndex = 13;
			ig.game.KasihMakanMulut.currentAnim = ig.game.KasihMakanMulut.anims.ada;
			ig.game.KasihMakanPiring.zIndex = 14;
			ig.game.KasihMakanPiring.currentAnim = ig.game.KasihMakanPiring.anims.piring_1;
			ig.game.jumlahmakan = 0;
			ig.game.panelaktif = 'KasihMakan';
			ig.game.RefreshAnimasiCowo();
			ig.game.sortEntitiesDeferred();
		},

		HidePanelKasihMakan:function()
		{
			ig.game.sedangpanel=false;
			ig.game.counterrandompanel = 0;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.kosong;
			ig.game.TextGoodJob.currentAnim = ig.game.TextGoodJob.anims.ada;
			ig.game.framegoodjob = 1;
			ig.game.PanelKasihMakan.zIndex = 1;
			ig.game.KasihMakanMulut.zIndex = 1;
			ig.game.KasihMakanPiring.zIndex = 1;
			ig.game.jumlahmakan = 0;
			ig.game.panelaktif = '';
			ig.game.sortEntitiesDeferred();
		},

		ShowPanelBedakan:function()
		{
			ig.game.sedangpanel = true;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.ada;
			ig.game.PanelBedakan.zIndex = 12;
			ig.game.Progress.zIndex = 13;
			ig.game.PanelBedakan.currentAnim = ig.game.PanelBedakan.anims.ada;
			ig.game.Progress.currentAnim = ig.game.Progress.anims.progress_0;
			ig.game.jumlahprogress = 0;
			ig.game.panelaktif = 'Bedakan';
			ig.game.RefreshAnimasiCowo();
			ig.game.sortEntitiesDeferred();
		},

		HidePanelBedakan:function()
		{
			ig.game.sedangpanel=false;
			ig.game.counterrandompanel = 0;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.kosong;
			ig.game.TextGoodJob.currentAnim = ig.game.TextGoodJob.anims.ada;
			ig.game.framegoodjob = 1;
			ig.game.PanelBedakan.zIndex = 1;
			ig.game.Progress.zIndex = 1;
			ig.game.jumlahprogress = 0;
			ig.game.panelaktif = '';
			ig.game.sortEntitiesDeferred();
		},

		ShowPanelBersihMulut:function()
		{
			ig.game.sedangpanel = true;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.ada;
			ig.game.PanelBersih.zIndex = 12;
			ig.game.BersihDebu_1.zIndex = 13;
			ig.game.BersihDebu_2.zIndex = 13;
			ig.game.BersihDebu_3.zIndex = 13;
			ig.game.BersihDebu_4.zIndex = 13;
			ig.game.BersihDebu_5.zIndex = 13;
			ig.game.PanelBersih.currentAnim = ig.game.PanelBersih.anims.ada;
			ig.game.BersihDebu_1.currentAnim = ig.game.BersihDebu_1.anims.ada;
			ig.game.BersihDebu_2.currentAnim = ig.game.BersihDebu_2.anims.ada;
			ig.game.BersihDebu_3.currentAnim = ig.game.BersihDebu_3.anims.ada;
			ig.game.BersihDebu_4.currentAnim = ig.game.BersihDebu_4.anims.ada;
			ig.game.BersihDebu_5.currentAnim = ig.game.BersihDebu_5.anims.ada;
			ig.game.jumlahdebusudah = 0;
			ig.game.panelaktif = 'BersihMulut';
			ig.game.RefreshAnimasiCowo();
			ig.game.sortEntitiesDeferred();
		},

		HidePanelBersihMulut:function()
		{
			ig.game.sedangpanel=false;
			ig.game.counterrandompanel = 0;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.kosong;
			ig.game.TextGoodJob.currentAnim = ig.game.TextGoodJob.anims.ada;
			ig.game.framegoodjob = 1;
			ig.game.PanelBersih.currentAnim = ig.game.PanelBersih.anims.kosong;
			ig.game.BersihDebu_1.currentAnim = ig.game.BersihDebu_1.anims.kosong;
			ig.game.BersihDebu_2.currentAnim = ig.game.BersihDebu_2.anims.kosong;
			ig.game.BersihDebu_3.currentAnim = ig.game.BersihDebu_3.anims.kosong;
			ig.game.BersihDebu_4.currentAnim = ig.game.BersihDebu_4.anims.kosong;
			ig.game.BersihDebu_5.currentAnim = ig.game.BersihDebu_5.anims.kosong;
			ig.game.jumlahdebusudah = 0;
			ig.game.panelaktif = '';	
		},

		ShowPanelBersihBaju:function()
		{
			ig.game.sedangpanel = true;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.ada;
			ig.game.PanelBersih.zIndex = 12;
			ig.game.BersihDebu_1.zIndex = 13;
			ig.game.BersihDebu_2.zIndex = 13;
			ig.game.BersihDebu_3.zIndex = 13;
			ig.game.BersihDebu_4.zIndex = 13;
			ig.game.BersihDebu_5.zIndex = 13;
			ig.game.PanelBersih.currentAnim = ig.game.PanelBersih.anims.ada;
			ig.game.BersihDebu_1.currentAnim = ig.game.BersihDebu_1.anims.ada;
			ig.game.BersihDebu_2.currentAnim = ig.game.BersihDebu_2.anims.ada;
			ig.game.BersihDebu_3.currentAnim = ig.game.BersihDebu_3.anims.ada;
			ig.game.BersihDebu_4.currentAnim = ig.game.BersihDebu_4.anims.ada;
			ig.game.BersihDebu_5.currentAnim = ig.game.BersihDebu_5.anims.ada;
			ig.game.jumlahdebusudah = 0;
			ig.game.panelaktif = 'BersihBaju';
			ig.game.RefreshAnimasiCowo();
			ig.game.sortEntitiesDeferred();
		},

		HidePanelBersihBaju:function()
		{
			ig.game.sedangpanel=false;
			ig.game.counterrandompanel = 0;
			ig.game.TandaSeru.currentAnim = ig.game.TandaSeru.anims.kosong;
			ig.game.TextGoodJob.currentAnim = ig.game.TextGoodJob.anims.ada;
			ig.game.framegoodjob = 1;
			ig.game.PanelBersih.currentAnim = ig.game.PanelBersih.anims.kosong;
			ig.game.BersihDebu_1.currentAnim = ig.game.BersihDebu_1.anims.kosong;
			ig.game.BersihDebu_2.currentAnim = ig.game.BersihDebu_2.anims.kosong;
			ig.game.BersihDebu_3.currentAnim = ig.game.BersihDebu_3.anims.kosong;
			ig.game.BersihDebu_4.currentAnim = ig.game.BersihDebu_4.anims.kosong;
			ig.game.BersihDebu_5.currentAnim = ig.game.BersihDebu_5.anims.kosong;
			ig.game.jumlahdebusudah = 0;
			ig.game.panelaktif = '';	
		},
		

		ShowPause:function ()
		{
			ig.game.bgPause.zIndex = 100;
			ig.game.btnPauseMainMenu.zIndex = 101;
			ig.game.btnPauseMoreGame.zIndex = 101;
			ig.game.btnPauseResume.zIndex = 101;
			ig.game.sedang_pause = true;
			ig.game.sortEntitiesDeferred();
		},

		HidePause:function()
		{
			ig.game.sedang_pause = false;
			ig.game.bgPause.zIndex = 1;
			ig.game.btnPauseMainMenu.zIndex = 1;
			ig.game.btnPauseMoreGame.zIndex = 1;
			ig.game.btnPauseResume.zIndex = 1;
			ig.game.sortEntitiesDeferred();
		},


		CekAction:function()
		{
			switch (ig.game.panelaktif)
			{
				case 'BersihMulut'	: 
					if (ig.game.jumlahdebusudah >= 5)
					{
						ig.game.HidePanelBersihMulut();	
						ig.game.counterlevelprogress += 1;
						ig.game.RefreshLevelProgress();
					}	
					break;
				case 'BersihBaju'	: 
					if (ig.game.jumlahdebusudah >= 5)
					{
						ig.game.HidePanelBersihBaju();
						ig.game.counterlevelprogress += 1;
						ig.game.RefreshLevelProgress();	
					}
						
					break;
				case 'Bedakan'	:
					if (ig.game.jumlahprogress >=11)
					{
						ig.game.HidePanelBedakan();
						ig.game.counterlevelprogress += 1;
						ig.game.RefreshLevelProgress();	
					}
					break;
				case 'KasihMakan'	:
					if (ig.game.jumlahmakan >= 6)
					{
						ig.game.HidePanelKasihMakan();
						ig.game.counterlevelprogress += 1;
						ig.game.RefreshLevelProgress();	
					}
					break;
				case 'Lipstickan'	:
					if (ig.game.jumlahprogress >=11)
					{
						ig.game.HidePanelLipstickan();
						ig.game.counterlevelprogress += 1;
						ig.game.RefreshLevelProgress();	
					}
					break;
				case 'SisirRambut'	:
					if (ig.game.jumlahrambut >= 4)
					{
						ig.game.HidePanelSisirRambut();
						ig.game.counterlevelprogress += 1;
						ig.game.RefreshLevelProgress();	
					}	
					break;
			}
		},

		AnimasiDelayTouch:function()
		{
			if (ig.game.delaytouch > 0)
			{
				ig.game.delaytouch -= 1;
			}
		},

		UpdatePosisiMousePointer:function()
		{
			if (ig.game.mousepointeractive)
			{
				ig.game.MousePointer.pos.x = ig.input.mouse.x;
				ig.game.MousePointer.pos.y = ig.input.mouse.y;
			}
			
		},

		RefreshTime:function(){
			if (ig.game.sudahselesai == false)
			{
				ig.game.counterframe+=1;
				if (ig.game.counterframe>=20)
				{
					ig.game.counterframe=0;
					ig.game.counterdetik2-=1;

					if (ig.game.counterdetik2<0)
					{
						if (ig.game.counterdetik1 > 0)
						{
							ig.game.counterdetik1 -=1;
							ig.game.counterdetik2 =9;
						}
						else
						{
							if (ig.game.countermenit > 0)
							{
								ig.game.countermenit-=1;
								ig.game.counterdetik1=5;
								ig.game.counterdetik2=9;
							}
							else
							{
								ig.game.sudahselesai = true;
								switch (ig.global.LevelSekarang)
								{
									case 1 : ig.global.ScoreLevel_1 = ig.game.counterlevelprogress;	break;
									case 2 : ig.global.ScoreLevel_2 = ig.game.counterlevelprogress;	break;
									case 3 : ig.global.ScoreLevel_3 = ig.game.counterlevelprogress;	break;
								}
								ig.system.setGame(NextLevelWin);	
							}
						}
					}
				}
				
				ig.game.texttime = ig.game.countermenit + ':' + ig.game.counterdetik1 + ig.game.counterdetik2;
				if ((ig.game.countermenit <= 0) && (ig.game.counterdetik1<=0) && (ig.game.counterdetik2 <=0))
				{
					ig.game.texttime = '0:00';
				}
			}
		},

		RefreshKasihMakanCowo:function()
		{
			switch (ig.global.JenisCowo)
			{
				case 1 : 
					switch (ig.game.jumlahmakan)
					{
						case 0 : 
							ig.game.Cowo_1_KasihMakan.currentAnim = ig.game.Cowo_1_KasihMakan.anims.kasihmakan_1;
							break;
						case 1 : 
							ig.game.Cowo_1_KasihMakan.currentAnim = ig.game.Cowo_1_KasihMakan.anims.kasihmakan_2;
							break;
						case 2 : 
							ig.game.Cowo_1_KasihMakan.currentAnim = ig.game.Cowo_1_KasihMakan.anims.kasihmakan_3;
							break;
						case 3 : 
							ig.game.Cowo_1_KasihMakan.currentAnim = ig.game.Cowo_1_KasihMakan.anims.kasihmakan_4;
							break;
						case 4 : 
							ig.game.Cowo_1_KasihMakan.currentAnim = ig.game.Cowo_1_KasihMakan.anims.kasihmakan_5;
							break;
						case 5 : 
							ig.game.Cowo_1_KasihMakan.currentAnim = ig.game.Cowo_1_KasihMakan.anims.kasihmakan_6;
							break;
					}
					break;
				case 2 : 
					switch (ig.game.jumlahmakan)
					{
						case 0 : 
							ig.game.Cowo_2_KasihMakan.currentAnim = ig.game.Cowo_2_KasihMakan.anims.kasihmakan_1;
							break;
						case 1 : 
							ig.game.Cowo_2_KasihMakan.currentAnim = ig.game.Cowo_2_KasihMakan.anims.kasihmakan_2;
							break;
						case 2 : 
							ig.game.Cowo_2_KasihMakan.currentAnim = ig.game.Cowo_2_KasihMakan.anims.kasihmakan_3;
							break;
						case 3 : 
							ig.game.Cowo_2_KasihMakan.currentAnim = ig.game.Cowo_2_KasihMakan.anims.kasihmakan_4;
							break;
						case 4 : 
							ig.game.Cowo_2_KasihMakan.currentAnim = ig.game.Cowo_2_KasihMakan.anims.kasihmakan_5;
							break;
						case 5 : 
							ig.game.Cowo_2_KasihMakan.currentAnim = ig.game.Cowo_2_KasihMakan.anims.kasihmakan_6;
							break;
					}
					break;
				case 3 : 
					switch (ig.game.jumlahmakan)
					{
						case 0 : 
							ig.game.Cowo_3_KasihMakan.currentAnim = ig.game.Cowo_3_KasihMakan.anims.kasihmakan_1;
							break;
						case 1 : 
							ig.game.Cowo_3_KasihMakan.currentAnim = ig.game.Cowo_3_KasihMakan.anims.kasihmakan_2;
							break;
						case 2 : 
							ig.game.Cowo_3_KasihMakan.currentAnim = ig.game.Cowo_3_KasihMakan.anims.kasihmakan_3;
							break;
						case 3 : 
							ig.game.Cowo_3_KasihMakan.currentAnim = ig.game.Cowo_3_KasihMakan.anims.kasihmakan_4;
							break;
						case 4 : 
							ig.game.Cowo_3_KasihMakan.currentAnim = ig.game.Cowo_3_KasihMakan.anims.kasihmakan_5;
							break;
						case 5 : 
							ig.game.Cowo_3_KasihMakan.currentAnim = ig.game.Cowo_3_KasihMakan.anims.kasihmakan_6;
							break;
					}
					break;
			}
		},

		RefreshAnimasiCowo:function()
		{
			ig.game.Cowo_1_Idle.currentAnim = ig.game.Cowo_1_Idle.anims.kosong;
			ig.game.Cowo_1_BersihinPundak.currentAnim = ig.game.Cowo_1_BersihinPundak.anims.kosong;
			ig.game.Cowo_1_TuangWine.currentAnim = ig.game.Cowo_1_TuangWine.anims.kosong;
			ig.game.Cowo_1_BenarnoDasi.currentAnim = ig.game.Cowo_1_BenarnoDasi.anims.kosong;
			ig.game.Cowo_1_Sisiran.currentAnim = ig.game.Cowo_1_Sisiran.anims.kosong;
			ig.game.Cowo_1_Lipstickan.currentAnim = ig.game.Cowo_1_Lipstickan.anims.kosong;
			ig.game.Cowo_1_KasihMakan.currentAnim = ig.game.Cowo_1_KasihMakan.anims.kosong;
			ig.game.Cowo_1_Bedakan.currentAnim = ig.game.Cowo_1_Bedakan.anims.kosong;
			ig.game.Cowo_1_BersihinMulut.currentAnim = ig.game.Cowo_1_BersihinMulut.anims.kosong;
			ig.game.Cowo_1_BersihinBaju.currentAnim = ig.game.Cowo_1_BersihinBaju.anims.kosong;

			ig.game.Cowo_2_Idle.currentAnim = ig.game.Cowo_2_Idle.anims.kosong;
			ig.game.Cowo_2_BersihinPundak.currentAnim = ig.game.Cowo_2_BersihinPundak.anims.kosong;
			ig.game.Cowo_2_TuangWine.currentAnim = ig.game.Cowo_2_TuangWine.anims.kosong;
			ig.game.Cowo_2_BenarnoDasi.currentAnim = ig.game.Cowo_2_BenarnoDasi.anims.kosong;
			ig.game.Cowo_2_Sisiran.currentAnim = ig.game.Cowo_2_Sisiran.anims.kosong;
			ig.game.Cowo_2_Lipstickan.currentAnim = ig.game.Cowo_2_Lipstickan.anims.kosong;
			ig.game.Cowo_2_KasihMakan.currentAnim = ig.game.Cowo_2_KasihMakan.anims.kosong;
			ig.game.Cowo_2_Bedakan.currentAnim = ig.game.Cowo_2_Bedakan.anims.kosong;
			ig.game.Cowo_2_BersihinMulut.currentAnim = ig.game.Cowo_2_BersihinMulut.anims.kosong;
			ig.game.Cowo_2_BersihinBaju.currentAnim = ig.game.Cowo_2_BersihinBaju.anims.kosong;

			ig.game.Cowo_3_Idle.currentAnim = ig.game.Cowo_3_Idle.anims.kosong;
			ig.game.Cowo_3_BersihinPundak.currentAnim = ig.game.Cowo_3_BersihinPundak.anims.kosong;
			ig.game.Cowo_3_TuangWine.currentAnim = ig.game.Cowo_3_TuangWine.anims.kosong;
			ig.game.Cowo_3_BenarnoDasi.currentAnim = ig.game.Cowo_3_BenarnoDasi.anims.kosong;
			ig.game.Cowo_3_Sisiran.currentAnim = ig.game.Cowo_3_Sisiran.anims.kosong;
			ig.game.Cowo_3_Lipstickan.currentAnim = ig.game.Cowo_3_Lipstickan.anims.kosong;
			ig.game.Cowo_3_KasihMakan.currentAnim = ig.game.Cowo_3_KasihMakan.anims.kosong;
			ig.game.Cowo_3_Bedakan.currentAnim = ig.game.Cowo_3_Bedakan.anims.kosong;
			ig.game.Cowo_3_BersihinMulut.currentAnim = ig.game.Cowo_3_BersihinMulut.anims.kosong;
			ig.game.Cowo_3_BersihinBaju.currentAnim = ig.game.Cowo_3_BersihinBaju.anims.kosong;


			switch (ig.global.JenisCowo)
			{
				case 1 :
					switch (ig.game.panelaktif)
					{
						case ''	:
							ig.game.Cowo_1_Idle.zIndex = 8;
							ig.game.Cowo_1_Idle.currentAnim = ig.game.Cowo_1_Idle.anims.ada;
							break;
						case 'BersihinPundak' :
							ig.game.Cowo_1_BersihinPundak.zIndex = 8;
							ig.game.Cowo_1_BersihinPundak.currentAnim = ig.game.Cowo_1_BersihinPundak.anims.ada;
							break;
						case 'TuangWine' :
							ig.game.Cowo_1_TuangWine.zIndex = 8;
							ig.game.Cowo_1_TuangWine.currentAnim = ig.game.Cowo_1_TuangWine.anims.ada;
							break;
						case 'BenarnoDasi' :
							ig.game.Cowo_1_BenarnoDasi.zIndex = 8;
							ig.game.Cowo_1_BenarnoDasi.currentAnim = ig.game.Cowo_1_BenarnoDasi.anims.ada;
							break;
						case 'SisirRambut' :
							ig.game.Cowo_1_Sisiran.zIndex = 8;
							ig.game.Cowo_1_Sisiran.currentAnim = ig.game.Cowo_1_Sisiran.anims.ada;
							break;
						case 'Lipstickan' :
							ig.game.Cowo_1_Lipstickan.zIndex = 8;
							ig.game.Cowo_1_Lipstickan.currentAnim = ig.game.Cowo_1_Lipstickan.anims.ada;
							break;
						case 'KasihMakan' :
							ig.game.Cowo_1_KasihMakan.zIndex = 8;
							ig.game.Cowo_1_KasihMakan.currentAnim = ig.game.Cowo_1_KasihMakan.anims.kasihmakan_1;
							break;
						case 'Bedakan' :
							ig.game.Cowo_1_Bedakan.zIndex = 8;
							ig.game.Cowo_1_Bedakan.currentAnim = ig.game.Cowo_1_Bedakan.anims.ada;
							break;
						case 'BersihMulut' :
							ig.game.Cowo_1_BersihinMulut.zIndex = 8;
							ig.game.Cowo_1_BersihinMulut.currentAnim = ig.game.Cowo_1_BersihinMulut.anims.ada;
							break;
						case 'BersihBaju' :
							ig.game.Cowo_1_BersihinBaju.zIndex = 8;
							ig.game.Cowo_1_BersihinBaju.currentAnim = ig.game.Cowo_1_BersihinBaju.anims.ada;
							break;
					}
					break;
				case 2 :
					switch (ig.game.panelaktif)
					{
						case ''	:
							ig.game.Cowo_2_Idle.zIndex = 8;
							ig.game.Cowo_2_Idle.currentAnim = ig.game.Cowo_2_Idle.anims.ada;
							break;
						case 'BersihinPundak' :
							ig.game.Cowo_2_BersihinPundak.zIndex = 8;
							ig.game.Cowo_2_BersihinPundak.currentAnim = ig.game.Cowo_2_BersihinPundak.anims.ada;
							break;
						case 'TuangWine' :
							ig.game.Cowo_2_TuangWine.zIndex = 8;
							ig.game.Cowo_2_TuangWine.currentAnim = ig.game.Cowo_2_TuangWine.anims.ada;
							break;
						case 'BenarnoDasi' :
							ig.game.Cowo_2_BenarnoDasi.zIndex = 8;
							ig.game.Cowo_2_BenarnoDasi.currentAnim = ig.game.Cowo_2_BenarnoDasi.anims.ada;
							break;
						case 'SisirRambut' :
							ig.game.Cowo_2_Sisiran.zIndex = 8;
							ig.game.Cowo_2_Sisiran.currentAnim = ig.game.Cowo_2_Sisiran.anims.ada;
							break;
						case 'Lipstickan' :
							ig.game.Cowo_2_Lipstickan.zIndex = 8;
							ig.game.Cowo_2_Lipstickan.currentAnim = ig.game.Cowo_2_Lipstickan.anims.ada;
							break;
						case 'KasihMakan' :
							ig.game.Cowo_2_KasihMakan.zIndex = 8;
							ig.game.Cowo_2_KasihMakan.currentAnim = ig.game.Cowo_2_KasihMakan.anims.kasihmakan_1;
							break;
						case 'Bedakan' :
							ig.game.Cowo_2_Bedakan.zIndex = 8;
							ig.game.Cowo_2_Bedakan.currentAnim = ig.game.Cowo_2_Bedakan.anims.ada;
							break;
						case 'BersihMulut' :
							ig.game.Cowo_2_BersihinMulut.zIndex = 8;
							ig.game.Cowo_2_BersihinMulut.currentAnim = ig.game.Cowo_2_BersihinMulut.anims.ada;
							break;
						case 'BersihBaju' :
							ig.game.Cowo_2_BersihinBaju.zIndex = 8;
							ig.game.Cowo_2_BersihinBaju.currentAnim = ig.game.Cowo_2_BersihinBaju.anims.ada;
							break;
					}
					break;
				case 3 :

					switch (ig.game.panelaktif)
					{
						case ''	:
							ig.game.Cowo_3_Idle.zIndex = 8;
							ig.game.Cowo_3_Idle.currentAnim = ig.game.Cowo_3_Idle.anims.ada;

							break;
						case 'BersihinPundak' :
							ig.game.Cowo_3_BersihinPundak.zIndex = 8;
							ig.game.Cowo_3_BersihinPundak.currentAnim = ig.game.Cowo_3_BersihinPundak.anims.ada;
							break;
						case 'TuangWine' :
							ig.game.Cowo_3_TuangWine.zIndex = 8;
							ig.game.Cowo_3_TuangWine.currentAnim = ig.game.Cowo_3_TuangWine.anims.ada;
							break;
						case 'BenarnoDasi' :
							ig.game.Cowo_3_BenarnoDasi.zIndex = 8;
							ig.game.Cowo_3_BenarnoDasi.currentAnim = ig.game.Cowo_3_BenarnoDasi.anims.ada;
							break;
						case 'SisirRambut' :
							ig.game.Cowo_3_Sisiran.zIndex = 8;
							ig.game.Cowo_3_Sisiran.currentAnim = ig.game.Cowo_3_Sisiran.anims.ada;
							break;
						case 'Lipstickan' :
							ig.game.Cowo_3_Lipstickan.zIndex = 8;
							ig.game.Cowo_3_Lipstickan.currentAnim = ig.game.Cowo_3_Lipstickan.anims.ada;
							break;
						case 'KasihMakan' :
							ig.game.Cowo_3_KasihMakan.zIndex = 8;
							ig.game.Cowo_3_KasihMakan.currentAnim = ig.game.Cowo_3_KasihMakan.anims.kasihmakan_1;
							break;
						case 'Bedakan' :
							ig.game.Cowo_3_Bedakan.zIndex = 8;
							ig.game.Cowo_3_Bedakan.currentAnim = ig.game.Cowo_3_Bedakan.anims.ada;
							break;
						case 'BersihMulut' :
							ig.game.Cowo_3_BersihinMulut.zIndex = 8;
							ig.game.Cowo_3_BersihinMulut.currentAnim = ig.game.Cowo_3_BersihinMulut.anims.ada;
							break;
						case 'BersihBaju' :
							ig.game.Cowo_3_BersihinBaju.zIndex = 8;
							ig.game.Cowo_3_BersihinBaju.currentAnim = ig.game.Cowo_3_BersihinBaju.anims.ada;
							break;
					}
					break;
			}
			ig.game.sortEntitiesDeferred();
		},

		AnimasiFrameGoodJob:function()
		{
			if (ig.game.framegoodjob > 0)
			{
				ig.game.framegoodjob +=1;
				if (ig.game.framegoodjob >=40)
				{
					ig.game.framegoodjob = 0;
					ig.game.TextGoodJob.currentAnim = ig.game.TextGoodJob.anims.kosong;

					ig.game.RefreshAnimasiCowo();
					if (ig.game.counterlevelprogress >=5)
					{
						ig.game.sudahselesai = true;
						switch (ig.global.LevelSekarang)
						{
							case 1 : ig.global.ScoreLevel_1 = ig.game.counterlevelprogress;	break;
							case 2 : ig.global.ScoreLevel_2 = ig.game.counterlevelprogress;	break;
							case 3 : ig.global.ScoreLevel_3 = ig.game.counterlevelprogress;	break;
						}
						ig.system.setGame(NextLevelWin);	
					}
					
				}
			}
		},

		AnimasiSpawnPanel:function()
		{
			if (ig.game.sedangpanel == false)
			{
				ig.game.counterrandompanel += 1;
				if (ig.game.counterrandompanel >= ig.game.handicaplevel)
				{
					ig.game.counterrandompanel = 0;
					ig.game.randompanel = Math.floor(Math.random() * 9 + 1);
					//ig.game.randompanel = 6;
					switch (ig.game.randompanel)
					{
						case 1 : ig.game.ShowPanelBedakan();			break;
						case 2 : ig.game.ShowPanelLipstickan();			break;
						case 3 : ig.game.ShowPanelBersihMulut();		break;
						case 4 : ig.game.ShowPanelKasihMakan();			break;
						case 5 : ig.game.ShowPanelSisirRambut();		break;
						case 6 : ig.game.ShowPanelBenarnoDasi();		break;
						case 7 : ig.game.ShowPanelTuangWine();			break;
						case 8 : ig.game.ShowPanelBersihinPundak();		break;
						case 9 : ig.game.ShowPanelBersihBaju();			break;
					}
				}
			}
		},

		update: function() {
			// Update all entities and backgroundMaps
			if (this.loader == null)
			{
				this.parent();
				ig.game.btnLogo.fireMouseDown();
				
				ig.game.btnPauseMainMenu.fireMouseDown();
				ig.game.btnPauseResume.fireMouseDown();
				ig.game.btnPauseMoreGame.fireMouseDown();
				if (ig.game.sedang_pause == false)
				{
					ig.game.AnimasiSpawnPanel();
					ig.game.RefreshTime();
					ig.game.AnimasiFrameGoodJob();
					ig.game.UpdatePosisiMousePointer();
					ig.game.AnimasiDelayTouch();
					if (ig.game.delaytouch <= 0)
					{
						ig.game.SisirRambut_1.fireMouseDown();
						ig.game.SisirRambut_2.fireMouseDown();
						ig.game.SisirRambut_3.fireMouseDown();
						ig.game.SisirRambut_4.fireMouseDown();
						ig.game.LipstickanMulut.fireMouseDown();
						ig.game.KasihMakanMulut.fireMouseDown();
						ig.game.PanelBedakan.fireMouseDown();
						ig.game.BersihDebu_1.fireMouseDown();
						ig.game.BersihDebu_2.fireMouseDown();
						ig.game.BersihDebu_3.fireMouseDown();
						ig.game.BersihDebu_4.fireMouseDown();
						ig.game.BersihDebu_5.fireMouseDown();
					}
					
					ig.game.btnPause.fireMouseDown();
					ig.game.btnSound.fireMouseDown();

					
				}
				
			}
			
		},

		
		draw: function() {
			if (this.loader==null){
				this.parent();

				//if (ig.game.sedang_pause == false)
				//{	
					this.font_time.draw(ig.game.texttime, ig.getX(640), ig.getY(510), ig.Font.ALIGN.CENTER);
					this.font_time.draw(ig.game.textday, ig.getX(350), ig.getY(25), ig.Font.ALIGN.CENTER);
				//}
			}
			
		}

	});


});
