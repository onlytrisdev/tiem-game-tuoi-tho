ig.module(
  'game.MainMenuWin'
  //version 1.1
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
  		creditBtn:null,
  		credit:null,
  		pauseState:false,

  		drawFlag:false,
  		

  		//loaderText:null,

  		font: new ig.Font( '', 30, null, null, '#6D0000','center', 4, true, true, "#FFF387"),

  		init:function() {
  			ig.resources = [];
			ig.ready = false;

  			dummyImages = [
					new ig.Image( 'media/main-menu.png' ),
					new ig.Image("media/start.png"),
					new ig.Image("media/play-more-games.png"),
					new ig.Image("media/creditbtn.png"),
					new ig.Image("media/fresh_girl_games_logo.png"),
					new ig.Image("media/sound.png"),
					new ig.Image("media/girls-01.png"),
					new ig.Image("media/xbtn.png")
					
			];

			
			ig.input.initMouse();
  			ig.input.bind( ig.KEY.MOUSE1, 'click');

  			
  			// create the bg
			this.mBg =  this.spawnEntity(
	      	Bg, 0, 0, 
	  			{
	  				size:{x:0, y:0},
	  				animSheet:new ig.AnimationSheet( 'media/main-menu.png', ig.getX(1024), ig.getY(768))
			  	}
			);
			this.mBg.zIndex=this.entities.length-1

			this.mBtn1=this.spawnEntity
			(
				Button,ig.getX(496.4),ig.getY(377.2),
				{
					size:{x:ig.getX(283), y:ig.getY(61)},
	  				animSheet:new ig.AnimationSheet( 'media/start.png', ig.getX(283), ig.getY(61)),
	  				pressedUp:function()
	  				{
	  					adRequest();
	  					if(ig.game.credit.state!="idle")
	  					{
	  						ig.system.setGame(NameWin)
	  					}
	  					
	  					//ig.system.setGame(GameWin)
	  				}
				}
			)
			this.mBtn1.zIndex=this.entities.length-1 

			this.mBtn2=this.spawnEntity
			(
				Button,ig.getX(593.3),ig.getY(464.8),
				{
					size:{x:ig.getX(372), y:ig.getY(61)},
	  				animSheet:new ig.AnimationSheet( 'media/play-more-games.png', ig.getX(372), ig.getY(61)),
	  				pressedUp:function()
	  				{
	  					if(ig.game.credit.state!="idle")
	  					{
	  						ig.game.openLink("http://localhost/");
	  					}
	  				}
				}
			)
			this.mBtn2.zIndex=this.entities.length-1

			this.creditBtn=this.spawnEntity
			(
				Button,ig.getX(683.3),ig.getY(551.9),
				{
					size:{x:ig.getX(283), y:ig.getY(61)},
	  				animSheet:new ig.AnimationSheet( 'media/creditbtn.png', ig.getX(283), ig.getY(61)),
	  				pressedUp:function()
	  				{
	  					if(ig.game.credit.state!="idle")
	  					{
	  						ig.game.credit.setState("idle")

	  						ig.game.xBtn=ig.game.spawnEntity
							 	(
							 		Button,ig.getX(920),ig.getY(16.5),
							 		{
							 			size:{x:ig.getX(71),y:ig.getY(71)},
							 			animSheet:new ig.AnimationSheet("media/xbtn.png",ig.getX(71),ig.getY(71)),
							 			pressedUp:function()
							 			{
							 				this.kill();
							 				ig.game.credit.setState("hidden")
											ig.game.drawFlag=false
							 			}
							 		}
							 	)
							 	ig.game.xBtn.zIndex=ig.game.entities.length-1
	  						ig.game.drawFlag=false
	  					}
	  					
	  				}
				}
			)
			this.mBtn2.zIndex=this.entities.length-1

			this.logoTxt=this.spawnEntity
			(
				Button,ig.getX(22.85),ig.getY(700),
				{
					size:{x:ig.getX(308),y:ig.getY(38)},
					animSheet:new ig.AnimationSheet("media/girls-01.png",ig.getX(308),ig.getY(38)),
					pressedUp:function()
					{
						if(ig.game.credit.state!="idle")
						{
							
						}
						
					}
				}
			)
			this.logoTxt.zIndex=this.entities.length-1

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

			this.credit=this.spawnEntity
			(
				Button,ig.getX(0),ig.getY(0),
				{
					size:{x:ig.getX(1024), y:ig.getY(768)},
	  				animSheet:new ig.AnimationSheet( 'media/fresh_girl_games_logo.png', ig.getX(1024), ig.getY(768)),
	  				pressedUp:function()
	  				{
	  					
	  					//this.setState("hidden")
	  					//ig.game.drawFlag=false
	  				}
				}
			)
			this.credit.zIndex=this.entities.length-1
			this.credit.setState("hidden")

			/*if (ig.global.firstTime)
			 {
			 	this.loaderText=this.spawnEntity
				(
					Button,ig.getX(0),ig.getY(0),
					{
						size:{x:ig.getX(1024), y:ig.getY(768)},
		  				animSheet:new ig.AnimationSheet( 'media/loaderText.png', ig.getX(1024), ig.getY(768)),
		  				pressedUp:function()
		  				{
		  					this.setState("hidden")
		  					ig.global.firstTime=false
		  					this.kill();
		  					ig.game.drawFlag=false
		  				}
					}
				)
				this.loaderText.zIndex=this.entities.length-1
			 }*/
			

			/*
			// create the "Start" button
      		this.mBtn1 = this.spawnEntity(
	      		Button, ig.getX(502), ig.getY(452), 
	  			{
	  				shadowOptions:{shadowBlur:0},
	  				size:{x:ig.getX(469), y:ig.getY(91)},
	  				animSheet:new ig.AnimationSheet( 'media/btn_menu_big.png', ig.getX(469), ig.getY(91) ),
					textPos: {x:235, y:50},
					text:"Start Game",
					hover:false,
					active:false,
					//font:this.font_verdana,
	  				//textPos:{x:ig.getX(40), y:ig.getY(20)},
	  				pressedUp:function() 
					{
						//if (!ig.game._tutorTime)
	  					///ig.system.setGame(GameWin);
	  					//ig.system.setGame(ShopWin);
						//ig.system.setGame(EndingWin);
						//ig.music.play();
						
						//ig.global.BGM.play();
						ig.system.setGame(GameWin);
						//window.saveScreenAsPng();
						//window.showTextInput(100,100);
						
	  				},

			  	}
			); 

      		this.mBtn2 = this.spawnEntity
	      		Button, ig.getX(540), ig.getY(560), 
	  			{
	  				checkAgainst:ig.Entity.TYPE.BOTH,
	  				type:ig.Entity.TYPE.B,
	  				size:{x:ig.getX(469), y:ig.getY(91)},
	  				animSheet:new ig.AnimationSheet( 'media/btn_menu_big.png', ig.getX(469), ig.getY(91) ),
					textPos: {x:235, y:50},
					text:"More Quiz Games",
					hover:false,
					active:false,
	  				//textPos:{x:ig.getX(40), y:ig.getY(20)},
	  				pressedUp:function() 
					{
						
	  				},

	  				isTweened:false,

	  				tweenMe:function() {
				        if (this.isTweened)
				          return;
				        
				        this.isTweened = true;

				        this.tween(
				        	{ 
					        	pos: {x:540, y:560}
					        },     // the new position

					        0.75, 
					        {                    // the time for tween
					            easing:ig.Tween.Easing.Sinusoidal.EaseOut,    // the easing 
					            delay:0,                                     // the delay
					            onComplete:function(){                         // callback
					                
					        	}.bind(this)
					    	}
					    ).start();        // yeah start now
				    },
			  	}
			); 

*/

			// load the resources
			ig.ready = true;

		    // Start the custom preloader with the captured resources
		    this.loader = new IntermediateLoader( null, ig.resources, this.onPreloaded );
		    this.loader.load();
	  	},

	  	openLink:function(href) { 
		  var link = document.createElement('a');
		  link.setAttribute('href', href);
		  link.setAttribute('target','_blank');
		  var clickevent = document.createEvent('Event');
		  clickevent.initEvent('click', true, false);
		  link.dispatchEvent(clickevent);
		 return false;
		},

	  	draw:function() {
	  		if (this.loader == null) {
	  			

	  			if(!this.drawFlag)
	  			{
	  				this.parent();
	  				
	  				this.drawFlag=true
	  			}
	  			
	  			
	  		}
	  	},

	  	update:function() {
	  		this.parent();
	  		
	  		
	  	},

	  	onPreloaded:function() {
	  		
	  	},
  });
});


        /*
* GAME API
*/
function adRequest(params) 
{
    if (typeof GameAPI === 'object' && GameAPI !== null)
    {
        
            GameAPI.GameBreak.request(fnPause,fnResume);
        
    }
}
function fnPause()
{
    console.log('Pause Game')
}
function fnResume()
{
    console.log('resume game')
}
