ig.module(
  'game.Game2'
)
.requires(
  'impact.game',
	'impact.font',
	'impact.sound',
	'impact.image',
	'impact.entity',
	'plugins.button',
	'plugins.tween',
	'plugins.bg'
)
.defines(function(){

	Game2=ig.Game.extend({
		
		bgGame:null,
		soundBtn:null,
		heart1:null,heart2:null,heart3:null,heart4:null,heart5:null,heart6:null,heart7:null,heart8:null,heart9:null,
		heart10:null,heart11:null,heart12:null,heart13:null,heart14:null,heart15:null,heart16:null,heart17:null,heart18:null,

		drawFlag:false,

		pauseState:false,


		init:function()
		{
			ig.resources = [];
        	ig.ready = false;

	        dummyImages=[
	              new ig.Image("media/game2.png"),
	              new ig.Image("media/sound.png"),
	              new ig.Image("media/hearts.png")
	              

	        ]
	        ig.input.initMouse();
        	ig.input.bind( ig.KEY.MOUSE1, 'click');

        	this.bgGame=this.spawnEntity
        	(
        		Bg,ig.getX(0),ig.getY(0),
        		{
        			animSheet:new ig.AnimationSheet("media/game2.png",ig.getX(1024),ig.getY(768))
        		}
        	)
        	this.bgGame.zIndex=this.entities.length-1

        	this.soundBtn=this.spawnEntity
	        (
	          Button,ig.getX(12.1),ig.getY(15.6),
	          {
	            size:{x:ig.getX(50),y:ig.getY(50)},
	            animSheet:new ig.AnimationSheet("media/sound.png",ig.getX(50),ig.getY(50)),
	            pressedUp:function()
	            {
	            	ig.global.SOUND=!ig.global.SOUND
                        
                        if (ig.global.SOUND)
                         {
                            this.setState("idle")
                            ig.game.drawFlag=false
                            ig.global.BGM.play();
                         }
                         else if (!ig.global.SOUND)
                         {
                            this.setState("off")
                            ig.game.drawFlag=false
                            ig.global.BGM.pause();
                         }
	            }
	          }
	        )
	        this.soundBtn.zIndex=this.entities.length-1
	        this.soundBtn.addAnim("off",1,[1])

	        if (ig.global.SOUND==false)
             {
                this.soundBtn.setState("off")
             }

	        this.heart1=this.spawnEntity
	        (
	        	Button,ig.getX(31.45),ig.getY(93.55),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart1.zIndex=this.entities.length-1
	        this.heart1.addAnim("on",1,[1])
	        //this.heart1.currentAnim=this.heart1.anims.on.rewind();

	        

	        this.heart2=this.spawnEntity
	        (
	        	Button,ig.getX(197.45),ig.getY(93.55),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart2.zIndex=this.entities.length-1
	        this.heart2.addAnim("on",1,[1])

	        this.heart3=this.spawnEntity
	        (
	        	Button,ig.getX(363.55),ig.getY(93.55),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart3.zIndex=this.entities.length-1
	        this.heart3.addAnim("on",1,[1])

	        this.heart4=this.spawnEntity
	        (
	        	Button,ig.getX(529.6),ig.getY(93.55),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart4.zIndex=this.entities.length-1
	        this.heart4.addAnim("on",1,[1])

	        this.heart5=this.spawnEntity
	        (
	        	Button,ig.getX(695.6),ig.getY(93.55),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart5.zIndex=this.entities.length-1
	        this.heart5.addAnim("on",1,[1])

	        this.heart6=this.spawnEntity
	        (
	        	Button,ig.getX(861.7),ig.getY(93.55),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart6.zIndex=this.entities.length-1
	        this.heart6.addAnim("on",1,[1])

	        this.heart7=this.spawnEntity
	        (
	        	Button,ig.getX(31.45),ig.getY(256.35),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart7.zIndex=this.entities.length-1
	        this.heart7.addAnim("on",1,[1])

	        this.heart8=this.spawnEntity
	        (
	        	Button,ig.getX(197.45),ig.getY(256.35),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart8.zIndex=this.entities.length-1
	        this.heart8.addAnim("on",1,[1])

	        this.heart9=this.spawnEntity
	        (
	        	Button,ig.getX(363.55),ig.getY(256.35),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart9.zIndex=this.entities.length-1
	        this.heart9.addAnim("on",1,[1])

	        this.heart10=this.spawnEntity
	        (
	        	Button,ig.getX(529.6),ig.getY(256.35),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart10.zIndex=this.entities.length-1
	        this.heart10.addAnim("on",1,[1])

	        this.heart11=this.spawnEntity
	        (
	        	Button,ig.getX(695.6),ig.getY(256.35),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart11.zIndex=this.entities.length-1
	        this.heart11.addAnim("on",1,[1])

	        this.heart12=this.spawnEntity
	        (
	        	Button,ig.getX(861.7),ig.getY(256.35),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart12.zIndex=this.entities.length-1
	        this.heart12.addAnim("on",1,[1])

	        this.heart13=this.spawnEntity
	        (
	        	Button,ig.getX(31.45),ig.getY(419.1),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart13.zIndex=this.entities.length-1
	        this.heart13.addAnim("on",1,[1])

	        this.heart14=this.spawnEntity
	        (
	        	Button,ig.getX(197.45),ig.getY(419.1),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart14.zIndex=this.entities.length-1
	        this.heart14.addAnim("on",1,[1])

	        this.heart15=this.spawnEntity
	        (
	        	Button,ig.getX(363.55),ig.getY(419.1),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart15.zIndex=this.entities.length-1
	        this.heart15.addAnim("on",1,[1])

	        this.heart16=this.spawnEntity
	        (
	        	Button,ig.getX(529.6),ig.getY(419.1),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart16.zIndex=this.entities.length-1
	        this.heart16.addAnim("on",1,[1])

	        this.heart17=this.spawnEntity
	        (
	        	Button,ig.getX(695.6),ig.getY(419.1),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart17.zIndex=this.entities.length-1
	        this.heart17.addAnim("on",1,[1])

	        this.heart18=this.spawnEntity
	        (
	        	Button,ig.getX(861.7),ig.getY(419.1),
	        	{
	        		size:{x:ig.getX(131),y:ig.getY(114)},
		            animSheet:new ig.AnimationSheet("media/hearts.png",ig.getX(131),ig.getY(114)),
		            pressedUp:function()
		            {
		            	this.setState("on")
		            	ig.game.drawFlag=false
		            	var toggle=true
		            	for (var i = 1; i <= 18; i++)
		            	{
		            		if (ig.game["heart"+i].state=="idle")
		            		 {
		            		 	toggle=false
		            		 }
		            	}
		            	if (toggle)
		            	 {
		            	 	ig.system.setGame(Game3)
		            	 	
		            	 }
		            }
	        	}
	        )
	        this.heart18.zIndex=this.entities.length-1
	        this.heart18.addAnim("on",1,[1])

        	ig.game.sortEntitiesDeferred();

	        // load the resources
	        ig.ready = true;

	        // Start the custom preloader with the captured resources
	        this.loader = new IntermediateLoader( null, ig.resources );
	        this.loader.load();


		},

		draw:function()
		{
			if (this.loader == null)
	        {
	          if (!this.drawFlag)
	           {
	              this.parent();
	              this.drawFlag=true
	           }
	          

	        }
		},

		update:function()
		{
			this.parent();
	        
		},

	})
})