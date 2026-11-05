ig.module(
  'game.entities.tiles'
)
.requires(
  	
	'impact.entity'
	
)

.defines(function(){

	Tile=ig.Entity.extend({

	animSheet:null,
	font:null,
	names:0,
	

	//text: [],
    //textPos: { x: 5, y: 5 },
    //textAlign: ig.Font.ALIGN.CENTER,

		init: function( x, y, settings ) {
	      this.parent( x, y, settings );
	      this.addAnim( 'idle', 1, [0] );

	      
	      
	    },


	    changeSize:function()
	    {
	    	if (this.names==16 || this.names==29 || this.names==35 || this.names==80)
	       {
	       		this.size.x=ig.getX(0)
	       		this.size.y=ig.getY(0)
	       		
	       }
	       else
	       {
	       		this.size.x=ig.getX(82)
	       		this.size.y=ig.getY(40)
	       }

	       if (this.currentAnim.alpha==0)
	        {
	        	this.size.x=ig.getX(0)
	       		this.size.y=ig.getY(0)
	        }
	    },

	   

	    draw:function()
	    {
	    	this.parent();
	    	/*if (this.text && this.font)
	    	{console.log("dgdfgDFg")
	    		this.font.draw(
	            this.text,
	            this.pos.x + this.textPos.x - ig.game.screen.x,
	            this.pos.y + this.textPos.y - ig.game.screen.y,
	            this.textAlign
	          );
	    	}*/
	          
	    },

	    update:function()
	    {
	    	this.parent();
	    	if (this.currentAnim.alpha==1)
	    	 {
	    	 	this.fireMouseUp();
	    	 };
	    	
	    	
	    		
	    }

	})
})