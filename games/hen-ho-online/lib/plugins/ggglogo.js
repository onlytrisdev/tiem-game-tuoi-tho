ig.module(
	'plugins.ggglogo'
)
.requires(
	'impact.entity'
)

.defines(function() {
	
	GGGLogo = ig.Entity.extend({
		ignorePause:true,
		checkAgainst: ig.Entity.TYPE.B,
		//size:{x:158, y:65},
		size:{x:1, y:1},
		flag:false,
		
		logo:null,
		//logo:new ig.Image("media/credits/ggg_new.png"),
		//animSheet: new ig.AnimationSheet( 'media/credits/ggg_new.png', ig.getX(115), ig.getY(71)),

		init: function( x, y, settings ) {
			//this.addAnim( 'idle', 1, [0] );
			this.parent( x, y, settings );
		},

		onMouseDown:function(){
			ig.global.openLink(ig.global.gggLink);
		},

		update:function() {
			if( ig.global.APIready == true && !this.flag && ig.global.gggLogoURL != "") {
               this.logo = new ig.Image(ig.global.gggLogoURL);
               this.size.x = this.logo.width;
               this.size.y = this.logo.height;
               //console.log("width image : " + this.logo.width + " - " + this.logo.height)
               this.flag = true;
            }
		},

		draw:function() {
			this.parent();
			if (this.logo)
				this.logo.draw(this.pos.x, this.pos.y);
		}
	});
});

