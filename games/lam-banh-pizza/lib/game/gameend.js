ig.module('game.gameend')

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
	gameend = ig.Game.extend({
		font: new ig.Font( '', 30, null, null, '#6D0000','center', 4, true, true, "#FFF387"),
		init:function() {
			ig.resources = [];
			ig.ready = false;
			ig.input.initMouse();
			ig.input.bind( ig.KEY.MOUSE1, 'click');
			this.items_on= [];

			// create the bg
			this.mBg =  this.spawnEntity(Bg_noclick, 0, 0);
			this.mBg.animSheet= new ig.AnimationSheet( "media/bg_end.png", 700, 525)
			this.mBg.addAnim("idle",1,[0]);

			//=====Pizza
			var temp= this.spawnEntity(Bg_noclick, 35, 70, {
				animSheet: new ig.AnimationSheet("media/pizza.png", 389,338)});
			temp.addAnim("idle",1,[0]);
			//=====
			i=0; for(i=0;i<ig.global.stickers.length;i++){
				var temp= this.spawnEntity(Bg_noclick, ig.global.posisiX[i]+35, ig.global.posisiY[i]+70);
				temp.animSheet= new ig.AnimationSheet("media/stick_"+ig.global.stickers[i].nama+".png", ig.global.stickers[i].x, ig.global.stickers[i].y);
				temp.addAnim("idle",1,[0]);
			}
			//=====
			this.btnPlayAgain= this.spawnEntity(Bg, 270, 450,{
				size:{x:215, y:63},
				animSheet:new ig.AnimationSheet("media/btn_playagain.png", 215,63),
				onMouseUp:function(){
					ig.system.setGame(mainmenuwin);
				}
			});
			this.btnPlayAgain.addAnim("idle",1,[0]);
			//=====
			/*this.btnMore= this.spawnEntity( GGGMore.extend(
				{	zIndex:999,
					moreGameURL:"media/btn_more.png",
					moreGameWidth:253,
					moreGameHeight:63
				}), 10, 450);*/

			this.btnMore= this.spawnEntity(Bg, 10, 450,{
				size:{x:253, y:63},
				animSheet:new ig.AnimationSheet("media/btn_more.png", 253,63),
				onMouseUp:function(){
					window.open( 'http://www.localhost', '_blank' )
					
				}
			});
			this.btnMore.addAnim("idle",1,[0]);
			//=====
			createSound(600,10,88,76);
			createLogo(10,5);
			// load the resources
			ig.ready = true;
			// Start the custom preloader with the captured resources
			this.loader = new IntermediateLoader2( null, ig.resources, this.onPreloaded );
			this.loader.load();
		},

		draw:function() {if (this.loader == null) {this.parent();}},

		update:function() {if (this.loader == null) {this.parent();}},

		onPreloaded:function() {console.log("gameend");}
	});
});