ig.module(
  'game.gamecredit'
)
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
  	gamecredit = ig.Game.extend({
  		font: new ig.Font( '', 30, null, null, '#6D0000','center', 4, true, true, "#FFF387"),
  		init:function() {
  			ig.resources = [];
			ig.ready = false;

			ig.input.initMouse();
  			ig.input.bind( ig.KEY.MOUSE1, 'click');
  			
  			//create the bg
			this.mBg =  this.spawnEntity(Bg, 0, 0,
	  			{	size:{x:700, y:525},
					animSheet:new ig.AnimationSheet( "media/bg_credit.png", 700, 525),
					onMouseUp:function(){
						ig.system.setGame(mainmenuwin);
					}
			  	}
			);
			this.mBg.addAnim("idle",1,[0]);

			createLogo(570,10);
			//load the resources
			ig.ready = true;
			// Start the custom preloader with the captured resources
			this.loader = new IntermediateLoader2( null, ig.resources, this.onPreloaded );
			this.loader.load();
		},

		draw:function() {if (this.loader == null) {this.parent();}},

		update:function() {this.parent();},

		onPreloaded:function() {console.log("credit");}
	});
});
