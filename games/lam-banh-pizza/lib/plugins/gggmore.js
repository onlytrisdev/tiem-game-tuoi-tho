ig.module('plugins.gggmore')

.requires(
	'impact.entity'
)

.defines(function() {
	
	GGGMore = ig.Entity.extend({
		ignorePause:true,
		checkAgainst: ig.Entity.TYPE.B,
		
		moreGameURL:"media/btn_more.png",
		moreGameWidth:0,
		moreGameHeight:0,

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

		isEmpty:function(a) {
            if (typeof a == undefined || a == null || a == "") 
                return true;
            return false;
        },

		onMouseDown:function(){
			if (this.isEmpty(ig.global.gggMoreAction) == false) {
				ig.global.gggMoreAction();
			}
		},

		update:function() {
			if( ig.global.APIready == true && !this.flag) {
				//if (this.isEmpty(ig.global.gggMoreAction) == false) {
				this.logo = new ig.Image(this.moreGameURL);
				//this.logo = new ig.Image("media/btnmoregame.png");
				this.size.x = this.moreGameWidth;
				this.size.y = this.moreGameHeight;
				//}
               //console.log("width image : " + this.logo.width + " - " + this.logo.height)
               this.flag = true;
            }
            this.fireMouseDown();
		},

		draw:function() {
			this.parent();
			if (this.logo) {
				this.logo.draw(this.pos.x, this.pos.y);
			}
		}
	});
});