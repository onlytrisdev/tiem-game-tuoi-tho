ig.module(
  'game.GameWin8'
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
  	GameWin8 = ig.Game.extend({
  		mBg:null,
      winname:"Game",

      tutor:1,
      showTutor:false,
      pauseState:false,
      goal:3000,
      totalMoney:0,
      animate:false,

      customerMin:2,
      customerMax:3,
      customerType:4,
      reqQty:3,

      bus:null,
      busStop:false,
      busTimer:60,

      chosenCustomer:null,

      arrowCustomer:null,
      arrCustomer:[],
      arrTiles2:[],

      arrleft:null,
      arrright:null,

      levelTimer:7000,
      beginTimer:0,

      /////buat eskrim
      boxice:null,
      topping:0,
      toppingarr:[],


      ////buat roller coaster
      arrCart:[],
      timerCoaster:0,
      gocoaster:null,
      coasterbar:null,
      brokenIcon:null,
  		
      font: new ig.Font( '', 16, null, null, '#000000','center', 3, false),
      font2: new ig.Font( '', 12, null, null, '#000000','center', 3, false),
  		font3: new ig.Font( '', 12, null, null, '#000000','center', 3, false),

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
                [612.467,331,false,false,"11-1"],[572.051,351,false,false,"11-2"],[531.633,371,true,false,"11-3"],[491.217,391,true,false,"11-4"],[450.799,412,true,false,"11-5"],[410.381,432,true,false,"11-6"],[369.965,452,false,false,"11-7"],[329.546,472,false,false,"11-8"],[289.129,492,false,false,"11-9"],
                [531.633,412,true,true,"12-1"],[491.217,432,true,false,"12-2"],[450.799,452,true,false,"12-3"]
                
                ],

      arrObj:[],


      arrObj2:[],

  		init:function() {

        ig.resources = [];
      ig.ready = false;

        dummyImages = [
          new ig.Image("media/game/bg11.png"),
          new ig.Image("media/game/bg12.png"),
          new ig.Image("media/game/bg13.png"),
          new ig.Image("media/game/bg21.png"),
          new ig.Image("media/game/bg22.png"),
          new ig.Image("media/game/bg23.png"),
          new ig.Image("media/game/bg31.png"),
          new ig.Image("media/game/bg32.png"),
          new ig.Image("media/game/bg33.png"),
          new ig.Image("media/game/tile.png"),
          new ig.Image("media/game/stand12.png"),
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
          new ig.Image("media/game/taphere.png"),
          new ig.Image("media/game/arrowtutor.png"),
          new ig.Image("media/game/tut1b.png"),
          new ig.Image("media/game/bus.png"),
          new ig.Image("media/game/couple1.png"),
          new ig.Image("media/game/couple2.png"),
          new ig.Image("media/game/couple3.png"),
          new ig.Image("media/game/couple4.png"),
          new ig.Image("media/game/req1.png"),
          new ig.Image("media/game/req2.png"),
          new ig.Image("media/game/req3.png"),
          new ig.Image("media/game/req4.png"),
          new ig.Image("media/game/req5.png"),
          new ig.Image("media/game/req6.png"),
          new ig.Image("media/game/arrowcustomer.png"),
          new ig.Image("media/game/heartbar.png"),
          new ig.Image("media/game/tut1d.png"),
          new ig.Image("media/game/tut1e.png"),
          new ig.Image("media/game/bar1.png"),
          new ig.Image("media/game/bar2.png"),
          new ig.Image("media/game/tut1f.png"),
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
          new ig.Image("media/game/pausebox.png"),
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
          new ig.Image("media/game/fix.png"),

          /////mini game es
          new ig.Image("media/game/ice/boxice.png"),
          new ig.Image("media/game/ice/ice1.png"),
          new ig.Image("media/game/ice/ice2.png"),
          new ig.Image("media/game/ice/ice3.png"),
          new ig.Image("media/game/ice/ice4.png"),
          new ig.Image("media/game/ice/ice5.png"),
          new ig.Image("media/game/ice/ice6.png"),
          new ig.Image("media/game/ice/topping.png"),
          new ig.Image("media/game/ice/cone.png"),
          new ig.Image("media/game/ice/request.png"),
          new ig.Image("media/game/ice/resetice.png"),


          ///////cart
          new ig.Image("media/game/cart.png"),
          new ig.Image("media/game/gocoaster.png"),


      ];

      
      ig.input.initMouse();
        ig.input.bind( ig.KEY.MOUSE1, 'click');

        this.beginTimer=this.levelTimer
        ig.global.noPeopleMad=true
        
        this.mBg=this.spawnEntity
        (
          Bg,ig.getX(0),ig.getY(0),
          {
            animSheet:new ig.AnimationSheet("media/game/bg"+ig.global.tiletype+ig.global.grasstype+".png",ig.getX(700),ig.getY(525))
          }
        )
        this.mBg.zIndex=this.entities.length-1

        for (var i = 0; i < 4; i++)
        {
          
              this["cart"+i]=this.spawnEntity
              (
                Obj3,ig.getX(218-(i*77)),ig.getY(-6+(i*37)),
                {
                  size:{x:ig.getX(119),y:ig.getY(102)},
                  animSheet:new ig.AnimationSheet("media/game/cart.png",ig.getX(119),ig.getY(102)),
                  onMouseUp:function()
                  {
                    this.objekJalan(ig.game.chosenCustomer);
                  }
                }
              )
            this["cart"+i].zIndex=this.entities.length-1
            this["cart"+i].addAnim("1",1,[1])
            this["cart"+i].addAnim("2",1,[2])
            this["cart"+i].addAnim("3",1,[3])
            this["cart"+i].addAnim("4",1,[4])
            // this["cart"+i].tagId=i
            this["cart"+i].stationX1=this["cart"+i].pos.x
            this["cart"+i].stationX2=this["cart"+i].pos.x+487
            this["cart"+i].stationY1=this["cart"+i].pos.y
            this["cart"+i].stationY2=this["cart"+i].pos.y-250
            this.arrCart.push(this["cart"+i])
        }

        this.fence=this.spawnEntity
        (
          Obj,ig.getX(-96.68),ig.getY(-53),
          {
            animSheet:new ig.AnimationSheet("media/game/pagar.png",ig.getX(641),ig.getY(356))
          }
        )
        this.fence.zIndex=this.entities.length-1

        

        ////init tileLayer
        for (var i = 0; i < this.arrTiles.length; i++)
         {
            this["tile"+i]=this.spawnEntity
            (
              Obj,ig.getX(this.arrTiles[i][0]),ig.getY(this.arrTiles[i][1]),
              {
                animSheet:new ig.AnimationSheet("media/game/tile.png",ig.getX(82),ig.getY(40))
                //animSheet:new ig.AnimationSheet("media/game/tree.png",ig.getX(82),ig.getY(130))
              }
            )
            this["tile"+i].zIndex=this.entities.length-1
            this["tile"+i].road=this.arrTiles[i][2]
            this["tile"+i].filled=this.arrTiles[i][3]
            this["tile"+i].index=this.arrTiles[i][4]
            this["tile"+i].currentAnim.alpha=0
            this["tile"+i].names=i
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
                this.objekJalan(ig.game.chosenCustomer);
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

        /*for (var i = 0; i < this.arrTiles.length; i++)
         {
            for (var j = 0; j < this.arrObj.length; j++)
            {
              if (i==this.arrObj[j][0])
               {
                  this["obj"+i]=this.spawnEntity
                  (
                    Obj3,ig.getX(this["tile"+i].pos.x),ig.getY(this["tile"+i].pos.y),
                    {
                      size:{x:ig.getX(this.arrObj[j][2]),y:ig.getY(this.arrObj[j][3])},
                      animSheet:new ig.AnimationSheet(this.arrObj[j][1],ig.getX(this.arrObj[j][2]),ig.getY(this.arrObj[j][3])),
                      onMouseUp:function()
                      {
                        this.objekJalan(ig.game.chosenCustomer);

                      }
                    }
                  )
                  this["obj"+i].zIndex=this.entities.length-1
                  this["obj"+i].indx=this.arrObj[j][0]
                  this["obj"+i].sizeX=this.arrObj[j][2]
                  this["obj"+i].sizeY=this.arrObj[j][3]
                  this["obj"+i].filepath=this.arrObj[j][1]
                  //this["tile"+i].animSheet=new ig.AnimationSheet(this.arrObj[j][1],ig.getX(this.arrObj[j][2]),ig.getY(this.arrObj[j][3]))
                  // this["obj"+i].addAnim("idle",1,[1])
                  this["obj"+i].addAnim("idle1",1,[1])
                  this["obj"+i].addAnim("idle2",1,[2])
                  this["obj"+i].addAnim("idle3",1,[3])
                  //this["obj"+i].addAnim("chosen",1,[2])
                  this["obj"+i].currentAnim=this["obj"+i].anims["idle"+this["obj"+i].colorIdx]
                  this["tile"+i].filled=true
                  this.repos(this["obj"+i]);
                  this.arrObj2.push(this["obj"+i])
               }
            }
        }*/

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

        this.stagebar=this.spawnEntity
        (
          Obj,ig.getX(10.523),ig.getY(16),
          {
            animSheet:new ig.AnimationSheet("media/game/stage.png",ig.getX(79),ig.getY(27))
          }
        )
        this.stagebar.zIndex=this.entities.length+1000

        this.questBtn=this.spawnEntity
        (
          Button,ig.getX(529.966),ig.getY(18),
          {
            animSheet:new ig.AnimationSheet("media/game/quest.png",ig.getX(65),ig.getY(22)),
            size:{x:ig.getX(65),y:ig.getY(22)},
            pressedUp:function()
            {
              if ((!ig.game.showTutor && !ig.game.pauseState) || (ig.game.showTutor && ig.game.tutor==7 && !ig.game.pauseState))
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

        this.pausebtn=this.spawnEntity
        (
          Button,ig.getX(601.478),ig.getY(16),
          {
            animSheet:new ig.AnimationSheet("media/game/pausebtn.png",ig.getX(36),ig.getY(27)),
            size:{x:ig.getX(36),y:ig.getY(27)},
            pressedUp:function()
            {
              if (!ig.game.showTutor)
               {
                  ig.game.pauseState=true
                  ig.game.pausebox=ig.game.spawnEntity
                  (
                    Obj,ig.getX(0),ig.getY(0),
                    {
                      animSheet:new ig.AnimationSheet("media/game/pausebox.png",ig.getX(700),ig.getY(525))
                    }
                  )
                  ig.game.pausebox.zIndex=1110+ig.game.entities.length-1
                  ig.game.continuebtn=ig.game.spawnEntity
                  (
                    Button,ig.getX(268),ig.getY(272),
                    {
                      size:{x:ig.getX(164),y:ig.getY(44)},
                      animSheet:new ig.AnimationSheet("media/game/continuebtn.png",ig.getX(164),ig.getY(44)),
                      pressedUp:function()
                      {
                        ig.game.pausebox.kill();
                        ig.game.mainmenubtn.kill();
                        ig.game.moregamelrg.kill();

                        this.kill();
                        ig.game.pauseState=false
                        ig.game.drawFlag=false
                      }
                    }
                  )
                  ig.game.continuebtn.zIndex=1110+ig.game.entities.length-1

                  ig.game.mainmenubtn=ig.game.spawnEntity
                  (
                    Button,ig.getX(268),ig.getY(324),
                    {
                      size:{x:ig.getX(164),y:ig.getY(44)},
                      animSheet:new ig.AnimationSheet("media/game/mainmenubtn.png",ig.getX(164),ig.getY(44)),
                      pressedUp:function()
                      {
                        ig.system.setGame(MainMenuWin)
                      }
                    }
                  )
                  ig.game.mainmenubtn.zIndex=1110+ig.game.entities.length-1

                  ig.game.moregamelrg=ig.game.spawnEntity
                  (
                    Button,ig.getX(268),ig.getY(376),
                    {
                      size:{x:ig.getX(164),y:ig.getY(44)},
                      animSheet:new ig.AnimationSheet("media/game/moregamelrg.png",ig.getX(164),ig.getY(44)),
                      pressedUp:function()
                      {
                        ig.game.openLink("http://www.girlsgogames.com");
                      }
                    }
                  )
                  ig.game.moregamelrg.zIndex=1110+ig.game.entities.length-1


               }
               ig.game.drawFlag=false
            }
          }
        )
        this.pausebtn.zIndex=this.entities.length+1000
        this.pausebtn.exception=true

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

        this.indicator=this.spawnEntity
        (
          Obj,ig.getX(-0.327),ig.getY(431),
          {
            animSheet:new ig.AnimationSheet("media/game/time.png",ig.getX(96),ig.getY(96))
          }
        )
        this.indicator.zIndex=this.entities.length+1000

        this.timearrow=this.spawnEntity
        (
          Obj,ig.getX(1.25),ig.getY(464),
          {
            animSheet:new ig.AnimationSheet("media/game/timearrow.png",ig.getX(21),ig.getY(51))
          }
        )
        this.timearrow.zIndex=this.entities.length+1000
        this.timearrow.currentAnim.pivot={x:10.5,y:51}

        this.indicator2=this.spawnEntity
        (
          Obj,ig.getX(-0.327),ig.getY(498),
          {
            animSheet:new ig.AnimationSheet("media/game/timecover.png",ig.getX(29),ig.getY(29))
          }
        )
        this.indicator2.zIndex=this.entities.length+1000

        this.moneybar=this.spawnEntity
        (
          Obj,ig.getX(100.507),ig.getY(496),
          {
            animSheet:new ig.AnimationSheet("media/game/money.png",ig.getX(91),ig.getY(25))
          }
        )
        this.moneybar.zIndex=this.entities.length+1000

        /*
        this.startplay=this.spawnEntity
        (
          Button,ig.getX(541.619),ig.getY(475),
          {
            size:{x:ig.getX(145),y:ig.getY(39)},
            animSheet:new ig.AnimationSheet("media/game/startplay.png",ig.getX(145),ig.getY(39))
          }
        )
        this.startplay.zIndex=this.entities.length+1000
        */

        ////tutorlayer

       /* this.shade=this.spawnEntity
        (
          Obj,ig.getX(0),ig.getY(0),
          {
            animSheet:new ig.AnimationSheet("media/game/shade.png",ig.getX(700),ig.getY(525))
          }
        )
        this.shade.zIndex=this.entities.length-1*/

        /*this.decorBtn=this.spawnEntity
        (
          Button,ig.getX(9),ig.getY(480),
          {
            size:{x:ig.getX(112),y:ig.getY(35)},
            animSheet:new ig.AnimationSheet("media/game/decorhut.png",ig.getX(112),ig.getY(35)),
            pressedUp:function()
            {
              if (!ig.game.showTutor || ig.game.tutor==2)
               {
                  ig.game.decorDialog();
               }
            }
          }
        )*/

        /*this.girltutor=this.spawnEntity
        (
          Obj,ig.getX(557.643),ig.getY(397),
          {
            animSheet:new ig.AnimationSheet("media/game/girltutor.png",ig.getX(120),ig.getY(152))
          }
        )
        this.girltutor.zIndex=this.entities.length-1

        this.tutorBox=this.spawnEntity
        (
          Obj,ig.getX(367.333),ig.getY(413),
          {
            animSheet:new ig.AnimationSheet("media/game/tut1.png",ig.getX(212),ig.getY(70))
          }
        )
        this.tutorBox.zIndex=this.entities.length-1
        */

        /*this.infobox=this.spawnEntity
        (
          Obj,ig.getX(11),ig.getY(18),
          {
            animSheet:new ig.AnimationSheet("media/game/info5.png",ig.getX(153),ig.getY(45))
          }
        )
        this.infobox.zIndex=this.entities.length-1

        this.tutorBtn=this.spawnEntity
        (
          Button,ig.getX(101),ig.getY(75),
          {
            size:{x:ig.getX(55),y:ig.getY(19)},
            animSheet:new ig.AnimationSheet("media/game/taphere.png",ig.getX(55),ig.getY(19)),
            pressedUp:function()
            {
              ig.game.shade.kill();
              ig.game.infobox.kill();
              this.kill();
              ig.game.pauseState=false
              ig.game.showTutor=false
              ig.game.drawFlag=false
            }
          }
        )
        this.tutorBtn.zIndex=this.entities.length-1*/

        this.logo=this.spawnEntity
          (
            Button,ig.getX(575),ig.getY(454),
            {
              size:{x:ig.getX(115),y:ig.getY(71)},
              animSheet:new ig.AnimationSheet("media/logosmall.png",ig.getX(115),ig.getY(71)),
              pressedUp:function()
              {
                if (!ig.game.pauseState)
                {
                  ig.game.openLink("http://www.girlsgogames.com");
                }
              }
            }
          )
          this.logo.zIndex=2000+this.entities.length-1

        ig.global.stand12qty > 0 ? ig.global.ramal=true : ig.global.ramal=false
        ig.global.stand11qty > 0 ? ig.global.eskrim=true : ig.global.eskrim=false
        ig.global.stand21qty > 0 ? ig.global.balon=true : ig.global.balon=false
        ig.global.stand22qty > 0 ? ig.global.hotdog=true : ig.global.hotdog=false



        // load the resources
        ig.ready = true;

        // Start the custom preloader with the captured resources
        this.loader = new IntermediateLoader2( null, ig.resources );
        this.loader.load();

  		},

      repairCoster:function()
      {
        this.coasterbar=ig.game.spawnEntity
        (
          Obj,ig.getX(126),ig.getY(87),
          {
            animSheet:new ig.AnimationSheet("media/game/bar2.png",ig.getX(119),ig.getY(13))
          }
        )
        this.coasterbar.zIndex=ig.game.entities.length-1
        this.coasterbar.addAnim("animed",0.033,[0,0,0,0,0,0,0,1,1,1,1,1,1,1])
        this.coasterbar.currentAnim=this.coasterbar.anims.animed

        this.timerCoaster=400
        this.drawFlag=false
      },

      endCoaster:function(step)
      {
        if (step=="first")
         {
            
            this.animate=true
            for (var i = 0; i < 4; i++)
             {
                this["cart"+i].pos.x=this["cart"+i].stationX2
                this["cart"+i].pos.y=this["cart"+i].stationY2

                this["cart"+i].tween(
                { 
                  pos: {x:this["cart"+i].stationX1, y:this["cart"+i].stationY1}
                },     // the new position

                 0.75, 
                {                    // the time for tween
                  easing:ig.Tween.Easing.Sinusoidal.EaseOut,    // the easing 
                  delay:0,                                     // the delay
                  onComplete:function(){
                      this.endCoaster("second")
                      
                      
                  }.bind(this)
                }
              ).start();        // yeah start now
            }
         }
         else if (step=="second" && this.coasterbar!=null )
          {
            this.coasterbar.kill();
            this.coasterbar=null


            this.carousel.inProgress==false ? ig.game.animate=false : ig.game.animate=true

            for (var i = 0; i < this.arrCart.length; i++)
             {
                if (this.arrCart[i].inProgress)
                 {

                    this.munculkanCustomer(this.arrCart[i],this.arrCart[i].customer)
                    this.arrCart[i].currentAnim=this.arrCart[i].anims.idle
                    this.totalMoney+=30
                    this.arrCart[i].inProgress=false
                 };
                
            }


            var brokenchance=this.randomFromInterval(1,100)
            if (brokenchance<=15)
             {
                for (var i = 0; i < 4; i++)
                 {
                    this["cart"+i].broken=true 
                }
                this.brokenIcon=ig.game.spawnEntity
                  (
                    Obj,ig.getX(168),ig.getY(45),
                    {
                      animSheet:new ig.AnimationSheet("media/game/fix.png",ig.getX(38),ig.getY(38))
                    }
                  )
                  this.brokenIcon.zIndex=ig.game.entities.length-1
             }
             this.drawFlag=false
             
          }
        
          else if(step=="broken")
          {
            for (var i = 0; i < this.arrCart.length; i++)
            {
              this.arrCart[i].broken=false
            }
            this.coasterbar.kill()
            this.coasterbar=null
            ig.global.repairCount++
            if (ig.global.repairCount>=4 && ig.global.quest6[0]==false)
             {
              ig.global.quest6[0]=true
             }
          }
        

      },

      startCoaster:function()
      {
        this.gocoaster.kill();
        this.gocoaster=null
        this.animate=true
        /////tweeen the coaster
        for (var i = 0; i < 4; i++)
         {
            this["cart"+i].tween(
            { 
              pos: {x:this["cart"+i].pos.x-407, y:this["cart"+i].pos.y+211}
            },     // the new position

             0.75, 
            {                    // the time for tween
              easing:ig.Tween.Easing.Sinusoidal.EaseOut,    // the easing 
              delay:0,                                     // the delay
              onComplete:function(){
                  this.carousel.inProgress==false ? ig.game.animate=false : ig.game.animate=true
                  ig.game.timerCoaster=500
                  if (this.coasterbar==null)
                   {
                      this.coasterbar=ig.game.spawnEntity
                      (
                        Obj,ig.getX(126),ig.getY(87),
                        {
                          animSheet:new ig.AnimationSheet("media/game/bar1.png",ig.getX(119),ig.getY(13))
                        }
                      )
                      this.coasterbar.zIndex=ig.game.entities.length-1
                      this.coasterbar.addAnim("animed",0.033,[0,0,0,0,0,0,0,1,1,1,1,1,1,1])
                      this.coasterbar.currentAnim=this.coasterbar.anims.animed
                   }
                  
                  
                  
                                       // callback
                  
              }.bind(this)
            }
          ).start();        // yeah start now
        }
      },

      
      /*checkTutor:function()
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
      },*/


      startBus:function()
      {
        this.animate=true
        this.bus=this.spawnEntity
        (
          Obj,ig.getX(725),ig.getY(284),
          {
            animSheet:new ig.AnimationSheet("media/game/bus.png",ig.getX(162),ig.getY(145))
          }
        )
        this.bus.zIndex=1000+this.entities.length-1
        this.sortEntities();

        this.bus.tween(
          { 
            pos: {x:526, y:377}
          },     // the new position

           0.75, 
          {                    // the time for tween
            easing:ig.Tween.Easing.Sinusoidal.EaseOut,    // the easing 
            delay:0,                                     // the delay
            onComplete:function(){
                if (ig.global.level==1)
                 {
                    this.tutor++
                    this.checkTutor();
                 };
                
                this.addCustomer();
                this.bus.tween(
                { 
                  pos: {x:249, y:546}
                },     // the new position

                 1.25, 
                {                    
                  easing:ig.Tween.Easing.Sinusoidal.EaseOut,    
                  delay:0.75,                                     
                  onComplete:function(){
                      this.bus.kill();
                      this.bus=null
                      if (!this.carousel.inProgress)
                       {
                          this.animate=false
                       }
                      
                      
                  }.bind(this)
                }
              ).start();
                                     // callback
                
            }.bind(this)
          }
        ).start();        // yeah start now

      },

      addCustomer:function()
      {
        //kode ngeluarin customer dari bis
        var rand1=Math.floor((Math.random()*((this.customerMax-this.customerMin)+1))+2);
        
        for (var i = 1; i <= rand1; i++)
        {
          var rand2=Math.floor((Math.random()*this.customerType)+1)
          var posX=0
          var posY=0
          for (var j = this.arrTiles.length-1; j >= 0; j--)
          {
            if(this["tile"+j].road==true && this["tile"+j].filled==false)
            {
              posX=this["tile"+j].pos.x
              posY=this["tile"+j].pos.y
              
              this.customer=this.spawnEntity
              (
                Obj2,ig.getX(posX+(52/2)),ig.getY(posY),
                {
                  size:{x:ig.getX(52),y:ig.getY(96)},
                  animSheet:new ig.AnimationSheet("media/game/couple"+rand2+".png",ig.getX(52),ig.getY(96)),
                  onMouseUp:function()
                  {
                    
                    if (this.currentAnim.alpha!=0)
                     {
                        ig.game.chosenCustomer=this
                        if (ig.game.arrowCustomer==null)
                         {
                            ig.game.arrowCustomer=ig.game.spawnEntity
                            (
                              Obj,ig.getX(this.pos.x+10),ig.getY(this.pos.y-30),
                              {
                                animSheet:new ig.AnimationSheet("media/game/arrowcustomer.png",ig.getX(20),ig.getY(32))
                              }
                            )
                            ig.game.arrowCustomer.zIndex=1100+ig.game.entities.length-1
                            ig.game.drawFlag=false
                         }
                        else if (ig.game.arrowCustomer!=null)
                         {
                            ig.game.arrowCustomer.pos.x=ig.getX(this.pos.x+10)
                            ig.game.arrowCustomer.pos.y=ig.getY(this.pos.y-30)
                            ig.game.drawFlag=false
                         }
                     }
                    
                  }
                }
              )
              this.customer.zIndex=this.entities.length-1
              this.customer.addAnim("1",1,[0])
              this.customer.addAnim("2",1,[1])
              this.customer.addAnim("3",1,[2])
              this.customer.addAnim("4",1,[3])
              this.customer.addAnim("5",1,[4])
              this.customer.addAnim("6",1,[5])
              this.customer.addAnim("7",1,[6])
              this.customer.addAnim("8",1,[7])
              this.customer.tilePos=j
              this.arrObj2.push(this.customer)
              this.arrCustomer.push(this.customer)

              
              this.repos(this.customer);
              this.sortOut();
              this["tile"+j].filled=true
               
              j=0
             
            }
          }
          
        }
      },

      munculkanCustomer:function(wahana,cust)
      {
        this.totalMoney+=wahana.money
        cust.reqQty--
        if (ig.global.level==1 &&this.showTutor && this.tutor==5)
         {
            this.checkTutor();
         }
        /*var arrdummy=[]
        for (var i = 0; i < this.arrTiles2.length; i++)
        {
          var range=this.countRange(this.arrTiles2[i],wahana)

        }*/
        this.arrTiles2.sort(function(a,b){
            
            var rangeA= ig.game.countRange(a,wahana)
            var rangeB= ig.game.countRange(b,wahana)
            return rangeA-rangeB
            

        })

        for (var i = 0; i < this.arrTiles2.length; i++)
        {
          if (this.arrTiles2[i].road && !this.arrTiles2[i].filled)
          {
            this.arrTiles2[i].filled=true
            cust.pos.x=ig.getX(this.arrTiles2[i].pos.x+(52/2))
            cust.pos.y=ig.getY(this.arrTiles2[i].pos.y)
            cust.currentAnim.alpha=1
            cust.balon==true ? cust.currentAnim=cust.anims["6"] : cust.currentAnim=cust.anims["2"]
            
            //masukkan tilepos
            cust.tilePos=this.arrTiles2[i].names
            
            cust.ubahPose();
            this.repos(cust)
            
            this.sortOut();
            
            i=this.arrTiles2.length
            this.drawFlag=false

          }
        }

      },

      countRange:function(ob1,ob2)
      {
        var rngX=0
        var rngY=0
        ob1.pos.x > ob2.pos.x ? rngX=ob1.pos.x-ob2.pos.x : rngX=ob2.pos.x-ob1.pos.x
        ob1.pos.y > ob2.pos.y ? rngY=ob1.pos.y-ob2.pos.y : rngY=ob2.pos.y-ob1.pos.y

        var rangeTotal=rngX+rngY

        return rangeTotal

      },

      generateRequest:function(ob)
      {
        var request=this.randomFromInterval(1,6)
        var initiateRequest=true

        if (request==2 && ig.global.level<5)
         {
            initiateRequest=false
            this.generateRequest(ob)
         }
        else if (request==3 && !ig.global.eskrim)
         {
            initiateRequest=false
            this.generateRequest(ob)
         }
        else if (request==4 && !ig.global.ramal)
         {
            initiateRequest=false
            this.generateRequest(ob)
         }
        else if (request==5 && !ig.global.hotdog)
         {
            initiateRequest=false
            this.generateRequest(ob)
         }
        else if (request==6 && !ig.global.balon)
         {
            initiateRequest=false
            this.generateRequest(ob)
         }

         if (initiateRequest)
          {
            this.reqBubble=this.spawnEntity
            (
              Button,ig.getX(ob.pos.x+26),ig.getY(ob.pos.y-10),
              {
                size:{x:ig.getX(43),y:ig.getY(30)},
                animSheet:new ig.AnimationSheet("media/game/req"+request+".png",ig.getX(43),ig.getY(30)),
                pressedUp:function()
                {
                  ig.game.chosenCustomer=ob
                        if (ig.game.arrowCustomer==null)
                         {
                            ig.game.arrowCustomer=ig.game.spawnEntity
                            (
                              Obj,ig.getX(ob.pos.x+10),ig.getY(ob.pos.y-30),
                              {
                                animSheet:new ig.AnimationSheet("media/game/arrowcustomer.png",ig.getX(20),ig.getY(32))
                              }
                            )
                            ig.game.arrowCustomer.zIndex=1100+ig.game.entities.length-1
                            ig.game.drawFlag=false
                         }
                        else if (ig.game.arrowCustomer!=null)
                         {
                            ig.game.arrowCustomer.pos.x=ig.getX(ob.pos.x+10)
                            ig.game.arrowCustomer.pos.y=ig.getY(ob.pos.y-30)
                            ig.game.drawFlag=false
                         }
                }
              }
            )
            this.reqBubble.zIndex=1100+this.entities.length-1
            ob.reqIdx=request
            ob.reqBubble=this.reqBubble
            //console.log(this.tutor+"hhh")
            if (ig.global.level==1 && this.showTutor &&this.tutor==4)
             {
                
                this.checkTutor();
                this.tutor++
             }

            if (!this.pauseState)
             {
                this.drawFlag=false
             } 
            
          }


      },

      removeCustomer:function(ob,type)
      {
        if (type=="angry")
         {
            ig.global.noPeopleMad=false
            ob.balon==true ? ob.currentAnim=ob.anims["8"] : ob.currentAnim=ob.anims["4"]
            ob.reqBubble.kill();
            ob.reqBubble=null
         }
        else if (type=="happy")
         {
            ob.balon==true ? ob.currentAnim=ob.anims["7"] : ob.currentAnim=ob.anims["3"]
         }
         ob.animState=120
         this.drawFlag=false

      },

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
            }
            
         }
        else
        {
            ob.pos.y=ig.getY(ob.pos.y-(ob.animSheet.height-60))
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
          this.font.draw("B�i "+ig.global.level,ig.getX(22.523),ig.getY(35))
          this.font2.draw(this.totalMoney+"/"+this.goal,ig.getX(130),ig.getY(513),ig.Font.ALIGN.Center)
          */

          if (!this.drawFlag)
           {
            this.parent();

            if (!this.pauseState || this.arrCustomer.length>0)
             {
                this.font.draw("Ngày "+ig.global.level,ig.getX(22.523),ig.getY(35))
                //if (!this.showTutor)
                 //{
                    this.font2.draw(this.totalMoney+"/"+this.goal,ig.getX(130),ig.getY(513),ig.Font.ALIGN.Center)
                 //}
                //else if (this.showTutor)
                 //{
                    //this.font2.draw(ig.global.money,ig.getX(36),ig.getY(508),ig.Font.ALIGN.Left)

                 //}
             }
            else if (this.pauseState && this.arrCustomer.length<=0 && this.totalMoney>=this.goal)
             {
                this.font2.draw(this.totalMoney,ig.getX(563),ig.getY(296),ig.Font.ALIGN.Left)
                
             }
            
            
            this.drawFlag=true
           }
           else if (this.animate && !this.pauseState)
            {
              this.parent()
              this.font.draw("Ngày "+ig.global.level,ig.getX(22.523),ig.getY(35))
              this.font2.draw(this.totalMoney+"/"+this.goal,ig.getX(130),ig.getY(513),ig.Font.ALIGN.Center)

            }
            
          
        }
      },

      endLevel:function()
      {
        this.animate=false
        this.pauseState=true
        this.indicator.kill();
        this.timearrow.kill();
        this.indicator2.kill();
        ig.global.money+=this.totalMoney
        if (this.totalMoney<this.goal)
         {
            //////gagalll!!

            this.failed=this.spawnEntity
            (
              Obj,ig.getX(0),ig.getY(0),
              {
                animSheet:new ig.AnimationSheet("media/game/failed.png",ig.getX(700),ig.getY(525))
              }
            )
            this.failed.zIndex=1110+this.entities.length-1

            this.tryagainbtn=this.spawnEntity
            (
              Button,ig.getX(277),ig.getY(375),
              {
                size:{x:ig.getX(145),y:ig.getY(39)},
                animSheet:new ig.AnimationSheet("media/game/tryagainbtn.png",ig.getX(145),ig.getY(39)),
                pressedUp:function()
                {
                  ig.system.setGame(GameWin8)
                }
              }
            )
            this.tryagainbtn.zIndex=1110+this.entities.length-1

            
         }

        else if (this.totalMoney>=this.goal)
         {
            /////nerhasil!!!
            if (ig.global.noPeopleMad && ig.global.quest5[0]==false)
             {
                ig.global.quest5[0]=true
             }

            ig.global.level++
            this.successbox=this.spawnEntity
            (
              Obj,ig.getX(0),ig.getY(0),
              {
                animSheet:new ig.AnimationSheet("media/game/successbox.png",ig.getX(700),ig.getY(525))
              }
            )
            this.successbox.zIndex=1110+this.entities.length-1

            this.font2.draw(this.totalMoney,ig.getX(563),ig.getY(284),ig.Font.ALIGN.Left)

            this.nextstage=this.spawnEntity
            (
              Button,ig.getX(277),ig.getY(375),
              {
                size:{x:ig.getX(145),y:ig.getY(39)},
                animSheet:new ig.AnimationSheet("media/game/nextstage.png",ig.getX(145),ig.getY(39)),
                pressedUp:function()
                {
                  ig.game.pushObjectToArray();
                  ig.system.setGame(EndingWin)
                }
              }
            )
            this.nextstage.zIndex=1110+this.entities.length-1
         }

         
         

            this.mainmenukcl=this.spawnEntity
            (
              Button,ig.getX(198),ig.getY(473),
              {
                size:{x:ig.getX(145),y:ig.getY(39)},
                animSheet:new ig.AnimationSheet("media/game/mainmenukcl.png",ig.getX(145),ig.getY(39)),
                pressedUp:function()
                {
                  ig.system.setGame(MainMenuWin)
                }
              }
            )
            this.mainmenukcl.zIndex=1110+this.entities.length-1

            this.moregamekcl=this.spawnEntity
            (
              Button,ig.getX(359),ig.getY(473),
              {
                size:{x:ig.getX(145),y:ig.getY(39)},
                animSheet:new ig.AnimationSheet("media/game/moregamekcl.png",ig.getX(145),ig.getY(39)),
                pressedUp:function()
                {
                  ig.game.openLink("http://www.girlsgogames.com");
                }
              }
            )
            this.moregamekcl.zIndex=1110+this.entities.length-1

            this.drawFlag=false



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
                window.open("http://girlsgogames.com",'_blank');
            }
        },

      update:function() {
        this.parent();

        if (!this.showTutor && !this.pauseState && this.levelTimer>0)
         {
            this.levelTimer--
            if (this.levelTimer==6800)
             {
                this.startBus();
             }
            else if (this.levelTimer==6400)
             {
                this.startBus();
             }
             else if (this.levelTimer==5900)
             {
                this.startBus();
             }
            else if (this.levelTimer==5400)
             {
                this.startBus();
             }
            else if (this.levelTimer==4400)
             {
                this.startBus();
             }
            else if (this.levelTimer==3400)
             {
                this.startBus();
             }
            else if (this.levelTimer==2900)
             {
                this.startBus();
             }
            else if (this.levelTimer==2400)
             {
                this.startBus();
             }
            else if (this.levelTimer==1700)
             {
                this.startBus();
             }
            else if (this.levelTimer==1300)
             {
                this.startBus();
             }
            else if (this.levelTimer==700)
             {
                this.startBus();
             }
            else if (this.levelTimer==200)
             {
                this.startBus();
             }
            
         }

        if (this.levelTimer<=0 && this.arrCustomer.length==0 && !this.pauseState)
         {
            this.endLevel();
         }

        if (this.drawFlag==true && this.levelTimer>0)
         {
            var percent=(this.levelTimer/this.beginTimer)*100
            var angles=(85*percent)/100
            var anglearrow=85-angles
            this.timearrow.currentAnim.angle=(0+anglearrow)*3.14/180


            this.indicator.draw();
            this.timearrow.draw();
            this.indicator2.draw();
            
         }

         if (this.drawFlag==true && this.coasterbar!=null && this.timerCoaster>0 && !this.pauseState)
          {
            this.timerCoaster--
            this.coasterbar.draw();
            if (this.timerCoaster<=0)
             {
                this.timerCoaster=0
                if (this.arrCart[0].broken==false)
                 {
                    this.endCoaster("first");
                 }
                else if (this.arrCart[0].broken==true)
                 {
                    this.endCoaster("broken")
                 }
                
             };
          }

        /*for (var i = 0; i < this.arrObj2.length; i++)
        {
          this.arrObj2[i].fireMouseUp();
        }*/

          //use this to detect your mouse coordinate
        /*if (ig.input.pressed("click"))
         {
          console.log("mouseX= "+ig.input.mouse.x+" mouseY= "+ig.input.mouse.y);
         }*/
      },

  	});
});