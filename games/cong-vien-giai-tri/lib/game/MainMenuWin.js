ig.module(
  'game.MainMenuWin'
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
	'plugins.bg'
)

.defines(function() {
  	MainMenuWin = ig.Game.extend({
  		mBg:null,
  		mBtn1:null,
  		mBtn2:null,

  		drawFlag:false,
  		showCredit:false,

  		font: new ig.Font( '', 30, null, null, '#6D0000','center', 4, true, true, "#FFF387"),

  		init:function() {
  			ig.resources = [];
			ig.ready = false;

  			dummyImages = [
					new ig.Image( 'media/main/mainmenu.png' ),
					new ig.Image("media/main/play.png"),
					new ig.Image("media/main/moregames.png"),
					new ig.Image("media/main/credit.png"),
					new ig.Image("media/sound.png"),
					new ig.Image("media/credit.png")
			];

			
			ig.input.initMouse();
  			ig.input.bind( ig.KEY.MOUSE1, 'click');

  			
  			//reset level
  			ig.global.level=1

  			// create the bg
			this.mBg =  this.spawnEntity(
	      	Bg, 0, 0, 
	  			{
	  				size:{x:0, y:0},
	  				animSheet:new ig.AnimationSheet( 'media/main/mainmenu.png', 700, 525)
			  	}
			)
			this.mBg.zIndex=this.entities.length-1

			this.mBtn1=this.spawnEntity
			(
				Button,ig.getX(386),ig.getY(275),
				{
					size:{x:ig.getX(183),y:ig.getY(50)},
					animSheet:new ig.AnimationSheet("media/main/play.png",ig.getX(183),ig.getY(50)),
					pressedUp:function()
					{
						if (!ig.game.showCredit)
						 {
						 	ig.system.setGame(GameWin)
						 }
					}
				}
			)
			this.mBtn1.zIndex=this.entities.length-1

			this.mBtn2=this.spawnEntity
			(
				Button,ig.getX(386),ig.getY(333),
				{
					size:{x:ig.getX(183),y:ig.getY(50)},
					animSheet:new ig.AnimationSheet("media/main/moregames.png",ig.getX(183),ig.getY(50)),
					pressedUp:function()
					{
						if (!ig.game.showCredit)
						 {
						 	ig.game.openLink("http://localhost");
						 }
					}
				}
			)
			this.mBtn2.zIndex=this.entities.length-1

			this.creditBtn=this.spawnEntity
			(
				Button,ig.getX(386),ig.getY(391),
				{
					size:{x:ig.getX(183),y:ig.getY(50)},
					animSheet:new ig.AnimationSheet("media/main/credit.png",ig.getX(183),ig.getY(50)),
					pressedUp:function()
					{
						if (!ig.game.showCredit)
						 {
						 	ig.game.showCredit=true
						 	ig.game.credit=ig.game.spawnEntity
						 	(
						 		Button,ig.getX(0),ig.getY(0),
						 		{
						 			size:{x:ig.getX(700),y:ig.getY(525)},
						 			animSheet:new ig.AnimationSheet("media/credit.png",ig.getX(700),ig.getY(525)),
						 			pressedUp:function()
						 			{
						 				ig.game.showCredit=false
						 				this.kill();
						 				ig.game.drawFlag=false
						 			}
						 		}
						 	)
						 	ig.game.credit.zIndex=ig.game.entities.length-1
						 	ig.game.drawFlag=false
						 }
					}
				}
			)
			this.creditBtn.zIndex=this.entities.length-1

			this.sound=this.spawnEntity
			(
				Button,ig.getX(645),ig.getY(16),
				{
					size:{x:ig.getX(36),y:ig.getY(27)},
					animSheet:new ig.AnimationSheet("media/sound.png",ig.getX(36),ig.getY(27)),
					pressedUp:function()
					{
						if (!ig.game.showCredit)
						 {
						 	ig.global.SOUND=!ig.global.SOUND
			                  if (ig.global.SOUND)
			                   {
			                    this.currentAnim=this.anims.idle.rewind();
			                    ig.global.BGM.play();
			                   }
			                  else
			                  {
			                    this.currentAnim=this.anims.off.rewind();
			                    ig.global.BGM.pause();
			                  }
			                  this.draw();
						 }
					}
				}
			)
			this.sound.zIndex=this.entities.length-1
			this.sound.exception=true
			this.sound.addAnim("off",1,[1])

	        if (!ig.global.SOUND)
	           {
	            this.sound.currentAnim=this.sound.anims.off.rewind();
	           }

	        this.logo=this.spawnEntity
	        (
	        	Button,ig.getX(10),ig.getY(10),
	        	{
	        		size:{x:ig.getX(115),y:ig.getY(71)},
	        		animSheet:new ig.AnimationSheet("media/logosmall.png",ig.getX(115),ig.getY(71)),
	        		pressedUp:function()
	        		{
	        			if (!ig.game.showCredit)
						{
							ig.game.openLink("http://localhost");
						}
	        		}
	        	}
	        )
	        this.logo.zIndex=this.entities.length-1
			

			// load the resources
			ig.ready = true;

		    // Start the custom preloader with the captured resources
		    this.loader = new IntermediateLoader2( null, ig.resources, this.onPreloaded );
		    this.loader.load();
	  	},


	  	openLink:function(href) { 
            if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i))
            {
                var link = document.createElement('a');
                link.setAttribute('href', href);
                link.setAttribute('target','_blank');
                var clickevent = document.createEvent('Event');
                clickevent.initEvent('click', true, false);
                link.dispatchEvent(clickevent);
                return false;
            }
            else {
                window.open("http://localhost",'_blank');
            }
        },

	  	draw:function() {
	  		if (this.loader == null) {
	  			
	  			if (!this.drawFlag)
	  			 {
	  			 	this.parent();
	  			 	this.drawFlag=true
	  			 };
	  			
	  		}
	  	},

	  	update:function() {
	  		this.parent();

	  		/*	//use this to detect your mouse coordinate
	  		if (ig.input.pressed("click"))
	  		 {
	  		 	console.log("mouseX= "+ig.input.mouse.x+" mouseY= "+ig.input.mouse.y);
	  		 }*/
	  	},

	  	onPreloaded:function() {
	  		//console.log("preloaded ");
	  	},
  });
});
