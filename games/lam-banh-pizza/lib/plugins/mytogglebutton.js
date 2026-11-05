ig.module('plugins.mytogglebutton')
.requires(
  'impact.image',
  'plugins.myentity',
  'plugins.empika.entity_utilities',
  'plugins.empika.game_utilities'
)

.defines(function() {
    ig.Entity.inject({
        shadowOptions:{
        },
    });

	MyToggleButton = MyEntity.extend({
		activated:true,
        delay:0,

        init:function(x, y, settings) {
            this.parent( x, y, settings );

            if (this.activated) {
                this.changeImage(1);
            } else {
                this.changeImage(0);
            }
        },

        update:function() {
            this.parent();
            if (this.delay > 0) {
                this.delay--;
            } else {

            }
        },

        toggleMe:function() {
        	this.activated = !this.activated;

        	if (this.activated) {
        		this.changeImage(1);
        	} else {
        		this.changeImage(0);
        	}
        },
    })
})