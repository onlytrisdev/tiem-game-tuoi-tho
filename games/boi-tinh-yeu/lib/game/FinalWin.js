ig.module(
  'game.FinalWin'
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

	FinalWin=ig.Game.extend({

		bgGame:null,
		soundBtn:null,
		mainmenuBtn:null,
		replayBtn:null,
        tower:null,
		resultIdx:1,
        resultScore:0,
		resultString:"",
        minScore:0,
        range:100,


		drawFlag:false,
        timeCtr:null,

        toggle:true,
        toggle2:false,
        toggle3:false,
        drawAll:false,

        pauseState:false,


		font: new ig.Font( '', 40, null, null, '#000000','center', 3, true),
		font2: new ig.Font( '', 40, null, null, '#000000','center', 3, true),
		font3: new ig.Font( '', 30, 401, 40, '#ffffff','center', 3, true),
        font4: new ig.Font( '', 90, 401, 40, '#C41F78','center', 3, true),



		init:function()
		{
			ig.resources = [];
        	ig.ready = false;

	        dummyImages=[
	              new ig.Image("media/endingbg.png"),
	              new ig.Image("media/sound.png"),
	              new ig.Image("media/mainmenubtn.png"),
	              new ig.Image("media/replay.png"),
                  new ig.Image("media/score_tower.png"),
                  new ig.Image("media/score_tower1.png")

	        ]
	        ig.input.initMouse();
        	ig.input.bind( ig.KEY.MOUSE1, 'click');

            this.timeCtr=new ig.Timer(3);

        	this.resultIdx=Math.floor((Math.random()*9)+1);
        	
        	//this.resultIdx=9

        	if (this.resultIdx==1)
        	 {
        	 	this.resultString="Tình yêu của bạn giống như kẹo: ngon ngọt.. nhưng không phải lúc nào cũng tốt cho bạn."
                this.minScore=0
                this.range=30
        	 }
        	else if(this.resultIdx==2)
        	{
        		this.resultString="Tình yêu của bạn giống như 1 cây  kem: Rất hấp dẫn, nhưng cũng rất nhanh chóng tan chảy."
                this.minScore=0
                this.range=30
        	}
        	else if(this.resultIdx==3)
        	{
        		this.resultString="Tình yêu của bạn giống như một ngọn nến: lung linh, nhưng cuối cùng nó cũng sẽ tan chảy..."
                this.minScore=0
                this.range=30
        	}
        	else if(this.resultIdx==4)
        	{
        		this.resultString="Tình yêu của bạn giống như 1 cây gỗ: nó có thể xây dựng 1 tình yêu vững chắc, nhưng sẽ cháy rất nhanh nếu chạm vào lửa."
                this.minScore=31
                this.range=30
        	}
        	else if(this.resultIdx==5)
        	{
        		this.resultString="Tình yêu của bạn như 1 chiếc khăn len: nó rất ấm áp..."
                this.minScore=31
                this.range=30
        	}
        	else if(this.resultIdx==6)
        	{
        		this.resultString="Tình yêu của bạn giống như cao su: Rất là mạnh mẽ, tuy nhiên không nên kéo quá căng..."
                this.minScore=31
                this.range=30
        	}
        	else if(this.resultIdx==7)
        	{
        		this.resultString="Tình yêu của bạn giống như thép: nó rất cứng và không dễ bị ăn mòn."
                this.minScore=61
                this.range=40
        	}
        	else if(this.resultIdx==8)
        	{
        		this.resultString="Tình yêu của bạn giống như vàng: rất tinh tế, và không dễ bị ăn mòn."
                this.minScore=61
                this.maxScore=40
        	}
        	else if(this.resultIdx==9)
        	{
        		this.resultString="Tình yêu của bạn giống như một viên kim cương: khó mài dũa, nhưng là vĩnh cửu."
                this.minScore=61
                this.maxScore=40
        	}

        	this.bgGame=this.spawnEntity
        	(
        		Bg,ig.getX(0),ig.getY(0),
        		{
        			animSheet:new ig.AnimationSheet("media/endingbg.png",ig.getX(1024),ig.getY(768))
        		}
        	)
        	this.bgGame.zIndex=this.entities.length-1

        	this.soundBtn=this.spawnEntity
        	(
        		Button,ig.getX(47.8),ig.getY(46.35),
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

             this.tower1=this.spawnEntity
             (
                Obj,ig.getX(505.55),ig.getY(161.2),
                {
                    animSheet:new ig.AnimationSheet("media/score_tower1.png",ig.getX(509),ig.getY(612))
                }
            )
             this.tower1.zIndex=this.entities.length-1

            this.tower=this.spawnEntity
            (
                Obj,ig.getX(496.55),ig.getY(572.45),
                {
                    animSheet:new ig.AnimationSheet("media/score_tower.png",ig.getX(531), ig.getY(381))
                }
            )
            this.tower.zIndex=this.entities.length-1
            this.tower.addAnim("animate",0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,5,5],true)

        	this.mainmenuBtn=this.spawnEntity
        	(
        		Button,ig.getX(270.1),ig.getY(670.95),
        		{
        			size:{x:ig.getX(217),y:ig.getY(59)},
        			animSheet:new ig.AnimationSheet("media/mainmenubtn.png",ig.getX(217),ig.getY(59)),
        			pressedUp:function()
        			{
                        if (ig.game.toggle3)
                         {
                            ig.system.setGame(MainMenuWin)
                         }
        				
        			}
        		}
        	)
        	this.mainmenuBtn.zIndex=this.entities.length-1

        	this.replayBtn=this.spawnEntity
        	(
        		Button,ig.getX(60.55),ig.getY(670.95),
        		{
        			size:{x:ig.getX(198),y:ig.getY(54)},
        			animSheet:new ig.AnimationSheet("media/replay.png",ig.getX(198),ig.getY(54)),
        			pressedUp:function()
        			{
        				adRequest();
                        if (ig.game.toggle3)
                        {
                            ig.system.setGame(NameWin)
                        }
        				
        			}
        		}
        	)
        	this.replayBtn.zIndex=this.entities.length-1

        	

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
	              this.font.draw(ig.global.name1,ig.getX(274),ig.getY(266),ig.Font.ALIGN.CENTER)
	              this.font2.draw(ig.global.name2,ig.getX(274),ig.getY(412),ig.Font.ALIGN.CENTER)
                  if (this.drawAll)
                   {
                        this.font3.draw(this.resultString,ig.getX(274),ig.getY(457),ig.Font.ALIGN.CENTER)
                        
                   }
	              
                  if (this.toggle2 || this.drawAll)
                   {
                        //this.drawAll=false
                        this.font4.draw(this.resultScore+"%",ig.getX(782),ig.getY(688),ig.Font.ALIGN.CENTER)
                   }
	              this.drawFlag=true
	           }
	          if (this.toggle)
               {
                    this.toggle=false
                    setTimeout(function() 
                        {
                            ig.game.tower.currentAnim=ig.game.tower.anims.animate.rewind();
                            ig.game.timeCtr.reset();
                        }, 500);
                    setTimeout(function()
                    {
                        ig.game.toggle2=true
                        ig.game.drawFlag=false
                        ig.game.timeCtr.reset();

                    },750)
                    
               }


	        }
		},

		update:function()
		{
			this.parent();

            if (this.toggle2 && this.timeCtr.delta()<=1)
             {
                this.resultScore=Math.floor((Math.random()*100)+1);
             }
             else if (this.timeCtr.delta()>1 && this.toggle2)
              {
                this.toggle2=false
                this.drawAll=true
                this.toggle3=true
                
                
                this.resultScore=Math.floor((Math.random()*this.range)+this.minScore+1);
                if (this.resultScore>100)
                 {
                    this.resultScore=100
                 }
                 this.drawFlag=false
              }
	        
		},
	})
})

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