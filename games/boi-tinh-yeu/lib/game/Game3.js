ig.module(
  'game.Game3'
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

	Game3=ig.Game.extend({

		bgGame:null,
		petal1:null,petal2:null,petal3:null,petal4:null,petal5:null,petal6:null,petal7:null,petal8:null,
		bud:null,
        soundBtn:null,

		petalBtn1a:null,petalBtn2a:null,petalBtn3a:null,petalBtn4a:null,petalBtn5a:null,petalBtn6a:null,petalBtn7a:null,petalBtn8a:null,
		petalBtn1b:null,petalBtn2b:null,petalBtn3b:null,petalBtn4b:null,petalBtn5b:null,petalBtn6b:null,petalBtn7b:null,petalBtn8b:null,
		petalBtn1c:null,petalBtn2c:null,petalBtn3c:null,petalBtn4c:null,petalBtn5c:null,petalBtn6c:null,petalBtn7c:null,petalBtn8c:null,

        petal1Anim:null,petal2Anim:null,petal3Anim:null,petal4Anim:null,petal5Anim:null,petal6Anim:null,petal7Anim:null,petal8Anim:null,

		drawFlag:false,
        timeCtr:null,

        pauseState:false,

		init:function()
		{
			ig.resources = [];
        	ig.ready = false;

	        dummyImages=[
	              new ig.Image("media/ingame-4bg.png"),
	              new ig.Image("media/petal1.png"),new ig.Image("media/petal2.png"),new ig.Image("media/petal3.png"),new ig.Image("media/petal4.png"),new ig.Image("media/petal5.png"),new ig.Image("media/petal6.png"),new ig.Image("media/petal7.png"),new ig.Image("media/petal8.png"),
	              new ig.Image("media/petalbtn1a.png"),new ig.Image("media/petalbtn2a.png"),new ig.Image("media/petalbtn3a.png"),new ig.Image("media/petalbtn4a.png"),new ig.Image("media/petalbtn5a.png"),new ig.Image("media/petalbtn6a.png"),new ig.Image("media/petalbtn7a.png"),new ig.Image("media/petalbtn8a.png"),
	              new ig.Image("media/petalbtn1b.png"),new ig.Image("media/petalbtn2b.png"),new ig.Image("media/petalbtn3b.png"),new ig.Image("media/petalbtn4b.png"),new ig.Image("media/petalbtn5b.png"),new ig.Image("media/petalbtn6b.png"),new ig.Image("media/petalbtn7b.png"),new ig.Image("media/petalbtn8b.png"),
	              new ig.Image("media/petalbtn1c.png"),new ig.Image("media/petalbtn2c.png"),new ig.Image("media/petalbtn3c.png"),new ig.Image("media/petalbtn4c.png"),new ig.Image("media/petalbtn5c.png"),new ig.Image("media/petalbtn6c.png"),new ig.Image("media/petalbtn7c.png"),new ig.Image("media/petalbtn8c.png"),
                  new ig.Image("media/petal1anim.png"),new ig.Image("media/petal2anim.png"),new ig.Image("media/petal3anim.png"),new ig.Image("media/petal4anim.png"),new ig.Image("media/petal5anim.png"),new ig.Image("media/petal6anim.png"),new ig.Image("media/petal7anim.png"),new ig.Image("media/petal8anim.png"),
                  new ig.Image("media/sound.png")

	        ]
	        ig.input.initMouse();
        	ig.input.bind( ig.KEY.MOUSE1, 'click');

            this.timeCtr=new ig.Timer(1.10);

        	this.bgGame=this.spawnEntity
        	(
        		Bg,ig.getX(0),ig.getY(0),
        		{
        			animSheet:new ig.AnimationSheet("media/ingame-4bg.png",ig.getX(1024),ig.getY(768))
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

        	this.petal1=this.spawnEntity
        	(
        		Obj,ig.getX(501.45),ig.getY(372.15),
        		{
        			animSheet:new ig.AnimationSheet("media/petal1.png",ig.getX(76),ig.getY(202))
        		}
        	)
        	this.petal1.zIndex=this.entities.length-1

        	this.petal2=this.spawnEntity
        	(
        		Obj,ig.getX(342.4),ig.getY(374.8),
        		{
        			animSheet:new ig.AnimationSheet("media/petal2.png",ig.getX(167),ig.getY(171))
        		}
        	)
        	this.petal2.zIndex=this.entities.length-1

        	this.petal3=this.spawnEntity
        	(
        		Obj,ig.getX(289.45),ig.getY(342.35),
        		{
        			animSheet:new ig.AnimationSheet("media/petal3.png",ig.getX(221),ig.getY(79))
        		}
        	)
        	this.petal3.zIndex=this.entities.length-1

        	this.petal4=this.spawnEntity
        	(
        		Obj,ig.getX(318.85),ig.getY(184.95),
        		{
        			animSheet:new ig.AnimationSheet("media/petal4.png",ig.getX(196),ig.getY(169))
        		}
        	)
        	this.petal4.zIndex=this.entities.length-1

        	this.petal5=this.spawnEntity
        	(
        		Obj,ig.getX(532.2),ig.getY(331.25),
        		{
        			animSheet:new ig.AnimationSheet("media/petal5.png",ig.getX(240),ig.getY(75))
        		}
        	)
        	this.petal5.zIndex=this.entities.length-1

        	this.petal6=this.spawnEntity
        	(
        		Obj,ig.getX(486.15),ig.getY(106.5),
        		{
        			animSheet:new ig.AnimationSheet("media/petal6.png",ig.getX(80),ig.getY(241))
        		}
        	)
        	this.petal6.zIndex=this.entities.length-1

        	this.petal7=this.spawnEntity
        	(
        		Obj,ig.getX(534.85),ig.getY(184.1),
        		{
        			animSheet:new ig.AnimationSheet("media/petal7.png",ig.getX(210),ig.getY(162))
        		}
        	)
        	this.petal7.zIndex=this.entities.length-1

        	this.petal8=this.spawnEntity
        	(
        		Obj,ig.getX(538.85),ig.getY(371.95),
        		{
        			animSheet:new ig.AnimationSheet("media/petal8.png",ig.getX(170),ig.getY(154))
        		}
        	)
        	this.petal8.zIndex=this.entities.length-1

            /*
            this.petal1Anim=this.spawnEntity
            (
                Obj,ig.getX(335.45),ig.getY(257.7),
                {
                    animSheet:new ig.AnimationSheet("media/petal1Anim.png",ig.getX(320), ig.getY(535))
                }
            )
            this.petal1Anim.zIndex=this.entities.length-1
            this.petal1Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12],true )
            this.petal1Anim.currentAnim.alpha=0

            this.petal2Anim=this.spawnEntity
            (
                Obj,ig.getX(263.7),ig.getY(245.25),
                {
                    animSheet:new ig.AnimationSheet("media/petal2Anim.png",ig.getX(274), ig.getY(469))
                }
            )
            this.petal2Anim.zIndex=this.entities.length-1
            this.petal2Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12],true )
            this.petal2Anim.currentAnim.alpha=0

            this.petal3Anim=this.spawnEntity
            (
                Obj,ig.getX(230.15),ig.getY(194.75),
                {
                    animSheet:new ig.AnimationSheet("media/petal3Anim.png",ig.getX(280), ig.getY(313))
                }
            )
            this.petal3Anim.zIndex=this.entities.length-1
            this.petal3Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],true )
            this.petal3Anim.currentAnim.alpha=0

            this.petal4Anim=this.spawnEntity
            (
                Obj,ig.getX(186.9),ig.getY(158.55),
                {
                    animSheet:new ig.AnimationSheet("media/petal4Anim.png",ig.getX(328), ig.getY(311))
                }
            )
            this.petal4Anim.zIndex=this.entities.length-1
            this.petal4Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12],true )
            this.petal4Anim.currentAnim.alpha=0

            this.petal5Anim=this.spawnEntity
            (
                Obj,ig.getX(382.8),ig.getY(197.7),
                {
                    animSheet:new ig.AnimationSheet("media/petal5Anim.png",ig.getX(476), ig.getY(360))
                }
            )
            this.petal5Anim.zIndex=this.entities.length-1
            this.petal5Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12],true )
            this.petal5Anim.currentAnim.alpha=0

            this.petal6Anim=this.spawnEntity
            (
                Obj,ig.getX(332.5),ig.getY(54.6),
                {
                    animSheet:new ig.AnimationSheet("media/petal6Anim.png",ig.getX(338), ig.getY(296))
                }
            )
            this.petal6Anim.zIndex=this.entities.length-1
            this.petal6Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11],true )
            this.petal6Anim.currentAnim.alpha=0

            this.petal7Anim=this.spawnEntity
            (
                Obj,ig.getX(371.45),ig.getY(148.45),
                {
                    animSheet:new ig.AnimationSheet("media/petal7Anim.png",ig.getX(437), ig.getY(308))
                }
            )
            this.petal7Anim.zIndex=this.entities.length-1
            this.petal7Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9],true )
            this.petal7Anim.currentAnim.alpha=0

            this.petal8Anim=this.spawnEntity
            (
                Obj,ig.getX(373.65),ig.getY(238.7),
                {
                    animSheet:new ig.AnimationSheet("media/petal8Anim.png",ig.getX(429), ig.getY(432))
                }
            )
            this.petal8Anim.zIndex=this.entities.length-1
            this.petal8Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13],true )
            this.petal8Anim.currentAnim.alpha=0
            */

        	this.bud=this.spawnEntity
        	(
        		Obj,ig.getX(470.1),ig.getY(315.85),
        		{
        			animSheet:new ig.AnimationSheet("media/bud.png",ig.getX(97),ig.getY(88))
        		}
        	)
        	this.bud.zIndex=this.entities.length-1

        	this.petalBtn1a=this.spawnEntity
        	(
        		Button,ig.getX(507.95),ig.getY(505),
        		{
        			size:{x:ig.getX(66),y:ig.getY(66)},
        			animSheet:new ig.AnimationSheet("media/petalbtn1a.png",ig.getX(66),ig.getY(66)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal1.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal1.currentAnim.alpha=0
                            ig.game.petal1Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(335.45),ig.getY(257.7),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal1anim.png",ig.getX(320), ig.getY(535))
                                }
                            )
                            ig.game.petal1Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal1Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8],true )
                            ig.game.sortEntitiesDeferred();
                            ig.game.petal1Anim.currentAnim=ig.game.petal1Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn1a.zIndex=this.entities.length-1
        	//this.petalBtn1.anims.idle.angle=(90*3.14/180)

        	this.petalBtn1b=this.spawnEntity
        	(
        		Button,ig.getX(502.3),ig.getY(439.35),
        		{
        			size:{x:ig.getX(66),y:ig.getY(66)},
        			animSheet:new ig.AnimationSheet("media/petalbtn1b.png",ig.getX(66),ig.getY(66)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal1.currentAnim.alpha!=0 &&ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal1.currentAnim.alpha=0
                            ig.game.petal1Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(335.45),ig.getY(257.7),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal1anim.png",ig.getX(320), ig.getY(535))
                                }
                            )
                            ig.game.petal1Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal1Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8],true )
                            ig.game.sortEntitiesDeferred();
                            ig.game.petal1Anim.currentAnim=ig.game.petal1Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn1b.zIndex=this.entities.length-1

        	this.petalBtn1c=this.spawnEntity
        	(
        		Button,ig.getX(509.3),ig.getY(402.35),
        		{
        			size:{x:ig.getX(36),y:ig.getY(36)},
        			animSheet:new ig.AnimationSheet("media/petalbtn1c.png",ig.getX(36),ig.getY(36)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal1.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal1.currentAnim.alpha=0
                            ig.game.petal1Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(335.45),ig.getY(257.7),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal1anim.png",ig.getX(320), ig.getY(535))
                                }
                            )
                            ig.game.petal1Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal1Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8],true )
                            ig.game.sortEntitiesDeferred();
                            ig.game.petal1Anim.currentAnim=ig.game.petal1Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn1c.zIndex=this.entities.length-1

        	this.petalBtn2a=this.spawnEntity
        	(
        		Button,ig.getX(350),ig.getY(460),
        		{
        			size:{x:ig.getX(78),y:ig.getY(78)},
        			animSheet:new ig.AnimationSheet("media/petalbtn2a.png",ig.getX(78),ig.getY(78)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal2.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal2.currentAnim.alpha=0
                            ig.game.petal2Anim=ig.game.spawnEntity
                            (
                            Obj,ig.getX(263.7),ig.getY(245.25),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal2anim.png",ig.getX(274), ig.getY(469))
                                }
                            )
                            ig.game.petal2Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal2Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8],true )
                            ig.game.petal2Anim.currentAnim.alpha=0
                            ig.game.petal2Anim.currentAnim=ig.game.petal2Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn2a.zIndex=this.entities.length-1

        	this.petalBtn2b=this.spawnEntity
        	(
        		Button,ig.getX(390.35),ig.getY(433.9),
        		{
        			size:{x:ig.getX(62),y:ig.getY(62)},
        			animSheet:new ig.AnimationSheet("media/petalbtn2b.png",ig.getX(62),ig.getY(62)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal2.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal2.currentAnim.alpha=0
                            ig.game.petal2Anim=ig.game.spawnEntity
                            (
                            Obj,ig.getX(263.7),ig.getY(245.25),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal2anim.png",ig.getX(274), ig.getY(469))
                                }
                            )
                            ig.game.petal2Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal2Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8],true )
                            ig.game.petal2Anim.currentAnim.alpha=0
                            ig.game.petal2Anim.currentAnim=ig.game.petal2Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn2b.zIndex=this.entities.length-1

        	this.petalBtn2c=this.spawnEntity
        	(
        		Button,ig.getX(428.35),ig.getY(398.35),
        		{
        			size:{x:ig.getX(60),y:ig.getY(60)},
        			animSheet:new ig.AnimationSheet("media/petalbtn2c.png",ig.getX(60),ig.getY(60)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal2.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal2.currentAnim.alpha=0
                            ig.game.petal2Anim=ig.game.spawnEntity
                            (
                            Obj,ig.getX(263.7),ig.getY(245.25),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal2anim.png",ig.getX(274), ig.getY(469))
                                }
                            )
                            ig.game.petal2Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal2Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8],true )
                            ig.game.petal2Anim.currentAnim.alpha=0
                            ig.game.petal2Anim.currentAnim=ig.game.petal2Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn2c.zIndex=this.entities.length-1

        	this.petalBtn3a=this.spawnEntity
        	(
        		Button,ig.getX(297),ig.getY(375),
        		{
        			size:{x:ig.getX(46),y:ig.getY(45)},
        			animSheet:new ig.AnimationSheet("media/petalbtn3a.png",ig.getX(46),ig.getY(45)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal3.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal3.currentAnim.alpha=0
                            ig.game.petal3Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(230.15),ig.getY(194.75),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal3anim.png",ig.getX(280), ig.getY(312))
                                }
                            )
                            ig.game.petal3Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal3Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal3Anim.currentAnim.alpha=0
                            ig.game.petal3Anim.currentAnim=ig.game.petal3Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn3a.zIndex=this.entities.length-1

        	this.petalBtn3b=this.spawnEntity
        	(
        		Button,ig.getX(344.35),ig.getY(356.35),
        		{
        			size:{x:ig.getX(56),y:ig.getY(56)},
        			animSheet:new ig.AnimationSheet("media/petalbtn3b.png",ig.getX(56),ig.getY(56)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal3.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal3.currentAnim.alpha=0
                            ig.game.petal3Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(230.15),ig.getY(194.75),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal3anim.png",ig.getX(280), ig.getY(312))
                                }
                            )
                            ig.game.petal3Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal3Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal3Anim.currentAnim.alpha=0
                            ig.game.petal3Anim.currentAnim=ig.game.petal3Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn3b.zIndex=this.entities.length-1

        	this.petalBtn3c=this.spawnEntity
        	(
        		Button,ig.getX(405.35),ig.getY(345.35),
        		{
        			size:{x:ig.getX(48),y:ig.getY(48)},
        			animSheet:new ig.AnimationSheet("media/petalbtn3c.png",ig.getX(48),ig.getY(48)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal3.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal3.currentAnim.alpha=0
                            ig.game.petal3Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(230.15),ig.getY(194.75),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal3anim.png",ig.getX(280), ig.getY(312))
                                }
                            )
                            ig.game.petal3Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal3Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal3Anim.currentAnim.alpha=0
                            ig.game.petal3Anim.currentAnim=ig.game.petal3Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn3c.zIndex=this.entities.length-1

        	this.petalBtn4a=this.spawnEntity
        	(
        		Button,ig.getX(325),ig.getY(186),
        		{
        			size:{x:ig.getX(64),y:ig.getY(64)},
        			animSheet:new ig.AnimationSheet("media/petalbtn4a.png",ig.getX(64),ig.getY(64)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal4.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal4.currentAnim.alpha=0
                            ig.game.petal4Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(186.9),ig.getY(158.55),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal4anim.png",ig.getX(328), ig.getY(313))
                                }
                            )
                            ig.game.petal4Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal4Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8],true )
                            ig.game.petal4Anim.currentAnim.alpha=0
                            ig.game.petal4Anim.currentAnim=ig.game.petal4Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn4a.zIndex=this.entities.length-1

        	this.petalBtn4b=this.spawnEntity
        	(
        		Button,ig.getX(355),ig.getY(208),
        		{
        			size:{x:ig.getX(80),y:ig.getY(78)},
        			animSheet:new ig.AnimationSheet("media/petalbtn4b.png",ig.getX(80),ig.getY(78)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal4.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal4.currentAnim.alpha=0
                            ig.game.petal4Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(186.9),ig.getY(158.55),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal4anim.png",ig.getX(328), ig.getY(313))
                                }
                            )
                            ig.game.petal4Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal4Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8],true )
                            ig.game.petal4Anim.currentAnim.alpha=0
                            ig.game.petal4Anim.currentAnim=ig.game.petal4Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn4b.zIndex=this.entities.length-1

        	this.petalBtn4c=this.spawnEntity
        	(
        		Button,ig.getX(407.35),ig.getY(255.9),
        		{
        			size:{x:ig.getX(64),y:ig.getY(62)},
        			animSheet:new ig.AnimationSheet("media/petalbtn4c.png",ig.getX(64),ig.getY(62)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal4.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal4.currentAnim.alpha=0
                            ig.game.petal4Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(186.9),ig.getY(158.55),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal4anim.png",ig.getX(328), ig.getY(313))
                                }
                            )
                            ig.game.petal4Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal4Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8],true )
                            ig.game.petal4Anim.currentAnim.alpha=0
                            ig.game.petal4Anim.currentAnim=ig.game.petal4Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn4c.zIndex=this.entities.length-1

        	this.petalBtn5a=this.spawnEntity
        	(
        		Button,ig.getX(719.05),ig.getY(360.9),
        		{
        			size:{x:ig.getX(42),y:ig.getY(40)},
        			animSheet:new ig.AnimationSheet("media/petalbtn5a.png",ig.getX(42),ig.getY(40)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal5.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal5.currentAnim.alpha=0
                            ig.game.petal5Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(382.8),ig.getY(197.7),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal5anim.png",ig.getX(465), ig.getY(360))
                                }
                            )
                            ig.game.petal5Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal5Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal5Anim.currentAnim.alpha=0
                            ig.game.petal5Anim.currentAnim=ig.game.petal5Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn5a.zIndex=this.entities.length-1

        	this.petalBtn5b=this.spawnEntity
        	(
        		Button,ig.getX(657.3),ig.getY(338.9),
        		{
        			size:{x:ig.getX(64),y:ig.getY(62)},
        			animSheet:new ig.AnimationSheet("media/petalbtn5b.png",ig.getX(64),ig.getY(62)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal5.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal5.currentAnim.alpha=0
                            ig.game.petal5Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(382.8),ig.getY(197.7),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal5anim.png",ig.getX(465), ig.getY(360))
                                }
                            )
                            ig.game.petal5Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal5Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal5Anim.currentAnim.alpha=0
                            ig.game.petal5Anim.currentAnim=ig.game.petal5Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn5b.zIndex=this.entities.length-1

        	this.petalBtn5c=this.spawnEntity
        	(
        		Button,ig.getX(595.3),ig.getY(330.9),
        		{
        			size:{x:ig.getX(64),y:ig.getY(62)},
        			animSheet:new ig.AnimationSheet("media/petalbtn5c.png",ig.getX(64),ig.getY(62)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal5.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal5.currentAnim.alpha=0
                            ig.game.petal5Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(382.8),ig.getY(197.7),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal5anim.png",ig.getX(465), ig.getY(360))
                                }
                            )
                            ig.game.petal5Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal5Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal5Anim.currentAnim.alpha=0
                            ig.game.petal5Anim.currentAnim=ig.game.petal5Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn5c.zIndex=this.entities.length-1

        	this.petalBtn6a=this.spawnEntity
        	(
        		Button,ig.getX(491.3),ig.getY(117.9),
        		{
        			size:{x:ig.getX(64),y:ig.getY(62)},
        			animSheet:new ig.AnimationSheet("media/petalbtn6a.png",ig.getX(64),ig.getY(62)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal6.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal6.currentAnim.alpha=0
                            ig.game.petal6Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(332.5),ig.getY(54.6),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal6anim.png",ig.getX(338), ig.getY(296))
                                }
                            )
                            ig.game.petal6Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal6Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal6Anim.currentAnim.alpha=0
                            ig.game.petal6Anim.currentAnim=ig.game.petal6Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn6a.zIndex=this.entities.length-1

        	this.petalBtn6b=this.spawnEntity
        	(
        		Button,ig.getX(489),ig.getY(178),
        		{
        			size:{x:ig.getX(74),y:ig.getY(72)},
        			animSheet:new ig.AnimationSheet("media/petalbtn6b.png",ig.getX(74),ig.getY(72)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal6.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal6.currentAnim.alpha=0
                            ig.game.petal6Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(332.5),ig.getY(54.6),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal6anim.png",ig.getX(338), ig.getY(296))
                                }
                            )
                            ig.game.petal6Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal6Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal6Anim.currentAnim.alpha=0
                            ig.game.petal6Anim.currentAnim=ig.game.petal6Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn6b.zIndex=this.entities.length-1

        	this.petalBtn6c=this.spawnEntity
        	(
        		Button,ig.getX(494.3),ig.getY(247.35),
        		{
        			size:{x:ig.getX(56),y:ig.getY(54)},
        			animSheet:new ig.AnimationSheet("media/petalbtn6c.png",ig.getX(56),ig.getY(54)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal6.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal6.currentAnim.alpha=0
                            ig.game.petal6Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(332.5),ig.getY(54.6),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal6anim.png",ig.getX(338), ig.getY(296))
                                }
                            )
                            ig.game.petal6Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal6Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal6Anim.currentAnim.alpha=0
                            ig.game.petal6Anim.currentAnim=ig.game.petal6Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn6c.zIndex=this.entities.length-1

        	this.petalBtn7a=this.spawnEntity
        	(
        		Button,ig.getX(677),ig.getY(185),
        		{
        			size:{x:ig.getX(60),y:ig.getY(58)},
        			animSheet:new ig.AnimationSheet("media/petalbtn7a.png",ig.getX(60),ig.getY(58)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal7.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal7.currentAnim.alpha=0
                            ig.game.petal7Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(371.45),ig.getY(148.45),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal7anim.png",ig.getX(429), ig.getY(308))
                                }
                            )
                            ig.game.petal7Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal7Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5],true )
                            ig.game.petal7Anim.currentAnim.alpha=0
                            ig.game.petal7Anim.currentAnim=ig.game.petal7Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn7a.zIndex=this.entities.length-1

        	this.petalBtn7b=this.spawnEntity
        	(
        		Button,ig.getX(630),ig.getY(202),
        		{
        			size:{x:ig.getX(76),y:ig.getY(74)},
        			animSheet:new ig.AnimationSheet("media/petalbtn7b.png",ig.getX(76),ig.getY(74)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal7.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal7.currentAnim.alpha=0
                            ig.game.petal7Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(371.45),ig.getY(148.45),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal7anim.png",ig.getX(429), ig.getY(308))
                                }
                            )
                            ig.game.petal7Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal7Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5],true )
                            ig.game.petal7Anim.currentAnim.alpha=0
                            ig.game.petal7Anim.currentAnim=ig.game.petal7Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn7b.zIndex=this.entities.length-1

        	this.petalBtn7c=this.spawnEntity
        	(
        		Button,ig.getX(586.3),ig.getY(240.9),
        		{
        			size:{x:ig.getX(64),y:ig.getY(62)},
        			animSheet:new ig.AnimationSheet("media/petalbtn7c.png",ig.getX(64),ig.getY(62)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal7.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal7.currentAnim.alpha=0
                            ig.game.petal7Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(371.45),ig.getY(148.45),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal7anim.png",ig.getX(429), ig.getY(308))
                                }
                            )
                            ig.game.petal7Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal7Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5],true )
                            ig.game.petal7Anim.currentAnim.alpha=0
                            ig.game.petal7Anim.currentAnim=ig.game.petal7Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn7c.zIndex=this.entities.length-1

        	this.petalBtn8a=this.spawnEntity
        	(
        		Button,ig.getX(640.3),ig.getY(458.9),
        		{
        			size:{x:ig.getX(64),y:ig.getY(62)},
        			animSheet:new ig.AnimationSheet("media/petalbtn8a.png",ig.getX(64),ig.getY(62)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal8.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal8.currentAnim.alpha=0
                            ig.game.petal8Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(373.65),ig.getY(238.7),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal8anim.png",ig.getX(429), ig.getY(432))
                                }
                            )
                            ig.game.petal8Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal8Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal8Anim.currentAnim.alpha=0
                            ig.game.petal8Anim.currentAnim=ig.game.petal8Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn8a.zIndex=this.entities.length-1

        	this.petalBtn8b=this.spawnEntity
        	(
        		Button,ig.getX(600),ig.getY(421),
        		{
        			size:{x:ig.getX(66),y:ig.getY(64)},
        			animSheet:new ig.AnimationSheet("media/petalbtn8b.png",ig.getX(66),ig.getY(64)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal8.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal8.currentAnim.alpha=0
                            ig.game.petal8Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(373.65),ig.getY(238.7),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal8anim.png",ig.getX(429), ig.getY(432))
                                }
                            )
                            ig.game.petal8Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal8Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal8Anim.currentAnim.alpha=0
                            ig.game.petal8Anim.currentAnim=ig.game.petal8Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn8b.zIndex=this.entities.length-1

        	this.petalBtn8c=this.spawnEntity
        	(
        		Button,ig.getX(568.25),ig.getY(393.65),
        		{
        			size:{x:ig.getX(48),y:ig.getY(48)},
        			animSheet:new ig.AnimationSheet("media/petalbtn8c.png",ig.getX(48),ig.getY(48)),
        			pressedUp:function()
        			{
        				
        				if(ig.game.petal8.currentAnim.alpha!=0 && ig.game.timeCtr.delta()>1)
        				{
        					ig.game.petal8.currentAnim.alpha=0
                            ig.game.petal8Anim=ig.game.spawnEntity
                            (
                                Obj,ig.getX(373.65),ig.getY(238.7),
                                {
                                    animSheet:new ig.AnimationSheet("media/petal8anim.png",ig.getX(429), ig.getY(432))
                                }
                            )
                            ig.game.petal8Anim.zIndex=ig.game.entities.length-1
                            ig.game.petal8Anim.addAnim("idle",0.033, [0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],true )
                            ig.game.petal8Anim.currentAnim.alpha=0
                            ig.game.petal8Anim.currentAnim=ig.game.petal8Anim.anims.idle.rewind();
                            ig.game.timeCtr.reset();
        					ig.game.drawFlag=false
        					var flag=true
        					for(var i=1;i<=8;i++)
        					{
        						if (ig.game["petal"+i].currentAnim.alpha>0)
        						 {
        						 	flag=false
        						 }
        					}
        					if (flag && ig.game.timeCtr.delta()>1)
        					 {
        					 	ig.system.setGame(FinalWin)
        					 	
        					 }
        				}


        			}
        		}
        	)
        	this.petalBtn8c.zIndex=this.entities.length-1

            //this.timeCtr.pause();
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
	          if (!this.drawFlag || this.timeCtr.delta()<=1)
	           {
	              this.parent();
                  //this.petal4Anim.draw();
	              this.drawFlag=true
	           }
	          
              

	        }
		},

		update:function()
		{
			this.parent();
	        
             if (this.timeCtr.delta()>1)
              {
                this.timeCtr.pause();
                for (var i = 1; i <=8 ; i++)
                {
                    if (this["petal"+i+"Anim"]!=null)
                     {
                        this["petal"+i+"Anim"].kill();
                        this["petal"+i+"Anim"]=null
                     }
                    

                }
                var flag=true
                    for(var i=1;i<=8;i++)
                    {
                        if (this["petal"+i].currentAnim.alpha>0)
                        {
                           flag=false
                        }
                    }
                    if (flag && this.timeCtr.delta()>1)
                    {
                        ig.system.setGame(FinalWin)
                        
                    }
              }
		},

	})
})