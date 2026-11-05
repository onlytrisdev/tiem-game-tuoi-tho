ig.module(
  'game.entities.objek3'   ///////class wahana
)
.requires(
  	
	'impact.entity'
	
)

.defines(function(){

	Obj3=ig.Entity.extend({

	animSheet:null,
	font:null,
	
	inProgress:false,
	broken:false,
	money:0,
	
	running:false,
	runTimer:300,
	customer:null,
	thsIdx:0,
	loadbar:null,

	indx:0,

	sizeX:0,
	sizeY:0,
	filepath:"",
	colorIdx:1,
	flip:false,
	price:0,

	brokenIcon:null,

	/*detector:null,
	indxCollide:-1,*/


	//text: [],
    //textPos: { x: 5, y: 5 },
    //textAlign: ig.Font.ALIGN.CENTER,

		init: function( x, y, settings ) {
	      this.parent( x, y, settings );
	      this.addAnim( 'idle', 1, [0] );

	      
	      if (this.animSheet.image.path=="media/game/carousel.png")
	       {
	       		this.thsIdx=1
	       		this.money=70
	       }
	       else if (this.animSheet.image.path=="media/game/cart.png")
	       {
	       		this.thsIdx=2
	       		this.money=0
	       		
	       		//ig.global.ramal=true
	       }
	      else if (this.animSheet.image.path=="media/game/stand12.png")
	       {
	       		this.thsIdx=4
	       		this.money=40
	       		this.price=ig.global.stand12
	       		//ig.global.ramal=true
	       }
	      else if (this.animSheet.image.path=="media/game/stand11.png")
	      {
	      		this.thsIdx=3
	      		this.money=35
	      		this.price=ig.global.stand11
	      		//ig.global.eskrim=true
	      }
	      else if (this.animSheet.image.path=="media/game/stand21.png")
	       {
	       		this.thsIdx=6
	       		this.money=30
	       		this.price=ig.global.stand21
	       }
	       else if (this.animSheet.image.path=="media/game/stand22.png")
	       {
	       		this.thsIdx=5
	       		this.money=30
	       		this.price=ig.global.stand22
	       }
	       else if (this.animSheet.image.path=="media/game/decor11.png")
	       {
	       		
	       		this.price=ig.global.decor11
	       }
	       else if (this.animSheet.image.path=="media/game/decor12.png")
	       {
	       		
	       		this.price=ig.global.decor12
	       }
	       else if (this.animSheet.image.path=="media/game/decor13.png")
	       {
	       		
	       		this.price=ig.global.decor13
	       }
	       else if (this.animSheet.image.path=="media/game/decor21.png")
	       {
	       		
	       		this.price=ig.global.decor21
	       }
	       else if (this.animSheet.image.path=="media/game/decor22.png")
	       {
	       		
	       		this.price=ig.global.decor22
	       }
	       else if (this.animSheet.image.path=="media/game/decor23.png")
	       {
	       		
	       		this.price=ig.global.decor23
	       }
	       else if (this.animSheet.image.path=="media/game/decor31.png")
	       {
	       		
	       		this.price=ig.global.decor31
	       }
	       else if (this.animSheet.image.path=="media/game/decor32.png")
	       {
	       		
	       		this.price=ig.global.decor32
	       }
	       else if (this.animSheet.image.path=="media/game/decor33.png")
	       {
	       		
	       		this.price=ig.global.decor33
	       }
	       else if (this.animSheet.image.path=="media/game/decor41.png")
	       {
	       		
	       		this.price=ig.global.decor41
	       }
	       else if (this.animSheet.image.path=="media/game/decor42.png")
	       {
	       		
	       		this.price=ig.global.decor42
	       }
	       else if (this.animSheet.image.path=="media/game/decor43.png")
	       {
	       		
	       		this.price=ig.global.decor43
	       }


	      //ig.game.arrCustomer.push(this)
	      
	    },

	  cekprice:function()
	  {
	  	if (this.animSheet.image.path=="media/game/stand12.png")
	       {
	       		this.thsIdx=4
	       		this.money=40
	       		this.price=ig.global.stand12
	       		//ig.global.ramal=true
	       }
	      else if (this.animSheet.image.path=="media/game/stand11.png")
	      {
	      		this.thsIdx=3
	      		this.money=35
	      		this.price=ig.global.stand11
	      		//ig.global.eskrim=true
	      }
	      else if (this.animSheet.image.path=="media/game/stand21.png")
	       {
	       		this.thsIdx=6
	       		this.money=30
	       		this.price=ig.global.stand21
	       }
	       else if (this.animSheet.image.path=="media/game/stand22.png")
	       {
	       		this.thsIdx=5
	       		this.money=30
	       		this.price=ig.global.stand22
	       }
	       else if (this.animSheet.image.path=="media/game/decor11.png")
	       {
	       		
	       		this.price=ig.global.decor11
	       }
	       else if (this.animSheet.image.path=="media/game/decor12.png")
	       {
	       		
	       		this.price=ig.global.decor12
	       }
	       else if (this.animSheet.image.path=="media/game/decor13.png")
	       {
	       		
	       		this.price=ig.global.decor13
	       }
	       else if (this.animSheet.image.path=="media/game/decor21.png")
	       {
	       		
	       		this.price=ig.global.decor21
	       }
	       else if (this.animSheet.image.path=="media/game/decor22.png")
	       {
	       		
	       		this.price=ig.global.decor22
	       }
	       else if (this.animSheet.image.path=="media/game/decor23.png")
	       {
	       		
	       		this.price=ig.global.decor23
	       }
	       else if (this.animSheet.image.path=="media/game/decor31.png")
	       {
	       		
	       		this.price=ig.global.decor31
	       }
	       else if (this.animSheet.image.path=="media/game/decor32.png")
	       {
	       		
	       		this.price=ig.global.decor32
	       }
	       else if (this.animSheet.image.path=="media/game/decor33.png")
	       {
	       		
	       		this.price=ig.global.decor33
	       }
	       else if (this.animSheet.image.path=="media/game/decor41.png")
	       {
	       		
	       		this.price=ig.global.decor41
	       }
	       else if (this.animSheet.image.path=="media/game/decor42.png")
	       {
	       		
	       		this.price=ig.global.decor42
	       }
	       else if (this.animSheet.image.path=="media/game/decor43.png")
	       {
	       		
	       		this.price=ig.global.decor43
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

	    killThis:function()
	    {
	    	ig.game.arrObj2.splice(ig.game.arrObj2.indexOf(this),1)
	    },

	    objekJalan:function(ob)
	    {
	    	if (ig.game.chosenCustomer!=null && ig.game.winname=="Game" && ob.reqIdx==this.thsIdx && this.inProgress==false && this.thsIdx!=2 && !this.broken)
	    	 {

	    	 	ig.game.chosenCustomer=null
	    	 	this.customer=ob
	    	 	ig.game["tile"+ob.tilePos].filled=false
	    	 	this.inProgress=true
	    	 	ob.inProgress=true
	    	 	ob.heartTimer=600
	    	 	ob.heartCtr<4 ? ob.heartCtr+=1 : ob.heartCtr+=0
	    	 	ob.currentAnim.alpha=0
	    	 	//ob.reqBubble.currentAnim.alpha=0
	    	 	if (ob.reqBubble!=null)
	    	 	 {
	    	 	 	ob.reqBubble.kill();
	    	 		ob.reqBubble=null
	    	 	 }
	    	 	
	    	 	ob.heartbar.currentAnim.alpha=0
	    	 	ig.game.arrowCustomer.kill();
	    	 	ig.game.arrowCustomer=null

	    	 	this.runTimer=300

	    	 	if (this.thsIdx==3 && this.thsIdx==5)
	    	 	 {
	    	 	 	this.runTimer=200
	    	 	 }
	    	 	else if (this.thsIdx==6)
	    	 	 {
	    	 	 	this.runTimer=100
	    	 	 }

	    	 	if (this.thsIdx!=3)
	    	 	 {
	    	 	 	this.loadbar=ig.game.spawnEntity
		    	 	(
		    	 		Obj,ig.getX(this.pos.x+((this.animSheet.width/2)-59.5)),ig.getY(this.pos.y+this.animSheet.height/3),
		    	 		{
		    	 			animSheet:new ig.AnimationSheet("media/game/bar1.png",ig.getX(119),ig.getY(13))
		    	 		}
		    	 	)
		    	 	this.loadbar.zIndex=ig.game.entities.length-1
		    	 	this.loadbar.addAnim("animed",0.033,[0,0,0,0,0,0,0,1,1,1,1,1,1,1])
		    	 	this.loadbar.currentAnim=this.loadbar.anims.animed
	    	 	 }
	    	 	else if (this.thsIdx==3)
	    	 	 {
	    	 	 	ig.game.pauseState=true
	    	 	 	this.loadbar=ig.game.spawnEntity
		    	 	(
		    	 		Obj,ig.getX(this.pos.x+((this.animSheet.width/2)-59.5)),ig.getY(this.pos.y+this.animSheet.height/3),
		    	 		{
		    	 			animSheet:new ig.AnimationSheet("media/game/bar1.png",ig.getX(119),ig.getY(13))
		    	 		}
		    	 	)
		    	 	this.loadbar.zIndex=ig.game.entities.length-1
		    	 	this.loadbar.addAnim("animed",0.033,[0,0,0,0,0,0,0,1,1,1,1,1,1,1])
		    	 	this.loadbar.currentAnim=this.loadbar.anims.animed
	    	 	 	this.iceCreamGame(ob)
	    	 	 }
	    	 	
	    	 	

	    	 	if (this.thsIdx==1)
	    	 	 {
	    	 	 	this.currentAnim=this.anims.spin
	    	 	 	ig.game.animate=true
	    	 	 }

	    	 	//ig.game.animate=true
	    	 	ig.game.drawFlag=false
	    	 }
	    	else if (ig.game.chosenCustomer!=null && ig.game.winname=="Game" && ob.reqIdx==this.thsIdx && this.thsIdx==2 && this.cekRollerCoaster()==false && !this.broken)
	    	 {
	    	 	//this.runTimer=500
	    	 	for (var i = 3; i>=0; i--)
	    	 	{
	    	 		if (ig.game["cart"+i].inProgress==false)
	    	 		 {
	    	 		 	ig.game.chosenCustomer=null
			    	 	ig.game["cart"+i].customer=ob
			    	 	ig.game["tile"+ob.tilePos].filled=false
			    	 	ig.game["cart"+i].inProgress=true
			    	 	ob.inProgress=true
			    	 	ob.heartTimer=600
			    	 	ob.heartCtr<4 ? ob.heartCtr+=1 : ob.heartCtr+=0
			    	 	ob.currentAnim.alpha=0
			    	 	//ob.reqBubble.currentAnim.alpha=0
			    	 	ob.reqBubble.kill();
			    	 	ob.reqBubble=null
			    	 	ob.heartbar.currentAnim.alpha=0
			    	 	ig.game.arrowCustomer.kill();
			    	 	ig.game.arrowCustomer=null

			    	 	if (ig.game["cart"+i].customer.animSheet.image.path=="media/game/couple1.png")
			    	 	 {
			    	 	 	ig.game["cart"+i].currentAnim=ig.game["cart"+i].anims["1"]
			    	 	 }
			    	 	else if (ig.game["cart"+i].customer.animSheet.image.path=="media/game/couple2.png")
			    	 	 {
			    	 	 	ig.game["cart"+i].currentAnim=ig.game["cart"+i].anims["2"]
			    	 	 }
			    	 	else if (ig.game["cart"+i].customer.animSheet.image.path=="media/game/couple3.png")
			    	 	 {
			    	 	 	ig.game["cart"+i].currentAnim=ig.game["cart"+i].anims["3"]
			    	 	 }
			    	 	else if (ig.game["cart"+i].customer.animSheet.image.path=="media/game/couple4.png")
			    	 	 {
			    	 	 	ig.game["cart"+i].currentAnim=ig.game["cart"+i].anims["4"]
			    	 	 }
			    	 	i=-1
	    	 		 }
	    	 	}

	    	 	


	    	 	if (ig.game.gocoaster==null)
	    	 	 {
	    	 	 	ig.game.gocoaster=ig.game.spawnEntity
	    	 	 	(
	    	 	 		Button,ig.getX(248),ig.getY(71),
	    	 	 		{
	    	 	 			size:{x:ig.getX(42),y:ig.getY(19)},
	    	 	 			animSheet:new ig.AnimationSheet("media/game/gocoaster.png",ig.getX(42),ig.getY(19)),
	    	 	 			pressedUp:function()
	    	 	 			{
	    	 	 				ig.game.startCoaster();
	    	 	 			}
	    	 	 		}
	    	 	 	)
	    	 	 	ig.game.gocoaster.zIndex=100+ig.game.entities.length-1
	    	 	 }

	    	 	ig.game.drawFlag=false

	    	 }
	    	else if (this.broken && this.thsIdx!=2 && this.loadbar==null)
	    	 {
	    	 	// kode mbetulin
	    	 	this.brokenIcon.kill();
	    	 	this.inProgress=true
	    	 	this.runTimer=400
	    	 	this.loadbar=ig.game.spawnEntity
	    	 	(
	    	 		Obj,ig.getX(this.pos.x+((this.animSheet.width/2)-59.5)),ig.getY(this.pos.y+this.animSheet.height/3),
	    	 		{
	    	 			animSheet:new ig.AnimationSheet("media/game/bar2.png",ig.getX(119),ig.getY(13))
	    	 		}
	    	 	)
	    	 	this.loadbar.zIndex=ig.game.entities.length-1
	    	 	this.loadbar.addAnim("animed",0.033,[0,0,0,0,0,0,0,1,1,1,1,1,1,1])
	    	 	this.loadbar.currentAnim=this.loadbar.anims.animed
	    	 }
	    	 else if (this.broken && this.thsIdx==2 && ig.game.coasterbar==null)
	    	 {

	    	 	ig.game.brokenIcon.kill();
	    	 	ig.game.repairCoster();

	    	 }
	    },

	    cekRollerCoaster:function()
	    {
	    	if (ig.global.level>=5)
	    	 {
	    	 	var penuh=true
		    	for (var i = 0; i<4; i++)
		    	{
		    		if (ig.game["cart"+i].inProgress==false)
		    		 {
		    		 	penuh=false
		    		 }
		    	}
		    	return penuh
	    	 }
	    	
	    },

	    iceCreamGame:function(ob)
	    {
	    	//ig.game.animate=true
	    	ig.game.boxice=ig.game.spawnEntity
	    	(
	    		Obj,ig.getX(135),ig.getY(123),
	    		{
	    			animSheet:new ig.AnimationSheet("media/game/ice/boxice.png",ig.getX(431),ig.getY(268))
	    		}
	    	)
	    	ig.game.boxice.zIndex=1210+ig.game.entities.length-1
	    	
	    	ig.game.ice1=ig.game.spawnEntity
	    	(
	    		Button,ig.getX(165),ig.getY(168),
	    		{
	    			size:{x:ig.getX(74),y:ig.getY(95)},
	    			animSheet:new ig.AnimationSheet("media/game/ice/ice1.png",ig.getX(74),ig.getY(95)),
	    			pressedUp:function()
	    			{
	    				if (ig.game.topping<4)
	    				{
	    					ig.game["top"+ig.game.topping]=ig.game.spawnEntity
		    				(
		    					Obj,ig.getX(438),ig.getY(254-(ig.game.topping*19)),
		    					{
		    						animSheet:new ig.AnimationSheet("media/game/ice/topping.png",ig.getX(70),ig.getY(45))
		    					}
		    				)
		    				ig.game["top"+ig.game.topping].zIndex=1210+ig.game.entities.length-1
		    				ig.game["top"+ig.game.topping].addAnim("1",1,[0])
		    				ig.game["top"+ig.game.topping].addAnim("2",1,[1])
		    				ig.game["top"+ig.game.topping].addAnim("3",1,[2])
		    				ig.game["top"+ig.game.topping].addAnim("4",1,[3])
		    				ig.game["top"+ig.game.topping].addAnim("5",1,[4])
		    				ig.game["top"+ig.game.topping].addAnim("6",1,[5])
		    				ig.game["top"+ig.game.topping].currentAnim=ig.game["top"+ig.game.topping].anims["1"]
		    				ig.game["top"+ig.game.topping].iceIdx=1
		    				
		    				ig.game.topping++
		    				if (ig.game.topping==4)
		    				 {
		    				 	var betul=true
		    				 	for (var i = 0; i < 4; i++)
		    				 	{
		    				 		if (ig.game.toppingarr[i]!=ig.game["top"+i].iceIdx)
		    				 		 {//console.log("topping1 betul"+ig.game.toppingarr[i]+"w"+ig.game["top"+i].iceIdx)
		    				 		 	betul=false
		    				 		 }
		    				 	}
		    				 	if (betul)
		    				 	 {//console.log("topping1 betul")
		    				 	 	ig.game.totalMoney+=30
		    				 	 }
		    				 	/////hilangkan semua
		    				 	ig.game.boxice.kill();
		    				 	ig.game.boxice=null
		    				 	ig.game.ice1.kill();
		    				 	ig.game.ice2.kill();
		    				 	ig.game.ice3.kill();
		    				 	ig.game.ice4.kill();
		    				 	ig.game.ice5.kill();
		    				 	ig.game.ice6.kill();
		    				 	ig.game.cone.kill();
		    				 	ig.game.icereq1.kill();
		    				 	ig.game.icereq2.kill();
		    				 	ig.game.icereq3.kill();
		    				 	ig.game.icereq4.kill();
		    				 	ig.game.resetice.kill();
		    				 	ig.game.top1.kill();
		    				 	ig.game.top2.kill();
		    				 	ig.game.top3.kill();
		    				 	ig.game.top0.kill();
		    				 	ig.game.topping=0
		    				 	ig.game.toppingarr=[]
		    				 	ig.game.pauseState=false
		    				 }

		    				ig.game.drawFlag=false
	    				}
	    				
	    				
	    			}
	    		}
	    	)
	    	ig.game.ice1.zIndex=1210+ig.game.entities.length-1
	    	ig.game.ice2=ig.game.spawnEntity
	    	(
	    		Button,ig.getX(243),ig.getY(168),
	    		{
	    			size:{x:ig.getX(74),y:ig.getY(95)},
	    			animSheet:new ig.AnimationSheet("media/game/ice/ice2.png",ig.getX(74),ig.getY(95)),
	    			pressedUp:function()
	    			{
	    				if (ig.game.topping<4)
	    				{
	    					ig.game["top"+ig.game.topping]=ig.game.spawnEntity
		    				(
		    					Obj,ig.getX(438),ig.getY(254-(ig.game.topping*19)),
		    					{
		    						animSheet:new ig.AnimationSheet("media/game/ice/topping.png",ig.getX(70),ig.getY(45))
		    					}
		    				)
		    				ig.game["top"+ig.game.topping].zIndex=1210+ig.game.entities.length-1
		    				ig.game["top"+ig.game.topping].addAnim("1",1,[0])
		    				ig.game["top"+ig.game.topping].addAnim("2",1,[1])
		    				ig.game["top"+ig.game.topping].addAnim("3",1,[2])
		    				ig.game["top"+ig.game.topping].addAnim("4",1,[3])
		    				ig.game["top"+ig.game.topping].addAnim("5",1,[4])
		    				ig.game["top"+ig.game.topping].addAnim("6",1,[5])
		    				ig.game["top"+ig.game.topping].currentAnim=ig.game["top"+ig.game.topping].anims["2"]
		    				ig.game["top"+ig.game.topping].iceIdx=2
		    				
		    				ig.game.topping++
		    				if (ig.game.topping==4)
		    				 {
		    				 	var betul=true
		    				 	for (var i = 0; i < 4; i++)
		    				 	{
		    				 		if (ig.game.toppingarr[i]!=ig.game["top"+i].iceIdx)
		    				 		 {//console.log("topping2 betul"+ig.game.toppingarr[i]+"w"+ig.game["top"+i].iceIdx)
		    				 		 	betul=false
		    				 		 }
		    				 	}
		    				 	if (betul)
		    				 	 {//console.log("topping2 betul")
		    				 	 	ig.game.totalMoney+=30
		    				 	 }
		    				 	/////hilangkan semua
		    				 	ig.game.boxice.kill();
		    				 	ig.game.boxice=null
		    				 	ig.game.ice1.kill();
		    				 	ig.game.ice2.kill();
		    				 	ig.game.ice3.kill();
		    				 	ig.game.ice4.kill();
		    				 	ig.game.ice5.kill();
		    				 	ig.game.ice6.kill();
		    				 	ig.game.cone.kill();
		    				 	ig.game.icereq1.kill();
		    				 	ig.game.icereq2.kill();
		    				 	ig.game.icereq3.kill();
		    				 	ig.game.icereq4.kill();
		    				 	ig.game.resetice.kill();
		    				 	ig.game.top1.kill();
		    				 	ig.game.top2.kill();
		    				 	ig.game.top3.kill();
		    				 	ig.game.top0.kill();
		    				 	ig.game.topping=0
		    				 	ig.game.toppingarr=[]
		    				 	ig.game.pauseState=false
		    				 }

		    				ig.game.drawFlag=false
	    				}
	    			}
	    		}
	    	)
	    	ig.game.ice2.zIndex=1210+ig.game.entities.length-1
	    	ig.game.ice3=ig.game.spawnEntity
	    	(
	    		Button,ig.getX(322),ig.getY(168),
	    		{
	    			size:{x:ig.getX(74),y:ig.getY(95)},
	    			animSheet:new ig.AnimationSheet("media/game/ice/ice3.png",ig.getX(74),ig.getY(95)),
	    			pressedUp:function()
	    			{
	    				if (ig.game.topping<4)
	    				{
	    					ig.game["top"+ig.game.topping]=ig.game.spawnEntity
		    				(
		    					Obj,ig.getX(438),ig.getY(254-(ig.game.topping*19)),
		    					{
		    						animSheet:new ig.AnimationSheet("media/game/ice/topping.png",ig.getX(70),ig.getY(45))
		    					}
		    				)
		    				ig.game["top"+ig.game.topping].zIndex=1210+ig.game.entities.length-1
		    				ig.game["top"+ig.game.topping].addAnim("1",1,[0])
		    				ig.game["top"+ig.game.topping].addAnim("2",1,[1])
		    				ig.game["top"+ig.game.topping].addAnim("3",1,[2])
		    				ig.game["top"+ig.game.topping].addAnim("4",1,[3])
		    				ig.game["top"+ig.game.topping].addAnim("5",1,[4])
		    				ig.game["top"+ig.game.topping].addAnim("6",1,[5])
		    				ig.game["top"+ig.game.topping].currentAnim=ig.game["top"+ig.game.topping].anims["3"]
		    				ig.game["top"+ig.game.topping].iceIdx=3
		    				
		    				ig.game.topping++
		    				if (ig.game.topping==4)
		    				 {
		    				 	var betul=true
		    				 	for (var i = 0; i < 4; i++)
		    				 	{
		    				 		if (ig.game.toppingarr[i]!=ig.game["top"+i].iceIdx)
		    				 		 {//console.log("topping3 betul"+ig.game.toppingarr[i]+"w"+ig.game["top"+i].iceIdx)
		    				 		 	betul=false
		    				 		 }
		    				 	}
		    				 	if (betul)
		    				 	 {//console.log("topping3 betul")
		    				 	 	ig.game.totalMoney+=30
		    				 	 }
		    				 	/////hilangkan semua
		    				 	ig.game.boxice.kill();
		    				 	ig.game.boxice=null
		    				 	ig.game.ice1.kill();
		    				 	ig.game.ice2.kill();
		    				 	ig.game.ice3.kill();
		    				 	ig.game.ice4.kill();
		    				 	ig.game.ice5.kill();
		    				 	ig.game.ice6.kill();
		    				 	ig.game.cone.kill();
		    				 	ig.game.icereq1.kill();
		    				 	ig.game.icereq2.kill();
		    				 	ig.game.icereq3.kill();
		    				 	ig.game.icereq4.kill();
		    				 	ig.game.resetice.kill();
		    				 	ig.game.top1.kill();
		    				 	ig.game.top2.kill();
		    				 	ig.game.top3.kill();
		    				 	ig.game.top0.kill();
		    				 	ig.game.topping=0
		    				 	ig.game.toppingarr=[]
		    				 	ig.game.pauseState=false
		    				 }

		    				ig.game.drawFlag=false
	    				}
	    			}
	    		}
	    	)
	    	ig.game.ice3.zIndex=1210+ig.game.entities.length-1
	    	ig.game.ice4=ig.game.spawnEntity
	    	(
	    		Button,ig.getX(165),ig.getY(270),
	    		{
	    			size:{x:ig.getX(74),y:ig.getY(95)},
	    			animSheet:new ig.AnimationSheet("media/game/ice/ice4.png",ig.getX(74),ig.getY(95)),
	    			pressedUp:function()
	    			{
	    				if (ig.game.topping<4)
	    				{
	    					ig.game["top"+ig.game.topping]=ig.game.spawnEntity
		    				(
		    					Obj,ig.getX(438),ig.getY(254-(ig.game.topping*19)),
		    					{
		    						animSheet:new ig.AnimationSheet("media/game/ice/topping.png",ig.getX(70),ig.getY(45))
		    					}
		    				)
		    				ig.game["top"+ig.game.topping].zIndex=1210+ig.game.entities.length-1
		    				ig.game["top"+ig.game.topping].addAnim("1",1,[0])
		    				ig.game["top"+ig.game.topping].addAnim("2",1,[1])
		    				ig.game["top"+ig.game.topping].addAnim("3",1,[2])
		    				ig.game["top"+ig.game.topping].addAnim("4",1,[3])
		    				ig.game["top"+ig.game.topping].addAnim("5",1,[4])
		    				ig.game["top"+ig.game.topping].addAnim("6",1,[5])
		    				ig.game["top"+ig.game.topping].currentAnim=ig.game["top"+ig.game.topping].anims["4"]
		    				ig.game["top"+ig.game.topping].iceIdx=4
		    				
		    				ig.game.topping++
		    				if (ig.game.topping==4)
		    				 {
		    				 	var betul=true
		    				 	for (var i = 0; i < 4; i++)
		    				 	{
		    				 		if (ig.game.toppingarr[i]!=ig.game["top"+i].iceIdx)
		    				 		 {//console.log("topping4 betul"+ig.game.toppingarr[i]+"w"+ig.game["top"+i].iceIdx)
		    				 		 	betul=false
		    				 		 }
		    				 	}
		    				 	if (betul)
		    				 	 {//console.log("topping4 betul")
		    				 	 	ig.game.totalMoney+=30
		    				 	 }
		    				 	/////hilangkan semua
		    				 	ig.game.boxice.kill();
		    				 	ig.game.boxice=null
		    				 	ig.game.ice1.kill();
		    				 	ig.game.ice2.kill();
		    				 	ig.game.ice3.kill();
		    				 	ig.game.ice4.kill();
		    				 	ig.game.ice5.kill();
		    				 	ig.game.ice6.kill();
		    				 	ig.game.cone.kill();
		    				 	ig.game.icereq1.kill();
		    				 	ig.game.icereq2.kill();
		    				 	ig.game.icereq3.kill();
		    				 	ig.game.icereq4.kill();
		    				 	ig.game.resetice.kill();
		    				 	ig.game.top1.kill();
		    				 	ig.game.top2.kill();
		    				 	ig.game.top3.kill();
		    				 	ig.game.top0.kill();
		    				 	ig.game.topping=0
		    				 	ig.game.toppingarr=[]
		    				 	ig.game.pauseState=false
		    				 }

		    				ig.game.drawFlag=false
	    				}
	    			}
	    		}
	    	)
	    	ig.game.ice4.zIndex=1210+ig.game.entities.length-1
	    	ig.game.ice5=ig.game.spawnEntity
	    	(
	    		Button,ig.getX(243),ig.getY(270),
	    		{
	    			size:{x:ig.getX(74),y:ig.getY(95)},
	    			animSheet:new ig.AnimationSheet("media/game/ice/ice5.png",ig.getX(74),ig.getY(95)),
	    			pressedUp:function()
	    			{
	    				if (ig.game.topping<4)
	    				{
	    					ig.game["top"+ig.game.topping]=ig.game.spawnEntity
		    				(
		    					Obj,ig.getX(438),ig.getY(254-(ig.game.topping*19)),
		    					{
		    						animSheet:new ig.AnimationSheet("media/game/ice/topping.png",ig.getX(70),ig.getY(45))
		    					}
		    				)
		    				ig.game["top"+ig.game.topping].zIndex=1210+ig.game.entities.length-1
		    				ig.game["top"+ig.game.topping].addAnim("1",1,[0])
		    				ig.game["top"+ig.game.topping].addAnim("2",1,[1])
		    				ig.game["top"+ig.game.topping].addAnim("3",1,[2])
		    				ig.game["top"+ig.game.topping].addAnim("4",1,[3])
		    				ig.game["top"+ig.game.topping].addAnim("5",1,[4])
		    				ig.game["top"+ig.game.topping].addAnim("6",1,[5])
		    				ig.game["top"+ig.game.topping].currentAnim=ig.game["top"+ig.game.topping].anims["5"]
		    				ig.game["top"+ig.game.topping].iceIdx=5
		    				
		    				ig.game.topping++
		    				if (ig.game.topping==4)
		    				 {
		    				 	var betul=true
		    				 	for (var i = 0; i < 4; i++)
		    				 	{
		    				 		if (ig.game.toppingarr[i]!=ig.game["top"+i].iceIdx)
		    				 		 {//console.log("topping5 betul"+ig.game.toppingarr[i]+"w"+ig.game["top"+i].iceIdx)
		    				 		 	betul=false
		    				 		 }
		    				 	}
		    				 	if (betul)
		    				 	 {//console.log("topping5 betul")
		    				 	 	ig.game.totalMoney+=30
		    				 	 }
		    				 	/////hilangkan semua
		    				 	ig.game.boxice.kill();
		    				 	ig.game.boxice=null
		    				 	ig.game.ice1.kill();
		    				 	ig.game.ice2.kill();
		    				 	ig.game.ice3.kill();
		    				 	ig.game.ice4.kill();
		    				 	ig.game.ice5.kill();
		    				 	ig.game.ice6.kill();
		    				 	ig.game.cone.kill();
		    				 	ig.game.icereq1.kill();
		    				 	ig.game.icereq2.kill();
		    				 	ig.game.icereq3.kill();
		    				 	ig.game.icereq4.kill();
		    				 	ig.game.resetice.kill();
		    				 	ig.game.top1.kill();
		    				 	ig.game.top2.kill();
		    				 	ig.game.top3.kill();
		    				 	ig.game.top0.kill();
		    				 	ig.game.topping=0
		    				 	ig.game.toppingarr=[]
		    				 	ig.game.pauseState=false
		    				 }

		    				ig.game.drawFlag=false
	    				}
	    			}
	    		}
	    	)
	    	ig.game.ice5.zIndex=1210+ig.game.entities.length-1
	    	ig.game.ice6=ig.game.spawnEntity
	    	(
	    		Button,ig.getX(322),ig.getY(270),
	    		{
	    			size:{x:ig.getX(74),y:ig.getY(95)},
	    			animSheet:new ig.AnimationSheet("media/game/ice/ice6.png",ig.getX(74),ig.getY(95)),
	    			pressedUp:function()
	    			{
	    				if (ig.game.topping<4)
	    				{
	    					ig.game["top"+ig.game.topping]=ig.game.spawnEntity
		    				(
		    					Obj,ig.getX(438),ig.getY(254-(ig.game.topping*19)),
		    					{
		    						animSheet:new ig.AnimationSheet("media/game/ice/topping.png",ig.getX(70),ig.getY(45))
		    					}
		    				)
		    				ig.game["top"+ig.game.topping].zIndex=1210+ig.game.entities.length-1
		    				ig.game["top"+ig.game.topping].addAnim("1",1,[0])
		    				ig.game["top"+ig.game.topping].addAnim("2",1,[1])
		    				ig.game["top"+ig.game.topping].addAnim("3",1,[2])
		    				ig.game["top"+ig.game.topping].addAnim("4",1,[3])
		    				ig.game["top"+ig.game.topping].addAnim("5",1,[4])
		    				ig.game["top"+ig.game.topping].addAnim("6",1,[5])
		    				ig.game["top"+ig.game.topping].currentAnim=ig.game["top"+ig.game.topping].anims["6"]
		    				ig.game["top"+ig.game.topping].iceIdx=6
		    				
		    				ig.game.topping++
		    				if (ig.game.topping==4)
		    				 {
		    				 	var betul=true
		    				 	for (var i = 0; i < 4; i++)
		    				 	{
		    				 		if (ig.game.toppingarr[i]!=ig.game["top"+i].iceIdx)
		    				 		 {//console.log("topping6 betul"+ig.game.toppingarr[i]+"w"+ig.game["top"+i].iceIdx)
		    				 		 	betul=false
		    				 		 }
		    				 	}
		    				 	if (betul)
		    				 	 {//console.log("topping6 betul")
		    				 	 	ig.game.totalMoney+=30
		    				 	 }
		    				 	/////hilangkan semua
		    				 	ig.game.boxice.kill();
		    				 	ig.game.boxice=null
		    				 	ig.game.ice1.kill();
		    				 	ig.game.ice2.kill();
		    				 	ig.game.ice3.kill();
		    				 	ig.game.ice4.kill();
		    				 	ig.game.ice5.kill();
		    				 	ig.game.ice6.kill();
		    				 	ig.game.cone.kill();
		    				 	ig.game.icereq1.kill();
		    				 	ig.game.icereq2.kill();
		    				 	ig.game.icereq3.kill();
		    				 	ig.game.icereq4.kill();
		    				 	ig.game.resetice.kill();
		    				 	ig.game.top1.kill();
		    				 	ig.game.top2.kill();
		    				 	ig.game.top3.kill();
		    				 	ig.game.top0.kill();
		    				 	ig.game.topping=0
		    				 	ig.game.toppingarr=[]
		    				 	ig.game.pauseState=false
		    				 }

		    				ig.game.drawFlag=false
	    				}
	    			}
	    		}
	    	)
	    	ig.game.ice6.zIndex=1210+ig.game.entities.length-1
	    	ig.game.cone=ig.game.spawnEntity
	    	(
	    		Obj,ig.getX(442),ig.getY(278),
	    		{
	    			animSheet:new ig.AnimationSheet("media/game/ice/cone.png",ig.getX(61),ig.getY(89))
	    		}
	    	)
	    	ig.game.cone.zIndex=1210+ig.game.entities.length-1

	    	var requestTop=0

	    	for (var i = 1; i < 5; i++)
	    	 {
	    		requestTop=this.randomFromInterval(1,6)
	    		ig.game.toppingarr.push(requestTop)
	    		ig.game["icereq"+i]=ig.game.spawnEntity
	    		(
	    			Obj,ig.getX(431+((i-1)*21)),ig.getY(166),
	    			{
	    				animSheet:new ig.AnimationSheet("media/game/ice/request.png",ig.getX(18),ig.getY(18))
	    			}
	    		)
	    		ig.game["icereq"+i].zIndex=1210+ig.game.entities.length-1
	    		ig.game["icereq"+i].addAnim("1",1,[0])
	    		ig.game["icereq"+i].addAnim("2",1,[1])
	    		ig.game["icereq"+i].addAnim("3",1,[2])
	    		ig.game["icereq"+i].addAnim("4",1,[3])
	    		ig.game["icereq"+i].addAnim("5",1,[4])
	    		ig.game["icereq"+i].addAnim("6",1,[5])
	    		ig.game["icereq"+i].currentAnim=ig.game["icereq"+i].anims[requestTop]
	    	}

	    	ig.game.resetice=ig.game.spawnEntity
	    	(
	    		Button,ig.getX(517),ig.getY(343),
	    		{
	    			size:{x:ig.getX(26),y:ig.getY(28)},
	    			animSheet:new ig.AnimationSheet("media/game/ice/resetice.png",ig.getX(26),ig.getY(28)),
	    			pressedUp:function()
	    			{
	    				if (ig.game.topping>0)
	    				 {
	    				 	for (var i = 0; i < ig.game.topping; i++)
	    				 	{
	    				 		ig.game["top"+i].kill();
	    				 	}
	    				 }
	    				ig.game.topping=0
	    				//ig.game.toppingarr=[]
	    				ig.game.drawFlag=false
	    			}
	    		}
	    	)
	    	ig.game.resetice.zIndex=1210+ig.game.entities.length-1

	    	ig.game.drawFlag=false

	    },

	    randomFromInterval:function(from,to)
      {
          return Math.floor(Math.random()*(to-from+1)+from);
      },

	    /*draw:function()
	    {
	    	
	    },*/

	    update:function()
	    {
	    	this.parent();

	    	if((ig.game.winname=="Game" && this.thsIdx!=0) || ig.game.winname=="Decor")
	    	{
	    		this.fireMouseUp();
	    	}
	    	else if (ig.game.winname=="Game" && this.thsIdx==0 && (this.size.x>0 || this.size.y>0))
	    	 {
	    	 	this.size.x=0
	    	 	this.size.y=0
	    	 }


	    	if (this.loadbar!=null && !ig.game.pauseState)
	    	 {
	    	 	
	    	 	this.loadbar.draw();

	    	 }
	    	if (this.inProgress && this.thsIdx!=2 && this.runTimer >0 && !ig.game.pauseState)
	    	 {
	    	 	this.runTimer--
	    	 	if (this.runTimer<=0 && !this.broken)
	    	 	 {	
	    	 	 	//////////////// random broken chance
	    	 	 	if (ig.global.level>1)
	    	 	 	 {
	    	 	 	 	var brokenchance=this.randomFromInterval(1,100)
		    	 	 	if (brokenchance<=15)
		    	 	 	 {
		    	 	 	 	this.broken=true
		    	 	 	 	this.brokenIcon=ig.game.spawnEntity
		    	 	 	 	(
		    	 	 	 		Obj,ig.getX(this.pos.x+((this.animSheet.width/2)-19)),ig.getY(this.pos.y+this.animSheet.height/3),
		    	 	 	 		{
		    	 	 	 			animSheet:new ig.AnimationSheet("media/game/fix.png",ig.getX(38),ig.getY(38))
		    	 	 	 		}
		    	 	 	 	)
		    	 	 	 	this.brokenIcon.zIndex=ig.game.entities.length-1
		    	 	 	 }
	    	 	 	 }
	    	 	 	

	    	 	 	////////////////
	    	 	 	
	    	 	 	this.loadbar.kill();
	    	 	 	this.loadbar=null
	    	 	 	this.inProgress=false
	    	 	 	if (this.thsIdx==6)
	    	 	 	 {
	    	 	 	 	this.customer.balon=true
	    	 	 	 }
	    	 	 	ig.game.munculkanCustomer(this,this.customer);

	    	 	 	if (this.thsIdx==1)
	    	 	 	 {
	    	 	 	 	this.currentAnim=this.anims.idle
	    	 	 	 	if (ig.game.bus==null)
	    	 	 	 	 {
	    	 	 	 	 	ig.game.animate=false
	    	 	 	 	 }
	    	 	 	 	
	    	 	 	 }
	    	 	 	ig.game.drawFlag=false

	    	 	 }
	    	 	else if (this.runTimer<=0 && this.broken)
	    	 	 {
	    	 	 	ig.global.repairCount++
	    	 	 	if (ig.global.repairCount>=4 && ig.global.quest6[0]==false)
	    	 	 	 {
	    	 	 	 	ig.global.quest6[0]=true
	    	 	 	 }
	    	 	 	 
	    	 	 	this.loadbar.kill();
	    	 	 	this.loadbar=null
	    	 	 	this.inProgress=false
	    	 	 	this.broken=false
	    	 	 }
	    	 }
	    	
	    	
	    }


	})
})