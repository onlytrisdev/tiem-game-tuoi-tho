ig.module(
  'game.entities.objek2'  //////class customer
)
.requires(
  	
	'impact.entity'
	
)

.defines(function(){

	Obj2=ig.Entity.extend({

	animSheet:null,
	font:null,
	ctrRequest:80,
	inProgress:false,
	balon:false,
	heartCtr:4,
	heartTimer:900,
	poseCtr:0,
	reqBubble:null,
	reqIdx:0,
	reqQty:0,
	chosen:false,
	heartbar:null,

	tilePos:0,

	animState:0,

	//text: [],
    //textPos: { x: 5, y: 5 },
    //textAlign: ig.Font.ALIGN.CENTER,

		init: function( x, y, settings ) {
	      this.parent( x, y, settings );
	      this.addAnim( 'idle', 1, [0] );

	      this.reqQty=ig.game.reqQty


	      this.ctrRequest=this.randomFromInterval(60,180)

	      this.heartbar=ig.game.spawnEntity
	      (
	      	Obj,ig.getX(this.pos.x),ig.getY(this.pos.y-40),
	      	{
	      		animSheet:new ig.AnimationSheet("media/game/heartbar.png",ig.getX(14),ig.getY(48))
	      	}
	      )
	      this.heartbar.zIndex=1000+ig.game.entities.length-1
	      this.heartbar.addAnim("4",1,[0])
	      this.heartbar.addAnim("3",1,[1])
	      this.heartbar.addAnim("2",1,[2])
	      this.heartbar.addAnim("1",1,[3])
	      this.heartbar.addAnim("0",1,[4])

	      //ig.game.arrCustomer.push(this)
	      
	    },

	   randomFromInterval:function(from,to)
      {
          return Math.floor(Math.random()*(to-from+1)+from);
      },

      ubahPose:function()
      {
      	this.reqIdx=0
	    this.inProgress=false
	    this.heartbar.currentAnim.alpha=1
	    this.heartbar.currentAnim=this.heartbar.anims[this.heartCtr]
	    this.heartbar.pos.x=ig.getX(this.pos.x)
	    this.heartbar.pos.y=ig.getY(this.pos.y-40)

      	if (this.reqQty>0)
      	 {
      	 	this.poseCtr=40
      	 	this.ctrRequest=this.randomFromInterval(60,180)
      	 }
      	else
      	{
      		ig.game.removeCustomer(this,"happy")
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
	    	this.fireMouseUp();
	    	if (this.ctrRequest>0)
	    	 {
	    	 	this.ctrRequest--
	    	 	if (this.ctrRequest<=0)
	    	 	 {
	    	 	 	this.ctrRequest=0
	    	 	 	ig.game.generateRequest(this);
	    	 	 }
	    	 }
	    	if (this.heartTimer>0 && !this.inProgress && !ig.game.pauseState)
	    	 {
	    	 	this.heartTimer--
	    	 	if (this.heartTimer<=0 && this.heartCtr>1)
	    	 	 {
	    	 	 	this.heartTimer=900
	    	 	 	this.heartCtr--
	    	 	 	this.heartbar.currentAnim=this.heartbar.anims[this.heartCtr]
	    	 	 	ig.game.drawFlag=false

	    	 	 }
	    	 	 else if (this.heartTimer<=0 && this.heartCtr<=1 && !ig.game.showTutor)
	    	 	 {
	    	 	 	this.heartCtr--
	    	 	 	this.heartbar.currentAnim=this.heartbar.anims[this.heartCtr]
	    	 	 	ig.game.removeCustomer(this,"angry");
	    	 	 }

	    	 }
	    	if (this.poseCtr>0 && !ig.game.pauseState)
	    	 {
	    	 	this.poseCtr--
	    	 	if (this.poseCtr<=0)
	    	 	 {
	    	 	 	this.poseCtr=0
	    	 	 	this.balon==true? this.currentAnim=this.anims["5"] : this.currentAnim=this.anims["1"]
	    	 	 	ig.game.drawFlag=false
	    	 	 }
	    	 }
	    	if (this.animState>0 && !ig.game.pauseState)
	    	 {
	    	 	this.animState--
	    	 	if (this.animState<=0)
	    	 	 {
	    	 	 	if (ig.game.chosenCustomer==this)
	    	 	 	 {
	    	 	 	 	ig.game.chosenCustomer=null
	    	 	 	 	ig.game.arrowCustomer.kill();
	    	 	 	 	ig.game.arrowCustomer=null
	    	 	 	 }
	    	 	 	ig.game["tile"+this.tilePos].filled=false
	    	 	 	this.heartbar.kill();
	    	 	 	this.heartbar=null
	    	 	 	ig.game.totalMoney+=this.heartCtr*5
	    	 	 	ig.game.arrObj2.splice(ig.game.arrObj2.indexOf(this),1)
	    	 	 	ig.game.arrCustomer.splice(ig.game.arrCustomer.indexOf(this),1)
	    	 	 	this.kill();
	    	 	 	ig.game.drawFlag=false

	    	 	 }
	    	 }
	    }

	})
})