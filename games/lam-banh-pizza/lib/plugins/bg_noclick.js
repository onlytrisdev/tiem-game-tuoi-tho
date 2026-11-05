ig.module('plugins.bg_noclick')
.requires(
    'impact.entity'
)
.defines(function(){
    Bg_noclick = ig.Entity.extend({
        size: { x: 0, y: 0 },
        collides: ig.Entity.COLLIDES.NEVER,
        animSheet:null,
        init: function( x, y, settings ) {
            this.parent( x, y, settings );
        },
	
        clicked:function(){},
      
        check:function(other){this.parent();},
    
        draw:function() {this.parent();},

        update:function() {this.parent();}
    })
})