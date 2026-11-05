ig.module('game.mainmenuwin')

.requires(
	'impact.game',
	'impact.font',
	'impact.sound',
	'impact.image',
	'impact.entity',
	'plugins.button',
	'plugins.tween',
	'plugins.myentity',
	'plugins.bg',
	'plugins.bg_noclick'
)

.defines(function() {
	mainmenuwin = ig.Game.extend({
		font: new ig.Font( '', 30, null, null, '#6D0000','center', 4, true, true, "#FFF387"),
		init:function() {
			ig.resources = [];
			ig.ready = false;

			dummyImages = [
				new ig.Image( 'media/btn_sound_off.png' ),
				new ig.Image( 'media/btn_sound_on.png' ),
				new ig.Image( 'media/btn_play.png' ),
				new ig.Image( 'media/btn_more.png' ),
				new ig.Image( 'media/btn_credit.png' ),
				new ig.Image( 'media/bg_menu.png' )
			];

			ig.input.initMouse();
			ig.input.bind( ig.KEY.MOUSE1, 'click');

			//create the bg
			this.mBg =  this.spawnEntity(Bg_noclick,0,0,
				{animSheet:new ig.AnimationSheet("media/bg_menu.png", 700, 525)});
			this.mBg.addAnim("idle",1,[0]);
			//=====
			this.mBtnPlay= this.spawnEntity(Bg, 500, 280,
				{	size:{x:120, y:63},
					animSheet:new ig.AnimationSheet("media/btn_play.png", 120, 63),
					onMouseUp:function(){
                         
						ig.system.setGame(gameplay1);
					}
				});
			this.mBtnPlay.addAnim("idle",1,[0]);
			//=====
			// this.mBtnMore= this.spawnEntity( GGGMore.extend(
			// 	{	zIndex:999,
			// 		moreGameURL:"media/btn_more.png",
			// 		moreGameWidth:253,
			// 		moreGameHeight:63
			// 	}), 440, 350);
			this.mBtnMore= this.spawnEntity(Bg, 440, 350,
				{	size:{x:120, y:63},
					animSheet:new ig.AnimationSheet("media/btn_more.png", 253, 63),
					onMouseUp:function(){
						window.open( 'http://www.localhost', '_blank' )
						
					}
				});
			this.mBtnMore.addAnim("idle",1,[0]);
			//=====
			this.mBtnCredit= this.spawnEntity(Bg, 480, 420,
				{	size:{x:168, y:63},
					animSheet:new ig.AnimationSheet("media/btn_credit.png", 168, 63),
					onMouseUp:function(){
						ig.system.setGame(gamecredit);	
					}
				});
			this.mBtnCredit.addAnim("idle",1,[0]);
			//=====
			createSound(10,10,88,76);
			createLogo(20,410);
			// load the resources
			ig.ready = true;
			// Start the custom preloader with the captured resources
			this.loader = new IntermediateLoader2( null, ig.resources, this.onPreloaded );
			this.loader.load();
		},

		draw:function() {if (this.loader == null) {this.parent();}},

		update:function() {
			this.parent();
			if (ig.global.SOUND==0){
	  			ig.global.BGM.pause();
	  		}
		},

		onPreloaded:function() {console.log("mainmenu");}
	});
});