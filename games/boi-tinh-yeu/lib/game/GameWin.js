ig.module(
  'game.GameWin'
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
.defines(function() {
  	GameWin = ig.Game.extend({
  		mBg:null,
      soundBtn:null,
      optionSheet:null,
      optIdx:1,

      pauseState:false,

      btn1:null,
      btn2:null,
      btn3:null,

      drawFlag:false,
  		
  		font: new ig.Font( '', 30, null, null, '#ee6256','center', 2, true),

  		init:function() {

        ig.resources = [];
        ig.ready = false;

        dummyImages=[
              new ig.Image("media/ingame-2bg.png"),
              new ig.Image("media/sound.png"),
              new ig.Image("media/btn.png"),
              new ig.Image("media/quizsheet.png")

        ]


        ig.input.initMouse();
        ig.input.bind( ig.KEY.MOUSE1, 'click');

        ig.global.score=0

        this.mBg=this.spawnEntity
        (
          Bg,ig.getX(0),ig.getY(0),
          {
            animSheet:new ig.AnimationSheet("media/ingame-2bg.png",ig.getX(1024),ig.getY(768))
          }
        )
        this.mBg=this.entities.length-1

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

        this.optionSheet=this.spawnEntity
        (
          Obj,ig.getX(89.4),ig.getY(239.6),
          {
            animSheet:new ig.AnimationSheet("media/quizsheet.png",ig.getX(844), ig.getY(278))
          }
        )
        this.optionSheet.zIndex=this.entities.length-1
        this.optionSheet.addAnim("2",1,[1])
        this.optionSheet.addAnim("3",1,[2])
        this.optionSheet.addAnim("4",1,[3])
        this.optionSheet.addAnim("5",1,[4])


        this.btn1=this.spawnEntity
        (
          Button,ig.getX(90.1),ig.getY(242.3),
          {
            size:{x:ig.getX(272),y:ig.getY(274)},
            animSheet:new ig.AnimationSheet("media/btn.png",ig.getX(272),ig.getY(274)),
            pressedUp:function()
            {
              ig.global.score+=1
              if (ig.game.optIdx<5)
               {
                  ig.game.optIdx+=1
                  ig.game.optionSheet.currentAnim=ig.game.optionSheet.anims[ig.game.optIdx].rewind();
                  ig.game.drawFlag=false
               }
              else
              {
                ig.system.setGame(Game2)
              }
              

            }
          }
        )
        this.btn1.zIndex=this.entities.length-1

        this.btn2=this.spawnEntity
        (
          Button,ig.getX(374.15),ig.getY(242.3),
          {
            size:{x:ig.getX(272),y:ig.getY(274)},
            animSheet:new ig.AnimationSheet("media/btn.png",ig.getX(272),ig.getY(274)),
            pressedUp:function()
            {
              ig.global.score+=2
              if (ig.game.optIdx<5)
               {
                  ig.game.optIdx+=1
                  ig.game.optionSheet.currentAnim=ig.game.optionSheet.anims[ig.game.optIdx].rewind();
                  ig.game.drawFlag=false
               }
              else
              {
                ig.system.setGame(Game2)
              }
            }
          }
        )
        this.btn2.zIndex=this.entities.length-1

        this.btn3=this.spawnEntity
        (
          Button,ig.getX(661.4),ig.getY(242.3),
          {
            size:{x:ig.getX(272),y:ig.getY(274)},
            animSheet:new ig.AnimationSheet("media/btn.png",ig.getX(272),ig.getY(274)),
            pressedUp:function()
            {
              ig.global.score+=3
              if (ig.game.optIdx<5)
               {
                  ig.game.optIdx+=1
                  ig.game.optionSheet.currentAnim=ig.game.optionSheet.anims[ig.game.optIdx].rewind();
                  ig.game.drawFlag=false
               }
              else
              {
                ig.system.setGame(Game2)
              }
            }
          }
        )
        this.btn3.zIndex=this.entities.length-1

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

  	});
});