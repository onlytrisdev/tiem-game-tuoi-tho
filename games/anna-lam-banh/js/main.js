var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
   music:null,

   shutterOn:[true],

     tool1X:[175,164,182,198,196,166,177,190,317,298,312,284,310,293,293],
     
     tool1Y:[377,356,367,379,394,392,405,414,356,368,375,382,393,397,410],

     tool2X:[161,175,192,205,214,268,276,291,301,316,263],
     
     tool2Y:[321,315,315,320,334,335,322,316,319,326,345],

      tool3X:[203,213,222,234,244,255,266,275],
     
     tool3Y:[403,409,414,414,413,412,406,401],

     tool4X:[261,276,294,309,321,217,207,187,167,163,263,278,295,171,194],
     
     tool4Y:[304,299,297,304,315,308,296,291,298,306,292,284,286,280,279],

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    tool5X:[194,227,257,281,314,333,335,339,334,322,310,275,242,207,186,168,166,166,201,235,263,295,298,298,281,250,211,192,222,264,270,240],
     
    tool5Y:[247,227,227,236,251,282,312,336,363,395,418,430,443,420,396,368,332,292,277,261,268,286,312,345,371,389,373,332,301,301,329,338],

    tool6X:[194,227,257,281,314,333,335,339,334,322,310,275,242,207,186,168,166,166,201,235,263,295,298,298,281,250,211,192,222,264,270,240],
     
    tool6Y:[247,227,227,236,251,282,312,336,363,395,418,430,443,420,396,368,332,292,277,261,268,286,312,345,371,389,373,332,301,301,329,338],

     tool7X:[194,227,257,281,314,333,335,339,334,322,310,275,242,207,186,168,166,166,201,235,263,295,298,298,281,250,211,192,222,264,270,240],
     
    tool7Y:[247,227,227,236,251,282,312,336,363,395,418,430,443,420,396,368,332,292,277,261,268,286,312,345,371,389,373,332,301,301,329,338],

     tool8X:[194,227,257,281,314,333,335,339,334,322,310,275,242,207,186,168,166,166,201,235,263,295,298,298,281,250,211,192,222,264,270,240],
     
    tool8Y:[247,227,227,236,251,282,312,336,363,395,418,430,443,420,396,368,332,292,277,261,268,286,312,345,371,389,373,332,301,301,329,338],

     tool9X:[194,227,257,281,314,333,335,339,334,322,310,275,242,207,186,168,166,166,201,235,263,295,298,298,281,250,211,192,222,264,270,240],
     
    tool9Y:[247,227,227,236,251,282,312,336,363,395,418,430,443,420,396,368,332,292,277,261,268,286,312,345,371,389,373,332,301,301,329,338],

    tool10X:[194,227,257,281,314,333,335,339,334,322,310,275,242,207,186,168,166,166,201,235,263,295,298,298,281,250,211,192,222,264,270,240],
     
    tool10Y:[247,227,227,236,251,282,312,336,363,395,418,430,443,420,396,368,332,292,277,261,268,286,312,345,371,389,373,332,301,301,329,338],

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   tool11X:[188,202,235,294,266,320,323,316,298,266,228,199,189,181,227,252,289,294,284,235,216,240,263,263,265],
     
   tool11Y:[320,290,270,285,279,314,360,391,420,432,436,417,392,357,323,309,328,356,388,396,368,356,334,369,407],

   tool12X:[248,310,346,363,367,363,372,369,374,369,194,146,158,158,158,158],
     
    tool12Y:[189,202,236,281,338,389,440,478,534,588,227,251,301,363,406,461],

    tool13X:[137,187,233,246,223,170,136,113,176],
     
    tool13Y:[588,566,574,601,636,643,657,618,610],

    tool14X:[194,227,257,281,314,333,335,339,334,322,310,275,242,207,186,168,166,166,201,235,263,295,298,298,281,250,211,192,222,264,270,240],
     
    tool14Y:[247,227,227,236,251,282,312,336,363,395,418,430,443,420,396,368,332,292,277,261,268,286,312,345,371,389,373,332,301,301,329,338],
     
   makeup1_array:[1,1,1,1,1],

    annaarray:[1,1,1,1],
};

Main.boot = function() {};
Main.boot.prototype = {
   preload: function(){
      game.stage.backgroundColor = '#b8175f';
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.scale.refresh();
			game.scale.pageAlignVertically = true;
			game.scale.pageAlignHorizontally = true;
            game.stage.disableVisibilityChange = true;
            game.renderer.renderSession.roundPixels = true;

            game.scale.setResizeCallback(this.gameResized, this);

            game.load.image('loading', 'assets/prebar.png');
	    game.load.image('prelogo', 'assets/prebg_logo.png');
            game.load.image('barover', 'assets/barover.png');
            
                         game.load.image('Go','assets/Go.png');

           
            game.load.onFileComplete.add(this.fileLoadFun, this);  
   },
   gameResized: function(manager, bounds){
      var xpos = window.innerWidth - (window.innerWidth / game.width);
             var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
             manager.setUserScale(scale, scale, 0, 0);
             game.scale.pageAlignHorizontally = true;
   },
   fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles){
      if (progress == 100) {
               game.load.onFileComplete.removeAll();
            game.state.start('preloader');   
            }
   }
}
Main.preloader = function(){};

Main.preloader.prototype = {
   init:function()
   {
      this.progressbar;
      this.check = 10;
      this.bgbtn;  
      this.progress;
	  this.prelogo;
   },
   preload:function(){
   this.progress = game.add.text(game.world.centerX,500,"LOADING: 0%",{font:"bold 22px Arial",fill: "#ffffff",align: "center"});
            this.progress.anchor.setTo(0.5)
			this.prelogo = game.add.sprite((game.width/2)-100, (game.height/2)-100, 'prelogo');

            this.prelogo.inputEnabled = true
            this.prelogo.input.useHandCursor = true;
            this.prelogo.events.onInputUp.add(this.openLink, this);
             
             game.load.crossOrigin='*';
             game.load.audio('music', ['assets/music.mp3']);
             game.load.spritesheet('soundicon', 'assets/soundicon.png',79,77,2);
             game.load.image('logo', 'assets/logo.png');
             game.load.spritesheet('effects', 'assets/effects.png',141,134);
             game.load.spritesheet('effectssd', 'assets/efftes012.png',367,335);


            /*  for(i=0;i<RelatedGames.length; i++)
            {
            game.load.image('thumb_'+i, RelatedGames[i]["thumb"]);
            }*/
               game.load.image('Tump_frame','assets/Tump_frame.png');

               //icon

             game.load.image('icon1','assets/btns/icon1.png');
             game.load.image('icon2','assets/btns/icon2.png');
             game.load.image('icon3','assets/btns/icon3.png');
             game.load.image('icon4','assets/btns/icon4.png');
             game.load.image('panel','assets/btns/panel.png');

             game.load.image('done','assets/btns/done.png');
             game.load.image('go','assets/btns/go.png');
             game.load.image('more','assets/btns/more.png');
             game.load.image('play','assets/btns/play.png');
             game.load.image('restart','assets/btns/restart.png');
             game.load.image('titlebg','assets/btns/titlebg.png');



          for(i=1;i<=6;i++)
             {
               game.load.image('annabackhair'+i, 'assets/annadressup/annabackhair'+i+'.png');
               game.load.image('annaearrrings'+i, 'assets/annadressup/annaearrrings'+i+'.png');
               game.load.image('annafronthair'+i, 'assets/annadressup/annafronthair'+i+'.png');
               game.load.image('annashoe'+i, 'assets/annadressup/annashoe'+i+'.png');
               game.load.image('annaearrrings_l'+i, 'assets/annadressup/annaearrrings_l'+i+'.png');


               }


               game.load.image('pop','assets/annadressup/pop.png');

               game.load.image('annadress1','assets/annadressup/annadress1.png');
               game.load.image('annadress2','assets/annadressup/annadress2.png');
               game.load.image('annadress3','assets/annadressup/annadress3.png');
               game.load.image('annadress4','assets/annadressup/annadress4.png');
               game.load.image('annadress5','assets/annadressup/annadress5.png');
               game.load.image('annadress6','assets/annadressup/annadress6.png');
               game.load.image('annadress7','assets/annadressup/annadress7.png');
               game.load.image('annabody','assets/annadressup/annabody.png');
               game.load.image('annahand','assets/annadressup/annahand.png');
               game.load.image('annahead','assets/annadressup/annahead.png');
               game.load.image('annabg','assets/annadressup/annabg.png');
               game.load.image('annahand1','assets/annadressup/annahand1.png');


               game.load.image('title1bg','assets/title/title1bg.jpg');
               game.load.image('titlebench','assets/title/titlebench.png');
               game.load.image('titlegirl2','assets/title/titlegirl2.png');
               game.load.image('i_b1','assets/intro/i_b1.png');
               game.load.image('i_b2','assets/intro/i_b2.png');
               game.load.image('i_b3','assets/intro/i_b3.png');
               game.load.image('titlebench2','assets/title/titlebench2.png');
               game.load.image('titletext','assets/title/titletext.png');

               // game.load.image('download','assets/title/download.png');
               game.load.image('downloadnew','assets/title/downloadnew.png');


             //tttttttttttttttttttt

             game.load.image('icon1','assets/btns/icon1.png');
             game.load.image('icon2','assets/btns/icon2.png');
             game.load.image('icon3','assets/btns/icon3.png');
             game.load.image('icon4','assets/btns/icon4.png');

             game.load.image('done','assets/btns/done.png');
             game.load.image('go','assets/btns/go.png');
             game.load.image('more','assets/btns/more.png');
             game.load.image('play','assets/btns/play.png');
             game.load.image('restart','assets/btns/restart.png');

             game.load.image('bg','assets/scene1/woodenbg.png');
             game.load.image('b_panel','assets/scene1/b_panel.png');
             game.load.image('spoon','assets/scene1/spoon.png');
             game.load.image('spoon_01','assets/scene1/spoon_01.png');
             game.load.image('b_1','assets/scene1/b_1.png');
             game.load.image('stand','assets/scene1/stand.png');
             game.load.image('window','assets/scene1/window.png');
             game.load.image('glasscup','assets/scene1/glasscup.png');


             game.load.image('b1','assets/scene1/b1.png');
             game.load.image('g1','assets/scene1/g1.png');
             game.load.image('o1','assets/scene1/o1.png');
             game.load.image('p1','assets/scene1/p1.png');
             game.load.image('r1','assets/scene1/r1.png');
             game.load.image('y1','assets/scene1/y1.png');

             game.load.image('b1_cap','assets/scene1/b1_cap.png');
             game.load.image('g1_cap','assets/scene1/g1_cap.png');
             game.load.image('o1_cap','assets/scene1/o1_cap.png');
             game.load.image('p1_cap','assets/scene1/p1_cap.png');
             game.load.image('r1_cap','assets/scene1/r1_cap.png');
             game.load.image('y1_cap','assets/scene1/y1_cap.png');
               game.load.image('glasscup_f1','assets/scene1/glasscup_f1.png');
             game.load.image('b_1','assets/scene1/b_1.png');


             game.load.spritesheet('b_animation','assets/scene1/b_animation.png',84,112,28);
             game.load.spritesheet('g_animation','assets/scene1/g_animation.png',90,121,29);
             game.load.spritesheet('o_animation','assets/scene1/o_animation.png',118,177,31);
             game.load.spritesheet('p_animation','assets/scene1/p_animation.png',87,106,31);
             game.load.spritesheet('r_animation','assets/scene1/r_animation.png',91,128,28);
             game.load.spritesheet('y_animation','assets/scene1/y_animation.png',103,140,30);

             game.load.spritesheet('blue_animation','assets/scene1/blue_animation.png',167,61,10);
             game.load.spritesheet('green_animation','assets/scene1/green_animation.png',167,30,11);
             game.load.spritesheet('orange_animation','assets/scene1/orange_animation.png',167,64,10);
             game.load.spritesheet('pink_animation','assets/scene1/pink_animation.png',167,50,11);
             game.load.spritesheet('red_animation','assets/scene1/red_animation.png',167,38,6);
             game.load.spritesheet('yellow_animation','assets/scene1/yellow_animation.png',167,63,10);
             game.load.spritesheet('stir_animation','assets/scene1/stir_animation.png',253,292,12);
             game.load.spritesheet('fall_animation','assets/scene1/fall_animation.png',273,328,23);
             game.load.spritesheet('fall_animation_1','assets/scene1/fall_animation_1.png',189,255,44);

             game.load.image('c_bg','assets/cooking/c_bg.png');
             game.load.image('b_001','assets/cooking/b_001.png');
             game.load.image('b_2','assets/cooking/b_2.png');
             game.load.image('boul_01','assets/cooking/boul_01.png');
             game.load.image('boul_02','assets/cooking/boul_02.png');
             game.load.image('boul_2','assets/cooking/boul_2.png');
             game.load.image('butter','assets/cooking/butter.png');
             game.load.image('cap','assets/cooking/cap.png');
             game.load.image('flour','assets/cooking/flour.png');
             game.load.image('salt','assets/cooking/salt.png');
             game.load.image('table','assets/cooking/table.png');
             game.load.image('v_bottle','assets/cooking/v_bottle.png');

             game.load.spritesheet('b_01','assets/cooking/b_01.png',180,188,10);
             game.load.spritesheet('butter_1','assets/cooking/butter_1.png',353,503,14);
             game.load.spritesheet('f_1','assets/cooking/f_1.png',156,117,10);
             game.load.spritesheet('flaour_1','assets/cooking/flaour_1.png',265,592,22);
             game.load.spritesheet('s_1','assets/cooking/s_1.png',140,118,10);
             game.load.spritesheet('salt_1','assets/cooking/salt_1.png',385,338,25);
             game.load.spritesheet('v_1','assets/cooking/v_1.png',228,80,9);
             game.load.spritesheet('venila_1','assets/cooking/venila_1.png',298,286,27);

             //sceene2

             game.load.image('back','assets/scene2/back.png');
             game.load.image('egg','assets/scene2/egg.png');
             game.load.image('eggstand1','assets/scene2/eggstand1.png');
             game.load.image('eggstand2','assets/scene2/eggstand2.png');
             game.load.image('front','assets/scene2/front.png');
             game.load.image('tool','assets/scene2/tool.png');
             game.load.image('filter','assets/scene2/filter.png');
           
             game.load.spritesheet('egg_broke1','assets/scene2/egg_broke1.png',267,255,36);
             game.load.spritesheet('egg_broke2','assets/scene2/egg_broke2.png',262,255,33);
             game.load.spritesheet('white_animation','assets/scene2/white_animation.png',162,97,12);
             game.load.spritesheet('white_animation_1','assets/scene2/white_animation_1.png',300,474,24);
             game.load.spritesheet('yellow01_animation','assets/scene2/yellow01_animation.png',173,98,13);

             game.load.image('backingsoda','assets/scene3/backingsoda.png');
             game.load.image('karandi','assets/scene3/karandi.png');
             game.load.image('milk','assets/scene3/milk.png');
             game.load.image('mixture','assets/scene3/mixture.png');
             game.load.image('Symbol_1','assets/scene3/Symbol 1.png');
             game.load.image('mixer','assets/scene3/mixer.png');

             game.load.spritesheet('milk_animation','assets/scene3/milk_animation.png',222,53,9);
             game.load.spritesheet('soda_animation','assets/scene3/soda_animation.png',219,84,9);
             game.load.spritesheet('milk01_animation','assets/scene3/milk01_animation.png',310,316,17);
             game.load.spritesheet('milk02_animation','assets/scene3/milk02_animation.png',502,360,6);
             game.load.spritesheet('baking_animation','assets/scene3/baking_animation.png',476,282,21);
             game.load.spritesheet('final_animation','assets/scene3/final_animation.png',254,362,34);

            
           
             game.load.image('batterboul','assets/scene4/batterboul.png');

             game.load.spritesheet('bo1_animation','assets/scene4/bo1_animation.png',189,108,10);
             game.load.spritesheet('bo2_animation','assets/scene4/bo2_animation.png',156,96,13);
             game.load.spritesheet('bo3_animation','assets/scene4/bo3_animation.png',153,88,10);
             game.load.spritesheet('bo01_animation','assets/scene4/bo01_animation.png',252,381,10);
             game.load.spritesheet('boo01_animation','assets/scene4/boo01_animation.png',440,392,13);
             game.load.spritesheet('booo01_animation','assets/scene4/booo01_animation.png',561,524,12);

             game.load.image('micro','assets/scene5/micro.png');
             game.load.image('micro2','assets/scene5/micro2.png');
             game.load.image('mirror','assets/scene5/mirror.png');
             game.load.image('microwave1','assets/scene5/microwave1.png');
             game.load.image('microwave2','assets/scene5/microwave2.png');
             game.load.image('microwave3','assets/scene5/microwave3.png');

               game.load.spritesheet('timer','assets/timer.png',160,160,60);

             game.load.spritesheet('cooking_animation','assets/scene5/cooking_animation.png',184,106,10);
             game.load.spritesheet('cooking001_animation','assets/scene5/cooking001_animation.png',126,78,13);
             game.load.spritesheet('cooking002_animation','assets/scene5/cooking002_animation.png',139,80,10);

             game.load.image('knife','assets/scene6/knife.png');
             game.load.image('pl_1','assets/scene6/pl_1.png');
             game.load.image('pl_2','assets/scene6/pl_2.png');
             game.load.image('pl_3','assets/scene6/pl_3.png');
             game.load.image('pl_cake1','assets/scene6/pl_cake1.png');
             game.load.image('pl_cake2','assets/scene6/pl_cake2.png');
             game.load.image('pl_cake3','assets/scene6/pl_cake3.png');
             game.load.image('scraber','assets/scene6/scraber.png');
             game.load.image('scraber','assets/scene6/scraber.png');
             game.load.image('sheet1','assets/scene6/sheet1.png');



             game.load.spritesheet('pl_cake1_animation','assets/scene6/pl_cake1_animation.png',373,209,15);
             game.load.spritesheet('pl_cake2_animation','assets/scene6/pl_cake2_animation.png',264,147,15);
             game.load.spritesheet('pl_cake3_animation','assets/scene6/pl_cake3_animation.png',271,244,21);
             game.load.spritesheet('sheet_animation1','assets/scene6/sheet_animation1.png',274,148,16);
             game.load.spritesheet('sheet_animation2','assets/scene6/sheet_animation2.png',194,105,16);
             game.load.spritesheet('sheet_animation3','assets/scene6/sheet_animation3.png',209,122,10);
             game.load.spritesheet('strips_animation1','assets/scene6/strips_animation1.png',624,359,11);
             game.load.spritesheet('strips_animation2','assets/scene6/strips_animation2.png',630,441,10);
             game.load.spritesheet('strips_animation3','assets/scene6/strips_animation3.png',631,567,7);

             game.load.image('stripsheet','assets/scene6/stripsheet.png');
             game.load.image('stripsheet1','assets/scene6/stripsheet1.png');
             game.load.image('stripsheet2','assets/scene6/stripsheet2.png');
             game.load.image('stripsheet3','assets/scene6/stripsheet3.png');
             game.load.image('stripsheet4','assets/scene6/stripsheet4.png');
             game.load.image('stripsheet5','assets/scene6/stripsheet5.png');
             game.load.image('stripsheet6','assets/scene6/stripsheet6.png');
             game.load.image('stripsheet7','assets/scene6/stripsheet7.png');
             game.load.image('stripsheet8','assets/scene6/stripsheet8.png');
             game.load.image('stripsheet9','assets/scene6/stripsheet9.png');
             game.load.image('stripsheet10','assets/scene6/stripsheet10.png');
             game.load.image('stripsheet11','assets/scene6/stripsheet11.png');
             game.load.image('stripsheet12','assets/scene6/stripsheet12.png');
             game.load.image('stripsheet13','assets/scene6/stripsheet13.png');
             game.load.image('stripsheet14','assets/scene6/stripsheet14.png');
             game.load.image('stripsheet15','assets/scene6/stripsheet15.png');
             game.load.image('stripsheet16','assets/scene6/stripsheet16.png');
             game.load.image('stripsheet17','assets/scene6/stripsheet17.png');
             game.load.image('stripsheet18','assets/scene6/stripsheet18.png');
             game.load.image('stripsheet19','assets/scene6/stripsheet19.png');
             game.load.image('stripsheet20','assets/scene6/stripsheet20.png');
             game.load.image('stripsheet21','assets/scene6/stripsheet21.png');
             game.load.image('stripsheet22','assets/scene6/stripsheet22.png');
             game.load.image('stripsheet23','assets/scene6/stripsheet23.png');
             game.load.image('stripsheet24','assets/scene6/stripsheet24.png');
             game.load.image('stripsheet25','assets/scene6/stripsheet25.png');
             game.load.image('stripsheet26','assets/scene6/stripsheet26.png');
             game.load.image('stripsheet27','assets/scene6/stripsheet27.png');
             game.load.image('stripsheet28','assets/scene6/stripsheet28.png');
             game.load.image('stripsheet29','assets/scene6/stripsheet29.png');
             game.load.image('stripsheet30','assets/scene6/stripsheet30.png');
             game.load.image('stripsheet31','assets/scene6/stripsheet31.png');
             game.load.image('stripsheet32','assets/scene6/stripsheet32.png');

             game.load.image('cake1','assets/alignment/cake1.png');
             game.load.image('cake2','assets/alignment/cake2.png');
             game.load.image('cake3','assets/alignment/cake3.png');
             game.load.image('stand1','assets/alignment/stand1.png');
             game.load.image('doll','assets/alignment/doll.png');
             game.load.image('strips','assets/alignment/strips.png');
             game.load.image('sprinkle','assets/alignment/sprinkle.png');

             game.load.spritesheet('doll_animation','assets/alignment/doll_animation.png',259,423,18);
             game.load.spritesheet('new_doll','assets/alignment/new_doll.png',314,436,20);


             game.load.spritesheet('arrow', 'assets/arrow.png',66,89,13);






             //cook1_assets	

             game.load.image('bg','assets/cook1/bg.png');
             game.load.image('bgtable','assets/cook1/bgtable.png');
             game.load.image('bowel','assets/cook1/bowel.png');
             game.load.image('butterbowel','assets/cook1/butterbowel.png');
             game.load.image('mavubowel','assets/cook1/mavubowel.png');
             game.load.image('oilbtl','assets/cook1/oilbtl.png');
             game.load.image('salt','assets/cook1/salt.png');

             game.load.spritesheet('bowelamtn','assets/cook1/bowelamtn.png',278,225,41);
             game.load.spritesheet('butteramtn','assets/cook1/butteramtn.png',317,242,9);
             game.load.spritesheet('mavubowelamtn','assets/cook1/mavubowelamtn.png',224,381,13);
             game.load.spritesheet('oilbtlamtn','assets/cook1/oilbtlamtn.png',264,284,21);
             game.load.spritesheet('saltamtn','assets/cook1/saltamtn.png',196,337,16);


             //makeup1_assets

             game.load.image('annabhair1','assets/makeup1/annabhair1.png');
             game.load.image('annafhair1','assets/makeup1/annafhair1.png');
             game.load.image('body1','assets/makeup1/body1.png');
             game.load.image('annacfdress1','assets/makeup1/annacfdress1.png');
             game.load.image('annaemtyface','assets/makeup1/annaemtyface.png');
             game.load.image('annafgr1','assets/makeup1/annafgr1.png');
             game.load.image('blush1','assets/makeup1/blush1.png');
             game.load.image('blushbox','assets/makeup1/blushbox.png');
             game.load.image('blushbrush','assets/makeup1/blushbrush.png');
             game.load.image('cfcap1','assets/makeup1/cfcap1.png');
             game.load.image('cfcap2','assets/makeup1/cfcap2.png');
             game.load.image('emtyeyeshade','assets/makeup1/emtyeyeshade.png');
             game.load.image('eye10001','assets/makeup1/eye10001.png');
             game.load.image('eye10002','assets/makeup1/eye10002.png');
             game.load.image('eyeblink1','assets/makeup1/eyeblink1.png');
             game.load.image('eyebrow10001','assets/makeup1/eyebrow10001.png');
             game.load.image('eyebrow10002','assets/makeup1/eyebrow10002.png');
             game.load.image('eyebrowpencil','assets/makeup1/eyebrowpencil.png');
             game.load.image('eyegrp','assets/makeup1/eyegrp.png');
             game.load.image('eyeshade1','assets/makeup1/eyeshade1.png');
             game.load.image('eyeshadowbox','assets/makeup1/eyeshadowbox.png');
             game.load.image('eyeshadowbrush','assets/makeup1/eyeshadowbrush.png');
             game.load.image('lip1','assets/makeup1/lip1.png');
             game.load.image('lip2','assets/makeup1/lip2.png');
             game.load.image('lipstick','assets/makeup1/lipstick.png');
             game.load.image('m1_panel','assets/makeup1/m1_panel.png');
             game.load.image('mbg','assets/makeup1/mbg.png');

             game.load.image('panel223','assets/makeup1/panel223.png');

             game.load.spritesheet('arrow', 'assets/arrow.png',66,89,13);

             game.load.spritesheet('perfumamtn1', 'assets/makeup1/perfumamtn1.png',119,136,16);


             //cleanface_assets

             game.load.image('f_girl','assets/title/f_girl.png');
             game.load.image('vervai','assets/cleanface/vervai.png');
             game.load.image('annahead2','assets/cleanface/annahead2.png');
             game.load.image('annahead3','assets/cleanface/annahead3.png');
             game.load.image('annahead4','assets/cleanface/annahead4.png');
             game.load.image('bublemask','assets/cleanface/bublemask.png');
             game.load.image('gmask','assets/cleanface/gmask.png');
             game.load.image('m2cbreash','assets/cleanface/m2cbreash.png');
             game.load.image('m2maskcream','assets/cleanface/m2maskcream.png');
             game.load.image('soef','assets/cleanface/soef.png');
             game.load.image('taval1','assets/cleanface/taval1.png');
             game.load.image('taval2','assets/cleanface/taval2.png');
             game.load.image('watermask','assets/cleanface/watermask.png');
             game.load.image('m1shawer10001','assets/cleanface/m1shawer10001.png');
             game.load.spritesheet('m1shawer10002','assets/cleanface/m1shawer10002.png',133,123,14);
             game.load.spritesheet('t_timer','assets/t_timer.png',160,160,60);

             //loons_assets

             game.load.image('h_hand','assets/loons/h_hand.png');
             game.load.image('comb','assets/loons/comb.png');
             game.load.image('hairdust','assets/loons/hairdust.png');
             game.load.spritesheet('loon1amtn','assets/loons/loon1amtn.png',288,147,22);
             game.load.spritesheet('loon2amtn','assets/loons/loon2amtn.png',273,114,22);
             game.load.spritesheet('loon3amtn','assets/loons/loon3amtn.png',274,114,22);
             game.load.spritesheet('airpumfamtn','assets/loons/airpumfamtn.png',182,32,10);

             //intro_2
             game.load.image('i_bg2','assets/intro/i_bg2.jpg');
             game.load.image('i_text','assets/intro/i_text.png');
             game.load.image('i_anna','assets/intro/i_anna.png');


            
             //LLLLL
             game.load.onFileComplete.add(this.fileLoadFunPre, this);
             
		  
   }, 
   fileLoadFunPre:function(progress, cacheKey, success, totalLoaded, totalFiles){
      this.progress.setText('LOADING: '+parseInt(progress)+'%');                      
         if (progress == 100) {
               this.progress.visible = false;
               game.load.onFileComplete.removeAll();
       /////////// //AAAAAAAAAAAAAAAAAAAAA

            // game.state.start('alignment');


            this.Go = game.add.sprite(game.world.width/2.05,game.world.height/1.65,'Go');
            this.Go.anchor.setTo(0.5);
            this.Go.scale.setTo(0);
            this.Go.inputEnabled = true;
            this.Go.input.useHandCursor = true;
            this.Go.events.onInputDown.add(function(){
                 if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               // Main.music.resume();
            };
               Main.music.play();

               game.state.start('title');


            },this);
               game.add.tween(this.Go.scale).to({x:1,y:1},800,Phaser.Easing.Bounce.Out,true); 

             
             
            }
   },
   openLink:function(){
     // YYGSDK.navigate("loading","logo");
   }
}
Main.title = function(){}

Main.title.prototype = {
    create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
        // this.levelGroup = game.add.group();
        // this.bg = game.add.sprite(0,0,'titlebg');
        // this.levelGroup.add(this.bg);



        this.titlegroup=game.add.group();

        this.title1bg=game.add.sprite(0,0,'title1bg'); 
        this.titlegroup.add(this.title1bg);




      this.g= game.add.group();

      this.annabackhair1=game.add.sprite(0,0,'annabackhair'+Main.annaarray[0]);
      this.g.add(this.annabackhair1);


      this.annabody=game.add.sprite(0,0,'annabody');
      this.g.add(this.annabody);

      this.annashoe1=game.add.sprite(0,0,'annashoe'+Main.annaarray[2]);
      this.g.add(this.annashoe1);


      this.annadress1=game.add.sprite(0,0,'annadress'+Main.annaarray[1]);
      this.g.add(this.annadress1);

      this.annahand=game.add.sprite(0,0,'annahand');
      this.g.add(this.annahand);



      this.annahead=game.add.sprite(0,0,'annahead');
      this.g.add(this.annahead);


      this.annafronthair1=game.add.sprite(0,0,'annafronthair'+Main.annaarray[0]);
      this.g.add(this.annafronthair1);     

      this.annahand1=game.add.sprite(0,0,'annahand1');
      this.g.add(this.annahand1);

      this.annaearrrings1=game.add.sprite(0,0,'annaearrrings'+Main.annaarray[3]);
      this.g.add(this.annaearrrings1);

      
     this.annaearrrings_l1=game.add.sprite(-78,14,'annaearrrings_l'+Main.annaarray[3]);
      this.g.add(this.annaearrrings_l1);
      this.annaearrrings_l1.alpha=0;

        this.g.x=-120;
         this.g.y=100;
         this.g.scale.setTo(0.8);






       if(Main.annaarray[0]==1){
        this.annaearrrings1.visible=true;
         this.annaearrrings_l1.visible=true;
       }
 if(Main.annaarray[0]==2){
        this.annaearrrings1.visible=false;
         this.annaearrrings_l1.visible=true;
       } 
       if(Main.annaarray[0]==3){
        this.annaearrrings1.visible=true;
         this.annaearrrings_l1.visible=false;
       }
        if(Main.annaarray[0]==4){
        this.annaearrrings1.visible=true;
         this.annaearrrings_l1.visible=true;
       }
   if(Main.annaarray[0]==5){
        this.annaearrrings1.visible=true;
         this.annaearrrings_l1.visible=true;
       } 

       if(Main.annaarray[0]==6){
        this.annaearrrings1.visible=true;
        this.annaearrrings_l1.visible=true;
       }


         
        this.up=game.add.group();

        this.titlebench2=game.add.sprite(252.20,680.35,'titlebench2'); 
        this.titlebench2.anchor.setTo(0.5);
        this.up.add(this.titlebench2);

        this.titlegirl2=game.add.sprite(247.65,384.45,'titlegirl2'); 
        this.titlegirl2.anchor.setTo(0.5);
        this.up.add(this.titlegirl2);

        this.titletext=game.add.sprite(253.00,565.15,'titletext'); 
        this.titletext.anchor.setTo(0.5);
        this.up.add(this.titletext);

        

        

         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'play');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
  // YYGSDK.navigate("menu","logo");
},
moreLink:function()
{
  // YYGSDK.navigate("menu","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
 MyShowAD('intro2');     
   },
}

Main.intro = function(){}

Main.intro.prototype = {
    create:function(){
      // this.levelGroup = game.add.group();
      // this.introbg = game.add.sprite(0,0,'introbg');
      // this.levelGroup.add(this.introbg);



        this.titlegroup=game.add.group();

        this.title1bg=game.add.sprite(0,0,'title1bg'); 
        this.titlegroup.add(this.title1bg);



        this.b1group=game.add.group();

        this.b1=game.add.sprite(125.00,224.20,'i_b1'); 
        this.b1.anchor.setTo(0.5);
        this.b1group.add(this.b1);

        this.b2group=game.add.group();




        this.b2=game.add.sprite(377.00,172.05,'i_b2');
        this.b2.anchor.setTo(0.5);
        this.b2group.add(this.b2);

        this.b3group=game.add.group();



        this.b3=game.add.sprite(252.00,519.15,'i_b3'); 
        this.b3.anchor.setTo(0.5);

        this.b3group.add(this.b3);



         this.morebtn = game.add.sprite(85,530,'more');
         this.morebtn.anchor.setTo(0.5);
         // this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,520,'go');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);

         
         this.b1group.x=-300;
         this.b2group.x=300;
         this.b3group.x=600;

        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          game.add.tween(this.b1group).to({x:0},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.b2group).to({x:0},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.b3group).to({x:0},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.playbtn.scale).to({x:1.0,y:1.0},400,Phaser.Easing.Bounce.Out,true);

        
        },this);
        },this);
         },this);
        },this);
        }
      
      
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
      
        
      },
startPopUp:function()
{
   game.add.tween(this.popup1.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp2, this);
},
bringPopUp2:function(){
   game.add.tween(this.popup1).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000);
   game.add.tween(this.popup2.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringPopUp3, this);
},
bringPopUp3:function(){
   game.add.tween(this.popup2).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000)
   game.add.tween(this.popup3.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
   },
bringBottons:function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   game.add.tween(this.playbtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
 // YYGSDK.navigate("game","logo");
},
moreLink:function(){
  // YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt)
{
          evt.kill();  
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
    MyShowAD('loons');    
         });
   
   },
}

//i222222222222222222222222
Main.intro2 = function(){}

Main.intro2.prototype = {
    create:function(){
      this.levelGroup = game.add.group();
      this.introbg = game.add.sprite(0,0,'i_bg2');
      this.levelGroup.add(this.introbg);

         this.morebtn = game.add.sprite(75.55,720,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);

         this.playbtn = game.add.sprite(431.4,720,'go');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.playbtn);
         

         this.popup1 = game.add.sprite(249.55,333.5,'i_text');
         this.popup1.anchor.setTo(0.5);
         this.popup1.scale.setTo(0);
         this.levelGroup.add(this.popup1);
         
         // this.popup2 = game.add.sprite(210,180,'popup2');
         // this.popup2.anchor.setTo(0.5);
         // this.popup2.scale.setTo(0);
         // this.levelGroup.add(this.popup2);
         
         // this.popup3 = game.add.sprite(220,150,'popup3');
         // this.popup3.anchor.setTo(0.5);
         // this.popup3.scale.setTo(0);
         // this.levelGroup.add(this.popup3);
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
      
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
      
        
      },
startPopUp:function()
{
   game.add.tween(this.popup1.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringBottons, this);
},
bringPopUp2:function(){
   game.add.tween(this.popup1).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000);
   game.add.tween(this.popup2.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringPopUp3, this);
},
bringPopUp3:function(){
   game.add.tween(this.popup2).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000)
   game.add.tween(this.popup3.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
   },
bringBottons:function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   game.add.tween(this.playbtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
 //YYGSDK.navigate("game","logo");
},
moreLink:function(){
 // YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt)
{
          evt.kill();  
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('intro');     
         });
   
   },
}

Main.menu = function(){}

Main.menu.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0,0,'introbg');
        this.levelGroup.add(this.introbg);
        
        
         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
 //  YYGSDK.navigate("game","logo");
},
moreLink:function()
{
 //  YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
    MyShowAD('elsescreen');  
         });
   
   },
}

//ssssss

Main.annadressup = function(){}

Main.annadressup.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        // this.introbg = game.add.sprite(0,0,'introbg');
        // this.levelGroup.add(this.introbg);

          this.d1_arr=[0,0,0,0];


      this.a= game.add.group();

      this.annabg=game.add.sprite(0,0,'annabg');
      this.a.add(this.annabg);





      this.g= game.add.group();

      this.annabackhair1=game.add.sprite(0,0,'annabackhair'+Main.annaarray[0]);
      this.g.add(this.annabackhair1);


      this.annabody=game.add.sprite(0,0,'annabody');
      this.g.add(this.annabody);

      this.annashoe1=game.add.sprite(0,0,'annashoe'+Main.annaarray[2]);
      this.g.add(this.annashoe1);


      this.annadress1=game.add.sprite(0,0,'annadress'+Main.annaarray[1]);
      this.g.add(this.annadress1);

      this.annahand=game.add.sprite(0,0,'annahand');
      this.g.add(this.annahand);

      this.annahead=game.add.sprite(0,0,'annahead');
      this.g.add(this.annahead);

      this.annafronthair1=game.add.sprite(0,0,'annafronthair'+Main.annaarray[0]);
      // this.annafronthair1=game.add.sprite(0,0,'annafronthair'+Main.annaarray[0]);
      this.g.add(this.annafronthair1);     

      this.annahand1=game.add.sprite(0,0,'annahand1');
      this.g.add(this.annahand1);

      this.annaearrrings1=game.add.sprite(0,0,'annaearrrings'+Main.annaarray[3]);
      this.g.add(this.annaearrrings1);
      this.annaearrrings1.alpha=0;


      this.annaearrrings_l1=game.add.sprite(-78,14,'annaearrrings_l'+Main.annaarray[3]);
      this.g.add(this.annaearrrings_l1);
      this.annaearrrings_l1.alpha=0;


      




        this.g.x=60;
         // this.g.y=200;
         // this.vincygroup.scale.setTo(0.7);




       this.i=game.add.group();
       this.i.x=-90;
       this.y=-10;


      this.panel=game.add.sprite(50,70,'panel');
      this.i.add(this.panel);
      this.panel.scale.setTo(0.8);


      this.count1=1
      this.icon4=game.add.sprite(150,140,'icon4');
      this.icon4.anchor.setTo(0.5);
      this.icon4.scale.setTo(1.0);
      this.i.add(this.icon4);
      this.icon4.inputEnabled=true;
      this.icon4.input.useHandCursor=true;
      this.icon4.events.onInputDown.add(function(){
      this.count1++
      this.annabackhair1.loadTexture('annabackhair'+this.count1);
      this.annafronthair1.loadTexture('annafronthair'+this.count1);
      
       Main.annaarray[0]=this.count1;

       if(Main.annaarray[0]==1){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=false;
       }
 if(Main.annaarray[0]==2){
       	this.annaearrrings1.visible=false;
       	 this.annaearrrings_l1.visible=true;
       } 
       if(Main.annaarray[0]==3){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }
        if(Main.annaarray[0]==4){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }
   if(Main.annaarray[0]==5){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       } if(Main.annaarray[0]==6){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }

       if(this.count1==6){
          this.count1=0;
        }
         this.d1_arr[0]=1;
                if(this.d1_arr.indexOf(0)<0){
          game.add.tween(this.playbtn.scale).to({x:0.9,y:0.9},400,Phaser.Easing.Bounce.Out,true);
                   }

                effectssd = game.add.sprite(330,150,'effectssd');
                effectssd.anchor.setTo(0.5);
                effectssd.animations.add('effectssd');
                effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
                  evt.destroy();
               },this);

          
          },this);



      this.count2=1
      this.icon1=game.add.sprite(110,210,'icon1');
      this.icon4.anchor.setTo(0.5);
      this.icon1.scale.setTo(1.0);

      this.i.add(this.icon1);
      this.icon1.inputEnabled=true;
      this.icon1.input.useHandCursor=true;
      this.icon1.events.onInputDown.add(function(){
      this.count2++
      this.annadress1.loadTexture('annadress'+this.count2);
      
       Main.annaarray[1]=this.count2;

       if(this.count2==6){
          this.count2=0;
        }
         this.d1_arr[1]=1;
                if(this.d1_arr.indexOf(0)<0){
          game.add.tween(this.playbtn.scale).to({x:0.9,y:0.9},400,Phaser.Easing.Bounce.Out,true);
                   }

                effectssd = game.add.sprite(330,380,'effectssd');
                effectssd.anchor.setTo(0.5);
                effectssd.animations.add('effectssd');
                effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
                  evt.destroy();
               },this);

          
          },this);



      this.count3=1
      this.icon2=game.add.sprite(150,350,'icon2');
      this.icon2.anchor.setTo(0.5);
      this.icon2.scale.setTo(1.0);

      this.i.add(this.icon2);
      this.icon2.inputEnabled=true;
      this.icon2.input.useHandCursor=true;
      this.icon2.events.onInputDown.add(function(){
      this.count3++
      this.annashoe1.loadTexture('annashoe'+this.count3);
      
       Main.annaarray[2]=this.count3;

       if(this.count3==6){
          this.count3=0;
        }
         this.d1_arr[2]=1;
                if(this.d1_arr.indexOf(0)<0){
          game.add.tween(this.playbtn.scale).to({x:0.9,y:0.9},400,Phaser.Easing.Bounce.Out,true);
                   }

                effectssd = game.add.sprite(330,700,'effectssd');
                effectssd.anchor.setTo(0.5);
                effectssd.animations.add('effectssd');
                effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
                  evt.destroy();
               },this);

          
          },this);



      this.count4=1
      this.icon3=game.add.sprite(150,460,'icon3');
      this.icon3.anchor.setTo(0.5);
      this.icon3.scale.setTo(1.0);

      this.i.add(this.icon3);
      this.icon3.inputEnabled=true;
      this.icon3.input.useHandCursor=true;
      this.icon3.events.onInputDown.add(function(){
      this.count4++
        this.annaearrrings1.alpha=1;

      this.annaearrrings_l1.alpha=1;
    
      this.annaearrrings1.loadTexture('annaearrrings'+this.count4);
      this.annaearrrings_l1.loadTexture('annaearrrings_l'+this.count4);

    
 
       Main.annaarray[3]=this.count4;

       if(Main.annaarray[0]==1){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=false;
       }
 if(Main.annaarray[0]==2){
       	this.annaearrrings1.visible=false;
       	 this.annaearrrings_l1.visible=true;
       } 
       if(Main.annaarray[0]==3){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }
        if(Main.annaarray[0]==4){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }
   if(Main.annaarray[0]==5){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       } if(Main.annaarray[0]==6){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }

       if(this.count4==6){
          this.count4=0;
        }
         this.d1_arr[3]=1;
                if(this.d1_arr.indexOf(0)<0){
          game.add.tween(this.playbtn.scale).to({x:0.9,y:0.9},400,Phaser.Easing.Bounce.Out,true);
                   }

                effectssd = game.add.sprite(330,150,'effectssd');
                effectssd.anchor.setTo(0.5);
                effectssd.animations.add('effectssd');
                effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
                  evt.destroy();
               },this);

          
          },this);



      

     
         this.morebtn = game.add.sprite(100,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.9);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'done');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         this.i.x=-500;
         this.g.x=500;
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          game.add.tween(this.g).to({x:0},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.i).to({x:-90},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

          },this);
          },this);
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
 // YYGSDK.navigate("game","logo");
},
moreLink:function()
{
  // YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
 MyShowAD('perfume_popup');
         });
   
   }, 
}

///////////// perfume_popup

Main.perfume_popup = function(){}

Main.perfume_popup.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        // this.introbg = game.add.sprite(0,0,'introbg');
        // this.levelGroup.add(this.introbg);

      this.a= game.add.group();

      this.annabg=game.add.sprite(0,0,'annabg');
      this.a.add(this.annabg);

      //  // this.i_anna=game.add.sprite(310,450,'i_anna');
     // // this.i_anna.anchor.setTo(0.5);
     // // this.i_anna.scale.setTo(0.9);


      this.g= game.add.group();

    
      this.annabackhair1=game.add.sprite(0,0,'annabackhair'+Main.annaarray[0]);
      this.g.add(this.annabackhair1);


      this.annabody=game.add.sprite(0,0,'annabody');
      this.g.add(this.annabody);

      this.annashoe1=game.add.sprite(0,0,'annashoe'+Main.annaarray[2]);
      this.g.add(this.annashoe1);


      this.annadress1=game.add.sprite(0,0,'annadress'+Main.annaarray[1]);
      this.g.add(this.annadress1);

      this.annahand=game.add.sprite(0,0,'annahand');
      this.g.add(this.annahand);

      this.annahead=game.add.sprite(0,0,'annahead');
      this.g.add(this.annahead);

      this.annafronthair1=game.add.sprite(0,0,'annafronthair'+Main.annaarray[0]);
      this.g.add(this.annafronthair1);     

      this.annahand1=game.add.sprite(0,0,'annahand1');
      this.g.add(this.annahand1);

      this.annaearrrings1=game.add.sprite(0,0,'annaearrrings'+Main.annaarray[3]);
      this.g.add(this.annaearrrings1);
      // this.annaearrrings1.alpha=0;


      this.annaearrrings_l1=game.add.sprite(-78,14,'annaearrrings_l'+Main.annaarray[3]);
      this.g.add(this.annaearrrings_l1);
      // this.annaearrrings_l1.alpha=0;

      this.pop=game.add.sprite(150,140,'pop');
      this.pop.anchor.setTo(0.5);
      this.pop.scale.setTo(0);

        this.g.x=70;
        this.g.y=100;
        this.g.scale.setTo(0.85);

         if(Main.annaarray[0]==1){
        this.annaearrrings1.visible=true;
         this.annaearrrings_l1.visible=false;
       }
 if(Main.annaarray[0]==2){
        this.annaearrrings1.visible=false;
         this.annaearrrings_l1.visible=true;
       } 
       if(Main.annaarray[0]==3){
        this.annaearrrings1.visible=true;
         this.annaearrrings_l1.visible=true;
       }
        if(Main.annaarray[0]==4){
        this.annaearrrings1.visible=true;
         this.annaearrrings_l1.visible=true;
       }
   if(Main.annaarray[0]==5){
        this.annaearrrings1.visible=true;
         this.annaearrrings_l1.visible=true;
       } if(Main.annaarray[0]==6){
        this.annaearrrings1.visible=true;
         this.annaearrrings_l1.visible=true;
       }
         
      
     
         this.morebtn = game.add.sprite(100,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.9);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'done');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         // this.i.x=-500;
         // this.g.x=500;
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

          game.add.tween(this.pop.scale).to({x:0.9,y:0.9},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

          game.add.tween(this.pop.scale).to({x:0,y:0},1000,Phaser.Easing.Quadratic.Out,true,3500).onComplete.add(function(){
          game.add.tween(this.playbtn.scale).to({x:0.9,y:0.9},700,Phaser.Easing.Quadratic.Out,true);
         
         },this);
         },this);
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
  //YYGSDK.navigate("game","logo");
},
moreLink:function()
{
  // YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
  MyShowAD('scene1');
         });
   
   },
}

//////perfum_spray

Main.perfum_spray = function(){}

Main.perfum_spray.prototype = {
    create:function(){
           this.rxrdrag=false;
        


      this.a= game.add.group();

      this.annabg=game.add.sprite(0,0,'annabg');
      this.a.add(this.annabg);



      this.g= game.add.group();

      this.annabackhair1=game.add.sprite(0,0,'annabackhair'+Main.annaarray[0]);
      this.g.add(this.annabackhair1);


      this.annabody=game.add.sprite(0,0,'annabody');
      this.g.add(this.annabody);

      this.annashoe1=game.add.sprite(0,0,'annashoe'+Main.annaarray[2]);
      this.g.add(this.annashoe1);


      this.annadress1=game.add.sprite(0,0,'annadress'+Main.annaarray[1]);
      this.g.add(this.annadress1);

      this.annahand=game.add.sprite(0,0,'annahand');
      this.g.add(this.annahand);



      this.annahead=game.add.sprite(0,0,'annahead');
      this.g.add(this.annahead);


      this.annafronthair1=game.add.sprite(0,0,'annafronthair'+Main.annaarray[0]);
      this.g.add(this.annafronthair1);     

      this.annahand1=game.add.sprite(0,0,'annahand1');
      this.g.add(this.annahand1);

      this.annaearrrings1=game.add.sprite(0,0,'annaearrrings'+Main.annaarray[3]);
      this.g.add(this.annaearrrings1);

      
     this.annaearrrings_l1=game.add.sprite(-78,14,'annaearrrings_l'+Main.annaarray[3]);
      this.g.add(this.annaearrrings_l1);


         this.g.y=70;
         this.g.scale.setTo(0.9);

         this.panelpergrp=game.add.group();
         this.panelpergrp.x=600;

        this.perfumamtn12=game.add.sprite(280,310,'perfumamtn1');
        this.perfumamtn12.anchor.setTo(0.5);
        this.perfumamtn12.scale.setTo(0.5);
        this.perfumamtn12.visible=false;
        this.panelpergrp.add(this.perfumamtn12);

        this.perfumamtn13=game.add.sprite(188,300,'perfumamtn1');
        this.perfumamtn13.anchor.setTo(0.5);
        this.perfumamtn13.scale.setTo(0.5);
        this.perfumamtn13.scale.x*=-1;
        this.perfumamtn13.visible=false;
        this.panelpergrp.add(this.perfumamtn13);

         this.panel223=game.add.sprite(450,500,'panel223');
         this.panel223.anchor.setTo(0.5);
         this.panel223.scale.setTo(0.6);
        this.panelpergrp.add(this.panel223);

       

        this.perfumamtn1=game.add.sprite(400,570,'perfumamtn1');
        this.perfumamtn1.anchor.setTo(0.5);
        this.perfumamtn1.scale.setTo(0.7);
        // this.perfumamtn1.inputEnabled=true;
        // this.perfumamtn1.input.useHandCursor=true;
        // this.perfumamtn1.input.pixelPerfectClick=true;
        // this.perfumamtn1.input.pixelPerfectOver=true;
        this.perfumamtn1.events.onInputDown.add(function(){
         	        this.arrow1.visible=false;
         	        this.arrow2.visible=true;

        this.perfumamtn1.inputEnabled=false;
           this.rxrdrag=true;
            this.rock.inputEnabled=true;
        this.rock.input.useHandCursor=true;
        },this);
        this.panelpergrp.add(this.perfumamtn1);

        this.rockcnt1=0;
        this.rock = game.add.graphics(135,230);
        this.rock.beginFill(0x666666,0);
        this.rock.drawRect(0,0,200,240);
        // this.rock.inputEnabled=true;
        // this.rock.input.useHandCursor=true;
        this.rock.events.onInputDown.add(function(){
        this.rockcnt1++

        if (this.rockcnt1==1) {
         	        this.arrow2.visible=false;

        this.rock.inputEnabled=false;
        this.perfumamtn1.visible=false;
        this.perfumamtn12.visible=true;
        this.perfumamtn12.animations.add('perfumamtn12',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
        this.perfumamtn12.animations.play('perfumamtn12',10,false).onComplete.add(function(){
        this.perfumamtn12.visible=false;
        this.perfumamtn1.visible=true;
        this.rock.inputEnabled=true;
         	        this.arrow3.visible=true;
        },this);
        }

        if (this.rockcnt1==2) {
         	        this.arrow3.visible=false;
        this.perfumamtn1.visible=false;
        this.perfumamtn13.visible=true;
        this.perfumamtn13.animations.add('perfumamtn12',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
        this.perfumamtn13.animations.play('perfumamtn12',10,false).onComplete.add(function(){
        this.perfumamtn13.visible=false;
        this.rock.inputEnabled=false;
           this.rxrdrag=false;
        this.perfumamtn1.visible=true;
        game.add.tween(this.perfumamtn1).to({x:400,y:570},700,Phaser.Easing.Quadratic.Out,true);
        game.add.tween(this.panelpergrp).to({x:600},700,Phaser.Easing.Quadratic.Out,true,2500).onComplete.add(function(){
        game.add.tween(this.playbtn.scale).to({x:0.9,y:0.9},700,Phaser.Easing.Quadratic.Out,true);

        },this);

        },this);
       }

        },this);






      if(Main.annaarray[0]==1){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=false;
       }
 if(Main.annaarray[0]==2){
       	this.annaearrrings1.visible=false;
       	 this.annaearrrings_l1.visible=true;
       } 
       if(Main.annaarray[0]==3){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }
        if(Main.annaarray[0]==4){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }
   if(Main.annaarray[0]==5){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       } if(Main.annaarray[0]==6){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      this.arrowgp = game.add.group();

         var arro2x = [420,330,160,37,459,41,449,410];
         var arro2y = [470,270,260,298,291,458,438,610];

         for(i=1;i<=8;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',15,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;

          }
           if(i==2){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=1.5;
          }

             if(i==3){
          this['arrow'+i].visible=false;
           this['arrow'+i].rotation=-1.5;
       }
          this.arrowgp.add(this['arrow'+i]);
          
         }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
    
         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.9);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'done');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
    
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.panelpergrp).to({x:0},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         	        
         	        this.arrow1.visible=true;
         	         this.perfumamtn1.inputEnabled=true;
                     this.perfumamtn1.input.useHandCursor=true;
                     this.perfumamtn1.input.pixelPerfectClick=true;
                     this.perfumamtn1.input.pixelPerfectOver=true;
         },this);
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
   update:function(){
             // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
        if(this.rxrdrag) {

              this.perfumamtn1.x = game.input.activePointer.x;
              this.perfumamtn1.y = game.input.activePointer.y+50;
           }
        },

// thumbLink:function()
// {
//    CreateLinksInGame("Anna-S-Unfavorable-Chef-Day","gameover","thumb",RelatedGames[this.randomId]['id']);
// },       
openLink:function()
{
  //YYGSDK.navigate("game","logo");
},
moreLink:function()
{
  // YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
     MyShowAD('final_screen');
         });
   
   },
}



// ffffffffff

Main.final_screen = function(){}

Main.final_screen.prototype = {
    create:function(){
        // this.levelGroup = game.add.group();
        // this.introbg = game.add.sprite(0,0,'introbg');
        // this.levelGroup.add(this.introbg);


      this.a= game.add.group();

      this.annabg=game.add.sprite(0,0,'annabg');
      this.a.add(this.annabg);



      this.g= game.add.group();

      this.annabackhair1=game.add.sprite(0,0,'annabackhair'+Main.annaarray[0]);
      this.g.add(this.annabackhair1);


      this.annabody=game.add.sprite(0,0,'annabody');
      this.g.add(this.annabody);

      this.annashoe1=game.add.sprite(0,0,'annashoe'+Main.annaarray[2]);
      this.g.add(this.annashoe1);


      this.annadress1=game.add.sprite(0,0,'annadress'+Main.annaarray[1]);
      this.g.add(this.annadress1);

      this.annahand=game.add.sprite(0,0,'annahand');
      this.g.add(this.annahand);



      this.annahead=game.add.sprite(0,0,'annahead');
      this.g.add(this.annahead);


      this.annafronthair1=game.add.sprite(0,0,'annafronthair'+Main.annaarray[0]);
      this.g.add(this.annafronthair1);     

      this.annahand1=game.add.sprite(0,0,'annahand1');
      this.g.add(this.annahand1);

      this.annaearrrings1=game.add.sprite(0,0,'annaearrrings'+Main.annaarray[3]);
      this.g.add(this.annaearrrings1);

      
     this.annaearrrings_l1=game.add.sprite(-78,14,'annaearrrings_l'+Main.annaarray[3]);
      this.g.add(this.annaearrrings_l1);


        this.g.x=-130;
         this.g.y=80;
         this.g.scale.setTo(0.9);






      if(Main.annaarray[0]==1){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=false;
       }
 if(Main.annaarray[0]==2){
       	this.annaearrrings1.visible=false;
       	 this.annaearrrings_l1.visible=true;
       } 
       if(Main.annaarray[0]==3){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }
        if(Main.annaarray[0]==4){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }
   if(Main.annaarray[0]==5){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       } if(Main.annaarray[0]==6){
       	this.annaearrrings1.visible=true;
       	 this.annaearrrings_l1.visible=true;
       }


        this.f_girl=game.add.sprite(385,430.35,'f_girl'); 
        this.f_girl.anchor.setTo(0.5);
        this.f_girl.scale.setTo(0.98);


        this.titlebench2=game.add.sprite(262.20,680.35,'titlebench2'); 
        this.titlebench2.anchor.setTo(0.5);
        

        this.titlegirl2=game.add.sprite(250.65,384.45,'titlegirl2'); 
        this.titlegirl2.anchor.setTo(0.5);
        this.titlegirl2.scale.setTo(0.8);
     
        
      




        
        
         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.9);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'restart');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
            this.thumbGroup=game.add.group();
           /* game.load.crossOrigin='*';
            this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
            this.thumbVar = game.add.sprite(167, 652, 'thumb_'+this.randomId);
            this.thumbVar.inputEnabled = true
            this.thumbVar.input.useHandCursor = true;
            this.thumbVar.events.onInputUp.add(this.thumbLink, this);
            this.thumbframeVar = game.add.sprite(165, 650, 'Tump_frame'); 
            this.thumbVar.height=this.thumbframeVar.height-2;
            this.thumbVar.width=this.thumbframeVar.width-2;
            this.thumbGroup.add(this.thumbVar);
            this.thumbGroup.add(this.thumbframeVar);
            this.thumbGroup.y=150;*/
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         // game.add.tween(this.thumbGroup).to({y:0},700,Phaser.Easing.Quadratic.Out,true);
          game.add.tween(this.playbtn.scale).to({x:0.9,y:0.9},700,Phaser.Easing.Quadratic.Out,true);
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
thumbLink:function()
{
  //YYGSDK.navigate("gameover","thumb",RelatedGames[this.randomId]['id']);
},       
openLink:function()
{
  // YYGSDK.navigate("gameover","logo");
},
moreLink:function()
{
  //YYGSDK.navigate("gameover","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   	 Main.annaarray=[1,1,1,1];
   Main.makeup1_array=[1,1,1,1,1];

    MyShowAD('intro2');
         });
   
   },
}

function MyShowAD(state){
  Main.music.pause();
  game.state.start(state);
  Main.music.resume();
  //YYGSDK.adsManager.request(YYG.TYPE.INTERSTITIAL,YYG.EventHandler.create(this,()=>{game.state.start(state);Main.music.resume();}),YYG.EventHandler.create(this,()=>{game.state.start(state);Main.music.resume();})); 
}





//ssssss

Main.scene1 = function(){}

Main.scene1.prototype = {
    create:function(){
        this.levelGroup = game.add.group();

        this.bg = game.add.sprite(254.5,400,'bg');
        this.bg.anchor.setTo(0.5);

        this.b_panel = game.add.sprite(254.5,655.5,'b_panel');
        this.b_panel.anchor.setTo(0.5);


        this.window = game.add.sprite(258,312,'window');
        this.window.anchor.setTo(0.5);


       
        this.stand = game.add.sprite(260.55,655.9,'stand');
        this.stand.anchor.setTo(0.5);

        this.glasscup = game.add.sprite(270,570,'glasscup');
        this.glasscup.anchor.setTo(0.5);





        this.green_animation = game.add.sprite(255,600,'green_animation');
        this.green_animation.anchor.setTo(0.5);
        this.green_animation.visible=false;

       
        this.red_animation = game.add.sprite(258,600,'red_animation');
        this.red_animation.anchor.setTo(0.5);
        this.red_animation.visible=false;

      
        this.pink_animation = game.add.sprite(258,590,'pink_animation');
        this.pink_animation.anchor.setTo(0.5);
        this.pink_animation.visible =false;


        this.blue_animation = game.add.sprite(258,590,'blue_animation');
        this.blue_animation.anchor.setTo(0.5);
        this.blue_animation.visible =false;  


        this.yellow_animation = game.add.sprite(258,590,'yellow_animation');
        this.yellow_animation.anchor.setTo(0.5);
        this.yellow_animation.visible =false;

        this.orange_animation = game.add.sprite(258,590,'orange_animation');
        this.orange_animation.anchor.setTo(0.5);
        this.orange_animation.visible =false;

       this.stir_animation = game.add.sprite(280,490,'stir_animation');
       this.stir_animation.anchor.setTo(0.5);
       this.stir_animation.scale.setTo(0.95);
       this.stir_animation.visible=false;


      


        this.glasscup_f1 = game.add.sprite(257,580,'glasscup_f1');
        this.glasscup_f1.anchor.setTo(0.5);



         this.fall_animation = game.add.sprite(235,500,'fall_animation');
         this.fall_animation.anchor.setTo(0.5);
         this.fall_animation.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;
          this.arrow2.x = 110;
          this.arrow2.y = 550;

        },this);
          this.fall_animation.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>34&& game.input.activePointer.x<446&& game.input.activePointer.y>299 && game.input.activePointer.y<770)){  
    
       this.arrow2.visible = false;
        this.fall_animation.x=230;
        this.fall_animation.y=440;
         
        this.fall_animation.animations.add('fall_animation');
        this.fall_animation.animations.play('fall_animation',10,false)

        game.time.events.add(700,function(){
         this.fall_animation_1.animations.add('fall_animation_1',[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
        this.fall_animation_1.animations.play('fall_animation_1',7,false).onComplete.add(function(){
        this.fall_animation.x=235;
        this.fall_animation.y=500;

      
         
        },this);
        },this);


   }else{
      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.p1).to({x:168.3,y:291.45},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);

        this.fall_animation.visible = false;

        this.spoon_drag =false;

        this.rect_05 = game.add.graphics(190,500);
        this.rect_05.beginFill(0x666666,0);    
        this.rect_05.drawRect(0,0,130,130);
          this.rect_05.events.onInputDown.add(function(){
            this.rect_05.inputEnabled =false;
        	this.arrow2.visible =false;
        	this.spoon_1.loadTexture('spoon_01');
        	this.spoo_1_drag= true;
        	this.rect_01.inputEnabled = true;

        },this);

      
        this.fall_animation_1 = game.add.sprite(118,550,'fall_animation_1');
        this.fall_animation_1.anchor.setTo(0.5);
        this.fall_animation_1.frame=4;




        this.rect_01 = game.add.graphics(70,575);
        this.rect_01.beginFill(0x666666,0);
        this.rect_01.drawRect(0,0,70,100);
        this.rect_01.events.onInputDown.add(function(){
        this.rect_01.inputEnabled =false;
        this.spoo_1_drag=false;  
        this.arrow2.kill();
        this.arrow1.kill();
        this.arrow3.kill();
        this.arrow4.kill();
        this.arrow5.kill();
        this.arrow6.kill();
        this.arrow7.kill();
        this.spoon_1.visible =false;  
        this.fall_animation_1.animations.add('fall_animation_1',[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
        this.fall_animation_1.animations.play('fall_animation_1',10,false).onComplete.add(function(){
       // this.glasscup.visible =true;
       // this.glasscup_f1.visible =true;
       // this.fall_animation.visible =false;
      
      game.add.tween(this.playbtn.scale).to({x:1,y:1},700,Phaser.Easing.Quadratic.Out,true,700);
        },this);


        },this);
       
        this.p1 = game.add.sprite(168.3,310,'p1');
        this.p1.anchor.setTo(0.5);
        this.p1.events.onInputDown.add(function(){
           game.world.bringToTop(this.p1)
          this.arrow4.visible = false;
          this.arrow2.visible = true;
          this.p1_cap.visible = false;

        },this);

       this.p1.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>120&& game.input.activePointer.x<490&& game.input.activePointer.y>434 && game.input.activePointer.y<648)){  
    
         this.p1.visible = false;

            this.arrow2.visible = false;
         
         this.p_animation.visible = true;
        

        this.p_animation.animations.add('p_animation');
        this.p_animation.animations.play('p_animation',10,false)

        game.time.events.add(200,function(){
           this.pink_animation.visible = true;

         this.pink_animation.animations.add('pink_animation',[33333333,44444444,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);
         this.pink_animation.animations.play('pink_animation',10,false).onComplete.add(function(){
          this.p_animation.visible = false;
          this.b1.inputEnabled = true;
          this.b1.input.useHandCursor = true;
          this.b1.input.enableDrag();
          this.arrow5.visible = true
          this.arrow5.scale.setTo(0.8);

        },this);

        },this);


   }else{

      this.arrow4.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.p1).to({x:168.3,y:310},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);


      

        this.p1_cap = game.add.sprite(170,255,'p1_cap');
        this.p1_cap.anchor.setTo(0.5);
        this.p1_cap.scale.setTo(0.8);

       

       this.b1 = game.add.sprite(346.65,315,'b1');
        this.b1.anchor.setTo(0.5);
        this.b1.events.onInputDown.add(function(){
           game.world.bringToTop(this.b1)
          this.arrow5.visible = false;
          this.arrow2.visible= true;
          this.b1_cap.visible = false;

        },this);

        this.b1.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>114&& game.input.activePointer.x<490&& game.input.activePointer.y>434 && game.input.activePointer.y<648)){  
    

         this.b1.visible = false;

            this.arrow2.visible = false;
         
         this.b_animation.visible = true;
         this.blue_animation.visible = true;


        this.b_animation.animations.add('b_animation');
        this.b_animation.animations.play('b_animation',10,false)

         this.blue_animation.animations.add('blue_animation');
        this.blue_animation.animations.play('blue_animation',10,false).onComplete.add(function(){
          this.b_animation.visible = false;
          this.y1.inputEnabled = true;
          this.y1.input.useHandCursor = true;
          this.y1.input.enableDrag();
          this.arrow6.visible = true;
          this.arrow6.scale.setTo(0.8);

        },this);

   }else{

      this.arrow5.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.b1).to({x:346.65,y:315},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);

        this.b1_cap = game.add.sprite(345.65,265,'b1_cap');
        this.b1_cap.anchor.setTo(0.5);        

        this.y1 = game.add.sprite(164.65,500,'y1');
        this.y1.anchor.setTo(0.5);
        this.y1.events.onInputDown.add(function(){
           game.world.bringToTop(this.y1)
          this.arrow6.visible = false;
          this.arrow2.visible = true;
          this.y1_cap.visible = false;

        },this);

          this.y1.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>171&& game.input.activePointer.x<359&& game.input.activePointer.y>434 && game.input.activePointer.y<648)){  
    
         this.y1.visible = false;

            this.arrow2.visible = false;
         
         this.y_animation.visible = true;
         this.yellow_animation.visible = true;


        this.y_animation.animations.add('y_animation');
        this.y_animation.animations.play('y_animation',10,false)

         this.yellow_animation.animations.add('yellow_animation');
         this.yellow_animation.animations.play('yellow_animation',10,false).onComplete.add(function(){
          this.y_animation.visible = false;
          this.o1.inputEnabled = true;
          this.o1.input.useHandCursor = true;
          this.o1.input.enableDrag();
          this.arrow7.visible = true;
          this.arrow7.scale.setTo(0.8);

        },this);

   }else{

      this.arrow6.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.y1).to({x:164.65,y:500},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);

       

        this.y1_cap = game.add.sprite(164.95,435,'y1_cap');
        this.y1_cap.anchor.setTo(0.5);

         
        this.g1 = game.add.sprite(173.65,185,'g1');
        this.g1.anchor.setTo(0.5);
       this.g1.events.onInputDown.add(function(){
          game.world.bringToTop(this.g1)
          this.arrow1.visible = false;
          this.arrow2.visible = true;
          this.arrow2.scale.setTo(0.8);
          this.g1_cap.visible = false;

        },this);


       this.g1.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>120&& game.input.activePointer.x<490&& game.input.activePointer.y>434&& game.input.activePointer.y<648)){  
     
         this.g1.visible = false;

            this.arrow2.visible = false;
         
         this.g_animation.visible = true;
         this.green_animation.visible = true;


        this.g_animation.animations.add('g_animation');
        this.g_animation.animations.play('g_animation',10,false)

         this.green_animation.animations.add('green_animation');
         this.green_animation.animations.play('green_animation',10,false).onComplete.add(function(){
          this.g_animation.visible = false;
          this.r1.inputEnabled = true;
          this.r1.input.useHandCursor = true;
          this.r1.input.enableDrag();
          this.arrow3.visible = true
          this.arrow3.scale.setTo(0.8);
          // this.arrow3.visible = true

        },this);

   }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.g1).to({x:173.65,y:185},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);



        this.g1_cap = game.add.sprite(174.85,126,'g1_cap');
        this.g1_cap.anchor.setTo(0.5);
       
      
         this.r1 = game.add.sprite(351.05,185,'r1');
        this.r1.anchor.setTo(0.5);
        this.r1.events.onInputDown.add(function(){
           game.world.bringToTop(this.r1)
          this.arrow3.visible = false;
          this.arrow2.visible = true;
          this.r1_cap.visible= false; 

        },this);


       this.r1.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>120&& game.input.activePointer.x<492&& game.input.activePointer.y>434 && game.input.activePointer.y<648)){  
    
         this.r1.visible = false;

            this.arrow2.visible = false;
         
         this.r_animation.visible = true;
         this.red_animation.visible = true;


        this.r_animation.animations.add('r_animation',[0,1,2,3,4,5,6,7,8,9]);
        this.r_animation.animations.play('r_animation',10,false)

         this.red_animation.animations.add('red_animation');
        this.red_animation.animations.play('red_animation',10,false).onComplete.add(function(){
         this.r_animation.visible = false;
         this.p1.inputEnabled = true;
         this.p1.input.useHandCursor = true;
         this.p1.input.enableDrag();
         this.arrow4.visible = true;
         this.arrow4.scale.setTo(0.8);
         this.arrow4.x = 105;
         this.arrow4.y = 284;
        },this);

   }else{

      this.arrow3.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.r1).to({x:351.05,y:185},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);


        this.r1_cap = game.add.sprite(351.2,123.65,'r1_cap');
        this.r1_cap.anchor.setTo(0.5);


        this.o1 = game.add.sprite(355,500,'o1');
        this.o1.anchor.setTo(0.5);
        this.o1.events.onInputDown.add(function(){
           game.world.bringToTop(this.o1)
          this.arrow7.visible = false;
          this.arrow2.visible = true;
          this.o1_cap.visible = false;


        },this);

      this.o1.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>171&& game.input.activePointer.x<359&& game.input.activePointer.y>434 && game.input.activePointer.y<648)){  
    
         this.o1.visible = false;

            this.arrow2.visible = false;
         
         this.o_animation.visible = true;
         this.orange_animation.visible = true;


        this.o_animation.animations.add('o_animation');
        this.o_animation.animations.play('o_animation',10,false)

         this.orange_animation.animations.add('orange_animation',[0,1,2,3,4,5,6,7,8]);
         this.orange_animation.animations.play('orange_animation',10,false).onComplete.add(function(){
          this.o_animation.visible = false;
          this.arrow8.visible = true;
          this.arrow8.scale.setTo(0.8);
          this.spoon.inputEnabled = true;
          this.spoon.input.useHandCursor = true;
          this.spoon.input.enableDrag();



        },this);

   }else{

      this.arrow7.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.o1).to({x:355,y:500},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);

        
        this.o1_cap = game.add.sprite(355,427,'o1_cap');
        this.o1_cap.anchor.setTo(0.5);

    
        this.spoon = game.add.sprite(415,630,'spoon');
        this.spoon.anchor.setTo(0.5);
        this.spoon.scale.setTo(0.8);
        this.spoon.events.onInputDown.add(function(){
          this.arrow8.visible = false;
          this.arrow2.visible = true;

        },this);

      this.spoon.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>120&& game.input.activePointer.x<490&& game.input.activePointer.y>434 && game.input.activePointer.y<648)){  
    this.arrow2.visible =false;
         this.spoon.visible = false;

            this.arrow2.visible = false;
         
         this.stir_animation.visible = true;
        
        this.stir_animation.animations.add('stir_animation');
        this.stir_animation.animations.play('stir_animation',10,false).onComplete.add(function(){
          this.glasscup.visible =false;
          this.green_animation.visible = false;
          this.red_animation.visible = false;
          this.pink_animation.visible = false;
           this.blue_animation.visible = false;
           this.yellow_animation.visible = false;
           this.orange_animation.visible = false;
           this.stir_animation .visible = false;
           this.glasscup_f1.visible = false;
        
          this.fall_animation.visible =true;
          this.spoon_1.visible = true;
          this.arrow1.visible = true;
          this.arrow1.angle = 0;
          this.arrow1.x = 378;
          this.arrow1.y = 673;
          this.spoon_1.inputEnabled = true;
          this.spoon_1.input.useHandCursor = true;
          this.spoon_1.input.enableDrag();
        
         },this);

        }else{

      this.arrow8.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.spoon).to({x:415,y:630},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
         },this);
         }
         },this);

       // this.spoondrag =false;


         // this.mcir_011 = game.add.graphics(0,0);
         // this.mcir_011.beginFill(0x666666,1);
         // this.mcir_011.drawCircle(0,0,70,70);

        this.spoon_1 = game.add.sprite(415,630,'spoon');
        this.spoon_1.anchor.setTo(0.5);
        this.spoon_1.scale.setTo(0.8);
        this.spoon_1.events.onInputDown.add(function(){
          this.spoon_1.inputEnabled =false;
        this.arrow1.visible =false;
        this.arrow2.visible = true;
        this.arrow2.x = 252;
        this.arrow2.y = 486;
        this.rect_05.inputEnabled = true;
        this.spoo_1_drag = true;
 
        },this);
        this.spoon_1.visible =false;

        this.spoo_1_drag =false;

        
        this.p_animation = game.add.sprite(309,495,'p_animation');
        this.p_animation.anchor.setTo(0.5);
        this.p_animation.visible=false;

        this.b_animation = game.add.sprite(309,480,'b_animation');
        this.b_animation.anchor.setTo(0.5);
        this.b_animation.visible=false;

        this.y_animation = game.add.sprite(309,480,'y_animation');
        this.y_animation.anchor.setTo(0.5);
        this.y_animation.visible=false;

        this.g_animation = game.add.sprite(309,490,'g_animation');
        this.g_animation.anchor.setTo(0.5);
        this.g_animation.visible = false;

        this.r_animation = game.add.sprite(309,485,'r_animation');
        this.r_animation.anchor.setTo(0.5);
        this.r_animation.visible = false;

        this.o_animation = game.add.sprite(309,470,'o_animation');
        this.o_animation.anchor.setTo(0.5);
        this.o_animation.visible=false;
    

       this.arrowgp = game.add.group();

         var arro2x = [37,256,430,37,459,41,449,410];
         var arro2y = [155,469,165,298,291,458,438,610];

         for(i=1;i<=8;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',15,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          this.arrow1.angle=-90;

          }
           if(i==2){
          this['arrow'+i].visible=false;
          }if(i==3){
          this['arrow'+i].visible=false;
          this.arrow3.angle =90;
          }if(i==4){
          this['arrow'+i].visible=false;
           this.arrow4.angle=-90;

          }if(i==5){
          this['arrow'+i].visible=false;
          this.arrow5.angle =90;
          }if(i==6){
          this['arrow'+i].visible=false;
          this.arrow6.angle =-90;
          }if(i==7){
          this['arrow'+i].visible=false;
          this.arrow7.angle =90;
          }
          if(i==8){
          this['arrow'+i].visible=false;
        }
          this.arrowgp.add(this['arrow'+i]);
          
         }

        
         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'done');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        this.arrow1.visible = true;
        this.arrow1.x = 124;
        this.arrow1.y = 162;
        this.arrow1.scale.setTo(0.8);
        this.arrow1.angle = -90;
         this.g1.inputEnabled = true;
        this.g1.input.useHandCursor = true;
        this.g1.input.enableDrag();
          
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            },

          update:function(){
             // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
         if(this.spoo_1_drag){
            this.spoon_1.x=game.input.activePointer.x+25;
            this.spoon_1.y=game.input.activePointer.y-95;  
         
         }  if(this.dummydrag){
            this.dummyobject.x=game.input.activePointer.x;
            this.dummyobject.y=game.input.activePointer.y;
         }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   // YYGSDK.navigate("game","logo");
},
moreLink:function()
{
 //  YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('perfum_spray');
         });
   
   },
}

//22222

Main.scene2 = function(){}

Main.scene2.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        
        this.c_bg = game.add.sprite(252,400,'c_bg');
        this.c_bg.anchor.setTo(0.5);

        this.table = game.add.sprite(244,655.1,'table');
        this.table.anchor.setTo(0.5);

        this.c_group = game.add.group();

        this.back = game.add.sprite(180.55,563.2,'back');
        this.back.anchor.setTo(0.5);
        this.c_group.add(this.back);

        this.white_animation = game.add.sprite(180,581,'white_animation');
        this.white_animation.anchor.setTo(0.5);
        this.white_animation.visible = false;
        this.c_group.add(this.white_animation);

        this.front = game.add.sprite(180.55,575.5,'front');
        this.front.anchor.setTo(0.5);
        this.c_group.add(this.front);


        this.yellow01_animation = game.add.sprite(175,515,'yellow01_animation');
        this.yellow01_animation.anchor.setTo(0.5);
        this.c_group.add(this.yellow01_animation);


        this.eggstand1 = game.add.sprite(342.6,657.5,'eggstand1');
        this.eggstand1.anchor.setTo(0.5);
        this.c_group.add(this.eggstand1);


        // this.yellow01_animation = game.add.sprite(140,539,'yellow01_animation');
        // this.yellow01_animation.anchor.setTo(0.5);
        // this.yellow01_animation.frame =8;

        this.egg_broke1 = game.add.sprite(170,458,'egg_broke1');
        this.egg_broke1.anchor.setTo(0.5);
        this.egg_broke1.visible = false;

        this.egg1 = game.add.sprite(330.1,540,'egg');
        this.egg1.anchor.setTo(0.5);
        this.egg1.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

          this.egg1.events.onInputUp.add(function(){


        if ((game.input.activePointer.x>70&& game.input.activePointer.x<363&& game.input.activePointer.y>350 && game.input.activePointer.y<670)){ 


          this.egg1.visible = false;
          this.arrow2.visible = false;

        
          this.egg_broke1.visible = true;

          this.egg_broke1.animations.add('egg_broke1',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,35]);
          this.egg_broke1.animations.play('egg_broke1',10,false).onComplete.add(function(){
            this.arrow3.visible = true;
            this.egg01.inputEnabled = true;
            this.egg01.input.useHandCursor = true;
            this.egg01.input.enableDrag();
          },this);

          game.time.events.add(1650,function(){
              this.white_animation.visible = true;
              this.white_animation.animations.add('white_animation',[1,2,3,4,5]);
             this.white_animation.animations.play('white_animation',10,false)
  },this);

             game.time.events.add(2950,function(){
              this.yellow01_animation.visible = true;

          this.yellow01_animation.animations.add('yellow01_animation',[0,1,2,3,4,5,6]);
             this.yellow01_animation.animations.play('yellow01_animation',10,false)
             },this);          

        
         }else{
            
         game.add.tween(this.egg1).to({x:330.1,y:540},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
      this.arrow1.visible=true;
      this.arrow2.visible=false;

          
         },this);
         }
         },this);
        this.c_group.add(this.egg1);

        this.eggstand2 = game.add.sprite(343,643.15,'eggstand2');
        this.eggstand2.anchor.setTo(0.5);
        this.c_group.add(this.eggstand2);


        this.egg_broke01 = game.add.sprite(170,458,'egg_broke1');
        this.egg_broke01.anchor.setTo(0.5);
        this.egg_broke01.visible = false;



        this.eggstand01 = game.add.sprite(439.3,657.5,'eggstand1');
        this.eggstand01.anchor.setTo(0.5);
        this.c_group.add(this.eggstand01);

        this.egg01 = game.add.sprite(423.7,540,'egg');
        this.egg01.anchor.setTo(0.5);
        this.egg01.events.onInputDown.add(function(){
          this.arrow3.visible = false;
          this.arrow2.visible = true;

        },this);


          this.egg01.events.onInputUp.add(function(){


        if ((game.input.activePointer.x>70&& game.input.activePointer.x<363&& game.input.activePointer.y>350 && game.input.activePointer.y<670)){ 


          this.egg01.visible = false;
          this.arrow2.visible = false;

        
          this.egg_broke01.visible = true;

          this.egg_broke01.animations.add('egg_broke01',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,35]);
          this.egg_broke01.animations.play('egg_broke01',10,false).onComplete.add(function(){
           game.add.tween(this.c_group).to({x:-600},1000,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
             game.state.start('scene3');
          
           },this);
          
          },this);

          game.time.events.add(1650,function(){
              this.white_animation.visible = true;
              this.white_animation.animations.add('white_animation',[6,7,8,9,10,11]);
             this.white_animation.animations.play('white_animation',10,false)
  },this);

             game.time.events.add(2950,function(){
              this.yellow01_animation.visible = true;

          this.yellow01_animation.animations.add('yellow01_animation',[6,7,8,9,10,11,12]);
             this.yellow01_animation.animations.play('yellow01_animation',10,false)
             },this);

 }else{
            
         game.add.tween(this.egg01).to({x:423.7,y:540},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
      this.arrow3.visible=true;
      this.arrow2.visible=false;

          
         },this);
         }
         },this);
        this.c_group.add(this.egg01);

        this.eggstand02 = game.add.sprite(439.95,646.15,'eggstand2');
        this.eggstand02.anchor.setTo(0.5);
        this.c_group.add(this.eggstand02);



        
        this.arrowgp = game.add.group();

         var arro2x = [333,170,432,37,459,41,449,410];
         var arro2y = [513,460,506,298,291,458,438,610];

         for(i=1;i<=8;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',15,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          // this.arrow1.angle=-90;

          }
           if(i==2){
          this['arrow'+i].visible=false;
          }if(i==3){
          this['arrow'+i].visible=false;
          // this.arrow3.angle =90;
          }if(i==4){
          this['arrow'+i].visible=false;
           this.arrow4.angle=-90;

          }if(i==5){
          this['arrow'+i].visible=false;
          // this.arrow5.angle =90;
          }if(i==6){
          this['arrow'+i].visible=false;
          // this.arrow6.angle =-90;
          }if(i==7){
          this['arrow'+i].visible=false;
          // this.arrow7.angle =90;
          }
          if(i==8){
          this['arrow'+i].visible=false;
        }
          this.arrowgp.add(this['arrow'+i]);
          
         }


         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         // this.playbtn = game.add.sprite(430,730,'playbtn');
         // this.playbtn.anchor.setTo(0.5);
         // this.playbtn.scale.setTo(0);
         // this.playbtn.inputEnabled = true;
         // this.playbtn.input.useHandCursor = true;
         // this.playbtn.events.onInputUp.add(this.enterRoom, this);
         // this.playbtn.events.onInputOver.add(this.btnOver, this);
         // this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.c_group.x=500;
        
        game.add.tween(this.c_group).to({x:0}, 1000, Phaser.Easing.Quadratic.Out, true,400).onComplete.add(function(){
           this.arrow1.visible =true;
          this.egg1.inputEnabled = true;
          this.egg1.input.useHandCursor = true;
          this.egg1.input.enableDrag();
          
         },this); 
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,-850,'c_bg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         
          
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }

        },
        update:function(){
             // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
         if(this.dummydrag){
            this.dummyobject.x=game.input.activePointer.x;
            this.dummyobject.y=game.input.activePointer.y;
         }
       },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
  // YYGSDK.navigate("game","logo");
},
moreLink:function()
{
  //  YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
  MyShowAD('scene3');
         });
   
   },
}

//3333333


Main.scene3 = function(){}

Main.scene3.prototype = {
    create:function(){
        this.levelGroup = game.add.group();


        this.c_bg = game.add.sprite(252,400,'c_bg');
        this.c_bg.anchor.setTo(0.5);

        this.table = game.add.sprite(244,655.1,'table');
        this.table.anchor.setTo(0.5);

        this.s_group = game.add.group();


        this.Symbol_1 = game.add.sprite(263.75,551.95,'Symbol_1');
        this.Symbol_1.anchor.setTo(0.5);
        this.s_group.add(this.Symbol_1);

         this.milk_animation = game.add.sprite(270,520,'milk_animation');
        this.milk_animation.anchor.setTo(0.5);
        this.milk_animation.visible = false;
        this.s_group.add(this.milk_animation);

        this.soda_animation = game.add.sprite(245,540,'soda_animation');
        this.soda_animation.anchor.setTo(0.5);
        this.soda_animation.visible = false;
        this.s_group.add(this.soda_animation);

        this.final_animation = game.add.sprite(260,416,'final_animation');
        this.final_animation.anchor.setTo(0.5);
        this.final_animation.visible = false;
        this.s_group.add(this.final_animation);

        this.b_01 = game.add.sprite(263.75,575.75,'b_001');
        this.b_01.anchor.setTo(0.5);
        this.s_group.add(this.b_01);

        this.milk01_animation = game.add.sprite(350,378,'milk01_animation');
        this.milk01_animation.anchor.setTo(0.5);
        this.milk01_animation.scale.setTo(0.8);
        this.milk01_animation.visible = false;

        this.milk02_animation = game.add.sprite(350,378,'milk02_animation');
        this.milk02_animation.anchor.setTo(0.5);
        this.milk02_animation.scale.setTo(0.8);
        this.milk02_animation.visible = false;

        this.milk = game.add.sprite(375,650,'milk');
        this.milk.anchor.setTo(0.5);
        this.milk.scale.setTo(0.75);
        this.milk.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);
       this.milk.events.onInputUp.add(function(){
        if ((game.input.activePointer.x>100&& game.input.activePointer.x<490&& game.input.activePointer.y>283 && game.input.activePointer.y<624)){ 

          this.milk.visible = false;
          this.arrow2.visible = false;

          this.milk01_animation.visible = true;         

          this.milk01_animation.animations.add('milk01_animation');
          this.milk01_animation.animations.play('milk01_animation',10,false).onComplete.add(function(){
            this.milk01_animation.x=375;
            this.milk01_animation.y=650;

          },this);

        game.time.events.add(500,function(){
          this.milk_animation.visible = true;
          this.milk_animation.animations.add('milk_animation');
         this.milk_animation.animations.play('milk_animation',10,false)

           },this);

         game.time.events.add(1000,function(){
           this.milk01_animation.visible = false; 
          this.milk02_animation.visible = true;
          this.milk02_animation.animations.add('milk02_animation');
          this.milk02_animation.animations.play('milk02_animation',10,false).onComplete.add(function(){
           this.milk02_animation.visible = false;
         

            game.add.tween(this.milk).to({x:-500},1000,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
             game.add.tween(this.backingsoda).to({x:120},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
               this.arrow1.visible = true;
               this.backingsoda.inputEnabled = true;
               this.backingsoda.input.useHandCursor = true;
               this.backingsoda.input.enableDrag();
             },this);

            },this);    

       },this);

        },this);
  
 }else{
    this.arrow1.visible=true;
      this.arrow2.visible=false;            
         game.add.tween(this.milk).to({x:375,y:650},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
    
         },this);
         }
         },this);
              this.milk.x=700;
        this.s_group.add(this.milk);

        

          this.baking_animation = game.add.sprite(260,394,'baking_animation');
          this.baking_animation.anchor.setTo(0.5);
          this.baking_animation.visible = false;


         this.backingsoda = game.add.sprite(120,650,'backingsoda');
         this.backingsoda.anchor.setTo(0.5);
         this.backingsoda.scale.setTo(0.8);
         this.backingsoda.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

         },this);

         this.backingsoda.events.onInputUp.add(function(){


        if ((game.input.activePointer.x>100&& game.input.activePointer.x<490&& game.input.activePointer.y>283 && game.input.activePointer.y<624)){ 

          this.backingsoda.visible = false;
          this.arrow2.visible = false;

          this.baking_animation.visible = true;
          
         

          this.baking_animation.animations.add('baking_animation');
          this.baking_animation.animations.play('baking_animation',10,false).onComplete.add(function(){
            this.baking_animation.x=120;
            this.baking_animation.y=650;

          },this);

        game.time.events.add(500,function(){
          this.soda_animation.visible = true;
          this.soda_animation.animations.add('soda_animation');
         this.soda_animation.animations.play('soda_animation',10,false)

         game.time.events.add(3000,function(){
      game.add.tween(this.baking_animation).to({x:-500},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      game.add.tween(this.white_animation_1).to({x:300},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        this.arrow1.visible = true;
         this.white_animation_1.inputEnabled = true;
       this.white_animation_1.input.useHandCursor = true;
       this.white_animation_1.input.enableDrag();
   
      },this);

    },this);
         },this);
      

         },this);

           }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.backingsoda).to({x:120,y:650},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
     
          
         },this);
         }
         },this);


         this.backingsoda.x=700;
        this.s_group.add(this.backingsoda);



   
      this.white_animation_1 = game.add.sprite(300,540,'white_animation_1');
      this.white_animation_1.anchor.setTo(0.5);
      this.white_animation_1.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;
          console.log('11');
           },this);
     this.white_animation_1.events.onInputUp.add(function(){
        if ((game.input.activePointer.x>100&& game.input.activePointer.x<460&& game.input.activePointer.y>280 && game.input.activePointer.y<640)){ 
           this.white_animation_1.inputEnabled =false;
          this.arrow2.visible = false;
            this.white_animation_1.x=180;
            this.white_animation_1.y=410;

          this.white_animation_1.animations.add('white_animation_1');
          this.white_animation_1.animations.play('white_animation_1',10,false).onComplete.add(function(){
             this.white_animation_1.x=300;
             this.white_animation_1.y=540;
             game.add.tween(this.white_animation_1).to({x:-700},1000,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
             game.add.tween(this.mixer).to({x:250},1000,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
               this.arrow1.visible = true;
               this.mixer.inputEnabled = true;
              this.mixer.input.useHandCursor = true;
              this.mixer.input.enableDrag();
          },this);
           
          },this);
          },this);

       }else{
        this.arrow1.visible=true;
      this.arrow2.visible=false;
                      
         game.add.tween(this.white_animation_1).to({x:300,y:540},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
      
         },this);
         }
         },this);
         this.white_animation_1.x =700;
        this.s_group.add(this.white_animation_1);


           this.mixer = game.add.sprite(250,690,'mixer');
         this.mixer.anchor.setTo(0.5);
         this.mixer.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

         },this);
  this.mixer.events.onInputUp.add(function(){
 if ((game.input.activePointer.x>100&& game.input.activePointer.x<460&& game.input.activePointer.y>280 && game.input.activePointer.y<640)){ 

          this.mixer.visible = false;
          this.arrow2.visible = false;

          this.final_animation.visible = true;
          
         

          this.final_animation.animations.add('final_animation');
          this.final_animation.animations.play('final_animation',10,false).onComplete.add(function(){
             game.add.tween(this.s_group).to({x:-700},1000,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
             game.state.start('scene4');
               // MyShowAD('scene4');
             },this);
           
          },this);

       }else{
             this.arrow1.visible=true;
      this.arrow2.visible=false;

         game.add.tween(this.mixer).to({x:250,y:690},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     
          
         },this);
         }
         },this);
         this.mixer.x =700;
        this.s_group.add(this.mixer);






    this.arrowgp = game.add.group();

         var arro2x = [242,237,430,37,459,41,449,410];
         var arro2y = [564,421,165,298,291,458,438,610];

         for(i=1;i<=8;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',15,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          // this.arrow1.angle=-90;

          }
           if(i==2){
          this['arrow'+i].visible=false;
          }if(i==3){
          this['arrow'+i].visible=false;
          // this.arrow3.angle =90;
          }if(i==4){
          this['arrow'+i].visible=false;
           this.arrow4.angle=-90;

          }if(i==5){
          this['arrow'+i].visible=false;
          // this.arrow5.angle =90;
          }if(i==6){
          this['arrow'+i].visible=false;
          // this.arrow6.angle =-90;
          }if(i==7){
          this['arrow'+i].visible=false;
          // this.arrow7.angle =90;
          }
          if(i==8){
          this['arrow'+i].visible=false;
        }
          this.arrowgp.add(this['arrow'+i]);
          
         }




       

        
        
         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         // this.playbtn = game.add.sprite(430,730,'playbtn');
         // this.playbtn.anchor.setTo(0.5);
         // this.playbtn.scale.setTo(0);
         // this.playbtn.inputEnabled = true;
         // this.playbtn.input.useHandCursor = true;
         // this.playbtn.events.onInputUp.add(this.enterRoom, this);
         // this.playbtn.events.onInputOver.add(this.btnOver, this);
         // this.playbtn.events.onInputOut.add(this.btnOut, this);
           this.s_group.x=500;
        
        game.add.tween(this.s_group).to({x:0}, 1000, Phaser.Easing.Quadratic.Out, true,400).onComplete.add(function(){
             game.add.tween(this.milk).to({x:350}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         this.arrow1.visible = true;
            this.milk.inputEnabled = true;
            this.milk.input.useHandCursor = true;
            this.milk.input.enableDrag();

         },this); 
              },this);
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,-850,'c_bg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         
          
         },this);
        }
        
         
        
         
     
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },


          update:function(){
             // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
         if(this.dummydrag){
            this.dummyobject.x=game.input.activePointer.x;
            this.dummyobject.y=game.input.activePointer.y;
         }
        },
openLink:function()
{
  // YYGSDK.navigate("game","logo");
},
moreLink:function()
{
 //  YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
    MyShowAD('scene4');
         });
   
   },
}

//4444

Main.scene4 = function(){}

Main.scene4.prototype = {
    create:function(){
        this.levelGroup = game.add.group();


        this.c_bg = game.add.sprite(252,400,'c_bg');
        this.c_bg.anchor.setTo(0.5);

        this.table = game.add.sprite(244,655.1,'table');
        this.table.anchor.setTo(0.5);
        

       this.boo_group = game.add.group();

        this.bo1_animation = game.add.sprite(380,570,'bo1_animation');
        this.bo1_animation.anchor.setTo(0.5);
        this.boo_group.add(this.bo1_animation);

        this.bo2_animation = game.add.sprite(352.9,686.85,'bo2_animation');
        this.bo2_animation.anchor.setTo(0.5);
        this.boo_group.add(this.bo2_animation);

        this.bo3_animation = game.add.sprite(112.35,525.35,'bo3_animation');
        this.bo3_animation.anchor.setTo(0.5);
        this.boo_group.add(this.bo3_animation);

      

        this.boo01_animation = game.add.sprite(320,390,'boo01_animation');
        this.boo01_animation.anchor.setTo(0.5);
        this.boo01_animation.scale.setTo(0.8);
        this.boo01_animation.visible=false;
        this.boo_group.add(this.boo01_animation);
    
        this.booo01_animation = game.add.sprite(260,470,'booo01_animation');
        this.booo01_animation.anchor.setTo(0.5);
        this.booo01_animation.scale.setTo(0.8);
        this.booo01_animation.visible=false;
        this.boo_group.add(this.booo01_animation);
    
       // this.count=1;
       // this.count1=1;

        this.bo01_animation = game.add.sprite(200,340,'bo01_animation');
        this.bo01_animation.anchor.setTo(0.5);
        this.bo01_animation.scale.setTo(0.8);
        this.bo01_animation.visible = false;
        this.boo_group.add(this.bo01_animation);

        this.batterboul = game.add.sprite(275,490,'batterboul');
        this.batterboul.anchor.setTo(0.5);
        this.batterboul.scale.setTo(0.8);
          this.batterboul.inputEnabled = true;
          this.batterboul.input.useHandCursor = true;
          this.batterboul.input.enableDrag();
        this.batterboul.events.onInputDown.add(function(){
          this.arrow1.visible =false;
          this.arrow2.visible =true;
          this.arrow2.x =112;
          this.arrow2.y =372;
              },this);
           this.batterboul.events.onInputUp.add(function(){
 if ((game.input.activePointer.x>0&& game.input.activePointer.x<295&& game.input.activePointer.y>310 && game.input.activePointer.y<574)){
 this.arrow2.visible =false; 

  this.bo01_animation.visible =true;

  this.batterboul.visible =false;

    this.bo01_animation.animations.add('bo01_animation');
    this.bo01_animation.animations.play('bo01_animation',10,false)

    game.time.events.add(500,function(){
        this.bo1_animation.visible =true;

    this.bo3_animation.animations.add('bo3_animation');
    this.bo3_animation.animations.play('bo3_animation',10,false).onComplete.add(function(){
   this.bo01_animation.visible =false;
  this.boo01_animation.visible =true;

    this.boo01_animation.animations.add('boo01_animation');
    this.boo01_animation.animations.play('boo01_animation',10,false)

    game.time.events.add(500,function(){

   this.bo1_animation.animations.add('bo1_animation');
    this.bo1_animation.animations.play('bo1_animation',10,false).onComplete.add(function(){
      this.boo01_animation.visible =false;
      this.booo01_animation.visible =true;

         this.booo01_animation.animations.add('booo01_animation');
    this.booo01_animation.animations.play('booo01_animation',10,false)

game.time.events.add(300,function(){

   this.bo2_animation.animations.add('bo2_animation');
    this.bo2_animation.animations.play('bo2_animation',10,false).onComplete.add(function(){
     game.add.tween(this.boo_group).to({x:-700},1000,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
           
             game.state.start('scene5');
            // MyShowAD('scene5');
          },this);
          },this);
        

},this);

    },this);
    },this);
    },this);
    },this);
  
    }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;

       game.add.tween(this.batterboul).to({x:275,y:490},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
       },this);
         } 
         },this);
        this.boo_group.add(this.batterboul);
       
          


 

    this.arrowgp = game.add.group();

         var arro2x = [140,95,377,339,459,41,449,410];
         var arro2y = [544,424,460,590,291,458,438,610];

         for(i=1;i<=8;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',15,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          // this.arrow1.angle=-90;

          }
           if(i==2){
          this['arrow'+i].visible=false;
          }if(i==3){
          this['arrow'+i].visible=false;
          // this.arrow3.angle =90;
          }if(i==4){
          this['arrow'+i].visible=false;
           // this.arrow4.angle=-90;

          }if(i==5){
          this['arrow'+i].visible=false;
          // this.arrow5.angle =90;
          }if(i==6){
          this['arrow'+i].visible=false;
          // this.arrow6.angle =-90;
          }if(i==7){
          this['arrow'+i].visible=false;
          // this.arrow7.angle =90;
          }
          if(i==8){
          this['arrow'+i].visible=false;
        }
          this.arrowgp.add(this['arrow'+i]);
          
         }

     

        
         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

        
           this.boo_group.x=500;
        
        game.add.tween(this.boo_group).to({x:0}, 1000, Phaser.Easing.Quadratic.Out, true,400).onComplete.add(function(){
           this.arrow1.visible = true;
          this.batterboul.inputEnabled = true;
          this.batterboul.input.useHandCursor = true;
          this.batterboul.input.enableDrag();
          
              },this);
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,-850,'c_bg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         
          
         },this);
        }
        
  
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
         update:function(){
             // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
         if(this.dummydrag){
            this.dummyobject.x=game.input.activePointer.x;
            this.dummyobject.y=game.input.activePointer.y;
         }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
  // YYGSDK.navigate("game","logo");
},
moreLink:function()
{
  // YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('scene5');
         });
   
   },
}

//5555

Main.scene5 = function(){}

Main.scene5.prototype = {
    create:function(){
        this.levelGroup = game.add.group();

       this.c_bg = game.add.sprite(252,400,'c_bg');
        this.c_bg.anchor.setTo(0.5);

        this.table = game.add.sprite(244,655.1,'table');
        this.table.anchor.setTo(0.5);


        this.m_group = game.add.group();


        this.timer = game.add.sprite(-80,150,'timer');
         this.timer.anchor.setTo(0.5);
         this.timer.scale.setTo(0.5);
       

        this.microwave1 = game.add.sprite(205,587,'microwave1');
        this.microwave1.anchor.setTo(0.5);
        this.microwave1.visible = false;

        this.microwave2 = game.add.sprite(240,615,'microwave2');
        this.microwave2.anchor.setTo(0.5);
        this.microwave2.visible = false;

        this.microwave3 = game.add.sprite(210,603,'microwave3');
        this.microwave3.anchor.setTo(0.5);
        this.microwave3.visible = false;

        this.micro = game.add.sprite(230,510,'micro');
        this.micro.anchor.setTo(0.5);
        this.micro.visible = false;
        this.m_group.add(this.micro);

        
        this.micro2 = game.add.sprite(230,510,'micro2');
        this.micro2.anchor.setTo(0.5);
        this.m_group.add(this.micro2);



        this.mirror = game.add.sprite(55,545.7,'mirror');
        this.mirror.anchor.setTo(0.5);
        this.m_group.add(this.mirror);

        this.bo1_animation = game.add.sprite(208,700,'bo1_animation');
        this.bo1_animation.anchor.setTo(0.5);
        this.bo1_animation.frame=9;
        this.bo1_animation.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

         this.bo1_animation.events.onInputUp.add(function(){

        if ((game.input.activePointer.x>87&& game.input.activePointer.x<352&& game.input.activePointer.y>371 && game.input.activePointer.y<620)){ 

          this.arrow2.visible = false;
          this.bo1_animation.visible = false;
          this.mirror.visible = false;
          this.microwave1.visible = true;
        
           game.add.tween(this.timer).to({x:180},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            this.timer.animations.add('timer');
          this.timer.animations.play('timer',25,false).onComplete.add(function(){
         game.add.tween(this.timer).to({x:-80},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
           this.micro.visible = true;
           this.cooking_animation.visible = true;
            this.cooking_animation.animations.add('cooking_animation',[8,9,10]);
          this.cooking_animation.animations.play('cooking_animation',25,false).onComplete.add(function(){
            this.microwave1.visible = false;
            this.arrow2.visible = true;
            this.micro.visible = true;
            this.mirror.visible = true;
            // this.arrow1.visible = true;

          },this);
       

         },this);
           },this);
            },this);
 }else{
      this.arrow1.visible=true;
      this.arrow2.visible=false;

         game.add.tween(this.bo1_animation).to({x:208,y:700},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
      
          
         },this);
         }
         },this);


        this.bo1_animation.x=700;


        this.cooking_animation = game.add.sprite(203,545,'cooking_animation');
        this.cooking_animation.anchor.setTo(0.5);
        this.cooking_animation.inputEnabled = true;
        this.cooking_animation.input.useHandCursor =true;
        this.cooking_animation.input.enableDrag();
        this.cooking_animation.events.onInputDown.add(function(){
          this.arrow2.visible = false;

        },this);

    this.cooking_animation.events.onInputUp.add(function(){
 

        if ((game.input.activePointer.x>170&& game.input.activePointer.x<319&& game.input.activePointer.y>395 && game.input.activePointer.y<736)){ 
                this.cooking_animation.visible = false; 
      this.cooking_animation1.visible = true;
          game.add.tween(this.cooking_animation1).to({x:-500},1000,Phaser.Easing.Quadratic.Out,true,700).onComplete.add(function(){
              game.add.tween(this.bo3_animation).to({x:250},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
           
                this.arrow1.visible=true;
                this.bo3_animation.inputEnabled = true;
                this.bo3_animation.input.useHandCursor = true;
                this.bo3_animation.input.enableDrag();

              },this);
          },this);
        
 }else{
            
         game.add.tween(this.cooking_animation).to({x:203,y:545},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
      this.arrow2.visible=true;
      this.arrow1.visible=false;

          
         },this);
         }
         },this);


        this.cooking_animation.visible = false;
        this.m_group.add(this.cooking_animation);

         this.bo3_animation = game.add.sprite(208,700,'bo3_animation');
        this.bo3_animation.anchor.setTo(0.5);
        this.bo3_animation.frame=9;
        this.bo3_animation.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

      this.bo3_animation.events.onInputUp.add(function(){


        if ((game.input.activePointer.x>170&& game.input.activePointer.x<345&& game.input.activePointer.y>495 && game.input.activePointer.y<728)){ 

          this.arrow2.visible = false;
          this.bo3_animation.visible = false;
          this.mirror.visible = false;

        this.microwave3.visible = true;
        
           game.add.tween(this.timer).to({x:180},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            this.timer.animations.add('timer');
          this.timer.animations.play('timer',25,false).onComplete.add(function(){
         game.add.tween(this.timer).to({x:-80},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
           this.micro2.visible = true;
          this.cooking002_animation.visible = true;
          this.cooking002_animation.animations.add('cooking002_animation',[6,7,8,9]);
          this.cooking002_animation.animations.play('cooking002_animation',25,false).onComplete.add(function(){
            this.microwave3.visible = false;
            this.arrow2.visible = true;
            this.micro.visible = true;
            this.mirror.visible = true;
            // this.arrow1.visible = true;

          },this);
       

         },this);
           },this);
            },this);
 }else{
            
         game.add.tween(this.bo3_animation).to({x:208,y:700},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
      this.arrow1.visible=true;
      this.arrow2.visible=false;

          
         },this);
         }
         },this);

        this.bo3_animation.x=700;


        this.cooking002_animation = game.add.sprite(203,545,'cooking002_animation');
        this.cooking002_animation.anchor.setTo(0.5);
        this.cooking002_animation.inputEnabled = true;
        this.cooking002_animation.input.useHandCursor = true;
        this.cooking002_animation.input.enableDrag();
        this.cooking002_animation.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

    this.cooking002_animation.events.onInputUp.add(function(){
     

        if ((game.input.activePointer.x>170&& game.input.activePointer.x<319&& game.input.activePointer.y>395 && game.input.activePointer.y<736)){ 
 this.arrow2.visible = false;
       this.cooking002_animation.visible = false;
       this.cooking002_animation1.visible =true
          game.add.tween(this.cooking002_animation1).to({x:-500},1000,Phaser.Easing.Quadratic.Out,true,700).onComplete.add(function(){
              game.add.tween(this.bo2_animation).to({x:250},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
                this.arrow1.visible=true;
                this.bo2_animation.inputEnabled = true;
                this.bo2_animation.input.useHandCursor = true;
                this.bo2_animation.input.enableDrag();

              },this);
          },this);
        
 }else{
            
         game.add.tween(this.cooking002_animation).to({x:203,y:545},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
      this.arrow2.visible=true;
      this.arrow1.visible=false;

          
         },this);
         }
         },this);


        this.cooking002_animation.visible = false;


        this.bo2_animation = game.add.sprite(208,700,'bo2_animation');
        this.bo2_animation.anchor.setTo(0.5);
        this.bo2_animation.frame=9;
        this.bo2_animation.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

      this.bo2_animation.events.onInputUp.add(function(){


        if ((game.input.activePointer.x>171&& game.input.activePointer.x<345&& game.input.activePointer.y>455 && game.input.activePointer.y<728)){ 

          this.arrow2.visible = false;
          this.bo2_animation.visible = false;
          this.mirror.visible = false;

        this.microwave2.visible = true;
        
           game.add.tween(this.timer).to({x:180},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.timer.animations.add('timer');
          this.timer.animations.play('timer',25,false).onComplete.add(function(){
         game.add.tween(this.timer).to({x:-80},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
           this.micro.visible = true;
          this.cooking001_animation.visible = true;
          this.cooking001_animation.animations.add('cooking001_animation',[6,7,8,9]);
          this.cooking001_animation.animations.play('cooking001_animation',25,false).onComplete.add(function(){
            this.microwave2.visible = false;
            this.arrow2.visible = true;
            this.micro.visible = true;
            this.mirror.visible = true;
            // this.arrow1.visible = true;

          },this);
       

         },this);
           },this);
            },this);
 }else{
            
         game.add.tween(this.bo3_animation).to({x:208,y:700},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
      this.arrow1.visible=true;
      this.arrow2.visible=false;

          
         },this);
         }
         },this);

        this.bo2_animation.x=700;



        this.cooking001_animation = game.add.sprite(203,545,'cooking001_animation');
        this.cooking001_animation.anchor.setTo(0.5);
        this.cooking001_animation.inputEnabled = true;
        this.cooking001_animation.input.useHandCursor = true;
        this.cooking001_animation.input.enableDrag();
        this.cooking001_animation.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

    this.cooking001_animation.events.onInputUp.add(function(){
      

        if ((game.input.activePointer.x>170&& game.input.activePointer.x<319&& game.input.activePointer.y>395 && game.input.activePointer.y<736)){ 
      this.arrow2.visible = false;
        this.cooking001_animation.visible = false;
      this.cooking001_animation1.visible = true;
          game.add.tween(this.cooking001_animation1).to({x:-100},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            game.add.tween(this.m_group).to({x:-500},1000,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
           
             game.state.start('scene6');
              // MyShowAD('scene6');
            },this);
             
          },this);
        
 }else{
            
         game.add.tween(this.cooking001_animation).to({x:203,y:545},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
      this.arrow2.visible=true;
      this.arrow1.visible=false;

          
         },this);
         }
         },this);


        this.cooking001_animation.visible = false;

        this.cooking_animation1 = game.add.sprite(208,700,'cooking_animation');
        this.cooking_animation1.anchor.setTo(0.5);
        this.cooking_animation1.frame=9;
        this.cooking_animation1.visible = false;

        this.cooking002_animation1 = game.add.sprite(208,700,'cooking002_animation');
        this.cooking002_animation1.anchor.setTo(0.5);
        this.cooking002_animation1.frame=9;
        this.cooking002_animation1.visible = false;

        this.cooking001_animation1 = game.add.sprite(208,700,'cooking001_animation');
        this.cooking001_animation1.anchor.setTo(0.5);
        this.cooking001_animation1.frame=9;
        this.cooking001_animation1.visible = false;


      

     this.arrowgp = game.add.group();

         var arro2x = [261,210,430,37,459,41,449,410];
         var arro2y = [581,342,165,298,291,458,438,610];

         for(i=1;i<=8;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',15,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          // this.arrow1.angle=-90;

          }
           if(i==2){
          this['arrow'+i].visible=false;
          }if(i==3){
          this['arrow'+i].visible=false;
          // this.arrow3.angle =90;
          }if(i==4){
          this['arrow'+i].visible=false;
           this.arrow4.angle=-90;

          }if(i==5){
          this['arrow'+i].visible=false;
          // this.arrow5.angle =90;
          }if(i==6){
          this['arrow'+i].visible=false;
          // this.arrow6.angle =-90;
          }if(i==7){
          this['arrow'+i].visible=false;
          // this.arrow7.angle =90;
          }
          if(i==8){
          this['arrow'+i].visible=false;
        }
          this.arrowgp.add(this['arrow'+i]);
          
         }

      
         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         // this.playbtn = game.add.sprite(430,730,'playbtn');
         // this.playbtn.anchor.setTo(0.5);
         // this.playbtn.scale.setTo(0);
         // this.playbtn.inputEnabled = true;
         // this.playbtn.input.useHandCursor = true;
         // this.playbtn.events.onInputUp.add(this.enterRoom, this);
         // this.playbtn.events.onInputOver.add(this.btnOver, this);
         // this.playbtn.events.onInputOut.add(this.btnOut, this);
         // this.playbtn.events.onInputOut.add(this.btnOut, this);
           this.m_group.x=500;
        
        game.add.tween(this.m_group).to({x:0}, 1000, Phaser.Easing.Quadratic.Out, true,400).onComplete.add(function(){
          game.add.tween(this.bo1_animation).to({x:250}, 1000, Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            this.arrow1.visible = true;
            this.bo1_animation.inputEnabled =true;
            this.bo1_animation.input.useHandCursor = true;
            this.bo1_animation.input.enableDrag();
           },this);
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,-850,'c_bg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         
          
         },this);
        }
        
        
         
      
      // if (Main.shutterOn[0]) {
      //    this.shutter = game.add.sprite(0,0,'downloadnew');
      //    game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
           
         },this);
        // }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },


          update:function(){
             // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
         if(this.dummydrag){
            this.dummyobject.x=game.input.activePointer.x;
            this.dummyobject.y=game.input.activePointer.y;
         }
        },
openLink:function()
{
  // YYGSDK.navigate("game","logo");
},
moreLink:function()
{
   //  YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
    MyShowAD('scene6');
         });
   
   },
}



//cccccc


Main.cooking_1 = function(){}

Main.cooking_1.prototype = {
    create:function(){
        this.levelGroup = game.add.group();

        this.c_bg = game.add.sprite(252,400,'c_bg');
        this.c_bg.anchor.setTo(0.5);

        this.table = game.add.sprite(244,655.1,'table');
        this.table.anchor.setTo(0.5);


        this.b_group = game.add.group();



        this.b_2 = game.add.sprite(267.85,560.45,'b_2');
        this.b_2.anchor.setTo(0.5);
        this.b_group.add(this.b_2);

        this.b_01 = game.add.sprite(265,500,'b_01');
        this.b_01.anchor.setTo(0.5);
        this.b_01.visible = false;
        this.b_group.add(this.b_01);




        this.f_1 = game.add.sprite(265,550,'f_1');
        this.f_1.anchor.setTo(0.5);
        this.f_1.visible = false;
        this.b_group.add(this.f_1);


          
        this.v_1 = game.add.sprite(265,560,'v_1');
        this.v_1.anchor.setTo(0.5);
        this.v_1.visible = true;
        this.b_group.add(this.v_1);

      
        this.s_1 = game.add.sprite(265,535,'s_1');
        this.s_1.anchor.setTo(0.5);
        this.s_1.visible = false;
        this.b_group.add(this.s_1);



        this.b_001 = game.add.sprite(267.85,584.25,'b_001');
        this.b_001.anchor.setTo(0.5);
        this.b_group.add(this.b_001);


        this.butter_1 = game.add.sprite(150,460,'butter_1');
        this.butter_1.anchor.setTo(0.5);
        this.butter_1.visible =false;
        this.b_group.add(this.butter_1);


        this.butter = game.add.sprite(350,500,'butter');
        this.butter.anchor.setTo(0.5);
         this.butter.events.onInputDown.add(function(){
          this.arrow1.visible =false;
          this.arrow2.visible = true;

        },this);

        this.butter.events.onInputUp.add(function(){


        if ((game.input.activePointer.x>128&& game.input.activePointer.x<392&& game.input.activePointer.y>462 && game.input.activePointer.y<636)){ 
        this.butter.inputEnabled=false;

          this.butter.visible = false;
          this.arrow2.visible = false;
          this.butter_1.visible = true;

          this.butter_1.animations.add('butter_1');
          this.butter_1.animations.play('butter_1',10,false).onComplete.add(function(){
            game.time.events.add(50,function(){
               this.butter_1.x=350;
            this.butter_1.y=500;


            },this);
           
          },this);

          game.time.events.add(900,function(){
          this.b_01.visible = true;
          this.b_01.animations.add('b_01');
         this.b_01.animations.play('b_01',17,false).onComplete.add(function(){
            game.add.tween(this.butter_1).to({x:-500},1000,Phaser.Easing.Quadratic.Out,true,500).onComplete.add(function(){
            game.add.tween(this.bottle_group).to({x:30},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.arrow1.visible = true;
          this.v_bottle.inputEnabled = true;
          this.v_bottle.input.useHandCursor = true;
         this.v_bottle.input.enableDrag();

          },this);
          },this);


          },this);

         },this);

      }else{
       this.arrow1.visible=true;
      this.arrow2.visible=false;
          
         game.add.tween(this.butter).to({x:350,y:500},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
  
         },this);
         }
         },this);


     
        this.butter.x=800;

        this.flaour_1 = game.add.sprite(350,460,'flaour_1');
         this.flaour_1.anchor.setTo(0.5);
         this.flaour_1.visible = false; 
         this.b_group.add(this.flaour_1);

     this.flour = game.add.sprite(230,480,'flour');
        this.flour.anchor.setTo(0.5);
        this.flour.events.onInputDown.add(function(){
          this.arrow1.visible =false;
          this.arrow2.visible = true;

        },this);

        this.flour.events.onInputUp.add(function(){

        if ((game.input.activePointer.x>120&& game.input.activePointer.x<411&& game.input.activePointer.y>366 && game.input.activePointer.y<622)){ 

        this.flour.inputEnabled = false;
          this.flour.visible = false;
          this.arrow2.visible = false;

          this.flaour_1.visible = true;
         

          this.flaour_1.animations.add('flaour_1');
          this.flaour_1.animations.play('flaour_1',10,false).onComplete.add(function(){
            game.time.events.add(1700,function(){
            this.flaour_1.x=230;
            this.flaour_1.y=480;


            },this);
          
          },this);

        game.time.events.add(500,function(){
           this.f_1.visible = true;
           this.f_1.animations.add('f_1');
         this.f_1.animations.play('f_1',10,false).onComplete.add(function(){
         
          game.add.tween(this.flaour_1).to({x:-500},1000,Phaser.Easing.Quadratic.Out,true,2000).onComplete.add(function(){
          game.add.tween(this.butter).to({x:320},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
         this.arrow1.visible = true;
        this.butter.inputEnabled = true;
        this.butter.input.useHandCursor = true;
        this.butter.input.enableDrag();

          },this);

         },this);

        },this);

        
         },this);

         
   }else{     
   	this.arrow1.visible=true;
      this.arrow2.visible=false;

         game.add.tween(this.flour).to({x:230,y:480},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
          },this);
         }
         },this);




        this.flour.x=600;

        this.salt_1 = game.add.sprite(230,365,'salt_1');
        this.salt_1.anchor.setTo(0.5);
        this.salt_1.visible = false;

        this.salt = game.add.sprite(150,600,'salt');
        this.salt.anchor.setTo(0.5);
        // this.salt.inputEnabled = true;
        // this.salt.input.useHandCursor = true;
        this.salt.events.onInputDown.add(function(){
          this.arrow1.visible =false;
          this.arrow2.visible = true;

        },this);

          this.salt.events.onInputUp.add(function(){

      if ((game.input.activePointer.x>120&& game.input.activePointer.x<490&& game.input.activePointer.y>242 && game.input.activePointer.y<622)){ 

          this.salt.inputEnabled = false;
          this.salt.visible = false;
          this.arrow2.visible = false;
          this.salt_1.inputEnabled =false;
          this.salt_1.visible = true;

          this.salt_1.animations.add('salt_1');
          this.salt_1.animations.play('salt_1',10,false).onComplete.add(function(){
             this.salt_1.visible = false;
              this.salt.visible =true,
            // game.time.events.add(1000,function(){
          this.salt.x=150;
          this.salt.y=600;
             },this);

            // },this);     
         
          game.time.events.add(300,function(){
            this.s_1.visible = true;
          this.s_1.animations.add('s_1');
         this.s_1.animations.play('s_1',10,false).onComplete.add(function(){
          game.time.events.add(500,function(){
            game.add.tween(this.salt).to({x:-500},1000,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){

              game.add.tween(this.b_group).to({x:-500},1000,Phaser.Easing.Quadratic.Out,true,2000).onComplete.add(function(){
             /*MyShowAD('scene2')*/game.state.start('scene2');

              },this);
            },this);

             
           
          },this);
             
                    },this);
                      },this);        
           
   }else{
      this.arrow1.visible=true;
      this.arrow2.visible=false;         
         game.add.tween(this.salt).to({x:150,y:600},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
   
         },this);
         }
         },this);

         this.salt.x= 600;

          this.bottle_group = game.add.group();


          this.venila_1 = game.add.sprite(130,400,'venila_1');
          this.venila_1.anchor.setTo(0.5);
          this.venila_1.visible = false;
          this.bottle_group.add(this.venila_1);


        this.v_bottle = game.add.sprite(230,670,'v_bottle');
        this.v_bottle.anchor.setTo(0.5);
        this.v_bottle .scale.setTo(0.8);
        this.v_bottle.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;
          this.cap.visible = false;

        },this);

         this.v_bottle.events.onInputUp.add(function(){


        if ((game.input.activePointer.x>120&& game.input.activePointer.x<490&& game.input.activePointer.y>242 && game.input.activePointer.y<622)){ 
        this.v_bottle .inputEnabled=false;

          this.v_bottle.visible = false;
          this.arrow2.visible = false;

          this.venila_1.visible = true;
          this.venila_1.animations.add('venila_1');
          this.venila_1.animations.play('venila_1',10,false).onComplete.add(function(){
            this.venila_1.visible= false;
              },this);
                 
          game.time.events.add(500,function(){
              this.v_1.visible = true;
             this.v_1.animations.add('v_1');
         this.v_1.animations.play('v_1',10,false).onComplete.add(function(){

          // game.add.tween(this.v_bottle).to({x:230,y:670},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.v_bottle).to({x:-500},1000,Phaser.Easing.Quadratic.Out,true,2000).onComplete.add(function(){
          game.add.tween(this.salt).to({x:100},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.arrow1.visible = true;
        this.salt.inputEnabled = true;
         this.salt.input.useHandCursor = true;
         this.salt.input.enableDrag();

          // },this);

         },this);

          },this);

        
         },this);
         },this);

         
   }else{
            
         game.add.tween(this.v_bottle).to({x:230,y:670},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
      this.arrow1.visible=true;
      this.arrow2.visible=false;

          
         },this);
         }
         },this);



     
    


        this.bottle_group.add(this.v_bottle);
       
        this.cap = game.add.sprite(230,580,'cap');
        this.cap.anchor.setTo(0.5);
        this.cap.scale.setTo(0.8);
        this.bottle_group.add(this.cap);

        this.bottle_group.x =600;



        
    this.arrowgp = game.add.group();

         var arro2x = [261,256,430,37,459,41,449,410];
         var arro2y = [581,469,165,298,291,458,438,610];

         for(i=1;i<=8;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',15,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          // this.arrow1.angle=-90;

          }
           if(i==2){
          this['arrow'+i].visible=false;
          }if(i==3){
          this['arrow'+i].visible=false;
          // this.arrow3.angle =90;
          }if(i==4){
          this['arrow'+i].visible=false;
           this.arrow4.angle=-90;

          }if(i==5){
          this['arrow'+i].visible=false;
          // this.arrow5.angle =90;
          }if(i==6){
          this['arrow'+i].visible=false;
          // this.arrow6.angle =-90;
          }if(i==7){
          this['arrow'+i].visible=false;
          // this.arrow7.angle =90;
          }
          if(i==8){
          this['arrow'+i].visible=false;
        }
          this.arrowgp.add(this['arrow'+i]);
          
         }

        
         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         // this.playbtn = game.add.sprite(430,730,'playbtn');
         // this.playbtn.anchor.setTo(0.5);
         // this.playbtn.scale.setTo(0);
         // this.playbtn.inputEnabled = true;
         // this.playbtn.input.useHandCursor = true;
         // this.playbtn.events.onInputUp.add(this.enterRoom, this);
         // this.playbtn.events.onInputOver.add(this.btnOver, this);
         // this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          game.add.tween(this.flour).to({x:230},1000,Phaser.Easing.Quadratic.Out,true,300).onComplete.add(function(){
            this.arrow1.visible = true;
            this.flour.inputEnabled = true;
            this.flour.input.useHandCursor = true;
            this.flour.input.enableDrag();

          },this);
          
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            },

          update:function(){
             // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
         if(this.dummydrag){
            this.dummyobject.x=game.input.activePointer.x;
            this.dummyobject.y=game.input.activePointer.y;
         }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
  //YYGSDK.navigate("game","logo");
},
moreLink:function()
{
  // YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('scene2');
         });
   
   },
}



Main.scene6 = function(){}

Main.scene6.prototype = {
    create:function(){
        this.levelGroup = game.add.group();

        this.c_bg = game.add.sprite(252,400,'c_bg');
        this.c_bg.anchor.setTo(0.5);

        this.table = game.add.sprite(244,655.1,'table');
        this.table.anchor.setTo(0.5);

        this.pl_group = game.add.group();


       

        this.pl_1 = game.add.sprite(260.1,570,'pl_1');
        this.pl_1.anchor.setTo(0.5);
        this.pl_1.scale.setTo(1.10);
        this.pl_group.add(this.pl_1);


        this.pl_2 = game.add.sprite(111.6,700.5,'pl_2');
        this.pl_2.anchor.setTo(0.5);
        this.pl_2.scale.setTo(1.10);
        this.pl_group.add(this.pl_2);

     
        this.pl_3 = game.add.sprite(382.8,705.5,'pl_3');
        this.pl_3.anchor.setTo(0.5);
        this.pl_3.scale.setTo(1.10);
        this.pl_group.add(this.pl_3);

  
        this.pl_cake1_animation = game.add.sprite(268.6,533,'pl_cake1_animation');
        this.pl_cake1_animation.anchor.setTo(0.5);
        this.pl_cake1_animation.scale.setTo(1.10);
        this.pl_group.add(this.pl_cake1_animation);


        this.knife = game.add.sprite(230,750,'knife');
        this.knife.anchor.setTo(0.5);
        this.knife.angle=90;
        this.knife.scale.setTo(0.8);
        this.knife.events.onInputDown.add(function(){
          game.world.bringToTop(this.knife);
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

      this.knife.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<380&& game.input.activePointer.y>202 && game.input.activePointer.y<627)){      
         this.knife.visible = false;
        this.arrow2.visible = false;
         this.pl_cake1_animation.visible = true;
        this.pl_cake1_animation.animations.add('pl_cake1_animation');
        this.pl_cake1_animation.animations.play('pl_cake1_animation',10,false).onComplete.add(function(){
         this.knife01.visible = true;
           game.add.tween(this.knife01).to({x:230,y:750},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

            this.arrow1.visible = true;

          this.knife01.inputEnabled = true;
          this.knife01.input.useHandCursor = true;
          this.knife01.input.enableDrag();

           },this);

        },this);


   }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.knife).to({x:230,y:750},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        this.knife.x=700;

        this.pl_group.y=-5;

        
     

        this.pl_cake2_animation = game.add.sprite(112.9,665,'pl_cake2_animation');
        this.pl_cake2_animation.anchor.setTo(0.5);
        this.pl_cake2_animation.scale.setTo(1.10);
        this.pl_group.add(this.pl_cake2_animation);

       this.knife01 = game.add.sprite(230,750,'knife');
        this.knife01.anchor.setTo(0.5);
        this.knife01.angle=90;
        this.knife01.visible =false;
        this.knife01.scale.setTo(0.8);
        this.knife01.events.onInputDown.add(function(){
          // game.world.bringToTop(this.knife);
          this.arrow1.visible = false;
          this.arrow3.visible = true;

        },this);

      this.knife01.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<259&& game.input.activePointer.y>506 && game.input.activePointer.y<786)){  
    
         this.knife01.visible = false;

        this.arrow3.visible = false;
         
         this.pl_cake2_animation.visible = true;
        
        this.pl_cake2_animation.animations.add('pl_cake2_animation');
        this.pl_cake2_animation.animations.play('pl_cake2_animation',10,false).onComplete.add(function(){
         this.knife02.visible = true;
           game.add.tween(this.knife02).to({x:230,y:750},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
           this.arrow1.visible = true;
           this.knife02.inputEnabled = true;
           this.knife02.input.useHandCursor = true;
           this.knife02.input.enableDrag();

           },this);

        },this);


   }else{

      this.arrow1.visible=true;
      this.arrow3.visible=false;
            
         game.add.tween(this.knife01).to({x:230,y:750},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        // this.pl_group.add(this.knife01);

     
    
        this.pl_cake3_animation = game.add.sprite(394.75,670,'pl_cake3_animation');
        this.pl_cake3_animation.anchor.setTo(0.5);
        this.pl_cake3_animation.scale.setTo(1.12);
       
       this.pl_group.add(this.pl_cake3_animation);

         
       this.knife02 = game.add.sprite(230,750,'knife');
        this.knife02.anchor.setTo(0.5);
        this.knife02.angle=90;
        this.knife02.visible =false;
        this.knife02.scale.setTo(0.8);
        this.knife02.events.onInputDown.add(function(){
          // game.world.bringToTop(this.knife);
          this.arrow1.visible = false;
          this.arrow4.visible = true;

        },this);

              this.knife02.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>260&& game.input.activePointer.x<500&& game.input.activePointer.y>375 && game.input.activePointer.y<765)){  
    
         this.knife02.visible = false;

        this.arrow4.visible = false;
         
         this.pl_cake3_animation.visible = true;
        
        this.pl_cake3_animation.animations.add('pl_cake3_animation');
        this.pl_cake3_animation.animations.play('pl_cake3_animation',10,false).onComplete.add(function(){
          game.add.tween(this.sheet).to({x:235},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            this.arrow1.visible = true;
            this.sheet.inputEnabled = true;
            this.sheet.input.useHandCursor = true;
            this.sheet.input.enableDrag();

          },this);
         
        },this);


   }else{

      this.arrow1.visible=true;
      this.arrow4.visible=false;
            
         game.add.tween(this.knife02).to({x:230,y:750},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        // this.pl_group.add(this.knife02)

        this.sheet_group = game.add.group();



        this.sheet_animation1 = game.add.sprite(252.6,550,'sheet_animation1');
        this.sheet_animation1.anchor.setTo(0.5);
        this.sheet_animation1.scale.setTo(1.12);
        this.sheet_animation1.visible= false;
        this.sheet_group.add(this.sheet_animation1);

    
      // this.sheet_animation1.animations.add('sheet_animation1');
      //   this.sheet_animation1.animations.play('sheet_animation1',10,false)

        this.sheet = game.add.sprite(235,724,'sheet1');
        this.sheet.anchor.setTo(0.5);
        this.sheet.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

      this.sheet.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>95&& game.input.activePointer.x<539&& game.input.activePointer.y>360 && game.input.activePointer.y<660)){  
    
         this.sheet.visible = false;
         this.arrow2.visible = false;
         
         this.sheet_animation1.visible = true;
         this.sheet_animation1.animations.add('sheet_animation1',[0,1]);
        this.sheet_animation1.animations.play('sheet_animation1',10,false).onComplete.add(function(){

        game.add.tween(this.scraber).to({x:235},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.arrow1.visible = true;
          this.scraber.inputEnabled =true;
          this.scraber.input.useHandCursor = true;
          this.scraber.input.enableDrag();
        },this);
        },this);
      

   }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.sheet).to({x:235,y:724},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        this.sheet.x=700;

      

        this.scraber = game.add.sprite(235,724,'scraber');
        this.scraber.anchor.setTo(0.5);
        this.scraber.events.onInputDown.add(function(){
         this.arrow1.visible = false;
         this.arrow2.visible = true;
        },this);

        this.scraber.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>95&& game.input.activePointer.x<539&& game.input.activePointer.y>360 && game.input.activePointer.y<660)){  
    
         this.scraber.visible = false;
         this.arrow2.visible = false;
         
         this.sheet_animation1.visible = true;
         this.sheet_animation1.animations.add('sheet_animation1',[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
        this.sheet_animation1.animations.play('sheet_animation1',10,false).onComplete.add(function(){
            game.add.tween(this.sheet01).to({x:235},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            this.arrow1.visible = true;
          this.sheet01.inputEnabled =true;
          this.sheet01.input.useHandCursor = true;
          this.sheet01.input.enableDrag();
        
            },this);
        
     
        // },this);
        },this);
      

   }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.scraber).to({x:235,y:724},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        this.scraber.x=700;
        // this.pl_group.add(this.scraber);




        this.sheet_animation2 = game.add.sprite(102,673,'sheet_animation2');
        this.sheet_animation2.anchor.setTo(0.5);
        this.sheet_animation2.scale.setTo(1.12);
        this.sheet_animation2.visible= false;
        this.sheet_group.add(this.sheet_animation2);
    
         this.sheet01 = game.add.sprite(235,724,'sheet1');
         this.sheet01.anchor.setTo(0.5);
         this.sheet01.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow3.visible = true;

        },this);


      this.sheet01.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<260&& game.input.activePointer.y>470 && game.input.activePointer.y<740)){  
    
         this.sheet01.visible = false;
         this.arrow3.visible = false;
         
         this.sheet_animation2.visible = true;
         this.sheet_animation2.animations.add('sheet_animation2',[0,1]);
        this.sheet_animation2.animations.play('sheet_animation2',10,false).onComplete.add(function(){
        game.add.tween(this.scraber01).to({x:235},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.arrow1.visible = true;
          this.scraber01.inputEnabled =true;
          this.scraber01.input.useHandCursor = true;
          this.scraber01.input.enableDrag();
        },this);
        },this);
      

   }else{

      this.arrow1.visible=true;
      this.arrow3.visible=false;
            
         game.add.tween(this.sheet01).to({x:235,y:724},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        this.sheet01.x=700;
           // this.pl_group.add(this.sheet01);
       

         this.scraber01 = game.add.sprite(235,724,'scraber');
        this.scraber01.anchor.setTo(0.5);
        this.scraber01.events.onInputDown.add(function(){
         this.arrow1.visible = false;
         this.arrow3.visible = true;
        },this);

        this.scraber01.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<260&& game.input.activePointer.y>470 && game.input.activePointer.y<740)){  
    
         this.scraber01.visible = false;
         this.arrow3.visible = false;
         
         this.sheet_animation2.visible = true;
         this.sheet_animation2.animations.add('sheet_animation2',[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
        this.sheet_animation2.animations.play('sheet_animation2',10,false).onComplete.add(function(){
      game.add.tween(this.sheet02).to({x:235},700,Phaser.Easing.Quadratic.Out,true);
       
          this.arrow1.visible = true;
          this.sheet02.inputEnabled =true;
          this.sheet02.input.useHandCursor = true;
          this.sheet02.input.enableDrag();
       },this);
      

   }else{

      this.arrow1.visible=true;
      this.arrow3.visible=false;
            
         game.add.tween(this.sheet).to({x:235,y:724},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        this.scraber01.x=700;
           // this.pl_group.add(this.scraber01);
     




        this.sheet_animation3 = game.add.sprite(389,670,'sheet_animation3');
        this.sheet_animation3.anchor.setTo(0.5);
        this.sheet_animation3.scale.setTo(1.10);
        this.sheet_animation3.visible= false;
        this.sheet_group.add(this.sheet_animation3);
       
        this.sheet02 = game.add.sprite(235,724,'sheet1');
        this.sheet02.anchor.setTo(0.5);
        this.sheet02.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow4.visible = true;

        },this);


      this.sheet02.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>250&& game.input.activePointer.x<490&& game.input.activePointer.y>495 && game.input.activePointer.y<730)){  
    
         this.sheet02.visible = false;
         this.arrow4.visible = false;
         
         this.sheet_animation3.visible = true;
         this.sheet_animation3.animations.add('sheet_animation3',[0,1,2]);
        this.sheet_animation3.animations.play('sheet_animation3',10,false).onComplete.add(function(){
          this.pl_cake3_animation.visible = false; 
        game.add.tween(this.scraber02).to({x:235},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.arrow1.visible = true;
          this.scraber02.inputEnabled =true;
          this.scraber02.input.useHandCursor = true;
          this.scraber02.input.enableDrag();
        },this);
        },this);
      

   }else{

      this.arrow1.visible=true;
      this.arrow4.visible=false;
            
         game.add.tween(this.sheet01).to({x:235,y:724},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        this.sheet02.x=700;
        // this.pl_group.add(this.sheet02);
     


         this.scraber02 = game.add.sprite(235,724,'scraber');
        this.scraber02.anchor.setTo(0.5);
        this.scraber02.events.onInputDown.add(function(){
         this.arrow1.visible = false;
         this.arrow4.visible = true;
        },this);

        this.scraber02.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>250&& game.input.activePointer.x<490&& game.input.activePointer.y>495 && game.input.activePointer.y<730)){  
    
         this.scraber02.visible = false;
         this.arrow4.visible = false;
         
         this.sheet_animation3.visible = true;
         this.sheet_animation3.animations.add('sheet_animation3',[3,4,5,6,7,8,9,10,11]);
        this.sheet_animation3.animations.play('sheet_animation3',10,false).onComplete.add(function(){
          game.add.tween(this.pl_group).to({x:-700},1500,Phaser.Easing.Quadratic.Out,true);
          game.add.tween(this.sheet_group).to({x:-700},1500,Phaser.Easing.Quadratic.Out,true);

game.time.events.add(500,function(){
             game.state.start('scene7');
 // MyShowAD('scene7');
},this);
     
          },this); 
    
      
      

   }else{

      this.arrow1.visible=true;
      this.arrow4.visible=false;
            
         game.add.tween(this.sheet).to({x:235,y:724},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        this.scraber02.x=700;
      // this.pl_group.add(this.scraber02);
       


this.arrowgp = game.add.group();
     
         var arro2x = [240,240,97,386,459,41,449,410];
         var arro2y = [663,411,583,549,291,458,438,610];

         for(i=1;i<=8;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',15,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          
          }
           if(i==2){
          this['arrow'+i].visible=false;
          }if(i==3){
          this['arrow'+i].visible=false;
          
          }if(i==4){
          this['arrow'+i].visible=false;
          

          }if(i==5){
          this['arrow'+i].visible=false;
         
          }if(i==6){
          this['arrow'+i].visible=false;
        
          }if(i==7){
          this['arrow'+i].visible=false;
         
          }
          if(i==8){
          this['arrow'+i].visible=false;
        }
          this.arrowgp.add(this['arrow'+i]);
          
         }

         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

        
         
         this.pl_group.x=500;
        
        game.add.tween(this.pl_group).to({x:0}, 1000, Phaser.Easing.Quadratic.Out, true,1000).onComplete.add(function(){
          game.add.tween(this.knife).to({x:230},1000, Phaser.Easing.Quadratic.Out, true,500).onComplete.add(function(){
            this.arrow1.visible = true;
          this.knife.inputEnabled = true;
          this.knife.input.useHandCursor = true;
          this.knife.input.enableDrag();
          },this);
        
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,-850,'c_bg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         
          
         },this);
        }
        
        
         
      
      // if (Main.shutterOn[0]) {
      //    this.shutter = game.add.sprite(0,0,'downloadnew');
      //    game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
      //     this.arrow1.visible = true;
      //     this.knife.inputEnabled = true;
      //     this.knife.input.useHandCursor = true;
      //     this.knife.input.enableDrag();
         },this);
      //   }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
         update:function(){
             // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
         if(this.dummydrag){
            this.dummyobject.x=game.input.activePointer.x;
            this.dummyobject.y=game.input.activePointer.y;
         }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
  // YYGSDK.navigate("game","logo");
},
moreLink:function()
{
  //  YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
    MyShowAD('scene7');
         });
   
   },
}


//88888

Main.scene7 = function(){}

Main.scene7.prototype = {
    create:function(){
        this.levelGroup = game.add.group();


        this.c_bg = game.add.sprite(252,400,'c_bg');
        this.c_bg.anchor.setTo(0.5);

        this.table = game.add.sprite(244,655.1,'table');
        this.table.anchor.setTo(0.5);

        this.strips_group = game.add.group();

        this.strips_animation1 = game.add.sprite(305,615,'strips_animation1');
        this.strips_animation1.anchor.setTo(0.5);
        this.strips_animation1.scale.setTo(0.48);
        this.strips_animation1.visible=false; 

        this.strips_animation2 = game.add.sprite(305,617,'strips_animation2');
        this.strips_animation2.anchor.setTo(0.5);
        this.strips_animation2.scale.setTo(0.48);
        this.strips_animation2.visible=false;


        this.strips_animation3 = game.add.sprite(305,617,'strips_animation3');
        this.strips_animation3.anchor.setTo(0.5);
        this.strips_animation3.scale.setTo(0.48);
        this.strips_animation3.visible=false;

         this.stripsheet = game.add.sprite(250,550,'stripsheet');
         this.stripsheet.anchor.setTo(0.5);
         this.stripsheet.scale.setTo(0.8);
         this.strips_group.add(this.stripsheet);
      


        
             this.knife03 = game.add.sprite(250,720,'knife');
             this.knife03.anchor.setTo(0.5);
             this.knife03.scale.setTo(0.6);
             this.knife03.events.onInputDown.add(function(){
              this.arrow1.visible =false;
              this.arrow2.visible = true;

             },this);

      this.knife03.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<490&& game.input.activePointer.y>127 && game.input.activePointer.y<637)){  
    
         this.knife03.visible = false;
         this.stripsheet.visible = false;
   
      this.arrow2.visible = false;

     this.strips_animation1.visible=true; 

      this.strips_animation1.animations.add('strips_animation1');
        this.strips_animation1.animations.play('strips_animation1',10,false).onComplete.add(function(){
            this.strips_animation1.visible=false; 

            this.strips_animation2.visible=true; 
          this.strips_animation2.animations.add('strips_animation2');
        this.strips_animation2.animations.play('strips_animation2',10,false).onComplete.add(function(){
             this.strips_animation2.visible=false; 
            this.strips_animation3.visible=true; 
             this.strips_animation3.animations.add('strips_animation3');
        this.strips_animation3.animations.play('strips_animation3',10,false).onComplete.add(function(){
           game.add.tween(this.strips_animation3).to({x:-500},1000, Phaser.Easing.Quadratic.Out, true,1000).onComplete.add(function(){
  // MyShowAD('alignment');
             game.state.start('alignment');
  
        },this);
       },this);
        },this);
        },this);

    



}else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.knife03).to({x:250,y:720},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
             this.knife03.angle =90;
             this.strips_group.add(this.knife03);




        this.arrowgp = game.add.group();
     
         var arro2x = [240,240,97,386,459,41,449,410];
         var arro2y = [663,411,583,549,291,458,438,610];

         for(i=1;i<=8;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',15,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          
          }
           if(i==2){
          this['arrow'+i].visible=false;
          }if(i==3){
          this['arrow'+i].visible=false;
          
          }if(i==4){
          this['arrow'+i].visible=false;
          

          }if(i==5){
          this['arrow'+i].visible=false;
         
          }if(i==6){
          this['arrow'+i].visible=false;
        
          }if(i==7){
          this['arrow'+i].visible=false;
         
          }
          if(i==8){
          this['arrow'+i].visible=false;
        }
          this.arrowgp.add(this['arrow'+i]);
          
         }

       
        
         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

     
           this.strips_group.x=500;
        
        game.add.tween(this.strips_group).to({x:0}, 1000, Phaser.Easing.Quadratic.Out, true,400).onComplete.add(function(){
            this.arrow1.visible =true;
         this.knife03.inputEnabled = true;
         this.knife03.input.useHandCursor = true;
         this.knife03.input.enableDrag();
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,-850,'c_bg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         
          
         },this);
        }
        
       
          
         },this);
        // }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
 
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },

          update:function(){
             // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
         if(this.dummydrag){
            this.dummyobject.x=game.input.activePointer.x;
            this.dummyobject.y=game.input.activePointer.y;
         }
        },
openLink:function()
{
  // YYGSDK.navigate("game","logo");
},
moreLink:function()
{
  //YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('alignment');
         });
   
   },
}


//7777



Main.alignment = function(){}

Main.alignment.prototype = {
    create:function(){
        this.levelGroup = game.add.group();

        this.c_bg = game.add.sprite(252,400,'c_bg');
        this.c_bg.anchor.setTo(0.5);

        this.table = game.add.sprite(244,655.1,'table');
        this.table.anchor.setTo(0.5);

        this.stand_group = game.add.group();

        this.stand1 = game.add.sprite(266.45,525.5,'stand1');
        this.stand1.anchor.setTo(0.5);
        this.stand_group.add(this.stand1);

        this. cake01 = game.add.sprite(255.5,399.3,'cake1');
        this.cake01.anchor.setTo(0.5);
        this.cake01.visible = false;

        this.cake02 = game.add.sprite(254.05,322.5,'cake2');
        this.cake02.anchor.setTo(0.5);
        this.cake02.visible = false;

        this.cake03 = game.add.sprite(252.6,237.05,'cake3');
        this.cake03.anchor.setTo(0.5);
        this.cake03.visible =false;

        this.doll01 = game.add.sprite(258.7,141.5,'doll');
        this.doll01.anchor.setTo(0.5);
        this.doll01.visible = false;


        this.sprinkle = game.add.sprite(279.8,301.4,'sprinkle');
        this.sprinkle.anchor.setTo(0.5);
        this.sprinkle.visible = false;


        this.plate_group = game.add.group();

        this.pl_1 = game.add.sprite(70,670,'pl_1');
        this.pl_1.anchor.setTo(0.5);
        this.pl_1.scale.setTo(1.45);
        this.plate_group.add(this.pl_1);

        this.cake1 = game.add.sprite(55,640,'cake1');
        this.cake1.anchor.setTo(0.5);
        this.cake1.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

      this.cake1.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<430&& game.input.activePointer.y>275 && game.input.activePointer.y<520)){  
       this.cake1.visible = false;
       this.cake01.visible = true;

      this.arrow2.visible = false;
      game.time.events.add(1000,function(){
          game.add.tween(this.pl_1).to({x:-700},1000,Phaser.Easing.Quadratic.Out,true,700).onComplete.add(function(){
           game.add.tween(this.plate1_group).to({x:130},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            this.arrow1.visible = true;
            this.cake2.inputEnabled = true;
            this.cake2.input.useHandCursor = true;
            this.cake2.input.enableDrag();

           },this);
          },this);

      },this);
    
         
       
     }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.cake1).to({x:55,y:640},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        

        this.plate_group.add(this.cake1);
        this.plate_group.x= 700;

        this.plate1_group = game.add.group();

        this.pl_2 = game.add.sprite(130,710,'pl_2');
         this.pl_2.anchor.setTo(0.5);
        this.pl_2.scale.setTo(1.45)
       this.plate1_group.add(this.pl_2);

        this.cake2 = game.add.sprite(117,680,'cake2');
        this.cake2.anchor.setTo(0.5);
        this.cake2.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

         this.cake2.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<430&& game.input.activePointer.y>245 && game.input.activePointer.y<520)){  
    this.cake2.visible = false;
    this.cake02.visible = true;
      this.arrow2.visible = false;
      game.time.events.add(1000,function(){
          game.add.tween(this.pl_2).to({x:-700},1000,Phaser.Easing.Quadratic.Out,true,700).onComplete.add(function(){
           game.add.tween(this.plate2_group).to({x:130},1000,Phaser.Easing.Quadratic.Out,true,500).onComplete.add(function(){
            this.arrow1.visible = true;
            this.cake3.inputEnabled = true;
            this.cake3.input.useHandCursor = true;
            this.cake3.input.enableDrag();

           },this);
          },this);

      },this);
    
         
       
     }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.cake2).to({x:117,y:680},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        


        this.plate1_group.add(this.cake2);
        this.plate1_group.x=700;


          this.plate2_group = game.add.group();

        this.pl_3 = game.add.sprite(130,700,'pl_3');
        this.pl_3.anchor.setTo(0.5);
        this.pl_3.scale.setTo(1.45)
        this.plate2_group.add(this.pl_3);

        this.cake3 = game.add.sprite(125,675,'cake3');
        this.cake3.anchor.setTo(0.5);
          this.cake3.events.onInputDown.add(function(){
          this.arrow1.visible = false;
          this.arrow2.visible = true;

        },this);

         this.cake3.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<430&& game.input.activePointer.y>115 && game.input.activePointer.y<520)){  
    
    this.cake3.visible = false;
    this.cake03.visible = true;
      this.arrow2.visible = false;
      game.time.events.add(1000,function(){
          game.add.tween(this.pl_3).to({x:-700},1000,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
           game.add.tween(this.doll).to({x:220},1000,Phaser.Easing.Quadratic.Out,true,600).onComplete.add(function(){
            this.arrow1.visible = true;
            this.doll.inputEnabled = true;
            this.doll.input.useHandCursor = true;
            this.doll.input.enableDrag();

           },this);
          },this);

      },this);
    
         
       
     }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.cake3).to({x:125,y:675},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
        
        this.plate2_group.add(this.cake3);
        this.plate2_group.x=700;

       this.doll = game.add.sprite(230,650,'doll');
       this.doll.anchor.setTo(0.5);
       this.doll.events.onInputDown.add(function(){
        this.arrow1.visible = false;
        this.arrow2.visible = true;

       },this);

     this.doll.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<430&& game.input.activePointer.y>44 && game.input.activePointer.y<419)){  
  
    this.doll.visible = false;
     this.doll01.visible = true;
      this.arrow2.visible = false;

       game.add.tween(this.pl01_group).to({x:80},700,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
        this.arrow1.visible =true;
        this.strips.inputEnabled =true;
        this.strips.input.useHandCursor = true;
        this.strips.input.enableDrag();

       },this);

     
         
       
     }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.doll).to({x:230,y:650},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
       this.doll.x=700; 

       this.pl01_group = game.add.group();

       this.pl_01 = game.add.sprite(242,700,'pl_1');
       this.pl_01.anchor.setTo(0.5);
       this.pl_01.scale.setTo(1.15);
       this.pl01_group.add(this.pl_01);

       this.doll_animation = game.add.sprite(270,213,'new_doll');
       this.doll_animation.anchor.setTo(0.5);
       this.doll_animation.visible=false;

       this.strips = game.add.sprite(200,700,'strips');
       this.strips.anchor.setTo(0.5);
       this.strips.angle=90;
       this.strips.events.onInputDown.add(function(){
        this.arrow1.visible = false;
        this.arrow2.visible =true;
  
       },this);

  this.strips.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<430&& game.input.activePointer.y>44 && game.input.activePointer.y<419)){  
    
     this.strips.visible = false;
     this.doll_animation.visible = true;
       this.arrow2.visible = false;

        this.doll_animation.animations.add('doll_animation',[0,1,2,3,4,5,6,7]);
        this.doll_animation.animations.play('doll_animation',10,false).onComplete.add(function(){
          this.doll01.visible = false; 
          game.add.tween(this.pl_01).to({x:-700},700,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
  game.add.tween(this.pl02_group).to({x:80},700,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){
        this.arrow1.visible =true;
        this.strips01.inputEnabled =true;
        this.strips01.input.useHandCursor = true;
        this.strips01.input.enableDrag();

       },this);
        },this);
        },this);


      }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.strips).to({x:200,y:700},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
       this.pl01_group.add(this.strips);
       this.pl01_group.x=700;

          this.pl02_group = game.add.group();

       this.pl_02 = game.add.sprite(242,700,'pl_1');
       this.pl_02.anchor.setTo(0.5);
       this.pl_02.scale.setTo(1.15);
       this.pl02_group.add(this.pl_02);

    

       this.strips01 = game.add.sprite(200,700,'strips');
       this.strips01.anchor.setTo(0.5);
       this.strips01.angle=90;
       this.strips01.events.onInputDown.add(function(){
        this.arrow1.visible = false;
        this.arrow2.visible =true;

       },this);

  this.strips01.events.onInputUp.add(function(){
       
     if ((game.input.activePointer.x>0&& game.input.activePointer.x<430&& game.input.activePointer.y>44 && game.input.activePointer.y<419)){  
    
      this.strips01.visible = false;
       this.arrow2.visible = false;

        this.doll_animation.animations.add('doll_animation',[8,9,10,11,12,13,14,15,16,17,18]);
        this.doll_animation.animations.play('doll_animation',10,false).onComplete.add(function(){
          this.doll01.visible =false;
         
          game.add.tween(this.pl_02).to({x:-700},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
  game.add.tween(this.playbtn.scale).to({x:1,y:1},700,Phaser.Easing.Quadratic.Out,true)
 
        },this);
        },this);


      }else{

      this.arrow1.visible=true;
      this.arrow2.visible=false;
            
         game.add.tween(this.strips01).to({x:200,y:700},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
      
     

         
         },this);
         }
         },this);
       this.pl02_group.add(this.strips01);
       this.pl02_group.x=700;





        
      this.arrowgp = game.add.group();

         var arro2x = [228,246,430,37,459,41,449,410];
         var arro2y = [564,260,165,298,291,458,438,610];

         for(i=1;i<=8;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',15,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
            }
           if(i==2){
          this['arrow'+i].visible=false;
          }if(i==3){
          this['arrow'+i].visible=false;
          
          }if(i==4){
          this['arrow'+i].visible=false;
         

          }if(i==5){
          this['arrow'+i].visible=false;
         
          }if(i==6){
          this['arrow'+i].visible=false;
          
          }if(i==7){
          this['arrow'+i].visible=false;
         
          }
          if(i==8){
          this['arrow'+i].visible=false;
        }
          this.arrowgp.add(this['arrow'+i]);
          
         }

        
         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'done');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
             this.stand_group.x=500;
        
        game.add.tween(this.stand_group).to({x:0}, 1000, Phaser.Easing.Quadratic.Out, true,400).onComplete.add(function(){
           game.add.tween(this.plate_group).to({x:170},1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
            this.arrow1.visible=true;
            this.cake1.inputEnabled = true;
            this.cake1.input.useHandCursor = true;
            this.cake1.input.enableDrag();

          },this);
          },this);
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,-850,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         
          
         },this);
        }
        
        
         
     
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },

        update:function(){
             // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
         if(this.dummydrag){
            this.dummyobject.x=game.input.activePointer.x;
            this.dummyobject.y=game.input.activePointer.y;
         }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
    //YYGSDK.navigate("game","logo");
},
moreLink:function()
{
  //YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('cleanface');
         });
   
   },
}




// llllllllllll


Main.loons = function(){}

Main.loons.prototype = {
    create:function(){

      this.krdrag=false;
      this.lrdrag=false;

        this.levelGroup = game.add.group();


        this.mbg = game.add.sprite(0,0,'mbg');


        this.annabhair1=game.add.sprite(265,437,'annabhair1');
        this.annabhair1.anchor.setTo(0.5);

        this.body1=game.add.sprite(263,1060,'body1');
        this.body1.anchor.setTo(0.5);

        this.annacfdress1=game.add.sprite(256,1017,'annacfdress1');
        this.annacfdress1.anchor.setTo(0.5);

        this.annahead2=game.add.sprite(254,328,'annahead2');
        this.annahead2.anchor.setTo(0.5);

        this.vervai=game.add.sprite(254,341,'vervai');
        this.vervai.anchor.setTo(0.5);

        this.annahead3=game.add.sprite(254,328,'annahead3');
        this.annahead3.anchor.setTo(0.5);
        this.annahead3.visible=false;

        this.blush1=game.add.sprite(241,389,'blush1');
        this.blush1.anchor.setTo(0.5);

        this.annafhair1=game.add.sprite(265,437,'annafhair1');
        this.annafhair1.anchor.setTo(0.5);

         this.hairdust=game.add.sprite(260,350,'hairdust');
        this.hairdust.anchor.setTo(0.5);

        // this.annafgr1=game.add.sprite(101.5,463,'annafgr1');
        // this.annafgr1.anchor.setTo(0.5);


        this.cfcap12=game.add.sprite(260,320,'cfcap1');
        this.cfcap12.anchor.setTo(0.5);
        this.cfcap12.visible=false;

      

        this.m1_panel=game.add.sprite(251,728.05,'m1_panel');
        this.m1_panel.anchor.setTo(0.5);

    
 
////////////////////////////////////////////// hitsgroup /////////////////////////////////////////////

        // this.taval1=game.add.sprite(410,640,'taval1');
        // this.taval1.anchor.setTo(0.5);

        this.taval1=game.add.sprite(380,660,'taval1');
        this.taval1.anchor.setTo(0.5);
        this.taval1.inputEnabled=true;
        this.taval1.input.useHandCursor=true;
        this.taval1.input.pixelPerfectOver=true;
        this.taval1.input.pixelPerfectClick=true;
        this.taval1.events.onInputDown.add(function(){
          game.add.world.bringToTop(this.taval1);
          this.arrow1.visible=false;
          this.arrow2.visible=true;
           this.taval1.inputEnabled=false;
           this.taval1.loadTexture('taval2');
          this.krdrag=true;
        },this);

          this.hitGroup11 = game.add.group();
          for(var i=0; i<=Main.tool11X.length-1; i++)
              {
          this["hitCircle_k"+i] = game.add.graphics(Main.tool11X[i],Main.tool11Y[i]);
          this["hitCircle_k"+i].beginFill(0x000000,0);
          this["hitCircle_k"+i].drawCircle(0,0,20);
          this["hitCircle_k"+i].id = i;
          this.hitGroup11.add(this["hitCircle_k"+i]);
          game.physics.arcade.enable([this["hitCircle_k"+i]]);
          this["hitCircle_k"+i].body.collideWorldBounds = true;
                }
         
 

          this.cragCircla11 = game.add.graphics(0,0);
          this.cragCircla11.beginFill(0x000000, 0);
          this.cragCircla11.drawCircle(0,0,40);
          this.cragCircla11.endFill();

          this.hitSpritea11_cnt = 0;

          game.physics.arcade.enable([this.cragCircla11]);  
          this.cragCircla11.body.collideWorldBounds = true;
          this.cragCircla11.body.onCollide = new Phaser.Signal();
          this.cragCircla11.body.onCollide.add(this.hitSprite11, this);

     /////////////////////////////////////////////////////////////////////////////////////////


        ///// this.comb=game.add.sprite(420,690,'comb');
        ///// this.comb.anchor.setTo(0.5);

        this.comb=game.add.sprite(200,650,'comb');
        this.comb.anchor.setTo(0.5);
        // this.comb.inputEnabled=true;
        // this.comb.input.useHandCursor=true;
        this.comb.events.onInputDown.add(function(){
          this.arrow3.visible=false;
          this.arrow4.visible=true;
          this.comb.inputEnabled=false;
          this.lrdrag=true;

        },this);
        
        this.hitGroup12 = game.add.group();
          for(var i=0; i<=Main.tool12X.length-1; i++)
              {
          this["hitCircle_l"+i] = game.add.graphics(Main.tool12X[i],Main.tool12Y[i]);
          this["hitCircle_l"+i].beginFill(0x000000,0);
          this["hitCircle_l"+i].drawCircle(0,0,60);
          this["hitCircle_l"+i].id = i;
          this.hitGroup12.add(this["hitCircle_l"+i]);
          game.physics.arcade.enable([this["hitCircle_l"+i]]);
          this["hitCircle_l"+i].body.collideWorldBounds = true;
                }
         
 

          this.cragCircla12 = game.add.graphics(0,0);
          this.cragCircla12.beginFill(0x000000, 0);
          this.cragCircla12.drawCircle(0,0,40);
          this.cragCircla12.endFill();

          this.hitSpritea12_cnt = 0;

          game.physics.arcade.enable([this.cragCircla12]);  
          this.cragCircla12.body.collideWorldBounds = true;
          this.cragCircla12.body.onCollide = new Phaser.Signal();
          this.cragCircla12.body.onCollide.add(this.hitSprite12, this);


 
   
        ///////////////////////////////////////////////////


         this.arrowgp = game.add.group();

                      //1   2   3   4   5   6    7   8   9  10  11  12  13   14  15  16  17  18  19  20  21 22  23  24  25;

         var arro2x = [390,250,200,250,180,180, 245, 240,100, 240,430,250,410,400,190,300,450,300,190,300,320,380];
         var arro2y = [590,210,600,170,520,490, 170,580,580,580,580,210,590,350,610,240,520,240,610,240,640,390];

         for(i=1;i<=25;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',20,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=true;
          }
          if(i==2){
          this['arrow'+i].visible=false;
          }
            if(i==3){
          this['arrow'+i].visible=false;
          }
            if(i==4){
          this['arrow'+i].visible=false;
          }
            if(i==5){
          this['arrow'+i].visible=false;
          }
            if(i==6){
          this['arrow'+i].visible=false;
          }
            if(i==7){
          this['arrow'+i].visible=false;
          }
            if(i==8){
          this['arrow'+i].visible=false;
          }
            if(i==9){
          this['arrow'+i].visible=false;
          }

           if(i==10){
          this['arrow'+i].visible=false;
          }
            if(i==11){
          this['arrow'+i].visible=false;
          }
            if(i==12){
          this['arrow'+i].visible=false;
          }
            if(i==13){
          this['arrow'+i].visible=false;
          }
            if(i==14){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=1.7;
          }
            if(i==15){
          this['arrow'+i].visible=false;
          }
            if(i==16){
          this['arrow'+i].visible=false;
          }
            if(i==17){
          this['arrow'+i].visible=false;
          }
            if(i==18){
          this['arrow'+i].visible=false;
          }
            if(i==19){
          this['arrow'+i].visible=false;
          }
            if(i==20){
          this['arrow'+i].visible=false;
          }
           if(i==21){
          this['arrow'+i].visible=false;
          }
           if(i==22){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=1.7;
          }
          if(i==23){
          this['arrow'+i].visible=false;
          }
          if(i==24){
          this['arrow'+i].visible=false;
          }
          if(i==25){
          this['arrow'+i].visible=false;
          }

          this.arrowgp.add(this['arrow'+i]);
          
         }



         this.morebtn = game.add.sprite(85,735,'more');
         this.morebtn.anchor.setTo(0.5);
         // this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,735,'done');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },

  /////////////////////////// hitsprite ///////////////////////////////////////////////////////////////////


   hitSprite11:function(sprite1, sprite2){
          // console.log(this.hitSpritea11_cnt);
          sprite2.kill();
          this.hitSpritea11_cnt ++
          this.arrow2.visible=false;
         
            
          if (this.hitSpritea11_cnt >=20) {

           game.add.tween(this.blush1).to({alpha:0},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.krdrag=false;
          this.vervai.visible=false;
      game.add.tween(this.taval1).to({alpha:0},400,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        this.arrow3.visible=true;
        this.comb.inputEnabled=true;
         this.comb.input.useHandCursor=true;

          },this); 
          },this);
   
    }
            // this.circle11.drawCircle(Main.tool11X[sprite2.id],Main.tool11Y[sprite2.id],40);

        }, 
  /////////////////////////////////////////////

   hitSprite12:function(sprite1, sprite2){
          // console.log(this.hitSpritea11_cnt);
          sprite2.kill();
          this.hitSpritea12_cnt ++
          this.arrow4.visible=false;
            
          if (this.hitSpritea12_cnt >=16) {
          	 game.add.tween(this.comb).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true);
            game.add.tween(this.hairdust).to({y:375},1000,Phaser.Easing.Quadratic.Out,true);
            game.add.tween(this.hairdust).to({alpha:0},1500,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
           this.lrdrag=false; 
               this.annahead2.loadTexture('annahead3');
               game.add.tween(this.playbtn.scale).to({x:1,y:1},700,Phaser.Easing.Quadratic.Out,true);

         
          },this);   
   
    }
            // this.circle12.drawCircle(Main.tool12X[sprite2.id],Main.tool12Y[sprite2.id],60);

        }, 

 
 
       //uuuuuuuu

 update:function(){

  // console.log(game.input.activePointer.x+"::::::::"+game.input.activePointer.y);
//r11
  if(this.krdrag) {

              this.taval1.x = game.input.activePointer.x;
              this.taval1.y = game.input.activePointer.y+50;

              this.cragCircla11.x = this.game.input.activePointer.x;
              this.cragCircla11.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool11X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla11, this['hitCircle_k'+i]);
                }
            }

//r12
        if(this.lrdrag) {

              this.comb.x = game.input.activePointer.x;
              this.comb.y = game.input.activePointer.y;

              this.cragCircla12.x = this.game.input.activePointer.x;
              this.cragCircla12.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool12X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla12, this['hitCircle_l'+i]);
                }
            }

 },

openLink:function()
{
  //YYGSDK.navigate("game","logo");
},
moreLink:function()
{
   //YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
  MyShowAD('cooking_1');
         });
   
   },
}




//makeup1


Main.makeup1 = function(){}

Main.makeup1.prototype = {
    create:function(){
        this.levelGroup = game.add.group();


        this.mbg = game.add.sprite(0,0,'mbg');


        this.annabhair1=game.add.sprite(255,428,'annabhair1');
        this.annabhair1.anchor.setTo(0.5);

        this.body1=game.add.sprite(254,1070,'body1');
        this.body1.anchor.setTo(0.5);

        this.annacfdress1=game.add.sprite(248,1025,'annacfdress1');
        this.annacfdress1.anchor.setTo(0.5);

        this.annaemtyface=game.add.sprite(245,325.5,'annaemtyface');
        this.annaemtyface.anchor.setTo(0.5);

       

         // this.annafgr1=game.add.sprite(101.5,468,'annafgr1');
        // this.annafgr1=game.add.sprite(254,1070,'annafgr1');
        // this.annafgr1.anchor.setTo(0.5);

        this.cfcap1=game.add.sprite(217,149,'cfcap1');
        this.cfcap1.anchor.setTo(0.5);
        this.cfcap1.visible=false;

        this.blush1=game.add.sprite(241,389,'blush1');
        this.blush1.anchor.setTo(0.5);
        this.blush1.visible=false;

        this.lip1=game.add.sprite(238.5,410.5,'lip1');
        this.lip1.anchor.setTo(0.5);

        this.lip2=game.add.sprite(238.5,410.5,'lip2');
        this.lip2.anchor.setTo(0.5);
        this.lip2.visible=false;

        this.emtyeyeshade=game.add.sprite(240,334,'emtyeyeshade');
        this.emtyeyeshade.anchor.setTo(0.5);

        this.eyeshade1=game.add.sprite(244.5,325,'eyeshade1');
        this.eyeshade1.anchor.setTo(0.5);
        this.eyeshade1.visible=false;

        this.eye10001=game.add.sprite(239.5,338.5,'eye10001');
        this.eye10001.anchor.setTo(0.5);


        this.eye10002=game.add.sprite(239.5,338.5,'eye10002');
        this.eye10002.anchor.setTo(0.5);
        this.eye10002.visible=false;

        this.eyebrow10001=game.add.sprite(240,303,'eyebrow10001');
        this.eyebrow10001.anchor.setTo(0.5);
        this.eyebrow10001.visible=true;

        this.eyebrow10002=game.add.sprite(240,303,'eyebrow10002');
        this.eyebrow10002.anchor.setTo(0.5);
        this.eyebrow10002.visible=false;

        this.eyeblink1=game.add.sprite(240.5,335,'eyeblink1');
        this.eyeblink1.anchor.setTo(0.5);

        this.annafhair1=game.add.sprite(254,435,'annafhair1');
        this.annafhair1.anchor.setTo(0.5);

        this.m1_panel=game.add.sprite(251,728.05,'m1_panel');
        this.m1_panel.anchor.setTo(0.5);

      

        this.blushbox=game.add.sprite(55,594.4,'blushbox');
        this.blushbox.anchor.setTo(0.5);


        this.eyeshadowbox=game.add.sprite(235.4,600.8,'eyeshadowbox');
        this.eyeshadowbox.anchor.setTo(0.5);
          this.brdrag=false;
/////////////////////////////////////////////////////////////////////////////////////////////////////


//
////////////////////////////////////////////////////////////////////////

        this.lipstick=game.add.sprite(343.8,587.65,'lipstick');
        this.lipstick.anchor.setTo(0.5);
        // this.lipstick.inputEnabled=true;
        // this.lipstick.input.useHandCursor=true;
        this.lipstick.events.onInputDown.add(function(){
        	game.world.bringToTop(this.lipstick);
        	game.world.bringToTop(this.arrowgp);

          this.arrow5.visible=false;
          this.arrow6.visible=true;
          this.crdrag=true;
        },this);

        this.hitGroup3 = game.add.group();
          for(var i=0; i<=Main.tool3X.length-1; i++)
              {
          this["hitCircle_c"+i] = game.add.graphics(Main.tool3X[i],Main.tool3Y[i]);
          this["hitCircle_c"+i].beginFill(0x000000,0);
          this["hitCircle_c"+i].drawCircle(0,0,20);
          this["hitCircle_c"+i].id = i;
          this.hitGroup3.add(this["hitCircle_c"+i]);
          game.physics.arcade.enable([this["hitCircle_c"+i]]);
          this["hitCircle_c"+i].body.collideWorldBounds = true;
                }
         

          this.circleGroup3 = game.add.group();
          this.circle3 = game.add.graphics(0,0);
          this.circle3.beginFill(0x000000,0);
          this.circleGroup3.add(this.circle3);
          this.lip2.mask = this.circle3;

          this.cragCircla3 = game.add.graphics(0,0);
          this.cragCircla3.beginFill(0x000000, 0);
          this.cragCircla3.drawCircle(0,0,30);
          this.cragCircla3.endFill();

          this.hitSpritea3_cnt = 0;

          game.physics.arcade.enable([this.cragCircla3]);  
          this.cragCircla3.body.collideWorldBounds = true;
          this.cragCircla3.body.onCollide = new Phaser.Signal();
          this.cragCircla3.body.onCollide.add(this.hitSprite3, this);


/////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
        this.eye_brush=game.add.sprite(288.6,599.85,'eyeshadowbrush');
        this.eye_brush.anchor.setTo(0.5);
        // this.eye_brush.inputEnabled=true;
        // this.eye_brush.input.useHandCursor=true;
        this.eye_brush.events.onInputDown.add(function(){
        	game.world.bringToTop(this.eye_brush);

          this.arrow3.visible=false;
          this.arrow4.visible=true;
        this.eye_brush.inputEnabled=false;
          this.brdrag=true;
        },this);

         this.hitGroup2 = game.add.group();
          for(var i=0; i<=Main.tool2X.length-1; i++)
              {
          this["hitCircle_b"+i] = game.add.graphics(Main.tool2X[i],Main.tool2Y[i]);
          this["hitCircle_b"+i].beginFill(0x000000,0);
          this["hitCircle_b"+i].drawCircle(0,0,20);
          this["hitCircle_b"+i].id = i;
          this.hitGroup2.add(this["hitCircle_b"+i]);
          game.physics.arcade.enable([this["hitCircle_b"+i]]);
          this["hitCircle_b"+i].body.collideWorldBounds = true;
                }
         

          this.circleGroup2 = game.add.group();
          this.circle2 = game.add.graphics(0,0);
          this.circle2.beginFill(0x000000,0);
          this.circleGroup2.add(this.circle2);
          this.eyeshade1.mask = this.circle2;

          this.cragCircla2 = game.add.graphics(0,0);
          this.cragCircla2.beginFill(0x000000, 0);
          this.cragCircla2.drawCircle(0,0,30);
          this.cragCircla2.endFill();

          this.hitSpritea2_cnt = 0;

          game.physics.arcade.enable([this.cragCircla2]);  
          this.cragCircla2.body.collideWorldBounds = true;
          this.cragCircla2.body.onCollide = new Phaser.Signal();
          this.cragCircla2.body.onCollide.add(this.hitSprite2, this);


     ///////////////////////////////////////////////////////////////////////////////////////////////
        this.blushbrush=game.add.sprite(113.45,610.2,'blushbrush');
        this.blushbrush.anchor.setTo(0.5);
        this.blushbrush.inputEnabled=true;
        this.blushbrush.input.useHandCursor=true;
        this.blushbrush.events.onInputDown.add(function(){
        	game.world.bringToTop(this.blushbrush);

          this.arrow1.visible=false;
          this.arrow2.visible=true;
        this.ardrag=true;

        },this);


        this.hitGroup1 = game.add.group();
          for(var i=0; i<=Main.tool1X.length-1; i++)
              {
          this["hitCircle_a"+i] = game.add.graphics(Main.tool1X[i],Main.tool1Y[i]);
          this["hitCircle_a"+i].beginFill(0x000000,0);
          this["hitCircle_a"+i].drawCircle(0,0,30);
          this["hitCircle_a"+i].id = i;
          this.hitGroup1.add(this["hitCircle_a"+i]);
          game.physics.arcade.enable([this["hitCircle_a"+i]]);
          this["hitCircle_a"+i].body.collideWorldBounds = true;
                }
         

          this.circleGroup1 = game.add.group();
          this.circle1 = game.add.graphics(0,0);
          this.circle1.beginFill(0x000000,0);
          this.circleGroup1.add(this.circle1);
          this.blush1.mask = this.circle1;

          this.cragCircla1 = game.add.graphics(0,0);
          this.cragCircla1.beginFill(0x000000, 0);
          this.cragCircla1.drawCircle(0,0,30);
          this.cragCircla1.endFill();

          this.hitSpritea1_cnt = 0;

          game.physics.arcade.enable([this.cragCircla1]);  
          this.cragCircla1.body.collideWorldBounds = true;
          this.cragCircla1.body.onCollide = new Phaser.Signal();
          this.cragCircla1.body.onCollide.add(this.hitSprite1, this);


 ////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////



        this.eyegrp=game.add.sprite(446.5,623.1,'eyegrp');
        this.eyegrp.anchor.setTo(0.5);
        // this.eyegrp.inputEnabled=true;
        // this.eyegrp.input.useHandCursor=true;
        this.eyegrp.events.onInputDown.add(function(){
          this.arrow7.visible=false;
          this.arrow8.visible=true;
          this.eye10001.loadTexture('eye10002');
           this.eyebrowpencil.inputEnabled=true;
            this.eyebrowpencil.input.useHandCursor=true;
        },this);


        this.eyebrowpencil=game.add.sprite(341.55,681.4,'eyebrowpencil');
        this.eyebrowpencil.anchor.setTo(0.5);
        // this.eyebrowpencil.inputEnabled=true;
        // this.eyebrowpencil.input.useHandCursor=true;
        this.eyebrowpencil.events.onInputDown.add(function(){
        	game.world.bringToTop(this.eyebrowpencil);
        	game.world.bringToTop(this.playbtn);
        	game.world.bringToTop(this.musicButton);
        	game.world.bringToTop(this.logoVar);
        	game.world.bringToTop(this.shutter);

          this.arrow8.visible=false;
          this.arrow9.visible=true;
          this.drdrag=true;
        },this);



          this.hitGroup4 = game.add.group();
          for(var i=0; i<=Main.tool4X.length-1; i++)
              {
          this["hitCircle_d"+i] = game.add.graphics(Main.tool4X[i],Main.tool4Y[i]);
          this["hitCircle_d"+i].beginFill(0x000000,0);
          this["hitCircle_d"+i].drawCircle(0,0,40);
          this["hitCircle_d"+i].id = i;
          this.hitGroup4.add(this["hitCircle_d"+i]);
          game.physics.arcade.enable([this["hitCircle_d"+i]]);
          this["hitCircle_d"+i].body.collideWorldBounds = true;
                }
         

          this.circleGroup4 = game.add.group();
          this.circle4 = game.add.graphics(0,0);
          this.circle4.beginFill(0x000000,0);
          this.circleGroup4.add(this.circle4);
          this.eyebrow10002.mask = this.circle4;

          this.cragCircla4 = game.add.graphics(0,0);
          this.cragCircla4.beginFill(0x000000, 0);
          this.cragCircla4.drawCircle(0,0,40);
          this.cragCircla4.endFill();

          this.hitSpritea4_cnt = 0;

          game.physics.arcade.enable([this.cragCircla4]);  
          this.cragCircla4.body.collideWorldBounds = true;
          this.cragCircla4.body.onCollide = new Phaser.Signal();
          this.cragCircla4.body.onCollide.add(this.hitSprite4, this);


     /////////////////////////////////////////////////////////////////////////////////////////

 ///Mark

        // this.mcnt1=0;
        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0.1);
        // this.mcir.drawRect(0,0,504,800);
        // this.mcir.inputEnabled=true;
        // this.mcir.events.onInputDown.add(function(){
        //   this.mcnt1++;
        //   this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        //   this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        // this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        // this.mcir.beginFill(0x000000,0.5);
        // this.mcir.drawCircle(0,0,30);
        // console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        // // console.log(this['ycnt'+this.mcnt1]);
        // },this);
   
        ///////////////////////////////////////////////////


         this.arrowgp = game.add.group();

                      //1   2   3   4   5   6   7   8   9   10 11  12  13   14  15  16  17  18  19  20  21 22  23  24  25;

         var arro2x = [110,140,285,120,340,305,440,360,130,300,410,185,410,400,190,300,450,300,190,300,320,380];
         var arro2y = [530,380,524,320,490,410,570,630,295,240,590,350,590,350,610,240,520,240,610,240,640,390];

         for(i=1;i<=25;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',20,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=true;
          }
          if(i==2){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=-1.5;
          }
            if(i==3){
          this['arrow'+i].visible=false;
          }
            if(i==4){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=-1.5;
          }
            if(i==5){
          this['arrow'+i].visible=false;
          }
            if(i==6){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=1.7;
          }
            if(i==7){
          this['arrow'+i].visible=false;
          }
            if(i==8){
          this['arrow'+i].visible=false;
          }
            if(i==9){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=-1.5;
          }

           if(i==10){
          this['arrow'+i].visible=false;
          }
            if(i==11){
          this['arrow'+i].visible=false;
          }
            if(i==12){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=-1.5;
          }
            if(i==13){
          this['arrow'+i].visible=false;
          }
            if(i==14){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=1.7;
          }
            if(i==15){
          this['arrow'+i].visible=false;
          }
            if(i==16){
          this['arrow'+i].visible=false;
          }
            if(i==17){
          this['arrow'+i].visible=false;
          }
            if(i==18){
          this['arrow'+i].visible=false;
          }
            if(i==19){
          this['arrow'+i].visible=false;
          }
            if(i==20){
          this['arrow'+i].visible=false;
          }
           if(i==21){
          this['arrow'+i].visible=false;
          }
           if(i==22){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=1.7;
          }
          if(i==23){
          this['arrow'+i].visible=false;
          }
          if(i==24){
          this['arrow'+i].visible=false;
          }
          if(i==25){
          this['arrow'+i].visible=false;
          }

          this.arrowgp.add(this['arrow'+i]);
          
         }



         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         // this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'done');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },

    
///////////////////////////////////////////////// hitspritesssssss ///////////////////////////////////////////////////////////////

         hitSprite1:function(sprite1, sprite2){
          // console.log(this.hitSpritea1_cnt);
          sprite2.kill();
          this.hitSpritea1_cnt ++
          this.blush1.visible=true;
          this.arrow2.visible=false;
            
          if (this.hitSpritea1_cnt >=15) {
          this.ardrag=false; 
        game.add.tween(this.blushbrush).to({x:113.45,y:610.2},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.arrow3.visible=true;
          this.blushbrush.inputEnabled=false;
          this.eye_brush.inputEnabled=true;
            this.eye_brush.input.useHandCursor=true;

        },this);

   
    }
            this.circle1.drawCircle(Main.tool1X[sprite2.id],Main.tool1Y[sprite2.id],30);

        }, 

/////////////////////////////////////////////////////////////////

        hitSprite2:function(sprite1, sprite2){
          // console.log(this.hitSpritea2_cnt);
          sprite2.kill();
          this.hitSpritea2_cnt ++
          this.eyeshade1.visible=true;
          this.arrow4.visible=false;
            
          if (this.hitSpritea2_cnt >=11) {
          this.brdrag=false; 
           game.add.tween(this.eye_brush).to({x:288.6,y:599.85},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
           this.arrow5.visible=true;
             this.lipstick.inputEnabled=true;
            this.lipstick.input.useHandCursor=true; 
             
   },this);
    }
            this.circle2.drawCircle(Main.tool2X[sprite2.id],Main.tool2Y[sprite2.id],20);

        },
 ////////////////////////////////////////////////////////////////

  hitSprite3:function(sprite1, sprite2){
          // console.log(this.hitSpritea3_cnt);
          sprite2.kill();
          this.hitSpritea3_cnt ++
          this.lip2.visible=true;
          this.arrow6.visible=false;
            
          if (this.hitSpritea3_cnt >=8) {
          this.crdrag=false; 
           game.add.tween(this.lipstick).to({x:343.8,y:587.65},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){ 
            this.arrow7.visible=true;
            this.lipstick.inputEnabled=false;
             this.eyegrp.inputEnabled=true;
            this.eyegrp.input.useHandCursor=true;
             
   },this); 
             
   
    }
            this.circle3.drawCircle(Main.tool3X[sprite2.id],Main.tool3Y[sprite2.id],20);

        }, 

 //////////////////////////////////////////////////////////////////

    hitSprite4:function(sprite1, sprite2){
          // console.log(this.hitSpritea4_cnt);
          sprite2.kill();
          this.hitSpritea4_cnt ++
          this.eyebrow10002.visible=true;
          
          this.arrow9.visible=false;
            
          if (this.hitSpritea4_cnt >=15) { 
          this.drdrag=false; 
          this.eyebrow10001.visible=false;
           game.add.tween(this.eyebrowpencil).to({x:341.55,y:681.4},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            this.eyebrowpencil.inputEnabled=false;
              game.add.tween(this.playbtn.scale).to({x:1,y:1},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            
          },this);
          

           },this);
             
   
    }
            this.circle4.drawCircle(Main.tool4X[sprite2.id],Main.tool4Y[sprite2.id],45);

        }, 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

         ///uuuuuuuuuuuuuuuuuuuuuuu

 update:function(){
      // console.log(game.input.activePointer.x+"::::::::"+game.input.activePointer.y);

       //drag_grp

       //r1

        if(this.ardrag) {

              this.blushbrush.x = game.input.activePointer.x;
              this.blushbrush.y = game.input.activePointer.y;

              this.cragCircla1.x = this.game.input.activePointer.x;
              this.cragCircla1.y = this.game.input.activePointer.y-35;
     
       for(var i=0;i<=Main.tool1X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla1, this['hitCircle_a'+i]);
                }
            }

            //r2

            if(this.brdrag) {


              this.eye_brush.x = game.input.activePointer.x;
              this.eye_brush.y = game.input.activePointer.y+50;

              this.cragCircla2.x = this.game.input.activePointer.x;
              this.cragCircla2.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool2X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla2, this['hitCircle_b'+i]);
                }


            }

            //r3


        if(this.crdrag) {

              this.lipstick.x = game.input.activePointer.x;
              this.lipstick.y = game.input.activePointer.y+50;

              this.cragCircla3.x = this.game.input.activePointer.x;
              this.cragCircla3.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool3X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla3, this['hitCircle_c'+i]);
                }
            }

            //r4

             if(this.drdrag) {

              this.eyebrowpencil.x = game.input.activePointer.x-95;
              this.eyebrowpencil.y = game.input.activePointer.y;

              this.cragCircla4.x = this.game.input.activePointer.x;
              this.cragCircla4.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool4X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla4, this['hitCircle_d'+i]);
                }
            }




         },
openLink:function()
{
  //YYGSDK.navigate("game","logo");
},
moreLink:function()
{
 //  YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('annadressup');
         });
   
   },
}

// cleanface_proto


Main.cleanface = function(){}

Main.cleanface.prototype = {
    create:function(){
        this.levelGroup = game.add.group();


        this.mbg = game.add.sprite(0,0,'mbg');


        this.annabhair1=game.add.sprite(265,437,'annabhair1');
        this.annabhair1.anchor.setTo(0.5);

        this.body1=game.add.sprite(263,1060,'body1');
        this.body1.anchor.setTo(0.5);

        this.annacfdress1=game.add.sprite(256,1017,'annacfdress1');
        this.annacfdress1.anchor.setTo(0.5);

        this.annahead3=game.add.sprite(254,328,'annahead3');
        this.annahead3.anchor.setTo(0.5);

        

/////////////////////////////////////////////////////////////////////////////////////////////////

        this.watermask=game.add.sprite(254,334,'watermask');
        this.watermask.anchor.setTo(0.5);
        this.watermask.visible=false;

        this.watermask222=game.add.sprite(254,334,'watermask');
        this.watermask222.anchor.setTo(0.5);
        this.watermask222.visible=false;


        this.bublemask=game.add.sprite(250,333,'bublemask');
        this.bublemask.anchor.setTo(0.5);
        this.bublemask.visible=false;

        this.gmask=game.add.sprite(252,350,'gmask');
        this.gmask.anchor.setTo(0.5);
        this.gmask.visible=false;

        this.annafhair1=game.add.sprite(265,437,'annafhair1');
        this.annafhair1.anchor.setTo(0.5);

        // this.annafgr1_1=game.add.sprite(263,1060,'annafgr1');
        // this.annafgr1_1.anchor.setTo(0.5);

        this.cfcap1=game.add.sprite(217,149,'cfcap1');
        this.cfcap1.anchor.setTo(0.5);
        this.cfcap1.visible=false;

 /////////////////////////////////// hitgroups ////////////////////////////////////////////////////////

        this.m1_panel=game.add.sprite(251,728.05,'m1_panel');
        this.m1_panel.anchor.setTo(0.5);

        this.m2maskcream=game.add.sprite(82.5,624.15,'m2maskcream');
        this.m2maskcream.anchor.setTo(0.5);

        this.t_timer=game.add.sprite(-90,150,'t_timer');
        this.t_timer.anchor.setTo(0.5);

  //////////////////////////////////////////////////////////////////////////////////////////////////////

        this.m1shawer10002=game.add.sprite(300,600,'m1shawer10002');
        this.m1shawer10002.anchor.setTo(0.5);
        this.m1shawer10002.inputEnabled=true;
        this.m1shawer10002.input.useHandCursor=true;
        this.m1shawer10002.input.enableDrag();
        this.m1shawer10002.events.onInputDown.add(function(){
        	game.world.bringToTop(this.m1shawer10002);
          this.m1shawer10002.inputEnabled=false;
          this.arrow1.visible=false;
          this.arrow2.visible=true;
          this.erdrag=true;
        },this);


           this.hitGroup5 = game.add.group();
          for(var i=0; i<=Main.tool5X.length-1; i++)
              {
          this["hitCircle_e"+i] = game.add.graphics(Main.tool5X[i],Main.tool5Y[i]);
          this["hitCircle_e"+i].beginFill(0x000000,0);
          this["hitCircle_e"+i].drawCircle(0,0,40);
          this["hitCircle_e"+i].id = i;
          this.hitGroup5.add(this["hitCircle_e"+i]);
          game.physics.arcade.enable([this["hitCircle_e"+i]]);
          this["hitCircle_e"+i].body.collideWorldBounds = true;
                }
         

          this.circleGroup5 = game.add.group();
          this.circle5 = game.add.graphics(0,0);
          this.circle5.beginFill(0x000000,0);
          this.circleGroup5.add(this.circle5);
          this.watermask.mask = this.circle5;

          this.cragCircla5 = game.add.graphics(0,0);
          this.cragCircla5.beginFill(0x000000, 0);
          this.cragCircla5.drawCircle(0,0,50);
          this.cragCircla5.endFill();

          this.hitSpritea5_cnt = 0;

          game.physics.arcade.enable([this.cragCircla5]);  
          this.cragCircla5.body.collideWorldBounds = true;
          this.cragCircla5.body.onCollide = new Phaser.Signal();
          this.cragCircla5.body.onCollide.add(this.hitSprite5, this);


//////////////////////////////////////////////////////////////////////////////////////////////////////

        this.soef=game.add.sprite(206,628,'soef');
        this.soef.anchor.setTo(0.5);
        // this.soef.inputEnabled=true;
        // this.soef.input.useHandCursor=true;
        this.soef.events.onInputDown.add(function(){
        	game.world.bringToTop(this.soef);

          this.soef.inputEnabled=false;
          this.arrow3.visible=false;
          this.arrow4.visible=true;
         this.frdrag=true;
        },this);

          this.hitGroup6 = game.add.group();
          for(var i=0; i<=Main.tool6X.length-1; i++)
              {
          this["hitCircle_f"+i] = game.add.graphics(Main.tool6X[i],Main.tool6Y[i]);
          this["hitCircle_f"+i].beginFill(0x000000,0);
          this["hitCircle_f"+i].drawCircle(0,0,60);
          this["hitCircle_f"+i].id = i;
          this.hitGroup6.add(this["hitCircle_f"+i]);
          game.physics.arcade.enable([this["hitCircle_f"+i]]);
          this["hitCircle_f"+i].body.collideWorldBounds = true;
                }
         

          this.circleGroup6 = game.add.group();
          this.circle6 = game.add.graphics(0,0);
          this.circle6.beginFill(0x000000,0);
          this.circleGroup6.add(this.circle6);
          this.bublemask.mask = this.circle6;

          this.cragCircla6 = game.add.graphics(0,0);
          this.cragCircla6.beginFill(0x000000, 0);
          this.cragCircla6.drawCircle(0,0,25);
          this.cragCircla6.endFill();

          this.hitSpritea6_cnt = 0;

          game.physics.arcade.enable([this.cragCircla6]);  
          this.cragCircla6.body.collideWorldBounds = true;
          this.cragCircla6.body.onCollide = new Phaser.Signal();
          this.cragCircla6.body.onCollide.add(this.hitSprite6, this);

  

          
///////////////////////////////////////////////////////////////////////////////////////


        this.m1shawer1000222=game.add.sprite(300,600,'m1shawer10002');
        this.m1shawer1000222.anchor.setTo(0.5);
        // this.m1shawer1000222.inputEnabled=true;
        // this.m1shawer1000222.input.useHandCursor=true;
        this.m1shawer1000222.events.onInputDown.add(function(){
        	game.world.bringToTop(this.m1shawer1000222);

       this.arrow5.visible=false;
       this.arrow6.visible=true;
        this.m1shawer1000222.inputEnabled=false;
          this.grdrag=true;
        },this);
        this.m1shawer1000222.visible=false;

        this.hitGroup7 = game.add.group();
          for(var i=0; i<=Main.tool7X.length-1; i++)
              {
          this["hitCircle_g"+i] = game.add.graphics(Main.tool7X[i],Main.tool7Y[i]);
          this["hitCircle_g"+i].beginFill(0x000000,0);
          this["hitCircle_g"+i].drawCircle(0,0,60);
          this["hitCircle_g"+i].id = i;
          this.hitGroup7.add(this["hitCircle_g"+i]);
          game.physics.arcade.enable([this["hitCircle_g"+i]]);
          this["hitCircle_g"+i].body.collideWorldBounds = true;
                }
         

          this.circleGroup7 = game.add.group();
          this.circle7 = game.add.graphics(0,0);
          this.circle7.beginFill(0x000000,0);
          this.circleGroup7.add(this.circle7);
          this.watermask222.mask = this.circle7;

          this.cragCircla7 = game.add.graphics(0,0);
          this.cragCircla7.beginFill(0x000000, 0);
          this.cragCircla7.drawCircle(0,0,40);
          this.cragCircla7.endFill();

          this.hitSpritea7_cnt = 0;

          game.physics.arcade.enable([this.cragCircla7]);  
          this.cragCircla7.body.collideWorldBounds = true;
          this.cragCircla7.body.onCollide = new Phaser.Signal();
          this.cragCircla7.body.onCollide.add(this.hitSprite7, this);



///////////////////////////////////////////////////////////////////////////////////////


        this.taval1=game.add.sprite(437,650,'taval1');
        this.taval1.anchor.setTo(0.5);
        // this.taval1.inputEnabled=true;
        // this.taval1.input.useHandCursor=true;
        this.taval1.events.onInputDown.add(function(){
        	game.world.bringToTop(this.taval1);

            this.arrow7.visible=false;
            this.arrow8.visible=true;
        this.taval1.inputEnabled=false;
        this.taval1.loadTexture('taval2');
        this.hrdrag=true;
        },this);

        this.hitGroup8 = game.add.group();
          for(var i=0; i<=Main.tool8X.length-1; i++)
              {
          this["hitCircle_h"+i] = game.add.graphics(Main.tool8X[i],Main.tool8Y[i]);
          this["hitCircle_h"+i].beginFill(0x000000,0);
          this["hitCircle_h"+i].drawCircle(0,0,60);
          this["hitCircle_h"+i].id = i;
          this.hitGroup8.add(this["hitCircle_h"+i]);
          game.physics.arcade.enable([this["hitCircle_h"+i]]);
          this["hitCircle_h"+i].body.collideWorldBounds = true;
                }
         


          this.cragCircla8 = game.add.graphics(0,0);
          this.cragCircla8.beginFill(0x000000, 0);
          this.cragCircla8.drawCircle(0,0,40);
          this.cragCircla8.endFill();

          this.hitSpritea8_cnt = 0;

          game.physics.arcade.enable([this.cragCircla8]);  
          this.cragCircla8.body.collideWorldBounds = true;
          this.cragCircla8.body.onCollide = new Phaser.Signal();
          this.cragCircla8.body.onCollide.add(this.hitSprite8, this);

 /////////////////////////////////////////////////////////////////////////////////////////


        this.m2cbreash=game.add.sprite(114.5,633.45,'m2cbreash');
        this.m2cbreash.anchor.setTo(0.5);
        // this.m2cbreash.inputEnabled=true;
        // this.m2cbreash.input.useHandCursor=true;
        this.m2cbreash.events.onInputDown.add(function(){
        	game.world.bringToTop(this.m2cbreash);

          this.arrow9.visible=false;
          this.arrow10.visible=true;
          this.m2cbreash.inputEnabled=false;
          this.irdrag=true;
        },this);

        this.hitGroup9 = game.add.group();
          for(var i=0; i<=Main.tool9X.length-1; i++)
              {
          this["hitCircle_i"+i] = game.add.graphics(Main.tool9X[i],Main.tool9Y[i]);
          this["hitCircle_i"+i].beginFill(0x000000,0);
          this["hitCircle_i"+i].drawCircle(0,0,60);
          this["hitCircle_i"+i].id = i;
          this.hitGroup9.add(this["hitCircle_i"+i]);
          game.physics.arcade.enable([this["hitCircle_i"+i]]);
          this["hitCircle_i"+i].body.collideWorldBounds = true;
                }
         

          this.circleGroup9 = game.add.group();
          this.circle9 = game.add.graphics(0,0);
          this.circle9.beginFill(0x000000,0);
          this.circleGroup9.add(this.circle9);
          this.gmask.mask = this.circle9;

          this.cragCircla9 = game.add.graphics(0,0);
          this.cragCircla9.beginFill(0x000000, 0);
          this.cragCircla9.drawCircle(0,0,60);
          this.cragCircla9.endFill();

          this.hitSpritea9_cnt = 0;

          game.physics.arcade.enable([this.cragCircla9]);  
          this.cragCircla9.body.collideWorldBounds = true;
          this.cragCircla9.body.onCollide = new Phaser.Signal();
          this.cragCircla9.body.onCollide.add(this.hitSprite9, this);

  /////////////////////////////////////////////////////////////////////////////////////////

        this.taval22=game.add.sprite(437,650,'taval1');
        this.taval22.anchor.setTo(0.5);
        this.taval22.visible=false;


        this.taval111=game.add.sprite(437,650,'taval1');
        this.taval111.anchor.setTo(0.5);
        // this.taval111.inputEnabled=true;
        // this.taval111.input.useHandCursor=true;
        this.taval111.events.onInputDown.add(function(){
        	game.world.bringToTop(this.taval111);

          this.arrow13.visible=false;
          this.arrow14.visible=true;
         
        this.taval111.inputEnabled=false;
        this.taval111.loadTexture('taval2');
        this.jrdrag=true;
       
        },this);
       this.taval111.visible=false;
        this.hitGroup10 = game.add.group();
          for(var i=0; i<=Main.tool10X.length-1; i++)
              {
          this["hitCircle_j"+i] = game.add.graphics(Main.tool10X[i],Main.tool10Y[i]);
          this["hitCircle_j"+i].beginFill(0x000000,0);
          this["hitCircle_j"+i].drawCircle(0,0,60);
          this["hitCircle_j"+i].id = i;
          this.hitGroup10.add(this["hitCircle_j"+i]);
          game.physics.arcade.enable([this["hitCircle_j"+i]]);
          this["hitCircle_j"+i].body.collideWorldBounds = true;
                }
         


          this.cragCircla10 = game.add.graphics(0,0);
          this.cragCircla10.beginFill(0x000000, 0);
          this.cragCircla10.drawCircle(0,0,40);
          this.cragCircla10.endFill();

          this.hitSpritea10_cnt = 0;

          game.physics.arcade.enable([this.cragCircla10]);  
          this.cragCircla10.body.collideWorldBounds = true;
          this.cragCircla10.body.onCollide = new Phaser.Signal();
          this.cragCircla10.body.onCollide.add(this.hitSprite10, this);


///////////////////  new m1 shawer //////////////////////////////////////////////////////////////////
 
        this.m1shawer33333=game.add.sprite(300,600,'m1shawer10002');
        this.m1shawer33333.anchor.setTo(0.5);
        // this.m1shawer33333.inputEnabled=true;
        // this.m1shawer33333.input.useHandCursor=true;
        this.m1shawer33333.events.onInputDown.add(function(){
        	game.world.bringToTop(this.m1shawer33333);
        	game.world.bringToTop(this.musicButton);
        	game.world.bringToTop(this.shutter);
        	game.world.bringToTop(this.logoVar);

           this.arrow11.visible=false;
            this.arrow12.visible=true;

        this.m1shawer33333.inputEnabled=false;
        this.mrdrag=true;
        },this);
        this.m1shawer33333.visible=false;

         this.hitGroup14 = game.add.group();
          for(var i=0; i<=Main.tool14X.length-1; i++)
              {
          this["hitCircle_m"+i] = game.add.graphics(Main.tool14X[i],Main.tool14Y[i]);
          this["hitCircle_m"+i].beginFill(0x000000,0);
          this["hitCircle_m"+i].drawCircle(0,0,60);
          this["hitCircle_m"+i].id = i;
          this.hitGroup14.add(this["hitCircle_m"+i]);
          game.physics.arcade.enable([this["hitCircle_m"+i]]);
          this["hitCircle_m"+i].body.collideWorldBounds = true;
                }
     

          this.cragCircla14 = game.add.graphics(0,0);
          this.cragCircla14.beginFill(0x000000, 0);
          this.cragCircla14.drawCircle(0,0,40);
          this.cragCircla14.endFill();

          this.hitSpritea14_cnt = 0;

          game.physics.arcade.enable([this.cragCircla14]);  
          this.cragCircla14.body.collideWorldBounds = true;
          this.cragCircla14.body.onCollide = new Phaser.Signal();
          this.cragCircla14.body.onCollide.add(this.hitSprite14, this);




         this.arrowgp = game.add.group();

                      //1   2   3   4   5   6   7   8   9  10  11  12  13   14  15  16  17  18  19  20  21 22  23  24  25;

         var arro2x = [310,250,200,250,310,250,440,250,120,250,310,250,430,250,190,300,450,300,190,300,320,380];
         var arro2y = [500,210,570,210,500,210,570,210,560,210,500,210,580,210,610,240,520,240,610,240,640,390];

         for(i=1;i<=25;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',20,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=true;
          }
          if(i==2){
          this['arrow'+i].visible=false;
          }
            if(i==3){
          this['arrow'+i].visible=false;
          }
            if(i==4){
          this['arrow'+i].visible=false;
          }
            if(i==5){
          this['arrow'+i].visible=false;
          }
            if(i==6){
          this['arrow'+i].visible=false;
          }
            if(i==7){
          this['arrow'+i].visible=false;
          }
            if(i==8){
          this['arrow'+i].visible=false;
          }
            if(i==9){
          this['arrow'+i].visible=false;
          }

           if(i==10){
          this['arrow'+i].visible=false;
          }
            if(i==11){
          this['arrow'+i].visible=false;
          }
            if(i==12){
          this['arrow'+i].visible=false;
          }
            if(i==13){
          this['arrow'+i].visible=false;
          }
            if(i==14){
          this['arrow'+i].visible=false;
          }
            if(i==15){
          this['arrow'+i].visible=false;
          }
            if(i==16){
          this['arrow'+i].visible=false;
          }
            if(i==17){
          this['arrow'+i].visible=false;
          }
            if(i==18){
          this['arrow'+i].visible=false;
          }
            if(i==19){
          this['arrow'+i].visible=false;
          }
            if(i==20){
          this['arrow'+i].visible=false;
          }
           if(i==21){
          this['arrow'+i].visible=false;
          }
           if(i==22){
          this['arrow'+i].visible=false;
          this['arrow'+i].rotation=1.7;
          }
          if(i==23){
          this['arrow'+i].visible=false;
          }
          if(i==24){
          this['arrow'+i].visible=false;
          }
          if(i==25){
          this['arrow'+i].visible=false;
          }

          this.arrowgp.add(this['arrow'+i]);
          
         }



         this.morebtn = game.add.sprite(85,730,'more');
         this.morebtn.anchor.setTo(0.5);
         // this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'done');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'downloadnew');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
       
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

          hitSprite5:function(sprite1, sprite2){
          sprite2.kill();
          this.hitSpritea5_cnt ++
         this.arrow2.visible=false;

          this.watermask.visible=true;
          this.m1shawer10002.animations.add('m1shawer10002',[1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
          this.m1shawer10002.animations.play('m1shawer10002',15,true).onComplete.add(function(){
          },this);
            
          if (this.hitSpritea5_cnt >=32) {
          this.erdrag=false;
          this.m1shawer10002.frame=0;
          this.m1shawer10002.animations.stop();
          game.add.tween(this.m1shawer10002).to({x:300,y:600},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            this.m1shawer10002.visible=false;
            this.m1shawer1000222.visible=true;
            this.arrow3.visible=true;
             this.soef.inputEnabled=true;
             this.soef.input.useHandCursor=true;

          },this); 
             
   
    }
            this.circle5.drawCircle(Main.tool5X[sprite2.id],Main.tool5Y[sprite2.id],40);

        },
   //////////////////////////////////////////////////////

          hitSprite6:function(sprite1, sprite2){
          // console.log(this.hitSpritea6_cnt);
          sprite2.kill();
          this.hitSpritea6_cnt ++
          this.bublemask.visible=true;
          this.arrow4.visible=false;
            
          if (this.hitSpritea6_cnt >=32) {
            // console.log('watermask')
          game.add.tween(this.watermask).to({alpha:0},800,Phaser.Easing.Quadratic.Out,true);
          this.frdrag=false;
          game.add.tween(this.soef).to({x:206,y:628},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
                 this.arrow5.visible=true;
                  this.m1shawer1000222.inputEnabled=true;
                  this.m1shawer1000222.input.useHandCursor=true;
                  

          },this);  
             
   
    }
            this.circle6.drawCircle(Main.tool6X[sprite2.id],Main.tool6Y[sprite2.id],60);

        },  

        //////////////////////////////////////////////////////


          hitSprite7:function(sprite1, sprite2){
          // console.log(this.hitSpritea7_cnt);
          sprite2.kill();
          this.hitSpritea7_cnt ++
          this.arrow6.visible=false;
          game.add.tween(this.bublemask).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

          },this);

          this.watermask222.visible=true;
          this.m1shawer1000222.animations.add('m1shawer1000222',[1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
          this.m1shawer1000222.animations.play('m1shawer1000222',15,true).onComplete.add(function(){
          },this);
            
          if (this.hitSpritea7_cnt >=32) {
          this.grdrag=false;
          this.m1shawer1000222.frame=0;
          this.m1shawer1000222.animations.stop();
          game.add.tween(this.m1shawer1000222).to({x:300,y:600},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
            this.arrow7.visible=true;
            this.m1shawer1000222.inputEnabled=false;
             this.taval1.inputEnabled=true;
             this.taval1.input.useHandCursor=true;


          },this);  
             
   
    }
            this.circle7.drawCircle(Main.tool7X[sprite2.id],Main.tool7Y[sprite2.id],60);

        }, 


        //////////////////////////////////////////////////////

         hitSprite8:function(sprite1, sprite2){
          // console.log(this.hitSpritea8_cnt);
          sprite2.kill();
          this.hitSpritea8_cnt ++
          this.arrow8.visible=false;

           
             
            
          if (this.hitSpritea8_cnt >=32) {
             this.hrdrag=false;
               this.taval1.visible=false;
             this.taval111.visible=true;
              game.add.tween(this.watermask222).to({alpha:0},400,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
              this.arrow9.visible=true;
              this.m2cbreash.inputEnabled=true;
                this.m2cbreash.input.useHandCursor=true;
                 
            },this);
             
          
   
    }
            // this.circle8.drawCircle(Main.tool8X[sprite2.id],Main.tool8Y[sprite2.id],60);

        }, 


        //////////////////////////////////////////////////////


          hitSprite9:function(sprite1, sprite2){
          // console.log(this.hitSpritea9_cnt);
          sprite2.kill();
          this.hitSpritea9_cnt ++
          this.gmask.visible=true;
          this.arrow10.visible=false;
            
          if (this.hitSpritea9_cnt >=32) {
          this.irdrag=false;
          game.add.tween(this.m2cbreash).to({x:114.5,y:633.45},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

              game.add.tween(this.t_timer).to({x:100},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          
            this.t_timer.animations.add('t_timer');
            this.t_timer.animations.play('t_timer',15,false).onComplete.add(function(){
          game.add.tween(this.t_timer).to({x:-100},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          
            this.arrow11.visible=true;
            this.m1shawer1000222.visible=false;
            this.m1shawer33333.visible=true;
            this.m1shawer33333.inputEnabled=true;
           this.m1shawer33333.input.useHandCursor=true;
           //  this.taval111.inputEnabled=true;
           // this.taval111.input.useHandCursor=true;

          },this);  
          },this);  
          },this);  
          },this);   
             
   
    }
            this.circle9.drawCircle(Main.tool9X[sprite2.id],Main.tool9Y[sprite2.id],60);

        }, 


        //////////////////////////////////////////////////////

         hitSprite10:function(sprite1, sprite2){
          // console.log(this.hitSpritea10_cnt);
          sprite2.kill();
          this.hitSpritea10_cnt ++
          this.arrow14.visible=false;

           
        
            
          if (this.hitSpritea10_cnt >=32) { 
          this.jrdrag=false;
          this.taval111.visible=false; 
           this.taval22.visible=true;
          game.add.tween(this.watermask).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
       
          game.add.tween(this.playbtn.scale).to({x:1,y:1}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         },this);
          },this);
          

             
   
    }
            // this.circle10.drawCircle(Main.tool10X[sprite2.id],Main.tool10Y[sprite2.id],60);

        }, 


        //////////////////////////////////////////////////////


          hitSprite14:function(sprite1, sprite2){
          // console.log(this.hitSpritea14_cnt);
          sprite2.kill();
          this.hitSpritea14_cnt ++
          this.arrow12.visible=false;

          game.add.tween(this.gmask).to({alpha:0},2000,Phaser.Easing.Quadratic.Out,true);
          game.add.tween(this.watermask).to({alpha:1},1000,Phaser.Easing.Quadratic.Out,true);

          this.m1shawer33333.animations.add('m1shawer33333',[1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
          this.m1shawer33333.animations.play('m1shawer33333',15,true).onComplete.add(function(){
          },this);
            
          if (this.hitSpritea14_cnt >=32) {
             this.mrdrag=false;
              this.m1shawer33333.frame=0;
          this.m1shawer33333.animations.stop();
           game.add.tween(this.m1shawer33333).to({x:300,y:600},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

          this.arrow13.visible=true;
            
           this.taval111.inputEnabled=true;
           this.taval111.input.useHandCursor=true;

           },this);
             
   
    }
            // this.circle14.drawCircle(Main.tool14X[sprite2.id],Main.tool14Y[sprite2.id],10);

        }, 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       
       //uuuuuuuu

        update:function(){

  // console.log(game.input.activePointer.x+"::::::::"+game.input.activePointer.y);

  //////graggrp////

  //r5

  if(this.erdrag) {

              this.m1shawer10002.x = game.input.activePointer.x-20;
              this.m1shawer10002.y = game.input.activePointer.y+30;

              this.cragCircla5.x = this.game.input.activePointer.x-50;
              this.cragCircla5.y = this.game.input.activePointer.y+30;
     
       for(var i=0;i<=Main.tool5X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla5, this['hitCircle_e'+i]);
                }
            }

            //r6

             if(this.frdrag) {

              this.soef.x = game.input.activePointer.x;
              this.soef.y = game.input.activePointer.y;

              this.cragCircla6.x = this.game.input.activePointer.x;
              this.cragCircla6.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool6X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla6, this['hitCircle_f'+i]);
                }
            }

            //r7

            if(this.grdrag) {

              this.m1shawer1000222.x = game.input.activePointer.x-20;
              this.m1shawer1000222.y = game.input.activePointer.y+30;

              this.cragCircla7.x = this.game.input.activePointer.x-50;
              this.cragCircla7.y = this.game.input.activePointer.y+30;
     
       for(var i=0;i<=Main.tool7X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla7, this['hitCircle_g'+i]);
                }
            }

            //r8

       if(this.hrdrag) {

              this.taval1.x = game.input.activePointer.x;
              this.taval1.y = game.input.activePointer.y+50;

              this.cragCircla8.x = this.game.input.activePointer.x;
              this.cragCircla8.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool8X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla8, this['hitCircle_h'+i]);
                }
            }

            //r9

            if(this.irdrag) {

              this.m2cbreash.x = game.input.activePointer.x;
              this.m2cbreash.y = game.input.activePointer.y-10;

              this.cragCircla9.x = this.game.input.activePointer.x;
              this.cragCircla9.y = this.game.input.activePointer.y-40;
     
       for(var i=0;i<=Main.tool9X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla9, this['hitCircle_i'+i]);
                }
            }

            //r10

            if(this.jrdrag) {

              this.taval111.x = game.input.activePointer.x;
              this.taval111.y = game.input.activePointer.y+50;

              this.cragCircla10.x = this.game.input.activePointer.x;
              this.cragCircla10.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool10X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla10, this['hitCircle_j'+i]);
                }
            }

      //r11

       if(this.mrdrag) {

              this.m1shawer33333.x = game.input.activePointer.x-20;
              this.m1shawer33333.y = game.input.activePointer.y+30;

              this.cragCircla14.x = this.game.input.activePointer.x;
              this.cragCircla14.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool14X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla14, this['hitCircle_m'+i]);
                }
            }

 },

openLink:function()
{
  // YYGSDK.navigate("game","logo");
},
moreLink:function()
{
 // YYGSDK.navigate("game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   // game.world.bringToDwon(this.playbtn);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
    MyShowAD('makeup1');
         });   
   },
}





game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('final_screen', Main.final_screen);
game.state.add('annadressup', Main.annadressup);
game.state.add('perfume_popup', Main.perfume_popup);
game.state.add('scene1', Main.scene1);
game.state.add('cooking_1', Main.cooking_1);
game.state.add('scene2', Main.scene2);
game.state.add('scene3', Main.scene3);
game.state.add('scene4', Main.scene4);
game.state.add('scene5', Main.scene5);
game.state.add('scene6', Main.scene6);
game.state.add('scene7', Main.scene7);
game.state.add('alignment', Main.alignment);
game.state.add('makeup1', Main.makeup1);
game.state.add('cleanface', Main.cleanface);
game.state.add('loons', Main.loons);
game.state.add('intro2', Main.intro2);
game.state.add('perfum_spray', Main.perfum_spray);


game.state.start('boot');