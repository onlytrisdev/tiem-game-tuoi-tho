ig.module(
  'game.DecorWin'
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
  	DecorWin = ig.Game.extend({
  		mBg:null,
      winname:"Decor",

      tutor:1,
      showTutor:false,
      pauseState:true,
      
      totalMoney:0,
      animate:false,

      customerMin:2,
      customerMax:3,
      customerType:2,
      reqQty:1,

      bus:null,
      busStop:false,
      busTimer:60,

      chosenDecor:null,

      arrowCustomer:null,
      arrCustomer:[],
      arrTiles2:[],

      arrleft:null,
      arrright:null,
      decorBox:null,
      
      pathOb:"",
      obX:0,
      obY:0,
      obCost:0,
      errorinfo:null,
     
  		
      font: new ig.Font( '', 16, null, null, '#000000','center', 3, false),
      font2: new ig.Font( '', 12, null, null, '#000000','center', 3, false),
  		font3: new ig.Font( '', 16, null, null, '#ffffff','center', 3, true),

      drawFlag:false,

      arrTiles:[[289.134,88,true,false,"1-1"],[248.716,109,true,false,"1-2"],[208.299,129,true,false,"1-3"],[167.882,149,true,false,"1-4"],[127.465,169,true,false,"1-5"],
                [491.219,28,false,false,"2-1"],[450.803,48,false,false,"2-2"],[410.385,68,false,false,"2-3"],[369.967,88,false,false,"2-4"],[329.55,109,true,false,"2-5"],[289.133,129,true,false,"2-6"],[248.716,149,false,false,"2-7"],[208.299,169,false,false,"2-8"],[167.882,189,false,false,"2-9"],[6.213,270,false,false,"2-10"],
                [531.637,48,false,false,"3-1"],[450.803,88,false,false,"3-2"],[410.385,109,false,false,"3-3"],[369.967,129,true,false,"3-4"],[329.55,149,true,false,"3-5"],[289.133,169,false,false,"3-6"],[248.715,189,false,false,"3-7"],[208.299,210,false,false,"3-8"],[167.882,230,true,false,"3-9"],[6.212,311,false,true,"3-10"],
                [572.053,68,false,false,"4-1"],[450.803,129,false,false,"4-2"],[410.385,149,true,false,"4-3"],[369.965,169,true,false,"4-4"],[289.132,210,false,false,"4-5"],[248.715,230,false,false,"4-6"],[208.299,250,true,false,"4-7"],[167.881,270,true,false,"4-8"],[6.212,351,false,false,"4-9"],
                [612.469,88,false,false,"5-1"],[531.635,129,false,false,"5-2"],[491.219,149,false,false,"5-3"],[450.801,169,true,false,"5-4"],[410.383,189,true,false,"5-5"],[289.132,250,false,false,"5-6"],[248.715,270,true,false,"5-7"],[208.298,290,true,false,"5-8"],[46.629,371,false,false,"5-9"],[6.212,391,false,false,"5-10"],
                [531.635,169,false,false,"6-1"],[491.219,189,true,false,"6-2"],[450.801,210,true,false,"6-3"],[410.383,230,false,false,"6-4"],[369.965,250,false,false,"6-5"],[329.549,270,false,false,"6-6"],[289.132,290,true,false,"6-7"],[248.715,311,true,false,"6-8"],[208.298,331,true,false,"6-9"],[167.88,351,true,false,"6-10"],[127.463,371,true,false,"6-11"],[87.046,391,true,false,"6-12"],[46.629,412,false,false,"6-13"],[6.212,432,false,false,"6-14"],
                [612.469,169,false,false,"7-1"],[572.051,189,false,false,"7-2"],[531.635,210,true,false,"7-3"],[491.217,230,true,false,"7-4"],[450.801,250,true,false,"7-5"],[410.383,270,true,false,"7-6"],[369.965,290,true,false,"7-7"],[329.549,311,true,false,"7-8"],[289.131,331,true,false,"7-9"],[248.715,351,true,false,"7-10"],[208.297,371,true,false,"7-11"],[167.88,391,true,false,"7-11"],[127.463,412,true,false,"7-12"],[87.045,432,false,false,"7-13"],
                [612.469,210,true,false,"8-1"],[572.051,230,true,false,"8-2"],[531.635,250,true,false,"8-3"],[491.217,270,true,false,"8-4"],[450.799,290,true,false,"8-5"],[410.383,311,true,false,"8-6"],[289.131,371,true,false,"8-7"],[248.714,391,false,false,"8-8"],[167.88,432,false,false,"8-9"],[127.462,452,false,false,"8-10"],[87.045,472,false,false,"8-11"],
                [612.469,250,true,false,"9-1"],[572.051,270,true,false,"9-2"],[531.635,290,true,false,"9-3"],[491.217,311,true,false,"9-4"],[450.799,331,true,false,"9-5"],[329.548,391,true,false,"9-6"],[289.131,412,false,false,"9-7"],[167.879,472,false,false,"9-8"],
                [612.467,290,false,false,"10-1"],[572.051,311,false,false,"10-2"],[531.633,331,false,true,"10-3"],[491.217,351,true,false,"10-4"],[450.799,371,true,false,"10-5"],[410.383,391,true,false,"10-6"],[369.965,412,true,false,"10-7"],[329.548,432,false,false,"10-8"],[289.13,452,false,false,"10-9"],[248.713,472,false,false,"10-10"],[208.296,492,false,false,"10-11"],
                [612.467,331,false,false,"11-1"],[572.051,351,false,false,"10-3"],[531.633,371,true,false,"10-4"],[491.217,391,true,false,"10-5"],[450.799,412,true,false,"10-6"],[410.381,432,true,false,"10-7"],[369.965,452,false,false,"10-8"],[329.546,472,false,false,"10-9"],[289.129,492,false,false,"10-10"],
                [531.633,412,true,true,"12-1"],[491.217,432,true,false,"12-2"],[450.799,452,true,false,"12-3"]
                
                ],

      arrObj:[],


      arrObj2:[],

  		init:function() {

        ig.resources = [];
      ig.ready = false;

        dummyImages = [
          new ig.Image( "media/game/bg.png"),
          new ig.Image("media/game/tile.png"),
          new ig.Image("media/game/plant.png"),
          new ig.Image("media/game/fence.png"),
          new ig.Image("media/game/carousel.png"),
          new ig.Image("media/game/fountain.png"),
          new ig.Image("media/game/frontplant.png"),
          new ig.Image("media/game/stage.png"),
          new ig.Image("media/game/quest.png"),
          new ig.Image("media/game/pausebtn.png"),
          new ig.Image("media/sound.png"),
          new ig.Image("media/game/time.png"),
          new ig.Image("media/game/timearrow.png"),
          new ig.Image("media/game/timecover.png"),
          new ig.Image("media/game/money.png"),
          new ig.Image("media/game/startplay.png"),
          new ig.Image("media/game/shade.png"),
          new ig.Image("media/game/girltutor.png"),
          new ig.Image("media/game/tut1.png"),
          new ig.Image("media/game/info3.png"),
          new ig.Image("media/game/info6.png"),
          new ig.Image("media/game/taphere.png"),
          new ig.Image("media/game/arrowtutor.png"),
          
          ////////stand
          new ig.Image("media/game/stand11.png"),
          new ig.Image("media/game/stand12.png"),
          new ig.Image("media/game/stand21.png"),
          new ig.Image("media/game/stand22.png"),
          //////decor
          new ig.Image("media/game/decor11.png"),
          new ig.Image("media/game/decor12.png"),
          new ig.Image("media/game/decor13.png"),
          new ig.Image("media/game/decor21.png"),
          new ig.Image("media/game/decor22.png"),
          new ig.Image("media/game/decor23.png"),
          new ig.Image("media/game/decor31.png"),
          new ig.Image("media/game/decor32.png"),
          new ig.Image("media/game/decor33.png"),
          /*new ig.Image("media/game/decor41.png"),
          new ig.Image("media/game/decor42.png"),
          new ig.Image("media/game/decor43.png"),*/
          
          new ig.Image("media/game/tut1d.png"),
          new ig.Image("media/game/tut1e.png"),
          new ig.Image("media/game/bar1.png"),
          new ig.Image("media/game/tut1g.png"),
          new ig.Image("media/game/questbg.png"),
          new ig.Image("media/game/close.png"),
          new ig.Image("media/game/q1.png"),
          new ig.Image("media/game/q2.png"),
          new ig.Image("media/game/q3.png"),
          new ig.Image("media/game/q4.png"),
          new ig.Image("media/game/q5.png"),
          new ig.Image("media/game/q6.png"),
          new ig.Image("media/game/arrleft.png"),
          new ig.Image("media/game/arrright.png"),
          new ig.Image("media/game/centang.png"),
          
          new ig.Image("media/game/continuebtn.png"),
          new ig.Image("media/game/mainmenubtn.png"),
          new ig.Image("media/game/moregamelrg.png"),
          new ig.Image("media/game/failed.png"),
          new ig.Image("media/game/tryagainbtn.png"),
          new ig.Image("media/game/successbox.png"),
          new ig.Image("media/game/nextstage.png"),
          new ig.Image("media/game/decorate.png"),
          new ig.Image("media/game/mainmenukcl.png"),
          new ig.Image("media/game/moregamekcl.png"),

          new ig.Image("media/game/decor/kotakdekor.png"),
          new ig.Image("media/game/decor/standtab.png"),
          new ig.Image("media/game/decor/decortab.png"),
          new ig.Image("media/game/decor/otherstab.png"),
          new ig.Image("media/game/decor/close.png"),
          new ig.Image("media/game/decor/stand11.png"),
          new ig.Image("media/game/decor/stand12.png"),
          new ig.Image("media/game/decor/stand21.png"),
          new ig.Image("media/game/decor/stand22.png"),
          new ig.Image("media/game/decor/buybtn.png"),
          new ig.Image("media/game/decor/pricebox.png"),
          new ig.Image("media/game/decor/decor11.png"),
          new ig.Image("media/game/decor/decor12.png"),
          new ig.Image("media/game/decor/decor13.png"),
          new ig.Image("media/game/decor/decor21.png"),
          new ig.Image("media/game/decor/decor22.png"),
          new ig.Image("media/game/decor/decor23.png"),
          new ig.Image("media/game/decor/decor31.png"),
          new ig.Image("media/game/decor/decor32.png"),
          new ig.Image("media/game/decor/decor33.png"),
          // new ig.Image("media/game/decor/decor41.png"),
          // new ig.Image("media/game/decor/decor42.png"),
          // new ig.Image("media/game/decor/decor43.png"),
          new ig.Image("media/game/decor/others11.png"),
          new ig.Image("media/game/decor/others12.png"),
          new ig.Image("media/game/decor/others13.png"),
          new ig.Image("media/game/decor/others21.png"),
          new ig.Image("media/game/decor/others22.png"),
          new ig.Image("media/game/decor/others23.png"),
          new ig.Image("media/game/errorinfo.png"),
          new ig.Image("media/game/detector.png"),
          new ig.Image("media/game/color.png"),
          new ig.Image("media/game/rotatebtn.png"),
          new ig.Image("media/game/sell.png"),
          new ig.Image("media/game/questnotice.png"),


      ];

      
      ig.input.initMouse();
        ig.input.bind( ig.KEY.MOUSE1, 'click');

        // this.beginTimer=this.levelTimer

        ///////////////buat testing
        // ig.global.level=8
        ///////////
        
        this.mBg=this.spawnEntity
        (
          Bg,ig.getX(0),ig.getY(0),
          {
            animSheet:new ig.AnimationSheet("media/game/bg"+ig.global.tiletype+ig.global.grasstype+".png",ig.getX(700),ig.getY(525))
          }
        )
        this.mBg.zIndex=this.entities.length-1

        if (ig.global.level>5)
         {
            for (var i = 0; i < 4; i++)
            {
              
                  this["cart"+i]=this.spawnEntity
                  (
                    Obj,ig.getX(218-(i*77)),ig.getY(-6+(i*37)),
                    {
                      
                      animSheet:new ig.AnimationSheet("media/game/cart.png",ig.getX(119),ig.getY(102)),
                     
                    }
                  )
                this["cart"+i].zIndex=this.entities.length-1
            }
         }

        this.fence=this.spawnEntity
        (
          Obj,ig.getX(-96.68),ig.getY(-53),
          {
            animSheet:new ig.AnimationSheet("media/game/pagar.png",ig.getX(641),ig.getY(356))
          }
        )
        this.fence.zIndex=this.entities.length-1

        this.warning=this.spawnEntity
        (
          Obj,ig.getX(188),ig.getY(95),
          {
            animSheet:new ig.AnimationSheet("media/game/warning.png",ig.getX(71),ig.getY(46))
          }
        )
        this.warning.zIndex=this.entities.length-1

        ////init tileLayer
        for (var i = 0; i < this.arrTiles.length; i++)
         {
            this["tile"+i]=this.spawnEntity
            (
              Tile,ig.getX(this.arrTiles[i][0]),ig.getY(this.arrTiles[i][1]),
              {
                size:{x:ig.getX(82),y:ig.getY(40)},
                // type:ig.Entity.TYPE.A,
                animSheet:new ig.AnimationSheet("media/game/tile.png",ig.getX(82),ig.getY(40)),
                onMouseUp:function()
                {
                  if (this.currentAnim.alpha==1)
                   {
                      ig.game.putOnObject(this.names)
                   }
                  
                }
                //animSheet:new ig.AnimationSheet("media/game/tree.png",ig.getX(82),ig.getY(130))
              }
            )
            this["tile"+i].names=i
            this["tile"+i].zIndex=100+this.entities.length-1
            this["tile"+i].road=this.arrTiles[i][2]
            this["tile"+i].filled=this.arrTiles[i][3]
            this["tile"+i].index=this.arrTiles[i][4]
            this["tile"+i].currentAnim.alpha=0
            this["tile"+i].changeSize();
            this.arrTiles2.push(this["tile"+i])
            //console.log(this["tile"+i].animSheet.image.path)
            //console.log(this["tile"+i].animSheet.height)
        }

        /////initobject
        
        for (var i = 0; i < ig.global.objectArr.length; i++)
        {

          this["obj"+i]=this.spawnEntity
          (
            Obj3,ig.getX(this["tile"+ig.global.objectArr[i].indx].pos.x),ig.getY(this["tile"+ig.global.objectArr[i].indx].pos.y),
            {
              size:{x:ig.getX(ig.global.objectArr[i].sizeX),y:ig.getY(ig.global.objectArr[i].sizeY)},
              animSheet:new ig.AnimationSheet(ig.global.objectArr[i].filepath,ig.getX(ig.global.objectArr[i].sizeX),ig.getY(ig.global.objectArr[i].sizeY)),
              onMouseUp:function()
              {
                ig.game.cekObjek(this);
              }
            }
          )

          this["obj"+i].zIndex=this.entities.length-1
          this["obj"+i].indx=ig.global.objectArr[i].indx

          this["obj"+i].sizeX=ig.global.objectArr[i].sizeX
          this["obj"+i].sizeY=ig.global.objectArr[i].sizeY
          this["obj"+i].filepath=ig.global.objectArr[i].filepath
          this["obj"+i].addAnim("idle1",1,[1])
          this["obj"+i].addAnim("idle2",1,[2])
          this["obj"+i].addAnim("idle3",1,[3])
          
          this["obj"+i].currentAnim=this["obj"+i].anims["idle"+ig.global.objectArr[i].colorIdx]
          this["obj"+i].currentAnim.flip.x=ig.global.objectArr[i].flip
          
          this["tile"+ig.global.objectArr[i].indx].filled=true
          this.repos(this["obj"+i]);
          // this.cekKursi(this["obj"+i])
          this.arrObj2.push(this["obj"+i])

        }

        

        this.carousel=this.spawnEntity
        (
          Obj3,ig.getX(6.046),ig.getY(195),
          {
            size:{x:ig.getX(244),y:ig.getY(196)},
            animSheet:new ig.AnimationSheet("media/game/carousel.png",ig.getX(244),ig.getY(196)),
            onMouseUp:function()
            {
                this.objekJalan(ig.game.chosenCustomer);
            }

          }
        )
        this.carousel.zIndex=this.entities.length-1
        this.carousel.addAnim("spin",0.033, [0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3])
        this.arrObj2.push(this.carousel)

        this.fountain=this.spawnEntity
        (
          Obj,ig.getX(329.892),ig.getY(311),
          {
            animSheet:new ig.AnimationSheet("media/game/fountain.png",ig.getX(164),ig.getY(101))
          }
        )
        this.fountain.zIndex=this.entities.length-1
        this.arrObj2.push(this.fountain)

        this.pinkgirl=this.spawnEntity
        (
          Obj,ig.getX(557.578),ig.getY(290),
          {
            animSheet:new ig.AnimationSheet("media/game/pinky.png",ig.getX(25),ig.getY(69))
          }
        )
        this.pinkgirl.zIndex=this.entities.length-1
        this.arrObj2.push(this.pinkgirl)


        /////sorting
        this.sortOut();

        this.frontfence=this.spawnEntity
        (
          Obj,ig.getX(310.437),ig.getY(329),
          {
            animSheet:new ig.AnimationSheet("media/game/frontplant.png",ig.getX(390),ig.getY(197))
          }
        )
        this.frontfence.zIndex=1000

        

        this.questBtn=this.spawnEntity
        (
          Button,ig.getX(529.966),ig.getY(18),
          {
            animSheet:new ig.AnimationSheet("media/game/quest.png",ig.getX(65),ig.getY(22)),
            size:{x:ig.getX(65),y:ig.getY(22)},
            pressedUp:function()
            {
              if (!ig.game.pauseState)
               {
                  ig.game.pauseState=true
                  if (ig.game.showTutor && ig.game.tutor==7)
                   {
                      ig.game.showTutor=false
                      ig.game.arrowTutor.kill();
                      ig.game.tutorBox.kill();
                      ig.game.girltutor.kill();
                   }
                   ig.game.questBox=ig.game.spawnEntity
                   (
                      Obj,ig.getX(153.467),ig.getY(126),
                      {
                        animSheet:new ig.AnimationSheet("media/game/questbg.png",ig.getX(393),ig.getY(288))
                      }
                    )
                    ig.game.questBox.zIndex=1100+ig.game.entities.length-1
                    ig.game.questBox.page=1
                    ig.game.closeBtn=ig.game.spawnEntity
                    (
                      Button,ig.getX(507),ig.getY(135),
                      {
                        size:{x:ig.getX(28),y:ig.getY(28)},
                        animSheet:new ig.AnimationSheet("media/game/close.png",ig.getX(28),ig.getY(28)),
                        pressedUp:function()
                        {
                          ig.game.questBox.kill();
                          
                          ig.game.arrleft.kill();
                          ig.game.arrleft=null
                          
                          ig.game.arrright.kill();
                          ig.game.arrright=null
                          ig.game.quest1.kill();
                          ig.game.quest2.kill();
                          ig.game.quest3.kill();
                          this.kill();
                          
                          /////tambahin kode kalo ada centangnya
                          for (var i = 1; i <= 3; i++)
                          {
                            if (ig.game["quest"+i].centang!=null)
                             {
                                ig.game["quest"+i].centang.kill();
                             }
                          }

                          ig.game.pauseState=false
                          ig.game.drawFlag=false
                        }
                      }
                    )
                    ig.game.closeBtn.zIndex=1100+ig.game.entities.length-1

                    for (var i = 1; i <= 3; i++)
                     {
                       ig.game["quest"+i]=ig.game.spawnEntity
                       (
                          Obj,ig.getX(171.59),ig.getY(168+(i-1)*65),
                          {
                            animSheet:new ig.AnimationSheet("media/game/q"+(i+(ig.game.questBox.page-1)*3)+".png",ig.getX(314),ig.getY(71))
                          }
                      )
                       ig.game["quest"+i].zIndex=1100+ig.game.entities.length-1
                       ig.game["quest"+i].centang=null
                       
                       if (ig.global["quest"+(i+(ig.game.questBox.page-1)*3)][0]==true)
                        {
                          
                          ///munculkan tanda centang kalo true
                          ig.game["quest"+i].centang=ig.game.spawnEntity
                          (
                            Obj,ig.getX(ig.game["quest"+i].pos.x+325),ig.getY(ig.game["quest"+i].pos.y+25),
                            {
                              animSheet:new ig.AnimationSheet("media/game/centang.png",ig.getX(31),ig.getY(25))
                            }
                          )
                          ig.game["quest"+i].centang.zIndex=1100+ig.game.entities.length-1
                               
                        }
                      

                    }
                    ig.game.arrleft=ig.game.spawnEntity
                      (
                        Button,ig.getX(285),ig.getY(368),
                        {
                          size:{x:ig.getX(30),y:ig.getY(30)},
                          animSheet:new ig.AnimationSheet("media/game/arrleft.png",ig.getX(26),ig.getY(30)),
                          pressedUp:function()
                          {
                            for (var i = 1; i <= 3; i++)
                            {
                              if (ig.game["quest"+i].centang!=null)
                               {
                                  ig.game["quest"+i].centang.kill();
                               }
                            }
                            ig.game.questBox.page==1 ? ig.game.questBox.page=2 : ig.game.questBox.page=1
                            for (var i = 1; i <= 3; i++)
                            {
                              ig.game["quest"+i].animSheet=new ig.AnimationSheet("media/game/q"+(i+(ig.game.questBox.page-1)*3)+".png",ig.getX(314),ig.getY(71))
                              
                              ig.game["quest"+i].addAnim("idle",1,[0])
                              
                              ig.game["quest"+i].currentAnim=ig.game["quest"+i].anims.idle
                              
                              if (ig.global["quest"+(i+(ig.game.questBox.page-1)*3)][0]==true)
                              {
                                ///munculkan tanda centang kalo true
                                ig.game["quest"+i].centang=ig.game.spawnEntity
                                (
                                  Obj,ig.getX(ig.game["quest"+i].pos.x+330),ig.getY(ig.game["quest"+i].pos.y+12.5),
                                  {
                                    animSheet:new ig.AnimationSheet("media/game/centang.png",ig.getX(31),ig.getY(25))
                                  }
                                  
                                )
                                ig.game["quest"+i].zIndex=1100+ig.game.entities.length-1
                              }
                            }
                            ig.game.drawFlag=false
                            
                          }
                        }
                      )
                      ig.game.arrleft.zIndex=1100+ig.game.entities.length-1
                      ig.game.arrright=ig.game.spawnEntity
                      (
                        Button,ig.getX(391),ig.getY(368),
                        {
                          size:{x:ig.getX(30),y:ig.getY(30)},
                          animSheet:new ig.AnimationSheet("media/game/arrright.png",ig.getX(26),ig.getY(30)),
                          pressedUp:function()
                          {
                            for (var i = 1; i <= 3; i++)
                            {
                              if (ig.game["quest"+i].centang!=null)
                               {
                                  ig.game["quest"+i].centang.kill();
                               }
                            }
                            
                            ig.game.questBox.page==1 ? ig.game.questBox.page=2 : ig.game.questBox.page=1
                            for (var i = 1; i <= 3; i++)
                            {
                              ig.game["quest"+i].animSheet=new ig.AnimationSheet("media/game/q"+(i+(ig.game.questBox.page-1)*3)+".png",ig.getX(314),ig.getY(71))
                              
                              ig.game["quest"+i].addAnim("idle",1,[0])
                              
                              ig.game["quest"+i].currentAnim=ig.game["quest"+i].anims.idle
                              
                              if (ig.global["quest"+(i+(ig.game.questBox.page-1)*3)][0]==true)
                              {
                                ///munculkan tanda centang kalo true
                                ig.game["quest"+i].centang=ig.game.spawnEntity
                                (
                                  Obj,ig.getX(ig.game["quest"+i].pos.x+330),ig.getY(ig.game["quest"+i].pos.y+12.5),
                                  {
                                    animSheet:new ig.AnimationSheet("media/game/centang.png",ig.getX(31),ig.getY(25))
                                  }
                                  
                                )
                                ig.game["quest"+i].zIndex=1100+ig.game.entities.length-1
                              }
                            }
                            ig.game.drawFlag=false

                          }
                        }
                      )
                      ig.game.arrright.zIndex=1100+ig.game.entities.length-1

                  ig.game.drawFlag=false

               }
            }
          }
        )
        this.questBtn.zIndex=this.entities.length+1000

        

        this.sound=this.spawnEntity
        (
          Button,ig.getX(645.021),ig.getY(16),
          {
            size:{x:ig.getX(36),y:ig.getY(27)},
            animSheet:new ig.AnimationSheet("media/sound.png",ig.getX(36),ig.getY(27)),
            pressedUp:function()
            {
              if (!ig.game.showTutor && !ig.game.pauseState)
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
               };
            }
          }
        )
        this.sound.zIndex=this.entities.length+1000
        this.sound.exception=true
        this.sound.addAnim("off",1,[1])

          if (!ig.global.SOUND)
             {
              this.sound.currentAnim=this.sound.anims.off.rewind();
             }

        

        
        this.startplay=this.spawnEntity
        (
          Button,ig.getX(541.619),ig.getY(475),
          {
            size:{x:ig.getX(145),y:ig.getY(39)},
            animSheet:new ig.AnimationSheet("media/game/startplay.png",ig.getX(145),ig.getY(39)),
            pressedUp:function()
            {
              if (!ig.game.pauseState)
               {
                  ig.game.pushObjectToArray();
                  if(ig.global.level==2)
                  {
                    ig.system.setGame(GameWin2)
                  }
                  else if(ig.global.level==3)
                  {
                    ig.system.setGame(GameWin3)
                  }
                  else if(ig.global.level==4)
                  {
                    ig.system.setGame(GameWin4)
                  }
                  else if(ig.global.level==5)
                  {
                    ig.system.setGame(GameWin5)
                  }
                  else if(ig.global.level==6)
                  {
                    ig.system.setGame(GameWin6)
                  }
                  else if(ig.global.level==7)
                  {
                    ig.system.setGame(GameWin7)
                  }
                  else if(ig.global.level==8)
                  {
                    ig.system.setGame(GameWin8)
                  }
                  
               }
            }
          }
        )
        this.startplay.zIndex=this.entities.length+1000
        

        ////tutorlayer
        if (ig.global.level==2 || ig.global.level==3 || ig.global.level==6)
         {
            this.shade=this.spawnEntity
            (
              Obj,ig.getX(0),ig.getY(0),
              {
                animSheet:new ig.AnimationSheet("media/game/shade.png",ig.getX(700),ig.getY(525))
              }
            )
            this.shade.zIndex=this.entities.length-1

            this.girltutor=this.spawnEntity
            (
              Obj,ig.getX(557.643),ig.getY(397),
              {
                animSheet:new ig.AnimationSheet("media/game/girltutor.png",ig.getX(120),ig.getY(152))
              }
            )
            this.girltutor.zIndex=this.entities.length-1

            var imgpath=""
            if (ig.global.level==2)
             {
                imgpath="media/game/tut1g.png"
             }
            else if (ig.global.level==3)
             {
                imgpath="media/game/info3.png"
             }
             else if (ig.global.level==6)
             {
                imgpath="media/game/info6.png"
             }
            this.tutorBox=this.spawnEntity
            (
              Obj,ig.getX(367.333),ig.getY(413),
              {
                animSheet:new ig.AnimationSheet(imgpath,ig.getX(212),ig.getY(70))
              }
            )
            this.tutorBox.zIndex=this.entities.length-1

            this.tutorBtn=this.spawnEntity
            (
              Button,ig.getX(512.604),ig.getY(383),
              {
                size:{x:ig.getX(55),y:ig.getY(19)},
                animSheet:new ig.AnimationSheet("media/game/taphere.png",ig.getX(55),ig.getY(19)),
                pressedUp:function()
                {
                  //ig.game.checkTutor();
                  ig.game.shade.kill();
                  ig.game.girltutor.kill();
                  ig.game.tutorBox.kill();
                  ig.game.tutorBtn.kill();
                  ig.game.arrowTutor.kill();
                  ig.game.checkQuest();
                  ig.game.pauseState=false
                  ig.game.drawFlag=false

                }
              }
            )
            this.tutorBtn.zIndex=this.entities.length-1

            this.arrowTutor=this.spawnEntity
            (
              Obj,ig.getX(117),ig.getY(457),
              {
                animSheet:new ig.AnimationSheet("media/game/arrowtutor.png",ig.getX(23),ig.getY(27))
              }
            )
            this.arrowTutor.zIndex=this.entities.length-1
            this.arrowTutor.currentAnim.flip.x=false
         }
        

        this.decorBtn=this.spawnEntity
        (
          Button,ig.getX(9),ig.getY(480),
          {
            size:{x:ig.getX(112),y:ig.getY(35)},
            animSheet:new ig.AnimationSheet("media/game/decorhut.png",ig.getX(112),ig.getY(35)),
            pressedUp:function()
            {
              if (!ig.game.pauseState)
               {
                  ig.game.decorDialog();
               }
            }
          }
        )
        this.decorBtn.zIndex=this.entities.length-1

        this.logo=this.spawnEntity
          (
            Button,ig.getX(10),ig.getY(10),
            {
              size:{x:ig.getX(115),y:ig.getY(71)},
              animSheet:new ig.AnimationSheet("media/logosmall.png",ig.getX(115),ig.getY(71)),
              pressedUp:function()
              {
                if (!ig.game.pauseState)
                {
                  ig.game.openLink("http://localhost");
                }
              }
            }
          )
          this.logo.zIndex=2000+this.entities.length-1

        if (ig.global.level!=2 && ig.global.level!=3 && ig.global.level!=6)
         {
            this.checkQuest();
         }    
        
        


        // load the resources
        ig.ready = true;

        // Start the custom preloader with the captured resources
        this.loader = new IntermediateLoader2( null, ig.resources );
        this.loader.load();

  		},

      reduceMoney:function()
      {
        ig.global.money-=this.obCost
      },

      cekObjek:function(obj)
      {
        if (obj.animSheet.image.path=="media/game/fence.png" && this.pauseState && this.pathOb!="" && (this.pathOb=="media/game/stand11.png" || this.pathOb=="media/game/stand12.png"))
         {
            /////tambah stand
            obj.animSheet=new ig.AnimationSheet(this.pathOb,ig.getX(this.obX),ig.getY(this.obY))
            obj.filepath=this.pathOb
            obj.addAnim("idle1",1,[1])
            obj.addAnim("idle2",1,[2])
            obj.addAnim("idle3",1,[3])
            obj.pos.x=ig.getX(this["tile"+obj.indx].pos.x)
            obj.pos.y=ig.getY(this["tile"+obj.indx].pos.y)
            obj.size.x=ig.getX(this.obX)
            obj.sizeX=ig.getX(this.obX)
            obj.size.y=ig.getY(this.obY)
            obj.sizeY=ig.getY(this.obY)
            obj.cekprice();
            obj.currentAnim=obj.anims["idle"+obj.colorIdx]
            this.repos(obj)
            this.sortOut();
            this.pauseState=false
            this.pathOb=""
            var str=obj.filepath.replace("media/game/","")
            str=str.replace(".png","")
            
            ig.global[str+"qty"]+=1
            if (ig.global[str+"qty"]==2 && str=="stand12" && ig.global.quest1[0]==false)
             {
                ig.global.quest1[0]=true
                this.checkQuest();
             }
             else if (ig.global[str+"qty"]==2 && str=="stand11" && ig.global.quest2[0]==false)
            {
                ig.global.quest2[0]=true
                this.checkQuest();
            }
            this.reduceMoney();
            
            /////hilangkan tile dan pause
            for (var i = 0; i < this.arrTiles2.length; i++)
            {
              this.arrTiles2[i].currentAnim.alpha=0
              this.arrTiles2[i].changeSize();
            }
            this.pauseState=false
         }

         //////keluarkan dialog utk edit

         else if (obj.animSheet.image.path!="media/game/fence.png" && !this.pauseState)
          {
            this.pauseState=true
            if (obj.animSheet.image.path!="media/game/stand21.png" && obj.animSheet.image.path!="media/game/stand22.png")
             {
                this.colorswitch=this.spawnEntity
                (
                  Button,ig.getX(obj.pos.x+(obj.size.x/2)-10),ig.getY(obj.pos.y+(obj.size.y/2)-30),
                  {
                    size:{x:ig.getX(20),y:ig.getY(20)},
                    animSheet:new ig.AnimationSheet("media/game/color.png",ig.getX(20),ig.getY(20)),
                    pressedUp:function()
                    {
                      ig.game.editObject("color",obj)
                    }
                  }
                )
                this.colorswitch.zIndex=this.entities.length-1
             }
             this.rotateSwitch=this.spawnEntity
                (
                  Button,ig.getX(obj.pos.x+(obj.size.x/2)-30),ig.getY(obj.pos.y+(obj.size.y/2)),
                  {
                    size:{x:ig.getX(20),y:ig.getY(20)},
                    animSheet:new ig.AnimationSheet("media/game/rotatebtn.png",ig.getX(20),ig.getY(20)),
                    pressedUp:function()
                    {
                      ig.game.editObject("rotate",obj)
                    }
                  }
                )
                this.rotateSwitch.zIndex=this.entities.length-1

              this.sellswitch=this.spawnEntity
                (
                  Button,ig.getX(obj.pos.x+(obj.size.x/2)+10),ig.getY(obj.pos.y+(obj.size.y/2)),
                  {
                    size:{x:ig.getX(20),y:ig.getY(20)},
                    animSheet:new ig.AnimationSheet("media/game/sell.png",ig.getX(20),ig.getY(20)),
                    pressedUp:function()
                    {
                      ig.game.editObject("sell",obj)
                    }
                  }
                )
                this.sellswitch.zIndex=this.entities.length-1

                
          }

          

         this.drawFlag=false
      },

      editObject:function(param,ob)
      {
        if (param=="color")
         {
            ob.colorIdx<3 ? ob.colorIdx+=1 : ob.colorIdx=1
            ob.currentAnim=ob.anims["idle"+ob.colorIdx]
            ob.currentAnim.flip.x=ob.flip
         }
        else if (param=="rotate")
         {
            ob.flip=!ob.flip
            ob.currentAnim.flip.x=ob.flip
         }
        else if (param=="sell")
         {
            ///tambahin uang di sini
            ig.global.money+=ob.price
            ///hilangkan fillednya
            if (ob.animSheet.image.path!="media/game/stand11.png" && ob.animSheet.image.path!="media/game/stand12.png")
             {
                this["tile"+ob.indx].filled=false
                if (ob.thsIdx==6)
                 {
                    ig.global.stand21qty-=1
                 }
                else if (ob.thsIdx==5)
                 {
                    ig.global.stand22qty-=1
                 }
                ob.killThis();
                ob.kill();
                
             }
            else
            {
              ob.animSheet=new ig.AnimationSheet("media/game/fence.png",ig.getX(143),ig.getY(85))
              ob.filepath="media/game/fence.png"
              ob.flip=false
              ob.colorIdx=1
              ob.pos.x=ig.getX(this["tile"+ob.indx].pos.x)
              ob.pos.y=ig.getY(this["tile"+ob.indx].pos.y)
              ob.size.x=ig.getX(143)
              ob.sizeX=ig.getX(143)
              ob.size.y=ig.getY(85)
              ob.sizeY=ig.getY(85)
              ob.addAnim("idle",1,[1])
              ob.currentAnim=ob.anims.idle
              ob.thsIdx == 4 ? ig.global.stand12qty-=1 : ig.global.stand11qty-=1
              this.repos(ob)
              //this.sortOut();
            }
            
         }

         ////kill the buttons
         if (this.colorswitch)
          {
            this.colorswitch.kill();
          }
         
         this.rotateSwitch.kill();
         this.sellswitch.kill();
         this.pauseState=false

         this.drawFlag=false
      },

      putOnObject:function(tile)
      {
        ////kalo bisa ditaruh jalankan fungsi ini
        
        if (this["tile"+tile].currentAnim.alpha==1 && this["tile"+tile].filled==false) //&& this.cekKursi2(tile))
         {
            this.newObj=this.spawnEntity
            (
              Obj3,ig.getX(this["tile"+tile].pos.x), ig.getY(this["tile"+tile].pos.y),
              {
                size:{x:ig.getX(this.obX),y:ig.getY(this.obY)},
                animSheet:new ig.AnimationSheet(this.pathOb,ig.getX(this.obX),ig.getY(this.obY)),
                onMouseUp:function()
                {
                  ig.game.cekObjek(this)
                }
              }
            )
            this.newObj.zIndex=this.entities.length-1
            this.newObj.indx=tile
            this.newObj.sizeX=this.obX
            this.newObj.sizeY=this.obY
            this.newObj.filepath=this.pathOb

            this.newObj.addAnim("idle1",1,[1])
            this.newObj.addAnim("idle2",1,[2])
            this.newObj.addAnim("idle3",1,[3])
            this.newObj.currentAnim=this.newObj.anims["idle"+this.newObj.colorIdx]

            if (this.pathOb=="media/game/stand21.png" || this.pathOb=="media/game/stand22.png")
             {
                var str=this.pathOb.replace("media/game/","")
                str=str.replace(".png","")
            
                ig.global[str+"qty"]+=1

             }
            
            this["tile"+tile].filled=true
            this.repos(this.newObj)
            // this.cekKursi(this.newObj)
            this.arrObj2.push(this.newObj)
            this.sortOut();

            this.pauseState=false
            this.pathOb=""

            this.reduceMoney();
            this.checkQuest();

         }
        
        //////kalo gagal taruh jalankan fungsi ini, hilangkan tile dan pausenya

        for (var i = 0; i < this.arrTiles2.length; i++)
            {
              this.arrTiles2[i].currentAnim.alpha=0
              this.arrTiles2[i].changeSize();
            }
        this.pauseState=false

        this.drawFlag=false
      },

      /*cekKursi2:function(tile)
      {
        var kursiBoleh=true
        if ((this.pathOb=="media/image/decor41.png" || this.pathOb=="media/image/decor42.png" || this.pathOb=="media/image/decor43.png") && (this["tile"+tile].indx==20 || this["tile"+tile].indx== 42 || this["tile"+tile].indx==47))
        {
          kursiBoleh=false
        }

        return kursiBoleh

      },*/

      /*cekKursi:function(kursi)
      {
        if (kursi.animSheet.image.path=="media/game/decor41.png" || kursi.animSheet.image.path=="media/game/decor42.png" || kursi.animSheet.image.path=="media/game/decor43.png")
         {
            //// jika tilenya tidak memungkinkan langsung dirotate
            if (kursi.indx< 8 || (kursi.indx> 8 && kursi.indx<13) || kursi.indx==14 || kursi.indx==21 || (kursi.indx>47 && kursi.indx <50) || kursi.indx==58 || kursi.indx==59 || (kursi.indx>98 && kursi.indx <=101))
             {
                ////rotate
                kursi.currentAnim.flip.x=true

             }
            

            /////langsung buat "detectornya"
            var posX=0
            var posY=0
            kursi.currentAnim.flip.x==true ? posX=56.25 : 59.25
            kursi.currentAnim.flip.x==true ? posX=5 : 23.75

            console.log("horor3")

            kursi.detector=this.spawnEntity
            (
              Obj,ig.getX(kursi.pos.x+posX),ig.getY(kursi.pos.y+posY),
              {
                size:{x:ig.getX(9),y:ig.getY(10)},
                animSheet:new ig.AnimationSheet("media/game/detector.png",ig.getX(9),ig.getY(10)),
                type:ig.Entity.TYPE.A,
                checkAgainst:ig.Entity.TYPE.A,
                check:function(other,axis)
                {console.log("horor2")
                  ///bikin filled jadi false, catet di obnya
                  if (this.collideswitch==false)
                   {console.log("horor")
                      for (var i = 0; i < ig.game.arrTiles2.length; i++)
                       {
                          if(ig.game.arrTiles2[i]==other)
                          {
                            this.collideswitch=true
                            ig.game.arrTiles2[i].filled
                            ig.game.newObj.indxCollide=i
                          }
                      }
                   }
                }
              }
            )
            kursi.detector.zIndex=this.entities.length-1
            kursi.detector.collideswitch=false
            // kursi.detector.currentAnim.alpha=0

            /////cek filled yg collide dgn detector



         }
      },*/

      checkQuest:function()
      {
        var showNotice=false
        for (var i = 1; i <= 6; i++)
        {
          if (ig.global["quest"+i][0]==true && ig.global["quest"+i][1]==false)
           {
              ig.global["quest"+i][1]=true
              ig.global.money+=2000
              showNotice=true
           }
        }
        if (showNotice==true)
         {
            this.pauseState=true
            this.questnotice=this.spawnEntity
            (
              Obj,ig.getX(0),ig.getY(0),
              {
                animSheet:new ig.AnimationSheet("media/game/questnotice.png",ig.getX(700),ig.getY(525))
              }
            
            )
            this.questnotice.zIndex=this.entities.length-1

            this.tutorBtn=this.spawnEntity
            (
              Button,ig.getX(330),ig.getY(201),
              {
                size:{x:ig.getX(55),y:ig.getY(19)},
                animSheet:new ig.AnimationSheet("media/game/taphere.png",ig.getX(55),ig.getY(19)),
                pressedUp:function()
                {
                  ig.game.pauseState=false
                  ig.game.questnotice.kill();
                  this.kill();
                  ig.game.drawFlag=false
                }
              }
            )
            this.tutorBtn.zIndex=this.entities.length-1
            
         }
         else if (showNotice==false)
          {
            this.pauseState=false
          }

      },

      changeTab:function(from,to)
      {
        if (from!=to)
         {

            if (this.errorinfo!=null)
          {
            this.errorinfo.kill();
            this.errorinfo=null
          }
            this.buybtn.setState("hidden")
            this.decorBox.page=1
            this.decorBox.state=to

            if (to=="stand")
             {
                this.opt3.kill();
                this.moneybox3.kill();
                this.opt1.animSheet=new ig.AnimationSheet("media/game/decor/stand"+this.decorBox.page+1+".png",ig.getX(157),ig.getY(140))
                this.opt1.addAnim("idle",1,[0])
                this.opt1.addAnim("chosen",1,[1])
                this.opt1.currentAnim=this.opt1.anims.idle
                this.opt1.pos.x=ig.getX(190)
                this.opt1.pos.y=ig.getX(163)
                this.opt1.size.x=ig.getX(157)
                this.opt1.size.y=ig.getY(140)
                this.moneybox1.pos.x=ig.getX(243)
                this.moneybox1.pos.y=ig.getX(307)

                this.opt2.setState("idle")
                this.opt2.animSheet=new ig.AnimationSheet("media/game/decor/stand"+this.decorBox.page+2+".png",ig.getX(157),ig.getY(140))
                this.opt2.addAnim("idle",1,[0])
                this.opt2.addAnim("chosen",1,[1])
                this.opt2.currentAnim=this.opt2.anims.idle
                this.opt2.pos.x=ig.getX(354)
                this.opt2.pos.y=ig.getY(163)
                this.opt2.size.x=ig.getX(157)
                this.opt2.size.y=ig.getY(140)
                this.moneybox2.pos.x=ig.getX(407)
                this.moneybox2.pos.y=ig.getX(307)

                if (ig.global.level<3)
                 {
                    this.arrleft.setState("hidden")
                    this.arrright.setState("hidden")
                 }

             }
             else if (to=="decor")
            {
              this.arrleft.setState("idle")
              this.arrright.setState("idle")
              this.opt1.animSheet=new ig.AnimationSheet("media/game/decor/decor"+this.decorBox.page+1+".png",ig.getX(104),ig.getY(128))
              this.opt1.addAnim("idle",1,[0])
                this.opt1.addAnim("chosen",1,[1])
                this.opt1.currentAnim=this.opt1.anims.idle
                this.opt1.pos.x=ig.getX(187)
                this.opt1.pos.y=ig.getX(165)
                this.opt1.size.x=ig.getX(104)
                this.opt1.size.y=ig.getY(128)
                this.moneybox1.pos.x=ig.getX(207)
                this.moneybox1.pos.y=ig.getX(296)

              this.opt2.setState("idle")
              this.opt2.animSheet=new ig.AnimationSheet("media/game/decor/decor"+this.decorBox.page+2+".png",ig.getX(104),ig.getY(128))
              this.opt2.addAnim("idle",1,[0])
                this.opt2.addAnim("chosen",1,[1])
                this.opt2.currentAnim=this.opt2.anims.idle
                this.opt2.pos.x=ig.getX(298)
                this.opt2.pos.y=ig.getX(165)
                this.opt2.size.x=ig.getX(104)
                this.opt2.size.y=ig.getY(128)
                this.moneybox2.pos.x=ig.getX(320)
                this.moneybox2.pos.y=ig.getX(296)

              if (from=="stand")
               {
                  this.opt3=this.spawnEntity
                  (
                    Button,ig.getX(409),ig.getY(165),
                    {
                      size:{x:ig.getX(104),y:ig.getY(128)},
                      animSheet:new ig.AnimationSheet("media/game/decor/decor"+this.decorBox.page+3+".png",ig.getX(104),ig.getY(128)),
                      pressedUp:function()
                      {
                        ig.game.chooseToBuy(this)
                      }
                    }
                  )
                  this.opt3.zIndex=10+this.entities.length-1
                  this.opt3.addAnim("chosen",1,[1])

                  this.moneybox3=this.spawnEntity
                  (
                    Obj,ig.getX(433),ig.getY(296),
                    {
                      animSheet:new ig.AnimationSheet("media/game/decor/pricebox.png",ig.getX(50),ig.getY(20))
                    }
                  )
                  this.moneybox3.zIndex=10+this.entities.length-1

               }
               else
               {
                  this.opt3.animSheet=new ig.AnimationSheet("media/game/decor/decor"+this.decorBox.page+3+".png",ig.getX(104),ig.getY(128))
                  this.opt3.addAnim("idle",1,[0])
                    this.opt3.addAnim("chosen",1,[1])
                    this.opt3.currentAnim=this.opt3.anims.idle
                    this.opt3.pos.x=ig.getX(409)
                    this.opt3.pos.y=ig.getX(165)
                    this.opt3.size.x=ig.getX(104)
                    this.opt3.size.y=ig.getY(128)
                    this.moneybox3.pos.x=ig.getX(433)
                  this.moneybox3.pos.y=ig.getX(296)
               }
            }
            else if (to=="others")
             {
                this.arrleft.setState("idle")
                this.arrright.setState("idle")
                this.opt1.animSheet=new ig.AnimationSheet("media/game/decor/others"+this.decorBox.page+1+".png",ig.getX(104),ig.getY(128))
                this.opt1.addAnim("idle",1,[0])
                  this.opt1.addAnim("chosen",1,[1])
                  this.opt1.currentAnim=this.opt1.anims.idle
                  this.opt1.pos.x=ig.getX(187)
                  this.opt1.pos.y=ig.getX(165)
                  this.opt1.size.x=ig.getX(104)
                  this.opt1.size.y=ig.getY(128)
                  this.moneybox1.pos.x=ig.getX(207)
                this.moneybox1.pos.y=ig.getX(296)

                this.opt2.setState("idle")
                this.opt2.animSheet=new ig.AnimationSheet("media/game/decor/others"+this.decorBox.page+2+".png",ig.getX(104),ig.getY(128))
                this.opt2.addAnim("idle",1,[0])
                  this.opt2.addAnim("chosen",1,[1])
                  this.opt2.currentAnim=this.opt2.anims.idle
                  this.opt2.pos.x=ig.getX(298)
                  this.opt2.pos.y=ig.getX(165)
                  this.opt2.size.x=ig.getX(104)
                  this.opt2.size.y=ig.getY(128)
                  this.moneybox2.pos.x=ig.getX(320)
                this.moneybox2.pos.y=ig.getX(296)

                if (from=="stand")
               {
                  this.opt3=this.spawnEntity
                  (
                    Button,ig.getX(409),ig.getY(165),
                    {
                      size:{x:ig.getX(104),y:ig.getY(128)},
                      animSheet:new ig.AnimationSheet("media/game/decor/others"+this.decorBox.page+3+".png",ig.getX(104),ig.getY(128)),
                      pressedUp:function()
                      {
                        ig.game.chooseToBuy(this)
                      }
                    }
                  )
                  this.opt3.zIndex=10+this.entities.length-1
                  this.opt3.addAnim("chosen",1,[1])

                  this.moneybox3=this.spawnEntity
                  (
                    Obj,ig.getX(433),ig.getY(296),
                    {
                      animSheet:new ig.AnimationSheet("media/game/decor/pricebox.png",ig.getX(50),ig.getY(20))
                    }
                  )
                  this.moneybox3.zIndex=10+this.entities.length-1

               }
               else
               {
                  this.opt3.animSheet=new ig.AnimationSheet("media/game/decor/others"+this.decorBox.page+3+".png",ig.getX(104),ig.getY(128))
                  this.opt3.addAnim("idle",1,[0])
                    this.opt3.addAnim("chosen",1,[1])
                    this.opt3.currentAnim=this.opt3.anims.idle
                    this.opt3.pos.x=ig.getX(409)
                    this.opt3.pos.y=ig.getX(165)
                    this.opt3.size.x=ig.getX(104)
                    this.opt3.size.y=ig.getY(128)
                    this.moneybox3.pos.x=ig.getX(433)
                this.moneybox3.pos.y=ig.getX(296)
               }
             }
         }
        this.drawFlag=false

      },

      chooseToBuy:function(obj)
      {

        if (this.errorinfo!=null)
          {
            this.errorinfo.kill();
            this.errorinfo=null
          }

        this.buybtn.setState("idle")
        if (this.decorBox.state=="stand")
         {
            this.opt1.currentAnim=this.opt1.anims.idle
            this.opt2.currentAnim=this.opt2.anims.idle
            
         }
        else if (this.decorBox.state=="decor" || this.decorBox.state=="others")
         {
            this.opt1.currentAnim=this.opt1.anims.idle
            this.opt2.currentAnim=this.opt2.anims.idle
            this.opt3.currentAnim=this.opt3.anims.idle
         }
        obj.currentAnim=obj.anims.chosen
        this.chosenDecor=obj

        this.drawFlag=false

      },

      buyDecor:function()
      {
        ////catet objeknya
        var successBuy=false
        var obType=""
        if (this.decorBox.state=="stand")
         {
            //var obType="stand"+this.decorBox.page+
            if (this.chosenDecor==this.opt1 && ig.global.money>=ig.global["stand"+this.decorBox.page+1] && ig.global["stand"+this.decorBox.page+1+"qty"]<2)
             {
                obType="stand"+this.decorBox.page+1
                
                this.decorBox.page==1 ? this.obY=159 : this.obY=111
                this.obCost=ig.global["stand"+this.decorBox.page+1]
                successBuy=true
             }
            else if (this.chosenDecor==this.opt2 && ig.global.money>=ig.global["stand"+this.decorBox.page+2] && ig.global["stand"+this.decorBox.page+2+"qty"]<2)
             {
                obType="stand"+this.decorBox.page+2
                this.decorBox.page==1 ? this.obY=159 : this.obY=116
                this.obCost=ig.global["stand"+this.decorBox.page+2]
                successBuy=true
             }
             this.decorBox.page==1 ? this.obX=144 : this.obX=82
         }
         else if (this.decorBox.state=="decor")
          {
            if (this.chosenDecor==this.opt1 && ig.global.money>=ig.global["decor"+this.decorBox.page+1])
            {
              obType="decor"+this.decorBox.page+1
              if (this.decorBox.page==1)
               {
                  this.obX=82
                  this.obY=79
               }
               else if (this.decorBox.page==2)
                {
                  this.obX=82
                  this.obY=130
                }
              else if (this.decorBox.page==3)
                {
                  this.obX=82
                  this.obY=123
                }
              else if (this.decorBox.page==4)
                {
                  this.obX=123
                  this.obY=71
                }
              this.obCost=ig.global["decor"+this.decorBox.page+1]
              successBuy=true
              ig.global.decorBought++
              if (ig.global.decorBought>=4 && ig.global.quest3[0]==false)
               {
                  ig.global.quest3[0]=true
                  //this.checkQuest();
               }
            }
            else if (this.chosenDecor==this.opt2 && ig.global.money>=ig.global["decor"+this.decorBox.page+2])
            {
              obType="decor"+this.decorBox.page+2
              if (this.decorBox.page==1)
               {
                  this.obX=82
                  this.obY=79
               }
               else if (this.decorBox.page==2)
                {
                  this.obX=82
                  this.obY=130
                }
              else if (this.decorBox.page==3)
                {
                  this.obX=82
                  this.obY=116
                }
              else if (this.decorBox.page==4)
                {
                  this.obX=123
                  this.obY=71
                }
              this.obCost=ig.global["decor"+this.decorBox.page+2]
              successBuy=true
              ig.global.decorBought++
              if (ig.global.decorBought>=4 && ig.global.quest3[0]==false)
               {
                  ig.global.quest3[0]=true
                  //this.checkQuest();
               }
            }
            else if (this.chosenDecor==this.opt3 && ig.global.money>=ig.global["decor"+this.decorBox.page+3])
            {
              obType="decor"+this.decorBox.page+3
              if (this.decorBox.page==1)
               {
                  this.obX=82
                  this.obY=79
               }
               else if (this.decorBox.page==2)
                {
                  this.obX=82
                  this.obY=130
                }
              else if (this.decorBox.page==3)
                {
                  this.obX=82
                  this.obY=130
                }
              else if (this.decorBox.page==4)
                {
                  this.obX=123
                  this.obY=69
                }
              this.obCost=ig.global["decor"+this.decorBox.page+3]
              successBuy=true
              ig.global.decorBought++
              if (ig.global.decorBought>=4 && ig.global.quest3[0]==false)
               {
                  ig.global.quest3[0]=true
                  //this.checkQuest();
               }
            }
          }
        else if (this.decorBox.state=="others")
         {
            if (this.chosenDecor==this.opt1 && ig.global.money>=ig.global["others"+this.decorBox.page+1])
            {
              this.decorBox.page==1 ? ig.global.tiletype=1 : ig.global.grasstype=1
              successBuy=true
              this.pauseState=false
              this.obCost=ig.global["others"+this.decorBox.page+1]
              this.reduceMoney();
            }
            else if (this.chosenDecor==this.opt2 && ig.global.money>=ig.global["others"+this.decorBox.page+2])
            {
              this.decorBox.page==1 ? ig.global.tiletype=2 : ig.global.grasstype=2
              successBuy=true
              this.pauseState=false
              this.obCost=ig.global["others"+this.decorBox.page+2]
              this.reduceMoney();
            }
            else if (this.chosenDecor==this.opt3 && ig.global.money>=ig.global["others"+this.decorBox.page+3])
            {
              this.decorBox.page==1 ? ig.global.tiletype=3 : ig.global.grasstype=3
              successBuy=true
              this.pauseState=false
              this.obCost=ig.global["others"+this.decorBox.page+3]
              this.reduceMoney();
              if (ig.global.tiletype==3 && ig.global.quest4[0]==false)
               {
                  //////spawn quest notif utk quest 4 disini
                  ig.global.quest4[0]=true
                  this.checkQuest();
               }
            }
            this.mBg.animSheet=new ig.AnimationSheet("media/game/bg"+ig.global.tiletype+ig.global.grasstype+".png",ig.getX(700),ig.getY(525))
            this.mBg.addAnim("idle",1,[0])
            this.mBg.currentAnim=this.mBg.anims.idle
            
         }

         this.pathOb="media/game/"+obType+".png"
        


         /////keluarin tilesnya
         if (successBuy)
          {
            if (this.decorBox.state!="others")
             {
                for (var i = 0; i < this.arrTiles2.length; i++)
                {
                 if(!this.arrTiles2[i].road && (this.decorBox.state!="stand" || (this.decorBox.state=="stand" && this.decorBox.page==2)) && i!=16 && i!=29 && i!=35 && i!=80)
                 {
                    this.arrTiles2[i].currentAnim.alpha=1
                    this.arrTiles2[i].changeSize();
                 }
                 else if (!this.arrTiles2[i].road && this.decorBox.state=="stand")
                {
                    if (i==16 || i==29 || i==35 || i==80)
                     {
                        this.arrTiles2[i].currentAnim.alpha=1
                        this.arrTiles2[i].changeSize();
                     }
                }
                  
               }
             }
            

             this.standtab.kill();
             this.killDecor(this.decorBox.state);
             this.decortab.kill();
             this.otherstab.kill();
             this.decorBox.kill();
             this.buybtn.kill();
             this.arrleft.kill();
             this.arrright.kill();
             this.decorBox=null
             this.close.kill();
           }
         


         //////hapus dialognya

         
              
              
          
          if (!successBuy)
           {
              // this.pauseState=false
              this.pathOb=""

              this.spawnErrorDialog();
           }

         this.drawFlag=false
      },

      spawnErrorDialog:function()
      {
        this.errorinfo=this.spawnEntity
        (
          Obj,ig.getX(239),ig.getY(395),
          {
            animSheet:new ig.AnimationSheet("media/game/errorinfo.png",ig.getX(232),ig.getY(69))
          }
        )
        this.errorinfo.zIndex=100+this.entities.length-1
      },

      decorDialog:function()
      {
        this.pauseState=true
        
        this.standtab=this.spawnEntity
        (
          Button,ig.getX(242),ig.getY(85),
          {
            size:{x:ig.getX(70),y:ig.getY(64)},
            animSheet:new ig.AnimationSheet("media/game/decor/standtab.png",ig.getX(70),ig.getY(64)),
            pressedUp:function()
            {
              ig.game.changeTab(ig.game.decorBox.state,"stand")
            }
          }
        )
        this.standtab.zIndex=10+this.entities.length-1

        this.decortab=this.spawnEntity
        (
          Button,ig.getX(316),ig.getY(85),
          {
            size:{x:ig.getX(70),y:ig.getY(64)},
            animSheet:new ig.AnimationSheet("media/game/decor/decortab.png",ig.getX(70),ig.getY(64)),
            pressedUp:function()
            {
              ig.game.changeTab(ig.game.decorBox.state,"decor")
            }
          }
        )
        this.decortab.zIndex=10+this.entities.length-1

        this.otherstab=this.spawnEntity
        (
          Button,ig.getX(389),ig.getY(85),
          {
            size:{x:ig.getX(70),y:ig.getY(64)},
            animSheet:new ig.AnimationSheet("media/game/decor/otherstab.png",ig.getX(70),ig.getY(64)),
            pressedUp:function()
            {
              ig.game.changeTab(ig.game.decorBox.state,"others")
            }
          }
        )
        this.otherstab.zIndex=10+this.entities.length-1

        this.decorBox=this.spawnEntity
        (
          Obj,ig.getX(149),ig.getY(128),
          {
            animSheet:new ig.AnimationSheet("media/game/decor/kotakdekor.png",ig.getX(402),ig.getY(266))
          }
        )
        this.decorBox.zIndex=10+this.entities.length-1
        this.decorBox.state="stand"
        this.decorBox.page=1

        this.opt1=this.spawnEntity
        (
          Button,ig.getX(190),ig.getY(163),
          {
            size:{x:ig.getX(157),y:ig.getY(140)},
            animSheet:new ig.AnimationSheet("media/game/decor/stand"+this.decorBox.page+1+".png",ig.getX(157),ig.getY(140)),
            pressedUp:function()
            {
              ig.game.chooseToBuy(this)
            }
          }
        )
        this.opt1.zIndex=10+this.entities.length-1
        this.opt1.addAnim("chosen",1,[1])

        this.opt2=this.spawnEntity
        (
          Button,ig.getX(354),ig.getY(163),
          {
            size:{x:ig.getX(157),y:ig.getY(140)},
            animSheet:new ig.AnimationSheet("media/game/decor/stand"+this.decorBox.page+2 +".png",ig.getX(157),ig.getY(140)),
            pressedUp:function()
            {
              ig.game.chooseToBuy(this)
            }
          }
        )
        this.opt2.zIndex=10+this.entities.length-1
        this.opt2.addAnim("chosen",1,[1])

        this.moneybox1=this.spawnEntity
        (
          Obj,ig.getX(243),ig.getY(307),
          {
            animSheet:new ig.AnimationSheet("media/game/decor/pricebox.png",ig.getX(50),ig.getY(20))
          }
        )
        this.moneybox1.zIndex=this.entities.length-1

        this.moneybox2=this.spawnEntity
        (
          Obj,ig.getX(407),ig.getY(307),
          {
            animSheet:new ig.AnimationSheet("media/game/decor/pricebox.png",ig.getX(50),ig.getY(20))
          }
        )
        this.moneybox2.zIndex=this.entities.length-1

        
         
            this.arrleft=this.spawnEntity
            (
              Button,ig.getX(267),ig.getY(334),
              {
                size:{x:ig.getX(26),y:ig.getY(30)},
                animSheet:new ig.AnimationSheet("media/game/arrleft.png",ig.getX(26),ig.getY(30)),
                pressedUp:function()
                {
                  ig.game.changePage(ig.game.decorBox.state,"left")
                }
              }
            )
            this.arrleft.zIndex=10+this.entities.length-1

            this.arrright=this.spawnEntity
            (
              Button,ig.getX(403),ig.getY(334),
              {
                size:{x:ig.getX(26),y:ig.getY(30)},
                animSheet:new ig.AnimationSheet("media/game/arrright.png",ig.getX(26),ig.getY(30)),
                pressedUp:function()
                {
                  ig.game.changePage(ig.game.decorBox.state,"right")
                }
              }
            )
            this.arrright.zIndex=10+this.entities.length-1

            if (ig.global.level<3)
            {
              this.arrleft.setState("hidden")
              this.arrright.setState("hidden")
            }
         

         this.buybtn=this.spawnEntity
         (
            Button,ig.getX(316),ig.getY(331),
            {
              size:{x:ig.getX(68),y:ig.getY(39)},
              animSheet:new ig.AnimationSheet("media/game/decor/buybtn.png",ig.getX(68),ig.getY(39)),
              pressedUp:function()
              {
                ig.game.buyDecor();
              }
            }
          )
          this.buybtn.zIndex=10+this.entities.length-1
          this.buybtn.setState("hidden")


        this.close=this.spawnEntity
        (
          Button,ig.getX(504),ig.getY(138),
          {
            size:{x:ig.getX(28),y:ig.getY(28)},
            animSheet:new ig.AnimationSheet("media/game/decor/close.png",ig.getX(28),ig.getY(28)),
            pressedUp:function()
            {
              ig.game.pauseState=false
              ig.game.standtab.kill();
              ig.game.killDecor(ig.game.decorBox.state);
              ig.game.decortab.kill();
              ig.game.otherstab.kill();
              ig.game.decorBox.kill();
              ig.game.buybtn.kill();
              ig.game.arrleft.kill();
              ig.game.arrright.kill();
              ig.game.decorBox=null
              

              this.kill();
              ig.game.drawFlag=false
            }
          }
        )
        this.close.zIndex=10+this.entities.length-1


        this.drawFlag=false
      },

      changePage:function(state,direction)
      {
        if (state=="stand" || state=="others")
         {
            this.decorBox.page==1 ? this.decorBox.page=2 : this.decorBox.page=1

            if (state=="stand")
             {
                this.opt1.animSheet=new ig.AnimationSheet("media/game/decor/stand"+this.decorBox.page+1+".png",ig.getX(157),ig.getY(140))
                this.opt1.addAnim("idle",1,[0])
                this.opt1.addAnim("chosen",1,[1])
                this.opt1.currentAnim=this.opt1.anims.idle
                   
                this.opt2.setState("idle")
                this.opt2.animSheet=new ig.AnimationSheet("media/game/decor/stand"+this.decorBox.page+2+".png",ig.getX(157),ig.getY(140))
                this.opt2.addAnim("idle",1,[0])
                this.opt2.addAnim("chosen",1,[1])
                this.opt2.currentAnim=this.opt2.anims.idle

                if (this.decorBox.page==2 && ig.global.level<6)
                 {
                    this.opt2.setState("hidden")
                 }
             }
            

            else if (state=="others")
             {
                this.opt1.animSheet=new ig.AnimationSheet("media/game/decor/others"+this.decorBox.page+1+".png",ig.getX(104),ig.getY(128))
                this.opt1.addAnim("idle",1,[0])
                this.opt1.addAnim("chosen",1,[1])
                this.opt1.currentAnim=this.opt1.anims.idle
                   
                this.opt2.setState("idle")
                this.opt2.animSheet=new ig.AnimationSheet("media/game/decor/others"+this.decorBox.page+2+".png",ig.getX(104),ig.getY(128))
                this.opt2.addAnim("idle",1,[0])
                this.opt2.addAnim("chosen",1,[1])
                this.opt2.currentAnim=this.opt2.anims.idle


                this.opt3.animSheet=new ig.AnimationSheet("media/game/decor/others"+this.decorBox.page+3+".png",ig.getX(104),ig.getY(128))
                this.opt3.addAnim("idle",1,[0])
                this.opt3.addAnim("chosen",1,[1])
                this.opt3.currentAnim=this.opt3.anims.idle
             }
                
         }
        else if (state=="decor")
         {
            if (direction=="right")
             {
                this.decorBox.page < 3 ? this.decorBox.page+=1 : this.decorBox.page=1 
             }
            else if (direction=="left")
             {
                this.decorBox.page > 1 ? this.decorBox.page-=1 : this.decorBox.page=3
             }


              this.opt1.animSheet=new ig.AnimationSheet("media/game/decor/decor"+this.decorBox.page+1+".png",ig.getX(104),ig.getY(128))
              this.opt1.addAnim("idle",1,[0])
                this.opt1.addAnim("chosen",1,[1])
                this.opt1.currentAnim=this.opt1.anims.idle
                
                this.opt2.setState("idle")
              this.opt2.animSheet=new ig.AnimationSheet("media/game/decor/decor"+this.decorBox.page+2+".png",ig.getX(104),ig.getY(128))
              this.opt2.addAnim("idle",1,[0])
                this.opt2.addAnim("chosen",1,[1])
                this.opt2.currentAnim=this.opt2.anims.idle

              this.opt3.animSheet=new ig.AnimationSheet("media/game/decor/decor"+this.decorBox.page+3+".png",ig.getX(104),ig.getY(128))
              this.opt3.addAnim("idle",1,[0])
                this.opt3.addAnim("chosen",1,[1])
                this.opt3.currentAnim=this.opt3.anims.idle
                

         }
         this.drawFlag=false
      },

      killDecor:function(state)
      {
        if (state=="stand")
         {
            this.opt1.kill();
            this.opt2.kill();
            this.moneybox1.kill();
            this.moneybox2.kill();

         }
        else if (state=="decor" || state=="others")
         {
            this.opt1.kill();
            this.opt2.kill();
            this.opt3.kill();
            this.moneybox1.kill();
            this.moneybox2.kill();
            this.moneybox3.kill();
         }

         if (this.errorinfo!=null)
          {
            this.errorinfo.kill();
            this.errorinfo=null
          }
      },

      /*
      checkTutor:function()
      {
        if (this.tutor==1)
         {
            this.tutor++
            //this.tutorBtn.pos.x=ig.getX(139.167)
            //this.tutorBtn.pos.y=ig.getY(449)
            this.tutorBtn.setState("hidden")

            this.arrowTutor=this.spawnEntity
            (
              Obj,ig.getX(221),ig.getY(436),
              {
                animSheet:new ig.AnimationSheet("media/game/arrowtutor.png",ig.getX(23),ig.getY(27))
              }
            )
            this.arrowTutor.zIndex=this.entities.length-1
            this.arrowTutor.currentAnim.flip.x=true

            this.startplay=this.spawnEntity
            (
              Button,ig.getX(208),ig.getY(473),
              {
                size:{x:ig.getX(145),y:ig.getY(39)},
                animSheet:new ig.AnimationSheet("media/game/startplay.png",ig.getX(145),ig.getY(39)),
                pressedUp:function()
                {
                  ig.game.tutor++
                  ig.game.shade.kill();
                  this.kill();
                  ig.game.arrowTutor.currentAnim.alpha=0
                  ig.game.girltutor.pos.y=197
                  ig.game.tutorBox.pos.y=213
                  ig.game.tutorBox.animSheet=new ig.AnimationSheet("media/game/tut1c.png",ig.getX(213),ig.getY(71))
                  ig.game.tutorBox.addAnim("idle",1,[0])
                  ig.game.tutorBox.currentAnim=ig.game.tutorBox.anims.idle
                  ig.game.animate=true
                  ig.game.startBus();
                }
              }
            )
            this.startplay.zIndex=this.entities.length-1


            this.tutorBox.animSheet=new ig.AnimationSheet("media/game/tut1b.png",ig.getX(213),ig.getY(71))
            this.tutorBox.addAnim("idle",1,[0])
            this.tutorBox.currentAnim=this.tutorBox.anims.idle

            this.drawFlag=false

         }
        else if (this.tutor==4)
         {
            this.tutorBox.animSheet=new ig.AnimationSheet("media/game/tut1d.png",ig.getX(212),ig.getY(70))
            this.tutorBox.addAnim("idle",1,[0])
            this.tutorBox.currentAnim=this.tutorBox.anims.idle
            this.drawFlag=false
         }
        else if (this.tutor==5)
         {
            this.tutor++    //jadi step 6
            this.tutorBtn.setState("idle")
            this.tutorBtn.pos.x=ig.getX(412)
            this.tutorBtn.pos.y=ig.getY(183)
            //ig.game.girltutor.pos.y=397
            //ig.game.tutorBox.pos.y=413
            this.arrowTutor.currentAnim.alpha=1
            this.arrowTutor.currentAnim.flip.x=false
            this.arrowTutor.pos.x=ig.getX(187)
            this.arrowTutor.pos.y=ig.getY(467)
            this.tutorBox.animSheet=new ig.AnimationSheet("media/game/tut1e.png",ig.getX(212),ig.getY(70))
            this.tutorBox.addAnim("idle",1,[0])
            this.tutorBox.currentAnim=this.tutorBox.anims.idle
            this.drawFlag=false
         }
        else if (this.tutor==6)
         {
            this.tutor++
            this.tutorBox.animSheet=new ig.AnimationSheet("media/game/tut1f.png",ig.getX(212),ig.getY(70))
            this.tutorBox.addAnim("idle",1,[0])
            this.tutorBox.currentAnim=this.tutorBox.anims.idle
            this.arrowTutor.pos.x=ig.getX(522)
            this.arrowTutor.pos.y=ig.getY(48)
            this.arrowTutor.currentAnim.flip.y=true
            this.arrowTutor.currentAnim.flip.x=true
            this.tutorBtn.kill();

            this.drawFlag=false

         }
      },
      */
      

      randomFromInterval:function(from,to)
      {
          return Math.floor(Math.random()*(to-from+1)+from);
      },

      sortOut:function()
      {
        var arr=[]

        /*this.arrObj2.sort
        (
          function(a,b)
          {

            if (a.animSheet.width>82 || b.animSheet.width>82)
             {
                if (a.animSheet.width>82 && b.animSheet.width>82)
                 {
                    return ((a.pos.y+a.animSheet.height)-(b.pos.y+b.animSheet.height))
                 }
                else if (a.animSheet.width>82 || b.animSheet.width>82)
                 {

                   if (a.pos.y+40 > b.pos.y+60)// || (a.pos.y+40 > b.pos.y+60 && a.pos.x< b.pos.x))
                    {
                      return b.pos.x-a.pos.x
                      //return ((a.pos.y+a.animSheet.height)-(b.pos.y+b.animSheet.height))
                    }
                    else
                    {
                      return ((a.pos.y+a.animSheet.height)-(b.pos.y+b.animSheet.height))
                      //return b.pos.x-a.pos.x
                    }
                 }
                
             }
            else
            {
              return ((a.pos.y+a.animSheet.height)-(b.pos.y+b.animSheet.height))
            }
            
            
            
          }
          
        )*/

        /*this.arrObj2.sort
        (
          function(a,b)
          {
            //return b.pos.x-a.pos.x
            return ((a.pos.y+a.animSheet.height)-(b.pos.y+b.animSheet.height))
          }
          
        )
        this.arrObj2.sort
        (
          function(a,b)
          {
            if (a.pos.x<b.pos.x && a.pos.y+40>b.pos.y+60)
             {
                return b.pos.x-a.pos.x
             }
          }
        )
        
        for (var i = 0; i < this.arrObj2.length; i++)
         {
          console.log(this.arrObj2[i].pos.y)
        }*/

        for (var i = 0; i < this.arrObj2.length; i++)
        {
          if (i<this.arrObj2.length-1 && (this.arrObj2[i].pos.y+this.arrObj2[i].animSheet.height)>(this.arrObj2[i+1].pos.y+this.arrObj2[i+1].animSheet.height))
           {
              this.arrObj2.splice(i,2,this.arrObj2[i+1],this.arrObj2[i])
              i=0

           }
        }
        

        for (var i = 0; i < this.arrObj2.length; i++)
        {
          this.arrObj2[i].zIndex=10+i
        }
        this.sortEntities();
        this.drawFlag=false
      },

      checkCollide:function(dim,ob1,ob2)
        {
          var switchs=false
          if (dim=="x")
           {
              if ((ob1.pos.x+ob1.animSheet.width>ob2.pos.x) || (ob2.pos.x+ob2.animSheet.width>ob1.pos.x))
               {
                  switchs=true
               }
           }
          else if (dim=="y")
           {
              if ((ob1.pos.y+ob1.animSheet.height>ob2.pos.y) || (ob2.y+ob2.animSheet.height>ob1.pos.y))
               {
                  switchs=true
               }
           }
           return switchs
        },

      repos:function(ob)
      {
        

        if (ob.animSheet.width<=82)
         {
            if (ob.animSheet.image.path=="media/game/couple1.png" || ob.animSheet.image.path=="media/game/couple2.png" || ob.animSheet.image.path=="media/game/couple3.png" || ob.animSheet.image.path=="media/game/couple4.png")
             {
                ob.pos.y=ig.getY(ob.pos.y-(ob.animSheet.height-30))
             }
            else
            {
               ob.pos.y=ig.getY(ob.pos.y-(ob.animSheet.height-40))
              // ob.pos.y=ig.getY(ob.pos.y-(ob.animSheet.width/2))
            }
            
         }
        else
        {
             ob.pos.y=ig.getY(ob.pos.y-(ob.animSheet.height-60))
            // ob.pos.y=ig.getY(ob.pos.y-(ob.animSheet.width/2))
        }
      },

      pushObjectToArray:function()
      {
        ig.global.objectArr=[]
        for (var i = 0; i < this.arrObj2.length; i++)
         {
            if (this.arrObj2[i].animSheet.image.path!="media/game/carousel.png" && this.arrObj2[i].animSheet.image.path!="media/game/fountain.png" && this.arrObj2[i].animSheet.image.path!="media/game/pinky.png")
             {
                ig.global.objectArr.push(this.arrObj2[i])
             }
            
        }
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

      draw:function()
      {
        if (this.loader == null) {
          
          /*if( this.clearColor ) {
            ig.system.clear( this.clearColor );
          }
          
          // first draw normal entities
          var ctx = document.getElementById('canvas').getContext('2d');
          for( var i = 0; i < this.entities.length; i++ ) {
            
            if ((!this.entities[i].bringToFront || this.entities[i].bringToFront == 'undefined') && this.entities[i].zIndex >= 0) {
              if (this.entities[i].skala) {
                ctx.save();
                ctx.scale(this.entities[i].skala,this.entities[i].skala);
              }
              this.entities[i].draw();
              if (this.entities[i].skala) {
                ctx.restore();
              }
            }
          }
          
                
          // second draw bringToFront entities
          for( var i = 0; i < this.entities.length; i++ ) {
            if (this.entities[i].bringToFront) {
              if (this.entities[i].skala) {
                ctx.save();
                ctx.scale(this.entities[i].skala,this.entities[i].skala);
              }
              this.entities[i].draw();
              if (this.entities[i].skala) {
                ctx.restore();
              }
            }
          }
          this.font.draw("Stage "+ig.global.level,ig.getX(22.523),ig.getY(35))
          this.font2.draw(this.totalMoney+"/"+this.goal,ig.getX(130),ig.getY(513),ig.Font.ALIGN.Center)
          */

          if (!this.drawFlag)
           {
            this.parent();
            this.font2.draw(ig.global.money,ig.getX(37),ig.getY(507),ig.Font.ALIGN.Center)

            //////identity utk tile
            /*for (var i = 0; i < this.arrTiles2.length; i++)
            {
              this.font2.draw("tile "+this.arrTiles2[i].filled,ig.getX(this.arrTiles2[i].pos.x+11),ig.getY(this.arrTiles2[i].pos.y+20))
            }
*/
            ///////
            
            if (this.decorBox!=null)
             {
                if (this.decorBox.state=="stand")
                 {
                    this.font2.draw(ig.global["stand"+this.decorBox.page+1],ig.getX(this.moneybox1.pos.x+21),ig.getY(this.moneybox1.pos.y+15),ig.Font.ALIGN.Left)
                    
                    this.font3.draw(ig.global["stand"+this.decorBox.page+1+"qty"]+"/2",ig.getX(this.opt1.pos.x+120),ig.getY(this.opt1.pos.y+25),ig.Font.ALIGN.Left)

                    if (this.decorBox.page==2 && ig.global.level>=6)
                     {
                        this.font3.draw(ig.global["stand"+this.decorBox.page+2+"qty"]+"/2",ig.getX(this.opt2.pos.x+120),ig.getY(this.opt2.pos.y+25),ig.Font.ALIGN.Left)
                        this.font2.draw(ig.global["stand"+this.decorBox.page+2],ig.getX(this.moneybox2.pos.x+21),ig.getY(this.moneybox2.pos.y+15),ig.Font.ALIGN.Left)
                     }
                    else if (this.decorBox.page==1)
                     {
                        this.font3.draw(ig.global["stand"+this.decorBox.page+2+"qty"]+"/2",ig.getX(this.opt2.pos.x+120),ig.getY(this.opt2.pos.y+25),ig.Font.ALIGN.Left)
                        this.font2.draw(ig.global["stand"+this.decorBox.page+2],ig.getX(this.moneybox2.pos.x+21),ig.getY(this.moneybox2.pos.y+15),ig.Font.ALIGN.Left)
                     }
                    
                 }
                else if (this.decorBox.state=="decor")
                 {
                    this.font2.draw(ig.global["decor"+this.decorBox.page+1],ig.getX(this.moneybox1.pos.x+21),ig.getY(this.moneybox1.pos.y+15),ig.Font.ALIGN.Left)
                    this.font2.draw(ig.global["decor"+this.decorBox.page+2],ig.getX(this.moneybox2.pos.x+21),ig.getY(this.moneybox2.pos.y+15),ig.Font.ALIGN.Left)
                    this.font2.draw(ig.global["decor"+this.decorBox.page+3],ig.getX(this.moneybox3.pos.x+21),ig.getY(this.moneybox3.pos.y+15),ig.Font.ALIGN.Left)
                 }
                else if (this.decorBox.state=="others")
                 {
                    this.font2.draw(ig.global["others"+this.decorBox.page+1],ig.getX(this.moneybox1.pos.x+21),ig.getY(this.moneybox1.pos.y+15),ig.Font.ALIGN.Left)
                    this.font2.draw(ig.global["others"+this.decorBox.page+2],ig.getX(this.moneybox2.pos.x+21),ig.getY(this.moneybox2.pos.y+15),ig.Font.ALIGN.Left)
                    this.font2.draw(ig.global["others"+this.decorBox.page+3],ig.getX(this.moneybox3.pos.x+21),ig.getY(this.moneybox3.pos.y+15),ig.Font.ALIGN.Left)
                 }
             }
            
            this.drawFlag=true
           }
           
            
          
        }
      },

      

      update:function() {
        this.parent();

        

        

        /*for (var i = 0; i < this.arrObj2.length; i++)
        {
          this.arrObj2[i].fireMouseUp();
        }*/

        /*  //use this to detect your mouse coordinate
        if (ig.input.pressed("click"))
         {
          console.log("mouseX= "+ig.input.mouse.x+" mouseY= "+ig.input.mouse.y);
         }*/
      },

  	});
});